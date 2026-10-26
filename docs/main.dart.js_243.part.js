((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,L,Q,E,M,A_,N,A0,R,O,A1,S,A2,P,A3,A4,T,A5,A6,A7,A8,A9,Aa,U,Ab,C={
fSt(d,e,f){var w=null,v=f.k("Et<0>"),u=new B.Et(w,w,w,w,v)
$.a0s()
u.d=new C.cl8(new B.Vz(),e,u,f,d)
return new B.hK(u,v.k("hK<1>"))},
cl8:function cl8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cl9:function cl9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cl5:function cl5(d){this.a=d},
cl6:function cl6(d,e){this.a=d
this.b=e},
cl7:function cl7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cl4:function cl4(d,e,f){this.a=d
this.b=e
this.c=f},
bn5:function bn5(d){this.a=d},
fSs(d,e,f,g){return new C.asz(d,e,f,null,g.k("asz<0>"))},
DN:function DN(){},
aEJ:function aEJ(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
eKV:function eKV(d){this.a=d},
eKU:function eKU(d,e){this.a=d
this.b=e},
eKX:function eKX(d){this.a=d},
eKS:function eKS(d,e,f){this.a=d
this.b=e
this.c=f},
eKW:function eKW(d){this.a=d},
eKT:function eKT(d){this.a=d},
asz:function asz(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
hGt(d){var w=A.a.i(d)
while(A.a.a_(w,"$"))w=A.a.i(A.a.aU(w,1))
return w},
h1o(d){var w=C.hGt(d)
if(w.length===0)return""
return"$"+w},
fdt(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fdt=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:i=A.a.i(d.toLowerCase())
if(i.length===0){w=1
break}t=new B.N(Date.now(),0,!1).bL(-31536e11)
s=e.length,r=0
case 3:if(!(r<e.length)){w=5
break}q=e[r]
if(A.a.i(q.b.toLowerCase())!==i){w=4
break}p=q.y
o=p.a
if(o>=t.gbn())o=o===t.gbn()&&p.b<t.gcB()
else o=!0
if(o){w=4
break}if(q.x!==A.cc){w=4
break}if(q.d!==A.fA){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!B.dm(m,"game payout:",0))if(!B.dm(m,"game partial:",0)){if(!B.dm(m,"multiplayer payout:",0))o=B.dm(m,"dice",0)&&q.e===A.eX
else o=l
l=o}if(!l){w=4
break}if(B.dm(m,"game payout:",0))k=A.a.i(A.a.aU(n,A.a.cP(m,"game payout:")+12))
else if(B.dm(m,"game partial:",0)){k=A.a.i(A.a.aU(n,A.a.cP(m,"game partial:")+13))
j=A.a.cP(k,"(")
if(j>0)k=A.a.i(A.a.al(k,0,j))}else if(B.dm(m,"multiplayer payout:",0)){k=A.a.i(A.a.aU(n,A.a.cP(m,"multiplayer payout:")+19))
j=A.a.cP(k,"(")
if(j>0)k=A.a.i(A.a.al(k,0,j))}else k=B.dm(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return B.b(C.v_(q.c,p,n,d,o,null,q.a,!0),$async$fdt)
case 6:case 4:e.length===s||(0,B.J)(e),++r
w=3
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$fdt,v)},
hL0(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
hHt(d,e,f){return A.d.be(e,new C.fha(f,A.a.i(d.toLowerCase())))},
fh3(d){var w
B.fzi(d)
w=d.ci
return B.bi(new B.I(w,new C.fh4(),B.S(w).k("I<1,@>")),!0,x.N)},
hxE(d,e,f){var w,v,u,t,s,r,q=null,p=A.bM,o=A.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aS.toString
u=$.eb().gi2().b
if(u.a===0)t=1
else{new B.bf(u,B.a2(u).k("bf<2>")).gI(0)
u=$.kO()
s=u.d
t=s==null?u.gfY():s}w=A.k.dF(f*t)
v=new C.f2k(f)
if(J.cT(n,"data:image"))try{u=B.fC(A.cw.aE(A.d.gai(J.l8(n,","))),A.B,w,new C.f2h(v),A.fG,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.cT(n,"supabase://"))return new B.kU(B.a_g(n),new C.f2i(f,e,p,w,v),q,q,x.gh)
return B.k7(n,A.B,w,new C.f2j(v),A.fG,p,!0,e,q,q,f)},
fE4(d,e){return new B.a3(e,e,B.hN(C.hxE(d,e,e),A.ap),null)},
hqm(){var w,v,u=B.a([],x._),t=x.N,s=B.z(D.cWO,x.gm)
for(w=0;w<70;++w){v=A.AG[w]
s.push(new C.o2(v.a,v.b,v.c,v.e,v.f))}return new C.ax4(u,B.R(t,t),s)},
fha:function fha(d,e){this.a=d
this.b=e},
fh4:function fh4(){},
f2k:function f2k(d){this.a=d},
f2h:function f2h(d){this.a=d},
f2i:function f2i(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f2g:function f2g(d){this.a=d},
f2j:function f2j(d){this.a=d},
ail:function ail(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
o2:function o2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
ax4:function ax4(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
d27:function d27(d,e){this.a=d
this.b=e},
d2i:function d2i(d,e){this.a=d
this.b=e},
d2A:function d2A(){},
d2B:function d2B(d){this.a=d},
d2q:function d2q(d,e){this.a=d
this.b=e},
d2p:function d2p(){},
d2r:function d2r(d){this.a=d},
d2o:function d2o(){},
d2t:function d2t(d){this.a=d},
d2s:function d2s(){},
d2l:function d2l(d){this.a=d},
d2j:function d2j(d){this.a=d},
d2k:function d2k(d){this.a=d},
d2m:function d2m(d){this.a=d},
d2n:function d2n(d){this.a=d},
d2d:function d2d(d,e){this.a=d
this.b=e},
d2e:function d2e(d,e){this.a=d
this.b=e},
d2b:function d2b(d){this.a=d},
d2c:function d2c(d){this.a=d},
d2f:function d2f(d){this.a=d},
d2g:function d2g(d){this.a=d},
d2h:function d2h(d,e,f){this.a=d
this.b=e
this.c=f},
d2a:function d2a(d,e){this.a=d
this.b=e},
d29:function d29(d,e){this.a=d
this.b=e},
d28:function d28(d,e){this.a=d
this.b=e},
d2z:function d2z(d){this.a=d},
d2x:function d2x(d,e,f){this.a=d
this.b=e
this.c=f},
d2w:function d2w(d,e,f){this.a=d
this.b=e
this.c=f},
d2v:function d2v(d,e){this.a=d
this.b=e},
d2u:function d2u(){},
d2y:function d2y(d){this.a=d},
azT:function azT(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bfl:function bfl(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
dFj:function dFj(d){this.a=d},
dFi:function dFi(d){this.a=d},
dFk:function dFk(d){this.a=d},
dFh:function dFh(){},
dFl:function dFl(d,e){this.a=d
this.b=e},
dFg:function dFg(d){this.a=d},
dFm:function dFm(d){this.a=d},
aik:function aik(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ax3:function ax3(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
d21:function d21(d){this.a=d},
d24:function d24(d){this.a=d},
d25:function d25(d){this.a=d},
d26:function d26(d){this.a=d},
d23:function d23(d,e){this.a=d
this.b=e},
d22:function d22(d,e){this.a=d
this.b=e},
aim:function aim(d,e,f,g,h,i,j,k,l,m){var _=this
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
ax5:function ax5(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.Y=_.b1=_.bc=_.y2=_.y1=0
_.aA=_.aK=_.az=_.aq=$
_.bE=_.b6=_.aW=_.aZ=null
_.aM=!1
_.bQ=_.bg=null
_.ci=!1
_.cd=_.cT=""
_.c=_.a=_.by=null},
d3U:function d3U(d,e){this.a=d
this.b=e},
d3X:function d3X(d){this.a=d},
d3Y:function d3Y(d){this.a=d},
d3Z:function d3Z(d){this.a=d},
d4_:function d4_(d){this.a=d},
d40:function d40(d){this.a=d},
d3V:function d3V(d){this.a=d},
d3W:function d3W(d){this.a=d},
d39:function d39(d,e){this.a=d
this.b=e},
d3a:function d3a(d,e){this.a=d
this.b=e},
d3D:function d3D(d){this.a=d},
d3E:function d3E(){},
d3p:function d3p(d,e,f){this.a=d
this.b=e
this.c=f},
d3q:function d3q(d){this.a=d},
d3r:function d3r(d,e,f){this.a=d
this.b=e
this.c=f},
d3s:function d3s(d,e){this.a=d
this.b=e},
d3t:function d3t(){},
d2C:function d2C(d){this.a=d},
d38:function d38(d,e){this.a=d
this.b=e},
d3F:function d3F(){},
d3O:function d3O(){},
d3C:function d3C(d){this.a=d},
d3B:function d3B(d){this.a=d},
d36:function d36(d){this.a=d},
d37:function d37(){},
d3J:function d3J(){},
d3K:function d3K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d3L:function d3L(d,e,f){this.a=d
this.b=e
this.c=f},
d2D:function d2D(){},
d2E:function d2E(d){this.a=d},
d2F:function d2F(){},
d3i:function d3i(d,e){this.a=d
this.b=e},
d3j:function d3j(d,e,f){this.a=d
this.b=e
this.c=f},
d3k:function d3k(d){this.a=d},
d3h:function d3h(d){this.a=d},
d3u:function d3u(d){this.a=d},
d3v:function d3v(){},
d3w:function d3w(d){this.a=d},
d3x:function d3x(){},
d3y:function d3y(d){this.a=d},
d3z:function d3z(){},
d3I:function d3I(d,e,f){this.a=d
this.b=e
this.c=f},
d3l:function d3l(d){this.a=d},
d3m:function d3m(d,e){this.a=d
this.b=e},
d3n:function d3n(d){this.a=d},
d3o:function d3o(d){this.a=d},
d3M:function d3M(d){this.a=d},
d3N:function d3N(d){this.a=d},
d2G:function d2G(d){this.a=d},
d2H:function d2H(d,e){this.a=d
this.b=e},
d2I:function d2I(d){this.a=d},
d2J:function d2J(d){this.a=d},
d3G:function d3G(d,e){this.a=d
this.b=e},
d3H:function d3H(d){this.a=d},
d3g:function d3g(d,e){this.a=d
this.b=e},
d3A:function d3A(d,e,f){this.a=d
this.b=e
this.c=f},
d3e:function d3e(d,e,f){this.a=d
this.b=e
this.c=f},
d3f:function d3f(){},
d3P:function d3P(d){this.a=d},
d3Q:function d3Q(d){this.a=d},
d3R:function d3R(d){this.a=d},
d3T:function d3T(d){this.a=d},
d3S:function d3S(){},
d3d:function d3d(d,e,f){this.a=d
this.b=e
this.c=f},
d3c:function d3c(d,e){this.a=d
this.b=e},
d3b:function d3b(d,e){this.a=d
this.b=e},
d2W:function d2W(d){this.a=d},
d2V:function d2V(d,e){this.a=d
this.b=e},
d2X:function d2X(d){this.a=d},
d2U:function d2U(d,e){this.a=d
this.b=e},
d2Y:function d2Y(d){this.a=d},
d2T:function d2T(){},
d2Z:function d2Z(d){this.a=d},
d2R:function d2R(){},
d2S:function d2S(d){this.a=d},
d3_:function d3_(d){this.a=d},
d2Q:function d2Q(d,e){this.a=d
this.b=e},
d30:function d30(d){this.a=d},
d2P:function d2P(d,e){this.a=d
this.b=e},
d2L:function d2L(d,e){this.a=d
this.b=e},
d31:function d31(d){this.a=d},
d2O:function d2O(d,e){this.a=d
this.b=e},
d32:function d32(d){this.a=d},
d2N:function d2N(d){this.a=d},
d2K:function d2K(d,e){this.a=d
this.b=e},
d33:function d33(d,e,f){this.a=d
this.b=e
this.c=f},
d34:function d34(d){this.a=d},
d2M:function d2M(){},
d35:function d35(d){this.a=d},
aje:function aje(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bcx:function bcx(){this.c=this.a=null},
d7b:function d7b(d,e){this.a=d
this.b=e},
d7a:function d7a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afA:function afA(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
auk:function auk(d,e,f,g,h,i,j,k,l,m){var _=this
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
cwd:function cwd(d){this.a=d},
cvy:function cvy(d,e){this.a=d
this.b=e},
cvo:function cvo(d){this.a=d},
cvp:function cvp(d){this.a=d},
cvI:function cvI(d){this.a=d},
cvF:function cvF(d){this.a=d},
cvG:function cvG(d){this.a=d},
cvH:function cvH(d,e,f){this.a=d
this.b=e
this.c=f},
cvA:function cvA(d){this.a=d},
cvz:function cvz(d){this.a=d},
cvq:function cvq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cvD:function cvD(d){this.a=d},
cvC:function cvC(d){this.a=d},
cvB:function cvB(d,e){this.a=d
this.b=e},
cw0:function cw0(d){this.a=d},
cvV:function cvV(d){this.a=d},
cvY:function cvY(d){this.a=d},
cvX:function cvX(){},
cvU:function cvU(d){this.a=d},
cvW:function cvW(d,e){this.a=d
this.b=e},
cvT:function cvT(){},
cvv:function cvv(){},
cvw:function cvw(d,e){this.a=d
this.b=e},
cvx:function cvx(d){this.a=d},
cvt:function cvt(d,e){this.a=d
this.b=e},
cvu:function cvu(d,e){this.a=d
this.b=e},
cvL:function cvL(d,e){this.a=d
this.b=e},
cvE:function cvE(d){this.a=d},
cvM:function cvM(d){this.a=d},
cvN:function cvN(d,e){this.a=d
this.b=e},
cvO:function cvO(d,e){this.a=d
this.b=e},
cvP:function cvP(d,e){this.a=d
this.b=e},
cvQ:function cvQ(d,e,f){this.a=d
this.b=e
this.c=f},
cvR:function cvR(d){this.a=d},
cvS:function cvS(d){this.a=d},
cvJ:function cvJ(d,e){this.a=d
this.b=e},
cw_:function cw_(d){this.a=d},
cvK:function cvK(d,e){this.a=d
this.b=e},
cwc:function cwc(d){this.a=d},
cw5:function cw5(d){this.a=d},
cw8:function cw8(d){this.a=d},
cw2:function cw2(d,e){this.a=d
this.b=e},
cw6:function cw6(){},
cw7:function cw7(d,e){this.a=d
this.b=e},
cw3:function cw3(d){this.a=d},
cw4:function cw4(d){this.a=d},
cwa:function cwa(){},
cw9:function cw9(d){this.a=d},
cw1:function cw1(d,e){this.a=d
this.b=e},
cwb:function cwb(d){this.a=d},
cvr:function cvr(d){this.a=d},
cvZ:function cvZ(d,e){this.a=d
this.b=e},
cvs:function cvs(d,e,f){this.a=d
this.b=e
this.c=f},
aH6:function aH6(){},
aH7:function aH7(){},
aH8:function aH8(){},
aI3:function aI3(){},
bTo(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase())
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
bTp(d){var w=A.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hdW(d,e){var w=d.ax
if(w<0)return!1
return w===e},
aTY(d,e){return C.hdX(d,e)},
hdX(d,e){var w=0,v=B.j(x.di),u,t,s,r,q,p
var $async$aTY=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aXK(d),$async$aTY)
case 3:p=g
if(p!=null){try{t=A.Q.aC(0,p.c,null)
if(x.f.b(t)){s=C.fNg(B.Z(t,x.N,x.z))
if(s==null){u=new B.Eo(D.a1j,null)
w=1
break}if(A.a.i(e).length!==0&&!C.bTo(s,e,p.b)){u=new B.Eo(D.aAj,null)
w=1
break}r=p.a?D.dEJ:D.aAi
u=new B.Eo(r,s)
w=1
break}}catch(o){}u=new B.Eo(D.a1j,null)
w=1
break}s=C.fNh(d)
if(s==null){u=new B.Eo(D.a1j,null)
w=1
break}if(A.a.i(e).length!==0&&!C.bTo(s,e,null)){u=new B.Eo(D.aAj,null)
w=1
break}u=new B.Eo(D.aAi,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aTY,v)},
fNh(d){var w,v,u,t,s,r
try{w=A.a.i(d)
if(J.cT(w,"\ufeff"))w=J.mf(w,1)
v=!1
if(J.cT(w,"NGMYSNAP1|")){v=!0
w=A.c0.c4(0,A.cw.aE(J.mf(w,10)))}u=A.Q.aC(0,w,null)
if(!x.f.b(u))return null
t=B.Z(u,x.N,x.z)
s=v?C.hdV(t):C.fNg(t)
return s}catch(r){return null}},
hdV(d){var w,v,u,t,s,r,q,p,o,n=new C.bTl(),m=new C.bTk(),l=d.h(0,"qi")
if(x.f.b(l)){w=B.Z(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new B.N(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=B.aQ(w.h(0,"d"))
p=new B.uy(v,u,t,s,r,A.k.M(q==null?0:q))}else p=null
v=d.h(0,"qu")
v=J.k(v==null?"User":v)
u=m.$1(d.h(0,"qb"))
t=m.$1(d.h(0,"qp"))
s=J.y(d.h(0,"qc"),!0)
r=n.$1(d.h(0,"qs"))
q=n.$1(d.h(0,"ql"))
n=n.$1(d.h(0,"qe"))
m=m.$1(d.h(0,"qt"))
o=B.aQ(d.h(0,"qn"))
if(o==null)o=0
return new B.a3F("","",v,u,t,s,r,q,n,m,o,p,A.hN,new B.N(Date.now(),0,!1),-1)},
fNg(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.y(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.bTn()
v=d.h(0,"activeInvestment")
if(x.f.b(v)){u=B.Z(v,x.N,x.z)
t=u.h(0,"name")
t=J.k(t==null?"":t)
s=B.aQ(u.h(0,"amount"))
if(s==null)s=0
r=B.aQ(u.h(0,"dailyROI"))
if(r==null)r=0
q=w.$1(u.h(0,"purchaseDate"))
if(q==null)q=new B.N(Date.now(),0,!1)
p=B.aQ(u.h(0,"totalEarned"))
if(p==null)p=0
o=B.aQ(u.h(0,"daysClockedIn"))
n=new B.uy(t,s,r,q,p,A.k.M(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=B.z(new B.e2(J.b4(m,new C.bTm(w),x.eG),t),t.k("E.E"))}else l=B.a([],x.E)
t=d.h(0,"email")
t=J.k(t==null?"":t)
s=d.h(0,"ownerRealEmail")
s=J.k(s==null?"":s)
r=d.h(0,"username")
r=J.k(r==null?"User":r)
q=B.aQ(d.h(0,"accountBalance"))
if(q==null)q=0
p=B.aQ(d.h(0,"totalProfit"))
if(p==null)p=0
o=J.y(d.h(0,"isClockedIn"),!0)
k=w.$1(d.h(0,"clockInStartTime"))
j=w.$1(d.h(0,"lastClockInDate"))
i=w.$1(d.h(0,"lastClockInEarningsDate"))
h=B.aQ(d.h(0,"todayClockInEarned"))
if(h==null)h=0
g=B.aQ(d.h(0,"clockInPenaltyPercent"))
if(g==null)g=0
w=w.$1(d.h(0,"exportedAt"))
if(w==null)w=new B.N(Date.now(),0,!1)
f=B.aQ(d.h(0,"walletStateRevision"))
f=f==null?null:A.k.M(f)
return new B.a3F(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
fyE(d,e,f,g){var w=0,v=B.j(x.N),u,t,s,r
var $async$fyE=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:t=B.bTj(d,e,f,g)
s=B.ad("[^\\w\\-.]+",!0,!1,!1,!1)
r=B.aI(t.a,s,"_")
u=B.ES(B.Id(t.eD(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fyE,v)},
TZ:function TZ(d,e){this.a=d
this.b=e},
bTl:function bTl(){},
bTk:function bTk(){},
bTn:function bTn(){},
bTm:function bTm(d){this.a=d},
hAB(d){return B.cb(null,A.aV,!0,null,new C.f5z(),d,null,!0,!0,x.N)},
hAO(d,e,f,g){return B.cb(null,A.aV,!0,null,new C.f6M(g,f,e),d,null,!0,!0,x.y)},
akM:function akM(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
az8:function az8(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dnB:function dnB(d,e){this.a=d
this.b=e},
dnC:function dnC(d){this.a=d},
dns:function dns(d,e){this.a=d
this.b=e},
dnq:function dnq(d){this.a=d},
dnA:function dnA(d){this.a=d},
dnz:function dnz(d,e){this.a=d
this.b=e},
dnp:function dnp(d,e){this.a=d
this.b=e},
dno:function dno(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dnr:function dnr(d){this.a=d},
dny:function dny(){},
dnw:function dnw(d){this.a=d},
dnx:function dnx(d,e){this.a=d
this.b=e},
dnt:function dnt(){},
dnu:function dnu(d,e){this.a=d
this.b=e},
dnv:function dnv(d,e){this.a=d
this.b=e},
dnD:function dnD(d){this.a=d},
Ze:function Ze(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bnB:function bnB(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
XU:function XU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
beW:function beW(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dnH:function dnH(d){this.a=d},
dnE:function dnE(d,e){this.a=d
this.b=e},
dnF:function dnF(d,e){this.a=d
this.b=e},
dnG:function dnG(d){this.a=d},
XV:function XV(d){this.a=d},
beX:function beX(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dnI:function dnI(d,e){this.a=d
this.b=e},
f5z:function f5z(){},
f6M:function f6M(d,e,f){this.a=d
this.b=e
this.c=f},
abY:function abY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eEQ:function eEQ(d){this.a=d},
eER:function eER(d){this.a=d},
O6:function O6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
X1:function X1(d){this.a=d},
awu:function awu(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cYr:function cYr(d){this.a=d},
cYo:function cYo(){},
cYp:function cYp(d){this.a=d},
cYq:function cYq(d){this.a=d},
S4(d,e,f){var w=0,v=B.j(x.H),u,t,s
var $async$S4=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=A.a.i(d)
if(s.length===0||A.a.i(f).length===0){w=1
break}w=3
return B.b(B.L7(s),$async$S4)
case 3:t=h
J.ch(t,B.D(["role",e,"text",A.a.i(f),"at",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z))
w=4
return B.b(B.al1(s,t),$async$S4)
case 4:case 1:return B.h(u,v)}})
return B.i($async$S4,v)},
hee(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=B.S(d).k("a4<1>")
v=B.z(new B.a4(d,new C.bU6(),w),w.k("E.E"))
w=v.length
if(w===0)return""
u=w<=24?v:A.d.fT(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,B.J)(u),++s){r=u[s]
q=J.a6(r)
p=J.y(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+B.t(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
bU6:function bU6(){},
hFU(d){return A.d.dP(A.AG,new C.fdn(d),new C.fdo()).r},
fdn:function fdn(d){this.a=d},
fdo:function fdo(){},
alg:function alg(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bf2:function bf2(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
du2:function du2(d){this.a=d},
du1:function du1(d){this.a=d},
dtU:function dtU(d,e,f){this.a=d
this.b=e
this.c=f},
dtZ:function dtZ(d){this.a=d},
dtW:function dtW(d,e,f){this.a=d
this.b=e
this.c=f},
du_:function du_(d){this.a=d},
dtV:function dtV(d){this.a=d},
du0:function du0(d){this.a=d},
dtX:function dtX(d){this.a=d},
dtY:function dtY(d){this.a=d},
h0B(){var w=new B.N(Date.now(),0,!1),v=w.bL(B.dB(4-B.mu(w),0,0,0,0,0).a),u=B.bX(B.bv(v),1,4,0,0,0,0,0)
return""+B.bv(v)+"-W"+A.a.aT(A.o.u(1+A.k.bK(A.o.ak(v.bv(B.bX(B.bv(u),B.bB(u),B.bL(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
eYA(d,e){var w,v,u,t,s,r,q=B.EA(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=J.q(t,"email")
r=A.a.i(J.k(s==null?"":s).toLowerCase())
if((A.a.c5(r,"+local.ngmy")?A.a.al(r,0,r.length-11):r)===q)return t}t=B.D(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
hvo(d,e){var w,v,u,t,s,r,q,p=B.EA(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=J.a6(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c5(q,"+local.ngmy")?A.a.al(q,0,q.length-11):q)===p){w=B.aQ(s.h(t,"winsLeft"))
w=w==null?null:A.k.M(w)
return w==null?0:w}}return 0},
hOM(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=B.EA(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=J.a6(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c5(q,"+local.ngmy")?A.a.al(q,0,q.length-11):q)===n){w=B.aQ(s.h(t,o))
w=w==null?null:A.k.M(w)
p=(w==null?0:w)-1
s.m(t,o,p<0?0:p)
return}}},
hBo(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=B.EA(b5),b2=B.c1L(),b3=C.h0B()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=J.a6(s)
q=r.h(s,a2)
p=A.a.i(J.k(q==null?"":q).toLowerCase())
if((A.a.c5(p,a3)?A.a.al(p,0,p.length-11):p)!==b1)continue
q=B.aQ(r.h(s,a4))
o=q==null?a1:A.k.M(q)
if((o==null?0:o)<=0)continue
if(u!=null){r=r.h(s,a5)
r=J.k(r==null?"":r)
q=J.q(u,a5)
q=J.k(q==null?"":q)
if(r===q)r=0
else r=r<q?-1:1
r=r>=0}else r=!0
if(r)u=s}if(u!=null){w=J.a6(u)
v=B.aQ(w.h(u,a4))
v=v==null?a1:A.k.M(v)
w.m(u,a4,(v==null?1:v)-1)
w=B.aQ(w.h(u,"outcome"))
w=w==null?a1:A.k.M(w)
return w==null?1:w}n=new C.f7v()
for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=J.q(s,a2)
p=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c5(p,a3)?A.a.al(p,0,p.length-11):p)!==b1)continue
m=n.$5(s,"perDay",a6,a7,b2)
if(m!=null)return m}for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=J.q(s,a2)
p=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c5(p,a3)?A.a.al(p,0,p.length-11):p)!==b1)continue
l=n.$5(s,"perWeek",a8,a9,b3)
if(l!=null)return l}k=C.eYA(b4,b5)
w=J.a6(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?B.Z(v.a(w.h(k,b0)),r,q):B.R(r,q)
w.m(k,b0,j)
for(w=b4.y,w=new B.cN(w,B.a2(w).k("cN<1,2>")).gaf(0);w.C();){i=w.d
h=i.b
g=J.a6(h)
f=g.h(h,"perDay")
if(f==null)f=0
e=g.h(h,"perWeek")
if(e==null)e=0
if(f<=0&&e<=0)continue
h=i.a
d=v.b(j.h(0,h))?B.Z(v.a(j.h(0,h)),r,q):B.R(r,q)
j.m(0,h,d)
if(f>0){g=d.h(0,a7)
if(J.k(g==null?"":g)!==b2){d.m(0,a7,b2)
d.m(0,a6,0)}g=B.aQ(d.h(0,a6))
a0=g==null?a1:A.k.M(g)
if(a0==null)a0=0
if(a0<f){d.m(0,a6,a0+1)
return B.c3(h,a1)}}if(e>0){g=d.h(0,a9)
if(J.k(g==null?"":g)!==b3){d.m(0,a9,b3)
d.m(0,a8,0)}g=B.aQ(d.h(0,a8))
a0=g==null?a1:A.k.M(g)
if(a0==null)a0=0
if(a0<e){d.m(0,a8,a0+1)
return B.c3(h,a1)}}}return a1},
fYo(d,e){var w,v,u,t,s,r,q=B.a([],x.t)
for(w=[1,2,3],v=d.a,u=0;u<3;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
if(w===0)return 1
t=q[e.aG(w)]
if(t===3&&d.f>=d.e)t=e.hd()?1:2
return t},
fEm(d,e){var w,v,u,t,s,r,q=B.a([],x.t)
for(w=[-1,-2],v=d.a,u=0;u<2;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
return w===0?-1:q[e.aG(w)]},
hBp(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=B.EA(a3),a1=new C.f7w()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=J.a6(s)
q=r.h(s,"email")
p=A.a.i(J.k(q==null?"":q).toLowerCase())
if((A.a.c5(p,"+local.ngmy")?A.a.al(p,0,p.length-11):p)!==a0)continue
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
w=J.a6(u)
v=w.h(u,d)
l=J.k(v==null?"":v)
v=o>0?1:0
r=n>0?1:0
q=m>0?1:0
q=new C.f7x(v+r+q>1,l)
k=q.$2(o,"w")
r=k+q.$2(n,"l")
j=a4.aG(r+q.$2(m,"p"))
if(j<k){w.m(u,h,o-1)
w.m(u,d,"w")
w=a2.a
v=w.h(0,"1")
if(v==null)v=10
i=Math.max(1,v)
w=w.h(0,"2")
if(w==null)w=10
return a4.aG(i+Math.max(1,w))<i?1:2}if(j<r){w.m(u,g,n-1)
w.m(u,d,"l")
return C.fEm(a2,a4)}w.m(u,f,m-1)
w.m(u,d,"p")
return 3},
hBn(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=B.aQ(i.h(0,"wins")),g=h==null?m:A.k.M(h)
if(g==null)g=0
h=B.aQ(i.h(0,"loses"))
w=h==null?m:A.k.M(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.h0B():B.c1L()
t=v+"|"+u
s=C.eYA(d,e)
h=J.a6(s)
r=h.h(s,l)
if(J.k(r==null?"":r)!==t){h.m(s,l,t)
h.m(s,k,0)
h.m(s,j,0)}r=B.aQ(h.h(s,k))
q=r==null?m:A.k.M(r)
if(q==null)q=0
r=B.aQ(h.h(s,j))
p=r==null?m:A.k.M(r)
if(p==null)p=0
o=Math.max(0,g-q)
r=o+Math.max(0,w-p)
if(r<=0)return m
n=f.aG(r)<o
if(n)h.m(s,k,q+1)
else h.m(s,j,p+1)
return n},
hJr(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
d.bbP()
w=C.hBp(d,e,a0)
if(w!=null){if(w===3)++d.f
C.adk(d,e,w)
return w}v=C.hBo(d,e)
if(v!=null){if(v===3)++d.f
C.adk(d,e,v)
return v}u=C.hBn(d,e,a0)
if(u!=null)return new C.fkm(d,a0,e).$1(u)
t=C.eYA(d,e)
s=J.a6(t)
r=B.aQ(s.h(t,"winStreak"))
q=r==null?null:A.k.M(r)
if(q==null)q=0
s=B.aQ(s.h(t,"loseStreak"))
p=s==null?null:A.k.M(s)
if(p==null)p=0
o=new C.fko(d,a0)
if(C.hvo(d,e)>0){n=o.$0()
C.hOM(d,e)
C.adk(d,e,n)
return n}if(q>=d.c){n=new C.fkn(d,a0).$0()
C.adk(d,e,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.adk(d,e,n)
return n}s=x.t
m=B.a([],s)
l=B.a([],s)
for(s=[1,2,3],r=d.a,k=0;k<3;++k){n=s[k]
j=r.h(0,""+n)
if(j==null)j=10
for(i=0;i<j;++i)m.push(n)}for(s=[-1,-2],k=0;k<2;++k){n=s[k]
j=r.h(0,""+n)
if(j==null)j=10
for(i=0;i<j;++i)l.push(n)}h=A.o.D(d.b,5,95)
g=a0.aG(100)<h
if(g&&m.length!==0){f=m[a0.aG(m.length)]
if(f===3&&d.f>=d.e)f=a0.hd()?1:2}else{s=l.length
if(s!==0)f=l[a0.aG(s)]
else f=g?1:-1}if(f===3)++d.f
C.adk(d,e,f)
return f},
c1D(d){var w=0,v=B.j(x.y),u
var $async$c1D=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c1C(d),$async$c1D)
case 3:if(f){u=!0
w=1
break}u=B.c1C(d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c1D,v)},
adk(d,e,f){var w,v="winStreak",u="loseStreak",t=C.eYA(d,e),s=J.a6(t),r=B.aQ(s.h(t,v)),q=r==null?null:A.k.M(r)
if(q==null)q=0
r=B.aQ(s.h(t,u))
w=r==null?null:A.k.M(r)
if(w==null)w=0
if(f>0){s.m(t,v,q+1)
s.m(t,u,0)}else{s.m(t,u,w+1)
s.m(t,v,0)}},
f7v:function f7v(){},
f7w:function f7w(){},
f7x:function f7x(d,e){this.a=d
this.b=e},
fkm:function fkm(d,e,f){this.a=d
this.b=e
this.c=f},
fko:function fko(d,e){this.a=d
this.b=e},
fkn:function fkn(d,e){this.a=d
this.b=e},
akL:function akL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beU:function beU(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cO$=d
_.aX$=e
_.c=_.a=null},
dnd:function dnd(d){this.a=d},
dnc:function dnc(d){this.a=d},
dne:function dne(d){this.a=d},
dnb:function dnb(d,e){this.a=d
this.b=e},
aHE:function aHE(){},
Ly:function Ly(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c2s:function c2s(){},
c2r:function c2r(){},
amL:function amL(d,e,f){this.c=d
this.d=e
this.a=f},
fzH(d,e,f){return B.cb(null,A.x.j(0.88),!0,null,new C.c2U(f,e),d,null,!0,!0,x.H)},
hi3(d){var w,v,u,t,s=A.a.i(d),r=s.split("-")
if(r.length===3){w=B.c3(r[0],null)
v=r[1]
u=B.c3(v,null)
t=B.c3(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?A.hW[u-1]:v)+" "+B.t(t)+", "+B.t(w)}return s},
LG:function LG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c2U:function c2U(d,e){this.a=d
this.b=e},
bfx:function bfx(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
dM6:function dM6(d,e){this.a=d
this.b=e},
dM2:function dM2(){},
dM3:function dM3(){},
dM4:function dM4(d,e){this.a=d
this.b=e},
dM5:function dM5(d,e){this.a=d
this.b=e},
aIc:function aIc(){},
h0x(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.bbo(new C.ffK(w))
w=w.a
return w==null?null:w.c.a},
h0p(d){$.aS.x1$.push(new C.ffx(d))},
h0J(d){var w=$.ri().gb8(),v=w!=null
if(!v||w.c==null)return
if(C.h0x(w)==="GamePlayScreen")if(v&&w.c!=null&&w.pI())w.eB()},
h0I(d){C.fYu(d,0)},
fYu(d,e){var w,v
if(e>4)return
w=d==null?$.ri().gb8():d
if(w==null||w.c==null)return
v=C.h0x(w)
if(v==="GameCenterScreen")return
if(D.ecf.q(0,v)&&w.pI()){w.eB()
$.aS.x1$.push(new C.f3Q(w,e))}},
aLW(d,e,f){return B.ec(B.cj(new C.fh5(e,d,f)),e,!0)},
ffK:function ffK(d){this.a=d},
ffx:function ffx(d){this.a=d},
ffw:function ffw(d){this.a=d},
f3Q:function f3Q(d,e){this.a=d
this.b=e},
fh5:function fh5(d,e,f){this.a=d
this.b=e
this.c=f},
aWm(d,e){var w=0,v=B.j(x.H),u
var $async$aWm=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=B.T7(e)
w=2
return B.b(B.amO(d,u),$async$aWm)
case 2:B.a4V(d,u)
return B.h(null,v)}})
return B.i($async$aWm,v)},
v_(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$v_=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:o=B.xl(g)
if(o.length===0){w=1
break}t=e==null?B.Ji(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return B.b(B.LH(o),$async$v_)
case 3:q=m
if(j!=null&&j.length!==0&&J.rj(q,new C.c36(j))){w=1
break}p=e==null?new B.N(Date.now(),0,!1):e
J.p_(q,0,new B.iU(A.o.u(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return B.b(C.aWm(o,q),$async$v_)
case 4:if(i==null||r==null||s)C.a4X(o).bw(new C.c37(),x.S).eL(new C.c38())
case 1:return B.h(u,v)}})
return B.i($async$v_,v)},
a4X(d){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a4X=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=$.h1G
m=B.xl(d)
if(n==null||m.length===0){w=1
break}w=3
return B.b(B.LH(m),$async$a4X)
case 3:t=f
s=J.cB(t)
if(!s.be(t,new C.c35())){w=1
break}w=4
return B.b(n.$2(m,t),$async$a4X)
case 4:r=f
q=J.a6(r)
if(q.gG(r)!==s.gG(t)){w=1
break}for(p=!1,o=0;o<s.gG(t);++o)if(A.Q.aj(s.h(t,o).ad(),null)!==A.Q.aj(q.h(r,o).ad(),null))p=!0
w=p?5:6
break
case 5:w=7
return B.b(C.aWm(m,r),$async$a4X)
case 7:case 6:case 1:return B.h(u,v)}})
return B.i($async$a4X,v)},
aWn(d){var w=0,v=B.j(x.S),u,t
var $async$aWn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.fzK(d,!1),$async$aWn)
case 3:t=J
w=4
return B.b(C.amP(d,!1),$async$aWn)
case 4:u=t.dF(f,new C.c34(new B.N(Date.now(),0,!1).bL(-864e8))).gG(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aWn,v)},
amP(d,e){var w=0,v=B.j(x.ac),u,t,s
var $async$amP=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=B.xl(d)
if(t.length===0){u=B.a([],x.gi)
w=1
break}s=B
w=3
return B.b(B.LH(t),$async$amP)
case 3:u=s.T7(g)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amP,v)},
hHq(d){var w,v,u,t=new B.N(Date.now(),0,!1),s=t.bv(d).a,r=A.o.ak(s,6e7)
if(r<1)return"Just now"
w=A.o.ak(s,36e8)
if(w<1)return""+r+"m ago"
if(A.o.ak(s,864e8)<1)return""+w+"h ago"
v=A.o.J(B.dn(d),12)===0?12:A.o.J(B.dn(d),12)
s=A.hW[B.bB(d)-1]
r=B.bv(d)===B.bv(t)?"":", "+B.bv(d)
w=A.a.aT(A.o.u(B.hn(d)),2,"0")
u=B.dn(d)<12?"AM":"PM"
return s+" "+B.bL(d)+r+" \xb7 "+v+":"+w+" "+u},
bvx(d){var w=A.k.ab(Math.abs(d),2).split(".")
return"$"+B.oW(w[0],B.ad("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.f21(),null)+"."+w[1]},
bz0(d,e){var w=0,v=B.j(x.H),u,t,s
var $async$bz0=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.amP(e,!1),$async$bz0)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
B.fzK(e,!0).bw(new C.fsp(e),t).bw(new C.fsq(),t).eL(new C.fsr())
w=4
return B.b(B.c1(A.K,new C.fss(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bz0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$bz0,v)},
fCy(d,e,f){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.G(f.j(0.35),A.r,1)
return B.C(B.p(w,B.u(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),A.bw,B.eY(A.B,B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,A.dp)],x.p),A.m,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.hr,w,w,w),1)},
dM7(d,e,f){var w=null,v=A.x.j(0.22),u=B.m(8),t=B.G(f.j(0.28),A.r,1)
return B.C(B.p(w,B.u(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,A.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.eY(A.a_,B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,A.e8)],x.p),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.K1,w,w,w),1)},
c36:function c36(d){this.a=d},
c37:function c37(){},
c38:function c38(){},
c35:function c35(){},
c34:function c34(d){this.a=d},
f21:function f21(){},
fsp:function fsp(d){this.a=d},
fsq:function fsq(){},
fsr:function fsr(){},
fss:function fss(d,e){this.a=d
this.b=e},
fso:function fso(d,e){this.a=d
this.b=e},
fsn:function fsn(d){this.a=d},
aaO:function aaO(d,e){this.c=d
this.a=e},
dM9:function dM9(){},
dMa:function dMa(){},
dMb:function dMb(){},
dMc:function dMc(d){this.a=d},
dMe:function dMe(){},
dMd:function dMd(d){this.a=d},
aaN:function aaN(d,e){this.c=d
this.a=e},
dM8:function dM8(){},
bz1(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return B.hM(A.aV,!1,w,d,new C.fsv(j,i,h,g,e,f),null,A.eU,!1,x.H)},
fsv:function fsv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fst:function fst(d,e){this.a=d
this.b=e},
fsu:function fsu(d,e){this.a=d
this.b=e},
ax6:function ax6(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bbg:function bbg(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bq$=e
_.a6$=f
_.c=_.a=null},
d42:function d42(d,e){this.a=d
this.b=e},
d41:function d41(){},
abd:function abd(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aH9:function aH9(){},
anz(d,e,f){return new C.aXd(f,d,e,null)},
hiI(d){var w=B.a(A.k.ab(d,2).split("."),x.s),v=B.ad("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=B.oW(w[0],v,new C.c4H(),null)
return A.d.aF(w,".")},
aWq(){var w=$.rI
if((w>0?$.rI=w-1:w)<=0)$.rI=0},
aet(d,e){var w=0,v=B.j(x.H),u
var $async$aet=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.fGP
w=u!=null?2:3
break
case 2:w=4
return B.b(u.$2(d,e),$async$aet)
case 4:case 3:return B.h(null,v)}})
return B.i($async$aet,v)},
aXd:function aXd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c4I:function c4I(d){this.a=d},
c4H:function c4H(){},
La:function La(){},
bUD:function bUD(){},
fGe(d){if(d>0)return"+"+d
return""+d},
fFD(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fh6(d,e){var w=J.q(e,d)
if(w==null)w=B.ffU().h(0,d)
return w==null?90:w},
f10(d,e){var w,v,u=B.aZ(x.S)
while(u.a<3){w=e.aG(41)-20
if(w===0)continue
u.H(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.H(0,d+v*7+3)
v=B.a([A.o.u(d)],x.s)
A.d.v(v,new B.jA(u,new C.f11(),u.$ti.k("jA<ck.E,n>")))
A.d.fN(v,e)
return v},
fXw(d,e,f){var w,v,u,t,s=B.aZ(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.H(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.H(0,f[A.o.J(u,5)]+u);++u}t=B.a([d],x.s)
A.d.v(t,B.oI(s,3,s.$ti.k("ck.E")))
A.d.fN(t,e)
return t},
hCJ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=B.a([],x.dA),b2=new B.f6()
b2.dY(42)
for(w=x.s,v=0;v<200;++v){u=A.o.J(v,5)
if(u===0){t=[4,9,16,25,36,49,64,81,121,144,196,256][b2.aG(12)]
s=[2,3,5,6,7,10,11,13][b2.aG(8)]
r=A.k.M(Math.sqrt(t))
q=2+b2.aG(4)
p=A.o.ak(q,2)
if((q&1)===0){o=""+r
n=""+s
m=p===1?o+"\u221a"+n:o+"x^"+p+"\u221a"+n}else{o=""+r
n=""+s
m=p===0?o+"\u221a"+n+"x":o+"x^"+p+"\u221a"+n+"x"}o=""+p
n=""+s
l=""+r+"x^"
b1.push(new C.GV("Simplify \u221a("+t*s+"x^"+q+")",m,C.fXw(m,b2,B.a([""+(r+1)+"x^"+o+"\u221a"+n,B.t(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aG(35)
j=b2.aG(4)===0?1:2+b2.aG(4)
i=b2.aG(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.GV("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.f10(k,b2)))}else if(u===2){k=2+b2.aG(18)
j=b2.aG(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aG(10)+2
b1.push(new C.GV("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.f10(g,b2)))}else b1.push(new C.GV("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.f10(k,b2)))}else if(u===3){e=b2.aG(11)-5
o=b2.aG(11)
n=b2.aG(11)
d=b2.aG(11)+2
l=b2.hd()?1:-1
a0=e+l*(b2.aG(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===A.k.lN(a4)?""+A.k.M(a4):"\u221a"+a3
b1.push(new C.GV("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.f10(a0,b2)))}else{a6=2+b2.aG(10)
a7=a6+2+b2.aG(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.GV("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.fXw(m,b2,B.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
hN3(d){var w,v,u=x.s,t=B.a(d.split(""),u)
if(t.length<4)return new B.du(B.a(d.split(""),u),x.bJ).fL(0)
for(w=0;w<12;++w){A.d.fN(t,A.cA)
v=A.d.fL(t)
if(v!==d)return v}return new B.du(t,x.bJ).fL(0)},
GV:function GV(d,e,f){this.a=d
this.b=e
this.c=f},
f11:function f11(){},
amd:function amd(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
azU:function azU(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
dFp:function dFp(d){this.a=d},
dFq:function dFq(d){this.a=d},
dFr:function dFr(d){this.a=d},
dFs:function dFs(d,e){this.a=d
this.b=e},
dFt:function dFt(d,e){this.a=d
this.b=e},
dFu:function dFu(d){this.a=d},
dFo:function dFo(d){this.a=d},
dFv:function dFv(d){this.a=d},
dFn:function dFn(d){this.a=d},
dFy:function dFy(d){this.a=d},
dFz:function dFz(d){this.a=d},
dFx:function dFx(d,e){this.a=d
this.b=e},
dFw:function dFw(d,e){this.a=d
this.b=e},
amQ:function amQ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAa:function aAa(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
dMw:function dMw(d,e,f){this.a=d
this.b=e
this.c=f},
dMx:function dMx(d){this.a=d},
dMs:function dMs(d){this.a=d},
dMu:function dMu(d,e){this.a=d
this.b=e},
dMt:function dMt(d,e){this.a=d
this.b=e},
dMv:function dMv(d,e){this.a=d
this.b=e},
dMr:function dMr(d){this.a=d},
heR(d){var w,v,u,t,s,r,q,p=new B.N(Date.now(),0,!1),o=p.bL(36e8)
try{w=d.h(0,"start")
p=B.ml(J.k(w==null?"":w)).bO()
w=d.h(0,"end")
o=B.ml(J.k(w==null?"":w)).bO()}catch(v){}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"title")
u=J.k(u==null?"Event":u)
t=p
s=o
r=d.h(0,"notes")
r=r==null?null:J.k(r)
q=d.h(0,"location")
return new C.qJ(w,u,t,s,r,q==null?null:J.k(q))},
a52(d){var w=0,v=B.j(x.ck),u,t,s,r,q,p,o
var $async$a52=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.b)
w=1
break}w=3
return B.b(B.aw(),$async$a52)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aR(J.q(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.b)
w=1
break}try{s=A.Q.aC(0,t,null)
if(!x.j.b(s)){p=B.a([],x.b)
u=p
w=1
break}p=J.d2(s,x.f)
p=B.cy(p,new C.c3y(),p.$ti.k("E.E"),x.b1)
p=B.z(p,B.a2(p).k("E.E"))
A.d.aY(p,new C.c3z())
u=p
w=1
break}catch(n){r=B.a5(n)
$.ak.$1("[calendar-memory] load: "+B.t(r))
p=B.a([],x.b)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$a52,v)},
an7(d,e){var w=0,v=B.j(x.H),u,t,s,r,q
var $async$an7=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(C.a52(d),$async$an7)
case 2:r=g
q=J.cB(r)
q.bl(r,new C.c3v(e))
q.H(r,e)
q.aY(r,new C.c3w())
w=3
return B.b(B.aw(),$async$an7)
case 3:u=g
t=A.a.i(d.toLowerCase())
q=q.jY(r,80)
s=q.$ti.k("I<ai.E,a0<n,@>>")
q=B.z(new B.I(q,new C.c3x(),s),s.k("ai.E"))
w=4
return B.b(u.an("String","ngmy_helper_calendar_v1_"+t,A.Q.aj(q,null)),$async$an7)
case 4:return B.h(null,v)}})
return B.i($async$an7,v)},
hig(d,e){var w=Date.now(),v=new B.N(w,0,!1).bO()
w=J.dF(d,new C.c3A(v,v.bL(B.dB(14,0,0,0,0,0).a)))
w=B.z(w,w.$ti.k("E.E"))
return w},
fPo(d){var w,v,u,t,s,r,q,p,o,n,m=C.hig(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=B.dc(m,0,B.dJ(20,"count",x.S),B.S(m).c),v=w.$ti,w=new B.bR(w,w.gG(0),v.k("bR<ai.E>")),v=v.k("ai.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=A.o.J(B.dn(s),12)===0?12:A.o.J(B.dn(s),12)
q=B.dn(s)>=12?"PM":"AM"
p=A.a.aT(A.o.u(B.hn(s)),2,"0")
o=t.f
if((o==null?null:A.a.i(o).length!==0)===!0){o.toString
n=" @ "+A.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+B.bB(s)+"/"+B.bL(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&A.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return A.a.i(u.charCodeAt(0)==0?u:u)},
qJ:function qJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c3y:function c3y(){},
c3z:function c3z(){},
c3v:function c3v(d){this.a=d},
c3w:function c3w(){},
c3x:function c3x(){},
c3A:function c3A(d,e){this.a=d
this.b=e},
heS(d){var w,v,u,t,s,r,q,p,o=null,n=new B.N(Date.now(),0,!1)
try{w=d.h(0,"when")
n=B.ml(J.k(w==null?"":w)).bO()}catch(v){}w=d.h(0,"id")
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
return new C.qK(w,u,t,s,r,q,J.k(p==null?"user":p))},
fNP(d){var w=A.o.J(B.dn(d),12)===0?12:A.o.J(B.dn(d),12),v=B.dn(d)>=12?"PM":"AM"
return""+B.bB(d)+"/"+B.bL(d)+" "+w+":"+A.a.aT(A.o.u(B.hn(d)),2,"0")+" "+v},
Sh(d){var w=0,v=B.j(x.e),u,t,s,r,q,p,o
var $async$Sh=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.x)
w=1
break}w=3
return B.b(B.aw(),$async$Sh)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aR(J.q(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.x)
w=1
break}try{s=A.Q.aC(0,t,null)
if(!x.j.b(s)){p=B.a([],x.x)
u=p
w=1
break}p=J.d2(s,x.f)
p=B.cy(p,new C.bX0(),p.$ti.k("E.E"),x.Q)
p=B.z(p,B.a2(p).k("E.E"))
A.d.aY(p,new C.bX1())
u=p
w=1
break}catch(n){r=B.a5(n)
$.ak.$1("[call-memory] load: "+B.t(r))
p=B.a([],x.x)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$Sh,v)},
aUK(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$aUK=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.aw(),$async$aUK)
case 2:u=g
t=B.dc(e,0,B.dJ(120,"count",x.S),B.S(e).c).dz(0)
s=A.a.i(d.toLowerCase())
r=B.S(t).k("I<1,a0<n,@>>")
r=B.z(new B.I(t,new C.bWZ(),r),r.k("ai.E"))
w=3
return B.b(u.an("String","ngmy_call_memory_v1_"+s,A.Q.aj(r,null)),$async$aUK)
case 3:return B.h(null,v)}})
return B.i($async$aUK,v)},
aUL(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$aUL=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:p=B.R(x.N,x.Q)
o=J
w=2
return B.b(C.Sh(d),$async$aUL)
case 2:u=o.aW(g)
case 3:if(!u.C()){w=4
break}t=u.gT(u)
p.m(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.m(0,r.a,r)}u=p.$ti.k("bf<2>")
q=B.z(new B.bf(p,u),u.k("E.E"))
A.d.aY(q,new C.bX_())
w=5
return B.b(C.aUK(d,q),$async$aUL)
case 5:return B.h(null,v)}})
return B.i($async$aUL,v)},
bX2(d,e){var w=0,v=B.j(x.e),u,t,s
var $async$bX2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return B.b(C.Sh(d),$async$bX2)
case 3:t=s.dF(g,new C.bX3(e.bL(-72e8),e.bL(72e8)))
t=B.z(t,t.$ti.k("E.E"))
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bX2,v)},
fNQ(d,e){var w,v,u,t,s,r=J.a6(d)
if(r.gah(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.jY(d,e),v=w.$ti,w=new B.bR(w,w.gG(0),v.k("bR<ai.E>")),v=v.k("ai.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gTr()+"\n"
t=t.f
if(t!=null&&A.a.i(t).length!==0){s=A.a.i(t)
u+="  Voicemail/text: "+(s.length>180?A.a.al(s,0,177)+"\u2026":s)+"\n"}}r=r.gG(d)>e?u+("\u2026 and "+(r.gG(d)-e)+" more\n"):u
return A.a.i(r.charCodeAt(0)==0?r:r)},
hJb(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new B.N(q,0,!1).bO(),o=d.toLowerCase(),n=B.bX(B.bv(p),B.bB(p),B.bL(p),0,0,0,0,0)
if(A.a.q(o,"yesterday"))n=n.bL(r)
else if(!A.a.q(o,"today")&&A.a.q(o,"last night"))n=n.bL(r)
w=B.ad("\\b(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!0,!1,!1,!1).cz(o)
if(w==null)return null
q=w.b
v=q[1]
u=B.c3(v==null?"":v,null)
if(u==null)u=0
v=q[2]
t=B.c3(v==null?"":v,null)
if(t==null)t=0
s=q[3]
if(s==="pm"&&u<12)u+=12
if(s==="am"&&u===12)u=0
q=s==null
v=!1
if(q)if(u<=7)v=A.a.q(o,"am")||A.a.q(o,"morning")||A.a.q(o,"night")
if(v)if(A.a.q(o,"pm")||A.a.q(o,"afternoon")||A.a.q(o,"evening"))u=u<12?u+12:u
if(q&&A.a.q(o,"pm"))u=u<12?u+12:u
return B.bX(B.bv(n),B.bB(n),B.bL(n),u,t,0,0,0)},
h25(d){var w=B.ad("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
qK:function qK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bX0:function bX0(){},
bX1:function bX1(){},
bWZ:function bWZ(){},
bX_:function bX_(){},
bX3:function bX3(d,e){this.a=d
this.b=e},
fPr(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.li(t,w,v,u==null?null:J.k(u))},
him(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b4(v,new C.c3G(),x.bP)
v=B.z(v,v.$ti.k("ai.E"))}if(v==null)v=D.cOI
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.y(d.h(0,"printable"),!0)
return new C.i7(r,w,v,u,t,typeof d.h(0,s)=="number"?A.k.M(B.fc(d.h(0,s))):0)},
hil(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.hvA(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?A.k.M(B.fc(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?A.k.M(B.fc(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b4(s,new C.c3E(),x.u)
s=B.z(s,s.$ti.k("ai.E"))}return new C.hV(p,w,v,u,s==null?D.arI:s,t)},
hvB(d){var w,v,u,t=B.D([G.Ab,"investments",A.o8,"games",A.jC,"loans",A.hf,"withdrawals",A.k_,"deposits",A.ky,"civic",A.kx,"store",A.qm,"jobs",A.lZ,"refunds",A.eG,"account",A.lr,"music",A.wS,"help"],x.dk,x.N)
for(w=new B.cN(t,B.a2(t).k("cN<1,2>")).gaf(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
hvA(d){switch(d){case"investments":return G.Ab
case"games":return A.o8
case"loans":return A.jC
case"withdrawals":return A.hf
case"deposits":return A.k_
case"civic":return A.ky
case"store":return A.kx
case"jobs":return A.qm
case"refunds":return A.lZ
case"account":return A.eG
case"music":return A.lr
default:return A.wS}},
mA(d){var w=B.a([new C.li("text",d,null,null)],x.a)
return w},
aeq(){var w=null,v=x.v
return B.a([new C.hV("investments","Investments",G.Ab,4280468830,B.a([new C.i7("inv1","How do I buy an investment plan?",C.mA("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.i7("inv2","When do I get paid from my plan?",C.mA("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.i7("inv3","Can I have more than one plan?",C.mA("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.hV("games","Games",A.o8,4287323382,B.a([new C.i7("gam1","How do NGMY games work?",C.mA("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.i7("gam2","Why did my game payout change?",C.mA("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.hV("loans","Loans",A.jC,4294538006,B.a([new C.i7("loan1","How do I apply for a loan?",C.mA("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.i7("loan2","What is the repayment period?",C.mA("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.hV("withdrawals","Withdrawals",A.hf,4282090230,B.a([new C.i7("wd1","How do I withdraw money?",C.mA("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.i7("wd2","Why is my withdrawal pending?",C.mA("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.hV("deposits","Deposits",A.k_,4279548070,B.a([new C.i7("dep1","How do I deposit funds?",C.mA("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.i7("dep2","How long until my deposit posts?",C.mA("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.hV("civic","Civic Registry",A.ky,4289170426,B.a([new C.i7("civ1","What is Civic Registry?",C.mA("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.i7("civ2","What does \u201cmissed\u201d mean on my profile?",C.mA("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.hV("store","NGMY Store",A.kx,4293675161,B.a([new C.i7("sto1","How do I buy from NGMY Store?",C.mA("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.i7("sto2","How do I sell in the store?",C.mA("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.hV("jobs","Jobs & Creator",A.qm,4293548044,B.a([new C.i7("job1","How do I find jobs?",C.mA("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.i7("job2","How do I post a job?",C.mA("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.hV("refunds","Refunds",A.lZ,4293870660,B.a([new C.i7("ref1","Can I get a refund?",C.mA("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.i7("ref2","How long do refunds take?",C.mA("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.hV("account","Account",A.eG,4281908728,B.a([new C.i7("acc1","How do I update my profile?",C.mA("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.i7("acc2","I forgot my password \u2014 what now?",C.mA("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.hV("music","Music Charts",A.lr,4290807036,B.a([new C.i7("mus1","What are Music Charts?",C.mA("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.i7("mus2","How do I upload music?",C.mA("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.hV("help","Help Center",A.wS,4279080072,B.a([new C.i7("hlp1","Where can I get live help?",C.mA("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.i7("hlp2","How do daily Helper limits work?",C.mA("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
fPs(d){var w,v=J.a6(d),u=v.gah(d)
if(u)return C.aeq()
v=v.di(d,new C.c3J(),x.i)
w=B.z(v,v.$ti.k("ai.E"))
A.d.aY(w,new C.c3K())
return w.length===0?C.aeq():w},
fPt(d){var w=J.b4(d,new C.c3L(),x.P)
w=B.z(w,w.$ti.k("ai.E"))
return B.D(["categories",w,"savedAt",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z)},
an9(d){return C.hin(d)},
hin(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p
var $async$an9=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aw(),$async$an9)
case 6:s=f
w=7
return B.b(s.an("String","ngmy_helper_kb_v1",A.Q.aj(C.fPt(d),null)),$async$an9)
case 7:u=1
w=5
break
case 3:u=2
p=t.pop()
r=B.a5(p)
$.ak.$1("[helper kb] local save: "+B.t(r))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$an9,v)},
c3I(){var w=0,v=B.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$c3I=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aw(),$async$c3I)
case 7:r=e
q=B.aR(J.q(r.a,"ngmy_helper_kb_v1"))
if(q==null||A.a.i(q).length===0){l=C.aeq()
u=l
w=1
break}p=A.Q.aC(0,q,null)
if(!x.f.b(p)){l=C.aeq()
u=l
w=1
break}o=J.q(p,"categories")
if(!x.j.b(o)){l=C.aeq()
u=l
w=1
break}n=C.fPs(o)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
m=B.a5(j)
$.ak.$1("[helper kb] local load: "+B.t(m))
l=C.aeq()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$c3I,v)},
aWM(){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$aWM=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.bZ(),$async$aWM)
case 7:if(!e){u=null
w=1
break}w=8
return B.b(B.eU("ngmy_helper_kb",null,!1,A.bD),$async$aWM)
case 8:q=e
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=B.a5(o)
$.ak.$1("[helper kb] cloud fetch: "+B.t(r))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aWM,v)},
aWN(d){return C.hio(d)},
hio(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aWN=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.bZ(),$async$aWN)
case 7:if(!f){u=!1
w=1
break}w=8
return B.b(B.hs("ngmy_helper_kb",d,!1,!1,A.cy,null),$async$aWN)
case 8:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=B.a5(o)
$.ak.$1("[helper kb] cloud upsert: "+B.t(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aWN,v)},
ana(){var w=0,v=B.j(x.I),u,t,s,r
var $async$ana=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.c3I(),$async$ana)
case 3:s=e
w=4
return B.b(C.aWM(),$async$ana)
case 4:r=e
w=r!=null&&x.j.b(J.q(r,"categories"))?5:6
break
case 5:t=C.fPs(x.j.a(J.q(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return B.b(C.an9(t),$async$ana)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ana,v)},
c3M(d){var w=0,v=B.j(x.y),u
var $async$c3M=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.an9(d),$async$c3M)
case 3:u=C.aWN(C.fPt(d))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c3M,v)},
li:function li(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
i7:function i7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c3H:function c3H(){},
c3G:function c3G(){},
hV:function hV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c3F:function c3F(){},
c3E:function c3E(){},
c3J:function c3J(){},
c3K:function c3K(){},
c3L:function c3L(){},
b4Y:function b4Y(d){this.a=d},
Te:function Te(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAm:function aAm(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
dQb:function dQb(){},
dQc:function dQc(){},
dQ5:function dQ5(d){this.a=d},
dQ6:function dQ6(d){this.a=d},
dPP:function dPP(d,e){this.a=d
this.b=e},
dPQ:function dPQ(d){this.a=d},
dPR:function dPR(d,e,f){this.a=d
this.b=e
this.c=f},
dPO:function dPO(d){this.a=d},
dQ2:function dQ2(d,e){this.a=d
this.b=e},
dQ3:function dQ3(d,e){this.a=d
this.b=e},
dQ4:function dQ4(d){this.a=d},
dPX:function dPX(d){this.a=d},
dPY:function dPY(d,e,f){this.a=d
this.b=e
this.c=f},
dPW:function dPW(d,e){this.a=d
this.b=e},
dQ1:function dQ1(d,e,f){this.a=d
this.b=e
this.c=f},
dQ0:function dQ0(d,e){this.a=d
this.b=e},
dQ_:function dQ_(d,e){this.a=d
this.b=e},
dPZ:function dPZ(d,e,f){this.a=d
this.b=e
this.c=f},
dPT:function dPT(d){this.a=d},
dPS:function dPS(d){this.a=d},
dPU:function dPU(d,e){this.a=d
this.b=e},
dPV:function dPV(d){this.a=d},
dQa:function dQa(d,e){this.a=d
this.b=e},
dQ9:function dQ9(d,e){this.a=d
this.b=e},
dQ8:function dQ8(){},
dQ7:function dQ7(d,e){this.a=d
this.b=e},
Ny:function Ny(d,e){this.c=d
this.a=e},
b6M:function b6M(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cED:function cED(d){this.a=d},
cEC:function cEC(d,e){this.a=d
this.b=e},
cEA:function cEA(d,e){this.a=d
this.b=e},
cEE:function cEE(d){this.a=d},
cEB:function cEB(d,e){this.a=d
this.b=e},
cEz:function cEz(d,e){this.a=d
this.b=e},
cEF:function cEF(d){this.a=d},
cEG:function cEG(d,e){this.a=d
this.b=e},
YG:function YG(d,e,f){this.c=d
this.d=e
this.a=f},
aCe:function aCe(){this.d=$
this.c=this.a=null},
ezV:function ezV(d,e){this.a=d
this.b=e},
ezW:function ezW(d){this.a=d},
eA1:function eA1(){},
eA0:function eA0(d,e){this.a=d
this.b=e},
eA_:function eA_(d,e){this.a=d
this.b=e},
ezX:function ezX(d,e){this.a=d
this.b=e},
ezZ:function ezZ(d,e,f){this.a=d
this.b=e
this.c=f},
ezY:function ezY(d,e,f){this.a=d
this.b=e
this.c=f},
YF:function YF(d,e){this.c=d
this.a=e},
aCd:function aCd(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
ezR:function ezR(d,e){this.a=d
this.b=e},
ezP:function ezP(d){this.a=d},
ezQ:function ezQ(d,e){this.a=d
this.b=e},
ezT:function ezT(d,e){this.a=d
this.b=e},
ezU:function ezU(d){this.a=d},
ezS:function ezS(d,e){this.a=d
this.b=e},
hij(d){var w=new B.I(d,new C.c3B(),B.S(d).k("I<1,n>")).aF(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
c3C(d,e,f){return C.hik(d,e,f)},
hik(b4,b5,b6){var w=0,v=B.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$c3C=B.e(function(b8,b9){if(b8===1)return B.f(b9,v)
for(;;)switch(w){case 0:b3=A.a.i(b5)
if(b3.length===0){u=new B.Is([B.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return B.b(B.qh(B.mD(b3),C.hij(b6)+"\n\nAdmin instruction:\n"+b4,A.h2,null),$async$c3C)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=A.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new B.Is([B.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=A.a.i(a3)
if(J.cT(s,"```"))s=A.a.e0(J.fJz(s,B.ad("^```(?:json)?\\s*",!0,!1,!1,!1),""),B.ad("\\s*```$",!0,!1,!1,!1),"")
r=A.Q.aC(0,s,null)
a3=x.f
if(!a3.b(r)){a3=B.a([],x.Y)
u=new B.Is([a3,"AI response was not valid JSON.",null,null])
w=1
break}a4=x.N
a5=x.z
q=B.Z(r,a4,a5)
a6=J.q(q,"message")
p=a6==null?null:J.k(a6)
a6=J.q(q,"replaceCategoryId")
o=a6==null?null:J.k(a6)
n=J.q(q,"categories")
a6=x.j
if(!a6.b(n)||J.ci(n)){a3=B.a([],x.Y)
u=new B.Is([a3,"AI did not return any categories.",p,o])
w=1
break}m=B.a([],x.Y)
l=b6.length
for(k=0,a7=x.v,a8=x.a;k<J.aa(n);++k){j=B.Z(a3.a(J.q(n,k)),a4,a5)
i="cat_ai_"+1000*Date.now()+"_"+B.t(k)
h=J.q(j,"questions")
g=B.a([],a7)
if(a6.b(h))for(f=0;f<J.aa(h);++f){e=B.Z(a3.a(J.q(h,f)),a4,a5)
d=J.q(e,"answerBlocks")
a0=B.a([],a8)
if(a6.b(d))for(a9=J.aW(d);a9.C();){a1=a9.gT(a9)
J.ch(a0,C.fPr(B.Z(a3.a(a1),a4,a5)))}if(J.aa(a0)===0){a9=J.q(e,"answer")
J.ch(a0,new C.li("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=B.t(f)
b1=J.q(e,"question")
J.ch(g,new C.i7("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.y(J.q(e,"printable"),!0),f))}a9=J.q(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.q(j,"iconKey")
b0=C.hii(J.k(b0==null?"help":b0))
b1=typeof J.q(j,"colorValue")=="number"?A.k.M(B.fc(J.q(j,"colorValue"))):4284773515
J.ch(m,new C.hV(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.aa(a3)!==0)===!0?o:null
u=new B.Is([m,null,p,a3])
w=1
break}catch(b7){a2=B.a5(b7)
a3=B.t(a2)
a4=B.a([],x.Y)
u=new B.Is([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$c3C,v)},
hii(d){switch(d){case"investments":return G.Ab
case"games":return A.o8
case"loans":return A.jC
case"withdrawals":return A.hf
case"deposits":return A.k_
case"civic":return A.ky
case"store":return A.kx
case"jobs":return A.qm
case"refunds":return A.lZ
case"account":return A.eG
case"music":return A.lr
default:return A.wS}},
hHJ(d,e,f){var w,v,u,t=B.bi(d,!0,x.i)
if(f!=null&&J.aa(e)===1){w=A.d.bf(t,new C.fht(f))
if(w>=0){t[w]=J.fn(e).cyO(f,t[w].f)
return t}}A.d.v(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].b6a(u)
return t},
c3B:function c3B(){},
fht:function fht(d){this.a=d},
cW4:function cW4(d){this.a=d},
Tf:function Tf(d,e,f){this.c=d
this.d=e
this.a=f},
aAo:function aAo(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
dQM:function dQM(){},
dQs:function dQs(d,e){this.a=d
this.b=e},
dQx:function dQx(d,e){this.a=d
this.b=e},
dQv:function dQv(d,e){this.a=d
this.b=e},
dQt:function dQt(d){this.a=d},
dQu:function dQu(d){this.a=d},
dQw:function dQw(d,e,f){this.a=d
this.b=e
this.c=f},
dQo:function dQo(){},
dQp:function dQp(){},
dQq:function dQq(){},
dQr:function dQr(){},
dQC:function dQC(d,e){this.a=d
this.b=e},
dQD:function dQD(d){this.a=d},
dQE:function dQE(d){this.a=d},
dQF:function dQF(d){this.a=d},
dQG:function dQG(d){this.a=d},
dQH:function dQH(d){this.a=d},
dQI:function dQI(){},
dQJ:function dQJ(d){this.a=d},
dQB:function dQB(d){this.a=d},
dQK:function dQK(d){this.a=d},
dQA:function dQA(d){this.a=d},
dQL:function dQL(d,e){this.a=d
this.b=e},
dQz:function dQz(d,e){this.a=d
this.b=e},
dQy:function dQy(d,e){this.a=d
this.b=e},
hq0(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=B.a([],x.eO)
for(w=B.ad("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kr(0,d),w=new B.HY(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=A.a.al(d,t,q)
o=u?A.ct:A.aI
m.push(new B.ez(p,n,n,A.cT,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?A.ct:A.aI
m.push(new B.ez(p,n,n,A.cT,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,A.I,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?A.ct:A.aI
m.push(new B.ez(p,n,n,A.cT,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,A.cz,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?A.ct:A.aI
m.push(new B.ez(p,n,n,A.cT,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,A.mb,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=A.a.aU(d,t)
m.push(B.dr(n,n,n,n,n,n,n,n,n,B.l(n,n,u?A.ct:A.aI,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return B.rS(n,n,n,A.eA,n,n,!0,n,B.dr(m,n,n,n,n,n,n,n,n,n,n),A.a5,n,n,A.d8,A.cm)},
d83:function d83(d){this.a=d},
axY:function axY(d,e){this.a=d
this.b=e},
an8:function an8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAn:function aAn(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
dQl:function dQl(d,e){this.a=d
this.b=e},
dQm:function dQm(d,e){this.a=d
this.b=e},
dQd:function dQd(d){this.a=d},
dQe:function dQe(d){this.a=d},
dQn:function dQn(){},
dQg:function dQg(d,e){this.a=d
this.b=e},
dQf:function dQf(d,e){this.a=d
this.b=e},
dQi:function dQi(){},
dQk:function dQk(){},
dQj:function dQj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQh:function dQh(d,e){this.a=d
this.b=e},
axW:function axW(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a9m:function a9m(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aWL:function aWL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c3D:function c3D(d){this.a=d},
a9e:function a9e(d,e,f){this.c=d
this.d=e
this.a=f},
cyj:function cyj(d){this.a=d},
cyk:function cyk(){},
cyl:function cyl(d){this.a=d},
axX:function axX(d,e,f){this.c=d
this.d=e
this.a=f},
bcL:function bcL(){this.c=this.a=this.d=null},
d84:function d84(d,e){this.a=d
this.b=e},
d86:function d86(d,e){this.a=d
this.b=e},
d85:function d85(d){this.a=d},
hjO(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
hjP(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
hjN(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
fXr(d){var w
if(new B.a4(B.a(d.split("\n"),x.s),new C.f0M(),x.cc).gG(0)<3)w=d.length>100&&A.a.q(d,"\n")
else w=!0
return w},
hIR(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.hjN(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
anU:function anU(d,e){this.a=d
this.b=e},
H_:function H_(d,e){this.a=d
this.b=e},
qP:function qP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f0M:function f0M(){},
anb:function anb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAp:function aAp(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=!1
_.x=g
_.y=h
_.Q=_.z=null
_.as=$
_.bq$=i
_.a6$=j
_.c=_.a=null},
dR_:function dR_(d,e){this.a=d
this.b=e},
dQR:function dQR(d){this.a=d},
dQT:function dQT(){},
dQU:function dQU(d,e){this.a=d
this.b=e},
dQV:function dQV(d){this.a=d},
dQW:function dQW(){},
dQX:function dQX(d,e){this.a=d
this.b=e},
dQY:function dQY(d){this.a=d},
dQZ:function dQZ(d){this.a=d},
dQS:function dQS(d,e){this.a=d
this.b=e},
dR6:function dR6(d,e){this.a=d
this.b=e},
dR3:function dR3(){},
dR4:function dR4(d,e){this.a=d
this.b=e},
dR5:function dR5(d,e){this.a=d
this.b=e},
dR2:function dR2(d,e){this.a=d
this.b=e},
dR1:function dR1(d,e){this.a=d
this.b=e},
dR8:function dR8(d){this.a=d},
dR7:function dR7(d){this.a=d},
dQQ:function dQQ(d,e){this.a=d
this.b=e},
dQP:function dQP(d,e){this.a=d
this.b=e},
dR9:function dR9(d,e){this.a=d
this.b=e},
dR0:function dR0(d,e){this.a=d
this.b=e},
dQN:function dQN(d){this.a=d},
dQO:function dQO(d){this.a=d},
aIk:function aIk(){},
c3O(d){var w=0,v=B.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$c3O=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=D.OR
w=1
break}w=3
return B.b(B.aw(),$async$c3O)
case 3:r=f
q=A.a.i(d.toLowerCase())
t=B.aR(J.q(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.OR
w=1
break}try{q=B.Z(x.f.a(A.Q.aC(0,t,null)),x.N,x.z)
p=J.y(q.h(0,"contacts"),!0)
o=J.y(q.h(0,"calendar"),!0)
n=J.y(q.h(0,"calls"),!0)
q=J.y(q.h(0,"allGrantedOnce"),!0)
u=new C.Tg(p,o,n,q)
w=1
break}catch(l){s=B.a5(l)
$.ak.$1("[helper-perms] load: "+B.t(s))
u=D.OR
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$c3O,v)},
anc(d,e){var w=0,v=B.j(x.H),u
var $async$anc=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){w=1
break}w=4
return B.b(B.aw(),$async$anc)
case 4:w=3
return B.b(g.an("String","ngmy_helper_permissions_v1_"+A.a.i(d.toLowerCase()),A.Q.aj(e.ad(),null)),$async$anc)
case 3:case 1:return B.h(u,v)}})
return B.i($async$anc,v)},
c3N(d){var w=0,v=B.j(x.gp),u,t
var $async$c3N=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=new C.Tg(!0,!0,!0,!0)
w=3
return B.b(C.anc(d,t),$async$c3N)
case 3:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c3N,v)},
h26(d){var w=A.a.i(d.toLowerCase()),v=B.ad("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=B.ad("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=B.ad("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=B.ad("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
h24(d){var w=B.ad("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
Tg:function Tg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bz7(d,e,f,g,h){var w=0,v=B.j(x.H),u,t,s
var $async$bz7=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return B.b(C.aWH(h),$async$bz7)
case 3:if(j){w=1
break}w=4
return B.b(C.an4(h),$async$bz7)
case 4:if(d.e==null){w=1
break}t=B.pY(d,!0)
t.toString
s=B.da()
s.b=B.nT(new C.ftf(g,e,f,s),!1,!1)
t.lk(0,s.b7())
case 1:return B.h(u,v)}})
return B.i($async$bz7,v)},
ftf:function ftf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fte:function fte(d){this.a=d},
Xq:function Xq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
axp:function axp(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cO$=d
_.aX$=e
_.c=_.a=null},
d5E:function d5E(d){this.a=d},
d5F:function d5F(d,e,f){this.a=d
this.b=e
this.c=f},
d5K:function d5K(){},
d5J:function d5J(d){this.a=d},
d5G:function d5G(d){this.a=d},
d5H:function d5H(){},
d5I:function d5I(d){this.a=d},
aHe:function aHe(){},
hjh(d){var w=A.a.i(d),v=B.ad("[^A-Z0-9]",!0,!1,!1,!1),u=B.aI(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
hjg(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.ad("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.ad("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
anH(d){return C.hje(d)},
hje(d){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$anH=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.eU("ngmy_local_deposit_qr_v1_"+A.a.i(d),null,!1,A.bD),$async$anH)
case 7:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=B.a5(o)
$.ak.$1("[local deposit qr] load: "+B.t(r))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$anH,v)},
aXB(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aXB=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.hjh(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.eU("ngmy_local_deposit_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bD),$async$aXB)
case 7:r=f
if(r==null){u=null
w=1
break}if(J.y(J.q(r,"redeemed"),!0)){u=null
w=1
break}p=J.q(r,"token")
p=A.a.i(J.k(p==null?"":p))
u=p
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.a5(m)
$.ak.$1("[local deposit qr] code lookup: "+B.t(q))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aXB,v)},
fPQ(d){var w,v=A.a.i(d)
if(A.a.a_(v,"NGMYLOCALDEP1|")){w=A.a.i(A.a.aU(v,14))
return w.length===0?null:w}return null},
hjf(d,e,f){var w=A.a.i(f)
if(w.length===0)return!1
return A.d.be(e,new C.c5B(A.a.i(d.toLowerCase()),w))},
fPR(d,e,f,g,h){var w,v,u=J.a6(g),t=u.h(g,"lockedToEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=A.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.pl(!1,0,y.u)
if(s!==A.a.i(f.toLowerCase()))return new C.pl(!1,0,y.j)
v=A.a.i(h)
if(v.length===0)return new C.pl(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.pl(!1,0,"Verification code does not match this deposit.")
if(!C.hjf(e,d,w))return new C.pl(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
fzZ(d,e){var w,v,u="amount",t=J.a6(d),s=t.h(d,"redeemedBy")
if(A.a.i(J.k(s==null?"":s)).length!==0)return D.dhX
s=t.h(d,"lockedToEmail")
w=A.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=A.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){B.aQ(t.h(d,u))
return new C.LT(!0,!1,!1,!0)}if(w!==A.a.i(e.toLowerCase())){B.aQ(t.h(d,u))
return new C.LT(!0,!1,!0,!1)}B.aQ(t.h(d,u))
return new C.LT(!0,!1,!1,!1)},
c5H(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$c5H=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=C.fPQ(d)
if(s==null){u=D.OT
w=1
break}w=3
return B.b(C.anH(s),$async$c5H)
case 3:t=g
if(t==null){u=D.OT
w=1
break}u=C.fzZ(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c5H,v)},
aXD(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$aXD=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aXB(d),$async$aXD)
case 3:s=g
if(s==null||s.length===0){u=D.OT
w=1
break}w=4
return B.b(C.anH(s),$async$aXD)
case 4:t=g
if(t==null){u=D.OT
w=1
break}u=C.fzZ(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aXD,v)},
c5I(d,e,f,g,h){var w=0,v=B.j(x.D),u,t
var $async$c5I=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aXB(d),$async$c5I)
case 3:t=j
if(t==null||t.length===0){u=new C.pl(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.TB(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c5I,v)},
TB(d,e,f,g,h){return C.hji(d,e,f,g,h)},
hji(a2,a3,a4,a5,a6){var w=0,v=B.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$TB=B.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.fPQ(a4)
if(a0==null){u=new C.pl(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return B.b(C.anH(a0),$async$TB)
case 3:k=a8
if(k==null){u=new C.pl(!1,0,y.m)
w=1
break}j=C.fzZ(k,a5)
if(j.b){u=new C.pl(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.pl(!1,0,y.u)
w=1
break}if(j.c){u=new C.pl(!1,0,y.j)
w=1
break}i=C.fPR(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=B.aQ(J.q(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.pl(!1,0,"Invalid deposit amount.")
w=1
break}r=new B.N(Date.now(),0,!1).a4().aa()
q=A.a.i(a5.toLowerCase())
t=5
w=8
return B.b(B.eU("ngmy_local_deposit_qr_v1_"+A.a.i(a0),null,!1,A.bD),$async$TB)
case 8:p=a8
if(p==null){u=new C.pl(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.q(p,"redeemedBy")
if(A.a.i(J.k(g==null?"":g)).length!==0){u=new C.pl(!1,0,"This deposit code was already used.")
w=1
break}o=C.fPR(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=A.a.i(a0)
f=x.N
e=x.z
n=B.dQ(p,f,e)
J.aE(n,"redeemedBy",q)
J.aE(n,"redeemedAt",r)
w=9
return B.b(B.hs("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,A.cy,null),$async$TB)
case 9:n=J.q(p,"shortCode")
m=A.a.i(J.k(n==null?"":n))
w=J.aa(m)!==0?10:11
break
case 10:w=12
return B.b(B.hs("ngmy_local_deposit_code_v1_"+A.a.i(m).toUpperCase(),B.D(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,A.cy,null),$async$TB)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=B.a5(a1)
$.ak.$1("[local deposit qr] redeem: "+B.t(l))
u=new C.pl(!1,0,"Could not apply deposit. Check connection and try again.")
w=1
break
w=7
break
case 4:w=2
break
case 7:u=new C.pl(!0,h,null)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$TB,v)},
LT:function LT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
pl:function pl(d,e,f){this.a=d
this.b=e
this.c=f},
c5B:function c5B(d,e){this.a=d
this.b=e},
c5P(d,e){var w
B.fFQ(d,e,!1)
B.qg(d.a,d.d,!0,!1)
w=A.a.i("")
if(w.length!==0)B.BA(!0,!1,d.d,w)},
a5o(d,e){if(d==null)return!1
return B.bv(d)===e.gcb()&&B.bB(d)===e.gca()&&B.bL(d)===e.gcp()},
hjp(d){var w=B.dn(d)*60+B.hn(d)
if(w<10)return 0
if(w>=30)return 20
return 15},
fPX(d){if(B.dn(d)>=12)return!1
if(B.mu(d)===6||B.mu(d)===7)return!1
return!0},
c5S(d){var w=d.c?d.bO():d
return w.cU(B.bX(B.bv(w),B.bB(w),B.bL(w),12,0,0,0,0))},
fA2(d,e){var w,v,u,t=d.gBc()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a5o(d.fx,e)&&d.fy>0.0001)return A.k.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bO()
if(!C.c5S(w))return 0
v=B.bX(e.gcb(),e.gca(),e.gcp(),12,0,0,0,0)
if(!e.cU(v))return t
if(!e.c9(w))return 0
u=A.o.ak(v.bv(w).a,1000)
if(u<=0)return t
return A.k.D(t*(A.o.D(A.o.ak(e.bv(w).a,1000),0,u)/u),0,t)},
fA1(d,e){var w,v,u,t,s,r,q,p=new B.N(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a5o(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bO():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!A.d.be(e,new C.c5O(s))&&C.c5S(t)){r=d.gBc()
v=r>0
if(v){q=new B.cQ(s,d.a,r,A.fA,A.eX,"Clock-in daily earnings (local)",null,null,A.cc,p)
C.c5P(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a5o(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a5o(o,p)&&!C.c5S(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
c5O:function c5O(d){this.a=d},
hxD(d){var w,v,u=d.k4,t=u==null?null:A.a.i(u)
if(t!=null&&t.length!==0)return t
w=A.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=A.a.i(d.a)
if(A.a.q(v,"@"))return A.d.gI(v.split("@"))
return"Member"},
hNR(d,e,f,g,h,i){return B.hl(d,new C.anI(f,e,i,g,h,null),!0,null,x.H)},
fU8(d){var w,v,u=d.c?d.bO():d,t=B.dn(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+B.bB(u)+"/"+B.bL(u)+"/"+B.bv(u)+" \xb7 "+w+":"+A.a.aT(A.o.u(B.hn(u)),2,"0")+" "+v},
h00(d){var w=d.x
if(w===A.dk)return"Processing"
if(w===A.ke)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
hFr(d){var w=d.f,v=A.a.i(w==null?"":w),u=v.toLowerCase()
if(A.a.q(u,"clock-in daily earnings")||A.a.q(u,"clock-in earnings"))return"Clock-in completed"
if(A.a.q(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===A.fc)return"Deposit"
if(w===A.eC)return"Withdrawal"
return v.length!==0?v:w.b},
hxi(d){var w=d.d,v=w===A.fc||w===A.nI||w===A.fA||w===A.jN,u=d.x
if(u===A.dk)return w===A.eC?-d.c:0
if(u!==A.cc)return 0
w=d.c
return v?w:-w},
hFY(d,e){var w,v,u,t,s,r,q=B.z(d,x.o)
A.d.aY(q,new C.fdu())
w=B.R(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,B.J)(q),++t,v=r){s=q[t]
r=v-C.hxi(s)
if(r<0)r=0
w.m(0,s.a,new B.bk_(v,r))}return w},
anI:function anI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAL:function aAL(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
e_A:function e_A(d){this.a=d},
e0g:function e0g(d){this.a=d},
e0h:function e0h(d){this.a=d},
e0i:function e0i(d){this.a=d},
e_Z:function e_Z(d,e){this.a=d
this.b=e},
e0_:function e0_(){},
e00:function e00(d){this.a=d},
e01:function e01(){},
e02:function e02(d){this.a=d},
e03:function e03(d,e,f){this.a=d
this.b=e
this.c=f},
e04:function e04(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e_U:function e_U(d,e){this.a=d
this.b=e},
e_B:function e_B(d,e,f){this.a=d
this.b=e
this.c=f},
e_V:function e_V(){},
e_W:function e_W(){},
e_X:function e_X(d){this.a=d},
e_Y:function e_Y(){},
e_F:function e_F(d,e){this.a=d
this.b=e},
e_G:function e_G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e_O:function e_O(){},
e_L:function e_L(d){this.a=d},
e_M:function e_M(d,e){this.a=d
this.b=e},
e_N:function e_N(d,e){this.a=d
this.b=e},
e_P:function e_P(d){this.a=d},
e_Q:function e_Q(d,e,f){this.a=d
this.b=e
this.c=f},
e_R:function e_R(d){this.a=d},
e_T:function e_T(d){this.a=d},
e_S:function e_S(d){this.a=d},
e_H:function e_H(d){this.a=d},
e_I:function e_I(d,e,f){this.a=d
this.b=e
this.c=f},
e08:function e08(){},
e09:function e09(){},
e0d:function e0d(d){this.a=d},
e06:function e06(d){this.a=d},
e0e:function e0e(d){this.a=d},
e05:function e05(d){this.a=d},
e0f:function e0f(d){this.a=d},
e0a:function e0a(d){this.a=d},
e0b:function e0b(d){this.a=d},
e0c:function e0c(d){this.a=d},
e07:function e07(d){this.a=d},
e_E:function e_E(d){this.a=d},
e_D:function e_D(d){this.a=d},
e_C:function e_C(d){this.a=d},
e_K:function e_K(d,e){this.a=d
this.b=e},
e_J:function e_J(d,e){this.a=d
this.b=e},
ay8:function ay8(d,e,f,g,h,i,j,k,l,m){var _=this
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
d9S:function d9S(){},
d9T:function d9T(){},
d9U:function d9U(d,e,f){this.a=d
this.b=e
this.c=f},
d9R:function d9R(d){this.a=d},
d9V:function d9V(d,e){this.a=d
this.b=e},
d9Q:function d9Q(d){this.a=d},
ay7:function ay7(d,e,f,g,h,i,j,k,l,m){var _=this
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
bdu:function bdu(d,e){var _=this
_.f=_.e=_.d=$
_.cO$=d
_.aX$=e
_.c=_.a=null},
d9L:function d9L(d){this.a=d},
d9M:function d9M(d){this.a=d},
d9N:function d9N(d){this.a=d},
d9O:function d9O(){},
d9P:function d9P(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
d9K:function d9K(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d9J:function d9J(d){this.a=d},
b7g:function b7g(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
b7f:function b7f(d,e,f){this.b=d
this.d=e
this.a=f},
b7e:function b7e(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
ay9:function ay9(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aya:function aya(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
dab:function dab(){},
dac:function dac(){},
dad:function dad(){},
d9Y:function d9Y(d){this.a=d},
d9X:function d9X(d,e){this.a=d
this.b=e},
d9W:function d9W(d,e){this.a=d
this.b=e},
da8:function da8(d,e){this.a=d
this.b=e},
daa:function daa(d,e){this.a=d
this.b=e},
da9:function da9(d,e){this.a=d
this.b=e},
da7:function da7(){},
da6:function da6(d){this.a=d},
da5:function da5(){},
da0:function da0(d){this.a=d},
da1:function da1(){},
da2:function da2(d){this.a=d},
da3:function da3(d){this.a=d},
da_:function da_(){},
da4:function da4(d){this.a=d},
d9Z:function d9Z(d){this.a=d},
b6H:function b6H(d){this.a=d},
fdu:function fdu(){},
bqU:function bqU(d,e){this.b=d
this.a=e},
aHu:function aHu(){},
bsN:function bsN(){},
hC6(d,e,f,g,h,i,j,k){var w,v=A.a.i(j.toLowerCase())
A.d.bl(d,new C.f8q(v,g))
w=B.R(x.N,x.z)
w.m(0,"id",A.o.u(1000*Date.now()))
w.m(0,"fromEmail",A.a.i(e.toLowerCase()))
w.m(0,"fromName",f)
w.m(0,"toEmail",v)
if(k!=null&&A.a.i(k).length!==0)w.m(0,"toName",A.a.i(k))
w.m(0,"gameId",g)
w.m(0,"gameTitle",h)
w.m(0,"status","pending")
w.m(0,"createdAt",new B.N(Date.now(),0,!1).aa())
w.m(0,"matchesTotal",i)
w.m(0,"matchesPlayed",0)
w.m(0,"seriesStatus","active")
A.d.H(d,w)},
aLo(d){var w,v=J.a6(d),u=B.aQ(v.h(d,"matchesTotal")),t=u==null?null:A.k.M(u)
if(t==null)t=1
v=B.aQ(v.h(d,"matchesPlayed"))
w=v==null?null:A.k.M(v)
return A.o.D(t-(w==null?0:w),0,t)},
hMF(d,e){var w=B.S(e).k("a4<1>")
w=B.z(new B.a4(e,new C.fnL(A.a.i(d.toLowerCase())),w),w.k("E.E"))
return w},
aeD(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(C.aLo(u)<=0){t=J.cB(u)
t.m(u,"status","finished")
t.m(u,"seriesStatus","complete")}}},
hEG(d,e){var w,v,u,t=J.a6(d),s=t.h(d,"status")
if(!J.y(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.y(s==null?"":s,"complete"))return!1
if(C.aLo(d)<=0)return!1
w=A.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=A.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=A.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aLo(d)>0},
hEF(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a6(d),h=B.aQ(i.h(d,"matchesTotal")),g=h==null?null:A.k.M(h)
if(g==null)g=1
h=B.aQ(i.h(d,"matchesPlayed"))
w=h==null?null:A.k.M(h)
v=(w==null?0:w)+1
u=A.a.i(e.toLowerCase())
t=i.h(d,"sessionState")
h=x.f
if(!h.b(t))return"Game "+v+" of "+g+" \u2014 tap Join room when you are ready"
s=x.N
r=x.z
q=B.Z(t,s,r)
p=q.h(0,"inGame")
o=h.b(p)?B.Z(p,s,r):B.R(s,r)
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
k=J.y(o.h(0,u),!0)
j=l!=null&&J.y(o.h(0,l),!0)
if(k&&!j)return"Game "+v+" of "+g+" \u2014 waiting for opponent to join the room"
i=!k
if(i&&j)return"Game "+v+" of "+g+" \u2014 your opponent is in the room. Join now"
if(i&&!j)return"Game "+v+" of "+g+" \u2014 both players tap Join room to start"
return"Game "+v+" of "+g+" \u2014 match in progress"},
hC5(d,e){var w
C.aeD(e)
w=B.S(e).k("a4<1>")
w=B.z(new B.a4(e,new C.f8p(A.a.i(d.toLowerCase())),w),w.k("E.E"))
return w},
ti(d,e){var w,v,u
for(w=J.aW(d);w.C();){v=w.gT(w)
u=J.q(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
hyT(d,e,f){var w,v,u,t="fromName",s=J.a6(f),r=s.h(f,"fromEmail"),q=A.a.i(J.k(r==null?"":r).toLowerCase())
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
fFA(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase()),r=J.a6(d),q=r.h(d,"fromEmail"),p=A.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=A.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.hyT(x.f.b(u)?B.Z(u,r,q):B.R(r,q),v,d)
if((t.length===0||A.a.q(t,"@"))&&f!=null){t=J.q(f,v)
if(t==null)t=""}if(t.length===0||A.a.q(t,"@"))return"Opponent"
return t},
bxX(){var w=0,v=B.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bxX=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aw(),$async$bxX)
case 7:r=e
q=B.aR(J.q(r.a,"all_users"))
if(q==null||q.length===0){k=x.N
u=B.R(k,k)
w=1
break}p=A.Q.aC(0,q,null)
if(!x.j.b(p)){k=x.N
u=B.R(k,k)
w=1
break}k=x.N
o=B.R(k,k)
for(k=J.aW(p),j=x.f;k.C();){n=k.gT(k)
if(!j.b(n))continue
i=J.q(n,"email")
m=A.a.i(J.k(i==null?"":i).toLowerCase())
i=J.q(n,"username")
l=A.a.i(J.k(i==null?"":i))
if(J.aa(m)!==0&&J.aa(l)!==0)J.aE(o,m,l)}u=o
w=1
break
t=2
w=6
break
case 4:t=3
g=s.pop()
k=x.N
u=B.R(k,k)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bxX,v)},
bx3(d,e){var w=0,v=B.j(x.N),u,t,s,r
var $async$bx3=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return B.b(C.bxX(),$async$bx3)
case 3:u=t.fFA(s,r,g)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bx3,v)},
J9(d,e,f){var w=0,v=B.j(x.h),u,t,s,r,q,p
var $async$J9=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=$.fYE.h(0,q)
if(p!=null){t=new B.N(Date.now(),0,!1).bv(p)
t=t.a>B.dB(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.fYE.m(0,q,new B.N(Date.now(),0,!1))
w=5
return B.b(B.OS(A.c2,q),$async$J9)
case 5:case 4:s=$.fYD.h(0,q)
if(s==null){u=C.ti(e,q)
w=1
break}r=C.ti(B.bx9(e,B.a([s],x._)),q)
if(r!=null)B.fHQ(e,r)
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$J9,v)},
hMQ(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=J.a6(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"status",f)
t.m(u,"respondedAt",new B.N(Date.now(),0,!1).aa())
return}}},
hvI(d,e){var w,v,u,t,s,r,q=J.a6(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
p=q.h(d,"fromEmail")
w=A.a.i(J.k(p==null?"":p).toLowerCase())
p=q.h(d,"toEmail")
v=A.a.i(J.k(p==null?"":p).toLowerCase())
q=q.h(d,"fromName")
u=J.k(q==null?w:q)
switch(o){case"tic_tac_go":q=x.N
return B.D(["ttt",B.bT(9,"",!1,q),"turnEmail",w,"playerXEmail",w,"playerXName",u,"playerOEmail",v,"playerOName",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],q,x.z)
case"connect_four_pro":t=J.e0(6,x.L)
for(q=x.S,s=0;s<6;++s)t[s]=B.bT(7,0,!1,q)
return B.D(["c4",t,"c4Turn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
case"checkers_deluxe":t=J.e0(8,x.L)
for(q=x.S,r=0;r<8;++r)t[r]=B.ih(8,new C.eZt(r),!0,q)
return B.D(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return B.D(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
hC4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=J.a6(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"status","active")
t.m(u,"respondedAt",new B.N(Date.now(),0,!1).aa())
r=C.hvI(u,f)
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
if(w)r.m(0,l,o)
s=n.length!==0
if(s)r.m(0,k,n)
m=B.R(x.N,x.z)
if(w)m.m(0,o,!1)
if(s)m.m(0,n,!1)
r.m(0,"inGame",m)
t.m(u,"sessionState",r)
t.m(u,"sessionUpdatedAt",new B.N(Date.now(),0,!1).aa())
return}}},
hMO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=J.a6(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)!==e)continue
w=B.aQ(t.h(u,i))
w=w==null?null:A.k.M(w)
r=(w==null?0:w)+1
t.m(u,i,r)
w=B.aQ(t.h(u,"matchesTotal"))
q=w==null?null:A.k.M(w)
if(r>=(q==null?1:q)){t.m(u,"status","finished")
t.m(u,"seriesStatus","complete")}else{p=t.h(u,h)
if(x.f.b(p)){w=x.N
s=x.z
o=B.Z(p,w,s)
o.m(0,"gameOver",!1)
o.W(0,"startAt")
n=o.h(0,"player1Email")
if(n==null)n=o.h(0,"playerXEmail")
m=A.a.i(J.k(n==null?"":n).toLowerCase())
n=o.h(0,"player2Email")
if(n==null)n=o.h(0,"playerOEmail")
l=A.a.i(J.k(n==null?"":n).toLowerCase())
k=B.R(w,s)
if(m.length!==0)k.m(0,m,!1)
if(l.length!==0)k.m(0,l,!1)
o.m(0,"inGame",k)
w=t.h(u,"gameId")
j=J.k(w==null?"":w)
if(j==="memory"){o.m(0,"memoryMatched",B.a([],x.t))
o.W(0,"memorySeed")}else if(j==="pattern")o.W(0,"patternSeed")
t.m(u,h,o)}}t.m(u,"sessionUpdatedAt",new B.N(Date.now(),0,!1).aa())
return}},
fHP(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=J.a6(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"sessionState",B.Z(f,x.N,x.z))
t.m(u,"sessionUpdatedAt",new B.N(Date.now(),0,!1).aa())
return}}},
fmD(d){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$fmD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aeD(d)
t=$.fF_
if(t==null)s=$.fF_=B.OS(A.c2,null).f4(new C.fmE())
else s=t
w=3
return B.b(s,$async$fmD)
case 3:r=f
if(r==null){u=B.bi(new B.I(d,new C.fmF(),B.S(d).k("I<1,@>")),!0,x.P)
w=1
break}q=B.bx9(d,r)
A.d.a8(d)
A.d.v(d,q)
u=q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fmD,v)},
aeE(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aeE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aeD(d)
t=B.S(d).k("I<1,a0<n,@>>")
t=B.z(new B.I(d,new C.fkz(),t),t.k("ai.E"))
w=3
return B.b(B.OS(t,null),$async$aeE)
case 3:s=f
if(s==null){u=!1
w=1
break}r=B.bx9(d,s)
A.d.a8(d)
A.d.v(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aeE,v)},
aMh(d,e,f){var w=0,v=B.j(x.y),u,t,s,r
var $async$aMh=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:C.fHP(d,e,f)
t=C.ti(d,e)
if(t==null){u=!1
w=1
break}w=3
return B.b(B.OS(B.a([B.Z(t,x.N,x.z)],x._),e),$async$aMh)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.ti(s,e)
if(r!=null)B.fHQ(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMh,v)},
hJz(d,e,f){var w
C.fHP(d,e,f)
w=$.fEO.h(0,e)
if(w!=null)w.a9(0)
$.fEO.m(0,e,B.cW(A.ll,new C.fkA(e,d)))},
fzL(d,e){return new C.aWo(!0,d,"NGMY",A.a.i(e.toLowerCase()),null,!0)},
f8q:function f8q(d,e){this.a=d
this.b=e},
fnL:function fnL(d){this.a=d},
f8p:function f8p(d){this.a=d},
eZt:function eZt(d){this.a=d},
fmE:function fmE(){},
fmF:function fmF(){},
fkz:function fkz(){},
fkA:function fkA(d,e){this.a=d
this.b=e},
aWo:function aWo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
hNg(d,e,f){return B.c1(A.K,new C.foJ(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
foJ:function foJ(d,e){this.a=d
this.b=e},
Yd:function Yd(d,e,f){this.c=d
this.d=e
this.a=f},
aAy:function aAy(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
dV4:function dV4(d){this.a=d},
dV7:function dV7(d){this.a=d},
dV8:function dV8(d){this.a=d},
dV6:function dV6(d){this.a=d},
dV9:function dV9(d){this.a=d},
dVa:function dVa(d,e){this.a=d
this.b=e},
dV5:function dV5(d,e){this.a=d
this.b=e},
hI6(d){var w,v,u,t=A.a.i(d)
if(t.length===0)return A.hX
w=t.toLowerCase()
v=B.ad("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return A.hX
v=Date.now()
u=C.hyd(w,new B.N(v,0,!1))
v=x.N
return B.a([new B.k9("calendar",B.D(["title",C.hyc(t,w),"start",u.aa(),"end",u.bL(36e8).aa(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
hyc(d,e){var w,v,u,t,s,r=B.ad("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cz(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return A.a.i(w==null?"":w)}u=B.ad("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cz(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.fZo(A.a.i(t))}s=B.ad("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cz(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.fZo(A.a.i(t))}if(A.a.q(e,"meeting"))return"Meeting"
if(A.a.q(e,"appointment"))return"Appointment"
return"NGMY Event"},
fZo(d){var w
if(d.length===0)return d
w=A.a.fl(d,B.ad("\\s+",!0,!1,!1,!1))
return new B.I(w,new C.f7C(),B.S(w).k("I<1,n>")).aF(0," ")},
hyd(d,e){var w,v,u,t,s,r,q,p,o=B.bX(B.bv(e),B.bB(e),B.bL(e),0,0,0,0,0)
if(A.a.q(d,"tomorrow"))o=o.bL(864e8)
else if(!A.a.q(d,"today"))for(w=D.ayg.gdH(D.ayg),w=w.gaf(w);w.C();){v=w.gT(w)
u=v.a
if(B.dm(d,u,0)){t=C.hxh(o,v.b)
o=t
break}}s=B.ad("\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cz(d)
if(s!=null){w=s.b
v=w[1]
r=B.c3(v==null?"":v,null)
if(r==null)r=9
v=w[2]
q=B.c3(v==null?"":v,null)
if(q==null)q=0
w=w[3]
p=w==null?null:w.toLowerCase()
if(p==="pm"&&r<12)r+=12
if(p==="am"&&r===12)r=0
if(p==null&&r>=1&&r<=7)r+=12}else{r=9
q=0}return B.bX(B.bv(o),B.bB(o),B.bL(o),r,q,0,0,0)},
hxh(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(B.mu(w)===e){u=!0
if(v<=0){t=d.bL(36e8)
s=w.a
if(s>=t.gbn())u=s===t.gbn()&&w.b<t.gcB()}}else u=!1
if(u)return w
w=w.bL(r)}return d.bL(r)},
f7C:function f7C(){},
hI7(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=A.a.i(d)
if(j.length===0)return A.hX
w=j.toLowerCase()
if(A.a.q(w,k))v=k
else v=A.a.q(w,"imessage")||A.a.q(w,"i message")?"sms":l
u=B.ad("(?:saying|say|message|text|tell(?:ing)?)\\s+(.+)$",!1,!1,!1,!1).cz(j)
if(u!=null){t=u.b[1]
s=t==null?l:A.a.i(t)
if(s==null)s=""
t=B.ad("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
s=A.a.i(B.aI(s,t,""))
t=s.length
r=t>=2&&t<500?s:l}else r=l
q=C.huD(w,j)
if(q==null||q.length===0)return A.hX
t=B.ad("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=B.ad("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return B.a([new B.k9("call",B.D(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=B.D(["name",q],t,t)
if(r!=null)m.m(0,"body",r)
return B.a([new B.k9(n,m)],x.Z)}if(p){t=x.N
return B.a([new B.k9("call",B.D(["name",q],t,t))],x.Z)}return A.hX},
huD(d,e){var w,v,u,t,s,r,q=[B.ad("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),B.ad("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),B.ad("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
for(w=0;w<3;++w){v=q[w].cz(d)
if(v==null)continue
u=v.b[1]
t=u==null?null:A.a.i(u)
if(t==null)t=""
u=B.ad("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
t=A.a.i(B.aI(t,u,""))
u=B.ad("\\s+saying\\s+.+$",!1,!1,!1,!1)
t=A.a.i(B.aI(t,u,""))
u=t.length
s=!1
if(u>=2)if(u<=50){u=B.ad("^\\d+$",!0,!1,!1,!1)
s=B.ad("\\s",!0,!1,!1,!1)
s=B.aI(t,s,"")
u=!u.b.test(s)}else u=s
else u=s
if(u)return C.hBs(t)}r=B.ad("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cz(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return A.a.i(u==null?"":u)}return null},
hBs(d){var w=A.a.fl(d,B.ad("\\s+",!0,!1,!1,!1))
return new B.I(w,new C.f7B(),B.S(w).k("I<1,n>")).aF(0," ")},
f7B:function f7B(){},
h2d(d){var w=new B.I(d,new C.fmV(),B.S(d).k("I<1,a0<n,@>>")).bZ(0,new C.fmW())
w=B.z(w,w.$ti.k("E.E"))
return w},
fmV:function fmV(){},
fmW:function fmW(){},
hIa(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return A.hX
w=A.a.i(d)
if(w.length===0)return A.hX
v=w.toLowerCase()
if(!(A.a.q(v,"send email")||A.a.q(v,"send an email")||A.a.q(v,"send a message to")||A.a.q(v,"email ")||A.a.q(v,"write an email")||A.a.q(v,"write email")))return A.hX
u=B.ad("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cz(w)
if(u==null)return A.hX
t=u.b[0]
t.toString
s=A.a.i(t)
r=B.ad("(?:subject|title)\\s*[:\\-]\\s*(.+)$",!1,!1,!1,!1).cz(w)
if(r!=null){t=r.b[1]
t.toString
q=A.a.i(t)}else q="Message from NGMY"
p=B.ad("(?:saying|that says|with message|message:|body:|write:|text:)\\s*(.+)$",!1,!1,!1,!1).cz(w)
if(p!=null){t=p.b[1]
t.toString
o=A.a.i(t)}else o=""
t=x.N
t=B.R(t,t)
t.m(0,"to",s)
t.m(0,"subject",q)
if(o.length!==0)t.m(0,"body",o)
return B.a([new B.k9("send_email",t)],x.Z)},
hHm(d,e){var w
if(e)return d
w=J.dF(d,new C.fgT())
w=B.z(w,w.$ti.k("E.E"))
return w},
fgT:function fgT(){},
hJw(d){switch(d){case"blackjack_vegas":return D.dlX
case"roulette_euro":return D.dlH
case"slots_jackpot":return D.dlO
case"poker_texas":return D.dlR
case"chess_royale":return D.dlI
case"connect_four_pro":return D.dlJ
case"domino_block":return D.dlL
case"plinko_prizes":return D.dlT
case"spin_wheel":return D.dlQ
case"baccarat_punto":return D.dlK
case"craps_table":return D.dlS
case"casino_war":return D.dlM
case"bingo_live":return D.dlP
case"solitaire_klondike":return D.dlW
case"backgammon_pro":return D.dlG
case"billiards_snooker":return D.dlU
case"profit_solve":return D.dlV
default:return D.dlN}},
fkq(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=B.m(8)
v=B.G(A.aM,A.r,1.5)
u=B.a([new B.a9(0,A.G,A.x.j(0.35),A.e6,6)],x.V)
return B.p(p,B.as(B.V(A.lV,A.c.j(0.5),p,p,p,23.400000000000002),p,p,p),A.h,p,p,new B.o(p,p,v,w,u,D.bGc,A.n),p,74,p,p,p,p,p,52)}t=A.o.D(d,1,13)
s=t===1||t>=10||A.o.J(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][A.o.J(t,4)]
q=s?A.bR:A.M
w=B.m(8)
v=B.G(A.aJ,A.r,1)
u=B.a([new B.a9(0,A.G,A.x.j(0.28),A.e6,6)],x.V)
return B.p(p,B.u(B.a([new B.B(D.bjk,B.d(D.ccQ[t-1]+"\n"+r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,A.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),A.b6,B.as(B.d(r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),A.b6],x.p),A.F,p,A.e,A.j,0,A.p),A.h,p,p,new B.o(A.hD,p,v,w,u,p,A.n),p,74,p,p,p,p,p,52)},
hKA(d,e){var w,v=null,u=B.m(18),t=B.G(A.aM,A.r,3),s=B.a([new B.a9(0,A.G,A.aA.j(0.5),A.J,20)],x.V),r=B.S(e).k("I<1,ha>")
r=B.z(new B.I(e,new C.fmm(),r),r.k("ai.E"))
w=x.p
return B.u(B.a([B.p(v,B.u(B.a([D.eEP,A.aa,B.A(r,A.m,v,A.b5,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(v,v,t,u,s,D.bGw,A.n),v,v,v,v,I.acW,v,v,v),A.az,B.dj(A.aiz,D.eFn,d,B.bk(A.aM,v,v,v,A.dq,v,Ag.Vy,v,v,v,v,v))],w),A.m,v,A.e,A.j,0,A.p)},
oy:function oy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
blZ:function blZ(d,e){this.b=d
this.a=e},
fmm:function fmm(){},
hk_(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e0(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=B.bT(8,0,!1,w)
u=B.bT(9,"",!1,p)
t=x.t
s=B.a([],t)
r=B.a([],t)
t=B.a([0,0,0],t)
q=J.e0(6,o)
for(v=0;v<6;++v)q[v]=B.bT(7,0,!1,w)
return new C.ao1(B.R(p,x.z),n,u,s,r,t,q,new B.ao(A.aq,$.at()))},
hCL(d,e,f,g,h){var w=new C.f8V(f,h)
switch(d){case"checkers_deluxe":return C.htp(h,g,e,w)
case"tic_tac_go":return C.hBB(h,g,e,w)
case"blackjack_vegas":return C.hsN(h,g,e,new C.f8P(w))
case"roulette_euro":return C.hA4(h,g,e,new C.f8Q(w))
case"slots_jackpot":return C.hAS(h,g,e,new C.f8R(w))
case"billiards_snooker":return C.hyV(h,g,e,new C.f8S(w))
case"connect_four_pro":return C.htM(h,g,e,w)
case"profit_solve":return C.hyY(h,g,e,new C.f8T(w))
default:return C.htm(d,h,g,e,new C.f8U(w))}},
htp(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.v9,A.L,w,w),u=B.m(12),t=B.G(D.TG,A.r,8),s=B.a([new B.a9(0,A.G,A.x.j(0.4),A.J,16)],x.V)
return B.u(B.a([new B.B(A.fh,v,w),B.C(B.as(new B.fN(1,B.p(w,B.bu(B.m(6),B.ig(!0,w,w,A.z,D.egh,new C.eWU(d,e,f,g),64,w,A.dJ,A.ag,!1),A.ap),A.h,w,w,new B.o(w,w,t,u,s,w,A.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),A.m,w,A.e,A.j,0,A.p)},
hBB(d,e,f,g){var w=null
return B.u(B.a([new B.B(A.fh,B.d(d.c,w,w,w,w,w,w,D.v9,A.L,w,w),w),B.C(B.as(new B.fN(1,B.cj(new C.f7L(d,e,f,g)),w),w,w,w),1)],x.p),A.m,w,A.e,A.j,0,A.p)},
hsN(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.v9,A.L,v,v),t=x.p,s=B.a([],t),r=d.CW,q=d.ch
if(r)A.d.v(s,new B.I(q,new C.eWl(),B.S(q).k("I<1,r>")))
else A.d.v(s,B.a([C.fkq(q[0],!1),A.bq,C.fkq(0,!0)],t))
s=B.A(s,A.m,v,A.b5,A.j,0,v,v)
r=B.d("Total: "+d.a0P(d.ay),v,v,v,v,v,v,D.eAn,v,v,v)
q=d.ay
w=B.S(q).k("I<1,r>")
q=B.z(new B.I(q,new C.eWm(),w),w.k("ai.E"))
q=B.cd(A.fB,q,A.by,6,6)
return B.u(B.a([new B.B(A.fh,u,v),D.eL3,A.ar,s,A.az,D.eRR,r,A.ar,q,A.b6,B.A(B.a([B.C(B.bJ(D.eFN,d.CW?v:new C.eWn(d,e,f,g),v),1),A.ab,B.C(B.bJ(D.eU1,new C.eWo(d,e,f,g),v),1)],t),A.m,v,A.e,A.j,0,v,v)],t),A.m,v,A.e,A.j,0,A.p)},
hA4(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.v9,A.L,w,w),u=d.cx,t=B.a([new B.a9(0,A.G,A.x.j(0.45),A.cv,16)],x.V)
t=B.a([new B.B(A.fh,v,w),B.p(w,B.b1(w,w,w,new C.blZ(u,w),A.as),A.h,w,w,new B.o(w,w,w,w,t,w,A.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new B.B(A.kV,B.d("Result: "+B.t(v),w,w,w,w,w,w,D.eoY,w,w,w),w))
t.push(A.aa)
t.push(B.cd(A.fB,B.ih(6,new C.f51(d,e,f,g),!0,x.l),A.by,6,6))
return B.u(t,A.m,w,A.e,A.j,0,A.p)},
hAS(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.v9,A.L,w,w),u=d.db,t=B.S(u).k("I<1,n>")
u=B.z(new B.I(u,new C.f6U(),t),t.k("ai.E"))
return B.u(B.a([new B.B(A.fh,v,w),C.hKA(new C.f6V(d,e,f,g),u)],x.p),A.m,w,A.e,A.j,0,A.p)},
hyV(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.v9,A.L,w,w),u=B.m(20),t=B.G(A.hS,A.r,12),s=x.V,r=B.a([new B.a9(0,A.G,A.x.j(0.45),A.dn,18)],s),q=x.p
return B.u(B.a([new B.B(A.fh,v,w),B.C(B.p(w,new B.am(A.V,w,A.a9,A.q,B.a([B.an(w,B.p(w,w,A.h,w,w,D.aRi,w,18,w,w,w,w,w,18),w,w,24,w,24,w),B.an(28,B.p(w,w,A.h,w,w,A.a70,w,14,w,w,w,w,w,14),w,w,w,32,w,w),B.as(B.et(A.B,d.dx,B.p(w,w,A.h,w,w,new B.o(A.aM,w,w,B.m(2),B.a([new B.a9(0,A.G,A.x.j(0.3),A.J,4)],s),w,A.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),A.h,w,w,new B.o(w,w,t,u,r,D.dRD,A.n),w,w,w,A.eW,w,w,w,w),1),B.m8(A.bs,w,w,1,0,new C.f3M(d,f),d.dy),B.bJ(D.eKb,new C.f3N(d,e,g,f),w)],q),A.m,w,A.e,A.j,0,A.p)},
htM(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.v9,A.L,v,v),t=x.l,s=J.e0(7,t)
for(w=0;w<7;++w)s[w]=new B.bG(1,A.bp,B.aJ(v,B.u(B.ih(6,new C.eXk(d,w),!0,t),A.m,v,A.m3,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eXl(d,w,e,f,g),v,v,v,v,v,v,!1,A.ae),v)
return B.u(B.a([new B.B(A.fh,u,v),B.C(B.as(new B.fN(1.1666666666666667,B.A(s,A.dE,v,A.e,A.j,0,v,v),v),v,v,v),1)],x.p),A.m,v,A.e,A.j,0,A.p)},
hyY(d,e,f,g){var w=null
return B.u(B.a([new B.B(A.fh,B.d(d.c,w,w,w,w,w,w,D.v9,A.L,w,w),w),B.d(""+d.a+"/"+d.b,w,w,w,w,w,w,A.kc,w,w,w),B.d(d.fy,w,w,w,w,w,w,D.aK6,A.L,w,w),B.aK(w,A.U,!1,w,!0,A.q,w,B.aL(),d.id,w,w,w,w,w,2,D.bD7,A.z,!0,w,!0,w,!1,w,A.ad,w,w,w,w,w,A.dL,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.f3Z(d,e,g,f),w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,A.di,!0,A.a5,w,A.am,w,w,w,w),B.bJ(D.eIU,new C.f4_(d,e,g,f),w)],x.p),A.m,w,A.e,A.j,0,A.p)},
htm(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gjx(),k=e.d
k=k==null?n:k.c
w=C.hJw(d)
v=D.ay5.h(0,d)
if(v==null)v=d
m=B.d(m,n,n,n,n,n,n,A.mV,A.L,n,n)
u=B.m(22)
t=w.a
s=w.b
r=B.G(s.j(0.5),A.r,2)
q=B.a([new B.a9(0,A.G,w.c.j(0.35),A.eI,24)],x.V)
p=B.d(w.e,n,n,n,n,n,n,W.QK,n,n,n)
o=B.d(v,n,n,n,n,n,n,A.oq,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+B.t(k)+" at the table"
k=x.p
q=B.C(B.as(B.p(n,B.u(B.a([p,A.T,o,A.P,B.d(l,n,n,n,n,n,n,B.l(n,n,A.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),A.d1,B.V(w.f,s.j(0.85),n,n,n,48)],k),A.m,n,A.b5,A.j,0,A.p),A.h,n,n,new B.o(n,n,r,u,q,new B.a8(A.b4,A.bb,A.w,t,n,n),A.n),n,n,n,A.eW,A.a8,n,n,1/0),n,n,n),1)
return B.u(B.a([m,A.aa,q,A.P,new B.a3(1/0,n,B.bJ(D.eTd,new C.eWO(f,e,g,h),B.bk(s,n,n,n,A.d.gI(t).iY()>0.4?A.x:A.c,n,A.c9,n,n,n,n,n)),n)],k),A.m,n,A.e,A.j,0,A.p)},
Db:function Db(d,e){this.a=d
this.b=e},
ao1:function ao1(d,e,f,g,h,i,j,k){var _=this
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
c7l:function c7l(){},
c7m:function c7m(){},
c7k:function c7k(){},
c7n:function c7n(){},
c7j:function c7j(){},
c7p:function c7p(){},
c7q:function c7q(){},
c7i:function c7i(d){this.a=d},
c7o:function c7o(){},
c7h:function c7h(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8V:function f8V(d,e){this.a=d
this.b=e},
f8P:function f8P(d){this.a=d},
f8Q:function f8Q(d){this.a=d},
f8R:function f8R(d){this.a=d},
f8S:function f8S(d){this.a=d},
f8T:function f8T(d){this.a=d},
f8U:function f8U(d){this.a=d},
eWU:function eWU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eWT:function eWT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f7L:function f7L(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7K:function f7K(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f7J:function f7J(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eWl:function eWl(){},
eWm:function eWm(){},
eWn:function eWn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eWo:function eWo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f51:function f51(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f50:function f50(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f6U:function f6U(){},
f6V:function f6V(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3M:function f3M(d,e){this.a=d
this.b=e},
f3N:function f3N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eXl:function eXl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eXk:function eXk(d,e){this.a=d
this.b=e},
f3Z:function f3Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f4_:function f4_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eWO:function eWO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hFs(d){var w,v=B.S(d).k("a4<1>")
v=B.oI(new B.a4(d,new C.fcD(),v),120,v.k("E.E"))
w=B.cy(v,new C.fcE(),B.a2(v).k("E.E"),x.N).aF(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fcD:function fcD(){},
fcE:function fcE(){},
aeP(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
aoV:function aoV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aBi:function aBi(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
epl:function epl(){},
aJ_:function aJ_(){},
hi0(){var w=$.GQ
if(w<=0)return;--w
$.GQ=w
if(w===0){w=$.fPh
if(w!=null)w.$0()}},
c2T(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
amK(d){var w=0,v=B.j(x.H),u,t
var $async$amK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=A.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.fzG.H(0,t)
w=4
return B.b(B.aw(),$async$amK)
case 4:w=3
return B.b(f.an("Bool","ngmy_game_free_play_used_"+A.a.i(t.toLowerCase()),!0),$async$amK)
case 3:case 1:return B.h(u,v)}})
return B.i($async$amK,v)},
amJ(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$amJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(C.c2T(d)){u=!0
w=1
break}t=A.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.fzG.q(0,t)){u=!1
w=1
break}w=3
return B.b(B.aw(),$async$amJ)
case 3:s=f
r=A.a.i(t.toLowerCase())
r=B.kq(J.q(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amJ,v)},
Td(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Td=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aw(),$async$Td)
case 7:r=e
q=B.aR(J.q(r.a,"ngmy_helper_ai_usage_v1"))
if(q==null||A.a.i(q).length===0){u=B.R(x.N,x.z)
w=1
break}p=A.Q.aC(0,q,null)
if(x.f.b(p)){o=B.Z(p,x.N,x.z)
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
case 6:u=B.R(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Td,v)},
aWG(d){return C.hid(d)},
hid(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$aWG=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aw(),$async$aWG)
case 6:s=f
w=7
return B.b(s.an("String","ngmy_helper_ai_usage_v1",A.Q.aj(d,null)),$async$aWG)
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
return B.i($async$aWG,v)},
aWE(d,e){var w,v,u,t,s=J.q(d,A.a.i(e.toLowerCase()))
if(!x.f.b(s))return new B.abw(0,new B.N(Date.now(),0,!1))
w=J.a6(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=B.bg(u==null?"":u)
if(t==null)t=new B.N(Date.now(),0,!1)
return new B.abw(typeof v=="number"?A.o.D(A.k.M(v),0,999999):0,t)},
aWF(d,e){if(A.o.ak(e.bv(d.b).a,36e8)>=24)return new B.abw(0,e)
return d},
c3o(d,e){var w=0,v=B.j(x.S),u,t,s
var $async$c3o=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return B.b(C.Td(),$async$c3o)
case 3:t=g
s=Date.now()
u=A.o.D(e-C.aWF(C.aWE(t,d),new B.N(s,0,!1)).a,0,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c3o,v)},
c3p(d,e){var w=0,v=B.j(x.cJ),u,t,s,r
var $async$c3p=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return B.b(C.Td(),$async$c3p)
case 3:t=g
s=Date.now()
r=C.aWF(C.aWE(t,d),new B.N(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bL(864e8)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c3p,v)},
hie(d){var w,v,u,t=d.a,s=A.o.ak(t,1e6)
if(s<=0)return"0s"
w=A.o.ak(t,36e8)
v=A.o.ak(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+A.a.aT(A.o.u(v),2,"0")+"m "+A.a.aT(A.o.u(u),2,"0")+"s"
if(v>0)return""+v+"m "+A.a.aT(A.o.u(u),2,"0")+"s"
return""+u+"s"},
aWH(d){var w=0,v=B.j(x.y),u,t,s,r,q,p,o
var $async$aWH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return B.b(C.Td(),$async$aWH)
case 3:t=p.aWF(o.aWE(f,d),new B.N(Date.now(),0,!1))
w=4
return B.b(B.aw(),$async$aWH)
case 4:s=f
r=A.a.i(d.toLowerCase())
q=t.b.a4().aa()
u=B.kq(J.q(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aWH,v)},
an4(d){var w=0,v=B.j(x.H),u,t,s,r
var $async$an4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return B.b(C.Td(),$async$an4)
case 3:t=s.aWF(r.aWE(f,d),new B.N(Date.now(),0,!1))
w=5
return B.b(B.aw(),$async$an4)
case 5:w=4
return B.b(f.an("Bool","ngmy_helper_3left_"+A.a.i(d.toLowerCase())+"_"+t.b.a4().aa(),!0),$async$an4)
case 4:case 1:return B.h(u,v)}})
return B.i($async$an4,v)},
an5(d,e){var w=0,v=B.j(x.y),u,t,s,r,q
var $async$an5=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=A.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return B.b(C.Td(),$async$an5)
case 3:s=g
r=Date.now()
q=C.aWF(C.aWE(s,d),new B.N(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aE(s,t,B.D(["count",r+1,"windowStart",q.b.a4().aa()],x.N,x.K))
w=4
return B.b(C.aWG(s),$async$an5)
case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$an5,v)},
aer(d,e,a0){var w=0,v=B.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aer=B.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new B.f4("")
if(!d.d){p=!0
if(!C.h25(a0))if(!C.h24(a0)){p=B.ad("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.h25(a0)?3:4
break
case 3:o=C.hJb(a0)
w=o!=null?5:6
break
case 5:w=7
return B.b(C.bX2(e,o),$async$aer)
case 7:n=a2
p=J.a6(n)
if(p.gcf(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.fNP(o)+":\n"
m.a+=l
for(p=p.gaf(n);p.C();){m=p.gT(p)
l=h
k="- "+m.gTr()+"\n"
l.a+=k
m=m.f
if(m!=null&&A.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=B.ad("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return B.b(B.Q9("text/plain"),$async$aer)
case 14:r=a2
p=r
if(p==null)p=null
else p=A.a.i(p.a)
q=p==null?"":p
if(J.aa(q)!==0){p=h
m="CLIPBOARD CONTENT (user asked):\n"+B.t(q)+"\n\n"
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
case 13:case 9:w=C.h24(a0)?15:16
break
case 15:p=h
f=C
w=17
return B.b(C.a52(e),$async$aer)
case 17:m=f.fPo(a2)+"\n"
p.a+=m
case 16:p=B.ad("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return B.b(C.Sh(e),$async$aer)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cs(i)){p=h
m=C.fNQ(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=A.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aer,v)},
hjx(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.ad("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.ad("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
c5X(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$c5X=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.fQ1(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.eU("ngmy_local_growth_income_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bD),$async$c5X)
case 7:r=f
if(r!=null){p=J.q(r,"token")
p=A.a.i(J.k(p==null?"":p))
u=p
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.a5(m)
$.ak.$1("[local growth income stash] code lookup: "+B.t(q))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$c5X,v)},
anK(d){var w=0,v=B.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$anK=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=A.a.i(d)
if(J.aa(k)===0){u=null
w=1
break}t=4
w=7
return B.b(B.eU("ngmy_local_growth_income_stash_v1_"+A.a.i(k),null,!1,A.bD),$async$anK)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.q(r,"payload")
q=J.k(n==null?"":n)
if(J.aa(q)===0){u=null
w=1
break}n=J.q(r,"ownerEmail")
p=A.a.i(J.k(n==null?"":n))
n=A.c0.c4(0,A.cw.aE(q))
m=J.y(J.q(r,"live"),!0)
u=new B.aCG(m,p,n)
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=B.a5(j)
$.ak.$1("[local growth income stash] consume: "+B.t(o))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$anK,v)},
aXK(d){var w=0,v=B.j(x.bY),u,t,s,r,q
var $async$aXK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=C.hjx(q)?3:4
break
case 3:w=5
return B.b(C.c5X(q),$async$aXK)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.anK(t)
w=1
break
case 4:if(A.a.a_(q,"NGMYLOCALSYNC1|")){u=C.anK(A.a.i(A.a.aU(q,15)))
w=1
break}w=A.a.a_(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return B.b(C.anK(A.a.i(A.a.aU(q,15))),$async$aXK)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new B.aCG(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aXK,v)},
fQf(d){var w=d.bI
if(w>=0)return w
return 1},
aeC(d,e,f){var w=0,v=B.j(x.H),u,t
var $async$aeC=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return B.b(B.aMs(d,e),$async$aeC)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return B.b(B.F7(d,null,null,!1,!0,""),$async$aeC)
case 5:w=4
return B.b(t.$1(h),$async$aeC)
case 4:case 1:return B.h(u,v)}})
return B.i($async$aeC,v)},
hI5(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=A.a.i(a2)
if(a1.length===0)return A.hX
w=a1.toLowerCase()
v=B.ad("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=B.ad("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cz(w)
if(!u&&t==null)return A.hX
s=new B.N(Date.now(),0,!1)
r=B.da()
q=B.da()
p=C.hyb(w)
if(p!=null){v=p.a
r.b=s.bL(v)
q.b=C.fYh(a1,w)
if(J.y(q.b7(),"Wake up")&&A.o.ak(v,e)<=180)q.b="Reminder \u2014 "+A.o.ak(v,e)+" min"}else{if(t!=null){v=B.ad("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=A.a.e0(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.fYi(v[2],v[4],v[3])
o=v[3]
m=B.c3(o==null?"":o,null)
if(m==null)m=0
l=B.bX(B.bv(s),B.bB(s),B.bL(s),0,0,0,0,0)
if(A.a.q(w,d))l=l.bL(a0)
r.b=B.bX(B.bv(l),B.bB(l),B.bL(l),n,m,0,0,0).bL(-36e8)
if(r.b7().cU(s.bL(e)))r.b=J.ch(r.b7(),A.oX)
v=C.hC3(v[1])
k=A.o.J(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+A.a.aT(A.o.u(m),2,"0")+" "+j)}else{l=B.bX(B.bv(s),B.bB(s),B.bL(s),0,0,0,0,0)
v=A.a.q(w,d)
if(v)l=l.bL(a0)
i=B.ad("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cz(w)
if(i!=null){o=i.b
h=C.fYi(o[1],o[3],o[2])
o=o[2]
g=B.c3(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=B.bX(B.bv(l),B.bB(l),B.bL(l),h,g,0,0,0)
r.b=f.cU(s.bL(3e7))&&!v?f.bL(a0):f
q.b=C.fYh(a1,w)}}v=x.N
return B.a([new B.k9("alarm",B.D(["title",q.b7(),"start",r.b7().aa(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
hyb(d){var w,v,u,t,s,r,q=[B.ad("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.ad("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.ad("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),B.ad("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
for(w=0;w<4;++w){v=q[w].cz(d)
if(v==null)continue
u=v.b
t=u[1]
s=B.c3(t==null?"":t,null)
if(s==null||s<=0)continue
r=u[2]
if(r==null)r="minute"
if(A.a.a_(r,"sec"))return new B.b7(1e6*A.o.D(s,5,86400))
if(A.a.a_(r,"hour")||A.a.a_(r,"hr"))return new B.b7(36e8*A.o.D(s,1,168))
return new B.b7(6e7*A.o.D(s,1,10080))}return null},
hC3(d){var w=d==null?"work":d,v=w.toLowerCase()
if(A.a.q(v,"meeting")||A.a.q(v,"appointment"))return"Meeting"
if(A.a.q(v,"class")||A.a.q(v,"school"))return"Class"
if(A.a.q(v,"shift"))return"Shift"
return"Work"},
fYi(d,e,f){var w,v=B.c3(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return A.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
fYh(d,e){var w,v,u,t
if(A.a.q(e,"work"))return"Wake up \u2014 Work"
if(A.a.q(e,"school")||A.a.q(e,"class"))return"Wake up \u2014 School"
w=B.ad("\\btimer\\b",!1,!1,!1,!1)
if(w.b.test(e))return"Timer"
v=B.ad("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cz(d)
if(v!=null){w=v.b
u=w[1]
w=u==null?w[2]:u
t=A.a.i(w==null?"":w)
w=t.length
if(w>=3&&w<=60)return t}return"Wake up"},
hjT(d){var w,v,u,t,s=J.a6(d)
if(s.gah(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.jY(d,80),v=w.$ti,w=new B.bR(w,w.gG(0),v.k("bR<ai.E>")),v=v.k("ai.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gG(d)>80?u+("\u2026 and "+(s.gG(d)-80)+" more\n"):u
return A.a.i(s.charCodeAt(0)==0?s:s)}},D,H,Ac,I,G,Ad,V,F,W,Ae,Af,X,Ag,Ah,Ai,Aj,Y,Z,K,Ak
J=c[1]
B=c[0]
A=c[2]
L=c[30]
Q=c[156]
E=c[148]
M=c[158]
A_=c[122]
N=c[92]
A0=c[154]
R=c[33]
O=c[70]
A1=c[77]
S=c[76]
A2=c[78]
P=c[123]
A3=c[126]
A4=c[159]
T=c[150]
A5=c[162]
A6=c[160]
A7=c[161]
A8=c[157]
A9=c[153]
Aa=c[62]
U=c[140]
Ab=c[141]
C=a.updateHolder(c[5],C)
D=c[147]
H=c[25]
Ac=c[61]
I=c[152]
G=c[91]
Ad=c[163]
V=c[26]
F=c[151]
W=c[104]
Ae=c[149]
Af=c[166]
X=c[155]
Ag=c[167]
Ah=c[114]
Ai=c[165]
Aj=c[98]
Y=c[69]
Z=c[54]
K=c[52]
Ak=c[164]
C.bn5.prototype={
nU(d,e){return this.a.$2(d,e)}}
C.DN.prototype={
S(){return new C.aEJ(this.$ti.k("aEJ<DN.T,DN.S>"))}}
C.aEJ.prototype={
Z(){var w,v,u=this
u.a0()
w=u.a
v=w.f
w=new B.ht(A.Df,v,null,null,w.$ti.k("ht<1>"))
u.e=w
u.TY()},
bo(d){var w,v=this
v.bA(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aJ2()
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.ht(A.Df,w.b,w.c,w.d,w.$ti)}v.TY()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&B.c()
return v.mw(d,w)},
p(){this.aJ2()
this.a2()},
TY(){var w,v=this
v.d=v.a.c.kW(new C.eKV(v),new C.eKW(v),new C.eKX(v))
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.ht(A.Ua,w.b,w.c,w.d,w.$ti)},
aJ2(){var w=this.d
if(w!=null){w.a9(0)
this.d=null}}}
C.asz.prototype={
mw(d,e){return this.e.$2(d,e)}}
C.ail.prototype={
S(){return C.hqm()},
bm(){return this.r.$0()}}
C.o2.prototype={}
C.ax4.prototype={
a7H(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7H=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=!C.c2T(t.a.c)
if(r){w=3
break}else e=r
w=4
break
case 3:w=5
return B.b(C.amJ(t.a.c),$async$a7H)
case 5:e=!e
case 4:s=e
if(t.c==null){w=1
break}t.n(new C.d27(t,s))
case 1:return B.h(u,v)}})
return B.i($async$a7H,v)},
a9D(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a9D=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.bxX(),$async$a9D)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d2i(t,s))
case 1:return B.h(u,v)}})
return B.i($async$a9D,v)},
Z(){var w,v,u=this
u.bnU()
$.rI=$.rI+1
w=u.a
$.by0=w.c.a
w=w.d.b1
v=B.S(w).k("I<1,a0<n,@>>")
w=B.z(new B.I(w,new C.d2A(),v),v.k("ai.E"))
u.f=w
u.a9D()
u.I7()
u.a7H()
u.e=B.dE(A.nf,new C.d2B(u))},
I7(){var w=0,v=B.j(x.H),u,t=this,s
var $async$I7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:C.aeD(t.a.d.b1)
w=3
return B.b(C.fmD(t.a.d.b1),$async$I7)
case 3:s=e
if(t.c==null){w=1
break}C.aeD(t.a.d.b1)
if(s!=null)t.n(new C.d2q(t,s))
else t.n(new C.d2r(t))
case 1:return B.h(u,v)}})
return B.i($async$I7,v)},
p(){C.aWq()
var w=this.e
if(w!=null)w.a9(0)
this.bnT()},
aeo(d,e,f){return this.cj4(d,e,f)},
cj4(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$aeo=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(e.toLowerCase())
p=J.q(t.r,q)
o=t.a
n=o.d.b1
o=o.c
s=d.b
C.hC6(n,o.a,o.c,d.a,s,f,e,p)
t.a.bm()
w=3
return B.b(C.aeE(t.a.d.b1),$async$aeo)
case 3:if(t.c==null){w=1
break}t.n(new C.d2t(t))
r=f===1?"1 game":""+f+" games"
t.c.F(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aeo,v)},
H2(d,e){return this.c4S(d,e)},
bUF(d){return this.H2(d,null)},
c4S(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$H2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&A.a.i(e).length!==0){s=C.ti(t.a.d.b1,A.a.i(e))
if(s!=null&&C.aLo(s)<=0){t.c.F(x.q).f.P(D.aI1)
w=1
break}}w=5
return B.b(C.amJ(t.a.c),$async$H2)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return B.b(C.fzH(r,C.fh3(q.c),p),$async$H2)
case 6:w=1
break
case 4:o=new C.d2l(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
B.hl(r,new C.azT(p,q.d,q.f,q.r,new C.d2m(o),q.w,C.fh3(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
B.hl(q,new C.aik(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.d2n(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$H2,v)},
bSd(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.aeD(i.a.d.b1)
C.aeD(i.f)
w=C.hMF(i.a.c.a,i.f)
v=C.hC5(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return A.bF
if(!u){t=A.d.gI(w)
u=B.m(14)
s=B.G(A.be,A.r,1)
r=J.a6(t)
q=r.h(t,"fromName")
q=B.t(q==null?r.h(t,"fromEmail"):q)
p=B.t(r.h(t,"gameTitle"))
o=B.aQ(r.h(t,g))
o=o==null?h:A.k.M(o)
if(o==null)o=1
r=B.aQ(r.h(t,g))
r=r==null?h:A.k.M(r)
r=(r==null?1:r)===1?"":"s"
n=x.p
return B.p(h,B.u(B.a([D.eO2,B.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,A.ou,h,h,h),A.P,B.A(B.a([B.C(B.dU(A1.R9,new C.d2d(i,t),h),1),A.ab,B.C(B.bJ(D.eWl,new C.d2e(i,t),h),1)],n),A.m,h,A.e,A.j,0,h,h)],n),A.F,h,A.e,A.j,0,A.p),A.h,h,h,new B.o(A.aA,h,s,u,h,h,A.n),h,h,h,A.e3,A.bk,h,h,1/0)}m=A.d.gI(v)
l=A.d.dP(i.y,new C.d2f(m),new C.d2g(i))
k=C.fFA(m,i.a.c.a,i.r)
j=C.aLo(m)
u=B.m(14)
s=B.G(A.be,A.r,1)
r=j===1?"":"s"
return B.p(h,B.u(B.a([D.eGR,B.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,A.ou,h,h,h),A.au,B.d(C.hEF(m,i.a.c.a),h,h,h,h,h,h,A.a46,h,h,h),A.P,B.bJ(D.eNm,new C.d2h(i,l,m),h)],x.p),A.F,h,A.e,A.j,0,A.p),A.h,h,h,new B.o(A.bh,h,s,u,h,h,A.n),h,h,h,A.e3,A.bk,h,h,1/0)},
bJ5(d){var w,v=null,u=D.ect.q(0,d.a),t=B.m(16),s=d.f,r=B.m(16),q=B.G(B.W(71,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1),p=A.d.gI(s)
p=B.a([new B.a9(0,A.G,B.W(102,p.l()>>>16&255,p.l()>>>8&255,p.l()&255),A.J,12)],x.V)
w=x.p
w=B.a([new B.a3(100,v,B.as(B.V(d.e,A.c,v,v,v,64),v,v,v),v),B.C(new B.B(A.ks,B.u(B.a([B.A(B.a([B.C(B.d(d.b,v,v,v,v,v,v,A.l7,v,v,v),1)],w),A.m,v,A.e,A.j,0,v,v),A.au,B.d(d.c,v,2,A.Z,v,v,v,A.nE,v,v,v)],w),A.F,v,A.b5,A.j,0,A.p),v),1)],w)
if(u)w.push(B.aF(v,v,v,v,D.bAK,v,v,v,new C.d29(this,d),v,v,v,v,"Invite player",v))
w.push(D.dME)
return B.aH(!1,t,!0,B.p(v,B.A(w,A.m,v,A.e,A.j,0,v,v),A.h,v,v,new B.o(v,v,q,r,p,new B.a8(A.a_,A.a7,A.w,s,v,v),A.n),v,92,v,A.e3,v,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.d2a(this,d),v,v,v,v,v,v,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.K(d).ax.a===A.H,l=B.K(d).ax.a===A.H?A.iT:A.oO,k=m?A.hm.j(0.94):A.c.j(0.94),j=m?A.c:A.M,i=m?A.hm:A.c,h=m?A.c.j(0.08):A.aJ,g=m?A.c:A.M,f=m?A.bj:A.bO
if(!o.x)return C.aLW(n,l,B.as(B.mi(n,m?A.c:A.bs,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fh3(o.a.c)
return new C.LG(o.a.w,w,!0,o.gaNN(),n)}w=B.aG(d,A.e0,x.w).w
v=B.m(12)
u=B.G(h,A.r,1)
t=x.V
s=B.a([],t)
if(!m)s.push(new B.a9(0,A.G,A.x.j(0.04),A.cD,12))
r=x.p
s=B.a([B.p(n,B.A(B.a([B.C(B.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,B.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,A.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new B.tI(new C.d2x(o,f,g),n,$.aNg(),n)],r),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(i,n,u,v,s,n,A.n),n,n,n,n,A.V1,n,n,1/0),A.T,o.bSd()],r)
v=o.y
A.d.v(s,new B.I(v,o.gbJ4(),B.S(v).k("I<1,r>")))
w=B.cg(B.u(s,A.m,n,A.e,A.j,0,A.p),A.q,n,A.z,n,new B.L(14,w.r.b+78,14,24),n,n,A.ag)
s=B.m(35)
v=B.a([new B.a9(0,A.G,A.x.j(m?0.28:0.08),A.jm,15)],t)
u=B.G(m?A.c.j(0.1):A.aJ,A.r,1)
t=B.aF(n,n,n,n,B.V(A.eq,j,n,n,n,18),n,n,n,o.gaNN(),n,n,n,n,n,n)
q=B.C(B.as(B.d("GAME CENTER",n,n,n,n,n,n,B.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,A.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=B.m(20)
return B.nU(!0,C.aLW(n,l,new B.am(A.V,n,A.a9,A.h,B.a([w,B.an(n,B.br(!1,new B.B(A.JM,B.p(n,B.A(B.a([t,q,new B.B(A.ks,B.p(n,B.A(B.a([D.bwh,A.ez,C.anz(new C.d2y(o),A.mV,o.a.c.a)],r),A.m,n,A.e,A.R,0,n,n),A.h,n,n,new B.o(A.cL,n,n,p,n,n,A.n),n,n,n,n,A.h0,n,n,n),n)],r),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(k,n,u,s,v,n,A.n),n,60,n,n,A.mA,n,n,n),n),!0,!1,A.ah,!0,!0),n,n,0,0,0,n)],r),n)),new C.d2z(o),x.K)},
aNO(){var w,v
this.a.bm()
w=this.d
v=w>0?B.D(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
B.iC(w,v)}}
C.azT.prototype={
S(){return new C.bfl()},
he(d){return this.e.$1(d)},
bm(){return this.f.$0()},
aCK(){return this.r.$0()}}
C.bfl.prototype={
Z(){this.boT()
this.d=B.SE(this.a.d.bc)
$.rI=$.rI+1},
p(){C.aWq()
this.boS()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&B.c()
return new C.amd(v,new C.dFj(w),u,new C.dFk(w),new C.dFl(w,d),new C.dFm(w),null)}}
C.aik.prototype={
S(){return new C.ax3(new B.ao(A.aq,$.at()))},
he(d){return this.x.$1(d)},
bm(){return this.y.$0()},
aCK(){return this.z.$0()}}
C.ax3.prototype={
Z(){this.bnS()
this.a.toString
$.rI=$.rI+1},
p(){C.aWq()
var w=this.d
w.R$=$.at()
w.O$=0
this.bnR()},
a_E(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a_E=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.LM()
w=5
return B.b(C.amJ(t.a.c),$async$a_E)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return B.b(C.fzH(s,C.fh3(r.c),q),$async$a_E)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&A.a.i(r).length!==0){p=C.ti(s.d.b1,A.a.i(r))
if(p!=null&&C.aLo(p)<=0){t.c.F(x.q).f.P(D.aI1)
w=1
break}}o=B.d_(A.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.F(x.q).f.P(D.ejg)
w=1
break}m=B.Ji(t.a.c.a,new C.d21(t))
if(m+0.001<n){t.c.F(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d("Not enough balance for this bet \u2014 you have $"+B.dx(m)+", the bet is $"+B.dx(n)+".",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aCK()
s=t.a
s.toString
r=A.o.u(1000*Date.now())
q=t.a
s.he(new B.cQ(r,q.c.a,n,A.jr,A.eX,"Game bet: "+q.f,null,null,A.cc,new B.N(Date.now(),0,!1)))
t.a.bm()
if(D.ecm.q(0,t.a.e)){s=t.c
s.toString
r=t.a
B.hl(s,new C.alg(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
B.hl(s,new C.aim(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$a_E,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=B.aF(o,o,o,o,A.EG,o,o,o,new C.d24(d),o,o,o,o,o,o),k=p.a,j=B.d(k.f,o,o,o,o,o,o,A.cq,o,o,o),i=B.m(12),h=x.p
j=B.eB(B.a([B.p(o,B.as(C.anz(new C.d25(p),A.kc,k.c.a),o,o,o),A.h,o,o,new B.o(A.cL,o,o,i,o,o,A.n),o,o,o,D.bdU,A.ie,o,o,o)],h),o,o,!0,!0,D.U8,o,1,o,o,o,!1,o,!1,A.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=B.m(16)
i=B.G(A.be,A.r,1)
k=B.V(D.bnb,D.b9c,o,o,o,28)
w=p.a
v=B.d(w.f,o,o,o,o,o,o,A.oq,o,o,o)
w=B.d(w.r,o,o,o,o,o,o,A.ou,o,o,o)
u=B.W(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.m(12)
s=x.a3
s=B.z(new B.I(B.a([2,5,10,25],x.t),new C.d26(p),s),s.k("ai.E"))
s=B.A(s,A.m,o,A.e,A.j,0,o,o)
r=B.W(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.p(o,B.u(B.a([D.eXN,A.T,s,A.P,B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.d,o,o,o,o,o,2,B.bn(o,new B.b2(4,B.m(10),A.W),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l8,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ad,o,o,o,o,o,A.dL,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.di,!0,A.a5,o,A.am,o,o,o,o)],h),A.m,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(u,o,o,t,o,o,A.n),o,o,o,o,A.bS,o,o,1/0)
u=B.m(12)
r=B.G(B.W(102,A.a0k.l()>>>16&255,A.a0k.l()>>>8&255,A.a0k.l()&255),A.r,1)
s=B.W(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
q=B.m(10)
q=B.p(o,B.u(B.a([D.eGe,B.d("+ $"+A.k.ab(n*0.46,2),o,o,o,o,o,o,D.exe,o,o,o),B.d("(46% return on $"+A.k.ab(p.e,2)+" bet)",o,o,o,o,o,o,A.nE,o,o,o)],h),A.m,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(s,o,o,q,o,o,A.n),o,o,o,o,A.ch,o,o,1/0)
s=B.W(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
n=B.m(10)
u=B.p(o,B.u(B.a([D.eOi,A.P,q,A.P,B.p(o,B.u(B.a([D.eBK,B.d("$"+A.k.ab(m,2),o,o,o,o,o,o,D.ens,o,o,o),B.d("8 pairs \xd7 $"+A.k.ab(m,2)+" each",o,o,o,o,o,o,A.nE,o,o,o)],h),A.m,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(s,o,o,n,o,o,A.n),o,o,o,o,A.ch,o,o,1/0)],h),A.m,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(D.b61,o,r,u,o,o,A.n),o,o,o,o,A.bS,o,o,1/0)
r=B.fe(o,o,A.bs,o,o,o,o,o,o,A.c,o,A.fV,o,o,o,o,o,o,o,o)
return C.aLW(j,D.U8,B.cg(B.p(o,B.u(B.a([k,A.au,v,A.bw,w,A.T,t,A.P,u,A.T,new B.a3(1/0,o,B.hU(B.d("Start Game ($"+A.k.ab(p.e,2)+")",o,o,o,o,o,o,A.cb,o,o,o),p.gcmQ(),r),o)],h),A.m,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(o,o,i,l,o,D.bFC,A.n),o,o,o,o,A.eF,o,o,1/0),A.q,o,A.z,o,E.acx,o,o,A.ag))}}
C.aim.prototype={
S(){var w=x.s,v=x.t,u=x.S
return new C.ax5(A.cA,new B.ao(A.aq,$.at()),B.a([],w),B.a([],x.d4),B.a([],w),B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.aZ(u),B.aZ(u),B.a([],v),B.a([],v),B.a([],v))},
he(d){return this.y.$1(d)},
bm(){return this.z.$0()}}
C.ax5.prototype={
ghr(){var w=this.a.Q
return w!=null&&A.a.i(w).length!==0},
qm(d){return this.bHq(d)},
bHq(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$qm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.z3()
r=t.MO()
w=s<=0?3:4
break
case 3:w=5
return B.b(t.a85(d),$async$qm)
case 5:w=1
break
case 4:q=A.k.D(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return B.b(t.rV(d),$async$qm)
case 9:w=7
break
case 8:w=10
return B.b(t.Dc(q,s,r),$async$qm)
case 10:case 7:case 1:return B.h(u,v)}})
return B.i($async$qm,v)},
Iy(d,e,f,g){return this.ckG(d,e,f,g)},
ckG(d,e,f,g){var w=0,v=B.j(x.H),u,t=this,s
var $async$Iy=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(C.bz1(s,C.byG(),C.fHq(),d,e,f,g),$async$Iy)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Iy,v)},
z3(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.aXO(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&B.c()
return u+C.aeP(t,s.e.a.a)
case"memory":return s.ghr()&&D.m9.q(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.auh()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bc
case"color":return s.b1
case"reflex":return s.Y
default:u=s.aW
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
auh(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
MO(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&B.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.fFD()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.aW
if(w!=null)return w.b
return 1}},
bo(d){var w,v,u=this
u.bA(d)
if(u.f||u.ci)return
w=u.a
v=C.fh6(w.e,w.d.y2)
if(v!==C.fh6(d.e,d.d.y2)&&u.c!=null)u.n(new C.d3U(u,v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.bnW()
w=i.a
w.toString
$.rI=$.rI+1
i.Q=C.fh6(w.e,w.d.y2)
i.b_B()
i.a9m()
if(i.ghr()){i.ci=!0
i.cT="Connecting to match\u2026"
i.cd="Both players enter the room together \u2014 play starts at the same time."
i.N9()
i.a90()
i.bg=B.dE(A.fQ,new C.d3X(i))}if(A.d.q(D.NG,i.a.e)){w=i.ghr()
v=i.a
if(w){w=v.d.b1
v=v.Q
v.toString
u=C.ti(w,v)
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
m=s.b(t.h(u,h))?B.Z(s.a(t.h(u,h)),o,n):B.R(o,n)
s=p===r
l=s?q:r
if(s){o=m.h(0,"player2Name")
if(o==null)o=m.h(0,"playerOName")
t=o==null?t.h(u,"toName"):o
k=A.a.i(J.k(t==null?"":t))}else{o=m.h(0,"player1Name")
if(o==null)o=m.h(0,"playerXName")
t=o==null?t.h(u,"fromName"):o
k=A.a.i(J.k(t==null?"":t))}w=new C.aWo(!1,w,k.length===0||A.a.q(k,"@")?C.fFA(u,v,null):k,p,l,s)}else{w=w.c
w=C.fzL(w.c,w.a)}w=i.bE=w}else{w=v.c
w=i.bE=C.fzL(w.c,w.a)}v=C.hk_()
v.bi0(i.a.e,i.d,w)
i.aW=v
i.r=v.c
if(i.ghr()){w=i.a
v=w.d.b1
w=w.Q
w.toString
u=C.ti(v,w)
m=u==null?null:J.q(u,h)
if(x.f.b(m)){w=i.aW
w.toString
w.b4E(i.a.e,B.Z(m,x.N,x.z),i.a.c.a)
w=i.aW
i.r=w.c
if(w.e){if(w.r)j=D.P1
else j=w.f===!0?D.pk:D.FW
i.z5(j)}}}i.aZ=B.dE(A.ni,new C.d3Y(i))
if(i.ghr())i.b6=B.dE(A.o0,new C.d3Z(i))}if(i.ghr()&&!A.d.q(D.NG,i.a.e))i.b6=B.dE(A.o0,new C.d4_(i))
i.as=B.dE(A.fZ,new C.d40(i))},
N9(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$N9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.ti(s.d.b1,q)
w=p!=null?3:4
break
case 3:w=5
return B.b(C.bx3(p,t.a.c.a),$async$N9)
case 5:o=e
if(t.c!=null)t.n(new C.d39(t,o))
w=1
break
case 4:w=6
return B.b(C.J9(q,t.a.d.b1,!1),$async$N9)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return B.b(C.bx3(n,t.a.c.a),$async$N9)
case 7:o=e
if(t.c!=null)t.n(new C.d3a(t,o))
case 1:return B.h(u,v)}})
return B.i($async$N9,v)},
aft(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aft=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.J9(r,s.d.b1,!1),$async$aft)
case 3:q=e
if(q==null||t.c==null){w=1
break}p=J.q(q,"sessionState")
if(!x.f.b(p)){w=1
break}o=B.Z(p,x.N,x.z)
if(t.a.e==="memory"){s=t.go
r=s.a
n=t.id
m=n.a
l=t.fx
t.aIR(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=A.k.M(j)
else{h=j==null?null:J.k(j)
i=B.c3(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)A.d.bl(t.fy,new C.d3D(t))
if(i!=null&&t.fr.length!==0){s=B.z(t.dy,x.S)
A.d.v(s,t.dy)
r=new B.f6()
r.dY(i)
A.d.fN(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.n(new C.d3E())}case 1:return B.h(u,v)}})
return B.i($async$aft,v)},
a90(){var w=0,v=B.j(x.H),u=this
var $async$a90=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.Z0(!0),$async$a90)
case 2:return B.h(null,v)}})
return B.i($async$a90,v)},
Z0(d){return this.caw(d)},
cav(){return this.Z0(!1)},
caw(b3){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$Z0=B.e(function(b4,b5){if(b4===1)return B.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghr()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
if(q.length===0){w=1
break}p=A.a.i(s.c.a.toLowerCase())
w=3
return B.b(C.J9(q,s.d.b1,b3),$async$Z0)
case 3:o=b5
if(o==null)o=C.ti(t.a.d.b1,q)
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
j=s.b(l)?B.Z(l,r,k):B.R(r,k)
i=j.h(0,"player1Email")
if(i==null)i=j.h(0,"playerXEmail")
h=A.a.i(J.k(i==null?n:i).toLowerCase())
i=j.h(0,"player2Email")
if(i==null)i=j.h(0,"playerOEmail")
g=A.a.i(J.k(i==null?m:i).toLowerCase())
i=h.length!==0
if(i)j.m(0,"player1Email",h)
f=g.length!==0
if(f)j.m(0,"player2Email",g)
e=j.h(0,"inGame")
d=s.b(e)?B.Z(e,r,k):B.R(r,k)
a0=j.h(0,"readyAt")
a1=s.b(a0)?B.Z(a0,r,k):B.R(r,k)
a2=new B.N(Date.now(),0,!1).a4()
if(b3){d.m(0,p,!0)
a1.m(0,p,a2.aa())}if(i&&!d.am(0,h))d.m(0,h,!1)
if(f&&!d.am(0,g))d.m(0,g,!1)
s=!1
if(i)if(J.y(d.h(0,h),!0)){s=a1.h(0,h)
s=J.k(s==null?"":s).length===0}if(s)a1.m(0,h,a2.aa())
s=!1
if(f)if(J.y(d.h(0,g),!0)){s=a1.h(0,g)
s=J.k(s==null?"":s).length===0}if(s)a1.m(0,g,a2.aa())
j.m(0,"inGame",d)
j.m(0,"readyAt",a1)
b2.a=null
s=j.h(0,"startAt")
a3=J.k(s==null?"":s)
if(a3.length!==0){s=B.bg(a3)
a4=s==null?null:s.bO()
b2.a=a4
s=a4}else s=null
a5=i&&f&&J.y(d.h(0,h),!0)&&J.y(d.h(0,g),!0)
if(a5&&s==null){if(i){r=a1.h(0,h)
r=B.bg(J.k(r==null?"":r))
a6=r==null?null:r.bO()}else a6=null
if(f){r=a1.h(0,g)
r=B.bg(J.k(r==null?"":r))
a7=r==null?null:r.bO()}else a7=null
if(a6!=null&&a7!=null){a8=(a6.c9(a7)?a6:a7).bL(5e5)
if(!new B.N(Date.now(),0,!1).cU(a8)){a4=b2.a=a8.bL(4e6)
j.m(0,"startAt",a4.a4().aa())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.m(0,"memorySeed",A.o.J(1000*Date.now(),2147483647))
j.m(0,"memoryMatched",B.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.m(0,"patternSeed",A.o.J(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.hJz(t.a.d.b1,q,j)
t.a.bm()}if(t.c==null){w=1
break}b0=t.by
if(b0==null)b0="your opponent"
if(!a5){t.n(new C.d3p(b2,t,b0))
w=1
break}if(s==null){t.n(new C.d3q(t))
w=1
break}b1=new B.N(Date.now(),0,!1)
if(b1.cU(s)){s=s.bv(b1).a
r=A.o.ak(s,1e6)
t.n(new C.d3r(b2,t,r+(A.o.J(A.o.ak(s,1000),1000)>0?1:0)))
w=1
break}if(t.ci){t.n(new C.d3s(b2,t))
b2=t.a.e
if(b2==="pattern")t.a61()
else if(b2==="memory"){t.b_A()
if(t.c!=null)t.n(new C.d3t())}}b2=t.bg
if(b2!=null)b2.a9(0)
t.bg=null
case 1:return B.h(u,v)}})
return B.i($async$Z0,v)},
aJL(d){var w,v,u,t,s=this
if(d!=null){w=new B.f6()
w.dY(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e0(v,x.S)
for(t=0;t<v;++t)u[t]=w.aG(9)
s.ry=u
s.x1=0
s.to=-1},
aJK(){return this.aJL(null)},
a61(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a61=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ghr()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.c83()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return B.b(C.J9(q,s.d.b1,!1),$async$a61)
case 5:r=t.aWB(e)
case 4:if(t.c==null){w=1
break}t.aJL(r)
t.n(new C.d2C(t))
t.Cr()
case 1:return B.h(u,v)}})
return B.i($async$a61,v)},
aWB(d){var w,v,u,t=null
if(d==null)return t
w=J.q(d,"sessionState")
if(!x.f.b(w))return t
v=J.q(w,"patternSeed")
if(typeof v=="number")return A.k.M(v)
u=v==null?t:J.k(v)
return B.c3(u==null?"":u,t)},
c83(){var w=this.a,v=w.Q
if(v==null)return null
return this.aWB(C.ti(w.d.b1,v))},
a9m(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9m=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aw(),$async$a9m)
case 3:r=e
q=t.a
p=q.e
q=A.a.i(q.c.a.toLowerCase())
s=B.eX(J.q(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.n(new C.d38(t,s))
case 1:return B.h(u,v)}})
return B.i($async$a9m,v)},
om(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n
var $async$om=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.aw(),$async$om)
case 2:p=e
o=u.a
n=o.e
o=A.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bzt().length
else s=n==="typing"?50:105
if(n==="typing")r=A.o.J(u.at+5,s)
else{q=u.at
r=t?A.o.J(q+6,s):A.o.J(q+1,s)}w=3
return B.b(p.an("Int","ngmy_game_"+n+"_"+o,r),$async$om)
case 3:u.at=r
return B.h(null,v)}})
return B.i($async$om,v)},
a_T(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a_T=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.aW==null||t.f||t.aM){w=1
break}if(t.ci){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.J9(r,s.d.b1,!1),$async$a_T)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.b1
s=s.Q
s.toString
p=C.ti(r,s)
s=p==null
if(!s){r=J.cB(p)
r.a8(p)
r.v(p,q)}r=J.a6(q)
o=r.h(q,"sessionState")
if(!x.f.b(o)){w=1
break}n=B.Z(o,x.N,x.z)
r=r.h(q,"sessionUpdatedAt")
m=B.bg(J.k(r==null?"":r))
s=s?null:J.q(p,"sessionUpdatedAt")
l=B.bg(J.k(s==null?"":s))
if(m!=null&&l!=null&&!m.c9(l)){w=1
break}s=t.aW
s.toString
r=t.a
s.b4E(r.e,n,r.c.a)
r=t.aW
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.P1
else k=r.f===!0?D.pk:D.FW
w=7
return B.b(t.z5(k),$async$a_T)
case 7:w=5
break
case 6:if(t.c!=null)t.n(new C.d3F())
case 5:case 1:return B.h(u,v)}})
return B.i($async$a_T,v)},
adp(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$adp=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghr()||q.aW==null||q.a.Q==null||q.aM){w=1
break}q.aM=!0
t=3
o=q.aW
o.toString
p=o.cBE(q.a.e)
o=q.a
n=o.d.b1
o=o.Q
o.toString
w=6
return B.b(C.aMh(n,o,p),$async$adp)
case 6:q.a.bm()
r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
q.aM=!1
w=r.pop()
break
case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adp,v)},
z5(d){return this.bOm(d)},
bOm(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$z5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.f||t.aW==null){w=1
break}s=t.aW.w
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
return B.b(t.HH(s,s),$async$z5)
case 9:w=4
break
case 6:w=10
return B.b(t.MN(s,s),$async$z5)
case 10:w=4
break
case 7:w=11
return B.b(t.MN(s,s),$async$z5)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghr()?12:13
break
case 12:w=14
return B.b(t.Gm(),$async$z5)
case 14:case 13:case 1:return B.h(u,v)}})
return B.i($async$z5,v)},
Y1(d,e){return this.c2G(d,e)},
c2G(d,e){var w=0,v=B.j(x.H),u,t=this
var $async$Y1=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=t.ghr()?3:5
break
case 3:w=6
return B.b(t.adp(),$async$Y1)
case 6:if(d===D.pj){w=1
break}w=4
break
case 5:if(d===D.pj){w=1
break}case 4:w=7
return B.b(t.z5(d),$async$Y1)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Y1,v)},
a9g(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$a9g=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.ti(s.d.b1,q)
if(p==null){w=1
break}o=A.a.i(t.a.c.a.toLowerCase())
n=J.q(p,"sessionState")
s=x.f
if(!s.b(n)){w=1
break}r=x.N
m=x.z
l=B.Z(n,r,m)
k=l.h(0,"inGame")
j=s.b(k)?B.Z(k,r,m):B.R(r,m)
j.m(0,o,!1)
l.m(0,"inGame",j)
l.W(0,"startAt")
w=3
return B.b(C.aMh(t.a.d.b1,q,l),$async$a9g)
case 3:t.a.bm()
case 1:return B.h(u,v)}})
return B.i($async$a9g,v)},
Gm(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Gm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.ti(s.d.b1,q)
if(p==null){w=1
break}o=J.q(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?B.Z(o,s,r):B.R(s,r)
n.m(0,"gameOver",!0)
C.fHP(t.a.d.b1,q,n)
C.hMO(t.a.d.b1,q)
w=3
return B.b(C.aeE(t.a.d.b1),$async$Gm)
case 3:t.a.bm()
case 1:return B.h(u,v)}})
return B.i($async$Gm,v)},
p(){var w,v=this
if(v.ghr()&&!v.f)v.a9g()
else if(!v.f)v.bUG()
C.aWq();++v.RG
w=v.as
if(w!=null)w.a9(0)
w=v.aZ
if(w!=null)w.a9(0)
w=v.cx
if(w!=null)w.a9(0)
w=v.b6
if(w!=null)w.a9(0)
w=v.bg
if(w!=null)w.a9(0)
w=v.e
w.R$=$.at()
w.O$=0
v.bnV()},
cpT(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&B.c()
v=v<=0||w.aW==null}if(v)return
if(w.ci)return
v=w.aW
v.toString
w.a.toString
if(v.a>=v.b){w.rV("Goal completed!")
return}v=++w.rx
if(v%5===0)w.n(new C.d3O())},
b_B(){var w,v,u,t,s,r=this
r.x=B.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e0(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b_A()
break
case"scramble":r.bc=0
r.b_C()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=A.o.J(r.at,50)
v=J.e0(5,x.N)
for(t=0;t<5;++t)v[t]=D.cVM[A.o.J(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bG(0,A.c_)
break
case"math":r.y2=0
r.b_z()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b_D()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e0(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
A.d.fN(v,s)
if(!r.ccP()){w=J.e0(9,w)
for(u=0;u<9;++u)w[u]=u
A.d.fN(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
A.d.a8(w)
w.push(r.d.aG(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.OH()
break
case"pattern":if(r.ghr()){r.ry=B.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aJK()
w=B.t(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Cr()}break
case"color":r.b1=0
r.b_u()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.Y=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b0H()
break
default:if(A.d.q(D.NG,w)){w=r.aW
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
aXO(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
ccP(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return A.o.J(v,2)===0},
b_D(){var w,v,u,t,s,r=this,q=A.o.J(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e0(o,x.S)
for(w=0;w<o;w=v){v=w+1
n[w]=A.k.M(Math.pow(p,v))}u=A.k.M(Math.pow(p,o))
r.w=A.o.u(u)
r.aq=A.d.aF(n,", ")
q=r.w
t=x.s
s=B.a([A.o.u(u+p),A.o.u(u-p),A.o.u(u+p*2)],t)
t=B.a([q],t)
A.d.v(t,s)
A.d.fN(t,r.d)
r.x=t},
b_z(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bzt().length-6)u.at=0
w=$.bzt()
v=w[A.o.J(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b_C(){var w=this,v=w.w=D.cBC[A.o.J(w.at+w.bc,105)]
w.ax=C.hN3(v)
w.ay=B.bT(v.length,null,!1,x.T)
w.ch=B.a(w.ax.split(""),x.s)
w.e.bG(0,A.c_)},
b0H(){var w=this,v=w.cx
if(v!=null)v.a9(0)
w.y=!1
w.z=null
w.cx=B.cW(B.dB(0,0,0,120+w.d.aG(280),0,0),new C.d3C(w))},
bOp(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.qm("Too early \u2014 paid for "+t.Y+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=A.o.ak(new B.N(v,0,!1).bv(u).a,1000)}if(w<520){t.n(new C.d36(t))
v=t.Y
if(v>=5){t.om()
t.rV("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b0H()
t.n(new C.d37())}}else t.qm("Too slow ("+w+"ms) \u2014 paid for "+t.Y+"/5.")},
cpb(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=A.d.bf(t.ay,new C.d3J())
if(u<0)return
t.n(new C.d3K(t,u,v,d))},
cpc(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.n(new C.d3L(u,d,v))},
byT(){var w,v,u=this
if(u.f)return
if(A.d.be(u.ay,new C.d2D())){u.c.F(x.q).f.P(D.eja)
return}w=A.d.fL(u.ay)
v=u.w
v===$&&B.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.n(new C.d2E(u))
if(u.ghr()&&D.m9.q(0,u.a.e))u.Zf()
if(u.bc>=5){u.om()
if(u.ghr()&&D.m9.q(0,u.a.e))u.mt(!0)
else u.rV("All 5 words unscrambled!")}else{u.b_C()
u.r="Word "+(u.bc+1)+" of 5 \u2014 place letters in order"
u.n(new C.d2F())}}else u.qm("Wrong word \u2014 paid for "+u.bc+"/5.")},
b_u(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=A.o.J(w.at+w.b1*11,4),t=v[w.d.aG(4)]
w.aA=t
w.az=v[u]
w.aK=[A.dy,A.dr,A.hw,A.qx][u]
w.w=t},
aIR(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a8(0)
w=h.id
w.a8(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=B.aZ(x.S)
for(s=J.jj(v),s=s.gaf(s),r=x.j;s.C();){q=s.gT(s)
p=A.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aW(r.b(o)?o:A.cO),n=p===g;q.C();){m=q.gT(q)
l=typeof m=="number"?A.k.M(m):B.c3(J.k(m),null)
if(l==null)continue
t.H(0,l)
if(n)w.H(0,l)}}f.v(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aW(k);w.C();){m=w.gT(w)
l=typeof m=="number"?A.k.M(m):B.c3(J.k(m),null)
if(l!=null)f.H(0,l)}}h.k2=A.k.bK(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=B.aQ(J.q(j,g))
i=f==null?null:A.k.M(f)
if(i!=null)h.fx=i}},
b_A(){var w,v,u,t,s,r,q,p=this
p.fx=p.k2=0
p.go.a8(0)
p.id.a8(0)
p.fy=B.a([],x.t)
p.k1=!1
w=B.z(p.dy,x.S)
A.d.v(w,p.dy)
p.fr=w
if(p.ghr()&&p.a.Q!=null){w=p.a
v=w.d.b1
w=w.Q
w.toString
u=C.ti(v,w)
t=u==null?null:J.q(u,"sessionState")
w=x.N
v=x.z
s=x.f.b(t)?B.Z(t,w,v):B.R(w,v)
r=s.h(0,"memorySeed")
if(typeof r=="number")q=A.k.M(r)
else{w=r==null?null:J.k(r)
q=B.c3(w==null?"":w,null)}w=p.fr
if(q!=null){v=new B.f6()
v.dY(q)
A.d.fN(w,v)}else A.d.fN(w,p.d)
p.aIR(s)}else A.d.fN(p.fr,p.d)},
c9S(d){var w,v,u,t=this
if(t.ci)return
if(t.f||t.k1||t.go.q(0,d)||A.d.q(t.fy,d))return
t.n(new C.d3i(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.n(new C.d3j(t,v,u))
if(t.ghr()&&D.m9.q(0,t.a.e))t.Zf()
if(t.go.a>=t.fr.length){t.om()
if(t.ghr()&&D.m9.q(0,t.a.e))t.mt(!0)
else t.auk()}return}t.k1=!0
B.bK(D.bcS,new C.d3k(t),x.c)},
aZY(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&B.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.n(new C.d3u(u))
if(u.y1>=5){u.om()
u.rV("All 5 questions correct!")}else{u.b_D()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.n(new C.d3v())}}else u.qm(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.n(new C.d3w(u))
if(u.y2>=6){u.om()
u.rV("All 6 math questions correct!")}else{u.b_z()
u.r="Question "+(u.y2+1)+" of 6"
u.n(new C.d3x())}}else{u.TM(u.y2+1)
u.qm(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.n(new C.d3y(u))
if(u.b1>=5){u.om()
u.rV("All 5 color rounds correct!")}else{u.b_u()
u.r="Round "+(u.b1+1)+" of 5 \u2014 tap the COLOR of the text"
u.n(new C.d3z())}}else u.qm("Wrong color \u2014 paid for "+u.b1+"/5.")
return}if(v){u.om()
u.auk()}else u.c.F(x.q).f.P(D.ejU)},
cpa(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=A.d.cP(q.k4,0)
v=A.o.ak(d,3)
u=A.o.J(d,3)
t=A.o.ak(w,3)
s=A.o.J(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.n(new C.d3I(q,d,w))
if(A.d.fL(q.k4)==="123456780"){q.om()
q.auk()}}},
OH(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$OH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.n(new C.d3l(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.d3m(t,q).$0()
t.c.e2()
w=6
return B.b(B.bK(A.kq,null,r),$async$OH)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.d3n(t).$0()
t.c.e2()
w=7
return B.b(B.bK(A.jc,null,r),$async$OH)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.n(new C.d3o(t))
case 1:return B.h(u,v)}})
return B.i($async$OH,v)},
cpd(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.qm("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.n(new C.d3M(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.om()
u.rV("Perfect Simon run!")
return}u.n(new C.d3N(u))
u.OH()}},
Cr(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Cr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.n(new C.d2G(t))
s=x.H
w=3
return B.b(B.bK(A.jb,null,s),$async$Cr)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.d2H(t,o).$0()
t.c.e2()
w=7
return B.b(B.bK(A.UF,null,s),$async$Cr)
case 7:if(t.c==null){w=1
break}new C.d2I(t).$0()
t.c.e2()
w=8
return B.b(B.bK(A.ia,null,s),$async$Cr)
case 8:case 5:r.length===q||(0,B.J)(r),++p
w=4
break
case 6:if(t.c!=null)t.n(new C.d2J(t))
case 1:return B.h(u,v)}})
return B.i($async$Cr,v)},
TM(d){return this.btO(d)},
btO(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$TM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return B.b(B.aw(),$async$TM)
case 3:s=f
r=t.a
q=r.e
r=A.a.i(r.c.a.toLowerCase())
p=$.bzt().length
o=A.o.J(t.at+d,p)
w=4
return B.b(s.an("Int","ngmy_game_"+q+"_"+r,o),$async$TM)
case 4:t.at=o
case 1:return B.h(u,v)}})
return B.i($async$TM,v)},
cp8(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.qm("Wrong tile \u2014 paid for "+v.auh()+"/"+C.fFD()+" moves.")
return}v.n(new C.d3G(v,w))
if(v.ghr()&&D.m9.q(0,v.a.e))v.Zf()
if(v.x1>=w)if(v.x2>=7){v.om()
if(v.ghr()&&D.m9.q(0,v.a.e))v.mt(!0)
else v.rV("All 7 pattern rounds correct!")}else{v.n(new C.d3H(v))
v.Cr()}},
HH(d,e){return this.c8j(d,e)},
rV(d){return this.HH(null,d)},
auk(){return this.HH(null,null)},
c8j(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$HH=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a9(0)
s=t.aZ
if(s!=null)s.a9(0)
r=t.a.x*1.46
t.n(new C.d3g(t,r))
q=A.o.u(1000*Date.now())
s=t.a
p=new B.cQ(q,s.c.a,r,A.fA,A.eX,"Game payout: "+s.f,null,null,A.cc,new B.N(Date.now(),0,!1))
B.aeB(p,!0)
t.a.he(p)
t.a.bm()
o=e==null?"+$"+A.k.ab(r,2)+" added to your balance!":e
s=t.a
C.v_(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.Iy(d,o,"YOU WIN!",!0),$async$HH)
case 3:w=4
return B.b(C.aet(t.a.f,o),$async$HH)
case 4:case 1:return B.h(u,v)}})
return B.i($async$HH,v)},
DL(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$DL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghr()&&D.m9.q(0,t.a.e)?3:4
break
case 3:w=5
return B.b(t.cjM(),$async$DL)
case 5:w=1
break
case 4:s=t.z3()
r=t.MO()
w=r<=0||s<=0?6:7
break
case 6:w=8
return B.b(t.a85("Time's up \u2014 no progress to pay."),$async$DL)
case 8:w=1
break
case 7:q=A.k.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return B.b(t.rV("Complete! Max payout earned."),$async$DL)
case 12:w=10
break
case 11:w=13
return B.b(t.Dc(q,s,r),$async$DL)
case 13:case 10:case 1:return B.h(u,v)}})
return B.i($async$DL,v)},
OO(d){return this.ccw(d)},
Zf(){return this.OO(!1)},
ccw(b1){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$OO=B.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghr()&&D.m9.q(0,r.a.e))||r.a.Q==null){w=1
break}if(!b1){a1=new B.N(Date.now(),0,!1)
a2=r.bQ
if(a2!=null&&a1.bv(a2).a<3e6){w=1
break}r.bQ=a1}a2=r.a
a3=a2.Q
a3.toString
q=A.a.i(a3)
if(J.aa(q)===0){w=1
break}t=4
p=A.a.i(a2.c.a.toLowerCase())
a4=C.ti(a2.d.b1,q)
w=a4==null?7:9
break
case 7:w=10
return B.b(C.J9(q,r.a.d.b1,!1),$async$OO)
case 10:w=8
break
case 9:b3=a4
case 8:o=b3
if(o==null){w=1
break}n=J.q(o,"sessionState")
a2=x.f
a3=x.N
a5=x.z
m=a2.b(n)?B.Z(n,a3,a5):B.R(a3,a5)
l=J.q(m,"scores")
k=a2.b(l)?B.Z(l,a3,a5):B.R(a3,a5)
J.aE(k,p,r.z3())
J.aE(m,"scores",k)
if(r.a.e==="memory"){j=J.q(m,"memoryMatchedBy")
i=a2.b(j)?B.Z(j,a3,a5):B.R(a3,a5)
a6=r.id
a6=B.z(a6,B.a2(a6).k("ck.E"))
A.d.fv(a6)
J.aE(i,p,a6)
J.aE(m,"memoryMatchedBy",i)
h=B.aZ(x.S)
for(a6=i,a6=new B.dv(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aW(g);a8.C();){f=a8.gT(a8)
e=typeof f=="number"?A.k.M(f):B.c3(J.k(f),null)
if(e!=null)J.ch(h,e)}}a6=h
a6=B.z(a6,B.a2(a6).k("ck.E"))
A.d.fv(a6)
J.aE(m,"memoryMatched",a6)}d=J.q(m,"wagers")
a0=a2.b(d)?B.Z(d,a3,a5):B.R(a3,a5)
J.aE(a0,p,r.a.x)
J.aE(m,"wagers",a0)
w=11
return B.b(C.aMh(r.a.d.b1,q,m),$async$OO)
case 11:r.a.bm()
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
return B.i($async$OO,v)},
mt(d){return this.cjN(d)},
cjM(){return this.mt(!1)},
cjN(b5){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$mt=B.e(function(b6,b7){if(b6===1)return B.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghr()||t.a.Q==null?3:4
break
case 3:w=5
return B.b(t.DL(),$async$mt)
case 5:w=1
break
case 4:w=6
return B.b(t.OO(!0),$async$mt)
case 6:s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=A.a.i(s.c.a.toLowerCase())
w=7
return B.b(C.J9(q,s.d.b1,!0),$async$mt)
case 7:o=b7
n=t.MO()
w=o==null?8:9
break
case 8:m=A.k.D(t.z3()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return B.b(t.a85("Time's up \u2014 no progress to pay."),$async$mt)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return B.b(t.rV("Complete! Max payout earned."),$async$mt)
case 17:w=15
break
case 16:w=18
return B.b(t.Dc(m,t.z3(),n),$async$mt)
case 18:case 15:case 11:w=19
return B.b(t.Gm(),$async$mt)
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
g=s.b(i)?B.Z(i,r,h):B.R(r,h)
f=g.h(0,"scores")
e=s.b(f)?B.Z(f,r,h):B.R(r,h)
d=B.aQ(e.h(0,p))
a0=d==null?null:A.k.M(d)
if(a0==null)a0=t.z3()
d=B.aQ(e.h(0,j))
a1=d==null?null:A.k.M(d)
if(a1==null)a1=0
a2=A.k.D(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return B.b(t.a85("Time's up \u2014 no progress to pay."),$async$mt)
case 22:w=23
return B.b(t.Gm(),$async$mt)
case 23:w=1
break
case 21:a3=g.h(0,"wagers")
r=B.aQ((s.b(a3)?B.Z(a3,r,h):B.R(r,h)).h(0,j))
a4=r==null?null:r
if(a4==null)a4=0
if(a0===a1)a5=""
else a5=a0>a1?p:j
a6=a0>=n?1:a2
s=a5===p
a7=s&&a4>0?a4*a6:0
t.f=!0;++t.RG
r=t.as
if(r!=null)r.a9(0)
r=t.aZ
if(r!=null)r.a9(0)
a8=t.a.x*1.46*a2
a9=a8+a7
t.n(new C.d3A(t,a8,a2))
r=t.a
r.toString
h=A.o.u(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+A.k.ab(a7,2):d+" ("+b1+"/"+b2+")"
r.he(new B.cQ(h,b0,a9,A.fA,A.eX,d,null,null,A.cc,new B.N(Date.now(),0,!1)))
t.a.bm()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+A.k.ab(a9,2)+" (includes opponent bonus $"+A.k.ab(a7,2)+")":"+$"+A.k.ab(a8,2)+" (your progress payout)"
s=t.a
C.v_(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return B.b(t.Iy(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$mt)
case 24:w=25
return B.b(t.Gm(),$async$mt)
case 25:case 1:return B.h(u,v)}})
return B.i($async$mt,v)},
Dc(d,e,f){return this.c8h(d,e,f)},
c8h(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Dc=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a9(0)
s=t.aZ
if(s!=null)s.a9(0)
r=t.a.x*1.46*d
t.n(new C.d3e(t,r,d))
s=A.o.u(1000*Date.now())
q=t.a
p=new B.cQ(s,q.c.a,r,A.fA,A.eX,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,A.cc,new B.N(Date.now(),0,!1))
B.aeB(p,!0)
t.a.he(p)
t.a.bm()
if(t.c==null){w=1
break}o=A.k.U(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&B.c()
m=q+C.aeP(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?A.d.cI(t.cy,0,new C.d3f()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+A.k.ab(r,2)+" ("+n+"% \u2014 "+B.t(k)+" mistakes/missed)":"+$"+A.k.ab(r,2)+" ("+n+"% of full prize)"
q=t.a
C.v_(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return B.b(t.Iy(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$Dc)
case 3:w=4
return B.b(C.aet(t.a.f,j),$async$Dc)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Dc,v)},
bUG(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.z3()
v=o.MO()}catch(u){return}if(v<=0||w<=0)return
t=A.k.D(w/v,0,1)
s=B.P4(A.k.ab(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=A.o.u(1000*Date.now())
p=o.a
r.he(new B.cQ(q,p.c.a,s,A.fA,A.eX,"Game partial: "+p.f+" ("+B.t(w)+"/"+B.t(v)+", left early)",n,n,A.cc,new B.N(Date.now(),0,!1)))
o.a.bm()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.v_(s,n,"Left early \xb7 +$"+A.k.ab(s,2)+" ("+B.t(w)+"/"+B.t(v)+")",q,r,p,n,!0)},
MN(d,e){return this.bJ0(d,e)},
a85(d){return this.MN(null,d)},
bJ0(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$MN=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a9(0)
s=t.aZ
if(s!=null)s.a9(0)
s=t.a
r=s.c.a
q=s.f
s=s.x
C.v_(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return B.b(t.Iy(d,e,"YOU LOSE",!1),$async$MN)
case 3:case 1:return B.h(u,v)}})
return B.i($async$MN,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&B.c()
w=A.o.ak(m,60)
m=A.a.aT(A.o.u(A.o.J(m,60)),2,"0")
v=B.aF(n,n,n,n,A.ahW,n,n,n,new C.d3P(d),n,n,n,n,n,n)
if(o.ghr()){u=o.by
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=B.C(B.d(u?t.f+" vs "+B.t(o.by):t.f,n,2,A.Z,n,n,n,A.fL,n,n,n),1)
r=B.m(10)
q=x.p
r=B.A(B.a([v,s,B.p(n,C.anz(new C.d3Q(o),A.qP,t.c.a),A.h,n,n,new B.o(A.cL,n,n,r,n,n,A.n),n,n,n,n,A.fF,n,n,n)],q),A.m,n,A.e,A.j,0,n,n)
t=o.a
s=t.w
v=B.m(10)
s=B.p(n,B.A(B.a([B.C(B.d("Win $"+A.k.ab(t.x*1.46,2)+" \xb7 stake $"+A.k.ab(o.a.x,2)+" \u2022 Progress "+o.z3()+"/"+o.MO(),n,n,n,n,n,n,D.esd,n,n,n),1),new C.amL(o.a.c.a,new C.d3R(o),n),A.ab,D.brV,A.d4,B.d(""+w+":"+m,n,n,n,n,n,n,A.ot,n,n,n)],q),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(n,n,n,v,n,new B.a8(A.a_,A.a7,A.w,s,n,n),A.n),n,n,n,n,A.h_,n,n,n)
v=o.a.w
m=B.S(v).k("I<1,x>")
m=B.z(new B.I(v,new C.d3S(),m),m.k("ai.E"))
w=B.m(14)
v=B.G(A.be,A.r,1)
p=C.aLW(n,D.aYH,B.br(!0,new B.B(Ae.V3,B.u(B.a([r,s,A.P,new B.fh(new C.d3T(o),n),A.ar,B.C(B.p(n,o.bJ_(),A.h,n,n,new B.o(n,n,v,w,n,new B.a8(A.a_,A.a7,A.w,m,n,n),A.n),n,n,n,n,A.ch,n,n,n),1)],q),A.af,n,A.e,A.j,0,A.p),n),!0,!1,A.ah,!0,!0))
if(!o.ci)return p
m=B.W(140,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255)
w=B.W(242,A.i8.l()>>>16&255,A.i8.l()>>>8&255,A.i8.l()&255)
v=B.m(18)
u=B.G(A.be,A.r,1)
return new B.am(A.V,n,A.a9,A.q,B.a([p,B.bU(0,B.p(A.B,B.e8(B.p(n,B.u(B.a([D.efo,A.aa,B.d(o.cT,n,n,n,n,n,n,D.etB,A.L,n,n),A.ar,B.d(o.cd,n,n,n,n,n,n,D.erY,A.L,n,n)],q),A.m,n,A.e,A.R,0,A.p),A.h,n,n,new B.o(w,n,u,v,n,n,A.n),n,n,n,A.ue,A.wq,n,n,n),!1,n),A.h,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
bVE(){var w=this.k3
return B.cj(new C.d3d(this,w,A.k.dF(this.fr.length/w)))},
bJ_(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.bVE()
if(m==="scramble"){m=o.r
m===$&&B.c()
w=x.l
return B.u(B.a([B.d(m,n,n,n,n,n,n,A.nE,n,n,n),B.d("Words "+o.bc+"/5",n,n,n,n,n,n,A.BL,n,n,n),A.aa,B.d("Tap letters below to fill each slot",n,n,n,n,n,n,B.l(n,n,B.W(166,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.T,B.cd(A.fB,B.ih(o.ay.length,new C.d2W(o),!0,w),A.by,6,6),A.aO,B.cd(A.fB,B.ih(o.ch.length,new C.d2X(o),!0,w),A.by,8,8),A.aO,new B.a3(1/0,n,B.hU(D.eRt,o.gbyS(),B.fe(n,n,A.aA,n,n,n,n,n,n,A.c,n,n,A.c9,n,n,n,n,n,n,n)),n)],x.p),A.m,n,A.e,A.j,0,A.p)}if(m==="typing"){m=o.w
m===$&&B.c()
return new C.aoV(m,o.e,new C.d2Y(o),new C.d2Z(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&B.c()
m=B.a([B.d(m,n,n,n,n,n,n,A.nE,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(B.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,A.BL,n,n,n))
m.push(A.aa)
if(o.a.e==="sequence"){w=o.aq
w===$&&B.c()
w+=", ?"}else w=o.CW
m.push(B.eY(A.B,B.d(w,n,n,n,n,n,n,A.oq,A.L,n,n),A.h,A.dp))
m.push(A.aO)
w=o.x
A.d.v(m,new B.I(w,new C.d3_(o),B.S(w).k("I<1,r>")))
return B.u(m,A.m,n,A.e,A.j,0,A.p)}if(m==="puzzle")return B.cj(new C.d30(o))
if(m==="simon"){m=o.r
m===$&&B.c()
return B.u(B.a([B.d(m,n,n,n,n,n,n,A.nE,n,n,n),B.d("Progress "+o.p3+"/21",n,n,n,n,n,n,A.BL,n,n,n),A.P,B.C(B.lX(1,B.ih(4,new C.d31(o),!0,x.l),2,10,10,n,A.dJ,!1),1)],x.p),A.m,n,A.e,A.j,0,A.p)}if(m==="pattern")return B.cj(new C.d32(o))
if(m==="color"){u=B.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[A.dy,A.dr,A.hw,A.qx]
m=o.r
m===$&&B.c()
m=B.d(m,n,n,n,n,n,n,A.nE,n,n,n)
w=B.d("Round "+o.b1+"/5",n,n,n,n,n,n,A.BL,n,n,n)
v=o.az
v===$&&B.c()
s=o.aK
s===$&&B.c()
s=B.a([m,w,A.aa,B.d(v,n,n,n,n,n,n,B.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.aO],x.p)
r=J.e0(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=B.fe(n,n,B.W(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,A.c,n,n,A.eV,n,n,n,n,n,n,n)
r[q]=new B.B(A.cK,new B.a3(1/0,n,B.hU(new B.w(u[q],n,A.cq,n,n,n,n,n,n,n,n,n),new C.d33(o,u,q),m),n),n)}A.d.v(s,r)
return B.u(s,A.m,n,A.e,A.j,0,A.p)}if(m==="reflex"){m=o.y
p=m?A.bs:A.cl
w=o.r
w===$&&B.c()
w=B.d(w,n,n,n,n,n,n,A.a42,A.L,n,n)
v=B.d("Fast taps "+o.Y+"/5",n,n,n,n,n,n,D.epv,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=B.d(m,n,n,n,n,n,n,B.l(n,n,A.c,n,n,n,n,n,n,n,n,Math.min(B.aG(s,A.bN,x.w).w.a.a*0.18,72),n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return B.qV(B.aJ(A.c5,B.dg(n,B.u(B.a([w,A.P,v,A.b6,s,A.b6,new B.B(A.Dq,B.d(m,n,n,n,n,n,n,B.l(n,n,B.W(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,A.a1,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),A.m,n,A.b5,A.j,0,A.p),p,n,A.b9,n,T.zs,n,n,n,n,n,n,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gbOo(),n,n,n,n,n,n,!1,A.ae))}if(A.d.q(D.NG,m)&&o.aW!=null){m=o.a.e
w=o.aW
w.toString
return C.hCL(m,new C.d34(o),new C.d35(o),o.d,w)}m=o.r
m===$&&B.c()
return B.as(B.d(m,n,n,n,n,n,n,A.di,n,n,n),n,n,n)}}
C.aje.prototype={
S(){return new C.bcx()},
cHd(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bcx.prototype={
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.a,a0=d.c,a1=d.d
d=B.aG(a2,A.e0,x.w).w
w=x.p
v=B.a([B.bIZ(!1,f.a.r,"INVESTMENT PLANS",e),A.d1],w)
u=a0.x
if(u!=null){t=u.d.bO()
s=A.a.aT(A.o.u(B.bB(t)),2,"0")
r=A.a.aU(A.o.u(B.bv(t)+1),2)
q=B.m(18)
p=B.G(D.aas,A.r,2.2)
o=x.V
n=B.a([new B.a9(0,A.G,B.W(89,A.pW.l()>>>16&255,A.pW.l()>>>8&255,A.pW.l()&255),A.eI,20),new B.a9(0,A.G,B.W(102,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.dn,14)],o)
m=B.an(e,B.p(e,e,A.h,e,e,new B.o(B.W(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),e,e,e,e,e,A.a6),e,120,e,e,e,e,e,120),e,e,e,-20,-24,e)
l=B.m(10)
k=B.G(D.aas,A.r,3.4)
o=B.a([new B.a9(0,A.G,B.W(166,A.pW.l()>>>16&255,A.pW.l()>>>8&255,A.pW.l()&255),A.dG,10),new B.a9(0,A.G,B.W(89,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.cD,6)],o)
o=B.A(B.a([B.p(e,e,A.h,e,e,new B.o(e,e,k,l,o,new B.a8(A.ax,A.aE,A.w,D.cLl,D.coE,e),A.n),e,42,e,e,e,e,e,56),A.b6,f.b1u(a2,!0)],w),A.m,e,A.e,A.j,0,e,e)
l=B.C4(u.a,1,A.Z,D.ewx)
k=u.b
j=u.c
i=B.C4("Making $"+B.dx(k*j)+" Daily",1,A.Z,D.ewK)
h=B.C4(f.aXA(k),1,A.Z,D.eqc)
r=B.A(B.a([B.C(B.u(B.a([D.eL9,B.C4(a0.c,1,A.Z,D.aJV)],w),A.F,e,A.e,A.j,0,A.p),1),B.u(B.a([D.eKW,B.d(s+"/"+r,e,e,e,e,e,e,D.aJV,e,e,e)],w),A.dE,e,A.e,A.j,0,A.p)],w),A.m,e,A.e,A.j,0,e,e)
s=B.p(e,e,A.h,B.W(89,D.vW.l()>>>16&255,D.vW.l()>>>8&255,D.vW.l()&255),e,e,e,1,e,e,e,e,e,e)
j=B.A(B.a([f.anG("INVESTED","$"+B.dx(k),!0),f.anG("DAILY ROI",A.k.ab(j*100,2)+"%",!0),f.anG("DAYS LEFT",""+(261-u.f)+" d",!0)],w),A.m,e,A.hu,A.j,0,e,e)
k=B.dx(u.e)
u=u.f
g=261-u>0?"ACTIVE":"ENDED"
A.d.v(v,B.a([D.eR4,A.tz,B.p(e,new B.am(A.V,e,A.a9,A.q,B.a([m,B.u(B.a([o,A.P,D.eJJ,A.bw,l,A.au,i,A.au,h,A.P,r,A.ar,s,A.ar,j,A.au,B.C4("Earned $"+k+" \u2022 Clocked "+u+"/261 \u2022 "+g,1,A.Z,D.evX)],w),A.F,e,A.e,A.R,0,A.p)],w),e),A.h,e,e,new B.o(e,e,p,q,n,D.bGm,A.n),e,e,e,e,A.bC,e,e,1/0),A.a3n],w))}v.push(D.eCm)
v.push(A.tz)
A.d.v(v,new B.I(a1,new C.d7b(f,a2),B.S(a1).k("I<1,r>")))
return B.cf(e,A.K,B.br(!1,B.cg(B.u(v,A.F,e,A.e,A.j,0,A.p),A.q,e,A.z,e,new B.L(20,10,20,124+d.r.d),e,e,A.ag),!0,!1,A.ah,!0,!0),e,!1,!1,e,e)},
b1u(d,e){var w=null,v=B.W(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.m(8),t=B.G(A.j9,A.r,1)
return B.p(w,B.A(B.a([B.V(A.afV,A.c,w,w,w,16),A.d4,B.d("TAP",w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,10,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.R,0,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ew,w,w,w)},
aXA(d){var w=A.a.aT(A.o.u(A.k.U(d*100)),4,"0")
return"****  ****  ****  "+A.a.aU(w,w.length-4)},
anG(d,e,f){var w=null,v=B.W(217,D.vW.l()>>>16&255,D.vW.l()>>>8&255,D.vW.l()&255)
v=B.d(d,w,w,w,w,w,w,B.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.u(B.a([v,A.bw,B.C4(e,w,w,B.l(w,w,E.zb,w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),A.F,w,A.e,A.j,0,A.p)},
cak(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gcLr(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
w=B.G(A.aN,A.r,2)
p=x.V
o=B.a([new B.a9(0,A.G,B.W(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.Pn,16),new B.a9(0,A.G,B.W(115,A.al.l()>>>16&255,A.al.l()>>>8&255,A.al.l()&255),A.dn,14),new B.a9(0,A.G,B.W(51,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.cD,8)],p)
n=B.an(d,B.p(d,d,A.h,d,d,new B.o(d,d,d,d,d,new B.bS(A.B,0.5,A.w,d,0,B.a([B.W(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),B.W(0,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)],x.O),d,d),A.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=B.m(5)
l=B.G(A.c,A.r,2.2)
k=B.aX(4286436348)
k=B.W(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=B.W(A.k.U(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
i=B.aX(4279150057)
h=x.p
p=B.A(B.a([new B.a3(44,44,new B.am(A.V,d,A.a9,A.h,B.a([B.an(d,B.et(A.B,0.7853981633974483,B.p(d,d,A.h,d,d,new B.o(d,d,l,m,B.a([new B.a9(0.5,A.G,k,A.J,14),new B.a9(0,A.G,j,A.J,6),new B.a9(0,A.G,B.W(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new B.v(0,2),4)],p),D.bF8,A.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.dR3],h),d),d),A.b6,e.b1u(b2,!0)],h),A.m,d,A.e,A.j,0,d,d)
a6=B.C4(a6,1,A.Z,D.en9)
i=B.C4(e.aXA(a3),1,A.Z,D.eAT)
j=B.A(B.a([e.aX1(A.k.ab(2.86,2)+"%"),A.ez,e.aX1("261d")],h),A.m,d,A.e,A.j,0,d,d)
k=B.C(B.u(B.a([D.eDu,B.C4("$"+B.dx(a3),1,A.Z,D.ezK)],h),A.F,d,A.e,A.j,0,A.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=B.A(B.a([k,B.d(m,d,d,d,d,d,d,D.enU,d,d,d)],h),A.dE,d,A.e,A.j,0,d,d)
k=B.p(d,d,A.h,B.W(89,A.bA.l()>>>16&255,A.bA.l()>>>8&255,A.bA.l()&255),d,d,d,1,d,d,d,d,d,d)
l=B.A(B.a([B.C(e.aux("Daily","$"+B.dx(a4)),1),A.ez,B.C(e.aux("Total","$"+B.dx(a4*261)),1),A.ez,B.C(e.aux("Days","261"),1)],h),A.m,d,A.e,A.j,0,d,d)
g=q?d:new C.d7a(e,b3,a3,t)
f=A.k.U(127.5)
f=B.fe(d,d,A.bj,B.W(f,A.al.l()>>>16&255,A.al.l()>>>8&255,A.al.l()&255),B.W(f,A.aJ.l()>>>16&255,A.aJ.l()>>>8&255,A.aJ.l()&255),d,3,d,d,A.aN,d,d,d,d,new B.b5(B.m(10),D.aPy),d,d,d,d,d)
return B.p(d,new B.am(A.V,d,A.a9,A.h,B.a([n,B.u(B.a([p,A.bw,D.eLP,A.bw,a6,A.dd,i,A.fW,j,A.fW,m,A.fW,k,A.fW,l,A.P,new B.a3(1/0,40,B.hU(B.eY(A.B,B.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.eoh,d,d,d),A.h,A.e8),g,f),d)],h),A.F,d,A.e,A.R,0,A.p)],h),d),A.h,d,d,new B.o(d,d,w,a0,o,D.bGU,A.n),d,d,d,A.kU,D.beC,d,d,1/0)},
aX1(d){var w=null,v=B.W(115,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.m(5),t=B.G(A.ct,A.r,1)
return B.p(w,B.d(d,w,w,w,w,w,w,D.enx,w,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.DG,w,w,w)},
aux(d,e){var w=null,v=B.W(97,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.m(7),t=B.G(A.aJ,A.r,1)
return B.p(w,B.u(B.a([B.d(d,w,w,w,w,w,w,D.ewi,w,w,w),A.y8,B.eY(A.a_,B.d(e,w,w,w,w,w,w,D.eyP,w,w,w),A.h,A.dp)],x.p),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.lU,w,w,w)}}
C.afA.prototype={
S(){var w=null,v=B.a([],x._),u=$.at()
return new C.auk(v,new B.ao(A.aq,u),new B.ao(A.aq,u),B.m6(0,w,w),new B.hQ(),D.OR,C.aeq(),B.a([],x.fw),B.aZ(x.N),B.m6(0,w,w))}}
C.auk.prototype={
Z(){var w,v,u,t,s,r=this
r.a0()
w=r.a
w.toString
r.d=0
v=B.yt(0,1)
r.e!==$&&B.aO()
r.e=v
r.ay=w.f.az
w=r.k3=B.bi(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t].a
if(s.length!==0)u.H(0,s)}r.a9r()
r.N8()
r.ani()
r.cmD()
r.cmS()
$.aS.x1$.push(new C.cwd(r))
r.a.toString},
N8(){var w=0,v=B.j(x.H),u,t=this,s
var $async$N8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ana(),$async$N8)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cvy(t,s))
case 1:return B.h(u,v)}})
return B.i($async$N8,v)},
gaw7(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gN4())return!0
return!1},
gN4(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaQB(){var w,v=this.CW
if(v==null)return A.bt
w=v.bv(new B.N(Date.now(),0,!1))
return w.a<0?A.bt:w},
buA(){var w=this
if(w.a.c.w)return
if(w.gN4()){if(!w.cx)w.n(new C.cvo(w))}else if(w.cx)w.n(new C.cvp(w))},
cgc(){this.n(new C.cvI(this))},
t1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$t1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.n(new C.cvF(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.n(new C.cvG(t))
w=1
break}w=3
return B.b(C.c3o(o.a,s),$async$t1)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return B.b(C.c3p(t.a.c.a,s),$async$t1)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.n(new C.cvH(t,r,q))
t.coA()
t.buA()
if(r===3)t.WC(r)}case 1:return B.h(u,v)}})
return B.i($async$t1,v)},
WC(d){return this.bVv(d)},
bVv(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$WC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return B.b(C.bz7(q,r,new C.cvA(t),d,s.c.a),$async$WC)
case 3:case 1:return B.h(u,v)}})
return B.i($async$WC,v)},
wq(d){return this.bw0(d)},
ani(){return this.wq(!1)},
bw0(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$wq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return B.b(B.a5F(k,C.h2d(l.d)),$async$wq)
case 3:j=m
w=4
return B.b(C.c3O(k),$async$wq)
case 4:s=j.a=f
w=5
return B.b(B.anX(k),$async$wq)
case 5:r=f
w=!s.a&&J.cs(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.Tg(!0,l,q,p)
m.a=s
w=8
return B.b(C.anc(k,s),$async$wq)
case 8:case 7:w=9
return B.b(C.Sh(k),$async$wq)
case 9:o=f
w=10
return B.b(C.a52(k),$async$wq)
case 10:n=f
if(t.c==null){w=1
break}t.n(new C.cvq(m,t,r,o,n))
case 1:return B.h(u,v)}})
return B.i($async$wq,v)},
Ol(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ol=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.N8(),$async$Ol)
case 3:s=t.c
if(s==null){w=1
break}r=B.eI(new C.cvD(t),!1,null,x.H)
w=4
return B.b(B.a7(s,!1).cr(r),$async$Ol)
case 4:w=5
return B.b(t.N8(),$async$Ol)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ol,v)},
cqF(){this.n(new C.cw0(this))},
cmS(){var w=this,v=w.go
if(v!=null)v.a9(0)
if(w.a.c.w)return
w.go=B.dE(A.rC,new C.cvV(w))},
coA(){var w=this,v=w.id
if(v!=null)v.a9(0)
w.id=null
if(!w.gN4()||w.CW==null)return
w.id=B.dE(A.fZ,new C.cvY(w))},
cmD(){var w=this,v=w.fy
if(v!=null)v.a9(0)
w.fy=B.dE(A.iV,new C.cvU(w))
w.DR()},
DR(){return this.coz()},
coz(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$DR=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.az
t=4
w=7
return B.b(B.aw(),$async$DR)
case 7:q=e
p=B.aR(J.q(q.a,"app_config"))
if(p!=null&&p.length!==0){o=A.Q.aC(0,p,null)
if(x.f.b(o)){m=B.BR(B.Z(o,x.N,x.z)).az
i.a=m
r.a.f.az=m}}w=10
return B.b(B.Jl(),$async$DR)
case 10:w=e?8:9
break
case 8:w=11
return B.b(B.aLV(),$async$DR)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.az=l
w=14
return B.b(q.an("String","app_config",A.Q.aj(k.ad(),null)),$async$DR)
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
break}if(i.a!==r.ay)r.n(new C.cvW(i,r))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$DR,v)},
b0n(){A.d.aY(this.f,new C.cvT())},
a9r(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9r=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.L7(t.a.c.a),$async$a9r)
case 3:q=e
if(t.c==null){w=1
break}s=B.a([],x._)
if(J.cs(q)){A.d.v(s,q)
A.d.aY(s,new C.cvv())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(B.D(["role","ai","text",r,"at",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z))}t.n(new C.cvw(t,s))
t.a_a(!0)
B.bK(A.jb,new C.cvx(t),x.H)
case 1:return B.h(u,v)}})
return B.i($async$a9r,v)},
acM(){var w=0,v=B.j(x.H),u=this
var $async$acM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.al1(u.a.c.a,u.f),$async$acM)
case 2:return B.h(null,v)}})
return B.i($async$acM,v)},
bo(d){this.bA(d)},
p(){var w,v=this,u=v.fy
if(u!=null)u.a9(0)
u=v.go
if(u!=null)u.a9(0)
u=v.id
if(u!=null)u.a9(0)
u=v.r
w=$.at()
u.R$=w
u.O$=0
u=v.w
u.R$=w
u.O$=0
v.ok.p()
v.x.p()
u=v.e
u===$&&B.c()
u.p()
v.a2()},
a8r(d){var w,v=this
v.n(new C.cvt(v,d))
w=v.e
w===$&&B.c()
if(w.f.length!==0)w.A2(d,A.co,A.kq)
else $.aS.x1$.push(new C.cvu(v,d))
if(d===0)v.a_a(!0)
if(d===1)v.ci5(!0)},
a_a(d){$.aS.x1$.push(new C.cvL(this,d))},
avL(){return this.a_a(!1)},
Zw(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Zw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ZT(),$async$Zw)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==A.a.i(t.a.f.r))t.n(new C.cvE(t))
case 1:return B.h(u,v)}})
return B.i($async$Zw,v)},
ms(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$ms=B.e(function(c8,c9){if(c8===1){s.push(c9)
w=t}for(;;)switch(w){case 0:c5=A.a.i(q.r.a.a)
if(J.aa(c5)===0){w=1
break}a8=q.a
a9=a8.c
w=!a9.w?3:4
break
case 3:b0=a8.f.xr
w=b0>0?5:6
break
case 5:w=9
return B.b(C.an5(a9.a,b0),$async$ms)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return B.b(q.t1(),$async$ms)
case 10:q.n(new C.cvM(q))
w=1
break
case 8:w=11
return B.b(q.t1(),$async$ms)
case 11:if(q.c!=null&&q.ch===3)q.WC(3)
case 6:case 4:q.n(new C.cvN(q,c5))
C.S4(q.a.c.a,"user",c5)
q.avL()
t=13
a8={}
w=16
return B.b(q.Zw(),$async$ms)
case 16:b1=A.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return B.b(B.ZT(),$async$ms)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.n(new C.cvO(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.bxg("",null)
q.n(new C.cvP(q,p))
C.S4(q.a.c.a,"ai",p)
q.avL()
r=[1]
w=14
break}o=B.mD(a9)
a9=q.a
n=""
m=C.h2d(a9.d)
w=C.h26(c5)?20:21
break
case 20:w=22
return B.b(C.c3N(q.a.c.a),$async$ms)
case 22:q.db=c9
w=23
return B.b(q.wq(!0),$async$ms)
case 23:case 21:w=24
return B.b(B.a5F(q.a.c.a,m),$async$ms)
case 24:l=c9
k=C.hjT(l)
a9=k
b2=Date.now()
b3=new B.N(b2,0,!1).bO()
b2=A.a.aT(A.o.u(B.bB(b3)),2,"0")
b4=A.a.aT(A.o.u(B.bL(b3)),2,"0")
b5=A.a.aT(A.o.u(B.dn(b3)),2,"0")
b6=A.a.aT(A.o.u(B.hn(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+B.bv(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return B.b(C.Sh(q.a.c.a),$async$ms)
case 25:i=c9
h=C.fNQ(i,25)
w=26
return B.b(C.a52(q.a.c.a),$async$ms)
case 26:g=c9
f=C.fPo(g)
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
return B.b(C.aer(a9,q.a.c.a,c5),$async$ms)
case 27:a0=c9
a1=""
if(C.h26(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:A.a.i(b2).length!==0)===!0){b2.toString
b8=A.a.i(b2)}else{a9=a9.c
b8=A.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=B.t(d)
b4=B.t(j)
b5=q.a.c.w?"\n"+C.hFs(m)+"\n":""
b6=J.aa(n)!==0?"\n"+B.t(n)+"\n":""
b9=J.aa(a0)!==0?"\n"+B.t(a0)+"\n":""
c0=B.t(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hee(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+B.t(c5)
w=28
return B.b(B.qh(o,a2,A.h2,null),$async$ms)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.bxg(a8.a,a3.a)
a4=c2
a5=B.h1t(a4)
c3=a5.a
a8.b=c3
if(A.d.gah(c3)){a9=B.z(C.hI5(c5),x.an)
a6=a9
J.fT(a6,C.hI6(c5))
J.fT(a6,C.hI7(c5))
J.fT(a6,B.h0W(c5))
J.fT(a6,C.hIa(c5,q.a.c.w))
a8.b=a6}c3=C.hHm(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return B.b(B.aeH(c3,a6,m,q.a.c.a),$async$ms)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.n(new C.cvQ(a8,q,a7))
C.S4(q.a.c.a,"ai",a7)
if(J.cs(a8.b)&&q.c!=null)q.Il(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.n(new C.cvR(q))
C.S4(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.n(new C.cvS(q))
q.avL()
q.acM()
if(!q.a.c.w)q.t1()
w=r.pop()
break
case 15:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ms,v)},
c9k(d){var w=B.R(x.N,x.z)
w.m(0,"type",d.a)
w.v(0,d.b)
return w},
c9l(d){var w,v,u,t,s,r,q,p=J.q(d,"phoneActions")
if(!x.j.b(p))return A.hX
w=B.a([],x.Z)
for(v=J.aW(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gT(v)
if(u.b(r)){q=B.c6T(B.Z(r,t,s))
if(q!=null)w.push(q)}}return w},
Il(d){return this.cgG(d)},
cgG(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Il=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=J.aW(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gT(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return B.b(C.aeC(p,o,new C.cvJ(t,p)),$async$Il)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return B.b(B.F7(p,null,o,!1,!0,t.a.c.a),$async$Il)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.F(r).f
p.P(new B.aY(new B.w(m,null,null,null,null,null,null,null,null,null,null,null),A.cl,null,null,null,null,null,null,null,null,null,null,null,A.o1,!1,null,null,null,A.q,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return B.b(B.F7(p,l.f,o,k,n,j),$async$Il)
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
return B.b(C.aUL(p,B.a([new C.qK("out_"+1000*o,new B.N(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$Il)
case 14:t.ani()
case 13:p=t.c.F(r).f
p.P(new B.aY(new B.w(m,null,null,null,null,null,null,null,null,null,null,null),A.dl,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null))
w=3
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Il,v)},
Q1(d){return this.cp5(d)},
cp5(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Q1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return B.b(C.aeC(d,n,new C.cw_(t)),$async$Q1)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return B.b(B.F7(d,null,n,!1,!0,t.a.c.a),$async$Q1)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.F(x.q).f.P(B.b0(null,null,null,A.cl,null,A.q,null,B.d(s,null,null,null,null,null,null,null,null,null,null),null,A.o1,null,null,null,null,null,null,null,null,null,null))
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
return B.b(B.F7(d,q.f,r,p,n,o),$async$Q1)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.F(x.q).f.P(B.b0(null,null,null,A.dl,null,A.q,null,B.d(s,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Q1,v)},
ci5(d){$.aS.x1$.push(new C.cvK(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.K(d).ax.a===A.H,j=k?A.dc:A.zi,i=m.d
i===$&&B.c()
w=x.O
w=k?B.a([A.aaT,D.b2C],w):B.a([A.aK,A.rc],w)
v=B.m(22)
u=B.a([new B.a9(0,A.G,B.W(71,A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255),A.cv,16)],x.V)
t=m.a.c.w?m.gc56():l
s=B.W(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
r=B.G(A.c3,A.r,1.5)
t=B.aJ(l,B.p(l,C.fE4(m.a.f.Q,48),A.h,l,l,new B.o(s,l,r,l,l,l,A.a6),l,48,l,l,l,l,l,48),A.z,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,A.ae)
r=B.d("NGMY Helper",l,1,A.Z,l,l,l,A.dP,l,l,l)
s=B.p(l,l,A.h,l,l,D.aRC,l,8,l,l,l,l,l,8)
if(m.gaw7()&&m.d===0)q=m.gN4()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=B.p(l,B.A(B.a([t,A.ba,B.C(B.u(B.a([r,A.bw,B.A(B.a([s,A.bq,B.C(B.d(q,l,1,A.Z,l,l,l,B.l(l,l,B.W(A.k.U(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,A.cp,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),A.m,l,A.e,A.j,0,l,l)],p),A.F,l,A.e,A.j,0,A.p),1),B.aF(l,l,l,l,A.mI,l,l,l,new C.cw5(d),l,l,l,l,l,l)],p),A.m,l,A.e,A.j,0,l,l),A.h,l,l,new B.o(l,l,l,v,u,new B.a8(A.ax,A.aE,A.w,w,l,l),A.n),l,l,l,F.acw,D.bfh,l,l,l)
v=k?D.rd:A.c
u=B.m(14)
t=B.G(k?A.bG:A.ep,A.r,1)
u=B.p(l,B.A(B.a([m.byD(),m.coP(1,A.lr,"Music")],p),A.m,l,A.e,A.j,0,l,l),A.h,l,l,new B.o(v,l,t,u,l,l,A.n),l,l,l,l,A.ef,l,l,l)
t=m.e
t===$&&B.c()
if(m.gaw7()){v=B.a([],p)
if(m.gN4()){s=B.W(38,A.dl.l()>>>16&255,A.dl.l()>>>8&255,A.dl.l()&255)
r=B.m(12)
q=B.G(B.W(115,A.dl.l()>>>16&255,A.dl.l()>>>8&255,A.dl.l()&255),A.r,1)
v.push(new B.B(A.JJ,B.p(l,B.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hie(m.gaQB())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.eyi,A.L,l,l),A.h,l,l,new B.o(s,l,q,r,l,l,A.n),l,l,l,l,A.ei,l,l,1/0),l))}if(m.cy&&!m.gN4()){s=B.W(31,A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255)
r=B.m(12)
q=B.m(12)
o=B.V(A.rP,k?A.iC:A.h9,l,l,l,16)
v.push(new B.B(A.JJ,B.aD(!1,A.X,!0,r,B.aH(!1,q,!0,new B.B(A.ei,B.A(B.a([o,A.bq,B.d("Back to NGMY Helper AI",l,l,l,l,l,l,B.l(l,l,k?A.iC:A.h9,l,l,l,l,l,l,l,l,12,l,l,A.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),A.m,l,A.b5,A.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcgb(),l,l,l,l,l,l,l),A.h,s,0,l,l,l,l,l,A.ac),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcqE():l
v.push(B.C(new C.an8(s,q,new C.cw6(),r,o,l),1))
v=B.u(v,A.m,l,A.e,A.j,0,A.p)}else v=m.byE(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.fQf(r)
t=B.a([w,A.aa,new B.B(A.iX,u,l),A.P,B.C(B.fRd(B.a([v,new C.anb(q,o,n,new C.cw7(m,d),s,l)],p),A.q,t,A.z,new C.cw8(m),l),1)],p)
if(m.d===0&&!m.gaw7()){w=B.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a_7:D.Zu
w.push(new B.a3(l,36,B.hF(l,new C.cw9(m),v.length,l,l,A.aY,new C.cwa(),!1),l))}if(m.ax&&m.f.length<=1)w.push(A.P)
v=m.r
u=B.l(l,l,k?A.c:A.bi,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=B.l(l,l,k?A.aB:A.dx,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?A.x:A.c
r=B.W(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=B.m(22)
o=B.m(22)
n=k?A.be:A.f_
u=B.C(B.aK(l,A.U,!1,l,!0,A.q,l,B.aL(),v,l,l,l,l,l,2,B.bn(l,new B.b2(4,q,A.W),l,A.Dv,l,l,l,l,!0,new B.b2(4,o,new B.ay(n,1,A.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ad,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cwb(m),l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,u,!0,A.a5,l,A.am,l,A.aIP,l,l),1)
s=m.at
r=s?l:m.gcj5()
w.push(B.A(B.a([u,new B.H9(v,A.aK,l),A.bq,B.aD(!1,A.X,!0,l,B.aH(!1,l,!0,new B.a3(44,44,s?D.dLT:P.ahO,l),A.cE,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),A.h,A.aK,0,l,l,A.cE,l,l,A.ac)],p),A.dE,l,A.e,A.j,0,l,l))
w=B.u(w,A.m,l,A.e,A.R,0,A.p)
v=k?A.kO:A.c
t.push(B.tj(A.pL,B.p(l,new B.B(A.Ds,w,l),A.h,l,l,new B.o(v,l,B.G(k?B.W(41,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.W(18,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.r,1),A.pL,l,l,A.n),l,l,l,l,l,l,l,l),14,!1))}return new B.U9(i,new C.cwc(m),B.cf(l,j,B.br(!0,B.u(t,A.m,l,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0),l,!1,!1,l,l),l)},
byD(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.c()
w=p===0
p=this.c
p.toString
v=B.K(p).ax.a===A.H
if(w)p=B.W(A.k.U(255*(v?0.25:0.12)),A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255)
else p=A.K
u=B.m(11)
t=w?B.G(B.W(A.k.U(127.5),A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255),A.r,1):q
s=B.V(A.rR,w?A.aK:A.cS,q,q,q,17)
if(w)r=v?A.c:A.aG
else r=A.cS
return B.C(B.aJ(q,B.dg(q,B.A(B.a([s,A.bq,B.d("Chat",q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.m,q,A.b5,A.j,0,q,q),q,q,A.b9,new B.o(p,q,t,u,q,q,A.n),A.eE,q,q,q,A.wh,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cvr(this),q,q,q,q,q,q,!1,A.ae),1)},
coP(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.c()
w=p===d
p=this.c
p.toString
v=B.K(p).ax.a===A.H
if(w)p=B.W(A.k.U(255*(v?0.25:0.12)),A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255)
else p=A.K
u=B.m(11)
t=w?B.G(B.W(A.k.U(127.5),A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255),A.r,1):q
s=B.V(e,w?A.aK:A.cS,q,q,q,17)
if(w)r=v?A.c:A.aG
else r=A.cS
r=B.a([s,A.bq,B.d(f,q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return B.C(B.aJ(q,B.dg(q,B.A(r,A.m,q,A.b5,A.j,0,q,q),q,q,A.b9,new B.o(p,q,t,u,q,q,A.n),A.eE,q,q,q,A.wh,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cvZ(this,d),q,q,q,q,q,q,!1,A.ae),1)},
byE(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.b7a:B.W(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
w=B.m(18)
v=B.G(d?A.du:A.aJ,A.r,1)
u=q===0?1:q
return B.p(s,B.jT(!0,s,t.ok,new C.cvs(t,e,d),u,s,A.c1,s,s,!1,!1),A.h,s,s,new B.o(r,s,v,w,s,s,A.n),s,s,s,A.iX,s,s,s,s)},
aKk(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a6(d),m=J.y(n.h(d,"role"),"user"),l=m?A.hX:this.c9l(d),k=m?A.m3:A.e,j=x.p,i=B.a([],j),h=!m
if(h)A.d.v(i,B.a([new B.a3(28,28,C.fE4(this.a.f.Q,28),o),A.ab],j))
w=m?A.dE:A.F
j=B.a([],j)
if(h)j.push(D.dM8)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=A.aK
else u=e?A.U0:A.aN
t=m?16:4
s=m?4:16
if(m)r=o
else r=B.G(e?A.bG:A.aJ,A.r,1)
q=B.a([new B.a9(0,A.G,B.W(10,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.dG,6)],x.V)
if(f)n=B.d("typing\u2026",o,o,o,o,o,o,B.l(o,o,e?A.aB:A.dx,o,o,o,o,o,o,o,o,12,A.cz,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=A.c
else p=e?A.ak:A.bj
p=B.d(n,o,o,o,o,o,o,B.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(B.fAd(m,B.p(o,n,A.h,o,o,new B.o(u,o,r,new B.bx(A.kH,A.kH,new B.b3(t,t),new B.b3(s,s)),q,o,A.n),o,o,o,o,Ab.V6,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(B.h1y(l,e,this.gcp4()))
i.push(new B.dk(1,A.cj,B.u(j,w,o,A.e,A.j,0,A.p),o))
if(m)i.push(A.d4)
return new B.B(A.d6,B.A(i,A.dE,o,k,A.j,0,o,o),o)},
byC(d,e){return this.aKk(d,e,!1)}}
C.aH6.prototype={
Z(){this.a0()
$.xE().aJ(0,this.gD6())},
p(){$.xE().a1(0,this.gD6())
this.a2()}}
C.aH7.prototype={
Z(){this.a0()
$.xE().aJ(0,this.gD6())},
p(){$.xE().a1(0,this.gD6())
this.a2()}}
C.aH8.prototype={
Z(){this.a0()
$.xE().aJ(0,this.gD6())},
p(){$.xE().a1(0,this.gD6())
this.a2()}}
C.aI3.prototype={
Z(){this.a0()
$.xE().aJ(0,this.gD6())},
p(){$.xE().a1(0,this.gD6())
this.a2()}}
C.TZ.prototype={
a3(){return"NgmySnapshotResolveOutcome."+this.b}}
C.akM.prototype={
S(){return new C.az8()}}
C.az8.prototype={
Z(){var w,v=this
v.a0()
w=v.a
v.d=w.d
v.e=B.bi(w.e,!0,x.o)
v.f=v.a.f},
ko(d){var w=null,v=this.c
if(v==null)return
v.F(x.q).f.P(B.b0(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
zg(d,e){return this.cu0(d,e)},
cu0(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this
var $async$zg=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.n(new C.dnB(q,e))
t=3
w=6
return B.b(d.$0(),$async$zg)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.n(new C.dnC(q))
w=r.pop()
break
case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zg,v)},
zG(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$zG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=t.d
q===$&&B.c()
w=3
return B.b(B.v2(r,q),$async$zG)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.dns(t,s))
case 1:return B.h(u,v)}})
return B.i($async$zG,v)},
a7_(){var w=0,v=B.j(x.gE),u,t=this,s,r,q,p
var $async$a7_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zG(),$async$a7_)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&B.c()
q=t.e
q===$&&B.c()
p=t.f
p===$&&B.c()
u=B.LV(s,B.Id(B.bTj(r,q,s,p).eD(),null,"  "))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7_,v)},
Vn(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.oA(s,t.a.c,!1),$async$Vn)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.zg(new C.dnq(t),"Preparing download\u2026"),$async$Vn)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Vn,v)},
WN(){var w=0,v=B.j(x.H),u,t=this,s
var $async$WN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.oA(s,t.a.c,!1),$async$WN)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.zg(new C.dnA(t),"Creating QR code\u2026"),$async$WN)
case 4:case 1:return B.h(u,v)}})
return B.i($async$WN,v)},
WM(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$WM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.hAB(r),$async$WM)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}w=4
return B.b(t.zg(new C.dnp(t,s),"Looking up code\u2026"),$async$WM)
case 4:case 1:return B.h(u,v)}})
return B.i($async$WM,v)},
aag(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$aag=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.wf.c2().Ks(A.NY,A.rL,!0),$async$aag)
case 7:r=e
p=r
q=p==null?null:J.fn(p.a)
if(q==null){u=null
w=1
break}if(q.c!=null){p=q.c
p.toString
p=!A.aD.gah(p)}else p=!1
if(p){p=q.c
p.toString
p=B.jd(p,0,null)
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
case 6:u=B.F2()
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aag,v)},
yV(d,e,f){return this.bAV(d,e,f)},
aLy(d,e){return this.yV(d,!1,e)},
bAU(d){return this.yV(d,!1,!1)},
bAV(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$yV=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zG(),$async$yV)
case 3:if(t.c==null){w=1
break}if(!C.bTo(d,t.a.c,null)){t.ko(C.bTp(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&B.c()
s=!C.hdW(d,s)}if(s){t.ko(y.B)
w=1
break}r=d.as
q=J.ci(r)
s=t.c
s.toString
w=4
return B.b(C.hAO(s,q,t.a.c,d),$async$yV)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=B.lq(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,A.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&B.c()
r=o}w=5
return B.b(B.rK(s,p,r,!1,null,null,d.ax),$async$yV)
case 5:if(t.c==null){w=1
break}t.n(new C.dno(t,p,r,d))
t.ko("Restored your local Growth Income. Go back to see it updated.")
case 1:return B.h(u,v)}})
return B.i($async$yV,v)},
aaf(){var w=0,v=B.j(x.H),u=this
var $async$aaf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.zg(new C.dnr(u),"Reading file\u2026"),$async$aaf)
case 2:return B.h(null,v)}})
return B.i($async$aaf,v)},
UJ(d){return this.bCa(d)},
bCa(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$UJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&B.c()
s=new B.cQ("local_qr_dep_"+1000*r,q.a,d,A.fc,A.eX,"Admin deposit ($"+B.dx(d)+")",null,null,A.cc,new B.N(Date.now(),0,!1))
C.c5P(t.d,s)
q=t.e
q===$&&B.c()
r=B.z(q,x.o)
r.push(s)
w=3
return B.b(B.rK(t.a.c,t.d,r,!0,null,null,null),$async$UJ)
case 3:w=4
return B.b(t.zG(),$async$UJ)
case 4:if(t.c==null){w=1
break}t.ko("Deposited $"+B.dx(d)+" to your local wallet.")
case 1:return B.h(u,v)}})
return B.i($async$UJ,v)},
b_O(d){var w=null
return B.cb(w,w,!0,w,new C.dny(),d,w,!0,!0,x.N)},
TS(d){return this.buu(d)},
buu(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$TS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return B.b(t.UJ(d.b),$async$TS)
case 5:w=1
break
case 4:s=d.c
t.ko(s==null?"Could not apply deposit.":s)
case 1:return B.h(u,v)}})
return B.i($async$TS,v)},
Dr(d){return this.cdU(d)},
cdU(d){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Dr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zG(),$async$Dr)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return B.b(C.aXD(d,t.a.c),$async$Dr)
case 4:s=f
if(!s.a){u=!1
w=1
break}if(s.b){t.ko("This deposit code was already used.")
u=!0
w=1
break}if(s.d){t.ko(y.y)
u=!0
w=1
break}if(s.c){t.ko(y.j)
u=!0
w=1
break}r=t.c
if(r==null){u=!0
w=1
break}w=5
return B.b(t.b_O(r),$async$Dr)
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
return B.b(C.c5I(d,o,n.a,r,p),$async$Dr)
case 7:w=6
return B.b(t.TS(f),$async$Dr)
case 6:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Dr,v)},
Ds(d){return this.cdV(d)},
cdV(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ds=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zG(),$async$Ds)
case 3:if(t.c==null){w=1
break}w=4
return B.b(C.c5H(d,t.a.c),$async$Ds)
case 4:s=f
if(!s.a){t.ko(y.m)
w=1
break}if(s.b){t.ko("This deposit code was already used.")
w=1
break}if(s.d){t.ko(y.y)
w=1
break}if(s.c){t.ko(y.j)
w=1
break}r=t.c
if(r==null){w=1
break}w=5
return B.b(t.b_O(r),$async$Ds)
case 5:q=f
if(q==null||A.a.i(q).length===0){w=1
break}r=t.a.c
p=A.a.i(q)
o=t.e
o===$&&B.c()
n=t.d
n===$&&B.c()
w=7
return B.b(C.TB(o,n.a,d,r,p),$async$Ds)
case 7:w=6
return B.b(t.TS(f),$async$Ds)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Ds,v)},
Nm(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Nm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!B.Bx()){t.ko("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return B.b(B.a7(s,!1).cr(B.eI(new C.dnt(),!0,null,x.N)),$async$Nm)
case 3:r=e
if(r==null||A.a.i(r).length===0){w=1
break}w=A.a.a_(A.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return B.b(t.zg(new C.dnu(t,r),"Applying deposit\u2026"),$async$Nm)
case 6:w=1
break
case 5:w=7
return B.b(t.zg(new C.dnv(t,r),"Loading\u2026"),$async$Nm)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Nm,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.K(d).ax.a===A.H,m=n?A.iT:A.oO,l=n?A.c:A.M,k=n?A.aQ:A.al,j=n?A.bG:A.x.j(0.06),i=x.p
j=B.A(B.a([B.aH(!1,o,!0,B.p(A.B,B.V(A.eq,l,o,o,o,16),A.h,o,o,new B.o(j,o,o,o,o,o,A.a6),o,38,o,o,o,o,o,38),A.cE,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dnD(d),o,o,o,o,o,o,o)],i),A.m,o,A.e,A.j,0,o,o)
w=B.d("Backup & Restore",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,A.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=B.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,A.cp,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=B.C(new C.Ze(D.bph,"Download",E.a_o,u?o:p.gbHf(),o),1)
t=B.A(B.a([t,A.es,B.C(new C.Ze(A.j0,"Show QR",A.asJ,u?o:p.gbX6(),o),1)],i),A.m,o,A.e,A.j,0,o,o)
u=p.r
s=B.C(new C.Ze(D.bpi,"Upload",A.No,u?o:p.gbX4(),o),1)
s=B.A(B.a([s,A.es,B.C(new C.Ze(A.iF,"Scan QR",D.cBP,u?o:p.gbX5(),o),1)],i),A.m,o,A.e,A.j,0,o,o)
u=p.r?o:p.gbX3()
r=n?A.c.j(0.06):A.aS.j(0.08)
q=B.m(16)
q=B.a([B.cL(B.a([j,A.az,w,A.P,v,A.ka,t,A.az,s,A.az,new C.bnB(A.qk,"Enter Code",A.Zb,u,o),A.ka,B.p(o,B.A(B.a([B.V(A.he,A.aS,o,o,o,18),A.aw,B.C(B.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,A.a1,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),A.F,o,A.e,A.j,0,o,o),A.h,o,o,new B.o(r,o,o,q,o,o,A.n),o,o,o,o,A.iE,o,o,o)],i),o,Aa.JY,o,o,A.ag,!1)],i)
if(p.r){j=n?A.hm:A.c
w=p.w
if(w==null)w="Working\u2026"
q.push(B.an(0,B.aD(!1,A.X,!0,o,new B.B(A.zD,B.A(B.a([I.aHN,A.ba,B.C(B.d(w,o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),A.m,o,A.e,A.j,0,o,o),o),A.h,j,8,o,o,o,o,o,A.ac),o,o,0,0,o,o))}return B.cf(o,m,B.br(!1,new B.am(A.V,o,A.a9,A.q,q,o),!0,!1,A.ah,!0,!0),o,!1,!1,o,o)}}
C.Ze.prototype={
B(d){var w=this,v=null,u=B.m(22),t=B.m(22),s=w.e,r=B.m(22),q=B.a([new B.a9(0,A.G,A.d.gai(s).j(0.35),A.dn,16)],x.V),p=A.c.j(0.22)
return B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.p(v,B.u(B.a([B.p(v,B.V(w.c,A.c,v,v,v,30),A.h,v,v,new B.o(p,v,v,v,v,v,A.a6),v,56,v,v,v,v,v,56),A.aa,B.d(w.d,v,v,v,v,v,v,A.qR,v,v,v)],x.p),A.m,v,A.b5,A.j,0,A.p),A.h,v,v,new B.o(v,v,v,r,q,new B.a8(A.ax,A.aE,A.w,s,v,v),A.n),v,140,v,v,A.c1,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.h,A.K,0,v,v,v,v,v,A.ac)}}
C.bnB.prototype={
B(d){var w=this,v=null,u=B.m(22),t=B.m(22),s=w.e,r=B.m(22),q=B.a([new B.a9(0,A.G,A.d.gai(s).j(0.35),A.dn,16)],x.V),p=A.c.j(0.22)
return B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.p(v,B.A(B.a([B.p(v,B.V(w.c,A.c,v,v,v,24),A.h,v,v,new B.o(p,v,v,v,v,v,A.a6),v,44,v,v,v,v,v,44),A.es,B.d(w.d,v,v,v,v,v,v,A.qR,v,v,v)],x.p),A.m,v,A.b5,A.j,0,v,v),A.h,v,v,new B.o(v,v,v,r,q,new B.a8(A.ax,A.aE,A.w,s,v,v),A.n),v,v,v,v,D.bhl,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.h,A.K,0,v,v,v,v,v,A.ac)}}
C.XU.prototype={
S(){return new C.beW()}}
C.beW.prototype={
gasH(){var w=this.e
return w===$?this.e=this.a.d:w},
Z(){var w=this
w.a0()
w.P_()
w.f=B.dE(A.nf,new C.dnH(w))},
p(){var w=this.f
if(w!=null)w.a9(0)
this.a2()},
P_(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$P_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return B.b(B.v2(q.e,q.f),$async$P_)
case 3:q=e.a
s=B.bTj(q[3],q[1],t.a.e,q[4])
w=4
return B.b(B.LV(t.a.e,B.Id(s.eD(),null,"  ")),$async$P_)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.n(new C.dnE(t,r))
case 1:return B.h(u,v)}})
return B.i($async$P_,v)},
B(d){var w=this,v=null,u=B.K(d).ax.a===A.H,t=u?A.iT:A.oO,s=u?A.hm:A.c,r=u?A.c:A.bi,q=B.eB(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,A.aKG,v,v,v,1,v,!0),p=B.m(24),o=B.G(A.aS.j(0.35),A.r,1),n=w.d,m=B.pj(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,A.c),l=B.d("Code: "+w.gasH(),v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=B.m(20),j=A.aS.j(0.12),i=B.m(20),h=x.p
i=B.aH(!1,k,!0,B.p(v,B.A(B.a([B.V(A.fx,A.aS,v,v,v,14),A.bq,B.d("Copy code",v,v,v,v,v,v,B.l(v,v,A.aS,v,v,v,v,v,v,v,v,12,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),A.m,v,A.e,A.R,0,v,v),A.h,v,v,new B.o(j,v,v,i,v,v,A.n),v,v,v,v,A.mx,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dnF(w,d),v,v,v,v,v,v,v)
return B.cf(q,t,new B.B(A.a8,B.u(B.a([B.C(B.p(v,B.u(B.a([A.P,m,A.bu,l,A.P,i,A.az,B.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,B.l(v,v,u?A.aQ:A.al,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),A.L,v,v)],h),A.m,v,A.b5,A.j,0,A.p),A.h,v,v,new B.o(s,v,o,p,v,v,A.n),v,v,v,v,A.a8,v,v,1/0),1),A.aO,new B.a3(1/0,v,B.bJ(A.yi,new C.dnG(d),B.bk(A.aS,v,v,v,v,A.fV,v,v,v,v,v,v)),v)],h),A.m,v,A.e,A.j,0,A.p),v),v,!1,!1,v,v)}}
C.XV.prototype={
S(){return new C.beX(B.y7(A.wa,A.n3,A.t5))}}
C.beX.prototype={
p(){this.d.p()
this.a2()},
B(d){var w=null
return B.cf(B.eB(w,w,w,!0,!0,A.x,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.eRo,w,w,w,1,w,!0),A.x,B.y6(this.d,A.bM,new C.dnI(this,d)),w,!1,!1,w,w)}}
C.abY.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.K(a0).ax.a===A.H,k=l?A.hm:A.c,j=l?A.c:A.M,i=l?A.aQ:A.al,h=l?A.be:A.ep,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=B.m(26)
w=B.G(A.aS.j(0.35),A.r,1)
v=B.a([new B.a9(0,A.G,A.aS.j(0.16),A.kF,36)],x.V)
u=B.p(m,D.bvm,A.h,m,m,new B.o(m,m,m,B.m(18),A.a_n,D.bEy,A.n),m,58,m,m,m,m,m,58)
t=B.d("Restore local backup?",m,m,m,m,m,m,B.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,A.u,m,m,!0,m,-0.3,m,m,m,m,m,m),A.L,m,m)
s=B.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,B.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),A.L,m,m)
r=l?A.iT:A.oO
q=B.m(18)
p=B.G(A.aS.j(0.22),A.r,1)
o=x.p
g=B.a([new C.O6("Account",A.a.i(this.d),i,j,m),A.T,new C.O6("Balance","$"+B.dx(g.d),i,j,m)],o)
if(d!=null&&A.a.i(d).length!==0)A.d.v(g,B.a([A.T,new C.O6("Investment",d,i,j,m)],o))
g.push(A.T)
g.push(new C.O6("Saved on",""+B.bB(f)+"/"+B.bL(f)+"/"+B.bv(f),i,j,m))
g.push(A.T)
g.push(new C.O6("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=B.p(m,B.u(g,A.F,m,A.e,A.j,0,A.p),A.h,m,m,new B.o(r,m,p,q,m,m,A.n),m,m,m,m,A.c1,m,m,1/0)
r=A.b_.j(l?0.14:0.12)
q=B.m(14)
p=B.G(A.b_.j(0.35),A.r,1)
n=B.V(A.wW,l?A.aM:A.dC,m,m,m,16)
return B.eC(m,A.K,new B.d3(A.St,B.bQ(new B.B(A.wt,B.u(B.a([u,A.aO,t,A.P,s,A.bu,g,A.az,B.p(m,B.A(B.a([n,A.ab,B.C(B.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,B.l(m,m,l?A.bJ:A.iA,m,m,m,m,m,m,m,m,11.5,m,m,A.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),A.F,m,A.e,A.j,0,m,m),A.h,m,m,new B.o(r,m,p,q,m,m,A.n),m,m,m,m,A.ei,m,m,1/0),A.d1,B.A(B.a([B.C(B.dU(A.mW,new C.eEQ(a0),B.d9(m,m,m,m,m,m,m,m,m,j,m,m,A.c9,m,new B.b5(B.m(14),A.W),new B.ay(h,1,A.r,-1),m,m,m,m)),1),A.aw,B.C(B.bJ(D.eBL,new C.eER(a0),B.bk(A.aS,m,m,m,m,m,A.c9,m,new B.b5(B.m(14),A.W),m,m,m)),2)],o),A.m,m,A.e,A.j,0,m,m)],o),A.m,m,A.e,A.R,0,A.p),m),new B.o(k,m,w,e,v,m,A.n),A.b7),m),m,m,m,A.em,A.cZ,m,m,m)}}
C.O6.prototype={
B(d){var w=this,v=null
return B.A(B.a([new B.a3(92,v,B.d(w.c,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),B.C(B.d(w.d,v,v,v,v,v,v,B.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,A.I,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.F,v,A.e,A.j,0,v,v)}}
C.X1.prototype={
S(){return new C.awu(new B.ao(A.aq,$.at()),B.k6(!0,null,!0,!0,null,null,!1))}}
C.awu.prototype={
Z(){this.a0()
$.aS.x1$.push(new C.cYr(this))},
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.e.p()
this.a2()},
bX8(){var w,v=this.c
v.toString
w=A.a.i(this.d.a.a)
B.a7(v,!1).K(w)
return null},
B(d){var w=this,v=null,u=B.K(d).ax.a===A.H,t=u?A.hm:A.c,s=u?A.c:A.M,r=u?A.aQ:A.al,q=u?A.iT:A.oO,p=u?A.be:A.ep,o=B.m(24),n=B.G(A.aS.j(0.35),A.r,1),m=B.a([new B.a9(0,A.G,A.aS.j(0.18),A.fz,32)],x.V),l=B.p(v,A9.aix,A.h,v,v,new B.o(v,v,v,B.m(18),A.a_n,D.bH3,A.n),v,56,v,v,v,v,v,56),k=B.d("Enter restore code",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,A.u,v,v,!0,v,-0.3,v,v,v,v,v,v),A.L,v,v),j=B.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),A.L,v,v),i=B.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,A.I,v,v,!0,v,8,v,v,v,v,v,v),h=B.a([new B.uK(B.ad("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bn5(new C.cYo())],x.G),g=B.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,A.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return B.eC(v,A.K,new B.d3(A0.I8,B.bQ(new B.B(A.wt,B.u(B.a([l,A.aO,k,A.P,j,A.dW,B.aK(!1,A.U,!1,v,!0,A.q,v,B.aL(),w.d,v,v,v,v,v,2,B.bn(v,v,v,A.Dz,v,v,"",v,!0,new B.b2(4,B.m(16),new B.ay(p,1,A.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new B.b2(4,B.m(16),D.aPw),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),A.z,!0,v,!1,v,!1,w.e,A.ad,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.cYp(w),v,!1,v,v,!1,v,!0,v,A.a8,v,v,v,v,v,v,v,v,v,v,v,i,!0,A.L,v,A.lA,v,v,v,v),A.dW,B.A(B.a([B.C(B.dU(A.mW,new C.cYq(d),B.d9(v,v,v,v,v,v,v,v,v,s,v,v,A.c9,v,new B.b5(B.m(14),A.W),new B.ay(p,1,A.r,-1),v,v,v,v)),1),A.aw,B.C(B.bJ(D.eF6,w.gbX7(),B.bk(A.aS,v,v,v,v,v,A.c9,v,new B.b5(B.m(14),A.W),v,v,v)),2)],f),A.m,v,A.e,A.j,0,v,v)],f),A.m,v,A.e,A.R,0,A.p),v),new B.o(t,v,n,o,m,v,A.n),A.b7),v),v,v,v,A.K_,A.cZ,v,v,v)}}
C.alg.prototype={
S(){return new C.bf2(A.cA)},
he(d){return this.x.$1(d)},
bm(){return this.y.$0()}}
C.bf2.prototype={
Z(){var w,v=this
v.a0()
w=v.a
w.toString
$.rI=$.rI+1
v.r=A.o.M(A.o.D(C.fh6(w.e,w.d.y2),1,600))
w=v.a
if(!J.l7(w.d.y2,w.e))v.r=C.hFU(v.a.e)
v.w=B.dE(A.fZ,new C.du2(v))},
p(){var w=this.w
if(w!=null)w.a9(0)
this.c8b()
C.aWq()
this.a2()},
c8b(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:A.k.D(r.e/w,0,1)
if(v<=0)return
u=B.P4(A.k.ab(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=A.o.u(1000*Date.now())
s=r.a
w.he(new B.cQ(t,s.c.a,u,A.fA,A.eX,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,A.cc,new B.N(Date.now(),0,!1)))
r.a.bm()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.v_(u,q,"Left early \xb7 +$"+A.k.ab(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
It(d,e){return this.cjI(d,e)},
b_s(d){return this.It(!1,d)},
cjH(d){return this.It(d,"")},
cjI(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$It=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}t.x=!0
s=t.w
if(s!=null)s.a9(0)
if(d)r=1
else{s=t.f
r=s<=0?0:A.k.D(t.e/s,0,1)}w=r<=0?3:4
break
case 3:s=t.a
q=s.c.a
p=s.f
s=s.w
o=e.length===0
C.v_(s,null,o?"No progress":e,q,p,s,null,!1)
s=t.c
if(s==null){w=1
break}w=5
return B.b(C.bz1(s,C.byG(),C.fHq(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$It)
case 5:w=1
break
case 4:n=B.P4(A.k.ab(t.a.w*1.46*r,2))
m=r>=1
t.n(new C.dtU(t,n,r))
s=A.o.u(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new B.cQ(s,p,n,A.fA,A.eX,q,null,null,A.cc,new B.N(Date.now(),0,!1))
B.aeB(l,!0)
t.a.he(l)
t.a.bm()
if(m)k="+$"+A.k.ab(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+A.k.ab(n,2)+" ("+A.k.U(r*100)+"% of the prize)"}q=t.a
C.v_(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return B.b(C.bz1(s,C.byG(),C.fHq(),""+t.e+"/"+t.f,k,q,!0),$async$It)
case 6:w=7
return B.b(C.aet(t.a.f,k),$async$It)
case 7:case 1:return B.h(u,v)}})
return B.i($async$It,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.r
m===$&&B.c()
w=A.o.ak(m,60)
v=A.a.aT(A.o.u(A.o.J(m,60)),2,"0")
u=B.aF(n,n,n,n,A.aiA,n,n,n,new C.dtX(d),n,n,n,n,n,n)
t=o.a
s=x.p
t=B.C(B.u(B.a([B.d(t.f,n,1,A.Z,n,n,n,A.l7,n,n,n),B.d("Win $"+A.k.ab(t.w*1.46,2)+" \xb7 stake $"+A.k.ab(o.a.w,2),n,n,n,n,n,n,D.erG,n,n,n)],s),A.F,n,A.e,A.j,0,A.p),1)
r=o.a.c.a
m=m<=10?A.aH:A.c.j(0.1)
q=B.m(99)
q=B.A(B.a([u,t,new C.amL(r,new C.dtY(o),n),A.bq,B.dg(n,B.A(B.a([D.bzG,A.d4,B.d(""+w+":"+v,n,n,n,n,n,n,A.kc,n,n,n)],s),A.m,n,A.e,A.j,0,n,n),n,n,A.b9,new B.o(m,n,n,q,n,n,A.n),A.X,n,n,n,A.wl,n,n,n)],s),A.m,n,A.e,A.j,0,n,n)
m=o.a
v=m.w
w=v*1.46
r=o.e/o.f
m=B.A(B.a([B.C(B.bu(B.m(99),B.mP(A.bG,n,n,9,n,r,new B.nE(A.d.gI(m.r),x.dw)),A.ap),1),A.aw,B.d(""+o.e+"/"+o.f,n,n,n,n,n,n,D.eA7,n,n,n)],s),A.m,n,A.e,A.j,0,n,n)
t=B.m(22)
u=B.a([A.d.gI(o.a.r).j(0.35),F.aaN],x.O)
p=o.x
return C.aLW(n,D.b7W,B.br(!0,B.u(B.a([new B.B(D.bjn,q,n),new C.Ly(w*r,w,v,n),new B.B(F.acZ,m,n),B.C(new B.B(A.UX,B.bu(t,B.bQ(B.e8(V.h07(o.a.e,new V.ye(new C.dtZ(o),new C.du_(o),new C.du0(o),o.d)),p,n),new B.o(n,n,n,n,n,new B.a8(A.b4,A.bb,A.w,u,n,n),A.n),A.b7),A.ap),n),1)],s),A.m,n,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0))}}
C.akL.prototype={
S(){return new C.beU(null,null)},
gX(d){return this.e}}
C.beU.prototype={
Z(){var w,v=this,u=null
v.a0()
w=v.d=B.bh(u,A.zr,u,1,u,v)
w.d5()
w.dL$.H(0,new C.dnd(v))
w=B.bh(u,A.lQ,u,1,u,v)
w.cF(0)
v.e=w
w=B.bh(u,A.Js,u,1,u,v)
w.cF(0)
v.f=w
w.d5()
w.dL$.H(0,new C.dne(v))
if(v.a.c){v.d.cF(0)
v.e.bT(0)
v.f.bT(0)}},
bo(d){var w,v,u=this
u.bA(d)
w=u.a.c
if(w){v=u.d
v===$&&B.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){w=u.d
w===$&&B.c()
w.cF(0)
w=u.e
w===$&&B.c()
w.bT(0)
w=u.f
w===$&&B.c()
w.bT(0)}else if(!w&&d.c){w=u.d
w===$&&B.c()
w.bT(0)
w=u.d
w.st(0,w.a)
w=u.e
w===$&&B.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cF(0)
w=u.f
w===$&&B.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cF(0)}},
p(){var w=this,v=w.d
v===$&&B.c()
v.p()
v=w.e
v===$&&B.c()
v.p()
v=w.f
v===$&&B.c()
v.p()
w.bos()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.O_[A.o.J(a9.r,5)]:b4
w=!b3&&b4==null?D.O_[A.o.J(a9.w,5)]:b0
b1=b4!=null
if(b1){b3=B.t(b4)
v=b4>0?"+"+b3:b3}else if(w!=null){b3=B.t(w)
if(w>0)b3="+"+b3
v=b3}else v="?"
if(b1)u=b4>0?A.dl:A.bR
else if(w!=null){b1=(w>0?A.dl:A.bR).j(0.45)
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
b3=B.a([B.e4(A.B,B.p(b0,b0,A.h,b0,b0,new B.o(b0,b0,b0,b0,B.a([new B.a9(6+e,A.G,A.aA.j(0.4+q*0.3),A.J,32+q*22),new B.a9(3,A.G,A.bc.j(0.2+p*0.25),A.J,40+p*16)],d),b0,A.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=B.p(b0,b0,A.h,b0,b0,new B.o(B.aq(A.bE,A.aM,A.o.J(a3,3)/2).j(a2),b0,b0,b0,B.a([new B.a9(0,A.G,A.aA.j(0.7),A.J,e)],d),b0,A.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(B.dO(new B.iu(B.vp(a4+a3),b0,A.B,!0,b0,a8,b0),new B.v(a6*a0+a5*b2*0.04,a7*a0)))}A.d.v(f,b3)}b3=b2*0.06
e=x.V
f.push(B.dO(B.p(b0,b0,A.h,b0,b0,new B.o(b0,b0,b0,B.m(b2*0.5),B.a([new B.a9(b2*0.02,A.G,A.x.j(0.4+b1),A.J,b2*0.14)],e),b0,A.n),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new B.v(0,n+b3)))
b1=B.de()
d=b1.a
d.$flags&2&&B.ah(d)
d[11]=0.0025
b1.me(o)
b1.jd(k,k,k,1)
b1.jw(l)
b1.fk(m)
d=b2*0.2
a1=B.m(d)
if(a9.a.c)a2=D.cGN
else{a2=B.aq(A.c,A.kM,q*0.45)
a2.toString
a2=B.a([a2,A.bO,A.ct],x.O)}a4=B.aq(A.bP,A.aA,q*0.65)
a4.toString
a4=B.G(a4,A.r,3)
e=B.a([new B.a9(0,A.G,A.x.j(0.3),D.dJL,16)],e)
if(!a9.a.c)e.push(new B.a9(p*3,A.G,A.aA.j(0.3+q*0.4),A.J,24+p*16))
e.push(new B.a9(0,A.G,A.c.j(0.9),A.Pn,0))
g=B.a([],g)
if(!a9.a.c)g.push(B.bU(0,B.bQ(b0,new B.o(b0,b0,b0,B.m(d),b0,new B.a8(new B.d4(-1+Math.cos(j)*0.8,-1),new B.d4(1,1),A.w,B.a([A.c.j(0),A.c.j(0.28+p*0.25),A.c.j(0)],x.O),b0,b0),A.n),A.b7),0,0,0))
g.push(B.an(b0,B.p(b0,b0,A.h,b0,b0,new B.o(b0,b0,b0,B.m(6),b0,new B.a8(A.a_,A.a7,A.w,B.a([A.c.j(0.95),A.c.j(0)],x.O),b0,b0),A.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=B.a([new B.cI(A.x.j(0.18),A.dG,5)],x.C)
if(!a9.a.c)d.push(new B.cI(A.aA.j(0.4+q*0.35),A.J,12+p*10))
g.push(B.as(B.vZ(B.d(v,b0,b0,b0,b0,b0,b0,B.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,A.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),A.b9,A.jb,b3),b0,b0,b0))
f.push(B.dO(B.fk(A.B,B.p(b0,new B.am(A.V,b0,A.a9,A.q,g,b0),A.h,b0,b0,new B.o(b0,b0,a4,a1,e,new B.a8(A.ax,A.aE,A.w,a2,b0,b0),A.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new B.v(0,n)))
return new B.a3(h,h,new B.am(A.B,b0,A.a9,A.h,f,b0),b0)}}
C.aHE.prototype={
aN(){this.aV()
this.aS()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdB())
w.aX$=null
w.a2()}}
C.Ly.prototype={
B(d){var w=null,v=new C.c2s(),u=v.$3("STAKE","$"+A.k.ab(this.e,2),A.c),t=B.m(18),s=B.G(A.bo.j(0.7),A.r,1.4),r=B.a([new B.a9(0,A.G,A.aS.j(0.35),A.J,14)],x.V),q=x.p
return new B.B(A.JJ,B.A(B.a([u,B.p(w,B.u(B.a([D.eMs,B.mU(new C.c2r(),w,A.b9,A.nh,w,new B.bm(w,this.c,x.e7),x.gR)],q),A.m,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(w,w,s,t,r,D.ajl,A.n),w,w,w,w,A.JV,w,w,w),v.$3("FULL WIN","$"+A.k.ab(this.d,2),A.bJ)],q),A.m,w,A.e,A.j,0,w,w),w)}}
C.amL.prototype={
B(d){var w=null,v=B.m(99),u=B.G(A.j5.j(0.7),A.r,1)
return B.p(w,B.A(B.a([D.bs2,A.d4,C.anz(this.d,A.ot,this.c)],x.p),A.m,w,A.e,A.R,0,w,w),A.h,w,w,new B.o(w,w,u,v,w,D.ajl,A.n),w,w,w,w,A.K5,w,w,w)},
gdQ(){return this.c}}
C.LG.prototype={
S(){return new C.bfx(null,null)}}
C.bfx.prototype={
Z(){var w,v=this
v.a0()
w=B.bh(null,A.lQ,null,1,null,v)
v.d!==$&&B.aO()
v.d=w},
p(){var w=this.d
w===$&&B.c()
w.p()
this.bp1()},
aJf(d,e){var w=this.a.d,v=B.S(w).k("I<1,n>"),u=B.z(new B.I(w,C.hLL(),v),v.k("ai.E"))
w=this.d
w===$&&B.c()
return B.c4(w,new C.dM6(this,u),null)},
B(d){var w=null
if(this.a.e)return B.cf(w,D.aac,B.br(!0,this.aJf(0,d),!0,!1,A.ah,!0,!0),w,!1,!1,w,w)
return this.aJf(0,d)},
ate(d,e,f){var w=null,v=f.j(0.16),u=B.m(10)
return B.A(B.a([B.p(w,B.V(d,f,w,w,w,17),A.h,w,w,new B.o(v,w,w,u,w,w,A.n),w,32,w,w,w,w,w,32),A.aw,B.C(B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,A.a1,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.m,w,A.e,A.j,0,w,w)}}
C.aIc.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.aaO.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=B.aG(d,A.e0,o).w.r.d,m=this.c,l=J.cB(m),k=l.eC(m,new C.dM9()).gG(0),j=new B.e2(l.di(m,new C.dMa(),x.cD),x.bG).cI(0,0,new C.dMb())
o=B.aG(d,A.bN,o).w
w=x.p
v=B.a([A.T,B.p(p,p,A.h,p,p,new B.o(A.be,p,p,B.m(2),p,p,A.n),p,4,p,p,p,p,p,42),new B.B(A.adc,B.A(B.a([B.p(p,D.bC1,A.h,p,p,new B.o(p,p,p,B.m(14),B.a([new B.a9(0,A.G,A.f4.j(0.45),A.J,14)],x.V),D.ajf,A.n),p,44,p,p,p,p,p,44),A.ba,D.bls,B.aF(p,p,p,p,A.l1,p,p,p,new C.dMc(d),p,p,p,p,p,p)],w),A.m,p,A.e,A.j,0,p,p),p)],w)
if(l.gcf(m)){u=C.fCy("GAMES",""+l.gG(m),A.eN)
t=C.fCy("WON",""+k,A.j5)
s=j>=0
r=s?"+":"-"
q=C.bvx(j)
s=s?A.j5:A.fO
v.push(new B.B(D.bg_,B.A(B.a([u,A.ab,t,A.ab,C.fCy("NET",r+q,s)],w),A.m,p,A.e,A.j,0,p,p),p))}if(l.gah(m))v.push(new B.B(new B.L(24,36,24,24+n),B.u(B.a([B.V(D.bo_,A.c.j(0.35),p,p,p,52),A.aa,B.d("No game receipts yet",p,p,p,p,p,p,B.l(p,p,A.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.ar,B.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,B.l(p,p,A.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],w),A.m,p,A.e,A.j,0,A.p),p))
else v.push(new B.dk(1,A.cj,B.hF(p,new C.dMd(this),l.gG(m),new B.L(14,2,14,16+n),p,A.ag,new C.dMe(),!1),p))
return B.p(p,B.u(v,A.m,p,A.e,A.R,0,A.p),A.h,p,new B.aV(0,1/0,0,o.a.b*0.88),D.aSf,p,p,p,p,p,p,p,p)}}
C.aaN.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.c,h=i.c
if(h)if(!A.a.q(i.e.toLowerCase(),"%")){w=i.w
w=w!=null&&i.d<w
v=w}else v=!0
else v=!1
w=!h
if(w)u="LOST"
else u=v?"PARTIAL":"WON"
if(w)t=A.cN
else t=v?A.aM:A.bo
s=i.gbaA()
w=new C.dM8()
r=B.m(14)
q=B.a([t.j(0.13),D.b76],x.O)
p=B.G(t.j(0.4),A.r,1)
o=B.V(h?A.lW:A.cu,t,j,j,j,16)
n=B.C(B.d(i.b,j,1,A.Z,j,j,j,A.yh,j,j,j),1)
m=t.j(0.2)
l=B.m(99)
l=B.p(j,B.d(u,j,j,j,j,j,j,B.l(j,j,t,j,j,j,j,j,j,j,j,8.5,j,j,A.u,j,j,!0,j,0.6,j,j,j,j,j,j),j,j,j),A.h,j,j,new B.o(m,j,j,l,j,j,A.n),j,j,j,j,D.bji,j,j,j)
if(s!=null){m=s>=0?"+":"-"
m+=C.bvx(s)}else{m=h?"+":"-"
m+=C.bvx(i.d)}k=x.p
m=B.A(B.a([o,A.bq,n,l,A.bq,B.d(m,j,j,j,j,j,j,B.l(j,j,t,j,j,j,j,j,j,j,j,13,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],k),A.m,j,A.e,A.j,0,j,j)
l=C.dM7("STAKE",w.$1(i.w),A.c)
w=B.A(B.a([l,A.d4,C.dM7("PAID",C.bvx(h?i.d:0),t),A.d4,C.dM7("BEFORE",w.$1(i.x),A.eN),A.d4,C.dM7("AFTER",w.$1(i.y),A.dD)],k),A.m,j,A.e,A.j,0,j,j)
o=C.hHq(i.f)
i=A.a.i(i.e)
i=i.length===0?"":" \xb7 "+i
return B.p(j,B.u(B.a([m,A.ar,w,A.au,B.d(o+i,j,1,A.Z,j,j,j,B.l(j,j,A.c.j(0.45),j,j,j,j,j,j,j,j,10,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],k),A.af,j,A.e,A.j,0,A.p),A.h,j,j,new B.o(j,j,p,r,j,new B.a8(A.ax,A.aE,A.w,q,j,j),A.n),j,j,j,j,A.kW,j,j,j)}}
C.ax6.prototype={
S(){return new C.bbg(A.cA,null,null)}}
C.bbg.prototype={
Z(){var w,v,u,t=this
t.a0()
w=B.bh(null,A.mv,null,1,null,t)
w.cF(0)
t.d=w
v=J.e0(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.abd(40+w.ag()*260,-20+w.ag()*40,1.5+w.ag()*3,w.ag()*3.141592653589793,0.7+w.ag()*0.3,12+w.ag()*16,[X.a0l,A.qx,A.cL,A.c][w.aG(4)],[A.hL,A.kX,A.dO,A.DU][w.aG(4)])
t.f=v},
p(){var w=this.d
w===$&&B.c()
w.p()
this.bnX()},
B(d){var w=null,v=this.d
v===$&&B.c()
return B.as(B.aD(!1,A.X,!0,w,B.c4(v,new C.d42(this,d),w),A.h,A.K,0,w,w,w,w,w,A.ac),w,w,w)}}
C.abd.prototype={
gX(d){return this.f}}
C.aH9.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.aXd.prototype={
B(d){return new B.tI(new C.c4I(this),null,new B.h3(B.a([$.xE(),$.a0x()],x.U)),null)},
gdQ(){return this.c}}
C.La.prototype={
c2m(){if(this.c!=null)this.n(new C.bUD())}}
C.GV.prototype={}
C.amd.prototype={
S(){return new C.azU(A.cA,new B.ao(A.aq,$.at()))},
cvA(){return this.d.$0()},
cGK(){return this.f.$0()},
cGy(d,e){return this.r.$2(d,e)},
cHm(d,e,f){return this.w.$3$bonus(d,e,f)},
gdQ(){return this.c}}
C.azU.prototype={
p(){var w=this.e
w.R$=$.at()
w.O$=0
this.a2()},
apk(){var w=B.d_(A.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
zI(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$zI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.apk()
if(s<2){t.atf("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cvA()<s){t.atf("Insufficient balance.")
w=1
break}if(!t.a.cGy(s,"Dice Roll bet")){t.atf("Could not place bet.")
w=1
break}t.a.toString
t.n(new C.dFp(t))}w=3
return B.b(C.c1D(t.a.e),$async$zI)
case 3:r=t.a
q=C.hJr(r.e,r.c,t.d)
t.a.cGK()
B.aVN(t.a.e)
t.n(new C.dFq(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return B.b(B.bK(new B.b7(1000*(40+p*6)),null,r),$async$zI)
case 7:if(t.c==null){w=1
break}new C.dFr(t).$0()
t.c.e2()
case 5:++p
w=4
break
case 6:w=8
return B.b(B.bK(A.jc,null,r),$async$zI)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.fGe(q)
t.n(new C.dFs(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cHm(m,"Dice Roll "+n,o)
t.n(new C.dFt(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+A.k.ab(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.k.ab(m,2)+" added to your balance"
w=12
return B.b(C.bz1(r,C.byG(),new C.dFu(t),n,k,"YOU WIN!",!0),$async$zI)
case 12:w=13
return B.b(C.aet("Dice Roll",l?"+$"+A.k.ab(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.k.ab(m,2)+" added to your balance"),$async$zI)
case 13:w=10
break
case 11:w=14
return B.b(C.bz1(r,C.byG(),new C.dFv(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$zI)
case 14:C.v_(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return B.h(u,v)}})
return B.i($async$zI,v)},
atf(d){var w=null,v=this.c
if(v==null)return
v.F(x.q).f.P(B.b0(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.apk(),d=x.w,a0=B.aG(a2,A.e0,d).w,a1=Math.min(B.aG(a2,A.bN,d).w.a.a*0.44,200)
d=B.hg(Q.ahI,D.eT7,new C.dFy(a2),f)
w=B.m(20)
v=g.a
u=v.c
t=x.p
w=B.A(B.a([d,A.b6,B.p(f,B.A(B.a([A.ahG,A.bq,C.anz(v.d,A.jM,u)],t),A.m,f,A.e,A.R,0,f,f),A.h,f,f,new B.o(A.cL,f,f,w,f,f,A.n),f,f,f,f,A.ln,f,f,f)],t),A.m,f,A.e,A.j,0,f,f)
u=g.z
v=B.W(140,D.U2.l()>>>16&255,D.U2.l()>>>8&255,D.U2.l()&255)
d=B.m(18)
s=B.G(B.W(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
r=g.x
d=B.C(B.p(f,B.as(new C.akL(r,r?g.w:g.r,a1,f),f,f,f),A.h,f,f,new B.o(v,f,s,d,f,f,A.n),f,f,f,f,f,f,f,1/0),1)
v=B.d("Roll lands on one of:",f,f,f,f,f,f,B.l(f,f,A.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,A.a1,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=B.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.O_[q]
o=C.fGe(p)
n=p>0?A.bs:A.aH
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new B.b3(10,10)
i=m?A.c:n.j(0.7)
h=new B.ay(i,m?2.5:1.2,A.r,-1)
n=m?B.a([new B.a9(1,A.G,n.j(0.65),A.J,14)],r):A.a_j
m=m?18:15
s.push(new B.bG(1,A.bp,new B.B(A.jX,B.p(A.B,new B.w(o,f,new B.F(!0,A.c,f,f,f,f,m,A.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f),A.h,f,f,new B.o(k,f,new B.c2(h,h,h,h),new B.bx(j,j,j,j),n,f,A.n),f,l,f,f,f,f,f,f),f),f))}d=B.a([d,A.aa,v,A.ar,B.A(s,A.m,f,A.e,A.j,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.fGe(v)
s=g.r
s.toString
d.push(new B.B(A.kV,B.d("Landed on "+v,f,f,f,f,f,f,B.l(f,f,s>0?A.br:A.cN,f,f,f,f,f,f,f,f,20,f,f,A.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(A.T)
d.push(new B.bF(A.a_,f,f,B.d("Bet Amount",f,f,f,f,f,f,B.l(f,f,B.W(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,A.I,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(A.ar)
v=x.bL
v=B.z(new B.I(B.a([2,5,10,25],x.n),new C.dFz(g),v),v.k("ai.E"))
s=g.y
r=B.W(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v.push(B.C(new B.B(A.VB,B.aK(f,A.U,!1,f,!0,A.q,f,B.aL(),g.e,f,f,f,f,f,2,B.bn(f,new B.b2(4,B.m(10),A.W),f,A.jW,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,A.l8,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),A.z,!0,f,!0,!s,!1,f,A.ad,f,f,f,f,f,A.dL,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,A.a8,f,f,f,f,f,f,f,f,f,f,f,A.hi,!0,A.L,f,A.am,f,f,f,f),f),1))
d.push(B.A(v,A.m,f,A.e,A.j,0,f,f))
d.push(A.P)
d.push(new B.bF(A.a7,f,f,B.d("Perfect Score Profit: +$"+A.k.ab(g.apk()*0.46,2),f,f,f,f,f,f,D.etA,f,f,f),f))
d.push(A.T)
d=B.C(new B.B(A.iX,B.u(d,A.af,f,A.e,A.j,0,A.p),f),1)
v=g.x?f:g.gcgs()
s=B.fe(f,f,A.aA,f,f,f,f,f,f,A.c,f,f,f,f,new B.b5(B.m(14),A.W),f,f,f,f,f)
return C.aLW(f,D.U8,B.br(!0,B.u(B.a([new B.B(D.bjI,w,f),new C.Ly(u,e*1.46,e,f),B.C(B.u(B.a([d,new B.B(new B.L(14,4,14,8+a0.r.d),new B.a3(1/0,52,B.hU(B.d("\ud83c\udfb2 ROLL ($"+A.k.ab(e,2)+")",f,f,f,f,f,f,A.kI,f,f,f),v,s),f),f)],t),A.m,f,A.e,A.j,0,A.p),1)],t),A.m,f,A.e,A.j,0,A.p),!0,!1,A.ah,!0,!0))}}
C.amQ.prototype={
S(){return new C.aAa(A.k5,new B.ao(A.aq,$.at()))},
cGq(d){return this.e.$1(d)}}
C.aAa.prototype={
gaoa(){var w,v=this.r
if(v===$){w=A.o.u(1e4+A.cA.aG(89999))
this.r!==$&&B.bH()
this.r=w
v=w}return v},
gOs(){var w=this.d,v=this.a
return w===A.k5?A.a.i(v.f.a):A.a.i(v.f.b)},
ga6j(){var w=this.gOs(),v=B.ad("^\\$+",!0,!1,!1,!1),u=A.a.i(B.aI(w,v,""))
return u.length===0?"":"$"+u},
p(){var w=this.e
w.R$=$.at()
w.O$=0
this.a2()},
Hp(d,e){return this.bBk(d,e)},
bBk(d,e){var w=0,v=B.j(x.H),u=this,t
var $async$Hp=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.fB(new B.fu(d)),$async$Hp)
case 2:B.eN()
t=u.c
if(t!=null)t.F(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
return B.h(null,v)}})
return B.i($async$Hp,v)},
On(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$On=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gOs().length===0){r.c.F(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}B.j6()
o=A.k.ab(r.a.d,2)
q=r.d===A.k5?B.cq("https://cash.app/"+r.ga6j()+"/"+o,0,null):B.cq("bitcoin:"+r.gOs(),0,null)
t=4
w=7
return B.b(B.iG(q,A.f8,null),$async$On)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===A.k5?r.ga6j():r.gOs()
w=10
return B.b(r.Hp(n,r.d===A.k5?"Cash App tag":"Bitcoin address"),$async$On)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===A.k5?r.ga6j():r.gOs()
w=11
return B.b(r.Hp(n,r.d===A.k5?"Cash App tag":"Bitcoin address"),$async$On)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$On,v)},
YV(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hQ().bbi(A.er),$async$YV)
case 3:r=e
if(r==null){w=1
break}w=4
return B.b(r.f8(),$async$YV)
case 4:s=e
t.n(new C.dMw(t,A.a.c5(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return B.h(u,v)}})
return B.i($async$YV,v)},
bZQ(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===A.k5?C.h1o(s.a):A.a.i(s.a)
if(r.length===0){t=v.d===A.k5?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.F(x.q).f.P(B.b0(u,u,u,u,u,A.q,u,B.d(t,u,u,u,u,u,u,u,u,u,u),u,A.S,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.F(x.q).f.P(B.b0(u,u,u,u,u,A.q,u,B.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,A.S,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new B.N(Date.now(),0,!1).u(0)
w=v.a
t.cGq(new B.cQ(s,w.c.a,w.d,A.fc,v.d,r,v.f,v.gaoa(),A.dk,new B.N(Date.now(),0,!1)))
w=v.c
w.toString
B.iC(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.eB(o,o,o,!0,!0,A.yY,o,1,!0,o,0,!1,o,!1,A.c,o,B.aF(o,o,o,o,A.EG,o,o,o,new C.dMx(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.eDU,o,o,o,1,o,!0),m=B.m(26),l=B.G(D.eu.j(0.25),A.r,1),k=x.V,j=B.a([new B.a9(0,A.G,A.aW.j(0.25),A.eI,24)],k),i=x.p
j=B.p(o,B.u(B.a([B.d("YOU'RE ADDING",o,o,o,o,o,o,B.l(o,o,A.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,A.I,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),A.ar,B.eY(A.B,B.d("$"+B.dx(p.a.d),o,o,o,o,o,o,D.eo9,o,o,o),A.h,A.dp),A.ar,B.d("to your Growth Income wallet",o,o,o,o,o,o,B.l(o,o,D.eu.j(0.85),o,o,o,o,o,o,o,o,12,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.m,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(o,o,l,m,j,D.bHN,A.n),o,o,o,o,D.bhp,o,o,o)
m=p.bVW()
l=p.awM(1,"Send the money to NGMY Pay",p.bZO())
w=p.awM(2,"Put this code in the payment note",p.bzX())
v=p.d===A.k5
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=B.l(o,o,A.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.awM(3,u,B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.e,o,o,o,o,o,2,B.bn(o,o,o,o,o,o,o,o,!0,new B.b2(4,B.m(18),new B.ay(A.c.j(0.08),1,A.r,-1)),o,o,o,o,o,A.rp,!0,o,o,o,o,new B.b2(4,B.m(18),D.aPr),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.ept,t,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ad,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.qR,!0,A.a5,o,A.am,o,o,o,o))
r=p.f!=null
v=r?8:22
u=B.m(20)
s=r?D.eu:A.c
s=B.G(s.j(r?0.5:0.12),A.r,1.4)
q=r?B.u(B.a([B.bu(B.m(14),new B.d3(D.aQO,new B.Da(p.f,o),o),A.ap),A.P,D.eaP,A.au],i),A.m,o,A.e,A.j,0,A.p):B.u(B.a([B.p(o,D.bBe,A.h,o,o,new B.o(D.eu.j(0.12),o,o,o,o,o,A.a6),o,54,o,o,o,o,o,54),A.T,D.eIG,A.dd,B.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a1,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.m,o,A.e,A.j,0,A.p)
v=p.b0Q(4,"Screenshot of your payment",B.aJ(o,B.p(o,q,A.h,o,o,new B.o(A.rp,o,s,u,o,o,A.n),o,o,o,o,new B.L(v,v,v,v),o,o,o),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gca0(),o,o,o,o,o,o,!1,A.ae),!0)
u=B.d(p.a.r,o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a1,o,1.4,!0,o,o,o,o,o,o,o,o),A.L,o,o)
s=B.m(18)
k=B.a([new B.a9(0,A.G,A.aW.j(0.45),A.dn,18)],k)
return B.cf(n,A.yY,B.as(new B.d3(A.a6P,B.cL(B.a([j,A.bu,m,A.bu,l,w,t,v,A.ar,u,A.aO,new B.a3(o,56,B.bQ(B.lc(D.bzV,D.eSq,p.gbZP(),B.fe(o,o,A.K,o,o,o,o,o,o,A.c,o,o,o,A.K,new B.b5(B.m(18),A.W),o,o,o,o,o)),new B.o(o,o,o,s,k,D.bGv,A.n),A.b7),o)],i),o,D.bgV,o,o,A.ag,!1),o),o,o,o),o,!1,!1,o,o)},
bVW(){var w=null,v=new C.dMs(this),u=B.m(18),t=B.G(A.c.j(0.06),A.r,1)
return B.p(w,B.A(B.a([v.$3(A.k5,A.hI,"Cash App"),A.ez,v.$3(A.a1L,D.ahq,"Bitcoin")],x.p),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(A.rp,w,t,u,w,w,A.n),w,w,w,w,A.lU,w,w,w)},
b0Q(d,e,f,g){var w,v=null,u=x.p,t=B.a([B.p(A.B,B.d(""+d,v,v,v,v,v,v,D.eui,v,v,v),A.h,v,v,D.aRx,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(B.C(B.p(v,v,A.h,D.eu.j(0.18),v,v,v,v,v,A.wj,v,v,v,2),1))
t=B.u(t,A.m,v,A.e,A.j,0,A.p)
w=g?12:20
return new B.KJ(B.A(B.a([new B.a3(34,v,t,v),A.aw,B.C(new B.B(new B.L(0,0,0,w),B.u(B.a([new B.B(A.UU,B.d(e,v,v,v,v,v,v,A2.a4_,v,v,v),v),f],u),A.af,v,A.e,A.j,0,A.p),v),1)],u),A.af,v,A.e,A.j,0,v,v),v)},
awM(d,e,f){return this.b0Q(d,e,f,!1)},
bZO(){var w,v,u,t,s=this,r=null,q=s.d===A.k5?s.ga6j():s.gOs(),p=B.m(20),o=B.m(20),n=s.d===A.k5,m=n?D.bFx:D.bHc,l=B.a([new B.a9(0,A.G,(n?D.aar:D.Tk).j(0.35),A.cv,16)],x.V),k=B.m(12)
n=s.d===A.k5
w=n?A.hI:D.ahq
k=B.p(r,B.V(w,n?D.aar:D.Tk,r,r,r,30),A.h,r,r,new B.o(A.c,r,r,k,r,r,A.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=B.d(n,r,r,r,r,r,r,B.l(r,r,A.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===A.k5
t=u?22:13
v=B.d(v,r,1,A.Z,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,t,r,r,A.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=B.C(B.u(B.a([n,A.bw,v,A.au,B.A(B.a([D.bwS,A.d4,B.d(s.d===A.k5?"Tap to pay $"+B.dx(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,A.vd,r,r,r)],u),A.m,r,A.e,A.j,0,r,r)],u),A.F,r,A.e,A.j,0,A.p),1)
return B.aD(!1,A.X,!0,r,B.aH(!1,p,!0,B.er(B.A(B.a([k,A.ba,v,B.aF(r,r,r,r,D.bvX,r,r,r,w?r:new C.dMv(s,q),r,r,r,r,"Copy",r)],u),A.m,r,A.e,A.j,0,r,r),r,new B.o(r,r,r,o,l,m,A.n),r,A.acT,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gc5p(),r,r,r,r,r,r,r),A.h,A.K,0,r,r,r,r,r,A.ac)},
bzX(){var w,v,u,t,s,r,q,p,o=null,n=B.m(20),m=B.G(A.b0.j(0.35),A.r,1),l=x.p,k=B.a([],l)
for(w=this.gaoa().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new B.b3(12,12)
q=B.a([A.b0.j(0.28),A.b0.j(0.08)],u)
p=new B.ay(A.eN.j(0.4),1,A.r,-1)
k.push(B.p(A.B,new B.w(s,o,A.BM,o,o,o,o,o,o,o,o,o),A.h,o,o,new B.o(o,o,new B.c2(p,p,p,p),new B.bx(r,r,r,r),o,new B.a8(A.b4,A.bb,A.w,q,o,o),A.n),o,52,o,A.jX,o,o,o,42))}return B.p(o,B.u(B.a([B.A(k,A.m,o,A.b5,A.j,0,o,o),A.aa,B.A(B.a([B.C(B.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,B.l(o,o,A.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,A.a1,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),A.ab,B.hg(A.Yh,D.eU9,new C.dMr(this),B.fo(o,o,o,o,o,o,o,o,o,o,o,A.eN,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),A.m,o,A.e,A.j,0,o,o)],l),A.m,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(A.rp,o,m,n,o,o,A.n),o,o,o,o,A.bC,o,o,o)}}
C.qJ.prototype={
ad(){var w=this
return B.D(["id",w.a,"title",w.b,"start",w.c.aa(),"end",w.d.aa(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.qK.prototype={
ad(){var w=this
return B.D(["id",w.a,"when",w.b.aa(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gTr(){var w=this,v=B.a([],x.s),u=w.d
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
u=w.c
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
v.push(C.fNP(w.b))
u=w.e
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
return A.d.aF(v," \xb7 ")},
gkg(d){return this.c}}
C.li.prototype={
ad(){var w,v=this,u=B.R(x.N,x.z)
u.m(0,"type",v.a)
w=v.b
if(w.length!==0)u.m(0,"content",w)
w=v.c
if(w!=null&&w.length!==0)u.m(0,"url",w)
w=v.d
if(w!=null&&w.length!==0)u.m(0,"label",w)
return u}}
C.i7.prototype={
ad(){var w,v=this,u=B.R(x.N,x.z)
u.m(0,"id",v.a)
u.m(0,"question",v.b)
w=J.b4(v.c,new C.c3H(),x.P)
w=B.z(w,w.$ti.k("ai.E"))
u.m(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.m(0,"thumbnailPath",w)
u.m(0,"printable",v.e)
u.m(0,"sortOrder",v.f)
return u}}
C.hV.prototype={
ahB(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.hV(v,u,t,s,r,h==null?w.f:h)},
b6a(d){var w=null
return this.ahB(w,w,w,w,d,w)},
cz8(d,e,f){return this.ahB(d,e,null,null,null,f)},
b69(d){var w=null
return this.ahB(w,w,w,d,w,w)},
cyO(d,e){var w=null
return this.ahB(w,w,d,w,e,w)},
ad(){var w=this,v=C.hvB(w.c),u=w.e,t=B.S(u).k("I<1,a0<n,@>>")
u=B.z(new B.I(u,new C.c3F(),t),t.k("ai.E"))
return B.D(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.b4Y.prototype={}
C.Te.prototype={
S(){return new C.aAm(new B.ao(A.aq,$.at()),B.m6(0,null,null),B.a([],x.m))},
S2(d){return this.d.$1(d)}}
C.aAm.prototype={
Z(){var w,v=this
v.a0()
w=J.b4(v.a.c,new C.dQb(),x.i)
w=B.z(w,w.$ti.k("ai.E"))
A.d.aY(w,new C.dQc())
v.d=w
v.Hz()},
p(){var w=this.w
w.R$=$.at()
w.O$=0
this.x.p()
this.a2()},
ab3(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ab3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:u.Hz()
u.n(new C.dQ5(u))
t=u.a
t.toString
s=u.d
s===$&&B.c()
w=2
return B.b(t.S2(s),$async$ab3)
case 2:r=e
if(u.c!=null){u.n(new C.dQ6(u))
t=u.c.F(x.q).f
s=B.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.P(B.b0(null,null,null,r?A.dl:A.aH,null,A.q,null,s,null,A.S,null,null,null,null,null,null,null,null,null,null))}return B.h(null,v)}})
return B.i($async$ab3,v)},
a5w(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a5w=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&B.c()
s=new C.hV(q,"New Category",A.Ee,4284773515,D.arI,p.length)
t.n(new C.dPP(t,s))
t.Hz()
p=t.c
if(p==null){w=1
break}w=3
return B.b(B.cb(null,null,!0,null,new C.dPQ(s),p,null,!0,!0,x.i),$async$a5w)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.dPR(t,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a5w,v)},
ZS(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=A.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.n(new C.dQ2(t,p))
q.bG(0,A.c_)
q=t.a.e
s=t.d
s===$&&B.c()
w=3
return B.b(C.c3C(p,q,s),$async$ZS)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.dQ3(t,r))
$.aS.x1$.push(new C.dQ4(t))
case 1:return B.h(u,v)}})
return B.i($async$ZS,v)},
a7r(d){return this.bFR(d)},
bFR(d){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$a7r=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&B.c()
t=r[d]
r=u.c
r.toString
w=2
return B.b(B.cb(null,null,!0,null,new C.dPX(t),r,null,!0,!0,x.i),$async$a7r)
case 2:s=f
if(s!=null)u.n(new C.dPY(u,d,s))
return B.h(null,v)}})
return B.i($async$a7r,v)},
bDJ(d){this.n(new C.dPW(this,d))
this.Hz()},
Hz(){var w,v,u=this.d
u===$&&B.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].b6a(v)},
c2S(d,e){var w={}
w.a=e
this.n(new C.dQ1(w,this,d))},
Wt(d){return this.bUR(d)},
bUR(d){var w=0,v=B.j(x.H),u=this,t,s
var $async$Wt=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=B.eI(new C.dQ0(u,d),!1,null,x.H)
w=2
return B.b(B.a7(s,!1).cr(t),$async$Wt)
case 2:return B.h(null,v)}})
return B.i($async$Wt,v)},
bwh(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?B.a([A.fn,A.bj],l):B.a([A.pT,A.eo],l)
w=B.m(16)
v=B.G(m?A.db.j(0.35):A.dD,A.r,1)
u=B.V(A.dO,m?A.dD:A.e9,n,n,n,n)
t=B.C(B.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,B.l(n,n,m?A.aN:A.M,n,n,n,n,n,n,n,n,n,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.WE:A8.Kq
r=x.p
s=B.a([B.aH(!1,n,!0,B.A(B.a([u,A.ab,t,B.V(s,m?A.bP:A.al,n,n,n,n)],r),A.m,n,A.e,A.j,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dPT(o),n,n,n,n,n,n,n)],r)
if(o.r){u=B.a([A.T],r)
t=o.y
if(t.length!==0){q=(m?D.rd:A.c).j(0.65)
p=B.m(12)
u.push(B.p(n,B.jT(!0,n,o.x,new C.dPU(o,d),t.length,n,n,n,n,!1,!1),A.h,n,A.a6J,new B.o(q,n,n,p,n,n,A.n),n,n,n,n,A.ch,n,n,n))}u.push(A.P)
t=o.w
q=B.l(n,n,m?A.aN:A.M,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=B.l(n,n,m?A.bP:A.al,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?A.bj:A.aN
q=B.C(B.aK(n,A.U,!1,n,!0,A.q,n,B.aL(),t,n,n,n,n,n,2,B.bn(n,new B.b2(4,B.m(14),A.W),n,A.eF,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),A.z,!0,n,!0,n,!1,n,A.ad,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.dPV(o),n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,q,!0,A.a5,n,A.am,n,n,n,n),1)
m=o.f?n:o.gcgF()
p=B.bk(A.bh,n,n,n,n,n,A.iE,n,n,n,n,n)
u.push(B.A(B.a([q,new B.H9(t,A.bh,n),A.d4,B.bJ(o.f?A.pu:D.ahz,m,p)],r),A.dE,n,A.e,A.j,0,n,n))
A.d.v(s,u)}return B.dg(n,B.u(s,A.af,n,A.e,A.j,0,A.p),n,n,A.b9,new B.o(n,n,v,w,n,new B.a8(A.a_,A.a7,A.w,l,n,n),A.n),A.ia,n,n,A.Du,A.bC,n,n,n)},
B(d){var w,v=this,u=null,t=B.K(d).ax.a===A.H,s=new C.b4Y(t),r=t?A.dc:A.bO,q=t?A.dc:u,p=t?A.aN:A.M,o=B.d("Help Topics Admin",u,u,u,u,u,u,B.l(u,u,t?A.aN:A.M,u,u,u,u,u,u,u,u,u,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gbZU()
if(n)n=A.Qi
else n=B.V(A.wN,t?A.aN:A.M,u,u,u,u)
w=x.p
o=B.eB(B.a([B.hg(n,B.d("Save",u,u,u,u,u,u,B.l(u,u,t?A.aN:A.M,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=R.aQU(A.aK,u,O.SE,A.ns,D.eQT,v.gbsN())
q=v.bwh(s)
n=B.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,B.l(u,u,t?A.bP:A.al,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&B.c()
return B.cf(o,r,B.u(B.a([q,new B.B(A.Du,n,u),B.C(H.fS4(!1,new C.dQa(v,s),m.length,v.gc2R(),D.bfL,u,!1),1)],w),A.af,u,A.e,A.j,0,A.p),u,!1,!1,p,u)}}
C.Ny.prototype={
S(){return new C.b6M()}}
C.b6M.prototype={
Z(){var w,v=this
v.a0()
w=v.a.c
v.d=new B.ao(new B.bb(w.b,A.aZ,A.aL),$.at())
v.e=w.c
v.f=w.d},
p(){var w=this.d
w===$&&B.c()
w.R$=$.at()
w.O$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=B.K(d).ax.a===A.H,q=r?D.rd:A.c,p=B.d("Edit category",s,s,s,s,s,s,B.l(s,s,r?A.c:A.bi,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&B.c()
o=B.aK(s,A.U,!1,s,!0,A.q,s,B.aL(),o,s,s,s,s,s,2,D.bCX,A.z,!0,s,!0,s,!1,s,A.ad,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,A.a8,s,s,s,s,s,s,s,s,s,s,s,B.l(s,s,r?A.c:A.bi,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,A.a5,s,A.am,s,s,s,s)
w=x.aS
w=B.z(new B.I(D.bI9,new C.cED(t),w),w.k("ai.E"))
w=B.cd(A.bH,w,A.by,8,8)
v=x.gN
v=B.z(new B.I(D.cEb,new C.cEE(t),v),v.k("ai.E"))
u=x.p
v=B.cg(B.u(B.a([o,A.aa,w,A.aa,B.cd(A.bH,v,A.by,0,8)],u),A.m,s,A.e,A.R,0,A.p),A.q,s,A.z,s,s,s,s,A.ag)
return B.ei(B.a([B.bE(!1,A.de,s,s,!0,s,s,new C.cEF(d),s,s),B.bJ(A.pB,new C.cEG(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.YG.prototype={
S(){return new C.aCe()},
o2(d){return this.d.$1(d)}}
C.aCe.prototype={
Z(){this.a0()
this.d=B.bi(this.a.c.e,!0,x.u)},
ath(){var w=this.a,v=w.c,u=this.d
u===$&&B.c()
return w.o2(v.b69(u))},
a5y(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$a5y=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&B.c()
w=2
return B.b(u.aVS(new C.i7("q_"+1000*s,"",D.cCT,null,!1,r.length)),$async$a5y)
case 2:t=e
if(t!=null){u.n(new C.ezV(u,t))
u.ath()}return B.h(null,v)}})
return B.i($async$a5y,v)},
aVS(d){var w,v=this.c
v.toString
w=B.eI(new C.ezW(d),!1,null,x.u)
return B.a7(v,!1).cr(w)},
B(d){var w=this,v=null,u=B.K(d).ax.a===A.H,t=u?A.dc:A.bO,s=u?A.dc:v,r=u?A.aN:A.M,q=w.a.c
s=B.eB(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,B.d(q.b+" \u2014 Questions",v,v,v,v,v,v,B.l(v,v,u?A.aN:A.M,v,v,v,v,v,v,v,v,v,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=R.aQU(A.aK,v,O.SE,A.ns,D.eW9,w.gbtc())
q=w.d
q===$&&B.c()
q=q.length
if(q===0){q=B.as(B.d("No questions yet. Tap + Question.",v,v,v,v,v,v,B.l(v,v,u?A.bP:A.al,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=B.hF(v,new C.eA0(w,new C.b4Y(u)),q,D.bfU,v,A.ag,new C.eA1(),!1)
return B.cf(s,t,u,v,!1,!1,r,v)}}
C.YF.prototype={
S(){return new C.aCd()}}
C.aCd.prototype={
Z(){var w,v=this
v.a0()
w=v.a.c
v.d=new B.ao(new B.bb(w.b,A.aZ,A.aL),$.at())
w=B.bi(w.c,!0,x.bP)
v.e=w
if(A.d.gah(w))J.ch(v.e,D.a13)
w=v.a.c
v.f=w.d
v.r=w.e},
p(){var w=this.d
w===$&&B.c()
w.R$=$.at()
w.O$=0
this.a2()},
ab2(){var w=0,v=B.j(x.H),u=this,t
var $async$ab2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(Z.F3(78,1920),$async$ab2)
case 2:t=e
if(t!=null)u.n(new C.ezR(u,t))
return B.h(null,v)}})
return B.i($async$ab2,v)},
ac2(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ac2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=B.eI(new C.ezP(u),!1,null,x.dZ)
w=2
return B.b(B.a7(r,!1).cr(t),$async$ac2)
case 2:s=e
if(s!=null)u.n(new C.ezQ(u,s))
return B.h(null,v)}})
return B.i($async$ac2,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=B.K(a1).ax.a===A.H,g=h?A.dc:A.bO,f=h?A.dc:i,e=h?A.aN:A.M,d=B.d("Edit Question",i,i,i,i,i,i,B.l(i,i,h?A.aN:A.M,i,i,i,i,i,i,i,i,i,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=B.eB(B.a([B.dj(S.Yq,A.pB,new C.ezT(j,a1),B.bk(A.aK,i,i,i,A.c,i,i,i,i,i,i,i)),A.aw],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=B.d("Question thumbnail",i,i,i,i,i,i,B.l(i,i,h?A.aN:A.M,i,i,i,i,i,i,i,i,13,i,i,A.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=B.m(14)
w=j.f
v=h?A.bP:A.al
w=B.aJ(i,B.bu(e,K.aLZ(B.m(14),A.bM,140,A.zX,v,w,1/0),A.ap),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbZT(),i,i,i,i,i,i,!1,A.ae)
e=B.d("Question users will tap",i,i,i,i,i,i,B.l(i,i,h?A.aN:A.M,i,i,i,i,i,i,i,i,13,i,i,A.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?A.bj:A.aN
u=B.m(16)
t=B.G(h?A.aI:A.aJ,A.r,1)
s=j.d
s===$&&B.c()
r=B.l(i,i,h?A.aN:A.M,i,i,i,i,i,i,i,i,15,i,i,A.a1,i,i,!0,i,i,i,i,i,i,i,i)
v=B.p(i,B.A(B.a([B.C(B.aK(i,A.U,!1,i,!0,A.q,i,B.aL(),s,i,i,i,i,i,2,B.bn(i,A.et,i,A.bk,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l(i,i,h?A.bP:A.al,i,i,i,i,i,i,i,i,i,i,i,A.cp,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),A.z,!0,i,!0,i,!1,i,A.ad,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,A.a8,i,i,i,i,i,i,i,i,i,i,i,r,!0,A.a5,i,A.am,i,i,i,i),1),new B.H9(j.d,i,i)],a0),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(v,i,t,u,i,i,A.n),i,i,i,i,A.ef,i,i,i)
u=B.d("Printable document",i,i,i,i,i,i,B.l(i,i,h?A.aN:A.M,i,i,i,i,i,i,i,i,i,i,i,A.a1,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=B.it(A.aK,i,i,A.ah,i,new C.ezU(j),i,B.d("Shows a printable badge on this answer",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.al,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=B.d("Stored answer (not AI)",i,i,i,i,i,i,B.l(i,i,h?A.aN:A.M,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=B.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.al,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.rd:A.c
q=B.m(16)
p=B.m(16)
o=B.m(16)
n=B.G(A.bh.j(0.45),A.r,1)
m=B.p(i,D.buK,A.h,i,i,new B.o(A.bh.j(0.12),i,i,B.m(12),i,i,A.n),i,i,i,i,A.bk,i,i,i)
l=B.d("Open Document Editor",i,i,i,i,i,i,B.l(i,i,h?A.aN:A.M,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&B.c()
k=J.aa(k)
l=B.C(B.u(B.a([l,A.au,B.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.al,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),A.F,i,A.e,A.j,0,A.p),1)
return B.cf(d,g,B.cL(B.a([f,A.P,w,A.d1,e,A.P,v,A.aO,u,A.P,t,A.au,s,A.aa,B.aD(!1,A.X,!0,q,B.aH(!1,p,!0,B.p(i,B.A(B.a([m,A.es,l,B.V(A.A2,h?A.bP:A.al,i,i,i,16)],a0),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(i,i,n,o,i,i,A.n),i,i,i,i,A.fv,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gc4o(),i,i,i,i,i,i,i),A.h,r,0,i,i,i,i,i,A.ac)],a0),i,A.c1,i,i,A.ag,!1),i,!1,!1,i,i)}}
C.cW4.prototype={}
C.Tf.prototype={
S(){return new C.aAo(B.k6(!0,null,!0,!0,null,null,!1))}}
C.aAo.prototype={
Z(){var w,v,u,t,s,r,q=this
q.a0()
w=J.dF(q.a.c,new C.dQM())
w=B.z(w,w.$ti.k("E.E"))
q.e=w
v=B.a([],x.s)
for(w=J.aW(q.a.c);w.C();){u=w.gT(w)
switch(u.a){case"heading":v.push("## "+u.b)
break
case"text":u=u.b
if(A.a.i(u).length!==0)v.push(u)
break
case"bullets":for(u=u.b.split("\n"),t=u.length,s=0;s<t;++s){r=A.a.i(u[s])
if(r.length!==0)v.push("\u2022 "+r)}break
default:break}}w=A.d.aF(v,"\n\n")
q.d=new B.ao(new B.bb(w,A.aZ,A.aL),$.at())},
p(){var w=this.d
w===$&&B.c()
w.R$=$.at()
w.O$=0
this.f.p()
this.a2()},
ati(d,e){var w,v,u,t,s,r=this.d
r===$&&B.c()
r=r.a
w=r.b
if(!w.gep())return
v=r.a
r=w.a
u=w.b
t=d+A.a.al(v,r,u)+e
s=A.a.o4(v,r,u,t)
this.d.bG(0,new B.bb(s,B.h1(A.bn,r+t.length),A.aL))},
aU7(d){var w,v,u,t,s=this.d
s===$&&B.c()
s=s.a
w=s.a
v=A.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=A.a.o4(w,v,v,u)
this.d.bG(0,new B.bb(t,B.h1(A.bn,v+u.length),A.aL))},
a95(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a95=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(Z.F3(78,1920),$async$a95)
case 3:s=e
if(s==null){w=1
break}t.n(new C.dQs(t,s))
case 1:return B.h(u,v)}})
return B.i($async$a95,v)},
W_(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$W_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hQ().a34(A.er),$async$W_)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return B.b(s.f8(),$async$W_)
case 4:t.n(new r.dQx(t,e))
case 1:return B.h(u,v)}})
return B.i($async$W_,v)},
a96(){var w=0,v=B.j(x.H),u=this,t,s,r,q
var $async$a96=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.at()
s=new B.ao(A.aq,t)
r=new B.ao(new B.bb("https://",A.aZ,A.aL),t)
q=u.c
q.toString
w=2
return B.b(B.cb(null,null,!0,null,new C.dQv(s,r),q,null,!0,!0,x.y),$async$a96)
case 2:if(e===!0)u.n(new C.dQw(u,s,r))
s.R$=t
s.O$=0
r.R$=t
r.O$=0
return B.h(null,v)}})
return B.i($async$a96,v)},
bxc(){var w,v,u,t,s,r=null,q=B.a([],x.a),p=this.d
p===$&&B.c()
p=A.a.fl(p.a.a,B.ad("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.I(p,new C.dQo(),B.S(p).k("I<1,n>")).bZ(0,new C.dQp())
for(p=J.aW(w.a),v=new B.hY(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gT(p)
if(A.a.a_(s,"## "))q.push(new C.li("heading",A.a.i(A.a.aU(s,3)),r,r))
else if(A.a.a_(s,"\u2022 ")||A.a.a_(s,"- "))q.push(new C.li("bullets",new B.I(B.a(s.split("\n"),u),new C.dQq(),t).bZ(0,new C.dQr()).aF(0,"\n"),r,r))
else q.push(new C.li("text",s,r,r))}p=this.e
p===$&&B.c()
A.d.v(q,p)
if(q.length===0)q.push(D.a13)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.K(d).ax.a===A.H,m=new C.cW4(n),l=n?A.aG:A.fr,k=B.d(p.a.d,o,o,o,o,o,o,A.cq,o,o,o),j=x.p
k=B.eB(B.a([B.dj(S.Yq,A.a4A,new C.dQC(p,d),B.bk(A.aK,o,o,o,A.c,o,o,o,o,o,o,o)),A.ab],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?A.d3:A.iP
v=B.cd(A.bH,B.a([p.uJ(E.Kr,"Bold",new C.dQD(p),m),p.uJ(E.WG,"Italic",new C.dQE(p),m),p.uJ(E.aeY,"Underline",new C.dQF(p),m),p.uJ(Ac.WN,"Heading",new C.dQG(p),m),p.uJ(O.Ks,"Bullets",new C.dQH(p),m),p.uJ(E.aeX,"Align",new C.dQI(),m),p.uJ(A.DV,"Link",p.gbS4(),m),p.uJ(A.p_,"Image",p.gbS3(),m),p.uJ(Y.X_,"Video",p.gbS5(),m),p.uJ(M.Y5,"Signature",new C.dQJ(p),m),p.uJ(Y.Kt,"Divider",new C.dQK(p),m)],j),A.by,4,4)
w=B.p(o,B.u(B.a([v,A.ar,B.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,B.l(o,o,n?A.fM:A.bv,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),A.af,o,A.e,A.j,0,A.p),A.h,w,o,o,o,o,o,o,E.adT,o,o,o)
v=n?A.dc:A.c
u=B.m(12)
t=B.G(n?A.fs:A.ep,A.r,1)
s=B.a([new B.a9(0,A.G,A.x.j(n?0.35:0.08),A.cD,16)],x.V)
r=p.d
r===$&&B.c()
q=B.l(o,o,n?A.iz:A.aG,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=B.a([w,B.C(new B.B(A.c1,B.p(o,B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),r,o,o,o,o,o,2,B.bn(o,A.et,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.l(o,o,n?A.fM:A.bv,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!0,p.f,A.ad,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,q,!0,A.a5,o,A.am,o,o,o,o),A.h,o,o,new B.o(v,o,t,u,s,o,A.n),o,o,o,o,A4.zH,o,o,o),o),1)],j)
n=p.e
n===$&&B.c()
if(n.length!==0){n=new B.hw(n,B.S(n).k("hw<1>"))
j.push(B.p(o,B.cd(A.bH,n.gdH(n).di(0,new C.dQL(p,m),x.g5).dz(0),A.by,0,8),A.h,o,o,o,o,o,o,o,A.JN,o,o,o))}return B.cf(k,l,B.u(j,A.m,o,A.e,A.j,0,A.p),o,!1,!1,o,o)},
uJ(d,e,f,g){var w=null,v=g.a,u=v?A.dc:A.c,t=B.m(8),s=B.m(8)
return B.hJ(B.aD(!1,A.X,!0,t,B.aH(!1,s,!0,new B.B(A.ch,B.V(d,v?A.iz:A.aG,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.h,u,0,w,w,w,w,w,A.ac),w,e,w,w)}}
C.d83.prototype={}
C.axY.prototype={
a3(){return"_KbView."+this.b}}
C.an8.prototype={
S(){return new C.aAn(D.aMF)},
cFH(d,e){return this.e.$2$size(d,e)}}
C.aAn.prototype={
gavX(){var w,v
if(this.e==null)return null
for(w=J.aW(this.a.c);w.C();){v=w.gT(w)
if(v.a===this.e)return v}return null},
gciN(){var w,v,u,t,s,r=this.gavX()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
bZV(d){this.n(new C.dQl(this,d))},
c5x(d){this.n(new C.dQm(this,d))},
bvv(){this.n(new C.dQd(this))},
bvx(){this.n(new C.dQe(this))},
gb0o(){var w=B.bi(this.a.c,!0,x.i)
A.d.aY(w,new C.dQn())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.K(d).ax.a===A.H,f=new C.d83(g),e=x.O
e=g?B.a([A.M.j(0.9),A.bj.j(0.85)],e):B.a([A.eo.j(0.55),A.lN.j(0.45)],e)
w=B.m(22)
v=B.G((g?A.aI:A.hp).j(0.55),A.r,1)
switch(i.d.a){case 0:g=i.bwt(f)
break
case 1:g=i.gavX()
g.toString
g=i.bxa(f,g)
break
case 2:u=i.gavX()
u.toString
t=i.gciN()
t.toString
s=B.aX(u.d)
r=B.m(16)
r=B.p(h,B.d(t.b,h,h,h,h,h,h,D.etp,h,h,h),A.h,h,h,new B.o(A.aK,h,h,r,h,h,A.n),h,h,h,h,A.bC,h,h,1/0)
q=g?A.aG:A.c
p=B.m(16)
o=B.G(g?A.aI:A.aJ,A.r,1)
n=B.a([new B.a9(0,A.G,A.x.j(g?0.28:0.06),A.e6,10)],x.V)
m=g?A.fn:A.pT
l=B.m(8)
k=B.V(A.p5,g?A.dD:A.e9,h,h,h,14)
j=x.p
j=B.u(B.a([new C.axW(f,i.gbvw(),u.c,s,"Answer",h),B.C(B.cL(B.a([r,A.aa,B.p(h,B.u(B.a([B.p(h,B.A(B.a([k,A.ez,B.d("Stored answer",h,h,h,h,h,h,B.l(h,h,g?A.dD:A.e9,h,h,h,h,h,h,h,h,11,h,h,A.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),A.m,h,A.e,A.R,0,h,h),A.h,h,h,new B.o(m,h,h,l,h,h,A.n),h,h,h,A.e3,A.h_,h,h,h),new C.aWL(t.c,t.e,f,h)],j),A.F,h,A.e,A.j,0,A.p),A.h,h,h,new B.o(q,h,o,p,n,h,A.n),h,h,h,h,A.c1,h,h,1/0)],j),h,A.bfD,h,h,A.ag,!1),1)],j),A.af,h,A.e,A.j,0,A.p)
g=j
break
default:g=h}return B.p(h,g,A.ap,h,h,new B.o(h,h,v,w,h,new B.a8(A.b4,A.bb,A.w,e,h,h),A.n),h,h,h,A.iX,h,h,h,h)},
aRU(d){var w,v,u,t=null,s=d.a,r=s?D.rd:A.c,q=A.aA.j(0.22)
q=B.a([new B.a9(0,A.G,q,A.J,14),new B.a9(0,A.G,A.x.j(s?0.28:0.06),A.J,8)],x.V)
w=B.G(s?A.aI:A.hp,A.r,2)
v=this.a
u=x.p
q=B.a([B.p(t,B.hN(v.cFH(v.d,72),A.ap),A.h,t,t,new B.o(r,t,w,t,q,t,A.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)A.d.v(q,B.a([A.ar,B.d("Tap to switch",t,t,t,t,t,t,B.l(t,t,A.dl,t,t,t,t,t,t,t,t,12,t,t,A.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return B.u(q,A.m,t,A.e,A.j,0,A.p)},
bwt(d){var w,v,u=this,t=null,s=u.a.r
s=B.as(s!=null?B.aJ(t,u.aRU(d),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,A.ae):u.aRU(d),t,t,t)
w=d.a
v=B.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,B.l(t,t,w?A.aN:A.M,t,t,t,t,t,t,t,t,20,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t)
return B.cL(B.a([s,A.az,v,A.ar,B.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,B.l(t,t,w?A.bP:A.al,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),A.L,t,t),A.bu,B.ig(!0,t,t,A.z,F.aHS,new C.dQg(u,d),u.gb0o().length,t,A.dJ,A.ag,!0)],x.p),t,D.bfW,t,t,A.ag,!1)},
bxa(d,e){var w,v,u,t,s=null,r=B.bi(e.e,!0,x.u)
A.d.aY(r,new C.dQi())
w=B.aX(e.d)
v=d.a
u=B.d("Tap a question to read the stored answer.",s,s,s,s,s,s,B.l(s,s,v?A.bP:A.al,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=B.as(B.d("No questions in this category yet.",s,s,s,s,s,s,B.l(s,s,v?A.bP:A.al,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=B.hF(s,new C.dQj(this,r,d,e),t,A.ud,s,A.ag,new C.dQk(),!1)
return B.u(B.a([new C.axW(d,this.gbvu(),e.c,w,e.b,s),new B.B(Ah.wo,u,s),B.C(v,1)],x.p),A.af,s,A.e,A.j,0,A.p)}}
C.axW.prototype={
B(d){var w=this,v=null,u=w.c.a,t=B.aF(v,v,v,v,B.V(A.eq,u?A.aN:A.M,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=B.m(12)
q=B.p(v,B.V(w.e,s,v,v,v,22),A.h,v,v,new B.o(r,v,v,q,v,v,A.n),v,v,v,v,A.ch,v,v,v)
return new B.B(D.bj6,B.A(B.a([t,q,A.aw,B.C(B.d(w.r,v,v,v,v,v,v,B.l(v,v,u?A.aN:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v),v)}}
C.a9m.prototype={
B(d){var w=null,v=this.c,u=B.aX(v.d),t=this.d.a,s=t?D.rd:A.c,r=B.m(14),q=B.m(14),p=B.m(14),o=B.G(t?A.aI:A.aJ,A.r,1),n=B.a([new B.a9(0,A.G,A.x.j(t?0.28:0.06),A.dG,6)],x.V),m=u.j(0.15),l=B.m(12)
l=B.p(w,B.V(v.c,u,w,w,w,22),A.h,w,w,new B.o(m,w,w,l,w,w,A.n),w,40,w,w,w,w,w,40)
return new B.fN(1,B.aD(!1,A.X,!0,r,B.aH(!1,q,!0,B.p(w,B.u(B.a([l,A.ar,B.d(v.b,w,2,A.Z,w,w,w,B.l(w,w,t?A.aN:A.M,w,w,w,w,w,w,w,w,10,w,w,A.I,w,1.1,!0,w,w,w,w,w,w,w,w),A.L,w,w)],x.p),A.m,w,A.b5,A.j,0,A.p),A.h,w,w,new B.o(w,w,o,p,n,w,A.n),w,w,w,w,A.ch,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),A.h,s,0,w,w,w,w,w,A.ac),w)}}
C.aWL.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=B.a([],q)
if(this.d){w=r.a
v=w?A.fn:A.pT
u=B.m(8)
t=B.V(A.rY,w?A.dD:A.e9,s,s,s,14)
p.push(B.p(s,B.A(B.a([t,A.d4,B.d("Printable document",s,s,s,s,s,s,B.l(s,s,w?A.dD:A.e9,s,s,s,s,s,s,s,s,10,s,s,A.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),A.m,s,A.e,A.R,0,s,s),A.h,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,A.cK,A.ew,s,s,s))}A.d.v(p,J.b4(this.c,new C.c3D(r),x.l))
return B.u(p,A.F,s,A.e,A.j,0,A.p)}}
C.a9e.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new B.B(D.bdR,B.d(q.b,r,r,r,r,r,r,B.l(r,r,s.d.a?A.aN:A.M,r,r,r,r,r,r,r,r,15,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new B.B(A.hr,B.bu(B.m(12),K.aLZ(r,A.bM,160,A.p_,r,w,1/0),A.ap),r)
case"video":v=q.c
q=v==null?q.b:v
return new B.B(A.hr,new C.axX(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new B.B(A.wj,B.aH(!1,r,!0,B.d(q,r,r,r,r,r,r,B.l(r,r,s.d.a?A.cJ:A.bh,r,A.mb,r,r,r,r,r,r,r,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cyj(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=B.jm(v?A.aI:A.aJ,r,r,r,r,r)
q=B.d(q.b,r,r,r,r,r,r,B.l(r,r,v?A.ct:A.aI,r,r,r,r,r,r,r,r,r,A.cz,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=B.p(r,r,A.h,v?A.bP:A.al,r,r,r,1,r,r,r,r,r,120)
return new B.B(A.zu,B.u(B.a([u,q,A.aO,t,A.au,B.d("Signature",r,r,r,r,r,r,B.l(r,r,v?A.bP:A.al,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.F,r,A.e,A.j,0,A.p),r)
case"bullets":v=x.cl
q=B.z(new B.cR(new B.a4(B.a(q.b.split("\n"),x.s),new C.cyk(),x.cc),new C.cyl(s),v),v.k("E.E"))
return new B.B(A.lm,B.u(q,A.F,r,A.e,A.j,0,A.p),r)
case"divider":return new B.B(A.hr,B.jm(s.d.a?A.aI:A.aJ,r,r,r,r,r),r)
default:q=q.b
if(A.a.i(q).length===0)return A.bF
return new B.B(A.fh,C.hq0(q,s.d),r)}}}
C.axX.prototype={
S(){return new C.bcL()}}
C.bcL.prototype={
Z(){this.a0()
this.ab4()},
ab4(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$ab4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=A.a.i(r.a.c)
if(J.aa(n)!==0)p=!J.cT(n,"http")&&!J.cT(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=B.W2(B.cq(n,0,null),null)
w=7
return B.b(J.afg(q),$async$ab4)
case 7:if(r.c==null){w=1
break}r.n(new C.d84(r,q))
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
return B.i($async$ab4,v)},
p(){var w=this.d
if(w!=null)w.p()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?A.bj:A.f_
u=B.m(12)
return B.p(A.B,B.V(A.pa,w?A.bP:A.al,t,t,t,36),A.h,t,t,new B.o(v,t,t,u,t,t,A.n),t,120,t,t,t,t,t,t)}w=B.m(12)
v=s.a
u=J.afe(v)
return B.bu(w,new B.fN(u,new B.am(A.B,t,A.a9,A.q,B.a([new B.yZ(s,t),B.aF(t,t,t,t,B.V(v.f?A.af4:A.Ku,A.c,t,t,t,44),t,t,t,new C.d86(this,s),t,t,t,t,t,t)],x.p),t),t),A.ap)}}
C.anU.prototype={
a3(){return"NgmyMusicLane."+this.b}}
C.H_.prototype={
a3(){return"NgmyMusicRhymeScheme."+this.b}}
C.qP.prototype={}
C.anb.prototype={
S(){var w=null
return new C.aAp(new B.ao(A.aq,$.at()),B.m6(0,w,w),B.a([],x.m),D.B0,D.aA4,w,w)},
gdQ(){return this.d}}
C.aAp.prototype={
Z(){var w,v=this
v.a0()
w=B.bh(null,A.mu,null,1,null,v)
w.f2(0,!0)
v.as!==$&&B.aO()
v.as=w
v.z=A.d.gI(D.a_F).a},
p(){var w=this,v=w.as
v===$&&B.c()
v.p()
v=w.d
v.R$=$.at()
v.O$=0
w.e.p()
w.bpa()},
gamK(){var w,v,u,t,s=this.x
if(s===D.B1)return null
s=s===D.B0
w=s?D.a_F:D.ZX
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?A.d.gI(w):null},
cjy(d){return this.n(new C.dR_(this,d))},
avK(){$.aS.x1$.push(new C.dQR(this))},
Hq(d){return this.cj0(d)},
aU8(){return this.Hq(null)},
cj0(b0){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$Hq=B.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=A.a.i(b0==null?q.d.a.a:b0)
if(J.aa(a8)===0||q.r||q.a.e){w=1
break}w=3
return B.b(q.a.f.$0(),$async$Hq)
case 3:e=b2
if(!e){w=1
break}B.jC()
d=a8.toLowerCase()
p=A.a.q(d,"continue")||A.a.q(d,"keep going")||A.a.q(d,"go on")||A.a.q(d,"next verse")||A.a.q(d,"more lyrics")||A.a.q(d,"endelea")||A.a.q(d,"endelea na")||A.a.q(d,"ongeza")||A.a.q(d,"tuendelee")
a0=q.f
a1=A.d.be(a0,new C.dQT())
o=!p&&!a1
d=a8.toLowerCase()
if(!(A.a.q(d,"fix")||A.a.q(d,"rewrite")||A.a.q(d,"re-write")||A.a.q(d,"rhyme better")||A.a.q(d,"better rhyme")||A.a.q(d,"sound better")||A.a.q(d,"improve")||A.a.q(d,"polish")||A.a.q(d,"make it rhyme")||A.a.q(d,"boresha")||A.a.q(d,"rekebisha")||A.a.q(d,"endeleza mistari")))a2=C.fXr(a8)&&a1
else a2=!0
n=a2
a3=a8
d=a3.toLowerCase()
a4=!0
if(!A.a.q(d,"bible"))if(!A.a.q(d,"scripture")){if(!A.a.q(d,"biblia"))if(!A.a.q(d,"andiko"))if(!A.a.q(d,"gospel verse")){a5=B.ad("\\b\\d+\\s*:\\s*\\d+\\b",!0,!1,!1,!1)
if(!a5.b.test(a3)){a3=B.ad("\\b(genesis|exodus|leviticus|numbers|deuteronomy|psalm|proverbs|isaiah|jeremiah|matthew|mark|luke|john|romans|corinthians|galatians|ephesians|philippians|revelation)\\b",!1,!1,!1,!1)
a3=a3.b.test(d)}else a3=a4}else a3=a4
else a3=a4
else a3=a4
a4=a3}m=a4
l=C.fXr(a8)&&!p
q.n(new C.dQU(q,a8))
q.avK()
k=A.a.i(q.a.c)
if(J.aa(k)===0){q.n(new C.dQV(q))
q.avK()
w=1
break}t=5
j=B.mD(k)
i=new B.I(a0,new C.dQW(),B.S(a0).k("I<1,n>")).aF(0,"\n\n")
a0=C.hIR(m,p,o,q.x,n,q.y,q.gamK(),l)
a3=J.aa(i)!==0?"--- Conversation so far ---\n"+B.t(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+B.t(a8)
w=8
return B.b(B.qh(j,h,A.h2,null),$async$Hq)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=A.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=A.a.i(a0)}else a6=L.bxg(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.n(new C.dQX(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.n(new C.dQY(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.n(new C.dQZ(q))
q.avK()
w=r.pop()
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Hq,v)},
bB4(){return this.Hq("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=B.K(d).ax.a===A.H,p=q?A.D2:D.b5W,o=x.p
o=B.a([B.u(B.a([B.C(s.cig(q),1),s.bAj(q)],o),A.m,r,A.e,A.j,0,A.p)],o)
if(s.f.length!==0&&!s.r){w=A.aM.j(0.55)
v=s.r?r:s.gbB3()
u=B.m(28)
t=B.a([A.aM,A.b_],x.O)
o.push(B.an(78,B.aD(!1,A.X,!0,r,B.aH(!1,r,!0,B.er(D.dMb,r,new B.o(r,r,r,u,B.a([new B.a9(0,A.G,A.aM.j(0.45),A.cD,16)],x.V),new B.a8(A.a_,A.a7,A.w,t,r,r),A.n),r,r,r),A.qO,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),A.h,A.K,10,r,w,A.qO,r,r,A.ac),r,r,r,14,r,r))}return B.p(r,new B.am(A.V,r,A.a9,A.q,o,r),A.h,p,r,r,r,r,r,r,r,r,r,r)},
cig(d){var w,v,u,t=this,s=null
if(t.x===D.B1)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=B.a([B.fBz(s,!1,A.K,0,0,w,B.fxX(t.cnK(d),A.SY,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=B.V(A.ahr,A.aA.j(0.5),s,s,s,52)
w.push(B.b2g(new B.B(A.em,B.u(B.a([u,A.az,B.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,B.l(s,s,d?A.aB:A.dx,s,s,s,s,s,s,s,s,14,s,s,A.a1,s,1.45,!0,s,s,s,s,s,s,s,s),A.L,s,s),A.az,B.cd(A.fB,B.a([t.afd("Full bongo love song ABAB",d),t.afd("Mix: group vs private jet \u2014 which flies?",d),t.afd("Song from John 3:16 + matching verses",d),t.afd("Fix my rhyme \u2014 paste your lines",d)],v),A.by,8,8)],v),A.m,s,A.b5,A.j,0,A.p),s),!1))}else{v=t.r?1:0
w.push(new B.nn(D.bev,B.Vu(new B.nX(new C.dQS(t,d),u+v,!0,!0,!0,0,B.rg(),s)),s))}return B.uG(0,s,A.q,t.e,A.z,s,s,A6.a6F,s,s,!1,s,A.ag,!1,w)},
cnK(d){var w=this.as
w===$&&B.c()
return B.c4(w,new C.dR6(this,d),null)},
cnM(d){var w,v=this,u=null,t=B.m(14),s=v.r?u:new C.dR8(v),r=A.x.j(d?0.35:0.06),q=B.m(14),p=B.G(A.bc.j(0.35),A.r,1),o=v.gamK()
o=o==null?u:o.c
o=B.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,A.H5,u,u,u)
w=v.gamK()
w=w==null?u:w.b
if(w==null)w="Style"
w=B.C(B.d(w,u,u,u,u,u,u,B.l(u,u,d?A.c:A.bi,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.p(u,B.A(B.a([o,A.ab,w,B.V(v.w?A.KT:A.qh,A.bc,u,u,u,20)],x.p),A.m,u,A.e,A.j,0,u,u),A.h,u,u,new B.o(r,u,p,q,u,u,A.n),u,u,u,u,A.rF,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),A.h,A.K,0,u,u,u,u,u,A.ac)},
arM(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=B.a([A.aW,A.aS],x.O)
break
case 1:w=B.a([A.bh,A.cJ],x.O)
break
case 2:w=B.a([A.bz,A.aA],x.O)
break
default:w=n}v=m?6:0
u=B.m(14)
t=B.m(14)
s=this.r?n:new C.dQQ(this,d)
r=B.m(14)
w=m?new B.a8(A.a_,A.a7,A.w,w,n,n):n
if(m)q=n
else q=A.x.j(g?0.3:0.05)
p=B.d(f,n,n,n,n,n,n,A.H5,n,n,n)
if(m)o=A.c
else o=g?A.ak:A.bi
return B.C(B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.dg(n,B.u(B.a([p,B.d(e,n,n,n,n,n,n,B.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),A.m,n,A.e,A.j,0,A.p),n,n,A.b9,new B.o(q,n,n,r,n,w,A.n),A.X,n,n,n,A.jW,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),A.h,n,v,n,n,n,n,n,A.ac),1)},
cnN(d,e){var w,v,u,t=this,s=null,r=t.x===D.B0?t.z:t.Q,q=B.m(20)
if(r===d.a)r=A.bc.j(e?0.25:0.15)
else r=A.x.j(e?0.2:0.04)
w=B.m(20)
v=t.r?s:new C.dR9(t,d)
u=B.d(d.c,s,s,s,s,s,s,A.QB,s,s,s)
return B.aD(!1,A.X,!0,q,B.aH(!1,w,!0,new B.B(A.fF,B.A(B.a([u,A.d4,B.d(d.b,s,s,s,s,s,s,B.l(s,s,e?A.c:A.bi,s,s,s,s,s,s,s,s,10,s,s,A.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.m,s,A.e,A.R,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),A.h,r,0,s,s,s,s,s,A.ac)},
afd(d,e){var w=null,v=B.d(d,w,w,w,w,w,w,E.a4s,w,w,w),u=A.aA.j(e?0.2:0.1)
return B.n_(w,u,v,w,this.r?w:new C.dR0(this,d),w,w,w)},
bAj(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=B.m(22),o=d?A.M.j(0.95):A.c,n=B.G(A.aA.j(0.2),A.r,1),m=x.p,l=B.a([],m)
if(q>0)l.push(new B.B(G.adE,B.d("$"+A.k.ab(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,B.l(r,r,A.aM.j(0.85),r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=B.l(r,r,d?A.c:A.bi,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.B1?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=B.C(B.aK(r,A.U,!1,r,!0,A.q,r,B.aL(),w,r,r,r,r,r,2,B.bn(r,A.et,r,A.h0,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.l(r,r,d?A.c3:A.hU,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.z,!0,r,!0,r,!1,r,A.ad,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.dQN(s),r,!1,r,r,!1,r,!0,r,A.a8,r,r,r,r,r,r,r,r,r,r,r,v,!0,A.a5,r,A.am,r,r,r,r),1)
u=s.r
t=u?r:new C.dQO(s)
l.push(B.A(B.a([v,new B.H9(w,A.aA,r),B.aD(!1,A.X,!0,r,B.aH(!1,r,!0,B.er(u?D.dMl:D.bx0,r,D.aSk,42,r,42),A.cE,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),A.h,r,0,r,r,A.cE,r,r,A.ac)],m),A.dE,r,A.e,A.j,0,r,r))
return B.p(r,B.u(l,A.af,r,A.e,A.R,0,A.p),A.h,r,r,new B.o(o,r,n,p,r,r,A.n),r,r,r,A.ub,A.ace,r,r,r)}}
C.aIk.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.Tg.prototype={
ad(){var w=this
return B.D(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.Xq.prototype={
S(){return new C.axp(null,null)},
baQ(){return this.f.$0()}}
C.axp.prototype={
Z(){var w,v=this,u=null
v.a0()
w=B.bh(u,D.bcW,u,1,u,v)
w.cn(0)
v.d!==$&&B.aO()
v.d=w
w=B.bh(u,A.oS,u,1,u,v)
w.f2(0,!0)
v.e!==$&&B.aO()
v.e=w
w=B.bh(u,A.o1,u,1,u,v)
w.cF(0)
v.f!==$&&B.aO()
v.f=w
w=B.bh(u,A.wd,u,1,u,v)
w.cn(0)
v.r!==$&&B.aO()
v.r=w},
p(){var w=this,v=w.d
v===$&&B.c()
v.p()
v=w.e
v===$&&B.c()
v.p()
v=w.f
v===$&&B.c()
v.p()
v=w.r
v===$&&B.c()
v.p()
w.bo1()},
bZX(){var w=this.d
w===$&&B.c()
w.en(0).bw(new C.d5E(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(B.aG(d,A.bN,x.w).w.a.a-32,360),h=A.x.j(0.82),g=k.gbZW(),f=x.l,e=J.e0(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&B.c()
e[v]=new B.BO(new C.d5F(k,v,d),j,w,j)}f=B.z(e,f)
w=k.d
w===$&&B.c()
u=B.m(28)
t=B.G(A.c.j(0.22),A.r,1.5)
s=B.a([new B.a9(2,A.G,A.b_.j(0.35),A.J,40),new B.a9(0,A.G,A.aK.j(0.25),A.fz,28)],x.V)
r=k.e
r===$&&B.c()
q=k.r
q===$&&B.c()
q=B.c4(new B.h3(B.a([r,q],x.U)),new C.d5G(k),j)
r=B.nm(A.j2,D.eTy,new C.d5H())
p=B.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,B.l(j,j,A.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,A.cp,j,1.45,!0,j,j,j,j,j,j,j,j),A.L,j,j)
o=x.p
n=B.A(B.a([k.aU9(A.jZ,"Resets in 24h"),A.ab,k.aU9(A.p5,"Help Topics ready")],o),A.m,j,A.b5,A.j,0,j,j)
m=B.a([],o)
k.a.toString
l=A.c.j(0.35)
m.push(B.C(B.dU(D.eOs,new C.d5I(k),B.d9(j,j,j,j,j,j,j,j,j,A.ak,j,j,A.lS,j,new B.b5(B.m(14),A.W),new B.ay(l,1,A.r,-1),j,j,j,j)),1))
k.a.toString
m.push(A.aw)
k.a.toString
l=B.m(14)
m.push(B.C(B.bJ(D.eTp,g,B.bk(A.aK,j,j,6,A.c,j,A.lS,A.aK.j(0.5),new B.b5(l,A.W),j,j,j)),1))
f.push(B.as(B.aJ(j,B.c4(w,new C.d5J(k),B.p(j,B.u(B.a([q,A.az,r,A.T,p,A.P,n,A.bu,B.A(m,A.m,j,A.e,A.j,0,j,j)],o),A.m,j,A.e,A.R,0,A.p),A.h,j,j,new B.o(j,j,t,u,s,D.bEK,A.n),j,j,j,j,A7.adw,j,j,i)),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.d5K(),j,j,j,j,j,j,!1,A.ae),j,j,j))
return B.aD(!1,A.X,!0,j,B.aJ(j,new B.am(A.V,j,A.a9,A.q,f,j),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,A.ae),A.h,h,0,j,j,j,j,j,A.ac)},
aU9(d,e){var w=null,v=A.c.j(0.08),u=B.m(20),t=B.G(A.c.j(0.12),A.r,1)
return B.p(w,B.A(B.a([B.V(d,A.b_,w,w,w,13),A.ez,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.R,0,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.fF,w,w,w)}}
C.aHe.prototype={
aN(){this.aV()
this.aS()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdB())
w.aX$=null
w.a2()}}
C.LT.prototype={}
C.pl.prototype={}
C.anI.prototype={
S(){return new C.aAL(B.a([],x.E),B.a([],x.s))}}
C.aAL.prototype={
gan7(){return A.k.D(B.Ji(this.a.c.a,new C.e_A(this)),0,1/0)},
a5G(){var w,v=this,u=v.d,t=v.gan7()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)B.qg(u.a,t,!0,!1)},
HU(d,e){var w,v,u,t=this,s=t.gan7(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gan7()
if(w<v-0.005)B.h1q(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)B.qg(u.a,w,!0,!1)
B.qg(t.a.c.a,w,!0,!1)
B.BA(!0,!1,w,t.a.c.a)},
Z(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a0()
$.aS.c_$.push(o)
w=$.GQ+1
$.GQ=w
if(w===1){w=$.fPe
if(w!=null)w.$0()}v=$.fA_.h(0,A.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=B.bi(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=B.bi(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=B.lq(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,A.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=B.aLE(u,A.k.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new B.uy(w,u,r,q,s.e,p)}o.d=t}o.Nj()
o.a5G()
$.aS.x1$.push(new C.e0g(o))
o.Q=B.dE(A.ng,new C.e0h(o))
o.as=B.dE(A.fE,new C.e0i(o))},
p(){var w=this,v=w.Q
if(v!=null)v.a9(0)
v=w.as
if(v!=null)v.a9(0)
$.aS.hE(w)
C.hi0()
w.a2()},
cpS(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new B.N(Date.now(),0,!1)
v=p.r
if(!C.a5o(v,w)){if(C.fA1(p,q.e)){q.n(new C.e_Z(q,p))
q.zq(!1,!0,!0)}else if(q.c!=null)q.n(new C.e0_())
return}if(!C.c5S(v.c?v.bO():v)){q.n(new C.e00(p))
q.aUi(!1)
return}u=p.gBc()
if(u<=0)return
t=w.cU(B.bX(B.bv(w),B.bB(w),B.bL(w),12,0,0,0,0))
s=C.fA2(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.n(new C.e01())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(A.d.be(q.e,new C.e02(r))){q.n(new C.e03(p,w,u))
return}q.n(new C.e04(q,p,u,w))
q.atP(new B.cQ(r,p.a,u,A.fA,A.eX,"Clock-in daily earnings (local)",null,null,A.cc,w))},
iM(d){if(d===A.fm)this.Dm()},
Nj(){var w,v,u,t,s,r,q,p=this.d
if(p==null)return
w=this.a.c
w.e=p.e
w.f=p.f
w.r=p.r
w.rx=p.rx
w.fr=p.fr
w.fx=p.fx
w.fy=p.fy
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
q=new B.uy(u,t,s,r,v.e,q)
u=q}w.x=u},
PU(d){return this.cox(d)},
cox(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$PU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.Nj()
t.HU(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return B.b(x.r.b(s)?s:B.dR(s,x.H),$async$PU)
case 3:case 1:return B.h(u,v)}})
return B.i($async$PU,v)},
Dm(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$Dm=B.e(function(d,e){if(d===1){s.push(e)
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
return B.b(H.yn(q.w,k,l,j,m,!1,n),$async$Dm)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.n(new C.e_U(q,p))
q.PU(!1)}w=8
return B.b(q.I5(),$async$Dm)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=B.a5(h)
$.ak.$1("[growth income] pull wallet: "+B.t(o))
w=9
return B.b(q.I5(),$async$Dm)
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
return B.i($async$Dm,v)},
LN(d){return this.buI(d)},
buH(){return this.LN(null)},
buI(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$LN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return B.b(B.aw(),$async$LN)
case 3:s=f
r=A.a.i(t.a.c.a.toLowerCase())
q=B.d8(t.w,x.N)
r=s.rm("ngmy_gi_credited_txn_ids_"+r)
q.v(0,r==null?B.a([],x.s):r)
j.a=0
p=B.a([],x.s)
o=d==null?null:B.km(d,B.S(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,B.J)(r),++m){l=r[m]
k=l.a
if(q.q(0,k))continue
if(o!=null&&!o.q(0,k))continue
if(l.d===A.fc&&l.x===A.cc&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.n(new C.e_B(j,t,i))
q.v(0,p)
r=B.z(q,B.a2(q).k("ck.E"))
t.w=r
w=4
return B.b(B.anJ(t.a.c.a,r),$async$LN)
case 4:t.atq(!1,!0)
r=t.c
if(r!=null)r.F(x.q).f.P(B.b0(null,null,null,null,null,A.q,null,B.d("Balance updated: +$"+B.dx(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$LN,v)},
I5(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$I5=B.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=B.S(a2).k("a4<1>")
a4=B.z(new B.a4(a2,new C.e_V(),a3),a3.k("E.E"))
a5=a4
a6=B.a([],x.s)
w=J.aa(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=B.S(a2).k("I<1,n>")
e=B.z(new B.I(a2,new C.e_W(),a3),a3.k("ai.E"))
q=e
w=9
return B.b(B.lx("transactions","id,status",null,null,null,B.D(["id",q],x.N,x.j),null,!0,null,null,!1,A.bD),$async$I5)
case 9:p=a9
if(r.c==null){w=1
break}o=!1
for(a2=J.aW(p);a2.C();){n=a2.gT(a2)
m=n
a3=J.q(m,"id")
l=J.k(a3==null?"":a3)
a3=B.aQ(J.q(m,"status"))
d=a3==null?null:A.k.M(a3)
k=d==null?0:d
if(J.aa(l)===0)continue
j=A.d.bf(r.e,new C.e_X(l))
if(j<0)continue
i=r.e[j].x
if(J.y(k,1))a0=A.cc
else a0=J.y(k,2)?A.ke:A.dk
h=a0
if(!J.y(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===A.dk&&h===A.cc&&a3[j].d===A.fc)J.ch(a6,l)
if(i===A.dk&&h===A.ke&&r.e[j].d===A.eC){g=r.d
if(g!=null){r.HU(g.d+r.e[j].c,!1)
r.atq(!1,!0)}}}}if(o&&r.c!=null)r.n(new C.e_Y())
t=2
w=8
break
case 6:t=5
a7=s.pop()
f=B.a5(a7)
$.ak.$1("[growth income] refresh deposit status: "+B.t(f))
w=8
break
case 5:w=2
break
case 8:case 4:w=J.aa(a6)!==0?10:12
break
case 10:w=13
return B.b(r.LN(a6),$async$I5)
case 13:w=11
break
case 12:w=14
return B.b(r.buH(),$async$I5)
case 14:case 11:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$I5,v)},
NV(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$NV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:j=t.a.c
w=3
return B.b(B.v2(j.a,j),$async$NV)
case 3:i=e
if(t.c==null){w=1
break}t.n(new C.e_F(t,i))
t.Nj()
t.a5G()
j=t.a.c.a
s=i.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return B.b(H.yn(s[0],p,q,o,r,!0,j),$async$NV)
case 4:j=e.a
n=j[4]
m=B.bi(j[2],!0,x.o)
l=j[5]
t.w=B.bi(j[1],!0,x.N)
t.r=j[3]
t.d=n
t.Nj()
t.a5G()
k=C.fA1(n,m)
if(k)t.HU(n.d,!1)
t.Nj()
if(t.c==null){w=1
break}t.n(new C.e_G(t,n,m,l))
if(k)t.zq(!1,!0,!0)
else t.PU(!1)
case 1:return B.h(u,v)}})
return B.i($async$NV,v)},
zq(d,e,f){return this.c91(d,e,f)},
atq(d,e){return this.zq(d,!1,e)},
aUi(d){return this.zq(!1,d,!1)},
c91(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$zq=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new B.N(Date.now(),0,!1).a4()
r=t.a.c.a
q=t.e
p=t.f
w=3
return B.b(B.rK(r,o,q,!1,t.w,s,p),$async$zq)
case 3:p=t.a.c.a
q=t.e
r=t.f
H.LU(t.w,p,q,s,o,r)
if(f)t.PU(d)
case 1:return B.h(u,v)}})
return B.i($async$zq,v)},
c_c(){this.n(new C.e_O())
this.atq(!1,!0)},
abH(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===A.cc&&B.rd(d)){w=r.a
w.f.$1(new B.cQ(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.c5P(q,d)
v=q.d=B.Ji(r.a.c.a,new C.e_L(r))
r.at=r.a.c.d=v
B.qg(q.a,v,!0,!1)
if(r.c!=null)r.n(new C.e_M(r,d))
r.zq(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new B.cQ(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===A.dk
if(w&&d.d===A.fc)s=!1
else if(w&&d.d===A.eC){r.HU(q.d-d.c,!0)
s=!0}else{C.c5P(q,d)
w=d.d
s=w===A.eC||w===A.jr
r.HU(q.d,s)}r.n(new C.e_N(r,d))
w=d.d
r.zq(s,e,w===A.eC||w===A.jr||d.x===A.cc||w===A.fA)},
atP(d){return this.abH(d,!0,!1)},
aVc(d,e){return this.abH(d,!0,e)},
aVb(d,e){return this.abH(d,e,!1)},
c25(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.hL0(u,e,d)){v.ly("This plan is already active.")
return}w=B.h0X(u.a,d,e)
if(C.hHt(u.a,v.e,w)){v.ly("You already own this plan.")
return}if(u.d<g){v.ly("Insufficient balance. Add funds in the Wallet tab first.")
return}v.n(new C.e_P(v))
v.n(new C.e_Q(v,u,new B.uy(d,e,0.0286,new B.N(Date.now(),0,!1),0,0)))
v.atP(new B.cQ(w,u.a,g,A.jr,A.eX,"Direct investment buy: "+d,null,null,A.cc,new B.N(Date.now(),0,!1)))
v.n(new C.e_R(v))
v.ly("Plan purchased: "+d)},
ly(d){var w=null,v=this.c
if(v==null)return
v.F(x.q).f.P(B.b0(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
Y8(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Y8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hl(s,new C.akM(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$Y8)
case 3:w=4
return B.b(t.NV(),$async$Y8)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Y8,v)},
ac9(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ac9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hl(s,new C.afA(r,B.a([r],x.d9),A.NN,t.a.d,t.gaVa(),t.gaUh(),null),!1,null,x.X),$async$ac9)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ac9,v)},
ac7(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ac7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hl(s,new C.ail(r,t.a.d,t.e,t.gaVa(),t.gaUh(),new C.e_T(t),null),!1,"LocalGrowthGameCenter",x.X),$async$ac7)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ac7,v)},
a9R(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$a9R=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new B.N(s,0,!1)
w=C.fA1(j,t.e)?3:4
break
case 3:w=5
return B.b(t.aUi(!0),$async$a9R)
case 5:case 4:if(j.x==null){t.ly("Choose an investment plan first, then come back to clock in.")
t.n(new C.e_H(t))
w=1
break}if(B.mu(r)===6||B.mu(r)===7){t.ly("Clock-in opens Monday through Friday.")
w=1
break}if(!C.fPX(r)){t.ly("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a5o(q,r)&&j.fy>0){t.ly("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!B.a0a(q,r))if(!B.a0a(j.fr,r)){q=B.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,B.J)(p),++n){m=p[n]
if(A.a.i(m.b.toLowerCase())===A.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new B.aCy(m.y,l,m.a))}}q=B.h0o(q,r)}else q=p
else q=p}else q=!1
if(q){t.ly("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.ly("You are already clocked in for today.")
w=1
break}k=C.hjp(r)
q=j.a
t.n(new C.e_I(j,r,k))
t.aVb(new B.cQ("local_clockin_manual_"+q+"_"+s,j.a,0,A.fA,A.eX,"Clock-in session started (local)",null,null,A.cc,r),!1)
t.ly("Clock-in started. Keep Growth Income open for today.")
case 1:return B.h(u,v)}})
return B.i($async$a9R,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.K(d).ax.a===A.H?A.iT:A.oO
if(l.d==null)return B.ec(A.k9,j,!0)
w=x.o
v=B.R(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,B.J)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.m(0,q,r)}p=A.a.i(l.a.c.a.toLowerCase())
u=$.fde
u=u==null?k:u.$0()
u=J.aW(u==null?A.hN:u)
while(u.C()){t=u.gT(u)
q=t.a
if(q.length===0||v.am(0,q)||B.rd(t))continue
if(A.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(B.dm(o.toLowerCase(),"clock-in",0))continue
v.m(0,q,t)}w=B.z(new B.bf(v,v.$ti.k("bf<2>")),w)
v=l.e
A.d.v(w,new B.a4(v,new C.e08(),B.S(v).k("a4<1>")))
A.d.aY(w,new C.e09())
v=l.d
v.toString
u=C.hxD(l.a.c)
t=l.d
t.toString
t=B.ec(new C.aje(t,l.a.e,l.z,l.gc24(),l.aPt(),D.f08),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=B.ec(new C.ay9(l.aPt(),q,n,o,w,new C.e0a(l),l.gc48(),new C.e0b(l),D.f09),j,!0)
m=B.aG(d,k,x.w).w
n=l.y
return new B.U9(n,new C.e0c(l),B.aD(!1,A.X,!0,k,new B.a3(1/0,m.a.b,new B.am(A.V,k,A.a9,A.q,B.a([B.bU(0,B.ec(k,j,!0),0,0,0),B.bU(0,B.br(!1,[new C.ay8(v,u,w,l.gbUT(),new C.e0d(l),new C.e0e(l),new C.e0f(d),l.gc4Y(),l.gc4U(),D.f07),t,o][n],!0,!1,A.ah,!0,!0),0,0,0),B.an(0,l.bwV(),k,k,0,0,k,k)],x.p),k),k),A.h,j,0,k,k,k,k,k,A.ac),k)},
aPt(){var w=null,v=B.a([D.eu.j(0.24),A.M.j(0.72)],x.O)
return B.hJ(B.aH(!1,w,!0,B.p(A.B,D.bBo,A.h,w,w,new B.o(w,w,B.G(D.eu.j(0.38),A.r,1),w,B.a([new B.a9(0,A.G,D.eu.j(0.18),A.J,16)],x.V),new B.a8(A.ax,A.aE,A.w,v,w,w),A.a6),w,40,w,w,w,w,w,40),A.cE,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e_E(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bwV(){var w=null,v=B.m(27),u=B.G(A.at.j(0.45),A.r,1),t=B.a([new B.a9(0,A.G,A.x.j(0.5),A.eI,24),new B.a9(-2,A.G,A.at.j(0.12),A.J,18)],x.V)
return new B.B(A.JN,B.br(!0,B.as(new B.d3(D.aQH,B.p(w,B.cj(new C.e_C(this)),A.h,w,w,new B.o(w,w,u,v,t,D.bEg,A.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,A.ah,!0,!1),w)},
bWx(d){var w=null,v=this.y===d,u=D.cGi[d],t=u.b,s=u.a,r=""+d,q=x.W
return B.C(B.di(w,!0,w,B.aJ(A.c5,B.qV(B.ql(v?B.V(s,D.a7X,new B.cv("on"+r,q),w,w,21):B.u(B.a([B.V(s,A.c.j(0.62),w,w,w,19),A.bw,B.d(t,w,1,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,new B.cv("off"+r,q),A.b5,A.j,0,A.p),A.ia,B.tf(),A.b9,A.b9,B.a_r())),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e_K(this,d),w,w,w,w,w,w,!1,A.ae),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,A.bX,w),1)}}
C.ay8.prototype={
bTJ(d){return C.fA2(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
B.K(d)
w=A.c.j(0.58)
v=f.e
u=B.S(v).k("a4<1>")
u=B.oI(new B.a4(v,new C.d9S(),u),3,u.k("E.E"))
t=B.z(u,B.a2(u).k("E.E"))
v=f.c
s=v.x
r=new B.N(Date.now(),0,!1)
q=v.f
p=C.a5o(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.fPX(r)
m=v.gBc()
l=B.a([D.eu.j(0.24),A.M.j(0.72)],x.O)
k=B.G(D.eu.j(0.38),A.r,1)
j=x.V
i=B.a([new B.a9(0,A.G,D.eu.j(0.18),A.J,16)],j)
l=B.aH(!1,e,!0,B.p(A.B,B.V(A.hI,D.eu,e,e,e,19),A.h,e,e,new B.o(e,e,k,e,i,new B.a8(A.ax,A.aE,A.w,l,e,e),A.a6),e,38,e,e,e,e,e,38),A.cE,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=B.m(14)
k=B.m(14)
j=B.a([new B.a9(0,A.G,A.b0.j(0.45),A.cD,16)],j)
h=B.m(12)
g=x.p
j=B.bIZ(!1,l,"GROWTH INCOME",B.aH(!1,i,!0,new B.a3(44,44,new B.am(A.V,e,A.a9,A.h,B.a([B.p(A.B,B.p(A.B,D.bu9,A.h,e,e,new B.o(A.i8.j(0.78),e,e,h,e,e,A.n),e,36,e,e,e,e,e,36),A.h,e,e,new B.o(e,e,e,k,j,D.bFA,A.n),e,42,e,e,e,e,e,42),B.an(e,B.p(A.B,D.bAu,A.h,e,e,new B.o(A.cV,e,B.G(D.a9T,A.r,2),e,e,e,A.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.fSt(A.fZ,new C.d9T(),k)
k=B.A(B.a([B.C(C.fSs(new C.d9U(f,A.tS,n),new B.N(Date.now(),0,!1),h,k),1),A.nC,B.C(new B.tI(new C.d9V(f,A.tS),e,new B.h3(B.a([$.xE(),$.a0x()],x.U)),e),1)],g),A.m,e,A.e,A.j,0,e,e)
h=f.bWH(A.tS,D.eu)
v=B.C(f.cmc("Total Profit","$"+B.dx(v.e),A.tS),1)
u=u?e:s.b
return B.ec(B.cg(B.u(B.a([j,A.T,k,A.aa,new C.ay7(f.d,m,q,p,n,o,D.eu,f.gbTI(),f.f,e),A.aa,h,A.T,B.A(B.a([v,A.nC,B.C(f.b0k("Total Investment","$"+B.dx(u==null?0:u),A.tS,f.r),1)],g),A.m,e,A.e,A.j,0,e,e),A.T,f.bTF(d,t,D.eu,w)],g),A.af,e,A.e,A.j,0,A.p),A.q,e,A.z,e,A.Vu,e,e,A.ag),D.a9T,!0)},
atp(d,e,f,g,h){var w=null,v=B.m(h),u=B.G(A.c.j(0.09),A.r,1),t=B.a([new B.a9(0,A.G,A.x.j(0.4),A.dn,18)],x.V)
return B.p(w,B.bu(B.m(h-1),new B.am(A.V,w,A.a9,A.q,B.a([B.bU(0,B.bQ(w,new B.o(w,w,w,w,w,new B.bS(f,1.15,A.w,w,0,B.a([e.j(0.22),e.j(0)],x.O),w,w),A.n),A.b7),0,0,0),new B.B(g,d,w)],x.p),w),A.ap),A.h,w,w,new B.o(w,w,u,v,t,D.bED,A.n),w,w,w,w,w,w,w,w)},
aUg(d,e,f,g){return this.atp(d,e,f,A.ah,g)},
b2a(d,e,f,g,h,i,j){var w=null,v=B.an(-14,B.V(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=B.m(30),s=B.G(f.j(0.4),A.r,1),r=x.p,q=this.aUg(new B.a3(w,80,new B.am(A.V,w,A.a9,A.q,B.a([v,new B.B(D.beY,B.u(B.a([B.p(w,B.A(B.a([B.V(e,f,w,w,w,15),A.ez,B.d(h.toUpperCase(),w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.R,0,w,w),A.h,w,w,new B.o(u,w,s,t,w,w,A.n),w,w,w,w,A.adJ,w,w,w),A.b6,B.eY(A.a_,B.d(i,w,1,w,w,w,w,B.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,A.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,A.e8)],r),A.F,w,A.e,A.j,0,A.p),w)],r),w),w),f,A.kK,22)
if(g==null)return q
return B.aH(!1,B.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
bWH(d,e){var w,v,u=null,t=B.G(e.j(0.55),A.r,2),s=e.j(0.12),r=x.p,q=B.a([],r)
for(w=0;w<3;++w){v=new B.b3(3,3)
q.push(B.p(u,u,A.h,u,u,new B.o(e,u,u,new B.bx(v,v,v,v),u,u,A.n),u,D.css[w],u,D.bio,u,u,u,5))}v=x.V
return this.atp(B.A(B.a([B.p(u,B.A(q,A.dE,u,A.b5,A.j,0,u,u),A.h,u,u,new B.o(s,u,t,u,u,u,A.a6),u,42,u,u,u,u,u,42),D.efe,B.C(B.u(B.a([D.eQ4,A.bw,B.A(B.a([B.p(u,u,A.h,u,u,new B.o(e,u,u,u,B.a([new B.a9(0,A.G,e,A.J,6)],v),u,A.a6),u,7,u,u,u,u,u,7),A.bq,new B.dk(1,A.cj,B.d("Live \xb7 real-time statistics",u,1,A.Z,u,u,u,B.l(u,u,A.c.j(0.6),u,u,u,u,u,u,u,u,11.5,u,u,A.a1,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],r),A.m,u,A.e,A.j,0,u,u)],r),A.F,u,A.e,A.j,0,A.p),1),A.ab,B.aH(!1,B.m(16),!0,B.p(u,D.baD,A.h,u,u,new B.o(u,u,u,B.m(16),B.a([new B.a9(0,A.G,A.aH.j(0.35),A.cD,14)],v),D.bFl,A.n),u,u,u,u,D.bf0,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.z,u,u,u,u,u,u,u)],r),A.m,u,A.e,A.j,0,u,u),e,A.a_,A.V_,26)},
b0k(d,e,f,g){var w,v=null,u=A.a.q(d.toLowerCase(),"profit"),t=u?A.cV:A.b3,s=B.p(v,v,A.h,v,v,new B.o(t,v,v,D.aOY,v,v,A.n),v,v,v,A.mw,v,v,v,5),r=x.p
r=B.a([s,A.ba,B.C(B.u(B.a([B.A(B.a([B.V(u?A.rW:A.x2,t,v,v,v,14),A.ez,new B.dk(1,A.cj,B.d(d,v,1,A.Z,v,v,v,B.l(v,v,A.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),A.m,v,A.e,A.j,0,v,v),A.ar,B.eY(A.a_,B.d(e,v,1,v,v,v,v,D.eo3,v,v,v),A.h,A.e8)],r),A.F,v,A.b5,A.j,0,A.p),1)],r)
s=g==null
if(!s)r.push(new B.B(A.UN,B.V(A.ek,A.c.j(0.35),v,v,v,v),v))
w=this.aUg(new B.a3(v,66,B.A(r,A.m,v,A.e,A.j,0,v,v),v),t,A.lc,20)
if(s)return w
return B.aH(!1,B.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cmc(d,e,f){return this.b0k(d,e,f,null)},
bTF(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.p(m,m,A.h,m,m,new B.o(f,m,m,m,B.a([new B.a9(0,A.G,f,A.J,8)],x.V),m,A.a6),m,9,m,m,m,m,m,9),k=B.d("LIVE ACTIVITY",m,m,m,m,m,m,B.l(m,m,A.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,A.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=A.c.j(0.07),i=B.m(20),h=x.p
i=B.a([B.A(B.a([l,A.a3j,k,A.b6,B.p(m,B.d(""+e.length,m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.h,m,m,new B.o(j,m,m,i,m,m,A.n),m,m,m,m,A.VH,m,m,m)],h),A.m,m,A.e,A.j,0,m,m),A.P],h)
if(e.length===0)i.push(new B.B(A.UQ,B.u(B.a([B.V(A.he,g,m,m,m,30),A.ar,B.d("Nothing yet",m,m,m,m,m,m,B.l(m,m,A.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.bw,B.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,A.a1,m,m,!0,m,m,m,m,m,m,m,m),A.L,m,m)],h),A.m,m,A.e,A.j,0,A.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=B.a([],h)
if(w>0)k.push(new B.lU(1,m,m,m,m,A.c.j(0.07),m))
j=e[w]
v=j.d
u=v===A.eC||v===A.jr
t=u?A.km:D.eu
g=A.c.j(0.5)
v=new B.b3(12,12)
s=B.a([t.j(0.28),t.j(0.08)],l)
r=new B.ay(t.j(0.35),1,A.r,-1)
v=B.p(A.B,B.V(u?A.rW:A.uB,t,m,m,m,18),A.h,m,m,new B.o(m,m,new B.c2(r,r,r,r),new B.bx(v,v,v,v),m,new B.a8(A.ax,A.aE,A.w,s,m,m),A.n),m,38,m,m,m,m,m,38)
s=C.hFr(j)
q=C.fU8(j.y)
s=B.u(B.a([new B.w(s,m,A.mV,m,m,m,m,A.Z,m,1,m,m),A.bw,new B.w(q,m,new B.F(!0,g,m,m,m,m,11,A.a1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),A.F,m,A.e,A.j,0,A.p)
q=t.j(0.14)
p=new B.b3(20,20)
o=u?"-":"+"
n=B.dx(j.c)
q=B.p(m,new B.w(o+"$"+n,m,new B.F(!0,t,m,m,m,m,13,A.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),A.h,m,m,new B.o(q,m,m,new B.bx(p,p,p,p),m,m,A.n),m,m,m,m,A.nn,m,m,m)
j=C.h00(j)
k.push(new B.B(G.UW,new B.cD(A.aY,A.e,A.j,A.m,m,A.p,m,0,B.a([v,A.ba,new B.bG(1,A.bp,s,m),B.u(B.a([q,A.dd,new B.w(j,m,new B.F(!0,g,m,m,m,m,10,A.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),A.dE,m,A.e,A.j,0,A.p)],h),m),m))
A.d.v(i,k)}return this.atp(B.u(i,A.m,m,A.e,A.j,0,A.p),f,A.b4,D.bf6,26)}}
C.ay7.prototype={
S(){return new C.bdu(null,null)},
cFp(d){return this.z.$1(d)},
cGB(){return this.Q.$0()}}
C.bdu.prototype={
Z(){var w,v=this,u=null
v.a0()
w=B.bh(u,A.oU,u,1,u,v)
w.cF(0)
v.d!==$&&B.aO()
v.d=w
w=B.bh(u,D.bcN,u,1,u,v)
w.cF(0)
v.e!==$&&B.aO()
v.e=w
w=B.bh(u,A.u7,u,1,u,v)
v.f!==$&&B.aO()
v.f=w
v.b1f()},
gb3T(){var w=new B.N(Date.now(),0,!1)
if(B.mu(w)===6||B.mu(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
b1f(){var w=this,v=w.a,u=v.e||v.f||w.gb3T()
if(u){v=w.f
v===$&&B.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){v=w.f
v===$&&B.c()
v.cF(0)}else{if(!u){v=w.f
v===$&&B.c()
v=v.r
v=v!=null&&v.a!=null}else v=!1
if(v){v=w.f
v===$&&B.c()
v.bT(0)}}},
bo(d){this.bA(d)
this.b1f()},
p(){var w=this,v=w.d
v===$&&B.c()
v.p()
v=w.e
v===$&&B.c()
v.p()
v=w.f
v===$&&B.c()
v.p()
w.boi()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gb3T()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=A.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?A.at:g.x
g=g.r?new C.d9L(i):h
v=B.m(32)
s=B.m(32)
r=f?D.cVe:D.cVc
q=B.G((f?D.nP:A.bd).j(0.28),A.r,1.4)
p=x.V
o=B.a([new B.a9(0,A.G,(f?A.at:A.bc).j(0.16),A.fz,28)],p)
n=x.p
m=B.a([],n)
if(f)A.d.v(m,B.a([B.an(h,i.a8p(D.nP,130),h,h,h,-24,-30,h),B.an(-36,i.a8p(A.at,140),h,h,-28,h,h,h)],n))
else A.d.v(m,B.a([B.an(h,i.a8p(A.bc,120),h,h,h,-30,-36,h),B.an(-40,i.a8p(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=B.m(32)
k=i.f
k===$&&B.c()
m.push(B.bU(0,B.e8(B.bu(l,new B.ep(B.c4(k,new C.d9M(i),h),h),A.ap),!0,h),0,0,0))}if(f){l=B.m(32)
k=i.f
k===$&&B.c()
m.push(B.bU(0,B.e8(B.bu(l,new B.ep(B.c4(k,new C.d9N(i),h),h),A.ap),!0,h),0,0,0))}l=B.m(999)
k=A.c.j(0.06)
j=B.G(A.c.j(0.16),A.r,1)
m.push(B.an(h,new B.d3(D.aQN,B.p(h,B.A(B.a([B.p(h,h,A.h,h,h,new B.o(t,h,h,h,B.a([new B.a9(0,A.G,t.j(0.5),A.J,8)],p),h,A.a6),h,8,h,h,h,h,h,8),A.ab,new B.dk(1,A.cj,B.d(u,h,1,A.Z,h,h,h,D.eta,h,h,h),h)],n),A.m,h,A.e,A.R,0,h,h),A.h,h,h,new B.o(k,h,j,l,h,h,A.n),h,h,h,h,A.h0,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.fSt(A.fZ,new C.d9O(),l)
m.push(C.fSs(new C.d9P(i,f,t,e,w),new B.N(Date.now(),0,!1),j,l))
return B.aH(!1,v,!0,B.dg(h,new B.am(A.V,h,A.a9,A.h,m,h),h,h,A.b9,new B.o(h,h,q,s,o,new B.a8(A.ax,A.aE,A.w,r,h,h),A.n),A.zq,h,392,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
a8p(d,e){var w=null
return B.e8(B.p(w,w,A.h,w,w,new B.o(w,w,w,w,w,new B.bS(A.B,0.5,A.w,w,0,B.a([d.j(0.22),d.j(0)],x.O),w,w),A.a6),w,e,w,w,w,w,w,e),!0,w)}}
C.b7g.prototype={
aUj(d,e,f,g){var w=new B.b_($.a1().r,A.av,null,null,B.a([],x.g)),v=e.a,u=e.b,t=u-f
w.N(new B.bj(v,t))
w.N(new B.dl(v,u,v+f,u))
w.N(new B.dl(v,u,v,u+f))
w.N(new B.dl(v,u,v-f,u))
w.N(new B.dl(v,u,v,t))
w.N(new B.bV())
d.b4(w,g)},
a5(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=a8/2,b0=b3.b,b1=b0/2
for(w=a7.b,v=w*6.283185307179586,u=0;u<16;++u){t=A.k.J(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=A.k.J(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+A.o.J(u,3))+u)+1)/2
$.a1()
q=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
q.r=A.c.j(0.1+r*0.5).gt(0)
a7.aUj(b2,new B.v(t*a8,s*b0),2+r*2.2,q)}for(a8=b2.a,b0=w*2,p=a7.e,o=0;o<3;++o){n=A.k.J(b0+o/3,1)
$.a1()
m=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
m.b=A.aj
m.c=1.6
m.r=p.j((1-n)*0.38).gt(0)
l=m.L()
a8.drawCircle(a9,b1,138+n*90,l)
l.delete()}for(b0=a7.d,u=0;u<28;++u){k=A.k.J(w*(1+A.o.J(u,2))+u/28,1)
j=u*2.399963+Math.sin(u*1.7)*0.2
i=113.16+k*(70+A.o.J(u,5)*18)
h=a9+Math.cos(j)*i
g=b1+Math.sin(j)*i*0.96
f=A.k.D(Math.sin(k*3.141592653589793),0,1)
switch(A.o.J(u,4)){case 0:e=A.k.D(Math.abs(Math.cos(k*6.283185307179586*3)),0.28,1)
J.bP(a8.save())
a8.translate(h,g)
a8.scale(e,1)
$.a1()
d=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
d.r=b0.j(f).gt(0)
l=d.L()
a8.drawCircle(0,0,6.5,l)
l.delete()
h=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
h.b=A.aj
h.c=1.2
h.r=p.j(f).gt(0)
l=h.L()
a8.drawCircle(0,0,6.5,l)
l.delete()
if(e>0.6&&f>0.35){h=$.h5t()
g=h.b
a0=g.c
g=g.a.c
h.a5(b2,new B.v(-a0/2,-g.gbd(g)/2))}a8.restore()
break
case 1:$.a1()
a0=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a0.r=p.j(f*0.95).gt(0)
a7.aUj(b2,new B.v(h,g),3+f*3,a0)
break
case 2:$.a1()
a0=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a0.r=A.c.j(f*0.8).gt(0)
l=a0.L()
a8.drawCircle(h,g,1.6+f*1.8,l)
l.delete()
break
default:a0=Math.cos(j)
a1=Math.sin(j)
a2=7+f*7
$.a1()
a3=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a3.c=1.8
a3.d=A.bZ
a3.r=b0.j(f*0.8).gt(0)
l=a3.L()
a8.drawLine.apply(a8,[h,g,h-a0*a2,g-a1*a2,l])
l.delete()}}for(a4=0;a4<3;++a4){a5=v+a4*6.283185307179586/3
for(a6=0;a6<8;++a6){r=a5-a6*0.09
w=Math.cos(r)
h=Math.sin(r)
o=1-a6/8
$.a1()
g=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
g.r=p.j(o*0.85).gt(0)
l=g.L()
a8.drawCircle(a9+w*144,b1+h*144,1.4+o*2.6,l)
l.delete()}w=Math.cos(a5)
h=Math.sin(a5)
$.a1()
g=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
g.r=b0.j(0.28).gt(0)
g.z=N.ph
l=g.L()
a8.drawCircle(a9+w*144,b1+h*144,7,l)
l.delete()}},
ao(d){return d.b!==this.b}}
C.b7f.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.a1(),a4=B.U()
a4.r=this.d.j(0.075).gt(0)
for(w=a5.a,v=this.b,u=v*6.283185307179586,t=x.g,a3=a3.r,s=0;s<14;++s){r=u+s*6.283185307179586/14
q=B.a([],t)
p=new B.b_(a3,A.av,e,e,q)
o=r-0.14361566416410484
q.push(new B.bj(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new B.av(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
o=r+0.14361566416410484
q.push(new B.av(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
q.push(new B.av(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new B.bV())
n=a4.L()
q=p.gbM().a.snapshot()
w.drawPath((p.e=new B.cG(q)).a,n)
n.delete()}a0=v*2
a2=A.k.J(a0,1)
J.bP(w.save())
w.translate(a2*(d+240)-120,0)
a5.q1(0,0.35)
a2=-a1
a3=B.U()
a3.sav(new B.a8(A.a_,A.a7,A.w,B.a([A.c.j(0),A.c.j(0.07),A.c.j(0)],x.O),e,e).aB(0,D.e9Y))
a5.bp(new B.af(-18,a2,18,a2+a1*3),a3)
w.restore()
for(a2=a1+40,s=0;s<34;++s){m=A.k.J(Math.abs(Math.sin(s*91.7)*43758.5453),1)
l=A.k.J(v*(1+A.o.J(s,2))+s/34,1)
a3=l*6.283185307179586
u=Math.sin(a3*2+s)
J.bP(w.save())
w.translate(m*d+u*14,l*a2-20)
w.rotate(a3*(2+A.o.J(s,3))*180/3.141592653589793,0,0)
a3=A.k.D(Math.abs(Math.cos(a3*3+s)),0.3,1)
w.scale(1,a3)
if(l<0.08)a3=l/0.08
else a3=l>0.9?(1-l)/0.1:1
k=A.k.D(a3,0,1)
a3=B.c_(D.eaa,A.a2l)
u=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
u.r=D.asw[A.o.J(s,6)].j(k*0.9).gt(0)
n=u.L()
w.drawRRect(B.fM(a3),n)
n.delete()
w.restore()}j=[new B.v(d*0.18,a1*0.2),new B.v(d*0.82,a1*0.26),new B.v(d*0.5,a1*0.07)]
for(i=0;i<3;++i){l=A.k.J(a0+i/3,1)
if(l>0.5)continue
h=l/0.5
g=6+h*44
d=1-h
k=A.k.D(d,0,1)
for(a1=g*0.62,a2=g+5,s=0;s<14;++s){r=s*6.283185307179586/14
a3=Math.cos(r)
v=Math.sin(r)
f=D.asw[A.o.J(s+i,6)].j(k)
u=j[i]
t=u.a
u=u.b
$.a1()
q=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
q.c=2
q.d=A.bZ
q.r=f.gt(0)
n=q.L()
w.drawLine.apply(w,[t+a3*a1,u+v*a1,t+a3*g,u+v*g,n])
n.delete()
q=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
q.r=f.gt(0)
n=q.L()
w.drawCircle(t+a3*a2,u+v*a2,1.6,n)
n.delete()}a1=j[i]
$.a1()
a2=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a2.r=A.c.j(k).gt(0)
n=a2.L()
w.drawCircle(a1.a,a1.b,5*d,n)
n.delete()}},
ao(d){return d.b!==this.b}}
C.b7e.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a6.a/2,a1=a6.b/2,a2=new B.v(a0,a1),a3=a0-4,a4=a3-22
$.a1()
w=B.U()
w.b=A.aj
w.c=14
v=e.d
w.r=(v?e.r:A.bd).j(0.22).gt(0)
a5.aw(a2,a3-7,w)
w=B.U()
w.b=A.aj
w.c=1.7
w.r=(v?e.f:A.c).j(0.28).gt(0)
a5.aw(a2,a3-1,w)
w=B.U()
w.b=A.aj
w.c=1.6
w.r=A.c.j(0.16).gt(0)
a5.aw(a2,a4+8,w)
u=B.U()
u.c=1.5
u.d=A.bZ
u.r=(v?e.f:A.c).j(0.22).gt(0)
for(w=a3-3,t=a3+2,s=a5.a,r=0;r<12;++r){q=r/12*3.141592653589793*2-1.5707963267948966
p=Math.cos(q)
o=Math.sin(q)
n=Math.cos(q)
m=Math.sin(q)
l=u.L()
s.drawLine.apply(s,[a0+p*w,a1+o*w,a0+n*t,a1+m*t,l])
l.delete()}J.bP(s.save())
w=$.a1().r
t=x.g
p=new B.b_(w,A.av,d,d,B.a([],t))
p.N(new B.kv(B.c0(a2,a4)))
a5.tj(0,p)
p=B.c0(a2,a4)
o=B.U()
o.sav(D.dRJ.aB(0,B.c0(a2,a4)))
a5.bp(p,o)
k=A.k.D(e.b,0,1)
if(k>0.004){a1+=a4
j=a1-a4*2*k
i=v?5.2:1.8
t=B.a([],t)
h=new B.b_(w,A.av,d,d,t)
g=a0-a4
a1+=4
h.N(new B.bj(g,a1))
for(w=a0+a4,p=e.c*3.141592653589793,o=p*2,p*=2.2,n=i*0.42;g<=w;g+=3){m=(g-a0)/a4*3.141592653589793
m=new B.av(g,j+Math.sin(m*2+o)*i+Math.sin(m*3.1-p)*n)
t.push(m)
f=h.f
if(f!=null)m.bH(f)
m=h.e
if(m!=null)m.a.delete()
h.e=null}h.N(new B.av(w,a1))
h.N(new B.bV())
$.a1()
a0=B.U()
a1=x.O
w=e.e
a1=v?B.a([e.f.j(0.55),w.j(0.78),e.r.j(0.92)],a1):B.a([w.j(0.22),D.eu.j(0.34),A.cW.j(0.62)],a1)
a0.sav(new B.a8(A.b4,A.bb,A.w,a1,d,d).aB(0,B.c0(a2,a4)))
a5.b4(h,a0)
a0=B.U()
a0.b=A.aj
a0.c=2
a0.r=A.c.j(v?0.28:0.14).gt(0)
a5.b4(h,a0)}s.restore()},
ao(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.ay9.prototype={
S(){var w=$.at()
return new C.aya(new B.ao(A.aq,w),new B.ao(A.aq,w))},
baJ(d,e){return this.w.$2$cloudRequest(d,e)}}
C.aya.prototype={
p(){var w=this.d,v=$.at()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
ly(d){var w=null,v=this.c
if(v==null)return
v.F(x.q).f.P(B.b0(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
cnW(d){this.a.baJ(d,!0)
this.ly("Deposit submitted. Admin will review your payment proof.")
this.n(new C.dab())},
cmI(){var w,v,u=this,t=B.d_(u.d.a.a)
if(t==null||t<=0){u.ly("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
B.hl(w,new C.amQ(v.d,t,u.gcnV(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cu5(){var w,v,u,t,s=this,r=s.d,q=B.d_(r.a.a)
if(q==null||q<=0){s.ly("Enter an amount to withdraw.")
return}if(q<10){s.ly("Minimum withdrawal is $"+B.dx(10)+".")
return}w=s.a.d.d
if(q>w){s.ly("Insufficient balance. You have $"+B.dx(w)+".")
return}w=s.e
v=C.h1o(w.a.a)
if(v.length===0){s.ly("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.baJ(new B.cQ("wd_"+1000*Date.now(),s.a.d.a,q,A.eC,A.k5,"Withdrawal to $"+v+" \u2014 Fee: $"+B.dx(u)+" \u2014 You receive: $"+B.dx(q-u),null,null,A.dk,new B.N(Date.now(),0,!1)),!0)
s.ly("Withdrawal submitted \u2014 waiting for admin approval.")
r.bG(0,A.c_)
w.bG(0,A.c_)
s.n(new C.dac())},
cr7(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,B.J)(w),++s){r=w[s]
if(r.x!==A.cc||!this.aRd(r)||B.fHj(r))continue
q=r.d
p=q===A.eC||q===A.jr||q===A.eg
q=r.c
if(p)t+=q
else u+=q}return new B.bkj(u,t)},
B(d){var w,v,u,t=this,s=null,r=t.cr7(),q=t.a.r,p=new B.a4(q,new C.dad(),B.S(q).k("a4<1>")).gG(0)
q=t.a
w=q.c
q=q.x
v=B.a([D.eu.j(0.24),A.M.j(0.72)],x.O)
u=B.G(D.eu.j(0.38),A.r,1)
q=B.bIZ(!1,w,"WALLET",B.hJ(B.aH(!1,s,!0,B.p(A.B,B.V(U.agJ,D.eu,s,s,s,18),A.h,s,s,new B.o(s,s,u,s,s,new B.a8(A.ax,A.aE,A.w,v,s,s),A.a6),s,40,s,s,s,s,s,40),A.cE,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),s,"Back up wallet",s,s))
v=t.bvB(r.a,r.b,p)
u=x.p
w=B.A(B.a([t.amH(A.uB,"Deposit",0),t.amH(A.rW,"Withdraw",1),t.amH(A.fR,"History",2)],u),A.m,s,A.qv,A.j,0,s,s)
return B.ec(B.br(!1,B.cg(B.u(B.a([q,A.bu,v,A.d1,w,A.d1,B.ql(t.f===2?t.bQS():t.bWb(),A.ib,B.tf(),A.b9,A.b9,B.a_r())],u),A.af,s,A.e,A.j,0,A.p),A.q,s,A.z,s,D.bgX,s,s,A.ag),!0,!1,A.ah,!0,!0),A.yY,!0)},
bvB(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.a.i(i.a.e)
if(A.a.q(g,"@")){w=A.a.cP(g,"@")
v=A.a.al(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+A.a.aU(g,w)}else v=g
w=B.m(26)
u=B.an(h,i.avu(220,0.1),h,h,h,-60,-70,h)
t=B.an(-90,i.avu(200,0.07),h,h,h,30,h,h)
s=B.an(-60,i.avu(150,0.05),h,h,-40,h,h,h)
r=B.m(26)
r=B.bU(0,B.bQ(h,new B.o(h,h,B.G(A.c.j(0.18),A.r,1),r,h,h,A.n),A.b7),0,0,0)
q=B.m(6)
p=x.p
q=B.A(B.a([B.p(h,B.b1(h,h,h,new C.b6H(h),A.as),A.h,h,h,new B.o(h,h,h,q,h,D.bGz,A.n),h,28,h,h,h,h,h,38),A.b6,D.eXM],p),A.m,h,A.e,A.j,0,h,h)
o=B.d("Available balance",h,h,h,h,h,h,B.l(h,h,A.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,A.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=B.eY(A.a_,C.anz(new C.d9Y(i),D.eyc,i.a.d.a),A.h,A.e8)
m=B.a([B.C(i.aKc(A.uq,"In",d),1),B.C(i.aKc(A.wL,"Out",e),1)],p)
if(f>0){l=A.cL.j(0.22)
k=B.m(99)
j=B.G(A.ik.j(0.6),A.r,1)
m.push(B.p(h,B.d(""+f+" pending",h,h,h,h,h,h,D.eu4,h,h,h),A.h,h,h,new B.o(l,h,j,k,h,h,A.n),h,h,h,h,A.nn,h,h,h))}return new B.fN(1.62,B.bu(w,new B.am(A.V,h,A.a9,A.q,B.a([D.dR_,u,t,s,r,new B.B(A5.qd,B.u(B.a([q,A.b6,o,A.bw,n,A.b6,B.A(m,A.m,h,A.e,A.j,0,h,h),A.ar,B.d(v,h,1,A.Z,h,h,h,B.l(h,h,A.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,A.a1,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),A.F,h,A.e,A.j,0,A.p),h)],p),h),A.ap),h)},
avu(d,e){var w=null
return B.p(w,w,A.h,w,w,new B.o(w,w,B.G(A.c.j(e),A.r,22),w,w,w,A.a6),w,d,w,w,w,w,w,d)},
aKc(d,e,f){var w=null,v=A.c.j(0.16)
return B.A(B.a([B.p(w,B.V(d,A.c,w,w,w,13),A.h,w,w,new B.o(v,w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.bq,new B.dk(1,A.cj,B.eY(A.a_,B.d(e+"  $"+B.dx(f),w,w,w,w,w,w,A.qP,w,w,w),A.h,A.e8),w)],x.p),A.m,w,A.e,A.j,0,w,w)},
amH(d,e,f){var w=null,v=this.f===f,u=v?D.bHO:new B.a8(A.a_,A.a7,A.w,B.a([A.c.j(0.08),A.c.j(0.03)],x.O),w,w),t=B.G(v?A.c.j(0.6):D.eu.j(0.25),A.r,1),s=v?B.a([new B.a9(0,A.G,A.at.j(0.45),A.J,18)],x.V):w
u=B.dg(w,B.V(d,v?D.a7X:D.eu,w,w,w,26),w,w,A.co,new B.o(w,w,t,w,s,u,A.a6),A.Dn,w,62,w,w,w,w,62)
return B.aJ(A.c5,new B.a3(92,w,B.u(B.a([u,D.eg8,B.d(e,w,w,w,w,w,w,B.l(w,w,v?A.c:A.aQ,w,w,w,w,w,w,w,w,12.5,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.d9X(this,f),w,w,w,w,w,w,!1,A.ae)},
bWb(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=B.d_(a1.a.a)
if(a2==null)a2=0
w=a0?D.eu:A.cJ
v=a2>0
u=new C.da8(e,w)
t=new C.da7()
s=e.f
r=B.m(26)
q=x.O
p=B.a([w.j(0.1),A.rp,A.rp],q)
o=B.G(w.j(0.22),A.r,1)
n=x.V
m=B.a([new B.a9(0,A.G,A.x.j(0.35),A.eI,22)],n)
l=w.j(0.15)
l=B.p(d,B.V(a0?A.uB:A.rW,w,d,d,d,18),A.h,d,d,new B.o(l,d,d,d,d,d,A.a6),d,34,d,d,d,d,d,34)
k=B.C(B.d(a0?"Add money":"Take money out",d,d,d,d,d,d,A.fL,d,d,d),1)
j=A.c.j(0.06)
i=B.m(99)
h=x.p
i=B.A(B.a([l,A.aw,k,B.p(d,B.A(B.a([B.V(A.hI,w,d,d,d,14),B.d("Cash App",d,d,d,d,d,d,B.l(d,d,A.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,A.I,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),A.m,d,A.e,A.R,0,d,d),A.h,d,d,new B.o(j,d,d,i,d,d,A.n),d,d,d,d,A.kt,d,d,d)],h),A.m,d,A.e,A.j,0,d,d)
l=B.d("$",d,d,d,d,d,d,B.l(d,d,v?w:A.c3,d,d,d,d,d,d,d,d,26,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=B.a([new B.uK(B.ad("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=B.A(B.a([new B.B(A.iW,l,d),A.d4,B.aSv(new B.d3(D.aR4,B.aK(d,A.U,!1,d,!0,A.q,d,B.aL(),a1,w,d,d,d,d,2,B.bn(d,A.et,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.l(d,d,A.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),A.z,!0,d,!0,d,!1,d,A.ad,d,d,k,d,d,A.e_,d,d,d,1,d,d,!1,"\u2022",d,new C.da6(e),d,d,d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,D.eAP,!0,A.L,d,A.am,d,d,d,d),d),d)],h),A.F,d,A.b5,A.j,0,d,d)
a1=v?120:60
a1=B.as(B.dg(d,d,d,d,A.b9,new B.o(d,d,d,B.m(99),d,new B.a8(A.a_,A.a7,A.w,B.a([w.j(0),w,w.j(0)],q),d,d),A.n),A.X,d,3,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+B.dx(10)+" \xb7 admin sends it to your Cash App."
q=B.d(q,d,d,d,d,d,d,B.l(d,d,A.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,A.a1,d,1.35,!0,d,d,d,d,d,d,d,d),A.L,d,d)
l=B.a([],h)
j=a0?D.bLw:D.c_8
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=B.a([i,A.bu,k,A.ar,a1,A.P,q,A.az,B.A(l,A.m,d,A.e,A.j,0,d,d)],h)
if(!a0){q=A.c.j(0.04)
l=B.V(A.hI,w,d,d,d,d)
k=B.l(d,d,A.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,A.O,d,d,!0,d,d,d,d,d,d,d,d)
l=B.a([A.az,B.aK(d,A.U,!1,d,!0,A.q,d,B.aL(),e.e,d,d,d,d,d,2,B.bn(d,d,d,d,d,d,d,d,!0,new B.b2(4,B.m(16),new B.ay(A.c.j(0.08),1,A.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new B.b2(4,B.m(16),new B.ay(w,1,A.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),A.z,!0,d,!0,d,!1,d,A.ad,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,A.mU,!0,A.a5,d,A.am,d,d,d,d)],h)
if(v){q=A.c.j(0.04)
k=B.m(16)
A.d.v(l,B.a([A.aa,B.p(d,B.u(B.a([t.$2("Amount","$"+B.dx(a2)),t.$3$color("Fee (15%)","\u2212 $"+B.dx(a2*0.15),A.fO),B.jm(A.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+B.dx(a2*0.85),!0,D.eu)],h),A.m,d,A.e,A.j,0,A.p),A.h,d,d,new B.o(q,d,d,k,d,d,A.n),d,d,d,d,A.iD,d,d,d)],h))}A.d.v(a1,l)}a1.push(A.aO)
q=B.m(18)
l=a0?A.O8:P.anu
n=B.a([new B.a9(0,A.G,(a0?A.aW:A.e9).j(0.45),A.dn,18)],n)
k=a0?e.gcmH():e.gcu4()
j=B.V(a0?A.X3:A.kZ,d,d,d,d,20)
if(a0)i=v?"Deposit $"+B.dx(a2):"Deposit funds"
else i=v?"Withdraw $"+B.dx(a2):"Request withdrawal"
a1.push(new B.a3(d,54,B.bQ(B.lc(j,B.d(i,d,d,d,d,d,d,A.or,d,d,d),k,B.fe(d,d,A.K,d,d,d,d,d,d,A.c,d,d,d,A.K,new B.b5(B.m(18),A.W),d,d,d,d,d)),new B.o(d,d,d,q,n,new B.a8(A.a_,A.a7,A.w,l,d,d),A.n),A.b7),d))
return B.p(d,B.u(a1,A.af,d,A.e,A.j,0,A.p),A.h,d,d,new B.o(d,d,o,r,m,new B.a8(A.b4,A.bb,A.w,p,A.NH,d),A.n),d,d,new B.cv("form"+s,x.W),d,A.zE,d,d,d)},
bQS(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=B.S(a2).k("a4<1>"),a4=B.z(new B.a4(a2,new C.da0(a0),a3),a3.k("E.E"))
A.d.aY(a4,new C.da1())
w=A.a.i(a0.a.e.toLowerCase())
a2=B.R(x.N,x.o)
a3=$.fde
a3=a3==null?a1:a3.$0()
a3=J.aW(a3==null?A.hN:a3)
while(a3.C()){v=a3.gT(a3)
u=v.a
if(u.length!==0&&A.a.i(v.b.toLowerCase())===w)a2.m(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,B.J)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.m(0,u,s)}a3=a2.$ti.k("bf<2>")
a2=B.z(new B.bf(a2,a3),a3.k("E.E"))
r=C.hFY(a2,B.Ji(a0.a.e,new C.da2(a0)))
a2=B.m(24)
a3=B.G(A.c.j(0.07),A.r,1)
v=B.m(99)
u=B.m(99)
q=x.p
u=B.a([B.A(B.a([D.bll,B.aH(!1,v,!0,B.p(a1,D.eaR,A.h,a1,a1,new B.o(a1,a1,B.G(D.eu.j(0.4),A.r,1),u,a1,a1,A.n),a1,a1,a1,a1,A.mx,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.da3(a0),a1,a1,a1,a1,a1,a1,a1)],q),A.m,a1,A.e,A.j,0,a1,a1),A.T],q)
if(a4.length===0)u.push(new B.B(D.bdJ,B.u(B.a([B.V(A.DX,A.c.j(0.25),a1,a1,a1,40),A.T,D.eUG],q),A.m,a1,A.e,A.j,0,A.p),a1))
else{v=B.a([],q)
for(p=B.dc(a4,0,B.dJ(a0.r,"count",x.S),B.S(a4).c),o=p.$ti,p=new B.bR(p,p.gG(0),o.k("bR<ai.E>")),o=o.k("ai.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===A.eC||k===A.jr||k===A.eg
if(l===A.cc)i=j?A.cN:D.eu
else i=l===A.dk?A.ik:A.fK
h=j?"-":"+"
l=A.c.j(0.06)
k=i.j(0.14)
g=new B.ay(i.j(0.4),1,A.r,-1)
k=B.p(a1,B.V(j?A.rW:A.uB,i,a1,a1,a1,19),A.h,a1,a1,new B.o(k,a1,new B.c2(g,g,g,g),a1,a1,a1,A.a6),a1,42,a1,a1,a1,a1,a1,42)
f=a0.bKN(n)
e=C.fU8(n.y)
d=A.c.j(0.5)
f=B.a([new B.w(f,a1,A.jM,a1,a1,a1,a1,a1,a1,a1,a1,a1),A.bw,new B.w(e,a1,new B.F(!0,d,a1,a1,a1,a1,11,A.a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1)],q)
e=n.f
if(A.a.i(e==null?"":e).length!==0){e.toString
d=A.c.j(0.4)
f.push(new B.w(e,a1,new B.F(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,A.Z,a1,1,a1,a1))}if(m!=null&&n.x!==A.ke)f.push(new B.B(E.ac9,new B.E3(A.bH,5,4,A.by,B.a([a0.aJ8("Before",m.b),a0.aJ8("After",m.a)],q),a1),a1))
m=B.u(f,A.F,a1,A.e,A.j,0,A.p)
f=n.c
f=f===0?"\u2014":h+"$"+B.dx(f)
e=i.j(0.14)
d=new B.b3(99,99)
n=C.h00(n)
v.push(B.p(a1,new B.cD(A.aY,A.e,A.j,A.m,a1,A.p,a1,0,B.a([k,A.ba,new B.bG(1,A.bp,m,a1),A.ab,B.u(B.a([new B.w(f,a1,new B.F(!0,i,a1,a1,a1,a1,15,A.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),A.au,B.p(a1,new B.w(n,a1,new B.F(!0,i,a1,a1,a1,a1,9.5,A.I,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),A.h,a1,a1,new B.o(e,a1,a1,new B.bx(d,d,d,d),a1,a1,A.n),a1,a1,a1,a1,A.zK,a1,a1,a1)],q),A.dE,a1,A.e,A.j,0,A.p)],q),a1),A.h,a1,a1,new B.o(a1,a1,new B.c2(A.W,A.W,new B.ay(l,1,A.r,-1),A.W),a1,a1,a1,A.n),a1,a1,a1,a1,A.wh,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(B.hg(D.byL,B.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,A.cb,a1,a1,a1),new C.da4(a0),B.fo(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.eu,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
A.d.v(u,v)}return B.p(a1,B.u(u,A.af,a1,A.e,A.j,0,A.p),A.h,a1,a1,new B.o(A.rp,a1,a3,a2,a1,a1,A.n),a1,a1,D.f02,a1,D.bfQ,a1,a1,a1)},
aJ8(d,e){var w=null,v=A.c.j(0.05),u=B.m(7),t=B.G(A.c.j(0.1),A.r,1),s=B.dr(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=B.dx(e)
return B.p(w,B.VF(B.dr(B.a([s,B.dr(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.eym,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.nm,w,w,w)},
aRd(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(A.a.q(w,"clock-in session started"))return!1
v=d.d
if(v===A.eg)return d.c>0
if(B.rd(d))return!1
if(v===A.fc||v===A.eC)return!0
if(v===A.nI||v===A.jr)return!0
if(v===A.jN)return!0
if(v===A.fA)return A.a.q(w,"clock-in")||d.c>0
return!1},
bKN(d){var w,v=d.f
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
C.b6H.prototype={
a5(d,e){var w,v,u,t
$.a1()
w=B.U()
w.r=D.b_U.j(0.55).gt(0)
w.c=1
v=e.a
u=v*0.35
t=e.b
d.bU(new B.v(u,0),new B.v(u,t),w)
u=v*0.65
d.bU(new B.v(u,0),new B.v(u,t),w)
t*=0.5
d.bU(new B.v(0,t),new B.v(v,t),w)},
ao(d){return!1}}
C.bqU.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null
for(w=a4.b,v=this.b,u=v*6.283185307179586,t=a4.a,s=0+t,r=x.O,q=a3.a,p=0;p<3;++p){o=w*(0.2+0.25*p)+Math.sin(u+p*2)*14-40
n=new B.af(0,o,s,o+80)
m=[A.bc,A.fY,A.bo][p]
$.a1()
o=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
o.sav(new B.a8(A.b4,A.bb,A.w,B.a([m.j(0),m.j(0.1),m.j(0)],r),a2,a2).aB(0,n))
l=o.L()
q.drawRect(B.cz(n),l)
l.delete()}for(k=0;k<46;++k){s=k*12.9898
j=Math.sin(s+78.233)*43758.5453
j=(j-Math.floor(j))*t
i=Math.sin(s+156.466)*43758.5453
h=(i-Math.floor(i))*w
g=0.25+0.75*(0.5+0.5*Math.sin(u*(1+A.o.J(k,3))+k))
i=Math.sin(s+234.699)*43758.5453
s=Math.floor(i)
$.a1()
r=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
r.r=A.c.j(0.55*g).gt(0)
l=r.L()
q.drawCircle(j,h,0.7+(i-s)*1.5,l)
l.delete()
if(A.o.J(k,9)===0){f=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
f.r=A.nU.j(0.35*g).gt(0)
f.c=1
l=f.L()
q.drawLine.apply(q,[j-4,h,j+4,h,l])
l.delete()
l=f.L()
q.drawLine.apply(q,[j,h-4,j,h+4,l])
l.delete()}}for(u=-t*0.35,s=w*0.2,r=t*0.08,o=-w*0.02,v*=2,k=0;k<2;++k){f=A.k.J(v+k*0.5,1)
if(f>0.35)continue
p=f/0.35
e=t*(0.75-k*0.4)+u*p
d=w*(0.1+k*0.12)+s*p
$.a1()
a0=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
a0.r=A.c.j(0.7*(1-p)).gt(0)
a0.c=1.6
a0.d=A.bZ
l=a0.L()
q.drawLine.apply(q,[e+r,d+o,e,d,l])
l.delete()}for(u=t*0.62,w*=0.36,k=0;k<4;++k){f=A.k.J(v+k*0.25,1)
t=A.nU.j(0.5*Math.sin(f*3.141592653589793))
a1=new B.ma(new B.ez("z",a2,a2,A.cT,a2,a2,a2,a2,a2,a2,new B.F(!0,t,a2,a2,a2,a2,12+f*14,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a5,A.cn,new B.kc(1),a2,a2,a2,a2,A.cm,a2)
a1.fD()
a1.a5(a3,new B.v(u+Math.sin(f*6.283185307179586+k)*12+k*8,w-f*90))}},
ao(d){return d.b!==this.b}}
C.aHu.prototype={
aN(){this.aV()
this.aS()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdB())
w.aX$=null
w.a2()}}
C.bsN.prototype={}
C.aWo.prototype={}
C.Yd.prototype={
S(){return new C.aAy(new B.ao(A.aq,$.at()))},
cHM(d,e){return this.d.$2(d,e)}}
C.aAy.prototype={
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.a2()},
aUn(){var w=this,v=A.a.i(w.d.a.a),u=B.ad("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.n(new C.dV4(w))
return}u=w.c
u.toString
B.a7(u,!1).K(null)
w.a.cHM(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=B.aG(a0,A.en,e).w
e=B.aG(a0,A.e0,e).w
w=B.as(B.p(f,f,A.h,f,f,new B.o(A.be,f,f,B.m(2),f,f,A.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=B.A(B.a([B.p(f,D.by9,A.h,f,f,new B.o(f,f,f,f,B.a([new B.a9(0,A.G,A.f4.j(0.5),A.J,18)],v),D.ajg,A.a6),f,52,f,f,f,f,f,52),A.es,B.C(B.u(B.a([D.eJk,A.bw,B.d(g.a.c,f,1,A.Z,f,f,f,A.oq,f,f,f)],u),A.F,f,A.e,A.j,0,A.p),1),B.aF(f,f,f,f,D.byY,f,f,f,new C.dV7(a0),f,f,f,f,f,f)],u),A.m,f,A.e,A.j,0,f,f)
s=g.b03(A.eG,"You",A.cJ)
r=A.aM.j(0.15)
q=B.m(99)
q=B.A(B.a([s,new B.B(A.lT,B.p(f,D.eMY,A.h,f,f,new B.o(r,f,B.G(A.aM.j(0.6),A.r,1),q,f,f,A.n),f,f,f,f,A.fF,f,f,f),f),g.b03(A.uy,"Your friend",A.cd)],u),A.m,f,A.e,A.j,0,f,f)
r=A.c.j(0.06)
s=B.m(16)
p=A.c.j(0.12)
o=B.m(16)
n=g.f
if(n.length===0)n=f
o=B.aK(f,A.U,!0,f,!0,A.q,f,B.aL(),g.d,f,f,f,f,f,2,B.bn(f,f,f,f,f,f,f,f,!0,new B.b2(4,s,new B.ay(p,1,A.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new B.b2(4,o,D.aPV),f,f,f,f,f,f,f,f,N.BJ,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.bBj,f,f,f,f,f,f,f,f,f,f,f,f),A.z,!0,f,!0,f,!1,f,A.ad,f,f,f,f,f,A.mc,f,f,f,1,f,f,!1,"\u2022",f,new C.dV8(g),f,new C.dV9(g),f,!1,f,f,!1,f,!0,f,A.a8,f,f,f,f,f,f,f,f,f,f,f,A.ir,!0,A.a5,f,A.am,f,f,f,f)
r=B.a([],u)
for(m=0;m<4;++m){l=D.bVa[m]
s=new B.b3(14,14)
p=g.e===l
n=p?D.ajf:f
p=p?f:A.c.j(0.06)
k=new B.ay(g.e===l?A.aB:A.bG,1,A.r,-1)
j=""+l
i=l===1?"game":"best of "+j
h=A.c.j(0.7)
s=B.a([new B.bG(1,A.bp,B.aJ(f,B.dg(f,B.u(B.a([new B.w(j,f,A.dP,f,f,f,f,f,f,f,f,f),new B.w(i,f,new B.F(!0,h,f,f,f,f,10,A.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f)],u),A.m,f,A.e,A.j,0,A.p),f,f,A.b9,new B.o(p,f,new B.c2(k,k,k,k),new B.bx(s,s,s,s),f,n,A.n),A.eE,f,f,f,A.eV,f,f,f),A.z,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.dVa(g,l),f,f,f,f,f,f,!1,A.ae),f)],u)
if(l!==7)s.push(A.ab)
A.d.v(r,s)}s=B.A(r,A.m,f,A.e,A.j,0,f,f)
r=B.A(B.a([B.V(A.kY,A.c.j(0.5),f,f,f,15),A.bq,B.C(B.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,B.l(f,f,A.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),A.m,f,A.e,A.j,0,f,f)
p=B.m(18)
v=B.a([new B.a9(0,A.G,A.bz.j(0.4),A.cv,18)],v)
n=g.e
j=n===1?"":"s"
return new B.B(new B.L(0,0,0,d.f.d+e.r.d),B.p(f,B.u(B.a([w,A.aO,t,A.bu,q,A.bu,D.eQz,A.ar,o,A.aO,D.eUu,A.P,s,A.az,r,A.aO,new B.a3(f,54,B.bQ(B.hg(D.ahz,B.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,A.fL,f,f,f),g.gc_x(),f),new B.o(f,f,f,p,v,D.bGJ,A.n),A.b7),f)],u),A.af,f,A.e,A.R,0,A.p),A.h,f,f,D.aRS,f,f,f,f,D.bh8,f,f,f),f)},
b03(d,e,f){var w=null,v=f.j(0.1),u=B.m(16),t=B.G(f.j(0.45),A.r,1)
return B.C(B.p(w,B.u(B.a([B.V(d,f,w,w,w,24),A.au,B.d(e,w,w,w,w,w,w,A.a4o,w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.eV,w,w,w),1)}}
C.oy.prototype={}
C.blZ.prototype={
a5(d,e){var w,v,u,t,s,r=null,q=e.a/2,p=new B.v(q,e.b/2),o=q-4
for(q=d.a,w=0;w<37;++w){$.a1()
v=new B.ax(A.a0,A.Y,A.a3,A.a4,A.a2)
if(w===0)u=A.bs
else u=(w&1)===0?A.bR:A.M
v.r=u.gt(0)
u=B.c0(p,o)
t=v.L()
q.drawArc.apply(q,[B.cz(u),(w*2*3.141592653589793/37-1.5707963267948966)*57.29577951308232,9.72972972972973,!0,t])
t.delete()}$.a1()
q=B.U()
q.r=A.hS.gt(0)
q.b=A.aj
q.c=8
d.aw(p,o,q)
q=B.U()
q.r=A.aM.gt(0)
d.aw(p,o*0.22,q)
q=this.b
if(q!=null){s=B.j0(r,r,r,r,B.dr(r,r,r,r,r,r,r,r,r,A.aK7,B.t(q)),A.a5,A.cn,r,A.eL,A.cm)
s.fD()
q=s.b
u=q.c
q=q.a.c
s.a5(d,p.aD(0,new B.v(u/2,q.gbd(q)/2)))}},
ao(d){return d.b!=this.b}}
C.Db.prototype={
a3(){return"NgmyProMoveResult."+this.b}}
C.ao1.prototype={
gjx(){var w=this.d
w=w==null?null:w.a
return w!==!1},
bi0(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.fzL("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.bRE()
w=s.gjx()
v=s.d
s.c=w?"You ("+v.b+") vs NGMY \u2014 capture all opponent discs":v.b+" vs "+v.c+" \u2014 capture all discs"
break
case"tic_tac_go":s.b=1
s.at=B.bT(9,"",!1,x.N)
s.ax=!0
if(s.gjx())w="You are X vs NGMY (O) \u2014 get 3 in a row"
else{w=s.d
w=w.b+" (X) vs "+w.c+" (O)"}s.c=w
break
case"blackjack_vegas":s.b=1
w=x.t
s.ay=B.a([1+e.aG(10),1+e.aG(10)],w)
s.ch=B.a([1+e.aG(10),1+e.aG(10)],w)
s.CW=!1
s.c="Beat the dealer \u2014 don't bust over 21"
break
case"roulette_euro":s.b=1
s.cx=null
s.c="Pick a number \u2014 spin the wheel"
break
case"slots_jackpot":s.b=1
s.db=B.a([e.aG(6),e.aG(6),e.aG(6)],x.t)
s.c="Match 3 symbols for jackpot"
break
case"billiards_snooker":s.b=1
s.dx=e.ag()*3.141592653589793*2
s.c=s.gjx()?"Aim and shoot \u2014 beat NGMY on the snooker table":"Aim and shoot \u2014 pocket balls"
break
case"connect_four_pro":s.b=1
u=J.e0(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=B.bT(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gjx())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.aT4(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.ay5.h(0,d)
s.c=w==null?"Play to earn":w}},
b4E(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gjx()
if(o)return
o=x.N
s.x=B.Z(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b4(w,new C.c7l(),o)
v=B.z(v,v.$ti.k("ai.E"))
s.at=v
if(v.length<9){v=B.z(v,o)
A.d.v(v,B.bT(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=A.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===A.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.crD(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.anc(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b4(t,new C.c7m(),x.L)
o=B.z(o,o.$ti.k("ai.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)A.d.H(v,B.bT(7,0,!1,o))}if(B.iv(e.h(0,q)))o=B.e6(e.h(0,q))
else{o=B.c3(B.t(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bxK(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.anc(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b4(t,new C.c7n(),x.L)
o=B.z(o,o.$ti.k("ai.E"))
s.y=o}if(B.iv(e.h(0,p)))o=B.e6(e.h(0,p))
else{o=B.c3(B.t(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.byX(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.anc(e,f)
break}},
cBE(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=B.Z(w.x,q,p)
switch(d){case"tic_tac_go":o.m(0,"ttt",B.bi(w.at,!0,q))
o.m(0,"turnEmail",w.axA())
o.m(0,v,w.e)
q=""
if(!w.r){p=w.f
if(p===!0){q=w.d
q=q==null?t:q.d
if(q==null)q=""}else if(p===!1){q=w.d
q=q==null?t:q.e
if(q==null)q=""}}o.m(0,u,q)
o.m(0,s,w.w)
o.m(0,r,w.r)
return o
case"connect_four_pro":q=w.fr
p=B.S(q).k("I<1,al<H>>")
q=B.z(new B.I(q,new C.c7p(),p),p.k("ai.E"))
o.m(0,"c4",q)
o.m(0,"c4Turn",w.fx)
o.m(0,v,w.e)
q=""
if(!w.r){p=w.f
if(p===!0){q=w.d
q=q==null?t:q.d
if(q==null)q=""}else if(p===!1){q=w.d
q=q==null?t:q.e
if(q==null)q=""}}o.m(0,u,q)
o.m(0,s,w.w)
o.m(0,r,w.r)
return o
case"checkers_deluxe":q=w.y
p=B.S(q).k("I<1,al<H>>")
q=B.z(new B.I(q,new C.c7q(),p),p.k("ai.E"))
o.m(0,"checkers",q)
o.m(0,"checkersTurn",w.z)
o.m(0,v,w.e)
q=""
if(!w.r){p=w.f
if(p===!0){q=w.d
q=q==null?t:q.d
if(q==null)q=""}else if(p===!1){q=w.d
q=q==null?t:q.e
if(q==null)q=""}}o.m(0,u,q)
o.m(0,s,w.w)
o.m(0,r,w.r)
return o
default:q=B.dQ(o,q,p)
q.m(0,v,w.e)
q.m(0,s,w.w)
return q}},
axA(){var w,v,u,t=this
if(t.gjx()){if(t.ax){w=t.d
w=w==null?null:w.d
if(w==null)w=""}else w="ngmy@system"
return w}w=t.x.h(0,"playerXEmail")
if(w==null){w=t.d
w=w==null?null:w.d}v=A.a.i(J.k(w==null?"":w).toLowerCase())
w=t.x.h(0,"playerOEmail")
if(w==null){w=t.d
w=w==null?null:w.e}u=A.a.i(J.k(w==null?"":w).toLowerCase())
return t.ax?v:u},
anc(d,e){var w,v=this,u=A.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
v.r=J.y(d.h(0,"isDraw"),!0)
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
crD(d,e){var w,v,u,t,s,r="playerXEmail"
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
bxK(d,e){var w,v,u,t,s
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
byX(d,e){var w,v,u,t,s,r,q
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
RM(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gjx())return s
w=A.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return A.a.i(J.k(s==null?u.axA():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
bRE(){var w,v,u=this,t=J.e0(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=B.ih(8,new C.c7i(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
aT4(d){var w=20+d.aG(80),v=w+10+d.aG(50),u=4+d.aG(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bG(0,A.c_)},
cL1(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gjx())w=1
else{v=r.d
v=v==null?null:v.d
w=r.RM(q,v==null?"":v)?r.z:-1}if(!r.gjx()){v=r.d
v=v==null?null:v.d
v=!r.RM(q,v==null?"":v)}else v=!1
if(v)return!1
u=r.gjx()?r.z:w
if(!r.gjx()&&u!==r.z)return!1
t=J.q(r.y[d],e)
v=r.Q
if(v==null){if(t===r.z)v=!r.gjx()||t===1
else v=!1
if(v){r.Q=d
r.as=e}return!1}s=r.as
s.toString
if(d===v&&e===s){r.as=r.Q=null
return!1}if(Math.abs(d-v)===1&&Math.abs(e-s)===1&&t===0&&A.o.J(d+e,2)===1){J.aE(r.y[d],e,r.z)
J.aE(r.y[v],s,0)
r.as=r.Q=null
r.z=r.z===1?2:1
if(r.a6m(2)){r.a7T(1)
return!0}if(r.a6m(1)){r.a7T(2)
return!0}if(r.gjx()&&r.z===2){r.btT(f)
if(r.a6m(2)){r.a7T(1)
return!0}if(r.a6m(1)){r.a7T(2)
return!0}}}return!1},
a7T(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
t.e=!0
w=t.f=d===1
if(t.gjx()){if(w){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+s}else v="NGMY wins \u2014 your discs are gone"
v=t.w=v}else{v=t.d
if(w){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+s}t.a=w?1:0
t.c=v
return!0},
btT(d){var w,v,u,t,s,r,q,p,o,n=this,m=B.a([],x.B)
for(w=x.t,v=0;v<8;++v)for(u=0;u<8;++u){if(J.q(n.y[v],u)!==2)continue
for(t=[B.a([1,-1],w),B.a([1,1],w)],s=0;s<2;++s){r=t[s]
q=v+r[0]
p=u+r[1]
if(q>=0&&q<8&&p>=0&&p<8&&J.q(n.y[q],p)===0&&A.o.J(q+p,2)===1)m.push(B.a([v,u,q,p],w))}}w=m.length
if(w===0)return
o=m[d.aG(w)]
J.aE(n.y[o[2]],o[3],2)
J.aE(n.y[o[0]],o[1],0)
n.z=1},
a6m(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=J.aW(w[u]);t.C();)if(t.gT(t)===d)return!1
return!0},
cL2(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.pj
if(!s.gjx()){w=s.d
w=w!=null&&!s.RM("tic_tac_go",w.d)}else w=!1
if(w)return D.pj
if(s.gjx())v="X"
else{w=A.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===A.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.afV(v))return s.aOa(v,!0)
if(!A.d.q(s.at,""))return s.aOb()
s.ax=!s.ax
if(!s.gjx()){s.x.m(0,"turnEmail",s.axA())
s.c=s.aSD()
return D.pj}if(s.gjx()){t=s.cab(e)
if(t>=0){s.at[t]="O"
if(s.afV("O"))return s.aOa("O",!1)
if(!A.d.q(s.at,""))return s.aOb()
s.ax=!0}}s.c=s.gjx()?"Your turn \u2014 you are X":s.aSD()
return D.pj},
aSD(){var w=this.d
if(w==null)return"Take your turn"
return this.RM("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aOa(d,e){var w,v,u=this
u.e=!0
u.f=e
u.r=!1
if(u.gjx()){if(e){w=u.d
w=w==null?null:w.b
w=(w==null?"You":w)+" wins with "+d+"!"}else w="NGMY wins with "+d+"!"
w=u.w=w}else{w=u.d
if(e){w=w==null?null:w.b
v=w==null?"You":w}else{w=w==null?null:w.c
v=w==null?"Opponent":w}w=u.w=v+" wins with "+d+"!"}u.c=w
u.a=e?1:0
return e?D.pk:D.FW},
aOb(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.P1},
cab(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.afV("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.afV("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.cGF[u]
if(v[w].length===0)return w}return-1},
afV(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.cNy[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a0P(d){return A.d.cI(d,0,new C.c7o())},
cvF(d){this.ay.push(1+d.aG(10))
if(this.a0P(this.ay)>21)return!0
return!1},
cvG(d){var w,v,u,t=this
while(t.a0P(t.ch)<17)t.ch.push(1+d.aG(10))
t.CW=!0
w=t.a0P(t.ay)
v=t.a0P(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cB6(d,e){var w,v,u,t=this
if(t.e)return D.pj
if(!t.gjx()){w=t.d
w=w!=null&&!t.RM("connect_four_pro",w.d)}else w=!1
if(w)return D.pj
if(t.gjx())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.pj
if(!t.ad2(d,w))return D.pj
if(t.a6c(t.fx))return t.aO8(t.fx,!0)
if(t.aJX())return t.aO9()
w=t.fx===1?2:1
t.fx=w
if(t.gjx()&&w===2){u=t.c9A(e)
if(u>=0){t.ad2(u,2)
if(t.a6c(2))return t.aO8(2,!1)
if(t.aJX())return t.aO9()
t.fx=1}}t.c=t.gjx()?"Your turn \u2014 drop a red disc":t.bxJ()
return D.pj},
bxJ(){var w=this.d
if(w==null)return"Drop a disc"
return this.RM("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
ad2(d,e){var w
for(w=5;w>=0;--w)if(J.q(this.fr[w],d)===0){J.aE(this.fr[w],d,e)
return!0}return!1},
aJX(){for(var w=0;w<7;++w)if(J.q(this.fr[0],w)===0)return!1
return!0},
aO8(d,e){var w,v,u,t=this
t.e=!0
t.f=e
t.r=!1
w=d===1?"red discs":"gold discs"
if(t.gjx()){if(e){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+" wins with "+w+"!"}else v="NGMY wins with "+w+"!"
v=t.w=v}else{v=t.d
if(e){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+" wins with "+w+"!"}t.c=v
t.a=e?1:0
return e?D.pk:D.FW},
aO9(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.P1},
c9A(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.ad2(w,2)
v=r.a6c(2)
r.b2m(w)
if(v)return w}for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.ad2(w,1)
u=r.a6c(1)
r.b2m(w)
if(u)return w}t=B.a([],x.t)
for(w=0;w<7;++w)if(J.q(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aG(s)]},
b2m(d){var w
for(w=0;w<6;++w)if(J.q(this.fr[w],d)!==0){J.aE(this.fr[w],d,0)
return}},
a6c(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.q(this.fr[w],v)!==d)continue
if(this.bxL(w,v,d))return!0}return!1},
bxL(d,e,f){var w,v,u,t=new C.c7h(this,d,e,f)
for(w=x.t,w=[B.a([0,1],w),B.a([1,0],w),B.a([1,1],w),B.a([1,-1],w)],v=0;v<4;++v){u=w[v]
if(t.$2(u[0],u[1])+t.$2(-u[0],-u[1])-1>=4)return!0}return!1},
b5x(d){var w=this
if(A.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.aT4(d)}return w.a>=w.b}}
C.aoV.prototype={
S(){return new C.aBi(null,null)},
cGF(d){return this.e.$1(d)}}
C.aBi.prototype={
Z(){var w,v=this
v.a0()
w=B.bh(null,D.bcQ,null,1,null,v)
w.f2(0,!0)
v.d=w
v.a.d.aJ(0,v.gaUM())
v.atD()},
bo(d){var w
this.bA(d)
w=this.a
if(d.c!==w.c){w.d.bG(0,A.c_)
this.atD()}},
atD(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.aeP(t,u)
C.aeP(t,u)
w.a.cGF(s)
w.a.toString
w.n(new C.epl())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
p(){var w,v=this
v.a.d.a1(0,v.gaUM())
w=v.d
w===$&&B.c()
w.p()
v.bpQ()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.aeP(j,i),g=C.aeP(j,i),f=j.length,e=i.length,d=B.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&B.c()
u=new B.b3(1,1)
d.push(new B.vs(new B.cZ(v,!1,B.p(l,l,A.h,l,l,new B.o(A.aM,l,l,new B.bx(u,u,u,u),B.a([new B.a9(0,A.G,A.aM.j(0.6),A.J,6)],k),l,A.n),l,22,l,A.JW,l,l,l,3),l),A.Pz,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new B.ez(v,l,l,A.cT,l,l,l,l,l,l,D.evB))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=A.c.j(0.4)
q=A.cp}else if(s===t){r=A.br
q=A.O}else{r=A.aH
q=A.I}d.push(new B.ez(t,l,l,A.cT,l,l,l,l,l,l,new B.F(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&B.c()
d.push(new B.vs(new B.cZ(k,!1,B.p(l,l,A.h,A.aM,l,l,l,22,l,l,l,l,l,3),l),A.Pz,l,l))}p=f===0?0:A.k.U(h/f*100)
k=A.x.j(0.35)
v=B.m(12)
u=B.G(A.be,A.r,1)
o=x.p
v=B.p(l,B.u(B.a([B.A(B.a([m.aUL("Correct",""+h,A.bs),A.ab,m.aUL("Wrong / missed",""+(f-g),A.aH),A.b6,B.d(""+p+"% accuracy",l,l,l,l,l,l,G.a3M,l,l,l)],o),A.m,l,A.e,A.j,0,l,l),A.ar,D.eO1],o),A.F,l,A.e,A.j,0,A.p),A.h,l,l,new B.o(k,l,u,v,l,l,A.n),l,l,l,l,A.bk,l,l,l)
u=B.C(B.cg(new B.a7q(l,B.dr(d,l,l,l,l,l,l,l,l,l,l),l,l,l),A.q,l,A.z,l,l,l,l,A.ag),1)
k=m.a.d
g=B.l(l,l,A.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=A.x.j(0.35)
return B.u(B.a([v,A.aa,u,A.T,B.aK(l,A.U,!0,l,!0,A.q,l,B.aL(),k,l,l,l,l,l,2,B.bn(l,new B.b2(4,B.m(12),A.W),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new B.b2(4,B.m(12),D.aPO),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ad,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,D.aK6,!0,A.a5,l,A.am,l,l,l,l)],o),A.af,l,A.e,A.j,0,A.p)},
aUL(d,e,f){var w=null,v=f.j(0.15),u=B.m(8)
return B.p(w,B.d(d+": "+e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,w,w,new B.o(v,w,w,u,w,w,A.n),w,w,w,w,A.fF,w,w,w)}}
C.aJ_.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
var z=a.updateTypes(["au<~>()","~()","H(hV,hV)","~([wt?])","Q(o2)","o2()","H(qJ,qJ)","Q(qJ)","H(qK,qK)","Ny(Y)","Q(hV)","Te(Y)","XV(Y)","X1(Y)","abY(Y)","LG(Y)","aaO(Y,ht<al<iU>>)","aaN(Y,H)","cE(abd)","qJ(a0<@,@>)","r(o2)","Ly(Y)","a0<n,@>(qJ)","qK(a0<@,@>)","a0<n,@>(k9)","a0<n,@>(qK)","Q(qK)","a0<n,@>(li)","li(@)","a0<n,@>(i7)","i7(@)","hV(@)","au<~>(k9)","a0<n,@>(hV)","~(H,H)","hV(hV)","~(Db,ao1)","au<Q>(al<hV>)","XU(Y)","~(hV)","YF(Y)","Tf(Y)","n(hV)","Q(li)","w8(bq<H,li>)","a9m(Y,H)","H(i7,i7)","a9e(li)","r(qP)","bG(H_)","Xq(Y)","~(cQ{bumpWalletRevision:Q,cloudRequest:Q})","~(n,P,P,P)","P(N)","~(cQ)","Yd(Y)","~(Db)","n(n)","YG(Y)"])
C.cl8.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.cl9(r,w,s.b,v,s.d)
t=s.e
r.b=B.dE(t,u)
v.r=new C.cl5(r)
v.e=new C.cl6(r,w)
v.f=new C.cl7(r,w,t,u)},
$S:0}
C.cl9.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.l2(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=B.a5(r)
u=B.c7(r)
s=v
q=u
p=B.ED(s,q)
if(p==null)p=new B.iS(s,q==null?B.a0L(s):q)
t=p
o.d.hc(t.a,t.b)
return}o.d.H(0,w)}else{o.e.a(null)
o.d.H(0,null)}},
$S:38}
C.cl5.prototype={
$0(){this.a.b.a9(0)
return $.Fc()},
$S:1611}
C.cl6.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.aqo.$0()
this.a.b.a9(0)},
$S:0}
C.cl7.prototype={
$0(){var w,v=this,u=v.b,t=B.dB(0,0,u.gb7x(),0,0,0)
u.kj(0)
u=v.c
w=v.a
w.b=B.cW(new B.b7(u.a-t.a),new C.cl4(w,u,v.d))},
$S:0}
C.cl4.prototype={
$0(){var w=this.c
this.a.b=B.dE(this.b,w)
w.$1(null)},
$S:0}
C.eKV.prototype={
$1(d){var w=this.a
w.n(new C.eKU(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.eKU.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.c()
w.e=new B.ht(D.abo,this.b,null,null,v.$ti.k("ht<1>"))},
$S:0}
C.eKX.prototype={
$2(d,e){var w=this.a
w.n(new C.eKS(w,d,e))},
$S:54}
C.eKS.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.c()
w.e=new B.ht(D.abo,null,this.b,this.c,v.$ti.k("ht<1>"))},
$S:0}
C.eKW.prototype={
$0(){var w=this.a
w.n(new C.eKT(w))},
$S:0}
C.eKT.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.ht(A.zk,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fha.prototype={
$1(d){return d.a===this.a&&A.a.i(d.b.toLowerCase())===this.b&&d.x===A.cc},
$S:16}
C.fh4.prototype={
$1(d){return d},
$S:13}
C.f2k.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return B.p(A.B,new B.B(new B.L(u,0,u,0),B.d("NGMY",w,1,A.eA,w,!1,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,A.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),A.h,w,w,A.a6W,w,v,w,w,w,w,w,v)},
$S:144}
C.f2h.prototype={
$3(d,e,f){return this.a.$0()},
$S:135}
C.f2i.prototype={
$2(d,e){var w,v=this,u=e.b
if(A.a.i(u==null?"":u).length!==0){u.toString
w=A.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return B.k7(w,A.B,v.d,new C.f2g(v.e),A.fG,v.c,!0,v.b,null,null,v.a)},
$S:1612}
C.f2g.prototype={
$3(d,e,f){return this.a.$0()},
$S:135}
C.f2j.prototype={
$3(d,e,f){return this.a.$0()},
$S:135}
C.d27.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.d2i.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.d2A.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:7}
C.d2B.prototype={
$1(d){return this.a.I7()},
$S:14}
C.d2q.prototype={
$0(){var w=J.b4(this.b,new C.d2p(),x.P)
w=B.z(w,w.$ti.k("ai.E"))
this.a.f=w},
$S:0}
C.d2p.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:7}
C.d2r.prototype={
$0(){var w=this.a,v=w.a.d.b1,u=B.S(v).k("I<1,a0<n,@>>")
v=B.z(new B.I(v,new C.d2o(),u),u.k("ai.E"))
w.f=v},
$S:0}
C.d2o.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:7}
C.d2t.prototype={
$0(){var w=this.a,v=w.a.d.b1,u=B.S(v).k("I<1,a0<n,@>>")
v=B.z(new B.I(v,new C.d2s(),u),u.k("ai.E"))
w.f=v},
$S:0}
C.d2s.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:7}
C.d2l.prototype={
$0(){var w=0,v=B.j(x.c),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.c2T(t.a.c)?2:3
break
case 2:w=4
return B.b(C.amK(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.n(new C.d2j(t))
case 3:if(t.c!=null)t.n(new C.d2k(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:52}
C.d2j.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d2k.prototype={
$0(){return this.a.d++},
$S:0}
C.d2m.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d2n.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d2d.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.hMQ(t.a.d.b1,J.k(J.q(u.b,"id")),"rejected")
t.a.bm()
w=2
return B.b(C.aeE(t.a.d.b1),$async$$0)
case 2:w=3
return B.b(t.I7(),$async$$0)
case 3:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.d2e.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a6(s)
C.hC4(t.a.d.b1,J.k(r.h(s,"id")),t.a.c.c)
t.a.bm()
w=2
return B.b(C.aeE(t.a.d.b1),$async$$0)
case 2:w=3
return B.b(t.I7(),$async$$0)
case 3:t.H2(A.d.dP(t.y,new C.d2b(s),new C.d2c(t)),J.k(r.h(s,"id")))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.d2b.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d2c.prototype={
$0(){return A.d.gI(this.a.y)},
$S:z+5}
C.d2f.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d2g.prototype={
$0(){return A.d.gI(this.a.y)},
$S:z+5}
C.d2h.prototype={
$0(){return this.a.H2(this.b,J.k(J.q(this.c,"id")))},
$S:0}
C.d2a.prototype={
$0(){return this.a.bUF(this.b)},
$S:0}
C.d29.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.hNg(u,w.b,new C.d28(v,w))},
$S:0}
C.d28.prototype={
$2(d,e){return this.a.aeo(this.b,d,e)},
$S:468}
C.d2z.prototype={
$2(d,e){if(d)return
this.a.aNO()},
$S:114}
C.d2x.prototype={
$2(d,e){var w=this.a
return new B.kU(C.aWn(w.a.c.a),new C.d2w(w,this.b,this.c),null,null,x.gH)},
$S:1614}
C.d2w.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=B.m(12)
v=B.m(12)
u=B.d(s>5000?"5000":""+s,t,t,t,t,t,t,t,t,t,t)
return B.aD(!1,A.X,!0,w,B.aH(!1,v,!0,new B.B(A.kW,B.bBC(A.cL,B.V(A.fR,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.d2v(this.a,d),t,t,t,t,t,t,t),A.h,this.b,0,t,t,t,t,t,A.ac)},
$S:1615}
C.d2v.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fdt(s.c.a,s.e).eL(new C.d2u())
w=2
return B.b(C.bz0(u.b,t.a.c.a),$async$$0)
case 2:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.d2u.prototype={
$1(d){},
$S:29}
C.d2y.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dFj.prototype={
$0(){var w=this.a
return B.Ji(w.a.c.a,new C.dFi(w))},
$S:79}
C.dFi.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dFk.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&B.c()
u.bc=t.ad()
v.bm()
w.n(new C.dFh())},
$S:0}
C.dFh.prototype={
$0(){},
$S:0}
C.dFl.prototype={
$2(d,e){var w,v=this.a
if(!C.c2T(v.a.c)){if($.fzG.q(0,A.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.fzH(this.b,v.x,w)
return!1}C.amK(v.a.c.a)}if(B.Ji(v.a.c.a,new C.dFg(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aCK()
w=v.a
w.toString
w.he(new B.cQ(A.o.u(1000*Date.now()),v.a.c.a,d,A.jr,A.eX,e,null,null,A.cc,new B.N(Date.now(),0,!1)))
v.a.bm()
return!0},
$S:1616}
C.dFg.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dFm.prototype={
$3$bonus(d,e,f){var w,v=null,u=A.o.u(1000*Date.now()),t=this.a,s=t.a
s.he(new B.cQ(u,s.c.a,d,A.fA,A.eX,e,v,v,A.cc,new B.N(Date.now(),0,!1)))
t.a.bm()
w=f>0?"+$"+A.k.ab(d,2)+" total (includes $3 bonus for +3!)":"+$"+A.k.ab(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.v_(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1617}
C.d21.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d24.prototype={
$0(){return B.iC(this.a,null)},
$S:0}
C.d25.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d26.prototype={
$1(d){var w=null,v=this.a,u=B.fe(w,w,v.e===d?A.bs:B.W(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,w,w,w,w,w,w,w,w)
return B.C(new B.B(A.eW,B.hU(B.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.d23(v,d),u),w),1)},
$S:222}
C.d23.prototype={
$0(){var w=this.a
return w.n(new C.d22(w,this.b))},
$S:0}
C.d22.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d3U.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.d3X.prototype={
$1(d){this.a.cav()
return null},
$S:14}
C.d3Y.prototype={
$1(d){return this.a.cpT()},
$S:14}
C.d3Z.prototype={
$1(d){this.a.a_T()
return null},
$S:14}
C.d4_.prototype={
$1(d){this.a.aft()
return null},
$S:14}
C.d40.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.ci)return
w=v.Q
w===$&&B.c()
if(w<=0){v.n(new C.d3V(v))
w=v.as
if(w!=null)w.a9(0)
v.DL()
return}v.n(new C.d3W(v))},
$S:14}
C.d3V.prototype={
$0(){return this.a.Q=0},
$S:0}
C.d3W.prototype={
$0(){var w=this.a,v=w.Q
v===$&&B.c()
w.Q=v-1
return v},
$S:0}
C.d39.prototype={
$0(){return this.a.by=this.b},
$S:0}
C.d3a.prototype={
$0(){return this.a.by=this.b},
$S:0}
C.d3D.prototype={
$1(d){return this.a.go.q(0,d)},
$S:58}
C.d3E.prototype={
$0(){},
$S:0}
C.d3p.prototype={
$0(){var w=this.b
w.ci=!0
w.cT="Waiting for both players\u2026"
w.cd="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.d3q.prototype={
$0(){var w=this.a
w.ci=!0
w.cT="Both players connected"
w.cd="Starting together in a moment\u2026"},
$S:0}
C.d3r.prototype={
$0(){var w=this.b
w.ci=!0
w.cT="Match starting together\u2026"
w.cd="Both players start in "+A.o.D(this.c,1,99)+"s"},
$S:0}
C.d3s.prototype={
$0(){this.b.ci=!1},
$S:0}
C.d3t.prototype={
$0(){},
$S:0}
C.d2C.prototype={
$0(){var w=this.a,v=w.x2,u=B.t(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.d38.prototype={
$0(){var w=this.a
w.at=this.b
w.b_B()},
$S:0}
C.d3F.prototype={
$0(){},
$S:0}
C.d3O.prototype={
$0(){},
$S:0}
C.d3C.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.n(new C.d3B(w))},
$S:0}
C.d3B.prototype={
$0(){var w=this.a
w.y=!0
w.z=new B.N(Date.now(),0,!1)},
$S:0}
C.d36.prototype={
$0(){var w=this.a;++w.Y
w.y=!1
w.z=null},
$S:0}
C.d37.prototype={
$0(){},
$S:0}
C.d3J.prototype={
$1(d){return d==null},
$S:234}
C.d3K.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
A.d.cu(v.ch,w.d)},
$S:0}
C.d3L.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.d2D.prototype={
$1(d){return d==null},
$S:234}
C.d2E.prototype={
$0(){return this.a.bc++},
$S:0}
C.d2F.prototype={
$0(){},
$S:0}
C.d3i.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.d3j.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.H(0,t)
w=this.c
u.H(0,w)
if(v.ghr()&&D.m9.q(0,v.a.e)){u=v.id
u.H(0,t)
u.H(0,w);++v.fx}++v.k2
v.fy=B.a([],x.t)},
$S:0}
C.d3k.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.n(new C.d3h(w))},
$S:11}
C.d3h.prototype={
$0(){var w=this.a
w.fy=B.a([],x.t)
w.k1=!1},
$S:0}
C.d3u.prototype={
$0(){return this.a.y1++},
$S:0}
C.d3v.prototype={
$0(){},
$S:0}
C.d3w.prototype={
$0(){return this.a.y2++},
$S:0}
C.d3x.prototype={
$0(){},
$S:0}
C.d3y.prototype={
$0(){return this.a.b1++},
$S:0}
C.d3z.prototype={
$0(){},
$S:0}
C.d3I.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.d3l.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d3m.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.d3n.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d3o.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.d3M.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.d3N.prototype={
$0(){var w=this.a
w.ok.push(w.d.aG(4))
w.p2=0},
$S:0}
C.d2G.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d2H.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.d2I.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d2J.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.d3G.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.d3H.prototype={
$0(){var w,v=this.a;++v.x2
v.aJK()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+B.t(Math.min(w+2,7))+" tiles"},
$S:0}
C.d3g.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.d3A.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d3e.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d3f.prototype={
$2(d,e){return d+e.length},
$S:213}
C.d3P.prototype={
$0(){return B.iC(this.a,null)},
$S:0}
C.d3Q.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d3R.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d3T.prototype={
$1(d){var w=this.a,v=w.MO(),u=v<=0?0:A.k.D(w.z3()/v,0,1),t=w.a.x,s=t*1.46
return new C.Ly(w.f?s:s*u,s,t,null)},
$S:z+21}
C.d3S.prototype={
$1(d){return d.bR(0.85)},
$S:156}
C.d3d.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghr()&&D.m9.q(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return B.u(B.a([B.d(p,w,w,w,w,w,w,A.jM,A.L,w,w),A.ar,B.C(B.as(new B.a3(r*v+u,r*t+s,B.ig(!0,w,w,A.z,new B.hI(v,6,6,1,r),new C.d3c(q,r),q.fr.length,w,A.dJ,A.ag,!1),w),w,w,w),1)],x.p),A.m,w,A.e,A.j,0,A.p)},
$S:145}
C.d3c.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.q(0,e),p=r.ghr()&&D.m9.q(0,r.a.e)&&q&&r.id.q(0,e),o=r.ghr()&&D.m9.q(0,r.a.e)&&q&&!p,n=A.d.q(r.fy,e)||q,m=p?D.ajm:D.bEM,l=B.m(10),k=B.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.ajm:D.ajg
v=o?B.G(A.dD,A.r,2):s
u=B.a([new B.a9(0,A.G,B.W(51,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.J,4)],x.V)
t=this.b*0.42
return B.aH(!1,l,!0,B.dg(s,B.as(n?B.V(D.c7w[r.fr[e]],A.c,s,s,s,t):B.d("?",s,s,s,s,s,s,B.l(s,s,A.c,s,s,s,s,s,s,s,s,t,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,A.b9,new B.o(s,s,v,k,u,w,A.n),A.eE,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.d3b(r,e),s,s,s,s,s,s,s)},
$S:185}
C.d3b.prototype={
$0(){return this.a.c9S(this.b)},
$S:0}
C.d2W.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?B.W(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.W(89,A.bs.l()>>>16&255,A.bs.l()>>>8&255,A.bs.l()&255),r=B.m(10),q=B.m(10),p=B.m(10),o=B.G(B.W(64,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
return B.aD(!1,A.X,!0,r,B.aH(!1,q,!0,B.p(A.B,B.d(t?"":u,w,w,w,w,w,w,D.aJd,w,w,w),A.h,w,w,new B.o(w,w,o,p,w,w,A.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d2V(v,d),w,w,w,w,w,w,w),A.h,s,0,w,w,w,w,w,A.ac)},
$S:613}
C.d2V.prototype={
$0(){return this.a.cpc(this.b)},
$S:0}
C.d2X.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=B.W(46,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
return B.aD(!1,A.X,!0,B.m(10),B.aH(!1,B.m(10),!0,B.p(A.B,B.d(u,w,w,w,w,w,w,D.aJd,w,w,w),A.h,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d2U(v,d),w,w,w,w,w,w,w),A.h,t,0,w,w,w,w,w,A.ac)},
$S:613}
C.d2U.prototype={
$0(){return this.a.cpb(this.b)},
$S:0}
C.d2Y.prototype={
$1(d){return this.a.n(new C.d2T())},
$S:27}
C.d2T.prototype={
$0(){},
$S:0}
C.d2Z.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&B.c()
w=C.aeP(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.om()
if(u.ghr()&&D.m9.q(0,u.a.e)){u.Zf()
u.mt(!0)}else{v=A.d.cI(u.cy,0,new C.d2R())
t=u.dx
if(t>=v)u.rV("All 5 sentences perfect \u2014 full payout!")
else u.Dc(t/v,t,v)}}else{if(u.ghr()&&D.m9.q(0,u.a.e))u.Zf()
u.n(new C.d2S(u))}},
$S:0}
C.d2R.prototype={
$2(d,e){return d+e.length},
$S:213}
C.d2S.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bG(0,A.c_)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.d3_.prototype={
$1(d){var w=null,v=B.fe(w,w,B.W(38,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,A.c9,w,w,w,w,w,w,w)
return new B.B(A.cK,new B.a3(1/0,w,B.hU(B.d(d,w,w,w,w,w,w,U.aJ7,w,w,w),new C.d2Q(this.a,d),v),w),w)},
$S:128}
C.d2Q.prototype={
$0(){return this.a.aZY(this.b)},
$S:0}
C.d30.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&B.c()
w=u*3+8
return B.u(B.a([B.d(s,v,v,v,v,v,v,A.nE,v,v,v),A.P,B.C(B.as(new B.a3(w,w,B.ig(!0,v,v,A.z,new B.hI(3,4,4,1,u),new C.d2P(t,u),9,v,A.dJ,A.ag,!1),v),v,v,v),1)],x.p),A.m,v,A.e,A.j,0,A.p)},
$S:145}
C.d2P.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.aXO(e),p=r===0
if(p)w=A.K
else w=q?A.bs:B.W(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v=B.m(10)
s=p?t:new C.d2L(s,e)
u=B.m(10)
p=p?"":""+r
return B.aD(!1,A.X,!0,v,B.aH(!1,u,!0,B.as(B.d(p,t,t,t,t,t,t,B.l(t,t,A.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),A.h,w,0,t,t,t,t,t,A.ac)},
$S:73}
C.d2L.prototype={
$0(){return this.a.cpa(this.b)},
$S:0}
C.d31.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.d2O(q,d)
p=B.m(16)
if(o)w=D.a_1[d]
else{w=D.a_1[d]
w=B.W(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=B.m(16)
u=o?B.W(A.k.U(127.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.W(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
u=B.G(u,A.r,o?2:1)
t=x.V
if(o){s=D.a_1[d]
t=B.a([new B.a9(0,A.G,B.W(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.J,16)],t)}else t=B.a([],t)
return B.aH(!1,p,!0,B.dg(r,r,r,r,A.b9,new B.o(w,r,u,v,t,r,A.n),T.zs,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1621}
C.d2O.prototype={
$0(){return this.a.cpd(this.b)},
$S:0}
C.d32.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&B.c()
q=B.d(q,t,t,t,t,t,t,A.nE,t,t,t)
w=B.d("Move "+r.auh()+"/"+C.fFD(),t,t,t,t,t,t,A.BL,t,t,t)
v=r.x2
u=s*3+12
return B.u(B.a([q,w,B.d("Round "+v+"/7 \xb7 "+B.t(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,B.l(t,t,B.W(153,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.C(B.as(new B.a3(u,u,B.ig(!0,t,t,A.z,new B.hI(3,6,6,1,s),new C.d2N(r),9,t,A.dJ,A.ag,!1),t),t,t,t),1)],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:145}
C.d2N.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=B.m(10),s=B.m(10),r=u?A.bs:D.b1t,q=u?A.eZ:D.b8L
return B.aD(!1,A.X,!0,w,B.aH(!1,t,!0,B.p(w,w,A.h,w,w,new B.o(r,w,B.G(q,A.r,u?2.5:1),s,w,w,A.n),w,w,w,w,w,w,w,w),w,!0,w,w,A.K,w,w,w,w,w,w,w,w,new C.d2K(v,e),w,w,w,w,A.K,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)},
$S:73}
C.d2K.prototype={
$0(){return this.a.cp8(this.b)},
$S:0}
C.d33.prototype={
$0(){return this.a.aZY(this.b[this.c])},
$S:0}
C.d34.prototype={
$0(){return this.a.n(new C.d2M())},
$S:0}
C.d2M.prototype={
$0(){},
$S:0}
C.d35.prototype={
$2(d,e){this.a.Y1(d,e)
return null},
$S:z+36}
C.d7b.prototype={
$1(d){return this.a.cak(this.b,d)},
$S:1622}
C.d7a.prototype={
$0(){var w=this
return w.a.a.cHd(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cwd.prototype={
$1(d){var w=this.a
w.Zw()
w.t1()},
$S:8}
C.cvy.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cvo.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cvp.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cvI.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cvF.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cvG.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cvH.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cvA.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new C.cvz(w))},
$S:0}
C.cvz.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cvq.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.aa(w.c)
v.dy=J.aa(w.d)
v.fr=J.aa(w.e)},
$S:0}
C.cvD.prototype={
$1(d){var w=this.a
return new C.Te(w.fx,new C.cvC(w),w.a.f.r,null)},
$S:z+11}
C.cvC.prototype={
$1(d){return this.bdC(d)},
bdC(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.c3M(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.n(new C.cvB(r,d))
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:z+37}
C.cvB.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cw0.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cvV.prototype={
$1(d){this.a.t1()
return null},
$S:14}
C.cvY.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(A.o.ak(v.gaQB().a,1e6)<=0){w=v.id
if(w!=null)w.a9(0)
v.t1()
return}v.n(new C.cvX())},
$S:14}
C.cvX.prototype={
$0(){},
$S:0}
C.cvU.prototype={
$1(d){this.a.DR()
return null},
$S:14}
C.cvW.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cvT.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=B.bg(J.k(v==null?"":v))
if(u==null)u=new B.N(B.fI(0,0,!1),0,!1)
v=J.q(e,"at")
w=B.bg(J.k(v==null?"":v))
return u.aI(0,w==null?new B.N(B.fI(0,0,!1),0,!1):w)},
$S:39}
C.cvv.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=B.bg(J.k(v==null?"":v))
if(u==null)u=new B.N(B.fI(0,0,!1),0,!1)
v=J.q(e,"at")
w=B.bg(J.k(v==null?"":v))
return u.aI(0,w==null?new B.N(B.fI(0,0,!1),0,!1):w)},
$S:39}
C.cvw.prototype={
$0(){var w=this.a,v=w.f
A.d.a8(v)
A.d.v(v,this.b)
w.ax=!0},
$S:0}
C.cvx.prototype={
$0(){var w=this.a
if(w.c!=null)w.a_a(!0)},
$S:11}
C.cvt.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cvu.prototype={
$1(d){var w=this.a.e
w===$&&B.c()
if(w.f.length!==0)w.RQ(this.b)},
$S:8}
C.cvL.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=A.d.gcV(v).Q
v.toString
if(this.b)w.hO(v)
else w.lC(v,A.dU,A.kq)},
$S:8}
C.cvE.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cvM.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cvN.prototype={
$0(){var w=this.a
w.f.push(B.D(["role","user","text",this.b,"at",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z))
w.b0n()
w.r.bG(0,A.c_)
w.at=!0},
$S:0}
C.cvO.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cvP.prototype={
$0(){var w=this.a
w.f.push(B.D(["role","ai","text",this.b,"at",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z))
w.at=!1},
$S:0}
C.cvQ.prototype={
$0(){var w,v=this.b,u=B.R(x.N,x.z)
J.aE(u,"role","ai")
J.aE(u,"text",this.c)
J.aE(u,"at",new B.N(Date.now(),0,!1).a4().aa())
w=this.a
if(J.cs(w.b)){w=J.b4(w.b,v.gc9j(),x.P)
w=B.z(w,w.$ti.k("ai.E"))
J.aE(u,"phoneActions",w)}v.f.push(u)
v.b0n()},
$S:0}
C.cvR.prototype={
$0(){this.a.f.push(B.D(["role","ai","text",y.g,"at",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z))},
$S:0}
C.cvS.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cvJ.prototype={
$1(d){return this.bdD(d)},
bdD(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:k=t.a
if(k.c==null||d==null){w=1
break}s=t.b.b
r=J.a6(s)
q=r.h(s,"start")
p=B.bg(q==null?"":q)
q=r.h(s,"end")
o=B.bg(q==null?"":q)
w=p!=null?3:4
break
case 3:q=k.a.c.a
n=Date.now()
m=r.h(s,"title")
m=A.a.i(m==null?"Event":m)
l=p.bO()
w=5
return B.b(C.an7(q,new C.qJ("cal_"+1000*n,m,l,(o==null?p.bL(36e8):o).bO(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.ani()
case 4:k.c.F(x.q).f.P(B.b0(null,null,null,A.dl,null,A.q,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:388}
C.cw_.prototype={
$1(d){return this.bdE(d)},
bdE(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.F(x.q).f.P(B.b0(null,null,null,A.dl,null,A.q,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:388}
C.cvK.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=A.d.gcV(v).Q
v.toString
w.hO(v)},
$S:8}
C.cwc.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.c()
if(v>0)w.a8r(v-1)},
$S:0}
C.cw5.prototype={
$0(){return B.iC(this.a,null)},
$S:0}
C.cw8.prototype={
$1(d){var w=this.a
w.n(new C.cw2(w,d))
if(d===0)w.a_a(!0)},
$S:27}
C.cw2.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cw6.prototype={
$2$size(d,e){return C.fE4(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:1623}
C.cw7.prototype={
$0(){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.fQf(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return B.b(H.anV(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cw3(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return B.b(C.an5(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return B.b(p.t1(),$async$$0)
case 15:p.n(new C.cw4(p))
p.a8r(0)
case 14:u=!1
w=1
break
case 11:w=16
return B.b(p.t1(),$async$$0)
case 16:case 9:case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:61}
C.cw3.prototype={
$2(d,e){return this.bdF(d,e)},
bdF(d,e){var w=0,v=B.j(x.y),u,t=this,s,r,q,p
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=B.a_L(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$S:118}
C.cw4.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cwa.prototype={
$2(d,e){return A.ab},
$S:35}
C.cw9.prototype={
$2(d,e){var w=null,v=this.a,u=B.d((v.a.c.w?D.a_7:D.Zu)[e],w,w,w,w,w,w,A.pz,w,w,w),t=B.W(31,A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255),s=B.W(89,A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255)
v=v.at?w:new C.cw1(v,e)
return B.n_(w,t,u,w,v,w,new B.ay(s,1,A.r,-1),w)},
$S:556}
C.cw1.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a_7:D.Zu
w.r.saR(0,v[this.b])
w.ms()
return null},
$S:0}
C.cwb.prototype={
$1(d){var w=this.a
return w.at?null:w.ms()},
$S:2}
C.cvr.prototype={
$0(){return this.a.a8r(0)},
$S:0}
C.cvZ.prototype={
$0(){return this.a.a8r(this.b)},
$S:0}
C.cvs.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=B.p(v,D.bzz,A.h,v,v,new B.o(v,v,v,v,v,new B.a8(A.a_,A.a7,A.w,B.a([B.W(51,A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255),w.b],x.O),v,v),A.a6),v,72,v,v,v,v,v,72)
t=w.c
s=B.d("Start a conversation",v,v,v,v,v,v,B.l(v,v,t?A.c:A.aG,v,v,v,v,v,v,v,v,16,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return B.as(new B.B(A.UR,B.u(B.a([u,A.aa,s,A.ar,B.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,B.l(v,v,t?A.aB:A.aV,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),v,v,v)}if(e<s)return u.byC(t[e],w.c)
return u.aKk(B.D(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:42}
C.bTl.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=A.k.M(d)
return new B.N(B.fI(w>1e11?w:w*1000,0,!0),0,!0).bO()}v=B.bg(J.k(d))
return v==null?null:v.bO()},
$S:327}
C.bTk.prototype={
$1(d){B.aQ(d)
return(d==null?0:d)/100},
$S:712}
C.bTn.prototype={
$1(d){var w
if(d==null)w=null
else{w=B.bg(J.k(d))
w=w==null?null:w.bO()}return w},
$S:327}
C.bTm.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null
if(!x.f.b(d))return m
w=B.Z(d,x.N,x.z)
try{v=J.q(w,"id")
v=J.k(v==null?"":v)
u=J.q(w,"userEmail")
u=J.k(u==null?"":u)
t=B.aQ(J.q(w,"amount"))
if(t==null)t=0
s=J.q(w,"type")
s=B.a2h(A.a_K,J.k(s==null?"reimbursement":s))
r=J.q(w,"method")
r=B.a2h(A.Zs,J.k(r==null?"system":r))
q=B.aR(J.q(w,"sourceDetails"))
p=J.q(w,"status")
p=B.a2h(A.F7,J.k(p==null?"approved":p))
o=this.a.$1(J.q(w,"timestamp"))
if(o==null)o=new B.N(Date.now(),0,!1)
return new B.cQ(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:620}
C.dnB.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dnC.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dns.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bi(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dnq.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=u.a
w=2
return B.b(o.zG(),$async$$0)
case 2:t=o.d
t===$&&B.c()
s=o.e
s===$&&B.c()
r=o.a.c
q=o.f
q===$&&B.c()
w=3
return B.b(C.fyE(t,s,r,q),$async$$0)
case 3:p=e
w=4
return B.b(B.oz(o.a.c,!1),$async$$0)
case 4:o.ko(p)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dnA.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.a7_(),$async$$0)
case 3:q=e
if(q==null){r.ko("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return B.b(B.a7(s,!1).cr(B.eI(new C.dnz(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return B.b(B.oz(r.a.c,!1),$async$$0)
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dnz.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&B.c()
return new C.XU(w.b,w.a,u,v,null)},
$S:z+38}
C.dnp.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.hjg(q)?3:4
break
case 3:w=5
return B.b(t.a.Dr(A.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return B.b(C.aTY(q,s.a.c),$async$$0)
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
case 9:s.ko(C.bTp(s.a.c))
w=1
break
case 10:s.ko("That code didn't match anything on your account. Double-check it and try again.")
w=1
break
case 11:s.ko(y.B)
w=1
break
case 12:q=r.b
q.toString
w=14
return B.b(s.yV(q,!0,!0),$async$$0)
case 14:w=1
break
case 13:q=r.b
q.toString
w=15
return B.b(s.aLy(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dno.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=B.bi(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dnr.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.aag(),$async$$0)
case 3:q=e
if(q==null||A.a.i(q).length===0){w=1
break}s=C.fNh(q)
if(s==null){r.ko("Could not read that backup file.")
w=1
break}if(!C.bTo(s,r.a.c,null)){r.ko(C.bTp(r.a.c))
w=1
break}w=4
return B.b(r.bAU(s),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dny.prototype={
$1(d){var w=null,v=new B.ao(A.aq,$.at()),u=B.K(d).ax.a===A.H,t=u?A.hm:A.c,s=x.p,r=B.u(B.a([B.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,B.l(w,w,u?A.ak:A.al,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),A.az,B.aK(w,A.U,!0,w,!0,A.q,w,B.aL(),v,w,w,w,w,w,2,B.bn(w,new B.b2(4,B.m(14),A.d9),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),A.z,!0,w,!0,w,!1,w,A.ad,w,w,w,w,w,A.dL,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.L,w,A.am,w,w,w,w)],s),A.F,w,A.e,A.R,0,A.p)
return B.ei(B.a([B.bE(!1,A.de,w,w,!0,w,w,new C.dnw(d),w,w),B.bJ(D.eDw,new C.dnx(d,v),B.bk(A.aS,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.eQS,w)},
$S:19}
C.dnw.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.dnx.prototype={
$0(){var w=A.a.i(this.b.a.a)
B.a7(this.a,!1).K(w)
return null},
$S:0}
C.dnt.prototype={
$1(d){return D.f4a},
$S:z+12}
C.dnu.prototype={
$0(){return this.a.Ds(A.a.i(this.b))},
$S:1}
C.dnv.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(C.aTY(t.b,r.a.c),$async$$0)
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
return B.b(r.yV(s,!0,!0),$async$$0)
case 11:w=1
break
case 7:r.ko(C.bTp(r.a.c))
w=1
break
case 8:r.ko("Could not read that QR code for your account.")
w=1
break
case 9:r.ko(y.B)
w=1
break
case 10:s=q.b
s.toString
w=12
return B.b(r.aLy(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dnD.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.dnH.prototype={
$1(d){this.a.P_()
return null},
$S:14}
C.dnE.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dnF.prototype={
$0(){var w=null,v=this.a
B.fB(new B.fu(v.gasH()))
this.b.F(x.q).f.P(B.b0(w,w,w,w,w,A.q,w,B.d("Code "+v.gasH()+" copied",w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dnG.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.dnI.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:A.a.i(t)
if(s==null||s.length===0)continue
if(!(A.a.a_(s,"NGMYSNAP1|")||A.a.a_(s,"NGMYLOCALSYNC1|")||A.a.a_(s,"NGMYLOCALLIVE1|")||A.a.a_(s,"NGMYLOCALDEP1|")))continue
r.e=!0
B.a7(this.b,!1).K(s)
return}},
$S:194}
C.f5z.prototype={
$1(d){return D.f2t},
$S:z+13}
C.f6M.prototype={
$1(d){return new C.abY(this.a,this.b,this.c,null)},
$S:z+14}
C.eEQ.prototype={
$0(){B.a7(this.a,!1).K(!1)
return null},
$S:0}
C.eER.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.cYr.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.ft()},
$S:8}
C.cYo.prototype={
$2(d,e){return e.ahy(e.a.toUpperCase())},
$S:1624}
C.cYp.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=A.a.i(w.d.a.a)
B.a7(v,!1).K(w)
return null},
$S:2}
C.cYq.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.bU6.prototype={
$1(d){var w=J.q(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!A.d.be(D.cUv,A.a.gkQ(v))},
$S:4}
C.fdn.prototype={
$1(d){return d.a===this.a},
$S:1625}
C.fdo.prototype={
$0(){return A.d.gI(A.AG)},
$S:1626}
C.du2.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.n(new C.du1(v))
w=v.r
w===$&&B.c()
if(w<=0)v.b_s("Time's up")},
$S:14}
C.du1.prototype={
$0(){var w=this.a,v=w.r
v===$&&B.c()
w.r=v-1
return v},
$S:0}
C.dtU.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dtZ.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.n(new C.dtW(w,d,e))},
$S:125}
C.dtW.prototype={
$0(){var w=this.a,v=this.c
w.e=A.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.du_.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new C.dtV(w))
w.cjH(!0)},
$S:0}
C.dtV.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.du0.prototype={
$1(d){this.a.b_s(d)
return null},
$S:2}
C.dtX.prototype={
$0(){return B.iC(this.a,null)},
$S:0}
C.dtY.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.f7v.prototype={
$5(d,e,f,g,h){var w,v=null,u=J.a6(d),t=B.aQ(u.h(d,e)),s=t==null?v:A.k.M(t)
if(s==null)s=0
if(s<=0)return v
t=u.h(d,g)
if(J.k(t==null?"":t)!==h){u.m(d,g,h)
u.m(d,f,0)}t=B.aQ(u.h(d,f))
w=t==null?v:A.k.M(t)
if(w==null)w=0
if(w>=s)return v
u.m(d,f,w+1)
u=B.aQ(u.h(d,"outcome"))
return u==null?v:A.k.M(u)},
$S:1627}
C.f7w.prototype={
$2(d,e){var w=B.aQ(J.q(d,e))
w=w==null?null:A.k.M(w)
return w==null?0:w},
$S:466}
C.f7x.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:213}
C.fkm.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.fYo(w,v):C.fEm(w,v)
if(u===3)++w.f
C.adk(w,this.c,u)
return u},
$S:1628}
C.fko.prototype={
$0(){return C.fYo(this.a,this.b)},
$S:109}
C.fkn.prototype={
$0(){return C.fEm(this.a,this.b)},
$S:109}
C.dnd.prototype={
$0(){var w=this.a
if(w.a.c)w.n(new C.dnc(w))},
$S:0}
C.dnc.prototype={
$0(){this.a.r=1+A.o.J(B.Dt(new B.N(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dne.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&B.c()
u=u.x
u===$&&B.c()
w=A.k.bK(u*10)
if(w!==v.w)v.n(new C.dnb(v,w))}},
$S:0}
C.dnb.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.c2s.prototype={
$3(d,e,f){var w=null
return B.C(B.u(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,A.I,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.bw,B.eY(A.B,B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,A.dp)],x.p),A.m,w,A.e,A.j,0,A.p),1)},
$S:1629}
C.c2r.prototype={
$3(d,e,f){var w=null
return B.d("$"+A.k.ab(e,2),w,w,w,w,w,w,A.oq,w,w,w)},
$S:535}
C.c2U.prototype={
$1(d){return new C.LG(this.a,this.b,!1,null,null)},
$S:z+15}
C.dM6.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=B.m(e?0:30)
e=e?g:B.G(A.b0.j(0.5),A.r,1)
w=f.a.e?g:B.a([new B.a9(2,A.G,A.b0.j(0.35),A.J,36),new B.a9(0,A.G,A.bz.j(0.175),A.J,24)],x.V)
v=B.m(f.a.e?0:30)
u=x.O
t=B.an(g,B.p(g,g,A.h,g,g,new B.o(g,g,g,g,g,new B.bS(A.B,0.5,A.w,g,0,B.a([A.bc.j(0.22),A.K],u),g,g),A.a6),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=B.an(-50,B.p(g,g,A.h,g,g,new B.o(g,g,g,g,g,new B.bS(A.B,0.5,A.w,g,0,B.a([A.bz.j(0.18),A.K],u),g,g),A.a6),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?A.j:A.R
p=x.p
o=B.a([],p)
if(f.a.e)o.push(A.P)
n=x.V
o.push(B.p(g,D.bvd,A.h,g,g,new B.o(g,g,B.G(A.aM.j(0.8),A.r,2.5),g,B.a([new B.a9(0,A.G,A.b0.j(0.55),A.cv,18)],n),E.t3,A.a6),g,88,g,g,g,g,g,88))
o.push(A.aO)
o.push(B.nm(A.j2,D.eOG,new C.dM2()))
o.push(A.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(B.d(m,g,g,g,g,g,g,B.l(g,g,A.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,A.cp,g,1.45,!0,g,g,g,g,g,g,g,g),A.L,g,g))
m=this.b
if(m.length!==0){l=A.cN.j(0.12)
k=B.m(18)
j=B.G(A.cN.j(0.45),A.r,1)
i=B.a([B.A(B.a([B.V(D.bpb,A.cN.j(0.95),g,g,g,20),A.ab,B.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,B.l(g,g,A.cN.j(0.95),g,g,g,g,g,g,g,g,13,g,g,A.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),A.m,g,A.e,A.j,0,g,g),A.T,B.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,B.l(g,g,A.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),A.T],p)
A.d.v(i,new B.I(m,new C.dM3(),B.S(m).k("I<1,r>")))
A.d.v(o,B.a([A.aO,B.p(g,B.u(i,A.F,g,A.e,A.j,0,A.p),A.h,g,g,new B.o(l,g,j,k,g,g,A.n),g,g,g,g,A.bC,g,g,1/0)],p))}o.push(A.bu)
m=A.x.j(0.35)
l=B.m(18)
k=B.G(A.b0.j(0.35),A.r,1)
o.push(B.p(g,B.u(B.a([f.ate(A.he,"Unlimited games with an active plan",A.bc),A.P,f.ate(A.jZ,"Weekday check-ins grow your balance",A.b0),A.P,f.ate(A.lW,"Compete, bet, and earn points",A.aM)],p),A.m,g,A.e,A.j,0,A.p),A.h,g,g,new B.o(m,g,k,l,g,g,A.n),g,g,g,g,A.bC,g,g,1/0))
o.push(A.d1)
l=B.m(16)
n=B.a([new B.a9(0,A.G,A.bz.j(0.45),A.cv,16)],n)
o.push(new B.a3(1/0,g,B.bQ(B.dj(D.byo,D.eKy,new C.dM4(f,a0),B.bk(A.K,g,g,g,A.c,A.GP,g,A.K,new B.b5(B.m(16),A.W),g,g,g)),new B.o(g,g,g,l,n,E.t3,A.n),A.b7),g))
o.push(A.P)
n=f.a.e?"Back":"Maybe later"
o.push(B.bE(!1,B.d(n,g,g,g,g,g,g,B.l(g,g,A.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,new C.dM5(f,a0),g,g))
if(f.a.e)o.push(A.b6)
h=B.p(g,B.bu(v,new B.am(A.V,g,A.a9,A.q,B.a([t,u,new B.B(new B.L(22,r,22,q),B.u(o,A.m,g,A.e,s,0,A.p),g)],p),g),A.ap),A.h,g,g,new B.o(g,g,e,d,w,D.bHj,A.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return B.eC(g,A.K,h,g,g,g,Ad.Vm,A.cZ,g,g,g)},
$S:508}
C.dM2.prototype={
$1(d){return D.bGl.aB(0,d)},
$S:66}
C.dM3.prototype={
$1(d){var w=null
return new B.B(A.fh,B.A(B.a([B.V(Ak.Xd,A.cN.j(0.85),w,w,w,14),A.ab,B.C(B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$S:128}
C.dM4.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{B.a7(this.b,!1).K(null)
w.a.c.$0()}},
$S:0}
C.dM5.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else B.a7(this.b,!1).K(null)},
$S:0}
C.ffK.prototype={
$1(d){if(d.gm9())this.a.a=d
return d.gm9()},
$S:596}
C.ffx.prototype={
$1(d){$.aS.x1$.push(new C.ffw(this.a))},
$S:8}
C.ffw.prototype={
$1(d){return this.a.$0()},
$S:8}
C.f3Q.prototype={
$1(d){return C.fYu(this.a,this.b+1)},
$S:8}
C.fh5.prototype={
$2(d,e){var w=B.aG(d,A.bN,x.w).w.a
return new B.a3(w.a,w.b,B.cf(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:173}
C.c36.prototype={
$1(d){return d.r===this.a},
$S:298}
C.c37.prototype={
$1(d){var w=$.aNg(),v=w.a
w.st(0,v+1)
return v},
$S:1633}
C.c38.prototype={
$1(d){},
$S:29}
C.c35.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:298}
C.c34.prototype={
$1(d){return d.f.c9(this.a)},
$S:298}
C.f21.prototype={
$1(d){return B.t(d.h(0,1))+","},
$S:71}
C.fsp.prototype={
$1(d){return C.a4X(this.a)},
$S:98}
C.fsq.prototype={
$1(d){var w=$.aNg()
w.st(0,w.a+1)},
$S:28}
C.fsr.prototype={
$1(d){},
$S:29}
C.fss.prototype={
$1(d){return new B.k1($.aNg(),new C.fso(this.a,this.b),null,null,x.am)},
$S:1634}
C.fso.prototype={
$3(d,e,f){var w=this.b
return new B.kU(C.amP(this.a,!1),new C.fsn(w),w,null,x.gv)},
$S:1635}
C.fsn.prototype={
$2(d,e){var w=e.b
return new C.aaO(w==null?this.a:w,null)},
$S:z+16}
C.dM9.prototype={
$1(d){return d.c},
$S:298}
C.dMa.prototype={
$1(d){return d.gbaA()},
$S:1636}
C.dMb.prototype={
$2(d,e){return d+e},
$S:94}
C.dMc.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.dMe.prototype={
$2(d,e){return A.P},
$S:35}
C.dMd.prototype={
$2(d,e){return new C.aaN(J.q(this.a.c,e),null)},
$S:z+17}
C.dM8.prototype={
$1(d){return d==null?"\u2026":C.bvx(d)},
$S:1637}
C.fsv.prototype={
$3(d,e,f){var w=this
return B.qV(new C.ax6(w.a,w.b,w.c,w.d,new C.fst(d,w.e),new C.fsu(d,w.f),null))},
$C:"$3",
$R:3,
$S:91}
C.fst.prototype={
$0(){B.a7(this.a,!1).K(null)
C.h0p(this.b)},
$S:0}
C.fsu.prototype={
$0(){B.a7(this.a,!1).K(null)
C.h0p(this.b)},
$S:0}
C.d42.prototype={
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
A.d.v(w,new B.I(t,new C.d41(),B.S(t).k("I<1,r>")))}t=h.d
t===$&&B.c()
t=t.x
t===$&&B.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,B.aG(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?B.a([A.bs,A.fo,A.eM],r):B.a([A.aH,A.f5,A.fq],r)
p=B.m(26)
o=B.G(A.c.j(0.4),A.r,2)
n=x.V
m=B.a([new B.a9(6,A.G,(h.a.c?A.dr:A.dy).j(0.5),A.J,36)],n)
l=B.a([],g)
if(h.a.c){k=B.de()
j=k.a
j.$flags&2&&B.ah(j)
j[11]=0.001
k.jw(-0.35)
r=B.a([X.aa_,A.rg],r)
l.push(new B.a3(i,100,new B.am(A.B,i,A.a9,A.h,B.a([B.fk(A.B,B.p(i,D.aXp,A.h,i,i,new B.o(i,i,i,i,B.a([new B.a9(4,A.G,A.cL.j(0.6),A.J,24),new B.a9(0,A.G,A.x.j(0.3),A.dn,12)],n),new B.bS(A.B,0.5,A.w,i,0,r,i,i),A.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.bBz)
l.push(A.az)
l.push(B.d(h.a.d,i,i,i,i,i,i,A.a4l,A.L,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=B.m(18)
k=B.G(A.fo,A.r,4)
A.d.v(l,B.a([A.az,D.eF9,A.P,B.p(i,B.d(r,i,i,i,i,i,i,D.ewh,A.L,i,i),A.h,i,i,new B.o(A.c,i,k,n,i,i,A.n),i,i,i,i,A.UP,i,i,1/0)],g))}A.d.v(l,B.a([A.aa,B.d(h.a.e,i,i,i,i,i,i,D.eyT,A.L,i,i)],g))
l.push(A.dW)
r=B.C(B.dU(D.eCQ,h.a.r,B.d9(i,i,i,i,i,i,i,i,i,A.c,i,i,A.c9,i,i,D.aPt,i,i,i,i)),1)
h=h.a
n=h.w
l.push(B.A(B.a([r,A.aw,B.C(B.bJ(F.aKu,n,B.bk(A.c,i,i,i,h.c?A.fo:A.f5,i,A.c9,i,i,i,i,i)),1)],g),A.m,i,A.e,A.j,0,i,i))
w.push(B.e4(A.B,B.p(i,B.u(l,A.m,i,A.e,A.R,0,A.p),A.h,i,i,new B.o(i,i,o,p,m,new B.a8(A.ax,A.aE,A.w,q,i,i),A.n),i,i,i,A.a8,A.adv,i,i,s),1+t*0.02,i,i))
return new B.am(A.B,i,A.a9,A.h,w,i)},
$S:110}
C.d41.prototype={
$1(d){var w=null,v=d.a,u=d.b
return B.an(w,B.d5(B.et(A.B,d.d,B.V(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+18}
C.c4I.prototype={
$2(d,e){var w=null,v=this.a,u=C.hiI(B.Ji(v.c,v.d))
return B.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1638}
C.c4H.prototype={
$1(d){return B.t(d.h(0,1))+","},
$S:71}
C.bUD.prototype={
$0(){},
$S:0}
C.f11.prototype={
$1(d){return A.o.u(d)},
$S:82}
C.dFp.prototype={
$0(){return this.a.y=!0},
$S:0}
C.dFq.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.dFr.prototype={
$0(){var w=this.a
return w.w=D.O_[w.d.aG(5)]},
$S:0}
C.dFs.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.dFt.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.dFu.prototype={
$0(){var w=this.a
return w.n(new C.dFo(w))},
$S:0}
C.dFo.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dFv.prototype={
$0(){var w=this.a
return w.n(new C.dFn(w))},
$S:0}
C.dFn.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dFy.prototype={
$0(){return B.iC(this.a,null)},
$S:0}
C.dFz.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&A.a.i(t.e.a.a).length===0?A.bs:B.W(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),r=B.m(10)
t=t.y?u:new C.dFx(t,d)
w=B.m(10)
v=A.k.ab(d,0)
return B.C(new B.B(A.jX,B.aD(!1,A.X,!0,r,B.aH(!1,w,!0,new B.a3(u,38,B.as(B.d("$"+v,u,u,u,u,u,u,B.l(u,u,A.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),A.h,s,0,u,u,u,u,u,A.ac),u),1)},
$S:1639}
C.dFx.prototype={
$0(){var w=this.a
return w.n(new C.dFw(w,this.b))},
$S:0}
C.dFw.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bG(0,A.c_)},
$S:0}
C.dMw.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+A.cM.gcq().aE(this.c)},
$S:0}
C.dMx.prototype={
$0(){return B.iC(this.a,null)},
$S:0}
C.dMs.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=B.m(14),s=u?A.c.j(0.1):A.K,r=B.G(u?D.eu.j(0.5):A.K,A.r,1),q=B.V(e,u?D.eu:A.aB,w,w,w,20)
return B.C(B.aJ(w,B.dg(w,B.A(B.a([q,A.bq,B.d(f,w,w,w,w,w,w,B.l(w,w,u?A.c:A.aB,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.b5,A.j,0,w,w),w,w,A.b9,new B.o(s,w,r,t,w,w,A.n),A.X,w,46,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dMu(v,d),w,w,w,w,w,w,!1,A.ae),1)},
$S:1640}
C.dMu.prototype={
$0(){var w=this.a
return w.n(new C.dMt(w,this.b))},
$S:0}
C.dMt.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dMv.prototype={
$0(){var w=this.a,v=w.d===A.k5?"Cash App tag":"Bitcoin address"
return w.Hp(this.b,v)},
$S:0}
C.dMr.prototype={
$0(){var w=this.a
return w.Hp(w.gaoa(),"Code")},
$S:0}
C.c3y.prototype={
$1(d){return C.heR(B.Z(d,x.N,x.z))},
$S:z+19}
C.c3z.prototype={
$2(d,e){return d.c.aI(0,e.c)},
$S:z+6}
C.c3v.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.c3w.prototype={
$2(d,e){return d.c.aI(0,e.c)},
$S:z+6}
C.c3x.prototype={
$1(d){return d.ad()},
$S:z+22}
C.c3A.prototype={
$1(d){var w=d.c
return!w.cU(this.a.bL(-36e8))&&!w.c9(this.b)},
$S:z+7}
C.bX0.prototype={
$1(d){return C.heS(B.Z(d,x.N,x.z))},
$S:z+23}
C.bX1.prototype={
$2(d,e){return e.b.aI(0,d.b)},
$S:z+8}
C.bWZ.prototype={
$1(d){return d.ad()},
$S:z+25}
C.bX_.prototype={
$2(d,e){return e.b.aI(0,d.b)},
$S:z+8}
C.bX3.prototype={
$1(d){var w=d.b
return!w.cU(this.a)&&!w.c9(this.b)},
$S:z+26}
C.c3H.prototype={
$1(d){return d.ad()},
$S:z+27}
C.c3G.prototype={
$1(d){return C.fPr(B.Z(x.f.a(d),x.N,x.z))},
$S:z+28}
C.c3F.prototype={
$1(d){return d.ad()},
$S:z+29}
C.c3E.prototype={
$1(d){return C.him(B.Z(x.f.a(d),x.N,x.z))},
$S:z+30}
C.c3J.prototype={
$1(d){return C.hil(B.Z(x.f.a(d),x.N,x.z))},
$S:z+31}
C.c3K.prototype={
$2(d,e){return A.o.aI(d.f,e.f)},
$S:z+2}
C.c3L.prototype={
$1(d){return d.ad()},
$S:z+33}
C.dQb.prototype={
$1(d){return d.b69(B.bi(d.e,!0,x.u))},
$S:z+35}
C.dQc.prototype={
$2(d,e){return A.o.aI(d.f,e.f)},
$S:z+2}
C.dQ5.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dQ6.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dPP.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.H(w,this.b)},
$S:0}
C.dPQ.prototype={
$1(d){return new C.Ny(this.a,null)},
$S:z+9}
C.dPR.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&B.c()
w=A.d.bf(t,new C.dPO(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){A.d.cu(u.d,w)
u.Hz()}},
$S:0}
C.dPO.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dQ2.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(B.D(["role","admin","text",this.b],w,w))},
$S:0}
C.dQ3.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(B.D(["role","ai","text",v],t,t))}else{v=t.d
v===$&&B.c()
t.d=C.hHJ(v,w[0],w[3])
t.Hz()
t=w[2]
if(t==null)t="Created "+J.aa(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(B.D(["role","ai","text",t],w,w))}},
$S:0}
C.dQ4.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=A.d.gcV(v).Q
v.toString
w.hO(v)}},
$S:8}
C.dPX.prototype={
$1(d){return new C.Ny(this.a,null)},
$S:z+9}
C.dPY.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dPW.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.cu(w,this.b)},
$S:0}
C.dQ1.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&B.c()
v=A.d.cu(w,s)
A.d.cj(t.d,u.a,v)
t.Hz()},
$S:0}
C.dQ0.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&B.c()
w=this.b
return new C.YG(u[w],new C.dQ_(v,w),null)},
$S:z+58}
C.dQ_.prototype={
$1(d){var w=this.a
return w.n(new C.dPZ(w,this.b,d))},
$S:z+39}
C.dPZ.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dPT.prototype={
$0(){var w=this.a
return w.n(new C.dPS(w))},
$S:0}
C.dPS.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dPU.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?A.ct:A.aI
return new B.B(A.fh,B.d(t+": "+B.t(s),w,w,w,w,w,w,B.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?A.a1:A.cp,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:113}
C.dPV.prototype={
$1(d){return this.a.ZS()},
$S:2}
C.dQa.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&B.c()
w=l[e]
l=this.b.a
v=l?D.rd:A.c
u=B.m(16)
t=B.m(16)
s=l?A.aI:A.aJ
r=w.d
q=B.aX(r).j(0.15)
p=B.m(12)
q=B.p(n,B.V(A.ag1,l?A.bP:A.al,n,n,n,20),A.h,n,n,new B.o(q,n,n,p,n,n,A.n),n,n,n,n,A.bS,n,n,n)
p=B.aX(r).j(0.12)
o=B.m(8)
o=B.p(n,B.V(w.c,B.aX(r),n,n,n,18),A.h,n,n,new B.o(p,n,n,o,n,n,A.n),n,n,n,n,A.hd,n,n,n)
r=B.A(B.a([o,A.aw,B.C(B.d(w.b,n,n,n,n,n,n,B.l(n,n,l?A.aN:A.M,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),A.m,n,A.e,A.j,0,n,n)
p=w.e.length
return new B.B(A.d6,B.aD(!1,A.X,!0,u,B.dK(!1,n,n,n,!0,n,n,n,!0,n,new H.arn(q,e,!0,n),n,n,n,n,new C.dQ7(m,e),!1,n,n,new B.b5(t,new B.ay(s,1,A.r,-1)),n,n,B.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,B.l(n,n,l?A.bP:A.al,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,B.AA(n,n,n,new C.dQ8(),A.J,new C.dQ9(m,e),A.ch,n,x.N),n),A.h,v,0,n,n,n,n,n,A.ac),new B.cv(w.a,x.W))},
$S:113}
C.dQ9.prototype={
$1(d){var w=this
if(d==="edit")w.a.a7r(w.b)
if(d==="questions")w.a.Wt(w.b)
if(d==="delete")w.a.bDJ(w.b)},
$S:2}
C.dQ8.prototype={
$1(d){return D.csC},
$S:133}
C.dQ7.prototype={
$0(){return this.a.Wt(this.b)},
$S:0}
C.cED.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q===$&&B.c()
w=d.a===q.a
if(w){q=r.f
q===$&&B.c()
q=B.aX(q).j(0.2)}else q=A.cS.j(0.1)
v=B.m(10)
if(w){u=r.f
u===$&&B.c()
u=B.aX(u)}else u=A.K
u=B.G(u,A.r,1)
t=r.f
t===$&&B.c()
return B.aH(!1,s,!0,B.p(s,B.V(d,B.aX(t),s,s,s,s),A.h,s,s,new B.o(q,s,u,v,s,s,A.n),s,s,s,s,A.ch,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cEC(r,d),s,s,s,s,s,s,s)},
$S:1641}
C.cEC.prototype={
$0(){var w=this.a
return w.n(new C.cEA(w,this.b))},
$S:0}
C.cEA.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cEE.prototype={
$1(d){var w=null,v=this.a,u=B.aX(d),t=v.f
t===$&&B.c()
return B.aJ(w,B.hh(u,w,t===d?D.bz4:w,w,14),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cEB(v,d),w,w,w,w,w,w,!1,A.ae)},
$S:380}
C.cEB.prototype={
$0(){var w=this.a
return w.n(new C.cEz(w,this.b))},
$S:0}
C.cEz.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cEF.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.cEG.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&B.c()
t=A.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&B.c()
v=v.f
v===$&&B.c()
t=u.cz8(v,w,t)
B.a7(this.b,!1).K(t)
return null},
$S:0}
C.ezV.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return w.push(this.b)},
$S:0}
C.ezW.prototype={
$1(d){return new C.YF(this.a,null)},
$S:z+40}
C.eA1.prototype={
$2(d,e){return A.P},
$S:35}
C.eA0.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&B.c()
w=l[e]
l=this.b.a
v=l?D.rd:A.c
u=B.m(14)
t=B.m(14)
s=l?A.aI:A.aJ
r=w.d
if(r!=null&&r.length!==0){q=B.m(8)
r=B.bu(q,K.aLZ(n,A.bM,36,A.p_,l?A.bP:A.al,r,48),A.ap)}else r=B.V(D.WV,B.aX(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=B.d(q,n,2,A.Z,n,n,n,B.l(n,n,l?A.aN:A.M,n,n,n,n,n,n,n,n,n,n,n,A.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.aa(w.c)
o=w.e?" \xb7 Printable":""
return B.aD(!1,A.X,!0,u,B.dK(!1,n,n,n,!0,n,n,n,!0,n,r,n,n,n,n,new C.ezZ(m,w,e),!1,n,n,new B.b5(t,new B.ay(s,1,A.r,-1)),n,n,B.d(""+p+" block(s)"+o,n,n,n,n,n,n,B.l(n,n,l?A.bP:A.al,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,B.aF(n,n,n,n,D.bxx,n,n,n,new C.eA_(m,e),n,n,n,n,n,n),n),A.h,v,0,n,n,n,n,n,A.ac)},
$S:73}
C.eA_.prototype={
$0(){var w=this.a
w.n(new C.ezX(w,this.b))
w.ath()},
$S:0}
C.ezX.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.cu(w,this.b)},
$S:0}
C.ezZ.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.aVS(u.b),$async$$0)
case 2:s=e
if(s!=null){t.n(new C.ezY(t,u.c,s))
t.ath()}return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.ezY.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.ezR.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ezP.prototype={
$1(d){var w=this.a.e
w===$&&B.c()
return new C.Tf(w,"Answer Document",null)},
$S:z+41}
C.ezQ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ezT.prototype={
$0(){var w,v,u=this.a,t=u.a.c,s=u.d
s===$&&B.c()
s=A.a.i(s.a.a)
w=u.e
w===$&&B.c()
v=u.f
u=u.r
if(v==null)v=t.d
B.a7(this.b,!1).K(new C.i7(t.a,s,w,v,u,t.f))
return null},
$S:0}
C.ezU.prototype={
$1(d){var w=this.a
return w.n(new C.ezS(w,d))},
$S:9}
C.ezS.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.c3B.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+42}
C.fht.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dQM.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+43}
C.dQs.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.H(w,new C.li("image","",this.b,null))},
$S:0}
C.dQx.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.H(w,new C.li("video","","data:video/mp4;base64,"+A.cM.gcq().aE(this.b),null))},
$S:0}
C.dQv.prototype={
$1(d){var w=null,v=x.p,u=B.u(B.a([B.aK(w,A.U,!1,w,!0,A.q,w,B.aL(),this.a,w,w,w,w,w,2,D.bDm,A.z,!0,w,!0,w,!1,w,A.ad,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w),B.aK(w,A.U,!1,w,!0,A.q,w,B.aL(),this.b,w,w,w,w,w,2,D.bDl,A.z,!0,w,!0,w,!1,w,A.ad,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w)],v),A.m,w,A.e,A.R,0,A.p)
return B.ei(B.a([B.bE(!1,A.de,w,w,!0,w,w,new C.dQt(d),w,w),B.bJ(D.eOc,new C.dQu(d),w)],v),w,w,w,u,w,w,w,w,D.eCe,w)},
$S:19}
C.dQt.prototype={
$0(){B.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dQu.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dQw.prototype={
$0(){var w,v=this.a.e
v===$&&B.c()
w=A.a.i(this.b.a.a)
return A.d.H(v,new C.li("link","",A.a.i(this.c.a.a),w))},
$S:0}
C.dQo.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.dQp.prototype={
$1(d){return d.length!==0},
$S:3}
C.dQq.prototype={
$1(d){return A.a.i(A.a.e0(d,B.ad("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.dQr.prototype={
$1(d){return d.length!==0},
$S:3}
C.dQC.prototype={
$0(){var w=this.a.bxc()
B.a7(this.b,!1).K(w)
return null},
$S:0}
C.dQD.prototype={
$0(){return this.a.ati("**","**")},
$S:0}
C.dQE.prototype={
$0(){return this.a.ati("*","*")},
$S:0}
C.dQF.prototype={
$0(){return this.a.ati("__","__")},
$S:0}
C.dQG.prototype={
$0(){return this.a.aU7("## Section title")},
$S:0}
C.dQH.prototype={
$0(){return this.a.aU7("\u2022 First point\n\u2022 Second point")},
$S:0}
C.dQI.prototype={
$0(){},
$S:0}
C.dQJ.prototype={
$0(){var w=this.a
w.n(new C.dQB(w))},
$S:0}
C.dQB.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.H(w,D.dgT)},
$S:0}
C.dQK.prototype={
$0(){var w=this.a
w.n(new C.dQA(w))},
$S:0}
C.dQA.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.H(w,D.dgU)},
$S:0}
C.dQL.prototype={
$1(d){var w,v,u=null,t=d.b,s=t.a
A:{if("image"===s){w="Image"
break A}if("video"===s){w="Video"
break A}if("link"===s){w=t.d
if(w==null)w="Link"
break A}if("signature"===s){w="Signature"
break A}w=s
break A}v=this.b.a
w=B.d(w,u,u,u,u,u,u,B.l(u,u,v?A.iz:A.aG,u,u,u,u,u,u,u,u,11,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
v=v?A.d3:A.iP
return B.C0(u,v,A.aid,w,u,new C.dQz(this.a,d),u)},
$S:z+44}
C.dQz.prototype={
$0(){var w=this.a
return w.n(new C.dQy(w,this.b))},
$S:0}
C.dQy.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.cu(w,this.b.a)},
$S:0}
C.dQl.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.aMG},
$S:0}
C.dQm.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.f3m},
$S:0}
C.dQd.prototype={
$0(){var w=this.a
w.d=D.aMF
w.f=w.e=null},
$S:0}
C.dQe.prototype={
$0(){var w=this.a
w.d=D.aMG
w.f=null},
$S:0}
C.dQn.prototype={
$2(d,e){return A.o.aI(d.f,e.f)},
$S:z+2}
C.dQg.prototype={
$2(d,e){var w=this.a,v=w.gb0o()[e]
return new C.a9m(v,this.b,new C.dQf(w,v),null)},
$S:z+45}
C.dQf.prototype={
$0(){return this.a.bZV(this.b.a)},
$S:0}
C.dQi.prototype={
$2(d,e){return A.o.aI(d.f,e.f)},
$S:z+46}
C.dQk.prototype={
$2(d,e){return A.T},
$S:35}
C.dQj.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.rd:A.c,p=B.m(16),o=B.m(16),n=B.m(16),m=B.G(r?A.aI:A.aJ,A.r,1),l=B.a([new B.a9(0,A.G,A.x.j(r?0.28:0.06),A.dG,8)],x.V),k=B.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=B.m(10)
v=B.m(10)
k.push(B.bu(w,K.aLZ(v,A.bM,52,D.WV,r?A.bP:A.al,j,52),A.ap))}else{j=u.d.d
w=B.aX(j).j(0.15)
v=B.m(12)
k.push(B.p(t,B.V(D.WV,B.aX(j),t,t,t,24),A.h,t,t,new B.o(w,t,t,v,t,t,A.n),t,52,t,t,t,t,t,52))}k.push(A.ba)
k.push(B.C(B.d(s.b,t,t,t,t,t,t,B.l(t,t,r?A.aN:A.M,t,t,t,t,t,t,t,t,13,t,t,A.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(B.V(A.ek,r?A.bP:A.al,t,t,t,22))
return B.aD(!1,A.X,!0,p,B.aH(!1,o,!0,B.p(t,B.A(k,A.m,t,A.e,A.j,0,t,t),A.h,t,t,new B.o(t,t,m,n,l,t,A.n),t,t,t,t,A.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dQh(u.a,s),t,t,t,t,t,t,t),A.h,q,0,t,t,t,t,t,A.ac)},
$S:73}
C.dQh.prototype={
$0(){return this.a.c5x(this.b)},
$S:0}
C.c3D.prototype={
$1(d){return new C.a9e(d,this.a,null)},
$S:z+47}
C.cyj.prototype={
$0(){var w=this.a.c,v=w.c,u=B.o0(v==null?w.b:v)
if(u!=null)B.iG(u,A.f8,null)},
$S:0}
C.cyk.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.cyl.prototype={
$1(d){var w=null,v=this.a.d.a,u=B.d("\u2022  ",w,w,w,w,w,w,B.l(w,w,v?A.ct:A.aI,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=A.a.i(d)
return new B.B(A.nj,B.A(B.a([u,B.C(B.d(t,w,w,w,w,w,w,B.l(w,w,v?A.ct:A.aI,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.F,w,A.e,A.j,0,w,w),w)},
$S:128}
C.d84.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d86.prototype={
$0(){return this.a.n(new C.d85(this.b))},
$S:0}
C.d85.prototype={
$0(){var w=this.a
return w.a.f?w.fS(0):w.p5(0)},
$S:0}
C.f0M.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.dR_.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.B0)w.z=v
else w.Q=v},
$S:0}
C.dQR.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=A.d.gcV(v).Q
v.toString
w.lC(v,A.co,A.eU)},
$S:8}
C.dQT.prototype={
$1(d){return J.q(d,"role")==="ai"},
$S:89}
C.dQU.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.D(["role","user","text",this.b],v,v))
w.d.bG(0,A.c_)
w.r=!0},
$S:0}
C.dQV.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.D(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.dQW.prototype={
$1(d){var w=J.a6(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+B.t(w.h(d,"text"))},
$S:141}
C.dQX.prototype={
$0(){var w=x.N
return this.a.f.push(B.D(["role","ai","text",this.b],w,w))},
$S:0}
C.dQY.prototype={
$0(){var w=x.N
return this.a.f.push(B.D(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.dQZ.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dQS.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=B.mi(l,A.bz.j(0.9),l,l,l,l,l,2,l,l)
return new B.B(A.c1,B.A(B.a([new B.a3(22,22,k,l),A.aw,B.d("Writing full song\u2026",l,l,l,l,l,l,B.l(l,l,this.b?A.aB:A.dx,l,l,l,l,l,l,l,l,12,A.cz,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),A.m,l,A.e,A.j,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?A.a7:A.a_
k=k.c
k.toString
k=B.aG(k,A.bN,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new B.a8(A.a_,A.a7,A.w,B.a([A.aA,A.bz.j(0.85)],x.O),l,l)
else{q=x.O
q=new B.a8(A.a_,A.a7,A.w,v?B.a([A.bj,A.M],q):B.a([A.c,A.aN],q),l,l)}p=B.a([new B.a9(0,A.G,(u?A.bz:A.aA).j(0.22),A.jm,14)],x.V)
o=B.G(A.c.j(u?0.2:0.08),A.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=A.c
else v=v?A.aJ:A.bi
n=u?13.5:15
m=u?A.bg:A.cz
return new B.bF(t,l,l,B.p(l,B.d(w,l,l,l,l,l,l,B.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?A.a1:A.cp,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),A.h,l,new B.aV(0,k.a.a*0.94,0,1/0),new B.o(l,l,o,new B.bx(A.jJ,A.jJ,new B.b3(s,s),new B.b3(r,r)),p,q,A.n),l,l,l,A.kU,A.iE,l,l,l),l)},
$S:42}
C.dR6.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&B.c()
w=m.x
w===$&&B.c()
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([D.a8L,A.M,A.n9],t):B.a([A.q1,A.pV,A.oJ],t)
w=B.a([new B.a9(-4,A.G,A.aA.j(0.35+w*0.25),A.dn,28)],x.V)
r=B.G(A.c.j(u?0.08:0.5),A.r,1)
q=B.de()
p=q.a
p.$flags&2&&B.ah(p)
p[11]=0.001
m=m.x
m===$&&B.c()
q.fk(m*0.08)
q=B.fk(A.B,B.p(o,D.bui,A.h,o,o,new B.o(o,o,B.G(A.aM.j(0.6),A.r,2),o,o,D.dS1,A.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=B.nm(A.j2,D.eSn,new C.dR3())
p=x.p
m=B.a([B.A(B.a([q,A.ba,B.C(B.u(B.a([m,B.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,B.l(o,o,u?A.aQ:A.aV,o,o,o,o,o,o,o,o,10,o,o,A.a1,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),A.F,o,A.e,A.j,0,A.p),1)],p),A.m,o,A.e,A.j,0,o,o),A.aa,B.A(B.a([n.arM(D.B0,"Swahili","\ud83c\uddf9\ud83c\uddff",u),A.ab,n.arM(D.aA3,"English","\ud83c\uddec\ud83c\udde7",u),A.ab,n.arM(D.B1,"Mix","\ud83d\udd25",u)],p),A.m,o,A.e,A.j,0,o,o)],p)
if(n.x!==D.B1){t=B.a([A.P,n.cnM(u)],p)
if(n.w){q=n.x===D.B0?D.a_F:D.ZX
p=B.S(q).k("I<1,r>")
q=B.z(new B.I(q,new C.dR4(n,u),p),p.k("ai.E"))
t.push(new B.B(A.kV,B.cd(A.bH,q,A.by,6,6),o))}A.d.v(m,t)}else{t=B.a([A.bz.j(0.22),A.aA.j(0.12)],t)
q=B.m(12)
p=B.G(A.bz.j(0.45),A.r,1)
m.push(new B.B(A.kV,B.p(o,B.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,B.l(o,o,u?A.i5:A.lh,o,o,o,o,o,o,o,o,10,o,o,A.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),A.h,o,o,new B.o(o,o,p,q,o,new B.a8(A.a_,A.a7,A.w,t,o,o),A.n),o,o,o,o,A.bS,o,o,o),o))}m.push(A.P)
t=x.dc
n=B.z(new B.I(D.cOs,new C.dR5(n,u),t),t.k("ai.E"))
m.push(B.A(n,A.m,o,A.e,A.j,0,o,o))
return B.p(o,B.u(m,A.af,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(o,o,r,v,w,new B.a8(A.ax,A.aE,A.w,s,o,o),A.n),o,o,o,I.acq,I.acF,o,o,o)},
$S:95}
C.dR3.prototype={
$1(d){return D.bGL.aB(0,d)},
$S:66}
C.dR4.prototype={
$1(d){return this.a.cnN(d,this.b)},
$S:z+48}
C.dR5.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aA5?6:0,m=o?5:0,l=B.m(12)
if(o){w=this.b
v=w?A.aA.j(0.45):A.aA.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=A.x.j(w?0.25:0.05)
u=v
v=w
w=u}t=B.m(12)
p=p.r?q:new C.dR2(p,d)
s=C.hjO(d)
if(o)r=A.c
else r=v?A.ak:A.bi
r=B.d(s,q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.hjP(d)
if(o)v=A.ak
else v=v?A.c3:A.dx
return B.C(new B.B(new B.L(0,0,n,0),B.aD(!1,A.X,!0,l,B.aH(!1,t,!0,new B.B(G.UW,B.u(B.a([r,B.d(s,q,q,q,q,q,q,B.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),A.h,w,m,q,q,q,q,q,A.ac),q),1)},
$S:z+49}
C.dR2.prototype={
$0(){var w=this.a
return w.n(new C.dR1(w,this.b))},
$S:0}
C.dR1.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dR8.prototype={
$0(){var w=this.a
return w.n(new C.dR7(w))},
$S:0}
C.dR7.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dQQ.prototype={
$0(){var w=this.a
return w.n(new C.dQP(w,this.b))},
$S:0}
C.dQP.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.B1
if(v===D.aA3&&w.Q==null)w.Q=A.d.gI(D.ZX).a},
$S:0}
C.dR9.prototype={
$0(){return this.a.cjy(this.b.a)},
$S:0}
C.dR0.prototype={
$0(){return this.a.Hq(this.b)},
$S:0}
C.dQN.prototype={
$1(d){return this.a.aU8()},
$S:2}
C.dQO.prototype={
$0(){return this.a.aU8()},
$S:0}
C.ftf.prototype={
$1(d){var w=this
return new C.Xq(w.a,w.b,w.c,new C.fte(w.d),null)},
$S:z+50}
C.fte.prototype={
$0(){return J.lC(this.a.b7())},
$S:0}
C.d5E.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.baQ()},
$S:28}
C.d5F.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a.f
m===$&&B.c()
m=m.x
m===$&&B.c()
w=this.b
v=m*3.141592653589793*2+w*0.55
m=this.c
u=x.w
t=B.aG(m,A.bN,u).w
s=Math.cos(v)
u=B.aG(m,A.bN,u).w
m=Math.sin(v*1.3)
r=Math.sin(v)
q=(w&1)===0
p=q?A.dO:A.he
o=A.o.J(w,4)
q=q?A.b_:A.aK
return B.an(n,B.d5(B.V(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:299}
C.d5K.prototype={
$0(){},
$S:0}
C.d5J.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&B.c()
w=t.x
w===$&&B.c()
v=A.oD.ar(0,A.k.D(w,0,1))
t=t.x
t===$&&B.c()
t=Math.sin(t*3.141592653589793)
w=B.de()
u=w.a
u.$flags&2&&B.ah(u)
u[11]=0.0028
w.fk(t*0.08)
w.jw(0.12)
return B.e4(A.B,B.fk(A.B,e,null,w,!0),0.5+v*0.5,null,null)},
$S:44}
C.d5G.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&B.c()
r=r.x
r===$&&B.c()
w=0.55+r*0.45
r=B.p(t,t,A.h,t,t,new B.o(t,t,t,t,B.a([new B.a9(6,A.G,A.b_.j(w*0.5),A.J,36)],x.V),t,A.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new B.am(A.B,t,A.a9,A.q,B.a([r,new B.a3(96,96,B.mi(A.c.j(0.08),A.b_,t,t,t,t,t,6,u/v,t),t),B.d(""+s.a.c,t,t,t,t,t,t,B.l(t,t,A.c,t,t,t,t,t,t,t,t,38,t,t,A.u,t,t,!0,t,t,t,t,t,B.a([new B.cI(A.b_.j(w),A.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:110}
C.d5H.prototype={
$1(d){return D.bGP.aB(0,d)},
$S:66}
C.d5I.prototype={
$0(){var w=this.a
w.a.baQ()
w.a.e.$0()},
$S:0}
C.c5B.prototype={
$1(d){var w=!1
if(A.a.i(d.b.toLowerCase())===this.a)if(d.d===A.fc)if(d.x===A.dk){w=d.w
w=A.a.i(w==null?"":w)===this.b}return w},
$S:16}
C.c5O.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e_A.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.e0g.prototype={
$1(d){var w=this.a
if(w.c!=null)w.NV()},
$S:8}
C.e0h.prototype={
$1(d){var w=$.aS.p2$
if(w===A.qZ||w===A.r_)return
this.a.Dm()},
$S:14}
C.e0i.prototype={
$1(d){this.a.cpS()},
$S:14}
C.e_Z.prototype={
$0(){this.a.HU(this.b.d,!1)},
$S:0}
C.e0_.prototype={
$0(){},
$S:0}
C.e00.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.e01.prototype={
$0(){},
$S:0}
C.e02.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e03.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.e04.prototype={
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
C.e_U.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=B.bi(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=B.bi(v[1],!0,x.N)
w.Nj()
w.a5G()},
$S:0}
C.e_B.prototype={
$0(){this.b.HU(this.c.d+this.a.a,!1)},
$S:0}
C.e_V.prototype={
$1(d){var w=d.d
return(w===A.fc||w===A.eC)&&d.x===A.dk},
$S:16}
C.e_W.prototype={
$1(d){return d.a},
$S:158}
C.e_X.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e_Y.prototype={
$0(){},
$S:0}
C.e_F.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bi(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=B.bi(v[0],!0,x.N)},
$S:0}
C.e_G.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.e_O.prototype={
$0(){},
$S:0}
C.e_L.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.e_M.prototype={
$0(){var w=this.a,v=B.z(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e_N.prototype={
$0(){var w=this.a,v=B.z(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e_P.prototype={
$0(){return this.a.z=!0},
$S:0}
C.e_Q.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new B.uy(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.e_R.prototype={
$0(){return this.a.z=!1},
$S:0}
C.e_T.prototype={
$0(){var w=this.a
return w.n(new C.e_S(w))},
$S:0}
C.e_S.prototype={
$0(){return this.a.y=1},
$S:0}
C.e_H.prototype={
$0(){return this.a.y=1},
$S:0}
C.e_I.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.e08.prototype={
$1(d){return d.a.length===0},
$S:16}
C.e09.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:69}
C.e0d.prototype={
$0(){var w=this.a
return w.n(new C.e06(w))},
$S:0}
C.e06.prototype={
$0(){return this.a.y=1},
$S:0}
C.e0e.prototype={
$0(){var w=this.a
return w.n(new C.e05(w))},
$S:0}
C.e05.prototype={
$0(){return this.a.y=2},
$S:0}
C.e0f.prototype={
$0(){return B.iC(this.a,null)},
$S:0}
C.e0a.prototype={
$2$cloudRequest(d,e){return this.a.aVc(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1643}
C.e0b.prototype={
$0(){return this.a.Dm()},
$S:1}
C.e0c.prototype={
$0(){var w=this.a
return w.n(new C.e07(w))},
$S:0}
C.e07.prototype={
$0(){var w=this.a
return w.y=A.o.D(w.y-1,0,2)},
$S:0}
C.e_E.prototype={
$0(){B.eN()
var w=this.a
w.n(new C.e_D(w))},
$S:0}
C.e_D.prototype={
$0(){return this.a.y=0},
$S:0}
C.e_C.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=B.bAb(B.p(t,t,A.h,t,t,new B.o(t,t,B.G(A.c.j(0.55),A.r,1.2),t,B.a([new B.a9(1,A.G,A.at.j(0.55),A.J,18)],x.V),D.bF2,A.a6),t,t,t,t,t,t,t,t),A.ev,A.rB,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=B.a([],w)
for(u=0;u<3;++u)v.push(r.bWx(u))
return new B.am(A.V,t,A.a9,A.q,B.a([q,B.A(v,A.m,t,A.e,A.j,0,t,t)],w),t)},
$S:60}
C.e_K.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
B.eN()
w.n(new C.e_J(w,v))},
$S:0}
C.e_J.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d9S.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===A.fc||v===A.eC)return!0
if(d.c!==0)v=A.a.q(w,"clock-in daily earnings")||A.a.q(w,"clock-in earnings")
else v=!1
return v},
$S:16}
C.d9T.prototype={
$1(d){return new B.N(Date.now(),0,!1)},
$S:746}
C.d9U.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new B.N(Date.now(),0,!1)
u=B.dx(C.fA2(v.c,u))
w=this.c?new C.d9R(v):null
return v.b2a(this.b,A.p9,D.eu,w,"Today","$"+u,D.eu)},
$S:1645}
C.d9R.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.d9V.prototype={
$2(d,e){var w=this.a
return w.b2a(this.b,A.je,A.cf,w.w,"Balance","$"+B.dx(B.Ji(w.c.a,new C.d9Q(w))),A.cJ)},
$S:59}
C.d9Q.prototype={
$0(){return this.a.c.d},
$S:79}
C.d9L.prototype={
$0(){this.a.a.cGB()
return null},
$S:0}
C.d9M.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&B.c()
v=v.x
v===$&&B.c()
return B.b1(w,w,w,new C.bqU(v,w),A.as)},
$S:72}
C.d9N.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.b7g(v,!0,A.at,D.nP,w)}else{v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.b7f(v,D.nP,w)}return B.b1(w,w,w,v,A.as)},
$S:72}
C.d9O.prototype={
$1(d){return new B.N(Date.now(),0,!1)},
$S:746}
C.d9P.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new B.N(Date.now(),0,!1)
w=r.a
v=w.a.cFp(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:A.k.D(v/u,0,1)}u=w.d
u===$&&B.c()
s=w.e
s===$&&B.c()
return B.c4(new B.h3(B.a([u,s],x.U)),new C.d9K(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1646}
C.d9K.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([],m),k=o.b
if(k)A.d.v(l,B.ih(7,new C.d9J(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&B.c()
v=v.x
v===$&&B.c()
u=o.d
l.push(B.b1(n,n,n,new C.b7e(o.c,v,k,u,D.nP,D.b9M,n),D.eeA))
v=B.G(A.c.j(0.1),A.r,1.2)
if(k)t=A.uv
else t=o.e?A.um:D.bpp
t=B.V(t,k?D.nP:A.bd,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=B.d(s,n,n,n,n,n,n,B.l(n,n,A.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+B.dx(w.f&&w.d>0?w.d:o.f)}q=k?D.nP:A.c
w=B.d(w,n,n,n,n,n,n,B.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,A.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=B.m(999)
p=u.j(0.16)
u=B.G(u.j(0.5),A.r,1)
l.push(B.p(n,B.u(B.a([t,A.ar,s,A.au,w,A.P,B.p(n,B.d(o.r,n,n,n,n,n,n,B.l(n,n,k?D.nP:A.nU,n,n,n,n,n,n,n,n,9,n,n,A.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.h,n,n,new B.o(p,n,u,q,n,n,A.n),n,n,n,n,A.kt,n,n,n)],m),A.m,n,A.b5,A.j,0,A.p),A.h,n,n,new B.o(A.K,n,v,n,n,n,A.a6),n,176,n,n,n,n,n,176))
return B.as(new B.a3(276,276,new B.am(A.B,n,A.a9,A.h,l,n),n),n,n,n)},
$S:211}
C.d9J.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&B.c()
r=r.x
r===$&&B.c()
w=A.k.J(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=A.o.J(d,3)
t=A.o.J(d,2)
return B.an(s,B.e8(B.d5(B.p(s,s,A.h,s,s,new B.o(s,s,s,B.m(40),s,new B.bS(A.B,0.5,A.w,s,0,B.a([D.nP.j(0.38),A.c.j(0.08),A.K],x.O),s,s),A.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),!0,s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:220}
C.dab.prototype={
$0(){},
$S:0}
C.dac.prototype={
$0(){},
$S:0}
C.dad.prototype={
$1(d){return d.x===A.dk},
$S:16}
C.d9Y.prototype={
$0(){return this.a.a.d.d},
$S:79}
C.d9X.prototype={
$0(){var w,v
B.eN()
w=this.a
v=this.b
w.n(new C.d9W(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)B.f7(null,x.H)}},
$S:0}
C.d9W.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.da8.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=B.m(12),q=s?w.b.j(0.18):A.c.j(0.04),p=B.G(s?w.b.j(0.7):A.c.j(0.08),A.r,1)
return B.C(new B.B(A.jX,B.aJ(v,B.dg(A.B,B.d("$"+t,v,v,v,v,v,v,B.l(v,v,s?w.b:A.ak,v,v,v,v,v,v,v,v,13,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,A.b9,new B.o(q,v,p,r,v,v,A.n),A.hG,v,38,v,v,v,v,v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.daa(u,d),v,v,v,v,v,v,!1,A.ae),v),1)},
$S:1648}
C.daa.prototype={
$0(){B.eN()
var w=this.a
w.n(new C.da9(w,this.b))},
$S:0}
C.da9.prototype={
$0(){var w=""+this.b
this.a.d.saR(0,w)
return w},
$S:0}
C.da7.prototype={
$4$bold$color(d,e,f,g){var w=null,v=B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,A.a1,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?A.c:g,t=f?15:13
return new B.B(A3.US,B.A(B.a([v,A.b6,B.d(e,w,w,w,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?A.u:A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1649}
C.da6.prototype={
$1(d){return this.a.n(new C.da5())},
$S:2}
C.da5.prototype={
$0(){},
$S:0}
C.da0.prototype={
$1(d){return this.a.aRd(d)&&!B.fHj(d)},
$S:16}
C.da1.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:69}
C.da2.prototype={
$0(){return this.a.a.d.d},
$S:79}
C.da3.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return B.b(x.r.b(s)?s:B.dR(s,x.H),$async$$0)
case 2:if(t.c!=null)t.n(new C.da_())
t.ly("Balance refreshed.")
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.da_.prototype={
$0(){},
$S:0}
C.da4.prototype={
$0(){var w=this.a
return w.n(new C.d9Z(w))},
$S:0}
C.d9Z.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fdu.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:69}
C.f8q.prototype={
$1(d){var w=J.a6(d),v=w.h(d,"toEmail"),u=!1
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.y(v,this.b)){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fnL.prototype={
$1(d){var w=J.a6(d),v=w.h(d,"toEmail")
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.f8p.prototype={
$1(d){var w,v,u
if(!C.hEG(d,this.a))return!1
w=J.a6(d)
v=w.h(d,"sessionUpdatedAt")
v=B.bg(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=B.bg(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=B.bg(J.k(w==null?"":w))}if(u!=null&&A.o.ak(new B.N(Date.now(),0,!1).bv(u).a,36e8)>72)return!1
return!0},
$S:4}
C.eZt.prototype={
$1(d){var w=this.a
if(A.o.J(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:84}
C.fmE.prototype={
$0(){return $.fF_=null},
$S:11}
C.fmF.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:7}
C.fkz.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:7}
C.fkA.prototype={
$0(){var w,v=this.a
$.fEO.W(0,v)
w=C.ti(this.b,v)
if(w!=null)B.OS(B.a([B.Z(w,x.N,x.z)],x._),v)},
$S:0}
C.foJ.prototype={
$1(d){return new C.Yd(this.a,this.b,null)},
$S:z+55}
C.dV4.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.dV7.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.dV8.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.n(new C.dV6(w))},
$S:2}
C.dV6.prototype={
$0(){return this.a.f=""},
$S:0}
C.dV9.prototype={
$1(d){return this.a.aUn()},
$S:2}
C.dVa.prototype={
$0(){var w=this.a
return w.n(new C.dV5(w,this.b))},
$S:0}
C.dV5.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f7C.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+A.a.aU(d,1)},
$S:13}
C.f7B.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+A.a.aU(d,1)},
$S:13}
C.fmV.prototype={
$1(d){var w,v=x.f
if(v.b(d))return B.Z(d,x.N,x.z)
try{v=B.Z(v.a(d.ad()),x.N,x.z)
return v}catch(w){return B.R(x.N,x.z)}},
$S:12}
C.fmW.prototype={
$1(d){return J.cs(d)},
$S:4}
C.fgT.prototype={
$1(d){return d.a!=="send_email"},
$S:294}
C.fmm.prototype={
$1(d){var w=null,v=A.x.j(0.35),u=B.m(10),t=B.G(A.be,A.r,1)
return B.p(A.B,B.d(d,w,w,w,w,w,w,A.jq,w,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,86,w,A.eW,w,w,w,72)},
$S:732}
C.c7l.prototype={
$1(d){return J.k(d)},
$S:17}
C.c7m.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b4(d,new C.c7k(),x.S)
w=B.z(w,w.$ti.k("ai.E"))
return w}return B.bT(7,0,!1,x.S)},
$S:726}
C.c7k.prototype={
$1(d){var w
if(B.iv(d))w=d
else{w=B.c3(J.k(d),null)
if(w==null)w=0}return w},
$S:395}
C.c7n.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b4(d,new C.c7j(),x.S)
w=B.z(w,w.$ti.k("ai.E"))
return w}return B.bT(8,0,!1,x.S)},
$S:726}
C.c7j.prototype={
$1(d){var w
if(B.iv(d))w=d
else{w=B.c3(J.k(d),null)
if(w==null)w=0}return w},
$S:395}
C.c7p.prototype={
$1(d){return B.bi(d,!0,x.S)},
$S:724}
C.c7q.prototype={
$1(d){return B.bi(d,!0,x.S)},
$S:724}
C.c7i.prototype={
$1(d){var w=this.a
if(A.o.J(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:84}
C.c7o.prototype={
$2(d,e){return d+e},
$S:76}
C.c7h.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.q(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:76}
C.f8V.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+56}
C.f8P.prototype={
$0(){return this.a.$1(D.pk)},
$S:0}
C.f8Q.prototype={
$0(){return this.a.$1(D.pk)},
$S:0}
C.f8R.prototype={
$0(){return this.a.$1(D.pk)},
$S:0}
C.f8S.prototype={
$0(){return this.a.$1(D.pk)},
$S:0}
C.f8T.prototype={
$0(){return this.a.$1(D.pk)},
$S:0}
C.f8U.prototype={
$0(){return this.a.$1(D.pk)},
$S:0}
C.eWU.prototype={
$2(d,e){var w,v,u=this,t=null,s=A.o.ak(e,8),r=A.o.J(e,8),q=A.o.J(s+r,2),p=u.a,o=J.q(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.TG:D.b_Q
if(o===0)w=t
else{w=x.O
w=o===1?B.a([A.c,A.aJ],w):B.a([A.bj,A.x],w)
v=n?A.aM:A.dt
w=B.p(t,t,A.h,t,t,new B.o(t,t,B.G(v,A.r,n?3:1),t,B.a([new B.a9(0,A.G,A.x.j(0.35),A.dG,4)],x.V),new B.bS(A.B,0.5,A.w,t,0,w,t,t),A.a6),t,28,t,t,t,t,t,28)}return B.aJ(t,B.p(t,B.as(w,t,t,t),A.h,q,t,t,t,t,t,t,t,t,t,t),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eWT(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,A.ae)},
$S:74}
C.eWT.prototype={
$0(){var w=this,v=w.a,u=v.cL1(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.pk:D.FW
w.f.$1(v)}},
$S:0}
C.f7L.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new B.a3(u,u,B.ig(!0,v,v,A.z,Q.aHR,new C.f7K(w.a,w.b,w.c,w.d,u),9,v,A.dJ,A.ag,!1),v)},
$S:173}
C.f7K.prototype={
$2(d,e){var w=this,v=null,u=B.m(12),t=B.m(12),s=w.a,r=s.at[e],q=r==="X"?A.b3:A.aH
return B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.as(B.d(r,v,v,v,v,v,v,B.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.f7J(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),A.h,A.fn,0,v,v,v,v,v,A.ac)},
$S:73}
C.f7J.prototype={
$0(){var w=this,v=w.a.cL2(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.eWl.prototype={
$1(d){return new B.B(A.jX,C.fkq(d,!1),null)},
$S:281}
C.eWm.prototype={
$1(d){return C.fkq(d,!1)},
$S:1653}
C.eWn.prototype={
$0(){var w=this,v=w.a
v.cvF(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.eWo.prototype={
$0(){var w=this
w.a.cvG(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.f51.prototype={
$1(d){var w=this,v=null,u=d*6
return B.n_(v,A.bj,B.d(""+u,v,v,v,v,v,v,A.cb,v,v,v),A.di,new C.f50(w.a,w.b,u,w.c,w.d),v,new B.ay(A.c.j(0.2),1,A.r,-1),v)},
$S:1654}
C.f50.prototype={
$0(){var w=this,v=w.a,u=w.b.aG(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.f6U.prototype={
$1(d){return D.cRT[d]},
$S:82}
C.f6V.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=B.a([s.aG(6),s.aG(6),s.aG(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.f3M.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.f3N.prototype={
$0(){var w=this,v=w.a
if(w.b.ag()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.eXl.prototype={
$0(){var w=this,v=w.a.cB6(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.eXk.prototype={
$1(d){var w,v=null,u=J.q(this.a.fr[5-d],this.b)
if(u===0)w=A.lP
else w=u===1?A.dy:A.qx
return new B.fN(1,B.p(v,v,A.h,v,v,new B.o(w,v,B.G(A.bG,A.r,1),v,v,v,A.a6),v,v,v,A.mz,v,v,v,v),v)},
$S:1655}
C.f3Z.prototype={
$1(d){var w=this
if(w.a.b5x(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.f4_.prototype={
$0(){var w=this
if(w.a.b5x(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.eWO.prototype={
$0(){var w=this
if(w.a.ag()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fcD.prototype={
$1(d){var w=J.q(d,"email")
return A.a.q(A.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fcE.prototype={
$1(d){var w,v=J.a6(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=A.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+A.a.i(J.k(v==null?"":v))+">"},
$S:53}
C.epl.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aH6.prototype
w.bnS=w.Z
w.bnR=w.p
w=C.aH7.prototype
w.bnU=w.Z
w.bnT=w.p
w=C.aH8.prototype
w.bnW=w.Z
w.bnV=w.p
w=C.aI3.prototype
w.boT=w.Z
w.boS=w.p
w=C.aHE.prototype
w.bos=w.p
w=C.aIc.prototype
w.bp1=w.p
w=C.aH9.prototype
w.bnX=w.p
w=C.aIk.prototype
w.bpa=w.p
w=C.aHe.prototype
w.bo1=w.p
w=C.aHu.prototype
w.boi=w.p
w=C.aJ_.prototype
w.bpQ=w.p})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.ax4.prototype,"gbJ4","bJ5",20)
v(q,"gaNN","aNO",1)
v(C.ax3.prototype,"gcmQ","a_E",1)
v(q=C.ax5.prototype,"gbOo","bOp",1)
v(q,"gbyS","byT",1)
v(q=C.auk.prototype,"gcgb","cgc",1)
v(q,"gc56","Ol",0)
v(q,"gcqE","cqF",1)
v(q,"gcj5","ms",0)
w(q,"gc9j","c9k",24)
w(q,"gcp4","Q1",32)
v(q=C.az8.prototype,"gbHf","Vn",0)
v(q,"gbX6","WN",0)
v(q,"gbX3","WM",0)
v(q,"gbX4","aaf",0)
v(q,"gbX5","Nm",0)
v(C.awu.prototype,"gbX7","bX8",1)
u(C,"hLL","hi3",57)
t(C,"fHq",0,null,["$1","$0"],["h0J",function(){return C.h0J(null)}],3,0)
t(C,"byG",0,null,["$1","$0"],["h0I",function(){return C.h0I(null)}],3,0)
v(C.La.prototype,"gD6","c2m",1)
v(C.azU.prototype,"gcgs","zI",0)
v(q=C.aAa.prototype,"gc5p","On",0)
v(q,"gca0","YV",0)
v(q,"gbZP","bZQ",1)
v(q=C.aAm.prototype,"gbZU","ab3",0)
v(q,"gbsN","a5w",0)
v(q,"gcgF","ZS",0)
s(q,"gc2R","c2S",34)
v(C.aCe.prototype,"gbtc","a5y",1)
v(q=C.aCd.prototype,"gbZT","ab2",0)
v(q,"gc4o","ac2",0)
v(q=C.aAo.prototype,"gbS3","a95",0)
v(q,"gbS5","W_",0)
v(q,"gbS4","a96",0)
v(q=C.aAn.prototype,"gbvu","bvv",1)
v(q,"gbvw","bvx",1)
v(C.aAp.prototype,"gbB3","bB4",1)
v(C.axp.prototype,"gbZW","bZX",1)
v(q=C.aAL.prototype,"gaUh","c_c",1)
r(q,"gaVa",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["abH","atP","aVc","aVb"],51,0,0)
r(q,"gc24",0,4,null,["$4"],["c25"],52,0,0)
v(q,"gc48","Y8",0)
v(q,"gc4Y","ac9",0)
v(q,"gc4U","ac7",0)
v(q,"gbUT","a9R",0)
w(C.ay8.prototype,"gbTI","bTJ",53)
w(q=C.aya.prototype,"gcnV","cnW",54)
v(q,"gcmH","cmI",1)
v(q,"gcu4","cu5",1)
v(C.aAy.prototype,"gc_x","aUn",1)
v(C.aBi.prototype,"gaUM","atD",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.jk,[C.cl8,C.cl5,C.cl6,C.cl7,C.cl4,C.eKU,C.eKS,C.eKW,C.eKT,C.f2k,C.d27,C.d2i,C.d2q,C.d2r,C.d2t,C.d2l,C.d2j,C.d2k,C.d2m,C.d2n,C.d2d,C.d2e,C.d2c,C.d2g,C.d2h,C.d2a,C.d29,C.d2v,C.d2y,C.dFj,C.dFi,C.dFk,C.dFh,C.dFg,C.d21,C.d24,C.d25,C.d23,C.d22,C.d3U,C.d3V,C.d3W,C.d39,C.d3a,C.d3E,C.d3p,C.d3q,C.d3r,C.d3s,C.d3t,C.d2C,C.d38,C.d3F,C.d3O,C.d3C,C.d3B,C.d36,C.d37,C.d3K,C.d3L,C.d2E,C.d2F,C.d3i,C.d3j,C.d3k,C.d3h,C.d3u,C.d3v,C.d3w,C.d3x,C.d3y,C.d3z,C.d3I,C.d3l,C.d3m,C.d3n,C.d3o,C.d3M,C.d3N,C.d2G,C.d2H,C.d2I,C.d2J,C.d3G,C.d3H,C.d3g,C.d3A,C.d3e,C.d3P,C.d3Q,C.d3R,C.d3b,C.d2V,C.d2U,C.d2T,C.d2Z,C.d2S,C.d2Q,C.d2L,C.d2O,C.d2K,C.d33,C.d34,C.d2M,C.d7a,C.cvy,C.cvo,C.cvp,C.cvI,C.cvF,C.cvG,C.cvH,C.cvA,C.cvz,C.cvq,C.cvB,C.cw0,C.cvX,C.cvW,C.cvw,C.cvx,C.cvt,C.cvE,C.cvM,C.cvN,C.cvO,C.cvP,C.cvQ,C.cvR,C.cvS,C.cwc,C.cw5,C.cw2,C.cw7,C.cw4,C.cw1,C.cvr,C.cvZ,C.dnB,C.dnC,C.dns,C.dnq,C.dnA,C.dnp,C.dno,C.dnr,C.dnw,C.dnx,C.dnu,C.dnv,C.dnD,C.dnE,C.dnF,C.dnG,C.eEQ,C.eER,C.cYq,C.fdo,C.du1,C.dtU,C.dtW,C.du_,C.dtV,C.dtX,C.dtY,C.fko,C.fkn,C.dnd,C.dnc,C.dne,C.dnb,C.dM4,C.dM5,C.dMc,C.fst,C.fsu,C.bUD,C.dFp,C.dFq,C.dFr,C.dFs,C.dFt,C.dFu,C.dFo,C.dFv,C.dFn,C.dFy,C.dFx,C.dFw,C.dMw,C.dMx,C.dMu,C.dMt,C.dMv,C.dMr,C.dQ5,C.dQ6,C.dPP,C.dPR,C.dQ2,C.dQ3,C.dPY,C.dPW,C.dQ1,C.dPZ,C.dPT,C.dPS,C.dQ7,C.cEC,C.cEA,C.cEB,C.cEz,C.cEF,C.cEG,C.ezV,C.eA_,C.ezX,C.ezZ,C.ezY,C.ezR,C.ezQ,C.ezT,C.ezS,C.dQs,C.dQx,C.dQt,C.dQu,C.dQw,C.dQC,C.dQD,C.dQE,C.dQF,C.dQG,C.dQH,C.dQI,C.dQJ,C.dQB,C.dQK,C.dQA,C.dQz,C.dQy,C.dQl,C.dQm,C.dQd,C.dQe,C.dQf,C.dQh,C.cyj,C.d84,C.d86,C.d85,C.dR_,C.dQU,C.dQV,C.dQX,C.dQY,C.dQZ,C.dR2,C.dR1,C.dR8,C.dR7,C.dQQ,C.dQP,C.dR9,C.dR0,C.dQO,C.fte,C.d5K,C.d5I,C.e_A,C.e_Z,C.e0_,C.e00,C.e01,C.e03,C.e04,C.e_U,C.e_B,C.e_Y,C.e_F,C.e_G,C.e_O,C.e_L,C.e_M,C.e_N,C.e_P,C.e_Q,C.e_R,C.e_T,C.e_S,C.e_H,C.e_I,C.e0d,C.e06,C.e0e,C.e05,C.e0f,C.e0b,C.e0c,C.e07,C.e_E,C.e_D,C.e_K,C.e_J,C.d9R,C.d9Q,C.d9L,C.dab,C.dac,C.d9Y,C.d9X,C.d9W,C.daa,C.da9,C.da5,C.da2,C.da3,C.da_,C.da4,C.d9Z,C.fmE,C.fkA,C.dV4,C.dV7,C.dV6,C.dVa,C.dV5,C.f8P,C.f8Q,C.f8R,C.f8S,C.f8T,C.f8U,C.eWT,C.f7J,C.eWn,C.eWo,C.f50,C.f6V,C.f3N,C.eXl,C.f4_,C.eWO,C.epl])
u(B.i2,[C.cl9,C.eKV,C.fha,C.fh4,C.f2h,C.f2g,C.f2j,C.d2A,C.d2B,C.d2p,C.d2o,C.d2s,C.d2b,C.d2f,C.d2u,C.dFm,C.d26,C.d3X,C.d3Y,C.d3Z,C.d4_,C.d40,C.d3D,C.d3J,C.d2D,C.d3T,C.d3S,C.d2W,C.d2X,C.d2Y,C.d3_,C.d31,C.d7b,C.cwd,C.cvD,C.cvC,C.cvV,C.cvY,C.cvU,C.cvu,C.cvL,C.cvJ,C.cw_,C.cvK,C.cw8,C.cw6,C.cwb,C.bTl,C.bTk,C.bTn,C.bTm,C.dnz,C.dny,C.dnt,C.dnH,C.dnI,C.f5z,C.f6M,C.cYr,C.cYp,C.bU6,C.fdn,C.du2,C.du0,C.f7v,C.fkm,C.c2s,C.c2r,C.c2U,C.dM2,C.dM3,C.ffK,C.ffx,C.ffw,C.f3Q,C.c36,C.c37,C.c38,C.c35,C.c34,C.f21,C.fsp,C.fsq,C.fsr,C.fss,C.fso,C.dM9,C.dMa,C.dM8,C.fsv,C.d41,C.c4H,C.f11,C.dFz,C.dMs,C.c3y,C.c3v,C.c3x,C.c3A,C.bX0,C.bWZ,C.bX3,C.c3H,C.c3G,C.c3F,C.c3E,C.c3J,C.c3L,C.dQb,C.dPQ,C.dPO,C.dQ4,C.dPX,C.dQ0,C.dQ_,C.dPV,C.dQ9,C.dQ8,C.cED,C.cEE,C.ezW,C.ezP,C.ezU,C.c3B,C.fht,C.dQM,C.dQv,C.dQo,C.dQp,C.dQq,C.dQr,C.dQL,C.c3D,C.cyk,C.cyl,C.f0M,C.dQR,C.dQT,C.dQW,C.dR3,C.dR4,C.dR5,C.dQN,C.ftf,C.d5E,C.d5H,C.c5B,C.c5O,C.e0g,C.e0h,C.e0i,C.e02,C.e_V,C.e_W,C.e_X,C.e08,C.e0a,C.d9S,C.d9T,C.d9O,C.d9J,C.dad,C.da8,C.da7,C.da6,C.da0,C.f8q,C.fnL,C.f8p,C.eZt,C.fmF,C.fkz,C.foJ,C.dV8,C.dV9,C.f7C,C.f7B,C.fmV,C.fmW,C.fgT,C.fmm,C.c7l,C.c7m,C.c7k,C.c7n,C.c7j,C.c7p,C.c7q,C.c7i,C.f8V,C.eWl,C.eWm,C.f51,C.f6U,C.f3M,C.eXk,C.f3Z,C.fcD,C.fcE])
t(C.bn5,B.j_)
u(B.ae,[C.DN,C.ail,C.azT,C.aik,C.aim,C.aje,C.afA,C.akM,C.XU,C.XV,C.X1,C.alg,C.akL,C.LG,C.ax6,C.amd,C.amQ,C.Te,C.Ny,C.YG,C.YF,C.Tf,C.an8,C.axX,C.anb,C.Xq,C.anI,C.ay7,C.ay9,C.Yd,C.aoV])
u(B.ag,[C.aEJ,C.aH7,C.aI3,C.aH6,C.aH8,C.bcx,C.auk,C.az8,C.beW,C.beX,C.awu,C.bf2,C.aHE,C.aIc,C.aH9,C.azU,C.aAa,C.aAm,C.b6M,C.aCe,C.aCd,C.aAo,C.aAn,C.bcL,C.aIk,C.aHe,C.bsN,C.aHu,C.aya,C.aAy,C.aJ_])
u(B.kw,[C.eKX,C.f2i,C.d28,C.d2z,C.d2x,C.d2w,C.dFl,C.d3f,C.d3d,C.d3c,C.d2R,C.d30,C.d2P,C.d32,C.d2N,C.d35,C.cvT,C.cvv,C.cw3,C.cwa,C.cw9,C.cvs,C.cYo,C.dtZ,C.f7w,C.f7x,C.dM6,C.fh5,C.fsn,C.dMb,C.dMe,C.dMd,C.d42,C.c4I,C.c3z,C.c3w,C.bX1,C.bX_,C.c3K,C.dQc,C.dPU,C.dQa,C.eA1,C.eA0,C.dQn,C.dQg,C.dQi,C.dQk,C.dQj,C.dQS,C.dR6,C.d5F,C.d5J,C.d5G,C.e09,C.e_C,C.d9U,C.d9V,C.d9M,C.d9N,C.d9P,C.d9K,C.da1,C.fdu,C.c7o,C.c7h,C.eWU,C.f7L,C.f7K])
t(C.asz,C.DN)
u(B.aC,[C.o2,C.abd,C.La,C.GV,C.qJ,C.qK,C.li,C.i7,C.hV,C.b4Y,C.cW4,C.d83,C.qP,C.Tg,C.LT,C.pl,C.aWo,C.oy,C.ao1])
t(C.ax4,C.aH7)
t(C.bfl,C.aI3)
t(C.ax3,C.aH6)
t(C.ax5,C.aH8)
u(B.mb,[C.TZ,C.axY,C.anU,C.H_,C.Db])
u(B.ar,[C.Ze,C.bnB,C.abY,C.O6,C.Ly,C.amL,C.aaO,C.aaN,C.aXd,C.axW,C.a9m,C.aWL,C.a9e,C.ay8])
t(C.beU,C.aHE)
t(C.bfx,C.aIc)
t(C.bbg,C.aH9)
t(C.aAp,C.aIk)
t(C.axp,C.aHe)
t(C.aAL,C.bsN)
t(C.bdu,C.aHu)
u(B.n4,[C.b7g,C.b7f,C.b7e,C.b6H,C.bqU,C.blZ])
t(C.aBi,C.aJ_)
w(C.aH6,C.La)
w(C.aH7,C.La)
w(C.aH8,C.La)
w(C.aI3,C.La)
w(C.aHE,B.eK)
w(C.aIc,B.ca)
w(C.aH9,B.ca)
w(C.aIk,B.ca)
w(C.aHe,B.eK)
w(C.aHu,B.eK)
v(C.bsN,B.ev)
w(C.aJ_,B.ca)})()
B.kd(b.typeUniverse,JSON.parse('{"bn5":{"j_":[]},"DN":{"ae":[],"r":[]},"aEJ":{"ag":["DN<1,2>"]},"asz":{"DN":["1","ht<1>"],"ae":[],"r":[],"DN.T":"1","DN.S":"ht<1>"},"ail":{"ae":[],"r":[]},"azT":{"ae":[],"r":[]},"aik":{"ae":[],"r":[]},"aim":{"ae":[],"r":[]},"aje":{"ae":[],"r":[]},"afA":{"ae":[],"r":[]},"ax4":{"ag":["ail"]},"bfl":{"ag":["azT"]},"ax3":{"ag":["aik"]},"ax5":{"ag":["aim"]},"bcx":{"ag":["aje"]},"auk":{"ag":["afA"]},"akM":{"ae":[],"r":[]},"XU":{"ae":[],"r":[]},"XV":{"ae":[],"r":[]},"abY":{"ar":[],"r":[]},"X1":{"ae":[],"r":[]},"az8":{"ag":["akM"]},"Ze":{"ar":[],"r":[]},"bnB":{"ar":[],"r":[]},"beW":{"ag":["XU"]},"beX":{"ag":["XV"]},"O6":{"ar":[],"r":[]},"awu":{"ag":["X1"]},"alg":{"ae":[],"r":[]},"bf2":{"ag":["alg"]},"akL":{"ae":[],"r":[]},"beU":{"ag":["akL"]},"Ly":{"ar":[],"r":[]},"amL":{"ar":[],"r":[]},"LG":{"ae":[],"r":[]},"bfx":{"ag":["LG"]},"aaO":{"ar":[],"r":[]},"aaN":{"ar":[],"r":[]},"ax6":{"ae":[],"r":[]},"bbg":{"ag":["ax6"]},"aXd":{"ar":[],"r":[]},"amd":{"ae":[],"r":[]},"azU":{"ag":["amd"]},"amQ":{"ae":[],"r":[]},"aAa":{"ag":["amQ"]},"Te":{"ae":[],"r":[]},"Ny":{"ae":[],"r":[]},"YG":{"ae":[],"r":[]},"YF":{"ae":[],"r":[]},"aAm":{"ag":["Te"]},"b6M":{"ag":["Ny"]},"aCe":{"ag":["YG"]},"aCd":{"ag":["YF"]},"Tf":{"ae":[],"r":[]},"aAo":{"ag":["Tf"]},"an8":{"ae":[],"r":[]},"a9m":{"ar":[],"r":[]},"a9e":{"ar":[],"r":[]},"axX":{"ae":[],"r":[]},"aAn":{"ag":["an8"]},"axW":{"ar":[],"r":[]},"aWL":{"ar":[],"r":[]},"bcL":{"ag":["axX"]},"anb":{"ae":[],"r":[]},"aAp":{"ag":["anb"]},"Xq":{"ae":[],"r":[]},"axp":{"ag":["Xq"]},"anI":{"ae":[],"r":[]},"ay7":{"ae":[],"r":[]},"ay9":{"ae":[],"r":[]},"aAL":{"ag":["anI"],"ev":[]},"ay8":{"ar":[],"r":[]},"bdu":{"ag":["ay7"]},"b7g":{"az":[]},"b7f":{"az":[]},"b7e":{"az":[]},"aya":{"ag":["ay9"]},"b6H":{"az":[]},"bqU":{"az":[]},"Yd":{"ae":[],"r":[]},"aAy":{"ag":["Yd"]},"blZ":{"az":[]},"aoV":{"ae":[],"r":[]},"aBi":{"ag":["aoV"]}}'))
B.Oh(b.typeUniverse,JSON.parse('{"La":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=B.aA
return{dw:w("nE<x?>"),gS:w("nF"),o:w("cQ"),g5:w("w8"),M:w("fd<n>"),k:w("N"),gv:w("kU<al<iU>>"),gh:w("kU<n>"),gH:w("kU<H>"),r:w("au<~>"),dk:w("a_"),fw:w("M<nF>"),E:w("M<cQ>"),V:w("M<a9>"),O:w("M<x>"),A:w("M<a_>"),R:w("M<mN>"),B:w("M<al<H>>"),m:w("M<a0<n,n>>"),_:w("M<a0<n,@>>"),b:w("M<qJ>"),x:w("M<qK>"),gi:w("M<iU>"),a:w("M<li>"),Y:w("M<hV>"),v:w("M<i7>"),dA:w("M<GV>"),F:w("M<qP>"),Z:w("M<k9>"),g:w("M<hx>"),gK:w("M<+at,details,id(N,n,n)>"),C:w("M<cI>"),s:w("M<n>"),G:w("M<j_>"),eO:w("M<ez>"),d9:w("M<eA>"),p:w("M<r>"),n:w("M<P>"),t:w("M<H>"),U:w("M<az?>"),d4:w("M<n?>"),ck:w("al<qJ>"),e:w("al<qK>"),ac:w("al<iU>"),dZ:w("al<li>"),I:w("al<hV>"),j:w("al<@>"),L:w("al<H>"),eq:w("a0<n,n>"),P:w("a0<n,@>"),f:w("a0<@,@>"),cl:w("cR<n,B>"),aS:w("I<a_,rz>"),dc:w("I<H_,bG>"),dv:w("I<n,n>"),bL:w("I<P,bG>"),a3:w("I<H,bG>"),gN:w("I<H,p9>"),w:w("iA"),b1:w("qJ"),Q:w("qK"),bP:w("li"),i:w("hV"),u:w("i7"),gp:w("Tg"),J:w("LT"),D:w("pl"),an:w("k9"),c:w("cp"),K:w("aC"),d:w("jb<n>"),di:w("+outcome,snapshot(TZ,a3F?)"),ee:w("+after,before(P,P)"),et:w("+categories,error,message,replaceId(al<hV>,n?,n?,n?)"),cz:w("DB"),bJ:w("du<n>"),N:w("n"),e7:w("bm<P>"),W:w("cv<n>"),am:w("k1<H>"),cc:w("a4<n>"),aM:w("e2<cQ>"),bG:w("e2<P>"),l:w("r"),gm:w("o2"),ec:w("abd"),q:w("my"),y:w("Q"),gR:w("P"),z:w("@"),S:w("H"),eG:w("cQ?"),cJ:w("N?"),gw:w("al<a0<n,@>>?"),bM:w("al<@>?"),h:w("a0<n,@>?"),X:w("aC?"),gE:w("+code,qrPayload(n,n)?"),bY:w("+isLive,ownerEmail,snapshotJson(Q,n,n)?"),T:w("n?"),cD:w("P?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aOY=new B.bx(A.bB,A.jK,A.bB,A.jK)
D.eu=new B.x(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,A.t)
D.aPr=new B.ay(D.eu,1,A.r,-1)
D.aPt=new B.ay(A.ak,2,A.r,-1)
D.aPw=new B.ay(A.aS,2,A.r,-1)
D.aPy=new B.ay(A.ct,0.8,A.r,-1)
D.aPO=new B.ay(A.aM,2,A.r,-1)
D.aPV=new B.ay(A.f4,1.6,A.r,-1)
D.aQH=new B.aV(0,330,0,1/0)
D.aQN=new B.aV(0,176,0,1/0)
D.aQO=new B.aV(0,1/0,0,260)
D.aR4=new B.aV(90,1/0,0,1/0)
D.aTM=new B.a9(0,A.G,A.dt,A.J,4)
D.cBi=w([D.aTM],x.V)
D.aRi=new B.o(A.c,null,null,null,D.cBi,null,A.a6)
D.cvU=w([D.eu,A.aW],x.O)
D.bHL=new B.a8(A.a_,A.a7,A.w,D.cvU,null,null)
D.aRx=new B.o(null,null,null,null,null,D.bHL,A.a6)
D.aRC=new B.o(A.br,null,null,null,null,null,A.a6)
D.b1K=new B.x(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,A.t)
D.cPc=w([P.a8s,D.b1K],x.O)
D.bGV=new B.a8(A.b4,A.bb,A.w,D.cPc,null,null)
D.aRS=new B.o(null,null,null,A.n0,null,D.bGV,A.n)
D.b7v=new B.x(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,A.t)
D.cYW=w([D.b7v,M.aa8],x.O)
D.bGa=new B.a8(A.b4,A.bb,A.w,D.cYW,null,null)
D.aSf=new B.o(null,null,null,A.pL,null,D.bGa,A.n)
D.cLv=w([A.aA,A.bz],x.O)
D.bGD=new B.a8(A.a_,A.a7,A.w,D.cLv,null,null)
D.aSk=new B.o(null,null,null,null,null,D.bGD,A.a6)
D.es7=new B.F(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKg=new B.w("\ud83c\udf89",null,D.es7,null,null,null,null,null,null,null,null,null)
D.aXp=new B.cw(A.B,null,null,D.eKg,null)
D.aYH=new B.x(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,A.t)
D.a7X=new B.x(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,A.t)
D.b_Q=new B.x(1,0.8431372549019608,0.8,0.7843137254901961,A.t)
D.b_U=new B.x(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,A.t)
D.nP=new B.x(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,A.t)
D.rd=new B.x(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,A.t)
D.a8L=new B.x(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,A.t)
D.b1t=new B.x(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,A.t)
D.Tk=new B.x(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,A.t)
D.vW=new B.x(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,A.t)
D.b2C=new B.x(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,A.t)
D.TG=new B.x(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,A.t)
D.a9T=new B.x(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,A.t)
D.b5W=new B.x(1,0.9529411764705882,0.9411764705882353,1,A.t)
D.b61=new B.x(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,A.t)
D.aac=new B.x(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,A.t)
D.aar=new B.x(1,0,0.8392156862745098,0.30980392156862746,A.t)
D.aas=new B.x(1,1,0.9529411764705882,0.6901960784313725,A.t)
D.b76=new B.x(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,A.t)
D.b7a=new B.x(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,A.t)
D.b7W=new B.x(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,A.t)
D.U2=new B.x(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,A.t)
D.b8L=new B.x(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,A.t)
D.b9c=new B.x(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,A.t)
D.U8=new B.x(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,A.t)
D.b9M=new B.x(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,A.t)
D.bBx=new B.ac(A.o8,20,A.c,null,null,null)
D.eDC=new B.w("PLAY",null,A.aKr,null,null,null,null,null,null,null,null,null)
D.bZn=w([D.bBx,A.bw,D.eDC],x.p)
D.baD=new B.fs(A.ag,A.e,A.R,A.m,null,A.p,null,0,D.bZn,null)
D.abo=new B.a1F(2,"active")
D.bcN=new B.b7(42e5)
D.bcQ=new B.b7(53e4)
D.bcS=new B.b7(58e4)
D.bcW=new B.b7(82e4)
D.bdJ=new B.L(0,30,0,30)
D.bdR=new B.L(0,4,0,8)
D.bdU=new B.L(0,8,12,8)
D.bev=new B.L(12,0,12,88)
D.beC=new B.L(12,11,12,10)
D.beY=new B.L(13,10,12,10)
D.bf0=new B.L(13,8,13,8)
D.bf6=new B.L(14,10,14,2)
D.bfh=new B.L(14,14,10,14)
D.bfL=new B.L(16,12,16,96)
D.bfQ=new B.L(16,14,16,8)
D.bfU=new B.L(16,16,16,96)
D.bfW=new B.L(16,18,16,16)
D.bg_=new B.L(16,4,16,10)
D.bgV=new B.L(18,6,18,40)
D.bgX=new B.L(18,8,18,130)
D.bh8=new B.L(20,10,20,20)
D.bhl=new B.L(20,18,20,18)
D.bhp=new B.L(20,20,20,22)
D.bio=new B.L(2,0,2,10)
D.bj6=new B.L(4,8,12,4)
D.bji=new B.L(6,1,6,1)
D.bjk=new B.L(6,4,0,0)
D.bjn=new B.L(6,6,12,4)
D.bjI=new B.L(8,4,12,8)
D.eNs=new B.w("Activity",null,A.fL,null,null,null,null,null,null,null,null,null)
D.bll=new B.bG(1,A.bp,D.eNs,null)
D.eV3=new B.w("Game Receipts",null,A_.GX,null,null,null,null,null,null,null,null,null)
D.eu8=new B.F(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKS=new B.w("Every game you play \xb7 kept for good",null,D.eu8,null,null,null,null,null,null,null,null,null)
D.cRe=w([D.eV3,D.eKS],x.p)
D.bar=new B.fs(A.ag,A.e,A.j,A.F,null,A.p,null,0,D.cRe,null)
D.bls=new B.bG(1,A.bp,D.bar,null)
D.bnb=new B.a_(58607,"MaterialIcons",!1)
D.WV=new B.a_(62178,"MaterialIcons",!1)
D.bo_=new B.a_(62410,"MaterialIcons",!1)
D.bpb=new B.a_(63258,"MaterialIcons",!1)
D.bph=new B.a_(63304,"MaterialIcons",!1)
D.bpi=new B.a_(63306,"MaterialIcons",!1)
D.bpp=new B.a_(63330,"MaterialIcons",!1)
D.ahq=new B.a_(984777,"MaterialIcons",!1)
D.brV=new B.ac(A.E1,13,A.ak,null,null,null)
D.bs2=new B.ac(A.jC,13,A.oQ,null,null,null)
D.ahz=new B.ac(A.kZ,null,A.c,null,null,null)
D.bu9=new B.ac(A.E7,19,A.c,null,null,null)
D.bok=new B.a_(62804,"MaterialIcons",!1)
D.bui=new B.ac(D.bok,24,A.aM,null,null,null)
D.buK=new B.ac(A.zY,28,A.bh,null,null,null)
D.bvd=new B.ac(A.ah4,42,A.c,null,null,null)
D.bvm=new B.ac(A.XS,30,A.c,null,null,null)
D.bvX=new B.ac(A.fx,null,A.c,null,null,null)
D.bwh=new B.ac(A.jC,16,A.c,null,null,null)
D.bwS=new B.ac(A.qj,13,A.c,null,null,null)
D.bx0=new B.ac(A.kZ,18,A.c,null,null,null)
D.bxx=new B.ac(A.ul,null,A.dy,null,null,null)
D.by9=new B.ac(A.o8,28,A.c,null,null,null)
D.byo=new B.ac(A.m_,22,null,null,null,null)
D.byL=new B.ac(A.qh,null,null,null,null,null)
D.byY=new B.ac(A.cu,null,A.aQ,null,null,null)
D.bz4=new B.ac(A.WC,14,A.c,null,null,null)
D.bzz=new B.ac(A.L2,36,A.aK,null,null,null)
D.bzG=new B.ac(A.o9,16,A.c,null,null,null)
D.bzV=new B.ac(A.ej,null,null,null,null,null)
D.b23=new B.x(1,0.23137254901960785,0.16470588235294117,0,A.t)
D.bAu=new B.ac(A.dO,9,D.b23,null,null,null)
D.bqg=new B.a_(983146,"MaterialIcons",!1)
D.bAK=new B.ac(D.bqg,null,A.aM,null,null,null)
D.bBe=new B.ac(A.uo,28,D.eu,null,null,null)
D.bBj=new B.ac(A.up,null,A.f4,null,null,null)
D.bBo=new B.ac(A.hI,20,D.eu,null,null,null)
D.bqC=new B.a_(983377,"MaterialIcons",!1)
D.bBz=new B.ac(D.bqC,64,A.c,null,null,null)
D.bC1=new B.ac(A.fR,24,A.c,null,null,null)
D.bCX=new B.dZ(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bD7=new B.dZ(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bDl=new B.dZ(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bDm=new B.dZ(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.b0x=new B.x(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,A.t)
D.b2V=new B.x(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,A.t)
D.b2D=new B.x(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,A.t)
D.cPs=w([D.b0x,D.b2V,D.b2D],x.O)
D.bEg=new B.a8(A.ax,A.aE,A.w,D.cPs,null,null)
D.cTF=w([A.bs,A.aW],x.O)
D.bEy=new B.a8(A.ax,A.aE,A.w,D.cTF,null,null)
D.b1F=new B.x(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,A.t)
D.b6p=new B.x(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,A.t)
D.cBI=w([D.b1F,D.b6p],x.O)
D.bED=new B.a8(A.ax,A.aE,A.w,D.cBI,null,null)
D.cQP=w([A.bj,A.M,A.eM],x.O)
D.bEK=new B.a8(A.ax,A.aE,A.w,D.cQP,null,null)
D.bEM=new B.a8(A.a_,A.a7,A.w,F.aoG,null,null)
D.cBb=w([A.f4,A.cf],x.O)
D.ajf=new B.a8(A.a_,A.a7,A.w,D.cBb,null,null)
D.cBu=w([A.f4,A.bz],x.O)
D.ajg=new B.a8(A.a_,A.a7,A.w,D.cBu,null,null)
D.asc=w([D.nP,A.at,A.bQ],x.O)
D.bF2=new B.a8(A.ax,A.aE,A.w,D.asc,null,null)
D.aNO=new B.d4(-0.8,-1)
D.aNQ=new B.d4(1.2,1)
D.cyz=w([A.c,A.eo,A.j8,A.c,A.hp,A.b3,A.mk],x.O)
D.cQk=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.bF8=new B.a8(D.aNO,D.aNQ,A.w,D.cyz,D.cQk,null)
D.bFl=new B.a8(A.a_,A.a7,A.w,F.apt,null,null)
D.b6l=new B.x(1,0,0.7607843137254902,0.26666666666666666,A.t)
D.b4v=new B.x(1,0,0.6392156862745098,0.22745098039215686,A.t)
D.cPr=w([D.b6l,D.b4v],x.O)
D.bFx=new B.a8(A.a_,A.a7,A.w,D.cPr,null,null)
D.bFA=new B.a8(A.ax,A.aE,A.w,A.Ny,null,null)
D.cKE=w([E.U5,A.vZ],x.O)
D.bFC=new B.a8(A.a_,A.a7,A.w,D.cKE,null,null)
D.cOo=w([A.fP,A.ff],x.O)
D.ajl=new B.a8(A.a_,A.a7,A.w,D.cOo,null,null)
D.cTg=w([A.br,A.bU],x.O)
D.ajm=new B.a8(A.a_,A.a7,A.w,D.cTg,null,null)
D.cjS=w([A.dH,A.fp],x.O)
D.bGc=new B.a8(A.ax,A.aE,A.w,D.cjS,null,null)
D.cxG=w([A.c,A.bc],x.O)
D.bGl=new B.a8(A.a_,A.a7,A.w,D.cxG,null,null)
D.a9w=new B.x(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,A.t)
D.b_E=new B.x(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,A.t)
D.cHK=w([D.a9w,A.iU,A.pW,A.at,D.b_E],x.O)
D.bIE=w([0,0.28,0.55,0.82,1],x.n)
D.bGm=new B.a8(A.ax,A.aE,A.w,D.cHK,D.bIE,null)
D.bGv=new B.a8(A.a_,A.a7,A.w,A.O8,null,null)
D.bGw=new B.a8(A.a_,A.a7,A.w,F.aqZ,null,null)
D.bGz=new B.a8(A.a_,A.a7,A.w,D.asc,null,null)
D.cCL=w([A.bz,A.f4],x.O)
D.bGJ=new B.a8(A.a_,A.a7,A.w,D.cCL,null,null)
D.cWW=w([A.aA,A.bz,A.bc],x.O)
D.bGL=new B.a8(A.a_,A.a7,A.w,D.cWW,null,null)
D.cKM=w([A.b_,A.bJ,A.ha],x.O)
D.bGP=new B.a8(A.a_,A.a7,A.w,D.cKM,null,null)
D.cWE=w([A.bj,A.aI,A.bP,A.aJ,A.aN,A.ct,A.al],x.O)
D.cG7=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.bGU=new B.a8(A.ax,A.aE,A.w,D.cWE,D.cG7,null)
D.bH3=new B.a8(A.ax,A.aE,A.w,A.Zb,null,null)
D.cLf=w([D.Tk,A.e1],x.O)
D.bHc=new B.a8(A.a_,A.a7,A.w,D.cLf,null,null)
D.cS0=w([D.aac,D.a8L,A.M],x.O)
D.bHj=new B.a8(A.ax,A.aE,A.w,D.cS0,null,null)
D.b8g=new B.x(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,A.t)
D.cy8=w([A.eO,A.fP,D.b8g],x.O)
D.bHN=new B.a8(A.ax,A.aE,A.w,D.cy8,null,null)
D.cDc=w([D.nP,A.at],x.O)
D.bHO=new B.a8(A.ax,A.aE,A.w,D.cDc,null,null)
D.bI9=w([G.Ab,A.o8,A.jC,A.hf,A.k_,A.ky,A.kx,A.qm,A.lZ,A.eG,A.lr,A.wS,A.Ee],x.A)
D.bLw=w([10,50,100,200],x.t)
D.bVa=w([1,3,5,7],x.t)
D.c_8=w([25,50,100,250],x.t)
D.bqb=new B.a_(983104,"MaterialIcons",!1)
D.c7w=w([A.o8,A.l0,A.m_,A.lq,A.he,A.uv,D.bqb,A.XN],x.A)
D.ccQ=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.coE=w([0,0.22,0.5,0.78,1],x.n)
D.css=w([8,13,19],x.n)
D.Zu=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.eMx=new B.w("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.dQA=new B.jb("questions",48,D.eMx,null,x.d)
D.eDc=new B.w("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.dQF=new B.jb("edit",48,D.eDc,null,x.d)
D.eTK=new B.w("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.dQL=new B.jb("delete",48,D.eTK,null,x.d)
D.csC=w([D.dQA,D.dQF,D.dQL],B.aA("M<oC<n>>"))
D.cBC=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.cBP=w([A.bK,A.ja],x.O)
D.a13=new C.li("text","",null,null)
D.cCT=w([D.a13],x.a)
D.cEb=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.e15=new B.abA(A.lX,"Home")
D.dXg=new B.abA(A.p9,"Growth")
D.dZC=new B.abA(A.jC,"Wallet")
D.cGi=w([D.e15,D.dXg,D.dZC],B.aA("M<+icon,label(a_,n)>"))
D.cGF=w([4,0,2,6,8,1,3,5,7],x.t)
D.cGN=w([A.c,A.bO,A.ct],x.O)
D.dkA=new C.qP("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.dkD=new C.qP("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.dkB=new C.qP("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.dkv=new C.qP("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.dkw=new C.qP("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.dkE=new C.qP("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.ZX=w([D.dkA,D.dkD,D.dkB,D.dkv,D.dkw,D.dkE],x.F)
D.a_1=w([A.aH,A.bs,A.db,A.b_],x.O)
D.b2b=new B.x(1,1,0.8980392156862745,0.4,A.t)
D.cLl=w([A.T5,D.b2b,A.pW,A.hE,A.iU],x.O)
D.a_7=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.NG=w(["checkers_deluxe","tic_tac_go"],x.s)
D.bId=w([0,1,2],x.t)
D.c7K=w([3,4,5],x.t)
D.ckq=w([6,7,8],x.t)
D.bIf=w([0,3,6],x.t)
D.bVf=w([1,4,7],x.t)
D.c1z=w([2,5,8],x.t)
D.bIj=w([0,4,8],x.t)
D.c1w=w([2,4,6],x.t)
D.cNy=w([D.bId,D.c7K,D.ckq,D.bIf,D.bVf,D.c1z,D.bIj,D.c1w],x.B)
D.aA4=new C.H_(0,"abab")
D.dkt=new C.H_(1,"aaaBbb")
D.aA5=new C.H_(2,"aabb")
D.cOs=w([D.aA4,D.dkt,D.aA5],B.aA("M<H_>"))
D.cOI=w([],x.a)
D.arI=w([],x.v)
D.cRT=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.O_=w([1,2,3,-1,-2],x.t)
D.cUv=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.b5L=new B.x(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,A.t)
D.b5D=new B.x(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,A.t)
D.aaU=new B.x(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,A.t)
D.cVc=w([D.b5L,D.b5D,D.aaU],x.O)
D.b7r=new B.x(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,A.t)
D.cVe=w([A.a83,D.b7r,D.aaU],x.O)
D.cVM=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.asw=w([D.nP,A.c,D.eu,A.cd,A.bd,A.at],x.O)
D.cYM=w([A.jx,A.aA],x.O)
D.f2M=new C.o2("dice","Dice Roll","Roll for cash & prizes!",A.lV,D.cYM)
D.f2J=new C.o2("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",A.qi,A.aqv)
D.cTZ=w([A.dl,A.bh],x.O)
D.f2G=new C.o2("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",A.XA,D.cTZ)
D.cYl=w([A.dN,A.lL],x.O)
D.f2O=new C.o2("memory","Memory Match","Match pairs \u2014 solo or multiplayer",A.XN,D.cYl)
D.apX=w([A.bh,A.j7],x.O)
D.f2P=new C.o2("math","Math Quiz","200+ questions, rewards",A.E4,D.apX)
D.cN_=w([A.aA,A.lL],x.O)
D.f2I=new C.o2("scramble","Word Scramble","Place letters in order \u2014 solo or invite",F.af5,D.cN_)
D.bUY=w([A.j7,A.q5],x.O)
D.f2K=new C.o2("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",F.Xk,D.bUY)
D.f2N=new C.o2("sequence","Number Sequence","Find patterns, win rewards",A.ahg,D.apX)
D.cRS=w([M.kP,D.TG],x.O)
D.f2H=new C.o2("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",A.A9,D.cRS)
D.f2L=new C.o2("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",A.cu,Ai.mJ)
D.cWO=w([D.f2M,D.f2J,D.f2G,D.f2O,D.f2P,D.f2I,D.f2K,D.f2N,D.f2H,D.f2L],B.aA("M<o2>"))
D.dky=new C.qP("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.dkx=new C.qP("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.dku=new C.qP("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.dkC=new C.qP("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.dkF=new C.qP("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.dkz=new C.qP("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a_F=w([D.dky,D.dkx,D.dku,D.dkC,D.dkF,D.dkz],x.F)
D.dI8={checkers_deluxe:0,tic_tac_go:1}
D.ay5=new B.bt(D.dI8,["Checkers Deluxe","Tic Tac Go"],B.aA("bt<n,n>"))
D.dHl={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.ayg=new B.bt(D.dHl,[1,2,3,4,5,6,7],B.aA("bt<n,H>"))
D.dgT=new C.li("signature","NGMY Support Team",null,null)
D.dgU=new C.li("divider","",null,null)
D.OR=new C.Tg(!1,!1,!1,!1)
D.OT=new C.LT(!1,!1,!1,!1)
D.dhX=new C.LT(!0,!0,!1,!1)
D.B0=new C.anU(0,"swahili")
D.aA3=new C.anU(1,"english")
D.B1=new C.anU(2,"mix")
D.cN4=w([A.hS,A.iA,A.dC],x.O)
D.dlG=new C.oy(D.cN4,A.hC,A.b_,"BACKGAMMON","\ud83c\udfb2",A.afZ)
D.br2=new B.a_(983637,"MaterialIcons",!1)
D.dlH=new C.oy(Af.asF,A.bs,A.f5,"EURO WHEEL","\ud83c\udfa1",D.br2)
D.cUM=w([A.M,A.aI,A.bA],x.O)
D.dlI=new C.oy(D.cUM,A.aN,A.al,"ROYALE","\u265f\ufe0f",F.Xk)
D.cBd=w([A.dH,A.bh,A.e9],x.O)
D.dlJ=new C.oy(D.cBd,A.aH,A.db,"CONNECT 4","\ud83d\udd34",A.Y_)
D.cQv=w([A.dq,A.fp,A.q5],x.O)
D.dlK=new C.oy(D.cQv,A.tV,A.cf,"PUNTO BANCO","\ud83d\udc8e",A.l0)
D.cjT=w([A.n8,A.hQ,A.lj],x.O)
D.dlL=new C.oy(D.cjT,A.iM,A.jw,"DOMINOES","\ud83c\udc53",A.ah6)
D.cVp=w([A.w2,A.tW,A.hl],x.O)
D.dlM=new C.oy(D.cVp,A.zh,A.iv,"WAR","\u2694\ufe0f",N.Xg)
D.dlN=new C.oy(A.asA,A.aM,A.al,"PREMIUM","\ud83c\udfae",A.lV)
D.cCM=w([A.jS,A.aA,A.dN],x.O)
D.dlO=new C.oy(D.cCM,A.j4,A.f4,"JACKPOT","\ud83c\udfb0",A.lV)
D.cPI=w([A.lh,A.lJ,A.bz],x.O)
D.dlP=new C.oy(D.cPI,A.pV,A.cd,"LIVE BINGO","\ud83c\udfb1",A.A1)
D.cvS=w([A.iA,A.e1,A.b_],x.O)
D.boq=new B.a_(62865,"MaterialIcons",!1)
D.dlQ=new C.oy(D.cvS,A.rl,A.aM,"BIG SPIN","\ud83c\udfa1",D.boq)
D.dlR=new C.oy(A.a_E,A.aJ,A.bs,"HOLD'EM","\u2660\ufe0f",A.jC)
D.cVL=w([A.eO,A.ff,A.aW],x.O)
D.bnw=new B.a_(61234,"MaterialIcons",!1)
D.dlS=new C.oy(D.cVL,A.lO,A.aS,"CRAPS","\ud83c\udfb2",D.bnw)
D.cAA=w([A.ja,A.iw,A.bK],x.O)
D.dlT=new C.oy(D.cAA,A.bJ,A.bc,"PLINKO","\ud83d\udc8e",Aj.L4)
D.bqM=new B.a_(983492,"MaterialIcons",!1)
D.dlU=new C.oy(A.a_E,A.eZ,A.bs,"SNOOKER","\ud83c\udfb1",D.bqM)
D.cTA=w([A.eO,A.ff,A.aS],x.O)
D.dlV=new C.oy(D.cTA,A.q_,A.bo,"PROFIT LAB","\ud83d\udcb0",A.hI)
D.cTS=w([A.eM,A.fo,A.bs],x.O)
D.bpn=new B.a_(63324,"MaterialIcons",!1)
D.dlW=new C.oy(D.cTS,A.zd,A.br,"KLONDIKE","\ud83c\udccf",D.bpn)
D.cNE=w([A.dc,A.bj,A.M],x.O)
D.dlX=new C.oy(D.cNE,A.aM,A.aI,"VEGAS TABLE","\ud83c\udccf",A.Ad)
D.pj=new C.Db(0,"continueGame")
D.pk=new C.Db(1,"youWin")
D.FW=new C.Db(2,"youLose")
D.P1=new C.Db(3,"draw")
D.aAi=new C.TZ(0,"found")
D.dEJ=new C.TZ(1,"foundLive")
D.a1j=new C.TZ(2,"notFound")
D.aAj=new C.TZ(3,"wrongAccount")
D.dJL=new B.v(4,12)
D.dLT=new B.B(A.JF,A.r4,null)
D.biM=new B.L(4,0,0,3)
D.epB=new B.F(!0,A.aK,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXR=new B.w("NGMY Helper",null,D.epB,null,null,null,null,null,null,null,null,null)
D.dM8=new B.B(D.biM,D.eXR,null)
D.bpf=new B.a_(63284,"MaterialIcons",!1)
D.buw=new B.ac(D.bpf,18,A.nS,null,null,null)
D.etX=new B.F(!0,A.nS,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGT=new B.w("Continue",null,D.etX,null,null,null,null,null,null,null,null,null)
D.cP6=w([D.buw,A.bq,D.eGT],x.p)
D.ebl=new B.cD(A.aY,A.e,A.R,A.m,null,A.p,null,0,D.cP6,null)
D.dMb=new B.B(A.iD,D.ebl,null)
D.dMl=new B.B(A.bS,A.r4,null)
D.eW6=new B.w("\u25b6\ufe0f",null,A.a4h,null,null,null,null,null,null,null,null,null)
D.dME=new B.B(A.UN,D.eW6,null)
D.b5r=new B.x(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,A.t)
D.cLV=w([A.fP,A.ff,A.cW,D.b5r],x.O)
D.bGX=new B.a8(A.ax,A.aE,A.w,D.cLV,A.At,null)
D.aSn=new B.o(null,null,null,null,null,D.bGX,A.n)
D.bbG=new B.ky(D.aSn,A.b7,null,null)
D.dR_=new B.cE(0,0,0,0,null,null,D.bbG,null)
D.bwd=new B.ac(A.uk,11,A.c,null,null,null)
D.dR3=new B.cE(10,12,null,null,null,null,D.bwd,null)
D.cov=w([A.h9,A.eM,A.kn],x.O)
D.dRD=new B.bS(A.HO,1.1,A.w,null,0,D.cov,null,null)
D.b6B=new B.x(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,A.t)
D.b1U=new B.x(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,A.t)
D.b3s=new B.x(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,A.t)
D.cJR=w([D.b6B,D.b1U,D.b3s],x.O)
D.dRJ=new B.bS(A.a5R,1.05,A.w,null,0,D.cJR,null,null)
D.dS1=new B.bS(A.B,0.5,A.w,null,0,W.ZJ,null,null)
D.e9Y=new B.af(-18,0,18,1)
D.eaa=new B.af(-3,-5,3,5)
D.buY=new B.ac(A.ej,16,D.eu,null,null,null)
D.aKo=new B.F(!0,D.eu,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVJ=new B.w("Screenshot added \xb7 tap to change",null,D.aKo,null,null,null,null,null,null,null,null,null)
D.cyC=w([D.buY,A.bq,D.eVJ],x.p)
D.eaP=new B.cD(A.aY,A.b5,A.j,A.m,null,A.p,null,0,D.cyC,null)
D.byH=new B.ac(A.jE,15,D.eu,null,null,null)
D.eTF=new B.w("Refresh",null,D.aKo,null,null,null,null,null,null,null,null,null)
D.cAJ=w([D.byH,A.d4,D.eTF],x.p)
D.eaR=new B.cD(A.aY,A.e,A.R,A.m,null,A.p,null,0,D.cAJ,null)
D.dHJ={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.ecf=new B.fd(D.dHJ,3,x.M)
D.dIr={bubble_pop:0,fruit_slash:1,whack_mole:2,sky_stack:3,snake_rush:4,sky_hopper:5,brick_breaker:6,mystery_word:7,higher_lower:8,mine_sweep:9,merge_2048:10,lights_out:11,odd_one:12,speed_sort:13,flag_frenzy:14,balloon_darts:15,coin_catcher:16,number_rush:17,mini_sudoku:18,space_dodge:19,color_gate:20,paddle_duel:21,beat_tiles:22,target_range:23,perfect_stop:24,hoop_shot:25,penalty_kick:26,dino_dash:27,lane_racer:28,planet_shield:29,pipe_flow:30,color_flood:31,hanoi_tower:32,emoji_riddle:33,bigger_sum:34,true_false:35,capital_quiz:36,clock_reader:37,quick_count:38,shell_game:39,gem_swap:40,block_collapse:41,ball_sort:42,burger_builder:43,archery:44,deep_fishing:45,cannon_blast:46,moon_lander:47,jelly_jump:48,mini_golf:49,treasure_hunt:50,safe_cracker:51,gold_miner:52,cash_counter:53,plinko_drop:54,slot_stopper:55,change_maker:56,price_guess:57,make_13:58,find_it:59,knife_throw:60,fall_down:61,stick_bridge:62,zigzag_run:63,word_search:64,emoji_math:65,connect_four:66,pop_lock:67,asteroid_blaster:68,tetro_drop:69}
D.ecm=new B.fd(D.dIr,70,x.M)
D.dHw={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.ect=new B.fd(D.dHw,6,x.M)
D.dIx={memory:0,typing:1,scramble:2,pattern:3}
D.m9=new B.fd(D.dIx,4,x.M)
D.eeA=new B.ap(276,276)
D.efe=new B.a3(13,null,null,null)
D.aY2=new B.f9(2.6,null,null,null,null,A.aM,null,null,null,null)
D.efo=new B.a3(26,26,D.aY2,null)
D.eg8=new B.a3(null,7,null,null)
D.egh=new B.hI(8,0,0,1,null)
D.eWL=new B.w("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aI1=new B.aY(D.eWL,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eCq=new B.w("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.eja=new B.aY(D.eCq,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eDn=new B.w("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.ejg=new B.aY(D.eDn,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eTP=new B.w("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.ejU=new B.aY(D.eTP,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.b63=new B.x(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,A.t)
D.esW=new B.F(!0,D.b63,null,null,null,null,9,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.emV=new B.ez("$",null,null,A.cT,null,null,null,null,null,null,D.esW)
D.en9=new B.F(!0,A.M,null,null,null,null,14,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ens=new B.F(!0,A.c,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.enx=new B.F(!0,A.bj,null,null,null,null,9,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.enU=new B.F(!0,A.M,null,null,null,null,9,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eo3=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eo9=new B.F(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eoh=new B.F(!0,null,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eoY=new B.F(!0,A.aM,null,null,null,null,28,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ept=new B.F(!0,D.eu,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.epv=new B.F(!0,A.bJ,null,null,null,null,14,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eqc=new B.F(!0,E.zb,null,null,null,null,13,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJd=new B.F(!0,A.c,null,null,null,null,20,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.erG=new B.F(!0,A.bJ,null,null,null,null,11.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.erY=new B.F(!0,A.ak,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,A.ay,null,null,null,null,null,null,null,null)
D.esd=new B.F(!0,A.ak,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eta=new B.F(!0,A.c,null,null,null,null,11,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etp=new B.F(!0,A.c,null,null,null,null,14,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etA=new B.F(!0,A.br,null,null,null,null,11,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etB=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,A.ay,null,null,null,null,null,null,null,null)
D.eu4=new B.F(!0,A.ik,null,null,null,null,10.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b0N=new B.x(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,A.t)
D.eui=new B.F(!0,D.b0N,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evB=new B.F(!0,A.aH,null,null,null,null,17,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evX=new B.F(!0,D.a9w,null,null,null,null,9,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJV=new B.F(!0,E.zb,null,null,null,null,11,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewh=new B.F(!0,A.fo,null,null,null,null,52,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewi=new B.F(!0,A.bA,null,null,null,null,7,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewx=new B.F(!0,E.zb,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.v9=new B.F(!0,A.c,null,null,null,null,13,A.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4a=new B.x(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,A.t)
D.ewK=new B.F(!0,D.b4a,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exe=new B.F(!0,A.Ox,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyc=new B.F(!0,A.c,null,null,null,null,38,A.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyi=new B.F(!0,A.iC,null,null,null,null,11,A.a1,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eym=new B.F(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aK6=new B.F(!0,A.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyP=new B.F(!0,A.M,null,null,null,null,10,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyT=new B.F(!0,A.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezK=new B.F(!0,A.M,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eA7=new B.F(!0,A.ak,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAn=new B.F(!0,A.br,null,null,null,null,14,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAP=new B.F(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAT=new B.F(!0,A.M,null,null,null,null,11,A.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBK=new B.w("Value per pair",null,A.hj,null,null,null,null,null,null,null,null,null)
D.eBL=new B.w("Restore now",null,A.cb,null,null,null,null,null,null,null,null,null)
D.eCe=new B.w("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aJF=new B.F(!0,A.cS,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCm=new B.w("AVAILABLE PLANS",null,D.aJF,null,null,null,null,null,null,null,null,null)
D.eCQ=new B.w("Go Back",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eq3=new B.F(!0,A.bA,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDu=new B.w("PLAN VALUE",null,D.eq3,null,null,null,null,null,null,null,null,null)
D.eDw=new B.w("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.eDU=new B.w("Deposit",null,A.R1,null,null,null,null,null,null,null,null,null)
D.ez7=new B.F(!0,A.j4,null,null,null,null,null,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEP=new B.w("JACKPOT SLOTS",null,D.ez7,null,null,null,null,null,null,null,null,null)
D.eF6=new B.w("Restore",null,A.cb,null,null,null,null,null,null,null,null,null)
D.eq6=new B.F(!0,A.c,null,null,null,null,12,A.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eF9=new B.w("YOUR NUMBER",null,D.eq6,null,null,null,null,null,null,null,null,null)
D.eFn=new B.w("SPIN REELS",null,F.a3Z,null,null,null,null,null,null,null,null,null)
D.eFN=new B.w("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.eGe=new B.w("Perfect Score Profit",null,A.hj,null,null,null,null,null,null,null,null,null)
D.eGR=new B.w("Join room",null,A.kc,null,null,null,null,null,null,null,null,null)
D.eIG=new B.w("Add payment screenshot",null,A.jM,null,null,null,null,null,null,null,null,null)
D.eIU=new B.w("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.eyp=new B.F(!0,A.aM,null,null,null,null,11,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJk=new B.w("INVITE A PLAYER",null,D.eyp,null,null,null,null,null,null,null,null,null)
D.exB=new B.F(!0,A.T5,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJJ=new B.w("NGMY GOLD LEADER",null,D.exB,null,null,null,null,null,null,null,null,null)
D.eKb=new B.w("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.eKy=new B.w("Invest & Play",null,A.or,null,null,null,null,null,null,null,null,null)
D.aJz=new B.F(!0,D.vW,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKW=new B.w("VALID THRU",null,D.aJz,null,null,null,null,null,null,null,null,null)
D.aK8=new B.F(!0,A.aB,null,null,null,null,11,A.I,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL3=new B.w("DEALER",null,D.aK8,null,null,null,null,null,null,null,null,null)
D.eL9=new B.w("CARDHOLDER",null,D.aJz,null,null,null,null,null,null,null,null,null)
D.ex8=new B.F(!0,A.aJ,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLP=new B.w("NGMY PLATINUM",null,D.ex8,null,null,null,null,null,null,null,null,null)
D.eAe=new B.F(!0,A.oQ,null,null,null,null,10,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMs=new B.w("EARNED SO FAR",null,D.eAe,null,null,null,null,null,null,null,null,null)
D.eMY=new B.w("VS",null,A.aJt,null,null,null,null,null,null,null,null,null)
D.eNm=new B.w("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.eO1=new B.w("Keep typing \u2014 mistakes are counted in your payout",null,A.BD,null,null,null,null,null,null,null,null,null)
D.eO2=new B.w("Multiplayer invite",null,A.kc,null,null,null,null,null,null,null,null,null)
D.eOc=new B.w("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.eoN=new B.F(!0,A.Ox,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOi=new B.w("\ud83d\udcb0 Partial Payout System",null,D.eoN,null,null,null,null,null,null,null,null,null)
D.eOs=new B.w("Browse Topics",null,A.eB,null,null,null,null,null,null,null,null,null)
D.enS=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOG=new B.w("Investment Required",null,D.enS,null,A.L,null,null,null,null,null,null,null)
D.enp=new B.F(!0,A.c,null,null,null,null,16.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQ4=new B.w("Network Status",null,D.enp,null,null,null,null,null,null,null,null,null)
D.eQz=new B.w("Their account email",null,G.a3O,null,null,null,null,null,null,null,null,null)
D.eQS=new B.w("Verification code",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eQT=new B.w("Category",null,null,null,null,null,null,null,null,null,null,null)
D.eR4=new B.w("ACTIVE ASSET",null,D.aJF,null,null,null,null,null,null,null,null,null)
D.eRo=new B.w("Scan QR",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eRt=new B.w("Check word",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eRR=new B.w("YOUR HAND",null,D.aK8,null,null,null,null,null,null,null,null,null)
D.eSn=new B.w("NGMY Music Studio",null,A.l7,null,null,null,null,null,null,null,null,null)
D.eSq=new B.w("I sent it \u2014 submit deposit",null,A.or,null,null,null,null,null,null,null,null,null)
D.eT7=new B.w("Back",null,A.QA,null,null,null,null,null,null,null,null,null)
D.eB3=new B.F(!0,null,null,null,null,null,null,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTd=new B.w("DEAL / PLAY ROUND",null,D.eB3,null,null,null,null,null,null,null,null,null)
D.eTp=new B.w("Got it \u2014 keep chatting",null,A.cb,null,null,null,null,null,null,null,null,null)
D.eTy=new B.w("3 Messages Left",null,A.aJZ,null,null,null,null,null,null,null,null,null)
D.eU1=new B.w("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.eU9=new B.w("Copy",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eUu=new B.w("How many games?",null,G.a3O,null,null,null,null,null,null,null,null,null)
D.ewE=new B.F(!0,A.aB,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUG=new B.w("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.ewE,null,A.L,null,null,null,null,null,null,null)
D.eW9=new B.w("Question",null,null,null,null,null,null,null,null,null,null,null)
D.eWl=new B.w("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.eBp=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXM=new B.w("NGMY  WALLET",null,D.eBp,null,null,null,null,null,null,null,null,null)
D.eXN=new B.w("Select Your Bet",null,A.hi,null,null,null,null,null,null,null,null,null)
D.f02=new B.cv("history",x.W)
D.f07=new B.cv("ngmy_local_home",x.W)
D.f08=new B.cv("ngmy_local_invest",x.W)
D.f09=new B.cv("ngmy_local_wallet",x.W)
D.f2t=new C.X1(null)
D.aMF=new C.axY(0,"grid")
D.aMG=new C.axY(1,"questions")
D.f3m=new C.axY(2,"answer")
D.f4a=new C.XV(null)})();(function staticFields(){$.fzG=B.aZ(x.N)
$.fYE=B.R(x.N,x.k)
$.fF_=null
$.fEO=B.R(x.N,B.aA("vn"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hUf","bzt",()=>C.hCJ())
w($,"hU1","h5t",()=>{var v=null,u=B.j0(v,v,v,v,D.emV,A.a5,A.cn,v,A.eL,A.cm)
u.fD()
return u})})()};
(a=>{a["rFBwBZGb2DXfCquXZdlYkduq0Dw="]=a.current})($__dart_deferred_initializers__);