((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,L,R,A2,E,M,A3,N,A4,S,O,T,A5,P,A6,U,A7,A8,A9,Aa,Ab,Ac,V,Ad,C={
h6u(d,e,f){var w=null,v=f.k("Fv<0>"),u=new A.Fv(w,w,w,w,v)
$.CA()
u.d=new C.cpH(new A.BD(),e,u,f,d)
return new A.hP(u,v.k("hP<1>"))},
cpH:function cpH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cpI:function cpI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cpE:function cpE(d){this.a=d},
cpF:function cpF(d,e){this.a=d
this.b=e},
cpG:function cpG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpD:function cpD(d,e,f){this.a=d
this.b=e
this.c=f},
bpF:function bpF(d){this.a=d},
h6t(d,e,f,g){return new C.aul(d,e,f,null,g.k("aul<0>"))},
EN:function EN(){},
aGJ:function aGJ(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
eWS:function eWS(d){this.a=d},
eWR:function eWR(d,e){this.a=d
this.b=e},
eWU:function eWU(d){this.a=d},
eWP:function eWP(d,e,f){this.a=d
this.b=e
this.c=f},
eWT:function eWT(d){this.a=d},
eWQ:function eWQ(d){this.a=d},
aul:function aul(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
hWB(d){var w=B.a.i(d)
while(B.a.a0(w,"$"))w=B.a.i(B.a.b0(w,1))
return w},
hgF(d){var w=C.hWB(d)
if(w.length===0)return""
return"$"+w},
fro(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fro=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:i=B.a.i(d.toLowerCase())
if(i.length===0){w=1
break}t=new A.S(Date.now(),0,!1).bP(-6048e8)
s=e.length,r=0
case 3:if(!(r<e.length)){w=5
break}q=e[r]
if(B.a.i(q.b.toLowerCase())!==i){w=4
break}p=q.y
o=p.a
if(o>=t.gbo())o=o===t.gbo()&&p.b<t.gcw()
else o=!0
if(o){w=4
break}if(q.x!==B.cl){w=4
break}if(q.d!==B.fB){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!A.dr(m,"game payout:",0))if(!A.dr(m,"game partial:",0)){if(!A.dr(m,"multiplayer payout:",0))o=A.dr(m,"dice",0)&&q.e===B.fb
else o=l
l=o}if(!l){w=4
break}if(A.dr(m,"game payout:",0))k=B.a.i(B.a.b0(n,B.a.cJ(m,"game payout:")+12))
else if(A.dr(m,"game partial:",0)){k=B.a.i(B.a.b0(n,B.a.cJ(m,"game partial:")+13))
j=B.a.cJ(k,"(")
if(j>0)k=B.a.i(B.a.ap(k,0,j))}else if(A.dr(m,"multiplayer payout:",0)){k=B.a.i(B.a.b0(n,B.a.cJ(m,"multiplayer payout:")+19))
j=B.a.cJ(k,"(")
if(j>0)k=B.a.i(B.a.ap(k,0,j))}else k=A.dr(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return A.b(C.up(q.c,p,n,d,o,null,q.a,!0),$async$fro)
case 6:case 4:e.length===s||(0,A.L)(e),++r
w=3
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$fro,v)},
i0c(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
hXE(d,e,f){return B.d.b8(e,new C.fv6(f,B.a.i(d.toLowerCase())))},
fuY(d){var w
C.h2M(d)
w=d.c8
return A.bl(new A.K(w,new C.fuZ(),A.T(w).k("K<1,@>")),!0,x.N)},
hNo(d,e,f){var w,v,u,t,s,r,q=null,p=B.bQ,o=B.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aT.toString
u=$.eh().gic().b
if(u.a===0)t=1
else{new A.bc(u,A.a4(u).k("bc<2>")).gK(0)
u=$.l_()
s=u.d
t=s==null?u.gh5():s}w=B.k.dw(f*t)
v=new C.fey(f)
if(J.cZ(n,"data:image"))try{u=A.fL(B.cD.aJ(B.d.gal(J.lm(n,","))),B.A,w,new C.fev(v),B.fU,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.cZ(n,"supabase://"))return new A.l5(A.a0F(n),new C.few(f,e,p,w,v),q,q,x.gh)
return A.kj(n,B.A,w,new C.fex(v),B.fU,p,!0,e,q,q,f)},
fSI(d,e){return new A.a6(e,e,A.hS(C.hNo(d,e,e),B.aq),null)},
hFO(){var w,v,u=A.a([],x._),t=x.N,s=A.B(D.d6Q,x.gm)
for(w=0;w<36;++w){v=B.BQ[w]
s.push(new C.qy(v.a,v.b,v.c,v.e,v.f))}return new C.ayW(u,A.V(t,t),s)},
fv6:function fv6(d,e){this.a=d
this.b=e},
fuZ:function fuZ(){},
fey:function fey(d){this.a=d},
fev:function fev(d){this.a=d},
few:function few(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
feu:function feu(d){this.a=d},
fex:function fex(d){this.a=d},
ak0:function ak0(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
qy:function qy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
ayW:function ayW(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
d7y:function d7y(d,e){this.a=d
this.b=e},
d7J:function d7J(d,e){this.a=d
this.b=e},
d80:function d80(){},
d81:function d81(d){this.a=d},
d7R:function d7R(d,e){this.a=d
this.b=e},
d7Q:function d7Q(){},
d7S:function d7S(d){this.a=d},
d7P:function d7P(){},
d7U:function d7U(d){this.a=d},
d7T:function d7T(){},
d7M:function d7M(d){this.a=d},
d7K:function d7K(d){this.a=d},
d7L:function d7L(d){this.a=d},
d7N:function d7N(d){this.a=d},
d7O:function d7O(d){this.a=d},
d7E:function d7E(d,e){this.a=d
this.b=e},
d7F:function d7F(d,e){this.a=d
this.b=e},
d7C:function d7C(d){this.a=d},
d7D:function d7D(d){this.a=d},
d7G:function d7G(d){this.a=d},
d7H:function d7H(d){this.a=d},
d7I:function d7I(d,e,f){this.a=d
this.b=e
this.c=f},
d7B:function d7B(d,e){this.a=d
this.b=e},
d7A:function d7A(d,e){this.a=d
this.b=e},
d7z:function d7z(d,e){this.a=d
this.b=e},
d8_:function d8_(d){this.a=d},
d7Y:function d7Y(d,e,f){this.a=d
this.b=e
this.c=f},
d7X:function d7X(d,e,f){this.a=d
this.b=e
this.c=f},
d7W:function d7W(d,e){this.a=d
this.b=e},
d7V:function d7V(){},
d7Z:function d7Z(d){this.a=d},
aBN:function aBN(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bhO:function bhO(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
dLX:function dLX(d){this.a=d},
dLW:function dLW(d){this.a=d},
dLY:function dLY(d){this.a=d},
dLV:function dLV(){},
dLZ:function dLZ(d,e){this.a=d
this.b=e},
dLU:function dLU(d){this.a=d},
dM_:function dM_(d){this.a=d},
ak_:function ak_(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ayV:function ayV(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
d7s:function d7s(d){this.a=d},
d7v:function d7v(d){this.a=d},
d7w:function d7w(d){this.a=d},
d7x:function d7x(d){this.a=d},
d7u:function d7u(d,e){this.a=d
this.b=e},
d7t:function d7t(d,e){this.a=d
this.b=e},
ak1:function ak1(d,e,f,g,h,i,j,k,l,m){var _=this
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
ayX:function ayX(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.Z=_.b5=_.bi=_.y2=_.y1=0
_.aG=_.aN=_.aE=_.az=$
_.bK=_.bb=_.b1=_.b3=null
_.aR=!1
_.bT=_.bj=null
_.c8=!1
_.cl=_.cW=""
_.c=_.a=_.bC=null},
d9k:function d9k(d,e){this.a=d
this.b=e},
d9n:function d9n(d){this.a=d},
d9o:function d9o(d){this.a=d},
d9p:function d9p(d){this.a=d},
d9q:function d9q(d){this.a=d},
d9r:function d9r(d){this.a=d},
d9l:function d9l(d){this.a=d},
d9m:function d9m(d){this.a=d},
d8A:function d8A(d,e){this.a=d
this.b=e},
d8B:function d8B(d,e){this.a=d
this.b=e},
d93:function d93(d){this.a=d},
d94:function d94(){},
d8Q:function d8Q(d,e,f){this.a=d
this.b=e
this.c=f},
d8R:function d8R(d){this.a=d},
d8S:function d8S(d,e,f){this.a=d
this.b=e
this.c=f},
d8T:function d8T(d,e){this.a=d
this.b=e},
d8U:function d8U(){},
d82:function d82(d){this.a=d},
d8z:function d8z(d,e){this.a=d
this.b=e},
d95:function d95(){},
d9e:function d9e(){},
d92:function d92(d){this.a=d},
d91:function d91(d){this.a=d},
d8x:function d8x(d){this.a=d},
d8y:function d8y(){},
d99:function d99(){},
d9a:function d9a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d9b:function d9b(d,e,f){this.a=d
this.b=e
this.c=f},
d83:function d83(){},
d84:function d84(d){this.a=d},
d85:function d85(){},
d8J:function d8J(d,e){this.a=d
this.b=e},
d8K:function d8K(d,e,f){this.a=d
this.b=e
this.c=f},
d8L:function d8L(d){this.a=d},
d8I:function d8I(d){this.a=d},
d8V:function d8V(d){this.a=d},
d8W:function d8W(){},
d8X:function d8X(d){this.a=d},
d8Y:function d8Y(){},
d8Z:function d8Z(d){this.a=d},
d9_:function d9_(){},
d98:function d98(d,e,f){this.a=d
this.b=e
this.c=f},
d8M:function d8M(d){this.a=d},
d8N:function d8N(d,e){this.a=d
this.b=e},
d8O:function d8O(d){this.a=d},
d8P:function d8P(d){this.a=d},
d9c:function d9c(d){this.a=d},
d9d:function d9d(d){this.a=d},
d86:function d86(d){this.a=d},
d87:function d87(d,e){this.a=d
this.b=e},
d88:function d88(d){this.a=d},
d89:function d89(d){this.a=d},
d96:function d96(d,e){this.a=d
this.b=e},
d97:function d97(d){this.a=d},
d8H:function d8H(d,e){this.a=d
this.b=e},
d90:function d90(d,e,f){this.a=d
this.b=e
this.c=f},
d8F:function d8F(d,e,f){this.a=d
this.b=e
this.c=f},
d8G:function d8G(){},
d9f:function d9f(d){this.a=d},
d9g:function d9g(d){this.a=d},
d9h:function d9h(d){this.a=d},
d9j:function d9j(d){this.a=d},
d9i:function d9i(){},
d8E:function d8E(d,e,f){this.a=d
this.b=e
this.c=f},
d8D:function d8D(d,e){this.a=d
this.b=e},
d8C:function d8C(d,e){this.a=d
this.b=e},
d8m:function d8m(d){this.a=d},
d8l:function d8l(d,e){this.a=d
this.b=e},
d8n:function d8n(d){this.a=d},
d8k:function d8k(d,e){this.a=d
this.b=e},
d8o:function d8o(d){this.a=d},
d8j:function d8j(){},
d8p:function d8p(d){this.a=d},
d8h:function d8h(){},
d8i:function d8i(d){this.a=d},
d8q:function d8q(d){this.a=d},
d8g:function d8g(d,e){this.a=d
this.b=e},
d8r:function d8r(d){this.a=d},
d8f:function d8f(d,e){this.a=d
this.b=e},
d8b:function d8b(d,e){this.a=d
this.b=e},
d8s:function d8s(d){this.a=d},
d8e:function d8e(d,e){this.a=d
this.b=e},
d8t:function d8t(d){this.a=d},
d8d:function d8d(d){this.a=d},
d8a:function d8a(d,e){this.a=d
this.b=e},
d8u:function d8u(d,e,f){this.a=d
this.b=e
this.c=f},
d8v:function d8v(d){this.a=d},
d8c:function d8c(){},
d8w:function d8w(d){this.a=d},
akS:function akS(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
beW:function beW(){this.c=this.a=null},
dcS:function dcS(d,e){this.a=d
this.b=e},
dcR:function dcR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ahf:function ahf(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
aw8:function aw8(d,e,f,g,h,i,j,k,l,m){var _=this
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
cAK:function cAK(d){this.a=d},
cA4:function cA4(d,e){this.a=d
this.b=e},
czV:function czV(d){this.a=d},
czW:function czW(d){this.a=d},
cAe:function cAe(d){this.a=d},
cAb:function cAb(d){this.a=d},
cAc:function cAc(d){this.a=d},
cAd:function cAd(d,e,f){this.a=d
this.b=e
this.c=f},
cA6:function cA6(d){this.a=d},
cA5:function cA5(d){this.a=d},
czX:function czX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cA9:function cA9(d){this.a=d},
cA8:function cA8(d){this.a=d},
cA7:function cA7(d,e){this.a=d
this.b=e},
cAx:function cAx(d){this.a=d},
cAr:function cAr(d){this.a=d},
cAu:function cAu(d){this.a=d},
cAt:function cAt(){},
cAq:function cAq(d){this.a=d},
cAs:function cAs(d,e){this.a=d
this.b=e},
cAp:function cAp(){},
cA1:function cA1(){},
cA2:function cA2(d,e){this.a=d
this.b=e},
cA3:function cA3(d){this.a=d},
cA_:function cA_(d,e){this.a=d
this.b=e},
cA0:function cA0(d,e){this.a=d
this.b=e},
cAh:function cAh(d,e){this.a=d
this.b=e},
cAa:function cAa(d){this.a=d},
cAi:function cAi(d){this.a=d},
cAj:function cAj(d,e){this.a=d
this.b=e},
cAk:function cAk(d,e){this.a=d
this.b=e},
cAl:function cAl(d,e){this.a=d
this.b=e},
cAm:function cAm(d,e,f){this.a=d
this.b=e
this.c=f},
cAn:function cAn(d){this.a=d},
cAo:function cAo(d){this.a=d},
cAf:function cAf(d,e){this.a=d
this.b=e},
cAw:function cAw(d){this.a=d},
cAg:function cAg(d,e){this.a=d
this.b=e},
cAJ:function cAJ(d){this.a=d},
cAC:function cAC(d){this.a=d},
cAF:function cAF(d){this.a=d},
cAz:function cAz(d,e){this.a=d
this.b=e},
cAD:function cAD(){},
cAE:function cAE(d,e){this.a=d
this.b=e},
cAA:function cAA(d){this.a=d},
cAB:function cAB(d){this.a=d},
cAH:function cAH(){},
cAG:function cAG(d){this.a=d},
cAy:function cAy(d,e){this.a=d
this.b=e},
cAI:function cAI(d){this.a=d},
czY:function czY(d){this.a=d},
cAv:function cAv(d,e){this.a=d
this.b=e},
czZ:function czZ(d,e,f){this.a=d
this.b=e
this.c=f},
aJ8:function aJ8(){},
aJ9:function aJ9(){},
aJa:function aJa(){},
aK6:function aK6(){},
bX9(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase())
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
bXa(d){var w=B.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
htj(d,e){var w=d.ax
if(w<0)return!1
return w===e},
aWf(d,e){return C.htk(d,e)},
htk(d,e){var w=0,v=A.j(x.di),u,t,s,r,q,p
var $async$aWf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.b_1(d),$async$aWf)
case 3:p=g
if(p!=null){try{t=B.R.aH(0,p.c,null)
if(x.f.b(t)){s=C.h17(A.a1(t,x.N,x.z))
if(s==null){u=new A.Fq(D.a45,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bX9(s,e,p.b)){u=new A.Fq(D.aEF,null)
w=1
break}r=p.a?D.dTG:D.aEE
u=new A.Fq(r,s)
w=1
break}}catch(o){}u=new A.Fq(D.a45,null)
w=1
break}s=C.h18(d)
if(s==null){u=new A.Fq(D.a45,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bX9(s,e,null)){u=new A.Fq(D.aEF,null)
w=1
break}u=new A.Fq(D.aEE,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWf,v)},
h18(d){var w,v,u,t,s,r
try{w=B.a.i(d)
if(J.cZ(w,"\ufeff"))w=J.mz(w,1)
v=!1
if(J.cZ(w,"NGMYSNAP1|")){v=!0
w=B.c4.ca(0,B.cD.aJ(J.mz(w,10)))}u=B.R.aH(0,w,null)
if(!x.f.b(u))return null
t=A.a1(u,x.N,x.z)
s=v?C.hti(t):C.h17(t)
return s}catch(r){return null}},
hti(d){var w,v,u,t,s,r,q,p,o,n=new C.bX6(),m=new C.bX5(),l=d.h(0,"qi")
if(x.f.b(l)){w=A.a1(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new A.S(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=A.aN(w.h(0,"d"))
p=new A.v8(v,u,t,s,r,B.k.O(q==null?0:q))}else p=null
v=d.h(0,"qu")
v=J.k(v==null?"User":v)
u=m.$1(d.h(0,"qb"))
t=m.$1(d.h(0,"qp"))
s=J.z(d.h(0,"qc"),!0)
r=n.$1(d.h(0,"qs"))
q=n.$1(d.h(0,"ql"))
n=n.$1(d.h(0,"qe"))
m=m.$1(d.h(0,"qt"))
o=A.aN(d.h(0,"qn"))
if(o==null)o=0
return new A.a55("","",v,u,t,s,r,q,n,m,o,p,B.i1,new A.S(Date.now(),0,!1),-1)},
h17(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.z(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.bX8()
v=d.h(0,"activeInvestment")
if(x.f.b(v)){u=A.a1(v,x.N,x.z)
t=u.h(0,"name")
t=J.k(t==null?"":t)
s=A.aN(u.h(0,"amount"))
if(s==null)s=0
r=A.aN(u.h(0,"dailyROI"))
if(r==null)r=0
q=w.$1(u.h(0,"purchaseDate"))
if(q==null)q=new A.S(Date.now(),0,!1)
p=A.aN(u.h(0,"totalEarned"))
if(p==null)p=0
o=A.aN(u.h(0,"daysClockedIn"))
n=new A.v8(t,s,r,q,p,B.k.O(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=A.B(new A.e7(J.b6(m,new C.bX7(w),x.eG),t),t.k("J.E"))}else l=A.a([],x.E)
t=d.h(0,"email")
t=J.k(t==null?"":t)
s=d.h(0,"ownerRealEmail")
s=J.k(s==null?"":s)
r=d.h(0,"username")
r=J.k(r==null?"User":r)
q=A.aN(d.h(0,"accountBalance"))
if(q==null)q=0
p=A.aN(d.h(0,"totalProfit"))
if(p==null)p=0
o=J.z(d.h(0,"isClockedIn"),!0)
k=w.$1(d.h(0,"clockInStartTime"))
j=w.$1(d.h(0,"lastClockInDate"))
i=w.$1(d.h(0,"lastClockInEarningsDate"))
h=A.aN(d.h(0,"todayClockInEarned"))
if(h==null)h=0
g=A.aN(d.h(0,"clockInPenaltyPercent"))
if(g==null)g=0
w=w.$1(d.h(0,"exportedAt"))
if(w==null)w=new A.S(Date.now(),0,!1)
f=A.aN(d.h(0,"walletStateRevision"))
f=f==null?null:B.k.O(f)
return new A.a55(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
fNf(d,e,f,g){var w=0,v=A.j(x.N),u,t,s,r
var $async$fNf=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:t=A.bX4(d,e,f,g)
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(t.a,s,"_")
u=A.FX(A.Jo(t.eK(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fNf,v)},
Vi:function Vi(d,e){this.a=d
this.b=e},
bX6:function bX6(){},
bX5:function bX5(){},
bX8:function bX8(){},
bX7:function bX7(d){this.a=d},
hQs(d){return A.ca(null,B.aX,!0,null,new C.fi6(),d,null,!0,!0,x.N)},
hQF(d,e,f,g){return A.ca(null,B.aX,!0,null,new C.fjj(g,f,e),d,null,!0,!0,x.y)},
amq:function amq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aB2:function aB2(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dtm:function dtm(d,e){this.a=d
this.b=e},
dtn:function dtn(d){this.a=d},
dtd:function dtd(d,e){this.a=d
this.b=e},
dtb:function dtb(d){this.a=d},
dtl:function dtl(d){this.a=d},
dtk:function dtk(d,e){this.a=d
this.b=e},
dta:function dta(d,e){this.a=d
this.b=e},
dt9:function dt9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dtc:function dtc(d){this.a=d},
dtj:function dtj(){},
dth:function dth(d){this.a=d},
dti:function dti(d,e){this.a=d
this.b=e},
dte:function dte(){},
dtf:function dtf(d,e){this.a=d
this.b=e},
dtg:function dtg(d,e){this.a=d
this.b=e},
dto:function dto(d){this.a=d},
a_E:function a_E(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bqa:function bqa(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Zi:function Zi(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bhl:function bhl(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dts:function dts(d){this.a=d},
dtp:function dtp(d,e){this.a=d
this.b=e},
dtq:function dtq(d,e){this.a=d
this.b=e},
dtr:function dtr(d){this.a=d},
Zj:function Zj(d){this.a=d},
bhm:function bhm(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dtt:function dtt(d,e){this.a=d
this.b=e},
fi6:function fi6(){},
fjj:function fjj(d,e,f){this.a=d
this.b=e
this.c=f},
adw:function adw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eQG:function eQG(d){this.a=d},
eQH:function eQH(d){this.a=d},
Pj:function Pj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Yq:function Yq(d){this.a=d},
ayk:function ayk(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d2s:function d2s(d){this.a=d},
d2p:function d2p(){},
d2q:function d2q(d){this.a=d},
d2r:function d2r(d){this.a=d},
Tk(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$Tk=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||B.a.i(f).length===0){w=1
break}w=3
return A.b(A.Ml(s),$async$Tk)
case 3:t=h
J.cf(t,A.F(["role",e,"text",B.a.i(f),"at",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z))
w=4
return A.b(A.amG(s,t),$async$Tk)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Tk,v)},
htC(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=A.T(d).k("a2<1>")
v=A.B(new A.a2(d,new C.bXS(),w),w.k("J.E"))
w=v.length
if(w===0)return""
u=w<=24?v:B.d.fJ(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,A.L)(u),++s){r=u[s]
q=J.a8(r)
p=J.z(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+A.t(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
bXS:function bXS(){},
hW0(d){return B.d.dM(B.BQ,new C.fri(d),new C.frj()).r},
fri:function fri(d){this.a=d},
frj:function frj(){},
amV:function amV(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bhs:function bhs(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dzO:function dzO(d){this.a=d},
dzN:function dzN(d){this.a=d},
dzF:function dzF(d,e,f){this.a=d
this.b=e
this.c=f},
dzK:function dzK(d){this.a=d},
dzH:function dzH(d,e,f){this.a=d
this.b=e
this.c=f},
dzL:function dzL(d){this.a=d},
dzG:function dzG(d){this.a=d},
dzM:function dzM(d){this.a=d},
dzI:function dzI(d){this.a=d},
dzJ:function dzJ(d){this.a=d},
h2M(d){var w=A.c4d(new A.S(Date.now(),0,!1)),v=d.bj
if(v===w)return
d.bj=w
d.bT=0
d.c8=A.a([],x.s)},
h2O(d){return A.ca(null,B.w.j(0.82),!0,null,new C.c4i(),d,null,!0,!0,x.H)},
a5J:function a5J(d){this.a=d},
c4i:function c4i(){},
c4h:function c4h(d){this.a=d},
hfS(){var w=new A.S(Date.now(),0,!1),v=w.bP(A.dC(4-A.mr(w),0,0,0,0,0).a),u=A.c0(A.by(v),1,4,0,0,0,0,0)
return""+A.by(v)+"-W"+B.a.aT(B.o.u(1+B.k.bw(B.o.an(v.by(A.c0(A.by(u),A.bG(u),A.bQ(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
f9B(d,e){var w,v,u,t,s,r,q=A.FC(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=J.q(t,"email")
r=B.a.i(J.k(s==null?"":s).toLowerCase())
if((B.a.cb(r,"+local.ngmy")?B.a.ap(r,0,r.length-11):r)===q)return t}t=A.F(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
hL4(d,e){var w,v,u,t,s,r,q,p=A.FC(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.cb(q,"+local.ngmy")?B.a.ap(q,0,q.length-11):q)===p){w=A.aN(s.h(t,"winsLeft"))
w=w==null?null:B.k.O(w)
return w==null?0:w}}return 0},
i47(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=A.FC(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.cb(q,"+local.ngmy")?B.a.ap(q,0,q.length-11):q)===n){w=A.aN(s.h(t,o))
w=w==null?null:B.k.O(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
hRk(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=A.FC(b5),b2=A.c5z(),b3=C.hfS()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
r=J.a8(s)
q=r.h(s,a2)
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.cb(p,a3)?B.a.ap(p,0,p.length-11):p)!==b1)continue
q=A.aN(r.h(s,a4))
o=q==null?a1:B.k.O(q)
if((o==null?0:o)<=0)continue
if(u!=null){r=r.h(s,a5)
r=J.k(r==null?"":r)
q=J.q(u,a5)
q=J.k(q==null?"":q)
if(r===q)r=0
else r=r<q?-1:1
r=r>=0}else r=!0
if(r)u=s}if(u!=null){w=J.a8(u)
v=A.aN(w.h(u,a4))
v=v==null?a1:B.k.O(v)
w.n(u,a4,(v==null?1:v)-1)
w=A.aN(w.h(u,"outcome"))
w=w==null?a1:B.k.O(w)
return w==null?1:w}n=new C.fk5()
for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
r=J.q(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.cb(p,a3)?B.a.ap(p,0,p.length-11):p)!==b1)continue
m=n.$5(s,"perDay",a6,a7,b2)
if(m!=null)return m}for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
r=J.q(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.cb(p,a3)?B.a.ap(p,0,p.length-11):p)!==b1)continue
l=n.$5(s,"perWeek",a8,a9,b3)
if(l!=null)return l}k=C.f9B(b4,b5)
w=J.a8(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?A.a1(v.a(w.h(k,b0)),r,q):A.V(r,q)
w.n(k,b0,j)
for(w=b4.y,w=new A.cJ(w,A.a4(w).k("cJ<1,2>")).gaf(0);w.C();){i=w.d
h=i.b
g=J.a8(h)
f=g.h(h,"perDay")
if(f==null)f=0
e=g.h(h,"perWeek")
if(e==null)e=0
if(f<=0&&e<=0)continue
h=i.a
d=v.b(j.h(0,h))?A.a1(v.a(j.h(0,h)),r,q):A.V(r,q)
j.n(0,h,d)
if(f>0){g=d.h(0,a7)
if(J.k(g==null?"":g)!==b2){d.n(0,a7,b2)
d.n(0,a6,0)}g=A.aN(d.h(0,a6))
a0=g==null?a1:B.k.O(g)
if(a0==null)a0=0
if(a0<f){d.n(0,a6,a0+1)
return A.c7(h,a1)}}if(e>0){g=d.h(0,a9)
if(J.k(g==null?"":g)!==b3){d.n(0,a9,b3)
d.n(0,a8,0)}g=A.aN(d.h(0,a8))
a0=g==null?a1:B.k.O(g)
if(a0==null)a0=0
if(a0<e){d.n(0,a8,a0+1)
return A.c7(h,a1)}}}return a1},
hcy(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[1,2,3],v=d.a,u=0;u<3;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
if(w===0)return 1
t=q[e.aA(w)]
if(t===3&&d.f>=d.e)t=e.h8()?1:2
return t},
fT0(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[-1,-2],v=d.a,u=0;u<2;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
return w===0?-1:q[e.aA(w)]},
hRl(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=A.FC(a3),a1=new C.fk6()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
r=J.a8(s)
q=r.h(s,"email")
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.cb(p,"+local.ngmy")?B.a.ap(p,0,p.length-11):p)!==a0)continue
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
w=J.a8(u)
v=w.h(u,d)
l=J.k(v==null?"":v)
v=o>0?1:0
r=n>0?1:0
q=m>0?1:0
q=new C.fk7(v+r+q>1,l)
k=q.$2(o,"w")
r=k+q.$2(n,"l")
j=a4.aA(r+q.$2(m,"p"))
if(j<k){w.n(u,h,o-1)
w.n(u,d,"w")
w=a2.a
v=w.h(0,"1")
if(v==null)v=10
i=Math.max(1,v)
w=w.h(0,"2")
if(w==null)w=10
return a4.aA(i+Math.max(1,w))<i?1:2}if(j<r){w.n(u,g,n-1)
w.n(u,d,"l")
return C.fT0(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
hRj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=A.aN(i.h(0,"wins")),g=h==null?m:B.k.O(h)
if(g==null)g=0
h=A.aN(i.h(0,"loses"))
w=h==null?m:B.k.O(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.hfS():A.c5z()
t=v+"|"+u
s=C.f9B(d,e)
h=J.a8(s)
r=h.h(s,l)
if(J.k(r==null?"":r)!==t){h.n(s,l,t)
h.n(s,k,0)
h.n(s,j,0)}r=A.aN(h.h(s,k))
q=r==null?m:B.k.O(r)
if(q==null)q=0
r=A.aN(h.h(s,j))
p=r==null?m:B.k.O(r)
if(p==null)p=0
o=Math.max(0,g-q)
r=o+Math.max(0,w-p)
if(r<=0)return m
n=f.aA(r)<o
if(n)h.n(s,k,q+1)
else h.n(s,j,p+1)
return n},
hZD(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
d.bfM()
w=C.hRl(d,e,a0)
if(w!=null){if(w===3)++d.f
C.aeV(d,e,w)
return w}v=C.hRk(d,e)
if(v!=null){if(v===3)++d.f
C.aeV(d,e,v)
return v}u=C.hRj(d,e,a0)
if(u!=null)return new C.fyj(d,a0,e).$1(u)
t=C.f9B(d,e)
s=J.a8(t)
r=A.aN(s.h(t,"winStreak"))
q=r==null?null:B.k.O(r)
if(q==null)q=0
s=A.aN(s.h(t,"loseStreak"))
p=s==null?null:B.k.O(s)
if(p==null)p=0
o=new C.fyl(d,a0)
if(C.hL4(d,e)>0){n=o.$0()
C.i47(d,e)
C.aeV(d,e,n)
return n}if(q>=d.c){n=new C.fyk(d,a0).$0()
C.aeV(d,e,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.aeV(d,e,n)
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
g=a0.aA(100)<h
if(g&&m.length!==0){f=m[a0.aA(m.length)]
if(f===3&&d.f>=d.e)f=a0.h8()?1:2}else{s=l.length
if(s!==0)f=l[a0.aA(s)]
else f=g?1:-1}if(f===3)++d.f
C.aeV(d,e,f)
return f},
c5r(d){var w=0,v=A.j(x.y),u
var $async$c5r=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c5q(d),$async$c5r)
case 3:if(f){u=!0
w=1
break}u=A.c5q(d)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c5r,v)},
aeV(d,e,f){var w,v="winStreak",u="loseStreak",t=C.f9B(d,e),s=J.a8(t),r=A.aN(s.h(t,v)),q=r==null?null:B.k.O(r)
if(q==null)q=0
r=A.aN(s.h(t,u))
w=r==null?null:B.k.O(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
fk5:function fk5(){},
fk6:function fk6(){},
fk7:function fk7(d,e){this.a=d
this.b=e},
fyj:function fyj(d,e,f){this.a=d
this.b=e
this.c=f},
fyl:function fyl(d,e){this.a=d
this.b=e},
fyk:function fyk(d,e){this.a=d
this.b=e},
amp:function amp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhj:function bhj(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cS$=d
_.b2$=e
_.c=_.a=null},
dsZ:function dsZ(d){this.a=d},
dsY:function dsY(d){this.a=d},
dt_:function dt_(d){this.a=d},
dsX:function dsX(d,e){this.a=d
this.b=e},
aJG:function aJG(){},
MN:function MN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c6g:function c6g(){},
c6f:function c6f(){},
aop:function aop(d,e,f){this.c=d
this.d=e
this.a=f},
fOg(d,e,f){return A.ca(null,B.w.j(0.88),!0,null,new C.c6I(f,e),d,null,!0,!0,x.H)},
hxo(d){var w,v,u,t,s=B.a.i(d),r=s.split("-")
if(r.length===3){w=A.c7(r[0],null)
v=r[1]
u=A.c7(v,null)
t=A.c7(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?B.ib[u-1]:v)+" "+A.t(t)+", "+A.t(w)}return s},
MV:function MV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c6I:function c6I(d,e){this.a=d
this.b=e},
bi_:function bi_(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
dT_:function dT_(d,e){this.a=d
this.b=e},
dSW:function dSW(){},
dSX:function dSX(){},
dSY:function dSY(d,e){this.a=d
this.b=e},
dSZ:function dSZ(d,e){this.a=d
this.b=e},
aKf:function aKf(){},
hfO(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.bfh(new C.ftF(w))
w=w.a
return w==null?null:w.c.a},
hfG(d){$.aT.x1$.push(new C.fts(d))},
hg_(d){var w=$.rK().gbe(),v=w!=null
if(!v||w.c==null)return
if(C.hfO(w)==="GamePlayScreen")if(v&&w.c!=null&&w.pi())w.eI()},
hfZ(d){C.hcF(d,0)},
hcF(d,e){var w,v
if(e>4)return
w=d==null?$.rK().gbe():d
if(w==null||w.c==null)return
v=C.hfO(w)
if(v==="GameCenterScreen")return
if(D.eGU.t(0,v)&&w.pi()){w.eI()
$.aT.x1$.push(new C.fgn(w,e))}},
aO5(d,e,f){return A.ej(A.cn(new C.fv1(e,d,f)),e,!0)},
ftF:function ftF(d){this.a=d},
fts:function fts(d){this.a=d},
ftr:function ftr(d){this.a=d},
fgn:function fgn(d,e){this.a=d
this.b=e},
fv1:function fv1(d,e,f){this.a=d
this.b=e
this.c=f},
aot(d,e){var w=0,v=A.j(x.H),u
var $async$aot=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=A.Up(e)
w=2
return A.b(A.aos(d,u),$async$aot)
case 2:A.a6n(d,u)
return A.h(null,v)}})
return A.i($async$aot,v)},
up(d,e,f,g,h,i,j,k){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$up=A.e(function(l,m){if(l===1)return A.f(m,v)
for(;;)switch(w){case 0:o=A.xX(g)
if(o.length===0){w=1
break}t=e==null?A.Kt(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return A.b(A.MW(o),$async$up)
case 3:q=m
if(j!=null&&j.length!==0&&J.qJ(q,new C.c6W(j))){w=1
break}p=e==null?new A.S(Date.now(),0,!1):e
J.pm(q,0,new A.j5(B.o.u(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return A.b(C.aot(o,q),$async$up)
case 4:if(i==null||r==null||s)C.a6p(o).bz(new C.c6X(),x.S).eU(new C.c6Y())
case 1:return A.h(u,v)}})
return A.i($async$up,v)},
a6p(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a6p=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=$.hgX
m=A.xX(d)
if(n==null||m.length===0){w=1
break}w=3
return A.b(A.MW(m),$async$a6p)
case 3:t=f
s=J.cE(t)
if(!s.b8(t,new C.c6V())){w=1
break}w=4
return A.b(n.$2(m,t),$async$a6p)
case 4:r=f
q=J.a8(r)
if(q.gM(r)!==s.gM(t)){w=1
break}for(p=!1,o=0;o<s.gM(t);++o)if(B.R.ao(s.h(t,o).ae(),null)!==B.R.ao(q.h(r,o).ae(),null))p=!0
w=p?5:6
break
case 5:w=7
return A.b(C.aot(m,r),$async$a6p)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$a6p,v)},
aYE(d){var w=0,v=A.j(x.S),u,t
var $async$aYE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fOj(d,!1),$async$aYE)
case 3:t=J
w=4
return A.b(C.aou(d,!1),$async$aYE)
case 4:u=t.dH(f,new C.c6U(new A.S(Date.now(),0,!1).bP(-864e8))).gM(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYE,v)},
aou(d,e){var w=0,v=A.j(x.ac),u,t,s,r
var $async$aou=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=A.xX(d)
if(r.length===0){u=A.a([],x.gi)
w=1
break}w=3
return A.b(A.MW(r),$async$aou)
case 3:t=g
s=A.Up(t)
if(s.length!==J.ad(t))C.aot(r,s)
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aou,v)},
hXy(d){var w,v,u,t=new A.S(Date.now(),0,!1),s=t.by(d).a,r=B.o.an(s,6e7)
if(r<1)return"Just now"
w=B.o.an(s,36e8)
if(w<1)return""+r+"m ago"
if(B.o.an(s,864e8)<1)return""+w+"h ago"
v=B.o.F(A.dh(d),12)===0?12:B.o.F(A.dh(d),12)
s=B.ib[A.bG(d)-1]
r=A.by(d)===A.by(t)?"":", "+A.by(d)
w=B.a.aT(B.o.u(A.fY(d)),2,"0")
u=A.dh(d)<12?"AM":"PM"
return s+" "+A.bQ(d)+r+" \xb7 "+v+":"+w+" "+u},
byc(d){var w=B.k.aa(Math.abs(d),2).split(".")
return"$"+A.oy(w[0],A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fef(),null)+"."+w[1]},
bBN(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$bBN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aou(e,!1),$async$bBN)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
A.fOj(e,!0).bz(new C.fGz(e),t).bz(new C.fGA(),t).eU(new C.fGB())
w=4
return A.b(A.bV(B.K,null,new C.fGC(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bBN)
case 4:case 1:return A.h(u,v)}})
return A.i($async$bBN,v)},
fRb(d,e,f){var w=null,v=B.c.j(0.05),u=A.m(14),t=A.I(f.j(0.35),B.q,1)
return A.D(A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),B.bA,A.f2(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.dt)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.hI,w,w,w),1)},
dT0(d,e,f){var w=null,v=B.w.j(0.22),u=A.m(8),t=A.I(f.j(0.28),B.q,1)
return A.D(A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.f2(B.a3,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.eg)],x.p),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.LU,w,w,w),1)},
c6W:function c6W(d){this.a=d},
c6X:function c6X(){},
c6Y:function c6Y(){},
c6V:function c6V(){},
c6U:function c6U(d){this.a=d},
fef:function fef(){},
fGz:function fGz(d){this.a=d},
fGA:function fGA(){},
fGB:function fGB(){},
fGC:function fGC(d,e){this.a=d
this.b=e},
fGy:function fGy(d,e){this.a=d
this.b=e},
fGx:function fGx(d){this.a=d},
acm:function acm(d,e){this.c=d
this.a=e},
dT2:function dT2(){},
dT3:function dT3(){},
dT4:function dT4(){},
dT5:function dT5(d){this.a=d},
dT7:function dT7(){},
dT6:function dT6(d){this.a=d},
acl:function acl(d,e){this.c=d
this.a=e},
dT1:function dT1(){},
bBO(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return A.hR(B.aX,!1,w,d,new C.fGF(j,i,h,g,e,f),null,B.eN,!1,x.H)},
fGF:function fGF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fGD:function fGD(d,e){this.a=d
this.b=e},
fGE:function fGE(d,e){this.a=d
this.b=e},
ayY:function ayY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bdF:function bdF(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bq$=e
_.a7$=f
_.c=_.a=null},
d9t:function d9t(d,e){this.a=d
this.b=e},
d9s:function d9s(){},
acL:function acL(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aJb:function aJb(){},
ape(d,e,f){return new C.aZv(f,d,e,null)},
hy2(d){var w=A.a(B.k.aa(d,2).split("."),x.s),v=A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=A.oy(w[0],v,new C.c8w(),null)
return B.d.aI(w,".")},
aYH(){var w=$.t9
if((w>0?$.t9=w-1:w)<=0)$.t9=0},
ag6(d,e){var w=0,v=A.j(x.H),u
var $async$ag6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=$.fVA
w=u!=null?2:3
break
case 2:w=4
return A.b(u.$2(d,e),$async$ag6)
case 4:case 3:return A.h(null,v)}})
return A.i($async$ag6,v)},
aZv:function aZv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c8x:function c8x(d){this.a=d},
c8w:function c8w(){},
Mo:function Mo(){},
bYo:function bYo(){},
fV_(d){if(d>0)return"+"+d
return""+d},
fUn(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fv2(d,e){var w=J.q(e,d)
if(w==null)w=A.ftP().h(0,d)
return w==null?90:w},
fdd(d,e){var w,v,u=A.aX(x.S)
while(u.a<3){w=e.aA(41)-20
if(w===0)continue
u.L(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.L(0,d+v*7+3)
v=A.a([B.o.u(d)],x.s)
B.d.v(v,new A.jK(u,new C.fde(),u.$ti.k("jK<cm.E,n>")))
B.d.fq(v,e)
return v},
hbF(d,e,f){var w,v,u,t,s=A.aX(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.L(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.L(0,f[B.o.F(u,5)]+u);++u}t=A.a([d],x.s)
B.d.v(t,A.p4(s,3,s.$ti.k("cm.E")))
B.d.fq(t,e)
return t},
hSJ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=A.a([],x.dA),b2=new A.eP()
b2.dG(42)
for(w=x.s,v=0;v<200;++v){u=B.o.F(v,5)
if(u===0){t=[4,9,16,25,36,49,64,81,121,144,196,256][b2.aA(12)]
s=[2,3,5,6,7,10,11,13][b2.aA(8)]
r=B.k.O(Math.sqrt(t))
q=2+b2.aA(4)
p=B.o.an(q,2)
if((q&1)===0){o=""+r
n=""+s
m=p===1?o+"\u221a"+n:o+"x^"+p+"\u221a"+n}else{o=""+r
n=""+s
m=p===0?o+"\u221a"+n+"x":o+"x^"+p+"\u221a"+n+"x"}o=""+p
n=""+s
l=""+r+"x^"
b1.push(new C.I3("Simplify \u221a("+t*s+"x^"+q+")",m,C.hbF(m,b2,A.a([""+(r+1)+"x^"+o+"\u221a"+n,A.t(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aA(35)
j=b2.aA(4)===0?1:2+b2.aA(4)
i=b2.aA(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.I3("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.fdd(k,b2)))}else if(u===2){k=2+b2.aA(18)
j=b2.aA(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aA(10)+2
b1.push(new C.I3("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.fdd(g,b2)))}else b1.push(new C.I3("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.fdd(k,b2)))}else if(u===3){e=b2.aA(11)-5
o=b2.aA(11)
n=b2.aA(11)
d=b2.aA(11)+2
l=b2.h8()?1:-1
a0=e+l*(b2.aA(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===B.k.jR(a4)?""+B.k.O(a4):"\u221a"+a3
b1.push(new C.I3("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.fdd(a0,b2)))}else{a6=2+b2.aA(10)
a7=a6+2+b2.aA(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.I3("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.hbF(m,b2,A.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
i2m(d){var w,v,u=x.s,t=A.a(d.split(""),u)
if(t.length<4)return new A.dw(A.a(d.split(""),u),x.bJ).fW(0)
for(w=0;w<12;++w){B.d.fq(t,B.cI)
v=B.d.fW(t)
if(v!==d)return v}return new A.dw(t,x.bJ).fW(0)},
I3:function I3(d,e,f){this.a=d
this.b=e
this.c=f},
fde:function fde(){},
anS:function anS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBO:function aBO(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
dM2:function dM2(d){this.a=d},
dM3:function dM3(d){this.a=d},
dM4:function dM4(d){this.a=d},
dM5:function dM5(d,e){this.a=d
this.b=e},
dM6:function dM6(d,e){this.a=d
this.b=e},
dM7:function dM7(d){this.a=d},
dM1:function dM1(d){this.a=d},
dM8:function dM8(d){this.a=d},
dM0:function dM0(d){this.a=d},
dMb:function dMb(d){this.a=d},
dMc:function dMc(d){this.a=d},
dMa:function dMa(d,e){this.a=d
this.b=e},
dM9:function dM9(d,e){this.a=d
this.b=e},
aov:function aov(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aC4:function aC4(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
dTp:function dTp(d,e,f){this.a=d
this.b=e
this.c=f},
dTq:function dTq(d){this.a=d},
dTl:function dTl(d){this.a=d},
dTn:function dTn(d,e){this.a=d
this.b=e},
dTm:function dTm(d,e){this.a=d
this.b=e},
dTo:function dTo(d,e){this.a=d
this.b=e},
dTk:function dTk(d){this.a=d},
hue(d){var w,v,u,t,s,r,q,p=new A.S(Date.now(),0,!1),o=p.bP(36e8)
try{w=d.h(0,"start")
p=A.mH(J.k(w==null?"":w)).bS()
w=d.h(0,"end")
o=A.mH(J.k(w==null?"":w)).bS()}catch(v){}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"title")
u=J.k(u==null?"Event":u)
t=p
s=o
r=d.h(0,"notes")
r=r==null?null:J.k(r)
q=d.h(0,"location")
return new C.r8(w,u,t,s,r,q==null?null:J.k(q))},
a6v(d){var w=0,v=A.j(x.ck),u,t,s,r,q,p,o
var $async$a6v=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.b)
w=1
break}w=3
return A.b(A.az(),$async$a6v)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aU(J.q(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.b)
w=1
break}try{s=B.R.aH(0,t,null)
if(!x.j.b(s)){p=A.a([],x.b)
u=p
w=1
break}p=J.d8(s,x.f)
p=A.cD(p,new C.c7n(),p.$ti.k("J.E"),x.b1)
p=A.B(p,A.a4(p).k("J.E"))
B.d.b_(p,new C.c7o())
u=p
w=1
break}catch(n){r=A.a9(n)
$.am.$1("[calendar-memory] load: "+A.t(r))
p=A.a([],x.b)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$a6v,v)},
aoN(d,e){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$aoN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.a6v(d),$async$aoN)
case 2:r=g
q=J.cE(r)
q.bm(r,new C.c7k(e))
q.L(r,e)
q.b_(r,new C.c7l())
w=3
return A.b(A.az(),$async$aoN)
case 3:u=g
t=B.a.i(d.toLowerCase())
q=q.kp(r,80)
s=q.$ti.k("K<aj.E,a3<n,@>>")
q=A.B(new A.K(q,new C.c7m(),s),s.k("aj.E"))
w=4
return A.b(u.ar("String","ngmy_helper_calendar_v1_"+t,B.R.ao(q,null)),$async$aoN)
case 4:return A.h(null,v)}})
return A.i($async$aoN,v)},
hxB(d,e){var w=Date.now(),v=new A.S(w,0,!1).bS()
w=J.dH(d,new C.c7p(v,v.bP(A.dC(14,0,0,0,0,0).a)))
w=A.B(w,w.$ti.k("J.E"))
return w},
h3k(d){var w,v,u,t,s,r,q,p,o,n,m=C.hxB(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=A.dc(m,0,A.dJ(20,"count",x.S),A.T(m).c),v=w.$ti,w=new A.bW(w,w.gM(0),v.k("bW<aj.E>")),v=v.k("aj.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=B.o.F(A.dh(s),12)===0?12:B.o.F(A.dh(s),12)
q=A.dh(s)>=12?"PM":"AM"
p=B.a.aT(B.o.u(A.fY(s)),2,"0")
o=t.f
if((o==null?null:B.a.i(o).length!==0)===!0){o.toString
n=" @ "+B.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+A.bG(s)+"/"+A.bQ(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&B.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return B.a.i(u.charCodeAt(0)==0?u:u)},
r8:function r8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c7n:function c7n(){},
c7o:function c7o(){},
c7k:function c7k(d){this.a=d},
c7l:function c7l(){},
c7m:function c7m(){},
c7p:function c7p(d,e){this.a=d
this.b=e},
huf(d){var w,v,u,t,s,r,q,p,o=null,n=new A.S(Date.now(),0,!1)
try{w=d.h(0,"when")
n=A.mH(J.k(w==null?"":w)).bS()}catch(v){}w=d.h(0,"id")
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
return new C.r9(w,u,t,s,r,q,J.k(p==null?"user":p))},
h1G(d){var w=B.o.F(A.dh(d),12)===0?12:B.o.F(A.dh(d),12),v=A.dh(d)>=12?"PM":"AM"
return""+A.bG(d)+"/"+A.bQ(d)+" "+w+":"+B.a.aT(B.o.u(A.fY(d)),2,"0")+" "+v},
Tx(d){var w=0,v=A.j(x.e),u,t,s,r,q,p,o
var $async$Tx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.x)
w=1
break}w=3
return A.b(A.az(),$async$Tx)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aU(J.q(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.x)
w=1
break}try{s=B.R.aH(0,t,null)
if(!x.j.b(s)){p=A.a([],x.x)
u=p
w=1
break}p=J.d8(s,x.f)
p=A.cD(p,new C.c_M(),p.$ti.k("J.E"),x.Q)
p=A.B(p,A.a4(p).k("J.E"))
B.d.b_(p,new C.c_N())
u=p
w=1
break}catch(n){r=A.a9(n)
$.am.$1("[call-memory] load: "+A.t(r))
p=A.a([],x.x)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Tx,v)},
aX1(d,e){var w=0,v=A.j(x.H),u,t,s,r
var $async$aX1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$aX1)
case 2:u=g
t=A.dc(e,0,A.dJ(120,"count",x.S),A.T(e).c).dF(0)
s=B.a.i(d.toLowerCase())
r=A.T(t).k("K<1,a3<n,@>>")
r=A.B(new A.K(t,new C.c_K(),r),r.k("aj.E"))
w=3
return A.b(u.ar("String","ngmy_call_memory_v1_"+s,B.R.ao(r,null)),$async$aX1)
case 3:return A.h(null,v)}})
return A.i($async$aX1,v)},
aX2(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$aX2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:p=A.V(x.N,x.Q)
o=J
w=2
return A.b(C.Tx(d),$async$aX2)
case 2:u=o.aW(g)
case 3:if(!u.C()){w=4
break}t=u.gU(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("bc<2>")
q=A.B(new A.bc(p,u),u.k("J.E"))
B.d.b_(q,new C.c_L())
w=5
return A.b(C.aX1(d,q),$async$aX2)
case 5:return A.h(null,v)}})
return A.i($async$aX2,v)},
c_O(d,e){var w=0,v=A.j(x.e),u,t,s
var $async$c_O=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Tx(d),$async$c_O)
case 3:t=s.dH(g,new C.c_P(e.bP(-72e8),e.bP(72e8)))
t=A.B(t,t.$ti.k("J.E"))
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c_O,v)},
h1H(d,e){var w,v,u,t,s,r=J.a8(d)
if(r.gam(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.kp(d,e),v=w.$ti,w=new A.bW(w,w.gM(0),v.k("bW<aj.E>")),v=v.k("aj.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gUK()+"\n"
t=t.f
if(t!=null&&B.a.i(t).length!==0){s=B.a.i(t)
u+="  Voicemail/text: "+(s.length>180?B.a.ap(s,0,177)+"\u2026":s)+"\n"}}r=r.gM(d)>e?u+("\u2026 and "+(r.gM(d)-e)+" more\n"):u
return B.a.i(r.charCodeAt(0)==0?r:r)},
hZn(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new A.S(q,0,!1).bS(),o=d.toLowerCase(),n=A.c0(A.by(p),A.bG(p),A.bQ(p),0,0,0,0,0)
if(B.a.t(o,"yesterday"))n=n.bP(r)
else if(!B.a.t(o,"today")&&B.a.t(o,"last night"))n=n.bP(r)
w=A.af("\\b(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!0,!1,!1,!1).cD(o)
if(w==null)return null
q=w.b
v=q[1]
u=A.c7(v==null?"":v,null)
if(u==null)u=0
v=q[2]
t=A.c7(v==null?"":v,null)
if(t==null)t=0
s=q[3]
if(s==="pm"&&u<12)u+=12
if(s==="am"&&u===12)u=0
q=s==null
v=!1
if(q)if(u<=7)v=B.a.t(o,"am")||B.a.t(o,"morning")||B.a.t(o,"night")
if(v)if(B.a.t(o,"pm")||B.a.t(o,"afternoon")||B.a.t(o,"evening"))u=u<12?u+12:u
if(q&&B.a.t(o,"pm"))u=u<12?u+12:u
return A.c0(A.by(n),A.bG(n),A.bQ(n),u,t,0,0,0)},
hhm(d){var w=A.af("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
r9:function r9(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c_M:function c_M(){},
c_N:function c_N(){},
c_K:function c_K(){},
c_L:function c_L(){},
c_P:function c_P(d,e){this.a=d
this.b=e},
h3n(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lw(t,w,v,u==null?null:J.k(u))},
hxH(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b6(v,new C.c7v(),x.bP)
v=A.B(v,v.$ti.k("aj.E"))}if(v==null)v=D.d1N
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.z(d.h(0,"printable"),!0)
return new C.ig(r,w,v,u,t,typeof d.h(0,s)=="number"?B.k.O(A.ex(d.h(0,s))):0)},
hxG(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.hLh(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?B.k.O(A.ex(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?B.k.O(A.ex(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b6(s,new C.c7t(),x.u)
s=A.B(s,s.$ti.k("aj.E"))}return new C.i1(p,w,v,u,s==null?D.avO:s,t)},
hLi(d){var w,v,u,t=A.F([G.Bq,"investments",B.oC,"games",B.jz,"loans",B.hz,"withdrawals",B.kN,"deposits",B.kO,"civic",B.kM,"store",B.r2,"jobs",B.mm,"refunds",B.eR,"account",B.lL,"music",B.xR,"help"],x.dk,x.N)
for(w=new A.cJ(t,A.a4(t).k("cJ<1,2>")).gaf(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
hLh(d){switch(d){case"investments":return G.Bq
case"games":return B.oC
case"loans":return B.jz
case"withdrawals":return B.hz
case"deposits":return B.kN
case"civic":return B.kO
case"store":return B.kM
case"jobs":return B.r2
case"refunds":return B.mm
case"account":return B.eR
case"music":return B.lL
default:return B.xR}},
mW(d){var w=A.a([new C.lw("text",d,null,null)],x.a)
return w},
ag3(){var w=null,v=x.v
return A.a([new C.i1("investments","Investments",G.Bq,4280468830,A.a([new C.ig("inv1","How do I buy an investment plan?",C.mW("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.ig("inv2","When do I get paid from my plan?",C.mW("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.ig("inv3","Can I have more than one plan?",C.mW("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.i1("games","Games",B.oC,4287323382,A.a([new C.ig("gam1","How do NGMY games work?",C.mW("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.ig("gam2","Why did my game payout change?",C.mW("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.i1("loans","Loans",B.jz,4294538006,A.a([new C.ig("loan1","How do I apply for a loan?",C.mW("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.ig("loan2","What is the repayment period?",C.mW("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.i1("withdrawals","Withdrawals",B.hz,4282090230,A.a([new C.ig("wd1","How do I withdraw money?",C.mW("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.ig("wd2","Why is my withdrawal pending?",C.mW("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.i1("deposits","Deposits",B.kN,4279548070,A.a([new C.ig("dep1","How do I deposit funds?",C.mW("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.ig("dep2","How long until my deposit posts?",C.mW("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.i1("civic","Civic Registry",B.kO,4289170426,A.a([new C.ig("civ1","What is Civic Registry?",C.mW("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.ig("civ2","What does \u201cmissed\u201d mean on my profile?",C.mW("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.i1("store","NGMY Store",B.kM,4293675161,A.a([new C.ig("sto1","How do I buy from NGMY Store?",C.mW("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.ig("sto2","How do I sell in the store?",C.mW("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.i1("jobs","Jobs & Creator",B.r2,4293548044,A.a([new C.ig("job1","How do I find jobs?",C.mW("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.ig("job2","How do I post a job?",C.mW("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.i1("refunds","Refunds",B.mm,4293870660,A.a([new C.ig("ref1","Can I get a refund?",C.mW("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.ig("ref2","How long do refunds take?",C.mW("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.i1("account","Account",B.eR,4281908728,A.a([new C.ig("acc1","How do I update my profile?",C.mW("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.ig("acc2","I forgot my password \u2014 what now?",C.mW("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.i1("music","Music Charts",B.lL,4290807036,A.a([new C.ig("mus1","What are Music Charts?",C.mW("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.ig("mus2","How do I upload music?",C.mW("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.i1("help","Help Center",B.xR,4279080072,A.a([new C.ig("hlp1","Where can I get live help?",C.mW("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.ig("hlp2","How do daily Helper limits work?",C.mW("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
h3o(d){var w,v=J.a8(d),u=v.gam(d)
if(u)return C.ag3()
v=v.dt(d,new C.c7y(),x.i)
w=A.B(v,v.$ti.k("aj.E"))
B.d.b_(w,new C.c7z())
return w.length===0?C.ag3():w},
h3p(d){var w=J.b6(d,new C.c7A(),x.P)
w=A.B(w,w.$ti.k("aj.E"))
return A.F(["categories",w,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z)},
aoP(d){return C.hxI(d)},
hxI(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q,p
var $async$aoP=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.az(),$async$aoP)
case 6:s=f
w=7
return A.b(s.ar("String","ngmy_helper_kb_v1",B.R.ao(C.h3p(d),null)),$async$aoP)
case 7:u=1
w=5
break
case 3:u=2
p=t.pop()
r=A.a9(p)
$.am.$1("[helper kb] local save: "+A.t(r))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$aoP,v)},
c7x(){var w=0,v=A.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$c7x=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$c7x)
case 7:r=e
q=A.aU(J.q(r.a,"ngmy_helper_kb_v1"))
if(q==null||B.a.i(q).length===0){l=C.ag3()
u=l
w=1
break}p=B.R.aH(0,q,null)
if(!x.f.b(p)){l=C.ag3()
u=l
w=1
break}o=J.q(p,"categories")
if(!x.j.b(o)){l=C.ag3()
u=l
w=1
break}n=C.h3o(o)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
m=A.a9(j)
$.am.$1("[helper kb] local load: "+A.t(m))
l=C.ag3()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$c7x,v)},
aZ2(){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$aZ2=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c1(),$async$aZ2)
case 7:if(!e){u=null
w=1
break}w=8
return A.b(A.f1("ngmy_helper_kb",null,!1,B.bG),$async$aZ2)
case 8:q=e
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a9(o)
$.am.$1("[helper kb] cloud fetch: "+A.t(r))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aZ2,v)},
aZ3(d){return C.hxJ(d)},
hxJ(d){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aZ3=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c1(),$async$aZ3)
case 7:if(!f){u=!1
w=1
break}w=8
return A.b(A.hB("ngmy_helper_kb",d,!1,!1,B.cG,null),$async$aZ3)
case 8:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a9(o)
$.am.$1("[helper kb] cloud upsert: "+A.t(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aZ3,v)},
aoQ(){var w=0,v=A.j(x.I),u,t,s,r
var $async$aoQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c7x(),$async$aoQ)
case 3:s=e
w=4
return A.b(C.aZ2(),$async$aoQ)
case 4:r=e
w=r!=null&&x.j.b(J.q(r,"categories"))?5:6
break
case 5:t=C.h3o(x.j.a(J.q(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return A.b(C.aoP(t),$async$aoQ)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoQ,v)},
c7B(d){var w=0,v=A.j(x.y),u
var $async$c7B=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aoP(d),$async$c7B)
case 3:u=C.aZ3(C.h3p(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c7B,v)},
lw:function lw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ig:function ig(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c7w:function c7w(){},
c7v:function c7v(){},
i1:function i1(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c7u:function c7u(){},
c7t:function c7t(){},
c7y:function c7y(){},
c7z:function c7z(){},
c7A:function c7A(){},
b7i:function b7i(d){this.a=d},
Uw:function Uw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCg:function aCg(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
dX4:function dX4(){},
dX5:function dX5(){},
dWZ:function dWZ(d){this.a=d},
dX_:function dX_(d){this.a=d},
dWI:function dWI(d,e){this.a=d
this.b=e},
dWJ:function dWJ(d){this.a=d},
dWK:function dWK(d,e,f){this.a=d
this.b=e
this.c=f},
dWH:function dWH(d){this.a=d},
dWW:function dWW(d,e){this.a=d
this.b=e},
dWX:function dWX(d,e){this.a=d
this.b=e},
dWY:function dWY(d){this.a=d},
dWQ:function dWQ(d){this.a=d},
dWR:function dWR(d,e,f){this.a=d
this.b=e
this.c=f},
dWP:function dWP(d,e){this.a=d
this.b=e},
dWV:function dWV(d,e,f){this.a=d
this.b=e
this.c=f},
dWU:function dWU(d,e){this.a=d
this.b=e},
dWT:function dWT(d,e){this.a=d
this.b=e},
dWS:function dWS(d,e,f){this.a=d
this.b=e
this.c=f},
dWM:function dWM(d){this.a=d},
dWL:function dWL(d){this.a=d},
dWN:function dWN(d,e){this.a=d
this.b=e},
dWO:function dWO(d){this.a=d},
dX3:function dX3(d,e){this.a=d
this.b=e},
dX2:function dX2(d,e){this.a=d
this.b=e},
dX1:function dX1(){},
dX0:function dX0(d,e){this.a=d
this.b=e},
OM:function OM(d,e){this.c=d
this.a=e},
b98:function b98(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cJa:function cJa(d){this.a=d},
cJ9:function cJ9(d,e){this.a=d
this.b=e},
cJ7:function cJ7(d,e){this.a=d
this.b=e},
cJb:function cJb(d){this.a=d},
cJ8:function cJ8(d,e){this.a=d
this.b=e},
cJ6:function cJ6(d,e){this.a=d
this.b=e},
cJc:function cJc(d){this.a=d},
cJd:function cJd(d,e){this.a=d
this.b=e},
a_5:function a_5(d,e,f){this.c=d
this.d=e
this.a=f},
aEe:function aEe(){this.d=$
this.c=this.a=null},
eLL:function eLL(d,e){this.a=d
this.b=e},
eLM:function eLM(d){this.a=d},
eLS:function eLS(){},
eLR:function eLR(d,e){this.a=d
this.b=e},
eLQ:function eLQ(d,e){this.a=d
this.b=e},
eLN:function eLN(d,e){this.a=d
this.b=e},
eLP:function eLP(d,e,f){this.a=d
this.b=e
this.c=f},
eLO:function eLO(d,e,f){this.a=d
this.b=e
this.c=f},
a_4:function a_4(d,e){this.c=d
this.a=e},
aEd:function aEd(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
eLH:function eLH(d,e){this.a=d
this.b=e},
eLF:function eLF(d){this.a=d},
eLG:function eLG(d,e){this.a=d
this.b=e},
eLJ:function eLJ(d,e){this.a=d
this.b=e},
eLK:function eLK(d){this.a=d},
eLI:function eLI(d,e){this.a=d
this.b=e},
hxE(d){var w=new A.K(d,new C.c7q(),A.T(d).k("K<1,n>")).aI(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
c7r(d,e,f){return C.hxF(d,e,f)},
hxF(b4,b5,b6){var w=0,v=A.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$c7r=A.e(function(b8,b9){if(b8===1)return A.f(b9,v)
for(;;)switch(w){case 0:b3=B.a.i(b5)
if(b3.length===0){u=new A.JD([A.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return A.b(A.qF(A.mZ(b3),C.hxE(b6)+"\n\nAdmin instruction:\n"+b4,B.hl,null),$async$c7r)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=B.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new A.JD([A.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=B.a.i(a3)
if(J.cZ(s,"```"))s=B.a.e9(J.fYm(s,A.af("^```(?:json)?\\s*",!0,!1,!1,!1),""),A.af("\\s*```$",!0,!1,!1,!1),"")
r=B.R.aH(0,s,null)
a3=x.f
if(!a3.b(r)){a3=A.a([],x.Y)
u=new A.JD([a3,"AI response was not valid JSON.",null,null])
w=1
break}a4=x.N
a5=x.z
q=A.a1(r,a4,a5)
a6=J.q(q,"message")
p=a6==null?null:J.k(a6)
a6=J.q(q,"replaceCategoryId")
o=a6==null?null:J.k(a6)
n=J.q(q,"categories")
a6=x.j
if(!a6.b(n)||J.ck(n)){a3=A.a([],x.Y)
u=new A.JD([a3,"AI did not return any categories.",p,o])
w=1
break}m=A.a([],x.Y)
l=b6.length
for(k=0,a7=x.v,a8=x.a;k<J.ad(n);++k){j=A.a1(a3.a(J.q(n,k)),a4,a5)
i="cat_ai_"+1000*Date.now()+"_"+A.t(k)
h=J.q(j,"questions")
g=A.a([],a7)
if(a6.b(h))for(f=0;f<J.ad(h);++f){e=A.a1(a3.a(J.q(h,f)),a4,a5)
d=J.q(e,"answerBlocks")
a0=A.a([],a8)
if(a6.b(d))for(a9=J.aW(d);a9.C();){a1=a9.gU(a9)
J.cf(a0,C.h3n(A.a1(a3.a(a1),a4,a5)))}if(J.ad(a0)===0){a9=J.q(e,"answer")
J.cf(a0,new C.lw("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=A.t(f)
b1=J.q(e,"question")
J.cf(g,new C.ig("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.z(J.q(e,"printable"),!0),f))}a9=J.q(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.q(j,"iconKey")
b0=C.hxD(J.k(b0==null?"help":b0))
b1=typeof J.q(j,"colorValue")=="number"?B.k.O(A.ex(J.q(j,"colorValue"))):4284773515
J.cf(m,new C.i1(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ad(a3)!==0)===!0?o:null
u=new A.JD([m,null,p,a3])
w=1
break}catch(b7){a2=A.a9(b7)
a3=A.t(a2)
a4=A.a([],x.Y)
u=new A.JD([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c7r,v)},
hxD(d){switch(d){case"investments":return G.Bq
case"games":return B.oC
case"loans":return B.jz
case"withdrawals":return B.hz
case"deposits":return B.kN
case"civic":return B.kO
case"store":return B.kM
case"jobs":return B.r2
case"refunds":return B.mm
case"account":return B.eR
case"music":return B.lL
default:return B.xR}},
hXU(d,e,f){var w,v,u,t=A.bl(d,!0,x.i)
if(f!=null&&J.ad(e)===1){w=B.d.ba(t,new C.fvp(f))
if(w>=0){t[w]=J.fo(e).cFc(f,t[w].f)
return t}}B.d.v(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].b9Q(u)
return t},
c7q:function c7q(){},
fvp:function fvp(d){this.a=d},
d_C:function d_C(d){this.a=d},
Ux:function Ux(d,e,f){this.c=d
this.d=e
this.a=f},
aCi:function aCi(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
dXF:function dXF(){},
dXl:function dXl(d,e){this.a=d
this.b=e},
dXq:function dXq(d,e){this.a=d
this.b=e},
dXo:function dXo(d,e){this.a=d
this.b=e},
dXm:function dXm(d){this.a=d},
dXn:function dXn(d){this.a=d},
dXp:function dXp(d,e,f){this.a=d
this.b=e
this.c=f},
dXh:function dXh(){},
dXi:function dXi(){},
dXj:function dXj(){},
dXk:function dXk(){},
dXv:function dXv(d,e){this.a=d
this.b=e},
dXw:function dXw(d){this.a=d},
dXx:function dXx(d){this.a=d},
dXy:function dXy(d){this.a=d},
dXz:function dXz(d){this.a=d},
dXA:function dXA(d){this.a=d},
dXB:function dXB(){},
dXC:function dXC(d){this.a=d},
dXu:function dXu(d){this.a=d},
dXD:function dXD(d){this.a=d},
dXt:function dXt(d){this.a=d},
dXE:function dXE(d,e){this.a=d
this.b=e},
dXs:function dXs(d,e){this.a=d
this.b=e},
dXr:function dXr(d,e){this.a=d
this.b=e},
hFs(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.a([],x.eO)
for(w=A.af("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kR(0,d),w=new A.J6(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=B.a.ap(d,t,q)
o=u?B.cp:B.aK
m.push(new A.eo(p,n,n,B.cO,n,n,n,n,n,n,new A.G(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?B.cp:B.aK
m.push(new A.eo(p,n,n,B.cO,n,n,n,n,n,n,new A.G(!0,o,n,n,n,n,13,B.H,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?B.cp:B.aK
m.push(new A.eo(p,n,n,B.cO,n,n,n,n,n,n,new A.G(!0,o,n,n,n,n,13,n,B.cC,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?B.cp:B.aK
m.push(new A.eo(p,n,n,B.cO,n,n,n,n,n,n,new A.G(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,B.mA,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=B.a.b0(d,t)
m.push(A.dq(n,n,n,n,n,n,n,n,n,A.l(n,n,u?B.cp:B.aK,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return A.tj(n,n,n,B.eC,n,n,!0,n,A.dq(m,n,n,n,n,n,n,n,n,n,n),B.a5,n,n,B.df,B.cd)},
ddK:function ddK(d){this.a=d},
azR:function azR(d,e){this.a=d
this.b=e},
aoO:function aoO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCh:function aCh(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
dXe:function dXe(d,e){this.a=d
this.b=e},
dXf:function dXf(d,e){this.a=d
this.b=e},
dX6:function dX6(d){this.a=d},
dX7:function dX7(d){this.a=d},
dXg:function dXg(){},
dX9:function dX9(d,e){this.a=d
this.b=e},
dX8:function dX8(d,e){this.a=d
this.b=e},
dXb:function dXb(){},
dXd:function dXd(){},
dXc:function dXc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dXa:function dXa(d,e){this.a=d
this.b=e},
azP:function azP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aaU:function aaU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aZ1:function aZ1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c7s:function c7s(d){this.a=d},
aaM:function aaM(d,e,f){this.c=d
this.d=e
this.a=f},
cCR:function cCR(d){this.a=d},
cCS:function cCS(){},
cCT:function cCT(d){this.a=d},
azQ:function azQ(d,e,f){this.c=d
this.d=e
this.a=f},
bf9:function bf9(){this.c=this.a=this.d=null},
ddL:function ddL(d,e){this.a=d
this.b=e},
ddN:function ddN(d,e){this.a=d
this.b=e},
ddM:function ddM(d){this.a=d},
hzb(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
hzc(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
hza(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
hbA(d){var w
if(new A.a2(A.a(d.split("\n"),x.s),new C.fcZ(),x.cc).gM(0)<3)w=d.length>100&&B.a.t(d,"\n")
else w=!0
return w},
hZ2(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.hza(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
apB:function apB(d,e){this.a=d
this.b=e},
I8:function I8(d,e){this.a=d
this.b=e},
rf:function rf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fcZ:function fcZ(){},
aoR:function aoR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCj:function aCj(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=!1
_.x=g
_.y=h
_.Q=_.z=null
_.as=$
_.bq$=i
_.a7$=j
_.c=_.a=null},
dXT:function dXT(d,e){this.a=d
this.b=e},
dXK:function dXK(d){this.a=d},
dXM:function dXM(){},
dXN:function dXN(d,e){this.a=d
this.b=e},
dXO:function dXO(d){this.a=d},
dXP:function dXP(){},
dXQ:function dXQ(d,e){this.a=d
this.b=e},
dXR:function dXR(d){this.a=d},
dXS:function dXS(d){this.a=d},
dXL:function dXL(d,e){this.a=d
this.b=e},
dY_:function dY_(d,e){this.a=d
this.b=e},
dXX:function dXX(){},
dXY:function dXY(d,e){this.a=d
this.b=e},
dXZ:function dXZ(d,e){this.a=d
this.b=e},
dXW:function dXW(d,e){this.a=d
this.b=e},
dXV:function dXV(d,e){this.a=d
this.b=e},
dY1:function dY1(d){this.a=d},
dY0:function dY0(d){this.a=d},
dXJ:function dXJ(d,e){this.a=d
this.b=e},
dXI:function dXI(d,e){this.a=d
this.b=e},
dY2:function dY2(d,e){this.a=d
this.b=e},
dXU:function dXU(d,e){this.a=d
this.b=e},
dXG:function dXG(d){this.a=d},
dXH:function dXH(d){this.a=d},
aKn:function aKn(){},
c7D(d){var w=0,v=A.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$c7D=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=D.QR
w=1
break}w=3
return A.b(A.az(),$async$c7D)
case 3:r=f
q=B.a.i(d.toLowerCase())
t=A.aU(J.q(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.QR
w=1
break}try{q=A.a1(x.f.a(B.R.aH(0,t,null)),x.N,x.z)
p=J.z(q.h(0,"contacts"),!0)
o=J.z(q.h(0,"calendar"),!0)
n=J.z(q.h(0,"calls"),!0)
q=J.z(q.h(0,"allGrantedOnce"),!0)
u=new C.Uy(p,o,n,q)
w=1
break}catch(l){s=A.a9(l)
$.am.$1("[helper-perms] load: "+A.t(s))
u=D.QR
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c7D,v)},
aoS(d,e){var w=0,v=A.j(x.H),u
var $async$aoS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){w=1
break}w=4
return A.b(A.az(),$async$aoS)
case 4:w=3
return A.b(g.ar("String","ngmy_helper_permissions_v1_"+B.a.i(d.toLowerCase()),B.R.ao(e.ae(),null)),$async$aoS)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aoS,v)},
c7C(d){var w=0,v=A.j(x.gp),u,t
var $async$c7C=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=new C.Uy(!0,!0,!0,!0)
w=3
return A.b(C.aoS(d,t),$async$c7C)
case 3:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c7C,v)},
hhn(d){var w=B.a.i(d.toLowerCase()),v=A.af("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=A.af("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=A.af("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=A.af("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
hhl(d){var w=A.af("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
Uy:function Uy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bBU(d,e,f,g,h){var w=0,v=A.j(x.H),u,t,s
var $async$bBU=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return A.b(C.aYY(h),$async$bBU)
case 3:if(j){w=1
break}w=4
return A.b(C.aoK(h),$async$bBU)
case 4:if(d.e==null){w=1
break}t=A.qm(d,!0)
t.toString
s=A.df()
s.b=A.od(new C.fHp(g,e,f,s),!1,!1)
t.lI(0,s.bd())
case 1:return A.h(u,v)}})
return A.i($async$bBU,v)},
fHp:function fHp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fHo:function fHo(d){this.a=d},
YP:function YP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
azg:function azg(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
db4:function db4(d){this.a=d},
db5:function db5(d,e,f){this.a=d
this.b=e
this.c=f},
dba:function dba(){},
db9:function db9(d){this.a=d},
db6:function db6(d){this.a=d},
db7:function db7(){},
db8:function db8(d){this.a=d},
aJg:function aJg(){},
hyE(d){var w=B.a.i(d),v=A.af("[^A-Z0-9]",!0,!1,!1,!1),u=A.aJ(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
hyD(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
apn(d){return C.hyB(d)},
hyB(d){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$apn=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.f1("ngmy_local_deposit_qr_v1_"+B.a.i(d),null,!1,B.bG),$async$apn)
case 7:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a9(o)
$.am.$1("[local deposit qr] load: "+A.t(r))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$apn,v)},
aZT(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aZT=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.hyE(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.f1("ngmy_local_deposit_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bG),$async$aZT)
case 7:r=f
if(r==null){u=null
w=1
break}if(J.z(J.q(r,"redeemed"),!0)){u=null
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
q=A.a9(m)
$.am.$1("[local deposit qr] code lookup: "+A.t(q))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aZT,v)},
h3N(d){var w,v=B.a.i(d)
if(B.a.a0(v,"NGMYLOCALDEP1|")){w=B.a.i(B.a.b0(v,14))
return w.length===0?null:w}return null},
hyC(d,e,f){var w=B.a.i(f)
if(w.length===0)return!1
return B.d.b8(e,new C.c9q(B.a.i(d.toLowerCase()),w))},
h3O(d,e,f,g,h){var w,v,u=J.a8(g),t=u.h(g,"lockedToEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=B.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.pE(!1,0,y.u)
if(s!==B.a.i(f.toLowerCase()))return new C.pE(!1,0,y.j)
v=B.a.i(h)
if(v.length===0)return new C.pE(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.pE(!1,0,"Verification code does not match this deposit.")
if(!C.hyC(e,d,w))return new C.pE(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
fOz(d,e){var w,v,u="amount",t=J.a8(d),s=t.h(d,"redeemedBy")
if(B.a.i(J.k(s==null?"":s)).length!==0)return D.dwU
s=t.h(d,"lockedToEmail")
w=B.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=B.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){A.aN(t.h(d,u))
return new C.N8(!0,!1,!1,!0)}if(w!==B.a.i(e.toLowerCase())){A.aN(t.h(d,u))
return new C.N8(!0,!1,!0,!1)}A.aN(t.h(d,u))
return new C.N8(!0,!1,!1,!1)},
c9w(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$c9w=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=C.h3N(d)
if(s==null){u=D.QT
w=1
break}w=3
return A.b(C.apn(s),$async$c9w)
case 3:t=g
if(t==null){u=D.QT
w=1
break}u=C.fOz(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c9w,v)},
aZV(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$aZV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aZT(d),$async$aZV)
case 3:s=g
if(s==null||s.length===0){u=D.QT
w=1
break}w=4
return A.b(C.apn(s),$async$aZV)
case 4:t=g
if(t==null){u=D.QT
w=1
break}u=C.fOz(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZV,v)},
c9x(d,e,f,g,h){var w=0,v=A.j(x.D),u,t
var $async$c9x=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aZT(d),$async$c9x)
case 3:t=j
if(t==null||t.length===0){u=new C.pE(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.UT(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c9x,v)},
UT(d,e,f,g,h){return C.hyF(d,e,f,g,h)},
hyF(a2,a3,a4,a5,a6){var w=0,v=A.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$UT=A.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.h3N(a4)
if(a0==null){u=new C.pE(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return A.b(C.apn(a0),$async$UT)
case 3:k=a8
if(k==null){u=new C.pE(!1,0,y.m)
w=1
break}j=C.fOz(k,a5)
if(j.b){u=new C.pE(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.pE(!1,0,y.u)
w=1
break}if(j.c){u=new C.pE(!1,0,y.j)
w=1
break}i=C.h3O(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=A.aN(J.q(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.pE(!1,0,"Invalid deposit amount.")
w=1
break}r=new A.S(Date.now(),0,!1).a6().ac()
q=B.a.i(a5.toLowerCase())
t=5
w=8
return A.b(A.f1("ngmy_local_deposit_qr_v1_"+B.a.i(a0),null,!1,B.bG),$async$UT)
case 8:p=a8
if(p==null){u=new C.pE(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.q(p,"redeemedBy")
if(B.a.i(J.k(g==null?"":g)).length!==0){u=new C.pE(!1,0,"This deposit code was already used.")
w=1
break}o=C.h3O(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=B.a.i(a0)
f=x.N
e=x.z
n=A.dT(p,f,e)
J.aG(n,"redeemedBy",q)
J.aG(n,"redeemedAt",r)
w=9
return A.b(A.hB("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,B.cG,null),$async$UT)
case 9:n=J.q(p,"shortCode")
m=B.a.i(J.k(n==null?"":n))
w=J.ad(m)!==0?10:11
break
case 10:w=12
return A.b(A.hB("ngmy_local_deposit_code_v1_"+B.a.i(m).toUpperCase(),A.F(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,B.cG,null),$async$UT)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=A.a9(a1)
$.am.$1("[local deposit qr] redeem: "+A.t(l))
u=new C.pE(!1,0,"Could not apply deposit. Check connection and try again.")
w=1
break
w=7
break
case 4:w=2
break
case 7:u=new C.pE(!0,h,null)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$UT,v)},
N8:function N8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
pE:function pE(d,e,f){this.a=d
this.b=e
this.c=f},
c9q:function c9q(d,e){this.a=d
this.b=e},
c9E(d,e){var w
A.fUB(d,e,!1)
A.qE(d.a,d.d,!0,!1)
w=B.a.i("")
if(w.length!==0)A.Al(!0,!1,d.d,w)},
a6S(d,e){if(d==null)return!1
return A.by(d)===e.gci()&&A.bG(d)===e.gce()&&A.bQ(d)===e.gct()},
hyN(d){var w=A.dh(d)*60+A.fY(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
h3V(d){if(A.dh(d)>=12)return!1
if(A.mr(d)===6||A.mr(d)===7)return!1
return!0},
c9I(d){var w=d.c?d.bS():d
return w.cY(A.c0(A.by(w),A.bG(w),A.bQ(w),12,0,0,0,0))},
fOD(d,e){var w,v,u,t=d.gBX()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a6S(d.fx,e)&&d.fy>0.0001)return B.k.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bS()
if(!C.c9I(w))return 0
v=A.c0(e.gci(),e.gce(),e.gct(),12,0,0,0,0)
if(!e.cY(v))return t
if(!e.cc(w))return 0
u=B.o.an(v.by(w).a,1000)
if(u<=0)return t
return B.k.D(t*(B.o.D(B.o.an(e.by(w).a,1000),0,u)/u),0,t)},
fOC(d,e){var w,v,u,t,s,r,q,p=new A.S(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a6S(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bS():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!B.d.b8(e,new C.c9D(s))&&C.c9I(t)){r=d.gBX()
v=r>0
if(v){q=new A.d2(s,d.a,r,B.fB,B.fb,"Clock-in daily earnings (local)",null,null,B.cl,p)
C.c9E(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a6S(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a6S(o,p)&&!C.c9I(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
c9D:function c9D(d){this.a=d},
hNn(d){var w,v,u=d.k4,t=u==null?null:B.a.i(u)
if(t!=null&&t.length!==0)return t
w=B.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=B.a.i(d.a)
if(B.a.t(v,"@"))return B.d.gK(v.split("@"))
return"Member"},
i3a(d,e,f,g,h,i){return A.hv(d,new C.apo(f,e,i,g,h,null),!0,null,x.H)},
h8a(d){var w,v,u=d.c?d.bS():d,t=A.dh(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+A.bG(u)+"/"+A.bQ(u)+"/"+A.by(u)+" \xb7 "+w+":"+B.a.aT(B.o.u(A.fY(u)),2,"0")+" "+v},
hfh(d){var w=d.x
if(w===B.ds)return"Processing"
if(w===B.k4)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
hVw(d){var w=d.f,v=B.a.i(w==null?"":w),u=v.toLowerCase()
if(B.a.t(u,"clock-in daily earnings")||B.a.t(u,"clock-in earnings"))return"Clock-in completed"
if(B.a.t(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===B.fq)return"Deposit"
if(w===B.eK)return"Withdrawal"
return v.length!==0?v:w.b},
hN2(d){var w=d.d,v=w===B.fq||w===B.od||w===B.fB||w===B.k5,u=d.x
if(u===B.ds)return w===B.eK?-d.c:0
if(u!==B.cl)return 0
w=d.c
return v?w:-w},
hW4(d,e){var w,v,u,t,s,r,q=A.B(d,x.o)
B.d.b_(q,new C.frp())
w=A.V(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,A.L)(q),++t,v=r){s=q[t]
r=v-C.hN2(s)
if(r<0)r=0
w.n(0,s.a,new A.bmu(v,r))}return w},
apo:function apo(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCG:function aCG(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
e8J:function e8J(d){this.a=d},
e9p:function e9p(d){this.a=d},
e9q:function e9q(d){this.a=d},
e9r:function e9r(d){this.a=d},
e97:function e97(d,e){this.a=d
this.b=e},
e98:function e98(){},
e99:function e99(d){this.a=d},
e9a:function e9a(){},
e9b:function e9b(d){this.a=d},
e9c:function e9c(d,e,f){this.a=d
this.b=e
this.c=f},
e9d:function e9d(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e92:function e92(d,e){this.a=d
this.b=e},
e8K:function e8K(d,e,f){this.a=d
this.b=e
this.c=f},
e93:function e93(){},
e94:function e94(){},
e95:function e95(d){this.a=d},
e96:function e96(){},
e8O:function e8O(d,e){this.a=d
this.b=e},
e8P:function e8P(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e8X:function e8X(){},
e8U:function e8U(d){this.a=d},
e8V:function e8V(d,e){this.a=d
this.b=e},
e8W:function e8W(d,e){this.a=d
this.b=e},
e8Y:function e8Y(d){this.a=d},
e8Z:function e8Z(d,e,f){this.a=d
this.b=e
this.c=f},
e9_:function e9_(d){this.a=d},
e91:function e91(d){this.a=d},
e90:function e90(d){this.a=d},
e8Q:function e8Q(d){this.a=d},
e8R:function e8R(d,e,f){this.a=d
this.b=e
this.c=f},
e9h:function e9h(){},
e9i:function e9i(){},
e9m:function e9m(d){this.a=d},
e9f:function e9f(d){this.a=d},
e9n:function e9n(d){this.a=d},
e9e:function e9e(d){this.a=d},
e9o:function e9o(d){this.a=d},
e9j:function e9j(d){this.a=d},
e9k:function e9k(d){this.a=d},
e9l:function e9l(d){this.a=d},
e9g:function e9g(d){this.a=d},
e8N:function e8N(d){this.a=d},
e8M:function e8M(d){this.a=d},
e8L:function e8L(d){this.a=d},
e8T:function e8T(d,e){this.a=d
this.b=e},
e8S:function e8S(d,e){this.a=d
this.b=e},
aA2:function aA2(d,e,f,g,h,i,j,k,l,m){var _=this
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
dfy:function dfy(){},
dfz:function dfz(){},
dfA:function dfA(d,e,f){this.a=d
this.b=e
this.c=f},
dfx:function dfx(d){this.a=d},
dfB:function dfB(d,e){this.a=d
this.b=e},
dfw:function dfw(d){this.a=d},
aA1:function aA1(d,e,f,g,h,i,j,k,l,m){var _=this
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
bfS:function bfS(d,e){var _=this
_.f=_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
dfr:function dfr(d){this.a=d},
dfs:function dfs(d){this.a=d},
dft:function dft(d){this.a=d},
dfu:function dfu(){},
dfv:function dfv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dfq:function dfq(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dfp:function dfp(d){this.a=d},
b9D:function b9D(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
b9C:function b9C(d,e,f){this.b=d
this.d=e
this.a=f},
b9B:function b9B(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aA3:function aA3(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aA4:function aA4(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
dfS:function dfS(){},
dfT:function dfT(){},
dfU:function dfU(){},
dfE:function dfE(d){this.a=d},
dfD:function dfD(d,e){this.a=d
this.b=e},
dfC:function dfC(d,e){this.a=d
this.b=e},
dfP:function dfP(d,e){this.a=d
this.b=e},
dfR:function dfR(d,e){this.a=d
this.b=e},
dfQ:function dfQ(d,e){this.a=d
this.b=e},
dfO:function dfO(){},
dfN:function dfN(d){this.a=d},
dfM:function dfM(){},
dfH:function dfH(d){this.a=d},
dfI:function dfI(){},
dfJ:function dfJ(d){this.a=d},
dfK:function dfK(d){this.a=d},
dfG:function dfG(){},
dfL:function dfL(d){this.a=d},
dfF:function dfF(d){this.a=d},
b93:function b93(d){this.a=d},
frp:function frp(){},
btv:function btv(d,e){this.b=d
this.a=e},
aJw:function aJw(){},
bvr:function bvr(){},
hS6(d,e,f,g,h,i,j,k){var w,v=B.a.i(j.toLowerCase())
B.d.bm(d,new C.fl2(v,g))
w=A.V(x.N,x.z)
w.n(0,"id",B.o.u(1000*Date.now()))
w.n(0,"fromEmail",B.a.i(e.toLowerCase()))
w.n(0,"fromName",f)
w.n(0,"toEmail",v)
if(k!=null&&B.a.i(k).length!==0)w.n(0,"toName",B.a.i(k))
w.n(0,"gameId",g)
w.n(0,"gameTitle",h)
w.n(0,"status","pending")
w.n(0,"createdAt",new A.S(Date.now(),0,!1).ac())
w.n(0,"matchesTotal",i)
w.n(0,"matchesPlayed",0)
w.n(0,"seriesStatus","active")
B.d.L(d,w)},
aNy(d){var w,v=J.a8(d),u=A.aN(v.h(d,"matchesTotal")),t=u==null?null:B.k.O(u)
if(t==null)t=1
v=A.aN(v.h(d,"matchesPlayed"))
w=v==null?null:B.k.O(v)
return B.o.D(t-(w==null?0:w),0,t)},
i1U(d,e){var w=A.T(e).k("a2<1>")
w=A.B(new A.a2(e,new C.fBM(B.a.i(d.toLowerCase())),w),w.k("J.E"))
return w},
agg(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.L)(d),++v){u=d[v]
if(C.aNy(u)<=0){t=J.cE(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
hUL(d,e){var w,v,u,t=J.a8(d),s=t.h(d,"status")
if(!J.z(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.z(s==null?"":s,"complete"))return!1
if(C.aNy(d)<=0)return!1
w=B.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=B.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=B.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aNy(d)>0},
hUK(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a8(d),h=A.aN(i.h(d,"matchesTotal")),g=h==null?null:B.k.O(h)
if(g==null)g=1
h=A.aN(i.h(d,"matchesPlayed"))
w=h==null?null:B.k.O(h)
v=(w==null?0:w)+1
u=B.a.i(e.toLowerCase())
t=i.h(d,"sessionState")
h=x.f
if(!h.b(t))return"Game "+v+" of "+g+" \u2014 tap Join room when you are ready"
s=x.N
r=x.z
q=A.a1(t,s,r)
p=q.h(0,"inGame")
o=h.b(p)?A.a1(p,s,r):A.V(s,r)
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
k=J.z(o.h(0,u),!0)
j=l!=null&&J.z(o.h(0,l),!0)
if(k&&!j)return"Game "+v+" of "+g+" \u2014 waiting for opponent to join the room"
i=!k
if(i&&j)return"Game "+v+" of "+g+" \u2014 your opponent is in the room. Join now"
if(i&&!j)return"Game "+v+" of "+g+" \u2014 both players tap Join room to start"
return"Game "+v+" of "+g+" \u2014 match in progress"},
hS5(d,e){var w
C.agg(e)
w=A.T(e).k("a2<1>")
w=A.B(new A.a2(e,new C.fl1(B.a.i(d.toLowerCase())),w),w.k("J.E"))
return w},
tJ(d,e){var w,v,u
for(w=J.aW(d);w.C();){v=w.gU(w)
u=J.q(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
hOG(d,e,f){var w,v,u,t="fromName",s=J.a8(f),r=s.h(f,"fromEmail"),q=B.a.i(J.k(r==null?"":r).toLowerCase())
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
fUj(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase()),r=J.a8(d),q=r.h(d,"fromEmail"),p=B.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=B.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.hOG(x.f.b(u)?A.a1(u,r,q):A.V(r,q),v,d)
if((t.length===0||B.a.t(t,"@"))&&f!=null){t=J.q(f,v)
if(t==null)t=""}if(t.length===0||B.a.t(t,"@"))return"Opponent"
return t},
bAH(){var w=0,v=A.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bAH=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bAH)
case 7:r=e
q=A.aU(J.q(r.a,"all_users"))
if(q==null||q.length===0){k=x.N
u=A.V(k,k)
w=1
break}p=B.R.aH(0,q,null)
if(!x.j.b(p)){k=x.N
u=A.V(k,k)
w=1
break}k=x.N
o=A.V(k,k)
for(k=J.aW(p),j=x.f;k.C();){n=k.gU(k)
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
u=A.V(k,k)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bAH,v)},
bzM(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bzM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return A.b(C.bAH(),$async$bzM)
case 3:u=t.fUj(s,r,g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzM,v)},
Kk(d,e,f){var w=0,v=A.j(x.h),u,t,s,r,q,p
var $async$Kk=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(d)
p=$.hcP.h(0,q)
if(p!=null){t=new A.S(Date.now(),0,!1).by(p)
t=t.a>A.dC(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.hcP.n(0,q,new A.S(Date.now(),0,!1))
w=5
return A.b(A.Q4(B.c6,q),$async$Kk)
case 5:case 4:s=$.hcO.h(0,q)
if(s==null){u=C.tJ(e,q)
w=1
break}r=C.tJ(A.bzS(e,A.a([s],x._)),q)
if(r!=null)A.fWE(e,r)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Kk,v)},
i26(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.L)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new A.S(Date.now(),0,!1).ac())
return}}},
hLp(d,e){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
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
for(q=x.S,r=0;r<8;++r)t[r]=A.iq(8,new C.fax(r),!0,q)
return A.F(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return A.F(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
hS4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.L)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new A.S(Date.now(),0,!1).ac())
r=C.hLp(u,f)
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
m=A.V(x.N,x.z)
if(w)m.n(0,o,!1)
if(s)m.n(0,n,!1)
r.n(0,"inGame",m)
t.n(u,"sessionState",r)
t.n(u,"sessionUpdatedAt",new A.S(Date.now(),0,!1).ac())
return}}},
i24(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.L)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)!==e)continue
w=A.aN(t.h(u,i))
w=w==null?null:B.k.O(w)
r=(w==null?0:w)+1
t.n(u,i,r)
w=A.aN(t.h(u,"matchesTotal"))
q=w==null?null:B.k.O(w)
if(r>=(q==null?1:q)){t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}else{p=t.h(u,h)
if(x.f.b(p)){w=x.N
s=x.z
o=A.a1(p,w,s)
o.n(0,"gameOver",!1)
o.W(0,"startAt")
n=o.h(0,"player1Email")
if(n==null)n=o.h(0,"playerXEmail")
m=B.a.i(J.k(n==null?"":n).toLowerCase())
n=o.h(0,"player2Email")
if(n==null)n=o.h(0,"playerOEmail")
l=B.a.i(J.k(n==null?"":n).toLowerCase())
k=A.V(w,s)
if(m.length!==0)k.n(0,m,!1)
if(l.length!==0)k.n(0,l,!1)
o.n(0,"inGame",k)
w=t.h(u,"gameId")
j=J.k(w==null?"":w)
if(j==="memory"){o.n(0,"memoryMatched",A.a([],x.t))
o.W(0,"memorySeed")}else if(j==="pattern")o.W(0,"patternSeed")
t.n(u,h,o)}}t.n(u,"sessionUpdatedAt",new A.S(Date.now(),0,!1).ac())
return}},
fWD(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.L)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",A.a1(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new A.S(Date.now(),0,!1).ac())
return}}},
fAA(d){var w=0,v=A.j(x.gw),u,t,s,r,q
var $async$fAA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.agg(d)
t=$.fTG
if(t==null)s=$.fTG=A.Q4(B.c6,null).fb(new C.fAB())
else s=t
w=3
return A.b(s,$async$fAA)
case 3:r=f
if(r==null){u=A.bl(new A.K(d,new C.fAC(),A.T(d).k("K<1,@>")),!0,x.P)
w=1
break}q=A.bzS(d,r)
B.d.a9(d)
B.d.v(d,q)
u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fAA,v)},
agh(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$agh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.agg(d)
t=A.T(d).k("K<1,a3<n,@>>")
t=A.B(new A.K(d,new C.fyw(),t),t.k("aj.E"))
w=3
return A.b(A.Q4(t,null),$async$agh)
case 3:s=f
if(s==null){u=!1
w=1
break}r=A.bzS(d,s)
B.d.a9(d)
B.d.v(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agh,v)},
aOr(d,e,f){var w=0,v=A.j(x.y),u,t,s,r
var $async$aOr=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:C.fWD(d,e,f)
t=C.tJ(d,e)
if(t==null){u=!1
w=1
break}w=3
return A.b(A.Q4(A.a([A.a1(t,x.N,x.z)],x._),e),$async$aOr)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.tJ(s,e)
if(r!=null)A.fWE(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aOr,v)},
hZL(d,e,f){var w
C.fWD(d,e,f)
w=$.fTu.h(0,e)
if(w!=null)w.a8(0)
$.fTu.n(0,e,A.cM(B.lG,new C.fyx(e,d)))},
fOk(d,e){return new C.aYF(!0,d,"NGMY",B.a.i(e.toLowerCase()),null,!0)},
fl2:function fl2(d,e){this.a=d
this.b=e},
fBM:function fBM(d){this.a=d},
fl1:function fl1(d){this.a=d},
fax:function fax(d){this.a=d},
fAB:function fAB(){},
fAC:function fAC(){},
fyw:function fyw(){},
fyx:function fyx(d,e){this.a=d
this.b=e},
aYF:function aYF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
i2z(d,e,f){return A.bV(B.K,null,new C.fCR(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
fCR:function fCR(d,e){this.a=d
this.b=e},
ZC:function ZC(d,e,f){this.c=d
this.d=e
this.a=f},
aCt:function aCt(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
e2Z:function e2Z(d){this.a=d},
e31:function e31(d){this.a=d},
e32:function e32(d){this.a=d},
e30:function e30(d){this.a=d},
e33:function e33(d){this.a=d},
e34:function e34(d,e){this.a=d
this.b=e},
e3_:function e3_(d,e){this.a=d
this.b=e},
hYh(d){var w,v,u,t=B.a.i(d)
if(t.length===0)return B.ic
w=t.toLowerCase()
v=A.af("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return B.ic
v=Date.now()
u=C.hO0(w,new A.S(v,0,!1))
v=x.N
return A.a([new A.kl("calendar",A.F(["title",C.hO_(t,w),"start",u.ac(),"end",u.bP(36e8).ac(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
hO_(d,e){var w,v,u,t,s,r=A.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cD(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return B.a.i(w==null?"":w)}u=A.af("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cD(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hdB(B.a.i(t))}s=A.af("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cD(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hdB(B.a.i(t))}if(B.a.t(e,"meeting"))return"Meeting"
if(B.a.t(e,"appointment"))return"Appointment"
return"NGMY Event"},
hdB(d){var w
if(d.length===0)return d
w=B.a.fz(d,A.af("\\s+",!0,!1,!1,!1))
return new A.K(w,new C.fkc(),A.T(w).k("K<1,n>")).aI(0," ")},
hO0(d,e){var w,v,u,t,s,r,q,p,o=A.c0(A.by(e),A.bG(e),A.bQ(e),0,0,0,0,0)
if(B.a.t(d,"tomorrow"))o=o.bP(864e8)
else if(!B.a.t(d,"today"))for(w=D.aCz.gdL(D.aCz),w=w.gaf(w);w.C();){v=w.gU(w)
u=v.a
if(A.dr(d,u,0)){t=C.hN1(o,v.b)
o=t
break}}s=A.af("\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cD(d)
if(s!=null){w=s.b
v=w[1]
r=A.c7(v==null?"":v,null)
if(r==null)r=9
v=w[2]
q=A.c7(v==null?"":v,null)
if(q==null)q=0
w=w[3]
p=w==null?null:w.toLowerCase()
if(p==="pm"&&r<12)r+=12
if(p==="am"&&r===12)r=0
if(p==null&&r>=1&&r<=7)r+=12}else{r=9
q=0}return A.c0(A.by(o),A.bG(o),A.bQ(o),r,q,0,0,0)},
hN1(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(A.mr(w)===e){u=!0
if(v<=0){t=d.bP(36e8)
s=w.a
if(s>=t.gbo())u=s===t.gbo()&&w.b<t.gcw()}}else u=!1
if(u)return w
w=w.bP(r)}return d.bP(r)},
fkc:function fkc(){},
hYi(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=B.a.i(d)
if(j.length===0)return B.ic
w=j.toLowerCase()
if(B.a.t(w,k))v=k
else v=B.a.t(w,"imessage")||B.a.t(w,"i message")?"sms":l
u=A.af("(?:saying|say|message|text|tell(?:ing)?)\\s+(.+)$",!1,!1,!1,!1).cD(j)
if(u!=null){t=u.b[1]
s=t==null?l:B.a.i(t)
if(s==null)s=""
t=A.af("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
s=B.a.i(A.aJ(s,t,""))
t=s.length
r=t>=2&&t<500?s:l}else r=l
q=C.hKf(w,j)
if(q==null||q.length===0)return B.ic
t=A.af("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=A.af("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return A.a([new A.kl("call",A.F(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=A.F(["name",q],t,t)
if(r!=null)m.n(0,"body",r)
return A.a([new A.kl(n,m)],x.Z)}if(p){t=x.N
return A.a([new A.kl("call",A.F(["name",q],t,t))],x.Z)}return B.ic},
hKf(d,e){var w,v,u,t,s,r,q=[A.af("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),A.af("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),A.af("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
for(w=0;w<3;++w){v=q[w].cD(d)
if(v==null)continue
u=v.b[1]
t=u==null?null:B.a.i(u)
if(t==null)t=""
u=A.af("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
t=B.a.i(A.aJ(t,u,""))
u=A.af("\\s+saying\\s+.+$",!1,!1,!1,!1)
t=B.a.i(A.aJ(t,u,""))
u=t.length
s=!1
if(u>=2)if(u<=50){u=A.af("^\\d+$",!0,!1,!1,!1)
s=A.af("\\s",!0,!1,!1,!1)
s=A.aJ(t,s,"")
u=!u.b.test(s)}else u=s
else u=s
if(u)return C.hRp(t)}r=A.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cD(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return B.a.i(u==null?"":u)}return null},
hRp(d){var w=B.a.fz(d,A.af("\\s+",!0,!1,!1,!1))
return new A.K(w,new C.fkb(),A.T(w).k("K<1,n>")).aI(0," ")},
fkb:function fkb(){},
hhu(d){var w=new A.K(d,new C.fAS(),A.T(d).k("K<1,a3<n,@>>")).c_(0,new C.fAT())
w=A.B(w,w.$ti.k("J.E"))
return w},
fAS:function fAS(){},
fAT:function fAT(){},
hYl(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return B.ic
w=B.a.i(d)
if(w.length===0)return B.ic
v=w.toLowerCase()
if(!(B.a.t(v,"send email")||B.a.t(v,"send an email")||B.a.t(v,"send a message to")||B.a.t(v,"email ")||B.a.t(v,"write an email")||B.a.t(v,"write email")))return B.ic
u=A.af("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cD(w)
if(u==null)return B.ic
t=u.b[0]
t.toString
s=B.a.i(t)
r=A.af("(?:subject|title)\\s*[:\\-]\\s*(.+)$",!1,!1,!1,!1).cD(w)
if(r!=null){t=r.b[1]
t.toString
q=B.a.i(t)}else q="Message from NGMY"
p=A.af("(?:saying|that says|with message|message:|body:|write:|text:)\\s*(.+)$",!1,!1,!1,!1).cD(w)
if(p!=null){t=p.b[1]
t.toString
o=B.a.i(t)}else o=""
t=x.N
t=A.V(t,t)
t.n(0,"to",s)
t.n(0,"subject",q)
if(o.length!==0)t.n(0,"body",o)
return A.a([new A.kl("send_email",t)],x.Z)},
hXu(d,e){var w
if(e)return d
w=J.dH(d,new C.fuN())
w=A.B(w,w.$ti.k("J.E"))
return w},
fuN:function fuN(){},
hZI(d){switch(d){case"blackjack_vegas":return D.dAU
case"roulette_euro":return D.dAE
case"slots_jackpot":return D.dAL
case"poker_texas":return D.dAO
case"chess_royale":return D.dAF
case"connect_four_pro":return D.dAG
case"domino_block":return D.dAI
case"plinko_prizes":return D.dAQ
case"spin_wheel":return D.dAN
case"baccarat_punto":return D.dAH
case"craps_table":return D.dAP
case"casino_war":return D.dAJ
case"bingo_live":return D.dAM
case"solitaire_klondike":return D.dAT
case"backgammon_pro":return D.dAD
case"billiards_snooker":return D.dAR
case"profit_solve":return D.dAS
default:return D.dAK}},
fyn(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=A.m(8)
v=A.I(B.aM,B.q,1.5)
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.ej,6)],x.V)
return A.p(p,A.av(A.W(B.mj,B.c.j(0.5),p,p,p,23.400000000000002),p,p,p),B.f,p,p,new A.o(p,p,v,w,u,D.bSW,B.n),p,74,p,p,p,p,p,52)}t=B.o.D(d,1,13)
s=t===1||t>=10||B.o.F(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][B.o.F(t,4)]
q=s?B.bI:B.M
w=A.m(8)
v=A.I(B.aL,B.q,1)
u=A.a([new A.ac(0,B.G,B.w.j(0.28),B.ej,6)],x.V)
return A.p(p,A.v(A.a([new A.C(D.btq,A.d(D.cpN[t-1]+"\n"+r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,B.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),B.b4,A.av(A.d(r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),B.b4],x.p),B.F,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(B.hU,p,v,w,u,p,B.n),p,74,p,p,p,p,p,52)},
i_M(d,e){var w,v=null,u=A.m(18),t=A.I(B.aM,B.q,3),s=A.a([new A.ac(0,B.G,B.aE.j(0.5),B.J,20)],x.V),r=A.T(e).k("K<1,hh>")
r=A.B(new A.K(e,new C.fAj(),r),r.k("aj.E"))
w=x.p
return A.v(A.a([A.p(v,A.v(A.a([D.f9r,B.ac,A.A(r,B.m,v,B.bb,B.j,0,v,v)],w),B.m,v,B.e,B.j,0,B.p),B.f,v,v,new A.o(v,v,t,u,s,D.bTh,B.n),v,v,v,v,I.agC,v,v,v),B.aA,A.dp(B.amu,D.fa3,d,A.bk(B.aM,v,v,v,B.dv,v,Ai.Y8,v,v,v,v,v))],w),B.m,v,B.e,B.j,0,B.p)},
oV:function oV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bov:function bov(d,e){this.b=d
this.a=e},
fAj:function fAj(){},
hzn(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e2(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=A.c2(8,0,!1,w)
u=A.c2(9,"",!1,p)
t=x.t
s=A.a([],t)
r=A.a([],t)
t=A.a([0,0,0],t)
q=J.e2(6,o)
for(v=0;v<6;++v)q[v]=A.c2(7,0,!1,w)
return new C.apK(A.V(p,x.z),n,u,s,r,t,q,new A.ar(B.as,$.aw()))},
hSL(d,e,f,g,h){var w=new C.flT(f,h)
switch(d){case"checkers_deluxe":return C.hIV(h,g,e,w)
case"tic_tac_go":return C.hRA(h,g,e,w)
case"blackjack_vegas":return C.hIf(h,g,e,new C.flN(w))
case"roulette_euro":return C.hPV(h,g,e,new C.flO(w))
case"slots_jackpot":return C.hQJ(h,g,e,new C.flP(w))
case"billiards_snooker":return C.hOI(h,g,e,new C.flQ(w))
case"connect_four_pro":return C.hJl(h,g,e,w)
case"profit_solve":return C.hOL(h,g,e,new C.flR(w))
default:return C.hIS(d,h,g,e,new C.flS(w))}},
hIV(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.w5,B.L,w,w),u=A.m(12),t=A.I(D.W4,B.q,8),s=A.a([new A.ac(0,B.G,B.w.j(0.4),B.J,16)],x.V)
return A.v(A.a([new A.C(B.eO,v,w),A.D(A.av(new A.fG(1,A.p(w,A.bv(A.m(6),A.ic(!0,w,w,B.y,D.eL1,new C.f7T(d,e,f,g),64,w,B.dQ,B.ah,!1),B.aq),B.f,w,w,new A.o(w,w,t,u,s,w,B.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hRA(d,e,f,g){var w=null
return A.v(A.a([new A.C(B.eO,A.d(d.c,w,w,w,w,w,w,D.w5,B.L,w,w),w),A.D(A.av(new A.fG(1,A.cn(new C.fkm(d,e,f,g)),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hIf(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.w5,B.L,v,v),t=x.p,s=A.a([],t),r=d.CW,q=d.ch
if(r)B.d.v(s,new A.K(q,new C.f7j(),A.T(q).k("K<1,r>")))
else B.d.v(s,A.a([C.fyn(q[0],!1),B.bp,C.fyn(0,!0)],t))
s=A.A(s,B.m,v,B.bb,B.j,0,v,v)
r=A.d("Total: "+d.a2t(d.ay),v,v,v,v,v,v,D.f4G,v,v,v)
q=d.ay
w=A.T(q).k("K<1,r>")
q=A.B(new A.K(q,new C.f7k(),w),w.k("aj.E"))
q=A.c_(B.fQ,q,B.bs,6,6)
return A.v(A.a([new A.C(B.eO,u,v),D.fg4,B.an,s,B.aA,D.fnf,r,B.an,q,B.b4,A.A(A.a([A.D(A.bJ(D.fau,d.CW?v:new C.f7l(d,e,f,g),v),1),B.ab,A.D(A.bJ(D.fpB,new C.f7m(d,e,f,g),v),1)],t),B.m,v,B.e,B.j,0,v,v)],t),B.m,v,B.e,B.j,0,B.p)},
hPV(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.w5,B.L,w,w),u=d.cx,t=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cv,16)],x.V)
t=A.a([new A.C(B.eO,v,w),A.p(w,A.b3(w,w,w,new C.bov(u,w),B.au),B.f,w,w,new A.o(w,w,w,w,t,w,B.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new A.C(B.kh,A.d("Result: "+A.t(v),w,w,w,w,w,w,D.eTU,w,w,w),w))
t.push(B.ac)
t.push(A.c_(B.fQ,A.iq(6,new C.fhz(d,e,f,g),!0,x.l),B.bs,6,6))
return A.v(t,B.m,w,B.e,B.j,0,B.p)},
hQJ(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.w5,B.L,w,w),u=d.db,t=A.T(u).k("K<1,n>")
u=A.B(new A.K(u,new C.fjt(),t),t.k("aj.E"))
return A.v(A.a([new A.C(B.eO,v,w),C.i_M(new C.fju(d,e,f,g),u)],x.p),B.m,w,B.e,B.j,0,B.p)},
hOI(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.w5,B.L,w,w),u=A.m(20),t=A.I(B.fv,B.q,12),s=x.V,r=A.a([new A.ac(0,B.G,B.w.j(0.45),B.dk,18)],s),q=x.p
return A.v(A.a([new A.C(B.eO,v,w),A.D(A.p(w,new A.an(B.W,w,B.aa,B.r,A.a([A.ao(w,A.p(w,w,B.f,w,w,D.aYj,w,18,w,w,w,w,w,18),w,w,24,w,24,w),A.ao(28,A.p(w,w,B.f,w,w,B.a9X,w,14,w,w,w,w,w,14),w,w,w,32,w,w),A.av(A.eC(B.A,d.dx,A.p(w,w,B.f,w,w,new A.o(B.aM,w,w,A.m(2),A.a([new A.ac(0,B.G,B.w.j(0.3),B.J,4)],s),w,B.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),B.f,w,w,new A.o(w,w,t,u,r,D.e9u,B.n),w,w,w,B.eQ,w,w,w,w),1),A.kT(B.bo,w,w,1,0,new C.fgj(d,f),d.dy),A.bJ(D.ff7,new C.fgk(d,e,g,f),w)],q),B.m,w,B.e,B.j,0,B.p)},
hJl(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.w5,B.L,v,v),t=x.l,s=J.e2(7,t)
for(w=0;w<7;++w)s[w]=new A.bD(1,B.bi,A.aE(v,A.v(A.iq(6,new C.f8j(d,w),!0,t),B.m,v,B.lR,B.j,0,B.p),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f8k(d,w,e,f,g),v,v,v,v,v,v,!1,B.a8),v)
return A.v(A.a([new A.C(B.eO,u,v),A.D(A.av(new A.fG(1.1666666666666667,A.A(s,B.dF,v,B.e,B.j,0,v,v),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
hOL(d,e,f,g){var w=null
return A.v(A.a([new A.C(B.eO,A.d(d.c,w,w,w,w,w,w,D.w5,B.L,w,w),w),A.d(""+d.a+"/"+d.b,w,w,w,w,w,w,B.kv,w,w,w),A.d(d.fy,w,w,w,w,w,w,D.aP6,B.L,w,w),A.aL(w,B.T,!1,w,!0,B.r,w,A.aM(),d.id,w,w,w,w,w,2,D.bP3,B.y,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,B.dM,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.fgw(d,e,g,f),w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,B.dl,!0,B.a5,w,B.am,w,w,w,w),A.bJ(D.fdM,new C.fgx(d,e,g,f),w)],x.p),B.m,w,B.e,B.j,0,B.p)},
hIS(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gjT(),k=e.d
k=k==null?n:k.c
w=C.hZI(d)
v=D.aCo.h(0,d)
if(v==null)v=d
m=A.d(m,n,n,n,n,n,n,B.mB,B.L,n,n)
u=A.m(22)
t=w.a
s=w.b
r=A.I(s.j(0.5),B.q,2)
q=A.a([new A.ac(0,B.G,w.c.j(0.35),B.eT,24)],x.V)
p=A.d(w.e,n,n,n,n,n,n,Y.SR,n,n,n)
o=A.d(v,n,n,n,n,n,n,B.oZ,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+A.t(k)+" at the table"
k=x.p
q=A.D(A.av(A.p(n,A.v(A.a([p,B.S,o,B.P,A.d(l,n,n,n,n,n,n,A.l(n,n,B.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),B.L,n,n),B.d5,A.W(w.f,s.j(0.85),n,n,n,48)],k),B.m,n,B.bb,B.j,0,B.p),B.f,n,n,new A.o(n,n,r,u,q,new A.a7(B.b0,B.b6,B.x,t,n,n),B.n),n,n,n,B.eQ,B.a9,n,n,1/0),n,n,n),1)
return A.v(A.a([m,B.ac,q,B.P,new A.a6(1/0,n,A.bJ(D.foK,new C.f7N(f,e,g,h),A.bk(s,n,n,n,B.d.gK(t).j5()>0.4?B.w:B.c,n,B.cf,n,n,n,n,n)),n)],k),B.m,n,B.e,B.j,0,B.p)},
E9:function E9(d,e){this.a=d
this.b=e},
apK:function apK(d,e,f,g,h,i,j,k){var _=this
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
cbb:function cbb(){},
cbc:function cbc(){},
cba:function cba(){},
cbd:function cbd(){},
cb9:function cb9(){},
cbf:function cbf(){},
cbg:function cbg(){},
cb8:function cb8(d){this.a=d},
cbe:function cbe(){},
cb7:function cb7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
flT:function flT(d,e){this.a=d
this.b=e},
flN:function flN(d){this.a=d},
flO:function flO(d){this.a=d},
flP:function flP(d){this.a=d},
flQ:function flQ(d){this.a=d},
flR:function flR(d){this.a=d},
flS:function flS(d){this.a=d},
f7T:function f7T(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7S:function f7S(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fkm:function fkm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fkl:function fkl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fkk:function fkk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f7j:function f7j(){},
f7k:function f7k(){},
f7l:function f7l(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7m:function f7m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fhz:function fhz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fhy:function fhy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fjt:function fjt(){},
fju:function fju(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fgj:function fgj(d,e){this.a=d
this.b=e},
fgk:function fgk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8k:function f8k(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f8j:function f8j(d,e){this.a=d
this.b=e},
fgw:function fgw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fgx:function fgx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7N:function f7N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hVy(d){var w,v=A.T(d).k("a2<1>")
v=A.p4(new A.a2(d,new C.fqp(),v),120,v.k("J.E"))
w=A.cD(v,new C.fqq(),A.a4(v).k("J.E"),x.N).aI(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fqp:function fqp(){},
fqq:function fqq(){},
ags(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
aqG:function aqG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aDh:function aDh(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
eAV:function eAV(){},
aL3:function aL3(){},
hxl(){var w=$.HX
if(w<=0)return;--w
$.HX=w
if(w===0){w=$.h3d
if(w!=null)w.$0()}},
c6H(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
aoo(d){var w=0,v=A.j(x.H),u,t
var $async$aoo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.fOf.L(0,t)
w=4
return A.b(A.az(),$async$aoo)
case 4:w=3
return A.b(f.ar("Bool","ngmy_game_free_play_used_"+B.a.i(t.toLowerCase()),!0),$async$aoo)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aoo,v)},
aon(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$aon=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(C.c6H(d)){u=!0
w=1
break}t=B.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.fOf.t(0,t)){u=!1
w=1
break}w=3
return A.b(A.az(),$async$aon)
case 3:s=f
r=B.a.i(t.toLowerCase())
r=A.kc(J.q(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aon,v)},
Uv(){var w=0,v=A.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Uv=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Uv)
case 7:r=e
q=A.aU(J.q(r.a,"ngmy_helper_ai_usage_v1"))
if(q==null||B.a.i(q).length===0){u=A.V(x.N,x.z)
w=1
break}p=B.R.aH(0,q,null)
if(x.f.b(p)){o=A.a1(p,x.N,x.z)
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
case 6:u=A.V(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Uv,v)},
aYX(d){return C.hxy(d)},
hxy(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aYX=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.az(),$async$aYX)
case 6:s=f
w=7
return A.b(s.ar("String","ngmy_helper_ai_usage_v1",B.R.ao(d,null)),$async$aYX)
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
return A.i($async$aYX,v)},
aYV(d,e){var w,v,u,t,s=J.q(d,B.a.i(e.toLowerCase()))
if(!x.f.b(s))return new A.ad3(0,new A.S(Date.now(),0,!1))
w=J.a8(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=A.bi(u==null?"":u)
if(t==null)t=new A.S(Date.now(),0,!1)
return new A.ad3(typeof v=="number"?B.o.D(B.k.O(v),0,999999):0,t)},
aYW(d,e){if(B.o.an(e.by(d.b).a,36e8)>=24)return new A.ad3(0,e)
return d},
c7d(d,e){var w=0,v=A.j(x.S),u,t,s
var $async$c7d=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return A.b(C.Uv(),$async$c7d)
case 3:t=g
s=Date.now()
u=B.o.D(e-C.aYW(C.aYV(t,d),new A.S(s,0,!1)).a,0,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c7d,v)},
c7e(d,e){var w=0,v=A.j(x.cJ),u,t,s,r
var $async$c7e=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return A.b(C.Uv(),$async$c7e)
case 3:t=g
s=Date.now()
r=C.aYW(C.aYV(t,d),new A.S(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bP(864e8)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c7e,v)},
hxz(d){var w,v,u,t=d.a,s=B.o.an(t,1e6)
if(s<=0)return"0s"
w=B.o.an(t,36e8)
v=B.o.an(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+B.a.aT(B.o.u(v),2,"0")+"m "+B.a.aT(B.o.u(u),2,"0")+"s"
if(v>0)return""+v+"m "+B.a.aT(B.o.u(u),2,"0")+"s"
return""+u+"s"},
aYY(d){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aYY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return A.b(C.Uv(),$async$aYY)
case 3:t=p.aYW(o.aYV(f,d),new A.S(Date.now(),0,!1))
w=4
return A.b(A.az(),$async$aYY)
case 4:s=f
r=B.a.i(d.toLowerCase())
q=t.b.a6().ac()
u=A.kc(J.q(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYY,v)},
aoK(d){var w=0,v=A.j(x.H),u,t,s,r
var $async$aoK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return A.b(C.Uv(),$async$aoK)
case 3:t=s.aYW(r.aYV(f,d),new A.S(Date.now(),0,!1))
w=5
return A.b(A.az(),$async$aoK)
case 5:w=4
return A.b(f.ar("Bool","ngmy_helper_3left_"+B.a.i(d.toLowerCase())+"_"+t.b.a6().ac(),!0),$async$aoK)
case 4:case 1:return A.h(u,v)}})
return A.i($async$aoK,v)},
aoL(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aoL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=B.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return A.b(C.Uv(),$async$aoL)
case 3:s=g
r=Date.now()
q=C.aYW(C.aYV(s,d),new A.S(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aG(s,t,A.F(["count",r+1,"windowStart",q.b.a6().ac()],x.N,x.K))
w=4
return A.b(C.aYX(s),$async$aoL)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoL,v)},
ag4(d,e,a0){var w=0,v=A.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ag4=A.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new A.fd("")
if(!d.d){p=!0
if(!C.hhm(a0))if(!C.hhl(a0)){p=A.af("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.hhm(a0)?3:4
break
case 3:o=C.hZn(a0)
w=o!=null?5:6
break
case 5:w=7
return A.b(C.c_O(e,o),$async$ag4)
case 7:n=a2
p=J.a8(n)
if(p.gcn(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.h1G(o)+":\n"
m.a+=l
for(p=p.gaf(n);p.C();){m=p.gU(p)
l=h
k="- "+m.gUK()+"\n"
l.a+=k
m=m.f
if(m!=null&&B.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=A.af("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return A.b(A.Rn("text/plain"),$async$ag4)
case 14:r=a2
p=r
if(p==null)p=null
else p=B.a.i(p.a)
q=p==null?"":p
if(J.ad(q)!==0){p=h
m="CLIPBOARD CONTENT (user asked):\n"+A.t(q)+"\n\n"
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
case 13:case 9:w=C.hhl(a0)?15:16
break
case 15:p=h
f=C
w=17
return A.b(C.a6v(e),$async$ag4)
case 17:m=f.h3k(a2)+"\n"
p.a+=m
case 16:p=A.af("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return A.b(C.Tx(e),$async$ag4)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cx(i)){p=h
m=C.h1H(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=B.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ag4,v)},
hyV(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
c9N(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$c9N=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=A.h4_(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.f1("ngmy_local_growth_income_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bG),$async$c9N)
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
q=A.a9(m)
$.am.$1("[local growth income stash] code lookup: "+A.t(q))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$c9N,v)},
apr(d){var w=0,v=A.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$apr=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=B.a.i(d)
if(J.ad(k)===0){u=null
w=1
break}t=4
w=7
return A.b(A.f1("ngmy_local_growth_income_stash_v1_"+B.a.i(k),null,!1,B.bG),$async$apr)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.q(r,"payload")
q=J.k(n==null?"":n)
if(J.ad(q)===0){u=null
w=1
break}n=J.q(r,"ownerEmail")
p=B.a.i(J.k(n==null?"":n))
n=B.c4.ca(0,B.cD.aJ(q))
m=J.z(J.q(r,"live"),!0)
u=new A.aEG(m,p,n)
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=A.a9(j)
$.am.$1("[local growth income stash] consume: "+A.t(o))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$apr,v)},
b_1(d){var w=0,v=A.j(x.bY),u,t,s,r,q
var $async$b_1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
w=C.hyV(q)?3:4
break
case 3:w=5
return A.b(C.c9N(q),$async$b_1)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.apr(t)
w=1
break
case 4:if(B.a.a0(q,"NGMYLOCALSYNC1|")){u=C.apr(B.a.i(B.a.b0(q,15)))
w=1
break}w=B.a.a0(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return A.b(C.apr(B.a.i(B.a.b0(q,15))),$async$b_1)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new A.aEG(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_1,v)},
h4d(d){var w=d.bM
if(w>=0)return w
return 1},
agf(d,e,f){var w=0,v=A.j(x.H),u,t
var $async$agf=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return A.b(A.aOD(d,e),$async$agf)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return A.b(A.Gb(d,null,null,!1,!0,""),$async$agf)
case 5:w=4
return A.b(t.$1(h),$async$agf)
case 4:case 1:return A.h(u,v)}})
return A.i($async$agf,v)},
hYg(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=B.a.i(a2)
if(a1.length===0)return B.ic
w=a1.toLowerCase()
v=A.af("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=A.af("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cD(w)
if(!u&&t==null)return B.ic
s=new A.S(Date.now(),0,!1)
r=A.df()
q=A.df()
p=C.hNZ(w)
if(p!=null){v=p.a
r.b=s.bP(v)
q.b=C.hcr(a1,w)
if(J.z(q.bd(),"Wake up")&&B.o.an(v,e)<=180)q.b="Reminder \u2014 "+B.o.an(v,e)+" min"}else{if(t!=null){v=A.af("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=B.a.e9(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.hcs(v[2],v[4],v[3])
o=v[3]
m=A.c7(o==null?"":o,null)
if(m==null)m=0
l=A.c0(A.by(s),A.bG(s),A.bQ(s),0,0,0,0,0)
if(B.a.t(w,d))l=l.bP(a0)
r.b=A.c0(A.by(l),A.bG(l),A.bQ(l),n,m,0,0,0).bP(-36e8)
if(r.bd().cY(s.bP(e)))r.b=J.cf(r.bd(),B.nP)
v=C.hS3(v[1])
k=B.o.F(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+B.a.aT(B.o.u(m),2,"0")+" "+j)}else{l=A.c0(A.by(s),A.bG(s),A.bQ(s),0,0,0,0,0)
v=B.a.t(w,d)
if(v)l=l.bP(a0)
i=A.af("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cD(w)
if(i!=null){o=i.b
h=C.hcs(o[1],o[3],o[2])
o=o[2]
g=A.c7(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=A.c0(A.by(l),A.bG(l),A.bQ(l),h,g,0,0,0)
r.b=f.cY(s.bP(3e7))&&!v?f.bP(a0):f
q.b=C.hcr(a1,w)}}v=x.N
return A.a([new A.kl("alarm",A.F(["title",q.bd(),"start",r.bd().ac(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
hNZ(d){var w,v,u,t,s,r,q=[A.af("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.af("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.af("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),A.af("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
for(w=0;w<4;++w){v=q[w].cD(d)
if(v==null)continue
u=v.b
t=u[1]
s=A.c7(t==null?"":t,null)
if(s==null||s<=0)continue
r=u[2]
if(r==null)r="minute"
if(B.a.a0(r,"sec"))return new A.b9(1e6*B.o.D(s,5,86400))
if(B.a.a0(r,"hour")||B.a.a0(r,"hr"))return new A.b9(36e8*B.o.D(s,1,168))
return new A.b9(6e7*B.o.D(s,1,10080))}return null},
hS3(d){var w=d==null?"work":d,v=w.toLowerCase()
if(B.a.t(v,"meeting")||B.a.t(v,"appointment"))return"Meeting"
if(B.a.t(v,"class")||B.a.t(v,"school"))return"Class"
if(B.a.t(v,"shift"))return"Shift"
return"Work"},
hcs(d,e,f){var w,v=A.c7(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return B.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
hcr(d,e){var w,v,u,t
if(B.a.t(e,"work"))return"Wake up \u2014 Work"
if(B.a.t(e,"school")||B.a.t(e,"class"))return"Wake up \u2014 School"
w=A.af("\\btimer\\b",!1,!1,!1,!1)
if(w.b.test(e))return"Timer"
v=A.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cD(d)
if(v!=null){w=v.b
u=w[1]
w=u==null?w[2]:u
t=B.a.i(w==null?"":w)
w=t.length
if(w>=3&&w<=60)return t}return"Wake up"},
hzg(d){var w,v,u,t,s=J.a8(d)
if(s.gam(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.kp(d,80),v=w.$ti,w=new A.bW(w,w.gM(0),v.k("bW<aj.E>")),v=v.k("aj.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gM(d)>80?u+("\u2026 and "+(s.gM(d)-80)+" more\n"):u
return B.a.i(s.charCodeAt(0)==0?s:s)}},D,H,Ae,I,W,G,Af,X,F,Y,Q,Ag,Ah,Z,Ai,Aj,Ak,A_,Al,A0,K
J=c[1]
A=c[0]
B=c[2]
A1=c[190]
L=c[32]
R=c[182]
A2=c[193]
E=c[174]
M=c[184]
A3=c[101]
N=c[121]
A4=c[180]
S=c[35]
O=c[73]
T=c[79]
A5=c[80]
P=c[148]
A6=c[185]
U=c[176]
A7=c[188]
A8=c[186]
A9=c[187]
Aa=c[183]
Ab=c[179]
Ac=c[65]
V=c[164]
Ad=c[102]
C=a.updateHolder(c[5],C)
D=c[173]
H=c[27]
Ae=c[64]
I=c[178]
W=c[113]
G=c[127]
Af=c[189]
X=c[28]
F=c[177]
Y=c[135]
Q=c[90]
Ag=c[175]
Ah=c[192]
Z=c[181]
Ai=c[194]
Aj=c[129]
Ak=c[191]
A_=c[72]
Al=c[125]
A0=c[56]
K=c[54]
C.bpF.prototype={
oj(d,e){return this.a.$2(d,e)}}
C.EN.prototype={
T(){return new C.aGJ(this.$ti.k("aGJ<EN.T,EN.S>"))}}
C.aGJ.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a
v=w.f
w=new A.hD(B.EK,v,null,null,w.$ti.k("hD<1>"))
u.e=w
u.Vh()},
br(d){var w,v=this
v.bE(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aM1()
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hD(B.EK,w.b,w.c,w.d,w.$ti)}v.Vh()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&A.c()
return v.mU(d,w)},
q(){this.aM1()
this.a2()},
Vh(){var w,v=this
v.d=v.a.c.lm(new C.eWS(v),new C.eWT(v),new C.eWU(v))
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hD(B.WP,w.b,w.c,w.d,w.$ti)},
aM1(){var w=this.d
if(w!=null){w.a8(0)
this.d=null}}}
C.aul.prototype={
mU(d,e){return this.e.$2(d,e)}}
C.ak0.prototype={
T(){return C.hFO()},
bp(){return this.r.$0()}}
C.qy.prototype={}
C.ayW.prototype={
abQ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$abQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.h2M(r)
if(r.x==null||r.c8.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.h2O(s),$async$abQ)
case 3:case 1:return A.h(u,v)}})
return A.i($async$abQ,v)},
WF(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.app(t.a.c),$async$WF)
case 3:if(e!=null&&t.c!=null)t.a.bp()
r=!C.c6H(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return A.b(C.aon(t.a.c),$async$WF)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.m(new C.d7y(t,s))
if(!s)t.abQ()
case 1:return A.h(u,v)}})
return A.i($async$WF,v)},
abr(){var w=0,v=A.j(x.H),u,t=this,s
var $async$abr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.bAH(),$async$abr)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.d7J(t,s))
case 1:return A.h(u,v)}})
return A.i($async$abr,v)},
a_(){var w,v,u=this
u.bs0()
$.t9=$.t9+1
w=u.a
$.bAM=w.c.a
w=w.d.b5
v=A.T(w).k("K<1,a3<n,@>>")
w=A.B(new A.K(w,new C.d80(),v),v.k("aj.E"))
u.f=w
u.abr()
u.J6()
u.WF()
u.e=A.dA(B.nM,new C.d81(u))},
J6(){var w=0,v=A.j(x.H),u,t=this,s
var $async$J6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:C.agg(t.a.d.b5)
w=3
return A.b(C.fAA(t.a.d.b5),$async$J6)
case 3:s=e
if(t.c==null){w=1
break}C.agg(t.a.d.b5)
if(s!=null)t.m(new C.d7R(t,s))
else t.m(new C.d7S(t))
case 1:return A.h(u,v)}})
return A.i($async$J6,v)},
q(){C.aYH()
var w=this.e
if(w!=null)w.a8(0)
this.bs_()},
agn(d,e,f){return this.cp2(d,e,f)},
cp2(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$agn=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(e.toLowerCase())
p=J.q(t.r,q)
o=t.a
n=o.d.b5
o=o.c
s=d.b
C.hS6(n,o.a,o.c,d.a,s,f,e,p)
t.a.bp()
w=3
return A.b(C.agh(t.a.d.b5),$async$agn)
case 3:if(t.c==null){w=1
break}t.m(new C.d7U(t))
r=f===1?"1 game":""+f+" games"
t.c.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$agn,v)},
HX(d,e){return this.cas(d,e)},
bZr(d){return this.HX(d,null)},
cas(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&B.a.i(e).length!==0){s=C.tJ(t.a.d.b5,B.a.i(e))
if(s!=null&&C.aNy(s)<=0){t.c.I(x.q).f.R(D.aMY)
w=1
break}}w=5
return A.b(C.aon(t.a.c),$async$HX)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return A.b(C.fOg(r,C.fuY(q.c),p),$async$HX)
case 6:w=1
break
case 4:o=new C.d7M(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
A.hv(r,new C.aBN(p,q.d,q.f,q.r,new C.d7N(o),q.w,C.fuY(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
A.hv(q,new C.ak_(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.d7O(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$HX,v)},
bWV(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.agg(i.a.d.b5)
C.agg(i.f)
w=C.i1U(i.a.c.a,i.f)
v=C.hS5(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return B.bH
if(!u){t=B.d.gK(w)
u=A.m(14)
s=A.I(B.b2,B.q,1)
r=J.a8(t)
q=r.h(t,"fromName")
q=A.t(q==null?r.h(t,"fromEmail"):q)
p=A.t(r.h(t,"gameTitle"))
o=A.aN(r.h(t,g))
o=o==null?h:B.k.O(o)
if(o==null)o=1
r=A.aN(r.h(t,g))
r=r==null?h:B.k.O(r)
r=(r==null?1:r)===1?"":"s"
n=x.p
return A.p(h,A.v(A.a([D.fjg,A.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,B.p2,h,h,h),B.P,A.A(A.a([A.D(A.dU(B.IR,new C.d7E(i,t),h),1),B.ab,A.D(A.bJ(D.frZ,new C.d7F(i,t),h),1)],n),B.m,h,B.e,B.j,0,h,h)],n),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(B.aE,h,s,u,h,h,B.n),h,h,h,B.e3,B.bk,h,h,1/0)}m=B.d.gK(v)
l=B.d.dM(i.y,new C.d7G(m),new C.d7H(i))
k=C.fUj(m,i.a.c.a,i.r)
j=C.aNy(m)
u=A.m(14)
s=A.I(B.b2,B.q,1)
r=j===1?"":"s"
return A.p(h,A.v(A.a([D.fbB,A.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,B.p2,h,h,h),B.at,A.d(C.hUK(m,i.a.c.a),h,h,h,h,h,h,B.a6W,h,h,h),B.P,A.bJ(D.fix,new C.d7I(i,l,m),h)],x.p),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(B.bj,h,s,u,h,h,B.n),h,h,h,B.e3,B.bk,h,h,1/0)},
bNJ(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.eH7.t(0,d.a),l=A.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=A.a41(w[v])
t=B.k.D(u.d*0.58,0.12,0.3)
l.push(new A.wS(u.a,u.b,B.k.D(u.c*0.92,0,0.9),t).iG())}s=B.d.gK(w)
w=A.m(16)
t=A.m(18)
r=A.I(A.Z(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.q,1)
q=x.V
p=A.a([new A.ac(0,B.G,A.Z(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.jl,12)],q)
o=x.p
o=A.a([new A.a6(100,n,A.av(A.W(d.e,B.c,n,n,n,64),n,n,n),n),A.D(new A.C(B.jc,A.v(A.a([A.A(A.a([A.D(A.d(d.b,n,n,n,n,n,n,B.kX,n,n,n),1)],o),B.m,n,B.e,B.j,0,n,n),B.at,A.d(d.c,n,2,B.a2,n,n,n,B.p_,n,n,n)],o),B.F,n,B.bb,B.j,0,B.p),n),1)],o)
if(m)o.push(A.aH(n,n,n,n,D.bMF,n,n,n,new C.d7A(this,d),n,n,n,n,"Invite player",n))
o.push(new A.C(B.Lq,A.p(n,D.bKN,B.f,n,n,new A.o(A.Z(71,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),n,A.I(A.Z(B.k.V(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.q,1.6),n,A.a([new A.ac(0,B.G,A.Z(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,10)],q),n,B.a6),n,44,n,n,n,n,n,44),n))
return A.aK(!1,w,!0,A.p(n,A.A(o,B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,r,t,p,new A.a7(B.ax,B.aC,B.x,l,n,n),B.n),n,92,n,B.e3,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.d7B(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.O(d).ax.a===B.I,l=A.O(d).ax.a===B.I?B.j6:B.pp,k=m?B.i6.j(0.94):B.c.j(0.94),j=m?B.c:B.M,i=m?B.i6:B.c,h=m?B.c.j(0.08):B.aL,g=m?B.c:B.M,f=m?B.bm:B.bM
if(!o.x)return C.aO5(n,l,A.av(A.mD(n,m?B.c:B.bo,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fuY(o.a.c)
return new C.MV(o.a.w,w,!0,o.gaQO(),n)}w=A.aI(d,B.e7,x.w).w
v=A.m(12)
u=A.I(h,B.q,1)
t=x.V
s=A.a([],t)
if(!m)s.push(new A.ac(0,B.G,B.w.j(0.04),B.cJ,12))
r=x.p
s=A.a([A.p(n,A.A(A.a([A.D(A.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,A.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,B.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new A.ue(new C.d7Y(o,f,g),n,$.aPs(),n)],r),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(i,n,u,v,s,n,B.n),n,n,n,n,B.XG,n,n,1/0),B.S,o.bWV()],r)
v=o.y
B.d.v(s,new A.K(v,o.gbNI(),A.T(v).k("K<1,r>")))
w=A.cd(A.v(s,B.m,n,B.e,B.j,0,B.p),B.r,n,B.y,n,new A.Q(14,w.r.b+78,14,24),n,n,B.ah)
s=A.m(35)
v=A.a([new A.ac(0,B.G,B.w.j(m?0.28:0.08),B.jl,15)],t)
u=A.I(m?B.c.j(0.1):B.aL,B.q,1)
t=A.aH(n,n,n,n,A.W(B.eA,j,n,n,n,18),n,n,n,o.gaQO(),n,n,n,n,n,n)
q=A.D(A.av(A.d("GAME CENTER",n,n,n,n,n,n,A.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,B.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=A.m(20)
return A.oe(!0,C.aO5(n,l,new A.an(B.W,n,B.aa,B.f,A.a([w,A.ao(n,A.bm(!1,new A.C(B.LE,A.p(n,A.A(A.a([t,q,new A.C(B.jc,A.p(n,A.A(A.a([D.bI6,B.eb,C.ape(new C.d7Z(o),B.mB,o.a.c.a)],r),B.m,n,B.e,B.Q,0,n,n),B.f,n,n,new A.o(B.cR,n,n,p,n,n,B.n),n,n,n,n,B.h6,n,n,n),n)],r),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(k,n,u,s,v,n,B.n),n,60,n,n,B.mh,n,n,n),n),!0,!1,B.af,!0,!0),n,n,0,0,0,n)],r),n)),new C.d8_(o),x.K)},
aQP(){var w,v
this.a.bp()
w=this.d
v=w>0?A.F(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
A.iL(w,v)}}
C.aBN.prototype={
T(){return new C.bhO()},
hs(d){return this.e.$1(d)},
bp(){return this.f.$0()},
aFx(){return this.r.$0()}}
C.bhO.prototype={
a_(){this.bt0()
this.d=A.TW(this.a.d.bi)
$.t9=$.t9+1},
q(){C.aYH()
this.bt_()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&A.c()
return new C.anS(v,new C.dLX(w),u,new C.dLY(w),new C.dLZ(w,d),new C.dM_(w),null)}}
C.ak_.prototype={
T(){return new C.ayV(new A.ar(B.as,$.aw()))},
hs(d){return this.x.$1(d)},
bp(){return this.y.$0()},
aFx(){return this.z.$0()}}
C.ayV.prototype={
a_(){this.brZ()
this.a.toString
$.t9=$.t9+1},
q(){C.aYH()
var w=this.d
w.S$=$.aw()
w.P$=0
this.brY()},
a1h(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a1h=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.N1()
w=5
return A.b(C.aon(t.a.c),$async$a1h)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return A.b(C.fOg(s,C.fuY(r.c),q),$async$a1h)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&B.a.i(r).length!==0){p=C.tJ(s.d.b5,B.a.i(r))
if(p!=null&&C.aNy(p)<=0){t.c.I(x.q).f.R(D.aMY)
w=1
break}}o=A.d4(B.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.I(x.q).f.R(D.eO2)
w=1
break}m=A.Kt(t.a.c.a,new C.d7s(t))
if(m+0.001<n){t.c.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Not enough balance for this bet \u2014 you have $"+A.dB(m)+", the bet is $"+A.dB(n)+".",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aFx()
s=t.a
s.toString
r=B.o.u(1000*Date.now())
q=t.a
s.hs(new A.d2(r,q.c.a,n,B.jH,B.fb,"Game bet: "+q.f,null,null,B.cl,new A.S(Date.now(),0,!1)))
t.a.bp()
if(D.eH_.t(0,t.a.e)){s=t.c
s.toString
r=t.a
A.hv(s,new C.amV(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
A.hv(s,new C.ak1(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$a1h,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=A.aH(o,o,o,o,B.G9,o,o,o,new C.d7v(d),o,o,o,o,o,o),k=p.a,j=A.d(k.f,o,o,o,o,o,o,B.cw,o,o,o),i=A.m(12),h=x.p
j=A.eF(A.a([A.p(o,A.av(C.ape(new C.d7w(p),B.kv,k.c.a),o,o,o),B.f,o,o,new A.o(B.cR,o,o,i,o,o,B.n),o,o,o,D.bnU,B.fT,o,o,o)],h),o,o,!0,!0,D.WN,o,1,o,o,o,!1,o,!1,B.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=A.m(16)
i=A.I(B.b2,B.q,1)
k=A.W(D.bz6,D.bic,o,o,o,28)
w=p.a
v=A.d(w.f,o,o,o,o,o,o,B.oZ,o,o,o)
w=A.d(w.r,o,o,o,o,o,o,B.p2,o,o,o)
u=A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.m(12)
s=x.a3
s=A.B(new A.K(A.a([2,5,10,25],x.t),new C.d7x(p),s),s.k("aj.E"))
s=A.A(s,B.m,o,B.e,B.j,0,o,o)
r=A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.p(o,A.v(A.a([D.ftz,B.S,s,B.P,A.aL(o,B.T,!1,o,!0,B.r,o,A.aM(),p.d,o,o,o,o,o,2,A.br(o,new A.b4(4,A.m(10),B.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,B.lp,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dM,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,B.dl,!0,B.a5,o,B.am,o,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(u,o,o,t,o,o,B.n),o,o,o,o,B.bS,o,o,1/0)
u=A.m(12)
r=A.I(A.Z(102,B.a36.l()>>>16&255,B.a36.l()>>>8&255,B.a36.l()&255),B.q,1)
s=A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
q=A.m(10)
q=A.p(o,A.v(A.a([D.faZ,A.d("+ $"+B.k.aa(n*0.46,2),o,o,o,o,o,o,D.f1y,o,o,o),A.d("(46% return on $"+B.k.aa(p.e,2)+" bet)",o,o,o,o,o,o,B.p_,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(s,o,o,q,o,o,B.n),o,o,o,o,B.ck,o,o,1/0)
s=A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
n=A.m(10)
u=A.p(o,A.v(A.a([D.fjw,B.P,q,B.P,A.p(o,A.v(A.a([D.f6b,A.d("$"+B.k.aa(m,2),o,o,o,o,o,o,D.eSf,o,o,o),A.d("8 pairs \xd7 $"+B.k.aa(m,2)+" each",o,o,o,o,o,o,B.p_,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(s,o,o,n,o,o,B.n),o,o,o,o,B.ck,o,o,1/0)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(D.ber,o,r,u,o,o,B.n),o,o,o,o,B.bS,o,o,1/0)
r=A.fl(o,o,B.bo,o,o,o,o,o,o,B.c,o,B.fM,o,o,o,o,o,o,o,o)
return C.aO5(j,D.WN,A.cd(A.p(o,A.v(A.a([k,B.at,v,B.bA,w,B.S,t,B.P,u,B.S,new A.a6(1/0,o,A.ia(A.d("Start Game ($"+B.k.aa(p.e,2)+")",o,o,o,o,o,o,B.cc,o,o,o),p.gcsS(),r),o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,i,l,o,D.bSi,B.n),o,o,o,o,B.eP,o,o,1/0),B.r,o,B.y,o,E.agc,o,o,B.ah))}}
C.ak1.prototype={
T(){var w=x.s,v=x.t,u=x.S
return new C.ayX(B.cI,new A.ar(B.as,$.aw()),A.a([],w),A.a([],x.d4),A.a([],w),A.a([],w),A.a([],v),A.a([],v),A.a([],v),A.aX(u),A.aX(u),A.a([],v),A.a([],v),A.a([],v))},
hs(d){return this.y.$1(d)},
bp(){return this.z.$0()}}
C.ayX.prototype={
ghz(){var w=this.a.Q
return w!=null&&B.a.i(w).length!==0},
qS(d){return this.bM0(d)},
bM0(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$qS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.zL()
r=t.NU()
w=s<=0?3:4
break
case 3:w=5
return A.b(t.a9U(d),$async$qS)
case 5:w=1
break
case 4:q=B.k.D(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return A.b(t.tt(d),$async$qS)
case 9:w=7
break
case 8:w=10
return A.b(t.E3(q,s,r),$async$qS)
case 10:case 7:case 1:return A.h(u,v)}})
return A.i($async$qS,v)},
EE(d,e,f,g){return this.cqG(d,e,f,g)},
cqG(d,e,f,g){var w=0,v=A.j(x.H),u,t=this,s
var $async$EE=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return A.b(C.bBO(s,C.bBr(),C.fWb(),d,e,f,g),$async$EE)
case 3:case 1:return A.h(u,v)}})
return A.i($async$EE,v)},
zL(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.b0m(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&A.c()
return u+C.ags(t,s.e.a.a)
case"memory":return s.ghz()&&D.my.t(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.awV()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bi
case"color":return s.b5
case"reflex":return s.Z
default:u=s.b1
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
awV(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
NU(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&A.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.fUn()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.b1
if(w!=null)return w.b
return 1}},
br(d){var w,v,u=this
u.bE(d)
if(u.f||u.c8)return
w=u.a
v=C.fv2(w.e,w.d.y2)
if(v!==C.fv2(d.e,d.d.y2)&&u.c!=null)u.m(new C.d9k(u,v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.bs2()
w=i.a
w.toString
$.t9=$.t9+1
i.Q=C.fv2(w.e,w.d.y2)
i.b3b()
i.abb()
if(i.ghz()){i.c8=!0
i.cW="Connecting to match\u2026"
i.cl="Both players enter the room together \u2014 play starts at the same time."
i.Of()
i.aaQ()
i.bj=A.dA(B.fF,new C.d9n(i))}if(B.d.t(D.PA,i.a.e)){w=i.ghz()
v=i.a
if(w){w=v.d.b5
v=v.Q
v.toString
u=C.tJ(w,v)
w=i.a
if(u!=null){w=w.c
v=w.a
w=w.c
t=J.a8(u)
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
m=s.b(t.h(u,h))?A.a1(s.a(t.h(u,h)),o,n):A.V(o,n)
s=p===r
l=s?q:r
if(s){o=m.h(0,"player2Name")
if(o==null)o=m.h(0,"playerOName")
t=o==null?t.h(u,"toName"):o
k=B.a.i(J.k(t==null?"":t))}else{o=m.h(0,"player1Name")
if(o==null)o=m.h(0,"playerXName")
t=o==null?t.h(u,"fromName"):o
k=B.a.i(J.k(t==null?"":t))}w=new C.aYF(!1,w,k.length===0||B.a.t(k,"@")?C.fUj(u,v,null):k,p,l,s)}else{w=w.c
w=C.fOk(w.c,w.a)}w=i.bK=w}else{w=v.c
w=i.bK=C.fOk(w.c,w.a)}v=C.hzn()
v.bm4(i.a.e,i.d,w)
i.b1=v
i.r=v.c
if(i.ghz()){w=i.a
v=w.d.b5
w=w.Q
w.toString
u=C.tJ(v,w)
m=u==null?null:J.q(u,h)
if(x.f.b(m)){w=i.b1
w.toString
w.b8g(i.a.e,A.a1(m,x.N,x.z),i.a.c.a)
w=i.b1
i.r=w.c
if(w.e){if(w.r)j=D.R1
else j=w.f===!0?D.pY:D.Hs
i.zN(j)}}}i.b3=A.dA(B.nO,new C.d9o(i))
if(i.ghz())i.bb=A.dA(B.ou,new C.d9p(i))}if(i.ghz()&&!B.d.t(D.PA,i.a.e))i.bb=A.dA(B.ou,new C.d9q(i))
i.as=A.dA(B.h4,new C.d9r(i))},
Of(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Of=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghz()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tJ(s.d.b5,q)
w=p!=null?3:4
break
case 3:w=5
return A.b(C.bzM(p,t.a.c.a),$async$Of)
case 5:o=e
if(t.c!=null)t.m(new C.d8A(t,o))
w=1
break
case 4:w=6
return A.b(C.Kk(q,t.a.d.b5,!1),$async$Of)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return A.b(C.bzM(n,t.a.c.a),$async$Of)
case 7:o=e
if(t.c!=null)t.m(new C.d8B(t,o))
case 1:return A.h(u,v)}})
return A.i($async$Of,v)},
aht(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aht=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghz()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.Kk(r,s.d.b5,!1),$async$aht)
case 3:q=e
if(q==null||t.c==null){w=1
break}p=J.q(q,"sessionState")
if(!x.f.b(p)){w=1
break}o=A.a1(p,x.N,x.z)
if(t.a.e==="memory"){s=t.go
r=s.a
n=t.id
m=n.a
l=t.fx
t.aLQ(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=B.k.O(j)
else{h=j==null?null:J.k(j)
i=A.c7(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)B.d.bm(t.fy,new C.d93(t))
if(i!=null&&t.fr.length!==0){s=A.B(t.dy,x.S)
B.d.v(s,t.dy)
r=new A.eP()
r.dG(i)
B.d.fq(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.m(new C.d94())}case 1:return A.h(u,v)}})
return A.i($async$aht,v)},
aaQ(){var w=0,v=A.j(x.H),u=this
var $async$aaQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.a_B(!0),$async$aaQ)
case 2:return A.h(null,v)}})
return A.i($async$aaQ,v)},
a_B(d){return this.cge(d)},
cgd(){return this.a_B(!1)},
cge(b3){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$a_B=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghz()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
if(q.length===0){w=1
break}p=B.a.i(s.c.a.toLowerCase())
w=3
return A.b(C.Kk(q,s.d.b5,b3),$async$a_B)
case 3:o=b5
if(o==null)o=C.tJ(t.a.d.b5,q)
if(o==null){w=1
break}s=J.a8(o)
r=s.h(o,"fromEmail")
n=B.a.i(J.k(r==null?"":r).toLowerCase())
r=s.h(o,"toEmail")
m=B.a.i(J.k(r==null?"":r).toLowerCase())
l=s.h(o,"sessionState")
s=x.f
r=x.N
k=x.z
j=s.b(l)?A.a1(l,r,k):A.V(r,k)
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
d=s.b(e)?A.a1(e,r,k):A.V(r,k)
a0=j.h(0,"readyAt")
a1=s.b(a0)?A.a1(a0,r,k):A.V(r,k)
a2=new A.S(Date.now(),0,!1).a6()
if(b3){d.n(0,p,!0)
a1.n(0,p,a2.ac())}if(i&&!d.ah(0,h))d.n(0,h,!1)
if(f&&!d.ah(0,g))d.n(0,g,!1)
s=!1
if(i)if(J.z(d.h(0,h),!0)){s=a1.h(0,h)
s=J.k(s==null?"":s).length===0}if(s)a1.n(0,h,a2.ac())
s=!1
if(f)if(J.z(d.h(0,g),!0)){s=a1.h(0,g)
s=J.k(s==null?"":s).length===0}if(s)a1.n(0,g,a2.ac())
j.n(0,"inGame",d)
j.n(0,"readyAt",a1)
b2.a=null
s=j.h(0,"startAt")
a3=J.k(s==null?"":s)
if(a3.length!==0){s=A.bi(a3)
a4=s==null?null:s.bS()
b2.a=a4
s=a4}else s=null
a5=i&&f&&J.z(d.h(0,h),!0)&&J.z(d.h(0,g),!0)
if(a5&&s==null){if(i){r=a1.h(0,h)
r=A.bi(J.k(r==null?"":r))
a6=r==null?null:r.bS()}else a6=null
if(f){r=a1.h(0,g)
r=A.bi(J.k(r==null?"":r))
a7=r==null?null:r.bS()}else a7=null
if(a6!=null&&a7!=null){a8=(a6.cc(a7)?a6:a7).bP(5e5)
if(!new A.S(Date.now(),0,!1).cY(a8)){a4=b2.a=a8.bP(4e6)
j.n(0,"startAt",a4.a6().ac())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.n(0,"memorySeed",B.o.F(1000*Date.now(),2147483647))
j.n(0,"memoryMatched",A.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.n(0,"patternSeed",B.o.F(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.hZL(t.a.d.b5,q,j)
t.a.bp()}if(t.c==null){w=1
break}b0=t.bC
if(b0==null)b0="your opponent"
if(!a5){t.m(new C.d8Q(b2,t,b0))
w=1
break}if(s==null){t.m(new C.d8R(t))
w=1
break}b1=new A.S(Date.now(),0,!1)
if(b1.cY(s)){s=s.by(b1).a
r=B.o.an(s,1e6)
t.m(new C.d8S(b2,t,r+(B.o.F(B.o.an(s,1000),1000)>0?1:0)))
w=1
break}if(t.c8){t.m(new C.d8T(b2,t))
b2=t.a.e
if(b2==="pattern")t.a7M()
else if(b2==="memory"){t.b3a()
if(t.c!=null)t.m(new C.d8U())}}b2=t.bj
if(b2!=null)b2.a8(0)
t.bj=null
case 1:return A.h(u,v)}})
return A.i($async$a_B,v)},
aMK(d){var w,v,u,t,s=this
if(d!=null){w=new A.eP()
w.dG(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e2(v,x.S)
for(t=0;t<v;++t)u[t]=w.aA(9)
s.ry=u
s.x1=0
s.to=-1},
aMJ(){return this.aMK(null)},
a7M(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a7M=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ghz()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.cdL()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return A.b(C.Kk(q,s.d.b5,!1),$async$a7M)
case 5:r=t.b_6(e)
case 4:if(t.c==null){w=1
break}t.aMK(r)
t.m(new C.d82(t))
t.Df()
case 1:return A.h(u,v)}})
return A.i($async$a7M,v)},
b_6(d){var w,v,u,t=null
if(d==null)return t
w=J.q(d,"sessionState")
if(!x.f.b(w))return t
v=J.q(w,"patternSeed")
if(typeof v=="number")return B.k.O(v)
u=v==null?t:J.k(v)
return A.c7(u==null?"":u,t)},
cdL(){var w=this.a,v=w.Q
if(v==null)return null
return this.b_6(C.tJ(w.d.b5,v))},
abb(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$abb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$abb)
case 3:r=e
q=t.a
p=q.e
q=B.a.i(q.c.a.toLowerCase())
s=A.f5(J.q(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.m(new C.d8z(t,s))
case 1:return A.h(u,v)}})
return A.i($async$abb,v)},
oM(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n
var $async$oM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$oM)
case 2:p=e
o=u.a
n=o.e
o=B.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bCh().length
else s=n==="typing"?50:105
if(n==="typing")r=B.o.F(u.at+5,s)
else{q=u.at
r=t?B.o.F(q+6,s):B.o.F(q+1,s)}w=3
return A.b(p.ar("Int","ngmy_game_"+n+"_"+o,r),$async$oM)
case 3:u.at=r
return A.h(null,v)}})
return A.i($async$oM,v)},
a1x(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a1x=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghz()||t.b1==null||t.f||t.aR){w=1
break}if(t.c8){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.Kk(r,s.d.b5,!1),$async$a1x)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.b5
s=s.Q
s.toString
p=C.tJ(r,s)
s=p==null
if(!s){r=J.cE(p)
r.a9(p)
r.v(p,q)}r=J.a8(q)
o=r.h(q,"sessionState")
if(!x.f.b(o)){w=1
break}n=A.a1(o,x.N,x.z)
r=r.h(q,"sessionUpdatedAt")
m=A.bi(J.k(r==null?"":r))
s=s?null:J.q(p,"sessionUpdatedAt")
l=A.bi(J.k(s==null?"":s))
if(m!=null&&l!=null&&!m.cc(l)){w=1
break}s=t.b1
s.toString
r=t.a
s.b8g(r.e,n,r.c.a)
r=t.b1
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.R1
else k=r.f===!0?D.pY:D.Hs
w=7
return A.b(t.zN(k),$async$a1x)
case 7:w=5
break
case 6:if(t.c!=null)t.m(new C.d95())
case 5:case 1:return A.h(u,v)}})
return A.i($async$a1x,v)},
afo(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$afo=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghz()||q.b1==null||q.a.Q==null||q.aR){w=1
break}q.aR=!0
t=3
o=q.b1
o.toString
p=o.cI4(q.a.e)
o=q.a
n=o.d.b5
o=o.Q
o.toString
w=6
return A.b(C.aOr(n,o,p),$async$afo)
case 6:q.a.bp()
r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
q.aR=!1
w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afo,v)},
zN(d){return this.bT1(d)},
bT1(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$zN=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(t.IG(s,s),$async$zN)
case 9:w=4
break
case 6:w=10
return A.b(t.X0(s,s),$async$zN)
case 10:w=4
break
case 7:w=11
return A.b(t.a9T(s,s),$async$zN)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghz()?12:13
break
case 12:w=14
return A.b(t.Hg(),$async$zN)
case 14:case 13:case 1:return A.h(u,v)}})
return A.i($async$zN,v)},
Zy(d,e){return this.c8d(d,e)},
c8d(d,e){var w=0,v=A.j(x.H),u,t=this
var $async$Zy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=t.ghz()?3:5
break
case 3:w=6
return A.b(t.afo(),$async$Zy)
case 6:if(d===D.pX){w=1
break}w=4
break
case 5:if(d===D.pX){w=1
break}case 4:w=7
return A.b(t.zN(d),$async$Zy)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Zy,v)},
ab5(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$ab5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghz()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tJ(s.d.b5,q)
if(p==null){w=1
break}o=B.a.i(t.a.c.a.toLowerCase())
n=J.q(p,"sessionState")
s=x.f
if(!s.b(n)){w=1
break}r=x.N
m=x.z
l=A.a1(n,r,m)
k=l.h(0,"inGame")
j=s.b(k)?A.a1(k,r,m):A.V(r,m)
j.n(0,o,!1)
l.n(0,"inGame",j)
l.W(0,"startAt")
w=3
return A.b(C.aOr(t.a.d.b5,q,l),$async$ab5)
case 3:t.a.bp()
case 1:return A.h(u,v)}})
return A.i($async$ab5,v)},
Hg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Hg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghz()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tJ(s.d.b5,q)
if(p==null){w=1
break}o=J.q(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?A.a1(o,s,r):A.V(s,r)
n.n(0,"gameOver",!0)
C.fWD(t.a.d.b5,q,n)
C.i24(t.a.d.b5,q)
w=3
return A.b(C.agh(t.a.d.b5),$async$Hg)
case 3:t.a.bp()
case 1:return A.h(u,v)}})
return A.i($async$Hg,v)},
q(){var w,v=this
if(v.ghz()&&!v.f)v.ab5()
else if(!v.f)v.bZs()
C.aYH();++v.RG
w=v.as
if(w!=null)w.a8(0)
w=v.b3
if(w!=null)w.a8(0)
w=v.cx
if(w!=null)w.a8(0)
w=v.bb
if(w!=null)w.a8(0)
w=v.bj
if(w!=null)w.a8(0)
w=v.e
w.S$=$.aw()
w.P$=0
v.bs1()},
cw1(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&A.c()
v=v<=0||w.b1==null}if(v)return
if(w.c8)return
v=w.b1
v.toString
w.a.toString
if(v.a>=v.b){w.tt("Goal completed!")
return}v=++w.rx
if(v%5===0)w.m(new C.d9e())},
b3b(){var w,v,u,t,s,r=this
r.x=A.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e2(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b3a()
break
case"scramble":r.bi=0
r.b3c()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=B.o.F(r.at,50)
v=J.e2(5,x.N)
for(t=0;t<5;++t)v[t]=D.d9w[B.o.F(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bN(0,B.c3)
break
case"math":r.y2=0
r.b39()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b3d()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e2(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
B.d.fq(v,s)
if(!r.ciD()){w=J.e2(9,w)
for(u=0;u<9;++u)w[u]=u
B.d.fq(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
B.d.a9(w)
w.push(r.d.aA(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.PS()
break
case"pattern":if(r.ghz()){r.ry=A.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aMJ()
w=A.t(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Df()}break
case"color":r.b5=0
r.b34()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.Z=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b4i()
break
default:if(B.d.t(D.PA,w)){w=r.b1
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
b0m(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
ciD(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return B.o.F(v,2)===0},
b3d(){var w,v,u,t,s,r=this,q=B.o.F(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e2(o,x.S)
for(w=0;w<o;w=v){v=w+1
n[w]=B.k.O(Math.pow(p,v))}u=B.k.O(Math.pow(p,o))
r.w=B.o.u(u)
r.az=B.d.aI(n,", ")
q=r.w
t=x.s
s=A.a([B.o.u(u+p),B.o.u(u-p),B.o.u(u+p*2)],t)
t=A.a([q],t)
B.d.v(t,s)
B.d.fq(t,r.d)
r.x=t},
b39(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bCh().length-6)u.at=0
w=$.bCh()
v=w[B.o.F(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b3c(){var w=this,v=w.w=D.cP0[B.o.F(w.at+w.bi,105)]
w.ax=C.i2m(v)
w.ay=A.c2(v.length,null,!1,x.T)
w.ch=A.a(w.ax.split(""),x.s)
w.e.bN(0,B.c3)},
b4i(){var w=this,v=w.cx
if(v!=null)v.a8(0)
w.y=!1
w.z=null
w.cx=A.cM(A.dC(0,0,0,120+w.d.aA(280),0,0),new C.d92(w))},
bT4(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.qS("Too early \u2014 paid for "+t.Z+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=B.o.an(new A.S(v,0,!1).by(u).a,1000)}if(w<520){t.m(new C.d8x(t))
v=t.Z
if(v>=5){t.oM()
t.tt("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b4i()
t.m(new C.d8y())}}else t.qS("Too slow ("+w+"ms) \u2014 paid for "+t.Z+"/5.")},
cvi(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=B.d.ba(t.ay,new C.d99())
if(u<0)return
t.m(new C.d9a(t,u,v,d))},
cvj(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.m(new C.d9b(u,d,v))},
bDl(){var w,v,u=this
if(u.f)return
if(B.d.b8(u.ay,new C.d83())){u.c.I(x.q).f.R(D.eNX)
return}w=B.d.fW(u.ay)
v=u.w
v===$&&A.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.m(new C.d84(u))
if(u.ghz()&&D.my.t(0,u.a.e))u.a_P()
if(u.bi>=5){u.oM()
if(u.ghz()&&D.my.t(0,u.a.e))u.mR(!0)
else u.tt("All 5 words unscrambled!")}else{u.b3c()
u.r="Word "+(u.bi+1)+" of 5 \u2014 place letters in order"
u.m(new C.d85())}}else u.qS("Wrong word \u2014 paid for "+u.bi+"/5.")},
b34(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=B.o.F(w.at+w.b5*11,4),t=v[w.d.aA(4)]
w.aG=t
w.aE=v[u]
w.aN=[B.dG,B.dw,B.hO,B.rc][u]
w.w=t},
aLQ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=B.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a9(0)
w=h.id
w.a9(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=A.aX(x.S)
for(s=J.js(v),s=s.gaf(s),r=x.j;s.C();){q=s.gU(s)
p=B.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aW(r.b(o)?o:B.cz),n=p===g;q.C();){m=q.gU(q)
l=typeof m=="number"?B.k.O(m):A.c7(J.k(m),null)
if(l==null)continue
t.L(0,l)
if(n)w.L(0,l)}}f.v(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aW(k);w.C();){m=w.gU(w)
l=typeof m=="number"?B.k.O(m):A.c7(J.k(m),null)
if(l!=null)f.L(0,l)}}h.k2=B.k.bw(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=A.aN(J.q(j,g))
i=f==null?null:B.k.O(f)
if(i!=null)h.fx=i}},
b3a(){var w,v,u,t,s,r,q,p=this
p.fx=p.k2=0
p.go.a9(0)
p.id.a9(0)
p.fy=A.a([],x.t)
p.k1=!1
w=A.B(p.dy,x.S)
B.d.v(w,p.dy)
p.fr=w
if(p.ghz()&&p.a.Q!=null){w=p.a
v=w.d.b5
w=w.Q
w.toString
u=C.tJ(v,w)
t=u==null?null:J.q(u,"sessionState")
w=x.N
v=x.z
s=x.f.b(t)?A.a1(t,w,v):A.V(w,v)
r=s.h(0,"memorySeed")
if(typeof r=="number")q=B.k.O(r)
else{w=r==null?null:J.k(r)
q=A.c7(w==null?"":w,null)}w=p.fr
if(q!=null){v=new A.eP()
v.dG(q)
B.d.fq(w,v)}else B.d.fq(w,p.d)
p.aLQ(s)}else B.d.fq(p.fr,p.d)},
cfz(d){var w,v,u,t=this
if(t.c8)return
if(t.f||t.k1||t.go.t(0,d)||B.d.t(t.fy,d))return
t.m(new C.d8J(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.m(new C.d8K(t,v,u))
if(t.ghz()&&D.my.t(0,t.a.e))t.a_P()
if(t.go.a>=t.fr.length){t.oM()
if(t.ghz()&&D.my.t(0,t.a.e))t.mR(!0)
else t.awY()}return}t.k1=!0
A.bN(D.bmR,new C.d8L(t),x.c)},
b2y(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&A.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.m(new C.d8V(u))
if(u.y1>=5){u.oM()
u.tt("All 5 questions correct!")}else{u.b3d()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.m(new C.d8W())}}else u.qS(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.m(new C.d8X(u))
if(u.y2>=6){u.oM()
u.tt("All 6 math questions correct!")}else{u.b39()
u.r="Question "+(u.y2+1)+" of 6"
u.m(new C.d8Y())}}else{u.V5(u.y2+1)
u.qS(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.m(new C.d8Z(u))
if(u.b5>=5){u.oM()
u.tt("All 5 color rounds correct!")}else{u.b34()
u.r="Round "+(u.b5+1)+" of 5 \u2014 tap the COLOR of the text"
u.m(new C.d9_())}}else u.qS("Wrong color \u2014 paid for "+u.b5+"/5.")
return}if(v){u.oM()
u.awY()}else u.c.I(x.q).f.R(D.eOG)},
cvh(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=B.d.cJ(q.k4,0)
v=B.o.an(d,3)
u=B.o.F(d,3)
t=B.o.an(w,3)
s=B.o.F(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.m(new C.d98(q,d,w))
if(B.d.fW(q.k4)==="123456780"){q.oM()
q.awY()}}},
PS(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.m(new C.d8M(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.d8N(t,q).$0()
t.c.e8()
w=6
return A.b(A.bN(B.kG,null,r),$async$PS)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.d8O(t).$0()
t.c.e8()
w=7
return A.b(A.bN(B.jw,null,r),$async$PS)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.m(new C.d8P(t))
case 1:return A.h(u,v)}})
return A.i($async$PS,v)},
cvk(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.qS("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.m(new C.d9c(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.oM()
u.tt("Perfect Simon run!")
return}u.m(new C.d9d(u))
u.PS()}},
Df(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Df=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.m(new C.d86(t))
s=x.H
w=3
return A.b(A.bN(B.ja,null,s),$async$Df)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.d87(t,o).$0()
t.c.e8()
w=7
return A.b(A.bN(B.Xk,null,s),$async$Df)
case 7:if(t.c==null){w=1
break}new C.d88(t).$0()
t.c.e8()
w=8
return A.b(A.bN(B.iv,null,s),$async$Df)
case 8:case 5:r.length===q||(0,A.L)(r),++p
w=4
break
case 6:if(t.c!=null)t.m(new C.d89(t))
case 1:return A.h(u,v)}})
return A.i($async$Df,v)},
V5(d){return this.by7(d)},
by7(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$V5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return A.b(A.az(),$async$V5)
case 3:s=f
r=t.a
q=r.e
r=B.a.i(r.c.a.toLowerCase())
p=$.bCh().length
o=B.o.F(t.at+d,p)
w=4
return A.b(s.ar("Int","ngmy_game_"+q+"_"+r,o),$async$V5)
case 4:t.at=o
case 1:return A.h(u,v)}})
return A.i($async$V5,v)},
cvf(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.qS("Wrong tile \u2014 paid for "+v.awV()+"/"+C.fUn()+" moves.")
return}v.m(new C.d96(v,w))
if(v.ghz()&&D.my.t(0,v.a.e))v.a_P()
if(v.x1>=w)if(v.x2>=7){v.oM()
if(v.ghz()&&D.my.t(0,v.a.e))v.mR(!0)
else v.tt("All 7 pattern rounds correct!")}else{v.m(new C.d97(v))
v.Df()}},
IG(d,e){return this.ce0(d,e)},
tt(d){return this.IG(null,d)},
awY(){return this.IG(null,null)},
ce0(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a8(0)
s=t.b3
if(s!=null)s.a8(0)
r=t.a.x*1.46
t.m(new C.d8H(t,r))
q=B.o.u(1000*Date.now())
s=t.a
p=new A.d2(q,s.c.a,r,B.fB,B.fb,"Game payout: "+s.f,null,null,B.cl,new A.S(Date.now(),0,!1))
A.age(p,!0)
t.a.hs(p)
t.a.bp()
o=e==null?"+$"+B.k.aa(r,2)+" added to your balance!":e
s=t.a
C.up(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.EE(d,o,"YOU WIN!",!0),$async$IG)
case 3:w=4
return A.b(C.ag6(t.a.f,o),$async$IG)
case 4:case 1:return A.h(u,v)}})
return A.i($async$IG,v)},
EC(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$EC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghz()&&D.my.t(0,t.a.e)?3:4
break
case 3:w=5
return A.b(t.cpK(),$async$EC)
case 5:w=1
break
case 4:s=t.zL()
r=t.NU()
w=r<=0||s<=0?6:7
break
case 6:w=8
return A.b(t.a9U("Time's up \u2014 no progress to pay."),$async$EC)
case 8:w=1
break
case 7:q=B.k.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return A.b(t.tt("Complete! Max payout earned."),$async$EC)
case 12:w=10
break
case 11:w=13
return A.b(t.E3(q,s,r),$async$EC)
case 13:case 10:case 1:return A.h(u,v)}})
return A.i($async$EC,v)},
PZ(d){return this.cik(d)},
a_P(){return this.PZ(!1)},
cik(b1){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$PZ=A.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghz()&&D.my.t(0,r.a.e))||r.a.Q==null){w=1
break}if(!b1){a1=new A.S(Date.now(),0,!1)
a2=r.bT
if(a2!=null&&a1.by(a2).a<3e6){w=1
break}r.bT=a1}a2=r.a
a3=a2.Q
a3.toString
q=B.a.i(a3)
if(J.ad(q)===0){w=1
break}t=4
p=B.a.i(a2.c.a.toLowerCase())
a4=C.tJ(a2.d.b5,q)
w=a4==null?7:9
break
case 7:w=10
return A.b(C.Kk(q,r.a.d.b5,!1),$async$PZ)
case 10:w=8
break
case 9:b3=a4
case 8:o=b3
if(o==null){w=1
break}n=J.q(o,"sessionState")
a2=x.f
a3=x.N
a5=x.z
m=a2.b(n)?A.a1(n,a3,a5):A.V(a3,a5)
l=J.q(m,"scores")
k=a2.b(l)?A.a1(l,a3,a5):A.V(a3,a5)
J.aG(k,p,r.zL())
J.aG(m,"scores",k)
if(r.a.e==="memory"){j=J.q(m,"memoryMatchedBy")
i=a2.b(j)?A.a1(j,a3,a5):A.V(a3,a5)
a6=r.id
a6=A.B(a6,A.a4(a6).k("cm.E"))
B.d.fh(a6)
J.aG(i,p,a6)
J.aG(m,"memoryMatchedBy",i)
h=A.aX(x.S)
for(a6=i,a6=new A.dt(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aW(g);a8.C();){f=a8.gU(a8)
e=typeof f=="number"?B.k.O(f):A.c7(J.k(f),null)
if(e!=null)J.cf(h,e)}}a6=h
a6=A.B(a6,A.a4(a6).k("cm.E"))
B.d.fh(a6)
J.aG(m,"memoryMatched",a6)}d=J.q(m,"wagers")
a0=a2.b(d)?A.a1(d,a3,a5):A.V(a3,a5)
J.aG(a0,p,r.a.x)
J.aG(m,"wagers",a0)
w=11
return A.b(C.aOr(r.a.d.b5,q,m),$async$PZ)
case 11:r.a.bp()
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
return A.i($async$PZ,v)},
mR(d){return this.cpL(d)},
cpK(){return this.mR(!1)},
cpL(b5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$mR=A.e(function(b6,b7){if(b6===1)return A.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghz()||t.a.Q==null?3:4
break
case 3:w=5
return A.b(t.EC(),$async$mR)
case 5:w=1
break
case 4:w=6
return A.b(t.PZ(!0),$async$mR)
case 6:s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=B.a.i(s.c.a.toLowerCase())
w=7
return A.b(C.Kk(q,s.d.b5,!0),$async$mR)
case 7:o=b7
n=t.NU()
w=o==null?8:9
break
case 8:m=B.k.D(t.zL()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return A.b(t.a9U("Time's up \u2014 no progress to pay."),$async$mR)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return A.b(t.tt("Complete! Max payout earned."),$async$mR)
case 17:w=15
break
case 16:w=18
return A.b(t.E3(m,t.zL(),n),$async$mR)
case 18:case 15:case 11:w=19
return A.b(t.Hg(),$async$mR)
case 19:w=1
break
case 9:s=J.a8(o)
r=s.h(o,"fromEmail")
l=B.a.i(J.k(r==null?"":r).toLowerCase())
r=s.h(o,"toEmail")
k=B.a.i(J.k(r==null?"":r).toLowerCase())
j=p===l?k:l
i=s.h(o,"sessionState")
s=x.f
r=x.N
h=x.z
g=s.b(i)?A.a1(i,r,h):A.V(r,h)
f=g.h(0,"scores")
e=s.b(f)?A.a1(f,r,h):A.V(r,h)
d=A.aN(e.h(0,p))
a0=d==null?null:B.k.O(d)
if(a0==null)a0=t.zL()
d=A.aN(e.h(0,j))
a1=d==null?null:B.k.O(d)
if(a1==null)a1=0
a2=B.k.D(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return A.b(t.a9U("Time's up \u2014 no progress to pay."),$async$mR)
case 22:w=23
return A.b(t.Hg(),$async$mR)
case 23:w=1
break
case 21:a3=g.h(0,"wagers")
r=A.aN((s.b(a3)?A.a1(a3,r,h):A.V(r,h)).h(0,j))
a4=r==null?null:r
if(a4==null)a4=0
if(a0===a1)a5=""
else a5=a0>a1?p:j
a6=a0>=n?1:a2
s=a5===p
a7=s&&a4>0?a4*a6:0
t.f=!0;++t.RG
r=t.as
if(r!=null)r.a8(0)
r=t.b3
if(r!=null)r.a8(0)
a8=t.a.x*1.46*a2
a9=a8+a7
t.m(new C.d90(t,a8,a2))
r=t.a
r.toString
h=B.o.u(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+B.k.aa(a7,2):d+" ("+b1+"/"+b2+")"
r.hs(new A.d2(h,b0,a9,B.fB,B.fb,d,null,null,B.cl,new A.S(Date.now(),0,!1)))
t.a.bp()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+B.k.aa(a9,2)+" (includes opponent bonus $"+B.k.aa(a7,2)+")":"+$"+B.k.aa(a8,2)+" (your progress payout)"
s=t.a
C.up(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return A.b(t.EE(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$mR)
case 24:w=25
return A.b(t.Hg(),$async$mR)
case 25:case 1:return A.h(u,v)}})
return A.i($async$mR,v)},
E3(d,e,f){return this.cdZ(d,e,f)},
cdZ(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$E3=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a8(0)
s=t.b3
if(s!=null)s.a8(0)
r=t.a.x*1.46*d
t.m(new C.d8F(t,r,d))
s=B.o.u(1000*Date.now())
q=t.a
p=new A.d2(s,q.c.a,r,B.fB,B.fb,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,B.cl,new A.S(Date.now(),0,!1))
A.age(p,!0)
t.a.hs(p)
t.a.bp()
if(t.c==null){w=1
break}o=B.k.V(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&A.c()
m=q+C.ags(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?B.d.cI(t.cy,0,new C.d8G()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+B.k.aa(r,2)+" ("+n+"% \u2014 "+A.t(k)+" mistakes/missed)":"+$"+B.k.aa(r,2)+" ("+n+"% of full prize)"
q=t.a
C.up(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return A.b(t.EE(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$E3)
case 3:w=4
return A.b(C.ag6(t.a.f,j),$async$E3)
case 4:case 1:return A.h(u,v)}})
return A.i($async$E3,v)},
bZs(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.zL()
v=o.NU()}catch(u){return}if(v<=0||w<=0)return
t=B.k.D(w/v,0,1)
s=A.nQ(B.k.aa(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=B.o.u(1000*Date.now())
p=o.a
r.hs(new A.d2(q,p.c.a,s,B.fB,B.fb,"Game partial: "+p.f+" ("+A.t(w)+"/"+A.t(v)+", left early)",n,n,B.cl,new A.S(Date.now(),0,!1)))
o.a.bp()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.up(s,n,"Left early \xb7 +$"+B.k.aa(s,2)+" ("+A.t(w)+"/"+A.t(v)+")",q,r,p,n,!0)},
a9T(d,e){return this.bND(d,e)},
bND(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a9T=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a8(0)
s=t.b3
if(s!=null)s.a8(0)
r=B.o.u(1000*Date.now())
s=t.a
q=s.c.a
p=s.x
s=s.f
o=Date.now()
t.a.hs(new A.d2(r,q,p,B.fB,B.fb,"Game payout: "+s+" (draw, stake returned)",null,null,B.cl,new A.S(o,0,!1)))
t.a.bp()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.up(o,null,"Draw. Your $"+B.k.aa(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.EE(d,"Nobody won, so your $"+B.k.aa(t.a.x,2)+" stake was returned.","DRAW",!1),$async$a9T)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9T,v)},
X0(d,e){return this.bNE(d,e)},
a9U(d){return this.X0(null,d)},
bNE(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$X0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a8(0)
s=t.b3
if(s!=null)s.a8(0)
s=t.a
r=s.c.a
q=s.f
s=s.x
C.up(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return A.b(t.EE(d,e,"YOU LOSE",!1),$async$X0)
case 3:case 1:return A.h(u,v)}})
return A.i($async$X0,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&A.c()
w=B.o.an(m,60)
m=B.a.aT(B.o.u(B.o.F(m,60)),2,"0")
v=A.aH(n,n,n,n,B.alS,n,n,n,new C.d9f(d),n,n,n,n,n,n)
if(o.ghz()){u=o.bC
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=A.D(A.d(u?t.f+" vs "+A.t(o.bC):t.f,n,2,B.a2,n,n,n,B.fN,n,n,n),1)
r=A.m(10)
q=x.p
r=A.A(A.a([v,s,A.p(n,C.ape(new C.d9g(o),B.o8,t.c.a),B.f,n,n,new A.o(B.cR,n,n,r,n,n,B.n),n,n,n,n,B.fH,n,n,n)],q),B.m,n,B.e,B.j,0,n,n)
t=o.a
s=t.w
v=A.m(10)
s=A.p(n,A.A(A.a([A.D(A.d("Win $"+B.k.aa(t.x*1.46,2)+" \xb7 stake $"+B.k.aa(o.a.x,2)+" \u2022 Progress "+o.zL()+"/"+o.NU(),n,n,n,n,n,n,D.eXg,n,n,n),1),new C.aop(o.a.c.a,new C.d9h(o),n),B.ab,D.bDL,B.d8,A.d(""+w+":"+m,n,n,n,n,n,n,B.no,n,n,n)],q),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,n,v,n,new A.a7(B.a3,B.a7,B.x,s,n,n),B.n),n,n,n,n,B.h5,n,n,n)
v=o.a.w
m=A.T(v).k("K<1,w>")
m=A.B(new A.K(v,new C.d9i(),m),m.k("aj.E"))
w=A.m(14)
v=A.I(B.b2,B.q,1)
p=C.aO5(n,D.b53,A.bm(!0,new A.C(Ag.XH,A.v(A.a([r,s,B.P,new A.fh(new C.d9j(o),n),B.an,A.D(A.p(n,o.bNC(),B.f,n,n,new A.o(n,n,v,w,n,new A.a7(B.a3,B.a7,B.x,m,n,n),B.n),n,n,n,n,B.ck,n,n,n),1)],q),B.aj,n,B.e,B.j,0,B.p),n),!0,!1,B.af,!0,!0))
if(!o.c8)return p
m=A.Z(140,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255)
w=A.Z(242,B.is.l()>>>16&255,B.is.l()>>>8&255,B.is.l()&255)
v=A.m(18)
u=A.I(B.b2,B.q,1)
return new A.an(B.W,n,B.aa,B.r,A.a([p,A.bY(0,A.p(B.A,A.e0(A.p(n,A.v(A.a([D.eK7,B.ac,A.d(o.cW,n,n,n,n,n,n,D.eYH,B.L,n,n),B.an,A.d(o.cl,n,n,n,n,n,n,D.eWY,B.L,n,n)],q),B.m,n,B.e,B.Q,0,B.p),B.f,n,n,new A.o(w,n,u,v,n,n,B.n),n,n,n,B.vc,B.xo,n,n,n),!1,n),B.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
c_q(){var w=this.k3
return A.cn(new C.d8E(this,w,B.k.dw(this.fr.length/w)))},
bNC(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.c_q()
if(m==="scramble"){m=o.r
m===$&&A.c()
w=x.l
return A.v(A.a([A.d(m,n,n,n,n,n,n,B.p_,n,n,n),A.d("Words "+o.bi+"/5",n,n,n,n,n,n,B.D5,n,n,n),B.ac,A.d("Tap letters below to fill each slot",n,n,n,n,n,n,A.l(n,n,A.Z(166,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.S,A.c_(B.fQ,A.iq(o.ay.length,new C.d8m(o),!0,w),B.bs,6,6),B.aP,A.c_(B.fQ,A.iq(o.ch.length,new C.d8n(o),!0,w),B.bs,8,8),B.aP,new A.a6(1/0,n,A.ia(D.fmR,o.gbDk(),A.fl(n,n,B.aE,n,n,n,n,n,n,B.c,n,n,B.cf,n,n,n,n,n,n,n)),n)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="typing"){m=o.w
m===$&&A.c()
return new C.aqG(m,o.e,new C.d8o(o),new C.d8p(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&A.c()
m=A.a([A.d(m,n,n,n,n,n,n,B.p_,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(A.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,B.D5,n,n,n))
m.push(B.ac)
if(o.a.e==="sequence"){w=o.az
w===$&&A.c()
w+=", ?"}else w=o.CW
m.push(A.f2(B.A,A.d(w,n,n,n,n,n,n,B.oZ,B.L,n,n),B.f,B.dt))
m.push(B.aP)
w=o.x
B.d.v(m,new A.K(w,new C.d8q(o),A.T(w).k("K<1,r>")))
return A.v(m,B.m,n,B.e,B.j,0,B.p)}if(m==="puzzle")return A.cn(new C.d8r(o))
if(m==="simon"){m=o.r
m===$&&A.c()
return A.v(A.a([A.d(m,n,n,n,n,n,n,B.p_,n,n,n),A.d("Progress "+o.p3+"/21",n,n,n,n,n,n,B.D5,n,n,n),B.P,A.D(A.lU(1,A.iq(4,new C.d8s(o),!0,x.l),2,10,10,n,B.dQ,!1),1)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="pattern")return A.cn(new C.d8t(o))
if(m==="color"){u=A.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[B.dG,B.dw,B.hO,B.rc]
m=o.r
m===$&&A.c()
m=A.d(m,n,n,n,n,n,n,B.p_,n,n,n)
w=A.d("Round "+o.b5+"/5",n,n,n,n,n,n,B.D5,n,n,n)
v=o.aE
v===$&&A.c()
s=o.aN
s===$&&A.c()
s=A.a([m,w,B.ac,A.d(v,n,n,n,n,n,n,A.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.aP],x.p)
r=J.e2(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=A.fl(n,n,A.Z(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,B.c,n,n,B.eZ,n,n,n,n,n,n,n)
r[q]=new A.C(B.cH,new A.a6(1/0,n,A.ia(new A.x(u[q],n,B.cw,n,n,n,n,n,n,n,n,n),new C.d8u(o,u,q),m),n),n)}B.d.v(s,r)
return A.v(s,B.m,n,B.e,B.j,0,B.p)}if(m==="reflex"){m=o.y
p=m?B.bo:B.cb
w=o.r
w===$&&A.c()
w=A.d(w,n,n,n,n,n,n,B.a6R,B.L,n,n)
v=A.d("Fast taps "+o.Z+"/5",n,n,n,n,n,n,D.eUu,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=A.d(m,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,n,n,n,Math.min(A.aI(s,B.bT,x.w).w.a.a*0.18,72),n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return A.rl(A.aE(B.c5,A.dg(n,A.v(A.a([w,B.P,v,B.b4,s,B.b4,new A.C(B.EW,A.d(m,n,n,n,n,n,n,A.l(n,n,A.Z(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),B.m,n,B.bb,B.j,0,B.p),p,n,B.bc,n,U.AC,n,n,n,n,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gbT3(),n,n,n,n,n,n,!1,B.a8))}if(B.d.t(D.PA,m)&&o.b1!=null){m=o.a.e
w=o.b1
w.toString
return C.hSL(m,new C.d8v(o),new C.d8w(o),o.d,w)}m=o.r
m===$&&A.c()
return A.av(A.d(m,n,n,n,n,n,n,B.dl,n,n,n),n,n,n)}}
C.akS.prototype={
T(){return new C.beW()},
cNN(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.beW.prototype={
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.a,a0=d.c,a1=d.d
d=A.aI(a2,B.e7,x.w).w
w=x.p
v=A.a([A.bMq(!1,f.a.r,"INVESTMENT PLANS",e),B.d5],w)
u=a0.x
if(u!=null){t=u.d.bS()
s=B.a.aT(B.o.u(A.bG(t)),2,"0")
r=B.a.b0(B.o.u(A.by(t)+1),2)
q=A.m(18)
p=A.I(W.Wr,B.q,2.2)
o=x.V
n=A.a([new A.ac(0,B.G,A.Z(89,B.qy.l()>>>16&255,B.qy.l()>>>8&255,B.qy.l()&255),B.eT,20),new A.ac(0,B.G,A.Z(102,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dk,14)],o)
m=A.ao(e,A.p(e,e,B.f,e,e,new A.o(A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),e,e,e,e,e,B.a6),e,120,e,e,e,e,e,120),e,e,e,-20,-24,e)
l=A.m(10)
k=A.I(W.Wr,B.q,3.4)
o=A.a([new A.ac(0,B.G,A.Z(166,B.qy.l()>>>16&255,B.qy.l()>>>8&255,B.qy.l()&255),B.dC,10),new A.ac(0,B.G,A.Z(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cJ,6)],o)
o=A.A(A.a([A.p(e,e,B.f,e,e,new A.o(e,e,k,l,o,new A.a7(B.ax,B.aC,B.x,D.cZh,D.cBG,e),B.n),e,42,e,e,e,e,e,56),B.b4,f.b53(a2,!0)],w),B.m,e,B.e,B.j,0,e,e)
l=A.D0(u.a,1,B.a2,D.f0P)
k=u.b
j=u.c
i=A.D0("Making $"+A.dB(k*j)+" Daily",1,B.a2,D.f11)
h=A.D0(f.b08(k),1,B.a2,D.eVc)
r=A.A(A.a([A.D(A.v(A.a([D.fga,A.D0(a0.c,1,B.a2,D.aOQ)],w),B.F,e,B.e,B.j,0,B.p),1),A.v(A.a([D.ffX,A.d(s+"/"+r,e,e,e,e,e,e,D.aOQ,e,e,e)],w),B.dF,e,B.e,B.j,0,B.p)],w),B.m,e,B.e,B.j,0,e,e)
s=A.p(e,e,B.f,A.Z(89,D.wS.l()>>>16&255,D.wS.l()>>>8&255,D.wS.l()&255),e,e,e,1,e,e,e,e,e,e)
j=A.A(A.a([f.apW("INVESTED","$"+A.dB(k),!0),f.apW("DAILY ROI",B.k.aa(j*100,2)+"%",!0),f.apW("DAYS LEFT",""+(261-u.f)+" d",!0)],w),B.m,e,B.hM,B.j,0,e,e)
k=A.dB(u.e)
u=u.f
g=261-u>0?"ACTIVE":"ENDED"
B.d.v(v,A.a([D.fmr,B.up,A.p(e,new A.an(B.W,e,B.aa,B.r,A.a([m,A.v(A.a([o,B.P,D.feB,B.bA,l,B.at,i,B.at,h,B.P,r,B.an,s,B.an,j,B.at,A.D0("Earned $"+k+" \u2022 Clocked "+u+"/261 \u2022 "+g,1,B.a2,D.f0c)],w),B.F,e,B.e,B.Q,0,B.p)],w),e),B.f,e,e,new A.o(e,e,p,q,n,D.bT6,B.n),e,e,e,e,B.bC,e,e,1/0),B.a6b],w))}v.push(D.f6S)
v.push(B.up)
B.d.v(v,new A.K(a1,new C.dcS(f,a2),A.T(a1).k("K<1,r>")))
return A.c8(e,B.K,A.bm(!1,A.cd(A.v(v,B.F,e,B.e,B.j,0,B.p),B.r,e,B.y,e,new A.Q(20,10,20,124+d.r.d),e,e,B.ah),!0,!1,B.af,!0,!0),e,!1,!1,e,e)},
b53(d,e){var w=null,v=A.Z(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(8),t=A.I(B.j9,B.q,1)
return A.p(w,A.A(A.a([A.W(B.ajJ,B.c,w,w,w,16),B.d8,A.d("TAP",w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eF,w,w,w)},
b08(d){var w=B.a.aT(B.o.u(B.k.V(d*100)),4,"0")
return"****  ****  ****  "+B.a.b0(w,w.length-4)},
apW(d,e,f){var w=null,v=A.Z(217,D.wS.l()>>>16&255,D.wS.l()>>>8&255,D.wS.l()&255)
v=A.d(d,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.v(A.a([v,B.bA,A.D0(e,w,w,A.l(w,w,E.Al,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),B.F,w,B.e,B.j,0,B.p)},
cg2(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gcSb(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
a0=A.m(18)
w=A.I(B.aQ,B.q,2)
p=x.V
o=A.a([new A.ac(0,B.G,A.Z(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.Ro,16),new A.ac(0,B.G,A.Z(115,B.ak.l()>>>16&255,B.ak.l()>>>8&255,B.ak.l()&255),B.dk,14),new A.ac(0,B.G,A.Z(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cJ,8)],p)
n=A.ao(d,A.p(d,d,B.f,d,d,new A.o(d,d,d,d,d,new A.bR(B.A,0.5,B.x,d,0,A.a([A.Z(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),A.Z(0,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)],x.O),d,d),B.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=A.m(5)
l=A.I(B.c,B.q,2.2)
k=A.b0(4286436348)
k=A.Z(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=A.Z(B.k.V(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
i=A.b0(4279150057)
h=x.p
p=A.A(A.a([new A.a6(44,44,new A.an(B.W,d,B.aa,B.f,A.a([A.ao(d,A.eC(B.A,0.7853981633974483,A.p(d,d,B.f,d,d,new A.o(d,d,l,m,A.a([new A.ac(0.5,B.G,k,B.J,14),new A.ac(0,B.G,j,B.J,6),new A.ac(0,B.G,A.Z(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new A.u(0,2),4)],p),D.bRL,B.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.e8U],h),d),d),B.b4,e.b53(b2,!0)],h),B.m,d,B.e,B.j,0,d,d)
a6=A.D0(a6,1,B.a2,D.eRX)
i=A.D0(e.b08(a3),1,B.a2,D.f5g)
j=A.A(A.a([e.b_A(B.k.aa(2.86,2)+"%"),B.eb,e.b_A("261d")],h),B.m,d,B.e,B.j,0,d,d)
k=A.D(A.v(A.a([D.f85,A.D0("$"+A.dB(a3),1,B.a2,D.f42)],h),B.F,d,B.e,B.j,0,B.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=A.A(A.a([k,A.d(m,d,d,d,d,d,d,D.eSJ,d,d,d)],h),B.dF,d,B.e,B.j,0,d,d)
k=A.p(d,d,B.f,A.Z(89,B.bv.l()>>>16&255,B.bv.l()>>>8&255,B.bv.l()&255),d,d,d,1,d,d,d,d,d,d)
l=A.A(A.a([A.D(e.axa("Daily","$"+A.dB(a4)),1),B.eb,A.D(e.axa("Total","$"+A.dB(a4*261)),1),B.eb,A.D(e.axa("Days","261"),1)],h),B.m,d,B.e,B.j,0,d,d)
g=q?d:new C.dcR(e,b3,a3,t)
f=B.k.V(127.5)
f=A.fl(d,d,B.bm,A.Z(f,B.ak.l()>>>16&255,B.ak.l()>>>8&255,B.ak.l()&255),A.Z(f,B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255),d,3,d,d,B.aQ,d,d,d,d,new A.b7(A.m(10),D.aWu),d,d,d,d,d)
return A.p(d,new A.an(B.W,d,B.aa,B.f,A.a([n,A.v(A.a([p,B.bA,D.fgU,B.bA,a6,B.cX,i,B.fZ,j,B.fZ,m,B.fZ,k,B.fZ,l,B.P,new A.a6(1/0,40,A.ia(A.f2(B.A,A.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.eT9,d,d,d),B.f,B.eg),g,f),d)],h),B.F,d,B.e,B.Q,0,B.p)],h),d),B.f,d,d,new A.o(d,d,w,a0,o,D.bTF,B.n),d,d,d,B.kH,D.boC,d,d,1/0)},
b_A(d){var w=null,v=A.Z(115,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(5),t=A.I(B.cp,B.q,1)
return A.p(w,A.d(d,w,w,w,w,w,w,D.eSl,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.Fb,w,w,w)},
axa(d,e){var w=null,v=A.Z(97,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(7),t=A.I(B.aL,B.q,1)
return A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,D.f0A,w,w,w),B.uq,A.f2(B.a3,A.d(e,w,w,w,w,w,w,D.f36,w,w,w),B.f,B.dt)],x.p),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.lJ,w,w,w)}}
C.ahf.prototype={
T(){var w=null,v=A.a([],x._),u=$.aw()
return new C.aw8(v,new A.ar(B.as,u),new A.ar(B.as,u),A.mt(0,w,w),new A.hW(),D.QR,C.ag3(),A.a([],x.fw),A.aX(x.N),A.mt(0,w,w))}}
C.aw8.prototype={
a_(){var w,v,u,t,s,r=this
r.a1()
w=r.a
w.toString
r.d=0
v=A.z9(0,1)
r.e!==$&&A.aO()
r.e=v
r.ay=w.f.aE
w=r.k3=A.bl(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t].a
if(s.length!==0)u.L(0,s)}r.abg()
r.Oe()
r.apy()
r.csF()
r.csU()
$.aT.x1$.push(new C.cAK(r))
r.a.toString},
Oe(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Oe=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aoQ(),$async$Oe)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cA4(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Oe,v)},
gayL(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gOa())return!0
return!1},
gOa(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaTF(){var w,v=this.CW
if(v==null)return B.bx
w=v.by(new A.S(Date.now(),0,!1))
return w.a<0?B.bx:w},
byV(){var w=this
if(w.a.c.w)return
if(w.gOa()){if(!w.cx)w.m(new C.czV(w))}else if(w.cx)w.m(new C.czW(w))},
cm6(){this.m(new C.cAe(this))},
tA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$tA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.m(new C.cAb(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.m(new C.cAc(t))
w=1
break}w=3
return A.b(C.c7d(o.a,s),$async$tA)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return A.b(C.c7e(t.a.c.a,s),$async$tA)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.m(new C.cAd(t,r,q))
t.cuK()
t.byV()
if(r===3)t.Y1(r)}case 1:return A.h(u,v)}})
return A.i($async$tA,v)},
Y1(d){return this.c_h(d)},
c_h(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Y1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return A.b(C.bBU(q,r,new C.cA6(t),d,s.c.a),$async$Y1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$Y1,v)},
x0(d){return this.bAo(d)},
apy(){return this.x0(!1)},
bAo(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$x0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return A.b(A.a78(k,C.hhu(l.d)),$async$x0)
case 3:j=m
w=4
return A.b(C.c7D(k),$async$x0)
case 4:s=j.a=f
w=5
return A.b(A.apE(k),$async$x0)
case 5:r=f
w=!s.a&&J.cx(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.Uy(!0,l,q,p)
m.a=s
w=8
return A.b(C.aoS(k,s),$async$x0)
case 8:case 7:w=9
return A.b(C.Tx(k),$async$x0)
case 9:o=f
w=10
return A.b(C.a6v(k),$async$x0)
case 10:n=f
if(t.c==null){w=1
break}t.m(new C.czX(m,t,r,o,n))
case 1:return A.h(u,v)}})
return A.i($async$x0,v)},
Pw(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Pw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Oe(),$async$Pw)
case 3:s=t.c
if(s==null){w=1
break}r=A.e6(new C.cA9(t),!1,null,x.H)
w=4
return A.b(A.a5(s,!1).c6(r),$async$Pw)
case 4:w=5
return A.b(t.Oe(),$async$Pw)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Pw,v)},
cwP(){this.m(new C.cAx(this))},
csU(){var w=this,v=w.go
if(v!=null)v.a8(0)
if(w.a.c.w)return
w.go=A.dA(B.qL,new C.cAr(w))},
cuK(){var w=this,v=w.id
if(v!=null)v.a8(0)
w.id=null
if(!w.gOa()||w.CW==null)return
w.id=A.dA(B.h4,new C.cAu(w))},
csF(){var w=this,v=w.fy
if(v!=null)v.a8(0)
w.fy=A.dA(B.jb,new C.cAq(w))
w.EJ()},
EJ(){return this.cuJ()},
cuJ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$EJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aE
t=4
w=7
return A.b(A.az(),$async$EJ)
case 7:q=e
p=A.aU(J.q(q.a,"app_config"))
if(p!=null&&p.length!==0){o=B.R.aH(0,p,null)
if(x.f.b(o)){m=A.CM(A.a1(o,x.N,x.z)).aE
i.a=m
r.a.f.aE=m}}w=10
return A.b(A.Kw(),$async$EJ)
case 10:w=e?8:9
break
case 8:w=11
return A.b(A.aO4(),$async$EJ)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aE=l
w=14
return A.b(q.ar("String","app_config",B.R.ao(k.ae(),null)),$async$EJ)
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
break}if(i.a!==r.ay)r.m(new C.cAs(i,r))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$EJ,v)},
b3Z(){B.d.b_(this.f,new C.cAp())},
abg(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$abg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Ml(t.a.c.a),$async$abg)
case 3:q=e
if(t.c==null){w=1
break}s=A.a([],x._)
if(J.cx(q)){B.d.v(s,q)
B.d.b_(s,new C.cA1())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(A.F(["role","ai","text",r,"at",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z))}t.m(new C.cA2(t,s))
t.a0M(!0)
A.bN(B.ja,new C.cA3(t),x.H)
case 1:return A.h(u,v)}})
return A.i($async$abg,v)},
aeM(){var w=0,v=A.j(x.H),u=this
var $async$aeM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.amG(u.a.c.a,u.f),$async$aeM)
case 2:return A.h(null,v)}})
return A.i($async$aeM,v)},
br(d){this.bE(d)},
q(){var w,v=this,u=v.fy
if(u!=null)u.a8(0)
u=v.go
if(u!=null)u.a8(0)
u=v.id
if(u!=null)u.a8(0)
u=v.r
w=$.aw()
u.S$=w
u.P$=0
u=v.w
u.S$=w
u.P$=0
v.ok.q()
v.x.q()
u=v.e
u===$&&A.c()
u.q()
v.a2()},
aag(d){var w,v=this
v.m(new C.cA_(v,d))
w=v.e
w===$&&A.c()
if(w.f.length!==0)w.AL(d,B.cr,B.kG)
else $.aT.x1$.push(new C.cA0(v,d))
if(d===0)v.a0M(!0)
if(d===1)v.co3(!0)},
a0M(d){$.aT.x1$.push(new C.cAh(this,d))},
ayo(){return this.a0M(!1)},
a05(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a05=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0i(),$async$a05)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==B.a.i(t.a.f.r))t.m(new C.cAa(t))
case 1:return A.h(u,v)}})
return A.i($async$a05,v)},
mQ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$mQ=A.e(function(c8,c9){if(c8===1){s.push(c9)
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
return A.b(C.aoL(a9.a,b0),$async$mQ)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return A.b(q.tA(),$async$mQ)
case 10:q.m(new C.cAi(q))
w=1
break
case 8:w=11
return A.b(q.tA(),$async$mQ)
case 11:if(q.c!=null&&q.ch===3)q.Y1(3)
case 6:case 4:q.m(new C.cAj(q,c5))
C.Tk(q.a.c.a,"user",c5)
q.ayo()
t=13
a8={}
w=16
return A.b(q.a05(),$async$mQ)
case 16:b1=B.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return A.b(A.a0i(),$async$mQ)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.m(new C.cAk(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.bzZ("",null)
q.m(new C.cAl(q,p))
C.Tk(q.a.c.a,"ai",p)
q.ayo()
r=[1]
w=14
break}o=A.mZ(a9)
a9=q.a
n=""
m=C.hhu(a9.d)
w=C.hhn(c5)?20:21
break
case 20:w=22
return A.b(C.c7C(q.a.c.a),$async$mQ)
case 22:q.db=c9
w=23
return A.b(q.x0(!0),$async$mQ)
case 23:case 21:w=24
return A.b(A.a78(q.a.c.a,m),$async$mQ)
case 24:l=c9
k=C.hzg(l)
a9=k
b2=Date.now()
b3=new A.S(b2,0,!1).bS()
b2=B.a.aT(B.o.u(A.bG(b3)),2,"0")
b4=B.a.aT(B.o.u(A.bQ(b3)),2,"0")
b5=B.a.aT(B.o.u(A.dh(b3)),2,"0")
b6=B.a.aT(B.o.u(A.fY(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+A.by(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return A.b(C.Tx(q.a.c.a),$async$mQ)
case 25:i=c9
h=C.h1H(i,25)
w=26
return A.b(C.a6v(q.a.c.a),$async$mQ)
case 26:g=c9
f=C.h3k(g)
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
return A.b(C.ag4(a9,q.a.c.a,c5),$async$mQ)
case 27:a0=c9
a1=""
if(C.hhn(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:B.a.i(b2).length!==0)===!0){b2.toString
b8=B.a.i(b2)}else{a9=a9.c
b8=B.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=A.t(d)
b4=A.t(j)
b5=q.a.c.w?"\n"+C.hVy(m)+"\n":""
b6=J.ad(n)!==0?"\n"+A.t(n)+"\n":""
b9=J.ad(a0)!==0?"\n"+A.t(a0)+"\n":""
c0=A.t(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.htC(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+A.t(c5)
w=28
return A.b(A.qF(o,a2,B.hl,null),$async$mQ)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.bzZ(a8.a,a3.a)
a4=c2
a5=A.hgK(a4)
c3=a5.a
a8.b=c3
if(B.d.gam(c3)){a9=A.B(C.hYg(c5),x.an)
a6=a9
J.h_(a6,C.hYh(c5))
J.h_(a6,C.hYi(c5))
J.h_(a6,A.hgc(c5))
J.h_(a6,C.hYl(c5,q.a.c.w))
a8.b=a6}c3=C.hXu(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return A.b(A.agk(c3,a6,m,q.a.c.a),$async$mQ)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.m(new C.cAm(a8,q,a7))
C.Tk(q.a.c.a,"ai",a7)
if(J.cx(a8.b)&&q.c!=null)q.Jk(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.m(new C.cAn(q))
C.Tk(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.m(new C.cAo(q))
q.ayo()
q.aeM()
if(!q.a.c.w)q.tA()
w=r.pop()
break
case 15:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$mQ,v)},
cf1(d){var w=A.V(x.N,x.z)
w.n(0,"type",d.a)
w.v(0,d.b)
return w},
cf2(d){var w,v,u,t,s,r,q,p=J.q(d,"phoneActions")
if(!x.j.b(p))return B.ic
w=A.a([],x.Z)
for(v=J.aW(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gU(v)
if(u.b(r)){q=A.caJ(A.a1(r,t,s))
if(q!=null)w.push(q)}}return w},
Jk(d){return this.cmC(d)},
cmC(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Jk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J.aW(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gU(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return A.b(C.agf(p,o,new C.cAf(t,p)),$async$Jk)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return A.b(A.Gb(p,null,o,!1,!0,t.a.c.a),$async$Jk)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.I(r).f
p.R(new A.b1(new A.x(m,null,null,null,null,null,null,null,null,null,null,null),B.cb,null,null,null,null,null,null,null,null,null,null,null,B.l6,!1,null,null,null,B.r,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return A.b(A.Gb(p,l.f,o,k,n,j),$async$Jk)
case 11:m=f
if(t.c==null||m==null){w=3
break}w=i?12:13
break
case 12:p=p.b
o=J.a8(p)
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
return A.b(C.aX2(p,A.a([new C.r9("out_"+1000*o,new A.S(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$Jk)
case 14:t.apy()
case 13:p=t.c.I(r).f
p.R(new A.b1(new A.x(m,null,null,null,null,null,null,null,null,null,null,null),B.d_,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null))
w=3
break
case 4:case 1:return A.h(u,v)}})
return A.i($async$Jk,v)},
Rf(d){return this.cvc(d)},
cvc(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Rf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return A.b(C.agf(d,n,new C.cAw(t)),$async$Rf)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return A.b(A.Gb(d,null,n,!1,!0,t.a.c.a),$async$Rf)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.I(x.q).f.R(A.b2(null,null,null,B.cb,null,B.r,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.l6,null,null,null,null,null,null,null,null,null,null))
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
return A.b(A.Gb(d,q.f,r,p,n,o),$async$Rf)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.I(x.q).f.R(A.b2(null,null,null,B.d_,null,B.r,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Rf,v)},
co3(d){$.aT.x1$.push(new C.cAg(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.O(d).ax.a===B.I,j=k?B.db:B.Ar,i=m.d
i===$&&A.c()
w=x.O
w=k?A.a([B.aep,D.baC],w):A.a([B.aJ,B.wO],w)
v=A.m(22)
u=A.a([new A.ac(0,B.G,A.Z(71,B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255),B.cv,16)],x.V)
t=m.a.c.w?m.gcaH():l
s=A.Z(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
r=A.I(B.c_,B.q,1.5)
t=A.aE(l,A.p(l,C.fSI(m.a.f.Q,48),B.f,l,l,new A.o(s,l,r,l,l,l,B.a6),l,48,l,l,l,l,l,48),B.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,B.a8)
r=A.d("NGMY Helper",l,1,B.a2,l,l,l,B.du,l,l,l)
s=A.p(l,l,B.f,l,l,D.aYC,l,8,l,l,l,l,l,8)
if(m.gayL()&&m.d===0)q=m.gOa()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=A.p(l,A.A(A.a([t,B.bf,A.D(A.v(A.a([r,B.bA,A.A(A.a([s,B.bp,A.D(A.d(q,l,1,B.a2,l,l,l,A.l(l,l,A.Z(B.k.V(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,B.cu,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,B.mp,l,l,l,new C.cAC(d),l,l,l,l,l,l)],p),B.m,l,B.e,B.j,0,l,l),B.f,l,l,new A.o(l,l,l,v,u,new A.a7(B.ax,B.aC,B.x,w,l,l),B.n),l,l,l,F.agb,D.bpi,l,l,l)
v=k?D.rZ:B.c
u=A.m(14)
t=A.I(k?B.bF:B.e_,B.q,1)
u=A.p(l,A.A(A.a([m.bD5(),m.cuW(1,B.lL,"Music")],p),B.m,l,B.e,B.j,0,l,l),B.f,l,l,new A.o(v,l,t,u,l,l,B.n),l,l,l,l,B.en,l,l,l)
t=m.e
t===$&&A.c()
if(m.gayL()){v=A.a([],p)
if(m.gOa()){s=A.Z(38,B.d_.l()>>>16&255,B.d_.l()>>>8&255,B.d_.l()&255)
r=A.m(12)
q=A.I(A.Z(115,B.d_.l()>>>16&255,B.d_.l()>>>8&255,B.d_.l()&255),B.q,1)
v.push(new A.C(B.LB,A.p(l,A.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hxz(m.gaTF())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.f2B,B.L,l,l),B.f,l,l,new A.o(s,l,q,r,l,l,B.n),l,l,l,l,B.eh,l,l,1/0),l))}if(m.cy&&!m.gOa()){s=A.Z(31,B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255)
r=A.m(12)
q=A.m(12)
o=A.W(B.oz,k?B.iQ:B.hh,l,l,l,16)
v.push(new A.C(B.LB,A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,new A.C(B.eh,A.A(A.a([o,B.bp,A.d("Back to NGMY Helper AI",l,l,l,l,l,l,A.l(l,l,k?B.iQ:B.hh,l,l,l,l,l,l,l,l,12,l,l,B.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),B.m,l,B.bb,B.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcm5(),l,l,l,l,l,l,l),B.f,s,0,l,l,l,l,l,B.ag),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcwO():l
v.push(A.D(new C.aoO(s,q,new C.cAD(),r,o,l),1))
v=A.v(v,B.m,l,B.e,B.j,0,B.p)}else v=m.bD6(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.h4d(r)
t=A.a([w,B.ac,new A.C(B.hJ,u,l),B.P,A.D(A.h5c(A.a([v,new C.aoR(q,o,n,new C.cAE(m,d),s,l)],p),B.r,t,B.y,new C.cAF(m),l),1)],p)
if(m.d===0&&!m.gayL()){w=A.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a1P:D.a1a
w.push(new A.a6(l,36,A.hG(l,new C.cAG(m),v.length,l,l,B.aO,new C.cAH(),!1),l))}if(m.ax&&m.f.length<=1)w.push(B.P)
v=m.r
u=A.l(l,l,k?B.c:B.bh,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=A.l(l,l,k?B.az:B.dA,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?B.w:B.c
r=A.Z(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=A.m(22)
o=A.m(22)
n=k?B.b2:B.f8
u=A.D(A.aL(l,B.T,!1,l,!0,B.r,l,A.aM(),v,l,l,l,l,l,2,A.br(l,new A.b4(4,q,B.Y),l,B.AM,l,l,l,l,!0,new A.b4(4,o,new A.aA(n,1,B.q,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.y,!0,l,!0,l,!1,l,B.ai,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cAI(m),l,!1,l,l,!1,l,!0,l,B.a9,l,l,l,l,l,l,l,l,l,l,l,u,!0,B.a5,l,B.am,l,B.aNL,l,l),1)
s=m.at
r=s?l:m.gcp3()
w.push(A.A(A.a([u,new A.Ii(v,B.aJ,l),B.bp,A.aF(!1,B.a1,!0,l,A.aK(!1,l,!0,new A.a6(44,44,s?D.e2t:P.alK,l),B.cL,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),B.f,B.aJ,0,l,l,B.cL,l,l,B.ag)],p),B.dF,l,B.e,B.j,0,l,l))
w=A.v(w,B.m,l,B.e,B.Q,0,B.p)
v=k?B.l2:B.c
t.push(A.tK(B.rL,A.p(l,new A.C(B.EX,w,l),B.f,l,l,new A.o(v,l,A.I(k?A.Z(41,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Z(18,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.q,1),B.rL,l,l,B.n),l,l,l,l,l,l,l,l),14,!1))}return new A.Vt(i,new C.cAJ(m),A.c8(l,j,A.bm(!0,A.v(t,B.m,l,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),l,!1,!1,l,l),l)},
bD5(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===0
p=this.c
p.toString
v=A.O(p).ax.a===B.I
if(w)p=A.Z(B.k.V(255*(v?0.25:0.12)),B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255)
else p=B.K
u=A.m(11)
t=w?A.I(A.Z(B.k.V(127.5),B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255),B.q,1):q
s=A.W(B.tH,w?B.aJ:B.cU,q,q,q,17)
if(w)r=v?B.c:B.aB
else r=B.cU
return A.D(A.aE(q,A.dg(q,A.A(A.a([s,B.bp,A.d("Chat",q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.bb,B.j,0,q,q),q,q,B.bc,new A.o(p,q,t,u,q,q,B.n),B.eE,q,q,q,B.v3,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.czY(this),q,q,q,q,q,q,!1,B.a8),1)},
cuW(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===d
p=this.c
p.toString
v=A.O(p).ax.a===B.I
if(w)p=A.Z(B.k.V(255*(v?0.25:0.12)),B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255)
else p=B.K
u=A.m(11)
t=w?A.I(A.Z(B.k.V(127.5),B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255),B.q,1):q
s=A.W(e,w?B.aJ:B.cU,q,q,q,17)
if(w)r=v?B.c:B.aB
else r=B.cU
r=A.a([s,B.bp,A.d(f,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return A.D(A.aE(q,A.dg(q,A.A(r,B.m,q,B.bb,B.j,0,q,q),q,q,B.bc,new A.o(p,q,t,u,q,q,B.n),B.eE,q,q,q,B.v3,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cAv(this,d),q,q,q,q,q,q,!1,B.a8),1)},
bD6(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.bfO:A.Z(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
w=A.m(18)
v=A.I(d?B.dp:B.aL,B.q,1)
u=q===0?1:q
return A.p(s,A.k2(!0,s,t.ok,new C.czZ(t,e,d),u,s,B.bW,s,s,!1,!1),B.f,s,s,new A.o(r,s,v,w,s,s,B.n),s,s,s,B.hJ,s,s,s,s)},
aNj(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a8(d),m=J.z(n.h(d,"role"),"user"),l=m?B.ic:this.cf2(d),k=m?B.lR:B.e,j=x.p,i=A.a([],j),h=!m
if(h)B.d.v(i,A.a([new A.a6(28,28,C.fSI(this.a.f.Q,28),o),B.ab],j))
w=m?B.dF:B.F
j=A.a([],j)
if(h)j.push(D.e2J)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=B.aJ
else u=e?B.WC:B.aQ
t=m?16:4
s=m?4:16
if(m)r=o
else r=A.I(e?B.bF:B.aL,B.q,1)
q=A.a([new A.ac(0,B.G,A.Z(10,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dC,6)],x.V)
if(f)n=A.d("typing\u2026",o,o,o,o,o,o,A.l(o,o,e?B.az:B.dA,o,o,o,o,o,o,o,o,12,B.cC,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=B.c
else p=e?B.ad:B.bm
p=A.d(n,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(A.fOO(m,A.p(o,n,B.f,o,o,new A.o(u,o,r,new A.bp(B.kW,B.kW,new A.aV(t,t),new A.aV(s,s)),q,o,B.n),o,o,o,o,Ad.AL,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(A.hgP(l,e,this.gcvb()))
i.push(new A.dm(1,B.ci,A.v(j,w,o,B.e,B.j,0,B.p),o))
if(m)i.push(B.d8)
return new A.C(B.dc,A.A(i,B.dF,o,k,B.j,0,o,o),o)},
bD4(d,e){return this.aNj(d,e,!1)}}
C.aJ8.prototype={
a_(){this.a1()
$.yh().aM(0,this.gDY())},
q(){$.yh().a3(0,this.gDY())
this.a2()}}
C.aJ9.prototype={
a_(){this.a1()
$.yh().aM(0,this.gDY())},
q(){$.yh().a3(0,this.gDY())
this.a2()}}
C.aJa.prototype={
a_(){this.a1()
$.yh().aM(0,this.gDY())},
q(){$.yh().a3(0,this.gDY())
this.a2()}}
C.aK6.prototype={
a_(){this.a1()
$.yh().aM(0,this.gDY())},
q(){$.yh().a3(0,this.gDY())
this.a2()}}
C.Vi.prototype={
a4(){return"NgmySnapshotResolveOutcome."+this.b}}
C.amq.prototype={
T(){return new C.aB2()}}
C.aB2.prototype={
a_(){var w,v=this
v.a1()
w=v.a
v.d=w.d
v.e=A.bl(w.e,!0,x.o)
v.f=v.a.f},
kO(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
zY(d,e){return this.cAh(d,e)},
cAh(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$zY=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dtm(q,e))
t=3
w=6
return A.b(d.$0(),$async$zY)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.m(new C.dtn(q))
w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$zY,v)},
An(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$An=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=t.d
q===$&&A.c()
w=3
return A.b(A.us(r,q),$async$An)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dtd(t,s))
case 1:return A.h(u,v)}})
return A.i($async$An,v)},
a8O(){var w=0,v=A.j(x.gE),u,t=this,s,r,q,p
var $async$a8O=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.An(),$async$a8O)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&A.c()
q=t.e
q===$&&A.c()
p=t.f
p===$&&A.c()
u=A.N9(s,A.Jo(A.bX4(r,q,s,p).eK(),null,"  "))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a8O,v)},
WL(){var w=0,v=A.j(x.H),u,t=this,s
var $async$WL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oX(s,t.a.c,!1),$async$WL)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zY(new C.dtb(t),"Preparing download\u2026"),$async$WL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WL,v)},
Yc(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Yc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oX(s,t.a.c,!1),$async$Yc)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zY(new C.dtl(t),"Creating QR code\u2026"),$async$Yc)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yc,v)},
Yb(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hQs(r),$async$Yb)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.zY(new C.dta(t,s),"Looking up code\u2026"),$async$Yb)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yb,v)},
ac5(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$ac5=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wP.c5().Lu(B.PW,B.tB,!0),$async$ac5)
case 7:r=e
p=r
q=p==null?null:J.fo(p.a)
if(q==null){u=null
w=1
break}if(q.c!=null){p=q.c
p.toString
p=!B.aG.gam(p)}else p=!1
if(p){p=q.c
p.toString
p=A.jm(p,0,null)
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
case 6:u=A.G7()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ac5,v)},
zC(d,e,f){return this.bFp(d,e,f)},
aOx(d,e){return this.zC(d,!1,e)},
bFo(d){return this.zC(d,!1,!1)},
bFp(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zC=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(t.An(),$async$zC)
case 3:if(t.c==null){w=1
break}if(!C.bX9(d,t.a.c,null)){t.kO(C.bXa(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&A.c()
s=!C.htj(d,s)}if(s){t.kO(y.B)
w=1
break}r=d.as
q=J.ck(r)
s=t.c
s.toString
w=4
return A.b(C.hQF(s,q,t.a.c,d),$async$zC)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=A.lE(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,B.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&A.c()
r=o}w=5
return A.b(A.rd(s,p,r,!1,null,null,d.ax),$async$zC)
case 5:if(t.c==null){w=1
break}t.m(new C.dt9(t,p,r,d))
t.kO("Restored your local Growth Income. Go back to see it updated.")
case 1:return A.h(u,v)}})
return A.i($async$zC,v)},
ac4(){var w=0,v=A.j(x.H),u=this
var $async$ac4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.zY(new C.dtc(u),"Reading file\u2026"),$async$ac4)
case 2:return A.h(null,v)}})
return A.i($async$ac4,v)},
W4(d){return this.bGG(d)},
bGG(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$W4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&A.c()
s=new A.d2("local_qr_dep_"+1000*r,q.a,d,B.fq,B.fb,"Admin deposit ($"+A.dB(d)+")",null,null,B.cl,new A.S(Date.now(),0,!1))
C.c9E(t.d,s)
q=t.e
q===$&&A.c()
r=A.B(q,x.o)
r.push(s)
w=3
return A.b(A.rd(t.a.c,t.d,r,!0,null,null,null),$async$W4)
case 3:w=4
return A.b(t.An(),$async$W4)
case 4:if(t.c==null){w=1
break}t.kO("Deposited $"+A.dB(d)+" to your local wallet.")
case 1:return A.h(u,v)}})
return A.i($async$W4,v)},
b3o(d){var w=null
return A.ca(w,w,!0,w,new C.dtj(),d,w,!0,!0,x.N)},
Vb(d){return this.byP(d)},
byP(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Vb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return A.b(t.W4(d.b),$async$Vb)
case 5:w=1
break
case 4:s=d.c
t.kO(s==null?"Could not apply deposit.":s)
case 1:return A.h(u,v)}})
return A.i($async$Vb,v)},
Ei(d){return this.cjK(d)},
cjK(d){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Ei=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.An(),$async$Ei)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return A.b(C.aZV(d,t.a.c),$async$Ei)
case 4:s=f
if(!s.a){u=!1
w=1
break}if(s.b){t.kO("This deposit code was already used.")
u=!0
w=1
break}if(s.d){t.kO(y.y)
u=!0
w=1
break}if(s.c){t.kO(y.j)
u=!0
w=1
break}r=t.c
if(r==null){u=!0
w=1
break}w=5
return A.b(t.b3o(r),$async$Ei)
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
return A.b(C.c9x(d,o,n.a,r,p),$async$Ei)
case 7:w=6
return A.b(t.Vb(f),$async$Ei)
case 6:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ei,v)},
Ej(d){return this.cjL(d)},
cjL(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ej=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.An(),$async$Ej)
case 3:if(t.c==null){w=1
break}w=4
return A.b(C.c9w(d,t.a.c),$async$Ej)
case 4:s=f
if(!s.a){t.kO(y.m)
w=1
break}if(s.b){t.kO("This deposit code was already used.")
w=1
break}if(s.d){t.kO(y.y)
w=1
break}if(s.c){t.kO(y.j)
w=1
break}r=t.c
if(r==null){w=1
break}w=5
return A.b(t.b3o(r),$async$Ej)
case 5:q=f
if(q==null||B.a.i(q).length===0){w=1
break}r=t.a.c
p=B.a.i(q)
o=t.e
o===$&&A.c()
n=t.d
n===$&&A.c()
w=7
return A.b(C.UT(o,n.a,d,r,p),$async$Ej)
case 7:w=6
return A.b(t.Vb(f),$async$Ej)
case 6:case 1:return A.h(u,v)}})
return A.i($async$Ej,v)},
Ot(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ot=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Cs()){t.kO("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).c6(A.e6(new C.dte(),!0,null,x.N)),$async$Ot)
case 3:r=e
if(r==null||B.a.i(r).length===0){w=1
break}w=B.a.a0(B.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return A.b(t.zY(new C.dtf(t,r),"Applying deposit\u2026"),$async$Ot)
case 6:w=1
break
case 5:w=7
return A.b(t.zY(new C.dtg(t,r),"Loading\u2026"),$async$Ot)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ot,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=n?B.j6:B.pp,l=n?B.c:B.M,k=n?B.aR:B.ak,j=n?B.bF:B.w.j(0.06),i=x.p
j=A.A(A.a([A.aK(!1,o,!0,A.p(B.A,A.W(B.eA,l,o,o,o,16),B.f,o,o,new A.o(j,o,o,o,o,o,B.a6),o,38,o,o,o,o,o,38),B.cL,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dto(d),o,o,o,o,o,o,o)],i),B.m,o,B.e,B.j,0,o,o)
w=A.d("Backup & Restore",o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,B.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=A.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,B.cu,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=A.D(new C.a_E(D.bBa,"Download",E.a24,u?o:p.gbLQ(),o),1)
t=A.A(A.a([t,B.eB,A.D(new C.a_E(B.jj,"Show QR",D.dcC,u?o:p.gc0U(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r
s=A.D(new C.a_E(D.bBb,"Upload",B.a1v,u?o:p.gc0S(),o),1)
s=A.A(A.a([s,B.eB,A.D(new C.a_E(B.iU,"Scan QR",D.cPd,u?o:p.gc0T(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r?o:p.gc0R()
r=n?B.c.j(0.06):B.aU.j(0.08)
q=A.m(16)
q=A.a([A.cB(A.a([j,B.aA,w,B.P,v,B.kt,t,B.aA,s,B.aA,new C.bqa(B.r_,"Enter Code",B.a0P,u,o),B.kt,A.p(o,A.A(A.a([A.W(B.h8,B.aU,o,o,o,18),B.av,A.D(A.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.F,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(r,o,o,q,o,o,B.n),o,o,o,o,B.jd,o,o,o)],i),o,Ac.LQ,o,o,B.ah,!1)],i)
if(p.r){j=n?B.i6:B.c
w=p.w
if(w==null)w="Working\u2026"
q.push(A.ao(0,A.aF(!1,B.a1,!0,o,new A.C(B.AQ,A.A(A.a([I.aMJ,B.bf,A.D(A.d(w,o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.m,o,B.e,B.j,0,o,o),o),B.f,j,8,o,o,o,o,o,B.ag),o,o,0,0,o,o))}return A.c8(o,m,A.bm(!1,new A.an(B.W,o,B.aa,B.r,q,o),!0,!1,B.af,!0,!0),o,!1,!1,o,o)}}
C.a_E.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ac(0,B.G,B.d.gal(s).j(0.35),B.dk,16)],x.V),p=B.c.j(0.22)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(v,A.v(A.a([A.p(v,A.W(w.c,B.c,v,v,v,30),B.f,v,v,new A.o(p,v,v,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.ac,A.d(w.d,v,v,v,v,v,v,B.rB,v,v,v)],x.p),B.m,v,B.bb,B.j,0,B.p),B.f,v,v,new A.o(v,v,v,r,q,new A.a7(B.ax,B.aC,B.x,s,v,v),B.n),v,140,v,v,B.bW,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)}}
C.bqa.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ac(0,B.G,B.d.gal(s).j(0.35),B.dk,16)],x.V),p=B.c.j(0.22)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(v,A.A(A.a([A.p(v,A.W(w.c,B.c,v,v,v,24),B.f,v,v,new A.o(p,v,v,v,v,v,B.a6),v,44,v,v,v,v,v,44),B.eB,A.d(w.d,v,v,v,v,v,v,B.rB,v,v,v)],x.p),B.m,v,B.bb,B.j,0,v,v),B.f,v,v,new A.o(v,v,v,r,q,new A.a7(B.ax,B.aC,B.x,s,v,v),B.n),v,v,v,v,D.brn,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)}}
C.Zi.prototype={
T(){return new C.bhl()}}
C.bhl.prototype={
gav2(){var w=this.e
return w===$?this.e=this.a.d:w},
a_(){var w=this
w.a1()
w.Qa()
w.f=A.dA(B.nM,new C.dts(w))},
q(){var w=this.f
if(w!=null)w.a8(0)
this.a2()},
Qa(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Qa=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return A.b(A.us(q.e,q.f),$async$Qa)
case 3:q=e.a
s=A.bX4(q[3],q[1],t.a.e,q[4])
w=4
return A.b(A.N9(t.a.e,A.Jo(s.eK(),null,"  ")),$async$Qa)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.m(new C.dtp(t,r))
case 1:return A.h(u,v)}})
return A.i($async$Qa,v)},
B(d){var w=this,v=null,u=A.O(d).ax.a===B.I,t=u?B.j6:B.pp,s=u?B.i6:B.c,r=u?B.c:B.bh,q=A.eF(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,B.aPG,v,v,v,1,v,!0),p=A.m(24),o=A.I(B.aU.j(0.35),B.q,1),n=w.d,m=A.pC(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,B.c),l=A.d("Code: "+w.gav2(),v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=A.m(20),j=B.aU.j(0.12),i=A.m(20),h=x.p
i=A.aK(!1,k,!0,A.p(v,A.A(A.a([A.W(B.fK,B.aU,v,v,v,14),B.bp,A.d("Copy code",v,v,v,v,v,v,A.l(v,v,B.aU,v,v,v,v,v,v,v,v,12,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),B.m,v,B.e,B.Q,0,v,v),B.f,v,v,new A.o(j,v,v,i,v,v,B.n),v,v,v,v,B.mg,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dtq(w,d),v,v,v,v,v,v,v)
return A.c8(q,t,new A.C(B.a9,A.v(A.a([A.D(A.p(v,A.v(A.a([B.P,m,B.bw,l,B.P,i,B.aA,A.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,A.l(v,v,u?B.aR:B.ak,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v)],h),B.m,v,B.bb,B.j,0,B.p),B.f,v,v,new A.o(s,v,o,p,v,v,B.n),v,v,v,v,B.a9,v,v,1/0),1),B.aP,new A.a6(1/0,v,A.bJ(B.zm,new C.dtr(d),A.bk(B.aU,v,v,v,v,B.fM,v,v,v,v,v,v)),v)],h),B.m,v,B.e,B.j,0,B.p),v),v,!1,!1,v,v)}}
C.Zj.prototype={
T(){return new C.bhm(A.yO(B.xa,B.nx,B.tX))}}
C.bhm.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c8(A.eF(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fmM,w,w,w,1,w,!0),B.w,A.yN(this.d,B.bQ,new C.dtt(this,d)),w,!1,!1,w,w)}}
C.adw.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.O(a0).ax.a===B.I,k=l?B.i6:B.c,j=l?B.c:B.M,i=l?B.aR:B.ak,h=l?B.b2:B.e_,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=A.m(26)
w=A.I(B.aU.j(0.35),B.q,1)
v=A.a([new A.ac(0,B.G,B.aU.j(0.16),B.k0,36)],x.V)
u=A.p(m,D.bHa,B.f,m,m,new A.o(m,m,m,A.m(18),B.a23,D.bR6,B.n),m,58,m,m,m,m,m,58)
t=A.d("Restore local backup?",m,m,m,m,m,m,A.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,B.u,m,m,!0,m,-0.3,m,m,m,m,m,m),B.L,m,m)
s=A.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,A.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),B.L,m,m)
r=l?B.j6:B.pp
q=A.m(18)
p=A.I(B.aU.j(0.22),B.q,1)
o=x.p
g=A.a([new C.Pj("Account",B.a.i(this.d),i,j,m),B.S,new C.Pj("Balance","$"+A.dB(g.d),i,j,m)],o)
if(d!=null&&B.a.i(d).length!==0)B.d.v(g,A.a([B.S,new C.Pj("Investment",d,i,j,m)],o))
g.push(B.S)
g.push(new C.Pj("Saved on",""+A.bG(f)+"/"+A.bQ(f)+"/"+A.by(f),i,j,m))
g.push(B.S)
g.push(new C.Pj("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=A.p(m,A.v(g,B.F,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bW,m,m,1/0)
r=B.aH.j(l?0.14:0.12)
q=A.m(14)
p=A.I(B.aH.j(0.35),B.q,1)
n=A.W(B.xU,l?B.aM:B.d9,m,m,m,16)
return A.eG(m,B.K,new A.cU(B.UG,A.bZ(new A.C(B.xr,A.v(A.a([u,B.aP,t,B.P,s,B.bw,g,B.aA,A.p(m,A.A(A.a([n,B.ab,A.D(A.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,A.l(m,m,l?B.bK:B.it,m,m,m,m,m,m,m,m,11.5,m,m,B.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),B.F,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.eh,m,m,1/0),B.d5,A.A(A.a([A.D(A.dU(B.nq,new C.eQG(a0),A.de(m,m,m,m,m,m,m,m,m,j,m,m,B.cf,m,new A.b7(A.m(14),B.Y),new A.aA(h,1,B.q,-1),m,m,m,m)),1),B.av,A.D(A.bJ(D.f6c,new C.eQH(a0),A.bk(B.aU,m,m,m,m,m,B.cf,m,new A.b7(A.m(14),B.Y),m,m,m)),2)],o),B.m,m,B.e,B.j,0,m,m)],o),B.m,m,B.e,B.Q,0,B.p),m),new A.o(k,m,w,e,v,m,B.n),B.bd),m),m,m,m,B.ew,B.d0,m,m,m)}}
C.Pj.prototype={
B(d){var w=this,v=null
return A.A(A.a([new A.a6(92,v,A.d(w.c,v,v,v,v,v,v,A.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),A.D(A.d(w.d,v,v,v,v,v,v,A.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,B.H,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.F,v,B.e,B.j,0,v,v)}}
C.Yq.prototype={
T(){return new C.ayk(new A.ar(B.as,$.aw()),A.ki(!0,null,!0,!0,null,null,!1))}}
C.ayk.prototype={
a_(){this.a1()
$.aT.x1$.push(new C.d2s(this))},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.e.q()
this.a2()},
c0W(){var w,v=this.c
v.toString
w=B.a.i(this.d.a.a)
A.a5(v,!1).N(w)
return null},
B(d){var w=this,v=null,u=A.O(d).ax.a===B.I,t=u?B.i6:B.c,s=u?B.c:B.M,r=u?B.aR:B.ak,q=u?B.j6:B.pp,p=u?B.b2:B.e_,o=A.m(24),n=A.I(B.aU.j(0.35),B.q,1),m=A.a([new A.ac(0,B.G,B.aU.j(0.18),B.fL,32)],x.V),l=A.p(v,Ab.ams,B.f,v,v,new A.o(v,v,v,A.m(18),B.a23,D.bTP,B.n),v,56,v,v,v,v,v,56),k=A.d("Enter restore code",v,v,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,B.u,v,v,!0,v,-0.3,v,v,v,v,v,v),B.L,v,v),j=A.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),B.L,v,v),i=A.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,B.H,v,v,!0,v,8,v,v,v,v,v,v),h=A.a([new A.u4(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bpF(new C.d2p())],x.G),g=A.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,B.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return A.eG(v,B.K,new A.cU(A4.JK,A.bZ(new A.C(B.xr,A.v(A.a([l,B.aP,k,B.P,j,B.e1,A.aL(!1,B.T,!1,v,!0,B.r,v,A.aM(),w.d,v,v,v,v,v,2,A.br(v,v,v,B.F2,v,v,"",v,!0,new A.b4(4,A.m(16),new A.aA(p,1,B.q,-1)),v,v,v,v,v,q,!0,v,v,v,v,new A.b4(4,A.m(16),D.aWs),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!1,v,!1,w.e,B.ai,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.d2q(w),v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,i,!0,B.L,v,B.lX,v,v,v,v),B.e1,A.A(A.a([A.D(A.dU(B.nq,new C.d2r(d),A.de(v,v,v,v,v,v,v,v,v,s,v,v,B.cf,v,new A.b7(A.m(14),B.Y),new A.aA(p,1,B.q,-1),v,v,v,v)),1),B.av,A.D(A.bJ(D.f9L,w.gc0V(),A.bk(B.aU,v,v,v,v,v,B.cf,v,new A.b7(A.m(14),B.Y),v,v,v)),2)],f),B.m,v,B.e,B.j,0,v,v)],f),B.m,v,B.e,B.Q,0,B.p),v),new A.o(t,v,n,o,m,v,B.n),B.bd),v),v,v,v,B.LS,B.d0,v,v,v)}}
C.amV.prototype={
T(){return new C.bhs(B.cI)},
hs(d){return this.x.$1(d)},
bp(){return this.y.$0()}}
C.bhs.prototype={
a_(){var w,v=this
v.a1()
w=v.a
w.toString
$.t9=$.t9+1
v.r=B.o.O(B.o.D(C.fv2(w.e,w.d.y2),1,600))
w=v.a
if(!J.ll(w.d.y2,w.e))v.r=C.hW0(v.a.e)
v.w=A.dA(B.h4,new C.dzO(v))},
q(){var w=this.w
if(w!=null)w.a8(0)
this.cdT()
C.aYH()
this.a2()},
cdT(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:B.k.D(r.e/w,0,1)
if(v<=0)return
u=A.nQ(B.k.aa(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=B.o.u(1000*Date.now())
s=r.a
w.hs(new A.d2(t,s.c.a,u,B.fB,B.fb,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,B.cl,new A.S(Date.now(),0,!1)))
r.a.bp()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.up(u,q,"Left early \xb7 +$"+B.k.aa(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
Js(d,e){return this.cpG(d,e)},
b32(d){return this.Js(!1,d)},
cpF(d){return this.Js(d,"")},
cpG(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Js=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}t.x=!0
s=t.w
if(s!=null)s.a8(0)
if(d)r=1
else{s=t.f
r=s<=0?0:B.k.D(t.e/s,0,1)}w=r<=0?3:4
break
case 3:s=t.a
q=s.c.a
p=s.f
s=s.w
o=e.length===0
C.up(s,null,o?"No progress":e,q,p,s,null,!1)
s=t.c
if(s==null){w=1
break}w=5
return A.b(C.bBO(s,C.bBr(),C.fWb(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$Js)
case 5:w=1
break
case 4:n=A.nQ(B.k.aa(t.a.w*1.46*r,2))
m=r>=1
t.m(new C.dzF(t,n,r))
s=B.o.u(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new A.d2(s,p,n,B.fB,B.fb,q,null,null,B.cl,new A.S(Date.now(),0,!1))
A.age(l,!0)
t.a.hs(l)
t.a.bp()
if(m)k="+$"+B.k.aa(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+B.k.aa(n,2)+" ("+B.k.V(r*100)+"% of the prize)"}q=t.a
C.up(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return A.b(C.bBO(s,C.bBr(),C.fWb(),""+t.e+"/"+t.f,k,q,!0),$async$Js)
case 6:w=7
return A.b(C.ag6(t.a.f,k),$async$Js)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Js,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.r
m===$&&A.c()
w=B.o.an(m,60)
v=B.a.aT(B.o.u(B.o.F(m,60)),2,"0")
u=A.aH(n,n,n,n,B.amv,n,n,n,new C.dzI(d),n,n,n,n,n,n)
t=o.a
s=x.p
t=A.D(A.v(A.a([A.d(t.f,n,1,B.a2,n,n,n,B.kX,n,n,n),A.d("Win $"+B.k.aa(t.w*1.46,2)+" \xb7 stake $"+B.k.aa(o.a.w,2),n,n,n,n,n,n,D.eWG,n,n,n)],s),B.F,n,B.e,B.j,0,B.p),1)
r=o.a.c.a
m=m<=10?B.ay:B.c.j(0.1)
q=A.m(99)
q=A.A(A.a([u,t,new C.aop(r,new C.dzJ(o),n),B.bp,A.dg(n,A.A(A.a([D.bLB,B.d8,A.d(""+w+":"+v,n,n,n,n,n,n,B.kv,n,n,n)],s),B.m,n,B.e,B.j,0,n,n),n,n,B.bc,new A.o(m,n,n,q,n,n,B.n),B.a1,n,n,n,B.tu,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
m=o.a
v=m.w
w=v*1.46
r=o.e/o.f
m=A.A(A.a([A.D(A.bv(A.m(99),A.lX(B.bF,n,n,9,n,r,new A.lQ(B.d.gK(m.r),x.dw)),B.aq),1),B.av,A.d(""+o.e+"/"+o.f,n,n,n,n,n,n,D.f4q,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
t=A.m(22)
u=A.a([B.d.gK(o.a.r).j(0.35),F.aeh],x.O)
p=o.x
return C.aO5(n,D.bgI,A.bm(!0,A.v(A.a([new A.C(D.btt,q,n),new C.MN(w*r,w,v,n),new A.C(F.agF,m,n),A.D(new A.C(B.Xy,A.bv(t,A.bZ(A.e0(X.hfo(o.a.e,new X.yV(new C.dzK(o),new C.dzL(o),new C.dzM(o),o.d)),p,n),new A.o(n,n,n,n,n,new A.a7(B.b0,B.b6,B.x,u,n,n),B.n),B.bd),B.aq),n),1)],s),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0))}}
C.a5J.prototype={
B(d){var w=null,v=A.m(26),u=A.I(B.aH.j(0.5),B.q,1),t=A.a([new A.ac(0,B.G,B.aH.j(0.22),B.J,26)],x.V)
return A.eG(w,B.K,A.p(w,A.v(A.a([A.p(w,D.bFp,B.f,w,w,new A.o(B.aH.j(0.16),w,A.I(B.aH,B.q,2),w,w,w,B.a6),w,68,w,w,w,w,w,68),B.aA,D.fiU,B.P,A.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.P,A.d("The count starts again from zero next month.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.aP,new A.a6(1/0,w,A.bJ(D.f6V,new C.c4h(d),A.bk(B.aH,w,w,w,B.w,B.fM,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,u,v,t,D.bRJ,B.n),w,w,w,w,D.brN,w,w,w),w,w,w,B.ahb,B.d0,w,w,w)}}
C.amp.prototype={
T(){return new C.bhj(null,null)},
gY(d){return this.e}}
C.bhj.prototype={
a_(){var w,v=this,u=null
v.a1()
w=v.d=A.bj(u,B.AB,u,1,u,v)
w.d8()
w.dR$.L(0,new C.dsZ(v))
w=A.bj(u,B.mb,u,1,u,v)
w.cH(0)
v.e=w
w=A.bj(u,B.Lh,u,1,u,v)
w.cH(0)
v.f=w
w.d8()
w.dR$.L(0,new C.dt_(v))
if(v.a.c){v.d.cH(0)
v.e.bY(0)
v.f.bY(0)}},
br(d){var w,v,u=this
u.bE(d)
w=u.a.c
if(w){v=u.d
v===$&&A.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){w=u.d
w===$&&A.c()
w.cH(0)
w=u.e
w===$&&A.c()
w.bY(0)
w=u.f
w===$&&A.c()
w.bY(0)}else if(!w&&d.c){w=u.d
w===$&&A.c()
w.bY(0)
w=u.d
w.sp(0,w.a)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cH(0)
w=u.f
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cH(0)}},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
w.bsz()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.PX[B.o.F(a9.r,5)]:b4
w=!b3&&b4==null?D.PX[B.o.F(a9.w,5)]:b0
b1=b4!=null
if(b1){b3=A.t(b4)
v=b4>0?"+"+b3:b3}else if(w!=null){b3=A.t(w)
if(w>0)b3="+"+b3
v=b3}else v="?"
if(b1)u=b4>0?B.d_:B.bI
else if(w!=null){b1=(w>0?B.d_:B.bI).j(0.45)
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
b3=A.a([A.ea(B.A,A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,b0,A.a([new A.ac(6+e,B.G,B.aE.j(0.4+q*0.3),B.J,32+q*22),new A.ac(3,B.G,B.b7.j(0.2+p*0.25),B.J,40+p*16)],d),b0,B.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=A.p(b0,b0,B.f,b0,b0,new A.o(A.aq(B.by,B.aM,B.o.F(a3,3)/2).j(a2),b0,b0,b0,A.a([new A.ac(0,B.G,B.aE.j(0.7),B.J,e)],d),b0,B.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(A.dV(new A.iE(A.vY(a4+a3),b0,B.A,!0,b0,a8,b0),new A.u(a6*a0+a5*b2*0.04,a7*a0)))}B.d.v(f,b3)}b3=b2*0.06
e=x.V
f.push(A.dV(A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,A.m(b2*0.5),A.a([new A.ac(b2*0.02,B.G,B.w.j(0.4+b1),B.J,b2*0.14)],e),b0,B.n),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new A.u(0,n+b3)))
b1=A.dl()
d=b1.a
d.$flags&2&&A.ak(d)
d[11]=0.0025
b1.mC(o)
b1.jA(k,k,k,1)
b1.jQ(l)
b1.fv(m)
d=b2*0.2
a1=A.m(d)
if(a9.a.c)a2=D.cUv
else{a2=A.aq(B.c,B.k9,q*0.45)
a2.toString
a2=A.a([a2,B.bM,B.cp],x.O)}a4=A.aq(B.bJ,B.aE,q*0.65)
a4.toString
a4=A.I(a4,B.q,3)
e=A.a([new A.ac(0,B.G,B.w.j(0.3),D.e_A,16)],e)
if(!a9.a.c)e.push(new A.ac(p*3,B.G,B.aE.j(0.3+q*0.4),B.J,24+p*16))
e.push(new A.ac(0,B.G,B.c.j(0.9),B.Ro,0))
g=A.a([],g)
if(!a9.a.c)g.push(A.bY(0,A.bZ(b0,new A.o(b0,b0,b0,A.m(d),b0,new A.a7(new A.d9(-1+Math.cos(j)*0.8,-1),new A.d9(1,1),B.x,A.a([B.c.j(0),B.c.j(0.28+p*0.25),B.c.j(0)],x.O),b0,b0),B.n),B.bd),0,0,0))
g.push(A.ao(b0,A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,A.m(6),b0,new A.a7(B.a3,B.a7,B.x,A.a([B.c.j(0.95),B.c.j(0)],x.O),b0,b0),B.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=A.a([new A.cP(B.w.j(0.18),B.dC,5)],x.C)
if(!a9.a.c)d.push(new A.cP(B.aE.j(0.4+q*0.35),B.J,12+p*10))
g.push(A.av(A.v9(A.d(v,b0,b0,b0,b0,b0,b0,A.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,B.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),B.bc,B.ja,b3),b0,b0,b0))
f.push(A.dV(A.fs(B.A,A.p(b0,new A.an(B.W,b0,B.aa,B.r,g,b0),B.f,b0,b0,new A.o(b0,b0,a4,a1,e,new A.a7(B.ax,B.aC,B.x,a2,b0,b0),B.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new A.u(0,n)))
return new A.a6(h,h,new A.an(B.A,b0,B.aa,B.f,f,b0),b0)}}
C.aJG.prototype={
aQ(){this.aX()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdH())
w.b2$=null
w.a2()}}
C.MN.prototype={
B(d){var w=null,v=new C.c6g(),u=v.$3("STAKE","$"+B.k.aa(this.e,2),B.c),t=A.m(18),s=A.I(B.bt.j(0.7),B.q,1.4),r=A.a([new A.ac(0,B.G,B.aU.j(0.35),B.J,14)],x.V),q=x.p
return new A.C(B.LB,A.A(A.a([u,A.p(w,A.v(A.a([D.fhB,A.mw(new C.c6f(),w,B.bc,B.n0,w,w,new A.bn(w,this.c,x.e7),x.gR)],q),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(w,w,s,t,r,D.anh,B.n),w,w,w,w,B.LN,w,w,w),v.$3("FULL WIN","$"+B.k.aa(this.d,2),B.bK)],q),B.m,w,B.e,B.j,0,w,w),w)}}
C.aop.prototype={
B(d){var w=null,v=A.m(99),u=A.I(B.js.j(0.7),B.q,1)
return A.p(w,A.A(A.a([D.bDT,B.d8,C.ape(this.d,B.no,this.c)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(w,w,u,v,w,D.anh,B.n),w,w,w,w,B.LY,w,w,w)},
gdX(){return this.c}}
C.MV.prototype={
T(){return new C.bi_(null,null)}}
C.bi_.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.mb,null,1,null,v)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bt9()},
aMe(d,e){var w=this.a.d,v=A.T(w).k("K<1,n>"),u=A.B(new A.K(w,C.i0X(),v),v.k("aj.E"))
w=this.d
w===$&&A.c()
return A.c6(w,new C.dT_(this,u),null)},
B(d){var w=null
if(this.a.e)return A.c8(w,D.adH,A.bm(!0,this.aMe(0,d),!0,!1,B.af,!0,!0),w,!1,!1,w,w)
return this.aMe(0,d)},
avO(d,e,f){var w=null,v=f.j(0.16),u=A.m(10)
return A.A(A.a([A.p(w,A.W(d,f,w,w,w,17),B.f,w,w,new A.o(v,w,w,u,w,w,B.n),w,32,w,w,w,w,w,32),B.av,A.D(A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.aKf.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.acm.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=A.aI(d,B.e7,o).w.r.d,m=this.c,l=J.cE(m),k=l.eJ(m,new C.dT2()).gM(0),j=new A.e7(l.dt(m,new C.dT3(),x.cD),x.bG).cI(0,0,new C.dT4())
o=A.aI(d,B.bT,o).w
w=x.p
v=A.a([B.S,A.p(p,p,B.f,p,p,new A.o(B.b2,p,p,A.m(2),p,p,B.n),p,4,p,p,p,p,p,42),new A.C(B.agT,A.A(A.a([A.p(p,D.bNZ,B.f,p,p,new A.o(p,p,p,A.m(14),A.a([new A.ac(0,B.G,B.fg.j(0.45),B.J,14)],x.V),D.anb,B.n),p,44,p,p,p,p,p,44),B.bf,D.bvE,A.aH(p,p,p,p,B.lg,p,p,p,new C.dT5(d),p,p,p,p,p,p)],w),B.m,p,B.e,B.j,0,p,p),p)],w)
if(l.gcn(m)){u=C.fRb("GAMES",""+l.gM(m),B.ez)
t=C.fRb("WON",""+k,B.js)
s=j>=0
r=s?"+":"-"
q=C.byc(j)
s=s?B.js:B.f3
v.push(new A.C(D.bq0,A.A(A.a([u,B.ab,t,B.ab,C.fRb("NET",r+q,s)],w),B.m,p,B.e,B.j,0,p,p),p))}if(l.gam(m))v.push(new A.C(new A.Q(24,36,24,24+n),A.v(A.a([A.W(D.bzV,B.c.j(0.35),p,p,p,52),B.ac,A.d("No game receipts yet",p,p,p,p,p,p,A.l(p,p,B.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.an,A.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,A.l(p,p,B.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),B.L,p,p)],w),B.m,p,B.e,B.j,0,B.p),p))
else v.push(new A.dm(1,B.ci,A.hG(p,new C.dT6(this),l.gM(m),new A.Q(14,2,14,16+n),p,B.ah,new C.dT7(),!1),p))
return A.p(p,A.v(v,B.m,p,B.e,B.Q,0,B.p),B.f,p,new A.aY(0,1/0,0,o.a.b*0.88),D.aZi,p,p,p,p,p,p,p,p)}}
C.acl.prototype={
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
t=s}if(w)r=B.cj
else if(u)r=B.dy
else{w=v?B.aM:B.bt
r=w}q=h.gber()
w=new C.dT1()
s=A.m(14)
p=A.a([r.j(0.13),D.bfI],x.O)
o=A.I(r.j(0.4),B.q,1)
n=A.W(g?B.mk:B.cy,r,i,i,i,16)
m=A.D(A.d(h.b,i,1,B.a2,i,i,i,B.rA,i,i,i),1)
l=r.j(0.2)
k=A.m(99)
k=A.p(i,A.d(t,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,B.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),B.f,i,i,new A.o(l,i,i,k,i,i,B.n),i,i,i,i,D.bto,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.byc(q)}else{l=g?"+":"-"
l+=C.byc(h.d)}j=x.p
l=A.A(A.a([n,B.bp,m,k,B.bp,A.d(l,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.m,i,B.e,B.j,0,i,i)
k=C.dT0("STAKE",w.$1(h.w),B.c)
w=A.A(A.a([k,B.d8,C.dT0("PAID",C.byc(g?h.d:0),r),B.d8,C.dT0("BEFORE",w.$1(h.x),B.ez),B.d8,C.dT0("AFTER",w.$1(h.y),B.dy)],j),B.m,i,B.e,B.j,0,i,i)
n=C.hXy(h.f)
h=B.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return A.p(i,A.v(A.a([l,B.an,w,B.at,A.d(n+h,i,1,B.a2,i,i,i,A.l(i,i,B.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.aj,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(i,i,o,s,i,new A.a7(B.ax,B.aC,B.x,p,i,i),B.n),i,i,i,i,B.l8,i,i,i)}}
C.ayY.prototype={
T(){return new C.bdF(B.cI,null,null)}}
C.bdF.prototype={
a_(){var w,v,u,t=this
t.a1()
w=A.bj(null,B.mc,null,1,null,t)
w.cH(0)
t.d=w
v=J.e2(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.acL(40+w.aj()*260,-20+w.aj()*40,1.5+w.aj()*3,w.aj()*3.141592653589793,0.7+w.aj()*0.3,12+w.aj()*16,[Z.a37,B.rc,B.cR,B.c][w.aA(4)],[B.i_,B.la,B.dW,B.Fq][w.aA(4)])
t.f=v},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bs3()},
B(d){var w=null,v=this.d
v===$&&A.c()
return A.av(A.aF(!1,B.a1,!0,w,A.c6(v,new C.d9t(this,d),w),B.f,B.K,0,w,w,w,w,w,B.ag),w,w,w)}}
C.acL.prototype={
gY(d){return this.f}}
C.aJb.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.aZv.prototype={
B(d){return new A.ue(new C.c8x(this),null,new A.h3(A.a([$.yh(),$.a1T()],x.U)),null)},
gdX(){return this.c}}
C.Mo.prototype={
c7U(){if(this.c!=null)this.m(new C.bYo())}}
C.I3.prototype={}
C.anS.prototype={
T(){return new C.aBO(B.cI,new A.ar(B.as,$.aw()))},
cBT(){return this.d.$0()},
cNj(){return this.f.$0()},
cN7(d,e){return this.r.$2(d,e)},
cNV(d,e,f){return this.w.$3$bonus(d,e,f)},
gdX(){return this.c}}
C.aBO.prototype={
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.a2()},
arC(){var w=A.d4(B.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
Ap(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Ap=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.arC()
if(s<2){t.avP("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cBT()<s){t.avP("Insufficient balance.")
w=1
break}if(!t.a.cN7(s,"Dice Roll bet")){t.avP("Could not place bet.")
w=1
break}t.a.toString
t.m(new C.dM2(t))}w=3
return A.b(C.c5r(t.a.e),$async$Ap)
case 3:r=t.a
q=C.hZD(r.e,r.c,t.d)
t.a.cNj()
A.aY4(t.a.e)
t.m(new C.dM3(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return A.b(A.bN(new A.b9(1000*(40+p*6)),null,r),$async$Ap)
case 7:if(t.c==null){w=1
break}new C.dM4(t).$0()
t.c.e8()
case 5:++p
w=4
break
case 6:w=8
return A.b(A.bN(B.jw,null,r),$async$Ap)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.fV_(q)
t.m(new C.dM5(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cNV(m,"Dice Roll "+n,o)
t.m(new C.dM6(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+B.k.aa(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(m,2)+" added to your balance"
w=12
return A.b(C.bBO(r,C.bBr(),new C.dM7(t),n,k,"YOU WIN!",!0),$async$Ap)
case 12:w=13
return A.b(C.ag6("Dice Roll",l?"+$"+B.k.aa(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(m,2)+" added to your balance"),$async$Ap)
case 13:w=10
break
case 11:w=14
return A.b(C.bBO(r,C.bBr(),new C.dM8(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$Ap)
case 14:C.up(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return A.h(u,v)}})
return A.i($async$Ap,v)},
avP(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.arC(),d=x.w,a0=A.aI(a2,B.e7,d).w,a1=Math.min(A.aI(a2,B.bT,d).w.a.a*0.44,200)
d=A.hc(R.alE,D.foD,new C.dMb(a2),f)
w=A.m(20)
v=g.a
u=v.c
t=x.p
w=A.A(A.a([d,B.b4,A.p(f,A.A(A.a([B.alB,B.bp,C.ape(v.d,B.jn,u)],t),B.m,f,B.e,B.Q,0,f,f),B.f,f,f,new A.o(B.cR,f,f,w,f,f,B.n),f,f,f,f,B.lH,f,f,f)],t),B.m,f,B.e,B.j,0,f,f)
u=g.z
v=A.Z(140,D.WG.l()>>>16&255,D.WG.l()>>>8&255,D.WG.l()&255)
d=A.m(18)
s=A.I(A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.q,1)
r=g.x
d=A.D(A.p(f,A.av(new C.amp(r,r?g.w:g.r,a1,f),f,f,f),B.f,f,f,new A.o(v,f,s,d,f,f,B.n),f,f,f,f,f,f,f,1/0),1)
v=A.d("Roll lands on one of:",f,f,f,f,f,f,A.l(f,f,B.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,B.a4,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=A.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.PX[q]
o=C.fV_(p)
n=p>0?B.bo:B.ay
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new A.aV(10,10)
i=m?B.c:n.j(0.7)
h=new A.aA(i,m?2.5:1.2,B.q,-1)
n=m?A.a([new A.ac(1,B.G,n.j(0.65),B.J,14)],r):B.PH
m=m?18:15
s.push(new A.bD(1,B.bi,new A.C(B.je,A.p(B.A,new A.x(o,f,new A.G(!0,B.c,f,f,f,f,m,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f),B.f,f,f,new A.o(k,f,new A.bP(h,h,h,h),new A.bp(j,j,j,j),n,f,B.n),f,l,f,f,f,f,f,f),f),f))}d=A.a([d,B.ac,v,B.an,A.A(s,B.m,f,B.e,B.j,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.fV_(v)
s=g.r
s.toString
d.push(new A.C(B.kh,A.d("Landed on "+v,f,f,f,f,f,f,A.l(f,f,s>0?B.b8:B.cj,f,f,f,f,f,f,f,f,20,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(B.S)
d.push(new A.bH(B.a3,f,f,A.d("Bet Amount",f,f,f,f,f,f,A.l(f,f,A.Z(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,B.H,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(B.an)
v=x.bL
v=A.B(new A.K(A.a([2,5,10,25],x.n),new C.dMc(g),v),v.k("aj.E"))
s=g.y
r=A.Z(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v.push(A.D(new A.C(B.Yb,A.aL(f,B.T,!1,f,!0,B.r,f,A.aM(),g.e,f,f,f,f,f,2,A.br(f,new A.b4(4,A.m(10),B.Y),f,B.jx,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,B.lp,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,!s,!1,f,B.ai,f,f,f,f,f,B.dM,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,B.a9,f,f,f,f,f,f,f,f,f,f,f,B.ho,!0,B.L,f,B.am,f,f,f,f),f),1))
d.push(A.A(v,B.m,f,B.e,B.j,0,f,f))
d.push(B.P)
d.push(new A.bH(B.a7,f,f,A.d("Perfect Score Profit: +$"+B.k.aa(g.arC()*0.46,2),f,f,f,f,f,f,D.eYG,f,f,f),f))
d.push(B.S)
d=A.D(new A.C(B.hJ,A.v(d,B.aj,f,B.e,B.j,0,B.p),f),1)
v=g.x?f:g.gcmm()
s=A.fl(f,f,B.aE,f,f,f,f,f,f,B.c,f,f,f,f,new A.b7(A.m(14),B.Y),f,f,f,f,f)
return C.aO5(f,D.WN,A.bm(!0,A.v(A.a([new A.C(D.btP,w,f),new C.MN(u,e*1.46,e,f),A.D(A.v(A.a([d,new A.C(new A.Q(14,4,14,8+a0.r.d),new A.a6(1/0,52,A.ia(A.d("\ud83c\udfb2 ROLL ($"+B.k.aa(e,2)+")",f,f,f,f,f,f,B.kY,f,f,f),v,s),f),f)],t),B.m,f,B.e,B.j,0,B.p),1)],t),B.m,f,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0))}}
C.aov.prototype={
T(){return new C.aC4(B.kp,new A.ar(B.as,$.aw()))},
cN_(d){return this.e.$1(d)}}
C.aC4.prototype={
gaqp(){var w,v=this.r
if(v===$){w=B.o.u(1e4+B.cI.aA(89999))
this.r!==$&&A.bM()
this.r=w
v=w}return v},
gPD(){var w=this.d,v=this.a
return w===B.kp?B.a.i(v.f.a):B.a.i(v.f.b)},
ga83(){var w=this.gPD(),v=A.af("^\\$+",!0,!1,!1,!1),u=B.a.i(A.aJ(w,v,""))
return u.length===0?"":"$"+u},
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.a2()},
Ip(d,e){return this.bFQ(d,e)},
bFQ(d,e){var w=0,v=A.j(x.H),u=this,t
var $async$Ip=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.fI(new A.fB(d)),$async$Ip)
case 2:A.eR()
t=u.c
if(t!=null)t.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$Ip,v)},
Py(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Py=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gPD().length===0){r.c.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}A.je()
o=B.k.aa(r.a.d,2)
q=r.d===B.kp?A.cv("https://cash.app/"+r.ga83()+"/"+o,0,null):A.cv("bitcoin:"+r.gPD(),0,null)
t=4
w=7
return A.b(A.iP(q,B.fk,null),$async$Py)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===B.kp?r.ga83():r.gPD()
w=10
return A.b(r.Ip(n,r.d===B.kp?"Cash App tag":"Bitcoin address"),$async$Py)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===B.kp?r.ga83():r.gPD()
w=11
return A.b(r.Ip(n,r.d===B.kp?"Cash App tag":"Bitcoin address"),$async$Py)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Py,v)},
a_v(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_v=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hW().bf9(B.eG),$async$a_v)
case 3:r=e
if(r==null){w=1
break}w=4
return A.b(r.ff(),$async$a_v)
case 4:s=e
t.m(new C.dTp(t,B.a.cb(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return A.h(u,v)}})
return A.i($async$a_v,v)},
c4k(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===B.kp?C.hgF(s.a):B.a.i(s.a)
if(r.length===0){t=v.d===B.kp?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.I(x.q).f.R(A.b2(u,u,u,u,u,B.r,u,A.d(t,u,u,u,u,u,u,u,u,u,u),u,B.U,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.I(x.q).f.R(A.b2(u,u,u,u,u,B.r,u,A.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,B.U,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new A.S(Date.now(),0,!1).u(0)
w=v.a
t.cN_(new A.d2(s,w.c.a,w.d,B.fq,v.d,r,v.f,v.gaqp(),B.ds,new A.S(Date.now(),0,!1)))
w=v.c
w.toString
A.iL(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.eF(o,o,o,!0,!0,B.A5,o,1,!0,o,0,!1,o,!1,B.c,o,A.aH(o,o,o,o,B.G9,o,o,o,new C.dTq(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.f8t,o,o,o,1,o,!0),m=A.m(26),l=A.I(D.eH.j(0.25),B.q,1),k=x.V,j=A.a([new A.ac(0,B.G,B.aZ.j(0.25),B.eT,24)],k),i=x.p
j=A.p(o,A.v(A.a([A.d("YOU'RE ADDING",o,o,o,o,o,o,A.l(o,o,B.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,B.H,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),B.an,A.f2(B.A,A.d("$"+A.dB(p.a.d),o,o,o,o,o,o,D.eT1,o,o,o),B.f,B.dt),B.an,A.d("to your Growth Income wallet",o,o,o,o,o,o,A.l(o,o,D.eH.j(0.85),o,o,o,o,o,o,o,o,12,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,l,m,j,D.bUC,B.n),o,o,o,o,D.brr,o,o,o)
m=p.c_I()
l=p.azq(1,"Send the money to NGMY Pay",p.c4i())
w=p.azq(2,"Put this code in the payment note",p.bEq())
v=p.d===B.kp
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=A.l(o,o,B.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.azq(3,u,A.aL(o,B.T,!1,o,!0,B.r,o,A.aM(),p.e,o,o,o,o,o,2,A.br(o,o,o,o,o,o,o,o,!0,new A.b4(4,A.m(18),new A.aA(B.c.j(0.08),1,B.q,-1)),o,o,o,o,o,B.td,!0,o,o,o,o,new A.b4(4,A.m(18),D.aWn),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.eUs,t,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,B.rB,!0,B.a5,o,B.am,o,o,o,o))
r=p.f!=null
v=r?8:22
u=A.m(20)
s=r?D.eH:B.c
s=A.I(s.j(r?0.5:0.12),B.q,1.4)
q=r?A.v(A.a([A.bv(A.m(14),new A.cU(D.aXO,new A.E8(p.f,o),o),B.aq),B.P,D.eF5,B.at],i),B.m,o,B.e,B.j,0,B.p):A.v(A.a([A.p(o,D.bN9,B.f,o,o,new A.o(D.eH.j(0.12),o,o,o,o,o,B.a6),o,54,o,o,o,o,o,54),B.S,D.fdx,B.cX,A.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p)
v=p.b4s(4,"Screenshot of your payment",A.aE(o,A.p(o,q,B.f,o,o,new A.o(B.td,o,s,u,o,o,B.n),o,o,o,o,new A.Q(v,v,v,v),o,o,o),B.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcfI(),o,o,o,o,o,o,!1,B.a8),!0)
u=A.d(p.a.r,o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,1.4,!0,o,o,o,o,o,o,o,o),B.L,o,o)
s=A.m(18)
k=A.a([new A.ac(0,B.G,B.aZ.j(0.45),B.dk,18)],k)
return A.c8(n,B.A5,A.av(new A.cU(B.a9L,A.cB(A.a([j,B.bw,m,B.bw,l,w,t,v,B.an,u,B.aP,new A.a6(o,56,A.bZ(A.lq(D.bLQ,D.fnR,p.gc4j(),A.fl(o,o,B.K,o,o,o,o,o,o,B.c,o,o,o,B.K,new A.b7(A.m(18),B.Y),o,o,o,o,o)),new A.o(o,o,o,s,k,D.bTg,B.n),B.bd),o)],i),o,D.bqW,o,o,B.ah,!1),o),o,o,o),o,!1,!1,o,o)},
c_I(){var w=null,v=new C.dTl(this),u=A.m(18),t=A.I(B.c.j(0.06),B.q,1)
return A.p(w,A.A(A.a([v.$3(B.kp,B.hY,"Cash App"),B.eb,v.$3(B.a4y,D.alk,"Bitcoin")],x.p),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(B.td,w,t,u,w,w,B.n),w,w,w,w,B.lJ,w,w,w)},
b4s(d,e,f,g){var w,v=null,u=x.p,t=A.a([A.p(B.A,A.d(""+d,v,v,v,v,v,v,D.eZq,v,v,v),B.f,v,v,D.aYx,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(A.D(A.p(v,v,B.f,D.eH.j(0.18),v,v,v,v,v,B.v6,v,v,v,2),1))
t=A.v(t,B.m,v,B.e,B.j,0,B.p)
w=g?12:20
return new A.Dz(A.A(A.a([new A.a6(34,v,t,v),B.av,A.D(new A.C(new A.Q(0,0,0,w),A.v(A.a([new A.C(B.Xw,A.d(e,v,v,v,v,v,v,A5.SS,v,v,v),v),f],u),B.aj,v,B.e,B.j,0,B.p),v),1)],u),B.aj,v,B.e,B.j,0,v,v),v)},
azq(d,e,f){return this.b4s(d,e,f,!1)},
c4i(){var w,v,u,t,s=this,r=null,q=s.d===B.kp?s.ga83():s.gPD(),p=A.m(20),o=A.m(20),n=s.d===B.kp,m=n?D.bSb:D.bTZ,l=A.a([new A.ac(0,B.G,(n?D.adW:D.VG).j(0.35),B.cv,16)],x.V),k=A.m(12)
n=s.d===B.kp
w=n?B.hY:D.alk
k=A.p(r,A.W(w,n?D.adW:D.VG,r,r,r,30),B.f,r,r,new A.o(B.c,r,r,k,r,r,B.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=A.d(n,r,r,r,r,r,r,A.l(r,r,B.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===B.kp
t=u?22:13
v=A.d(v,r,1,B.a2,r,r,r,A.l(r,r,B.c,r,r,r,r,r,r,r,r,t,r,r,B.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=A.D(A.v(A.a([n,B.bA,v,B.at,A.A(A.a([D.bIH,B.d8,A.d(s.d===B.kp?"Tap to pay $"+A.dB(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,B.qc,r,r,r)],u),B.m,r,B.e,B.j,0,r,r)],u),B.F,r,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,r,A.aK(!1,p,!0,A.ez(A.A(A.a([k,B.bf,v,A.aH(r,r,r,r,D.bHM,r,r,r,w?r:new C.dTo(s,q),r,r,r,r,"Copy",r)],u),B.m,r,B.e,B.j,0,r,r),r,new A.o(r,r,r,o,l,m,B.n),r,B.agz,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gcb0(),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
bEq(){var w,v,u,t,s,r,q,p,o=null,n=A.m(20),m=A.I(B.b5.j(0.35),B.q,1),l=x.p,k=A.a([],l)
for(w=this.gaqp().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new A.aV(12,12)
q=A.a([B.b5.j(0.28),B.b5.j(0.08)],u)
p=new A.aA(B.ez.j(0.4),1,B.q,-1)
k.push(A.p(B.A,new A.x(s,o,B.D6,o,o,o,o,o,o,o,o,o),B.f,o,o,new A.o(o,o,new A.bP(p,p,p,p),new A.bp(r,r,r,r),o,new A.a7(B.b0,B.b6,B.x,q,o,o),B.n),o,52,o,B.je,o,o,o,42))}return A.p(o,A.v(A.a([A.A(k,B.m,o,B.bb,B.j,0,o,o),B.ac,A.A(A.a([A.D(A.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,A.l(o,o,B.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.ab,A.hc(B.a_V,D.fpJ,new C.dTk(this),A.fv(o,o,o,o,o,o,o,o,o,o,o,B.ez,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),B.m,o,B.e,B.j,0,o,o)],l),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(B.td,o,m,n,o,o,B.n),o,o,o,o,B.bC,o,o,o)}}
C.r8.prototype={
ae(){var w=this
return A.F(["id",w.a,"title",w.b,"start",w.c.ac(),"end",w.d.ac(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.r9.prototype={
ae(){var w=this
return A.F(["id",w.a,"when",w.b.ac(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gUK(){var w=this,v=A.a([],x.s),u=w.d
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
u=w.c
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
v.push(C.h1G(w.b))
u=w.e
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
return B.d.aI(v," \xb7 ")},
gkH(d){return this.c}}
C.lw.prototype={
ae(){var w,v=this,u=A.V(x.N,x.z)
u.n(0,"type",v.a)
w=v.b
if(w.length!==0)u.n(0,"content",w)
w=v.c
if(w!=null&&w.length!==0)u.n(0,"url",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"label",w)
return u}}
C.ig.prototype={
ae(){var w,v=this,u=A.V(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"question",v.b)
w=J.b6(v.c,new C.c7w(),x.P)
w=A.B(w,w.$ti.k("aj.E"))
u.n(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"thumbnailPath",w)
u.n(0,"printable",v.e)
u.n(0,"sortOrder",v.f)
return u}}
C.i1.prototype={
ajJ(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.i1(v,u,t,s,r,h==null?w.f:h)},
b9Q(d){var w=null
return this.ajJ(w,w,w,w,d,w)},
cFx(d,e,f){return this.ajJ(d,e,null,null,null,f)},
b9P(d){var w=null
return this.ajJ(w,w,w,d,w,w)},
cFc(d,e){var w=null
return this.ajJ(w,w,d,w,e,w)},
ae(){var w=this,v=C.hLi(w.c),u=w.e,t=A.T(u).k("K<1,a3<n,@>>")
u=A.B(new A.K(u,new C.c7u(),t),t.k("aj.E"))
return A.F(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.b7i.prototype={}
C.Uw.prototype={
T(){return new C.aCg(new A.ar(B.as,$.aw()),A.mt(0,null,null),A.a([],x.m))},
Tk(d){return this.d.$1(d)}}
C.aCg.prototype={
a_(){var w,v=this
v.a1()
w=J.b6(v.a.c,new C.dX4(),x.i)
w=A.B(w,w.$ti.k("aj.E"))
B.d.b_(w,new C.dX5())
v.d=w
v.Iy()},
q(){var w=this.w
w.S$=$.aw()
w.P$=0
this.x.q()
this.a2()},
ad_(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ad_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.Iy()
u.m(new C.dWZ(u))
t=u.a
t.toString
s=u.d
s===$&&A.c()
w=2
return A.b(t.Tk(s),$async$ad_)
case 2:r=e
if(u.c!=null){u.m(new C.dX_(u))
t=u.c.I(x.q).f
s=A.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.R(A.b2(null,null,null,r?B.d_:B.ay,null,B.r,null,s,null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$ad_,v)},
a7g(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a7g=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&A.c()
s=new C.i1(q,"New Category",B.FJ,4284773515,D.avO,p.length)
t.m(new C.dWI(t,s))
t.Iy()
p=t.c
if(p==null){w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.dWJ(s),p,null,!0,!0,x.i),$async$a7g)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dWK(t,q,r))
case 1:return A.h(u,v)}})
return A.i($async$a7g,v)},
a0t(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a0t=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=B.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.m(new C.dWW(t,p))
q.bN(0,B.c3)
q=t.a.e
s=t.d
s===$&&A.c()
w=3
return A.b(C.c7r(p,q,s),$async$a0t)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dWX(t,r))
$.aT.x1$.push(new C.dWY(t))
case 1:return A.h(u,v)}})
return A.i($async$a0t,v)},
a9f(d){return this.bKq(d)},
bKq(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a9f=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&A.c()
t=r[d]
r=u.c
r.toString
w=2
return A.b(A.ca(null,null,!0,null,new C.dWQ(t),r,null,!0,!0,x.i),$async$a9f)
case 2:s=f
if(s!=null)u.m(new C.dWR(u,d,s))
return A.h(null,v)}})
return A.i($async$a9f,v)},
bIe(d){this.m(new C.dWP(this,d))
this.Iy()},
Iy(){var w,v,u=this.d
u===$&&A.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].b9Q(v)},
c8p(d,e){var w={}
w.a=e
this.m(new C.dWV(w,this,d))},
XT(d){return this.bZD(d)},
bZD(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$XT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=A.e6(new C.dWU(u,d),!1,null,x.H)
w=2
return A.b(A.a5(s,!1).c6(t),$async$XT)
case 2:return A.h(null,v)}})
return A.i($async$XT,v)},
bAG(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?A.a([B.fm,B.bm],l):A.a([B.pd,B.et],l)
w=A.m(16)
v=A.I(m?B.d6.j(0.35):B.dy,B.q,1)
u=A.W(B.dW,m?B.dy:B.dS,n,n,n,n)
t=A.D(A.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,A.l(n,n,m?B.aQ:B.M,n,n,n,n,n,n,n,n,n,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.Zn:Aa.Mk
r=x.p
s=A.a([A.aK(!1,n,!0,A.A(A.a([u,B.ab,t,A.W(s,m?B.bJ:B.ak,n,n,n,n)],r),B.m,n,B.e,B.j,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dWM(o),n,n,n,n,n,n,n)],r)
if(o.r){u=A.a([B.S],r)
t=o.y
if(t.length!==0){q=(m?D.rZ:B.c).j(0.65)
p=A.m(12)
u.push(A.p(n,A.k2(!0,n,o.x,new C.dWN(o,d),t.length,n,n,n,n,!1,!1),B.f,n,B.a9G,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.ck,n,n,n))}u.push(B.P)
t=o.w
q=A.l(n,n,m?B.aQ:B.M,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=A.l(n,n,m?B.bJ:B.ak,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?B.bm:B.aQ
q=A.D(A.aL(n,B.T,!1,n,!0,B.r,n,A.aM(),t,n,n,n,n,n,2,A.br(n,new A.b4(4,A.m(14),B.Y),n,B.eP,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.dWO(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,q,!0,B.a5,n,B.am,n,n,n,n),1)
m=o.f?n:o.gcmB()
p=A.bk(B.bj,n,n,n,n,n,B.jd,n,n,n,n,n)
u.push(A.A(A.a([q,new A.Ii(t,B.bj,n),B.d8,A.bJ(o.f?B.q7:D.alu,m,p)],r),B.dF,n,B.e,B.j,0,n,n))
B.d.v(s,u)}return A.dg(n,A.v(s,B.aj,n,B.e,B.j,0,B.p),n,n,B.bc,new A.o(n,n,v,w,n,new A.a7(B.a3,B.a7,B.x,l,n,n),B.n),B.iv,n,n,B.F_,B.bC,n,n,n)},
B(d){var w,v=this,u=null,t=A.O(d).ax.a===B.I,s=new C.b7i(t),r=t?B.db:B.bM,q=t?B.db:u,p=t?B.aQ:B.M,o=A.d("Help Topics Admin",u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.M,u,u,u,u,u,u,u,u,u,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gc4o()
if(n)n=B.Sm
else n=A.W(B.xM,t?B.aQ:B.M,u,u,u,u)
w=x.p
o=A.eF(A.a([A.hc(n,A.d("Save",u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.M,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=S.aT9(B.aJ,u,O.UR,B.nW,D.fmd,v.gbx1())
q=v.bAG(s)
n=A.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,A.l(u,u,t?B.bJ:B.ak,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&A.c()
return A.c8(o,r,A.v(A.a([q,new A.C(B.F_,n,u),A.D(H.h63(!1,new C.dX3(v,s),m.length,v.gc8o(),D.bpN,u,!1),1)],w),B.aj,u,B.e,B.j,0,B.p),u,!1,!1,p,u)}}
C.OM.prototype={
T(){return new C.b98()}}
C.b98.prototype={
a_(){var w,v=this
v.a1()
w=v.a.c
v.d=new A.ar(new A.bb(w.b,B.b3,B.aN),$.aw())
v.e=w.c
v.f=w.d},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.O(d).ax.a===B.I,q=r?D.rZ:B.c,p=A.d("Edit category",s,s,s,s,s,s,A.l(s,s,r?B.c:B.bh,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&A.c()
o=A.aL(s,B.T,!1,s,!0,B.r,s,A.aM(),o,s,s,s,s,s,2,D.bOT,B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,A.l(s,s,r?B.c:B.bh,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,B.a5,s,B.am,s,s,s,s)
w=x.aS
w=A.B(new A.K(D.bUZ,new C.cJa(t),w),w.k("aj.E"))
w=A.c_(B.bB,w,B.bs,8,8)
v=x.gN
v=A.B(new A.K(D.cRL,new C.cJb(t),v),v.k("aj.E"))
u=x.p
v=A.cd(A.v(A.a([o,B.ac,w,B.ac,A.c_(B.bB,v,B.bs,0,8)],u),B.m,s,B.e,B.Q,0,B.p),B.r,s,B.y,s,s,s,s,B.ah)
return A.ei(A.a([A.bK(!1,B.de,s,s,!0,s,s,new C.cJc(d),s,s),A.bJ(B.p3,new C.cJd(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.a_5.prototype={
T(){return new C.aEe()},
ot(d){return this.d.$1(d)}}
C.aEe.prototype={
a_(){this.a1()
this.d=A.bl(this.a.c.e,!0,x.u)},
avR(){var w=this.a,v=w.c,u=this.d
u===$&&A.c()
return w.ot(v.b9P(u))},
a7i(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a7i=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&A.c()
w=2
return A.b(u.aZl(new C.ig("q_"+1000*s,"",D.cQn,null,!1,r.length)),$async$a7i)
case 2:t=e
if(t!=null){u.m(new C.eLL(u,t))
u.avR()}return A.h(null,v)}})
return A.i($async$a7i,v)},
aZl(d){var w,v=this.c
v.toString
w=A.e6(new C.eLM(d),!1,null,x.u)
return A.a5(v,!1).c6(w)},
B(d){var w=this,v=null,u=A.O(d).ax.a===B.I,t=u?B.db:B.bM,s=u?B.db:v,r=u?B.aQ:B.M,q=w.a.c
s=A.eF(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,A.d(q.b+" \u2014 Questions",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.M,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=S.aT9(B.aJ,v,O.UR,B.nW,D.frN,w.gbxt())
q=w.d
q===$&&A.c()
q=q.length
if(q===0){q=A.av(A.d("No questions yet. Tap + Question.",v,v,v,v,v,v,A.l(v,v,u?B.bJ:B.ak,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=A.hG(v,new C.eLR(w,new C.b7i(u)),q,D.bpW,v,B.ah,new C.eLS(),!1)
return A.c8(s,t,u,v,!1,!1,r,v)}}
C.a_4.prototype={
T(){return new C.aEd()}}
C.aEd.prototype={
a_(){var w,v=this
v.a1()
w=v.a.c
v.d=new A.ar(new A.bb(w.b,B.b3,B.aN),$.aw())
w=A.bl(w.c,!0,x.bP)
v.e=w
if(B.d.gam(w))J.cf(v.e,D.a3Q)
w=v.a.c
v.f=w.d
v.r=w.e},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
acZ(){var w=0,v=A.j(x.H),u=this,t
var $async$acZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A0.G8(78,1920),$async$acZ)
case 2:t=e
if(t!=null)u.m(new C.eLH(u,t))
return A.h(null,v)}})
return A.i($async$acZ,v)},
ae2(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ae2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=A.e6(new C.eLF(u),!1,null,x.dZ)
w=2
return A.b(A.a5(r,!1).c6(t),$async$ae2)
case 2:s=e
if(s!=null)u.m(new C.eLG(u,s))
return A.h(null,v)}})
return A.i($async$ae2,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.O(a1).ax.a===B.I,g=h?B.db:B.bM,f=h?B.db:i,e=h?B.aQ:B.M,d=A.d("Edit Question",i,i,i,i,i,i,A.l(i,i,h?B.aQ:B.M,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=A.eF(A.a([A.dp(T.a03,B.p3,new C.eLJ(j,a1),A.bk(B.aJ,i,i,i,B.c,i,i,i,i,i,i,i)),B.av],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=A.d("Question thumbnail",i,i,i,i,i,i,A.l(i,i,h?B.aQ:B.M,i,i,i,i,i,i,i,i,13,i,i,B.H,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=A.m(14)
w=j.f
v=h?B.bJ:B.ak
w=A.aE(i,A.bv(e,K.aO8(A.m(14),B.bQ,140,B.B7,v,w,1/0),B.aq),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gc4n(),i,i,i,i,i,i,!1,B.a8)
e=A.d("Question users will tap",i,i,i,i,i,i,A.l(i,i,h?B.aQ:B.M,i,i,i,i,i,i,i,i,13,i,i,B.H,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?B.bm:B.aQ
u=A.m(16)
t=A.I(h?B.aK:B.aL,B.q,1)
s=j.d
s===$&&A.c()
r=A.l(i,i,h?B.aQ:B.M,i,i,i,i,i,i,i,i,15,i,i,B.a4,i,i,!0,i,i,i,i,i,i,i,i)
v=A.p(i,A.A(A.a([A.D(A.aL(i,B.T,!1,i,!0,B.r,i,A.aM(),s,i,i,i,i,i,2,A.br(i,B.ey,i,B.bk,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.l(i,i,h?B.bJ:B.ak,i,i,i,i,i,i,i,i,i,i,i,B.cu,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),B.y,!0,i,!0,i,!1,i,B.ai,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,B.a9,i,i,i,i,i,i,i,i,i,i,i,r,!0,B.a5,i,B.am,i,i,i,i),1),new A.Ii(j.d,i,i)],a0),B.m,i,B.e,B.j,0,i,i),B.f,i,i,new A.o(v,i,t,u,i,i,B.n),i,i,i,i,B.en,i,i,i)
u=A.d("Printable document",i,i,i,i,i,i,A.l(i,i,h?B.aQ:B.M,i,i,i,i,i,i,i,i,i,i,i,B.a4,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=A.iD(B.aJ,i,i,B.af,i,new C.eLK(j),i,A.d("Shows a printable badge on this answer",i,i,i,i,i,i,A.l(i,i,h?B.bJ:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=A.d("Stored answer (not AI)",i,i,i,i,i,i,A.l(i,i,h?B.aQ:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=A.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,A.l(i,i,h?B.bJ:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.rZ:B.c
q=A.m(16)
p=A.m(16)
o=A.m(16)
n=A.I(B.bj.j(0.45),B.q,1)
m=A.p(i,D.bGx,B.f,i,i,new A.o(B.bj.j(0.12),i,i,A.m(12),i,i,B.n),i,i,i,i,B.bk,i,i,i)
l=A.d("Open Document Editor",i,i,i,i,i,i,A.l(i,i,h?B.aQ:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&A.c()
k=J.ad(k)
l=A.D(A.v(A.a([l,B.at,A.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,A.l(i,i,h?B.bJ:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),B.F,i,B.e,B.j,0,B.p),1)
return A.c8(d,g,A.cB(A.a([f,B.P,w,B.d5,e,B.P,v,B.aP,u,B.P,t,B.at,s,B.ac,A.aF(!1,B.a1,!0,q,A.aK(!1,p,!0,A.p(i,A.A(A.a([m,B.eB,l,A.W(B.Bd,h?B.bJ:B.ak,i,i,i,16)],a0),B.m,i,B.e,B.j,0,i,i),B.f,i,i,new A.o(i,i,n,o,i,i,B.n),i,i,i,i,B.fy,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gc9Z(),i,i,i,i,i,i,i),B.f,r,0,i,i,i,i,i,B.ag)],a0),i,B.bW,i,i,B.ah,!1),i,!1,!1,i,i)}}
C.d_C.prototype={}
C.Ux.prototype={
T(){return new C.aCi(A.ki(!0,null,!0,!0,null,null,!1))}}
C.aCi.prototype={
a_(){var w,v,u,t,s,r,q=this
q.a1()
w=J.dH(q.a.c,new C.dXF())
w=A.B(w,w.$ti.k("J.E"))
q.e=w
v=A.a([],x.s)
for(w=J.aW(q.a.c);w.C();){u=w.gU(w)
switch(u.a){case"heading":v.push("## "+u.b)
break
case"text":u=u.b
if(B.a.i(u).length!==0)v.push(u)
break
case"bullets":for(u=u.b.split("\n"),t=u.length,s=0;s<t;++s){r=B.a.i(u[s])
if(r.length!==0)v.push("\u2022 "+r)}break
default:break}}w=B.d.aI(v,"\n\n")
q.d=new A.ar(new A.bb(w,B.b3,B.aN),$.aw())},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.f.q()
this.a2()},
avS(d,e){var w,v,u,t,s,r=this.d
r===$&&A.c()
r=r.a
w=r.b
if(!w.geu())return
v=r.a
r=w.a
u=w.b
t=d+B.a.ap(v,r,u)+e
s=B.a.ov(v,r,u,t)
this.d.bN(0,new A.bb(s,A.h8(B.bu,r+t.length),B.aN))},
aXy(d){var w,v,u,t,s=this.d
s===$&&A.c()
s=s.a
w=s.a
v=B.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=B.a.ov(w,v,v,u)
this.d.bN(0,new A.bb(t,A.h8(B.bu,v+u.length),B.aN))},
aaV(){var w=0,v=A.j(x.H),u,t=this,s
var $async$aaV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A0.G8(78,1920),$async$aaV)
case 3:s=e
if(s==null){w=1
break}t.m(new C.dXl(t,s))
case 1:return A.h(u,v)}})
return A.i($async$aaV,v)},
Xo(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hW().a4O(B.eG),$async$Xo)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return A.b(s.ff(),$async$Xo)
case 4:t.m(new r.dXq(t,e))
case 1:return A.h(u,v)}})
return A.i($async$Xo,v)},
aaW(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$aaW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=$.aw()
s=new A.ar(B.as,t)
r=new A.ar(new A.bb("https://",B.b3,B.aN),t)
q=u.c
q.toString
w=2
return A.b(A.ca(null,null,!0,null,new C.dXo(s,r),q,null,!0,!0,x.y),$async$aaW)
case 2:if(e===!0)u.m(new C.dXp(u,s,r))
s.S$=t
s.P$=0
r.S$=t
r.P$=0
return A.h(null,v)}})
return A.i($async$aaW,v)},
bBC(){var w,v,u,t,s,r=null,q=A.a([],x.a),p=this.d
p===$&&A.c()
p=B.a.fz(p.a.a,A.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new A.K(p,new C.dXh(),A.T(p).k("K<1,n>")).c_(0,new C.dXi())
for(p=J.aW(w.a),v=new A.fm(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gU(p)
if(B.a.a0(s,"## "))q.push(new C.lw("heading",B.a.i(B.a.b0(s,3)),r,r))
else if(B.a.a0(s,"\u2022 ")||B.a.a0(s,"- "))q.push(new C.lw("bullets",new A.K(A.a(s.split("\n"),u),new C.dXj(),t).c_(0,new C.dXk()).aI(0,"\n"),r,r))
else q.push(new C.lw("text",s,r,r))}p=this.e
p===$&&A.c()
B.d.v(q,p)
if(q.length===0)q.push(D.a3Q)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.d_C(n),l=n?B.aB:B.fD,k=A.d(p.a.d,o,o,o,o,o,o,B.cw,o,o,o),j=x.p
k=A.eF(A.a([A.dp(T.a03,B.a7l,new C.dXv(p,d),A.bk(B.aJ,o,o,o,B.c,o,o,o,o,o,o,o)),B.ab],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?B.cE:B.iL
v=A.c_(B.bB,A.a([p.vh(E.Ml,"Bold",new C.dXw(p),m),p.vh(E.Zp,"Italic",new C.dXx(p),m),p.vh(E.aiK,"Underline",new C.dXy(p),m),p.vh(Ae.Zw,"Heading",new C.dXz(p),m),p.vh(O.Mm,"Bullets",new C.dXA(p),m),p.vh(E.aiJ,"Align",new C.dXB(),m),p.vh(B.Fr,"Link",p.gbWM(),m),p.vh(B.pE,"Image",p.gbWL(),m),p.vh(A_.ZI,"Video",p.gbWN(),m),p.vh(M.a_J,"Signature",new C.dXC(p),m),p.vh(A_.Mn,"Divider",new C.dXD(p),m)],j),B.bs,4,4)
w=A.p(o,A.v(A.a([v,B.an,A.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,A.l(o,o,n?B.dz:B.bn,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),B.aj,o,B.e,B.j,0,B.p),B.f,w,o,o,o,o,o,o,E.ahB,o,o,o)
v=n?B.db:B.c
u=A.m(12)
t=A.I(n?B.eu:B.e_,B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(n?0.35:0.08),B.cJ,16)],x.V)
r=p.d
r===$&&A.c()
q=A.l(o,o,n?B.iO:B.aB,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=A.a([w,A.D(new A.C(B.bW,A.p(o,A.aL(o,B.T,!1,o,!0,B.r,o,A.aM(),r,o,o,o,o,o,2,A.br(o,B.ey,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.dz:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,p.f,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,q,!0,B.a5,o,B.am,o,o,o,o),B.f,o,o,new A.o(v,o,t,u,s,o,B.n),o,o,o,o,A6.AS,o,o,o),o),1)],j)
n=p.e
n===$&&A.c()
if(n.length!==0){n=new A.hX(n,A.T(n).k("hX<1>"))
j.push(A.p(o,A.c_(B.bB,n.gdL(n).dt(0,new C.dXE(p,m),x.g5).dF(0),B.bs,0,8),B.f,o,o,o,o,o,o,o,B.LF,o,o,o))}return A.c8(k,l,A.v(j,B.m,o,B.e,B.j,0,B.p),o,!1,!1,o,o)},
vh(d,e,f,g){var w=null,v=g.a,u=v?B.db:B.c,t=A.m(8),s=A.m(8)
return A.hp(A.aF(!1,B.a1,!0,t,A.aK(!1,s,!0,new A.C(B.ck,A.W(d,v?B.iO:B.aB,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,w,w,w,B.ag),w,e,w,w)}}
C.ddK.prototype={}
C.azR.prototype={
a4(){return"_KbView."+this.b}}
C.aoO.prototype={
T(){return new C.aCh(D.aSZ)},
cMe(d,e){return this.e.$2$size(d,e)}}
C.aCh.prototype={
gayA(){var w,v
if(this.e==null)return null
for(w=J.aW(this.a.c);w.C();){v=w.gU(w)
if(v.a===this.e)return v}return null},
gcoL(){var w,v,u,t,s,r=this.gayA()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
c4p(d){this.m(new C.dXe(this,d))},
cb9(d){this.m(new C.dXf(this,d))},
bzR(){this.m(new C.dX6(this))},
bzT(){this.m(new C.dX7(this))},
gb4_(){var w=A.bl(this.a.c,!0,x.i)
B.d.b_(w,new C.dXg())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.O(d).ax.a===B.I,f=new C.ddK(g),e=x.O
e=g?A.a([B.M.j(0.9),B.bm.j(0.85)],e):A.a([B.et.j(0.55),B.mQ.j(0.45)],e)
w=A.m(22)
v=A.I((g?B.aK:B.fh).j(0.55),B.q,1)
switch(i.d.a){case 0:g=i.bAS(f)
break
case 1:g=i.gayA()
g.toString
g=i.bBA(f,g)
break
case 2:u=i.gayA()
u.toString
t=i.gcoL()
t.toString
s=A.b0(u.d)
r=A.m(16)
r=A.p(h,A.d(t.b,h,h,h,h,h,h,D.eYv,h,h,h),B.f,h,h,new A.o(B.aJ,h,h,r,h,h,B.n),h,h,h,h,B.bC,h,h,1/0)
q=g?B.aB:B.c
p=A.m(16)
o=A.I(g?B.aK:B.aL,B.q,1)
n=A.a([new A.ac(0,B.G,B.w.j(g?0.28:0.06),B.ej,10)],x.V)
m=g?B.fm:B.pd
l=A.m(8)
k=A.W(B.pK,g?B.dy:B.dS,h,h,h,14)
j=x.p
j=A.v(A.a([new C.azP(f,i.gbzS(),u.c,s,"Answer",h),A.D(A.cB(A.a([r,B.ac,A.p(h,A.v(A.a([A.p(h,A.A(A.a([k,B.eb,A.d("Stored answer",h,h,h,h,h,h,A.l(h,h,g?B.dy:B.dS,h,h,h,h,h,h,h,h,11,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),B.m,h,B.e,B.Q,0,h,h),B.f,h,h,new A.o(m,h,h,l,h,h,B.n),h,h,h,B.e3,B.h5,h,h,h),new C.aZ1(t.c,t.e,f,h)],j),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(q,h,o,p,n,h,B.n),h,h,h,h,B.bW,h,h,1/0)],j),h,B.bpF,h,h,B.ah,!1),1)],j),B.aj,h,B.e,B.j,0,B.p)
g=j
break
default:g=h}return A.p(h,g,B.aq,h,h,new A.o(h,h,v,w,h,new A.a7(B.b0,B.b6,B.x,e,h,h),B.n),h,h,h,B.hJ,h,h,h,h)},
aV1(d){var w,v,u,t=null,s=d.a,r=s?D.rZ:B.c,q=B.aE.j(0.22)
q=A.a([new A.ac(0,B.G,q,B.J,14),new A.ac(0,B.G,B.w.j(s?0.28:0.06),B.J,8)],x.V)
w=A.I(s?B.aK:B.fh,B.q,2)
v=this.a
u=x.p
q=A.a([A.p(t,A.hS(v.cMe(v.d,72),B.aq),B.f,t,t,new A.o(r,t,w,t,q,t,B.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)B.d.v(q,A.a([B.an,A.d("Tap to switch",t,t,t,t,t,t,A.l(t,t,B.d_,t,t,t,t,t,t,t,t,12,t,t,B.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return A.v(q,B.m,t,B.e,B.j,0,B.p)},
bAS(d){var w,v,u=this,t=null,s=u.a.r
s=A.av(s!=null?A.aE(t,u.aV1(d),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,B.a8):u.aV1(d),t,t,t)
w=d.a
v=A.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,A.l(t,t,w?B.aQ:B.M,t,t,t,t,t,t,t,t,20,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),B.L,t,t)
return A.cB(A.a([s,B.aA,v,B.an,A.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,A.l(t,t,w?B.bJ:B.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),B.L,t,t),B.bw,A.ic(!0,t,t,B.y,F.aMO,new C.dX9(u,d),u.gb4_().length,t,B.dQ,B.ah,!0)],x.p),t,D.bpX,t,t,B.ah,!1)},
bBA(d,e){var w,v,u,t,s=null,r=A.bl(e.e,!0,x.u)
B.d.b_(r,new C.dXb())
w=A.b0(e.d)
v=d.a
u=A.d("Tap a question to read the stored answer.",s,s,s,s,s,s,A.l(s,s,v?B.bJ:B.ak,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=A.av(A.d("No questions in this category yet.",s,s,s,s,s,s,A.l(s,s,v?B.bJ:B.ak,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=A.hG(s,new C.dXc(this,r,d,e),t,B.va,s,B.ah,new C.dXd(),!1)
return A.v(A.a([new C.azP(d,this.gbzQ(),e.c,w,e.b,s),new A.C(Aj.vb,u,s),A.D(v,1)],x.p),B.aj,s,B.e,B.j,0,B.p)}}
C.azP.prototype={
B(d){var w=this,v=null,u=w.c.a,t=A.aH(v,v,v,v,A.W(B.eA,u?B.aQ:B.M,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=A.m(12)
q=A.p(v,A.W(w.e,s,v,v,v,22),B.f,v,v,new A.o(r,v,v,q,v,v,B.n),v,v,v,v,B.ck,v,v,v)
return new A.C(D.btb,A.A(A.a([t,q,B.av,A.D(A.d(w.r,v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.M,v,v,v,v,v,v,v,v,17,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,v,v),v)}}
C.aaU.prototype={
B(d){var w=null,v=this.c,u=A.b0(v.d),t=this.d.a,s=t?D.rZ:B.c,r=A.m(14),q=A.m(14),p=A.m(14),o=A.I(t?B.aK:B.aL,B.q,1),n=A.a([new A.ac(0,B.G,B.w.j(t?0.28:0.06),B.dC,6)],x.V),m=u.j(0.15),l=A.m(12)
l=A.p(w,A.W(v.c,u,w,w,w,22),B.f,w,w,new A.o(m,w,w,l,w,w,B.n),w,40,w,w,w,w,w,40)
return new A.fG(1,A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(w,A.v(A.a([l,B.an,A.d(v.b,w,2,B.a2,w,w,w,A.l(w,w,t?B.aQ:B.M,w,w,w,w,w,w,w,w,10,w,w,B.H,w,1.1,!0,w,w,w,w,w,w,w,w),B.L,w,w)],x.p),B.m,w,B.bb,B.j,0,B.p),B.f,w,w,new A.o(w,w,o,p,n,w,B.n),w,w,w,w,B.ck,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.ag),w)}}
C.aZ1.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=A.a([],q)
if(this.d){w=r.a
v=w?B.fm:B.pd
u=A.m(8)
t=A.W(B.tO,w?B.dy:B.dS,s,s,s,14)
p.push(A.p(s,A.A(A.a([t,B.d8,A.d("Printable document",s,s,s,s,s,s,A.l(s,s,w?B.dy:B.dS,s,s,s,s,s,s,s,s,10,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),B.m,s,B.e,B.Q,0,s,s),B.f,s,s,new A.o(v,s,s,u,s,s,B.n),s,s,s,B.cH,B.eF,s,s,s))}B.d.v(p,J.b6(this.c,new C.c7s(r),x.l))
return A.v(p,B.F,s,B.e,B.j,0,B.p)}}
C.aaM.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new A.C(D.bnR,A.d(q.b,r,r,r,r,r,r,A.l(r,r,s.d.a?B.aQ:B.M,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new A.C(B.hI,A.bv(A.m(12),K.aO8(r,B.bQ,160,B.pE,r,w,1/0),B.aq),r)
case"video":v=q.c
q=v==null?q.b:v
return new A.C(B.hI,new C.azQ(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new A.C(B.v6,A.aK(!1,r,!0,A.d(q,r,r,r,r,r,r,A.l(r,r,s.d.a?B.cs:B.bj,r,B.mA,r,r,r,r,r,r,r,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cCR(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=A.ix(v?B.aK:B.aL,r,r,r,r,r)
q=A.d(q.b,r,r,r,r,r,r,A.l(r,r,v?B.cp:B.aK,r,r,r,r,r,r,r,r,r,B.cC,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=A.p(r,r,B.f,v?B.bJ:B.ak,r,r,r,1,r,r,r,r,r,120)
return new A.C(B.AE,A.v(A.a([u,q,B.aP,t,B.at,A.d("Signature",r,r,r,r,r,r,A.l(r,r,v?B.bJ:B.ak,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r)
case"bullets":v=x.cl
q=A.B(new A.cQ(new A.a2(A.a(q.b.split("\n"),x.s),new C.cCS(),x.cc),new C.cCT(s),v),v.k("J.E"))
return new A.C(B.kI,A.v(q,B.F,r,B.e,B.j,0,B.p),r)
case"divider":return new A.C(B.hI,A.ix(s.d.a?B.aK:B.aL,r,r,r,r,r),r)
default:q=q.b
if(B.a.i(q).length===0)return B.bH
return new A.C(B.eO,C.hFs(q,s.d),r)}}}
C.azQ.prototype={
T(){return new C.bf9()}}
C.bf9.prototype={
a_(){this.a1()
this.ad0()},
ad0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$ad0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=B.a.i(r.a.c)
if(J.ad(n)!==0)p=!J.cZ(n,"http")&&!J.cZ(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=A.Xr(A.cv(n,0,null),null)
w=7
return A.b(J.agW(q),$async$ad0)
case 7:if(r.c==null){w=1
break}r.m(new C.ddL(r,q))
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
return A.i($async$ad0,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?B.bm:B.f8
u=A.m(12)
return A.p(B.A,A.W(B.pP,w?B.bJ:B.ak,t,t,t,36),B.f,t,t,new A.o(v,t,t,u,t,t,B.n),t,120,t,t,t,t,t,t)}w=A.m(12)
v=s.a
u=J.agU(v)
return A.bv(w,new A.fG(u,new A.an(B.A,t,B.aa,B.r,A.a([new A.zH(s,t),A.aH(t,t,t,t,A.W(v.f?B.aiR:B.Mo,B.c,t,t,t,44),t,t,t,new C.ddN(this,s),t,t,t,t,t,t)],x.p),t),t),B.aq)}}
C.apB.prototype={
a4(){return"NgmyMusicLane."+this.b}}
C.I8.prototype={
a4(){return"NgmyMusicRhymeScheme."+this.b}}
C.rf.prototype={}
C.aoR.prototype={
T(){var w=null
return new C.aCj(new A.ar(B.as,$.aw()),A.mt(0,w,w),A.a([],x.m),D.Ce,D.aEq,w,w)},
gdX(){return this.d}}
C.aCj.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.n_,null,1,null,v)
w.f9(0,!0)
v.as!==$&&A.aO()
v.as=w
v.z=B.d.gK(D.a2s).a},
q(){var w=this,v=w.as
v===$&&A.c()
v.q()
v=w.d
v.S$=$.aw()
v.P$=0
w.e.q()
w.bti()},
gaoZ(){var w,v,u,t,s=this.x
if(s===D.Cf)return null
s=s===D.Ce
w=s?D.a2s:D.a1E
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?B.d.gK(w):null},
cpw(d){return this.m(new C.dXT(this,d))},
ayn(){$.aT.x1$.push(new C.dXK(this))},
Iq(d){return this.coZ(d)},
aXz(){return this.Iq(null)},
coZ(b0){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$Iq=A.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=B.a.i(b0==null?q.d.a.a:b0)
if(J.ad(a8)===0||q.r||q.a.e){w=1
break}w=3
return A.b(q.a.f.$0(),$async$Iq)
case 3:e=b2
if(!e){w=1
break}A.jM()
d=a8.toLowerCase()
p=B.a.t(d,"continue")||B.a.t(d,"keep going")||B.a.t(d,"go on")||B.a.t(d,"next verse")||B.a.t(d,"more lyrics")||B.a.t(d,"endelea")||B.a.t(d,"endelea na")||B.a.t(d,"ongeza")||B.a.t(d,"tuendelee")
a0=q.f
a1=B.d.b8(a0,new C.dXM())
o=!p&&!a1
d=a8.toLowerCase()
if(!(B.a.t(d,"fix")||B.a.t(d,"rewrite")||B.a.t(d,"re-write")||B.a.t(d,"rhyme better")||B.a.t(d,"better rhyme")||B.a.t(d,"sound better")||B.a.t(d,"improve")||B.a.t(d,"polish")||B.a.t(d,"make it rhyme")||B.a.t(d,"boresha")||B.a.t(d,"rekebisha")||B.a.t(d,"endeleza mistari")))a2=C.hbA(a8)&&a1
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
l=C.hbA(a8)&&!p
q.m(new C.dXN(q,a8))
q.ayn()
k=B.a.i(q.a.c)
if(J.ad(k)===0){q.m(new C.dXO(q))
q.ayn()
w=1
break}t=5
j=A.mZ(k)
i=new A.K(a0,new C.dXP(),A.T(a0).k("K<1,n>")).aI(0,"\n\n")
a0=C.hZ2(m,p,o,q.x,n,q.y,q.gaoZ(),l)
a3=J.ad(i)!==0?"--- Conversation so far ---\n"+A.t(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+A.t(a8)
w=8
return A.b(A.qF(j,h,B.hl,null),$async$Iq)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=B.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=B.a.i(a0)}else a6=L.bzZ(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.m(new C.dXQ(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.m(new C.dXR(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.m(new C.dXS(q))
q.ayn()
w=r.pop()
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Iq,v)},
bFA(){return this.Iq("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=A.O(d).ax.a===B.I,p=q?B.Ex:D.bel,o=x.p
o=A.a([A.v(A.a([A.D(s.coe(q),1),s.bEN(q)],o),B.m,r,B.e,B.j,0,B.p)],o)
if(s.f.length!==0&&!s.r){w=B.aM.j(0.55)
v=s.r?r:s.gbFz()
u=A.m(28)
t=A.a([B.aM,B.aH],x.O)
o.push(A.ao(78,A.aF(!1,B.a1,!0,r,A.aK(!1,r,!0,A.ez(D.e2M,r,new A.o(r,r,r,u,A.a([new A.ac(0,B.G,B.aM.j(0.45),B.cJ,16)],x.V),new A.a7(B.a3,B.a7,B.x,t,r,r),B.n),r,r,r),B.rw,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),B.f,B.K,10,r,w,B.rw,r,r,B.ag),r,r,r,14,r,r))}return A.p(r,new A.an(B.W,r,B.aa,B.r,o,r),B.f,p,r,r,r,r,r,r,r,r,r,r)},
coe(d){var w,v,u,t=this,s=null
if(t.x===D.Cf)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=A.a([A.fQd(s,!1,B.K,0,0,w,A.fMy(t.ctT(d),B.Va,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=A.W(B.all,B.aE.j(0.5),s,s,s,52)
w.push(A.b4z(new A.C(B.ew,A.v(A.a([u,B.aA,A.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,A.l(s,s,d?B.az:B.dA,s,s,s,s,s,s,s,s,14,s,s,B.a4,s,1.45,!0,s,s,s,s,s,s,s,s),B.L,s,s),B.aA,A.c_(B.fQ,A.a([t.ahd("Full bongo love song ABAB",d),t.ahd("Mix: group vs private jet \u2014 which flies?",d),t.ahd("Song from John 3:16 + matching verses",d),t.ahd("Fix my rhyme \u2014 paste your lines",d)],v),B.bs,8,8)],v),B.m,s,B.bb,B.j,0,B.p),s),!1))}else{v=t.r?1:0
w.push(new A.nI(D.bov,A.WT(new A.oh(new C.dXL(t,d),u+v,!0,!0,!0,0,A.rI(),s)),s))}return A.vg(0,s,B.r,t.e,B.y,s,s,A8.a9C,s,s,!1,s,B.ah,!1,w)},
ctT(d){var w=this.as
w===$&&A.c()
return A.c6(w,new C.dY_(this,d),null)},
ctV(d){var w,v=this,u=null,t=A.m(14),s=v.r?u:new C.dY1(v),r=B.w.j(d?0.35:0.06),q=A.m(14),p=A.I(B.b7.j(0.35),B.q,1),o=v.gaoZ()
o=o==null?u:o.c
o=A.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,B.IC,u,u,u)
w=v.gaoZ()
w=w==null?u:w.b
if(w==null)w="Style"
w=A.D(A.d(w,u,u,u,u,u,u,A.l(u,u,d?B.c:B.bh,u,u,u,u,u,u,u,u,12,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(u,A.A(A.a([o,B.ab,w,A.W(v.w?B.MP:B.qV,B.b7,u,u,u,20)],x.p),B.m,u,B.e,B.j,0,u,u),B.f,u,u,new A.o(r,u,p,q,u,u,B.n),u,u,u,u,B.nQ,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag)},
au5(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=A.a([B.aZ,B.aU],x.O)
break
case 1:w=A.a([B.bj,B.cs],x.O)
break
case 2:w=A.a([B.bz,B.aE],x.O)
break
default:w=n}v=m?6:0
u=A.m(14)
t=A.m(14)
s=this.r?n:new C.dXJ(this,d)
r=A.m(14)
w=m?new A.a7(B.a3,B.a7,B.x,w,n,n):n
if(m)q=n
else q=B.w.j(g?0.3:0.05)
p=A.d(f,n,n,n,n,n,n,B.IC,n,n,n)
if(m)o=B.c
else o=g?B.ad:B.bh
return A.D(A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.dg(n,A.v(A.a([p,A.d(e,n,n,n,n,n,n,A.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),B.m,n,B.e,B.j,0,B.p),n,n,B.bc,new A.o(q,n,n,r,n,w,B.n),B.a1,n,n,n,B.jx,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),B.f,n,v,n,n,n,n,n,B.ag),1)},
ctW(d,e){var w,v,u,t=this,s=null,r=t.x===D.Ce?t.z:t.Q,q=A.m(20)
if(r===d.a)r=B.b7.j(e?0.25:0.15)
else r=B.w.j(e?0.2:0.04)
w=A.m(20)
v=t.r?s:new C.dY2(t,d)
u=A.d(d.c,s,s,s,s,s,s,B.SF,s,s,s)
return A.aF(!1,B.a1,!0,q,A.aK(!1,w,!0,new A.C(B.fH,A.A(A.a([u,B.d8,A.d(d.b,s,s,s,s,s,s,A.l(s,s,e?B.c:B.bh,s,s,s,s,s,s,s,s,10,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.m,s,B.e,B.Q,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),B.f,r,0,s,s,s,s,s,B.ag)},
ahd(d,e){var w=null,v=A.d(d,w,w,w,w,w,w,E.a7e,w,w,w),u=B.aE.j(e?0.2:0.1)
return A.mB(w,u,v,w,this.r?w:new C.dXU(this,d),w,w,w,w)},
bEN(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=A.m(22),o=d?B.M.j(0.95):B.c,n=A.I(B.aE.j(0.2),B.q,1),m=x.p,l=A.a([],m)
if(q>0)l.push(new A.C(G.ahl,A.d("$"+B.k.aa(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,A.l(r,r,B.aM.j(0.85),r,r,r,r,r,r,r,r,9,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=A.l(r,r,d?B.c:B.bh,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.Cf?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=A.D(A.aL(r,B.T,!1,r,!0,B.r,r,A.aM(),w,r,r,r,r,r,2,A.br(r,B.ey,r,B.h6,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.l(r,r,d?B.c_:B.hG,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),B.y,!0,r,!0,r,!1,r,B.ai,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.dXG(s),r,!1,r,r,!1,r,!0,r,B.a9,r,r,r,r,r,r,r,r,r,r,r,v,!0,B.a5,r,B.am,r,r,r,r),1)
u=s.r
t=u?r:new C.dXH(s)
l.push(A.A(A.a([v,new A.Ii(w,B.aE,r),A.aF(!1,B.a1,!0,r,A.aK(!1,r,!0,A.ez(u?D.e2X:D.bIQ,r,D.aZo,42,r,42),B.cL,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),B.f,r,0,r,r,B.cL,r,r,B.ag)],m),B.dF,r,B.e,B.j,0,r,r))
return A.p(r,A.v(l,B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,n,p,r,r,B.n),r,r,r,B.v8,B.afT,r,r,r)}}
C.aKn.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.Uy.prototype={
ae(){var w=this
return A.F(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.YP.prototype={
T(){return new C.azg(null,null)},
beH(){return this.f.$0()}}
C.azg.prototype={
a_(){var w,v=this,u=null
v.a1()
w=A.bj(u,D.bmV,u,1,u,v)
w.cq(0)
v.d!==$&&A.aO()
v.d=w
w=A.bj(u,B.pw,u,1,u,v)
w.f9(0,!0)
v.e!==$&&A.aO()
v.e=w
w=A.bj(u,B.l6,u,1,u,v)
w.cH(0)
v.f!==$&&A.aO()
v.f=w
w=A.bj(u,B.xd,u,1,u,v)
w.cq(0)
v.r!==$&&A.aO()
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
w.bs8()},
c4r(){var w=this.d
w===$&&A.c()
w.er(0).bz(new C.db4(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(A.aI(d,B.bT,x.w).w.a.a-32,360),h=B.w.j(0.82),g=k.gc4q(),f=x.l,e=J.e2(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&A.c()
e[v]=new A.CJ(new C.db5(k,v,d),j,w,j)}f=A.B(e,f)
w=k.d
w===$&&A.c()
u=A.m(28)
t=A.I(B.c.j(0.22),B.q,1.5)
s=A.a([new A.ac(2,B.G,B.aH.j(0.35),B.J,40),new A.ac(0,B.G,B.aJ.j(0.25),B.fL,28)],x.V)
r=k.e
r===$&&A.c()
q=k.r
q===$&&A.c()
q=A.c6(new A.h3(A.a([r,q],x.U)),new C.db6(k),j)
r=A.nH(B.jp,D.fp5,new C.db7())
p=A.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,A.l(j,j,B.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,B.cu,j,1.45,!0,j,j,j,j,j,j,j,j),B.L,j,j)
o=x.p
n=A.A(A.a([k.aXA(B.kj,"Resets in 24h"),B.ab,k.aXA(B.pK,"Help Topics ready")],o),B.m,j,B.bb,B.j,0,j,j)
m=A.a([],o)
k.a.toString
l=B.c.j(0.35)
m.push(A.D(A.dU(D.fjH,new C.db8(k),A.de(j,j,j,j,j,j,j,j,j,B.ad,j,j,B.me,j,new A.b7(A.m(14),B.Y),new A.aA(l,1,B.q,-1),j,j,j,j)),1))
k.a.toString
m.push(B.av)
k.a.toString
l=A.m(14)
m.push(A.D(A.bJ(D.foW,g,A.bk(B.aJ,j,j,6,B.c,j,B.me,B.aJ.j(0.5),new A.b7(l,B.Y),j,j,j)),1))
f.push(A.av(A.aE(j,A.c6(w,new C.db9(k),A.p(j,A.v(A.a([q,B.aA,r,B.S,p,B.P,n,B.bw,A.A(m,B.m,j,B.e,B.j,0,j,j)],o),B.m,j,B.e,B.Q,0,B.p),B.f,j,j,new A.o(j,j,t,u,s,D.bRk,B.n),j,j,j,j,A9.ahd,j,j,i)),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.dba(),j,j,j,j,j,j,!1,B.a8),j,j,j))
return A.aF(!1,B.a1,!0,j,A.aE(j,new A.an(B.W,j,B.aa,B.r,f,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,B.a8),B.f,h,0,j,j,j,j,j,B.ag)},
aXA(d,e){var w=null,v=B.c.j(0.08),u=A.m(20),t=A.I(B.c.j(0.12),B.q,1)
return A.p(w,A.A(A.a([A.W(d,B.aH,w,w,w,13),B.eb,A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.fH,w,w,w)}}
C.aJg.prototype={
aQ(){this.aX()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdH())
w.b2$=null
w.a2()}}
C.N8.prototype={}
C.pE.prototype={}
C.apo.prototype={
T(){return new C.aCG(A.a([],x.E),A.a([],x.s))}}
C.aCG.prototype={
gapm(){return B.k.D(A.Kt(this.a.c.a,new C.e8J(this)),0,1/0)},
a7q(){var w,v=this,u=v.d,t=v.gapm()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)A.qE(u.a,t,!0,!1)},
IT(d,e){var w,v,u,t=this,s=t.gapm(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gapm()
if(w<v-0.005)A.hgH(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)A.qE(u.a,w,!0,!1)
A.qE(t.a.c.a,w,!0,!1)
A.Al(!0,!1,w,t.a.c.a)},
a_(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a1()
$.aT.c2$.push(o)
w=$.HX+1
$.HX=w
if(w===1){w=$.h3a
if(w!=null)w.$0()}v=$.fOA.h(0,B.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=A.bl(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=A.bl(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=A.lE(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,B.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=A.aNO(u,B.k.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new A.v8(w,u,r,q,s.e,p)}o.d=t}o.Op()
o.a7q()
$.aT.x1$.push(new C.e9p(o))
o.Q=A.dA(B.nN,new C.e9q(o))
o.as=A.dA(B.fG,new C.e9r(o))},
q(){var w=this,v=w.Q
if(v!=null)v.a8(0)
v=w.as
if(v!=null)v.a8(0)
$.aT.hE(w)
C.hxl()
w.a2()},
cw0(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new A.S(Date.now(),0,!1)
v=p.r
if(!C.a6S(v,w)){if(C.fOC(p,q.e)){q.m(new C.e97(q,p))
q.xt(!1,!0,!0)}else if(q.c!=null)q.m(new C.e98())
return}if(!C.c9I(v.c?v.bS():v)){q.m(new C.e99(p))
q.aXI(!1)
return}u=p.gBX()
if(u<=0)return
t=w.cY(A.c0(A.by(w),A.bG(w),A.bQ(w),12,0,0,0,0))
s=C.fOD(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.m(new C.e9a())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(B.d.b8(q.e,new C.e9b(r))){q.m(new C.e9c(p,w,u))
return}q.m(new C.e9d(q,p,u,w))
q.aws(new A.d2(r,p.a,u,B.fB,B.fb,"Clock-in daily earnings (local)",null,null,B.cl,w))},
iS(d){if(d===B.fs)this.Ed()},
Op(){var w,v,u,t,s,r,q,p=this.d
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
w.c8=A.bl(p.c8,!0,x.N)
w=this.a.c
w.bT=p.c8.length
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
q=new A.v8(u,t,s,r,v.e,q)
u=q}w.x=u},
R6(d){return this.cuH(d)},
cuH(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$R6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.Op()
t.IT(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return A.b(x.r.b(s)?s:A.dP(s,x.H),$async$R6)
case 3:case 1:return A.h(u,v)}})
return A.i($async$R6,v)},
Ed(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$Ed=A.e(function(d,e){if(d===1){s.push(e)
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
return A.b(H.z3(q.w,k,l,j,m,!1,n),$async$Ed)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.m(new C.e92(q,p))
q.R6(!1)}w=8
return A.b(q.J4(),$async$Ed)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=A.a9(h)
$.am.$1("[growth income] pull wallet: "+A.t(o))
w=9
return A.b(q.J4(),$async$Ed)
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
return A.i($async$Ed,v)},
MS(d){return this.bz2(d)},
bz1(){return this.MS(null)},
bz2(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$MS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return A.b(A.az(),$async$MS)
case 3:s=f
r=B.a.i(t.a.c.a.toLowerCase())
q=A.da(t.w,x.N)
r=s.rU("ngmy_gi_credited_txn_ids_"+r)
q.v(0,r==null?A.a([],x.s):r)
j.a=0
p=A.a([],x.s)
o=d==null?null:A.ky(d,A.T(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,A.L)(r),++m){l=r[m]
k=l.a
if(q.t(0,k))continue
if(o!=null&&!o.t(0,k))continue
if(l.d===B.fq&&l.x===B.cl&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.m(new C.e8K(j,t,i))
q.v(0,p)
r=A.B(q,A.a4(q).k("cm.E"))
t.w=r
w=4
return A.b(A.apq(t.a.c.a,r),$async$MS)
case 4:t.aw_(!1,!0)
r=t.c
if(r!=null)r.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Balance updated: +$"+A.dB(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$MS,v)},
J4(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$J4=A.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=A.T(a2).k("a2<1>")
a4=A.B(new A.a2(a2,new C.e93(),a3),a3.k("J.E"))
a5=a4
a6=A.a([],x.s)
w=J.ad(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=A.T(a2).k("K<1,n>")
e=A.B(new A.K(a2,new C.e94(),a3),a3.k("aj.E"))
q=e
w=9
return A.b(A.lk("transactions","id,status",null,null,null,A.F(["id",q],x.N,x.j),null,!0,null,null,!1,B.bG),$async$J4)
case 9:p=a9
if(r.c==null){w=1
break}o=!1
for(a2=J.aW(p);a2.C();){n=a2.gU(a2)
m=n
a3=J.q(m,"id")
l=J.k(a3==null?"":a3)
a3=A.aN(J.q(m,"status"))
d=a3==null?null:B.k.O(a3)
k=d==null?0:d
if(J.ad(l)===0)continue
j=B.d.ba(r.e,new C.e95(l))
if(j<0)continue
i=r.e[j].x
if(J.z(k,1))a0=B.cl
else a0=J.z(k,2)?B.k4:B.ds
h=a0
if(!J.z(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===B.ds&&h===B.cl&&a3[j].d===B.fq)J.cf(a6,l)
if(i===B.ds&&h===B.k4&&r.e[j].d===B.eK){g=r.d
if(g!=null){r.IT(g.d+r.e[j].c,!1)
r.aw_(!1,!0)}}}}if(o&&r.c!=null)r.m(new C.e96())
t=2
w=8
break
case 6:t=5
a7=s.pop()
f=A.a9(a7)
$.am.$1("[growth income] refresh deposit status: "+A.t(f))
w=8
break
case 5:w=2
break
case 8:case 4:w=J.ad(a6)!==0?10:12
break
case 10:w=13
return A.b(r.MS(a6),$async$J4)
case 13:w=11
break
case 12:w=14
return A.b(r.bz1(),$async$J4)
case 14:case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$J4,v)},
P4(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$P4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return A.b(A.us(i.a,i),$async$P4)
case 3:h=e
if(t.c==null){w=1
break}t.m(new C.e8O(t,h))
t.Op()
t.a7q()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return A.b(H.z3(s[0],p,q,o,r,!0,i),$async$P4)
case 4:i=e.a
n=i[4]
m=A.bl(i[2],!0,x.o)
l=i[5]
t.w=A.bl(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.Op()
t.a7q()
k=C.fOC(n,m)
if(k)t.IT(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.Z&&s.az>0
else s=!0
j=A.h3U(n,m,new A.S(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.Op()
if(t.c==null){w=1
break}t.m(new C.e8P(t,n,m,l))
if(i){t.xt(!1,!0,!0)
if(j==="reset"){A.h2K(t.a.c.a)
i=t.c
if(i!=null)A.h2N(i,null)}else if(j==="warn2"){A.h2L(t.a.c.a)
i=t.c
if(i!=null)C.h2O(i)}}else if(k)t.xt(!1,!0,!0)
else t.R6(!1)
case 1:return A.h(u,v)}})
return A.i($async$P4,v)},
xt(d,e,f){return this.ceJ(d,e,f)},
aw_(d,e){return this.xt(d,!1,e)},
aXI(d){return this.xt(!1,d,!1)},
ceJ(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$xt=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new A.S(Date.now(),0,!1).a6()
r=t.a.c.a
q=t.e
p=t.f
w=3
return A.b(A.rd(r,o,q,!1,t.w,s,p),$async$xt)
case 3:p=t.a.c.a
q=t.e
r=t.f
A.I1(t.w,p,q,s,o,r)
if(f)t.R6(d)
case 1:return A.h(u,v)}})
return A.i($async$xt,v)},
c4G(){this.m(new C.e8X())
this.aw_(!1,!0)},
adG(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===B.cl&&A.rG(d)){w=r.a
w.f.$1(new A.d2(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.c9E(q,d)
v=q.d=A.Kt(r.a.c.a,new C.e8U(r))
r.at=r.a.c.d=v
A.qE(q.a,v,!0,!1)
if(r.c!=null)r.m(new C.e8V(r,d))
r.xt(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new A.d2(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===B.ds
if(w&&d.d===B.fq)s=!1
else if(w&&d.d===B.eK){r.IT(q.d-d.c,!0)
s=!0}else{C.c9E(q,d)
w=d.d
s=w===B.eK||w===B.jH
r.IT(q.d,s)}r.m(new C.e8W(r,d))
w=d.d
r.xt(s,e,w===B.eK||w===B.jH||d.x===B.cl||w===B.fB)},
aws(d){return this.adG(d,!0,!1)},
aYF(d,e){return this.adG(d,!0,e)},
aYE(d,e){return this.adG(d,e,!1)},
c7D(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.i0c(u,e,d)){v.lZ("This plan is already active.")
return}w=A.hgd(u.a,d,e)
if(C.hXE(u.a,v.e,w)){v.lZ("You already own this plan.")
return}if(u.d<g){v.lZ("Insufficient balance. Add funds in the Wallet tab first.")
return}v.m(new C.e8Y(v))
v.m(new C.e8Z(v,u,new A.v8(d,e,0.0286,new A.S(Date.now(),0,!1),0,0)))
v.aws(new A.d2(w,u.a,g,B.jH,B.fb,"Direct investment buy: "+d,null,null,B.cl,new A.S(Date.now(),0,!1)))
v.m(new C.e9_(v))
v.lZ("Plan purchased: "+d)},
lZ(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
ZF(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hv(s,new C.amq(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$ZF)
case 3:w=4
return A.b(t.P4(),$async$ZF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZF,v)},
ae9(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ae9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hv(s,new C.ahf(r,A.a([r],x.d9),B.PI,t.a.d,t.gaYD(),t.gaXH(),null),!1,null,x.X),$async$ae9)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ae9,v)},
ae7(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ae7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hv(s,new C.ak0(r,t.a.d,t.e,t.gaYD(),t.gaXH(),new C.e91(t),null),!1,"LocalGrowthGameCenter",x.X),$async$ae7)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ae7,v)},
abF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$abF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new A.S(s,0,!1)
w=C.fOC(j,t.e)?3:4
break
case 3:w=5
return A.b(t.aXI(!0),$async$abF)
case 5:case 4:if(j.x==null){t.lZ("Choose an investment plan first, then come back to clock in.")
t.m(new C.e8Q(t))
w=1
break}if(A.mr(r)===6||A.mr(r)===7){t.lZ("Clock-in opens Monday through Friday.")
w=1
break}if(!C.h3V(r)){t.lZ("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a6S(q,r)&&j.fy>0){t.lZ("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!A.aOw(q,r))if(!A.aOw(j.fr,r)){q=A.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,A.L)(p),++n){m=p[n]
if(B.a.i(m.b.toLowerCase())===B.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new A.aEy(m.y,l,m.a))}}q=A.hfF(q,r)}else q=p
else q=p}else q=!1
if(q){t.lZ("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.lZ("You are already clocked in for today.")
w=1
break}k=C.hyN(r)
q=j.a
t.m(new C.e8R(j,r,k))
t.aYE(new A.d2("local_clockin_manual_"+q+"_"+s,j.a,0,B.fB,B.fb,"Clock-in session started (local)",null,null,B.cl,r),!1)
t.lZ("Clock-in started. Keep Growth Income open for today.")
case 1:return A.h(u,v)}})
return A.i($async$abF,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===B.I?B.j6:B.pp
if(l.d==null)return A.ej(B.ks,j,!0)
w=x.o
v=A.V(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=B.a.i(l.a.c.a.toLowerCase())
u=$.fr9
u=u==null?k:u.$0()
u=J.aW(u==null?B.i1:u)
while(u.C()){t=u.gU(u)
q=t.a
if(q.length===0||v.ah(0,q)||A.rG(t))continue
if(B.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(A.dr(o.toLowerCase(),"clock-in",0))continue
v.n(0,q,t)}w=A.B(new A.bc(v,v.$ti.k("bc<2>")),w)
v=l.e
B.d.v(w,new A.a2(v,new C.e9h(),A.T(v).k("a2<1>")))
B.d.b_(w,new C.e9i())
v=l.d
v.toString
u=C.hNn(l.a.c)
t=l.d
t.toString
t=A.ej(new C.akS(t,l.a.e,l.z,l.gc7C(),l.aSw(),D.fHD),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=A.ej(new C.aA3(l.aSw(),q,n,o,w,new C.e9j(l),l.gc9I(),new C.e9k(l),D.fHE),j,!0)
m=A.aI(d,k,x.w).w
n=l.y
return new A.Vt(n,new C.e9l(l),A.aF(!1,B.a1,!0,k,new A.a6(1/0,m.a.b,new A.an(B.W,k,B.aa,B.r,A.a([A.bY(0,A.ej(k,j,!0),0,0,0),A.bY(0,A.bm(!1,[new C.aA2(v,u,w,l.gbZF(),new C.e9m(l),new C.e9n(l),new C.e9o(d),l.gcay(),l.gcau(),D.fHC),t,o][n],!0,!1,B.af,!0,!0),0,0,0),A.ao(0,l.bBj(),k,k,0,0,k,k)],x.p),k),k),B.f,j,0,k,k,k,k,k,B.ag),k)},
aSw(){var w=null,v=A.a([D.eH.j(0.24),B.M.j(0.72)],x.O)
return A.hp(A.aK(!1,w,!0,A.p(B.A,D.bNj,B.f,w,w,new A.o(w,w,A.I(D.eH.j(0.38),B.q,1),w,A.a([new A.ac(0,B.G,D.eH.j(0.18),B.J,16)],x.V),new A.a7(B.ax,B.aC,B.x,v,w,w),B.a6),w,40,w,w,w,w,w,40),B.cL,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e8N(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bBj(){var w=null,v=A.m(27),u=A.I(B.aw.j(0.45),B.q,1),t=A.a([new A.ac(0,B.G,B.w.j(0.5),B.eT,24),new A.ac(-2,B.G,B.aw.j(0.12),B.J,18)],x.V)
return new A.C(B.LF,A.bm(!0,A.av(new A.cU(D.aXH,A.p(w,A.cn(new C.e8L(this)),B.f,w,w,new A.o(w,w,u,v,t,D.bQO,B.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,B.af,!0,!1),w)},
c0j(d){var w=null,v=this.y===d,u=D.cTZ[d],t=u.b,s=u.a,r=""+d,q=x.W
return A.D(A.ds(w,!0,w,A.aE(B.c5,A.rl(A.q6(v?A.W(s,D.aaV,new A.cw("on"+r,q),w,w,21):A.v(A.a([A.W(s,B.c.j(0.62),w,w,w,19),B.bA,A.d(t,w,1,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,new A.cw("off"+r,q),B.bb,B.j,0,B.p),B.iv,A.rD(),B.bc,B.bc,A.a0Q())),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e8T(this,d),w,w,w,w,w,w,!1,B.a8),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,B.c1,w),1)}}
C.aA2.prototype={
bYu(d){return C.fOD(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.O(d)
w=B.c.j(0.58)
v=f.e
u=A.T(v).k("a2<1>")
u=A.p4(new A.a2(v,new C.dfy(),u),3,u.k("J.E"))
t=A.B(u,A.a4(u).k("J.E"))
v=f.c
s=v.x
r=new A.S(Date.now(),0,!1)
q=v.f
p=C.a6S(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.h3V(r)
m=v.gBX()
l=A.a([D.eH.j(0.24),B.M.j(0.72)],x.O)
k=A.I(D.eH.j(0.38),B.q,1)
j=x.V
i=A.a([new A.ac(0,B.G,D.eH.j(0.18),B.J,16)],j)
l=A.aK(!1,e,!0,A.p(B.A,A.W(B.hY,D.eH,e,e,e,19),B.f,e,e,new A.o(e,e,k,e,i,new A.a7(B.ax,B.aC,B.x,l,e,e),B.a6),e,38,e,e,e,e,e,38),B.cL,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=A.m(14)
k=A.m(14)
j=A.a([new A.ac(0,B.G,B.b5.j(0.45),B.cJ,16)],j)
h=A.m(12)
g=x.p
j=A.bMq(!1,l,"GROWTH INCOME",A.aK(!1,i,!0,new A.a6(44,44,new A.an(B.W,e,B.aa,B.f,A.a([A.p(B.A,A.p(B.A,D.bFX,B.f,e,e,new A.o(B.is.j(0.78),e,e,h,e,e,B.n),e,36,e,e,e,e,e,36),B.f,e,e,new A.o(e,e,e,k,j,D.bSg,B.n),e,42,e,e,e,e,e,42),A.ao(e,A.p(B.A,D.bMo,B.f,e,e,new A.o(B.cn,e,A.I(D.adm,B.q,2),e,e,e,B.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.h6u(B.h4,new C.dfz(),k)
k=A.A(A.a([A.D(C.h6t(new C.dfA(f,B.qw,n),new A.S(Date.now(),0,!1),h,k),1),B.o7,A.D(new A.ue(new C.dfB(f,B.qw),e,new A.h3(A.a([$.yh(),$.a1T()],x.U)),e),1)],g),B.m,e,B.e,B.j,0,e,e)
h=f.c0u(B.qw,D.eH)
v=A.D(f.csc("Total Profit","$"+A.dB(v.e),B.qw),1)
u=u?e:s.b
return A.ej(A.cd(A.v(A.a([j,B.S,k,B.ac,new C.aA1(f.d,m,q,p,n,o,D.eH,f.gbYt(),f.f,e),B.ac,h,B.S,A.A(A.a([v,B.o7,A.D(f.b3V("Total Investment","$"+A.dB(u==null?0:u),B.qw,f.r),1)],g),B.m,e,B.e,B.j,0,e,e),B.S,f.bYq(d,t,D.eH,w)],g),B.aj,e,B.e,B.j,0,B.p),B.r,e,B.y,e,B.Y4,e,e,B.ah),D.adm,!0)},
avZ(d,e,f,g,h){var w=null,v=A.m(h),u=A.I(B.c.j(0.09),B.q,1),t=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dk,18)],x.V)
return A.p(w,A.bv(A.m(h-1),new A.an(B.W,w,B.aa,B.r,A.a([A.bY(0,A.bZ(w,new A.o(w,w,w,w,w,new A.bR(f,1.15,B.x,w,0,A.a([e.j(0.22),e.j(0)],x.O),w,w),B.n),B.bd),0,0,0),new A.C(g,d,w)],x.p),w),B.aq),B.f,w,w,new A.o(w,w,u,v,t,D.bRd,B.n),w,w,w,w,w,w,w,w)},
aXG(d,e,f,g){return this.avZ(d,e,f,B.af,g)},
b5L(d,e,f,g,h,i,j){var w=null,v=A.ao(-14,A.W(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=A.m(30),s=A.I(f.j(0.4),B.q,1),r=x.p,q=this.aXG(new A.a6(w,80,new A.an(B.W,w,B.aa,B.r,A.a([v,new A.C(D.boZ,A.v(A.a([A.p(w,A.A(A.a([A.W(e,f,w,w,w,15),B.eb,A.d(h.toUpperCase(),w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.ahr,w,w,w),B.b4,A.f2(B.a3,A.d(i,w,1,w,w,w,w,A.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,B.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.eg)],r),B.F,w,B.e,B.j,0,B.p),w)],r),w),w),f,B.l_,22)
if(g==null)return q
return A.aK(!1,A.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
c0u(d,e){var w,v,u,t,s=null,r=A.I(e.j(0.55),B.q,2),q=e.j(0.12),p=x.p,o=A.a([],p)
for(w=0;w<3;++w){v=new A.aV(3,3)
o.push(A.p(s,s,B.f,s,s,new A.o(e,s,s,new A.bp(v,v,v,v),s,s,B.n),s,D.cFw[w],s,D.bsr,s,s,s,5))}r=A.p(s,A.A(o,B.dF,s,B.bb,B.j,0,s,s),B.f,s,s,new A.o(q,s,r,s,s,s,B.a6),s,42,s,s,s,s,s,42)
q=A.D(A.v(A.a([D.flm,B.bA,A.A(A.a([A.p(s,s,B.f,s,s,new A.o(e,s,s,s,A.a([new A.ac(0,B.G,e,B.J,6)],x.V),s,B.a6),s,7,s,s,s,s,s,7),B.bp,new A.dm(1,B.ci,A.d("Live \xb7 real-time statistics",s,1,B.a2,s,s,s,A.l(s,s,B.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),B.m,s,B.e,B.j,0,s,s)],p),B.F,s,B.e,B.j,0,B.p),1)
o=A.m(16)
v=A.m(16)
u=B.w.j(0.3)
t=A.I(e.j(0.45),B.q,1.2)
return this.avZ(A.A(A.a([r,D.eJY,q,B.ab,A.aK(!1,o,!0,A.p(s,A.v(A.a([A.W(B.oC,e.j(0.95),s,s,s,21),B.uq,A.d("PLAY",s,s,s,s,s,s,A.l(s,s,B.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,B.H,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),B.m,s,B.bb,B.j,0,B.p),B.f,s,s,new A.o(u,s,t,v,s,s,B.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),B.m,s,B.e,B.j,0,s,s),e,B.a3,B.XE,26)},
b3V(d,e,f,g){var w,v=null,u=B.a.t(d.toLowerCase(),"profit"),t=u?B.cn:B.aV,s=A.p(v,v,B.f,v,v,new A.o(t,v,v,D.aVV,v,v,B.n),v,v,v,B.n3,v,v,v,5),r=x.p
r=A.a([s,B.bf,A.D(A.v(A.a([A.A(A.a([A.W(u?B.tM:B.y1,t,v,v,v,14),B.eb,new A.dm(1,B.ci,A.d(d,v,1,B.a2,v,v,v,A.l(v,v,B.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),B.m,v,B.e,B.j,0,v,v),B.an,A.f2(B.a3,A.d(e,v,1,v,v,v,v,D.eSU,v,v,v),B.f,B.eg)],r),B.F,v,B.bb,B.j,0,B.p),1)],r)
s=g==null
if(!s)r.push(new A.C(B.afF,A.W(B.ex,B.c.j(0.35),v,v,v,v),v))
w=this.aXG(new A.a6(v,66,A.A(r,B.m,v,B.e,B.j,0,v,v),v),t,B.lu,20)
if(s)return w
return A.aK(!1,A.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
csc(d,e,f){return this.b3V(d,e,f,null)},
bYq(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.p(m,m,B.f,m,m,new A.o(f,m,m,m,A.a([new A.ac(0,B.G,f,B.J,8)],x.V),m,B.a6),m,9,m,m,m,m,m,9),k=A.d("LIVE ACTIVITY",m,m,m,m,m,m,A.l(m,m,B.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,B.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=B.c.j(0.07),i=A.m(20),h=x.p
i=A.a([A.A(A.a([l,B.a67,k,B.b4,A.p(m,A.d(""+e.length,m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.f,m,m,new A.o(j,m,m,i,m,m,B.n),m,m,m,m,B.Yh,m,m,m)],h),B.m,m,B.e,B.j,0,m,m),B.P],h)
if(e.length===0)i.push(new A.C(B.Xt,A.v(A.a([A.W(B.h8,g,m,m,m,30),B.an,A.d("Nothing yet",m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.bA,A.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),B.L,m,m)],h),B.m,m,B.e,B.j,0,B.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=A.a([],h)
if(w>0)k.push(new A.md(1,m,m,m,m,B.c.j(0.07),m))
j=e[w]
v=j.d
u=v===B.eK||v===B.jH
t=u?B.j4:D.eH
g=B.c.j(0.5)
v=new A.aV(12,12)
s=A.a([t.j(0.28),t.j(0.08)],l)
r=new A.aA(t.j(0.35),1,B.q,-1)
v=A.p(B.A,A.W(u?B.tM:B.vx,t,m,m,m,18),B.f,m,m,new A.o(m,m,new A.bP(r,r,r,r),new A.bp(v,v,v,v),m,new A.a7(B.ax,B.aC,B.x,s,m,m),B.n),m,38,m,m,m,m,m,38)
s=C.hVw(j)
q=C.h8a(j.y)
s=A.v(A.a([new A.x(s,m,B.mB,m,m,m,m,B.a2,m,1,m,m),B.bA,new A.x(q,m,new A.G(!0,g,m,m,m,m,11,B.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.F,m,B.e,B.j,0,B.p)
q=t.j(0.14)
p=new A.aV(20,20)
o=u?"-":"+"
n=A.dB(j.c)
q=A.p(m,new A.x(o+"$"+n,m,new A.G(!0,t,m,m,m,m,13,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),B.f,m,m,new A.o(q,m,m,new A.bp(p,p,p,p),m,m,B.n),m,m,m,m,B.nS,m,m,m)
j=C.hfh(j)
k.push(new A.C(Q.Lu,new A.cl(B.aO,B.e,B.j,B.m,m,B.p,m,0,A.a([v,B.bf,new A.bD(1,B.bi,s,m),A.v(A.a([q,B.cX,new A.x(j,m,new A.G(!0,g,m,m,m,m,10,B.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.dF,m,B.e,B.j,0,B.p)],h),m),m))
B.d.v(i,k)}return this.avZ(A.v(i,B.m,m,B.e,B.j,0,B.p),f,B.b0,D.bp6,26)}}
C.aA1.prototype={
T(){return new C.bfS(null,null)},
cLX(d){return this.z.$1(d)},
cNa(){return this.Q.$0()}}
C.bfS.prototype={
a_(){var w,v=this,u=null
v.a1()
w=A.bj(u,B.pz,u,1,u,v)
w.cH(0)
v.d!==$&&A.aO()
v.d=w
w=A.bj(u,D.bmM,u,1,u,v)
w.cH(0)
v.e!==$&&A.aO()
v.e=w
w=A.bj(u,B.tr,u,1,u,v)
v.f!==$&&A.aO()
v.f=w
v.b4S()},
gb7t(){var w=new A.S(Date.now(),0,!1)
if(A.mr(w)===6||A.mr(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
b4S(){var w=this,v=w.a,u=v.e||v.f||w.gb7t()
if(u){v=w.f
v===$&&A.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){v=w.f
v===$&&A.c()
v.cH(0)}else{if(!u){v=w.f
v===$&&A.c()
v=v.r
v=v!=null&&v.a!=null}else v=!1
if(v){v=w.f
v===$&&A.c()
v.bY(0)}}},
br(d){this.bE(d)
this.b4S()},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
w.bsp()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gb7t()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=B.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?B.aw:g.x
g=g.r?new C.dfr(i):h
v=A.m(32)
s=A.m(32)
r=f?D.d8V:D.d8T
q=A.I((f?D.ok:B.b1).j(0.28),B.q,1.4)
p=x.V
o=A.a([new A.ac(0,B.G,(f?B.aw:B.b7).j(0.16),B.fL,28)],p)
n=x.p
m=A.a([],n)
if(f)B.d.v(m,A.a([A.ao(h,i.aad(D.ok,130),h,h,h,-24,-30,h),A.ao(-36,i.aad(B.aw,140),h,h,-28,h,h,h)],n))
else B.d.v(m,A.a([A.ao(h,i.aad(B.b7,120),h,h,h,-30,-36,h),A.ao(-40,i.aad(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bY(0,A.e0(A.bv(l,new A.es(A.c6(k,new C.dfs(i),h),h),B.aq),!0,h),0,0,0))}if(f){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bY(0,A.e0(A.bv(l,new A.es(A.c6(k,new C.dft(i),h),h),B.aq),!0,h),0,0,0))}l=A.m(999)
k=B.c.j(0.06)
j=A.I(B.c.j(0.16),B.q,1)
m.push(A.ao(h,new A.cU(D.aXN,A.p(h,A.A(A.a([A.p(h,h,B.f,h,h,new A.o(t,h,h,h,A.a([new A.ac(0,B.G,t.j(0.5),B.J,8)],p),h,B.a6),h,8,h,h,h,h,h,8),B.ab,new A.dm(1,B.ci,A.d(u,h,1,B.a2,h,h,h,D.eYg,h,h,h),h)],n),B.m,h,B.e,B.Q,0,h,h),B.f,h,h,new A.o(k,h,j,l,h,h,B.n),h,h,h,h,B.h6,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.h6u(B.h4,new C.dfu(),l)
m.push(C.h6t(new C.dfv(i,f,t,e,w),new A.S(Date.now(),0,!1),j,l))
return A.aK(!1,v,!0,A.dg(h,new A.an(B.W,h,B.aa,B.f,m,h),h,h,B.bc,new A.o(h,h,q,s,o,new A.a7(B.ax,B.aC,B.x,r,h,h),B.n),B.AA,h,392,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
aad(d,e){var w=null
return A.e0(A.p(w,w,B.f,w,w,new A.o(w,w,w,w,w,new A.bR(B.A,0.5,B.x,w,0,A.a([d.j(0.22),d.j(0)],x.O),w,w),B.a6),w,e,w,w,w,w,w,e),!0,w)}}
C.b9D.prototype={
aXJ(d,e,f,g){var w=new A.aQ($.X().r,B.ap,null,null,A.a([],x.g)),v=e.a,u=e.b,t=u-f
w.E(new A.b5(v,t))
w.E(new A.cS(v,u,v+f,u))
w.E(new A.cS(v,u,v,u+f))
w.E(new A.cS(v,u,v-f,u))
w.E(new A.cS(v,u,v,t))
w.E(new A.bF())
d.aO(w,g)},
a5(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=a8/2,b0=b3.b,b1=b0/2
for(w=a7.b,v=w*6.283185307179586,u=0;u<16;++u){t=B.k.F(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=B.k.F(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+B.o.F(u,3))+u)+1)/2
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.1+r*0.5).gp(0)
a7.aXJ(b2,new A.u(t*a8,s*b0),2+r*2.2,q)}for(a8=b2.a,b0=w*2,p=a7.e,o=0;o<3;++o){n=B.k.F(b0+o/3,1)
$.X()
m=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
m.b=B.ae
m.c=1.6
m.r=p.j((1-n)*0.38).gp(0)
l=m.H()
a8.drawCircle(a9,b1,138+n*90,l)
l.delete()}for(b0=a7.d,u=0;u<28;++u){k=B.k.F(w*(1+B.o.F(u,2))+u/28,1)
j=u*2.399963+Math.sin(u*1.7)*0.2
i=113.16+k*(70+B.o.F(u,5)*18)
h=a9+Math.cos(j)*i
g=b1+Math.sin(j)*i*0.96
f=B.k.D(Math.sin(k*3.141592653589793),0,1)
switch(B.o.F(u,4)){case 0:e=B.k.D(Math.abs(Math.cos(k*6.283185307179586*3)),0.28,1)
J.bz(a8.save())
a8.translate(h,g)
a8.scale(e,1)
$.X()
d=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
d.r=b0.j(f).gp(0)
l=d.H()
a8.drawCircle(0,0,6.5,l)
l.delete()
h=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
h.b=B.ae
h.c=1.2
h.r=p.j(f).gp(0)
l=h.H()
a8.drawCircle(0,0,6.5,l)
l.delete()
if(e>0.6&&f>0.35){h=$.hkO()
g=h.b
a0=g.c
g=g.a.c
h.a5(b2,new A.u(-a0/2,-g.gbc(g)/2))}a8.restore()
break
case 1:$.X()
a0=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
a0.r=p.j(f*0.95).gp(0)
a7.aXJ(b2,new A.u(h,g),3+f*3,a0)
break
case 2:$.X()
a0=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
a0.r=B.c.j(f*0.8).gp(0)
l=a0.H()
a8.drawCircle(h,g,1.6+f*1.8,l)
l.delete()
break
default:a0=Math.cos(j)
a1=Math.sin(j)
a2=7+f*7
$.X()
a3=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
a3.c=1.8
a3.d=B.bO
a3.r=b0.j(f*0.8).gp(0)
l=a3.H()
a8.drawLine.apply(a8,[h,g,h-a0*a2,g-a1*a2,l])
l.delete()}}for(a4=0;a4<3;++a4){a5=v+a4*6.283185307179586/3
for(a6=0;a6<8;++a6){r=a5-a6*0.09
w=Math.cos(r)
h=Math.sin(r)
o=1-a6/8
$.X()
g=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
g.r=p.j(o*0.85).gp(0)
l=g.H()
a8.drawCircle(a9+w*144,b1+h*144,1.4+o*2.6,l)
l.delete()}w=Math.cos(a5)
h=Math.sin(a5)
$.X()
g=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
g.r=b0.j(0.28).gp(0)
g.z=N.mt
l=g.H()
a8.drawCircle(a9+w*144,b1+h*144,7,l)
l.delete()}},
aq(d){return d.b!==this.b}}
C.b9C.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.X(),a4=A.M()
a4.r=this.d.j(0.075).gp(0)
for(w=a5.a,v=this.b,u=v*6.283185307179586,t=x.g,a3=a3.r,s=0;s<14;++s){r=u+s*6.283185307179586/14
q=A.a([],t)
p=new A.aQ(a3,B.ap,e,e,q)
o=r-0.14361566416410484
q.push(new A.b5(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new A.ap(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
o=r+0.14361566416410484
q.push(new A.ap(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
q.push(new A.ap(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new A.bF())
n=a4.H()
q=p.gbJ().a.snapshot()
w.drawPath((p.e=new A.cF(q)).a,n)
n.delete()}a0=v*2
a2=B.k.F(a0,1)
J.bz(w.save())
w.translate(a2*(d+240)-120,0)
a5.ja(0,0.35)
a2=-a1
a3=A.M()
a3.sau(new A.a7(B.a3,B.a7,B.x,A.a([B.c.j(0),B.c.j(0.07),B.c.j(0)],x.O),e,e).aw(0,D.eDK))
a5.aY(new A.aa(-18,a2,18,a2+a1*3),a3)
w.restore()
for(a2=a1+40,s=0;s<34;++s){m=B.k.F(Math.abs(Math.sin(s*91.7)*43758.5453),1)
l=B.k.F(v*(1+B.o.F(s,2))+s/34,1)
a3=l*6.283185307179586
u=Math.sin(a3*2+s)
J.bz(w.save())
w.translate(m*d+u*14,l*a2-20)
w.rotate(a3*(2+B.o.F(s,3))*180/3.141592653589793,0,0)
a3=B.k.D(Math.abs(Math.cos(a3*3+s)),0.3,1)
w.scale(1,a3)
if(l<0.08)a3=l/0.08
else a3=l>0.9?(1-l)/0.1:1
k=B.k.D(a3,0,1)
a3=A.bA(D.eEg,B.RN)
u=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
u.r=D.awN[B.o.F(s,6)].j(k*0.9).gp(0)
n=u.H()
w.drawRRect(A.ep(a3),n)
n.delete()
w.restore()}j=[new A.u(d*0.18,a1*0.2),new A.u(d*0.82,a1*0.26),new A.u(d*0.5,a1*0.07)]
for(i=0;i<3;++i){l=B.k.F(a0+i/3,1)
if(l>0.5)continue
h=l/0.5
g=6+h*44
d=1-h
k=B.k.D(d,0,1)
for(a1=g*0.62,a2=g+5,s=0;s<14;++s){r=s*6.283185307179586/14
a3=Math.cos(r)
v=Math.sin(r)
f=D.awN[B.o.F(s+i,6)].j(k)
u=j[i]
t=u.a
u=u.b
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.c=2
q.d=B.bO
q.r=f.gp(0)
n=q.H()
w.drawLine.apply(w,[t+a3*a1,u+v*a1,t+a3*g,u+v*g,n])
n.delete()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.gp(0)
n=q.H()
w.drawCircle(t+a3*a2,u+v*a2,1.6,n)
n.delete()}a1=j[i]
$.X()
a2=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
a2.r=B.c.j(k).gp(0)
n=a2.H()
w.drawCircle(a1.a,a1.b,5*d,n)
n.delete()}},
aq(d){return d.b!==this.b}}
C.b9B.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a6.a/2,a1=a6.b/2,a2=new A.u(a0,a1),a3=a0-4,a4=a3-22
$.X()
w=A.M()
w.b=B.ae
w.c=14
v=e.d
w.r=(v?e.r:B.b1).j(0.22).gp(0)
a5.ai(a2,a3-7,w)
w=A.M()
w.b=B.ae
w.c=1.7
w.r=(v?e.f:B.c).j(0.28).gp(0)
a5.ai(a2,a3-1,w)
w=A.M()
w.b=B.ae
w.c=1.6
w.r=B.c.j(0.16).gp(0)
a5.ai(a2,a4+8,w)
u=A.M()
u.c=1.5
u.d=B.bO
u.r=(v?e.f:B.c).j(0.22).gp(0)
for(w=a3-3,t=a3+2,s=a5.a,r=0;r<12;++r){q=r/12*3.141592653589793*2-1.5707963267948966
p=Math.cos(q)
o=Math.sin(q)
n=Math.cos(q)
m=Math.sin(q)
l=u.H()
s.drawLine.apply(s,[a0+p*w,a1+o*w,a0+n*t,a1+m*t,l])
l.delete()}J.bz(s.save())
w=$.X().r
t=x.g
p=new A.aQ(w,B.ap,d,d,A.a([],t))
p.E(new A.kt(A.bU(a2,a4)))
a5.rj(0,p)
p=A.bU(a2,a4)
o=A.M()
o.sau(D.e9B.aw(0,A.bU(a2,a4)))
a5.aY(p,o)
k=B.k.D(e.b,0,1)
if(k>0.004){a1+=a4
j=a1-a4*2*k
i=v?5.2:1.8
t=A.a([],t)
h=new A.aQ(w,B.ap,d,d,t)
g=a0-a4
a1+=4
h.E(new A.b5(g,a1))
for(w=a0+a4,p=e.c*3.141592653589793,o=p*2,p*=2.2,n=i*0.42;g<=w;g+=3){m=(g-a0)/a4*3.141592653589793
m=new A.ap(g,j+Math.sin(m*2+o)*i+Math.sin(m*3.1-p)*n)
t.push(m)
f=h.f
if(f!=null)m.bx(f)
m=h.e
if(m!=null)m.a.delete()
h.e=null}h.E(new A.ap(w,a1))
h.E(new A.bF())
$.X()
a0=A.M()
a1=x.O
w=e.e
a1=v?A.a([e.f.j(0.55),w.j(0.78),e.r.j(0.92)],a1):A.a([w.j(0.22),D.eH.j(0.34),B.cZ.j(0.62)],a1)
a0.sau(new A.a7(B.b0,B.b6,B.x,a1,d,d).aw(0,A.bU(a2,a4)))
a5.aO(h,a0)
a0=A.M()
a0.b=B.ae
a0.c=2
a0.r=B.c.j(v?0.28:0.14).gp(0)
a5.aO(h,a0)}s.restore()},
aq(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.aA3.prototype={
T(){var w=$.aw()
return new C.aA4(new A.ar(B.as,w),new A.ar(B.as,w))},
beA(d,e){return this.w.$2$cloudRequest(d,e)}}
C.aA4.prototype={
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
lZ(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
cu4(d){this.a.beA(d,!0)
this.lZ("Deposit submitted. Admin will review your payment proof.")
this.m(new C.dfS())},
csK(){var w,v,u=this,t=A.d4(u.d.a.a)
if(t==null||t<=0){u.lZ("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
A.hv(w,new C.aov(v.d,t,u.gcu3(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cAm(){var w,v,u,t,s=this,r=s.d,q=A.d4(r.a.a)
if(q==null||q<=0){s.lZ("Enter an amount to withdraw.")
return}if(q<10){s.lZ("Minimum withdrawal is $"+A.dB(10)+".")
return}w=s.a.d.d
if(q>w){s.lZ("Insufficient balance. You have $"+A.dB(w)+".")
return}w=s.e
v=C.hgF(w.a.a)
if(v.length===0){s.lZ("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.beA(new A.d2("wd_"+1000*Date.now(),s.a.d.a,q,B.eK,B.kp,"Withdrawal to $"+v+" \u2014 Fee: $"+A.dB(u)+" \u2014 You receive: $"+A.dB(q-u),null,null,B.ds,new A.S(Date.now(),0,!1)),!0)
s.lZ("Withdrawal submitted \u2014 waiting for admin approval.")
r.bN(0,B.c3)
w.bN(0,B.c3)
s.m(new C.dfT())},
cxh(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,A.L)(w),++s){r=w[s]
if(r.x!==B.cl||!this.aUj(r)||A.fW4(r))continue
q=r.d
p=q===B.eK||q===B.jH||q===B.eo
q=r.c
if(p)t+=q
else u+=q}return new A.bmP(u,t)},
B(d){var w,v,u,t=this,s=null,r=t.cxh(),q=t.a.r,p=new A.a2(q,new C.dfU(),A.T(q).k("a2<1>")).gM(0)
q=t.a
w=q.c
q=q.x
v=A.a([D.eH.j(0.24),B.M.j(0.72)],x.O)
u=A.I(D.eH.j(0.38),B.q,1)
q=A.bMq(!1,w,"WALLET",A.hp(A.aK(!1,s,!0,A.p(B.A,A.W(V.akC,D.eH,s,s,s,18),B.f,s,s,new A.o(s,s,u,s,s,new A.a7(B.ax,B.aC,B.x,v,s,s),B.a6),s,40,s,s,s,s,s,40),B.cL,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),s,"Back up wallet",s,s))
v=t.bzX(r.a,r.b,p)
u=x.p
w=A.A(A.a([t.aoW(B.vx,"Deposit",0),t.aoW(B.tM,"Withdraw",1),t.aoW(B.h9,"History",2)],u),B.m,s,B.pT,B.j,0,s,s)
return A.ej(A.bm(!1,A.cd(A.v(A.a([q,B.bw,v,B.d5,w,B.d5,A.q6(t.f===2?t.bVx():t.c_Y(),B.i8,A.rD(),B.bc,B.bc,A.a0Q())],u),B.aj,s,B.e,B.j,0,B.p),B.r,s,B.y,s,D.bqY,s,s,B.ah),!0,!1,B.af,!0,!0),B.A5,!0)},
bzX(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.a.i(i.a.e)
if(B.a.t(g,"@")){w=B.a.cJ(g,"@")
v=B.a.ap(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+B.a.b0(g,w)}else v=g
w=A.m(26)
u=A.ao(h,i.ay7(220,0.1),h,h,h,-60,-70,h)
t=A.ao(-90,i.ay7(200,0.07),h,h,h,30,h,h)
s=A.ao(-60,i.ay7(150,0.05),h,h,-40,h,h,h)
r=A.m(26)
r=A.bY(0,A.bZ(h,new A.o(h,h,A.I(B.c.j(0.18),B.q,1),r,h,h,B.n),B.bd),0,0,0)
q=A.m(6)
p=x.p
q=A.A(A.a([A.p(h,A.b3(h,h,h,new C.b93(h),B.au),B.f,h,h,new A.o(h,h,h,q,h,D.bTk,B.n),h,28,h,h,h,h,h,38),B.b4,D.fty],p),B.m,h,B.e,B.j,0,h,h)
o=A.d("Available balance",h,h,h,h,h,h,A.l(h,h,B.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,B.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=A.f2(B.a3,C.ape(new C.dfE(i),D.f2v,i.a.d.a),B.f,B.eg)
m=A.a([A.D(i.aNb(B.qS,"In",d),1),A.D(i.aNb(B.tF,"Out",e),1)],p)
if(f>0){l=B.cR.j(0.22)
k=A.m(99)
j=A.I(B.iB.j(0.6),B.q,1)
m.push(A.p(h,A.d(""+f+" pending",h,h,h,h,h,h,D.eZc,h,h,h),B.f,h,h,new A.o(l,h,j,k,h,h,B.n),h,h,h,h,B.nS,h,h,h))}return new A.fG(1.62,A.bv(w,new A.an(B.W,h,B.aa,B.r,A.a([D.e8Q,u,t,s,r,new A.C(A7.qO,A.v(A.a([q,B.b4,o,B.bA,n,B.b4,A.A(m,B.m,h,B.e,B.j,0,h,h),B.an,A.d(v,h,1,B.a2,h,h,h,A.l(h,h,B.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,B.a4,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),B.F,h,B.e,B.j,0,B.p),h)],p),h),B.aq),h)},
ay7(d,e){var w=null
return A.p(w,w,B.f,w,w,new A.o(w,w,A.I(B.c.j(e),B.q,22),w,w,w,B.a6),w,d,w,w,w,w,w,d)},
aNb(d,e,f){var w=null,v=B.c.j(0.16)
return A.A(A.a([A.p(w,A.W(d,B.c,w,w,w,13),B.f,w,w,new A.o(v,w,w,w,w,w,B.a6),w,22,w,w,w,w,w,22),B.bp,new A.dm(1,B.ci,A.f2(B.a3,A.d(e+"  $"+A.dB(f),w,w,w,w,w,w,B.o8,w,w,w),B.f,B.eg),w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aoW(d,e,f){var w=null,v=this.f===f,u=v?D.bUD:new A.a7(B.a3,B.a7,B.x,A.a([B.c.j(0.08),B.c.j(0.03)],x.O),w,w),t=A.I(v?B.c.j(0.6):D.eH.j(0.25),B.q,1),s=v?A.a([new A.ac(0,B.G,B.aw.j(0.45),B.J,18)],x.V):w
u=A.dg(w,A.W(d,v?D.aaV:D.eH,w,w,w,26),w,w,B.cr,new A.o(w,w,t,w,s,u,B.a6),B.ET,w,62,w,w,w,w,62)
return A.aE(B.c5,new A.a6(92,w,A.v(A.a([u,D.eKT,A.d(e,w,w,w,w,w,w,A.l(w,w,v?B.c:B.aR,w,w,w,w,w,w,w,w,12.5,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dfD(this,f),w,w,w,w,w,w,!1,B.a8)},
c_Y(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=A.d4(a1.a.a)
if(a2==null)a2=0
w=a0?D.eH:B.cs
v=a2>0
u=new C.dfP(e,w)
t=new C.dfO()
s=e.f
r=A.m(26)
q=x.O
p=A.a([w.j(0.1),B.td,B.td],q)
o=A.I(w.j(0.22),B.q,1)
n=x.V
m=A.a([new A.ac(0,B.G,B.w.j(0.35),B.eT,22)],n)
l=w.j(0.15)
l=A.p(d,A.W(a0?B.vx:B.tM,w,d,d,d,18),B.f,d,d,new A.o(l,d,d,d,d,d,B.a6),d,34,d,d,d,d,d,34)
k=A.D(A.d(a0?"Add money":"Take money out",d,d,d,d,d,d,B.fN,d,d,d),1)
j=B.c.j(0.06)
i=A.m(99)
h=x.p
i=A.A(A.a([l,B.av,k,A.p(d,A.A(A.a([A.W(B.hY,w,d,d,d,14),A.d("Cash App",d,d,d,d,d,d,A.l(d,d,B.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,B.H,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),B.m,d,B.e,B.Q,0,d,d),B.f,d,d,new A.o(j,d,d,i,d,d,B.n),d,d,d,d,B.kJ,d,d,d)],h),B.m,d,B.e,B.j,0,d,d)
l=A.d("$",d,d,d,d,d,d,A.l(d,d,v?w:B.c_,d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=A.a([new A.u4(A.af("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=A.A(A.a([new A.C(B.ia,l,d),B.d8,A.aUN(new A.cU(D.aY5,A.aL(d,B.T,!1,d,!0,B.r,d,A.aM(),a1,w,d,d,d,d,2,A.br(d,B.ey,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,A.l(d,d,B.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.ai,d,d,k,d,d,B.dU,d,d,d,1,d,d,!1,"\u2022",d,new C.dfN(e),d,d,d,!1,d,d,!1,d,!0,d,B.a9,d,d,d,d,d,d,d,d,d,d,d,D.f5c,!0,B.L,d,B.am,d,d,d,d),d),d)],h),B.F,d,B.bb,B.j,0,d,d)
a1=v?120:60
a1=A.av(A.dg(d,d,d,d,B.bc,new A.o(d,d,d,A.m(99),d,new A.a7(B.a3,B.a7,B.x,A.a([w.j(0),w,w.j(0)],q),d,d),B.n),B.a1,d,3,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+A.dB(10)+" \xb7 admin sends it to your Cash App."
q=A.d(q,d,d,d,d,d,d,A.l(d,d,B.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,B.a4,d,1.35,!0,d,d,d,d,d,d,d,d),B.L,d,d)
l=A.a([],h)
j=a0?D.bYm:D.cc_
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=A.a([i,B.bw,k,B.an,a1,B.P,q,B.aA,A.A(l,B.m,d,B.e,B.j,0,d,d)],h)
if(!a0){q=B.c.j(0.04)
l=A.W(B.hY,w,d,d,d,d)
k=A.l(d,d,B.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,B.O,d,d,!0,d,d,d,d,d,d,d,d)
l=A.a([B.aA,A.aL(d,B.T,!1,d,!0,B.r,d,A.aM(),e.e,d,d,d,d,d,2,A.br(d,d,d,d,d,d,d,d,!0,new A.b4(4,A.m(16),new A.aA(B.c.j(0.08),1,B.q,-1)),d,d,d,d,d,q,!0,d,d,d,d,new A.b4(4,A.m(16),new A.aA(w,1,B.q,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.ai,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a9,d,d,d,d,d,d,d,d,d,d,d,B.np,!0,B.a5,d,B.am,d,d,d,d)],h)
if(v){q=B.c.j(0.04)
k=A.m(16)
B.d.v(l,A.a([B.ac,A.p(d,A.v(A.a([t.$2("Amount","$"+A.dB(a2)),t.$3$color("Fee (15%)","\u2212 $"+A.dB(a2*0.15),B.f3),A.ix(B.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+A.dB(a2*0.85),!0,D.eH)],h),B.m,d,B.e,B.j,0,B.p),B.f,d,d,new A.o(q,d,d,k,d,d,B.n),d,d,d,d,B.iR,d,d,d)],h))}B.d.v(a1,l)}a1.push(B.aP)
q=A.m(18)
l=a0?B.Q5:P.art
n=A.a([new A.ac(0,B.G,(a0?B.aZ:B.dS).j(0.45),B.dk,18)],n)
k=a0?e.gcsJ():e.gcAl()
j=A.W(a0?B.MC:B.le,d,d,d,d,20)
if(a0)i=v?"Deposit $"+A.dB(a2):"Deposit funds"
else i=v?"Withdraw $"+A.dB(a2):"Request withdrawal"
a1.push(new A.a6(d,54,A.bZ(A.lq(j,A.d(i,d,d,d,d,d,d,B.p0,d,d,d),k,A.fl(d,d,B.K,d,d,d,d,d,d,B.c,d,d,d,B.K,new A.b7(A.m(18),B.Y),d,d,d,d,d)),new A.o(d,d,d,q,n,new A.a7(B.a3,B.a7,B.x,l,d,d),B.n),B.bd),d))
return A.p(d,A.v(a1,B.aj,d,B.e,B.j,0,B.p),B.f,d,d,new A.o(d,d,o,r,m,new A.a7(B.b0,B.b6,B.x,p,B.PB,d),B.n),d,d,new A.cw("form"+s,x.W),d,B.xp,d,d,d)},
bVx(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=A.T(a2).k("a2<1>"),a4=A.B(new A.a2(a2,new C.dfH(a0),a3),a3.k("J.E"))
B.d.b_(a4,new C.dfI())
w=B.a.i(a0.a.e.toLowerCase())
a2=A.V(x.N,x.o)
a3=$.fr9
a3=a3==null?a1:a3.$0()
a3=J.aW(a3==null?B.i1:a3)
while(a3.C()){v=a3.gU(a3)
u=v.a
if(u.length!==0&&B.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,A.L)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("bc<2>")
a2=A.B(new A.bc(a2,a3),a3.k("J.E"))
r=C.hW4(a2,A.Kt(a0.a.e,new C.dfJ(a0)))
a2=A.m(24)
a3=A.I(B.c.j(0.07),B.q,1)
v=A.m(99)
u=A.m(99)
q=x.p
u=A.a([A.A(A.a([D.bvB,A.aK(!1,v,!0,A.p(a1,D.eF7,B.f,a1,a1,new A.o(a1,a1,A.I(D.eH.j(0.4),B.q,1),u,a1,a1,B.n),a1,a1,a1,a1,B.mg,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.dfK(a0),a1,a1,a1,a1,a1,a1,a1)],q),B.m,a1,B.e,B.j,0,a1,a1),B.S],q)
if(a4.length===0)u.push(new A.C(D.bnJ,A.v(A.a([A.W(B.Ft,B.c.j(0.25),a1,a1,a1,40),B.S,D.fqg],q),B.m,a1,B.e,B.j,0,B.p),a1))
else{v=A.a([],q)
for(p=A.dc(a4,0,A.dJ(a0.r,"count",x.S),A.T(a4).c),o=p.$ti,p=new A.bW(p,p.gM(0),o.k("bW<aj.E>")),o=o.k("aj.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===B.eK||k===B.jH||k===B.eo
if(l===B.cl)i=j?B.cj:D.eH
else i=l===B.ds?B.iB:B.fY
h=j?"-":"+"
l=B.c.j(0.06)
k=i.j(0.14)
g=new A.aA(i.j(0.4),1,B.q,-1)
k=A.p(a1,A.W(j?B.tM:B.vx,i,a1,a1,a1,19),B.f,a1,a1,new A.o(k,a1,new A.bP(g,g,g,g),a1,a1,a1,B.a6),a1,42,a1,a1,a1,a1,a1,42)
f=a0.bPr(n)
e=C.h8a(n.y)
d=B.c.j(0.5)
f=A.a([new A.x(f,a1,B.jn,a1,a1,a1,a1,a1,a1,a1,a1,a1),B.bA,new A.x(e,a1,new A.G(!0,d,a1,a1,a1,a1,11,B.a4,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1)],q)
e=n.f
if(B.a.i(e==null?"":e).length!==0){e.toString
d=B.c.j(0.4)
f.push(new A.x(e,a1,new A.G(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,B.a2,a1,1,a1,a1))}if(m!=null&&n.x!==B.k4)f.push(new A.C(E.afO,new A.BP(B.bB,5,4,B.bs,A.a([a0.aM7("Before",m.b),a0.aM7("After",m.a)],q),a1),a1))
m=A.v(f,B.F,a1,B.e,B.j,0,B.p)
f=n.c
f=f===0?"\u2014":h+"$"+A.dB(f)
e=i.j(0.14)
d=new A.aV(99,99)
n=C.hfh(n)
v.push(A.p(a1,new A.cl(B.aO,B.e,B.j,B.m,a1,B.p,a1,0,A.a([k,B.bf,new A.bD(1,B.bi,m,a1),B.ab,A.v(A.a([new A.x(f,a1,new A.G(!0,i,a1,a1,a1,a1,15,B.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.at,A.p(a1,new A.x(n,a1,new A.G(!0,i,a1,a1,a1,a1,9.5,B.H,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.f,a1,a1,new A.o(e,a1,a1,new A.bp(d,d,d,d),a1,a1,B.n),a1,a1,a1,a1,B.AV,a1,a1,a1)],q),B.dF,a1,B.e,B.j,0,B.p)],q),a1),B.f,a1,a1,new A.o(a1,a1,new A.bP(B.Y,B.Y,new A.aA(l,1,B.q,-1),B.Y),a1,a1,a1,B.n),a1,a1,a1,a1,B.v3,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(A.hc(D.bKB,A.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,B.cc,a1,a1,a1),new C.dfL(a0),A.fv(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.eH,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
B.d.v(u,v)}return A.p(a1,A.v(u,B.aj,a1,B.e,B.j,0,B.p),B.f,a1,a1,new A.o(B.td,a1,a3,a2,a1,a1,B.n),a1,a1,D.fHx,a1,D.bpS,a1,a1,a1)},
aM7(d,e){var w=null,v=B.c.j(0.05),u=A.m(7),t=A.I(B.c.j(0.1),B.q,1),s=A.dq(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=A.dB(e)
return A.p(w,A.X3(A.dq(A.a([s,A.dq(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.f2F,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.n6,w,w,w)},
aUj(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(B.a.t(w,"clock-in session started"))return!1
v=d.d
if(v===B.eo)return d.c>0
if(A.rG(d))return!1
if(v===B.fq||v===B.eK)return!0
if(v===B.od||v===B.jH)return!0
if(v===B.k5)return!0
if(v===B.fB)return B.a.t(w,"clock-in")||d.c>0
return!1},
bPr(d){var w,v=d.f
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
C.b93.prototype={
a5(d,e){var w,v,u,t
$.X()
w=A.M()
w.r=D.b7y.j(0.55).gp(0)
w.c=1
v=e.a
u=v*0.35
t=e.b
d.bA(new A.u(u,0),new A.u(u,t),w)
u=v*0.65
d.bA(new A.u(u,0),new A.u(u,t),w)
t*=0.5
d.bA(new A.u(0,t),new A.u(v,t),w)},
aq(d){return!1}}
C.btv.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null
for(w=a4.b,v=this.b,u=v*6.283185307179586,t=a4.a,s=0+t,r=x.O,q=a3.a,p=0;p<3;++p){o=w*(0.2+0.25*p)+Math.sin(u+p*2)*14-40
n=new A.aa(0,o,s,o+80)
m=[B.b7,B.h0,B.bt][p]
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.sau(new A.a7(B.b0,B.b6,B.x,A.a([m.j(0),m.j(0.1),m.j(0)],r),a2,a2).aw(0,n))
l=o.H()
q.drawRect(A.c4(n),l)
l.delete()}for(k=0;k<46;++k){s=k*12.9898
j=Math.sin(s+78.233)*43758.5453
j=(j-Math.floor(j))*t
i=Math.sin(s+156.466)*43758.5453
h=(i-Math.floor(i))*w
g=0.25+0.75*(0.5+0.5*Math.sin(u*(1+B.o.F(k,3))+k))
i=Math.sin(s+234.699)*43758.5453
s=Math.floor(i)
$.X()
r=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.55*g).gp(0)
l=r.H()
q.drawCircle(j,h,0.7+(i-s)*1.5,l)
l.delete()
if(B.o.F(k,9)===0){f=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
f.r=B.op.j(0.35*g).gp(0)
f.c=1
l=f.H()
q.drawLine.apply(q,[j-4,h,j+4,h,l])
l.delete()
l=f.H()
q.drawLine.apply(q,[j,h-4,j,h+4,l])
l.delete()}}for(u=-t*0.35,s=w*0.2,r=t*0.08,o=-w*0.02,v*=2,k=0;k<2;++k){f=B.k.F(v+k*0.5,1)
if(f>0.35)continue
p=f/0.35
e=t*(0.75-k*0.4)+u*p
d=w*(0.1+k*0.12)+s*p
$.X()
a0=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
a0.r=B.c.j(0.7*(1-p)).gp(0)
a0.c=1.6
a0.d=B.bO
l=a0.H()
q.drawLine.apply(q,[e+r,d+o,e,d,l])
l.delete()}for(u=t*0.62,w*=0.36,k=0;k<4;++k){f=B.k.F(v+k*0.25,1)
t=B.op.j(0.5*Math.sin(f*3.141592653589793))
a1=new A.ko(new A.eo("z",a2,a2,B.cO,a2,a2,a2,a2,a2,a2,new A.G(!0,t,a2,a2,a2,a2,12+f*14,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),B.a5,B.ch,new A.jo(1),a2,a2,a2,a2,B.cd,a2)
a1.eP()
a1.a5(a3,new A.u(u+Math.sin(f*6.283185307179586+k)*12+k*8,w-f*90))}},
aq(d){return d.b!==this.b}}
C.aJw.prototype={
aQ(){this.aX()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdH())
w.b2$=null
w.a2()}}
C.bvr.prototype={}
C.aYF.prototype={}
C.ZC.prototype={
T(){return new C.aCt(new A.ar(B.as,$.aw()))},
cOk(d,e){return this.d.$2(d,e)}}
C.aCt.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
aXN(){var w=this,v=B.a.i(w.d.a.a),u=A.af("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.m(new C.e2Z(w))
return}u=w.c
u.toString
A.a5(u,!1).N(null)
w.a.cOk(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=A.aI(a0,B.eD,e).w
e=A.aI(a0,B.e7,e).w
w=A.av(A.p(f,f,B.f,f,f,new A.o(B.b2,f,f,A.m(2),f,f,B.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=A.A(A.a([A.p(f,D.bK0,B.f,f,f,new A.o(f,f,f,f,A.a([new A.ac(0,B.G,B.fg.j(0.5),B.J,18)],v),D.anc,B.a6),f,52,f,f,f,f,f,52),B.eB,A.D(A.v(A.a([D.feb,B.bA,A.d(g.a.c,f,1,B.a2,f,f,f,B.oZ,f,f,f)],u),B.F,f,B.e,B.j,0,B.p),1),A.aH(f,f,f,f,D.bKP,f,f,f,new C.e31(a0),f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,f,f)
s=g.b3E(B.eR,"You",B.cs)
r=B.aM.j(0.15)
q=A.m(99)
q=A.A(A.a([s,new A.C(B.l7,A.p(f,D.fi7,B.f,f,f,new A.o(r,f,A.I(B.aM.j(0.6),B.q,1),q,f,f,B.n),f,f,f,f,B.fH,f,f,f),f),g.b3E(B.vu,"Your friend",B.bV)],u),B.m,f,B.e,B.j,0,f,f)
r=B.c.j(0.06)
s=A.m(16)
p=B.c.j(0.12)
o=A.m(16)
n=g.f
if(n.length===0)n=f
o=A.aL(f,B.T,!0,f,!0,B.r,f,A.aM(),g.d,f,f,f,f,f,2,A.br(f,f,f,f,f,f,f,f,!0,new A.b4(4,s,new A.aA(p,1,B.q,-1)),f,f,f,f,n,r,!0,f,f,f,f,new A.b4(4,o,D.aWR),f,f,f,f,f,f,f,f,N.D1,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.bNe,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,f,!1,f,B.ai,f,f,f,f,f,B.lY,f,f,f,1,f,f,!1,"\u2022",f,new C.e32(g),f,new C.e33(g),f,!1,f,f,!1,f,!0,f,B.a9,f,f,f,f,f,f,f,f,f,f,f,B.iF,!0,B.a5,f,B.am,f,f,f,f)
r=A.a([],u)
for(m=0;m<4;++m){l=D.c72[m]
s=new A.aV(14,14)
p=g.e===l
n=p?D.anb:f
p=p?f:B.c.j(0.06)
k=new A.aA(g.e===l?B.az:B.bF,1,B.q,-1)
j=""+l
i=l===1?"game":"best of "+j
h=B.c.j(0.7)
s=A.a([new A.bD(1,B.bi,A.aE(f,A.dg(f,A.v(A.a([new A.x(j,f,B.du,f,f,f,f,f,f,f,f,f),new A.x(i,f,new A.G(!0,h,f,f,f,f,10,B.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,B.p),f,f,B.bc,new A.o(p,f,new A.bP(k,k,k,k),new A.bp(s,s,s,s),f,n,B.n),B.eE,f,f,f,B.eZ,f,f,f),B.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.e34(g,l),f,f,f,f,f,f,!1,B.a8),f)],u)
if(l!==7)s.push(B.ab)
B.d.v(r,s)}s=A.A(r,B.m,f,B.e,B.j,0,f,f)
r=A.A(A.a([A.W(B.lc,B.c.j(0.5),f,f,f,15),B.bp,A.D(A.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,A.l(f,f,B.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),B.m,f,B.e,B.j,0,f,f)
p=A.m(18)
v=A.a([new A.ac(0,B.G,B.bz.j(0.4),B.cv,18)],v)
n=g.e
j=n===1?"":"s"
return new A.C(new A.Q(0,0,0,d.f.d+e.r.d),A.p(f,A.v(A.a([w,B.aP,t,B.bw,q,B.bw,D.flT,B.an,o,B.aP,D.fq4,B.P,s,B.aA,r,B.aP,new A.a6(f,54,A.bZ(A.hc(D.alu,A.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,B.fN,f,f,f),g.gc51(),f),new A.o(f,f,f,p,v,D.bTu,B.n),B.bd),f)],u),B.aj,f,B.e,B.Q,0,B.p),B.f,f,f,D.aYT,f,f,f,f,D.bra,f,f,f),f)},
b3E(d,e,f){var w=null,v=f.j(0.1),u=A.m(16),t=A.I(f.j(0.45),B.q,1)
return A.D(A.p(w,A.v(A.a([A.W(d,f,w,w,w,24),B.at,A.d(e,w,w,w,w,w,w,B.Td,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eZ,w,w,w),1)}}
C.oV.prototype={}
C.bov.prototype={
a5(d,e){var w,v,u,t,s,r=null,q=e.a/2,p=new A.u(q,e.b/2),o=q-4
for(q=d.a,w=0;w<37;++w){$.X()
v=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
if(w===0)u=B.bo
else u=(w&1)===0?B.bI:B.M
v.r=u.gp(0)
u=A.bU(p,o)
t=v.H()
q.drawArc.apply(q,[A.c4(u),(w*2*3.141592653589793/37-1.5707963267948966)*57.29577951308232,9.72972972972973,!0,t])
t.delete()}$.X()
q=A.M()
q.r=B.fv.gp(0)
q.b=B.ae
q.c=8
d.ai(p,o,q)
q=A.M()
q.r=B.aM.gp(0)
d.ai(p,o*0.22,q)
q=this.b
if(q!=null){s=A.ii(r,r,r,r,A.dq(r,r,r,r,r,r,r,r,r,B.aP7,A.t(q)),B.a5,B.ch,r,B.eq,B.cd)
s.eP()
q=s.b
u=q.c
q=q.a.c
s.a5(d,p.aC(0,new A.u(u/2,q.gbc(q)/2)))}},
aq(d){return d.b!=this.b}}
C.E9.prototype={
a4(){return"NgmyProMoveResult."+this.b}}
C.apK.prototype={
gjT(){var w=this.d
w=w==null?null:w.a
return w!==!1},
bm4(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.fOk("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.bWl()
w=s.gjT()
v=s.d
s.c=w?"You ("+v.b+") vs NGMY \u2014 capture all opponent discs":v.b+" vs "+v.c+" \u2014 capture all discs"
break
case"tic_tac_go":s.b=1
s.at=A.c2(9,"",!1,x.N)
s.ax=!0
if(s.gjT())w="You are X vs NGMY (O) \u2014 get 3 in a row"
else{w=s.d
w=w.b+" (X) vs "+w.c+" (O)"}s.c=w
break
case"blackjack_vegas":s.b=1
w=x.t
s.ay=A.a([1+e.aA(10),1+e.aA(10)],w)
s.ch=A.a([1+e.aA(10),1+e.aA(10)],w)
s.CW=!1
s.c="Beat the dealer \u2014 don't bust over 21"
break
case"roulette_euro":s.b=1
s.cx=null
s.c="Pick a number \u2014 spin the wheel"
break
case"slots_jackpot":s.b=1
s.db=A.a([e.aA(6),e.aA(6),e.aA(6)],x.t)
s.c="Match 3 symbols for jackpot"
break
case"billiards_snooker":s.b=1
s.dx=e.aj()*3.141592653589793*2
s.c=s.gjT()?"Aim and shoot \u2014 beat NGMY on the snooker table":"Aim and shoot \u2014 pocket balls"
break
case"connect_four_pro":s.b=1
u=J.e2(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=A.c2(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gjT())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.aWe(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aCo.h(0,d)
s.c=w==null?"Play to earn":w}},
b8g(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gjT()
if(o)return
o=x.N
s.x=A.a1(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b6(w,new C.cbb(),o)
v=A.B(v,v.$ti.k("aj.E"))
s.at=v
if(v.length<9){v=A.B(v,o)
B.d.v(v,A.c2(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=B.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===B.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cxR(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.apr(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b6(t,new C.cbc(),x.L)
o=A.B(o,o.$ti.k("aj.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)B.d.L(v,A.c2(7,0,!1,o))}if(A.iF(e.h(0,q)))o=A.ed(e.h(0,q))
else{o=A.c7(A.t(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bC9(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.apr(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b6(t,new C.cbd(),x.L)
o=A.B(o,o.$ti.k("aj.E"))
s.y=o}if(A.iF(e.h(0,p)))o=A.ed(e.h(0,p))
else{o=A.c7(A.t(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bDp(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.apr(e,f)
break}},
cI4(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=A.a1(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",A.bl(w.at,!0,q))
o.n(0,"turnEmail",w.aAe())
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
p=A.T(q).k("K<1,ai<H>>")
q=A.B(new A.K(q,new C.cbf(),p),p.k("aj.E"))
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
p=A.T(q).k("K<1,ai<H>>")
q=A.B(new A.K(q,new C.cbg(),p),p.k("aj.E"))
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
default:q=A.dT(o,q,p)
q.n(0,v,w.e)
q.n(0,s,w.w)
return q}},
aAe(){var w,v,u,t=this
if(t.gjT()){if(t.ax){w=t.d
w=w==null?null:w.d
if(w==null)w=""}else w="ngmy@system"
return w}w=t.x.h(0,"playerXEmail")
if(w==null){w=t.d
w=w==null?null:w.d}v=B.a.i(J.k(w==null?"":w).toLowerCase())
w=t.x.h(0,"playerOEmail")
if(w==null){w=t.d
w=w==null?null:w.e}u=B.a.i(J.k(w==null?"":w).toLowerCase())
return t.ax?v:u},
apr(d,e){var w,v=this,u=B.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
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
cxR(d,e){var w,v,u,t,s,r="playerXEmail"
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
bC9(d,e){var w,v,u,t,s
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
bDp(d,e){var w,v,u,t,s,r,q
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
T0(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gjT())return s
w=B.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return B.a.i(J.k(s==null?u.aAe():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
bWl(){var w,v,u=this,t=J.e2(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=A.iq(8,new C.cb8(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
aWe(d){var w=20+d.aA(80),v=w+10+d.aA(50),u=4+d.aA(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bN(0,B.c3)},
cRL(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gjT())w=1
else{v=r.d
v=v==null?null:v.d
w=r.T0(q,v==null?"":v)?r.z:-1}if(!r.gjT()){v=r.d
v=v==null?null:v.d
v=!r.T0(q,v==null?"":v)}else v=!1
if(v)return!1
u=r.gjT()?r.z:w
if(!r.gjT()&&u!==r.z)return!1
t=J.q(r.y[d],e)
v=r.Q
if(v==null){if(t===r.z)v=!r.gjT()||t===1
else v=!1
if(v){r.Q=d
r.as=e}return!1}s=r.as
s.toString
if(d===v&&e===s){r.as=r.Q=null
return!1}if(Math.abs(d-v)===1&&Math.abs(e-s)===1&&t===0&&B.o.F(d+e,2)===1){J.aG(r.y[d],e,r.z)
J.aG(r.y[v],s,0)
r.as=r.Q=null
r.z=r.z===1?2:1
if(r.a86(2)){r.a9G(1)
return!0}if(r.a86(1)){r.a9G(2)
return!0}if(r.gjT()&&r.z===2){r.byc(f)
if(r.a86(2)){r.a9G(1)
return!0}if(r.a86(1)){r.a9G(2)
return!0}}}return!1},
a9G(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
t.e=!0
w=t.f=d===1
if(t.gjT()){if(w){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+s}else v="NGMY wins \u2014 your discs are gone"
v=t.w=v}else{v=t.d
if(w){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+s}t.a=w?1:0
t.c=v
return!0},
byc(d){var w,v,u,t,s,r,q,p,o,n=this,m=A.a([],x.B)
for(w=x.t,v=0;v<8;++v)for(u=0;u<8;++u){if(J.q(n.y[v],u)!==2)continue
for(t=[A.a([1,-1],w),A.a([1,1],w)],s=0;s<2;++s){r=t[s]
q=v+r[0]
p=u+r[1]
if(q>=0&&q<8&&p>=0&&p<8&&J.q(n.y[q],p)===0&&B.o.F(q+p,2)===1)m.push(A.a([v,u,q,p],w))}}w=m.length
if(w===0)return
o=m[d.aA(w)]
J.aG(n.y[o[2]],o[3],2)
J.aG(n.y[o[0]],o[1],0)
n.z=1},
a86(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)for(t=J.aW(w[u]);t.C();)if(t.gU(t)===d)return!1
return!0},
cRM(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.pX
if(!s.gjT()){w=s.d
w=w!=null&&!s.T0("tic_tac_go",w.d)}else w=!1
if(w)return D.pX
if(s.gjT())v="X"
else{w=B.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===B.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.ahV(v))return s.aRb(v,!0)
if(!B.d.t(s.at,""))return s.aRc()
s.ax=!s.ax
if(!s.gjT()){s.x.n(0,"turnEmail",s.aAe())
s.c=s.aVL()
return D.pX}if(s.gjT()){t=s.cfT(e)
if(t>=0){s.at[t]="O"
if(s.ahV("O"))return s.aRb("O",!1)
if(!B.d.t(s.at,""))return s.aRc()
s.ax=!0}}s.c=s.gjT()?"Your turn \u2014 you are X":s.aVL()
return D.pX},
aVL(){var w=this.d
if(w==null)return"Take your turn"
return this.T0("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aRb(d,e){var w,v,u=this
u.e=!0
u.f=e
u.r=!1
if(u.gjT()){if(e){w=u.d
w=w==null?null:w.b
w=(w==null?"You":w)+" wins with "+d+"!"}else w="NGMY wins with "+d+"!"
w=u.w=w}else{w=u.d
if(e){w=w==null?null:w.b
v=w==null?"You":w}else{w=w==null?null:w.c
v=w==null?"Opponent":w}w=u.w=v+" wins with "+d+"!"}u.c=w
u.a=e?1:0
return e?D.pY:D.Hs},
aRc(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.R1},
cfT(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.ahV("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.ahV("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.cUn[u]
if(v[w].length===0)return w}return-1},
ahV(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.d0w[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a2t(d){return B.d.cI(d,0,new C.cbe())},
cBY(d){this.ay.push(1+d.aA(10))
if(this.a2t(this.ay)>21)return!0
return!1},
cBZ(d){var w,v,u,t=this
while(t.a2t(t.ch)<17)t.ch.push(1+d.aA(10))
t.CW=!0
w=t.a2t(t.ay)
v=t.a2t(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cHx(d,e){var w,v,u,t=this
if(t.e)return D.pX
if(!t.gjT()){w=t.d
w=w!=null&&!t.T0("connect_four_pro",w.d)}else w=!1
if(w)return D.pX
if(t.gjT())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.pX
if(!t.af2(d,w))return D.pX
if(t.a7X(t.fx))return t.aR9(t.fx,!0)
if(t.aMW())return t.aRa()
w=t.fx===1?2:1
t.fx=w
if(t.gjT()&&w===2){u=t.cfh(e)
if(u>=0){t.af2(u,2)
if(t.a7X(2))return t.aR9(2,!1)
if(t.aMW())return t.aRa()
t.fx=1}}t.c=t.gjT()?"Your turn \u2014 drop a red disc":t.bC8()
return D.pX},
bC8(){var w=this.d
if(w==null)return"Drop a disc"
return this.T0("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
af2(d,e){var w
for(w=5;w>=0;--w)if(J.q(this.fr[w],d)===0){J.aG(this.fr[w],d,e)
return!0}return!1},
aMW(){for(var w=0;w<7;++w)if(J.q(this.fr[0],w)===0)return!1
return!0},
aR9(d,e){var w,v,u,t=this
t.e=!0
t.f=e
t.r=!1
w=d===1?"red discs":"gold discs"
if(t.gjT()){if(e){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+" wins with "+w+"!"}else v="NGMY wins with "+w+"!"
v=t.w=v}else{v=t.d
if(e){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+" wins with "+w+"!"}t.c=v
t.a=e?1:0
return e?D.pY:D.Hs},
aRa(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.R1},
cfh(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.af2(w,2)
v=r.a7X(2)
r.b5X(w)
if(v)return w}for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.af2(w,1)
u=r.a7X(1)
r.b5X(w)
if(u)return w}t=A.a([],x.t)
for(w=0;w<7;++w)if(J.q(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aA(s)]},
b5X(d){var w
for(w=0;w<6;++w)if(J.q(this.fr[w],d)!==0){J.aG(this.fr[w],d,0)
return}},
a7X(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.q(this.fr[w],v)!==d)continue
if(this.bCa(w,v,d))return!0}return!1},
bCa(d,e,f){var w,v,u,t=new C.cb7(this,d,e,f)
for(w=x.t,w=[A.a([0,1],w),A.a([1,0],w),A.a([1,1],w),A.a([1,-1],w)],v=0;v<4;++v){u=w[v]
if(t.$2(u[0],u[1])+t.$2(-u[0],-u[1])-1>=4)return!0}return!1},
b9c(d){var w=this
if(B.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.aWe(d)}return w.a>=w.b}}
C.aqG.prototype={
T(){return new C.aDh(null,null)},
cNe(d){return this.e.$1(d)}}
C.aDh.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bmP,null,1,null,v)
w.f9(0,!0)
v.d=w
v.a.d.aM(0,v.gaYe())
v.awf()},
br(d){var w
this.bE(d)
w=this.a
if(d.c!==w.c){w.d.bN(0,B.c3)
this.awf()}},
awf(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.ags(t,u)
C.ags(t,u)
w.a.cNe(s)
w.a.toString
w.m(new C.eAV())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
q(){var w,v=this
v.a.d.a3(0,v.gaYe())
w=v.d
w===$&&A.c()
w.q()
v.btZ()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.ags(j,i),g=C.ags(j,i),f=j.length,e=i.length,d=A.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&A.c()
u=new A.aV(1,1)
d.push(new A.w0(new A.cX(v,!1,A.p(l,l,B.f,l,l,new A.o(B.aM,l,l,new A.bp(u,u,u,u),A.a([new A.ac(0,B.G,B.aM.j(0.6),B.J,6)],k),l,B.n),l,22,l,B.LO,l,l,l,3),l),B.RA,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new A.eo(v,l,l,B.cO,l,l,l,l,l,l,D.f_R))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=B.c.j(0.4)
q=B.cu}else if(s===t){r=B.b8
q=B.O}else{r=B.ay
q=B.H}d.push(new A.eo(t,l,l,B.cO,l,l,l,l,l,l,new A.G(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&A.c()
d.push(new A.w0(new A.cX(k,!1,A.p(l,l,B.f,B.aM,l,l,l,22,l,l,l,l,l,3),l),B.RA,l,l))}p=f===0?0:B.k.V(h/f*100)
k=B.w.j(0.35)
v=A.m(12)
u=A.I(B.b2,B.q,1)
o=x.p
v=A.p(l,A.v(A.a([A.A(A.a([m.aYd("Correct",""+h,B.bo),B.ab,m.aYd("Wrong / missed",""+(f-g),B.ay),B.b4,A.d(""+p+"% accuracy",l,l,l,l,l,l,G.a6A,l,l,l)],o),B.m,l,B.e,B.j,0,l,l),B.an,D.fjf],o),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(k,l,u,v,l,l,B.n),l,l,l,l,B.bk,l,l,l)
u=A.D(A.cd(new A.a8Y(l,A.dq(d,l,l,l,l,l,l,l,l,l,l),l,l,l),B.r,l,B.y,l,l,l,l,B.ah),1)
k=m.a.d
g=A.l(l,l,B.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.w.j(0.35)
return A.v(A.a([v,B.ac,u,B.S,A.aL(l,B.T,!0,l,!0,B.r,l,A.aM(),k,l,l,l,l,l,2,A.br(l,new A.b4(4,A.m(12),B.Y),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new A.b4(4,A.m(12),D.aWK),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.y,!0,l,!0,l,!1,l,B.ai,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,B.a9,l,l,l,l,l,l,l,l,l,l,l,D.aP6,!0,B.a5,l,B.am,l,l,l,l)],o),B.aj,l,B.e,B.j,0,B.p)},
aYd(d,e,f){var w=null,v=f.j(0.15),u=A.m(8)
return A.p(w,A.d(d+": "+e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(v,w,w,u,w,w,B.n),w,w,w,w,B.fH,w,w,w)}}
C.aL3.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
var z=a.updateTypes(["ay<~>()","~()","H(i1,i1)","~([x3?])","R(qy)","qy()","H(r8,r8)","R(r8)","H(r9,r9)","OM(Y)","R(i1)","cK(acL)","Zj(Y)","Yq(Y)","adw(Y)","a5J(Y)","MV(Y)","acm(Y,hD<ai<j5>>)","acl(Y,H)","r(qy)","r8(a3<@,@>)","~(E9,apK)","MN(Y)","a3<n,@>(r8)","r9(a3<@,@>)","a3<n,@>(kl)","a3<n,@>(r9)","R(r9)","a3<n,@>(lw)","lw(@)","a3<n,@>(ig)","ig(@)","i1(@)","ay<~>(kl)","a3<n,@>(i1)","~(H,H)","i1(i1)","Uw(Y)","ay<R>(ai<i1>)","Zi(Y)","~(i1)","a_4(Y)","Ux(Y)","n(i1)","R(lw)","wH(bu<H,lw>)","aaU(Y,H)","H(ig,ig)","aaM(lw)","r(rf)","bD(I8)","YP(Y)","~(d2{bumpWalletRevision:R,cloudRequest:R})","~(n,N,N,N)","N(S)","~(d2)","ZC(Y)","~(E9)","n(n)","a_5(Y)"])
C.cpH.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.cpI(r,w,s.b,v,s.d)
t=s.e
r.b=A.dA(t,u)
v.r=new C.cpE(r)
v.e=new C.cpF(r,w)
v.f=new C.cpG(r,w,t,u)},
$S:0}
C.cpI.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.lt(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=A.a9(r)
u=A.ce(r)
s=v
q=u
p=A.FF(s,q)
if(p==null)p=new A.j2(s,q==null?A.a26(s):q)
t=p
o.d.hl(t.a,t.b)
return}o.d.L(0,w)}else{o.e.a(null)
o.d.L(0,null)}},
$S:41}
C.cpE.prototype={
$0(){this.a.b.a8(0)
return $.Gi()},
$S:1623}
C.cpF.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.as8.$0()
this.a.b.a8(0)},
$S:0}
C.cpG.prototype={
$0(){var w,v=this,u=v.b,t=A.dC(0,0,u.gbbh(),0,0,0)
u.j0(0)
u=v.c
w=v.a
w.b=A.cM(new A.b9(u.a-t.a),new C.cpD(w,u,v.d))},
$S:0}
C.cpD.prototype={
$0(){var w=this.c
this.a.b=A.dA(this.b,w)
w.$1(null)},
$S:0}
C.eWS.prototype={
$1(d){var w=this.a
w.m(new C.eWR(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.eWR.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hD(D.af1,this.b,null,null,v.$ti.k("hD<1>"))},
$S:0}
C.eWU.prototype={
$2(d,e){var w=this.a
w.m(new C.eWP(w,d,e))},
$S:55}
C.eWP.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hD(D.af1,null,this.b,this.c,v.$ti.k("hD<1>"))},
$S:0}
C.eWT.prototype={
$0(){var w=this.a
w.m(new C.eWQ(w))},
$S:0}
C.eWQ.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hD(B.Au,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fv6.prototype={
$1(d){return d.a===this.a&&B.a.i(d.b.toLowerCase())===this.b&&d.x===B.cl},
$S:16}
C.fuZ.prototype={
$1(d){return d},
$S:14}
C.fey.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return A.p(B.A,new A.C(new A.Q(u,0,u,0),A.d("NGMY",w,1,B.eC,w,!1,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,B.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),B.f,w,w,B.a9S,w,v,w,w,w,w,w,v)},
$S:151}
C.fev.prototype={
$3(d,e,f){return this.a.$0()},
$S:137}
C.few.prototype={
$2(d,e){var w,v=this,u=e.b
if(B.a.i(u==null?"":u).length!==0){u.toString
w=B.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return A.kj(w,B.A,v.d,new C.feu(v.e),B.fU,v.c,!0,v.b,null,null,v.a)},
$S:1624}
C.feu.prototype={
$3(d,e,f){return this.a.$0()},
$S:137}
C.fex.prototype={
$3(d,e,f){return this.a.$0()},
$S:137}
C.d7y.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.d7J.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.d80.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.d81.prototype={
$1(d){return this.a.J6()},
$S:13}
C.d7R.prototype={
$0(){var w=J.b6(this.b,new C.d7Q(),x.P)
w=A.B(w,w.$ti.k("aj.E"))
this.a.f=w},
$S:0}
C.d7Q.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.d7S.prototype={
$0(){var w=this.a,v=w.a.d.b5,u=A.T(v).k("K<1,a3<n,@>>")
v=A.B(new A.K(v,new C.d7P(),u),u.k("aj.E"))
w.f=v},
$S:0}
C.d7P.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.d7U.prototype={
$0(){var w=this.a,v=w.a.d.b5,u=A.T(v).k("K<1,a3<n,@>>")
v=A.B(new A.K(v,new C.d7T(),u),u.k("aj.E"))
w.f=v},
$S:0}
C.d7T.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.d7M.prototype={
$0(){var w=0,v=A.j(x.c),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.c6H(t.a.c)?2:3
break
case 2:w=4
return A.b(C.aoo(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.m(new C.d7K(t))
case 3:if(t.c!=null)t.m(new C.d7L(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:51}
C.d7K.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d7L.prototype={
$0(){return this.a.d++},
$S:0}
C.d7N.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d7O.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d7E.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.i26(t.a.d.b5,J.k(J.q(u.b,"id")),"rejected")
t.a.bp()
w=2
return A.b(C.agh(t.a.d.b5),$async$$0)
case 2:w=3
return A.b(t.J6(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d7F.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a8(s)
C.hS4(t.a.d.b5,J.k(r.h(s,"id")),t.a.c.c)
t.a.bp()
w=2
return A.b(C.agh(t.a.d.b5),$async$$0)
case 2:w=3
return A.b(t.J6(),$async$$0)
case 3:t.HX(B.d.dM(t.y,new C.d7C(s),new C.d7D(t)),J.k(r.h(s,"id")))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d7C.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d7D.prototype={
$0(){return B.d.gK(this.a.y)},
$S:z+5}
C.d7G.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d7H.prototype={
$0(){return B.d.gK(this.a.y)},
$S:z+5}
C.d7I.prototype={
$0(){return this.a.HX(this.b,J.k(J.q(this.c,"id")))},
$S:0}
C.d7B.prototype={
$0(){return this.a.bZr(this.b)},
$S:0}
C.d7A.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.i2z(u,w.b,new C.d7z(v,w))},
$S:0}
C.d7z.prototype={
$2(d,e){return this.a.agn(this.b,d,e)},
$S:653}
C.d8_.prototype={
$2(d,e){if(d)return
this.a.aQP()},
$S:122}
C.d7Y.prototype={
$2(d,e){var w=this.a
return new A.l5(C.aYE(w.a.c.a),new C.d7X(w,this.b,this.c),null,null,x.gH)},
$S:1626}
C.d7X.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=A.m(12)
v=A.m(12)
u=A.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return A.aF(!1,B.a1,!0,w,A.aK(!1,v,!0,new A.C(B.l8,A.bEq(B.cR,A.W(B.h9,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.d7W(this.a,d),t,t,t,t,t,t,t),B.f,this.b,0,t,t,t,t,t,B.ag)},
$S:1627}
C.d7W.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fro(s.c.a,s.e).eU(new C.d7V())
w=2
return A.b(C.bBN(u.b,t.a.c.a),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d7V.prototype={
$1(d){},
$S:30}
C.d7Z.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dLX.prototype={
$0(){var w=this.a
return A.Kt(w.a.c.a,new C.dLW(w))},
$S:79}
C.dLW.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dLY.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&A.c()
u.bi=t.ae()
v.bp()
w.m(new C.dLV())},
$S:0}
C.dLV.prototype={
$0(){},
$S:0}
C.dLZ.prototype={
$2(d,e){var w,v=this.a
if(!C.c6H(v.a.c)){if($.fOf.t(0,B.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.fOg(this.b,v.x,w)
return!1}C.aoo(v.a.c.a)}if(A.Kt(v.a.c.a,new C.dLU(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aFx()
w=v.a
w.toString
w.hs(new A.d2(B.o.u(1000*Date.now()),v.a.c.a,d,B.jH,B.fb,e,null,null,B.cl,new A.S(Date.now(),0,!1)))
v.a.bp()
return!0},
$S:1628}
C.dLU.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dM_.prototype={
$3$bonus(d,e,f){var w,v=null,u=B.o.u(1000*Date.now()),t=this.a,s=t.a
s.hs(new A.d2(u,s.c.a,d,B.fB,B.fb,e,v,v,B.cl,new A.S(Date.now(),0,!1)))
t.a.bp()
w=f>0?"+$"+B.k.aa(d,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.up(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1629}
C.d7s.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d7v.prototype={
$0(){return A.iL(this.a,null)},
$S:0}
C.d7w.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d7x.prototype={
$1(d){var w=null,v=this.a,u=A.fl(w,w,v.e===d?B.bo:A.Z(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,w,w,w,w,w,w,w,w)
return A.D(new A.C(B.eQ,A.ia(A.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.d7u(v,d),u),w),1)},
$S:206}
C.d7u.prototype={
$0(){var w=this.a
return w.m(new C.d7t(w,this.b))},
$S:0}
C.d7t.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d9k.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.d9n.prototype={
$1(d){this.a.cgd()
return null},
$S:13}
C.d9o.prototype={
$1(d){return this.a.cw1()},
$S:13}
C.d9p.prototype={
$1(d){this.a.a1x()
return null},
$S:13}
C.d9q.prototype={
$1(d){this.a.aht()
return null},
$S:13}
C.d9r.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c8)return
w=v.Q
w===$&&A.c()
if(w<=0){v.m(new C.d9l(v))
w=v.as
if(w!=null)w.a8(0)
v.EC()
return}v.m(new C.d9m(v))},
$S:13}
C.d9l.prototype={
$0(){return this.a.Q=0},
$S:0}
C.d9m.prototype={
$0(){var w=this.a,v=w.Q
v===$&&A.c()
w.Q=v-1
return v},
$S:0}
C.d8A.prototype={
$0(){return this.a.bC=this.b},
$S:0}
C.d8B.prototype={
$0(){return this.a.bC=this.b},
$S:0}
C.d93.prototype={
$1(d){return this.a.go.t(0,d)},
$S:32}
C.d94.prototype={
$0(){},
$S:0}
C.d8Q.prototype={
$0(){var w=this.b
w.c8=!0
w.cW="Waiting for both players\u2026"
w.cl="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.d8R.prototype={
$0(){var w=this.a
w.c8=!0
w.cW="Both players connected"
w.cl="Starting together in a moment\u2026"},
$S:0}
C.d8S.prototype={
$0(){var w=this.b
w.c8=!0
w.cW="Match starting together\u2026"
w.cl="Both players start in "+B.o.D(this.c,1,99)+"s"},
$S:0}
C.d8T.prototype={
$0(){this.b.c8=!1},
$S:0}
C.d8U.prototype={
$0(){},
$S:0}
C.d82.prototype={
$0(){var w=this.a,v=w.x2,u=A.t(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.d8z.prototype={
$0(){var w=this.a
w.at=this.b
w.b3b()},
$S:0}
C.d95.prototype={
$0(){},
$S:0}
C.d9e.prototype={
$0(){},
$S:0}
C.d92.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.d91(w))},
$S:0}
C.d91.prototype={
$0(){var w=this.a
w.y=!0
w.z=new A.S(Date.now(),0,!1)},
$S:0}
C.d8x.prototype={
$0(){var w=this.a;++w.Z
w.y=!1
w.z=null},
$S:0}
C.d8y.prototype={
$0(){},
$S:0}
C.d99.prototype={
$1(d){return d==null},
$S:245}
C.d9a.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
B.d.cA(v.ch,w.d)},
$S:0}
C.d9b.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.d83.prototype={
$1(d){return d==null},
$S:245}
C.d84.prototype={
$0(){return this.a.bi++},
$S:0}
C.d85.prototype={
$0(){},
$S:0}
C.d8J.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.d8K.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.L(0,t)
w=this.c
u.L(0,w)
if(v.ghz()&&D.my.t(0,v.a.e)){u=v.id
u.L(0,t)
u.L(0,w);++v.fx}++v.k2
v.fy=A.a([],x.t)},
$S:0}
C.d8L.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.d8I(w))},
$S:11}
C.d8I.prototype={
$0(){var w=this.a
w.fy=A.a([],x.t)
w.k1=!1},
$S:0}
C.d8V.prototype={
$0(){return this.a.y1++},
$S:0}
C.d8W.prototype={
$0(){},
$S:0}
C.d8X.prototype={
$0(){return this.a.y2++},
$S:0}
C.d8Y.prototype={
$0(){},
$S:0}
C.d8Z.prototype={
$0(){return this.a.b5++},
$S:0}
C.d9_.prototype={
$0(){},
$S:0}
C.d98.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.d8M.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d8N.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.d8O.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d8P.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.d9c.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.d9d.prototype={
$0(){var w=this.a
w.ok.push(w.d.aA(4))
w.p2=0},
$S:0}
C.d86.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d87.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.d88.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d89.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.d96.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.d97.prototype={
$0(){var w,v=this.a;++v.x2
v.aMJ()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+A.t(Math.min(w+2,7))+" tiles"},
$S:0}
C.d8H.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.d90.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d8F.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d8G.prototype={
$2(d,e){return d+e.length},
$S:225}
C.d9f.prototype={
$0(){return A.iL(this.a,null)},
$S:0}
C.d9g.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d9h.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d9j.prototype={
$1(d){var w=this.a,v=w.NU(),u=v<=0?0:B.k.D(w.zL()/v,0,1),t=w.a.x,s=t*1.46
return new C.MN(w.f?s:s*u,s,t,null)},
$S:z+22}
C.d9i.prototype={
$1(d){return d.bV(0.85)},
$S:166}
C.d8E.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghz()&&D.my.t(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return A.v(A.a([A.d(p,w,w,w,w,w,w,B.jn,B.L,w,w),B.an,A.D(A.av(new A.a6(r*v+u,r*t+s,A.ic(!0,w,w,B.y,new A.hJ(v,6,6,1,r),new C.d8D(q,r),q.fr.length,w,B.dQ,B.ah,!1),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
$S:144}
C.d8D.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.t(0,e),p=r.ghz()&&D.my.t(0,r.a.e)&&q&&r.id.t(0,e),o=r.ghz()&&D.my.t(0,r.a.e)&&q&&!p,n=B.d.t(r.fy,e)||q,m=p?D.ani:D.bRn,l=A.m(10),k=A.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.ani:D.anc
v=o?A.I(B.dy,B.q,2):s
u=A.a([new A.ac(0,B.G,A.Z(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.J,4)],x.V)
t=this.b*0.42
return A.aK(!1,l,!0,A.dg(s,A.av(n?A.W(D.cku[r.fr[e]],B.c,s,s,s,t):A.d("?",s,s,s,s,s,s,A.l(s,s,B.c,s,s,s,s,s,s,s,s,t,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,B.bc,new A.o(s,s,v,k,u,w,B.n),B.eE,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.d8C(r,e),s,s,s,s,s,s,s)},
$S:179}
C.d8C.prototype={
$0(){return this.a.cfz(this.b)},
$S:0}
C.d8m.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Z(89,B.bo.l()>>>16&255,B.bo.l()>>>8&255,B.bo.l()&255),r=A.m(10),q=A.m(10),p=A.m(10),o=A.I(A.Z(64,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.q,1)
return A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(B.A,A.d(t?"":u,w,w,w,w,w,w,D.aO9,w,w,w),B.f,w,w,new A.o(w,w,o,p,w,w,B.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d8l(v,d),w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.ag)},
$S:656}
C.d8l.prototype={
$0(){return this.a.cvj(this.b)},
$S:0}
C.d8n.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=A.Z(46,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
return A.aF(!1,B.a1,!0,A.m(10),A.aK(!1,A.m(10),!0,A.p(B.A,A.d(u,w,w,w,w,w,w,D.aO9,w,w,w),B.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d8k(v,d),w,w,w,w,w,w,w),B.f,t,0,w,w,w,w,w,B.ag)},
$S:656}
C.d8k.prototype={
$0(){return this.a.cvi(this.b)},
$S:0}
C.d8o.prototype={
$1(d){return this.a.m(new C.d8j())},
$S:29}
C.d8j.prototype={
$0(){},
$S:0}
C.d8p.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&A.c()
w=C.ags(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.oM()
if(u.ghz()&&D.my.t(0,u.a.e)){u.a_P()
u.mR(!0)}else{v=B.d.cI(u.cy,0,new C.d8h())
t=u.dx
if(t>=v)u.tt("All 5 sentences perfect \u2014 full payout!")
else u.E3(t/v,t,v)}}else{if(u.ghz()&&D.my.t(0,u.a.e))u.a_P()
u.m(new C.d8i(u))}},
$S:0}
C.d8h.prototype={
$2(d,e){return d+e.length},
$S:225}
C.d8i.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bN(0,B.c3)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.d8q.prototype={
$1(d){var w=null,v=A.fl(w,w,A.Z(38,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,B.cf,w,w,w,w,w,w,w)
return new A.C(B.cH,new A.a6(1/0,w,A.ia(A.d(d,w,w,w,w,w,w,V.aO2,w,w,w),new C.d8g(this.a,d),v),w),w)},
$S:126}
C.d8g.prototype={
$0(){return this.a.b2y(this.b)},
$S:0}
C.d8r.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&A.c()
w=u*3+8
return A.v(A.a([A.d(s,v,v,v,v,v,v,B.p_,v,v,v),B.P,A.D(A.av(new A.a6(w,w,A.ic(!0,v,v,B.y,new A.hJ(3,4,4,1,u),new C.d8f(t,u),9,v,B.dQ,B.ah,!1),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
$S:144}
C.d8f.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.b0m(e),p=r===0
if(p)w=B.K
else w=q?B.bo:A.Z(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v=A.m(10)
s=p?t:new C.d8b(s,e)
u=A.m(10)
p=p?"":""+r
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.av(A.d(p,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),B.f,w,0,t,t,t,t,t,B.ag)},
$S:78}
C.d8b.prototype={
$0(){return this.a.cvh(this.b)},
$S:0}
C.d8s.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.d8e(q,d)
p=A.m(16)
if(o)w=D.a1J[d]
else{w=D.a1J[d]
w=A.Z(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=A.m(16)
u=o?A.Z(B.k.V(127.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
u=A.I(u,B.q,o?2:1)
t=x.V
if(o){s=D.a1J[d]
t=A.a([new A.ac(0,B.G,A.Z(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,16)],t)}else t=A.a([],t)
return A.aK(!1,p,!0,A.dg(r,r,r,r,B.bc,new A.o(w,r,u,v,t,r,B.n),U.AC,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1633}
C.d8e.prototype={
$0(){return this.a.cvk(this.b)},
$S:0}
C.d8t.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&A.c()
q=A.d(q,t,t,t,t,t,t,B.p_,t,t,t)
w=A.d("Move "+r.awV()+"/"+C.fUn(),t,t,t,t,t,t,B.D5,t,t,t)
v=r.x2
u=s*3+12
return A.v(A.a([q,w,A.d("Round "+v+"/7 \xb7 "+A.t(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,A.l(t,t,A.Z(153,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.D(A.av(new A.a6(u,u,A.ic(!0,t,t,B.y,new A.hJ(3,6,6,1,s),new C.d8d(r),9,t,B.dQ,B.ah,!1),t),t,t,t),1)],x.p),B.m,t,B.e,B.j,0,B.p)},
$S:144}
C.d8d.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=A.m(10),s=A.m(10),r=u?B.bo:D.b9i,q=u?B.es:D.bhI
return A.aF(!1,B.a1,!0,w,A.aK(!1,t,!0,A.p(w,w,B.f,w,w,new A.o(r,w,A.I(q,B.q,u?2.5:1),s,w,w,B.n),w,w,w,w,w,w,w,w),w,!0,w,w,B.K,w,w,w,w,w,w,w,w,new C.d8a(v,e),w,w,w,w,B.K,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)},
$S:78}
C.d8a.prototype={
$0(){return this.a.cvf(this.b)},
$S:0}
C.d8u.prototype={
$0(){return this.a.b2y(this.b[this.c])},
$S:0}
C.d8v.prototype={
$0(){return this.a.m(new C.d8c())},
$S:0}
C.d8c.prototype={
$0(){},
$S:0}
C.d8w.prototype={
$2(d,e){this.a.Zy(d,e)
return null},
$S:z+21}
C.dcS.prototype={
$1(d){return this.a.cg2(this.b,d)},
$S:1634}
C.dcR.prototype={
$0(){var w=this
return w.a.a.cNN(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cAK.prototype={
$1(d){var w=this.a
w.a05()
w.tA()},
$S:8}
C.cA4.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.czV.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.czW.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cAe.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cAb.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cAc.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cAd.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cA6.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.cA5(w))},
$S:0}
C.cA5.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.czX.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ad(w.c)
v.dy=J.ad(w.d)
v.fr=J.ad(w.e)},
$S:0}
C.cA9.prototype={
$1(d){var w=this.a
return new C.Uw(w.fx,new C.cA8(w),w.a.f.r,null)},
$S:z+37}
C.cA8.prototype={
$1(d){return this.bhC(d)},
bhC(d){var w=0,v=A.j(x.y),u,t=this,s,r
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c7B(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.m(new C.cA7(r,d))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+38}
C.cA7.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cAx.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cAr.prototype={
$1(d){this.a.tA()
return null},
$S:13}
C.cAu.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(B.o.an(v.gaTF().a,1e6)<=0){w=v.id
if(w!=null)w.a8(0)
v.tA()
return}v.m(new C.cAt())},
$S:13}
C.cAt.prototype={
$0(){},
$S:0}
C.cAq.prototype={
$1(d){this.a.EJ()
return null},
$S:13}
C.cAs.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cAp.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bi(J.k(v==null?"":v))
if(u==null)u=new A.S(A.fQ(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bi(J.k(v==null?"":v))
return u.aL(0,w==null?new A.S(A.fQ(0,0,!1),0,!1):w)},
$S:44}
C.cA1.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bi(J.k(v==null?"":v))
if(u==null)u=new A.S(A.fQ(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bi(J.k(v==null?"":v))
return u.aL(0,w==null?new A.S(A.fQ(0,0,!1),0,!1):w)},
$S:44}
C.cA2.prototype={
$0(){var w=this.a,v=w.f
B.d.a9(v)
B.d.v(v,this.b)
w.ax=!0},
$S:0}
C.cA3.prototype={
$0(){var w=this.a
if(w.c!=null)w.a0M(!0)},
$S:11}
C.cA_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cA0.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
if(w.f.length!==0)w.T4(this.b)},
$S:8}
C.cAh.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=B.d.gcZ(v).Q
v.toString
if(this.b)w.hZ(v)
else w.m2(v,B.dV,B.kG)},
$S:8}
C.cAa.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cAi.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cAj.prototype={
$0(){var w=this.a
w.f.push(A.F(["role","user","text",this.b,"at",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z))
w.b3Z()
w.r.bN(0,B.c3)
w.at=!0},
$S:0}
C.cAk.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cAl.prototype={
$0(){var w=this.a
w.f.push(A.F(["role","ai","text",this.b,"at",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z))
w.at=!1},
$S:0}
C.cAm.prototype={
$0(){var w,v=this.b,u=A.V(x.N,x.z)
J.aG(u,"role","ai")
J.aG(u,"text",this.c)
J.aG(u,"at",new A.S(Date.now(),0,!1).a6().ac())
w=this.a
if(J.cx(w.b)){w=J.b6(w.b,v.gcf0(),x.P)
w=A.B(w,w.$ti.k("aj.E"))
J.aG(u,"phoneActions",w)}v.f.push(u)
v.b3Z()},
$S:0}
C.cAn.prototype={
$0(){this.a.f.push(A.F(["role","ai","text",y.g,"at",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z))},
$S:0}
C.cAo.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cAf.prototype={
$1(d){return this.bhD(d)},
bhD(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:k=t.a
if(k.c==null||d==null){w=1
break}s=t.b.b
r=J.a8(s)
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
l=p.bS()
w=5
return A.b(C.aoN(q,new C.r8("cal_"+1000*n,m,l,(o==null?p.bP(36e8):o).bS(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.apy()
case 4:k.c.I(x.q).f.R(A.b2(null,null,null,B.d_,null,B.r,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:430}
C.cAw.prototype={
$1(d){return this.bhE(d)},
bhE(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.I(x.q).f.R(A.b2(null,null,null,B.d_,null,B.r,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:430}
C.cAg.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=B.d.gcZ(v).Q
v.toString
w.hZ(v)},
$S:8}
C.cAJ.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
if(v>0)w.aag(v-1)},
$S:0}
C.cAC.prototype={
$0(){return A.iL(this.a,null)},
$S:0}
C.cAF.prototype={
$1(d){var w=this.a
w.m(new C.cAz(w,d))
if(d===0)w.a0M(!0)},
$S:29}
C.cAz.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cAD.prototype={
$2$size(d,e){return C.fSI(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:1635}
C.cAE.prototype={
$0(){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.h4d(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return A.b(H.apC(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cAA(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return A.b(C.aoL(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return A.b(p.tA(),$async$$0)
case 15:p.m(new C.cAB(p))
p.aag(0)
case 14:u=!1
w=1
break
case 11:w=16
return A.b(p.tA(),$async$$0)
case 16:case 9:case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:63}
C.cAA.prototype={
$2(d,e){return this.bhF(d,e)},
bhF(d,e){var w=0,v=A.j(x.y),u,t=this,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=A.a19(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$2,v)},
$S:118}
C.cAB.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cAH.prototype={
$2(d,e){return B.ab},
$S:36}
C.cAG.prototype={
$2(d,e){var w=null,v=this.a,u=A.d((v.a.c.w?D.a1P:D.a1a)[e],w,w,w,w,w,w,B.qb,w,w,w),t=A.Z(31,B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255),s=A.Z(89,B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255)
v=v.at?w:new C.cAy(v,e)
return A.mB(w,t,u,w,v,w,w,new A.aA(s,1,B.q,-1),w)},
$S:504}
C.cAy.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a1P:D.a1a
w.r.saV(0,v[this.b])
w.mQ()
return null},
$S:0}
C.cAI.prototype={
$1(d){var w=this.a
return w.at?null:w.mQ()},
$S:2}
C.czY.prototype={
$0(){return this.a.aag(0)},
$S:0}
C.cAv.prototype={
$0(){return this.a.aag(this.b)},
$S:0}
C.czZ.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=A.p(v,D.bLu,B.f,v,v,new A.o(v,v,v,v,v,new A.a7(B.a3,B.a7,B.x,A.a([A.Z(51,B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255),w.b],x.O),v,v),B.a6),v,72,v,v,v,v,v,72)
t=w.c
s=A.d("Start a conversation",v,v,v,v,v,v,A.l(v,v,t?B.c:B.aB,v,v,v,v,v,v,v,v,16,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.av(new A.C(B.Xu,A.v(A.a([u,B.ac,s,B.an,A.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,A.l(v,v,t?B.az:B.aX,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v)],x.p),B.m,v,B.e,B.j,0,B.p),v),v,v,v)}if(e<s)return u.bD4(t[e],w.c)
return u.aNj(A.F(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:40}
C.bX6.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=B.k.O(d)
return new A.S(A.fQ(w>1e11?w:w*1000,0,!0),0,!0).bS()}v=A.bi(J.k(d))
return v==null?null:v.bS()},
$S:306}
C.bX5.prototype={
$1(d){A.aN(d)
return(d==null?0:d)/100},
$S:655}
C.bX8.prototype={
$1(d){var w
if(d==null)w=null
else{w=A.bi(J.k(d))
w=w==null?null:w.bS()}return w},
$S:306}
C.bX7.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null
if(!x.f.b(d))return m
w=A.a1(d,x.N,x.z)
try{v=J.q(w,"id")
v=J.k(v==null?"":v)
u=J.q(w,"userEmail")
u=J.k(u==null?"":u)
t=A.aN(J.q(w,"amount"))
if(t==null)t=0
s=J.q(w,"type")
s=A.a3F(B.a2x,J.k(s==null?"reimbursement":s))
r=J.q(w,"method")
r=A.a3F(B.a18,J.k(r==null?"system":r))
q=A.aU(J.q(w,"sourceDetails"))
p=J.q(w,"status")
p=A.a3F(B.GC,J.k(p==null?"approved":p))
o=this.a.$1(J.q(w,"timestamp"))
if(o==null)o=new A.S(Date.now(),0,!1)
return new A.d2(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:595}
C.dtm.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dtn.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dtd.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bl(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dtb.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.a
w=2
return A.b(o.An(),$async$$0)
case 2:t=o.d
t===$&&A.c()
s=o.e
s===$&&A.c()
r=o.a.c
q=o.f
q===$&&A.c()
w=3
return A.b(C.fNf(t,s,r,q),$async$$0)
case 3:p=e
w=4
return A.b(A.oW(o.a.c,!1),$async$$0)
case 4:o.kO(p)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dtl.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.a8O(),$async$$0)
case 3:q=e
if(q==null){r.kO("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return A.b(A.a5(s,!1).c6(A.e6(new C.dtk(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return A.b(A.oW(r.a.c,!1),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dtk.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&A.c()
return new C.Zi(w.b,w.a,u,v,null)},
$S:z+39}
C.dta.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.hyD(q)?3:4
break
case 3:w=5
return A.b(t.a.Ei(B.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return A.b(C.aWf(q,s.a.c),$async$$0)
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
case 9:s.kO(C.bXa(s.a.c))
w=1
break
case 10:s.kO("That code didn't match anything on your account. Double-check it and try again.")
w=1
break
case 11:s.kO(y.B)
w=1
break
case 12:q=r.b
q.toString
w=14
return A.b(s.zC(q,!0,!0),$async$$0)
case 14:w=1
break
case 13:q=r.b
q.toString
w=15
return A.b(s.aOx(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dt9.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=A.bl(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dtc.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.ac5(),$async$$0)
case 3:q=e
if(q==null||B.a.i(q).length===0){w=1
break}s=C.h18(q)
if(s==null){r.kO("Could not read that backup file.")
w=1
break}if(!C.bX9(s,r.a.c,null)){r.kO(C.bXa(r.a.c))
w=1
break}w=4
return A.b(r.bFo(s),$async$$0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dtj.prototype={
$1(d){var w=null,v=new A.ar(B.as,$.aw()),u=A.O(d).ax.a===B.I,t=u?B.i6:B.c,s=x.p,r=A.v(A.a([A.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,A.l(w,w,u?B.ad:B.ak,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),B.aA,A.aL(w,B.T,!0,w,!0,B.r,w,A.aM(),v,w,w,w,w,w,2,A.br(w,new A.b4(4,A.m(14),B.dg),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),B.y,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,B.dM,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.L,w,B.am,w,w,w,w)],s),B.F,w,B.e,B.Q,0,B.p)
return A.ei(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dth(d),w,w),A.bJ(D.f87,new C.dti(d,v),A.bk(B.aU,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.fmc,w)},
$S:19}
C.dth.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dti.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).N(w)
return null},
$S:0}
C.dte.prototype={
$1(d){return D.fMy},
$S:z+12}
C.dtf.prototype={
$0(){return this.a.Ej(B.a.i(this.b))},
$S:1}
C.dtg.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(C.aWf(t.b,r.a.c),$async$$0)
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
return A.b(r.zC(s,!0,!0),$async$$0)
case 11:w=1
break
case 7:r.kO(C.bXa(r.a.c))
w=1
break
case 8:r.kO("Could not read that QR code for your account.")
w=1
break
case 9:r.kO(y.B)
w=1
break
case 10:s=q.b
s.toString
w=12
return A.b(r.aOx(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dto.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dts.prototype={
$1(d){this.a.Qa()
return null},
$S:13}
C.dtp.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dtq.prototype={
$0(){var w=null,v=this.a
A.fI(new A.fB(v.gav2()))
this.b.I(x.q).f.R(A.b2(w,w,w,w,w,B.r,w,A.d("Code "+v.gav2()+" copied",w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dtr.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dtt.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!(B.a.a0(s,"NGMYSNAP1|")||B.a.a0(s,"NGMYLOCALSYNC1|")||B.a.a0(s,"NGMYLOCALLIVE1|")||B.a.a0(s,"NGMYLOCALDEP1|")))continue
r.e=!0
A.a5(this.b,!1).N(s)
return}},
$S:177}
C.fi6.prototype={
$1(d){return D.fKl},
$S:z+13}
C.fjj.prototype={
$1(d){return new C.adw(this.a,this.b,this.c,null)},
$S:z+14}
C.eQG.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.eQH.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.d2s.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fG()},
$S:8}
C.d2p.prototype={
$2(d,e){return e.ajG(e.a.toUpperCase())},
$S:1636}
C.d2q.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=B.a.i(w.d.a.a)
A.a5(v,!1).N(w)
return null},
$S:2}
C.d2r.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.bXS.prototype={
$1(d){var w=J.q(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!B.d.b8(D.d89,B.a.gkU(v))},
$S:4}
C.fri.prototype={
$1(d){return d.a===this.a},
$S:1637}
C.frj.prototype={
$0(){return B.d.gK(B.BQ)},
$S:1638}
C.dzO.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.m(new C.dzN(v))
w=v.r
w===$&&A.c()
if(w<=0)v.b32("Time's up")},
$S:13}
C.dzN.prototype={
$0(){var w=this.a,v=w.r
v===$&&A.c()
w.r=v-1
return v},
$S:0}
C.dzF.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dzK.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.m(new C.dzH(w,d,e))},
$S:127}
C.dzH.prototype={
$0(){var w=this.a,v=this.c
w.e=B.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dzL.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.dzG(w))
w.cpF(!0)},
$S:0}
C.dzG.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dzM.prototype={
$1(d){this.a.b32(d)
return null},
$S:2}
C.dzI.prototype={
$0(){return A.iL(this.a,null)},
$S:0}
C.dzJ.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.c4i.prototype={
$1(d){return D.dsv},
$S:z+15}
C.c4h.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fk5.prototype={
$5(d,e,f,g,h){var w,v=null,u=J.a8(d),t=A.aN(u.h(d,e)),s=t==null?v:B.k.O(t)
if(s==null)s=0
if(s<=0)return v
t=u.h(d,g)
if(J.k(t==null?"":t)!==h){u.n(d,g,h)
u.n(d,f,0)}t=A.aN(u.h(d,f))
w=t==null?v:B.k.O(t)
if(w==null)w=0
if(w>=s)return v
u.n(d,f,w+1)
u=A.aN(u.h(d,"outcome"))
return u==null?v:B.k.O(u)},
$S:1639}
C.fk6.prototype={
$2(d,e){var w=A.aN(J.q(d,e))
w=w==null?null:B.k.O(w)
return w==null?0:w},
$S:566}
C.fk7.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:225}
C.fyj.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.hcy(w,v):C.fT0(w,v)
if(u===3)++w.f
C.aeV(w,this.c,u)
return u},
$S:1640}
C.fyl.prototype={
$0(){return C.hcy(this.a,this.b)},
$S:115}
C.fyk.prototype={
$0(){return C.fT0(this.a,this.b)},
$S:115}
C.dsZ.prototype={
$0(){var w=this.a
if(w.a.c)w.m(new C.dsY(w))},
$S:0}
C.dsY.prototype={
$0(){this.a.r=1+B.o.F(A.Bq(new A.S(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dt_.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&A.c()
u=u.x
u===$&&A.c()
w=B.k.bw(u*10)
if(w!==v.w)v.m(new C.dsX(v,w))}},
$S:0}
C.dsX.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.c6g.prototype={
$3(d,e,f){var w=null
return A.D(A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,B.H,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.bA,A.f2(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.dt)],x.p),B.m,w,B.e,B.j,0,B.p),1)},
$S:1641}
C.c6f.prototype={
$3(d,e,f){var w=null
return A.d("$"+B.k.aa(e,2),w,w,w,w,w,w,B.oZ,w,w,w)},
$S:363}
C.c6I.prototype={
$1(d){return new C.MV(this.a,this.b,!1,null,null)},
$S:z+16}
C.dT_.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=A.m(e?0:30)
e=e?g:A.I(B.b5.j(0.5),B.q,1)
w=f.a.e?g:A.a([new A.ac(2,B.G,B.b5.j(0.35),B.J,36),new A.ac(0,B.G,B.bz.j(0.175),B.J,24)],x.V)
v=A.m(f.a.e?0:30)
u=x.O
t=A.ao(g,A.p(g,g,B.f,g,g,new A.o(g,g,g,g,g,new A.bR(B.A,0.5,B.x,g,0,A.a([B.b7.j(0.22),B.K],u),g,g),B.a6),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=A.ao(-50,A.p(g,g,B.f,g,g,new A.o(g,g,g,g,g,new A.bR(B.A,0.5,B.x,g,0,A.a([B.bz.j(0.18),B.K],u),g,g),B.a6),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?B.j:B.Q
p=x.p
o=A.a([],p)
if(f.a.e)o.push(B.P)
n=x.V
o.push(A.p(g,D.bH1,B.f,g,g,new A.o(g,g,A.I(B.aM.j(0.8),B.q,2.5),g,A.a([new A.ac(0,B.G,B.b5.j(0.55),B.cv,18)],n),E.tU,B.a6),g,88,g,g,g,g,g,88))
o.push(B.aP)
o.push(A.nH(B.jp,D.fjW,new C.dSW()))
o.push(B.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(A.d(m,g,g,g,g,g,g,A.l(g,g,B.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,B.cu,g,1.45,!0,g,g,g,g,g,g,g,g),B.L,g,g))
m=this.b
if(m.length!==0){l=B.cj.j(0.12)
k=A.m(18)
j=A.I(B.cj.j(0.45),B.q,1)
i=A.a([A.A(A.a([A.W(D.bB4,B.cj.j(0.95),g,g,g,20),B.ab,A.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,A.l(g,g,B.cj.j(0.95),g,g,g,g,g,g,g,g,13,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),B.m,g,B.e,B.j,0,g,g),B.S,A.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,A.l(g,g,B.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),B.S],p)
B.d.v(i,new A.K(m,new C.dSX(),A.T(m).k("K<1,r>")))
B.d.v(o,A.a([B.aP,A.p(g,A.v(i,B.F,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(l,g,j,k,g,g,B.n),g,g,g,g,B.bC,g,g,1/0)],p))}o.push(B.bw)
m=B.w.j(0.35)
l=A.m(18)
k=A.I(B.b5.j(0.35),B.q,1)
o.push(A.p(g,A.v(A.a([f.avO(B.h8,"Unlimited games with an active plan",B.b7),B.P,f.avO(B.kj,"Weekday check-ins grow your balance",B.b5),B.P,f.avO(B.mk,"Compete, bet, and earn points",B.aM)],p),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(m,g,k,l,g,g,B.n),g,g,g,g,B.bC,g,g,1/0))
o.push(B.d5)
l=A.m(16)
n=A.a([new A.ac(0,B.G,B.bz.j(0.45),B.cv,16)],n)
o.push(new A.a6(1/0,g,A.bZ(A.dp(D.bKf,D.ffv,new C.dSY(f,a0),A.bk(B.K,g,g,g,B.c,B.Io,g,B.K,new A.b7(A.m(16),B.Y),g,g,g)),new A.o(g,g,g,l,n,E.tU,B.n),B.bd),g))
o.push(B.P)
n=f.a.e?"Back":"Maybe later"
o.push(A.bK(!1,A.d(n,g,g,g,g,g,g,A.l(g,g,B.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,new C.dSZ(f,a0),g,g))
if(f.a.e)o.push(B.b4)
h=A.p(g,A.bv(v,new A.an(B.W,g,B.aa,B.r,A.a([t,u,new A.C(new A.Q(22,r,22,q),A.v(o,B.m,g,B.e,s,0,B.p),g)],p),g),B.aq),B.f,g,g,new A.o(g,g,e,d,w,D.bU6,B.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return A.eG(g,B.K,h,g,g,g,Af.XX,B.d0,g,g,g)},
$S:657}
C.dSW.prototype={
$1(d){return D.bT5.aw(0,d)},
$S:66}
C.dSX.prototype={
$1(d){var w=null
return new A.C(B.eO,A.A(A.a([A.W(A1.ZU,B.cj.j(0.85),w,w,w,14),B.ab,A.D(A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$S:126}
C.dSY.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{A.a5(this.b,!1).N(null)
w.a.c.$0()}},
$S:0}
C.dSZ.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else A.a5(this.b,!1).N(null)},
$S:0}
C.ftF.prototype={
$1(d){if(d.gmx())this.a.a=d
return d.gmx()},
$S:483}
C.fts.prototype={
$1(d){$.aT.x1$.push(new C.ftr(this.a))},
$S:8}
C.ftr.prototype={
$1(d){return this.a.$0()},
$S:8}
C.fgn.prototype={
$1(d){return C.hcF(this.a,this.b+1)},
$S:8}
C.fv1.prototype={
$2(d,e){var w=A.aI(d,B.bT,x.w).w.a
return new A.a6(w.a,w.b,A.c8(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:172}
C.c6W.prototype={
$1(d){return d.r===this.a},
$S:257}
C.c6X.prototype={
$1(d){var w=$.aPs(),v=w.a
w.sp(0,v+1)
return v},
$S:1643}
C.c6Y.prototype={
$1(d){},
$S:30}
C.c6V.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:257}
C.c6U.prototype={
$1(d){return d.f.cc(this.a)},
$S:257}
C.fef.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.fGz.prototype={
$1(d){return C.a6p(this.a)},
$S:104}
C.fGA.prototype={
$1(d){var w=$.aPs()
w.sp(0,w.a+1)},
$S:27}
C.fGB.prototype={
$1(d){},
$S:30}
C.fGC.prototype={
$1(d){return new A.kb($.aPs(),new C.fGy(this.a,this.b),null,null,x.am)},
$S:1644}
C.fGy.prototype={
$3(d,e,f){var w=this.b
return new A.l5(C.aou(this.a,!1),new C.fGx(w),w,null,x.gv)},
$S:1645}
C.fGx.prototype={
$2(d,e){var w=e.b
return new C.acm(w==null?this.a:w,null)},
$S:z+17}
C.dT2.prototype={
$1(d){return d.c},
$S:257}
C.dT3.prototype={
$1(d){return d.gber()},
$S:1646}
C.dT4.prototype={
$2(d,e){return d+e},
$S:89}
C.dT5.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dT7.prototype={
$2(d,e){return B.P},
$S:36}
C.dT6.prototype={
$2(d,e){return new C.acl(J.q(this.a.c,e),null)},
$S:z+18}
C.dT1.prototype={
$1(d){return d==null?"\u2026":C.byc(d)},
$S:1647}
C.fGF.prototype={
$3(d,e,f){var w=this
return A.rl(new C.ayY(w.a,w.b,w.c,w.d,new C.fGD(d,w.e),new C.fGE(d,w.f),null))},
$C:"$3",
$R:3,
$S:90}
C.fGD.prototype={
$0(){A.a5(this.a,!1).N(null)
C.hfG(this.b)},
$S:0}
C.fGE.prototype={
$0(){A.a5(this.a,!1).N(null)
C.hfG(this.b)},
$S:0}
C.d9t.prototype={
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
B.d.v(w,new A.K(t,new C.d9s(),A.T(t).k("K<1,r>")))}t=h.d
t===$&&A.c()
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,A.aI(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?A.a([B.bo,B.ff,B.e9],r):A.a([B.ay,B.eM,B.er],r)
p=A.m(26)
o=A.I(B.c.j(0.4),B.q,2)
n=x.V
m=A.a([new A.ac(6,B.G,(h.a.c?B.dw:B.dG).j(0.5),B.J,36)],n)
l=A.a([],g)
if(h.a.c){k=A.dl()
j=k.a
j.$flags&2&&A.ak(j)
j[11]=0.001
k.jQ(-0.35)
r=A.a([Z.adt,B.t1],r)
l.push(new A.a6(i,100,new A.an(B.A,i,B.aa,B.f,A.a([A.fs(B.A,A.p(i,D.b3L,B.f,i,i,new A.o(i,i,i,i,A.a([new A.ac(4,B.G,B.cR.j(0.6),B.J,24),new A.ac(0,B.G,B.w.j(0.3),B.dk,12)],n),new A.bR(B.A,0.5,B.x,i,0,r,i,i),B.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.bNt)
l.push(B.aA)
l.push(A.d(h.a.d,i,i,i,i,i,i,B.a78,B.L,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=A.m(18)
k=A.I(B.ff,B.q,4)
B.d.v(l,A.a([B.aA,D.f9P,B.P,A.p(i,A.d(r,i,i,i,i,i,i,D.f0z,B.L,i,i),B.f,i,i,new A.o(B.c,i,k,n,i,i,B.n),i,i,i,i,B.Xs,i,i,1/0)],g))}B.d.v(l,A.a([B.ac,A.d(h.a.e,i,i,i,i,i,i,D.f3a,B.L,i,i)],g))
l.push(B.e1)
r=A.D(A.dU(D.f7p,h.a.r,A.de(i,i,i,i,i,i,i,i,i,B.c,i,i,B.cf,i,i,D.aWp,i,i,i,i)),1)
h=h.a
n=h.w
l.push(A.A(A.a([r,B.av,A.D(A.bJ(F.aPu,n,A.bk(B.c,i,i,i,h.c?B.ff:B.eM,i,B.cf,i,i,i,i,i)),1)],g),B.m,i,B.e,B.j,0,i,i))
w.push(A.ea(B.A,A.p(i,A.v(l,B.m,i,B.e,B.Q,0,B.p),B.f,i,i,new A.o(i,i,o,p,m,new A.a7(B.ax,B.aC,B.x,q,i,i),B.n),i,i,i,B.a9,B.ahc,i,i,s),1+t*0.02,i,i))
return new A.an(B.A,i,B.aa,B.f,w,i)},
$S:114}
C.d9s.prototype={
$1(d){var w=null,v=d.a,u=d.b
return A.ao(w,A.db(A.eC(B.A,d.d,A.W(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.c8x.prototype={
$2(d,e){var w=null,v=this.a,u=C.hy2(A.Kt(v.c,v.d))
return A.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1648}
C.c8w.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.bYo.prototype={
$0(){},
$S:0}
C.fde.prototype={
$1(d){return B.o.u(d)},
$S:74}
C.dM2.prototype={
$0(){return this.a.y=!0},
$S:0}
C.dM3.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.dM4.prototype={
$0(){var w=this.a
return w.w=D.PX[w.d.aA(5)]},
$S:0}
C.dM5.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.dM6.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.dM7.prototype={
$0(){var w=this.a
return w.m(new C.dM1(w))},
$S:0}
C.dM1.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dM8.prototype={
$0(){var w=this.a
return w.m(new C.dM0(w))},
$S:0}
C.dM0.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dMb.prototype={
$0(){return A.iL(this.a,null)},
$S:0}
C.dMc.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&B.a.i(t.e.a.a).length===0?B.bo:A.Z(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),r=A.m(10)
t=t.y?u:new C.dMa(t,d)
w=A.m(10)
v=B.k.aa(d,0)
return A.D(new A.C(B.je,A.aF(!1,B.a1,!0,r,A.aK(!1,w,!0,new A.a6(u,38,A.av(A.d("$"+v,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),B.f,s,0,u,u,u,u,u,B.ag),u),1)},
$S:1649}
C.dMa.prototype={
$0(){var w=this.a
return w.m(new C.dM9(w,this.b))},
$S:0}
C.dM9.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bN(0,B.c3)},
$S:0}
C.dTp.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+B.cS.gcv().aJ(this.c)},
$S:0}
C.dTq.prototype={
$0(){return A.iL(this.a,null)},
$S:0}
C.dTl.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=A.m(14),s=u?B.c.j(0.1):B.K,r=A.I(u?D.eH.j(0.5):B.K,B.q,1),q=A.W(e,u?D.eH:B.az,w,w,w,20)
return A.D(A.aE(w,A.dg(w,A.A(A.a([q,B.bp,A.d(f,w,w,w,w,w,w,A.l(w,w,u?B.c:B.az,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.bb,B.j,0,w,w),w,w,B.bc,new A.o(s,w,r,t,w,w,B.n),B.a1,w,46,w,w,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dTn(v,d),w,w,w,w,w,w,!1,B.a8),1)},
$S:1650}
C.dTn.prototype={
$0(){var w=this.a
return w.m(new C.dTm(w,this.b))},
$S:0}
C.dTm.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dTo.prototype={
$0(){var w=this.a,v=w.d===B.kp?"Cash App tag":"Bitcoin address"
return w.Ip(this.b,v)},
$S:0}
C.dTk.prototype={
$0(){var w=this.a
return w.Ip(w.gaqp(),"Code")},
$S:0}
C.c7n.prototype={
$1(d){return C.hue(A.a1(d,x.N,x.z))},
$S:z+20}
C.c7o.prototype={
$2(d,e){return d.c.aL(0,e.c)},
$S:z+6}
C.c7k.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.c7l.prototype={
$2(d,e){return d.c.aL(0,e.c)},
$S:z+6}
C.c7m.prototype={
$1(d){return d.ae()},
$S:z+23}
C.c7p.prototype={
$1(d){var w=d.c
return!w.cY(this.a.bP(-36e8))&&!w.cc(this.b)},
$S:z+7}
C.c_M.prototype={
$1(d){return C.huf(A.a1(d,x.N,x.z))},
$S:z+24}
C.c_N.prototype={
$2(d,e){return e.b.aL(0,d.b)},
$S:z+8}
C.c_K.prototype={
$1(d){return d.ae()},
$S:z+26}
C.c_L.prototype={
$2(d,e){return e.b.aL(0,d.b)},
$S:z+8}
C.c_P.prototype={
$1(d){var w=d.b
return!w.cY(this.a)&&!w.cc(this.b)},
$S:z+27}
C.c7w.prototype={
$1(d){return d.ae()},
$S:z+28}
C.c7v.prototype={
$1(d){return C.h3n(A.a1(x.f.a(d),x.N,x.z))},
$S:z+29}
C.c7u.prototype={
$1(d){return d.ae()},
$S:z+30}
C.c7t.prototype={
$1(d){return C.hxH(A.a1(x.f.a(d),x.N,x.z))},
$S:z+31}
C.c7y.prototype={
$1(d){return C.hxG(A.a1(x.f.a(d),x.N,x.z))},
$S:z+32}
C.c7z.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+2}
C.c7A.prototype={
$1(d){return d.ae()},
$S:z+34}
C.dX4.prototype={
$1(d){return d.b9P(A.bl(d.e,!0,x.u))},
$S:z+36}
C.dX5.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+2}
C.dWZ.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dX_.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dWI.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.L(w,this.b)},
$S:0}
C.dWJ.prototype={
$1(d){return new C.OM(this.a,null)},
$S:z+9}
C.dWK.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=B.d.ba(t,new C.dWH(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){B.d.cA(u.d,w)
u.Iy()}},
$S:0}
C.dWH.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dWW.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(A.F(["role","admin","text",this.b],w,w))},
$S:0}
C.dWX.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(A.F(["role","ai","text",v],t,t))}else{v=t.d
v===$&&A.c()
t.d=C.hXU(v,w[0],w[3])
t.Iy()
t=w[2]
if(t==null)t="Created "+J.ad(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(A.F(["role","ai","text",t],w,w))}},
$S:0}
C.dWY.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=B.d.gcZ(v).Q
v.toString
w.hZ(v)}},
$S:8}
C.dWQ.prototype={
$1(d){return new C.OM(this.a,null)},
$S:z+9}
C.dWR.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dWP.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cA(w,this.b)},
$S:0}
C.dWV.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&A.c()
v=B.d.cA(w,s)
B.d.cj(t.d,u.a,v)
t.Iy()},
$S:0}
C.dWU.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
return new C.a_5(u[w],new C.dWT(v,w),null)},
$S:z+59}
C.dWT.prototype={
$1(d){var w=this.a
return w.m(new C.dWS(w,this.b,d))},
$S:z+40}
C.dWS.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dWM.prototype={
$0(){var w=this.a
return w.m(new C.dWL(w))},
$S:0}
C.dWL.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dWN.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?B.cp:B.aK
return new A.C(B.eO,A.d(t+": "+A.t(s),w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?B.a4:B.cu,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:113}
C.dWO.prototype={
$1(d){return this.a.a0t()},
$S:2}
C.dX3.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.rZ:B.c
u=A.m(16)
t=A.m(16)
s=l?B.aK:B.aL
r=w.d
q=A.b0(r).j(0.15)
p=A.m(12)
q=A.p(n,A.W(B.ajQ,l?B.bJ:B.ak,n,n,n,20),B.f,n,n,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.bS,n,n,n)
p=A.b0(r).j(0.12)
o=A.m(8)
o=A.p(n,A.W(w.c,A.b0(r),n,n,n,18),B.f,n,n,new A.o(p,n,n,o,n,n,B.n),n,n,n,n,B.hw,n,n,n)
r=A.A(A.a([o,B.av,A.D(A.d(w.b,n,n,n,n,n,n,A.l(n,n,l?B.aQ:B.M,n,n,n,n,n,n,n,n,n,n,n,B.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),B.m,n,B.e,B.j,0,n,n)
p=w.e.length
return new A.C(B.dc,A.aF(!1,B.a1,!0,u,A.dN(!1,n,n,n,!0,n,n,n,!0,n,new H.at7(q,e,!0,n),n,n,n,n,new C.dX0(m,e),!1,n,n,new A.b7(t,new A.aA(s,1,B.q,-1)),n,n,A.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,A.l(n,n,l?B.bJ:B.ak,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,A.Bp(n,n,n,new C.dX1(),B.J,new C.dX2(m,e),B.ck,n,x.N),n),B.f,v,0,n,n,n,n,n,B.ag),new A.cw(w.a,x.W))},
$S:113}
C.dX2.prototype={
$1(d){var w=this
if(d==="edit")w.a.a9f(w.b)
if(d==="questions")w.a.XT(w.b)
if(d==="delete")w.a.bIe(w.b)},
$S:2}
C.dX1.prototype={
$1(d){return D.cFF},
$S:129}
C.dX0.prototype={
$0(){return this.a.XT(this.b)},
$S:0}
C.cJa.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q===$&&A.c()
w=d.a===q.a
if(w){q=r.f
q===$&&A.c()
q=A.b0(q).j(0.2)}else q=B.cU.j(0.1)
v=A.m(10)
if(w){u=r.f
u===$&&A.c()
u=A.b0(u)}else u=B.K
u=A.I(u,B.q,1)
t=r.f
t===$&&A.c()
return A.aK(!1,s,!0,A.p(s,A.W(d,A.b0(t),s,s,s,s),B.f,s,s,new A.o(q,s,u,v,s,s,B.n),s,s,s,s,B.ck,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cJ9(r,d),s,s,s,s,s,s,s)},
$S:1651}
C.cJ9.prototype={
$0(){var w=this.a
return w.m(new C.cJ7(w,this.b))},
$S:0}
C.cJ7.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cJb.prototype={
$1(d){var w=null,v=this.a,u=A.b0(d),t=v.f
t===$&&A.c()
return A.aE(w,A.hq(u,w,t===d?D.bKW:w,w,14),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cJ8(v,d),w,w,w,w,w,w,!1,B.a8)},
$S:470}
C.cJ8.prototype={
$0(){var w=this.a
return w.m(new C.cJ6(w,this.b))},
$S:0}
C.cJ6.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cJc.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cJd.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=B.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&A.c()
v=v.f
v===$&&A.c()
t=u.cFx(v,w,t)
A.a5(this.b,!1).N(t)
return null},
$S:0}
C.eLL.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return w.push(this.b)},
$S:0}
C.eLM.prototype={
$1(d){return new C.a_4(this.a,null)},
$S:z+41}
C.eLS.prototype={
$2(d,e){return B.P},
$S:36}
C.eLR.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.rZ:B.c
u=A.m(14)
t=A.m(14)
s=l?B.aK:B.aL
r=w.d
if(r!=null&&r.length!==0){q=A.m(8)
r=A.bv(q,K.aO8(n,B.bQ,36,B.pE,l?B.bJ:B.ak,r,48),B.aq)}else r=A.W(D.ZE,A.b0(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=A.d(q,n,2,B.a2,n,n,n,A.l(n,n,l?B.aQ:B.M,n,n,n,n,n,n,n,n,n,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ad(w.c)
o=w.e?" \xb7 Printable":""
return A.aF(!1,B.a1,!0,u,A.dN(!1,n,n,n,!0,n,n,n,!0,n,r,n,n,n,n,new C.eLP(m,w,e),!1,n,n,new A.b7(t,new A.aA(s,1,B.q,-1)),n,n,A.d(""+p+" block(s)"+o,n,n,n,n,n,n,A.l(n,n,l?B.bJ:B.ak,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,A.aH(n,n,n,n,D.bJm,n,n,n,new C.eLQ(m,e),n,n,n,n,n,n),n),B.f,v,0,n,n,n,n,n,B.ag)},
$S:78}
C.eLQ.prototype={
$0(){var w=this.a
w.m(new C.eLN(w,this.b))
w.avR()},
$S:0}
C.eLN.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cA(w,this.b)},
$S:0}
C.eLP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.aZl(u.b),$async$$0)
case 2:s=e
if(s!=null){t.m(new C.eLO(t,u.c,s))
t.avR()}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eLO.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eLH.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eLF.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
return new C.Ux(w,"Answer Document",null)},
$S:z+42}
C.eLG.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eLJ.prototype={
$0(){var w,v,u=this.a,t=u.a.c,s=u.d
s===$&&A.c()
s=B.a.i(s.a.a)
w=u.e
w===$&&A.c()
v=u.f
u=u.r
if(v==null)v=t.d
A.a5(this.b,!1).N(new C.ig(t.a,s,w,v,u,t.f))
return null},
$S:0}
C.eLK.prototype={
$1(d){var w=this.a
return w.m(new C.eLI(w,d))},
$S:9}
C.eLI.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.c7q.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fvp.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dXF.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.dXl.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.L(w,new C.lw("image","",this.b,null))},
$S:0}
C.dXq.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.L(w,new C.lw("video","","data:video/mp4;base64,"+B.cS.gcv().aJ(this.b),null))},
$S:0}
C.dXo.prototype={
$1(d){var w=null,v=x.p,u=A.v(A.a([A.aL(w,B.T,!1,w,!0,B.r,w,A.aM(),this.a,w,w,w,w,w,2,D.bPj,B.y,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.am,w,w,w,w),A.aL(w,B.T,!1,w,!0,B.r,w,A.aM(),this.b,w,w,w,w,w,2,D.bPi,B.y,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.am,w,w,w,w)],v),B.m,w,B.e,B.Q,0,B.p)
return A.ei(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dXm(d),w,w),A.bJ(D.fjq,new C.dXn(d),w)],v),w,w,w,u,w,w,w,w,D.f6I,w)},
$S:19}
C.dXm.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dXn.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dXp.prototype={
$0(){var w,v=this.a.e
v===$&&A.c()
w=B.a.i(this.b.a.a)
return B.d.L(v,new C.lw("link","",B.a.i(this.c.a.a),w))},
$S:0}
C.dXh.prototype={
$1(d){return B.a.i(d)},
$S:14}
C.dXi.prototype={
$1(d){return d.length!==0},
$S:3}
C.dXj.prototype={
$1(d){return B.a.i(B.a.e9(d,A.af("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:14}
C.dXk.prototype={
$1(d){return d.length!==0},
$S:3}
C.dXv.prototype={
$0(){var w=this.a.bBC()
A.a5(this.b,!1).N(w)
return null},
$S:0}
C.dXw.prototype={
$0(){return this.a.avS("**","**")},
$S:0}
C.dXx.prototype={
$0(){return this.a.avS("*","*")},
$S:0}
C.dXy.prototype={
$0(){return this.a.avS("__","__")},
$S:0}
C.dXz.prototype={
$0(){return this.a.aXy("## Section title")},
$S:0}
C.dXA.prototype={
$0(){return this.a.aXy("\u2022 First point\n\u2022 Second point")},
$S:0}
C.dXB.prototype={
$0(){},
$S:0}
C.dXC.prototype={
$0(){var w=this.a
w.m(new C.dXu(w))},
$S:0}
C.dXu.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.L(w,D.dvR)},
$S:0}
C.dXD.prototype={
$0(){var w=this.a
w.m(new C.dXt(w))},
$S:0}
C.dXt.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.L(w,D.dvS)},
$S:0}
C.dXE.prototype={
$1(d){var w,v,u=null,t=d.b,s=t.a
A:{if("image"===s){w="Image"
break A}if("video"===s){w="Video"
break A}if("link"===s){w=t.d
if(w==null)w="Link"
break A}if("signature"===s){w="Signature"
break A}w=s
break A}v=this.b.a
w=A.d(w,u,u,u,u,u,u,A.l(u,u,v?B.iO:B.aB,u,u,u,u,u,u,u,u,11,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
v=v?B.cE:B.iL
return A.CW(u,v,B.am9,w,u,new C.dXs(this.a,d),u)},
$S:z+45}
C.dXs.prototype={
$0(){var w=this.a
return w.m(new C.dXr(w,this.b))},
$S:0}
C.dXr.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.cA(w,this.b.a)},
$S:0}
C.dXe.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.aT_},
$S:0}
C.dXf.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.fLD},
$S:0}
C.dX6.prototype={
$0(){var w=this.a
w.d=D.aSZ
w.f=w.e=null},
$S:0}
C.dX7.prototype={
$0(){var w=this.a
w.d=D.aT_
w.f=null},
$S:0}
C.dXg.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+2}
C.dX9.prototype={
$2(d,e){var w=this.a,v=w.gb4_()[e]
return new C.aaU(v,this.b,new C.dX8(w,v),null)},
$S:z+46}
C.dX8.prototype={
$0(){return this.a.c4p(this.b.a)},
$S:0}
C.dXb.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+47}
C.dXd.prototype={
$2(d,e){return B.S},
$S:36}
C.dXc.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.rZ:B.c,p=A.m(16),o=A.m(16),n=A.m(16),m=A.I(r?B.aK:B.aL,B.q,1),l=A.a([new A.ac(0,B.G,B.w.j(r?0.28:0.06),B.dC,8)],x.V),k=A.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=A.m(10)
v=A.m(10)
k.push(A.bv(w,K.aO8(v,B.bQ,52,D.ZE,r?B.bJ:B.ak,j,52),B.aq))}else{j=u.d.d
w=A.b0(j).j(0.15)
v=A.m(12)
k.push(A.p(t,A.W(D.ZE,A.b0(j),t,t,t,24),B.f,t,t,new A.o(w,t,t,v,t,t,B.n),t,52,t,t,t,t,t,52))}k.push(B.bf)
k.push(A.D(A.d(s.b,t,t,t,t,t,t,A.l(t,t,r?B.aQ:B.M,t,t,t,t,t,t,t,t,13,t,t,B.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(A.W(B.ex,r?B.bJ:B.ak,t,t,t,22))
return A.aF(!1,B.a1,!0,p,A.aK(!1,o,!0,A.p(t,A.A(k,B.m,t,B.e,B.j,0,t,t),B.f,t,t,new A.o(t,t,m,n,l,t,B.n),t,t,t,t,B.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dXa(u.a,s),t,t,t,t,t,t,t),B.f,q,0,t,t,t,t,t,B.ag)},
$S:78}
C.dXa.prototype={
$0(){return this.a.cb9(this.b)},
$S:0}
C.c7s.prototype={
$1(d){return new C.aaM(d,this.a,null)},
$S:z+48}
C.cCR.prototype={
$0(){var w=this.a.c,v=w.c,u=A.ol(v==null?w.b:v)
if(u!=null)A.iP(u,B.fk,null)},
$S:0}
C.cCS.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.cCT.prototype={
$1(d){var w=null,v=this.a.d.a,u=A.d("\u2022  ",w,w,w,w,w,w,A.l(w,w,v?B.cp:B.aK,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=B.a.i(d)
return new A.C(B.n2,A.A(A.a([u,A.D(A.d(t,w,w,w,w,w,w,A.l(w,w,v?B.cp:B.aK,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.F,w,B.e,B.j,0,w,w),w)},
$S:126}
C.ddL.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ddN.prototype={
$0(){return this.a.m(new C.ddM(this.b))},
$S:0}
C.ddM.prototype={
$0(){var w=this.a
return w.a.f?w.h0(0):w.py(0)},
$S:0}
C.fcZ.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.dXT.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.Ce)w.z=v
else w.Q=v},
$S:0}
C.dXK.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=B.d.gcZ(v).Q
v.toString
w.m2(v,B.cr,B.eN)},
$S:8}
C.dXM.prototype={
$1(d){return J.q(d,"role")==="ai"},
$S:91}
C.dXN.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.F(["role","user","text",this.b],v,v))
w.d.bN(0,B.c3)
w.r=!0},
$S:0}
C.dXO.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.F(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.dXP.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+A.t(w.h(d,"text"))},
$S:142}
C.dXQ.prototype={
$0(){var w=x.N
return this.a.f.push(A.F(["role","ai","text",this.b],w,w))},
$S:0}
C.dXR.prototype={
$0(){var w=x.N
return this.a.f.push(A.F(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.dXS.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dXL.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=A.mD(l,B.bz.j(0.9),l,l,l,l,l,2,l,l)
return new A.C(B.bW,A.A(A.a([new A.a6(22,22,k,l),B.av,A.d("Writing full song\u2026",l,l,l,l,l,l,A.l(l,l,this.b?B.az:B.dA,l,l,l,l,l,l,l,l,12,B.cC,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),B.m,l,B.e,B.j,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?B.a7:B.a3
k=k.c
k.toString
k=A.aI(k,B.bT,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new A.a7(B.a3,B.a7,B.x,A.a([B.aE,B.bz.j(0.85)],x.O),l,l)
else{q=x.O
q=new A.a7(B.a3,B.a7,B.x,v?A.a([B.bm,B.M],q):A.a([B.c,B.aQ],q),l,l)}p=A.a([new A.ac(0,B.G,(u?B.bz:B.aE).j(0.22),B.jl,14)],x.V)
o=A.I(B.c.j(u?0.2:0.08),B.q,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=B.c
else v=v?B.aL:B.bh
n=u?13.5:15
m=u?B.bl:B.cC
return new A.bH(t,l,l,A.p(l,A.d(w,l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?B.a4:B.cu,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,new A.aY(0,k.a.a*0.94,0,1/0),new A.o(l,l,o,new A.bp(B.k2,B.k2,new A.aV(s,s),new A.aV(r,r)),p,q,B.n),l,l,l,B.kH,B.jd,l,l,l),l)},
$S:40}
C.dY_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&A.c()
w=m.x
w===$&&A.c()
v=A.m(22)
u=this.b
t=x.O
s=u?A.a([D.ac0,B.M,B.nD],t):A.a([B.qC,B.qx,B.ph],t)
w=A.a([new A.ac(-4,B.G,B.aE.j(0.35+w*0.25),B.dk,28)],x.V)
r=A.I(B.c.j(u?0.08:0.5),B.q,1)
q=A.dl()
p=q.a
p.$flags&2&&A.ak(p)
p[11]=0.001
m=m.x
m===$&&A.c()
q.fv(m*0.08)
q=A.fs(B.A,A.p(o,D.bG5,B.f,o,o,new A.o(o,o,A.I(B.aM.j(0.6),B.q,2),o,o,D.e9Z,B.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=A.nH(B.jp,D.fnO,new C.dXX())
p=x.p
m=A.a([A.A(A.a([q,B.bf,A.D(A.v(A.a([m,A.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,A.l(o,o,u?B.aR:B.aX,o,o,o,o,o,o,o,o,10,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),B.F,o,B.e,B.j,0,B.p),1)],p),B.m,o,B.e,B.j,0,o,o),B.ac,A.A(A.a([n.au5(D.Ce,"Swahili","\ud83c\uddf9\ud83c\uddff",u),B.ab,n.au5(D.aEp,"English","\ud83c\uddec\ud83c\udde7",u),B.ab,n.au5(D.Cf,"Mix","\ud83d\udd25",u)],p),B.m,o,B.e,B.j,0,o,o)],p)
if(n.x!==D.Cf){t=A.a([B.P,n.ctV(u)],p)
if(n.w){q=n.x===D.Ce?D.a2s:D.a1E
p=A.T(q).k("K<1,r>")
q=A.B(new A.K(q,new C.dXY(n,u),p),p.k("aj.E"))
t.push(new A.C(B.kh,A.c_(B.bB,q,B.bs,6,6),o))}B.d.v(m,t)}else{t=A.a([B.bz.j(0.22),B.aE.j(0.12)],t)
q=A.m(12)
p=A.I(B.bz.j(0.45),B.q,1)
m.push(new A.C(B.kh,A.p(o,A.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,A.l(o,o,u?B.io:B.kF,o,o,o,o,o,o,o,o,10,o,o,B.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),B.f,o,o,new A.o(o,o,p,q,o,new A.a7(B.a3,B.a7,B.x,t,o,o),B.n),o,o,o,o,B.bS,o,o,o),o))}m.push(B.P)
t=x.dc
n=A.B(new A.K(D.d1x,new C.dXZ(n,u),t),t.k("aj.E"))
m.push(A.A(n,B.m,o,B.e,B.j,0,o,o))
return A.p(o,A.v(m,B.aj,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,r,v,w,new A.a7(B.ax,B.aC,B.x,s,o,o),B.n),o,o,o,I.ag5,I.agk,o,o,o)},
$S:95}
C.dXX.prototype={
$1(d){return D.bTw.aw(0,d)},
$S:66}
C.dXY.prototype={
$1(d){return this.a.ctW(d,this.b)},
$S:z+49}
C.dXZ.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aEr?6:0,m=o?5:0,l=A.m(12)
if(o){w=this.b
v=w?B.aE.j(0.45):B.aE.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=B.w.j(w?0.25:0.05)
u=v
v=w
w=u}t=A.m(12)
p=p.r?q:new C.dXW(p,d)
s=C.hzb(d)
if(o)r=B.c
else r=v?B.ad:B.bh
r=A.d(s,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.hzc(d)
if(o)v=B.ad
else v=v?B.c_:B.dA
return A.D(new A.C(new A.Q(0,0,n,0),A.aF(!1,B.a1,!0,l,A.aK(!1,t,!0,new A.C(Q.Lu,A.v(A.a([r,A.d(s,q,q,q,q,q,q,A.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.e,B.j,0,B.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,w,m,q,q,q,q,q,B.ag),q),1)},
$S:z+50}
C.dXW.prototype={
$0(){var w=this.a
return w.m(new C.dXV(w,this.b))},
$S:0}
C.dXV.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dY1.prototype={
$0(){var w=this.a
return w.m(new C.dY0(w))},
$S:0}
C.dY0.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dXJ.prototype={
$0(){var w=this.a
return w.m(new C.dXI(w,this.b))},
$S:0}
C.dXI.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.Cf
if(v===D.aEp&&w.Q==null)w.Q=B.d.gK(D.a1E).a},
$S:0}
C.dY2.prototype={
$0(){return this.a.cpw(this.b.a)},
$S:0}
C.dXU.prototype={
$0(){return this.a.Iq(this.b)},
$S:0}
C.dXG.prototype={
$1(d){return this.a.aXz()},
$S:2}
C.dXH.prototype={
$0(){return this.a.aXz()},
$S:0}
C.fHp.prototype={
$1(d){var w=this
return new C.YP(w.a,w.b,w.c,new C.fHo(w.d),null)},
$S:z+51}
C.fHo.prototype={
$0(){return J.lP(this.a.bd())},
$S:0}
C.db4.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.beH()},
$S:27}
C.db5.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a.f
m===$&&A.c()
m=m.x
m===$&&A.c()
w=this.b
v=m*3.141592653589793*2+w*0.55
m=this.c
u=x.w
t=A.aI(m,B.bT,u).w
s=Math.cos(v)
u=A.aI(m,B.bT,u).w
m=Math.sin(v*1.3)
r=Math.sin(v)
q=(w&1)===0
p=q?B.dW:B.h8
o=B.o.F(w,4)
q=q?B.aH:B.aJ
return A.ao(n,A.db(A.W(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:278}
C.dba.prototype={
$0(){},
$S:0}
C.db9.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&A.c()
w=t.x
w===$&&A.c()
v=B.mH.av(0,B.k.D(w,0,1))
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793)
w=A.dl()
u=w.a
u.$flags&2&&A.ak(u)
u[11]=0.0028
w.fv(t*0.08)
w.jQ(0.12)
return A.ea(B.A,A.fs(B.A,e,null,w,!0),0.5+v*0.5,null,null)},
$S:45}
C.db6.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=0.55+r*0.45
r=A.p(t,t,B.f,t,t,new A.o(t,t,t,t,A.a([new A.ac(6,B.G,B.aH.j(w*0.5),B.J,36)],x.V),t,B.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new A.an(B.A,t,B.aa,B.r,A.a([r,new A.a6(96,96,A.mD(B.c.j(0.08),B.aH,t,t,t,t,t,6,u/v,t),t),A.d(""+s.a.c,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,38,t,t,B.u,t,t,!0,t,t,t,t,t,A.a([new A.cP(B.aH.j(w),B.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:114}
C.db7.prototype={
$1(d){return D.bTA.aw(0,d)},
$S:66}
C.db8.prototype={
$0(){var w=this.a
w.a.beH()
w.a.e.$0()},
$S:0}
C.c9q.prototype={
$1(d){var w=!1
if(B.a.i(d.b.toLowerCase())===this.a)if(d.d===B.fq)if(d.x===B.ds){w=d.w
w=B.a.i(w==null?"":w)===this.b}return w},
$S:16}
C.c9D.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e8J.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.e9p.prototype={
$1(d){var w=this.a
if(w.c!=null)w.P4()},
$S:8}
C.e9q.prototype={
$1(d){var w=$.aT.p2$
if(w===B.rJ||w===B.rK)return
this.a.Ed()},
$S:13}
C.e9r.prototype={
$1(d){this.a.cw0()},
$S:13}
C.e97.prototype={
$0(){this.a.IT(this.b.d,!1)},
$S:0}
C.e98.prototype={
$0(){},
$S:0}
C.e99.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.e9a.prototype={
$0(){},
$S:0}
C.e9b.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e9c.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.e9d.prototype={
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
C.e92.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=A.bl(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=A.bl(v[1],!0,x.N)
w.Op()
w.a7q()},
$S:0}
C.e8K.prototype={
$0(){this.b.IT(this.c.d+this.a.a,!1)},
$S:0}
C.e93.prototype={
$1(d){var w=d.d
return(w===B.fq||w===B.eK)&&d.x===B.ds},
$S:16}
C.e94.prototype={
$1(d){return d.a},
$S:168}
C.e95.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e96.prototype={
$0(){},
$S:0}
C.e8O.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bl(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=A.bl(v[0],!0,x.N)},
$S:0}
C.e8P.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.e8X.prototype={
$0(){},
$S:0}
C.e8U.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.e8V.prototype={
$0(){var w=this.a,v=A.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e8W.prototype={
$0(){var w=this.a,v=A.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e8Y.prototype={
$0(){return this.a.z=!0},
$S:0}
C.e8Z.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new A.v8(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.e9_.prototype={
$0(){return this.a.z=!1},
$S:0}
C.e91.prototype={
$0(){var w=this.a
return w.m(new C.e90(w))},
$S:0}
C.e90.prototype={
$0(){return this.a.y=1},
$S:0}
C.e8Q.prototype={
$0(){return this.a.y=1},
$S:0}
C.e8R.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.e9h.prototype={
$1(d){return d.a.length===0},
$S:16}
C.e9i.prototype={
$2(d,e){return e.y.aL(0,d.y)},
$S:71}
C.e9m.prototype={
$0(){var w=this.a
return w.m(new C.e9f(w))},
$S:0}
C.e9f.prototype={
$0(){return this.a.y=1},
$S:0}
C.e9n.prototype={
$0(){var w=this.a
return w.m(new C.e9e(w))},
$S:0}
C.e9e.prototype={
$0(){return this.a.y=2},
$S:0}
C.e9o.prototype={
$0(){return A.iL(this.a,null)},
$S:0}
C.e9j.prototype={
$2$cloudRequest(d,e){return this.a.aYF(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1653}
C.e9k.prototype={
$0(){return this.a.Ed()},
$S:1}
C.e9l.prototype={
$0(){var w=this.a
return w.m(new C.e9g(w))},
$S:0}
C.e9g.prototype={
$0(){var w=this.a
return w.y=B.o.D(w.y-1,0,2)},
$S:0}
C.e8N.prototype={
$0(){A.eR()
var w=this.a
w.m(new C.e8M(w))},
$S:0}
C.e8M.prototype={
$0(){return this.a.y=0},
$S:0}
C.e8L.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=A.bD_(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.c.j(0.55),B.q,1.2),t,A.a([new A.ac(1,B.G,B.aw.j(0.55),B.J,18)],x.V),D.bRE,B.a6),t,t,t,t,t,t,t,t),B.ev,B.tq,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=A.a([],w)
for(u=0;u<3;++u)v.push(r.c0j(u))
return new A.an(B.W,t,B.aa,B.r,A.a([q,A.A(v,B.m,t,B.e,B.j,0,t,t)],w),t)},
$S:62}
C.e8T.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
A.eR()
w.m(new C.e8S(w,v))},
$S:0}
C.e8S.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfy.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===B.fq||v===B.eK)return!0
if(d.c!==0)v=B.a.t(w,"clock-in daily earnings")||B.a.t(w,"clock-in earnings")
else v=!1
return v},
$S:16}
C.dfz.prototype={
$1(d){return new A.S(Date.now(),0,!1)},
$S:659}
C.dfA.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new A.S(Date.now(),0,!1)
u=A.dB(C.fOD(v.c,u))
w=this.c?new C.dfx(v):null
return v.b5L(this.b,B.pO,D.eH,w,"Today","$"+u,D.eH)},
$S:1655}
C.dfx.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.dfB.prototype={
$2(d,e){var w=this.a
return w.b5L(this.b,B.jV,B.c8,w.w,"Balance","$"+A.dB(A.Kt(w.c.a,new C.dfw(w))),B.cs)},
$S:58}
C.dfw.prototype={
$0(){return this.a.c.d},
$S:79}
C.dfr.prototype={
$0(){this.a.a.cNa()
return null},
$S:0}
C.dfs.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(w,w,w,new C.btv(v,w),B.au)},
$S:70}
C.dft.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b9D(v,!0,B.aw,D.ok,w)}else{v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b9C(v,D.ok,w)}return A.b3(w,w,w,v,B.au)},
$S:70}
C.dfu.prototype={
$1(d){return new A.S(Date.now(),0,!1)},
$S:659}
C.dfv.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new A.S(Date.now(),0,!1)
w=r.a
v=w.a.cLX(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:B.k.D(v/u,0,1)}u=w.d
u===$&&A.c()
s=w.e
s===$&&A.c()
return A.c6(new A.h3(A.a([u,s],x.U)),new C.dfq(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1656}
C.dfq.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=A.a([],m),k=o.b
if(k)B.d.v(l,A.iq(7,new C.dfp(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&A.c()
v=v.x
v===$&&A.c()
u=o.d
l.push(A.b3(n,n,n,new C.b9B(o.c,v,k,u,D.ok,D.biY,n),D.eJh))
v=A.I(B.c.j(0.1),B.q,1.2)
if(k)t=B.vr
else t=o.e?B.vk:D.bBi
t=A.W(t,k?D.ok:B.b1,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=A.d(s,n,n,n,n,n,n,A.l(n,n,B.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,B.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+A.dB(w.f&&w.d>0?w.d:o.f)}q=k?D.ok:B.c
w=A.d(w,n,n,n,n,n,n,A.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,B.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=A.m(999)
p=u.j(0.16)
u=A.I(u.j(0.5),B.q,1)
l.push(A.p(n,A.v(A.a([t,B.an,s,B.at,w,B.P,A.p(n,A.d(o.r,n,n,n,n,n,n,A.l(n,n,k?D.ok:B.op,n,n,n,n,n,n,n,n,9,n,n,B.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),B.f,n,n,new A.o(p,n,u,q,n,n,B.n),n,n,n,n,B.kJ,n,n,n)],m),B.m,n,B.bb,B.j,0,B.p),B.f,n,n,new A.o(B.K,n,v,n,n,n,B.a6),n,176,n,n,n,n,n,176))
return A.av(new A.a6(276,276,new A.an(B.A,n,B.aa,B.f,l,n),n),n,n,n)},
$S:229}
C.dfp.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=B.k.F(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=B.o.F(d,3)
t=B.o.F(d,2)
return A.ao(s,A.e0(A.db(A.p(s,s,B.f,s,s,new A.o(s,s,s,A.m(40),s,new A.bR(B.A,0.5,B.x,s,0,A.a([D.ok.j(0.38),B.c.j(0.08),B.K],x.O),s,s),B.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),!0,s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:233}
C.dfS.prototype={
$0(){},
$S:0}
C.dfT.prototype={
$0(){},
$S:0}
C.dfU.prototype={
$1(d){return d.x===B.ds},
$S:16}
C.dfE.prototype={
$0(){return this.a.a.d.d},
$S:79}
C.dfD.prototype={
$0(){var w,v
A.eR()
w=this.a
v=this.b
w.m(new C.dfC(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)A.fb(null,x.H)}},
$S:0}
C.dfC.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dfP.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=A.m(12),q=s?w.b.j(0.18):B.c.j(0.04),p=A.I(s?w.b.j(0.7):B.c.j(0.08),B.q,1)
return A.D(new A.C(B.je,A.aE(v,A.dg(B.A,A.d("$"+t,v,v,v,v,v,v,A.l(v,v,s?w.b:B.ad,v,v,v,v,v,v,v,v,13,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,B.bc,new A.o(q,v,p,r,v,v,B.n),B.hX,v,38,v,v,v,v,v),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dfR(u,d),v,v,v,v,v,v,!1,B.a8),v),1)},
$S:1658}
C.dfR.prototype={
$0(){A.eR()
var w=this.a
w.m(new C.dfQ(w,this.b))},
$S:0}
C.dfQ.prototype={
$0(){var w=""+this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.dfO.prototype={
$4$bold$color(d,e,f,g){var w=null,v=A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?B.c:g,t=f?15:13
return new A.C(B.xi,A.A(A.a([v,B.b4,A.d(e,w,w,w,w,w,w,A.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?B.u:B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1659}
C.dfN.prototype={
$1(d){return this.a.m(new C.dfM())},
$S:2}
C.dfM.prototype={
$0(){},
$S:0}
C.dfH.prototype={
$1(d){return this.a.aUj(d)&&!A.fW4(d)},
$S:16}
C.dfI.prototype={
$2(d,e){return e.y.aL(0,d.y)},
$S:71}
C.dfJ.prototype={
$0(){return this.a.a.d.d},
$S:79}
C.dfK.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return A.b(x.r.b(s)?s:A.dP(s,x.H),$async$$0)
case 2:if(t.c!=null)t.m(new C.dfG())
t.lZ("Balance refreshed.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dfG.prototype={
$0(){},
$S:0}
C.dfL.prototype={
$0(){var w=this.a
return w.m(new C.dfF(w))},
$S:0}
C.dfF.prototype={
$0(){return this.a.r+=80},
$S:0}
C.frp.prototype={
$2(d,e){return e.y.aL(0,d.y)},
$S:71}
C.fl2.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail"),u=!1
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.z(v,this.b)){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fBM.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail")
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fl1.prototype={
$1(d){var w,v,u
if(!C.hUL(d,this.a))return!1
w=J.a8(d)
v=w.h(d,"sessionUpdatedAt")
v=A.bi(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=A.bi(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=A.bi(J.k(w==null?"":w))}if(u!=null&&B.o.an(new A.S(Date.now(),0,!1).by(u).a,36e8)>72)return!1
return!0},
$S:4}
C.fax.prototype={
$1(d){var w=this.a
if(B.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:76}
C.fAB.prototype={
$0(){return $.fTG=null},
$S:11}
C.fAC.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.fyw.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.fyx.prototype={
$0(){var w,v=this.a
$.fTu.W(0,v)
w=C.tJ(this.b,v)
if(w!=null)A.Q4(A.a([A.a1(w,x.N,x.z)],x._),v)},
$S:0}
C.fCR.prototype={
$1(d){return new C.ZC(this.a,this.b,null)},
$S:z+56}
C.e2Z.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.e31.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.e32.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.m(new C.e30(w))},
$S:2}
C.e30.prototype={
$0(){return this.a.f=""},
$S:0}
C.e33.prototype={
$1(d){return this.a.aXN()},
$S:2}
C.e34.prototype={
$0(){var w=this.a
return w.m(new C.e3_(w,this.b))},
$S:0}
C.e3_.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fkc.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+B.a.b0(d,1)},
$S:14}
C.fkb.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+B.a.b0(d,1)},
$S:14}
C.fAS.prototype={
$1(d){var w,v=x.f
if(v.b(d))return A.a1(d,x.N,x.z)
try{v=A.a1(v.a(d.ae()),x.N,x.z)
return v}catch(w){return A.V(x.N,x.z)}},
$S:12}
C.fAT.prototype={
$1(d){return J.cx(d)},
$S:4}
C.fuN.prototype={
$1(d){return d.a!=="send_email"},
$S:319}
C.fAj.prototype={
$1(d){var w=null,v=B.w.j(0.35),u=A.m(10),t=A.I(B.b2,B.q,1)
return A.p(B.A,A.d(d,w,w,w,w,w,w,B.i3,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,86,w,B.eQ,w,w,w,72)},
$S:661}
C.cbb.prototype={
$1(d){return J.k(d)},
$S:17}
C.cbc.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b6(d,new C.cba(),x.S)
w=A.B(w,w.$ti.k("aj.E"))
return w}return A.c2(7,0,!1,x.S)},
$S:662}
C.cba.prototype={
$1(d){var w
if(A.iF(d))w=d
else{w=A.c7(J.k(d),null)
if(w==null)w=0}return w},
$S:435}
C.cbd.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b6(d,new C.cb9(),x.S)
w=A.B(w,w.$ti.k("aj.E"))
return w}return A.c2(8,0,!1,x.S)},
$S:662}
C.cb9.prototype={
$1(d){var w
if(A.iF(d))w=d
else{w=A.c7(J.k(d),null)
if(w==null)w=0}return w},
$S:435}
C.cbf.prototype={
$1(d){return A.bl(d,!0,x.S)},
$S:663}
C.cbg.prototype={
$1(d){return A.bl(d,!0,x.S)},
$S:663}
C.cb8.prototype={
$1(d){var w=this.a
if(B.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:76}
C.cbe.prototype={
$2(d,e){return d+e},
$S:75}
C.cb7.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.q(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:75}
C.flT.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.flN.prototype={
$0(){return this.a.$1(D.pY)},
$S:0}
C.flO.prototype={
$0(){return this.a.$1(D.pY)},
$S:0}
C.flP.prototype={
$0(){return this.a.$1(D.pY)},
$S:0}
C.flQ.prototype={
$0(){return this.a.$1(D.pY)},
$S:0}
C.flR.prototype={
$0(){return this.a.$1(D.pY)},
$S:0}
C.flS.prototype={
$0(){return this.a.$1(D.pY)},
$S:0}
C.f7T.prototype={
$2(d,e){var w,v,u=this,t=null,s=B.o.an(e,8),r=B.o.F(e,8),q=B.o.F(s+r,2),p=u.a,o=J.q(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.W4:D.b7u
if(o===0)w=t
else{w=x.O
w=o===1?A.a([B.c,B.aL],w):A.a([B.bm,B.w],w)
v=n?B.aM:B.dn
w=A.p(t,t,B.f,t,t,new A.o(t,t,A.I(v,B.q,n?3:1),t,A.a([new A.ac(0,B.G,B.w.j(0.35),B.dC,4)],x.V),new A.bR(B.A,0.5,B.x,t,0,w,t,t),B.a6),t,28,t,t,t,t,t,28)}return A.aE(t,A.p(t,A.av(w,t,t,t),B.f,q,t,t,t,t,t,t,t,t,t,t),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f7S(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,B.a8)},
$S:77}
C.f7S.prototype={
$0(){var w=this,v=w.a,u=v.cRL(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.pY:D.Hs
w.f.$1(v)}},
$S:0}
C.fkm.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new A.a6(u,u,A.ic(!0,v,v,B.y,R.aMN,new C.fkl(w.a,w.b,w.c,w.d,u),9,v,B.dQ,B.ah,!1),v)},
$S:172}
C.fkl.prototype={
$2(d,e){var w=this,v=null,u=A.m(12),t=A.m(12),s=w.a,r=s.at[e],q=r==="X"?B.aV:B.ay
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.av(A.d(r,v,v,v,v,v,v,A.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fkk(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),B.f,B.fm,0,v,v,v,v,v,B.ag)},
$S:78}
C.fkk.prototype={
$0(){var w=this,v=w.a.cRM(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.f7j.prototype={
$1(d){return new A.C(B.je,C.fyn(d,!1),null)},
$S:304}
C.f7k.prototype={
$1(d){return C.fyn(d,!1)},
$S:1663}
C.f7l.prototype={
$0(){var w=this,v=w.a
v.cBY(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.f7m.prototype={
$0(){var w=this
w.a.cBZ(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.fhz.prototype={
$1(d){var w=this,v=null,u=d*6
return A.mB(v,B.bm,A.d(""+u,v,v,v,v,v,v,B.cc,v,v,v),B.dl,new C.fhy(w.a,w.b,u,w.c,w.d),v,v,new A.aA(B.c.j(0.2),1,B.q,-1),v)},
$S:1664}
C.fhy.prototype={
$0(){var w=this,v=w.a,u=w.b.aA(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.fjt.prototype={
$1(d){return D.d5i[d]},
$S:74}
C.fju.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=A.a([s.aA(6),s.aA(6),s.aA(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.fgj.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.fgk.prototype={
$0(){var w=this,v=w.a
if(w.b.aj()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.f8k.prototype={
$0(){var w=this,v=w.a.cHx(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.f8j.prototype={
$1(d){var w,v=null,u=J.q(this.a.fr[5-d],this.b)
if(u===0)w=B.ma
else w=u===1?B.dG:B.rc
return new A.fG(1,A.p(v,v,B.f,v,v,new A.o(w,v,A.I(B.bF,B.q,1),v,v,v,B.a6),v,v,v,B.n5,v,v,v,v),v)},
$S:1665}
C.fgw.prototype={
$1(d){var w=this
if(w.a.b9c(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.fgx.prototype={
$0(){var w=this
if(w.a.b9c(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.f7N.prototype={
$0(){var w=this
if(w.a.aj()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fqp.prototype={
$1(d){var w=J.q(d,"email")
return B.a.t(B.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fqq.prototype={
$1(d){var w,v=J.a8(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=B.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+B.a.i(J.k(v==null?"":v))+">"},
$S:52}
C.eAV.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aJ8.prototype
w.brZ=w.a_
w.brY=w.q
w=C.aJ9.prototype
w.bs0=w.a_
w.bs_=w.q
w=C.aJa.prototype
w.bs2=w.a_
w.bs1=w.q
w=C.aK6.prototype
w.bt0=w.a_
w.bt_=w.q
w=C.aJG.prototype
w.bsz=w.q
w=C.aKf.prototype
w.bt9=w.q
w=C.aJb.prototype
w.bs3=w.q
w=C.aKn.prototype
w.bti=w.q
w=C.aJg.prototype
w.bs8=w.q
w=C.aJw.prototype
w.bsp=w.q
w=C.aL3.prototype
w.btZ=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.ayW.prototype,"gbNI","bNJ",19)
v(q,"gaQO","aQP",1)
v(C.ayV.prototype,"gcsS","a1h",1)
v(q=C.ayX.prototype,"gbT3","bT4",1)
v(q,"gbDk","bDl",1)
v(q=C.aw8.prototype,"gcm5","cm6",1)
v(q,"gcaH","Pw",0)
v(q,"gcwO","cwP",1)
v(q,"gcp3","mQ",0)
w(q,"gcf0","cf1",25)
w(q,"gcvb","Rf",33)
v(q=C.aB2.prototype,"gbLQ","WL",0)
v(q,"gc0U","Yc",0)
v(q,"gc0R","Yb",0)
v(q,"gc0S","ac4",0)
v(q,"gc0T","Ot",0)
v(C.ayk.prototype,"gc0V","c0W",1)
u(C,"i0X","hxo",58)
t(C,"fWb",0,null,["$1","$0"],["hg_",function(){return C.hg_(null)}],3,0)
t(C,"bBr",0,null,["$1","$0"],["hfZ",function(){return C.hfZ(null)}],3,0)
v(C.Mo.prototype,"gDY","c7U",1)
v(C.aBO.prototype,"gcmm","Ap",0)
v(q=C.aC4.prototype,"gcb0","Py",0)
v(q,"gcfI","a_v",0)
v(q,"gc4j","c4k",1)
v(q=C.aCg.prototype,"gc4o","ad_",0)
v(q,"gbx1","a7g",0)
v(q,"gcmB","a0t",0)
s(q,"gc8o","c8p",35)
v(C.aEe.prototype,"gbxt","a7i",1)
v(q=C.aEd.prototype,"gc4n","acZ",0)
v(q,"gc9Z","ae2",0)
v(q=C.aCi.prototype,"gbWL","aaV",0)
v(q,"gbWN","Xo",0)
v(q,"gbWM","aaW",0)
v(q=C.aCh.prototype,"gbzQ","bzR",1)
v(q,"gbzS","bzT",1)
v(C.aCj.prototype,"gbFz","bFA",1)
v(C.azg.prototype,"gc4q","c4r",1)
v(q=C.aCG.prototype,"gaXH","c4G",1)
r(q,"gaYD",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["adG","aws","aYF","aYE"],52,0,0)
r(q,"gc7C",0,4,null,["$4"],["c7D"],53,0,0)
v(q,"gc9I","ZF",0)
v(q,"gcay","ae9",0)
v(q,"gcau","ae7",0)
v(q,"gbZF","abF",0)
w(C.aA2.prototype,"gbYt","bYu",54)
w(q=C.aA4.prototype,"gcu3","cu4",55)
v(q,"gcsJ","csK",1)
v(q,"gcAl","cAm",1)
v(C.aCt.prototype,"gc51","aXN",1)
v(C.aDh.prototype,"gaYe","awf",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.j3,[C.cpH,C.cpE,C.cpF,C.cpG,C.cpD,C.eWR,C.eWP,C.eWT,C.eWQ,C.fey,C.d7y,C.d7J,C.d7R,C.d7S,C.d7U,C.d7M,C.d7K,C.d7L,C.d7N,C.d7O,C.d7E,C.d7F,C.d7D,C.d7H,C.d7I,C.d7B,C.d7A,C.d7W,C.d7Z,C.dLX,C.dLW,C.dLY,C.dLV,C.dLU,C.d7s,C.d7v,C.d7w,C.d7u,C.d7t,C.d9k,C.d9l,C.d9m,C.d8A,C.d8B,C.d94,C.d8Q,C.d8R,C.d8S,C.d8T,C.d8U,C.d82,C.d8z,C.d95,C.d9e,C.d92,C.d91,C.d8x,C.d8y,C.d9a,C.d9b,C.d84,C.d85,C.d8J,C.d8K,C.d8L,C.d8I,C.d8V,C.d8W,C.d8X,C.d8Y,C.d8Z,C.d9_,C.d98,C.d8M,C.d8N,C.d8O,C.d8P,C.d9c,C.d9d,C.d86,C.d87,C.d88,C.d89,C.d96,C.d97,C.d8H,C.d90,C.d8F,C.d9f,C.d9g,C.d9h,C.d8C,C.d8l,C.d8k,C.d8j,C.d8p,C.d8i,C.d8g,C.d8b,C.d8e,C.d8a,C.d8u,C.d8v,C.d8c,C.dcR,C.cA4,C.czV,C.czW,C.cAe,C.cAb,C.cAc,C.cAd,C.cA6,C.cA5,C.czX,C.cA7,C.cAx,C.cAt,C.cAs,C.cA2,C.cA3,C.cA_,C.cAa,C.cAi,C.cAj,C.cAk,C.cAl,C.cAm,C.cAn,C.cAo,C.cAJ,C.cAC,C.cAz,C.cAE,C.cAB,C.cAy,C.czY,C.cAv,C.dtm,C.dtn,C.dtd,C.dtb,C.dtl,C.dta,C.dt9,C.dtc,C.dth,C.dti,C.dtf,C.dtg,C.dto,C.dtp,C.dtq,C.dtr,C.eQG,C.eQH,C.d2r,C.frj,C.dzN,C.dzF,C.dzH,C.dzL,C.dzG,C.dzI,C.dzJ,C.c4h,C.fyl,C.fyk,C.dsZ,C.dsY,C.dt_,C.dsX,C.dSY,C.dSZ,C.dT5,C.fGD,C.fGE,C.bYo,C.dM2,C.dM3,C.dM4,C.dM5,C.dM6,C.dM7,C.dM1,C.dM8,C.dM0,C.dMb,C.dMa,C.dM9,C.dTp,C.dTq,C.dTn,C.dTm,C.dTo,C.dTk,C.dWZ,C.dX_,C.dWI,C.dWK,C.dWW,C.dWX,C.dWR,C.dWP,C.dWV,C.dWS,C.dWM,C.dWL,C.dX0,C.cJ9,C.cJ7,C.cJ8,C.cJ6,C.cJc,C.cJd,C.eLL,C.eLQ,C.eLN,C.eLP,C.eLO,C.eLH,C.eLG,C.eLJ,C.eLI,C.dXl,C.dXq,C.dXm,C.dXn,C.dXp,C.dXv,C.dXw,C.dXx,C.dXy,C.dXz,C.dXA,C.dXB,C.dXC,C.dXu,C.dXD,C.dXt,C.dXs,C.dXr,C.dXe,C.dXf,C.dX6,C.dX7,C.dX8,C.dXa,C.cCR,C.ddL,C.ddN,C.ddM,C.dXT,C.dXN,C.dXO,C.dXQ,C.dXR,C.dXS,C.dXW,C.dXV,C.dY1,C.dY0,C.dXJ,C.dXI,C.dY2,C.dXU,C.dXH,C.fHo,C.dba,C.db8,C.e8J,C.e97,C.e98,C.e99,C.e9a,C.e9c,C.e9d,C.e92,C.e8K,C.e96,C.e8O,C.e8P,C.e8X,C.e8U,C.e8V,C.e8W,C.e8Y,C.e8Z,C.e9_,C.e91,C.e90,C.e8Q,C.e8R,C.e9m,C.e9f,C.e9n,C.e9e,C.e9o,C.e9k,C.e9l,C.e9g,C.e8N,C.e8M,C.e8T,C.e8S,C.dfx,C.dfw,C.dfr,C.dfS,C.dfT,C.dfE,C.dfD,C.dfC,C.dfR,C.dfQ,C.dfM,C.dfJ,C.dfK,C.dfG,C.dfL,C.dfF,C.fAB,C.fyx,C.e2Z,C.e31,C.e30,C.e34,C.e3_,C.flN,C.flO,C.flP,C.flQ,C.flR,C.flS,C.f7S,C.fkk,C.f7l,C.f7m,C.fhy,C.fju,C.fgk,C.f8k,C.fgx,C.f7N,C.eAV])
u(A.hT,[C.cpI,C.eWS,C.fv6,C.fuZ,C.fev,C.feu,C.fex,C.d80,C.d81,C.d7Q,C.d7P,C.d7T,C.d7C,C.d7G,C.d7V,C.dM_,C.d7x,C.d9n,C.d9o,C.d9p,C.d9q,C.d9r,C.d93,C.d99,C.d83,C.d9j,C.d9i,C.d8m,C.d8n,C.d8o,C.d8q,C.d8s,C.dcS,C.cAK,C.cA9,C.cA8,C.cAr,C.cAu,C.cAq,C.cA0,C.cAh,C.cAf,C.cAw,C.cAg,C.cAF,C.cAD,C.cAI,C.bX6,C.bX5,C.bX8,C.bX7,C.dtk,C.dtj,C.dte,C.dts,C.dtt,C.fi6,C.fjj,C.d2s,C.d2q,C.bXS,C.fri,C.dzO,C.dzM,C.c4i,C.fk5,C.fyj,C.c6g,C.c6f,C.c6I,C.dSW,C.dSX,C.ftF,C.fts,C.ftr,C.fgn,C.c6W,C.c6X,C.c6Y,C.c6V,C.c6U,C.fef,C.fGz,C.fGA,C.fGB,C.fGC,C.fGy,C.dT2,C.dT3,C.dT1,C.fGF,C.d9s,C.c8w,C.fde,C.dMc,C.dTl,C.c7n,C.c7k,C.c7m,C.c7p,C.c_M,C.c_K,C.c_P,C.c7w,C.c7v,C.c7u,C.c7t,C.c7y,C.c7A,C.dX4,C.dWJ,C.dWH,C.dWY,C.dWQ,C.dWU,C.dWT,C.dWO,C.dX2,C.dX1,C.cJa,C.cJb,C.eLM,C.eLF,C.eLK,C.c7q,C.fvp,C.dXF,C.dXo,C.dXh,C.dXi,C.dXj,C.dXk,C.dXE,C.c7s,C.cCS,C.cCT,C.fcZ,C.dXK,C.dXM,C.dXP,C.dXX,C.dXY,C.dXZ,C.dXG,C.fHp,C.db4,C.db7,C.c9q,C.c9D,C.e9p,C.e9q,C.e9r,C.e9b,C.e93,C.e94,C.e95,C.e9h,C.e9j,C.dfy,C.dfz,C.dfu,C.dfp,C.dfU,C.dfP,C.dfO,C.dfN,C.dfH,C.fl2,C.fBM,C.fl1,C.fax,C.fAC,C.fyw,C.fCR,C.e32,C.e33,C.fkc,C.fkb,C.fAS,C.fAT,C.fuN,C.fAj,C.cbb,C.cbc,C.cba,C.cbd,C.cb9,C.cbf,C.cbg,C.cb8,C.flT,C.f7j,C.f7k,C.fhz,C.fjt,C.fgj,C.f8j,C.fgw,C.fqp,C.fqq])
t(C.bpF,A.iO)
u(A.ag,[C.EN,C.ak0,C.aBN,C.ak_,C.ak1,C.akS,C.ahf,C.amq,C.Zi,C.Zj,C.Yq,C.amV,C.amp,C.MV,C.ayY,C.anS,C.aov,C.Uw,C.OM,C.a_5,C.a_4,C.Ux,C.aoO,C.azQ,C.aoR,C.YP,C.apo,C.aA1,C.aA3,C.ZC,C.aqG])
u(A.ah,[C.aGJ,C.aJ9,C.aK6,C.aJ8,C.aJa,C.beW,C.aw8,C.aB2,C.bhl,C.bhm,C.ayk,C.bhs,C.aJG,C.aKf,C.aJb,C.aBO,C.aC4,C.aCg,C.b98,C.aEe,C.aEd,C.aCi,C.aCh,C.bf9,C.aKn,C.aJg,C.bvr,C.aJw,C.aA4,C.aCt,C.aL3])
u(A.ke,[C.eWU,C.few,C.d7z,C.d8_,C.d7Y,C.d7X,C.dLZ,C.d8G,C.d8E,C.d8D,C.d8h,C.d8r,C.d8f,C.d8t,C.d8d,C.d8w,C.cAp,C.cA1,C.cAA,C.cAH,C.cAG,C.czZ,C.d2p,C.dzK,C.fk6,C.fk7,C.dT_,C.fv1,C.fGx,C.dT4,C.dT7,C.dT6,C.d9t,C.c8x,C.c7o,C.c7l,C.c_N,C.c_L,C.c7z,C.dX5,C.dWN,C.dX3,C.eLS,C.eLR,C.dXg,C.dX9,C.dXb,C.dXd,C.dXc,C.dXL,C.dY_,C.db5,C.db9,C.db6,C.e9i,C.e8L,C.dfA,C.dfB,C.dfs,C.dft,C.dfv,C.dfq,C.dfI,C.frp,C.cbe,C.cb7,C.f7T,C.fkm,C.fkl])
t(C.aul,C.EN)
u(A.aC,[C.qy,C.acL,C.Mo,C.I3,C.r8,C.r9,C.lw,C.ig,C.i1,C.b7i,C.d_C,C.ddK,C.rf,C.Uy,C.N8,C.pE,C.aYF,C.oV,C.apK])
t(C.ayW,C.aJ9)
t(C.bhO,C.aK6)
t(C.ayV,C.aJ8)
t(C.ayX,C.aJa)
u(A.m3,[C.Vi,C.azR,C.apB,C.I8,C.E9])
u(A.au,[C.a_E,C.bqa,C.adw,C.Pj,C.a5J,C.MN,C.aop,C.acm,C.acl,C.aZv,C.azP,C.aaU,C.aZ1,C.aaM,C.aA2])
t(C.bhj,C.aJG)
t(C.bi_,C.aKf)
t(C.bdF,C.aJb)
t(C.aCj,C.aKn)
t(C.azg,C.aJg)
t(C.aCG,C.bvr)
t(C.bfS,C.aJw)
u(A.mG,[C.b9D,C.b9C,C.b9B,C.b93,C.btv,C.bov])
t(C.aDh,C.aL3)
w(C.aJ8,C.Mo)
w(C.aJ9,C.Mo)
w(C.aJa,C.Mo)
w(C.aK6,C.Mo)
w(C.aJG,A.eT)
w(C.aKf,A.c9)
w(C.aJb,A.c9)
w(C.aKn,A.c9)
w(C.aJg,A.eT)
w(C.aJw,A.eT)
v(C.bvr,A.ew)
w(C.aL3,A.c9)})()
A.jT(b.typeUniverse,JSON.parse('{"bpF":{"iO":[]},"EN":{"ag":[],"r":[]},"aGJ":{"ah":["EN<1,2>"]},"aul":{"EN":["1","hD<1>"],"ag":[],"r":[],"EN.T":"1","EN.S":"hD<1>"},"ak0":{"ag":[],"r":[]},"aBN":{"ag":[],"r":[]},"ak_":{"ag":[],"r":[]},"ak1":{"ag":[],"r":[]},"akS":{"ag":[],"r":[]},"ahf":{"ag":[],"r":[]},"ayW":{"ah":["ak0"]},"bhO":{"ah":["aBN"]},"ayV":{"ah":["ak_"]},"ayX":{"ah":["ak1"]},"beW":{"ah":["akS"]},"aw8":{"ah":["ahf"]},"amq":{"ag":[],"r":[]},"Zi":{"ag":[],"r":[]},"Zj":{"ag":[],"r":[]},"adw":{"au":[],"r":[]},"Yq":{"ag":[],"r":[]},"aB2":{"ah":["amq"]},"a_E":{"au":[],"r":[]},"bqa":{"au":[],"r":[]},"bhl":{"ah":["Zi"]},"bhm":{"ah":["Zj"]},"Pj":{"au":[],"r":[]},"ayk":{"ah":["Yq"]},"amV":{"ag":[],"r":[]},"bhs":{"ah":["amV"]},"a5J":{"au":[],"r":[]},"amp":{"ag":[],"r":[]},"bhj":{"ah":["amp"]},"MN":{"au":[],"r":[]},"aop":{"au":[],"r":[]},"MV":{"ag":[],"r":[]},"bi_":{"ah":["MV"]},"acm":{"au":[],"r":[]},"acl":{"au":[],"r":[]},"ayY":{"ag":[],"r":[]},"bdF":{"ah":["ayY"]},"aZv":{"au":[],"r":[]},"anS":{"ag":[],"r":[]},"aBO":{"ah":["anS"]},"aov":{"ag":[],"r":[]},"aC4":{"ah":["aov"]},"Uw":{"ag":[],"r":[]},"OM":{"ag":[],"r":[]},"a_5":{"ag":[],"r":[]},"a_4":{"ag":[],"r":[]},"aCg":{"ah":["Uw"]},"b98":{"ah":["OM"]},"aEe":{"ah":["a_5"]},"aEd":{"ah":["a_4"]},"Ux":{"ag":[],"r":[]},"aCi":{"ah":["Ux"]},"aoO":{"ag":[],"r":[]},"aaU":{"au":[],"r":[]},"aaM":{"au":[],"r":[]},"azQ":{"ag":[],"r":[]},"aCh":{"ah":["aoO"]},"azP":{"au":[],"r":[]},"aZ1":{"au":[],"r":[]},"bf9":{"ah":["azQ"]},"aoR":{"ag":[],"r":[]},"aCj":{"ah":["aoR"]},"YP":{"ag":[],"r":[]},"azg":{"ah":["YP"]},"apo":{"ag":[],"r":[]},"aA1":{"ag":[],"r":[]},"aA3":{"ag":[],"r":[]},"aCG":{"ah":["apo"],"ew":[]},"aA2":{"au":[],"r":[]},"bfS":{"ah":["aA1"]},"b9D":{"aB":[]},"b9C":{"aB":[]},"b9B":{"aB":[]},"aA4":{"ah":["aA3"]},"b93":{"aB":[]},"btv":{"aB":[]},"ZC":{"ag":[],"r":[]},"aCt":{"ah":["ZC"]},"bov":{"aB":[]},"aqG":{"ag":[],"r":[]},"aDh":{"ah":["aqG"]}}'))
A.Pu(b.typeUniverse,JSON.parse('{"Mo":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=A.ax
return{dw:w("lQ<w?>"),gS:w("nY"),o:w("d2"),g5:w("wH"),M:w("eW<n>"),k:w("S"),gv:w("l5<ai<j5>>"),gh:w("l5<n>"),gH:w("l5<H>"),r:w("ay<~>"),dk:w("a0"),fw:w("P<nY>"),E:w("P<d2>"),V:w("P<ac>"),O:w("P<w>"),A:w("P<a0>"),R:w("P<n6>"),B:w("P<ai<H>>"),m:w("P<a3<n,n>>"),_:w("P<a3<n,@>>"),b:w("P<r8>"),x:w("P<r9>"),gi:w("P<j5>"),a:w("P<lw>"),Y:w("P<i1>"),v:w("P<ig>"),dA:w("P<I3>"),F:w("P<rf>"),Z:w("P<kl>"),g:w("P<hn>"),gK:w("P<+at,details,id(S,n,n)>"),C:w("P<cP>"),s:w("P<n>"),G:w("P<iO>"),eO:w("P<eo>"),d9:w("P<eU>"),p:w("P<r>"),n:w("P<N>"),t:w("P<H>"),U:w("P<aB?>"),d4:w("P<n?>"),ck:w("ai<r8>"),e:w("ai<r9>"),ac:w("ai<j5>"),dZ:w("ai<lw>"),I:w("ai<i1>"),j:w("ai<@>"),L:w("ai<H>"),eq:w("a3<n,n>"),P:w("a3<n,@>"),f:w("a3<@,@>"),cl:w("cQ<n,C>"),aS:w("K<a0,t_>"),dc:w("K<I8,bD>"),dv:w("K<n,n>"),bL:w("K<N,bD>"),a3:w("K<H,bD>"),gN:w("K<H,pt>"),w:w("iz"),b1:w("r8"),Q:w("r9"),bP:w("lw"),i:w("i1"),u:w("ig"),gp:w("Uy"),J:w("N8"),D:w("pE"),an:w("kl"),c:w("co"),K:w("aC"),d:w("jk<n>"),di:w("+outcome,snapshot(Vi,a55?)"),ee:w("+after,before(N,N)"),et:w("+categories,error,message,replaceId(ai<i1>,n?,n?,n?)"),cz:w("EA"),bJ:w("dw<n>"),N:w("n"),e7:w("bn<N>"),W:w("cw<n>"),am:w("kb<H>"),cc:w("a2<n>"),aM:w("e7<d2>"),bG:w("e7<N>"),l:w("r"),gm:w("qy"),ec:w("acL"),q:w("mU"),y:w("R"),gR:w("N"),z:w("@"),S:w("H"),eG:w("d2?"),cJ:w("S?"),gw:w("ai<a3<n,@>>?"),bM:w("ai<@>?"),h:w("a3<n,@>?"),X:w("aC?"),gE:w("+code,qrPayload(n,n)?"),bY:w("+isLive,ownerEmail,snapshotJson(R,n,n)?"),T:w("n?"),cD:w("N?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aVV=new A.bp(B.bE,B.ii,B.bE,B.ii)
D.eH=new A.w(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,B.t)
D.aWn=new A.aA(D.eH,1,B.q,-1)
D.aWp=new A.aA(B.ad,2,B.q,-1)
D.aWs=new A.aA(B.aU,2,B.q,-1)
D.aWu=new A.aA(B.cp,0.8,B.q,-1)
D.aWK=new A.aA(B.aM,2,B.q,-1)
D.aWR=new A.aA(B.fg,1.6,B.q,-1)
D.aXH=new A.aY(0,330,0,1/0)
D.aXN=new A.aY(0,176,0,1/0)
D.aXO=new A.aY(0,1/0,0,260)
D.aY5=new A.aY(90,1/0,0,1/0)
D.b_S=new A.ac(0,B.G,B.dn,B.J,4)
D.cOG=w([D.b_S],x.V)
D.aYj=new A.o(B.c,null,null,null,D.cOG,null,B.a6)
D.cIX=w([D.eH,B.aZ],x.O)
D.bUA=new A.a7(B.a3,B.a7,B.x,D.cIX,null,null)
D.aYx=new A.o(null,null,null,null,null,D.bUA,B.a6)
D.aYC=new A.o(B.b8,null,null,null,null,null,B.a6)
D.b9D=new A.w(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,B.t)
D.d2l=w([P.abE,D.b9D],x.O)
D.bTG=new A.a7(B.b0,B.b6,B.x,D.d2l,null,null)
D.aYT=new A.o(null,null,null,B.m1,null,D.bTG,B.n)
D.bg8=new A.w(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,B.t)
D.dd5=w([D.bg8,M.adE],x.O)
D.bSU=new A.a7(B.b0,B.b6,B.x,D.dd5,null,null)
D.aZi=new A.o(null,null,null,B.rL,null,D.bSU,B.n)
D.cZs=w([B.aE,B.bz],x.O)
D.bTo=new A.a7(B.a3,B.a7,B.x,D.cZs,null,null)
D.aZo=new A.o(null,null,null,null,null,D.bTo,B.a6)
D.eXa=new A.G(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffc=new A.x("\ud83c\udf89",null,D.eXa,null,null,null,null,null,null,null,null,null)
D.b3L=new A.cp(B.A,null,null,D.ffc,null)
D.b53=new A.w(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,B.t)
D.aaV=new A.w(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,B.t)
D.b7u=new A.w(1,0.8431372549019608,0.8,0.7843137254901961,B.t)
D.b7y=new A.w(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,B.t)
D.ok=new A.w(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,B.t)
D.rZ=new A.w(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,B.t)
D.ac0=new A.w(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,B.t)
D.b9i=new A.w(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,B.t)
D.VG=new A.w(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,B.t)
D.wS=new A.w(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,B.t)
D.baC=new A.w(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,B.t)
D.W4=new A.w(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,B.t)
D.adm=new A.w(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,B.t)
D.bel=new A.w(1,0.9529411764705882,0.9411764705882353,1,B.t)
D.ber=new A.w(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,B.t)
D.adH=new A.w(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,B.t)
D.adW=new A.w(1,0,0.8392156862745098,0.30980392156862746,B.t)
D.bfI=new A.w(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,B.t)
D.bfO=new A.w(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,B.t)
D.bgI=new A.w(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,B.t)
D.WG=new A.w(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,B.t)
D.bhI=new A.w(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,B.t)
D.bic=new A.w(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,B.t)
D.WN=new A.w(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,B.t)
D.biY=new A.w(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,B.t)
D.af1=new A.a31(2,"active")
D.bmM=new A.b9(42e5)
D.bmP=new A.b9(53e4)
D.bmR=new A.b9(58e4)
D.bmV=new A.b9(82e4)
D.bnJ=new A.Q(0,30,0,30)
D.bnR=new A.Q(0,4,0,8)
D.bnU=new A.Q(0,8,12,8)
D.bov=new A.Q(12,0,12,88)
D.boC=new A.Q(12,11,12,10)
D.boZ=new A.Q(13,10,12,10)
D.bp6=new A.Q(14,10,14,2)
D.bpi=new A.Q(14,14,10,14)
D.bpN=new A.Q(16,12,16,96)
D.bpS=new A.Q(16,14,16,8)
D.bpW=new A.Q(16,16,16,96)
D.bpX=new A.Q(16,18,16,16)
D.bq0=new A.Q(16,4,16,10)
D.bqW=new A.Q(18,6,18,40)
D.bqY=new A.Q(18,8,18,130)
D.bra=new A.Q(20,10,20,20)
D.brn=new A.Q(20,18,20,18)
D.brr=new A.Q(20,20,20,22)
D.brN=new A.Q(22,22,22,16)
D.bsr=new A.Q(2,0,2,10)
D.btb=new A.Q(4,8,12,4)
D.bto=new A.Q(6,1,6,1)
D.btq=new A.Q(6,4,0,0)
D.btt=new A.Q(6,6,12,4)
D.btP=new A.Q(8,4,12,8)
D.fiD=new A.x("Activity",null,B.fN,null,null,null,null,null,null,null,null,null)
D.bvB=new A.bD(1,B.bi,D.fiD,null)
D.fqI=new A.x("Game Receipts",null,A3.rx,null,null,null,null,null,null,null,null,null)
D.fav=new A.x("Your last 59 games \xb7 kept for 7 days",null,Q.a6S,null,null,null,null,null,null,null,null,null)
D.cFo=w([D.fqI,D.fav],x.p)
D.bjY=new A.fq(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cFo,null)
D.bvE=new A.bD(1,B.bi,D.bjY,null)
D.bz6=new A.a0(58607,"MaterialIcons",!1)
D.ZE=new A.a0(62178,"MaterialIcons",!1)
D.bzV=new A.a0(62410,"MaterialIcons",!1)
D.bB4=new A.a0(63258,"MaterialIcons",!1)
D.bBa=new A.a0(63304,"MaterialIcons",!1)
D.bBb=new A.a0(63306,"MaterialIcons",!1)
D.bBi=new A.a0(63330,"MaterialIcons",!1)
D.alk=new A.a0(984777,"MaterialIcons",!1)
D.bDL=new A.ae(B.Fx,13,B.ad,null,null,null)
D.bDT=new A.ae(B.jz,13,B.pt,null,null,null)
D.alu=new A.ae(B.le,null,B.c,null,null,null)
D.bFp=new A.ae(B.Bm,34,B.aH,null,null,null)
D.bFX=new A.ae(B.FB,19,B.c,null,null,null)
D.bAd=new A.a0(62804,"MaterialIcons",!1)
D.bG5=new A.ae(D.bAd,24,B.aM,null,null,null)
D.bGx=new A.ae(B.B8,28,B.bj,null,null,null)
D.bH1=new A.ae(B.akZ,42,B.c,null,null,null)
D.bHa=new A.ae(B.a_u,30,B.c,null,null,null)
D.bHM=new A.ae(B.fK,null,B.c,null,null,null)
D.bI6=new A.ae(B.jz,16,B.c,null,null,null)
D.bIH=new A.ae(B.qZ,13,B.c,null,null,null)
D.bIQ=new A.ae(B.le,18,B.c,null,null,null)
D.bJm=new A.ae(B.vj,null,B.dG,null,null,null)
D.bK0=new A.ae(B.oC,28,B.c,null,null,null)
D.bKf=new A.ae(B.nc,22,null,null,null,null)
D.bKB=new A.ae(B.qV,null,null,null,null,null)
D.bKN=new A.ae(B.iT,28,B.c,null,null,null)
D.bKP=new A.ae(B.cy,null,B.aR,null,null,null)
D.bKW=new A.ae(B.Zl,14,B.c,null,null,null)
D.bLu=new A.ae(B.MZ,36,B.aJ,null,null,null)
D.bLB=new A.ae(B.oD,16,B.c,null,null,null)
D.bLQ=new A.ae(B.ee,null,null,null,null,null)
D.b9Y=new A.w(1,0.23137254901960785,0.16470588235294117,0,B.t)
D.bMo=new A.ae(B.dW,9,D.b9Y,null,null,null)
D.bC7=new A.a0(983146,"MaterialIcons",!1)
D.bMF=new A.ae(D.bC7,null,B.aM,null,null,null)
D.bN9=new A.ae(B.vm,28,D.eH,null,null,null)
D.bNe=new A.ae(B.tE,null,B.fg,null,null,null)
D.bNj=new A.ae(B.hY,20,D.eH,null,null,null)
D.bCs=new A.a0(983377,"MaterialIcons",!1)
D.bNt=new A.ae(D.bCs,64,B.c,null,null,null)
D.bNZ=new A.ae(B.h9,24,B.c,null,null,null)
D.bOT=new A.e1(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bP3=new A.e1(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bPi=new A.e1(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bPj=new A.e1(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.b8d=new A.w(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,B.t)
D.baV=new A.w(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,B.t)
D.baD=new A.w(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,B.t)
D.d2D=w([D.b8d,D.baV,D.baD],x.O)
D.bQO=new A.a7(B.ax,B.aC,B.x,D.d2D,null,null)
D.d7h=w([B.bo,B.aZ],x.O)
D.bR6=new A.a7(B.ax,B.aC,B.x,D.d7h,null,null)
D.b9w=new A.w(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,B.t)
D.beU=new A.w(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,B.t)
D.cP6=w([D.b9w,D.beU],x.O)
D.bRd=new A.a7(B.ax,B.aC,B.x,D.cP6,null,null)
D.d46=w([B.bm,B.M,B.e9],x.O)
D.bRk=new A.a7(B.ax,B.aC,B.x,D.d46,null,null)
D.bRn=new A.a7(B.a3,B.a7,B.x,F.asF,null,null)
D.cOy=w([B.fg,B.c8],x.O)
D.anb=new A.a7(B.a3,B.a7,B.x,D.cOy,null,null)
D.cOT=w([B.fg,B.bz],x.O)
D.anc=new A.a7(B.a3,B.a7,B.x,D.cOT,null,null)
D.aws=w([D.ok,B.aw,B.bY],x.O)
D.bRE=new A.a7(B.ax,B.aC,B.x,D.aws,null,null)
D.bco=new A.w(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,B.t)
D.cME=w([D.bco,E.ab6,B.M],x.O)
D.bRJ=new A.a7(B.ax,B.aC,B.x,D.cME,null,null)
D.aUK=new A.d9(-0.8,-1)
D.aUM=new A.d9(1.2,1)
D.cLR=w([B.c,B.et,B.hi,B.c,B.fh,B.aV,B.mM],x.O)
D.d3x=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.bRL=new A.a7(D.aUK,D.aUM,B.x,D.cLR,D.d3x,null)
D.beN=new A.w(1,0,0.7607843137254902,0.26666666666666666,B.t)
D.bcD=new A.w(1,0,0.6392156862745098,0.22745098039215686,B.t)
D.d2C=w([D.beN,D.bcD],x.O)
D.bSb=new A.a7(B.a3,B.a7,B.x,D.d2C,null,null)
D.bSg=new A.a7(B.ax,B.aC,B.x,B.Ps,null,null)
D.cYy=w([E.WJ,B.wU],x.O)
D.bSi=new A.a7(B.a3,B.a7,B.x,D.cYy,null,null)
D.d1t=w([B.h3,B.fu],x.O)
D.anh=new A.a7(B.a3,B.a7,B.x,D.d1t,null,null)
D.d6R=w([B.b8,B.bU],x.O)
D.ani=new A.a7(B.a3,B.a7,B.x,D.d6R,null,null)
D.cwS=w([B.dq,B.f6],x.O)
D.bSW=new A.a7(B.ax,B.aC,B.x,D.cwS,null,null)
D.cKU=w([B.c,B.b7],x.O)
D.bT5=new A.a7(B.a3,B.a7,B.x,D.cKU,null,null)
D.acT=new A.w(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,B.t)
D.b7f=new A.w(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,B.t)
D.cVr=w([D.acT,B.j7,B.qy,B.aw,D.b7f],x.O)
D.bVu=w([0,0.28,0.55,0.82,1],x.n)
D.bT6=new A.a7(B.ax,B.aC,B.x,D.cVr,D.bVu,null)
D.bTg=new A.a7(B.a3,B.a7,B.x,B.Q5,null,null)
D.bTh=new A.a7(B.a3,B.a7,B.x,F.av2,null,null)
D.bTk=new A.a7(B.a3,B.a7,B.x,D.aws,null,null)
D.cQb=w([B.bz,B.fg],x.O)
D.bTu=new A.a7(B.a3,B.a7,B.x,D.cQb,null,null)
D.daI=w([B.aE,B.bz,B.b7],x.O)
D.bTw=new A.a7(B.a3,B.a7,B.x,D.daI,null,null)
D.cYH=w([B.aH,B.bK,B.fC],x.O)
D.bTA=new A.a7(B.a3,B.a7,B.x,D.cYH,null,null)
D.dar=w([B.bm,B.aK,B.bJ,B.aL,B.aQ,B.cp,B.ak],x.O)
D.cTM=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.bTF=new A.a7(B.ax,B.aC,B.x,D.dar,D.cTM,null)
D.bTP=new A.a7(B.ax,B.aC,B.x,B.a0P,null,null)
D.cZb=w([D.VG,B.dT],x.O)
D.bTZ=new A.a7(B.a3,B.a7,B.x,D.cZb,null,null)
D.d5r=w([D.adH,D.ac0,B.M],x.O)
D.bU6=new A.a7(B.ax,B.aC,B.x,D.d5r,null,null)
D.bh8=new A.w(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,B.t)
D.cLp=w([B.eX,B.h3,D.bh8],x.O)
D.bUC=new A.a7(B.ax,B.aC,B.x,D.cLp,null,null)
D.cQI=w([D.ok,B.aw],x.O)
D.bUD=new A.a7(B.ax,B.aC,B.x,D.cQI,null,null)
D.bUZ=w([G.Bq,B.oC,B.jz,B.hz,B.kN,B.kO,B.kM,B.r2,B.mm,B.eR,B.lL,B.xR,B.FJ],x.A)
D.bYm=w([10,50,100,200],x.t)
D.c72=w([1,3,5,7],x.t)
D.cc_=w([25,50,100,250],x.t)
D.bC2=new A.a0(983104,"MaterialIcons",!1)
D.cku=w([B.oC,B.lM,B.nc,B.lb,B.h8,B.vr,D.bC2,B.a_q],x.A)
D.cpN=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cBG=w([0,0.22,0.5,0.78,1],x.n)
D.cFw=w([8,13,19],x.n)
D.a1a=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.fhG=new A.x("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.e8q=new A.jk("questions",48,D.fhG,null,x.d)
D.f7N=new A.x("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.e8v=new A.jk("edit",48,D.f7N,null,x.d)
D.fpi=new A.x("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.e8B=new A.jk("delete",48,D.fpi,null,x.d)
D.cFF=w([D.e8q,D.e8v,D.e8B],A.ax("P<oZ<n>>"))
D.cP0=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.cPd=w([B.bN,B.fi],x.O)
D.a3Q=new C.lw("text","",null,null)
D.cQn=w([D.a3Q],x.a)
D.cRL=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.erp=new A.ad7(B.lK,"Home")
D.eiB=new A.ad7(B.pO,"Growth")
D.en_=new A.ad7(B.jz,"Wallet")
D.cTZ=w([D.erp,D.eiB,D.en_],A.ax("P<+icon,label(a0,n)>"))
D.cUn=w([4,0,2,6,8,1,3,5,7],x.t)
D.cUv=w([B.c,B.bM,B.cp],x.O)
D.dzx=new C.rf("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.dzA=new C.rf("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.dzy=new C.rf("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.dzs=new C.rf("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.dzt=new C.rf("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.dzB=new C.rf("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a1E=w([D.dzx,D.dzA,D.dzy,D.dzs,D.dzt,D.dzB],x.F)
D.a1J=w([B.ay,B.bo,B.d6,B.aH],x.O)
D.ba6=new A.w(1,1,0.8980392156862745,0.4,B.t)
D.cZh=w([B.Vi,D.ba6,B.qy,B.hV,B.j7],x.O)
D.a1P=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.PA=w(["checkers_deluxe","tic_tac_go"],x.s)
D.bV2=w([0,1,2],x.t)
D.ckI=w([3,4,5],x.t)
D.cxq=w([6,7,8],x.t)
D.bV4=w([0,3,6],x.t)
D.c77=w([1,4,7],x.t)
D.cev=w([2,5,8],x.t)
D.bV8=w([0,4,8],x.t)
D.ces=w([2,4,6],x.t)
D.d0w=w([D.bV2,D.ckI,D.cxq,D.bV4,D.c77,D.cev,D.bV8,D.ces],x.B)
D.aEq=new C.I8(0,"abab")
D.dzq=new C.I8(1,"aaaBbb")
D.aEr=new C.I8(2,"aabb")
D.d1x=w([D.aEq,D.dzq,D.aEr],A.ax("P<I8>"))
D.d1N=w([],x.a)
D.avO=w([],x.v)
D.d5i=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.PX=w([1,2,3,-1,-2],x.t)
D.dcU=w([B.j8,B.aE],x.O)
D.fKD=new C.qy("dice","Dice Roll","Roll for cash & prizes!",B.mj,D.dcU)
D.fKA=new C.qy("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",B.qX,B.auA)
D.d7B=w([B.d_,B.bj],x.O)
D.fKy=new C.qy("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",B.a_d,D.d7B)
D.dco=w([B.dO,B.mP],x.O)
D.fKE=new C.qy("memory","Memory Match","Match pairs \u2014 solo or multiplayer",B.a_q,D.dco)
D.c6Q=w([B.jM,B.pq],x.O)
D.fKB=new C.qy("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",F.a__,D.c6Q)
D.d5h=w([M.l4,D.W4],x.O)
D.fKz=new C.qy("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",B.FM,D.d5h)
D.fKC=new C.qy("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",B.cy,Ak.ne)
D.d6Q=w([D.fKD,D.fKA,D.fKy,D.fKE,D.fKB,D.fKz,D.fKC],A.ax("P<qy>"))
D.d89=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.be8=new A.w(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,B.t)
D.be1=new A.w(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,B.t)
D.aer=new A.w(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,B.t)
D.d8T=w([D.be8,D.be1,D.aer],x.O)
D.bg3=new A.w(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,B.t)
D.d8V=w([B.ab5,D.bg3,D.aer],x.O)
D.d9w=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.awN=w([D.ok,B.c,D.eH,B.bV,B.b1,B.aw],x.O)
D.dzv=new C.rf("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.dzu=new C.rf("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.dzr=new C.rf("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.dzz=new C.rf("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.dzC=new C.rf("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.dzw=new C.rf("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a2s=w([D.dzv,D.dzu,D.dzr,D.dzz,D.dzC,D.dzw],x.F)
D.dcC=w([B.c8,B.pq],x.O)
D.dYr={checkers_deluxe:0,tic_tac_go:1}
D.aCo=new A.bq(D.dYr,["Checkers Deluxe","Tic Tac Go"],A.ax("bq<n,n>"))
D.dXy={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aCz=new A.bq(D.dXy,[1,2,3,4,5,6,7],A.ax("bq<n,H>"))
D.dsv=new C.a5J(null)
D.dvR=new C.lw("signature","NGMY Support Team",null,null)
D.dvS=new C.lw("divider","",null,null)
D.QR=new C.Uy(!1,!1,!1,!1)
D.QT=new C.N8(!1,!1,!1,!1)
D.dwU=new C.N8(!0,!0,!1,!1)
D.Ce=new C.apB(0,"swahili")
D.aEp=new C.apB(1,"english")
D.Cf=new C.apB(2,"mix")
D.d00=w([B.fv,B.it,B.d9],x.O)
D.bAT=new A.a0(63118,"MaterialIcons",!1)
D.dAD=new C.oV(D.d00,B.h1,B.aH,"BACKGAMMON","\ud83c\udfb2",D.bAT)
D.bCR=new A.a0(983637,"MaterialIcons",!1)
D.dAE=new C.oV(Ah.awX,B.bo,B.eM,"EURO WHEEL","\ud83c\udfa1",D.bCR)
D.d8r=w([B.M,B.aK,B.bv],x.O)
D.dAF=new C.oV(D.d8r,B.aQ,B.ak,"ROYALE","\u265f\ufe0f",F.a__)
D.cOB=w([B.dq,B.bj,B.dS],x.O)
D.dAG=new C.oV(D.cOB,B.ay,B.d6,"CONNECT 4","\ud83d\udd34",B.a_D)
D.d3L=w([B.dv,B.f6,B.pq],x.O)
D.dAH=new C.oV(D.d3L,B.uQ,B.c8,"PUNTO BANCO","\ud83d\udc8e",B.lM)
D.cwU=w([B.nC,B.i5,B.lC],x.O)
D.dAI=new C.oV(D.cwU,B.j1,B.jN,"DOMINOES","\ud83c\udc53",B.al0)
D.d95=w([B.x_,B.t2,B.hg],x.O)
D.dAJ=new C.oV(D.d95,B.Aq,B.h_,"WAR","\u2694\ufe0f",N.ZX)
D.dAK=new C.oV(B.awS,B.aM,B.ak,"PREMIUM","\ud83c\udfae",B.mj)
D.cQc=w([B.jr,B.aE,B.dO],x.O)
D.dAL=new C.oV(D.cQc,B.dN,B.fg,"JACKPOT","\ud83c\udfb0",B.mj)
D.d2U=w([B.kF,B.lA,B.bz],x.O)
D.dAM=new C.oV(D.d2U,B.qx,B.bV,"LIVE BINGO","\ud83c\udfb1",B.xK)
D.cIV=w([B.it,B.dT,B.aH],x.O)
D.bAj=new A.a0(62865,"MaterialIcons",!1)
D.dAN=new C.oV(D.cIV,B.t8,B.aM,"BIG SPIN","\ud83c\udfa1",D.bAj)
D.dAO=new C.oV(B.a2q,B.aL,B.bo,"HOLD'EM","\u2660\ufe0f",B.jz)
D.d9v=w([B.eX,B.fu,B.aZ],x.O)
D.bzr=new A.a0(61234,"MaterialIcons",!1)
D.dAP=new C.oV(D.d9v,B.lD,B.aU,"CRAPS","\ud83c\udfb2",D.bzr)
D.cNV=w([B.fi,B.iK,B.bN],x.O)
D.dAQ=new C.oV(D.cNV,B.bK,B.b7,"PLINKO","\ud83d\udc8e",Al.N_)
D.bCC=new A.a0(983492,"MaterialIcons",!1)
D.dAR=new C.oV(B.a2q,B.es,B.bo,"SNOOKER","\ud83c\udfb1",D.bCC)
D.d7c=w([B.eX,B.fu,B.aU],x.O)
D.dAS=new C.oV(D.d7c,B.t3,B.bt,"PROFIT LAB","\ud83d\udcb0",B.hY)
D.d7u=w([B.e9,B.ff,B.bo],x.O)
D.bBg=new A.a0(63324,"MaterialIcons",!1)
D.dAT=new C.oV(D.d7u,B.An,B.b8,"KLONDIKE","\ud83c\udccf",D.bBg)
D.d0D=w([B.db,B.bm,B.M],x.O)
D.dAU=new C.oV(D.d0D,B.aM,B.aK,"VEGAS TABLE","\ud83c\udccf",A2.FZ)
D.pX=new C.E9(0,"continueGame")
D.pY=new C.E9(1,"youWin")
D.Hs=new C.E9(2,"youLose")
D.R1=new C.E9(3,"draw")
D.aEE=new C.Vi(0,"found")
D.dTG=new C.Vi(1,"foundLive")
D.a45=new C.Vi(2,"notFound")
D.aEF=new C.Vi(3,"wrongAccount")
D.e_A=new A.u(4,12)
D.e2t=new A.C(B.Lw,B.rQ,null)
D.bsP=new A.Q(4,0,0,3)
D.eUA=new A.G(!0,B.aJ,null,null,null,null,10,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftE=new A.x("NGMY Helper",null,D.eUA,null,null,null,null,null,null,null,null,null)
D.e2J=new A.C(D.bsP,D.ftE,null)
D.bB8=new A.a0(63284,"MaterialIcons",!1)
D.bGj=new A.ae(D.bB8,18,B.om,null,null,null)
D.eZ4=new A.G(!0,B.om,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbD=new A.x("Continue",null,D.eZ4,null,null,null,null,null,null,null,null,null)
D.d2f=w([D.bGj,B.bp,D.fbD],x.p)
D.eFE=new A.cl(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d2f,null)
D.e2M=new A.C(B.iR,D.eFE,null)
D.e2X=new A.C(B.bS,B.rQ,null)
D.bdL=new A.w(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,B.t)
D.cZR=w([B.h3,B.fu,B.cZ,D.bdL],x.O)
D.bTI=new A.a7(B.ax,B.aC,B.x,D.cZR,B.BH,null)
D.aZr=new A.o(null,null,null,null,null,D.bTI,B.n)
D.bkV=new A.kJ(D.aZr,B.bd,null,null)
D.e8Q=new A.cK(0,0,0,0,null,null,D.bkV,null)
D.bI2=new A.ae(B.vi,11,B.c,null,null,null)
D.e8U=new A.cK(10,12,null,null,null,null,D.bI2,null)
D.cBy=w([B.hh,B.e9,B.l3],x.O)
D.e9u=new A.bR(B.Jp,1.1,B.x,null,0,D.cBy,null,null)
D.bf8=new A.w(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,B.t)
D.b9N=new A.w(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,B.t)
D.bbs=new A.w(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,B.t)
D.cXG=w([D.bf8,D.b9N,D.bbs],x.O)
D.e9B=new A.bR(B.a8N,1.05,B.x,null,0,D.cXG,null,null)
D.e9Z=new A.bR(B.A,0.5,B.x,null,0,Y.a1p,null,null)
D.eDK=new A.aa(-18,0,18,1)
D.eEg=new A.aa(-3,-5,3,5)
D.bGL=new A.ae(B.ee,16,D.eH,null,null,null)
D.aPp=new A.G(!0,D.eH,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frn=new A.x("Screenshot added \xb7 tap to change",null,D.aPp,null,null,null,null,null,null,null,null,null)
D.cLU=w([D.bGL,B.bp,D.frn],x.p)
D.eF5=new A.cl(B.aO,B.bb,B.j,B.m,null,B.p,null,0,D.cLU,null)
D.bKx=new A.ae(B.jW,15,D.eH,null,null,null)
D.fpc=new A.x("Refresh",null,D.aPp,null,null,null,null,null,null,null,null,null)
D.cO4=w([D.bKx,B.d8,D.fpc],x.p)
D.eF7=new A.cl(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cO4,null)
D.dXZ={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.eGU=new A.eW(D.dXZ,3,x.M)
D.dXJ={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.eH_=new A.eW(D.dXJ,36,x.M)
D.dXM={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.eH7=new A.eW(D.dXM,6,x.M)
D.dYU={memory:0,typing:1,scramble:2,pattern:3}
D.my=new A.eW(D.dYU,4,x.M)
D.eJh=new A.at(276,276)
D.eJY=new A.a6(13,null,null,null)
D.b4o=new A.fi(2.6,null,null,null,null,B.aM,null,null,null,null)
D.eK7=new A.a6(26,26,D.b4o,null)
D.eKT=new A.a6(null,7,null,null)
D.eL1=new A.hJ(8,0,0,1,null)
D.fss=new A.x("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aMY=new A.b1(D.fss,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.f6X=new A.x("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.eNX=new A.b1(D.f6X,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.f7Y=new A.x("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.eO2=new A.b1(D.f7Y,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fpn=new A.x("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.eOG=new A.b1(D.fpn,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.bet=new A.w(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,B.t)
D.eY0=new A.G(!0,D.bet,null,null,null,null,9,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRH=new A.eo("$",null,null,B.cO,null,null,null,null,null,null,D.eY0)
D.eRX=new A.G(!0,B.M,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSf=new A.G(!0,B.c,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSl=new A.G(!0,B.bm,null,null,null,null,9,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSJ=new A.G(!0,B.M,null,null,null,null,9,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSU=new A.G(!0,B.c,null,null,null,null,19,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eT1=new A.G(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eT9=new A.G(!0,null,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTU=new A.G(!0,B.aM,null,null,null,null,28,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUs=new A.G(!0,D.eH,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUu=new A.G(!0,B.bK,null,null,null,null,14,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVc=new A.G(!0,E.Al,null,null,null,null,13,B.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aO9=new A.G(!0,B.c,null,null,null,null,20,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWG=new A.G(!0,B.bK,null,null,null,null,11.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWY=new A.G(!0,B.ad,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,B.aD,null,null,null,null,null,null,null,null)
D.eXg=new A.G(!0,B.ad,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYg=new A.G(!0,B.c,null,null,null,null,11,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYv=new A.G(!0,B.c,null,null,null,null,14,B.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYG=new A.G(!0,B.b8,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYH=new A.G(!0,B.c,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,B.aD,null,null,null,null,null,null,null,null)
D.eZc=new A.G(!0,B.iB,null,null,null,null,10.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b8w=new A.w(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,B.t)
D.eZq=new A.G(!0,D.b8w,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_R=new A.G(!0,B.ay,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0c=new A.G(!0,D.acT,null,null,null,null,9,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOQ=new A.G(!0,E.Al,null,null,null,null,11,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0z=new A.G(!0,B.ff,null,null,null,null,52,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0A=new A.G(!0,B.bv,null,null,null,null,7,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0P=new A.G(!0,E.Al,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.w5=new A.G(!0,B.c,null,null,null,null,13,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bcf=new A.w(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,B.t)
D.f11=new A.G(!0,D.bcf,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1y=new A.G(!0,B.Qx,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2v=new A.G(!0,B.c,null,null,null,null,38,B.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2B=new A.G(!0,B.iQ,null,null,null,null,11,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2F=new A.G(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aP6=new A.G(!0,B.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f36=new A.G(!0,B.M,null,null,null,null,10,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3a=new A.G(!0,B.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f42=new A.G(!0,B.M,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4q=new A.G(!0,B.ad,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4G=new A.G(!0,B.b8,null,null,null,null,14,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5c=new A.G(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5g=new A.G(!0,B.M,null,null,null,null,11,B.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6b=new A.x("Value per pair",null,B.hB,null,null,null,null,null,null,null,null,null)
D.f6c=new A.x("Restore now",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f6I=new A.x("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aOC=new A.G(!0,B.cU,null,null,null,null,12,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6S=new A.x("AVAILABLE PLANS",null,D.aOC,null,null,null,null,null,null,null,null,null)
D.f6V=new A.x("I understand",null,B.cw,null,null,null,null,null,null,null,null,null)
D.f7p=new A.x("Go Back",null,B.cw,null,null,null,null,null,null,null,null,null)
D.eV3=new A.G(!0,B.bv,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f85=new A.x("PLAN VALUE",null,D.eV3,null,null,null,null,null,null,null,null,null)
D.f87=new A.x("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.f8t=new A.x("Deposit",null,B.Tc,null,null,null,null,null,null,null,null,null)
D.f3p=new A.G(!0,B.dN,null,null,null,null,null,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9r=new A.x("JACKPOT SLOTS",null,D.f3p,null,null,null,null,null,null,null,null,null)
D.f9L=new A.x("Restore",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eV6=new A.G(!0,B.c,null,null,null,null,12,B.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9P=new A.x("YOUR NUMBER",null,D.eV6,null,null,null,null,null,null,null,null,null)
D.fa3=new A.x("SPIN REELS",null,F.a6N,null,null,null,null,null,null,null,null,null)
D.fau=new A.x("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.faZ=new A.x("Perfect Score Profit",null,B.hB,null,null,null,null,null,null,null,null,null)
D.fbB=new A.x("Join room",null,B.kv,null,null,null,null,null,null,null,null,null)
D.fdx=new A.x("Add payment screenshot",null,B.jn,null,null,null,null,null,null,null,null,null)
D.fdM=new A.x("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.f2H=new A.G(!0,B.aM,null,null,null,null,11,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feb=new A.x("INVITE A PLAYER",null,D.f2H,null,null,null,null,null,null,null,null,null)
D.f1V=new A.G(!0,B.Vi,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feB=new A.x("NGMY GOLD LEADER",null,D.f1V,null,null,null,null,null,null,null,null,null)
D.ff7=new A.x("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.ffv=new A.x("Invest & Play",null,B.p0,null,null,null,null,null,null,null,null,null)
D.aOw=new A.G(!0,D.wS,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffX=new A.x("VALID THRU",null,D.aOw,null,null,null,null,null,null,null,null,null)
D.aP8=new A.G(!0,B.az,null,null,null,null,11,B.H,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg4=new A.x("DEALER",null,D.aP8,null,null,null,null,null,null,null,null,null)
D.fga=new A.x("CARDHOLDER",null,D.aOw,null,null,null,null,null,null,null,null,null)
D.f1r=new A.G(!0,B.aL,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgU=new A.x("NGMY PLATINUM",null,D.f1r,null,null,null,null,null,null,null,null,null)
D.f4x=new A.G(!0,B.pt,null,null,null,null,10,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhB=new A.x("EARNED SO FAR",null,D.f4x,null,null,null,null,null,null,null,null,null)
D.fi7=new A.x("VS",null,B.aOr,null,null,null,null,null,null,null,null,null)
D.fix=new A.x("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.fiU=new A.x("One day left",null,B.aO7,null,B.L,null,null,null,null,null,null,null)
D.fjf=new A.x("Keep typing \u2014 mistakes are counted in your payout",null,B.CT,null,null,null,null,null,null,null,null,null)
D.fjg=new A.x("Multiplayer invite",null,B.kv,null,null,null,null,null,null,null,null,null)
D.fjq=new A.x("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.eTH=new A.G(!0,B.Qx,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjw=new A.x("\ud83d\udcb0 Partial Payout System",null,D.eTH,null,null,null,null,null,null,null,null,null)
D.fjH=new A.x("Browse Topics",null,B.eV,null,null,null,null,null,null,null,null,null)
D.eSG=new A.G(!0,B.c,null,null,null,null,22,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjW=new A.x("Investment Required",null,D.eSG,null,B.L,null,null,null,null,null,null,null)
D.eSc=new A.G(!0,B.c,null,null,null,null,16.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flm=new A.x("Network Status",null,D.eSc,null,null,null,null,null,null,null,null,null)
D.flT=new A.x("Their account email",null,G.a6C,null,null,null,null,null,null,null,null,null)
D.fmc=new A.x("Verification code",null,B.cw,null,null,null,null,null,null,null,null,null)
D.fmd=new A.x("Category",null,null,null,null,null,null,null,null,null,null,null)
D.fmr=new A.x("ACTIVE ASSET",null,D.aOC,null,null,null,null,null,null,null,null,null)
D.fmM=new A.x("Scan QR",null,B.cw,null,null,null,null,null,null,null,null,null)
D.fmR=new A.x("Check word",null,B.cw,null,null,null,null,null,null,null,null,null)
D.fnf=new A.x("YOUR HAND",null,D.aP8,null,null,null,null,null,null,null,null,null)
D.fnO=new A.x("NGMY Music Studio",null,B.kX,null,null,null,null,null,null,null,null,null)
D.fnR=new A.x("I sent it \u2014 submit deposit",null,B.p0,null,null,null,null,null,null,null,null,null)
D.foD=new A.x("Back",null,B.SE,null,null,null,null,null,null,null,null,null)
D.f5r=new A.G(!0,null,null,null,null,null,null,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foK=new A.x("DEAL / PLAY ROUND",null,D.f5r,null,null,null,null,null,null,null,null,null)
D.foW=new A.x("Got it \u2014 keep chatting",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fp5=new A.x("3 Messages Left",null,B.aOX,null,null,null,null,null,null,null,null,null)
D.fpB=new A.x("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.fpJ=new A.x("Copy",null,B.cw,null,null,null,null,null,null,null,null,null)
D.fq4=new A.x("How many games?",null,G.a6C,null,null,null,null,null,null,null,null,null)
D.f0W=new A.G(!0,B.az,null,null,null,null,null,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqg=new A.x("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.f0W,null,B.L,null,null,null,null,null,null,null)
D.frN=new A.x("Question",null,null,null,null,null,null,null,null,null,null,null)
D.frZ=new A.x("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.f5Q=new A.G(!0,B.c,null,null,null,null,12.5,B.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fty=new A.x("NGMY  WALLET",null,D.f5Q,null,null,null,null,null,null,null,null,null)
D.ftz=new A.x("Select Your Bet",null,B.ho,null,null,null,null,null,null,null,null,null)
D.fHx=new A.cw("history",x.W)
D.fHC=new A.cw("ngmy_local_home",x.W)
D.fHD=new A.cw("ngmy_local_invest",x.W)
D.fHE=new A.cw("ngmy_local_wallet",x.W)
D.fKl=new C.Yq(null)
D.aSZ=new C.azR(0,"grid")
D.aT_=new C.azR(1,"questions")
D.fLD=new C.azR(2,"answer")
D.fMy=new C.Zj(null)})();(function staticFields(){$.fOf=A.aX(x.N)
$.hcP=A.V(x.N,x.k)
$.fTG=null
$.fTu=A.V(x.N,A.ax("vW"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"i9D","bCh",()=>C.hSJ())
w($,"i9p","hkO",()=>{var v=null,u=A.ii(v,v,v,v,D.eRH,B.a5,B.ch,v,B.eq,B.cd)
u.eP()
return u})})()};
(a=>{a["Lfhzu0YbxgjxBRZMtjYcS1XEAb0="]=a.current})($__dart_deferred_initializers__);