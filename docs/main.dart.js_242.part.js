((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,L,Q,E,M,A_,N,A0,R,O,A1,S,A2,P,A3,T,A4,A5,A6,A7,A8,A9,U,Aa,C={
fSH(d,e,f){var w=null,v=f.k("Et<0>"),u=new B.Et(w,w,w,w,v)
$.a0s()
u.d=new C.cl9(new B.Vy(),e,u,f,d)
return new B.hK(u,v.k("hK<1>"))},
cl9:function cl9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cla:function cla(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cl6:function cl6(d){this.a=d},
cl7:function cl7(d,e){this.a=d
this.b=e},
cl8:function cl8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cl5:function cl5(d,e,f){this.a=d
this.b=e
this.c=f},
bn6:function bn6(d){this.a=d},
fSG(d,e,f,g){return new C.asA(d,e,f,null,g.k("asA<0>"))},
DN:function DN(){},
aEK:function aEK(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
eKK:function eKK(d){this.a=d},
eKJ:function eKJ(d,e){this.a=d
this.b=e},
eKM:function eKM(d){this.a=d},
eKH:function eKH(d,e,f){this.a=d
this.b=e
this.c=f},
eKL:function eKL(d){this.a=d},
eKI:function eKI(d){this.a=d},
asA:function asA(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
hGL(d){var w=A.a.i(d)
while(A.a.a_(w,"$"))w=A.a.i(A.a.aU(w,1))
return w},
h1E(d){var w=C.hGL(d)
if(w.length===0)return""
return"$"+w},
fdF(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fdF=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:i=A.a.i(d.toLowerCase())
if(i.length===0){w=1
break}t=new B.N(Date.now(),0,!1).bL(-31536e11)
s=e.length,r=0
case 3:if(!(r<e.length)){w=5
break}q=e[r]
if(A.a.i(q.b.toLowerCase())!==i){w=4
break}p=q.y
o=p.a
if(o>=t.gbm())o=o===t.gbm()&&p.b<t.gcB()
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
return B.b(C.v0(q.c,p,n,d,o,null,q.a,!0),$async$fdF)
case 6:case 4:e.length===s||(0,B.J)(e),++r
w=3
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$fdF,v)},
hLi(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
hHL(d,e,f){return A.d.be(e,new C.fhm(f,A.a.i(d.toLowerCase())))},
fhf(d){var w
B.fzu(d)
w=d.ci
return B.bi(new B.I(w,new C.fhg(),B.T(w).k("I<1,@>")),!0,x.N)},
hxU(d,e,f){var w,v,u,t,s,r,q=null,p=A.bM,o=A.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aS.toString
u=$.eb().gi2().b
if(u.a===0)t=1
else{new B.bf(u,B.a2(u).k("bf<2>")).gI(0)
u=$.kO()
s=u.d
t=s==null?u.gfY():s}w=A.k.dF(f*t)
v=new C.f2d(f)
if(J.cS(n,"data:image"))try{u=B.fD(A.cw.aE(A.d.gai(J.l8(n,","))),A.B,w,new C.f2a(v),A.fG,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.cS(n,"supabase://"))return new B.kU(B.a_f(n),new C.f2b(f,e,p,w,v),q,q,x.gh)
return B.k7(n,A.B,w,new C.f2c(v),A.fG,p,!0,e,q,q,f)},
fEg(d,e){return new B.a3(e,e,B.hN(C.hxU(d,e,e),A.ap),null)},
hqC(){var w,v,u=B.a([],x._),t=x.N,s=B.z(D.cWO,x.gm)
for(w=0;w<70;++w){v=A.AI[w]
s.push(new C.o2(v.a,v.b,v.c,v.e,v.f))}return new C.ax5(u,B.R(t,t),s)},
fhm:function fhm(d,e){this.a=d
this.b=e},
fhg:function fhg(){},
f2d:function f2d(d){this.a=d},
f2a:function f2a(d){this.a=d},
f2b:function f2b(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f29:function f29(d){this.a=d},
f2c:function f2c(d){this.a=d},
aim:function aim(d,e,f,g,h,i,j){var _=this
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
ax5:function ax5(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
d1X:function d1X(d,e){this.a=d
this.b=e},
d27:function d27(d,e){this.a=d
this.b=e},
d2p:function d2p(){},
d2q:function d2q(d){this.a=d},
d2f:function d2f(d,e){this.a=d
this.b=e},
d2e:function d2e(){},
d2g:function d2g(d){this.a=d},
d2d:function d2d(){},
d2i:function d2i(d){this.a=d},
d2h:function d2h(){},
d2a:function d2a(d){this.a=d},
d28:function d28(d){this.a=d},
d29:function d29(d){this.a=d},
d2b:function d2b(d){this.a=d},
d2c:function d2c(d){this.a=d},
d22:function d22(d,e){this.a=d
this.b=e},
d23:function d23(d,e){this.a=d
this.b=e},
d20:function d20(d){this.a=d},
d21:function d21(d){this.a=d},
d24:function d24(d){this.a=d},
d25:function d25(d){this.a=d},
d26:function d26(d,e,f){this.a=d
this.b=e
this.c=f},
d2_:function d2_(d,e){this.a=d
this.b=e},
d1Z:function d1Z(d,e){this.a=d
this.b=e},
d1Y:function d1Y(d,e){this.a=d
this.b=e},
d2o:function d2o(d){this.a=d},
d2m:function d2m(d,e,f){this.a=d
this.b=e
this.c=f},
d2l:function d2l(d,e,f){this.a=d
this.b=e
this.c=f},
d2k:function d2k(d,e){this.a=d
this.b=e},
d2j:function d2j(){},
d2n:function d2n(d){this.a=d},
azU:function azU(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bfm:function bfm(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
dF8:function dF8(d){this.a=d},
dF7:function dF7(d){this.a=d},
dF9:function dF9(d){this.a=d},
dF6:function dF6(){},
dFa:function dFa(d,e){this.a=d
this.b=e},
dF5:function dF5(d){this.a=d},
dFb:function dFb(d){this.a=d},
ail:function ail(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ax4:function ax4(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
d1R:function d1R(d){this.a=d},
d1U:function d1U(d){this.a=d},
d1V:function d1V(d){this.a=d},
d1W:function d1W(d){this.a=d},
d1T:function d1T(d,e){this.a=d
this.b=e},
d1S:function d1S(d,e){this.a=d
this.b=e},
ain:function ain(d,e,f,g,h,i,j,k,l,m){var _=this
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
ax6:function ax6(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
d3J:function d3J(d,e){this.a=d
this.b=e},
d3M:function d3M(d){this.a=d},
d3N:function d3N(d){this.a=d},
d3O:function d3O(d){this.a=d},
d3P:function d3P(d){this.a=d},
d3Q:function d3Q(d){this.a=d},
d3K:function d3K(d){this.a=d},
d3L:function d3L(d){this.a=d},
d2Z:function d2Z(d,e){this.a=d
this.b=e},
d3_:function d3_(d,e){this.a=d
this.b=e},
d3s:function d3s(d){this.a=d},
d3t:function d3t(){},
d3e:function d3e(d,e,f){this.a=d
this.b=e
this.c=f},
d3f:function d3f(d){this.a=d},
d3g:function d3g(d,e,f){this.a=d
this.b=e
this.c=f},
d3h:function d3h(d,e){this.a=d
this.b=e},
d3i:function d3i(){},
d2r:function d2r(d){this.a=d},
d2Y:function d2Y(d,e){this.a=d
this.b=e},
d3u:function d3u(){},
d3D:function d3D(){},
d3r:function d3r(d){this.a=d},
d3q:function d3q(d){this.a=d},
d2W:function d2W(d){this.a=d},
d2X:function d2X(){},
d3y:function d3y(){},
d3z:function d3z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d3A:function d3A(d,e,f){this.a=d
this.b=e
this.c=f},
d2s:function d2s(){},
d2t:function d2t(d){this.a=d},
d2u:function d2u(){},
d37:function d37(d,e){this.a=d
this.b=e},
d38:function d38(d,e,f){this.a=d
this.b=e
this.c=f},
d39:function d39(d){this.a=d},
d36:function d36(d){this.a=d},
d3j:function d3j(d){this.a=d},
d3k:function d3k(){},
d3l:function d3l(d){this.a=d},
d3m:function d3m(){},
d3n:function d3n(d){this.a=d},
d3o:function d3o(){},
d3x:function d3x(d,e,f){this.a=d
this.b=e
this.c=f},
d3a:function d3a(d){this.a=d},
d3b:function d3b(d,e){this.a=d
this.b=e},
d3c:function d3c(d){this.a=d},
d3d:function d3d(d){this.a=d},
d3B:function d3B(d){this.a=d},
d3C:function d3C(d){this.a=d},
d2v:function d2v(d){this.a=d},
d2w:function d2w(d,e){this.a=d
this.b=e},
d2x:function d2x(d){this.a=d},
d2y:function d2y(d){this.a=d},
d3v:function d3v(d,e){this.a=d
this.b=e},
d3w:function d3w(d){this.a=d},
d35:function d35(d,e){this.a=d
this.b=e},
d3p:function d3p(d,e,f){this.a=d
this.b=e
this.c=f},
d33:function d33(d,e,f){this.a=d
this.b=e
this.c=f},
d34:function d34(){},
d3E:function d3E(d){this.a=d},
d3F:function d3F(d){this.a=d},
d3G:function d3G(d){this.a=d},
d3I:function d3I(d){this.a=d},
d3H:function d3H(){},
d32:function d32(d,e,f){this.a=d
this.b=e
this.c=f},
d31:function d31(d,e){this.a=d
this.b=e},
d30:function d30(d,e){this.a=d
this.b=e},
d2L:function d2L(d){this.a=d},
d2K:function d2K(d,e){this.a=d
this.b=e},
d2M:function d2M(d){this.a=d},
d2J:function d2J(d,e){this.a=d
this.b=e},
d2N:function d2N(d){this.a=d},
d2I:function d2I(){},
d2O:function d2O(d){this.a=d},
d2G:function d2G(){},
d2H:function d2H(d){this.a=d},
d2P:function d2P(d){this.a=d},
d2F:function d2F(d,e){this.a=d
this.b=e},
d2Q:function d2Q(d){this.a=d},
d2E:function d2E(d,e){this.a=d
this.b=e},
d2A:function d2A(d,e){this.a=d
this.b=e},
d2R:function d2R(d){this.a=d},
d2D:function d2D(d,e){this.a=d
this.b=e},
d2S:function d2S(d){this.a=d},
d2C:function d2C(d){this.a=d},
d2z:function d2z(d,e){this.a=d
this.b=e},
d2T:function d2T(d,e,f){this.a=d
this.b=e
this.c=f},
d2U:function d2U(d){this.a=d},
d2B:function d2B(){},
d2V:function d2V(d){this.a=d},
ajf:function ajf(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bcy:function bcy(){this.c=this.a=null},
d70:function d70(d,e){this.a=d
this.b=e},
d7_:function d7_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afB:function afB(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
aul:function aul(d,e,f,g,h,i,j,k,l,m){var _=this
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
cw2:function cw2(d){this.a=d},
cvn:function cvn(d,e){this.a=d
this.b=e},
cvd:function cvd(d){this.a=d},
cve:function cve(d){this.a=d},
cvx:function cvx(d){this.a=d},
cvu:function cvu(d){this.a=d},
cvv:function cvv(d){this.a=d},
cvw:function cvw(d,e,f){this.a=d
this.b=e
this.c=f},
cvp:function cvp(d){this.a=d},
cvo:function cvo(d){this.a=d},
cvf:function cvf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cvs:function cvs(d){this.a=d},
cvr:function cvr(d){this.a=d},
cvq:function cvq(d,e){this.a=d
this.b=e},
cvQ:function cvQ(d){this.a=d},
cvK:function cvK(d){this.a=d},
cvN:function cvN(d){this.a=d},
cvM:function cvM(){},
cvJ:function cvJ(d){this.a=d},
cvL:function cvL(d,e){this.a=d
this.b=e},
cvI:function cvI(){},
cvk:function cvk(){},
cvl:function cvl(d,e){this.a=d
this.b=e},
cvm:function cvm(d){this.a=d},
cvi:function cvi(d,e){this.a=d
this.b=e},
cvj:function cvj(d,e){this.a=d
this.b=e},
cvA:function cvA(d,e){this.a=d
this.b=e},
cvt:function cvt(d){this.a=d},
cvB:function cvB(d){this.a=d},
cvC:function cvC(d,e){this.a=d
this.b=e},
cvD:function cvD(d,e){this.a=d
this.b=e},
cvE:function cvE(d,e){this.a=d
this.b=e},
cvF:function cvF(d,e,f){this.a=d
this.b=e
this.c=f},
cvG:function cvG(d){this.a=d},
cvH:function cvH(d){this.a=d},
cvy:function cvy(d,e){this.a=d
this.b=e},
cvP:function cvP(d){this.a=d},
cvz:function cvz(d,e){this.a=d
this.b=e},
cw1:function cw1(d){this.a=d},
cvV:function cvV(d){this.a=d},
cvY:function cvY(d){this.a=d},
cvS:function cvS(d,e){this.a=d
this.b=e},
cvW:function cvW(){},
cvX:function cvX(d,e){this.a=d
this.b=e},
cvT:function cvT(d){this.a=d},
cvU:function cvU(d){this.a=d},
cw_:function cw_(){},
cvZ:function cvZ(d){this.a=d},
cvR:function cvR(d,e){this.a=d
this.b=e},
cw0:function cw0(d){this.a=d},
cvg:function cvg(d){this.a=d},
cvO:function cvO(d,e){this.a=d
this.b=e},
cvh:function cvh(d,e,f){this.a=d
this.b=e
this.c=f},
aH7:function aH7(){},
aH8:function aH8(){},
aH9:function aH9(){},
aI4:function aI4(){},
bTp(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase())
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
bTq(d){var w=A.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
heb(d,e){var w=d.ax
if(w<0)return!1
return w===e},
aTZ(d,e){return C.hec(d,e)},
hec(d,e){var w=0,v=B.j(x.di),u,t,s,r,q,p
var $async$aTZ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aXL(d),$async$aTZ)
case 3:p=g
if(p!=null){try{t=A.Q.aC(0,p.c,null)
if(x.f.b(t)){s=C.fNu(B.Z(t,x.N,x.z))
if(s==null){u=new B.Eo(D.a1k,null)
w=1
break}if(A.a.i(e).length!==0&&!C.bTp(s,e,p.b)){u=new B.Eo(D.aAk,null)
w=1
break}r=p.a?D.dEJ:D.aAj
u=new B.Eo(r,s)
w=1
break}}catch(o){}u=new B.Eo(D.a1k,null)
w=1
break}s=C.fNv(d)
if(s==null){u=new B.Eo(D.a1k,null)
w=1
break}if(A.a.i(e).length!==0&&!C.bTp(s,e,null)){u=new B.Eo(D.aAk,null)
w=1
break}u=new B.Eo(D.aAj,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aTZ,v)},
fNv(d){var w,v,u,t,s,r
try{w=A.a.i(d)
if(J.cS(w,"\ufeff"))w=J.mf(w,1)
v=!1
if(J.cS(w,"NGMYSNAP1|")){v=!0
w=A.c0.c4(0,A.cw.aE(J.mf(w,10)))}u=A.Q.aC(0,w,null)
if(!x.f.b(u))return null
t=B.Z(u,x.N,x.z)
s=v?C.hea(t):C.fNu(t)
return s}catch(r){return null}},
hea(d){var w,v,u,t,s,r,q,p,o,n=new C.bTm(),m=new C.bTl(),l=d.h(0,"qi")
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
return new B.a3F("","",v,u,t,s,r,q,n,m,o,p,A.hN,new B.N(Date.now(),0,!1),-1)},
fNu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.y(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.bTo()
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
l=B.z(new B.e2(J.b4(m,new C.bTn(w),x.eG),t),t.k("F.E"))}else l=B.a([],x.E)
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
fyQ(d,e,f,g){var w=0,v=B.j(x.N),u,t,s,r
var $async$fyQ=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:t=B.bTk(d,e,f,g)
s=B.ad("[^\\w\\-.]+",!0,!1,!1,!1)
r=B.aI(t.a,s,"_")
u=B.ES(B.Ic(t.eD(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fyQ,v)},
TY:function TY(d,e){this.a=d
this.b=e},
bTm:function bTm(){},
bTl:function bTl(){},
bTo:function bTo(){},
bTn:function bTn(d){this.a=d},
hAR(d){return B.cg(null,A.aV,!0,null,new C.f5s(),d,null,!0,!0,x.N)},
hB3(d,e,f,g){return B.cg(null,A.aV,!0,null,new C.f6F(g,f,e),d,null,!0,!0,x.y)},
akN:function akN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
az9:function az9(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dnq:function dnq(d,e){this.a=d
this.b=e},
dnr:function dnr(d){this.a=d},
dnh:function dnh(d,e){this.a=d
this.b=e},
dnf:function dnf(d){this.a=d},
dnp:function dnp(d){this.a=d},
dno:function dno(d,e){this.a=d
this.b=e},
dne:function dne(d,e){this.a=d
this.b=e},
dnd:function dnd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dng:function dng(d){this.a=d},
dnn:function dnn(){},
dnl:function dnl(d){this.a=d},
dnm:function dnm(d,e){this.a=d
this.b=e},
dni:function dni(){},
dnj:function dnj(d,e){this.a=d
this.b=e},
dnk:function dnk(d,e){this.a=d
this.b=e},
dns:function dns(d){this.a=d},
Ze:function Ze(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bnC:function bnC(d,e,f,g,h){var _=this
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
beX:function beX(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dnw:function dnw(d){this.a=d},
dnt:function dnt(d,e){this.a=d
this.b=e},
dnu:function dnu(d,e){this.a=d
this.b=e},
dnv:function dnv(d){this.a=d},
XU:function XU(d){this.a=d},
beY:function beY(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dnx:function dnx(d,e){this.a=d
this.b=e},
f5s:function f5s(){},
f6F:function f6F(d,e,f){this.a=d
this.b=e
this.c=f},
abY:function abY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eEF:function eEF(d){this.a=d},
eEG:function eEG(d){this.a=d},
O5:function O5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
X0:function X0(d){this.a=d},
awv:function awv(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cYg:function cYg(d){this.a=d},
cYd:function cYd(){},
cYe:function cYe(d){this.a=d},
cYf:function cYf(d){this.a=d},
S3(d,e,f){var w=0,v=B.j(x.H),u,t,s
var $async$S3=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=A.a.i(d)
if(s.length===0||A.a.i(f).length===0){w=1
break}w=3
return B.b(B.L6(s),$async$S3)
case 3:t=h
J.ch(t,B.D(["role",e,"text",A.a.i(f),"at",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z))
w=4
return B.b(B.al2(s,t),$async$S3)
case 4:case 1:return B.h(u,v)}})
return B.i($async$S3,v)},
heu(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=B.T(d).k("a4<1>")
v=B.z(new B.a4(d,new C.bU7(),w),w.k("F.E"))
w=v.length
if(w===0)return""
u=w<=24?v:A.d.fT(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,B.J)(u),++s){r=u[s]
q=J.a6(r)
p=J.y(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+B.t(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
bU7:function bU7(){},
hGb(d){return A.d.dM(A.AI,new C.fdz(d),new C.fdA()).r},
fdz:function fdz(d){this.a=d},
fdA:function fdA(){},
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
bf3:function bf3(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dtS:function dtS(d){this.a=d},
dtR:function dtR(d){this.a=d},
dtJ:function dtJ(d,e,f){this.a=d
this.b=e
this.c=f},
dtO:function dtO(d){this.a=d},
dtL:function dtL(d,e,f){this.a=d
this.b=e
this.c=f},
dtP:function dtP(d){this.a=d},
dtK:function dtK(d){this.a=d},
dtQ:function dtQ(d){this.a=d},
dtM:function dtM(d){this.a=d},
dtN:function dtN(d){this.a=d},
h0R(){var w=new B.N(Date.now(),0,!1),v=w.bL(B.dB(4-B.mu(w),0,0,0,0,0).a),u=B.bX(B.bw(v),1,4,0,0,0,0,0)
return""+B.bw(v)+"-W"+A.a.aT(A.o.u(1+A.k.bK(A.o.ak(v.bv(B.bX(B.bw(u),B.bB(u),B.bL(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
eYp(d,e){var w,v,u,t,s,r,q=B.EA(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=J.q(t,"email")
r=A.a.i(J.k(s==null?"":s).toLowerCase())
if((A.a.c5(r,"+local.ngmy")?A.a.al(r,0,r.length-11):r)===q)return t}t=B.D(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
hvE(d,e){var w,v,u,t,s,r,q,p=B.EA(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=J.a6(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c5(q,"+local.ngmy")?A.a.al(q,0,q.length-11):q)===p){w=B.aQ(s.h(t,"winsLeft"))
w=w==null?null:A.k.M(w)
return w==null?0:w}}return 0},
hP3(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=B.EA(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=J.a6(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c5(q,"+local.ngmy")?A.a.al(q,0,q.length-11):q)===n){w=B.aQ(s.h(t,o))
w=w==null?null:A.k.M(w)
p=(w==null?0:w)-1
s.m(t,o,p<0?0:p)
return}}},
hBE(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=B.EA(b5),b2=B.c1M(),b3=C.h0R()
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
return w==null?1:w}n=new C.f7q()
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
if(l!=null)return l}k=C.eYp(b4,b5)
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
fYD(d,e){var w,v,u,t,s,r,q=B.a([],x.t)
for(w=[1,2,3],v=d.a,u=0;u<3;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
if(w===0)return 1
t=q[e.aG(w)]
if(t===3&&d.f>=d.e)t=e.hd()?1:2
return t},
fEy(d,e){var w,v,u,t,s,r,q=B.a([],x.t)
for(w=[-1,-2],v=d.a,u=0;u<2;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
return w===0?-1:q[e.aG(w)]},
hBF(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=B.EA(a3),a1=new C.f7r()
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
q=new C.f7s(v+r+q>1,l)
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
return C.fEy(a2,a4)}w.m(u,f,m-1)
w.m(u,d,"p")
return 3},
hBD(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=B.aQ(i.h(0,"wins")),g=h==null?m:A.k.M(h)
if(g==null)g=0
h=B.aQ(i.h(0,"loses"))
w=h==null?m:A.k.M(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.h0R():B.c1M()
t=v+"|"+u
s=C.eYp(d,e)
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
hJJ(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
d.bbQ()
w=C.hBF(d,e,a0)
if(w!=null){if(w===3)++d.f
C.adl(d,e,w)
return w}v=C.hBE(d,e)
if(v!=null){if(v===3)++d.f
C.adl(d,e,v)
return v}u=C.hBD(d,e,a0)
if(u!=null)return new C.fky(d,a0,e).$1(u)
t=C.eYp(d,e)
s=J.a6(t)
r=B.aQ(s.h(t,"winStreak"))
q=r==null?null:A.k.M(r)
if(q==null)q=0
s=B.aQ(s.h(t,"loseStreak"))
p=s==null?null:A.k.M(s)
if(p==null)p=0
o=new C.fkA(d,a0)
if(C.hvE(d,e)>0){n=o.$0()
C.hP3(d,e)
C.adl(d,e,n)
return n}if(q>=d.c){n=new C.fkz(d,a0).$0()
C.adl(d,e,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.adl(d,e,n)
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
C.adl(d,e,f)
return f},
c1E(d){var w=0,v=B.j(x.y),u
var $async$c1E=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c1D(d),$async$c1E)
case 3:if(f){u=!0
w=1
break}u=B.c1D(d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c1E,v)},
adl(d,e,f){var w,v="winStreak",u="loseStreak",t=C.eYp(d,e),s=J.a6(t),r=B.aQ(s.h(t,v)),q=r==null?null:A.k.M(r)
if(q==null)q=0
r=B.aQ(s.h(t,u))
w=r==null?null:A.k.M(r)
if(w==null)w=0
if(f>0){s.m(t,v,q+1)
s.m(t,u,0)}else{s.m(t,u,w+1)
s.m(t,v,0)}},
f7q:function f7q(){},
f7r:function f7r(){},
f7s:function f7s(d,e){this.a=d
this.b=e},
fky:function fky(d,e,f){this.a=d
this.b=e
this.c=f},
fkA:function fkA(d,e){this.a=d
this.b=e},
fkz:function fkz(d,e){this.a=d
this.b=e},
akM:function akM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beV:function beV(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cO$=d
_.aX$=e
_.c=_.a=null},
dn2:function dn2(d){this.a=d},
dn1:function dn1(d){this.a=d},
dn3:function dn3(d){this.a=d},
dn0:function dn0(d,e){this.a=d
this.b=e},
aHF:function aHF(){},
Lx:function Lx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c2t:function c2t(){},
c2s:function c2s(){},
amM:function amM(d,e,f){this.c=d
this.d=e
this.a=f},
fzT(d,e,f){return B.cg(null,A.x.j(0.88),!0,null,new C.c2V(f,e),d,null,!0,!0,x.H)},
hij(d){var w,v,u,t,s=A.a.i(d),r=s.split("-")
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
c2V:function c2V(d,e){this.a=d
this.b=e},
bfy:function bfy(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
dLW:function dLW(d,e){this.a=d
this.b=e},
dLS:function dLS(){},
dLT:function dLT(){},
dLU:function dLU(d,e){this.a=d
this.b=e},
dLV:function dLV(d,e){this.a=d
this.b=e},
aId:function aId(){},
h0N(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.bbp(new C.ffW(w))
w=w.a
return w==null?null:w.c.a},
h0F(d){$.aS.x1$.push(new C.ffJ(d))},
h0Z(d){var w=$.ri().gb8(),v=w!=null
if(!v||w.c==null)return
if(C.h0N(w)==="GamePlayScreen")if(v&&w.c!=null&&w.pI())w.eB()},
h0Y(d){C.fYJ(d,0)},
fYJ(d,e){var w,v
if(e>4)return
w=d==null?$.ri().gb8():d
if(w==null||w.c==null)return
v=C.h0N(w)
if(v==="GameCenterScreen")return
if(D.ecf.q(0,v)&&w.pI()){w.eB()
$.aS.x1$.push(new C.f3J(w,e))}},
aLX(d,e,f){return B.ec(B.cj(new C.fhh(e,d,f)),e,!0)},
ffW:function ffW(d){this.a=d},
ffJ:function ffJ(d){this.a=d},
ffI:function ffI(d){this.a=d},
f3J:function f3J(d,e){this.a=d
this.b=e},
fhh:function fhh(d,e,f){this.a=d
this.b=e
this.c=f},
aWn(d,e){var w=0,v=B.j(x.H),u
var $async$aWn=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=B.T6(e)
w=2
return B.b(B.amP(d,u),$async$aWn)
case 2:B.a4V(d,u)
return B.h(null,v)}})
return B.i($async$aWn,v)},
v0(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$v0=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:o=B.xl(g)
if(o.length===0){w=1
break}t=e==null?B.Jh(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return B.b(B.LG(o),$async$v0)
case 3:q=m
if(j!=null&&j.length!==0&&J.rj(q,new C.c37(j))){w=1
break}p=e==null?new B.N(Date.now(),0,!1):e
J.p_(q,0,new B.iV(A.o.u(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return B.b(C.aWn(o,q),$async$v0)
case 4:if(i==null||r==null||s)C.a4X(o).bw(new C.c38(),x.S).eL(new C.c39())
case 1:return B.h(u,v)}})
return B.i($async$v0,v)},
a4X(d){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a4X=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=$.h1W
m=B.xl(d)
if(n==null||m.length===0){w=1
break}w=3
return B.b(B.LG(m),$async$a4X)
case 3:t=f
s=J.cB(t)
if(!s.be(t,new C.c36())){w=1
break}w=4
return B.b(n.$2(m,t),$async$a4X)
case 4:r=f
q=J.a6(r)
if(q.gG(r)!==s.gG(t)){w=1
break}for(p=!1,o=0;o<s.gG(t);++o)if(A.Q.aj(s.h(t,o).ad(),null)!==A.Q.aj(q.h(r,o).ad(),null))p=!0
w=p?5:6
break
case 5:w=7
return B.b(C.aWn(m,r),$async$a4X)
case 7:case 6:case 1:return B.h(u,v)}})
return B.i($async$a4X,v)},
aWo(d){var w=0,v=B.j(x.S),u,t
var $async$aWo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.fzW(d,!1),$async$aWo)
case 3:t=J
w=4
return B.b(C.amQ(d,!1),$async$aWo)
case 4:u=t.dF(f,new C.c35(new B.N(Date.now(),0,!1).bL(-864e8))).gG(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aWo,v)},
amQ(d,e){var w=0,v=B.j(x.ac),u,t,s
var $async$amQ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=B.xl(d)
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
hHI(d){var w,v,u,t=new B.N(Date.now(),0,!1),s=t.bv(d).a,r=A.o.ak(s,6e7)
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
bvy(d){var w=A.k.ab(Math.abs(d),2).split(".")
return"$"+B.od(w[0],B.ad("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.f1V(),null)+"."+w[1]},
bz1(d,e){var w=0,v=B.j(x.H),u,t,s
var $async$bz1=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.amQ(e,!1),$async$bz1)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
B.fzW(e,!0).bw(new C.fsB(e),t).bw(new C.fsC(),t).eL(new C.fsD())
w=4
return B.b(B.c0(A.K,null,new C.fsE(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bz1)
case 4:case 1:return B.h(u,v)}})
return B.i($async$bz1,v)},
fCK(d,e,f){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.G(f.j(0.35),A.r,1)
return B.C(B.p(w,B.u(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),A.bw,B.eY(A.B,B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,A.dp)],x.p),A.m,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.hs,w,w,w),1)},
dLX(d,e,f){var w=null,v=A.x.j(0.22),u=B.m(8),t=B.G(f.j(0.28),A.r,1)
return B.C(B.p(w,B.u(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,A.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.eY(A.a_,B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,A.e8)],x.p),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.K4,w,w,w),1)},
c37:function c37(d){this.a=d},
c38:function c38(){},
c39:function c39(){},
c36:function c36(){},
c35:function c35(d){this.a=d},
f1V:function f1V(){},
fsB:function fsB(d){this.a=d},
fsC:function fsC(){},
fsD:function fsD(){},
fsE:function fsE(d,e){this.a=d
this.b=e},
fsA:function fsA(d,e){this.a=d
this.b=e},
fsz:function fsz(d){this.a=d},
aaO:function aaO(d,e){this.c=d
this.a=e},
dLZ:function dLZ(){},
dM_:function dM_(){},
dM0:function dM0(){},
dM1:function dM1(d){this.a=d},
dM3:function dM3(){},
dM2:function dM2(d){this.a=d},
aaN:function aaN(d,e){this.c=d
this.a=e},
dLY:function dLY(){},
bz2(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return B.hM(A.aV,!1,w,d,new C.fsH(j,i,h,g,e,f),null,A.eU,!1,x.H)},
fsH:function fsH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fsF:function fsF(d,e){this.a=d
this.b=e},
fsG:function fsG(d,e){this.a=d
this.b=e},
ax7:function ax7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bbh:function bbh(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bq$=e
_.a6$=f
_.c=_.a=null},
d3S:function d3S(d,e){this.a=d
this.b=e},
d3R:function d3R(){},
abd:function abd(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aHa:function aHa(){},
anA(d,e,f){return new C.aXe(f,d,e,null)},
hiY(d){var w=B.a(A.k.ab(d,2).split("."),x.s),v=B.ad("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=B.od(w[0],v,new C.c4I(),null)
return A.d.aF(w,".")},
aWr(){var w=$.rI
if((w>0?$.rI=w-1:w)<=0)$.rI=0},
aeu(d,e){var w=0,v=B.j(x.H),u
var $async$aeu=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.fH2
w=u!=null?2:3
break
case 2:w=4
return B.b(u.$2(d,e),$async$aeu)
case 4:case 3:return B.h(null,v)}})
return B.i($async$aeu,v)},
aXe:function aXe(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c4J:function c4J(d){this.a=d},
c4I:function c4I(){},
L9:function L9(){},
bUE:function bUE(){},
fGs(d){if(d>0)return"+"+d
return""+d},
fFQ(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fhi(d,e){var w=J.q(e,d)
if(w==null)w=B.fg5().h(0,d)
return w==null?90:w},
f0T(d,e){var w,v,u=B.aZ(x.S)
while(u.a<3){w=e.aG(41)-20
if(w===0)continue
u.H(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.H(0,d+v*7+3)
v=B.a([A.o.u(d)],x.s)
A.d.v(v,new B.jA(u,new C.f0U(),u.$ti.k("jA<ck.E,n>")))
A.d.fN(v,e)
return v},
fXK(d,e,f){var w,v,u,t,s=B.aZ(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.H(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.H(0,f[A.o.J(u,5)]+u);++u}t=B.a([d],x.s)
A.d.v(t,B.oJ(s,3,s.$ti.k("ck.E")))
A.d.fN(t,e)
return t},
hCZ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=B.a([],x.dA),b2=new B.f6()
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
b1.push(new C.GU("Simplify \u221a("+t*s+"x^"+q+")",m,C.fXK(m,b2,B.a([""+(r+1)+"x^"+o+"\u221a"+n,B.t(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aG(35)
j=b2.aG(4)===0?1:2+b2.aG(4)
i=b2.aG(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.GU("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.f0T(k,b2)))}else if(u===2){k=2+b2.aG(18)
j=b2.aG(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aG(10)+2
b1.push(new C.GU("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.f0T(g,b2)))}else b1.push(new C.GU("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.f0T(k,b2)))}else if(u===3){e=b2.aG(11)-5
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
b1.push(new C.GU("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.f0T(a0,b2)))}else{a6=2+b2.aG(10)
a7=a6+2+b2.aG(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.GU("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.fXK(m,b2,B.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
hNl(d){var w,v,u=x.s,t=B.a(d.split(""),u)
if(t.length<4)return new B.dv(B.a(d.split(""),u),x.bJ).fL(0)
for(w=0;w<12;++w){A.d.fN(t,A.cA)
v=A.d.fL(t)
if(v!==d)return v}return new B.dv(t,x.bJ).fL(0)},
GU:function GU(d,e,f){this.a=d
this.b=e
this.c=f},
f0U:function f0U(){},
ame:function ame(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
azV:function azV(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
dFe:function dFe(d){this.a=d},
dFf:function dFf(d){this.a=d},
dFg:function dFg(d){this.a=d},
dFh:function dFh(d,e){this.a=d
this.b=e},
dFi:function dFi(d,e){this.a=d
this.b=e},
dFj:function dFj(d){this.a=d},
dFd:function dFd(d){this.a=d},
dFk:function dFk(d){this.a=d},
dFc:function dFc(d){this.a=d},
dFn:function dFn(d){this.a=d},
dFo:function dFo(d){this.a=d},
dFm:function dFm(d,e){this.a=d
this.b=e},
dFl:function dFl(d,e){this.a=d
this.b=e},
amR:function amR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAb:function aAb(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
dMl:function dMl(d,e,f){this.a=d
this.b=e
this.c=f},
dMm:function dMm(d){this.a=d},
dMh:function dMh(d){this.a=d},
dMj:function dMj(d,e){this.a=d
this.b=e},
dMi:function dMi(d,e){this.a=d
this.b=e},
dMk:function dMk(d,e){this.a=d
this.b=e},
dMg:function dMg(d){this.a=d},
hf6(d){var w,v,u,t,s,r,q,p=new B.N(Date.now(),0,!1),o=p.bL(36e8)
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
break}p=J.d1(s,x.f)
p=B.cy(p,new C.c3z(),p.$ti.k("F.E"),x.b1)
p=B.z(p,B.a2(p).k("F.E"))
A.d.aY(p,new C.c3A())
u=p
w=1
break}catch(n){r=B.a5(n)
$.al.$1("[calendar-memory] load: "+B.t(r))
p=B.a([],x.b)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$a52,v)},
an8(d,e){var w=0,v=B.j(x.H),u,t,s,r,q
var $async$an8=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(C.a52(d),$async$an8)
case 2:r=g
q=J.cB(r)
q.bl(r,new C.c3w(e))
q.H(r,e)
q.aY(r,new C.c3x())
w=3
return B.b(B.aw(),$async$an8)
case 3:u=g
t=A.a.i(d.toLowerCase())
q=q.jY(r,80)
s=q.$ti.k("I<ai.E,a0<n,@>>")
q=B.z(new B.I(q,new C.c3y(),s),s.k("ai.E"))
w=4
return B.b(u.an("String","ngmy_helper_calendar_v1_"+t,A.Q.aj(q,null)),$async$an8)
case 4:return B.h(null,v)}})
return B.i($async$an8,v)},
hiw(d,e){var w=Date.now(),v=new B.N(w,0,!1).bO()
w=J.dF(d,new C.c3B(v,v.bL(B.dB(14,0,0,0,0,0).a)))
w=B.z(w,w.$ti.k("F.E"))
return w},
fPC(d){var w,v,u,t,s,r,q,p,o,n,m=C.hiw(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=B.dc(m,0,B.dJ(20,"count",x.S),B.T(m).c),v=w.$ti,w=new B.bR(w,w.gG(0),v.k("bR<ai.E>")),v=v.k("ai.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
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
c3z:function c3z(){},
c3A:function c3A(){},
c3w:function c3w(d){this.a=d},
c3x:function c3x(){},
c3y:function c3y(){},
c3B:function c3B(d,e){this.a=d
this.b=e},
hf7(d){var w,v,u,t,s,r,q,p,o=null,n=new B.N(Date.now(),0,!1)
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
fO2(d){var w=A.o.J(B.dn(d),12)===0?12:A.o.J(B.dn(d),12),v=B.dn(d)>=12?"PM":"AM"
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
p=B.cy(p,new C.bX1(),p.$ti.k("F.E"),x.Q)
p=B.z(p,B.a2(p).k("F.E"))
A.d.aY(p,new C.bX2())
u=p
w=1
break}catch(n){r=B.a5(n)
$.al.$1("[call-memory] load: "+B.t(r))
p=B.a([],x.x)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$Sg,v)},
aUL(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$aUL=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.aw(),$async$aUL)
case 2:u=g
t=B.dc(e,0,B.dJ(120,"count",x.S),B.T(e).c).dz(0)
s=A.a.i(d.toLowerCase())
r=B.T(t).k("I<1,a0<n,@>>")
r=B.z(new B.I(t,new C.bX_(),r),r.k("ai.E"))
w=3
return B.b(u.an("String","ngmy_call_memory_v1_"+s,A.Q.aj(r,null)),$async$aUL)
case 3:return B.h(null,v)}})
return B.i($async$aUL,v)},
aUM(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$aUM=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:p=B.R(x.N,x.Q)
o=J
w=2
return B.b(C.Sg(d),$async$aUM)
case 2:u=o.aW(g)
case 3:if(!u.C()){w=4
break}t=u.gT(u)
p.m(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.m(0,r.a,r)}u=p.$ti.k("bf<2>")
q=B.z(new B.bf(p,u),u.k("F.E"))
A.d.aY(q,new C.bX0())
w=5
return B.b(C.aUL(d,q),$async$aUM)
case 5:return B.h(null,v)}})
return B.i($async$aUM,v)},
bX3(d,e){var w=0,v=B.j(x.e),u,t,s
var $async$bX3=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return B.b(C.Sg(d),$async$bX3)
case 3:t=s.dF(g,new C.bX4(e.bL(-72e8),e.bL(72e8)))
t=B.z(t,t.$ti.k("F.E"))
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bX3,v)},
fO3(d,e){var w,v,u,t,s,r=J.a6(d)
if(r.gah(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.jY(d,e),v=w.$ti,w=new B.bR(w,w.gG(0),v.k("bR<ai.E>")),v=v.k("ai.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gTs()+"\n"
t=t.f
if(t!=null&&A.a.i(t).length!==0){s=A.a.i(t)
u+="  Voicemail/text: "+(s.length>180?A.a.al(s,0,177)+"\u2026":s)+"\n"}}r=r.gG(d)>e?u+("\u2026 and "+(r.gG(d)-e)+" more\n"):u
return A.a.i(r.charCodeAt(0)==0?r:r)},
hJt(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new B.N(q,0,!1).bO(),o=d.toLowerCase(),n=B.bX(B.bw(p),B.bB(p),B.bL(p),0,0,0,0,0)
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
return B.bX(B.bw(n),B.bB(n),B.bL(n),u,t,0,0,0)},
h2l(d){var w=B.ad("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
qK:function qK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bX1:function bX1(){},
bX2:function bX2(){},
bX_:function bX_(){},
bX0:function bX0(){},
bX4:function bX4(d,e){this.a=d
this.b=e},
fPF(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.li(t,w,v,u==null?null:J.k(u))},
hiC(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b4(v,new C.c3H(),x.bP)
v=B.z(v,v.$ti.k("ai.E"))}if(v==null)v=D.cOI
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.y(d.h(0,"printable"),!0)
return new C.i7(r,w,v,u,t,typeof d.h(0,s)=="number"?A.k.M(B.fc(d.h(0,s))):0)},
hiB(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.hvQ(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?A.k.M(B.fc(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?A.k.M(B.fc(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b4(s,new C.c3F(),x.u)
s=B.z(s,s.$ti.k("ai.E"))}return new C.hU(p,w,v,u,s==null?D.arJ:s,t)},
hvR(d){var w,v,u,t=B.D([G.Ae,"investments",A.o8,"games",A.jE,"loans",A.hi,"withdrawals",A.k_,"deposits",A.kA,"civic",A.kz,"store",A.qm,"jobs",A.m_,"refunds",A.eF,"account",A.lr,"music",A.wT,"help"],x.dk,x.N)
for(w=new B.cN(t,B.a2(t).k("cN<1,2>")).gaf(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
hvQ(d){switch(d){case"investments":return G.Ae
case"games":return A.o8
case"loans":return A.jE
case"withdrawals":return A.hi
case"deposits":return A.k_
case"civic":return A.kA
case"store":return A.kz
case"jobs":return A.qm
case"refunds":return A.m_
case"account":return A.eF
case"music":return A.lr
default:return A.wT}},
mB(d){var w=B.a([new C.li("text",d,null,null)],x.a)
return w},
aer(){var w=null,v=x.v
return B.a([new C.hU("investments","Investments",G.Ae,4280468830,B.a([new C.i7("inv1","How do I buy an investment plan?",C.mB("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.i7("inv2","When do I get paid from my plan?",C.mB("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.i7("inv3","Can I have more than one plan?",C.mB("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.hU("games","Games",A.o8,4287323382,B.a([new C.i7("gam1","How do NGMY games work?",C.mB("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.i7("gam2","Why did my game payout change?",C.mB("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.hU("loans","Loans",A.jE,4294538006,B.a([new C.i7("loan1","How do I apply for a loan?",C.mB("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.i7("loan2","What is the repayment period?",C.mB("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.hU("withdrawals","Withdrawals",A.hi,4282090230,B.a([new C.i7("wd1","How do I withdraw money?",C.mB("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.i7("wd2","Why is my withdrawal pending?",C.mB("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.hU("deposits","Deposits",A.k_,4279548070,B.a([new C.i7("dep1","How do I deposit funds?",C.mB("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.i7("dep2","How long until my deposit posts?",C.mB("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.hU("civic","Civic Registry",A.kA,4289170426,B.a([new C.i7("civ1","What is Civic Registry?",C.mB("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.i7("civ2","What does \u201cmissed\u201d mean on my profile?",C.mB("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.hU("store","NGMY Store",A.kz,4293675161,B.a([new C.i7("sto1","How do I buy from NGMY Store?",C.mB("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.i7("sto2","How do I sell in the store?",C.mB("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.hU("jobs","Jobs & Creator",A.qm,4293548044,B.a([new C.i7("job1","How do I find jobs?",C.mB("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.i7("job2","How do I post a job?",C.mB("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.hU("refunds","Refunds",A.m_,4293870660,B.a([new C.i7("ref1","Can I get a refund?",C.mB("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.i7("ref2","How long do refunds take?",C.mB("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.hU("account","Account",A.eF,4281908728,B.a([new C.i7("acc1","How do I update my profile?",C.mB("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.i7("acc2","I forgot my password \u2014 what now?",C.mB("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.hU("music","Music Charts",A.lr,4290807036,B.a([new C.i7("mus1","What are Music Charts?",C.mB("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.i7("mus2","How do I upload music?",C.mB("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.hU("help","Help Center",A.wT,4279080072,B.a([new C.i7("hlp1","Where can I get live help?",C.mB("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.i7("hlp2","How do daily Helper limits work?",C.mB("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
fPG(d){var w,v=J.a6(d),u=v.gah(d)
if(u)return C.aer()
v=v.di(d,new C.c3K(),x.i)
w=B.z(v,v.$ti.k("ai.E"))
A.d.aY(w,new C.c3L())
return w.length===0?C.aer():w},
fPH(d){var w=J.b4(d,new C.c3M(),x.P)
w=B.z(w,w.$ti.k("ai.E"))
return B.D(["categories",w,"savedAt",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z)},
ana(d){return C.hiD(d)},
hiD(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p
var $async$ana=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aw(),$async$ana)
case 6:s=f
w=7
return B.b(s.an("String","ngmy_helper_kb_v1",A.Q.aj(C.fPH(d),null)),$async$ana)
case 7:u=1
w=5
break
case 3:u=2
p=t.pop()
r=B.a5(p)
$.al.$1("[helper kb] local save: "+B.t(r))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ana,v)},
c3J(){var w=0,v=B.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$c3J=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aw(),$async$c3J)
case 7:r=e
q=B.aR(J.q(r.a,"ngmy_helper_kb_v1"))
if(q==null||A.a.i(q).length===0){l=C.aer()
u=l
w=1
break}p=A.Q.aC(0,q,null)
if(!x.f.b(p)){l=C.aer()
u=l
w=1
break}o=J.q(p,"categories")
if(!x.j.b(o)){l=C.aer()
u=l
w=1
break}n=C.fPG(o)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
m=B.a5(j)
$.al.$1("[helper kb] local load: "+B.t(m))
l=C.aer()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$c3J,v)},
aWN(){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$aWN=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.bZ(),$async$aWN)
case 7:if(!e){u=null
w=1
break}w=8
return B.b(B.eU("ngmy_helper_kb",null,!1,A.bD),$async$aWN)
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
$.al.$1("[helper kb] cloud fetch: "+B.t(r))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aWN,v)},
aWO(d){return C.hiE(d)},
hiE(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aWO=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.bZ(),$async$aWO)
case 7:if(!f){u=!1
w=1
break}w=8
return B.b(B.hs("ngmy_helper_kb",d,!1,!1,A.cy,null),$async$aWO)
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
$.al.$1("[helper kb] cloud upsert: "+B.t(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aWO,v)},
anb(){var w=0,v=B.j(x.I),u,t,s,r
var $async$anb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.c3J(),$async$anb)
case 3:s=e
w=4
return B.b(C.aWN(),$async$anb)
case 4:r=e
w=r!=null&&x.j.b(J.q(r,"categories"))?5:6
break
case 5:t=C.fPG(x.j.a(J.q(r,"categories")))
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
c3N(d){var w=0,v=B.j(x.y),u
var $async$c3N=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ana(d),$async$c3N)
case 3:u=C.aWO(C.fPH(d))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c3N,v)},
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
c3I:function c3I(){},
c3H:function c3H(){},
hU:function hU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c3G:function c3G(){},
c3F:function c3F(){},
c3K:function c3K(){},
c3L:function c3L(){},
c3M:function c3M(){},
b4Z:function b4Z(d){this.a=d},
Td:function Td(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAn:function aAn(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
dQ0:function dQ0(){},
dQ1:function dQ1(){},
dPV:function dPV(d){this.a=d},
dPW:function dPW(d){this.a=d},
dPE:function dPE(d,e){this.a=d
this.b=e},
dPF:function dPF(d){this.a=d},
dPG:function dPG(d,e,f){this.a=d
this.b=e
this.c=f},
dPD:function dPD(d){this.a=d},
dPS:function dPS(d,e){this.a=d
this.b=e},
dPT:function dPT(d,e){this.a=d
this.b=e},
dPU:function dPU(d){this.a=d},
dPM:function dPM(d){this.a=d},
dPN:function dPN(d,e,f){this.a=d
this.b=e
this.c=f},
dPL:function dPL(d,e){this.a=d
this.b=e},
dPR:function dPR(d,e,f){this.a=d
this.b=e
this.c=f},
dPQ:function dPQ(d,e){this.a=d
this.b=e},
dPP:function dPP(d,e){this.a=d
this.b=e},
dPO:function dPO(d,e,f){this.a=d
this.b=e
this.c=f},
dPI:function dPI(d){this.a=d},
dPH:function dPH(d){this.a=d},
dPJ:function dPJ(d,e){this.a=d
this.b=e},
dPK:function dPK(d){this.a=d},
dQ_:function dQ_(d,e){this.a=d
this.b=e},
dPZ:function dPZ(d,e){this.a=d
this.b=e},
dPY:function dPY(){},
dPX:function dPX(d,e){this.a=d
this.b=e},
Nx:function Nx(d,e){this.c=d
this.a=e},
b6N:function b6N(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cEs:function cEs(d){this.a=d},
cEr:function cEr(d,e){this.a=d
this.b=e},
cEp:function cEp(d,e){this.a=d
this.b=e},
cEt:function cEt(d){this.a=d},
cEq:function cEq(d,e){this.a=d
this.b=e},
cEo:function cEo(d,e){this.a=d
this.b=e},
cEu:function cEu(d){this.a=d},
cEv:function cEv(d,e){this.a=d
this.b=e},
YF:function YF(d,e,f){this.c=d
this.d=e
this.a=f},
aCf:function aCf(){this.d=$
this.c=this.a=null},
ezK:function ezK(d,e){this.a=d
this.b=e},
ezL:function ezL(d){this.a=d},
ezR:function ezR(){},
ezQ:function ezQ(d,e){this.a=d
this.b=e},
ezP:function ezP(d,e){this.a=d
this.b=e},
ezM:function ezM(d,e){this.a=d
this.b=e},
ezO:function ezO(d,e,f){this.a=d
this.b=e
this.c=f},
ezN:function ezN(d,e,f){this.a=d
this.b=e
this.c=f},
YE:function YE(d,e){this.c=d
this.a=e},
aCe:function aCe(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
ezG:function ezG(d,e){this.a=d
this.b=e},
ezE:function ezE(d){this.a=d},
ezF:function ezF(d,e){this.a=d
this.b=e},
ezI:function ezI(d,e){this.a=d
this.b=e},
ezJ:function ezJ(d){this.a=d},
ezH:function ezH(d,e){this.a=d
this.b=e},
hiz(d){var w=new B.I(d,new C.c3C(),B.T(d).k("I<1,n>")).aF(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
c3D(d,e,f){return C.hiA(d,e,f)},
hiA(b4,b5,b6){var w=0,v=B.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$c3D=B.e(function(b8,b9){if(b8===1)return B.f(b9,v)
for(;;)switch(w){case 0:b3=A.a.i(b5)
if(b3.length===0){u=new B.Ir([B.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return B.b(B.qh(B.mE(b3),C.hiz(b6)+"\n\nAdmin instruction:\n"+b4,A.h4,null),$async$c3D)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=A.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new B.Ir([B.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=A.a.i(a3)
if(J.cS(s,"```"))s=A.a.e0(J.fJN(s,B.ad("^```(?:json)?\\s*",!0,!1,!1,!1),""),B.ad("\\s*```$",!0,!1,!1,!1),"")
r=A.Q.aC(0,s,null)
a3=x.f
if(!a3.b(r)){a3=B.a([],x.Y)
u=new B.Ir([a3,"AI response was not valid JSON.",null,null])
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
u=new B.Ir([a3,"AI did not return any categories.",p,o])
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
J.ch(a0,C.fPF(B.Z(a3.a(a1),a4,a5)))}if(J.aa(a0)===0){a9=J.q(e,"answer")
J.ch(a0,new C.li("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=B.t(f)
b1=J.q(e,"question")
J.ch(g,new C.i7("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.y(J.q(e,"printable"),!0),f))}a9=J.q(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.q(j,"iconKey")
b0=C.hiy(J.k(b0==null?"help":b0))
b1=typeof J.q(j,"colorValue")=="number"?A.k.M(B.fc(J.q(j,"colorValue"))):4284773515
J.ch(m,new C.hU(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.aa(a3)!==0)===!0?o:null
u=new B.Ir([m,null,p,a3])
w=1
break}catch(b7){a2=B.a5(b7)
a3=B.t(a2)
a4=B.a([],x.Y)
u=new B.Ir([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$c3D,v)},
hiy(d){switch(d){case"investments":return G.Ae
case"games":return A.o8
case"loans":return A.jE
case"withdrawals":return A.hi
case"deposits":return A.k_
case"civic":return A.kA
case"store":return A.kz
case"jobs":return A.qm
case"refunds":return A.m_
case"account":return A.eF
case"music":return A.lr
default:return A.wT}},
hI0(d,e,f){var w,v,u,t=B.bi(d,!0,x.i)
if(f!=null&&J.aa(e)===1){w=A.d.bf(t,new C.fhF(f))
if(w>=0){t[w]=J.fo(e).cyR(f,t[w].f)
return t}}A.d.v(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].b6b(u)
return t},
c3C:function c3C(){},
fhF:function fhF(d){this.a=d},
cVU:function cVU(d){this.a=d},
Te:function Te(d,e,f){this.c=d
this.d=e
this.a=f},
aAp:function aAp(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
dQB:function dQB(){},
dQh:function dQh(d,e){this.a=d
this.b=e},
dQm:function dQm(d,e){this.a=d
this.b=e},
dQk:function dQk(d,e){this.a=d
this.b=e},
dQi:function dQi(d){this.a=d},
dQj:function dQj(d){this.a=d},
dQl:function dQl(d,e,f){this.a=d
this.b=e
this.c=f},
dQd:function dQd(){},
dQe:function dQe(){},
dQf:function dQf(){},
dQg:function dQg(){},
dQr:function dQr(d,e){this.a=d
this.b=e},
dQs:function dQs(d){this.a=d},
dQt:function dQt(d){this.a=d},
dQu:function dQu(d){this.a=d},
dQv:function dQv(d){this.a=d},
dQw:function dQw(d){this.a=d},
dQx:function dQx(){},
dQy:function dQy(d){this.a=d},
dQq:function dQq(d){this.a=d},
dQz:function dQz(d){this.a=d},
dQp:function dQp(d){this.a=d},
dQA:function dQA(d,e){this.a=d
this.b=e},
dQo:function dQo(d,e){this.a=d
this.b=e},
dQn:function dQn(d,e){this.a=d
this.b=e},
hqg(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=B.a([],x.eO)
for(w=B.ad("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kr(0,d),w=new B.HX(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
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
d7T:function d7T(d){this.a=d},
axZ:function axZ(d,e){this.a=d
this.b=e},
an9:function an9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAo:function aAo(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
dQa:function dQa(d,e){this.a=d
this.b=e},
dQb:function dQb(d,e){this.a=d
this.b=e},
dQ2:function dQ2(d){this.a=d},
dQ3:function dQ3(d){this.a=d},
dQc:function dQc(){},
dQ5:function dQ5(d,e){this.a=d
this.b=e},
dQ4:function dQ4(d,e){this.a=d
this.b=e},
dQ7:function dQ7(){},
dQ9:function dQ9(){},
dQ8:function dQ8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQ6:function dQ6(d,e){this.a=d
this.b=e},
axX:function axX(d,e,f,g,h,i){var _=this
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
aWM:function aWM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c3E:function c3E(d){this.a=d},
a9e:function a9e(d,e,f){this.c=d
this.d=e
this.a=f},
cy8:function cy8(d){this.a=d},
cy9:function cy9(){},
cya:function cya(d){this.a=d},
axY:function axY(d,e,f){this.c=d
this.d=e
this.a=f},
bcM:function bcM(){this.c=this.a=this.d=null},
d7U:function d7U(d,e){this.a=d
this.b=e},
d7W:function d7W(d,e){this.a=d
this.b=e},
d7V:function d7V(d){this.a=d},
hk3(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
hk4(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
hk2(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
fXF(d){var w
if(new B.a4(B.a(d.split("\n"),x.s),new C.f0E(),x.cc).gG(0)<3)w=d.length>100&&A.a.q(d,"\n")
else w=!0
return w},
hJ8(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.hk2(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
anV:function anV(d,e){this.a=d
this.b=e},
GZ:function GZ(d,e){this.a=d
this.b=e},
qP:function qP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f0E:function f0E(){},
anc:function anc(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAq:function aAq(d,e,f,g,h,i,j){var _=this
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
dQP:function dQP(d,e){this.a=d
this.b=e},
dQG:function dQG(d){this.a=d},
dQI:function dQI(){},
dQJ:function dQJ(d,e){this.a=d
this.b=e},
dQK:function dQK(d){this.a=d},
dQL:function dQL(){},
dQM:function dQM(d,e){this.a=d
this.b=e},
dQN:function dQN(d){this.a=d},
dQO:function dQO(d){this.a=d},
dQH:function dQH(d,e){this.a=d
this.b=e},
dQW:function dQW(d,e){this.a=d
this.b=e},
dQT:function dQT(){},
dQU:function dQU(d,e){this.a=d
this.b=e},
dQV:function dQV(d,e){this.a=d
this.b=e},
dQS:function dQS(d,e){this.a=d
this.b=e},
dQR:function dQR(d,e){this.a=d
this.b=e},
dQY:function dQY(d){this.a=d},
dQX:function dQX(d){this.a=d},
dQF:function dQF(d,e){this.a=d
this.b=e},
dQE:function dQE(d,e){this.a=d
this.b=e},
dQZ:function dQZ(d,e){this.a=d
this.b=e},
dQQ:function dQQ(d,e){this.a=d
this.b=e},
dQC:function dQC(d){this.a=d},
dQD:function dQD(d){this.a=d},
aIl:function aIl(){},
c3P(d){var w=0,v=B.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$c3P=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=D.OT
w=1
break}w=3
return B.b(B.aw(),$async$c3P)
case 3:r=f
q=A.a.i(d.toLowerCase())
t=B.aR(J.q(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.OT
w=1
break}try{q=B.Z(x.f.a(A.Q.aC(0,t,null)),x.N,x.z)
p=J.y(q.h(0,"contacts"),!0)
o=J.y(q.h(0,"calendar"),!0)
n=J.y(q.h(0,"calls"),!0)
q=J.y(q.h(0,"allGrantedOnce"),!0)
u=new C.Tf(p,o,n,q)
w=1
break}catch(l){s=B.a5(l)
$.al.$1("[helper-perms] load: "+B.t(s))
u=D.OT
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$c3P,v)},
and(d,e){var w=0,v=B.j(x.H),u
var $async$and=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){w=1
break}w=4
return B.b(B.aw(),$async$and)
case 4:w=3
return B.b(g.an("String","ngmy_helper_permissions_v1_"+A.a.i(d.toLowerCase()),A.Q.aj(e.ad(),null)),$async$and)
case 3:case 1:return B.h(u,v)}})
return B.i($async$and,v)},
c3O(d){var w=0,v=B.j(x.gp),u,t
var $async$c3O=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=new C.Tf(!0,!0,!0,!0)
w=3
return B.b(C.and(d,t),$async$c3O)
case 3:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c3O,v)},
h2m(d){var w=A.a.i(d.toLowerCase()),v=B.ad("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=B.ad("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=B.ad("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=B.ad("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
h2k(d){var w=B.ad("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
Tf:function Tf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bz8(d,e,f,g,h){var w=0,v=B.j(x.H),u,t,s
var $async$bz8=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return B.b(C.aWI(h),$async$bz8)
case 3:if(j){w=1
break}w=4
return B.b(C.an5(h),$async$bz8)
case 4:if(d.e==null){w=1
break}t=B.pY(d,!0)
t.toString
s=B.da()
s.b=B.nT(new C.ftr(g,e,f,s),!1,!1)
t.lk(0,s.b7())
case 1:return B.h(u,v)}})
return B.i($async$bz8,v)},
ftr:function ftr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ftq:function ftq(d){this.a=d},
Xp:function Xp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
axq:function axq(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cO$=d
_.aX$=e
_.c=_.a=null},
d5t:function d5t(d){this.a=d},
d5u:function d5u(d,e,f){this.a=d
this.b=e
this.c=f},
d5z:function d5z(){},
d5y:function d5y(d){this.a=d},
d5v:function d5v(d){this.a=d},
d5w:function d5w(){},
d5x:function d5x(d){this.a=d},
aHf:function aHf(){},
hjx(d){var w=A.a.i(d),v=B.ad("[^A-Z0-9]",!0,!1,!1,!1),u=B.aI(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
hjw(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.ad("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.ad("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
anI(d){return C.hju(d)},
hju(d){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
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
$.al.$1("[local deposit qr] load: "+B.t(r))
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
aXC(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aXC=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.hjx(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.eU("ngmy_local_deposit_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bD),$async$aXC)
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
$.al.$1("[local deposit qr] code lookup: "+B.t(q))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aXC,v)},
fQ3(d){var w,v=A.a.i(d)
if(A.a.a_(v,"NGMYLOCALDEP1|")){w=A.a.i(A.a.aU(v,14))
return w.length===0?null:w}return null},
hjv(d,e,f){var w=A.a.i(f)
if(w.length===0)return!1
return A.d.be(e,new C.c5C(A.a.i(d.toLowerCase()),w))},
fQ4(d,e,f,g,h){var w,v,u=J.a6(g),t=u.h(g,"lockedToEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=A.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.pl(!1,0,y.u)
if(s!==A.a.i(f.toLowerCase()))return new C.pl(!1,0,y.j)
v=A.a.i(h)
if(v.length===0)return new C.pl(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.pl(!1,0,"Verification code does not match this deposit.")
if(!C.hjv(e,d,w))return new C.pl(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
fAa(d,e){var w,v,u="amount",t=J.a6(d),s=t.h(d,"redeemedBy")
if(A.a.i(J.k(s==null?"":s)).length!==0)return D.dhX
s=t.h(d,"lockedToEmail")
w=A.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=A.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){B.aQ(t.h(d,u))
return new C.LS(!0,!1,!1,!0)}if(w!==A.a.i(e.toLowerCase())){B.aQ(t.h(d,u))
return new C.LS(!0,!1,!0,!1)}B.aQ(t.h(d,u))
return new C.LS(!0,!1,!1,!1)},
c5I(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$c5I=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=C.fQ3(d)
if(s==null){u=D.OV
w=1
break}w=3
return B.b(C.anI(s),$async$c5I)
case 3:t=g
if(t==null){u=D.OV
w=1
break}u=C.fAa(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c5I,v)},
aXE(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$aXE=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aXC(d),$async$aXE)
case 3:s=g
if(s==null||s.length===0){u=D.OV
w=1
break}w=4
return B.b(C.anI(s),$async$aXE)
case 4:t=g
if(t==null){u=D.OV
w=1
break}u=C.fAa(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aXE,v)},
c5J(d,e,f,g,h){var w=0,v=B.j(x.D),u,t
var $async$c5J=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aXC(d),$async$c5J)
case 3:t=j
if(t==null||t.length===0){u=new C.pl(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.TA(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c5J,v)},
TA(d,e,f,g,h){return C.hjy(d,e,f,g,h)},
hjy(a2,a3,a4,a5,a6){var w=0,v=B.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$TA=B.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.fQ3(a4)
if(a0==null){u=new C.pl(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return B.b(C.anI(a0),$async$TA)
case 3:k=a8
if(k==null){u=new C.pl(!1,0,y.m)
w=1
break}j=C.fAa(k,a5)
if(j.b){u=new C.pl(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.pl(!1,0,y.u)
w=1
break}if(j.c){u=new C.pl(!1,0,y.j)
w=1
break}i=C.fQ4(a2,a3,a5,k,a6)
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
break}o=C.fQ4(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=A.a.i(a0)
f=x.N
e=x.z
n=B.dQ(p,f,e)
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
$.al.$1("[local deposit qr] redeem: "+B.t(l))
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
c5C:function c5C(d,e){this.a=d
this.b=e},
c5Q(d,e){var w
B.fG3(d,e,!1)
B.qg(d.a,d.d,!0,!1)
w=A.a.i("")
if(w.length!==0)B.zB(!0,!1,d.d,w)},
a5o(d,e){if(d==null)return!1
return B.bw(d)===e.gcb()&&B.bB(d)===e.gca()&&B.bL(d)===e.gcp()},
hjF(d){var w=B.dn(d)*60+B.hn(d)
if(w<10)return 0
if(w>=30)return 20
return 15},
fQa(d){if(B.dn(d)>=12)return!1
if(B.mu(d)===6||B.mu(d)===7)return!1
return!0},
c5T(d){var w=d.c?d.bO():d
return w.cU(B.bX(B.bw(w),B.bB(w),B.bL(w),12,0,0,0,0))},
fAe(d,e){var w,v,u,t=d.gBc()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a5o(d.fx,e)&&d.fy>0.0001)return A.k.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bO()
if(!C.c5T(w))return 0
v=B.bX(e.gcb(),e.gca(),e.gcp(),12,0,0,0,0)
if(!e.cU(v))return t
if(!e.c9(w))return 0
u=A.o.ak(v.bv(w).a,1000)
if(u<=0)return t
return A.k.D(t*(A.o.D(A.o.ak(e.bv(w).a,1000),0,u)/u),0,t)},
fAd(d,e){var w,v,u,t,s,r,q,p=new B.N(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a5o(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bO():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!A.d.be(e,new C.c5P(s))&&C.c5T(t)){r=d.gBc()
v=r>0
if(v){q=new B.cW(s,d.a,r,A.fA,A.f8,"Clock-in daily earnings (local)",null,null,A.cg,p)
C.c5Q(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a5o(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a5o(o,p)&&!C.c5T(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
c5P:function c5P(d){this.a=d},
hxT(d){var w,v,u=d.k4,t=u==null?null:A.a.i(u)
if(t!=null&&t.length!==0)return t
w=A.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=A.a.i(d.a)
if(A.a.q(v,"@"))return A.d.gI(v.split("@"))
return"Member"},
hO8(d,e,f,g,h,i){return B.hl(d,new C.anJ(f,e,i,g,h,null),!0,null,x.H)},
fUm(d){var w,v,u=d.c?d.bO():d,t=B.dn(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+B.bB(u)+"/"+B.bL(u)+"/"+B.bw(u)+" \xb7 "+w+":"+A.a.aT(A.o.u(B.hn(u)),2,"0")+" "+v},
h0g(d){var w=d.x
if(w===A.dn)return"Processing"
if(w===A.ke)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
hFH(d){var w=d.f,v=A.a.i(w==null?"":w),u=v.toLowerCase()
if(A.a.q(u,"clock-in daily earnings")||A.a.q(u,"clock-in earnings"))return"Clock-in completed"
if(A.a.q(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===A.fc)return"Deposit"
if(w===A.eB)return"Withdrawal"
return v.length!==0?v:w.b},
hxy(d){var w=d.d,v=w===A.fc||w===A.nH||w===A.fA||w===A.jO,u=d.x
if(u===A.dn)return w===A.eB?-d.c:0
if(u!==A.cg)return 0
w=d.c
return v?w:-w},
hGf(d,e){var w,v,u,t,s,r,q=B.z(d,x.o)
A.d.aY(q,new C.fdG())
w=B.R(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,B.J)(q),++t,v=r){s=q[t]
r=v-C.hxy(s)
if(r<0)r=0
w.m(0,s.a,new B.bk0(v,r))}return w},
anJ:function anJ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAM:function aAM(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
e_p:function e_p(d){this.a=d},
e05:function e05(d){this.a=d},
e06:function e06(d){this.a=d},
e07:function e07(d){this.a=d},
e_O:function e_O(d,e){this.a=d
this.b=e},
e_P:function e_P(){},
e_Q:function e_Q(d){this.a=d},
e_R:function e_R(){},
e_S:function e_S(d){this.a=d},
e_T:function e_T(d,e,f){this.a=d
this.b=e
this.c=f},
e_U:function e_U(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e_J:function e_J(d,e){this.a=d
this.b=e},
e_q:function e_q(d,e,f){this.a=d
this.b=e
this.c=f},
e_K:function e_K(){},
e_L:function e_L(){},
e_M:function e_M(d){this.a=d},
e_N:function e_N(){},
e_u:function e_u(d,e){this.a=d
this.b=e},
e_v:function e_v(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e_D:function e_D(){},
e_A:function e_A(d){this.a=d},
e_B:function e_B(d,e){this.a=d
this.b=e},
e_C:function e_C(d,e){this.a=d
this.b=e},
e_E:function e_E(d){this.a=d},
e_F:function e_F(d,e,f){this.a=d
this.b=e
this.c=f},
e_G:function e_G(d){this.a=d},
e_I:function e_I(d){this.a=d},
e_H:function e_H(d){this.a=d},
e_w:function e_w(d){this.a=d},
e_x:function e_x(d,e,f){this.a=d
this.b=e
this.c=f},
e_Y:function e_Y(){},
e_Z:function e_Z(){},
e02:function e02(d){this.a=d},
e_W:function e_W(d){this.a=d},
e03:function e03(d){this.a=d},
e_V:function e_V(d){this.a=d},
e04:function e04(d){this.a=d},
e0_:function e0_(d){this.a=d},
e00:function e00(d){this.a=d},
e01:function e01(d){this.a=d},
e_X:function e_X(d){this.a=d},
e_t:function e_t(d){this.a=d},
e_s:function e_s(d){this.a=d},
e_r:function e_r(d){this.a=d},
e_z:function e_z(d,e){this.a=d
this.b=e},
e_y:function e_y(d,e){this.a=d
this.b=e},
ay9:function ay9(d,e,f,g,h,i,j,k,l,m){var _=this
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
d9H:function d9H(){},
d9I:function d9I(){},
d9J:function d9J(d,e,f){this.a=d
this.b=e
this.c=f},
d9G:function d9G(d){this.a=d},
d9K:function d9K(d,e){this.a=d
this.b=e},
d9F:function d9F(d){this.a=d},
ay8:function ay8(d,e,f,g,h,i,j,k,l,m){var _=this
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
bdv:function bdv(d,e){var _=this
_.f=_.e=_.d=$
_.cO$=d
_.aX$=e
_.c=_.a=null},
d9A:function d9A(d){this.a=d},
d9B:function d9B(d){this.a=d},
d9C:function d9C(d){this.a=d},
d9D:function d9D(){},
d9E:function d9E(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
d9z:function d9z(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d9y:function d9y(d){this.a=d},
b7h:function b7h(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
b7g:function b7g(d,e,f){this.b=d
this.d=e
this.a=f},
b7f:function b7f(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aya:function aya(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
ayb:function ayb(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
da0:function da0(){},
da1:function da1(){},
da2:function da2(){},
d9N:function d9N(d){this.a=d},
d9M:function d9M(d,e){this.a=d
this.b=e},
d9L:function d9L(d,e){this.a=d
this.b=e},
d9Y:function d9Y(d,e){this.a=d
this.b=e},
da_:function da_(d,e){this.a=d
this.b=e},
d9Z:function d9Z(d,e){this.a=d
this.b=e},
d9X:function d9X(){},
d9W:function d9W(d){this.a=d},
d9V:function d9V(){},
d9Q:function d9Q(d){this.a=d},
d9R:function d9R(){},
d9S:function d9S(d){this.a=d},
d9T:function d9T(d){this.a=d},
d9P:function d9P(){},
d9U:function d9U(d){this.a=d},
d9O:function d9O(d){this.a=d},
b6I:function b6I(d){this.a=d},
fdG:function fdG(){},
bqV:function bqV(d,e){this.b=d
this.a=e},
aHv:function aHv(){},
bsO:function bsO(){},
hCm(d,e,f,g,h,i,j,k){var w,v=A.a.i(j.toLowerCase())
A.d.bl(d,new C.f8l(v,g))
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
aLp(d){var w,v=J.a6(d),u=B.aQ(v.h(d,"matchesTotal")),t=u==null?null:A.k.M(u)
if(t==null)t=1
v=B.aQ(v.h(d,"matchesPlayed"))
w=v==null?null:A.k.M(v)
return A.o.D(t-(w==null?0:w),0,t)},
hMX(d,e){var w=B.T(e).k("a4<1>")
w=B.z(new B.a4(e,new C.fnX(A.a.i(d.toLowerCase())),w),w.k("F.E"))
return w},
aeE(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(C.aLp(u)<=0){t=J.cB(u)
t.m(u,"status","finished")
t.m(u,"seriesStatus","complete")}}},
hEW(d,e){var w,v,u,t=J.a6(d),s=t.h(d,"status")
if(!J.y(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.y(s==null?"":s,"complete"))return!1
if(C.aLp(d)<=0)return!1
w=A.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=A.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=A.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aLp(d)>0},
hEV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a6(d),h=B.aQ(i.h(d,"matchesTotal")),g=h==null?null:A.k.M(h)
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
hCl(d,e){var w
C.aeE(e)
w=B.T(e).k("a4<1>")
w=B.z(new B.a4(e,new C.f8k(A.a.i(d.toLowerCase())),w),w.k("F.E"))
return w},
tj(d,e){var w,v,u
for(w=J.aW(d);w.C();){v=w.gT(w)
u=J.q(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
hz8(d,e,f){var w,v,u,t="fromName",s=J.a6(f),r=s.h(f,"fromEmail"),q=A.a.i(J.k(r==null?"":r).toLowerCase())
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
fFN(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase()),r=J.a6(d),q=r.h(d,"fromEmail"),p=A.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=A.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.hz8(x.f.b(u)?B.Z(u,r,q):B.R(r,q),v,d)
if((t.length===0||A.a.q(t,"@"))&&f!=null){t=J.q(f,v)
if(t==null)t=""}if(t.length===0||A.a.q(t,"@"))return"Opponent"
return t},
bxY(){var w=0,v=B.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bxY=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aw(),$async$bxY)
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
return B.i($async$bxY,v)},
bx4(d,e){var w=0,v=B.j(x.N),u,t,s,r
var $async$bx4=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return B.b(C.bxY(),$async$bx4)
case 3:u=t.fFN(s,r,g)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bx4,v)},
J8(d,e,f){var w=0,v=B.j(x.h),u,t,s,r,q,p
var $async$J8=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=$.fYT.h(0,q)
if(p!=null){t=new B.N(Date.now(),0,!1).bv(p)
t=t.a>B.dB(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.fYT.m(0,q,new B.N(Date.now(),0,!1))
w=5
return B.b(B.OR(A.c2,q),$async$J8)
case 5:case 4:s=$.fYS.h(0,q)
if(s==null){u=C.tj(e,q)
w=1
break}r=C.tj(B.bxa(e,B.a([s],x._)),q)
if(r!=null)B.fI3(e,r)
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$J8,v)},
hN7(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=J.a6(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"status",f)
t.m(u,"respondedAt",new B.N(Date.now(),0,!1).aa())
return}}},
hvY(d,e){var w,v,u,t,s,r,q=J.a6(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
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
for(q=x.S,r=0;r<8;++r)t[r]=B.ih(8,new C.eZl(r),!0,q)
return B.D(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return B.D(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
hCk(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=J.a6(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"status","active")
t.m(u,"respondedAt",new B.N(Date.now(),0,!1).aa())
r=C.hvY(u,f)
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
hN5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
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
fI2(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=J.a6(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"sessionState",B.Z(f,x.N,x.z))
t.m(u,"sessionUpdatedAt",new B.N(Date.now(),0,!1).aa())
return}}},
fmP(d){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$fmP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aeE(d)
t=$.fFc
if(t==null)s=$.fFc=B.OR(A.c2,null).f4(new C.fmQ())
else s=t
w=3
return B.b(s,$async$fmP)
case 3:r=f
if(r==null){u=B.bi(new B.I(d,new C.fmR(),B.T(d).k("I<1,@>")),!0,x.P)
w=1
break}q=B.bxa(d,r)
A.d.a8(d)
A.d.v(d,q)
u=q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fmP,v)},
aeF(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aeF=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aeE(d)
t=B.T(d).k("I<1,a0<n,@>>")
t=B.z(new B.I(d,new C.fkL(),t),t.k("ai.E"))
w=3
return B.b(B.OR(t,null),$async$aeF)
case 3:s=f
if(s==null){u=!1
w=1
break}r=B.bxa(d,s)
A.d.a8(d)
A.d.v(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aeF,v)},
aMi(d,e,f){var w=0,v=B.j(x.y),u,t,s,r
var $async$aMi=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:C.fI2(d,e,f)
t=C.tj(d,e)
if(t==null){u=!1
w=1
break}w=3
return B.b(B.OR(B.a([B.Z(t,x.N,x.z)],x._),e),$async$aMi)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.tj(s,e)
if(r!=null)B.fI3(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMi,v)},
hJR(d,e,f){var w
C.fI2(d,e,f)
w=$.fF0.h(0,e)
if(w!=null)w.a9(0)
$.fF0.m(0,e,B.cV(A.ll,new C.fkM(e,d)))},
fzX(d,e){return new C.aWp(!0,d,"NGMY",A.a.i(e.toLowerCase()),null,!0)},
f8l:function f8l(d,e){this.a=d
this.b=e},
fnX:function fnX(d){this.a=d},
f8k:function f8k(d){this.a=d},
eZl:function eZl(d){this.a=d},
fmQ:function fmQ(){},
fmR:function fmR(){},
fkL:function fkL(){},
fkM:function fkM(d,e){this.a=d
this.b=e},
aWp:function aWp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
hNy(d,e,f){return B.c0(A.K,null,new C.foV(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
foV:function foV(d,e){this.a=d
this.b=e},
Yc:function Yc(d,e,f){this.c=d
this.d=e
this.a=f},
aAz:function aAz(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
dUU:function dUU(d){this.a=d},
dUX:function dUX(d){this.a=d},
dUY:function dUY(d){this.a=d},
dUW:function dUW(d){this.a=d},
dUZ:function dUZ(d){this.a=d},
dV_:function dV_(d,e){this.a=d
this.b=e},
dUV:function dUV(d,e){this.a=d
this.b=e},
hIo(d){var w,v,u,t=A.a.i(d)
if(t.length===0)return A.hX
w=t.toLowerCase()
v=B.ad("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return A.hX
v=Date.now()
u=C.hyt(w,new B.N(v,0,!1))
v=x.N
return B.a([new B.k9("calendar",B.D(["title",C.hys(t,w),"start",u.aa(),"end",u.bL(36e8).aa(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
hys(d,e){var w,v,u,t,s,r=B.ad("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cz(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return A.a.i(w==null?"":w)}u=B.ad("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cz(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.fZE(A.a.i(t))}s=B.ad("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cz(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.fZE(A.a.i(t))}if(A.a.q(e,"meeting"))return"Meeting"
if(A.a.q(e,"appointment"))return"Appointment"
return"NGMY Event"},
fZE(d){var w
if(d.length===0)return d
w=A.a.fl(d,B.ad("\\s+",!0,!1,!1,!1))
return new B.I(w,new C.f7x(),B.T(w).k("I<1,n>")).aF(0," ")},
hyt(d,e){var w,v,u,t,s,r,q,p,o=B.bX(B.bw(e),B.bB(e),B.bL(e),0,0,0,0,0)
if(A.a.q(d,"tomorrow"))o=o.bL(864e8)
else if(!A.a.q(d,"today"))for(w=D.ayh.gdH(D.ayh),w=w.gaf(w);w.C();){v=w.gT(w)
u=v.a
if(B.dm(d,u,0)){t=C.hxx(o,v.b)
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
q=0}return B.bX(B.bw(o),B.bB(o),B.bL(o),r,q,0,0,0)},
hxx(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(B.mu(w)===e){u=!0
if(v<=0){t=d.bL(36e8)
s=w.a
if(s>=t.gbm())u=s===t.gbm()&&w.b<t.gcB()}}else u=!1
if(u)return w
w=w.bL(r)}return d.bL(r)},
f7x:function f7x(){},
hIp(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=A.a.i(d)
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
q=C.huT(w,j)
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
huT(d,e){var w,v,u,t,s,r,q=[B.ad("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),B.ad("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),B.ad("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
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
if(u)return C.hBI(t)}r=B.ad("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cz(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return A.a.i(u==null?"":u)}return null},
hBI(d){var w=A.a.fl(d,B.ad("\\s+",!0,!1,!1,!1))
return new B.I(w,new C.f7w(),B.T(w).k("I<1,n>")).aF(0," ")},
f7w:function f7w(){},
h2t(d){var w=new B.I(d,new C.fn6(),B.T(d).k("I<1,a0<n,@>>")).bZ(0,new C.fn7())
w=B.z(w,w.$ti.k("F.E"))
return w},
fn6:function fn6(){},
fn7:function fn7(){},
hIs(d,e){var w,v,u,t,s,r,q,p,o
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
hHE(d,e){var w
if(e)return d
w=J.dF(d,new C.fh4())
w=B.z(w,w.$ti.k("F.E"))
return w},
fh4:function fh4(){},
hJO(d){switch(d){case"blackjack_vegas":return D.dlX
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
fkC(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=B.m(8)
v=B.G(A.aM,A.r,1.5)
u=B.a([new B.a9(0,A.G,A.x.j(0.35),A.e6,6)],x.V)
return B.p(p,B.as(B.V(A.lW,A.c.j(0.5),p,p,p,23.400000000000002),p,p,p),A.h,p,p,new B.o(p,p,v,w,u,D.bGb,A.n),p,74,p,p,p,p,p,52)}t=A.o.D(d,1,13)
s=t===1||t>=10||A.o.J(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][A.o.J(t,4)]
q=s?A.bS:A.M
w=B.m(8)
v=B.G(A.aJ,A.r,1)
u=B.a([new B.a9(0,A.G,A.x.j(0.28),A.e6,6)],x.V)
return B.p(p,B.u(B.a([new B.B(D.bjo,B.d(D.ccQ[t-1]+"\n"+r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,A.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),A.b6,B.as(B.d(r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),A.b6],x.p),A.F,p,A.e,A.j,0,A.p),A.h,p,p,new B.o(A.hD,p,v,w,u,p,A.n),p,74,p,p,p,p,p,52)},
hKS(d,e){var w,v=null,u=B.m(18),t=B.G(A.aM,A.r,3),s=B.a([new B.a9(0,A.G,A.aA.j(0.5),A.J,20)],x.V),r=B.T(e).k("I<1,ha>")
r=B.z(new B.I(e,new C.fmy(),r),r.k("ai.E"))
w=x.p
return B.u(B.a([B.p(v,B.u(B.a([D.eES,A.aa,B.A(r,A.m,v,A.b5,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(v,v,t,u,s,D.bGv,A.n),v,v,v,v,I.acV,v,v,v),A.ay,B.dj(A.aiA,D.eFq,d,B.bk(A.aM,v,v,v,A.dq,v,Af.VA,v,v,v,v,v))],w),A.m,v,A.e,A.j,0,A.p)},
oz:function oz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bm_:function bm_(d,e){this.b=d
this.a=e},
fmy:function fmy(){},
hkf(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e_(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=B.bT(8,0,!1,w)
u=B.bT(9,"",!1,p)
t=x.t
s=B.a([],t)
r=B.a([],t)
t=B.a([0,0,0],t)
q=J.e_(6,o)
for(v=0;v<6;++v)q[v]=B.bT(7,0,!1,w)
return new C.ao2(B.R(p,x.z),n,u,s,r,t,q,new B.ao(A.aq,$.at()))},
hD0(d,e,f,g,h){var w=new C.f8Q(f,h)
switch(d){case"checkers_deluxe":return C.htF(h,g,e,w)
case"tic_tac_go":return C.hBR(h,g,e,w)
case"blackjack_vegas":return C.ht2(h,g,e,new C.f8K(w))
case"roulette_euro":return C.hAk(h,g,e,new C.f8L(w))
case"slots_jackpot":return C.hB7(h,g,e,new C.f8M(w))
case"billiards_snooker":return C.hza(h,g,e,new C.f8N(w))
case"connect_four_pro":return C.hu1(h,g,e,w)
case"profit_solve":return C.hzd(h,g,e,new C.f8O(w))
default:return C.htC(d,h,g,e,new C.f8P(w))}},
htF(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.v9,A.L,w,w),u=B.m(12),t=B.G(D.TJ,A.r,8),s=B.a([new B.a9(0,A.G,A.x.j(0.4),A.J,16)],x.V)
return B.u(B.a([new B.B(A.fh,v,w),B.C(B.as(new B.fN(1,B.p(w,B.bu(B.m(6),B.ig(!0,w,w,A.z,D.egh,new C.eWJ(d,e,f,g),64,w,A.dJ,A.ah,!1),A.ap),A.h,w,w,new B.o(w,w,t,u,s,w,A.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),A.m,w,A.e,A.j,0,A.p)},
hBR(d,e,f,g){var w=null
return B.u(B.a([new B.B(A.fh,B.d(d.c,w,w,w,w,w,w,D.v9,A.L,w,w),w),B.C(B.as(new B.fN(1,B.cj(new C.f7G(d,e,f,g)),w),w,w,w),1)],x.p),A.m,w,A.e,A.j,0,A.p)},
ht2(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.v9,A.L,v,v),t=x.p,s=B.a([],t),r=d.CW,q=d.ch
if(r)A.d.v(s,new B.I(q,new C.eWa(),B.T(q).k("I<1,r>")))
else A.d.v(s,B.a([C.fkC(q[0],!1),A.bp,C.fkC(0,!0)],t))
s=B.A(s,A.m,v,A.b5,A.j,0,v,v)
r=B.d("Total: "+d.a0Q(d.ay),v,v,v,v,v,v,D.eAq,v,v,v)
q=d.ay
w=B.T(q).k("I<1,r>")
q=B.z(new B.I(q,new C.eWb(),w),w.k("ai.E"))
q=B.cb(A.fB,q,A.bx,6,6)
return B.u(B.a([new B.B(A.fh,u,v),D.eL8,A.ar,s,A.ay,D.eRU,r,A.ar,q,A.b6,B.A(B.a([B.C(B.bJ(D.eFQ,d.CW?v:new C.eWc(d,e,f,g),v),1),A.ab,B.C(B.bJ(D.eU2,new C.eWd(d,e,f,g),v),1)],t),A.m,v,A.e,A.j,0,v,v)],t),A.m,v,A.e,A.j,0,A.p)},
hAk(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.v9,A.L,w,w),u=d.cx,t=B.a([new B.a9(0,A.G,A.x.j(0.45),A.cv,16)],x.V)
t=B.a([new B.B(A.fh,v,w),B.p(w,B.b2(w,w,w,new C.bm_(u,w),A.as),A.h,w,w,new B.o(w,w,w,w,t,w,A.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new B.B(A.ku,B.d("Result: "+B.t(v),w,w,w,w,w,w,D.eoZ,w,w,w),w))
t.push(A.aa)
t.push(B.cb(A.fB,B.ih(6,new C.f4V(d,e,f,g),!0,x.l),A.bx,6,6))
return B.u(t,A.m,w,A.e,A.j,0,A.p)},
hB7(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.v9,A.L,w,w),u=d.db,t=B.T(u).k("I<1,n>")
u=B.z(new B.I(u,new C.f6P(),t),t.k("ai.E"))
return B.u(B.a([new B.B(A.fh,v,w),C.hKS(new C.f6Q(d,e,f,g),u)],x.p),A.m,w,A.e,A.j,0,A.p)},
hza(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.v9,A.L,w,w),u=B.m(20),t=B.G(A.hS,A.r,12),s=x.V,r=B.a([new B.a9(0,A.G,A.x.j(0.45),A.dm,18)],s),q=x.p
return B.u(B.a([new B.B(A.fh,v,w),B.C(B.p(w,new B.am(A.V,w,A.a9,A.q,B.a([B.an(w,B.p(w,w,A.h,w,w,D.aRj,w,18,w,w,w,w,w,18),w,w,24,w,24,w),B.an(28,B.p(w,w,A.h,w,w,A.a7_,w,14,w,w,w,w,w,14),w,w,w,32,w,w),B.as(B.et(A.B,d.dx,B.p(w,w,A.h,w,w,new B.o(A.aM,w,w,B.m(2),B.a([new B.a9(0,A.G,A.x.j(0.3),A.J,4)],s),w,A.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),A.h,w,w,new B.o(w,w,t,u,r,D.dRD,A.n),w,w,w,A.eW,w,w,w,w),1),B.m8(A.bq,w,w,1,0,new C.f3F(d,f),d.dy),B.bJ(D.eKg,new C.f3G(d,e,g,f),w)],q),A.m,w,A.e,A.j,0,A.p)},
hu1(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.v9,A.L,v,v),t=x.l,s=J.e_(7,t)
for(w=0;w<7;++w)s[w]=new B.bF(1,A.bn,B.aJ(v,B.u(B.ih(6,new C.eX9(d,w),!0,t),A.m,v,A.m4,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eXa(d,w,e,f,g),v,v,v,v,v,v,!1,A.af),v)
return B.u(B.a([new B.B(A.fh,u,v),B.C(B.as(new B.fN(1.1666666666666667,B.A(s,A.dD,v,A.e,A.j,0,v,v),v),v,v,v),1)],x.p),A.m,v,A.e,A.j,0,A.p)},
hzd(d,e,f,g){var w=null
return B.u(B.a([new B.B(A.fh,B.d(d.c,w,w,w,w,w,w,D.v9,A.L,w,w),w),B.d(""+d.a+"/"+d.b,w,w,w,w,w,w,A.kc,w,w,w),B.d(d.fy,w,w,w,w,w,w,D.aK7,A.L,w,w),B.aK(w,A.U,!1,w,!0,A.q,w,B.aL(),d.id,w,w,w,w,w,2,D.bD8,A.z,!0,w,!0,w,!1,w,A.ae,w,w,w,w,w,A.dL,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.f3S(d,e,g,f),w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,A.di,!0,A.a5,w,A.am,w,w,w,w),B.bJ(D.eIY,new C.f3T(d,e,g,f),w)],x.p),A.m,w,A.e,A.j,0,A.p)},
htC(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gjx(),k=e.d
k=k==null?n:k.c
w=C.hJO(d)
v=D.ay6.h(0,d)
if(v==null)v=d
m=B.d(m,n,n,n,n,n,n,A.mV,A.L,n,n)
u=B.m(22)
t=w.a
s=w.b
r=B.G(s.j(0.5),A.r,2)
q=B.a([new B.a9(0,A.G,w.c.j(0.35),A.eH,24)],x.V)
p=B.d(w.e,n,n,n,n,n,n,W.QM,n,n,n)
o=B.d(v,n,n,n,n,n,n,A.oq,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+B.t(k)+" at the table"
k=x.p
q=B.C(B.as(B.p(n,B.u(B.a([p,A.T,o,A.P,B.d(l,n,n,n,n,n,n,B.l(n,n,A.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),A.d1,B.V(w.f,s.j(0.85),n,n,n,48)],k),A.m,n,A.b5,A.j,0,A.p),A.h,n,n,new B.o(n,n,r,u,q,new B.a8(A.b4,A.bb,A.w,t,n,n),A.n),n,n,n,A.eW,A.a8,n,n,1/0),n,n,n),1)
return B.u(B.a([m,A.aa,q,A.P,new B.a3(1/0,n,B.bJ(D.eTe,new C.eWD(f,e,g,h),B.bk(s,n,n,n,A.d.gI(t).iY()>0.4?A.x:A.c,n,A.ca,n,n,n,n,n)),n)],k),A.m,n,A.e,A.j,0,A.p)},
Db:function Db(d,e){this.a=d
this.b=e},
ao2:function ao2(d,e,f,g,h,i,j,k){var _=this
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
c7m:function c7m(){},
c7n:function c7n(){},
c7l:function c7l(){},
c7o:function c7o(){},
c7k:function c7k(){},
c7q:function c7q(){},
c7r:function c7r(){},
c7j:function c7j(d){this.a=d},
c7p:function c7p(){},
c7i:function c7i(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8Q:function f8Q(d,e){this.a=d
this.b=e},
f8K:function f8K(d){this.a=d},
f8L:function f8L(d){this.a=d},
f8M:function f8M(d){this.a=d},
f8N:function f8N(d){this.a=d},
f8O:function f8O(d){this.a=d},
f8P:function f8P(d){this.a=d},
eWJ:function eWJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eWI:function eWI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f7G:function f7G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7F:function f7F(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f7E:function f7E(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eWa:function eWa(){},
eWb:function eWb(){},
eWc:function eWc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eWd:function eWd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f4V:function f4V(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f4U:function f4U(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f6P:function f6P(){},
f6Q:function f6Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3F:function f3F(d,e){this.a=d
this.b=e},
f3G:function f3G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eXa:function eXa(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eX9:function eX9(d,e){this.a=d
this.b=e},
f3S:function f3S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3T:function f3T(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eWD:function eWD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hFJ(d){var w,v=B.T(d).k("a4<1>")
v=B.oJ(new B.a4(d,new C.fcG(),v),120,v.k("F.E"))
w=B.cy(v,new C.fcH(),B.a2(v).k("F.E"),x.N).aF(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fcG:function fcG(){},
fcH:function fcH(){},
aeQ(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
aoW:function aoW(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aBj:function aBj(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
epa:function epa(){},
aJ0:function aJ0(){},
hig(){var w=$.GP
if(w<=0)return;--w
$.GP=w
if(w===0){w=$.fPv
if(w!=null)w.$0()}},
c2U(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
amL(d){var w=0,v=B.j(x.H),u,t
var $async$amL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=A.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.fzS.H(0,t)
w=4
return B.b(B.aw(),$async$amL)
case 4:w=3
return B.b(f.an("Bool","ngmy_game_free_play_used_"+A.a.i(t.toLowerCase()),!0),$async$amL)
case 3:case 1:return B.h(u,v)}})
return B.i($async$amL,v)},
amK(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$amK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(C.c2U(d)){u=!0
w=1
break}t=A.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.fzS.q(0,t)){u=!1
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
aWH(d){return C.hit(d)},
hit(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$aWH=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aw(),$async$aWH)
case 6:s=f
w=7
return B.b(s.an("String","ngmy_helper_ai_usage_v1",A.Q.aj(d,null)),$async$aWH)
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
return B.i($async$aWH,v)},
aWF(d,e){var w,v,u,t,s=J.q(d,A.a.i(e.toLowerCase()))
if(!x.f.b(s))return new B.abw(0,new B.N(Date.now(),0,!1))
w=J.a6(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=B.bg(u==null?"":u)
if(t==null)t=new B.N(Date.now(),0,!1)
return new B.abw(typeof v=="number"?A.o.D(A.k.M(v),0,999999):0,t)},
aWG(d,e){if(A.o.ak(e.bv(d.b).a,36e8)>=24)return new B.abw(0,e)
return d},
c3p(d,e){var w=0,v=B.j(x.S),u,t,s
var $async$c3p=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return B.b(C.Tc(),$async$c3p)
case 3:t=g
s=Date.now()
u=A.o.D(e-C.aWG(C.aWF(t,d),new B.N(s,0,!1)).a,0,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c3p,v)},
c3q(d,e){var w=0,v=B.j(x.cJ),u,t,s,r
var $async$c3q=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return B.b(C.Tc(),$async$c3q)
case 3:t=g
s=Date.now()
r=C.aWG(C.aWF(t,d),new B.N(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bL(864e8)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c3q,v)},
hiu(d){var w,v,u,t=d.a,s=A.o.ak(t,1e6)
if(s<=0)return"0s"
w=A.o.ak(t,36e8)
v=A.o.ak(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+A.a.aT(A.o.u(v),2,"0")+"m "+A.a.aT(A.o.u(u),2,"0")+"s"
if(v>0)return""+v+"m "+A.a.aT(A.o.u(u),2,"0")+"s"
return""+u+"s"},
aWI(d){var w=0,v=B.j(x.y),u,t,s,r,q,p,o
var $async$aWI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return B.b(C.Tc(),$async$aWI)
case 3:t=p.aWG(o.aWF(f,d),new B.N(Date.now(),0,!1))
w=4
return B.b(B.aw(),$async$aWI)
case 4:s=f
r=A.a.i(d.toLowerCase())
q=t.b.a4().aa()
u=B.kq(J.q(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aWI,v)},
an5(d){var w=0,v=B.j(x.H),u,t,s,r
var $async$an5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return B.b(C.Tc(),$async$an5)
case 3:t=s.aWG(r.aWF(f,d),new B.N(Date.now(),0,!1))
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
q=C.aWG(C.aWF(s,d),new B.N(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aE(s,t,B.D(["count",r+1,"windowStart",q.b.a4().aa()],x.N,x.K))
w=4
return B.b(C.aWH(s),$async$an6)
case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$an6,v)},
aes(d,e,a0){var w=0,v=B.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aes=B.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new B.f4("")
if(!d.d){p=!0
if(!C.h2l(a0))if(!C.h2k(a0)){p=B.ad("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.h2l(a0)?3:4
break
case 3:o=C.hJt(a0)
w=o!=null?5:6
break
case 5:w=7
return B.b(C.bX3(e,o),$async$aes)
case 7:n=a2
p=J.a6(n)
if(p.gcf(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.fO2(o)+":\n"
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
return B.b(B.Q8("text/plain"),$async$aes)
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
case 13:case 9:w=C.h2k(a0)?15:16
break
case 15:p=h
f=C
w=17
return B.b(C.a52(e),$async$aes)
case 17:m=f.fPC(a2)+"\n"
p.a+=m
case 16:p=B.ad("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return B.b(C.Sg(e),$async$aes)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cs(i)){p=h
m=C.fO3(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=A.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aes,v)},
hjN(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.ad("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.ad("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
c5Y(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$c5Y=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.fQf(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.eU("ngmy_local_growth_income_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bD),$async$c5Y)
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
$.al.$1("[local growth income stash] code lookup: "+B.t(q))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$c5Y,v)},
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
u=new B.aCH(m,p,n)
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=B.a5(j)
$.al.$1("[local growth income stash] consume: "+B.t(o))
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
aXL(d){var w=0,v=B.j(x.bY),u,t,s,r,q
var $async$aXL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=C.hjN(q)?3:4
break
case 3:w=5
return B.b(C.c5Y(q),$async$aXL)
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
return B.b(C.anL(A.a.i(A.a.aU(q,15))),$async$aXL)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new B.aCH(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aXL,v)},
fQt(d){var w=d.bI
if(w>=0)return w
return 1},
aeD(d,e,f){var w=0,v=B.j(x.H),u,t
var $async$aeD=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return B.b(B.aMt(d,e),$async$aeD)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return B.b(B.F6(d,null,null,!1,!0,""),$async$aeD)
case 5:w=4
return B.b(t.$1(h),$async$aeD)
case 4:case 1:return B.h(u,v)}})
return B.i($async$aeD,v)},
hIn(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=A.a.i(a2)
if(a1.length===0)return A.hX
w=a1.toLowerCase()
v=B.ad("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=B.ad("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cz(w)
if(!u&&t==null)return A.hX
s=new B.N(Date.now(),0,!1)
r=B.da()
q=B.da()
p=C.hyr(w)
if(p!=null){v=p.a
r.b=s.bL(v)
q.b=C.fYw(a1,w)
if(J.y(q.b7(),"Wake up")&&A.o.ak(v,e)<=180)q.b="Reminder \u2014 "+A.o.ak(v,e)+" min"}else{if(t!=null){v=B.ad("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=A.a.e0(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.fYx(v[2],v[4],v[3])
o=v[3]
m=B.c3(o==null?"":o,null)
if(m==null)m=0
l=B.bX(B.bw(s),B.bB(s),B.bL(s),0,0,0,0,0)
if(A.a.q(w,d))l=l.bL(a0)
r.b=B.bX(B.bw(l),B.bB(l),B.bL(l),n,m,0,0,0).bL(-36e8)
if(r.b7().cU(s.bL(e)))r.b=J.ch(r.b7(),A.oY)
v=C.hCj(v[1])
k=A.o.J(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+A.a.aT(A.o.u(m),2,"0")+" "+j)}else{l=B.bX(B.bw(s),B.bB(s),B.bL(s),0,0,0,0,0)
v=A.a.q(w,d)
if(v)l=l.bL(a0)
i=B.ad("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cz(w)
if(i!=null){o=i.b
h=C.fYx(o[1],o[3],o[2])
o=o[2]
g=B.c3(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=B.bX(B.bw(l),B.bB(l),B.bL(l),h,g,0,0,0)
r.b=f.cU(s.bL(3e7))&&!v?f.bL(a0):f
q.b=C.fYw(a1,w)}}v=x.N
return B.a([new B.k9("alarm",B.D(["title",q.b7(),"start",r.b7().aa(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
hyr(d){var w,v,u,t,s,r,q=[B.ad("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.ad("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.ad("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),B.ad("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
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
hCj(d){var w=d==null?"work":d,v=w.toLowerCase()
if(A.a.q(v,"meeting")||A.a.q(v,"appointment"))return"Meeting"
if(A.a.q(v,"class")||A.a.q(v,"school"))return"Class"
if(A.a.q(v,"shift"))return"Shift"
return"Work"},
fYx(d,e,f){var w,v=B.c3(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return A.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
fYw(d,e){var w,v,u,t
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
hk8(d){var w,v,u,t,s=J.a6(d)
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
C.bn6.prototype={
nV(d,e){return this.a.$2(d,e)}}
C.DN.prototype={
S(){return new C.aEK(this.$ti.k("aEK<DN.T,DN.S>"))}}
C.aEK.prototype={
Z(){var w,v,u=this
u.a0()
w=u.a
v=w.f
w=new B.ht(A.Dh,v,null,null,w.$ti.k("ht<1>"))
u.e=w
u.TZ()},
bo(d){var w,v=this
v.bA(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aJ3()
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.ht(A.Dh,w.b,w.c,w.d,w.$ti)}v.TZ()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&B.c()
return v.mw(d,w)},
p(){this.aJ3()
this.a2()},
TZ(){var w,v=this
v.d=v.a.c.kW(new C.eKK(v),new C.eKL(v),new C.eKM(v))
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.ht(A.Ud,w.b,w.c,w.d,w.$ti)},
aJ3(){var w=this.d
if(w!=null){w.a9(0)
this.d=null}}}
C.asA.prototype={
mw(d,e){return this.e.$2(d,e)}}
C.aim.prototype={
S(){return C.hqC()},
bn(){return this.r.$0()}}
C.o2.prototype={}
C.ax5.prototype={
a7I(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7I=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=!C.c2U(t.a.c)
if(r){w=3
break}else e=r
w=4
break
case 3:w=5
return B.b(C.amK(t.a.c),$async$a7I)
case 5:e=!e
case 4:s=e
if(t.c==null){w=1
break}t.n(new C.d1X(t,s))
case 1:return B.h(u,v)}})
return B.i($async$a7I,v)},
a9E(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a9E=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.bxY(),$async$a9E)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d27(t,s))
case 1:return B.h(u,v)}})
return B.i($async$a9E,v)},
Z(){var w,v,u=this
u.bnV()
$.rI=$.rI+1
w=u.a
$.by1=w.c.a
w=w.d.b1
v=B.T(w).k("I<1,a0<n,@>>")
w=B.z(new B.I(w,new C.d2p(),v),v.k("ai.E"))
u.f=w
u.a9E()
u.I7()
u.a7I()
u.e=B.dE(A.nf,new C.d2q(u))},
I7(){var w=0,v=B.j(x.H),u,t=this,s
var $async$I7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:C.aeE(t.a.d.b1)
w=3
return B.b(C.fmP(t.a.d.b1),$async$I7)
case 3:s=e
if(t.c==null){w=1
break}C.aeE(t.a.d.b1)
if(s!=null)t.n(new C.d2f(t,s))
else t.n(new C.d2g(t))
case 1:return B.h(u,v)}})
return B.i($async$I7,v)},
p(){C.aWr()
var w=this.e
if(w!=null)w.a9(0)
this.bnU()},
aep(d,e,f){return this.cj7(d,e,f)},
cj7(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$aep=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(e.toLowerCase())
p=J.q(t.r,q)
o=t.a
n=o.d.b1
o=o.c
s=d.b
C.hCm(n,o.a,o.c,d.a,s,f,e,p)
t.a.bn()
w=3
return B.b(C.aeF(t.a.d.b1),$async$aep)
case 3:if(t.c==null){w=1
break}t.n(new C.d2i(t))
r=f===1?"1 game":""+f+" games"
t.c.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aep,v)},
H2(d,e){return this.c4U(d,e)},
bUH(d){return this.H2(d,null)},
c4U(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$H2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&A.a.i(e).length!==0){s=C.tj(t.a.d.b1,A.a.i(e))
if(s!=null&&C.aLp(s)<=0){t.c.F(x.q).f.P(D.aI2)
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
return B.b(C.fzT(r,C.fhf(q.c),p),$async$H2)
case 6:w=1
break
case 4:o=new C.d2a(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
B.hl(r,new C.azU(p,q.d,q.f,q.r,new C.d2b(o),q.w,C.fhf(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
B.hl(q,new C.ail(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.d2c(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$H2,v)},
bSf(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.aeE(i.a.d.b1)
C.aeE(i.f)
w=C.hMX(i.a.c.a,i.f)
v=C.hCl(i.a.c.a,i.f)
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
return B.p(h,B.u(B.a([D.eO6,B.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,A.ou,h,h,h),A.P,B.A(B.a([B.C(B.dU(A1.Rb,new C.d22(i,t),h),1),A.ab,B.C(B.bJ(D.eWm,new C.d23(i,t),h),1)],n),A.m,h,A.e,A.j,0,h,h)],n),A.F,h,A.e,A.j,0,A.p),A.h,h,h,new B.o(A.aA,h,s,u,h,h,A.n),h,h,h,A.dZ,A.bk,h,h,1/0)}m=A.d.gI(v)
l=A.d.dM(i.y,new C.d24(m),new C.d25(i))
k=C.fFN(m,i.a.c.a,i.r)
j=C.aLp(m)
u=B.m(14)
s=B.G(A.be,A.r,1)
r=j===1?"":"s"
return B.p(h,B.u(B.a([D.eGU,B.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,A.ou,h,h,h),A.au,B.d(C.hEV(m,i.a.c.a),h,h,h,h,h,h,A.a48,h,h,h),A.P,B.bJ(D.eNq,new C.d26(i,l,m),h)],x.p),A.F,h,A.e,A.j,0,A.p),A.h,h,h,new B.o(A.bh,h,s,u,h,h,A.n),h,h,h,A.dZ,A.bk,h,h,1/0)},
bJ7(d){var w,v=null,u=D.ect.q(0,d.a),t=B.m(16),s=d.f,r=B.m(16),q=B.G(B.W(71,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1),p=A.d.gI(s)
p=B.a([new B.a9(0,A.G,B.W(102,p.l()>>>16&255,p.l()>>>8&255,p.l()&255),A.J,12)],x.V)
w=x.p
w=B.a([new B.a3(100,v,B.as(B.V(d.e,A.c,v,v,v,64),v,v,v),v),B.C(new B.B(A.kt,B.u(B.a([B.A(B.a([B.C(B.d(d.b,v,v,v,v,v,v,A.l7,v,v,v),1)],w),A.m,v,A.e,A.j,0,v,v),A.au,B.d(d.c,v,2,A.Z,v,v,v,A.nD,v,v,v)],w),A.F,v,A.b5,A.j,0,A.p),v),1)],w)
if(u)w.push(B.aF(v,v,v,v,D.bAN,v,v,v,new C.d1Z(this,d),v,v,v,v,"Invite player",v))
w.push(D.dME)
return B.aH(!1,t,!0,B.p(v,B.A(w,A.m,v,A.e,A.j,0,v,v),A.h,v,v,new B.o(v,v,q,r,p,new B.a8(A.a_,A.a7,A.w,s,v,v),A.n),v,92,v,A.dZ,v,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.d2_(this,d),v,v,v,v,v,v,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.K(d).ax.a===A.H,l=B.K(d).ax.a===A.H?A.iT:A.oO,k=m?A.hn.j(0.94):A.c.j(0.94),j=m?A.c:A.M,i=m?A.hn:A.c,h=m?A.c.j(0.08):A.aJ,g=m?A.c:A.M,f=m?A.bj:A.bN
if(!o.x)return C.aLX(n,l,B.as(B.mi(n,m?A.c:A.bq,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fhf(o.a.c)
return new C.LF(o.a.w,w,!0,o.gaNO(),n)}w=B.aG(d,A.e1,x.w).w
v=B.m(12)
u=B.G(h,A.r,1)
t=x.V
s=B.a([],t)
if(!m)s.push(new B.a9(0,A.G,A.x.j(0.04),A.cD,12))
r=x.p
s=B.a([B.p(n,B.A(B.a([B.C(B.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,B.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,A.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new B.tL(new C.d2m(o,f,g),n,$.aNh(),n)],r),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(i,n,u,v,s,n,A.n),n,n,n,n,A.V3,n,n,1/0),A.T,o.bSf()],r)
v=o.y
A.d.v(s,new B.I(v,o.gbJ6(),B.T(v).k("I<1,r>")))
w=B.cf(B.u(s,A.m,n,A.e,A.j,0,A.p),A.q,n,A.z,n,new B.L(14,w.r.b+78,14,24),n,n,A.ah)
s=B.m(35)
v=B.a([new B.a9(0,A.G,A.x.j(m?0.28:0.08),A.jn,15)],t)
u=B.G(m?A.c.j(0.1):A.aJ,A.r,1)
t=B.aF(n,n,n,n,B.V(A.es,j,n,n,n,18),n,n,n,o.gaNO(),n,n,n,n,n,n)
q=B.C(B.as(B.d("GAME CENTER",n,n,n,n,n,n,B.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,A.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=B.m(20)
return B.nU(!0,C.aLX(n,l,new B.am(A.V,n,A.a9,A.h,B.a([w,B.an(n,B.br(!1,new B.B(A.JP,B.p(n,B.A(B.a([t,q,new B.B(A.kt,B.p(n,B.A(B.a([D.bwk,A.ez,C.anA(new C.d2n(o),A.mV,o.a.c.a)],r),A.m,n,A.e,A.R,0,n,n),A.h,n,n,new B.o(A.cL,n,n,p,n,n,A.n),n,n,n,n,A.h1,n,n,n),n)],r),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(k,n,u,s,v,n,A.n),n,60,n,n,A.mB,n,n,n),n),!0,!1,A.ag,!0,!0),n,n,0,0,0,n)],r),n)),new C.d2o(o),x.K)},
aNP(){var w,v
this.a.bn()
w=this.d
v=w>0?B.D(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
B.iC(w,v)}}
C.azU.prototype={
S(){return new C.bfm()},
hu(d){return this.e.$1(d)},
bn(){return this.f.$0()},
aCL(){return this.r.$0()}}
C.bfm.prototype={
Z(){this.boU()
this.d=B.SD(this.a.d.bc)
$.rI=$.rI+1},
p(){C.aWr()
this.boT()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&B.c()
return new C.ame(v,new C.dF8(w),u,new C.dF9(w),new C.dFa(w,d),new C.dFb(w),null)}}
C.ail.prototype={
S(){return new C.ax4(new B.ao(A.aq,$.at()))},
hu(d){return this.x.$1(d)},
bn(){return this.y.$0()},
aCL(){return this.z.$0()}}
C.ax4.prototype={
Z(){this.bnT()
this.a.toString
$.rI=$.rI+1},
p(){C.aWr()
var w=this.d
w.R$=$.at()
w.O$=0
this.bnS()},
a_F(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a_F=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.LL()
w=5
return B.b(C.amK(t.a.c),$async$a_F)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return B.b(C.fzT(s,C.fhf(r.c),q),$async$a_F)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&A.a.i(r).length!==0){p=C.tj(s.d.b1,A.a.i(r))
if(p!=null&&C.aLp(p)<=0){t.c.F(x.q).f.P(D.aI2)
w=1
break}}o=B.d5(A.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.F(x.q).f.P(D.ejh)
w=1
break}m=B.Jh(t.a.c.a,new C.d1R(t))
if(m+0.001<n){t.c.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d("Not enough balance for this bet \u2014 you have $"+B.du(m)+", the bet is $"+B.du(n)+".",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aCL()
s=t.a
s.toString
r=A.o.u(1000*Date.now())
q=t.a
s.hu(new B.cW(r,q.c.a,n,A.js,A.f8,"Game bet: "+q.f,null,null,A.cg,new B.N(Date.now(),0,!1)))
t.a.bn()
if(D.ecm.q(0,t.a.e)){s=t.c
s.toString
r=t.a
B.hl(s,new C.alh(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
B.hl(s,new C.ain(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$a_F,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=B.aF(o,o,o,o,A.EJ,o,o,o,new C.d1U(d),o,o,o,o,o,o),k=p.a,j=B.d(k.f,o,o,o,o,o,o,A.cq,o,o,o),i=B.m(12),h=x.p
j=B.eA(B.a([B.p(o,B.as(C.anA(new C.d1V(p),A.kc,k.c.a),o,o,o),A.h,o,o,new B.o(A.cL,o,o,i,o,o,A.n),o,o,o,D.bdX,A.ig,o,o,o)],h),o,o,!0,!0,D.Ub,o,1,o,o,o,!1,o,!1,A.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=B.m(16)
i=B.G(A.be,A.r,1)
k=B.V(D.bnf,D.b9f,o,o,o,28)
w=p.a
v=B.d(w.f,o,o,o,o,o,o,A.oq,o,o,o)
w=B.d(w.r,o,o,o,o,o,o,A.ou,o,o,o)
u=B.W(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.m(12)
s=x.a3
s=B.z(new B.I(B.a([2,5,10,25],x.t),new C.d1W(p),s),s.k("ai.E"))
s=B.A(s,A.m,o,A.e,A.j,0,o,o)
r=B.W(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.p(o,B.u(B.a([D.eXO,A.T,s,A.P,B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.d,o,o,o,o,o,2,B.bl(o,new B.b1(4,B.m(10),A.W),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l8,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ae,o,o,o,o,o,A.dL,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.di,!0,A.a5,o,A.am,o,o,o,o)],h),A.m,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(u,o,o,t,o,o,A.n),o,o,o,o,A.bT,o,o,1/0)
u=B.m(12)
r=B.G(B.W(102,A.a0l.l()>>>16&255,A.a0l.l()>>>8&255,A.a0l.l()&255),A.r,1)
s=B.W(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
q=B.m(10)
q=B.p(o,B.u(B.a([D.eGh,B.d("+ $"+A.k.ab(n*0.46,2),o,o,o,o,o,o,D.exh,o,o,o),B.d("(46% return on $"+A.k.ab(p.e,2)+" bet)",o,o,o,o,o,o,A.nD,o,o,o)],h),A.m,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(s,o,o,q,o,o,A.n),o,o,o,o,A.ch,o,o,1/0)
s=B.W(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
n=B.m(10)
u=B.p(o,B.u(B.a([D.eOm,A.P,q,A.P,B.p(o,B.u(B.a([D.eBN,B.d("$"+A.k.ab(m,2),o,o,o,o,o,o,D.ent,o,o,o),B.d("8 pairs \xd7 $"+A.k.ab(m,2)+" each",o,o,o,o,o,o,A.nD,o,o,o)],h),A.m,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(s,o,o,n,o,o,A.n),o,o,o,o,A.ch,o,o,1/0)],h),A.m,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(D.b63,o,r,u,o,o,A.n),o,o,o,o,A.bT,o,o,1/0)
r=B.ff(o,o,A.bq,o,o,o,o,o,o,A.c,o,A.fV,o,o,o,o,o,o,o,o)
return C.aLX(j,D.Ub,B.cf(B.p(o,B.u(B.a([k,A.au,v,A.bw,w,A.T,t,A.P,u,A.T,new B.a3(1/0,o,B.i3(B.d("Start Game ($"+A.k.ab(p.e,2)+")",o,o,o,o,o,o,A.cc,o,o,o),p.gcmT(),r),o)],h),A.m,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(o,o,i,l,o,D.bFB,A.n),o,o,o,o,A.eE,o,o,1/0),A.q,o,A.z,o,E.acw,o,o,A.ah))}}
C.ain.prototype={
S(){var w=x.s,v=x.t,u=x.S
return new C.ax6(A.cA,new B.ao(A.aq,$.at()),B.a([],w),B.a([],x.d4),B.a([],w),B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.aZ(u),B.aZ(u),B.a([],v),B.a([],v),B.a([],v))},
hu(d){return this.y.$1(d)},
bn(){return this.z.$0()}}
C.ax6.prototype={
ghq(){var w=this.a.Q
return w!=null&&A.a.i(w).length!==0},
qm(d){return this.bHs(d)},
bHs(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$qm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.z3()
r=t.MP()
w=s<=0?3:4
break
case 3:w=5
return B.b(t.a86(d),$async$qm)
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
Iy(d,e,f,g){return this.ckJ(d,e,f,g)},
ckJ(d,e,f,g){var w=0,v=B.j(x.H),u,t=this,s
var $async$Iy=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(C.bz2(s,C.byH(),C.fHE(),d,e,f,g),$async$Iy)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Iy,v)},
z3(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.aXP(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&B.c()
return u+C.aeQ(t,s.e.a.a)
case"memory":return s.ghq()&&D.ma.q(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.aui()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bc
case"color":return s.b1
case"reflex":return s.Y
default:u=s.aW
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
aui(){var w,v,u=this.x1
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
case"pattern":return C.fFQ()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.aW
if(w!=null)return w.b
return 1}},
bo(d){var w,v,u=this
u.bA(d)
if(u.f||u.ci)return
w=u.a
v=C.fhi(w.e,w.d.y2)
if(v!==C.fhi(d.e,d.d.y2)&&u.c!=null)u.n(new C.d3J(u,v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.bnX()
w=i.a
w.toString
$.rI=$.rI+1
i.Q=C.fhi(w.e,w.d.y2)
i.b_C()
i.a9n()
if(i.ghq()){i.ci=!0
i.cT="Connecting to match\u2026"
i.cd="Both players enter the room together \u2014 play starts at the same time."
i.Na()
i.a91()
i.bg=B.dE(A.fQ,new C.d3M(i))}if(A.d.q(D.NI,i.a.e)){w=i.ghq()
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
k=A.a.i(J.k(t==null?"":t))}w=new C.aWp(!1,w,k.length===0||A.a.q(k,"@")?C.fFN(u,v,null):k,p,l,s)}else{w=w.c
w=C.fzX(w.c,w.a)}w=i.bE=w}else{w=v.c
w=i.bE=C.fzX(w.c,w.a)}v=C.hkf()
v.bi1(i.a.e,i.d,w)
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
w.b4F(i.a.e,B.Z(m,x.N,x.z),i.a.c.a)
w=i.aW
i.r=w.c
if(w.e){if(w.r)j=D.P3
else j=w.f===!0?D.pl:D.FZ
i.z5(j)}}}i.aZ=B.dE(A.ni,new C.d3N(i))
if(i.ghq())i.b6=B.dE(A.o_,new C.d3O(i))}if(i.ghq()&&!A.d.q(D.NI,i.a.e))i.b6=B.dE(A.o_,new C.d3P(i))
i.as=B.dE(A.h_,new C.d3Q(i))},
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
return B.b(C.bx4(p,t.a.c.a),$async$Na)
case 5:o=e
if(t.c!=null)t.n(new C.d2Z(t,o))
w=1
break
case 4:w=6
return B.b(C.J8(q,t.a.d.b1,!1),$async$Na)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return B.b(C.bx4(n,t.a.c.a),$async$Na)
case 7:o=e
if(t.c!=null)t.n(new C.d3_(t,o))
case 1:return B.h(u,v)}})
return B.i($async$Na,v)},
afu(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$afu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghq()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.J8(r,s.d.b1,!1),$async$afu)
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
t.aIS(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=A.k.M(j)
else{h=j==null?null:J.k(j)
i=B.c3(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)A.d.bl(t.fy,new C.d3s(t))
if(i!=null&&t.fr.length!==0){s=B.z(t.dy,x.S)
A.d.v(s,t.dy)
r=new B.f6()
r.dY(i)
A.d.fN(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.n(new C.d3t())}case 1:return B.h(u,v)}})
return B.i($async$afu,v)},
a91(){var w=0,v=B.j(x.H),u=this
var $async$a91=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.Z1(!0),$async$a91)
case 2:return B.h(null,v)}})
return B.i($async$a91,v)},
Z1(d){return this.cay(d)},
cax(){return this.Z1(!1)},
cay(b3){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$Z1=B.e(function(b4,b5){if(b4===1)return B.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghq()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
if(q.length===0){w=1
break}p=A.a.i(s.c.a.toLowerCase())
w=3
return B.b(C.J8(q,s.d.b1,b3),$async$Z1)
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
if(a6!=null&&a7!=null){a8=(a6.c9(a7)?a6:a7).bL(5e5)
if(!new B.N(Date.now(),0,!1).cU(a8)){a4=b2.a=a8.bL(4e6)
j.m(0,"startAt",a4.a4().aa())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.m(0,"memorySeed",A.o.J(1000*Date.now(),2147483647))
j.m(0,"memoryMatched",B.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.m(0,"patternSeed",A.o.J(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.hJR(t.a.d.b1,q,j)
t.a.bn()}if(t.c==null){w=1
break}b0=t.by
if(b0==null)b0="your opponent"
if(!a5){t.n(new C.d3e(b2,t,b0))
w=1
break}if(s==null){t.n(new C.d3f(t))
w=1
break}b1=new B.N(Date.now(),0,!1)
if(b1.cU(s)){s=s.bv(b1).a
r=A.o.ak(s,1e6)
t.n(new C.d3g(b2,t,r+(A.o.J(A.o.ak(s,1000),1000)>0?1:0)))
w=1
break}if(t.ci){t.n(new C.d3h(b2,t))
b2=t.a.e
if(b2==="pattern")t.a62()
else if(b2==="memory"){t.b_B()
if(t.c!=null)t.n(new C.d3i())}}b2=t.bg
if(b2!=null)b2.a9(0)
t.bg=null
case 1:return B.h(u,v)}})
return B.i($async$Z1,v)},
aJM(d){var w,v,u,t,s=this
if(d!=null){w=new B.f6()
w.dY(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e_(v,x.S)
for(t=0;t<v;++t)u[t]=w.aG(9)
s.ry=u
s.x1=0
s.to=-1},
aJL(){return this.aJM(null)},
a62(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a62=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ghq()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.c85()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return B.b(C.J8(q,s.d.b1,!1),$async$a62)
case 5:r=t.aWC(e)
case 4:if(t.c==null){w=1
break}t.aJM(r)
t.n(new C.d2r(t))
t.Cr()
case 1:return B.h(u,v)}})
return B.i($async$a62,v)},
aWC(d){var w,v,u,t=null
if(d==null)return t
w=J.q(d,"sessionState")
if(!x.f.b(w))return t
v=J.q(w,"patternSeed")
if(typeof v=="number")return A.k.M(v)
u=v==null?t:J.k(v)
return B.c3(u==null?"":u,t)},
c85(){var w=this.a,v=w.Q
if(v==null)return null
return this.aWC(C.tj(w.d.b1,v))},
a9n(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9n=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aw(),$async$a9n)
case 3:r=e
q=t.a
p=q.e
q=A.a.i(q.c.a.toLowerCase())
s=B.eX(J.q(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.n(new C.d2Y(t,s))
case 1:return B.h(u,v)}})
return B.i($async$a9n,v)},
om(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n
var $async$om=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.aw(),$async$om)
case 2:p=e
o=u.a
n=o.e
o=A.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bzu().length
else s=n==="typing"?50:105
if(n==="typing")r=A.o.J(u.at+5,s)
else{q=u.at
r=t?A.o.J(q+6,s):A.o.J(q+1,s)}w=3
return B.b(p.an("Int","ngmy_game_"+n+"_"+o,r),$async$om)
case 3:u.at=r
return B.h(null,v)}})
return B.i($async$om,v)},
a_U(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a_U=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghq()||t.aW==null||t.f||t.aM){w=1
break}if(t.ci){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.J8(r,s.d.b1,!1),$async$a_U)
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
if(m!=null&&l!=null&&!m.c9(l)){w=1
break}s=t.aW
s.toString
r=t.a
s.b4F(r.e,n,r.c.a)
r=t.aW
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.P3
else k=r.f===!0?D.pl:D.FZ
w=7
return B.b(t.z5(k),$async$a_U)
case 7:w=5
break
case 6:if(t.c!=null)t.n(new C.d3u())
case 5:case 1:return B.h(u,v)}})
return B.i($async$a_U,v)},
adq(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$adq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghq()||q.aW==null||q.a.Q==null||q.aM){w=1
break}q.aM=!0
t=3
o=q.aW
o.toString
p=o.cBH(q.a.e)
o=q.a
n=o.d.b1
o=o.Q
o.toString
w=6
return B.b(C.aMi(n,o,p),$async$adq)
case 6:q.a.bn()
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
return B.i($async$adq,v)},
z5(d){return this.bOo(d)},
bOo(d){var w=0,v=B.j(x.H),u,t=this,s
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
Y2(d,e){return this.c2I(d,e)},
c2I(d,e){var w=0,v=B.j(x.H),u,t=this
var $async$Y2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=t.ghq()?3:5
break
case 3:w=6
return B.b(t.adq(),$async$Y2)
case 6:if(d===D.pk){w=1
break}w=4
break
case 5:if(d===D.pk){w=1
break}case 4:w=7
return B.b(t.z5(d),$async$Y2)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Y2,v)},
a9h(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$a9h=B.e(function(d,e){if(d===1)return B.f(e,v)
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
return B.b(C.aMi(t.a.d.b1,q,l),$async$a9h)
case 3:t.a.bn()
case 1:return B.h(u,v)}})
return B.i($async$a9h,v)},
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
C.fI2(t.a.d.b1,q,n)
C.hN5(t.a.d.b1,q)
w=3
return B.b(C.aeF(t.a.d.b1),$async$Gm)
case 3:t.a.bn()
case 1:return B.h(u,v)}})
return B.i($async$Gm,v)},
p(){var w,v=this
if(v.ghq()&&!v.f)v.a9h()
else if(!v.f)v.bUI()
C.aWr();++v.RG
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
v.bnW()},
cpW(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&B.c()
v=v<=0||w.aW==null}if(v)return
if(w.ci)return
v=w.aW
v.toString
w.a.toString
if(v.a>=v.b){w.rV("Goal completed!")
return}v=++w.rx
if(v%5===0)w.n(new C.d3D())},
b_C(){var w,v,u,t,s,r=this
r.x=B.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e_(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b_B()
break
case"scramble":r.bc=0
r.b_D()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=A.o.J(r.at,50)
v=J.e_(5,x.N)
for(t=0;t<5;++t)v[t]=D.cVM[A.o.J(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bG(0,A.c_)
break
case"math":r.y2=0
r.b_A()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b_E()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e_(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
A.d.fN(v,s)
if(!r.ccS()){w=J.e_(9,w)
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
r.aJL()
w=B.t(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Cr()}break
case"color":r.b1=0
r.b_v()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.Y=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b0I()
break
default:if(A.d.q(D.NI,w)){w=r.aW
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
aXP(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
ccS(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return A.o.J(v,2)===0},
b_E(){var w,v,u,t,s,r=this,q=A.o.J(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e_(o,x.S)
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
b_A(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bzu().length-6)u.at=0
w=$.bzu()
v=w[A.o.J(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b_D(){var w=this,v=w.w=D.cBC[A.o.J(w.at+w.bc,105)]
w.ax=C.hNl(v)
w.ay=B.bT(v.length,null,!1,x.T)
w.ch=B.a(w.ax.split(""),x.s)
w.e.bG(0,A.c_)},
b0I(){var w=this,v=w.cx
if(v!=null)v.a9(0)
w.y=!1
w.z=null
w.cx=B.cV(B.dB(0,0,0,120+w.d.aG(280),0,0),new C.d3r(w))},
bOr(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.qm("Too early \u2014 paid for "+t.Y+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=A.o.ak(new B.N(v,0,!1).bv(u).a,1000)}if(w<520){t.n(new C.d2W(t))
v=t.Y
if(v>=5){t.om()
t.rV("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b0I()
t.n(new C.d2X())}}else t.qm("Too slow ("+w+"ms) \u2014 paid for "+t.Y+"/5.")},
cpe(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=A.d.bf(t.ay,new C.d3y())
if(u<0)return
t.n(new C.d3z(t,u,v,d))},
cpf(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.n(new C.d3A(u,d,v))},
byV(){var w,v,u=this
if(u.f)return
if(A.d.be(u.ay,new C.d2s())){u.c.F(x.q).f.P(D.ejb)
return}w=A.d.fL(u.ay)
v=u.w
v===$&&B.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.n(new C.d2t(u))
if(u.ghq()&&D.ma.q(0,u.a.e))u.Zf()
if(u.bc>=5){u.om()
if(u.ghq()&&D.ma.q(0,u.a.e))u.mt(!0)
else u.rV("All 5 words unscrambled!")}else{u.b_D()
u.r="Word "+(u.bc+1)+" of 5 \u2014 place letters in order"
u.n(new C.d2u())}}else u.qm("Wrong word \u2014 paid for "+u.bc+"/5.")},
b_v(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=A.o.J(w.at+w.b1*11,4),t=v[w.d.aG(4)]
w.aA=t
w.az=v[u]
w.aK=[A.dy,A.dr,A.hw,A.qx][u]
w.w=t},
aIS(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.a.i(h.a.c.a.toLowerCase()),f=h.go
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
b_B(){var w,v,u,t,s,r,q,p=this
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
p.aIS(s)}else A.d.fN(p.fr,p.d)},
c9U(d){var w,v,u,t=this
if(t.ci)return
if(t.f||t.k1||t.go.q(0,d)||A.d.q(t.fy,d))return
t.n(new C.d37(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.n(new C.d38(t,v,u))
if(t.ghq()&&D.ma.q(0,t.a.e))t.Zf()
if(t.go.a>=t.fr.length){t.om()
if(t.ghq()&&D.ma.q(0,t.a.e))t.mt(!0)
else t.aul()}return}t.k1=!0
B.bK(D.bcV,new C.d39(t),x.c)},
aZZ(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&B.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.n(new C.d3j(u))
if(u.y1>=5){u.om()
u.rV("All 5 questions correct!")}else{u.b_E()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.n(new C.d3k())}}else u.qm(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.n(new C.d3l(u))
if(u.y2>=6){u.om()
u.rV("All 6 math questions correct!")}else{u.b_A()
u.r="Question "+(u.y2+1)+" of 6"
u.n(new C.d3m())}}else{u.TN(u.y2+1)
u.qm(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.n(new C.d3n(u))
if(u.b1>=5){u.om()
u.rV("All 5 color rounds correct!")}else{u.b_v()
u.r="Round "+(u.b1+1)+" of 5 \u2014 tap the COLOR of the text"
u.n(new C.d3o())}}else u.qm("Wrong color \u2014 paid for "+u.b1+"/5.")
return}if(v){u.om()
u.aul()}else u.c.F(x.q).f.P(D.ejV)},
cpd(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=A.d.cP(q.k4,0)
v=A.o.ak(d,3)
u=A.o.J(d,3)
t=A.o.ak(w,3)
s=A.o.J(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.n(new C.d3x(q,d,w))
if(A.d.fL(q.k4)==="123456780"){q.om()
q.aul()}}},
OI(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$OI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.n(new C.d3a(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.d3b(t,q).$0()
t.c.e2()
w=6
return B.b(B.bK(A.kq,null,r),$async$OI)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.d3c(t).$0()
t.c.e2()
w=7
return B.b(B.bK(A.jd,null,r),$async$OI)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.n(new C.d3d(t))
case 1:return B.h(u,v)}})
return B.i($async$OI,v)},
cpg(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.qm("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.n(new C.d3B(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.om()
u.rV("Perfect Simon run!")
return}u.n(new C.d3C(u))
u.OI()}},
Cr(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Cr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.n(new C.d2v(t))
s=x.H
w=3
return B.b(B.bK(A.jc,null,s),$async$Cr)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.d2w(t,o).$0()
t.c.e2()
w=7
return B.b(B.bK(A.UI,null,s),$async$Cr)
case 7:if(t.c==null){w=1
break}new C.d2x(t).$0()
t.c.e2()
w=8
return B.b(B.bK(A.ib,null,s),$async$Cr)
case 8:case 5:r.length===q||(0,B.J)(r),++p
w=4
break
case 6:if(t.c!=null)t.n(new C.d2y(t))
case 1:return B.h(u,v)}})
return B.i($async$Cr,v)},
TN(d){return this.btQ(d)},
btQ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$TN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return B.b(B.aw(),$async$TN)
case 3:s=f
r=t.a
q=r.e
r=A.a.i(r.c.a.toLowerCase())
p=$.bzu().length
o=A.o.J(t.at+d,p)
w=4
return B.b(s.an("Int","ngmy_game_"+q+"_"+r,o),$async$TN)
case 4:t.at=o
case 1:return B.h(u,v)}})
return B.i($async$TN,v)},
cpb(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.qm("Wrong tile \u2014 paid for "+v.aui()+"/"+C.fFQ()+" moves.")
return}v.n(new C.d3v(v,w))
if(v.ghq()&&D.ma.q(0,v.a.e))v.Zf()
if(v.x1>=w)if(v.x2>=7){v.om()
if(v.ghq()&&D.ma.q(0,v.a.e))v.mt(!0)
else v.rV("All 7 pattern rounds correct!")}else{v.n(new C.d3w(v))
v.Cr()}},
HH(d,e){return this.c8l(d,e)},
rV(d){return this.HH(null,d)},
aul(){return this.HH(null,null)},
c8l(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$HH=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a9(0)
s=t.aZ
if(s!=null)s.a9(0)
r=t.a.x*1.46
t.n(new C.d35(t,r))
q=A.o.u(1000*Date.now())
s=t.a
p=new B.cW(q,s.c.a,r,A.fA,A.f8,"Game payout: "+s.f,null,null,A.cg,new B.N(Date.now(),0,!1))
B.aeC(p,!0)
t.a.hu(p)
t.a.bn()
o=e==null?"+$"+A.k.ab(r,2)+" added to your balance!":e
s=t.a
C.v0(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.Iy(d,o,"YOU WIN!",!0),$async$HH)
case 3:w=4
return B.b(C.aeu(t.a.f,o),$async$HH)
case 4:case 1:return B.h(u,v)}})
return B.i($async$HH,v)},
DL(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$DL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghq()&&D.ma.q(0,t.a.e)?3:4
break
case 3:w=5
return B.b(t.cjP(),$async$DL)
case 5:w=1
break
case 4:s=t.z3()
r=t.MP()
w=r<=0||s<=0?6:7
break
case 6:w=8
return B.b(t.a86("Time's up \u2014 no progress to pay."),$async$DL)
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
OP(d){return this.ccz(d)},
Zf(){return this.OP(!1)},
ccz(b1){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return B.b(C.J8(q,r.a.d.b1,!1),$async$OP)
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
if(e!=null)J.ch(h,e)}}a6=h
a6=B.z(a6,B.a2(a6).k("ck.E"))
A.d.fv(a6)
J.aE(m,"memoryMatched",a6)}d=J.q(m,"wagers")
a0=a2.b(d)?B.Z(d,a3,a5):B.R(a3,a5)
J.aE(a0,p,r.a.x)
J.aE(m,"wagers",a0)
w=11
return B.b(C.aMi(r.a.d.b1,q,m),$async$OP)
case 11:r.a.bn()
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
mt(d){return this.cjQ(d)},
cjP(){return this.mt(!1)},
cjQ(b5){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
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
return B.b(C.J8(q,s.d.b1,!0),$async$mt)
case 7:o=b7
n=t.MP()
w=o==null?8:9
break
case 8:m=A.k.D(t.z3()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return B.b(t.a86("Time's up \u2014 no progress to pay."),$async$mt)
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
return B.b(t.a86("Time's up \u2014 no progress to pay."),$async$mt)
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
t.n(new C.d3p(t,a8,a2))
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
t.a.bn()
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
Dc(d,e,f){return this.c8j(d,e,f)},
c8j(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Dc=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a9(0)
s=t.aZ
if(s!=null)s.a9(0)
r=t.a.x*1.46*d
t.n(new C.d33(t,r,d))
s=A.o.u(1000*Date.now())
q=t.a
p=new B.cW(s,q.c.a,r,A.fA,A.f8,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,A.cg,new B.N(Date.now(),0,!1))
B.aeC(p,!0)
t.a.hu(p)
t.a.bn()
if(t.c==null){w=1
break}o=A.k.U(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&B.c()
m=q+C.aeQ(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?A.d.cI(t.cy,0,new C.d34()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+A.k.ab(r,2)+" ("+n+"% \u2014 "+B.t(k)+" mistakes/missed)":"+$"+A.k.ab(r,2)+" ("+n+"% of full prize)"
q=t.a
C.v0(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return B.b(t.Iy(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$Dc)
case 3:w=4
return B.b(C.aeu(t.a.f,j),$async$Dc)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Dc,v)},
bUI(){var w,v,u,t,s,r,q,p,o=this,n=null
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
o.a.bn()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.v0(s,n,"Left early \xb7 +$"+A.k.ab(s,2)+" ("+B.t(w)+"/"+B.t(v)+")",q,r,p,n,!0)},
MO(d,e){return this.bJ2(d,e)},
a86(d){return this.MO(null,d)},
bJ2(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
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
v=B.aF(n,n,n,n,A.ahX,n,n,n,new C.d3E(d),n,n,n,n,n,n)
if(o.ghq()){u=o.by
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=B.C(B.d(u?t.f+" vs "+B.t(o.by):t.f,n,2,A.Z,n,n,n,A.fL,n,n,n),1)
r=B.m(10)
q=x.p
r=B.A(B.a([v,s,B.p(n,C.anA(new C.d3F(o),A.qP,t.c.a),A.h,n,n,new B.o(A.cL,n,n,r,n,n,A.n),n,n,n,n,A.fF,n,n,n)],q),A.m,n,A.e,A.j,0,n,n)
t=o.a
s=t.w
v=B.m(10)
s=B.p(n,B.A(B.a([B.C(B.d("Win $"+A.k.ab(t.x*1.46,2)+" \xb7 stake $"+A.k.ab(o.a.x,2)+" \u2022 Progress "+o.z3()+"/"+o.MP(),n,n,n,n,n,n,D.esf,n,n,n),1),new C.amM(o.a.c.a,new C.d3G(o),n),A.ab,D.brZ,A.d4,B.d(""+w+":"+m,n,n,n,n,n,n,A.ot,n,n,n)],q),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(n,n,n,v,n,new B.a8(A.a_,A.a7,A.w,s,n,n),A.n),n,n,n,n,A.h0,n,n,n)
v=o.a.w
m=B.T(v).k("I<1,x>")
m=B.z(new B.I(v,new C.d3H(),m),m.k("ai.E"))
w=B.m(14)
v=B.G(A.be,A.r,1)
p=C.aLX(n,D.aYI,B.br(!0,new B.B(Ad.V5,B.u(B.a([r,s,A.P,new B.fi(new C.d3I(o),n),A.ar,B.C(B.p(n,o.bJ1(),A.h,n,n,new B.o(n,n,v,w,n,new B.a8(A.a_,A.a7,A.w,m,n,n),A.n),n,n,n,n,A.ch,n,n,n),1)],q),A.ad,n,A.e,A.j,0,A.p),n),!0,!1,A.ag,!0,!0))
if(!o.ci)return p
m=B.W(140,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255)
w=B.W(242,A.i9.l()>>>16&255,A.i9.l()>>>8&255,A.i9.l()&255)
v=B.m(18)
u=B.G(A.be,A.r,1)
return new B.am(A.V,n,A.a9,A.q,B.a([p,B.bU(0,B.p(A.B,B.e8(B.p(n,B.u(B.a([D.efo,A.aa,B.d(o.cT,n,n,n,n,n,n,D.etD,A.L,n,n),A.ar,B.d(o.cd,n,n,n,n,n,n,D.erZ,A.L,n,n)],q),A.m,n,A.e,A.R,0,A.p),A.h,n,n,new B.o(w,n,u,v,n,n,A.n),n,n,n,A.uf,A.wq,n,n,n),!1,n),A.h,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
bVG(){var w=this.k3
return B.cj(new C.d32(this,w,A.k.dF(this.fr.length/w)))},
bJ1(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.bVG()
if(m==="scramble"){m=o.r
m===$&&B.c()
w=x.l
return B.u(B.a([B.d(m,n,n,n,n,n,n,A.nD,n,n,n),B.d("Words "+o.bc+"/5",n,n,n,n,n,n,A.BN,n,n,n),A.aa,B.d("Tap letters below to fill each slot",n,n,n,n,n,n,B.l(n,n,B.W(166,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.T,B.cb(A.fB,B.ih(o.ay.length,new C.d2L(o),!0,w),A.bx,6,6),A.aN,B.cb(A.fB,B.ih(o.ch.length,new C.d2M(o),!0,w),A.bx,8,8),A.aN,new B.a3(1/0,n,B.i3(D.eRw,o.gbyU(),B.ff(n,n,A.aA,n,n,n,n,n,n,A.c,n,n,A.ca,n,n,n,n,n,n,n)),n)],x.p),A.m,n,A.e,A.j,0,A.p)}if(m==="typing"){m=o.w
m===$&&B.c()
return new C.aoW(m,o.e,new C.d2N(o),new C.d2O(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&B.c()
m=B.a([B.d(m,n,n,n,n,n,n,A.nD,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(B.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,A.BN,n,n,n))
m.push(A.aa)
if(o.a.e==="sequence"){w=o.aq
w===$&&B.c()
w+=", ?"}else w=o.CW
m.push(B.eY(A.B,B.d(w,n,n,n,n,n,n,A.oq,A.L,n,n),A.h,A.dp))
m.push(A.aN)
w=o.x
A.d.v(m,new B.I(w,new C.d2P(o),B.T(w).k("I<1,r>")))
return B.u(m,A.m,n,A.e,A.j,0,A.p)}if(m==="puzzle")return B.cj(new C.d2Q(o))
if(m==="simon"){m=o.r
m===$&&B.c()
return B.u(B.a([B.d(m,n,n,n,n,n,n,A.nD,n,n,n),B.d("Progress "+o.p3+"/21",n,n,n,n,n,n,A.BN,n,n,n),A.P,B.C(B.lX(1,B.ih(4,new C.d2R(o),!0,x.l),2,10,10,n,A.dJ,!1),1)],x.p),A.m,n,A.e,A.j,0,A.p)}if(m==="pattern")return B.cj(new C.d2S(o))
if(m==="color"){u=B.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[A.dy,A.dr,A.hw,A.qx]
m=o.r
m===$&&B.c()
m=B.d(m,n,n,n,n,n,n,A.nD,n,n,n)
w=B.d("Round "+o.b1+"/5",n,n,n,n,n,n,A.BN,n,n,n)
v=o.az
v===$&&B.c()
s=o.aK
s===$&&B.c()
s=B.a([m,w,A.aa,B.d(v,n,n,n,n,n,n,B.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.aN],x.p)
r=J.e_(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=B.ff(n,n,B.W(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,A.c,n,n,A.eV,n,n,n,n,n,n,n)
r[q]=new B.B(A.cH,new B.a3(1/0,n,B.i3(new B.w(u[q],n,A.cq,n,n,n,n,n,n,n,n,n),new C.d2T(o,u,q),m),n),n)}A.d.v(s,r)
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
return B.qV(B.aJ(A.c5,B.dg(n,B.u(B.a([w,A.P,v,A.b6,s,A.b6,new B.B(A.Ds,B.d(m,n,n,n,n,n,n,B.l(n,n,B.W(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,A.a1,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),A.m,n,A.b5,A.j,0,A.p),p,n,A.b9,n,T.zu,n,n,n,n,n,n,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gbOq(),n,n,n,n,n,n,!1,A.af))}if(A.d.q(D.NI,m)&&o.aW!=null){m=o.a.e
w=o.aW
w.toString
return C.hD0(m,new C.d2U(o),new C.d2V(o),o.d,w)}m=o.r
m===$&&B.c()
return B.as(B.d(m,n,n,n,n,n,n,A.di,n,n,n),n,n,n)}}
C.ajf.prototype={
S(){return new C.bcy()},
cHg(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bcy.prototype={
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.a,a0=d.c,a1=d.d
d=B.aG(a2,A.e1,x.w).w
w=x.p
v=B.a([B.bJ_(!1,f.a.r,"INVESTMENT PLANS",e),A.d1],w)
u=a0.x
if(u!=null){t=u.d.bO()
s=A.a.aT(A.o.u(B.bB(t)),2,"0")
r=A.a.aU(A.o.u(B.bw(t)+1),2)
q=B.m(18)
p=B.G(D.aar,A.r,2.2)
o=x.V
n=B.a([new B.a9(0,A.G,B.W(89,A.pX.l()>>>16&255,A.pX.l()>>>8&255,A.pX.l()&255),A.eH,20),new B.a9(0,A.G,B.W(102,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.dm,14)],o)
m=B.an(e,B.p(e,e,A.h,e,e,new B.o(B.W(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),e,e,e,e,e,A.a6),e,120,e,e,e,e,e,120),e,e,e,-20,-24,e)
l=B.m(10)
k=B.G(D.aar,A.r,3.4)
o=B.a([new B.a9(0,A.G,B.W(166,A.pX.l()>>>16&255,A.pX.l()>>>8&255,A.pX.l()&255),A.dG,10),new B.a9(0,A.G,B.W(89,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.cD,6)],o)
o=B.A(B.a([B.p(e,e,A.h,e,e,new B.o(e,e,k,l,o,new B.a8(A.ax,A.aE,A.w,D.cLl,D.coE,e),A.n),e,42,e,e,e,e,e,56),A.b6,f.b1v(a2,!0)],w),A.m,e,A.e,A.j,0,e,e)
l=B.C6(u.a,1,A.Z,D.ewA)
k=u.b
j=u.c
i=B.C6("Making $"+B.du(k*j)+" Daily",1,A.Z,D.ewN)
h=B.C6(f.aXB(k),1,A.Z,D.eqd)
r=B.A(B.a([B.C(B.u(B.a([D.eLe,B.C6(a0.c,1,A.Z,D.aJV)],w),A.F,e,A.e,A.j,0,A.p),1),B.u(B.a([D.eL0,B.d(s+"/"+r,e,e,e,e,e,e,D.aJV,e,e,e)],w),A.dD,e,A.e,A.j,0,A.p)],w),A.m,e,A.e,A.j,0,e,e)
s=B.p(e,e,A.h,B.W(89,D.vW.l()>>>16&255,D.vW.l()>>>8&255,D.vW.l()&255),e,e,e,1,e,e,e,e,e,e)
j=B.A(B.a([f.anH("INVESTED","$"+B.du(k),!0),f.anH("DAILY ROI",A.k.ab(j*100,2)+"%",!0),f.anH("DAYS LEFT",""+(261-u.f)+" d",!0)],w),A.m,e,A.hu,A.j,0,e,e)
k=B.du(u.e)
u=u.f
g=261-u>0?"ACTIVE":"ENDED"
A.d.v(v,B.a([D.eR7,A.tA,B.p(e,new B.am(A.V,e,A.a9,A.q,B.a([m,B.u(B.a([o,A.P,D.eJN,A.bw,l,A.au,i,A.au,h,A.P,r,A.ar,s,A.ar,j,A.au,B.C6("Earned $"+k+" \u2022 Clocked "+u+"/261 \u2022 "+g,1,A.Z,D.ew_)],w),A.F,e,A.e,A.R,0,A.p)],w),e),A.h,e,e,new B.o(e,e,p,q,n,D.bGl,A.n),e,e,e,e,A.bA,e,e,1/0),A.a3o],w))}v.push(D.eCp)
v.push(A.tA)
A.d.v(v,new B.I(a1,new C.d70(f,a2),B.T(a1).k("I<1,r>")))
return B.ce(e,A.K,B.br(!1,B.cf(B.u(v,A.F,e,A.e,A.j,0,A.p),A.q,e,A.z,e,new B.L(20,10,20,124+d.r.d),e,e,A.ah),!0,!1,A.ag,!0,!0),e,!1,!1,e,e)},
b1v(d,e){var w=null,v=B.W(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.m(8),t=B.G(A.ja,A.r,1)
return B.p(w,B.A(B.a([B.V(A.afV,A.c,w,w,w,16),A.d4,B.d("TAP",w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,10,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.R,0,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ew,w,w,w)},
aXB(d){var w=A.a.aT(A.o.u(A.k.U(d*100)),4,"0")
return"****  ****  ****  "+A.a.aU(w,w.length-4)},
anH(d,e,f){var w=null,v=B.W(217,D.vW.l()>>>16&255,D.vW.l()>>>8&255,D.vW.l()&255)
v=B.d(d,w,w,w,w,w,w,B.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.u(B.a([v,A.bw,B.C6(e,w,w,B.l(w,w,E.zd,w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),A.F,w,A.e,A.j,0,A.p)},
cam(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gcLu(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
o=B.a([new B.a9(0,A.G,B.W(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.Pp,16),new B.a9(0,A.G,B.W(115,A.aj.l()>>>16&255,A.aj.l()>>>8&255,A.aj.l()&255),A.dm,14),new B.a9(0,A.G,B.W(51,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.cD,8)],p)
n=B.an(d,B.p(d,d,A.h,d,d,new B.o(d,d,d,d,d,new B.bS(A.B,0.5,A.w,d,0,B.a([B.W(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),B.W(0,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)],x.O),d,d),A.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=B.m(5)
l=B.G(A.c,A.r,2.2)
k=B.aX(4286436348)
k=B.W(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=B.W(A.k.U(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
i=B.aX(4279150057)
h=x.p
p=B.A(B.a([new B.a3(44,44,new B.am(A.V,d,A.a9,A.h,B.a([B.an(d,B.et(A.B,0.7853981633974483,B.p(d,d,A.h,d,d,new B.o(d,d,l,m,B.a([new B.a9(0.5,A.G,k,A.J,14),new B.a9(0,A.G,j,A.J,6),new B.a9(0,A.G,B.W(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new B.v(0,2),4)],p),D.bF7,A.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.dR3],h),d),d),A.b6,e.b1v(b2,!0)],h),A.m,d,A.e,A.j,0,d,d)
a6=B.C6(a6,1,A.Z,D.ena)
i=B.C6(e.aXB(a3),1,A.Z,D.eAW)
j=B.A(B.a([e.aX2(A.k.ab(2.86,2)+"%"),A.ez,e.aX2("261d")],h),A.m,d,A.e,A.j,0,d,d)
k=B.C(B.u(B.a([D.eDy,B.C6("$"+B.du(a3),1,A.Z,D.ezN)],h),A.F,d,A.e,A.j,0,A.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=B.A(B.a([k,B.d(m,d,d,d,d,d,d,D.enV,d,d,d)],h),A.dD,d,A.e,A.j,0,d,d)
k=B.p(d,d,A.h,B.W(89,A.bB.l()>>>16&255,A.bB.l()>>>8&255,A.bB.l()&255),d,d,d,1,d,d,d,d,d,d)
l=B.A(B.a([B.C(e.auy("Daily","$"+B.du(a4)),1),A.ez,B.C(e.auy("Total","$"+B.du(a4*261)),1),A.ez,B.C(e.auy("Days","261"),1)],h),A.m,d,A.e,A.j,0,d,d)
g=q?d:new C.d7_(e,b3,a3,t)
f=A.k.U(127.5)
f=B.ff(d,d,A.bj,B.W(f,A.aj.l()>>>16&255,A.aj.l()>>>8&255,A.aj.l()&255),B.W(f,A.aJ.l()>>>16&255,A.aJ.l()>>>8&255,A.aJ.l()&255),d,3,d,d,A.aO,d,d,d,d,new B.b5(B.m(10),D.aPy),d,d,d,d,d)
return B.p(d,new B.am(A.V,d,A.a9,A.h,B.a([n,B.u(B.a([p,A.bw,D.eLU,A.bw,a6,A.d5,i,A.fW,j,A.fW,m,A.fW,k,A.fW,l,A.P,new B.a3(1/0,40,B.i3(B.eY(A.B,B.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.eoi,d,d,d),A.h,A.e8),g,f),d)],h),A.F,d,A.e,A.R,0,A.p)],h),d),A.h,d,d,new B.o(d,d,w,a0,o,D.bGT,A.n),d,d,d,A.ks,D.beF,d,d,1/0)},
aX2(d){var w=null,v=B.W(115,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.m(5),t=B.G(A.ct,A.r,1)
return B.p(w,B.d(d,w,w,w,w,w,w,D.eny,w,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.DI,w,w,w)},
auy(d,e){var w=null,v=B.W(97,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.m(7),t=B.G(A.aJ,A.r,1)
return B.p(w,B.u(B.a([B.d(d,w,w,w,w,w,w,D.ewl,w,w,w),A.ya,B.eY(A.a_,B.d(e,w,w,w,w,w,w,D.eyS,w,w,w),A.h,A.dp)],x.p),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.lU,w,w,w)}}
C.afB.prototype={
S(){var w=null,v=B.a([],x._),u=$.at()
return new C.aul(v,new B.ao(A.aq,u),new B.ao(A.aq,u),B.m6(0,w,w),new B.hQ(),D.OT,C.aer(),B.a([],x.fw),B.aZ(x.N),B.m6(0,w,w))}}
C.aul.prototype={
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
if(s.length!==0)u.H(0,s)}r.a9s()
r.N9()
r.anj()
r.cmG()
r.cmV()
$.aS.x1$.push(new C.cw2(r))
r.a.toString},
N9(){var w=0,v=B.j(x.H),u,t=this,s
var $async$N9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.anb(),$async$N9)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cvn(t,s))
case 1:return B.h(u,v)}})
return B.i($async$N9,v)},
gaw8(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gN5())return!0
return!1},
gN5(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaQC(){var w,v=this.CW
if(v==null)return A.bu
w=v.bv(new B.N(Date.now(),0,!1))
return w.a<0?A.bu:w},
buC(){var w=this
if(w.a.c.w)return
if(w.gN5()){if(!w.cx)w.n(new C.cvd(w))}else if(w.cx)w.n(new C.cve(w))},
cgf(){this.n(new C.cvx(this))},
t1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$t1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.n(new C.cvu(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.n(new C.cvv(t))
w=1
break}w=3
return B.b(C.c3p(o.a,s),$async$t1)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return B.b(C.c3q(t.a.c.a,s),$async$t1)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.n(new C.cvw(t,r,q))
t.coD()
t.buC()
if(r===3)t.WD(r)}case 1:return B.h(u,v)}})
return B.i($async$t1,v)},
WD(d){return this.bVx(d)},
bVx(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$WD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return B.b(C.bz8(q,r,new C.cvp(t),d,s.c.a),$async$WD)
case 3:case 1:return B.h(u,v)}})
return B.i($async$WD,v)},
wq(d){return this.bw2(d)},
anj(){return this.wq(!1)},
bw2(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$wq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return B.b(B.a5F(k,C.h2t(l.d)),$async$wq)
case 3:j=m
w=4
return B.b(C.c3P(k),$async$wq)
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
return B.b(C.a52(k),$async$wq)
case 10:n=f
if(t.c==null){w=1
break}t.n(new C.cvf(m,t,r,o,n))
case 1:return B.h(u,v)}})
return B.i($async$wq,v)},
Om(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Om=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.N9(),$async$Om)
case 3:s=t.c
if(s==null){w=1
break}r=B.eH(new C.cvs(t),!1,null,x.H)
w=4
return B.b(B.a7(s,!1).cr(r),$async$Om)
case 4:w=5
return B.b(t.N9(),$async$Om)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Om,v)},
cqI(){this.n(new C.cvQ(this))},
cmV(){var w=this,v=w.go
if(v!=null)v.a9(0)
if(w.a.c.w)return
w.go=B.dE(A.rC,new C.cvK(w))},
coD(){var w=this,v=w.id
if(v!=null)v.a9(0)
w.id=null
if(!w.gN5()||w.CW==null)return
w.id=B.dE(A.h_,new C.cvN(w))},
cmG(){var w=this,v=w.fy
if(v!=null)v.a9(0)
w.fy=B.dE(A.iV,new C.cvJ(w))
w.DR()},
DR(){return this.coC()},
coC(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$DR=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.az
t=4
w=7
return B.b(B.aw(),$async$DR)
case 7:q=e
p=B.aR(J.q(q.a,"app_config"))
if(p!=null&&p.length!==0){o=A.Q.aC(0,p,null)
if(x.f.b(o)){m=B.BT(B.Z(o,x.N,x.z)).az
i.a=m
r.a.f.az=m}}w=10
return B.b(B.Jk(),$async$DR)
case 10:w=e?8:9
break
case 8:w=11
return B.b(B.aLW(),$async$DR)
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
break}if(i.a!==r.ay)r.n(new C.cvL(i,r))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$DR,v)},
b0o(){A.d.aY(this.f,new C.cvI())},
a9s(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9s=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.L6(t.a.c.a),$async$a9s)
case 3:q=e
if(t.c==null){w=1
break}s=B.a([],x._)
if(J.cs(q)){A.d.v(s,q)
A.d.aY(s,new C.cvk())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(B.D(["role","ai","text",r,"at",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z))}t.n(new C.cvl(t,s))
t.a_a(!0)
B.bK(A.jc,new C.cvm(t),x.H)
case 1:return B.h(u,v)}})
return B.i($async$a9s,v)},
acN(){var w=0,v=B.j(x.H),u=this
var $async$acN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.al2(u.a.c.a,u.f),$async$acN)
case 2:return B.h(null,v)}})
return B.i($async$acN,v)},
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
a8s(d){var w,v=this
v.n(new C.cvi(v,d))
w=v.e
w===$&&B.c()
if(w.f.length!==0)w.A2(d,A.co,A.kq)
else $.aS.x1$.push(new C.cvj(v,d))
if(d===0)v.a_a(!0)
if(d===1)v.ci8(!0)},
a_a(d){$.aS.x1$.push(new C.cvA(this,d))},
avM(){return this.a_a(!1)},
Zw(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Zw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ZT(),$async$Zw)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==A.a.i(t.a.f.r))t.n(new C.cvt(t))
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
return B.b(C.an6(a9.a,b0),$async$ms)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return B.b(q.t1(),$async$ms)
case 10:q.n(new C.cvB(q))
w=1
break
case 8:w=11
return B.b(q.t1(),$async$ms)
case 11:if(q.c!=null&&q.ch===3)q.WD(3)
case 6:case 4:q.n(new C.cvC(q,c5))
C.S3(q.a.c.a,"user",c5)
q.avM()
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
if(b1.length!==0&&q.c!=null)q.n(new C.cvD(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.bxh("",null)
q.n(new C.cvE(q,p))
C.S3(q.a.c.a,"ai",p)
q.avM()
r=[1]
w=14
break}o=B.mE(a9)
a9=q.a
n=""
m=C.h2t(a9.d)
w=C.h2m(c5)?20:21
break
case 20:w=22
return B.b(C.c3O(q.a.c.a),$async$ms)
case 22:q.db=c9
w=23
return B.b(q.wq(!0),$async$ms)
case 23:case 21:w=24
return B.b(B.a5F(q.a.c.a,m),$async$ms)
case 24:l=c9
k=C.hk8(l)
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
h=C.fO3(i,25)
w=26
return B.b(C.a52(q.a.c.a),$async$ms)
case 26:g=c9
f=C.fPC(g)
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
return B.b(C.aes(a9,q.a.c.a,c5),$async$ms)
case 27:a0=c9
a1=""
if(C.h2m(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:A.a.i(b2).length!==0)===!0){b2.toString
b8=A.a.i(b2)}else{a9=a9.c
b8=A.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=B.t(d)
b4=B.t(j)
b5=q.a.c.w?"\n"+C.hFJ(m)+"\n":""
b6=J.aa(n)!==0?"\n"+B.t(n)+"\n":""
b9=J.aa(a0)!==0?"\n"+B.t(a0)+"\n":""
c0=B.t(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.heu(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+B.t(c5)
w=28
return B.b(B.qh(o,a2,A.h4,null),$async$ms)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.bxh(a8.a,a3.a)
a4=c2
a5=B.h1J(a4)
c3=a5.a
a8.b=c3
if(A.d.gah(c3)){a9=B.z(C.hIn(c5),x.an)
a6=a9
J.fT(a6,C.hIo(c5))
J.fT(a6,C.hIp(c5))
J.fT(a6,B.h1b(c5))
J.fT(a6,C.hIs(c5,q.a.c.w))
a8.b=a6}c3=C.hHE(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return B.b(B.aeI(c3,a6,m,q.a.c.a),$async$ms)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.n(new C.cvF(a8,q,a7))
C.S3(q.a.c.a,"ai",a7)
if(J.cs(a8.b)&&q.c!=null)q.Il(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.n(new C.cvG(q))
C.S3(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.n(new C.cvH(q))
q.avM()
q.acN()
if(!q.a.c.w)q.t1()
w=r.pop()
break
case 15:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ms,v)},
c9m(d){var w=B.R(x.N,x.z)
w.m(0,"type",d.a)
w.v(0,d.b)
return w},
c9n(d){var w,v,u,t,s,r,q,p=J.q(d,"phoneActions")
if(!x.j.b(p))return A.hX
w=B.a([],x.Z)
for(v=J.aW(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gT(v)
if(u.b(r)){q=B.c6U(B.Z(r,t,s))
if(q!=null)w.push(q)}}return w},
Il(d){return this.cgJ(d)},
cgJ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return B.b(C.aeD(p,o,new C.cvy(t,p)),$async$Il)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return B.b(B.F6(p,null,o,!1,!0,t.a.c.a),$async$Il)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.F(r).f
p.P(new B.aY(new B.w(m,null,null,null,null,null,null,null,null,null,null,null),A.cl,null,null,null,null,null,null,null,null,null,null,null,A.o0,!1,null,null,null,A.q,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return B.b(B.F6(p,l.f,o,k,n,j),$async$Il)
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
return B.b(C.aUM(p,B.a([new C.qK("out_"+1000*o,new B.N(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$Il)
case 14:t.anj()
case 13:p=t.c.F(r).f
p.P(new B.aY(new B.w(m,null,null,null,null,null,null,null,null,null,null,null),A.dk,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null))
w=3
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Il,v)},
Q2(d){return this.cp8(d)},
cp8(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Q2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return B.b(C.aeD(d,n,new C.cvP(t)),$async$Q2)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return B.b(B.F6(d,null,n,!1,!0,t.a.c.a),$async$Q2)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.F(x.q).f.P(B.b_(null,null,null,A.cl,null,A.q,null,B.d(s,null,null,null,null,null,null,null,null,null,null),null,A.o0,null,null,null,null,null,null,null,null,null,null))
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
return B.b(B.F6(d,q.f,r,p,n,o),$async$Q2)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.F(x.q).f.P(B.b_(null,null,null,A.dk,null,A.q,null,B.d(s,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Q2,v)},
ci8(d){$.aS.x1$.push(new C.cvz(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.K(d).ax.a===A.H,j=k?A.dd:A.zk,i=m.d
i===$&&B.c()
w=x.O
w=k?B.a([A.aaS,D.b2E],w):B.a([A.aK,A.rc],w)
v=B.m(22)
u=B.a([new B.a9(0,A.G,B.W(71,A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255),A.cv,16)],x.V)
t=m.a.c.w?m.gc58():l
s=B.W(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
r=B.G(A.c3,A.r,1.5)
t=B.aJ(l,B.p(l,C.fEg(m.a.f.Q,48),A.h,l,l,new B.o(s,l,r,l,l,l,A.a6),l,48,l,l,l,l,l,48),A.z,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,A.af)
r=B.d("NGMY Helper",l,1,A.Z,l,l,l,A.dP,l,l,l)
s=B.p(l,l,A.h,l,l,D.aRD,l,8,l,l,l,l,l,8)
if(m.gaw8()&&m.d===0)q=m.gN5()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=B.p(l,B.A(B.a([t,A.ba,B.C(B.u(B.a([r,A.bw,B.A(B.a([s,A.bp,B.C(B.d(q,l,1,A.Z,l,l,l,B.l(l,l,B.W(A.k.U(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,A.cp,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),A.m,l,A.e,A.j,0,l,l)],p),A.F,l,A.e,A.j,0,A.p),1),B.aF(l,l,l,l,A.mI,l,l,l,new C.cvV(d),l,l,l,l,l,l)],p),A.m,l,A.e,A.j,0,l,l),A.h,l,l,new B.o(l,l,l,v,u,new B.a8(A.ax,A.aE,A.w,w,l,l),A.n),l,l,l,F.acv,D.bfk,l,l,l)
v=k?D.rd:A.c
u=B.m(14)
t=B.G(k?A.bG:A.er,A.r,1)
u=B.p(l,B.A(B.a([m.byF(),m.coS(1,A.lr,"Music")],p),A.m,l,A.e,A.j,0,l,l),A.h,l,l,new B.o(v,l,t,u,l,l,A.n),l,l,l,l,A.ef,l,l,l)
t=m.e
t===$&&B.c()
if(m.gaw8()){v=B.a([],p)
if(m.gN5()){s=B.W(38,A.dk.l()>>>16&255,A.dk.l()>>>8&255,A.dk.l()&255)
r=B.m(12)
q=B.G(B.W(115,A.dk.l()>>>16&255,A.dk.l()>>>8&255,A.dk.l()&255),A.r,1)
v.push(new B.B(A.JM,B.p(l,B.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hiu(m.gaQC())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.eyl,A.L,l,l),A.h,l,l,new B.o(s,l,q,r,l,l,A.n),l,l,l,l,A.ei,l,l,1/0),l))}if(m.cy&&!m.gN5()){s=B.W(31,A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255)
r=B.m(12)
q=B.m(12)
o=B.V(A.rQ,k?A.iC:A.hc,l,l,l,16)
v.push(new B.B(A.JM,B.aD(!1,A.X,!0,r,B.aH(!1,q,!0,new B.B(A.ei,B.A(B.a([o,A.bp,B.d("Back to NGMY Helper AI",l,l,l,l,l,l,B.l(l,l,k?A.iC:A.hc,l,l,l,l,l,l,l,l,12,l,l,A.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),A.m,l,A.b5,A.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcge(),l,l,l,l,l,l,l),A.h,s,0,l,l,l,l,l,A.ac),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcqH():l
v.push(B.C(new C.an9(s,q,new C.cvW(),r,o,l),1))
v=B.u(v,A.m,l,A.e,A.j,0,A.p)}else v=m.byG(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.fQt(r)
t=B.a([w,A.aa,new B.B(A.iX,u,l),A.P,B.C(B.fRr(B.a([v,new C.anc(q,o,n,new C.cvX(m,d),s,l)],p),A.q,t,A.z,new C.cvY(m),l),1)],p)
if(m.d===0&&!m.gaw8()){w=B.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a_8:D.Zv
w.push(new B.a3(l,36,B.hF(l,new C.cvZ(m),v.length,l,l,A.aY,new C.cw_(),!1),l))}if(m.ax&&m.f.length<=1)w.push(A.P)
v=m.r
u=B.l(l,l,k?A.c:A.bi,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=B.l(l,l,k?A.aB:A.dx,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?A.x:A.c
r=B.W(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=B.m(22)
o=B.m(22)
n=k?A.be:A.eZ
u=B.C(B.aK(l,A.U,!1,l,!0,A.q,l,B.aL(),v,l,l,l,l,l,2,B.bl(l,new B.b1(4,q,A.W),l,A.zD,l,l,l,l,!0,new B.b1(4,o,new B.ax(n,1,A.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ae,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cw0(m),l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,u,!0,A.a5,l,A.am,l,A.aIQ,l,l),1)
s=m.at
r=s?l:m.gcj8()
w.push(B.A(B.a([u,new B.H8(v,A.aK,l),A.bp,B.aD(!1,A.X,!0,l,B.aH(!1,l,!0,new B.a3(44,44,s?D.dLT:P.ahP,l),A.cE,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),A.h,A.aK,0,l,l,A.cE,l,l,A.ac)],p),A.dD,l,A.e,A.j,0,l,l))
w=B.u(w,A.m,l,A.e,A.R,0,A.p)
v=k?A.kQ:A.c
t.push(B.tk(A.pM,B.p(l,new B.B(A.Dv,w,l),A.h,l,l,new B.o(v,l,B.G(k?B.W(41,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.W(18,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.r,1),A.pM,l,l,A.n),l,l,l,l,l,l,l,l),14,!1))}return new B.U8(i,new C.cw1(m),B.ce(l,j,B.br(!0,B.u(t,A.m,l,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),l,!1,!1,l,l),l)},
byF(){var w,v,u,t,s,r,q=null,p=this.d
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
return B.C(B.aJ(q,B.dg(q,B.A(B.a([s,A.bp,B.d("Chat",q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.m,q,A.b5,A.j,0,q,q),q,q,A.b9,new B.o(p,q,t,u,q,q,A.n),A.eD,q,q,q,A.wh,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cvg(this),q,q,q,q,q,q,!1,A.af),1)},
coS(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
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
return B.C(B.aJ(q,B.dg(q,B.A(r,A.m,q,A.b5,A.j,0,q,q),q,q,A.b9,new B.o(p,q,t,u,q,q,A.n),A.eD,q,q,q,A.wh,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cvO(this,d),q,q,q,q,q,q,!1,A.af),1)},
byG(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.b7c:B.W(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
w=B.m(18)
v=B.G(d?A.du:A.aJ,A.r,1)
u=q===0?1:q
return B.p(s,B.jT(!0,s,t.ok,new C.cvh(t,e,d),u,s,A.c1,s,s,!1,!1),A.h,s,s,new B.o(r,s,v,w,s,s,A.n),s,s,s,A.iX,s,s,s,s)},
aKl(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a6(d),m=J.y(n.h(d,"role"),"user"),l=m?A.hX:this.c9n(d),k=m?A.m4:A.e,j=x.p,i=B.a([],j),h=!m
if(h)A.d.v(i,B.a([new B.a3(28,28,C.fEg(this.a.f.Q,28),o),A.ab],j))
w=m?A.dD:A.F
j=B.a([],j)
if(h)j.push(D.dM8)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=A.aK
else u=e?A.U3:A.aO
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
n=p}j.push(B.fAp(m,B.p(o,n,A.h,o,o,new B.o(u,o,r,new B.bv(A.kJ,A.kJ,new B.b3(t,t),new B.b3(s,s)),q,o,A.n),o,o,o,o,Aa.V8,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(B.h1O(l,e,this.gcp7()))
i.push(new B.dk(1,A.cj,B.u(j,w,o,A.e,A.j,0,A.p),o))
if(m)i.push(A.d4)
return new B.B(A.d7,B.A(i,A.dD,o,k,A.j,0,o,o),o)},
byE(d,e){return this.aKl(d,e,!1)}}
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
C.aH9.prototype={
Z(){this.a0()
$.xE().aJ(0,this.gD6())},
p(){$.xE().a1(0,this.gD6())
this.a2()}}
C.aI4.prototype={
Z(){this.a0()
$.xE().aJ(0,this.gD6())},
p(){$.xE().a1(0,this.gD6())
this.a2()}}
C.TY.prototype={
a3(){return"NgmySnapshotResolveOutcome."+this.b}}
C.akN.prototype={
S(){return new C.az9()}}
C.az9.prototype={
Z(){var w,v=this
v.a0()
w=v.a
v.d=w.d
v.e=B.bi(w.e,!0,x.o)
v.f=v.a.f},
ko(d){var w=null,v=this.c
if(v==null)return
v.F(x.q).f.P(B.b_(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
zg(d,e){return this.cu3(d,e)},
cu3(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this
var $async$zg=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.n(new C.dnq(q,e))
t=3
w=6
return B.b(d.$0(),$async$zg)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.n(new C.dnr(q))
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
break}t.n(new C.dnh(t,s))
case 1:return B.h(u,v)}})
return B.i($async$zG,v)},
a70(){var w=0,v=B.j(x.gE),u,t=this,s,r,q,p
var $async$a70=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zG(),$async$a70)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&B.c()
q=t.e
q===$&&B.c()
p=t.f
p===$&&B.c()
u=B.LU(s,B.Ic(B.bTk(r,q,s,p).eD(),null,"  "))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a70,v)},
Vo(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.oB(s,t.a.c,!1),$async$Vo)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.zg(new C.dnf(t),"Preparing download\u2026"),$async$Vo)
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
return B.b(t.zg(new C.dnp(t),"Creating QR code\u2026"),$async$WO)
case 4:case 1:return B.h(u,v)}})
return B.i($async$WO,v)},
WN(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$WN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.hAR(r),$async$WN)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}w=4
return B.b(t.zg(new C.dne(t,s),"Looking up code\u2026"),$async$WN)
case 4:case 1:return B.h(u,v)}})
return B.i($async$WN,v)},
aah(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$aah=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.wf.c2().Ks(A.O_,A.rL,!0),$async$aah)
case 7:r=e
p=r
q=p==null?null:J.fo(p.a)
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
return B.i($async$aah,v)},
yV(d,e,f){return this.bAX(d,e,f)},
aLz(d,e){return this.yV(d,!1,e)},
bAW(d){return this.yV(d,!1,!1)},
bAX(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$yV=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zG(),$async$yV)
case 3:if(t.c==null){w=1
break}if(!C.bTp(d,t.a.c,null)){t.ko(C.bTq(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&B.c()
s=!C.heb(d,s)}if(s){t.ko(y.B)
w=1
break}r=d.as
q=J.ci(r)
s=t.c
s.toString
w=4
return B.b(C.hB3(s,q,t.a.c,d),$async$yV)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=B.lq(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,A.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&B.c()
r=o}w=5
return B.b(B.rK(s,p,r,!1,null,null,d.ax),$async$yV)
case 5:if(t.c==null){w=1
break}t.n(new C.dnd(t,p,r,d))
t.ko("Restored your local Growth Income. Go back to see it updated.")
case 1:return B.h(u,v)}})
return B.i($async$yV,v)},
aag(){var w=0,v=B.j(x.H),u=this
var $async$aag=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.zg(new C.dng(u),"Reading file\u2026"),$async$aag)
case 2:return B.h(null,v)}})
return B.i($async$aag,v)},
UK(d){return this.bCc(d)},
bCc(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$UK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&B.c()
s=new B.cW("local_qr_dep_"+1000*r,q.a,d,A.fc,A.f8,"Admin deposit ($"+B.du(d)+")",null,null,A.cg,new B.N(Date.now(),0,!1))
C.c5Q(t.d,s)
q=t.e
q===$&&B.c()
r=B.z(q,x.o)
r.push(s)
w=3
return B.b(B.rK(t.a.c,t.d,r,!0,null,null,null),$async$UK)
case 3:w=4
return B.b(t.zG(),$async$UK)
case 4:if(t.c==null){w=1
break}t.ko("Deposited $"+B.du(d)+" to your local wallet.")
case 1:return B.h(u,v)}})
return B.i($async$UK,v)},
b_P(d){var w=null
return B.cg(w,w,!0,w,new C.dnn(),d,w,!0,!0,x.N)},
TT(d){return this.buw(d)},
buw(d){var w=0,v=B.j(x.H),u,t=this,s
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
Dr(d){return this.cdX(d)},
cdX(d){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Dr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zG(),$async$Dr)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return B.b(C.aXE(d,t.a.c),$async$Dr)
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
return B.b(t.b_P(r),$async$Dr)
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
return B.b(C.c5J(d,o,n.a,r,p),$async$Dr)
case 7:w=6
return B.b(t.TT(f),$async$Dr)
case 6:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Dr,v)},
Ds(d){return this.cdY(d)},
cdY(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ds=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zG(),$async$Ds)
case 3:if(t.c==null){w=1
break}w=4
return B.b(C.c5I(d,t.a.c),$async$Ds)
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
return B.b(t.b_P(r),$async$Ds)
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
for(;;)switch(w){case 0:if(!B.BA()){t.ko("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return B.b(B.a7(s,!1).cr(B.eH(new C.dni(),!0,null,x.N)),$async$Nn)
case 3:r=e
if(r==null||A.a.i(r).length===0){w=1
break}w=A.a.a_(A.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return B.b(t.zg(new C.dnj(t,r),"Applying deposit\u2026"),$async$Nn)
case 6:w=1
break
case 5:w=7
return B.b(t.zg(new C.dnk(t,r),"Loading\u2026"),$async$Nn)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Nn,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.K(d).ax.a===A.H,m=n?A.iT:A.oO,l=n?A.c:A.M,k=n?A.aQ:A.aj,j=n?A.bG:A.x.j(0.06),i=x.p
j=B.A(B.a([B.aH(!1,o,!0,B.p(A.B,B.V(A.es,l,o,o,o,16),A.h,o,o,new B.o(j,o,o,o,o,o,A.a6),o,38,o,o,o,o,o,38),A.cE,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dns(d),o,o,o,o,o,o,o)],i),A.m,o,A.e,A.j,0,o,o)
w=B.d("Backup & Restore",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,A.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=B.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,A.cp,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=B.C(new C.Ze(D.bpk,"Download",E.a_p,u?o:p.gbHh(),o),1)
t=B.A(B.a([t,A.en,B.C(new C.Ze(A.j1,"Show QR",A.asK,u?o:p.gbX8(),o),1)],i),A.m,o,A.e,A.j,0,o,o)
u=p.r
s=B.C(new C.Ze(D.bpl,"Upload",A.Nq,u?o:p.gbX6(),o),1)
s=B.A(B.a([s,A.en,B.C(new C.Ze(A.iF,"Scan QR",D.cBP,u?o:p.gbX7(),o),1)],i),A.m,o,A.e,A.j,0,o,o)
u=p.r?o:p.gbX5()
r=n?A.c.j(0.06):A.aS.j(0.08)
q=B.m(16)
q=B.a([B.cL(B.a([j,A.ay,w,A.P,v,A.ka,t,A.ay,s,A.ay,new C.bnC(A.qk,"Enter Code",A.Zc,u,o),A.ka,B.p(o,B.A(B.a([B.V(A.hg,A.aS,o,o,o,18),A.av,B.C(B.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,A.a1,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),A.F,o,A.e,A.j,0,o,o),A.h,o,o,new B.o(r,o,o,q,o,o,A.n),o,o,o,o,A.iE,o,o,o)],i),o,A9.K0,o,o,A.ah,!1)],i)
if(p.r){j=n?A.hn:A.c
w=p.w
if(w==null)w="Working\u2026"
q.push(B.an(0,B.aD(!1,A.X,!0,o,new B.B(A.zG,B.A(B.a([I.aHO,A.ba,B.C(B.d(w,o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),A.m,o,A.e,A.j,0,o,o),o),A.h,j,8,o,o,o,o,o,A.ac),o,o,0,0,o,o))}return B.ce(o,m,B.br(!1,new B.am(A.V,o,A.a9,A.q,q,o),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.Ze.prototype={
B(d){var w=this,v=null,u=B.m(22),t=B.m(22),s=w.e,r=B.m(22),q=B.a([new B.a9(0,A.G,A.d.gai(s).j(0.35),A.dm,16)],x.V),p=A.c.j(0.22)
return B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.p(v,B.u(B.a([B.p(v,B.V(w.c,A.c,v,v,v,30),A.h,v,v,new B.o(p,v,v,v,v,v,A.a6),v,56,v,v,v,v,v,56),A.aa,B.d(w.d,v,v,v,v,v,v,A.qR,v,v,v)],x.p),A.m,v,A.b5,A.j,0,A.p),A.h,v,v,new B.o(v,v,v,r,q,new B.a8(A.ax,A.aE,A.w,s,v,v),A.n),v,140,v,v,A.c1,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.h,A.K,0,v,v,v,v,v,A.ac)}}
C.bnC.prototype={
B(d){var w=this,v=null,u=B.m(22),t=B.m(22),s=w.e,r=B.m(22),q=B.a([new B.a9(0,A.G,A.d.gai(s).j(0.35),A.dm,16)],x.V),p=A.c.j(0.22)
return B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.p(v,B.A(B.a([B.p(v,B.V(w.c,A.c,v,v,v,24),A.h,v,v,new B.o(p,v,v,v,v,v,A.a6),v,44,v,v,v,v,v,44),A.en,B.d(w.d,v,v,v,v,v,v,A.qR,v,v,v)],x.p),A.m,v,A.b5,A.j,0,v,v),A.h,v,v,new B.o(v,v,v,r,q,new B.a8(A.ax,A.aE,A.w,s,v,v),A.n),v,v,v,v,D.bhp,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.h,A.K,0,v,v,v,v,v,A.ac)}}
C.XT.prototype={
S(){return new C.beX()}}
C.beX.prototype={
gasI(){var w=this.e
return w===$?this.e=this.a.d:w},
Z(){var w=this
w.a0()
w.P0()
w.f=B.dE(A.nf,new C.dnw(w))},
p(){var w=this.f
if(w!=null)w.a9(0)
this.a2()},
P0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$P0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return B.b(B.v3(q.e,q.f),$async$P0)
case 3:q=e.a
s=B.bTk(q[3],q[1],t.a.e,q[4])
w=4
return B.b(B.LU(t.a.e,B.Ic(s.eD(),null,"  ")),$async$P0)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.n(new C.dnt(t,r))
case 1:return B.h(u,v)}})
return B.i($async$P0,v)},
B(d){var w=this,v=null,u=B.K(d).ax.a===A.H,t=u?A.iT:A.oO,s=u?A.hn:A.c,r=u?A.c:A.bi,q=B.eA(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,A.aKG,v,v,v,1,v,!0),p=B.m(24),o=B.G(A.aS.j(0.35),A.r,1),n=w.d,m=B.pj(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,A.c),l=B.d("Code: "+w.gasI(),v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=B.m(20),j=A.aS.j(0.12),i=B.m(20),h=x.p
i=B.aH(!1,k,!0,B.p(v,B.A(B.a([B.V(A.fx,A.aS,v,v,v,14),A.bp,B.d("Copy code",v,v,v,v,v,v,B.l(v,v,A.aS,v,v,v,v,v,v,v,v,12,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),A.m,v,A.e,A.R,0,v,v),A.h,v,v,new B.o(j,v,v,i,v,v,A.n),v,v,v,v,A.my,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dnu(w,d),v,v,v,v,v,v,v)
return B.ce(q,t,new B.B(A.a8,B.u(B.a([B.C(B.p(v,B.u(B.a([A.P,m,A.bs,l,A.P,i,A.ay,B.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,B.l(v,v,u?A.aQ:A.aj,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),A.L,v,v)],h),A.m,v,A.b5,A.j,0,A.p),A.h,v,v,new B.o(s,v,o,p,v,v,A.n),v,v,v,v,A.a8,v,v,1/0),1),A.aN,new B.a3(1/0,v,B.bJ(A.yk,new C.dnv(d),B.bk(A.aS,v,v,v,v,A.fV,v,v,v,v,v,v)),v)],h),A.m,v,A.e,A.j,0,A.p),v),v,!1,!1,v,v)}}
C.XU.prototype={
S(){return new C.beY(B.y7(A.wa,A.n3,A.t6))}}
C.beY.prototype={
p(){this.d.p()
this.a2()},
B(d){var w=null
return B.ce(B.eA(w,w,w,!0,!0,A.x,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.eRr,w,w,w,1,w,!0),A.x,B.y6(this.d,A.bM,new C.dnx(this,d)),w,!1,!1,w,w)}}
C.abY.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.K(a0).ax.a===A.H,k=l?A.hn:A.c,j=l?A.c:A.M,i=l?A.aQ:A.aj,h=l?A.be:A.er,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=B.m(26)
w=B.G(A.aS.j(0.35),A.r,1)
v=B.a([new B.a9(0,A.G,A.aS.j(0.16),A.kH,36)],x.V)
u=B.p(m,D.bvp,A.h,m,m,new B.o(m,m,m,B.m(18),A.a_o,D.bEx,A.n),m,58,m,m,m,m,m,58)
t=B.d("Restore local backup?",m,m,m,m,m,m,B.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,A.u,m,m,!0,m,-0.3,m,m,m,m,m,m),A.L,m,m)
s=B.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,B.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),A.L,m,m)
r=l?A.iT:A.oO
q=B.m(18)
p=B.G(A.aS.j(0.22),A.r,1)
o=x.p
g=B.a([new C.O5("Account",A.a.i(this.d),i,j,m),A.T,new C.O5("Balance","$"+B.du(g.d),i,j,m)],o)
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
return B.eB(m,A.K,new B.d2(A.Sw,B.bQ(new B.B(A.wt,B.u(B.a([u,A.aN,t,A.P,s,A.bs,g,A.ay,B.p(m,B.A(B.a([n,A.ab,B.C(B.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,B.l(m,m,l?A.bK:A.iA,m,m,m,m,m,m,m,m,11.5,m,m,A.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),A.F,m,A.e,A.j,0,m,m),A.h,m,m,new B.o(r,m,p,q,m,m,A.n),m,m,m,m,A.ei,m,m,1/0),A.d1,B.A(B.a([B.C(B.dU(A.mX,new C.eEF(a0),B.d9(m,m,m,m,m,m,m,m,m,j,m,m,A.ca,m,new B.b5(B.m(14),A.W),new B.ax(h,1,A.r,-1),m,m,m,m)),1),A.av,B.C(B.bJ(D.eBO,new C.eEG(a0),B.bk(A.aS,m,m,m,m,m,A.ca,m,new B.b5(B.m(14),A.W),m,m,m)),2)],o),A.m,m,A.e,A.j,0,m,m)],o),A.m,m,A.e,A.R,0,A.p),m),new B.o(k,m,w,e,v,m,A.n),A.b7),m),m,m,m,A.em,A.cZ,m,m,m)}}
C.O5.prototype={
B(d){var w=this,v=null
return B.A(B.a([new B.a3(92,v,B.d(w.c,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),B.C(B.d(w.d,v,v,v,v,v,v,B.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,A.I,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.F,v,A.e,A.j,0,v,v)}}
C.X0.prototype={
S(){return new C.awv(new B.ao(A.aq,$.at()),B.k6(!0,null,!0,!0,null,null,!1))}}
C.awv.prototype={
Z(){this.a0()
$.aS.x1$.push(new C.cYg(this))},
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.e.p()
this.a2()},
bXa(){var w,v=this.c
v.toString
w=A.a.i(this.d.a.a)
B.a7(v,!1).K(w)
return null},
B(d){var w=this,v=null,u=B.K(d).ax.a===A.H,t=u?A.hn:A.c,s=u?A.c:A.M,r=u?A.aQ:A.aj,q=u?A.iT:A.oO,p=u?A.be:A.er,o=B.m(24),n=B.G(A.aS.j(0.35),A.r,1),m=B.a([new B.a9(0,A.G,A.aS.j(0.18),A.fz,32)],x.V),l=B.p(v,A8.aiy,A.h,v,v,new B.o(v,v,v,B.m(18),A.a_o,D.bH2,A.n),v,56,v,v,v,v,v,56),k=B.d("Enter restore code",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,A.u,v,v,!0,v,-0.3,v,v,v,v,v,v),A.L,v,v),j=B.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),A.L,v,v),i=B.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,A.I,v,v,!0,v,8,v,v,v,v,v,v),h=B.a([new B.tB(B.ad("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bn6(new C.cYd())],x.G),g=B.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,A.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return B.eB(v,A.K,new B.d2(A0.Ib,B.bQ(new B.B(A.wt,B.u(B.a([l,A.aN,k,A.P,j,A.dW,B.aK(!1,A.U,!1,v,!0,A.q,v,B.aL(),w.d,v,v,v,v,v,2,B.bl(v,v,v,A.DB,v,v,"",v,!0,new B.b1(4,B.m(16),new B.ax(p,1,A.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new B.b1(4,B.m(16),D.aPw),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),A.z,!0,v,!1,v,!1,w.e,A.ae,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.cYe(w),v,!1,v,v,!1,v,!0,v,A.a8,v,v,v,v,v,v,v,v,v,v,v,i,!0,A.L,v,A.lA,v,v,v,v),A.dW,B.A(B.a([B.C(B.dU(A.mX,new C.cYf(d),B.d9(v,v,v,v,v,v,v,v,v,s,v,v,A.ca,v,new B.b5(B.m(14),A.W),new B.ax(p,1,A.r,-1),v,v,v,v)),1),A.av,B.C(B.bJ(D.eF9,w.gbX9(),B.bk(A.aS,v,v,v,v,v,A.ca,v,new B.b5(B.m(14),A.W),v,v,v)),2)],f),A.m,v,A.e,A.j,0,v,v)],f),A.m,v,A.e,A.R,0,A.p),v),new B.o(t,v,n,o,m,v,A.n),A.b7),v),v,v,v,A.K2,A.cZ,v,v,v)}}
C.alh.prototype={
S(){return new C.bf3(A.cA)},
hu(d){return this.x.$1(d)},
bn(){return this.y.$0()}}
C.bf3.prototype={
Z(){var w,v=this
v.a0()
w=v.a
w.toString
$.rI=$.rI+1
v.r=A.o.M(A.o.D(C.fhi(w.e,w.d.y2),1,600))
w=v.a
if(!J.l7(w.d.y2,w.e))v.r=C.hGb(v.a.e)
v.w=B.dE(A.h_,new C.dtS(v))},
p(){var w=this.w
if(w!=null)w.a9(0)
this.c8d()
C.aWr()
this.a2()},
c8d(){var w,v,u,t,s,r=this,q=null
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
r.a.bn()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.v0(u,q,"Left early \xb7 +$"+A.k.ab(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
It(d,e){return this.cjL(d,e)},
b_t(d){return this.It(!1,d)},
cjK(d){return this.It(d,"")},
cjL(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
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
return B.b(C.bz2(s,C.byH(),C.fHE(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$It)
case 5:w=1
break
case 4:n=B.P3(A.k.ab(t.a.w*1.46*r,2))
m=r>=1
t.n(new C.dtJ(t,n,r))
s=A.o.u(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new B.cW(s,p,n,A.fA,A.f8,q,null,null,A.cg,new B.N(Date.now(),0,!1))
B.aeC(l,!0)
t.a.hu(l)
t.a.bn()
if(m)k="+$"+A.k.ab(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+A.k.ab(n,2)+" ("+A.k.U(r*100)+"% of the prize)"}q=t.a
C.v0(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return B.b(C.bz2(s,C.byH(),C.fHE(),""+t.e+"/"+t.f,k,q,!0),$async$It)
case 6:w=7
return B.b(C.aeu(t.a.f,k),$async$It)
case 7:case 1:return B.h(u,v)}})
return B.i($async$It,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.r
m===$&&B.c()
w=A.o.ak(m,60)
v=A.a.aT(A.o.u(A.o.J(m,60)),2,"0")
u=B.aF(n,n,n,n,A.aiB,n,n,n,new C.dtM(d),n,n,n,n,n,n)
t=o.a
s=x.p
t=B.C(B.u(B.a([B.d(t.f,n,1,A.Z,n,n,n,A.l7,n,n,n),B.d("Win $"+A.k.ab(t.w*1.46,2)+" \xb7 stake $"+A.k.ab(o.a.w,2),n,n,n,n,n,n,D.erH,n,n,n)],s),A.F,n,A.e,A.j,0,A.p),1)
r=o.a.c.a
m=m<=10?A.aH:A.c.j(0.1)
q=B.m(99)
q=B.A(B.a([u,t,new C.amM(r,new C.dtN(o),n),A.bp,B.dg(n,B.A(B.a([D.bzJ,A.d4,B.d(""+w+":"+v,n,n,n,n,n,n,A.kc,n,n,n)],s),A.m,n,A.e,A.j,0,n,n),n,n,A.b9,new B.o(m,n,n,q,n,n,A.n),A.X,n,n,n,A.wl,n,n,n)],s),A.m,n,A.e,A.j,0,n,n)
m=o.a
v=m.w
w=v*1.46
r=o.e/o.f
m=B.A(B.a([B.C(B.bu(B.m(99),B.mR(A.bG,n,n,9,n,r,new B.nE(A.d.gI(m.r),x.dw)),A.ap),1),A.av,B.d(""+o.e+"/"+o.f,n,n,n,n,n,n,D.eAa,n,n,n)],s),A.m,n,A.e,A.j,0,n,n)
t=B.m(22)
u=B.a([A.d.gI(o.a.r).j(0.35),F.aaM],x.O)
p=o.x
return C.aLX(n,D.b7Y,B.br(!0,B.u(B.a([new B.B(D.bjr,q,n),new C.Lx(w*r,w,v,n),new B.B(F.acY,m,n),B.C(new B.B(A.UZ,B.bu(t,B.bQ(B.e8(V.h0n(o.a.e,new V.ye(new C.dtO(o),new C.dtP(o),new C.dtQ(o),o.d)),p,n),new B.o(n,n,n,n,n,new B.a8(A.b4,A.bb,A.w,u,n,n),A.n),A.b7),A.ap),n),1)],s),A.m,n,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0))}}
C.akM.prototype={
S(){return new C.beV(null,null)},
gX(d){return this.e}}
C.beV.prototype={
Z(){var w,v=this,u=null
v.a0()
w=v.d=B.bh(u,A.zt,u,1,u,v)
w.d5()
w.dL$.H(0,new C.dn2(v))
w=B.bh(u,A.lQ,u,1,u,v)
w.cF(0)
v.e=w
w=B.bh(u,A.Jv,u,1,u,v)
w.cF(0)
v.f=w
w.d5()
w.dL$.H(0,new C.dn3(v))
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
w.bot()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.O1[A.o.J(a9.r,5)]:b4
w=!b3&&b4==null?D.O1[A.o.J(a9.w,5)]:b0
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
b1.jd(k,k,k,1)
b1.jw(l)
b1.fk(m)
d=b2*0.2
a1=B.m(d)
if(a9.a.c)a2=D.cGN
else{a2=B.aq(A.c,A.kO,q*0.45)
a2.toString
a2=B.a([a2,A.bN,A.ct],x.O)}a4=B.aq(A.bP,A.aA,q*0.65)
a4.toString
a4=B.G(a4,A.r,3)
e=B.a([new B.a9(0,A.G,A.x.j(0.3),D.dJL,16)],e)
if(!a9.a.c)e.push(new B.a9(p*3,A.G,A.aA.j(0.3+q*0.4),A.J,24+p*16))
e.push(new B.a9(0,A.G,A.c.j(0.9),A.Pp,0))
g=B.a([],g)
if(!a9.a.c)g.push(B.bU(0,B.bQ(b0,new B.o(b0,b0,b0,B.m(d),b0,new B.a8(new B.d3(-1+Math.cos(j)*0.8,-1),new B.d3(1,1),A.w,B.a([A.c.j(0),A.c.j(0.28+p*0.25),A.c.j(0)],x.O),b0,b0),A.n),A.b7),0,0,0))
g.push(B.an(b0,B.p(b0,b0,A.h,b0,b0,new B.o(b0,b0,b0,B.m(6),b0,new B.a8(A.a_,A.a7,A.w,B.a([A.c.j(0.95),A.c.j(0)],x.O),b0,b0),A.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=B.a([new B.cI(A.x.j(0.18),A.dG,5)],x.C)
if(!a9.a.c)d.push(new B.cI(A.aA.j(0.4+q*0.35),A.J,12+p*10))
g.push(B.as(B.vZ(B.d(v,b0,b0,b0,b0,b0,b0,B.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,A.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),A.b9,A.jc,b3),b0,b0,b0))
f.push(B.dO(B.fl(A.B,B.p(b0,new B.am(A.V,b0,A.a9,A.q,g,b0),A.h,b0,b0,new B.o(b0,b0,a4,a1,e,new B.a8(A.ax,A.aE,A.w,a2,b0,b0),A.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new B.v(0,n)))
return new B.a3(h,h,new B.am(A.B,b0,A.a9,A.h,f,b0),b0)}}
C.aHF.prototype={
aN(){this.aV()
this.aS()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdB())
w.aX$=null
w.a2()}}
C.Lx.prototype={
B(d){var w=null,v=new C.c2t(),u=v.$3("STAKE","$"+A.k.ab(this.e,2),A.c),t=B.m(18),s=B.G(A.br.j(0.7),A.r,1.4),r=B.a([new B.a9(0,A.G,A.aS.j(0.35),A.J,14)],x.V),q=x.p
return new B.B(A.JM,B.A(B.a([u,B.p(w,B.u(B.a([D.eMw,B.mx(new C.c2s(),w,A.b9,A.nh,w,new B.bm(w,this.c,x.e7),x.gR)],q),A.m,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(w,w,s,t,r,D.ajm,A.n),w,w,w,w,A.JY,w,w,w),v.$3("FULL WIN","$"+A.k.ab(this.d,2),A.bK)],q),A.m,w,A.e,A.j,0,w,w),w)}}
C.amM.prototype={
B(d){var w=null,v=B.m(99),u=B.G(A.j6.j(0.7),A.r,1)
return B.p(w,B.A(B.a([D.bs6,A.d4,C.anA(this.d,A.ot,this.c)],x.p),A.m,w,A.e,A.R,0,w,w),A.h,w,w,new B.o(w,w,u,v,w,D.ajm,A.n),w,w,w,w,A.K8,w,w,w)},
gdQ(){return this.c}}
C.LF.prototype={
S(){return new C.bfy(null,null)}}
C.bfy.prototype={
Z(){var w,v=this
v.a0()
w=B.bh(null,A.lQ,null,1,null,v)
v.d!==$&&B.aO()
v.d=w},
p(){var w=this.d
w===$&&B.c()
w.p()
this.bp2()},
aJg(d,e){var w=this.a.d,v=B.T(w).k("I<1,n>"),u=B.z(new B.I(w,C.hM2(),v),v.k("ai.E"))
w=this.d
w===$&&B.c()
return B.c4(w,new C.dLW(this,u),null)},
B(d){var w=null
if(this.a.e)return B.ce(w,D.aab,B.br(!0,this.aJg(0,d),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)
return this.aJg(0,d)},
atf(d,e,f){var w=null,v=f.j(0.16),u=B.m(10)
return B.A(B.a([B.p(w,B.V(d,f,w,w,w,17),A.h,w,w,new B.o(v,w,w,u,w,w,A.n),w,32,w,w,w,w,w,32),A.av,B.C(B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,A.a1,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.m,w,A.e,A.j,0,w,w)}}
C.aId.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.aaO.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=B.aG(d,A.e1,o).w.r.d,m=this.c,l=J.cB(m),k=l.eC(m,new C.dLZ()).gG(0),j=new B.e2(l.di(m,new C.dM_(),x.cD),x.bG).cI(0,0,new C.dM0())
o=B.aG(d,A.bO,o).w
w=x.p
v=B.a([A.T,B.p(p,p,A.h,p,p,new B.o(A.be,p,p,B.m(2),p,p,A.n),p,4,p,p,p,p,p,42),new B.B(A.adb,B.A(B.a([B.p(p,D.bC4,A.h,p,p,new B.o(p,p,p,B.m(14),B.a([new B.a9(0,A.G,A.f3.j(0.45),A.J,14)],x.V),D.ajg,A.n),p,44,p,p,p,p,p,44),A.ba,D.blw,B.aF(p,p,p,p,A.l1,p,p,p,new C.dM1(d),p,p,p,p,p,p)],w),A.m,p,A.e,A.j,0,p,p),p)],w)
if(l.gcf(m)){u=C.fCK("GAMES",""+l.gG(m),A.eN)
t=C.fCK("WON",""+k,A.j6)
s=j>=0
r=s?"+":"-"
q=C.bvy(j)
s=s?A.j6:A.fO
v.push(new B.B(D.bg2,B.A(B.a([u,A.ab,t,A.ab,C.fCK("NET",r+q,s)],w),A.m,p,A.e,A.j,0,p,p),p))}if(l.gah(m))v.push(new B.B(new B.L(24,36,24,24+n),B.u(B.a([B.V(D.bo3,A.c.j(0.35),p,p,p,52),A.aa,B.d("No game receipts yet",p,p,p,p,p,p,B.l(p,p,A.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.ar,B.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,B.l(p,p,A.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],w),A.m,p,A.e,A.j,0,A.p),p))
else v.push(new B.dk(1,A.cj,B.hF(p,new C.dM2(this),l.gG(m),new B.L(14,2,14,16+n),p,A.ah,new C.dM3(),!1),p))
return B.p(p,B.u(v,A.m,p,A.e,A.R,0,A.p),A.h,p,new B.aV(0,1/0,0,o.a.b*0.88),D.aSg,p,p,p,p,p,p,p,p)}}
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
else t=v?A.aM:A.br
s=i.gbaB()
w=new C.dLY()
r=B.m(14)
q=B.a([t.j(0.13),D.b78],x.O)
p=B.G(t.j(0.4),A.r,1)
o=B.V(h?A.lX:A.cu,t,j,j,j,16)
n=B.C(B.d(i.b,j,1,A.Z,j,j,j,A.yj,j,j,j),1)
m=t.j(0.2)
l=B.m(99)
l=B.p(j,B.d(u,j,j,j,j,j,j,B.l(j,j,t,j,j,j,j,j,j,j,j,8.5,j,j,A.u,j,j,!0,j,0.6,j,j,j,j,j,j),j,j,j),A.h,j,j,new B.o(m,j,j,l,j,j,A.n),j,j,j,j,D.bjm,j,j,j)
if(s!=null){m=s>=0?"+":"-"
m+=C.bvy(s)}else{m=h?"+":"-"
m+=C.bvy(i.d)}k=x.p
m=B.A(B.a([o,A.bp,n,l,A.bp,B.d(m,j,j,j,j,j,j,B.l(j,j,t,j,j,j,j,j,j,j,j,13,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],k),A.m,j,A.e,A.j,0,j,j)
l=C.dLX("STAKE",w.$1(i.w),A.c)
w=B.A(B.a([l,A.d4,C.dLX("PAID",C.bvy(h?i.d:0),t),A.d4,C.dLX("BEFORE",w.$1(i.x),A.eN),A.d4,C.dLX("AFTER",w.$1(i.y),A.dE)],k),A.m,j,A.e,A.j,0,j,j)
o=C.hHI(i.f)
i=A.a.i(i.e)
i=i.length===0?"":" \xb7 "+i
return B.p(j,B.u(B.a([m,A.ar,w,A.au,B.d(o+i,j,1,A.Z,j,j,j,B.l(j,j,A.c.j(0.45),j,j,j,j,j,j,j,j,10,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],k),A.ad,j,A.e,A.j,0,A.p),A.h,j,j,new B.o(j,j,p,r,j,new B.a8(A.ax,A.aE,A.w,q,j,j),A.n),j,j,j,j,A.kW,j,j,j)}}
C.ax7.prototype={
S(){return new C.bbh(A.cA,null,null)}}
C.bbh.prototype={
Z(){var w,v,u,t=this
t.a0()
w=B.bh(null,A.mw,null,1,null,t)
w.cF(0)
t.d=w
v=J.e_(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.abd(40+w.ag()*260,-20+w.ag()*40,1.5+w.ag()*3,w.ag()*3.141592653589793,0.7+w.ag()*0.3,12+w.ag()*16,[X.a0m,A.qx,A.cL,A.c][w.aG(4)],[A.hL,A.kX,A.dO,A.DW][w.aG(4)])
t.f=v},
p(){var w=this.d
w===$&&B.c()
w.p()
this.bnY()},
B(d){var w=null,v=this.d
v===$&&B.c()
return B.as(B.aD(!1,A.X,!0,w,B.c4(v,new C.d3S(this,d),w),A.h,A.K,0,w,w,w,w,w,A.ac),w,w,w)}}
C.abd.prototype={
gX(d){return this.f}}
C.aHa.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
C.aXe.prototype={
B(d){return new B.tL(new C.c4J(this),null,new B.h3(B.a([$.xE(),$.a0x()],x.U)),null)},
gdQ(){return this.c}}
C.L9.prototype={
c2o(){if(this.c!=null)this.n(new C.bUE())}}
C.GU.prototype={}
C.ame.prototype={
S(){return new C.azV(A.cA,new B.ao(A.aq,$.at()))},
cvD(){return this.d.$0()},
cGN(){return this.f.$0()},
cGB(d,e){return this.r.$2(d,e)},
cHp(d,e,f){return this.w.$3$bonus(d,e,f)},
gdQ(){return this.c}}
C.azV.prototype={
p(){var w=this.e
w.R$=$.at()
w.O$=0
this.a2()},
apl(){var w=B.d5(A.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
zI(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$zI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.apl()
if(s<2){t.atg("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cvD()<s){t.atg("Insufficient balance.")
w=1
break}if(!t.a.cGB(s,"Dice Roll bet")){t.atg("Could not place bet.")
w=1
break}t.a.toString
t.n(new C.dFe(t))}w=3
return B.b(C.c1E(t.a.e),$async$zI)
case 3:r=t.a
q=C.hJJ(r.e,r.c,t.d)
t.a.cGN()
B.aVO(t.a.e)
t.n(new C.dFf(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return B.b(B.bK(new B.b7(1000*(40+p*6)),null,r),$async$zI)
case 7:if(t.c==null){w=1
break}new C.dFg(t).$0()
t.c.e2()
case 5:++p
w=4
break
case 6:w=8
return B.b(B.bK(A.jd,null,r),$async$zI)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.fGs(q)
t.n(new C.dFh(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cHp(m,"Dice Roll "+n,o)
t.n(new C.dFi(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+A.k.ab(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.k.ab(m,2)+" added to your balance"
w=12
return B.b(C.bz2(r,C.byH(),new C.dFj(t),n,k,"YOU WIN!",!0),$async$zI)
case 12:w=13
return B.b(C.aeu("Dice Roll",l?"+$"+A.k.ab(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.k.ab(m,2)+" added to your balance"),$async$zI)
case 13:w=10
break
case 11:w=14
return B.b(C.bz2(r,C.byH(),new C.dFk(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$zI)
case 14:C.v0(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return B.h(u,v)}})
return B.i($async$zI,v)},
atg(d){var w=null,v=this.c
if(v==null)return
v.F(x.q).f.P(B.b_(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.apl(),d=x.w,a0=B.aG(a2,A.e1,d).w,a1=Math.min(B.aG(a2,A.bO,d).w.a.a*0.44,200)
d=B.hg(Q.ahJ,D.eT8,new C.dFn(a2),f)
w=B.m(20)
v=g.a
u=v.c
t=x.p
w=B.A(B.a([d,A.b6,B.p(f,B.A(B.a([A.ahG,A.bp,C.anA(v.d,A.jN,u)],t),A.m,f,A.e,A.R,0,f,f),A.h,f,f,new B.o(A.cL,f,f,w,f,f,A.n),f,f,f,f,A.ln,f,f,f)],t),A.m,f,A.e,A.j,0,f,f)
u=g.z
v=B.W(140,D.U5.l()>>>16&255,D.U5.l()>>>8&255,D.U5.l()&255)
d=B.m(18)
s=B.G(B.W(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
r=g.x
d=B.C(B.p(f,B.as(new C.akM(r,r?g.w:g.r,a1,f),f,f,f),A.h,f,f,new B.o(v,f,s,d,f,f,A.n),f,f,f,f,f,f,f,1/0),1)
v=B.d("Roll lands on one of:",f,f,f,f,f,f,B.l(f,f,A.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,A.a1,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=B.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.O1[q]
o=C.fGs(p)
n=p>0?A.bq:A.aH
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new B.b3(10,10)
i=m?A.c:n.j(0.7)
h=new B.ax(i,m?2.5:1.2,A.r,-1)
n=m?B.a([new B.a9(1,A.G,n.j(0.65),A.J,14)],r):A.a_k
m=m?18:15
s.push(new B.bF(1,A.bn,new B.B(A.jX,B.p(A.B,new B.w(o,f,new B.E(!0,A.c,f,f,f,f,m,A.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f),A.h,f,f,new B.o(k,f,new B.c2(h,h,h,h),new B.bv(j,j,j,j),n,f,A.n),f,l,f,f,f,f,f,f),f),f))}d=B.a([d,A.aa,v,A.ar,B.A(s,A.m,f,A.e,A.j,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.fGs(v)
s=g.r
s.toString
d.push(new B.B(A.ku,B.d("Landed on "+v,f,f,f,f,f,f,B.l(f,f,s>0?A.bt:A.cN,f,f,f,f,f,f,f,f,20,f,f,A.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(A.T)
d.push(new B.bE(A.a_,f,f,B.d("Bet Amount",f,f,f,f,f,f,B.l(f,f,B.W(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,A.I,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(A.ar)
v=x.bL
v=B.z(new B.I(B.a([2,5,10,25],x.n),new C.dFo(g),v),v.k("ai.E"))
s=g.y
r=B.W(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v.push(B.C(new B.B(A.VD,B.aK(f,A.U,!1,f,!0,A.q,f,B.aL(),g.e,f,f,f,f,f,2,B.bl(f,new B.b1(4,B.m(10),A.W),f,A.jB,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,A.l8,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),A.z,!0,f,!0,!s,!1,f,A.ae,f,f,f,f,f,A.dL,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,A.a8,f,f,f,f,f,f,f,f,f,f,f,A.h7,!0,A.L,f,A.am,f,f,f,f),f),1))
d.push(B.A(v,A.m,f,A.e,A.j,0,f,f))
d.push(A.P)
d.push(new B.bE(A.a7,f,f,B.d("Perfect Score Profit: +$"+A.k.ab(g.apl()*0.46,2),f,f,f,f,f,f,D.etC,f,f,f),f))
d.push(A.T)
d=B.C(new B.B(A.iX,B.u(d,A.ad,f,A.e,A.j,0,A.p),f),1)
v=g.x?f:g.gcgv()
s=B.ff(f,f,A.aA,f,f,f,f,f,f,A.c,f,f,f,f,new B.b5(B.m(14),A.W),f,f,f,f,f)
return C.aLX(f,D.Ub,B.br(!0,B.u(B.a([new B.B(D.bjM,w,f),new C.Lx(u,e*1.46,e,f),B.C(B.u(B.a([d,new B.B(new B.L(14,4,14,8+a0.r.d),new B.a3(1/0,52,B.i3(B.d("\ud83c\udfb2 ROLL ($"+A.k.ab(e,2)+")",f,f,f,f,f,f,A.kK,f,f,f),v,s),f),f)],t),A.m,f,A.e,A.j,0,A.p),1)],t),A.m,f,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0))}}
C.amR.prototype={
S(){return new C.aAb(A.k5,new B.ao(A.aq,$.at()))},
cGt(d){return this.e.$1(d)}}
C.aAb.prototype={
gaob(){var w,v=this.r
if(v===$){w=A.o.u(1e4+A.cA.aG(89999))
this.r!==$&&B.bH()
this.r=w
v=w}return v},
gOt(){var w=this.d,v=this.a
return w===A.k5?A.a.i(v.f.a):A.a.i(v.f.b)},
ga6k(){var w=this.gOt(),v=B.ad("^\\$+",!0,!1,!1,!1),u=A.a.i(B.aI(w,v,""))
return u.length===0?"":"$"+u},
p(){var w=this.e
w.R$=$.at()
w.O$=0
this.a2()},
Hp(d,e){return this.bBm(d,e)},
bBm(d,e){var w=0,v=B.j(x.H),u=this,t
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
q=r.d===A.k5?B.cq("https://cash.app/"+r.ga6k()+"/"+o,0,null):B.cq("bitcoin:"+r.gOt(),0,null)
t=4
w=7
return B.b(B.iH(q,A.f7,null),$async$Oo)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===A.k5?r.ga6k():r.gOt()
w=10
return B.b(r.Hp(n,r.d===A.k5?"Cash App tag":"Bitcoin address"),$async$Oo)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===A.k5?r.ga6k():r.gOt()
w=11
return B.b(r.Hp(n,r.d===A.k5?"Cash App tag":"Bitcoin address"),$async$Oo)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Oo,v)},
YW(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hQ().bbj(A.et),$async$YW)
case 3:r=e
if(r==null){w=1
break}w=4
return B.b(r.f8(),$async$YW)
case 4:s=e
t.n(new C.dMl(t,A.a.c5(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return B.h(u,v)}})
return B.i($async$YW,v)},
bZS(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===A.k5?C.h1E(s.a):A.a.i(s.a)
if(r.length===0){t=v.d===A.k5?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.F(x.q).f.P(B.b_(u,u,u,u,u,A.q,u,B.d(t,u,u,u,u,u,u,u,u,u,u),u,A.S,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.F(x.q).f.P(B.b_(u,u,u,u,u,A.q,u,B.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,A.S,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new B.N(Date.now(),0,!1).u(0)
w=v.a
t.cGt(new B.cW(s,w.c.a,w.d,A.fc,v.d,r,v.f,v.gaob(),A.dn,new B.N(Date.now(),0,!1)))
w=v.c
w.toString
B.iC(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.eA(o,o,o,!0,!0,A.z_,o,1,!0,o,0,!1,o,!1,A.c,o,B.aF(o,o,o,o,A.EJ,o,o,o,new C.dMm(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.eDX,o,o,o,1,o,!0),m=B.m(26),l=B.G(D.eu.j(0.25),A.r,1),k=x.V,j=B.a([new B.a9(0,A.G,A.aW.j(0.25),A.eH,24)],k),i=x.p
j=B.p(o,B.u(B.a([B.d("YOU'RE ADDING",o,o,o,o,o,o,B.l(o,o,A.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,A.I,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),A.ar,B.eY(A.B,B.d("$"+B.du(p.a.d),o,o,o,o,o,o,D.eoa,o,o,o),A.h,A.dp),A.ar,B.d("to your Growth Income wallet",o,o,o,o,o,o,B.l(o,o,D.eu.j(0.85),o,o,o,o,o,o,o,o,12,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.m,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(o,o,l,m,j,D.bHM,A.n),o,o,o,o,D.bht,o,o,o)
m=p.bVY()
l=p.awN(1,"Send the money to NGMY Pay",p.bZQ())
w=p.awN(2,"Put this code in the payment note",p.bzZ())
v=p.d===A.k5
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=B.l(o,o,A.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.awN(3,u,B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.e,o,o,o,o,o,2,B.bl(o,o,o,o,o,o,o,o,!0,new B.b1(4,B.m(18),new B.ax(A.c.j(0.08),1,A.r,-1)),o,o,o,o,o,A.rp,!0,o,o,o,o,new B.b1(4,B.m(18),D.aPr),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.epu,t,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ae,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.qR,!0,A.a5,o,A.am,o,o,o,o))
r=p.f!=null
v=r?8:22
u=B.m(20)
s=r?D.eu:A.c
s=B.G(s.j(r?0.5:0.12),A.r,1.4)
q=r?B.u(B.a([B.bu(B.m(14),new B.d2(D.aQP,new B.Da(p.f,o),o),A.ap),A.P,D.eaP,A.au],i),A.m,o,A.e,A.j,0,A.p):B.u(B.a([B.p(o,D.bBh,A.h,o,o,new B.o(D.eu.j(0.12),o,o,o,o,o,A.a6),o,54,o,o,o,o,o,54),A.T,D.eIK,A.d5,B.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a1,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.m,o,A.e,A.j,0,A.p)
v=p.b0R(4,"Screenshot of your payment",B.aJ(o,B.p(o,q,A.h,o,o,new B.o(A.rp,o,s,u,o,o,A.n),o,o,o,o,new B.L(v,v,v,v),o,o,o),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gca2(),o,o,o,o,o,o,!1,A.af),!0)
u=B.d(p.a.r,o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a1,o,1.4,!0,o,o,o,o,o,o,o,o),A.L,o,o)
s=B.m(18)
k=B.a([new B.a9(0,A.G,A.aW.j(0.45),A.dm,18)],k)
return B.ce(n,A.z_,B.as(new B.d2(A.a6O,B.cL(B.a([j,A.bs,m,A.bs,l,w,t,v,A.ar,u,A.aN,new B.a3(o,56,B.bQ(B.lc(D.bzY,D.eSs,p.gbZR(),B.ff(o,o,A.K,o,o,o,o,o,o,A.c,o,o,o,A.K,new B.b5(B.m(18),A.W),o,o,o,o,o)),new B.o(o,o,o,s,k,D.bGu,A.n),A.b7),o)],i),o,D.bgY,o,o,A.ah,!1),o),o,o,o),o,!1,!1,o,o)},
bVY(){var w=null,v=new C.dMh(this),u=B.m(18),t=B.G(A.c.j(0.06),A.r,1)
return B.p(w,B.A(B.a([v.$3(A.k5,A.hI,"Cash App"),A.ez,v.$3(A.a1M,D.ahq,"Bitcoin")],x.p),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(A.rp,w,t,u,w,w,A.n),w,w,w,w,A.lU,w,w,w)},
b0R(d,e,f,g){var w,v=null,u=x.p,t=B.a([B.p(A.B,B.d(""+d,v,v,v,v,v,v,D.euk,v,v,v),A.h,v,v,D.aRy,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(B.C(B.p(v,v,A.h,D.eu.j(0.18),v,v,v,v,v,A.wj,v,v,v,2),1))
t=B.u(t,A.m,v,A.e,A.j,0,A.p)
w=g?12:20
return new B.KI(B.A(B.a([new B.a3(34,v,t,v),A.av,B.C(new B.B(new B.L(0,0,0,w),B.u(B.a([new B.B(A.UW,B.d(e,v,v,v,v,v,v,A2.a41,v,v,v),v),f],u),A.ad,v,A.e,A.j,0,A.p),v),1)],u),A.ad,v,A.e,A.j,0,v,v),v)},
awN(d,e,f){return this.b0R(d,e,f,!1)},
bZQ(){var w,v,u,t,s=this,r=null,q=s.d===A.k5?s.ga6k():s.gOt(),p=B.m(20),o=B.m(20),n=s.d===A.k5,m=n?D.bFw:D.bHb,l=B.a([new B.a9(0,A.G,(n?D.aaq:D.Tn).j(0.35),A.cv,16)],x.V),k=B.m(12)
n=s.d===A.k5
w=n?A.hI:D.ahq
k=B.p(r,B.V(w,n?D.aaq:D.Tn,r,r,r,30),A.h,r,r,new B.o(A.c,r,r,k,r,r,A.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=B.d(n,r,r,r,r,r,r,B.l(r,r,A.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===A.k5
t=u?22:13
v=B.d(v,r,1,A.Z,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,t,r,r,A.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=B.C(B.u(B.a([n,A.bw,v,A.au,B.A(B.a([D.bwV,A.d4,B.d(s.d===A.k5?"Tap to pay $"+B.du(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,A.vd,r,r,r)],u),A.m,r,A.e,A.j,0,r,r)],u),A.F,r,A.e,A.j,0,A.p),1)
return B.aD(!1,A.X,!0,r,B.aH(!1,p,!0,B.er(B.A(B.a([k,A.ba,v,B.aF(r,r,r,r,D.bw_,r,r,r,w?r:new C.dMk(s,q),r,r,r,r,"Copy",r)],u),A.m,r,A.e,A.j,0,r,r),r,new B.o(r,r,r,o,l,m,A.n),r,A.acS,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gc5r(),r,r,r,r,r,r,r),A.h,A.K,0,r,r,r,r,r,A.ac)},
bzZ(){var w,v,u,t,s,r,q,p,o=null,n=B.m(20),m=B.G(A.b0.j(0.35),A.r,1),l=x.p,k=B.a([],l)
for(w=this.gaob().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new B.b3(12,12)
q=B.a([A.b0.j(0.28),A.b0.j(0.08)],u)
p=new B.ax(A.eN.j(0.4),1,A.r,-1)
k.push(B.p(A.B,new B.w(s,o,A.BO,o,o,o,o,o,o,o,o,o),A.h,o,o,new B.o(o,o,new B.c2(p,p,p,p),new B.bv(r,r,r,r),o,new B.a8(A.b4,A.bb,A.w,q,o,o),A.n),o,52,o,A.jX,o,o,o,42))}return B.p(o,B.u(B.a([B.A(k,A.m,o,A.b5,A.j,0,o,o),A.aa,B.A(B.a([B.C(B.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,B.l(o,o,A.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,A.a1,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),A.ab,B.hg(A.Yi,D.eUa,new C.dMg(this),B.fp(o,o,o,o,o,o,o,o,o,o,o,A.eN,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),A.m,o,A.e,A.j,0,o,o)],l),A.m,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(A.rp,o,m,n,o,o,A.n),o,o,o,o,A.bA,o,o,o)}}
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
v.push(C.fO2(w.b))
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
w=J.b4(v.c,new C.c3I(),x.P)
w=B.z(w,w.$ti.k("ai.E"))
u.m(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.m(0,"thumbnailPath",w)
u.m(0,"printable",v.e)
u.m(0,"sortOrder",v.f)
return u}}
C.hU.prototype={
ahC(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.hU(v,u,t,s,r,h==null?w.f:h)},
b6b(d){var w=null
return this.ahC(w,w,w,w,d,w)},
czb(d,e,f){return this.ahC(d,e,null,null,null,f)},
b6a(d){var w=null
return this.ahC(w,w,w,d,w,w)},
cyR(d,e){var w=null
return this.ahC(w,w,d,w,e,w)},
ad(){var w=this,v=C.hvR(w.c),u=w.e,t=B.T(u).k("I<1,a0<n,@>>")
u=B.z(new B.I(u,new C.c3G(),t),t.k("ai.E"))
return B.D(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.b4Z.prototype={}
C.Td.prototype={
S(){return new C.aAn(new B.ao(A.aq,$.at()),B.m6(0,null,null),B.a([],x.m))},
S3(d){return this.d.$1(d)}}
C.aAn.prototype={
Z(){var w,v=this
v.a0()
w=J.b4(v.a.c,new C.dQ0(),x.i)
w=B.z(w,w.$ti.k("ai.E"))
A.d.aY(w,new C.dQ1())
v.d=w
v.Hz()},
p(){var w=this.w
w.R$=$.at()
w.O$=0
this.x.p()
this.a2()},
ab4(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ab4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:u.Hz()
u.n(new C.dPV(u))
t=u.a
t.toString
s=u.d
s===$&&B.c()
w=2
return B.b(t.S3(s),$async$ab4)
case 2:r=e
if(u.c!=null){u.n(new C.dPW(u))
t=u.c.F(x.q).f
s=B.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.P(B.b_(null,null,null,r?A.dk:A.aH,null,A.q,null,s,null,A.S,null,null,null,null,null,null,null,null,null,null))}return B.h(null,v)}})
return B.i($async$ab4,v)},
a5x(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a5x=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&B.c()
s=new C.hU(q,"New Category",A.Eg,4284773515,D.arJ,p.length)
t.n(new C.dPE(t,s))
t.Hz()
p=t.c
if(p==null){w=1
break}w=3
return B.b(B.cg(null,null,!0,null,new C.dPF(s),p,null,!0,!0,x.i),$async$a5x)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.dPG(t,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a5x,v)},
ZS(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=A.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.n(new C.dPS(t,p))
q.bG(0,A.c_)
q=t.a.e
s=t.d
s===$&&B.c()
w=3
return B.b(C.c3D(p,q,s),$async$ZS)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.dPT(t,r))
$.aS.x1$.push(new C.dPU(t))
case 1:return B.h(u,v)}})
return B.i($async$ZS,v)},
a7s(d){return this.bFT(d)},
bFT(d){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$a7s=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&B.c()
t=r[d]
r=u.c
r.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.dPM(t),r,null,!0,!0,x.i),$async$a7s)
case 2:s=f
if(s!=null)u.n(new C.dPN(u,d,s))
return B.h(null,v)}})
return B.i($async$a7s,v)},
bDL(d){this.n(new C.dPL(this,d))
this.Hz()},
Hz(){var w,v,u=this.d
u===$&&B.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].b6b(v)},
c2U(d,e){var w={}
w.a=e
this.n(new C.dPR(w,this,d))},
Wu(d){return this.bUT(d)},
bUT(d){var w=0,v=B.j(x.H),u=this,t,s
var $async$Wu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=B.eH(new C.dPQ(u,d),!1,null,x.H)
w=2
return B.b(B.a7(s,!1).cr(t),$async$Wu)
case 2:return B.h(null,v)}})
return B.i($async$Wu,v)},
bwj(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?B.a([A.fn,A.bj],l):B.a([A.pU,A.eq],l)
w=B.m(16)
v=B.G(m?A.dc.j(0.35):A.dE,A.r,1)
u=B.V(A.dO,m?A.dE:A.e9,n,n,n,n)
t=B.C(B.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,B.l(n,n,m?A.aO:A.M,n,n,n,n,n,n,n,n,n,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.WG:A7.Kt
r=x.p
s=B.a([B.aH(!1,n,!0,B.A(B.a([u,A.ab,t,B.V(s,m?A.bP:A.aj,n,n,n,n)],r),A.m,n,A.e,A.j,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dPI(o),n,n,n,n,n,n,n)],r)
if(o.r){u=B.a([A.T],r)
t=o.y
if(t.length!==0){q=(m?D.rd:A.c).j(0.65)
p=B.m(12)
u.push(B.p(n,B.jT(!0,n,o.x,new C.dPJ(o,d),t.length,n,n,n,n,!1,!1),A.h,n,A.a6J,new B.o(q,n,n,p,n,n,A.n),n,n,n,n,A.ch,n,n,n))}u.push(A.P)
t=o.w
q=B.l(n,n,m?A.aO:A.M,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=B.l(n,n,m?A.bP:A.aj,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?A.bj:A.aO
q=B.C(B.aK(n,A.U,!1,n,!0,A.q,n,B.aL(),t,n,n,n,n,n,2,B.bl(n,new B.b1(4,B.m(14),A.W),n,A.eE,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),A.z,!0,n,!0,n,!1,n,A.ae,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.dPK(o),n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,q,!0,A.a5,n,A.am,n,n,n,n),1)
m=o.f?n:o.gcgI()
p=B.bk(A.bh,n,n,n,n,n,A.iE,n,n,n,n,n)
u.push(B.A(B.a([q,new B.H8(t,A.bh,n),A.d4,B.bJ(o.f?A.pv:D.ahz,m,p)],r),A.dD,n,A.e,A.j,0,n,n))
A.d.v(s,u)}return B.dg(n,B.u(s,A.ad,n,A.e,A.j,0,A.p),n,n,A.b9,new B.o(n,n,v,w,n,new B.a8(A.a_,A.a7,A.w,l,n,n),A.n),A.ib,n,n,A.Dx,A.bA,n,n,n)},
B(d){var w,v=this,u=null,t=B.K(d).ax.a===A.H,s=new C.b4Z(t),r=t?A.dd:A.bN,q=t?A.dd:u,p=t?A.aO:A.M,o=B.d("Help Topics Admin",u,u,u,u,u,u,B.l(u,u,t?A.aO:A.M,u,u,u,u,u,u,u,u,u,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gbZW()
if(n)n=A.Qk
else n=B.V(A.wO,t?A.aO:A.M,u,u,u,u)
w=x.p
o=B.eA(B.a([B.hg(n,B.d("Save",u,u,u,u,u,u,B.l(u,u,t?A.aO:A.M,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=R.aQV(A.aK,u,O.SH,A.nr,D.eQW,v.gbsO())
q=v.bwj(s)
n=B.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,B.l(u,u,t?A.bP:A.aj,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&B.c()
return B.ce(o,r,B.u(B.a([q,new B.B(A.Dx,n,u),B.C(H.fSi(!1,new C.dQ_(v,s),m.length,v.gc2T(),D.bfO,u,!1),1)],w),A.ad,u,A.e,A.j,0,A.p),u,!1,!1,p,u)}}
C.Nx.prototype={
S(){return new C.b6N()}}
C.b6N.prototype={
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
o=B.aK(s,A.U,!1,s,!0,A.q,s,B.aL(),o,s,s,s,s,s,2,D.bCZ,A.z,!0,s,!0,s,!1,s,A.ae,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,A.a8,s,s,s,s,s,s,s,s,s,s,s,B.l(s,s,r?A.c:A.bi,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,A.a5,s,A.am,s,s,s,s)
w=x.aS
w=B.z(new B.I(D.bI8,new C.cEs(t),w),w.k("ai.E"))
w=B.cb(A.bH,w,A.bx,8,8)
v=x.gN
v=B.z(new B.I(D.cEb,new C.cEt(t),v),v.k("ai.E"))
u=x.p
v=B.cf(B.u(B.a([o,A.aa,w,A.aa,B.cb(A.bH,v,A.bx,0,8)],u),A.m,s,A.e,A.R,0,A.p),A.q,s,A.z,s,s,s,s,A.ah)
return B.ep(B.a([B.bG(!1,A.de,s,s,!0,s,s,new C.cEu(d),s,s),B.bJ(A.pC,new C.cEv(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.YF.prototype={
S(){return new C.aCf()},
o3(d){return this.d.$1(d)}}
C.aCf.prototype={
Z(){this.a0()
this.d=B.bi(this.a.c.e,!0,x.u)},
ati(){var w=this.a,v=w.c,u=this.d
u===$&&B.c()
return w.o3(v.b6a(u))},
a5z(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$a5z=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&B.c()
w=2
return B.b(u.aVT(new C.i7("q_"+1000*s,"",D.cCT,null,!1,r.length)),$async$a5z)
case 2:t=e
if(t!=null){u.n(new C.ezK(u,t))
u.ati()}return B.h(null,v)}})
return B.i($async$a5z,v)},
aVT(d){var w,v=this.c
v.toString
w=B.eH(new C.ezL(d),!1,null,x.u)
return B.a7(v,!1).cr(w)},
B(d){var w=this,v=null,u=B.K(d).ax.a===A.H,t=u?A.dd:A.bN,s=u?A.dd:v,r=u?A.aO:A.M,q=w.a.c
s=B.eA(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,B.d(q.b+" \u2014 Questions",v,v,v,v,v,v,B.l(v,v,u?A.aO:A.M,v,v,v,v,v,v,v,v,v,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=R.aQV(A.aK,v,O.SH,A.nr,D.eWa,w.gbtd())
q=w.d
q===$&&B.c()
q=q.length
if(q===0){q=B.as(B.d("No questions yet. Tap + Question.",v,v,v,v,v,v,B.l(v,v,u?A.bP:A.aj,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=B.hF(v,new C.ezQ(w,new C.b4Z(u)),q,D.bfX,v,A.ah,new C.ezR(),!1)
return B.ce(s,t,u,v,!1,!1,r,v)}}
C.YE.prototype={
S(){return new C.aCe()}}
C.aCe.prototype={
Z(){var w,v=this
v.a0()
w=v.a.c
v.d=new B.ao(new B.bb(w.b,A.aZ,A.aL),$.at())
w=B.bi(w.c,!0,x.bP)
v.e=w
if(A.d.gah(w))J.ch(v.e,D.a14)
w=v.a.c
v.f=w.d
v.r=w.e},
p(){var w=this.d
w===$&&B.c()
w.R$=$.at()
w.O$=0
this.a2()},
ab3(){var w=0,v=B.j(x.H),u=this,t
var $async$ab3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(Z.F3(78,1920),$async$ab3)
case 2:t=e
if(t!=null)u.n(new C.ezG(u,t))
return B.h(null,v)}})
return B.i($async$ab3,v)},
ac3(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$ac3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=B.eH(new C.ezE(u),!1,null,x.dZ)
w=2
return B.b(B.a7(r,!1).cr(t),$async$ac3)
case 2:s=e
if(s!=null)u.n(new C.ezF(u,s))
return B.h(null,v)}})
return B.i($async$ac3,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=B.K(a1).ax.a===A.H,g=h?A.dd:A.bN,f=h?A.dd:i,e=h?A.aO:A.M,d=B.d("Edit Question",i,i,i,i,i,i,B.l(i,i,h?A.aO:A.M,i,i,i,i,i,i,i,i,i,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=B.eA(B.a([B.dj(S.Yr,A.pC,new C.ezI(j,a1),B.bk(A.aK,i,i,i,A.c,i,i,i,i,i,i,i)),A.av],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=B.d("Question thumbnail",i,i,i,i,i,i,B.l(i,i,h?A.aO:A.M,i,i,i,i,i,i,i,i,13,i,i,A.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=B.m(14)
w=j.f
v=h?A.bP:A.aj
w=B.aJ(i,B.bu(e,K.aM_(B.m(14),A.bM,140,A.A_,v,w,1/0),A.ap),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbZV(),i,i,i,i,i,i,!1,A.af)
e=B.d("Question users will tap",i,i,i,i,i,i,B.l(i,i,h?A.aO:A.M,i,i,i,i,i,i,i,i,13,i,i,A.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?A.bj:A.aO
u=B.m(16)
t=B.G(h?A.aI:A.aJ,A.r,1)
s=j.d
s===$&&B.c()
r=B.l(i,i,h?A.aO:A.M,i,i,i,i,i,i,i,i,15,i,i,A.a1,i,i,!0,i,i,i,i,i,i,i,i)
v=B.p(i,B.A(B.a([B.C(B.aK(i,A.U,!1,i,!0,A.q,i,B.aL(),s,i,i,i,i,i,2,B.bl(i,A.ep,i,A.bk,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l(i,i,h?A.bP:A.aj,i,i,i,i,i,i,i,i,i,i,i,A.cp,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),A.z,!0,i,!0,i,!1,i,A.ae,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,A.a8,i,i,i,i,i,i,i,i,i,i,i,r,!0,A.a5,i,A.am,i,i,i,i),1),new B.H8(j.d,i,i)],a0),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(v,i,t,u,i,i,A.n),i,i,i,i,A.ef,i,i,i)
u=B.d("Printable document",i,i,i,i,i,i,B.l(i,i,h?A.aO:A.M,i,i,i,i,i,i,i,i,i,i,i,A.a1,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=B.it(A.aK,i,i,A.ag,i,new C.ezJ(j),i,B.d("Shows a printable badge on this answer",i,i,i,i,i,i,B.l(i,i,h?A.bP:A.aj,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
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
return B.ce(d,g,B.cL(B.a([f,A.P,w,A.d1,e,A.P,v,A.aN,u,A.P,t,A.au,s,A.aa,B.aD(!1,A.X,!0,q,B.aH(!1,p,!0,B.p(i,B.A(B.a([m,A.en,l,B.V(A.A6,h?A.bP:A.aj,i,i,i,16)],a0),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(i,i,n,o,i,i,A.n),i,i,i,i,A.fv,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gc4q(),i,i,i,i,i,i,i),A.h,r,0,i,i,i,i,i,A.ac)],a0),i,A.c1,i,i,A.ah,!1),i,!1,!1,i,i)}}
C.cVU.prototype={}
C.Te.prototype={
S(){return new C.aAp(B.k6(!0,null,!0,!0,null,null,!1))}}
C.aAp.prototype={
Z(){var w,v,u,t,s,r,q=this
q.a0()
w=J.dF(q.a.c,new C.dQB())
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
atj(d,e){var w,v,u,t,s,r=this.d
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
aU8(d){var w,v,u,t,s=this.d
s===$&&B.c()
s=s.a
w=s.a
v=A.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=A.a.o5(w,v,v,u)
this.d.bG(0,new B.bb(t,B.h1(A.bo,v+u.length),A.aL))},
a96(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a96=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(Z.F3(78,1920),$async$a96)
case 3:s=e
if(s==null){w=1
break}t.n(new C.dQh(t,s))
case 1:return B.h(u,v)}})
return B.i($async$a96,v)},
W0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$W0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hQ().a35(A.et),$async$W0)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return B.b(s.f8(),$async$W0)
case 4:t.n(new r.dQm(t,e))
case 1:return B.h(u,v)}})
return B.i($async$W0,v)},
a97(){var w=0,v=B.j(x.H),u=this,t,s,r,q
var $async$a97=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.at()
s=new B.ao(A.aq,t)
r=new B.ao(new B.bb("https://",A.aZ,A.aL),t)
q=u.c
q.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.dQk(s,r),q,null,!0,!0,x.y),$async$a97)
case 2:if(e===!0)u.n(new C.dQl(u,s,r))
s.R$=t
s.O$=0
r.R$=t
r.O$=0
return B.h(null,v)}})
return B.i($async$a97,v)},
bxe(){var w,v,u,t,s,r=null,q=B.a([],x.a),p=this.d
p===$&&B.c()
p=A.a.fl(p.a.a,B.ad("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.I(p,new C.dQd(),B.T(p).k("I<1,n>")).bZ(0,new C.dQe())
for(p=J.aW(w.a),v=new B.hX(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gT(p)
if(A.a.a_(s,"## "))q.push(new C.li("heading",A.a.i(A.a.aU(s,3)),r,r))
else if(A.a.a_(s,"\u2022 ")||A.a.a_(s,"- "))q.push(new C.li("bullets",new B.I(B.a(s.split("\n"),u),new C.dQf(),t).bZ(0,new C.dQg()).aF(0,"\n"),r,r))
else q.push(new C.li("text",s,r,r))}p=this.e
p===$&&B.c()
A.d.v(q,p)
if(q.length===0)q.push(D.a14)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.K(d).ax.a===A.H,m=new C.cVU(n),l=n?A.aG:A.fr,k=B.d(p.a.d,o,o,o,o,o,o,A.cq,o,o,o),j=x.p
k=B.eA(B.a([B.dj(S.Yr,A.a4A,new C.dQr(p,d),B.bk(A.aK,o,o,o,A.c,o,o,o,o,o,o,o)),A.ab],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?A.d3:A.iP
v=B.cb(A.bH,B.a([p.uJ(E.Ku,"Bold",new C.dQs(p),m),p.uJ(E.WI,"Italic",new C.dQt(p),m),p.uJ(E.aeX,"Underline",new C.dQu(p),m),p.uJ(Ab.WP,"Heading",new C.dQv(p),m),p.uJ(O.Kv,"Bullets",new C.dQw(p),m),p.uJ(E.aeW,"Align",new C.dQx(),m),p.uJ(A.DX,"Link",p.gbS6(),m),p.uJ(A.p0,"Image",p.gbS5(),m),p.uJ(Y.X0,"Video",p.gbS7(),m),p.uJ(M.Y6,"Signature",new C.dQy(p),m),p.uJ(Y.Kw,"Divider",new C.dQz(p),m)],j),A.bx,4,4)
w=B.p(o,B.u(B.a([v,A.ar,B.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,B.l(o,o,n?A.fM:A.bv,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),A.ad,o,A.e,A.j,0,A.p),A.h,w,o,o,o,o,o,o,E.adS,o,o,o)
v=n?A.dd:A.c
u=B.m(12)
t=B.G(n?A.fs:A.er,A.r,1)
s=B.a([new B.a9(0,A.G,A.x.j(n?0.35:0.08),A.cD,16)],x.V)
r=p.d
r===$&&B.c()
q=B.l(o,o,n?A.iz:A.aG,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=B.a([w,B.C(new B.B(A.c1,B.p(o,B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),r,o,o,o,o,o,2,B.bl(o,A.ep,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.l(o,o,n?A.fM:A.bv,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!0,p.f,A.ae,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,q,!0,A.a5,o,A.am,o,o,o,o),A.h,o,o,new B.o(v,o,t,u,s,o,A.n),o,o,o,o,A3.zK,o,o,o),o),1)],j)
n=p.e
n===$&&B.c()
if(n.length!==0){n=new B.hw(n,B.T(n).k("hw<1>"))
j.push(B.p(o,B.cb(A.bH,n.gdH(n).di(0,new C.dQA(p,m),x.g5).dz(0),A.bx,0,8),A.h,o,o,o,o,o,o,o,A.JQ,o,o,o))}return B.ce(k,l,B.u(j,A.m,o,A.e,A.j,0,A.p),o,!1,!1,o,o)},
uJ(d,e,f,g){var w=null,v=g.a,u=v?A.dd:A.c,t=B.m(8),s=B.m(8)
return B.hJ(B.aD(!1,A.X,!0,t,B.aH(!1,s,!0,new B.B(A.ch,B.V(d,v?A.iz:A.aG,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.h,u,0,w,w,w,w,w,A.ac),w,e,w,w)}}
C.d7T.prototype={}
C.axZ.prototype={
a3(){return"_KbView."+this.b}}
C.an9.prototype={
S(){return new C.aAo(D.aMF)},
cFK(d,e){return this.e.$2$size(d,e)}}
C.aAo.prototype={
gavY(){var w,v
if(this.e==null)return null
for(w=J.aW(this.a.c);w.C();){v=w.gT(w)
if(v.a===this.e)return v}return null},
gciQ(){var w,v,u,t,s,r=this.gavY()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
bZX(d){this.n(new C.dQa(this,d))},
c5z(d){this.n(new C.dQb(this,d))},
bvx(){this.n(new C.dQ2(this))},
bvz(){this.n(new C.dQ3(this))},
gb0p(){var w=B.bi(this.a.c,!0,x.i)
A.d.aY(w,new C.dQc())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.K(d).ax.a===A.H,f=new C.d7T(g),e=x.O
e=g?B.a([A.M.j(0.9),A.bj.j(0.85)],e):B.a([A.eq.j(0.55),A.lN.j(0.45)],e)
w=B.m(22)
v=B.G((g?A.aI:A.hq).j(0.55),A.r,1)
switch(i.d.a){case 0:g=i.bwv(f)
break
case 1:g=i.gavY()
g.toString
g=i.bxc(f,g)
break
case 2:u=i.gavY()
u.toString
t=i.gciQ()
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
j=B.u(B.a([new C.axX(f,i.gbvy(),u.c,s,"Answer",h),B.C(B.cL(B.a([r,A.aa,B.p(h,B.u(B.a([B.p(h,B.A(B.a([k,A.ez,B.d("Stored answer",h,h,h,h,h,h,B.l(h,h,g?A.dE:A.e9,h,h,h,h,h,h,h,h,11,h,h,A.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),A.m,h,A.e,A.R,0,h,h),A.h,h,h,new B.o(m,h,h,l,h,h,A.n),h,h,h,A.dZ,A.h0,h,h,h),new C.aWM(t.c,t.e,f,h)],j),A.F,h,A.e,A.j,0,A.p),A.h,h,h,new B.o(q,h,o,p,n,h,A.n),h,h,h,h,A.c1,h,h,1/0)],j),h,A.bfG,h,h,A.ah,!1),1)],j),A.ad,h,A.e,A.j,0,A.p)
g=j
break
default:g=h}return B.p(h,g,A.ap,h,h,new B.o(h,h,v,w,h,new B.a8(A.b4,A.bb,A.w,e,h,h),A.n),h,h,h,A.iX,h,h,h,h)},
aRV(d){var w,v,u,t=null,s=d.a,r=s?D.rd:A.c,q=A.aA.j(0.22)
q=B.a([new B.a9(0,A.G,q,A.J,14),new B.a9(0,A.G,A.x.j(s?0.28:0.06),A.J,8)],x.V)
w=B.G(s?A.aI:A.hq,A.r,2)
v=this.a
u=x.p
q=B.a([B.p(t,B.hN(v.cFK(v.d,72),A.ap),A.h,t,t,new B.o(r,t,w,t,q,t,A.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)A.d.v(q,B.a([A.ar,B.d("Tap to switch",t,t,t,t,t,t,B.l(t,t,A.dk,t,t,t,t,t,t,t,t,12,t,t,A.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return B.u(q,A.m,t,A.e,A.j,0,A.p)},
bwv(d){var w,v,u=this,t=null,s=u.a.r
s=B.as(s!=null?B.aJ(t,u.aRV(d),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,A.af):u.aRV(d),t,t,t)
w=d.a
v=B.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,B.l(t,t,w?A.aO:A.M,t,t,t,t,t,t,t,t,20,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t)
return B.cL(B.a([s,A.ay,v,A.ar,B.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,B.l(t,t,w?A.bP:A.aj,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),A.L,t,t),A.bs,B.ig(!0,t,t,A.z,F.aHT,new C.dQ5(u,d),u.gb0p().length,t,A.dJ,A.ah,!0)],x.p),t,D.bfZ,t,t,A.ah,!1)},
bxc(d,e){var w,v,u,t,s=null,r=B.bi(e.e,!0,x.u)
A.d.aY(r,new C.dQ7())
w=B.aX(e.d)
v=d.a
u=B.d("Tap a question to read the stored answer.",s,s,s,s,s,s,B.l(s,s,v?A.bP:A.aj,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=B.as(B.d("No questions in this category yet.",s,s,s,s,s,s,B.l(s,s,v?A.bP:A.aj,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=B.hF(s,new C.dQ8(this,r,d,e),t,A.ue,s,A.ah,new C.dQ9(),!1)
return B.u(B.a([new C.axX(d,this.gbvw(),e.c,w,e.b,s),new B.B(Ag.wo,u,s),B.C(v,1)],x.p),A.ad,s,A.e,A.j,0,A.p)}}
C.axX.prototype={
B(d){var w=this,v=null,u=w.c.a,t=B.aF(v,v,v,v,B.V(A.es,u?A.aO:A.M,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=B.m(12)
q=B.p(v,B.V(w.e,s,v,v,v,22),A.h,v,v,new B.o(r,v,v,q,v,v,A.n),v,v,v,v,A.ch,v,v,v)
return new B.B(D.bja,B.A(B.a([t,q,A.av,B.C(B.d(w.r,v,v,v,v,v,v,B.l(v,v,u?A.aO:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v),v)}}
C.a9m.prototype={
B(d){var w=null,v=this.c,u=B.aX(v.d),t=this.d.a,s=t?D.rd:A.c,r=B.m(14),q=B.m(14),p=B.m(14),o=B.G(t?A.aI:A.aJ,A.r,1),n=B.a([new B.a9(0,A.G,A.x.j(t?0.28:0.06),A.dG,6)],x.V),m=u.j(0.15),l=B.m(12)
l=B.p(w,B.V(v.c,u,w,w,w,22),A.h,w,w,new B.o(m,w,w,l,w,w,A.n),w,40,w,w,w,w,w,40)
return new B.fN(1,B.aD(!1,A.X,!0,r,B.aH(!1,q,!0,B.p(w,B.u(B.a([l,A.ar,B.d(v.b,w,2,A.Z,w,w,w,B.l(w,w,t?A.aO:A.M,w,w,w,w,w,w,w,w,10,w,w,A.I,w,1.1,!0,w,w,w,w,w,w,w,w),A.L,w,w)],x.p),A.m,w,A.b5,A.j,0,A.p),A.h,w,w,new B.o(w,w,o,p,n,w,A.n),w,w,w,w,A.ch,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),A.h,s,0,w,w,w,w,w,A.ac),w)}}
C.aWM.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=B.a([],q)
if(this.d){w=r.a
v=w?A.fn:A.pU
u=B.m(8)
t=B.V(A.rZ,w?A.dE:A.e9,s,s,s,14)
p.push(B.p(s,B.A(B.a([t,A.d4,B.d("Printable document",s,s,s,s,s,s,B.l(s,s,w?A.dE:A.e9,s,s,s,s,s,s,s,s,10,s,s,A.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),A.m,s,A.e,A.R,0,s,s),A.h,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,A.cH,A.ew,s,s,s))}A.d.v(p,J.b4(this.c,new C.c3E(r),x.l))
return B.u(p,A.F,s,A.e,A.j,0,A.p)}}
C.a9e.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new B.B(D.bdU,B.d(q.b,r,r,r,r,r,r,B.l(r,r,s.d.a?A.aO:A.M,r,r,r,r,r,r,r,r,15,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new B.B(A.hs,B.bu(B.m(12),K.aM_(r,A.bM,160,A.p0,r,w,1/0),A.ap),r)
case"video":v=q.c
q=v==null?q.b:v
return new B.B(A.hs,new C.axY(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new B.B(A.wj,B.aH(!1,r,!0,B.d(q,r,r,r,r,r,r,B.l(r,r,s.d.a?A.cK:A.bh,r,A.mc,r,r,r,r,r,r,r,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cy8(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=B.jm(v?A.aI:A.aJ,r,r,r,r,r)
q=B.d(q.b,r,r,r,r,r,r,B.l(r,r,v?A.ct:A.aI,r,r,r,r,r,r,r,r,r,A.cz,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=B.p(r,r,A.h,v?A.bP:A.aj,r,r,r,1,r,r,r,r,r,120)
return new B.B(A.zw,B.u(B.a([u,q,A.aN,t,A.au,B.d("Signature",r,r,r,r,r,r,B.l(r,r,v?A.bP:A.aj,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.F,r,A.e,A.j,0,A.p),r)
case"bullets":v=x.cl
q=B.z(new B.cQ(new B.a4(B.a(q.b.split("\n"),x.s),new C.cy9(),x.cc),new C.cya(s),v),v.k("F.E"))
return new B.B(A.lm,B.u(q,A.F,r,A.e,A.j,0,A.p),r)
case"divider":return new B.B(A.hs,B.jm(s.d.a?A.aI:A.aJ,r,r,r,r,r),r)
default:q=q.b
if(A.a.i(q).length===0)return A.bF
return new B.B(A.fh,C.hqg(q,s.d),r)}}}
C.axY.prototype={
S(){return new C.bcM()}}
C.bcM.prototype={
Z(){this.a0()
this.ab5()},
ab5(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$ab5=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=A.a.i(r.a.c)
if(J.aa(n)!==0)p=!J.cS(n,"http")&&!J.cS(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=B.W1(B.cq(n,0,null),null)
w=7
return B.b(J.afh(q),$async$ab5)
case 7:if(r.c==null){w=1
break}r.n(new C.d7U(r,q))
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
return B.i($async$ab5,v)},
p(){var w=this.d
if(w!=null)w.p()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?A.bj:A.eZ
u=B.m(12)
return B.p(A.B,B.V(A.pb,w?A.bP:A.aj,t,t,t,36),A.h,t,t,new B.o(v,t,t,u,t,t,A.n),t,120,t,t,t,t,t,t)}w=B.m(12)
v=s.a
u=J.aff(v)
return B.bu(w,new B.fN(u,new B.am(A.B,t,A.a9,A.q,B.a([new B.yZ(s,t),B.aF(t,t,t,t,B.V(v.f?A.af3:A.Kx,A.c,t,t,t,44),t,t,t,new C.d7W(this,s),t,t,t,t,t,t)],x.p),t),t),A.ap)}}
C.anV.prototype={
a3(){return"NgmyMusicLane."+this.b}}
C.GZ.prototype={
a3(){return"NgmyMusicRhymeScheme."+this.b}}
C.qP.prototype={}
C.anc.prototype={
S(){var w=null
return new C.aAq(new B.ao(A.aq,$.at()),B.m6(0,w,w),B.a([],x.m),D.B2,D.aA5,w,w)},
gdQ(){return this.d}}
C.aAq.prototype={
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
w.bpb()},
gamL(){var w,v,u,t,s=this.x
if(s===D.B3)return null
s=s===D.B2
w=s?D.a_G:D.ZY
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?A.d.gI(w):null},
cjB(d){return this.n(new C.dQP(this,d))},
avL(){$.aS.x1$.push(new C.dQG(this))},
Hq(d){return this.cj3(d)},
aU9(){return this.Hq(null)},
cj3(b0){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
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
a1=A.d.be(a0,new C.dQI())
o=!p&&!a1
d=a8.toLowerCase()
if(!(A.a.q(d,"fix")||A.a.q(d,"rewrite")||A.a.q(d,"re-write")||A.a.q(d,"rhyme better")||A.a.q(d,"better rhyme")||A.a.q(d,"sound better")||A.a.q(d,"improve")||A.a.q(d,"polish")||A.a.q(d,"make it rhyme")||A.a.q(d,"boresha")||A.a.q(d,"rekebisha")||A.a.q(d,"endeleza mistari")))a2=C.fXF(a8)&&a1
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
l=C.fXF(a8)&&!p
q.n(new C.dQJ(q,a8))
q.avL()
k=A.a.i(q.a.c)
if(J.aa(k)===0){q.n(new C.dQK(q))
q.avL()
w=1
break}t=5
j=B.mE(k)
i=new B.I(a0,new C.dQL(),B.T(a0).k("I<1,n>")).aF(0,"\n\n")
a0=C.hJ8(m,p,o,q.x,n,q.y,q.gamL(),l)
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
a6=A.a.i(a0)}else a6=L.bxh(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.n(new C.dQM(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.n(new C.dQN(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.n(new C.dQO(q))
q.avL()
w=r.pop()
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Hq,v)},
bB6(){return this.Hq("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=B.K(d).ax.a===A.H,p=q?A.D4:D.b5Y,o=x.p
o=B.a([B.u(B.a([B.C(s.cij(q),1),s.bAl(q)],o),A.m,r,A.e,A.j,0,A.p)],o)
if(s.f.length!==0&&!s.r){w=A.aM.j(0.55)
v=s.r?r:s.gbB5()
u=B.m(28)
t=B.a([A.aM,A.b_],x.O)
o.push(B.an(78,B.aD(!1,A.X,!0,r,B.aH(!1,r,!0,B.er(D.dMb,r,new B.o(r,r,r,u,B.a([new B.a9(0,A.G,A.aM.j(0.45),A.cD,16)],x.V),new B.a8(A.a_,A.a7,A.w,t,r,r),A.n),r,r,r),A.qO,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),A.h,A.K,10,r,w,A.qO,r,r,A.ac),r,r,r,14,r,r))}return B.p(r,new B.am(A.V,r,A.a9,A.q,o,r),A.h,p,r,r,r,r,r,r,r,r,r,r)},
cij(d){var w,v,u,t=this,s=null
if(t.x===D.B3)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=B.a([B.fBL(s,!1,A.K,0,0,w,B.fy8(t.cnN(d),A.T0,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=B.V(A.ahr,A.aA.j(0.5),s,s,s,52)
w.push(B.b2h(new B.B(A.em,B.u(B.a([u,A.ay,B.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,B.l(s,s,d?A.aB:A.dx,s,s,s,s,s,s,s,s,14,s,s,A.a1,s,1.45,!0,s,s,s,s,s,s,s,s),A.L,s,s),A.ay,B.cb(A.fB,B.a([t.afe("Full bongo love song ABAB",d),t.afe("Mix: group vs private jet \u2014 which flies?",d),t.afe("Song from John 3:16 + matching verses",d),t.afe("Fix my rhyme \u2014 paste your lines",d)],v),A.bx,8,8)],v),A.m,s,A.b5,A.j,0,A.p),s),!1))}else{v=t.r?1:0
w.push(new B.nn(D.bey,B.Vt(new B.nX(new C.dQH(t,d),u+v,!0,!0,!0,0,B.rg(),s)),s))}return B.uI(0,s,A.q,t.e,A.z,s,s,A5.a6F,s,s,!1,s,A.ah,!1,w)},
cnN(d){var w=this.as
w===$&&B.c()
return B.c4(w,new C.dQW(this,d),null)},
cnP(d){var w,v=this,u=null,t=B.m(14),s=v.r?u:new C.dQY(v),r=A.x.j(d?0.35:0.06),q=B.m(14),p=B.G(A.bc.j(0.35),A.r,1),o=v.gamL()
o=o==null?u:o.c
o=B.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,A.H8,u,u,u)
w=v.gamL()
w=w==null?u:w.b
if(w==null)w="Style"
w=B.C(B.d(w,u,u,u,u,u,u,B.l(u,u,d?A.c:A.bi,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.p(u,B.A(B.a([o,A.ab,w,B.V(v.w?A.KW:A.qh,A.bc,u,u,u,20)],x.p),A.m,u,A.e,A.j,0,u,u),A.h,u,u,new B.o(r,u,p,q,u,u,A.n),u,u,u,u,A.rF,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),A.h,A.K,0,u,u,u,u,u,A.ac)},
arN(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=B.a([A.aW,A.aS],x.O)
break
case 1:w=B.a([A.bh,A.cK],x.O)
break
case 2:w=B.a([A.bz,A.aA],x.O)
break
default:w=n}v=m?6:0
u=B.m(14)
t=B.m(14)
s=this.r?n:new C.dQF(this,d)
r=B.m(14)
w=m?new B.a8(A.a_,A.a7,A.w,w,n,n):n
if(m)q=n
else q=A.x.j(g?0.3:0.05)
p=B.d(f,n,n,n,n,n,n,A.H8,n,n,n)
if(m)o=A.c
else o=g?A.al:A.bi
return B.C(B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.dg(n,B.u(B.a([p,B.d(e,n,n,n,n,n,n,B.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),A.m,n,A.e,A.j,0,A.p),n,n,A.b9,new B.o(q,n,n,r,n,w,A.n),A.X,n,n,n,A.jB,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),A.h,n,v,n,n,n,n,n,A.ac),1)},
cnQ(d,e){var w,v,u,t=this,s=null,r=t.x===D.B2?t.z:t.Q,q=B.m(20)
if(r===d.a)r=A.bc.j(e?0.25:0.15)
else r=A.x.j(e?0.2:0.04)
w=B.m(20)
v=t.r?s:new C.dQZ(t,d)
u=B.d(d.c,s,s,s,s,s,s,A.QD,s,s,s)
return B.aD(!1,A.X,!0,q,B.aH(!1,w,!0,new B.B(A.fF,B.A(B.a([u,A.d4,B.d(d.b,s,s,s,s,s,s,B.l(s,s,e?A.c:A.bi,s,s,s,s,s,s,s,s,10,s,s,A.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.m,s,A.e,A.R,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),A.h,r,0,s,s,s,s,s,A.ac)},
afe(d,e){var w=null,v=B.d(d,w,w,w,w,w,w,E.a4t,w,w,w),u=A.aA.j(e?0.2:0.1)
return B.mG(w,u,v,w,this.r?w:new C.dQQ(this,d),w,w,w,w)},
bAl(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=B.m(22),o=d?A.M.j(0.95):A.c,n=B.G(A.aA.j(0.2),A.r,1),m=x.p,l=B.a([],m)
if(q>0)l.push(new B.B(G.adD,B.d("$"+A.k.ab(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,B.l(r,r,A.aM.j(0.85),r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=B.l(r,r,d?A.c:A.bi,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.B3?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=B.C(B.aK(r,A.U,!1,r,!0,A.q,r,B.aL(),w,r,r,r,r,r,2,B.bl(r,A.ep,r,A.h1,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.l(r,r,d?A.c3:A.hU,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.z,!0,r,!0,r,!1,r,A.ae,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.dQC(s),r,!1,r,r,!1,r,!0,r,A.a8,r,r,r,r,r,r,r,r,r,r,r,v,!0,A.a5,r,A.am,r,r,r,r),1)
u=s.r
t=u?r:new C.dQD(s)
l.push(B.A(B.a([v,new B.H8(w,A.aA,r),B.aD(!1,A.X,!0,r,B.aH(!1,r,!0,B.er(u?D.dMl:D.bx3,r,D.aSl,42,r,42),A.cE,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),A.h,r,0,r,r,A.cE,r,r,A.ac)],m),A.dD,r,A.e,A.j,0,r,r))
return B.p(r,B.u(l,A.ad,r,A.e,A.R,0,A.p),A.h,r,r,new B.o(o,r,n,p,r,r,A.n),r,r,r,A.uc,A.acd,r,r,r)}}
C.aIl.prototype={
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
S(){return new C.axq(null,null)},
baR(){return this.f.$0()}}
C.axq.prototype={
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
w=B.bh(u,A.o0,u,1,u,v)
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
w.bo2()},
bZZ(){var w=this.d
w===$&&B.c()
w.en(0).bw(new C.d5t(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(B.aG(d,A.bO,x.w).w.a.a-32,360),h=A.x.j(0.82),g=k.gbZY(),f=x.l,e=J.e_(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&B.c()
e[v]=new B.BQ(new C.d5u(k,v,d),j,w,j)}f=B.z(e,f)
w=k.d
w===$&&B.c()
u=B.m(28)
t=B.G(A.c.j(0.22),A.r,1.5)
s=B.a([new B.a9(2,A.G,A.b_.j(0.35),A.J,40),new B.a9(0,A.G,A.aK.j(0.25),A.fz,28)],x.V)
r=k.e
r===$&&B.c()
q=k.r
q===$&&B.c()
q=B.c4(new B.h3(B.a([r,q],x.U)),new C.d5v(k),j)
r=B.nm(A.j3,D.eTz,new C.d5w())
p=B.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,B.l(j,j,A.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,A.cp,j,1.45,!0,j,j,j,j,j,j,j,j),A.L,j,j)
o=x.p
n=B.A(B.a([k.aUa(A.jZ,"Resets in 24h"),A.ab,k.aUa(A.p6,"Help Topics ready")],o),A.m,j,A.b5,A.j,0,j,j)
m=B.a([],o)
k.a.toString
l=A.c.j(0.35)
m.push(B.C(B.dU(D.eOw,new C.d5x(k),B.d9(j,j,j,j,j,j,j,j,j,A.al,j,j,A.lS,j,new B.b5(B.m(14),A.W),new B.ax(l,1,A.r,-1),j,j,j,j)),1))
k.a.toString
m.push(A.av)
k.a.toString
l=B.m(14)
m.push(B.C(B.bJ(D.eTq,g,B.bk(A.aK,j,j,6,A.c,j,A.lS,A.aK.j(0.5),new B.b5(l,A.W),j,j,j)),1))
f.push(B.as(B.aJ(j,B.c4(w,new C.d5y(k),B.p(j,B.u(B.a([q,A.ay,r,A.T,p,A.P,n,A.bs,B.A(m,A.m,j,A.e,A.j,0,j,j)],o),A.m,j,A.e,A.R,0,A.p),A.h,j,j,new B.o(j,j,t,u,s,D.bEJ,A.n),j,j,j,j,A6.adv,j,j,i)),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.d5z(),j,j,j,j,j,j,!1,A.af),j,j,j))
return B.aD(!1,A.X,!0,j,B.aJ(j,new B.am(A.V,j,A.a9,A.q,f,j),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,A.af),A.h,h,0,j,j,j,j,j,A.ac)},
aUa(d,e){var w=null,v=A.c.j(0.08),u=B.m(20),t=B.G(A.c.j(0.12),A.r,1)
return B.p(w,B.A(B.a([B.V(d,A.b_,w,w,w,13),A.ez,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.R,0,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.fF,w,w,w)}}
C.aHf.prototype={
aN(){this.aV()
this.aS()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdB())
w.aX$=null
w.a2()}}
C.LS.prototype={}
C.pl.prototype={}
C.anJ.prototype={
S(){return new C.aAM(B.a([],x.E),B.a([],x.s))}}
C.aAM.prototype={
gan8(){return A.k.D(B.Jh(this.a.c.a,new C.e_p(this)),0,1/0)},
a5H(){var w,v=this,u=v.d,t=v.gan8()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)B.qg(u.a,t,!0,!1)},
HU(d,e){var w,v,u,t=this,s=t.gan8(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gan8()
if(w<v-0.005)B.h1G(t.a.c.a,v-w)
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
w=$.GP+1
$.GP=w
if(w===1){w=$.fPs
if(w!=null)w.$0()}v=$.fAb.h(0,A.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=B.bi(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=B.bi(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=B.lq(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,A.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=B.aLF(u,A.k.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new B.uB(w,u,r,q,s.e,p)}o.d=t}o.Nk()
o.a5H()
$.aS.x1$.push(new C.e05(o))
o.Q=B.dE(A.ng,new C.e06(o))
o.as=B.dE(A.fE,new C.e07(o))},
p(){var w=this,v=w.Q
if(v!=null)v.a9(0)
v=w.as
if(v!=null)v.a9(0)
$.aS.hE(w)
C.hig()
w.a2()},
cpV(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new B.N(Date.now(),0,!1)
v=p.r
if(!C.a5o(v,w)){if(C.fAd(p,q.e)){q.n(new C.e_O(q,p))
q.zq(!1,!0,!0)}else if(q.c!=null)q.n(new C.e_P())
return}if(!C.c5T(v.c?v.bO():v)){q.n(new C.e_Q(p))
q.aUj(!1)
return}u=p.gBc()
if(u<=0)return
t=w.cU(B.bX(B.bw(w),B.bB(w),B.bL(w),12,0,0,0,0))
s=C.fAe(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.n(new C.e_R())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(A.d.be(q.e,new C.e_S(r))){q.n(new C.e_T(p,w,u))
return}q.n(new C.e_U(q,p,u,w))
q.atQ(new B.cW(r,p.a,u,A.fA,A.f8,"Clock-in daily earnings (local)",null,null,A.cg,w))},
iM(d){if(d===A.fm)this.Dm()},
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
PV(d){return this.coA(d)},
coA(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$PV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.Nk()
t.HU(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return B.b(x.r.b(s)?s:B.dR(s,x.H),$async$PV)
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
break}if(p.a[0]){q.n(new C.e_J(q,p))
q.PV(!1)}w=8
return B.b(q.I5(),$async$Dm)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=B.a5(h)
$.al.$1("[growth income] pull wallet: "+B.t(o))
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
LO(d){return this.buK(d)},
buJ(){return this.LO(null)},
buK(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
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
o=d==null?null:B.km(d,B.T(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,B.J)(r),++m){l=r[m]
k=l.a
if(q.q(0,k))continue
if(o!=null&&!o.q(0,k))continue
if(l.d===A.fc&&l.x===A.cg&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.n(new C.e_q(j,t,i))
q.v(0,p)
r=B.z(q,B.a2(q).k("ck.E"))
t.w=r
w=4
return B.b(B.anK(t.a.c.a,r),$async$LO)
case 4:t.atr(!1,!0)
r=t.c
if(r!=null)r.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d("Balance updated: +$"+B.du(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$LO,v)},
I5(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$I5=B.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=B.T(a2).k("a4<1>")
a4=B.z(new B.a4(a2,new C.e_K(),a3),a3.k("F.E"))
a5=a4
a6=B.a([],x.s)
w=J.aa(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=B.T(a2).k("I<1,n>")
e=B.z(new B.I(a2,new C.e_L(),a3),a3.k("ai.E"))
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
j=A.d.bf(r.e,new C.e_M(l))
if(j<0)continue
i=r.e[j].x
if(J.y(k,1))a0=A.cg
else a0=J.y(k,2)?A.ke:A.dn
h=a0
if(!J.y(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===A.dn&&h===A.cg&&a3[j].d===A.fc)J.ch(a6,l)
if(i===A.dn&&h===A.ke&&r.e[j].d===A.eB){g=r.d
if(g!=null){r.HU(g.d+r.e[j].c,!1)
r.atr(!1,!0)}}}}if(o&&r.c!=null)r.n(new C.e_N())
t=2
w=8
break
case 6:t=5
a7=s.pop()
f=B.a5(a7)
$.al.$1("[growth income] refresh deposit status: "+B.t(f))
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
return B.b(r.buJ(),$async$I5)
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
break}t.n(new C.e_u(t,i))
t.Nk()
t.a5H()
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
t.a5H()
k=C.fAd(n,m)
if(k)t.HU(n.d,!1)
t.Nk()
if(t.c==null){w=1
break}t.n(new C.e_v(t,n,m,l))
if(k)t.zq(!1,!0,!0)
else t.PV(!1)
case 1:return B.h(u,v)}})
return B.i($async$NW,v)},
zq(d,e,f){return this.c93(d,e,f)},
atr(d,e){return this.zq(d,!1,e)},
aUj(d){return this.zq(!1,d,!1)},
c93(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
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
c_e(){this.n(new C.e_D())
this.atr(!1,!0)},
abI(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===A.cg&&B.rd(d)){w=r.a
w.f.$1(new B.cW(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.c5Q(q,d)
v=q.d=B.Jh(r.a.c.a,new C.e_A(r))
r.at=r.a.c.d=v
B.qg(q.a,v,!0,!1)
if(r.c!=null)r.n(new C.e_B(r,d))
r.zq(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new B.cW(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===A.dn
if(w&&d.d===A.fc)s=!1
else if(w&&d.d===A.eB){r.HU(q.d-d.c,!0)
s=!0}else{C.c5Q(q,d)
w=d.d
s=w===A.eB||w===A.js
r.HU(q.d,s)}r.n(new C.e_C(r,d))
w=d.d
r.zq(s,e,w===A.eB||w===A.js||d.x===A.cg||w===A.fA)},
atQ(d){return this.abI(d,!0,!1)},
aVd(d,e){return this.abI(d,!0,e)},
aVc(d,e){return this.abI(d,e,!1)},
c27(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.hLi(u,e,d)){v.lz("This plan is already active.")
return}w=B.h1c(u.a,d,e)
if(C.hHL(u.a,v.e,w)){v.lz("You already own this plan.")
return}if(u.d<g){v.lz("Insufficient balance. Add funds in the Wallet tab first.")
return}v.n(new C.e_E(v))
v.n(new C.e_F(v,u,new B.uB(d,e,0.0286,new B.N(Date.now(),0,!1),0,0)))
v.atQ(new B.cW(w,u.a,g,A.js,A.f8,"Direct investment buy: "+d,null,null,A.cg,new B.N(Date.now(),0,!1)))
v.n(new C.e_G(v))
v.lz("Plan purchased: "+d)},
lz(d){var w=null,v=this.c
if(v==null)return
v.F(x.q).f.P(B.b_(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
Y9(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Y9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hl(s,new C.akN(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$Y9)
case 3:w=4
return B.b(t.NW(),$async$Y9)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Y9,v)},
aca(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aca=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hl(s,new C.afB(r,B.a([r],x.d9),A.NP,t.a.d,t.gaVb(),t.gaUi(),null),!1,null,x.X),$async$aca)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aca,v)},
ac8(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ac8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hl(s,new C.aim(r,t.a.d,t.e,t.gaVb(),t.gaUi(),new C.e_I(t),null),!1,"LocalGrowthGameCenter",x.X),$async$ac8)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ac8,v)},
a9S(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$a9S=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new B.N(s,0,!1)
w=C.fAd(j,t.e)?3:4
break
case 3:w=5
return B.b(t.aUj(!0),$async$a9S)
case 5:case 4:if(j.x==null){t.lz("Choose an investment plan first, then come back to clock in.")
t.n(new C.e_w(t))
w=1
break}if(B.mu(r)===6||B.mu(r)===7){t.lz("Clock-in opens Monday through Friday.")
w=1
break}if(!C.fQa(r)){t.lz("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a5o(q,r)&&j.fy>0){t.lz("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!B.a0a(q,r))if(!B.a0a(j.fr,r)){q=B.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,B.J)(p),++n){m=p[n]
if(A.a.i(m.b.toLowerCase())===A.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new B.aCz(m.y,l,m.a))}}q=B.h0E(q,r)}else q=p
else q=p}else q=!1
if(q){t.lz("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.lz("You are already clocked in for today.")
w=1
break}k=C.hjF(r)
q=j.a
t.n(new C.e_x(j,r,k))
t.aVc(new B.cW("local_clockin_manual_"+q+"_"+s,j.a,0,A.fA,A.f8,"Clock-in session started (local)",null,null,A.cg,r),!1)
t.lz("Clock-in started. Keep Growth Income open for today.")
case 1:return B.h(u,v)}})
return B.i($async$a9S,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.K(d).ax.a===A.H?A.iT:A.oO
if(l.d==null)return B.ec(A.k9,j,!0)
w=x.o
v=B.R(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,B.J)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.m(0,q,r)}p=A.a.i(l.a.c.a.toLowerCase())
u=$.fdq
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
A.d.v(w,new B.a4(v,new C.e_Y(),B.T(v).k("a4<1>")))
A.d.aY(w,new C.e_Z())
v=l.d
v.toString
u=C.hxT(l.a.c)
t=l.d
t.toString
t=B.ec(new C.ajf(t,l.a.e,l.z,l.gc26(),l.aPu(),D.f09),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=B.ec(new C.aya(l.aPu(),q,n,o,w,new C.e0_(l),l.gc4a(),new C.e00(l),D.f0a),j,!0)
m=B.aG(d,k,x.w).w
n=l.y
return new B.U8(n,new C.e01(l),B.aD(!1,A.X,!0,k,new B.a3(1/0,m.a.b,new B.am(A.V,k,A.a9,A.q,B.a([B.bU(0,B.ec(k,j,!0),0,0,0),B.bU(0,B.br(!1,[new C.ay9(v,u,w,l.gbUV(),new C.e02(l),new C.e03(l),new C.e04(d),l.gc5_(),l.gc4W(),D.f08),t,o][n],!0,!1,A.ag,!0,!0),0,0,0),B.an(0,l.bwX(),k,k,0,0,k,k)],x.p),k),k),A.h,j,0,k,k,k,k,k,A.ac),k)},
aPu(){var w=null,v=B.a([D.eu.j(0.24),A.M.j(0.72)],x.O)
return B.hJ(B.aH(!1,w,!0,B.p(A.B,D.bBr,A.h,w,w,new B.o(w,w,B.G(D.eu.j(0.38),A.r,1),w,B.a([new B.a9(0,A.G,D.eu.j(0.18),A.J,16)],x.V),new B.a8(A.ax,A.aE,A.w,v,w,w),A.a6),w,40,w,w,w,w,w,40),A.cE,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e_t(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bwX(){var w=null,v=B.m(27),u=B.G(A.at.j(0.45),A.r,1),t=B.a([new B.a9(0,A.G,A.x.j(0.5),A.eH,24),new B.a9(-2,A.G,A.at.j(0.12),A.J,18)],x.V)
return new B.B(A.JQ,B.br(!0,B.as(new B.d2(D.aQI,B.p(w,B.cj(new C.e_r(this)),A.h,w,w,new B.o(w,w,u,v,t,D.bEf,A.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,A.ag,!0,!1),w)},
bWz(d){var w=null,v=this.y===d,u=D.cGi[d],t=u.b,s=u.a,r=""+d,q=x.W
return B.C(B.di(w,!0,w,B.aJ(A.c5,B.qV(B.ql(v?B.V(s,D.a7W,new B.cv("on"+r,q),w,w,21):B.u(B.a([B.V(s,A.c.j(0.62),w,w,w,19),A.bw,B.d(t,w,1,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,new B.cv("off"+r,q),A.b5,A.j,0,A.p),A.ib,B.tg(),A.b9,A.b9,B.a_q())),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e_z(this,d),w,w,w,w,w,w,!1,A.af),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,A.bX,w),1)}}
C.ay9.prototype={
bTL(d){return C.fAe(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
B.K(d)
w=A.c.j(0.58)
v=f.e
u=B.T(v).k("a4<1>")
u=B.oJ(new B.a4(v,new C.d9H(),u),3,u.k("F.E"))
t=B.z(u,B.a2(u).k("F.E"))
v=f.c
s=v.x
r=new B.N(Date.now(),0,!1)
q=v.f
p=C.a5o(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.fQa(r)
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
j=B.bJ_(!1,l,"GROWTH INCOME",B.aH(!1,i,!0,new B.a3(44,44,new B.am(A.V,e,A.a9,A.h,B.a([B.p(A.B,B.p(A.B,D.buc,A.h,e,e,new B.o(A.i9.j(0.78),e,e,h,e,e,A.n),e,36,e,e,e,e,e,36),A.h,e,e,new B.o(e,e,e,k,j,D.bFz,A.n),e,42,e,e,e,e,e,42),B.an(e,B.p(A.B,D.bAx,A.h,e,e,new B.o(A.cV,e,B.G(D.a9S,A.r,2),e,e,e,A.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.fSH(A.h_,new C.d9I(),k)
k=B.A(B.a([B.C(C.fSG(new C.d9J(f,A.tT,n),new B.N(Date.now(),0,!1),h,k),1),A.nB,B.C(new B.tL(new C.d9K(f,A.tT),e,new B.h3(B.a([$.xE(),$.a0x()],x.U)),e),1)],g),A.m,e,A.e,A.j,0,e,e)
h=f.bWJ(A.tT,D.eu)
v=B.C(f.cmf("Total Profit","$"+B.du(v.e),A.tT),1)
u=u?e:s.b
return B.ec(B.cf(B.u(B.a([j,A.T,k,A.aa,new C.ay8(f.d,m,q,p,n,o,D.eu,f.gbTK(),f.f,e),A.aa,h,A.T,B.A(B.a([v,A.nB,B.C(f.b0l("Total Investment","$"+B.du(u==null?0:u),A.tT,f.r),1)],g),A.m,e,A.e,A.j,0,e,e),A.T,f.bTH(d,t,D.eu,w)],g),A.ad,e,A.e,A.j,0,A.p),A.q,e,A.z,e,A.Vw,e,e,A.ah),D.a9S,!0)},
atq(d,e,f,g,h){var w=null,v=B.m(h),u=B.G(A.c.j(0.09),A.r,1),t=B.a([new B.a9(0,A.G,A.x.j(0.4),A.dm,18)],x.V)
return B.p(w,B.bu(B.m(h-1),new B.am(A.V,w,A.a9,A.q,B.a([B.bU(0,B.bQ(w,new B.o(w,w,w,w,w,new B.bS(f,1.15,A.w,w,0,B.a([e.j(0.22),e.j(0)],x.O),w,w),A.n),A.b7),0,0,0),new B.B(g,d,w)],x.p),w),A.ap),A.h,w,w,new B.o(w,w,u,v,t,D.bEC,A.n),w,w,w,w,w,w,w,w)},
aUh(d,e,f,g){return this.atq(d,e,f,A.ag,g)},
b2b(d,e,f,g,h,i,j){var w=null,v=B.an(-14,B.V(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=B.m(30),s=B.G(f.j(0.4),A.r,1),r=x.p,q=this.aUh(new B.a3(w,80,new B.am(A.V,w,A.a9,A.q,B.a([v,new B.B(D.bf0,B.u(B.a([B.p(w,B.A(B.a([B.V(e,f,w,w,w,15),A.ez,B.d(h.toUpperCase(),w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.R,0,w,w),A.h,w,w,new B.o(u,w,s,t,w,w,A.n),w,w,w,w,A.adI,w,w,w),A.b6,B.eY(A.a_,B.d(i,w,1,w,w,w,w,B.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,A.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,A.e8)],r),A.F,w,A.e,A.j,0,A.p),w)],r),w),w),f,A.kM,22)
if(g==null)return q
return B.aH(!1,B.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
bWJ(d,e){var w,v,u=null,t=B.G(e.j(0.55),A.r,2),s=e.j(0.12),r=x.p,q=B.a([],r)
for(w=0;w<3;++w){v=new B.b3(3,3)
q.push(B.p(u,u,A.h,u,u,new B.o(e,u,u,new B.bv(v,v,v,v),u,u,A.n),u,D.css[w],u,D.bis,u,u,u,5))}v=x.V
return this.atq(B.A(B.a([B.p(u,B.A(q,A.dD,u,A.b5,A.j,0,u,u),A.h,u,u,new B.o(s,u,t,u,u,u,A.a6),u,42,u,u,u,u,u,42),D.efe,B.C(B.u(B.a([D.eQ7,A.bw,B.A(B.a([B.p(u,u,A.h,u,u,new B.o(e,u,u,u,B.a([new B.a9(0,A.G,e,A.J,6)],v),u,A.a6),u,7,u,u,u,u,u,7),A.bp,new B.dk(1,A.cj,B.d("Live \xb7 real-time statistics",u,1,A.Z,u,u,u,B.l(u,u,A.c.j(0.6),u,u,u,u,u,u,u,u,11.5,u,u,A.a1,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],r),A.m,u,A.e,A.j,0,u,u)],r),A.F,u,A.e,A.j,0,A.p),1),A.ab,B.aH(!1,B.m(16),!0,B.p(u,D.baG,A.h,u,u,new B.o(u,u,u,B.m(16),B.a([new B.a9(0,A.G,A.aH.j(0.35),A.cD,14)],v),D.bFk,A.n),u,u,u,u,D.bf3,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.z,u,u,u,u,u,u,u)],r),A.m,u,A.e,A.j,0,u,u),e,A.a_,A.V1,26)},
b0l(d,e,f,g){var w,v=null,u=A.a.q(d.toLowerCase(),"profit"),t=u?A.cV:A.b3,s=B.p(v,v,A.h,v,v,new B.o(t,v,v,D.aOY,v,v,A.n),v,v,v,A.mx,v,v,v,5),r=x.p
r=B.a([s,A.ba,B.C(B.u(B.a([B.A(B.a([B.V(u?A.rX:A.x3,t,v,v,v,14),A.ez,new B.dk(1,A.cj,B.d(d,v,1,A.Z,v,v,v,B.l(v,v,A.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),A.m,v,A.e,A.j,0,v,v),A.ar,B.eY(A.a_,B.d(e,v,1,v,v,v,v,D.eo4,v,v,v),A.h,A.e8)],r),A.F,v,A.b5,A.j,0,A.p),1)],r)
s=g==null
if(!s)r.push(new B.B(A.UQ,B.V(A.ek,A.c.j(0.35),v,v,v,v),v))
w=this.aUh(new B.a3(v,66,B.A(r,A.m,v,A.e,A.j,0,v,v),v),t,A.lc,20)
if(s)return w
return B.aH(!1,B.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cmf(d,e,f){return this.b0l(d,e,f,null)},
bTH(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.p(m,m,A.h,m,m,new B.o(f,m,m,m,B.a([new B.a9(0,A.G,f,A.J,8)],x.V),m,A.a6),m,9,m,m,m,m,m,9),k=B.d("LIVE ACTIVITY",m,m,m,m,m,m,B.l(m,m,A.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,A.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=A.c.j(0.07),i=B.m(20),h=x.p
i=B.a([B.A(B.a([l,A.a3k,k,A.b6,B.p(m,B.d(""+e.length,m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.h,m,m,new B.o(j,m,m,i,m,m,A.n),m,m,m,m,A.VJ,m,m,m)],h),A.m,m,A.e,A.j,0,m,m),A.P],h)
if(e.length===0)i.push(new B.B(A.UT,B.u(B.a([B.V(A.hg,g,m,m,m,30),A.ar,B.d("Nothing yet",m,m,m,m,m,m,B.l(m,m,A.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.bw,B.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,A.a1,m,m,!0,m,m,m,m,m,m,m,m),A.L,m,m)],h),A.m,m,A.e,A.j,0,A.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=B.a([],h)
if(w>0)k.push(new B.lU(1,m,m,m,m,A.c.j(0.07),m))
j=e[w]
v=j.d
u=v===A.eB||v===A.js
t=u?A.km:D.eu
g=A.c.j(0.5)
v=new B.b3(12,12)
s=B.a([t.j(0.28),t.j(0.08)],l)
r=new B.ax(t.j(0.35),1,A.r,-1)
v=B.p(A.B,B.V(u?A.rX:A.uB,t,m,m,m,18),A.h,m,m,new B.o(m,m,new B.c2(r,r,r,r),new B.bv(v,v,v,v),m,new B.a8(A.ax,A.aE,A.w,s,m,m),A.n),m,38,m,m,m,m,m,38)
s=C.hFH(j)
q=C.fUm(j.y)
s=B.u(B.a([new B.w(s,m,A.mV,m,m,m,m,A.Z,m,1,m,m),A.bw,new B.w(q,m,new B.E(!0,g,m,m,m,m,11,A.a1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),A.F,m,A.e,A.j,0,A.p)
q=t.j(0.14)
p=new B.b3(20,20)
o=u?"-":"+"
n=B.du(j.c)
q=B.p(m,new B.w(o+"$"+n,m,new B.E(!0,t,m,m,m,m,13,A.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),A.h,m,m,new B.o(q,m,m,new B.bv(p,p,p,p),m,m,A.n),m,m,m,m,A.nm,m,m,m)
j=C.h0g(j)
k.push(new B.B(G.UY,new B.cC(A.aY,A.e,A.j,A.m,m,A.p,m,0,B.a([v,A.ba,new B.bF(1,A.bn,s,m),B.u(B.a([q,A.d5,new B.w(j,m,new B.E(!0,g,m,m,m,m,10,A.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),A.dD,m,A.e,A.j,0,A.p)],h),m),m))
A.d.v(i,k)}return this.atq(B.u(i,A.m,m,A.e,A.j,0,A.p),f,A.b4,D.bf9,26)}}
C.ay8.prototype={
S(){return new C.bdv(null,null)},
cFs(d){return this.z.$1(d)},
cGE(){return this.Q.$0()}}
C.bdv.prototype={
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
v.b1g()},
gb3U(){var w=new B.N(Date.now(),0,!1)
if(B.mu(w)===6||B.mu(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
b1g(){var w=this,v=w.a,u=v.e||v.f||w.gb3U()
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
this.b1g()},
p(){var w=this,v=w.d
v===$&&B.c()
v.p()
v=w.e
v===$&&B.c()
v.p()
v=w.f
v===$&&B.c()
v.p()
w.boj()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gb3U()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=A.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?A.at:g.x
g=g.r?new C.d9A(i):h
v=B.m(32)
s=B.m(32)
r=f?D.cVe:D.cVc
q=B.G((f?D.nO:A.bd).j(0.28),A.r,1.4)
p=x.V
o=B.a([new B.a9(0,A.G,(f?A.at:A.bc).j(0.16),A.fz,28)],p)
n=x.p
m=B.a([],n)
if(f)A.d.v(m,B.a([B.an(h,i.a8q(D.nO,130),h,h,h,-24,-30,h),B.an(-36,i.a8q(A.at,140),h,h,-28,h,h,h)],n))
else A.d.v(m,B.a([B.an(h,i.a8q(A.bc,120),h,h,h,-30,-36,h),B.an(-40,i.a8q(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=B.m(32)
k=i.f
k===$&&B.c()
m.push(B.bU(0,B.e8(B.bu(l,new B.eo(B.c4(k,new C.d9B(i),h),h),A.ap),!0,h),0,0,0))}if(f){l=B.m(32)
k=i.f
k===$&&B.c()
m.push(B.bU(0,B.e8(B.bu(l,new B.eo(B.c4(k,new C.d9C(i),h),h),A.ap),!0,h),0,0,0))}l=B.m(999)
k=A.c.j(0.06)
j=B.G(A.c.j(0.16),A.r,1)
m.push(B.an(h,new B.d2(D.aQO,B.p(h,B.A(B.a([B.p(h,h,A.h,h,h,new B.o(t,h,h,h,B.a([new B.a9(0,A.G,t.j(0.5),A.J,8)],p),h,A.a6),h,8,h,h,h,h,h,8),A.ab,new B.dk(1,A.cj,B.d(u,h,1,A.Z,h,h,h,D.etc,h,h,h),h)],n),A.m,h,A.e,A.R,0,h,h),A.h,h,h,new B.o(k,h,j,l,h,h,A.n),h,h,h,h,A.h1,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.fSH(A.h_,new C.d9D(),l)
m.push(C.fSG(new C.d9E(i,f,t,e,w),new B.N(Date.now(),0,!1),j,l))
return B.aH(!1,v,!0,B.dg(h,new B.am(A.V,h,A.a9,A.h,m,h),h,h,A.b9,new B.o(h,h,q,s,o,new B.a8(A.ax,A.aE,A.w,r,h,h),A.n),A.zs,h,392,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
a8q(d,e){var w=null
return B.e8(B.p(w,w,A.h,w,w,new B.o(w,w,w,w,w,new B.bS(A.B,0.5,A.w,w,0,B.a([d.j(0.22),d.j(0)],x.O),w,w),A.a6),w,e,w,w,w,w,w,e),!0,w)}}
C.b7h.prototype={
aUk(d,e,f,g){var w=new B.b0($.a1().r,A.aw,null,null,B.a([],x.g)),v=e.a,u=e.b,t=u-f
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
q=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
q.r=A.c.j(0.1+r*0.5).gt(0)
a7.aUk(b2,new B.v(t*a8,s*b0),2+r*2.2,q)}for(a8=b2.a,b0=w*2,p=a7.e,o=0;o<3;++o){n=A.k.J(b0+o/3,1)
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
if(e>0.6&&f>0.35){h=$.h5J()
g=h.b
a0=g.c
g=g.a.c
h.a5(b2,new B.v(-a0/2,-g.gbd(g)/2))}a8.restore()
break
case 1:$.a1()
a0=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
a0.r=p.j(f*0.95).gt(0)
a7.aUk(b2,new B.v(h,g),3+f*3,a0)
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
C.b7g.prototype={
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
a3=B.c_(D.eaa,A.a2m)
u=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
u.r=D.asx[A.o.J(s,6)].j(k*0.9).gt(0)
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
f=D.asx[A.o.J(s+i,6)].j(k)
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
C.b7f.prototype={
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
p.N(new B.kv(B.c1(a2,a4)))
a5.tj(0,p)
p=B.c1(a2,a4)
o=B.U()
o.sav(D.dRJ.aB(0,B.c1(a2,a4)))
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
h.N(new B.bV())
$.a1()
a0=B.U()
a1=x.O
w=e.e
a1=v?B.a([e.f.j(0.55),w.j(0.78),e.r.j(0.92)],a1):B.a([w.j(0.22),D.eu.j(0.34),A.cW.j(0.62)],a1)
a0.sav(new B.a8(A.b4,A.bb,A.w,a1,d,d).aB(0,B.c1(a2,a4)))
a5.b4(h,a0)
a0=B.U()
a0.b=A.ak
a0.c=2
a0.r=A.c.j(v?0.28:0.14).gt(0)
a5.b4(h,a0)}s.restore()},
ao(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.aya.prototype={
S(){var w=$.at()
return new C.ayb(new B.ao(A.aq,w),new B.ao(A.aq,w))},
baK(d,e){return this.w.$2$cloudRequest(d,e)}}
C.ayb.prototype={
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
cnZ(d){this.a.baK(d,!0)
this.lz("Deposit submitted. Admin will review your payment proof.")
this.n(new C.da0())},
cmL(){var w,v,u=this,t=B.d5(u.d.a.a)
if(t==null||t<=0){u.lz("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
B.hl(w,new C.amR(v.d,t,u.gcnY(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cu8(){var w,v,u,t,s=this,r=s.d,q=B.d5(r.a.a)
if(q==null||q<=0){s.lz("Enter an amount to withdraw.")
return}if(q<10){s.lz("Minimum withdrawal is $"+B.du(10)+".")
return}w=s.a.d.d
if(q>w){s.lz("Insufficient balance. You have $"+B.du(w)+".")
return}w=s.e
v=C.h1E(w.a.a)
if(v.length===0){s.lz("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.baK(new B.cW("wd_"+1000*Date.now(),s.a.d.a,q,A.eB,A.k5,"Withdrawal to $"+v+" \u2014 Fee: $"+B.du(u)+" \u2014 You receive: $"+B.du(q-u),null,null,A.dn,new B.N(Date.now(),0,!1)),!0)
s.lz("Withdrawal submitted \u2014 waiting for admin approval.")
r.bG(0,A.c_)
w.bG(0,A.c_)
s.n(new C.da1())},
cra(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,B.J)(w),++s){r=w[s]
if(r.x!==A.cg||!this.aRe(r)||B.fHx(r))continue
q=r.d
p=q===A.eB||q===A.js||q===A.eg
q=r.c
if(p)t+=q
else u+=q}return new B.bkk(u,t)},
B(d){var w,v,u,t=this,s=null,r=t.cra(),q=t.a.r,p=new B.a4(q,new C.da2(),B.T(q).k("a4<1>")).gG(0)
q=t.a
w=q.c
q=q.x
v=B.a([D.eu.j(0.24),A.M.j(0.72)],x.O)
u=B.G(D.eu.j(0.38),A.r,1)
q=B.bJ_(!1,w,"WALLET",B.hJ(B.aH(!1,s,!0,B.p(A.B,B.V(U.agJ,D.eu,s,s,s,18),A.h,s,s,new B.o(s,s,u,s,s,new B.a8(A.ax,A.aE,A.w,v,s,s),A.a6),s,40,s,s,s,s,s,40),A.cE,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),s,"Back up wallet",s,s))
v=t.bvD(r.a,r.b,p)
u=x.p
w=B.A(B.a([t.amI(A.uB,"Deposit",0),t.amI(A.rX,"Withdraw",1),t.amI(A.fR,"History",2)],u),A.m,s,A.qv,A.j,0,s,s)
return B.ec(B.br(!1,B.cf(B.u(B.a([q,A.bs,v,A.d1,w,A.d1,B.ql(t.f===2?t.bQU():t.bWd(),A.ic,B.tg(),A.b9,A.b9,B.a_q())],u),A.ad,s,A.e,A.j,0,A.p),A.q,s,A.z,s,D.bh_,s,s,A.ah),!0,!1,A.ag,!0,!0),A.z_,!0)},
bvD(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.a.i(i.a.e)
if(A.a.q(g,"@")){w=A.a.cP(g,"@")
v=A.a.al(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+A.a.aU(g,w)}else v=g
w=B.m(26)
u=B.an(h,i.avv(220,0.1),h,h,h,-60,-70,h)
t=B.an(-90,i.avv(200,0.07),h,h,h,30,h,h)
s=B.an(-60,i.avv(150,0.05),h,h,-40,h,h,h)
r=B.m(26)
r=B.bU(0,B.bQ(h,new B.o(h,h,B.G(A.c.j(0.18),A.r,1),r,h,h,A.n),A.b7),0,0,0)
q=B.m(6)
p=x.p
q=B.A(B.a([B.p(h,B.b2(h,h,h,new C.b6I(h),A.as),A.h,h,h,new B.o(h,h,h,q,h,D.bGy,A.n),h,28,h,h,h,h,h,38),A.b6,D.eXN],p),A.m,h,A.e,A.j,0,h,h)
o=B.d("Available balance",h,h,h,h,h,h,B.l(h,h,A.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,A.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=B.eY(A.a_,C.anA(new C.d9N(i),D.eyf,i.a.d.a),A.h,A.e8)
m=B.a([B.C(i.aKd(A.uq,"In",d),1),B.C(i.aKd(A.wL,"Out",e),1)],p)
if(f>0){l=A.cL.j(0.22)
k=B.m(99)
j=B.G(A.il.j(0.6),A.r,1)
m.push(B.p(h,B.d(""+f+" pending",h,h,h,h,h,h,D.eu6,h,h,h),A.h,h,h,new B.o(l,h,j,k,h,h,A.n),h,h,h,h,A.nm,h,h,h))}return new B.fN(1.62,B.bu(w,new B.am(A.V,h,A.a9,A.q,B.a([D.dR_,u,t,s,r,new B.B(A4.qd,B.u(B.a([q,A.b6,o,A.bw,n,A.b6,B.A(m,A.m,h,A.e,A.j,0,h,h),A.ar,B.d(v,h,1,A.Z,h,h,h,B.l(h,h,A.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,A.a1,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),A.F,h,A.e,A.j,0,A.p),h)],p),h),A.ap),h)},
avv(d,e){var w=null
return B.p(w,w,A.h,w,w,new B.o(w,w,B.G(A.c.j(e),A.r,22),w,w,w,A.a6),w,d,w,w,w,w,w,d)},
aKd(d,e,f){var w=null,v=A.c.j(0.16)
return B.A(B.a([B.p(w,B.V(d,A.c,w,w,w,13),A.h,w,w,new B.o(v,w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.bp,new B.dk(1,A.cj,B.eY(A.a_,B.d(e+"  $"+B.du(f),w,w,w,w,w,w,A.qP,w,w,w),A.h,A.e8),w)],x.p),A.m,w,A.e,A.j,0,w,w)},
amI(d,e,f){var w=null,v=this.f===f,u=v?D.bHN:new B.a8(A.a_,A.a7,A.w,B.a([A.c.j(0.08),A.c.j(0.03)],x.O),w,w),t=B.G(v?A.c.j(0.6):D.eu.j(0.25),A.r,1),s=v?B.a([new B.a9(0,A.G,A.at.j(0.45),A.J,18)],x.V):w
u=B.dg(w,B.V(d,v?D.a7W:D.eu,w,w,w,26),w,w,A.co,new B.o(w,w,t,w,s,u,A.a6),A.Dp,w,62,w,w,w,w,62)
return B.aJ(A.c5,new B.a3(92,w,B.u(B.a([u,D.eg8,B.d(e,w,w,w,w,w,w,B.l(w,w,v?A.c:A.aQ,w,w,w,w,w,w,w,w,12.5,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.d9M(this,f),w,w,w,w,w,w,!1,A.af)},
bWd(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=B.d5(a1.a.a)
if(a2==null)a2=0
w=a0?D.eu:A.cK
v=a2>0
u=new C.d9Y(e,w)
t=new C.d9X()
s=e.f
r=B.m(26)
q=x.O
p=B.a([w.j(0.1),A.rp,A.rp],q)
o=B.G(w.j(0.22),A.r,1)
n=x.V
m=B.a([new B.a9(0,A.G,A.x.j(0.35),A.eH,22)],n)
l=w.j(0.15)
l=B.p(d,B.V(a0?A.uB:A.rX,w,d,d,d,18),A.h,d,d,new B.o(l,d,d,d,d,d,A.a6),d,34,d,d,d,d,d,34)
k=B.C(B.d(a0?"Add money":"Take money out",d,d,d,d,d,d,A.fL,d,d,d),1)
j=A.c.j(0.06)
i=B.m(99)
h=x.p
i=B.A(B.a([l,A.av,k,B.p(d,B.A(B.a([B.V(A.hI,w,d,d,d,14),B.d("Cash App",d,d,d,d,d,d,B.l(d,d,A.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,A.I,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),A.m,d,A.e,A.R,0,d,d),A.h,d,d,new B.o(j,d,d,i,d,d,A.n),d,d,d,d,A.kv,d,d,d)],h),A.m,d,A.e,A.j,0,d,d)
l=B.d("$",d,d,d,d,d,d,B.l(d,d,v?w:A.c3,d,d,d,d,d,d,d,d,26,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=B.a([new B.tB(B.ad("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=B.A(B.a([new B.B(A.iW,l,d),A.d4,B.aSw(new B.d2(D.aR5,B.aK(d,A.U,!1,d,!0,A.q,d,B.aL(),a1,w,d,d,d,d,2,B.bl(d,A.ep,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.l(d,d,A.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),A.z,!0,d,!0,d,!1,d,A.ae,d,d,k,d,d,A.dX,d,d,d,1,d,d,!1,"\u2022",d,new C.d9W(e),d,d,d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,D.eAS,!0,A.L,d,A.am,d,d,d,d),d),d)],h),A.F,d,A.b5,A.j,0,d,d)
a1=v?120:60
a1=B.as(B.dg(d,d,d,d,A.b9,new B.o(d,d,d,B.m(99),d,new B.a8(A.a_,A.a7,A.w,B.a([w.j(0),w,w.j(0)],q),d,d),A.n),A.X,d,3,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+B.du(10)+" \xb7 admin sends it to your Cash App."
q=B.d(q,d,d,d,d,d,d,B.l(d,d,A.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,A.a1,d,1.35,!0,d,d,d,d,d,d,d,d),A.L,d,d)
l=B.a([],h)
j=a0?D.bLv:D.c_7
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
A.d.v(l,B.a([A.aa,B.p(d,B.u(B.a([t.$2("Amount","$"+B.du(a2)),t.$3$color("Fee (15%)","\u2212 $"+B.du(a2*0.15),A.fO),B.jm(A.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+B.du(a2*0.85),!0,D.eu)],h),A.m,d,A.e,A.j,0,A.p),A.h,d,d,new B.o(q,d,d,k,d,d,A.n),d,d,d,d,A.iD,d,d,d)],h))}A.d.v(a1,l)}a1.push(A.aN)
q=B.m(18)
l=a0?A.Oa:P.anv
n=B.a([new B.a9(0,A.G,(a0?A.aW:A.e9).j(0.45),A.dm,18)],n)
k=a0?e.gcmK():e.gcu7()
j=B.V(a0?A.X4:A.kZ,d,d,d,d,20)
if(a0)i=v?"Deposit $"+B.du(a2):"Deposit funds"
else i=v?"Withdraw $"+B.du(a2):"Request withdrawal"
a1.push(new B.a3(d,54,B.bQ(B.lc(j,B.d(i,d,d,d,d,d,d,A.or,d,d,d),k,B.ff(d,d,A.K,d,d,d,d,d,d,A.c,d,d,d,A.K,new B.b5(B.m(18),A.W),d,d,d,d,d)),new B.o(d,d,d,q,n,new B.a8(A.a_,A.a7,A.w,l,d,d),A.n),A.b7),d))
return B.p(d,B.u(a1,A.ad,d,A.e,A.j,0,A.p),A.h,d,d,new B.o(d,d,o,r,m,new B.a8(A.b4,A.bb,A.w,p,A.NJ,d),A.n),d,d,new B.cv("form"+s,x.W),d,A.zH,d,d,d)},
bQU(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=B.T(a2).k("a4<1>"),a4=B.z(new B.a4(a2,new C.d9Q(a0),a3),a3.k("F.E"))
A.d.aY(a4,new C.d9R())
w=A.a.i(a0.a.e.toLowerCase())
a2=B.R(x.N,x.o)
a3=$.fdq
a3=a3==null?a1:a3.$0()
a3=J.aW(a3==null?A.hN:a3)
while(a3.C()){v=a3.gT(a3)
u=v.a
if(u.length!==0&&A.a.i(v.b.toLowerCase())===w)a2.m(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,B.J)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.m(0,u,s)}a3=a2.$ti.k("bf<2>")
a2=B.z(new B.bf(a2,a3),a3.k("F.E"))
r=C.hGf(a2,B.Jh(a0.a.e,new C.d9S(a0)))
a2=B.m(24)
a3=B.G(A.c.j(0.07),A.r,1)
v=B.m(99)
u=B.m(99)
q=x.p
u=B.a([B.A(B.a([D.blp,B.aH(!1,v,!0,B.p(a1,D.eaR,A.h,a1,a1,new B.o(a1,a1,B.G(D.eu.j(0.4),A.r,1),u,a1,a1,A.n),a1,a1,a1,a1,A.my,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.d9T(a0),a1,a1,a1,a1,a1,a1,a1)],q),A.m,a1,A.e,A.j,0,a1,a1),A.T],q)
if(a4.length===0)u.push(new B.B(D.bdM,B.u(B.a([B.V(A.DZ,A.c.j(0.25),a1,a1,a1,40),A.T,D.eUH],q),A.m,a1,A.e,A.j,0,A.p),a1))
else{v=B.a([],q)
for(p=B.dc(a4,0,B.dJ(a0.r,"count",x.S),B.T(a4).c),o=p.$ti,p=new B.bR(p,p.gG(0),o.k("bR<ai.E>")),o=o.k("ai.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===A.eB||k===A.js||k===A.eg
if(l===A.cg)i=j?A.cN:D.eu
else i=l===A.dn?A.il:A.fK
h=j?"-":"+"
l=A.c.j(0.06)
k=i.j(0.14)
g=new B.ax(i.j(0.4),1,A.r,-1)
k=B.p(a1,B.V(j?A.rX:A.uB,i,a1,a1,a1,19),A.h,a1,a1,new B.o(k,a1,new B.c2(g,g,g,g),a1,a1,a1,A.a6),a1,42,a1,a1,a1,a1,a1,42)
f=a0.bKP(n)
e=C.fUm(n.y)
d=A.c.j(0.5)
f=B.a([new B.w(f,a1,A.jN,a1,a1,a1,a1,a1,a1,a1,a1,a1),A.bw,new B.w(e,a1,new B.E(!0,d,a1,a1,a1,a1,11,A.a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1)],q)
e=n.f
if(A.a.i(e==null?"":e).length!==0){e.toString
d=A.c.j(0.4)
f.push(new B.w(e,a1,new B.E(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,A.Z,a1,1,a1,a1))}if(m!=null&&n.x!==A.ke)f.push(new B.B(E.ac8,new B.E3(A.bH,5,4,A.bx,B.a([a0.aJ9("Before",m.b),a0.aJ9("After",m.a)],q),a1),a1))
m=B.u(f,A.F,a1,A.e,A.j,0,A.p)
f=n.c
f=f===0?"\u2014":h+"$"+B.du(f)
e=i.j(0.14)
d=new B.b3(99,99)
n=C.h0g(n)
v.push(B.p(a1,new B.cC(A.aY,A.e,A.j,A.m,a1,A.p,a1,0,B.a([k,A.ba,new B.bF(1,A.bn,m,a1),A.ab,B.u(B.a([new B.w(f,a1,new B.E(!0,i,a1,a1,a1,a1,15,A.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),A.au,B.p(a1,new B.w(n,a1,new B.E(!0,i,a1,a1,a1,a1,9.5,A.I,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),A.h,a1,a1,new B.o(e,a1,a1,new B.bv(d,d,d,d),a1,a1,A.n),a1,a1,a1,a1,A.zN,a1,a1,a1)],q),A.dD,a1,A.e,A.j,0,A.p)],q),a1),A.h,a1,a1,new B.o(a1,a1,new B.c2(A.W,A.W,new B.ax(l,1,A.r,-1),A.W),a1,a1,a1,A.n),a1,a1,a1,a1,A.wh,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(B.hg(D.byO,B.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,A.cc,a1,a1,a1),new C.d9U(a0),B.fp(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.eu,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
A.d.v(u,v)}return B.p(a1,B.u(u,A.ad,a1,A.e,A.j,0,A.p),A.h,a1,a1,new B.o(A.rp,a1,a3,a2,a1,a1,A.n),a1,a1,D.f03,a1,D.bfT,a1,a1,a1)},
aJ9(d,e){var w=null,v=A.c.j(0.05),u=B.m(7),t=B.G(A.c.j(0.1),A.r,1),s=B.dr(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=B.du(e)
return B.p(w,B.VE(B.dr(B.a([s,B.dr(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.eyp,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.nl,w,w,w)},
aRe(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(A.a.q(w,"clock-in session started"))return!1
v=d.d
if(v===A.eg)return d.c>0
if(B.rd(d))return!1
if(v===A.fc||v===A.eB)return!0
if(v===A.nH||v===A.js)return!0
if(v===A.jO)return!0
if(v===A.fA)return A.a.q(w,"clock-in")||d.c>0
return!1},
bKP(d){var w,v=d.f
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
C.b6I.prototype={
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
C.bqV.prototype={
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
f.r=A.nT.j(0.35*g).gt(0)
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
t=A.nT.j(0.5*Math.sin(f*3.141592653589793))
a1=new B.ma(new B.ez("z",a2,a2,A.cT,a2,a2,a2,a2,a2,a2,new B.E(!0,t,a2,a2,a2,a2,12+f*14,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a5,A.cn,new B.kc(1),a2,a2,a2,a2,A.cm,a2)
a1.fD()
a1.a5(a3,new B.v(u+Math.sin(f*6.283185307179586+k)*12+k*8,w-f*90))}},
ao(d){return d.b!==this.b}}
C.aHv.prototype={
aN(){this.aV()
this.aS()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdB())
w.aX$=null
w.a2()}}
C.bsO.prototype={}
C.aWp.prototype={}
C.Yc.prototype={
S(){return new C.aAz(new B.ao(A.aq,$.at()))},
cHP(d,e){return this.d.$2(d,e)}}
C.aAz.prototype={
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.a2()},
aUo(){var w=this,v=A.a.i(w.d.a.a),u=B.ad("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.n(new C.dUU(w))
return}u=w.c
u.toString
B.a7(u,!1).K(null)
w.a.cHP(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=B.aG(a0,A.eo,e).w
e=B.aG(a0,A.e1,e).w
w=B.as(B.p(f,f,A.h,f,f,new B.o(A.be,f,f,B.m(2),f,f,A.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=B.A(B.a([B.p(f,D.byc,A.h,f,f,new B.o(f,f,f,f,B.a([new B.a9(0,A.G,A.f3.j(0.5),A.J,18)],v),D.ajh,A.a6),f,52,f,f,f,f,f,52),A.en,B.C(B.u(B.a([D.eJo,A.bw,B.d(g.a.c,f,1,A.Z,f,f,f,A.oq,f,f,f)],u),A.F,f,A.e,A.j,0,A.p),1),B.aF(f,f,f,f,D.bz0,f,f,f,new C.dUX(a0),f,f,f,f,f,f)],u),A.m,f,A.e,A.j,0,f,f)
s=g.b04(A.eF,"You",A.cK)
r=A.aM.j(0.15)
q=B.m(99)
q=B.A(B.a([s,new B.B(A.lT,B.p(f,D.eN1,A.h,f,f,new B.o(r,f,B.G(A.aM.j(0.6),A.r,1),q,f,f,A.n),f,f,f,f,A.fF,f,f,f),f),g.b04(A.uy,"Your friend",A.cd)],u),A.m,f,A.e,A.j,0,f,f)
r=A.c.j(0.06)
s=B.m(16)
p=A.c.j(0.12)
o=B.m(16)
n=g.f
if(n.length===0)n=f
o=B.aK(f,A.U,!0,f,!0,A.q,f,B.aL(),g.d,f,f,f,f,f,2,B.bl(f,f,f,f,f,f,f,f,!0,new B.b1(4,s,new B.ax(p,1,A.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new B.b1(4,o,D.aPV),f,f,f,f,f,f,f,f,N.BL,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.bBm,f,f,f,f,f,f,f,f,f,f,f,f),A.z,!0,f,!0,f,!1,f,A.ae,f,f,f,f,f,A.lB,f,f,f,1,f,f,!1,"\u2022",f,new C.dUY(g),f,new C.dUZ(g),f,!1,f,f,!1,f,!0,f,A.a8,f,f,f,f,f,f,f,f,f,f,f,A.ir,!0,A.a5,f,A.am,f,f,f,f)
r=B.a([],u)
for(m=0;m<4;++m){l=D.bV9[m]
s=new B.b3(14,14)
p=g.e===l
n=p?D.ajg:f
p=p?f:A.c.j(0.06)
k=new B.ax(g.e===l?A.aB:A.bG,1,A.r,-1)
j=""+l
i=l===1?"game":"best of "+j
h=A.c.j(0.7)
s=B.a([new B.bF(1,A.bn,B.aJ(f,B.dg(f,B.u(B.a([new B.w(j,f,A.dP,f,f,f,f,f,f,f,f,f),new B.w(i,f,new B.E(!0,h,f,f,f,f,10,A.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f)],u),A.m,f,A.e,A.j,0,A.p),f,f,A.b9,new B.o(p,f,new B.c2(k,k,k,k),new B.bv(s,s,s,s),f,n,A.n),A.eD,f,f,f,A.eV,f,f,f),A.z,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.dV_(g,l),f,f,f,f,f,f,!1,A.af),f)],u)
if(l!==7)s.push(A.ab)
A.d.v(r,s)}s=B.A(r,A.m,f,A.e,A.j,0,f,f)
r=B.A(B.a([B.V(A.kY,A.c.j(0.5),f,f,f,15),A.bp,B.C(B.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,B.l(f,f,A.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),A.m,f,A.e,A.j,0,f,f)
p=B.m(18)
v=B.a([new B.a9(0,A.G,A.bz.j(0.4),A.cv,18)],v)
n=g.e
j=n===1?"":"s"
return new B.B(new B.L(0,0,0,d.f.d+e.r.d),B.p(f,B.u(B.a([w,A.aN,t,A.bs,q,A.bs,D.eQC,A.ar,o,A.aN,D.eUv,A.P,s,A.ay,r,A.aN,new B.a3(f,54,B.bQ(B.hg(D.ahz,B.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,A.fL,f,f,f),g.gc_z(),f),new B.o(f,f,f,p,v,D.bGI,A.n),A.b7),f)],u),A.ad,f,A.e,A.R,0,A.p),A.h,f,f,D.aRT,f,f,f,f,D.bhc,f,f,f),f)},
b04(d,e,f){var w=null,v=f.j(0.1),u=B.m(16),t=B.G(f.j(0.45),A.r,1)
return B.C(B.p(w,B.u(B.a([B.V(d,f,w,w,w,24),A.au,B.d(e,w,w,w,w,w,w,A.a4p,w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.eV,w,w,w),1)}}
C.oz.prototype={}
C.bm_.prototype={
a5(d,e){var w,v,u,t,s,r=null,q=e.a/2,p=new B.v(q,e.b/2),o=q-4
for(q=d.a,w=0;w<37;++w){$.a1()
v=new B.ay(A.a0,A.Y,A.a3,A.a4,A.a2)
if(w===0)u=A.bq
else u=(w&1)===0?A.bS:A.M
v.r=u.gt(0)
u=B.c1(p,o)
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
C.Db.prototype={
a3(){return"NgmyProMoveResult."+this.b}}
C.ao2.prototype={
gjx(){var w=this.d
w=w==null?null:w.a
return w!==!1},
bi1(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.fzX("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.bRG()
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
s.aT5(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.ay6.h(0,d)
s.c=w==null?"Play to earn":w}},
b4F(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gjx()
if(o)return
o=x.N
s.x=B.Z(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b4(w,new C.c7m(),o)
v=B.z(v,v.$ti.k("ai.E"))
s.at=v
if(v.length<9){v=B.z(v,o)
A.d.v(v,B.bT(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=A.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===A.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.crG(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.and(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b4(t,new C.c7n(),x.L)
o=B.z(o,o.$ti.k("ai.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)A.d.H(v,B.bT(7,0,!1,o))}if(B.iv(e.h(0,q)))o=B.e6(e.h(0,q))
else{o=B.c3(B.t(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bxM(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.and(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b4(t,new C.c7o(),x.L)
o=B.z(o,o.$ti.k("ai.E"))
s.y=o}if(B.iv(e.h(0,p)))o=B.e6(e.h(0,p))
else{o=B.c3(B.t(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.byZ(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.and(e,f)
break}},
cBH(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=B.Z(w.x,q,p)
switch(d){case"tic_tac_go":o.m(0,"ttt",B.bi(w.at,!0,q))
o.m(0,"turnEmail",w.axB())
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
p=B.T(q).k("I<1,ak<H>>")
q=B.z(new B.I(q,new C.c7q(),p),p.k("ai.E"))
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
p=B.T(q).k("I<1,ak<H>>")
q=B.z(new B.I(q,new C.c7r(),p),p.k("ai.E"))
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
axB(){var w,v,u,t=this
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
and(d,e){var w,v=this,u=A.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
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
crG(d,e){var w,v,u,t,s,r="playerXEmail"
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
bxM(d,e){var w,v,u,t,s
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
byZ(d,e){var w,v,u,t,s,r,q
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
return A.a.i(J.k(s==null?u.axB():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
bRG(){var w,v,u=this,t=J.e_(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=B.ih(8,new C.c7j(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
aT5(d){var w=20+d.aG(80),v=w+10+d.aG(50),u=4+d.aG(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bG(0,A.c_)},
cL4(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
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
if(r.a6n(2)){r.a7U(1)
return!0}if(r.a6n(1)){r.a7U(2)
return!0}if(r.gjx()&&r.z===2){r.btV(f)
if(r.a6n(2)){r.a7U(1)
return!0}if(r.a6n(1)){r.a7U(2)
return!0}}}return!1},
a7U(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
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
btV(d){var w,v,u,t,s,r,q,p,o,n=this,m=B.a([],x.B)
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
a6n(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=J.aW(w[u]);t.C();)if(t.gT(t)===d)return!1
return!0},
cL5(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.pk
if(!s.gjx()){w=s.d
w=w!=null&&!s.RN("tic_tac_go",w.d)}else w=!1
if(w)return D.pk
if(s.gjx())v="X"
else{w=A.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===A.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.afW(v))return s.aOb(v,!0)
if(!A.d.q(s.at,""))return s.aOc()
s.ax=!s.ax
if(!s.gjx()){s.x.m(0,"turnEmail",s.axB())
s.c=s.aSE()
return D.pk}if(s.gjx()){t=s.cad(e)
if(t>=0){s.at[t]="O"
if(s.afW("O"))return s.aOb("O",!1)
if(!A.d.q(s.at,""))return s.aOc()
s.ax=!0}}s.c=s.gjx()?"Your turn \u2014 you are X":s.aSE()
return D.pk},
aSE(){var w=this.d
if(w==null)return"Take your turn"
return this.RN("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aOb(d,e){var w,v,u=this
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
aOc(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.P3},
cad(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.afW("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.afW("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.cGF[u]
if(v[w].length===0)return w}return-1},
afW(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.cNy[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a0Q(d){return A.d.cI(d,0,new C.c7p())},
cvI(d){this.ay.push(1+d.aG(10))
if(this.a0Q(this.ay)>21)return!0
return!1},
cvJ(d){var w,v,u,t=this
while(t.a0Q(t.ch)<17)t.ch.push(1+d.aG(10))
t.CW=!0
w=t.a0Q(t.ay)
v=t.a0Q(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cB9(d,e){var w,v,u,t=this
if(t.e)return D.pk
if(!t.gjx()){w=t.d
w=w!=null&&!t.RN("connect_four_pro",w.d)}else w=!1
if(w)return D.pk
if(t.gjx())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.pk
if(!t.ad3(d,w))return D.pk
if(t.a6d(t.fx))return t.aO9(t.fx,!0)
if(t.aJY())return t.aOa()
w=t.fx===1?2:1
t.fx=w
if(t.gjx()&&w===2){u=t.c9C(e)
if(u>=0){t.ad3(u,2)
if(t.a6d(2))return t.aO9(2,!1)
if(t.aJY())return t.aOa()
t.fx=1}}t.c=t.gjx()?"Your turn \u2014 drop a red disc":t.bxL()
return D.pk},
bxL(){var w=this.d
if(w==null)return"Drop a disc"
return this.RN("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
ad3(d,e){var w
for(w=5;w>=0;--w)if(J.q(this.fr[w],d)===0){J.aE(this.fr[w],d,e)
return!0}return!1},
aJY(){for(var w=0;w<7;++w)if(J.q(this.fr[0],w)===0)return!1
return!0},
aO9(d,e){var w,v,u,t=this
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
aOa(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.P3},
c9C(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.ad3(w,2)
v=r.a6d(2)
r.b2n(w)
if(v)return w}for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.ad3(w,1)
u=r.a6d(1)
r.b2n(w)
if(u)return w}t=B.a([],x.t)
for(w=0;w<7;++w)if(J.q(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aG(s)]},
b2n(d){var w
for(w=0;w<6;++w)if(J.q(this.fr[w],d)!==0){J.aE(this.fr[w],d,0)
return}},
a6d(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.q(this.fr[w],v)!==d)continue
if(this.bxN(w,v,d))return!0}return!1},
bxN(d,e,f){var w,v,u,t=new C.c7i(this,d,e,f)
for(w=x.t,w=[B.a([0,1],w),B.a([1,0],w),B.a([1,1],w),B.a([1,-1],w)],v=0;v<4;++v){u=w[v]
if(t.$2(u[0],u[1])+t.$2(-u[0],-u[1])-1>=4)return!0}return!1},
b5y(d){var w=this
if(A.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.aT5(d)}return w.a>=w.b}}
C.aoW.prototype={
S(){return new C.aBj(null,null)},
cGI(d){return this.e.$1(d)}}
C.aBj.prototype={
Z(){var w,v=this
v.a0()
w=B.bh(null,D.bcT,null,1,null,v)
w.f2(0,!0)
v.d=w
v.a.d.aJ(0,v.gaUN())
v.atE()},
bo(d){var w
this.bA(d)
w=this.a
if(d.c!==w.c){w.d.bG(0,A.c_)
this.atE()}},
atE(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.aeQ(t,u)
C.aeQ(t,u)
w.a.cGI(s)
w.a.toString
w.n(new C.epa())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
p(){var w,v=this
v.a.d.a1(0,v.gaUN())
w=v.d
w===$&&B.c()
w.p()
v.bpR()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.aeQ(j,i),g=C.aeQ(j,i),f=j.length,e=i.length,d=B.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&B.c()
u=new B.b3(1,1)
d.push(new B.vs(new B.cZ(v,!1,B.p(l,l,A.h,l,l,new B.o(A.aM,l,l,new B.bv(u,u,u,u),B.a([new B.a9(0,A.G,A.aM.j(0.6),A.J,6)],k),l,A.n),l,22,l,A.JZ,l,l,l,3),l),A.PB,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new B.ez(v,l,l,A.cT,l,l,l,l,l,l,D.evE))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=A.c.j(0.4)
q=A.cp}else if(s===t){r=A.bt
q=A.O}else{r=A.aH
q=A.I}d.push(new B.ez(t,l,l,A.cT,l,l,l,l,l,l,new B.E(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&B.c()
d.push(new B.vs(new B.cZ(k,!1,B.p(l,l,A.h,A.aM,l,l,l,22,l,l,l,l,l,3),l),A.PB,l,l))}p=f===0?0:A.k.U(h/f*100)
k=A.x.j(0.35)
v=B.m(12)
u=B.G(A.be,A.r,1)
o=x.p
v=B.p(l,B.u(B.a([B.A(B.a([m.aUM("Correct",""+h,A.bq),A.ab,m.aUM("Wrong / missed",""+(f-g),A.aH),A.b6,B.d(""+p+"% accuracy",l,l,l,l,l,l,G.a3N,l,l,l)],o),A.m,l,A.e,A.j,0,l,l),A.ar,D.eO5],o),A.F,l,A.e,A.j,0,A.p),A.h,l,l,new B.o(k,l,u,v,l,l,A.n),l,l,l,l,A.bk,l,l,l)
u=B.C(B.cf(new B.a7q(l,B.dr(d,l,l,l,l,l,l,l,l,l,l),l,l,l),A.q,l,A.z,l,l,l,l,A.ah),1)
k=m.a.d
g=B.l(l,l,A.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=A.x.j(0.35)
return B.u(B.a([v,A.aa,u,A.T,B.aK(l,A.U,!0,l,!0,A.q,l,B.aL(),k,l,l,l,l,l,2,B.bl(l,new B.b1(4,B.m(12),A.W),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new B.b1(4,B.m(12),D.aPO),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ae,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,D.aK7,!0,A.a5,l,A.am,l,l,l,l)],o),A.ad,l,A.e,A.j,0,A.p)},
aUM(d,e,f){var w=null,v=f.j(0.15),u=B.m(8)
return B.p(w,B.d(d+": "+e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,w,w,new B.o(v,w,w,u,w,w,A.n),w,w,w,w,A.fF,w,w,w)}}
C.aJ0.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aN(){this.aV()
this.aS()
this.bu()}}
var z=a.updateTypes(["au<~>()","~()","H(hU,hU)","~([wt?])","Q(o2)","o2()","H(qJ,qJ)","Q(qJ)","H(qK,qK)","Nx(Y)","Q(hU)","Td(Y)","XU(Y)","X0(Y)","abY(Y)","LF(Y)","aaO(Y,ht<ak<iV>>)","aaN(Y,H)","cE(abd)","qJ(a0<@,@>)","r(o2)","Lx(Y)","a0<n,@>(qJ)","qK(a0<@,@>)","a0<n,@>(k9)","a0<n,@>(qK)","Q(qK)","a0<n,@>(li)","li(@)","a0<n,@>(i7)","i7(@)","hU(@)","au<~>(k9)","a0<n,@>(hU)","~(H,H)","hU(hU)","~(Db,ao2)","au<Q>(ak<hU>)","XT(Y)","~(hU)","YE(Y)","Te(Y)","n(hU)","Q(li)","w8(bq<H,li>)","a9m(Y,H)","H(i7,i7)","a9e(li)","r(qP)","bF(GZ)","Xp(Y)","~(cW{bumpWalletRevision:Q,cloudRequest:Q})","~(n,P,P,P)","P(N)","~(cW)","Yc(Y)","~(Db)","n(n)","YF(Y)"])
C.cl9.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.cla(r,w,s.b,v,s.d)
t=s.e
r.b=B.dE(t,u)
v.r=new C.cl6(r)
v.e=new C.cl7(r,w)
v.f=new C.cl8(r,w,t,u)},
$S:0}
C.cla.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.l2(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=B.a5(r)
u=B.c7(r)
s=v
q=u
p=B.ED(s,q)
if(p==null)p=new B.iT(s,q==null?B.a0L(s):q)
t=p
o.d.hc(t.a,t.b)
return}o.d.H(0,w)}else{o.e.a(null)
o.d.H(0,null)}},
$S:38}
C.cl6.prototype={
$0(){this.a.b.a9(0)
return $.Fb()},
$S:1616}
C.cl7.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.aqp.$0()
this.a.b.a9(0)},
$S:0}
C.cl8.prototype={
$0(){var w,v=this,u=v.b,t=B.dB(0,0,u.gb7y(),0,0,0)
u.kj(0)
u=v.c
w=v.a
w.b=B.cV(new B.b7(u.a-t.a),new C.cl5(w,u,v.d))},
$S:0}
C.cl5.prototype={
$0(){var w=this.c
this.a.b=B.dE(this.b,w)
w.$1(null)},
$S:0}
C.eKK.prototype={
$1(d){var w=this.a
w.n(new C.eKJ(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.eKJ.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.c()
w.e=new B.ht(D.abn,this.b,null,null,v.$ti.k("ht<1>"))},
$S:0}
C.eKM.prototype={
$2(d,e){var w=this.a
w.n(new C.eKH(w,d,e))},
$S:54}
C.eKH.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.c()
w.e=new B.ht(D.abn,null,this.b,this.c,v.$ti.k("ht<1>"))},
$S:0}
C.eKL.prototype={
$0(){var w=this.a
w.n(new C.eKI(w))},
$S:0}
C.eKI.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.ht(A.zm,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fhm.prototype={
$1(d){return d.a===this.a&&A.a.i(d.b.toLowerCase())===this.b&&d.x===A.cg},
$S:16}
C.fhg.prototype={
$1(d){return d},
$S:13}
C.f2d.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return B.p(A.B,new B.B(new B.L(u,0,u,0),B.d("NGMY",w,1,A.eA,w,!1,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,A.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),A.h,w,w,A.a6V,w,v,w,w,w,w,w,v)},
$S:153}
C.f2a.prototype={
$3(d,e,f){return this.a.$0()},
$S:140}
C.f2b.prototype={
$2(d,e){var w,v=this,u=e.b
if(A.a.i(u==null?"":u).length!==0){u.toString
w=A.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return B.k7(w,A.B,v.d,new C.f29(v.e),A.fG,v.c,!0,v.b,null,null,v.a)},
$S:1617}
C.f29.prototype={
$3(d,e,f){return this.a.$0()},
$S:140}
C.f2c.prototype={
$3(d,e,f){return this.a.$0()},
$S:140}
C.d1X.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.d27.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.d2p.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:7}
C.d2q.prototype={
$1(d){return this.a.I7()},
$S:14}
C.d2f.prototype={
$0(){var w=J.b4(this.b,new C.d2e(),x.P)
w=B.z(w,w.$ti.k("ai.E"))
this.a.f=w},
$S:0}
C.d2e.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:7}
C.d2g.prototype={
$0(){var w=this.a,v=w.a.d.b1,u=B.T(v).k("I<1,a0<n,@>>")
v=B.z(new B.I(v,new C.d2d(),u),u.k("ai.E"))
w.f=v},
$S:0}
C.d2d.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:7}
C.d2i.prototype={
$0(){var w=this.a,v=w.a.d.b1,u=B.T(v).k("I<1,a0<n,@>>")
v=B.z(new B.I(v,new C.d2h(),u),u.k("ai.E"))
w.f=v},
$S:0}
C.d2h.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:7}
C.d2a.prototype={
$0(){var w=0,v=B.j(x.c),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.c2U(t.a.c)?2:3
break
case 2:w=4
return B.b(C.amL(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.n(new C.d28(t))
case 3:if(t.c!=null)t.n(new C.d29(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:52}
C.d28.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d29.prototype={
$0(){return this.a.d++},
$S:0}
C.d2b.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d2c.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d22.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.hN7(t.a.d.b1,J.k(J.q(u.b,"id")),"rejected")
t.a.bn()
w=2
return B.b(C.aeF(t.a.d.b1),$async$$0)
case 2:w=3
return B.b(t.I7(),$async$$0)
case 3:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.d23.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a6(s)
C.hCk(t.a.d.b1,J.k(r.h(s,"id")),t.a.c.c)
t.a.bn()
w=2
return B.b(C.aeF(t.a.d.b1),$async$$0)
case 2:w=3
return B.b(t.I7(),$async$$0)
case 3:t.H2(A.d.dM(t.y,new C.d20(s),new C.d21(t)),J.k(r.h(s,"id")))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.d20.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d21.prototype={
$0(){return A.d.gI(this.a.y)},
$S:z+5}
C.d24.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d25.prototype={
$0(){return A.d.gI(this.a.y)},
$S:z+5}
C.d26.prototype={
$0(){return this.a.H2(this.b,J.k(J.q(this.c,"id")))},
$S:0}
C.d2_.prototype={
$0(){return this.a.bUH(this.b)},
$S:0}
C.d1Z.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.hNy(u,w.b,new C.d1Y(v,w))},
$S:0}
C.d1Y.prototype={
$2(d,e){return this.a.aep(this.b,d,e)},
$S:651}
C.d2o.prototype={
$2(d,e){if(d)return
this.a.aNP()},
$S:118}
C.d2m.prototype={
$2(d,e){var w=this.a
return new B.kU(C.aWo(w.a.c.a),new C.d2l(w,this.b,this.c),null,null,x.gH)},
$S:1619}
C.d2l.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=B.m(12)
v=B.m(12)
u=B.d(s>5000?"5000":""+s,t,t,t,t,t,t,t,t,t,t)
return B.aD(!1,A.X,!0,w,B.aH(!1,v,!0,new B.B(A.kW,B.bBD(A.cL,B.V(A.fR,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.d2k(this.a,d),t,t,t,t,t,t,t),A.h,this.b,0,t,t,t,t,t,A.ac)},
$S:1620}
C.d2k.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fdF(s.c.a,s.e).eL(new C.d2j())
w=2
return B.b(C.bz1(u.b,t.a.c.a),$async$$0)
case 2:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.d2j.prototype={
$1(d){},
$S:29}
C.d2n.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.dF8.prototype={
$0(){var w=this.a
return B.Jh(w.a.c.a,new C.dF7(w))},
$S:77}
C.dF7.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.dF9.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&B.c()
u.bc=t.ad()
v.bn()
w.n(new C.dF6())},
$S:0}
C.dF6.prototype={
$0(){},
$S:0}
C.dFa.prototype={
$2(d,e){var w,v=this.a
if(!C.c2U(v.a.c)){if($.fzS.q(0,A.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.fzT(this.b,v.x,w)
return!1}C.amL(v.a.c.a)}if(B.Jh(v.a.c.a,new C.dF5(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aCL()
w=v.a
w.toString
w.hu(new B.cW(A.o.u(1000*Date.now()),v.a.c.a,d,A.js,A.f8,e,null,null,A.cg,new B.N(Date.now(),0,!1)))
v.a.bn()
return!0},
$S:1621}
C.dF5.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.dFb.prototype={
$3$bonus(d,e,f){var w,v=null,u=A.o.u(1000*Date.now()),t=this.a,s=t.a
s.hu(new B.cW(u,s.c.a,d,A.fA,A.f8,e,v,v,A.cg,new B.N(Date.now(),0,!1)))
t.a.bn()
w=f>0?"+$"+A.k.ab(d,2)+" total (includes $3 bonus for +3!)":"+$"+A.k.ab(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.v0(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1622}
C.d1R.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.d1U.prototype={
$0(){return B.iC(this.a,null)},
$S:0}
C.d1V.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.d1W.prototype={
$1(d){var w=null,v=this.a,u=B.ff(w,w,v.e===d?A.bq:B.W(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,w,w,w,w,w,w,w,w)
return B.C(new B.B(A.eW,B.i3(B.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.d1T(v,d),u),w),1)},
$S:207}
C.d1T.prototype={
$0(){var w=this.a
return w.n(new C.d1S(w,this.b))},
$S:0}
C.d1S.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d3J.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.d3M.prototype={
$1(d){this.a.cax()
return null},
$S:14}
C.d3N.prototype={
$1(d){return this.a.cpW()},
$S:14}
C.d3O.prototype={
$1(d){this.a.a_U()
return null},
$S:14}
C.d3P.prototype={
$1(d){this.a.afu()
return null},
$S:14}
C.d3Q.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.ci)return
w=v.Q
w===$&&B.c()
if(w<=0){v.n(new C.d3K(v))
w=v.as
if(w!=null)w.a9(0)
v.DL()
return}v.n(new C.d3L(v))},
$S:14}
C.d3K.prototype={
$0(){return this.a.Q=0},
$S:0}
C.d3L.prototype={
$0(){var w=this.a,v=w.Q
v===$&&B.c()
w.Q=v-1
return v},
$S:0}
C.d2Z.prototype={
$0(){return this.a.by=this.b},
$S:0}
C.d3_.prototype={
$0(){return this.a.by=this.b},
$S:0}
C.d3s.prototype={
$1(d){return this.a.go.q(0,d)},
$S:60}
C.d3t.prototype={
$0(){},
$S:0}
C.d3e.prototype={
$0(){var w=this.b
w.ci=!0
w.cT="Waiting for both players\u2026"
w.cd="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.d3f.prototype={
$0(){var w=this.a
w.ci=!0
w.cT="Both players connected"
w.cd="Starting together in a moment\u2026"},
$S:0}
C.d3g.prototype={
$0(){var w=this.b
w.ci=!0
w.cT="Match starting together\u2026"
w.cd="Both players start in "+A.o.D(this.c,1,99)+"s"},
$S:0}
C.d3h.prototype={
$0(){this.b.ci=!1},
$S:0}
C.d3i.prototype={
$0(){},
$S:0}
C.d2r.prototype={
$0(){var w=this.a,v=w.x2,u=B.t(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.d2Y.prototype={
$0(){var w=this.a
w.at=this.b
w.b_C()},
$S:0}
C.d3u.prototype={
$0(){},
$S:0}
C.d3D.prototype={
$0(){},
$S:0}
C.d3r.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.n(new C.d3q(w))},
$S:0}
C.d3q.prototype={
$0(){var w=this.a
w.y=!0
w.z=new B.N(Date.now(),0,!1)},
$S:0}
C.d2W.prototype={
$0(){var w=this.a;++w.Y
w.y=!1
w.z=null},
$S:0}
C.d2X.prototype={
$0(){},
$S:0}
C.d3y.prototype={
$1(d){return d==null},
$S:235}
C.d3z.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
A.d.cu(v.ch,w.d)},
$S:0}
C.d3A.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.d2s.prototype={
$1(d){return d==null},
$S:235}
C.d2t.prototype={
$0(){return this.a.bc++},
$S:0}
C.d2u.prototype={
$0(){},
$S:0}
C.d37.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.d38.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.H(0,t)
w=this.c
u.H(0,w)
if(v.ghq()&&D.ma.q(0,v.a.e)){u=v.id
u.H(0,t)
u.H(0,w);++v.fx}++v.k2
v.fy=B.a([],x.t)},
$S:0}
C.d39.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.n(new C.d36(w))},
$S:11}
C.d36.prototype={
$0(){var w=this.a
w.fy=B.a([],x.t)
w.k1=!1},
$S:0}
C.d3j.prototype={
$0(){return this.a.y1++},
$S:0}
C.d3k.prototype={
$0(){},
$S:0}
C.d3l.prototype={
$0(){return this.a.y2++},
$S:0}
C.d3m.prototype={
$0(){},
$S:0}
C.d3n.prototype={
$0(){return this.a.b1++},
$S:0}
C.d3o.prototype={
$0(){},
$S:0}
C.d3x.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.d3a.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d3b.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.d3c.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d3d.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.d3B.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.d3C.prototype={
$0(){var w=this.a
w.ok.push(w.d.aG(4))
w.p2=0},
$S:0}
C.d2v.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d2w.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.d2x.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d2y.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.d3v.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.d3w.prototype={
$0(){var w,v=this.a;++v.x2
v.aJL()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+B.t(Math.min(w+2,7))+" tiles"},
$S:0}
C.d35.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.d3p.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d33.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d34.prototype={
$2(d,e){return d+e.length},
$S:197}
C.d3E.prototype={
$0(){return B.iC(this.a,null)},
$S:0}
C.d3F.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.d3G.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.d3I.prototype={
$1(d){var w=this.a,v=w.MP(),u=v<=0?0:A.k.D(w.z3()/v,0,1),t=w.a.x,s=t*1.46
return new C.Lx(w.f?s:s*u,s,t,null)},
$S:z+21}
C.d3H.prototype={
$1(d){return d.bR(0.85)},
$S:156}
C.d32.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghq()&&D.ma.q(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return B.u(B.a([B.d(p,w,w,w,w,w,w,A.jN,A.L,w,w),A.ar,B.C(B.as(new B.a3(r*v+u,r*t+s,B.ig(!0,w,w,A.z,new B.hI(v,6,6,1,r),new C.d31(q,r),q.fr.length,w,A.dJ,A.ah,!1),w),w,w,w),1)],x.p),A.m,w,A.e,A.j,0,A.p)},
$S:149}
C.d31.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.q(0,e),p=r.ghq()&&D.ma.q(0,r.a.e)&&q&&r.id.q(0,e),o=r.ghq()&&D.ma.q(0,r.a.e)&&q&&!p,n=A.d.q(r.fy,e)||q,m=p?D.ajn:D.bEL,l=B.m(10),k=B.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.ajn:D.ajh
v=o?B.G(A.dE,A.r,2):s
u=B.a([new B.a9(0,A.G,B.W(51,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.J,4)],x.V)
t=this.b*0.42
return B.aH(!1,l,!0,B.dg(s,B.as(n?B.V(D.c7v[r.fr[e]],A.c,s,s,s,t):B.d("?",s,s,s,s,s,s,B.l(s,s,A.c,s,s,s,s,s,s,s,s,t,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,A.b9,new B.o(s,s,v,k,u,w,A.n),A.eD,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.d30(r,e),s,s,s,s,s,s,s)},
$S:192}
C.d30.prototype={
$0(){return this.a.c9U(this.b)},
$S:0}
C.d2L.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?B.W(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.W(89,A.bq.l()>>>16&255,A.bq.l()>>>8&255,A.bq.l()&255),r=B.m(10),q=B.m(10),p=B.m(10),o=B.G(B.W(64,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
return B.aD(!1,A.X,!0,r,B.aH(!1,q,!0,B.p(A.B,B.d(t?"":u,w,w,w,w,w,w,D.aJe,w,w,w),A.h,w,w,new B.o(w,w,o,p,w,w,A.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d2K(v,d),w,w,w,w,w,w,w),A.h,s,0,w,w,w,w,w,A.ac)},
$S:654}
C.d2K.prototype={
$0(){return this.a.cpf(this.b)},
$S:0}
C.d2M.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=B.W(46,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
return B.aD(!1,A.X,!0,B.m(10),B.aH(!1,B.m(10),!0,B.p(A.B,B.d(u,w,w,w,w,w,w,D.aJe,w,w,w),A.h,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d2J(v,d),w,w,w,w,w,w,w),A.h,t,0,w,w,w,w,w,A.ac)},
$S:654}
C.d2J.prototype={
$0(){return this.a.cpe(this.b)},
$S:0}
C.d2N.prototype={
$1(d){return this.a.n(new C.d2I())},
$S:27}
C.d2I.prototype={
$0(){},
$S:0}
C.d2O.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&B.c()
w=C.aeQ(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.om()
if(u.ghq()&&D.ma.q(0,u.a.e)){u.Zf()
u.mt(!0)}else{v=A.d.cI(u.cy,0,new C.d2G())
t=u.dx
if(t>=v)u.rV("All 5 sentences perfect \u2014 full payout!")
else u.Dc(t/v,t,v)}}else{if(u.ghq()&&D.ma.q(0,u.a.e))u.Zf()
u.n(new C.d2H(u))}},
$S:0}
C.d2G.prototype={
$2(d,e){return d+e.length},
$S:197}
C.d2H.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bG(0,A.c_)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.d2P.prototype={
$1(d){var w=null,v=B.ff(w,w,B.W(38,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,A.ca,w,w,w,w,w,w,w)
return new B.B(A.cH,new B.a3(1/0,w,B.i3(B.d(d,w,w,w,w,w,w,U.aJ8,w,w,w),new C.d2F(this.a,d),v),w),w)},
$S:128}
C.d2F.prototype={
$0(){return this.a.aZZ(this.b)},
$S:0}
C.d2Q.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&B.c()
w=u*3+8
return B.u(B.a([B.d(s,v,v,v,v,v,v,A.nD,v,v,v),A.P,B.C(B.as(new B.a3(w,w,B.ig(!0,v,v,A.z,new B.hI(3,4,4,1,u),new C.d2E(t,u),9,v,A.dJ,A.ah,!1),v),v,v,v),1)],x.p),A.m,v,A.e,A.j,0,A.p)},
$S:149}
C.d2E.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.aXP(e),p=r===0
if(p)w=A.K
else w=q?A.bq:B.W(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v=B.m(10)
s=p?t:new C.d2A(s,e)
u=B.m(10)
p=p?"":""+r
return B.aD(!1,A.X,!0,v,B.aH(!1,u,!0,B.as(B.d(p,t,t,t,t,t,t,B.l(t,t,A.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),A.h,w,0,t,t,t,t,t,A.ac)},
$S:73}
C.d2A.prototype={
$0(){return this.a.cpd(this.b)},
$S:0}
C.d2R.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.d2D(q,d)
p=B.m(16)
if(o)w=D.a_2[d]
else{w=D.a_2[d]
w=B.W(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=B.m(16)
u=o?B.W(A.k.U(127.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.W(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
u=B.G(u,A.r,o?2:1)
t=x.V
if(o){s=D.a_2[d]
t=B.a([new B.a9(0,A.G,B.W(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.J,16)],t)}else t=B.a([],t)
return B.aH(!1,p,!0,B.dg(r,r,r,r,A.b9,new B.o(w,r,u,v,t,r,A.n),T.zu,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1626}
C.d2D.prototype={
$0(){return this.a.cpg(this.b)},
$S:0}
C.d2S.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&B.c()
q=B.d(q,t,t,t,t,t,t,A.nD,t,t,t)
w=B.d("Move "+r.aui()+"/"+C.fFQ(),t,t,t,t,t,t,A.BN,t,t,t)
v=r.x2
u=s*3+12
return B.u(B.a([q,w,B.d("Round "+v+"/7 \xb7 "+B.t(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,B.l(t,t,B.W(153,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.C(B.as(new B.a3(u,u,B.ig(!0,t,t,A.z,new B.hI(3,6,6,1,s),new C.d2C(r),9,t,A.dJ,A.ah,!1),t),t,t,t),1)],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:149}
C.d2C.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=B.m(10),s=B.m(10),r=u?A.bq:D.b1v,q=u?A.eY:D.b8O
return B.aD(!1,A.X,!0,w,B.aH(!1,t,!0,B.p(w,w,A.h,w,w,new B.o(r,w,B.G(q,A.r,u?2.5:1),s,w,w,A.n),w,w,w,w,w,w,w,w),w,!0,w,w,A.K,w,w,w,w,w,w,w,w,new C.d2z(v,e),w,w,w,w,A.K,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)},
$S:73}
C.d2z.prototype={
$0(){return this.a.cpb(this.b)},
$S:0}
C.d2T.prototype={
$0(){return this.a.aZZ(this.b[this.c])},
$S:0}
C.d2U.prototype={
$0(){return this.a.n(new C.d2B())},
$S:0}
C.d2B.prototype={
$0(){},
$S:0}
C.d2V.prototype={
$2(d,e){this.a.Y2(d,e)
return null},
$S:z+36}
C.d70.prototype={
$1(d){return this.a.cam(this.b,d)},
$S:1627}
C.d7_.prototype={
$0(){var w=this
return w.a.a.cHg(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cw2.prototype={
$1(d){var w=this.a
w.Zw()
w.t1()},
$S:9}
C.cvn.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cvd.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cve.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cvx.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cvu.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cvv.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cvw.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cvp.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new C.cvo(w))},
$S:0}
C.cvo.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cvf.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.aa(w.c)
v.dy=J.aa(w.d)
v.fr=J.aa(w.e)},
$S:0}
C.cvs.prototype={
$1(d){var w=this.a
return new C.Td(w.fx,new C.cvr(w),w.a.f.r,null)},
$S:z+11}
C.cvr.prototype={
$1(d){return this.bdD(d)},
bdD(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.c3N(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.n(new C.cvq(r,d))
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:z+37}
C.cvq.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cvQ.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cvK.prototype={
$1(d){this.a.t1()
return null},
$S:14}
C.cvN.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(A.o.ak(v.gaQC().a,1e6)<=0){w=v.id
if(w!=null)w.a9(0)
v.t1()
return}v.n(new C.cvM())},
$S:14}
C.cvM.prototype={
$0(){},
$S:0}
C.cvJ.prototype={
$1(d){this.a.DR()
return null},
$S:14}
C.cvL.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cvI.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=B.bg(J.k(v==null?"":v))
if(u==null)u=new B.N(B.fI(0,0,!1),0,!1)
v=J.q(e,"at")
w=B.bg(J.k(v==null?"":v))
return u.aI(0,w==null?new B.N(B.fI(0,0,!1),0,!1):w)},
$S:39}
C.cvk.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=B.bg(J.k(v==null?"":v))
if(u==null)u=new B.N(B.fI(0,0,!1),0,!1)
v=J.q(e,"at")
w=B.bg(J.k(v==null?"":v))
return u.aI(0,w==null?new B.N(B.fI(0,0,!1),0,!1):w)},
$S:39}
C.cvl.prototype={
$0(){var w=this.a,v=w.f
A.d.a8(v)
A.d.v(v,this.b)
w.ax=!0},
$S:0}
C.cvm.prototype={
$0(){var w=this.a
if(w.c!=null)w.a_a(!0)},
$S:11}
C.cvi.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cvj.prototype={
$1(d){var w=this.a.e
w===$&&B.c()
if(w.f.length!==0)w.RR(this.b)},
$S:9}
C.cvA.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=A.d.gcV(v).Q
v.toString
if(this.b)w.hO(v)
else w.lD(v,A.dU,A.kq)},
$S:9}
C.cvt.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cvB.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cvC.prototype={
$0(){var w=this.a
w.f.push(B.D(["role","user","text",this.b,"at",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z))
w.b0o()
w.r.bG(0,A.c_)
w.at=!0},
$S:0}
C.cvD.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cvE.prototype={
$0(){var w=this.a
w.f.push(B.D(["role","ai","text",this.b,"at",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z))
w.at=!1},
$S:0}
C.cvF.prototype={
$0(){var w,v=this.b,u=B.R(x.N,x.z)
J.aE(u,"role","ai")
J.aE(u,"text",this.c)
J.aE(u,"at",new B.N(Date.now(),0,!1).a4().aa())
w=this.a
if(J.cs(w.b)){w=J.b4(w.b,v.gc9l(),x.P)
w=B.z(w,w.$ti.k("ai.E"))
J.aE(u,"phoneActions",w)}v.f.push(u)
v.b0o()},
$S:0}
C.cvG.prototype={
$0(){this.a.f.push(B.D(["role","ai","text",y.g,"at",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z))},
$S:0}
C.cvH.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cvy.prototype={
$1(d){return this.bdE(d)},
bdE(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
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
case 5:k.anj()
case 4:k.c.F(x.q).f.P(B.b_(null,null,null,A.dk,null,A.q,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:406}
C.cvP.prototype={
$1(d){return this.bdF(d)},
bdF(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.F(x.q).f.P(B.b_(null,null,null,A.dk,null,A.q,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:406}
C.cvz.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=A.d.gcV(v).Q
v.toString
w.hO(v)},
$S:9}
C.cw1.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.c()
if(v>0)w.a8s(v-1)},
$S:0}
C.cvV.prototype={
$0(){return B.iC(this.a,null)},
$S:0}
C.cvY.prototype={
$1(d){var w=this.a
w.n(new C.cvS(w,d))
if(d===0)w.a_a(!0)},
$S:27}
C.cvS.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cvW.prototype={
$2$size(d,e){return C.fEg(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:1628}
C.cvX.prototype={
$0(){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.fQt(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return B.b(H.anW(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cvT(p),"NGMY Music Studio",r),$async$$0)
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
case 15:p.n(new C.cvU(p))
p.a8s(0)
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
C.cvT.prototype={
$2(d,e){return this.bdG(d,e)},
bdG(d,e){var w=0,v=B.j(x.y),u,t=this,s,r,q,p
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
C.cvU.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cw_.prototype={
$2(d,e){return A.ab},
$S:35}
C.cvZ.prototype={
$2(d,e){var w=null,v=this.a,u=B.d((v.a.c.w?D.a_8:D.Zv)[e],w,w,w,w,w,w,A.pA,w,w,w),t=B.W(31,A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255),s=B.W(89,A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255)
v=v.at?w:new C.cvR(v,e)
return B.mG(w,t,u,w,v,w,w,new B.ax(s,1,A.r,-1),w)},
$S:504}
C.cvR.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a_8:D.Zv
w.r.saR(0,v[this.b])
w.ms()
return null},
$S:0}
C.cw0.prototype={
$1(d){var w=this.a
return w.at?null:w.ms()},
$S:2}
C.cvg.prototype={
$0(){return this.a.a8s(0)},
$S:0}
C.cvO.prototype={
$0(){return this.a.a8s(this.b)},
$S:0}
C.cvh.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=B.p(v,D.bzC,A.h,v,v,new B.o(v,v,v,v,v,new B.a8(A.a_,A.a7,A.w,B.a([B.W(51,A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255),w.b],x.O),v,v),A.a6),v,72,v,v,v,v,v,72)
t=w.c
s=B.d("Start a conversation",v,v,v,v,v,v,B.l(v,v,t?A.c:A.aG,v,v,v,v,v,v,v,v,16,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return B.as(new B.B(A.UU,B.u(B.a([u,A.aa,s,A.ar,B.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,B.l(v,v,t?A.aB:A.aV,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),v,v,v)}if(e<s)return u.byE(t[e],w.c)
return u.aKl(B.D(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:42}
C.bTm.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=A.k.M(d)
return new B.N(B.fI(w>1e11?w:w*1000,0,!0),0,!0).bO()}v=B.bg(J.k(d))
return v==null?null:v.bO()},
$S:333}
C.bTl.prototype={
$1(d){B.aQ(d)
return(d==null?0:d)/100},
$S:665}
C.bTo.prototype={
$1(d){var w
if(d==null)w=null
else{w=B.bg(J.k(d))
w=w==null?null:w.bO()}return w},
$S:333}
C.bTn.prototype={
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
C.dnq.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dnr.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dnh.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bi(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dnf.prototype={
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
return B.b(C.fyQ(t,s,r,q),$async$$0)
case 3:p=e
w=4
return B.b(B.oA(o.a.c,!1),$async$$0)
case 4:o.ko(p)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dnp.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.a70(),$async$$0)
case 3:q=e
if(q==null){r.ko("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return B.b(B.a7(s,!1).cr(B.eH(new C.dno(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return B.b(B.oA(r.a.c,!1),$async$$0)
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dno.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&B.c()
return new C.XT(w.b,w.a,u,v,null)},
$S:z+38}
C.dne.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.hjw(q)?3:4
break
case 3:w=5
return B.b(t.a.Dr(A.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return B.b(C.aTZ(q,s.a.c),$async$$0)
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
case 9:s.ko(C.bTq(s.a.c))
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
return B.b(s.aLz(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dnd.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=B.bi(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dng.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.aah(),$async$$0)
case 3:q=e
if(q==null||A.a.i(q).length===0){w=1
break}s=C.fNv(q)
if(s==null){r.ko("Could not read that backup file.")
w=1
break}if(!C.bTp(s,r.a.c,null)){r.ko(C.bTq(r.a.c))
w=1
break}w=4
return B.b(r.bAW(s),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dnn.prototype={
$1(d){var w=null,v=new B.ao(A.aq,$.at()),u=B.K(d).ax.a===A.H,t=u?A.hn:A.c,s=x.p,r=B.u(B.a([B.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,B.l(w,w,u?A.al:A.aj,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),A.ay,B.aK(w,A.U,!0,w,!0,A.q,w,B.aL(),v,w,w,w,w,w,2,B.bl(w,new B.b1(4,B.m(14),A.da),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),A.z,!0,w,!0,w,!1,w,A.ae,w,w,w,w,w,A.dL,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.L,w,A.am,w,w,w,w)],s),A.F,w,A.e,A.R,0,A.p)
return B.ep(B.a([B.bG(!1,A.de,w,w,!0,w,w,new C.dnl(d),w,w),B.bJ(D.eDA,new C.dnm(d,v),B.bk(A.aS,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.eQV,w)},
$S:20}
C.dnl.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.dnm.prototype={
$0(){var w=A.a.i(this.b.a.a)
B.a7(this.a,!1).K(w)
return null},
$S:0}
C.dni.prototype={
$1(d){return D.f4b},
$S:z+12}
C.dnj.prototype={
$0(){return this.a.Ds(A.a.i(this.b))},
$S:1}
C.dnk.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(C.aTZ(t.b,r.a.c),$async$$0)
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
case 7:r.ko(C.bTq(r.a.c))
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
return B.b(r.aLz(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dns.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.dnw.prototype={
$1(d){this.a.P0()
return null},
$S:14}
C.dnt.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dnu.prototype={
$0(){var w=null,v=this.a
B.fC(new B.fv(v.gasI()))
this.b.F(x.q).f.P(B.b_(w,w,w,w,w,A.q,w,B.d("Code "+v.gasI()+" copied",w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dnv.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.dnx.prototype={
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
C.f5s.prototype={
$1(d){return D.f2u},
$S:z+13}
C.f6F.prototype={
$1(d){return new C.abY(this.a,this.b,this.c,null)},
$S:z+14}
C.eEF.prototype={
$0(){B.a7(this.a,!1).K(!1)
return null},
$S:0}
C.eEG.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.cYg.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.ft()},
$S:9}
C.cYd.prototype={
$2(d,e){return e.ahz(e.a.toUpperCase())},
$S:1629}
C.cYe.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=A.a.i(w.d.a.a)
B.a7(v,!1).K(w)
return null},
$S:2}
C.cYf.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.bU7.prototype={
$1(d){var w=J.q(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!A.d.be(D.cUv,A.a.gkQ(v))},
$S:4}
C.fdz.prototype={
$1(d){return d.a===this.a},
$S:1630}
C.fdA.prototype={
$0(){return A.d.gI(A.AI)},
$S:1631}
C.dtS.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.n(new C.dtR(v))
w=v.r
w===$&&B.c()
if(w<=0)v.b_t("Time's up")},
$S:14}
C.dtR.prototype={
$0(){var w=this.a,v=w.r
v===$&&B.c()
w.r=v-1
return v},
$S:0}
C.dtJ.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dtO.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.n(new C.dtL(w,d,e))},
$S:132}
C.dtL.prototype={
$0(){var w=this.a,v=this.c
w.e=A.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dtP.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new C.dtK(w))
w.cjK(!0)},
$S:0}
C.dtK.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dtQ.prototype={
$1(d){this.a.b_t(d)
return null},
$S:2}
C.dtM.prototype={
$0(){return B.iC(this.a,null)},
$S:0}
C.dtN.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.f7q.prototype={
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
C.f7r.prototype={
$2(d,e){var w=B.aQ(J.q(d,e))
w=w==null?null:A.k.M(w)
return w==null?0:w},
$S:566}
C.f7s.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:197}
C.fky.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.fYD(w,v):C.fEy(w,v)
if(u===3)++w.f
C.adl(w,this.c,u)
return u},
$S:1633}
C.fkA.prototype={
$0(){return C.fYD(this.a,this.b)},
$S:113}
C.fkz.prototype={
$0(){return C.fEy(this.a,this.b)},
$S:113}
C.dn2.prototype={
$0(){var w=this.a
if(w.a.c)w.n(new C.dn1(w))},
$S:0}
C.dn1.prototype={
$0(){this.a.r=1+A.o.J(B.Dt(new B.N(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dn3.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&B.c()
u=u.x
u===$&&B.c()
w=A.k.bK(u*10)
if(w!==v.w)v.n(new C.dn0(v,w))}},
$S:0}
C.dn0.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.c2t.prototype={
$3(d,e,f){var w=null
return B.C(B.u(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,A.I,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.bw,B.eY(A.B,B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,A.dp)],x.p),A.m,w,A.e,A.j,0,A.p),1)},
$S:1634}
C.c2s.prototype={
$3(d,e,f){var w=null
return B.d("$"+A.k.ab(e,2),w,w,w,w,w,w,A.oq,w,w,w)},
$S:359}
C.c2V.prototype={
$1(d){return new C.LF(this.a,this.b,!1,null,null)},
$S:z+15}
C.dLW.prototype={
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
o.push(B.nm(A.j3,D.eOK,new C.dLS()))
o.push(A.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(B.d(m,g,g,g,g,g,g,B.l(g,g,A.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,A.cp,g,1.45,!0,g,g,g,g,g,g,g,g),A.L,g,g))
m=this.b
if(m.length!==0){l=A.cN.j(0.12)
k=B.m(18)
j=B.G(A.cN.j(0.45),A.r,1)
i=B.a([B.A(B.a([B.V(D.bpe,A.cN.j(0.95),g,g,g,20),A.ab,B.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,B.l(g,g,A.cN.j(0.95),g,g,g,g,g,g,g,g,13,g,g,A.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),A.m,g,A.e,A.j,0,g,g),A.T,B.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,B.l(g,g,A.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),A.T],p)
A.d.v(i,new B.I(m,new C.dLT(),B.T(m).k("I<1,r>")))
A.d.v(o,B.a([A.aN,B.p(g,B.u(i,A.F,g,A.e,A.j,0,A.p),A.h,g,g,new B.o(l,g,j,k,g,g,A.n),g,g,g,g,A.bA,g,g,1/0)],p))}o.push(A.bs)
m=A.x.j(0.35)
l=B.m(18)
k=B.G(A.b0.j(0.35),A.r,1)
o.push(B.p(g,B.u(B.a([f.atf(A.hg,"Unlimited games with an active plan",A.bc),A.P,f.atf(A.jZ,"Weekday check-ins grow your balance",A.b0),A.P,f.atf(A.lX,"Compete, bet, and earn points",A.aM)],p),A.m,g,A.e,A.j,0,A.p),A.h,g,g,new B.o(m,g,k,l,g,g,A.n),g,g,g,g,A.bA,g,g,1/0))
o.push(A.d1)
l=B.m(16)
n=B.a([new B.a9(0,A.G,A.bz.j(0.45),A.cv,16)],n)
o.push(new B.a3(1/0,g,B.bQ(B.dj(D.byr,D.eKD,new C.dLU(f,a0),B.bk(A.K,g,g,g,A.c,A.GS,g,A.K,new B.b5(B.m(16),A.W),g,g,g)),new B.o(g,g,g,l,n,E.t4,A.n),A.b7),g))
o.push(A.P)
n=f.a.e?"Back":"Maybe later"
o.push(B.bG(!1,B.d(n,g,g,g,g,g,g,B.l(g,g,A.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,new C.dLV(f,a0),g,g))
if(f.a.e)o.push(A.b6)
h=B.p(g,B.bu(v,new B.am(A.V,g,A.a9,A.q,B.a([t,u,new B.B(new B.L(22,r,22,q),B.u(o,A.m,g,A.e,s,0,A.p),g)],p),g),A.ap),A.h,g,g,new B.o(g,g,e,d,w,D.bHi,A.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return B.eB(g,A.K,h,g,g,g,Ac.Vo,A.cZ,g,g,g)},
$S:655}
C.dLS.prototype={
$1(d){return D.bGk.aB(0,d)},
$S:65}
C.dLT.prototype={
$1(d){var w=null
return new B.B(A.fh,B.A(B.a([B.V(Aj.Xe,A.cN.j(0.85),w,w,w,14),A.ab,B.C(B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$S:128}
C.dLU.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{B.a7(this.b,!1).K(null)
w.a.c.$0()}},
$S:0}
C.dLV.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else B.a7(this.b,!1).K(null)},
$S:0}
C.ffW.prototype={
$1(d){if(d.gm9())this.a.a=d
return d.gm9()},
$S:468}
C.ffJ.prototype={
$1(d){$.aS.x1$.push(new C.ffI(this.a))},
$S:9}
C.ffI.prototype={
$1(d){return this.a.$0()},
$S:9}
C.f3J.prototype={
$1(d){return C.fYJ(this.a,this.b+1)},
$S:9}
C.fhh.prototype={
$2(d,e){var w=B.aG(d,A.bO,x.w).w.a
return new B.a3(w.a,w.b,B.ce(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:164}
C.c37.prototype={
$1(d){return d.r===this.a},
$S:313}
C.c38.prototype={
$1(d){var w=$.aNh(),v=w.a
w.st(0,v+1)
return v},
$S:1637}
C.c39.prototype={
$1(d){},
$S:29}
C.c36.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:313}
C.c35.prototype={
$1(d){return d.f.c9(this.a)},
$S:313}
C.f1V.prototype={
$1(d){return B.t(d.h(0,1))+","},
$S:69}
C.fsB.prototype={
$1(d){return C.a4X(this.a)},
$S:99}
C.fsC.prototype={
$1(d){var w=$.aNh()
w.st(0,w.a+1)},
$S:28}
C.fsD.prototype={
$1(d){},
$S:29}
C.fsE.prototype={
$1(d){return new B.k1($.aNh(),new C.fsA(this.a,this.b),null,null,x.am)},
$S:1638}
C.fsA.prototype={
$3(d,e,f){var w=this.b
return new B.kU(C.amQ(this.a,!1),new C.fsz(w),w,null,x.gv)},
$S:1639}
C.fsz.prototype={
$2(d,e){var w=e.b
return new C.aaO(w==null?this.a:w,null)},
$S:z+16}
C.dLZ.prototype={
$1(d){return d.c},
$S:313}
C.dM_.prototype={
$1(d){return d.gbaB()},
$S:1640}
C.dM0.prototype={
$2(d,e){return d+e},
$S:93}
C.dM1.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.dM3.prototype={
$2(d,e){return A.P},
$S:35}
C.dM2.prototype={
$2(d,e){return new C.aaN(J.q(this.a.c,e),null)},
$S:z+17}
C.dLY.prototype={
$1(d){return d==null?"\u2026":C.bvy(d)},
$S:1641}
C.fsH.prototype={
$3(d,e,f){var w=this
return B.qV(new C.ax7(w.a,w.b,w.c,w.d,new C.fsF(d,w.e),new C.fsG(d,w.f),null))},
$C:"$3",
$R:3,
$S:92}
C.fsF.prototype={
$0(){B.a7(this.a,!1).K(null)
C.h0F(this.b)},
$S:0}
C.fsG.prototype={
$0(){B.a7(this.a,!1).K(null)
C.h0F(this.b)},
$S:0}
C.d3S.prototype={
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
A.d.v(w,new B.I(t,new C.d3R(),B.T(t).k("I<1,r>")))}t=h.d
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
r=B.a([X.a9Z,A.rg],r)
l.push(new B.a3(i,100,new B.am(A.B,i,A.a9,A.h,B.a([B.fl(A.B,B.p(i,D.aXq,A.h,i,i,new B.o(i,i,i,i,B.a([new B.a9(4,A.G,A.cL.j(0.6),A.J,24),new B.a9(0,A.G,A.x.j(0.3),A.dm,12)],n),new B.bS(A.B,0.5,A.w,i,0,r,i,i),A.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.bBC)
l.push(A.ay)
l.push(B.d(h.a.d,i,i,i,i,i,i,A.a4m,A.L,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=B.m(18)
k=B.G(A.fo,A.r,4)
A.d.v(l,B.a([A.ay,D.eFc,A.P,B.p(i,B.d(r,i,i,i,i,i,i,D.ewk,A.L,i,i),A.h,i,i,new B.o(A.c,i,k,n,i,i,A.n),i,i,i,i,A.US,i,i,1/0)],g))}A.d.v(l,B.a([A.aa,B.d(h.a.e,i,i,i,i,i,i,D.eyW,A.L,i,i)],g))
l.push(A.dW)
r=B.C(B.dU(D.eCU,h.a.r,B.d9(i,i,i,i,i,i,i,i,i,A.c,i,i,A.ca,i,i,D.aPt,i,i,i,i)),1)
h=h.a
n=h.w
l.push(B.A(B.a([r,A.av,B.C(B.bJ(F.aKv,n,B.bk(A.c,i,i,i,h.c?A.fo:A.f4,i,A.ca,i,i,i,i,i)),1)],g),A.m,i,A.e,A.j,0,i,i))
w.push(B.e4(A.B,B.p(i,B.u(l,A.m,i,A.e,A.R,0,A.p),A.h,i,i,new B.o(i,i,o,p,m,new B.a8(A.ax,A.aE,A.w,q,i,i),A.n),i,i,i,A.a8,A.adu,i,i,s),1+t*0.02,i,i))
return new B.am(A.B,i,A.a9,A.h,w,i)},
$S:108}
C.d3R.prototype={
$1(d){var w=null,v=d.a,u=d.b
return B.an(w,B.d4(B.et(A.B,d.d,B.V(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+18}
C.c4J.prototype={
$2(d,e){var w=null,v=this.a,u=C.hiY(B.Jh(v.c,v.d))
return B.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1642}
C.c4I.prototype={
$1(d){return B.t(d.h(0,1))+","},
$S:69}
C.bUE.prototype={
$0(){},
$S:0}
C.f0U.prototype={
$1(d){return A.o.u(d)},
$S:83}
C.dFe.prototype={
$0(){return this.a.y=!0},
$S:0}
C.dFf.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.dFg.prototype={
$0(){var w=this.a
return w.w=D.O1[w.d.aG(5)]},
$S:0}
C.dFh.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.dFi.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.dFj.prototype={
$0(){var w=this.a
return w.n(new C.dFd(w))},
$S:0}
C.dFd.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dFk.prototype={
$0(){var w=this.a
return w.n(new C.dFc(w))},
$S:0}
C.dFc.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dFn.prototype={
$0(){return B.iC(this.a,null)},
$S:0}
C.dFo.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&A.a.i(t.e.a.a).length===0?A.bq:B.W(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),r=B.m(10)
t=t.y?u:new C.dFm(t,d)
w=B.m(10)
v=A.k.ab(d,0)
return B.C(new B.B(A.jX,B.aD(!1,A.X,!0,r,B.aH(!1,w,!0,new B.a3(u,38,B.as(B.d("$"+v,u,u,u,u,u,u,B.l(u,u,A.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),A.h,s,0,u,u,u,u,u,A.ac),u),1)},
$S:1643}
C.dFm.prototype={
$0(){var w=this.a
return w.n(new C.dFl(w,this.b))},
$S:0}
C.dFl.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bG(0,A.c_)},
$S:0}
C.dMl.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+A.cM.gcq().aE(this.c)},
$S:0}
C.dMm.prototype={
$0(){return B.iC(this.a,null)},
$S:0}
C.dMh.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=B.m(14),s=u?A.c.j(0.1):A.K,r=B.G(u?D.eu.j(0.5):A.K,A.r,1),q=B.V(e,u?D.eu:A.aB,w,w,w,20)
return B.C(B.aJ(w,B.dg(w,B.A(B.a([q,A.bp,B.d(f,w,w,w,w,w,w,B.l(w,w,u?A.c:A.aB,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.b5,A.j,0,w,w),w,w,A.b9,new B.o(s,w,r,t,w,w,A.n),A.X,w,46,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dMj(v,d),w,w,w,w,w,w,!1,A.af),1)},
$S:1644}
C.dMj.prototype={
$0(){var w=this.a
return w.n(new C.dMi(w,this.b))},
$S:0}
C.dMi.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dMk.prototype={
$0(){var w=this.a,v=w.d===A.k5?"Cash App tag":"Bitcoin address"
return w.Hp(this.b,v)},
$S:0}
C.dMg.prototype={
$0(){var w=this.a
return w.Hp(w.gaob(),"Code")},
$S:0}
C.c3z.prototype={
$1(d){return C.hf6(B.Z(d,x.N,x.z))},
$S:z+19}
C.c3A.prototype={
$2(d,e){return d.c.aI(0,e.c)},
$S:z+6}
C.c3w.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.c3x.prototype={
$2(d,e){return d.c.aI(0,e.c)},
$S:z+6}
C.c3y.prototype={
$1(d){return d.ad()},
$S:z+22}
C.c3B.prototype={
$1(d){var w=d.c
return!w.cU(this.a.bL(-36e8))&&!w.c9(this.b)},
$S:z+7}
C.bX1.prototype={
$1(d){return C.hf7(B.Z(d,x.N,x.z))},
$S:z+23}
C.bX2.prototype={
$2(d,e){return e.b.aI(0,d.b)},
$S:z+8}
C.bX_.prototype={
$1(d){return d.ad()},
$S:z+25}
C.bX0.prototype={
$2(d,e){return e.b.aI(0,d.b)},
$S:z+8}
C.bX4.prototype={
$1(d){var w=d.b
return!w.cU(this.a)&&!w.c9(this.b)},
$S:z+26}
C.c3I.prototype={
$1(d){return d.ad()},
$S:z+27}
C.c3H.prototype={
$1(d){return C.fPF(B.Z(x.f.a(d),x.N,x.z))},
$S:z+28}
C.c3G.prototype={
$1(d){return d.ad()},
$S:z+29}
C.c3F.prototype={
$1(d){return C.hiC(B.Z(x.f.a(d),x.N,x.z))},
$S:z+30}
C.c3K.prototype={
$1(d){return C.hiB(B.Z(x.f.a(d),x.N,x.z))},
$S:z+31}
C.c3L.prototype={
$2(d,e){return A.o.aI(d.f,e.f)},
$S:z+2}
C.c3M.prototype={
$1(d){return d.ad()},
$S:z+33}
C.dQ0.prototype={
$1(d){return d.b6a(B.bi(d.e,!0,x.u))},
$S:z+35}
C.dQ1.prototype={
$2(d,e){return A.o.aI(d.f,e.f)},
$S:z+2}
C.dPV.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dPW.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dPE.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.H(w,this.b)},
$S:0}
C.dPF.prototype={
$1(d){return new C.Nx(this.a,null)},
$S:z+9}
C.dPG.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&B.c()
w=A.d.bf(t,new C.dPD(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){A.d.cu(u.d,w)
u.Hz()}},
$S:0}
C.dPD.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dPS.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(B.D(["role","admin","text",this.b],w,w))},
$S:0}
C.dPT.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(B.D(["role","ai","text",v],t,t))}else{v=t.d
v===$&&B.c()
t.d=C.hI0(v,w[0],w[3])
t.Hz()
t=w[2]
if(t==null)t="Created "+J.aa(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(B.D(["role","ai","text",t],w,w))}},
$S:0}
C.dPU.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=A.d.gcV(v).Q
v.toString
w.hO(v)}},
$S:9}
C.dPM.prototype={
$1(d){return new C.Nx(this.a,null)},
$S:z+9}
C.dPN.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dPL.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.cu(w,this.b)},
$S:0}
C.dPR.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&B.c()
v=A.d.cu(w,s)
A.d.cj(t.d,u.a,v)
t.Hz()},
$S:0}
C.dPQ.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&B.c()
w=this.b
return new C.YF(u[w],new C.dPP(v,w),null)},
$S:z+58}
C.dPP.prototype={
$1(d){var w=this.a
return w.n(new C.dPO(w,this.b,d))},
$S:z+39}
C.dPO.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dPI.prototype={
$0(){var w=this.a
return w.n(new C.dPH(w))},
$S:0}
C.dPH.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dPJ.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?A.ct:A.aI
return new B.B(A.fh,B.d(t+": "+B.t(s),w,w,w,w,w,w,B.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?A.a1:A.cp,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:110}
C.dPK.prototype={
$1(d){return this.a.ZS()},
$S:2}
C.dQ_.prototype={
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
q=B.p(n,B.V(A.ag1,l?A.bP:A.aj,n,n,n,20),A.h,n,n,new B.o(q,n,n,p,n,n,A.n),n,n,n,n,A.bT,n,n,n)
p=B.aX(r).j(0.12)
o=B.m(8)
o=B.p(n,B.V(w.c,B.aX(r),n,n,n,18),A.h,n,n,new B.o(p,n,n,o,n,n,A.n),n,n,n,n,A.hf,n,n,n)
r=B.A(B.a([o,A.av,B.C(B.d(w.b,n,n,n,n,n,n,B.l(n,n,l?A.aO:A.M,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),A.m,n,A.e,A.j,0,n,n)
p=w.e.length
return new B.B(A.d7,B.aD(!1,A.X,!0,u,B.dK(!1,n,n,n,!0,n,n,n,!0,n,new H.aro(q,e,!0,n),n,n,n,n,new C.dPX(m,e),!1,n,n,new B.b5(t,new B.ax(s,1,A.r,-1)),n,n,B.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,B.l(n,n,l?A.bP:A.aj,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,B.AD(n,n,n,new C.dPY(),A.J,new C.dPZ(m,e),A.ch,n,x.N),n),A.h,v,0,n,n,n,n,n,A.ac),new B.cv(w.a,x.W))},
$S:110}
C.dPZ.prototype={
$1(d){var w=this
if(d==="edit")w.a.a7s(w.b)
if(d==="questions")w.a.Wu(w.b)
if(d==="delete")w.a.bDL(w.b)},
$S:2}
C.dPY.prototype={
$1(d){return D.csC},
$S:127}
C.dPX.prototype={
$0(){return this.a.Wu(this.b)},
$S:0}
C.cEs.prototype={
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
return B.aH(!1,s,!0,B.p(s,B.V(d,B.aX(t),s,s,s,s),A.h,s,s,new B.o(q,s,u,v,s,s,A.n),s,s,s,s,A.ch,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cEr(r,d),s,s,s,s,s,s,s)},
$S:1645}
C.cEr.prototype={
$0(){var w=this.a
return w.n(new C.cEp(w,this.b))},
$S:0}
C.cEp.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cEt.prototype={
$1(d){var w=null,v=this.a,u=B.aX(d),t=v.f
t===$&&B.c()
return B.aJ(w,B.hh(u,w,t===d?D.bz7:w,w,14),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cEq(v,d),w,w,w,w,w,w,!1,A.af)},
$S:439}
C.cEq.prototype={
$0(){var w=this.a
return w.n(new C.cEo(w,this.b))},
$S:0}
C.cEo.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cEu.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.cEv.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&B.c()
t=A.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&B.c()
v=v.f
v===$&&B.c()
t=u.czb(v,w,t)
B.a7(this.b,!1).K(t)
return null},
$S:0}
C.ezK.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return w.push(this.b)},
$S:0}
C.ezL.prototype={
$1(d){return new C.YE(this.a,null)},
$S:z+40}
C.ezR.prototype={
$2(d,e){return A.P},
$S:35}
C.ezQ.prototype={
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
r=B.bu(q,K.aM_(n,A.bM,36,A.p0,l?A.bP:A.aj,r,48),A.ap)}else r=B.V(D.WX,B.aX(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=B.d(q,n,2,A.Z,n,n,n,B.l(n,n,l?A.aO:A.M,n,n,n,n,n,n,n,n,n,n,n,A.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.aa(w.c)
o=w.e?" \xb7 Printable":""
return B.aD(!1,A.X,!0,u,B.dK(!1,n,n,n,!0,n,n,n,!0,n,r,n,n,n,n,new C.ezO(m,w,e),!1,n,n,new B.b5(t,new B.ax(s,1,A.r,-1)),n,n,B.d(""+p+" block(s)"+o,n,n,n,n,n,n,B.l(n,n,l?A.bP:A.aj,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,B.aF(n,n,n,n,D.bxA,n,n,n,new C.ezP(m,e),n,n,n,n,n,n),n),A.h,v,0,n,n,n,n,n,A.ac)},
$S:73}
C.ezP.prototype={
$0(){var w=this.a
w.n(new C.ezM(w,this.b))
w.ati()},
$S:0}
C.ezM.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.cu(w,this.b)},
$S:0}
C.ezO.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.aVT(u.b),$async$$0)
case 2:s=e
if(s!=null){t.n(new C.ezN(t,u.c,s))
t.ati()}return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.ezN.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.ezG.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ezE.prototype={
$1(d){var w=this.a.e
w===$&&B.c()
return new C.Te(w,"Answer Document",null)},
$S:z+41}
C.ezF.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ezI.prototype={
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
C.ezJ.prototype={
$1(d){var w=this.a
return w.n(new C.ezH(w,d))},
$S:8}
C.ezH.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.c3C.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+42}
C.fhF.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dQB.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+43}
C.dQh.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.H(w,new C.li("image","",this.b,null))},
$S:0}
C.dQm.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.H(w,new C.li("video","","data:video/mp4;base64,"+A.cM.gcq().aE(this.b),null))},
$S:0}
C.dQk.prototype={
$1(d){var w=null,v=x.p,u=B.u(B.a([B.aK(w,A.U,!1,w,!0,A.q,w,B.aL(),this.a,w,w,w,w,w,2,D.bDn,A.z,!0,w,!0,w,!1,w,A.ae,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w),B.aK(w,A.U,!1,w,!0,A.q,w,B.aL(),this.b,w,w,w,w,w,2,D.bDm,A.z,!0,w,!0,w,!1,w,A.ae,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w)],v),A.m,w,A.e,A.R,0,A.p)
return B.ep(B.a([B.bG(!1,A.de,w,w,!0,w,w,new C.dQi(d),w,w),B.bJ(D.eOg,new C.dQj(d),w)],v),w,w,w,u,w,w,w,w,D.eCh,w)},
$S:20}
C.dQi.prototype={
$0(){B.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dQj.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dQl.prototype={
$0(){var w,v=this.a.e
v===$&&B.c()
w=A.a.i(this.b.a.a)
return A.d.H(v,new C.li("link","",A.a.i(this.c.a.a),w))},
$S:0}
C.dQd.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.dQe.prototype={
$1(d){return d.length!==0},
$S:3}
C.dQf.prototype={
$1(d){return A.a.i(A.a.e0(d,B.ad("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.dQg.prototype={
$1(d){return d.length!==0},
$S:3}
C.dQr.prototype={
$0(){var w=this.a.bxe()
B.a7(this.b,!1).K(w)
return null},
$S:0}
C.dQs.prototype={
$0(){return this.a.atj("**","**")},
$S:0}
C.dQt.prototype={
$0(){return this.a.atj("*","*")},
$S:0}
C.dQu.prototype={
$0(){return this.a.atj("__","__")},
$S:0}
C.dQv.prototype={
$0(){return this.a.aU8("## Section title")},
$S:0}
C.dQw.prototype={
$0(){return this.a.aU8("\u2022 First point\n\u2022 Second point")},
$S:0}
C.dQx.prototype={
$0(){},
$S:0}
C.dQy.prototype={
$0(){var w=this.a
w.n(new C.dQq(w))},
$S:0}
C.dQq.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.H(w,D.dgT)},
$S:0}
C.dQz.prototype={
$0(){var w=this.a
w.n(new C.dQp(w))},
$S:0}
C.dQp.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.H(w,D.dgU)},
$S:0}
C.dQA.prototype={
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
return B.C2(u,v,A.aie,w,u,new C.dQo(this.a,d),u)},
$S:z+44}
C.dQo.prototype={
$0(){var w=this.a
return w.n(new C.dQn(w,this.b))},
$S:0}
C.dQn.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.cu(w,this.b.a)},
$S:0}
C.dQa.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.aMG},
$S:0}
C.dQb.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.f3n},
$S:0}
C.dQ2.prototype={
$0(){var w=this.a
w.d=D.aMF
w.f=w.e=null},
$S:0}
C.dQ3.prototype={
$0(){var w=this.a
w.d=D.aMG
w.f=null},
$S:0}
C.dQc.prototype={
$2(d,e){return A.o.aI(d.f,e.f)},
$S:z+2}
C.dQ5.prototype={
$2(d,e){var w=this.a,v=w.gb0p()[e]
return new C.a9m(v,this.b,new C.dQ4(w,v),null)},
$S:z+45}
C.dQ4.prototype={
$0(){return this.a.bZX(this.b.a)},
$S:0}
C.dQ7.prototype={
$2(d,e){return A.o.aI(d.f,e.f)},
$S:z+46}
C.dQ9.prototype={
$2(d,e){return A.T},
$S:35}
C.dQ8.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.rd:A.c,p=B.m(16),o=B.m(16),n=B.m(16),m=B.G(r?A.aI:A.aJ,A.r,1),l=B.a([new B.a9(0,A.G,A.x.j(r?0.28:0.06),A.dG,8)],x.V),k=B.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=B.m(10)
v=B.m(10)
k.push(B.bu(w,K.aM_(v,A.bM,52,D.WX,r?A.bP:A.aj,j,52),A.ap))}else{j=u.d.d
w=B.aX(j).j(0.15)
v=B.m(12)
k.push(B.p(t,B.V(D.WX,B.aX(j),t,t,t,24),A.h,t,t,new B.o(w,t,t,v,t,t,A.n),t,52,t,t,t,t,t,52))}k.push(A.ba)
k.push(B.C(B.d(s.b,t,t,t,t,t,t,B.l(t,t,r?A.aO:A.M,t,t,t,t,t,t,t,t,13,t,t,A.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(B.V(A.ek,r?A.bP:A.aj,t,t,t,22))
return B.aD(!1,A.X,!0,p,B.aH(!1,o,!0,B.p(t,B.A(k,A.m,t,A.e,A.j,0,t,t),A.h,t,t,new B.o(t,t,m,n,l,t,A.n),t,t,t,t,A.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dQ6(u.a,s),t,t,t,t,t,t,t),A.h,q,0,t,t,t,t,t,A.ac)},
$S:73}
C.dQ6.prototype={
$0(){return this.a.c5z(this.b)},
$S:0}
C.c3E.prototype={
$1(d){return new C.a9e(d,this.a,null)},
$S:z+47}
C.cy8.prototype={
$0(){var w=this.a.c,v=w.c,u=B.o0(v==null?w.b:v)
if(u!=null)B.iH(u,A.f7,null)},
$S:0}
C.cy9.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.cya.prototype={
$1(d){var w=null,v=this.a.d.a,u=B.d("\u2022  ",w,w,w,w,w,w,B.l(w,w,v?A.ct:A.aI,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=A.a.i(d)
return new B.B(A.o1,B.A(B.a([u,B.C(B.d(t,w,w,w,w,w,w,B.l(w,w,v?A.ct:A.aI,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.F,w,A.e,A.j,0,w,w),w)},
$S:128}
C.d7U.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d7W.prototype={
$0(){return this.a.n(new C.d7V(this.b))},
$S:0}
C.d7V.prototype={
$0(){var w=this.a
return w.a.f?w.fS(0):w.p5(0)},
$S:0}
C.f0E.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.dQP.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.B2)w.z=v
else w.Q=v},
$S:0}
C.dQG.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=A.d.gcV(v).Q
v.toString
w.lD(v,A.co,A.eU)},
$S:9}
C.dQI.prototype={
$1(d){return J.q(d,"role")==="ai"},
$S:89}
C.dQJ.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.D(["role","user","text",this.b],v,v))
w.d.bG(0,A.c_)
w.r=!0},
$S:0}
C.dQK.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.D(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.dQL.prototype={
$1(d){var w=J.a6(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+B.t(w.h(d,"text"))},
$S:151}
C.dQM.prototype={
$0(){var w=x.N
return this.a.f.push(B.D(["role","ai","text",this.b],w,w))},
$S:0}
C.dQN.prototype={
$0(){var w=x.N
return this.a.f.push(B.D(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.dQO.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dQH.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=B.mi(l,A.bz.j(0.9),l,l,l,l,l,2,l,l)
return new B.B(A.c1,B.A(B.a([new B.a3(22,22,k,l),A.av,B.d("Writing full song\u2026",l,l,l,l,l,l,B.l(l,l,this.b?A.aB:A.dx,l,l,l,l,l,l,l,l,12,A.cz,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),A.m,l,A.e,A.j,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?A.a7:A.a_
k=k.c
k.toString
k=B.aG(k,A.bO,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new B.a8(A.a_,A.a7,A.w,B.a([A.aA,A.bz.j(0.85)],x.O),l,l)
else{q=x.O
q=new B.a8(A.a_,A.a7,A.w,v?B.a([A.bj,A.M],q):B.a([A.c,A.aO],q),l,l)}p=B.a([new B.a9(0,A.G,(u?A.bz:A.aA).j(0.22),A.jn,14)],x.V)
o=B.G(A.c.j(u?0.2:0.08),A.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=A.c
else v=v?A.aJ:A.bi
n=u?13.5:15
m=u?A.bg:A.cz
return new B.bE(t,l,l,B.p(l,B.d(w,l,l,l,l,l,l,B.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?A.a1:A.cp,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),A.h,l,new B.aV(0,k.a.a*0.94,0,1/0),new B.o(l,l,o,new B.bv(A.jK,A.jK,new B.b3(s,s),new B.b3(r,r)),p,q,A.n),l,l,l,A.ks,A.iE,l,l,l),l)},
$S:42}
C.dQW.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&B.c()
w=m.x
w===$&&B.c()
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([D.a8K,A.M,A.n9],t):B.a([A.q2,A.pW,A.oJ],t)
w=B.a([new B.a9(-4,A.G,A.aA.j(0.35+w*0.25),A.dm,28)],x.V)
r=B.G(A.c.j(u?0.08:0.5),A.r,1)
q=B.de()
p=q.a
p.$flags&2&&B.ah(p)
p[11]=0.001
m=m.x
m===$&&B.c()
q.fk(m*0.08)
q=B.fl(A.B,B.p(o,D.bul,A.h,o,o,new B.o(o,o,B.G(A.aM.j(0.6),A.r,2),o,o,D.dS1,A.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=B.nm(A.j3,D.eSp,new C.dQT())
p=x.p
m=B.a([B.A(B.a([q,A.ba,B.C(B.u(B.a([m,B.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,B.l(o,o,u?A.aQ:A.aV,o,o,o,o,o,o,o,o,10,o,o,A.a1,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),A.F,o,A.e,A.j,0,A.p),1)],p),A.m,o,A.e,A.j,0,o,o),A.aa,B.A(B.a([n.arN(D.B2,"Swahili","\ud83c\uddf9\ud83c\uddff",u),A.ab,n.arN(D.aA4,"English","\ud83c\uddec\ud83c\udde7",u),A.ab,n.arN(D.B3,"Mix","\ud83d\udd25",u)],p),A.m,o,A.e,A.j,0,o,o)],p)
if(n.x!==D.B3){t=B.a([A.P,n.cnP(u)],p)
if(n.w){q=n.x===D.B2?D.a_G:D.ZY
p=B.T(q).k("I<1,r>")
q=B.z(new B.I(q,new C.dQU(n,u),p),p.k("ai.E"))
t.push(new B.B(A.ku,B.cb(A.bH,q,A.bx,6,6),o))}A.d.v(m,t)}else{t=B.a([A.bz.j(0.22),A.aA.j(0.12)],t)
q=B.m(12)
p=B.G(A.bz.j(0.45),A.r,1)
m.push(new B.B(A.ku,B.p(o,B.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,B.l(o,o,u?A.i6:A.lh,o,o,o,o,o,o,o,o,10,o,o,A.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),A.h,o,o,new B.o(o,o,p,q,o,new B.a8(A.a_,A.a7,A.w,t,o,o),A.n),o,o,o,o,A.bT,o,o,o),o))}m.push(A.P)
t=x.dc
n=B.z(new B.I(D.cOs,new C.dQV(n,u),t),t.k("ai.E"))
m.push(B.A(n,A.m,o,A.e,A.j,0,o,o))
return B.p(o,B.u(m,A.ad,o,A.e,A.j,0,A.p),A.h,o,o,new B.o(o,o,r,v,w,new B.a8(A.ax,A.aE,A.w,s,o,o),A.n),o,o,o,I.acp,I.acE,o,o,o)},
$S:90}
C.dQT.prototype={
$1(d){return D.bGK.aB(0,d)},
$S:65}
C.dQU.prototype={
$1(d){return this.a.cnQ(d,this.b)},
$S:z+48}
C.dQV.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aA6?6:0,m=o?5:0,l=B.m(12)
if(o){w=this.b
v=w?A.aA.j(0.45):A.aA.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=A.x.j(w?0.25:0.05)
u=v
v=w
w=u}t=B.m(12)
p=p.r?q:new C.dQS(p,d)
s=C.hk3(d)
if(o)r=A.c
else r=v?A.al:A.bi
r=B.d(s,q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.hk4(d)
if(o)v=A.al
else v=v?A.c3:A.dx
return B.C(new B.B(new B.L(0,0,n,0),B.aD(!1,A.X,!0,l,B.aH(!1,t,!0,new B.B(G.UY,B.u(B.a([r,B.d(s,q,q,q,q,q,q,B.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),A.h,w,m,q,q,q,q,q,A.ac),q),1)},
$S:z+49}
C.dQS.prototype={
$0(){var w=this.a
return w.n(new C.dQR(w,this.b))},
$S:0}
C.dQR.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dQY.prototype={
$0(){var w=this.a
return w.n(new C.dQX(w))},
$S:0}
C.dQX.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dQF.prototype={
$0(){var w=this.a
return w.n(new C.dQE(w,this.b))},
$S:0}
C.dQE.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.B3
if(v===D.aA4&&w.Q==null)w.Q=A.d.gI(D.ZY).a},
$S:0}
C.dQZ.prototype={
$0(){return this.a.cjB(this.b.a)},
$S:0}
C.dQQ.prototype={
$0(){return this.a.Hq(this.b)},
$S:0}
C.dQC.prototype={
$1(d){return this.a.aU9()},
$S:2}
C.dQD.prototype={
$0(){return this.a.aU9()},
$S:0}
C.ftr.prototype={
$1(d){var w=this
return new C.Xp(w.a,w.b,w.c,new C.ftq(w.d),null)},
$S:z+50}
C.ftq.prototype={
$0(){return J.lC(this.a.b7())},
$S:0}
C.d5t.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.baR()},
$S:28}
C.d5u.prototype={
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
C.d5z.prototype={
$0(){},
$S:0}
C.d5y.prototype={
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
return B.e4(A.B,B.fl(A.B,e,null,w,!0),0.5+v*0.5,null,null)},
$S:44}
C.d5v.prototype={
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
C.d5w.prototype={
$1(d){return D.bGO.aB(0,d)},
$S:65}
C.d5x.prototype={
$0(){var w=this.a
w.a.baR()
w.a.e.$0()},
$S:0}
C.c5C.prototype={
$1(d){var w=!1
if(A.a.i(d.b.toLowerCase())===this.a)if(d.d===A.fc)if(d.x===A.dn){w=d.w
w=A.a.i(w==null?"":w)===this.b}return w},
$S:16}
C.c5P.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e_p.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.e05.prototype={
$1(d){var w=this.a
if(w.c!=null)w.NW()},
$S:9}
C.e06.prototype={
$1(d){var w=$.aS.p2$
if(w===A.qZ||w===A.r_)return
this.a.Dm()},
$S:14}
C.e07.prototype={
$1(d){this.a.cpV()},
$S:14}
C.e_O.prototype={
$0(){this.a.HU(this.b.d,!1)},
$S:0}
C.e_P.prototype={
$0(){},
$S:0}
C.e_Q.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.e_R.prototype={
$0(){},
$S:0}
C.e_S.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e_T.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.e_U.prototype={
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
C.e_J.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=B.bi(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=B.bi(v[1],!0,x.N)
w.Nk()
w.a5H()},
$S:0}
C.e_q.prototype={
$0(){this.b.HU(this.c.d+this.a.a,!1)},
$S:0}
C.e_K.prototype={
$1(d){var w=d.d
return(w===A.fc||w===A.eB)&&d.x===A.dn},
$S:16}
C.e_L.prototype={
$1(d){return d.a},
$S:155}
C.e_M.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e_N.prototype={
$0(){},
$S:0}
C.e_u.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bi(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=B.bi(v[0],!0,x.N)},
$S:0}
C.e_v.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.e_D.prototype={
$0(){},
$S:0}
C.e_A.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.e_B.prototype={
$0(){var w=this.a,v=B.z(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e_C.prototype={
$0(){var w=this.a,v=B.z(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e_E.prototype={
$0(){return this.a.z=!0},
$S:0}
C.e_F.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new B.uB(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.e_G.prototype={
$0(){return this.a.z=!1},
$S:0}
C.e_I.prototype={
$0(){var w=this.a
return w.n(new C.e_H(w))},
$S:0}
C.e_H.prototype={
$0(){return this.a.y=1},
$S:0}
C.e_w.prototype={
$0(){return this.a.y=1},
$S:0}
C.e_x.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.e_Y.prototype={
$1(d){return d.a.length===0},
$S:16}
C.e_Z.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:70}
C.e02.prototype={
$0(){var w=this.a
return w.n(new C.e_W(w))},
$S:0}
C.e_W.prototype={
$0(){return this.a.y=1},
$S:0}
C.e03.prototype={
$0(){var w=this.a
return w.n(new C.e_V(w))},
$S:0}
C.e_V.prototype={
$0(){return this.a.y=2},
$S:0}
C.e04.prototype={
$0(){return B.iC(this.a,null)},
$S:0}
C.e0_.prototype={
$2$cloudRequest(d,e){return this.a.aVd(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1647}
C.e00.prototype={
$0(){return this.a.Dm()},
$S:1}
C.e01.prototype={
$0(){var w=this.a
return w.n(new C.e_X(w))},
$S:0}
C.e_X.prototype={
$0(){var w=this.a
return w.y=A.o.D(w.y-1,0,2)},
$S:0}
C.e_t.prototype={
$0(){B.eN()
var w=this.a
w.n(new C.e_s(w))},
$S:0}
C.e_s.prototype={
$0(){return this.a.y=0},
$S:0}
C.e_r.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=B.bAc(B.p(t,t,A.h,t,t,new B.o(t,t,B.G(A.c.j(0.55),A.r,1.2),t,B.a([new B.a9(1,A.G,A.at.j(0.55),A.J,18)],x.V),D.bF1,A.a6),t,t,t,t,t,t,t,t),A.ev,A.rB,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=B.a([],w)
for(u=0;u<3;++u)v.push(r.bWz(u))
return new B.am(A.V,t,A.a9,A.q,B.a([q,B.A(v,A.m,t,A.e,A.j,0,t,t)],w),t)},
$S:61}
C.e_z.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
B.eN()
w.n(new C.e_y(w,v))},
$S:0}
C.e_y.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d9H.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===A.fc||v===A.eB)return!0
if(d.c!==0)v=A.a.q(w,"clock-in daily earnings")||A.a.q(w,"clock-in earnings")
else v=!1
return v},
$S:16}
C.d9I.prototype={
$1(d){return new B.N(Date.now(),0,!1)},
$S:658}
C.d9J.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new B.N(Date.now(),0,!1)
u=B.du(C.fAe(v.c,u))
w=this.c?new C.d9G(v):null
return v.b2b(this.b,A.pa,D.eu,w,"Today","$"+u,D.eu)},
$S:1649}
C.d9G.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.d9K.prototype={
$2(d,e){var w=this.a
return w.b2b(this.b,A.jf,A.c9,w.w,"Balance","$"+B.du(B.Jh(w.c.a,new C.d9F(w))),A.cK)},
$S:59}
C.d9F.prototype={
$0(){return this.a.c.d},
$S:77}
C.d9A.prototype={
$0(){this.a.a.cGE()
return null},
$S:0}
C.d9B.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&B.c()
v=v.x
v===$&&B.c()
return B.b2(w,w,w,new C.bqV(v,w),A.as)},
$S:75}
C.d9C.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.b7h(v,!0,A.at,D.nO,w)}else{v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.b7g(v,D.nO,w)}return B.b2(w,w,w,v,A.as)},
$S:75}
C.d9D.prototype={
$1(d){return new B.N(Date.now(),0,!1)},
$S:658}
C.d9E.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new B.N(Date.now(),0,!1)
w=r.a
v=w.a.cFs(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:A.k.D(v/u,0,1)}u=w.d
u===$&&B.c()
s=w.e
s===$&&B.c()
return B.c4(new B.h3(B.a([u,s],x.U)),new C.d9z(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1650}
C.d9z.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([],m),k=o.b
if(k)A.d.v(l,B.ih(7,new C.d9y(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&B.c()
v=v.x
v===$&&B.c()
u=o.d
l.push(B.b2(n,n,n,new C.b7f(o.c,v,k,u,D.nO,D.b9P,n),D.eeA))
v=B.G(A.c.j(0.1),A.r,1.2)
if(k)t=A.uv
else t=o.e?A.un:D.bps
t=B.V(t,k?D.nO:A.bd,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=B.d(s,n,n,n,n,n,n,B.l(n,n,A.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+B.du(w.f&&w.d>0?w.d:o.f)}q=k?D.nO:A.c
w=B.d(w,n,n,n,n,n,n,B.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,A.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=B.m(999)
p=u.j(0.16)
u=B.G(u.j(0.5),A.r,1)
l.push(B.p(n,B.u(B.a([t,A.ar,s,A.au,w,A.P,B.p(n,B.d(o.r,n,n,n,n,n,n,B.l(n,n,k?D.nO:A.nT,n,n,n,n,n,n,n,n,9,n,n,A.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.h,n,n,new B.o(p,n,u,q,n,n,A.n),n,n,n,n,A.kv,n,n,n)],m),A.m,n,A.b5,A.j,0,A.p),A.h,n,n,new B.o(A.K,n,v,n,n,n,A.a6),n,176,n,n,n,n,n,176))
return B.as(new B.a3(276,276,new B.am(A.B,n,A.a9,A.h,l,n),n),n,n,n)},
$S:199}
C.d9y.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&B.c()
r=r.x
r===$&&B.c()
w=A.k.J(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=A.o.J(d,3)
t=A.o.J(d,2)
return B.an(s,B.e8(B.d4(B.p(s,s,A.h,s,s,new B.o(s,s,s,B.m(40),s,new B.bS(A.B,0.5,A.w,s,0,B.a([D.nO.j(0.38),A.c.j(0.08),A.K],x.O),s,s),A.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),!0,s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:222}
C.da0.prototype={
$0(){},
$S:0}
C.da1.prototype={
$0(){},
$S:0}
C.da2.prototype={
$1(d){return d.x===A.dn},
$S:16}
C.d9N.prototype={
$0(){return this.a.a.d.d},
$S:77}
C.d9M.prototype={
$0(){var w,v
B.eN()
w=this.a
v=this.b
w.n(new C.d9L(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)B.f7(null,x.H)}},
$S:0}
C.d9L.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.d9Y.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=B.m(12),q=s?w.b.j(0.18):A.c.j(0.04),p=B.G(s?w.b.j(0.7):A.c.j(0.08),A.r,1)
return B.C(new B.B(A.jX,B.aJ(v,B.dg(A.B,B.d("$"+t,v,v,v,v,v,v,B.l(v,v,s?w.b:A.al,v,v,v,v,v,v,v,v,13,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,A.b9,new B.o(q,v,p,r,v,v,A.n),A.hG,v,38,v,v,v,v,v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.da_(u,d),v,v,v,v,v,v,!1,A.af),v),1)},
$S:1652}
C.da_.prototype={
$0(){B.eN()
var w=this.a
w.n(new C.d9Z(w,this.b))},
$S:0}
C.d9Z.prototype={
$0(){var w=""+this.b
this.a.d.saR(0,w)
return w},
$S:0}
C.d9X.prototype={
$4$bold$color(d,e,f,g){var w=null,v=B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,A.a1,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?A.c:g,t=f?15:13
return new B.B(A.JG,B.A(B.a([v,A.b6,B.d(e,w,w,w,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?A.u:A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1653}
C.d9W.prototype={
$1(d){return this.a.n(new C.d9V())},
$S:2}
C.d9V.prototype={
$0(){},
$S:0}
C.d9Q.prototype={
$1(d){return this.a.aRe(d)&&!B.fHx(d)},
$S:16}
C.d9R.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:70}
C.d9S.prototype={
$0(){return this.a.a.d.d},
$S:77}
C.d9T.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return B.b(x.r.b(s)?s:B.dR(s,x.H),$async$$0)
case 2:if(t.c!=null)t.n(new C.d9P())
t.lz("Balance refreshed.")
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.d9P.prototype={
$0(){},
$S:0}
C.d9U.prototype={
$0(){var w=this.a
return w.n(new C.d9O(w))},
$S:0}
C.d9O.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fdG.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:70}
C.f8l.prototype={
$1(d){var w=J.a6(d),v=w.h(d,"toEmail"),u=!1
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.y(v,this.b)){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fnX.prototype={
$1(d){var w=J.a6(d),v=w.h(d,"toEmail")
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.f8k.prototype={
$1(d){var w,v,u
if(!C.hEW(d,this.a))return!1
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
C.eZl.prototype={
$1(d){var w=this.a
if(A.o.J(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:86}
C.fmQ.prototype={
$0(){return $.fFc=null},
$S:11}
C.fmR.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:7}
C.fkL.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:7}
C.fkM.prototype={
$0(){var w,v=this.a
$.fF0.W(0,v)
w=C.tj(this.b,v)
if(w!=null)B.OR(B.a([B.Z(w,x.N,x.z)],x._),v)},
$S:0}
C.foV.prototype={
$1(d){return new C.Yc(this.a,this.b,null)},
$S:z+55}
C.dUU.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.dUX.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.dUY.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.n(new C.dUW(w))},
$S:2}
C.dUW.prototype={
$0(){return this.a.f=""},
$S:0}
C.dUZ.prototype={
$1(d){return this.a.aUo()},
$S:2}
C.dV_.prototype={
$0(){var w=this.a
return w.n(new C.dUV(w,this.b))},
$S:0}
C.dUV.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f7x.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+A.a.aU(d,1)},
$S:13}
C.f7w.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+A.a.aU(d,1)},
$S:13}
C.fn6.prototype={
$1(d){var w,v=x.f
if(v.b(d))return B.Z(d,x.N,x.z)
try{v=B.Z(v.a(d.ad()),x.N,x.z)
return v}catch(w){return B.R(x.N,x.z)}},
$S:12}
C.fn7.prototype={
$1(d){return J.cs(d)},
$S:4}
C.fh4.prototype={
$1(d){return d.a!=="send_email"},
$S:288}
C.fmy.prototype={
$1(d){var w=null,v=A.x.j(0.35),u=B.m(10),t=B.G(A.be,A.r,1)
return B.p(A.B,B.d(d,w,w,w,w,w,w,A.jr,w,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,86,w,A.eW,w,w,w,72)},
$S:660}
C.c7m.prototype={
$1(d){return J.k(d)},
$S:17}
C.c7n.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b4(d,new C.c7l(),x.S)
w=B.z(w,w.$ti.k("ai.E"))
return w}return B.bT(7,0,!1,x.S)},
$S:661}
C.c7l.prototype={
$1(d){var w
if(B.iv(d))w=d
else{w=B.c3(J.k(d),null)
if(w==null)w=0}return w},
$S:399}
C.c7o.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b4(d,new C.c7k(),x.S)
w=B.z(w,w.$ti.k("ai.E"))
return w}return B.bT(8,0,!1,x.S)},
$S:661}
C.c7k.prototype={
$1(d){var w
if(B.iv(d))w=d
else{w=B.c3(J.k(d),null)
if(w==null)w=0}return w},
$S:399}
C.c7q.prototype={
$1(d){return B.bi(d,!0,x.S)},
$S:662}
C.c7r.prototype={
$1(d){return B.bi(d,!0,x.S)},
$S:662}
C.c7j.prototype={
$1(d){var w=this.a
if(A.o.J(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:86}
C.c7p.prototype={
$2(d,e){return d+e},
$S:74}
C.c7i.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.q(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:74}
C.f8Q.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+56}
C.f8K.prototype={
$0(){return this.a.$1(D.pl)},
$S:0}
C.f8L.prototype={
$0(){return this.a.$1(D.pl)},
$S:0}
C.f8M.prototype={
$0(){return this.a.$1(D.pl)},
$S:0}
C.f8N.prototype={
$0(){return this.a.$1(D.pl)},
$S:0}
C.f8O.prototype={
$0(){return this.a.$1(D.pl)},
$S:0}
C.f8P.prototype={
$0(){return this.a.$1(D.pl)},
$S:0}
C.eWJ.prototype={
$2(d,e){var w,v,u=this,t=null,s=A.o.ak(e,8),r=A.o.J(e,8),q=A.o.J(s+r,2),p=u.a,o=J.q(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.TJ:D.b_S
if(o===0)w=t
else{w=x.O
w=o===1?B.a([A.c,A.aJ],w):B.a([A.bj,A.x],w)
v=n?A.aM:A.dt
w=B.p(t,t,A.h,t,t,new B.o(t,t,B.G(v,A.r,n?3:1),t,B.a([new B.a9(0,A.G,A.x.j(0.35),A.dG,4)],x.V),new B.bS(A.B,0.5,A.w,t,0,w,t,t),A.a6),t,28,t,t,t,t,t,28)}return B.aJ(t,B.p(t,B.as(w,t,t,t),A.h,q,t,t,t,t,t,t,t,t,t,t),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eWI(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,A.af)},
$S:76}
C.eWI.prototype={
$0(){var w=this,v=w.a,u=v.cL4(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.pl:D.FZ
w.f.$1(v)}},
$S:0}
C.f7G.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new B.a3(u,u,B.ig(!0,v,v,A.z,Q.aHS,new C.f7F(w.a,w.b,w.c,w.d,u),9,v,A.dJ,A.ah,!1),v)},
$S:164}
C.f7F.prototype={
$2(d,e){var w=this,v=null,u=B.m(12),t=B.m(12),s=w.a,r=s.at[e],q=r==="X"?A.b3:A.aH
return B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.as(B.d(r,v,v,v,v,v,v,B.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.f7E(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),A.h,A.fn,0,v,v,v,v,v,A.ac)},
$S:73}
C.f7E.prototype={
$0(){var w=this,v=w.a.cL5(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.eWa.prototype={
$1(d){return new B.B(A.jX,C.fkC(d,!1),null)},
$S:301}
C.eWb.prototype={
$1(d){return C.fkC(d,!1)},
$S:1657}
C.eWc.prototype={
$0(){var w=this,v=w.a
v.cvI(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.eWd.prototype={
$0(){var w=this
w.a.cvJ(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.f4V.prototype={
$1(d){var w=this,v=null,u=d*6
return B.mG(v,A.bj,B.d(""+u,v,v,v,v,v,v,A.cc,v,v,v),A.di,new C.f4U(w.a,w.b,u,w.c,w.d),v,v,new B.ax(A.c.j(0.2),1,A.r,-1),v)},
$S:1658}
C.f4U.prototype={
$0(){var w=this,v=w.a,u=w.b.aG(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.f6P.prototype={
$1(d){return D.cRT[d]},
$S:83}
C.f6Q.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=B.a([s.aG(6),s.aG(6),s.aG(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.f3F.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.f3G.prototype={
$0(){var w=this,v=w.a
if(w.b.ag()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.eXa.prototype={
$0(){var w=this,v=w.a.cB9(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.eX9.prototype={
$1(d){var w,v=null,u=J.q(this.a.fr[5-d],this.b)
if(u===0)w=A.lP
else w=u===1?A.dy:A.qx
return new B.fN(1,B.p(v,v,A.h,v,v,new B.o(w,v,B.G(A.bG,A.r,1),v,v,v,A.a6),v,v,v,A.mA,v,v,v,v),v)},
$S:1659}
C.f3S.prototype={
$1(d){var w=this
if(w.a.b5y(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.f3T.prototype={
$0(){var w=this
if(w.a.b5y(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.eWD.prototype={
$0(){var w=this
if(w.a.ag()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fcG.prototype={
$1(d){var w=J.q(d,"email")
return A.a.q(A.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fcH.prototype={
$1(d){var w,v=J.a6(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=A.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+A.a.i(J.k(v==null?"":v))+">"},
$S:50}
C.epa.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aH7.prototype
w.bnT=w.Z
w.bnS=w.p
w=C.aH8.prototype
w.bnV=w.Z
w.bnU=w.p
w=C.aH9.prototype
w.bnX=w.Z
w.bnW=w.p
w=C.aI4.prototype
w.boU=w.Z
w.boT=w.p
w=C.aHF.prototype
w.bot=w.p
w=C.aId.prototype
w.bp2=w.p
w=C.aHa.prototype
w.bnY=w.p
w=C.aIl.prototype
w.bpb=w.p
w=C.aHf.prototype
w.bo2=w.p
w=C.aHv.prototype
w.boj=w.p
w=C.aJ0.prototype
w.bpR=w.p})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.ax5.prototype,"gbJ6","bJ7",20)
v(q,"gaNO","aNP",1)
v(C.ax4.prototype,"gcmT","a_F",1)
v(q=C.ax6.prototype,"gbOq","bOr",1)
v(q,"gbyU","byV",1)
v(q=C.aul.prototype,"gcge","cgf",1)
v(q,"gc58","Om",0)
v(q,"gcqH","cqI",1)
v(q,"gcj8","ms",0)
w(q,"gc9l","c9m",24)
w(q,"gcp7","Q2",32)
v(q=C.az9.prototype,"gbHh","Vo",0)
v(q,"gbX8","WO",0)
v(q,"gbX5","WN",0)
v(q,"gbX6","aag",0)
v(q,"gbX7","Nn",0)
v(C.awv.prototype,"gbX9","bXa",1)
u(C,"hM2","hij",57)
t(C,"fHE",0,null,["$1","$0"],["h0Z",function(){return C.h0Z(null)}],3,0)
t(C,"byH",0,null,["$1","$0"],["h0Y",function(){return C.h0Y(null)}],3,0)
v(C.L9.prototype,"gD6","c2o",1)
v(C.azV.prototype,"gcgv","zI",0)
v(q=C.aAb.prototype,"gc5r","Oo",0)
v(q,"gca2","YW",0)
v(q,"gbZR","bZS",1)
v(q=C.aAn.prototype,"gbZW","ab4",0)
v(q,"gbsO","a5x",0)
v(q,"gcgI","ZS",0)
s(q,"gc2T","c2U",34)
v(C.aCf.prototype,"gbtd","a5z",1)
v(q=C.aCe.prototype,"gbZV","ab3",0)
v(q,"gc4q","ac3",0)
v(q=C.aAp.prototype,"gbS5","a96",0)
v(q,"gbS7","W0",0)
v(q,"gbS6","a97",0)
v(q=C.aAo.prototype,"gbvw","bvx",1)
v(q,"gbvy","bvz",1)
v(C.aAq.prototype,"gbB5","bB6",1)
v(C.axq.prototype,"gbZY","bZZ",1)
v(q=C.aAM.prototype,"gaUi","c_e",1)
r(q,"gaVb",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["abI","atQ","aVd","aVc"],51,0,0)
r(q,"gc26",0,4,null,["$4"],["c27"],52,0,0)
v(q,"gc4a","Y9",0)
v(q,"gc5_","aca",0)
v(q,"gc4W","ac8",0)
v(q,"gbUV","a9S",0)
w(C.ay9.prototype,"gbTK","bTL",53)
w(q=C.ayb.prototype,"gcnY","cnZ",54)
v(q,"gcmK","cmL",1)
v(q,"gcu7","cu8",1)
v(C.aAz.prototype,"gc_z","aUo",1)
v(C.aBj.prototype,"gaUN","atE",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.jk,[C.cl9,C.cl6,C.cl7,C.cl8,C.cl5,C.eKJ,C.eKH,C.eKL,C.eKI,C.f2d,C.d1X,C.d27,C.d2f,C.d2g,C.d2i,C.d2a,C.d28,C.d29,C.d2b,C.d2c,C.d22,C.d23,C.d21,C.d25,C.d26,C.d2_,C.d1Z,C.d2k,C.d2n,C.dF8,C.dF7,C.dF9,C.dF6,C.dF5,C.d1R,C.d1U,C.d1V,C.d1T,C.d1S,C.d3J,C.d3K,C.d3L,C.d2Z,C.d3_,C.d3t,C.d3e,C.d3f,C.d3g,C.d3h,C.d3i,C.d2r,C.d2Y,C.d3u,C.d3D,C.d3r,C.d3q,C.d2W,C.d2X,C.d3z,C.d3A,C.d2t,C.d2u,C.d37,C.d38,C.d39,C.d36,C.d3j,C.d3k,C.d3l,C.d3m,C.d3n,C.d3o,C.d3x,C.d3a,C.d3b,C.d3c,C.d3d,C.d3B,C.d3C,C.d2v,C.d2w,C.d2x,C.d2y,C.d3v,C.d3w,C.d35,C.d3p,C.d33,C.d3E,C.d3F,C.d3G,C.d30,C.d2K,C.d2J,C.d2I,C.d2O,C.d2H,C.d2F,C.d2A,C.d2D,C.d2z,C.d2T,C.d2U,C.d2B,C.d7_,C.cvn,C.cvd,C.cve,C.cvx,C.cvu,C.cvv,C.cvw,C.cvp,C.cvo,C.cvf,C.cvq,C.cvQ,C.cvM,C.cvL,C.cvl,C.cvm,C.cvi,C.cvt,C.cvB,C.cvC,C.cvD,C.cvE,C.cvF,C.cvG,C.cvH,C.cw1,C.cvV,C.cvS,C.cvX,C.cvU,C.cvR,C.cvg,C.cvO,C.dnq,C.dnr,C.dnh,C.dnf,C.dnp,C.dne,C.dnd,C.dng,C.dnl,C.dnm,C.dnj,C.dnk,C.dns,C.dnt,C.dnu,C.dnv,C.eEF,C.eEG,C.cYf,C.fdA,C.dtR,C.dtJ,C.dtL,C.dtP,C.dtK,C.dtM,C.dtN,C.fkA,C.fkz,C.dn2,C.dn1,C.dn3,C.dn0,C.dLU,C.dLV,C.dM1,C.fsF,C.fsG,C.bUE,C.dFe,C.dFf,C.dFg,C.dFh,C.dFi,C.dFj,C.dFd,C.dFk,C.dFc,C.dFn,C.dFm,C.dFl,C.dMl,C.dMm,C.dMj,C.dMi,C.dMk,C.dMg,C.dPV,C.dPW,C.dPE,C.dPG,C.dPS,C.dPT,C.dPN,C.dPL,C.dPR,C.dPO,C.dPI,C.dPH,C.dPX,C.cEr,C.cEp,C.cEq,C.cEo,C.cEu,C.cEv,C.ezK,C.ezP,C.ezM,C.ezO,C.ezN,C.ezG,C.ezF,C.ezI,C.ezH,C.dQh,C.dQm,C.dQi,C.dQj,C.dQl,C.dQr,C.dQs,C.dQt,C.dQu,C.dQv,C.dQw,C.dQx,C.dQy,C.dQq,C.dQz,C.dQp,C.dQo,C.dQn,C.dQa,C.dQb,C.dQ2,C.dQ3,C.dQ4,C.dQ6,C.cy8,C.d7U,C.d7W,C.d7V,C.dQP,C.dQJ,C.dQK,C.dQM,C.dQN,C.dQO,C.dQS,C.dQR,C.dQY,C.dQX,C.dQF,C.dQE,C.dQZ,C.dQQ,C.dQD,C.ftq,C.d5z,C.d5x,C.e_p,C.e_O,C.e_P,C.e_Q,C.e_R,C.e_T,C.e_U,C.e_J,C.e_q,C.e_N,C.e_u,C.e_v,C.e_D,C.e_A,C.e_B,C.e_C,C.e_E,C.e_F,C.e_G,C.e_I,C.e_H,C.e_w,C.e_x,C.e02,C.e_W,C.e03,C.e_V,C.e04,C.e00,C.e01,C.e_X,C.e_t,C.e_s,C.e_z,C.e_y,C.d9G,C.d9F,C.d9A,C.da0,C.da1,C.d9N,C.d9M,C.d9L,C.da_,C.d9Z,C.d9V,C.d9S,C.d9T,C.d9P,C.d9U,C.d9O,C.fmQ,C.fkM,C.dUU,C.dUX,C.dUW,C.dV_,C.dUV,C.f8K,C.f8L,C.f8M,C.f8N,C.f8O,C.f8P,C.eWI,C.f7E,C.eWc,C.eWd,C.f4U,C.f6Q,C.f3G,C.eXa,C.f3T,C.eWD,C.epa])
u(B.i1,[C.cla,C.eKK,C.fhm,C.fhg,C.f2a,C.f29,C.f2c,C.d2p,C.d2q,C.d2e,C.d2d,C.d2h,C.d20,C.d24,C.d2j,C.dFb,C.d1W,C.d3M,C.d3N,C.d3O,C.d3P,C.d3Q,C.d3s,C.d3y,C.d2s,C.d3I,C.d3H,C.d2L,C.d2M,C.d2N,C.d2P,C.d2R,C.d70,C.cw2,C.cvs,C.cvr,C.cvK,C.cvN,C.cvJ,C.cvj,C.cvA,C.cvy,C.cvP,C.cvz,C.cvY,C.cvW,C.cw0,C.bTm,C.bTl,C.bTo,C.bTn,C.dno,C.dnn,C.dni,C.dnw,C.dnx,C.f5s,C.f6F,C.cYg,C.cYe,C.bU7,C.fdz,C.dtS,C.dtQ,C.f7q,C.fky,C.c2t,C.c2s,C.c2V,C.dLS,C.dLT,C.ffW,C.ffJ,C.ffI,C.f3J,C.c37,C.c38,C.c39,C.c36,C.c35,C.f1V,C.fsB,C.fsC,C.fsD,C.fsE,C.fsA,C.dLZ,C.dM_,C.dLY,C.fsH,C.d3R,C.c4I,C.f0U,C.dFo,C.dMh,C.c3z,C.c3w,C.c3y,C.c3B,C.bX1,C.bX_,C.bX4,C.c3I,C.c3H,C.c3G,C.c3F,C.c3K,C.c3M,C.dQ0,C.dPF,C.dPD,C.dPU,C.dPM,C.dPQ,C.dPP,C.dPK,C.dPZ,C.dPY,C.cEs,C.cEt,C.ezL,C.ezE,C.ezJ,C.c3C,C.fhF,C.dQB,C.dQk,C.dQd,C.dQe,C.dQf,C.dQg,C.dQA,C.c3E,C.cy9,C.cya,C.f0E,C.dQG,C.dQI,C.dQL,C.dQT,C.dQU,C.dQV,C.dQC,C.ftr,C.d5t,C.d5w,C.c5C,C.c5P,C.e05,C.e06,C.e07,C.e_S,C.e_K,C.e_L,C.e_M,C.e_Y,C.e0_,C.d9H,C.d9I,C.d9D,C.d9y,C.da2,C.d9Y,C.d9X,C.d9W,C.d9Q,C.f8l,C.fnX,C.f8k,C.eZl,C.fmR,C.fkL,C.foV,C.dUY,C.dUZ,C.f7x,C.f7w,C.fn6,C.fn7,C.fh4,C.fmy,C.c7m,C.c7n,C.c7l,C.c7o,C.c7k,C.c7q,C.c7r,C.c7j,C.f8Q,C.eWa,C.eWb,C.f4V,C.f6P,C.f3F,C.eX9,C.f3S,C.fcG,C.fcH])
t(C.bn6,B.iG)
u(B.ae,[C.DN,C.aim,C.azU,C.ail,C.ain,C.ajf,C.afB,C.akN,C.XT,C.XU,C.X0,C.alh,C.akM,C.LF,C.ax7,C.ame,C.amR,C.Td,C.Nx,C.YF,C.YE,C.Te,C.an9,C.axY,C.anc,C.Xp,C.anJ,C.ay8,C.aya,C.Yc,C.aoW])
u(B.ag,[C.aEK,C.aH8,C.aI4,C.aH7,C.aH9,C.bcy,C.aul,C.az9,C.beX,C.beY,C.awv,C.bf3,C.aHF,C.aId,C.aHa,C.azV,C.aAb,C.aAn,C.b6N,C.aCf,C.aCe,C.aAp,C.aAo,C.bcM,C.aIl,C.aHf,C.bsO,C.aHv,C.ayb,C.aAz,C.aJ0])
u(B.kw,[C.eKM,C.f2b,C.d1Y,C.d2o,C.d2m,C.d2l,C.dFa,C.d34,C.d32,C.d31,C.d2G,C.d2Q,C.d2E,C.d2S,C.d2C,C.d2V,C.cvI,C.cvk,C.cvT,C.cw_,C.cvZ,C.cvh,C.cYd,C.dtO,C.f7r,C.f7s,C.dLW,C.fhh,C.fsz,C.dM0,C.dM3,C.dM2,C.d3S,C.c4J,C.c3A,C.c3x,C.bX2,C.bX0,C.c3L,C.dQ1,C.dPJ,C.dQ_,C.ezR,C.ezQ,C.dQc,C.dQ5,C.dQ7,C.dQ9,C.dQ8,C.dQH,C.dQW,C.d5u,C.d5y,C.d5v,C.e_Z,C.e_r,C.d9J,C.d9K,C.d9B,C.d9C,C.d9E,C.d9z,C.d9R,C.fdG,C.c7p,C.c7i,C.eWJ,C.f7G,C.f7F])
t(C.asA,C.DN)
u(B.aC,[C.o2,C.abd,C.L9,C.GU,C.qJ,C.qK,C.li,C.i7,C.hU,C.b4Z,C.cVU,C.d7T,C.qP,C.Tf,C.LS,C.pl,C.aWp,C.oz,C.ao2])
t(C.ax5,C.aH8)
t(C.bfm,C.aI4)
t(C.ax4,C.aH7)
t(C.ax6,C.aH9)
u(B.mb,[C.TY,C.axZ,C.anV,C.GZ,C.Db])
u(B.ar,[C.Ze,C.bnC,C.abY,C.O5,C.Lx,C.amM,C.aaO,C.aaN,C.aXe,C.axX,C.a9m,C.aWM,C.a9e,C.ay9])
t(C.beV,C.aHF)
t(C.bfy,C.aId)
t(C.bbh,C.aHa)
t(C.aAq,C.aIl)
t(C.axq,C.aHf)
t(C.aAM,C.bsO)
t(C.bdv,C.aHv)
u(B.n4,[C.b7h,C.b7g,C.b7f,C.b6I,C.bqV,C.bm_])
t(C.aBj,C.aJ0)
w(C.aH7,C.L9)
w(C.aH8,C.L9)
w(C.aH9,C.L9)
w(C.aI4,C.L9)
w(C.aHF,B.eJ)
w(C.aId,B.ca)
w(C.aHa,B.ca)
w(C.aIl,B.ca)
w(C.aHf,B.eJ)
w(C.aHv,B.eJ)
v(C.bsO,B.ev)
w(C.aJ0,B.ca)})()
B.kd(b.typeUniverse,JSON.parse('{"bn6":{"iG":[]},"DN":{"ae":[],"r":[]},"aEK":{"ag":["DN<1,2>"]},"asA":{"DN":["1","ht<1>"],"ae":[],"r":[],"DN.T":"1","DN.S":"ht<1>"},"aim":{"ae":[],"r":[]},"azU":{"ae":[],"r":[]},"ail":{"ae":[],"r":[]},"ain":{"ae":[],"r":[]},"ajf":{"ae":[],"r":[]},"afB":{"ae":[],"r":[]},"ax5":{"ag":["aim"]},"bfm":{"ag":["azU"]},"ax4":{"ag":["ail"]},"ax6":{"ag":["ain"]},"bcy":{"ag":["ajf"]},"aul":{"ag":["afB"]},"akN":{"ae":[],"r":[]},"XT":{"ae":[],"r":[]},"XU":{"ae":[],"r":[]},"abY":{"ar":[],"r":[]},"X0":{"ae":[],"r":[]},"az9":{"ag":["akN"]},"Ze":{"ar":[],"r":[]},"bnC":{"ar":[],"r":[]},"beX":{"ag":["XT"]},"beY":{"ag":["XU"]},"O5":{"ar":[],"r":[]},"awv":{"ag":["X0"]},"alh":{"ae":[],"r":[]},"bf3":{"ag":["alh"]},"akM":{"ae":[],"r":[]},"beV":{"ag":["akM"]},"Lx":{"ar":[],"r":[]},"amM":{"ar":[],"r":[]},"LF":{"ae":[],"r":[]},"bfy":{"ag":["LF"]},"aaO":{"ar":[],"r":[]},"aaN":{"ar":[],"r":[]},"ax7":{"ae":[],"r":[]},"bbh":{"ag":["ax7"]},"aXe":{"ar":[],"r":[]},"ame":{"ae":[],"r":[]},"azV":{"ag":["ame"]},"amR":{"ae":[],"r":[]},"aAb":{"ag":["amR"]},"Td":{"ae":[],"r":[]},"Nx":{"ae":[],"r":[]},"YF":{"ae":[],"r":[]},"YE":{"ae":[],"r":[]},"aAn":{"ag":["Td"]},"b6N":{"ag":["Nx"]},"aCf":{"ag":["YF"]},"aCe":{"ag":["YE"]},"Te":{"ae":[],"r":[]},"aAp":{"ag":["Te"]},"an9":{"ae":[],"r":[]},"a9m":{"ar":[],"r":[]},"a9e":{"ar":[],"r":[]},"axY":{"ae":[],"r":[]},"aAo":{"ag":["an9"]},"axX":{"ar":[],"r":[]},"aWM":{"ar":[],"r":[]},"bcM":{"ag":["axY"]},"anc":{"ae":[],"r":[]},"aAq":{"ag":["anc"]},"Xp":{"ae":[],"r":[]},"axq":{"ag":["Xp"]},"anJ":{"ae":[],"r":[]},"ay8":{"ae":[],"r":[]},"aya":{"ae":[],"r":[]},"aAM":{"ag":["anJ"],"ev":[]},"ay9":{"ar":[],"r":[]},"bdv":{"ag":["ay8"]},"b7h":{"az":[]},"b7g":{"az":[]},"b7f":{"az":[]},"ayb":{"ag":["aya"]},"b6I":{"az":[]},"bqV":{"az":[]},"Yc":{"ae":[],"r":[]},"aAz":{"ag":["Yc"]},"bm_":{"az":[]},"aoW":{"ae":[],"r":[]},"aBj":{"ag":["aoW"]}}'))
B.Og(b.typeUniverse,JSON.parse('{"L9":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=B.aA
return{dw:w("nE<x?>"),gS:w("nF"),o:w("cW"),g5:w("w8"),M:w("fe<n>"),k:w("N"),gv:w("kU<ak<iV>>"),gh:w("kU<n>"),gH:w("kU<H>"),r:w("au<~>"),dk:w("a_"),fw:w("M<nF>"),E:w("M<cW>"),V:w("M<a9>"),O:w("M<x>"),A:w("M<a_>"),R:w("M<mP>"),B:w("M<ak<H>>"),m:w("M<a0<n,n>>"),_:w("M<a0<n,@>>"),b:w("M<qJ>"),x:w("M<qK>"),gi:w("M<iV>"),a:w("M<li>"),Y:w("M<hU>"),v:w("M<i7>"),dA:w("M<GU>"),F:w("M<qP>"),Z:w("M<k9>"),g:w("M<hx>"),gK:w("M<+at,details,id(N,n,n)>"),C:w("M<cI>"),s:w("M<n>"),G:w("M<iG>"),eO:w("M<ez>"),d9:w("M<eK>"),p:w("M<r>"),n:w("M<P>"),t:w("M<H>"),U:w("M<az?>"),d4:w("M<n?>"),ck:w("ak<qJ>"),e:w("ak<qK>"),ac:w("ak<iV>"),dZ:w("ak<li>"),I:w("ak<hU>"),j:w("ak<@>"),L:w("ak<H>"),eq:w("a0<n,n>"),P:w("a0<n,@>"),f:w("a0<@,@>"),cl:w("cQ<n,B>"),aS:w("I<a_,rz>"),dc:w("I<GZ,bF>"),dv:w("I<n,n>"),bL:w("I<P,bF>"),a3:w("I<H,bF>"),gN:w("I<H,p9>"),w:w("iA"),b1:w("qJ"),Q:w("qK"),bP:w("li"),i:w("hU"),u:w("i7"),gp:w("Tf"),J:w("LS"),D:w("pl"),an:w("k9"),c:w("cp"),K:w("aC"),d:w("jb<n>"),di:w("+outcome,snapshot(TY,a3F?)"),ee:w("+after,before(P,P)"),et:w("+categories,error,message,replaceId(ak<hU>,n?,n?,n?)"),cz:w("DB"),bJ:w("dv<n>"),N:w("n"),e7:w("bm<P>"),W:w("cv<n>"),am:w("k1<H>"),cc:w("a4<n>"),aM:w("e2<cW>"),bG:w("e2<P>"),l:w("r"),gm:w("o2"),ec:w("abd"),q:w("mz"),y:w("Q"),gR:w("P"),z:w("@"),S:w("H"),eG:w("cW?"),cJ:w("N?"),gw:w("ak<a0<n,@>>?"),bM:w("ak<@>?"),h:w("a0<n,@>?"),X:w("aC?"),gE:w("+code,qrPayload(n,n)?"),bY:w("+isLive,ownerEmail,snapshotJson(Q,n,n)?"),T:w("n?"),cD:w("P?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aOY=new B.bv(A.bC,A.jL,A.bC,A.jL)
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
D.cBi=w([D.aTN],x.V)
D.aRj=new B.o(A.c,null,null,null,D.cBi,null,A.a6)
D.cvU=w([D.eu,A.aW],x.O)
D.bHK=new B.a8(A.a_,A.a7,A.w,D.cvU,null,null)
D.aRy=new B.o(null,null,null,null,null,D.bHK,A.a6)
D.aRD=new B.o(A.bt,null,null,null,null,null,A.a6)
D.b1M=new B.x(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,A.t)
D.cPc=w([P.a8r,D.b1M],x.O)
D.bGU=new B.a8(A.b4,A.bb,A.w,D.cPc,null,null)
D.aRT=new B.o(null,null,null,A.mh,null,D.bGU,A.n)
D.b7x=new B.x(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,A.t)
D.cYW=w([D.b7x,M.aa7],x.O)
D.bG9=new B.a8(A.b4,A.bb,A.w,D.cYW,null,null)
D.aSg=new B.o(null,null,null,A.pM,null,D.bG9,A.n)
D.cLv=w([A.aA,A.bz],x.O)
D.bGC=new B.a8(A.a_,A.a7,A.w,D.cLv,null,null)
D.aSl=new B.o(null,null,null,null,null,D.bGC,A.a6)
D.es9=new B.E(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKl=new B.w("\ud83c\udf89",null,D.es9,null,null,null,null,null,null,null,null,null)
D.aXq=new B.cw(A.B,null,null,D.eKl,null)
D.aYI=new B.x(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,A.t)
D.a7W=new B.x(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,A.t)
D.b_S=new B.x(1,0.8431372549019608,0.8,0.7843137254901961,A.t)
D.b_W=new B.x(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,A.t)
D.nO=new B.x(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,A.t)
D.rd=new B.x(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,A.t)
D.a8K=new B.x(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,A.t)
D.b1v=new B.x(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,A.t)
D.Tn=new B.x(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,A.t)
D.vW=new B.x(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,A.t)
D.b2E=new B.x(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,A.t)
D.TJ=new B.x(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,A.t)
D.a9S=new B.x(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,A.t)
D.b5Y=new B.x(1,0.9529411764705882,0.9411764705882353,1,A.t)
D.b63=new B.x(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,A.t)
D.aab=new B.x(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,A.t)
D.aaq=new B.x(1,0,0.8392156862745098,0.30980392156862746,A.t)
D.aar=new B.x(1,1,0.9529411764705882,0.6901960784313725,A.t)
D.b78=new B.x(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,A.t)
D.b7c=new B.x(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,A.t)
D.b7Y=new B.x(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,A.t)
D.U5=new B.x(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,A.t)
D.b8O=new B.x(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,A.t)
D.b9f=new B.x(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,A.t)
D.Ub=new B.x(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,A.t)
D.b9P=new B.x(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,A.t)
D.bBA=new B.ac(A.o8,20,A.c,null,null,null)
D.eDF=new B.w("PLAY",null,A.aKs,null,null,null,null,null,null,null,null,null)
D.bZm=w([D.bBA,A.bw,D.eDF],x.p)
D.baG=new B.fd(A.ah,A.e,A.R,A.m,null,A.p,null,0,D.bZm,null)
D.abn=new B.a1F(2,"active")
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
D.cRe=w([D.eV4,D.eKX],x.p)
D.bau=new B.fd(A.ah,A.e,A.j,A.F,null,A.p,null,0,D.cRe,null)
D.blw=new B.bF(1,A.bn,D.bau,null)
D.bnf=new B.a_(58607,"MaterialIcons",!1)
D.WX=new B.a_(62178,"MaterialIcons",!1)
D.bo3=new B.a_(62410,"MaterialIcons",!1)
D.bpe=new B.a_(63258,"MaterialIcons",!1)
D.bpk=new B.a_(63304,"MaterialIcons",!1)
D.bpl=new B.a_(63306,"MaterialIcons",!1)
D.bps=new B.a_(63330,"MaterialIcons",!1)
D.ahq=new B.a_(984777,"MaterialIcons",!1)
D.brZ=new B.ac(A.E2,13,A.al,null,null,null)
D.bs6=new B.ac(A.jE,13,A.oQ,null,null,null)
D.ahz=new B.ac(A.kZ,null,A.c,null,null,null)
D.buc=new B.ac(A.E8,19,A.c,null,null,null)
D.bon=new B.a_(62804,"MaterialIcons",!1)
D.bul=new B.ac(D.bon,24,A.aM,null,null,null)
D.buN=new B.ac(A.A0,28,A.bh,null,null,null)
D.bvg=new B.ac(A.ah4,42,A.c,null,null,null)
D.bvp=new B.ac(A.XT,30,A.c,null,null,null)
D.bw_=new B.ac(A.fx,null,A.c,null,null,null)
D.bwk=new B.ac(A.jE,16,A.c,null,null,null)
D.bwV=new B.ac(A.qj,13,A.c,null,null,null)
D.bx3=new B.ac(A.kZ,18,A.c,null,null,null)
D.bxA=new B.ac(A.um,null,A.dy,null,null,null)
D.byc=new B.ac(A.o8,28,A.c,null,null,null)
D.byr=new B.ac(A.m0,22,null,null,null,null)
D.byO=new B.ac(A.qh,null,null,null,null,null)
D.bz0=new B.ac(A.cu,null,A.aQ,null,null,null)
D.bz7=new B.ac(A.WE,14,A.c,null,null,null)
D.bzC=new B.ac(A.L5,36,A.aK,null,null,null)
D.bzJ=new B.ac(A.o9,16,A.c,null,null,null)
D.bzY=new B.ac(A.ej,null,null,null,null,null)
D.b25=new B.x(1,0.23137254901960785,0.16470588235294117,0,A.t)
D.bAx=new B.ac(A.dO,9,D.b25,null,null,null)
D.bqj=new B.a_(983146,"MaterialIcons",!1)
D.bAN=new B.ac(D.bqj,null,A.aM,null,null,null)
D.bBh=new B.ac(A.up,28,D.eu,null,null,null)
D.bBm=new B.ac(A.rP,null,A.f3,null,null,null)
D.bBr=new B.ac(A.hI,20,D.eu,null,null,null)
D.bqG=new B.a_(983377,"MaterialIcons",!1)
D.bBC=new B.ac(D.bqG,64,A.c,null,null,null)
D.bC4=new B.ac(A.fR,24,A.c,null,null,null)
D.bCZ=new B.e0(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bD8=new B.e0(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bDm=new B.e0(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bDn=new B.e0(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.b0z=new B.x(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,A.t)
D.b2X=new B.x(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,A.t)
D.b2F=new B.x(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,A.t)
D.cPs=w([D.b0z,D.b2X,D.b2F],x.O)
D.bEf=new B.a8(A.ax,A.aE,A.w,D.cPs,null,null)
D.cTF=w([A.bq,A.aW],x.O)
D.bEx=new B.a8(A.ax,A.aE,A.w,D.cTF,null,null)
D.b1H=new B.x(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,A.t)
D.b6r=new B.x(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,A.t)
D.cBI=w([D.b1H,D.b6r],x.O)
D.bEC=new B.a8(A.ax,A.aE,A.w,D.cBI,null,null)
D.cQP=w([A.bj,A.M,A.eM],x.O)
D.bEJ=new B.a8(A.ax,A.aE,A.w,D.cQP,null,null)
D.bEL=new B.a8(A.a_,A.a7,A.w,F.aoH,null,null)
D.cBb=w([A.f3,A.c9],x.O)
D.ajg=new B.a8(A.a_,A.a7,A.w,D.cBb,null,null)
D.cBu=w([A.f3,A.bz],x.O)
D.ajh=new B.a8(A.a_,A.a7,A.w,D.cBu,null,null)
D.asd=w([D.nO,A.at,A.bR],x.O)
D.bF1=new B.a8(A.ax,A.aE,A.w,D.asd,null,null)
D.aNO=new B.d3(-0.8,-1)
D.aNQ=new B.d3(1.2,1)
D.cyz=w([A.c,A.eq,A.j9,A.c,A.hq,A.b3,A.ml],x.O)
D.cQk=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.bF7=new B.a8(D.aNO,D.aNQ,A.w,D.cyz,D.cQk,null)
D.bFk=new B.a8(A.a_,A.a7,A.w,F.apu,null,null)
D.b6n=new B.x(1,0,0.7607843137254902,0.26666666666666666,A.t)
D.b4x=new B.x(1,0,0.6392156862745098,0.22745098039215686,A.t)
D.cPr=w([D.b6n,D.b4x],x.O)
D.bFw=new B.a8(A.a_,A.a7,A.w,D.cPr,null,null)
D.bFz=new B.a8(A.ax,A.aE,A.w,A.NA,null,null)
D.cKE=w([E.U8,A.vZ],x.O)
D.bFB=new B.a8(A.a_,A.a7,A.w,D.cKE,null,null)
D.cOo=w([A.fP,A.ff],x.O)
D.ajm=new B.a8(A.a_,A.a7,A.w,D.cOo,null,null)
D.cTg=w([A.bt,A.bQ],x.O)
D.ajn=new B.a8(A.a_,A.a7,A.w,D.cTg,null,null)
D.cjS=w([A.dH,A.fp],x.O)
D.bGb=new B.a8(A.ax,A.aE,A.w,D.cjS,null,null)
D.cxG=w([A.c,A.bc],x.O)
D.bGk=new B.a8(A.a_,A.a7,A.w,D.cxG,null,null)
D.a9v=new B.x(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,A.t)
D.b_G=new B.x(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,A.t)
D.cHK=w([D.a9v,A.iU,A.pX,A.at,D.b_G],x.O)
D.bID=w([0,0.28,0.55,0.82,1],x.n)
D.bGl=new B.a8(A.ax,A.aE,A.w,D.cHK,D.bID,null)
D.bGu=new B.a8(A.a_,A.a7,A.w,A.Oa,null,null)
D.bGv=new B.a8(A.a_,A.a7,A.w,F.ar_,null,null)
D.bGy=new B.a8(A.a_,A.a7,A.w,D.asd,null,null)
D.cCL=w([A.bz,A.f3],x.O)
D.bGI=new B.a8(A.a_,A.a7,A.w,D.cCL,null,null)
D.cWW=w([A.aA,A.bz,A.bc],x.O)
D.bGK=new B.a8(A.a_,A.a7,A.w,D.cWW,null,null)
D.cKM=w([A.b_,A.bK,A.fZ],x.O)
D.bGO=new B.a8(A.a_,A.a7,A.w,D.cKM,null,null)
D.cWE=w([A.bj,A.aI,A.bP,A.aJ,A.aO,A.ct,A.aj],x.O)
D.cG7=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.bGT=new B.a8(A.ax,A.aE,A.w,D.cWE,D.cG7,null)
D.bH2=new B.a8(A.ax,A.aE,A.w,A.Zc,null,null)
D.cLf=w([D.Tn,A.e2],x.O)
D.bHb=new B.a8(A.a_,A.a7,A.w,D.cLf,null,null)
D.cS0=w([D.aab,D.a8K,A.M],x.O)
D.bHi=new B.a8(A.ax,A.aE,A.w,D.cS0,null,null)
D.b8j=new B.x(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,A.t)
D.cy8=w([A.eO,A.fP,D.b8j],x.O)
D.bHM=new B.a8(A.ax,A.aE,A.w,D.cy8,null,null)
D.cDc=w([D.nO,A.at],x.O)
D.bHN=new B.a8(A.ax,A.aE,A.w,D.cDc,null,null)
D.bI8=w([G.Ae,A.o8,A.jE,A.hi,A.k_,A.kA,A.kz,A.qm,A.m_,A.eF,A.lr,A.wT,A.Eg],x.A)
D.bLv=w([10,50,100,200],x.t)
D.bV9=w([1,3,5,7],x.t)
D.c_7=w([25,50,100,250],x.t)
D.bqe=new B.a_(983104,"MaterialIcons",!1)
D.c7v=w([A.o8,A.l0,A.m0,A.lq,A.hg,A.uv,D.bqe,A.XO],x.A)
D.ccQ=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.coE=w([0,0.22,0.5,0.78,1],x.n)
D.css=w([8,13,19],x.n)
D.Zv=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.eMB=new B.w("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.dQA=new B.jb("questions",48,D.eMB,null,x.d)
D.eDg=new B.w("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.dQF=new B.jb("edit",48,D.eDg,null,x.d)
D.eTL=new B.w("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.dQL=new B.jb("delete",48,D.eTL,null,x.d)
D.csC=w([D.dQA,D.dQF,D.dQL],B.aA("M<oD<n>>"))
D.cBC=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.cBP=w([A.bJ,A.jb],x.O)
D.a14=new C.li("text","",null,null)
D.cCT=w([D.a14],x.a)
D.cEb=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.e15=new B.abA(A.lY,"Home")
D.dXg=new B.abA(A.pa,"Growth")
D.dZC=new B.abA(A.jE,"Wallet")
D.cGi=w([D.e15,D.dXg,D.dZC],B.aA("M<+icon,label(a_,n)>"))
D.cGF=w([4,0,2,6,8,1,3,5,7],x.t)
D.cGN=w([A.c,A.bN,A.ct],x.O)
D.dkA=new C.qP("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.dkD=new C.qP("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.dkB=new C.qP("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.dkv=new C.qP("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.dkw=new C.qP("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.dkE=new C.qP("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.ZY=w([D.dkA,D.dkD,D.dkB,D.dkv,D.dkw,D.dkE],x.F)
D.a_2=w([A.aH,A.bq,A.dc,A.b_],x.O)
D.b2d=new B.x(1,1,0.8980392156862745,0.4,A.t)
D.cLl=w([A.T8,D.b2d,A.pX,A.hE,A.iU],x.O)
D.a_8=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.NI=w(["checkers_deluxe","tic_tac_go"],x.s)
D.bIc=w([0,1,2],x.t)
D.c7K=w([3,4,5],x.t)
D.ckq=w([6,7,8],x.t)
D.bIe=w([0,3,6],x.t)
D.bVe=w([1,4,7],x.t)
D.c1y=w([2,5,8],x.t)
D.bIi=w([0,4,8],x.t)
D.c1v=w([2,4,6],x.t)
D.cNy=w([D.bIc,D.c7K,D.ckq,D.bIe,D.bVe,D.c1y,D.bIi,D.c1v],x.B)
D.aA5=new C.GZ(0,"abab")
D.dkt=new C.GZ(1,"aaaBbb")
D.aA6=new C.GZ(2,"aabb")
D.cOs=w([D.aA5,D.dkt,D.aA6],B.aA("M<GZ>"))
D.cOI=w([],x.a)
D.arJ=w([],x.v)
D.cRT=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.O1=w([1,2,3,-1,-2],x.t)
D.cUv=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.b5N=new B.x(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,A.t)
D.b5F=new B.x(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,A.t)
D.aaT=new B.x(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,A.t)
D.cVc=w([D.b5N,D.b5F,D.aaT],x.O)
D.b7t=new B.x(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,A.t)
D.cVe=w([A.a82,D.b7t,D.aaT],x.O)
D.cVM=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.asx=w([D.nO,A.c,D.eu,A.cd,A.bd,A.at],x.O)
D.cYM=w([A.jy,A.aA],x.O)
D.f2N=new C.o2("dice","Dice Roll","Roll for cash & prizes!",A.lW,D.cYM)
D.f2K=new C.o2("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",A.qi,A.aqw)
D.cTZ=w([A.dk,A.bh],x.O)
D.f2H=new C.o2("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",A.XB,D.cTZ)
D.cYl=w([A.dN,A.lL],x.O)
D.f2P=new C.o2("memory","Memory Match","Match pairs \u2014 solo or multiplayer",A.XO,D.cYl)
D.apY=w([A.bh,A.j8],x.O)
D.f2Q=new C.o2("math","Math Quiz","200+ questions, rewards",A.E5,D.apY)
D.cN_=w([A.aA,A.lL],x.O)
D.f2J=new C.o2("scramble","Word Scramble","Place letters in order \u2014 solo or invite",F.af4,D.cN_)
D.bUX=w([A.j8,A.q6],x.O)
D.f2L=new C.o2("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",F.Xl,D.bUX)
D.f2O=new C.o2("sequence","Number Sequence","Find patterns, win rewards",A.ahg,D.apY)
D.cRS=w([M.kR,D.TJ],x.O)
D.f2I=new C.o2("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",A.Ac,D.cRS)
D.f2M=new C.o2("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",A.cu,Ah.mJ)
D.cWO=w([D.f2N,D.f2K,D.f2H,D.f2P,D.f2Q,D.f2J,D.f2L,D.f2O,D.f2I,D.f2M],B.aA("M<o2>"))
D.dky=new C.qP("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.dkx=new C.qP("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.dku=new C.qP("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.dkC=new C.qP("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.dkF=new C.qP("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.dkz=new C.qP("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a_G=w([D.dky,D.dkx,D.dku,D.dkC,D.dkF,D.dkz],x.F)
D.dI8={checkers_deluxe:0,tic_tac_go:1}
D.ay6=new B.bt(D.dI8,["Checkers Deluxe","Tic Tac Go"],B.aA("bt<n,n>"))
D.dHl={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.ayh=new B.bt(D.dHl,[1,2,3,4,5,6,7],B.aA("bt<n,H>"))
D.dgT=new C.li("signature","NGMY Support Team",null,null)
D.dgU=new C.li("divider","",null,null)
D.OT=new C.Tf(!1,!1,!1,!1)
D.OV=new C.LS(!1,!1,!1,!1)
D.dhX=new C.LS(!0,!0,!1,!1)
D.B2=new C.anV(0,"swahili")
D.aA4=new C.anV(1,"english")
D.B3=new C.anV(2,"mix")
D.cN4=w([A.hS,A.iA,A.dC],x.O)
D.dlG=new C.oz(D.cN4,A.hC,A.b_,"BACKGAMMON","\ud83c\udfb2",A.afZ)
D.br6=new B.a_(983637,"MaterialIcons",!1)
D.dlH=new C.oz(Ae.asG,A.bq,A.f4,"EURO WHEEL","\ud83c\udfa1",D.br6)
D.cUM=w([A.M,A.aI,A.bB],x.O)
D.dlI=new C.oz(D.cUM,A.aO,A.aj,"ROYALE","\u265f\ufe0f",F.Xl)
D.cBd=w([A.dH,A.bh,A.e9],x.O)
D.dlJ=new C.oz(D.cBd,A.aH,A.dc,"CONNECT 4","\ud83d\udd34",A.Y0)
D.cQv=w([A.dq,A.fp,A.q6],x.O)
D.dlK=new C.oz(D.cQv,A.tW,A.c9,"PUNTO BANCO","\ud83d\udc8e",A.l0)
D.cjT=w([A.n8,A.hQ,A.lj],x.O)
D.dlL=new C.oz(D.cjT,A.iM,A.jx,"DOMINOES","\ud83c\udc53",A.ah6)
D.cVp=w([A.w2,A.tX,A.hm],x.O)
D.dlM=new C.oz(D.cVp,A.zj,A.iv,"WAR","\u2694\ufe0f",N.Xh)
D.dlN=new C.oz(A.asB,A.aM,A.aj,"PREMIUM","\ud83c\udfae",A.lW)
D.cCM=w([A.jT,A.aA,A.dN],x.O)
D.dlO=new C.oz(D.cCM,A.j5,A.f3,"JACKPOT","\ud83c\udfb0",A.lW)
D.cPI=w([A.lh,A.lJ,A.bz],x.O)
D.dlP=new C.oz(D.cPI,A.pW,A.cd,"LIVE BINGO","\ud83c\udfb1",A.A5)
D.cvS=w([A.iA,A.e2,A.b_],x.O)
D.bot=new B.a_(62865,"MaterialIcons",!1)
D.dlQ=new C.oz(D.cvS,A.rl,A.aM,"BIG SPIN","\ud83c\udfa1",D.bot)
D.dlR=new C.oz(A.a_F,A.aJ,A.bq,"HOLD'EM","\u2660\ufe0f",A.jE)
D.cVL=w([A.eO,A.ff,A.aW],x.O)
D.bnA=new B.a_(61234,"MaterialIcons",!1)
D.dlS=new C.oz(D.cVL,A.lO,A.aS,"CRAPS","\ud83c\udfb2",D.bnA)
D.cAA=w([A.jb,A.iw,A.bJ],x.O)
D.dlT=new C.oz(D.cAA,A.bK,A.bc,"PLINKO","\ud83d\udc8e",Ai.L7)
D.bqQ=new B.a_(983492,"MaterialIcons",!1)
D.dlU=new C.oz(A.a_F,A.eY,A.bq,"SNOOKER","\ud83c\udfb1",D.bqQ)
D.cTA=w([A.eO,A.ff,A.aS],x.O)
D.dlV=new C.oz(D.cTA,A.q0,A.br,"PROFIT LAB","\ud83d\udcb0",A.hI)
D.cTS=w([A.eM,A.fo,A.bq],x.O)
D.bpq=new B.a_(63324,"MaterialIcons",!1)
D.dlW=new C.oz(D.cTS,A.zf,A.bt,"KLONDIKE","\ud83c\udccf",D.bpq)
D.cNE=w([A.dd,A.bj,A.M],x.O)
D.dlX=new C.oz(D.cNE,A.aM,A.aI,"VEGAS TABLE","\ud83c\udccf",A.Ag)
D.pk=new C.Db(0,"continueGame")
D.pl=new C.Db(1,"youWin")
D.FZ=new C.Db(2,"youLose")
D.P3=new C.Db(3,"draw")
D.aAj=new C.TY(0,"found")
D.dEJ=new C.TY(1,"foundLive")
D.a1k=new C.TY(2,"notFound")
D.aAk=new C.TY(3,"wrongAccount")
D.dJL=new B.v(4,12)
D.dLT=new B.B(A.JI,A.r4,null)
D.biQ=new B.L(4,0,0,3)
D.epC=new B.E(!0,A.aK,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXS=new B.w("NGMY Helper",null,D.epC,null,null,null,null,null,null,null,null,null)
D.dM8=new B.B(D.biQ,D.eXS,null)
D.bpi=new B.a_(63284,"MaterialIcons",!1)
D.buz=new B.ac(D.bpi,18,A.nR,null,null,null)
D.etZ=new B.E(!0,A.nR,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGW=new B.w("Continue",null,D.etZ,null,null,null,null,null,null,null,null,null)
D.cP6=w([D.buz,A.bp,D.eGW],x.p)
D.ebl=new B.cC(A.aY,A.e,A.R,A.m,null,A.p,null,0,D.cP6,null)
D.dMb=new B.B(A.iD,D.ebl,null)
D.dMl=new B.B(A.bT,A.r4,null)
D.eW7=new B.w("\u25b6\ufe0f",null,A.a4j,null,null,null,null,null,null,null,null,null)
D.dME=new B.B(A.UQ,D.eW7,null)
D.b5t=new B.x(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,A.t)
D.cLV=w([A.fP,A.ff,A.cW,D.b5t],x.O)
D.bGW=new B.a8(A.ax,A.aE,A.w,D.cLV,A.Av,null)
D.aSo=new B.o(null,null,null,null,null,D.bGW,A.n)
D.bbJ=new B.ky(D.aSo,A.b7,null,null)
D.dR_=new B.cE(0,0,0,0,null,null,D.bbJ,null)
D.bwg=new B.ac(A.ul,11,A.c,null,null,null)
D.dR3=new B.cE(10,12,null,null,null,null,D.bwg,null)
D.cov=w([A.hc,A.eM,A.kn],x.O)
D.dRD=new B.bS(A.HR,1.1,A.w,null,0,D.cov,null,null)
D.b6D=new B.x(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,A.t)
D.b1W=new B.x(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,A.t)
D.b3u=new B.x(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,A.t)
D.cJR=w([D.b6D,D.b1W,D.b3u],x.O)
D.dRJ=new B.bS(A.a5R,1.05,A.w,null,0,D.cJR,null,null)
D.dS1=new B.bS(A.B,0.5,A.w,null,0,W.ZK,null,null)
D.e9Y=new B.af(-18,0,18,1)
D.eaa=new B.af(-3,-5,3,5)
D.bv0=new B.ac(A.ej,16,D.eu,null,null,null)
D.aKp=new B.E(!0,D.eu,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVK=new B.w("Screenshot added \xb7 tap to change",null,D.aKp,null,null,null,null,null,null,null,null,null)
D.cyC=w([D.bv0,A.bp,D.eVK],x.p)
D.eaP=new B.cC(A.aY,A.b5,A.j,A.m,null,A.p,null,0,D.cyC,null)
D.byK=new B.ac(A.jF,15,D.eu,null,null,null)
D.eTG=new B.w("Refresh",null,D.aKp,null,null,null,null,null,null,null,null,null)
D.cAJ=w([D.byK,A.d4,D.eTG],x.p)
D.eaR=new B.cC(A.aY,A.e,A.R,A.m,null,A.p,null,0,D.cAJ,null)
D.dHJ={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.ecf=new B.fe(D.dHJ,3,x.M)
D.dIr={bubble_pop:0,fruit_slash:1,whack_mole:2,sky_stack:3,snake_rush:4,sky_hopper:5,brick_breaker:6,mystery_word:7,higher_lower:8,mine_sweep:9,merge_2048:10,lights_out:11,odd_one:12,speed_sort:13,flag_frenzy:14,balloon_darts:15,coin_catcher:16,number_rush:17,mini_sudoku:18,space_dodge:19,color_gate:20,paddle_duel:21,beat_tiles:22,target_range:23,perfect_stop:24,hoop_shot:25,penalty_kick:26,dino_dash:27,lane_racer:28,planet_shield:29,pipe_flow:30,color_flood:31,hanoi_tower:32,emoji_riddle:33,bigger_sum:34,true_false:35,capital_quiz:36,clock_reader:37,quick_count:38,shell_game:39,gem_swap:40,block_collapse:41,ball_sort:42,burger_builder:43,archery:44,deep_fishing:45,cannon_blast:46,moon_lander:47,jelly_jump:48,mini_golf:49,treasure_hunt:50,safe_cracker:51,gold_miner:52,cash_counter:53,plinko_drop:54,slot_stopper:55,change_maker:56,price_guess:57,make_13:58,find_it:59,knife_throw:60,fall_down:61,stick_bridge:62,zigzag_run:63,word_search:64,emoji_math:65,connect_four:66,pop_lock:67,asteroid_blaster:68,tetro_drop:69}
D.ecm=new B.fe(D.dIr,70,x.M)
D.dHw={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.ect=new B.fe(D.dHw,6,x.M)
D.dIx={memory:0,typing:1,scramble:2,pattern:3}
D.ma=new B.fe(D.dIx,4,x.M)
D.eeA=new B.ap(276,276)
D.efe=new B.a3(13,null,null,null)
D.aY3=new B.f9(2.6,null,null,null,null,A.aM,null,null,null,null)
D.efo=new B.a3(26,26,D.aY3,null)
D.eg8=new B.a3(null,7,null,null)
D.egh=new B.hI(8,0,0,1,null)
D.eWM=new B.w("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aI2=new B.aY(D.eWM,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
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
D.aJe=new B.E(!0,A.c,null,null,null,null,20,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
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
D.ew_=new B.E(!0,D.a9v,null,null,null,null,9,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJV=new B.E(!0,E.zd,null,null,null,null,11,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewk=new B.E(!0,A.fo,null,null,null,null,52,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewl=new B.E(!0,A.bB,null,null,null,null,7,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewA=new B.E(!0,E.zd,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.v9=new B.E(!0,A.c,null,null,null,null,13,A.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4c=new B.x(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,A.t)
D.ewN=new B.E(!0,D.b4c,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exh=new B.E(!0,A.Oz,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyf=new B.E(!0,A.c,null,null,null,null,38,A.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyl=new B.E(!0,A.iC,null,null,null,null,11,A.a1,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
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
D.aJF=new B.E(!0,A.cS,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCp=new B.w("AVAILABLE PLANS",null,D.aJF,null,null,null,null,null,null,null,null,null)
D.eCU=new B.w("Go Back",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eq4=new B.E(!0,A.bB,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDy=new B.w("PLAN VALUE",null,D.eq4,null,null,null,null,null,null,null,null,null)
D.eDA=new B.w("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.eDX=new B.w("Deposit",null,A.R3,null,null,null,null,null,null,null,null,null)
D.eza=new B.E(!0,A.j5,null,null,null,null,null,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eES=new B.w("JACKPOT SLOTS",null,D.eza,null,null,null,null,null,null,null,null,null)
D.eF9=new B.w("Restore",null,A.cc,null,null,null,null,null,null,null,null,null)
D.eq7=new B.E(!0,A.c,null,null,null,null,12,A.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFc=new B.w("YOUR NUMBER",null,D.eq7,null,null,null,null,null,null,null,null,null)
D.eFq=new B.w("SPIN REELS",null,F.a40,null,null,null,null,null,null,null,null,null)
D.eFQ=new B.w("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.eGh=new B.w("Perfect Score Profit",null,A.hk,null,null,null,null,null,null,null,null,null)
D.eGU=new B.w("Join room",null,A.kc,null,null,null,null,null,null,null,null,null)
D.eIK=new B.w("Add payment screenshot",null,A.jN,null,null,null,null,null,null,null,null,null)
D.eIY=new B.w("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.eys=new B.E(!0,A.aM,null,null,null,null,11,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJo=new B.w("INVITE A PLAYER",null,D.eys,null,null,null,null,null,null,null,null,null)
D.exE=new B.E(!0,A.T8,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJN=new B.w("NGMY GOLD LEADER",null,D.exE,null,null,null,null,null,null,null,null,null)
D.eKg=new B.w("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.eKD=new B.w("Invest & Play",null,A.or,null,null,null,null,null,null,null,null,null)
D.aJz=new B.E(!0,D.vW,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL0=new B.w("VALID THRU",null,D.aJz,null,null,null,null,null,null,null,null,null)
D.aK9=new B.E(!0,A.aB,null,null,null,null,11,A.I,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL8=new B.w("DEALER",null,D.aK9,null,null,null,null,null,null,null,null,null)
D.eLe=new B.w("CARDHOLDER",null,D.aJz,null,null,null,null,null,null,null,null,null)
D.exb=new B.E(!0,A.aJ,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLU=new B.w("NGMY PLATINUM",null,D.exb,null,null,null,null,null,null,null,null,null)
D.eAh=new B.E(!0,A.oQ,null,null,null,null,10,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMw=new B.w("EARNED SO FAR",null,D.eAh,null,null,null,null,null,null,null,null,null)
D.eN1=new B.w("VS",null,A.aJt,null,null,null,null,null,null,null,null,null)
D.eNq=new B.w("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.eO5=new B.w("Keep typing \u2014 mistakes are counted in your payout",null,A.BF,null,null,null,null,null,null,null,null,null)
D.eO6=new B.w("Multiplayer invite",null,A.kc,null,null,null,null,null,null,null,null,null)
D.eOg=new B.w("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.eoO=new B.E(!0,A.Oz,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOm=new B.w("\ud83d\udcb0 Partial Payout System",null,D.eoO,null,null,null,null,null,null,null,null,null)
D.eOw=new B.w("Browse Topics",null,A.eJ,null,null,null,null,null,null,null,null,null)
D.enT=new B.E(!0,A.c,null,null,null,null,22,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOK=new B.w("Investment Required",null,D.enT,null,A.L,null,null,null,null,null,null,null)
D.enq=new B.E(!0,A.c,null,null,null,null,16.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQ7=new B.w("Network Status",null,D.enq,null,null,null,null,null,null,null,null,null)
D.eQC=new B.w("Their account email",null,G.a3P,null,null,null,null,null,null,null,null,null)
D.eQV=new B.w("Verification code",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eQW=new B.w("Category",null,null,null,null,null,null,null,null,null,null,null)
D.eR7=new B.w("ACTIVE ASSET",null,D.aJF,null,null,null,null,null,null,null,null,null)
D.eRr=new B.w("Scan QR",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eRw=new B.w("Check word",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eRU=new B.w("YOUR HAND",null,D.aK9,null,null,null,null,null,null,null,null,null)
D.eSp=new B.w("NGMY Music Studio",null,A.l7,null,null,null,null,null,null,null,null,null)
D.eSs=new B.w("I sent it \u2014 submit deposit",null,A.or,null,null,null,null,null,null,null,null,null)
D.eT8=new B.w("Back",null,A.QC,null,null,null,null,null,null,null,null,null)
D.eB6=new B.E(!0,null,null,null,null,null,null,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTe=new B.w("DEAL / PLAY ROUND",null,D.eB6,null,null,null,null,null,null,null,null,null)
D.eTq=new B.w("Got it \u2014 keep chatting",null,A.cc,null,null,null,null,null,null,null,null,null)
D.eTz=new B.w("3 Messages Left",null,A.aJZ,null,null,null,null,null,null,null,null,null)
D.eU2=new B.w("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.eUa=new B.w("Copy",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eUv=new B.w("How many games?",null,G.a3P,null,null,null,null,null,null,null,null,null)
D.ewH=new B.E(!0,A.aB,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUH=new B.w("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.ewH,null,A.L,null,null,null,null,null,null,null)
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
D.aMF=new C.axZ(0,"grid")
D.aMG=new C.axZ(1,"questions")
D.f3n=new C.axZ(2,"answer")
D.f4b=new C.XU(null)})();(function staticFields(){$.fzS=B.aZ(x.N)
$.fYT=B.R(x.N,x.k)
$.fFc=null
$.fF0=B.R(x.N,B.aA("vn"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hUx","bzu",()=>C.hCZ())
w($,"hUj","h5J",()=>{var v=null,u=B.j0(v,v,v,v,D.emW,A.a5,A.cn,v,A.eL,A.cm)
u.fD()
return u})})()};
(a=>{a["ziNjWvw96rauiBzyczDRLo7faUw="]=a.current})($__dart_deferred_initializers__);