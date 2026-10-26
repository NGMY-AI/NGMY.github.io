((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,L,Q,E,M,A_,N,A0,R,O,A1,S,A2,P,A3,T,A4,A5,A6,A7,A8,A9,U,Aa,C={
fSS(d,e,f){var w=null,v=f.k("Eu<0>"),u=new B.Eu(w,w,w,w,v)
$.a0s()
u.d=new C.clb(new B.Vy(),e,u,f,d)
return new B.hK(u,v.k("hK<1>"))},
clb:function clb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
clc:function clc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cl8:function cl8(d){this.a=d},
cl9:function cl9(d,e){this.a=d
this.b=e},
cla:function cla(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cl7:function cl7(d,e,f){this.a=d
this.b=e
this.c=f},
bn8:function bn8(d){this.a=d},
fSR(d,e,f,g){return new C.asB(d,e,f,null,g.k("asB<0>"))},
DO:function DO(){},
aEL:function aEL(d){var _=this
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
asB:function asB(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
hGW(d){var w=A.a.i(d)
while(A.a.a_(w,"$"))w=A.a.i(A.a.aU(w,1))
return w},
h1Q(d){var w=C.hGW(d)
if(w.length===0)return""
return"$"+w},
fdQ(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fdQ=B.e(function(f,g){if(f===1)return B.f(g,v)
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
break}if(q.x!==A.cg){w=4
break}if(q.d!==A.fA){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!B.dm(m,"game payout:",0))if(!B.dm(m,"game partial:",0)){if(!B.dm(m,"multiplayer payout:",0))o=B.dm(m,"dice",0)&&q.e===A.f8
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
return B.b(C.v0(q.c,p,n,d,o,null,q.a,!0),$async$fdQ)
case 6:case 4:e.length===s||(0,B.J)(e),++r
w=3
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$fdQ,v)},
hLt(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
hHW(d,e,f){return A.d.be(e,new C.fhx(f,A.a.i(d.toLowerCase())))},
fhq(d){var w
B.fzF(d)
w=d.ci
return B.bi(new B.I(w,new C.fhr(),B.S(w).k("I<1,@>")),!0,x.N)},
hy4(d,e,f){var w,v,u,t,s,r,q=null,p=A.bM,o=A.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aS.toString
u=$.eb().gi2().b
if(u.a===0)t=1
else{new B.bf(u,B.a2(u).k("bf<2>")).gI(0)
u=$.kO()
s=u.d
t=s==null?u.gfY():s}w=A.k.dF(f*t)
v=new C.f2o(f)
if(J.cS(n,"data:image"))try{u=B.fD(A.cw.aE(A.d.gai(J.l9(n,","))),A.B,w,new C.f2l(v),A.fG,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.cS(n,"supabase://"))return new B.kU(B.a_f(n),new C.f2m(f,e,p,w,v),q,q,x.gh)
return B.k7(n,A.B,w,new C.f2n(v),A.fG,p,!0,e,q,q,f)},
fEr(d,e){return new B.a3(e,e,B.hN(C.hy4(d,e,e),A.ap),null)},
hqO(){var w,v,u=B.a([],x._),t=x.N,s=B.z(D.cWP,x.gm)
for(w=0;w<70;++w){v=A.AI[w]
s.push(new C.o2(v.a,v.b,v.c,v.e,v.f))}return new C.ax6(u,B.R(t,t),s)},
fhx:function fhx(d,e){this.a=d
this.b=e},
fhr:function fhr(){},
f2o:function f2o(d){this.a=d},
f2l:function f2l(d){this.a=d},
f2m:function f2m(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f2k:function f2k(d){this.a=d},
f2n:function f2n(d){this.a=d},
ain:function ain(d,e,f,g,h,i,j){var _=this
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
ax6:function ax6(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
d1Z:function d1Z(d,e){this.a=d
this.b=e},
d29:function d29(d,e){this.a=d
this.b=e},
d2r:function d2r(){},
d2s:function d2s(d){this.a=d},
d2h:function d2h(d,e){this.a=d
this.b=e},
d2g:function d2g(){},
d2i:function d2i(d){this.a=d},
d2f:function d2f(){},
d2k:function d2k(d){this.a=d},
d2j:function d2j(){},
d2c:function d2c(d){this.a=d},
d2a:function d2a(d){this.a=d},
d2b:function d2b(d){this.a=d},
d2d:function d2d(d){this.a=d},
d2e:function d2e(d){this.a=d},
d24:function d24(d,e){this.a=d
this.b=e},
d25:function d25(d,e){this.a=d
this.b=e},
d22:function d22(d){this.a=d},
d23:function d23(d){this.a=d},
d26:function d26(d){this.a=d},
d27:function d27(d){this.a=d},
d28:function d28(d,e,f){this.a=d
this.b=e
this.c=f},
d21:function d21(d,e){this.a=d
this.b=e},
d20:function d20(d,e){this.a=d
this.b=e},
d2_:function d2_(d,e){this.a=d
this.b=e},
d2q:function d2q(d){this.a=d},
d2o:function d2o(d,e,f){this.a=d
this.b=e
this.c=f},
d2n:function d2n(d,e,f){this.a=d
this.b=e
this.c=f},
d2m:function d2m(d,e){this.a=d
this.b=e},
d2l:function d2l(){},
d2p:function d2p(d){this.a=d},
azV:function azV(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bfn:function bfn(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
dFh:function dFh(d){this.a=d},
dFg:function dFg(d){this.a=d},
dFi:function dFi(d){this.a=d},
dFf:function dFf(){},
dFj:function dFj(d,e){this.a=d
this.b=e},
dFe:function dFe(d){this.a=d},
dFk:function dFk(d){this.a=d},
aim:function aim(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ax5:function ax5(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
d1T:function d1T(d){this.a=d},
d1W:function d1W(d){this.a=d},
d1X:function d1X(d){this.a=d},
d1Y:function d1Y(d){this.a=d},
d1V:function d1V(d,e){this.a=d
this.b=e},
d1U:function d1U(d,e){this.a=d
this.b=e},
aio:function aio(d,e,f,g,h,i,j,k,l,m){var _=this
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
ax7:function ax7(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
d3L:function d3L(d,e){this.a=d
this.b=e},
d3O:function d3O(d){this.a=d},
d3P:function d3P(d){this.a=d},
d3Q:function d3Q(d){this.a=d},
d3R:function d3R(d){this.a=d},
d3S:function d3S(d){this.a=d},
d3M:function d3M(d){this.a=d},
d3N:function d3N(d){this.a=d},
d30:function d30(d,e){this.a=d
this.b=e},
d31:function d31(d,e){this.a=d
this.b=e},
d3u:function d3u(d){this.a=d},
d3v:function d3v(){},
d3g:function d3g(d,e,f){this.a=d
this.b=e
this.c=f},
d3h:function d3h(d){this.a=d},
d3i:function d3i(d,e,f){this.a=d
this.b=e
this.c=f},
d3j:function d3j(d,e){this.a=d
this.b=e},
d3k:function d3k(){},
d2t:function d2t(d){this.a=d},
d3_:function d3_(d,e){this.a=d
this.b=e},
d3w:function d3w(){},
d3F:function d3F(){},
d3t:function d3t(d){this.a=d},
d3s:function d3s(d){this.a=d},
d2Y:function d2Y(d){this.a=d},
d2Z:function d2Z(){},
d3A:function d3A(){},
d3B:function d3B(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d3C:function d3C(d,e,f){this.a=d
this.b=e
this.c=f},
d2u:function d2u(){},
d2v:function d2v(d){this.a=d},
d2w:function d2w(){},
d39:function d39(d,e){this.a=d
this.b=e},
d3a:function d3a(d,e,f){this.a=d
this.b=e
this.c=f},
d3b:function d3b(d){this.a=d},
d38:function d38(d){this.a=d},
d3l:function d3l(d){this.a=d},
d3m:function d3m(){},
d3n:function d3n(d){this.a=d},
d3o:function d3o(){},
d3p:function d3p(d){this.a=d},
d3q:function d3q(){},
d3z:function d3z(d,e,f){this.a=d
this.b=e
this.c=f},
d3c:function d3c(d){this.a=d},
d3d:function d3d(d,e){this.a=d
this.b=e},
d3e:function d3e(d){this.a=d},
d3f:function d3f(d){this.a=d},
d3D:function d3D(d){this.a=d},
d3E:function d3E(d){this.a=d},
d2x:function d2x(d){this.a=d},
d2y:function d2y(d,e){this.a=d
this.b=e},
d2z:function d2z(d){this.a=d},
d2A:function d2A(d){this.a=d},
d3x:function d3x(d,e){this.a=d
this.b=e},
d3y:function d3y(d){this.a=d},
d37:function d37(d,e){this.a=d
this.b=e},
d3r:function d3r(d,e,f){this.a=d
this.b=e
this.c=f},
d35:function d35(d,e,f){this.a=d
this.b=e
this.c=f},
d36:function d36(){},
d3G:function d3G(d){this.a=d},
d3H:function d3H(d){this.a=d},
d3I:function d3I(d){this.a=d},
d3K:function d3K(d){this.a=d},
d3J:function d3J(){},
d34:function d34(d,e,f){this.a=d
this.b=e
this.c=f},
d33:function d33(d,e){this.a=d
this.b=e},
d32:function d32(d,e){this.a=d
this.b=e},
d2N:function d2N(d){this.a=d},
d2M:function d2M(d,e){this.a=d
this.b=e},
d2O:function d2O(d){this.a=d},
d2L:function d2L(d,e){this.a=d
this.b=e},
d2P:function d2P(d){this.a=d},
d2K:function d2K(){},
d2Q:function d2Q(d){this.a=d},
d2I:function d2I(){},
d2J:function d2J(d){this.a=d},
d2R:function d2R(d){this.a=d},
d2H:function d2H(d,e){this.a=d
this.b=e},
d2S:function d2S(d){this.a=d},
d2G:function d2G(d,e){this.a=d
this.b=e},
d2C:function d2C(d,e){this.a=d
this.b=e},
d2T:function d2T(d){this.a=d},
d2F:function d2F(d,e){this.a=d
this.b=e},
d2U:function d2U(d){this.a=d},
d2E:function d2E(d){this.a=d},
d2B:function d2B(d,e){this.a=d
this.b=e},
d2V:function d2V(d,e,f){this.a=d
this.b=e
this.c=f},
d2W:function d2W(d){this.a=d},
d2D:function d2D(){},
d2X:function d2X(d){this.a=d},
ajf:function ajf(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bcz:function bcz(){this.c=this.a=null},
d72:function d72(d,e){this.a=d
this.b=e},
d71:function d71(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afC:function afC(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
aum:function aum(d,e,f,g,h,i,j,k,l,m){var _=this
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
cw4:function cw4(d){this.a=d},
cvp:function cvp(d,e){this.a=d
this.b=e},
cvf:function cvf(d){this.a=d},
cvg:function cvg(d){this.a=d},
cvz:function cvz(d){this.a=d},
cvw:function cvw(d){this.a=d},
cvx:function cvx(d){this.a=d},
cvy:function cvy(d,e,f){this.a=d
this.b=e
this.c=f},
cvr:function cvr(d){this.a=d},
cvq:function cvq(d){this.a=d},
cvh:function cvh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cvu:function cvu(d){this.a=d},
cvt:function cvt(d){this.a=d},
cvs:function cvs(d,e){this.a=d
this.b=e},
cvS:function cvS(d){this.a=d},
cvM:function cvM(d){this.a=d},
cvP:function cvP(d){this.a=d},
cvO:function cvO(){},
cvL:function cvL(d){this.a=d},
cvN:function cvN(d,e){this.a=d
this.b=e},
cvK:function cvK(){},
cvm:function cvm(){},
cvn:function cvn(d,e){this.a=d
this.b=e},
cvo:function cvo(d){this.a=d},
cvk:function cvk(d,e){this.a=d
this.b=e},
cvl:function cvl(d,e){this.a=d
this.b=e},
cvC:function cvC(d,e){this.a=d
this.b=e},
cvv:function cvv(d){this.a=d},
cvD:function cvD(d){this.a=d},
cvE:function cvE(d,e){this.a=d
this.b=e},
cvF:function cvF(d,e){this.a=d
this.b=e},
cvG:function cvG(d,e){this.a=d
this.b=e},
cvH:function cvH(d,e,f){this.a=d
this.b=e
this.c=f},
cvI:function cvI(d){this.a=d},
cvJ:function cvJ(d){this.a=d},
cvA:function cvA(d,e){this.a=d
this.b=e},
cvR:function cvR(d){this.a=d},
cvB:function cvB(d,e){this.a=d
this.b=e},
cw3:function cw3(d){this.a=d},
cvX:function cvX(d){this.a=d},
cw_:function cw_(d){this.a=d},
cvU:function cvU(d,e){this.a=d
this.b=e},
cvY:function cvY(){},
cvZ:function cvZ(d,e){this.a=d
this.b=e},
cvV:function cvV(d){this.a=d},
cvW:function cvW(d){this.a=d},
cw1:function cw1(){},
cw0:function cw0(d){this.a=d},
cvT:function cvT(d,e){this.a=d
this.b=e},
cw2:function cw2(d){this.a=d},
cvi:function cvi(d){this.a=d},
cvQ:function cvQ(d,e){this.a=d
this.b=e},
cvj:function cvj(d,e,f){this.a=d
this.b=e
this.c=f},
aH8:function aH8(){},
aH9:function aH9(){},
aHa:function aHa(){},
aI5:function aI5(){},
bTr(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase())
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
bTs(d){var w=A.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hen(d,e){var w=d.ax
if(w<0)return!1
return w===e},
aU0(d,e){return C.heo(d,e)},
heo(d,e){var w=0,v=B.j(x.di),u,t,s,r,q,p
var $async$aU0=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aXN(d),$async$aU0)
case 3:p=g
if(p!=null){try{t=A.Q.aC(0,p.c,null)
if(x.f.b(t)){s=C.fNF(B.Z(t,x.N,x.z))
if(s==null){u=new B.Ep(D.a1k,null)
w=1
break}if(A.a.i(e).length!==0&&!C.bTr(s,e,p.b)){u=new B.Ep(D.aAj,null)
w=1
break}r=p.a?D.dEK:D.aAi
u=new B.Ep(r,s)
w=1
break}}catch(o){}u=new B.Ep(D.a1k,null)
w=1
break}s=C.fNG(d)
if(s==null){u=new B.Ep(D.a1k,null)
w=1
break}if(A.a.i(e).length!==0&&!C.bTr(s,e,null)){u=new B.Ep(D.aAj,null)
w=1
break}u=new B.Ep(D.aAi,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aU0,v)},
fNG(d){var w,v,u,t,s,r
try{w=A.a.i(d)
if(J.cS(w,"\ufeff"))w=J.mf(w,1)
v=!1
if(J.cS(w,"NGMYSNAP1|")){v=!0
w=A.c0.c4(0,A.cw.aE(J.mf(w,10)))}u=A.Q.aC(0,w,null)
if(!x.f.b(u))return null
t=B.Z(u,x.N,x.z)
s=v?C.hem(t):C.fNF(t)
return s}catch(r){return null}},
hem(d){var w,v,u,t,s,r,q,p,o,n=new C.bTo(),m=new C.bTn(),l=d.h(0,"qi")
if(x.f.b(l)){w=B.Z(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new B.N(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=B.aQ(w.h(0,"d"))
p=new B.uB(v,u,t,s,r,A.k.M(q==null?0:q))}else p=null
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
return new B.a3G("","",v,u,t,s,r,q,n,m,o,p,A.hN,new B.N(Date.now(),0,!1),-1)},
fNF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.y(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.bTq()
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
n=new B.uB(t,s,r,q,p,A.k.M(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=B.z(new B.e2(J.b4(m,new C.bTp(w),x.eG),t),t.k("F.E"))}else l=B.a([],x.E)
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
return new B.a3G(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
fz0(d,e,f,g){var w=0,v=B.j(x.N),u,t,s,r
var $async$fz0=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:t=B.bTm(d,e,f,g)
s=B.ad("[^\\w\\-.]+",!0,!1,!1,!1)
r=B.aI(t.a,s,"_")
u=B.EU(B.If(t.eD(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fz0,v)},
TY:function TY(d,e){this.a=d
this.b=e},
bTo:function bTo(){},
bTn:function bTn(){},
bTq:function bTq(){},
bTp:function bTp(d){this.a=d},
hB1(d){return B.cg(null,A.aV,!0,null,new C.f5D(),d,null,!0,!0,x.N)},
hBe(d,e,f,g){return B.cg(null,A.aV,!0,null,new C.f6Q(g,f,e),d,null,!0,!0,x.y)},
akN:function akN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aza:function aza(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dnz:function dnz(d,e){this.a=d
this.b=e},
dnA:function dnA(d){this.a=d},
dnq:function dnq(d,e){this.a=d
this.b=e},
dno:function dno(d){this.a=d},
dny:function dny(d){this.a=d},
dnx:function dnx(d,e){this.a=d
this.b=e},
dnn:function dnn(d,e){this.a=d
this.b=e},
dnm:function dnm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dnp:function dnp(d){this.a=d},
dnw:function dnw(){},
dnu:function dnu(d){this.a=d},
dnv:function dnv(d,e){this.a=d
this.b=e},
dnr:function dnr(){},
dns:function dns(d,e){this.a=d
this.b=e},
dnt:function dnt(d,e){this.a=d
this.b=e},
dnB:function dnB(d){this.a=d},
Ze:function Ze(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bnE:function bnE(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
XT:function XT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
beY:function beY(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dnF:function dnF(d){this.a=d},
dnC:function dnC(d,e){this.a=d
this.b=e},
dnD:function dnD(d,e){this.a=d
this.b=e},
dnE:function dnE(d){this.a=d},
XU:function XU(d){this.a=d},
beZ:function beZ(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dnG:function dnG(d,e){this.a=d
this.b=e},
f5D:function f5D(){},
f6Q:function f6Q(d,e,f){this.a=d
this.b=e
this.c=f},
abZ:function abZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eEQ:function eEQ(d){this.a=d},
eER:function eER(d){this.a=d},
O5:function O5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
X0:function X0(d){this.a=d},
aww:function aww(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cYi:function cYi(d){this.a=d},
cYf:function cYf(){},
cYg:function cYg(d){this.a=d},
cYh:function cYh(d){this.a=d},
S3(d,e,f){var w=0,v=B.j(x.H),u,t,s
var $async$S3=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=A.a.i(d)
if(s.length===0||A.a.i(f).length===0){w=1
break}w=3
return B.b(B.L6(s),$async$S3)
case 3:t=h
J.ci(t,B.D(["role",e,"text",A.a.i(f),"at",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z))
w=4
return B.b(B.al2(s,t),$async$S3)
case 4:case 1:return B.h(u,v)}})
return B.i($async$S3,v)},
heG(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=B.S(d).k("a4<1>")
v=B.z(new B.a4(d,new C.bU9(),w),w.k("F.E"))
w=v.length
if(w===0)return""
u=w<=24?v:A.d.fT(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,B.J)(u),++s){r=u[s]
q=J.a6(r)
p=J.y(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+B.t(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
bU9:function bU9(){},
hGm(d){return A.d.dM(A.AI,new C.fdK(d),new C.fdL()).r},
fdK:function fdK(d){this.a=d},
fdL:function fdL(){},
alh:function alh(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bf4:function bf4(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
du0:function du0(d){this.a=d},
du_:function du_(d){this.a=d},
dtS:function dtS(d,e,f){this.a=d
this.b=e
this.c=f},
dtX:function dtX(d){this.a=d},
dtU:function dtU(d,e,f){this.a=d
this.b=e
this.c=f},
dtY:function dtY(d){this.a=d},
dtT:function dtT(d){this.a=d},
dtZ:function dtZ(d){this.a=d},
dtV:function dtV(d){this.a=d},
dtW:function dtW(d){this.a=d},
h12(){var w=new B.N(Date.now(),0,!1),v=w.bL(B.dB(4-B.mu(w),0,0,0,0,0).a),u=B.bY(B.bw(v),1,4,0,0,0,0,0)
return""+B.bw(v)+"-W"+A.a.aT(A.o.u(1+A.k.bK(A.o.ak(v.bv(B.bY(B.bw(u),B.bB(u),B.bL(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
eYA(d,e){var w,v,u,t,s,r,q=B.EB(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=J.q(t,"email")
r=A.a.i(J.k(s==null?"":s).toLowerCase())
if((A.a.c5(r,"+local.ngmy")?A.a.al(r,0,r.length-11):r)===q)return t}t=B.D(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
hvQ(d,e){var w,v,u,t,s,r,q,p=B.EB(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=J.a6(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c5(q,"+local.ngmy")?A.a.al(q,0,q.length-11):q)===p){w=B.aQ(s.h(t,"winsLeft"))
w=w==null?null:A.k.M(w)
return w==null?0:w}}return 0},
hPe(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=B.EB(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=J.a6(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c5(q,"+local.ngmy")?A.a.al(q,0,q.length-11):q)===n){w=B.aQ(s.h(t,o))
w=w==null?null:A.k.M(w)
p=(w==null?0:w)-1
s.m(t,o,p<0?0:p)
return}}},
hBP(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=B.EB(b5),b2=B.c1O(),b3=C.h12()
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
return w==null?1:w}n=new C.f7B()
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
fYP(d,e){var w,v,u,t,s,r,q=B.a([],x.t)
for(w=[1,2,3],v=d.a,u=0;u<3;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
if(w===0)return 1
t=q[e.aG(w)]
if(t===3&&d.f>=d.e)t=e.hd()?1:2
return t},
fEJ(d,e){var w,v,u,t,s,r,q=B.a([],x.t)
for(w=[-1,-2],v=d.a,u=0;u<2;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
return w===0?-1:q[e.aG(w)]},
hBQ(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=B.EB(a3),a1=new C.f7C()
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
q=new C.f7D(v+r+q>1,l)
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
return C.fEJ(a2,a4)}w.m(u,f,m-1)
w.m(u,d,"p")
return 3},
hBO(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=B.aQ(i.h(0,"wins")),g=h==null?m:A.k.M(h)
if(g==null)g=0
h=B.aQ(i.h(0,"loses"))
w=h==null?m:A.k.M(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.h12():B.c1O()
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
hJU(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
d.bbT()
w=C.hBQ(d,e,a0)
if(w!=null){if(w===3)++d.f
C.adm(d,e,w)
return w}v=C.hBP(d,e)
if(v!=null){if(v===3)++d.f
C.adm(d,e,v)
return v}u=C.hBO(d,e,a0)
if(u!=null)return new C.fkJ(d,a0,e).$1(u)
t=C.eYA(d,e)
s=J.a6(t)
r=B.aQ(s.h(t,"winStreak"))
q=r==null?null:A.k.M(r)
if(q==null)q=0
s=B.aQ(s.h(t,"loseStreak"))
p=s==null?null:A.k.M(s)
if(p==null)p=0
o=new C.fkL(d,a0)
if(C.hvQ(d,e)>0){n=o.$0()
C.hPe(d,e)
C.adm(d,e,n)
return n}if(q>=d.c){n=new C.fkK(d,a0).$0()
C.adm(d,e,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.adm(d,e,n)
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
C.adm(d,e,f)
return f},
c1G(d){var w=0,v=B.j(x.y),u
var $async$c1G=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c1F(d),$async$c1G)
case 3:if(f){u=!0
w=1
break}u=B.c1F(d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c1G,v)},
adm(d,e,f){var w,v="winStreak",u="loseStreak",t=C.eYA(d,e),s=J.a6(t),r=B.aQ(s.h(t,v)),q=r==null?null:A.k.M(r)
if(q==null)q=0
r=B.aQ(s.h(t,u))
w=r==null?null:A.k.M(r)
if(w==null)w=0
if(f>0){s.m(t,v,q+1)
s.m(t,u,0)}else{s.m(t,u,w+1)
s.m(t,v,0)}},
f7B:function f7B(){},
f7C:function f7C(){},
f7D:function f7D(d,e){this.a=d
this.b=e},
fkJ:function fkJ(d,e,f){this.a=d
this.b=e
this.c=f},
fkL:function fkL(d,e){this.a=d
this.b=e},
fkK:function fkK(d,e){this.a=d
this.b=e},
akM:function akM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beW:function beW(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cO$=d
_.aY$=e
_.c=_.a=null},
dnb:function dnb(d){this.a=d},
dna:function dna(d){this.a=d},
dnc:function dnc(d){this.a=d},
dn9:function dn9(d,e){this.a=d
this.b=e},
aHG:function aHG(){},
Lx:function Lx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c2v:function c2v(){},
c2u:function c2u(){},
amM:function amM(d,e,f){this.c=d
this.d=e
this.a=f},
fA3(d,e,f){return B.cg(null,A.x.j(0.88),!0,null,new C.c2X(f,e),d,null,!0,!0,x.H)},
hiv(d){var w,v,u,t,s=A.a.i(d),r=s.split("-")
if(r.length===3){w=B.c3(r[0],null)
v=r[1]
u=B.c3(v,null)
t=B.c3(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?A.hW[u-1]:v)+" "+B.t(t)+", "+B.t(w)}return s},
LF:function LF(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c2X:function c2X(d,e){this.a=d
this.b=e},
bfz:function bfz(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
dM4:function dM4(d,e){this.a=d
this.b=e},
dM0:function dM0(){},
dM1:function dM1(){},
dM2:function dM2(d,e){this.a=d
this.b=e},
dM3:function dM3(d,e){this.a=d
this.b=e},
aIe:function aIe(){},
h0Z(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.bbs(new C.fg6(w))
w=w.a
return w==null?null:w.c.a},
h0R(d){$.aS.x1$.push(new C.ffU(d))},
h1a(d){var w=$.ri().gb8(),v=w!=null
if(!v||w.c==null)return
if(C.h0Z(w)==="GamePlayScreen")if(v&&w.c!=null&&w.pI())w.eB()},
h19(d){C.fYV(d,0)},
fYV(d,e){var w,v
if(e>4)return
w=d==null?$.ri().gb8():d
if(w==null||w.c==null)return
v=C.h0Z(w)
if(v==="GameCenterScreen")return
if(D.ecf.q(0,v)&&w.pI()){w.eB()
$.aS.x1$.push(new C.f3U(w,e))}},
aLZ(d,e,f){return B.ec(B.cj(new C.fhs(e,d,f)),e,!0)},
fg6:function fg6(d){this.a=d},
ffU:function ffU(d){this.a=d},
ffT:function ffT(d){this.a=d},
f3U:function f3U(d,e){this.a=d
this.b=e},
fhs:function fhs(d,e,f){this.a=d
this.b=e
this.c=f},
aWp(d,e){var w=0,v=B.j(x.H),u
var $async$aWp=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=B.T6(e)
w=2
return B.b(B.amP(d,u),$async$aWp)
case 2:B.a4W(d,u)
return B.h(null,v)}})
return B.i($async$aWp,v)},
v0(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$v0=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:o=B.xm(g)
if(o.length===0){w=1
break}t=e==null?B.F4(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return B.b(B.LG(o),$async$v0)
case 3:q=m
if(j!=null&&j.length!==0&&J.rj(q,new C.c39(j))){w=1
break}p=e==null?new B.N(Date.now(),0,!1):e
J.p_(q,0,new B.iV(A.o.u(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return B.b(C.aWp(o,q),$async$v0)
case 4:if(i==null||r==null||s)C.a4Y(o).bw(new C.c3a(),x.S).eL(new C.c3b())
case 1:return B.h(u,v)}})
return B.i($async$v0,v)},
a4Y(d){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a4Y=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=$.h27
m=B.xm(d)
if(n==null||m.length===0){w=1
break}w=3
return B.b(B.LG(m),$async$a4Y)
case 3:t=f
s=J.cB(t)
if(!s.be(t,new C.c38())){w=1
break}w=4
return B.b(n.$2(m,t),$async$a4Y)
case 4:r=f
q=J.a6(r)
if(q.gG(r)!==s.gG(t)){w=1
break}for(p=!1,o=0;o<s.gG(t);++o)if(A.Q.aj(s.h(t,o).ad(),null)!==A.Q.aj(q.h(r,o).ad(),null))p=!0
w=p?5:6
break
case 5:w=7
return B.b(C.aWp(m,r),$async$a4Y)
case 7:case 6:case 1:return B.h(u,v)}})
return B.i($async$a4Y,v)},
aWq(d){var w=0,v=B.j(x.S),u,t
var $async$aWq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.fA6(d,!1),$async$aWq)
case 3:t=J
w=4
return B.b(C.amQ(d,!1),$async$aWq)
case 4:u=t.dF(f,new C.c37(new B.N(Date.now(),0,!1).bL(-864e8))).gG(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aWq,v)},
amQ(d,e){var w=0,v=B.j(x.ac),u,t,s
var $async$amQ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=B.xm(d)
if(t.length===0){u=B.a([],x.gi)
w=1
break}s=B
w=3
return B.b(B.LG(t),$async$amQ)
case 3:u=s.T6(g)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amQ,v)},
hHT(d){var w,v,u,t=new B.N(Date.now(),0,!1),s=t.bv(d).a,r=A.o.ak(s,6e7)
if(r<1)return"Just now"
w=A.o.ak(s,36e8)
if(w<1)return""+r+"m ago"
if(A.o.ak(s,864e8)<1)return""+w+"h ago"
v=A.o.J(B.dn(d),12)===0?12:A.o.J(B.dn(d),12)
s=A.hW[B.bB(d)-1]
r=B.bw(d)===B.bw(t)?"":", "+B.bw(d)
w=A.a.aT(A.o.u(B.hn(d)),2,"0")
u=B.dn(d)<12?"AM":"PM"
return s+" "+B.bL(d)+r+" \xb7 "+v+":"+w+" "+u},
bvA(d){var w=A.k.ab(Math.abs(d),2).split(".")
return"$"+B.od(w[0],B.ad("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.f25(),null)+"."+w[1]},
bz3(d,e){var w=0,v=B.j(x.H),u,t,s
var $async$bz3=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.amQ(e,!1),$async$bz3)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
B.fA6(e,!0).bw(new C.fsM(e),t).bw(new C.fsN(),t).eL(new C.fsO())
w=4
return B.b(B.c0(A.K,null,new C.fsP(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bz3)
case 4:case 1:return B.h(u,v)}})
return B.i($async$bz3,v)},
fCV(d,e,f){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.G(f.j(0.35),A.r,1)
return B.C(B.p(w,B.u(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),A.bw,B.eY(A.B,B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,A.dp)],x.p),A.m,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.hs,w,w,w),1)},
dM5(d,e,f){var w=null,v=A.x.j(0.22),u=B.m(8),t=B.G(f.j(0.28),A.r,1)
return B.C(B.p(w,B.u(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,A.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.eY(A.a1,B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,A.e8)],x.p),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.K5,w,w,w),1)},
c39:function c39(d){this.a=d},
c3a:function c3a(){},
c3b:function c3b(){},
c38:function c38(){},
c37:function c37(d){this.a=d},
f25:function f25(){},
fsM:function fsM(d){this.a=d},
fsN:function fsN(){},
fsO:function fsO(){},
fsP:function fsP(d,e){this.a=d
this.b=e},
fsL:function fsL(d,e){this.a=d
this.b=e},
fsK:function fsK(d){this.a=d},
aaP:function aaP(d,e){this.c=d
this.a=e},
dM7:function dM7(){},
dM8:function dM8(){},
dM9:function dM9(){},
dMa:function dMa(d){this.a=d},
dMc:function dMc(){},
dMb:function dMb(d){this.a=d},
aaO:function aaO(d,e){this.c=d
this.a=e},
dM6:function dM6(){},
bz4(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return B.hM(A.aV,!1,w,d,new C.fsS(j,i,h,g,e,f),null,A.eU,!1,x.H)},
fsS:function fsS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fsQ:function fsQ(d,e){this.a=d
this.b=e},
fsR:function fsR(d,e){this.a=d
this.b=e},
ax8:function ax8(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bbi:function bbi(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bq$=e
_.a6$=f
_.c=_.a=null},
d3U:function d3U(d,e){this.a=d
this.b=e},
d3T:function d3T(){},
abe:function abe(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aHb:function aHb(){},
anA(d,e,f){return new C.aXg(f,d,e,null)},
hj9(d){var w=B.a(A.k.ab(d,2).split("."),x.s),v=B.ad("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=B.od(w[0],v,new C.c4K(),null)
return A.d.aF(w,".")},
aWt(){var w=$.rI
if((w>0?$.rI=w-1:w)<=0)$.rI=0},
aev(d,e){var w=0,v=B.j(x.H),u
var $async$aev=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.fHd
w=u!=null?2:3
break
case 2:w=4
return B.b(u.$2(d,e),$async$aev)
case 4:case 3:return B.h(null,v)}})
return B.i($async$aev,v)},
aXg:function aXg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c4L:function c4L(d){this.a=d},
c4K:function c4K(){},
L9:function L9(){},
bUG:function bUG(){},
fGD(d){if(d>0)return"+"+d
return""+d},
fG0(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fht(d,e){var w=J.q(e,d)
if(w==null)w=B.fgg().h(0,d)
return w==null?90:w},
f13(d,e){var w,v,u=B.aZ(x.S)
while(u.a<3){w=e.aG(41)-20
if(w===0)continue
u.H(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.H(0,d+v*7+3)
v=B.a([A.o.u(d)],x.s)
A.d.v(v,new B.jA(u,new C.f14(),u.$ti.k("jA<ck.E,n>")))
A.d.fN(v,e)
return v},
fXV(d,e,f){var w,v,u,t,s=B.aZ(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.H(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.H(0,f[A.o.J(u,5)]+u);++u}t=B.a([d],x.s)
A.d.v(t,B.oJ(s,3,s.$ti.k("ck.E")))
A.d.fN(t,e)
return t},
hD9(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=B.a([],x.dA),b2=new B.f6()
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
b1.push(new C.GX("Simplify \u221a("+t*s+"x^"+q+")",m,C.fXV(m,b2,B.a([""+(r+1)+"x^"+o+"\u221a"+n,B.t(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aG(35)
j=b2.aG(4)===0?1:2+b2.aG(4)
i=b2.aG(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.GX("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.f13(k,b2)))}else if(u===2){k=2+b2.aG(18)
j=b2.aG(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aG(10)+2
b1.push(new C.GX("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.f13(g,b2)))}else b1.push(new C.GX("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.f13(k,b2)))}else if(u===3){e=b2.aG(11)-5
o=b2.aG(11)
n=b2.aG(11)
d=b2.aG(11)+2
l=b2.hd()?1:-1
a0=e+l*(b2.aG(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===A.k.lp(a4)?""+A.k.M(a4):"\u221a"+a3
b1.push(new C.GX("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.f13(a0,b2)))}else{a6=2+b2.aG(10)
a7=a6+2+b2.aG(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.GX("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.fXV(m,b2,B.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
hNw(d){var w,v,u=x.s,t=B.a(d.split(""),u)
if(t.length<4)return new B.dv(B.a(d.split(""),u),x.bJ).fL(0)
for(w=0;w<12;++w){A.d.fN(t,A.cA)
v=A.d.fL(t)
if(v!==d)return v}return new B.dv(t,x.bJ).fL(0)},
GX:function GX(d,e,f){this.a=d
this.b=e
this.c=f},
f14:function f14(){},
ame:function ame(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
azW:function azW(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
dFn:function dFn(d){this.a=d},
dFo:function dFo(d){this.a=d},
dFp:function dFp(d){this.a=d},
dFq:function dFq(d,e){this.a=d
this.b=e},
dFr:function dFr(d,e){this.a=d
this.b=e},
dFs:function dFs(d){this.a=d},
dFm:function dFm(d){this.a=d},
dFt:function dFt(d){this.a=d},
dFl:function dFl(d){this.a=d},
dFw:function dFw(d){this.a=d},
dFx:function dFx(d){this.a=d},
dFv:function dFv(d,e){this.a=d
this.b=e},
dFu:function dFu(d,e){this.a=d
this.b=e},
amR:function amR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAc:function aAc(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
dMu:function dMu(d,e,f){this.a=d
this.b=e
this.c=f},
dMv:function dMv(d){this.a=d},
dMq:function dMq(d){this.a=d},
dMs:function dMs(d,e){this.a=d
this.b=e},
dMr:function dMr(d,e){this.a=d
this.b=e},
dMt:function dMt(d,e){this.a=d
this.b=e},
dMp:function dMp(d){this.a=d},
hfi(d){var w,v,u,t,s,r,q,p=new B.N(Date.now(),0,!1),o=p.bL(36e8)
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
a53(d){var w=0,v=B.j(x.ck),u,t,s,r,q,p,o
var $async$a53=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.b)
w=1
break}w=3
return B.b(B.aw(),$async$a53)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aR(J.q(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.b)
w=1
break}try{s=A.Q.aC(0,t,null)
if(!x.j.b(s)){p=B.a([],x.b)
u=p
w=1
break}p=J.d1(s,x.f)
p=B.cy(p,new C.c3B(),p.$ti.k("F.E"),x.b1)
p=B.z(p,B.a2(p).k("F.E"))
A.d.aX(p,new C.c3C())
u=p
w=1
break}catch(n){r=B.a5(n)
$.ak.$1("[calendar-memory] load: "+B.t(r))
p=B.a([],x.b)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$a53,v)},
an8(d,e){var w=0,v=B.j(x.H),u,t,s,r,q
var $async$an8=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(C.a53(d),$async$an8)
case 2:r=g
q=J.cB(r)
q.bl(r,new C.c3y(e))
q.H(r,e)
q.aX(r,new C.c3z())
w=3
return B.b(B.aw(),$async$an8)
case 3:u=g
t=A.a.i(d.toLowerCase())
q=q.jY(r,80)
s=q.$ti.k("I<ai.E,a0<n,@>>")
q=B.z(new B.I(q,new C.c3A(),s),s.k("ai.E"))
w=4
return B.b(u.an("String","ngmy_helper_calendar_v1_"+t,A.Q.aj(q,null)),$async$an8)
case 4:return B.h(null,v)}})
return B.i($async$an8,v)},
hiI(d,e){var w=Date.now(),v=new B.N(w,0,!1).bO()
w=J.dF(d,new C.c3D(v,v.bL(B.dB(14,0,0,0,0,0).a)))
w=B.z(w,w.$ti.k("F.E"))
return w},
fPN(d){var w,v,u,t,s,r,q,p,o,n,m=C.hiI(d,null)
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
c3B:function c3B(){},
c3C:function c3C(){},
c3y:function c3y(d){this.a=d},
c3z:function c3z(){},
c3A:function c3A(){},
c3D:function c3D(d,e){this.a=d
this.b=e},
hfj(d){var w,v,u,t,s,r,q,p,o=null,n=new B.N(Date.now(),0,!1)
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
fOd(d){var w=A.o.J(B.dn(d),12)===0?12:A.o.J(B.dn(d),12),v=B.dn(d)>=12?"PM":"AM"
return""+B.bB(d)+"/"+B.bL(d)+" "+w+":"+A.a.aT(A.o.u(B.hn(d)),2,"0")+" "+v},
Sg(d){var w=0,v=B.j(x.e),u,t,s,r,q,p,o
var $async$Sg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.x)
w=1
break}w=3
return B.b(B.aw(),$async$Sg)
case 3:q=f
p=A.a.i(d.toLowerCase())
t=B.aR(J.q(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=B.a([],x.x)
w=1
break}try{s=A.Q.aC(0,t,null)
if(!x.j.b(s)){p=B.a([],x.x)
u=p
w=1
break}p=J.d1(s,x.f)
p=B.cy(p,new C.bX3(),p.$ti.k("F.E"),x.Q)
p=B.z(p,B.a2(p).k("F.E"))
A.d.aX(p,new C.bX4())
u=p
w=1
break}catch(n){r=B.a5(n)
$.ak.$1("[call-memory] load: "+B.t(r))
p=B.a([],x.x)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$Sg,v)},
aUN(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$aUN=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.aw(),$async$aUN)
case 2:u=g
t=B.dc(e,0,B.dJ(120,"count",x.S),B.S(e).c).dt(0)
s=A.a.i(d.toLowerCase())
r=B.S(t).k("I<1,a0<n,@>>")
r=B.z(new B.I(t,new C.bX1(),r),r.k("ai.E"))
w=3
return B.b(u.an("String","ngmy_call_memory_v1_"+s,A.Q.aj(r,null)),$async$aUN)
case 3:return B.h(null,v)}})
return B.i($async$aUN,v)},
aUO(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$aUO=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:p=B.R(x.N,x.Q)
o=J
w=2
return B.b(C.Sg(d),$async$aUO)
case 2:u=o.aW(g)
case 3:if(!u.C()){w=4
break}t=u.gT(u)
p.m(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.m(0,r.a,r)}u=p.$ti.k("bf<2>")
q=B.z(new B.bf(p,u),u.k("F.E"))
A.d.aX(q,new C.bX2())
w=5
return B.b(C.aUN(d,q),$async$aUO)
case 5:return B.h(null,v)}})
return B.i($async$aUO,v)},
bX5(d,e){var w=0,v=B.j(x.e),u,t,s
var $async$bX5=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return B.b(C.Sg(d),$async$bX5)
case 3:t=s.dF(g,new C.bX6(e.bL(-72e8),e.bL(72e8)))
t=B.z(t,t.$ti.k("F.E"))
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bX5,v)},
fOe(d,e){var w,v,u,t,s,r=J.a6(d)
if(r.gah(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.jY(d,e),v=w.$ti,w=new B.bR(w,w.gG(0),v.k("bR<ai.E>")),v=v.k("ai.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gTs()+"\n"
t=t.f
if(t!=null&&A.a.i(t).length!==0){s=A.a.i(t)
u+="  Voicemail/text: "+(s.length>180?A.a.al(s,0,177)+"\u2026":s)+"\n"}}r=r.gG(d)>e?u+("\u2026 and "+(r.gG(d)-e)+" more\n"):u
return A.a.i(r.charCodeAt(0)==0?r:r)},
hJE(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new B.N(q,0,!1).bO(),o=d.toLowerCase(),n=B.bY(B.bw(p),B.bB(p),B.bL(p),0,0,0,0,0)
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
return B.bY(B.bw(n),B.bB(n),B.bL(n),u,t,0,0,0)},
h2x(d){var w=B.ad("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
qK:function qK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bX3:function bX3(){},
bX4:function bX4(){},
bX1:function bX1(){},
bX2:function bX2(){},
bX6:function bX6(d,e){this.a=d
this.b=e},
fPQ(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lj(t,w,v,u==null?null:J.k(u))},
hiO(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b4(v,new C.c3J(),x.bP)
v=B.z(v,v.$ti.k("ai.E"))}if(v==null)v=D.cOJ
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.y(d.h(0,"printable"),!0)
return new C.i7(r,w,v,u,t,typeof d.h(0,s)=="number"?A.k.M(B.fc(d.h(0,s))):0)},
hiN(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.hw1(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?A.k.M(B.fc(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?A.k.M(B.fc(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b4(s,new C.c3H(),x.u)
s=B.z(s,s.$ti.k("ai.E"))}return new C.hU(p,w,v,u,s==null?D.arI:s,t)},
hw2(d){var w,v,u,t=B.D([G.Ae,"investments",A.nr,"games",A.jF,"loans",A.hi,"withdrawals",A.k_,"deposits",A.kA,"civic",A.kz,"store",A.qm,"jobs",A.m_,"refunds",A.eF,"account",A.lr,"music",A.wT,"help"],x.dk,x.N)
for(w=new B.cN(t,B.a2(t).k("cN<1,2>")).gaf(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
hw1(d){switch(d){case"investments":return G.Ae
case"games":return A.nr
case"loans":return A.jF
case"withdrawals":return A.hi
case"deposits":return A.k_
case"civic":return A.kA
case"store":return A.kz
case"jobs":return A.qm
case"refunds":return A.m_
case"account":return A.eF
case"music":return A.lr
default:return A.wT}},
mB(d){var w=B.a([new C.lj("text",d,null,null)],x.a)
return w},
aes(){var w=null,v=x.v
return B.a([new C.hU("investments","Investments",G.Ae,4280468830,B.a([new C.i7("inv1","How do I buy an investment plan?",C.mB("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.i7("inv2","When do I get paid from my plan?",C.mB("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.i7("inv3","Can I have more than one plan?",C.mB("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.hU("games","Games",A.nr,4287323382,B.a([new C.i7("gam1","How do NGMY games work?",C.mB("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.i7("gam2","Why did my game payout change?",C.mB("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.hU("loans","Loans",A.jF,4294538006,B.a([new C.i7("loan1","How do I apply for a loan?",C.mB("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.i7("loan2","What is the repayment period?",C.mB("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.hU("withdrawals","Withdrawals",A.hi,4282090230,B.a([new C.i7("wd1","How do I withdraw money?",C.mB("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.i7("wd2","Why is my withdrawal pending?",C.mB("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.hU("deposits","Deposits",A.k_,4279548070,B.a([new C.i7("dep1","How do I deposit funds?",C.mB("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.i7("dep2","How long until my deposit posts?",C.mB("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.hU("civic","Civic Registry",A.kA,4289170426,B.a([new C.i7("civ1","What is Civic Registry?",C.mB("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.i7("civ2","What does \u201cmissed\u201d mean on my profile?",C.mB("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.hU("store","NGMY Store",A.kz,4293675161,B.a([new C.i7("sto1","How do I buy from NGMY Store?",C.mB("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.i7("sto2","How do I sell in the store?",C.mB("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.hU("jobs","Jobs & Creator",A.qm,4293548044,B.a([new C.i7("job1","How do I find jobs?",C.mB("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.i7("job2","How do I post a job?",C.mB("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.hU("refunds","Refunds",A.m_,4293870660,B.a([new C.i7("ref1","Can I get a refund?",C.mB("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.i7("ref2","How long do refunds take?",C.mB("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.hU("account","Account",A.eF,4281908728,B.a([new C.i7("acc1","How do I update my profile?",C.mB("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.i7("acc2","I forgot my password \u2014 what now?",C.mB("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.hU("music","Music Charts",A.lr,4290807036,B.a([new C.i7("mus1","What are Music Charts?",C.mB("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.i7("mus2","How do I upload music?",C.mB("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.hU("help","Help Center",A.wT,4279080072,B.a([new C.i7("hlp1","Where can I get live help?",C.mB("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.i7("hlp2","How do daily Helper limits work?",C.mB("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
fPR(d){var w,v=J.a6(d),u=v.gah(d)
if(u)return C.aes()
v=v.di(d,new C.c3M(),x.i)
w=B.z(v,v.$ti.k("ai.E"))
A.d.aX(w,new C.c3N())
return w.length===0?C.aes():w},
fPS(d){var w=J.b4(d,new C.c3O(),x.P)
w=B.z(w,w.$ti.k("ai.E"))
return B.D(["categories",w,"savedAt",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z)},
ana(d){return C.hiP(d)},
hiP(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p
var $async$ana=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aw(),$async$ana)
case 6:s=f
w=7
return B.b(s.an("String","ngmy_helper_kb_v1",A.Q.aj(C.fPS(d),null)),$async$ana)
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
return B.i($async$ana,v)},
c3L(){var w=0,v=B.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$c3L=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aw(),$async$c3L)
case 7:r=e
q=B.aR(J.q(r.a,"ngmy_helper_kb_v1"))
if(q==null||A.a.i(q).length===0){l=C.aes()
u=l
w=1
break}p=A.Q.aC(0,q,null)
if(!x.f.b(p)){l=C.aes()
u=l
w=1
break}o=J.q(p,"categories")
if(!x.j.b(o)){l=C.aes()
u=l
w=1
break}n=C.fPR(o)
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
l=C.aes()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$c3L,v)},
aWP(){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$aWP=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.bV(),$async$aWP)
case 7:if(!e){u=null
w=1
break}w=8
return B.b(B.eU("ngmy_helper_kb",null,!1,A.bD),$async$aWP)
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
return B.i($async$aWP,v)},
aWQ(d){return C.hiQ(d)},
hiQ(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aWQ=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.bV(),$async$aWQ)
case 7:if(!f){u=!1
w=1
break}w=8
return B.b(B.hs("ngmy_helper_kb",d,!1,!1,A.cy,null),$async$aWQ)
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
return B.i($async$aWQ,v)},
anb(){var w=0,v=B.j(x.I),u,t,s,r
var $async$anb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.c3L(),$async$anb)
case 3:s=e
w=4
return B.b(C.aWP(),$async$anb)
case 4:r=e
w=r!=null&&x.j.b(J.q(r,"categories"))?5:6
break
case 5:t=C.fPR(x.j.a(J.q(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return B.b(C.ana(t),$async$anb)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anb,v)},
c3P(d){var w=0,v=B.j(x.y),u
var $async$c3P=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ana(d),$async$c3P)
case 3:u=C.aWQ(C.fPS(d))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c3P,v)},
lj:function lj(d,e,f,g){var _=this
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
c3K:function c3K(){},
c3J:function c3J(){},
hU:function hU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c3I:function c3I(){},
c3H:function c3H(){},
c3M:function c3M(){},
c3N:function c3N(){},
c3O:function c3O(){},
b5_:function b5_(d){this.a=d},
Td:function Td(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAo:function aAo(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
dQ9:function dQ9(){},
dQa:function dQa(){},
dQ3:function dQ3(d){this.a=d},
dQ4:function dQ4(d){this.a=d},
dPN:function dPN(d,e){this.a=d
this.b=e},
dPO:function dPO(d){this.a=d},
dPP:function dPP(d,e,f){this.a=d
this.b=e
this.c=f},
dPM:function dPM(d){this.a=d},
dQ0:function dQ0(d,e){this.a=d
this.b=e},
dQ1:function dQ1(d,e){this.a=d
this.b=e},
dQ2:function dQ2(d){this.a=d},
dPV:function dPV(d){this.a=d},
dPW:function dPW(d,e,f){this.a=d
this.b=e
this.c=f},
dPU:function dPU(d,e){this.a=d
this.b=e},
dQ_:function dQ_(d,e,f){this.a=d
this.b=e
this.c=f},
dPZ:function dPZ(d,e){this.a=d
this.b=e},
dPY:function dPY(d,e){this.a=d
this.b=e},
dPX:function dPX(d,e,f){this.a=d
this.b=e
this.c=f},
dPR:function dPR(d){this.a=d},
dPQ:function dPQ(d){this.a=d},
dPS:function dPS(d,e){this.a=d
this.b=e},
dPT:function dPT(d){this.a=d},
dQ8:function dQ8(d,e){this.a=d
this.b=e},
dQ7:function dQ7(d,e){this.a=d
this.b=e},
dQ6:function dQ6(){},
dQ5:function dQ5(d,e){this.a=d
this.b=e},
Nx:function Nx(d,e){this.c=d
this.a=e},
b6O:function b6O(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cEu:function cEu(d){this.a=d},
cEt:function cEt(d,e){this.a=d
this.b=e},
cEr:function cEr(d,e){this.a=d
this.b=e},
cEv:function cEv(d){this.a=d},
cEs:function cEs(d,e){this.a=d
this.b=e},
cEq:function cEq(d,e){this.a=d
this.b=e},
cEw:function cEw(d){this.a=d},
cEx:function cEx(d,e){this.a=d
this.b=e},
YF:function YF(d,e,f){this.c=d
this.d=e
this.a=f},
aCg:function aCg(){this.d=$
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
YE:function YE(d,e){this.c=d
this.a=e},
aCf:function aCf(){var _=this
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
hiL(d){var w=new B.I(d,new C.c3E(),B.S(d).k("I<1,n>")).aF(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
c3F(d,e,f){return C.hiM(d,e,f)},
hiM(b4,b5,b6){var w=0,v=B.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$c3F=B.e(function(b8,b9){if(b8===1)return B.f(b9,v)
for(;;)switch(w){case 0:b3=A.a.i(b5)
if(b3.length===0){u=new B.Iu([B.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return B.b(B.qh(B.mE(b3),C.hiL(b6)+"\n\nAdmin instruction:\n"+b4,A.h4,null),$async$c3F)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=A.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new B.Iu([B.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=A.a.i(a3)
if(J.cS(s,"```"))s=A.a.e0(J.fJY(s,B.ad("^```(?:json)?\\s*",!0,!1,!1,!1),""),B.ad("\\s*```$",!0,!1,!1,!1),"")
r=A.Q.aC(0,s,null)
a3=x.f
if(!a3.b(r)){a3=B.a([],x.Y)
u=new B.Iu([a3,"AI response was not valid JSON.",null,null])
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
if(!a6.b(n)||J.ch(n)){a3=B.a([],x.Y)
u=new B.Iu([a3,"AI did not return any categories.",p,o])
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
J.ci(a0,C.fPQ(B.Z(a3.a(a1),a4,a5)))}if(J.aa(a0)===0){a9=J.q(e,"answer")
J.ci(a0,new C.lj("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=B.t(f)
b1=J.q(e,"question")
J.ci(g,new C.i7("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.y(J.q(e,"printable"),!0),f))}a9=J.q(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.q(j,"iconKey")
b0=C.hiK(J.k(b0==null?"help":b0))
b1=typeof J.q(j,"colorValue")=="number"?A.k.M(B.fc(J.q(j,"colorValue"))):4284773515
J.ci(m,new C.hU(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.aa(a3)!==0)===!0?o:null
u=new B.Iu([m,null,p,a3])
w=1
break}catch(b7){a2=B.a5(b7)
a3=B.t(a2)
a4=B.a([],x.Y)
u=new B.Iu([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$c3F,v)},
hiK(d){switch(d){case"investments":return G.Ae
case"games":return A.nr
case"loans":return A.jF
case"withdrawals":return A.hi
case"deposits":return A.k_
case"civic":return A.kA
case"store":return A.kz
case"jobs":return A.qm
case"refunds":return A.m_
case"account":return A.eF
case"music":return A.lr
default:return A.wT}},
hIb(d,e,f){var w,v,u,t=B.bi(d,!0,x.i)
if(f!=null&&J.aa(e)===1){w=A.d.bf(t,new C.fhQ(f))
if(w>=0){t[w]=J.fi(e).cyW(f,t[w].f)
return t}}A.d.v(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].b6e(u)
return t},
c3E:function c3E(){},
fhQ:function fhQ(d){this.a=d},
cVW:function cVW(d){this.a=d},
Te:function Te(d,e,f){this.c=d
this.d=e
this.a=f},
aAq:function aAq(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
dQK:function dQK(){},
dQq:function dQq(d,e){this.a=d
this.b=e},
dQv:function dQv(d,e){this.a=d
this.b=e},
dQt:function dQt(d,e){this.a=d
this.b=e},
dQr:function dQr(d){this.a=d},
dQs:function dQs(d){this.a=d},
dQu:function dQu(d,e,f){this.a=d
this.b=e
this.c=f},
dQm:function dQm(){},
dQn:function dQn(){},
dQo:function dQo(){},
dQp:function dQp(){},
dQA:function dQA(d,e){this.a=d
this.b=e},
dQB:function dQB(d){this.a=d},
dQC:function dQC(d){this.a=d},
dQD:function dQD(d){this.a=d},
dQE:function dQE(d){this.a=d},
dQF:function dQF(d){this.a=d},
dQG:function dQG(){},
dQH:function dQH(d){this.a=d},
dQz:function dQz(d){this.a=d},
dQI:function dQI(d){this.a=d},
dQy:function dQy(d){this.a=d},
dQJ:function dQJ(d,e){this.a=d
this.b=e},
dQx:function dQx(d,e){this.a=d
this.b=e},
dQw:function dQw(d,e){this.a=d
this.b=e},
hqs(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=B.a([],x.eO)
for(w=B.ad("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kr(0,d),w=new B.I_(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=A.a.al(d,t,q)
o=u?A.ct:A.aI
m.push(new B.ez(p,n,n,A.cT,n,n,n,n,n,n,new B.E(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?A.ct:A.aI
m.push(new B.ez(p,n,n,A.cT,n,n,n,n,n,n,new B.E(!0,o,n,n,n,n,13,A.I,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?A.ct:A.aI
m.push(new B.ez(p,n,n,A.cT,n,n,n,n,n,n,new B.E(!0,o,n,n,n,n,13,n,A.cz,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?A.ct:A.aI
m.push(new B.ez(p,n,n,A.cT,n,n,n,n,n,n,new B.E(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,A.mc,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=A.a.aU(d,t)
m.push(B.dr(n,n,n,n,n,n,n,n,n,B.l(n,n,u?A.ct:A.aI,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return B.rS(n,n,n,A.eA,n,n,!0,n,B.dr(m,n,n,n,n,n,n,n,n,n,n),A.a5,n,n,A.d9,A.cm)},
d7V:function d7V(d){this.a=d},
ay_:function ay_(d,e){this.a=d
this.b=e},
an9:function an9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAp:function aAp(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
dQj:function dQj(d,e){this.a=d
this.b=e},
dQk:function dQk(d,e){this.a=d
this.b=e},
dQb:function dQb(d){this.a=d},
dQc:function dQc(d){this.a=d},
dQl:function dQl(){},
dQe:function dQe(d,e){this.a=d
this.b=e},
dQd:function dQd(d,e){this.a=d
this.b=e},
dQg:function dQg(){},
dQi:function dQi(){},
dQh:function dQh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQf:function dQf(d,e){this.a=d
this.b=e},
axY:function axY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a9n:function a9n(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aWO:function aWO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c3G:function c3G(d){this.a=d},
a9f:function a9f(d,e,f){this.c=d
this.d=e
this.a=f},
cya:function cya(d){this.a=d},
cyb:function cyb(){},
cyc:function cyc(d){this.a=d},
axZ:function axZ(d,e,f){this.c=d
this.d=e
this.a=f},
bcN:function bcN(){this.c=this.a=this.d=null},
d7W:function d7W(d,e){this.a=d
this.b=e},
d7Y:function d7Y(d,e){this.a=d
this.b=e},
d7X:function d7X(d){this.a=d},
hkf(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
hkg(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
hke(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
fXQ(d){var w
if(new B.a4(B.a(d.split("\n"),x.s),new C.f0P(),x.cc).gG(0)<3)w=d.length>100&&A.a.q(d,"\n")
else w=!0
return w},
hJj(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.hke(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
anV:function anV(d,e){this.a=d
this.b=e},
H1:function H1(d,e){this.a=d
this.b=e},
qP:function qP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f0P:function f0P(){},
anc:function anc(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAr:function aAr(d,e,f,g,h,i,j){var _=this
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
dQY:function dQY(d,e){this.a=d
this.b=e},
dQP:function dQP(d){this.a=d},
dQR:function dQR(){},
dQS:function dQS(d,e){this.a=d
this.b=e},
dQT:function dQT(d){this.a=d},
dQU:function dQU(){},
dQV:function dQV(d,e){this.a=d
this.b=e},
dQW:function dQW(d){this.a=d},
dQX:function dQX(d){this.a=d},
dQQ:function dQQ(d,e){this.a=d
this.b=e},
dR4:function dR4(d,e){this.a=d
this.b=e},
dR1:function dR1(){},
dR2:function dR2(d,e){this.a=d
this.b=e},
dR3:function dR3(d,e){this.a=d
this.b=e},
dR0:function dR0(d,e){this.a=d
this.b=e},
dR_:function dR_(d,e){this.a=d
this.b=e},
dR6:function dR6(d){this.a=d},
dR5:function dR5(d){this.a=d},
dQO:function dQO(d,e){this.a=d
this.b=e},
dQN:function dQN(d,e){this.a=d
this.b=e},
dR7:function dR7(d,e){this.a=d
this.b=e},
dQZ:function dQZ(d,e){this.a=d
this.b=e},
dQL:function dQL(d){this.a=d},
dQM:function dQM(d){this.a=d},
aIm:function aIm(){},
c3R(d){var w=0,v=B.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$c3R=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=D.OU
w=1
break}w=3
return B.b(B.aw(),$async$c3R)
case 3:r=f
q=A.a.i(d.toLowerCase())
t=B.aR(J.q(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.OU
w=1
break}try{q=B.Z(x.f.a(A.Q.aC(0,t,null)),x.N,x.z)
p=J.y(q.h(0,"contacts"),!0)
o=J.y(q.h(0,"calendar"),!0)
n=J.y(q.h(0,"calls"),!0)
q=J.y(q.h(0,"allGrantedOnce"),!0)
u=new C.Tf(p,o,n,q)
w=1
break}catch(l){s=B.a5(l)
$.ak.$1("[helper-perms] load: "+B.t(s))
u=D.OU
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$c3R,v)},
and(d,e){var w=0,v=B.j(x.H),u
var $async$and=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){w=1
break}w=4
return B.b(B.aw(),$async$and)
case 4:w=3
return B.b(g.an("String","ngmy_helper_permissions_v1_"+A.a.i(d.toLowerCase()),A.Q.aj(e.ad(),null)),$async$and)
case 3:case 1:return B.h(u,v)}})
return B.i($async$and,v)},
c3Q(d){var w=0,v=B.j(x.gp),u,t
var $async$c3Q=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=new C.Tf(!0,!0,!0,!0)
w=3
return B.b(C.and(d,t),$async$c3Q)
case 3:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c3Q,v)},
h2y(d){var w=A.a.i(d.toLowerCase()),v=B.ad("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=B.ad("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=B.ad("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=B.ad("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
h2w(d){var w=B.ad("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
Tf:function Tf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bza(d,e,f,g,h){var w=0,v=B.j(x.H),u,t,s
var $async$bza=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return B.b(C.aWK(h),$async$bza)
case 3:if(j){w=1
break}w=4
return B.b(C.an5(h),$async$bza)
case 4:if(d.e==null){w=1
break}t=B.pY(d,!0)
t.toString
s=B.da()
s.b=B.nT(new C.ftC(g,e,f,s),!1,!1)
t.lk(0,s.b7())
case 1:return B.h(u,v)}})
return B.i($async$bza,v)},
ftC:function ftC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ftB:function ftB(d){this.a=d},
Xp:function Xp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
axr:function axr(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cO$=d
_.aY$=e
_.c=_.a=null},
d5v:function d5v(d){this.a=d},
d5w:function d5w(d,e,f){this.a=d
this.b=e
this.c=f},
d5B:function d5B(){},
d5A:function d5A(d){this.a=d},
d5x:function d5x(d){this.a=d},
d5y:function d5y(){},
d5z:function d5z(d){this.a=d},
aHg:function aHg(){},
hjJ(d){var w=A.a.i(d),v=B.ad("[^A-Z0-9]",!0,!1,!1,!1),u=B.aI(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
hjI(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.ad("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.ad("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
anI(d){return C.hjG(d)},
hjG(d){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$anI=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.eU("ngmy_local_deposit_qr_v1_"+A.a.i(d),null,!1,A.bD),$async$anI)
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
return B.i($async$anI,v)},
aXE(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aXE=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.hjJ(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.eU("ngmy_local_deposit_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bD),$async$aXE)
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
return B.i($async$aXE,v)},
fQe(d){var w,v=A.a.i(d)
if(A.a.a_(v,"NGMYLOCALDEP1|")){w=A.a.i(A.a.aU(v,14))
return w.length===0?null:w}return null},
hjH(d,e,f){var w=A.a.i(f)
if(w.length===0)return!1
return A.d.be(e,new C.c5E(A.a.i(d.toLowerCase()),w))},
fQf(d,e,f,g,h){var w,v,u=J.a6(g),t=u.h(g,"lockedToEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=A.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.pl(!1,0,y.u)
if(s!==A.a.i(f.toLowerCase()))return new C.pl(!1,0,y.j)
v=A.a.i(h)
if(v.length===0)return new C.pl(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.pl(!1,0,"Verification code does not match this deposit.")
if(!C.hjH(e,d,w))return new C.pl(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
fAl(d,e){var w,v,u="amount",t=J.a6(d),s=t.h(d,"redeemedBy")
if(A.a.i(J.k(s==null?"":s)).length!==0)return D.dhY
s=t.h(d,"lockedToEmail")
w=A.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=A.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){B.aQ(t.h(d,u))
return new C.LS(!0,!1,!1,!0)}if(w!==A.a.i(e.toLowerCase())){B.aQ(t.h(d,u))
return new C.LS(!0,!1,!0,!1)}B.aQ(t.h(d,u))
return new C.LS(!0,!1,!1,!1)},
c5K(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$c5K=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=C.fQe(d)
if(s==null){u=D.OW
w=1
break}w=3
return B.b(C.anI(s),$async$c5K)
case 3:t=g
if(t==null){u=D.OW
w=1
break}u=C.fAl(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c5K,v)},
aXG(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$aXG=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aXE(d),$async$aXG)
case 3:s=g
if(s==null||s.length===0){u=D.OW
w=1
break}w=4
return B.b(C.anI(s),$async$aXG)
case 4:t=g
if(t==null){u=D.OW
w=1
break}u=C.fAl(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aXG,v)},
c5L(d,e,f,g,h){var w=0,v=B.j(x.D),u,t
var $async$c5L=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aXE(d),$async$c5L)
case 3:t=j
if(t==null||t.length===0){u=new C.pl(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.TA(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c5L,v)},
TA(d,e,f,g,h){return C.hjK(d,e,f,g,h)},
hjK(a2,a3,a4,a5,a6){var w=0,v=B.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$TA=B.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.fQe(a4)
if(a0==null){u=new C.pl(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return B.b(C.anI(a0),$async$TA)
case 3:k=a8
if(k==null){u=new C.pl(!1,0,y.m)
w=1
break}j=C.fAl(k,a5)
if(j.b){u=new C.pl(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.pl(!1,0,y.u)
w=1
break}if(j.c){u=new C.pl(!1,0,y.j)
w=1
break}i=C.fQf(a2,a3,a5,k,a6)
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
return B.b(B.eU("ngmy_local_deposit_qr_v1_"+A.a.i(a0),null,!1,A.bD),$async$TA)
case 8:p=a8
if(p==null){u=new C.pl(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.q(p,"redeemedBy")
if(A.a.i(J.k(g==null?"":g)).length!==0){u=new C.pl(!1,0,"This deposit code was already used.")
w=1
break}o=C.fQf(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=A.a.i(a0)
f=x.N
e=x.z
n=B.dR(p,f,e)
J.aE(n,"redeemedBy",q)
J.aE(n,"redeemedAt",r)
w=9
return B.b(B.hs("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,A.cy,null),$async$TA)
case 9:n=J.q(p,"shortCode")
m=A.a.i(J.k(n==null?"":n))
w=J.aa(m)!==0?10:11
break
case 10:w=12
return B.b(B.hs("ngmy_local_deposit_code_v1_"+A.a.i(m).toUpperCase(),B.D(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,A.cy,null),$async$TA)
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
return B.i($async$TA,v)},
LS:function LS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
pl:function pl(d,e,f){this.a=d
this.b=e
this.c=f},
c5E:function c5E(d,e){this.a=d
this.b=e},
c5S(d,e){var w
B.fGe(d,e,!1)
B.qg(d.a,d.d,!0,!1)
w=A.a.i("")
if(w.length!==0)B.zB(!0,!1,d.d,w)},
a5p(d,e){if(d==null)return!1
return B.bw(d)===e.gcb()&&B.bB(d)===e.gca()&&B.bL(d)===e.gcp()},
hjR(d){var w=B.dn(d)*60+B.hn(d)
if(w<10)return 0
if(w>=30)return 20
return 15},
fQl(d){if(B.dn(d)>=12)return!1
if(B.mu(d)===6||B.mu(d)===7)return!1
return!0},
c5V(d){var w=d.c?d.bO():d
return w.cU(B.bY(B.bw(w),B.bB(w),B.bL(w),12,0,0,0,0))},
fAp(d,e){var w,v,u,t=d.gBc()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a5p(d.fx,e)&&d.fy>0.0001)return A.k.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bO()
if(!C.c5V(w))return 0
v=B.bY(e.gcb(),e.gca(),e.gcp(),12,0,0,0,0)
if(!e.cU(v))return t
if(!e.c6(w))return 0
u=A.o.ak(v.bv(w).a,1000)
if(u<=0)return t
return A.k.D(t*(A.o.D(A.o.ak(e.bv(w).a,1000),0,u)/u),0,t)},
fAo(d,e){var w,v,u,t,s,r,q,p=new B.N(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a5p(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bO():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!A.d.be(e,new C.c5R(s))&&C.c5V(t)){r=d.gBc()
v=r>0
if(v){q=new B.cW(s,d.a,r,A.fA,A.f8,"Clock-in daily earnings (local)",null,null,A.cg,p)
C.c5S(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a5p(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a5p(o,p)&&!C.c5V(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
c5R:function c5R(d){this.a=d},
hy3(d){var w,v,u=d.k4,t=u==null?null:A.a.i(u)
if(t!=null&&t.length!==0)return t
w=A.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=A.a.i(d.a)
if(A.a.q(v,"@"))return A.d.gI(v.split("@"))
return"Member"},
hOj(d,e,f,g,h,i){return B.hl(d,new C.anJ(f,e,i,g,h,null),!0,null,x.H)},
fUx(d){var w,v,u=d.c?d.bO():d,t=B.dn(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+B.bB(u)+"/"+B.bL(u)+"/"+B.bw(u)+" \xb7 "+w+":"+A.a.aT(A.o.u(B.hn(u)),2,"0")+" "+v},
h0s(d){var w=d.x
if(w===A.dn)return"Processing"
if(w===A.ke)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
hFS(d){var w=d.f,v=A.a.i(w==null?"":w),u=v.toLowerCase()
if(A.a.q(u,"clock-in daily earnings")||A.a.q(u,"clock-in earnings"))return"Clock-in completed"
if(A.a.q(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===A.fc)return"Deposit"
if(w===A.eB)return"Withdrawal"
return v.length!==0?v:w.b},
fYc(d){var w=d.d,v=w===A.fc||w===A.nJ||w===A.fA||w===A.jO,u=d.x
if(u===A.dn)return w===A.eB?-d.c:0
if(u!==A.cg)return 0
w=d.c
return v?w:-w},
hGq(d,e){var w,v,u,t,s,r,q=B.z(d,x.o)
A.d.aX(q,new C.fdR())
w=B.R(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,B.J)(q),++t,v=r){s=q[t]
r=v-C.fYc(s)
if(r<0)r=0
w.m(0,s.a,new B.bk2(v,r))}return w},
anJ:function anJ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAN:function aAN(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
e_y:function e_y(d){this.a=d},
e0e:function e0e(d){this.a=d},
e0f:function e0f(d){this.a=d},
e0g:function e0g(d){this.a=d},
e_X:function e_X(d,e){this.a=d
this.b=e},
e_Y:function e_Y(){},
e_Z:function e_Z(d){this.a=d},
e0_:function e0_(){},
e00:function e00(d){this.a=d},
e01:function e01(d,e,f){this.a=d
this.b=e
this.c=f},
e02:function e02(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e_S:function e_S(d,e){this.a=d
this.b=e},
e_z:function e_z(d,e,f){this.a=d
this.b=e
this.c=f},
e_T:function e_T(){},
e_U:function e_U(){},
e_V:function e_V(d){this.a=d},
e_W:function e_W(){},
e_D:function e_D(d,e){this.a=d
this.b=e},
e_E:function e_E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e_M:function e_M(){},
e_J:function e_J(d){this.a=d},
e_K:function e_K(d,e){this.a=d
this.b=e},
e_L:function e_L(d,e){this.a=d
this.b=e},
e_N:function e_N(d){this.a=d},
e_O:function e_O(d,e,f){this.a=d
this.b=e
this.c=f},
e_P:function e_P(d){this.a=d},
e_R:function e_R(d){this.a=d},
e_Q:function e_Q(d){this.a=d},
e_F:function e_F(d){this.a=d},
e_G:function e_G(d,e,f){this.a=d
this.b=e
this.c=f},
e06:function e06(){},
e07:function e07(){},
e0b:function e0b(d){this.a=d},
e04:function e04(d){this.a=d},
e0c:function e0c(d){this.a=d},
e03:function e03(d){this.a=d},
e0d:function e0d(d){this.a=d},
e08:function e08(d){this.a=d},
e09:function e09(d){this.a=d},
e0a:function e0a(d){this.a=d},
e05:function e05(d){this.a=d},
e_C:function e_C(d){this.a=d},
e_B:function e_B(d){this.a=d},
e_A:function e_A(d){this.a=d},
e_I:function e_I(d,e){this.a=d
this.b=e},
e_H:function e_H(d,e){this.a=d
this.b=e},
aya:function aya(d,e,f,g,h,i,j,k,l,m){var _=this
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
d9J:function d9J(){},
d9K:function d9K(){},
d9L:function d9L(d,e,f){this.a=d
this.b=e
this.c=f},
d9I:function d9I(d){this.a=d},
d9M:function d9M(d,e){this.a=d
this.b=e},
d9H:function d9H(d){this.a=d},
ay9:function ay9(d,e,f,g,h,i,j,k,l,m){var _=this
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
bdw:function bdw(d,e){var _=this
_.f=_.e=_.d=$
_.cO$=d
_.aY$=e
_.c=_.a=null},
d9C:function d9C(d){this.a=d},
d9D:function d9D(d){this.a=d},
d9E:function d9E(d){this.a=d},
d9F:function d9F(){},
d9G:function d9G(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
d9B:function d9B(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d9A:function d9A(d){this.a=d},
b7i:function b7i(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
b7h:function b7h(d,e,f){this.b=d
this.d=e
this.a=f},
b7g:function b7g(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
ayb:function ayb(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
ayc:function ayc(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
da7:function da7(){},
da8:function da8(){},
da9:function da9(){},
d9P:function d9P(d){this.a=d},
d9O:function d9O(d,e){this.a=d
this.b=e},
d9N:function d9N(d,e){this.a=d
this.b=e},
da4:function da4(d,e){this.a=d
this.b=e},
da6:function da6(d,e){this.a=d
this.b=e},
da5:function da5(d,e){this.a=d
this.b=e},
da3:function da3(){},
da2:function da2(d){this.a=d},
da1:function da1(){},
d9S:function d9S(d){this.a=d},
d9T:function d9T(){},
d9U:function d9U(d){this.a=d},
d9V:function d9V(d){this.a=d},
d9R:function d9R(){},
d9W:function d9W(d){this.a=d},
d9Q:function d9Q(d){this.a=d},
d9X:function d9X(d){this.a=d},
d9Y:function d9Y(){},
d9Z:function d9Z(d){this.a=d},
da_:function da_(d){this.a=d},
da0:function da0(d,e){this.a=d
this.b=e},
b6J:function b6J(d){this.a=d},
fdR:function fdR(){},
bqX:function bqX(d,e){this.b=d
this.a=e},
aHw:function aHw(){},
bsQ:function bsQ(){},
hCx(d,e,f,g,h,i,j,k){var w,v=A.a.i(j.toLowerCase())
A.d.bl(d,new C.f8w(v,g))
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
aLr(d){var w,v=J.a6(d),u=B.aQ(v.h(d,"matchesTotal")),t=u==null?null:A.k.M(u)
if(t==null)t=1
v=B.aQ(v.h(d,"matchesPlayed"))
w=v==null?null:A.k.M(v)
return A.o.D(t-(w==null?0:w),0,t)},
hN7(d,e){var w=B.S(e).k("a4<1>")
w=B.z(new B.a4(e,new C.fo7(A.a.i(d.toLowerCase())),w),w.k("F.E"))
return w},
aeF(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(C.aLr(u)<=0){t=J.cB(u)
t.m(u,"status","finished")
t.m(u,"seriesStatus","complete")}}},
hF6(d,e){var w,v,u,t=J.a6(d),s=t.h(d,"status")
if(!J.y(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.y(s==null?"":s,"complete"))return!1
if(C.aLr(d)<=0)return!1
w=A.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=A.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=A.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aLr(d)>0},
hF5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a6(d),h=B.aQ(i.h(d,"matchesTotal")),g=h==null?null:A.k.M(h)
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
hCw(d,e){var w
C.aeF(e)
w=B.S(e).k("a4<1>")
w=B.z(new B.a4(e,new C.f8v(A.a.i(d.toLowerCase())),w),w.k("F.E"))
return w},
tj(d,e){var w,v,u
for(w=J.aW(d);w.C();){v=w.gT(w)
u=J.q(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
hzj(d,e,f){var w,v,u,t="fromName",s=J.a6(f),r=s.h(f,"fromEmail"),q=A.a.i(J.k(r==null?"":r).toLowerCase())
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
fFY(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase()),r=J.a6(d),q=r.h(d,"fromEmail"),p=A.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=A.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.hzj(x.f.b(u)?B.Z(u,r,q):B.R(r,q),v,d)
if((t.length===0||A.a.q(t,"@"))&&f!=null){t=J.q(f,v)
if(t==null)t=""}if(t.length===0||A.a.q(t,"@"))return"Opponent"
return t},
by_(){var w=0,v=B.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$by_=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aw(),$async$by_)
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
return B.i($async$by_,v)},
bx6(d,e){var w=0,v=B.j(x.N),u,t,s,r
var $async$bx6=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return B.b(C.by_(),$async$bx6)
case 3:u=t.fFY(s,r,g)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bx6,v)},
Ja(d,e,f){var w=0,v=B.j(x.h),u,t,s,r,q,p
var $async$Ja=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=$.fZ4.h(0,q)
if(p!=null){t=new B.N(Date.now(),0,!1).bv(p)
t=t.a>B.dB(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.fZ4.m(0,q,new B.N(Date.now(),0,!1))
w=5
return B.b(B.OR(A.c2,q),$async$Ja)
case 5:case 4:s=$.fZ3.h(0,q)
if(s==null){u=C.tj(e,q)
w=1
break}r=C.tj(B.bxc(e,B.a([s],x._)),q)
if(r!=null)B.fIe(e,r)
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Ja,v)},
hNi(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=J.a6(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"status",f)
t.m(u,"respondedAt",new B.N(Date.now(),0,!1).aa())
return}}},
hw9(d,e){var w,v,u,t,s,r,q=J.a6(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
p=q.h(d,"fromEmail")
w=A.a.i(J.k(p==null?"":p).toLowerCase())
p=q.h(d,"toEmail")
v=A.a.i(J.k(p==null?"":p).toLowerCase())
q=q.h(d,"fromName")
u=J.k(q==null?w:q)
switch(o){case"tic_tac_go":q=x.N
return B.D(["ttt",B.bT(9,"",!1,q),"turnEmail",w,"playerXEmail",w,"playerXName",u,"playerOEmail",v,"playerOName",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],q,x.z)
case"connect_four_pro":t=J.e_(6,x.L)
for(q=x.S,s=0;s<6;++s)t[s]=B.bT(7,0,!1,q)
return B.D(["c4",t,"c4Turn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
case"checkers_deluxe":t=J.e_(8,x.L)
for(q=x.S,r=0;r<8;++r)t[r]=B.ih(8,new C.eZw(r),!0,q)
return B.D(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return B.D(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
hCv(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=J.a6(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"status","active")
t.m(u,"respondedAt",new B.N(Date.now(),0,!1).aa())
r=C.hw9(u,f)
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
hNg(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
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
fId(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=J.a6(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"sessionState",B.Z(f,x.N,x.z))
t.m(u,"sessionUpdatedAt",new B.N(Date.now(),0,!1).aa())
return}}},
fn_(d){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$fn_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aeF(d)
t=$.fFn
if(t==null)s=$.fFn=B.OR(A.c2,null).f4(new C.fn0())
else s=t
w=3
return B.b(s,$async$fn_)
case 3:r=f
if(r==null){u=B.bi(new B.I(d,new C.fn1(),B.S(d).k("I<1,@>")),!0,x.P)
w=1
break}q=B.bxc(d,r)
A.d.a8(d)
A.d.v(d,q)
u=q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fn_,v)},
aeG(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aeG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aeF(d)
t=B.S(d).k("I<1,a0<n,@>>")
t=B.z(new B.I(d,new C.fkW(),t),t.k("ai.E"))
w=3
return B.b(B.OR(t,null),$async$aeG)
case 3:s=f
if(s==null){u=!1
w=1
break}r=B.bxc(d,s)
A.d.a8(d)
A.d.v(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aeG,v)},
aMk(d,e,f){var w=0,v=B.j(x.y),u,t,s,r
var $async$aMk=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:C.fId(d,e,f)
t=C.tj(d,e)
if(t==null){u=!1
w=1
break}w=3
return B.b(B.OR(B.a([B.Z(t,x.N,x.z)],x._),e),$async$aMk)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.tj(s,e)
if(r!=null)B.fIe(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMk,v)},
hK1(d,e,f){var w
C.fId(d,e,f)
w=$.fFb.h(0,e)
if(w!=null)w.a9(0)
$.fFb.m(0,e,B.cV(A.ll,new C.fkX(e,d)))},
fA7(d,e){return new C.aWr(!0,d,"NGMY",A.a.i(e.toLowerCase()),null,!0)},
f8w:function f8w(d,e){this.a=d
this.b=e},
fo7:function fo7(d){this.a=d},
f8v:function f8v(d){this.a=d},
eZw:function eZw(d){this.a=d},
fn0:function fn0(){},
fn1:function fn1(){},
fkW:function fkW(){},
fkX:function fkX(d,e){this.a=d
this.b=e},
aWr:function aWr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
hNJ(d,e,f){return B.c0(A.K,null,new C.fp5(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
fp5:function fp5(d,e){this.a=d
this.b=e},
Yc:function Yc(d,e,f){this.c=d
this.d=e
this.a=f},
aAA:function aAA(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
dV2:function dV2(d){this.a=d},
dV5:function dV5(d){this.a=d},
dV6:function dV6(d){this.a=d},
dV4:function dV4(d){this.a=d},
dV7:function dV7(d){this.a=d},
dV8:function dV8(d,e){this.a=d
this.b=e},
dV3:function dV3(d,e){this.a=d
this.b=e},
hIz(d){var w,v,u,t=A.a.i(d)
if(t.length===0)return A.hX
w=t.toLowerCase()
v=B.ad("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return A.hX
v=Date.now()
u=C.hyE(w,new B.N(v,0,!1))
v=x.N
return B.a([new B.k9("calendar",B.D(["title",C.hyD(t,w),"start",u.aa(),"end",u.bL(36e8).aa(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
hyD(d,e){var w,v,u,t,s,r=B.ad("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cz(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return A.a.i(w==null?"":w)}u=B.ad("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cz(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.fZQ(A.a.i(t))}s=B.ad("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cz(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.fZQ(A.a.i(t))}if(A.a.q(e,"meeting"))return"Meeting"
if(A.a.q(e,"appointment"))return"Appointment"
return"NGMY Event"},
fZQ(d){var w
if(d.length===0)return d
w=A.a.fl(d,B.ad("\\s+",!0,!1,!1,!1))
return new B.I(w,new C.f7I(),B.S(w).k("I<1,n>")).aF(0," ")},
hyE(d,e){var w,v,u,t,s,r,q,p,o=B.bY(B.bw(e),B.bB(e),B.bL(e),0,0,0,0,0)
if(A.a.q(d,"tomorrow"))o=o.bL(864e8)
else if(!A.a.q(d,"today"))for(w=D.ayg.gdH(D.ayg),w=w.gaf(w);w.C();){v=w.gT(w)
u=v.a
if(B.dm(d,u,0)){t=C.hxJ(o,v.b)
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
q=0}return B.bY(B.bw(o),B.bB(o),B.bL(o),r,q,0,0,0)},
hxJ(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(B.mu(w)===e){u=!0
if(v<=0){t=d.bL(36e8)
s=w.a
if(s>=t.gbn())u=s===t.gbn()&&w.b<t.gcB()}}else u=!1
if(u)return w
w=w.bL(r)}return d.bL(r)},
f7I:function f7I(){},
hIA(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=A.a.i(d)
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
q=C.hv4(w,j)
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
hv4(d,e){var w,v,u,t,s,r,q=[B.ad("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),B.ad("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),B.ad("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
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
if(u)return C.hBT(t)}r=B.ad("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cz(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return A.a.i(u==null?"":u)}return null},
hBT(d){var w=A.a.fl(d,B.ad("\\s+",!0,!1,!1,!1))
return new B.I(w,new C.f7H(),B.S(w).k("I<1,n>")).aF(0," ")},
f7H:function f7H(){},
h2F(d){var w=new B.I(d,new C.fnh(),B.S(d).k("I<1,a0<n,@>>")).bZ(0,new C.fni())
w=B.z(w,w.$ti.k("F.E"))
return w},
fnh:function fnh(){},
fni:function fni(){},
hID(d,e){var w,v,u,t,s,r,q,p,o
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
hHP(d,e){var w
if(e)return d
w=J.dF(d,new C.fhf())
w=B.z(w,w.$ti.k("F.E"))
return w},
fhf:function fhf(){},
hJZ(d){switch(d){case"blackjack_vegas":return D.dlY
case"roulette_euro":return D.dlI
case"slots_jackpot":return D.dlP
case"poker_texas":return D.dlS
case"chess_royale":return D.dlJ
case"connect_four_pro":return D.dlK
case"domino_block":return D.dlM
case"plinko_prizes":return D.dlU
case"spin_wheel":return D.dlR
case"baccarat_punto":return D.dlL
case"craps_table":return D.dlT
case"casino_war":return D.dlN
case"bingo_live":return D.dlQ
case"solitaire_klondike":return D.dlX
case"backgammon_pro":return D.dlH
case"billiards_snooker":return D.dlV
case"profit_solve":return D.dlW
default:return D.dlO}},
fkN(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=B.m(8)
v=B.G(A.aM,A.r,1.5)
u=B.a([new B.a9(0,A.G,A.x.j(0.35),A.e6,6)],x.V)
return B.p(p,B.as(B.V(A.lW,A.c.j(0.5),p,p,p,23.400000000000002),p,p,p),A.h,p,p,new B.o(p,p,v,w,u,D.bGc,A.n),p,74,p,p,p,p,p,52)}t=A.o.D(d,1,13)
s=t===1||t>=10||A.o.J(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][A.o.J(t,4)]
q=s?A.bS:A.M
w=B.m(8)
v=B.G(A.aJ,A.r,1)
u=B.a([new B.a9(0,A.G,A.x.j(0.28),A.e6,6)],x.V)
return B.p(p,B.u(B.a([new B.B(D.bjo,B.d(D.ccR[t-1]+"\n"+r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,A.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),A.b6,B.as(B.d(r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),A.b6],x.p),A.F,p,A.e,A.j,0,A.p),A.h,p,p,new B.o(A.hD,p,v,w,u,p,A.n),p,74,p,p,p,p,p,52)},
hL2(d,e){var w,v=null,u=B.m(18),t=B.G(A.aM,A.r,3),s=B.a([new B.a9(0,A.G,A.aA.j(0.5),A.J,20)],x.V),r=B.S(e).k("I<1,ha>")
r=B.z(new B.I(e,new C.fmJ(),r),r.k("ai.E"))
w=x.p
return B.u(B.a([B.p(v,B.u(B.a([D.eES,A.ab,B.A(r,A.m,v,A.b5,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(v,v,t,u,s,D.bGw,A.n),v,v,v,v,I.acU,v,v,v),A.ay,B.dj(A.aiz,D.eFq,d,B.bk(A.aM,v,v,v,A.dq,v,Af.VA,v,v,v,v,v))],w),A.m,v,A.e,A.j,0,A.p)},
oz:function oz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bm1:function bm1(d,e){this.b=d
this.a=e},
fmJ:function fmJ(){},
hkr(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e_(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=B.bT(8,0,!1,w)
u=B.bT(9,"",!1,p)
t=x.t
s=B.a([],t)
r=B.a([],t)
t=B.a([0,0,0],t)
q=J.e_(6,o)
for(v=0;v<6;++v)q[v]=B.bT(7,0,!1,w)
return new C.ao3(B.R(p,x.z),n,u,s,r,t,q,new B.ao(A.aq,$.at()))},
hDb(d,e,f,g,h){var w=new C.f90(f,h)
switch(d){case"checkers_deluxe":return C.htR(h,g,e,w)
case"tic_tac_go":return C.hC1(h,g,e,w)
case"blackjack_vegas":return C.hte(h,g,e,new C.f8V(w))
case"roulette_euro":return C.hAv(h,g,e,new C.f8W(w))
case"slots_jackpot":return C.hBi(h,g,e,new C.f8X(w))
case"billiards_snooker":return C.hzl(h,g,e,new C.f8Y(w))
case"connect_four_pro":return C.hud(h,g,e,w)
case"profit_solve":return C.hzo(h,g,e,new C.f8Z(w))
default:return C.htO(d,h,g,e,new C.f9_(w))}},
htR(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.va,A.L,w,w),u=B.m(12),t=B.G(D.TK,A.r,8),s=B.a([new B.a9(0,A.G,A.x.j(0.4),A.J,16)],x.V)
return B.u(B.a([new B.B(A.fh,v,w),B.C(B.as(new B.fN(1,B.p(w,B.bu(B.m(6),B.ig(!0,w,w,A.z,D.egh,new C.eWU(d,e,f,g),64,w,A.dJ,A.ah,!1),A.ap),A.h,w,w,new B.o(w,w,t,u,s,w,A.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),A.m,w,A.e,A.j,0,A.p)},
hC1(d,e,f,g){var w=null
return B.u(B.a([new B.B(A.fh,B.d(d.c,w,w,w,w,w,w,D.va,A.L,w,w),w),B.C(B.as(new B.fN(1,B.cj(new C.f7R(d,e,f,g)),w),w,w,w),1)],x.p),A.m,w,A.e,A.j,0,A.p)},
hte(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.va,A.L,v,v),t=x.p,s=B.a([],t),r=d.CW,q=d.ch
if(r)A.d.v(s,new B.I(q,new C.eWl(),B.S(q).k("I<1,r>")))
else A.d.v(s,B.a([C.fkN(q[0],!1),A.bp,C.fkN(0,!0)],t))
s=B.A(s,A.m,v,A.b5,A.j,0,v,v)
r=B.d("Total: "+d.a0S(d.ay),v,v,v,v,v,v,D.eAq,v,v,v)
q=d.ay
w=B.S(q).k("I<1,r>")
q=B.z(new B.I(q,new C.eWm(),w),w.k("ai.E"))
q=B.c7(A.fB,q,A.bx,6,6)
return B.u(B.a([new B.B(A.fh,u,v),D.eL8,A.ar,s,A.ay,D.eRU,r,A.ar,q,A.b6,B.A(B.a([B.C(B.bJ(D.eFQ,d.CW?v:new C.eWn(d,e,f,g),v),1),A.aa,B.C(B.bJ(D.eU2,new C.eWo(d,e,f,g),v),1)],t),A.m,v,A.e,A.j,0,v,v)],t),A.m,v,A.e,A.j,0,A.p)},
hAv(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.va,A.L,w,w),u=d.cx,t=B.a([new B.a9(0,A.G,A.x.j(0.45),A.cv,16)],x.V)
t=B.a([new B.B(A.fh,v,w),B.p(w,B.b2(w,w,w,new C.bm1(u,w),A.as),A.h,w,w,new B.o(w,w,w,w,t,w,A.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new B.B(A.ku,B.d("Result: "+B.t(v),w,w,w,w,w,w,D.eoZ,w,w,w),w))
t.push(A.ab)
t.push(B.c7(A.fB,B.ih(6,new C.f55(d,e,f,g),!0,x.l),A.bx,6,6))
return B.u(t,A.m,w,A.e,A.j,0,A.p)},
hBi(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.va,A.L,w,w),u=d.db,t=B.S(u).k("I<1,n>")
u=B.z(new B.I(u,new C.f7_(),t),t.k("ai.E"))
return B.u(B.a([new B.B(A.fh,v,w),C.hL2(new C.f70(d,e,f,g),u)],x.p),A.m,w,A.e,A.j,0,A.p)},
hzl(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.va,A.L,w,w),u=B.m(20),t=B.G(A.hS,A.r,12),s=x.V,r=B.a([new B.a9(0,A.G,A.x.j(0.45),A.dm,18)],s),q=x.p
return B.u(B.a([new B.B(A.fh,v,w),B.C(B.p(w,new B.am(A.W,w,A.a9,A.q,B.a([B.an(w,B.p(w,w,A.h,w,w,D.aRj,w,18,w,w,w,w,w,18),w,w,24,w,24,w),B.an(28,B.p(w,w,A.h,w,w,A.a6Z,w,14,w,w,w,w,w,14),w,w,w,32,w,w),B.as(B.et(A.B,d.dx,B.p(w,w,A.h,w,w,new B.o(A.aM,w,w,B.m(2),B.a([new B.a9(0,A.G,A.x.j(0.3),A.J,4)],s),w,A.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),A.h,w,w,new B.o(w,w,t,u,r,D.dRD,A.n),w,w,w,A.eW,w,w,w,w),1),B.m8(A.bq,w,w,1,0,new C.f3Q(d,f),d.dy),B.bJ(D.eKg,new C.f3R(d,e,g,f),w)],q),A.m,w,A.e,A.j,0,A.p)},
hud(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.va,A.L,v,v),t=x.l,s=J.e_(7,t)
for(w=0;w<7;++w)s[w]=new B.bF(1,A.bn,B.aJ(v,B.u(B.ih(6,new C.eXk(d,w),!0,t),A.m,v,A.m4,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eXl(d,w,e,f,g),v,v,v,v,v,v,!1,A.af),v)
return B.u(B.a([new B.B(A.fh,u,v),B.C(B.as(new B.fN(1.1666666666666667,B.A(s,A.dD,v,A.e,A.j,0,v,v),v),v,v,v),1)],x.p),A.m,v,A.e,A.j,0,A.p)},
hzo(d,e,f,g){var w=null
return B.u(B.a([new B.B(A.fh,B.d(d.c,w,w,w,w,w,w,D.va,A.L,w,w),w),B.d(""+d.a+"/"+d.b,w,w,w,w,w,w,A.kc,w,w,w),B.d(d.fy,w,w,w,w,w,w,D.aK7,A.L,w,w),B.aK(w,A.U,!1,w,!0,A.q,w,B.aL(),d.id,w,w,w,w,w,2,D.bD9,A.z,!0,w,!0,w,!1,w,A.ae,w,w,w,w,w,A.dL,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.f42(d,e,g,f),w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,A.di,!0,A.a5,w,A.am,w,w,w,w),B.bJ(D.eIY,new C.f43(d,e,g,f),w)],x.p),A.m,w,A.e,A.j,0,A.p)},
htO(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gjx(),k=e.d
k=k==null?n:k.c
w=C.hJZ(d)
v=D.ay5.h(0,d)
if(v==null)v=d
m=B.d(m,n,n,n,n,n,n,A.mV,A.L,n,n)
u=B.m(22)
t=w.a
s=w.b
r=B.G(s.j(0.5),A.r,2)
q=B.a([new B.a9(0,A.G,w.c.j(0.35),A.eH,24)],x.V)
p=B.d(w.e,n,n,n,n,n,n,W.QN,n,n,n)
o=B.d(v,n,n,n,n,n,n,A.oq,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+B.t(k)+" at the table"
k=x.p
q=B.C(B.as(B.p(n,B.u(B.a([p,A.T,o,A.P,B.d(l,n,n,n,n,n,n,B.l(n,n,A.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),A.d1,B.V(w.f,s.j(0.85),n,n,n,48)],k),A.m,n,A.b5,A.j,0,A.p),A.h,n,n,new B.o(n,n,r,u,q,new B.a8(A.b4,A.bb,A.w,t,n,n),A.n),n,n,n,A.eW,A.a8,n,n,1/0),n,n,n),1)
return B.u(B.a([m,A.ab,q,A.P,new B.a3(1/0,n,B.bJ(D.eTe,new C.eWO(f,e,g,h),B.bk(s,n,n,n,A.d.gI(t).iZ()>0.4?A.x:A.c,n,A.ca,n,n,n,n,n)),n)],k),A.m,n,A.e,A.j,0,A.p)},
Dc:function Dc(d,e){this.a=d
this.b=e},
ao3:function ao3(d,e,f,g,h,i,j,k){var _=this
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
c7o:function c7o(){},
c7p:function c7p(){},
c7n:function c7n(){},
c7q:function c7q(){},
c7m:function c7m(){},
c7s:function c7s(){},
c7t:function c7t(){},
c7l:function c7l(d){this.a=d},
c7r:function c7r(){},
c7k:function c7k(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f90:function f90(d,e){this.a=d
this.b=e},
f8V:function f8V(d){this.a=d},
f8W:function f8W(d){this.a=d},
f8X:function f8X(d){this.a=d},
f8Y:function f8Y(d){this.a=d},
f8Z:function f8Z(d){this.a=d},
f9_:function f9_(d){this.a=d},
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
f7R:function f7R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7Q:function f7Q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f7P:function f7P(d,e,f,g,h){var _=this
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
f55:function f55(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f54:function f54(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f7_:function f7_(){},
f70:function f70(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3Q:function f3Q(d,e){this.a=d
this.b=e},
f3R:function f3R(d,e,f,g){var _=this
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
f42:function f42(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f43:function f43(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eWO:function eWO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hFU(d){var w,v=B.S(d).k("a4<1>")
v=B.oJ(new B.a4(d,new C.fcR(),v),120,v.k("F.E"))
w=B.cy(v,new C.fcS(),B.a2(v).k("F.E"),x.N).aF(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fcR:function fcR(){},
fcS:function fcS(){},
aeR(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
aoX:function aoX(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aBk:function aBk(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
epl:function epl(){},
aJ1:function aJ1(){},
his(){var w=$.GS
if(w<=0)return;--w
$.GS=w
if(w===0){w=$.fPG
if(w!=null)w.$0()}},
c2W(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
amL(d){var w=0,v=B.j(x.H),u,t
var $async$amL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=A.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.fA2.H(0,t)
w=4
return B.b(B.aw(),$async$amL)
case 4:w=3
return B.b(f.an("Bool","ngmy_game_free_play_used_"+A.a.i(t.toLowerCase()),!0),$async$amL)
case 3:case 1:return B.h(u,v)}})
return B.i($async$amL,v)},
amK(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$amK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(C.c2W(d)){u=!0
w=1
break}t=A.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.fA2.q(0,t)){u=!1
w=1
break}w=3
return B.b(B.aw(),$async$amK)
case 3:s=f
r=A.a.i(t.toLowerCase())
r=B.kq(J.q(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amK,v)},
Tc(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Tc=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aw(),$async$Tc)
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
return B.i($async$Tc,v)},
aWJ(d){return C.hiF(d)},
hiF(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$aWJ=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aw(),$async$aWJ)
case 6:s=f
w=7
return B.b(s.an("String","ngmy_helper_ai_usage_v1",A.Q.aj(d,null)),$async$aWJ)
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
return B.i($async$aWJ,v)},
aWH(d,e){var w,v,u,t,s=J.q(d,A.a.i(e.toLowerCase()))
if(!x.f.b(s))return new B.abx(0,new B.N(Date.now(),0,!1))
w=J.a6(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=B.bg(u==null?"":u)
if(t==null)t=new B.N(Date.now(),0,!1)
return new B.abx(typeof v=="number"?A.o.D(A.k.M(v),0,999999):0,t)},
aWI(d,e){if(A.o.ak(e.bv(d.b).a,36e8)>=24)return new B.abx(0,e)
return d},
c3r(d,e){var w=0,v=B.j(x.S),u,t,s
var $async$c3r=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return B.b(C.Tc(),$async$c3r)
case 3:t=g
s=Date.now()
u=A.o.D(e-C.aWI(C.aWH(t,d),new B.N(s,0,!1)).a,0,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c3r,v)},
c3s(d,e){var w=0,v=B.j(x.cJ),u,t,s,r
var $async$c3s=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return B.b(C.Tc(),$async$c3s)
case 3:t=g
s=Date.now()
r=C.aWI(C.aWH(t,d),new B.N(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bL(864e8)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c3s,v)},
hiG(d){var w,v,u,t=d.a,s=A.o.ak(t,1e6)
if(s<=0)return"0s"
w=A.o.ak(t,36e8)
v=A.o.ak(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+A.a.aT(A.o.u(v),2,"0")+"m "+A.a.aT(A.o.u(u),2,"0")+"s"
if(v>0)return""+v+"m "+A.a.aT(A.o.u(u),2,"0")+"s"
return""+u+"s"},
aWK(d){var w=0,v=B.j(x.y),u,t,s,r,q,p,o
var $async$aWK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return B.b(C.Tc(),$async$aWK)
case 3:t=p.aWI(o.aWH(f,d),new B.N(Date.now(),0,!1))
w=4
return B.b(B.aw(),$async$aWK)
case 4:s=f
r=A.a.i(d.toLowerCase())
q=t.b.a4().aa()
u=B.kq(J.q(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aWK,v)},
an5(d){var w=0,v=B.j(x.H),u,t,s,r
var $async$an5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return B.b(C.Tc(),$async$an5)
case 3:t=s.aWI(r.aWH(f,d),new B.N(Date.now(),0,!1))
w=5
return B.b(B.aw(),$async$an5)
case 5:w=4
return B.b(f.an("Bool","ngmy_helper_3left_"+A.a.i(d.toLowerCase())+"_"+t.b.a4().aa(),!0),$async$an5)
case 4:case 1:return B.h(u,v)}})
return B.i($async$an5,v)},
an6(d,e){var w=0,v=B.j(x.y),u,t,s,r,q
var $async$an6=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=A.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return B.b(C.Tc(),$async$an6)
case 3:s=g
r=Date.now()
q=C.aWI(C.aWH(s,d),new B.N(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aE(s,t,B.D(["count",r+1,"windowStart",q.b.a4().aa()],x.N,x.K))
w=4
return B.b(C.aWJ(s),$async$an6)
case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$an6,v)},
aet(d,e,a0){var w=0,v=B.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aet=B.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new B.f4("")
if(!d.d){p=!0
if(!C.h2x(a0))if(!C.h2w(a0)){p=B.ad("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.h2x(a0)?3:4
break
case 3:o=C.hJE(a0)
w=o!=null?5:6
break
case 5:w=7
return B.b(C.bX5(e,o),$async$aet)
case 7:n=a2
p=J.a6(n)
if(p.gcf(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.fOd(o)+":\n"
m.a+=l
for(p=p.gaf(n);p.C();){m=p.gT(p)
l=h
k="- "+m.gTs()+"\n"
l.a+=k
m=m.f
if(m!=null&&A.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=B.ad("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return B.b(B.Q8("text/plain"),$async$aet)
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
case 13:case 9:w=C.h2w(a0)?15:16
break
case 15:p=h
f=C
w=17
return B.b(C.a53(e),$async$aet)
case 17:m=f.fPN(a2)+"\n"
p.a+=m
case 16:p=B.ad("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return B.b(C.Sg(e),$async$aet)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cs(i)){p=h
m=C.fOe(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=A.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aet,v)},
hjZ(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.ad("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.ad("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
c6_(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$c6_=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.fQq(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.eU("ngmy_local_growth_income_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bD),$async$c6_)
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
return B.i($async$c6_,v)},
anL(d){var w=0,v=B.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$anL=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=A.a.i(d)
if(J.aa(k)===0){u=null
w=1
break}t=4
w=7
return B.b(B.eU("ngmy_local_growth_income_stash_v1_"+A.a.i(k),null,!1,A.bD),$async$anL)
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
u=new B.aCI(m,p,n)
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
return B.i($async$anL,v)},
aXN(d){var w=0,v=B.j(x.bY),u,t,s,r,q
var $async$aXN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=C.hjZ(q)?3:4
break
case 3:w=5
return B.b(C.c6_(q),$async$aXN)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.anL(t)
w=1
break
case 4:if(A.a.a_(q,"NGMYLOCALSYNC1|")){u=C.anL(A.a.i(A.a.aU(q,15)))
w=1
break}w=A.a.a_(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return B.b(C.anL(A.a.i(A.a.aU(q,15))),$async$aXN)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new B.aCI(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aXN,v)},
fQE(d){var w=d.bI
if(w>=0)return w
return 1},
aeE(d,e,f){var w=0,v=B.j(x.H),u,t
var $async$aeE=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return B.b(B.aMv(d,e),$async$aeE)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return B.b(B.F9(d,null,null,!1,!0,""),$async$aeE)
case 5:w=4
return B.b(t.$1(h),$async$aeE)
case 4:case 1:return B.h(u,v)}})
return B.i($async$aeE,v)},
hIy(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=A.a.i(a2)
if(a1.length===0)return A.hX
w=a1.toLowerCase()
v=B.ad("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=B.ad("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cz(w)
if(!u&&t==null)return A.hX
s=new B.N(Date.now(),0,!1)
r=B.da()
q=B.da()
p=C.hyC(w)
if(p!=null){v=p.a
r.b=s.bL(v)
q.b=C.fYI(a1,w)
if(J.y(q.b7(),"Wake up")&&A.o.ak(v,e)<=180)q.b="Reminder \u2014 "+A.o.ak(v,e)+" min"}else{if(t!=null){v=B.ad("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=A.a.e0(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.fYJ(v[2],v[4],v[3])
o=v[3]
m=B.c3(o==null?"":o,null)
if(m==null)m=0
l=B.bY(B.bw(s),B.bB(s),B.bL(s),0,0,0,0,0)
if(A.a.q(w,d))l=l.bL(a0)
r.b=B.bY(B.bw(l),B.bB(l),B.bL(l),n,m,0,0,0).bL(-36e8)
if(r.b7().cU(s.bL(e)))r.b=J.ci(r.b7(),A.oY)
v=C.hCu(v[1])
k=A.o.J(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+A.a.aT(A.o.u(m),2,"0")+" "+j)}else{l=B.bY(B.bw(s),B.bB(s),B.bL(s),0,0,0,0,0)
v=A.a.q(w,d)
if(v)l=l.bL(a0)
i=B.ad("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cz(w)
if(i!=null){o=i.b
h=C.fYJ(o[1],o[3],o[2])
o=o[2]
g=B.c3(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=B.bY(B.bw(l),B.bB(l),B.bL(l),h,g,0,0,0)
r.b=f.cU(s.bL(3e7))&&!v?f.bL(a0):f
q.b=C.fYI(a1,w)}}v=x.N
return B.a([new B.k9("alarm",B.D(["title",q.b7(),"start",r.b7().aa(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
hyC(d){var w,v,u,t,s,r,q=[B.ad("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.ad("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.ad("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),B.ad("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
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
hCu(d){var w=d==null?"work":d,v=w.toLowerCase()
if(A.a.q(v,"meeting")||A.a.q(v,"appointment"))return"Meeting"
if(A.a.q(v,"class")||A.a.q(v,"school"))return"Class"
if(A.a.q(v,"shift"))return"Shift"
return"Work"},
fYJ(d,e,f){var w,v=B.c3(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return A.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
fYI(d,e){var w,v,u,t
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
hkk(d){var w,v,u,t,s=J.a6(d)
if(s.gah(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.jY(d,80),v=w.$ti,w=new B.bR(w,w.gG(0),v.k("bR<ai.E>")),v=v.k("ai.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gG(d)>80?u+("\u2026 and "+(s.gG(d)-80)+" more\n"):u
return A.a.i(s.charCodeAt(0)==0?s:s)}},D,H,Ab,I,G,Ac,V,F,W,Ad,Ae,X,Af,Ag,Ah,Ai,Y,Z,K,Aj
J=c[1]
B=c[0]
A=c[2]
L=c[30]
Q=c[155]
E=c[147]
M=c[157]
A_=c[122]
N=c[92]
A0=c[153]
R=c[33]
O=c[70]
A1=c[77]
S=c[76]
A2=c[78]
P=c[123]
A3=c[158]
T=c[149]
A4=c[161]
A5=c[159]
A6=c[160]
A7=c[156]
A8=c[152]
A9=c[62]
U=c[139]
Aa=c[140]
C=a.updateHolder(c[5],C)
D=c[146]
H=c[25]
Ab=c[61]
I=c[151]
G=c[91]
Ac=c[162]
V=c[26]
F=c[150]
W=c[104]
Ad=c[148]
Ae=c[165]
X=c[154]
Af=c[166]
Ag=c[114]
Ah=c[164]
Ai=c[98]
Y=c[69]
Z=c[54]
K=c[52]
Aj=c[163]
C.bn8.prototype={
nV(d,e){return this.a.$2(d,e)}}
C.DO.prototype={
S(){return new C.aEL(this.$ti.k("aEL<DO.T,DO.S>"))}}
C.aEL.prototype={
Z(){var w,v,u=this
u.a0()
w=u.a
v=w.f
w=new B.ht(A.Dh,v,null,null,w.$ti.k("ht<1>"))
u.e=w
u.TZ()},
bo(d){var w,v=this
v.bA(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aJ6()
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.ht(A.Dh,w.b,w.c,w.d,w.$ti)}v.TZ()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&B.c()
return v.mw(d,w)},
p(){this.aJ6()
this.a2()},
TZ(){var w,v=this
v.d=v.a.c.kW(new C.eKV(v),new C.eKW(v),new C.eKX(v))
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.ht(A.Ue,w.b,w.c,w.d,w.$ti)},
aJ6(){var w=this.d
if(w!=null){w.a9(0)
this.d=null}}}
C.asB.prototype={
mw(d,e){return this.e.$2(d,e)}}
C.ain.prototype={
S(){return C.hqO()},
bm(){return this.r.$0()}}
C.o2.prototype={}
C.ax6.prototype={
a7M(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7M=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=!C.c2W(t.a.c)
if(r){w=3
break}else e=r
w=4
break
case 3:w=5
return B.b(C.amK(t.a.c),$async$a7M)
case 5:e=!e
case 4:s=e
if(t.c==null){w=1
break}t.n(new C.d1Z(t,s))
case 1:return B.h(u,v)}})
return B.i($async$a7M,v)},
a9I(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a9I=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.by_(),$async$a9I)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d29(t,s))
case 1:return B.h(u,v)}})
return B.i($async$a9I,v)},
Z(){var w,v,u=this
u.bnY()
$.rI=$.rI+1
w=u.a
$.by3=w.c.a
w=w.d.b1
v=B.S(w).k("I<1,a0<n,@>>")
w=B.z(new B.I(w,new C.d2r(),v),v.k("ai.E"))
u.f=w
u.a9I()
u.I7()
u.a7M()
u.e=B.dD(A.ng,new C.d2s(u))},
I7(){var w=0,v=B.j(x.H),u,t=this,s
var $async$I7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:C.aeF(t.a.d.b1)
w=3
return B.b(C.fn_(t.a.d.b1),$async$I7)
case 3:s=e
if(t.c==null){w=1
break}C.aeF(t.a.d.b1)
if(s!=null)t.n(new C.d2h(t,s))
else t.n(new C.d2i(t))
case 1:return B.h(u,v)}})
return B.i($async$I7,v)},
p(){C.aWt()
var w=this.e
if(w!=null)w.a9(0)
this.bnX()},
aet(d,e,f){return this.cjc(d,e,f)},
cjc(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$aet=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(e.toLowerCase())
p=J.q(t.r,q)
o=t.a
n=o.d.b1
o=o.c
s=d.b
C.hCx(n,o.a,o.c,d.a,s,f,e,p)
t.a.bm()
w=3
return B.b(C.aeG(t.a.d.b1),$async$aet)
case 3:if(t.c==null){w=1
break}t.n(new C.d2k(t))
r=f===1?"1 game":""+f+" games"
t.c.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aet,v)},
H2(d,e){return this.c4Y(d,e)},
bUL(d){return this.H2(d,null)},
c4Y(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$H2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&A.a.i(e).length!==0){s=C.tj(t.a.d.b1,A.a.i(e))
if(s!=null&&C.aLr(s)<=0){t.c.F(x.q).f.P(D.aI1)
w=1
break}}w=5
return B.b(C.amK(t.a.c),$async$H2)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return B.b(C.fA3(r,C.fhq(q.c),p),$async$H2)
case 6:w=1
break
case 4:o=new C.d2c(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
B.hl(r,new C.azV(p,q.d,q.f,q.r,new C.d2d(o),q.w,C.fhq(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
B.hl(q,new C.aim(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.d2e(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$H2,v)},
bSj(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.aeF(i.a.d.b1)
C.aeF(i.f)
w=C.hN7(i.a.c.a,i.f)
v=C.hCw(i.a.c.a,i.f)
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
return B.p(h,B.u(B.a([D.eO6,B.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,A.ou,h,h,h),A.P,B.A(B.a([B.C(B.dU(A1.Rc,new C.d24(i,t),h),1),A.aa,B.C(B.bJ(D.eWm,new C.d25(i,t),h),1)],n),A.m,h,A.e,A.j,0,h,h)],n),A.F,h,A.e,A.j,0,A.p),A.h,h,h,new B.o(A.aA,h,s,u,h,h,A.n),h,h,h,A.dZ,A.bk,h,h,1/0)}m=A.d.gI(v)
l=A.d.dM(i.y,new C.d26(m),new C.d27(i))
k=C.fFY(m,i.a.c.a,i.r)
j=C.aLr(m)
u=B.m(14)
s=B.G(A.be,A.r,1)
r=j===1?"":"s"
return B.p(h,B.u(B.a([D.eGU,B.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,A.ou,h,h,h),A.au,B.d(C.hF5(m,i.a.c.a),h,h,h,h,h,h,A.a48,h,h,h),A.P,B.bJ(D.eNq,new C.d28(i,l,m),h)],x.p),A.F,h,A.e,A.j,0,A.p),A.h,h,h,new B.o(A.bh,h,s,u,h,h,A.n),h,h,h,A.dZ,A.bk,h,h,1/0)},
bJa(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.ect.q(0,d.a),l=B.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=B.a2B(w[v])
t=A.k.D(u.d*0.58,0.12,0.3)
l.push(new B.wi(u.a,u.b,A.k.D(u.c*0.92,0,0.9),t).iD())}s=A.d.gI(w)
w=B.m(16)
t=B.m(18)
r=B.G(B.W(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.r,1)
q=x.V
p=B.a([new B.a9(0,A.G,B.W(89,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.j2,12)],q)
o=x.p
o=B.a([new B.a3(100,n,B.as(B.V(d.e,A.c,n,n,n,64),n,n,n),n),B.C(new B.B(A.kt,B.u(B.a([B.A(B.a([B.C(B.d(d.b,n,n,n,n,n,n,A.l7,n,n,n),1)],o),A.m,n,A.e,A.j,0,n,n),A.au,B.d(d.c,n,2,A.Z,n,n,n,A.nF,n,n,n)],o),A.F,n,A.b5,A.j,0,A.p),n),1)],o)
if(m)o.push(B.aF(n,n,n,n,D.bAO,n,n,n,new C.d20(this,d),n,n,n,n,"Invite player",n))
o.push(new B.B(A.JF,B.p(n,D.bz_,A.h,n,n,new B.o(B.W(71,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),n,B.G(B.W(A.k.U(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.r,1.6),n,B.a([new B.a9(0,A.G,B.W(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.J,10)],q),n,A.a6),n,44,n,n,n,n,n,44),n))
return B.aH(!1,w,!0,B.p(n,B.A(o,A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(n,n,r,t,p,new B.a8(A.ax,A.aD,A.w,l,n,n),A.n),n,92,n,A.dZ,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.d21(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.K(d).ax.a===A.H,l=B.K(d).ax.a===A.H?A.iU:A.oO,k=m?A.hn.j(0.94):A.c.j(0.94),j=m?A.c:A.M,i=m?A.hn:A.c,h=m?A.c.j(0.08):A.aJ,g=m?A.c:A.M,f=m?A.bj:A.bN
if(!o.x)return C.aLZ(n,l,B.as(B.mi(n,m?A.c:A.bq,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fhq(o.a.c)
return new C.LF(o.a.w,w,!0,o.gaNQ(),n)}w=B.aG(d,A.e1,x.w).w
v=B.m(12)
u=B.G(h,A.r,1)
t=x.V
s=B.a([],t)
if(!m)s.push(new B.a9(0,A.G,A.x.j(0.04),A.cD,12))
r=x.p
s=B.a([B.p(n,B.A(B.a([B.C(B.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,B.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,A.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new B.tL(new C.d2o(o,f,g),n,$.aNj(),n)],r),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(i,n,u,v,s,n,A.n),n,n,n,n,A.V3,n,n,1/0),A.T,o.bSj()],r)
v=o.y
A.d.v(s,new B.I(v,o.gbJ9(),B.S(v).k("I<1,r>")))
w=B.cf(B.u(s,A.m,n,A.e,A.j,0,A.p),A.q,n,A.z,n,new B.L(14,w.r.b+78,14,24),n,n,A.ah)
s=B.m(35)
v=B.a([new B.a9(0,A.G,A.x.j(m?0.28:0.08),A.j2,15)],t)
u=B.G(m?A.c.j(0.1):A.aJ,A.r,1)
t=B.aF(n,n,n,n,B.V(A.es,j,n,n,n,18),n,n,n,o.gaNQ(),n,n,n,n,n,n)
q=B.C(B.as(B.d("GAME CENTER",n,n,n,n,n,n,B.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,A.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=B.m(20)
return B.nU(!0,C.aLZ(n,l,new B.am(A.W,n,A.a9,A.h,B.a([w,B.an(n,B.br(!1,new B.B(A.JQ,B.p(n,B.A(B.a([t,q,new B.B(A.kt,B.p(n,B.A(B.a([D.bwk,A.ez,C.anA(new C.d2p(o),A.mV,o.a.c.a)],r),A.m,n,A.e,A.R,0,n,n),A.h,n,n,new B.o(A.cL,n,n,p,n,n,A.n),n,n,n,n,A.h1,n,n,n),n)],r),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(k,n,u,s,v,n,A.n),n,60,n,n,A.mB,n,n,n),n),!0,!1,A.ag,!0,!0),n,n,0,0,0,n)],r),n)),new C.d2q(o),x.K)},
aNR(){var w,v
this.a.bm()
w=this.d
v=w>0?B.D(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
B.iC(w,v)}}
C.azV.prototype={
S(){return new C.bfn()},
hu(d){return this.e.$1(d)},
bm(){return this.f.$0()},
aCP(){return this.r.$0()}}
C.bfn.prototype={
Z(){this.boX()
this.d=B.SD(this.a.d.bc)
$.rI=$.rI+1},
p(){C.aWt()
this.boW()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&B.c()
return new C.ame(v,new C.dFh(w),u,new C.dFi(w),new C.dFj(w,d),new C.dFk(w),null)}}
C.aim.prototype={
S(){return new C.ax5(new B.ao(A.aq,$.at()))},
hu(d){return this.x.$1(d)},
bm(){return this.y.$0()},
aCP(){return this.z.$0()}}
C.ax5.prototype={
Z(){this.bnW()
this.a.toString
$.rI=$.rI+1},
p(){C.aWt()
var w=this.d
w.R$=$.at()
w.O$=0
this.bnV()},
a_H(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a_H=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.LL()
w=5
return B.b(C.amK(t.a.c),$async$a_H)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return B.b(C.fA3(s,C.fhq(r.c),q),$async$a_H)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&A.a.i(r).length!==0){p=C.tj(s.d.b1,A.a.i(r))
if(p!=null&&C.aLr(p)<=0){t.c.F(x.q).f.P(D.aI1)
w=1
break}}o=B.d5(A.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.F(x.q).f.P(D.ejh)
w=1
break}m=B.F4(t.a.c.a,new C.d1T(t))
if(m+0.001<n){t.c.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d("Not enough balance for this bet \u2014 you have $"+B.dt(m)+", the bet is $"+B.dt(n)+".",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aCP()
s=t.a
s.toString
r=A.o.u(1000*Date.now())
q=t.a
s.hu(new B.cW(r,q.c.a,n,A.jt,A.f8,"Game bet: "+q.f,null,null,A.cg,new B.N(Date.now(),0,!1)))
t.a.bm()
if(D.ecm.q(0,t.a.e)){s=t.c
s.toString
r=t.a
B.hl(s,new C.alh(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
B.hl(s,new C.aio(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$a_H,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=B.aF(o,o,o,o,A.EJ,o,o,o,new C.d1W(d),o,o,o,o,o,o),k=p.a,j=B.d(k.f,o,o,o,o,o,o,A.cq,o,o,o),i=B.m(12),h=x.p
j=B.eA(B.a([B.p(o,B.as(C.anA(new C.d1X(p),A.kc,k.c.a),o,o,o),A.h,o,o,new B.o(A.cL,o,o,i,o,o,A.n),o,o,o,D.bdX,A.ig,o,o,o)],h),o,o,!0,!0,D.Uc,o,1,o,o,o,!1,o,!1,A.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=B.m(16)
i=B.G(A.be,A.r,1)
k=B.V(D.bnf,D.b9f,o,o,o,28)
w=p.a
v=B.d(w.f,o,o,o,o,o,o,A.oq,o,o,o)
w=B.d(w.r,o,o,o,o,o,o,A.ou,o,o,o)
u=B.W(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.m(12)
s=x.a3
s=B.z(new B.I(B.a([2,5,10,25],x.t),new C.d1Y(p),s),s.k("ai.E"))
s=B.A(s,A.m,o,A.e,A.j,0,o,o)
r=B.W(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.p(o,B.u(B.a([D.eXO,A.T,s,A.P,B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.d,o,o,o,o,o,2,B.bl(o,new B.b1(4,B.m(10),A.V),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l8,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ae,o,o,o,o,o,A.dL,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.di,!0,A.a5,o,A.am,o,o,o,o)],h),A.m,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(u,o,o,t,o,o,A.n),o,o,o,o,A.bT,o,o,1/0)
u=B.m(12)
r=B.G(B.W(102,A.a0l.l()>>>16&255,A.a0l.l()>>>8&255,A.a0l.l()&255),A.r,1)
s=B.W(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
q=B.m(10)
q=B.p(o,B.u(B.a([D.eGh,B.d("+ $"+A.k.ab(n*0.46,2),o,o,o,o,o,o,D.exh,o,o,o),B.d("(46% return on $"+A.k.ab(p.e,2)+" bet)",o,o,o,o,o,o,A.nF,o,o,o)],h),A.m,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(s,o,o,q,o,o,A.n),o,o,o,o,A.ch,o,o,1/0)
s=B.W(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
n=B.m(10)
u=B.p(o,B.u(B.a([D.eOm,A.P,q,A.P,B.p(o,B.u(B.a([D.eBN,B.d("$"+A.k.ab(m,2),o,o,o,o,o,o,D.ent,o,o,o),B.d("8 pairs \xd7 $"+A.k.ab(m,2)+" each",o,o,o,o,o,o,A.nF,o,o,o)],h),A.m,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(s,o,o,n,o,o,A.n),o,o,o,o,A.ch,o,o,1/0)],h),A.m,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(D.b63,o,r,u,o,o,A.n),o,o,o,o,A.bT,o,o,1/0)
r=B.ff(o,o,A.bq,o,o,o,o,o,o,A.c,o,A.fV,o,o,o,o,o,o,o,o)
return C.aLZ(j,D.Uc,B.cf(B.p(o,B.u(B.a([k,A.au,v,A.bw,w,A.T,t,A.P,u,A.T,new B.a3(1/0,o,B.i3(B.d("Start Game ($"+A.k.ab(p.e,2)+")",o,o,o,o,o,o,A.cc,o,o,o),p.gcmY(),r),o)],h),A.m,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(o,o,i,l,o,D.bFC,A.n),o,o,o,o,A.eE,o,o,1/0),A.q,o,A.z,o,E.acv,o,o,A.ah))}}
C.aio.prototype={
S(){var w=x.s,v=x.t,u=x.S
return new C.ax7(A.cA,new B.ao(A.aq,$.at()),B.a([],w),B.a([],x.d4),B.a([],w),B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.aZ(u),B.aZ(u),B.a([],v),B.a([],v),B.a([],v))},
hu(d){return this.y.$1(d)},
bm(){return this.z.$0()}}
C.ax7.prototype={
ghq(){var w=this.a.Q
return w!=null&&A.a.i(w).length!==0},
qm(d){return this.bHv(d)},
bHv(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$qm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.z3()
r=t.MP()
w=s<=0?3:4
break
case 3:w=5
return B.b(t.a8a(d),$async$qm)
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
Iy(d,e,f,g){return this.ckO(d,e,f,g)},
ckO(d,e,f,g){var w=0,v=B.j(x.H),u,t=this,s
var $async$Iy=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(C.bz4(s,C.byJ(),C.fHP(),d,e,f,g),$async$Iy)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Iy,v)},
z3(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.aXS(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&B.c()
return u+C.aeR(t,s.e.a.a)
case"memory":return s.ghq()&&D.ma.q(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.aun()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bc
case"color":return s.b1
case"reflex":return s.Y
default:u=s.aW
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
aun(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
MP(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&B.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.fG0()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.aW
if(w!=null)return w.b
return 1}},
bo(d){var w,v,u=this
u.bA(d)
if(u.f||u.ci)return
w=u.a
v=C.fht(w.e,w.d.y2)
if(v!==C.fht(d.e,d.d.y2)&&u.c!=null)u.n(new C.d3L(u,v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.bo_()
w=i.a
w.toString
$.rI=$.rI+1
i.Q=C.fht(w.e,w.d.y2)
i.b_F()
i.a9r()
if(i.ghq()){i.ci=!0
i.cT="Connecting to match\u2026"
i.cd="Both players enter the room together \u2014 play starts at the same time."
i.Na()
i.a95()
i.bg=B.dD(A.fQ,new C.d3O(i))}if(A.d.q(D.NJ,i.a.e)){w=i.ghq()
v=i.a
if(w){w=v.d.b1
v=v.Q
v.toString
u=C.tj(w,v)
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
k=A.a.i(J.k(t==null?"":t))}w=new C.aWr(!1,w,k.length===0||A.a.q(k,"@")?C.fFY(u,v,null):k,p,l,s)}else{w=w.c
w=C.fA7(w.c,w.a)}w=i.bE=w}else{w=v.c
w=i.bE=C.fA7(w.c,w.a)}v=C.hkr()
v.bi4(i.a.e,i.d,w)
i.aW=v
i.r=v.c
if(i.ghq()){w=i.a
v=w.d.b1
w=w.Q
w.toString
u=C.tj(v,w)
m=u==null?null:J.q(u,h)
if(x.f.b(m)){w=i.aW
w.toString
w.b4I(i.a.e,B.Z(m,x.N,x.z),i.a.c.a)
w=i.aW
i.r=w.c
if(w.e){if(w.r)j=D.P4
else j=w.f===!0?D.pl:D.FZ
i.z5(j)}}}i.aZ=B.dD(A.nj,new C.d3P(i))
if(i.ghq())i.b6=B.dD(A.o0,new C.d3Q(i))}if(i.ghq()&&!A.d.q(D.NJ,i.a.e))i.b6=B.dD(A.o0,new C.d3R(i))
i.as=B.dD(A.h_,new C.d3S(i))},
Na(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Na=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghq()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.tj(s.d.b1,q)
w=p!=null?3:4
break
case 3:w=5
return B.b(C.bx6(p,t.a.c.a),$async$Na)
case 5:o=e
if(t.c!=null)t.n(new C.d30(t,o))
w=1
break
case 4:w=6
return B.b(C.Ja(q,t.a.d.b1,!1),$async$Na)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return B.b(C.bx6(n,t.a.c.a),$async$Na)
case 7:o=e
if(t.c!=null)t.n(new C.d31(t,o))
case 1:return B.h(u,v)}})
return B.i($async$Na,v)},
afy(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$afy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghq()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.Ja(r,s.d.b1,!1),$async$afy)
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
t.aIV(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=A.k.M(j)
else{h=j==null?null:J.k(j)
i=B.c3(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)A.d.bl(t.fy,new C.d3u(t))
if(i!=null&&t.fr.length!==0){s=B.z(t.dy,x.S)
A.d.v(s,t.dy)
r=new B.f6()
r.dY(i)
A.d.fN(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.n(new C.d3v())}case 1:return B.h(u,v)}})
return B.i($async$afy,v)},
a95(){var w=0,v=B.j(x.H),u=this
var $async$a95=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.Z2(!0),$async$a95)
case 2:return B.h(null,v)}})
return B.i($async$a95,v)},
Z2(d){return this.caC(d)},
caB(){return this.Z2(!1)},
caC(b3){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$Z2=B.e(function(b4,b5){if(b4===1)return B.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghq()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
if(q.length===0){w=1
break}p=A.a.i(s.c.a.toLowerCase())
w=3
return B.b(C.Ja(q,s.d.b1,b3),$async$Z2)
case 3:o=b5
if(o==null)o=C.tj(t.a.d.b1,q)
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
if(a6!=null&&a7!=null){a8=(a6.c6(a7)?a6:a7).bL(5e5)
if(!new B.N(Date.now(),0,!1).cU(a8)){a4=b2.a=a8.bL(4e6)
j.m(0,"startAt",a4.a4().aa())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.m(0,"memorySeed",A.o.J(1000*Date.now(),2147483647))
j.m(0,"memoryMatched",B.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.m(0,"patternSeed",A.o.J(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.hK1(t.a.d.b1,q,j)
t.a.bm()}if(t.c==null){w=1
break}b0=t.by
if(b0==null)b0="your opponent"
if(!a5){t.n(new C.d3g(b2,t,b0))
w=1
break}if(s==null){t.n(new C.d3h(t))
w=1
break}b1=new B.N(Date.now(),0,!1)
if(b1.cU(s)){s=s.bv(b1).a
r=A.o.ak(s,1e6)
t.n(new C.d3i(b2,t,r+(A.o.J(A.o.ak(s,1000),1000)>0?1:0)))
w=1
break}if(t.ci){t.n(new C.d3j(b2,t))
b2=t.a.e
if(b2==="pattern")t.a66()
else if(b2==="memory"){t.b_E()
if(t.c!=null)t.n(new C.d3k())}}b2=t.bg
if(b2!=null)b2.a9(0)
t.bg=null
case 1:return B.h(u,v)}})
return B.i($async$Z2,v)},
aJO(d){var w,v,u,t,s=this
if(d!=null){w=new B.f6()
w.dY(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e_(v,x.S)
for(t=0;t<v;++t)u[t]=w.aG(9)
s.ry=u
s.x1=0
s.to=-1},
aJN(){return this.aJO(null)},
a66(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a66=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ghq()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.c89()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return B.b(C.Ja(q,s.d.b1,!1),$async$a66)
case 5:r=t.aWF(e)
case 4:if(t.c==null){w=1
break}t.aJO(r)
t.n(new C.d2t(t))
t.Cr()
case 1:return B.h(u,v)}})
return B.i($async$a66,v)},
aWF(d){var w,v,u,t=null
if(d==null)return t
w=J.q(d,"sessionState")
if(!x.f.b(w))return t
v=J.q(w,"patternSeed")
if(typeof v=="number")return A.k.M(v)
u=v==null?t:J.k(v)
return B.c3(u==null?"":u,t)},
c89(){var w=this.a,v=w.Q
if(v==null)return null
return this.aWF(C.tj(w.d.b1,v))},
a9r(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9r=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aw(),$async$a9r)
case 3:r=e
q=t.a
p=q.e
q=A.a.i(q.c.a.toLowerCase())
s=B.eX(J.q(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.n(new C.d3_(t,s))
case 1:return B.h(u,v)}})
return B.i($async$a9r,v)},
om(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n
var $async$om=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.aw(),$async$om)
case 2:p=e
o=u.a
n=o.e
o=A.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bzw().length
else s=n==="typing"?50:105
if(n==="typing")r=A.o.J(u.at+5,s)
else{q=u.at
r=t?A.o.J(q+6,s):A.o.J(q+1,s)}w=3
return B.b(p.an("Int","ngmy_game_"+n+"_"+o,r),$async$om)
case 3:u.at=r
return B.h(null,v)}})
return B.i($async$om,v)},
a_W(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a_W=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghq()||t.aW==null||t.f||t.aM){w=1
break}if(t.ci){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.Ja(r,s.d.b1,!1),$async$a_W)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.b1
s=s.Q
s.toString
p=C.tj(r,s)
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
if(m!=null&&l!=null&&!m.c6(l)){w=1
break}s=t.aW
s.toString
r=t.a
s.b4I(r.e,n,r.c.a)
r=t.aW
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.P4
else k=r.f===!0?D.pl:D.FZ
w=7
return B.b(t.z5(k),$async$a_W)
case 7:w=5
break
case 6:if(t.c!=null)t.n(new C.d3w())
case 5:case 1:return B.h(u,v)}})
return B.i($async$a_W,v)},
adu(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$adu=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghq()||q.aW==null||q.a.Q==null||q.aM){w=1
break}q.aM=!0
t=3
o=q.aW
o.toString
p=o.cBM(q.a.e)
o=q.a
n=o.d.b1
o=o.Q
o.toString
w=6
return B.b(C.aMk(n,o,p),$async$adu)
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
return B.i($async$adu,v)},
z5(d){return this.bOr(d)},
bOr(d){var w=0,v=B.j(x.H),u,t=this,s
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
return B.b(t.MO(s,s),$async$z5)
case 10:w=4
break
case 7:w=11
return B.b(t.MO(s,s),$async$z5)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghq()?12:13
break
case 12:w=14
return B.b(t.Gm(),$async$z5)
case 14:case 13:case 1:return B.h(u,v)}})
return B.i($async$z5,v)},
Y3(d,e){return this.c2M(d,e)},
c2M(d,e){var w=0,v=B.j(x.H),u,t=this
var $async$Y3=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=t.ghq()?3:5
break
case 3:w=6
return B.b(t.adu(),$async$Y3)
case 6:if(d===D.pk){w=1
break}w=4
break
case 5:if(d===D.pk){w=1
break}case 4:w=7
return B.b(t.z5(d),$async$Y3)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Y3,v)},
a9l(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$a9l=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghq()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.tj(s.d.b1,q)
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
return B.b(C.aMk(t.a.d.b1,q,l),$async$a9l)
case 3:t.a.bm()
case 1:return B.h(u,v)}})
return B.i($async$a9l,v)},
Gm(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Gm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghq()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.tj(s.d.b1,q)
if(p==null){w=1
break}o=J.q(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?B.Z(o,s,r):B.R(s,r)
n.m(0,"gameOver",!0)
C.fId(t.a.d.b1,q,n)
C.hNg(t.a.d.b1,q)
w=3
return B.b(C.aeG(t.a.d.b1),$async$Gm)
case 3:t.a.bm()
case 1:return B.h(u,v)}})
return B.i($async$Gm,v)},
p(){var w,v=this
if(v.ghq()&&!v.f)v.a9l()
else if(!v.f)v.bUM()
C.aWt();++v.RG
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
v.bnZ()},
cq0(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&B.c()
v=v<=0||w.aW==null}if(v)return
if(w.ci)return
v=w.aW
v.toString
w.a.toString
if(v.a>=v.b){w.rV("Goal completed!")
return}v=++w.rx
if(v%5===0)w.n(new C.d3F())},
b_F(){var w,v,u,t,s,r=this
r.x=B.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e_(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b_E()
break
case"scramble":r.bc=0
r.b_G()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=A.o.J(r.at,50)
v=J.e_(5,x.N)
for(t=0;t<5;++t)v[t]=D.cVN[A.o.J(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bG(0,A.c_)
break
case"math":r.y2=0
r.b_D()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b_H()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e_(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
A.d.fN(v,s)
if(!r.ccW()){w=J.e_(9,w)
for(u=0;u<9;++u)w[u]=u
A.d.fN(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
A.d.a8(w)
w.push(r.d.aG(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.OI()
break
case"pattern":if(r.ghq()){r.ry=B.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aJN()
w=B.t(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Cr()}break
case"color":r.b1=0
r.b_y()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.Y=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b0L()
break
default:if(A.d.q(D.NJ,w)){w=r.aW
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
aXS(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
ccW(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return A.o.J(v,2)===0},
b_H(){var w,v,u,t,s,r=this,q=A.o.J(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e_(o,x.S)
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
b_D(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bzw().length-6)u.at=0
w=$.bzw()
v=w[A.o.J(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b_G(){var w=this,v=w.w=D.cBD[A.o.J(w.at+w.bc,105)]
w.ax=C.hNw(v)
w.ay=B.bT(v.length,null,!1,x.T)
w.ch=B.a(w.ax.split(""),x.s)
w.e.bG(0,A.c_)},
b0L(){var w=this,v=w.cx
if(v!=null)v.a9(0)
w.y=!1
w.z=null
w.cx=B.cV(B.dB(0,0,0,120+w.d.aG(280),0,0),new C.d3t(w))},
bOu(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.qm("Too early \u2014 paid for "+t.Y+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=A.o.ak(new B.N(v,0,!1).bv(u).a,1000)}if(w<520){t.n(new C.d2Y(t))
v=t.Y
if(v>=5){t.om()
t.rV("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b0L()
t.n(new C.d2Z())}}else t.qm("Too slow ("+w+"ms) \u2014 paid for "+t.Y+"/5.")},
cpj(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=A.d.bf(t.ay,new C.d3A())
if(u<0)return
t.n(new C.d3B(t,u,v,d))},
cpk(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.n(new C.d3C(u,d,v))},
byY(){var w,v,u=this
if(u.f)return
if(A.d.be(u.ay,new C.d2u())){u.c.F(x.q).f.P(D.ejb)
return}w=A.d.fL(u.ay)
v=u.w
v===$&&B.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.n(new C.d2v(u))
if(u.ghq()&&D.ma.q(0,u.a.e))u.Zg()
if(u.bc>=5){u.om()
if(u.ghq()&&D.ma.q(0,u.a.e))u.mt(!0)
else u.rV("All 5 words unscrambled!")}else{u.b_G()
u.r="Word "+(u.bc+1)+" of 5 \u2014 place letters in order"
u.n(new C.d2w())}}else u.qm("Wrong word \u2014 paid for "+u.bc+"/5.")},
b_y(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=A.o.J(w.at+w.b1*11,4),t=v[w.d.aG(4)]
w.aA=t
w.az=v[u]
w.aK=[A.dy,A.dr,A.hw,A.qx][u]
w.w=t},
aIV(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.a.i(h.a.c.a.toLowerCase()),f=h.go
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
b_E(){var w,v,u,t,s,r,q,p=this
p.fx=p.k2=0
p.go.a8(0)
p.id.a8(0)
p.fy=B.a([],x.t)
p.k1=!1
w=B.z(p.dy,x.S)
A.d.v(w,p.dy)
p.fr=w
if(p.ghq()&&p.a.Q!=null){w=p.a
v=w.d.b1
w=w.Q
w.toString
u=C.tj(v,w)
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
p.aIV(s)}else A.d.fN(p.fr,p.d)},
c9Y(d){var w,v,u,t=this
if(t.ci)return
if(t.f||t.k1||t.go.q(0,d)||A.d.q(t.fy,d))return
t.n(new C.d39(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.n(new C.d3a(t,v,u))
if(t.ghq()&&D.ma.q(0,t.a.e))t.Zg()
if(t.go.a>=t.fr.length){t.om()
if(t.ghq()&&D.ma.q(0,t.a.e))t.mt(!0)
else t.auq()}return}t.k1=!0
B.bK(D.bcV,new C.d3b(t),x.c)},
b_1(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&B.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.n(new C.d3l(u))
if(u.y1>=5){u.om()
u.rV("All 5 questions correct!")}else{u.b_H()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.n(new C.d3m())}}else u.qm(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.n(new C.d3n(u))
if(u.y2>=6){u.om()
u.rV("All 6 math questions correct!")}else{u.b_D()
u.r="Question "+(u.y2+1)+" of 6"
u.n(new C.d3o())}}else{u.TN(u.y2+1)
u.qm(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.n(new C.d3p(u))
if(u.b1>=5){u.om()
u.rV("All 5 color rounds correct!")}else{u.b_y()
u.r="Round "+(u.b1+1)+" of 5 \u2014 tap the COLOR of the text"
u.n(new C.d3q())}}else u.qm("Wrong color \u2014 paid for "+u.b1+"/5.")
return}if(v){u.om()
u.auq()}else u.c.F(x.q).f.P(D.ejV)},
cpi(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=A.d.cP(q.k4,0)
v=A.o.ak(d,3)
u=A.o.J(d,3)
t=A.o.ak(w,3)
s=A.o.J(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.n(new C.d3z(q,d,w))
if(A.d.fL(q.k4)==="123456780"){q.om()
q.auq()}}},
OI(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$OI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.n(new C.d3c(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.d3d(t,q).$0()
t.c.e2()
w=6
return B.b(B.bK(A.kq,null,r),$async$OI)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.d3e(t).$0()
t.c.e2()
w=7
return B.b(B.bK(A.je,null,r),$async$OI)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.n(new C.d3f(t))
case 1:return B.h(u,v)}})
return B.i($async$OI,v)},
cpl(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.qm("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.n(new C.d3D(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.om()
u.rV("Perfect Simon run!")
return}u.n(new C.d3E(u))
u.OI()}},
Cr(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Cr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.n(new C.d2x(t))
s=x.H
w=3
return B.b(B.bK(A.jd,null,s),$async$Cr)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.d2y(t,o).$0()
t.c.e2()
w=7
return B.b(B.bK(A.UJ,null,s),$async$Cr)
case 7:if(t.c==null){w=1
break}new C.d2z(t).$0()
t.c.e2()
w=8
return B.b(B.bK(A.ib,null,s),$async$Cr)
case 8:case 5:r.length===q||(0,B.J)(r),++p
w=4
break
case 6:if(t.c!=null)t.n(new C.d2A(t))
case 1:return B.h(u,v)}})
return B.i($async$Cr,v)},
TN(d){return this.btT(d)},
btT(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$TN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return B.b(B.aw(),$async$TN)
case 3:s=f
r=t.a
q=r.e
r=A.a.i(r.c.a.toLowerCase())
p=$.bzw().length
o=A.o.J(t.at+d,p)
w=4
return B.b(s.an("Int","ngmy_game_"+q+"_"+r,o),$async$TN)
case 4:t.at=o
case 1:return B.h(u,v)}})
return B.i($async$TN,v)},
cpg(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.qm("Wrong tile \u2014 paid for "+v.aun()+"/"+C.fG0()+" moves.")
return}v.n(new C.d3x(v,w))
if(v.ghq()&&D.ma.q(0,v.a.e))v.Zg()
if(v.x1>=w)if(v.x2>=7){v.om()
if(v.ghq()&&D.ma.q(0,v.a.e))v.mt(!0)
else v.rV("All 7 pattern rounds correct!")}else{v.n(new C.d3y(v))
v.Cr()}},
HH(d,e){return this.c8p(d,e)},
rV(d){return this.HH(null,d)},
auq(){return this.HH(null,null)},
c8p(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$HH=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a9(0)
s=t.aZ
if(s!=null)s.a9(0)
r=t.a.x*1.46
t.n(new C.d37(t,r))
q=A.o.u(1000*Date.now())
s=t.a
p=new B.cW(q,s.c.a,r,A.fA,A.f8,"Game payout: "+s.f,null,null,A.cg,new B.N(Date.now(),0,!1))
B.aeD(p,!0)
t.a.hu(p)
t.a.bm()
o=e==null?"+$"+A.k.ab(r,2)+" added to your balance!":e
s=t.a
C.v0(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.Iy(d,o,"YOU WIN!",!0),$async$HH)
case 3:w=4
return B.b(C.aev(t.a.f,o),$async$HH)
case 4:case 1:return B.h(u,v)}})
return B.i($async$HH,v)},
DL(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$DL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghq()&&D.ma.q(0,t.a.e)?3:4
break
case 3:w=5
return B.b(t.cjU(),$async$DL)
case 5:w=1
break
case 4:s=t.z3()
r=t.MP()
w=r<=0||s<=0?6:7
break
case 6:w=8
return B.b(t.a8a("Time's up \u2014 no progress to pay."),$async$DL)
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
OP(d){return this.ccD(d)},
Zg(){return this.OP(!1)},
ccD(b1){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$OP=B.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghq()&&D.ma.q(0,r.a.e))||r.a.Q==null){w=1
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
a4=C.tj(a2.d.b1,q)
w=a4==null?7:9
break
case 7:w=10
return B.b(C.Ja(q,r.a.d.b1,!1),$async$OP)
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
for(a6=i,a6=new B.dw(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aW(g);a8.C();){f=a8.gT(a8)
e=typeof f=="number"?A.k.M(f):B.c3(J.k(f),null)
if(e!=null)J.ci(h,e)}}a6=h
a6=B.z(a6,B.a2(a6).k("ck.E"))
A.d.fv(a6)
J.aE(m,"memoryMatched",a6)}d=J.q(m,"wagers")
a0=a2.b(d)?B.Z(d,a3,a5):B.R(a3,a5)
J.aE(a0,p,r.a.x)
J.aE(m,"wagers",a0)
w=11
return B.b(C.aMk(r.a.d.b1,q,m),$async$OP)
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
return B.i($async$OP,v)},
mt(d){return this.cjV(d)},
cjU(){return this.mt(!1)},
cjV(b5){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$mt=B.e(function(b6,b7){if(b6===1)return B.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghq()||t.a.Q==null?3:4
break
case 3:w=5
return B.b(t.DL(),$async$mt)
case 5:w=1
break
case 4:w=6
return B.b(t.OP(!0),$async$mt)
case 6:s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=A.a.i(s.c.a.toLowerCase())
w=7
return B.b(C.Ja(q,s.d.b1,!0),$async$mt)
case 7:o=b7
n=t.MP()
w=o==null?8:9
break
case 8:m=A.k.D(t.z3()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return B.b(t.a8a("Time's up \u2014 no progress to pay."),$async$mt)
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
return B.b(t.a8a("Time's up \u2014 no progress to pay."),$async$mt)
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
t.n(new C.d3r(t,a8,a2))
r=t.a
r.toString
h=A.o.u(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+A.k.ab(a7,2):d+" ("+b1+"/"+b2+")"
r.hu(new B.cW(h,b0,a9,A.fA,A.f8,d,null,null,A.cg,new B.N(Date.now(),0,!1)))
t.a.bm()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+A.k.ab(a9,2)+" (includes opponent bonus $"+A.k.ab(a7,2)+")":"+$"+A.k.ab(a8,2)+" (your progress payout)"
s=t.a
C.v0(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return B.b(t.Iy(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$mt)
case 24:w=25
return B.b(t.Gm(),$async$mt)
case 25:case 1:return B.h(u,v)}})
return B.i($async$mt,v)},
Dc(d,e,f){return this.c8n(d,e,f)},
c8n(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Dc=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a9(0)
s=t.aZ
if(s!=null)s.a9(0)
r=t.a.x*1.46*d
t.n(new C.d35(t,r,d))
s=A.o.u(1000*Date.now())
q=t.a
p=new B.cW(s,q.c.a,r,A.fA,A.f8,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,A.cg,new B.N(Date.now(),0,!1))
B.aeD(p,!0)
t.a.hu(p)
t.a.bm()
if(t.c==null){w=1
break}o=A.k.U(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&B.c()
m=q+C.aeR(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?A.d.cI(t.cy,0,new C.d36()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+A.k.ab(r,2)+" ("+n+"% \u2014 "+B.t(k)+" mistakes/missed)":"+$"+A.k.ab(r,2)+" ("+n+"% of full prize)"
q=t.a
C.v0(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return B.b(t.Iy(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$Dc)
case 3:w=4
return B.b(C.aev(t.a.f,j),$async$Dc)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Dc,v)},
bUM(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.z3()
v=o.MP()}catch(u){return}if(v<=0||w<=0)return
t=A.k.D(w/v,0,1)
s=B.P3(A.k.ab(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=A.o.u(1000*Date.now())
p=o.a
r.hu(new B.cW(q,p.c.a,s,A.fA,A.f8,"Game partial: "+p.f+" ("+B.t(w)+"/"+B.t(v)+", left early)",n,n,A.cg,new B.N(Date.now(),0,!1)))
o.a.bm()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.v0(s,n,"Left early \xb7 +$"+A.k.ab(s,2)+" ("+B.t(w)+"/"+B.t(v)+")",q,r,p,n,!0)},
MO(d,e){return this.bJ5(d,e)},
a8a(d){return this.MO(null,d)},
bJ5(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$MO=B.e(function(f,g){if(f===1)return B.f(g,v)
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
C.v0(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return B.b(t.Iy(d,e,"YOU LOSE",!1),$async$MO)
case 3:case 1:return B.h(u,v)}})
return B.i($async$MO,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&B.c()
w=A.o.ak(m,60)
m=A.a.aT(A.o.u(A.o.J(m,60)),2,"0")
v=B.aF(n,n,n,n,A.ahW,n,n,n,new C.d3G(d),n,n,n,n,n,n)
if(o.ghq()){u=o.by
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=B.C(B.d(u?t.f+" vs "+B.t(o.by):t.f,n,2,A.Z,n,n,n,A.fL,n,n,n),1)
r=B.m(10)
q=x.p
r=B.A(B.a([v,s,B.p(n,C.anA(new C.d3H(o),A.qP,t.c.a),A.h,n,n,new B.o(A.cL,n,n,r,n,n,A.n),n,n,n,n,A.fF,n,n,n)],q),A.m,n,A.e,A.j,0,n,n)
t=o.a
s=t.w
v=B.m(10)
s=B.p(n,B.A(B.a([B.C(B.d("Win $"+A.k.ab(t.x*1.46,2)+" \xb7 stake $"+A.k.ab(o.a.x,2)+" \u2022 Progress "+o.z3()+"/"+o.MP(),n,n,n,n,n,n,D.esf,n,n,n),1),new C.amM(o.a.c.a,new C.d3I(o),n),A.aa,D.brZ,A.d4,B.d(""+w+":"+m,n,n,n,n,n,n,A.ot,n,n,n)],q),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(n,n,n,v,n,new B.a8(A.a1,A.a7,A.w,s,n,n),A.n),n,n,n,n,A.h0,n,n,n)
v=o.a.w
m=B.S(v).k("I<1,x>")
m=B.z(new B.I(v,new C.d3J(),m),m.k("ai.E"))
w=B.m(14)
v=B.G(A.be,A.r,1)
p=C.aLZ(n,D.aYI,B.br(!0,new B.B(Ad.V5,B.u(B.a([r,s,A.P,new B.fj(new C.d3K(o),n),A.ar,B.C(B.p(n,o.bJ4(),A.h,n,n,new B.o(n,n,v,w,n,new B.a8(A.a1,A.a7,A.w,m,n,n),A.n),n,n,n,n,A.ch,n,n,n),1)],q),A.ad,n,A.e,A.j,0,A.p),n),!0,!1,A.ag,!0,!0))
if(!o.ci)return p
m=B.W(140,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255)
w=B.W(242,A.i9.l()>>>16&255,A.i9.l()>>>8&255,A.i9.l()&255)
v=B.m(18)
u=B.G(A.be,A.r,1)
return new B.am(A.W,n,A.a9,A.q,B.a([p,B.bU(0,B.p(A.B,B.e8(B.p(n,B.u(B.a([D.efo,A.ab,B.d(o.cT,n,n,n,n,n,n,D.etD,A.L,n,n),A.ar,B.d(o.cd,n,n,n,n,n,n,D.erZ,A.L,n,n)],q),A.m,n,A.e,A.R,0,A.p),A.h,n,n,new B.o(w,n,u,v,n,n,A.n),n,n,n,A.ug,A.wq,n,n,n),!1,n),A.h,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
bVK(){var w=this.k3
return B.cj(new C.d34(this,w,A.k.dF(this.fr.length/w)))},
bJ4(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.bVK()
if(m==="scramble"){m=o.r
m===$&&B.c()
w=x.l
return B.u(B.a([B.d(m,n,n,n,n,n,n,A.nF,n,n,n),B.d("Words "+o.bc+"/5",n,n,n,n,n,n,A.BN,n,n,n),A.ab,B.d("Tap letters below to fill each slot",n,n,n,n,n,n,B.l(n,n,B.W(166,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.T,B.c7(A.fB,B.ih(o.ay.length,new C.d2N(o),!0,w),A.bx,6,6),A.aN,B.c7(A.fB,B.ih(o.ch.length,new C.d2O(o),!0,w),A.bx,8,8),A.aN,new B.a3(1/0,n,B.i3(D.eRw,o.gbyX(),B.ff(n,n,A.aA,n,n,n,n,n,n,A.c,n,n,A.ca,n,n,n,n,n,n,n)),n)],x.p),A.m,n,A.e,A.j,0,A.p)}if(m==="typing"){m=o.w
m===$&&B.c()
return new C.aoX(m,o.e,new C.d2P(o),new C.d2Q(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&B.c()
m=B.a([B.d(m,n,n,n,n,n,n,A.nF,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(B.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,A.BN,n,n,n))
m.push(A.ab)
if(o.a.e==="sequence"){w=o.aq
w===$&&B.c()
w+=", ?"}else w=o.CW
m.push(B.eY(A.B,B.d(w,n,n,n,n,n,n,A.oq,A.L,n,n),A.h,A.dp))
m.push(A.aN)
w=o.x
A.d.v(m,new B.I(w,new C.d2R(o),B.S(w).k("I<1,r>")))
return B.u(m,A.m,n,A.e,A.j,0,A.p)}if(m==="puzzle")return B.cj(new C.d2S(o))
if(m==="simon"){m=o.r
m===$&&B.c()
return B.u(B.a([B.d(m,n,n,n,n,n,n,A.nF,n,n,n),B.d("Progress "+o.p3+"/21",n,n,n,n,n,n,A.BN,n,n,n),A.P,B.C(B.lX(1,B.ih(4,new C.d2T(o),!0,x.l),2,10,10,n,A.dJ,!1),1)],x.p),A.m,n,A.e,A.j,0,A.p)}if(m==="pattern")return B.cj(new C.d2U(o))
if(m==="color"){u=B.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[A.dy,A.dr,A.hw,A.qx]
m=o.r
m===$&&B.c()
m=B.d(m,n,n,n,n,n,n,A.nF,n,n,n)
w=B.d("Round "+o.b1+"/5",n,n,n,n,n,n,A.BN,n,n,n)
v=o.az
v===$&&B.c()
s=o.aK
s===$&&B.c()
s=B.a([m,w,A.ab,B.d(v,n,n,n,n,n,n,B.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.aN],x.p)
r=J.e_(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=B.ff(n,n,B.W(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,A.c,n,n,A.eV,n,n,n,n,n,n,n)
r[q]=new B.B(A.cH,new B.a3(1/0,n,B.i3(new B.w(u[q],n,A.cq,n,n,n,n,n,n,n,n,n),new C.d2V(o,u,q),m),n),n)}A.d.v(s,r)
return B.u(s,A.m,n,A.e,A.j,0,A.p)}if(m==="reflex"){m=o.y
p=m?A.bq:A.cl
w=o.r
w===$&&B.c()
w=B.d(w,n,n,n,n,n,n,A.a44,A.L,n,n)
v=B.d("Fast taps "+o.Y+"/5",n,n,n,n,n,n,D.epw,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=B.d(m,n,n,n,n,n,n,B.l(n,n,A.c,n,n,n,n,n,n,n,n,Math.min(B.aG(s,A.bO,x.w).w.a.a*0.18,72),n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return B.qV(B.aJ(A.c5,B.dg(n,B.u(B.a([w,A.P,v,A.b6,s,A.b6,new B.B(A.Ds,B.d(m,n,n,n,n,n,n,B.l(n,n,B.W(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,A.a_,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),A.m,n,A.b5,A.j,0,A.p),p,n,A.ba,n,T.zu,n,n,n,n,n,n,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gbOt(),n,n,n,n,n,n,!1,A.af))}if(A.d.q(D.NJ,m)&&o.aW!=null){m=o.a.e
w=o.aW
w.toString
return C.hDb(m,new C.d2W(o),new C.d2X(o),o.d,w)}m=o.r
m===$&&B.c()
return B.as(B.d(m,n,n,n,n,n,n,A.di,n,n,n),n,n,n)}}
C.ajf.prototype={
S(){return new C.bcz()},
cHl(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bcz.prototype={
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.a,a0=d.c,a1=d.d
d=B.aG(a2,A.e1,x.w).w
w=x.p
v=B.a([B.bJ1(!1,f.a.r,"INVESTMENT PLANS",e),A.d1],w)
u=a0.x
if(u!=null){t=u.d.bO()
s=A.a.aT(A.o.u(B.bB(t)),2,"0")
r=A.a.aU(A.o.u(B.bw(t)+1),2)
q=B.m(18)
p=B.G(D.aaq,A.r,2.2)
o=x.V
n=B.a([new B.a9(0,A.G,B.W(89,A.pX.l()>>>16&255,A.pX.l()>>>8&255,A.pX.l()&255),A.eH,20),new B.a9(0,A.G,B.W(102,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.dm,14)],o)
m=B.an(e,B.p(e,e,A.h,e,e,new B.o(B.W(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),e,e,e,e,e,A.a6),e,120,e,e,e,e,e,120),e,e,e,-20,-24,e)
l=B.m(10)
k=B.G(D.aaq,A.r,3.4)
o=B.a([new B.a9(0,A.G,B.W(166,A.pX.l()>>>16&255,A.pX.l()>>>8&255,A.pX.l()&255),A.dG,10),new B.a9(0,A.G,B.W(89,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.cD,6)],o)
o=B.A(B.a([B.p(e,e,A.h,e,e,new B.o(e,e,k,l,o,new B.a8(A.ax,A.aD,A.w,D.cLm,D.coF,e),A.n),e,42,e,e,e,e,e,56),A.b6,f.b1y(a2,!0)],w),A.m,e,A.e,A.j,0,e,e)
l=B.C7(u.a,1,A.Z,D.ewA)
k=u.b
j=u.c
i=B.C7("Making $"+B.dt(k*j)+" Daily",1,A.Z,D.ewN)
h=B.C7(f.aXE(k),1,A.Z,D.eqd)
r=B.A(B.a([B.C(B.u(B.a([D.eLe,B.C7(a0.c,1,A.Z,D.aJU)],w),A.F,e,A.e,A.j,0,A.p),1),B.u(B.a([D.eL0,B.d(s+"/"+r,e,e,e,e,e,e,D.aJU,e,e,e)],w),A.dD,e,A.e,A.j,0,A.p)],w),A.m,e,A.e,A.j,0,e,e)
s=B.p(e,e,A.h,B.W(89,D.vX.l()>>>16&255,D.vX.l()>>>8&255,D.vX.l()&255),e,e,e,1,e,e,e,e,e,e)
j=B.A(B.a([f.anM("INVESTED","$"+B.dt(k),!0),f.anM("DAILY ROI",A.k.ab(j*100,2)+"%",!0),f.anM("DAYS LEFT",""+(261-u.f)+" d",!0)],w),A.m,e,A.hu,A.j,0,e,e)
k=B.dt(u.e)
u=u.f
g=261-u>0?"ACTIVE":"ENDED"
A.d.v(v,B.a([D.eR7,A.tA,B.p(e,new B.am(A.W,e,A.a9,A.q,B.a([m,B.u(B.a([o,A.P,D.eJN,A.bw,l,A.au,i,A.au,h,A.P,r,A.ar,s,A.ar,j,A.au,B.C7("Earned $"+k+" \u2022 Clocked "+u+"/261 \u2022 "+g,1,A.Z,D.ew_)],w),A.F,e,A.e,A.R,0,A.p)],w),e),A.h,e,e,new B.o(e,e,p,q,n,D.bGm,A.n),e,e,e,e,A.bA,e,e,1/0),A.a3o],w))}v.push(D.eCp)
v.push(A.tA)
A.d.v(v,new B.I(a1,new C.d72(f,a2),B.S(a1).k("I<1,r>")))
return B.ce(e,A.K,B.br(!1,B.cf(B.u(v,A.F,e,A.e,A.j,0,A.p),A.q,e,A.z,e,new B.L(20,10,20,124+d.r.d),e,e,A.ah),!0,!1,A.ag,!0,!0),e,!1,!1,e,e)},
b1y(d,e){var w=null,v=B.W(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.m(8),t=B.G(A.jb,A.r,1)
return B.p(w,B.A(B.a([B.V(A.afU,A.c,w,w,w,16),A.d4,B.d("TAP",w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,10,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.R,0,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ew,w,w,w)},
aXE(d){var w=A.a.aT(A.o.u(A.k.U(d*100)),4,"0")
return"****  ****  ****  "+A.a.aU(w,w.length-4)},
anM(d,e,f){var w=null,v=B.W(217,D.vX.l()>>>16&255,D.vX.l()>>>8&255,D.vX.l()&255)
v=B.d(d,w,w,w,w,w,w,B.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.u(B.a([v,A.bw,B.C7(e,w,w,B.l(w,w,E.zd,w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),A.F,w,A.e,A.j,0,A.p)},
caq(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gcLz(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
w=B.G(A.aO,A.r,2)
p=x.V
o=B.a([new B.a9(0,A.G,B.W(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.Pq,16),new B.a9(0,A.G,B.W(115,A.aj.l()>>>16&255,A.aj.l()>>>8&255,A.aj.l()&255),A.dm,14),new B.a9(0,A.G,B.W(51,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.cD,8)],p)
n=B.an(d,B.p(d,d,A.h,d,d,new B.o(d,d,d,d,d,new B.bS(A.B,0.5,A.w,d,0,B.a([B.W(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),B.W(0,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)],x.O),d,d),A.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=B.m(5)
l=B.G(A.c,A.r,2.2)
k=B.aX(4286436348)
k=B.W(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=B.W(A.k.U(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
i=B.aX(4279150057)
h=x.p
p=B.A(B.a([new B.a3(44,44,new B.am(A.W,d,A.a9,A.h,B.a([B.an(d,B.et(A.B,0.7853981633974483,B.p(d,d,A.h,d,d,new B.o(d,d,l,m,B.a([new B.a9(0.5,A.G,k,A.J,14),new B.a9(0,A.G,j,A.J,6),new B.a9(0,A.G,B.W(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new B.v(0,2),4)],p),D.bF8,A.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.dR3],h),d),d),A.b6,e.b1y(b2,!0)],h),A.m,d,A.e,A.j,0,d,d)
a6=B.C7(a6,1,A.Z,D.ena)
i=B.C7(e.aXE(a3),1,A.Z,D.eAW)
j=B.A(B.a([e.aX5(A.k.ab(2.86,2)+"%"),A.ez,e.aX5("261d")],h),A.m,d,A.e,A.j,0,d,d)
k=B.C(B.u(B.a([D.eDy,B.C7("$"+B.dt(a3),1,A.Z,D.ezN)],h),A.F,d,A.e,A.j,0,A.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=B.A(B.a([k,B.d(m,d,d,d,d,d,d,D.enV,d,d,d)],h),A.dD,d,A.e,A.j,0,d,d)
k=B.p(d,d,A.h,B.W(89,A.bB.l()>>>16&255,A.bB.l()>>>8&255,A.bB.l()&255),d,d,d,1,d,d,d,d,d,d)
l=B.A(B.a([B.C(e.auD("Daily","$"+B.dt(a4)),1),A.ez,B.C(e.auD("Total","$"+B.dt(a4*261)),1),A.ez,B.C(e.auD("Days","261"),1)],h),A.m,d,A.e,A.j,0,d,d)
g=q?d:new C.d71(e,b3,a3,t)
f=A.k.U(127.5)
f=B.ff(d,d,A.bj,B.W(f,A.aj.l()>>>16&255,A.aj.l()>>>8&255,A.aj.l()&255),B.W(f,A.aJ.l()>>>16&255,A.aJ.l()>>>8&255,A.aJ.l()&255),d,3,d,d,A.aO,d,d,d,d,new B.b5(B.m(10),D.aPy),d,d,d,d,d)
return B.p(d,new B.am(A.W,d,A.a9,A.h,B.a([n,B.u(B.a([p,A.bw,D.eLU,A.bw,a6,A.d5,i,A.fW,j,A.fW,m,A.fW,k,A.fW,l,A.P,new B.a3(1/0,40,B.i3(B.eY(A.B,B.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.eoi,d,d,d),A.h,A.e8),g,f),d)],h),A.F,d,A.e,A.R,0,A.p)],h),d),A.h,d,d,new B.o(d,d,w,a0,o,D.bGU,A.n),d,d,d,A.ks,D.beF,d,d,1/0)},
aX5(d){var w=null,v=B.W(115,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.m(5),t=B.G(A.ct,A.r,1)
return B.p(w,B.d(d,w,w,w,w,w,w,D.eny,w,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.DI,w,w,w)},
auD(d,e){var w=null,v=B.W(97,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.m(7),t=B.G(A.aJ,A.r,1)
return B.p(w,B.u(B.a([B.d(d,w,w,w,w,w,w,D.ewl,w,w,w),A.ya,B.eY(A.a1,B.d(e,w,w,w,w,w,w,D.eyS,w,w,w),A.h,A.dp)],x.p),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.lU,w,w,w)}}
C.afC.prototype={
S(){var w=null,v=B.a([],x._),u=$.at()
return new C.aum(v,new B.ao(A.aq,u),new B.ao(A.aq,u),B.m6(0,w,w),new B.hQ(),D.OU,C.aes(),B.a([],x.fw),B.aZ(x.N),B.m6(0,w,w))}}
C.aum.prototype={
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
if(s.length!==0)u.H(0,s)}r.a9w()
r.N9()
r.ano()
r.cmL()
r.cn_()
$.aS.x1$.push(new C.cw4(r))
r.a.toString},
N9(){var w=0,v=B.j(x.H),u,t=this,s
var $async$N9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.anb(),$async$N9)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cvp(t,s))
case 1:return B.h(u,v)}})
return B.i($async$N9,v)},
gawd(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gN5())return!0
return!1},
gN5(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaQF(){var w,v=this.CW
if(v==null)return A.bu
w=v.bv(new B.N(Date.now(),0,!1))
return w.a<0?A.bu:w},
buF(){var w=this
if(w.a.c.w)return
if(w.gN5()){if(!w.cx)w.n(new C.cvf(w))}else if(w.cx)w.n(new C.cvg(w))},
cgk(){this.n(new C.cvz(this))},
t1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$t1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.n(new C.cvw(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.n(new C.cvx(t))
w=1
break}w=3
return B.b(C.c3r(o.a,s),$async$t1)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return B.b(C.c3s(t.a.c.a,s),$async$t1)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.n(new C.cvy(t,r,q))
t.coI()
t.buF()
if(r===3)t.WD(r)}case 1:return B.h(u,v)}})
return B.i($async$t1,v)},
WD(d){return this.bVB(d)},
bVB(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$WD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return B.b(C.bza(q,r,new C.cvr(t),d,s.c.a),$async$WD)
case 3:case 1:return B.h(u,v)}})
return B.i($async$WD,v)},
wq(d){return this.bw5(d)},
ano(){return this.wq(!1)},
bw5(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$wq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return B.b(B.a5G(k,C.h2F(l.d)),$async$wq)
case 3:j=m
w=4
return B.b(C.c3R(k),$async$wq)
case 4:s=j.a=f
w=5
return B.b(B.anY(k),$async$wq)
case 5:r=f
w=!s.a&&J.cs(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.Tf(!0,l,q,p)
m.a=s
w=8
return B.b(C.and(k,s),$async$wq)
case 8:case 7:w=9
return B.b(C.Sg(k),$async$wq)
case 9:o=f
w=10
return B.b(C.a53(k),$async$wq)
case 10:n=f
if(t.c==null){w=1
break}t.n(new C.cvh(m,t,r,o,n))
case 1:return B.h(u,v)}})
return B.i($async$wq,v)},
Om(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Om=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.N9(),$async$Om)
case 3:s=t.c
if(s==null){w=1
break}r=B.eH(new C.cvu(t),!1,null,x.H)
w=4
return B.b(B.a7(s,!1).cr(r),$async$Om)
case 4:w=5
return B.b(t.N9(),$async$Om)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Om,v)},
cqN(){this.n(new C.cvS(this))},
cn_(){var w=this,v=w.go
if(v!=null)v.a9(0)
if(w.a.c.w)return
w.go=B.dD(A.rC,new C.cvM(w))},
coI(){var w=this,v=w.id
if(v!=null)v.a9(0)
w.id=null
if(!w.gN5()||w.CW==null)return
w.id=B.dD(A.h_,new C.cvP(w))},
cmL(){var w=this,v=w.fy
if(v!=null)v.a9(0)
w.fy=B.dD(A.iW,new C.cvL(w))
w.DR()},
DR(){return this.coH()},
coH(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$DR=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.az
t=4
w=7
return B.b(B.aw(),$async$DR)
case 7:q=e
p=B.aR(J.q(q.a,"app_config"))
if(p!=null&&p.length!==0){o=A.Q.aC(0,p,null)
if(x.f.b(o)){m=B.BU(B.Z(o,x.N,x.z)).az
i.a=m
r.a.f.az=m}}w=10
return B.b(B.Jl(),$async$DR)
case 10:w=e?8:9
break
case 8:w=11
return B.b(B.aLY(),$async$DR)
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
break}if(i.a!==r.ay)r.n(new C.cvN(i,r))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$DR,v)},
b0r(){A.d.aX(this.f,new C.cvK())},
a9w(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9w=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.L6(t.a.c.a),$async$a9w)
case 3:q=e
if(t.c==null){w=1
break}s=B.a([],x._)
if(J.cs(q)){A.d.v(s,q)
A.d.aX(s,new C.cvm())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(B.D(["role","ai","text",r,"at",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z))}t.n(new C.cvn(t,s))
t.a_c(!0)
B.bK(A.jd,new C.cvo(t),x.H)
case 1:return B.h(u,v)}})
return B.i($async$a9w,v)},
acR(){var w=0,v=B.j(x.H),u=this
var $async$acR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.al2(u.a.c.a,u.f),$async$acR)
case 2:return B.h(null,v)}})
return B.i($async$acR,v)},
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
a8w(d){var w,v=this
v.n(new C.cvk(v,d))
w=v.e
w===$&&B.c()
if(w.f.length!==0)w.A2(d,A.co,A.kq)
else $.aS.x1$.push(new C.cvl(v,d))
if(d===0)v.a_c(!0)
if(d===1)v.cid(!0)},
a_c(d){$.aS.x1$.push(new C.cvC(this,d))},
avR(){return this.a_c(!1)},
Zx(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Zx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ZT(),$async$Zx)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==A.a.i(t.a.f.r))t.n(new C.cvv(t))
case 1:return B.h(u,v)}})
return B.i($async$Zx,v)},
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
return B.b(C.an6(a9.a,b0),$async$ms)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return B.b(q.t1(),$async$ms)
case 10:q.n(new C.cvD(q))
w=1
break
case 8:w=11
return B.b(q.t1(),$async$ms)
case 11:if(q.c!=null&&q.ch===3)q.WD(3)
case 6:case 4:q.n(new C.cvE(q,c5))
C.S3(q.a.c.a,"user",c5)
q.avR()
t=13
a8={}
w=16
return B.b(q.Zx(),$async$ms)
case 16:b1=A.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return B.b(B.ZT(),$async$ms)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.n(new C.cvF(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.bxj("",null)
q.n(new C.cvG(q,p))
C.S3(q.a.c.a,"ai",p)
q.avR()
r=[1]
w=14
break}o=B.mE(a9)
a9=q.a
n=""
m=C.h2F(a9.d)
w=C.h2y(c5)?20:21
break
case 20:w=22
return B.b(C.c3Q(q.a.c.a),$async$ms)
case 22:q.db=c9
w=23
return B.b(q.wq(!0),$async$ms)
case 23:case 21:w=24
return B.b(B.a5G(q.a.c.a,m),$async$ms)
case 24:l=c9
k=C.hkk(l)
a9=k
b2=Date.now()
b3=new B.N(b2,0,!1).bO()
b2=A.a.aT(A.o.u(B.bB(b3)),2,"0")
b4=A.a.aT(A.o.u(B.bL(b3)),2,"0")
b5=A.a.aT(A.o.u(B.dn(b3)),2,"0")
b6=A.a.aT(A.o.u(B.hn(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+B.bw(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return B.b(C.Sg(q.a.c.a),$async$ms)
case 25:i=c9
h=C.fOe(i,25)
w=26
return B.b(C.a53(q.a.c.a),$async$ms)
case 26:g=c9
f=C.fPN(g)
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
return B.b(C.aet(a9,q.a.c.a,c5),$async$ms)
case 27:a0=c9
a1=""
if(C.h2y(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:A.a.i(b2).length!==0)===!0){b2.toString
b8=A.a.i(b2)}else{a9=a9.c
b8=A.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=B.t(d)
b4=B.t(j)
b5=q.a.c.w?"\n"+C.hFU(m)+"\n":""
b6=J.aa(n)!==0?"\n"+B.t(n)+"\n":""
b9=J.aa(a0)!==0?"\n"+B.t(a0)+"\n":""
c0=B.t(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.heG(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+B.t(c5)
w=28
return B.b(B.qh(o,a2,A.h4,null),$async$ms)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.bxj(a8.a,a3.a)
a4=c2
a5=B.h1V(a4)
c3=a5.a
a8.b=c3
if(A.d.gah(c3)){a9=B.z(C.hIy(c5),x.an)
a6=a9
J.fT(a6,C.hIz(c5))
J.fT(a6,C.hIA(c5))
J.fT(a6,B.h1n(c5))
J.fT(a6,C.hID(c5,q.a.c.w))
a8.b=a6}c3=C.hHP(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return B.b(B.aeJ(c3,a6,m,q.a.c.a),$async$ms)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.n(new C.cvH(a8,q,a7))
C.S3(q.a.c.a,"ai",a7)
if(J.cs(a8.b)&&q.c!=null)q.Il(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.n(new C.cvI(q))
C.S3(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.n(new C.cvJ(q))
q.avR()
q.acR()
if(!q.a.c.w)q.t1()
w=r.pop()
break
case 15:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ms,v)},
c9q(d){var w=B.R(x.N,x.z)
w.m(0,"type",d.a)
w.v(0,d.b)
return w},
c9r(d){var w,v,u,t,s,r,q,p=J.q(d,"phoneActions")
if(!x.j.b(p))return A.hX
w=B.a([],x.Z)
for(v=J.aW(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gT(v)
if(u.b(r)){q=B.c6W(B.Z(r,t,s))
if(q!=null)w.push(q)}}return w},
Il(d){return this.cgO(d)},
cgO(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return B.b(C.aeE(p,o,new C.cvA(t,p)),$async$Il)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return B.b(B.F9(p,null,o,!1,!0,t.a.c.a),$async$Il)
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
return B.b(B.F9(p,l.f,o,k,n,j),$async$Il)
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
return B.b(C.aUO(p,B.a([new C.qK("out_"+1000*o,new B.N(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$Il)
case 14:t.ano()
case 13:p=t.c.F(r).f
p.P(new B.aY(new B.w(m,null,null,null,null,null,null,null,null,null,null,null),A.dk,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null))
w=3
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Il,v)},
Q2(d){return this.cpd(d)},
cpd(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Q2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return B.b(C.aeE(d,n,new C.cvR(t)),$async$Q2)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return B.b(B.F9(d,null,n,!1,!0,t.a.c.a),$async$Q2)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.F(x.q).f.P(B.b_(null,null,null,A.cl,null,A.q,null,B.d(s,null,null,null,null,null,null,null,null,null,null),null,A.o1,null,null,null,null,null,null,null,null,null,null))
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
return B.b(B.F9(d,q.f,r,p,n,o),$async$Q2)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.F(x.q).f.P(B.b_(null,null,null,A.dk,null,A.q,null,B.d(s,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Q2,v)},
cid(d){$.aS.x1$.push(new C.cvB(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.K(d).ax.a===A.H,j=k?A.de:A.zk,i=m.d
i===$&&B.c()
w=x.O
w=k?B.a([A.aaR,D.b2E],w):B.a([A.aK,A.rc],w)
v=B.m(22)
u=B.a([new B.a9(0,A.G,B.W(71,A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255),A.cv,16)],x.V)
t=m.a.c.w?m.gc5c():l
s=B.W(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
r=B.G(A.c3,A.r,1.5)
t=B.aJ(l,B.p(l,C.fEr(m.a.f.Q,48),A.h,l,l,new B.o(s,l,r,l,l,l,A.a6),l,48,l,l,l,l,l,48),A.z,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,A.af)
r=B.d("NGMY Helper",l,1,A.Z,l,l,l,A.dP,l,l,l)
s=B.p(l,l,A.h,l,l,D.aRD,l,8,l,l,l,l,l,8)
if(m.gawd()&&m.d===0)q=m.gN5()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=B.p(l,B.A(B.a([t,A.b9,B.C(B.u(B.a([r,A.bw,B.A(B.a([s,A.bp,B.C(B.d(q,l,1,A.Z,l,l,l,B.l(l,l,B.W(A.k.U(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,A.cp,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),A.m,l,A.e,A.j,0,l,l)],p),A.F,l,A.e,A.j,0,A.p),1),B.aF(l,l,l,l,A.mI,l,l,l,new C.cvX(d),l,l,l,l,l,l)],p),A.m,l,A.e,A.j,0,l,l),A.h,l,l,new B.o(l,l,l,v,u,new B.a8(A.ax,A.aD,A.w,w,l,l),A.n),l,l,l,F.acu,D.bfk,l,l,l)
v=k?D.rd:A.c
u=B.m(14)
t=B.G(k?A.bG:A.er,A.r,1)
u=B.p(l,B.A(B.a([m.byI(),m.coX(1,A.lr,"Music")],p),A.m,l,A.e,A.j,0,l,l),A.h,l,l,new B.o(v,l,t,u,l,l,A.n),l,l,l,l,A.ef,l,l,l)
t=m.e
t===$&&B.c()
if(m.gawd()){v=B.a([],p)
if(m.gN5()){s=B.W(38,A.dk.l()>>>16&255,A.dk.l()>>>8&255,A.dk.l()&255)
r=B.m(12)
q=B.G(B.W(115,A.dk.l()>>>16&255,A.dk.l()>>>8&255,A.dk.l()&255),A.r,1)
v.push(new B.B(A.JN,B.p(l,B.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hiG(m.gaQF())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.eyl,A.L,l,l),A.h,l,l,new B.o(s,l,q,r,l,l,A.n),l,l,l,l,A.ei,l,l,1/0),l))}if(m.cy&&!m.gN5()){s=B.W(31,A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255)
r=B.m(12)
q=B.m(12)
o=B.V(A.rQ,k?A.iC:A.hc,l,l,l,16)
v.push(new B.B(A.JN,B.aD(!1,A.X,!0,r,B.aH(!1,q,!0,new B.B(A.ei,B.A(B.a([o,A.bp,B.d("Back to NGMY Helper AI",l,l,l,l,l,l,B.l(l,l,k?A.iC:A.hc,l,l,l,l,l,l,l,l,12,l,l,A.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),A.m,l,A.b5,A.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcgj(),l,l,l,l,l,l,l),A.h,s,0,l,l,l,l,l,A.ac),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcqM():l
v.push(B.C(new C.an9(s,q,new C.cvY(),r,o,l),1))
v=B.u(v,A.m,l,A.e,A.j,0,A.p)}else v=m.byJ(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.fQE(r)
t=B.a([w,A.ab,new B.B(A.iY,u,l),A.P,B.C(B.fRC(B.a([v,new C.anc(q,o,n,new C.cvZ(m,d),s,l)],p),A.q,t,A.z,new C.cw_(m),l),1)],p)
if(m.d===0&&!m.gawd()){w=B.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a_8:D.Zv
w.push(new B.a3(l,36,B.hF(l,new C.cw0(m),v.length,l,l,A.aY,new C.cw1(),!1),l))}if(m.ax&&m.f.length<=1)w.push(A.P)
v=m.r
u=B.l(l,l,k?A.c:A.bi,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=B.l(l,l,k?A.aB:A.dx,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?A.x:A.c
r=B.W(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=B.m(22)
o=B.m(22)
n=k?A.be:A.eZ
u=B.C(B.aK(l,A.U,!1,l,!0,A.q,l,B.aL(),v,l,l,l,l,l,2,B.bl(l,new B.b1(4,q,A.V),l,A.zD,l,l,l,l,!0,new B.b1(4,o,new B.ax(n,1,A.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ae,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cw2(m),l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,u,!0,A.a5,l,A.am,l,A.aIP,l,l),1)
s=m.at
r=s?l:m.gcjd()
w.push(B.A(B.a([u,new B.Hb(v,A.aK,l),A.bp,B.aD(!1,A.X,!0,l,B.aH(!1,l,!0,new B.a3(44,44,s?D.dLU:P.ahO,l),A.cE,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),A.h,A.aK,0,l,l,A.cE,l,l,A.ac)],p),A.dD,l,A.e,A.j,0,l,l))
w=B.u(w,A.m,l,A.e,A.R,0,A.p)
v=k?A.kQ:A.c
t.push(B.tk(A.pM,B.p(l,new B.B(A.Dv,w,l),A.h,l,l,new B.o(v,l,B.G(k?B.W(41,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.W(18,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.r,1),A.pM,l,l,A.n),l,l,l,l,l,l,l,l),14,!1))}return new B.U8(i,new C.cw3(m),B.ce(l,j,B.br(!0,B.u(t,A.m,l,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),l,!1,!1,l,l),l)},
byI(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.c()
w=p===0
p=this.c
p.toString
v=B.K(p).ax.a===A.H
if(w)p=B.W(A.k.U(255*(v?0.25:0.12)),A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255)
else p=A.K
u=B.m(11)
t=w?B.G(B.W(A.k.U(127.5),A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255),A.r,1):q
s=B.V(A.rS,w?A.aK:A.cS,q,q,q,17)
if(w)r=v?A.c:A.aG
else r=A.cS
return B.C(B.aJ(q,B.dg(q,B.A(B.a([s,A.bp,B.d("Chat",q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.m,q,A.b5,A.j,0,q,q),q,q,A.ba,new B.o(p,q,t,u,q,q,A.n),A.eD,q,q,q,A.ua,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cvi(this),q,q,q,q,q,q,!1,A.af),1)},
coX(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
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
r=B.a([s,A.bp,B.d(f,q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return B.C(B.aJ(q,B.dg(q,B.A(r,A.m,q,A.b5,A.j,0,q,q),q,q,A.ba,new B.o(p,q,t,u,q,q,A.n),A.eD,q,q,q,A.ua,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cvQ(this,d),q,q,q,q,q,q,!1,A.af),1)},
byJ(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.b7c:B.W(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
w=B.m(18)
v=B.G(d?A.du:A.aJ,A.r,1)
u=q===0?1:q
return B.p(s,B.jT(!0,s,t.ok,new C.cvj(t,e,d),u,s,A.c1,s,s,!1,!1),A.h,s,s,new B.o(r,s,v,w,s,s,A.n),s,s,s,A.iY,s,s,s,s)},
aKn(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a6(d),m=J.y(n.h(d,"role"),"user"),l=m?A.hX:this.c9r(d),k=m?A.m4:A.e,j=x.p,i=B.a([],j),h=!m
if(h)A.d.v(i,B.a([new B.a3(28,28,C.fEr(this.a.f.Q,28),o),A.aa],j))
w=m?A.dD:A.F
j=B.a([],j)
if(h)j.push(D.dM9)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=A.aK
else u=e?A.U4:A.aO
t=m?16:4
s=m?4:16
if(m)r=o
else r=B.G(e?A.bG:A.aJ,A.r,1)
q=B.a([new B.a9(0,A.G,B.W(10,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.dG,6)],x.V)
if(f)n=B.d("typing\u2026",o,o,o,o,o,o,B.l(o,o,e?A.aB:A.dx,o,o,o,o,o,o,o,o,12,A.cz,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=A.c
else p=e?A.al:A.bj
p=B.d(n,o,o,o,o,o,o,B.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(B.fAA(m,B.p(o,n,A.h,o,o,new B.o(u,o,r,new B.bv(A.kJ,A.kJ,new B.b3(t,t),new B.b3(s,s)),q,o,A.n),o,o,o,o,Aa.V8,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(B.h2_(l,e,this.gcpc()))
i.push(new B.dk(1,A.cj,B.u(j,w,o,A.e,A.j,0,A.p),o))
if(m)i.push(A.d4)
return new B.B(A.d7,B.A(i,A.dD,o,k,A.j,0,o,o),o)},
byH(d,e){return this.aKn(d,e,!1)}}
C.aH8.prototype={
Z(){this.a0()
$.xF().aJ(0,this.gD6())},
p(){$.xF().a1(0,this.gD6())
this.a2()}}
C.aH9.prototype={
Z(){this.a0()
$.xF().aJ(0,this.gD6())},
p(){$.xF().a1(0,this.gD6())
this.a2()}}
C.aHa.prototype={
Z(){this.a0()
$.xF().aJ(0,this.gD6())},
p(){$.xF().a1(0,this.gD6())
this.a2()}}
C.aI5.prototype={
Z(){this.a0()
$.xF().aJ(0,this.gD6())},
p(){$.xF().a1(0,this.gD6())
this.a2()}}
C.TY.prototype={
a3(){return"NgmySnapshotResolveOutcome."+this.b}}
C.akN.prototype={
S(){return new C.aza()}}
C.aza.prototype={
Z(){var w,v=this
v.a0()
w=v.a
v.d=w.d
v.e=B.bi(w.e,!0,x.o)
v.f=v.a.f},
ko(d){var w=null,v=this.c
if(v==null)return
v.F(x.q).f.P(B.b_(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
zg(d,e){return this.cu8(d,e)},
cu8(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this
var $async$zg=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.n(new C.dnz(q,e))
t=3
w=6
return B.b(d.$0(),$async$zg)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.n(new C.dnA(q))
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
return B.b(B.v3(r,q),$async$zG)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.dnq(t,s))
case 1:return B.h(u,v)}})
return B.i($async$zG,v)},
a74(){var w=0,v=B.j(x.gE),u,t=this,s,r,q,p
var $async$a74=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zG(),$async$a74)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&B.c()
q=t.e
q===$&&B.c()
p=t.f
p===$&&B.c()
u=B.LU(s,B.If(B.bTm(r,q,s,p).eD(),null,"  "))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a74,v)},
Vo(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.oB(s,t.a.c,!1),$async$Vo)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.zg(new C.dno(t),"Preparing download\u2026"),$async$Vo)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Vo,v)},
WO(){var w=0,v=B.j(x.H),u,t=this,s
var $async$WO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.oB(s,t.a.c,!1),$async$WO)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.zg(new C.dny(t),"Creating QR code\u2026"),$async$WO)
case 4:case 1:return B.h(u,v)}})
return B.i($async$WO,v)},
WN(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$WN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.hB1(r),$async$WN)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}w=4
return B.b(t.zg(new C.dnn(t,s),"Looking up code\u2026"),$async$WN)
case 4:case 1:return B.h(u,v)}})
return B.i($async$WN,v)},
aal(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$aal=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.wf.c2().Ks(A.O0,A.rL,!0),$async$aal)
case 7:r=e
p=r
q=p==null?null:J.fi(p.a)
if(q==null){u=null
w=1
break}if(q.c!=null){p=q.c
p.toString
p=!A.aE.gah(p)}else p=!1
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
case 6:u=B.F5()
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aal,v)},
yV(d,e,f){return this.bB_(d,e,f)},
aLB(d,e){return this.yV(d,!1,e)},
bAZ(d){return this.yV(d,!1,!1)},
bB_(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$yV=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zG(),$async$yV)
case 3:if(t.c==null){w=1
break}if(!C.bTr(d,t.a.c,null)){t.ko(C.bTs(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&B.c()
s=!C.hen(d,s)}if(s){t.ko(y.B)
w=1
break}r=d.as
q=J.ch(r)
s=t.c
s.toString
w=4
return B.b(C.hBe(s,q,t.a.c,d),$async$yV)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=B.lr(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,A.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&B.c()
r=o}w=5
return B.b(B.rK(s,p,r,!1,null,null,d.ax),$async$yV)
case 5:if(t.c==null){w=1
break}t.n(new C.dnm(t,p,r,d))
t.ko("Restored your local Growth Income. Go back to see it updated.")
case 1:return B.h(u,v)}})
return B.i($async$yV,v)},
aak(){var w=0,v=B.j(x.H),u=this
var $async$aak=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.zg(new C.dnp(u),"Reading file\u2026"),$async$aak)
case 2:return B.h(null,v)}})
return B.i($async$aak,v)},
UK(d){return this.bCf(d)},
bCf(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$UK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&B.c()
s=new B.cW("local_qr_dep_"+1000*r,q.a,d,A.fc,A.f8,"Admin deposit ($"+B.dt(d)+")",null,null,A.cg,new B.N(Date.now(),0,!1))
C.c5S(t.d,s)
q=t.e
q===$&&B.c()
r=B.z(q,x.o)
r.push(s)
w=3
return B.b(B.rK(t.a.c,t.d,r,!0,null,null,null),$async$UK)
case 3:w=4
return B.b(t.zG(),$async$UK)
case 4:if(t.c==null){w=1
break}t.ko("Deposited $"+B.dt(d)+" to your local wallet.")
case 1:return B.h(u,v)}})
return B.i($async$UK,v)},
b_S(d){var w=null
return B.cg(w,w,!0,w,new C.dnw(),d,w,!0,!0,x.N)},
TT(d){return this.buz(d)},
buz(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$TT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return B.b(t.UK(d.b),$async$TT)
case 5:w=1
break
case 4:s=d.c
t.ko(s==null?"Could not apply deposit.":s)
case 1:return B.h(u,v)}})
return B.i($async$TT,v)},
Dr(d){return this.ce0(d)},
ce0(d){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Dr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zG(),$async$Dr)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return B.b(C.aXG(d,t.a.c),$async$Dr)
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
return B.b(t.b_S(r),$async$Dr)
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
return B.b(C.c5L(d,o,n.a,r,p),$async$Dr)
case 7:w=6
return B.b(t.TT(f),$async$Dr)
case 6:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Dr,v)},
Ds(d){return this.ce1(d)},
ce1(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ds=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zG(),$async$Ds)
case 3:if(t.c==null){w=1
break}w=4
return B.b(C.c5K(d,t.a.c),$async$Ds)
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
return B.b(t.b_S(r),$async$Ds)
case 5:q=f
if(q==null||A.a.i(q).length===0){w=1
break}r=t.a.c
p=A.a.i(q)
o=t.e
o===$&&B.c()
n=t.d
n===$&&B.c()
w=7
return B.b(C.TA(o,n.a,d,r,p),$async$Ds)
case 7:w=6
return B.b(t.TT(f),$async$Ds)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Ds,v)},
Nn(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Nn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!B.BB()){t.ko("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return B.b(B.a7(s,!1).cr(B.eH(new C.dnr(),!0,null,x.N)),$async$Nn)
case 3:r=e
if(r==null||A.a.i(r).length===0){w=1
break}w=A.a.a_(A.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return B.b(t.zg(new C.dns(t,r),"Applying deposit\u2026"),$async$Nn)
case 6:w=1
break
case 5:w=7
return B.b(t.zg(new C.dnt(t,r),"Loading\u2026"),$async$Nn)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Nn,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.K(d).ax.a===A.H,m=n?A.iU:A.oO,l=n?A.c:A.M,k=n?A.aQ:A.aj,j=n?A.bG:A.x.j(0.06),i=x.p
j=B.A(B.a([B.aH(!1,o,!0,B.p(A.B,B.V(A.es,l,o,o,o,16),A.h,o,o,new B.o(j,o,o,o,o,o,A.a6),o,38,o,o,o,o,o,38),A.cE,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dnB(d),o,o,o,o,o,o,o)],i),A.m,o,A.e,A.j,0,o,o)
w=B.d("Backup & Restore",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,A.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=B.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,A.cp,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=B.C(new C.Ze(D.bpk,"Download",E.a_p,u?o:p.gbHk(),o),1)
t=B.A(B.a([t,A.en,B.C(new C.Ze(A.j1,"Show QR",A.asJ,u?o:p.gbXc(),o),1)],i),A.m,o,A.e,A.j,0,o,o)
u=p.r
s=B.C(new C.Ze(D.bpl,"Upload",A.Nr,u?o:p.gbXa(),o),1)
s=B.A(B.a([s,A.en,B.C(new C.Ze(A.iG,"Scan QR",D.cBQ,u?o:p.gbXb(),o),1)],i),A.m,o,A.e,A.j,0,o,o)
u=p.r?o:p.gbX9()
r=n?A.c.j(0.06):A.aS.j(0.08)
q=B.m(16)
q=B.a([B.cL(B.a([j,A.ay,w,A.P,v,A.ka,t,A.ay,s,A.ay,new C.bnE(A.qk,"Enter Code",A.Zc,u,o),A.ka,B.p(o,B.A(B.a([B.V(A.hg,A.aS,o,o,o,18),A.av,B.C(B.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,A.a_,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),A.F,o,A.e,A.j,0,o,o),A.h,o,o,new B.o(r,o,o,q,o,o,A.n),o,o,o,o,A.iE,o,o,o)],i),o,A9.K1,o,o,A.ah,!1)],i)
if(p.r){j=n?A.hn:A.c
w=p.w
if(w==null)w="Working\u2026"
q.push(B.an(0,B.aD(!1,A.X,!0,o,new B.B(A.zG,B.A(B.a([I.aHN,A.b9,B.C(B.d(w,o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),A.m,o,A.e,A.j,0,o,o),o),A.h,j,8,o,o,o,o,o,A.ac),o,o,0,0,o,o))}return B.ce(o,m,B.br(!1,new B.am(A.W,o,A.a9,A.q,q,o),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.Ze.prototype={
B(d){var w=this,v=null,u=B.m(22),t=B.m(22),s=w.e,r=B.m(22),q=B.a([new B.a9(0,A.G,A.d.gai(s).j(0.35),A.dm,16)],x.V),p=A.c.j(0.22)
return B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.p(v,B.u(B.a([B.p(v,B.V(w.c,A.c,v,v,v,30),A.h,v,v,new B.o(p,v,v,v,v,v,A.a6),v,56,v,v,v,v,v,56),A.ab,B.d(w.d,v,v,v,v,v,v,A.qR,v,v,v)],x.p),A.m,v,A.b5,A.j,0,A.p),A.h,v,v,new B.o(v,v,v,r,q,new B.a8(A.ax,A.aD,A.w,s,v,v),A.n),v,140,v,v,A.c1,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.h,A.K,0,v,v,v,v,v,A.ac)}}
C.bnE.prototype={
B(d){var w=this,v=null,u=B.m(22),t=B.m(22),s=w.e,r=B.m(22),q=B.a([new B.a9(0,A.G,A.d.gai(s).j(0.35),A.dm,16)],x.V),p=A.c.j(0.22)
return B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.p(v,B.A(B.a([B.p(v,B.V(w.c,A.c,v,v,v,24),A.h,v,v,new B.o(p,v,v,v,v,v,A.a6),v,44,v,v,v,v,v,44),A.en,B.d(w.d,v,v,v,v,v,v,A.qR,v,v,v)],x.p),A.m,v,A.b5,A.j,0,v,v),A.h,v,v,new B.o(v,v,v,r,q,new B.a8(A.ax,A.aD,A.w,s,v,v),A.n),v,v,v,v,D.bhp,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.h,A.K,0,v,v,v,v,v,A.ac)}}
C.XT.prototype={
S(){return new C.beY()}}
C.beY.prototype={
gasN(){var w=this.e
return w===$?this.e=this.a.d:w},
Z(){var w=this
w.a0()
w.P0()
w.f=B.dD(A.ng,new C.dnF(w))},
p(){var w=this.f
if(w!=null)w.a9(0)
this.a2()},
P0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$P0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return B.b(B.v3(q.e,q.f),$async$P0)
case 3:q=e.a
s=B.bTm(q[3],q[1],t.a.e,q[4])
w=4
return B.b(B.LU(t.a.e,B.If(s.eD(),null,"  ")),$async$P0)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.n(new C.dnC(t,r))
case 1:return B.h(u,v)}})
return B.i($async$P0,v)},
B(d){var w=this,v=null,u=B.K(d).ax.a===A.H,t=u?A.iU:A.oO,s=u?A.hn:A.c,r=u?A.c:A.bi,q=B.eA(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,A.aKG,v,v,v,1,v,!0),p=B.m(24),o=B.G(A.aS.j(0.35),A.r,1),n=w.d,m=B.pj(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,A.c),l=B.d("Code: "+w.gasN(),v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=B.m(20),j=A.aS.j(0.12),i=B.m(20),h=x.p
i=B.aH(!1,k,!0,B.p(v,B.A(B.a([B.V(A.fx,A.aS,v,v,v,14),A.bp,B.d("Copy code",v,v,v,v,v,v,B.l(v,v,A.aS,v,v,v,v,v,v,v,v,12,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),A.m,v,A.e,A.R,0,v,v),A.h,v,v,new B.o(j,v,v,i,v,v,A.n),v,v,v,v,A.my,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dnD(w,d),v,v,v,v,v,v,v)
return B.ce(q,t,new B.B(A.a8,B.u(B.a([B.C(B.p(v,B.u(B.a([A.P,m,A.bs,l,A.P,i,A.ay,B.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,B.l(v,v,u?A.aQ:A.aj,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),A.L,v,v)],h),A.m,v,A.b5,A.j,0,A.p),A.h,v,v,new B.o(s,v,o,p,v,v,A.n),v,v,v,v,A.a8,v,v,1/0),1),A.aN,new B.a3(1/0,v,B.bJ(A.yk,new C.dnE(d),B.bk(A.aS,v,v,v,v,A.fV,v,v,v,v,v,v)),v)],h),A.m,v,A.e,A.j,0,A.p),v),v,!1,!1,v,v)}}
C.XU.prototype={
S(){return new C.beZ(B.y7(A.wb,A.n3,A.t6))}}
C.beZ.prototype={
p(){this.d.p()
this.a2()},
B(d){var w=null
return B.ce(B.eA(w,w,w,!0,!0,A.x,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.eRr,w,w,w,1,w,!0),A.x,B.y6(this.d,A.bM,new C.dnG(this,d)),w,!1,!1,w,w)}}
C.abZ.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.K(a0).ax.a===A.H,k=l?A.hn:A.c,j=l?A.c:A.M,i=l?A.aQ:A.aj,h=l?A.be:A.er,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=B.m(26)
w=B.G(A.aS.j(0.35),A.r,1)
v=B.a([new B.a9(0,A.G,A.aS.j(0.16),A.kH,36)],x.V)
u=B.p(m,D.bvp,A.h,m,m,new B.o(m,m,m,B.m(18),A.a_o,D.bEy,A.n),m,58,m,m,m,m,m,58)
t=B.d("Restore local backup?",m,m,m,m,m,m,B.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,A.u,m,m,!0,m,-0.3,m,m,m,m,m,m),A.L,m,m)
s=B.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,B.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),A.L,m,m)
r=l?A.iU:A.oO
q=B.m(18)
p=B.G(A.aS.j(0.22),A.r,1)
o=x.p
g=B.a([new C.O5("Account",A.a.i(this.d),i,j,m),A.T,new C.O5("Balance","$"+B.dt(g.d),i,j,m)],o)
if(d!=null&&A.a.i(d).length!==0)A.d.v(g,B.a([A.T,new C.O5("Investment",d,i,j,m)],o))
g.push(A.T)
g.push(new C.O5("Saved on",""+B.bB(f)+"/"+B.bL(f)+"/"+B.bw(f),i,j,m))
g.push(A.T)
g.push(new C.O5("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=B.p(m,B.u(g,A.F,m,A.e,A.j,0,A.p),A.h,m,m,new B.o(r,m,p,q,m,m,A.n),m,m,m,m,A.c1,m,m,1/0)
r=A.b_.j(l?0.14:0.12)
q=B.m(14)
p=B.G(A.b_.j(0.35),A.r,1)
n=B.V(A.wX,l?A.aM:A.dC,m,m,m,16)
return B.eB(m,A.K,new B.d2(A.Sx,B.bQ(new B.B(A.wt,B.u(B.a([u,A.aN,t,A.P,s,A.bs,g,A.ay,B.p(m,B.A(B.a([n,A.aa,B.C(B.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,B.l(m,m,l?A.bK:A.iA,m,m,m,m,m,m,m,m,11.5,m,m,A.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),A.F,m,A.e,A.j,0,m,m),A.h,m,m,new B.o(r,m,p,q,m,m,A.n),m,m,m,m,A.ei,m,m,1/0),A.d1,B.A(B.a([B.C(B.dU(A.mX,new C.eEQ(a0),B.d9(m,m,m,m,m,m,m,m,m,j,m,m,A.ca,m,new B.b5(B.m(14),A.V),new B.ax(h,1,A.r,-1),m,m,m,m)),1),A.av,B.C(B.bJ(D.eBO,new C.eER(a0),B.bk(A.aS,m,m,m,m,m,A.ca,m,new B.b5(B.m(14),A.V),m,m,m)),2)],o),A.m,m,A.e,A.j,0,m,m)],o),A.m,m,A.e,A.R,0,A.p),m),new B.o(k,m,w,e,v,m,A.n),A.b7),m),m,m,m,A.em,A.cZ,m,m,m)}}
C.O5.prototype={
B(d){var w=this,v=null
return B.A(B.a([new B.a3(92,v,B.d(w.c,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),B.C(B.d(w.d,v,v,v,v,v,v,B.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,A.I,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.F,v,A.e,A.j,0,v,v)}}
C.X0.prototype={
S(){return new C.aww(new B.ao(A.aq,$.at()),B.k6(!0,null,!0,!0,null,null,!1))}}
C.aww.prototype={
Z(){this.a0()
$.aS.x1$.push(new C.cYi(this))},
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.e.p()
this.a2()},
bXe(){var w,v=this.c
v.toString
w=A.a.i(this.d.a.a)
B.a7(v,!1).K(w)
return null},
B(d){var w=this,v=null,u=B.K(d).ax.a===A.H,t=u?A.hn:A.c,s=u?A.c:A.M,r=u?A.aQ:A.aj,q=u?A.iU:A.oO,p=u?A.be:A.er,o=B.m(24),n=B.G(A.aS.j(0.35),A.r,1),m=B.a([new B.a9(0,A.G,A.aS.j(0.18),A.fz,32)],x.V),l=B.p(v,A8.aix,A.h,v,v,new B.o(v,v,v,B.m(18),A.a_o,D.bH3,A.n),v,56,v,v,v,v,v,56),k=B.d("Enter restore code",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,A.u,v,v,!0,v,-0.3,v,v,v,v,v,v),A.L,v,v),j=B.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),A.L,v,v),i=B.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,A.I,v,v,!0,v,8,v,v,v,v,v,v),h=B.a([new B.tB(B.ad("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bn8(new C.cYf())],x.G),g=B.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,A.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return B.eB(v,A.K,new B.d2(A0.Ib,B.bQ(new B.B(A.wt,B.u(B.a([l,A.aN,k,A.P,j,A.dW,B.aK(!1,A.U,!1,v,!0,A.q,v,B.aL(),w.d,v,v,v,v,v,2,B.bl(v,v,v,A.DB,v,v,"",v,!0,new B.b1(4,B.m(16),new B.ax(p,1,A.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new B.b1(4,B.m(16),D.aPw),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),A.z,!0,v,!1,v,!1,w.e,A.ae,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.cYg(w),v,!1,v,v,!1,v,!0,v,A.a8,v,v,v,v,v,v,v,v,v,v,v,i,!0,A.L,v,A.lA,v,v,v,v),A.dW,B.A(B.a([B.C(B.dU(A.mX,new C.cYh(d),B.d9(v,v,v,v,v,v,v,v,v,s,v,v,A.ca,v,new B.b5(B.m(14),A.V),new B.ax(p,1,A.r,-1),v,v,v,v)),1),A.av,B.C(B.bJ(D.eF9,w.gbXd(),B.bk(A.aS,v,v,v,v,v,A.ca,v,new B.b5(B.m(14),A.V),v,v,v)),2)],f),A.m,v,A.e,A.j,0,v,v)],f),A.m,v,A.e,A.R,0,A.p),v),new B.o(t,v,n,o,m,v,A.n),A.b7),v),v,v,v,A.K3,A.cZ,v,v,v)}}
C.alh.prototype={
S(){return new C.bf4(A.cA)},
hu(d){return this.x.$1(d)},
bm(){return this.y.$0()}}
C.bf4.prototype={
Z(){var w,v=this
v.a0()
w=v.a
w.toString
$.rI=$.rI+1
v.r=A.o.M(A.o.D(C.fht(w.e,w.d.y2),1,600))
w=v.a
if(!J.l8(w.d.y2,w.e))v.r=C.hGm(v.a.e)
v.w=B.dD(A.h_,new C.du0(v))},
p(){var w=this.w
if(w!=null)w.a9(0)
this.c8h()
C.aWt()
this.a2()},
c8h(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:A.k.D(r.e/w,0,1)
if(v<=0)return
u=B.P3(A.k.ab(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=A.o.u(1000*Date.now())
s=r.a
w.hu(new B.cW(t,s.c.a,u,A.fA,A.f8,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,A.cg,new B.N(Date.now(),0,!1)))
r.a.bm()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.v0(u,q,"Left early \xb7 +$"+A.k.ab(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
It(d,e){return this.cjQ(d,e)},
b_w(d){return this.It(!1,d)},
cjP(d){return this.It(d,"")},
cjQ(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
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
C.v0(s,null,o?"No progress":e,q,p,s,null,!1)
s=t.c
if(s==null){w=1
break}w=5
return B.b(C.bz4(s,C.byJ(),C.fHP(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$It)
case 5:w=1
break
case 4:n=B.P3(A.k.ab(t.a.w*1.46*r,2))
m=r>=1
t.n(new C.dtS(t,n,r))
s=A.o.u(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new B.cW(s,p,n,A.fA,A.f8,q,null,null,A.cg,new B.N(Date.now(),0,!1))
B.aeD(l,!0)
t.a.hu(l)
t.a.bm()
if(m)k="+$"+A.k.ab(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+A.k.ab(n,2)+" ("+A.k.U(r*100)+"% of the prize)"}q=t.a
C.v0(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return B.b(C.bz4(s,C.byJ(),C.fHP(),""+t.e+"/"+t.f,k,q,!0),$async$It)
case 6:w=7
return B.b(C.aev(t.a.f,k),$async$It)
case 7:case 1:return B.h(u,v)}})
return B.i($async$It,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.r
m===$&&B.c()
w=A.o.ak(m,60)
v=A.a.aT(A.o.u(A.o.J(m,60)),2,"0")
u=B.aF(n,n,n,n,A.aiA,n,n,n,new C.dtV(d),n,n,n,n,n,n)
t=o.a
s=x.p
t=B.C(B.u(B.a([B.d(t.f,n,1,A.Z,n,n,n,A.l7,n,n,n),B.d("Win $"+A.k.ab(t.w*1.46,2)+" \xb7 stake $"+A.k.ab(o.a.w,2),n,n,n,n,n,n,D.erH,n,n,n)],s),A.F,n,A.e,A.j,0,A.p),1)
r=o.a.c.a
m=m<=10?A.aH:A.c.j(0.1)
q=B.m(99)
q=B.A(B.a([u,t,new C.amM(r,new C.dtW(o),n),A.bp,B.dg(n,B.A(B.a([D.bzK,A.d4,B.d(""+w+":"+v,n,n,n,n,n,n,A.kc,n,n,n)],s),A.m,n,A.e,A.j,0,n,n),n,n,A.ba,new B.o(m,n,n,q,n,n,A.n),A.X,n,n,n,A.wl,n,n,n)],s),A.m,n,A.e,A.j,0,n,n)
m=o.a
v=m.w
w=v*1.46
r=o.e/o.f
m=B.A(B.a([B.C(B.bu(B.m(99),B.mR(A.bG,n,n,9,n,r,new B.nE(A.d.gI(m.r),x.dw)),A.ap),1),A.av,B.d(""+o.e+"/"+o.f,n,n,n,n,n,n,D.eAa,n,n,n)],s),A.m,n,A.e,A.j,0,n,n)
t=B.m(22)
u=B.a([A.d.gI(o.a.r).j(0.35),F.aaL],x.O)
p=o.x
return C.aLZ(n,D.b7Y,B.br(!0,B.u(B.a([new B.B(D.bjr,q,n),new C.Lx(w*r,w,v,n),new B.B(F.acX,m,n),B.C(new B.B(A.UZ,B.bu(t,B.bQ(B.e8(V.h0z(o.a.e,new V.ye(new C.dtX(o),new C.dtY(o),new C.dtZ(o),o.d)),p,n),new B.o(n,n,n,n,n,new B.a8(A.b4,A.bb,A.w,u,n,n),A.n),A.b7),A.ap),n),1)],s),A.m,n,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0))}}
C.akM.prototype={
S(){return new C.beW(null,null)},
gX(d){return this.e}}
C.beW.prototype={
Z(){var w,v=this,u=null
v.a0()
w=v.d=B.bh(u,A.zt,u,1,u,v)
w.d5()
w.dL$.H(0,new C.dnb(v))
w=B.bh(u,A.lQ,u,1,u,v)
w.cF(0)
v.e=w
w=B.bh(u,A.Jv,u,1,u,v)
w.cF(0)
v.f=w
w.d5()
w.dL$.H(0,new C.dnc(v))
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
w.bow()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.O2[A.o.J(a9.r,5)]:b4
w=!b3&&b4==null?D.O2[A.o.J(a9.w,5)]:b0
b1=b4!=null
if(b1){b3=B.t(b4)
v=b4>0?"+"+b3:b3}else if(w!=null){b3=B.t(w)
if(w>0)b3="+"+b3
v=b3}else v="?"
if(b1)u=b4>0?A.dk:A.bS
else if(w!=null){b1=(w>0?A.dk:A.bS).j(0.45)
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
b1.je(k,k,k,1)
b1.jw(l)
b1.fk(m)
d=b2*0.2
a1=B.m(d)
if(a9.a.c)a2=D.cGO
else{a2=B.aq(A.c,A.kO,q*0.45)
a2.toString
a2=B.a([a2,A.bN,A.ct],x.O)}a4=B.aq(A.bP,A.aA,q*0.65)
a4.toString
a4=B.G(a4,A.r,3)
e=B.a([new B.a9(0,A.G,A.x.j(0.3),D.dJM,16)],e)
if(!a9.a.c)e.push(new B.a9(p*3,A.G,A.aA.j(0.3+q*0.4),A.J,24+p*16))
e.push(new B.a9(0,A.G,A.c.j(0.9),A.Pq,0))
g=B.a([],g)
if(!a9.a.c)g.push(B.bU(0,B.bQ(b0,new B.o(b0,b0,b0,B.m(d),b0,new B.a8(new B.d3(-1+Math.cos(j)*0.8,-1),new B.d3(1,1),A.w,B.a([A.c.j(0),A.c.j(0.28+p*0.25),A.c.j(0)],x.O),b0,b0),A.n),A.b7),0,0,0))
g.push(B.an(b0,B.p(b0,b0,A.h,b0,b0,new B.o(b0,b0,b0,B.m(6),b0,new B.a8(A.a1,A.a7,A.w,B.a([A.c.j(0.95),A.c.j(0)],x.O),b0,b0),A.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=B.a([new B.cI(A.x.j(0.18),A.dG,5)],x.C)
if(!a9.a.c)d.push(new B.cI(A.aA.j(0.4+q*0.35),A.J,12+p*10))
g.push(B.as(B.vZ(B.d(v,b0,b0,b0,b0,b0,b0,B.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,A.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),A.ba,A.jd,b3),b0,b0,b0))
f.push(B.dO(B.fm(A.B,B.p(b0,new B.am(A.W,b0,A.a9,A.q,g,b0),A.h,b0,b0,new B.o(b0,b0,a4,a1,e,new B.a8(A.ax,A.aD,A.w,a2,b0,b0),A.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new B.v(0,n)))
return new B.a3(h,h,new B.am(A.B,b0,A.a9,A.h,f,b0),b0)}}
C.aHG.prototype={
aN(){this.aV()
this.aS()
this.dD()},
p(){var w=this,v=w.aY$
if(v!=null)v.a1(0,w.gdB())
w.aY$=null
w.a2()}}
C.Lx.prototype={
B(d){var w=null,v=new C.c2v(),u=v.$3("STAKE","$"+A.k.ab(this.e,2),A.c),t=B.m(18),s=B.G(A.br.j(0.7),A.r,1.4),r=B.a([new B.a9(0,A.G,A.aS.j(0.35),A.J,14)],x.V),q=x.p
return new B.B(A.JN,B.A(B.a([u,B.p(w,B.u(B.a([D.eMw,B.mx(new C.c2u(),w,A.ba,A.ni,w,new B.bm(w,this.c,x.e7),x.gR)],q),A.m,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(w,w,s,t,r,D.ajl,A.n),w,w,w,w,A.JZ,w,w,w),v.$3("FULL WIN","$"+A.k.ab(this.d,2),A.bK)],q),A.m,w,A.e,A.j,0,w,w),w)}}
C.amM.prototype={
B(d){var w=null,v=B.m(99),u=B.G(A.j7.j(0.7),A.r,1)
return B.p(w,B.A(B.a([D.bs6,A.d4,C.anA(this.d,A.ot,this.c)],x.p),A.m,w,A.e,A.R,0,w,w),A.h,w,w,new B.o(w,w,u,v,w,D.ajl,A.n),w,w,w,w,A.K9,w,w,w)},
gdQ(){return this.c}}
C.LF.prototype={
S(){return new C.bfz(null,null)}}
C.bfz.prototype={
Z(){var w,v=this
v.a0()
w=B.bh(null,A.lQ,null,1,null,v)
v.d!==$&&B.aO()
v.d=w},
p(){var w=this.d
w===$&&B.c()
w.p()
this.bp5()},
aJi(d,e){var w=this.a.d,v=B.S(w).k("I<1,n>"),u=B.z(new B.I(w,C.hMd(),v),v.k("ai.E"))
w=this.d
w===$&&B.c()
return B.c4(w,new C.dM4(this,u),null)},
B(d){var w=null
if(this.a.e)return B.ce(w,D.aaa,B.br(!0,this.aJi(0,d),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)
return this.aJi(0,d)},
atk(d,e,f){var w=null,v=f.j(0.16),u=B.m(10)
return B.A(B.a([B.p(w,B.V(d,f,w,w,w,17),A.h,w,w,new B.o(v,w,w,u,w,w,A.n),w,32,w,w,w,w,w,32),A.av,B.C(B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,A.a_,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.m,w,A.e,A.j,0,w,w)}}
C.aIe.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.aaP.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=B.aG(d,A.e1,o).w.r.d,m=this.c,l=J.cB(m),k=l.eC(m,new C.dM7()).gG(0),j=new B.e2(l.di(m,new C.dM8(),x.cD),x.bG).cI(0,0,new C.dM9())
o=B.aG(d,A.bO,o).w
w=x.p
v=B.a([A.T,B.p(p,p,A.h,p,p,new B.o(A.be,p,p,B.m(2),p,p,A.n),p,4,p,p,p,p,p,42),new B.B(A.ada,B.A(B.a([B.p(p,D.bC5,A.h,p,p,new B.o(p,p,p,B.m(14),B.a([new B.a9(0,A.G,A.f3.j(0.45),A.J,14)],x.V),D.ajf,A.n),p,44,p,p,p,p,p,44),A.b9,D.blw,B.aF(p,p,p,p,A.l1,p,p,p,new C.dMa(d),p,p,p,p,p,p)],w),A.m,p,A.e,A.j,0,p,p),p)],w)
if(l.gcf(m)){u=C.fCV("GAMES",""+l.gG(m),A.eN)
t=C.fCV("WON",""+k,A.j7)
s=j>=0
r=s?"+":"-"
q=C.bvA(j)
s=s?A.j7:A.fO
v.push(new B.B(D.bg2,B.A(B.a([u,A.aa,t,A.aa,C.fCV("NET",r+q,s)],w),A.m,p,A.e,A.j,0,p,p),p))}if(l.gah(m))v.push(new B.B(new B.L(24,36,24,24+n),B.u(B.a([B.V(D.bo3,A.c.j(0.35),p,p,p,52),A.ab,B.d("No game receipts yet",p,p,p,p,p,p,B.l(p,p,A.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.ar,B.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,B.l(p,p,A.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],w),A.m,p,A.e,A.j,0,A.p),p))
else v.push(new B.dk(1,A.cj,B.hF(p,new C.dMb(this),l.gG(m),new B.L(14,2,14,16+n),p,A.ah,new C.dMc(),!1),p))
return B.p(p,B.u(v,A.m,p,A.e,A.R,0,A.p),A.h,p,new B.aV(0,1/0,0,o.a.b*0.88),D.aSg,p,p,p,p,p,p,p,p)}}
C.aaO.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.c,h=i.c
if(h)if(!A.a.q(i.e.toLowerCase(),"%")){w=i.w
w=w!=null&&i.d<w
v=w}else v=!0
else v=!1
w=!h
if(w)u="LOST"
else u=v?"PARTIAL":"WON"
if(w)t=A.cN
else t=v?A.aM:A.br
s=i.gbaE()
w=new C.dM6()
r=B.m(14)
q=B.a([t.j(0.13),D.b78],x.O)
p=B.G(t.j(0.4),A.r,1)
o=B.V(h?A.lX:A.cu,t,j,j,j,16)
n=B.C(B.d(i.b,j,1,A.Z,j,j,j,A.yj,j,j,j),1)
m=t.j(0.2)
l=B.m(99)
l=B.p(j,B.d(u,j,j,j,j,j,j,B.l(j,j,t,j,j,j,j,j,j,j,j,8.5,j,j,A.u,j,j,!0,j,0.6,j,j,j,j,j,j),j,j,j),A.h,j,j,new B.o(m,j,j,l,j,j,A.n),j,j,j,j,D.bjm,j,j,j)
if(s!=null){m=s>=0?"+":"-"
m+=C.bvA(s)}else{m=h?"+":"-"
m+=C.bvA(i.d)}k=x.p
m=B.A(B.a([o,A.bp,n,l,A.bp,B.d(m,j,j,j,j,j,j,B.l(j,j,t,j,j,j,j,j,j,j,j,13,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],k),A.m,j,A.e,A.j,0,j,j)
l=C.dM5("STAKE",w.$1(i.w),A.c)
w=B.A(B.a([l,A.d4,C.dM5("PAID",C.bvA(h?i.d:0),t),A.d4,C.dM5("BEFORE",w.$1(i.x),A.eN),A.d4,C.dM5("AFTER",w.$1(i.y),A.dE)],k),A.m,j,A.e,A.j,0,j,j)
o=C.hHT(i.f)
i=A.a.i(i.e)
i=i.length===0?"":" \xb7 "+i
return B.p(j,B.u(B.a([m,A.ar,w,A.au,B.d(o+i,j,1,A.Z,j,j,j,B.l(j,j,A.c.j(0.45),j,j,j,j,j,j,j,j,10,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],k),A.ad,j,A.e,A.j,0,A.p),A.h,j,j,new B.o(j,j,p,r,j,new B.a8(A.ax,A.aD,A.w,q,j,j),A.n),j,j,j,j,A.kW,j,j,j)}}
C.ax8.prototype={
S(){return new C.bbi(A.cA,null,null)}}
C.bbi.prototype={
Z(){var w,v,u,t=this
t.a0()
w=B.bh(null,A.mw,null,1,null,t)
w.cF(0)
t.d=w
v=J.e_(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.abe(40+w.ag()*260,-20+w.ag()*40,1.5+w.ag()*3,w.ag()*3.141592653589793,0.7+w.ag()*0.3,12+w.ag()*16,[X.a0m,A.qx,A.cL,A.c][w.aG(4)],[A.hL,A.kX,A.dO,A.DW][w.aG(4)])
t.f=v},
p(){var w=this.d
w===$&&B.c()
w.p()
this.bo0()},
B(d){var w=null,v=this.d
v===$&&B.c()
return B.as(B.aD(!1,A.X,!0,w,B.c4(v,new C.d3U(this,d),w),A.h,A.K,0,w,w,w,w,w,A.ac),w,w,w)}}
C.abe.prototype={
gX(d){return this.f}}
C.aHb.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.aXg.prototype={
B(d){return new B.tL(new C.c4L(this),null,new B.h3(B.a([$.xF(),$.a0x()],x.U)),null)},
gdQ(){return this.c}}
C.L9.prototype={
c2s(){if(this.c!=null)this.n(new C.bUG())}}
C.GX.prototype={}
C.ame.prototype={
S(){return new C.azW(A.cA,new B.ao(A.aq,$.at()))},
cvI(){return this.d.$0()},
cGS(){return this.f.$0()},
cGG(d,e){return this.r.$2(d,e)},
cHu(d,e,f){return this.w.$3$bonus(d,e,f)},
gdQ(){return this.c}}
C.azW.prototype={
p(){var w=this.e
w.R$=$.at()
w.O$=0
this.a2()},
apq(){var w=B.d5(A.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
zI(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$zI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.apq()
if(s<2){t.atl("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cvI()<s){t.atl("Insufficient balance.")
w=1
break}if(!t.a.cGG(s,"Dice Roll bet")){t.atl("Could not place bet.")
w=1
break}t.a.toString
t.n(new C.dFn(t))}w=3
return B.b(C.c1G(t.a.e),$async$zI)
case 3:r=t.a
q=C.hJU(r.e,r.c,t.d)
t.a.cGS()
B.aVQ(t.a.e)
t.n(new C.dFo(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return B.b(B.bK(new B.b7(1000*(40+p*6)),null,r),$async$zI)
case 7:if(t.c==null){w=1
break}new C.dFp(t).$0()
t.c.e2()
case 5:++p
w=4
break
case 6:w=8
return B.b(B.bK(A.je,null,r),$async$zI)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.fGD(q)
t.n(new C.dFq(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cHu(m,"Dice Roll "+n,o)
t.n(new C.dFr(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+A.k.ab(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.k.ab(m,2)+" added to your balance"
w=12
return B.b(C.bz4(r,C.byJ(),new C.dFs(t),n,k,"YOU WIN!",!0),$async$zI)
case 12:w=13
return B.b(C.aev("Dice Roll",l?"+$"+A.k.ab(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.k.ab(m,2)+" added to your balance"),$async$zI)
case 13:w=10
break
case 11:w=14
return B.b(C.bz4(r,C.byJ(),new C.dFt(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$zI)
case 14:C.v0(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return B.h(u,v)}})
return B.i($async$zI,v)},
atl(d){var w=null,v=this.c
if(v==null)return
v.F(x.q).f.P(B.b_(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.apq(),d=x.w,a0=B.aG(a2,A.e1,d).w,a1=Math.min(B.aG(a2,A.bO,d).w.a.a*0.44,200)
d=B.hg(Q.ahI,D.eT8,new C.dFw(a2),f)
w=B.m(20)
v=g.a
u=v.c
t=x.p
w=B.A(B.a([d,A.b6,B.p(f,B.A(B.a([A.ahF,A.bp,C.anA(v.d,A.js,u)],t),A.m,f,A.e,A.R,0,f,f),A.h,f,f,new B.o(A.cL,f,f,w,f,f,A.n),f,f,f,f,A.ln,f,f,f)],t),A.m,f,A.e,A.j,0,f,f)
u=g.z
v=B.W(140,D.U6.l()>>>16&255,D.U6.l()>>>8&255,D.U6.l()&255)
d=B.m(18)
s=B.G(B.W(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
r=g.x
d=B.C(B.p(f,B.as(new C.akM(r,r?g.w:g.r,a1,f),f,f,f),A.h,f,f,new B.o(v,f,s,d,f,f,A.n),f,f,f,f,f,f,f,1/0),1)
v=B.d("Roll lands on one of:",f,f,f,f,f,f,B.l(f,f,A.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,A.a_,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=B.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.O2[q]
o=C.fGD(p)
n=p>0?A.bq:A.aH
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new B.b3(10,10)
i=m?A.c:n.j(0.7)
h=new B.ax(i,m?2.5:1.2,A.r,-1)
n=m?B.a([new B.a9(1,A.G,n.j(0.65),A.J,14)],r):A.a_k
m=m?18:15
s.push(new B.bF(1,A.bn,new B.B(A.jX,B.p(A.B,new B.w(o,f,new B.E(!0,A.c,f,f,f,f,m,A.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f),A.h,f,f,new B.o(k,f,new B.c1(h,h,h,h),new B.bv(j,j,j,j),n,f,A.n),f,l,f,f,f,f,f,f),f),f))}d=B.a([d,A.ab,v,A.ar,B.A(s,A.m,f,A.e,A.j,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.fGD(v)
s=g.r
s.toString
d.push(new B.B(A.ku,B.d("Landed on "+v,f,f,f,f,f,f,B.l(f,f,s>0?A.bt:A.cN,f,f,f,f,f,f,f,f,20,f,f,A.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(A.T)
d.push(new B.bE(A.a1,f,f,B.d("Bet Amount",f,f,f,f,f,f,B.l(f,f,B.W(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,A.I,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(A.ar)
v=x.bL
v=B.z(new B.I(B.a([2,5,10,25],x.n),new C.dFx(g),v),v.k("ai.E"))
s=g.y
r=B.W(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v.push(B.C(new B.B(A.VD,B.aK(f,A.U,!1,f,!0,A.q,f,B.aL(),g.e,f,f,f,f,f,2,B.bl(f,new B.b1(4,B.m(10),A.V),f,A.jC,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,A.l8,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),A.z,!0,f,!0,!s,!1,f,A.ae,f,f,f,f,f,A.dL,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,A.a8,f,f,f,f,f,f,f,f,f,f,f,A.h7,!0,A.L,f,A.am,f,f,f,f),f),1))
d.push(B.A(v,A.m,f,A.e,A.j,0,f,f))
d.push(A.P)
d.push(new B.bE(A.a7,f,f,B.d("Perfect Score Profit: +$"+A.k.ab(g.apq()*0.46,2),f,f,f,f,f,f,D.etC,f,f,f),f))
d.push(A.T)
d=B.C(new B.B(A.iY,B.u(d,A.ad,f,A.e,A.j,0,A.p),f),1)
v=g.x?f:g.gcgA()
s=B.ff(f,f,A.aA,f,f,f,f,f,f,A.c,f,f,f,f,new B.b5(B.m(14),A.V),f,f,f,f,f)
return C.aLZ(f,D.Uc,B.br(!0,B.u(B.a([new B.B(D.bjM,w,f),new C.Lx(u,e*1.46,e,f),B.C(B.u(B.a([d,new B.B(new B.L(14,4,14,8+a0.r.d),new B.a3(1/0,52,B.i3(B.d("\ud83c\udfb2 ROLL ($"+A.k.ab(e,2)+")",f,f,f,f,f,f,A.kK,f,f,f),v,s),f),f)],t),A.m,f,A.e,A.j,0,A.p),1)],t),A.m,f,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0))}}
C.amR.prototype={
S(){return new C.aAc(A.k5,new B.ao(A.aq,$.at()))},
cGy(d){return this.e.$1(d)}}
C.aAc.prototype={
gaog(){var w,v=this.r
if(v===$){w=A.o.u(1e4+A.cA.aG(89999))
this.r!==$&&B.bH()
this.r=w
v=w}return v},
gOt(){var w=this.d,v=this.a
return w===A.k5?A.a.i(v.f.a):A.a.i(v.f.b)},
ga6o(){var w=this.gOt(),v=B.ad("^\\$+",!0,!1,!1,!1),u=A.a.i(B.aI(w,v,""))
return u.length===0?"":"$"+u},
p(){var w=this.e
w.R$=$.at()
w.O$=0
this.a2()},
Hp(d,e){return this.bBp(d,e)},
bBp(d,e){var w=0,v=B.j(x.H),u=this,t
var $async$Hp=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.fC(new B.fv(d)),$async$Hp)
case 2:B.eN()
t=u.c
if(t!=null)t.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
return B.h(null,v)}})
return B.i($async$Hp,v)},
Oo(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Oo=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gOt().length===0){r.c.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}B.j6()
o=A.k.ab(r.a.d,2)
q=r.d===A.k5?B.cq("https://cash.app/"+r.ga6o()+"/"+o,0,null):B.cq("bitcoin:"+r.gOt(),0,null)
t=4
w=7
return B.b(B.iH(q,A.f7,null),$async$Oo)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===A.k5?r.ga6o():r.gOt()
w=10
return B.b(r.Hp(n,r.d===A.k5?"Cash App tag":"Bitcoin address"),$async$Oo)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===A.k5?r.ga6o():r.gOt()
w=11
return B.b(r.Hp(n,r.d===A.k5?"Cash App tag":"Bitcoin address"),$async$Oo)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Oo,v)},
YX(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hQ().bbm(A.et),$async$YX)
case 3:r=e
if(r==null){w=1
break}w=4
return B.b(r.f8(),$async$YX)
case 4:s=e
t.n(new C.dMu(t,A.a.c5(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return B.h(u,v)}})
return B.i($async$YX,v)},
bZW(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===A.k5?C.h1Q(s.a):A.a.i(s.a)
if(r.length===0){t=v.d===A.k5?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.F(x.q).f.P(B.b_(u,u,u,u,u,A.q,u,B.d(t,u,u,u,u,u,u,u,u,u,u),u,A.S,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.F(x.q).f.P(B.b_(u,u,u,u,u,A.q,u,B.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,A.S,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new B.N(Date.now(),0,!1).u(0)
w=v.a
t.cGy(new B.cW(s,w.c.a,w.d,A.fc,v.d,r,v.f,v.gaog(),A.dn,new B.N(Date.now(),0,!1)))
w=v.c
w.toString
B.iC(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.eA(o,o,o,!0,!0,A.z_,o,1,!0,o,0,!1,o,!1,A.c,o,B.aF(o,o,o,o,A.EJ,o,o,o,new C.dMv(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.eDX,o,o,o,1,o,!0),m=B.m(26),l=B.G(D.eu.j(0.25),A.r,1),k=x.V,j=B.a([new B.a9(0,A.G,A.aW.j(0.25),A.eH,24)],k),i=x.p
j=B.p(o,B.u(B.a([B.d("YOU'RE ADDING",o,o,o,o,o,o,B.l(o,o,A.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,A.I,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),A.ar,B.eY(A.B,B.d("$"+B.dt(p.a.d),o,o,o,o,o,o,D.eoa,o,o,o),A.h,A.dp),A.ar,B.d("to your Growth Income wallet",o,o,o,o,o,o,B.l(o,o,D.eu.j(0.85),o,o,o,o,o,o,o,o,12,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.m,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(o,o,l,m,j,D.bHN,A.n),o,o,o,o,D.bht,o,o,o)
m=p.bW1()
l=p.awS(1,"Send the money to NGMY Pay",p.bZU())
w=p.awS(2,"Put this code in the payment note",p.bA1())
v=p.d===A.k5
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=B.l(o,o,A.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.awS(3,u,B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.e,o,o,o,o,o,2,B.bl(o,o,o,o,o,o,o,o,!0,new B.b1(4,B.m(18),new B.ax(A.c.j(0.08),1,A.r,-1)),o,o,o,o,o,A.rp,!0,o,o,o,o,new B.b1(4,B.m(18),D.aPr),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.epu,t,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ae,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.qR,!0,A.a5,o,A.am,o,o,o,o))
r=p.f!=null
v=r?8:22
u=B.m(20)
s=r?D.eu:A.c
s=B.G(s.j(r?0.5:0.12),A.r,1.4)
q=r?B.u(B.a([B.bu(B.m(14),new B.d2(D.aQP,new B.Db(p.f,o),o),A.ap),A.P,D.eaP,A.au],i),A.m,o,A.e,A.j,0,A.p):B.u(B.a([B.p(o,D.bBi,A.h,o,o,new B.o(D.eu.j(0.12),o,o,o,o,o,A.a6),o,54,o,o,o,o,o,54),A.T,D.eIK,A.d5,B.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a_,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.m,o,A.e,A.j,0,A.p)
v=p.b0U(4,"Screenshot of your payment",B.aJ(o,B.p(o,q,A.h,o,o,new B.o(A.rp,o,s,u,o,o,A.n),o,o,o,o,new B.L(v,v,v,v),o,o,o),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gca6(),o,o,o,o,o,o,!1,A.af),!0)
u=B.d(p.a.r,o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a_,o,1.4,!0,o,o,o,o,o,o,o,o),A.L,o,o)
s=B.m(18)
k=B.a([new B.a9(0,A.G,A.aW.j(0.45),A.dm,18)],k)
return B.ce(n,A.z_,B.as(new B.d2(A.a6N,B.cL(B.a([j,A.bs,m,A.bs,l,w,t,v,A.ar,u,A.aN,new B.a3(o,56,B.bQ(B.ld(D.bzZ,D.eSs,p.gbZV(),B.ff(o,o,A.K,o,o,o,o,o,o,A.c,o,o,o,A.K,new B.b5(B.m(18),A.V),o,o,o,o,o)),new B.o(o,o,o,s,k,D.bGv,A.n),A.b7),o)],i),o,D.bgY,o,o,A.ah,!1),o),o,o,o),o,!1,!1,o,o)},
bW1(){var w=null,v=new C.dMq(this),u=B.m(18),t=B.G(A.c.j(0.06),A.r,1)
return B.p(w,B.A(B.a([v.$3(A.k5,A.hI,"Cash App"),A.ez,v.$3(A.a1M,D.ahp,"Bitcoin")],x.p),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(A.rp,w,t,u,w,w,A.n),w,w,w,w,A.lU,w,w,w)},
b0U(d,e,f,g){var w,v=null,u=x.p,t=B.a([B.p(A.B,B.d(""+d,v,v,v,v,v,v,D.euk,v,v,v),A.h,v,v,D.aRy,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(B.C(B.p(v,v,A.h,D.eu.j(0.18),v,v,v,v,v,A.wj,v,v,v,2),1))
t=B.u(t,A.m,v,A.e,A.j,0,A.p)
w=g?12:20
return new B.KI(B.A(B.a([new B.a3(34,v,t,v),A.av,B.C(new B.B(new B.L(0,0,0,w),B.u(B.a([new B.B(A.UV,B.d(e,v,v,v,v,v,v,A2.a41,v,v,v),v),f],u),A.ad,v,A.e,A.j,0,A.p),v),1)],u),A.ad,v,A.e,A.j,0,v,v),v)},
awS(d,e,f){return this.b0U(d,e,f,!1)},
bZU(){var w,v,u,t,s=this,r=null,q=s.d===A.k5?s.ga6o():s.gOt(),p=B.m(20),o=B.m(20),n=s.d===A.k5,m=n?D.bFx:D.bHc,l=B.a([new B.a9(0,A.G,(n?D.aap:D.To).j(0.35),A.cv,16)],x.V),k=B.m(12)
n=s.d===A.k5
w=n?A.hI:D.ahp
k=B.p(r,B.V(w,n?D.aap:D.To,r,r,r,30),A.h,r,r,new B.o(A.c,r,r,k,r,r,A.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=B.d(n,r,r,r,r,r,r,B.l(r,r,A.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===A.k5
t=u?22:13
v=B.d(v,r,1,A.Z,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,t,r,r,A.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=B.C(B.u(B.a([n,A.bw,v,A.au,B.A(B.a([D.bwV,A.d4,B.d(s.d===A.k5?"Tap to pay $"+B.dt(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,A.ve,r,r,r)],u),A.m,r,A.e,A.j,0,r,r)],u),A.F,r,A.e,A.j,0,A.p),1)
return B.aD(!1,A.X,!0,r,B.aH(!1,p,!0,B.er(B.A(B.a([k,A.b9,v,B.aF(r,r,r,r,D.bw_,r,r,r,w?r:new C.dMt(s,q),r,r,r,r,"Copy",r)],u),A.m,r,A.e,A.j,0,r,r),r,new B.o(r,r,r,o,l,m,A.n),r,A.acR,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gc5v(),r,r,r,r,r,r,r),A.h,A.K,0,r,r,r,r,r,A.ac)},
bA1(){var w,v,u,t,s,r,q,p,o=null,n=B.m(20),m=B.G(A.b0.j(0.35),A.r,1),l=x.p,k=B.a([],l)
for(w=this.gaog().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new B.b3(12,12)
q=B.a([A.b0.j(0.28),A.b0.j(0.08)],u)
p=new B.ax(A.eN.j(0.4),1,A.r,-1)
k.push(B.p(A.B,new B.w(s,o,A.BO,o,o,o,o,o,o,o,o,o),A.h,o,o,new B.o(o,o,new B.c1(p,p,p,p),new B.bv(r,r,r,r),o,new B.a8(A.b4,A.bb,A.w,q,o,o),A.n),o,52,o,A.jX,o,o,o,42))}return B.p(o,B.u(B.a([B.A(k,A.m,o,A.b5,A.j,0,o,o),A.ab,B.A(B.a([B.C(B.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,B.l(o,o,A.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,A.a_,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),A.aa,B.hg(A.Yi,D.eUa,new C.dMp(this),B.fp(o,o,o,o,o,o,o,o,o,o,o,A.eN,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),A.m,o,A.e,A.j,0,o,o)],l),A.m,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(A.rp,o,m,n,o,o,A.n),o,o,o,o,A.bA,o,o,o)}}
C.qJ.prototype={
ad(){var w=this
return B.D(["id",w.a,"title",w.b,"start",w.c.aa(),"end",w.d.aa(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.qK.prototype={
ad(){var w=this
return B.D(["id",w.a,"when",w.b.aa(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gTs(){var w=this,v=B.a([],x.s),u=w.d
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
u=w.c
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
v.push(C.fOd(w.b))
u=w.e
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
return A.d.aF(v," \xb7 ")},
gkg(d){return this.c}}
C.lj.prototype={
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
w=J.b4(v.c,new C.c3K(),x.P)
w=B.z(w,w.$ti.k("ai.E"))
u.m(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.m(0,"thumbnailPath",w)
u.m(0,"printable",v.e)
u.m(0,"sortOrder",v.f)
return u}}
C.hU.prototype={
ahH(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.hU(v,u,t,s,r,h==null?w.f:h)},
b6e(d){var w=null
return this.ahH(w,w,w,w,d,w)},
czg(d,e,f){return this.ahH(d,e,null,null,null,f)},
b6d(d){var w=null
return this.ahH(w,w,w,d,w,w)},
cyW(d,e){var w=null
return this.ahH(w,w,d,w,e,w)},
ad(){var w=this,v=C.hw2(w.c),u=w.e,t=B.S(u).k("I<1,a0<n,@>>")
u=B.z(new B.I(u,new C.c3I(),t),t.k("ai.E"))
return B.D(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.b5_.prototype={}
C.Td.prototype={
S(){return new C.aAo(new B.ao(A.aq,$.at()),B.m6(0,null,null),B.a([],x.m))},
S3(d){return this.d.$1(d)}}
C.aAo.prototype={
Z(){var w,v=this
v.a0()
w=J.b4(v.a.c,new C.dQ9(),x.i)
w=B.z(w,w.$ti.k("ai.E"))
A.d.aX(w,new C.dQa())
v.d=w
v.Hz()},
p(){var w=this.w
w.R$=$.at()
w.O$=0
this.x.p()
this.a2()},
ab8(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ab8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:u.Hz()
u.n(new C.dQ3(u))
t=u.a
t.toString
s=u.d
s===$&&B.c()
w=2
return B.b(t.S3(s),$async$ab8)
case 2:r=e
if(u.c!=null){u.n(new C.dQ4(u))
t=u.c.F(x.q).f
s=B.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.P(B.b_(null,null,null,r?A.dk:A.aH,null,A.q,null,s,null,A.S,null,null,null,null,null,null,null,null,null,null))}return B.h(null,v)}})
return B.i($async$ab8,v)},
a5A(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a5A=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&B.c()
s=new C.hU(q,"New Category",A.Eg,4284773515,D.arI,p.length)
t.n(new C.dPN(t,s))
t.Hz()
p=t.c
if(p==null){w=1
break}w=3
return B.b(B.cg(null,null,!0,null,new C.dPO(s),p,null,!0,!0,x.i),$async$a5A)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.dPP(t,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a5A,v)},
ZU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=A.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.n(new C.dQ0(t,p))
q.bG(0,A.c_)
q=t.a.e
s=t.d
s===$&&B.c()
w=3
return B.b(C.c3F(p,q,s),$async$ZU)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.dQ1(t,r))
$.aS.x1$.push(new C.dQ2(t))
case 1:return B.h(u,v)}})
return B.i($async$ZU,v)},
a7w(d){return this.bFW(d)},
bFW(d){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$a7w=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&B.c()
t=r[d]
r=u.c
r.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.dPV(t),r,null,!0,!0,x.i),$async$a7w)
case 2:s=f
if(s!=null)u.n(new C.dPW(u,d,s))
return B.h(null,v)}})
return B.i($async$a7w,v)},
bDO(d){this.n(new C.dPU(this,d))
this.Hz()},
Hz(){var w,v,u=this.d
u===$&&B.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].b6e(v)},
c2Y(d,e){var w={}
w.a=e
this.n(new C.dQ_(w,this,d))},
Wu(d){return this.bUX(d)},
bUX(d){var w=0,v=B.j(x.H),u=this,t,s
var $async$Wu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=B.eH(new C.dPZ(u,d),!1,null,x.H)
w=2
return B.b(B.a7(s,!1).cr(t),$async$Wu)
case 2:return B.h(null,v)}})
return B.i($async$Wu,v)},
bwm(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?B.a([A.fn,A.bj],l):B.a([A.pU,A.eq],l)
w=B.m(16)
v=B.G(m?A.dc.j(0.35):A.dE,A.r,1)
u=B.V(A.dO,m?A.dE:A.e9,n,n,n,n)
t=B.C(B.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,B.l(n,n,m?A.aO:A.M,n,n,n,n,n,n,n,n,n,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.WG:A7.Ku
r=x.p
s=B.a([B.aH(!1,n,!0,B.A(B.a([u,A.aa,t,B.V(s,m?A.bP:A.aj,n,n,n,n)],r),A.m,n,A.e,A.j,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dPR(o),n,n,n,n,n,n,n)],r)
if(o.r){u=B.a([A.T],r)
t=o.y
if(t.length!==0){q=(m?D.rd:A.c).j(0.65)
p=B.m(12)
u.push(B.p(n,B.jT(!0,n,o.x,new C.dPS(o,d),t.length,n,n,n,n,!1,!1),A.h,n,A.a6I,new B.o(q,n,n,p,n,n,A.n),n,n,n,n,A.ch,n,n,n))}u.push(A.P)
t=o.w
q=B.l(n,n,m?A.aO:A.M,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=B.l(n,n,m?A.bP:A.aj,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?A.bj:A.aO
q=B.C(B.aK(n,A.U,!1,n,!0,A.q,n,B.aL(),t,n,n,n,n,n,2,B.bl(n,new B.b1(4,B.m(14),A.V),n,A.eE,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),A.z,!0,n,!0,n,!1,n,A.ae,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.dPT(o),n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,q,!0,A.a5,n,A.am,n,n,n,n),1)
m=o.f?n:o.gcgN()
p=B.bk(A.bh,n,n,n,n,n,A.iE,n,n,n,n,n)
u.push(B.A(B.a([q,new B.Hb(t,A.bh,n),A.d4,B.bJ(o.f?A.pv:D.ahy,m,p)],r),A.dD,n,A.e,A.j,0,n,n))
A.d.v(s,u)}return B.dg(n,B.u(s,A.ad,n,A.e,A.j,0,A.p),n,n,A.ba,new B.o(n,n,v,w,n,new B.a8(A.a1,A.a7,A.w,l,n,n),A.n),A.ib,n,n,A.Dx,A.bA,n,n,n)},
B(d){var w,v=this,u=null,t=B.K(d).ax.a===A.H,s=new C.b5_(t),r=t?A.de:A.bN,q=t?A.de:u,p=t?A.aO:A.M,o=B.d("Help Topics Admin",u,u,u,u,u,u,B.l(u,u,t?A.aO:A.M,u,u,u,u,u,u,u,u,u,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gc__()
if(n)n=A.Ql
else n=B.V(A.wO,t?A.aO:A.M,u,u,u,u)
w=x.p
o=B.eA(B.a([B.hg(n,B.d("Save",u,u,u,u,u,u,B.l(u,u,t?A.aO:A.M,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=R.aQX(A.aK,u,O.SI,A.nt,D.eQW,v.gbsR())
q=v.bwm(s)
n=B.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,B.l(u,u,t?A.bP:A.aj,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&B.c()
return B.ce(o,r,B.u(B.a([q,new B.B(A.Dx,n,u),B.C(H.fSt(!1,new C.dQ8(v,s),m.length,v.gc2X(),D.bfO,u,!1),1)],w),A.ad,u,A.e,A.j,0,A.p),u,!1,!1,p,u)}}
C.Nx.prototype={
S(){return new C.b6O()}}
C.b6O.prototype={
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
o=B.aK(s,A.U,!1,s,!0,A.q,s,B.aL(),o,s,s,s,s,s,2,D.bD_,A.z,!0,s,!0,s,!1,s,A.ae,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,A.a8,s,s,s,s,s,s,s,s,s,s,s,B.l(s,s,r?A.c:A.bi,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,A.a5,s,A.am,s,s,s,s)
w=x.aS
w=B.z(new B.I(D.bI9,new C.cEu(t),w),w.k("ai.E"))
w=B.c7(A.bH,w,A.bx,8,8)
v=x.gN
v=B.z(new B.I(D.cEc,new C.cEv(t),v),v.k("ai.E"))
u=x.p
v=B.cf(B.u(B.a([o,A.ab,w,A.ab,B.c7(A.bH,v,A.bx,0,8)],u),A.m,s,A.e,A.R,0,A.p),A.q,s,A.z,s,s,s,s,A.ah)
return B.ep(B.a([B.bG(!1,A.df,s,s,!0,s,s,new C.cEw(d),s,s),B.bJ(A.pC,new C.cEx(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.YF.prototype={
S(){return new C.aCg()},
o3(d){return this.d.$1(d)}}
C.aCg.prototype={
Z(){this.a0()
this.d=B.bi(this.a.c.e,!0,x.u)},
atn(){var w=this.a,v=w.c,u=this.d
u===$&&B.c()
return w.o3(v.b6d(u))},
a5C(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$a5C=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&B.c()
w=2
return B.b(u.aVW(new C.i7("q_"+1000*s,"",D.cCU,null,!1,r.length)),$async$a5C)
case 2:t=e
if(t!=null){u.n(new C.ezV(u,t))
u.atn()}return B.h(null,v)}})
return B.i($async$a5C,v)},
aVW(d){var w,v=this.c
v.toString
w=B.eH(new C.ezW(d),!1,null,x.u)
return B.a7(v,!1).cr(w)},
B(d){var w=this,v=null,u=B.K(d).ax.a===A.H,t=u?A.de:A.bN,s=u?A.de:v,r=u?A.aO:A.M,q=w.a.c
s=B.eA(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,B.d(q.b+" \u2014 Questions",v,v,v,v,v,v,B.l(v,v,u?A.aO:A.M,v,v,v,v,v,v,v,v,v,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=R.aQX(A.aK,v,O.SI,A.nt,D.eWa,w.gbtg())
q=w.d
q===$&&B.c()
q=q.length
if(q===0){q=B.as(B.d("No questions yet. Tap + Question.",v,v,v,v,v,v,B.l(v,v,u?A.bP:A.aj,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=B.hF(v,new C.eA0(w,new C.b5_(u)),q,D.bfX,v,A.ah,new C.eA1(),!1)
return B.ce(s,t,u,v,!1,!1,r,v)}}
C.YE.prototype={
S(){return new C.aCf()}}
C.aCf.prototype={
Z(){var w,v=this
v.a0()
w=v.a.c
v.d=new B.ao(new B.bb(w.b,A.aZ,A.aL),$.at())
w=B.bi(w.c,!0,x.bP)
v.e=w
if(A.d.gah(w))J.ci(v.e,D.a14)
w=v.a.c
v.f=w.d
v.r=w.e},
p(){var w=this.d
w===$&&B.c()
w.R$=$.at()
w.O$=0
this.a2()},
ab7(){var w=0,v=B.j(x.H),u=this,t
var $async$ab7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(Z.F6(78,1920),$async$ab7)
case 2:t=e
if(t!=null)u.n(new C.ezR(u,t))
return B.h(null,v)}})
return B.i($async$ab7,v)},
ac7(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ac7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=B.eH(new C.ezP(u),!1,null,x.dZ)
w=2
return B.b(B.a7(r,!1).cr(t),$async$ac7)
case 2:s=e
if(s!=null)u.n(new C.ezQ(u,s))
return B.h(null,v)}})
return B.i($async$ac7,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=B.K(a1).ax.a===A.H,g=h?A.de:A.bN,f=h?A.de:i,e=h?A.aO:A.M,d=B.d("Edit Question",i,i,i,i,i,i,B.l(i,i,h?A.aO:A.M,i,i,i,i,i,i,i,i,i,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=B.eA(B.a([B.dj(S.Yr,A.pC,new C.ezT(j,a1),B.bk(A.aK,i,i,i,A.c,i,i,i,i,i,i,i)),A.av],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=B.d("Question thumbnail",i,i,i,i,i,i,B.l(i,i,h?A.aO:A.M,i,i,i,i,i,i,i,i,13,i,i,A.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=B.m(14)
w=j.f
v=h?A.bP:A.aj
w=B.aJ(i,B.bu(e,K.aM1(B.m(14),A.bM,140,A.A_,v,w,1/0),A.ap),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbZZ(),i,i,i,i,i,i,!1,A.af)
e=B.d("Question users will tap",i,i,i,i,i,i,B.l(i,i,h?A.aO:A.M,i,i,i,i,i,i,i,i,13,i,i,A.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?A.bj:A.aO
u=B.m(16)
t=B.G(h?A.aI:A.aJ,A.r,1)
s=j.d
s===$&&B.c()
r=B.l(i,i,h?A.aO:A.M,i,i,i,i,i,i,i,i,15,i,i,A.a_,i,i,!0,i,i,i,i,i,i,i,i)
v=B.p(i,B.A(B.a([B.C(B.aK(i,A.U,!1,i,!0,A.q,i,B.aL(),s,i,i,i,i,i,2,B.bl(i,A.ep,i,A.bk,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l(i,i,h?A.bP:A.aj,i,i,i,i,i,i,i,i,i,i,i,A.cp,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),A.z,!0,i,!0,i,!1,i,A.ae,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,A.a8,i,i,i,i,i,i,i,i,i,i,i,r,!0,A.a5,i,A.am,i,i,i,i),1),new B.Hb(j.d,i,i)],a0),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(v,i,t,u,i,i,A.n),i,i,i,i,A.ef,i,i,i)
u=B.d("Printable document",i,i,i,i,i,i,B.l(i,i,h?A.aO:A.M,i,i,i,i,i,i,i,i,i,i,i,A.a_,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=B.it(A.aK,i,i,A.ag,i,new C.ezU(j),i,B.d("Shows a printable badge on this answer",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.aj,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=B.d("Stored answer (not AI)",i,i,i,i,i,i,B.l(i,i,h?A.aO:A.M,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=B.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.aj,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.rd:A.c
q=B.m(16)
p=B.m(16)
o=B.m(16)
n=B.G(A.bh.j(0.45),A.r,1)
m=B.p(i,D.buN,A.h,i,i,new B.o(A.bh.j(0.12),i,i,B.m(12),i,i,A.n),i,i,i,i,A.bk,i,i,i)
l=B.d("Open Document Editor",i,i,i,i,i,i,B.l(i,i,h?A.aO:A.M,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&B.c()
k=J.aa(k)
l=B.C(B.u(B.a([l,A.au,B.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.aj,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),A.F,i,A.e,A.j,0,A.p),1)
return B.ce(d,g,B.cL(B.a([f,A.P,w,A.d1,e,A.P,v,A.aN,u,A.P,t,A.au,s,A.ab,B.aD(!1,A.X,!0,q,B.aH(!1,p,!0,B.p(i,B.A(B.a([m,A.en,l,B.V(A.A6,h?A.bP:A.aj,i,i,i,16)],a0),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(i,i,n,o,i,i,A.n),i,i,i,i,A.fv,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gc4u(),i,i,i,i,i,i,i),A.h,r,0,i,i,i,i,i,A.ac)],a0),i,A.c1,i,i,A.ah,!1),i,!1,!1,i,i)}}
C.cVW.prototype={}
C.Te.prototype={
S(){return new C.aAq(B.k6(!0,null,!0,!0,null,null,!1))}}
C.aAq.prototype={
Z(){var w,v,u,t,s,r,q=this
q.a0()
w=J.dF(q.a.c,new C.dQK())
w=B.z(w,w.$ti.k("F.E"))
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
ato(d,e){var w,v,u,t,s,r=this.d
r===$&&B.c()
r=r.a
w=r.b
if(!w.gep())return
v=r.a
r=w.a
u=w.b
t=d+A.a.al(v,r,u)+e
s=A.a.o5(v,r,u,t)
this.d.bG(0,new B.bb(s,B.h1(A.bo,r+t.length),A.aL))},
aUb(d){var w,v,u,t,s=this.d
s===$&&B.c()
s=s.a
w=s.a
v=A.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=A.a.o5(w,v,v,u)
this.d.bG(0,new B.bb(t,B.h1(A.bo,v+u.length),A.aL))},
a9a(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a9a=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(Z.F6(78,1920),$async$a9a)
case 3:s=e
if(s==null){w=1
break}t.n(new C.dQq(t,s))
case 1:return B.h(u,v)}})
return B.i($async$a9a,v)},
W0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$W0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hQ().a37(A.et),$async$W0)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return B.b(s.f8(),$async$W0)
case 4:t.n(new r.dQv(t,e))
case 1:return B.h(u,v)}})
return B.i($async$W0,v)},
a9b(){var w=0,v=B.j(x.H),u=this,t,s,r,q
var $async$a9b=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.at()
s=new B.ao(A.aq,t)
r=new B.ao(new B.bb("https://",A.aZ,A.aL),t)
q=u.c
q.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.dQt(s,r),q,null,!0,!0,x.y),$async$a9b)
case 2:if(e===!0)u.n(new C.dQu(u,s,r))
s.R$=t
s.O$=0
r.R$=t
r.O$=0
return B.h(null,v)}})
return B.i($async$a9b,v)},
bxh(){var w,v,u,t,s,r=null,q=B.a([],x.a),p=this.d
p===$&&B.c()
p=A.a.fl(p.a.a,B.ad("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.I(p,new C.dQm(),B.S(p).k("I<1,n>")).bZ(0,new C.dQn())
for(p=J.aW(w.a),v=new B.hX(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gT(p)
if(A.a.a_(s,"## "))q.push(new C.lj("heading",A.a.i(A.a.aU(s,3)),r,r))
else if(A.a.a_(s,"\u2022 ")||A.a.a_(s,"- "))q.push(new C.lj("bullets",new B.I(B.a(s.split("\n"),u),new C.dQo(),t).bZ(0,new C.dQp()).aF(0,"\n"),r,r))
else q.push(new C.lj("text",s,r,r))}p=this.e
p===$&&B.c()
A.d.v(q,p)
if(q.length===0)q.push(D.a14)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.K(d).ax.a===A.H,m=new C.cVW(n),l=n?A.aG:A.fr,k=B.d(p.a.d,o,o,o,o,o,o,A.cq,o,o,o),j=x.p
k=B.eA(B.a([B.dj(S.Yr,A.a4z,new C.dQA(p,d),B.bk(A.aK,o,o,o,A.c,o,o,o,o,o,o,o)),A.aa],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?A.d3:A.iQ
v=B.c7(A.bH,B.a([p.uJ(E.Kv,"Bold",new C.dQB(p),m),p.uJ(E.WI,"Italic",new C.dQC(p),m),p.uJ(E.aeW,"Underline",new C.dQD(p),m),p.uJ(Ab.WP,"Heading",new C.dQE(p),m),p.uJ(O.Kw,"Bullets",new C.dQF(p),m),p.uJ(E.aeV,"Align",new C.dQG(),m),p.uJ(A.DX,"Link",p.gbSa(),m),p.uJ(A.p0,"Image",p.gbS9(),m),p.uJ(Y.X0,"Video",p.gbSb(),m),p.uJ(M.Y6,"Signature",new C.dQH(p),m),p.uJ(Y.Kx,"Divider",new C.dQI(p),m)],j),A.bx,4,4)
w=B.p(o,B.u(B.a([v,A.ar,B.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,B.l(o,o,n?A.fM:A.bv,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),A.ad,o,A.e,A.j,0,A.p),A.h,w,o,o,o,o,o,o,E.adR,o,o,o)
v=n?A.de:A.c
u=B.m(12)
t=B.G(n?A.fs:A.er,A.r,1)
s=B.a([new B.a9(0,A.G,A.x.j(n?0.35:0.08),A.cD,16)],x.V)
r=p.d
r===$&&B.c()
q=B.l(o,o,n?A.iz:A.aG,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=B.a([w,B.C(new B.B(A.c1,B.p(o,B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),r,o,o,o,o,o,2,B.bl(o,A.ep,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.l(o,o,n?A.fM:A.bv,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!0,p.f,A.ae,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,q,!0,A.a5,o,A.am,o,o,o,o),A.h,o,o,new B.o(v,o,t,u,s,o,A.n),o,o,o,o,A3.zK,o,o,o),o),1)],j)
n=p.e
n===$&&B.c()
if(n.length!==0){n=new B.hw(n,B.S(n).k("hw<1>"))
j.push(B.p(o,B.c7(A.bH,n.gdH(n).di(0,new C.dQJ(p,m),x.g5).dt(0),A.bx,0,8),A.h,o,o,o,o,o,o,o,A.JR,o,o,o))}return B.ce(k,l,B.u(j,A.m,o,A.e,A.j,0,A.p),o,!1,!1,o,o)},
uJ(d,e,f,g){var w=null,v=g.a,u=v?A.de:A.c,t=B.m(8),s=B.m(8)
return B.hJ(B.aD(!1,A.X,!0,t,B.aH(!1,s,!0,new B.B(A.ch,B.V(d,v?A.iz:A.aG,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.h,u,0,w,w,w,w,w,A.ac),w,e,w,w)}}
C.d7V.prototype={}
C.ay_.prototype={
a3(){return"_KbView."+this.b}}
C.an9.prototype={
S(){return new C.aAp(D.aMF)},
cFP(d,e){return this.e.$2$size(d,e)}}
C.aAp.prototype={
gaw2(){var w,v
if(this.e==null)return null
for(w=J.aW(this.a.c);w.C();){v=w.gT(w)
if(v.a===this.e)return v}return null},
gciV(){var w,v,u,t,s,r=this.gaw2()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
c_0(d){this.n(new C.dQj(this,d))},
c5D(d){this.n(new C.dQk(this,d))},
bvA(){this.n(new C.dQb(this))},
bvC(){this.n(new C.dQc(this))},
gb0s(){var w=B.bi(this.a.c,!0,x.i)
A.d.aX(w,new C.dQl())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.K(d).ax.a===A.H,f=new C.d7V(g),e=x.O
e=g?B.a([A.M.j(0.9),A.bj.j(0.85)],e):B.a([A.eq.j(0.55),A.lN.j(0.45)],e)
w=B.m(22)
v=B.G((g?A.aI:A.hq).j(0.55),A.r,1)
switch(i.d.a){case 0:g=i.bwy(f)
break
case 1:g=i.gaw2()
g.toString
g=i.bxf(f,g)
break
case 2:u=i.gaw2()
u.toString
t=i.gciV()
t.toString
s=B.aX(u.d)
r=B.m(16)
r=B.p(h,B.d(t.b,h,h,h,h,h,h,D.etr,h,h,h),A.h,h,h,new B.o(A.aK,h,h,r,h,h,A.n),h,h,h,h,A.bA,h,h,1/0)
q=g?A.aG:A.c
p=B.m(16)
o=B.G(g?A.aI:A.aJ,A.r,1)
n=B.a([new B.a9(0,A.G,A.x.j(g?0.28:0.06),A.e6,10)],x.V)
m=g?A.fn:A.pU
l=B.m(8)
k=B.V(A.p6,g?A.dE:A.e9,h,h,h,14)
j=x.p
j=B.u(B.a([new C.axY(f,i.gbvB(),u.c,s,"Answer",h),B.C(B.cL(B.a([r,A.ab,B.p(h,B.u(B.a([B.p(h,B.A(B.a([k,A.ez,B.d("Stored answer",h,h,h,h,h,h,B.l(h,h,g?A.dE:A.e9,h,h,h,h,h,h,h,h,11,h,h,A.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),A.m,h,A.e,A.R,0,h,h),A.h,h,h,new B.o(m,h,h,l,h,h,A.n),h,h,h,A.dZ,A.h0,h,h,h),new C.aWO(t.c,t.e,f,h)],j),A.F,h,A.e,A.j,0,A.p),A.h,h,h,new B.o(q,h,o,p,n,h,A.n),h,h,h,h,A.c1,h,h,1/0)],j),h,A.bfG,h,h,A.ah,!1),1)],j),A.ad,h,A.e,A.j,0,A.p)
g=j
break
default:g=h}return B.p(h,g,A.ap,h,h,new B.o(h,h,v,w,h,new B.a8(A.b4,A.bb,A.w,e,h,h),A.n),h,h,h,A.iY,h,h,h,h)},
aRY(d){var w,v,u,t=null,s=d.a,r=s?D.rd:A.c,q=A.aA.j(0.22)
q=B.a([new B.a9(0,A.G,q,A.J,14),new B.a9(0,A.G,A.x.j(s?0.28:0.06),A.J,8)],x.V)
w=B.G(s?A.aI:A.hq,A.r,2)
v=this.a
u=x.p
q=B.a([B.p(t,B.hN(v.cFP(v.d,72),A.ap),A.h,t,t,new B.o(r,t,w,t,q,t,A.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)A.d.v(q,B.a([A.ar,B.d("Tap to switch",t,t,t,t,t,t,B.l(t,t,A.dk,t,t,t,t,t,t,t,t,12,t,t,A.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return B.u(q,A.m,t,A.e,A.j,0,A.p)},
bwy(d){var w,v,u=this,t=null,s=u.a.r
s=B.as(s!=null?B.aJ(t,u.aRY(d),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,A.af):u.aRY(d),t,t,t)
w=d.a
v=B.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,B.l(t,t,w?A.aO:A.M,t,t,t,t,t,t,t,t,20,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t)
return B.cL(B.a([s,A.ay,v,A.ar,B.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,B.l(t,t,w?A.bP:A.aj,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),A.L,t,t),A.bs,B.ig(!0,t,t,A.z,F.aHS,new C.dQe(u,d),u.gb0s().length,t,A.dJ,A.ah,!0)],x.p),t,D.bfZ,t,t,A.ah,!1)},
bxf(d,e){var w,v,u,t,s=null,r=B.bi(e.e,!0,x.u)
A.d.aX(r,new C.dQg())
w=B.aX(e.d)
v=d.a
u=B.d("Tap a question to read the stored answer.",s,s,s,s,s,s,B.l(s,s,v?A.bP:A.aj,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=B.as(B.d("No questions in this category yet.",s,s,s,s,s,s,B.l(s,s,v?A.bP:A.aj,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=B.hF(s,new C.dQh(this,r,d,e),t,A.uf,s,A.ah,new C.dQi(),!1)
return B.u(B.a([new C.axY(d,this.gbvz(),e.c,w,e.b,s),new B.B(Ag.wo,u,s),B.C(v,1)],x.p),A.ad,s,A.e,A.j,0,A.p)}}
C.axY.prototype={
B(d){var w=this,v=null,u=w.c.a,t=B.aF(v,v,v,v,B.V(A.es,u?A.aO:A.M,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=B.m(12)
q=B.p(v,B.V(w.e,s,v,v,v,22),A.h,v,v,new B.o(r,v,v,q,v,v,A.n),v,v,v,v,A.ch,v,v,v)
return new B.B(D.bja,B.A(B.a([t,q,A.av,B.C(B.d(w.r,v,v,v,v,v,v,B.l(v,v,u?A.aO:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v),v)}}
C.a9n.prototype={
B(d){var w=null,v=this.c,u=B.aX(v.d),t=this.d.a,s=t?D.rd:A.c,r=B.m(14),q=B.m(14),p=B.m(14),o=B.G(t?A.aI:A.aJ,A.r,1),n=B.a([new B.a9(0,A.G,A.x.j(t?0.28:0.06),A.dG,6)],x.V),m=u.j(0.15),l=B.m(12)
l=B.p(w,B.V(v.c,u,w,w,w,22),A.h,w,w,new B.o(m,w,w,l,w,w,A.n),w,40,w,w,w,w,w,40)
return new B.fN(1,B.aD(!1,A.X,!0,r,B.aH(!1,q,!0,B.p(w,B.u(B.a([l,A.ar,B.d(v.b,w,2,A.Z,w,w,w,B.l(w,w,t?A.aO:A.M,w,w,w,w,w,w,w,w,10,w,w,A.I,w,1.1,!0,w,w,w,w,w,w,w,w),A.L,w,w)],x.p),A.m,w,A.b5,A.j,0,A.p),A.h,w,w,new B.o(w,w,o,p,n,w,A.n),w,w,w,w,A.ch,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),A.h,s,0,w,w,w,w,w,A.ac),w)}}
C.aWO.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=B.a([],q)
if(this.d){w=r.a
v=w?A.fn:A.pU
u=B.m(8)
t=B.V(A.rZ,w?A.dE:A.e9,s,s,s,14)
p.push(B.p(s,B.A(B.a([t,A.d4,B.d("Printable document",s,s,s,s,s,s,B.l(s,s,w?A.dE:A.e9,s,s,s,s,s,s,s,s,10,s,s,A.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),A.m,s,A.e,A.R,0,s,s),A.h,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,A.cH,A.ew,s,s,s))}A.d.v(p,J.b4(this.c,new C.c3G(r),x.l))
return B.u(p,A.F,s,A.e,A.j,0,A.p)}}
C.a9f.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new B.B(D.bdU,B.d(q.b,r,r,r,r,r,r,B.l(r,r,s.d.a?A.aO:A.M,r,r,r,r,r,r,r,r,15,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new B.B(A.hs,B.bu(B.m(12),K.aM1(r,A.bM,160,A.p0,r,w,1/0),A.ap),r)
case"video":v=q.c
q=v==null?q.b:v
return new B.B(A.hs,new C.axZ(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new B.B(A.wj,B.aH(!1,r,!0,B.d(q,r,r,r,r,r,r,B.l(r,r,s.d.a?A.cK:A.bh,r,A.mc,r,r,r,r,r,r,r,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cya(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=B.jm(v?A.aI:A.aJ,r,r,r,r,r)
q=B.d(q.b,r,r,r,r,r,r,B.l(r,r,v?A.ct:A.aI,r,r,r,r,r,r,r,r,r,A.cz,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=B.p(r,r,A.h,v?A.bP:A.aj,r,r,r,1,r,r,r,r,r,120)
return new B.B(A.zw,B.u(B.a([u,q,A.aN,t,A.au,B.d("Signature",r,r,r,r,r,r,B.l(r,r,v?A.bP:A.aj,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.F,r,A.e,A.j,0,A.p),r)
case"bullets":v=x.cl
q=B.z(new B.cQ(new B.a4(B.a(q.b.split("\n"),x.s),new C.cyb(),x.cc),new C.cyc(s),v),v.k("F.E"))
return new B.B(A.lm,B.u(q,A.F,r,A.e,A.j,0,A.p),r)
case"divider":return new B.B(A.hs,B.jm(s.d.a?A.aI:A.aJ,r,r,r,r,r),r)
default:q=q.b
if(A.a.i(q).length===0)return A.bF
return new B.B(A.fh,C.hqs(q,s.d),r)}}}
C.axZ.prototype={
S(){return new C.bcN()}}
C.bcN.prototype={
Z(){this.a0()
this.ab9()},
ab9(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$ab9=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=A.a.i(r.a.c)
if(J.aa(n)!==0)p=!J.cS(n,"http")&&!J.cS(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=B.W1(B.cq(n,0,null),null)
w=7
return B.b(J.afi(q),$async$ab9)
case 7:if(r.c==null){w=1
break}r.n(new C.d7W(r,q))
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
return B.i($async$ab9,v)},
p(){var w=this.d
if(w!=null)w.p()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?A.bj:A.eZ
u=B.m(12)
return B.p(A.B,B.V(A.pb,w?A.bP:A.aj,t,t,t,36),A.h,t,t,new B.o(v,t,t,u,t,t,A.n),t,120,t,t,t,t,t,t)}w=B.m(12)
v=s.a
u=J.afg(v)
return B.bu(w,new B.fN(u,new B.am(A.B,t,A.a9,A.q,B.a([new B.yZ(s,t),B.aF(t,t,t,t,B.V(v.f?A.af2:A.Ky,A.c,t,t,t,44),t,t,t,new C.d7Y(this,s),t,t,t,t,t,t)],x.p),t),t),A.ap)}}
C.anV.prototype={
a3(){return"NgmyMusicLane."+this.b}}
C.H1.prototype={
a3(){return"NgmyMusicRhymeScheme."+this.b}}
C.qP.prototype={}
C.anc.prototype={
S(){var w=null
return new C.aAr(new B.ao(A.aq,$.at()),B.m6(0,w,w),B.a([],x.m),D.B2,D.aA4,w,w)},
gdQ(){return this.d}}
C.aAr.prototype={
Z(){var w,v=this
v.a0()
w=B.bh(null,A.mv,null,1,null,v)
w.f2(0,!0)
v.as!==$&&B.aO()
v.as=w
v.z=A.d.gI(D.a_G).a},
p(){var w=this,v=w.as
v===$&&B.c()
v.p()
v=w.d
v.R$=$.at()
v.O$=0
w.e.p()
w.bpe()},
gamQ(){var w,v,u,t,s=this.x
if(s===D.B3)return null
s=s===D.B2
w=s?D.a_G:D.ZY
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?A.d.gI(w):null},
cjG(d){return this.n(new C.dQY(this,d))},
avQ(){$.aS.x1$.push(new C.dQP(this))},
Hq(d){return this.cj8(d)},
aUc(){return this.Hq(null)},
cj8(b0){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
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
a1=A.d.be(a0,new C.dQR())
o=!p&&!a1
d=a8.toLowerCase()
if(!(A.a.q(d,"fix")||A.a.q(d,"rewrite")||A.a.q(d,"re-write")||A.a.q(d,"rhyme better")||A.a.q(d,"better rhyme")||A.a.q(d,"sound better")||A.a.q(d,"improve")||A.a.q(d,"polish")||A.a.q(d,"make it rhyme")||A.a.q(d,"boresha")||A.a.q(d,"rekebisha")||A.a.q(d,"endeleza mistari")))a2=C.fXQ(a8)&&a1
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
l=C.fXQ(a8)&&!p
q.n(new C.dQS(q,a8))
q.avQ()
k=A.a.i(q.a.c)
if(J.aa(k)===0){q.n(new C.dQT(q))
q.avQ()
w=1
break}t=5
j=B.mE(k)
i=new B.I(a0,new C.dQU(),B.S(a0).k("I<1,n>")).aF(0,"\n\n")
a0=C.hJj(m,p,o,q.x,n,q.y,q.gamQ(),l)
a3=J.aa(i)!==0?"--- Conversation so far ---\n"+B.t(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+B.t(a8)
w=8
return B.b(B.qh(j,h,A.h4,null),$async$Hq)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=A.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=A.a.i(a0)}else a6=L.bxj(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.n(new C.dQV(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.n(new C.dQW(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.n(new C.dQX(q))
q.avQ()
w=r.pop()
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Hq,v)},
bB9(){return this.Hq("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=B.K(d).ax.a===A.H,p=q?A.D4:D.b5Y,o=x.p
o=B.a([B.u(B.a([B.C(s.cio(q),1),s.bAo(q)],o),A.m,r,A.e,A.j,0,A.p)],o)
if(s.f.length!==0&&!s.r){w=A.aM.j(0.55)
v=s.r?r:s.gbB8()
u=B.m(28)
t=B.a([A.aM,A.b_],x.O)
o.push(B.an(78,B.aD(!1,A.X,!0,r,B.aH(!1,r,!0,B.er(D.dMc,r,new B.o(r,r,r,u,B.a([new B.a9(0,A.G,A.aM.j(0.45),A.cD,16)],x.V),new B.a8(A.a1,A.a7,A.w,t,r,r),A.n),r,r,r),A.qO,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),A.h,A.K,10,r,w,A.qO,r,r,A.ac),r,r,r,14,r,r))}return B.p(r,new B.am(A.W,r,A.a9,A.q,o,r),A.h,p,r,r,r,r,r,r,r,r,r,r)},
cio(d){var w,v,u,t=this,s=null
if(t.x===D.B3)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=B.a([B.fBW(s,!1,A.K,0,0,w,B.fyj(t.cnS(d),A.T1,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=B.V(A.ahq,A.aA.j(0.5),s,s,s,52)
w.push(B.b2i(new B.B(A.em,B.u(B.a([u,A.ay,B.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,B.l(s,s,d?A.aB:A.dx,s,s,s,s,s,s,s,s,14,s,s,A.a_,s,1.45,!0,s,s,s,s,s,s,s,s),A.L,s,s),A.ay,B.c7(A.fB,B.a([t.afi("Full bongo love song ABAB",d),t.afi("Mix: group vs private jet \u2014 which flies?",d),t.afi("Song from John 3:16 + matching verses",d),t.afi("Fix my rhyme \u2014 paste your lines",d)],v),A.bx,8,8)],v),A.m,s,A.b5,A.j,0,A.p),s),!1))}else{v=t.r?1:0
w.push(new B.nn(D.bey,B.Vt(new B.nX(new C.dQQ(t,d),u+v,!0,!0,!0,0,B.rg(),s)),s))}return B.uI(0,s,A.q,t.e,A.z,s,s,A5.a6E,s,s,!1,s,A.ah,!1,w)},
cnS(d){var w=this.as
w===$&&B.c()
return B.c4(w,new C.dR4(this,d),null)},
cnU(d){var w,v=this,u=null,t=B.m(14),s=v.r?u:new C.dR6(v),r=A.x.j(d?0.35:0.06),q=B.m(14),p=B.G(A.bc.j(0.35),A.r,1),o=v.gamQ()
o=o==null?u:o.c
o=B.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,A.H8,u,u,u)
w=v.gamQ()
w=w==null?u:w.b
if(w==null)w="Style"
w=B.C(B.d(w,u,u,u,u,u,u,B.l(u,u,d?A.c:A.bi,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.p(u,B.A(B.a([o,A.aa,w,B.V(v.w?A.KX:A.qh,A.bc,u,u,u,20)],x.p),A.m,u,A.e,A.j,0,u,u),A.h,u,u,new B.o(r,u,p,q,u,u,A.n),u,u,u,u,A.rF,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),A.h,A.K,0,u,u,u,u,u,A.ac)},
arS(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=B.a([A.aW,A.aS],x.O)
break
case 1:w=B.a([A.bh,A.cK],x.O)
break
case 2:w=B.a([A.bz,A.aA],x.O)
break
default:w=n}v=m?6:0
u=B.m(14)
t=B.m(14)
s=this.r?n:new C.dQO(this,d)
r=B.m(14)
w=m?new B.a8(A.a1,A.a7,A.w,w,n,n):n
if(m)q=n
else q=A.x.j(g?0.3:0.05)
p=B.d(f,n,n,n,n,n,n,A.H8,n,n,n)
if(m)o=A.c
else o=g?A.al:A.bi
return B.C(B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.dg(n,B.u(B.a([p,B.d(e,n,n,n,n,n,n,B.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),A.m,n,A.e,A.j,0,A.p),n,n,A.ba,new B.o(q,n,n,r,n,w,A.n),A.X,n,n,n,A.jC,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),A.h,n,v,n,n,n,n,n,A.ac),1)},
cnV(d,e){var w,v,u,t=this,s=null,r=t.x===D.B2?t.z:t.Q,q=B.m(20)
if(r===d.a)r=A.bc.j(e?0.25:0.15)
else r=A.x.j(e?0.2:0.04)
w=B.m(20)
v=t.r?s:new C.dR7(t,d)
u=B.d(d.c,s,s,s,s,s,s,A.QE,s,s,s)
return B.aD(!1,A.X,!0,q,B.aH(!1,w,!0,new B.B(A.fF,B.A(B.a([u,A.d4,B.d(d.b,s,s,s,s,s,s,B.l(s,s,e?A.c:A.bi,s,s,s,s,s,s,s,s,10,s,s,A.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.m,s,A.e,A.R,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),A.h,r,0,s,s,s,s,s,A.ac)},
afi(d,e){var w=null,v=B.d(d,w,w,w,w,w,w,E.a4s,w,w,w),u=A.aA.j(e?0.2:0.1)
return B.mG(w,u,v,w,this.r?w:new C.dQZ(this,d),w,w,w,w)},
bAo(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=B.m(22),o=d?A.M.j(0.95):A.c,n=B.G(A.aA.j(0.2),A.r,1),m=x.p,l=B.a([],m)
if(q>0)l.push(new B.B(G.adC,B.d("$"+A.k.ab(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,B.l(r,r,A.aM.j(0.85),r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=B.l(r,r,d?A.c:A.bi,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.B3?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=B.C(B.aK(r,A.U,!1,r,!0,A.q,r,B.aL(),w,r,r,r,r,r,2,B.bl(r,A.ep,r,A.h1,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.l(r,r,d?A.c3:A.hU,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.z,!0,r,!0,r,!1,r,A.ae,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.dQL(s),r,!1,r,r,!1,r,!0,r,A.a8,r,r,r,r,r,r,r,r,r,r,r,v,!0,A.a5,r,A.am,r,r,r,r),1)
u=s.r
t=u?r:new C.dQM(s)
l.push(B.A(B.a([v,new B.Hb(w,A.aA,r),B.aD(!1,A.X,!0,r,B.aH(!1,r,!0,B.er(u?D.dMm:D.bx3,r,D.aSl,42,r,42),A.cE,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),A.h,r,0,r,r,A.cE,r,r,A.ac)],m),A.dD,r,A.e,A.j,0,r,r))
return B.p(r,B.u(l,A.ad,r,A.e,A.R,0,A.p),A.h,r,r,new B.o(o,r,n,p,r,r,A.n),r,r,r,A.ud,A.acc,r,r,r)}}
C.aIm.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.Tf.prototype={
ad(){var w=this
return B.D(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.Xp.prototype={
S(){return new C.axr(null,null)},
baU(){return this.f.$0()}}
C.axr.prototype={
Z(){var w,v=this,u=null
v.a0()
w=B.bh(u,D.bcZ,u,1,u,v)
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
w=B.bh(u,A.we,u,1,u,v)
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
w.bo5()},
c_2(){var w=this.d
w===$&&B.c()
w.en(0).bw(new C.d5v(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(B.aG(d,A.bO,x.w).w.a.a-32,360),h=A.x.j(0.82),g=k.gc_1(),f=x.l,e=J.e_(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&B.c()
e[v]=new B.BR(new C.d5w(k,v,d),j,w,j)}f=B.z(e,f)
w=k.d
w===$&&B.c()
u=B.m(28)
t=B.G(A.c.j(0.22),A.r,1.5)
s=B.a([new B.a9(2,A.G,A.b_.j(0.35),A.J,40),new B.a9(0,A.G,A.aK.j(0.25),A.fz,28)],x.V)
r=k.e
r===$&&B.c()
q=k.r
q===$&&B.c()
q=B.c4(new B.h3(B.a([r,q],x.U)),new C.d5x(k),j)
r=B.nm(A.j4,D.eTz,new C.d5y())
p=B.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,B.l(j,j,A.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,A.cp,j,1.45,!0,j,j,j,j,j,j,j,j),A.L,j,j)
o=x.p
n=B.A(B.a([k.aUd(A.jZ,"Resets in 24h"),A.aa,k.aUd(A.p6,"Help Topics ready")],o),A.m,j,A.b5,A.j,0,j,j)
m=B.a([],o)
k.a.toString
l=A.c.j(0.35)
m.push(B.C(B.dU(D.eOw,new C.d5z(k),B.d9(j,j,j,j,j,j,j,j,j,A.al,j,j,A.lS,j,new B.b5(B.m(14),A.V),new B.ax(l,1,A.r,-1),j,j,j,j)),1))
k.a.toString
m.push(A.av)
k.a.toString
l=B.m(14)
m.push(B.C(B.bJ(D.eTq,g,B.bk(A.aK,j,j,6,A.c,j,A.lS,A.aK.j(0.5),new B.b5(l,A.V),j,j,j)),1))
f.push(B.as(B.aJ(j,B.c4(w,new C.d5A(k),B.p(j,B.u(B.a([q,A.ay,r,A.T,p,A.P,n,A.bs,B.A(m,A.m,j,A.e,A.j,0,j,j)],o),A.m,j,A.e,A.R,0,A.p),A.h,j,j,new B.o(j,j,t,u,s,D.bEK,A.n),j,j,j,j,A6.adu,j,j,i)),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.d5B(),j,j,j,j,j,j,!1,A.af),j,j,j))
return B.aD(!1,A.X,!0,j,B.aJ(j,new B.am(A.W,j,A.a9,A.q,f,j),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,A.af),A.h,h,0,j,j,j,j,j,A.ac)},
aUd(d,e){var w=null,v=A.c.j(0.08),u=B.m(20),t=B.G(A.c.j(0.12),A.r,1)
return B.p(w,B.A(B.a([B.V(d,A.b_,w,w,w,13),A.ez,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.R,0,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.fF,w,w,w)}}
C.aHg.prototype={
aN(){this.aV()
this.aS()
this.dD()},
p(){var w=this,v=w.aY$
if(v!=null)v.a1(0,w.gdB())
w.aY$=null
w.a2()}}
C.LS.prototype={}
C.pl.prototype={}
C.anJ.prototype={
S(){return new C.aAN(B.a([],x.E),B.a([],x.s))}}
C.aAN.prototype={
gand(){return A.k.D(B.F4(this.a.c.a,new C.e_y(this)),0,1/0)},
a5K(){var w,v=this,u=v.d,t=v.gand()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)B.qg(u.a,t,!0,!1)},
HU(d,e){var w,v,u,t=this,s=t.gand(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gand()
if(w<v-0.005)B.h1S(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)B.qg(u.a,w,!0,!1)
B.qg(t.a.c.a,w,!0,!1)
B.zB(!0,!1,w,t.a.c.a)},
Z(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a0()
$.aS.c_$.push(o)
w=$.GS+1
$.GS=w
if(w===1){w=$.fPD
if(w!=null)w.$0()}v=$.fAm.h(0,A.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=B.bi(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=B.bi(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=B.lr(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,A.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=B.aLH(u,A.k.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new B.uB(w,u,r,q,s.e,p)}o.d=t}o.Nk()
o.a5K()
$.aS.x1$.push(new C.e0e(o))
o.Q=B.dD(A.nh,new C.e0f(o))
o.as=B.dD(A.fE,new C.e0g(o))},
p(){var w=this,v=w.Q
if(v!=null)v.a9(0)
v=w.as
if(v!=null)v.a9(0)
$.aS.hE(w)
C.his()
w.a2()},
cq_(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new B.N(Date.now(),0,!1)
v=p.r
if(!C.a5p(v,w)){if(C.fAo(p,q.e)){q.n(new C.e_X(q,p))
q.zq(!1,!0,!0)}else if(q.c!=null)q.n(new C.e_Y())
return}if(!C.c5V(v.c?v.bO():v)){q.n(new C.e_Z(p))
q.aUm(!1)
return}u=p.gBc()
if(u<=0)return
t=w.cU(B.bY(B.bw(w),B.bB(w),B.bL(w),12,0,0,0,0))
s=C.fAp(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.n(new C.e0_())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(A.d.be(q.e,new C.e00(r))){q.n(new C.e01(p,w,u))
return}q.n(new C.e02(q,p,u,w))
q.atV(new B.cW(r,p.a,u,A.fA,A.f8,"Clock-in daily earnings (local)",null,null,A.cg,w))},
iN(d){if(d===A.fm)this.Dm()},
Nk(){var w,v,u,t,s,r,q,p=this.d
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
q=new B.uB(u,t,s,r,v.e,q)
u=q}w.x=u},
PV(d){return this.coF(d)},
coF(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$PV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.Nk()
t.HU(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return B.b(x.r.b(s)?s:B.dP(s,x.H),$async$PV)
case 3:case 1:return B.h(u,v)}})
return B.i($async$PV,v)},
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
break}if(p.a[0]){q.n(new C.e_S(q,p))
q.PV(!1)}w=8
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
LO(d){return this.buN(d)},
buM(){return this.LO(null)},
buN(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$LO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return B.b(B.aw(),$async$LO)
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
if(l.d===A.fc&&l.x===A.cg&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.n(new C.e_z(j,t,i))
q.v(0,p)
r=B.z(q,B.a2(q).k("ck.E"))
t.w=r
w=4
return B.b(B.anK(t.a.c.a,r),$async$LO)
case 4:t.atw(!1,!0)
r=t.c
if(r!=null)r.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d("Balance updated: +$"+B.dt(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$LO,v)},
I5(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$I5=B.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=B.S(a2).k("a4<1>")
a4=B.z(new B.a4(a2,new C.e_T(),a3),a3.k("F.E"))
a5=a4
a6=B.a([],x.s)
w=J.aa(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=B.S(a2).k("I<1,n>")
e=B.z(new B.I(a2,new C.e_U(),a3),a3.k("ai.E"))
q=e
w=9
return B.b(B.l7("transactions","id,status",null,null,null,B.D(["id",q],x.N,x.j),null,!0,null,null,!1,A.bD),$async$I5)
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
j=A.d.bf(r.e,new C.e_V(l))
if(j<0)continue
i=r.e[j].x
if(J.y(k,1))a0=A.cg
else a0=J.y(k,2)?A.ke:A.dn
h=a0
if(!J.y(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===A.dn&&h===A.cg&&a3[j].d===A.fc)J.ci(a6,l)
if(i===A.dn&&h===A.ke&&r.e[j].d===A.eB){g=r.d
if(g!=null){r.HU(g.d+r.e[j].c,!1)
r.atw(!1,!0)}}}}if(o&&r.c!=null)r.n(new C.e_W())
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
return B.b(r.LO(a6),$async$I5)
case 13:w=11
break
case 12:w=14
return B.b(r.buM(),$async$I5)
case 14:case 11:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$I5,v)},
NW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$NW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:j=t.a.c
w=3
return B.b(B.v3(j.a,j),$async$NW)
case 3:i=e
if(t.c==null){w=1
break}t.n(new C.e_D(t,i))
t.Nk()
t.a5K()
j=t.a.c.a
s=i.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return B.b(H.yn(s[0],p,q,o,r,!0,j),$async$NW)
case 4:j=e.a
n=j[4]
m=B.bi(j[2],!0,x.o)
l=j[5]
t.w=B.bi(j[1],!0,x.N)
t.r=j[3]
t.d=n
t.Nk()
t.a5K()
k=C.fAo(n,m)
if(k)t.HU(n.d,!1)
t.Nk()
if(t.c==null){w=1
break}t.n(new C.e_E(t,n,m,l))
if(k)t.zq(!1,!0,!0)
else t.PV(!1)
case 1:return B.h(u,v)}})
return B.i($async$NW,v)},
zq(d,e,f){return this.c97(d,e,f)},
atw(d,e){return this.zq(d,!1,e)},
aUm(d){return this.zq(!1,d,!1)},
c97(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
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
H.LT(t.w,p,q,s,o,r)
if(f)t.PV(d)
case 1:return B.h(u,v)}})
return B.i($async$zq,v)},
c_i(){this.n(new C.e_M())
this.atw(!1,!0)},
abM(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===A.cg&&B.rd(d)){w=r.a
w.f.$1(new B.cW(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.c5S(q,d)
v=q.d=B.F4(r.a.c.a,new C.e_J(r))
r.at=r.a.c.d=v
B.qg(q.a,v,!0,!1)
if(r.c!=null)r.n(new C.e_K(r,d))
r.zq(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new B.cW(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===A.dn
if(w&&d.d===A.fc)s=!1
else if(w&&d.d===A.eB){r.HU(q.d-d.c,!0)
s=!0}else{C.c5S(q,d)
w=d.d
s=w===A.eB||w===A.jt
r.HU(q.d,s)}r.n(new C.e_L(r,d))
w=d.d
r.zq(s,e,w===A.eB||w===A.jt||d.x===A.cg||w===A.fA)},
atV(d){return this.abM(d,!0,!1)},
aVg(d,e){return this.abM(d,!0,e)},
aVf(d,e){return this.abM(d,e,!1)},
c2b(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.hLt(u,e,d)){v.lz("This plan is already active.")
return}w=B.h1o(u.a,d,e)
if(C.hHW(u.a,v.e,w)){v.lz("You already own this plan.")
return}if(u.d<g){v.lz("Insufficient balance. Add funds in the Wallet tab first.")
return}v.n(new C.e_N(v))
v.n(new C.e_O(v,u,new B.uB(d,e,0.0286,new B.N(Date.now(),0,!1),0,0)))
v.atV(new B.cW(w,u.a,g,A.jt,A.f8,"Direct investment buy: "+d,null,null,A.cg,new B.N(Date.now(),0,!1)))
v.n(new C.e_P(v))
v.lz("Plan purchased: "+d)},
lz(d){var w=null,v=this.c
if(v==null)return
v.F(x.q).f.P(B.b_(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
Ya(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ya=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hl(s,new C.akN(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$Ya)
case 3:w=4
return B.b(t.NW(),$async$Ya)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Ya,v)},
ace(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ace=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hl(s,new C.afC(r,B.a([r],x.d9),A.NQ,t.a.d,t.gaVe(),t.gaUl(),null),!1,null,x.X),$async$ace)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ace,v)},
acc(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hl(s,new C.ain(r,t.a.d,t.e,t.gaVe(),t.gaUl(),new C.e_R(t),null),!1,"LocalGrowthGameCenter",x.X),$async$acc)
case 3:case 1:return B.h(u,v)}})
return B.i($async$acc,v)},
a9W(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$a9W=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new B.N(s,0,!1)
w=C.fAo(j,t.e)?3:4
break
case 3:w=5
return B.b(t.aUm(!0),$async$a9W)
case 5:case 4:if(j.x==null){t.lz("Choose an investment plan first, then come back to clock in.")
t.n(new C.e_F(t))
w=1
break}if(B.mu(r)===6||B.mu(r)===7){t.lz("Clock-in opens Monday through Friday.")
w=1
break}if(!C.fQl(r)){t.lz("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a5p(q,r)&&j.fy>0){t.lz("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!B.a0a(q,r))if(!B.a0a(j.fr,r)){q=B.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,B.J)(p),++n){m=p[n]
if(A.a.i(m.b.toLowerCase())===A.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new B.aCA(m.y,l,m.a))}}q=B.h0Q(q,r)}else q=p
else q=p}else q=!1
if(q){t.lz("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.lz("You are already clocked in for today.")
w=1
break}k=C.hjR(r)
q=j.a
t.n(new C.e_G(j,r,k))
t.aVf(new B.cW("local_clockin_manual_"+q+"_"+s,j.a,0,A.fA,A.f8,"Clock-in session started (local)",null,null,A.cg,r),!1)
t.lz("Clock-in started. Keep Growth Income open for today.")
case 1:return B.h(u,v)}})
return B.i($async$a9W,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.K(d).ax.a===A.H?A.iU:A.oO
if(l.d==null)return B.ec(A.k9,j,!0)
w=x.o
v=B.R(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,B.J)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.m(0,q,r)}p=A.a.i(l.a.c.a.toLowerCase())
u=$.fdB
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
A.d.v(w,new B.a4(v,new C.e06(),B.S(v).k("a4<1>")))
A.d.aX(w,new C.e07())
v=l.d
v.toString
u=C.hy3(l.a.c)
t=l.d
t.toString
t=B.ec(new C.ajf(t,l.a.e,l.z,l.gc2a(),l.aPx(),D.f09),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=B.ec(new C.ayb(l.aPx(),q,n,o,w,new C.e08(l),l.gc4e(),new C.e09(l),D.f0a),j,!0)
m=B.aG(d,k,x.w).w
n=l.y
return new B.U8(n,new C.e0a(l),B.aD(!1,A.X,!0,k,new B.a3(1/0,m.a.b,new B.am(A.W,k,A.a9,A.q,B.a([B.bU(0,B.ec(k,j,!0),0,0,0),B.bU(0,B.br(!1,[new C.aya(v,u,w,l.gbUZ(),new C.e0b(l),new C.e0c(l),new C.e0d(d),l.gc53(),l.gc5_(),D.f08),t,o][n],!0,!1,A.ag,!0,!0),0,0,0),B.an(0,l.bx_(),k,k,0,0,k,k)],x.p),k),k),A.h,j,0,k,k,k,k,k,A.ac),k)},
aPx(){var w=null,v=B.a([D.eu.j(0.24),A.M.j(0.72)],x.O)
return B.hJ(B.aH(!1,w,!0,B.p(A.B,D.bBs,A.h,w,w,new B.o(w,w,B.G(D.eu.j(0.38),A.r,1),w,B.a([new B.a9(0,A.G,D.eu.j(0.18),A.J,16)],x.V),new B.a8(A.ax,A.aD,A.w,v,w,w),A.a6),w,40,w,w,w,w,w,40),A.cE,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e_C(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bx_(){var w=null,v=B.m(27),u=B.G(A.at.j(0.45),A.r,1),t=B.a([new B.a9(0,A.G,A.x.j(0.5),A.eH,24),new B.a9(-2,A.G,A.at.j(0.12),A.J,18)],x.V)
return new B.B(A.JR,B.br(!0,B.as(new B.d2(D.aQI,B.p(w,B.cj(new C.e_A(this)),A.h,w,w,new B.o(w,w,u,v,t,D.bEg,A.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,A.ag,!0,!1),w)},
bWD(d){var w=null,v=this.y===d,u=D.cGj[d],t=u.b,s=u.a,r=""+d,q=x.W
return B.C(B.di(w,!0,w,B.aJ(A.c5,B.qV(B.ql(v?B.V(s,D.a7V,new B.cv("on"+r,q),w,w,21):B.u(B.a([B.V(s,A.c.j(0.62),w,w,w,19),A.bw,B.d(t,w,1,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,new B.cv("off"+r,q),A.b5,A.j,0,A.p),A.ib,B.tg(),A.ba,A.ba,B.a_q())),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e_I(this,d),w,w,w,w,w,w,!1,A.af),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,A.bX,w),1)}}
C.aya.prototype={
bTP(d){return C.fAp(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
B.K(d)
w=A.c.j(0.58)
v=f.e
u=B.S(v).k("a4<1>")
u=B.oJ(new B.a4(v,new C.d9J(),u),3,u.k("F.E"))
t=B.z(u,B.a2(u).k("F.E"))
v=f.c
s=v.x
r=new B.N(Date.now(),0,!1)
q=v.f
p=C.a5p(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.fQl(r)
m=v.gBc()
l=B.a([D.eu.j(0.24),A.M.j(0.72)],x.O)
k=B.G(D.eu.j(0.38),A.r,1)
j=x.V
i=B.a([new B.a9(0,A.G,D.eu.j(0.18),A.J,16)],j)
l=B.aH(!1,e,!0,B.p(A.B,B.V(A.hI,D.eu,e,e,e,19),A.h,e,e,new B.o(e,e,k,e,i,new B.a8(A.ax,A.aD,A.w,l,e,e),A.a6),e,38,e,e,e,e,e,38),A.cE,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=B.m(14)
k=B.m(14)
j=B.a([new B.a9(0,A.G,A.b0.j(0.45),A.cD,16)],j)
h=B.m(12)
g=x.p
j=B.bJ1(!1,l,"GROWTH INCOME",B.aH(!1,i,!0,new B.a3(44,44,new B.am(A.W,e,A.a9,A.h,B.a([B.p(A.B,B.p(A.B,D.buc,A.h,e,e,new B.o(A.i9.j(0.78),e,e,h,e,e,A.n),e,36,e,e,e,e,e,36),A.h,e,e,new B.o(e,e,e,k,j,D.bFA,A.n),e,42,e,e,e,e,e,42),B.an(e,B.p(A.B,D.bAy,A.h,e,e,new B.o(A.cV,e,B.G(D.a9R,A.r,2),e,e,e,A.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.fSS(A.h_,new C.d9K(),k)
k=B.A(B.a([B.C(C.fSR(new C.d9L(f,A.tT,n),new B.N(Date.now(),0,!1),h,k),1),A.nD,B.C(new B.tL(new C.d9M(f,A.tT),e,new B.h3(B.a([$.xF(),$.a0x()],x.U)),e),1)],g),A.m,e,A.e,A.j,0,e,e)
h=f.bWN(A.tT,D.eu)
v=B.C(f.cmk("Total Profit","$"+B.dt(v.e),A.tT),1)
u=u?e:s.b
return B.ec(B.cf(B.u(B.a([j,A.T,k,A.ab,new C.ay9(f.d,m,q,p,n,o,D.eu,f.gbTO(),f.f,e),A.ab,h,A.T,B.A(B.a([v,A.nD,B.C(f.b0o("Total Investment","$"+B.dt(u==null?0:u),A.tT,f.r),1)],g),A.m,e,A.e,A.j,0,e,e),A.T,f.bTL(d,t,D.eu,w)],g),A.ad,e,A.e,A.j,0,A.p),A.q,e,A.z,e,A.Vw,e,e,A.ah),D.a9R,!0)},
atv(d,e,f,g,h){var w=null,v=B.m(h),u=B.G(A.c.j(0.09),A.r,1),t=B.a([new B.a9(0,A.G,A.x.j(0.4),A.dm,18)],x.V)
return B.p(w,B.bu(B.m(h-1),new B.am(A.W,w,A.a9,A.q,B.a([B.bU(0,B.bQ(w,new B.o(w,w,w,w,w,new B.bS(f,1.15,A.w,w,0,B.a([e.j(0.22),e.j(0)],x.O),w,w),A.n),A.b7),0,0,0),new B.B(g,d,w)],x.p),w),A.ap),A.h,w,w,new B.o(w,w,u,v,t,D.bED,A.n),w,w,w,w,w,w,w,w)},
aUk(d,e,f,g){return this.atv(d,e,f,A.ag,g)},
b2e(d,e,f,g,h,i,j){var w=null,v=B.an(-14,B.V(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=B.m(30),s=B.G(f.j(0.4),A.r,1),r=x.p,q=this.aUk(new B.a3(w,80,new B.am(A.W,w,A.a9,A.q,B.a([v,new B.B(D.bf0,B.u(B.a([B.p(w,B.A(B.a([B.V(e,f,w,w,w,15),A.ez,B.d(h.toUpperCase(),w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.R,0,w,w),A.h,w,w,new B.o(u,w,s,t,w,w,A.n),w,w,w,w,A.adH,w,w,w),A.b6,B.eY(A.a1,B.d(i,w,1,w,w,w,w,B.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,A.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,A.e8)],r),A.F,w,A.e,A.j,0,A.p),w)],r),w),w),f,A.kM,22)
if(g==null)return q
return B.aH(!1,B.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
bWN(d,e){var w,v,u=null,t=B.G(e.j(0.55),A.r,2),s=e.j(0.12),r=x.p,q=B.a([],r)
for(w=0;w<3;++w){v=new B.b3(3,3)
q.push(B.p(u,u,A.h,u,u,new B.o(e,u,u,new B.bv(v,v,v,v),u,u,A.n),u,D.cst[w],u,D.bis,u,u,u,5))}v=x.V
return this.atv(B.A(B.a([B.p(u,B.A(q,A.dD,u,A.b5,A.j,0,u,u),A.h,u,u,new B.o(s,u,t,u,u,u,A.a6),u,42,u,u,u,u,u,42),D.efe,B.C(B.u(B.a([D.eQ7,A.bw,B.A(B.a([B.p(u,u,A.h,u,u,new B.o(e,u,u,u,B.a([new B.a9(0,A.G,e,A.J,6)],v),u,A.a6),u,7,u,u,u,u,u,7),A.bp,new B.dk(1,A.cj,B.d("Live \xb7 real-time statistics",u,1,A.Z,u,u,u,B.l(u,u,A.c.j(0.6),u,u,u,u,u,u,u,u,11.5,u,u,A.a_,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],r),A.m,u,A.e,A.j,0,u,u)],r),A.F,u,A.e,A.j,0,A.p),1),A.aa,B.aH(!1,B.m(16),!0,B.p(u,D.baG,A.h,u,u,new B.o(u,u,u,B.m(16),B.a([new B.a9(0,A.G,A.aH.j(0.35),A.cD,14)],v),D.bFl,A.n),u,u,u,u,D.bf3,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.z,u,u,u,u,u,u,u)],r),A.m,u,A.e,A.j,0,u,u),e,A.a1,A.V1,26)},
b0o(d,e,f,g){var w,v=null,u=A.a.q(d.toLowerCase(),"profit"),t=u?A.cV:A.b3,s=B.p(v,v,A.h,v,v,new B.o(t,v,v,D.aOY,v,v,A.n),v,v,v,A.mx,v,v,v,5),r=x.p
r=B.a([s,A.b9,B.C(B.u(B.a([B.A(B.a([B.V(u?A.rX:A.x3,t,v,v,v,14),A.ez,new B.dk(1,A.cj,B.d(d,v,1,A.Z,v,v,v,B.l(v,v,A.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),A.m,v,A.e,A.j,0,v,v),A.ar,B.eY(A.a1,B.d(e,v,1,v,v,v,v,D.eo4,v,v,v),A.h,A.e8)],r),A.F,v,A.b5,A.j,0,A.p),1)],r)
s=g==null
if(!s)r.push(new B.B(A.abY,B.V(A.ek,A.c.j(0.35),v,v,v,v),v))
w=this.aUk(new B.a3(v,66,B.A(r,A.m,v,A.e,A.j,0,v,v),v),t,A.lc,20)
if(s)return w
return B.aH(!1,B.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cmk(d,e,f){return this.b0o(d,e,f,null)},
bTL(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.p(m,m,A.h,m,m,new B.o(f,m,m,m,B.a([new B.a9(0,A.G,f,A.J,8)],x.V),m,A.a6),m,9,m,m,m,m,m,9),k=B.d("LIVE ACTIVITY",m,m,m,m,m,m,B.l(m,m,A.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,A.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=A.c.j(0.07),i=B.m(20),h=x.p
i=B.a([B.A(B.a([l,A.a3k,k,A.b6,B.p(m,B.d(""+e.length,m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.h,m,m,new B.o(j,m,m,i,m,m,A.n),m,m,m,m,A.VJ,m,m,m)],h),A.m,m,A.e,A.j,0,m,m),A.P],h)
if(e.length===0)i.push(new B.B(A.US,B.u(B.a([B.V(A.hg,g,m,m,m,30),A.ar,B.d("Nothing yet",m,m,m,m,m,m,B.l(m,m,A.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.bw,B.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,A.a_,m,m,!0,m,m,m,m,m,m,m,m),A.L,m,m)],h),A.m,m,A.e,A.j,0,A.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=B.a([],h)
if(w>0)k.push(new B.lU(1,m,m,m,m,A.c.j(0.07),m))
j=e[w]
v=j.d
u=v===A.eB||v===A.jt
t=u?A.km:D.eu
g=A.c.j(0.5)
v=new B.b3(12,12)
s=B.a([t.j(0.28),t.j(0.08)],l)
r=new B.ax(t.j(0.35),1,A.r,-1)
v=B.p(A.B,B.V(u?A.rX:A.uC,t,m,m,m,18),A.h,m,m,new B.o(m,m,new B.c1(r,r,r,r),new B.bv(v,v,v,v),m,new B.a8(A.ax,A.aD,A.w,s,m,m),A.n),m,38,m,m,m,m,m,38)
s=C.hFS(j)
q=C.fUx(j.y)
s=B.u(B.a([new B.w(s,m,A.mV,m,m,m,m,A.Z,m,1,m,m),A.bw,new B.w(q,m,new B.E(!0,g,m,m,m,m,11,A.a_,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),A.F,m,A.e,A.j,0,A.p)
q=t.j(0.14)
p=new B.b3(20,20)
o=u?"-":"+"
n=B.dt(j.c)
q=B.p(m,new B.w(o+"$"+n,m,new B.E(!0,t,m,m,m,m,13,A.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),A.h,m,m,new B.o(q,m,m,new B.bv(p,p,p,p),m,m,A.n),m,m,m,m,A.nn,m,m,m)
j=C.h0s(j)
k.push(new B.B(G.UY,new B.cC(A.aY,A.e,A.j,A.m,m,A.p,m,0,B.a([v,A.b9,new B.bF(1,A.bn,s,m),B.u(B.a([q,A.d5,new B.w(j,m,new B.E(!0,g,m,m,m,m,10,A.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),A.dD,m,A.e,A.j,0,A.p)],h),m),m))
A.d.v(i,k)}return this.atv(B.u(i,A.m,m,A.e,A.j,0,A.p),f,A.b4,D.bf9,26)}}
C.ay9.prototype={
S(){return new C.bdw(null,null)},
cFx(d){return this.z.$1(d)},
cGJ(){return this.Q.$0()}}
C.bdw.prototype={
Z(){var w,v=this,u=null
v.a0()
w=B.bh(u,A.oU,u,1,u,v)
w.cF(0)
v.d!==$&&B.aO()
v.d=w
w=B.bh(u,D.bcQ,u,1,u,v)
w.cF(0)
v.e!==$&&B.aO()
v.e=w
w=B.bh(u,A.u8,u,1,u,v)
v.f!==$&&B.aO()
v.f=w
v.b1j()},
gb3X(){var w=new B.N(Date.now(),0,!1)
if(B.mu(w)===6||B.mu(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
b1j(){var w=this,v=w.a,u=v.e||v.f||w.gb3X()
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
this.b1j()},
p(){var w=this,v=w.d
v===$&&B.c()
v.p()
v=w.e
v===$&&B.c()
v.p()
v=w.f
v===$&&B.c()
v.p()
w.bom()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gb3X()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=A.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?A.at:g.x
g=g.r?new C.d9C(i):h
v=B.m(32)
s=B.m(32)
r=f?D.cVf:D.cVd
q=B.G((f?D.nQ:A.bd).j(0.28),A.r,1.4)
p=x.V
o=B.a([new B.a9(0,A.G,(f?A.at:A.bc).j(0.16),A.fz,28)],p)
n=x.p
m=B.a([],n)
if(f)A.d.v(m,B.a([B.an(h,i.a8u(D.nQ,130),h,h,h,-24,-30,h),B.an(-36,i.a8u(A.at,140),h,h,-28,h,h,h)],n))
else A.d.v(m,B.a([B.an(h,i.a8u(A.bc,120),h,h,h,-30,-36,h),B.an(-40,i.a8u(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=B.m(32)
k=i.f
k===$&&B.c()
m.push(B.bU(0,B.e8(B.bu(l,new B.eo(B.c4(k,new C.d9D(i),h),h),A.ap),!0,h),0,0,0))}if(f){l=B.m(32)
k=i.f
k===$&&B.c()
m.push(B.bU(0,B.e8(B.bu(l,new B.eo(B.c4(k,new C.d9E(i),h),h),A.ap),!0,h),0,0,0))}l=B.m(999)
k=A.c.j(0.06)
j=B.G(A.c.j(0.16),A.r,1)
m.push(B.an(h,new B.d2(D.aQO,B.p(h,B.A(B.a([B.p(h,h,A.h,h,h,new B.o(t,h,h,h,B.a([new B.a9(0,A.G,t.j(0.5),A.J,8)],p),h,A.a6),h,8,h,h,h,h,h,8),A.aa,new B.dk(1,A.cj,B.d(u,h,1,A.Z,h,h,h,D.etc,h,h,h),h)],n),A.m,h,A.e,A.R,0,h,h),A.h,h,h,new B.o(k,h,j,l,h,h,A.n),h,h,h,h,A.h1,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.fSS(A.h_,new C.d9F(),l)
m.push(C.fSR(new C.d9G(i,f,t,e,w),new B.N(Date.now(),0,!1),j,l))
return B.aH(!1,v,!0,B.dg(h,new B.am(A.W,h,A.a9,A.h,m,h),h,h,A.ba,new B.o(h,h,q,s,o,new B.a8(A.ax,A.aD,A.w,r,h,h),A.n),A.zs,h,392,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
a8u(d,e){var w=null
return B.e8(B.p(w,w,A.h,w,w,new B.o(w,w,w,w,w,new B.bS(A.B,0.5,A.w,w,0,B.a([d.j(0.22),d.j(0)],x.O),w,w),A.a6),w,e,w,w,w,w,w,e),!0,w)}}
C.b7i.prototype={
aUn(d,e,f,g){var w=new B.b0($.a1().r,A.aw,null,null,B.a([],x.g)),v=e.a,u=e.b,t=u-f
w.N(new B.bj(v,t))
w.N(new B.dl(v,u,v+f,u))
w.N(new B.dl(v,u,v,u+f))
w.N(new B.dl(v,u,v-f,u))
w.N(new B.dl(v,u,v,t))
w.N(new B.bW())
d.b4(w,g)},
a5(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=a8/2,b0=b3.b,b1=b0/2
for(w=a7.b,v=w*6.283185307179586,u=0;u<16;++u){t=A.k.J(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=A.k.J(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+A.o.J(u,3))+u)+1)/2
$.a1()
q=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
q.r=A.c.j(0.1+r*0.5).gt(0)
a7.aUn(b2,new B.v(t*a8,s*b0),2+r*2.2,q)}for(a8=b2.a,b0=w*2,p=a7.e,o=0;o<3;++o){n=A.k.J(b0+o/3,1)
$.a1()
m=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
m.b=A.ak
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
d=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
d.r=b0.j(f).gt(0)
l=d.L()
a8.drawCircle(0,0,6.5,l)
l.delete()
h=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
h.b=A.ak
h.c=1.2
h.r=p.j(f).gt(0)
l=h.L()
a8.drawCircle(0,0,6.5,l)
l.delete()
if(e>0.6&&f>0.35){h=$.h5V()
g=h.b
a0=g.c
g=g.a.c
h.a5(b2,new B.v(-a0/2,-g.gbd(g)/2))}a8.restore()
break
case 1:$.a1()
a0=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a0.r=p.j(f*0.95).gt(0)
a7.aUn(b2,new B.v(h,g),3+f*3,a0)
break
case 2:$.a1()
a0=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a0.r=A.c.j(f*0.8).gt(0)
l=a0.L()
a8.drawCircle(h,g,1.6+f*1.8,l)
l.delete()
break
default:a0=Math.cos(j)
a1=Math.sin(j)
a2=7+f*7
$.a1()
a3=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
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
g=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
g.r=p.j(o*0.85).gt(0)
l=g.L()
a8.drawCircle(a9+w*144,b1+h*144,1.4+o*2.6,l)
l.delete()}w=Math.cos(a5)
h=Math.sin(a5)
$.a1()
g=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
g.r=b0.j(0.28).gt(0)
g.z=N.pi
l=g.L()
a8.drawCircle(a9+w*144,b1+h*144,7,l)
l.delete()}},
ao(d){return d.b!==this.b}}
C.b7h.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.a1(),a4=B.U()
a4.r=this.d.j(0.075).gt(0)
for(w=a5.a,v=this.b,u=v*6.283185307179586,t=x.g,a3=a3.r,s=0;s<14;++s){r=u+s*6.283185307179586/14
q=B.a([],t)
p=new B.b0(a3,A.aw,e,e,q)
o=r-0.14361566416410484
q.push(new B.bj(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new B.av(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
o=r+0.14361566416410484
q.push(new B.av(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
q.push(new B.av(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new B.bW())
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
a3.sav(new B.a8(A.a1,A.a7,A.w,B.a([A.c.j(0),A.c.j(0.07),A.c.j(0)],x.O),e,e).aB(0,D.e9Y))
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
a3=B.c_(D.eaa,A.a2m)
u=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
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
q=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
q.c=2
q.d=A.bZ
q.r=f.gt(0)
n=q.L()
w.drawLine.apply(w,[t+a3*a1,u+v*a1,t+a3*g,u+v*g,n])
n.delete()
q=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
q.r=f.gt(0)
n=q.L()
w.drawCircle(t+a3*a2,u+v*a2,1.6,n)
n.delete()}a1=j[i]
$.a1()
a2=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a2.r=A.c.j(k).gt(0)
n=a2.L()
w.drawCircle(a1.a,a1.b,5*d,n)
n.delete()}},
ao(d){return d.b!==this.b}}
C.b7g.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a6.a/2,a1=a6.b/2,a2=new B.v(a0,a1),a3=a0-4,a4=a3-22
$.a1()
w=B.U()
w.b=A.ak
w.c=14
v=e.d
w.r=(v?e.r:A.bd).j(0.22).gt(0)
a5.aw(a2,a3-7,w)
w=B.U()
w.b=A.ak
w.c=1.7
w.r=(v?e.f:A.c).j(0.28).gt(0)
a5.aw(a2,a3-1,w)
w=B.U()
w.b=A.ak
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
p=new B.b0(w,A.aw,d,d,B.a([],t))
p.N(new B.kv(B.c2(a2,a4)))
a5.tj(0,p)
p=B.c2(a2,a4)
o=B.U()
o.sav(D.dRJ.aB(0,B.c2(a2,a4)))
a5.bp(p,o)
k=A.k.D(e.b,0,1)
if(k>0.004){a1+=a4
j=a1-a4*2*k
i=v?5.2:1.8
t=B.a([],t)
h=new B.b0(w,A.aw,d,d,t)
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
h.N(new B.bW())
$.a1()
a0=B.U()
a1=x.O
w=e.e
a1=v?B.a([e.f.j(0.55),w.j(0.78),e.r.j(0.92)],a1):B.a([w.j(0.22),D.eu.j(0.34),A.cW.j(0.62)],a1)
a0.sav(new B.a8(A.b4,A.bb,A.w,a1,d,d).aB(0,B.c2(a2,a4)))
a5.b4(h,a0)
a0=B.U()
a0.b=A.ak
a0.c=2
a0.r=A.c.j(v?0.28:0.14).gt(0)
a5.b4(h,a0)}s.restore()},
ao(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.ayb.prototype={
S(){var w=$.at()
return new C.ayc(new B.ao(A.aq,w),new B.ao(A.aq,w))},
baN(d,e){return this.w.$2$cloudRequest(d,e)}}
C.ayc.prototype={
p(){var w=this.d,v=$.at()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
lz(d){var w=null,v=this.c
if(v==null)return
v.F(x.q).f.P(B.b_(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
co3(d){this.a.baN(d,!0)
this.lz("Deposit submitted. Admin will review your payment proof.")
this.n(new C.da7())},
cmQ(){var w,v,u=this,t=B.d5(u.d.a.a)
if(t==null||t<=0){u.lz("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
B.hl(w,new C.amR(v.d,t,u.gco2(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cud(){var w,v,u,t,s=this,r=s.d,q=B.d5(r.a.a)
if(q==null||q<=0){s.lz("Enter an amount to withdraw.")
return}if(q<10){s.lz("Minimum withdrawal is $"+B.dt(10)+".")
return}w=s.a.d.d
if(q>w){s.lz("Insufficient balance. You have $"+B.dt(w)+".")
return}w=s.e
v=C.h1Q(w.a.a)
if(v.length===0){s.lz("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.baN(new B.cW("wd_"+1000*Date.now(),s.a.d.a,q,A.eB,A.k5,"Withdrawal to $"+v+" \u2014 Fee: $"+B.dt(u)+" \u2014 You receive: $"+B.dt(q-u),null,null,A.dn,new B.N(Date.now(),0,!1)),!0)
s.lz("Withdrawal submitted \u2014 waiting for admin approval.")
r.bG(0,A.c_)
w.bG(0,A.c_)
s.n(new C.da8())},
crf(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,B.J)(w),++s){r=w[s]
if(r.x!==A.cg||!this.aRh(r)||B.fHI(r))continue
q=r.d
p=q===A.eB||q===A.jt||q===A.eg
q=r.c
if(p)t+=q
else u+=q}return new B.bkm(u,t)},
B(d){var w,v,u,t=this,s=null,r=t.crf(),q=t.a.r,p=new B.a4(q,new C.da9(),B.S(q).k("a4<1>")).gG(0)
q=t.a
w=q.c
q=q.x
v=B.a([D.eu.j(0.24),A.M.j(0.72)],x.O)
u=B.G(D.eu.j(0.38),A.r,1)
q=B.bJ1(!1,w,"WALLET",B.hJ(B.aH(!1,s,!0,B.p(A.B,B.V(U.agI,D.eu,s,s,s,18),A.h,s,s,new B.o(s,s,u,s,s,new B.a8(A.ax,A.aD,A.w,v,s,s),A.a6),s,40,s,s,s,s,s,40),A.cE,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),s,"Back up wallet",s,s))
v=t.bvG(r.a,r.b,p)
u=x.p
w=B.A(B.a([t.amN(A.uC,"Deposit",0),t.amN(A.rX,"Withdraw",1),t.amN(A.fR,"History",2)],u),A.m,s,A.qv,A.j,0,s,s)
return B.ec(B.br(!1,B.cf(B.u(B.a([q,A.bs,v,A.d1,w,A.d1,B.ql(t.f===2?t.bQX():t.bWh(),A.ic,B.tg(),A.ba,A.ba,B.a_q())],u),A.ad,s,A.e,A.j,0,A.p),A.q,s,A.z,s,D.bh_,s,s,A.ah),!0,!1,A.ag,!0,!0),A.z_,!0)},
bvG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.a.i(i.a.e)
if(A.a.q(g,"@")){w=A.a.cP(g,"@")
v=A.a.al(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+A.a.aU(g,w)}else v=g
w=B.m(26)
u=B.an(h,i.avA(220,0.1),h,h,h,-60,-70,h)
t=B.an(-90,i.avA(200,0.07),h,h,h,30,h,h)
s=B.an(-60,i.avA(150,0.05),h,h,-40,h,h,h)
r=B.m(26)
r=B.bU(0,B.bQ(h,new B.o(h,h,B.G(A.c.j(0.18),A.r,1),r,h,h,A.n),A.b7),0,0,0)
q=B.m(6)
p=x.p
q=B.A(B.a([B.p(h,B.b2(h,h,h,new C.b6J(h),A.as),A.h,h,h,new B.o(h,h,h,q,h,D.bGz,A.n),h,28,h,h,h,h,h,38),A.b6,D.eXN],p),A.m,h,A.e,A.j,0,h,h)
o=B.d("Available balance",h,h,h,h,h,h,B.l(h,h,A.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,A.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=B.eY(A.a1,C.anA(new C.d9P(i),D.eyf,i.a.d.a),A.h,A.e8)
m=B.a([B.C(i.aKf(A.ur,"In",d),1),B.C(i.aKf(A.wL,"Out",e),1)],p)
if(f>0){l=A.cL.j(0.22)
k=B.m(99)
j=B.G(A.il.j(0.6),A.r,1)
m.push(B.p(h,B.d(""+f+" pending",h,h,h,h,h,h,D.eu6,h,h,h),A.h,h,h,new B.o(l,h,j,k,h,h,A.n),h,h,h,h,A.nn,h,h,h))}return new B.fN(1.62,B.bu(w,new B.am(A.W,h,A.a9,A.q,B.a([D.dR_,u,t,s,r,new B.B(A4.qd,B.u(B.a([q,A.b6,o,A.bw,n,A.b6,B.A(m,A.m,h,A.e,A.j,0,h,h),A.ar,B.d(v,h,1,A.Z,h,h,h,B.l(h,h,A.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,A.a_,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),A.F,h,A.e,A.j,0,A.p),h)],p),h),A.ap),h)},
avA(d,e){var w=null
return B.p(w,w,A.h,w,w,new B.o(w,w,B.G(A.c.j(e),A.r,22),w,w,w,A.a6),w,d,w,w,w,w,w,d)},
aKf(d,e,f){var w=null,v=A.c.j(0.16)
return B.A(B.a([B.p(w,B.V(d,A.c,w,w,w,13),A.h,w,w,new B.o(v,w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.bp,new B.dk(1,A.cj,B.eY(A.a1,B.d(e+"  $"+B.dt(f),w,w,w,w,w,w,A.qP,w,w,w),A.h,A.e8),w)],x.p),A.m,w,A.e,A.j,0,w,w)},
amN(d,e,f){var w=null,v=this.f===f,u=v?D.bHO:new B.a8(A.a1,A.a7,A.w,B.a([A.c.j(0.08),A.c.j(0.03)],x.O),w,w),t=B.G(v?A.c.j(0.6):D.eu.j(0.25),A.r,1),s=v?B.a([new B.a9(0,A.G,A.at.j(0.45),A.J,18)],x.V):w
u=B.dg(w,B.V(d,v?D.a7V:D.eu,w,w,w,26),w,w,A.co,new B.o(w,w,t,w,s,u,A.a6),A.Dp,w,62,w,w,w,w,62)
return B.aJ(A.c5,new B.a3(92,w,B.u(B.a([u,D.eg8,B.d(e,w,w,w,w,w,w,B.l(w,w,v?A.c:A.aQ,w,w,w,w,w,w,w,w,12.5,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.d9O(this,f),w,w,w,w,w,w,!1,A.af)},
bWh(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=B.d5(a1.a.a)
if(a2==null)a2=0
w=a0?D.eu:A.cK
v=a2>0
u=new C.da4(e,w)
t=new C.da3()
s=e.f
r=B.m(26)
q=x.O
p=B.a([w.j(0.1),A.rp,A.rp],q)
o=B.G(w.j(0.22),A.r,1)
n=x.V
m=B.a([new B.a9(0,A.G,A.x.j(0.35),A.eH,22)],n)
l=w.j(0.15)
l=B.p(d,B.V(a0?A.uC:A.rX,w,d,d,d,18),A.h,d,d,new B.o(l,d,d,d,d,d,A.a6),d,34,d,d,d,d,d,34)
k=B.C(B.d(a0?"Add money":"Take money out",d,d,d,d,d,d,A.fL,d,d,d),1)
j=A.c.j(0.06)
i=B.m(99)
h=x.p
i=B.A(B.a([l,A.av,k,B.p(d,B.A(B.a([B.V(A.hI,w,d,d,d,14),B.d("Cash App",d,d,d,d,d,d,B.l(d,d,A.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,A.I,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),A.m,d,A.e,A.R,0,d,d),A.h,d,d,new B.o(j,d,d,i,d,d,A.n),d,d,d,d,A.kv,d,d,d)],h),A.m,d,A.e,A.j,0,d,d)
l=B.d("$",d,d,d,d,d,d,B.l(d,d,v?w:A.c3,d,d,d,d,d,d,d,d,26,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=B.a([new B.tB(B.ad("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=B.A(B.a([new B.B(A.iX,l,d),A.d4,B.aSy(new B.d2(D.aR5,B.aK(d,A.U,!1,d,!0,A.q,d,B.aL(),a1,w,d,d,d,d,2,B.bl(d,A.ep,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.l(d,d,A.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),A.z,!0,d,!0,d,!1,d,A.ae,d,d,k,d,d,A.dX,d,d,d,1,d,d,!1,"\u2022",d,new C.da2(e),d,d,d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,D.eAS,!0,A.L,d,A.am,d,d,d,d),d),d)],h),A.F,d,A.b5,A.j,0,d,d)
a1=v?120:60
a1=B.as(B.dg(d,d,d,d,A.ba,new B.o(d,d,d,B.m(99),d,new B.a8(A.a1,A.a7,A.w,B.a([w.j(0),w,w.j(0)],q),d,d),A.n),A.X,d,3,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+B.dt(10)+" \xb7 admin sends it to your Cash App."
q=B.d(q,d,d,d,d,d,d,B.l(d,d,A.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,A.a_,d,1.35,!0,d,d,d,d,d,d,d,d),A.L,d,d)
l=B.a([],h)
j=a0?D.bLw:D.c_8
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=B.a([i,A.bs,k,A.ar,a1,A.P,q,A.ay,B.A(l,A.m,d,A.e,A.j,0,d,d)],h)
if(!a0){q=A.c.j(0.04)
l=B.V(A.hI,w,d,d,d,d)
k=B.l(d,d,A.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,A.O,d,d,!0,d,d,d,d,d,d,d,d)
l=B.a([A.ay,B.aK(d,A.U,!1,d,!0,A.q,d,B.aL(),e.e,d,d,d,d,d,2,B.bl(d,d,d,d,d,d,d,d,!0,new B.b1(4,B.m(16),new B.ax(A.c.j(0.08),1,A.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new B.b1(4,B.m(16),new B.ax(w,1,A.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),A.z,!0,d,!0,d,!1,d,A.ae,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,A.mU,!0,A.a5,d,A.am,d,d,d,d)],h)
if(v){q=A.c.j(0.04)
k=B.m(16)
A.d.v(l,B.a([A.ab,B.p(d,B.u(B.a([t.$2("Amount","$"+B.dt(a2)),t.$3$color("Fee (15%)","\u2212 $"+B.dt(a2*0.15),A.fO),B.jm(A.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+B.dt(a2*0.85),!0,D.eu)],h),A.m,d,A.e,A.j,0,A.p),A.h,d,d,new B.o(q,d,d,k,d,d,A.n),d,d,d,d,A.iD,d,d,d)],h))}A.d.v(a1,l)}a1.push(A.aN)
q=B.m(18)
l=a0?A.Ob:P.anu
n=B.a([new B.a9(0,A.G,(a0?A.aW:A.e9).j(0.45),A.dm,18)],n)
k=a0?e.gcmP():e.gcuc()
j=B.V(a0?A.X4:A.kZ,d,d,d,d,20)
if(a0)i=v?"Deposit $"+B.dt(a2):"Deposit funds"
else i=v?"Withdraw $"+B.dt(a2):"Request withdrawal"
a1.push(new B.a3(d,54,B.bQ(B.ld(j,B.d(i,d,d,d,d,d,d,A.or,d,d,d),k,B.ff(d,d,A.K,d,d,d,d,d,d,A.c,d,d,d,A.K,new B.b5(B.m(18),A.V),d,d,d,d,d)),new B.o(d,d,d,q,n,new B.a8(A.a1,A.a7,A.w,l,d,d),A.n),A.b7),d))
return B.p(d,B.u(a1,A.ad,d,A.e,A.j,0,A.p),A.h,d,d,new B.o(d,d,o,r,m,new B.a8(A.b4,A.bb,A.w,p,A.NK,d),A.n),d,d,new B.cv("form"+s,x.W),d,A.zH,d,d,d)},
bQX(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a.r,j=B.S(k).k("a4<1>"),i=B.z(new B.a4(k,new C.d9S(m),j),j.k("F.E"))
A.d.aX(i,new C.d9T())
w=A.a.i(m.a.e.toLowerCase())
k=B.R(x.N,x.o)
j=$.fdB
j=j==null?l:j.$0()
j=J.aW(j==null?A.hN:j)
while(j.C()){v=j.gT(j)
u=v.a
if(u.length!==0&&A.a.i(v.b.toLowerCase())===w)k.m(0,u,v)}for(j=m.a.r,v=j.length,t=0;t<j.length;j.length===v||(0,B.J)(j),++t){s=j[t]
u=s.a
if(u.length!==0)k.m(0,u,s)}j=k.$ti.k("bf<2>")
v=j.k("F.E")
u=B.z(new B.bf(k,j),v)
r=C.hGq(u,B.F4(m.a.e,new C.d9U(m)))
u=B.m(24)
q=B.G(A.c.j(0.07),A.r,1)
p=B.m(99)
o=B.m(99)
n=x.p
o=B.a([B.A(B.a([D.blp,B.aH(!1,p,!0,B.p(l,D.eaR,A.h,l,l,new B.o(l,l,B.G(D.eu.j(0.4),A.r,1),o,l,l,A.n),l,l,l,l,A.my,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.d9V(m),l,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,l,l),A.T],n)
if(i.length===0)o.push(new B.B(D.bdM,B.u(B.a([B.V(A.DZ,A.c.j(0.25),l,l,l,40),A.T,D.eUH],n),A.m,l,A.e,A.j,0,A.p),l))
else{p=B.dc(i,0,B.dJ(m.r,"count",x.S),B.S(i).c).dt(0)
k=B.z(new B.bf(k,j),v)
k=B.z(m.bQY(p,k,r),x.l)
j=i.length
v=m.r
if(j>v)k.push(B.hg(D.byO,B.d("Show more ("+(j-v)+" older)",l,l,l,l,l,l,A.cc,l,l,l),new C.d9W(m),B.fp(l,l,l,l,l,l,l,l,l,l,l,D.eu,l,l,l,l,l,l,l,l,l,l,l,l,l,l)))
A.d.v(o,k)}return B.p(l,B.u(o,A.ad,l,A.e,A.j,0,A.p),A.h,l,l,new B.o(A.rp,l,q,u,l,l,A.n),l,l,D.f03,l,D.bfT,l,l,l)},
bQY(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=B.aZ(x.N)
for(w=a7.length,v=0;v<a7.length;a7.length===w||(0,B.J)(a7),++v)a6.H(0,a7[v].a)
w=B.S(a8).k("a4<1>")
u=B.z(new B.a4(a8,new C.d9X(a6),w),w.k("F.E"))
A.d.aX(u,new C.d9Y())
a6=x.p
t=B.a([],a6)
for(w=B.S(u).k("a4<1>"),s=0;s<a7.length;){r=a7[s]
q=r.a
p=a9.h(0,q)
if(s===0&&p!=null){o=new B.a4(u,new C.d9Z(r),w).gG(0)
n=B.F4(a4.a.e,new C.da_(a4))
m=p.a
l=n-m
if(o>0&&Math.abs(l)>=0.005)t.push(a4.aOB(o,l,m,n))}q=a9.h(0,q)
m=r.x
k=r.d
j=k===A.eB||k===A.jt||k===A.eg
if(m===A.cg)i=j?A.cN:D.eu
else i=m===A.dn?A.il:A.fK
h=j?"-":"+"
m=A.c.j(0.06)
k=i.j(0.14)
g=new B.ax(i.j(0.4),1,A.r,-1)
k=B.p(a5,B.V(j?A.rX:A.uC,i,a5,a5,a5,19),A.h,a5,a5,new B.o(k,a5,new B.c1(g,g,g,g),a5,a5,a5,A.a6),a5,42,a5,a5,a5,a5,a5,42)
f=a4.bKS(r)
e=C.fUx(r.y)
d=A.c.j(0.5)
f=B.a([new B.w(f,a5,A.js,a5,a5,a5,a5,a5,a5,a5,a5,a5),A.bw,new B.w(e,a5,new B.E(!0,d,a5,a5,a5,a5,11,A.a_,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5,a5,a5,a5,a5,a5,a5)],a6)
e=r.f
if(A.a.i(e==null?"":e).length!==0){e.toString
d=A.c.j(0.4)
f.push(new B.w(e,a5,new B.E(!0,d,a5,a5,a5,a5,10.5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5,a5,A.Z,a5,1,a5,a5))}if(q!=null&&r.x!==A.ke)f.push(new B.B(E.UW,new B.E4(A.bH,5,4,A.bx,B.a([a4.a64("Before",q.b),a4.a64("After",q.a)],a6),a5),a5))
q=B.u(f,A.F,a5,A.e,A.j,0,A.p)
f=r.c
f=f===0?"\u2014":h+"$"+B.dt(f)
e=i.j(0.14)
d=new B.b3(99,99)
a0=C.h0s(r)
t.push(B.p(a5,new B.cC(A.aY,A.e,A.j,A.m,a5,A.p,a5,0,B.a([k,A.b9,new B.bF(1,A.bn,q,a5),A.aa,B.u(B.a([new B.w(f,a5,new B.E(!0,i,a5,a5,a5,a5,15,A.u,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5,a5,a5,a5,a5,a5,a5),A.au,B.p(a5,new B.w(a0,a5,new B.E(!0,i,a5,a5,a5,a5,9.5,A.I,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),a5,a5,a5,a5,a5,a5,a5,a5,a5),A.h,a5,a5,new B.o(e,a5,a5,new B.bv(d,d,d,d),a5,a5,A.n),a5,a5,a5,a5,A.zN,a5,a5,a5)],a6),A.dD,a5,A.e,A.j,0,A.p)],a6),a5),A.h,a5,a5,new B.o(a5,a5,new B.c1(A.V,A.V,new B.ax(m,1,A.r,-1),A.V),a5,a5,a5,A.n),a5,a5,a5,a5,A.ua,a5,a5,a5));++s
if(s<a7.length&&p!=null){a1=a7[s]
a2=a9.h(0,a1.a)
if(a2!=null){a3=new B.a4(u,new C.da0(r,a1),w).gG(0)
q=p.b
m=a2.a
l=q-m
if(a3>0&&Math.abs(l)>=0.005)t.push(a4.aOB(a3,l,m,q))}}}return t},
aOB(d,e,f,g){var w,v,u=null,t=e>=0,s=t?A.bE:A.dd,r=A.c.j(0.06),q=s.j(0.14),p=B.G(s.j(0.4),A.r,1)
p=B.p(u,B.V(A.nr,s,u,u,u,19),A.h,u,u,new B.o(q,u,p,u,u,u,A.a6),u,42,u,u,u,u,u,42)
q=x.p
w=B.C(B.u(B.a([D.eVf,A.bw,B.d(""+d+" moves in between, see Game Receipts",u,u,u,u,u,u,B.l(u,u,A.c.j(0.5),u,u,u,u,u,u,u,u,11,u,u,A.a_,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),new B.B(E.UW,B.c7(A.bH,B.a([this.a64("Before",f),this.a64("After",g)],q),A.bx,4,5),u)],q),A.F,u,A.e,A.j,0,A.p),1)
v=t?"+":"-"
return B.p(u,B.A(B.a([p,A.b9,w,A.aa,B.d(v+"$"+B.dt(Math.abs(e)),u,u,u,u,u,u,B.l(u,u,s,u,u,u,u,u,u,u,u,15,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],q),A.m,u,A.e,A.j,0,u,u),A.h,u,u,new B.o(u,u,new B.c1(A.V,A.V,new B.ax(r,1,A.r,-1),A.V),u,u,u,A.n),u,u,u,u,A.ua,u,u,u)},
a64(d,e){var w=null,v=A.c.j(0.05),u=B.m(7),t=B.G(A.c.j(0.1),A.r,1),s=B.dr(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=B.dt(e)
return B.p(w,B.VE(B.dr(B.a([s,B.dr(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.eyp,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.nm,w,w,w)},
aRh(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(A.a.q(w,"clock-in session started"))return!1
v=d.d
if(v===A.eg)return d.c>0
if(B.rd(d))return!1
if(v===A.fc||v===A.eB)return!0
if(v===A.nJ||v===A.jt)return!0
if(v===A.jO)return!0
if(v===A.fA)return A.a.q(w,"clock-in")||d.c>0
return!1},
bKS(d){var w,v=d.f
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
C.b6J.prototype={
a5(d,e){var w,v,u,t
$.a1()
w=B.U()
w.r=D.b_W.j(0.55).gt(0)
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
C.bqX.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null
for(w=a4.b,v=this.b,u=v*6.283185307179586,t=a4.a,s=0+t,r=x.O,q=a3.a,p=0;p<3;++p){o=w*(0.2+0.25*p)+Math.sin(u+p*2)*14-40
n=new B.af(0,o,s,o+80)
m=[A.bc,A.fY,A.br][p]
$.a1()
o=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
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
r=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
r.r=A.c.j(0.55*g).gt(0)
l=r.L()
q.drawCircle(j,h,0.7+(i-s)*1.5,l)
l.delete()
if(A.o.J(k,9)===0){f=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
f.r=A.nV.j(0.35*g).gt(0)
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
a0=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a0.r=A.c.j(0.7*(1-p)).gt(0)
a0.c=1.6
a0.d=A.bZ
l=a0.L()
q.drawLine.apply(q,[e+r,d+o,e,d,l])
l.delete()}for(u=t*0.62,w*=0.36,k=0;k<4;++k){f=A.k.J(v+k*0.25,1)
t=A.nV.j(0.5*Math.sin(f*3.141592653589793))
a1=new B.ma(new B.ez("z",a2,a2,A.cT,a2,a2,a2,a2,a2,a2,new B.E(!0,t,a2,a2,a2,a2,12+f*14,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a5,A.cn,new B.kc(1),a2,a2,a2,a2,A.cm,a2)
a1.fD()
a1.a5(a3,new B.v(u+Math.sin(f*6.283185307179586+k)*12+k*8,w-f*90))}},
ao(d){return d.b!==this.b}}
C.aHw.prototype={
aN(){this.aV()
this.aS()
this.dD()},
p(){var w=this,v=w.aY$
if(v!=null)v.a1(0,w.gdB())
w.aY$=null
w.a2()}}
C.bsQ.prototype={}
C.aWr.prototype={}
C.Yc.prototype={
S(){return new C.aAA(new B.ao(A.aq,$.at()))},
cHU(d,e){return this.d.$2(d,e)}}
C.aAA.prototype={
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.a2()},
aUr(){var w=this,v=A.a.i(w.d.a.a),u=B.ad("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.n(new C.dV2(w))
return}u=w.c
u.toString
B.a7(u,!1).K(null)
w.a.cHU(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=B.aG(a0,A.eo,e).w
e=B.aG(a0,A.e1,e).w
w=B.as(B.p(f,f,A.h,f,f,new B.o(A.be,f,f,B.m(2),f,f,A.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=B.A(B.a([B.p(f,D.byc,A.h,f,f,new B.o(f,f,f,f,B.a([new B.a9(0,A.G,A.f3.j(0.5),A.J,18)],v),D.ajg,A.a6),f,52,f,f,f,f,f,52),A.en,B.C(B.u(B.a([D.eJo,A.bw,B.d(g.a.c,f,1,A.Z,f,f,f,A.oq,f,f,f)],u),A.F,f,A.e,A.j,0,A.p),1),B.aF(f,f,f,f,D.bz1,f,f,f,new C.dV5(a0),f,f,f,f,f,f)],u),A.m,f,A.e,A.j,0,f,f)
s=g.b07(A.eF,"You",A.cK)
r=A.aM.j(0.15)
q=B.m(99)
q=B.A(B.a([s,new B.B(A.lT,B.p(f,D.eN1,A.h,f,f,new B.o(r,f,B.G(A.aM.j(0.6),A.r,1),q,f,f,A.n),f,f,f,f,A.fF,f,f,f),f),g.b07(A.uz,"Your friend",A.cd)],u),A.m,f,A.e,A.j,0,f,f)
r=A.c.j(0.06)
s=B.m(16)
p=A.c.j(0.12)
o=B.m(16)
n=g.f
if(n.length===0)n=f
o=B.aK(f,A.U,!0,f,!0,A.q,f,B.aL(),g.d,f,f,f,f,f,2,B.bl(f,f,f,f,f,f,f,f,!0,new B.b1(4,s,new B.ax(p,1,A.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new B.b1(4,o,D.aPV),f,f,f,f,f,f,f,f,N.BL,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.bBn,f,f,f,f,f,f,f,f,f,f,f,f),A.z,!0,f,!0,f,!1,f,A.ae,f,f,f,f,f,A.lB,f,f,f,1,f,f,!1,"\u2022",f,new C.dV6(g),f,new C.dV7(g),f,!1,f,f,!1,f,!0,f,A.a8,f,f,f,f,f,f,f,f,f,f,f,A.ir,!0,A.a5,f,A.am,f,f,f,f)
r=B.a([],u)
for(m=0;m<4;++m){l=D.bVa[m]
s=new B.b3(14,14)
p=g.e===l
n=p?D.ajf:f
p=p?f:A.c.j(0.06)
k=new B.ax(g.e===l?A.aB:A.bG,1,A.r,-1)
j=""+l
i=l===1?"game":"best of "+j
h=A.c.j(0.7)
s=B.a([new B.bF(1,A.bn,B.aJ(f,B.dg(f,B.u(B.a([new B.w(j,f,A.dP,f,f,f,f,f,f,f,f,f),new B.w(i,f,new B.E(!0,h,f,f,f,f,10,A.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f)],u),A.m,f,A.e,A.j,0,A.p),f,f,A.ba,new B.o(p,f,new B.c1(k,k,k,k),new B.bv(s,s,s,s),f,n,A.n),A.eD,f,f,f,A.eV,f,f,f),A.z,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.dV8(g,l),f,f,f,f,f,f,!1,A.af),f)],u)
if(l!==7)s.push(A.aa)
A.d.v(r,s)}s=B.A(r,A.m,f,A.e,A.j,0,f,f)
r=B.A(B.a([B.V(A.kY,A.c.j(0.5),f,f,f,15),A.bp,B.C(B.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,B.l(f,f,A.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),A.m,f,A.e,A.j,0,f,f)
p=B.m(18)
v=B.a([new B.a9(0,A.G,A.bz.j(0.4),A.cv,18)],v)
n=g.e
j=n===1?"":"s"
return new B.B(new B.L(0,0,0,d.f.d+e.r.d),B.p(f,B.u(B.a([w,A.aN,t,A.bs,q,A.bs,D.eQC,A.ar,o,A.aN,D.eUv,A.P,s,A.ay,r,A.aN,new B.a3(f,54,B.bQ(B.hg(D.ahy,B.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,A.fL,f,f,f),g.gc_D(),f),new B.o(f,f,f,p,v,D.bGJ,A.n),A.b7),f)],u),A.ad,f,A.e,A.R,0,A.p),A.h,f,f,D.aRT,f,f,f,f,D.bhc,f,f,f),f)},
b07(d,e,f){var w=null,v=f.j(0.1),u=B.m(16),t=B.G(f.j(0.45),A.r,1)
return B.C(B.p(w,B.u(B.a([B.V(d,f,w,w,w,24),A.au,B.d(e,w,w,w,w,w,w,A.a4o,w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.eV,w,w,w),1)}}
C.oz.prototype={}
C.bm1.prototype={
a5(d,e){var w,v,u,t,s,r=null,q=e.a/2,p=new B.v(q,e.b/2),o=q-4
for(q=d.a,w=0;w<37;++w){$.a1()
v=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
if(w===0)u=A.bq
else u=(w&1)===0?A.bS:A.M
v.r=u.gt(0)
u=B.c2(p,o)
t=v.L()
q.drawArc.apply(q,[B.cz(u),(w*2*3.141592653589793/37-1.5707963267948966)*57.29577951308232,9.72972972972973,!0,t])
t.delete()}$.a1()
q=B.U()
q.r=A.hS.gt(0)
q.b=A.ak
q.c=8
d.aw(p,o,q)
q=B.U()
q.r=A.aM.gt(0)
d.aw(p,o*0.22,q)
q=this.b
if(q!=null){s=B.j0(r,r,r,r,B.dr(r,r,r,r,r,r,r,r,r,A.aK8,B.t(q)),A.a5,A.cn,r,A.eL,A.cm)
s.fD()
q=s.b
u=q.c
q=q.a.c
s.a5(d,p.aD(0,new B.v(u/2,q.gbd(q)/2)))}},
ao(d){return d.b!=this.b}}
C.Dc.prototype={
a3(){return"NgmyProMoveResult."+this.b}}
C.ao3.prototype={
gjx(){var w=this.d
w=w==null?null:w.a
return w!==!1},
bi4(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.fA7("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.bRK()
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
u=J.e_(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=B.bT(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gjx())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.aT8(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.ay5.h(0,d)
s.c=w==null?"Play to earn":w}},
b4I(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gjx()
if(o)return
o=x.N
s.x=B.Z(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b4(w,new C.c7o(),o)
v=B.z(v,v.$ti.k("ai.E"))
s.at=v
if(v.length<9){v=B.z(v,o)
A.d.v(v,B.bT(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=A.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===A.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.crL(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.ani(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b4(t,new C.c7p(),x.L)
o=B.z(o,o.$ti.k("ai.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)A.d.H(v,B.bT(7,0,!1,o))}if(B.iv(e.h(0,q)))o=B.e6(e.h(0,q))
else{o=B.c3(B.t(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bxP(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.ani(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b4(t,new C.c7q(),x.L)
o=B.z(o,o.$ti.k("ai.E"))
s.y=o}if(B.iv(e.h(0,p)))o=B.e6(e.h(0,p))
else{o=B.c3(B.t(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bz1(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.ani(e,f)
break}},
cBM(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=B.Z(w.x,q,p)
switch(d){case"tic_tac_go":o.m(0,"ttt",B.bi(w.at,!0,q))
o.m(0,"turnEmail",w.axG())
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
q=B.z(new B.I(q,new C.c7s(),p),p.k("ai.E"))
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
q=B.z(new B.I(q,new C.c7t(),p),p.k("ai.E"))
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
default:q=B.dR(o,q,p)
q.m(0,v,w.e)
q.m(0,s,w.w)
return q}},
axG(){var w,v,u,t=this
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
ani(d,e){var w,v=this,u=A.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
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
crL(d,e){var w,v,u,t,s,r="playerXEmail"
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
bxP(d,e){var w,v,u,t,s
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
bz1(d,e){var w,v,u,t,s,r,q
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
RN(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gjx())return s
w=A.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return A.a.i(J.k(s==null?u.axG():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
bRK(){var w,v,u=this,t=J.e_(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=B.ih(8,new C.c7l(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
aT8(d){var w=20+d.aG(80),v=w+10+d.aG(50),u=4+d.aG(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bG(0,A.c_)},
cL9(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gjx())w=1
else{v=r.d
v=v==null?null:v.d
w=r.RN(q,v==null?"":v)?r.z:-1}if(!r.gjx()){v=r.d
v=v==null?null:v.d
v=!r.RN(q,v==null?"":v)}else v=!1
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
if(r.a6r(2)){r.a7Y(1)
return!0}if(r.a6r(1)){r.a7Y(2)
return!0}if(r.gjx()&&r.z===2){r.btY(f)
if(r.a6r(2)){r.a7Y(1)
return!0}if(r.a6r(1)){r.a7Y(2)
return!0}}}return!1},
a7Y(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
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
btY(d){var w,v,u,t,s,r,q,p,o,n=this,m=B.a([],x.B)
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
a6r(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=J.aW(w[u]);t.C();)if(t.gT(t)===d)return!1
return!0},
cLa(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.pk
if(!s.gjx()){w=s.d
w=w!=null&&!s.RN("tic_tac_go",w.d)}else w=!1
if(w)return D.pk
if(s.gjx())v="X"
else{w=A.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===A.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.ag_(v))return s.aOd(v,!0)
if(!A.d.q(s.at,""))return s.aOe()
s.ax=!s.ax
if(!s.gjx()){s.x.m(0,"turnEmail",s.axG())
s.c=s.aSH()
return D.pk}if(s.gjx()){t=s.cah(e)
if(t>=0){s.at[t]="O"
if(s.ag_("O"))return s.aOd("O",!1)
if(!A.d.q(s.at,""))return s.aOe()
s.ax=!0}}s.c=s.gjx()?"Your turn \u2014 you are X":s.aSH()
return D.pk},
aSH(){var w=this.d
if(w==null)return"Take your turn"
return this.RN("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aOd(d,e){var w,v,u=this
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
return e?D.pl:D.FZ},
aOe(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.P4},
cah(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.ag_("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.ag_("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.cGG[u]
if(v[w].length===0)return w}return-1},
ag_(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.cNz[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a0S(d){return A.d.cI(d,0,new C.c7r())},
cvN(d){this.ay.push(1+d.aG(10))
if(this.a0S(this.ay)>21)return!0
return!1},
cvO(d){var w,v,u,t=this
while(t.a0S(t.ch)<17)t.ch.push(1+d.aG(10))
t.CW=!0
w=t.a0S(t.ay)
v=t.a0S(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cBe(d,e){var w,v,u,t=this
if(t.e)return D.pk
if(!t.gjx()){w=t.d
w=w!=null&&!t.RN("connect_four_pro",w.d)}else w=!1
if(w)return D.pk
if(t.gjx())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.pk
if(!t.ad7(d,w))return D.pk
if(t.a6h(t.fx))return t.aOb(t.fx,!0)
if(t.aK_())return t.aOc()
w=t.fx===1?2:1
t.fx=w
if(t.gjx()&&w===2){u=t.c9G(e)
if(u>=0){t.ad7(u,2)
if(t.a6h(2))return t.aOb(2,!1)
if(t.aK_())return t.aOc()
t.fx=1}}t.c=t.gjx()?"Your turn \u2014 drop a red disc":t.bxO()
return D.pk},
bxO(){var w=this.d
if(w==null)return"Drop a disc"
return this.RN("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
ad7(d,e){var w
for(w=5;w>=0;--w)if(J.q(this.fr[w],d)===0){J.aE(this.fr[w],d,e)
return!0}return!1},
aK_(){for(var w=0;w<7;++w)if(J.q(this.fr[0],w)===0)return!1
return!0},
aOb(d,e){var w,v,u,t=this
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
return e?D.pl:D.FZ},
aOc(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.P4},
c9G(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.ad7(w,2)
v=r.a6h(2)
r.b2q(w)
if(v)return w}for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.ad7(w,1)
u=r.a6h(1)
r.b2q(w)
if(u)return w}t=B.a([],x.t)
for(w=0;w<7;++w)if(J.q(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aG(s)]},
b2q(d){var w
for(w=0;w<6;++w)if(J.q(this.fr[w],d)!==0){J.aE(this.fr[w],d,0)
return}},
a6h(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.q(this.fr[w],v)!==d)continue
if(this.bxQ(w,v,d))return!0}return!1},
bxQ(d,e,f){var w,v,u,t=new C.c7k(this,d,e,f)
for(w=x.t,w=[B.a([0,1],w),B.a([1,0],w),B.a([1,1],w),B.a([1,-1],w)],v=0;v<4;++v){u=w[v]
if(t.$2(u[0],u[1])+t.$2(-u[0],-u[1])-1>=4)return!0}return!1},
b5B(d){var w=this
if(A.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.aT8(d)}return w.a>=w.b}}
C.aoX.prototype={
S(){return new C.aBk(null,null)},
cGN(d){return this.e.$1(d)}}
C.aBk.prototype={
Z(){var w,v=this
v.a0()
w=B.bh(null,D.bcT,null,1,null,v)
w.f2(0,!0)
v.d=w
v.a.d.aJ(0,v.gaUQ())
v.atJ()},
bo(d){var w
this.bA(d)
w=this.a
if(d.c!==w.c){w.d.bG(0,A.c_)
this.atJ()}},
atJ(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.aeR(t,u)
C.aeR(t,u)
w.a.cGN(s)
w.a.toString
w.n(new C.epl())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
p(){var w,v=this
v.a.d.a1(0,v.gaUQ())
w=v.d
w===$&&B.c()
w.p()
v.bpU()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.aeR(j,i),g=C.aeR(j,i),f=j.length,e=i.length,d=B.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&B.c()
u=new B.b3(1,1)
d.push(new B.vs(new B.cZ(v,!1,B.p(l,l,A.h,l,l,new B.o(A.aM,l,l,new B.bv(u,u,u,u),B.a([new B.a9(0,A.G,A.aM.j(0.6),A.J,6)],k),l,A.n),l,22,l,A.K_,l,l,l,3),l),A.PC,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new B.ez(v,l,l,A.cT,l,l,l,l,l,l,D.evE))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=A.c.j(0.4)
q=A.cp}else if(s===t){r=A.bt
q=A.O}else{r=A.aH
q=A.I}d.push(new B.ez(t,l,l,A.cT,l,l,l,l,l,l,new B.E(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&B.c()
d.push(new B.vs(new B.cZ(k,!1,B.p(l,l,A.h,A.aM,l,l,l,22,l,l,l,l,l,3),l),A.PC,l,l))}p=f===0?0:A.k.U(h/f*100)
k=A.x.j(0.35)
v=B.m(12)
u=B.G(A.be,A.r,1)
o=x.p
v=B.p(l,B.u(B.a([B.A(B.a([m.aUP("Correct",""+h,A.bq),A.aa,m.aUP("Wrong / missed",""+(f-g),A.aH),A.b6,B.d(""+p+"% accuracy",l,l,l,l,l,l,G.a3N,l,l,l)],o),A.m,l,A.e,A.j,0,l,l),A.ar,D.eO5],o),A.F,l,A.e,A.j,0,A.p),A.h,l,l,new B.o(k,l,u,v,l,l,A.n),l,l,l,l,A.bk,l,l,l)
u=B.C(B.cf(new B.a7r(l,B.dr(d,l,l,l,l,l,l,l,l,l,l),l,l,l),A.q,l,A.z,l,l,l,l,A.ah),1)
k=m.a.d
g=B.l(l,l,A.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=A.x.j(0.35)
return B.u(B.a([v,A.ab,u,A.T,B.aK(l,A.U,!0,l,!0,A.q,l,B.aL(),k,l,l,l,l,l,2,B.bl(l,new B.b1(4,B.m(12),A.V),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new B.b1(4,B.m(12),D.aPO),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ae,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,D.aK7,!0,A.a5,l,A.am,l,l,l,l)],o),A.ad,l,A.e,A.j,0,A.p)},
aUP(d,e,f){var w=null,v=f.j(0.15),u=B.m(8)
return B.p(w,B.d(d+": "+e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,w,w,new B.o(v,w,w,u,w,w,A.n),w,w,w,w,A.fF,w,w,w)}}
C.aJ1.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
var z=a.updateTypes(["au<~>()","~()","H(hU,hU)","~([wu?])","Q(o2)","o2()","H(qJ,qJ)","Q(qJ)","H(qK,qK)","Nx(Y)","Q(hU)","Td(Y)","XU(Y)","X0(Y)","abZ(Y)","LF(Y)","aaP(Y,ht<al<iV>>)","aaO(Y,H)","cE(abe)","qJ(a0<@,@>)","r(o2)","Lx(Y)","a0<n,@>(qJ)","qK(a0<@,@>)","a0<n,@>(k9)","a0<n,@>(qK)","Q(qK)","a0<n,@>(lj)","lj(@)","a0<n,@>(i7)","i7(@)","hU(@)","au<~>(k9)","a0<n,@>(hU)","~(H,H)","hU(hU)","~(Dc,ao3)","au<Q>(al<hU>)","XT(Y)","~(hU)","YE(Y)","Te(Y)","n(hU)","Q(lj)","w8(bq<H,lj>)","a9n(Y,H)","H(i7,i7)","a9f(lj)","r(qP)","bF(H1)","Xp(Y)","~(cW{bumpWalletRevision:Q,cloudRequest:Q})","~(n,P,P,P)","P(N)","~(cW)","Yc(Y)","~(Dc)","n(n)","YF(Y)"])
C.clb.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.clc(r,w,s.b,v,s.d)
t=s.e
r.b=B.dD(t,u)
v.r=new C.cl8(r)
v.e=new C.cl9(r,w)
v.f=new C.cla(r,w,t,u)},
$S:0}
C.clc.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.l2(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=B.a5(r)
u=B.c8(r)
s=v
q=u
p=B.EE(s,q)
if(p==null)p=new B.iT(s,q==null?B.a0L(s):q)
t=p
o.d.hc(t.a,t.b)
return}o.d.H(0,w)}else{o.e.a(null)
o.d.H(0,null)}},
$S:38}
C.cl8.prototype={
$0(){this.a.b.a9(0)
return $.Fe()},
$S:1616}
C.cl9.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.aqq.$0()
this.a.b.a9(0)},
$S:0}
C.cla.prototype={
$0(){var w,v=this,u=v.b,t=B.dB(0,0,u.gb7B(),0,0,0)
u.kj(0)
u=v.c
w=v.a
w.b=B.cV(new B.b7(u.a-t.a),new C.cl7(w,u,v.d))},
$S:0}
C.cl7.prototype={
$0(){var w=this.c
this.a.b=B.dD(this.b,w)
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
w.e=new B.ht(D.abm,this.b,null,null,v.$ti.k("ht<1>"))},
$S:0}
C.eKX.prototype={
$2(d,e){var w=this.a
w.n(new C.eKS(w,d,e))},
$S:54}
C.eKS.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.c()
w.e=new B.ht(D.abm,null,this.b,this.c,v.$ti.k("ht<1>"))},
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
v.e=new B.ht(A.zm,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fhx.prototype={
$1(d){return d.a===this.a&&A.a.i(d.b.toLowerCase())===this.b&&d.x===A.cg},
$S:16}
C.fhr.prototype={
$1(d){return d},
$S:13}
C.f2o.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return B.p(A.B,new B.B(new B.L(u,0,u,0),B.d("NGMY",w,1,A.eA,w,!1,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,A.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),A.h,w,w,A.a6U,w,v,w,w,w,w,w,v)},
$S:153}
C.f2l.prototype={
$3(d,e,f){return this.a.$0()},
$S:140}
C.f2m.prototype={
$2(d,e){var w,v=this,u=e.b
if(A.a.i(u==null?"":u).length!==0){u.toString
w=A.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return B.k7(w,A.B,v.d,new C.f2k(v.e),A.fG,v.c,!0,v.b,null,null,v.a)},
$S:1617}
C.f2k.prototype={
$3(d,e,f){return this.a.$0()},
$S:140}
C.f2n.prototype={
$3(d,e,f){return this.a.$0()},
$S:140}
C.d1Z.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.d29.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.d2r.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:7}
C.d2s.prototype={
$1(d){return this.a.I7()},
$S:14}
C.d2h.prototype={
$0(){var w=J.b4(this.b,new C.d2g(),x.P)
w=B.z(w,w.$ti.k("ai.E"))
this.a.f=w},
$S:0}
C.d2g.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:7}
C.d2i.prototype={
$0(){var w=this.a,v=w.a.d.b1,u=B.S(v).k("I<1,a0<n,@>>")
v=B.z(new B.I(v,new C.d2f(),u),u.k("ai.E"))
w.f=v},
$S:0}
C.d2f.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:7}
C.d2k.prototype={
$0(){var w=this.a,v=w.a.d.b1,u=B.S(v).k("I<1,a0<n,@>>")
v=B.z(new B.I(v,new C.d2j(),u),u.k("ai.E"))
w.f=v},
$S:0}
C.d2j.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:7}
C.d2c.prototype={
$0(){var w=0,v=B.j(x.c),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.c2W(t.a.c)?2:3
break
case 2:w=4
return B.b(C.amL(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.n(new C.d2a(t))
case 3:if(t.c!=null)t.n(new C.d2b(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:52}
C.d2a.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d2b.prototype={
$0(){return this.a.d++},
$S:0}
C.d2d.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d2e.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d24.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.hNi(t.a.d.b1,J.k(J.q(u.b,"id")),"rejected")
t.a.bm()
w=2
return B.b(C.aeG(t.a.d.b1),$async$$0)
case 2:w=3
return B.b(t.I7(),$async$$0)
case 3:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.d25.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a6(s)
C.hCv(t.a.d.b1,J.k(r.h(s,"id")),t.a.c.c)
t.a.bm()
w=2
return B.b(C.aeG(t.a.d.b1),$async$$0)
case 2:w=3
return B.b(t.I7(),$async$$0)
case 3:t.H2(A.d.dM(t.y,new C.d22(s),new C.d23(t)),J.k(r.h(s,"id")))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.d22.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d23.prototype={
$0(){return A.d.gI(this.a.y)},
$S:z+5}
C.d26.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d27.prototype={
$0(){return A.d.gI(this.a.y)},
$S:z+5}
C.d28.prototype={
$0(){return this.a.H2(this.b,J.k(J.q(this.c,"id")))},
$S:0}
C.d21.prototype={
$0(){return this.a.bUL(this.b)},
$S:0}
C.d20.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.hNJ(u,w.b,new C.d2_(v,w))},
$S:0}
C.d2_.prototype={
$2(d,e){return this.a.aet(this.b,d,e)},
$S:651}
C.d2q.prototype={
$2(d,e){if(d)return
this.a.aNR()},
$S:118}
C.d2o.prototype={
$2(d,e){var w=this.a
return new B.kU(C.aWq(w.a.c.a),new C.d2n(w,this.b,this.c),null,null,x.gH)},
$S:1619}
C.d2n.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=B.m(12)
v=B.m(12)
u=B.d(s>5000?"5000":""+s,t,t,t,t,t,t,t,t,t,t)
return B.aD(!1,A.X,!0,w,B.aH(!1,v,!0,new B.B(A.kW,B.bBF(A.cL,B.V(A.fR,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.d2m(this.a,d),t,t,t,t,t,t,t),A.h,this.b,0,t,t,t,t,t,A.ac)},
$S:1620}
C.d2m.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fdQ(s.c.a,s.e).eL(new C.d2l())
w=2
return B.b(C.bz3(u.b,t.a.c.a),$async$$0)
case 2:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.d2l.prototype={
$1(d){},
$S:29}
C.d2p.prototype={
$0(){return this.a.a.c.d},
$S:72}
C.dFh.prototype={
$0(){var w=this.a
return B.F4(w.a.c.a,new C.dFg(w))},
$S:72}
C.dFg.prototype={
$0(){return this.a.a.c.d},
$S:72}
C.dFi.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&B.c()
u.bc=t.ad()
v.bm()
w.n(new C.dFf())},
$S:0}
C.dFf.prototype={
$0(){},
$S:0}
C.dFj.prototype={
$2(d,e){var w,v=this.a
if(!C.c2W(v.a.c)){if($.fA2.q(0,A.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.fA3(this.b,v.x,w)
return!1}C.amL(v.a.c.a)}if(B.F4(v.a.c.a,new C.dFe(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aCP()
w=v.a
w.toString
w.hu(new B.cW(A.o.u(1000*Date.now()),v.a.c.a,d,A.jt,A.f8,e,null,null,A.cg,new B.N(Date.now(),0,!1)))
v.a.bm()
return!0},
$S:1621}
C.dFe.prototype={
$0(){return this.a.a.c.d},
$S:72}
C.dFk.prototype={
$3$bonus(d,e,f){var w,v=null,u=A.o.u(1000*Date.now()),t=this.a,s=t.a
s.hu(new B.cW(u,s.c.a,d,A.fA,A.f8,e,v,v,A.cg,new B.N(Date.now(),0,!1)))
t.a.bm()
w=f>0?"+$"+A.k.ab(d,2)+" total (includes $3 bonus for +3!)":"+$"+A.k.ab(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.v0(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1622}
C.d1T.prototype={
$0(){return this.a.a.c.d},
$S:72}
C.d1W.prototype={
$0(){return B.iC(this.a,null)},
$S:0}
C.d1X.prototype={
$0(){return this.a.a.c.d},
$S:72}
C.d1Y.prototype={
$1(d){var w=null,v=this.a,u=B.ff(w,w,v.e===d?A.bq:B.W(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,w,w,w,w,w,w,w,w)
return B.C(new B.B(A.eW,B.i3(B.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.d1V(v,d),u),w),1)},
$S:208}
C.d1V.prototype={
$0(){var w=this.a
return w.n(new C.d1U(w,this.b))},
$S:0}
C.d1U.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d3L.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.d3O.prototype={
$1(d){this.a.caB()
return null},
$S:14}
C.d3P.prototype={
$1(d){return this.a.cq0()},
$S:14}
C.d3Q.prototype={
$1(d){this.a.a_W()
return null},
$S:14}
C.d3R.prototype={
$1(d){this.a.afy()
return null},
$S:14}
C.d3S.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.ci)return
w=v.Q
w===$&&B.c()
if(w<=0){v.n(new C.d3M(v))
w=v.as
if(w!=null)w.a9(0)
v.DL()
return}v.n(new C.d3N(v))},
$S:14}
C.d3M.prototype={
$0(){return this.a.Q=0},
$S:0}
C.d3N.prototype={
$0(){var w=this.a,v=w.Q
v===$&&B.c()
w.Q=v-1
return v},
$S:0}
C.d30.prototype={
$0(){return this.a.by=this.b},
$S:0}
C.d31.prototype={
$0(){return this.a.by=this.b},
$S:0}
C.d3u.prototype={
$1(d){return this.a.go.q(0,d)},
$S:60}
C.d3v.prototype={
$0(){},
$S:0}
C.d3g.prototype={
$0(){var w=this.b
w.ci=!0
w.cT="Waiting for both players\u2026"
w.cd="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.d3h.prototype={
$0(){var w=this.a
w.ci=!0
w.cT="Both players connected"
w.cd="Starting together in a moment\u2026"},
$S:0}
C.d3i.prototype={
$0(){var w=this.b
w.ci=!0
w.cT="Match starting together\u2026"
w.cd="Both players start in "+A.o.D(this.c,1,99)+"s"},
$S:0}
C.d3j.prototype={
$0(){this.b.ci=!1},
$S:0}
C.d3k.prototype={
$0(){},
$S:0}
C.d2t.prototype={
$0(){var w=this.a,v=w.x2,u=B.t(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.d3_.prototype={
$0(){var w=this.a
w.at=this.b
w.b_F()},
$S:0}
C.d3w.prototype={
$0(){},
$S:0}
C.d3F.prototype={
$0(){},
$S:0}
C.d3t.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.n(new C.d3s(w))},
$S:0}
C.d3s.prototype={
$0(){var w=this.a
w.y=!0
w.z=new B.N(Date.now(),0,!1)},
$S:0}
C.d2Y.prototype={
$0(){var w=this.a;++w.Y
w.y=!1
w.z=null},
$S:0}
C.d2Z.prototype={
$0(){},
$S:0}
C.d3A.prototype={
$1(d){return d==null},
$S:248}
C.d3B.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
A.d.cu(v.ch,w.d)},
$S:0}
C.d3C.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.d2u.prototype={
$1(d){return d==null},
$S:248}
C.d2v.prototype={
$0(){return this.a.bc++},
$S:0}
C.d2w.prototype={
$0(){},
$S:0}
C.d39.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.d3a.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.H(0,t)
w=this.c
u.H(0,w)
if(v.ghq()&&D.ma.q(0,v.a.e)){u=v.id
u.H(0,t)
u.H(0,w);++v.fx}++v.k2
v.fy=B.a([],x.t)},
$S:0}
C.d3b.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.n(new C.d38(w))},
$S:11}
C.d38.prototype={
$0(){var w=this.a
w.fy=B.a([],x.t)
w.k1=!1},
$S:0}
C.d3l.prototype={
$0(){return this.a.y1++},
$S:0}
C.d3m.prototype={
$0(){},
$S:0}
C.d3n.prototype={
$0(){return this.a.y2++},
$S:0}
C.d3o.prototype={
$0(){},
$S:0}
C.d3p.prototype={
$0(){return this.a.b1++},
$S:0}
C.d3q.prototype={
$0(){},
$S:0}
C.d3z.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.d3c.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d3d.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.d3e.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d3f.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.d3D.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.d3E.prototype={
$0(){var w=this.a
w.ok.push(w.d.aG(4))
w.p2=0},
$S:0}
C.d2x.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d2y.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.d2z.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d2A.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.d3x.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.d3y.prototype={
$0(){var w,v=this.a;++v.x2
v.aJN()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+B.t(Math.min(w+2,7))+" tiles"},
$S:0}
C.d37.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.d3r.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d35.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d36.prototype={
$2(d,e){return d+e.length},
$S:204}
C.d3G.prototype={
$0(){return B.iC(this.a,null)},
$S:0}
C.d3H.prototype={
$0(){return this.a.a.c.d},
$S:72}
C.d3I.prototype={
$0(){return this.a.a.c.d},
$S:72}
C.d3K.prototype={
$1(d){var w=this.a,v=w.MP(),u=v<=0?0:A.k.D(w.z3()/v,0,1),t=w.a.x,s=t*1.46
return new C.Lx(w.f?s:s*u,s,t,null)},
$S:z+21}
C.d3J.prototype={
$1(d){return d.bR(0.85)},
$S:156}
C.d34.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghq()&&D.ma.q(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return B.u(B.a([B.d(p,w,w,w,w,w,w,A.js,A.L,w,w),A.ar,B.C(B.as(new B.a3(r*v+u,r*t+s,B.ig(!0,w,w,A.z,new B.hI(v,6,6,1,r),new C.d33(q,r),q.fr.length,w,A.dJ,A.ah,!1),w),w,w,w),1)],x.p),A.m,w,A.e,A.j,0,A.p)},
$S:149}
C.d33.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.q(0,e),p=r.ghq()&&D.ma.q(0,r.a.e)&&q&&r.id.q(0,e),o=r.ghq()&&D.ma.q(0,r.a.e)&&q&&!p,n=A.d.q(r.fy,e)||q,m=p?D.ajm:D.bEM,l=B.m(10),k=B.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.ajm:D.ajg
v=o?B.G(A.dE,A.r,2):s
u=B.a([new B.a9(0,A.G,B.W(51,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.J,4)],x.V)
t=this.b*0.42
return B.aH(!1,l,!0,B.dg(s,B.as(n?B.V(D.c7w[r.fr[e]],A.c,s,s,s,t):B.d("?",s,s,s,s,s,s,B.l(s,s,A.c,s,s,s,s,s,s,s,s,t,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,A.ba,new B.o(s,s,v,k,u,w,A.n),A.eD,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.d32(r,e),s,s,s,s,s,s,s)},
$S:193}
C.d32.prototype={
$0(){return this.a.c9Y(this.b)},
$S:0}
C.d2N.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?B.W(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.W(89,A.bq.l()>>>16&255,A.bq.l()>>>8&255,A.bq.l()&255),r=B.m(10),q=B.m(10),p=B.m(10),o=B.G(B.W(64,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
return B.aD(!1,A.X,!0,r,B.aH(!1,q,!0,B.p(A.B,B.d(t?"":u,w,w,w,w,w,w,D.aJd,w,w,w),A.h,w,w,new B.o(w,w,o,p,w,w,A.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d2M(v,d),w,w,w,w,w,w,w),A.h,s,0,w,w,w,w,w,A.ac)},
$S:654}
C.d2M.prototype={
$0(){return this.a.cpk(this.b)},
$S:0}
C.d2O.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=B.W(46,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
return B.aD(!1,A.X,!0,B.m(10),B.aH(!1,B.m(10),!0,B.p(A.B,B.d(u,w,w,w,w,w,w,D.aJd,w,w,w),A.h,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d2L(v,d),w,w,w,w,w,w,w),A.h,t,0,w,w,w,w,w,A.ac)},
$S:654}
C.d2L.prototype={
$0(){return this.a.cpj(this.b)},
$S:0}
C.d2P.prototype={
$1(d){return this.a.n(new C.d2K())},
$S:27}
C.d2K.prototype={
$0(){},
$S:0}
C.d2Q.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&B.c()
w=C.aeR(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.om()
if(u.ghq()&&D.ma.q(0,u.a.e)){u.Zg()
u.mt(!0)}else{v=A.d.cI(u.cy,0,new C.d2I())
t=u.dx
if(t>=v)u.rV("All 5 sentences perfect \u2014 full payout!")
else u.Dc(t/v,t,v)}}else{if(u.ghq()&&D.ma.q(0,u.a.e))u.Zg()
u.n(new C.d2J(u))}},
$S:0}
C.d2I.prototype={
$2(d,e){return d+e.length},
$S:204}
C.d2J.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bG(0,A.c_)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.d2R.prototype={
$1(d){var w=null,v=B.ff(w,w,B.W(38,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,A.ca,w,w,w,w,w,w,w)
return new B.B(A.cH,new B.a3(1/0,w,B.i3(B.d(d,w,w,w,w,w,w,U.aJ7,w,w,w),new C.d2H(this.a,d),v),w),w)},
$S:128}
C.d2H.prototype={
$0(){return this.a.b_1(this.b)},
$S:0}
C.d2S.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&B.c()
w=u*3+8
return B.u(B.a([B.d(s,v,v,v,v,v,v,A.nF,v,v,v),A.P,B.C(B.as(new B.a3(w,w,B.ig(!0,v,v,A.z,new B.hI(3,4,4,1,u),new C.d2G(t,u),9,v,A.dJ,A.ah,!1),v),v,v,v),1)],x.p),A.m,v,A.e,A.j,0,A.p)},
$S:149}
C.d2G.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.aXS(e),p=r===0
if(p)w=A.K
else w=q?A.bq:B.W(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v=B.m(10)
s=p?t:new C.d2C(s,e)
u=B.m(10)
p=p?"":""+r
return B.aD(!1,A.X,!0,v,B.aH(!1,u,!0,B.as(B.d(p,t,t,t,t,t,t,B.l(t,t,A.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),A.h,w,0,t,t,t,t,t,A.ac)},
$S:74}
C.d2C.prototype={
$0(){return this.a.cpi(this.b)},
$S:0}
C.d2T.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.d2F(q,d)
p=B.m(16)
if(o)w=D.a_2[d]
else{w=D.a_2[d]
w=B.W(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=B.m(16)
u=o?B.W(A.k.U(127.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.W(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
u=B.G(u,A.r,o?2:1)
t=x.V
if(o){s=D.a_2[d]
t=B.a([new B.a9(0,A.G,B.W(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.J,16)],t)}else t=B.a([],t)
return B.aH(!1,p,!0,B.dg(r,r,r,r,A.ba,new B.o(w,r,u,v,t,r,A.n),T.zu,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1626}
C.d2F.prototype={
$0(){return this.a.cpl(this.b)},
$S:0}
C.d2U.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&B.c()
q=B.d(q,t,t,t,t,t,t,A.nF,t,t,t)
w=B.d("Move "+r.aun()+"/"+C.fG0(),t,t,t,t,t,t,A.BN,t,t,t)
v=r.x2
u=s*3+12
return B.u(B.a([q,w,B.d("Round "+v+"/7 \xb7 "+B.t(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,B.l(t,t,B.W(153,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.C(B.as(new B.a3(u,u,B.ig(!0,t,t,A.z,new B.hI(3,6,6,1,s),new C.d2E(r),9,t,A.dJ,A.ah,!1),t),t,t,t),1)],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:149}
C.d2E.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=B.m(10),s=B.m(10),r=u?A.bq:D.b1v,q=u?A.eY:D.b8O
return B.aD(!1,A.X,!0,w,B.aH(!1,t,!0,B.p(w,w,A.h,w,w,new B.o(r,w,B.G(q,A.r,u?2.5:1),s,w,w,A.n),w,w,w,w,w,w,w,w),w,!0,w,w,A.K,w,w,w,w,w,w,w,w,new C.d2B(v,e),w,w,w,w,A.K,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)},
$S:74}
C.d2B.prototype={
$0(){return this.a.cpg(this.b)},
$S:0}
C.d2V.prototype={
$0(){return this.a.b_1(this.b[this.c])},
$S:0}
C.d2W.prototype={
$0(){return this.a.n(new C.d2D())},
$S:0}
C.d2D.prototype={
$0(){},
$S:0}
C.d2X.prototype={
$2(d,e){this.a.Y3(d,e)
return null},
$S:z+36}
C.d72.prototype={
$1(d){return this.a.caq(this.b,d)},
$S:1627}
C.d71.prototype={
$0(){var w=this
return w.a.a.cHl(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cw4.prototype={
$1(d){var w=this.a
w.Zx()
w.t1()},
$S:8}
C.cvp.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cvf.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cvg.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cvz.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cvw.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cvx.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cvy.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cvr.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new C.cvq(w))},
$S:0}
C.cvq.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cvh.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.aa(w.c)
v.dy=J.aa(w.d)
v.fr=J.aa(w.e)},
$S:0}
C.cvu.prototype={
$1(d){var w=this.a
return new C.Td(w.fx,new C.cvt(w),w.a.f.r,null)},
$S:z+11}
C.cvt.prototype={
$1(d){return this.bdG(d)},
bdG(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.c3P(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.n(new C.cvs(r,d))
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:z+37}
C.cvs.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cvS.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cvM.prototype={
$1(d){this.a.t1()
return null},
$S:14}
C.cvP.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(A.o.ak(v.gaQF().a,1e6)<=0){w=v.id
if(w!=null)w.a9(0)
v.t1()
return}v.n(new C.cvO())},
$S:14}
C.cvO.prototype={
$0(){},
$S:0}
C.cvL.prototype={
$1(d){this.a.DR()
return null},
$S:14}
C.cvN.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cvK.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=B.bg(J.k(v==null?"":v))
if(u==null)u=new B.N(B.fI(0,0,!1),0,!1)
v=J.q(e,"at")
w=B.bg(J.k(v==null?"":v))
return u.aI(0,w==null?new B.N(B.fI(0,0,!1),0,!1):w)},
$S:39}
C.cvm.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=B.bg(J.k(v==null?"":v))
if(u==null)u=new B.N(B.fI(0,0,!1),0,!1)
v=J.q(e,"at")
w=B.bg(J.k(v==null?"":v))
return u.aI(0,w==null?new B.N(B.fI(0,0,!1),0,!1):w)},
$S:39}
C.cvn.prototype={
$0(){var w=this.a,v=w.f
A.d.a8(v)
A.d.v(v,this.b)
w.ax=!0},
$S:0}
C.cvo.prototype={
$0(){var w=this.a
if(w.c!=null)w.a_c(!0)},
$S:11}
C.cvk.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cvl.prototype={
$1(d){var w=this.a.e
w===$&&B.c()
if(w.f.length!==0)w.RR(this.b)},
$S:8}
C.cvC.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=A.d.gcV(v).Q
v.toString
if(this.b)w.hO(v)
else w.lD(v,A.dU,A.kq)},
$S:8}
C.cvv.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cvD.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cvE.prototype={
$0(){var w=this.a
w.f.push(B.D(["role","user","text",this.b,"at",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z))
w.b0r()
w.r.bG(0,A.c_)
w.at=!0},
$S:0}
C.cvF.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cvG.prototype={
$0(){var w=this.a
w.f.push(B.D(["role","ai","text",this.b,"at",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z))
w.at=!1},
$S:0}
C.cvH.prototype={
$0(){var w,v=this.b,u=B.R(x.N,x.z)
J.aE(u,"role","ai")
J.aE(u,"text",this.c)
J.aE(u,"at",new B.N(Date.now(),0,!1).a4().aa())
w=this.a
if(J.cs(w.b)){w=J.b4(w.b,v.gc9p(),x.P)
w=B.z(w,w.$ti.k("ai.E"))
J.aE(u,"phoneActions",w)}v.f.push(u)
v.b0r()},
$S:0}
C.cvI.prototype={
$0(){this.a.f.push(B.D(["role","ai","text",y.g,"at",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z))},
$S:0}
C.cvJ.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cvA.prototype={
$1(d){return this.bdH(d)},
bdH(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
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
return B.b(C.an8(q,new C.qJ("cal_"+1000*n,m,l,(o==null?p.bL(36e8):o).bO(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.ano()
case 4:k.c.F(x.q).f.P(B.b_(null,null,null,A.dk,null,A.q,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:406}
C.cvR.prototype={
$1(d){return this.bdI(d)},
bdI(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.F(x.q).f.P(B.b_(null,null,null,A.dk,null,A.q,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:406}
C.cvB.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=A.d.gcV(v).Q
v.toString
w.hO(v)},
$S:8}
C.cw3.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.c()
if(v>0)w.a8w(v-1)},
$S:0}
C.cvX.prototype={
$0(){return B.iC(this.a,null)},
$S:0}
C.cw_.prototype={
$1(d){var w=this.a
w.n(new C.cvU(w,d))
if(d===0)w.a_c(!0)},
$S:27}
C.cvU.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cvY.prototype={
$2$size(d,e){return C.fEr(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:1628}
C.cvZ.prototype={
$0(){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.fQE(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return B.b(H.anW(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cvV(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return B.b(C.an6(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return B.b(p.t1(),$async$$0)
case 15:p.n(new C.cvW(p))
p.a8w(0)
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
$S:63}
C.cvV.prototype={
$2(d,e){return this.bdJ(d,e)},
bdJ(d,e){var w=0,v=B.j(x.y),u,t=this,s,r,q,p
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=B.a_K(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$S:119}
C.cvW.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cw1.prototype={
$2(d,e){return A.aa},
$S:35}
C.cw0.prototype={
$2(d,e){var w=null,v=this.a,u=B.d((v.a.c.w?D.a_8:D.Zv)[e],w,w,w,w,w,w,A.pA,w,w,w),t=B.W(31,A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255),s=B.W(89,A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255)
v=v.at?w:new C.cvT(v,e)
return B.mG(w,t,u,w,v,w,w,new B.ax(s,1,A.r,-1),w)},
$S:504}
C.cvT.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a_8:D.Zv
w.r.saR(0,v[this.b])
w.ms()
return null},
$S:0}
C.cw2.prototype={
$1(d){var w=this.a
return w.at?null:w.ms()},
$S:2}
C.cvi.prototype={
$0(){return this.a.a8w(0)},
$S:0}
C.cvQ.prototype={
$0(){return this.a.a8w(this.b)},
$S:0}
C.cvj.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=B.p(v,D.bzD,A.h,v,v,new B.o(v,v,v,v,v,new B.a8(A.a1,A.a7,A.w,B.a([B.W(51,A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255),w.b],x.O),v,v),A.a6),v,72,v,v,v,v,v,72)
t=w.c
s=B.d("Start a conversation",v,v,v,v,v,v,B.l(v,v,t?A.c:A.aG,v,v,v,v,v,v,v,v,16,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return B.as(new B.B(A.UT,B.u(B.a([u,A.ab,s,A.ar,B.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,B.l(v,v,t?A.aB:A.aV,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),v,v,v)}if(e<s)return u.byH(t[e],w.c)
return u.aKn(B.D(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:42}
C.bTo.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=A.k.M(d)
return new B.N(B.fI(w>1e11?w:w*1000,0,!0),0,!0).bO()}v=B.bg(J.k(d))
return v==null?null:v.bO()},
$S:333}
C.bTn.prototype={
$1(d){B.aQ(d)
return(d==null?0:d)/100},
$S:665}
C.bTq.prototype={
$1(d){var w
if(d==null)w=null
else{w=B.bg(J.k(d))
w=w==null?null:w.bO()}return w},
$S:333}
C.bTp.prototype={
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
s=B.a2h(A.a_L,J.k(s==null?"reimbursement":s))
r=J.q(w,"method")
r=B.a2h(A.Zt,J.k(r==null?"system":r))
q=B.aR(J.q(w,"sourceDetails"))
p=J.q(w,"status")
p=B.a2h(A.Fa,J.k(p==null?"approved":p))
o=this.a.$1(J.q(w,"timestamp"))
if(o==null)o=new B.N(Date.now(),0,!1)
return new B.cW(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:593}
C.dnz.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dnA.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dnq.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bi(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dno.prototype={
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
return B.b(C.fz0(t,s,r,q),$async$$0)
case 3:p=e
w=4
return B.b(B.oA(o.a.c,!1),$async$$0)
case 4:o.ko(p)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dny.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.a74(),$async$$0)
case 3:q=e
if(q==null){r.ko("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return B.b(B.a7(s,!1).cr(B.eH(new C.dnx(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return B.b(B.oA(r.a.c,!1),$async$$0)
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dnx.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&B.c()
return new C.XT(w.b,w.a,u,v,null)},
$S:z+38}
C.dnn.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.hjI(q)?3:4
break
case 3:w=5
return B.b(t.a.Dr(A.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return B.b(C.aU0(q,s.a.c),$async$$0)
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
case 9:s.ko(C.bTs(s.a.c))
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
return B.b(s.aLB(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dnm.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=B.bi(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dnp.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.aal(),$async$$0)
case 3:q=e
if(q==null||A.a.i(q).length===0){w=1
break}s=C.fNG(q)
if(s==null){r.ko("Could not read that backup file.")
w=1
break}if(!C.bTr(s,r.a.c,null)){r.ko(C.bTs(r.a.c))
w=1
break}w=4
return B.b(r.bAZ(s),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dnw.prototype={
$1(d){var w=null,v=new B.ao(A.aq,$.at()),u=B.K(d).ax.a===A.H,t=u?A.hn:A.c,s=x.p,r=B.u(B.a([B.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,B.l(w,w,u?A.al:A.aj,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),A.ay,B.aK(w,A.U,!0,w,!0,A.q,w,B.aL(),v,w,w,w,w,w,2,B.bl(w,new B.b1(4,B.m(14),A.da),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),A.z,!0,w,!0,w,!1,w,A.ae,w,w,w,w,w,A.dL,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.L,w,A.am,w,w,w,w)],s),A.F,w,A.e,A.R,0,A.p)
return B.ep(B.a([B.bG(!1,A.df,w,w,!0,w,w,new C.dnu(d),w,w),B.bJ(D.eDA,new C.dnv(d,v),B.bk(A.aS,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.eQV,w)},
$S:20}
C.dnu.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.dnv.prototype={
$0(){var w=A.a.i(this.b.a.a)
B.a7(this.a,!1).K(w)
return null},
$S:0}
C.dnr.prototype={
$1(d){return D.f4b},
$S:z+12}
C.dns.prototype={
$0(){return this.a.Ds(A.a.i(this.b))},
$S:1}
C.dnt.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(C.aU0(t.b,r.a.c),$async$$0)
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
case 7:r.ko(C.bTs(r.a.c))
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
return B.b(r.aLB(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dnB.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.dnF.prototype={
$1(d){this.a.P0()
return null},
$S:14}
C.dnC.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dnD.prototype={
$0(){var w=null,v=this.a
B.fC(new B.fv(v.gasN()))
this.b.F(x.q).f.P(B.b_(w,w,w,w,w,A.q,w,B.d("Code "+v.gasN()+" copied",w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dnE.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.dnG.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:A.a.i(t)
if(s==null||s.length===0)continue
if(!(A.a.a_(s,"NGMYSNAP1|")||A.a.a_(s,"NGMYLOCALSYNC1|")||A.a.a_(s,"NGMYLOCALLIVE1|")||A.a.a_(s,"NGMYLOCALDEP1|")))continue
r.e=!0
B.a7(this.b,!1).K(s)
return}},
$S:176}
C.f5D.prototype={
$1(d){return D.f2u},
$S:z+13}
C.f6Q.prototype={
$1(d){return new C.abZ(this.a,this.b,this.c,null)},
$S:z+14}
C.eEQ.prototype={
$0(){B.a7(this.a,!1).K(!1)
return null},
$S:0}
C.eER.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.cYi.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.ft()},
$S:8}
C.cYf.prototype={
$2(d,e){return e.ahE(e.a.toUpperCase())},
$S:1629}
C.cYg.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=A.a.i(w.d.a.a)
B.a7(v,!1).K(w)
return null},
$S:2}
C.cYh.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.bU9.prototype={
$1(d){var w=J.q(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!A.d.be(D.cUw,A.a.gkQ(v))},
$S:4}
C.fdK.prototype={
$1(d){return d.a===this.a},
$S:1630}
C.fdL.prototype={
$0(){return A.d.gI(A.AI)},
$S:1631}
C.du0.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.n(new C.du_(v))
w=v.r
w===$&&B.c()
if(w<=0)v.b_w("Time's up")},
$S:14}
C.du_.prototype={
$0(){var w=this.a,v=w.r
v===$&&B.c()
w.r=v-1
return v},
$S:0}
C.dtS.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dtX.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.n(new C.dtU(w,d,e))},
$S:132}
C.dtU.prototype={
$0(){var w=this.a,v=this.c
w.e=A.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dtY.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new C.dtT(w))
w.cjP(!0)},
$S:0}
C.dtT.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dtZ.prototype={
$1(d){this.a.b_w(d)
return null},
$S:2}
C.dtV.prototype={
$0(){return B.iC(this.a,null)},
$S:0}
C.dtW.prototype={
$0(){return this.a.a.c.d},
$S:72}
C.f7B.prototype={
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
$S:1632}
C.f7C.prototype={
$2(d,e){var w=B.aQ(J.q(d,e))
w=w==null?null:A.k.M(w)
return w==null?0:w},
$S:566}
C.f7D.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:204}
C.fkJ.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.fYP(w,v):C.fEJ(w,v)
if(u===3)++w.f
C.adm(w,this.c,u)
return u},
$S:1633}
C.fkL.prototype={
$0(){return C.fYP(this.a,this.b)},
$S:113}
C.fkK.prototype={
$0(){return C.fEJ(this.a,this.b)},
$S:113}
C.dnb.prototype={
$0(){var w=this.a
if(w.a.c)w.n(new C.dna(w))},
$S:0}
C.dna.prototype={
$0(){this.a.r=1+A.o.J(B.Du(new B.N(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dnc.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&B.c()
u=u.x
u===$&&B.c()
w=A.k.bK(u*10)
if(w!==v.w)v.n(new C.dn9(v,w))}},
$S:0}
C.dn9.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.c2v.prototype={
$3(d,e,f){var w=null
return B.C(B.u(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,A.I,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.bw,B.eY(A.B,B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,A.dp)],x.p),A.m,w,A.e,A.j,0,A.p),1)},
$S:1634}
C.c2u.prototype={
$3(d,e,f){var w=null
return B.d("$"+A.k.ab(e,2),w,w,w,w,w,w,A.oq,w,w,w)},
$S:359}
C.c2X.prototype={
$1(d){return new C.LF(this.a,this.b,!1,null,null)},
$S:z+15}
C.dM4.prototype={
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
o.push(B.p(g,D.bvg,A.h,g,g,new B.o(g,g,B.G(A.aM.j(0.8),A.r,2.5),g,B.a([new B.a9(0,A.G,A.b0.j(0.55),A.cv,18)],n),E.t4,A.a6),g,88,g,g,g,g,g,88))
o.push(A.aN)
o.push(B.nm(A.j4,D.eOK,new C.dM0()))
o.push(A.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(B.d(m,g,g,g,g,g,g,B.l(g,g,A.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,A.cp,g,1.45,!0,g,g,g,g,g,g,g,g),A.L,g,g))
m=this.b
if(m.length!==0){l=A.cN.j(0.12)
k=B.m(18)
j=B.G(A.cN.j(0.45),A.r,1)
i=B.a([B.A(B.a([B.V(D.bpe,A.cN.j(0.95),g,g,g,20),A.aa,B.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,B.l(g,g,A.cN.j(0.95),g,g,g,g,g,g,g,g,13,g,g,A.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),A.m,g,A.e,A.j,0,g,g),A.T,B.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,B.l(g,g,A.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),A.T],p)
A.d.v(i,new B.I(m,new C.dM1(),B.S(m).k("I<1,r>")))
A.d.v(o,B.a([A.aN,B.p(g,B.u(i,A.F,g,A.e,A.j,0,A.p),A.h,g,g,new B.o(l,g,j,k,g,g,A.n),g,g,g,g,A.bA,g,g,1/0)],p))}o.push(A.bs)
m=A.x.j(0.35)
l=B.m(18)
k=B.G(A.b0.j(0.35),A.r,1)
o.push(B.p(g,B.u(B.a([f.atk(A.hg,"Unlimited games with an active plan",A.bc),A.P,f.atk(A.jZ,"Weekday check-ins grow your balance",A.b0),A.P,f.atk(A.lX,"Compete, bet, and earn points",A.aM)],p),A.m,g,A.e,A.j,0,A.p),A.h,g,g,new B.o(m,g,k,l,g,g,A.n),g,g,g,g,A.bA,g,g,1/0))
o.push(A.d1)
l=B.m(16)
n=B.a([new B.a9(0,A.G,A.bz.j(0.45),A.cv,16)],n)
o.push(new B.a3(1/0,g,B.bQ(B.dj(D.byr,D.eKD,new C.dM2(f,a0),B.bk(A.K,g,g,g,A.c,A.GS,g,A.K,new B.b5(B.m(16),A.V),g,g,g)),new B.o(g,g,g,l,n,E.t4,A.n),A.b7),g))
o.push(A.P)
n=f.a.e?"Back":"Maybe later"
o.push(B.bG(!1,B.d(n,g,g,g,g,g,g,B.l(g,g,A.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,new C.dM3(f,a0),g,g))
if(f.a.e)o.push(A.b6)
h=B.p(g,B.bu(v,new B.am(A.W,g,A.a9,A.q,B.a([t,u,new B.B(new B.L(22,r,22,q),B.u(o,A.m,g,A.e,s,0,A.p),g)],p),g),A.ap),A.h,g,g,new B.o(g,g,e,d,w,D.bHj,A.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return B.eB(g,A.K,h,g,g,g,Ac.Vo,A.cZ,g,g,g)},
$S:655}
C.dM0.prototype={
$1(d){return D.bGl.aB(0,d)},
$S:65}
C.dM1.prototype={
$1(d){var w=null
return new B.B(A.fh,B.A(B.a([B.V(Aj.Xe,A.cN.j(0.85),w,w,w,14),A.aa,B.C(B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$S:128}
C.dM2.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{B.a7(this.b,!1).K(null)
w.a.c.$0()}},
$S:0}
C.dM3.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else B.a7(this.b,!1).K(null)},
$S:0}
C.fg6.prototype={
$1(d){if(d.gm9())this.a.a=d
return d.gm9()},
$S:468}
C.ffU.prototype={
$1(d){$.aS.x1$.push(new C.ffT(this.a))},
$S:8}
C.ffT.prototype={
$1(d){return this.a.$0()},
$S:8}
C.f3U.prototype={
$1(d){return C.fYV(this.a,this.b+1)},
$S:8}
C.fhs.prototype={
$2(d,e){var w=B.aG(d,A.bO,x.w).w.a
return new B.a3(w.a,w.b,B.ce(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:164}
C.c39.prototype={
$1(d){return d.r===this.a},
$S:313}
C.c3a.prototype={
$1(d){var w=$.aNj(),v=w.a
w.st(0,v+1)
return v},
$S:1637}
C.c3b.prototype={
$1(d){},
$S:29}
C.c38.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:313}
C.c37.prototype={
$1(d){return d.f.c6(this.a)},
$S:313}
C.f25.prototype={
$1(d){return B.t(d.h(0,1))+","},
$S:70}
C.fsM.prototype={
$1(d){return C.a4Y(this.a)},
$S:99}
C.fsN.prototype={
$1(d){var w=$.aNj()
w.st(0,w.a+1)},
$S:28}
C.fsO.prototype={
$1(d){},
$S:29}
C.fsP.prototype={
$1(d){return new B.k1($.aNj(),new C.fsL(this.a,this.b),null,null,x.am)},
$S:1638}
C.fsL.prototype={
$3(d,e,f){var w=this.b
return new B.kU(C.amQ(this.a,!1),new C.fsK(w),w,null,x.gv)},
$S:1639}
C.fsK.prototype={
$2(d,e){var w=e.b
return new C.aaP(w==null?this.a:w,null)},
$S:z+16}
C.dM7.prototype={
$1(d){return d.c},
$S:313}
C.dM8.prototype={
$1(d){return d.gbaE()},
$S:1640}
C.dM9.prototype={
$2(d,e){return d+e},
$S:93}
C.dMa.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.dMc.prototype={
$2(d,e){return A.P},
$S:35}
C.dMb.prototype={
$2(d,e){return new C.aaO(J.q(this.a.c,e),null)},
$S:z+17}
C.dM6.prototype={
$1(d){return d==null?"\u2026":C.bvA(d)},
$S:1641}
C.fsS.prototype={
$3(d,e,f){var w=this
return B.qV(new C.ax8(w.a,w.b,w.c,w.d,new C.fsQ(d,w.e),new C.fsR(d,w.f),null))},
$C:"$3",
$R:3,
$S:92}
C.fsQ.prototype={
$0(){B.a7(this.a,!1).K(null)
C.h0R(this.b)},
$S:0}
C.fsR.prototype={
$0(){B.a7(this.a,!1).K(null)
C.h0R(this.b)},
$S:0}
C.d3U.prototype={
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
A.d.v(w,new B.I(t,new C.d3T(),B.S(t).k("I<1,r>")))}t=h.d
t===$&&B.c()
t=t.x
t===$&&B.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,B.aG(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?B.a([A.bq,A.fo,A.eM],r):B.a([A.aH,A.f4,A.fq],r)
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
r=B.a([X.a9Y,A.rg],r)
l.push(new B.a3(i,100,new B.am(A.B,i,A.a9,A.h,B.a([B.fm(A.B,B.p(i,D.aXq,A.h,i,i,new B.o(i,i,i,i,B.a([new B.a9(4,A.G,A.cL.j(0.6),A.J,24),new B.a9(0,A.G,A.x.j(0.3),A.dm,12)],n),new B.bS(A.B,0.5,A.w,i,0,r,i,i),A.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.bBD)
l.push(A.ay)
l.push(B.d(h.a.d,i,i,i,i,i,i,A.a4l,A.L,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=B.m(18)
k=B.G(A.fo,A.r,4)
A.d.v(l,B.a([A.ay,D.eFc,A.P,B.p(i,B.d(r,i,i,i,i,i,i,D.ewk,A.L,i,i),A.h,i,i,new B.o(A.c,i,k,n,i,i,A.n),i,i,i,i,A.UR,i,i,1/0)],g))}A.d.v(l,B.a([A.ab,B.d(h.a.e,i,i,i,i,i,i,D.eyW,A.L,i,i)],g))
l.push(A.dW)
r=B.C(B.dU(D.eCU,h.a.r,B.d9(i,i,i,i,i,i,i,i,i,A.c,i,i,A.ca,i,i,D.aPt,i,i,i,i)),1)
h=h.a
n=h.w
l.push(B.A(B.a([r,A.av,B.C(B.bJ(F.aKv,n,B.bk(A.c,i,i,i,h.c?A.fo:A.f4,i,A.ca,i,i,i,i,i)),1)],g),A.m,i,A.e,A.j,0,i,i))
w.push(B.e4(A.B,B.p(i,B.u(l,A.m,i,A.e,A.R,0,A.p),A.h,i,i,new B.o(i,i,o,p,m,new B.a8(A.ax,A.aD,A.w,q,i,i),A.n),i,i,i,A.a8,A.adt,i,i,s),1+t*0.02,i,i))
return new B.am(A.B,i,A.a9,A.h,w,i)},
$S:108}
C.d3T.prototype={
$1(d){var w=null,v=d.a,u=d.b
return B.an(w,B.d4(B.et(A.B,d.d,B.V(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+18}
C.c4L.prototype={
$2(d,e){var w=null,v=this.a,u=C.hj9(B.F4(v.c,v.d))
return B.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1642}
C.c4K.prototype={
$1(d){return B.t(d.h(0,1))+","},
$S:70}
C.bUG.prototype={
$0(){},
$S:0}
C.f14.prototype={
$1(d){return A.o.u(d)},
$S:83}
C.dFn.prototype={
$0(){return this.a.y=!0},
$S:0}
C.dFo.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.dFp.prototype={
$0(){var w=this.a
return w.w=D.O2[w.d.aG(5)]},
$S:0}
C.dFq.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.dFr.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.dFs.prototype={
$0(){var w=this.a
return w.n(new C.dFm(w))},
$S:0}
C.dFm.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dFt.prototype={
$0(){var w=this.a
return w.n(new C.dFl(w))},
$S:0}
C.dFl.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dFw.prototype={
$0(){return B.iC(this.a,null)},
$S:0}
C.dFx.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&A.a.i(t.e.a.a).length===0?A.bq:B.W(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),r=B.m(10)
t=t.y?u:new C.dFv(t,d)
w=B.m(10)
v=A.k.ab(d,0)
return B.C(new B.B(A.jX,B.aD(!1,A.X,!0,r,B.aH(!1,w,!0,new B.a3(u,38,B.as(B.d("$"+v,u,u,u,u,u,u,B.l(u,u,A.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),A.h,s,0,u,u,u,u,u,A.ac),u),1)},
$S:1643}
C.dFv.prototype={
$0(){var w=this.a
return w.n(new C.dFu(w,this.b))},
$S:0}
C.dFu.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bG(0,A.c_)},
$S:0}
C.dMu.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+A.cM.gcq().aE(this.c)},
$S:0}
C.dMv.prototype={
$0(){return B.iC(this.a,null)},
$S:0}
C.dMq.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=B.m(14),s=u?A.c.j(0.1):A.K,r=B.G(u?D.eu.j(0.5):A.K,A.r,1),q=B.V(e,u?D.eu:A.aB,w,w,w,20)
return B.C(B.aJ(w,B.dg(w,B.A(B.a([q,A.bp,B.d(f,w,w,w,w,w,w,B.l(w,w,u?A.c:A.aB,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.b5,A.j,0,w,w),w,w,A.ba,new B.o(s,w,r,t,w,w,A.n),A.X,w,46,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dMs(v,d),w,w,w,w,w,w,!1,A.af),1)},
$S:1644}
C.dMs.prototype={
$0(){var w=this.a
return w.n(new C.dMr(w,this.b))},
$S:0}
C.dMr.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dMt.prototype={
$0(){var w=this.a,v=w.d===A.k5?"Cash App tag":"Bitcoin address"
return w.Hp(this.b,v)},
$S:0}
C.dMp.prototype={
$0(){var w=this.a
return w.Hp(w.gaog(),"Code")},
$S:0}
C.c3B.prototype={
$1(d){return C.hfi(B.Z(d,x.N,x.z))},
$S:z+19}
C.c3C.prototype={
$2(d,e){return d.c.aI(0,e.c)},
$S:z+6}
C.c3y.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.c3z.prototype={
$2(d,e){return d.c.aI(0,e.c)},
$S:z+6}
C.c3A.prototype={
$1(d){return d.ad()},
$S:z+22}
C.c3D.prototype={
$1(d){var w=d.c
return!w.cU(this.a.bL(-36e8))&&!w.c6(this.b)},
$S:z+7}
C.bX3.prototype={
$1(d){return C.hfj(B.Z(d,x.N,x.z))},
$S:z+23}
C.bX4.prototype={
$2(d,e){return e.b.aI(0,d.b)},
$S:z+8}
C.bX1.prototype={
$1(d){return d.ad()},
$S:z+25}
C.bX2.prototype={
$2(d,e){return e.b.aI(0,d.b)},
$S:z+8}
C.bX6.prototype={
$1(d){var w=d.b
return!w.cU(this.a)&&!w.c6(this.b)},
$S:z+26}
C.c3K.prototype={
$1(d){return d.ad()},
$S:z+27}
C.c3J.prototype={
$1(d){return C.fPQ(B.Z(x.f.a(d),x.N,x.z))},
$S:z+28}
C.c3I.prototype={
$1(d){return d.ad()},
$S:z+29}
C.c3H.prototype={
$1(d){return C.hiO(B.Z(x.f.a(d),x.N,x.z))},
$S:z+30}
C.c3M.prototype={
$1(d){return C.hiN(B.Z(x.f.a(d),x.N,x.z))},
$S:z+31}
C.c3N.prototype={
$2(d,e){return A.o.aI(d.f,e.f)},
$S:z+2}
C.c3O.prototype={
$1(d){return d.ad()},
$S:z+33}
C.dQ9.prototype={
$1(d){return d.b6d(B.bi(d.e,!0,x.u))},
$S:z+35}
C.dQa.prototype={
$2(d,e){return A.o.aI(d.f,e.f)},
$S:z+2}
C.dQ3.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dQ4.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dPN.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.H(w,this.b)},
$S:0}
C.dPO.prototype={
$1(d){return new C.Nx(this.a,null)},
$S:z+9}
C.dPP.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&B.c()
w=A.d.bf(t,new C.dPM(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){A.d.cu(u.d,w)
u.Hz()}},
$S:0}
C.dPM.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dQ0.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(B.D(["role","admin","text",this.b],w,w))},
$S:0}
C.dQ1.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(B.D(["role","ai","text",v],t,t))}else{v=t.d
v===$&&B.c()
t.d=C.hIb(v,w[0],w[3])
t.Hz()
t=w[2]
if(t==null)t="Created "+J.aa(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(B.D(["role","ai","text",t],w,w))}},
$S:0}
C.dQ2.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=A.d.gcV(v).Q
v.toString
w.hO(v)}},
$S:8}
C.dPV.prototype={
$1(d){return new C.Nx(this.a,null)},
$S:z+9}
C.dPW.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dPU.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.cu(w,this.b)},
$S:0}
C.dQ_.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&B.c()
v=A.d.cu(w,s)
A.d.cj(t.d,u.a,v)
t.Hz()},
$S:0}
C.dPZ.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&B.c()
w=this.b
return new C.YF(u[w],new C.dPY(v,w),null)},
$S:z+58}
C.dPY.prototype={
$1(d){var w=this.a
return w.n(new C.dPX(w,this.b,d))},
$S:z+39}
C.dPX.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dPR.prototype={
$0(){var w=this.a
return w.n(new C.dPQ(w))},
$S:0}
C.dPQ.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dPS.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?A.ct:A.aI
return new B.B(A.fh,B.d(t+": "+B.t(s),w,w,w,w,w,w,B.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?A.a_:A.cp,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:110}
C.dPT.prototype={
$1(d){return this.a.ZU()},
$S:2}
C.dQ8.prototype={
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
q=B.p(n,B.V(A.ag0,l?A.bP:A.aj,n,n,n,20),A.h,n,n,new B.o(q,n,n,p,n,n,A.n),n,n,n,n,A.bT,n,n,n)
p=B.aX(r).j(0.12)
o=B.m(8)
o=B.p(n,B.V(w.c,B.aX(r),n,n,n,18),A.h,n,n,new B.o(p,n,n,o,n,n,A.n),n,n,n,n,A.hf,n,n,n)
r=B.A(B.a([o,A.av,B.C(B.d(w.b,n,n,n,n,n,n,B.l(n,n,l?A.aO:A.M,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),A.m,n,A.e,A.j,0,n,n)
p=w.e.length
return new B.B(A.d7,B.aD(!1,A.X,!0,u,B.dK(!1,n,n,n,!0,n,n,n,!0,n,new H.arp(q,e,!0,n),n,n,n,n,new C.dQ5(m,e),!1,n,n,new B.b5(t,new B.ax(s,1,A.r,-1)),n,n,B.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,B.l(n,n,l?A.bP:A.aj,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,B.AE(n,n,n,new C.dQ6(),A.J,new C.dQ7(m,e),A.ch,n,x.N),n),A.h,v,0,n,n,n,n,n,A.ac),new B.cv(w.a,x.W))},
$S:110}
C.dQ7.prototype={
$1(d){var w=this
if(d==="edit")w.a.a7w(w.b)
if(d==="questions")w.a.Wu(w.b)
if(d==="delete")w.a.bDO(w.b)},
$S:2}
C.dQ6.prototype={
$1(d){return D.csD},
$S:127}
C.dQ5.prototype={
$0(){return this.a.Wu(this.b)},
$S:0}
C.cEu.prototype={
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
return B.aH(!1,s,!0,B.p(s,B.V(d,B.aX(t),s,s,s,s),A.h,s,s,new B.o(q,s,u,v,s,s,A.n),s,s,s,s,A.ch,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cEt(r,d),s,s,s,s,s,s,s)},
$S:1645}
C.cEt.prototype={
$0(){var w=this.a
return w.n(new C.cEr(w,this.b))},
$S:0}
C.cEr.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cEv.prototype={
$1(d){var w=null,v=this.a,u=B.aX(d),t=v.f
t===$&&B.c()
return B.aJ(w,B.hh(u,w,t===d?D.bz8:w,w,14),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cEs(v,d),w,w,w,w,w,w,!1,A.af)},
$S:439}
C.cEs.prototype={
$0(){var w=this.a
return w.n(new C.cEq(w,this.b))},
$S:0}
C.cEq.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cEw.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.cEx.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&B.c()
t=A.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&B.c()
v=v.f
v===$&&B.c()
t=u.czg(v,w,t)
B.a7(this.b,!1).K(t)
return null},
$S:0}
C.ezV.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return w.push(this.b)},
$S:0}
C.ezW.prototype={
$1(d){return new C.YE(this.a,null)},
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
r=B.bu(q,K.aM1(n,A.bM,36,A.p0,l?A.bP:A.aj,r,48),A.ap)}else r=B.V(D.WX,B.aX(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=B.d(q,n,2,A.Z,n,n,n,B.l(n,n,l?A.aO:A.M,n,n,n,n,n,n,n,n,n,n,n,A.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.aa(w.c)
o=w.e?" \xb7 Printable":""
return B.aD(!1,A.X,!0,u,B.dK(!1,n,n,n,!0,n,n,n,!0,n,r,n,n,n,n,new C.ezZ(m,w,e),!1,n,n,new B.b5(t,new B.ax(s,1,A.r,-1)),n,n,B.d(""+p+" block(s)"+o,n,n,n,n,n,n,B.l(n,n,l?A.bP:A.aj,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,B.aF(n,n,n,n,D.bxA,n,n,n,new C.eA_(m,e),n,n,n,n,n,n),n),A.h,v,0,n,n,n,n,n,A.ac)},
$S:74}
C.eA_.prototype={
$0(){var w=this.a
w.n(new C.ezX(w,this.b))
w.atn()},
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
return B.b(t.aVW(u.b),$async$$0)
case 2:s=e
if(s!=null){t.n(new C.ezY(t,u.c,s))
t.atn()}return B.h(null,v)}})
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
return new C.Te(w,"Answer Document",null)},
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
C.c3E.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+42}
C.fhQ.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dQK.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+43}
C.dQq.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.H(w,new C.lj("image","",this.b,null))},
$S:0}
C.dQv.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.H(w,new C.lj("video","","data:video/mp4;base64,"+A.cM.gcq().aE(this.b),null))},
$S:0}
C.dQt.prototype={
$1(d){var w=null,v=x.p,u=B.u(B.a([B.aK(w,A.U,!1,w,!0,A.q,w,B.aL(),this.a,w,w,w,w,w,2,D.bDo,A.z,!0,w,!0,w,!1,w,A.ae,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w),B.aK(w,A.U,!1,w,!0,A.q,w,B.aL(),this.b,w,w,w,w,w,2,D.bDn,A.z,!0,w,!0,w,!1,w,A.ae,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w)],v),A.m,w,A.e,A.R,0,A.p)
return B.ep(B.a([B.bG(!1,A.df,w,w,!0,w,w,new C.dQr(d),w,w),B.bJ(D.eOg,new C.dQs(d),w)],v),w,w,w,u,w,w,w,w,D.eCh,w)},
$S:20}
C.dQr.prototype={
$0(){B.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dQs.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dQu.prototype={
$0(){var w,v=this.a.e
v===$&&B.c()
w=A.a.i(this.b.a.a)
return A.d.H(v,new C.lj("link","",A.a.i(this.c.a.a),w))},
$S:0}
C.dQm.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.dQn.prototype={
$1(d){return d.length!==0},
$S:3}
C.dQo.prototype={
$1(d){return A.a.i(A.a.e0(d,B.ad("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.dQp.prototype={
$1(d){return d.length!==0},
$S:3}
C.dQA.prototype={
$0(){var w=this.a.bxh()
B.a7(this.b,!1).K(w)
return null},
$S:0}
C.dQB.prototype={
$0(){return this.a.ato("**","**")},
$S:0}
C.dQC.prototype={
$0(){return this.a.ato("*","*")},
$S:0}
C.dQD.prototype={
$0(){return this.a.ato("__","__")},
$S:0}
C.dQE.prototype={
$0(){return this.a.aUb("## Section title")},
$S:0}
C.dQF.prototype={
$0(){return this.a.aUb("\u2022 First point\n\u2022 Second point")},
$S:0}
C.dQG.prototype={
$0(){},
$S:0}
C.dQH.prototype={
$0(){var w=this.a
w.n(new C.dQz(w))},
$S:0}
C.dQz.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.H(w,D.dgU)},
$S:0}
C.dQI.prototype={
$0(){var w=this.a
w.n(new C.dQy(w))},
$S:0}
C.dQy.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.H(w,D.dgV)},
$S:0}
C.dQJ.prototype={
$1(d){var w,v,u=null,t=d.b,s=t.a
A:{if("image"===s){w="Image"
break A}if("video"===s){w="Video"
break A}if("link"===s){w=t.d
if(w==null)w="Link"
break A}if("signature"===s){w="Signature"
break A}w=s
break A}v=this.b.a
w=B.d(w,u,u,u,u,u,u,B.l(u,u,v?A.iz:A.aG,u,u,u,u,u,u,u,u,11,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
v=v?A.d3:A.iQ
return B.C3(u,v,A.aid,w,u,new C.dQx(this.a,d),u)},
$S:z+44}
C.dQx.prototype={
$0(){var w=this.a
return w.n(new C.dQw(w,this.b))},
$S:0}
C.dQw.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.cu(w,this.b.a)},
$S:0}
C.dQj.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.aMG},
$S:0}
C.dQk.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.f3n},
$S:0}
C.dQb.prototype={
$0(){var w=this.a
w.d=D.aMF
w.f=w.e=null},
$S:0}
C.dQc.prototype={
$0(){var w=this.a
w.d=D.aMG
w.f=null},
$S:0}
C.dQl.prototype={
$2(d,e){return A.o.aI(d.f,e.f)},
$S:z+2}
C.dQe.prototype={
$2(d,e){var w=this.a,v=w.gb0s()[e]
return new C.a9n(v,this.b,new C.dQd(w,v),null)},
$S:z+45}
C.dQd.prototype={
$0(){return this.a.c_0(this.b.a)},
$S:0}
C.dQg.prototype={
$2(d,e){return A.o.aI(d.f,e.f)},
$S:z+46}
C.dQi.prototype={
$2(d,e){return A.T},
$S:35}
C.dQh.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.rd:A.c,p=B.m(16),o=B.m(16),n=B.m(16),m=B.G(r?A.aI:A.aJ,A.r,1),l=B.a([new B.a9(0,A.G,A.x.j(r?0.28:0.06),A.dG,8)],x.V),k=B.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=B.m(10)
v=B.m(10)
k.push(B.bu(w,K.aM1(v,A.bM,52,D.WX,r?A.bP:A.aj,j,52),A.ap))}else{j=u.d.d
w=B.aX(j).j(0.15)
v=B.m(12)
k.push(B.p(t,B.V(D.WX,B.aX(j),t,t,t,24),A.h,t,t,new B.o(w,t,t,v,t,t,A.n),t,52,t,t,t,t,t,52))}k.push(A.b9)
k.push(B.C(B.d(s.b,t,t,t,t,t,t,B.l(t,t,r?A.aO:A.M,t,t,t,t,t,t,t,t,13,t,t,A.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(B.V(A.ek,r?A.bP:A.aj,t,t,t,22))
return B.aD(!1,A.X,!0,p,B.aH(!1,o,!0,B.p(t,B.A(k,A.m,t,A.e,A.j,0,t,t),A.h,t,t,new B.o(t,t,m,n,l,t,A.n),t,t,t,t,A.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dQf(u.a,s),t,t,t,t,t,t,t),A.h,q,0,t,t,t,t,t,A.ac)},
$S:74}
C.dQf.prototype={
$0(){return this.a.c5D(this.b)},
$S:0}
C.c3G.prototype={
$1(d){return new C.a9f(d,this.a,null)},
$S:z+47}
C.cya.prototype={
$0(){var w=this.a.c,v=w.c,u=B.o0(v==null?w.b:v)
if(u!=null)B.iH(u,A.f7,null)},
$S:0}
C.cyb.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.cyc.prototype={
$1(d){var w=null,v=this.a.d.a,u=B.d("\u2022  ",w,w,w,w,w,w,B.l(w,w,v?A.ct:A.aI,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=A.a.i(d)
return new B.B(A.o2,B.A(B.a([u,B.C(B.d(t,w,w,w,w,w,w,B.l(w,w,v?A.ct:A.aI,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.F,w,A.e,A.j,0,w,w),w)},
$S:128}
C.d7W.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d7Y.prototype={
$0(){return this.a.n(new C.d7X(this.b))},
$S:0}
C.d7X.prototype={
$0(){var w=this.a
return w.a.f?w.fS(0):w.p5(0)},
$S:0}
C.f0P.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.dQY.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.B2)w.z=v
else w.Q=v},
$S:0}
C.dQP.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=A.d.gcV(v).Q
v.toString
w.lD(v,A.co,A.eU)},
$S:8}
C.dQR.prototype={
$1(d){return J.q(d,"role")==="ai"},
$S:89}
C.dQS.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.D(["role","user","text",this.b],v,v))
w.d.bG(0,A.c_)
w.r=!0},
$S:0}
C.dQT.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.D(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.dQU.prototype={
$1(d){var w=J.a6(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+B.t(w.h(d,"text"))},
$S:151}
C.dQV.prototype={
$0(){var w=x.N
return this.a.f.push(B.D(["role","ai","text",this.b],w,w))},
$S:0}
C.dQW.prototype={
$0(){var w=x.N
return this.a.f.push(B.D(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.dQX.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dQQ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=B.mi(l,A.bz.j(0.9),l,l,l,l,l,2,l,l)
return new B.B(A.c1,B.A(B.a([new B.a3(22,22,k,l),A.av,B.d("Writing full song\u2026",l,l,l,l,l,l,B.l(l,l,this.b?A.aB:A.dx,l,l,l,l,l,l,l,l,12,A.cz,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),A.m,l,A.e,A.j,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?A.a7:A.a1
k=k.c
k.toString
k=B.aG(k,A.bO,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new B.a8(A.a1,A.a7,A.w,B.a([A.aA,A.bz.j(0.85)],x.O),l,l)
else{q=x.O
q=new B.a8(A.a1,A.a7,A.w,v?B.a([A.bj,A.M],q):B.a([A.c,A.aO],q),l,l)}p=B.a([new B.a9(0,A.G,(u?A.bz:A.aA).j(0.22),A.j2,14)],x.V)
o=B.G(A.c.j(u?0.2:0.08),A.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=A.c
else v=v?A.aJ:A.bi
n=u?13.5:15
m=u?A.bg:A.cz
return new B.bE(t,l,l,B.p(l,B.d(w,l,l,l,l,l,l,B.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?A.a_:A.cp,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),A.h,l,new B.aV(0,k.a.a*0.94,0,1/0),new B.o(l,l,o,new B.bv(A.jL,A.jL,new B.b3(s,s),new B.b3(r,r)),p,q,A.n),l,l,l,A.ks,A.iE,l,l,l),l)},
$S:42}
C.dR4.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&B.c()
w=m.x
w===$&&B.c()
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([D.a8J,A.M,A.n9],t):B.a([A.q2,A.pW,A.oJ],t)
w=B.a([new B.a9(-4,A.G,A.aA.j(0.35+w*0.25),A.dm,28)],x.V)
r=B.G(A.c.j(u?0.08:0.5),A.r,1)
q=B.de()
p=q.a
p.$flags&2&&B.ah(p)
p[11]=0.001
m=m.x
m===$&&B.c()
q.fk(m*0.08)
q=B.fm(A.B,B.p(o,D.bul,A.h,o,o,new B.o(o,o,B.G(A.aM.j(0.6),A.r,2),o,o,D.dS1,A.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=B.nm(A.j4,D.eSp,new C.dR1())
p=x.p
m=B.a([B.A(B.a([q,A.b9,B.C(B.u(B.a([m,B.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,B.l(o,o,u?A.aQ:A.aV,o,o,o,o,o,o,o,o,10,o,o,A.a_,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),A.F,o,A.e,A.j,0,A.p),1)],p),A.m,o,A.e,A.j,0,o,o),A.ab,B.A(B.a([n.arS(D.B2,"Swahili","\ud83c\uddf9\ud83c\uddff",u),A.aa,n.arS(D.aA3,"English","\ud83c\uddec\ud83c\udde7",u),A.aa,n.arS(D.B3,"Mix","\ud83d\udd25",u)],p),A.m,o,A.e,A.j,0,o,o)],p)
if(n.x!==D.B3){t=B.a([A.P,n.cnU(u)],p)
if(n.w){q=n.x===D.B2?D.a_G:D.ZY
p=B.S(q).k("I<1,r>")
q=B.z(new B.I(q,new C.dR2(n,u),p),p.k("ai.E"))
t.push(new B.B(A.ku,B.c7(A.bH,q,A.bx,6,6),o))}A.d.v(m,t)}else{t=B.a([A.bz.j(0.22),A.aA.j(0.12)],t)
q=B.m(12)
p=B.G(A.bz.j(0.45),A.r,1)
m.push(new B.B(A.ku,B.p(o,B.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,B.l(o,o,u?A.i6:A.lh,o,o,o,o,o,o,o,o,10,o,o,A.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),A.h,o,o,new B.o(o,o,p,q,o,new B.a8(A.a1,A.a7,A.w,t,o,o),A.n),o,o,o,o,A.bT,o,o,o),o))}m.push(A.P)
t=x.dc
n=B.z(new B.I(D.cOt,new C.dR3(n,u),t),t.k("ai.E"))
m.push(B.A(n,A.m,o,A.e,A.j,0,o,o))
return B.p(o,B.u(m,A.ad,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(o,o,r,v,w,new B.a8(A.ax,A.aD,A.w,s,o,o),A.n),o,o,o,I.aco,I.acD,o,o,o)},
$S:90}
C.dR1.prototype={
$1(d){return D.bGL.aB(0,d)},
$S:65}
C.dR2.prototype={
$1(d){return this.a.cnV(d,this.b)},
$S:z+48}
C.dR3.prototype={
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
p=p.r?q:new C.dR0(p,d)
s=C.hkf(d)
if(o)r=A.c
else r=v?A.al:A.bi
r=B.d(s,q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.hkg(d)
if(o)v=A.al
else v=v?A.c3:A.dx
return B.C(new B.B(new B.L(0,0,n,0),B.aD(!1,A.X,!0,l,B.aH(!1,t,!0,new B.B(G.UY,B.u(B.a([r,B.d(s,q,q,q,q,q,q,B.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),A.h,w,m,q,q,q,q,q,A.ac),q),1)},
$S:z+49}
C.dR0.prototype={
$0(){var w=this.a
return w.n(new C.dR_(w,this.b))},
$S:0}
C.dR_.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dR6.prototype={
$0(){var w=this.a
return w.n(new C.dR5(w))},
$S:0}
C.dR5.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dQO.prototype={
$0(){var w=this.a
return w.n(new C.dQN(w,this.b))},
$S:0}
C.dQN.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.B3
if(v===D.aA3&&w.Q==null)w.Q=A.d.gI(D.ZY).a},
$S:0}
C.dR7.prototype={
$0(){return this.a.cjG(this.b.a)},
$S:0}
C.dQZ.prototype={
$0(){return this.a.Hq(this.b)},
$S:0}
C.dQL.prototype={
$1(d){return this.a.aUc()},
$S:2}
C.dQM.prototype={
$0(){return this.a.aUc()},
$S:0}
C.ftC.prototype={
$1(d){var w=this
return new C.Xp(w.a,w.b,w.c,new C.ftB(w.d),null)},
$S:z+50}
C.ftB.prototype={
$0(){return J.lC(this.a.b7())},
$S:0}
C.d5v.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.baU()},
$S:28}
C.d5w.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a.f
m===$&&B.c()
m=m.x
m===$&&B.c()
w=this.b
v=m*3.141592653589793*2+w*0.55
m=this.c
u=x.w
t=B.aG(m,A.bO,u).w
s=Math.cos(v)
u=B.aG(m,A.bO,u).w
m=Math.sin(v*1.3)
r=Math.sin(v)
q=(w&1)===0
p=q?A.dO:A.hg
o=A.o.J(w,4)
q=q?A.b_:A.aK
return B.an(n,B.d4(B.V(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:331}
C.d5B.prototype={
$0(){},
$S:0}
C.d5A.prototype={
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
return B.e4(A.B,B.fm(A.B,e,null,w,!0),0.5+v*0.5,null,null)},
$S:44}
C.d5x.prototype={
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
$S:108}
C.d5y.prototype={
$1(d){return D.bGP.aB(0,d)},
$S:65}
C.d5z.prototype={
$0(){var w=this.a
w.a.baU()
w.a.e.$0()},
$S:0}
C.c5E.prototype={
$1(d){var w=!1
if(A.a.i(d.b.toLowerCase())===this.a)if(d.d===A.fc)if(d.x===A.dn){w=d.w
w=A.a.i(w==null?"":w)===this.b}return w},
$S:16}
C.c5R.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e_y.prototype={
$0(){return this.a.a.c.d},
$S:72}
C.e0e.prototype={
$1(d){var w=this.a
if(w.c!=null)w.NW()},
$S:8}
C.e0f.prototype={
$1(d){var w=$.aS.p2$
if(w===A.qZ||w===A.r_)return
this.a.Dm()},
$S:14}
C.e0g.prototype={
$1(d){this.a.cq_()},
$S:14}
C.e_X.prototype={
$0(){this.a.HU(this.b.d,!1)},
$S:0}
C.e_Y.prototype={
$0(){},
$S:0}
C.e_Z.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.e0_.prototype={
$0(){},
$S:0}
C.e00.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e01.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.e02.prototype={
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
C.e_S.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=B.bi(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=B.bi(v[1],!0,x.N)
w.Nk()
w.a5K()},
$S:0}
C.e_z.prototype={
$0(){this.b.HU(this.c.d+this.a.a,!1)},
$S:0}
C.e_T.prototype={
$1(d){var w=d.d
return(w===A.fc||w===A.eB)&&d.x===A.dn},
$S:16}
C.e_U.prototype={
$1(d){return d.a},
$S:155}
C.e_V.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e_W.prototype={
$0(){},
$S:0}
C.e_D.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bi(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=B.bi(v[0],!0,x.N)},
$S:0}
C.e_E.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.e_M.prototype={
$0(){},
$S:0}
C.e_J.prototype={
$0(){return this.a.a.c.d},
$S:72}
C.e_K.prototype={
$0(){var w=this.a,v=B.z(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e_L.prototype={
$0(){var w=this.a,v=B.z(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e_N.prototype={
$0(){return this.a.z=!0},
$S:0}
C.e_O.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new B.uB(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.e_P.prototype={
$0(){return this.a.z=!1},
$S:0}
C.e_R.prototype={
$0(){var w=this.a
return w.n(new C.e_Q(w))},
$S:0}
C.e_Q.prototype={
$0(){return this.a.y=1},
$S:0}
C.e_F.prototype={
$0(){return this.a.y=1},
$S:0}
C.e_G.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.e06.prototype={
$1(d){return d.a.length===0},
$S:16}
C.e07.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:68}
C.e0b.prototype={
$0(){var w=this.a
return w.n(new C.e04(w))},
$S:0}
C.e04.prototype={
$0(){return this.a.y=1},
$S:0}
C.e0c.prototype={
$0(){var w=this.a
return w.n(new C.e03(w))},
$S:0}
C.e03.prototype={
$0(){return this.a.y=2},
$S:0}
C.e0d.prototype={
$0(){return B.iC(this.a,null)},
$S:0}
C.e08.prototype={
$2$cloudRequest(d,e){return this.a.aVg(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1647}
C.e09.prototype={
$0(){return this.a.Dm()},
$S:1}
C.e0a.prototype={
$0(){var w=this.a
return w.n(new C.e05(w))},
$S:0}
C.e05.prototype={
$0(){var w=this.a
return w.y=A.o.D(w.y-1,0,2)},
$S:0}
C.e_C.prototype={
$0(){B.eN()
var w=this.a
w.n(new C.e_B(w))},
$S:0}
C.e_B.prototype={
$0(){return this.a.y=0},
$S:0}
C.e_A.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=B.bAe(B.p(t,t,A.h,t,t,new B.o(t,t,B.G(A.c.j(0.55),A.r,1.2),t,B.a([new B.a9(1,A.G,A.at.j(0.55),A.J,18)],x.V),D.bF2,A.a6),t,t,t,t,t,t,t,t),A.ev,A.rB,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=B.a([],w)
for(u=0;u<3;++u)v.push(r.bWD(u))
return new B.am(A.W,t,A.a9,A.q,B.a([q,B.A(v,A.m,t,A.e,A.j,0,t,t)],w),t)},
$S:61}
C.e_I.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
B.eN()
w.n(new C.e_H(w,v))},
$S:0}
C.e_H.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d9J.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===A.fc||v===A.eB)return!0
if(d.c!==0)v=A.a.q(w,"clock-in daily earnings")||A.a.q(w,"clock-in earnings")
else v=!1
return v},
$S:16}
C.d9K.prototype={
$1(d){return new B.N(Date.now(),0,!1)},
$S:658}
C.d9L.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new B.N(Date.now(),0,!1)
u=B.dt(C.fAp(v.c,u))
w=this.c?new C.d9I(v):null
return v.b2e(this.b,A.pa,D.eu,w,"Today","$"+u,D.eu)},
$S:1649}
C.d9I.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.d9M.prototype={
$2(d,e){var w=this.a
return w.b2e(this.b,A.jg,A.c9,w.w,"Balance","$"+B.dt(B.F4(w.c.a,new C.d9H(w))),A.cK)},
$S:59}
C.d9H.prototype={
$0(){return this.a.c.d},
$S:72}
C.d9C.prototype={
$0(){this.a.a.cGJ()
return null},
$S:0}
C.d9D.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&B.c()
v=v.x
v===$&&B.c()
return B.b2(w,w,w,new C.bqX(v,w),A.as)},
$S:76}
C.d9E.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.b7i(v,!0,A.at,D.nQ,w)}else{v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.b7h(v,D.nQ,w)}return B.b2(w,w,w,v,A.as)},
$S:76}
C.d9F.prototype={
$1(d){return new B.N(Date.now(),0,!1)},
$S:658}
C.d9G.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new B.N(Date.now(),0,!1)
w=r.a
v=w.a.cFx(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:A.k.D(v/u,0,1)}u=w.d
u===$&&B.c()
s=w.e
s===$&&B.c()
return B.c4(new B.h3(B.a([u,s],x.U)),new C.d9B(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1650}
C.d9B.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([],m),k=o.b
if(k)A.d.v(l,B.ih(7,new C.d9A(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&B.c()
v=v.x
v===$&&B.c()
u=o.d
l.push(B.b2(n,n,n,new C.b7g(o.c,v,k,u,D.nQ,D.b9P,n),D.eeA))
v=B.G(A.c.j(0.1),A.r,1.2)
if(k)t=A.uw
else t=o.e?A.uo:D.bps
t=B.V(t,k?D.nQ:A.bd,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=B.d(s,n,n,n,n,n,n,B.l(n,n,A.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+B.dt(w.f&&w.d>0?w.d:o.f)}q=k?D.nQ:A.c
w=B.d(w,n,n,n,n,n,n,B.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,A.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=B.m(999)
p=u.j(0.16)
u=B.G(u.j(0.5),A.r,1)
l.push(B.p(n,B.u(B.a([t,A.ar,s,A.au,w,A.P,B.p(n,B.d(o.r,n,n,n,n,n,n,B.l(n,n,k?D.nQ:A.nV,n,n,n,n,n,n,n,n,9,n,n,A.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.h,n,n,new B.o(p,n,u,q,n,n,A.n),n,n,n,n,A.kv,n,n,n)],m),A.m,n,A.b5,A.j,0,A.p),A.h,n,n,new B.o(A.K,n,v,n,n,n,A.a6),n,176,n,n,n,n,n,176))
return B.as(new B.a3(276,276,new B.am(A.B,n,A.a9,A.h,l,n),n),n,n,n)},
$S:202}
C.d9A.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&B.c()
r=r.x
r===$&&B.c()
w=A.k.J(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=A.o.J(d,3)
t=A.o.J(d,2)
return B.an(s,B.e8(B.d4(B.p(s,s,A.h,s,s,new B.o(s,s,s,B.m(40),s,new B.bS(A.B,0.5,A.w,s,0,B.a([D.nQ.j(0.38),A.c.j(0.08),A.K],x.O),s,s),A.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),!0,s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:214}
C.da7.prototype={
$0(){},
$S:0}
C.da8.prototype={
$0(){},
$S:0}
C.da9.prototype={
$1(d){return d.x===A.dn},
$S:16}
C.d9P.prototype={
$0(){return this.a.a.d.d},
$S:72}
C.d9O.prototype={
$0(){var w,v
B.eN()
w=this.a
v=this.b
w.n(new C.d9N(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)B.f7(null,x.H)}},
$S:0}
C.d9N.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.da4.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=B.m(12),q=s?w.b.j(0.18):A.c.j(0.04),p=B.G(s?w.b.j(0.7):A.c.j(0.08),A.r,1)
return B.C(new B.B(A.jX,B.aJ(v,B.dg(A.B,B.d("$"+t,v,v,v,v,v,v,B.l(v,v,s?w.b:A.al,v,v,v,v,v,v,v,v,13,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,A.ba,new B.o(q,v,p,r,v,v,A.n),A.hG,v,38,v,v,v,v,v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.da6(u,d),v,v,v,v,v,v,!1,A.af),v),1)},
$S:1652}
C.da6.prototype={
$0(){B.eN()
var w=this.a
w.n(new C.da5(w,this.b))},
$S:0}
C.da5.prototype={
$0(){var w=""+this.b
this.a.d.saR(0,w)
return w},
$S:0}
C.da3.prototype={
$4$bold$color(d,e,f,g){var w=null,v=B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,A.a_,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?A.c:g,t=f?15:13
return new B.B(A.JH,B.A(B.a([v,A.b6,B.d(e,w,w,w,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?A.u:A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1653}
C.da2.prototype={
$1(d){return this.a.n(new C.da1())},
$S:2}
C.da1.prototype={
$0(){},
$S:0}
C.d9S.prototype={
$1(d){return this.a.aRh(d)&&!B.fHI(d)},
$S:16}
C.d9T.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:68}
C.d9U.prototype={
$0(){return this.a.a.d.d},
$S:72}
C.d9V.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return B.b(x.r.b(s)?s:B.dP(s,x.H),$async$$0)
case 2:if(t.c!=null)t.n(new C.d9R())
t.lz("Balance refreshed.")
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.d9R.prototype={
$0(){},
$S:0}
C.d9W.prototype={
$0(){var w=this.a
return w.n(new C.d9Q(w))},
$S:0}
C.d9Q.prototype={
$0(){return this.a.r+=80},
$S:0}
C.d9X.prototype={
$1(d){return!this.a.q(0,d.a)&&Math.abs(C.fYc(d))>0.004},
$S:16}
C.d9Y.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:68}
C.d9Z.prototype={
$1(d){return d.y.c6(this.a.y)},
$S:16}
C.da_.prototype={
$0(){return this.a.a.d.d},
$S:72}
C.da0.prototype={
$1(d){var w=d.y
return w.cU(this.a.y)&&w.c6(this.b.y)},
$S:16}
C.fdR.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:68}
C.f8w.prototype={
$1(d){var w=J.a6(d),v=w.h(d,"toEmail"),u=!1
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.y(v,this.b)){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fo7.prototype={
$1(d){var w=J.a6(d),v=w.h(d,"toEmail")
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.f8v.prototype={
$1(d){var w,v,u
if(!C.hF6(d,this.a))return!1
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
C.eZw.prototype={
$1(d){var w=this.a
if(A.o.J(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:86}
C.fn0.prototype={
$0(){return $.fFn=null},
$S:11}
C.fn1.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:7}
C.fkW.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:7}
C.fkX.prototype={
$0(){var w,v=this.a
$.fFb.W(0,v)
w=C.tj(this.b,v)
if(w!=null)B.OR(B.a([B.Z(w,x.N,x.z)],x._),v)},
$S:0}
C.fp5.prototype={
$1(d){return new C.Yc(this.a,this.b,null)},
$S:z+55}
C.dV2.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.dV5.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.dV6.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.n(new C.dV4(w))},
$S:2}
C.dV4.prototype={
$0(){return this.a.f=""},
$S:0}
C.dV7.prototype={
$1(d){return this.a.aUr()},
$S:2}
C.dV8.prototype={
$0(){var w=this.a
return w.n(new C.dV3(w,this.b))},
$S:0}
C.dV3.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f7I.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+A.a.aU(d,1)},
$S:13}
C.f7H.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+A.a.aU(d,1)},
$S:13}
C.fnh.prototype={
$1(d){var w,v=x.f
if(v.b(d))return B.Z(d,x.N,x.z)
try{v=B.Z(v.a(d.ad()),x.N,x.z)
return v}catch(w){return B.R(x.N,x.z)}},
$S:12}
C.fni.prototype={
$1(d){return J.cs(d)},
$S:4}
C.fhf.prototype={
$1(d){return d.a!=="send_email"},
$S:288}
C.fmJ.prototype={
$1(d){var w=null,v=A.x.j(0.35),u=B.m(10),t=B.G(A.be,A.r,1)
return B.p(A.B,B.d(d,w,w,w,w,w,w,A.jr,w,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,86,w,A.eW,w,w,w,72)},
$S:660}
C.c7o.prototype={
$1(d){return J.k(d)},
$S:17}
C.c7p.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b4(d,new C.c7n(),x.S)
w=B.z(w,w.$ti.k("ai.E"))
return w}return B.bT(7,0,!1,x.S)},
$S:661}
C.c7n.prototype={
$1(d){var w
if(B.iv(d))w=d
else{w=B.c3(J.k(d),null)
if(w==null)w=0}return w},
$S:399}
C.c7q.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b4(d,new C.c7m(),x.S)
w=B.z(w,w.$ti.k("ai.E"))
return w}return B.bT(8,0,!1,x.S)},
$S:661}
C.c7m.prototype={
$1(d){var w
if(B.iv(d))w=d
else{w=B.c3(J.k(d),null)
if(w==null)w=0}return w},
$S:399}
C.c7s.prototype={
$1(d){return B.bi(d,!0,x.S)},
$S:662}
C.c7t.prototype={
$1(d){return B.bi(d,!0,x.S)},
$S:662}
C.c7l.prototype={
$1(d){var w=this.a
if(A.o.J(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:86}
C.c7r.prototype={
$2(d,e){return d+e},
$S:75}
C.c7k.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.q(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:75}
C.f90.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+56}
C.f8V.prototype={
$0(){return this.a.$1(D.pl)},
$S:0}
C.f8W.prototype={
$0(){return this.a.$1(D.pl)},
$S:0}
C.f8X.prototype={
$0(){return this.a.$1(D.pl)},
$S:0}
C.f8Y.prototype={
$0(){return this.a.$1(D.pl)},
$S:0}
C.f8Z.prototype={
$0(){return this.a.$1(D.pl)},
$S:0}
C.f9_.prototype={
$0(){return this.a.$1(D.pl)},
$S:0}
C.eWU.prototype={
$2(d,e){var w,v,u=this,t=null,s=A.o.ak(e,8),r=A.o.J(e,8),q=A.o.J(s+r,2),p=u.a,o=J.q(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.TK:D.b_S
if(o===0)w=t
else{w=x.O
w=o===1?B.a([A.c,A.aJ],w):B.a([A.bj,A.x],w)
v=n?A.aM:A.dt
w=B.p(t,t,A.h,t,t,new B.o(t,t,B.G(v,A.r,n?3:1),t,B.a([new B.a9(0,A.G,A.x.j(0.35),A.dG,4)],x.V),new B.bS(A.B,0.5,A.w,t,0,w,t,t),A.a6),t,28,t,t,t,t,t,28)}return B.aJ(t,B.p(t,B.as(w,t,t,t),A.h,q,t,t,t,t,t,t,t,t,t,t),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eWT(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,A.af)},
$S:77}
C.eWT.prototype={
$0(){var w=this,v=w.a,u=v.cL9(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.pl:D.FZ
w.f.$1(v)}},
$S:0}
C.f7R.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new B.a3(u,u,B.ig(!0,v,v,A.z,Q.aHR,new C.f7Q(w.a,w.b,w.c,w.d,u),9,v,A.dJ,A.ah,!1),v)},
$S:164}
C.f7Q.prototype={
$2(d,e){var w=this,v=null,u=B.m(12),t=B.m(12),s=w.a,r=s.at[e],q=r==="X"?A.b3:A.aH
return B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.as(B.d(r,v,v,v,v,v,v,B.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.f7P(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),A.h,A.fn,0,v,v,v,v,v,A.ac)},
$S:74}
C.f7P.prototype={
$0(){var w=this,v=w.a.cLa(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.eWl.prototype={
$1(d){return new B.B(A.jX,C.fkN(d,!1),null)},
$S:301}
C.eWm.prototype={
$1(d){return C.fkN(d,!1)},
$S:1657}
C.eWn.prototype={
$0(){var w=this,v=w.a
v.cvN(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.eWo.prototype={
$0(){var w=this
w.a.cvO(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.f55.prototype={
$1(d){var w=this,v=null,u=d*6
return B.mG(v,A.bj,B.d(""+u,v,v,v,v,v,v,A.cc,v,v,v),A.di,new C.f54(w.a,w.b,u,w.c,w.d),v,v,new B.ax(A.c.j(0.2),1,A.r,-1),v)},
$S:1658}
C.f54.prototype={
$0(){var w=this,v=w.a,u=w.b.aG(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.f7_.prototype={
$1(d){return D.cRU[d]},
$S:83}
C.f70.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=B.a([s.aG(6),s.aG(6),s.aG(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.f3Q.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.f3R.prototype={
$0(){var w=this,v=w.a
if(w.b.ag()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.eXl.prototype={
$0(){var w=this,v=w.a.cBe(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.eXk.prototype={
$1(d){var w,v=null,u=J.q(this.a.fr[5-d],this.b)
if(u===0)w=A.lP
else w=u===1?A.dy:A.qx
return new B.fN(1,B.p(v,v,A.h,v,v,new B.o(w,v,B.G(A.bG,A.r,1),v,v,v,A.a6),v,v,v,A.mA,v,v,v,v),v)},
$S:1659}
C.f42.prototype={
$1(d){var w=this
if(w.a.b5B(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.f43.prototype={
$0(){var w=this
if(w.a.b5B(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.eWO.prototype={
$0(){var w=this
if(w.a.ag()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fcR.prototype={
$1(d){var w=J.q(d,"email")
return A.a.q(A.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fcS.prototype={
$1(d){var w,v=J.a6(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=A.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+A.a.i(J.k(v==null?"":v))+">"},
$S:50}
C.epl.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aH8.prototype
w.bnW=w.Z
w.bnV=w.p
w=C.aH9.prototype
w.bnY=w.Z
w.bnX=w.p
w=C.aHa.prototype
w.bo_=w.Z
w.bnZ=w.p
w=C.aI5.prototype
w.boX=w.Z
w.boW=w.p
w=C.aHG.prototype
w.bow=w.p
w=C.aIe.prototype
w.bp5=w.p
w=C.aHb.prototype
w.bo0=w.p
w=C.aIm.prototype
w.bpe=w.p
w=C.aHg.prototype
w.bo5=w.p
w=C.aHw.prototype
w.bom=w.p
w=C.aJ1.prototype
w.bpU=w.p})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.ax6.prototype,"gbJ9","bJa",20)
v(q,"gaNQ","aNR",1)
v(C.ax5.prototype,"gcmY","a_H",1)
v(q=C.ax7.prototype,"gbOt","bOu",1)
v(q,"gbyX","byY",1)
v(q=C.aum.prototype,"gcgj","cgk",1)
v(q,"gc5c","Om",0)
v(q,"gcqM","cqN",1)
v(q,"gcjd","ms",0)
w(q,"gc9p","c9q",24)
w(q,"gcpc","Q2",32)
v(q=C.aza.prototype,"gbHk","Vo",0)
v(q,"gbXc","WO",0)
v(q,"gbX9","WN",0)
v(q,"gbXa","aak",0)
v(q,"gbXb","Nn",0)
v(C.aww.prototype,"gbXd","bXe",1)
u(C,"hMd","hiv",57)
t(C,"fHP",0,null,["$1","$0"],["h1a",function(){return C.h1a(null)}],3,0)
t(C,"byJ",0,null,["$1","$0"],["h19",function(){return C.h19(null)}],3,0)
v(C.L9.prototype,"gD6","c2s",1)
v(C.azW.prototype,"gcgA","zI",0)
v(q=C.aAc.prototype,"gc5v","Oo",0)
v(q,"gca6","YX",0)
v(q,"gbZV","bZW",1)
v(q=C.aAo.prototype,"gc__","ab8",0)
v(q,"gbsR","a5A",0)
v(q,"gcgN","ZU",0)
s(q,"gc2X","c2Y",34)
v(C.aCg.prototype,"gbtg","a5C",1)
v(q=C.aCf.prototype,"gbZZ","ab7",0)
v(q,"gc4u","ac7",0)
v(q=C.aAq.prototype,"gbS9","a9a",0)
v(q,"gbSb","W0",0)
v(q,"gbSa","a9b",0)
v(q=C.aAp.prototype,"gbvz","bvA",1)
v(q,"gbvB","bvC",1)
v(C.aAr.prototype,"gbB8","bB9",1)
v(C.axr.prototype,"gc_1","c_2",1)
v(q=C.aAN.prototype,"gaUl","c_i",1)
r(q,"gaVe",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["abM","atV","aVg","aVf"],51,0,0)
r(q,"gc2a",0,4,null,["$4"],["c2b"],52,0,0)
v(q,"gc4e","Ya",0)
v(q,"gc53","ace",0)
v(q,"gc5_","acc",0)
v(q,"gbUZ","a9W",0)
w(C.aya.prototype,"gbTO","bTP",53)
w(q=C.ayc.prototype,"gco2","co3",54)
v(q,"gcmP","cmQ",1)
v(q,"gcuc","cud",1)
v(C.aAA.prototype,"gc_D","aUr",1)
v(C.aBk.prototype,"gaUQ","atJ",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.jk,[C.clb,C.cl8,C.cl9,C.cla,C.cl7,C.eKU,C.eKS,C.eKW,C.eKT,C.f2o,C.d1Z,C.d29,C.d2h,C.d2i,C.d2k,C.d2c,C.d2a,C.d2b,C.d2d,C.d2e,C.d24,C.d25,C.d23,C.d27,C.d28,C.d21,C.d20,C.d2m,C.d2p,C.dFh,C.dFg,C.dFi,C.dFf,C.dFe,C.d1T,C.d1W,C.d1X,C.d1V,C.d1U,C.d3L,C.d3M,C.d3N,C.d30,C.d31,C.d3v,C.d3g,C.d3h,C.d3i,C.d3j,C.d3k,C.d2t,C.d3_,C.d3w,C.d3F,C.d3t,C.d3s,C.d2Y,C.d2Z,C.d3B,C.d3C,C.d2v,C.d2w,C.d39,C.d3a,C.d3b,C.d38,C.d3l,C.d3m,C.d3n,C.d3o,C.d3p,C.d3q,C.d3z,C.d3c,C.d3d,C.d3e,C.d3f,C.d3D,C.d3E,C.d2x,C.d2y,C.d2z,C.d2A,C.d3x,C.d3y,C.d37,C.d3r,C.d35,C.d3G,C.d3H,C.d3I,C.d32,C.d2M,C.d2L,C.d2K,C.d2Q,C.d2J,C.d2H,C.d2C,C.d2F,C.d2B,C.d2V,C.d2W,C.d2D,C.d71,C.cvp,C.cvf,C.cvg,C.cvz,C.cvw,C.cvx,C.cvy,C.cvr,C.cvq,C.cvh,C.cvs,C.cvS,C.cvO,C.cvN,C.cvn,C.cvo,C.cvk,C.cvv,C.cvD,C.cvE,C.cvF,C.cvG,C.cvH,C.cvI,C.cvJ,C.cw3,C.cvX,C.cvU,C.cvZ,C.cvW,C.cvT,C.cvi,C.cvQ,C.dnz,C.dnA,C.dnq,C.dno,C.dny,C.dnn,C.dnm,C.dnp,C.dnu,C.dnv,C.dns,C.dnt,C.dnB,C.dnC,C.dnD,C.dnE,C.eEQ,C.eER,C.cYh,C.fdL,C.du_,C.dtS,C.dtU,C.dtY,C.dtT,C.dtV,C.dtW,C.fkL,C.fkK,C.dnb,C.dna,C.dnc,C.dn9,C.dM2,C.dM3,C.dMa,C.fsQ,C.fsR,C.bUG,C.dFn,C.dFo,C.dFp,C.dFq,C.dFr,C.dFs,C.dFm,C.dFt,C.dFl,C.dFw,C.dFv,C.dFu,C.dMu,C.dMv,C.dMs,C.dMr,C.dMt,C.dMp,C.dQ3,C.dQ4,C.dPN,C.dPP,C.dQ0,C.dQ1,C.dPW,C.dPU,C.dQ_,C.dPX,C.dPR,C.dPQ,C.dQ5,C.cEt,C.cEr,C.cEs,C.cEq,C.cEw,C.cEx,C.ezV,C.eA_,C.ezX,C.ezZ,C.ezY,C.ezR,C.ezQ,C.ezT,C.ezS,C.dQq,C.dQv,C.dQr,C.dQs,C.dQu,C.dQA,C.dQB,C.dQC,C.dQD,C.dQE,C.dQF,C.dQG,C.dQH,C.dQz,C.dQI,C.dQy,C.dQx,C.dQw,C.dQj,C.dQk,C.dQb,C.dQc,C.dQd,C.dQf,C.cya,C.d7W,C.d7Y,C.d7X,C.dQY,C.dQS,C.dQT,C.dQV,C.dQW,C.dQX,C.dR0,C.dR_,C.dR6,C.dR5,C.dQO,C.dQN,C.dR7,C.dQZ,C.dQM,C.ftB,C.d5B,C.d5z,C.e_y,C.e_X,C.e_Y,C.e_Z,C.e0_,C.e01,C.e02,C.e_S,C.e_z,C.e_W,C.e_D,C.e_E,C.e_M,C.e_J,C.e_K,C.e_L,C.e_N,C.e_O,C.e_P,C.e_R,C.e_Q,C.e_F,C.e_G,C.e0b,C.e04,C.e0c,C.e03,C.e0d,C.e09,C.e0a,C.e05,C.e_C,C.e_B,C.e_I,C.e_H,C.d9I,C.d9H,C.d9C,C.da7,C.da8,C.d9P,C.d9O,C.d9N,C.da6,C.da5,C.da1,C.d9U,C.d9V,C.d9R,C.d9W,C.d9Q,C.da_,C.fn0,C.fkX,C.dV2,C.dV5,C.dV4,C.dV8,C.dV3,C.f8V,C.f8W,C.f8X,C.f8Y,C.f8Z,C.f9_,C.eWT,C.f7P,C.eWn,C.eWo,C.f54,C.f70,C.f3R,C.eXl,C.f43,C.eWO,C.epl])
u(B.i1,[C.clc,C.eKV,C.fhx,C.fhr,C.f2l,C.f2k,C.f2n,C.d2r,C.d2s,C.d2g,C.d2f,C.d2j,C.d22,C.d26,C.d2l,C.dFk,C.d1Y,C.d3O,C.d3P,C.d3Q,C.d3R,C.d3S,C.d3u,C.d3A,C.d2u,C.d3K,C.d3J,C.d2N,C.d2O,C.d2P,C.d2R,C.d2T,C.d72,C.cw4,C.cvu,C.cvt,C.cvM,C.cvP,C.cvL,C.cvl,C.cvC,C.cvA,C.cvR,C.cvB,C.cw_,C.cvY,C.cw2,C.bTo,C.bTn,C.bTq,C.bTp,C.dnx,C.dnw,C.dnr,C.dnF,C.dnG,C.f5D,C.f6Q,C.cYi,C.cYg,C.bU9,C.fdK,C.du0,C.dtZ,C.f7B,C.fkJ,C.c2v,C.c2u,C.c2X,C.dM0,C.dM1,C.fg6,C.ffU,C.ffT,C.f3U,C.c39,C.c3a,C.c3b,C.c38,C.c37,C.f25,C.fsM,C.fsN,C.fsO,C.fsP,C.fsL,C.dM7,C.dM8,C.dM6,C.fsS,C.d3T,C.c4K,C.f14,C.dFx,C.dMq,C.c3B,C.c3y,C.c3A,C.c3D,C.bX3,C.bX1,C.bX6,C.c3K,C.c3J,C.c3I,C.c3H,C.c3M,C.c3O,C.dQ9,C.dPO,C.dPM,C.dQ2,C.dPV,C.dPZ,C.dPY,C.dPT,C.dQ7,C.dQ6,C.cEu,C.cEv,C.ezW,C.ezP,C.ezU,C.c3E,C.fhQ,C.dQK,C.dQt,C.dQm,C.dQn,C.dQo,C.dQp,C.dQJ,C.c3G,C.cyb,C.cyc,C.f0P,C.dQP,C.dQR,C.dQU,C.dR1,C.dR2,C.dR3,C.dQL,C.ftC,C.d5v,C.d5y,C.c5E,C.c5R,C.e0e,C.e0f,C.e0g,C.e00,C.e_T,C.e_U,C.e_V,C.e06,C.e08,C.d9J,C.d9K,C.d9F,C.d9A,C.da9,C.da4,C.da3,C.da2,C.d9S,C.d9X,C.d9Z,C.da0,C.f8w,C.fo7,C.f8v,C.eZw,C.fn1,C.fkW,C.fp5,C.dV6,C.dV7,C.f7I,C.f7H,C.fnh,C.fni,C.fhf,C.fmJ,C.c7o,C.c7p,C.c7n,C.c7q,C.c7m,C.c7s,C.c7t,C.c7l,C.f90,C.eWl,C.eWm,C.f55,C.f7_,C.f3Q,C.eXk,C.f42,C.fcR,C.fcS])
t(C.bn8,B.iG)
u(B.ae,[C.DO,C.ain,C.azV,C.aim,C.aio,C.ajf,C.afC,C.akN,C.XT,C.XU,C.X0,C.alh,C.akM,C.LF,C.ax8,C.ame,C.amR,C.Td,C.Nx,C.YF,C.YE,C.Te,C.an9,C.axZ,C.anc,C.Xp,C.anJ,C.ay9,C.ayb,C.Yc,C.aoX])
u(B.ag,[C.aEL,C.aH9,C.aI5,C.aH8,C.aHa,C.bcz,C.aum,C.aza,C.beY,C.beZ,C.aww,C.bf4,C.aHG,C.aIe,C.aHb,C.azW,C.aAc,C.aAo,C.b6O,C.aCg,C.aCf,C.aAq,C.aAp,C.bcN,C.aIm,C.aHg,C.bsQ,C.aHw,C.ayc,C.aAA,C.aJ1])
u(B.kw,[C.eKX,C.f2m,C.d2_,C.d2q,C.d2o,C.d2n,C.dFj,C.d36,C.d34,C.d33,C.d2I,C.d2S,C.d2G,C.d2U,C.d2E,C.d2X,C.cvK,C.cvm,C.cvV,C.cw1,C.cw0,C.cvj,C.cYf,C.dtX,C.f7C,C.f7D,C.dM4,C.fhs,C.fsK,C.dM9,C.dMc,C.dMb,C.d3U,C.c4L,C.c3C,C.c3z,C.bX4,C.bX2,C.c3N,C.dQa,C.dPS,C.dQ8,C.eA1,C.eA0,C.dQl,C.dQe,C.dQg,C.dQi,C.dQh,C.dQQ,C.dR4,C.d5w,C.d5A,C.d5x,C.e07,C.e_A,C.d9L,C.d9M,C.d9D,C.d9E,C.d9G,C.d9B,C.d9T,C.d9Y,C.fdR,C.c7r,C.c7k,C.eWU,C.f7R,C.f7Q])
t(C.asB,C.DO)
u(B.aC,[C.o2,C.abe,C.L9,C.GX,C.qJ,C.qK,C.lj,C.i7,C.hU,C.b5_,C.cVW,C.d7V,C.qP,C.Tf,C.LS,C.pl,C.aWr,C.oz,C.ao3])
t(C.ax6,C.aH9)
t(C.bfn,C.aI5)
t(C.ax5,C.aH8)
t(C.ax7,C.aHa)
u(B.mb,[C.TY,C.ay_,C.anV,C.H1,C.Dc])
u(B.ar,[C.Ze,C.bnE,C.abZ,C.O5,C.Lx,C.amM,C.aaP,C.aaO,C.aXg,C.axY,C.a9n,C.aWO,C.a9f,C.aya])
t(C.beW,C.aHG)
t(C.bfz,C.aIe)
t(C.bbi,C.aHb)
t(C.aAr,C.aIm)
t(C.axr,C.aHg)
t(C.aAN,C.bsQ)
t(C.bdw,C.aHw)
u(B.n4,[C.b7i,C.b7h,C.b7g,C.b6J,C.bqX,C.bm1])
t(C.aBk,C.aJ1)
w(C.aH8,C.L9)
w(C.aH9,C.L9)
w(C.aHa,C.L9)
w(C.aI5,C.L9)
w(C.aHG,B.eJ)
w(C.aIe,B.cb)
w(C.aHb,B.cb)
w(C.aIm,B.cb)
w(C.aHg,B.eJ)
w(C.aHw,B.eJ)
v(C.bsQ,B.ev)
w(C.aJ1,B.cb)})()
B.kd(b.typeUniverse,JSON.parse('{"bn8":{"iG":[]},"DO":{"ae":[],"r":[]},"aEL":{"ag":["DO<1,2>"]},"asB":{"DO":["1","ht<1>"],"ae":[],"r":[],"DO.T":"1","DO.S":"ht<1>"},"ain":{"ae":[],"r":[]},"azV":{"ae":[],"r":[]},"aim":{"ae":[],"r":[]},"aio":{"ae":[],"r":[]},"ajf":{"ae":[],"r":[]},"afC":{"ae":[],"r":[]},"ax6":{"ag":["ain"]},"bfn":{"ag":["azV"]},"ax5":{"ag":["aim"]},"ax7":{"ag":["aio"]},"bcz":{"ag":["ajf"]},"aum":{"ag":["afC"]},"akN":{"ae":[],"r":[]},"XT":{"ae":[],"r":[]},"XU":{"ae":[],"r":[]},"abZ":{"ar":[],"r":[]},"X0":{"ae":[],"r":[]},"aza":{"ag":["akN"]},"Ze":{"ar":[],"r":[]},"bnE":{"ar":[],"r":[]},"beY":{"ag":["XT"]},"beZ":{"ag":["XU"]},"O5":{"ar":[],"r":[]},"aww":{"ag":["X0"]},"alh":{"ae":[],"r":[]},"bf4":{"ag":["alh"]},"akM":{"ae":[],"r":[]},"beW":{"ag":["akM"]},"Lx":{"ar":[],"r":[]},"amM":{"ar":[],"r":[]},"LF":{"ae":[],"r":[]},"bfz":{"ag":["LF"]},"aaP":{"ar":[],"r":[]},"aaO":{"ar":[],"r":[]},"ax8":{"ae":[],"r":[]},"bbi":{"ag":["ax8"]},"aXg":{"ar":[],"r":[]},"ame":{"ae":[],"r":[]},"azW":{"ag":["ame"]},"amR":{"ae":[],"r":[]},"aAc":{"ag":["amR"]},"Td":{"ae":[],"r":[]},"Nx":{"ae":[],"r":[]},"YF":{"ae":[],"r":[]},"YE":{"ae":[],"r":[]},"aAo":{"ag":["Td"]},"b6O":{"ag":["Nx"]},"aCg":{"ag":["YF"]},"aCf":{"ag":["YE"]},"Te":{"ae":[],"r":[]},"aAq":{"ag":["Te"]},"an9":{"ae":[],"r":[]},"a9n":{"ar":[],"r":[]},"a9f":{"ar":[],"r":[]},"axZ":{"ae":[],"r":[]},"aAp":{"ag":["an9"]},"axY":{"ar":[],"r":[]},"aWO":{"ar":[],"r":[]},"bcN":{"ag":["axZ"]},"anc":{"ae":[],"r":[]},"aAr":{"ag":["anc"]},"Xp":{"ae":[],"r":[]},"axr":{"ag":["Xp"]},"anJ":{"ae":[],"r":[]},"ay9":{"ae":[],"r":[]},"ayb":{"ae":[],"r":[]},"aAN":{"ag":["anJ"],"ev":[]},"aya":{"ar":[],"r":[]},"bdw":{"ag":["ay9"]},"b7i":{"az":[]},"b7h":{"az":[]},"b7g":{"az":[]},"ayc":{"ag":["ayb"]},"b6J":{"az":[]},"bqX":{"az":[]},"Yc":{"ae":[],"r":[]},"aAA":{"ag":["Yc"]},"bm1":{"az":[]},"aoX":{"ae":[],"r":[]},"aBk":{"ag":["aoX"]}}'))
B.Og(b.typeUniverse,JSON.parse('{"L9":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=B.aA
return{dw:w("nE<x?>"),gS:w("nF"),o:w("cW"),g5:w("w8"),M:w("fe<n>"),k:w("N"),gv:w("kU<al<iV>>"),gh:w("kU<n>"),gH:w("kU<H>"),r:w("au<~>"),dk:w("a_"),fw:w("M<nF>"),E:w("M<cW>"),V:w("M<a9>"),O:w("M<x>"),A:w("M<a_>"),R:w("M<mP>"),B:w("M<al<H>>"),m:w("M<a0<n,n>>"),_:w("M<a0<n,@>>"),b:w("M<qJ>"),x:w("M<qK>"),gi:w("M<iV>"),a:w("M<lj>"),Y:w("M<hU>"),v:w("M<i7>"),dA:w("M<GX>"),F:w("M<qP>"),Z:w("M<k9>"),g:w("M<hx>"),gK:w("M<+at,details,id(N,n,n)>"),C:w("M<cI>"),s:w("M<n>"),G:w("M<iG>"),eO:w("M<ez>"),d9:w("M<eK>"),p:w("M<r>"),n:w("M<P>"),t:w("M<H>"),U:w("M<az?>"),d4:w("M<n?>"),ck:w("al<qJ>"),e:w("al<qK>"),ac:w("al<iV>"),dZ:w("al<lj>"),I:w("al<hU>"),j:w("al<@>"),L:w("al<H>"),eq:w("a0<n,n>"),P:w("a0<n,@>"),f:w("a0<@,@>"),cl:w("cQ<n,B>"),aS:w("I<a_,rz>"),dc:w("I<H1,bF>"),dv:w("I<n,n>"),bL:w("I<P,bF>"),a3:w("I<H,bF>"),gN:w("I<H,p9>"),w:w("iA"),b1:w("qJ"),Q:w("qK"),bP:w("lj"),i:w("hU"),u:w("i7"),gp:w("Tf"),J:w("LS"),D:w("pl"),an:w("k9"),c:w("cp"),K:w("aC"),d:w("jb<n>"),di:w("+outcome,snapshot(TY,a3G?)"),ee:w("+after,before(P,P)"),et:w("+categories,error,message,replaceId(al<hU>,n?,n?,n?)"),cz:w("DC"),bJ:w("dv<n>"),N:w("n"),e7:w("bm<P>"),W:w("cv<n>"),am:w("k1<H>"),cc:w("a4<n>"),aM:w("e2<cW>"),bG:w("e2<P>"),l:w("r"),gm:w("o2"),ec:w("abe"),q:w("mz"),y:w("Q"),gR:w("P"),z:w("@"),S:w("H"),eG:w("cW?"),cJ:w("N?"),gw:w("al<a0<n,@>>?"),bM:w("al<@>?"),h:w("a0<n,@>?"),X:w("aC?"),gE:w("+code,qrPayload(n,n)?"),bY:w("+isLive,ownerEmail,snapshotJson(Q,n,n)?"),T:w("n?"),cD:w("P?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aOY=new B.bv(A.bC,A.jM,A.bC,A.jM)
D.eu=new B.x(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,A.t)
D.aPr=new B.ax(D.eu,1,A.r,-1)
D.aPt=new B.ax(A.al,2,A.r,-1)
D.aPw=new B.ax(A.aS,2,A.r,-1)
D.aPy=new B.ax(A.ct,0.8,A.r,-1)
D.aPO=new B.ax(A.aM,2,A.r,-1)
D.aPV=new B.ax(A.f3,1.6,A.r,-1)
D.aQI=new B.aV(0,330,0,1/0)
D.aQO=new B.aV(0,176,0,1/0)
D.aQP=new B.aV(0,1/0,0,260)
D.aR5=new B.aV(90,1/0,0,1/0)
D.aTN=new B.a9(0,A.G,A.dt,A.J,4)
D.cBj=w([D.aTN],x.V)
D.aRj=new B.o(A.c,null,null,null,D.cBj,null,A.a6)
D.cvV=w([D.eu,A.aW],x.O)
D.bHL=new B.a8(A.a1,A.a7,A.w,D.cvV,null,null)
D.aRy=new B.o(null,null,null,null,null,D.bHL,A.a6)
D.aRD=new B.o(A.bt,null,null,null,null,null,A.a6)
D.b1M=new B.x(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,A.t)
D.cPd=w([P.a8q,D.b1M],x.O)
D.bGV=new B.a8(A.b4,A.bb,A.w,D.cPd,null,null)
D.aRT=new B.o(null,null,null,A.mh,null,D.bGV,A.n)
D.b7x=new B.x(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,A.t)
D.cYX=w([D.b7x,M.aa6],x.O)
D.bGa=new B.a8(A.b4,A.bb,A.w,D.cYX,null,null)
D.aSg=new B.o(null,null,null,A.pM,null,D.bGa,A.n)
D.cLw=w([A.aA,A.bz],x.O)
D.bGD=new B.a8(A.a1,A.a7,A.w,D.cLw,null,null)
D.aSl=new B.o(null,null,null,null,null,D.bGD,A.a6)
D.es9=new B.E(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKl=new B.w("\ud83c\udf89",null,D.es9,null,null,null,null,null,null,null,null,null)
D.aXq=new B.cw(A.B,null,null,D.eKl,null)
D.aYI=new B.x(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,A.t)
D.a7V=new B.x(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,A.t)
D.b_S=new B.x(1,0.8431372549019608,0.8,0.7843137254901961,A.t)
D.b_W=new B.x(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,A.t)
D.nQ=new B.x(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,A.t)
D.rd=new B.x(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,A.t)
D.a8J=new B.x(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,A.t)
D.b1v=new B.x(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,A.t)
D.To=new B.x(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,A.t)
D.vX=new B.x(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,A.t)
D.b2E=new B.x(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,A.t)
D.TK=new B.x(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,A.t)
D.a9R=new B.x(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,A.t)
D.b5Y=new B.x(1,0.9529411764705882,0.9411764705882353,1,A.t)
D.b63=new B.x(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,A.t)
D.aaa=new B.x(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,A.t)
D.aap=new B.x(1,0,0.8392156862745098,0.30980392156862746,A.t)
D.aaq=new B.x(1,1,0.9529411764705882,0.6901960784313725,A.t)
D.b78=new B.x(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,A.t)
D.b7c=new B.x(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,A.t)
D.b7Y=new B.x(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,A.t)
D.U6=new B.x(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,A.t)
D.b8O=new B.x(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,A.t)
D.b9f=new B.x(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,A.t)
D.Uc=new B.x(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,A.t)
D.b9P=new B.x(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,A.t)
D.bBB=new B.ac(A.nr,20,A.c,null,null,null)
D.eDF=new B.w("PLAY",null,A.aKs,null,null,null,null,null,null,null,null,null)
D.bZn=w([D.bBB,A.bw,D.eDF],x.p)
D.baG=new B.fd(A.ah,A.e,A.R,A.m,null,A.p,null,0,D.bZn,null)
D.abm=new B.a1F(2,"active")
D.bcQ=new B.b7(42e5)
D.bcT=new B.b7(53e4)
D.bcV=new B.b7(58e4)
D.bcZ=new B.b7(82e4)
D.bdM=new B.L(0,30,0,30)
D.bdU=new B.L(0,4,0,8)
D.bdX=new B.L(0,8,12,8)
D.bey=new B.L(12,0,12,88)
D.beF=new B.L(12,11,12,10)
D.bf0=new B.L(13,10,12,10)
D.bf3=new B.L(13,8,13,8)
D.bf9=new B.L(14,10,14,2)
D.bfk=new B.L(14,14,10,14)
D.bfO=new B.L(16,12,16,96)
D.bfT=new B.L(16,14,16,8)
D.bfX=new B.L(16,16,16,96)
D.bfZ=new B.L(16,18,16,16)
D.bg2=new B.L(16,4,16,10)
D.bgY=new B.L(18,6,18,40)
D.bh_=new B.L(18,8,18,130)
D.bhc=new B.L(20,10,20,20)
D.bhp=new B.L(20,18,20,18)
D.bht=new B.L(20,20,20,22)
D.bis=new B.L(2,0,2,10)
D.bja=new B.L(4,8,12,4)
D.bjm=new B.L(6,1,6,1)
D.bjo=new B.L(6,4,0,0)
D.bjr=new B.L(6,6,12,4)
D.bjM=new B.L(8,4,12,8)
D.eNw=new B.w("Activity",null,A.fL,null,null,null,null,null,null,null,null,null)
D.blp=new B.bF(1,A.bn,D.eNw,null)
D.eV4=new B.w("Game Receipts",null,A_.H_,null,null,null,null,null,null,null,null,null)
D.eua=new B.E(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKX=new B.w("Every game you play \xb7 kept for good",null,D.eua,null,null,null,null,null,null,null,null,null)
D.cRf=w([D.eV4,D.eKX],x.p)
D.bau=new B.fd(A.ah,A.e,A.j,A.F,null,A.p,null,0,D.cRf,null)
D.blw=new B.bF(1,A.bn,D.bau,null)
D.bnf=new B.a_(58607,"MaterialIcons",!1)
D.WX=new B.a_(62178,"MaterialIcons",!1)
D.bo3=new B.a_(62410,"MaterialIcons",!1)
D.bpe=new B.a_(63258,"MaterialIcons",!1)
D.bpk=new B.a_(63304,"MaterialIcons",!1)
D.bpl=new B.a_(63306,"MaterialIcons",!1)
D.bps=new B.a_(63330,"MaterialIcons",!1)
D.ahp=new B.a_(984777,"MaterialIcons",!1)
D.brZ=new B.ac(A.E2,13,A.al,null,null,null)
D.bs6=new B.ac(A.jF,13,A.oQ,null,null,null)
D.ahy=new B.ac(A.kZ,null,A.c,null,null,null)
D.buc=new B.ac(A.E8,19,A.c,null,null,null)
D.bon=new B.a_(62804,"MaterialIcons",!1)
D.bul=new B.ac(D.bon,24,A.aM,null,null,null)
D.buN=new B.ac(A.A0,28,A.bh,null,null,null)
D.bvg=new B.ac(A.ah3,42,A.c,null,null,null)
D.bvp=new B.ac(A.XT,30,A.c,null,null,null)
D.bw_=new B.ac(A.fx,null,A.c,null,null,null)
D.bwk=new B.ac(A.jF,16,A.c,null,null,null)
D.bwV=new B.ac(A.qj,13,A.c,null,null,null)
D.bx3=new B.ac(A.kZ,18,A.c,null,null,null)
D.bxA=new B.ac(A.un,null,A.dy,null,null,null)
D.byc=new B.ac(A.nr,28,A.c,null,null,null)
D.byr=new B.ac(A.m0,22,null,null,null,null)
D.byO=new B.ac(A.qh,null,null,null,null,null)
D.bz_=new B.ac(A.iF,28,A.c,null,null,null)
D.bz1=new B.ac(A.cu,null,A.aQ,null,null,null)
D.bz8=new B.ac(A.WE,14,A.c,null,null,null)
D.bzD=new B.ac(A.L6,36,A.aK,null,null,null)
D.bzK=new B.ac(A.o9,16,A.c,null,null,null)
D.bzZ=new B.ac(A.ej,null,null,null,null,null)
D.b25=new B.x(1,0.23137254901960785,0.16470588235294117,0,A.t)
D.bAy=new B.ac(A.dO,9,D.b25,null,null,null)
D.bqj=new B.a_(983146,"MaterialIcons",!1)
D.bAO=new B.ac(D.bqj,null,A.aM,null,null,null)
D.bBi=new B.ac(A.uq,28,D.eu,null,null,null)
D.bBn=new B.ac(A.rP,null,A.f3,null,null,null)
D.bBs=new B.ac(A.hI,20,D.eu,null,null,null)
D.bqG=new B.a_(983377,"MaterialIcons",!1)
D.bBD=new B.ac(D.bqG,64,A.c,null,null,null)
D.bC5=new B.ac(A.fR,24,A.c,null,null,null)
D.bD_=new B.e0(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bD9=new B.e0(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bDn=new B.e0(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bDo=new B.e0(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.b0z=new B.x(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,A.t)
D.b2X=new B.x(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,A.t)
D.b2F=new B.x(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,A.t)
D.cPt=w([D.b0z,D.b2X,D.b2F],x.O)
D.bEg=new B.a8(A.ax,A.aD,A.w,D.cPt,null,null)
D.cTG=w([A.bq,A.aW],x.O)
D.bEy=new B.a8(A.ax,A.aD,A.w,D.cTG,null,null)
D.b1H=new B.x(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,A.t)
D.b6r=new B.x(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,A.t)
D.cBJ=w([D.b1H,D.b6r],x.O)
D.bED=new B.a8(A.ax,A.aD,A.w,D.cBJ,null,null)
D.cQQ=w([A.bj,A.M,A.eM],x.O)
D.bEK=new B.a8(A.ax,A.aD,A.w,D.cQQ,null,null)
D.bEM=new B.a8(A.a1,A.a7,A.w,F.aoG,null,null)
D.cBc=w([A.f3,A.c9],x.O)
D.ajf=new B.a8(A.a1,A.a7,A.w,D.cBc,null,null)
D.cBv=w([A.f3,A.bz],x.O)
D.ajg=new B.a8(A.a1,A.a7,A.w,D.cBv,null,null)
D.asc=w([D.nQ,A.at,A.bR],x.O)
D.bF2=new B.a8(A.ax,A.aD,A.w,D.asc,null,null)
D.aNO=new B.d3(-0.8,-1)
D.aNQ=new B.d3(1.2,1)
D.cyA=w([A.c,A.eq,A.ja,A.c,A.hq,A.b3,A.ml],x.O)
D.cQl=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.bF8=new B.a8(D.aNO,D.aNQ,A.w,D.cyA,D.cQl,null)
D.bFl=new B.a8(A.a1,A.a7,A.w,F.apt,null,null)
D.b6n=new B.x(1,0,0.7607843137254902,0.26666666666666666,A.t)
D.b4x=new B.x(1,0,0.6392156862745098,0.22745098039215686,A.t)
D.cPs=w([D.b6n,D.b4x],x.O)
D.bFx=new B.a8(A.a1,A.a7,A.w,D.cPs,null,null)
D.bFA=new B.a8(A.ax,A.aD,A.w,A.NB,null,null)
D.cKF=w([E.U9,A.w_],x.O)
D.bFC=new B.a8(A.a1,A.a7,A.w,D.cKF,null,null)
D.cOp=w([A.fP,A.ff],x.O)
D.ajl=new B.a8(A.a1,A.a7,A.w,D.cOp,null,null)
D.cTh=w([A.bt,A.bQ],x.O)
D.ajm=new B.a8(A.a1,A.a7,A.w,D.cTh,null,null)
D.cjT=w([A.dH,A.fp],x.O)
D.bGc=new B.a8(A.ax,A.aD,A.w,D.cjT,null,null)
D.cxH=w([A.c,A.bc],x.O)
D.bGl=new B.a8(A.a1,A.a7,A.w,D.cxH,null,null)
D.a9u=new B.x(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,A.t)
D.b_G=new B.x(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,A.t)
D.cHL=w([D.a9u,A.iV,A.pX,A.at,D.b_G],x.O)
D.bIE=w([0,0.28,0.55,0.82,1],x.n)
D.bGm=new B.a8(A.ax,A.aD,A.w,D.cHL,D.bIE,null)
D.bGv=new B.a8(A.a1,A.a7,A.w,A.Ob,null,null)
D.bGw=new B.a8(A.a1,A.a7,A.w,F.aqZ,null,null)
D.bGz=new B.a8(A.a1,A.a7,A.w,D.asc,null,null)
D.cCM=w([A.bz,A.f3],x.O)
D.bGJ=new B.a8(A.a1,A.a7,A.w,D.cCM,null,null)
D.cWX=w([A.aA,A.bz,A.bc],x.O)
D.bGL=new B.a8(A.a1,A.a7,A.w,D.cWX,null,null)
D.cKN=w([A.b_,A.bK,A.fZ],x.O)
D.bGP=new B.a8(A.a1,A.a7,A.w,D.cKN,null,null)
D.cWF=w([A.bj,A.aI,A.bP,A.aJ,A.aO,A.ct,A.aj],x.O)
D.cG8=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.bGU=new B.a8(A.ax,A.aD,A.w,D.cWF,D.cG8,null)
D.bH3=new B.a8(A.ax,A.aD,A.w,A.Zc,null,null)
D.cLg=w([D.To,A.e2],x.O)
D.bHc=new B.a8(A.a1,A.a7,A.w,D.cLg,null,null)
D.cS1=w([D.aaa,D.a8J,A.M],x.O)
D.bHj=new B.a8(A.ax,A.aD,A.w,D.cS1,null,null)
D.b8j=new B.x(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,A.t)
D.cy9=w([A.eO,A.fP,D.b8j],x.O)
D.bHN=new B.a8(A.ax,A.aD,A.w,D.cy9,null,null)
D.cDd=w([D.nQ,A.at],x.O)
D.bHO=new B.a8(A.ax,A.aD,A.w,D.cDd,null,null)
D.bI9=w([G.Ae,A.nr,A.jF,A.hi,A.k_,A.kA,A.kz,A.qm,A.m_,A.eF,A.lr,A.wT,A.Eg],x.A)
D.bLw=w([10,50,100,200],x.t)
D.bVa=w([1,3,5,7],x.t)
D.c_8=w([25,50,100,250],x.t)
D.bqe=new B.a_(983104,"MaterialIcons",!1)
D.c7w=w([A.nr,A.l0,A.m0,A.lq,A.hg,A.uw,D.bqe,A.XO],x.A)
D.ccR=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.coF=w([0,0.22,0.5,0.78,1],x.n)
D.cst=w([8,13,19],x.n)
D.Zv=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.eMB=new B.w("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.dQA=new B.jb("questions",48,D.eMB,null,x.d)
D.eDg=new B.w("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.dQF=new B.jb("edit",48,D.eDg,null,x.d)
D.eTL=new B.w("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.dQL=new B.jb("delete",48,D.eTL,null,x.d)
D.csD=w([D.dQA,D.dQF,D.dQL],B.aA("M<oD<n>>"))
D.cBD=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.cBQ=w([A.bJ,A.jc],x.O)
D.a14=new C.lj("text","",null,null)
D.cCU=w([D.a14],x.a)
D.cEc=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.e15=new B.abB(A.lY,"Home")
D.dXg=new B.abB(A.pa,"Growth")
D.dZC=new B.abB(A.jF,"Wallet")
D.cGj=w([D.e15,D.dXg,D.dZC],B.aA("M<+icon,label(a_,n)>"))
D.cGG=w([4,0,2,6,8,1,3,5,7],x.t)
D.cGO=w([A.c,A.bN,A.ct],x.O)
D.dkB=new C.qP("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.dkE=new C.qP("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.dkC=new C.qP("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.dkw=new C.qP("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.dkx=new C.qP("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.dkF=new C.qP("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.ZY=w([D.dkB,D.dkE,D.dkC,D.dkw,D.dkx,D.dkF],x.F)
D.a_2=w([A.aH,A.bq,A.dc,A.b_],x.O)
D.b2d=new B.x(1,1,0.8980392156862745,0.4,A.t)
D.cLm=w([A.T9,D.b2d,A.pX,A.hE,A.iV],x.O)
D.a_8=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.NJ=w(["checkers_deluxe","tic_tac_go"],x.s)
D.bId=w([0,1,2],x.t)
D.c7L=w([3,4,5],x.t)
D.ckr=w([6,7,8],x.t)
D.bIf=w([0,3,6],x.t)
D.bVf=w([1,4,7],x.t)
D.c1z=w([2,5,8],x.t)
D.bIj=w([0,4,8],x.t)
D.c1w=w([2,4,6],x.t)
D.cNz=w([D.bId,D.c7L,D.ckr,D.bIf,D.bVf,D.c1z,D.bIj,D.c1w],x.B)
D.aA4=new C.H1(0,"abab")
D.dku=new C.H1(1,"aaaBbb")
D.aA5=new C.H1(2,"aabb")
D.cOt=w([D.aA4,D.dku,D.aA5],B.aA("M<H1>"))
D.cOJ=w([],x.a)
D.arI=w([],x.v)
D.cRU=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.O2=w([1,2,3,-1,-2],x.t)
D.cUw=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.b5N=new B.x(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,A.t)
D.b5F=new B.x(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,A.t)
D.aaS=new B.x(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,A.t)
D.cVd=w([D.b5N,D.b5F,D.aaS],x.O)
D.b7t=new B.x(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,A.t)
D.cVf=w([A.a81,D.b7t,D.aaS],x.O)
D.cVN=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.asw=w([D.nQ,A.c,D.eu,A.cd,A.bd,A.at],x.O)
D.cYN=w([A.jz,A.aA],x.O)
D.f2N=new C.o2("dice","Dice Roll","Roll for cash & prizes!",A.lW,D.cYN)
D.f2K=new C.o2("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",A.qi,A.aqv)
D.cU_=w([A.dk,A.bh],x.O)
D.f2H=new C.o2("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",A.XB,D.cU_)
D.cYm=w([A.dN,A.lL],x.O)
D.f2P=new C.o2("memory","Memory Match","Match pairs \u2014 solo or multiplayer",A.XO,D.cYm)
D.apX=w([A.bh,A.j9],x.O)
D.f2Q=new C.o2("math","Math Quiz","200+ questions, rewards",A.E5,D.apX)
D.cN0=w([A.aA,A.lL],x.O)
D.f2J=new C.o2("scramble","Word Scramble","Place letters in order \u2014 solo or invite",F.af3,D.cN0)
D.bUY=w([A.j9,A.q6],x.O)
D.f2L=new C.o2("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",F.Xl,D.bUY)
D.f2O=new C.o2("sequence","Number Sequence","Find patterns, win rewards",A.ahf,D.apX)
D.cRT=w([M.kR,D.TK],x.O)
D.f2I=new C.o2("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",A.Ac,D.cRT)
D.f2M=new C.o2("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",A.cu,Ah.mJ)
D.cWP=w([D.f2N,D.f2K,D.f2H,D.f2P,D.f2Q,D.f2J,D.f2L,D.f2O,D.f2I,D.f2M],B.aA("M<o2>"))
D.dkz=new C.qP("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.dky=new C.qP("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.dkv=new C.qP("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.dkD=new C.qP("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.dkG=new C.qP("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.dkA=new C.qP("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a_G=w([D.dkz,D.dky,D.dkv,D.dkD,D.dkG,D.dkA],x.F)
D.dI9={checkers_deluxe:0,tic_tac_go:1}
D.ay5=new B.bt(D.dI9,["Checkers Deluxe","Tic Tac Go"],B.aA("bt<n,n>"))
D.dHm={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.ayg=new B.bt(D.dHm,[1,2,3,4,5,6,7],B.aA("bt<n,H>"))
D.dgU=new C.lj("signature","NGMY Support Team",null,null)
D.dgV=new C.lj("divider","",null,null)
D.OU=new C.Tf(!1,!1,!1,!1)
D.OW=new C.LS(!1,!1,!1,!1)
D.dhY=new C.LS(!0,!0,!1,!1)
D.B2=new C.anV(0,"swahili")
D.aA3=new C.anV(1,"english")
D.B3=new C.anV(2,"mix")
D.cN5=w([A.hS,A.iA,A.dC],x.O)
D.dlH=new C.oz(D.cN5,A.hC,A.b_,"BACKGAMMON","\ud83c\udfb2",A.afY)
D.br6=new B.a_(983637,"MaterialIcons",!1)
D.dlI=new C.oz(Ae.asF,A.bq,A.f4,"EURO WHEEL","\ud83c\udfa1",D.br6)
D.cUN=w([A.M,A.aI,A.bB],x.O)
D.dlJ=new C.oz(D.cUN,A.aO,A.aj,"ROYALE","\u265f\ufe0f",F.Xl)
D.cBe=w([A.dH,A.bh,A.e9],x.O)
D.dlK=new C.oz(D.cBe,A.aH,A.dc,"CONNECT 4","\ud83d\udd34",A.Y0)
D.cQw=w([A.dq,A.fp,A.q6],x.O)
D.dlL=new C.oz(D.cQw,A.tW,A.c9,"PUNTO BANCO","\ud83d\udc8e",A.l0)
D.cjU=w([A.n8,A.hQ,A.lj],x.O)
D.dlM=new C.oz(D.cjU,A.iN,A.jy,"DOMINOES","\ud83c\udc53",A.ah5)
D.cVq=w([A.w3,A.tX,A.hm],x.O)
D.dlN=new C.oz(D.cVq,A.zj,A.iv,"WAR","\u2694\ufe0f",N.Xh)
D.dlO=new C.oz(A.asA,A.aM,A.aj,"PREMIUM","\ud83c\udfae",A.lW)
D.cCN=w([A.jT,A.aA,A.dN],x.O)
D.dlP=new C.oz(D.cCN,A.j6,A.f3,"JACKPOT","\ud83c\udfb0",A.lW)
D.cPJ=w([A.lh,A.lJ,A.bz],x.O)
D.dlQ=new C.oz(D.cPJ,A.pW,A.cd,"LIVE BINGO","\ud83c\udfb1",A.A5)
D.cvT=w([A.iA,A.e2,A.b_],x.O)
D.bot=new B.a_(62865,"MaterialIcons",!1)
D.dlR=new C.oz(D.cvT,A.rl,A.aM,"BIG SPIN","\ud83c\udfa1",D.bot)
D.dlS=new C.oz(A.a_F,A.aJ,A.bq,"HOLD'EM","\u2660\ufe0f",A.jF)
D.cVM=w([A.eO,A.ff,A.aW],x.O)
D.bnA=new B.a_(61234,"MaterialIcons",!1)
D.dlT=new C.oz(D.cVM,A.lO,A.aS,"CRAPS","\ud83c\udfb2",D.bnA)
D.cAB=w([A.jc,A.iw,A.bJ],x.O)
D.dlU=new C.oz(D.cAB,A.bK,A.bc,"PLINKO","\ud83d\udc8e",Ai.L8)
D.bqQ=new B.a_(983492,"MaterialIcons",!1)
D.dlV=new C.oz(A.a_F,A.eY,A.bq,"SNOOKER","\ud83c\udfb1",D.bqQ)
D.cTB=w([A.eO,A.ff,A.aS],x.O)
D.dlW=new C.oz(D.cTB,A.q0,A.br,"PROFIT LAB","\ud83d\udcb0",A.hI)
D.cTT=w([A.eM,A.fo,A.bq],x.O)
D.bpq=new B.a_(63324,"MaterialIcons",!1)
D.dlX=new C.oz(D.cTT,A.zf,A.bt,"KLONDIKE","\ud83c\udccf",D.bpq)
D.cNF=w([A.de,A.bj,A.M],x.O)
D.dlY=new C.oz(D.cNF,A.aM,A.aI,"VEGAS TABLE","\ud83c\udccf",A.Ag)
D.pk=new C.Dc(0,"continueGame")
D.pl=new C.Dc(1,"youWin")
D.FZ=new C.Dc(2,"youLose")
D.P4=new C.Dc(3,"draw")
D.aAi=new C.TY(0,"found")
D.dEK=new C.TY(1,"foundLive")
D.a1k=new C.TY(2,"notFound")
D.aAj=new C.TY(3,"wrongAccount")
D.dJM=new B.v(4,12)
D.dLU=new B.B(A.JJ,A.r4,null)
D.biQ=new B.L(4,0,0,3)
D.epC=new B.E(!0,A.aK,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXS=new B.w("NGMY Helper",null,D.epC,null,null,null,null,null,null,null,null,null)
D.dM9=new B.B(D.biQ,D.eXS,null)
D.bpi=new B.a_(63284,"MaterialIcons",!1)
D.buz=new B.ac(D.bpi,18,A.nT,null,null,null)
D.etZ=new B.E(!0,A.nT,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGW=new B.w("Continue",null,D.etZ,null,null,null,null,null,null,null,null,null)
D.cP7=w([D.buz,A.bp,D.eGW],x.p)
D.ebl=new B.cC(A.aY,A.e,A.R,A.m,null,A.p,null,0,D.cP7,null)
D.dMc=new B.B(A.iD,D.ebl,null)
D.dMm=new B.B(A.bT,A.r4,null)
D.b5t=new B.x(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,A.t)
D.cLW=w([A.fP,A.ff,A.cW,D.b5t],x.O)
D.bGX=new B.a8(A.ax,A.aD,A.w,D.cLW,A.Av,null)
D.aSo=new B.o(null,null,null,null,null,D.bGX,A.n)
D.bbJ=new B.ky(D.aSo,A.b7,null,null)
D.dR_=new B.cE(0,0,0,0,null,null,D.bbJ,null)
D.bwg=new B.ac(A.um,11,A.c,null,null,null)
D.dR3=new B.cE(10,12,null,null,null,null,D.bwg,null)
D.cow=w([A.hc,A.eM,A.kn],x.O)
D.dRD=new B.bS(A.HR,1.1,A.w,null,0,D.cow,null,null)
D.b6D=new B.x(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,A.t)
D.b1W=new B.x(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,A.t)
D.b3u=new B.x(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,A.t)
D.cJS=w([D.b6D,D.b1W,D.b3u],x.O)
D.dRJ=new B.bS(A.a5Q,1.05,A.w,null,0,D.cJS,null,null)
D.dS1=new B.bS(A.B,0.5,A.w,null,0,W.ZK,null,null)
D.e9Y=new B.af(-18,0,18,1)
D.eaa=new B.af(-3,-5,3,5)
D.bv0=new B.ac(A.ej,16,D.eu,null,null,null)
D.aKp=new B.E(!0,D.eu,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVL=new B.w("Screenshot added \xb7 tap to change",null,D.aKp,null,null,null,null,null,null,null,null,null)
D.cyD=w([D.bv0,A.bp,D.eVL],x.p)
D.eaP=new B.cC(A.aY,A.b5,A.j,A.m,null,A.p,null,0,D.cyD,null)
D.byK=new B.ac(A.jG,15,D.eu,null,null,null)
D.eTG=new B.w("Refresh",null,D.aKp,null,null,null,null,null,null,null,null,null)
D.cAK=w([D.byK,A.d4,D.eTG],x.p)
D.eaR=new B.cC(A.aY,A.e,A.R,A.m,null,A.p,null,0,D.cAK,null)
D.dHK={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.ecf=new B.fe(D.dHK,3,x.M)
D.dIs={bubble_pop:0,fruit_slash:1,whack_mole:2,sky_stack:3,snake_rush:4,sky_hopper:5,brick_breaker:6,mystery_word:7,higher_lower:8,mine_sweep:9,merge_2048:10,lights_out:11,odd_one:12,speed_sort:13,flag_frenzy:14,balloon_darts:15,coin_catcher:16,number_rush:17,mini_sudoku:18,space_dodge:19,color_gate:20,paddle_duel:21,beat_tiles:22,target_range:23,perfect_stop:24,hoop_shot:25,penalty_kick:26,dino_dash:27,lane_racer:28,planet_shield:29,pipe_flow:30,color_flood:31,hanoi_tower:32,emoji_riddle:33,bigger_sum:34,true_false:35,capital_quiz:36,clock_reader:37,quick_count:38,shell_game:39,gem_swap:40,block_collapse:41,ball_sort:42,burger_builder:43,archery:44,deep_fishing:45,cannon_blast:46,moon_lander:47,jelly_jump:48,mini_golf:49,treasure_hunt:50,safe_cracker:51,gold_miner:52,cash_counter:53,plinko_drop:54,slot_stopper:55,change_maker:56,price_guess:57,make_13:58,find_it:59,knife_throw:60,fall_down:61,stick_bridge:62,zigzag_run:63,word_search:64,emoji_math:65,connect_four:66,pop_lock:67,asteroid_blaster:68,tetro_drop:69}
D.ecm=new B.fe(D.dIs,70,x.M)
D.dHx={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.ect=new B.fe(D.dHx,6,x.M)
D.dIy={memory:0,typing:1,scramble:2,pattern:3}
D.ma=new B.fe(D.dIy,4,x.M)
D.eeA=new B.ap(276,276)
D.efe=new B.a3(13,null,null,null)
D.aY3=new B.f9(2.6,null,null,null,null,A.aM,null,null,null,null)
D.efo=new B.a3(26,26,D.aY3,null)
D.eg8=new B.a3(null,7,null,null)
D.egh=new B.hI(8,0,0,1,null)
D.eWM=new B.w("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aI1=new B.aY(D.eWM,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eCt=new B.w("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.ejb=new B.aY(D.eCt,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eDr=new B.w("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.ejh=new B.aY(D.eDr,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eTQ=new B.w("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.ejV=new B.aY(D.eTQ,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.b65=new B.x(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,A.t)
D.esY=new B.E(!0,D.b65,null,null,null,null,9,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.emW=new B.ez("$",null,null,A.cT,null,null,null,null,null,null,D.esY)
D.ena=new B.E(!0,A.M,null,null,null,null,14,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ent=new B.E(!0,A.c,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eny=new B.E(!0,A.bj,null,null,null,null,9,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.enV=new B.E(!0,A.M,null,null,null,null,9,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eo4=new B.E(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eoa=new B.E(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eoi=new B.E(!0,null,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eoZ=new B.E(!0,A.aM,null,null,null,null,28,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.epu=new B.E(!0,D.eu,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.epw=new B.E(!0,A.bK,null,null,null,null,14,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eqd=new B.E(!0,E.zd,null,null,null,null,13,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJd=new B.E(!0,A.c,null,null,null,null,20,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.erH=new B.E(!0,A.bK,null,null,null,null,11.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.erZ=new B.E(!0,A.al,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,A.az,null,null,null,null,null,null,null,null)
D.esf=new B.E(!0,A.al,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etc=new B.E(!0,A.c,null,null,null,null,11,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etr=new B.E(!0,A.c,null,null,null,null,14,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etC=new B.E(!0,A.bt,null,null,null,null,11,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etD=new B.E(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,A.az,null,null,null,null,null,null,null,null)
D.eu6=new B.E(!0,A.il,null,null,null,null,10.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b0P=new B.x(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,A.t)
D.euk=new B.E(!0,D.b0P,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evE=new B.E(!0,A.aH,null,null,null,null,17,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ew_=new B.E(!0,D.a9u,null,null,null,null,9,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJU=new B.E(!0,E.zd,null,null,null,null,11,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewk=new B.E(!0,A.fo,null,null,null,null,52,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewl=new B.E(!0,A.bB,null,null,null,null,7,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewA=new B.E(!0,E.zd,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.va=new B.E(!0,A.c,null,null,null,null,13,A.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4c=new B.x(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,A.t)
D.ewN=new B.E(!0,D.b4c,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exh=new B.E(!0,A.OA,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyf=new B.E(!0,A.c,null,null,null,null,38,A.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyl=new B.E(!0,A.iC,null,null,null,null,11,A.a_,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyp=new B.E(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aK7=new B.E(!0,A.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyS=new B.E(!0,A.M,null,null,null,null,10,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyW=new B.E(!0,A.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezN=new B.E(!0,A.M,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAa=new B.E(!0,A.al,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAq=new B.E(!0,A.bt,null,null,null,null,14,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAS=new B.E(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAW=new B.E(!0,A.M,null,null,null,null,11,A.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBN=new B.w("Value per pair",null,A.hk,null,null,null,null,null,null,null,null,null)
D.eBO=new B.w("Restore now",null,A.cc,null,null,null,null,null,null,null,null,null)
D.eCh=new B.w("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aJE=new B.E(!0,A.cS,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCp=new B.w("AVAILABLE PLANS",null,D.aJE,null,null,null,null,null,null,null,null,null)
D.eCU=new B.w("Go Back",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eq4=new B.E(!0,A.bB,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDy=new B.w("PLAN VALUE",null,D.eq4,null,null,null,null,null,null,null,null,null)
D.eDA=new B.w("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.eDX=new B.w("Deposit",null,A.R4,null,null,null,null,null,null,null,null,null)
D.eza=new B.E(!0,A.j6,null,null,null,null,null,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eES=new B.w("JACKPOT SLOTS",null,D.eza,null,null,null,null,null,null,null,null,null)
D.eF9=new B.w("Restore",null,A.cc,null,null,null,null,null,null,null,null,null)
D.eq7=new B.E(!0,A.c,null,null,null,null,12,A.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFc=new B.w("YOUR NUMBER",null,D.eq7,null,null,null,null,null,null,null,null,null)
D.eFq=new B.w("SPIN REELS",null,F.a40,null,null,null,null,null,null,null,null,null)
D.eFQ=new B.w("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.eGh=new B.w("Perfect Score Profit",null,A.hk,null,null,null,null,null,null,null,null,null)
D.eGU=new B.w("Join room",null,A.kc,null,null,null,null,null,null,null,null,null)
D.eIK=new B.w("Add payment screenshot",null,A.js,null,null,null,null,null,null,null,null,null)
D.eIY=new B.w("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.eys=new B.E(!0,A.aM,null,null,null,null,11,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJo=new B.w("INVITE A PLAYER",null,D.eys,null,null,null,null,null,null,null,null,null)
D.exE=new B.E(!0,A.T9,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJN=new B.w("NGMY GOLD LEADER",null,D.exE,null,null,null,null,null,null,null,null,null)
D.eKg=new B.w("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.eKD=new B.w("Invest & Play",null,A.or,null,null,null,null,null,null,null,null,null)
D.aJy=new B.E(!0,D.vX,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL0=new B.w("VALID THRU",null,D.aJy,null,null,null,null,null,null,null,null,null)
D.aK9=new B.E(!0,A.aB,null,null,null,null,11,A.I,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL8=new B.w("DEALER",null,D.aK9,null,null,null,null,null,null,null,null,null)
D.eLe=new B.w("CARDHOLDER",null,D.aJy,null,null,null,null,null,null,null,null,null)
D.exb=new B.E(!0,A.aJ,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLU=new B.w("NGMY PLATINUM",null,D.exb,null,null,null,null,null,null,null,null,null)
D.eAh=new B.E(!0,A.oQ,null,null,null,null,10,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMw=new B.w("EARNED SO FAR",null,D.eAh,null,null,null,null,null,null,null,null,null)
D.eN1=new B.w("VS",null,A.aJs,null,null,null,null,null,null,null,null,null)
D.eNq=new B.w("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.eO5=new B.w("Keep typing \u2014 mistakes are counted in your payout",null,A.BF,null,null,null,null,null,null,null,null,null)
D.eO6=new B.w("Multiplayer invite",null,A.kc,null,null,null,null,null,null,null,null,null)
D.eOg=new B.w("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.eoO=new B.E(!0,A.OA,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOm=new B.w("\ud83d\udcb0 Partial Payout System",null,D.eoO,null,null,null,null,null,null,null,null,null)
D.eOw=new B.w("Browse Topics",null,A.eJ,null,null,null,null,null,null,null,null,null)
D.enT=new B.E(!0,A.c,null,null,null,null,22,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOK=new B.w("Investment Required",null,D.enT,null,A.L,null,null,null,null,null,null,null)
D.enq=new B.E(!0,A.c,null,null,null,null,16.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQ7=new B.w("Network Status",null,D.enq,null,null,null,null,null,null,null,null,null)
D.eQC=new B.w("Their account email",null,G.a3P,null,null,null,null,null,null,null,null,null)
D.eQV=new B.w("Verification code",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eQW=new B.w("Category",null,null,null,null,null,null,null,null,null,null,null)
D.eR7=new B.w("ACTIVE ASSET",null,D.aJE,null,null,null,null,null,null,null,null,null)
D.eRr=new B.w("Scan QR",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eRw=new B.w("Check word",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eRU=new B.w("YOUR HAND",null,D.aK9,null,null,null,null,null,null,null,null,null)
D.eSp=new B.w("NGMY Music Studio",null,A.l7,null,null,null,null,null,null,null,null,null)
D.eSs=new B.w("I sent it \u2014 submit deposit",null,A.or,null,null,null,null,null,null,null,null,null)
D.eT8=new B.w("Back",null,A.QD,null,null,null,null,null,null,null,null,null)
D.eB6=new B.E(!0,null,null,null,null,null,null,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTe=new B.w("DEAL / PLAY ROUND",null,D.eB6,null,null,null,null,null,null,null,null,null)
D.eTq=new B.w("Got it \u2014 keep chatting",null,A.cc,null,null,null,null,null,null,null,null,null)
D.eTz=new B.w("3 Messages Left",null,A.aJY,null,null,null,null,null,null,null,null,null)
D.eU2=new B.w("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.eUa=new B.w("Copy",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eUv=new B.w("How many games?",null,G.a3P,null,null,null,null,null,null,null,null,null)
D.ewH=new B.E(!0,A.aB,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUH=new B.w("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.ewH,null,A.L,null,null,null,null,null,null,null)
D.eVf=new B.w("Games & other activity",null,A.js,null,null,null,null,null,null,null,null,null)
D.eWa=new B.w("Question",null,null,null,null,null,null,null,null,null,null,null)
D.eWm=new B.w("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.eBs=new B.E(!0,A.c,null,null,null,null,12.5,A.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXN=new B.w("NGMY  WALLET",null,D.eBs,null,null,null,null,null,null,null,null,null)
D.eXO=new B.w("Select Your Bet",null,A.h7,null,null,null,null,null,null,null,null,null)
D.f03=new B.cv("history",x.W)
D.f08=new B.cv("ngmy_local_home",x.W)
D.f09=new B.cv("ngmy_local_invest",x.W)
D.f0a=new B.cv("ngmy_local_wallet",x.W)
D.f2u=new C.X0(null)
D.aMF=new C.ay_(0,"grid")
D.aMG=new C.ay_(1,"questions")
D.f3n=new C.ay_(2,"answer")
D.f4b=new C.XU(null)})();(function staticFields(){$.fA2=B.aZ(x.N)
$.fZ4=B.R(x.N,x.k)
$.fFn=null
$.fFb=B.R(x.N,B.aA("vn"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hUI","bzw",()=>C.hD9())
w($,"hUu","h5V",()=>{var v=null,u=B.j0(v,v,v,v,D.emW,A.a5,A.cn,v,A.eL,A.cm)
u.fD()
return u})})()};
(a=>{a["ZcF1wcMsSBrb9rZ+T8X5V6zTPlU="]=a.current})($__dart_deferred_initializers__);