((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,L,Q,E,M,A_,N,A0,R,O,A1,S,A2,P,A3,A4,T,A5,A6,A7,A8,A9,Aa,U,Ab,C={
fQW(d,e,f){var w=null,v=f.k("Eo<0>"),u=new B.Eo(w,w,w,w,v)
$.a0j()
u.d=new C.ckE(new B.Vs(),e,u,f,d)
return new B.hK(u,v.k("hK<1>"))},
ckE:function ckE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ckF:function ckF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ckB:function ckB(d){this.a=d},
ckC:function ckC(d,e){this.a=d
this.b=e},
ckD:function ckD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ckA:function ckA(d,e,f){this.a=d
this.b=e
this.c=f},
bmP:function bmP(d){this.a=d},
fQV(d,e,f,g){return new C.asm(d,e,f,null,g.k("asm<0>"))},
DI:function DI(){},
aEu:function aEu(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
eJF:function eJF(d){this.a=d},
eJE:function eJE(d,e){this.a=d
this.b=e},
eJH:function eJH(d){this.a=d},
eJC:function eJC(d,e,f){this.a=d
this.b=e
this.c=f},
eJG:function eJG(d){this.a=d},
eJD:function eJD(d){this.a=d},
asm:function asm(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
hEP(d){var w=A.a.i(d)
while(A.a.a_(w,"$"))w=A.a.i(A.a.aV(w,1))
return w},
h_M(d){var w=C.hEP(d)
if(w.length===0)return""
return"$"+w},
fc8(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fc8=B.e(function(f,g){if(f===1)return B.f(g,v)
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
break}if(q.x!==A.cc){w=4
break}if(q.d!==A.fy){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!B.dk(m,"game payout:",0))if(!B.dk(m,"game partial:",0)){if(!B.dk(m,"multiplayer payout:",0))o=B.dk(m,"dice",0)&&q.e===A.eW
else o=l
l=o}if(!l){w=4
break}if(B.dk(m,"game payout:",0))k=A.a.i(A.a.aV(n,A.a.cP(m,"game payout:")+12))
else if(B.dk(m,"game partial:",0)){k=A.a.i(A.a.aV(n,A.a.cP(m,"game partial:")+13))
j=A.a.cP(k,"(")
if(j>0)k=A.a.i(A.a.al(k,0,j))}else if(B.dk(m,"multiplayer payout:",0)){k=A.a.i(A.a.aV(n,A.a.cP(m,"multiplayer payout:")+19))
j=A.a.cP(k,"(")
if(j>0)k=A.a.i(A.a.al(k,0,j))}else k=B.dk(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return B.b(C.uW(q.c,p,n,d,o,null,q.a,!0),$async$fc8)
case 6:case 4:e.length===s||(0,B.J)(e),++r
w=3
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$fc8,v)},
hJk(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
hFO(d,e,f){return A.d.bc(e,new C.ffO(f,A.a.i(d.toLowerCase())))},
ffH(d){var w
B.fxP(d)
w=d.bO
return B.bi(new B.I(w,new C.ffI(),B.S(w).k("I<1,@>")),!0,x.N)},
hvZ(d,e,f){var w,v,u,t,s,r,q=null,p=A.bP,o=A.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aT.toString
u=$.ea().gi1().b
if(u.a===0)t=1
else{new B.be(u,B.a2(u).k("be<2>")).gI(0)
u=$.kO()
s=u.d
t=s==null?u.gfX():s}w=A.k.dF(f*t)
v=new C.f10(f)
if(J.cS(n,"data:image"))try{u=B.fU(A.cw.aF(A.d.gai(J.lz(n,","))),A.C,w,new C.f0Y(v),A.fO,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.cS(n,"supabase://"))return new B.kT(B.a_8(n),new C.f0Z(f,e,p,w,v),q,q,x.gh)
return B.k5(n,A.C,w,new C.f1_(v),A.fO,p,!0,e,q,q,f)},
fCy(d,e){return new B.a8(e,e,B.i1(C.hvZ(d,e,e),A.ap),null)},
hoI(){var w,v,u=B.a([],x._),t=x.N,s=B.z(D.cVX,x.gm)
for(w=0;w<70;++w){v=A.Az[w]
s.push(new C.o_(v.a,v.b,v.c,v.e,v.f))}return new C.awS(u,B.Q(t,t),s)},
ffO:function ffO(d,e){this.a=d
this.b=e},
ffI:function ffI(){},
f10:function f10(d){this.a=d},
f0Y:function f0Y(d){this.a=d},
f0Z:function f0Z(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f0X:function f0X(d){this.a=d},
f1_:function f1_(d){this.a=d},
ai8:function ai8(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
o_:function o_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
awS:function awS(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
d1D:function d1D(d,e){this.a=d
this.b=e},
d1O:function d1O(d,e){this.a=d
this.b=e},
d25:function d25(){},
d26:function d26(d){this.a=d},
d1W:function d1W(d,e){this.a=d
this.b=e},
d1V:function d1V(){},
d1X:function d1X(d){this.a=d},
d1U:function d1U(){},
d1Z:function d1Z(d){this.a=d},
d1Y:function d1Y(){},
d1R:function d1R(d){this.a=d},
d1P:function d1P(d){this.a=d},
d1Q:function d1Q(d){this.a=d},
d1S:function d1S(d){this.a=d},
d1T:function d1T(d){this.a=d},
d1J:function d1J(d,e){this.a=d
this.b=e},
d1K:function d1K(d,e){this.a=d
this.b=e},
d1H:function d1H(d){this.a=d},
d1I:function d1I(d){this.a=d},
d1L:function d1L(d){this.a=d},
d1M:function d1M(d){this.a=d},
d1N:function d1N(d,e,f){this.a=d
this.b=e
this.c=f},
d1G:function d1G(d,e){this.a=d
this.b=e},
d1F:function d1F(d,e){this.a=d
this.b=e},
d1E:function d1E(d,e){this.a=d
this.b=e},
d24:function d24(d){this.a=d},
d22:function d22(d,e,f){this.a=d
this.b=e
this.c=f},
d21:function d21(d,e,f){this.a=d
this.b=e
this.c=f},
d20:function d20(d,e){this.a=d
this.b=e},
d2_:function d2_(){},
d23:function d23(d){this.a=d},
azG:function azG(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bf4:function bf4(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
dEN:function dEN(d){this.a=d},
dEM:function dEM(d){this.a=d},
dEO:function dEO(d){this.a=d},
dEL:function dEL(){},
dEP:function dEP(d,e){this.a=d
this.b=e},
dEK:function dEK(d){this.a=d},
dEQ:function dEQ(d){this.a=d},
ai7:function ai7(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
awR:function awR(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
d1x:function d1x(d){this.a=d},
d1A:function d1A(d){this.a=d},
d1B:function d1B(d){this.a=d},
d1C:function d1C(d){this.a=d},
d1z:function d1z(d,e){this.a=d
this.b=e},
d1y:function d1y(d,e){this.a=d
this.b=e},
ai9:function ai9(d,e,f,g,h,i,j,k,l,m){var _=this
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
awT:function awT(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.Y=_.aZ=_.bn=_.y2=_.y1=0
_.aA=_.aK=_.av=_.au=$
_.bE=_.b7=_.aS=_.b_=null
_.aQ=!1
_.bO=_.bf=null
_.c9=!1
_.ce=_.cS=""
_.c=_.a=_.bx=null},
d3p:function d3p(d,e){this.a=d
this.b=e},
d3s:function d3s(d){this.a=d},
d3t:function d3t(d){this.a=d},
d3u:function d3u(d){this.a=d},
d3v:function d3v(d){this.a=d},
d3w:function d3w(d){this.a=d},
d3q:function d3q(d){this.a=d},
d3r:function d3r(d){this.a=d},
d2F:function d2F(d,e){this.a=d
this.b=e},
d2G:function d2G(d,e){this.a=d
this.b=e},
d38:function d38(d){this.a=d},
d39:function d39(){},
d2V:function d2V(d,e,f){this.a=d
this.b=e
this.c=f},
d2W:function d2W(d){this.a=d},
d2X:function d2X(d,e,f){this.a=d
this.b=e
this.c=f},
d2Y:function d2Y(d,e){this.a=d
this.b=e},
d2Z:function d2Z(){},
d27:function d27(d){this.a=d},
d2E:function d2E(d,e){this.a=d
this.b=e},
d3a:function d3a(){},
d3j:function d3j(){},
d37:function d37(d){this.a=d},
d36:function d36(d){this.a=d},
d2C:function d2C(d){this.a=d},
d2D:function d2D(){},
d3e:function d3e(){},
d3f:function d3f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d3g:function d3g(d,e,f){this.a=d
this.b=e
this.c=f},
d28:function d28(){},
d29:function d29(d){this.a=d},
d2a:function d2a(){},
d2O:function d2O(d,e){this.a=d
this.b=e},
d2P:function d2P(d,e,f){this.a=d
this.b=e
this.c=f},
d2Q:function d2Q(d){this.a=d},
d2N:function d2N(d){this.a=d},
d3_:function d3_(d){this.a=d},
d30:function d30(){},
d31:function d31(d){this.a=d},
d32:function d32(){},
d33:function d33(d){this.a=d},
d34:function d34(){},
d3d:function d3d(d,e,f){this.a=d
this.b=e
this.c=f},
d2R:function d2R(d){this.a=d},
d2S:function d2S(d,e){this.a=d
this.b=e},
d2T:function d2T(d){this.a=d},
d2U:function d2U(d){this.a=d},
d3h:function d3h(d){this.a=d},
d3i:function d3i(d){this.a=d},
d2b:function d2b(d){this.a=d},
d2c:function d2c(d,e){this.a=d
this.b=e},
d2d:function d2d(d){this.a=d},
d2e:function d2e(d){this.a=d},
d3b:function d3b(d,e){this.a=d
this.b=e},
d3c:function d3c(d){this.a=d},
d2M:function d2M(d,e){this.a=d
this.b=e},
d35:function d35(d,e,f){this.a=d
this.b=e
this.c=f},
d2K:function d2K(d,e,f){this.a=d
this.b=e
this.c=f},
d2L:function d2L(){},
d3k:function d3k(d){this.a=d},
d3l:function d3l(d){this.a=d},
d3m:function d3m(d){this.a=d},
d3o:function d3o(d){this.a=d},
d3n:function d3n(){},
d2J:function d2J(d,e,f){this.a=d
this.b=e
this.c=f},
d2I:function d2I(d,e){this.a=d
this.b=e},
d2H:function d2H(d,e){this.a=d
this.b=e},
d2r:function d2r(d){this.a=d},
d2q:function d2q(d,e){this.a=d
this.b=e},
d2s:function d2s(d){this.a=d},
d2p:function d2p(d,e){this.a=d
this.b=e},
d2t:function d2t(d){this.a=d},
d2o:function d2o(){},
d2u:function d2u(d){this.a=d},
d2m:function d2m(){},
d2n:function d2n(d){this.a=d},
d2v:function d2v(d){this.a=d},
d2l:function d2l(d,e){this.a=d
this.b=e},
d2w:function d2w(d){this.a=d},
d2k:function d2k(d,e){this.a=d
this.b=e},
d2g:function d2g(d,e){this.a=d
this.b=e},
d2x:function d2x(d){this.a=d},
d2j:function d2j(d,e){this.a=d
this.b=e},
d2y:function d2y(d){this.a=d},
d2i:function d2i(d){this.a=d},
d2f:function d2f(d,e){this.a=d
this.b=e},
d2z:function d2z(d,e,f){this.a=d
this.b=e
this.c=f},
d2A:function d2A(d){this.a=d},
d2h:function d2h(){},
d2B:function d2B(d){this.a=d},
aj1:function aj1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bcg:function bcg(){this.c=this.a=null},
d6F:function d6F(d,e){this.a=d
this.b=e},
d6E:function d6E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afn:function afn(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
au7:function au7(d,e,f,g,h,i,j,k,l,m){var _=this
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
cvJ:function cvJ(d){this.a=d},
cv3:function cv3(d,e){this.a=d
this.b=e},
cuU:function cuU(d){this.a=d},
cuV:function cuV(d){this.a=d},
cvd:function cvd(d){this.a=d},
cva:function cva(d){this.a=d},
cvb:function cvb(d){this.a=d},
cvc:function cvc(d,e,f){this.a=d
this.b=e
this.c=f},
cv5:function cv5(d){this.a=d},
cv4:function cv4(d){this.a=d},
cuW:function cuW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cv8:function cv8(d){this.a=d},
cv7:function cv7(d){this.a=d},
cv6:function cv6(d,e){this.a=d
this.b=e},
cvw:function cvw(d){this.a=d},
cvq:function cvq(d){this.a=d},
cvt:function cvt(d){this.a=d},
cvs:function cvs(){},
cvp:function cvp(d){this.a=d},
cvr:function cvr(d,e){this.a=d
this.b=e},
cvo:function cvo(){},
cv0:function cv0(){},
cv1:function cv1(d,e){this.a=d
this.b=e},
cv2:function cv2(d){this.a=d},
cuZ:function cuZ(d,e){this.a=d
this.b=e},
cv_:function cv_(d,e){this.a=d
this.b=e},
cvg:function cvg(d,e){this.a=d
this.b=e},
cv9:function cv9(d){this.a=d},
cvh:function cvh(d){this.a=d},
cvi:function cvi(d,e){this.a=d
this.b=e},
cvj:function cvj(d,e){this.a=d
this.b=e},
cvk:function cvk(d,e){this.a=d
this.b=e},
cvl:function cvl(d,e,f){this.a=d
this.b=e
this.c=f},
cvm:function cvm(d){this.a=d},
cvn:function cvn(d){this.a=d},
cve:function cve(d,e){this.a=d
this.b=e},
cvv:function cvv(d){this.a=d},
cvf:function cvf(d,e){this.a=d
this.b=e},
cvI:function cvI(d){this.a=d},
cvB:function cvB(d){this.a=d},
cvE:function cvE(d){this.a=d},
cvy:function cvy(d,e){this.a=d
this.b=e},
cvC:function cvC(){},
cvD:function cvD(d,e){this.a=d
this.b=e},
cvz:function cvz(d){this.a=d},
cvA:function cvA(d){this.a=d},
cvG:function cvG(){},
cvF:function cvF(d){this.a=d},
cvx:function cvx(d,e){this.a=d
this.b=e},
cvH:function cvH(d){this.a=d},
cuX:function cuX(d){this.a=d},
cvu:function cvu(d,e){this.a=d
this.b=e},
cuY:function cuY(d,e,f){this.a=d
this.b=e
this.c=f},
aGS:function aGS(){},
aGT:function aGT(){},
aGU:function aGU(){},
aHP:function aHP(){},
bT_(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase())
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
bT0(d){var w=A.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hch(d,e){var w=d.ax
if(w<0)return!1
return w===e},
aTM(d,e){return C.hci(d,e)},
hci(d,e){var w=0,v=B.j(x.di),u,t,s,r,q,p
var $async$aTM=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aXy(d),$async$aTM)
case 3:p=g
if(p!=null){try{t=A.Q.aC(0,p.c,null)
if(x.f.b(t)){s=C.fLI(B.Y(t,x.N,x.z))
if(s==null){u=new B.Ej(D.a15,null)
w=1
break}if(A.a.i(e).length!==0&&!C.bT_(s,e,p.b)){u=new B.Ej(D.azX,null)
w=1
break}r=p.a?D.dDl:D.azW
u=new B.Ej(r,s)
w=1
break}}catch(o){}u=new B.Ej(D.a15,null)
w=1
break}s=C.fLJ(d)
if(s==null){u=new B.Ej(D.a15,null)
w=1
break}if(A.a.i(e).length!==0&&!C.bT_(s,e,null)){u=new B.Ej(D.azX,null)
w=1
break}u=new B.Ej(D.azW,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aTM,v)},
fLJ(d){var w,v,u,t,s,r
try{w=A.a.i(d)
if(J.cS(w,"\ufeff"))w=J.ma(w,1)
v=!1
if(J.cS(w,"NGMYSNAP1|")){v=!0
w=A.c_.c4(0,A.cw.aF(J.ma(w,10)))}u=A.Q.aC(0,w,null)
if(!x.f.b(u))return null
t=B.Y(u,x.N,x.z)
s=v?C.hcg(t):C.fLI(t)
return s}catch(r){return null}},
hcg(d){var w,v,u,t,s,r,q,p,o,n=new C.bSX(),m=new C.bSW(),l=d.h(0,"qi")
if(x.f.b(l)){w=B.Y(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new B.N(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=B.aQ(w.h(0,"d"))
p=new B.uu(v,u,t,s,r,A.k.L(q==null?0:q))}else p=null
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
return new B.a3w("","",v,u,t,s,r,q,n,m,o,p,A.hL,new B.N(Date.now(),0,!1),-1)},
fLI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.y(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.bSZ()
v=d.h(0,"activeInvestment")
if(x.f.b(v)){u=B.Y(v,x.N,x.z)
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
n=new B.uu(t,s,r,q,p,A.k.L(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=B.z(new B.e2(J.b3(m,new C.bSY(w),x.eG),t),t.k("E.E"))}else l=B.a([],x.E)
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
f=f==null?null:A.k.L(f)
return new B.a3w(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
fxa(d,e,f,g){var w=0,v=B.j(x.N),u,t,s,r
var $async$fxa=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:t=B.bSV(d,e,f,g)
s=B.ad("[^\\w\\-.]+",!0,!1,!1,!1)
r=B.aK(t.a,s,"_")
u=B.EN(B.I6(t.eD(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fxa,v)},
TS:function TS(d,e){this.a=d
this.b=e},
bSX:function bSX(){},
bSW:function bSW(){},
bSZ:function bSZ(){},
bSY:function bSY(d){this.a=d},
hyV(d){return B.cb(null,A.aV,!0,null,new C.f4f(),d,null,!0,!0,x.N)},
hz7(d,e,f,g){return B.cb(null,A.aV,!0,null,new C.f5s(g,f,e),d,null,!0,!0,x.y)},
akz:function akz(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayW:function ayW(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dn4:function dn4(d,e){this.a=d
this.b=e},
dn5:function dn5(d){this.a=d},
dmW:function dmW(d,e){this.a=d
this.b=e},
dmU:function dmU(d){this.a=d},
dn3:function dn3(d){this.a=d},
dn2:function dn2(d,e){this.a=d
this.b=e},
dmT:function dmT(d,e){this.a=d
this.b=e},
dmS:function dmS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dmV:function dmV(d){this.a=d},
dn1:function dn1(){},
dn_:function dn_(d){this.a=d},
dn0:function dn0(d,e){this.a=d
this.b=e},
dmX:function dmX(){},
dmY:function dmY(d,e){this.a=d
this.b=e},
dmZ:function dmZ(d,e){this.a=d
this.b=e},
dn6:function dn6(d){this.a=d},
Z6:function Z6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bnj:function bnj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
XN:function XN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
beF:function beF(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dna:function dna(d){this.a=d},
dn7:function dn7(d,e){this.a=d
this.b=e},
dn8:function dn8(d,e){this.a=d
this.b=e},
dn9:function dn9(d){this.a=d},
XO:function XO(d){this.a=d},
beG:function beG(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dnb:function dnb(d,e){this.a=d
this.b=e},
f4f:function f4f(){},
f5s:function f5s(d,e,f){this.a=d
this.b=e
this.c=f},
abP:function abP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eDA:function eDA(d){this.a=d},
eDB:function eDB(d){this.a=d},
NZ:function NZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
WV:function WV(d){this.a=d},
awh:function awh(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cXX:function cXX(d){this.a=d},
cXU:function cXU(){},
cXV:function cXV(d){this.a=d},
cXW:function cXW(d){this.a=d},
S_(d,e,f){var w=0,v=B.j(x.H),u,t,s
var $async$S_=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=A.a.i(d)
if(s.length===0||A.a.i(f).length===0){w=1
break}w=3
return B.b(B.L_(s),$async$S_)
case 3:t=h
J.ci(t,B.D(["role",e,"text",A.a.i(f),"at",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z))
w=4
return B.b(B.akP(s,t),$async$S_)
case 4:case 1:return B.h(u,v)}})
return B.i($async$S_,v)},
hcA(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=B.S(d).k("a3<1>")
v=B.z(new B.a3(d,new C.bTI(),w),w.k("E.E"))
w=v.length
if(w===0)return""
u=w<=24?v:A.d.h2(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,B.J)(u),++s){r=u[s]
q=J.a4(r)
p=J.y(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+B.t(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
bTI:function bTI(){},
hEf(d){return A.d.dP(A.Az,new C.fc2(d),new C.fc3()).r},
fc2:function fc2(d){this.a=d},
fc3:function fc3(){},
al3:function al3(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
beM:function beM(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dtw:function dtw(d){this.a=d},
dtv:function dtv(d){this.a=d},
dtn:function dtn(d,e,f){this.a=d
this.b=e
this.c=f},
dts:function dts(d){this.a=d},
dtp:function dtp(d,e,f){this.a=d
this.b=e
this.c=f},
dtt:function dtt(d){this.a=d},
dto:function dto(d){this.a=d},
dtu:function dtu(d){this.a=d},
dtq:function dtq(d){this.a=d},
dtr:function dtr(d){this.a=d},
h__(){var w=new B.N(Date.now(),0,!1),v=w.bL(B.dA(4-B.mP(w),0,0,0,0,0).a),u=B.bY(B.by(v),1,4,0,0,0,0,0)
return""+B.by(v)+"-W"+A.a.aU(A.o.u(1+A.k.bK(A.o.aj(v.bv(B.bY(B.by(u),B.bC(u),B.bN(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
eXk(d,e){var w,v,u,t,s,r,q=B.Ev(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=J.q(t,"email")
r=A.a.i(J.k(s==null?"":s).toLowerCase())
if((A.a.c5(r,"+local.ngmy")?A.a.al(r,0,r.length-11):r)===q)return t}t=B.D(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
htK(d,e){var w,v,u,t,s,r,q,p=B.Ev(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=J.a4(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c5(q,"+local.ngmy")?A.a.al(q,0,q.length-11):q)===p){w=B.aQ(s.h(t,"winsLeft"))
w=w==null?null:A.k.L(w)
return w==null?0:w}}return 0},
hN1(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=B.Ev(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=J.a4(t)
r=s.h(t,"email")
q=A.a.i(J.k(r==null?"":r).toLowerCase())
if((A.a.c5(q,"+local.ngmy")?A.a.al(q,0,q.length-11):q)===n){w=B.aQ(s.h(t,o))
w=w==null?null:A.k.L(w)
p=(w==null?0:w)-1
s.m(t,o,p<0?0:p)
return}}},
hzI(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=B.Ev(b5),b2=B.c1m(),b3=C.h__()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=J.a4(s)
q=r.h(s,a2)
p=A.a.i(J.k(q==null?"":q).toLowerCase())
if((A.a.c5(p,a3)?A.a.al(p,0,p.length-11):p)!==b1)continue
q=B.aQ(r.h(s,a4))
o=q==null?a1:A.k.L(q)
if((o==null?0:o)<=0)continue
if(u!=null){r=r.h(s,a5)
r=J.k(r==null?"":r)
q=J.q(u,a5)
q=J.k(q==null?"":q)
if(r===q)r=0
else r=r<q?-1:1
r=r>=0}else r=!0
if(r)u=s}if(u!=null){w=J.a4(u)
v=B.aQ(w.h(u,a4))
v=v==null?a1:A.k.L(v)
w.m(u,a4,(v==null?1:v)-1)
w=B.aQ(w.h(u,"outcome"))
w=w==null?a1:A.k.L(w)
return w==null?1:w}n=new C.f6b()
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
if(l!=null)return l}k=C.eXk(b4,b5)
w=J.a4(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?B.Y(v.a(w.h(k,b0)),r,q):B.Q(r,q)
w.m(k,b0,j)
for(w=b4.y,w=new B.cM(w,B.a2(w).k("cM<1,2>")).gaf(0);w.C();){i=w.d
h=i.b
g=J.a4(h)
f=g.h(h,"perDay")
if(f==null)f=0
e=g.h(h,"perWeek")
if(e==null)e=0
if(f<=0&&e<=0)continue
h=i.a
d=v.b(j.h(0,h))?B.Y(v.a(j.h(0,h)),r,q):B.Q(r,q)
j.m(0,h,d)
if(f>0){g=d.h(0,a7)
if(J.k(g==null?"":g)!==b2){d.m(0,a7,b2)
d.m(0,a6,0)}g=B.aQ(d.h(0,a6))
a0=g==null?a1:A.k.L(g)
if(a0==null)a0=0
if(a0<f){d.m(0,a6,a0+1)
return B.c3(h,a1)}}if(e>0){g=d.h(0,a9)
if(J.k(g==null?"":g)!==b3){d.m(0,a9,b3)
d.m(0,a8,0)}g=B.aQ(d.h(0,a8))
a0=g==null?a1:A.k.L(g)
if(a0==null)a0=0
if(a0<e){d.m(0,a8,a0+1)
return B.c3(h,a1)}}}return a1},
fWP(d,e){var w,v,u,t,s,r,q=B.a([],x.t)
for(w=[1,2,3],v=d.a,u=0;u<3;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
if(w===0)return 1
t=q[e.aE(w)]
if(t===3&&d.f>=d.e)t=e.hd()?1:2
return t},
fCQ(d,e){var w,v,u,t,s,r,q=B.a([],x.t)
for(w=[-1,-2],v=d.a,u=0;u<2;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
return w===0?-1:q[e.aE(w)]},
hzJ(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=B.Ev(a3),a1=new C.f6c()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=J.a4(s)
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
w=J.a4(u)
v=w.h(u,d)
l=J.k(v==null?"":v)
v=o>0?1:0
r=n>0?1:0
q=m>0?1:0
q=new C.f6d(v+r+q>1,l)
k=q.$2(o,"w")
r=k+q.$2(n,"l")
j=a4.aE(r+q.$2(m,"p"))
if(j<k){w.m(u,h,o-1)
w.m(u,d,"w")
w=a2.a
v=w.h(0,"1")
if(v==null)v=10
i=Math.max(1,v)
w=w.h(0,"2")
if(w==null)w=10
return a4.aE(i+Math.max(1,w))<i?1:2}if(j<r){w.m(u,g,n-1)
w.m(u,d,"l")
return C.fCQ(a2,a4)}w.m(u,f,m-1)
w.m(u,d,"p")
return 3},
hzH(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=B.aQ(i.h(0,"wins")),g=h==null?m:A.k.L(h)
if(g==null)g=0
h=B.aQ(i.h(0,"loses"))
w=h==null?m:A.k.L(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.h__():B.c1m()
t=v+"|"+u
s=C.eXk(d,e)
h=J.a4(s)
r=h.h(s,l)
if(J.k(r==null?"":r)!==t){h.m(s,l,t)
h.m(s,k,0)
h.m(s,j,0)}r=B.aQ(h.h(s,k))
q=r==null?m:A.k.L(r)
if(q==null)q=0
r=B.aQ(h.h(s,j))
p=r==null?m:A.k.L(r)
if(p==null)p=0
o=Math.max(0,g-q)
r=o+Math.max(0,w-p)
if(r<=0)return m
n=f.aE(r)<o
if(n)h.m(s,k,q+1)
else h.m(s,j,p+1)
return n},
hHM(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
d.baO()
w=C.hzJ(d,e,a0)
if(w!=null){if(w===3)++d.f
C.ada(d,e,w)
return w}v=C.hzI(d,e)
if(v!=null){if(v===3)++d.f
C.ada(d,e,v)
return v}u=C.hzH(d,e,a0)
if(u!=null)return new C.fiX(d,a0,e).$1(u)
t=C.eXk(d,e)
s=J.a4(t)
r=B.aQ(s.h(t,"winStreak"))
q=r==null?null:A.k.L(r)
if(q==null)q=0
s=B.aQ(s.h(t,"loseStreak"))
p=s==null?null:A.k.L(s)
if(p==null)p=0
o=new C.fiZ(d,a0)
if(C.htK(d,e)>0){n=o.$0()
C.hN1(d,e)
C.ada(d,e,n)
return n}if(q>=d.c){n=new C.fiY(d,a0).$0()
C.ada(d,e,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.ada(d,e,n)
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
g=a0.aE(100)<h
if(g&&m.length!==0){f=m[a0.aE(m.length)]
if(f===3&&d.f>=d.e)f=a0.hd()?1:2}else{s=l.length
if(s!==0)f=l[a0.aE(s)]
else f=g?1:-1}if(f===3)++d.f
C.ada(d,e,f)
return f},
c1e(d){var w=0,v=B.j(x.y),u
var $async$c1e=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c1d(d),$async$c1e)
case 3:if(f){u=!0
w=1
break}u=B.c1d(d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c1e,v)},
ada(d,e,f){var w,v="winStreak",u="loseStreak",t=C.eXk(d,e),s=J.a4(t),r=B.aQ(s.h(t,v)),q=r==null?null:A.k.L(r)
if(q==null)q=0
r=B.aQ(s.h(t,u))
w=r==null?null:A.k.L(r)
if(w==null)w=0
if(f>0){s.m(t,v,q+1)
s.m(t,u,0)}else{s.m(t,u,w+1)
s.m(t,v,0)}},
f6b:function f6b(){},
f6c:function f6c(){},
f6d:function f6d(d,e){this.a=d
this.b=e},
fiX:function fiX(d,e,f){this.a=d
this.b=e
this.c=f},
fiZ:function fiZ(d,e){this.a=d
this.b=e},
fiY:function fiY(d,e){this.a=d
this.b=e},
aky:function aky(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beD:function beD(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cN$=d
_.aX$=e
_.c=_.a=null},
dmH:function dmH(d){this.a=d},
dmG:function dmG(d){this.a=d},
dmI:function dmI(d){this.a=d},
dmF:function dmF(d,e){this.a=d
this.b=e},
aHp:function aHp(){},
Lq:function Lq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c23:function c23(){},
c22:function c22(){},
amy:function amy(d,e,f){this.c=d
this.d=e
this.a=f},
fyd(d,e,f){return B.cb(null,A.x.j(0.88),!0,null,new C.c2v(f,e),d,null,!0,!0,x.H)},
hgp(d){var w,v,u,t,s=A.a.i(d),r=s.split("-")
if(r.length===3){w=B.c3(r[0],null)
v=r[1]
u=B.c3(v,null)
t=B.c3(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?A.hV[u-1]:v)+" "+B.t(t)+", "+B.t(w)}return s},
Ly:function Ly(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c2v:function c2v(d,e){this.a=d
this.b=e},
bfg:function bfg(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
dLA:function dLA(d,e){this.a=d
this.b=e},
dLw:function dLw(){},
dLx:function dLx(){},
dLy:function dLy(d,e){this.a=d
this.b=e},
dLz:function dLz(d,e){this.a=d
this.b=e},
aHY:function aHY(){},
fZW(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.ban(new C.fep(w))
w=w.a
return w==null?null:w.c.a},
fZO(d){$.aT.x1$.push(new C.fec(d))},
h_7(d){var w=$.rh().gb8(),v=w!=null
if(!v||w.c==null)return
if(C.fZW(w)==="GamePlayScreen")if(v&&w.c!=null&&w.pF())w.eC()},
h_6(d){C.fWV(d,0)},
fWV(d,e){var w,v
if(e>4)return
w=d==null?$.rh().gb8():d
if(w==null||w.c==null)return
v=C.fZW(w)
if(v==="GameCenterScreen")return
if(D.eai.q(0,v)&&w.pF()){w.eC()
$.aT.x1$.push(new C.f2w(w,e))}},
aLK(d,e,f){return B.eb(B.co(new C.ffJ(e,d,f)),e,!0)},
fep:function fep(d){this.a=d},
fec:function fec(d){this.a=d},
feb:function feb(d){this.a=d},
f2w:function f2w(d,e){this.a=d
this.b=e},
ffJ:function ffJ(d,e,f){this.a=d
this.b=e
this.c=f},
aWa(d,e){var w=0,v=B.j(x.H),u
var $async$aWa=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=B.T2(e)
w=2
return B.b(B.amB(d,u),$async$aWa)
case 2:B.a4M(d,u)
return B.h(null,v)}})
return B.i($async$aWa,v)},
uW(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$uW=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:o=B.xh(g)
if(o.length===0){w=1
break}t=e==null?B.Ja(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return B.b(B.Lz(o),$async$uW)
case 3:q=m
if(j!=null&&j.length!==0&&J.ri(q,new C.c2I(j))){w=1
break}p=e==null?new B.N(Date.now(),0,!1):e
J.oY(q,0,new B.iU(A.o.u(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return B.b(C.aWa(o,q),$async$uW)
case 4:if(i==null||r==null||s)C.a4O(o).bC(new C.c2J(),x.S).eX(new C.c2K())
case 1:return B.h(u,v)}})
return B.i($async$uW,v)},
a4O(d){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a4O=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=$.h03
m=B.xh(d)
if(n==null||m.length===0){w=1
break}w=3
return B.b(B.Lz(m),$async$a4O)
case 3:t=f
s=J.cB(t)
if(!s.bc(t,new C.c2H())){w=1
break}w=4
return B.b(n.$2(m,t),$async$a4O)
case 4:r=f
q=J.a4(r)
if(q.gH(r)!==s.gH(t)){w=1
break}for(p=!1,o=0;o<s.gH(t);++o)if(A.Q.ak(s.h(t,o).ad(),null)!==A.Q.ak(q.h(r,o).ad(),null))p=!0
w=p?5:6
break
case 5:w=7
return B.b(C.aWa(m,r),$async$a4O)
case 7:case 6:case 1:return B.h(u,v)}})
return B.i($async$a4O,v)},
aWb(d){var w=0,v=B.j(x.S),u,t
var $async$aWb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.fyg(d,!1),$async$aWb)
case 3:t=J
w=4
return B.b(C.amC(d,!1),$async$aWb)
case 4:u=t.dE(f,new C.c2G(new B.N(Date.now(),0,!1).bL(-864e8))).gH(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aWb,v)},
amC(d,e){var w=0,v=B.j(x.ac),u,t,s
var $async$amC=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=B.xh(d)
if(t.length===0){u=B.a([],x.gi)
w=1
break}s=B
w=3
return B.b(B.Lz(t),$async$amC)
case 3:u=s.T2(g)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amC,v)},
hFL(d){var w,v,u,t=new B.N(Date.now(),0,!1),s=t.bv(d).a,r=A.o.aj(s,6e7)
if(r<1)return"Just now"
w=A.o.aj(s,36e8)
if(w<1)return""+r+"m ago"
if(A.o.aj(s,864e8)<1)return""+w+"h ago"
v=A.o.J(B.ds(d),12)===0?12:A.o.J(B.ds(d),12)
s=A.hV[B.bC(d)-1]
r=B.by(d)===B.by(t)?"":", "+B.by(d)
w=A.a.aU(A.o.u(B.hy(d)),2,"0")
u=B.ds(d)<12?"AM":"PM"
return s+" "+B.bN(d)+r+" \xb7 "+v+":"+w+" "+u},
bve(d){var w=A.k.ab(Math.abs(d),2).split(".")
return"$"+B.oU(w[0],B.ad("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.f0I(),null)+"."+w[1]},
byD(d,e){var w=0,v=B.j(x.H),u,t,s
var $async$byD=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.amC(e,!1),$async$byD)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
B.fyg(e,!0).bC(new C.fqY(e),t).bC(new C.fqZ(),t).eX(new C.fr_())
w=4
return B.b(B.c0(A.K,new C.fr0(e,s),d,!0,!0,!0,null,!1,!1,t),$async$byD)
case 4:case 1:return B.h(u,v)}})
return B.i($async$byD,v)},
fB3(d,e,f){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.H(f.j(0.35),A.r,1)
return B.C(B.p(w,B.u(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),A.bw,B.f0(A.C,B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.i,A.dq)],x.p),A.m,w,A.e,A.j,0,A.p),A.i,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.hq,w,w,w),1)},
dLB(d,e,f){var w=null,v=A.x.j(0.22),u=B.m(8),t=B.H(f.j(0.28),A.r,1)
return B.C(B.p(w,B.u(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,A.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.f0(A.a1,B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.i,A.e8)],x.p),A.F,w,A.e,A.j,0,A.p),A.i,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.JQ,w,w,w),1)},
c2I:function c2I(d){this.a=d},
c2J:function c2J(){},
c2K:function c2K(){},
c2H:function c2H(){},
c2G:function c2G(d){this.a=d},
f0I:function f0I(){},
fqY:function fqY(d){this.a=d},
fqZ:function fqZ(){},
fr_:function fr_(){},
fr0:function fr0(d,e){this.a=d
this.b=e},
fqX:function fqX(d,e){this.a=d
this.b=e},
fqW:function fqW(d){this.a=d},
aaE:function aaE(d,e){this.c=d
this.a=e},
dLD:function dLD(){},
dLE:function dLE(){},
dLF:function dLF(){},
dLG:function dLG(d){this.a=d},
dLI:function dLI(){},
dLH:function dLH(d){this.a=d},
aaD:function aaD(d,e){this.c=d
this.a=e},
dLC:function dLC(){},
byE(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return B.hM(A.aV,!1,w,d,new C.fr3(j,i,h,g,e,f),null,A.eT,!1,x.H)},
fr3:function fr3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fr1:function fr1(d,e){this.a=d
this.b=e},
fr2:function fr2(d,e){this.a=d
this.b=e},
awU:function awU(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bb_:function bb_(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bq$=e
_.a5$=f
_.c=_.a=null},
d3y:function d3y(d,e){this.a=d
this.b=e},
d3x:function d3x(){},
ab3:function ab3(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aGV:function aGV(){},
anm(d,e,f){return new C.aX1(f,d,e,null)},
hh3(d){var w=B.a(A.k.ab(d,2).split("."),x.s),v=B.ad("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=B.oU(w[0],v,new C.c4i(),null)
return A.d.aH(w,".")},
aWe(){var w=$.rF
if((w>0?$.rF=w-1:w)<=0)$.rF=0},
aeg(d,e){var w=0,v=B.j(x.H),u
var $async$aeg=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.fFf
w=u!=null?2:3
break
case 2:w=4
return B.b(u.$2(d,e),$async$aeg)
case 4:case 3:return B.h(null,v)}})
return B.i($async$aeg,v)},
aX1:function aX1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c4j:function c4j(d){this.a=d},
c4i:function c4i(){},
L2:function L2(){},
bUe:function bUe(){},
fEG(d){if(d>0)return"+"+d
return""+d},
fE6(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
ffK(d,e){var w=J.q(e,d)
if(w==null)w=B.fez().h(0,d)
return w==null?90:w},
f_H(d,e){var w,v,u=B.aY(x.S)
while(u.a<3){w=e.aE(41)-20
if(w===0)continue
u.G(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.G(0,d+v*7+3)
v=B.a([A.o.u(d)],x.s)
A.d.v(v,new B.jx(u,new C.f_I(),u.$ti.k("jx<cj.E,n>")))
A.d.fM(v,e)
return v},
fVX(d,e,f){var w,v,u,t,s=B.aY(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.G(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.G(0,f[A.o.J(u,5)]+u);++u}t=B.a([d],x.s)
A.d.v(t,B.oG(s,3,s.$ti.k("cj.E")))
A.d.fM(t,e)
return t},
hB2(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=B.a([],x.dA),b2=new B.f9()
b2.e2(42)
for(w=x.s,v=0;v<200;++v){u=A.o.J(v,5)
if(u===0){t=[4,9,16,25,36,49,64,81,121,144,196,256][b2.aE(12)]
s=[2,3,5,6,7,10,11,13][b2.aE(8)]
r=A.k.L(Math.sqrt(t))
q=2+b2.aE(4)
p=A.o.aj(q,2)
if((q&1)===0){o=""+r
n=""+s
m=p===1?o+"\u221a"+n:o+"x^"+p+"\u221a"+n}else{o=""+r
n=""+s
m=p===0?o+"\u221a"+n+"x":o+"x^"+p+"\u221a"+n+"x"}o=""+p
n=""+s
l=""+r+"x^"
b1.push(new C.GO("Simplify \u221a("+t*s+"x^"+q+")",m,C.fVX(m,b2,B.a([""+(r+1)+"x^"+o+"\u221a"+n,B.t(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aE(35)
j=b2.aE(4)===0?1:2+b2.aE(4)
i=b2.aE(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.GO("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.f_H(k,b2)))}else if(u===2){k=2+b2.aE(18)
j=b2.aE(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aE(10)+2
b1.push(new C.GO("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.f_H(g,b2)))}else b1.push(new C.GO("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.f_H(k,b2)))}else if(u===3){e=b2.aE(11)-5
o=b2.aE(11)
n=b2.aE(11)
d=b2.aE(11)+2
l=b2.hd()?1:-1
a0=e+l*(b2.aE(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===A.k.lM(a4)?""+A.k.L(a4):"\u221a"+a3
b1.push(new C.GO("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.f_H(a0,b2)))}else{a6=2+b2.aE(10)
a7=a6+2+b2.aE(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.GO("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.fVX(m,b2,B.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
hLk(d){var w,v,u=x.s,t=B.a(d.split(""),u)
if(t.length<4)return new B.dt(B.a(d.split(""),u),x.bJ).fJ(0)
for(w=0;w<12;++w){A.d.fM(t,A.cz)
v=A.d.fJ(t)
if(v!==d)return v}return new B.dt(t,x.bJ).fJ(0)},
GO:function GO(d,e,f){this.a=d
this.b=e
this.c=f},
f_I:function f_I(){},
am0:function am0(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
azH:function azH(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
dET:function dET(d){this.a=d},
dEU:function dEU(d){this.a=d},
dEV:function dEV(d){this.a=d},
dEW:function dEW(d,e){this.a=d
this.b=e},
dEX:function dEX(d,e){this.a=d
this.b=e},
dEY:function dEY(d){this.a=d},
dES:function dES(d){this.a=d},
dEZ:function dEZ(d){this.a=d},
dER:function dER(d){this.a=d},
dF1:function dF1(d){this.a=d},
dF2:function dF2(d){this.a=d},
dF0:function dF0(d,e){this.a=d
this.b=e},
dF_:function dF_(d,e){this.a=d
this.b=e},
amD:function amD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
azY:function azY(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
dM_:function dM_(d,e,f){this.a=d
this.b=e
this.c=f},
dM0:function dM0(d){this.a=d},
dLW:function dLW(d){this.a=d},
dLY:function dLY(d,e){this.a=d
this.b=e},
dLX:function dLX(d,e){this.a=d
this.b=e},
dLZ:function dLZ(d,e){this.a=d
this.b=e},
dLV:function dLV(d){this.a=d},
hdc(d){var w,v,u,t,s,r,q,p=new B.N(Date.now(),0,!1),o=p.bL(36e8)
try{w=d.h(0,"start")
p=B.mf(J.k(w==null?"":w)).bP()
w=d.h(0,"end")
o=B.mf(J.k(w==null?"":w)).bP()}catch(v){}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"title")
u=J.k(u==null?"Event":u)
t=p
s=o
r=d.h(0,"notes")
r=r==null?null:J.k(r)
q=d.h(0,"location")
return new C.qG(w,u,t,s,r,q==null?null:J.k(q))},
a4U(d){var w=0,v=B.j(x.ck),u,t,s,r,q,p,o
var $async$a4U=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.b)
w=1
break}w=3
return B.b(B.au(),$async$a4U)
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
p=B.cy(p,new C.c39(),p.$ti.k("E.E"),x.b1)
p=B.z(p,B.a2(p).k("E.E"))
A.d.aY(p,new C.c3a())
u=p
w=1
break}catch(n){r=B.a5(n)
$.ak.$1("[calendar-memory] load: "+B.t(r))
p=B.a([],x.b)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$a4U,v)},
amV(d,e){var w=0,v=B.j(x.H),u,t,s,r,q
var $async$amV=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(C.a4U(d),$async$amV)
case 2:r=g
q=J.cB(r)
q.bk(r,new C.c36(e))
q.G(r,e)
q.aY(r,new C.c37())
w=3
return B.b(B.au(),$async$amV)
case 3:u=g
t=A.a.i(d.toLowerCase())
q=q.jW(r,80)
s=q.$ti.k("I<ai.E,a0<n,@>>")
q=B.z(new B.I(q,new C.c38(),s),s.k("ai.E"))
w=4
return B.b(u.an("String","ngmy_helper_calendar_v1_"+t,A.Q.ak(q,null)),$async$amV)
case 4:return B.h(null,v)}})
return B.i($async$amV,v)},
hgC(d,e){var w=Date.now(),v=new B.N(w,0,!1).bP()
w=J.dE(d,new C.c3b(v,v.bL(B.dA(14,0,0,0,0,0).a)))
w=B.z(w,w.$ti.k("E.E"))
return w},
fNQ(d){var w,v,u,t,s,r,q,p,o,n,m=C.hgC(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=B.dg(m,0,B.dK(20,"count",x.S),B.S(m).c),v=w.$ti,w=new B.bR(w,w.gH(0),v.k("bR<ai.E>")),v=v.k("ai.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=A.o.J(B.ds(s),12)===0?12:A.o.J(B.ds(s),12)
q=B.ds(s)>=12?"PM":"AM"
p=A.a.aU(A.o.u(B.hy(s)),2,"0")
o=t.f
if((o==null?null:A.a.i(o).length!==0)===!0){o.toString
n=" @ "+A.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+B.bC(s)+"/"+B.bN(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&A.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return A.a.i(u.charCodeAt(0)==0?u:u)},
qG:function qG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c39:function c39(){},
c3a:function c3a(){},
c36:function c36(d){this.a=d},
c37:function c37(){},
c38:function c38(){},
c3b:function c3b(d,e){this.a=d
this.b=e},
hdd(d){var w,v,u,t,s,r,q,p,o=null,n=new B.N(Date.now(),0,!1)
try{w=d.h(0,"when")
n=B.mf(J.k(w==null?"":w)).bP()}catch(v){}w=d.h(0,"id")
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
return new C.qH(w,u,t,s,r,q,J.k(p==null?"user":p))},
fMg(d){var w=A.o.J(B.ds(d),12)===0?12:A.o.J(B.ds(d),12),v=B.ds(d)>=12?"PM":"AM"
return""+B.bC(d)+"/"+B.bN(d)+" "+w+":"+A.a.aU(A.o.u(B.hy(d)),2,"0")+" "+v},
Sc(d){var w=0,v=B.j(x.e),u,t,s,r,q,p,o
var $async$Sc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=B.a([],x.x)
w=1
break}w=3
return B.b(B.au(),$async$Sc)
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
p=B.cy(p,new C.bWC(),p.$ti.k("E.E"),x.Q)
p=B.z(p,B.a2(p).k("E.E"))
A.d.aY(p,new C.bWD())
u=p
w=1
break}catch(n){r=B.a5(n)
$.ak.$1("[call-memory] load: "+B.t(r))
p=B.a([],x.x)
u=p
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$Sc,v)},
aUy(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$aUy=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.au(),$async$aUy)
case 2:u=g
t=B.dg(e,0,B.dK(120,"count",x.S),B.S(e).c).dz(0)
s=A.a.i(d.toLowerCase())
r=B.S(t).k("I<1,a0<n,@>>")
r=B.z(new B.I(t,new C.bWA(),r),r.k("ai.E"))
w=3
return B.b(u.an("String","ngmy_call_memory_v1_"+s,A.Q.ak(r,null)),$async$aUy)
case 3:return B.h(null,v)}})
return B.i($async$aUy,v)},
aUz(d,e){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$aUz=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:p=B.Q(x.N,x.Q)
o=J
w=2
return B.b(C.Sc(d),$async$aUz)
case 2:u=o.aW(g)
case 3:if(!u.C()){w=4
break}t=u.gT(u)
p.m(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.m(0,r.a,r)}u=p.$ti.k("be<2>")
q=B.z(new B.be(p,u),u.k("E.E"))
A.d.aY(q,new C.bWB())
w=5
return B.b(C.aUy(d,q),$async$aUz)
case 5:return B.h(null,v)}})
return B.i($async$aUz,v)},
bWE(d,e){var w=0,v=B.j(x.e),u,t,s
var $async$bWE=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return B.b(C.Sc(d),$async$bWE)
case 3:t=s.dE(g,new C.bWF(e.bL(-72e8),e.bL(72e8)))
t=B.z(t,t.$ti.k("E.E"))
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bWE,v)},
fMh(d,e){var w,v,u,t,s,r=J.a4(d)
if(r.gag(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.jW(d,e),v=w.$ti,w=new B.bR(w,w.gH(0),v.k("bR<ai.E>")),v=v.k("ai.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gTf()+"\n"
t=t.f
if(t!=null&&A.a.i(t).length!==0){s=A.a.i(t)
u+="  Voicemail/text: "+(s.length>180?A.a.al(s,0,177)+"\u2026":s)+"\n"}}r=r.gH(d)>e?u+("\u2026 and "+(r.gH(d)-e)+" more\n"):u
return A.a.i(r.charCodeAt(0)==0?r:r)},
hHw(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new B.N(q,0,!1).bP(),o=d.toLowerCase(),n=B.bY(B.by(p),B.bC(p),B.bN(p),0,0,0,0,0)
if(A.a.q(o,"yesterday"))n=n.bL(r)
else if(!A.a.q(o,"today")&&A.a.q(o,"last night"))n=n.bL(r)
w=B.ad("\\b(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!0,!1,!1,!1).cw(o)
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
return B.bY(B.by(n),B.bC(n),B.bN(n),u,t,0,0,0)},
h0t(d){var w=B.ad("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
qH:function qH(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bWC:function bWC(){},
bWD:function bWD(){},
bWA:function bWA(){},
bWB:function bWB(){},
bWF:function bWF(d,e){this.a=d
this.b=e},
fNT(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lf(t,w,v,u==null?null:J.k(u))},
hgI(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b3(v,new C.c3h(),x.bP)
v=B.z(v,v.$ti.k("ai.E"))}if(v==null)v=D.cNU
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.y(d.h(0,"printable"),!0)
return new C.i7(r,w,v,u,t,typeof d.h(0,s)=="number"?A.k.L(B.fc(d.h(0,s))):0)},
hgH(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.htW(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?A.k.L(B.fc(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?A.k.L(B.fc(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b3(s,new C.c3f(),x.u)
s=B.z(s,s.$ti.k("ai.E"))}return new C.hU(p,w,v,u,s==null?D.arv:s,t)},
htX(d){var w,v,u,t=B.D([G.A3,"investments",A.o7,"games",A.jC,"loans",A.hd,"withdrawals",A.jZ,"deposits",A.kw,"civic",A.kv,"store",A.qi,"jobs",A.lV,"refunds",A.eD,"account",A.ln,"music",A.wM,"help"],x.dk,x.N)
for(w=new B.cM(t,B.a2(t).k("cM<1,2>")).gaf(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
htW(d){switch(d){case"investments":return G.A3
case"games":return A.o7
case"loans":return A.jC
case"withdrawals":return A.hd
case"deposits":return A.jZ
case"civic":return A.kw
case"store":return A.kv
case"jobs":return A.qi
case"refunds":return A.lV
case"account":return A.eD
case"music":return A.ln
default:return A.wM}},
mw(d){var w=B.a([new C.lf("text",d,null,null)],x.a)
return w},
aed(){var w=null,v=x.v
return B.a([new C.hU("investments","Investments",G.A3,4280468830,B.a([new C.i7("inv1","How do I buy an investment plan?",C.mw("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.i7("inv2","When do I get paid from my plan?",C.mw("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.i7("inv3","Can I have more than one plan?",C.mw("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.hU("games","Games",A.o7,4287323382,B.a([new C.i7("gam1","How do NGMY games work?",C.mw("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.i7("gam2","Why did my game payout change?",C.mw("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.hU("loans","Loans",A.jC,4294538006,B.a([new C.i7("loan1","How do I apply for a loan?",C.mw("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.i7("loan2","What is the repayment period?",C.mw("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.hU("withdrawals","Withdrawals",A.hd,4282090230,B.a([new C.i7("wd1","How do I withdraw money?",C.mw("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.i7("wd2","Why is my withdrawal pending?",C.mw("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.hU("deposits","Deposits",A.jZ,4279548070,B.a([new C.i7("dep1","How do I deposit funds?",C.mw("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.i7("dep2","How long until my deposit posts?",C.mw("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.hU("civic","Civic Registry",A.kw,4289170426,B.a([new C.i7("civ1","What is Civic Registry?",C.mw("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.i7("civ2","What does \u201cmissed\u201d mean on my profile?",C.mw("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.hU("store","NGMY Store",A.kv,4293675161,B.a([new C.i7("sto1","How do I buy from NGMY Store?",C.mw("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.i7("sto2","How do I sell in the store?",C.mw("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.hU("jobs","Jobs & Creator",A.qi,4293548044,B.a([new C.i7("job1","How do I find jobs?",C.mw("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.i7("job2","How do I post a job?",C.mw("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.hU("refunds","Refunds",A.lV,4293870660,B.a([new C.i7("ref1","Can I get a refund?",C.mw("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.i7("ref2","How long do refunds take?",C.mw("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.hU("account","Account",A.eD,4281908728,B.a([new C.i7("acc1","How do I update my profile?",C.mw("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.i7("acc2","I forgot my password \u2014 what now?",C.mw("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.hU("music","Music Charts",A.ln,4290807036,B.a([new C.i7("mus1","What are Music Charts?",C.mw("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.i7("mus2","How do I upload music?",C.mw("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.hU("help","Help Center",A.wM,4279080072,B.a([new C.i7("hlp1","Where can I get live help?",C.mw("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.i7("hlp2","How do daily Helper limits work?",C.mw("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
fNU(d){var w,v=J.a4(d),u=v.gag(d)
if(u)return C.aed()
v=v.di(d,new C.c3k(),x.i)
w=B.z(v,v.$ti.k("ai.E"))
A.d.aY(w,new C.c3l())
return w.length===0?C.aed():w},
fNV(d){var w=J.b3(d,new C.c3m(),x.P)
w=B.z(w,w.$ti.k("ai.E"))
return B.D(["categories",w,"savedAt",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z)},
amX(d){return C.hgJ(d)},
hgJ(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p
var $async$amX=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.au(),$async$amX)
case 6:s=f
w=7
return B.b(s.an("String","ngmy_helper_kb_v1",A.Q.ak(C.fNV(d),null)),$async$amX)
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
return B.i($async$amX,v)},
c3j(){var w=0,v=B.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$c3j=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.au(),$async$c3j)
case 7:r=e
q=B.aR(J.q(r.a,"ngmy_helper_kb_v1"))
if(q==null||A.a.i(q).length===0){l=C.aed()
u=l
w=1
break}p=A.Q.aC(0,q,null)
if(!x.f.b(p)){l=C.aed()
u=l
w=1
break}o=J.q(p,"categories")
if(!x.j.b(o)){l=C.aed()
u=l
w=1
break}n=C.fNU(o)
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
l=C.aed()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$c3j,v)},
aWA(){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$aWA=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.bW(),$async$aWA)
case 7:if(!e){u=null
w=1
break}w=8
return B.b(B.eU("ngmy_helper_kb",null,!1,A.bE),$async$aWA)
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
return B.i($async$aWA,v)},
aWB(d){return C.hgK(d)},
hgK(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aWB=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.bW(),$async$aWB)
case 7:if(!f){u=!1
w=1
break}w=8
return B.b(B.hr("ngmy_helper_kb",d,!1,!1,A.cy,null),$async$aWB)
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
return B.i($async$aWB,v)},
amY(){var w=0,v=B.j(x.I),u,t,s,r
var $async$amY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.c3j(),$async$amY)
case 3:s=e
w=4
return B.b(C.aWA(),$async$amY)
case 4:r=e
w=r!=null&&x.j.b(J.q(r,"categories"))?5:6
break
case 5:t=C.fNU(x.j.a(J.q(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return B.b(C.amX(t),$async$amY)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amY,v)},
c3n(d){var w=0,v=B.j(x.y),u
var $async$c3n=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.amX(d),$async$c3n)
case 3:u=C.aWB(C.fNV(d))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c3n,v)},
lf:function lf(d,e,f,g){var _=this
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
c3i:function c3i(){},
c3h:function c3h(){},
hU:function hU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c3g:function c3g(){},
c3f:function c3f(){},
c3k:function c3k(){},
c3l:function c3l(){},
c3m:function c3m(){},
b4L:function b4L(d){this.a=d},
T9:function T9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aA9:function aA9(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
dPF:function dPF(){},
dPG:function dPG(){},
dPz:function dPz(d){this.a=d},
dPA:function dPA(d){this.a=d},
dPi:function dPi(d,e){this.a=d
this.b=e},
dPj:function dPj(d){this.a=d},
dPk:function dPk(d,e,f){this.a=d
this.b=e
this.c=f},
dPh:function dPh(d){this.a=d},
dPw:function dPw(d,e){this.a=d
this.b=e},
dPx:function dPx(d,e){this.a=d
this.b=e},
dPy:function dPy(d){this.a=d},
dPq:function dPq(d){this.a=d},
dPr:function dPr(d,e,f){this.a=d
this.b=e
this.c=f},
dPp:function dPp(d,e){this.a=d
this.b=e},
dPv:function dPv(d,e,f){this.a=d
this.b=e
this.c=f},
dPu:function dPu(d,e){this.a=d
this.b=e},
dPt:function dPt(d,e){this.a=d
this.b=e},
dPs:function dPs(d,e,f){this.a=d
this.b=e
this.c=f},
dPm:function dPm(d){this.a=d},
dPl:function dPl(d){this.a=d},
dPn:function dPn(d,e){this.a=d
this.b=e},
dPo:function dPo(d){this.a=d},
dPE:function dPE(d,e){this.a=d
this.b=e},
dPD:function dPD(d,e){this.a=d
this.b=e},
dPC:function dPC(){},
dPB:function dPB(d,e){this.a=d
this.b=e},
Nq:function Nq(d,e){this.c=d
this.a=e},
b6y:function b6y(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cE8:function cE8(d){this.a=d},
cE7:function cE7(d,e){this.a=d
this.b=e},
cE5:function cE5(d,e){this.a=d
this.b=e},
cE9:function cE9(d){this.a=d},
cE6:function cE6(d,e){this.a=d
this.b=e},
cE4:function cE4(d,e){this.a=d
this.b=e},
cEa:function cEa(d){this.a=d},
cEb:function cEb(d,e){this.a=d
this.b=e},
Yz:function Yz(d,e,f){this.c=d
this.d=e
this.a=f},
aC_:function aC_(){this.d=$
this.c=this.a=null},
eyG:function eyG(d,e){this.a=d
this.b=e},
eyH:function eyH(d){this.a=d},
eyN:function eyN(){},
eyM:function eyM(d,e){this.a=d
this.b=e},
eyL:function eyL(d,e){this.a=d
this.b=e},
eyI:function eyI(d,e){this.a=d
this.b=e},
eyK:function eyK(d,e,f){this.a=d
this.b=e
this.c=f},
eyJ:function eyJ(d,e,f){this.a=d
this.b=e
this.c=f},
Yy:function Yy(d,e){this.c=d
this.a=e},
aBZ:function aBZ(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
eyC:function eyC(d,e){this.a=d
this.b=e},
eyA:function eyA(d){this.a=d},
eyB:function eyB(d,e){this.a=d
this.b=e},
eyE:function eyE(d,e){this.a=d
this.b=e},
eyF:function eyF(d){this.a=d},
eyD:function eyD(d,e){this.a=d
this.b=e},
hgF(d){var w=new B.I(d,new C.c3c(),B.S(d).k("I<1,n>")).aH(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
c3d(d,e,f){return C.hgG(d,e,f)},
hgG(b4,b5,b6){var w=0,v=B.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$c3d=B.e(function(b8,b9){if(b8===1)return B.f(b9,v)
for(;;)switch(w){case 0:b3=A.a.i(b5)
if(b3.length===0){u=new B.Il([B.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return B.b(B.ra(B.mV(b3),C.hgF(b6)+"\n\nAdmin instruction:\n"+b4,A.hf,null),$async$c3d)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=A.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new B.Il([B.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=A.a.i(a3)
if(J.cS(s,"```"))s=A.a.e_(J.fI1(s,B.ad("^```(?:json)?\\s*",!0,!1,!1,!1),""),B.ad("\\s*```$",!0,!1,!1,!1),"")
r=A.Q.aC(0,s,null)
a3=x.f
if(!a3.b(r)){a3=B.a([],x.Y)
u=new B.Il([a3,"AI response was not valid JSON.",null,null])
w=1
break}a4=x.N
a5=x.z
q=B.Y(r,a4,a5)
a6=J.q(q,"message")
p=a6==null?null:J.k(a6)
a6=J.q(q,"replaceCategoryId")
o=a6==null?null:J.k(a6)
n=J.q(q,"categories")
a6=x.j
if(!a6.b(n)||J.ch(n)){a3=B.a([],x.Y)
u=new B.Il([a3,"AI did not return any categories.",p,o])
w=1
break}m=B.a([],x.Y)
l=b6.length
for(k=0,a7=x.v,a8=x.a;k<J.aa(n);++k){j=B.Y(a3.a(J.q(n,k)),a4,a5)
i="cat_ai_"+1000*Date.now()+"_"+B.t(k)
h=J.q(j,"questions")
g=B.a([],a7)
if(a6.b(h))for(f=0;f<J.aa(h);++f){e=B.Y(a3.a(J.q(h,f)),a4,a5)
d=J.q(e,"answerBlocks")
a0=B.a([],a8)
if(a6.b(d))for(a9=J.aW(d);a9.C();){a1=a9.gT(a9)
J.ci(a0,C.fNT(B.Y(a3.a(a1),a4,a5)))}if(J.aa(a0)===0){a9=J.q(e,"answer")
J.ci(a0,new C.lf("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=B.t(f)
b1=J.q(e,"question")
J.ci(g,new C.i7("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.y(J.q(e,"printable"),!0),f))}a9=J.q(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.q(j,"iconKey")
b0=C.hgE(J.k(b0==null?"help":b0))
b1=typeof J.q(j,"colorValue")=="number"?A.k.L(B.fc(J.q(j,"colorValue"))):4284773515
J.ci(m,new C.hU(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.aa(a3)!==0)===!0?o:null
u=new B.Il([m,null,p,a3])
w=1
break}catch(b7){a2=B.a5(b7)
a3=B.t(a2)
a4=B.a([],x.Y)
u=new B.Il([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$c3d,v)},
hgE(d){switch(d){case"investments":return G.A3
case"games":return A.o7
case"loans":return A.jC
case"withdrawals":return A.hd
case"deposits":return A.jZ
case"civic":return A.kw
case"store":return A.kv
case"jobs":return A.qi
case"refunds":return A.lV
case"account":return A.eD
case"music":return A.ln
default:return A.wM}},
hG3(d,e,f){var w,v,u,t=B.bi(d,!0,x.i)
if(f!=null&&J.aa(e)===1){w=A.d.be(t,new C.fg6(f))
if(w>=0){t[w]=J.fm(e).cxm(f,t[w].f)
return t}}A.d.v(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].b59(u)
return t},
c3c:function c3c(){},
fg6:function fg6(d){this.a=d},
cVA:function cVA(d){this.a=d},
Ta:function Ta(d,e,f){this.c=d
this.d=e
this.a=f},
aAb:function aAb(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
dQf:function dQf(){},
dPW:function dPW(d,e){this.a=d
this.b=e},
dQ0:function dQ0(d,e){this.a=d
this.b=e},
dPZ:function dPZ(d,e){this.a=d
this.b=e},
dPX:function dPX(d){this.a=d},
dPY:function dPY(d){this.a=d},
dQ_:function dQ_(d,e,f){this.a=d
this.b=e
this.c=f},
dPS:function dPS(){},
dPT:function dPT(){},
dPU:function dPU(){},
dPV:function dPV(){},
dQ5:function dQ5(d,e){this.a=d
this.b=e},
dQ6:function dQ6(d){this.a=d},
dQ7:function dQ7(d){this.a=d},
dQ8:function dQ8(d){this.a=d},
dQ9:function dQ9(d){this.a=d},
dQa:function dQa(d){this.a=d},
dQb:function dQb(){},
dQc:function dQc(d){this.a=d},
dQ4:function dQ4(d){this.a=d},
dQd:function dQd(d){this.a=d},
dQ3:function dQ3(d){this.a=d},
dQe:function dQe(d,e){this.a=d
this.b=e},
dQ2:function dQ2(d,e){this.a=d
this.b=e},
dQ1:function dQ1(d,e){this.a=d
this.b=e},
hom(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=B.a([],x.eO)
for(w=B.ad("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kq(0,d),w=new B.HR(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=A.a.al(d,t,q)
o=u?A.ct:A.aI
m.push(new B.eE(p,n,n,A.cT,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?A.ct:A.aI
m.push(new B.eE(p,n,n,A.cT,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,A.I,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?A.ct:A.aI
m.push(new B.eE(p,n,n,A.cT,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,A.cS,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?A.ct:A.aI
m.push(new B.eE(p,n,n,A.cT,n,n,n,n,n,n,new B.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,A.m7,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=A.a.aV(d,t)
m.push(B.dw(n,n,n,n,n,n,n,n,n,B.l(n,n,u?A.ct:A.aI,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return B.rP(n,n,n,A.eP,n,n,!0,n,B.dw(m,n,n,n,n,n,n,n,n,n,n),A.a5,n,n,A.d8,A.co)},
d7x:function d7x(d){this.a=d},
axL:function axL(d,e){this.a=d
this.b=e},
amW:function amW(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAa:function aAa(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
dPP:function dPP(d,e){this.a=d
this.b=e},
dPQ:function dPQ(d,e){this.a=d
this.b=e},
dPH:function dPH(d){this.a=d},
dPI:function dPI(d){this.a=d},
dPR:function dPR(){},
dPK:function dPK(d,e){this.a=d
this.b=e},
dPJ:function dPJ(d,e){this.a=d
this.b=e},
dPM:function dPM(){},
dPO:function dPO(){},
dPN:function dPN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPL:function dPL(d,e){this.a=d
this.b=e},
axJ:function axJ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a9c:function a9c(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aWz:function aWz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c3e:function c3e(d){this.a=d},
a94:function a94(d,e,f){this.c=d
this.d=e
this.a=f},
cxP:function cxP(d){this.a=d},
cxQ:function cxQ(){},
cxR:function cxR(d){this.a=d},
axK:function axK(d,e,f){this.c=d
this.d=e
this.a=f},
bcu:function bcu(){this.c=this.a=this.d=null},
d7y:function d7y(d,e){this.a=d
this.b=e},
d7A:function d7A(d,e){this.a=d
this.b=e},
d7z:function d7z(d){this.a=d},
hi9(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
hia(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
hi8(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
fVS(d){var w
if(new B.a3(B.a(d.split("\n"),x.s),new C.f_s(),x.cc).gH(0)<3)w=d.length>100&&A.a.q(d,"\n")
else w=!0
return w},
hHb(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.hi8(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
anH:function anH(d,e){this.a=d
this.b=e},
GT:function GT(d,e){this.a=d
this.b=e},
qM:function qM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f_s:function f_s(){},
amZ:function amZ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAc:function aAc(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=!1
_.x=g
_.y=h
_.Q=_.z=null
_.as=$
_.bq$=i
_.a5$=j
_.c=_.a=null},
dQt:function dQt(d,e){this.a=d
this.b=e},
dQk:function dQk(d){this.a=d},
dQm:function dQm(){},
dQn:function dQn(d,e){this.a=d
this.b=e},
dQo:function dQo(d){this.a=d},
dQp:function dQp(){},
dQq:function dQq(d,e){this.a=d
this.b=e},
dQr:function dQr(d){this.a=d},
dQs:function dQs(d){this.a=d},
dQl:function dQl(d,e){this.a=d
this.b=e},
dQA:function dQA(d,e){this.a=d
this.b=e},
dQx:function dQx(){},
dQy:function dQy(d,e){this.a=d
this.b=e},
dQz:function dQz(d,e){this.a=d
this.b=e},
dQw:function dQw(d,e){this.a=d
this.b=e},
dQv:function dQv(d,e){this.a=d
this.b=e},
dQC:function dQC(d){this.a=d},
dQB:function dQB(d){this.a=d},
dQj:function dQj(d,e){this.a=d
this.b=e},
dQi:function dQi(d,e){this.a=d
this.b=e},
dQD:function dQD(d,e){this.a=d
this.b=e},
dQu:function dQu(d,e){this.a=d
this.b=e},
dQg:function dQg(d){this.a=d},
dQh:function dQh(d){this.a=d},
aI5:function aI5(){},
c3p(d){var w=0,v=B.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$c3p=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){u=D.OF
w=1
break}w=3
return B.b(B.au(),$async$c3p)
case 3:r=f
q=A.a.i(d.toLowerCase())
t=B.aR(J.q(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.OF
w=1
break}try{q=B.Y(x.f.a(A.Q.aC(0,t,null)),x.N,x.z)
p=J.y(q.h(0,"contacts"),!0)
o=J.y(q.h(0,"calendar"),!0)
n=J.y(q.h(0,"calls"),!0)
q=J.y(q.h(0,"allGrantedOnce"),!0)
u=new C.Tb(p,o,n,q)
w=1
break}catch(l){s=B.a5(l)
$.ak.$1("[helper-perms] load: "+B.t(s))
u=D.OF
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$c3p,v)},
an_(d,e){var w=0,v=B.j(x.H),u
var $async$an_=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(A.a.i(d).length===0){w=1
break}w=4
return B.b(B.au(),$async$an_)
case 4:w=3
return B.b(g.an("String","ngmy_helper_permissions_v1_"+A.a.i(d.toLowerCase()),A.Q.ak(e.ad(),null)),$async$an_)
case 3:case 1:return B.h(u,v)}})
return B.i($async$an_,v)},
c3o(d){var w=0,v=B.j(x.gp),u,t
var $async$c3o=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=new C.Tb(!0,!0,!0,!0)
w=3
return B.b(C.an_(d,t),$async$c3o)
case 3:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c3o,v)},
h0u(d){var w=A.a.i(d.toLowerCase()),v=B.ad("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=B.ad("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=B.ad("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=B.ad("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
h0s(d){var w=B.ad("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
Tb:function Tb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
byK(d,e,f,g,h){var w=0,v=B.j(x.H),u,t,s
var $async$byK=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return B.b(C.aWv(h),$async$byK)
case 3:if(j){w=1
break}w=4
return B.b(C.amS(h),$async$byK)
case 4:if(d.e==null){w=1
break}t=B.pW(d,!0)
t.toString
s=B.da()
s.b=B.nQ(new C.frO(g,e,f,s),!1,!1)
t.lk(0,s.b6())
case 1:return B.h(u,v)}})
return B.i($async$byK,v)},
frO:function frO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frN:function frN(d){this.a=d},
Xj:function Xj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
axc:function axc(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cN$=d
_.aX$=e
_.c=_.a=null},
d59:function d59(d){this.a=d},
d5a:function d5a(d,e,f){this.a=d
this.b=e
this.c=f},
d5f:function d5f(){},
d5e:function d5e(d){this.a=d},
d5b:function d5b(d){this.a=d},
d5c:function d5c(){},
d5d:function d5d(d){this.a=d},
aH_:function aH_(){},
hhD(d){var w=A.a.i(d),v=B.ad("[^A-Z0-9]",!0,!1,!1,!1),u=B.aK(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
hhC(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.ad("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.ad("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
anu(d){return C.hhA(d)},
hhA(d){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o
var $async$anu=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.eU("ngmy_local_deposit_qr_v1_"+A.a.i(d),null,!1,A.bE),$async$anu)
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
return B.i($async$anu,v)},
aXp(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aXp=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.hhD(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.eU("ngmy_local_deposit_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bE),$async$aXp)
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
return B.i($async$aXp,v)},
fOh(d){var w,v=A.a.i(d)
if(A.a.a_(v,"NGMYLOCALDEP1|")){w=A.a.i(A.a.aV(v,14))
return w.length===0?null:w}return null},
hhB(d,e,f){var w=A.a.i(f)
if(w.length===0)return!1
return A.d.bc(e,new C.c5c(A.a.i(d.toLowerCase()),w))},
fOi(d,e,f,g,h){var w,v,u=J.a4(g),t=u.h(g,"lockedToEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=A.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.pj(!1,0,y.u)
if(s!==A.a.i(f.toLowerCase()))return new C.pj(!1,0,y.j)
v=A.a.i(h)
if(v.length===0)return new C.pj(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.pj(!1,0,"Verification code does not match this deposit.")
if(!C.hhB(e,d,w))return new C.pj(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
fyv(d,e){var w,v,u="amount",t=J.a4(d),s=t.h(d,"redeemedBy")
if(A.a.i(J.k(s==null?"":s)).length!==0)return D.dgU
s=t.h(d,"lockedToEmail")
w=A.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=A.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){B.aQ(t.h(d,u))
return new C.LL(!0,!1,!1,!0)}if(w!==A.a.i(e.toLowerCase())){B.aQ(t.h(d,u))
return new C.LL(!0,!1,!0,!1)}B.aQ(t.h(d,u))
return new C.LL(!0,!1,!1,!1)},
c5i(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$c5i=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=C.fOh(d)
if(s==null){u=D.OH
w=1
break}w=3
return B.b(C.anu(s),$async$c5i)
case 3:t=g
if(t==null){u=D.OH
w=1
break}u=C.fyv(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c5i,v)},
aXr(d,e){var w=0,v=B.j(x.J),u,t,s
var $async$aXr=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aXp(d),$async$aXr)
case 3:s=g
if(s==null||s.length===0){u=D.OH
w=1
break}w=4
return B.b(C.anu(s),$async$aXr)
case 4:t=g
if(t==null){u=D.OH
w=1
break}u=C.fyv(t,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aXr,v)},
c5j(d,e,f,g,h){var w=0,v=B.j(x.D),u,t
var $async$c5j=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aXp(d),$async$c5j)
case 3:t=j
if(t==null||t.length===0){u=new C.pj(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.Tw(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c5j,v)},
Tw(d,e,f,g,h){return C.hhE(d,e,f,g,h)},
hhE(a2,a3,a4,a5,a6){var w=0,v=B.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Tw=B.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.fOh(a4)
if(a0==null){u=new C.pj(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return B.b(C.anu(a0),$async$Tw)
case 3:k=a8
if(k==null){u=new C.pj(!1,0,y.m)
w=1
break}j=C.fyv(k,a5)
if(j.b){u=new C.pj(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.pj(!1,0,y.u)
w=1
break}if(j.c){u=new C.pj(!1,0,y.j)
w=1
break}i=C.fOi(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=B.aQ(J.q(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.pj(!1,0,"Invalid deposit amount.")
w=1
break}r=new B.N(Date.now(),0,!1).a4().aa()
q=A.a.i(a5.toLowerCase())
t=5
w=8
return B.b(B.eU("ngmy_local_deposit_qr_v1_"+A.a.i(a0),null,!1,A.bE),$async$Tw)
case 8:p=a8
if(p==null){u=new C.pj(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.q(p,"redeemedBy")
if(A.a.i(J.k(g==null?"":g)).length!==0){u=new C.pj(!1,0,"This deposit code was already used.")
w=1
break}o=C.fOi(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=A.a.i(a0)
f=x.N
e=x.z
n=B.dP(p,f,e)
J.aE(n,"redeemedBy",q)
J.aE(n,"redeemedAt",r)
w=9
return B.b(B.hr("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,A.cy,null),$async$Tw)
case 9:n=J.q(p,"shortCode")
m=A.a.i(J.k(n==null?"":n))
w=J.aa(m)!==0?10:11
break
case 10:w=12
return B.b(B.hr("ngmy_local_deposit_code_v1_"+A.a.i(m).toUpperCase(),B.D(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,A.cy,null),$async$Tw)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=B.a5(a1)
$.ak.$1("[local deposit qr] redeem: "+B.t(l))
u=new C.pj(!1,0,"Could not apply deposit. Check connection and try again.")
w=1
break
w=7
break
case 4:w=2
break
case 7:u=new C.pj(!0,h,null)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Tw,v)},
LL:function LL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
pj:function pj(d,e,f){this.a=d
this.b=e
this.c=f},
c5c:function c5c(d,e){this.a=d
this.b=e},
c5q(d,e){var w
B.fEi(d,e,!1)
B.qd(d.a,d.d,!0,!1)
w=A.a.i("")
if(w.length!==0)B.Bv(!0,!1,d.d,w)},
a5f(d,e){if(d==null)return!1
return B.by(d)===e.gcc()&&B.bC(d)===e.gcb()&&B.bN(d)===e.gcp()},
hhL(d){var w=B.ds(d)*60+B.hy(d)
if(w<10)return 0
if(w>=30)return 20
return 15},
fOo(d){if(B.ds(d)>=12)return!1
if(B.mP(d)===6||B.mP(d)===7)return!1
return!0},
c5t(d){var w=d.c?d.bP():d
return w.cT(B.bY(B.by(w),B.bC(w),B.bN(w),12,0,0,0,0))},
fyz(d,e){var w,v,u,t=d.gB7()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a5f(d.fx,e)&&d.fy>0.0001)return A.k.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bP()
if(!C.c5t(w))return 0
v=B.bY(e.gcc(),e.gcb(),e.gcp(),12,0,0,0,0)
if(!e.cT(v))return t
if(!e.ca(w))return 0
u=A.o.aj(v.bv(w).a,1000)
if(u<=0)return t
return A.k.D(t*(A.o.D(A.o.aj(e.bv(w).a,1000),0,u)/u),0,t)},
fyy(d,e){var w,v,u,t,s,r,q,p=new B.N(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a5f(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bP():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!A.d.bc(e,new C.c5p(s))&&C.c5t(t)){r=d.gB7()
v=r>0
if(v){q=new B.cP(s,d.a,r,A.fy,A.eW,"Clock-in daily earnings (local)",null,null,A.cc,p)
C.c5q(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a5f(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a5f(o,p)&&!C.c5t(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
c5p:function c5p(d){this.a=d},
hvY(d){var w,v,u=d.k4,t=u==null?null:A.a.i(u)
if(t!=null&&t.length!==0)return t
w=A.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=A.a.i(d.a)
if(A.a.q(v,"@"))return A.d.gI(v.split("@"))
return"Member"},
hM7(d,e,f,g,h,i){if(!f.w)return B.f2(null,x.H)
return B.hl(d,new C.anv(f,e,i,g,h,null),!0,null,x.H)},
fSA(d){var w,v,u=d.c?d.bP():d,t=B.ds(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+B.bC(u)+"/"+B.bN(u)+"/"+B.by(u)+" \xb7 "+w+":"+A.a.aU(A.o.u(B.hy(u)),2,"0")+" "+v},
fZo(d){var w=d.x
if(w===A.dk)return"Processing"
if(w===A.kc)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
hDN(d){var w=d.f,v=A.a.i(w==null?"":w),u=v.toLowerCase()
if(A.a.q(u,"clock-in daily earnings")||A.a.q(u,"clock-in earnings"))return"Clock-in completed"
if(A.a.q(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===A.fc)return"Deposit"
if(w===A.eA)return"Withdrawal"
return v.length!==0?v:w.b},
hvD(d){var w=d.d,v=w===A.fc||w===A.nG||w===A.fy||w===A.jN,u=d.x
if(u===A.dk)return w===A.eA?-d.c:0
if(u!==A.cc)return 0
w=d.c
return v?w:-w},
hEj(d,e){var w,v,u,t,s,r,q=B.z(d,x.o)
A.d.aY(q,new C.fc9())
w=B.Q(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,B.J)(q),++t,v=r){s=q[t]
r=v-C.hvD(s)
if(r<0)r=0
w.m(0,s.a,new B.bjJ(v,r))}return w},
anv:function anv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAy:function aAy(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
e_3:function e_3(d){this.a=d},
e_K:function e_K(d){this.a=d},
e_L:function e_L(d){this.a=d},
e_M:function e_M(d){this.a=d},
e_N:function e_N(d){this.a=d},
e_s:function e_s(d,e){this.a=d
this.b=e},
e_t:function e_t(){},
e_u:function e_u(d){this.a=d},
e_v:function e_v(){},
e_w:function e_w(d){this.a=d},
e_x:function e_x(d,e,f){this.a=d
this.b=e
this.c=f},
e_y:function e_y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e_n:function e_n(d,e){this.a=d
this.b=e},
e_4:function e_4(d,e,f){this.a=d
this.b=e
this.c=f},
e_o:function e_o(){},
e_p:function e_p(){},
e_q:function e_q(d){this.a=d},
e_r:function e_r(){},
e_8:function e_8(d,e){this.a=d
this.b=e},
e_9:function e_9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e_h:function e_h(){},
e_e:function e_e(d){this.a=d},
e_f:function e_f(d,e){this.a=d
this.b=e},
e_g:function e_g(d,e){this.a=d
this.b=e},
e_i:function e_i(d){this.a=d},
e_j:function e_j(d,e,f){this.a=d
this.b=e
this.c=f},
e_k:function e_k(d){this.a=d},
e_m:function e_m(d){this.a=d},
e_l:function e_l(d){this.a=d},
e_a:function e_a(d){this.a=d},
e_b:function e_b(d,e,f){this.a=d
this.b=e
this.c=f},
e_C:function e_C(){},
e_D:function e_D(){},
e_H:function e_H(d){this.a=d},
e_A:function e_A(d){this.a=d},
e_I:function e_I(d){this.a=d},
e_z:function e_z(d){this.a=d},
e_J:function e_J(d){this.a=d},
e_E:function e_E(d){this.a=d},
e_F:function e_F(d){this.a=d},
e_G:function e_G(d){this.a=d},
e_B:function e_B(d){this.a=d},
e_7:function e_7(d){this.a=d},
e_6:function e_6(d){this.a=d},
e_5:function e_5(d){this.a=d},
e_d:function e_d(d,e){this.a=d
this.b=e},
e_c:function e_c(d,e){this.a=d
this.b=e},
axW:function axW(d,e,f,g,h,i,j,k,l,m){var _=this
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
d9l:function d9l(){},
d9m:function d9m(){},
d9n:function d9n(d,e,f){this.a=d
this.b=e
this.c=f},
d9k:function d9k(d){this.a=d},
d9o:function d9o(d,e){this.a=d
this.b=e},
d9j:function d9j(d){this.a=d},
axV:function axV(d,e,f,g,h,i,j,k,l,m){var _=this
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
bdd:function bdd(d,e){var _=this
_.f=_.e=_.d=$
_.cN$=d
_.aX$=e
_.c=_.a=null},
d9e:function d9e(d){this.a=d},
d9f:function d9f(d){this.a=d},
d9g:function d9g(d){this.a=d},
d9h:function d9h(){},
d9i:function d9i(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
d9d:function d9d(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d9c:function d9c(d){this.a=d},
b72:function b72(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
b71:function b71(d,e,f){this.b=d
this.d=e
this.a=f},
b70:function b70(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
axX:function axX(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
axY:function axY(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
d9F:function d9F(){},
d9G:function d9G(){},
d9H:function d9H(){},
d9r:function d9r(d){this.a=d},
d9q:function d9q(d,e){this.a=d
this.b=e},
d9p:function d9p(d,e){this.a=d
this.b=e},
d9C:function d9C(d,e){this.a=d
this.b=e},
d9E:function d9E(d,e){this.a=d
this.b=e},
d9D:function d9D(d,e){this.a=d
this.b=e},
d9B:function d9B(){},
d9A:function d9A(d){this.a=d},
d9z:function d9z(){},
d9u:function d9u(d){this.a=d},
d9v:function d9v(){},
d9w:function d9w(d){this.a=d},
d9x:function d9x(d){this.a=d},
d9t:function d9t(){},
d9y:function d9y(d){this.a=d},
d9s:function d9s(d){this.a=d},
b6t:function b6t(d){this.a=d},
fc9:function fc9(){},
bqB:function bqB(d,e){this.b=d
this.a=e},
aHf:function aHf(){},
bsu:function bsu(){},
hAq(d,e,f,g,h,i,j,k){var w,v=A.a.i(j.toLowerCase())
A.d.bk(d,new C.f76(v,g))
w=B.Q(x.N,x.z)
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
A.d.G(d,w)},
aLb(d){var w,v=J.a4(d),u=B.aQ(v.h(d,"matchesTotal")),t=u==null?null:A.k.L(u)
if(t==null)t=1
v=B.aQ(v.h(d,"matchesPlayed"))
w=v==null?null:A.k.L(v)
return A.o.D(t-(w==null?0:w),0,t)},
hKW(d,e){var w=B.S(e).k("a3<1>")
w=B.z(new B.a3(e,new C.fmk(A.a.i(d.toLowerCase())),w),w.k("E.E"))
return w},
aeq(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(C.aLb(u)<=0){t=J.cB(u)
t.m(u,"status","finished")
t.m(u,"seriesStatus","complete")}}},
hD1(d,e){var w,v,u,t=J.a4(d),s=t.h(d,"status")
if(!J.y(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.y(s==null?"":s,"complete"))return!1
if(C.aLb(d)<=0)return!1
w=A.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=A.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=A.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aLb(d)>0},
hD0(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a4(d),h=B.aQ(i.h(d,"matchesTotal")),g=h==null?null:A.k.L(h)
if(g==null)g=1
h=B.aQ(i.h(d,"matchesPlayed"))
w=h==null?null:A.k.L(h)
v=(w==null?0:w)+1
u=A.a.i(e.toLowerCase())
t=i.h(d,"sessionState")
h=x.f
if(!h.b(t))return"Game "+v+" of "+g+" \u2014 tap Join room when you are ready"
s=x.N
r=x.z
q=B.Y(t,s,r)
p=q.h(0,"inGame")
o=h.b(p)?B.Y(p,s,r):B.Q(s,r)
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
hAp(d,e){var w
C.aeq(e)
w=B.S(e).k("a3<1>")
w=B.z(new B.a3(e,new C.f75(A.a.i(d.toLowerCase())),w),w.k("E.E"))
return w},
tf(d,e){var w,v,u
for(w=J.aW(d);w.C();){v=w.gT(w)
u=J.q(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
hxd(d,e,f){var w,v,u,t="fromName",s=J.a4(f),r=s.h(f,"fromEmail"),q=A.a.i(J.k(r==null?"":r).toLowerCase())
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
fE3(d,e,f){var w,v,u,t,s=A.a.i(e.toLowerCase()),r=J.a4(d),q=r.h(d,"fromEmail"),p=A.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=A.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.hxd(x.f.b(u)?B.Y(u,r,q):B.Q(r,q),v,d)
if((t.length===0||A.a.q(t,"@"))&&f!=null){t=J.q(f,v)
if(t==null)t=""}if(t.length===0||A.a.q(t,"@"))return"Opponent"
return t},
bxC(){var w=0,v=B.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bxC=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.au(),$async$bxC)
case 7:r=e
q=B.aR(J.q(r.a,"all_users"))
if(q==null||q.length===0){k=x.N
u=B.Q(k,k)
w=1
break}p=A.Q.aC(0,q,null)
if(!x.j.b(p)){k=x.N
u=B.Q(k,k)
w=1
break}k=x.N
o=B.Q(k,k)
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
u=B.Q(k,k)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bxC,v)},
bwL(d,e){var w=0,v=B.j(x.N),u,t,s,r
var $async$bwL=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return B.b(C.bxC(),$async$bwL)
case 3:u=t.fE3(s,r,g)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bwL,v)},
J2(d,e,f){var w=0,v=B.j(x.h),u,t,s,r,q,p
var $async$J2=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=$.fX4.h(0,q)
if(p!=null){t=new B.N(Date.now(),0,!1).bv(p)
t=t.a>B.dA(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.fX4.m(0,q,new B.N(Date.now(),0,!1))
w=5
return B.b(B.OK(A.c3,q),$async$J2)
case 5:case 4:s=$.fX3.h(0,q)
if(s==null){u=C.tf(e,q)
w=1
break}r=C.tf(B.bwR(e,B.a([s],x._)),q)
if(r!=null)B.fGi(e,r)
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$J2,v)},
hL6(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=J.a4(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"status",f)
t.m(u,"respondedAt",new B.N(Date.now(),0,!1).aa())
return}}},
hu3(d,e){var w,v,u,t,s,r,q=J.a4(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
p=q.h(d,"fromEmail")
w=A.a.i(J.k(p==null?"":p).toLowerCase())
p=q.h(d,"toEmail")
v=A.a.i(J.k(p==null?"":p).toLowerCase())
q=q.h(d,"fromName")
u=J.k(q==null?w:q)
switch(o){case"tic_tac_go":q=x.N
return B.D(["ttt",B.bS(9,"",!1,q),"turnEmail",w,"playerXEmail",w,"playerXName",u,"playerOEmail",v,"playerOName",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],q,x.z)
case"connect_four_pro":t=J.e0(6,x.L)
for(q=x.S,s=0;s<6;++s)t[s]=B.bS(7,0,!1,q)
return B.D(["c4",t,"c4Turn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
case"checkers_deluxe":t=J.e0(8,x.L)
for(q=x.S,r=0;r<8;++r)t[r]=B.ih(8,new C.eY9(r),!0,q)
return B.D(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return B.D(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
hAo(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=J.a4(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"status","active")
t.m(u,"respondedAt",new B.N(Date.now(),0,!1).aa())
r=C.hu3(u,f)
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
m=B.Q(x.N,x.z)
if(w)m.m(0,o,!1)
if(s)m.m(0,n,!1)
r.m(0,"inGame",m)
t.m(u,"sessionState",r)
t.m(u,"sessionUpdatedAt",new B.N(Date.now(),0,!1).aa())
return}}},
hL4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=J.a4(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)!==e)continue
w=B.aQ(t.h(u,i))
w=w==null?null:A.k.L(w)
r=(w==null?0:w)+1
t.m(u,i,r)
w=B.aQ(t.h(u,"matchesTotal"))
q=w==null?null:A.k.L(w)
if(r>=(q==null?1:q)){t.m(u,"status","finished")
t.m(u,"seriesStatus","complete")}else{p=t.h(u,h)
if(x.f.b(p)){w=x.N
s=x.z
o=B.Y(p,w,s)
o.m(0,"gameOver",!1)
o.W(0,"startAt")
n=o.h(0,"player1Email")
if(n==null)n=o.h(0,"playerXEmail")
m=A.a.i(J.k(n==null?"":n).toLowerCase())
n=o.h(0,"player2Email")
if(n==null)n=o.h(0,"playerOEmail")
l=A.a.i(J.k(n==null?"":n).toLowerCase())
k=B.Q(w,s)
if(m.length!==0)k.m(0,m,!1)
if(l.length!==0)k.m(0,l,!1)
o.m(0,"inGame",k)
w=t.h(u,"gameId")
j=J.k(w==null?"":w)
if(j==="memory"){o.m(0,"memoryMatched",B.a([],x.t))
o.W(0,"memorySeed")}else if(j==="pattern")o.W(0,"patternSeed")
t.m(u,h,o)}}t.m(u,"sessionUpdatedAt",new B.N(Date.now(),0,!1).aa())
return}},
fGh(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=J.a4(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"sessionState",B.Y(f,x.N,x.z))
t.m(u,"sessionUpdatedAt",new B.N(Date.now(),0,!1).aa())
return}}},
fld(d){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$fld=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aeq(d)
t=$.fDt
if(t==null)s=$.fDt=B.OK(A.c3,null).f4(new C.fle())
else s=t
w=3
return B.b(s,$async$fld)
case 3:r=f
if(r==null){u=B.bi(new B.I(d,new C.flf(),B.S(d).k("I<1,@>")),!0,x.P)
w=1
break}q=B.bwR(d,r)
A.d.a8(d)
A.d.v(d,q)
u=q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fld,v)},
aer(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aer=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:C.aeq(d)
t=B.S(d).k("I<1,a0<n,@>>")
t=B.z(new B.I(d,new C.fj9(),t),t.k("ai.E"))
w=3
return B.b(B.OK(t,null),$async$aer)
case 3:s=f
if(s==null){u=!1
w=1
break}r=B.bwR(d,s)
A.d.a8(d)
A.d.v(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aer,v)},
aM5(d,e,f){var w=0,v=B.j(x.y),u,t,s,r
var $async$aM5=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:C.fGh(d,e,f)
t=C.tf(d,e)
if(t==null){u=!1
w=1
break}w=3
return B.b(B.OK(B.a([B.Y(t,x.N,x.z)],x._),e),$async$aM5)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.tf(s,e)
if(r!=null)B.fGi(d,r)
u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aM5,v)},
hHT(d,e,f){var w
C.fGh(d,e,f)
w=$.fDh.h(0,e)
if(w!=null)w.a9(0)
$.fDh.m(0,e,B.cV(A.lg,new C.fja(e,d)))},
fyh(d,e){return new C.aWc(!0,d,"NGMY",A.a.i(e.toLowerCase()),null,!0)},
f76:function f76(d,e){this.a=d
this.b=e},
fmk:function fmk(d){this.a=d},
f75:function f75(d){this.a=d},
eY9:function eY9(d){this.a=d},
fle:function fle(){},
flf:function flf(){},
fj9:function fj9(){},
fja:function fja(d,e){this.a=d
this.b=e},
aWc:function aWc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
hLx(d,e,f){return B.c0(A.K,new C.fng(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
fng:function fng(d,e){this.a=d
this.b=e},
Y6:function Y6(d,e,f){this.c=d
this.d=e
this.a=f},
aAl:function aAl(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
dUy:function dUy(d){this.a=d},
dUB:function dUB(d){this.a=d},
dUC:function dUC(d){this.a=d},
dUA:function dUA(d){this.a=d},
dUD:function dUD(d){this.a=d},
dUE:function dUE(d,e){this.a=d
this.b=e},
dUz:function dUz(d,e){this.a=d
this.b=e},
hGr(d){var w,v,u,t=A.a.i(d)
if(t.length===0)return A.hW
w=t.toLowerCase()
v=B.ad("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return A.hW
v=Date.now()
u=C.hwy(w,new B.N(v,0,!1))
v=x.N
return B.a([new B.k7("calendar",B.D(["title",C.hwx(t,w),"start",u.aa(),"end",u.bL(36e8).aa(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
hwx(d,e){var w,v,u,t,s,r=B.ad("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cw(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return A.a.i(w==null?"":w)}u=B.ad("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cw(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.fXO(A.a.i(t))}s=B.ad("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cw(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.fXO(A.a.i(t))}if(A.a.q(e,"meeting"))return"Meeting"
if(A.a.q(e,"appointment"))return"Appointment"
return"NGMY Event"},
fXO(d){var w
if(d.length===0)return d
w=A.a.fN(d,B.ad("\\s+",!0,!1,!1,!1))
return new B.I(w,new C.f6i(),B.S(w).k("I<1,n>")).aH(0," ")},
hwy(d,e){var w,v,u,t,s,r,q,p,o=B.bY(B.by(e),B.bC(e),B.bN(e),0,0,0,0,0)
if(A.a.q(d,"tomorrow"))o=o.bL(864e8)
else if(!A.a.q(d,"today"))for(w=D.ay3.gdH(D.ay3),w=w.gaf(w);w.C();){v=w.gT(w)
u=v.a
if(B.dk(d,u,0)){t=C.hvC(o,v.b)
o=t
break}}s=B.ad("\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cw(d)
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
q=0}return B.bY(B.by(o),B.bC(o),B.bN(o),r,q,0,0,0)},
hvC(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(B.mP(w)===e){u=!0
if(v<=0){t=d.bL(36e8)
s=w.a
if(s>=t.gbm())u=s===t.gbm()&&w.b<t.gcB()}}else u=!1
if(u)return w
w=w.bL(r)}return d.bL(r)},
f6i:function f6i(){},
hGs(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=A.a.i(d)
if(j.length===0)return A.hW
w=j.toLowerCase()
if(A.a.q(w,k))v=k
else v=A.a.q(w,"imessage")||A.a.q(w,"i message")?"sms":l
u=B.ad("(?:saying|say|message|text|tell(?:ing)?)\\s+(.+)$",!1,!1,!1,!1).cw(j)
if(u!=null){t=u.b[1]
s=t==null?l:A.a.i(t)
if(s==null)s=""
t=B.ad("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
s=A.a.i(B.aK(s,t,""))
t=s.length
r=t>=2&&t<500?s:l}else r=l
q=C.hsZ(w,j)
if(q==null||q.length===0)return A.hW
t=B.ad("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=B.ad("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return B.a([new B.k7("call",B.D(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=B.D(["name",q],t,t)
if(r!=null)m.m(0,"body",r)
return B.a([new B.k7(n,m)],x.Z)}if(p){t=x.N
return B.a([new B.k7("call",B.D(["name",q],t,t))],x.Z)}return A.hW},
hsZ(d,e){var w,v,u,t,s,r,q=[B.ad("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),B.ad("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),B.ad("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
for(w=0;w<3;++w){v=q[w].cw(d)
if(v==null)continue
u=v.b[1]
t=u==null?null:A.a.i(u)
if(t==null)t=""
u=B.ad("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
t=A.a.i(B.aK(t,u,""))
u=B.ad("\\s+saying\\s+.+$",!1,!1,!1,!1)
t=A.a.i(B.aK(t,u,""))
u=t.length
s=!1
if(u>=2)if(u<=50){u=B.ad("^\\d+$",!0,!1,!1,!1)
s=B.ad("\\s",!0,!1,!1,!1)
s=B.aK(t,s,"")
u=!u.b.test(s)}else u=s
else u=s
if(u)return C.hzM(t)}r=B.ad("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cw(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return A.a.i(u==null?"":u)}return null},
hzM(d){var w=A.a.fN(d,B.ad("\\s+",!0,!1,!1,!1))
return new B.I(w,new C.f6h(),B.S(w).k("I<1,n>")).aH(0," ")},
f6h:function f6h(){},
h0B(d){var w=new B.I(d,new C.flv(),B.S(d).k("I<1,a0<n,@>>")).bZ(0,new C.flw())
w=B.z(w,w.$ti.k("E.E"))
return w},
flv:function flv(){},
flw:function flw(){},
hGv(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return A.hW
w=A.a.i(d)
if(w.length===0)return A.hW
v=w.toLowerCase()
if(!(A.a.q(v,"send email")||A.a.q(v,"send an email")||A.a.q(v,"send a message to")||A.a.q(v,"email ")||A.a.q(v,"write an email")||A.a.q(v,"write email")))return A.hW
u=B.ad("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cw(w)
if(u==null)return A.hW
t=u.b[0]
t.toString
s=A.a.i(t)
r=B.ad("(?:subject|title)\\s*[:\\-]\\s*(.+)$",!1,!1,!1,!1).cw(w)
if(r!=null){t=r.b[1]
t.toString
q=A.a.i(t)}else q="Message from NGMY"
p=B.ad("(?:saying|that says|with message|message:|body:|write:|text:)\\s*(.+)$",!1,!1,!1,!1).cw(w)
if(p!=null){t=p.b[1]
t.toString
o=A.a.i(t)}else o=""
t=x.N
t=B.Q(t,t)
t.m(0,"to",s)
t.m(0,"subject",q)
if(o.length!==0)t.m(0,"body",o)
return B.a([new B.k7("send_email",t)],x.Z)},
hFH(d,e){var w
if(e)return d
w=J.dE(d,new C.ffz())
w=B.z(w,w.$ti.k("E.E"))
return w},
ffz:function ffz(){},
hHQ(d){switch(d){case"blackjack_vegas":return D.dkz
case"roulette_euro":return D.dkj
case"slots_jackpot":return D.dkq
case"poker_texas":return D.dkt
case"chess_royale":return D.dkk
case"connect_four_pro":return D.dkl
case"domino_block":return D.dkn
case"plinko_prizes":return D.dkv
case"spin_wheel":return D.dks
case"baccarat_punto":return D.dkm
case"craps_table":return D.dku
case"casino_war":return D.dko
case"bingo_live":return D.dkr
case"solitaire_klondike":return D.dky
case"backgammon_pro":return D.dki
case"billiards_snooker":return D.dkw
case"profit_solve":return D.dkx
default:return D.dkp}},
fj0(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=B.m(8)
v=B.H(A.aM,A.r,1.5)
u=B.a([new B.a9(0,A.G,A.x.j(0.35),A.e6,6)],x.V)
return B.p(p,B.at(B.U(A.lS,A.c.j(0.5),p,p,p,23.400000000000002),p,p,p),A.i,p,p,new B.o(p,p,v,w,u,D.bFt,A.n),p,74,p,p,p,p,p,52)}t=A.o.D(d,1,13)
s=t===1||t>=10||A.o.J(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][A.o.J(t,4)]
q=s?A.bR:A.M
w=B.m(8)
v=B.H(A.aJ,A.r,1)
u=B.a([new B.a9(0,A.G,A.x.j(0.28),A.e6,6)],x.V)
return B.p(p,B.u(B.a([new B.B(D.biP,B.d(D.cc5[t-1]+"\n"+r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,A.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),A.bd,B.at(B.d(r,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),A.bd],x.p),A.F,p,A.e,A.j,0,A.p),A.i,p,p,new B.o(A.hB,p,v,w,u,p,A.n),p,74,p,p,p,p,p,52)},
hIU(d,e){var w,v=null,u=B.m(18),t=B.H(A.aM,A.r,3),s=B.a([new B.a9(0,A.G,A.az.j(0.5),A.J,20)],x.V),r=B.S(e).k("I<1,ha>")
r=B.z(new B.I(e,new C.fkX(),r),r.k("ai.E"))
w=x.p
return B.u(B.a([B.p(v,B.u(B.a([D.eCU,A.ac,B.A(r,A.m,v,A.b5,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),A.i,v,v,new B.o(v,v,t,u,s,D.bFN,A.n),v,v,v,v,I.acJ,v,v,v),A.aC,B.dn(A.ain,D.eDs,d,B.bk(A.aM,v,v,v,A.dn,v,Ag.Vo,v,v,v,v,v))],w),A.m,v,A.e,A.j,0,A.p)},
ow:function ow(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
blI:function blI(d,e){this.b=d
this.a=e},
fkX:function fkX(){},
hil(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e0(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=B.bS(8,0,!1,w)
u=B.bS(9,"",!1,p)
t=x.t
s=B.a([],t)
r=B.a([],t)
t=B.a([0,0,0],t)
q=J.e0(6,o)
for(v=0;v<6;++v)q[v]=B.bS(7,0,!1,w)
return new C.anP(B.Q(p,x.z),n,u,s,r,t,q,new B.ao(A.aq,$.as()))},
hB4(d,e,f,g,h){var w=new C.f7B(f,h)
switch(d){case"checkers_deluxe":return C.hrL(h,g,e,w)
case"tic_tac_go":return C.hzV(h,g,e,w)
case"blackjack_vegas":return C.hr8(h,g,e,new C.f7v(w))
case"roulette_euro":return C.hyo(h,g,e,new C.f7w(w))
case"slots_jackpot":return C.hzb(h,g,e,new C.f7x(w))
case"billiards_snooker":return C.hxf(h,g,e,new C.f7y(w))
case"connect_four_pro":return C.hs7(h,g,e,w)
case"profit_solve":return C.hxi(h,g,e,new C.f7z(w))
default:return C.hrI(d,h,g,e,new C.f7A(w))}},
hrL(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.v3,A.L,w,w),u=B.m(12),t=B.H(D.Tv,A.r,8),s=B.a([new B.a9(0,A.G,A.x.j(0.4),A.J,16)],x.V)
return B.u(B.a([new B.B(A.fh,v,w),B.C(B.at(new B.fZ(1,B.p(w,B.bw(B.m(6),B.ig(!0,w,w,A.z,D.eem,new C.eVE(d,e,f,g),64,w,A.dJ,A.af,!1),A.ap),A.i,w,w,new B.o(w,w,t,u,s,w,A.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),A.m,w,A.e,A.j,0,A.p)},
hzV(d,e,f,g){var w=null
return B.u(B.a([new B.B(A.fh,B.d(d.c,w,w,w,w,w,w,D.v3,A.L,w,w),w),B.C(B.at(new B.fZ(1,B.co(new C.f6r(d,e,f,g)),w),w,w,w),1)],x.p),A.m,w,A.e,A.j,0,A.p)},
hr8(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.v3,A.L,v,v),t=x.p,s=B.a([],t),r=d.CW,q=d.ch
if(r)A.d.v(s,new B.I(q,new C.eV5(),B.S(q).k("I<1,r>")))
else A.d.v(s,B.a([C.fj0(q[0],!1),A.bp,C.fj0(0,!0)],t))
s=B.A(s,A.m,v,A.b5,A.j,0,v,v)
r=B.d("Total: "+d.a0x(d.ay),v,v,v,v,v,v,D.eys,v,v,v)
q=d.ay
w=B.S(q).k("I<1,r>")
q=B.z(new B.I(q,new C.eV6(),w),w.k("ai.E"))
q=B.cf(A.fz,q,A.by,6,6)
return B.u(B.a([new B.B(A.fh,u,v),D.eJ4,A.ar,s,A.aC,D.ePP,r,A.ar,q,A.bd,B.A(B.a([B.C(B.bJ(D.eDS,d.CW?v:new C.eV7(d,e,f,g),v),1),A.ab,B.C(B.bJ(D.eRX,new C.eV8(d,e,f,g),v),1)],t),A.m,v,A.e,A.j,0,v,v)],t),A.m,v,A.e,A.j,0,A.p)},
hyo(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.v3,A.L,w,w),u=d.cx,t=B.a([new B.a9(0,A.G,A.x.j(0.45),A.cv,16)],x.V)
t=B.a([new B.B(A.fh,v,w),B.p(w,B.b1(w,w,w,new C.blI(u,w),A.at),A.i,w,w,new B.o(w,w,w,w,t,w,A.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new B.B(A.lj,B.d("Result: "+B.t(v),w,w,w,w,w,w,D.en2,w,w,w),w))
t.push(A.ac)
t.push(B.cf(A.fz,B.ih(6,new C.f3I(d,e,f,g),!0,x.l),A.by,6,6))
return B.u(t,A.m,w,A.e,A.j,0,A.p)},
hzb(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.v3,A.L,w,w),u=d.db,t=B.S(u).k("I<1,n>")
u=B.z(new B.I(u,new C.f5A(),t),t.k("ai.E"))
return B.u(B.a([new B.B(A.fh,v,w),C.hIU(new C.f5B(d,e,f,g),u)],x.p),A.m,w,A.e,A.j,0,A.p)},
hxf(d,e,f,g){var w=null,v=B.d(d.c,w,w,w,w,w,w,D.v3,A.L,w,w),u=B.m(20),t=B.H(A.hR,A.r,12),s=x.V,r=B.a([new B.a9(0,A.G,A.x.j(0.45),A.dm,18)],s),q=x.p
return B.u(B.a([new B.B(A.fh,v,w),B.C(B.p(w,new B.am(A.W,w,A.a9,A.q,B.a([B.an(w,B.p(w,w,A.i,w,w,D.aQV,w,18,w,w,w,w,w,18),w,w,24,w,24,w),B.an(28,B.p(w,w,A.i,w,w,A.a6N,w,14,w,w,w,w,w,14),w,w,w,32,w,w),B.at(B.eO(A.C,d.dx,B.p(w,w,A.i,w,w,new B.o(A.aM,w,w,B.m(2),B.a([new B.a9(0,A.G,A.x.j(0.3),A.J,4)],s),w,A.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),A.i,w,w,new B.o(w,w,t,u,r,D.dQd,A.n),w,w,w,A.eV,w,w,w,w),1),B.mq(A.br,w,w,1,0,new C.f2s(d,f),d.dy),B.bJ(D.eIc,new C.f2t(d,e,g,f),w)],q),A.m,w,A.e,A.j,0,A.p)},
hs7(d,e,f,g){var w,v=null,u=B.d(d.c,v,v,v,v,v,v,D.v3,A.L,v,v),t=x.l,s=J.e0(7,t)
for(w=0;w<7;++w)s[w]=new B.bI(1,A.bt,B.aJ(v,B.u(B.ih(6,new C.eW4(d,w),!0,t),A.m,v,A.m_,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eW5(d,w,e,f,g),v,v,v,v,v,v,!1,A.ae),v)
return B.u(B.a([new B.B(A.fh,u,v),B.C(B.at(new B.fZ(1.1666666666666667,B.A(s,A.dD,v,A.e,A.j,0,v,v),v),v,v,v),1)],x.p),A.m,v,A.e,A.j,0,A.p)},
hxi(d,e,f,g){var w=null
return B.u(B.a([new B.B(A.fh,B.d(d.c,w,w,w,w,w,w,D.v3,A.L,w,w),w),B.d(""+d.a+"/"+d.b,w,w,w,w,w,w,A.ka,w,w,w),B.d(d.fy,w,w,w,w,w,w,D.aJJ,A.L,w,w),B.aI(w,A.T,!1,w,!0,A.q,w,B.aL(),d.id,w,w,w,w,w,2,D.bCo,A.z,!0,w,!0,w,!1,w,A.ad,w,w,w,w,w,A.dK,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.f2F(d,e,g,f),w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,A.dj,!0,A.a5,w,A.am,w,w,w,w),B.bJ(D.eGV,new C.f2G(d,e,g,f),w)],x.p),A.m,w,A.e,A.j,0,A.p)},
hrI(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gjw(),k=e.d
k=k==null?n:k.c
w=C.hHQ(d)
v=D.axT.h(0,d)
if(v==null)v=d
m=B.d(m,n,n,n,n,n,n,A.mR,A.L,n,n)
u=B.m(22)
t=w.a
s=w.b
r=B.H(s.j(0.5),A.r,2)
q=B.a([new B.a9(0,A.G,w.c.j(0.35),A.eO,24)],x.V)
p=B.d(w.e,n,n,n,n,n,n,W.QB,n,n,n)
o=B.d(v,n,n,n,n,n,n,A.op,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+B.t(k)+" at the table"
k=x.p
q=B.C(B.at(B.p(n,B.u(B.a([p,A.U,o,A.P,B.d(l,n,n,n,n,n,n,B.l(n,n,A.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),A.d1,B.U(w.f,s.j(0.85),n,n,n,48)],k),A.m,n,A.b5,A.j,0,A.p),A.i,n,n,new B.o(n,n,r,u,q,new B.a7(A.b4,A.bc,A.w,t,n,n),A.n),n,n,n,A.eV,A.a8,n,n,1/0),n,n,n),1)
return B.u(B.a([m,A.ac,q,A.P,new B.a8(1/0,n,B.bJ(D.eR9,new C.eVy(f,e,g,h),B.bk(s,n,n,n,A.d.gI(t).iX()>0.4?A.x:A.c,n,A.c9,n,n,n,n,n)),n)],k),A.m,n,A.e,A.j,0,A.p)},
D6:function D6(d,e){this.a=d
this.b=e},
anP:function anP(d,e,f,g,h,i,j,k){var _=this
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
c6R:function c6R(){},
c6S:function c6S(){},
c6Q:function c6Q(){},
c6T:function c6T(){},
c6P:function c6P(){},
c6V:function c6V(){},
c6W:function c6W(){},
c6O:function c6O(d){this.a=d},
c6U:function c6U(){},
c6N:function c6N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7B:function f7B(d,e){this.a=d
this.b=e},
f7v:function f7v(d){this.a=d},
f7w:function f7w(d){this.a=d},
f7x:function f7x(d){this.a=d},
f7y:function f7y(d){this.a=d},
f7z:function f7z(d){this.a=d},
f7A:function f7A(d){this.a=d},
eVE:function eVE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eVD:function eVD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f6r:function f6r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6q:function f6q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f6p:function f6p(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eV5:function eV5(){},
eV6:function eV6(){},
eV7:function eV7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eV8:function eV8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3I:function f3I(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3H:function f3H(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f5A:function f5A(){},
f5B:function f5B(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2s:function f2s(d,e){this.a=d
this.b=e},
f2t:function f2t(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eW5:function eW5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eW4:function eW4(d,e){this.a=d
this.b=e},
f2F:function f2F(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2G:function f2G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eVy:function eVy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hDO(d){var w,v=B.S(d).k("a3<1>")
v=B.oG(new B.a3(d,new C.fbi(),v),120,v.k("E.E"))
w=B.cy(v,new C.fbj(),B.a2(v).k("E.E"),x.N).aH(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fbi:function fbi(){},
fbj:function fbj(){},
aeC(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
aoI:function aoI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aB3:function aB3(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
eo6:function eo6(){},
aIL:function aIL(){},
hgm(){var w=$.GJ
if(w<=0)return;--w
$.GJ=w
if(w===0){w=$.fNJ
if(w!=null)w.$0()}},
c2u(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
amx(d){var w=0,v=B.j(x.H),u,t
var $async$amx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=A.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.fyc.G(0,t)
w=4
return B.b(B.au(),$async$amx)
case 4:w=3
return B.b(f.an("Bool","ngmy_game_free_play_used_"+A.a.i(t.toLowerCase()),!0),$async$amx)
case 3:case 1:return B.h(u,v)}})
return B.i($async$amx,v)},
amw(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$amw=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(C.c2u(d)){u=!0
w=1
break}t=A.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.fyc.q(0,t)){u=!1
w=1
break}w=3
return B.b(B.au(),$async$amw)
case 3:s=f
r=A.a.i(t.toLowerCase())
r=B.ko(J.q(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amw,v)},
T8(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$T8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.au(),$async$T8)
case 7:r=e
q=B.aR(J.q(r.a,"ngmy_helper_ai_usage_v1"))
if(q==null||A.a.i(q).length===0){u=B.Q(x.N,x.z)
w=1
break}p=A.Q.aC(0,q,null)
if(x.f.b(p)){o=B.Y(p,x.N,x.z)
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
case 6:u=B.Q(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$T8,v)},
aWu(d){return C.hgz(d)},
hgz(d){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$aWu=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.au(),$async$aWu)
case 6:s=f
w=7
return B.b(s.an("String","ngmy_helper_ai_usage_v1",A.Q.ak(d,null)),$async$aWu)
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
return B.i($async$aWu,v)},
aWs(d,e){var w,v,u,t,s=J.q(d,A.a.i(e.toLowerCase()))
if(!x.f.b(s))return new B.abm(0,new B.N(Date.now(),0,!1))
w=J.a4(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=B.bf(u==null?"":u)
if(t==null)t=new B.N(Date.now(),0,!1)
return new B.abm(typeof v=="number"?A.o.D(A.k.L(v),0,999999):0,t)},
aWt(d,e){if(A.o.aj(e.bv(d.b).a,36e8)>=24)return new B.abm(0,e)
return d},
c3_(d,e){var w=0,v=B.j(x.S),u,t,s
var $async$c3_=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return B.b(C.T8(),$async$c3_)
case 3:t=g
s=Date.now()
u=A.o.D(e-C.aWt(C.aWs(t,d),new B.N(s,0,!1)).a,0,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c3_,v)},
c30(d,e){var w=0,v=B.j(x.cJ),u,t,s,r
var $async$c30=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(A.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return B.b(C.T8(),$async$c30)
case 3:t=g
s=Date.now()
r=C.aWt(C.aWs(t,d),new B.N(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bL(864e8)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c30,v)},
hgA(d){var w,v,u,t=d.a,s=A.o.aj(t,1e6)
if(s<=0)return"0s"
w=A.o.aj(t,36e8)
v=A.o.aj(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+A.a.aU(A.o.u(v),2,"0")+"m "+A.a.aU(A.o.u(u),2,"0")+"s"
if(v>0)return""+v+"m "+A.a.aU(A.o.u(u),2,"0")+"s"
return""+u+"s"},
aWv(d){var w=0,v=B.j(x.y),u,t,s,r,q,p,o
var $async$aWv=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return B.b(C.T8(),$async$aWv)
case 3:t=p.aWt(o.aWs(f,d),new B.N(Date.now(),0,!1))
w=4
return B.b(B.au(),$async$aWv)
case 4:s=f
r=A.a.i(d.toLowerCase())
q=t.b.a4().aa()
u=B.ko(J.q(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aWv,v)},
amS(d){var w=0,v=B.j(x.H),u,t,s,r
var $async$amS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(A.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return B.b(C.T8(),$async$amS)
case 3:t=s.aWt(r.aWs(f,d),new B.N(Date.now(),0,!1))
w=5
return B.b(B.au(),$async$amS)
case 5:w=4
return B.b(f.an("Bool","ngmy_helper_3left_"+A.a.i(d.toLowerCase())+"_"+t.b.a4().aa(),!0),$async$amS)
case 4:case 1:return B.h(u,v)}})
return B.i($async$amS,v)},
amT(d,e){var w=0,v=B.j(x.y),u,t,s,r,q
var $async$amT=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=A.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return B.b(C.T8(),$async$amT)
case 3:s=g
r=Date.now()
q=C.aWt(C.aWs(s,d),new B.N(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aE(s,t,B.D(["count",r+1,"windowStart",q.b.a4().aa()],x.N,x.K))
w=4
return B.b(C.aWu(s),$async$amT)
case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amT,v)},
aee(d,e,a0){var w=0,v=B.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aee=B.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new B.f4("")
if(!d.d){p=!0
if(!C.h0t(a0))if(!C.h0s(a0)){p=B.ad("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.h0t(a0)?3:4
break
case 3:o=C.hHw(a0)
w=o!=null?5:6
break
case 5:w=7
return B.b(C.bWE(e,o),$async$aee)
case 7:n=a2
p=J.a4(n)
if(p.gcg(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.fMg(o)+":\n"
m.a+=l
for(p=p.gaf(n);p.C();){m=p.gT(p)
l=h
k="- "+m.gTf()+"\n"
l.a+=k
m=m.f
if(m!=null&&A.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=B.ad("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return B.b(B.Q2("text/plain"),$async$aee)
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
case 13:case 9:w=C.h0s(a0)?15:16
break
case 15:p=h
f=C
w=17
return B.b(C.a4U(e),$async$aee)
case 17:m=f.fNQ(a2)+"\n"
p.a+=m
case 16:p=B.ad("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return B.b(C.Sc(e),$async$aee)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cs(i)){p=h
m=C.fMh(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=A.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aee,v)},
hhT(d){var w=A.a.i(d),v=w.length
if(v===0||v>6)return!1
if(A.a.q(w,"|")||A.a.q(w,":")||A.a.q(w,"/")||A.a.q(w,".")||A.a.q(w," "))return!1
v=B.ad("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=B.ad("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
c5y(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$c5y=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.fOt(d)
if(n==null){u=null
w=1
break}t=4
w=7
return B.b(B.eU("ngmy_local_growth_income_code_v1_"+A.a.i(n).toUpperCase(),null,!1,A.bE),$async$c5y)
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
return B.i($async$c5y,v)},
anx(d){var w=0,v=B.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$anx=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=A.a.i(d)
if(J.aa(k)===0){u=null
w=1
break}t=4
w=7
return B.b(B.eU("ngmy_local_growth_income_stash_v1_"+A.a.i(k),null,!1,A.bE),$async$anx)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.q(r,"payload")
q=J.k(n==null?"":n)
if(J.aa(q)===0){u=null
w=1
break}n=J.q(r,"ownerEmail")
p=A.a.i(J.k(n==null?"":n))
n=A.c_.c4(0,A.cw.aF(q))
m=J.y(J.q(r,"live"),!0)
u=new B.aCr(m,p,n)
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
return B.i($async$anx,v)},
aXy(d){var w=0,v=B.j(x.bY),u,t,s,r,q
var $async$aXy=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=C.hhT(q)?3:4
break
case 3:w=5
return B.b(C.c5y(q),$async$aXy)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.anx(t)
w=1
break
case 4:if(A.a.a_(q,"NGMYLOCALSYNC1|")){u=C.anx(A.a.i(A.a.aV(q,15)))
w=1
break}w=A.a.a_(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return B.b(C.anx(A.a.i(A.a.aV(q,15))),$async$aXy)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new B.aCr(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aXy,v)},
fOH(d){var w=d.bG
if(w>=0)return w
return 1},
aep(d,e,f){var w=0,v=B.j(x.H),u,t
var $async$aep=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return B.b(B.aMg(d,e),$async$aep)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return B.b(B.F2(d,null,null,!1,!0,""),$async$aep)
case 5:w=4
return B.b(t.$1(h),$async$aep)
case 4:case 1:return B.h(u,v)}})
return B.i($async$aep,v)},
hGq(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=A.a.i(a2)
if(a1.length===0)return A.hW
w=a1.toLowerCase()
v=B.ad("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=B.ad("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cw(w)
if(!u&&t==null)return A.hW
s=new B.N(Date.now(),0,!1)
r=B.da()
q=B.da()
p=C.hww(w)
if(p!=null){v=p.a
r.b=s.bL(v)
q.b=C.fWI(a1,w)
if(J.y(q.b6(),"Wake up")&&A.o.aj(v,e)<=180)q.b="Reminder \u2014 "+A.o.aj(v,e)+" min"}else{if(t!=null){v=B.ad("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=A.a.e_(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.fWJ(v[2],v[4],v[3])
o=v[3]
m=B.c3(o==null?"":o,null)
if(m==null)m=0
l=B.bY(B.by(s),B.bC(s),B.bN(s),0,0,0,0,0)
if(A.a.q(w,d))l=l.bL(a0)
r.b=B.bY(B.by(l),B.bC(l),B.bN(l),n,m,0,0,0).bL(-36e8)
if(r.b6().cT(s.bL(e)))r.b=J.ci(r.b6(),A.oV)
v=C.hAn(v[1])
k=A.o.J(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+A.a.aU(A.o.u(m),2,"0")+" "+j)}else{l=B.bY(B.by(s),B.bC(s),B.bN(s),0,0,0,0,0)
v=A.a.q(w,d)
if(v)l=l.bL(a0)
i=B.ad("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cw(w)
if(i!=null){o=i.b
h=C.fWJ(o[1],o[3],o[2])
o=o[2]
g=B.c3(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=B.bY(B.by(l),B.bC(l),B.bN(l),h,g,0,0,0)
r.b=f.cT(s.bL(3e7))&&!v?f.bL(a0):f
q.b=C.fWI(a1,w)}}v=x.N
return B.a([new B.k7("alarm",B.D(["title",q.b6(),"start",r.b6().aa(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
hww(d){var w,v,u,t,s,r,q=[B.ad("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.ad("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),B.ad("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),B.ad("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
for(w=0;w<4;++w){v=q[w].cw(d)
if(v==null)continue
u=v.b
t=u[1]
s=B.c3(t==null?"":t,null)
if(s==null||s<=0)continue
r=u[2]
if(r==null)r="minute"
if(A.a.a_(r,"sec"))return new B.b6(1e6*A.o.D(s,5,86400))
if(A.a.a_(r,"hour")||A.a.a_(r,"hr"))return new B.b6(36e8*A.o.D(s,1,168))
return new B.b6(6e7*A.o.D(s,1,10080))}return null},
hAn(d){var w=d==null?"work":d,v=w.toLowerCase()
if(A.a.q(v,"meeting")||A.a.q(v,"appointment"))return"Meeting"
if(A.a.q(v,"class")||A.a.q(v,"school"))return"Class"
if(A.a.q(v,"shift"))return"Shift"
return"Work"},
fWJ(d,e,f){var w,v=B.c3(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return A.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
fWI(d,e){var w,v,u,t
if(A.a.q(e,"work"))return"Wake up \u2014 Work"
if(A.a.q(e,"school")||A.a.q(e,"class"))return"Wake up \u2014 School"
w=B.ad("\\btimer\\b",!1,!1,!1,!1)
if(w.b.test(e))return"Timer"
v=B.ad("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cw(d)
if(v!=null){w=v.b
u=w[1]
w=u==null?w[2]:u
t=A.a.i(w==null?"":w)
w=t.length
if(w>=3&&w<=60)return t}return"Wake up"},
hie(d){var w,v,u,t,s=J.a4(d)
if(s.gag(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.jW(d,80),v=w.$ti,w=new B.bR(w,w.gH(0),v.k("bR<ai.E>")),v=v.k("ai.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gH(d)>80?u+("\u2026 and "+(s.gH(d)-80)+" more\n"):u
return A.a.i(s.charCodeAt(0)==0?s:s)}},D,H,Ac,I,G,Ad,V,F,W,Ae,Af,X,Ag,Ah,Ai,Aj,Y,Z,K,Ak
J=c[1]
B=c[0]
A=c[2]
L=c[30]
Q=c[155]
E=c[147]
M=c[157]
A_=c[121]
N=c[92]
A0=c[153]
R=c[33]
O=c[70]
A1=c[77]
S=c[76]
A2=c[78]
P=c[122]
A3=c[125]
A4=c[158]
T=c[149]
A5=c[161]
A6=c[159]
A7=c[160]
A8=c[156]
A9=c[152]
Aa=c[62]
U=c[139]
Ab=c[140]
C=a.updateHolder(c[5],C)
D=c[146]
H=c[25]
Ac=c[61]
I=c[151]
G=c[91]
Ad=c[162]
V=c[26]
F=c[150]
W=c[104]
Ae=c[148]
Af=c[165]
X=c[154]
Ag=c[166]
Ah=c[114]
Ai=c[164]
Aj=c[98]
Y=c[69]
Z=c[54]
K=c[52]
Ak=c[163]
C.bmP.prototype={
nT(d,e){return this.a.$2(d,e)}}
C.DI.prototype={
S(){return new C.aEu(this.$ti.k("aEu<DI.T,DI.S>"))}}
C.aEu.prototype={
Z(){var w,v,u=this
u.a0()
w=u.a
v=w.f
w=new B.hs(A.D9,v,null,null,w.$ti.k("hs<1>"))
u.e=w
u.TM()},
bo(d){var w,v=this
v.bz(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aIi()
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hs(A.D9,w.b,w.c,w.d,w.$ti)}v.TM()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&B.c()
return v.mu(d,w)},
p(){this.aIi()
this.a2()},
TM(){var w,v=this
v.d=v.a.c.kV(new C.eJF(v),new C.eJG(v),new C.eJH(v))
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hs(A.U_,w.b,w.c,w.d,w.$ti)},
aIi(){var w=this.d
if(w!=null){w.a9(0)
this.d=null}}}
C.asm.prototype={
mu(d,e){return this.e.$2(d,e)}}
C.ai8.prototype={
S(){return C.hoI()},
bl(){return this.r.$0()}}
C.o_.prototype={}
C.awS.prototype={
a7o(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7o=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=!C.c2u(t.a.c)
if(r){w=3
break}else e=r
w=4
break
case 3:w=5
return B.b(C.amw(t.a.c),$async$a7o)
case 5:e=!e
case 4:s=e
if(t.c==null){w=1
break}t.n(new C.d1D(t,s))
case 1:return B.h(u,v)}})
return B.i($async$a7o,v)},
a9k(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a9k=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.bxC(),$async$a9k)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d1O(t,s))
case 1:return B.h(u,v)}})
return B.i($async$a9k,v)},
Z(){var w,v,u=this
u.bmR()
$.rF=$.rF+1
w=u.a
$.bxG=w.c.a
w=w.d.aZ
v=B.S(w).k("I<1,a0<n,@>>")
w=B.z(new B.I(w,new C.d25(),v),v.k("ai.E"))
u.f=w
u.a9k()
u.HZ()
u.a7o()
u.e=B.dD(A.nb,new C.d26(u))},
HZ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$HZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:C.aeq(t.a.d.aZ)
w=3
return B.b(C.fld(t.a.d.aZ),$async$HZ)
case 3:s=e
if(t.c==null){w=1
break}C.aeq(t.a.d.aZ)
if(s!=null)t.n(new C.d1W(t,s))
else t.n(new C.d1X(t))
case 1:return B.h(u,v)}})
return B.i($async$HZ,v)},
p(){C.aWe()
var w=this.e
if(w!=null)w.a9(0)
this.bmQ()},
adZ(d,e,f){return this.chM(d,e,f)},
chM(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$adZ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:q=A.a.i(e.toLowerCase())
p=J.q(t.r,q)
o=t.a
n=o.d.aZ
o=o.c
s=d.b
C.hAq(n,o.a,o.c,d.a,s,f,e,p)
t.a.bl()
w=3
return B.b(C.aer(t.a.d.aZ),$async$adZ)
case 3:if(t.c==null){w=1
break}t.n(new C.d1Z(t))
r=f===1?"1 game":""+f+" games"
t.c.E(x.q).f.P(B.aZ(null,null,null,null,null,A.q,null,B.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$adZ,v)},
GV(d,e){return this.c3C(d,e)},
bTw(d){return this.GV(d,null)},
c3C(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$GV=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&A.a.i(e).length!==0){s=C.tf(t.a.d.aZ,A.a.i(e))
if(s!=null&&C.aLb(s)<=0){t.c.E(x.q).f.P(D.aHF)
w=1
break}}w=5
return B.b(C.amw(t.a.c),$async$GV)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return B.b(C.fyd(r,C.ffH(q.c),p),$async$GV)
case 6:w=1
break
case 4:o=new C.d1R(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
B.hl(r,new C.azG(p,q.d,q.f,q.r,new C.d1S(o),q.w,C.ffH(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
B.hl(q,new C.ai7(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.d1T(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$GV,v)},
bR5(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.aeq(i.a.d.aZ)
C.aeq(i.f)
w=C.hKW(i.a.c.a,i.f)
v=C.hAp(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return A.bF
if(!u){t=A.d.gI(w)
u=B.m(14)
s=B.H(A.be,A.r,1)
r=J.a4(t)
q=r.h(t,"fromName")
q=B.t(q==null?r.h(t,"fromEmail"):q)
p=B.t(r.h(t,"gameTitle"))
o=B.aQ(r.h(t,g))
o=o==null?h:A.k.L(o)
if(o==null)o=1
r=B.aQ(r.h(t,g))
r=r==null?h:A.k.L(r)
r=(r==null?1:r)===1?"":"s"
n=x.p
return B.p(h,B.u(B.a([D.eM3,B.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,A.os,h,h,h),A.P,B.A(B.a([B.C(B.dU(A1.R_,new C.d1J(i,t),h),1),A.ab,B.C(B.bJ(D.eUf,new C.d1K(i,t),h),1)],n),A.m,h,A.e,A.j,0,h,h)],n),A.F,h,A.e,A.j,0,A.p),A.i,h,h,new B.o(A.az,h,s,u,h,h,A.n),h,h,h,A.e3,A.bj,h,h,1/0)}m=A.d.gI(v)
l=A.d.dP(i.y,new C.d1L(m),new C.d1M(i))
k=C.fE3(m,i.a.c.a,i.r)
j=C.aLb(m)
u=B.m(14)
s=B.H(A.be,A.r,1)
r=j===1?"":"s"
return B.p(h,B.u(B.a([D.eEW,B.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,A.os,h,h,h),A.aw,B.d(C.hD0(m,i.a.c.a),h,h,h,h,h,h,A.a3R,h,h,h),A.P,B.bJ(D.eLn,new C.d1N(i,l,m),h)],x.p),A.F,h,A.e,A.j,0,A.p),A.i,h,h,new B.o(A.bf,h,s,u,h,h,A.n),h,h,h,A.e3,A.bj,h,h,1/0)},
bI_(d){var w,v=null,u=D.eaw.q(0,d.a),t=B.m(16),s=d.f,r=B.m(16),q=B.H(B.W(71,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1),p=A.d.gI(s)
p=B.a([new B.a9(0,A.G,B.W(102,p.l()>>>16&255,p.l()>>>8&255,p.l()&255),A.J,12)],x.V)
w=x.p
w=B.a([new B.a8(100,v,B.at(B.U(d.e,A.c,v,v,v,64),v,v,v),v),B.C(new B.B(A.lh,B.u(B.a([B.A(B.a([B.C(B.d(d.b,v,v,v,v,v,v,A.l2,v,v,v),1)],w),A.m,v,A.e,A.j,0,v,v),A.aw,B.d(d.c,v,2,A.a0,v,v,v,A.nC,v,v,v)],w),A.F,v,A.b5,A.j,0,A.p),v),1)],w)
if(u)w.push(B.aF(v,v,v,v,D.bA0,v,v,v,new C.d1F(this,d),v,v,v,v,"Invite player",v))
w.push(D.dLe)
return B.aH(!1,t,!0,B.p(v,B.A(w,A.m,v,A.e,A.j,0,v,v),A.i,v,v,new B.o(v,v,q,r,p,new B.a7(A.a1,A.a7,A.w,s,v,v),A.n),v,92,v,A.e3,v,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.d1G(this,d),v,v,v,v,v,v,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.K(d).ax.a===A.H,l=B.K(d).ax.a===A.H?A.iQ:A.oM,k=m?A.hl.j(0.94):A.c.j(0.94),j=m?A.c:A.M,i=m?A.hl:A.c,h=m?A.c.j(0.08):A.aJ,g=m?A.c:A.M,f=m?A.bh:A.bN
if(!o.x)return C.aLK(n,l,B.at(B.md(n,m?A.c:A.br,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.ffH(o.a.c)
return new C.Ly(o.a.w,w,!0,o.gaN_(),n)}w=B.aG(d,A.e0,x.w).w
v=B.m(12)
u=B.H(h,A.r,1)
t=x.V
s=B.a([],t)
if(!m)s.push(new B.a9(0,A.G,A.x.j(0.04),A.cC,12))
r=x.p
s=B.a([B.p(n,B.A(B.a([B.C(B.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,B.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,A.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new B.tF(new C.d22(o,f,g),n,$.aN4(),n)],r),A.m,n,A.e,A.j,0,n,n),A.i,n,n,new B.o(i,n,u,v,s,n,A.n),n,n,n,n,A.UR,n,n,1/0),A.U,o.bR5()],r)
v=o.y
A.d.v(s,new B.I(v,o.gbHZ(),B.S(v).k("I<1,r>")))
w=B.ce(B.u(s,A.m,n,A.e,A.j,0,A.p),A.q,n,A.z,n,new B.L(14,w.r.b+78,14,24),n,n,A.af)
s=B.m(35)
v=B.a([new B.a9(0,A.G,A.x.j(m?0.28:0.08),A.jl,15)],t)
u=B.H(m?A.c.j(0.1):A.aJ,A.r,1)
t=B.aF(n,n,n,n,B.U(A.eq,j,n,n,n,18),n,n,n,o.gaN_(),n,n,n,n,n,n)
q=B.C(B.at(B.d("GAME CENTER",n,n,n,n,n,n,B.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,A.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=B.m(20)
return B.nR(!0,C.aLK(n,l,new B.am(A.W,n,A.a9,A.i,B.a([w,B.an(n,B.br(!1,new B.B(A.JA,B.p(n,B.A(B.a([t,q,new B.B(A.lh,B.p(n,B.A(B.a([D.bvD,A.ey,C.anm(new C.d23(o),A.mR,o.a.c.a)],r),A.m,n,A.e,A.R,0,n,n),A.i,n,n,new B.o(A.cI,n,n,p,n,n,A.n),n,n,n,n,A.fX,n,n,n),n)],r),A.m,n,A.e,A.j,0,n,n),A.i,n,n,new B.o(k,n,u,s,v,n,A.n),n,60,n,n,A.mx,n,n,n),n),!0,!1,A.ag,!0,!0),n,n,0,0,0,n)],r),n)),new C.d24(o),x.K)},
aN0(){var w,v
this.a.bl()
w=this.d
v=w>0?B.D(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
B.ir(w,v)}}
C.azG.prototype={
S(){return new C.bf4()},
he(d){return this.e.$1(d)},
bl(){return this.f.$0()},
aC0(){return this.r.$0()}}
C.bf4.prototype={
Z(){this.bnQ()
this.d=B.Sz(this.a.d.bn)
$.rF=$.rF+1},
p(){C.aWe()
this.bnP()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&B.c()
return new C.am0(v,new C.dEN(w),u,new C.dEO(w),new C.dEP(w,d),new C.dEQ(w),null)}}
C.ai7.prototype={
S(){return new C.awR(new B.ao(A.aq,$.as()))},
he(d){return this.x.$1(d)},
bl(){return this.y.$0()},
aC0(){return this.z.$0()}}
C.awR.prototype={
Z(){this.bmP()
this.a.toString
$.rF=$.rF+1},
p(){C.aWe()
var w=this.d
w.R$=$.as()
w.O$=0
this.bmO()},
a_m(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a_m=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.LE()
w=5
return B.b(C.amw(t.a.c),$async$a_m)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return B.b(C.fyd(s,C.ffH(r.c),q),$async$a_m)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&A.a.i(r).length!==0){p=C.tf(s.d.aZ,A.a.i(r))
if(p!=null&&C.aLb(p)<=0){t.c.E(x.q).f.P(D.aHF)
w=1
break}}o=B.d_(A.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.E(x.q).f.P(D.ehm)
w=1
break}m=B.Ja(t.a.c.a,new C.d1x(t))
if(m+0.001<n){t.c.E(x.q).f.P(B.aZ(null,null,null,null,null,A.q,null,B.d("Not enough balance for this bet \u2014 you have $"+B.dx(m)+", the bet is $"+B.dx(n)+".",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aC0()
s=t.a
s.toString
r=A.o.u(1000*Date.now())
q=t.a
s.he(new B.cP(r,q.c.a,n,A.jq,A.eW,"Game bet: "+q.f,null,null,A.cc,new B.N(Date.now(),0,!1)))
t.a.bl()
if(D.eap.q(0,t.a.e)){s=t.c
s.toString
r=t.a
B.hl(s,new C.al3(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
B.hl(s,new C.ai9(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return B.h(u,v)}})
return B.i($async$a_m,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=B.aF(o,o,o,o,A.Ez,o,o,o,new C.d1A(d),o,o,o,o,o,o),k=p.a,j=B.d(k.f,o,o,o,o,o,o,A.cr,o,o,o),i=B.m(12),h=x.p
j=B.eK(B.a([B.p(o,B.at(C.anm(new C.d1B(p),A.ka,k.c.a),o,o,o),A.i,o,o,new B.o(A.cI,o,o,i,o,o,A.n),o,o,o,D.bdu,A.iA,o,o,o)],h),o,o,!0,!0,D.TY,o,1,o,o,o,!1,o,!1,A.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=B.m(16)
i=B.H(A.be,A.r,1)
k=B.U(D.bmz,D.b8N,o,o,o,28)
w=p.a
v=B.d(w.f,o,o,o,o,o,o,A.op,o,o,o)
w=B.d(w.r,o,o,o,o,o,o,A.os,o,o,o)
u=B.W(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.m(12)
s=x.a3
s=B.z(new B.I(B.a([2,5,10,25],x.t),new C.d1C(p),s),s.k("ai.E"))
s=B.A(s,A.m,o,A.e,A.j,0,o,o)
r=B.W(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
t=B.p(o,B.u(B.a([D.eVG,A.U,s,A.P,B.aI(o,A.T,!1,o,!0,A.q,o,B.aL(),p.d,o,o,o,o,o,2,B.bn(o,new B.b0(4,B.m(10),A.V),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l3,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ad,o,o,o,o,o,A.dK,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.dj,!0,A.a5,o,A.am,o,o,o,o)],h),A.m,o,A.e,A.j,0,A.p),A.i,o,o,new B.o(u,o,o,t,o,o,A.n),o,o,o,o,A.bT,o,o,1/0)
u=B.m(12)
r=B.H(B.W(102,A.a07.l()>>>16&255,A.a07.l()>>>8&255,A.a07.l()&255),A.r,1)
s=B.W(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
q=B.m(10)
q=B.p(o,B.u(B.a([D.eEj,B.d("+ $"+A.k.ab(n*0.46,2),o,o,o,o,o,o,D.evk,o,o,o),B.d("(46% return on $"+A.k.ab(p.e,2)+" bet)",o,o,o,o,o,o,A.nC,o,o,o)],h),A.m,o,A.e,A.j,0,A.p),A.i,o,o,new B.o(s,o,o,q,o,o,A.n),o,o,o,o,A.ch,o,o,1/0)
s=B.W(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
n=B.m(10)
u=B.p(o,B.u(B.a([D.eMk,A.P,q,A.P,B.p(o,B.u(B.a([D.ezP,B.d("$"+A.k.ab(m,2),o,o,o,o,o,o,D.elx,o,o,o),B.d("8 pairs \xd7 $"+A.k.ab(m,2)+" each",o,o,o,o,o,o,A.nC,o,o,o)],h),A.m,o,A.e,A.j,0,A.p),A.i,o,o,new B.o(s,o,o,n,o,o,A.n),o,o,o,o,A.ch,o,o,1/0)],h),A.m,o,A.e,A.j,0,A.p),A.i,o,o,new B.o(D.b5C,o,r,u,o,o,A.n),o,o,o,o,A.bT,o,o,1/0)
r=B.fe(o,o,A.br,o,o,o,o,o,o,A.c,o,A.h0,o,o,o,o,o,o,o,o)
return C.aLK(j,D.TY,B.ce(B.p(o,B.u(B.a([k,A.aw,v,A.bw,w,A.U,t,A.P,u,A.U,new B.a8(1/0,o,B.hS(B.d("Start Game ($"+A.k.ab(p.e,2)+")",o,o,o,o,o,o,A.cb,o,o,o),p.gclw(),r),o)],h),A.m,o,A.e,A.j,0,A.p),A.i,o,o,new B.o(o,o,i,l,o,D.bET,A.n),o,o,o,o,A.eM,o,o,1/0),A.q,o,A.z,o,E.acl,o,o,A.af))}}
C.ai9.prototype={
S(){var w=x.s,v=x.t,u=x.S
return new C.awT(A.cz,new B.ao(A.aq,$.as()),B.a([],w),B.a([],x.d4),B.a([],w),B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.aY(u),B.aY(u),B.a([],v),B.a([],v),B.a([],v))},
he(d){return this.y.$1(d)},
bl(){return this.z.$0()}}
C.awT.prototype={
ghq(){var w=this.a.Q
return w!=null&&A.a.i(w).length!==0},
qi(d){return this.bGk(d)},
bGk(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$qi=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.yZ()
r=t.MF()
w=s<=0?3:4
break
case 3:w=5
return B.b(t.a7O(d),$async$qi)
case 5:w=1
break
case 4:q=A.k.D(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return B.b(t.rS(d),$async$qi)
case 9:w=7
break
case 8:w=10
return B.b(t.D6(q,s,r),$async$qi)
case 10:case 7:case 1:return B.h(u,v)}})
return B.i($async$qi,v)},
Ip(d,e,f,g){return this.cjn(d,e,f,g)},
cjn(d,e,f,g){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ip=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(C.byE(s,C.byj(),C.fFR(),d,e,f,g),$async$Ip)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Ip,v)},
yZ(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.aWU(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&B.c()
return u+C.aeC(t,s.e.a.a)
case"memory":return s.ghq()&&D.m5.q(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.atL()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bn
case"color":return s.aZ
case"reflex":return s.Y
default:u=s.aS
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
atL(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
MF(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&B.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.fE6()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.aS
if(w!=null)return w.b
return 1}},
bo(d){var w,v,u=this
u.bz(d)
if(u.f||u.c9)return
w=u.a
v=C.ffK(w.e,w.d.y2)
if(v!==C.ffK(d.e,d.d.y2)&&u.c!=null)u.n(new C.d3p(u,v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.bmT()
w=i.a
w.toString
$.rF=$.rF+1
i.Q=C.ffK(w.e,w.d.y2)
i.aZH()
i.a93()
if(i.ghq()){i.c9=!0
i.cS="Connecting to match\u2026"
i.ce="Both players enter the room together \u2014 play starts at the same time."
i.N_()
i.a8I()
i.bf=B.dD(A.fN,new C.d3s(i))}if(A.d.q(D.Nv,i.a.e)){w=i.ghq()
v=i.a
if(w){w=v.d.aZ
v=v.Q
v.toString
u=C.tf(w,v)
w=i.a
if(u!=null){w=w.c
v=w.a
w=w.c
t=J.a4(u)
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
m=s.b(t.h(u,h))?B.Y(s.a(t.h(u,h)),o,n):B.Q(o,n)
s=p===r
l=s?q:r
if(s){o=m.h(0,"player2Name")
if(o==null)o=m.h(0,"playerOName")
t=o==null?t.h(u,"toName"):o
k=A.a.i(J.k(t==null?"":t))}else{o=m.h(0,"player1Name")
if(o==null)o=m.h(0,"playerXName")
t=o==null?t.h(u,"fromName"):o
k=A.a.i(J.k(t==null?"":t))}w=new C.aWc(!1,w,k.length===0||A.a.q(k,"@")?C.fE3(u,v,null):k,p,l,s)}else{w=w.c
w=C.fyh(w.c,w.a)}w=i.bE=w}else{w=v.c
w=i.bE=C.fyh(w.c,w.a)}v=C.hil()
v.bgY(i.a.e,i.d,w)
i.aS=v
i.r=v.c
if(i.ghq()){w=i.a
v=w.d.aZ
w=w.Q
w.toString
u=C.tf(v,w)
m=u==null?null:J.q(u,h)
if(x.f.b(m)){w=i.aS
w.toString
w.b3D(i.a.e,B.Y(m,x.N,x.z),i.a.c.a)
w=i.aS
i.r=w.c
if(w.e){if(w.r)j=D.OQ
else j=w.f===!0?D.ph:D.FO
i.z0(j)}}}i.b_=B.dD(A.ne,new C.d3t(i))
if(i.ghq())i.b7=B.dD(A.o_,new C.d3u(i))}if(i.ghq()&&!A.d.q(D.Nv,i.a.e))i.b7=B.dD(A.o_,new C.d3v(i))
i.as=B.dD(A.fV,new C.d3w(i))},
N_(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$N_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghq()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.tf(s.d.aZ,q)
w=p!=null?3:4
break
case 3:w=5
return B.b(C.bwL(p,t.a.c.a),$async$N_)
case 5:o=e
if(t.c!=null)t.n(new C.d2F(t,o))
w=1
break
case 4:w=6
return B.b(C.J2(q,t.a.d.aZ,!1),$async$N_)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return B.b(C.bwL(n,t.a.c.a),$async$N_)
case 7:o=e
if(t.c!=null)t.n(new C.d2G(t,o))
case 1:return B.h(u,v)}})
return B.i($async$N_,v)},
af3(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$af3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghq()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.J2(r,s.d.aZ,!1),$async$af3)
case 3:q=e
if(q==null||t.c==null){w=1
break}p=J.q(q,"sessionState")
if(!x.f.b(p)){w=1
break}o=B.Y(p,x.N,x.z)
if(t.a.e==="memory"){s=t.go
r=s.a
n=t.id
m=n.a
l=t.fx
t.aI7(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=A.k.L(j)
else{h=j==null?null:J.k(j)
i=B.c3(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)A.d.bk(t.fy,new C.d38(t))
if(i!=null&&t.fr.length!==0){s=B.z(t.dy,x.S)
A.d.v(s,t.dy)
r=new B.f9()
r.e2(i)
A.d.fM(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.n(new C.d39())}case 1:return B.h(u,v)}})
return B.i($async$af3,v)},
a8I(){var w=0,v=B.j(x.H),u=this
var $async$a8I=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.YJ(!0),$async$a8I)
case 2:return B.h(null,v)}})
return B.i($async$a8I,v)},
YJ(d){return this.c9e(d)},
c9d(){return this.YJ(!1)},
c9e(b3){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$YJ=B.e(function(b4,b5){if(b4===1)return B.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghq()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
if(q.length===0){w=1
break}p=A.a.i(s.c.a.toLowerCase())
w=3
return B.b(C.J2(q,s.d.aZ,b3),$async$YJ)
case 3:o=b5
if(o==null)o=C.tf(t.a.d.aZ,q)
if(o==null){w=1
break}s=J.a4(o)
r=s.h(o,"fromEmail")
n=A.a.i(J.k(r==null?"":r).toLowerCase())
r=s.h(o,"toEmail")
m=A.a.i(J.k(r==null?"":r).toLowerCase())
l=s.h(o,"sessionState")
s=x.f
r=x.N
k=x.z
j=s.b(l)?B.Y(l,r,k):B.Q(r,k)
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
d=s.b(e)?B.Y(e,r,k):B.Q(r,k)
a0=j.h(0,"readyAt")
a1=s.b(a0)?B.Y(a0,r,k):B.Q(r,k)
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
if(a3.length!==0){s=B.bf(a3)
a4=s==null?null:s.bP()
b2.a=a4
s=a4}else s=null
a5=i&&f&&J.y(d.h(0,h),!0)&&J.y(d.h(0,g),!0)
if(a5&&s==null){if(i){r=a1.h(0,h)
r=B.bf(J.k(r==null?"":r))
a6=r==null?null:r.bP()}else a6=null
if(f){r=a1.h(0,g)
r=B.bf(J.k(r==null?"":r))
a7=r==null?null:r.bP()}else a7=null
if(a6!=null&&a7!=null){a8=(a6.ca(a7)?a6:a7).bL(5e5)
if(!new B.N(Date.now(),0,!1).cT(a8)){a4=b2.a=a8.bL(4e6)
j.m(0,"startAt",a4.a4().aa())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.m(0,"memorySeed",A.o.J(1000*Date.now(),2147483647))
j.m(0,"memoryMatched",B.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.m(0,"patternSeed",A.o.J(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.hHT(t.a.d.aZ,q,j)
t.a.bl()}if(t.c==null){w=1
break}b0=t.bx
if(b0==null)b0="your opponent"
if(!a5){t.n(new C.d2V(b2,t,b0))
w=1
break}if(s==null){t.n(new C.d2W(t))
w=1
break}b1=new B.N(Date.now(),0,!1)
if(b1.cT(s)){s=s.bv(b1).a
r=A.o.aj(s,1e6)
t.n(new C.d2X(b2,t,r+(A.o.J(A.o.aj(s,1000),1000)>0?1:0)))
w=1
break}if(t.c9){t.n(new C.d2Y(b2,t))
b2=t.a.e
if(b2==="pattern")t.a5L()
else if(b2==="memory"){t.aZG()
if(t.c!=null)t.n(new C.d2Z())}}b2=t.bf
if(b2!=null)b2.a9(0)
t.bf=null
case 1:return B.h(u,v)}})
return B.i($async$YJ,v)},
aJ0(d){var w,v,u,t,s=this
if(d!=null){w=new B.f9()
w.e2(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e0(v,x.S)
for(t=0;t<v;++t)u[t]=w.aE(9)
s.ry=u
s.x1=0
s.to=-1},
aJ_(){return this.aJ0(null)},
a5L(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a5L=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ghq()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.c6M()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return B.b(C.J2(q,s.d.aZ,!1),$async$a5L)
case 5:r=t.aVH(e)
case 4:if(t.c==null){w=1
break}t.aJ0(r)
t.n(new C.d27(t))
t.Cm()
case 1:return B.h(u,v)}})
return B.i($async$a5L,v)},
aVH(d){var w,v,u,t=null
if(d==null)return t
w=J.q(d,"sessionState")
if(!x.f.b(w))return t
v=J.q(w,"patternSeed")
if(typeof v=="number")return A.k.L(v)
u=v==null?t:J.k(v)
return B.c3(u==null?"":u,t)},
c6M(){var w=this.a,v=w.Q
if(v==null)return null
return this.aVH(C.tf(w.d.aZ,v))},
a93(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a93=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.au(),$async$a93)
case 3:r=e
q=t.a
p=q.e
q=A.a.i(q.c.a.toLowerCase())
s=B.eX(J.q(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.n(new C.d2E(t,s))
case 1:return B.h(u,v)}})
return B.i($async$a93,v)},
oj(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n
var $async$oj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.au(),$async$oj)
case 2:p=e
o=u.a
n=o.e
o=A.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bz5().length
else s=n==="typing"?50:105
if(n==="typing")r=A.o.J(u.at+5,s)
else{q=u.at
r=t?A.o.J(q+6,s):A.o.J(q+1,s)}w=3
return B.b(p.an("Int","ngmy_game_"+n+"_"+o,r),$async$oj)
case 3:u.at=r
return B.h(null,v)}})
return B.i($async$oj,v)},
a_B(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a_B=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghq()||t.aS==null||t.f||t.aQ){w=1
break}if(t.c9){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return B.b(C.J2(r,s.d.aZ,!1),$async$a_B)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.aZ
s=s.Q
s.toString
p=C.tf(r,s)
s=p==null
if(!s){r=J.cB(p)
r.a8(p)
r.v(p,q)}r=J.a4(q)
o=r.h(q,"sessionState")
if(!x.f.b(o)){w=1
break}n=B.Y(o,x.N,x.z)
r=r.h(q,"sessionUpdatedAt")
m=B.bf(J.k(r==null?"":r))
s=s?null:J.q(p,"sessionUpdatedAt")
l=B.bf(J.k(s==null?"":s))
if(m!=null&&l!=null&&!m.ca(l)){w=1
break}s=t.aS
s.toString
r=t.a
s.b3D(r.e,n,r.c.a)
r=t.aS
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.OQ
else k=r.f===!0?D.ph:D.FO
w=7
return B.b(t.z0(k),$async$a_B)
case 7:w=5
break
case 6:if(t.c!=null)t.n(new C.d3a())
case 5:case 1:return B.h(u,v)}})
return B.i($async$a_B,v)},
ad0(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$ad0=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghq()||q.aS==null||q.a.Q==null||q.aQ){w=1
break}q.aQ=!0
t=3
o=q.aS
o.toString
p=o.cAc(q.a.e)
o=q.a
n=o.d.aZ
o=o.Q
o.toString
w=6
return B.b(C.aM5(n,o,p),$async$ad0)
case 6:q.a.bl()
r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
q.aQ=!1
w=r.pop()
break
case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ad0,v)},
z0(d){return this.bNg(d)},
bNg(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$z0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.f||t.aS==null){w=1
break}s=t.aS.w
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
return B.b(t.Hy(s,s),$async$z0)
case 9:w=4
break
case 6:w=10
return B.b(t.ME(s,s),$async$z0)
case 10:w=4
break
case 7:w=11
return B.b(t.ME(s,s),$async$z0)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghq()?12:13
break
case 12:w=14
return B.b(t.Ge(),$async$z0)
case 14:case 13:case 1:return B.h(u,v)}})
return B.i($async$z0,v)},
XK(d,e){return this.c1q(d,e)},
c1q(d,e){var w=0,v=B.j(x.H),u,t=this
var $async$XK=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=t.ghq()?3:5
break
case 3:w=6
return B.b(t.ad0(),$async$XK)
case 6:if(d===D.pg){w=1
break}w=4
break
case 5:if(d===D.pg){w=1
break}case 4:w=7
return B.b(t.z0(d),$async$XK)
case 7:case 1:return B.h(u,v)}})
return B.i($async$XK,v)},
a8Y(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$a8Y=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghq()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.tf(s.d.aZ,q)
if(p==null){w=1
break}o=A.a.i(t.a.c.a.toLowerCase())
n=J.q(p,"sessionState")
s=x.f
if(!s.b(n)){w=1
break}r=x.N
m=x.z
l=B.Y(n,r,m)
k=l.h(0,"inGame")
j=s.b(k)?B.Y(k,r,m):B.Q(r,m)
j.m(0,o,!1)
l.m(0,"inGame",j)
l.W(0,"startAt")
w=3
return B.b(C.aM5(t.a.d.aZ,q,l),$async$a8Y)
case 3:t.a.bl()
case 1:return B.h(u,v)}})
return B.i($async$a8Y,v)},
Ge(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ge=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.ghq()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=C.tf(s.d.aZ,q)
if(p==null){w=1
break}o=J.q(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?B.Y(o,s,r):B.Q(s,r)
n.m(0,"gameOver",!0)
C.fGh(t.a.d.aZ,q,n)
C.hL4(t.a.d.aZ,q)
w=3
return B.b(C.aer(t.a.d.aZ),$async$Ge)
case 3:t.a.bl()
case 1:return B.h(u,v)}})
return B.i($async$Ge,v)},
p(){var w,v=this
if(v.ghq()&&!v.f)v.a8Y()
else if(!v.f)v.bTx()
C.aWe();++v.RG
w=v.as
if(w!=null)w.a9(0)
w=v.b_
if(w!=null)w.a9(0)
w=v.cx
if(w!=null)w.a9(0)
w=v.b7
if(w!=null)w.a9(0)
w=v.bf
if(w!=null)w.a9(0)
w=v.e
w.R$=$.as()
w.O$=0
v.bmS()},
cot(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&B.c()
v=v<=0||w.aS==null}if(v)return
if(w.c9)return
v=w.aS
v.toString
w.a.toString
if(v.a>=v.b){w.rS("Goal completed!")
return}v=++w.rx
if(v%5===0)w.n(new C.d3j())},
aZH(){var w,v,u,t,s,r=this
r.x=B.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e0(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.aZG()
break
case"scramble":r.bn=0
r.aZI()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=A.o.J(r.at,50)
v=J.e0(5,x.N)
for(t=0;t<5;++t)v[t]=D.cUW[A.o.J(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bH(0,A.c0)
break
case"math":r.y2=0
r.aZF()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.aZJ()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e0(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
A.d.fM(v,s)
if(!r.cbx()){w=J.e0(9,w)
for(u=0;u<9;++u)w[u]=u
A.d.fM(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
A.d.a8(w)
w.push(r.d.aE(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.Ox()
break
case"pattern":if(r.ghq()){r.ry=B.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aJ_()
w=B.t(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Cm()}break
case"color":r.aZ=0
r.aZA()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.Y=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b_N()
break
default:if(A.d.q(D.Nv,w)){w=r.aS
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
aWU(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
cbx(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return A.o.J(v,2)===0},
aZJ(){var w,v,u,t,s,r=this,q=A.o.J(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e0(o,x.S)
for(w=0;w<o;w=v){v=w+1
n[w]=A.k.L(Math.pow(p,v))}u=A.k.L(Math.pow(p,o))
r.w=A.o.u(u)
r.au=A.d.aH(n,", ")
q=r.w
t=x.s
s=B.a([A.o.u(u+p),A.o.u(u-p),A.o.u(u+p*2)],t)
t=B.a([q],t)
A.d.v(t,s)
A.d.fM(t,r.d)
r.x=t},
aZF(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bz5().length-6)u.at=0
w=$.bz5()
v=w[A.o.J(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
aZI(){var w=this,v=w.w=D.cAQ[A.o.J(w.at+w.bn,105)]
w.ax=C.hLk(v)
w.ay=B.bS(v.length,null,!1,x.T)
w.ch=B.a(w.ax.split(""),x.s)
w.e.bH(0,A.c0)},
b_N(){var w=this,v=w.cx
if(v!=null)v.a9(0)
w.y=!1
w.z=null
w.cx=B.cV(B.dA(0,0,0,120+w.d.aE(280),0,0),new C.d37(w))},
bNj(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.qi("Too early \u2014 paid for "+t.Y+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=A.o.aj(new B.N(v,0,!1).bv(u).a,1000)}if(w<520){t.n(new C.d2C(t))
v=t.Y
if(v>=5){t.oj()
t.rS("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b_N()
t.n(new C.d2D())}}else t.qi("Too slow ("+w+"ms) \u2014 paid for "+t.Y+"/5.")},
cnM(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=A.d.be(t.ay,new C.d3e())
if(u<0)return
t.n(new C.d3f(t,u,v,d))},
cnN(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.n(new C.d3g(u,d,v))},
bxP(){var w,v,u=this
if(u.f)return
if(A.d.bc(u.ay,new C.d28())){u.c.E(x.q).f.P(D.ehg)
return}w=A.d.fJ(u.ay)
v=u.w
v===$&&B.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.n(new C.d29(u))
if(u.ghq()&&D.m5.q(0,u.a.e))u.YY()
if(u.bn>=5){u.oj()
if(u.ghq()&&D.m5.q(0,u.a.e))u.mr(!0)
else u.rS("All 5 words unscrambled!")}else{u.aZI()
u.r="Word "+(u.bn+1)+" of 5 \u2014 place letters in order"
u.n(new C.d2a())}}else u.qi("Wrong word \u2014 paid for "+u.bn+"/5.")},
aZA(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=A.o.J(w.at+w.aZ*11,4),t=v[w.d.aE(4)]
w.aA=t
w.av=v[u]
w.aK=[A.dy,A.dr,A.hu,A.qt][u]
w.w=t},
aI7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=A.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a8(0)
w=h.id
w.a8(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=B.aY(x.S)
for(s=J.ji(v),s=s.gaf(s),r=x.j;s.C();){q=s.gT(s)
p=A.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aW(r.b(o)?o:A.cK),n=p===g;q.C();){m=q.gT(q)
l=typeof m=="number"?A.k.L(m):B.c3(J.k(m),null)
if(l==null)continue
t.G(0,l)
if(n)w.G(0,l)}}f.v(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aW(k);w.C();){m=w.gT(w)
l=typeof m=="number"?A.k.L(m):B.c3(J.k(m),null)
if(l!=null)f.G(0,l)}}h.k2=A.k.bK(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=B.aQ(J.q(j,g))
i=f==null?null:A.k.L(f)
if(i!=null)h.fx=i}},
aZG(){var w,v,u,t,s,r,q,p=this
p.fx=p.k2=0
p.go.a8(0)
p.id.a8(0)
p.fy=B.a([],x.t)
p.k1=!1
w=B.z(p.dy,x.S)
A.d.v(w,p.dy)
p.fr=w
if(p.ghq()&&p.a.Q!=null){w=p.a
v=w.d.aZ
w=w.Q
w.toString
u=C.tf(v,w)
t=u==null?null:J.q(u,"sessionState")
w=x.N
v=x.z
s=x.f.b(t)?B.Y(t,w,v):B.Q(w,v)
r=s.h(0,"memorySeed")
if(typeof r=="number")q=A.k.L(r)
else{w=r==null?null:J.k(r)
q=B.c3(w==null?"":w,null)}w=p.fr
if(q!=null){v=new B.f9()
v.e2(q)
A.d.fM(w,v)}else A.d.fM(w,p.d)
p.aI7(s)}else A.d.fM(p.fr,p.d)},
c8A(d){var w,v,u,t=this
if(t.c9)return
if(t.f||t.k1||t.go.q(0,d)||A.d.q(t.fy,d))return
t.n(new C.d2O(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.n(new C.d2P(t,v,u))
if(t.ghq()&&D.m5.q(0,t.a.e))t.YY()
if(t.go.a>=t.fr.length){t.oj()
if(t.ghq()&&D.m5.q(0,t.a.e))t.mr(!0)
else t.atO()}return}t.k1=!0
B.bK(D.bcs,new C.d2Q(t),x.c)},
aZ3(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&B.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.n(new C.d3_(u))
if(u.y1>=5){u.oj()
u.rS("All 5 questions correct!")}else{u.aZJ()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.n(new C.d30())}}else u.qi(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.n(new C.d31(u))
if(u.y2>=6){u.oj()
u.rS("All 6 math questions correct!")}else{u.aZF()
u.r="Question "+(u.y2+1)+" of 6"
u.n(new C.d32())}}else{u.TA(u.y2+1)
u.qi(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.n(new C.d33(u))
if(u.aZ>=5){u.oj()
u.rS("All 5 color rounds correct!")}else{u.aZA()
u.r="Round "+(u.aZ+1)+" of 5 \u2014 tap the COLOR of the text"
u.n(new C.d34())}}else u.qi("Wrong color \u2014 paid for "+u.aZ+"/5.")
return}if(v){u.oj()
u.atO()}else u.c.E(x.q).f.P(D.ehZ)},
cnL(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=A.d.cP(q.k4,0)
v=A.o.aj(d,3)
u=A.o.J(d,3)
t=A.o.aj(w,3)
s=A.o.J(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.n(new C.d3d(q,d,w))
if(A.d.fJ(q.k4)==="123456780"){q.oj()
q.atO()}}},
Ox(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Ox=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.n(new C.d2R(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.d2S(t,q).$0()
t.c.e1()
w=6
return B.b(B.bK(A.ko,null,r),$async$Ox)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.d2T(t).$0()
t.c.e1()
w=7
return B.b(B.bK(A.jb,null,r),$async$Ox)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.n(new C.d2U(t))
case 1:return B.h(u,v)}})
return B.i($async$Ox,v)},
cnO(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.qi("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.n(new C.d3h(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.oj()
u.rS("Perfect Simon run!")
return}u.n(new C.d3i(u))
u.Ox()}},
Cm(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Cm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.n(new C.d2b(t))
s=x.H
w=3
return B.b(B.bK(A.ja,null,s),$async$Cm)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.d2c(t,o).$0()
t.c.e1()
w=7
return B.b(B.bK(A.Uu,null,s),$async$Cm)
case 7:if(t.c==null){w=1
break}new C.d2d(t).$0()
t.c.e1()
w=8
return B.b(B.bK(A.i8,null,s),$async$Cm)
case 8:case 5:r.length===q||(0,B.J)(r),++p
w=4
break
case 6:if(t.c!=null)t.n(new C.d2e(t))
case 1:return B.h(u,v)}})
return B.i($async$Cm,v)},
TA(d){return this.bsL(d)},
bsL(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$TA=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return B.b(B.au(),$async$TA)
case 3:s=f
r=t.a
q=r.e
r=A.a.i(r.c.a.toLowerCase())
p=$.bz5().length
o=A.o.J(t.at+d,p)
w=4
return B.b(s.an("Int","ngmy_game_"+q+"_"+r,o),$async$TA)
case 4:t.at=o
case 1:return B.h(u,v)}})
return B.i($async$TA,v)},
cnJ(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.qi("Wrong tile \u2014 paid for "+v.atL()+"/"+C.fE6()+" moves.")
return}v.n(new C.d3b(v,w))
if(v.ghq()&&D.m5.q(0,v.a.e))v.YY()
if(v.x1>=w)if(v.x2>=7){v.oj()
if(v.ghq()&&D.m5.q(0,v.a.e))v.mr(!0)
else v.rS("All 7 pattern rounds correct!")}else{v.n(new C.d3c(v))
v.Cm()}},
Hy(d,e){return this.c71(d,e)},
rS(d){return this.Hy(null,d)},
atO(){return this.Hy(null,null)},
c71(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Hy=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a9(0)
s=t.b_
if(s!=null)s.a9(0)
r=t.a.x*1.46
t.n(new C.d2M(t,r))
q=A.o.u(1000*Date.now())
s=t.a
p=new B.cP(q,s.c.a,r,A.fy,A.eW,"Game payout: "+s.f,null,null,A.cc,new B.N(Date.now(),0,!1))
B.aeo(p,!0)
t.a.he(p)
t.a.bl()
o=e==null?"+$"+A.k.ab(r,2)+" added to your balance!":e
s=t.a
C.uW(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return B.b(t.Ip(d,o,"YOU WIN!",!0),$async$Hy)
case 3:w=4
return B.b(C.aeg(t.a.f,o),$async$Hy)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Hy,v)},
DF(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$DF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghq()&&D.m5.q(0,t.a.e)?3:4
break
case 3:w=5
return B.b(t.cit(),$async$DF)
case 5:w=1
break
case 4:s=t.yZ()
r=t.MF()
w=r<=0||s<=0?6:7
break
case 6:w=8
return B.b(t.a7O("Time's up \u2014 no progress to pay."),$async$DF)
case 8:w=1
break
case 7:q=A.k.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return B.b(t.rS("Complete! Max payout earned."),$async$DF)
case 12:w=10
break
case 11:w=13
return B.b(t.D6(q,s,r),$async$DF)
case 13:case 10:case 1:return B.h(u,v)}})
return B.i($async$DF,v)},
OE(d){return this.cbe(d)},
YY(){return this.OE(!1)},
cbe(b1){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$OE=B.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghq()&&D.m5.q(0,r.a.e))||r.a.Q==null){w=1
break}if(!b1){a1=new B.N(Date.now(),0,!1)
a2=r.bO
if(a2!=null&&a1.bv(a2).a<3e6){w=1
break}r.bO=a1}a2=r.a
a3=a2.Q
a3.toString
q=A.a.i(a3)
if(J.aa(q)===0){w=1
break}t=4
p=A.a.i(a2.c.a.toLowerCase())
a4=C.tf(a2.d.aZ,q)
w=a4==null?7:9
break
case 7:w=10
return B.b(C.J2(q,r.a.d.aZ,!1),$async$OE)
case 10:w=8
break
case 9:b3=a4
case 8:o=b3
if(o==null){w=1
break}n=J.q(o,"sessionState")
a2=x.f
a3=x.N
a5=x.z
m=a2.b(n)?B.Y(n,a3,a5):B.Q(a3,a5)
l=J.q(m,"scores")
k=a2.b(l)?B.Y(l,a3,a5):B.Q(a3,a5)
J.aE(k,p,r.yZ())
J.aE(m,"scores",k)
if(r.a.e==="memory"){j=J.q(m,"memoryMatchedBy")
i=a2.b(j)?B.Y(j,a3,a5):B.Q(a3,a5)
a6=r.id
a6=B.z(a6,B.a2(a6).k("cj.E"))
A.d.fu(a6)
J.aE(i,p,a6)
J.aE(m,"memoryMatchedBy",i)
h=B.aY(x.S)
for(a6=i,a6=new B.du(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aW(g);a8.C();){f=a8.gT(a8)
e=typeof f=="number"?A.k.L(f):B.c3(J.k(f),null)
if(e!=null)J.ci(h,e)}}a6=h
a6=B.z(a6,B.a2(a6).k("cj.E"))
A.d.fu(a6)
J.aE(m,"memoryMatched",a6)}d=J.q(m,"wagers")
a0=a2.b(d)?B.Y(d,a3,a5):B.Q(a3,a5)
J.aE(a0,p,r.a.x)
J.aE(m,"wagers",a0)
w=11
return B.b(C.aM5(r.a.d.aZ,q,m),$async$OE)
case 11:r.a.bl()
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
return B.i($async$OE,v)},
mr(d){return this.ciu(d)},
cit(){return this.mr(!1)},
ciu(b5){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$mr=B.e(function(b6,b7){if(b6===1)return B.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghq()||t.a.Q==null?3:4
break
case 3:w=5
return B.b(t.DF(),$async$mr)
case 5:w=1
break
case 4:w=6
return B.b(t.OE(!0),$async$mr)
case 6:s=t.a
r=s.Q
r.toString
q=A.a.i(r)
p=A.a.i(s.c.a.toLowerCase())
w=7
return B.b(C.J2(q,s.d.aZ,!0),$async$mr)
case 7:o=b7
n=t.MF()
w=o==null?8:9
break
case 8:m=A.k.D(t.yZ()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return B.b(t.a7O("Time's up \u2014 no progress to pay."),$async$mr)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return B.b(t.rS("Complete! Max payout earned."),$async$mr)
case 17:w=15
break
case 16:w=18
return B.b(t.D6(m,t.yZ(),n),$async$mr)
case 18:case 15:case 11:w=19
return B.b(t.Ge(),$async$mr)
case 19:w=1
break
case 9:s=J.a4(o)
r=s.h(o,"fromEmail")
l=A.a.i(J.k(r==null?"":r).toLowerCase())
r=s.h(o,"toEmail")
k=A.a.i(J.k(r==null?"":r).toLowerCase())
j=p===l?k:l
i=s.h(o,"sessionState")
s=x.f
r=x.N
h=x.z
g=s.b(i)?B.Y(i,r,h):B.Q(r,h)
f=g.h(0,"scores")
e=s.b(f)?B.Y(f,r,h):B.Q(r,h)
d=B.aQ(e.h(0,p))
a0=d==null?null:A.k.L(d)
if(a0==null)a0=t.yZ()
d=B.aQ(e.h(0,j))
a1=d==null?null:A.k.L(d)
if(a1==null)a1=0
a2=A.k.D(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return B.b(t.a7O("Time's up \u2014 no progress to pay."),$async$mr)
case 22:w=23
return B.b(t.Ge(),$async$mr)
case 23:w=1
break
case 21:a3=g.h(0,"wagers")
r=B.aQ((s.b(a3)?B.Y(a3,r,h):B.Q(r,h)).h(0,j))
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
r=t.b_
if(r!=null)r.a9(0)
a8=t.a.x*1.46*a2
a9=a8+a7
t.n(new C.d35(t,a8,a2))
r=t.a
r.toString
h=A.o.u(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+A.k.ab(a7,2):d+" ("+b1+"/"+b2+")"
r.he(new B.cP(h,b0,a9,A.fy,A.eW,d,null,null,A.cc,new B.N(Date.now(),0,!1)))
t.a.bl()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+A.k.ab(a9,2)+" (includes opponent bonus $"+A.k.ab(a7,2)+")":"+$"+A.k.ab(a8,2)+" (your progress payout)"
s=t.a
C.uW(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return B.b(t.Ip(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$mr)
case 24:w=25
return B.b(t.Ge(),$async$mr)
case 25:case 1:return B.h(u,v)}})
return B.i($async$mr,v)},
D6(d,e,f){return this.c7_(d,e,f)},
c7_(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$D6=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a9(0)
s=t.b_
if(s!=null)s.a9(0)
r=t.a.x*1.46*d
t.n(new C.d2K(t,r,d))
s=A.o.u(1000*Date.now())
q=t.a
p=new B.cP(s,q.c.a,r,A.fy,A.eW,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,A.cc,new B.N(Date.now(),0,!1))
B.aeo(p,!0)
t.a.he(p)
t.a.bl()
if(t.c==null){w=1
break}o=A.k.U(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&B.c()
m=q+C.aeC(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?A.d.cO(t.cy,0,new C.d2L()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+A.k.ab(r,2)+" ("+n+"% \u2014 "+B.t(k)+" mistakes/missed)":"+$"+A.k.ab(r,2)+" ("+n+"% of full prize)"
q=t.a
C.uW(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return B.b(t.Ip(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$D6)
case 3:w=4
return B.b(C.aeg(t.a.f,j),$async$D6)
case 4:case 1:return B.h(u,v)}})
return B.i($async$D6,v)},
bTx(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.yZ()
v=o.MF()}catch(u){return}if(v<=0||w<=0)return
t=A.k.D(w/v,0,1)
s=B.OX(A.k.ab(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=A.o.u(1000*Date.now())
p=o.a
r.he(new B.cP(q,p.c.a,s,A.fy,A.eW,"Game partial: "+p.f+" ("+B.t(w)+"/"+B.t(v)+", left early)",n,n,A.cc,new B.N(Date.now(),0,!1)))
o.a.bl()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.uW(s,n,"Left early \xb7 +$"+A.k.ab(s,2)+" ("+B.t(w)+"/"+B.t(v)+")",q,r,p,n,!0)},
ME(d,e){return this.bHV(d,e)},
a7O(d){return this.ME(null,d)},
bHV(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$ME=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a9(0)
s=t.b_
if(s!=null)s.a9(0)
s=t.a
r=s.c.a
q=s.f
s=s.x
C.uW(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return B.b(t.Ip(d,e,"YOU LOSE",!1),$async$ME)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ME,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&B.c()
w=A.o.aj(m,60)
m=A.a.aU(A.o.u(A.o.J(m,60)),2,"0")
v=B.aF(n,n,n,n,A.ahJ,n,n,n,new C.d3k(d),n,n,n,n,n,n)
if(o.ghq()){u=o.bx
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=B.C(B.d(u?t.f+" vs "+B.t(o.bx):t.f,n,2,A.a0,n,n,n,A.fS,n,n,n),1)
r=B.m(10)
q=x.p
r=B.A(B.a([v,s,B.p(n,C.anm(new C.d3l(o),A.qL,t.c.a),A.i,n,n,new B.o(A.cI,n,n,r,n,n,A.n),n,n,n,n,A.fD,n,n,n)],q),A.m,n,A.e,A.j,0,n,n)
t=o.a
s=t.w
v=B.m(10)
s=B.p(n,B.A(B.a([B.C(B.d("Win $"+A.k.ab(t.x*1.46,2)+" \xb7 stake $"+A.k.ab(o.a.x,2)+" \u2022 Progress "+o.yZ()+"/"+o.MF(),n,n,n,n,n,n,D.eqj,n,n,n),1),new C.amy(o.a.c.a,new C.d3m(o),n),A.ab,D.brj,A.d4,B.d(""+w+":"+m,n,n,n,n,n,n,A.or,n,n,n)],q),A.m,n,A.e,A.j,0,n,n),A.i,n,n,new B.o(n,n,n,v,n,new B.a7(A.a1,A.a7,A.w,s,n,n),A.n),n,n,n,n,A.fW,n,n,n)
v=o.a.w
m=B.S(v).k("I<1,x>")
m=B.z(new B.I(v,new C.d3n(),m),m.k("ai.E"))
w=B.m(14)
v=B.H(A.be,A.r,1)
p=C.aLK(n,D.aYj,B.br(!0,new B.B(Ae.UT,B.u(B.a([r,s,A.P,new B.fh(new C.d3o(o),n),A.ar,B.C(B.p(n,o.bHU(),A.i,n,n,new B.o(n,n,v,w,n,new B.a7(A.a1,A.a7,A.w,m,n,n),A.n),n,n,n,n,A.ch,n,n,n),1)],q),A.al,n,A.e,A.j,0,A.p),n),!0,!1,A.ag,!0,!0))
if(!o.c9)return p
m=B.W(140,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255)
w=B.W(242,A.i6.l()>>>16&255,A.i6.l()>>>8&255,A.i6.l()&255)
v=B.m(18)
u=B.H(A.be,A.r,1)
return new B.am(A.W,n,A.a9,A.q,B.a([p,B.c_(0,B.p(A.C,B.ec(B.p(n,B.u(B.a([D.edt,A.ac,B.d(o.cS,n,n,n,n,n,n,D.erI,A.L,n,n),A.ar,B.d(o.ce,n,n,n,n,n,n,D.eq3,A.L,n,n)],q),A.m,n,A.e,A.R,0,A.p),A.i,n,n,new B.o(w,n,u,v,n,n,A.n),n,n,n,A.ua,A.wk,n,n,n),!1,n),A.i,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
bUv(){var w=this.k3
return B.co(new C.d2J(this,w,A.k.dF(this.fr.length/w)))},
bHU(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.bUv()
if(m==="scramble"){m=o.r
m===$&&B.c()
w=x.l
return B.u(B.a([B.d(m,n,n,n,n,n,n,A.nC,n,n,n),B.d("Words "+o.bn+"/5",n,n,n,n,n,n,A.BE,n,n,n),A.ac,B.d("Tap letters below to fill each slot",n,n,n,n,n,n,B.l(n,n,B.W(166,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.U,B.cf(A.fz,B.ih(o.ay.length,new C.d2r(o),!0,w),A.by,6,6),A.aT,B.cf(A.fz,B.ih(o.ch.length,new C.d2s(o),!0,w),A.by,8,8),A.aT,new B.a8(1/0,n,B.hS(D.ePs,o.gbxO(),B.fe(n,n,A.az,n,n,n,n,n,n,A.c,n,n,A.c9,n,n,n,n,n,n,n)),n)],x.p),A.m,n,A.e,A.j,0,A.p)}if(m==="typing"){m=o.w
m===$&&B.c()
return new C.aoI(m,o.e,new C.d2t(o),new C.d2u(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&B.c()
m=B.a([B.d(m,n,n,n,n,n,n,A.nC,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(B.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,A.BE,n,n,n))
m.push(A.ac)
if(o.a.e==="sequence"){w=o.au
w===$&&B.c()
w+=", ?"}else w=o.CW
m.push(B.f0(A.C,B.d(w,n,n,n,n,n,n,A.op,A.L,n,n),A.i,A.dq))
m.push(A.aT)
w=o.x
A.d.v(m,new B.I(w,new C.d2v(o),B.S(w).k("I<1,r>")))
return B.u(m,A.m,n,A.e,A.j,0,A.p)}if(m==="puzzle")return B.co(new C.d2w(o))
if(m==="simon"){m=o.r
m===$&&B.c()
return B.u(B.a([B.d(m,n,n,n,n,n,n,A.nC,n,n,n),B.d("Progress "+o.p3+"/21",n,n,n,n,n,n,A.BE,n,n,n),A.P,B.C(B.lW(1,B.ih(4,new C.d2x(o),!0,x.l),2,10,10,n,A.dJ,!1),1)],x.p),A.m,n,A.e,A.j,0,A.p)}if(m==="pattern")return B.co(new C.d2y(o))
if(m==="color"){u=B.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[A.dy,A.dr,A.hu,A.qt]
m=o.r
m===$&&B.c()
m=B.d(m,n,n,n,n,n,n,A.nC,n,n,n)
w=B.d("Round "+o.aZ+"/5",n,n,n,n,n,n,A.BE,n,n,n)
v=o.av
v===$&&B.c()
s=o.aK
s===$&&B.c()
s=B.a([m,w,A.ac,B.d(v,n,n,n,n,n,n,B.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.aT],x.p)
r=J.e0(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=B.fe(n,n,B.W(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,A.c,n,n,A.eU,n,n,n,n,n,n,n)
r[q]=new B.B(A.cR,new B.a8(1/0,n,B.hS(new B.w(u[q],n,A.cr,n,n,n,n,n,n,n,n,n),new C.d2z(o,u,q),m),n),n)}A.d.v(s,r)
return B.u(s,A.m,n,A.e,A.j,0,A.p)}if(m==="reflex"){m=o.y
p=m?A.br:A.ck
w=o.r
w===$&&B.c()
w=B.d(w,n,n,n,n,n,n,A.a3N,A.L,n,n)
v=B.d("Fast taps "+o.Y+"/5",n,n,n,n,n,n,D.enA,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=B.d(m,n,n,n,n,n,n,B.l(n,n,A.c,n,n,n,n,n,n,n,n,Math.min(B.aG(s,A.bM,x.w).w.a.a*0.18,72),n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return B.qT(B.aJ(A.c5,B.de(n,B.u(B.a([w,A.P,v,A.bd,s,A.bd,new B.B(A.Dj,B.d(m,n,n,n,n,n,n,B.l(n,n,B.W(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,A.a_,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),A.m,n,A.b5,A.j,0,A.p),p,n,A.b7,n,T.zk,n,n,n,n,n,n,n),A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gbNi(),n,n,n,n,n,n,!1,A.ae))}if(A.d.q(D.Nv,m)&&o.aS!=null){m=o.a.e
w=o.aS
w.toString
return C.hB4(m,new C.d2A(o),new C.d2B(o),o.d,w)}m=o.r
m===$&&B.c()
return B.at(B.d(m,n,n,n,n,n,n,A.dj,n,n,n),n,n,n)}}
C.aj1.prototype={
S(){return new C.bcg()},
cFK(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bcg.prototype={
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.a,a0=d.c,a1=d.d
d=B.aG(a2,A.e0,x.w).w
w=x.p
v=B.a([B.bIB(!1,f.a.r,"INVESTMENT PLANS",e),A.d1],w)
u=a0.x
if(u!=null){t=u.d.bP()
s=A.a.aU(A.o.u(B.bC(t)),2,"0")
r=A.a.aV(A.o.u(B.by(t)+1),2)
q=B.m(18)
p=B.H(D.aag,A.r,2.2)
o=x.V
n=B.a([new B.a9(0,A.G,B.W(89,A.pT.l()>>>16&255,A.pT.l()>>>8&255,A.pT.l()&255),A.eO,20),new B.a9(0,A.G,B.W(102,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.dm,14)],o)
m=B.an(e,B.p(e,e,A.i,e,e,new B.o(B.W(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),e,e,e,e,e,A.a6),e,120,e,e,e,e,e,120),e,e,e,-20,-24,e)
l=B.m(10)
k=B.H(D.aag,A.r,3.4)
o=B.a([new B.a9(0,A.G,B.W(166,A.pT.l()>>>16&255,A.pT.l()>>>8&255,A.pT.l()&255),A.dF,10),new B.a9(0,A.G,B.W(89,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.cC,6)],o)
o=B.A(B.a([B.p(e,e,A.i,e,e,new B.o(e,e,k,l,o,new B.a7(A.ax,A.aE,A.w,D.cKx,D.cnU,e),A.n),e,42,e,e,e,e,e,56),A.bd,f.b0u(a2,!0)],w),A.m,e,A.e,A.j,0,e,e)
l=B.C_(u.a,1,A.a0,D.euE)
k=u.b
j=u.c
i=B.C_("Making $"+B.dx(k*j)+" Daily",1,A.a0,D.euR)
h=B.C_(f.aWG(k),1,A.a0,D.eoh)
r=B.A(B.a([B.C(B.u(B.a([D.eJa,B.C_(a0.c,1,A.a0,D.aJx)],w),A.F,e,A.e,A.j,0,A.p),1),B.u(B.a([D.eIX,B.d(s+"/"+r,e,e,e,e,e,e,D.aJx,e,e,e)],w),A.dD,e,A.e,A.j,0,A.p)],w),A.m,e,A.e,A.j,0,e,e)
s=B.p(e,e,A.i,B.W(89,D.vP.l()>>>16&255,D.vP.l()>>>8&255,D.vP.l()&255),e,e,e,1,e,e,e,e,e,e)
j=B.A(B.a([f.anc("INVESTED","$"+B.dx(k),!0),f.anc("DAILY ROI",A.k.ab(j*100,2)+"%",!0),f.anc("DAYS LEFT",""+(261-u.f)+" d",!0)],w),A.m,e,A.iZ,A.j,0,e,e)
k=B.dx(u.e)
u=u.f
g=261-u>0?"ACTIVE":"ENDED"
A.d.v(v,B.a([D.eP5,A.tu,B.p(e,new B.am(A.W,e,A.a9,A.q,B.a([m,B.u(B.a([o,A.P,D.eHK,A.bw,l,A.aw,i,A.aw,h,A.P,r,A.ar,s,A.ar,j,A.aw,B.C_("Earned $"+k+" \u2022 Clocked "+u+"/261 \u2022 "+g,1,A.a0,D.eu3)],w),A.F,e,A.e,A.R,0,A.p)],w),e),A.i,e,e,new B.o(e,e,p,q,n,D.bFD,A.n),e,e,e,e,A.bC,e,e,1/0),A.a38],w))}v.push(D.eAr)
v.push(A.tu)
A.d.v(v,new B.I(a1,new C.d6F(f,a2),B.S(a1).k("I<1,r>")))
return B.cg(e,A.K,B.br(!1,B.ce(B.u(v,A.F,e,A.e,A.j,0,A.p),A.q,e,A.z,e,new B.L(20,10,20,124+d.r.d),e,e,A.af),!0,!1,A.ag,!0,!0),e,!1,!1,e,e)},
b0u(d,e){var w=null,v=B.W(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.m(8),t=B.H(A.j8,A.r,1)
return B.p(w,B.A(B.a([B.U(A.afH,A.c,w,w,w,16),A.d4,B.d("TAP",w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,10,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.R,0,w,w),A.i,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.eu,w,w,w)},
aWG(d){var w=A.a.aU(A.o.u(A.k.U(d*100)),4,"0")
return"****  ****  ****  "+A.a.aV(w,w.length-4)},
anc(d,e,f){var w=null,v=B.W(217,D.vP.l()>>>16&255,D.vP.l()>>>8&255,D.vP.l()&255)
v=B.d(d,w,w,w,w,w,w,B.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.u(B.a([v,A.bw,B.C_(e,w,w,B.l(w,w,E.z4,w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),A.F,w,A.e,A.j,0,A.p)},
c92(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gcJY(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
w=B.H(A.aN,A.r,2)
p=x.V
o=B.a([new B.a9(0,A.G,B.W(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.Pb,16),new B.a9(0,A.G,B.W(115,A.ai.l()>>>16&255,A.ai.l()>>>8&255,A.ai.l()&255),A.dm,14),new B.a9(0,A.G,B.W(51,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.cC,8)],p)
n=B.an(d,B.p(d,d,A.i,d,d,new B.o(d,d,d,d,d,new B.bT(A.C,0.5,A.w,d,0,B.a([B.W(89,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),B.W(0,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)],x.O),d,d),A.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=B.m(5)
l=B.H(A.c,A.r,2.2)
k=B.bg(4286436348)
k=B.W(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=B.W(A.k.U(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
i=B.bg(4279150057)
h=x.p
p=B.A(B.a([new B.a8(44,44,new B.am(A.W,d,A.a9,A.i,B.a([B.an(d,B.eO(A.C,0.7853981633974483,B.p(d,d,A.i,d,d,new B.o(d,d,l,m,B.a([new B.a9(0.5,A.G,k,A.J,14),new B.a9(0,A.G,j,A.J,6),new B.a9(0,A.G,B.W(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new B.v(0,2),4)],p),D.bEp,A.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.dPE],h),d),d),A.bd,e.b0u(b2,!0)],h),A.m,d,A.e,A.j,0,d,d)
a6=B.C_(a6,1,A.a0,D.ele)
i=B.C_(e.aWG(a3),1,A.a0,D.eyY)
j=B.A(B.a([e.aW7(A.k.ab(2.86,2)+"%"),A.ey,e.aW7("261d")],h),A.m,d,A.e,A.j,0,d,d)
k=B.C(B.u(B.a([D.eBz,B.C_("$"+B.dx(a3),1,A.a0,D.exP)],h),A.F,d,A.e,A.j,0,A.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=B.A(B.a([k,B.d(m,d,d,d,d,d,d,D.elZ,d,d,d)],h),A.dD,d,A.e,A.j,0,d,d)
k=B.p(d,d,A.i,B.W(89,A.bz.l()>>>16&255,A.bz.l()>>>8&255,A.bz.l()&255),d,d,d,1,d,d,d,d,d,d)
l=B.A(B.a([B.C(e.au0("Daily","$"+B.dx(a4)),1),A.ey,B.C(e.au0("Total","$"+B.dx(a4*261)),1),A.ey,B.C(e.au0("Days","261"),1)],h),A.m,d,A.e,A.j,0,d,d)
g=q?d:new C.d6E(e,b3,a3,t)
f=A.k.U(127.5)
f=B.fe(d,d,A.bh,B.W(f,A.ai.l()>>>16&255,A.ai.l()>>>8&255,A.ai.l()&255),B.W(f,A.aJ.l()>>>16&255,A.aJ.l()>>>8&255,A.aJ.l()&255),d,3,d,d,A.aN,d,d,d,d,new B.b5(B.m(10),D.aPa),d,d,d,d,d)
return B.p(d,new B.am(A.W,d,A.a9,A.i,B.a([n,B.u(B.a([p,A.bw,D.eJQ,A.bw,a6,A.dh,i,A.hh,j,A.hh,m,A.hh,k,A.hh,l,A.P,new B.a8(1/0,40,B.hS(B.f0(A.C,B.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.emm,d,d,d),A.i,A.e8),g,f),d)],h),A.F,d,A.e,A.R,0,A.p)],h),d),A.i,d,d,new B.o(d,d,w,a0,o,D.bGa,A.n),d,d,d,A.kR,D.bec,d,d,1/0)},
aW7(d){var w=null,v=B.W(115,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.m(5),t=B.H(A.ct,A.r,1)
return B.p(w,B.d(d,w,w,w,w,w,w,D.elC,w,w,w),A.i,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.DA,w,w,w)},
au0(d,e){var w=null,v=B.W(97,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),u=B.m(7),t=B.H(A.aJ,A.r,1)
return B.p(w,B.u(B.a([B.d(d,w,w,w,w,w,w,D.eup,w,w,w),A.y3,B.f0(A.a1,B.d(e,w,w,w,w,w,w,D.ewU,w,w,w),A.i,A.dq)],x.p),A.F,w,A.e,A.j,0,A.p),A.i,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ni,w,w,w)}}
C.afn.prototype={
S(){var w=null,v=B.a([],x._),u=$.as()
return new C.au7(v,new B.ao(A.aq,u),new B.ao(A.aq,u),B.mo(0,w,w),new B.hT(),D.OF,C.aed(),B.a([],x.fw),B.aY(x.N),B.mo(0,w,w))}}
C.au7.prototype={
Z(){var w,v,u,t,s,r=this
r.a0()
w=r.a
w.toString
r.d=0
v=B.yp(0,1)
r.e!==$&&B.aO()
r.e=v
r.ay=w.f.av
w=r.k3=B.bi(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t].a
if(s.length!==0)u.G(0,s)}r.a98()
r.MZ()
r.amR()
r.clj()
r.cly()
$.aT.x1$.push(new C.cvJ(r))
r.a.toString},
MZ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$MZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.amY(),$async$MZ)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cv3(t,s))
case 1:return B.h(u,v)}})
return B.i($async$MZ,v)},
gavx(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gMV())return!0
return!1},
gMV(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaPL(){var w,v=this.CW
if(v==null)return A.bs
w=v.bv(new B.N(Date.now(),0,!1))
return w.a<0?A.bs:w},
btx(){var w=this
if(w.a.c.w)return
if(w.gMV()){if(!w.cx)w.n(new C.cuU(w))}else if(w.cx)w.n(new C.cuV(w))},
ceV(){this.n(new C.cvd(this))},
rZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$rZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.n(new C.cva(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.n(new C.cvb(t))
w=1
break}w=3
return B.b(C.c3_(o.a,s),$async$rZ)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return B.b(C.c30(t.a.c.a,s),$async$rZ)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.n(new C.cvc(t,r,q))
t.cnd()
t.btx()
if(r===3)t.Wm(r)}case 1:return B.h(u,v)}})
return B.i($async$rZ,v)},
Wm(d){return this.bUm(d)},
bUm(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Wm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return B.b(C.byK(q,r,new C.cv5(t),d,s.c.a),$async$Wm)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Wm,v)},
wm(d){return this.buY(d)},
amR(){return this.wm(!1)},
buY(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$wm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return B.b(B.a5v(k,C.h0B(l.d)),$async$wm)
case 3:j=m
w=4
return B.b(C.c3p(k),$async$wm)
case 4:s=j.a=f
w=5
return B.b(B.anK(k),$async$wm)
case 5:r=f
w=!s.a&&J.cs(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.Tb(!0,l,q,p)
m.a=s
w=8
return B.b(C.an_(k,s),$async$wm)
case 8:case 7:w=9
return B.b(C.Sc(k),$async$wm)
case 9:o=f
w=10
return B.b(C.a4U(k),$async$wm)
case 10:n=f
if(t.c==null){w=1
break}t.n(new C.cuW(m,t,r,o,n))
case 1:return B.h(u,v)}})
return B.i($async$wm,v)},
Ob(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ob=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.MZ(),$async$Ob)
case 3:s=t.c
if(s==null){w=1
break}r=B.eN(new C.cv8(t),!1,null,x.H)
w=4
return B.b(B.a6(s,!1).cz(r),$async$Ob)
case 4:w=5
return B.b(t.MZ(),$async$Ob)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ob,v)},
cpf(){this.n(new C.cvw(this))},
cly(){var w=this,v=w.go
if(v!=null)v.a9(0)
if(w.a.c.w)return
w.go=B.dD(A.rv,new C.cvq(w))},
cnd(){var w=this,v=w.id
if(v!=null)v.a9(0)
w.id=null
if(!w.gMV()||w.CW==null)return
w.id=B.dD(A.fV,new C.cvt(w))},
clj(){var w=this,v=w.fy
if(v!=null)v.a9(0)
w.fy=B.dD(A.iS,new C.cvp(w))
w.DL()},
DL(){return this.cnc()},
cnc(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$DL=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.av
t=4
w=7
return B.b(B.au(),$async$DL)
case 7:q=e
p=B.aR(J.q(q.a,"app_config"))
if(p!=null&&p.length!==0){o=A.Q.aC(0,p,null)
if(x.f.b(o)){m=B.BM(B.Y(o,x.N,x.z)).av
i.a=m
r.a.f.av=m}}w=10
return B.b(B.Jd(),$async$DL)
case 10:w=e?8:9
break
case 8:w=11
return B.b(B.aLJ(),$async$DL)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.av=l
w=14
return B.b(q.an("String","app_config",A.Q.ak(k.ad(),null)),$async$DL)
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
break}if(i.a!==r.ay)r.n(new C.cvr(i,r))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$DL,v)},
b_t(){A.d.aY(this.f,new C.cvo())},
a98(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a98=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.L_(t.a.c.a),$async$a98)
case 3:q=e
if(t.c==null){w=1
break}s=B.a([],x._)
if(J.cs(q)){A.d.v(s,q)
A.d.aY(s,new C.cv0())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(B.D(["role","ai","text",r,"at",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z))}t.n(new C.cv1(t,s))
t.ZT(!0)
B.bK(A.ja,new C.cv2(t),x.H)
case 1:return B.h(u,v)}})
return B.i($async$a98,v)},
aco(){var w=0,v=B.j(x.H),u=this
var $async$aco=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(B.akP(u.a.c.a,u.f),$async$aco)
case 2:return B.h(null,v)}})
return B.i($async$aco,v)},
bo(d){this.bz(d)},
p(){var w,v=this,u=v.fy
if(u!=null)u.a9(0)
u=v.go
if(u!=null)u.a9(0)
u=v.id
if(u!=null)u.a9(0)
u=v.r
w=$.as()
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
a89(d){var w,v=this
v.n(new C.cuZ(v,d))
w=v.e
w===$&&B.c()
if(w.f.length!==0)w.zY(d,A.cm,A.ko)
else $.aT.x1$.push(new C.cv_(v,d))
if(d===0)v.ZT(!0)
if(d===1)v.cgN(!0)},
ZT(d){$.aT.x1$.push(new C.cvg(this,d))},
av9(){return this.ZT(!1)},
Ze(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ze=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ZL(),$async$Ze)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==A.a.i(t.a.f.r))t.n(new C.cv9(t))
case 1:return B.h(u,v)}})
return B.i($async$Ze,v)},
mq(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$mq=B.e(function(c8,c9){if(c8===1){s.push(c9)
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
return B.b(C.amT(a9.a,b0),$async$mq)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return B.b(q.rZ(),$async$mq)
case 10:q.n(new C.cvh(q))
w=1
break
case 8:w=11
return B.b(q.rZ(),$async$mq)
case 11:if(q.c!=null&&q.ch===3)q.Wm(3)
case 6:case 4:q.n(new C.cvi(q,c5))
C.S_(q.a.c.a,"user",c5)
q.av9()
t=13
a8={}
w=16
return B.b(q.Ze(),$async$mq)
case 16:b1=A.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return B.b(B.ZL(),$async$mq)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.n(new C.cvj(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.bwX("",null)
q.n(new C.cvk(q,p))
C.S_(q.a.c.a,"ai",p)
q.av9()
r=[1]
w=14
break}o=B.mV(a9)
a9=q.a
n=""
m=C.h0B(a9.d)
w=C.h0u(c5)?20:21
break
case 20:w=22
return B.b(C.c3o(q.a.c.a),$async$mq)
case 22:q.db=c9
w=23
return B.b(q.wm(!0),$async$mq)
case 23:case 21:w=24
return B.b(B.a5v(q.a.c.a,m),$async$mq)
case 24:l=c9
k=C.hie(l)
a9=k
b2=Date.now()
b3=new B.N(b2,0,!1).bP()
b2=A.a.aU(A.o.u(B.bC(b3)),2,"0")
b4=A.a.aU(A.o.u(B.bN(b3)),2,"0")
b5=A.a.aU(A.o.u(B.ds(b3)),2,"0")
b6=A.a.aU(A.o.u(B.hy(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+B.by(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return B.b(C.Sc(q.a.c.a),$async$mq)
case 25:i=c9
h=C.fMh(i,25)
w=26
return B.b(C.a4U(q.a.c.a),$async$mq)
case 26:g=c9
f=C.fNQ(g)
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
return B.b(C.aee(a9,q.a.c.a,c5),$async$mq)
case 27:a0=c9
a1=""
if(C.h0u(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:A.a.i(b2).length!==0)===!0){b2.toString
b8=A.a.i(b2)}else{a9=a9.c
b8=A.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=B.t(d)
b4=B.t(j)
b5=q.a.c.w?"\n"+C.hDO(m)+"\n":""
b6=J.aa(n)!==0?"\n"+B.t(n)+"\n":""
b9=J.aa(a0)!==0?"\n"+B.t(a0)+"\n":""
c0=B.t(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hcA(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+B.t(c5)
w=28
return B.b(B.ra(o,a2,A.hf,null),$async$mq)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.bwX(a8.a,a3.a)
a4=c2
a5=B.h_R(a4)
c3=a5.a
a8.b=c3
if(A.d.gag(c3)){a9=B.z(C.hGq(c5),x.an)
a6=a9
J.fR(a6,C.hGr(c5))
J.fR(a6,C.hGs(c5))
J.fR(a6,B.h_k(c5))
J.fR(a6,C.hGv(c5,q.a.c.w))
a8.b=a6}c3=C.hFH(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return B.b(B.aeu(c3,a6,m,q.a.c.a),$async$mq)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.n(new C.cvl(a8,q,a7))
C.S_(q.a.c.a,"ai",a7)
if(J.cs(a8.b)&&q.c!=null)q.Ic(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.n(new C.cvm(q))
C.S_(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.n(new C.cvn(q))
q.av9()
q.aco()
if(!q.a.c.w)q.rZ()
w=r.pop()
break
case 15:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$mq,v)},
c82(d){var w=B.Q(x.N,x.z)
w.m(0,"type",d.a)
w.v(0,d.b)
return w},
c83(d){var w,v,u,t,s,r,q,p=J.q(d,"phoneActions")
if(!x.j.b(p))return A.hW
w=B.a([],x.Z)
for(v=J.aW(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gT(v)
if(u.b(r)){q=B.c6o(B.Y(r,t,s))
if(q!=null)w.push(q)}}return w},
Ic(d){return this.cfn(d)},
cfn(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ic=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=J.aW(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gT(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return B.b(C.aep(p,o,new C.cve(t,p)),$async$Ic)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return B.b(B.F2(p,null,o,!1,!0,t.a.c.a),$async$Ic)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.E(r).f
p.P(new B.aX(new B.w(m,null,null,null,null,null,null,null,null,null,null,null),A.ck,null,null,null,null,null,null,null,null,null,null,null,A.o0,!1,null,null,null,A.q,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return B.b(B.F2(p,l.f,o,k,n,j),$async$Ic)
case 11:m=f
if(t.c==null||m==null){w=3
break}w=i?12:13
break
case 12:p=p.b
o=J.a4(p)
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
return B.b(C.aUz(p,B.a([new C.qH("out_"+1000*o,new B.N(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$Ic)
case 14:t.amR()
case 13:p=t.c.E(r).f
p.P(new B.aX(new B.w(m,null,null,null,null,null,null,null,null,null,null,null),A.dp,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null))
w=3
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Ic,v)},
PQ(d){return this.cnG(d)},
cnG(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$PQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return B.b(C.aep(d,n,new C.cvv(t)),$async$PQ)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return B.b(B.F2(d,null,n,!1,!0,t.a.c.a),$async$PQ)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.E(x.q).f.P(B.aZ(null,null,null,A.ck,null,A.q,null,B.d(s,null,null,null,null,null,null,null,null,null,null),null,A.o0,null,null,null,null,null,null,null,null,null,null))
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
return B.b(B.F2(d,q.f,r,p,n,o),$async$PQ)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.E(x.q).f.P(B.aZ(null,null,null,A.dp,null,A.q,null,B.d(s,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$PQ,v)},
cgN(d){$.aT.x1$.push(new C.cvf(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.K(d).ax.a===A.H,j=k?A.dc:A.zb,i=m.d
i===$&&B.c()
w=x.O
w=k?B.a([A.aaH,D.b2d],w):B.a([A.aK,A.r7],w)
v=B.m(22)
u=B.a([new B.a9(0,A.G,B.W(71,A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255),A.cv,16)],x.V)
t=m.a.c.w?m.gc3R():l
s=B.W(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
r=B.H(A.c1,A.r,1.5)
t=B.aJ(l,B.p(l,C.fCy(m.a.f.Q,48),A.i,l,l,new B.o(s,l,r,l,l,l,A.a6),l,48,l,l,l,l,l,48),A.z,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,A.ae)
r=B.d("NGMY Helper",l,1,A.a0,l,l,l,A.dQ,l,l,l)
s=B.p(l,l,A.i,l,l,D.aRe,l,8,l,l,l,l,l,8)
if(m.gavx()&&m.d===0)q=m.gMV()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=B.p(l,B.A(B.a([t,A.bb,B.C(B.u(B.a([r,A.bw,B.A(B.a([s,A.bp,B.C(B.d(q,l,1,A.a0,l,l,l,B.l(l,l,B.W(A.k.U(229.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,A.cn,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),A.m,l,A.e,A.j,0,l,l)],p),A.F,l,A.e,A.j,0,A.p),1),B.aF(l,l,l,l,A.mF,l,l,l,new C.cvB(d),l,l,l,l,l,l)],p),A.m,l,A.e,A.j,0,l,l),A.i,l,l,new B.o(l,l,l,v,u,new B.a7(A.ax,A.aE,A.w,w,l,l),A.n),l,l,l,F.ack,D.beS,l,l,l)
v=k?D.r8:A.c
u=B.m(14)
t=B.H(k?A.bG:A.ep,A.r,1)
u=B.p(l,B.A(B.a([m.bxz(),m.cnp(1,A.ln,"Music")],p),A.m,l,A.e,A.j,0,l,l),A.i,l,l,new B.o(v,l,t,u,l,l,A.n),l,l,l,l,A.ek,l,l,l)
t=m.e
t===$&&B.c()
if(m.gavx()){v=B.a([],p)
if(m.gMV()){s=B.W(38,A.dp.l()>>>16&255,A.dp.l()>>>8&255,A.dp.l()&255)
r=B.m(12)
q=B.H(B.W(115,A.dp.l()>>>16&255,A.dp.l()>>>8&255,A.dp.l()&255),A.r,1)
v.push(new B.B(D.UW,B.p(l,B.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hgA(m.gaPL())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.ewn,A.L,l,l),A.i,l,l,new B.o(s,l,q,r,l,l,A.n),l,l,l,l,A.eh,l,l,1/0),l))}if(m.cy&&!m.gMV()){s=B.W(31,A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255)
r=B.m(12)
q=B.m(12)
o=B.U(A.rJ,k?A.iy:A.h7,l,l,l,16)
v.push(new B.B(D.UW,B.aD(!1,A.X,!0,r,B.aH(!1,q,!0,new B.B(A.eh,B.A(B.a([o,A.bp,B.d("Back to NGMY Helper AI",l,l,l,l,l,l,B.l(l,l,k?A.iy:A.h7,l,l,l,l,l,l,l,l,12,l,l,A.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),A.m,l,A.b5,A.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gceU(),l,l,l,l,l,l,l),A.i,s,0,l,l,l,l,l,A.aa),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcpe():l
v.push(B.C(new C.amW(s,q,new C.cvC(),r,o,l),1))
v=B.u(v,A.m,l,A.e,A.j,0,A.p)}else v=m.bxA(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.fOH(r)
t=B.a([w,A.ac,new B.B(A.iT,u,l),A.P,B.C(B.fPF(B.a([v,new C.amZ(q,o,n,new C.cvD(m,d),s,l)],p),A.q,t,A.z,new C.cvE(m),l),1)],p)
if(m.d===0&&!m.gavx()){w=B.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.ZV:D.Zi
w.push(new B.a8(l,36,B.hF(l,new C.cvF(m),v.length,l,l,A.b_,new C.cvG(),!1),l))}if(m.ax&&m.f.length<=1)w.push(A.P)
v=m.r
u=B.l(l,l,k?A.c:A.bg,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=B.l(l,l,k?A.aA:A.dx,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?A.x:A.c
r=B.W(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=B.m(22)
o=B.m(22)
n=k?A.be:A.eZ
u=B.C(B.aI(l,A.T,!1,l,!0,A.q,l,B.aL(),v,l,l,l,l,l,2,B.bn(l,new B.b0(4,q,A.V),l,A.Do,l,l,l,l,!0,new B.b0(4,o,new B.ay(n,1,A.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ad,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cvH(m),l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,u,!0,A.a5,l,A.am,l,A.aIs,l,l),1)
s=m.at
r=s?l:m.gchN()
w.push(B.A(B.a([u,new B.H2(v,A.aK,l),A.bp,B.aD(!1,A.X,!0,l,B.aH(!1,l,!0,new B.a8(44,44,s?D.dKt:P.ahB,l),A.cD,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),A.i,A.aK,0,l,l,A.cD,l,l,A.aa)],p),A.dD,l,A.e,A.j,0,l,l))
w=B.u(w,A.m,l,A.e,A.R,0,A.p)
v=k?A.kL:A.c
t.push(B.tg(A.pI,B.p(l,new B.B(A.Dl,w,l),A.i,l,l,new B.o(v,l,B.H(k?B.W(41,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.W(18,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.r,1),A.pI,l,l,A.n),l,l,l,l,l,l,l,l),14,!1))}return new B.U2(i,new C.cvI(m),B.cg(l,j,B.br(!0,B.u(t,A.m,l,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),l,!1,!1,l,l),l)},
bxz(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.c()
w=p===0
p=this.c
p.toString
v=B.K(p).ax.a===A.H
if(w)p=B.W(A.k.U(255*(v?0.25:0.12)),A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255)
else p=A.K
u=B.m(11)
t=w?B.H(B.W(A.k.U(127.5),A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255),A.r,1):q
s=B.U(A.rL,w?A.aK:A.cO,q,q,q,17)
if(w)r=v?A.c:A.aG
else r=A.cO
return B.C(B.aJ(q,B.de(q,B.A(B.a([s,A.bp,B.d("Chat",q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.m,q,A.b5,A.j,0,q,q),q,q,A.b7,new B.o(p,q,t,u,q,q,A.n),A.eC,q,q,q,A.wb,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cuX(this),q,q,q,q,q,q,!1,A.ae),1)},
cnp(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&B.c()
w=p===d
p=this.c
p.toString
v=B.K(p).ax.a===A.H
if(w)p=B.W(A.k.U(255*(v?0.25:0.12)),A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255)
else p=A.K
u=B.m(11)
t=w?B.H(B.W(A.k.U(127.5),A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255),A.r,1):q
s=B.U(e,w?A.aK:A.cO,q,q,q,17)
if(w)r=v?A.c:A.aG
else r=A.cO
r=B.a([s,A.bp,B.d(f,q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return B.C(B.aJ(q,B.de(q,B.A(r,A.m,q,A.b5,A.j,0,q,q),q,q,A.b7,new B.o(p,q,t,u,q,q,A.n),A.eC,q,q,q,A.wb,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cvu(this,d),q,q,q,q,q,q,!1,A.ae),1)},
bxA(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.b6L:B.W(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
w=B.m(18)
v=B.H(d?A.du:A.aJ,A.r,1)
u=q===0?1:q
return B.p(s,B.jQ(!0,s,t.ok,new C.cuY(t,e,d),u,s,A.c2,s,s,!1,!1),A.i,s,s,new B.o(r,s,v,w,s,s,A.n),s,s,s,A.iT,s,s,s,s)},
aJz(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a4(d),m=J.y(n.h(d,"role"),"user"),l=m?A.hW:this.c83(d),k=m?A.m_:A.e,j=x.p,i=B.a([],j),h=!m
if(h)A.d.v(i,B.a([new B.a8(28,28,C.fCy(this.a.f.Q,28),o),A.ab],j))
w=m?A.dD:A.F
j=B.a([],j)
if(h)j.push(D.dKJ)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=A.aK
else u=e?A.TQ:A.aN
t=m?16:4
s=m?4:16
if(m)r=o
else r=B.H(e?A.bG:A.aJ,A.r,1)
q=B.a([new B.a9(0,A.G,B.W(10,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.dF,6)],x.V)
if(f)n=B.d("typing\u2026",o,o,o,o,o,o,B.l(o,o,e?A.aA:A.dx,o,o,o,o,o,o,o,o,12,A.cS,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=A.c
else p=e?A.ak:A.bh
p=B.d(n,o,o,o,o,o,o,B.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(B.fyK(m,B.p(o,n,A.i,o,o,new B.o(u,o,r,new B.bx(A.kE,A.kE,new B.b2(t,t),new B.b2(s,s)),q,o,A.n),o,o,o,o,Ab.UX,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(B.h_W(l,e,this.gcnF()))
i.push(new B.dp(1,A.cj,B.u(j,w,o,A.e,A.j,0,A.p),o))
if(m)i.push(A.d4)
return new B.B(A.d6,B.A(i,A.dD,o,k,A.j,0,o,o),o)},
bxy(d,e){return this.aJz(d,e,!1)}}
C.aGS.prototype={
Z(){this.a0()
$.xA().aJ(0,this.gD0())},
p(){$.xA().a1(0,this.gD0())
this.a2()}}
C.aGT.prototype={
Z(){this.a0()
$.xA().aJ(0,this.gD0())},
p(){$.xA().a1(0,this.gD0())
this.a2()}}
C.aGU.prototype={
Z(){this.a0()
$.xA().aJ(0,this.gD0())},
p(){$.xA().a1(0,this.gD0())
this.a2()}}
C.aHP.prototype={
Z(){this.a0()
$.xA().aJ(0,this.gD0())},
p(){$.xA().a1(0,this.gD0())
this.a2()}}
C.TS.prototype={
a3(){return"NgmySnapshotResolveOutcome."+this.b}}
C.akz.prototype={
S(){return new C.ayW()}}
C.ayW.prototype={
Z(){var w,v=this
v.a0()
w=v.a
v.d=w.d
v.e=B.bi(w.e,!0,x.o)
v.f=v.a.f},
kn(d){var w=null,v=this.c
if(v==null)return
v.E(x.q).f.P(B.aZ(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
zb(d,e){return this.csA(d,e)},
csA(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this
var $async$zb=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.n(new C.dn4(q,e))
t=3
w=6
return B.b(d.$0(),$async$zb)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.n(new C.dn5(q))
w=r.pop()
break
case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zb,v)},
zB(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$zB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=t.d
q===$&&B.c()
w=3
return B.b(B.uZ(r,q),$async$zB)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.dmW(t,s))
case 1:return B.h(u,v)}})
return B.i($async$zB,v)},
a6H(){var w=0,v=B.j(x.gE),u,t=this,s,r,q,p
var $async$a6H=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zB(),$async$a6H)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&B.c()
q=t.e
q===$&&B.c()
p=t.f
p===$&&B.c()
u=B.LN(s,B.I6(B.bSV(r,q,s,p).eD(),null,"  "))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a6H,v)},
V8(){var w=0,v=B.j(x.H),u,t=this,s
var $async$V8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.oy(s,t.a.c,!1),$async$V8)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.zb(new C.dmU(t),"Preparing download\u2026"),$async$V8)
case 4:case 1:return B.h(u,v)}})
return B.i($async$V8,v)},
Wx(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Wx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.oy(s,t.a.c,!1),$async$Wx)
case 3:if(!e||t.c==null){w=1
break}w=4
return B.b(t.zb(new C.dn3(t),"Creating QR code\u2026"),$async$Wx)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Wx,v)},
Ww(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ww=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.hyV(r),$async$Ww)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}w=4
return B.b(t.zb(new C.dmT(t,s),"Looking up code\u2026"),$async$Ww)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Ww,v)},
a9X(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$a9X=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.wb.c2().Kk(A.NN,A.rF,!0),$async$a9X)
case 7:r=e
p=r
q=p==null?null:J.fm(p.a)
if(q==null){u=null
w=1
break}if(q.c!=null){p=q.c
p.toString
p=!A.aD.gag(p)}else p=!1
if(p){p=q.c
p.toString
p=B.jc(p,0,null)
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
case 6:u=B.EY()
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9X,v)},
yP(d,e,f){return this.bzQ(d,e,f)},
aKM(d,e){return this.yP(d,!1,e)},
bzP(d){return this.yP(d,!1,!1)},
bzQ(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$yP=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zB(),$async$yP)
case 3:if(t.c==null){w=1
break}if(!C.bT_(d,t.a.c,null)){t.kn(C.bT0(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&B.c()
s=!C.hch(d,s)}if(s){t.kn(y.B)
w=1
break}r=d.as
q=J.ch(r)
s=t.c
s.toString
w=4
return B.b(C.hz7(s,q,t.a.c,d),$async$yP)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=B.lK(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,"",null,null,A.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&B.c()
r=o}w=5
return B.b(B.rH(s,p,r,!1,null,null,d.ax),$async$yP)
case 5:if(t.c==null){w=1
break}t.n(new C.dmS(t,p,r,d))
t.kn("Restored your local Growth Income. Go back to see it updated.")
case 1:return B.h(u,v)}})
return B.i($async$yP,v)},
a9W(){var w=0,v=B.j(x.H),u=this
var $async$a9W=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.zb(new C.dmV(u),"Reading file\u2026"),$async$a9W)
case 2:return B.h(null,v)}})
return B.i($async$a9W,v)},
Uv(d){return this.bB5(d)},
bB5(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Uv=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&B.c()
s=new B.cP("local_qr_dep_"+1000*r,q.a,d,A.fc,A.eW,"Admin deposit ($"+B.dx(d)+")",null,null,A.cc,new B.N(Date.now(),0,!1))
C.c5q(t.d,s)
q=t.e
q===$&&B.c()
r=B.z(q,x.o)
r.push(s)
w=3
return B.b(B.rH(t.a.c,t.d,r,!0,null,null,null),$async$Uv)
case 3:w=4
return B.b(t.zB(),$async$Uv)
case 4:if(t.c==null){w=1
break}t.kn("Deposited $"+B.dx(d)+" to your local wallet.")
case 1:return B.h(u,v)}})
return B.i($async$Uv,v)},
aZU(d){var w=null
return B.cb(w,w,!0,w,new C.dn1(),d,w,!0,!0,x.N)},
TG(d){return this.btr(d)},
btr(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$TG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return B.b(t.Uv(d.b),$async$TG)
case 5:w=1
break
case 4:s=d.c
t.kn(s==null?"Could not apply deposit.":s)
case 1:return B.h(u,v)}})
return B.i($async$TG,v)},
Dl(d){return this.ccC(d)},
ccC(d){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Dl=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zB(),$async$Dl)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return B.b(C.aXr(d,t.a.c),$async$Dl)
case 4:s=f
if(!s.a){u=!1
w=1
break}if(s.b){t.kn("This deposit code was already used.")
u=!0
w=1
break}if(s.d){t.kn(y.y)
u=!0
w=1
break}if(s.c){t.kn(y.j)
u=!0
w=1
break}r=t.c
if(r==null){u=!0
w=1
break}w=5
return B.b(t.aZU(r),$async$Dl)
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
return B.b(C.c5j(d,o,n.a,r,p),$async$Dl)
case 7:w=6
return B.b(t.TG(f),$async$Dl)
case 6:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Dl,v)},
Dm(d){return this.ccD(d)},
ccD(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Dm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zB(),$async$Dm)
case 3:if(t.c==null){w=1
break}w=4
return B.b(C.c5i(d,t.a.c),$async$Dm)
case 4:s=f
if(!s.a){t.kn(y.m)
w=1
break}if(s.b){t.kn("This deposit code was already used.")
w=1
break}if(s.d){t.kn(y.y)
w=1
break}if(s.c){t.kn(y.j)
w=1
break}r=t.c
if(r==null){w=1
break}w=5
return B.b(t.aZU(r),$async$Dm)
case 5:q=f
if(q==null||A.a.i(q).length===0){w=1
break}r=t.a.c
p=A.a.i(q)
o=t.e
o===$&&B.c()
n=t.d
n===$&&B.c()
w=7
return B.b(C.Tw(o,n.a,d,r,p),$async$Dm)
case 7:w=6
return B.b(t.TG(f),$async$Dm)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Dm,v)},
Nc(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Nc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!B.Bs()){t.kn("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return B.b(B.a6(s,!1).cz(B.eN(new C.dmX(),!0,null,x.N)),$async$Nc)
case 3:r=e
if(r==null||A.a.i(r).length===0){w=1
break}w=A.a.a_(A.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return B.b(t.zb(new C.dmY(t,r),"Applying deposit\u2026"),$async$Nc)
case 6:w=1
break
case 5:w=7
return B.b(t.zb(new C.dmZ(t,r),"Loading\u2026"),$async$Nc)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Nc,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.K(d).ax.a===A.H,m=n?A.iQ:A.oM,l=n?A.c:A.M,k=n?A.aP:A.ai,j=n?A.bG:A.x.j(0.06),i=x.p
j=B.A(B.a([B.aH(!1,o,!0,B.p(A.C,B.U(A.eq,l,o,o,o,16),A.i,o,o,new B.o(j,o,o,o,o,o,A.a6),o,38,o,o,o,o,o,38),A.cD,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dn6(d),o,o,o,o,o,o,o)],i),A.m,o,A.e,A.j,0,o,o)
w=B.d("Backup & Restore",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,A.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=B.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,A.cn,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=B.C(new C.Z6(D.boF,"Download",E.a_b,u?o:p.gbG9(),o),1)
t=B.A(B.a([t,A.eG,B.C(new C.Z6(A.iY,"Show QR",A.asw,u?o:p.gbVX(),o),1)],i),A.m,o,A.e,A.j,0,o,o)
u=p.r
s=B.C(new C.Z6(D.boG,"Upload",A.Nd,u?o:p.gbVV(),o),1)
s=B.A(B.a([s,A.eG,B.C(new C.Z6(A.iC,"Scan QR",D.cB2,u?o:p.gbVW(),o),1)],i),A.m,o,A.e,A.j,0,o,o)
u=p.r?o:p.gbVU()
r=n?A.c.j(0.06):A.aR.j(0.08)
q=B.m(16)
q=B.a([B.cX(B.a([j,A.aC,w,A.P,v,A.k8,t,A.aC,s,A.aC,new C.bnj(A.qg,"Enter Code",A.Z_,u,o),A.k8,B.p(o,B.A(B.a([B.U(A.hc,A.aR,o,o,o,18),A.av,B.C(B.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,B.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,A.a_,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),A.F,o,A.e,A.j,0,o,o),A.i,o,o,new B.o(r,o,o,q,o,o,A.n),o,o,o,o,A.iB,o,o,o)],i),o,Aa.JM,o,o,A.af,!1)],i)
if(p.r){j=n?A.hl:A.c
w=p.w
if(w==null)w="Working\u2026"
q.push(B.an(0,B.aD(!1,A.X,!0,o,new B.B(A.Dw,B.A(B.a([I.aHq,A.bb,B.C(B.d(w,o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),A.m,o,A.e,A.j,0,o,o),o),A.i,j,8,o,o,o,o,o,A.aa),o,o,0,0,o,o))}return B.cg(o,m,B.br(!1,new B.am(A.W,o,A.a9,A.q,q,o),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.Z6.prototype={
B(d){var w=this,v=null,u=B.m(22),t=B.m(22),s=w.e,r=B.m(22),q=B.a([new B.a9(0,A.G,A.d.gai(s).j(0.35),A.dm,16)],x.V),p=A.c.j(0.22)
return B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.p(v,B.u(B.a([B.p(v,B.U(w.c,A.c,v,v,v,30),A.i,v,v,new B.o(p,v,v,v,v,v,A.a6),v,56,v,v,v,v,v,56),A.ac,B.d(w.d,v,v,v,v,v,v,A.qN,v,v,v)],x.p),A.m,v,A.b5,A.j,0,A.p),A.i,v,v,new B.o(v,v,v,r,q,new B.a7(A.ax,A.aE,A.w,s,v,v),A.n),v,140,v,v,A.c2,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.i,A.K,0,v,v,v,v,v,A.aa)}}
C.bnj.prototype={
B(d){var w=this,v=null,u=B.m(22),t=B.m(22),s=w.e,r=B.m(22),q=B.a([new B.a9(0,A.G,A.d.gai(s).j(0.35),A.dm,16)],x.V),p=A.c.j(0.22)
return B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.p(v,B.A(B.a([B.p(v,B.U(w.c,A.c,v,v,v,24),A.i,v,v,new B.o(p,v,v,v,v,v,A.a6),v,44,v,v,v,v,v,44),A.eG,B.d(w.d,v,v,v,v,v,v,A.qN,v,v,v)],x.p),A.m,v,A.b5,A.j,0,v,v),A.i,v,v,new B.o(v,v,v,r,q,new B.a7(A.ax,A.aE,A.w,s,v,v),A.n),v,v,v,v,D.bgU,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.i,A.K,0,v,v,v,v,v,A.aa)}}
C.XN.prototype={
S(){return new C.beF()}}
C.beF.prototype={
gasb(){var w=this.e
return w===$?this.e=this.a.d:w},
Z(){var w=this
w.a0()
w.OQ()
w.f=B.dD(A.nb,new C.dna(w))},
p(){var w=this.f
if(w!=null)w.a9(0)
this.a2()},
OQ(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return B.b(B.uZ(q.e,q.f),$async$OQ)
case 3:q=e.a
s=B.bSV(q[3],q[1],t.a.e,q[4])
w=4
return B.b(B.LN(t.a.e,B.I6(s.eD(),null,"  ")),$async$OQ)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.n(new C.dn7(t,r))
case 1:return B.h(u,v)}})
return B.i($async$OQ,v)},
B(d){var w=this,v=null,u=B.K(d).ax.a===A.H,t=u?A.iQ:A.oM,s=u?A.hl:A.c,r=u?A.c:A.bg,q=B.eK(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,A.aKi,v,v,v,1,v,!0),p=B.m(24),o=B.H(A.aR.j(0.35),A.r,1),n=w.d,m=B.ph(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,A.c),l=B.d("Code: "+w.gasb(),v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=B.m(20),j=A.aR.j(0.12),i=B.m(20),h=x.p
i=B.aH(!1,k,!0,B.p(v,B.A(B.a([B.U(A.fv,A.aR,v,v,v,14),A.bp,B.d("Copy code",v,v,v,v,v,v,B.l(v,v,A.aR,v,v,v,v,v,v,v,v,12,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),A.m,v,A.e,A.R,0,v,v),A.i,v,v,new B.o(j,v,v,i,v,v,A.n),v,v,v,v,A.mu,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dn8(w,d),v,v,v,v,v,v,v)
return B.cg(q,t,new B.B(A.a8,B.u(B.a([B.C(B.p(v,B.u(B.a([A.P,m,A.bv,l,A.P,i,A.aC,B.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,B.l(v,v,u?A.aP:A.ai,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),A.L,v,v)],h),A.m,v,A.b5,A.j,0,A.p),A.i,v,v,new B.o(s,v,o,p,v,v,A.n),v,v,v,v,A.a8,v,v,1/0),1),A.aT,new B.a8(1/0,v,B.bJ(A.yd,new C.dn9(d),B.bk(A.aR,v,v,v,v,A.h0,v,v,v,v,v,v)),v)],h),A.m,v,A.e,A.j,0,A.p),v),v,!1,!1,v,v)}}
C.XO.prototype={
S(){return new C.beG(B.y4(A.w3,A.n_,A.t_))}}
C.beG.prototype={
p(){this.d.p()
this.a2()},
B(d){var w=null
return B.cg(B.eK(w,w,w,!0,!0,A.x,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.ePo,w,w,w,1,w,!0),A.x,B.y3(this.d,A.bP,new C.dnb(this,d)),w,!1,!1,w,w)}}
C.abP.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.K(a0).ax.a===A.H,k=l?A.hl:A.c,j=l?A.c:A.M,i=l?A.aP:A.ai,h=l?A.be:A.ep,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=B.m(26)
w=B.H(A.aR.j(0.35),A.r,1)
v=B.a([new B.a9(0,A.G,A.aR.j(0.16),A.kC,36)],x.V)
u=B.p(m,D.buI,A.i,m,m,new B.o(m,m,m,B.m(18),A.a_a,D.bDP,A.n),m,58,m,m,m,m,m,58)
t=B.d("Restore local backup?",m,m,m,m,m,m,B.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,A.u,m,m,!0,m,-0.3,m,m,m,m,m,m),A.L,m,m)
s=B.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,B.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),A.L,m,m)
r=l?A.iQ:A.oM
q=B.m(18)
p=B.H(A.aR.j(0.22),A.r,1)
o=x.p
g=B.a([new C.NZ("Account",A.a.i(this.d),i,j,m),A.U,new C.NZ("Balance","$"+B.dx(g.d),i,j,m)],o)
if(d!=null&&A.a.i(d).length!==0)A.d.v(g,B.a([A.U,new C.NZ("Investment",d,i,j,m)],o))
g.push(A.U)
g.push(new C.NZ("Saved on",""+B.bC(f)+"/"+B.bN(f)+"/"+B.by(f),i,j,m))
g.push(A.U)
g.push(new C.NZ("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=B.p(m,B.u(g,A.F,m,A.e,A.j,0,A.p),A.i,m,m,new B.o(r,m,p,q,m,m,A.n),m,m,m,m,A.c2,m,m,1/0)
r=A.aZ.j(l?0.14:0.12)
q=B.m(14)
p=B.H(A.aZ.j(0.35),A.r,1)
n=B.U(A.wQ,l?A.aM:A.dB,m,m,m,16)
return B.ez(m,A.K,new B.d3(A.Si,B.bQ(new B.B(A.wn,B.u(B.a([u,A.aT,t,A.P,s,A.bv,g,A.aC,B.p(m,B.A(B.a([n,A.ab,B.C(B.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,B.l(m,m,l?A.bJ:A.iw,m,m,m,m,m,m,m,m,11.5,m,m,A.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),A.F,m,A.e,A.j,0,m,m),A.i,m,m,new B.o(r,m,p,q,m,m,A.n),m,m,m,m,A.eh,m,m,1/0),A.d1,B.A(B.a([B.C(B.dU(A.mS,new C.eDA(a0),B.d9(m,m,m,m,m,m,m,m,m,j,m,m,A.c9,m,new B.b5(B.m(14),A.V),new B.ay(h,1,A.r,-1),m,m,m,m)),1),A.av,B.C(B.bJ(D.ezQ,new C.eDB(a0),B.bk(A.aR,m,m,m,m,m,A.c9,m,new B.b5(B.m(14),A.V),m,m,m)),2)],o),A.m,m,A.e,A.j,0,m,m)],o),A.m,m,A.e,A.R,0,A.p),m),new B.o(k,m,w,e,v,m,A.n),A.ba),m),m,m,m,A.ej,A.cZ,m,m,m)}}
C.NZ.prototype={
B(d){var w=this,v=null
return B.A(B.a([new B.a8(92,v,B.d(w.c,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),B.C(B.d(w.d,v,v,v,v,v,v,B.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,A.I,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.F,v,A.e,A.j,0,v,v)}}
C.WV.prototype={
S(){return new C.awh(new B.ao(A.aq,$.as()),B.k4(!0,null,!0,!0,null,null,!1))}}
C.awh.prototype={
Z(){this.a0()
$.aT.x1$.push(new C.cXX(this))},
p(){var w=this.d
w.R$=$.as()
w.O$=0
this.e.p()
this.a2()},
bVZ(){var w,v=this.c
v.toString
w=A.a.i(this.d.a.a)
B.a6(v,!1).K(w)
return null},
B(d){var w=this,v=null,u=B.K(d).ax.a===A.H,t=u?A.hl:A.c,s=u?A.c:A.M,r=u?A.aP:A.ai,q=u?A.iQ:A.oM,p=u?A.be:A.ep,o=B.m(24),n=B.H(A.aR.j(0.35),A.r,1),m=B.a([new B.a9(0,A.G,A.aR.j(0.18),A.fI,32)],x.V),l=B.p(v,A9.ail,A.i,v,v,new B.o(v,v,v,B.m(18),A.a_a,D.bGk,A.n),v,56,v,v,v,v,v,56),k=B.d("Enter restore code",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,A.u,v,v,!0,v,-0.3,v,v,v,v,v,v),A.L,v,v),j=B.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,B.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),A.L,v,v),i=B.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,A.I,v,v,!0,v,8,v,v,v,v,v,v),h=B.a([new B.uG(B.ad("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bmP(new C.cXU())],x.G),g=B.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,A.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return B.ez(v,A.K,new B.d3(A0.HX,B.bQ(new B.B(A.wn,B.u(B.a([l,A.aT,k,A.P,j,A.dZ,B.aI(!1,A.T,!1,v,!0,A.q,v,B.aL(),w.d,v,v,v,v,v,2,B.bn(v,v,v,A.Ds,v,v,"",v,!0,new B.b0(4,B.m(16),new B.ay(p,1,A.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new B.b0(4,B.m(16),D.aP8),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),A.z,!0,v,!1,v,!1,w.e,A.ad,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.cXV(w),v,!1,v,v,!1,v,!0,v,A.a8,v,v,v,v,v,v,v,v,v,v,v,i,!0,A.L,v,A.ly,v,v,v,v),A.dZ,B.A(B.a([B.C(B.dU(A.mS,new C.cXW(d),B.d9(v,v,v,v,v,v,v,v,v,s,v,v,A.c9,v,new B.b5(B.m(14),A.V),new B.ay(p,1,A.r,-1),v,v,v,v)),1),A.av,B.C(B.bJ(D.eDb,w.gbVY(),B.bk(A.aR,v,v,v,v,v,A.c9,v,new B.b5(B.m(14),A.V),v,v,v)),2)],f),A.m,v,A.e,A.j,0,v,v)],f),A.m,v,A.e,A.R,0,A.p),v),new B.o(t,v,n,o,m,v,A.n),A.ba),v),v,v,v,A.JO,A.cZ,v,v,v)}}
C.al3.prototype={
S(){return new C.beM(A.cz)},
he(d){return this.x.$1(d)},
bl(){return this.y.$0()}}
C.beM.prototype={
Z(){var w,v=this
v.a0()
w=v.a
w.toString
$.rF=$.rF+1
v.r=A.o.L(A.o.D(C.ffK(w.e,w.d.y2),1,600))
w=v.a
if(!J.l5(w.d.y2,w.e))v.r=C.hEf(v.a.e)
v.w=B.dD(A.fV,new C.dtw(v))},
p(){var w=this.w
if(w!=null)w.a9(0)
this.c6U()
C.aWe()
this.a2()},
c6U(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:A.k.D(r.e/w,0,1)
if(v<=0)return
u=B.OX(A.k.ab(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=A.o.u(1000*Date.now())
s=r.a
w.he(new B.cP(t,s.c.a,u,A.fy,A.eW,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,A.cc,new B.N(Date.now(),0,!1)))
r.a.bl()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.uW(u,q,"Left early \xb7 +$"+A.k.ab(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
Ik(d,e){return this.cip(d,e)},
aZy(d){return this.Ik(!1,d)},
cio(d){return this.Ik(d,"")},
cip(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Ik=B.e(function(f,g){if(f===1)return B.f(g,v)
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
C.uW(s,null,o?"No progress":e,q,p,s,null,!1)
s=t.c
if(s==null){w=1
break}w=5
return B.b(C.byE(s,C.byj(),C.fFR(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$Ik)
case 5:w=1
break
case 4:n=B.OX(A.k.ab(t.a.w*1.46*r,2))
m=r>=1
t.n(new C.dtn(t,n,r))
s=A.o.u(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new B.cP(s,p,n,A.fy,A.eW,q,null,null,A.cc,new B.N(Date.now(),0,!1))
B.aeo(l,!0)
t.a.he(l)
t.a.bl()
if(m)k="+$"+A.k.ab(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+A.k.ab(n,2)+" ("+A.k.U(r*100)+"% of the prize)"}q=t.a
C.uW(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return B.b(C.byE(s,C.byj(),C.fFR(),""+t.e+"/"+t.f,k,q,!0),$async$Ik)
case 6:w=7
return B.b(C.aeg(t.a.f,k),$async$Ik)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Ik,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.r
m===$&&B.c()
w=A.o.aj(m,60)
v=A.a.aU(A.o.u(A.o.J(m,60)),2,"0")
u=B.aF(n,n,n,n,A.aio,n,n,n,new C.dtq(d),n,n,n,n,n,n)
t=o.a
s=x.p
t=B.C(B.u(B.a([B.d(t.f,n,1,A.a0,n,n,n,A.l2,n,n,n),B.d("Win $"+A.k.ab(t.w*1.46,2)+" \xb7 stake $"+A.k.ab(o.a.w,2),n,n,n,n,n,n,D.epM,n,n,n)],s),A.F,n,A.e,A.j,0,A.p),1)
r=o.a.c.a
m=m<=10?A.aH:A.c.j(0.1)
q=B.m(99)
q=B.A(B.a([u,t,new C.amy(r,new C.dtr(o),n),A.bp,B.de(n,B.A(B.a([D.byX,A.d4,B.d(""+w+":"+v,n,n,n,n,n,n,A.ka,n,n,n)],s),A.m,n,A.e,A.j,0,n,n),n,n,A.b7,new B.o(m,n,n,q,n,n,A.n),A.X,n,n,n,A.wf,n,n,n)],s),A.m,n,A.e,A.j,0,n,n)
m=o.a
v=m.w
w=v*1.46
r=o.e/o.f
m=B.A(B.a([B.C(B.bw(B.m(99),B.mL(A.bG,n,n,9,n,r,new B.nB(A.d.gI(m.r),x.dw)),A.ap),1),A.av,B.d(""+o.e+"/"+o.f,n,n,n,n,n,n,D.eyc,n,n,n)],s),A.m,n,A.e,A.j,0,n,n)
t=B.m(22)
u=B.a([A.d.gI(o.a.r).j(0.35),F.aaB],x.O)
p=o.x
return C.aLK(n,D.b7w,B.br(!0,B.u(B.a([new B.B(D.biS,q,n),new C.Lq(w*r,w,v,n),new B.B(F.acM,m,n),B.C(new B.B(A.UM,B.bw(t,B.bQ(B.ec(V.fZw(o.a.e,new V.yb(new C.dts(o),new C.dtt(o),new C.dtu(o),o.d)),p,n),new B.o(n,n,n,n,n,new B.a7(A.b4,A.bc,A.w,u,n,n),A.n),A.ba),A.ap),n),1)],s),A.m,n,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0))}}
C.aky.prototype={
S(){return new C.beD(null,null)},
gX(d){return this.e}}
C.beD.prototype={
Z(){var w,v=this,u=null
v.a0()
w=v.d=B.bh(u,A.zj,u,1,u,v)
w.d4()
w.dL$.G(0,new C.dmH(v))
w=B.bh(u,A.lO,u,1,u,v)
w.cF(0)
v.e=w
w=B.bh(u,A.Jg,u,1,u,v)
w.cF(0)
v.f=w
w.d4()
w.dL$.G(0,new C.dmI(v))
if(v.a.c){v.d.cF(0)
v.e.bT(0)
v.f.bT(0)}},
bo(d){var w,v,u=this
u.bz(d)
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
w.bnp()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.NP[A.o.J(a9.r,5)]:b4
w=!b3&&b4==null?D.NP[A.o.J(a9.w,5)]:b0
b1=b4!=null
if(b1){b3=B.t(b4)
v=b4>0?"+"+b3:b3}else if(w!=null){b3=B.t(w)
if(w>0)b3="+"+b3
v=b3}else v="?"
if(b1)u=b4>0?A.dp:A.bR
else if(w!=null){b1=(w>0?A.dp:A.bR).j(0.45)
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
b3=B.a([B.e4(A.C,B.p(b0,b0,A.i,b0,b0,new B.o(b0,b0,b0,b0,B.a([new B.a9(6+e,A.G,A.az.j(0.4+q*0.3),A.J,32+q*22),new B.a9(3,A.G,A.b8.j(0.2+p*0.25),A.J,40+p*16)],d),b0,A.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=B.p(b0,b0,A.i,b0,b0,new B.o(B.aq(A.bD,A.aM,A.o.J(a3,3)/2).j(a2),b0,b0,b0,B.a([new B.a9(0,A.G,A.az.j(0.7),A.J,e)],d),b0,A.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(B.dN(new B.iv(B.vl(a4+a3),b0,A.C,!0,b0,a8,b0),new B.v(a6*a0+a5*b2*0.04,a7*a0)))}A.d.v(f,b3)}b3=b2*0.06
e=x.V
f.push(B.dN(B.p(b0,b0,A.i,b0,b0,new B.o(b0,b0,b0,B.m(b2*0.5),B.a([new B.a9(b2*0.02,A.G,A.x.j(0.4+b1),A.J,b2*0.14)],e),b0,A.n),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new B.v(0,n+b3)))
b1=B.df()
d=b1.a
d.$flags&2&&B.ah(d)
d[11]=0.0025
b1.ma(o)
b1.jd(k,k,k,1)
b1.jv(l)
b1.fk(m)
d=b2*0.2
a1=B.m(d)
if(a9.a.c)a2=D.cFZ
else{a2=B.aq(A.c,A.kJ,q*0.45)
a2.toString
a2=B.a([a2,A.bN,A.ct],x.O)}a4=B.aq(A.bO,A.az,q*0.65)
a4.toString
a4=B.H(a4,A.r,3)
e=B.a([new B.a9(0,A.G,A.x.j(0.3),D.dIm,16)],e)
if(!a9.a.c)e.push(new B.a9(p*3,A.G,A.az.j(0.3+q*0.4),A.J,24+p*16))
e.push(new B.a9(0,A.G,A.c.j(0.9),A.Pb,0))
g=B.a([],g)
if(!a9.a.c)g.push(B.c_(0,B.bQ(b0,new B.o(b0,b0,b0,B.m(d),b0,new B.a7(new B.d4(-1+Math.cos(j)*0.8,-1),new B.d4(1,1),A.w,B.a([A.c.j(0),A.c.j(0.28+p*0.25),A.c.j(0)],x.O),b0,b0),A.n),A.ba),0,0,0))
g.push(B.an(b0,B.p(b0,b0,A.i,b0,b0,new B.o(b0,b0,b0,B.m(6),b0,new B.a7(A.a1,A.a7,A.w,B.a([A.c.j(0.95),A.c.j(0)],x.O),b0,b0),A.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=B.a([new B.cI(A.x.j(0.18),A.dF,5)],x.C)
if(!a9.a.c)d.push(new B.cI(A.az.j(0.4+q*0.35),A.J,12+p*10))
g.push(B.at(B.vW(B.d(v,b0,b0,b0,b0,b0,b0,B.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,A.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),A.b7,A.ja,b3),b0,b0,b0))
f.push(B.dN(B.fp(A.C,B.p(b0,new B.am(A.W,b0,A.a9,A.q,g,b0),A.i,b0,b0,new B.o(b0,b0,a4,a1,e,new B.a7(A.ax,A.aE,A.w,a2,b0,b0),A.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new B.v(0,n)))
return new B.a8(h,h,new B.am(A.C,b0,A.a9,A.i,f,b0),b0)}}
C.aHp.prototype={
aM(){this.aW()
this.aT()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdA())
w.aX$=null
w.a2()}}
C.Lq.prototype={
B(d){var w=null,v=new C.c23(),u=v.$3("STAKE","$"+A.k.ab(this.e,2),A.c),t=B.m(18),s=B.H(A.bo.j(0.7),A.r,1.4),r=B.a([new B.a9(0,A.G,A.aR.j(0.35),A.J,14)],x.V),q=x.p
return new B.B(D.UW,B.A(B.a([u,B.p(w,B.u(B.a([D.eKt,B.mR(new C.c22(),w,A.b7,A.nZ,w,new B.bm(w,this.c,x.e7),x.gR)],q),A.m,w,A.e,A.j,0,A.p),A.i,w,w,new B.o(w,w,s,t,r,D.aj9,A.n),w,w,w,w,A.JJ,w,w,w),v.$3("FULL WIN","$"+A.k.ab(this.d,2),A.bJ)],q),A.m,w,A.e,A.j,0,w,w),w)}}
C.amy.prototype={
B(d){var w=null,v=B.m(99),u=B.H(A.j4.j(0.7),A.r,1)
return B.p(w,B.A(B.a([D.brr,A.d4,C.anm(this.d,A.or,this.c)],x.p),A.m,w,A.e,A.R,0,w,w),A.i,w,w,new B.o(w,w,u,v,w,D.aj9,A.n),w,w,w,w,A.JU,w,w,w)},
gdQ(){return this.c}}
C.Ly.prototype={
S(){return new C.bfg(null,null)}}
C.bfg.prototype={
Z(){var w,v=this
v.a0()
w=B.bh(null,A.lO,null,1,null,v)
v.d!==$&&B.aO()
v.d=w},
p(){var w=this.d
w===$&&B.c()
w.p()
this.bnZ()},
aIv(d,e){var w=this.a.d,v=B.S(w).k("I<1,n>"),u=B.z(new B.I(w,C.hK3(),v),v.k("ai.E"))
w=this.d
w===$&&B.c()
return B.c4(w,new C.dLA(this,u),null)},
B(d){var w=null
if(this.a.e)return B.cg(w,D.aa0,B.br(!0,this.aIv(0,d),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)
return this.aIv(0,d)},
asJ(d,e,f){var w=null,v=f.j(0.16),u=B.m(10)
return B.A(B.a([B.p(w,B.U(d,f,w,w,w,17),A.i,w,w,new B.o(v,w,w,u,w,w,A.n),w,32,w,w,w,w,w,32),A.av,B.C(B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,A.a_,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.m,w,A.e,A.j,0,w,w)}}
C.aHY.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.aaE.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=B.aG(d,A.e0,o).w.r.d,m=this.c,l=J.cB(m),k=l.eB(m,new C.dLD()).gH(0),j=new B.e2(l.di(m,new C.dLE(),x.cD),x.bG).cO(0,0,new C.dLF())
o=B.aG(d,A.bM,o).w
w=x.p
v=B.a([A.U,B.p(p,p,A.i,p,p,new B.o(A.be,p,p,B.m(2),p,p,A.n),p,4,p,p,p,p,p,42),new B.B(A.ad_,B.A(B.a([B.p(p,D.bBi,A.i,p,p,new B.o(p,p,p,B.m(14),B.a([new B.a9(0,A.G,A.f4.j(0.45),A.J,14)],x.V),D.aj3,A.n),p,44,p,p,p,p,p,44),A.bb,D.bkQ,B.aF(p,p,p,p,A.kX,p,p,p,new C.dLG(d),p,p,p,p,p,p)],w),A.m,p,A.e,A.j,0,p,p),p)],w)
if(l.gcg(m)){u=C.fB3("GAMES",""+l.gH(m),A.eJ)
t=C.fB3("WON",""+k,A.j4)
s=j>=0
r=s?"+":"-"
q=C.bve(j)
s=s?A.j4:A.fL
v.push(new B.B(D.bfz,B.A(B.a([u,A.ab,t,A.ab,C.fB3("NET",r+q,s)],w),A.m,p,A.e,A.j,0,p,p),p))}if(l.gag(m))v.push(new B.B(new B.L(24,36,24,24+n),B.u(B.a([B.U(D.bno,A.c.j(0.35),p,p,p,52),A.ac,B.d("No game receipts yet",p,p,p,p,p,p,B.l(p,p,A.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.ar,B.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,B.l(p,p,A.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],w),A.m,p,A.e,A.j,0,A.p),p))
else v.push(new B.dp(1,A.cj,B.hF(p,new C.dLH(this),l.gH(m),new B.L(14,2,14,16+n),p,A.af,new C.dLI(),!1),p))
return B.p(p,B.u(v,A.m,p,A.e,A.R,0,A.p),A.i,p,new B.aV(0,1/0,0,o.a.b*0.88),D.aRS,p,p,p,p,p,p,p,p)}}
C.aaD.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.c,h=i.c
if(h)if(!A.a.q(i.e.toLowerCase(),"%")){w=i.w
w=w!=null&&i.d<w
v=w}else v=!0
else v=!1
w=!h
if(w)u="LOST"
else u=v?"PARTIAL":"WON"
if(w)t=A.cJ
else t=v?A.aM:A.bo
s=i.gb9z()
w=new C.dLC()
r=B.m(14)
q=B.a([t.j(0.13),D.b6H],x.O)
p=B.H(t.j(0.4),A.r,1)
o=B.U(h?A.lT:A.cu,t,j,j,j,16)
n=B.C(B.d(i.b,j,1,A.a0,j,j,j,A.yc,j,j,j),1)
m=t.j(0.2)
l=B.m(99)
l=B.p(j,B.d(u,j,j,j,j,j,j,B.l(j,j,t,j,j,j,j,j,j,j,j,8.5,j,j,A.u,j,j,!0,j,0.6,j,j,j,j,j,j),j,j,j),A.i,j,j,new B.o(m,j,j,l,j,j,A.n),j,j,j,j,D.biN,j,j,j)
if(s!=null){m=s>=0?"+":"-"
m+=C.bve(s)}else{m=h?"+":"-"
m+=C.bve(i.d)}k=x.p
m=B.A(B.a([o,A.bp,n,l,A.bp,B.d(m,j,j,j,j,j,j,B.l(j,j,t,j,j,j,j,j,j,j,j,13,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],k),A.m,j,A.e,A.j,0,j,j)
l=C.dLB("STAKE",w.$1(i.w),A.c)
w=B.A(B.a([l,A.d4,C.dLB("PAID",C.bve(h?i.d:0),t),A.d4,C.dLB("BEFORE",w.$1(i.x),A.eJ),A.d4,C.dLB("AFTER",w.$1(i.y),A.dC)],k),A.m,j,A.e,A.j,0,j,j)
o=C.hFL(i.f)
i=A.a.i(i.e)
i=i.length===0?"":" \xb7 "+i
return B.p(j,B.u(B.a([m,A.ar,w,A.aw,B.d(o+i,j,1,A.a0,j,j,j,B.l(j,j,A.c.j(0.45),j,j,j,j,j,j,j,j,10,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],k),A.al,j,A.e,A.j,0,A.p),A.i,j,j,new B.o(j,j,p,r,j,new B.a7(A.ax,A.aE,A.w,q,j,j),A.n),j,j,j,j,A.kS,j,j,j)}}
C.awU.prototype={
S(){return new C.bb_(A.cz,null,null)}}
C.bb_.prototype={
Z(){var w,v,u,t=this
t.a0()
w=B.bh(null,A.nc,null,1,null,t)
w.cF(0)
t.d=w
v=J.e0(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.ab3(40+w.ah()*260,-20+w.ah()*40,1.5+w.ah()*3,w.ah()*3.141592653589793,0.7+w.ah()*0.3,12+w.ah()*16,[X.a08,A.qt,A.cI,A.c][w.aE(4)],[A.hJ,A.kT,A.dP,A.DO][w.aE(4)])
t.f=v},
p(){var w=this.d
w===$&&B.c()
w.p()
this.bmU()},
B(d){var w=null,v=this.d
v===$&&B.c()
return B.at(B.aD(!1,A.X,!0,w,B.c4(v,new C.d3y(this,d),w),A.i,A.K,0,w,w,w,w,w,A.aa),w,w,w)}}
C.ab3.prototype={
gX(d){return this.f}}
C.aGV.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.aX1.prototype={
B(d){return new B.tF(new C.c4j(this),null,new B.h3(B.a([$.xA(),$.a0o()],x.U)),null)},
gdQ(){return this.c}}
C.L2.prototype={
c16(){if(this.c!=null)this.n(new C.bUe())}}
C.GO.prototype={}
C.am0.prototype={
S(){return new C.azH(A.cz,new B.ao(A.aq,$.as()))},
cu9(){return this.d.$0()},
cFg(){return this.f.$0()},
cF4(d,e){return this.r.$2(d,e)},
cFT(d,e,f){return this.w.$3$bonus(d,e,f)},
gdQ(){return this.c}}
C.azH.prototype={
p(){var w=this.e
w.R$=$.as()
w.O$=0
this.a2()},
aoR(){var w=B.d_(A.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
zD(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$zD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.aoR()
if(s<2){t.asK("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cu9()<s){t.asK("Insufficient balance.")
w=1
break}if(!t.a.cF4(s,"Dice Roll bet")){t.asK("Could not place bet.")
w=1
break}t.a.toString
t.n(new C.dET(t))}w=3
return B.b(C.c1e(t.a.e),$async$zD)
case 3:r=t.a
q=C.hHM(r.e,r.c,t.d)
t.a.cFg()
B.aVB(t.a.e)
t.n(new C.dEU(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return B.b(B.bK(new B.b6(1000*(40+p*6)),null,r),$async$zD)
case 7:if(t.c==null){w=1
break}new C.dEV(t).$0()
t.c.e1()
case 5:++p
w=4
break
case 6:w=8
return B.b(B.bK(A.jb,null,r),$async$zD)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.fEG(q)
t.n(new C.dEW(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cFT(m,"Dice Roll "+n,o)
t.n(new C.dEX(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+A.k.ab(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.k.ab(m,2)+" added to your balance"
w=12
return B.b(C.byE(r,C.byj(),new C.dEY(t),n,k,"YOU WIN!",!0),$async$zD)
case 12:w=13
return B.b(C.aeg("Dice Roll",l?"+$"+A.k.ab(m,2)+" total (includes $3 bonus for +3!)":"+$"+A.k.ab(m,2)+" added to your balance"),$async$zD)
case 13:w=10
break
case 11:w=14
return B.b(C.byE(r,C.byj(),new C.dEZ(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$zD)
case 14:C.uW(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return B.h(u,v)}})
return B.i($async$zD,v)},
asK(d){var w=null,v=this.c
if(v==null)return
v.E(x.q).f.P(B.aZ(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.aoR(),d=x.w,a0=B.aG(a2,A.e0,d).w,a1=Math.min(B.aG(a2,A.bM,d).w.a.a*0.44,200)
d=B.hg(Q.ahv,D.eR3,new C.dF1(a2),f)
w=B.m(20)
v=g.a
u=v.c
t=x.p
w=B.A(B.a([d,A.bd,B.p(f,B.A(B.a([A.aht,A.bp,C.anm(v.d,A.jM,u)],t),A.m,f,A.e,A.R,0,f,f),A.i,f,f,new B.o(A.cI,f,f,w,f,f,A.n),f,f,f,f,A.lR,f,f,f)],t),A.m,f,A.e,A.j,0,f,f)
u=g.z
v=B.W(140,D.TS.l()>>>16&255,D.TS.l()>>>8&255,D.TS.l()&255)
d=B.m(18)
s=B.H(B.W(31,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
r=g.x
d=B.C(B.p(f,B.at(new C.aky(r,r?g.w:g.r,a1,f),f,f,f),A.i,f,f,new B.o(v,f,s,d,f,f,A.n),f,f,f,f,f,f,f,1/0),1)
v=B.d("Roll lands on one of:",f,f,f,f,f,f,B.l(f,f,A.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,A.a_,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=B.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.NP[q]
o=C.fEG(p)
n=p>0?A.br:A.aH
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new B.b2(10,10)
i=m?A.c:n.j(0.7)
h=new B.ay(i,m?2.5:1.2,A.r,-1)
n=m?B.a([new B.a9(1,A.G,n.j(0.65),A.J,14)],r):A.a_6
m=m?18:15
s.push(new B.bI(1,A.bt,new B.B(A.kr,B.p(A.C,new B.w(o,f,new B.F(!0,A.c,f,f,f,f,m,A.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f),A.i,f,f,new B.o(k,f,new B.c2(h,h,h,h),new B.bx(j,j,j,j),n,f,A.n),f,l,f,f,f,f,f,f),f),f))}d=B.a([d,A.ac,v,A.ar,B.A(s,A.m,f,A.e,A.j,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.fEG(v)
s=g.r
s.toString
d.push(new B.B(A.lj,B.d("Landed on "+v,f,f,f,f,f,f,B.l(f,f,s>0?A.bq:A.cJ,f,f,f,f,f,f,f,f,20,f,f,A.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(A.U)
d.push(new B.bE(A.a1,f,f,B.d("Bet Amount",f,f,f,f,f,f,B.l(f,f,B.W(217,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,A.I,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(A.ar)
v=x.bL
v=B.z(new B.I(B.a([2,5,10,25],x.n),new C.dF2(g),v),v.k("ai.E"))
s=g.y
r=B.W(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v.push(B.C(new B.B(A.Vr,B.aI(f,A.T,!1,f,!0,A.q,f,B.aL(),g.e,f,f,f,f,f,2,B.bn(f,new B.b0(4,B.m(10),A.V),f,A.jW,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,A.l3,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),A.z,!0,f,!0,!s,!1,f,A.ad,f,f,f,f,f,A.dK,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,A.a8,f,f,f,f,f,f,f,f,f,f,f,A.hi,!0,A.L,f,A.am,f,f,f,f),f),1))
d.push(B.A(v,A.m,f,A.e,A.j,0,f,f))
d.push(A.P)
d.push(new B.bE(A.a7,f,f,B.d("Perfect Score Profit: +$"+A.k.ab(g.aoR()*0.46,2),f,f,f,f,f,f,D.erH,f,f,f),f))
d.push(A.U)
d=B.C(new B.B(A.iT,B.u(d,A.al,f,A.e,A.j,0,A.p),f),1)
v=g.x?f:g.gcfa()
s=B.fe(f,f,A.az,f,f,f,f,f,f,A.c,f,f,f,f,new B.b5(B.m(14),A.V),f,f,f,f,f)
return C.aLK(f,D.TY,B.br(!0,B.u(B.a([new B.B(D.bjb,w,f),new C.Lq(u,e*1.46,e,f),B.C(B.u(B.a([d,new B.B(new B.L(14,4,14,8+a0.r.d),new B.a8(1/0,52,B.hS(B.d("\ud83c\udfb2 ROLL ($"+A.k.ab(e,2)+")",f,f,f,f,f,f,A.lz,f,f,f),v,s),f),f)],t),A.m,f,A.e,A.j,0,A.p),1)],t),A.m,f,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0))}}
C.amD.prototype={
S(){return new C.azY(A.k4,new B.ao(A.aq,$.as()))},
cEX(d){return this.e.$1(d)}}
C.azY.prototype={
ganH(){var w,v=this.r
if(v===$){w=A.o.u(1e4+A.cz.aE(89999))
this.r!==$&&B.bG()
this.r=w
v=w}return v},
gOi(){var w=this.d,v=this.a
return w===A.k4?A.a.i(v.f.a):A.a.i(v.f.b)},
ga62(){var w=this.gOi(),v=B.ad("^\\$+",!0,!1,!1,!1),u=A.a.i(B.aK(w,v,""))
return u.length===0?"":"$"+u},
p(){var w=this.e
w.R$=$.as()
w.O$=0
this.a2()},
Hh(d,e){return this.bAf(d,e)},
bAf(d,e){var w=0,v=B.j(x.H),u=this,t
var $async$Hh=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.fB(new B.fu(d)),$async$Hh)
case 2:B.eL()
t=u.c
if(t!=null)t.E(x.q).f.P(B.aZ(null,null,null,null,null,A.q,null,B.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
return B.h(null,v)}})
return B.i($async$Hh,v)},
Od(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Od=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gOi().length===0){r.c.E(x.q).f.P(B.aZ(null,null,null,null,null,A.q,null,B.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}B.j5()
o=A.k.ab(r.a.d,2)
q=r.d===A.k4?B.cp("https://cash.app/"+r.ga62()+"/"+o,0,null):B.cp("bitcoin:"+r.gOi(),0,null)
t=4
w=7
return B.b(B.iF(q,A.f8,null),$async$Od)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===A.k4?r.ga62():r.gOi()
w=10
return B.b(r.Hh(n,r.d===A.k4?"Cash App tag":"Bitcoin address"),$async$Od)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===A.k4?r.ga62():r.gOi()
w=11
return B.b(r.Hh(n,r.d===A.k4?"Cash App tag":"Bitcoin address"),$async$Od)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Od,v)},
YD(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hT().bah(A.ev),$async$YD)
case 3:r=e
if(r==null){w=1
break}w=4
return B.b(r.fd(),$async$YD)
case 4:s=e
t.n(new C.dM_(t,A.a.c5(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return B.h(u,v)}})
return B.i($async$YD,v)},
bYG(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===A.k4?C.h_M(s.a):A.a.i(s.a)
if(r.length===0){t=v.d===A.k4?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.E(x.q).f.P(B.aZ(u,u,u,u,u,A.q,u,B.d(t,u,u,u,u,u,u,u,u,u,u),u,A.S,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.E(x.q).f.P(B.aZ(u,u,u,u,u,A.q,u,B.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,A.S,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new B.N(Date.now(),0,!1).u(0)
w=v.a
t.cEX(new B.cP(s,w.c.a,w.d,A.fc,v.d,r,v.f,v.ganH(),A.dk,new B.N(Date.now(),0,!1)))
w=v.c
w.toString
B.ir(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.eK(o,o,o,!0,!0,A.yS,o,1,!0,o,0,!1,o,!1,A.c,o,B.aF(o,o,o,o,A.Ez,o,o,o,new C.dM0(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.eBZ,o,o,o,1,o,!0),m=B.m(26),l=B.H(D.es.j(0.25),A.r,1),k=x.V,j=B.a([new B.a9(0,A.G,A.aW.j(0.25),A.eO,24)],k),i=x.p
j=B.p(o,B.u(B.a([B.d("YOU'RE ADDING",o,o,o,o,o,o,B.l(o,o,A.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,A.I,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),A.ar,B.f0(A.C,B.d("$"+B.dx(p.a.d),o,o,o,o,o,o,D.eme,o,o,o),A.i,A.dq),A.ar,B.d("to your Growth Income wallet",o,o,o,o,o,o,B.l(o,o,D.es.j(0.85),o,o,o,o,o,o,o,o,12,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.m,o,A.e,A.j,0,A.p),A.i,o,o,new B.o(o,o,l,m,j,D.bH3,A.n),o,o,o,o,D.bgY,o,o,o)
m=p.bUN()
l=p.aw9(1,"Send the money to NGMY Pay",p.bYE())
w=p.aw9(2,"Put this code in the payment note",p.byT())
v=p.d===A.k4
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=B.l(o,o,A.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.aw9(3,u,B.aI(o,A.T,!1,o,!0,A.q,o,B.aL(),p.e,o,o,o,o,o,2,B.bn(o,o,o,o,o,o,o,o,!0,new B.b0(4,B.m(18),new B.ay(A.c.j(0.08),1,A.r,-1)),o,o,o,o,o,A.rj,!0,o,o,o,o,new B.b0(4,B.m(18),D.aP3),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.eny,t,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ad,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.qN,!0,A.a5,o,A.am,o,o,o,o))
r=p.f!=null
v=r?8:22
u=B.m(20)
s=r?D.es:A.c
s=B.H(s.j(r?0.5:0.12),A.r,1.4)
q=r?B.u(B.a([B.bw(B.m(14),new B.d3(D.aQq,new B.D5(p.f,o),o),A.ap),A.P,D.e8V,A.aw],i),A.m,o,A.e,A.j,0,A.p):B.u(B.a([B.p(o,D.bAv,A.i,o,o,new B.o(D.es.j(0.12),o,o,o,o,o,A.a6),o,54,o,o,o,o,o,54),A.U,D.eGH,A.dh,B.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a_,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),A.m,o,A.e,A.j,0,A.p)
v=p.b_W(4,"Screenshot of your payment",B.aJ(o,B.p(o,q,A.i,o,o,new B.o(A.rj,o,s,u,o,o,A.n),o,o,o,o,new B.L(v,v,v,v),o,o,o),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc8J(),o,o,o,o,o,o,!1,A.ae),!0)
u=B.d(p.a.r,o,o,o,o,o,o,B.l(o,o,A.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,A.a_,o,1.4,!0,o,o,o,o,o,o,o,o),A.L,o,o)
s=B.m(18)
k=B.a([new B.a9(0,A.G,A.aW.j(0.45),A.dm,18)],k)
return B.cg(n,A.yS,B.at(new B.d3(A.a6A,B.cX(B.a([j,A.bv,m,A.bv,l,w,t,v,A.ar,u,A.aT,new B.a8(o,56,B.bQ(B.l9(D.bzb,D.eQn,p.gbYF(),B.fe(o,o,A.K,o,o,o,o,o,o,A.c,o,o,o,A.K,new B.b5(B.m(18),A.V),o,o,o,o,o)),new B.o(o,o,o,s,k,D.bFM,A.n),A.ba),o)],i),o,D.bgt,o,o,A.af,!1),o),o,o,o),o,!1,!1,o,o)},
bUN(){var w=null,v=new C.dLW(this),u=B.m(18),t=B.H(A.c.j(0.06),A.r,1)
return B.p(w,B.A(B.a([v.$3(A.k4,A.hG,"Cash App"),A.ey,v.$3(A.a1x,D.ahd,"Bitcoin")],x.p),A.m,w,A.e,A.j,0,w,w),A.i,w,w,new B.o(A.rj,w,t,u,w,w,A.n),w,w,w,w,A.ni,w,w,w)},
b_W(d,e,f,g){var w,v=null,u=x.p,t=B.a([B.p(A.C,B.d(""+d,v,v,v,v,v,v,D.esp,v,v,v),A.i,v,v,D.aR9,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(B.C(B.p(v,v,A.i,D.es.j(0.18),v,v,v,v,v,A.wd,v,v,v,2),1))
t=B.u(t,A.m,v,A.e,A.j,0,A.p)
w=g?12:20
return new B.KC(B.A(B.a([new B.a8(34,v,t,v),A.av,B.C(new B.B(new B.L(0,0,0,w),B.u(B.a([new B.B(A.UJ,B.d(e,v,v,v,v,v,v,A2.a3K,v,v,v),v),f],u),A.al,v,A.e,A.j,0,A.p),v),1)],u),A.al,v,A.e,A.j,0,v,v),v)},
aw9(d,e,f){return this.b_W(d,e,f,!1)},
bYE(){var w,v,u,t,s=this,r=null,q=s.d===A.k4?s.ga62():s.gOi(),p=B.m(20),o=B.m(20),n=s.d===A.k4,m=n?D.bEO:D.bGt,l=B.a([new B.a9(0,A.G,(n?D.aaf:D.Ta).j(0.35),A.cv,16)],x.V),k=B.m(12)
n=s.d===A.k4
w=n?A.hG:D.ahd
k=B.p(r,B.U(w,n?D.aaf:D.Ta,r,r,r,30),A.i,r,r,new B.o(A.c,r,r,k,r,r,A.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=B.d(n,r,r,r,r,r,r,B.l(r,r,A.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===A.k4
t=u?22:13
v=B.d(v,r,1,A.a0,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,t,r,r,A.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=B.C(B.u(B.a([n,A.bw,v,A.aw,B.A(B.a([D.bwd,A.d4,B.d(s.d===A.k4?"Tap to pay $"+B.dx(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,A.v7,r,r,r)],u),A.m,r,A.e,A.j,0,r,r)],u),A.F,r,A.e,A.j,0,A.p),1)
return B.aD(!1,A.X,!0,r,B.aH(!1,p,!0,B.eq(B.A(B.a([k,A.bb,v,B.aF(r,r,r,r,D.bvi,r,r,r,w?r:new C.dLZ(s,q),r,r,r,r,"Copy",r)],u),A.m,r,A.e,A.j,0,r,r),r,new B.o(r,r,r,o,l,m,A.n),r,A.acG,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gc49(),r,r,r,r,r,r,r),A.i,A.K,0,r,r,r,r,r,A.aa)},
byT(){var w,v,u,t,s,r,q,p,o=null,n=B.m(20),m=B.H(A.b0.j(0.35),A.r,1),l=x.p,k=B.a([],l)
for(w=this.ganH().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new B.b2(12,12)
q=B.a([A.b0.j(0.28),A.b0.j(0.08)],u)
p=new B.ay(A.eJ.j(0.4),1,A.r,-1)
k.push(B.p(A.C,new B.w(s,o,A.BF,o,o,o,o,o,o,o,o,o),A.i,o,o,new B.o(o,o,new B.c2(p,p,p,p),new B.bx(r,r,r,r),o,new B.a7(A.b4,A.bc,A.w,q,o,o),A.n),o,52,o,A.kr,o,o,o,42))}return B.p(o,B.u(B.a([B.A(k,A.m,o,A.b5,A.j,0,o,o),A.ac,B.A(B.a([B.C(B.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,B.l(o,o,A.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,A.a_,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),A.ab,B.hg(A.Y6,D.eS4,new C.dLV(this),B.fn(o,o,o,o,o,o,o,o,o,o,o,A.eJ,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),A.m,o,A.e,A.j,0,o,o)],l),A.m,o,A.e,A.j,0,A.p),A.i,o,o,new B.o(A.rj,o,m,n,o,o,A.n),o,o,o,o,A.bC,o,o,o)}}
C.qG.prototype={
ad(){var w=this
return B.D(["id",w.a,"title",w.b,"start",w.c.aa(),"end",w.d.aa(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.qH.prototype={
ad(){var w=this
return B.D(["id",w.a,"when",w.b.aa(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gTf(){var w=this,v=B.a([],x.s),u=w.d
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
u=w.c
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
v.push(C.fMg(w.b))
u=w.e
if(u!=null&&A.a.i(u).length!==0)v.push(A.a.i(u))
return A.d.aH(v," \xb7 ")},
gkf(d){return this.c}}
C.lf.prototype={
ad(){var w,v=this,u=B.Q(x.N,x.z)
u.m(0,"type",v.a)
w=v.b
if(w.length!==0)u.m(0,"content",w)
w=v.c
if(w!=null&&w.length!==0)u.m(0,"url",w)
w=v.d
if(w!=null&&w.length!==0)u.m(0,"label",w)
return u}}
C.i7.prototype={
ad(){var w,v=this,u=B.Q(x.N,x.z)
u.m(0,"id",v.a)
u.m(0,"question",v.b)
w=J.b3(v.c,new C.c3i(),x.P)
w=B.z(w,w.$ti.k("ai.E"))
u.m(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.m(0,"thumbnailPath",w)
u.m(0,"printable",v.e)
u.m(0,"sortOrder",v.f)
return u}}
C.hU.prototype={
ah9(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.hU(v,u,t,s,r,h==null?w.f:h)},
b59(d){var w=null
return this.ah9(w,w,w,w,d,w)},
cxH(d,e,f){return this.ah9(d,e,null,null,null,f)},
b58(d){var w=null
return this.ah9(w,w,w,d,w,w)},
cxm(d,e){var w=null
return this.ah9(w,w,d,w,e,w)},
ad(){var w=this,v=C.htX(w.c),u=w.e,t=B.S(u).k("I<1,a0<n,@>>")
u=B.z(new B.I(u,new C.c3g(),t),t.k("ai.E"))
return B.D(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.b4L.prototype={}
C.T9.prototype={
S(){return new C.aA9(new B.ao(A.aq,$.as()),B.mo(0,null,null),B.a([],x.m))},
RR(d){return this.d.$1(d)}}
C.aA9.prototype={
Z(){var w,v=this
v.a0()
w=J.b3(v.a.c,new C.dPF(),x.i)
w=B.z(w,w.$ti.k("ai.E"))
A.d.aY(w,new C.dPG())
v.d=w
v.Hq()},
p(){var w=this.w
w.R$=$.as()
w.O$=0
this.x.p()
this.a2()},
aaK(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$aaK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:u.Hq()
u.n(new C.dPz(u))
t=u.a
t.toString
s=u.d
s===$&&B.c()
w=2
return B.b(t.RR(s),$async$aaK)
case 2:r=e
if(u.c!=null){u.n(new C.dPA(u))
t=u.c.E(x.q).f
s=B.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.P(B.aZ(null,null,null,r?A.dp:A.aH,null,A.q,null,s,null,A.S,null,null,null,null,null,null,null,null,null,null))}return B.h(null,v)}})
return B.i($async$aaK,v)},
a5f(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a5f=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&B.c()
s=new C.hU(q,"New Category",A.E8,4284773515,D.arv,p.length)
t.n(new C.dPi(t,s))
t.Hq()
p=t.c
if(p==null){w=1
break}w=3
return B.b(B.cb(null,null,!0,null,new C.dPj(s),p,null,!0,!0,x.i),$async$a5f)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.dPk(t,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a5f,v)},
ZA(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=A.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.n(new C.dPw(t,p))
q.bH(0,A.c0)
q=t.a.e
s=t.d
s===$&&B.c()
w=3
return B.b(C.c3d(p,q,s),$async$ZA)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.dPx(t,r))
$.aT.x1$.push(new C.dPy(t))
case 1:return B.h(u,v)}})
return B.i($async$ZA,v)},
a78(d){return this.bEL(d)},
bEL(d){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$a78=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&B.c()
t=r[d]
r=u.c
r.toString
w=2
return B.b(B.cb(null,null,!0,null,new C.dPq(t),r,null,!0,!0,x.i),$async$a78)
case 2:s=f
if(s!=null)u.n(new C.dPr(u,d,s))
return B.h(null,v)}})
return B.i($async$a78,v)},
bCD(d){this.n(new C.dPp(this,d))
this.Hq()},
Hq(){var w,v,u=this.d
u===$&&B.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].b59(v)},
c1C(d,e){var w={}
w.a=e
this.n(new C.dPv(w,this,d))},
Wd(d){return this.bTI(d)},
bTI(d){var w=0,v=B.j(x.H),u=this,t,s
var $async$Wd=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=B.eN(new C.dPu(u,d),!1,null,x.H)
w=2
return B.b(B.a6(s,!1).cz(t),$async$Wd)
case 2:return B.h(null,v)}})
return B.i($async$Wd,v)},
bve(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?B.a([A.fm,A.bh],l):B.a([A.pQ,A.eo],l)
w=B.m(16)
v=B.H(m?A.db.j(0.35):A.dC,A.r,1)
u=B.U(A.dP,m?A.dC:A.e9,n,n,n,n)
t=B.C(B.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,B.l(n,n,m?A.aN:A.M,n,n,n,n,n,n,n,n,n,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.Wu:A8.Ke
r=x.p
s=B.a([B.aH(!1,n,!0,B.A(B.a([u,A.ab,t,B.U(s,m?A.bO:A.ai,n,n,n,n)],r),A.m,n,A.e,A.j,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dPm(o),n,n,n,n,n,n,n)],r)
if(o.r){u=B.a([A.U],r)
t=o.y
if(t.length!==0){q=(m?D.r8:A.c).j(0.65)
p=B.m(12)
u.push(B.p(n,B.jQ(!0,n,o.x,new C.dPn(o,d),t.length,n,n,n,n,!1,!1),A.i,n,A.a6u,new B.o(q,n,n,p,n,n,A.n),n,n,n,n,A.ch,n,n,n))}u.push(A.P)
t=o.w
q=B.l(n,n,m?A.aN:A.M,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=B.l(n,n,m?A.bO:A.ai,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?A.bh:A.aN
q=B.C(B.aI(n,A.T,!1,n,!0,A.q,n,B.aL(),t,n,n,n,n,n,2,B.bn(n,new B.b0(4,B.m(14),A.V),n,A.eM,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),A.z,!0,n,!0,n,!1,n,A.ad,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.dPo(o),n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,q,!0,A.a5,n,A.am,n,n,n,n),1)
m=o.f?n:o.gcfm()
p=B.bk(A.bf,n,n,n,n,n,A.iB,n,n,n,n,n)
u.push(B.A(B.a([q,new B.H2(t,A.bf,n),A.d4,B.bJ(o.f?A.pr:D.ahm,m,p)],r),A.dD,n,A.e,A.j,0,n,n))
A.d.v(s,u)}return B.de(n,B.u(s,A.al,n,A.e,A.j,0,A.p),n,n,A.b7,new B.o(n,n,v,w,n,new B.a7(A.a1,A.a7,A.w,l,n,n),A.n),A.i8,n,n,A.Dn,A.bC,n,n,n)},
B(d){var w,v=this,u=null,t=B.K(d).ax.a===A.H,s=new C.b4L(t),r=t?A.dc:A.bN,q=t?A.dc:u,p=t?A.aN:A.M,o=B.d("Help Topics Admin",u,u,u,u,u,u,B.l(u,u,t?A.aN:A.M,u,u,u,u,u,u,u,u,u,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gbYK()
if(n)n=A.Q7
else n=B.U(A.wH,t?A.aN:A.M,u,u,u,u)
w=x.p
o=B.eK(B.a([B.hg(n,B.d("Save",u,u,u,u,u,u,B.l(u,u,t?A.aN:A.M,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=R.aQI(A.aK,u,O.St,A.nq,D.eOV,v.gbrK())
q=v.bve(s)
n=B.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,B.l(u,u,t?A.bO:A.ai,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&B.c()
return B.cg(o,r,B.u(B.a([q,new B.B(A.Dn,n,u),B.C(H.fQx(!1,new C.dPE(v,s),m.length,v.gc1B(),D.bfk,u,!1),1)],w),A.al,u,A.e,A.j,0,A.p),u,!1,!1,p,u)}}
C.Nq.prototype={
S(){return new C.b6y()}}
C.b6y.prototype={
Z(){var w,v=this
v.a0()
w=v.a.c
v.d=new B.ao(new B.b9(w.b,A.aY,A.aL),$.as())
v.e=w.c
v.f=w.d},
p(){var w=this.d
w===$&&B.c()
w.R$=$.as()
w.O$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=B.K(d).ax.a===A.H,q=r?D.r8:A.c,p=B.d("Edit category",s,s,s,s,s,s,B.l(s,s,r?A.c:A.bg,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&B.c()
o=B.aI(s,A.T,!1,s,!0,A.q,s,B.aL(),o,s,s,s,s,s,2,D.bCd,A.z,!0,s,!0,s,!1,s,A.ad,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,A.a8,s,s,s,s,s,s,s,s,s,s,s,B.l(s,s,r?A.c:A.bg,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,A.a5,s,A.am,s,s,s,s)
w=x.aS
w=B.z(new B.I(D.bHq,new C.cE8(t),w),w.k("ai.E"))
w=B.cf(A.bI,w,A.by,8,8)
v=x.gN
v=B.z(new B.I(D.cDo,new C.cE9(t),v),v.k("ai.E"))
u=x.p
v=B.ce(B.u(B.a([o,A.ac,w,A.ac,B.cf(A.bI,v,A.by,0,8)],u),A.m,s,A.e,A.R,0,A.p),A.q,s,A.z,s,s,s,s,A.af)
return B.ei(B.a([B.bF(!1,A.dd,s,s,!0,s,s,new C.cEa(d),s,s),B.bJ(A.py,new C.cEb(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.Yz.prototype={
S(){return new C.aC_()},
o0(d){return this.d.$1(d)}}
C.aC_.prototype={
Z(){this.a0()
this.d=B.bi(this.a.c.e,!0,x.u)},
asM(){var w=this.a,v=w.c,u=this.d
u===$&&B.c()
return w.o0(v.b58(u))},
a5h(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$a5h=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&B.c()
w=2
return B.b(u.aUZ(new C.i7("q_"+1000*s,"",D.cC5,null,!1,r.length)),$async$a5h)
case 2:t=e
if(t!=null){u.n(new C.eyG(u,t))
u.asM()}return B.h(null,v)}})
return B.i($async$a5h,v)},
aUZ(d){var w,v=this.c
v.toString
w=B.eN(new C.eyH(d),!1,null,x.u)
return B.a6(v,!1).cz(w)},
B(d){var w=this,v=null,u=B.K(d).ax.a===A.H,t=u?A.dc:A.bN,s=u?A.dc:v,r=u?A.aN:A.M,q=w.a.c
s=B.eK(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,B.d(q.b+" \u2014 Questions",v,v,v,v,v,v,B.l(v,v,u?A.aN:A.M,v,v,v,v,v,v,v,v,v,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=R.aQI(A.aK,v,O.St,A.nq,D.eU3,w.gbs9())
q=w.d
q===$&&B.c()
q=q.length
if(q===0){q=B.at(B.d("No questions yet. Tap + Question.",v,v,v,v,v,v,B.l(v,v,u?A.bO:A.ai,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=B.hF(v,new C.eyM(w,new C.b4L(u)),q,D.bft,v,A.af,new C.eyN(),!1)
return B.cg(s,t,u,v,!1,!1,r,v)}}
C.Yy.prototype={
S(){return new C.aBZ()}}
C.aBZ.prototype={
Z(){var w,v=this
v.a0()
w=v.a.c
v.d=new B.ao(new B.b9(w.b,A.aY,A.aL),$.as())
w=B.bi(w.c,!0,x.bP)
v.e=w
if(A.d.gag(w))J.ci(v.e,D.a0Q)
w=v.a.c
v.f=w.d
v.r=w.e},
p(){var w=this.d
w===$&&B.c()
w.R$=$.as()
w.O$=0
this.a2()},
aaJ(){var w=0,v=B.j(x.H),u=this,t
var $async$aaJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(Z.EZ(78,1920),$async$aaJ)
case 2:t=e
if(t!=null)u.n(new C.eyC(u,t))
return B.h(null,v)}})
return B.i($async$aaJ,v)},
abF(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$abF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=B.eN(new C.eyA(u),!1,null,x.dZ)
w=2
return B.b(B.a6(r,!1).cz(t),$async$abF)
case 2:s=e
if(s!=null)u.n(new C.eyB(u,s))
return B.h(null,v)}})
return B.i($async$abF,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=B.K(a1).ax.a===A.H,g=h?A.dc:A.bN,f=h?A.dc:i,e=h?A.aN:A.M,d=B.d("Edit Question",i,i,i,i,i,i,B.l(i,i,h?A.aN:A.M,i,i,i,i,i,i,i,i,i,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=B.eK(B.a([B.dn(S.Ye,A.py,new C.eyE(j,a1),B.bk(A.aK,i,i,i,A.c,i,i,i,i,i,i,i)),A.av],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=B.d("Question thumbnail",i,i,i,i,i,i,B.l(i,i,h?A.aN:A.M,i,i,i,i,i,i,i,i,13,i,i,A.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=B.m(14)
w=j.f
v=h?A.bO:A.ai
w=B.aJ(i,B.bw(e,K.aLN(B.m(14),A.bP,140,A.zP,v,w,1/0),A.ap),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbYJ(),i,i,i,i,i,i,!1,A.ae)
e=B.d("Question users will tap",i,i,i,i,i,i,B.l(i,i,h?A.aN:A.M,i,i,i,i,i,i,i,i,13,i,i,A.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?A.bh:A.aN
u=B.m(16)
t=B.H(h?A.aI:A.aJ,A.r,1)
s=j.d
s===$&&B.c()
r=B.l(i,i,h?A.aN:A.M,i,i,i,i,i,i,i,i,15,i,i,A.a_,i,i,!0,i,i,i,i,i,i,i,i)
v=B.p(i,B.A(B.a([B.C(B.aI(i,A.T,!1,i,!0,A.q,i,B.aL(),s,i,i,i,i,i,2,B.bn(i,A.er,i,A.bj,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l(i,i,h?A.bO:A.ai,i,i,i,i,i,i,i,i,i,i,i,A.cn,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),A.z,!0,i,!0,i,!1,i,A.ad,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,A.a8,i,i,i,i,i,i,i,i,i,i,i,r,!0,A.a5,i,A.am,i,i,i,i),1),new B.H2(j.d,i,i)],a0),A.m,i,A.e,A.j,0,i,i),A.i,i,i,new B.o(v,i,t,u,i,i,A.n),i,i,i,i,A.ek,i,i,i)
u=B.d("Printable document",i,i,i,i,i,i,B.l(i,i,h?A.aN:A.M,i,i,i,i,i,i,i,i,i,i,i,A.a_,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=B.iu(A.aK,i,i,A.ag,i,new C.eyF(j),i,B.d("Shows a printable badge on this answer",i,i,i,i,i,i,B.l(i,i,h?A.bO:A.ai,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=B.d("Stored answer (not AI)",i,i,i,i,i,i,B.l(i,i,h?A.aN:A.M,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=B.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,B.l(i,i,h?A.bO:A.ai,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.r8:A.c
q=B.m(16)
p=B.m(16)
o=B.m(16)
n=B.H(A.bf.j(0.45),A.r,1)
m=B.p(i,D.bu7,A.i,i,i,new B.o(A.bf.j(0.12),i,i,B.m(12),i,i,A.n),i,i,i,i,A.bj,i,i,i)
l=B.d("Open Document Editor",i,i,i,i,i,i,B.l(i,i,h?A.aN:A.M,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&B.c()
k=J.aa(k)
l=B.C(B.u(B.a([l,A.aw,B.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,B.l(i,i,h?A.bO:A.ai,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),A.F,i,A.e,A.j,0,A.p),1)
return B.cg(d,g,B.cX(B.a([f,A.P,w,A.d1,e,A.P,v,A.aT,u,A.P,t,A.aw,s,A.ac,B.aD(!1,A.X,!0,q,B.aH(!1,p,!0,B.p(i,B.A(B.a([m,A.eG,l,B.U(A.zV,h?A.bO:A.ai,i,i,i,16)],a0),A.m,i,A.e,A.j,0,i,i),A.i,i,i,new B.o(i,i,n,o,i,i,A.n),i,i,i,i,A.ft,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gc38(),i,i,i,i,i,i,i),A.i,r,0,i,i,i,i,i,A.aa)],a0),i,A.c2,i,i,A.af,!1),i,!1,!1,i,i)}}
C.cVA.prototype={}
C.Ta.prototype={
S(){return new C.aAb(B.k4(!0,null,!0,!0,null,null,!1))}}
C.aAb.prototype={
Z(){var w,v,u,t,s,r,q=this
q.a0()
w=J.dE(q.a.c,new C.dQf())
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
default:break}}w=A.d.aH(v,"\n\n")
q.d=new B.ao(new B.b9(w,A.aY,A.aL),$.as())},
p(){var w=this.d
w===$&&B.c()
w.R$=$.as()
w.O$=0
this.f.p()
this.a2()},
asN(d,e){var w,v,u,t,s,r=this.d
r===$&&B.c()
r=r.a
w=r.b
if(!w.gep())return
v=r.a
r=w.a
u=w.b
t=d+A.a.al(v,r,u)+e
s=A.a.o2(v,r,u,t)
this.d.bH(0,new B.b9(s,B.h1(A.bm,r+t.length),A.aL))},
aTg(d){var w,v,u,t,s=this.d
s===$&&B.c()
s=s.a
w=s.a
v=A.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=A.a.o2(w,v,v,u)
this.d.bH(0,new B.b9(t,B.h1(A.bm,v+u.length),A.aL))},
a8N(){var w=0,v=B.j(x.H),u,t=this,s
var $async$a8N=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(Z.EZ(78,1920),$async$a8N)
case 3:s=e
if(s==null){w=1
break}t.n(new C.dPW(t,s))
case 1:return B.h(u,v)}})
return B.i($async$a8N,v)},
VK(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$VK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hT().a2O(A.ev),$async$VK)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return B.b(s.fd(),$async$VK)
case 4:t.n(new r.dQ0(t,e))
case 1:return B.h(u,v)}})
return B.i($async$VK,v)},
a8O(){var w=0,v=B.j(x.H),u=this,t,s,r,q
var $async$a8O=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.as()
s=new B.ao(A.aq,t)
r=new B.ao(new B.b9("https://",A.aY,A.aL),t)
q=u.c
q.toString
w=2
return B.b(B.cb(null,null,!0,null,new C.dPZ(s,r),q,null,!0,!0,x.y),$async$a8O)
case 2:if(e===!0)u.n(new C.dQ_(u,s,r))
s.R$=t
s.O$=0
r.R$=t
r.O$=0
return B.h(null,v)}})
return B.i($async$a8O,v)},
bw9(){var w,v,u,t,s,r=null,q=B.a([],x.a),p=this.d
p===$&&B.c()
p=A.a.fN(p.a.a,B.ad("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.I(p,new C.dPS(),B.S(p).k("I<1,n>")).bZ(0,new C.dPT())
for(p=J.aW(w.a),v=new B.hX(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gT(p)
if(A.a.a_(s,"## "))q.push(new C.lf("heading",A.a.i(A.a.aV(s,3)),r,r))
else if(A.a.a_(s,"\u2022 ")||A.a.a_(s,"- "))q.push(new C.lf("bullets",new B.I(B.a(s.split("\n"),u),new C.dPU(),t).bZ(0,new C.dPV()).aH(0,"\n"),r,r))
else q.push(new C.lf("text",s,r,r))}p=this.e
p===$&&B.c()
A.d.v(q,p)
if(q.length===0)q.push(D.a0Q)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=B.K(d).ax.a===A.H,m=new C.cVA(n),l=n?A.aG:A.fq,k=B.d(p.a.d,o,o,o,o,o,o,A.cr,o,o,o),j=x.p
k=B.eK(B.a([B.dn(S.Ye,A.a4l,new C.dQ5(p,d),B.bk(A.aK,o,o,o,A.c,o,o,o,o,o,o,o)),A.ab],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?A.d3:A.iN
v=B.cf(A.bI,B.a([p.uF(E.Kf,"Bold",new C.dQ6(p),m),p.uF(E.Ww,"Italic",new C.dQ7(p),m),p.uF(E.aeL,"Underline",new C.dQ8(p),m),p.uF(Ac.WD,"Heading",new C.dQ9(p),m),p.uF(O.Kg,"Bullets",new C.dQa(p),m),p.uF(E.aeK,"Align",new C.dQb(),m),p.uF(A.DP,"Link",p.gbQX(),m),p.uF(A.oY,"Image",p.gbQW(),m),p.uF(Y.WQ,"Video",p.gbQY(),m),p.uF(M.XV,"Signature",new C.dQc(p),m),p.uF(Y.Kh,"Divider",new C.dQd(p),m)],j),A.by,4,4)
w=B.p(o,B.u(B.a([v,A.ar,B.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,B.l(o,o,n?A.fJ:A.bu,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),A.al,o,A.e,A.j,0,A.p),A.i,w,o,o,o,o,o,o,E.adG,o,o,o)
v=n?A.dc:A.c
u=B.m(12)
t=B.H(n?A.fr:A.ep,A.r,1)
s=B.a([new B.a9(0,A.G,A.x.j(n?0.35:0.08),A.cC,16)],x.V)
r=p.d
r===$&&B.c()
q=B.l(o,o,n?A.iv:A.aG,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=B.a([w,B.C(new B.B(A.c2,B.p(o,B.aI(o,A.T,!1,o,!0,A.q,o,B.aL(),r,o,o,o,o,o,2,B.bn(o,A.er,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.l(o,o,n?A.fJ:A.bu,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!0,p.f,A.ad,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,q,!0,A.a5,o,A.am,o,o,o,o),A.i,o,o,new B.o(v,o,t,u,s,o,A.n),o,o,o,o,A4.zy,o,o,o),o),1)],j)
n=p.e
n===$&&B.c()
if(n.length!==0){n=new B.hv(n,B.S(n).k("hv<1>"))
j.push(B.p(o,B.cf(A.bI,n.gdH(n).di(0,new C.dQe(p,m),x.g5).dz(0),A.by,0,8),A.i,o,o,o,o,o,o,o,A.JB,o,o,o))}return B.cg(k,l,B.u(j,A.m,o,A.e,A.j,0,A.p),o,!1,!1,o,o)},
uF(d,e,f,g){var w=null,v=g.a,u=v?A.dc:A.c,t=B.m(8),s=B.m(8)
return B.hJ(B.aD(!1,A.X,!0,t,B.aH(!1,s,!0,new B.B(A.ch,B.U(d,v?A.iv:A.aG,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.i,u,0,w,w,w,w,w,A.aa),w,e,w,w)}}
C.d7x.prototype={}
C.axL.prototype={
a3(){return"_KbView."+this.b}}
C.amW.prototype={
S(){return new C.aAa(D.aMh)},
cEd(d,e){return this.e.$2$size(d,e)}}
C.aAa.prototype={
gavm(){var w,v
if(this.e==null)return null
for(w=J.aW(this.a.c);w.C();){v=w.gT(w)
if(v.a===this.e)return v}return null},
gchu(){var w,v,u,t,s,r=this.gavm()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
bYL(d){this.n(new C.dPP(this,d))},
c4h(d){this.n(new C.dPQ(this,d))},
bus(){this.n(new C.dPH(this))},
buu(){this.n(new C.dPI(this))},
gb_u(){var w=B.bi(this.a.c,!0,x.i)
A.d.aY(w,new C.dPR())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.K(d).ax.a===A.H,f=new C.d7x(g),e=x.O
e=g?B.a([A.M.j(0.9),A.bh.j(0.85)],e):B.a([A.eo.j(0.55),A.lL.j(0.45)],e)
w=B.m(22)
v=B.H((g?A.aI:A.ho).j(0.55),A.r,1)
switch(i.d.a){case 0:g=i.bvq(f)
break
case 1:g=i.gavm()
g.toString
g=i.bw7(f,g)
break
case 2:u=i.gavm()
u.toString
t=i.gchu()
t.toString
s=B.bg(u.d)
r=B.m(16)
r=B.p(h,B.d(t.b,h,h,h,h,h,h,D.erw,h,h,h),A.i,h,h,new B.o(A.aK,h,h,r,h,h,A.n),h,h,h,h,A.bC,h,h,1/0)
q=g?A.aG:A.c
p=B.m(16)
o=B.H(g?A.aI:A.aJ,A.r,1)
n=B.a([new B.a9(0,A.G,A.x.j(g?0.28:0.06),A.e6,10)],x.V)
m=g?A.fm:A.pQ
l=B.m(8)
k=B.U(A.p3,g?A.dC:A.e9,h,h,h,14)
j=x.p
j=B.u(B.a([new C.axJ(f,i.gbut(),u.c,s,"Answer",h),B.C(B.cX(B.a([r,A.ac,B.p(h,B.u(B.a([B.p(h,B.A(B.a([k,A.ey,B.d("Stored answer",h,h,h,h,h,h,B.l(h,h,g?A.dC:A.e9,h,h,h,h,h,h,h,h,11,h,h,A.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),A.m,h,A.e,A.R,0,h,h),A.i,h,h,new B.o(m,h,h,l,h,h,A.n),h,h,h,A.e3,A.fW,h,h,h),new C.aWz(t.c,t.e,f,h)],j),A.F,h,A.e,A.j,0,A.p),A.i,h,h,new B.o(q,h,o,p,n,h,A.n),h,h,h,h,A.c2,h,h,1/0)],j),h,A.bfd,h,h,A.af,!1),1)],j),A.al,h,A.e,A.j,0,A.p)
g=j
break
default:g=h}return B.p(h,g,A.ap,h,h,new B.o(h,h,v,w,h,new B.a7(A.b4,A.bc,A.w,e,h,h),A.n),h,h,h,A.iT,h,h,h,h)},
aR3(d){var w,v,u,t=null,s=d.a,r=s?D.r8:A.c,q=A.az.j(0.22)
q=B.a([new B.a9(0,A.G,q,A.J,14),new B.a9(0,A.G,A.x.j(s?0.28:0.06),A.J,8)],x.V)
w=B.H(s?A.aI:A.ho,A.r,2)
v=this.a
u=x.p
q=B.a([B.p(t,B.i1(v.cEd(v.d,72),A.ap),A.i,t,t,new B.o(r,t,w,t,q,t,A.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)A.d.v(q,B.a([A.ar,B.d("Tap to switch",t,t,t,t,t,t,B.l(t,t,A.dp,t,t,t,t,t,t,t,t,12,t,t,A.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return B.u(q,A.m,t,A.e,A.j,0,A.p)},
bvq(d){var w,v,u=this,t=null,s=u.a.r
s=B.at(s!=null?B.aJ(t,u.aR3(d),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,A.ae):u.aR3(d),t,t,t)
w=d.a
v=B.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,B.l(t,t,w?A.aN:A.M,t,t,t,t,t,t,t,t,20,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t)
return B.cX(B.a([s,A.aC,v,A.ar,B.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,B.l(t,t,w?A.bO:A.ai,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),A.L,t,t),A.bv,B.ig(!0,t,t,A.z,F.aHv,new C.dPK(u,d),u.gb_u().length,t,A.dJ,A.af,!0)],x.p),t,D.bfv,t,t,A.af,!1)},
bw7(d,e){var w,v,u,t,s=null,r=B.bi(e.e,!0,x.u)
A.d.aY(r,new C.dPM())
w=B.bg(e.d)
v=d.a
u=B.d("Tap a question to read the stored answer.",s,s,s,s,s,s,B.l(s,s,v?A.bO:A.ai,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=B.at(B.d("No questions in this category yet.",s,s,s,s,s,s,B.l(s,s,v?A.bO:A.ai,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=B.hF(s,new C.dPN(this,r,d,e),t,A.u9,s,A.af,new C.dPO(),!1)
return B.u(B.a([new C.axJ(d,this.gbur(),e.c,w,e.b,s),new B.B(Ah.wi,u,s),B.C(v,1)],x.p),A.al,s,A.e,A.j,0,A.p)}}
C.axJ.prototype={
B(d){var w=this,v=null,u=w.c.a,t=B.aF(v,v,v,v,B.U(A.eq,u?A.aN:A.M,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=B.m(12)
q=B.p(v,B.U(w.e,s,v,v,v,22),A.i,v,v,new B.o(r,v,v,q,v,v,A.n),v,v,v,v,A.ch,v,v,v)
return new B.B(D.biB,B.A(B.a([t,q,A.av,B.C(B.d(w.r,v,v,v,v,v,v,B.l(v,v,u?A.aN:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v),v)}}
C.a9c.prototype={
B(d){var w=null,v=this.c,u=B.bg(v.d),t=this.d.a,s=t?D.r8:A.c,r=B.m(14),q=B.m(14),p=B.m(14),o=B.H(t?A.aI:A.aJ,A.r,1),n=B.a([new B.a9(0,A.G,A.x.j(t?0.28:0.06),A.dF,6)],x.V),m=u.j(0.15),l=B.m(12)
l=B.p(w,B.U(v.c,u,w,w,w,22),A.i,w,w,new B.o(m,w,w,l,w,w,A.n),w,40,w,w,w,w,w,40)
return new B.fZ(1,B.aD(!1,A.X,!0,r,B.aH(!1,q,!0,B.p(w,B.u(B.a([l,A.ar,B.d(v.b,w,2,A.a0,w,w,w,B.l(w,w,t?A.aN:A.M,w,w,w,w,w,w,w,w,10,w,w,A.I,w,1.1,!0,w,w,w,w,w,w,w,w),A.L,w,w)],x.p),A.m,w,A.b5,A.j,0,A.p),A.i,w,w,new B.o(w,w,o,p,n,w,A.n),w,w,w,w,A.ch,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),A.i,s,0,w,w,w,w,w,A.aa),w)}}
C.aWz.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=B.a([],q)
if(this.d){w=r.a
v=w?A.fm:A.pQ
u=B.m(8)
t=B.U(A.rS,w?A.dC:A.e9,s,s,s,14)
p.push(B.p(s,B.A(B.a([t,A.d4,B.d("Printable document",s,s,s,s,s,s,B.l(s,s,w?A.dC:A.e9,s,s,s,s,s,s,s,s,10,s,s,A.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),A.m,s,A.e,A.R,0,s,s),A.i,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,A.cR,A.eu,s,s,s))}A.d.v(p,J.b3(this.c,new C.c3e(r),x.l))
return B.u(p,A.F,s,A.e,A.j,0,A.p)}}
C.a94.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new B.B(D.bdr,B.d(q.b,r,r,r,r,r,r,B.l(r,r,s.d.a?A.aN:A.M,r,r,r,r,r,r,r,r,15,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new B.B(A.hq,B.bw(B.m(12),K.aLN(r,A.bP,160,A.oY,r,w,1/0),A.ap),r)
case"video":v=q.c
q=v==null?q.b:v
return new B.B(A.hq,new C.axK(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new B.B(A.wd,B.aH(!1,r,!0,B.d(q,r,r,r,r,r,r,B.l(r,r,s.d.a?A.cH:A.bf,r,A.m7,r,r,r,r,r,r,r,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cxP(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=B.jl(v?A.aI:A.aJ,r,r,r,r,r)
q=B.d(q.b,r,r,r,r,r,r,B.l(r,r,v?A.ct:A.aI,r,r,r,r,r,r,r,r,r,A.cS,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=B.p(r,r,A.i,v?A.bO:A.ai,r,r,r,1,r,r,r,r,r,120)
return new B.B(A.zm,B.u(B.a([u,q,A.aT,t,A.aw,B.d("Signature",r,r,r,r,r,r,B.l(r,r,v?A.bO:A.ai,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.F,r,A.e,A.j,0,A.p),r)
case"bullets":v=x.cl
q=B.z(new B.cQ(new B.a3(B.a(q.b.split("\n"),x.s),new C.cxQ(),x.cc),new C.cxR(s),v),v.k("E.E"))
return new B.B(A.li,B.u(q,A.F,r,A.e,A.j,0,A.p),r)
case"divider":return new B.B(A.hq,B.jl(s.d.a?A.aI:A.aJ,r,r,r,r,r),r)
default:q=q.b
if(A.a.i(q).length===0)return A.bF
return new B.B(A.fh,C.hom(q,s.d),r)}}}
C.axK.prototype={
S(){return new C.bcu()}}
C.bcu.prototype={
Z(){this.a0()
this.aaL()},
aaL(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$aaL=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=A.a.i(r.a.c)
if(J.aa(n)!==0)p=!J.cS(n,"http")&&!J.cS(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=B.VW(B.cp(n,0,null),null)
w=7
return B.b(J.af3(q),$async$aaL)
case 7:if(r.c==null){w=1
break}r.n(new C.d7y(r,q))
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
return B.i($async$aaL,v)},
p(){var w=this.d
if(w!=null)w.p()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?A.bh:A.eZ
u=B.m(12)
return B.p(A.C,B.U(A.p8,w?A.bO:A.ai,t,t,t,36),A.i,t,t,new B.o(v,t,t,u,t,t,A.n),t,120,t,t,t,t,t,t)}w=B.m(12)
v=s.a
u=J.af1(v)
return B.bw(w,new B.fZ(u,new B.am(A.C,t,A.a9,A.q,B.a([new B.yV(s,t),B.aF(t,t,t,t,B.U(v.f?A.aeS:A.Ki,A.c,t,t,t,44),t,t,t,new C.d7A(this,s),t,t,t,t,t,t)],x.p),t),t),A.ap)}}
C.anH.prototype={
a3(){return"NgmyMusicLane."+this.b}}
C.GT.prototype={
a3(){return"NgmyMusicRhymeScheme."+this.b}}
C.qM.prototype={}
C.amZ.prototype={
S(){var w=null
return new C.aAc(new B.ao(A.aq,$.as()),B.mo(0,w,w),B.a([],x.m),D.AT,D.azI,w,w)},
gdQ(){return this.d}}
C.aAc.prototype={
Z(){var w,v=this
v.a0()
w=B.bh(null,A.mr,null,1,null,v)
w.f2(0,!0)
v.as!==$&&B.aO()
v.as=w
v.z=A.d.gI(D.a_s).a},
p(){var w=this,v=w.as
v===$&&B.c()
v.p()
v=w.d
v.R$=$.as()
v.O$=0
w.e.p()
w.bo7()},
gami(){var w,v,u,t,s=this.x
if(s===D.AU)return null
s=s===D.AT
w=s?D.a_s:D.ZL
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?A.d.gI(w):null},
cif(d){return this.n(new C.dQt(this,d))},
av8(){$.aT.x1$.push(new C.dQk(this))},
Hi(d){return this.chI(d)},
aTh(){return this.Hi(null)},
chI(b0){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$Hi=B.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=A.a.i(b0==null?q.d.a.a:b0)
if(J.aa(a8)===0||q.r||q.a.e){w=1
break}w=3
return B.b(q.a.f.$0(),$async$Hi)
case 3:e=b2
if(!e){w=1
break}B.jz()
d=a8.toLowerCase()
p=A.a.q(d,"continue")||A.a.q(d,"keep going")||A.a.q(d,"go on")||A.a.q(d,"next verse")||A.a.q(d,"more lyrics")||A.a.q(d,"endelea")||A.a.q(d,"endelea na")||A.a.q(d,"ongeza")||A.a.q(d,"tuendelee")
a0=q.f
a1=A.d.bc(a0,new C.dQm())
o=!p&&!a1
d=a8.toLowerCase()
if(!(A.a.q(d,"fix")||A.a.q(d,"rewrite")||A.a.q(d,"re-write")||A.a.q(d,"rhyme better")||A.a.q(d,"better rhyme")||A.a.q(d,"sound better")||A.a.q(d,"improve")||A.a.q(d,"polish")||A.a.q(d,"make it rhyme")||A.a.q(d,"boresha")||A.a.q(d,"rekebisha")||A.a.q(d,"endeleza mistari")))a2=C.fVS(a8)&&a1
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
l=C.fVS(a8)&&!p
q.n(new C.dQn(q,a8))
q.av8()
k=A.a.i(q.a.c)
if(J.aa(k)===0){q.n(new C.dQo(q))
q.av8()
w=1
break}t=5
j=B.mV(k)
i=new B.I(a0,new C.dQp(),B.S(a0).k("I<1,n>")).aH(0,"\n\n")
a0=C.hHb(m,p,o,q.x,n,q.y,q.gami(),l)
a3=J.aa(i)!==0?"--- Conversation so far ---\n"+B.t(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+B.t(a8)
w=8
return B.b(B.ra(j,h,A.hf,null),$async$Hi)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=A.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=A.a.i(a0)}else a6=L.bwX(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.n(new C.dQq(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.n(new C.dQr(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.n(new C.dQs(q))
q.av8()
w=r.pop()
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Hi,v)},
bA_(){return this.Hi("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=B.K(d).ax.a===A.H,p=q?A.CX:D.b5w,o=x.p
o=B.a([B.u(B.a([B.C(s.cgY(q),1),s.bze(q)],o),A.m,r,A.e,A.j,0,A.p)],o)
if(s.f.length!==0&&!s.r){w=A.aM.j(0.55)
v=s.r?r:s.gbzZ()
u=B.m(28)
t=B.a([A.aM,A.aZ],x.O)
o.push(B.an(78,B.aD(!1,A.X,!0,r,B.aH(!1,r,!0,B.eq(D.dKM,r,new B.o(r,r,r,u,B.a([new B.a9(0,A.G,A.aM.j(0.45),A.cC,16)],x.V),new B.a7(A.a1,A.a7,A.w,t,r,r),A.n),r,r,r),A.qK,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),A.i,A.K,10,r,w,A.qK,r,r,A.aa),r,r,r,14,r,r))}return B.p(r,new B.am(A.W,r,A.a9,A.q,o,r),A.i,p,r,r,r,r,r,r,r,r,r,r)},
cgY(d){var w,v,u,t=this,s=null
if(t.x===D.AU)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=B.a([B.fA4(s,!1,A.K,0,0,w,B.fwt(t.cmr(d),A.SN,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=B.U(A.ahe,A.az.j(0.5),s,s,s,52)
w.push(B.b23(new B.B(A.ej,B.u(B.a([u,A.aC,B.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,B.l(s,s,d?A.aA:A.dx,s,s,s,s,s,s,s,s,14,s,s,A.a_,s,1.45,!0,s,s,s,s,s,s,s,s),A.L,s,s),A.aC,B.cf(A.fz,B.a([t.aeO("Full bongo love song ABAB",d),t.aeO("Mix: group vs private jet \u2014 which flies?",d),t.aeO("Song from John 3:16 + matching verses",d),t.aeO("Fix my rhyme \u2014 paste your lines",d)],v),A.by,8,8)],v),A.m,s,A.b5,A.j,0,A.p),s),!1))}else{v=t.r?1:0
w.push(new B.nk(D.be5,B.Vn(new B.nU(new C.dQl(t,d),u+v,!0,!0,!0,0,B.rf(),s)),s))}return B.uC(0,s,A.q,t.e,A.z,s,s,A6.a6q,s,s,!1,s,A.af,!1,w)},
cmr(d){var w=this.as
w===$&&B.c()
return B.c4(w,new C.dQA(this,d),null)},
cmt(d){var w,v=this,u=null,t=B.m(14),s=v.r?u:new C.dQC(v),r=A.x.j(d?0.35:0.06),q=B.m(14),p=B.H(A.b8.j(0.35),A.r,1),o=v.gami()
o=o==null?u:o.c
o=B.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,A.GU,u,u,u)
w=v.gami()
w=w==null?u:w.b
if(w==null)w="Style"
w=B.C(B.d(w,u,u,u,u,u,u,B.l(u,u,d?A.c:A.bg,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.p(u,B.A(B.a([o,A.ab,w,B.U(v.w?A.KH:A.qd,A.b8,u,u,u,20)],x.p),A.m,u,A.e,A.j,0,u,u),A.i,u,u,new B.o(r,u,p,q,u,u,A.n),u,u,u,u,A.ry,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),A.i,A.K,0,u,u,u,u,u,A.aa)},
ari(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=B.a([A.aW,A.aR],x.O)
break
case 1:w=B.a([A.bf,A.cH],x.O)
break
case 2:w=B.a([A.bB,A.az],x.O)
break
default:w=n}v=m?6:0
u=B.m(14)
t=B.m(14)
s=this.r?n:new C.dQj(this,d)
r=B.m(14)
w=m?new B.a7(A.a1,A.a7,A.w,w,n,n):n
if(m)q=n
else q=A.x.j(g?0.3:0.05)
p=B.d(f,n,n,n,n,n,n,A.GU,n,n,n)
if(m)o=A.c
else o=g?A.ak:A.bg
return B.C(B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.de(n,B.u(B.a([p,B.d(e,n,n,n,n,n,n,B.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),A.m,n,A.e,A.j,0,A.p),n,n,A.b7,new B.o(q,n,n,r,n,w,A.n),A.X,n,n,n,A.jW,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),A.i,n,v,n,n,n,n,n,A.aa),1)},
cmu(d,e){var w,v,u,t=this,s=null,r=t.x===D.AT?t.z:t.Q,q=B.m(20)
if(r===d.a)r=A.b8.j(e?0.25:0.15)
else r=A.x.j(e?0.2:0.04)
w=B.m(20)
v=t.r?s:new C.dQD(t,d)
u=B.d(d.c,s,s,s,s,s,s,A.Qq,s,s,s)
return B.aD(!1,A.X,!0,q,B.aH(!1,w,!0,new B.B(A.fD,B.A(B.a([u,A.d4,B.d(d.b,s,s,s,s,s,s,B.l(s,s,e?A.c:A.bg,s,s,s,s,s,s,s,s,10,s,s,A.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.m,s,A.e,A.R,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),A.i,r,0,s,s,s,s,s,A.aa)},
aeO(d,e){var w=null,v=B.d(d,w,w,w,w,w,w,E.a4d,w,w,w),u=A.az.j(e?0.2:0.1)
return B.od(w,u,v,w,this.r?w:new C.dQu(this,d),w,w,w)},
bze(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=B.m(22),o=d?A.M.j(0.95):A.c,n=B.H(A.az.j(0.2),A.r,1),m=x.p,l=B.a([],m)
if(q>0)l.push(new B.B(G.adr,B.d("$"+A.k.ab(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,B.l(r,r,A.aM.j(0.85),r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=B.l(r,r,d?A.c:A.bg,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.AU?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=B.C(B.aI(r,A.T,!1,r,!0,A.q,r,B.aL(),w,r,r,r,r,r,2,B.bn(r,A.er,r,A.fX,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.l(r,r,d?A.c1:A.hT,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.z,!0,r,!0,r,!1,r,A.ad,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.dQg(s),r,!1,r,r,!1,r,!0,r,A.a8,r,r,r,r,r,r,r,r,r,r,r,v,!0,A.a5,r,A.am,r,r,r,r),1)
u=s.r
t=u?r:new C.dQh(s)
l.push(B.A(B.a([v,new B.H2(w,A.az,r),B.aD(!1,A.X,!0,r,B.aH(!1,r,!0,B.eq(u?D.dKW:D.bwm,r,D.aRX,42,r,42),A.cD,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),A.i,r,0,r,r,A.cD,r,r,A.aa)],m),A.dD,r,A.e,A.j,0,r,r))
return B.p(r,B.u(l,A.al,r,A.e,A.R,0,A.p),A.i,r,r,new B.o(o,r,n,p,r,r,A.n),r,r,r,A.u7,A.ac3,r,r,r)}}
C.aI5.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.Tb.prototype={
ad(){var w=this
return B.D(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.Xj.prototype={
S(){return new C.axc(null,null)},
b9P(){return this.f.$0()}}
C.axc.prototype={
Z(){var w,v=this,u=null
v.a0()
w=B.bh(u,D.bcw,u,1,u,v)
w.cn(0)
v.d!==$&&B.aO()
v.d=w
w=B.bh(u,A.oQ,u,1,u,v)
w.f2(0,!0)
v.e!==$&&B.aO()
v.e=w
w=B.bh(u,A.o0,u,1,u,v)
w.cF(0)
v.f!==$&&B.aO()
v.f=w
w=B.bh(u,A.w6,u,1,u,v)
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
w.bmZ()},
bYN(){var w=this.d
w===$&&B.c()
w.en(0).bC(new C.d59(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(B.aG(d,A.bM,x.w).w.a.a-32,360),h=A.x.j(0.82),g=k.gbYM(),f=x.l,e=J.e0(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&B.c()
e[v]=new B.BJ(new C.d5a(k,v,d),j,w,j)}f=B.z(e,f)
w=k.d
w===$&&B.c()
u=B.m(28)
t=B.H(A.c.j(0.22),A.r,1.5)
s=B.a([new B.a9(2,A.G,A.aZ.j(0.35),A.J,40),new B.a9(0,A.G,A.aK.j(0.25),A.fI,28)],x.V)
r=k.e
r===$&&B.c()
q=k.r
q===$&&B.c()
q=B.c4(new B.h3(B.a([r,q],x.U)),new C.d5b(k),j)
r=B.nj(A.j0,D.eRu,new C.d5c())
p=B.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,B.l(j,j,A.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,A.cn,j,1.45,!0,j,j,j,j,j,j,j,j),A.L,j,j)
o=x.p
n=B.A(B.a([k.aTi(A.jY,"Resets in 24h"),A.ab,k.aTi(A.p3,"Help Topics ready")],o),A.m,j,A.b5,A.j,0,j,j)
m=B.a([],o)
k.a.toString
l=A.c.j(0.35)
m.push(B.C(B.dU(D.eMu,new C.d5d(k),B.d9(j,j,j,j,j,j,j,j,j,A.ak,j,j,A.lQ,j,new B.b5(B.m(14),A.V),new B.ay(l,1,A.r,-1),j,j,j,j)),1))
k.a.toString
m.push(A.av)
k.a.toString
l=B.m(14)
m.push(B.C(B.bJ(D.eRl,g,B.bk(A.aK,j,j,6,A.c,j,A.lQ,A.aK.j(0.5),new B.b5(l,A.V),j,j,j)),1))
f.push(B.at(B.aJ(j,B.c4(w,new C.d5e(k),B.p(j,B.u(B.a([q,A.aC,r,A.U,p,A.P,n,A.bv,B.A(m,A.m,j,A.e,A.j,0,j,j)],o),A.m,j,A.e,A.R,0,A.p),A.i,j,j,new B.o(j,j,t,u,s,D.bE0,A.n),j,j,j,j,A7.adj,j,j,i)),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.d5f(),j,j,j,j,j,j,!1,A.ae),j,j,j))
return B.aD(!1,A.X,!0,j,B.aJ(j,new B.am(A.W,j,A.a9,A.q,f,j),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,A.ae),A.i,h,0,j,j,j,j,j,A.aa)},
aTi(d,e){var w=null,v=A.c.j(0.08),u=B.m(20),t=B.H(A.c.j(0.12),A.r,1)
return B.p(w,B.A(B.a([B.U(d,A.aZ,w,w,w,13),A.ey,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.R,0,w,w),A.i,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.fD,w,w,w)}}
C.aH_.prototype={
aM(){this.aW()
this.aT()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdA())
w.aX$=null
w.a2()}}
C.LL.prototype={}
C.pj.prototype={}
C.anv.prototype={
S(){return new C.aAy(B.a([],x.E),B.a([],x.s))}}
C.aAy.prototype={
gamG(){return A.k.D(B.Ja(this.a.c.a,new C.e_3(this)),0,1/0)},
a5p(){var w,v=this,u=v.d,t=v.gamG()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)B.qd(u.a,t,!0,!1)},
HL(d,e){var w,v,u,t=this,s=t.gamG(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gamG()
if(w<v-0.005)B.h_O(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)B.qd(u.a,w,!0,!1)
B.qd(t.a.c.a,w,!0,!1)
B.Bv(!0,!1,w,t.a.c.a)},
Z(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a0()
if(!o.a.c.w){$.aT.x1$.push(new C.e_K(o))
return}$.aT.c_$.push(o)
w=$.GJ+1
$.GJ=w
if(w===1){w=$.fNG
if(w!=null)w.$0()}v=$.fyw.h(0,A.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=B.bi(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=B.bi(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=B.lK(0,n,!1,n,"",0,0,"",n,0,n,"",n,n,A.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=B.aLr(u,A.k.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new B.uu(w,u,r,q,s.e,p)}o.d=t}o.N9()
o.a5p()
$.aT.x1$.push(new C.e_L(o))
o.Q=B.dD(A.nd,new C.e_M(o))
o.as=B.dD(A.fC,new C.e_N(o))},
p(){var w=this,v=w.Q
if(v!=null)v.a9(0)
v=w.as
if(v!=null)v.a9(0)
$.aT.hE(w)
C.hgm()
w.a2()},
cos(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new B.N(Date.now(),0,!1)
v=p.r
if(!C.a5f(v,w)){if(C.fyy(p,q.e)){q.n(new C.e_s(q,p))
q.zl(!1,!0,!0)}else if(q.c!=null)q.n(new C.e_t())
return}if(!C.c5t(v.c?v.bP():v)){q.n(new C.e_u(p))
q.aTr(!1)
return}u=p.gB7()
if(u<=0)return
t=w.cT(B.bY(B.by(w),B.bC(w),B.bN(w),12,0,0,0,0))
s=C.fyz(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.n(new C.e_v())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(A.d.bc(q.e,new C.e_w(r))){q.n(new C.e_x(p,w,u))
return}q.n(new C.e_y(q,p,u,w))
q.ati(new B.cP(r,p.a,u,A.fy,A.eW,"Clock-in daily earnings (local)",null,null,A.cc,w))},
iL(d){if(d===A.fl)this.Dg()},
N9(){var w,v,u,t,s,r,q,p=this.d
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
q=new B.uu(u,t,s,r,v.e,q)
u=q}w.x=u},
PJ(d){return this.cna(d)},
cna(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$PJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.N9()
t.HL(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return B.b(x.r.b(s)?s:B.dR(s,x.H),$async$PJ)
case 3:case 1:return B.h(u,v)}})
return B.i($async$PJ,v)},
Dg(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$Dg=B.e(function(d,e){if(d===1){s.push(e)
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
return B.b(H.yk(q.w,k,l,j,m,!1,n),$async$Dg)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.n(new C.e_n(q,p))
q.PJ(!1)}w=8
return B.b(q.HX(),$async$Dg)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=B.a5(h)
$.ak.$1("[growth income] pull wallet: "+B.t(o))
w=9
return B.b(q.HX(),$async$Dg)
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
return B.i($async$Dg,v)},
LF(d){return this.btF(d)},
btE(){return this.LF(null)},
btF(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$LF=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return B.b(B.au(),$async$LF)
case 3:s=f
r=A.a.i(t.a.c.a.toLowerCase())
q=B.d7(t.w,x.N)
r=s.rk("ngmy_gi_credited_txn_ids_"+r)
q.v(0,r==null?B.a([],x.s):r)
j.a=0
p=B.a([],x.s)
o=d==null?null:B.kj(d,B.S(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,B.J)(r),++m){l=r[m]
k=l.a
if(q.q(0,k))continue
if(o!=null&&!o.q(0,k))continue
if(l.d===A.fc&&l.x===A.cc&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.n(new C.e_4(j,t,i))
q.v(0,p)
r=B.z(q,B.a2(q).k("cj.E"))
t.w=r
w=4
return B.b(B.anw(t.a.c.a,r),$async$LF)
case 4:t.asV(!1,!0)
r=t.c
if(r!=null)r.E(x.q).f.P(B.aZ(null,null,null,null,null,A.q,null,B.d("Balance updated: +$"+B.dx(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$LF,v)},
HX(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$HX=B.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=B.S(a2).k("a3<1>")
a4=B.z(new B.a3(a2,new C.e_o(),a3),a3.k("E.E"))
a5=a4
a6=B.a([],x.s)
w=J.aa(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=B.S(a2).k("I<1,n>")
e=B.z(new B.I(a2,new C.e_p(),a3),a3.k("ai.E"))
q=e
w=9
return B.b(B.lO("transactions","id,status",null,null,null,B.D(["id",q],x.N,x.j),null,!0,null,null,!1,A.bE),$async$HX)
case 9:p=a9
if(r.c==null){w=1
break}o=!1
for(a2=J.aW(p);a2.C();){n=a2.gT(a2)
m=n
a3=J.q(m,"id")
l=J.k(a3==null?"":a3)
a3=B.aQ(J.q(m,"status"))
d=a3==null?null:A.k.L(a3)
k=d==null?0:d
if(J.aa(l)===0)continue
j=A.d.be(r.e,new C.e_q(l))
if(j<0)continue
i=r.e[j].x
if(J.y(k,1))a0=A.cc
else a0=J.y(k,2)?A.kc:A.dk
h=a0
if(!J.y(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===A.dk&&h===A.cc&&a3[j].d===A.fc)J.ci(a6,l)
if(i===A.dk&&h===A.kc&&r.e[j].d===A.eA){g=r.d
if(g!=null){r.HL(g.d+r.e[j].c,!1)
r.asV(!1,!0)}}}}if(o&&r.c!=null)r.n(new C.e_r())
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
return B.b(r.LF(a6),$async$HX)
case 13:w=11
break
case 12:w=14
return B.b(r.btE(),$async$HX)
case 14:case 11:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$HX,v)},
NL(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$NL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:j=t.a.c
w=3
return B.b(B.uZ(j.a,j),$async$NL)
case 3:i=e
if(t.c==null){w=1
break}t.n(new C.e_8(t,i))
t.N9()
t.a5p()
j=t.a.c.a
s=i.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return B.b(H.yk(s[0],p,q,o,r,!0,j),$async$NL)
case 4:j=e.a
n=j[4]
m=B.bi(j[2],!0,x.o)
l=j[5]
t.w=B.bi(j[1],!0,x.N)
t.r=j[3]
t.d=n
t.N9()
t.a5p()
k=C.fyy(n,m)
if(k)t.HL(n.d,!1)
t.N9()
if(t.c==null){w=1
break}t.n(new C.e_9(t,n,m,l))
if(k)t.zl(!1,!0,!0)
else t.PJ(!1)
case 1:return B.h(u,v)}})
return B.i($async$NL,v)},
zl(d,e,f){return this.c7K(d,e,f)},
asV(d,e){return this.zl(d,!1,e)},
aTr(d){return this.zl(!1,d,!1)},
c7K(d,e,f){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$zl=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new B.N(Date.now(),0,!1).a4()
r=t.a.c.a
q=t.e
p=t.f
w=3
return B.b(B.rH(r,o,q,!1,t.w,s,p),$async$zl)
case 3:p=t.a.c.a
q=t.e
r=t.f
H.LM(t.w,p,q,s,o,r)
if(f)t.PJ(d)
case 1:return B.h(u,v)}})
return B.i($async$zl,v)},
bZ2(){this.n(new C.e_h())
this.asV(!1,!0)},
abj(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===A.cc&&B.rc(d)){w=r.a
w.f.$1(new B.cP(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.c5q(q,d)
v=q.d=B.Ja(r.a.c.a,new C.e_e(r))
r.at=r.a.c.d=v
B.qd(q.a,v,!0,!1)
if(r.c!=null)r.n(new C.e_f(r,d))
r.zl(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new B.cP(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===A.dk
if(w&&d.d===A.fc)s=!1
else if(w&&d.d===A.eA){r.HL(q.d-d.c,!0)
s=!0}else{C.c5q(q,d)
w=d.d
s=w===A.eA||w===A.jq
r.HL(q.d,s)}r.n(new C.e_g(r,d))
w=d.d
r.zl(s,e,w===A.eA||w===A.jq||d.x===A.cc||w===A.fy)},
ati(d){return this.abj(d,!0,!1)},
aUj(d,e){return this.abj(d,!0,e)},
aUi(d,e){return this.abj(d,e,!1)},
c0Q(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.hJk(u,e,d)){v.ly("This plan is already active.")
return}w=B.h_l(u.a,d,e)
if(C.hFO(u.a,v.e,w)){v.ly("You already own this plan.")
return}if(u.d<g){v.ly("Insufficient balance. Add funds in the Wallet tab first.")
return}v.n(new C.e_i(v))
v.n(new C.e_j(v,u,new B.uu(d,e,0.0286,new B.N(Date.now(),0,!1),0,0)))
v.ati(new B.cP(w,u.a,g,A.jq,A.eW,"Direct investment buy: "+d,null,null,A.cc,new B.N(Date.now(),0,!1)))
v.n(new C.e_k(v))
v.ly("Plan purchased: "+d)},
ly(d){var w=null,v=this.c
if(v==null)return
v.E(x.q).f.P(B.aZ(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
XR(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$XR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hl(s,new C.akz(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$XR)
case 3:w=4
return B.b(t.NL(),$async$XR)
case 4:case 1:return B.h(u,v)}})
return B.i($async$XR,v)},
abM(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hl(s,new C.afn(r,B.a([r],x.d9),A.NC,t.a.d,t.gaUh(),t.gaTq(),null),!1,null,x.X),$async$abM)
case 3:case 1:return B.h(u,v)}})
return B.i($async$abM,v)},
abK(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return B.b(B.hl(s,new C.ai8(r,t.a.d,t.e,t.gaUh(),t.gaTq(),new C.e_m(t),null),!1,"LocalGrowthGameCenter",x.X),$async$abK)
case 3:case 1:return B.h(u,v)}})
return B.i($async$abK,v)},
a9y(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$a9y=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new B.N(s,0,!1)
w=C.fyy(j,t.e)?3:4
break
case 3:w=5
return B.b(t.aTr(!0),$async$a9y)
case 5:case 4:if(j.x==null){t.ly("Choose an investment plan first, then come back to clock in.")
t.n(new C.e_a(t))
w=1
break}if(B.mP(r)===6||B.mP(r)===7){t.ly("Clock-in opens Monday through Friday.")
w=1
break}if(!C.fOo(r)){t.ly("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a5f(q,r)&&j.fy>0){t.ly("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!B.a01(q,r))if(!B.a01(j.fr,r)){q=B.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,B.J)(p),++n){m=p[n]
if(A.a.i(m.b.toLowerCase())===A.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new B.aCj(m.y,l,m.a))}}q=B.fZN(q,r)}else q=p
else q=p}else q=!1
if(q){t.ly("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.ly("You are already clocked in for today.")
w=1
break}k=C.hhL(r)
q=j.a
t.n(new C.e_b(j,r,k))
t.aUi(new B.cP("local_clockin_manual_"+q+"_"+s,j.a,0,A.fy,A.eW,"Clock-in session started (local)",null,null,A.cc,r),!1)
t.ly("Clock-in started. Keep Growth Income open for today.")
case 1:return B.h(u,v)}})
return B.i($async$a9y,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.K(d).ax.a===A.H?A.iQ:A.oM
if(l.d==null)return B.eb(A.k7,j,!0)
w=x.o
v=B.Q(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,B.J)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.m(0,q,r)}p=A.a.i(l.a.c.a.toLowerCase())
u=$.fbU
u=u==null?k:u.$0()
u=J.aW(u==null?A.hL:u)
while(u.C()){t=u.gT(u)
q=t.a
if(q.length===0||v.am(0,q)||B.rc(t))continue
if(A.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(B.dk(o.toLowerCase(),"clock-in",0))continue
v.m(0,q,t)}w=B.z(new B.be(v,v.$ti.k("be<2>")),w)
v=l.e
A.d.v(w,new B.a3(v,new C.e_C(),B.S(v).k("a3<1>")))
A.d.aY(w,new C.e_D())
v=l.d
v.toString
u=C.hvY(l.a.c)
t=l.d
t.toString
t=B.eb(new C.aj1(t,l.a.e,l.z,l.gc0P(),l.aOF(),D.eZ0),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=B.eb(new C.axX(l.aOF(),q,n,o,w,new C.e_E(l),l.gc2T(),new C.e_F(l),D.eZ1),j,!0)
m=B.aG(d,k,x.w).w
n=l.y
return new B.U2(n,new C.e_G(l),B.aD(!1,A.X,!0,k,new B.a8(1/0,m.a.b,new B.am(A.W,k,A.a9,A.q,B.a([B.c_(0,B.eb(k,j,!0),0,0,0),B.c_(0,B.br(!1,[new C.axW(v,u,w,l.gbTK(),new C.e_H(l),new C.e_I(l),new C.e_J(d),l.gc3I(),l.gc3E(),D.eZ_),t,o][n],!0,!1,A.ag,!0,!0),0,0,0),B.an(0,l.bvS(),k,k,0,0,k,k)],x.p),k),k),A.i,j,0,k,k,k,k,k,A.aa),k)},
aOF(){var w=null,v=B.a([D.es.j(0.24),A.M.j(0.72)],x.O)
return B.hJ(B.aH(!1,w,!0,B.p(A.C,D.bAF,A.i,w,w,new B.o(w,w,B.H(D.es.j(0.38),A.r,1),w,B.a([new B.a9(0,A.G,D.es.j(0.18),A.J,16)],x.V),new B.a7(A.ax,A.aE,A.w,v,w,w),A.a6),w,40,w,w,w,w,w,40),A.cD,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e_7(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bvS(){var w=null,v=B.m(27),u=B.H(A.as.j(0.45),A.r,1),t=B.a([new B.a9(0,A.G,A.x.j(0.5),A.eO,24),new B.a9(-2,A.G,A.as.j(0.12),A.J,18)],x.V)
return new B.B(A.JB,B.br(!0,B.at(new B.d3(D.aQj,B.p(w,B.co(new C.e_5(this)),A.i,w,w,new B.o(w,w,u,v,t,D.bDx,A.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,A.ag,!0,!1),w)},
bVo(d){var w=null,v=this.y===d,u=D.cFu[d],t=u.b,s=u.a,r=""+d,q=x.W
return B.C(B.di(w,!0,w,B.aJ(A.c5,B.qT(B.qh(v?B.U(s,D.a7J,new B.cv("on"+r,q),w,w,21):B.u(B.a([B.U(s,A.c.j(0.62),w,w,w,19),A.bw,B.d(t,w,1,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,new B.cv("off"+r,q),A.b5,A.j,0,A.p),A.i8,B.tc(),A.b7,A.b7,B.a_j())),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e_d(this,d),w,w,w,w,w,w,!1,A.ae),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,A.bX,w),1)}}
C.axW.prototype={
bSB(d){return C.fyz(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
B.K(d)
w=A.c.j(0.58)
v=f.e
u=B.S(v).k("a3<1>")
u=B.oG(new B.a3(v,new C.d9l(),u),3,u.k("E.E"))
t=B.z(u,B.a2(u).k("E.E"))
v=f.c
s=v.x
r=new B.N(Date.now(),0,!1)
q=v.f
p=C.a5f(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.fOo(r)
m=v.gB7()
l=B.a([D.es.j(0.24),A.M.j(0.72)],x.O)
k=B.H(D.es.j(0.38),A.r,1)
j=x.V
i=B.a([new B.a9(0,A.G,D.es.j(0.18),A.J,16)],j)
l=B.aH(!1,e,!0,B.p(A.C,B.U(A.hG,D.es,e,e,e,19),A.i,e,e,new B.o(e,e,k,e,i,new B.a7(A.ax,A.aE,A.w,l,e,e),A.a6),e,38,e,e,e,e,e,38),A.cD,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=B.m(14)
k=B.m(14)
j=B.a([new B.a9(0,A.G,A.b0.j(0.45),A.cC,16)],j)
h=B.m(12)
g=x.p
j=B.bIB(!1,l,"GROWTH INCOME",B.aH(!1,i,!0,new B.a8(44,44,new B.am(A.W,e,A.a9,A.i,B.a([B.p(A.C,B.p(A.C,D.btx,A.i,e,e,new B.o(A.i6.j(0.78),e,e,h,e,e,A.n),e,36,e,e,e,e,e,36),A.i,e,e,new B.o(e,e,e,k,j,D.bER,A.n),e,42,e,e,e,e,e,42),B.an(e,B.p(A.C,D.bzL,A.i,e,e,new B.o(A.cX,e,B.H(D.a9H,A.r,2),e,e,e,A.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.fQW(A.fV,new C.d9m(),k)
k=B.A(B.a([B.C(C.fQV(new C.d9n(f,A.tO,n),new B.N(Date.now(),0,!1),h,k),1),A.om,B.C(new B.tF(new C.d9o(f,A.tO),e,new B.h3(B.a([$.xA(),$.a0o()],x.U)),e),1)],g),A.m,e,A.e,A.j,0,e,e)
h=f.bVy(A.tO,D.es)
v=B.C(f.ckU("Total Profit","$"+B.dx(v.e),A.tO),1)
u=u?e:s.b
return B.eb(B.ce(B.u(B.a([j,A.U,k,A.ac,new C.axV(f.d,m,q,p,n,o,D.es,f.gbSA(),f.f,e),A.ac,h,A.U,B.A(B.a([v,A.om,B.C(f.b_q("Total Investment","$"+B.dx(u==null?0:u),A.tO,f.r),1)],g),A.m,e,A.e,A.j,0,e,e),A.U,f.bSx(d,t,D.es,w)],g),A.al,e,A.e,A.j,0,A.p),A.q,e,A.z,e,A.Vk,e,e,A.af),D.a9H,!0)},
asU(d,e,f,g,h){var w=null,v=B.m(h),u=B.H(A.c.j(0.09),A.r,1),t=B.a([new B.a9(0,A.G,A.x.j(0.4),A.dm,18)],x.V)
return B.p(w,B.bw(B.m(h-1),new B.am(A.W,w,A.a9,A.q,B.a([B.c_(0,B.bQ(w,new B.o(w,w,w,w,w,new B.bT(f,1.15,A.w,w,0,B.a([e.j(0.22),e.j(0)],x.O),w,w),A.n),A.ba),0,0,0),new B.B(g,d,w)],x.p),w),A.ap),A.i,w,w,new B.o(w,w,u,v,t,D.bDU,A.n),w,w,w,w,w,w,w,w)},
aTp(d,e,f,g){return this.asU(d,e,f,A.ag,g)},
b1a(d,e,f,g,h,i,j){var w=null,v=B.an(-14,B.U(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=B.m(30),s=B.H(f.j(0.4),A.r,1),r=x.p,q=this.aTp(new B.a8(w,80,new B.am(A.W,w,A.a9,A.q,B.a([v,new B.B(D.bey,B.u(B.a([B.p(w,B.A(B.a([B.U(e,f,w,w,w,15),A.ey,B.d(h.toUpperCase(),w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.R,0,w,w),A.i,w,w,new B.o(u,w,s,t,w,w,A.n),w,w,w,w,A.adw,w,w,w),A.bd,B.f0(A.a1,B.d(i,w,1,w,w,w,w,B.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,A.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),A.i,A.e8)],r),A.F,w,A.e,A.j,0,A.p),w)],r),w),w),f,A.kH,22)
if(g==null)return q
return B.aH(!1,B.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
bVy(d,e){var w,v,u=null,t=B.H(e.j(0.55),A.r,2),s=e.j(0.12),r=x.p,q=B.a([],r)
for(w=0;w<3;++w){v=new B.b2(3,3)
q.push(B.p(u,u,A.i,u,u,new B.o(e,u,u,new B.bx(v,v,v,v),u,u,A.n),u,D.crI[w],u,D.bhU,u,u,u,5))}v=x.V
return this.asU(B.A(B.a([B.p(u,B.A(q,A.dD,u,A.b5,A.j,0,u,u),A.i,u,u,new B.o(s,u,t,u,u,u,A.a6),u,42,u,u,u,u,u,42),D.edh,B.C(B.u(B.a([D.eO6,A.bw,B.A(B.a([B.p(u,u,A.i,u,u,new B.o(e,u,u,u,B.a([new B.a9(0,A.G,e,A.J,6)],v),u,A.a6),u,7,u,u,u,u,u,7),A.bp,new B.dp(1,A.cj,B.d("Live \xb7 real-time statistics",u,1,A.a0,u,u,u,B.l(u,u,A.c.j(0.6),u,u,u,u,u,u,u,u,11.5,u,u,A.a_,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],r),A.m,u,A.e,A.j,0,u,u)],r),A.F,u,A.e,A.j,0,A.p),1),A.ab,B.aH(!1,B.m(16),!0,B.p(u,D.bad,A.i,u,u,new B.o(u,u,u,B.m(16),B.a([new B.a9(0,A.G,A.aH.j(0.35),A.cC,14)],v),D.bEC,A.n),u,u,u,u,D.beB,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.z,u,u,u,u,u,u,u)],r),A.m,u,A.e,A.j,0,u,u),e,A.a1,A.UP,26)},
b_q(d,e,f,g){var w,v=null,u=A.a.q(d.toLowerCase(),"profit"),t=u?A.cX:A.b3,s=B.p(v,v,A.i,v,v,new B.o(t,v,v,D.aOA,v,v,A.n),v,v,v,A.ms,v,v,v,5),r=x.p
r=B.a([s,A.bb,B.C(B.u(B.a([B.A(B.a([B.U(u?A.rQ:A.wX,t,v,v,v,14),A.ey,new B.dp(1,A.cj,B.d(d,v,1,A.a0,v,v,v,B.l(v,v,A.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),A.m,v,A.e,A.j,0,v,v),A.ar,B.f0(A.a1,B.d(e,v,1,v,v,v,v,D.em8,v,v,v),A.i,A.e8)],r),A.F,v,A.b5,A.j,0,A.p),1)],r)
s=g==null
if(!s)r.push(new B.B(A.UC,B.U(A.el,A.c.j(0.35),v,v,v,v),v))
w=this.aTp(new B.a8(v,66,B.A(r,A.m,v,A.e,A.j,0,v,v),v),t,A.l7,20)
if(s)return w
return B.aH(!1,B.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
ckU(d,e,f){return this.b_q(d,e,f,null)},
bSx(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=B.p(m,m,A.i,m,m,new B.o(f,m,m,m,B.a([new B.a9(0,A.G,f,A.J,8)],x.V),m,A.a6),m,9,m,m,m,m,m,9),k=B.d("LIVE ACTIVITY",m,m,m,m,m,m,B.l(m,m,A.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,A.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=A.c.j(0.07),i=B.m(20),h=x.p
i=B.a([B.A(B.a([l,A.a35,k,A.bd,B.p(m,B.d(""+e.length,m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.i,m,m,new B.o(j,m,m,i,m,m,A.n),m,m,m,m,A.Vx,m,m,m)],h),A.m,m,A.e,A.j,0,m,m),A.P],h)
if(e.length===0)i.push(new B.B(A.UF,B.u(B.a([B.U(A.hc,g,m,m,m,30),A.ar,B.d("Nothing yet",m,m,m,m,m,m,B.l(m,m,A.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,A.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),A.bw,B.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,B.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,A.a_,m,m,!0,m,m,m,m,m,m,m,m),A.L,m,m)],h),A.m,m,A.e,A.j,0,A.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=B.a([],h)
if(w>0)k.push(new B.lT(1,m,m,m,m,A.c.j(0.07),m))
j=e[w]
v=j.d
u=v===A.eA||v===A.jq
t=u?A.kk:D.es
g=A.c.j(0.5)
v=new B.b2(12,12)
s=B.a([t.j(0.28),t.j(0.08)],l)
r=new B.ay(t.j(0.35),1,A.r,-1)
v=B.p(A.C,B.U(u?A.rQ:A.uw,t,m,m,m,18),A.i,m,m,new B.o(m,m,new B.c2(r,r,r,r),new B.bx(v,v,v,v),m,new B.a7(A.ax,A.aE,A.w,s,m,m),A.n),m,38,m,m,m,m,m,38)
s=C.hDN(j)
q=C.fSA(j.y)
s=B.u(B.a([new B.w(s,m,A.mR,m,m,m,m,A.a0,m,1,m,m),A.bw,new B.w(q,m,new B.F(!0,g,m,m,m,m,11,A.a_,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),A.F,m,A.e,A.j,0,A.p)
q=t.j(0.14)
p=new B.b2(20,20)
o=u?"-":"+"
n=B.dx(j.c)
q=B.p(m,new B.w(o+"$"+n,m,new B.F(!0,t,m,m,m,m,13,A.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),A.i,m,m,new B.o(q,m,m,new B.bx(p,p,p,p),m,m,A.n),m,m,m,m,A.nk,m,m,m)
j=C.fZo(j)
k.push(new B.B(G.UL,new B.cF(A.b_,A.e,A.j,A.m,m,A.p,m,0,B.a([v,A.bb,new B.bI(1,A.bt,s,m),B.u(B.a([q,A.dh,new B.w(j,m,new B.F(!0,g,m,m,m,m,10,A.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),A.dD,m,A.e,A.j,0,A.p)],h),m),m))
A.d.v(i,k)}return this.asU(B.u(i,A.m,m,A.e,A.j,0,A.p),f,A.b4,D.beH,26)}}
C.axV.prototype={
S(){return new C.bdd(null,null)},
cDY(d){return this.z.$1(d)},
cF7(){return this.Q.$0()}}
C.bdd.prototype={
Z(){var w,v=this,u=null
v.a0()
w=B.bh(u,A.oS,u,1,u,v)
w.cF(0)
v.d!==$&&B.aO()
v.d=w
w=B.bh(u,D.bcn,u,1,u,v)
w.cF(0)
v.e!==$&&B.aO()
v.e=w
w=B.bh(u,A.u4,u,1,u,v)
v.f!==$&&B.aO()
v.f=w
v.b0i()},
gb2T(){var w=new B.N(Date.now(),0,!1)
if(B.mP(w)===6||B.mP(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
b0i(){var w=this,v=w.a,u=v.e||v.f||w.gb2T()
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
bo(d){this.bz(d)
this.b0i()},
p(){var w=this,v=w.d
v===$&&B.c()
v.p()
v=w.e
v===$&&B.c()
v.p()
v=w.f
v===$&&B.c()
v.p()
w.bnf()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gb2T()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=A.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?A.as:g.x
g=g.r?new C.d9e(i):h
v=B.m(32)
s=B.m(32)
r=f?D.cUo:D.cUm
q=B.H((f?D.nN:A.b9).j(0.28),A.r,1.4)
p=x.V
o=B.a([new B.a9(0,A.G,(f?A.as:A.b8).j(0.16),A.fI,28)],p)
n=x.p
m=B.a([],n)
if(f)A.d.v(m,B.a([B.an(h,i.a87(D.nN,130),h,h,h,-24,-30,h),B.an(-36,i.a87(A.as,140),h,h,-28,h,h,h)],n))
else A.d.v(m,B.a([B.an(h,i.a87(A.b8,120),h,h,h,-30,-36,h),B.an(-40,i.a87(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=B.m(32)
k=i.f
k===$&&B.c()
m.push(B.c_(0,B.ec(B.bw(l,new B.es(B.c4(k,new C.d9f(i),h),h),A.ap),!0,h),0,0,0))}if(f){l=B.m(32)
k=i.f
k===$&&B.c()
m.push(B.c_(0,B.ec(B.bw(l,new B.es(B.c4(k,new C.d9g(i),h),h),A.ap),!0,h),0,0,0))}l=B.m(999)
k=A.c.j(0.06)
j=B.H(A.c.j(0.16),A.r,1)
m.push(B.an(h,new B.d3(D.aQp,B.p(h,B.A(B.a([B.p(h,h,A.i,h,h,new B.o(t,h,h,h,B.a([new B.a9(0,A.G,t.j(0.5),A.J,8)],p),h,A.a6),h,8,h,h,h,h,h,8),A.ab,new B.dp(1,A.cj,B.d(u,h,1,A.a0,h,h,h,D.erg,h,h,h),h)],n),A.m,h,A.e,A.R,0,h,h),A.i,h,h,new B.o(k,h,j,l,h,h,A.n),h,h,h,h,A.fX,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.fQW(A.fV,new C.d9h(),l)
m.push(C.fQV(new C.d9i(i,f,t,e,w),new B.N(Date.now(),0,!1),j,l))
return B.aH(!1,v,!0,B.de(h,new B.am(A.W,h,A.a9,A.i,m,h),h,h,A.b7,new B.o(h,h,q,s,o,new B.a7(A.ax,A.aE,A.w,r,h,h),A.n),A.zi,h,392,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
a87(d,e){var w=null
return B.ec(B.p(w,w,A.i,w,w,new B.o(w,w,w,w,w,new B.bT(A.C,0.5,A.w,w,0,B.a([d.j(0.22),d.j(0)],x.O),w,w),A.a6),w,e,w,w,w,w,w,e),!0,w)}}
C.b72.prototype={
aTs(d,e,f,g){var w=new B.b_($.a1().r,A.au,null,null,B.a([],x.g)),v=e.a,u=e.b,t=u-f
w.N(new B.bj(v,t))
w.N(new B.dj(v,u,v+f,u))
w.N(new B.dj(v,u,v,u+f))
w.N(new B.dj(v,u,v-f,u))
w.N(new B.dj(v,u,v,t))
w.N(new B.bX())
d.b4(w,g)},
a6(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=a8/2,b0=b3.b,b1=b0/2
for(w=a7.b,v=w*6.283185307179586,u=0;u<16;++u){t=A.k.J(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=A.k.J(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+A.o.J(u,3))+u)+1)/2
$.a1()
q=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
q.r=A.c.j(0.1+r*0.5).gt(0)
a7.aTs(b2,new B.v(t*a8,s*b0),2+r*2.2,q)}for(a8=b2.a,b0=w*2,p=a7.e,o=0;o<3;++o){n=A.k.J(b0+o/3,1)
$.a1()
m=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
m.b=A.aj
m.c=1.6
m.r=p.j((1-n)*0.38).gt(0)
l=m.M()
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
d=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
d.r=b0.j(f).gt(0)
l=d.M()
a8.drawCircle(0,0,6.5,l)
l.delete()
h=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
h.b=A.aj
h.c=1.2
h.r=p.j(f).gt(0)
l=h.M()
a8.drawCircle(0,0,6.5,l)
l.delete()
if(e>0.6&&f>0.35){h=$.h3Q()
g=h.b
a0=g.c
g=g.a.c
h.a6(b2,new B.v(-a0/2,-g.gbd(g)/2))}a8.restore()
break
case 1:$.a1()
a0=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a0.r=p.j(f*0.95).gt(0)
a7.aTs(b2,new B.v(h,g),3+f*3,a0)
break
case 2:$.a1()
a0=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a0.r=A.c.j(f*0.8).gt(0)
l=a0.M()
a8.drawCircle(h,g,1.6+f*1.8,l)
l.delete()
break
default:a0=Math.cos(j)
a1=Math.sin(j)
a2=7+f*7
$.a1()
a3=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a3.c=1.8
a3.d=A.bZ
a3.r=b0.j(f*0.8).gt(0)
l=a3.M()
a8.drawLine.apply(a8,[h,g,h-a0*a2,g-a1*a2,l])
l.delete()}}for(a4=0;a4<3;++a4){a5=v+a4*6.283185307179586/3
for(a6=0;a6<8;++a6){r=a5-a6*0.09
w=Math.cos(r)
h=Math.sin(r)
o=1-a6/8
$.a1()
g=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
g.r=p.j(o*0.85).gt(0)
l=g.M()
a8.drawCircle(a9+w*144,b1+h*144,1.4+o*2.6,l)
l.delete()}w=Math.cos(a5)
h=Math.sin(a5)
$.a1()
g=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
g.r=b0.j(0.28).gt(0)
g.z=N.pe
l=g.M()
a8.drawCircle(a9+w*144,b1+h*144,7,l)
l.delete()}},
ao(d){return d.b!==this.b}}
C.b71.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.a1(),a4=B.T()
a4.r=this.d.j(0.075).gt(0)
for(w=a5.a,v=this.b,u=v*6.283185307179586,t=x.g,a3=a3.r,s=0;s<14;++s){r=u+s*6.283185307179586/14
q=B.a([],t)
p=new B.b_(a3,A.au,e,e,q)
o=r-0.14361566416410484
q.push(new B.bj(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new B.aw(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
o=r+0.14361566416410484
q.push(new B.aw(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
q.push(new B.aw(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new B.bX())
n=a4.M()
q=p.gbM().a.snapshot()
w.drawPath((p.e=new B.cG(q)).a,n)
n.delete()}a0=v*2
a2=A.k.J(a0,1)
J.bP(w.save())
w.translate(a2*(d+240)-120,0)
a5.ra(0,0.35)
a2=-a1
a3=B.T()
a3.saz(new B.a7(A.a1,A.a7,A.w,B.a([A.c.j(0),A.c.j(0.07),A.c.j(0)],x.O),e,e).aB(0,D.e83))
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
a3=B.bZ(D.e8g,A.a27)
u=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
u.r=D.asj[A.o.J(s,6)].j(k*0.9).gt(0)
n=u.M()
w.drawRRect(B.fL(a3),n)
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
f=D.asj[A.o.J(s+i,6)].j(k)
u=j[i]
t=u.a
u=u.b
$.a1()
q=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
q.c=2
q.d=A.bZ
q.r=f.gt(0)
n=q.M()
w.drawLine.apply(w,[t+a3*a1,u+v*a1,t+a3*g,u+v*g,n])
n.delete()
q=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
q.r=f.gt(0)
n=q.M()
w.drawCircle(t+a3*a2,u+v*a2,1.6,n)
n.delete()}a1=j[i]
$.a1()
a2=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a2.r=A.c.j(k).gt(0)
n=a2.M()
w.drawCircle(a1.a,a1.b,5*d,n)
n.delete()}},
ao(d){return d.b!==this.b}}
C.b70.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a6.a/2,a1=a6.b/2,a2=new B.v(a0,a1),a3=a0-4,a4=a3-22
$.a1()
w=B.T()
w.b=A.aj
w.c=14
v=e.d
w.r=(v?e.r:A.b9).j(0.22).gt(0)
a5.aw(a2,a3-7,w)
w=B.T()
w.b=A.aj
w.c=1.7
w.r=(v?e.f:A.c).j(0.28).gt(0)
a5.aw(a2,a3-1,w)
w=B.T()
w.b=A.aj
w.c=1.6
w.r=A.c.j(0.16).gt(0)
a5.aw(a2,a4+8,w)
u=B.T()
u.c=1.5
u.d=A.bZ
u.r=(v?e.f:A.c).j(0.22).gt(0)
for(w=a3-3,t=a3+2,s=a5.a,r=0;r<12;++r){q=r/12*3.141592653589793*2-1.5707963267948966
p=Math.cos(q)
o=Math.sin(q)
n=Math.cos(q)
m=Math.sin(q)
l=u.M()
s.drawLine.apply(s,[a0+p*w,a1+o*w,a0+n*t,a1+m*t,l])
l.delete()}J.bP(s.save())
w=$.a1().r
t=x.g
p=new B.b_(w,A.au,d,d,B.a([],t))
p.N(new B.kt(B.c1(a2,a4)))
a5.tg(0,p)
p=B.c1(a2,a4)
o=B.T()
o.saz(D.dQj.aB(0,B.c1(a2,a4)))
a5.bp(p,o)
k=A.k.D(e.b,0,1)
if(k>0.004){a1+=a4
j=a1-a4*2*k
i=v?5.2:1.8
t=B.a([],t)
h=new B.b_(w,A.au,d,d,t)
g=a0-a4
a1+=4
h.N(new B.bj(g,a1))
for(w=a0+a4,p=e.c*3.141592653589793,o=p*2,p*=2.2,n=i*0.42;g<=w;g+=3){m=(g-a0)/a4*3.141592653589793
m=new B.aw(g,j+Math.sin(m*2+o)*i+Math.sin(m*3.1-p)*n)
t.push(m)
f=h.f
if(f!=null)m.bI(f)
m=h.e
if(m!=null)m.a.delete()
h.e=null}h.N(new B.aw(w,a1))
h.N(new B.bX())
$.a1()
a0=B.T()
a1=x.O
w=e.e
a1=v?B.a([e.f.j(0.55),w.j(0.78),e.r.j(0.92)],a1):B.a([w.j(0.22),D.es.j(0.34),A.cU.j(0.62)],a1)
a0.saz(new B.a7(A.b4,A.bc,A.w,a1,d,d).aB(0,B.c1(a2,a4)))
a5.b4(h,a0)
a0=B.T()
a0.b=A.aj
a0.c=2
a0.r=A.c.j(v?0.28:0.14).gt(0)
a5.b4(h,a0)}s.restore()},
ao(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.axX.prototype={
S(){var w=$.as()
return new C.axY(new B.ao(A.aq,w),new B.ao(A.aq,w))},
b9I(d,e){return this.w.$2$cloudRequest(d,e)}}
C.axY.prototype={
p(){var w=this.d,v=$.as()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
ly(d){var w=null,v=this.c
if(v==null)return
v.E(x.q).f.P(B.aZ(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
cmA(d){this.a.b9I(d,!0)
this.ly("Deposit submitted. Admin will review your payment proof.")
this.n(new C.d9F())},
clo(){var w,v,u=this,t=B.d_(u.d.a.a)
if(t==null||t<=0){u.ly("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
B.hl(w,new C.amD(v.d,t,u.gcmz(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
csF(){var w,v,u,t,s=this,r=s.d,q=B.d_(r.a.a)
if(q==null||q<=0){s.ly("Enter an amount to withdraw.")
return}if(q<10){s.ly("Minimum withdrawal is $"+B.dx(10)+".")
return}w=s.a.d.d
if(q>w){s.ly("Insufficient balance. You have $"+B.dx(w)+".")
return}w=s.e
v=C.h_M(w.a.a)
if(v.length===0){s.ly("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.b9I(new B.cP("wd_"+1000*Date.now(),s.a.d.a,q,A.eA,A.k4,"Withdrawal to $"+v+" \u2014 Fee: $"+B.dx(u)+" \u2014 You receive: $"+B.dx(q-u),null,null,A.dk,new B.N(Date.now(),0,!1)),!0)
s.ly("Withdrawal submitted \u2014 waiting for admin approval.")
r.bH(0,A.c0)
w.bH(0,A.c0)
s.n(new C.d9G())},
cpI(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,B.J)(w),++s){r=w[s]
if(r.x!==A.cc||!this.aQn(r)||B.fFK(r))continue
q=r.d
p=q===A.eA||q===A.jq||q===A.ef
q=r.c
if(p)t+=q
else u+=q}return new B.bk2(u,t)},
B(d){var w,v,u,t=this,s=null,r=t.cpI(),q=t.a.r,p=new B.a3(q,new C.d9H(),B.S(q).k("a3<1>")).gH(0)
q=t.a
w=q.c
q=q.x
v=B.a([D.es.j(0.24),A.M.j(0.72)],x.O)
u=B.H(D.es.j(0.38),A.r,1)
q=B.bIB(!1,w,"WALLET",B.hJ(B.aH(!1,s,!0,B.p(A.C,B.U(U.agv,D.es,s,s,s,18),A.i,s,s,new B.o(s,s,u,s,s,new B.a7(A.ax,A.aE,A.w,v,s,s),A.a6),s,40,s,s,s,s,s,40),A.cD,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),s,"Back up wallet",s,s))
v=t.buy(r.a,r.b,p)
u=x.p
w=B.A(B.a([t.amf(A.uw,"Deposit",0),t.amf(A.rQ,"Withdraw",1),t.amf(A.fP,"History",2)],u),A.m,s,A.t3,A.j,0,s,s)
return B.eb(B.br(!1,B.ce(B.u(B.a([q,A.bv,v,A.d1,w,A.d1,B.qh(t.f===2?t.bPK():t.bV2(),A.iz,B.tc(),A.b7,A.b7,B.a_j())],u),A.al,s,A.e,A.j,0,A.p),A.q,s,A.z,s,D.bgv,s,s,A.af),!0,!1,A.ag,!0,!0),A.yS,!0)},
buy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.a.i(i.a.e)
if(A.a.q(g,"@")){w=A.a.cP(g,"@")
v=A.a.al(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+A.a.aV(g,w)}else v=g
w=B.m(26)
u=B.an(h,i.auW(220,0.1),h,h,h,-60,-70,h)
t=B.an(-90,i.auW(200,0.07),h,h,h,30,h,h)
s=B.an(-60,i.auW(150,0.05),h,h,-40,h,h,h)
r=B.m(26)
r=B.c_(0,B.bQ(h,new B.o(h,h,B.H(A.c.j(0.18),A.r,1),r,h,h,A.n),A.ba),0,0,0)
q=B.m(6)
p=x.p
q=B.A(B.a([B.p(h,B.b1(h,h,h,new C.b6t(h),A.at),A.i,h,h,new B.o(h,h,h,q,h,D.bFQ,A.n),h,28,h,h,h,h,h,38),A.bd,D.eVF],p),A.m,h,A.e,A.j,0,h,h)
o=B.d("Available balance",h,h,h,h,h,h,B.l(h,h,A.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,A.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=B.f0(A.a1,C.anm(new C.d9r(i),D.ewi,i.a.d.a),A.i,A.e8)
m=B.a([B.C(i.aJr(A.ul,"In",d),1),B.C(i.aJr(A.wF,"Out",e),1)],p)
if(f>0){l=A.cI.j(0.22)
k=B.m(99)
j=B.H(A.ig.j(0.6),A.r,1)
m.push(B.p(h,B.d(""+f+" pending",h,h,h,h,h,h,D.esb,h,h,h),A.i,h,h,new B.o(l,h,j,k,h,h,A.n),h,h,h,h,A.nk,h,h,h))}return new B.fZ(1.62,B.bw(w,new B.am(A.W,h,A.a9,A.q,B.a([D.dPA,u,t,s,r,new B.B(A5.qa,B.u(B.a([q,A.bd,o,A.bw,n,A.bd,B.A(m,A.m,h,A.e,A.j,0,h,h),A.ar,B.d(v,h,1,A.a0,h,h,h,B.l(h,h,A.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,A.a_,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),A.F,h,A.e,A.j,0,A.p),h)],p),h),A.ap),h)},
auW(d,e){var w=null
return B.p(w,w,A.i,w,w,new B.o(w,w,B.H(A.c.j(e),A.r,22),w,w,w,A.a6),w,d,w,w,w,w,w,d)},
aJr(d,e,f){var w=null,v=A.c.j(0.16)
return B.A(B.a([B.p(w,B.U(d,A.c,w,w,w,13),A.i,w,w,new B.o(v,w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.bp,new B.dp(1,A.cj,B.f0(A.a1,B.d(e+"  $"+B.dx(f),w,w,w,w,w,w,A.qL,w,w,w),A.i,A.e8),w)],x.p),A.m,w,A.e,A.j,0,w,w)},
amf(d,e,f){var w=null,v=this.f===f,u=v?D.bH4:new B.a7(A.a1,A.a7,A.w,B.a([A.c.j(0.08),A.c.j(0.03)],x.O),w,w),t=B.H(v?A.c.j(0.6):D.es.j(0.25),A.r,1),s=v?B.a([new B.a9(0,A.G,A.as.j(0.45),A.J,18)],x.V):w
u=B.de(w,B.U(d,v?D.a7J:D.es,w,w,w,26),w,w,A.cm,new B.o(w,w,t,w,s,u,A.a6),A.Dg,w,62,w,w,w,w,62)
return B.aJ(A.c5,new B.a8(92,w,B.u(B.a([u,D.eed,B.d(e,w,w,w,w,w,w,B.l(w,w,v?A.c:A.aP,w,w,w,w,w,w,w,w,12.5,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.d9q(this,f),w,w,w,w,w,w,!1,A.ae)},
bV2(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=B.d_(a1.a.a)
if(a2==null)a2=0
w=a0?D.es:A.cH
v=a2>0
u=new C.d9C(e,w)
t=new C.d9B()
s=e.f
r=B.m(26)
q=x.O
p=B.a([w.j(0.1),A.rj,A.rj],q)
o=B.H(w.j(0.22),A.r,1)
n=x.V
m=B.a([new B.a9(0,A.G,A.x.j(0.35),A.eO,22)],n)
l=w.j(0.15)
l=B.p(d,B.U(a0?A.uw:A.rQ,w,d,d,d,18),A.i,d,d,new B.o(l,d,d,d,d,d,A.a6),d,34,d,d,d,d,d,34)
k=B.C(B.d(a0?"Add money":"Take money out",d,d,d,d,d,d,A.fS,d,d,d),1)
j=A.c.j(0.06)
i=B.m(99)
h=x.p
i=B.A(B.a([l,A.av,k,B.p(d,B.A(B.a([B.U(A.hG,w,d,d,d,14),B.d("Cash App",d,d,d,d,d,d,B.l(d,d,A.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,A.I,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),A.m,d,A.e,A.R,0,d,d),A.i,d,d,new B.o(j,d,d,i,d,d,A.n),d,d,d,d,A.kq,d,d,d)],h),A.m,d,A.e,A.j,0,d,d)
l=B.d("$",d,d,d,d,d,d,B.l(d,d,v?w:A.c1,d,d,d,d,d,d,d,d,26,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=B.a([new B.uG(B.ad("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=B.A(B.a([new B.B(A.jz,l,d),A.d4,B.aSj(new B.d3(D.aQH,B.aI(d,A.T,!1,d,!0,A.q,d,B.aL(),a1,w,d,d,d,d,2,B.bn(d,A.er,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.l(d,d,A.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),A.z,!0,d,!0,d,!1,d,A.ad,d,d,k,d,d,A.e_,d,d,d,1,d,d,!1,"\u2022",d,new C.d9A(e),d,d,d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,D.eyU,!0,A.L,d,A.am,d,d,d,d),d),d)],h),A.F,d,A.b5,A.j,0,d,d)
a1=v?120:60
a1=B.at(B.de(d,d,d,d,A.b7,new B.o(d,d,d,B.m(99),d,new B.a7(A.a1,A.a7,A.w,B.a([w.j(0),w,w.j(0)],q),d,d),A.n),A.X,d,3,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+B.dx(10)+" \xb7 admin sends it to your Cash App."
q=B.d(q,d,d,d,d,d,d,B.l(d,d,A.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,A.a_,d,1.35,!0,d,d,d,d,d,d,d,d),A.L,d,d)
l=B.a([],h)
j=a0?D.bKM:D.bZo
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=B.a([i,A.bv,k,A.ar,a1,A.P,q,A.aC,B.A(l,A.m,d,A.e,A.j,0,d,d)],h)
if(!a0){q=A.c.j(0.04)
l=B.U(A.hG,w,d,d,d,d)
k=B.l(d,d,A.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,A.O,d,d,!0,d,d,d,d,d,d,d,d)
l=B.a([A.aC,B.aI(d,A.T,!1,d,!0,A.q,d,B.aL(),e.e,d,d,d,d,d,2,B.bn(d,d,d,d,d,d,d,d,!0,new B.b0(4,B.m(16),new B.ay(A.c.j(0.08),1,A.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new B.b0(4,B.m(16),new B.ay(w,1,A.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),A.z,!0,d,!0,d,!1,d,A.ad,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a8,d,d,d,d,d,d,d,d,d,d,d,A.mQ,!0,A.a5,d,A.am,d,d,d,d)],h)
if(v){q=A.c.j(0.04)
k=B.m(16)
A.d.v(l,B.a([A.ac,B.p(d,B.u(B.a([t.$2("Amount","$"+B.dx(a2)),t.$3$color("Fee (15%)","\u2212 $"+B.dx(a2*0.15),A.fL),B.jl(A.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+B.dx(a2*0.85),!0,D.es)],h),A.m,d,A.e,A.j,0,A.p),A.i,d,d,new B.o(q,d,d,k,d,d,A.n),d,d,d,d,A.iU,d,d,d)],h))}A.d.v(a1,l)}a1.push(A.aT)
q=B.m(18)
l=a0?A.NY:P.ani
n=B.a([new B.a9(0,A.G,(a0?A.aW:A.e9).j(0.45),A.dm,18)],n)
k=a0?e.gcln():e.gcsE()
j=B.U(a0?A.WU:A.lo,d,d,d,d,20)
if(a0)i=v?"Deposit $"+B.dx(a2):"Deposit funds"
else i=v?"Withdraw $"+B.dx(a2):"Request withdrawal"
a1.push(new B.a8(d,54,B.bQ(B.l9(j,B.d(i,d,d,d,d,d,d,A.oq,d,d,d),k,B.fe(d,d,A.K,d,d,d,d,d,d,A.c,d,d,d,A.K,new B.b5(B.m(18),A.V),d,d,d,d,d)),new B.o(d,d,d,q,n,new B.a7(A.a1,A.a7,A.w,l,d,d),A.n),A.ba),d))
return B.p(d,B.u(a1,A.al,d,A.e,A.j,0,A.p),A.i,d,d,new B.o(d,d,o,r,m,new B.a7(A.b4,A.bc,A.w,p,A.Nw,d),A.n),d,d,new B.cv("form"+s,x.W),d,A.zv,d,d,d)},
bPK(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=B.S(a2).k("a3<1>"),a4=B.z(new B.a3(a2,new C.d9u(a0),a3),a3.k("E.E"))
A.d.aY(a4,new C.d9v())
w=A.a.i(a0.a.e.toLowerCase())
a2=B.Q(x.N,x.o)
a3=$.fbU
a3=a3==null?a1:a3.$0()
a3=J.aW(a3==null?A.hL:a3)
while(a3.C()){v=a3.gT(a3)
u=v.a
if(u.length!==0&&A.a.i(v.b.toLowerCase())===w)a2.m(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,B.J)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.m(0,u,s)}a3=a2.$ti.k("be<2>")
a2=B.z(new B.be(a2,a3),a3.k("E.E"))
r=C.hEj(a2,B.Ja(a0.a.e,new C.d9w(a0)))
a2=B.m(24)
a3=B.H(A.c.j(0.07),A.r,1)
v=B.m(99)
u=B.m(99)
q=x.p
u=B.a([B.A(B.a([D.bkJ,B.aH(!1,v,!0,B.p(a1,D.e8X,A.i,a1,a1,new B.o(a1,a1,B.H(D.es.j(0.4),A.r,1),u,a1,a1,A.n),a1,a1,a1,a1,A.mu,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.d9x(a0),a1,a1,a1,a1,a1,a1,a1)],q),A.m,a1,A.e,A.j,0,a1,a1),A.U],q)
if(a4.length===0)u.push(new B.B(D.bdj,B.u(B.a([B.U(A.DR,A.c.j(0.25),a1,a1,a1,40),A.U,D.eSB],q),A.m,a1,A.e,A.j,0,A.p),a1))
else{v=B.a([],q)
for(p=B.dg(a4,0,B.dK(a0.r,"count",x.S),B.S(a4).c),o=p.$ti,p=new B.bR(p,p.gH(0),o.k("bR<ai.E>")),o=o.k("ai.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===A.eA||k===A.jq||k===A.ef
if(l===A.cc)i=j?A.cJ:D.es
else i=l===A.dk?A.ig:A.fH
h=j?"-":"+"
l=A.c.j(0.06)
k=i.j(0.14)
g=new B.ay(i.j(0.4),1,A.r,-1)
k=B.p(a1,B.U(j?A.rQ:A.uw,i,a1,a1,a1,19),A.i,a1,a1,new B.o(k,a1,new B.c2(g,g,g,g),a1,a1,a1,A.a6),a1,42,a1,a1,a1,a1,a1,42)
f=a0.bJH(n)
e=C.fSA(n.y)
d=A.c.j(0.5)
f=B.a([new B.w(f,a1,A.jM,a1,a1,a1,a1,a1,a1,a1,a1,a1),A.bw,new B.w(e,a1,new B.F(!0,d,a1,a1,a1,a1,11,A.a_,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1)],q)
e=n.f
if(A.a.i(e==null?"":e).length!==0){e.toString
d=A.c.j(0.4)
f.push(new B.w(e,a1,new B.F(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,A.a0,a1,1,a1,a1))}if(m!=null&&n.x!==A.kc)f.push(new B.B(E.abZ,new B.DZ(A.bI,5,4,A.by,B.a([a0.aIo("Before",m.b),a0.aIo("After",m.a)],q),a1),a1))
m=B.u(f,A.F,a1,A.e,A.j,0,A.p)
f=n.c
f=f===0?"\u2014":h+"$"+B.dx(f)
e=i.j(0.14)
d=new B.b2(99,99)
n=C.fZo(n)
v.push(B.p(a1,new B.cF(A.b_,A.e,A.j,A.m,a1,A.p,a1,0,B.a([k,A.bb,new B.bI(1,A.bt,m,a1),A.ab,B.u(B.a([new B.w(f,a1,new B.F(!0,i,a1,a1,a1,a1,15,A.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),A.aw,B.p(a1,new B.w(n,a1,new B.F(!0,i,a1,a1,a1,a1,9.5,A.I,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),A.i,a1,a1,new B.o(e,a1,a1,new B.bx(d,d,d,d),a1,a1,A.n),a1,a1,a1,a1,A.zB,a1,a1,a1)],q),A.dD,a1,A.e,A.j,0,A.p)],q),a1),A.i,a1,a1,new B.o(a1,a1,new B.c2(A.V,A.V,new B.ay(l,1,A.r,-1),A.V),a1,a1,a1,A.n),a1,a1,a1,a1,A.wb,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(B.hg(D.by1,B.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,A.cb,a1,a1,a1),new C.d9y(a0),B.fn(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.es,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
A.d.v(u,v)}return B.p(a1,B.u(u,A.al,a1,A.e,A.j,0,A.p),A.i,a1,a1,new B.o(A.rj,a1,a3,a2,a1,a1,A.n),a1,a1,D.eYV,a1,D.bfp,a1,a1,a1)},
aIo(d,e){var w=null,v=A.c.j(0.05),u=B.m(7),t=B.H(A.c.j(0.1),A.r,1),s=B.dw(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=B.dx(e)
return B.p(w,B.Vy(B.dw(B.a([s,B.dw(w,w,w,w,w,w,w,w,w,B.l(w,w,A.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.ewr,w),A.i,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.nj,w,w,w)},
aQn(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(A.a.q(w,"clock-in session started"))return!1
v=d.d
if(v===A.ef)return d.c>0
if(B.rc(d))return!1
if(v===A.fc||v===A.eA)return!0
if(v===A.nG||v===A.jq)return!0
if(v===A.jN)return!0
if(v===A.fy)return A.a.q(w,"clock-in")||d.c>0
return!1},
bJH(d){var w,v=d.f
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
C.b6t.prototype={
a6(d,e){var w,v,u,t
$.a1()
w=B.T()
w.r=D.b_w.j(0.55).gt(0)
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
C.bqB.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null
for(w=a4.b,v=this.b,u=v*6.283185307179586,t=a4.a,s=0+t,r=x.O,q=a3.a,p=0;p<3;++p){o=w*(0.2+0.25*p)+Math.sin(u+p*2)*14-40
n=new B.af(0,o,s,o+80)
m=[A.b8,A.fU,A.bo][p]
$.a1()
o=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
o.saz(new B.a7(A.b4,A.bc,A.w,B.a([m.j(0),m.j(0.1),m.j(0)],r),a2,a2).aB(0,n))
l=o.M()
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
r=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
r.r=A.c.j(0.55*g).gt(0)
l=r.M()
q.drawCircle(j,h,0.7+(i-s)*1.5,l)
l.delete()
if(A.o.J(k,9)===0){f=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
f.r=A.nS.j(0.35*g).gt(0)
f.c=1
l=f.M()
q.drawLine.apply(q,[j-4,h,j+4,h,l])
l.delete()
l=f.M()
q.drawLine.apply(q,[j,h-4,j,h+4,l])
l.delete()}}for(u=-t*0.35,s=w*0.2,r=t*0.08,o=-w*0.02,v*=2,k=0;k<2;++k){f=A.k.J(v+k*0.5,1)
if(f>0.35)continue
p=f/0.35
e=t*(0.75-k*0.4)+u*p
d=w*(0.1+k*0.12)+s*p
$.a1()
a0=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a0.r=A.c.j(0.7*(1-p)).gt(0)
a0.c=1.6
a0.d=A.bZ
l=a0.M()
q.drawLine.apply(q,[e+r,d+o,e,d,l])
l.delete()}for(u=t*0.62,w*=0.36,k=0;k<4;++k){f=A.k.J(v+k*0.25,1)
t=A.nS.j(0.5*Math.sin(f*3.141592653589793))
a1=new B.mr(new B.eE("z",a2,a2,A.cT,a2,a2,a2,a2,a2,a2,new B.F(!0,t,a2,a2,a2,a2,12+f*14,A.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),A.a5,A.cp,new B.km(1),a2,a2,a2,a2,A.co,a2)
a1.fK()
a1.a6(a3,new B.v(u+Math.sin(f*6.283185307179586+k)*12+k*8,w-f*90))}},
ao(d){return d.b!==this.b}}
C.aHf.prototype={
aM(){this.aW()
this.aT()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdA())
w.aX$=null
w.a2()}}
C.bsu.prototype={}
C.aWc.prototype={}
C.Y6.prototype={
S(){return new C.aAl(new B.ao(A.aq,$.as()))},
cGi(d,e){return this.d.$2(d,e)}}
C.aAl.prototype={
p(){var w=this.d
w.R$=$.as()
w.O$=0
this.a2()},
aTw(){var w=this,v=A.a.i(w.d.a.a),u=B.ad("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.n(new C.dUy(w))
return}u=w.c
u.toString
B.a6(u,!1).K(null)
w.a.cGi(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=B.aG(a0,A.em,e).w
e=B.aG(a0,A.e0,e).w
w=B.at(B.p(f,f,A.i,f,f,new B.o(A.be,f,f,B.m(2),f,f,A.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=B.A(B.a([B.p(f,D.bxs,A.i,f,f,new B.o(f,f,f,f,B.a([new B.a9(0,A.G,A.f4.j(0.5),A.J,18)],v),D.aj4,A.a6),f,52,f,f,f,f,f,52),A.eG,B.C(B.u(B.a([D.eHl,A.bw,B.d(g.a.c,f,1,A.a0,f,f,f,A.op,f,f,f)],u),A.F,f,A.e,A.j,0,A.p),1),B.aF(f,f,f,f,D.bye,f,f,f,new C.dUB(a0),f,f,f,f,f,f)],u),A.m,f,A.e,A.j,0,f,f)
s=g.b_9(A.eD,"You",A.cH)
r=A.aM.j(0.15)
q=B.m(99)
q=B.A(B.a([s,new B.B(A.mt,B.p(f,D.eKZ,A.i,f,f,new B.o(r,f,B.H(A.aM.j(0.6),A.r,1),q,f,f,A.n),f,f,f,f,A.fD,f,f,f),f),g.b_9(A.ut,"Your friend",A.cd)],u),A.m,f,A.e,A.j,0,f,f)
r=A.c.j(0.06)
s=B.m(16)
p=A.c.j(0.12)
o=B.m(16)
n=g.f
if(n.length===0)n=f
o=B.aI(f,A.T,!0,f,!0,A.q,f,B.aL(),g.d,f,f,f,f,f,2,B.bn(f,f,f,f,f,f,f,f,!0,new B.b0(4,s,new B.ay(p,1,A.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new B.b0(4,o,D.aPx),f,f,f,f,f,f,f,f,N.BC,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.bAA,f,f,f,f,f,f,f,f,f,f,f,f),A.z,!0,f,!0,f,!1,f,A.ad,f,f,f,f,f,A.m8,f,f,f,1,f,f,!1,"\u2022",f,new C.dUC(g),f,new C.dUD(g),f,!1,f,f,!1,f,!0,f,A.a8,f,f,f,f,f,f,f,f,f,f,f,A.iI,!0,A.a5,f,A.am,f,f,f,f)
r=B.a([],u)
for(m=0;m<4;++m){l=D.bUq[m]
s=new B.b2(14,14)
p=g.e===l
n=p?D.aj3:f
p=p?f:A.c.j(0.06)
k=new B.ay(g.e===l?A.aA:A.bG,1,A.r,-1)
j=""+l
i=l===1?"game":"best of "+j
h=A.c.j(0.7)
s=B.a([new B.bI(1,A.bt,B.aJ(f,B.de(f,B.u(B.a([new B.w(j,f,A.dQ,f,f,f,f,f,f,f,f,f),new B.w(i,f,new B.F(!0,h,f,f,f,f,10,A.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f)],u),A.m,f,A.e,A.j,0,A.p),f,f,A.b7,new B.o(p,f,new B.c2(k,k,k,k),new B.bx(s,s,s,s),f,n,A.n),A.eC,f,f,f,A.eU,f,f,f),A.z,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.dUE(g,l),f,f,f,f,f,f,!1,A.ae),f)],u)
if(l!==7)s.push(A.ab)
A.d.v(r,s)}s=B.A(r,A.m,f,A.e,A.j,0,f,f)
r=B.A(B.a([B.U(A.kU,A.c.j(0.5),f,f,f,15),A.bp,B.C(B.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,B.l(f,f,A.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),A.m,f,A.e,A.j,0,f,f)
p=B.m(18)
v=B.a([new B.a9(0,A.G,A.bB.j(0.4),A.cv,18)],v)
n=g.e
j=n===1?"":"s"
return new B.B(new B.L(0,0,0,d.f.d+e.r.d),B.p(f,B.u(B.a([w,A.aT,t,A.bv,q,A.bv,D.eOB,A.ar,o,A.aT,D.eSp,A.P,s,A.aC,r,A.aT,new B.a8(f,54,B.bQ(B.hg(D.ahm,B.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,A.fS,f,f,f),g.gbZn(),f),new B.o(f,f,f,p,v,D.bG_,A.n),A.ba),f)],u),A.al,f,A.e,A.R,0,A.p),A.i,f,f,D.aRu,f,f,f,f,D.bgH,f,f,f),f)},
b_9(d,e,f){var w=null,v=f.j(0.1),u=B.m(16),t=B.H(f.j(0.45),A.r,1)
return B.C(B.p(w,B.u(B.a([B.U(d,f,w,w,w,24),A.aw,B.d(e,w,w,w,w,w,w,A.a49,w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.i,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.eU,w,w,w),1)}}
C.ow.prototype={}
C.blI.prototype={
a6(d,e){var w,v,u,t,s,r=null,q=e.a/2,p=new B.v(q,e.b/2),o=q-4
for(q=d.a,w=0;w<37;++w){$.a1()
v=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
if(w===0)u=A.br
else u=(w&1)===0?A.bR:A.M
v.r=u.gt(0)
u=B.c1(p,o)
t=v.M()
q.drawArc.apply(q,[B.cz(u),(w*2*3.141592653589793/37-1.5707963267948966)*57.29577951308232,9.72972972972973,!0,t])
t.delete()}$.a1()
q=B.T()
q.r=A.hR.gt(0)
q.b=A.aj
q.c=8
d.aw(p,o,q)
q=B.T()
q.r=A.aM.gt(0)
d.aw(p,o*0.22,q)
q=this.b
if(q!=null){s=B.jF(r,r,r,r,B.dw(r,r,r,r,r,r,r,r,r,A.aJK,B.t(q)),A.a5,A.cp,r,A.f3,A.co)
s.fK()
q=s.b
u=q.c
q=q.a.c
s.a6(d,p.aD(0,new B.v(u/2,q.gbd(q)/2)))}},
ao(d){return d.b!=this.b}}
C.D6.prototype={
a3(){return"NgmyProMoveResult."+this.b}}
C.anP.prototype={
gjw(){var w=this.d
w=w==null?null:w.a
return w!==!1},
bgY(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.fyh("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.bQw()
w=s.gjw()
v=s.d
s.c=w?"You ("+v.b+") vs NGMY \u2014 capture all opponent discs":v.b+" vs "+v.c+" \u2014 capture all discs"
break
case"tic_tac_go":s.b=1
s.at=B.bS(9,"",!1,x.N)
s.ax=!0
if(s.gjw())w="You are X vs NGMY (O) \u2014 get 3 in a row"
else{w=s.d
w=w.b+" (X) vs "+w.c+" (O)"}s.c=w
break
case"blackjack_vegas":s.b=1
w=x.t
s.ay=B.a([1+e.aE(10),1+e.aE(10)],w)
s.ch=B.a([1+e.aE(10),1+e.aE(10)],w)
s.CW=!1
s.c="Beat the dealer \u2014 don't bust over 21"
break
case"roulette_euro":s.b=1
s.cx=null
s.c="Pick a number \u2014 spin the wheel"
break
case"slots_jackpot":s.b=1
s.db=B.a([e.aE(6),e.aE(6),e.aE(6)],x.t)
s.c="Match 3 symbols for jackpot"
break
case"billiards_snooker":s.b=1
s.dx=e.ah()*3.141592653589793*2
s.c=s.gjw()?"Aim and shoot \u2014 beat NGMY on the snooker table":"Aim and shoot \u2014 pocket balls"
break
case"connect_four_pro":s.b=1
u=J.e0(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=B.bS(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gjw())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.aSd(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.axT.h(0,d)
s.c=w==null?"Play to earn":w}},
b3D(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gjw()
if(o)return
o=x.N
s.x=B.Y(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b3(w,new C.c6R(),o)
v=B.z(v,v.$ti.k("ai.E"))
s.at=v
if(v.length<9){v=B.z(v,o)
A.d.v(v,B.bS(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=A.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===A.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cqd(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.amL(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b3(t,new C.c6S(),x.L)
o=B.z(o,o.$ti.k("ai.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)A.d.G(v,B.bS(7,0,!1,o))}if(B.iw(e.h(0,q)))o=B.e5(e.h(0,q))
else{o=B.c3(B.t(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bwH(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.amL(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b3(t,new C.c6T(),x.L)
o=B.z(o,o.$ti.k("ai.E"))
s.y=o}if(B.iw(e.h(0,p)))o=B.e5(e.h(0,p))
else{o=B.c3(B.t(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bxT(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.amL(e,f)
break}},
cAc(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=B.Y(w.x,q,p)
switch(d){case"tic_tac_go":o.m(0,"ttt",B.bi(w.at,!0,q))
o.m(0,"turnEmail",w.awT())
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
p=B.S(q).k("I<1,al<G>>")
q=B.z(new B.I(q,new C.c6V(),p),p.k("ai.E"))
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
p=B.S(q).k("I<1,al<G>>")
q=B.z(new B.I(q,new C.c6W(),p),p.k("ai.E"))
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
default:q=B.dP(o,q,p)
q.m(0,v,w.e)
q.m(0,s,w.w)
return q}},
awT(){var w,v,u,t=this
if(t.gjw()){if(t.ax){w=t.d
w=w==null?null:w.d
if(w==null)w=""}else w="ngmy@system"
return w}w=t.x.h(0,"playerXEmail")
if(w==null){w=t.d
w=w==null?null:w.d}v=A.a.i(J.k(w==null?"":w).toLowerCase())
w=t.x.h(0,"playerOEmail")
if(w==null){w=t.d
w=w==null?null:w.e}u=A.a.i(J.k(w==null?"":w).toLowerCase())
return t.ax?v:u},
amL(d,e){var w,v=this,u=A.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=A.a.i(J.k(t==null?"":t).toLowerCase())
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
cqd(d,e){var w,v,u,t,s,r="playerXEmail"
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
bwH(d,e){var w,v,u,t,s
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
bxT(d,e){var w,v,u,t,s,r,q
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
Rz(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gjw())return s
w=A.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return A.a.i(J.k(s==null?u.awT():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=A.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
bQw(){var w,v,u=this,t=J.e0(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=B.ih(8,new C.c6O(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
aSd(d){var w=20+d.aE(80),v=w+10+d.aE(50),u=4+d.aE(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bH(0,A.c0)},
cJy(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gjw())w=1
else{v=r.d
v=v==null?null:v.d
w=r.Rz(q,v==null?"":v)?r.z:-1}if(!r.gjw()){v=r.d
v=v==null?null:v.d
v=!r.Rz(q,v==null?"":v)}else v=!1
if(v)return!1
u=r.gjw()?r.z:w
if(!r.gjw()&&u!==r.z)return!1
t=J.q(r.y[d],e)
v=r.Q
if(v==null){if(t===r.z)v=!r.gjw()||t===1
else v=!1
if(v){r.Q=d
r.as=e}return!1}s=r.as
s.toString
if(d===v&&e===s){r.as=r.Q=null
return!1}if(Math.abs(d-v)===1&&Math.abs(e-s)===1&&t===0&&A.o.J(d+e,2)===1){J.aE(r.y[d],e,r.z)
J.aE(r.y[v],s,0)
r.as=r.Q=null
r.z=r.z===1?2:1
if(r.a65(2)){r.a7B(1)
return!0}if(r.a65(1)){r.a7B(2)
return!0}if(r.gjw()&&r.z===2){r.bsQ(f)
if(r.a65(2)){r.a7B(1)
return!0}if(r.a65(1)){r.a7B(2)
return!0}}}return!1},
a7B(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
t.e=!0
w=t.f=d===1
if(t.gjw()){if(w){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+s}else v="NGMY wins \u2014 your discs are gone"
v=t.w=v}else{v=t.d
if(w){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+s}t.a=w?1:0
t.c=v
return!0},
bsQ(d){var w,v,u,t,s,r,q,p,o,n=this,m=B.a([],x.B)
for(w=x.t,v=0;v<8;++v)for(u=0;u<8;++u){if(J.q(n.y[v],u)!==2)continue
for(t=[B.a([1,-1],w),B.a([1,1],w)],s=0;s<2;++s){r=t[s]
q=v+r[0]
p=u+r[1]
if(q>=0&&q<8&&p>=0&&p<8&&J.q(n.y[q],p)===0&&A.o.J(q+p,2)===1)m.push(B.a([v,u,q,p],w))}}w=m.length
if(w===0)return
o=m[d.aE(w)]
J.aE(n.y[o[2]],o[3],2)
J.aE(n.y[o[0]],o[1],0)
n.z=1},
a65(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=J.aW(w[u]);t.C();)if(t.gT(t)===d)return!1
return!0},
cJz(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.pg
if(!s.gjw()){w=s.d
w=w!=null&&!s.Rz("tic_tac_go",w.d)}else w=!1
if(w)return D.pg
if(s.gjw())v="X"
else{w=A.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===A.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.aft(v))return s.aNm(v,!0)
if(!A.d.q(s.at,""))return s.aNn()
s.ax=!s.ax
if(!s.gjw()){s.x.m(0,"turnEmail",s.awT())
s.c=s.aRM()
return D.pg}if(s.gjw()){t=s.c8U(e)
if(t>=0){s.at[t]="O"
if(s.aft("O"))return s.aNm("O",!1)
if(!A.d.q(s.at,""))return s.aNn()
s.ax=!0}}s.c=s.gjw()?"Your turn \u2014 you are X":s.aRM()
return D.pg},
aRM(){var w=this.d
if(w==null)return"Take your turn"
return this.Rz("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aNm(d,e){var w,v,u=this
u.e=!0
u.f=e
u.r=!1
if(u.gjw()){if(e){w=u.d
w=w==null?null:w.b
w=(w==null?"You":w)+" wins with "+d+"!"}else w="NGMY wins with "+d+"!"
w=u.w=w}else{w=u.d
if(e){w=w==null?null:w.b
v=w==null?"You":w}else{w=w==null?null:w.c
v=w==null?"Opponent":w}w=u.w=v+" wins with "+d+"!"}u.c=w
u.a=e?1:0
return e?D.ph:D.FO},
aNn(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.OQ},
c8U(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.aft("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.aft("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.cFR[u]
if(v[w].length===0)return w}return-1},
aft(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.cMK[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a0x(d){return A.d.cO(d,0,new C.c6U())},
cue(d){this.ay.push(1+d.aE(10))
if(this.a0x(this.ay)>21)return!0
return!1},
cuf(d){var w,v,u,t=this
while(t.a0x(t.ch)<17)t.ch.push(1+d.aE(10))
t.CW=!0
w=t.a0x(t.ay)
v=t.a0x(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
czF(d,e){var w,v,u,t=this
if(t.e)return D.pg
if(!t.gjw()){w=t.d
w=w!=null&&!t.Rz("connect_four_pro",w.d)}else w=!1
if(w)return D.pg
if(t.gjw())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.pg
if(!t.acF(d,w))return D.pg
if(t.a5W(t.fx))return t.aNk(t.fx,!0)
if(t.aJc())return t.aNl()
w=t.fx===1?2:1
t.fx=w
if(t.gjw()&&w===2){u=t.c8i(e)
if(u>=0){t.acF(u,2)
if(t.a5W(2))return t.aNk(2,!1)
if(t.aJc())return t.aNl()
t.fx=1}}t.c=t.gjw()?"Your turn \u2014 drop a red disc":t.bwG()
return D.pg},
bwG(){var w=this.d
if(w==null)return"Drop a disc"
return this.Rz("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
acF(d,e){var w
for(w=5;w>=0;--w)if(J.q(this.fr[w],d)===0){J.aE(this.fr[w],d,e)
return!0}return!1},
aJc(){for(var w=0;w<7;++w)if(J.q(this.fr[0],w)===0)return!1
return!0},
aNk(d,e){var w,v,u,t=this
t.e=!0
t.f=e
t.r=!1
w=d===1?"red discs":"gold discs"
if(t.gjw()){if(e){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+" wins with "+w+"!"}else v="NGMY wins with "+w+"!"
v=t.w=v}else{v=t.d
if(e){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+" wins with "+w+"!"}t.c=v
t.a=e?1:0
return e?D.ph:D.FO},
aNl(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.OQ},
c8i(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.acF(w,2)
v=r.a5W(2)
r.b1m(w)
if(v)return w}for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.acF(w,1)
u=r.a5W(1)
r.b1m(w)
if(u)return w}t=B.a([],x.t)
for(w=0;w<7;++w)if(J.q(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aE(s)]},
b1m(d){var w
for(w=0;w<6;++w)if(J.q(this.fr[w],d)!==0){J.aE(this.fr[w],d,0)
return}},
a5W(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.q(this.fr[w],v)!==d)continue
if(this.bwI(w,v,d))return!0}return!1},
bwI(d,e,f){var w,v,u,t=new C.c6N(this,d,e,f)
for(w=x.t,w=[B.a([0,1],w),B.a([1,0],w),B.a([1,1],w),B.a([1,-1],w)],v=0;v<4;++v){u=w[v]
if(t.$2(u[0],u[1])+t.$2(-u[0],-u[1])-1>=4)return!0}return!1},
b4w(d){var w=this
if(A.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.aSd(d)}return w.a>=w.b}}
C.aoI.prototype={
S(){return new C.aB3(null,null)},
cFb(d){return this.e.$1(d)}}
C.aB3.prototype={
Z(){var w,v=this
v.a0()
w=B.bh(null,D.bcq,null,1,null,v)
w.f2(0,!0)
v.d=w
v.a.d.aJ(0,v.gaTT())
v.at6()},
bo(d){var w
this.bz(d)
w=this.a
if(d.c!==w.c){w.d.bH(0,A.c0)
this.at6()}},
at6(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.aeC(t,u)
C.aeC(t,u)
w.a.cFb(s)
w.a.toString
w.n(new C.eo6())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
p(){var w,v=this
v.a.d.a1(0,v.gaTT())
w=v.d
w===$&&B.c()
w.p()
v.boN()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.aeC(j,i),g=C.aeC(j,i),f=j.length,e=i.length,d=B.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&B.c()
u=new B.b2(1,1)
d.push(new B.vo(new B.cZ(v,!1,B.p(l,l,A.i,l,l,new B.o(A.aM,l,l,new B.bx(u,u,u,u),B.a([new B.a9(0,A.G,A.aM.j(0.6),A.J,6)],k),l,A.n),l,22,l,A.JK,l,l,l,3),l),A.Pn,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new B.eE(v,l,l,A.cT,l,l,l,l,l,l,D.etI))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=A.c.j(0.4)
q=A.cn}else if(s===t){r=A.bq
q=A.O}else{r=A.aH
q=A.I}d.push(new B.eE(t,l,l,A.cT,l,l,l,l,l,l,new B.F(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&B.c()
d.push(new B.vo(new B.cZ(k,!1,B.p(l,l,A.i,A.aM,l,l,l,22,l,l,l,l,l,3),l),A.Pn,l,l))}p=f===0?0:A.k.U(h/f*100)
k=A.x.j(0.35)
v=B.m(12)
u=B.H(A.be,A.r,1)
o=x.p
v=B.p(l,B.u(B.a([B.A(B.a([m.aTS("Correct",""+h,A.br),A.ab,m.aTS("Wrong / missed",""+(f-g),A.aH),A.bd,B.d(""+p+"% accuracy",l,l,l,l,l,l,G.a3x,l,l,l)],o),A.m,l,A.e,A.j,0,l,l),A.ar,D.eM2],o),A.F,l,A.e,A.j,0,A.p),A.i,l,l,new B.o(k,l,u,v,l,l,A.n),l,l,l,l,A.bj,l,l,l)
u=B.C(B.ce(new B.a7g(l,B.dw(d,l,l,l,l,l,l,l,l,l,l),l,l,l),A.q,l,A.z,l,l,l,l,A.af),1)
k=m.a.d
g=B.l(l,l,A.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=A.x.j(0.35)
return B.u(B.a([v,A.ac,u,A.U,B.aI(l,A.T,!0,l,!0,A.q,l,B.aL(),k,l,l,l,l,l,2,B.bn(l,new B.b0(4,B.m(12),A.V),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new B.b0(4,B.m(12),D.aPq),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ad,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,D.aJJ,!0,A.a5,l,A.am,l,l,l,l)],o),A.al,l,A.e,A.j,0,A.p)},
aTS(d,e,f){var w=null,v=f.j(0.15),u=B.m(8)
return B.p(w,B.d(d+": "+e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.i,w,w,new B.o(v,w,w,u,w,w,A.n),w,w,w,w,A.fD,w,w,w)}}
C.aIL.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
var z=a.updateTypes(["av<~>()","~()","G(hU,hU)","~([wp?])","R(o_)","o_()","G(qG,qG)","R(qG)","G(qH,qH)","Nq(Z)","R(hU)","T9(Z)","XO(Z)","WV(Z)","abP(Z)","Ly(Z)","aaE(Z,hs<al<iU>>)","aaD(Z,G)","cE(ab3)","qG(a0<@,@>)","r(o_)","Lq(Z)","a0<n,@>(qG)","qH(a0<@,@>)","a0<n,@>(k7)","a0<n,@>(qH)","R(qH)","a0<n,@>(lf)","lf(@)","a0<n,@>(i7)","i7(@)","hU(@)","av<~>(k7)","a0<n,@>(hU)","~(G,G)","hU(hU)","~(D6,anP)","av<R>(al<hU>)","XN(Z)","~(hU)","Yy(Z)","Ta(Z)","n(hU)","R(lf)","w4(bq<G,lf>)","a9c(Z,G)","G(i7,i7)","a94(lf)","r(qM)","bI(GT)","Xj(Z)","~(cP{bumpWalletRevision:R,cloudRequest:R})","~(n,P,P,P)","P(N)","~(cP)","Y6(Z)","~(D6)","n(n)","Yz(Z)"])
C.ckE.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.ckF(r,w,s.b,v,s.d)
t=s.e
r.b=B.dD(t,u)
v.r=new C.ckB(r)
v.e=new C.ckC(r,w)
v.f=new C.ckD(r,w,t,u)},
$S:0}
C.ckF.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.l2(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=B.a5(r)
u=B.c7(r)
s=v
q=u
p=B.Ey(s,q)
if(p==null)p=new B.iS(s,q==null?B.a0C(s):q)
t=p
o.d.hc(t.a,t.b)
return}o.d.G(0,w)}else{o.e.a(null)
o.d.G(0,null)}},
$S:38}
C.ckB.prototype={
$0(){this.a.b.a9(0)
return $.F7()},
$S:1610}
C.ckC.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.aqb.$0()
this.a.b.a9(0)},
$S:0}
C.ckD.prototype={
$0(){var w,v=this,u=v.b,t=B.dA(0,0,u.gb6w(),0,0,0)
u.ki(0)
u=v.c
w=v.a
w.b=B.cV(new B.b6(u.a-t.a),new C.ckA(w,u,v.d))},
$S:0}
C.ckA.prototype={
$0(){var w=this.c
this.a.b=B.dD(this.b,w)
w.$1(null)},
$S:0}
C.eJF.prototype={
$1(d){var w=this.a
w.n(new C.eJE(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.eJE.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.c()
w.e=new B.hs(D.abd,this.b,null,null,v.$ti.k("hs<1>"))},
$S:0}
C.eJH.prototype={
$2(d,e){var w=this.a
w.n(new C.eJC(w,d,e))},
$S:54}
C.eJC.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&B.c()
w.e=new B.hs(D.abd,null,this.b,this.c,v.$ti.k("hs<1>"))},
$S:0}
C.eJG.prototype={
$0(){var w=this.a
w.n(new C.eJD(w))},
$S:0}
C.eJD.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&B.c()
v.e=new B.hs(A.zc,w.b,w.c,w.d,w.$ti)},
$S:0}
C.ffO.prototype={
$1(d){return d.a===this.a&&A.a.i(d.b.toLowerCase())===this.b&&d.x===A.cc},
$S:16}
C.ffI.prototype={
$1(d){return d},
$S:13}
C.f10.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return B.p(A.C,new B.B(new B.L(u,0,u,0),B.d("NGMY",w,1,A.eP,w,!1,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,A.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),A.i,w,w,A.a6I,w,v,w,w,w,w,w,v)},
$S:143}
C.f0Y.prototype={
$3(d,e,f){return this.a.$0()},
$S:129}
C.f0Z.prototype={
$2(d,e){var w,v=this,u=e.b
if(A.a.i(u==null?"":u).length!==0){u.toString
w=A.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return B.k5(w,A.C,v.d,new C.f0X(v.e),A.fO,v.c,!0,v.b,null,null,v.a)},
$S:1611}
C.f0X.prototype={
$3(d,e,f){return this.a.$0()},
$S:129}
C.f1_.prototype={
$3(d,e,f){return this.a.$0()},
$S:129}
C.d1D.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.d1O.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.d25.prototype={
$1(d){return B.Y(d,x.N,x.z)},
$S:7}
C.d26.prototype={
$1(d){return this.a.HZ()},
$S:14}
C.d1W.prototype={
$0(){var w=J.b3(this.b,new C.d1V(),x.P)
w=B.z(w,w.$ti.k("ai.E"))
this.a.f=w},
$S:0}
C.d1V.prototype={
$1(d){return B.Y(d,x.N,x.z)},
$S:7}
C.d1X.prototype={
$0(){var w=this.a,v=w.a.d.aZ,u=B.S(v).k("I<1,a0<n,@>>")
v=B.z(new B.I(v,new C.d1U(),u),u.k("ai.E"))
w.f=v},
$S:0}
C.d1U.prototype={
$1(d){return B.Y(d,x.N,x.z)},
$S:7}
C.d1Z.prototype={
$0(){var w=this.a,v=w.a.d.aZ,u=B.S(v).k("I<1,a0<n,@>>")
v=B.z(new B.I(v,new C.d1Y(),u),u.k("ai.E"))
w.f=v},
$S:0}
C.d1Y.prototype={
$1(d){return B.Y(d,x.N,x.z)},
$S:7}
C.d1R.prototype={
$0(){var w=0,v=B.j(x.c),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.c2u(t.a.c)?2:3
break
case 2:w=4
return B.b(C.amx(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.n(new C.d1P(t))
case 3:if(t.c!=null)t.n(new C.d1Q(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:50}
C.d1P.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d1Q.prototype={
$0(){return this.a.d++},
$S:0}
C.d1S.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d1T.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d1J.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.hL6(t.a.d.aZ,J.k(J.q(u.b,"id")),"rejected")
t.a.bl()
w=2
return B.b(C.aer(t.a.d.aZ),$async$$0)
case 2:w=3
return B.b(t.HZ(),$async$$0)
case 3:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.d1K.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a4(s)
C.hAo(t.a.d.aZ,J.k(r.h(s,"id")),t.a.c.c)
t.a.bl()
w=2
return B.b(C.aer(t.a.d.aZ),$async$$0)
case 2:w=3
return B.b(t.HZ(),$async$$0)
case 3:t.GV(A.d.dP(t.y,new C.d1H(s),new C.d1I(t)),J.k(r.h(s,"id")))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.d1H.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d1I.prototype={
$0(){return A.d.gI(this.a.y)},
$S:z+5}
C.d1L.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d1M.prototype={
$0(){return A.d.gI(this.a.y)},
$S:z+5}
C.d1N.prototype={
$0(){return this.a.GV(this.b,J.k(J.q(this.c,"id")))},
$S:0}
C.d1G.prototype={
$0(){return this.a.bTw(this.b)},
$S:0}
C.d1F.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.hLx(u,w.b,new C.d1E(v,w))},
$S:0}
C.d1E.prototype={
$2(d,e){return this.a.adZ(this.b,d,e)},
$S:689}
C.d24.prototype={
$2(d,e){if(d)return
this.a.aN0()},
$S:121}
C.d22.prototype={
$2(d,e){var w=this.a
return new B.kT(C.aWb(w.a.c.a),new C.d21(w,this.b,this.c),null,null,x.gH)},
$S:1613}
C.d21.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=B.m(12)
v=B.m(12)
u=B.d(s>5000?"5000":""+s,t,t,t,t,t,t,t,t,t,t)
return B.aD(!1,A.X,!0,w,B.aH(!1,v,!0,new B.B(A.kS,B.bBe(A.cI,B.U(A.fP,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.d20(this.a,d),t,t,t,t,t,t,t),A.i,this.b,0,t,t,t,t,t,A.aa)},
$S:1614}
C.d20.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fc8(s.c.a,s.e).eX(new C.d2_())
w=2
return B.b(C.byD(u.b,t.a.c.a),$async$$0)
case 2:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.d2_.prototype={
$1(d){},
$S:32}
C.d23.prototype={
$0(){return this.a.a.c.d},
$S:78}
C.dEN.prototype={
$0(){var w=this.a
return B.Ja(w.a.c.a,new C.dEM(w))},
$S:78}
C.dEM.prototype={
$0(){return this.a.a.c.d},
$S:78}
C.dEO.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&B.c()
u.bn=t.ad()
v.bl()
w.n(new C.dEL())},
$S:0}
C.dEL.prototype={
$0(){},
$S:0}
C.dEP.prototype={
$2(d,e){var w,v=this.a
if(!C.c2u(v.a.c)){if($.fyc.q(0,A.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.fyd(this.b,v.x,w)
return!1}C.amx(v.a.c.a)}if(B.Ja(v.a.c.a,new C.dEK(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aC0()
w=v.a
w.toString
w.he(new B.cP(A.o.u(1000*Date.now()),v.a.c.a,d,A.jq,A.eW,e,null,null,A.cc,new B.N(Date.now(),0,!1)))
v.a.bl()
return!0},
$S:1615}
C.dEK.prototype={
$0(){return this.a.a.c.d},
$S:78}
C.dEQ.prototype={
$3$bonus(d,e,f){var w,v=null,u=A.o.u(1000*Date.now()),t=this.a,s=t.a
s.he(new B.cP(u,s.c.a,d,A.fy,A.eW,e,v,v,A.cc,new B.N(Date.now(),0,!1)))
t.a.bl()
w=f>0?"+$"+A.k.ab(d,2)+" total (includes $3 bonus for +3!)":"+$"+A.k.ab(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.uW(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1616}
C.d1x.prototype={
$0(){return this.a.a.c.d},
$S:78}
C.d1A.prototype={
$0(){return B.ir(this.a,null)},
$S:0}
C.d1B.prototype={
$0(){return this.a.a.c.d},
$S:78}
C.d1C.prototype={
$1(d){var w=null,v=this.a,u=B.fe(w,w,v.e===d?A.br:B.W(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,w,w,w,w,w,w,w,w)
return B.C(new B.B(A.eV,B.hS(B.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.d1z(v,d),u),w),1)},
$S:210}
C.d1z.prototype={
$0(){var w=this.a
return w.n(new C.d1y(w,this.b))},
$S:0}
C.d1y.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d3p.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.d3s.prototype={
$1(d){this.a.c9d()
return null},
$S:14}
C.d3t.prototype={
$1(d){return this.a.cot()},
$S:14}
C.d3u.prototype={
$1(d){this.a.a_B()
return null},
$S:14}
C.d3v.prototype={
$1(d){this.a.af3()
return null},
$S:14}
C.d3w.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c9)return
w=v.Q
w===$&&B.c()
if(w<=0){v.n(new C.d3q(v))
w=v.as
if(w!=null)w.a9(0)
v.DF()
return}v.n(new C.d3r(v))},
$S:14}
C.d3q.prototype={
$0(){return this.a.Q=0},
$S:0}
C.d3r.prototype={
$0(){var w=this.a,v=w.Q
v===$&&B.c()
w.Q=v-1
return v},
$S:0}
C.d2F.prototype={
$0(){return this.a.bx=this.b},
$S:0}
C.d2G.prototype={
$0(){return this.a.bx=this.b},
$S:0}
C.d38.prototype={
$1(d){return this.a.go.q(0,d)},
$S:64}
C.d39.prototype={
$0(){},
$S:0}
C.d2V.prototype={
$0(){var w=this.b
w.c9=!0
w.cS="Waiting for both players\u2026"
w.ce="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.d2W.prototype={
$0(){var w=this.a
w.c9=!0
w.cS="Both players connected"
w.ce="Starting together in a moment\u2026"},
$S:0}
C.d2X.prototype={
$0(){var w=this.b
w.c9=!0
w.cS="Match starting together\u2026"
w.ce="Both players start in "+A.o.D(this.c,1,99)+"s"},
$S:0}
C.d2Y.prototype={
$0(){this.b.c9=!1},
$S:0}
C.d2Z.prototype={
$0(){},
$S:0}
C.d27.prototype={
$0(){var w=this.a,v=w.x2,u=B.t(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.d2E.prototype={
$0(){var w=this.a
w.at=this.b
w.aZH()},
$S:0}
C.d3a.prototype={
$0(){},
$S:0}
C.d3j.prototype={
$0(){},
$S:0}
C.d37.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.n(new C.d36(w))},
$S:0}
C.d36.prototype={
$0(){var w=this.a
w.y=!0
w.z=new B.N(Date.now(),0,!1)},
$S:0}
C.d2C.prototype={
$0(){var w=this.a;++w.Y
w.y=!1
w.z=null},
$S:0}
C.d2D.prototype={
$0(){},
$S:0}
C.d3e.prototype={
$1(d){return d==null},
$S:250}
C.d3f.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
A.d.ct(v.ch,w.d)},
$S:0}
C.d3g.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.d28.prototype={
$1(d){return d==null},
$S:250}
C.d29.prototype={
$0(){return this.a.bn++},
$S:0}
C.d2a.prototype={
$0(){},
$S:0}
C.d2O.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.d2P.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.G(0,t)
w=this.c
u.G(0,w)
if(v.ghq()&&D.m5.q(0,v.a.e)){u=v.id
u.G(0,t)
u.G(0,w);++v.fx}++v.k2
v.fy=B.a([],x.t)},
$S:0}
C.d2Q.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.n(new C.d2N(w))},
$S:11}
C.d2N.prototype={
$0(){var w=this.a
w.fy=B.a([],x.t)
w.k1=!1},
$S:0}
C.d3_.prototype={
$0(){return this.a.y1++},
$S:0}
C.d30.prototype={
$0(){},
$S:0}
C.d31.prototype={
$0(){return this.a.y2++},
$S:0}
C.d32.prototype={
$0(){},
$S:0}
C.d33.prototype={
$0(){return this.a.aZ++},
$S:0}
C.d34.prototype={
$0(){},
$S:0}
C.d3d.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.d2R.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d2S.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.d2T.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d2U.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.d3h.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.d3i.prototype={
$0(){var w=this.a
w.ok.push(w.d.aE(4))
w.p2=0},
$S:0}
C.d2b.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d2c.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.d2d.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d2e.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.d3b.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.d3c.prototype={
$0(){var w,v=this.a;++v.x2
v.aJ_()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+B.t(Math.min(w+2,7))+" tiles"},
$S:0}
C.d2M.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.d35.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d2K.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d2L.prototype={
$2(d,e){return d+e.length},
$S:313}
C.d3k.prototype={
$0(){return B.ir(this.a,null)},
$S:0}
C.d3l.prototype={
$0(){return this.a.a.c.d},
$S:78}
C.d3m.prototype={
$0(){return this.a.a.c.d},
$S:78}
C.d3o.prototype={
$1(d){var w=this.a,v=w.MF(),u=v<=0?0:A.k.D(w.yZ()/v,0,1),t=w.a.x,s=t*1.46
return new C.Lq(w.f?s:s*u,s,t,null)},
$S:z+21}
C.d3n.prototype={
$1(d){return d.bR(0.85)},
$S:168}
C.d2J.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghq()&&D.m5.q(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return B.u(B.a([B.d(p,w,w,w,w,w,w,A.jM,A.L,w,w),A.ar,B.C(B.at(new B.a8(r*v+u,r*t+s,B.ig(!0,w,w,A.z,new B.hI(v,6,6,1,r),new C.d2I(q,r),q.fr.length,w,A.dJ,A.af,!1),w),w,w,w),1)],x.p),A.m,w,A.e,A.j,0,A.p)},
$S:171}
C.d2I.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.q(0,e),p=r.ghq()&&D.m5.q(0,r.a.e)&&q&&r.id.q(0,e),o=r.ghq()&&D.m5.q(0,r.a.e)&&q&&!p,n=A.d.q(r.fy,e)||q,m=p?D.aja:D.bE2,l=B.m(10),k=B.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.aja:D.aj4
v=o?B.H(A.dC,A.r,2):s
u=B.a([new B.a9(0,A.G,B.W(51,A.x.l()>>>16&255,A.x.l()>>>8&255,A.x.l()&255),A.J,4)],x.V)
t=this.b*0.42
return B.aH(!1,l,!0,B.de(s,B.at(n?B.U(D.c6M[r.fr[e]],A.c,s,s,s,t):B.d("?",s,s,s,s,s,s,B.l(s,s,A.c,s,s,s,s,s,s,s,s,t,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,A.b7,new B.o(s,s,v,k,u,w,A.n),A.eC,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.d2H(r,e),s,s,s,s,s,s,s)},
$S:186}
C.d2H.prototype={
$0(){return this.a.c8A(this.b)},
$S:0}
C.d2r.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?B.W(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.W(89,A.br.l()>>>16&255,A.br.l()>>>8&255,A.br.l()&255),r=B.m(10),q=B.m(10),p=B.m(10),o=B.H(B.W(64,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),A.r,1)
return B.aD(!1,A.X,!0,r,B.aH(!1,q,!0,B.p(A.C,B.d(t?"":u,w,w,w,w,w,w,D.aIS,w,w,w),A.i,w,w,new B.o(w,w,o,p,w,w,A.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d2q(v,d),w,w,w,w,w,w,w),A.i,s,0,w,w,w,w,w,A.aa)},
$S:691}
C.d2q.prototype={
$0(){return this.a.cnN(this.b)},
$S:0}
C.d2s.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=B.W(46,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
return B.aD(!1,A.X,!0,B.m(10),B.aH(!1,B.m(10),!0,B.p(A.C,B.d(u,w,w,w,w,w,w,D.aIS,w,w,w),A.i,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d2p(v,d),w,w,w,w,w,w,w),A.i,t,0,w,w,w,w,w,A.aa)},
$S:691}
C.d2p.prototype={
$0(){return this.a.cnM(this.b)},
$S:0}
C.d2t.prototype={
$1(d){return this.a.n(new C.d2o())},
$S:27}
C.d2o.prototype={
$0(){},
$S:0}
C.d2u.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&B.c()
w=C.aeC(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.oj()
if(u.ghq()&&D.m5.q(0,u.a.e)){u.YY()
u.mr(!0)}else{v=A.d.cO(u.cy,0,new C.d2m())
t=u.dx
if(t>=v)u.rS("All 5 sentences perfect \u2014 full payout!")
else u.D6(t/v,t,v)}}else{if(u.ghq()&&D.m5.q(0,u.a.e))u.YY()
u.n(new C.d2n(u))}},
$S:0}
C.d2m.prototype={
$2(d,e){return d+e.length},
$S:313}
C.d2n.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bH(0,A.c0)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.d2v.prototype={
$1(d){var w=null,v=B.fe(w,w,B.W(38,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),w,w,w,w,w,w,A.c,w,w,A.c9,w,w,w,w,w,w,w)
return new B.B(A.cR,new B.a8(1/0,w,B.hS(B.d(d,w,w,w,w,w,w,U.aIL,w,w,w),new C.d2l(this.a,d),v),w),w)},
$S:137}
C.d2l.prototype={
$0(){return this.a.aZ3(this.b)},
$S:0}
C.d2w.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&B.c()
w=u*3+8
return B.u(B.a([B.d(s,v,v,v,v,v,v,A.nC,v,v,v),A.P,B.C(B.at(new B.a8(w,w,B.ig(!0,v,v,A.z,new B.hI(3,4,4,1,u),new C.d2k(t,u),9,v,A.dJ,A.af,!1),v),v,v,v),1)],x.p),A.m,v,A.e,A.j,0,A.p)},
$S:171}
C.d2k.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.aWU(e),p=r===0
if(p)w=A.K
else w=q?A.br:B.W(51,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
v=B.m(10)
s=p?t:new C.d2g(s,e)
u=B.m(10)
p=p?"":""+r
return B.aD(!1,A.X,!0,v,B.aH(!1,u,!0,B.at(B.d(p,t,t,t,t,t,t,B.l(t,t,A.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),A.i,w,0,t,t,t,t,t,A.aa)},
$S:74}
C.d2g.prototype={
$0(){return this.a.cnL(this.b)},
$S:0}
C.d2x.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.d2j(q,d)
p=B.m(16)
if(o)w=D.ZQ[d]
else{w=D.ZQ[d]
w=B.W(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=B.m(16)
u=o?B.W(A.k.U(127.5),A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255):B.W(20,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255)
u=B.H(u,A.r,o?2:1)
t=x.V
if(o){s=D.ZQ[d]
t=B.a([new B.a9(0,A.G,B.W(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),A.J,16)],t)}else t=B.a([],t)
return B.aH(!1,p,!0,B.de(r,r,r,r,A.b7,new B.o(w,r,u,v,t,r,A.n),T.zk,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1620}
C.d2j.prototype={
$0(){return this.a.cnO(this.b)},
$S:0}
C.d2y.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&B.c()
q=B.d(q,t,t,t,t,t,t,A.nC,t,t,t)
w=B.d("Move "+r.atL()+"/"+C.fE6(),t,t,t,t,t,t,A.BE,t,t,t)
v=r.x2
u=s*3+12
return B.u(B.a([q,w,B.d("Round "+v+"/7 \xb7 "+B.t(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,B.l(t,t,B.W(153,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.C(B.at(new B.a8(u,u,B.ig(!0,t,t,A.z,new B.hI(3,6,6,1,s),new C.d2i(r),9,t,A.dJ,A.af,!1),t),t,t,t),1)],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:171}
C.d2i.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=B.m(10),s=B.m(10),r=u?A.br:D.b14,q=u?A.eY:D.b8l
return B.aD(!1,A.X,!0,w,B.aH(!1,t,!0,B.p(w,w,A.i,w,w,new B.o(r,w,B.H(q,A.r,u?2.5:1),s,w,w,A.n),w,w,w,w,w,w,w,w),w,!0,w,w,A.K,w,w,w,w,w,w,w,w,new C.d2f(v,e),w,w,w,w,A.K,w,w),A.i,A.K,0,w,w,w,w,w,A.aa)},
$S:74}
C.d2f.prototype={
$0(){return this.a.cnJ(this.b)},
$S:0}
C.d2z.prototype={
$0(){return this.a.aZ3(this.b[this.c])},
$S:0}
C.d2A.prototype={
$0(){return this.a.n(new C.d2h())},
$S:0}
C.d2h.prototype={
$0(){},
$S:0}
C.d2B.prototype={
$2(d,e){this.a.XK(d,e)
return null},
$S:z+36}
C.d6F.prototype={
$1(d){return this.a.c92(this.b,d)},
$S:1621}
C.d6E.prototype={
$0(){var w=this
return w.a.a.cFK(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cvJ.prototype={
$1(d){var w=this.a
w.Ze()
w.rZ()},
$S:8}
C.cv3.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cuU.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cuV.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cvd.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cva.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cvb.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cvc.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cv5.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new C.cv4(w))},
$S:0}
C.cv4.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cuW.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.aa(w.c)
v.dy=J.aa(w.d)
v.fr=J.aa(w.e)},
$S:0}
C.cv8.prototype={
$1(d){var w=this.a
return new C.T9(w.fx,new C.cv7(w),w.a.f.r,null)},
$S:z+11}
C.cv7.prototype={
$1(d){return this.bcB(d)},
bcB(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.c3n(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.n(new C.cv6(r,d))
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:z+37}
C.cv6.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cvw.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cvq.prototype={
$1(d){this.a.rZ()
return null},
$S:14}
C.cvt.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(A.o.aj(v.gaPL().a,1e6)<=0){w=v.id
if(w!=null)w.a9(0)
v.rZ()
return}v.n(new C.cvs())},
$S:14}
C.cvs.prototype={
$0(){},
$S:0}
C.cvp.prototype={
$1(d){this.a.DL()
return null},
$S:14}
C.cvr.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cvo.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=B.bf(J.k(v==null?"":v))
if(u==null)u=new B.N(B.fH(0,0,!1),0,!1)
v=J.q(e,"at")
w=B.bf(J.k(v==null?"":v))
return u.aI(0,w==null?new B.N(B.fH(0,0,!1),0,!1):w)},
$S:41}
C.cv0.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=B.bf(J.k(v==null?"":v))
if(u==null)u=new B.N(B.fH(0,0,!1),0,!1)
v=J.q(e,"at")
w=B.bf(J.k(v==null?"":v))
return u.aI(0,w==null?new B.N(B.fH(0,0,!1),0,!1):w)},
$S:41}
C.cv1.prototype={
$0(){var w=this.a,v=w.f
A.d.a8(v)
A.d.v(v,this.b)
w.ax=!0},
$S:0}
C.cv2.prototype={
$0(){var w=this.a
if(w.c!=null)w.ZT(!0)},
$S:11}
C.cuZ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cv_.prototype={
$1(d){var w=this.a.e
w===$&&B.c()
if(w.f.length!==0)w.RD(this.b)},
$S:8}
C.cvg.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=A.d.gcW(v).Q
v.toString
if(this.b)w.hO(v)
else w.m1(v,A.dW,A.ko)},
$S:8}
C.cv9.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cvh.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cvi.prototype={
$0(){var w=this.a
w.f.push(B.D(["role","user","text",this.b,"at",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z))
w.b_t()
w.r.bH(0,A.c0)
w.at=!0},
$S:0}
C.cvj.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cvk.prototype={
$0(){var w=this.a
w.f.push(B.D(["role","ai","text",this.b,"at",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z))
w.at=!1},
$S:0}
C.cvl.prototype={
$0(){var w,v=this.b,u=B.Q(x.N,x.z)
J.aE(u,"role","ai")
J.aE(u,"text",this.c)
J.aE(u,"at",new B.N(Date.now(),0,!1).a4().aa())
w=this.a
if(J.cs(w.b)){w=J.b3(w.b,v.gc81(),x.P)
w=B.z(w,w.$ti.k("ai.E"))
J.aE(u,"phoneActions",w)}v.f.push(u)
v.b_t()},
$S:0}
C.cvm.prototype={
$0(){this.a.f.push(B.D(["role","ai","text",y.g,"at",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z))},
$S:0}
C.cvn.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cve.prototype={
$1(d){return this.bcC(d)},
bcC(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:k=t.a
if(k.c==null||d==null){w=1
break}s=t.b.b
r=J.a4(s)
q=r.h(s,"start")
p=B.bf(q==null?"":q)
q=r.h(s,"end")
o=B.bf(q==null?"":q)
w=p!=null?3:4
break
case 3:q=k.a.c.a
n=Date.now()
m=r.h(s,"title")
m=A.a.i(m==null?"Event":m)
l=p.bP()
w=5
return B.b(C.amV(q,new C.qG("cal_"+1000*n,m,l,(o==null?p.bL(36e8):o).bP(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.amR()
case 4:k.c.E(x.q).f.P(B.aZ(null,null,null,A.dp,null,A.q,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:365}
C.cvv.prototype={
$1(d){return this.bcD(d)},
bcD(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.E(x.q).f.P(B.aZ(null,null,null,A.dp,null,A.q,null,B.d(d,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:365}
C.cvf.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=A.d.gcW(v).Q
v.toString
w.hO(v)},
$S:8}
C.cvI.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.c()
if(v>0)w.a89(v-1)},
$S:0}
C.cvB.prototype={
$0(){return B.ir(this.a,null)},
$S:0}
C.cvE.prototype={
$1(d){var w=this.a
w.n(new C.cvy(w,d))
if(d===0)w.ZT(!0)},
$S:27}
C.cvy.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cvC.prototype={
$2$size(d,e){return C.fCy(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:1622}
C.cvD.prototype={
$0(){var w=0,v=B.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.fOH(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return B.b(H.anI(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cvz(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return B.b(C.amT(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return B.b(p.rZ(),$async$$0)
case 15:p.n(new C.cvA(p))
p.a89(0)
case 14:u=!1
w=1
break
case 11:w=16
return B.b(p.rZ(),$async$$0)
case 16:case 9:case 4:u=!0
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:59}
C.cvz.prototype={
$2(d,e){return this.bcE(d,e)},
bcE(d,e){var w=0,v=B.j(x.y),u,t=this,s,r,q,p
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=B.a_D(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$S:118}
C.cvA.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cvG.prototype={
$2(d,e){return A.ab},
$S:34}
C.cvF.prototype={
$2(d,e){var w=null,v=this.a,u=B.d((v.a.c.w?D.ZV:D.Zi)[e],w,w,w,w,w,w,A.pw,w,w,w),t=B.W(31,A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255),s=B.W(89,A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255)
v=v.at?w:new C.cvx(v,e)
return B.od(w,t,u,w,v,w,new B.ay(s,1,A.r,-1),w)},
$S:607}
C.cvx.prototype={
$0(){var w=this.a,v=w.a.c.w?D.ZV:D.Zi
w.r.saR(0,v[this.b])
w.mq()
return null},
$S:0}
C.cvH.prototype={
$1(d){var w=this.a
return w.at?null:w.mq()},
$S:2}
C.cuX.prototype={
$0(){return this.a.a89(0)},
$S:0}
C.cvu.prototype={
$0(){return this.a.a89(this.b)},
$S:0}
C.cuY.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=B.p(v,D.byQ,A.i,v,v,new B.o(v,v,v,v,v,new B.a7(A.a1,A.a7,A.w,B.a([B.W(51,A.aK.l()>>>16&255,A.aK.l()>>>8&255,A.aK.l()&255),w.b],x.O),v,v),A.a6),v,72,v,v,v,v,v,72)
t=w.c
s=B.d("Start a conversation",v,v,v,v,v,v,B.l(v,v,t?A.c:A.aG,v,v,v,v,v,v,v,v,16,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return B.at(new B.B(A.UG,B.u(B.a([u,A.ac,s,A.ar,B.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,B.l(v,v,t?A.aA:A.aV,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),v,v,v)}if(e<s)return u.bxy(t[e],w.c)
return u.aJz(B.D(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:39}
C.bSX.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=A.k.L(d)
return new B.N(B.fH(w>1e11?w:w*1000,0,!0),0,!0).bP()}v=B.bf(J.k(d))
return v==null?null:v.bP()},
$S:267}
C.bSW.prototype={
$1(d){B.aQ(d)
return(d==null?0:d)/100},
$S:516}
C.bSZ.prototype={
$1(d){var w
if(d==null)w=null
else{w=B.bf(J.k(d))
w=w==null?null:w.bP()}return w},
$S:267}
C.bSY.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null
if(!x.f.b(d))return m
w=B.Y(d,x.N,x.z)
try{v=J.q(w,"id")
v=J.k(v==null?"":v)
u=J.q(w,"userEmail")
u=J.k(u==null?"":u)
t=B.aQ(J.q(w,"amount"))
if(t==null)t=0
s=J.q(w,"type")
s=B.a28(A.a_x,J.k(s==null?"reimbursement":s))
r=J.q(w,"method")
r=B.a28(A.Zg,J.k(r==null?"system":r))
q=B.aR(J.q(w,"sourceDetails"))
p=J.q(w,"status")
p=B.a28(A.F0,J.k(p==null?"approved":p))
o=this.a.$1(J.q(w,"timestamp"))
if(o==null)o=new B.N(Date.now(),0,!1)
return new B.cP(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:749}
C.dn4.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dn5.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dmW.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bi(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dmU.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=u.a
w=2
return B.b(o.zB(),$async$$0)
case 2:t=o.d
t===$&&B.c()
s=o.e
s===$&&B.c()
r=o.a.c
q=o.f
q===$&&B.c()
w=3
return B.b(C.fxa(t,s,r,q),$async$$0)
case 3:p=e
w=4
return B.b(B.ox(o.a.c,!1),$async$$0)
case 4:o.kn(p)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.dn3.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.a6H(),$async$$0)
case 3:q=e
if(q==null){r.kn("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return B.b(B.a6(s,!1).cz(B.eN(new C.dn2(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return B.b(B.ox(r.a.c,!1),$async$$0)
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dn2.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&B.c()
return new C.XN(w.b,w.a,u,v,null)},
$S:z+38}
C.dmT.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.hhC(q)?3:4
break
case 3:w=5
return B.b(t.a.Dl(A.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return B.b(C.aTM(q,s.a.c),$async$$0)
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
case 9:s.kn(C.bT0(s.a.c))
w=1
break
case 10:s.kn("That code didn't match anything on your account. Double-check it and try again.")
w=1
break
case 11:s.kn(y.B)
w=1
break
case 12:q=r.b
q.toString
w=14
return B.b(s.yP(q,!0,!0),$async$$0)
case 14:w=1
break
case 13:q=r.b
q.toString
w=15
return B.b(s.aKM(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dmS.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=B.bi(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dmV.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(r.a9X(),$async$$0)
case 3:q=e
if(q==null||A.a.i(q).length===0){w=1
break}s=C.fLJ(q)
if(s==null){r.kn("Could not read that backup file.")
w=1
break}if(!C.bT_(s,r.a.c,null)){r.kn(C.bT0(r.a.c))
w=1
break}w=4
return B.b(r.bzP(s),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dn1.prototype={
$1(d){var w=null,v=new B.ao(A.aq,$.as()),u=B.K(d).ax.a===A.H,t=u?A.hl:A.c,s=x.p,r=B.u(B.a([B.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,B.l(w,w,u?A.ak:A.ai,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),A.aC,B.aI(w,A.T,!0,w,!0,A.q,w,B.aL(),v,w,w,w,w,w,2,B.bn(w,new B.b0(4,B.m(14),A.d9),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),A.z,!0,w,!0,w,!1,w,A.ad,w,w,w,w,w,A.dK,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.L,w,A.am,w,w,w,w)],s),A.F,w,A.e,A.R,0,A.p)
return B.ei(B.a([B.bF(!1,A.dd,w,w,!0,w,w,new C.dn_(d),w,w),B.bJ(D.eBB,new C.dn0(d,v),B.bk(A.aR,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.eOU,w)},
$S:19}
C.dn_.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.dn0.prototype={
$0(){var w=A.a.i(this.b.a.a)
B.a6(this.a,!1).K(w)
return null},
$S:0}
C.dmX.prototype={
$1(d){return D.f21},
$S:z+12}
C.dmY.prototype={
$0(){return this.a.Dm(A.a.i(this.b))},
$S:1}
C.dmZ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return B.b(C.aTM(t.b,r.a.c),$async$$0)
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
return B.b(r.yP(s,!0,!0),$async$$0)
case 11:w=1
break
case 7:r.kn(C.bT0(r.a.c))
w=1
break
case 8:r.kn("Could not read that QR code for your account.")
w=1
break
case 9:r.kn(y.B)
w=1
break
case 10:s=q.b
s.toString
w=12
return B.b(r.aKM(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dn6.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.dna.prototype={
$1(d){this.a.OQ()
return null},
$S:14}
C.dn7.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dn8.prototype={
$0(){var w=null,v=this.a
B.fB(new B.fu(v.gasb()))
this.b.E(x.q).f.P(B.aZ(w,w,w,w,w,A.q,w,B.d("Code "+v.gasb()+" copied",w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dn9.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.dnb.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:A.a.i(t)
if(s==null||s.length===0)continue
if(!(A.a.a_(s,"NGMYSNAP1|")||A.a.a_(s,"NGMYLOCALSYNC1|")||A.a.a_(s,"NGMYLOCALLIVE1|")||A.a.a_(s,"NGMYLOCALDEP1|")))continue
r.e=!0
B.a6(this.b,!1).K(s)
return}},
$S:184}
C.f4f.prototype={
$1(d){return D.f0k},
$S:z+13}
C.f5s.prototype={
$1(d){return new C.abP(this.a,this.b,this.c,null)},
$S:z+14}
C.eDA.prototype={
$0(){B.a6(this.a,!1).K(!1)
return null},
$S:0}
C.eDB.prototype={
$0(){B.a6(this.a,!1).K(!0)
return null},
$S:0}
C.cXX.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fs()},
$S:8}
C.cXU.prototype={
$2(d,e){return e.ah6(e.a.toUpperCase())},
$S:1623}
C.cXV.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=A.a.i(w.d.a.a)
B.a6(v,!1).K(w)
return null},
$S:2}
C.cXW.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.bTI.prototype={
$1(d){var w=J.q(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!A.d.bc(D.cTF,A.a.gkP(v))},
$S:4}
C.fc2.prototype={
$1(d){return d.a===this.a},
$S:1624}
C.fc3.prototype={
$0(){return A.d.gI(A.Az)},
$S:1625}
C.dtw.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.n(new C.dtv(v))
w=v.r
w===$&&B.c()
if(w<=0)v.aZy("Time's up")},
$S:14}
C.dtv.prototype={
$0(){var w=this.a,v=w.r
v===$&&B.c()
w.r=v-1
return v},
$S:0}
C.dtn.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dts.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.n(new C.dtp(w,d,e))},
$S:140}
C.dtp.prototype={
$0(){var w=this.a,v=this.c
w.e=A.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dtt.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new C.dto(w))
w.cio(!0)},
$S:0}
C.dto.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dtu.prototype={
$1(d){this.a.aZy(d)
return null},
$S:2}
C.dtq.prototype={
$0(){return B.ir(this.a,null)},
$S:0}
C.dtr.prototype={
$0(){return this.a.a.c.d},
$S:78}
C.f6b.prototype={
$5(d,e,f,g,h){var w,v=null,u=J.a4(d),t=B.aQ(u.h(d,e)),s=t==null?v:A.k.L(t)
if(s==null)s=0
if(s<=0)return v
t=u.h(d,g)
if(J.k(t==null?"":t)!==h){u.m(d,g,h)
u.m(d,f,0)}t=B.aQ(u.h(d,f))
w=t==null?v:A.k.L(t)
if(w==null)w=0
if(w>=s)return v
u.m(d,f,w+1)
u=B.aQ(u.h(d,"outcome"))
return u==null?v:A.k.L(u)},
$S:1626}
C.f6c.prototype={
$2(d,e){var w=B.aQ(J.q(d,e))
w=w==null?null:A.k.L(w)
return w==null?0:w},
$S:640}
C.f6d.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:313}
C.fiX.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.fWP(w,v):C.fCQ(w,v)
if(u===3)++w.f
C.ada(w,this.c,u)
return u},
$S:1627}
C.fiZ.prototype={
$0(){return C.fWP(this.a,this.b)},
$S:111}
C.fiY.prototype={
$0(){return C.fCQ(this.a,this.b)},
$S:111}
C.dmH.prototype={
$0(){var w=this.a
if(w.a.c)w.n(new C.dmG(w))},
$S:0}
C.dmG.prototype={
$0(){this.a.r=1+A.o.J(B.Do(new B.N(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dmI.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&B.c()
u=u.x
u===$&&B.c()
w=A.k.bK(u*10)
if(w!==v.w)v.n(new C.dmF(v,w))}},
$S:0}
C.dmF.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.c23.prototype={
$3(d,e,f){var w=null
return B.C(B.u(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,A.I,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.bw,B.f0(A.C,B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.i,A.dq)],x.p),A.m,w,A.e,A.j,0,A.p),1)},
$S:1628}
C.c22.prototype={
$3(d,e,f){var w=null
return B.d("$"+A.k.ab(e,2),w,w,w,w,w,w,A.op,w,w,w)},
$S:692}
C.c2v.prototype={
$1(d){return new C.Ly(this.a,this.b,!1,null,null)},
$S:z+15}
C.dLA.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=B.m(e?0:30)
e=e?g:B.H(A.b0.j(0.5),A.r,1)
w=f.a.e?g:B.a([new B.a9(2,A.G,A.b0.j(0.35),A.J,36),new B.a9(0,A.G,A.bB.j(0.175),A.J,24)],x.V)
v=B.m(f.a.e?0:30)
u=x.O
t=B.an(g,B.p(g,g,A.i,g,g,new B.o(g,g,g,g,g,new B.bT(A.C,0.5,A.w,g,0,B.a([A.b8.j(0.22),A.K],u),g,g),A.a6),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=B.an(-50,B.p(g,g,A.i,g,g,new B.o(g,g,g,g,g,new B.bT(A.C,0.5,A.w,g,0,B.a([A.bB.j(0.18),A.K],u),g,g),A.a6),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?A.j:A.R
p=x.p
o=B.a([],p)
if(f.a.e)o.push(A.P)
n=x.V
o.push(B.p(g,D.buz,A.i,g,g,new B.o(g,g,B.H(A.aM.j(0.8),A.r,2.5),g,B.a([new B.a9(0,A.G,A.b0.j(0.55),A.cv,18)],n),E.xi,A.a6),g,88,g,g,g,g,g,88))
o.push(A.aT)
o.push(B.nj(A.j0,D.eMI,new C.dLw()))
o.push(A.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(B.d(m,g,g,g,g,g,g,B.l(g,g,A.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,A.cn,g,1.45,!0,g,g,g,g,g,g,g,g),A.L,g,g))
m=this.b
if(m.length!==0){l=A.cJ.j(0.12)
k=B.m(18)
j=B.H(A.cJ.j(0.45),A.r,1)
i=B.a([B.A(B.a([B.U(D.boz,A.cJ.j(0.95),g,g,g,20),A.ab,B.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,B.l(g,g,A.cJ.j(0.95),g,g,g,g,g,g,g,g,13,g,g,A.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),A.m,g,A.e,A.j,0,g,g),A.U,B.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,B.l(g,g,A.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),A.U],p)
A.d.v(i,new B.I(m,new C.dLx(),B.S(m).k("I<1,r>")))
A.d.v(o,B.a([A.aT,B.p(g,B.u(i,A.F,g,A.e,A.j,0,A.p),A.i,g,g,new B.o(l,g,j,k,g,g,A.n),g,g,g,g,A.bC,g,g,1/0)],p))}o.push(A.bv)
m=A.x.j(0.35)
l=B.m(18)
k=B.H(A.b0.j(0.35),A.r,1)
o.push(B.p(g,B.u(B.a([f.asJ(A.hc,"Unlimited games with an active plan",A.b8),A.P,f.asJ(A.jY,"Weekday check-ins grow your balance",A.b0),A.P,f.asJ(A.lT,"Compete, bet, and earn points",A.aM)],p),A.m,g,A.e,A.j,0,A.p),A.i,g,g,new B.o(m,g,k,l,g,g,A.n),g,g,g,g,A.bC,g,g,1/0))
o.push(A.d1)
l=B.m(16)
n=B.a([new B.a9(0,A.G,A.bB.j(0.45),A.cv,16)],n)
o.push(new B.a8(1/0,g,B.bQ(B.dn(D.bxG,D.eIz,new C.dLy(f,a0),B.bk(A.K,g,g,g,A.c,A.Q5,g,A.K,new B.b5(B.m(16),A.V),g,g,g)),new B.o(g,g,g,l,n,E.xi,A.n),A.ba),g))
o.push(A.P)
n=f.a.e?"Back":"Maybe later"
o.push(B.bF(!1,B.d(n,g,g,g,g,g,g,B.l(g,g,A.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,new C.dLz(f,a0),g,g))
if(f.a.e)o.push(A.bd)
h=B.p(g,B.bw(v,new B.am(A.W,g,A.a9,A.q,B.a([t,u,new B.B(new B.L(22,r,22,q),B.u(o,A.m,g,A.e,s,0,A.p),g)],p),g),A.ap),A.i,g,g,new B.o(g,g,e,d,w,D.bGA,A.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return B.ez(g,A.K,h,g,g,g,Ad.Vc,A.cZ,g,g,g)},
$S:693}
C.dLw.prototype={
$1(d){return D.bFC.aB(0,d)},
$S:66}
C.dLx.prototype={
$1(d){var w=null
return new B.B(A.fh,B.A(B.a([B.U(Ak.X3,A.cJ.j(0.85),w,w,w,14),A.ab,B.C(B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$S:137}
C.dLy.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{B.a6(this.b,!1).K(null)
w.a.c.$0()}},
$S:0}
C.dLz.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else B.a6(this.b,!1).K(null)},
$S:0}
C.fep.prototype={
$1(d){if(d.gm6())this.a.a=d
return d.gm6()},
$S:587}
C.fec.prototype={
$1(d){$.aT.x1$.push(new C.feb(this.a))},
$S:8}
C.feb.prototype={
$1(d){return this.a.$0()},
$S:8}
C.f2w.prototype={
$1(d){return C.fWV(this.a,this.b+1)},
$S:8}
C.ffJ.prototype={
$2(d,e){var w=B.aG(d,A.bM,x.w).w.a
return new B.a8(w.a,w.b,B.cg(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:161}
C.c2I.prototype={
$1(d){return d.r===this.a},
$S:276}
C.c2J.prototype={
$1(d){var w=$.aN4(),v=w.a
w.st(0,v+1)
return v},
$S:1632}
C.c2K.prototype={
$1(d){},
$S:32}
C.c2H.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:276}
C.c2G.prototype={
$1(d){return d.f.ca(this.a)},
$S:276}
C.f0I.prototype={
$1(d){return B.t(d.h(0,1))+","},
$S:70}
C.fqY.prototype={
$1(d){return C.a4O(this.a)},
$S:99}
C.fqZ.prototype={
$1(d){var w=$.aN4()
w.st(0,w.a+1)},
$S:28}
C.fr_.prototype={
$1(d){},
$S:32}
C.fr0.prototype={
$1(d){return new B.jZ($.aN4(),new C.fqX(this.a,this.b),null,null,x.am)},
$S:1633}
C.fqX.prototype={
$3(d,e,f){var w=this.b
return new B.kT(C.amC(this.a,!1),new C.fqW(w),w,null,x.gv)},
$S:1634}
C.fqW.prototype={
$2(d,e){var w=e.b
return new C.aaE(w==null?this.a:w,null)},
$S:z+16}
C.dLD.prototype={
$1(d){return d.c},
$S:276}
C.dLE.prototype={
$1(d){return d.gb9z()},
$S:1635}
C.dLF.prototype={
$2(d,e){return d+e},
$S:94}
C.dLG.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.dLI.prototype={
$2(d,e){return A.P},
$S:34}
C.dLH.prototype={
$2(d,e){return new C.aaD(J.q(this.a.c,e),null)},
$S:z+17}
C.dLC.prototype={
$1(d){return d==null?"\u2026":C.bve(d)},
$S:1636}
C.fr3.prototype={
$3(d,e,f){var w=this
return B.qT(new C.awU(w.a,w.b,w.c,w.d,new C.fr1(d,w.e),new C.fr2(d,w.f),null))},
$C:"$3",
$R:3,
$S:93}
C.fr1.prototype={
$0(){B.a6(this.a,!1).K(null)
C.fZO(this.b)},
$S:0}
C.fr2.prototype={
$0(){B.a6(this.a,!1).K(null)
C.fZO(this.b)},
$S:0}
C.d3y.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.a,g=h.f
g===$&&B.c()
w=h.e
v=0
for(;v<28;++v){u=g[v]
t=u.b+u.c
u.b=t
u.d+=0.08
if(t>320){u.b=-10
u.a=40+w.ah()*260
u.c=1.5+w.ah()*3}}g=x.p
w=B.a([],g)
if(h.a.c){t=h.f
A.d.v(w,new B.I(t,new C.d3x(),B.S(t).k("I<1,r>")))}t=h.d
t===$&&B.c()
t=t.x
t===$&&B.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,B.aG(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?B.a([A.br,A.fn,A.eI],r):B.a([A.aH,A.f5,A.fp],r)
p=B.m(26)
o=B.H(A.c.j(0.4),A.r,2)
n=x.V
m=B.a([new B.a9(6,A.G,(h.a.c?A.dr:A.dy).j(0.5),A.J,36)],n)
l=B.a([],g)
if(h.a.c){k=B.df()
j=k.a
j.$flags&2&&B.ah(j)
j[11]=0.001
k.jv(-0.35)
r=B.a([X.a9O,A.rb],r)
l.push(new B.a8(i,100,new B.am(A.C,i,A.a9,A.i,B.a([B.fp(A.C,B.p(i,D.aX1,A.i,i,i,new B.o(i,i,i,i,B.a([new B.a9(4,A.G,A.cI.j(0.6),A.J,24),new B.a9(0,A.G,A.x.j(0.3),A.dm,12)],n),new B.bT(A.C,0.5,A.w,i,0,r,i,i),A.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.bAQ)
l.push(A.aC)
l.push(B.d(h.a.d,i,i,i,i,i,i,A.a46,A.L,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=B.m(18)
k=B.H(A.fn,A.r,4)
A.d.v(l,B.a([A.aC,D.eDe,A.P,B.p(i,B.d(r,i,i,i,i,i,i,D.euo,A.L,i,i),A.i,i,i,new B.o(A.c,i,k,n,i,i,A.n),i,i,i,i,A.UE,i,i,1/0)],g))}A.d.v(l,B.a([A.ac,B.d(h.a.e,i,i,i,i,i,i,D.ewY,A.L,i,i)],g))
l.push(A.dZ)
r=B.C(B.dU(D.eAV,h.a.r,B.d9(i,i,i,i,i,i,i,i,i,A.c,i,i,A.c9,i,i,D.aP5,i,i,i,i)),1)
h=h.a
n=h.w
l.push(B.A(B.a([r,A.av,B.C(B.bJ(F.aK6,n,B.bk(A.c,i,i,i,h.c?A.fn:A.f5,i,A.c9,i,i,i,i,i)),1)],g),A.m,i,A.e,A.j,0,i,i))
w.push(B.e4(A.C,B.p(i,B.u(l,A.m,i,A.e,A.R,0,A.p),A.i,i,i,new B.o(i,i,o,p,m,new B.a7(A.ax,A.aE,A.w,q,i,i),A.n),i,i,i,A.a8,A.adi,i,i,s),1+t*0.02,i,i))
return new B.am(A.C,i,A.a9,A.i,w,i)},
$S:113}
C.d3x.prototype={
$1(d){var w=null,v=d.a,u=d.b
return B.an(w,B.d8(B.eO(A.C,d.d,B.U(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+18}
C.c4j.prototype={
$2(d,e){var w=null,v=this.a,u=C.hh3(B.Ja(v.c,v.d))
return B.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1637}
C.c4i.prototype={
$1(d){return B.t(d.h(0,1))+","},
$S:70}
C.bUe.prototype={
$0(){},
$S:0}
C.f_I.prototype={
$1(d){return A.o.u(d)},
$S:86}
C.dET.prototype={
$0(){return this.a.y=!0},
$S:0}
C.dEU.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.dEV.prototype={
$0(){var w=this.a
return w.w=D.NP[w.d.aE(5)]},
$S:0}
C.dEW.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.dEX.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.dEY.prototype={
$0(){var w=this.a
return w.n(new C.dES(w))},
$S:0}
C.dES.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dEZ.prototype={
$0(){var w=this.a
return w.n(new C.dER(w))},
$S:0}
C.dER.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dF1.prototype={
$0(){return B.ir(this.a,null)},
$S:0}
C.dF2.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&A.a.i(t.e.a.a).length===0?A.br:B.W(36,A.c.l()>>>16&255,A.c.l()>>>8&255,A.c.l()&255),r=B.m(10)
t=t.y?u:new C.dF0(t,d)
w=B.m(10)
v=A.k.ab(d,0)
return B.C(new B.B(A.kr,B.aD(!1,A.X,!0,r,B.aH(!1,w,!0,new B.a8(u,38,B.at(B.d("$"+v,u,u,u,u,u,u,B.l(u,u,A.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),A.i,s,0,u,u,u,u,u,A.aa),u),1)},
$S:1638}
C.dF0.prototype={
$0(){var w=this.a
return w.n(new C.dF_(w,this.b))},
$S:0}
C.dF_.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bH(0,A.c0)},
$S:0}
C.dM_.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+A.cM.gcs().aF(this.c)},
$S:0}
C.dM0.prototype={
$0(){return B.ir(this.a,null)},
$S:0}
C.dLW.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=B.m(14),s=u?A.c.j(0.1):A.K,r=B.H(u?D.es.j(0.5):A.K,A.r,1),q=B.U(e,u?D.es:A.aA,w,w,w,20)
return B.C(B.aJ(w,B.de(w,B.A(B.a([q,A.bp,B.d(f,w,w,w,w,w,w,B.l(w,w,u?A.c:A.aA,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.b5,A.j,0,w,w),w,w,A.b7,new B.o(s,w,r,t,w,w,A.n),A.X,w,46,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dLY(v,d),w,w,w,w,w,w,!1,A.ae),1)},
$S:1639}
C.dLY.prototype={
$0(){var w=this.a
return w.n(new C.dLX(w,this.b))},
$S:0}
C.dLX.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dLZ.prototype={
$0(){var w=this.a,v=w.d===A.k4?"Cash App tag":"Bitcoin address"
return w.Hh(this.b,v)},
$S:0}
C.dLV.prototype={
$0(){var w=this.a
return w.Hh(w.ganH(),"Code")},
$S:0}
C.c39.prototype={
$1(d){return C.hdc(B.Y(d,x.N,x.z))},
$S:z+19}
C.c3a.prototype={
$2(d,e){return d.c.aI(0,e.c)},
$S:z+6}
C.c36.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.c37.prototype={
$2(d,e){return d.c.aI(0,e.c)},
$S:z+6}
C.c38.prototype={
$1(d){return d.ad()},
$S:z+22}
C.c3b.prototype={
$1(d){var w=d.c
return!w.cT(this.a.bL(-36e8))&&!w.ca(this.b)},
$S:z+7}
C.bWC.prototype={
$1(d){return C.hdd(B.Y(d,x.N,x.z))},
$S:z+23}
C.bWD.prototype={
$2(d,e){return e.b.aI(0,d.b)},
$S:z+8}
C.bWA.prototype={
$1(d){return d.ad()},
$S:z+25}
C.bWB.prototype={
$2(d,e){return e.b.aI(0,d.b)},
$S:z+8}
C.bWF.prototype={
$1(d){var w=d.b
return!w.cT(this.a)&&!w.ca(this.b)},
$S:z+26}
C.c3i.prototype={
$1(d){return d.ad()},
$S:z+27}
C.c3h.prototype={
$1(d){return C.fNT(B.Y(x.f.a(d),x.N,x.z))},
$S:z+28}
C.c3g.prototype={
$1(d){return d.ad()},
$S:z+29}
C.c3f.prototype={
$1(d){return C.hgI(B.Y(x.f.a(d),x.N,x.z))},
$S:z+30}
C.c3k.prototype={
$1(d){return C.hgH(B.Y(x.f.a(d),x.N,x.z))},
$S:z+31}
C.c3l.prototype={
$2(d,e){return A.o.aI(d.f,e.f)},
$S:z+2}
C.c3m.prototype={
$1(d){return d.ad()},
$S:z+33}
C.dPF.prototype={
$1(d){return d.b58(B.bi(d.e,!0,x.u))},
$S:z+35}
C.dPG.prototype={
$2(d,e){return A.o.aI(d.f,e.f)},
$S:z+2}
C.dPz.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dPA.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dPi.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.G(w,this.b)},
$S:0}
C.dPj.prototype={
$1(d){return new C.Nq(this.a,null)},
$S:z+9}
C.dPk.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&B.c()
w=A.d.be(t,new C.dPh(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){A.d.ct(u.d,w)
u.Hq()}},
$S:0}
C.dPh.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dPw.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(B.D(["role","admin","text",this.b],w,w))},
$S:0}
C.dPx.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(B.D(["role","ai","text",v],t,t))}else{v=t.d
v===$&&B.c()
t.d=C.hG3(v,w[0],w[3])
t.Hq()
t=w[2]
if(t==null)t="Created "+J.aa(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(B.D(["role","ai","text",t],w,w))}},
$S:0}
C.dPy.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=A.d.gcW(v).Q
v.toString
w.hO(v)}},
$S:8}
C.dPq.prototype={
$1(d){return new C.Nq(this.a,null)},
$S:z+9}
C.dPr.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dPp.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.ct(w,this.b)},
$S:0}
C.dPv.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&B.c()
v=A.d.ct(w,s)
A.d.cj(t.d,u.a,v)
t.Hq()},
$S:0}
C.dPu.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&B.c()
w=this.b
return new C.Yz(u[w],new C.dPt(v,w),null)},
$S:z+58}
C.dPt.prototype={
$1(d){var w=this.a
return w.n(new C.dPs(w,this.b,d))},
$S:z+39}
C.dPs.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dPm.prototype={
$0(){var w=this.a
return w.n(new C.dPl(w))},
$S:0}
C.dPl.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dPn.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?A.ct:A.aI
return new B.B(A.fh,B.d(t+": "+B.t(s),w,w,w,w,w,w,B.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?A.a_:A.cn,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:112}
C.dPo.prototype={
$1(d){return this.a.ZA()},
$S:2}
C.dPE.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&B.c()
w=l[e]
l=this.b.a
v=l?D.r8:A.c
u=B.m(16)
t=B.m(16)
s=l?A.aI:A.aJ
r=w.d
q=B.bg(r).j(0.15)
p=B.m(12)
q=B.p(n,B.U(A.afO,l?A.bO:A.ai,n,n,n,20),A.i,n,n,new B.o(q,n,n,p,n,n,A.n),n,n,n,n,A.bT,n,n,n)
p=B.bg(r).j(0.12)
o=B.m(8)
o=B.p(n,B.U(w.c,B.bg(r),n,n,n,18),A.i,n,n,new B.o(p,n,n,o,n,n,A.n),n,n,n,n,A.hb,n,n,n)
r=B.A(B.a([o,A.av,B.C(B.d(w.b,n,n,n,n,n,n,B.l(n,n,l?A.aN:A.M,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),A.m,n,A.e,A.j,0,n,n)
p=w.e.length
return new B.B(A.d6,B.aD(!1,A.X,!0,u,B.dI(!1,n,n,n,!0,n,n,n,!0,n,new H.ara(q,e,!0,n),n,n,n,n,new C.dPB(m,e),!1,n,n,new B.b5(t,new B.ay(s,1,A.r,-1)),n,n,B.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,B.l(n,n,l?A.bO:A.ai,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,B.Av(n,n,n,new C.dPC(),A.J,new C.dPD(m,e),A.ch,n,x.N),n),A.i,v,0,n,n,n,n,n,A.aa),new B.cv(w.a,x.W))},
$S:112}
C.dPD.prototype={
$1(d){var w=this
if(d==="edit")w.a.a78(w.b)
if(d==="questions")w.a.Wd(w.b)
if(d==="delete")w.a.bCD(w.b)},
$S:2}
C.dPC.prototype={
$1(d){return D.crS},
$S:133}
C.dPB.prototype={
$0(){return this.a.Wd(this.b)},
$S:0}
C.cE8.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q===$&&B.c()
w=d.a===q.a
if(w){q=r.f
q===$&&B.c()
q=B.bg(q).j(0.2)}else q=A.cO.j(0.1)
v=B.m(10)
if(w){u=r.f
u===$&&B.c()
u=B.bg(u)}else u=A.K
u=B.H(u,A.r,1)
t=r.f
t===$&&B.c()
return B.aH(!1,s,!0,B.p(s,B.U(d,B.bg(t),s,s,s,s),A.i,s,s,new B.o(q,s,u,v,s,s,A.n),s,s,s,s,A.ch,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cE7(r,d),s,s,s,s,s,s,s)},
$S:1640}
C.cE7.prototype={
$0(){var w=this.a
return w.n(new C.cE5(w,this.b))},
$S:0}
C.cE5.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cE9.prototype={
$1(d){var w=null,v=this.a,u=B.bg(d),t=v.f
t===$&&B.c()
return B.aJ(w,B.hh(u,w,t===d?D.byl:w,w,14),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cE6(v,d),w,w,w,w,w,w,!1,A.ae)},
$S:420}
C.cE6.prototype={
$0(){var w=this.a
return w.n(new C.cE4(w,this.b))},
$S:0}
C.cE4.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cEa.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.cEb.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&B.c()
t=A.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&B.c()
v=v.f
v===$&&B.c()
t=u.cxH(v,w,t)
B.a6(this.b,!1).K(t)
return null},
$S:0}
C.eyG.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return w.push(this.b)},
$S:0}
C.eyH.prototype={
$1(d){return new C.Yy(this.a,null)},
$S:z+40}
C.eyN.prototype={
$2(d,e){return A.P},
$S:34}
C.eyM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&B.c()
w=l[e]
l=this.b.a
v=l?D.r8:A.c
u=B.m(14)
t=B.m(14)
s=l?A.aI:A.aJ
r=w.d
if(r!=null&&r.length!==0){q=B.m(8)
r=B.bw(q,K.aLN(n,A.bP,36,A.oY,l?A.bO:A.ai,r,48),A.ap)}else r=B.U(D.WL,B.bg(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=B.d(q,n,2,A.a0,n,n,n,B.l(n,n,l?A.aN:A.M,n,n,n,n,n,n,n,n,n,n,n,A.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.aa(w.c)
o=w.e?" \xb7 Printable":""
return B.aD(!1,A.X,!0,u,B.dI(!1,n,n,n,!0,n,n,n,!0,n,r,n,n,n,n,new C.eyK(m,w,e),!1,n,n,new B.b5(t,new B.ay(s,1,A.r,-1)),n,n,B.d(""+p+" block(s)"+o,n,n,n,n,n,n,B.l(n,n,l?A.bO:A.ai,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,B.aF(n,n,n,n,D.bwS,n,n,n,new C.eyL(m,e),n,n,n,n,n,n),n),A.i,v,0,n,n,n,n,n,A.aa)},
$S:74}
C.eyL.prototype={
$0(){var w=this.a
w.n(new C.eyI(w,this.b))
w.asM()},
$S:0}
C.eyI.prototype={
$0(){var w=this.a.d
w===$&&B.c()
return A.d.ct(w,this.b)},
$S:0}
C.eyK.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.aUZ(u.b),$async$$0)
case 2:s=e
if(s!=null){t.n(new C.eyJ(t,u.c,s))
t.asM()}return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eyJ.prototype={
$0(){var w,v=this.a.d
v===$&&B.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eyC.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eyA.prototype={
$1(d){var w=this.a.e
w===$&&B.c()
return new C.Ta(w,"Answer Document",null)},
$S:z+41}
C.eyB.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eyE.prototype={
$0(){var w,v,u=this.a,t=u.a.c,s=u.d
s===$&&B.c()
s=A.a.i(s.a.a)
w=u.e
w===$&&B.c()
v=u.f
u=u.r
if(v==null)v=t.d
B.a6(this.b,!1).K(new C.i7(t.a,s,w,v,u,t.f))
return null},
$S:0}
C.eyF.prototype={
$1(d){var w=this.a
return w.n(new C.eyD(w,d))},
$S:9}
C.eyD.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.c3c.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+42}
C.fg6.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dQf.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+43}
C.dPW.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.G(w,new C.lf("image","",this.b,null))},
$S:0}
C.dQ0.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.G(w,new C.lf("video","","data:video/mp4;base64,"+A.cM.gcs().aF(this.b),null))},
$S:0}
C.dPZ.prototype={
$1(d){var w=null,v=x.p,u=B.u(B.a([B.aI(w,A.T,!1,w,!0,A.q,w,B.aL(),this.a,w,w,w,w,w,2,D.bCD,A.z,!0,w,!0,w,!1,w,A.ad,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w),B.aI(w,A.T,!1,w,!0,A.q,w,B.aL(),this.b,w,w,w,w,w,2,D.bCC,A.z,!0,w,!0,w,!1,w,A.ad,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w)],v),A.m,w,A.e,A.R,0,A.p)
return B.ei(B.a([B.bF(!1,A.dd,w,w,!0,w,w,new C.dPX(d),w,w),B.bJ(D.eMe,new C.dPY(d),w)],v),w,w,w,u,w,w,w,w,D.eAj,w)},
$S:19}
C.dPX.prototype={
$0(){B.a6(this.a,!1).K(!1)
return null},
$S:0}
C.dPY.prototype={
$0(){B.a6(this.a,!1).K(!0)
return null},
$S:0}
C.dQ_.prototype={
$0(){var w,v=this.a.e
v===$&&B.c()
w=A.a.i(this.b.a.a)
return A.d.G(v,new C.lf("link","",A.a.i(this.c.a.a),w))},
$S:0}
C.dPS.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.dPT.prototype={
$1(d){return d.length!==0},
$S:3}
C.dPU.prototype={
$1(d){return A.a.i(A.a.e_(d,B.ad("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.dPV.prototype={
$1(d){return d.length!==0},
$S:3}
C.dQ5.prototype={
$0(){var w=this.a.bw9()
B.a6(this.b,!1).K(w)
return null},
$S:0}
C.dQ6.prototype={
$0(){return this.a.asN("**","**")},
$S:0}
C.dQ7.prototype={
$0(){return this.a.asN("*","*")},
$S:0}
C.dQ8.prototype={
$0(){return this.a.asN("__","__")},
$S:0}
C.dQ9.prototype={
$0(){return this.a.aTg("## Section title")},
$S:0}
C.dQa.prototype={
$0(){return this.a.aTg("\u2022 First point\n\u2022 Second point")},
$S:0}
C.dQb.prototype={
$0(){},
$S:0}
C.dQc.prototype={
$0(){var w=this.a
w.n(new C.dQ4(w))},
$S:0}
C.dQ4.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.G(w,D.dfQ)},
$S:0}
C.dQd.prototype={
$0(){var w=this.a
w.n(new C.dQ3(w))},
$S:0}
C.dQ3.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.G(w,D.dfR)},
$S:0}
C.dQe.prototype={
$1(d){var w,v,u=null,t=d.b,s=t.a
A:{if("image"===s){w="Image"
break A}if("video"===s){w="Video"
break A}if("link"===s){w=t.d
if(w==null)w="Link"
break A}if("signature"===s){w="Signature"
break A}w=s
break A}v=this.b.a
w=B.d(w,u,u,u,u,u,u,B.l(u,u,v?A.iv:A.aG,u,u,u,u,u,u,u,u,11,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
v=v?A.d3:A.iN
return B.BW(u,v,A.ai0,w,u,new C.dQ2(this.a,d),u)},
$S:z+44}
C.dQ2.prototype={
$0(){var w=this.a
return w.n(new C.dQ1(w,this.b))},
$S:0}
C.dQ1.prototype={
$0(){var w=this.a.e
w===$&&B.c()
return A.d.ct(w,this.b.a)},
$S:0}
C.dPP.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.aMi},
$S:0}
C.dPQ.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.f1d},
$S:0}
C.dPH.prototype={
$0(){var w=this.a
w.d=D.aMh
w.f=w.e=null},
$S:0}
C.dPI.prototype={
$0(){var w=this.a
w.d=D.aMi
w.f=null},
$S:0}
C.dPR.prototype={
$2(d,e){return A.o.aI(d.f,e.f)},
$S:z+2}
C.dPK.prototype={
$2(d,e){var w=this.a,v=w.gb_u()[e]
return new C.a9c(v,this.b,new C.dPJ(w,v),null)},
$S:z+45}
C.dPJ.prototype={
$0(){return this.a.bYL(this.b.a)},
$S:0}
C.dPM.prototype={
$2(d,e){return A.o.aI(d.f,e.f)},
$S:z+46}
C.dPO.prototype={
$2(d,e){return A.U},
$S:34}
C.dPN.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.r8:A.c,p=B.m(16),o=B.m(16),n=B.m(16),m=B.H(r?A.aI:A.aJ,A.r,1),l=B.a([new B.a9(0,A.G,A.x.j(r?0.28:0.06),A.dF,8)],x.V),k=B.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=B.m(10)
v=B.m(10)
k.push(B.bw(w,K.aLN(v,A.bP,52,D.WL,r?A.bO:A.ai,j,52),A.ap))}else{j=u.d.d
w=B.bg(j).j(0.15)
v=B.m(12)
k.push(B.p(t,B.U(D.WL,B.bg(j),t,t,t,24),A.i,t,t,new B.o(w,t,t,v,t,t,A.n),t,52,t,t,t,t,t,52))}k.push(A.bb)
k.push(B.C(B.d(s.b,t,t,t,t,t,t,B.l(t,t,r?A.aN:A.M,t,t,t,t,t,t,t,t,13,t,t,A.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(B.U(A.el,r?A.bO:A.ai,t,t,t,22))
return B.aD(!1,A.X,!0,p,B.aH(!1,o,!0,B.p(t,B.A(k,A.m,t,A.e,A.j,0,t,t),A.i,t,t,new B.o(t,t,m,n,l,t,A.n),t,t,t,t,A.bj,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dPL(u.a,s),t,t,t,t,t,t,t),A.i,q,0,t,t,t,t,t,A.aa)},
$S:74}
C.dPL.prototype={
$0(){return this.a.c4h(this.b)},
$S:0}
C.c3e.prototype={
$1(d){return new C.a94(d,this.a,null)},
$S:z+47}
C.cxP.prototype={
$0(){var w=this.a.c,v=w.c,u=B.nY(v==null?w.b:v)
if(u!=null)B.iF(u,A.f8,null)},
$S:0}
C.cxQ.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.cxR.prototype={
$1(d){var w=null,v=this.a.d.a,u=B.d("\u2022  ",w,w,w,w,w,w,B.l(w,w,v?A.ct:A.aI,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=A.a.i(d)
return new B.B(A.nf,B.A(B.a([u,B.C(B.d(t,w,w,w,w,w,w,B.l(w,w,v?A.ct:A.aI,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),A.F,w,A.e,A.j,0,w,w),w)},
$S:137}
C.d7y.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d7A.prototype={
$0(){return this.a.n(new C.d7z(this.b))},
$S:0}
C.d7z.prototype={
$0(){var w=this.a
return w.a.f?w.fS(0):w.p_(0)},
$S:0}
C.f_s.prototype={
$1(d){return A.a.i(d).length!==0},
$S:3}
C.dQt.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.AT)w.z=v
else w.Q=v},
$S:0}
C.dQk.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=A.d.gcW(v).Q
v.toString
w.m1(v,A.cm,A.eT)},
$S:8}
C.dQm.prototype={
$1(d){return J.q(d,"role")==="ai"},
$S:92}
C.dQn.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.D(["role","user","text",this.b],v,v))
w.d.bH(0,A.c0)
w.r=!0},
$S:0}
C.dQo.prototype={
$0(){var w=this.a,v=x.N
w.f.push(B.D(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.dQp.prototype={
$1(d){var w=J.a4(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+B.t(w.h(d,"text"))},
$S:144}
C.dQq.prototype={
$0(){var w=x.N
return this.a.f.push(B.D(["role","ai","text",this.b],w,w))},
$S:0}
C.dQr.prototype={
$0(){var w=x.N
return this.a.f.push(B.D(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.dQs.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dQl.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=B.md(l,A.bB.j(0.9),l,l,l,l,l,2,l,l)
return new B.B(A.c2,B.A(B.a([new B.a8(22,22,k,l),A.av,B.d("Writing full song\u2026",l,l,l,l,l,l,B.l(l,l,this.b?A.aA:A.dx,l,l,l,l,l,l,l,l,12,A.cS,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),A.m,l,A.e,A.j,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?A.a7:A.a1
k=k.c
k.toString
k=B.aG(k,A.bM,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new B.a7(A.a1,A.a7,A.w,B.a([A.az,A.bB.j(0.85)],x.O),l,l)
else{q=x.O
q=new B.a7(A.a1,A.a7,A.w,v?B.a([A.bh,A.M],q):B.a([A.c,A.aN],q),l,l)}p=B.a([new B.a9(0,A.G,(u?A.bB:A.az).j(0.22),A.jl,14)],x.V)
o=B.H(A.c.j(u?0.2:0.08),A.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=A.c
else v=v?A.aJ:A.bg
n=u?13.5:15
m=u?A.bl:A.cS
return new B.bE(t,l,l,B.p(l,B.d(w,l,l,l,l,l,l,B.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?A.a_:A.cn,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),A.i,l,new B.aV(0,k.a.a*0.94,0,1/0),new B.o(l,l,o,new B.bx(A.jJ,A.jJ,new B.b2(s,s),new B.b2(r,r)),p,q,A.n),l,l,l,A.kR,A.iB,l,l,l),l)},
$S:39}
C.dQA.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&B.c()
w=m.x
w===$&&B.c()
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([D.a8x,A.M,A.n5],t):B.a([A.pZ,A.pS,A.oH],t)
w=B.a([new B.a9(-4,A.G,A.az.j(0.35+w*0.25),A.dm,28)],x.V)
r=B.H(A.c.j(u?0.08:0.5),A.r,1)
q=B.df()
p=q.a
p.$flags&2&&B.ah(p)
p[11]=0.001
m=m.x
m===$&&B.c()
q.fk(m*0.08)
q=B.fp(A.C,B.p(o,D.btG,A.i,o,o,new B.o(o,o,B.H(A.aM.j(0.6),A.r,2),o,o,D.dQC,A.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=B.nj(A.j0,D.eQk,new C.dQx())
p=x.p
m=B.a([B.A(B.a([q,A.bb,B.C(B.u(B.a([m,B.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,B.l(o,o,u?A.aP:A.aV,o,o,o,o,o,o,o,o,10,o,o,A.a_,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),A.F,o,A.e,A.j,0,A.p),1)],p),A.m,o,A.e,A.j,0,o,o),A.ac,B.A(B.a([n.ari(D.AT,"Swahili","\ud83c\uddf9\ud83c\uddff",u),A.ab,n.ari(D.azH,"English","\ud83c\uddec\ud83c\udde7",u),A.ab,n.ari(D.AU,"Mix","\ud83d\udd25",u)],p),A.m,o,A.e,A.j,0,o,o)],p)
if(n.x!==D.AU){t=B.a([A.P,n.cmt(u)],p)
if(n.w){q=n.x===D.AT?D.a_s:D.ZL
p=B.S(q).k("I<1,r>")
q=B.z(new B.I(q,new C.dQy(n,u),p),p.k("ai.E"))
t.push(new B.B(A.lj,B.cf(A.bI,q,A.by,6,6),o))}A.d.v(m,t)}else{t=B.a([A.bB.j(0.22),A.az.j(0.12)],t)
q=B.m(12)
p=B.H(A.bB.j(0.45),A.r,1)
m.push(new B.B(A.lj,B.p(o,B.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,B.l(o,o,u?A.i3:A.lc,o,o,o,o,o,o,o,o,10,o,o,A.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),A.i,o,o,new B.o(o,o,p,q,o,new B.a7(A.a1,A.a7,A.w,t,o,o),A.n),o,o,o,o,A.bT,o,o,o),o))}m.push(A.P)
t=x.dc
n=B.z(new B.I(D.cNE,new C.dQz(n,u),t),t.k("ai.E"))
m.push(B.A(n,A.m,o,A.e,A.j,0,o,o))
return B.p(o,B.u(m,A.al,o,A.e,A.j,0,A.p),A.i,o,o,new B.o(o,o,r,v,w,new B.a7(A.ax,A.aE,A.w,s,o,o),A.n),o,o,o,I.ace,I.act,o,o,o)},
$S:90}
C.dQx.prototype={
$1(d){return D.bG1.aB(0,d)},
$S:66}
C.dQy.prototype={
$1(d){return this.a.cmu(d,this.b)},
$S:z+48}
C.dQz.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.azJ?6:0,m=o?5:0,l=B.m(12)
if(o){w=this.b
v=w?A.az.j(0.45):A.az.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=A.x.j(w?0.25:0.05)
u=v
v=w
w=u}t=B.m(12)
p=p.r?q:new C.dQw(p,d)
s=C.hi9(d)
if(o)r=A.c
else r=v?A.ak:A.bg
r=B.d(s,q,q,q,q,q,q,B.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.hia(d)
if(o)v=A.ak
else v=v?A.c1:A.dx
return B.C(new B.B(new B.L(0,0,n,0),B.aD(!1,A.X,!0,l,B.aH(!1,t,!0,new B.B(G.UL,B.u(B.a([r,B.d(s,q,q,q,q,q,q,B.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),A.i,w,m,q,q,q,q,q,A.aa),q),1)},
$S:z+49}
C.dQw.prototype={
$0(){var w=this.a
return w.n(new C.dQv(w,this.b))},
$S:0}
C.dQv.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dQC.prototype={
$0(){var w=this.a
return w.n(new C.dQB(w))},
$S:0}
C.dQB.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dQj.prototype={
$0(){var w=this.a
return w.n(new C.dQi(w,this.b))},
$S:0}
C.dQi.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.AU
if(v===D.azH&&w.Q==null)w.Q=A.d.gI(D.ZL).a},
$S:0}
C.dQD.prototype={
$0(){return this.a.cif(this.b.a)},
$S:0}
C.dQu.prototype={
$0(){return this.a.Hi(this.b)},
$S:0}
C.dQg.prototype={
$1(d){return this.a.aTh()},
$S:2}
C.dQh.prototype={
$0(){return this.a.aTh()},
$S:0}
C.frO.prototype={
$1(d){var w=this
return new C.Xj(w.a,w.b,w.c,new C.frN(w.d),null)},
$S:z+50}
C.frN.prototype={
$0(){return J.ly(this.a.b6())},
$S:0}
C.d59.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.b9P()},
$S:28}
C.d5a.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a.f
m===$&&B.c()
m=m.x
m===$&&B.c()
w=this.b
v=m*3.141592653589793*2+w*0.55
m=this.c
u=x.w
t=B.aG(m,A.bM,u).w
s=Math.cos(v)
u=B.aG(m,A.bM,u).w
m=Math.sin(v*1.3)
r=Math.sin(v)
q=(w&1)===0
p=q?A.dP:A.hc
o=A.o.J(w,4)
q=q?A.aZ:A.aK
return B.an(n,B.d8(B.U(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:299}
C.d5f.prototype={
$0(){},
$S:0}
C.d5e.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&B.c()
w=t.x
w===$&&B.c()
v=A.oB.aq(0,A.k.D(w,0,1))
t=t.x
t===$&&B.c()
t=Math.sin(t*3.141592653589793)
w=B.df()
u=w.a
u.$flags&2&&B.ah(u)
u[11]=0.0028
w.fk(t*0.08)
w.jv(0.12)
return B.e4(A.C,B.fp(A.C,e,null,w,!0),0.5+v*0.5,null,null)},
$S:43}
C.d5b.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&B.c()
r=r.x
r===$&&B.c()
w=0.55+r*0.45
r=B.p(t,t,A.i,t,t,new B.o(t,t,t,t,B.a([new B.a9(6,A.G,A.aZ.j(w*0.5),A.J,36)],x.V),t,A.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new B.am(A.C,t,A.a9,A.q,B.a([r,new B.a8(96,96,B.md(A.c.j(0.08),A.aZ,t,t,t,t,t,6,u/v,t),t),B.d(""+s.a.c,t,t,t,t,t,t,B.l(t,t,A.c,t,t,t,t,t,t,t,t,38,t,t,A.u,t,t,!0,t,t,t,t,t,B.a([new B.cI(A.aZ.j(w),A.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:113}
C.d5c.prototype={
$1(d){return D.bG5.aB(0,d)},
$S:66}
C.d5d.prototype={
$0(){var w=this.a
w.a.b9P()
w.a.e.$0()},
$S:0}
C.c5c.prototype={
$1(d){var w=!1
if(A.a.i(d.b.toLowerCase())===this.a)if(d.d===A.fc)if(d.x===A.dk){w=d.w
w=A.a.i(w==null?"":w)===this.b}return w},
$S:16}
C.c5p.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e_3.prototype={
$0(){return this.a.a.c.d},
$S:78}
C.e_K.prototype={
$1(d){var w=this.a.c
if(w!=null)B.ir(w,null)},
$S:8}
C.e_L.prototype={
$1(d){var w=this.a
if(w.c!=null)w.NL()},
$S:8}
C.e_M.prototype={
$1(d){var w=$.aT.p2$
if(w===A.qU||w===A.qV)return
this.a.Dg()},
$S:14}
C.e_N.prototype={
$1(d){this.a.cos()},
$S:14}
C.e_s.prototype={
$0(){this.a.HL(this.b.d,!1)},
$S:0}
C.e_t.prototype={
$0(){},
$S:0}
C.e_u.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.e_v.prototype={
$0(){},
$S:0}
C.e_w.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e_x.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.e_y.prototype={
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
C.e_n.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=B.bi(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=B.bi(v[1],!0,x.N)
w.N9()
w.a5p()},
$S:0}
C.e_4.prototype={
$0(){this.b.HL(this.c.d+this.a.a,!1)},
$S:0}
C.e_o.prototype={
$1(d){var w=d.d
return(w===A.fc||w===A.eA)&&d.x===A.dk},
$S:16}
C.e_p.prototype={
$1(d){return d.a},
$S:162}
C.e_q.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e_r.prototype={
$0(){},
$S:0}
C.e_8.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=B.bi(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=B.bi(v[0],!0,x.N)},
$S:0}
C.e_9.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.e_h.prototype={
$0(){},
$S:0}
C.e_e.prototype={
$0(){return this.a.a.c.d},
$S:78}
C.e_f.prototype={
$0(){var w=this.a,v=B.z(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e_g.prototype={
$0(){var w=this.a,v=B.z(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e_i.prototype={
$0(){return this.a.z=!0},
$S:0}
C.e_j.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new B.uu(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.e_k.prototype={
$0(){return this.a.z=!1},
$S:0}
C.e_m.prototype={
$0(){var w=this.a
return w.n(new C.e_l(w))},
$S:0}
C.e_l.prototype={
$0(){return this.a.y=1},
$S:0}
C.e_a.prototype={
$0(){return this.a.y=1},
$S:0}
C.e_b.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.e_C.prototype={
$1(d){return d.a.length===0},
$S:16}
C.e_D.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:69}
C.e_H.prototype={
$0(){var w=this.a
return w.n(new C.e_A(w))},
$S:0}
C.e_A.prototype={
$0(){return this.a.y=1},
$S:0}
C.e_I.prototype={
$0(){var w=this.a
return w.n(new C.e_z(w))},
$S:0}
C.e_z.prototype={
$0(){return this.a.y=2},
$S:0}
C.e_J.prototype={
$0(){return B.ir(this.a,null)},
$S:0}
C.e_E.prototype={
$2$cloudRequest(d,e){return this.a.aUj(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1642}
C.e_F.prototype={
$0(){return this.a.Dg()},
$S:1}
C.e_G.prototype={
$0(){var w=this.a
return w.n(new C.e_B(w))},
$S:0}
C.e_B.prototype={
$0(){var w=this.a
return w.y=A.o.D(w.y-1,0,2)},
$S:0}
C.e_7.prototype={
$0(){B.eL()
var w=this.a
w.n(new C.e_6(w))},
$S:0}
C.e_6.prototype={
$0(){return this.a.y=0},
$S:0}
C.e_5.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=B.bzO(B.p(t,t,A.i,t,t,new B.o(t,t,B.H(A.c.j(0.55),A.r,1.2),t,B.a([new B.a9(1,A.G,A.as.j(0.55),A.J,18)],x.V),D.bEj,A.a6),t,t,t,t,t,t,t,t),A.et,A.ru,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=B.a([],w)
for(u=0;u<3;++u)v.push(r.bVo(u))
return new B.am(A.W,t,A.a9,A.q,B.a([q,B.A(v,A.m,t,A.e,A.j,0,t,t)],w),t)},
$S:62}
C.e_d.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
B.eL()
w.n(new C.e_c(w,v))},
$S:0}
C.e_c.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d9l.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===A.fc||v===A.eA)return!0
if(d.c!==0)v=A.a.q(w,"clock-in daily earnings")||A.a.q(w,"clock-in earnings")
else v=!1
return v},
$S:16}
C.d9m.prototype={
$1(d){return new B.N(Date.now(),0,!1)},
$S:694}
C.d9n.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new B.N(Date.now(),0,!1)
u=B.dx(C.fyz(v.c,u))
w=this.c?new C.d9k(v):null
return v.b1a(this.b,A.p7,D.es,w,"Today","$"+u,D.es)},
$S:1644}
C.d9k.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.d9o.prototype={
$2(d,e){var w=this.a
return w.b1a(this.b,A.jd,A.cf,w.w,"Balance","$"+B.dx(B.Ja(w.c.a,new C.d9j(w))),A.cH)},
$S:58}
C.d9j.prototype={
$0(){return this.a.c.d},
$S:78}
C.d9e.prototype={
$0(){this.a.a.cF7()
return null},
$S:0}
C.d9f.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&B.c()
v=v.x
v===$&&B.c()
return B.b1(w,w,w,new C.bqB(v,w),A.at)},
$S:75}
C.d9g.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.b72(v,!0,A.as,D.nN,w)}else{v===$&&B.c()
v=v.x
v===$&&B.c()
v=new C.b71(v,D.nN,w)}return B.b1(w,w,w,v,A.at)},
$S:75}
C.d9h.prototype={
$1(d){return new B.N(Date.now(),0,!1)},
$S:694}
C.d9i.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new B.N(Date.now(),0,!1)
w=r.a
v=w.a.cDY(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:A.k.D(v/u,0,1)}u=w.d
u===$&&B.c()
s=w.e
s===$&&B.c()
return B.c4(new B.h3(B.a([u,s],x.U)),new C.d9d(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1645}
C.d9d.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([],m),k=o.b
if(k)A.d.v(l,B.ih(7,new C.d9c(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&B.c()
v=v.x
v===$&&B.c()
u=o.d
l.push(B.b1(n,n,n,new C.b70(o.c,v,k,u,D.nN,D.b9m,n),D.ecD))
v=B.H(A.c.j(0.1),A.r,1.2)
if(k)t=A.uq
else t=o.e?A.ui:D.boN
t=B.U(t,k?D.nN:A.b9,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=B.d(s,n,n,n,n,n,n,B.l(n,n,A.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+B.dx(w.f&&w.d>0?w.d:o.f)}q=k?D.nN:A.c
w=B.d(w,n,n,n,n,n,n,B.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,A.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=B.m(999)
p=u.j(0.16)
u=B.H(u.j(0.5),A.r,1)
l.push(B.p(n,B.u(B.a([t,A.ar,s,A.aw,w,A.P,B.p(n,B.d(o.r,n,n,n,n,n,n,B.l(n,n,k?D.nN:A.nS,n,n,n,n,n,n,n,n,9,n,n,A.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.i,n,n,new B.o(p,n,u,q,n,n,A.n),n,n,n,n,A.kq,n,n,n)],m),A.m,n,A.b5,A.j,0,A.p),A.i,n,n,new B.o(A.K,n,v,n,n,n,A.a6),n,176,n,n,n,n,n,176))
return B.at(new B.a8(276,276,new B.am(A.C,n,A.a9,A.i,l,n),n),n,n,n)},
$S:219}
C.d9c.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&B.c()
r=r.x
r===$&&B.c()
w=A.k.J(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=A.o.J(d,3)
t=A.o.J(d,2)
return B.an(s,B.ec(B.d8(B.p(s,s,A.i,s,s,new B.o(s,s,s,B.m(40),s,new B.bT(A.C,0.5,A.w,s,0,B.a([D.nN.j(0.38),A.c.j(0.08),A.K],x.O),s,s),A.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),!0,s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:228}
C.d9F.prototype={
$0(){},
$S:0}
C.d9G.prototype={
$0(){},
$S:0}
C.d9H.prototype={
$1(d){return d.x===A.dk},
$S:16}
C.d9r.prototype={
$0(){return this.a.a.d.d},
$S:78}
C.d9q.prototype={
$0(){var w,v
B.eL()
w=this.a
v=this.b
w.n(new C.d9p(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)B.f2(null,x.H)}},
$S:0}
C.d9p.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.d9C.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=B.m(12),q=s?w.b.j(0.18):A.c.j(0.04),p=B.H(s?w.b.j(0.7):A.c.j(0.08),A.r,1)
return B.C(new B.B(A.kr,B.aJ(v,B.de(A.C,B.d("$"+t,v,v,v,v,v,v,B.l(v,v,s?w.b:A.ak,v,v,v,v,v,v,v,v,13,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,A.b7,new B.o(q,v,p,r,v,v,A.n),A.hE,v,38,v,v,v,v,v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.d9E(u,d),v,v,v,v,v,v,!1,A.ae),v),1)},
$S:1647}
C.d9E.prototype={
$0(){B.eL()
var w=this.a
w.n(new C.d9D(w,this.b))},
$S:0}
C.d9D.prototype={
$0(){var w=""+this.b
this.a.d.saR(0,w)
return w},
$S:0}
C.d9B.prototype={
$4$bold$color(d,e,f,g){var w=null,v=B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,A.a_,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?A.c:g,t=f?15:13
return new B.B(A3.UH,B.A(B.a([v,A.bd,B.d(e,w,w,w,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?A.u:A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1648}
C.d9A.prototype={
$1(d){return this.a.n(new C.d9z())},
$S:2}
C.d9z.prototype={
$0(){},
$S:0}
C.d9u.prototype={
$1(d){return this.a.aQn(d)&&!B.fFK(d)},
$S:16}
C.d9v.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:69}
C.d9w.prototype={
$0(){return this.a.a.d.d},
$S:78}
C.d9x.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return B.b(x.r.b(s)?s:B.dR(s,x.H),$async$$0)
case 2:if(t.c!=null)t.n(new C.d9t())
t.ly("Balance refreshed.")
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.d9t.prototype={
$0(){},
$S:0}
C.d9y.prototype={
$0(){var w=this.a
return w.n(new C.d9s(w))},
$S:0}
C.d9s.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fc9.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:69}
C.f76.prototype={
$1(d){var w=J.a4(d),v=w.h(d,"toEmail"),u=!1
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.y(v,this.b)){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fmk.prototype={
$1(d){var w=J.a4(d),v=w.h(d,"toEmail")
if(A.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.f75.prototype={
$1(d){var w,v,u
if(!C.hD1(d,this.a))return!1
w=J.a4(d)
v=w.h(d,"sessionUpdatedAt")
v=B.bf(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=B.bf(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=B.bf(J.k(w==null?"":w))}if(u!=null&&A.o.aj(new B.N(Date.now(),0,!1).bv(u).a,36e8)>72)return!1
return!0},
$S:4}
C.eY9.prototype={
$1(d){var w=this.a
if(A.o.J(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:87}
C.fle.prototype={
$0(){return $.fDt=null},
$S:11}
C.flf.prototype={
$1(d){return B.Y(d,x.N,x.z)},
$S:7}
C.fj9.prototype={
$1(d){return B.Y(d,x.N,x.z)},
$S:7}
C.fja.prototype={
$0(){var w,v=this.a
$.fDh.W(0,v)
w=C.tf(this.b,v)
if(w!=null)B.OK(B.a([B.Y(w,x.N,x.z)],x._),v)},
$S:0}
C.fng.prototype={
$1(d){return new C.Y6(this.a,this.b,null)},
$S:z+55}
C.dUy.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.dUB.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.dUC.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.n(new C.dUA(w))},
$S:2}
C.dUA.prototype={
$0(){return this.a.f=""},
$S:0}
C.dUD.prototype={
$1(d){return this.a.aTw()},
$S:2}
C.dUE.prototype={
$0(){var w=this.a
return w.n(new C.dUz(w,this.b))},
$S:0}
C.dUz.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f6i.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+A.a.aV(d,1)},
$S:13}
C.f6h.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+A.a.aV(d,1)},
$S:13}
C.flv.prototype={
$1(d){var w,v=x.f
if(v.b(d))return B.Y(d,x.N,x.z)
try{v=B.Y(v.a(d.ad()),x.N,x.z)
return v}catch(w){return B.Q(x.N,x.z)}},
$S:12}
C.flw.prototype={
$1(d){return J.cs(d)},
$S:4}
C.ffz.prototype={
$1(d){return d.a!=="send_email"},
$S:314}
C.fkX.prototype={
$1(d){var w=null,v=A.x.j(0.35),u=B.m(10),t=B.H(A.be,A.r,1)
return B.p(A.C,B.d(d,w,w,w,w,w,w,A.jp,w,w,w),A.i,w,w,new B.o(v,w,t,u,w,w,A.n),w,86,w,A.eV,w,w,w,72)},
$S:696}
C.c6R.prototype={
$1(d){return J.k(d)},
$S:17}
C.c6S.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b3(d,new C.c6Q(),x.S)
w=B.z(w,w.$ti.k("ai.E"))
return w}return B.bS(7,0,!1,x.S)},
$S:697}
C.c6Q.prototype={
$1(d){var w
if(B.iw(d))w=d
else{w=B.c3(J.k(d),null)
if(w==null)w=0}return w},
$S:355}
C.c6T.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b3(d,new C.c6P(),x.S)
w=B.z(w,w.$ti.k("ai.E"))
return w}return B.bS(8,0,!1,x.S)},
$S:697}
C.c6P.prototype={
$1(d){var w
if(B.iw(d))w=d
else{w=B.c3(J.k(d),null)
if(w==null)w=0}return w},
$S:355}
C.c6V.prototype={
$1(d){return B.bi(d,!0,x.S)},
$S:573}
C.c6W.prototype={
$1(d){return B.bi(d,!0,x.S)},
$S:573}
C.c6O.prototype={
$1(d){var w=this.a
if(A.o.J(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:87}
C.c6U.prototype={
$2(d,e){return d+e},
$S:76}
C.c6N.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.q(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:76}
C.f7B.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+56}
C.f7v.prototype={
$0(){return this.a.$1(D.ph)},
$S:0}
C.f7w.prototype={
$0(){return this.a.$1(D.ph)},
$S:0}
C.f7x.prototype={
$0(){return this.a.$1(D.ph)},
$S:0}
C.f7y.prototype={
$0(){return this.a.$1(D.ph)},
$S:0}
C.f7z.prototype={
$0(){return this.a.$1(D.ph)},
$S:0}
C.f7A.prototype={
$0(){return this.a.$1(D.ph)},
$S:0}
C.eVE.prototype={
$2(d,e){var w,v,u=this,t=null,s=A.o.aj(e,8),r=A.o.J(e,8),q=A.o.J(s+r,2),p=u.a,o=J.q(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.Tv:D.b_s
if(o===0)w=t
else{w=x.O
w=o===1?B.a([A.c,A.aJ],w):B.a([A.bh,A.x],w)
v=n?A.aM:A.dt
w=B.p(t,t,A.i,t,t,new B.o(t,t,B.H(v,A.r,n?3:1),t,B.a([new B.a9(0,A.G,A.x.j(0.35),A.dF,4)],x.V),new B.bT(A.C,0.5,A.w,t,0,w,t,t),A.a6),t,28,t,t,t,t,t,28)}return B.aJ(t,B.p(t,B.at(w,t,t,t),A.i,q,t,t,t,t,t,t,t,t,t,t),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eVD(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,A.ae)},
$S:73}
C.eVD.prototype={
$0(){var w=this,v=w.a,u=v.cJy(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.ph:D.FO
w.f.$1(v)}},
$S:0}
C.f6r.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new B.a8(u,u,B.ig(!0,v,v,A.z,Q.aHu,new C.f6q(w.a,w.b,w.c,w.d,u),9,v,A.dJ,A.af,!1),v)},
$S:161}
C.f6q.prototype={
$2(d,e){var w=this,v=null,u=B.m(12),t=B.m(12),s=w.a,r=s.at[e],q=r==="X"?A.b3:A.aH
return B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.at(B.d(r,v,v,v,v,v,v,B.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.f6p(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),A.i,A.fm,0,v,v,v,v,v,A.aa)},
$S:74}
C.f6p.prototype={
$0(){var w=this,v=w.a.cJz(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.eV5.prototype={
$1(d){return new B.B(A.kr,C.fj0(d,!1),null)},
$S:265}
C.eV6.prototype={
$1(d){return C.fj0(d,!1)},
$S:1652}
C.eV7.prototype={
$0(){var w=this,v=w.a
v.cue(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.eV8.prototype={
$0(){var w=this
w.a.cuf(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.f3I.prototype={
$1(d){var w=this,v=null,u=d*6
return B.od(v,A.bh,B.d(""+u,v,v,v,v,v,v,A.cb,v,v,v),A.dj,new C.f3H(w.a,w.b,u,w.c,w.d),v,new B.ay(A.c.j(0.2),1,A.r,-1),v)},
$S:1653}
C.f3H.prototype={
$0(){var w=this,v=w.a,u=w.b.aE(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.f5A.prototype={
$1(d){return D.cR2[d]},
$S:86}
C.f5B.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=B.a([s.aE(6),s.aE(6),s.aE(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.f2s.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.f2t.prototype={
$0(){var w=this,v=w.a
if(w.b.ah()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.eW5.prototype={
$0(){var w=this,v=w.a.czF(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.eW4.prototype={
$1(d){var w,v=null,u=J.q(this.a.fr[5-d],this.b)
if(u===0)w=A.lN
else w=u===1?A.dy:A.qt
return new B.fZ(1,B.p(v,v,A.i,v,v,new B.o(w,v,B.H(A.bG,A.r,1),v,v,v,A.a6),v,v,v,A.mw,v,v,v,v),v)},
$S:1654}
C.f2F.prototype={
$1(d){var w=this
if(w.a.b4w(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.f2G.prototype={
$0(){var w=this
if(w.a.b4w(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.eVy.prototype={
$0(){var w=this
if(w.a.ah()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fbi.prototype={
$1(d){var w=J.q(d,"email")
return A.a.q(A.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fbj.prototype={
$1(d){var w,v=J.a4(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=A.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+A.a.i(J.k(v==null?"":v))+">"},
$S:49}
C.eo6.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aGS.prototype
w.bmP=w.Z
w.bmO=w.p
w=C.aGT.prototype
w.bmR=w.Z
w.bmQ=w.p
w=C.aGU.prototype
w.bmT=w.Z
w.bmS=w.p
w=C.aHP.prototype
w.bnQ=w.Z
w.bnP=w.p
w=C.aHp.prototype
w.bnp=w.p
w=C.aHY.prototype
w.bnZ=w.p
w=C.aGV.prototype
w.bmU=w.p
w=C.aI5.prototype
w.bo7=w.p
w=C.aH_.prototype
w.bmZ=w.p
w=C.aHf.prototype
w.bnf=w.p
w=C.aIL.prototype
w.boN=w.p})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.awS.prototype,"gbHZ","bI_",20)
v(q,"gaN_","aN0",1)
v(C.awR.prototype,"gclw","a_m",1)
v(q=C.awT.prototype,"gbNi","bNj",1)
v(q,"gbxO","bxP",1)
v(q=C.au7.prototype,"gceU","ceV",1)
v(q,"gc3R","Ob",0)
v(q,"gcpe","cpf",1)
v(q,"gchN","mq",0)
w(q,"gc81","c82",24)
w(q,"gcnF","PQ",32)
v(q=C.ayW.prototype,"gbG9","V8",0)
v(q,"gbVX","Wx",0)
v(q,"gbVU","Ww",0)
v(q,"gbVV","a9W",0)
v(q,"gbVW","Nc",0)
v(C.awh.prototype,"gbVY","bVZ",1)
u(C,"hK3","hgp",57)
t(C,"fFR",0,null,["$1","$0"],["h_7",function(){return C.h_7(null)}],3,0)
t(C,"byj",0,null,["$1","$0"],["h_6",function(){return C.h_6(null)}],3,0)
v(C.L2.prototype,"gD0","c16",1)
v(C.azH.prototype,"gcfa","zD",0)
v(q=C.azY.prototype,"gc49","Od",0)
v(q,"gc8J","YD",0)
v(q,"gbYF","bYG",1)
v(q=C.aA9.prototype,"gbYK","aaK",0)
v(q,"gbrK","a5f",0)
v(q,"gcfm","ZA",0)
s(q,"gc1B","c1C",34)
v(C.aC_.prototype,"gbs9","a5h",1)
v(q=C.aBZ.prototype,"gbYJ","aaJ",0)
v(q,"gc38","abF",0)
v(q=C.aAb.prototype,"gbQW","a8N",0)
v(q,"gbQY","VK",0)
v(q,"gbQX","a8O",0)
v(q=C.aAa.prototype,"gbur","bus",1)
v(q,"gbut","buu",1)
v(C.aAc.prototype,"gbzZ","bA_",1)
v(C.axc.prototype,"gbYM","bYN",1)
v(q=C.aAy.prototype,"gaTq","bZ2",1)
r(q,"gaUh",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["abj","ati","aUj","aUi"],51,0,0)
r(q,"gc0P",0,4,null,["$4"],["c0Q"],52,0,0)
v(q,"gc2T","XR",0)
v(q,"gc3I","abM",0)
v(q,"gc3E","abK",0)
v(q,"gbTK","a9y",0)
w(C.axW.prototype,"gbSA","bSB",53)
w(q=C.axY.prototype,"gcmz","cmA",54)
v(q,"gcln","clo",1)
v(q,"gcsE","csF",1)
v(C.aAl.prototype,"gbZn","aTw",1)
v(C.aB3.prototype,"gaTT","at6",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.jj,[C.ckE,C.ckB,C.ckC,C.ckD,C.ckA,C.eJE,C.eJC,C.eJG,C.eJD,C.f10,C.d1D,C.d1O,C.d1W,C.d1X,C.d1Z,C.d1R,C.d1P,C.d1Q,C.d1S,C.d1T,C.d1J,C.d1K,C.d1I,C.d1M,C.d1N,C.d1G,C.d1F,C.d20,C.d23,C.dEN,C.dEM,C.dEO,C.dEL,C.dEK,C.d1x,C.d1A,C.d1B,C.d1z,C.d1y,C.d3p,C.d3q,C.d3r,C.d2F,C.d2G,C.d39,C.d2V,C.d2W,C.d2X,C.d2Y,C.d2Z,C.d27,C.d2E,C.d3a,C.d3j,C.d37,C.d36,C.d2C,C.d2D,C.d3f,C.d3g,C.d29,C.d2a,C.d2O,C.d2P,C.d2Q,C.d2N,C.d3_,C.d30,C.d31,C.d32,C.d33,C.d34,C.d3d,C.d2R,C.d2S,C.d2T,C.d2U,C.d3h,C.d3i,C.d2b,C.d2c,C.d2d,C.d2e,C.d3b,C.d3c,C.d2M,C.d35,C.d2K,C.d3k,C.d3l,C.d3m,C.d2H,C.d2q,C.d2p,C.d2o,C.d2u,C.d2n,C.d2l,C.d2g,C.d2j,C.d2f,C.d2z,C.d2A,C.d2h,C.d6E,C.cv3,C.cuU,C.cuV,C.cvd,C.cva,C.cvb,C.cvc,C.cv5,C.cv4,C.cuW,C.cv6,C.cvw,C.cvs,C.cvr,C.cv1,C.cv2,C.cuZ,C.cv9,C.cvh,C.cvi,C.cvj,C.cvk,C.cvl,C.cvm,C.cvn,C.cvI,C.cvB,C.cvy,C.cvD,C.cvA,C.cvx,C.cuX,C.cvu,C.dn4,C.dn5,C.dmW,C.dmU,C.dn3,C.dmT,C.dmS,C.dmV,C.dn_,C.dn0,C.dmY,C.dmZ,C.dn6,C.dn7,C.dn8,C.dn9,C.eDA,C.eDB,C.cXW,C.fc3,C.dtv,C.dtn,C.dtp,C.dtt,C.dto,C.dtq,C.dtr,C.fiZ,C.fiY,C.dmH,C.dmG,C.dmI,C.dmF,C.dLy,C.dLz,C.dLG,C.fr1,C.fr2,C.bUe,C.dET,C.dEU,C.dEV,C.dEW,C.dEX,C.dEY,C.dES,C.dEZ,C.dER,C.dF1,C.dF0,C.dF_,C.dM_,C.dM0,C.dLY,C.dLX,C.dLZ,C.dLV,C.dPz,C.dPA,C.dPi,C.dPk,C.dPw,C.dPx,C.dPr,C.dPp,C.dPv,C.dPs,C.dPm,C.dPl,C.dPB,C.cE7,C.cE5,C.cE6,C.cE4,C.cEa,C.cEb,C.eyG,C.eyL,C.eyI,C.eyK,C.eyJ,C.eyC,C.eyB,C.eyE,C.eyD,C.dPW,C.dQ0,C.dPX,C.dPY,C.dQ_,C.dQ5,C.dQ6,C.dQ7,C.dQ8,C.dQ9,C.dQa,C.dQb,C.dQc,C.dQ4,C.dQd,C.dQ3,C.dQ2,C.dQ1,C.dPP,C.dPQ,C.dPH,C.dPI,C.dPJ,C.dPL,C.cxP,C.d7y,C.d7A,C.d7z,C.dQt,C.dQn,C.dQo,C.dQq,C.dQr,C.dQs,C.dQw,C.dQv,C.dQC,C.dQB,C.dQj,C.dQi,C.dQD,C.dQu,C.dQh,C.frN,C.d5f,C.d5d,C.e_3,C.e_s,C.e_t,C.e_u,C.e_v,C.e_x,C.e_y,C.e_n,C.e_4,C.e_r,C.e_8,C.e_9,C.e_h,C.e_e,C.e_f,C.e_g,C.e_i,C.e_j,C.e_k,C.e_m,C.e_l,C.e_a,C.e_b,C.e_H,C.e_A,C.e_I,C.e_z,C.e_J,C.e_F,C.e_G,C.e_B,C.e_7,C.e_6,C.e_d,C.e_c,C.d9k,C.d9j,C.d9e,C.d9F,C.d9G,C.d9r,C.d9q,C.d9p,C.d9E,C.d9D,C.d9z,C.d9w,C.d9x,C.d9t,C.d9y,C.d9s,C.fle,C.fja,C.dUy,C.dUB,C.dUA,C.dUE,C.dUz,C.f7v,C.f7w,C.f7x,C.f7y,C.f7z,C.f7A,C.eVD,C.f6p,C.eV7,C.eV8,C.f3H,C.f5B,C.f2t,C.eW5,C.f2G,C.eVy,C.eo6])
u(B.i2,[C.ckF,C.eJF,C.ffO,C.ffI,C.f0Y,C.f0X,C.f1_,C.d25,C.d26,C.d1V,C.d1U,C.d1Y,C.d1H,C.d1L,C.d2_,C.dEQ,C.d1C,C.d3s,C.d3t,C.d3u,C.d3v,C.d3w,C.d38,C.d3e,C.d28,C.d3o,C.d3n,C.d2r,C.d2s,C.d2t,C.d2v,C.d2x,C.d6F,C.cvJ,C.cv8,C.cv7,C.cvq,C.cvt,C.cvp,C.cv_,C.cvg,C.cve,C.cvv,C.cvf,C.cvE,C.cvC,C.cvH,C.bSX,C.bSW,C.bSZ,C.bSY,C.dn2,C.dn1,C.dmX,C.dna,C.dnb,C.f4f,C.f5s,C.cXX,C.cXV,C.bTI,C.fc2,C.dtw,C.dtu,C.f6b,C.fiX,C.c23,C.c22,C.c2v,C.dLw,C.dLx,C.fep,C.fec,C.feb,C.f2w,C.c2I,C.c2J,C.c2K,C.c2H,C.c2G,C.f0I,C.fqY,C.fqZ,C.fr_,C.fr0,C.fqX,C.dLD,C.dLE,C.dLC,C.fr3,C.d3x,C.c4i,C.f_I,C.dF2,C.dLW,C.c39,C.c36,C.c38,C.c3b,C.bWC,C.bWA,C.bWF,C.c3i,C.c3h,C.c3g,C.c3f,C.c3k,C.c3m,C.dPF,C.dPj,C.dPh,C.dPy,C.dPq,C.dPu,C.dPt,C.dPo,C.dPD,C.dPC,C.cE8,C.cE9,C.eyH,C.eyA,C.eyF,C.c3c,C.fg6,C.dQf,C.dPZ,C.dPS,C.dPT,C.dPU,C.dPV,C.dQe,C.c3e,C.cxQ,C.cxR,C.f_s,C.dQk,C.dQm,C.dQp,C.dQx,C.dQy,C.dQz,C.dQg,C.frO,C.d59,C.d5c,C.c5c,C.c5p,C.e_K,C.e_L,C.e_M,C.e_N,C.e_w,C.e_o,C.e_p,C.e_q,C.e_C,C.e_E,C.d9l,C.d9m,C.d9h,C.d9c,C.d9H,C.d9C,C.d9B,C.d9A,C.d9u,C.f76,C.fmk,C.f75,C.eY9,C.flf,C.fj9,C.fng,C.dUC,C.dUD,C.f6i,C.f6h,C.flv,C.flw,C.ffz,C.fkX,C.c6R,C.c6S,C.c6Q,C.c6T,C.c6P,C.c6V,C.c6W,C.c6O,C.f7B,C.eV5,C.eV6,C.f3I,C.f5A,C.f2s,C.eW4,C.f2F,C.fbi,C.fbj])
t(C.bmP,B.j_)
u(B.ae,[C.DI,C.ai8,C.azG,C.ai7,C.ai9,C.aj1,C.afn,C.akz,C.XN,C.XO,C.WV,C.al3,C.aky,C.Ly,C.awU,C.am0,C.amD,C.T9,C.Nq,C.Yz,C.Yy,C.Ta,C.amW,C.axK,C.amZ,C.Xj,C.anv,C.axV,C.axX,C.Y6,C.aoI])
u(B.ag,[C.aEu,C.aGT,C.aHP,C.aGS,C.aGU,C.bcg,C.au7,C.ayW,C.beF,C.beG,C.awh,C.beM,C.aHp,C.aHY,C.aGV,C.azH,C.azY,C.aA9,C.b6y,C.aC_,C.aBZ,C.aAb,C.aAa,C.bcu,C.aI5,C.aH_,C.bsu,C.aHf,C.axY,C.aAl,C.aIL])
u(B.kw,[C.eJH,C.f0Z,C.d1E,C.d24,C.d22,C.d21,C.dEP,C.d2L,C.d2J,C.d2I,C.d2m,C.d2w,C.d2k,C.d2y,C.d2i,C.d2B,C.cvo,C.cv0,C.cvz,C.cvG,C.cvF,C.cuY,C.cXU,C.dts,C.f6c,C.f6d,C.dLA,C.ffJ,C.fqW,C.dLF,C.dLI,C.dLH,C.d3y,C.c4j,C.c3a,C.c37,C.bWD,C.bWB,C.c3l,C.dPG,C.dPn,C.dPE,C.eyN,C.eyM,C.dPR,C.dPK,C.dPM,C.dPO,C.dPN,C.dQl,C.dQA,C.d5a,C.d5e,C.d5b,C.e_D,C.e_5,C.d9n,C.d9o,C.d9f,C.d9g,C.d9i,C.d9d,C.d9v,C.fc9,C.c6U,C.c6N,C.eVE,C.f6r,C.f6q])
t(C.asm,C.DI)
u(B.aC,[C.o_,C.ab3,C.L2,C.GO,C.qG,C.qH,C.lf,C.i7,C.hU,C.b4L,C.cVA,C.d7x,C.qM,C.Tb,C.LL,C.pj,C.aWc,C.ow,C.anP])
t(C.awS,C.aGT)
t(C.bf4,C.aHP)
t(C.awR,C.aGS)
t(C.awT,C.aGU)
u(B.m7,[C.TS,C.axL,C.anH,C.GT,C.D6])
u(B.ar,[C.Z6,C.bnj,C.abP,C.NZ,C.Lq,C.amy,C.aaE,C.aaD,C.aX1,C.axJ,C.a9c,C.aWz,C.a94,C.axW])
t(C.beD,C.aHp)
t(C.bfg,C.aHY)
t(C.bb_,C.aGV)
t(C.aAc,C.aI5)
t(C.axc,C.aH_)
t(C.aAy,C.bsu)
t(C.bdd,C.aHf)
u(B.n1,[C.b72,C.b71,C.b70,C.b6t,C.bqB,C.blI])
t(C.aB3,C.aIL)
w(C.aGS,C.L2)
w(C.aGT,C.L2)
w(C.aGU,C.L2)
w(C.aHP,C.L2)
w(C.aHp,B.eH)
w(C.aHY,B.ca)
w(C.aGV,B.ca)
w(C.aI5,B.ca)
w(C.aH_,B.eH)
w(C.aHf,B.eH)
v(C.bsu,B.eu)
w(C.aIL,B.ca)})()
B.ka(b.typeUniverse,JSON.parse('{"bmP":{"j_":[]},"DI":{"ae":[],"r":[]},"aEu":{"ag":["DI<1,2>"]},"asm":{"DI":["1","hs<1>"],"ae":[],"r":[],"DI.T":"1","DI.S":"hs<1>"},"ai8":{"ae":[],"r":[]},"azG":{"ae":[],"r":[]},"ai7":{"ae":[],"r":[]},"ai9":{"ae":[],"r":[]},"aj1":{"ae":[],"r":[]},"afn":{"ae":[],"r":[]},"awS":{"ag":["ai8"]},"bf4":{"ag":["azG"]},"awR":{"ag":["ai7"]},"awT":{"ag":["ai9"]},"bcg":{"ag":["aj1"]},"au7":{"ag":["afn"]},"akz":{"ae":[],"r":[]},"XN":{"ae":[],"r":[]},"XO":{"ae":[],"r":[]},"abP":{"ar":[],"r":[]},"WV":{"ae":[],"r":[]},"ayW":{"ag":["akz"]},"Z6":{"ar":[],"r":[]},"bnj":{"ar":[],"r":[]},"beF":{"ag":["XN"]},"beG":{"ag":["XO"]},"NZ":{"ar":[],"r":[]},"awh":{"ag":["WV"]},"al3":{"ae":[],"r":[]},"beM":{"ag":["al3"]},"aky":{"ae":[],"r":[]},"beD":{"ag":["aky"]},"Lq":{"ar":[],"r":[]},"amy":{"ar":[],"r":[]},"Ly":{"ae":[],"r":[]},"bfg":{"ag":["Ly"]},"aaE":{"ar":[],"r":[]},"aaD":{"ar":[],"r":[]},"awU":{"ae":[],"r":[]},"bb_":{"ag":["awU"]},"aX1":{"ar":[],"r":[]},"am0":{"ae":[],"r":[]},"azH":{"ag":["am0"]},"amD":{"ae":[],"r":[]},"azY":{"ag":["amD"]},"T9":{"ae":[],"r":[]},"Nq":{"ae":[],"r":[]},"Yz":{"ae":[],"r":[]},"Yy":{"ae":[],"r":[]},"aA9":{"ag":["T9"]},"b6y":{"ag":["Nq"]},"aC_":{"ag":["Yz"]},"aBZ":{"ag":["Yy"]},"Ta":{"ae":[],"r":[]},"aAb":{"ag":["Ta"]},"amW":{"ae":[],"r":[]},"a9c":{"ar":[],"r":[]},"a94":{"ar":[],"r":[]},"axK":{"ae":[],"r":[]},"aAa":{"ag":["amW"]},"axJ":{"ar":[],"r":[]},"aWz":{"ar":[],"r":[]},"bcu":{"ag":["axK"]},"amZ":{"ae":[],"r":[]},"aAc":{"ag":["amZ"]},"Xj":{"ae":[],"r":[]},"axc":{"ag":["Xj"]},"anv":{"ae":[],"r":[]},"axV":{"ae":[],"r":[]},"axX":{"ae":[],"r":[]},"aAy":{"ag":["anv"],"eu":[]},"axW":{"ar":[],"r":[]},"bdd":{"ag":["axV"]},"b72":{"aA":[]},"b71":{"aA":[]},"b70":{"aA":[]},"axY":{"ag":["axX"]},"b6t":{"aA":[]},"bqB":{"aA":[]},"Y6":{"ae":[],"r":[]},"aAl":{"ag":["Y6"]},"blI":{"aA":[]},"aoI":{"ae":[],"r":[]},"aB3":{"ag":["aoI"]}}'))
B.O9(b.typeUniverse,JSON.parse('{"L2":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=B.az
return{dw:w("nB<x?>"),gS:w("nC"),o:w("cP"),g5:w("w4"),M:w("fd<n>"),k:w("N"),gv:w("kT<al<iU>>"),gh:w("kT<n>"),gH:w("kT<G>"),r:w("av<~>"),dk:w("a_"),fw:w("M<nC>"),E:w("M<cP>"),V:w("M<a9>"),O:w("M<x>"),A:w("M<a_>"),R:w("M<mJ>"),B:w("M<al<G>>"),m:w("M<a0<n,n>>"),_:w("M<a0<n,@>>"),b:w("M<qG>"),x:w("M<qH>"),gi:w("M<iU>"),a:w("M<lf>"),Y:w("M<hU>"),v:w("M<i7>"),dA:w("M<GO>"),F:w("M<qM>"),Z:w("M<k7>"),g:w("M<hw>"),gK:w("M<+at,details,id(N,n,n)>"),C:w("M<cI>"),s:w("M<n>"),G:w("M<j_>"),eO:w("M<eE>"),d9:w("M<ey>"),p:w("M<r>"),n:w("M<P>"),t:w("M<G>"),U:w("M<aA?>"),d4:w("M<n?>"),ck:w("al<qG>"),e:w("al<qH>"),ac:w("al<iU>"),dZ:w("al<lf>"),I:w("al<hU>"),j:w("al<@>"),L:w("al<G>"),eq:w("a0<n,n>"),P:w("a0<n,@>"),f:w("a0<@,@>"),cl:w("cQ<n,B>"),aS:w("I<a_,rx>"),dc:w("I<GT,bI>"),dv:w("I<n,n>"),bL:w("I<P,bI>"),a3:w("I<G,bI>"),gN:w("I<G,p7>"),w:w("iA"),b1:w("qG"),Q:w("qH"),bP:w("lf"),i:w("hU"),u:w("i7"),gp:w("Tb"),J:w("LL"),D:w("pj"),an:w("k7"),c:w("cu"),K:w("aC"),d:w("ja<n>"),di:w("+outcome,snapshot(TS,a3w?)"),ee:w("+after,before(P,P)"),et:w("+categories,error,message,replaceId(al<hU>,n?,n?,n?)"),cz:w("Dw"),bJ:w("dt<n>"),N:w("n"),e7:w("bm<P>"),W:w("cv<n>"),am:w("jZ<G>"),cc:w("a3<n>"),aM:w("e2<cP>"),bG:w("e2<P>"),l:w("r"),gm:w("o_"),ec:w("ab3"),q:w("mu"),y:w("R"),gR:w("P"),z:w("@"),S:w("G"),eG:w("cP?"),cJ:w("N?"),gw:w("al<a0<n,@>>?"),bM:w("al<@>?"),h:w("a0<n,@>?"),X:w("aC?"),gE:w("+code,qrPayload(n,n)?"),bY:w("+isLive,ownerEmail,snapshotJson(R,n,n)?"),T:w("n?"),cD:w("P?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aOA=new B.bx(A.bA,A.jK,A.bA,A.jK)
D.es=new B.x(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,A.t)
D.aP3=new B.ay(D.es,1,A.r,-1)
D.aP5=new B.ay(A.ak,2,A.r,-1)
D.aP8=new B.ay(A.aR,2,A.r,-1)
D.aPa=new B.ay(A.ct,0.8,A.r,-1)
D.aPq=new B.ay(A.aM,2,A.r,-1)
D.aPx=new B.ay(A.f4,1.6,A.r,-1)
D.aQj=new B.aV(0,330,0,1/0)
D.aQp=new B.aV(0,176,0,1/0)
D.aQq=new B.aV(0,1/0,0,260)
D.aQH=new B.aV(90,1/0,0,1/0)
D.aTo=new B.a9(0,A.G,A.dt,A.J,4)
D.cAw=w([D.aTo],x.V)
D.aQV=new B.o(A.c,null,null,null,D.cAw,null,A.a6)
D.cv9=w([D.es,A.aW],x.O)
D.bH1=new B.a7(A.a1,A.a7,A.w,D.cv9,null,null)
D.aR9=new B.o(null,null,null,null,null,D.bH1,A.a6)
D.aRe=new B.o(A.bq,null,null,null,null,null,A.a6)
D.b1l=new B.x(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,A.t)
D.cOo=w([P.a8e,D.b1l],x.O)
D.bGb=new B.a7(A.b4,A.bc,A.w,D.cOo,null,null)
D.aRu=new B.o(null,null,null,A.mX,null,D.bGb,A.n)
D.b75=new B.x(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,A.t)
D.cY3=w([D.b75,M.a9X],x.O)
D.bFr=new B.a7(A.b4,A.bc,A.w,D.cY3,null,null)
D.aRS=new B.o(null,null,null,A.pI,null,D.bFr,A.n)
D.cKH=w([A.az,A.bB],x.O)
D.bFU=new B.a7(A.a1,A.a7,A.w,D.cKH,null,null)
D.aRX=new B.o(null,null,null,null,null,D.bFU,A.a6)
D.eqd=new B.F(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIh=new B.w("\ud83c\udf89",null,D.eqd,null,null,null,null,null,null,null,null,null)
D.aX1=new B.cw(A.C,null,null,D.eIh,null)
D.aYj=new B.x(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,A.t)
D.a7J=new B.x(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,A.t)
D.b_s=new B.x(1,0.8431372549019608,0.8,0.7843137254901961,A.t)
D.b_w=new B.x(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,A.t)
D.nN=new B.x(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,A.t)
D.r8=new B.x(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,A.t)
D.a8x=new B.x(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,A.t)
D.b14=new B.x(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,A.t)
D.Ta=new B.x(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,A.t)
D.vP=new B.x(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,A.t)
D.b2d=new B.x(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,A.t)
D.Tv=new B.x(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,A.t)
D.a9H=new B.x(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,A.t)
D.b5w=new B.x(1,0.9529411764705882,0.9411764705882353,1,A.t)
D.b5C=new B.x(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,A.t)
D.aa0=new B.x(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,A.t)
D.aaf=new B.x(1,0,0.8392156862745098,0.30980392156862746,A.t)
D.aag=new B.x(1,1,0.9529411764705882,0.6901960784313725,A.t)
D.b6H=new B.x(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,A.t)
D.b6L=new B.x(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,A.t)
D.b7w=new B.x(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,A.t)
D.TS=new B.x(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,A.t)
D.b8l=new B.x(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,A.t)
D.b8N=new B.x(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,A.t)
D.TY=new B.x(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,A.t)
D.b9m=new B.x(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,A.t)
D.bAO=new B.ac(A.o7,20,A.c,null,null,null)
D.eBH=new B.w("PLAY",null,A.aK3,null,null,null,null,null,null,null,null,null)
D.bYD=w([D.bAO,A.bw,D.eBH],x.p)
D.bad=new B.fs(A.af,A.e,A.R,A.m,null,A.p,null,0,D.bYD,null)
D.abd=new B.a1w(2,"active")
D.bcn=new B.b6(42e5)
D.bcq=new B.b6(53e4)
D.bcs=new B.b6(58e4)
D.bcw=new B.b6(82e4)
D.bdj=new B.L(0,30,0,30)
D.bdr=new B.L(0,4,0,8)
D.bdu=new B.L(0,8,12,8)
D.be5=new B.L(12,0,12,88)
D.bec=new B.L(12,11,12,10)
D.bey=new B.L(13,10,12,10)
D.beB=new B.L(13,8,13,8)
D.UW=new B.L(14,0,14,8)
D.beH=new B.L(14,10,14,2)
D.beS=new B.L(14,14,10,14)
D.bfk=new B.L(16,12,16,96)
D.bfp=new B.L(16,14,16,8)
D.bft=new B.L(16,16,16,96)
D.bfv=new B.L(16,18,16,16)
D.bfz=new B.L(16,4,16,10)
D.bgt=new B.L(18,6,18,40)
D.bgv=new B.L(18,8,18,130)
D.bgH=new B.L(20,10,20,20)
D.bgU=new B.L(20,18,20,18)
D.bgY=new B.L(20,20,20,22)
D.bhU=new B.L(2,0,2,10)
D.biB=new B.L(4,8,12,4)
D.biN=new B.L(6,1,6,1)
D.biP=new B.L(6,4,0,0)
D.biS=new B.L(6,6,12,4)
D.bjb=new B.L(8,4,12,8)
D.eLt=new B.w("Activity",null,A.fS,null,null,null,null,null,null,null,null,null)
D.bkJ=new B.bI(1,A.bt,D.eLt,null)
D.eSZ=new B.w("Game Receipts",null,A_.GN,null,null,null,null,null,null,null,null,null)
D.esf=new B.F(!0,A.aP,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIT=new B.w("Every game you play \xb7 kept for good",null,D.esf,null,null,null,null,null,null,null,null,null)
D.cQp=w([D.eSZ,D.eIT],x.p)
D.ba1=new B.fs(A.af,A.e,A.j,A.F,null,A.p,null,0,D.cQp,null)
D.bkQ=new B.bI(1,A.bt,D.ba1,null)
D.bmz=new B.a_(58607,"MaterialIcons",!1)
D.WL=new B.a_(62178,"MaterialIcons",!1)
D.bno=new B.a_(62410,"MaterialIcons",!1)
D.boz=new B.a_(63258,"MaterialIcons",!1)
D.boF=new B.a_(63304,"MaterialIcons",!1)
D.boG=new B.a_(63306,"MaterialIcons",!1)
D.boN=new B.a_(63330,"MaterialIcons",!1)
D.ahd=new B.a_(984777,"MaterialIcons",!1)
D.brj=new B.ac(A.DW,13,A.ak,null,null,null)
D.brr=new B.ac(A.jC,13,A.oO,null,null,null)
D.ahm=new B.ac(A.lo,null,A.c,null,null,null)
D.btx=new B.ac(A.E1,19,A.c,null,null,null)
D.bnJ=new B.a_(62804,"MaterialIcons",!1)
D.btG=new B.ac(D.bnJ,24,A.aM,null,null,null)
D.bu7=new B.ac(A.zQ,28,A.bf,null,null,null)
D.buz=new B.ac(A.agR,42,A.c,null,null,null)
D.buI=new B.ac(A.XI,30,A.c,null,null,null)
D.bvi=new B.ac(A.fv,null,A.c,null,null,null)
D.bvD=new B.ac(A.jC,16,A.c,null,null,null)
D.bwd=new B.ac(A.qf,13,A.c,null,null,null)
D.bwm=new B.ac(A.lo,18,A.c,null,null,null)
D.bwS=new B.ac(A.uh,null,A.dy,null,null,null)
D.bxs=new B.ac(A.o7,28,A.c,null,null,null)
D.bxG=new B.ac(A.lW,22,null,null,null,null)
D.by1=new B.ac(A.qd,null,null,null,null,null)
D.bye=new B.ac(A.cu,null,A.aP,null,null,null)
D.byl=new B.ac(A.Ws,14,A.c,null,null,null)
D.byQ=new B.ac(A.KR,36,A.aK,null,null,null)
D.byX=new B.ac(A.o8,16,A.c,null,null,null)
D.bzb=new B.ac(A.ei,null,null,null,null,null)
D.b1F=new B.x(1,0.23137254901960785,0.16470588235294117,0,A.t)
D.bzL=new B.ac(A.dP,9,D.b1F,null,null,null)
D.bpE=new B.a_(983146,"MaterialIcons",!1)
D.bA0=new B.ac(D.bpE,null,A.aM,null,null,null)
D.bAv=new B.ac(A.wE,28,D.es,null,null,null)
D.bAA=new B.ac(A.uk,null,A.f4,null,null,null)
D.bAF=new B.ac(A.hG,20,D.es,null,null,null)
D.bq_=new B.a_(983377,"MaterialIcons",!1)
D.bAQ=new B.ac(D.bq_,64,A.c,null,null,null)
D.bBi=new B.ac(A.fP,24,A.c,null,null,null)
D.bCd=new B.dZ(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bCo=new B.dZ(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bCC=new B.dZ(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bCD=new B.dZ(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.b08=new B.x(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,A.t)
D.b2v=new B.x(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,A.t)
D.b2e=new B.x(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,A.t)
D.cOE=w([D.b08,D.b2v,D.b2e],x.O)
D.bDx=new B.a7(A.ax,A.aE,A.w,D.cOE,null,null)
D.cSP=w([A.br,A.aW],x.O)
D.bDP=new B.a7(A.ax,A.aE,A.w,D.cSP,null,null)
D.b1g=new B.x(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,A.t)
D.b6_=new B.x(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,A.t)
D.cAW=w([D.b1g,D.b6_],x.O)
D.bDU=new B.a7(A.ax,A.aE,A.w,D.cAW,null,null)
D.cQ_=w([A.bh,A.M,A.eI],x.O)
D.bE0=new B.a7(A.ax,A.aE,A.w,D.cQ_,null,null)
D.bE2=new B.a7(A.a1,A.a7,A.w,F.aou,null,null)
D.cAp=w([A.f4,A.cf],x.O)
D.aj3=new B.a7(A.a1,A.a7,A.w,D.cAp,null,null)
D.cAI=w([A.f4,A.bB],x.O)
D.aj4=new B.a7(A.a1,A.a7,A.w,D.cAI,null,null)
D.as_=w([D.nN,A.as,A.bQ],x.O)
D.bEj=new B.a7(A.ax,A.aE,A.w,D.as_,null,null)
D.aNq=new B.d4(-0.8,-1)
D.aNs=new B.d4(1.2,1)
D.cxN=w([A.c,A.eo,A.j7,A.c,A.ho,A.b3,A.mh],x.O)
D.cPv=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.bEp=new B.a7(D.aNq,D.aNs,A.w,D.cxN,D.cPv,null)
D.bEC=new B.a7(A.a1,A.a7,A.w,F.aph,null,null)
D.b5W=new B.x(1,0,0.7607843137254902,0.26666666666666666,A.t)
D.b45=new B.x(1,0,0.6392156862745098,0.22745098039215686,A.t)
D.cOD=w([D.b5W,D.b45],x.O)
D.bEO=new B.a7(A.a1,A.a7,A.w,D.cOD,null,null)
D.bER=new B.a7(A.ax,A.aE,A.w,A.Nn,null,null)
D.cJQ=w([E.TV,A.vS],x.O)
D.bET=new B.a7(A.a1,A.a7,A.w,D.cJQ,null,null)
D.cNA=w([A.fM,A.ff],x.O)
D.aj9=new B.a7(A.a1,A.a7,A.w,D.cNA,null,null)
D.cSq=w([A.bq,A.bU],x.O)
D.aja=new B.a7(A.a1,A.a7,A.w,D.cSq,null,null)
D.cj7=w([A.dG,A.fo],x.O)
D.bFt=new B.a7(A.ax,A.aE,A.w,D.cj7,null,null)
D.cwV=w([A.c,A.b8],x.O)
D.bFC=new B.a7(A.a1,A.a7,A.w,D.cwV,null,null)
D.a9j=new B.x(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,A.t)
D.b_g=new B.x(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,A.t)
D.cGW=w([D.a9j,A.iR,A.pT,A.as,D.b_g],x.O)
D.bHU=w([0,0.28,0.55,0.82,1],x.n)
D.bFD=new B.a7(A.ax,A.aE,A.w,D.cGW,D.bHU,null)
D.bFM=new B.a7(A.a1,A.a7,A.w,A.NY,null,null)
D.bFN=new B.a7(A.a1,A.a7,A.w,F.aqM,null,null)
D.bFQ=new B.a7(A.a1,A.a7,A.w,D.as_,null,null)
D.cBY=w([A.bB,A.f4],x.O)
D.bG_=new B.a7(A.a1,A.a7,A.w,D.cBY,null,null)
D.cW4=w([A.az,A.bB,A.b8],x.O)
D.bG1=new B.a7(A.a1,A.a7,A.w,D.cW4,null,null)
D.cJY=w([A.aZ,A.bJ,A.h8],x.O)
D.bG5=new B.a7(A.a1,A.a7,A.w,D.cJY,null,null)
D.cVN=w([A.bh,A.aI,A.bO,A.aJ,A.aN,A.ct,A.ai],x.O)
D.cFj=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.bGa=new B.a7(A.ax,A.aE,A.w,D.cVN,D.cFj,null)
D.bGk=new B.a7(A.ax,A.aE,A.w,A.Z_,null,null)
D.cKr=w([D.Ta,A.e1],x.O)
D.bGt=new B.a7(A.a1,A.a7,A.w,D.cKr,null,null)
D.cRa=w([D.aa0,D.a8x,A.M],x.O)
D.bGA=new B.a7(A.ax,A.aE,A.w,D.cRa,null,null)
D.b7R=new B.x(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,A.t)
D.cxm=w([A.eK,A.fM,D.b7R],x.O)
D.bH3=new B.a7(A.ax,A.aE,A.w,D.cxm,null,null)
D.cCp=w([D.nN,A.as],x.O)
D.bH4=new B.a7(A.ax,A.aE,A.w,D.cCp,null,null)
D.bHq=w([G.A3,A.o7,A.jC,A.hd,A.jZ,A.kw,A.kv,A.qi,A.lV,A.eD,A.ln,A.wM,A.E8],x.A)
D.bKM=w([10,50,100,200],x.t)
D.bUq=w([1,3,5,7],x.t)
D.bZo=w([25,50,100,250],x.t)
D.bpz=new B.a_(983104,"MaterialIcons",!1)
D.c6M=w([A.o7,A.kW,A.lW,A.lm,A.hc,A.uq,D.bpz,A.XD],x.A)
D.cc5=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cnU=w([0,0.22,0.5,0.78,1],x.n)
D.crI=w([8,13,19],x.n)
D.Zi=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.eKy=new B.w("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.dPa=new B.ja("questions",48,D.eKy,null,x.d)
D.eBh=new B.w("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.dPf=new B.ja("edit",48,D.eBh,null,x.d)
D.eRG=new B.w("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.dPl=new B.ja("delete",48,D.eRG,null,x.d)
D.crS=w([D.dPa,D.dPf,D.dPl],B.az("M<oA<n>>"))
D.cAQ=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.cB2=w([A.bK,A.j9],x.O)
D.a0Q=new C.lf("text","",null,null)
D.cC5=w([D.a0Q],x.a)
D.cDo=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.e_h=new B.abr(A.lU,"Home")
D.dVB=new B.abr(A.p7,"Growth")
D.dXP=new B.abr(A.jC,"Wallet")
D.cFu=w([D.e_h,D.dVB,D.dXP],B.az("M<+icon,label(a_,n)>"))
D.cFR=w([4,0,2,6,8,1,3,5,7],x.t)
D.cFZ=w([A.c,A.bN,A.ct],x.O)
D.djx=new C.qM("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.djA=new C.qM("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.djy=new C.qM("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.djs=new C.qM("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.djt=new C.qM("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.djB=new C.qM("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.ZL=w([D.djx,D.djA,D.djy,D.djs,D.djt,D.djB],x.F)
D.ZQ=w([A.aH,A.br,A.db,A.aZ],x.O)
D.b1N=new B.x(1,1,0.8980392156862745,0.4,A.t)
D.cKx=w([A.SV,D.b1N,A.pT,A.hC,A.iR],x.O)
D.ZV=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.Nv=w(["checkers_deluxe","tic_tac_go"],x.s)
D.bHu=w([0,1,2],x.t)
D.c7_=w([3,4,5],x.t)
D.cjG=w([6,7,8],x.t)
D.bHw=w([0,3,6],x.t)
D.bUv=w([1,4,7],x.t)
D.c0P=w([2,5,8],x.t)
D.bHA=w([0,4,8],x.t)
D.c0M=w([2,4,6],x.t)
D.cMK=w([D.bHu,D.c7_,D.cjG,D.bHw,D.bUv,D.c0P,D.bHA,D.c0M],x.B)
D.azI=new C.GT(0,"abab")
D.djq=new C.GT(1,"aaaBbb")
D.azJ=new C.GT(2,"aabb")
D.cNE=w([D.azI,D.djq,D.azJ],B.az("M<GT>"))
D.cNU=w([],x.a)
D.arv=w([],x.v)
D.cR2=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.NP=w([1,2,3,-1,-2],x.t)
D.cTF=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.b5l=new B.x(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,A.t)
D.b5d=new B.x(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,A.t)
D.aaI=new B.x(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,A.t)
D.cUm=w([D.b5l,D.b5d,D.aaI],x.O)
D.b71=new B.x(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,A.t)
D.cUo=w([A.a7Q,D.b71,D.aaI],x.O)
D.cUW=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.asj=w([D.nN,A.c,D.es,A.cd,A.b9,A.as],x.O)
D.cXU=w([A.jw,A.az],x.O)
D.f0D=new C.o_("dice","Dice Roll","Roll for cash & prizes!",A.lS,D.cXU)
D.f0A=new C.o_("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",A.qe,A.aqi)
D.cT8=w([A.dp,A.bf],x.O)
D.f0x=new C.o_("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",A.Xq,D.cT8)
D.cXt=w([A.dM,A.lJ],x.O)
D.f0F=new C.o_("memory","Memory Match","Match pairs \u2014 solo or multiplayer",A.XD,D.cXt)
D.apK=w([A.bf,A.j6],x.O)
D.f0G=new C.o_("math","Math Quiz","200+ questions, rewards",A.DZ,D.apK)
D.cMb=w([A.az,A.lJ],x.O)
D.f0z=new C.o_("scramble","Word Scramble","Place letters in order \u2014 solo or invite",F.aeT,D.cMb)
D.bUd=w([A.j6,A.q2],x.O)
D.f0B=new C.o_("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",F.Xa,D.bUd)
D.f0E=new C.o_("sequence","Number Sequence","Find patterns, win rewards",A.ah3,D.apK)
D.cR1=w([M.kM,D.Tv],x.O)
D.f0y=new C.o_("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",A.A1,D.cR1)
D.f0C=new C.o_("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",A.cu,Ai.mG)
D.cVX=w([D.f0D,D.f0A,D.f0x,D.f0F,D.f0G,D.f0z,D.f0B,D.f0E,D.f0y,D.f0C],B.az("M<o_>"))
D.djv=new C.qM("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.dju=new C.qM("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.djr=new C.qM("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.djz=new C.qM("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.djC=new C.qM("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.djw=new C.qM("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a_s=w([D.djv,D.dju,D.djr,D.djz,D.djC,D.djw],x.F)
D.dGL={checkers_deluxe:0,tic_tac_go:1}
D.axT=new B.bt(D.dGL,["Checkers Deluxe","Tic Tac Go"],B.az("bt<n,n>"))
D.dFY={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.ay3=new B.bt(D.dFY,[1,2,3,4,5,6,7],B.az("bt<n,G>"))
D.dfQ=new C.lf("signature","NGMY Support Team",null,null)
D.dfR=new C.lf("divider","",null,null)
D.OF=new C.Tb(!1,!1,!1,!1)
D.OH=new C.LL(!1,!1,!1,!1)
D.dgU=new C.LL(!0,!0,!1,!1)
D.AT=new C.anH(0,"swahili")
D.azH=new C.anH(1,"english")
D.AU=new C.anH(2,"mix")
D.cMg=w([A.hR,A.iw,A.dB],x.O)
D.dki=new C.ow(D.cMg,A.hA,A.aZ,"BACKGAMMON","\ud83c\udfb2",A.afL)
D.bqq=new B.a_(983637,"MaterialIcons",!1)
D.dkj=new C.ow(Af.ass,A.br,A.f5,"EURO WHEEL","\ud83c\udfa1",D.bqq)
D.cTW=w([A.M,A.aI,A.bz],x.O)
D.dkk=new C.ow(D.cTW,A.aN,A.ai,"ROYALE","\u265f\ufe0f",F.Xa)
D.cAr=w([A.dG,A.bf,A.e9],x.O)
D.dkl=new C.ow(D.cAr,A.aH,A.db,"CONNECT 4","\ud83d\udd34",A.XQ)
D.cPG=w([A.dn,A.fo,A.q2],x.O)
D.dkm=new C.ow(D.cPG,A.tR,A.cf,"PUNTO BANCO","\ud83d\udc8e",A.kW)
D.cj8=w([A.n4,A.hP,A.le],x.O)
D.dkn=new C.ow(D.cj8,A.iK,A.jv,"DOMINOES","\ud83c\udc53",A.agT)
D.cUz=w([A.vW,A.tS,A.hk],x.O)
D.dko=new C.ow(D.cUz,A.za,A.ir,"WAR","\u2694\ufe0f",N.X6)
D.dkp=new C.ow(A.asn,A.aM,A.ai,"PREMIUM","\ud83c\udfae",A.lS)
D.cBZ=w([A.jS,A.az,A.dM],x.O)
D.dkq=new C.ow(D.cBZ,A.j2,A.f4,"JACKPOT","\ud83c\udfb0",A.lS)
D.cOU=w([A.lc,A.lH,A.bB],x.O)
D.dkr=new C.ow(D.cOU,A.pS,A.cd,"LIVE BINGO","\ud83c\udfb1",A.zU)
D.cv7=w([A.iw,A.e1,A.aZ],x.O)
D.bnP=new B.a_(62865,"MaterialIcons",!1)
D.dks=new C.ow(D.cv7,A.rf,A.aM,"BIG SPIN","\ud83c\udfa1",D.bnP)
D.dkt=new C.ow(A.a_r,A.aJ,A.br,"HOLD'EM","\u2660\ufe0f",A.jC)
D.cUV=w([A.eK,A.ff,A.aW],x.O)
D.bmV=new B.a_(61234,"MaterialIcons",!1)
D.dku=new C.ow(D.cUV,A.lM,A.aR,"CRAPS","\ud83c\udfb2",D.bmV)
D.czO=w([A.j9,A.is,A.bK],x.O)
D.dkv=new C.ow(D.czO,A.bJ,A.b8,"PLINKO","\ud83d\udc8e",Aj.KT)
D.bq9=new B.a_(983492,"MaterialIcons",!1)
D.dkw=new C.ow(A.a_r,A.eY,A.br,"SNOOKER","\ud83c\udfb1",D.bq9)
D.cSK=w([A.eK,A.ff,A.aR],x.O)
D.dkx=new C.ow(D.cSK,A.pX,A.bo,"PROFIT LAB","\ud83d\udcb0",A.hG)
D.cT1=w([A.eI,A.fn,A.br],x.O)
D.boL=new B.a_(63324,"MaterialIcons",!1)
D.dky=new C.ow(D.cT1,A.z6,A.bq,"KLONDIKE","\ud83c\udccf",D.boL)
D.cMQ=w([A.dc,A.bh,A.M],x.O)
D.dkz=new C.ow(D.cMQ,A.aM,A.aI,"VEGAS TABLE","\ud83c\udccf",A.A5)
D.pg=new C.D6(0,"continueGame")
D.ph=new C.D6(1,"youWin")
D.FO=new C.D6(2,"youLose")
D.OQ=new C.D6(3,"draw")
D.azW=new C.TS(0,"found")
D.dDl=new C.TS(1,"foundLive")
D.a15=new C.TS(2,"notFound")
D.azX=new C.TS(3,"wrongAccount")
D.dIm=new B.v(4,12)
D.dKt=new B.B(A.Ju,A.r_,null)
D.big=new B.L(4,0,0,3)
D.enG=new B.F(!0,A.aK,null,null,null,null,10,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVK=new B.w("NGMY Helper",null,D.enG,null,null,null,null,null,null,null,null,null)
D.dKJ=new B.B(D.big,D.eVK,null)
D.boD=new B.a_(63284,"MaterialIcons",!1)
D.btU=new B.ac(D.boD,18,A.nQ,null,null,null)
D.es3=new B.F(!0,A.nQ,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEY=new B.w("Continue",null,D.es3,null,null,null,null,null,null,null,null,null)
D.cOi=w([D.btU,A.bp,D.eEY],x.p)
D.e9o=new B.cF(A.b_,A.e,A.R,A.m,null,A.p,null,0,D.cOi,null)
D.dKM=new B.B(A.iU,D.e9o,null)
D.dKW=new B.B(A.bT,A.r_,null)
D.eU0=new B.w("\u25b6\ufe0f",null,A.a42,null,null,null,null,null,null,null,null,null)
D.dLe=new B.B(A.UC,D.eU0,null)
D.b51=new B.x(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,A.t)
D.cL6=w([A.fM,A.ff,A.cU,D.b51],x.O)
D.bGd=new B.a7(A.ax,A.aE,A.w,D.cL6,A.Am,null)
D.aS_=new B.o(null,null,null,null,null,D.bGd,A.n)
D.bbg=new B.ky(D.aS_,A.ba,null,null)
D.dPA=new B.cE(0,0,0,0,null,null,D.bbg,null)
D.bvz=new B.ac(A.ug,11,A.c,null,null,null)
D.dPE=new B.cE(10,12,null,null,null,null,D.bvz,null)
D.cnL=w([A.h7,A.eI,A.kl],x.O)
D.dQd=new B.bT(A.HB,1.1,A.w,null,0,D.cnL,null,null)
D.b6b=new B.x(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,A.t)
D.b1v=new B.x(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,A.t)
D.b32=new B.x(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,A.t)
D.cJ2=w([D.b6b,D.b1v,D.b32],x.O)
D.dQj=new B.bT(A.a5C,1.05,A.w,null,0,D.cJ2,null,null)
D.dQC=new B.bT(A.C,0.5,A.w,null,0,W.Zx,null,null)
D.e83=new B.af(-18,0,18,1)
D.e8g=new B.af(-3,-5,3,5)
D.buk=new B.ac(A.ei,16,D.es,null,null,null)
D.aK0=new B.F(!0,D.es,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTD=new B.w("Screenshot added \xb7 tap to change",null,D.aK0,null,null,null,null,null,null,null,null,null)
D.cxQ=w([D.buk,A.bp,D.eTD],x.p)
D.e8V=new B.cF(A.b_,A.b5,A.j,A.m,null,A.p,null,0,D.cxQ,null)
D.bxY=new B.ac(A.jE,15,D.es,null,null,null)
D.eRB=new B.w("Refresh",null,D.aK0,null,null,null,null,null,null,null,null,null)
D.czX=w([D.bxY,A.d4,D.eRB],x.p)
D.e8X=new B.cF(A.b_,A.e,A.R,A.m,null,A.p,null,0,D.czX,null)
D.dGl={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.eai=new B.fd(D.dGl,3,x.M)
D.dH3={bubble_pop:0,fruit_slash:1,whack_mole:2,sky_stack:3,snake_rush:4,sky_hopper:5,brick_breaker:6,mystery_word:7,higher_lower:8,mine_sweep:9,merge_2048:10,lights_out:11,odd_one:12,speed_sort:13,flag_frenzy:14,balloon_darts:15,coin_catcher:16,number_rush:17,mini_sudoku:18,space_dodge:19,color_gate:20,paddle_duel:21,beat_tiles:22,target_range:23,perfect_stop:24,hoop_shot:25,penalty_kick:26,dino_dash:27,lane_racer:28,planet_shield:29,pipe_flow:30,color_flood:31,hanoi_tower:32,emoji_riddle:33,bigger_sum:34,true_false:35,capital_quiz:36,clock_reader:37,quick_count:38,shell_game:39,gem_swap:40,block_collapse:41,ball_sort:42,burger_builder:43,archery:44,deep_fishing:45,cannon_blast:46,moon_lander:47,jelly_jump:48,mini_golf:49,treasure_hunt:50,safe_cracker:51,gold_miner:52,cash_counter:53,plinko_drop:54,slot_stopper:55,change_maker:56,price_guess:57,make_13:58,find_it:59,knife_throw:60,fall_down:61,stick_bridge:62,zigzag_run:63,word_search:64,emoji_math:65,connect_four:66,pop_lock:67,asteroid_blaster:68,tetro_drop:69}
D.eap=new B.fd(D.dH3,70,x.M)
D.dG8={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.eaw=new B.fd(D.dG8,6,x.M)
D.dH9={memory:0,typing:1,scramble:2,pattern:3}
D.m5=new B.fd(D.dH9,4,x.M)
D.ecD=new B.ap(276,276)
D.edh=new B.a8(13,null,null,null)
D.aXF=new B.f7(2.6,null,null,null,null,A.aM,null,null,null,null)
D.edt=new B.a8(26,26,D.aXF,null)
D.eed=new B.a8(null,7,null,null)
D.eem=new B.hI(8,0,0,1,null)
D.eUF=new B.w("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aHF=new B.aX(D.eUF,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eAv=new B.w("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.ehg=new B.aX(D.eAv,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eBs=new B.w("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.ehm=new B.aX(D.eBs,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eRL=new B.w("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.ehZ=new B.aX(D.eRL,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.b5E=new B.x(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,A.t)
D.er1=new B.F(!0,D.b5E,null,null,null,null,9,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.el_=new B.eE("$",null,null,A.cT,null,null,null,null,null,null,D.er1)
D.ele=new B.F(!0,A.M,null,null,null,null,14,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.elx=new B.F(!0,A.c,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.elC=new B.F(!0,A.bh,null,null,null,null,9,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.elZ=new B.F(!0,A.M,null,null,null,null,9,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.em8=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eme=new B.F(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.emm=new B.F(!0,null,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.en2=new B.F(!0,A.aM,null,null,null,null,28,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eny=new B.F(!0,D.es,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.enA=new B.F(!0,A.bJ,null,null,null,null,14,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eoh=new B.F(!0,E.z4,null,null,null,null,13,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aIS=new B.F(!0,A.c,null,null,null,null,20,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.epM=new B.F(!0,A.bJ,null,null,null,null,11.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eq3=new B.F(!0,A.ak,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,A.ay,null,null,null,null,null,null,null,null)
D.eqj=new B.F(!0,A.ak,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.erg=new B.F(!0,A.c,null,null,null,null,11,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.erw=new B.F(!0,A.c,null,null,null,null,14,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.erH=new B.F(!0,A.bq,null,null,null,null,11,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.erI=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,A.ay,null,null,null,null,null,null,null,null)
D.esb=new B.F(!0,A.ig,null,null,null,null,10.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b0o=new B.x(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,A.t)
D.esp=new B.F(!0,D.b0o,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etI=new B.F(!0,A.aH,null,null,null,null,17,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eu3=new B.F(!0,D.a9j,null,null,null,null,9,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJx=new B.F(!0,E.z4,null,null,null,null,11,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euo=new B.F(!0,A.fn,null,null,null,null,52,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eup=new B.F(!0,A.bz,null,null,null,null,7,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euE=new B.F(!0,E.z4,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.v3=new B.F(!0,A.c,null,null,null,null,13,A.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b3L=new B.x(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,A.t)
D.euR=new B.F(!0,D.b3L,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evk=new B.F(!0,A.Om,null,null,null,null,16.799999999999997,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewi=new B.F(!0,A.c,null,null,null,null,38,A.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewn=new B.F(!0,A.iy,null,null,null,null,11,A.a_,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewr=new B.F(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJJ=new B.F(!0,A.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewU=new B.F(!0,A.M,null,null,null,null,10,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewY=new B.F(!0,A.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exP=new B.F(!0,A.M,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyc=new B.F(!0,A.ak,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eys=new B.F(!0,A.bq,null,null,null,null,14,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyU=new B.F(!0,A.c,null,null,null,null,44,A.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyY=new B.F(!0,A.M,null,null,null,null,11,A.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezP=new B.w("Value per pair",null,A.hN,null,null,null,null,null,null,null,null,null)
D.ezQ=new B.w("Restore now",null,A.cb,null,null,null,null,null,null,null,null,null)
D.eAj=new B.w("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aJh=new B.F(!0,A.cO,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAr=new B.w("AVAILABLE PLANS",null,D.aJh,null,null,null,null,null,null,null,null,null)
D.eAV=new B.w("Go Back",null,A.cr,null,null,null,null,null,null,null,null,null)
D.eo8=new B.F(!0,A.bz,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBz=new B.w("PLAN VALUE",null,D.eo8,null,null,null,null,null,null,null,null,null)
D.eBB=new B.w("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.eBZ=new B.w("Deposit",null,A.QS,null,null,null,null,null,null,null,null,null)
D.exc=new B.F(!0,A.j2,null,null,null,null,null,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCU=new B.w("JACKPOT SLOTS",null,D.exc,null,null,null,null,null,null,null,null,null)
D.eDb=new B.w("Restore",null,A.cb,null,null,null,null,null,null,null,null,null)
D.eob=new B.F(!0,A.c,null,null,null,null,12,A.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDe=new B.w("YOUR NUMBER",null,D.eob,null,null,null,null,null,null,null,null,null)
D.eDs=new B.w("SPIN REELS",null,F.a3J,null,null,null,null,null,null,null,null,null)
D.eDS=new B.w("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.eEj=new B.w("Perfect Score Profit",null,A.hN,null,null,null,null,null,null,null,null,null)
D.eEW=new B.w("Join room",null,A.ka,null,null,null,null,null,null,null,null,null)
D.eGH=new B.w("Add payment screenshot",null,A.jM,null,null,null,null,null,null,null,null,null)
D.eGV=new B.w("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.ewu=new B.F(!0,A.aM,null,null,null,null,11,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHl=new B.w("INVITE A PLAYER",null,D.ewu,null,null,null,null,null,null,null,null,null)
D.evH=new B.F(!0,A.SV,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHK=new B.w("NGMY GOLD LEADER",null,D.evH,null,null,null,null,null,null,null,null,null)
D.eIc=new B.w("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.eIz=new B.w("Invest & Play",null,A.oq,null,null,null,null,null,null,null,null,null)
D.aJb=new B.F(!0,D.vP,null,null,null,null,8,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIX=new B.w("VALID THRU",null,D.aJb,null,null,null,null,null,null,null,null,null)
D.aJL=new B.F(!0,A.aA,null,null,null,null,11,A.I,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJ4=new B.w("DEALER",null,D.aJL,null,null,null,null,null,null,null,null,null)
D.eJa=new B.w("CARDHOLDER",null,D.aJb,null,null,null,null,null,null,null,null,null)
D.eve=new B.F(!0,A.aJ,null,null,null,null,9,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJQ=new B.w("NGMY PLATINUM",null,D.eve,null,null,null,null,null,null,null,null,null)
D.eyj=new B.F(!0,A.oO,null,null,null,null,10,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKt=new B.w("EARNED SO FAR",null,D.eyj,null,null,null,null,null,null,null,null,null)
D.eKZ=new B.w("VS",null,A.aJ6,null,null,null,null,null,null,null,null,null)
D.eLn=new B.w("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.eM2=new B.w("Keep typing \u2014 mistakes are counted in your payout",null,A.Bw,null,null,null,null,null,null,null,null,null)
D.eM3=new B.w("Multiplayer invite",null,A.ka,null,null,null,null,null,null,null,null,null)
D.eMe=new B.w("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.emS=new B.F(!0,A.Om,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMk=new B.w("\ud83d\udcb0 Partial Payout System",null,D.emS,null,null,null,null,null,null,null,null,null)
D.eMu=new B.w("Browse Topics",null,A.ez,null,null,null,null,null,null,null,null,null)
D.elX=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMI=new B.w("Investment Required",null,D.elX,null,A.L,null,null,null,null,null,null,null)
D.elu=new B.F(!0,A.c,null,null,null,null,16.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eO6=new B.w("Network Status",null,D.elu,null,null,null,null,null,null,null,null,null)
D.eOB=new B.w("Their account email",null,G.a3z,null,null,null,null,null,null,null,null,null)
D.eOU=new B.w("Verification code",null,A.cr,null,null,null,null,null,null,null,null,null)
D.eOV=new B.w("Category",null,null,null,null,null,null,null,null,null,null,null)
D.eP5=new B.w("ACTIVE ASSET",null,D.aJh,null,null,null,null,null,null,null,null,null)
D.ePo=new B.w("Scan QR",null,A.cr,null,null,null,null,null,null,null,null,null)
D.ePs=new B.w("Check word",null,A.cr,null,null,null,null,null,null,null,null,null)
D.ePP=new B.w("YOUR HAND",null,D.aJL,null,null,null,null,null,null,null,null,null)
D.eQk=new B.w("NGMY Music Studio",null,A.l2,null,null,null,null,null,null,null,null,null)
D.eQn=new B.w("I sent it \u2014 submit deposit",null,A.oq,null,null,null,null,null,null,null,null,null)
D.eR3=new B.w("Back",null,A.Qp,null,null,null,null,null,null,null,null,null)
D.ez8=new B.F(!0,null,null,null,null,null,null,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eR9=new B.w("DEAL / PLAY ROUND",null,D.ez8,null,null,null,null,null,null,null,null,null)
D.eRl=new B.w("Got it \u2014 keep chatting",null,A.cb,null,null,null,null,null,null,null,null,null)
D.eRu=new B.w("3 Messages Left",null,A.aJB,null,null,null,null,null,null,null,null,null)
D.eRX=new B.w("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.eS4=new B.w("Copy",null,A.cr,null,null,null,null,null,null,null,null,null)
D.eSp=new B.w("How many games?",null,G.a3z,null,null,null,null,null,null,null,null,null)
D.euL=new B.F(!0,A.aA,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSB=new B.w("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.euL,null,A.L,null,null,null,null,null,null,null)
D.eU3=new B.w("Question",null,null,null,null,null,null,null,null,null,null,null)
D.eUf=new B.w("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.ezu=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVF=new B.w("NGMY  WALLET",null,D.ezu,null,null,null,null,null,null,null,null,null)
D.eVG=new B.w("Select Your Bet",null,A.hi,null,null,null,null,null,null,null,null,null)
D.eYV=new B.cv("history",x.W)
D.eZ_=new B.cv("ngmy_local_home",x.W)
D.eZ0=new B.cv("ngmy_local_invest",x.W)
D.eZ1=new B.cv("ngmy_local_wallet",x.W)
D.f0k=new C.WV(null)
D.aMh=new C.axL(0,"grid")
D.aMi=new C.axL(1,"questions")
D.f1d=new C.axL(2,"answer")
D.f21=new C.XO(null)})();(function staticFields(){$.fyc=B.aY(x.N)
$.fX4=B.Q(x.N,x.k)
$.fDt=null
$.fDh=B.Q(x.N,B.az("vj"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hSv","bz5",()=>C.hB2())
w($,"hSh","h3Q",()=>{var v=null,u=B.jF(v,v,v,v,D.el_,A.a5,A.cp,v,A.f3,A.co)
u.fK()
return u})})()};
(a=>{a["Pvo+CirrfmKsDaoSUyYKGrH7bw8="]=a.current})($__dart_deferred_initializers__);