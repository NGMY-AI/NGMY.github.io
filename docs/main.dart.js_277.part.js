((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,L,R,A2,E,M,A3,N,A4,S,O,T,A5,P,A6,U,A7,A8,A9,Aa,Ab,Ac,V,Ad,C={
h50(d,e,f){var w=null,v=f.k("Fp<0>"),u=new A.Fp(w,w,w,w,v)
$.Cw()
u.d=new C.cpf(new A.BA(),e,u,f,d)
return new A.hO(u,v.k("hO<1>"))},
cpf:function cpf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cpg:function cpg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cpc:function cpc(d){this.a=d},
cpd:function cpd(d,e){this.a=d
this.b=e},
cpe:function cpe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpb:function cpb(d,e,f){this.a=d
this.b=e
this.c=f},
bpr:function bpr(d){this.a=d},
h5_(d,e,f,g){return new C.au8(d,e,f,null,g.k("au8<0>"))},
EH:function EH(){},
aGw:function aGw(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
eVD:function eVD(d){this.a=d},
eVC:function eVC(d,e){this.a=d
this.b=e},
eVF:function eVF(d){this.a=d},
eVA:function eVA(d,e,f){this.a=d
this.b=e
this.c=f},
eVE:function eVE(d){this.a=d},
eVB:function eVB(d){this.a=d},
au8:function au8(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
hV1(d){var w=B.a.i(d)
while(B.a.a0(w,"$"))w=B.a.i(B.a.b_(w,1))
return w},
hf7(d){var w=C.hV1(d)
if(w.length===0)return""
return"$"+w},
fq1(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fq1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:i=B.a.i(d.toLowerCase())
if(i.length===0){w=1
break}t=new A.S(Date.now(),0,!1).bN(-6048e8)
s=e.length,r=0
case 3:if(!(r<e.length)){w=5
break}q=e[r]
if(B.a.i(q.b.toLowerCase())!==i){w=4
break}p=q.y
o=p.a
if(o>=t.gbo())o=o===t.gbo()&&p.b<t.gcv()
else o=!0
if(o){w=4
break}if(q.x!==B.ck){w=4
break}if(q.d!==B.fB){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!A.dr(m,"game payout:",0))if(!A.dr(m,"game partial:",0)){if(!A.dr(m,"multiplayer payout:",0))o=A.dr(m,"dice",0)&&q.e===B.fb
else o=l
l=o}if(!l){w=4
break}if(A.dr(m,"game payout:",0))k=B.a.i(B.a.b_(n,B.a.cJ(m,"game payout:")+12))
else if(A.dr(m,"game partial:",0)){k=B.a.i(B.a.b_(n,B.a.cJ(m,"game partial:")+13))
j=B.a.cJ(k,"(")
if(j>0)k=B.a.i(B.a.ap(k,0,j))}else if(A.dr(m,"multiplayer payout:",0)){k=B.a.i(B.a.b_(n,B.a.cJ(m,"multiplayer payout:")+19))
j=B.a.cJ(k,"(")
if(j>0)k=B.a.i(B.a.ap(k,0,j))}else k=A.dr(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return A.b(C.un(q.c,p,n,d,o,null,q.a,!0),$async$fq1)
case 6:case 4:e.length===s||(0,A.L)(e),++r
w=3
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$fq1,v)},
hZD(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
hW4(d,e,f){return B.d.b8(e,new C.ftK(f,B.a.i(d.toLowerCase())))},
ftB(d){var w
C.h1j(d)
w=d.c6
return A.bl(new A.J(w,new C.ftC(),A.T(w).k("J<1,@>")),!0,x.N)},
hLO(d,e,f){var w,v,u,t,s,r,q=null,p=B.bQ,o=B.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aT.toString
u=$.eg().gi9().b
if(u.a===0)t=1
else{new A.bc(u,A.a3(u).k("bc<2>")).gL(0)
u=$.kZ()
s=u.d
t=s==null?u.gh3():s}w=B.k.dw(f*t)
v=new C.fdi(f)
if(J.cZ(n,"data:image"))try{u=A.fL(B.cB.aI(B.d.gal(J.ll(n,","))),B.A,w,new C.fdf(v),B.fQ,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.cZ(n,"supabase://"))return new A.l4(A.a0x(n),new C.fdg(f,e,p,w,v),q,q,x.gh)
return A.kh(n,B.A,w,new C.fdh(v),B.fQ,p,!0,e,q,q,f)},
fRg(d,e){return new A.a6(e,e,A.hR(C.hLO(d,e,e),B.aq),null)},
hEd(){var w,v,u=A.a([],x._),t=x.N,s=A.B(D.d50,x.gm)
for(w=0;w<36;++w){v=B.BG[w]
s.push(new C.qw(v.a,v.b,v.c,v.e,v.f))}return new C.ayJ(u,A.V(t,t),s)},
ftK:function ftK(d,e){this.a=d
this.b=e},
ftC:function ftC(){},
fdi:function fdi(d){this.a=d},
fdf:function fdf(d){this.a=d},
fdg:function fdg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fde:function fde(d){this.a=d},
fdh:function fdh(d){this.a=d},
ajO:function ajO(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
qw:function qw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
ayJ:function ayJ(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
d75:function d75(d,e){this.a=d
this.b=e},
d7g:function d7g(d,e){this.a=d
this.b=e},
d7y:function d7y(){},
d7z:function d7z(d){this.a=d},
d7o:function d7o(d,e){this.a=d
this.b=e},
d7n:function d7n(){},
d7p:function d7p(d){this.a=d},
d7m:function d7m(){},
d7r:function d7r(d){this.a=d},
d7q:function d7q(){},
d7j:function d7j(d){this.a=d},
d7h:function d7h(d){this.a=d},
d7i:function d7i(d){this.a=d},
d7k:function d7k(d){this.a=d},
d7l:function d7l(d){this.a=d},
d7b:function d7b(d,e){this.a=d
this.b=e},
d7c:function d7c(d,e){this.a=d
this.b=e},
d79:function d79(d){this.a=d},
d7a:function d7a(d){this.a=d},
d7d:function d7d(d){this.a=d},
d7e:function d7e(d){this.a=d},
d7f:function d7f(d,e,f){this.a=d
this.b=e
this.c=f},
d78:function d78(d,e){this.a=d
this.b=e},
d77:function d77(d,e){this.a=d
this.b=e},
d76:function d76(d,e){this.a=d
this.b=e},
d7x:function d7x(d){this.a=d},
d7v:function d7v(d,e,f){this.a=d
this.b=e
this.c=f},
d7u:function d7u(d,e,f){this.a=d
this.b=e
this.c=f},
d7t:function d7t(d,e){this.a=d
this.b=e},
d7s:function d7s(){},
d7w:function d7w(d){this.a=d},
aBA:function aBA(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bhA:function bhA(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
dL4:function dL4(d){this.a=d},
dL3:function dL3(d){this.a=d},
dL5:function dL5(d){this.a=d},
dL2:function dL2(){},
dL6:function dL6(d,e){this.a=d
this.b=e},
dL1:function dL1(d){this.a=d},
dL7:function dL7(d){this.a=d},
ajN:function ajN(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ayI:function ayI(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
d7_:function d7_(d){this.a=d},
d72:function d72(d){this.a=d},
d73:function d73(d){this.a=d},
d74:function d74(d){this.a=d},
d71:function d71(d,e){this.a=d
this.b=e},
d70:function d70(d,e){this.a=d
this.b=e},
ajP:function ajP(d,e,f,g,h,i,j,k,l,m){var _=this
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
ayK:function ayK(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.aF=_.aN=_.aE=_.az=$
_.bJ=_.ba=_.b0=_.b3=null
_.aR=!1
_.bR=_.bj=null
_.c6=!1
_.cj=_.cW=""
_.c=_.a=_.bC=null},
d8S:function d8S(d,e){this.a=d
this.b=e},
d8V:function d8V(d){this.a=d},
d8W:function d8W(d){this.a=d},
d8X:function d8X(d){this.a=d},
d8Y:function d8Y(d){this.a=d},
d8Z:function d8Z(d){this.a=d},
d8T:function d8T(d){this.a=d},
d8U:function d8U(d){this.a=d},
d87:function d87(d,e){this.a=d
this.b=e},
d88:function d88(d,e){this.a=d
this.b=e},
d8B:function d8B(d){this.a=d},
d8C:function d8C(){},
d8n:function d8n(d,e,f){this.a=d
this.b=e
this.c=f},
d8o:function d8o(d){this.a=d},
d8p:function d8p(d,e,f){this.a=d
this.b=e
this.c=f},
d8q:function d8q(d,e){this.a=d
this.b=e},
d8r:function d8r(){},
d7A:function d7A(d){this.a=d},
d86:function d86(d,e){this.a=d
this.b=e},
d8D:function d8D(){},
d8M:function d8M(){},
d8A:function d8A(d){this.a=d},
d8z:function d8z(d){this.a=d},
d84:function d84(d){this.a=d},
d85:function d85(){},
d8H:function d8H(){},
d8I:function d8I(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d8J:function d8J(d,e,f){this.a=d
this.b=e
this.c=f},
d7B:function d7B(){},
d7C:function d7C(d){this.a=d},
d7D:function d7D(){},
d8g:function d8g(d,e){this.a=d
this.b=e},
d8h:function d8h(d,e,f){this.a=d
this.b=e
this.c=f},
d8i:function d8i(d){this.a=d},
d8f:function d8f(d){this.a=d},
d8s:function d8s(d){this.a=d},
d8t:function d8t(){},
d8u:function d8u(d){this.a=d},
d8v:function d8v(){},
d8w:function d8w(d){this.a=d},
d8x:function d8x(){},
d8G:function d8G(d,e,f){this.a=d
this.b=e
this.c=f},
d8j:function d8j(d){this.a=d},
d8k:function d8k(d,e){this.a=d
this.b=e},
d8l:function d8l(d){this.a=d},
d8m:function d8m(d){this.a=d},
d8K:function d8K(d){this.a=d},
d8L:function d8L(d){this.a=d},
d7E:function d7E(d){this.a=d},
d7F:function d7F(d,e){this.a=d
this.b=e},
d7G:function d7G(d){this.a=d},
d7H:function d7H(d){this.a=d},
d8E:function d8E(d,e){this.a=d
this.b=e},
d8F:function d8F(d){this.a=d},
d8e:function d8e(d,e){this.a=d
this.b=e},
d8y:function d8y(d,e,f){this.a=d
this.b=e
this.c=f},
d8c:function d8c(d,e,f){this.a=d
this.b=e
this.c=f},
d8d:function d8d(){},
d8N:function d8N(d){this.a=d},
d8O:function d8O(d){this.a=d},
d8P:function d8P(d){this.a=d},
d8R:function d8R(d){this.a=d},
d8Q:function d8Q(){},
d8b:function d8b(d,e,f){this.a=d
this.b=e
this.c=f},
d8a:function d8a(d,e){this.a=d
this.b=e},
d89:function d89(d,e){this.a=d
this.b=e},
d7U:function d7U(d){this.a=d},
d7T:function d7T(d,e){this.a=d
this.b=e},
d7V:function d7V(d){this.a=d},
d7S:function d7S(d,e){this.a=d
this.b=e},
d7W:function d7W(d){this.a=d},
d7R:function d7R(){},
d7X:function d7X(d){this.a=d},
d7P:function d7P(){},
d7Q:function d7Q(d){this.a=d},
d7Y:function d7Y(d){this.a=d},
d7O:function d7O(d,e){this.a=d
this.b=e},
d7Z:function d7Z(d){this.a=d},
d7N:function d7N(d,e){this.a=d
this.b=e},
d7J:function d7J(d,e){this.a=d
this.b=e},
d8_:function d8_(d){this.a=d},
d7M:function d7M(d,e){this.a=d
this.b=e},
d80:function d80(d){this.a=d},
d7L:function d7L(d){this.a=d},
d7I:function d7I(d,e){this.a=d
this.b=e},
d81:function d81(d,e,f){this.a=d
this.b=e
this.c=f},
d82:function d82(d){this.a=d},
d7K:function d7K(){},
d83:function d83(d){this.a=d},
akF:function akF(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
beJ:function beJ(){this.c=this.a=null},
dcp:function dcp(d,e){this.a=d
this.b=e},
dco:function dco(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ah2:function ah2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
avW:function avW(d,e,f,g,h,i,j,k,l,m){var _=this
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
cAh:function cAh(d){this.a=d},
czC:function czC(d,e){this.a=d
this.b=e},
czs:function czs(d){this.a=d},
czt:function czt(d){this.a=d},
czM:function czM(d){this.a=d},
czJ:function czJ(d){this.a=d},
czK:function czK(d){this.a=d},
czL:function czL(d,e,f){this.a=d
this.b=e
this.c=f},
czE:function czE(d){this.a=d},
czD:function czD(d){this.a=d},
czu:function czu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
czH:function czH(d){this.a=d},
czG:function czG(d){this.a=d},
czF:function czF(d,e){this.a=d
this.b=e},
cA4:function cA4(d){this.a=d},
czZ:function czZ(d){this.a=d},
cA1:function cA1(d){this.a=d},
cA0:function cA0(){},
czY:function czY(d){this.a=d},
cA_:function cA_(d,e){this.a=d
this.b=e},
czX:function czX(){},
czz:function czz(){},
czA:function czA(d,e){this.a=d
this.b=e},
czB:function czB(d){this.a=d},
czx:function czx(d,e){this.a=d
this.b=e},
czy:function czy(d,e){this.a=d
this.b=e},
czP:function czP(d,e){this.a=d
this.b=e},
czI:function czI(d){this.a=d},
czQ:function czQ(d){this.a=d},
czR:function czR(d,e){this.a=d
this.b=e},
czS:function czS(d,e){this.a=d
this.b=e},
czT:function czT(d,e){this.a=d
this.b=e},
czU:function czU(d,e,f){this.a=d
this.b=e
this.c=f},
czV:function czV(d){this.a=d},
czW:function czW(d){this.a=d},
czN:function czN(d,e){this.a=d
this.b=e},
cA3:function cA3(d){this.a=d},
czO:function czO(d,e){this.a=d
this.b=e},
cAg:function cAg(d){this.a=d},
cA9:function cA9(d){this.a=d},
cAc:function cAc(d){this.a=d},
cA6:function cA6(d,e){this.a=d
this.b=e},
cAa:function cAa(){},
cAb:function cAb(d,e){this.a=d
this.b=e},
cA7:function cA7(d){this.a=d},
cA8:function cA8(d){this.a=d},
cAe:function cAe(){},
cAd:function cAd(d){this.a=d},
cA5:function cA5(d,e){this.a=d
this.b=e},
cAf:function cAf(d){this.a=d},
czv:function czv(d){this.a=d},
cA2:function cA2(d,e){this.a=d
this.b=e},
czw:function czw(d,e,f){this.a=d
this.b=e
this.c=f},
aIW:function aIW(){},
aIX:function aIX(){},
aIY:function aIY(){},
aJU:function aJU(){},
bWI(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase())
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
bWJ(d){var w=B.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hrJ(d,e){var w=d.ax
if(w<0)return!1
return w===e},
aW3(d,e){return C.hrK(d,e)},
hrK(d,e){var w=0,v=A.j(x.di),u,t,s,r,q,p
var $async$aW3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aZQ(d),$async$aW3)
case 3:p=g
if(p!=null){try{t=B.R.aG(0,p.c,null)
if(x.f.b(t)){s=C.h_F(A.a1(t,x.N,x.z))
if(s==null){u=new A.Fk(D.a3S,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bWI(s,e,p.b)){u=new A.Fk(D.aE8,null)
w=1
break}r=p.a?D.dRM:D.aE7
u=new A.Fk(r,s)
w=1
break}}catch(o){}u=new A.Fk(D.a3S,null)
w=1
break}s=C.h_G(d)
if(s==null){u=new A.Fk(D.a3S,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bWI(s,e,null)){u=new A.Fk(D.aE8,null)
w=1
break}u=new A.Fk(D.aE7,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aW3,v)},
h_G(d){var w,v,u,t,s,r
try{w=B.a.i(d)
if(J.cZ(w,"\ufeff"))w=J.mx(w,1)
v=!1
if(J.cZ(w,"NGMYSNAP1|")){v=!0
w=B.c4.c8(0,B.cB.aI(J.mx(w,10)))}u=B.R.aG(0,w,null)
if(!x.f.b(u))return null
t=A.a1(u,x.N,x.z)
s=v?C.hrI(t):C.h_F(t)
return s}catch(r){return null}},
hrI(d){var w,v,u,t,s,r,q,p,o,n=new C.bWF(),m=new C.bWE(),l=d.h(0,"qi")
if(x.f.b(l)){w=A.a1(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new A.S(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=A.aN(w.h(0,"d"))
p=new A.v6(v,u,t,s,r,B.k.O(q==null?0:q))}else p=null
v=d.h(0,"qu")
v=J.k(v==null?"User":v)
u=m.$1(d.h(0,"qb"))
t=m.$1(d.h(0,"qp"))
s=J.y(d.h(0,"qc"),!0)
r=n.$1(d.h(0,"qs"))
q=n.$1(d.h(0,"ql"))
n=n.$1(d.h(0,"qe"))
m=m.$1(d.h(0,"qt"))
o=A.aN(d.h(0,"qn"))
if(o==null)o=0
return new A.a4X("","",v,u,t,s,r,q,n,m,o,p,B.i_,new A.S(Date.now(),0,!1),-1)},
h_F(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.y(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.bWH()
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
n=new A.v6(t,s,r,q,p,B.k.O(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=A.B(new A.e6(J.b6(m,new C.bWG(w),x.eG),t),t.k("H.E"))}else l=A.a([],x.E)
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
o=J.y(d.h(0,"isClockedIn"),!0)
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
return new A.a4X(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
fLO(d,e,f,g){var w=0,v=A.j(x.N),u,t,s,r
var $async$fLO=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:t=A.bWD(d,e,f,g)
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(t.a,s,"_")
u=A.FR(A.Jj(t.eJ(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fLO,v)},
Va:function Va(d,e){this.a=d
this.b=e},
bWF:function bWF(){},
bWE:function bWE(){},
bWH:function bWH(){},
bWG:function bWG(d){this.a=d},
hOS(d){return A.c9(null,B.aX,!0,null,new C.fgO(),d,null,!0,!0,x.N)},
hP4(d,e,f,g){return A.c9(null,B.aX,!0,null,new C.fi0(g,f,e),d,null,!0,!0,x.y)},
amc:function amc(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAQ:function aAQ(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dsU:function dsU(d,e){this.a=d
this.b=e},
dsV:function dsV(d){this.a=d},
dsL:function dsL(d,e){this.a=d
this.b=e},
dsJ:function dsJ(d){this.a=d},
dsT:function dsT(d){this.a=d},
dsS:function dsS(d,e){this.a=d
this.b=e},
dsI:function dsI(d,e){this.a=d
this.b=e},
dsH:function dsH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dsK:function dsK(d){this.a=d},
dsR:function dsR(){},
dsP:function dsP(d){this.a=d},
dsQ:function dsQ(d,e){this.a=d
this.b=e},
dsM:function dsM(){},
dsN:function dsN(d,e){this.a=d
this.b=e},
dsO:function dsO(d,e){this.a=d
this.b=e},
dsW:function dsW(d){this.a=d},
a_w:function a_w(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bpX:function bpX(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Za:function Za(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bh8:function bh8(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dt_:function dt_(d){this.a=d},
dsX:function dsX(d,e){this.a=d
this.b=e},
dsY:function dsY(d,e){this.a=d
this.b=e},
dsZ:function dsZ(d){this.a=d},
Zb:function Zb(d){this.a=d},
bh9:function bh9(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dt0:function dt0(d,e){this.a=d
this.b=e},
fgO:function fgO(){},
fi0:function fi0(d,e,f){this.a=d
this.b=e
this.c=f},
adj:function adj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ePt:function ePt(d){this.a=d},
ePu:function ePu(d){this.a=d},
Pc:function Pc(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Yi:function Yi(d){this.a=d},
ay7:function ay7(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d2_:function d2_(d){this.a=d},
d1X:function d1X(){},
d1Y:function d1Y(d){this.a=d},
d1Z:function d1Z(d){this.a=d},
Td(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$Td=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||B.a.i(f).length===0){w=1
break}w=3
return A.b(A.Mf(s),$async$Td)
case 3:t=h
J.cf(t,A.E(["role",e,"text",B.a.i(f),"at",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z))
w=4
return A.b(A.ams(s,t),$async$Td)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Td,v)},
hs1(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=A.T(d).k("a2<1>")
v=A.B(new A.a2(d,new C.bXq(),w),w.k("H.E"))
w=v.length
if(w===0)return""
u=w<=24?v:B.d.fH(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,A.L)(u),++s){r=u[s]
q=J.a8(r)
p=J.y(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+A.t(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
bXq:function bXq(){},
hUr(d){return B.d.dM(B.BG,new C.fpW(d),new C.fpX()).r},
fpW:function fpW(d){this.a=d},
fpX:function fpX(){},
amH:function amH(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bhf:function bhf(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dzl:function dzl(d){this.a=d},
dzk:function dzk(d){this.a=d},
dzc:function dzc(d,e,f){this.a=d
this.b=e
this.c=f},
dzh:function dzh(d){this.a=d},
dze:function dze(d,e,f){this.a=d
this.b=e
this.c=f},
dzi:function dzi(d){this.a=d},
dzd:function dzd(d){this.a=d},
dzj:function dzj(d){this.a=d},
dzf:function dzf(d){this.a=d},
dzg:function dzg(d){this.a=d},
h1j(d){var w=A.c3M(new A.S(Date.now(),0,!1)),v=d.bj
if(v===w)return
d.bj=w
d.bR=0
d.c6=A.a([],x.s)},
h1l(d){return A.c9(null,B.w.j(0.82),!0,null,new C.c3R(),d,null,!0,!0,x.H)},
a5A:function a5A(d){this.a=d},
c3R:function c3R(){},
c3Q:function c3Q(d){this.a=d},
hek(){var w=new A.S(Date.now(),0,!1),v=w.bN(A.dB(4-A.mo(w),0,0,0,0,0).a),u=A.c0(A.by(v),1,4,0,0,0,0,0)
return""+A.by(v)+"-W"+B.a.aT(B.o.u(1+B.k.bw(B.o.an(v.by(A.c0(A.by(u),A.bG(u),A.bQ(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
f8l(d,e){var w,v,u,t,s,r,q=A.Fw(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=J.q(t,"email")
r=B.a.i(J.k(s==null?"":s).toLowerCase())
if((B.a.c9(r,"+local.ngmy")?B.a.ap(r,0,r.length-11):r)===q)return t}t=A.E(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
hJu(d,e){var w,v,u,t,s,r,q,p=A.Fw(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c9(q,"+local.ngmy")?B.a.ap(q,0,q.length-11):q)===p){w=A.aN(s.h(t,"winsLeft"))
w=w==null?null:B.k.O(w)
return w==null?0:w}}return 0},
i2y(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=A.Fw(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c9(q,"+local.ngmy")?B.a.ap(q,0,q.length-11):q)===n){w=A.aN(s.h(t,o))
w=w==null?null:B.k.O(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
hPL(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=A.Fw(b5),b2=A.c57(),b3=C.hek()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
r=J.a8(s)
q=r.h(s,a2)
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.c9(p,a3)?B.a.ap(p,0,p.length-11):p)!==b1)continue
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
return w==null?1:w}n=new C.fiN()
for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
r=J.q(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c9(p,a3)?B.a.ap(p,0,p.length-11):p)!==b1)continue
m=n.$5(s,"perDay",a6,a7,b2)
if(m!=null)return m}for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
r=J.q(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c9(p,a3)?B.a.ap(p,0,p.length-11):p)!==b1)continue
l=n.$5(s,"perWeek",a8,a9,b3)
if(l!=null)return l}k=C.f8l(b4,b5)
w=J.a8(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?A.a1(v.a(w.h(k,b0)),r,q):A.V(r,q)
w.n(k,b0,j)
for(w=b4.y,w=new A.cJ(w,A.a3(w).k("cJ<1,2>")).gah(0);w.C();){i=w.d
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
hb1(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[1,2,3],v=d.a,u=0;u<3;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
if(w===0)return 1
t=q[e.aB(w)]
if(t===3&&d.f>=d.e)t=e.hf()?1:2
return t},
fRy(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[-1,-2],v=d.a,u=0;u<2;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
return w===0?-1:q[e.aB(w)]},
hPM(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=A.Fw(a3),a1=new C.fiO()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
r=J.a8(s)
q=r.h(s,"email")
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.c9(p,"+local.ngmy")?B.a.ap(p,0,p.length-11):p)!==a0)continue
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
q=new C.fiP(v+r+q>1,l)
k=q.$2(o,"w")
r=k+q.$2(n,"l")
j=a4.aB(r+q.$2(m,"p"))
if(j<k){w.n(u,h,o-1)
w.n(u,d,"w")
w=a2.a
v=w.h(0,"1")
if(v==null)v=10
i=Math.max(1,v)
w=w.h(0,"2")
if(w==null)w=10
return a4.aB(i+Math.max(1,w))<i?1:2}if(j<r){w.n(u,g,n-1)
w.n(u,d,"l")
return C.fRy(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
hPK(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=A.aN(i.h(0,"wins")),g=h==null?m:B.k.O(h)
if(g==null)g=0
h=A.aN(i.h(0,"loses"))
w=h==null?m:B.k.O(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.hek():A.c57()
t=v+"|"+u
s=C.f8l(d,e)
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
n=f.aB(r)<o
if(n)h.n(s,k,q+1)
else h.n(s,j,p+1)
return n},
hY3(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
d.bfc()
w=C.hPM(d,e,a0)
if(w!=null){if(w===3)++d.f
C.aeI(d,e,w)
return w}v=C.hPL(d,e)
if(v!=null){if(v===3)++d.f
C.aeI(d,e,v)
return v}u=C.hPK(d,e,a0)
if(u!=null)return new C.fwX(d,a0,e).$1(u)
t=C.f8l(d,e)
s=J.a8(t)
r=A.aN(s.h(t,"winStreak"))
q=r==null?null:B.k.O(r)
if(q==null)q=0
s=A.aN(s.h(t,"loseStreak"))
p=s==null?null:B.k.O(s)
if(p==null)p=0
o=new C.fwZ(d,a0)
if(C.hJu(d,e)>0){n=o.$0()
C.i2y(d,e)
C.aeI(d,e,n)
return n}if(q>=d.c){n=new C.fwY(d,a0).$0()
C.aeI(d,e,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.aeI(d,e,n)
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
g=a0.aB(100)<h
if(g&&m.length!==0){f=m[a0.aB(m.length)]
if(f===3&&d.f>=d.e)f=a0.hf()?1:2}else{s=l.length
if(s!==0)f=l[a0.aB(s)]
else f=g?1:-1}if(f===3)++d.f
C.aeI(d,e,f)
return f},
c5_(d){var w=0,v=A.j(x.y),u
var $async$c5_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c4Z(d),$async$c5_)
case 3:if(f){u=!0
w=1
break}u=A.c4Z(d)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c5_,v)},
aeI(d,e,f){var w,v="winStreak",u="loseStreak",t=C.f8l(d,e),s=J.a8(t),r=A.aN(s.h(t,v)),q=r==null?null:B.k.O(r)
if(q==null)q=0
r=A.aN(s.h(t,u))
w=r==null?null:B.k.O(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
fiN:function fiN(){},
fiO:function fiO(){},
fiP:function fiP(d,e){this.a=d
this.b=e},
fwX:function fwX(d,e,f){this.a=d
this.b=e
this.c=f},
fwZ:function fwZ(d,e){this.a=d
this.b=e},
fwY:function fwY(d,e){this.a=d
this.b=e},
amb:function amb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bh6:function bh6(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cS$=d
_.b2$=e
_.c=_.a=null},
dsw:function dsw(d){this.a=d},
dsv:function dsv(d){this.a=d},
dsx:function dsx(d){this.a=d},
dsu:function dsu(d,e){this.a=d
this.b=e},
aJt:function aJt(){},
MH:function MH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c5P:function c5P(){},
c5O:function c5O(){},
aob:function aob(d,e,f){this.c=d
this.d=e
this.a=f},
fMP(d,e,f){return A.c9(null,B.w.j(0.88),!0,null,new C.c6g(f,e),d,null,!0,!0,x.H)},
hvO(d){var w,v,u,t,s=B.a.i(d),r=s.split("-")
if(r.length===3){w=A.c7(r[0],null)
v=r[1]
u=A.c7(v,null)
t=A.c7(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?B.i8[u-1]:v)+" "+A.t(t)+", "+A.t(w)}return s},
MP:function MP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c6g:function c6g(d,e){this.a=d
this.b=e},
bhM:function bhM(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
dS7:function dS7(d,e){this.a=d
this.b=e},
dS3:function dS3(){},
dS4:function dS4(){},
dS5:function dS5(d,e){this.a=d
this.b=e},
dS6:function dS6(d,e){this.a=d
this.b=e},
aK2:function aK2(){},
heg(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.beJ(new C.fsi(w))
w=w.a
return w==null?null:w.c.a},
he8(d){$.aT.x1$.push(new C.fs5(d))},
hes(d){var w=$.rH().gbe(),v=w!=null
if(!v||w.c==null)return
if(C.heg(w)==="GamePlayScreen")if(v&&w.c!=null&&w.pi())w.eH()},
her(d){C.hb8(d,0)},
hb8(d,e){var w,v
if(e>4)return
w=d==null?$.rH().gbe():d
if(w==null||w.c==null)return
v=C.heg(w)
if(v==="GameCenterScreen")return
if(D.eEe.t(0,v)&&w.pi()){w.eH()
$.aT.x1$.push(new C.ff4(w,e))}},
aNT(d,e,f){return A.ei(A.cm(new C.ftF(e,d,f)),e,!0)},
fsi:function fsi(d){this.a=d},
fs5:function fs5(d){this.a=d},
fs4:function fs4(d){this.a=d},
ff4:function ff4(d,e){this.a=d
this.b=e},
ftF:function ftF(d,e,f){this.a=d
this.b=e
this.c=f},
aof(d,e){var w=0,v=A.j(x.H),u
var $async$aof=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=A.Uh(e)
w=2
return A.b(A.aoe(d,u),$async$aof)
case 2:A.a6e(d,u)
return A.h(null,v)}})
return A.i($async$aof,v)},
un(d,e,f,g,h,i,j,k){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$un=A.e(function(l,m){if(l===1)return A.f(m,v)
for(;;)switch(w){case 0:o=A.xV(g)
if(o.length===0){w=1
break}t=e==null?A.Ko(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return A.b(A.MQ(o),$async$un)
case 3:q=m
if(j!=null&&j.length!==0&&J.qG(q,new C.c6u(j))){w=1
break}p=e==null?new A.S(Date.now(),0,!1):e
J.pl(q,0,new A.j4(B.o.u(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return A.b(C.aof(o,q),$async$un)
case 4:if(i==null||r==null||s)C.a6g(o).bz(new C.c6v(),x.S).eT(new C.c6w())
case 1:return A.h(u,v)}})
return A.i($async$un,v)},
a6g(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a6g=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=$.hfp
m=A.xV(d)
if(n==null||m.length===0){w=1
break}w=3
return A.b(A.MQ(m),$async$a6g)
case 3:t=f
s=J.cE(t)
if(!s.b8(t,new C.c6t())){w=1
break}w=4
return A.b(n.$2(m,t),$async$a6g)
case 4:r=f
q=J.a8(r)
if(q.gM(r)!==s.gM(t)){w=1
break}for(p=!1,o=0;o<s.gM(t);++o)if(B.R.ao(s.h(t,o).ad(),null)!==B.R.ao(q.h(r,o).ad(),null))p=!0
w=p?5:6
break
case 5:w=7
return A.b(C.aof(m,r),$async$a6g)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$a6g,v)},
aYs(d){var w=0,v=A.j(x.S),u,t
var $async$aYs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fMS(d,!1),$async$aYs)
case 3:t=J
w=4
return A.b(C.aog(d,!1),$async$aYs)
case 4:u=t.dH(f,new C.c6s(new A.S(Date.now(),0,!1).bN(-864e8))).gM(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYs,v)},
aog(d,e){var w=0,v=A.j(x.ac),u,t,s,r
var $async$aog=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=A.xV(d)
if(r.length===0){u=A.a([],x.gi)
w=1
break}w=3
return A.b(A.MQ(r),$async$aog)
case 3:t=g
s=A.Uh(t)
if(s.length!==J.ac(t))C.aof(r,s)
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aog,v)},
hVZ(d){var w,v,u,t=new A.S(Date.now(),0,!1),s=t.by(d).a,r=B.o.an(s,6e7)
if(r<1)return"Just now"
w=B.o.an(s,36e8)
if(w<1)return""+r+"m ago"
if(B.o.an(s,864e8)<1)return""+w+"h ago"
v=B.o.F(A.dh(d),12)===0?12:B.o.F(A.dh(d),12)
s=B.i8[A.bG(d)-1]
r=A.by(d)===A.by(t)?"":", "+A.by(d)
w=B.a.aT(B.o.u(A.fY(d)),2,"0")
u=A.dh(d)<12?"AM":"PM"
return s+" "+A.bQ(d)+r+" \xb7 "+v+":"+w+" "+u},
bxZ(d){var w=B.k.aa(Math.abs(d),2).split(".")
return"$"+A.ov(w[0],A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fd_(),null)+"."+w[1]},
bBy(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$bBy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aog(e,!1),$async$bBy)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
A.fMS(e,!0).bz(new C.fFc(e),t).bz(new C.fFd(),t).eT(new C.fFe())
w=4
return A.b(A.bW(B.K,null,new C.fFf(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bBy)
case 4:case 1:return A.h(u,v)}})
return A.i($async$bBy,v)},
fPK(d,e,f){var w=null,v=B.c.j(0.05),u=A.m(14),t=A.I(f.j(0.35),B.r,1)
return A.D(A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),B.bz,A.f1(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.dt)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.hG,w,w,w),1)},
dS8(d,e,f){var w=null,v=B.w.j(0.22),u=A.m(8),t=A.I(f.j(0.28),B.r,1)
return A.D(A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.f1(B.a3,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.eg)],x.p),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.LJ,w,w,w),1)},
c6u:function c6u(d){this.a=d},
c6v:function c6v(){},
c6w:function c6w(){},
c6t:function c6t(){},
c6s:function c6s(d){this.a=d},
fd_:function fd_(){},
fFc:function fFc(d){this.a=d},
fFd:function fFd(){},
fFe:function fFe(){},
fFf:function fFf(d,e){this.a=d
this.b=e},
fFb:function fFb(d,e){this.a=d
this.b=e},
fFa:function fFa(d){this.a=d},
ac9:function ac9(d,e){this.c=d
this.a=e},
dSa:function dSa(){},
dSb:function dSb(){},
dSc:function dSc(){},
dSd:function dSd(d){this.a=d},
dSf:function dSf(){},
dSe:function dSe(d){this.a=d},
ac8:function ac8(d,e){this.c=d
this.a=e},
dS9:function dS9(){},
bBz(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return A.hQ(B.aX,!1,w,d,new C.fFi(j,i,h,g,e,f),null,B.eN,!1,x.H)},
fFi:function fFi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fFg:function fFg(d,e){this.a=d
this.b=e},
fFh:function fFh(d,e){this.a=d
this.b=e},
ayL:function ayL(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bds:function bds(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bq$=e
_.a7$=f
_.c=_.a=null},
d90:function d90(d,e){this.a=d
this.b=e},
d9_:function d9_(){},
acy:function acy(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aIZ:function aIZ(){},
ap1(d,e,f){return new C.aZj(f,d,e,null)},
hws(d){var w=A.a(B.k.aa(d,2).split("."),x.s),v=A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=A.ov(w[0],v,new C.c84(),null)
return B.d.aH(w,".")},
aYv(){var w=$.t5
if((w>0?$.t5=w-1:w)<=0)$.t5=0},
afU(d,e){var w=0,v=A.j(x.H),u
var $async$afU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=$.fU7
w=u!=null?2:3
break
case 2:w=4
return A.b(u.$2(d,e),$async$afU)
case 4:case 3:return A.h(null,v)}})
return A.i($async$afU,v)},
aZj:function aZj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c85:function c85(d){this.a=d},
c84:function c84(){},
Mi:function Mi(){},
bXX:function bXX(){},
fTx(d){if(d>0)return"+"+d
return""+d},
fSV(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
ftG(d,e){var w=J.q(e,d)
if(w==null)w=A.fss().h(0,d)
return w==null?90:w},
fbY(d,e){var w,v,u=A.aW(x.S)
while(u.a<3){w=e.aB(41)-20
if(w===0)continue
u.J(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.J(0,d+v*7+3)
v=A.a([B.o.u(d)],x.s)
B.d.v(v,new A.jI(u,new C.fbZ(),u.$ti.k("jI<cl.E,n>")))
B.d.fo(v,e)
return v},
ha8(d,e,f){var w,v,u,t,s=A.aW(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.J(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.J(0,f[B.o.F(u,5)]+u);++u}t=A.a([d],x.s)
B.d.v(t,A.p3(s,3,s.$ti.k("cl.E")))
B.d.fo(t,e)
return t},
hR9(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=A.a([],x.dA),b2=new A.eT()
b2.dI(42)
for(w=x.s,v=0;v<200;++v){u=B.o.F(v,5)
if(u===0){t=[4,9,16,25,36,49,64,81,121,144,196,256][b2.aB(12)]
s=[2,3,5,6,7,10,11,13][b2.aB(8)]
r=B.k.O(Math.sqrt(t))
q=2+b2.aB(4)
p=B.o.an(q,2)
if((q&1)===0){o=""+r
n=""+s
m=p===1?o+"\u221a"+n:o+"x^"+p+"\u221a"+n}else{o=""+r
n=""+s
m=p===0?o+"\u221a"+n+"x":o+"x^"+p+"\u221a"+n+"x"}o=""+p
n=""+s
l=""+r+"x^"
b1.push(new C.HY("Simplify \u221a("+t*s+"x^"+q+")",m,C.ha8(m,b2,A.a([""+(r+1)+"x^"+o+"\u221a"+n,A.t(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aB(35)
j=b2.aB(4)===0?1:2+b2.aB(4)
i=b2.aB(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.HY("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.fbY(k,b2)))}else if(u===2){k=2+b2.aB(18)
j=b2.aB(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aB(10)+2
b1.push(new C.HY("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.fbY(g,b2)))}else b1.push(new C.HY("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.fbY(k,b2)))}else if(u===3){e=b2.aB(11)-5
o=b2.aB(11)
n=b2.aB(11)
d=b2.aB(11)+2
l=b2.hf()?1:-1
a0=e+l*(b2.aB(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===B.k.jM(a4)?""+B.k.O(a4):"\u221a"+a3
b1.push(new C.HY("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.fbY(a0,b2)))}else{a6=2+b2.aB(10)
a7=a6+2+b2.aB(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.HY("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.ha8(m,b2,A.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
i0N(d){var w,v,u=x.s,t=A.a(d.split(""),u)
if(t.length<4)return new A.dw(A.a(d.split(""),u),x.bJ).fU(0)
for(w=0;w<12;++w){B.d.fo(t,B.cI)
v=B.d.fU(t)
if(v!==d)return v}return new A.dw(t,x.bJ).fU(0)},
HY:function HY(d,e,f){this.a=d
this.b=e
this.c=f},
fbZ:function fbZ(){},
anE:function anE(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBB:function aBB(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
dLa:function dLa(d){this.a=d},
dLb:function dLb(d){this.a=d},
dLc:function dLc(d){this.a=d},
dLd:function dLd(d,e){this.a=d
this.b=e},
dLe:function dLe(d,e){this.a=d
this.b=e},
dLf:function dLf(d){this.a=d},
dL9:function dL9(d){this.a=d},
dLg:function dLg(d){this.a=d},
dL8:function dL8(d){this.a=d},
dLj:function dLj(d){this.a=d},
dLk:function dLk(d){this.a=d},
dLi:function dLi(d,e){this.a=d
this.b=e},
dLh:function dLh(d,e){this.a=d
this.b=e},
aoh:function aoh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBS:function aBS(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
dSx:function dSx(d,e,f){this.a=d
this.b=e
this.c=f},
dSy:function dSy(d){this.a=d},
dSt:function dSt(d){this.a=d},
dSv:function dSv(d,e){this.a=d
this.b=e},
dSu:function dSu(d,e){this.a=d
this.b=e},
dSw:function dSw(d,e){this.a=d
this.b=e},
dSs:function dSs(d){this.a=d},
hsE(d){var w,v,u,t,s,r,q,p=new A.S(Date.now(),0,!1),o=p.bN(36e8)
try{w=d.h(0,"start")
p=A.mG(J.k(w==null?"":w)).bQ()
w=d.h(0,"end")
o=A.mG(J.k(w==null?"":w)).bQ()}catch(v){}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"title")
u=J.k(u==null?"Event":u)
t=p
s=o
r=d.h(0,"notes")
r=r==null?null:J.k(r)
q=d.h(0,"location")
return new C.r5(w,u,t,s,r,q==null?null:J.k(q))},
a6m(d){var w=0,v=A.j(x.ck),u,t,s,r,q,p,o
var $async$a6m=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.b)
w=1
break}w=3
return A.b(A.aA(),$async$a6m)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aU(J.q(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.b)
w=1
break}try{s=B.R.aG(0,t,null)
if(!x.j.b(s)){p=A.a([],x.b)
u=p
w=1
break}p=J.d7(s,x.f)
p=A.cD(p,new C.c6W(),p.$ti.k("H.E"),x.b1)
p=A.B(p,A.a3(p).k("H.E"))
B.d.b1(p,new C.c6X())
u=p
w=1
break}catch(n){r=A.a9(n)
$.am.$1("[calendar-memory] load: "+A.t(r))
p=A.a([],x.b)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$a6m,v)},
aoz(d,e){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$aoz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.a6m(d),$async$aoz)
case 2:r=g
q=J.cE(r)
q.bn(r,new C.c6T(e))
q.J(r,e)
q.b1(r,new C.c6U())
w=3
return A.b(A.aA(),$async$aoz)
case 3:u=g
t=B.a.i(d.toLowerCase())
q=q.ki(r,80)
s=q.$ti.k("J<ai.E,a4<n,@>>")
q=A.B(new A.J(q,new C.c6V(),s),s.k("ai.E"))
w=4
return A.b(u.ar("String","ngmy_helper_calendar_v1_"+t,B.R.ao(q,null)),$async$aoz)
case 4:return A.h(null,v)}})
return A.i($async$aoz,v)},
hw0(d,e){var w=Date.now(),v=new A.S(w,0,!1).bQ()
w=J.dH(d,new C.c6Y(v,v.bN(A.dB(14,0,0,0,0,0).a)))
w=A.B(w,w.$ti.k("H.E"))
return w},
h1S(d){var w,v,u,t,s,r,q,p,o,n,m=C.hw0(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=A.dc(m,0,A.dJ(20,"count",x.S),A.T(m).c),v=w.$ti,w=new A.bV(w,w.gM(0),v.k("bV<ai.E>")),v=v.k("ai.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
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
r5:function r5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c6W:function c6W(){},
c6X:function c6X(){},
c6T:function c6T(d){this.a=d},
c6U:function c6U(){},
c6V:function c6V(){},
c6Y:function c6Y(d,e){this.a=d
this.b=e},
hsF(d){var w,v,u,t,s,r,q,p,o=null,n=new A.S(Date.now(),0,!1)
try{w=d.h(0,"when")
n=A.mG(J.k(w==null?"":w)).bQ()}catch(v){}w=d.h(0,"id")
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
return new C.r6(w,u,t,s,r,q,J.k(p==null?"user":p))},
h0d(d){var w=B.o.F(A.dh(d),12)===0?12:B.o.F(A.dh(d),12),v=A.dh(d)>=12?"PM":"AM"
return""+A.bG(d)+"/"+A.bQ(d)+" "+w+":"+B.a.aT(B.o.u(A.fY(d)),2,"0")+" "+v},
Tq(d){var w=0,v=A.j(x.e),u,t,s,r,q,p,o
var $async$Tq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.x)
w=1
break}w=3
return A.b(A.aA(),$async$Tq)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aU(J.q(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.x)
w=1
break}try{s=B.R.aG(0,t,null)
if(!x.j.b(s)){p=A.a([],x.x)
u=p
w=1
break}p=J.d7(s,x.f)
p=A.cD(p,new C.c_k(),p.$ti.k("H.E"),x.Q)
p=A.B(p,A.a3(p).k("H.E"))
B.d.b1(p,new C.c_l())
u=p
w=1
break}catch(n){r=A.a9(n)
$.am.$1("[call-memory] load: "+A.t(r))
p=A.a([],x.x)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Tq,v)},
aWQ(d,e){var w=0,v=A.j(x.H),u,t,s,r
var $async$aWQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$aWQ)
case 2:u=g
t=A.dc(e,0,A.dJ(120,"count",x.S),A.T(e).c).dF(0)
s=B.a.i(d.toLowerCase())
r=A.T(t).k("J<1,a4<n,@>>")
r=A.B(new A.J(t,new C.c_i(),r),r.k("ai.E"))
w=3
return A.b(u.ar("String","ngmy_call_memory_v1_"+s,B.R.ao(r,null)),$async$aWQ)
case 3:return A.h(null,v)}})
return A.i($async$aWQ,v)},
aWR(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$aWR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:p=A.V(x.N,x.Q)
o=J
w=2
return A.b(C.Tq(d),$async$aWR)
case 2:u=o.aX(g)
case 3:if(!u.C()){w=4
break}t=u.gU(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("bc<2>")
q=A.B(new A.bc(p,u),u.k("H.E"))
B.d.b1(q,new C.c_j())
w=5
return A.b(C.aWQ(d,q),$async$aWR)
case 5:return A.h(null,v)}})
return A.i($async$aWR,v)},
c_m(d,e){var w=0,v=A.j(x.e),u,t,s
var $async$c_m=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Tq(d),$async$c_m)
case 3:t=s.dH(g,new C.c_n(e.bN(-72e8),e.bN(72e8)))
t=A.B(t,t.$ti.k("H.E"))
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c_m,v)},
h0e(d,e){var w,v,u,t,s,r=J.a8(d)
if(r.gam(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.ki(d,e),v=w.$ti,w=new A.bV(w,w.gM(0),v.k("bV<ai.E>")),v=v.k("ai.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gUB()+"\n"
t=t.f
if(t!=null&&B.a.i(t).length!==0){s=B.a.i(t)
u+="  Voicemail/text: "+(s.length>180?B.a.ap(s,0,177)+"\u2026":s)+"\n"}}r=r.gM(d)>e?u+("\u2026 and "+(r.gM(d)-e)+" more\n"):u
return B.a.i(r.charCodeAt(0)==0?r:r)},
hXO(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new A.S(q,0,!1).bQ(),o=d.toLowerCase(),n=A.c0(A.by(p),A.bG(p),A.bQ(p),0,0,0,0,0)
if(B.a.t(o,"yesterday"))n=n.bN(r)
else if(!B.a.t(o,"today")&&B.a.t(o,"last night"))n=n.bN(r)
w=A.af("\\b(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!0,!1,!1,!1).cC(o)
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
hfP(d){var w=A.af("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
r6:function r6(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c_k:function c_k(){},
c_l:function c_l(){},
c_i:function c_i(){},
c_j:function c_j(){},
c_n:function c_n(d,e){this.a=d
this.b=e},
h1V(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lv(t,w,v,u==null?null:J.k(u))},
hw6(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b6(v,new C.c73(),x.bP)
v=A.B(v,v.$ti.k("ai.E"))}if(v==null)v=D.d08
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.y(d.h(0,"printable"),!0)
return new C.ie(r,w,v,u,t,typeof d.h(0,s)=="number"?B.k.O(A.f8(d.h(0,s))):0)},
hw5(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.hJH(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?B.k.O(A.f8(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?B.k.O(A.f8(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b6(s,new C.c71(),x.u)
s=A.B(s,s.$ti.k("ai.E"))}return new C.i0(p,w,v,u,s==null?D.avk:s,t)},
hJI(d){var w,v,u,t=A.E([G.Bg,"investments",B.ov,"games",B.ju,"loans",B.hx,"withdrawals",B.kK,"deposits",B.kL,"civic",B.kJ,"store",B.qU,"jobs",B.mg,"refunds",B.eR,"account",B.lE,"music",B.xJ,"help"],x.dk,x.N)
for(w=new A.cJ(t,A.a3(t).k("cJ<1,2>")).gah(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
hJH(d){switch(d){case"investments":return G.Bg
case"games":return B.ov
case"loans":return B.ju
case"withdrawals":return B.hx
case"deposits":return B.kK
case"civic":return B.kL
case"store":return B.kJ
case"jobs":return B.qU
case"refunds":return B.mg
case"account":return B.eR
case"music":return B.lE
default:return B.xJ}},
mV(d){var w=A.a([new C.lv("text",d,null,null)],x.a)
return w},
afR(){var w=null,v=x.v
return A.a([new C.i0("investments","Investments",G.Bg,4280468830,A.a([new C.ie("inv1","How do I buy an investment plan?",C.mV("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.ie("inv2","When do I get paid from my plan?",C.mV("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.ie("inv3","Can I have more than one plan?",C.mV("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.i0("games","Games",B.ov,4287323382,A.a([new C.ie("gam1","How do NGMY games work?",C.mV("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.ie("gam2","Why did my game payout change?",C.mV("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.i0("loans","Loans",B.ju,4294538006,A.a([new C.ie("loan1","How do I apply for a loan?",C.mV("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.ie("loan2","What is the repayment period?",C.mV("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.i0("withdrawals","Withdrawals",B.hx,4282090230,A.a([new C.ie("wd1","How do I withdraw money?",C.mV("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.ie("wd2","Why is my withdrawal pending?",C.mV("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.i0("deposits","Deposits",B.kK,4279548070,A.a([new C.ie("dep1","How do I deposit funds?",C.mV("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.ie("dep2","How long until my deposit posts?",C.mV("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.i0("civic","Civic Registry",B.kL,4289170426,A.a([new C.ie("civ1","What is Civic Registry?",C.mV("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.ie("civ2","What does \u201cmissed\u201d mean on my profile?",C.mV("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.i0("store","NGMY Store",B.kJ,4293675161,A.a([new C.ie("sto1","How do I buy from NGMY Store?",C.mV("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.ie("sto2","How do I sell in the store?",C.mV("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.i0("jobs","Jobs & Creator",B.qU,4293548044,A.a([new C.ie("job1","How do I find jobs?",C.mV("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.ie("job2","How do I post a job?",C.mV("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.i0("refunds","Refunds",B.mg,4293870660,A.a([new C.ie("ref1","Can I get a refund?",C.mV("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.ie("ref2","How long do refunds take?",C.mV("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.i0("account","Account",B.eR,4281908728,A.a([new C.ie("acc1","How do I update my profile?",C.mV("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.ie("acc2","I forgot my password \u2014 what now?",C.mV("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.i0("music","Music Charts",B.lE,4290807036,A.a([new C.ie("mus1","What are Music Charts?",C.mV("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.ie("mus2","How do I upload music?",C.mV("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.i0("help","Help Center",B.xJ,4279080072,A.a([new C.ie("hlp1","Where can I get live help?",C.mV("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.ie("hlp2","How do daily Helper limits work?",C.mV("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
h1W(d){var w,v=J.a8(d),u=v.gam(d)
if(u)return C.afR()
v=v.dt(d,new C.c76(),x.i)
w=A.B(v,v.$ti.k("ai.E"))
B.d.b1(w,new C.c77())
return w.length===0?C.afR():w},
h1X(d){var w=J.b6(d,new C.c78(),x.P)
w=A.B(w,w.$ti.k("ai.E"))
return A.E(["categories",w,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z)},
aoB(d){return C.hw7(d)},
hw7(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q,p
var $async$aoB=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.aA(),$async$aoB)
case 6:s=f
w=7
return A.b(s.ar("String","ngmy_helper_kb_v1",B.R.ao(C.h1X(d),null)),$async$aoB)
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
return A.i($async$aoB,v)},
c75(){var w=0,v=A.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$c75=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$c75)
case 7:r=e
q=A.aU(J.q(r.a,"ngmy_helper_kb_v1"))
if(q==null||B.a.i(q).length===0){l=C.afR()
u=l
w=1
break}p=B.R.aG(0,q,null)
if(!x.f.b(p)){l=C.afR()
u=l
w=1
break}o=J.q(p,"categories")
if(!x.j.b(o)){l=C.afR()
u=l
w=1
break}n=C.h1W(o)
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
l=C.afR()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$c75,v)},
aYR(){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$aYR=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c1(),$async$aYR)
case 7:if(!e){u=null
w=1
break}w=8
return A.b(A.f0("ngmy_helper_kb",null,!1,B.bG),$async$aYR)
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
return A.i($async$aYR,v)},
aYS(d){return C.hw8(d)},
hw8(d){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aYS=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c1(),$async$aYS)
case 7:if(!f){u=!1
w=1
break}w=8
return A.b(A.hA("ngmy_helper_kb",d,!1,!1,B.cF,null),$async$aYS)
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
return A.i($async$aYS,v)},
aoC(){var w=0,v=A.j(x.I),u,t,s,r
var $async$aoC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c75(),$async$aoC)
case 3:s=e
w=4
return A.b(C.aYR(),$async$aoC)
case 4:r=e
w=r!=null&&x.j.b(J.q(r,"categories"))?5:6
break
case 5:t=C.h1W(x.j.a(J.q(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return A.b(C.aoB(t),$async$aoC)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoC,v)},
c79(d){var w=0,v=A.j(x.y),u
var $async$c79=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aoB(d),$async$c79)
case 3:u=C.aYS(C.h1X(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c79,v)},
lv:function lv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ie:function ie(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c74:function c74(){},
c73:function c73(){},
i0:function i0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c72:function c72(){},
c71:function c71(){},
c76:function c76(){},
c77:function c77(){},
c78:function c78(){},
b76:function b76(d){this.a=d},
Uo:function Uo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aC3:function aC3(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
dWc:function dWc(){},
dWd:function dWd(){},
dW6:function dW6(d){this.a=d},
dW7:function dW7(d){this.a=d},
dVQ:function dVQ(d,e){this.a=d
this.b=e},
dVR:function dVR(d){this.a=d},
dVS:function dVS(d,e,f){this.a=d
this.b=e
this.c=f},
dVP:function dVP(d){this.a=d},
dW3:function dW3(d,e){this.a=d
this.b=e},
dW4:function dW4(d,e){this.a=d
this.b=e},
dW5:function dW5(d){this.a=d},
dVY:function dVY(d){this.a=d},
dVZ:function dVZ(d,e,f){this.a=d
this.b=e
this.c=f},
dVX:function dVX(d,e){this.a=d
this.b=e},
dW2:function dW2(d,e,f){this.a=d
this.b=e
this.c=f},
dW1:function dW1(d,e){this.a=d
this.b=e},
dW0:function dW0(d,e){this.a=d
this.b=e},
dW_:function dW_(d,e,f){this.a=d
this.b=e
this.c=f},
dVU:function dVU(d){this.a=d},
dVT:function dVT(d){this.a=d},
dVV:function dVV(d,e){this.a=d
this.b=e},
dVW:function dVW(d){this.a=d},
dWb:function dWb(d,e){this.a=d
this.b=e},
dWa:function dWa(d,e){this.a=d
this.b=e},
dW9:function dW9(){},
dW8:function dW8(d,e){this.a=d
this.b=e},
OF:function OF(d,e){this.c=d
this.a=e},
b8X:function b8X(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cII:function cII(d){this.a=d},
cIH:function cIH(d,e){this.a=d
this.b=e},
cIF:function cIF(d,e){this.a=d
this.b=e},
cIJ:function cIJ(d){this.a=d},
cIG:function cIG(d,e){this.a=d
this.b=e},
cIE:function cIE(d,e){this.a=d
this.b=e},
cIK:function cIK(d){this.a=d},
cIL:function cIL(d,e){this.a=d
this.b=e},
ZY:function ZY(d,e,f){this.c=d
this.d=e
this.a=f},
aE1:function aE1(){this.d=$
this.c=this.a=null},
eKy:function eKy(d,e){this.a=d
this.b=e},
eKz:function eKz(d){this.a=d},
eKF:function eKF(){},
eKE:function eKE(d,e){this.a=d
this.b=e},
eKD:function eKD(d,e){this.a=d
this.b=e},
eKA:function eKA(d,e){this.a=d
this.b=e},
eKC:function eKC(d,e,f){this.a=d
this.b=e
this.c=f},
eKB:function eKB(d,e,f){this.a=d
this.b=e
this.c=f},
ZX:function ZX(d,e){this.c=d
this.a=e},
aE0:function aE0(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
eKu:function eKu(d,e){this.a=d
this.b=e},
eKs:function eKs(d){this.a=d},
eKt:function eKt(d,e){this.a=d
this.b=e},
eKw:function eKw(d,e){this.a=d
this.b=e},
eKx:function eKx(d){this.a=d},
eKv:function eKv(d,e){this.a=d
this.b=e},
hw3(d){var w=new A.J(d,new C.c6Z(),A.T(d).k("J<1,n>")).aH(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
c7_(d,e,f){return C.hw4(d,e,f)},
hw4(b4,b5,b6){var w=0,v=A.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$c7_=A.e(function(b8,b9){if(b8===1)return A.f(b9,v)
for(;;)switch(w){case 0:b3=B.a.i(b5)
if(b3.length===0){u=new A.Jy([A.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return A.b(A.qC(A.mY(b3),C.hw3(b6)+"\n\nAdmin instruction:\n"+b4,B.hj,null),$async$c7_)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=B.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new A.Jy([A.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=B.a.i(a3)
if(J.cZ(s,"```"))s=B.a.e9(J.fWT(s,A.af("^```(?:json)?\\s*",!0,!1,!1,!1),""),A.af("\\s*```$",!0,!1,!1,!1),"")
r=B.R.aG(0,s,null)
a3=x.f
if(!a3.b(r)){a3=A.a([],x.Y)
u=new A.Jy([a3,"AI response was not valid JSON.",null,null])
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
u=new A.Jy([a3,"AI did not return any categories.",p,o])
w=1
break}m=A.a([],x.Y)
l=b6.length
for(k=0,a7=x.v,a8=x.a;k<J.ac(n);++k){j=A.a1(a3.a(J.q(n,k)),a4,a5)
i="cat_ai_"+1000*Date.now()+"_"+A.t(k)
h=J.q(j,"questions")
g=A.a([],a7)
if(a6.b(h))for(f=0;f<J.ac(h);++f){e=A.a1(a3.a(J.q(h,f)),a4,a5)
d=J.q(e,"answerBlocks")
a0=A.a([],a8)
if(a6.b(d))for(a9=J.aX(d);a9.C();){a1=a9.gU(a9)
J.cf(a0,C.h1V(A.a1(a3.a(a1),a4,a5)))}if(J.ac(a0)===0){a9=J.q(e,"answer")
J.cf(a0,new C.lv("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=A.t(f)
b1=J.q(e,"question")
J.cf(g,new C.ie("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.y(J.q(e,"printable"),!0),f))}a9=J.q(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.q(j,"iconKey")
b0=C.hw2(J.k(b0==null?"help":b0))
b1=typeof J.q(j,"colorValue")=="number"?B.k.O(A.f8(J.q(j,"colorValue"))):4284773515
J.cf(m,new C.i0(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ac(a3)!==0)===!0?o:null
u=new A.Jy([m,null,p,a3])
w=1
break}catch(b7){a2=A.a9(b7)
a3=A.t(a2)
a4=A.a([],x.Y)
u=new A.Jy([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c7_,v)},
hw2(d){switch(d){case"investments":return G.Bg
case"games":return B.ov
case"loans":return B.ju
case"withdrawals":return B.hx
case"deposits":return B.kK
case"civic":return B.kL
case"store":return B.kJ
case"jobs":return B.qU
case"refunds":return B.mg
case"account":return B.eR
case"music":return B.lE
default:return B.xJ}},
hWk(d,e,f){var w,v,u,t=A.bl(d,!0,x.i)
if(f!=null&&J.ac(e)===1){w=B.d.bc(t,new C.fu2(f))
if(w>=0){t[w]=J.fo(e).cEj(f,t[w].f)
return t}}B.d.v(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].b9j(u)
return t},
c6Z:function c6Z(){},
fu2:function fu2(d){this.a=d},
d_9:function d_9(d){this.a=d},
Up:function Up(d,e,f){this.c=d
this.d=e
this.a=f},
aC5:function aC5(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
dWN:function dWN(){},
dWt:function dWt(d,e){this.a=d
this.b=e},
dWy:function dWy(d,e){this.a=d
this.b=e},
dWw:function dWw(d,e){this.a=d
this.b=e},
dWu:function dWu(d){this.a=d},
dWv:function dWv(d){this.a=d},
dWx:function dWx(d,e,f){this.a=d
this.b=e
this.c=f},
dWp:function dWp(){},
dWq:function dWq(){},
dWr:function dWr(){},
dWs:function dWs(){},
dWD:function dWD(d,e){this.a=d
this.b=e},
dWE:function dWE(d){this.a=d},
dWF:function dWF(d){this.a=d},
dWG:function dWG(d){this.a=d},
dWH:function dWH(d){this.a=d},
dWI:function dWI(d){this.a=d},
dWJ:function dWJ(){},
dWK:function dWK(d){this.a=d},
dWC:function dWC(d){this.a=d},
dWL:function dWL(d){this.a=d},
dWB:function dWB(d){this.a=d},
dWM:function dWM(d,e){this.a=d
this.b=e},
dWA:function dWA(d,e){this.a=d
this.b=e},
dWz:function dWz(d,e){this.a=d
this.b=e},
hDS(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.a([],x.eO)
for(w=A.af("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kL(0,d),w=new A.J1(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=B.a.ap(d,t,q)
o=u?B.cn:B.aK
m.push(new A.eo(p,n,n,B.cO,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?B.cn:B.aK
m.push(new A.eo(p,n,n,B.cO,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,B.I,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?B.cn:B.aK
m.push(new A.eo(p,n,n,B.cO,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,B.cD,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?B.cn:B.aK
m.push(new A.eo(p,n,n,B.cO,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,B.mt,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=B.a.b_(d,t)
m.push(A.dq(n,n,n,n,n,n,n,n,n,A.l(n,n,u?B.cn:B.aK,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return A.tf(n,n,n,B.eC,n,n,!0,n,A.dq(m,n,n,n,n,n,n,n,n,n,n),B.a5,n,n,B.de,B.cd)},
ddh:function ddh(d){this.a=d},
azE:function azE(d,e){this.a=d
this.b=e},
aoA:function aoA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aC4:function aC4(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
dWm:function dWm(d,e){this.a=d
this.b=e},
dWn:function dWn(d,e){this.a=d
this.b=e},
dWe:function dWe(d){this.a=d},
dWf:function dWf(d){this.a=d},
dWo:function dWo(){},
dWh:function dWh(d,e){this.a=d
this.b=e},
dWg:function dWg(d,e){this.a=d
this.b=e},
dWj:function dWj(){},
dWl:function dWl(){},
dWk:function dWk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dWi:function dWi(d,e){this.a=d
this.b=e},
azC:function azC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aaI:function aaI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aYQ:function aYQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c70:function c70(d){this.a=d},
aaA:function aaA(d,e,f){this.c=d
this.d=e
this.a=f},
cCo:function cCo(d){this.a=d},
cCp:function cCp(){},
cCq:function cCq(d){this.a=d},
azD:function azD(d,e,f){this.c=d
this.d=e
this.a=f},
beX:function beX(){this.c=this.a=this.d=null},
ddi:function ddi(d,e){this.a=d
this.b=e},
ddk:function ddk(d,e){this.a=d
this.b=e},
ddj:function ddj(d){this.a=d},
hxB(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
hxC(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
hxA(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
ha3(d){var w
if(new A.a2(A.a(d.split("\n"),x.s),new C.fbJ(),x.cc).gM(0)<3)w=d.length>100&&B.a.t(d,"\n")
else w=!0
return w},
hXt(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.hxA(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
apo:function apo(d,e){this.a=d
this.b=e},
I2:function I2(d,e){this.a=d
this.b=e},
rc:function rc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fbJ:function fbJ(){},
aoD:function aoD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aC6:function aC6(d,e,f,g,h,i,j){var _=this
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
dX0:function dX0(d,e){this.a=d
this.b=e},
dWS:function dWS(d){this.a=d},
dWU:function dWU(){},
dWV:function dWV(d,e){this.a=d
this.b=e},
dWW:function dWW(d){this.a=d},
dWX:function dWX(){},
dWY:function dWY(d,e){this.a=d
this.b=e},
dWZ:function dWZ(d){this.a=d},
dX_:function dX_(d){this.a=d},
dWT:function dWT(d,e){this.a=d
this.b=e},
dX7:function dX7(d,e){this.a=d
this.b=e},
dX4:function dX4(){},
dX5:function dX5(d,e){this.a=d
this.b=e},
dX6:function dX6(d,e){this.a=d
this.b=e},
dX3:function dX3(d,e){this.a=d
this.b=e},
dX2:function dX2(d,e){this.a=d
this.b=e},
dX9:function dX9(d){this.a=d},
dX8:function dX8(d){this.a=d},
dWR:function dWR(d,e){this.a=d
this.b=e},
dWQ:function dWQ(d,e){this.a=d
this.b=e},
dXa:function dXa(d,e){this.a=d
this.b=e},
dX1:function dX1(d,e){this.a=d
this.b=e},
dWO:function dWO(d){this.a=d},
dWP:function dWP(d){this.a=d},
aKa:function aKa(){},
c7b(d){var w=0,v=A.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$c7b=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=D.QF
w=1
break}w=3
return A.b(A.aA(),$async$c7b)
case 3:r=f
q=B.a.i(d.toLowerCase())
t=A.aU(J.q(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.QF
w=1
break}try{q=A.a1(x.f.a(B.R.aG(0,t,null)),x.N,x.z)
p=J.y(q.h(0,"contacts"),!0)
o=J.y(q.h(0,"calendar"),!0)
n=J.y(q.h(0,"calls"),!0)
q=J.y(q.h(0,"allGrantedOnce"),!0)
u=new C.Uq(p,o,n,q)
w=1
break}catch(l){s=A.a9(l)
$.am.$1("[helper-perms] load: "+A.t(s))
u=D.QF
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c7b,v)},
aoE(d,e){var w=0,v=A.j(x.H),u
var $async$aoE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){w=1
break}w=4
return A.b(A.aA(),$async$aoE)
case 4:w=3
return A.b(g.ar("String","ngmy_helper_permissions_v1_"+B.a.i(d.toLowerCase()),B.R.ao(e.ad(),null)),$async$aoE)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aoE,v)},
c7a(d){var w=0,v=A.j(x.gp),u,t
var $async$c7a=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=new C.Uq(!0,!0,!0,!0)
w=3
return A.b(C.aoE(d,t),$async$c7a)
case 3:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c7a,v)},
hfQ(d){var w=B.a.i(d.toLowerCase()),v=A.af("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=A.af("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=A.af("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=A.af("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
hfO(d){var w=A.af("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
Uq:function Uq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bBF(d,e,f,g,h){var w=0,v=A.j(x.H),u,t,s
var $async$bBF=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return A.b(C.aYM(h),$async$bBF)
case 3:if(j){w=1
break}w=4
return A.b(C.aow(h),$async$bBF)
case 4:if(d.e==null){w=1
break}t=A.qk(d,!0)
t.toString
s=A.df()
s.b=A.oa(new C.fG2(g,e,f,s),!1,!1)
t.lD(0,s.bd())
case 1:return A.h(u,v)}})
return A.i($async$bBF,v)},
fG2:function fG2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fG1:function fG1(d){this.a=d},
YH:function YH(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
az3:function az3(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
daC:function daC(d){this.a=d},
daD:function daD(d,e,f){this.a=d
this.b=e
this.c=f},
daI:function daI(){},
daH:function daH(d){this.a=d},
daE:function daE(d){this.a=d},
daF:function daF(){},
daG:function daG(d){this.a=d},
aJ3:function aJ3(){},
hx3(d){var w=B.a.i(d),v=A.af("[^A-Z0-9]",!0,!1,!1,!1),u=A.aJ(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
hx2(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
apa(d){return C.hx0(d)},
hx0(d){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$apa=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.f0("ngmy_local_deposit_qr_v1_"+B.a.i(d),null,!1,B.bG),$async$apa)
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
return A.i($async$apa,v)},
aZH(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aZH=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.hx3(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.f0("ngmy_local_deposit_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bG),$async$aZH)
case 7:r=f
if(r==null){u=null
w=1
break}if(J.y(J.q(r,"redeemed"),!0)){u=null
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
return A.i($async$aZH,v)},
h2k(d){var w,v=B.a.i(d)
if(B.a.a0(v,"NGMYLOCALDEP1|")){w=B.a.i(B.a.b_(v,14))
return w.length===0?null:w}return null},
hx1(d,e,f){var w=B.a.i(f)
if(w.length===0)return!1
return B.d.b8(e,new C.c8Z(B.a.i(d.toLowerCase()),w))},
h2l(d,e,f,g,h){var w,v,u=J.a8(g),t=u.h(g,"lockedToEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=B.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.pC(!1,0,y.u)
if(s!==B.a.i(f.toLowerCase()))return new C.pC(!1,0,y.j)
v=B.a.i(h)
if(v.length===0)return new C.pC(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.pC(!1,0,"Verification code does not match this deposit.")
if(!C.hx1(e,d,w))return new C.pC(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
fN7(d,e){var w,v,u="amount",t=J.a8(d),s=t.h(d,"redeemedBy")
if(B.a.i(J.k(s==null?"":s)).length!==0)return D.dv_
s=t.h(d,"lockedToEmail")
w=B.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=B.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){A.aN(t.h(d,u))
return new C.N1(!0,!1,!1,!0)}if(w!==B.a.i(e.toLowerCase())){A.aN(t.h(d,u))
return new C.N1(!0,!1,!0,!1)}A.aN(t.h(d,u))
return new C.N1(!0,!1,!1,!1)},
c94(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$c94=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=C.h2k(d)
if(s==null){u=D.QH
w=1
break}w=3
return A.b(C.apa(s),$async$c94)
case 3:t=g
if(t==null){u=D.QH
w=1
break}u=C.fN7(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c94,v)},
aZJ(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$aZJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aZH(d),$async$aZJ)
case 3:s=g
if(s==null||s.length===0){u=D.QH
w=1
break}w=4
return A.b(C.apa(s),$async$aZJ)
case 4:t=g
if(t==null){u=D.QH
w=1
break}u=C.fN7(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZJ,v)},
c95(d,e,f,g,h){var w=0,v=A.j(x.D),u,t
var $async$c95=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aZH(d),$async$c95)
case 3:t=j
if(t==null||t.length===0){u=new C.pC(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.UL(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c95,v)},
UL(d,e,f,g,h){return C.hx4(d,e,f,g,h)},
hx4(a2,a3,a4,a5,a6){var w=0,v=A.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$UL=A.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.h2k(a4)
if(a0==null){u=new C.pC(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return A.b(C.apa(a0),$async$UL)
case 3:k=a8
if(k==null){u=new C.pC(!1,0,y.m)
w=1
break}j=C.fN7(k,a5)
if(j.b){u=new C.pC(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.pC(!1,0,y.u)
w=1
break}if(j.c){u=new C.pC(!1,0,y.j)
w=1
break}i=C.h2l(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=A.aN(J.q(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.pC(!1,0,"Invalid deposit amount.")
w=1
break}r=new A.S(Date.now(),0,!1).a5().ac()
q=B.a.i(a5.toLowerCase())
t=5
w=8
return A.b(A.f0("ngmy_local_deposit_qr_v1_"+B.a.i(a0),null,!1,B.bG),$async$UL)
case 8:p=a8
if(p==null){u=new C.pC(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.q(p,"redeemedBy")
if(B.a.i(J.k(g==null?"":g)).length!==0){u=new C.pC(!1,0,"This deposit code was already used.")
w=1
break}o=C.h2l(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=B.a.i(a0)
f=x.N
e=x.z
n=A.dW(p,f,e)
J.aG(n,"redeemedBy",q)
J.aG(n,"redeemedAt",r)
w=9
return A.b(A.hA("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,B.cF,null),$async$UL)
case 9:n=J.q(p,"shortCode")
m=B.a.i(J.k(n==null?"":n))
w=J.ac(m)!==0?10:11
break
case 10:w=12
return A.b(A.hA("ngmy_local_deposit_code_v1_"+B.a.i(m).toUpperCase(),A.E(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,B.cF,null),$async$UL)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=A.a9(a1)
$.am.$1("[local deposit qr] redeem: "+A.t(l))
u=new C.pC(!1,0,"Could not apply deposit. Check connection and try again.")
w=1
break
w=7
break
case 4:w=2
break
case 7:u=new C.pC(!0,h,null)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$UL,v)},
N1:function N1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
pC:function pC(d,e,f){this.a=d
this.b=e
this.c=f},
c8Z:function c8Z(d,e){this.a=d
this.b=e},
c9c(d,e){var w
A.fT8(d,e,!1)
A.qB(d.a,d.d,!0,!1)
w=B.a.i("")
if(w.length!==0)A.Aj(!0,!1,d.d,w)},
a6J(d,e){if(d==null)return!1
return A.by(d)===e.gcg()&&A.bG(d)===e.gcc()&&A.bQ(d)===e.gcs()},
hxc(d){var w=A.dh(d)*60+A.fY(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
h2s(d){if(A.dh(d)>=12)return!1
if(A.mo(d)===6||A.mo(d)===7)return!1
return!0},
c9g(d){var w=d.c?d.bQ():d
return w.cY(A.c0(A.by(w),A.bG(w),A.bQ(w),12,0,0,0,0))},
fNb(d,e){var w,v,u,t=d.gBV()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a6J(d.fx,e)&&d.fy>0.0001)return B.k.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bQ()
if(!C.c9g(w))return 0
v=A.c0(e.gcg(),e.gcc(),e.gcs(),12,0,0,0,0)
if(!e.cY(v))return t
if(!e.ca(w))return 0
u=B.o.an(v.by(w).a,1000)
if(u<=0)return t
return B.k.D(t*(B.o.D(B.o.an(e.by(w).a,1000),0,u)/u),0,t)},
fNa(d,e){var w,v,u,t,s,r,q,p=new A.S(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a6J(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bQ():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!B.d.b8(e,new C.c9b(s))&&C.c9g(t)){r=d.gBV()
v=r>0
if(v){q=new A.d1(s,d.a,r,B.fB,B.fb,"Clock-in daily earnings (local)",null,null,B.ck,p)
C.c9c(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a6J(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a6J(o,p)&&!C.c9g(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
c9b:function c9b(d){this.a=d},
hLN(d){var w,v,u=d.k4,t=u==null?null:B.a.i(u)
if(t!=null&&t.length!==0)return t
w=B.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=B.a.i(d.a)
if(B.a.t(v,"@"))return B.d.gL(v.split("@"))
return"Member"},
i1B(d,e,f,g,h,i){return A.hu(d,new C.apb(f,e,i,g,h,null),!0,null,x.H)},
h6G(d){var w,v,u=d.c?d.bQ():d,t=A.dh(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+A.bG(u)+"/"+A.bQ(u)+"/"+A.by(u)+" \xb7 "+w+":"+B.a.aT(B.o.u(A.fY(u)),2,"0")+" "+v},
hdK(d){var w=d.x
if(w===B.ds)return"Processing"
if(w===B.k0)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
hTX(d){var w=d.f,v=B.a.i(w==null?"":w),u=v.toLowerCase()
if(B.a.t(u,"clock-in daily earnings")||B.a.t(u,"clock-in earnings"))return"Clock-in completed"
if(B.a.t(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===B.fq)return"Deposit"
if(w===B.eK)return"Withdrawal"
return v.length!==0?v:w.b},
hLs(d){var w=d.d,v=w===B.fq||w===B.o5||w===B.fB||w===B.k1,u=d.x
if(u===B.ds)return w===B.eK?-d.c:0
if(u!==B.ck)return 0
w=d.c
return v?w:-w},
hUv(d,e){var w,v,u,t,s,r,q=A.B(d,x.o)
B.d.b1(q,new C.fq2())
w=A.V(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,A.L)(q),++t,v=r){s=q[t]
r=v-C.hLs(s)
if(r<0)r=0
w.n(0,s.a,new A.bmg(v,r))}return w},
apb:function apb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCt:function aCt(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
e7w:function e7w(d){this.a=d},
e8c:function e8c(d){this.a=d},
e8d:function e8d(d){this.a=d},
e8e:function e8e(d){this.a=d},
e7V:function e7V(d,e){this.a=d
this.b=e},
e7W:function e7W(){},
e7X:function e7X(d){this.a=d},
e7Y:function e7Y(){},
e7Z:function e7Z(d){this.a=d},
e8_:function e8_(d,e,f){this.a=d
this.b=e
this.c=f},
e80:function e80(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7Q:function e7Q(d,e){this.a=d
this.b=e},
e7x:function e7x(d,e,f){this.a=d
this.b=e
this.c=f},
e7R:function e7R(){},
e7S:function e7S(){},
e7T:function e7T(d){this.a=d},
e7U:function e7U(){},
e7B:function e7B(d,e){this.a=d
this.b=e},
e7C:function e7C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7K:function e7K(){},
e7H:function e7H(d){this.a=d},
e7I:function e7I(d,e){this.a=d
this.b=e},
e7J:function e7J(d,e){this.a=d
this.b=e},
e7L:function e7L(d){this.a=d},
e7M:function e7M(d,e,f){this.a=d
this.b=e
this.c=f},
e7N:function e7N(d){this.a=d},
e7P:function e7P(d){this.a=d},
e7O:function e7O(d){this.a=d},
e7D:function e7D(d){this.a=d},
e7E:function e7E(d,e,f){this.a=d
this.b=e
this.c=f},
e84:function e84(){},
e85:function e85(){},
e89:function e89(d){this.a=d},
e82:function e82(d){this.a=d},
e8a:function e8a(d){this.a=d},
e81:function e81(d){this.a=d},
e8b:function e8b(d){this.a=d},
e86:function e86(d){this.a=d},
e87:function e87(d){this.a=d},
e88:function e88(d){this.a=d},
e83:function e83(d){this.a=d},
e7A:function e7A(d){this.a=d},
e7z:function e7z(d){this.a=d},
e7y:function e7y(d){this.a=d},
e7G:function e7G(d,e){this.a=d
this.b=e},
e7F:function e7F(d,e){this.a=d
this.b=e},
azQ:function azQ(d,e,f,g,h,i,j,k,l,m){var _=this
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
df5:function df5(){},
df6:function df6(){},
df7:function df7(d,e,f){this.a=d
this.b=e
this.c=f},
df4:function df4(d){this.a=d},
df8:function df8(d,e){this.a=d
this.b=e},
df3:function df3(d){this.a=d},
azP:function azP(d,e,f,g,h,i,j,k,l,m){var _=this
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
bfF:function bfF(d,e){var _=this
_.f=_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
deZ:function deZ(d){this.a=d},
df_:function df_(d){this.a=d},
df0:function df0(d){this.a=d},
df1:function df1(){},
df2:function df2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
deY:function deY(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
deX:function deX(d){this.a=d},
b9r:function b9r(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
b9q:function b9q(d,e,f){this.b=d
this.d=e
this.a=f},
b9p:function b9p(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
azR:function azR(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
azS:function azS(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
dfp:function dfp(){},
dfq:function dfq(){},
dfr:function dfr(){},
dfb:function dfb(d){this.a=d},
dfa:function dfa(d,e){this.a=d
this.b=e},
df9:function df9(d,e){this.a=d
this.b=e},
dfm:function dfm(d,e){this.a=d
this.b=e},
dfo:function dfo(d,e){this.a=d
this.b=e},
dfn:function dfn(d,e){this.a=d
this.b=e},
dfl:function dfl(){},
dfk:function dfk(d){this.a=d},
dfj:function dfj(){},
dfe:function dfe(d){this.a=d},
dff:function dff(){},
dfg:function dfg(d){this.a=d},
dfh:function dfh(d){this.a=d},
dfd:function dfd(){},
dfi:function dfi(d){this.a=d},
dfc:function dfc(d){this.a=d},
b8S:function b8S(d){this.a=d},
fq2:function fq2(){},
bth:function bth(d,e){this.b=d
this.a=e},
aJj:function aJj(){},
bvd:function bvd(){},
hQx(d,e,f,g,h,i,j,k){var w,v=B.a.i(j.toLowerCase())
B.d.bn(d,new C.fjJ(v,g))
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
B.d.J(d,w)},
aNl(d){var w,v=J.a8(d),u=A.aN(v.h(d,"matchesTotal")),t=u==null?null:B.k.O(u)
if(t==null)t=1
v=A.aN(v.h(d,"matchesPlayed"))
w=v==null?null:B.k.O(v)
return B.o.D(t-(w==null?0:w),0,t)},
i0k(d,e){var w=A.T(e).k("a2<1>")
w=A.B(new A.a2(e,new C.fAp(B.a.i(d.toLowerCase())),w),w.k("H.E"))
return w},
ag3(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.L)(d),++v){u=d[v]
if(C.aNl(u)<=0){t=J.cE(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
hTb(d,e){var w,v,u,t=J.a8(d),s=t.h(d,"status")
if(!J.y(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.y(s==null?"":s,"complete"))return!1
if(C.aNl(d)<=0)return!1
w=B.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=B.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=B.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aNl(d)>0},
hTa(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a8(d),h=A.aN(i.h(d,"matchesTotal")),g=h==null?null:B.k.O(h)
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
k=J.y(o.h(0,u),!0)
j=l!=null&&J.y(o.h(0,l),!0)
if(k&&!j)return"Game "+v+" of "+g+" \u2014 waiting for opponent to join the room"
i=!k
if(i&&j)return"Game "+v+" of "+g+" \u2014 your opponent is in the room. Join now"
if(i&&!j)return"Game "+v+" of "+g+" \u2014 both players tap Join room to start"
return"Game "+v+" of "+g+" \u2014 match in progress"},
hQw(d,e){var w
C.ag3(e)
w=A.T(e).k("a2<1>")
w=A.B(new A.a2(e,new C.fjI(B.a.i(d.toLowerCase())),w),w.k("H.E"))
return w},
tG(d,e){var w,v,u
for(w=J.aX(d);w.C();){v=w.gU(w)
u=J.q(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
hN6(d,e,f){var w,v,u,t="fromName",s=J.a8(f),r=s.h(f,"fromEmail"),q=B.a.i(J.k(r==null?"":r).toLowerCase())
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
fSR(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase()),r=J.a8(d),q=r.h(d,"fromEmail"),p=B.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=B.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.hN6(x.f.b(u)?A.a1(u,r,q):A.V(r,q),v,d)
if((t.length===0||B.a.t(t,"@"))&&f!=null){t=J.q(f,v)
if(t==null)t=""}if(t.length===0||B.a.t(t,"@"))return"Opponent"
return t},
bAs(){var w=0,v=A.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bAs=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bAs)
case 7:r=e
q=A.aU(J.q(r.a,"all_users"))
if(q==null||q.length===0){k=x.N
u=A.V(k,k)
w=1
break}p=B.R.aG(0,q,null)
if(!x.j.b(p)){k=x.N
u=A.V(k,k)
w=1
break}k=x.N
o=A.V(k,k)
for(k=J.aX(p),j=x.f;k.C();){n=k.gU(k)
if(!j.b(n))continue
i=J.q(n,"email")
m=B.a.i(J.k(i==null?"":i).toLowerCase())
i=J.q(n,"username")
l=B.a.i(J.k(i==null?"":i))
if(J.ac(m)!==0&&J.ac(l)!==0)J.aG(o,m,l)}u=o
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
return A.i($async$bAs,v)},
bzx(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bzx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return A.b(C.bAs(),$async$bzx)
case 3:u=t.fSR(s,r,g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzx,v)},
Kf(d,e,f){var w=0,v=A.j(x.h),u,t,s,r,q,p
var $async$Kf=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(d)
p=$.hbi.h(0,q)
if(p!=null){t=new A.S(Date.now(),0,!1).by(p)
t=t.a>A.dB(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.hbi.n(0,q,new A.S(Date.now(),0,!1))
w=5
return A.b(A.PY(B.c6,q),$async$Kf)
case 5:case 4:s=$.hbh.h(0,q)
if(s==null){u=C.tG(e,q)
w=1
break}r=C.tG(A.bzD(e,A.a([s],x._)),q)
if(r!=null)A.fVa(e,r)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Kf,v)},
i0x(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.L)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new A.S(Date.now(),0,!1).ac())
return}}},
hJP(d,e){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
p=q.h(d,"fromEmail")
w=B.a.i(J.k(p==null?"":p).toLowerCase())
p=q.h(d,"toEmail")
v=B.a.i(J.k(p==null?"":p).toLowerCase())
q=q.h(d,"fromName")
u=J.k(q==null?w:q)
switch(o){case"tic_tac_go":q=x.N
return A.E(["ttt",A.c2(9,"",!1,q),"turnEmail",w,"playerXEmail",w,"playerXName",u,"playerOEmail",v,"playerOName",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],q,x.z)
case"connect_four_pro":t=J.e1(6,x.L)
for(q=x.S,s=0;s<6;++s)t[s]=A.c2(7,0,!1,q)
return A.E(["c4",t,"c4Turn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
case"checkers_deluxe":t=J.e1(8,x.L)
for(q=x.S,r=0;r<8;++r)t[r]=A.ip(8,new C.f9h(r),!0,q)
return A.E(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return A.E(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
hQv(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.L)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new A.S(Date.now(),0,!1).ac())
r=C.hJP(u,f)
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
i0v(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
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
fV9(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.L)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",A.a1(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new A.S(Date.now(),0,!1).ac())
return}}},
fzd(d){var w=0,v=A.j(x.gw),u,t,s,r,q
var $async$fzd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.ag3(d)
t=$.fSd
if(t==null)s=$.fSd=A.PY(B.c6,null).f9(new C.fze())
else s=t
w=3
return A.b(s,$async$fzd)
case 3:r=f
if(r==null){u=A.bl(new A.J(d,new C.fzf(),A.T(d).k("J<1,@>")),!0,x.P)
w=1
break}q=A.bzD(d,r)
B.d.a8(d)
B.d.v(d,q)
u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fzd,v)},
ag4(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$ag4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.ag3(d)
t=A.T(d).k("J<1,a4<n,@>>")
t=A.B(new A.J(d,new C.fx9(),t),t.k("ai.E"))
w=3
return A.b(A.PY(t,null),$async$ag4)
case 3:s=f
if(s==null){u=!1
w=1
break}r=A.bzD(d,s)
B.d.a8(d)
B.d.v(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ag4,v)},
aOe(d,e,f){var w=0,v=A.j(x.y),u,t,s,r
var $async$aOe=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:C.fV9(d,e,f)
t=C.tG(d,e)
if(t==null){u=!1
w=1
break}w=3
return A.b(A.PY(A.a([A.a1(t,x.N,x.z)],x._),e),$async$aOe)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.tG(s,e)
if(r!=null)A.fVa(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aOe,v)},
hYb(d,e,f){var w
C.fV9(d,e,f)
w=$.fS1.h(0,e)
if(w!=null)w.a9(0)
$.fS1.n(0,e,A.cM(B.lz,new C.fxa(e,d)))},
fMT(d,e){return new C.aYt(!0,d,"NGMY",B.a.i(e.toLowerCase()),null,!0)},
fjJ:function fjJ(d,e){this.a=d
this.b=e},
fAp:function fAp(d){this.a=d},
fjI:function fjI(d){this.a=d},
f9h:function f9h(d){this.a=d},
fze:function fze(){},
fzf:function fzf(){},
fx9:function fx9(){},
fxa:function fxa(d,e){this.a=d
this.b=e},
aYt:function aYt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
i1_(d,e,f){return A.bW(B.K,null,new C.fBu(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
fBu:function fBu(d,e){this.a=d
this.b=e},
Zu:function Zu(d,e,f){this.c=d
this.d=e
this.a=f},
aCg:function aCg(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
e1M:function e1M(d){this.a=d},
e1P:function e1P(d){this.a=d},
e1Q:function e1Q(d){this.a=d},
e1O:function e1O(d){this.a=d},
e1R:function e1R(d){this.a=d},
e1S:function e1S(d,e){this.a=d
this.b=e},
e1N:function e1N(d,e){this.a=d
this.b=e},
hWI(d){var w,v,u,t=B.a.i(d)
if(t.length===0)return B.i9
w=t.toLowerCase()
v=A.af("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return B.i9
v=Date.now()
u=C.hMq(w,new A.S(v,0,!1))
v=x.N
return A.a([new A.kj("calendar",A.E(["title",C.hMp(t,w),"start",u.ac(),"end",u.bN(36e8).ac(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
hMp(d,e){var w,v,u,t,s,r=A.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cC(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return B.a.i(w==null?"":w)}u=A.af("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cC(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hc3(B.a.i(t))}s=A.af("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cC(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hc3(B.a.i(t))}if(B.a.t(e,"meeting"))return"Meeting"
if(B.a.t(e,"appointment"))return"Appointment"
return"NGMY Event"},
hc3(d){var w
if(d.length===0)return d
w=B.a.fv(d,A.af("\\s+",!0,!1,!1,!1))
return new A.J(w,new C.fiU(),A.T(w).k("J<1,n>")).aH(0," ")},
hMq(d,e){var w,v,u,t,s,r,q,p,o=A.c0(A.by(e),A.bG(e),A.bQ(e),0,0,0,0,0)
if(B.a.t(d,"tomorrow"))o=o.bN(864e8)
else if(!B.a.t(d,"today"))for(w=D.aC4.gdL(D.aC4),w=w.gah(w);w.C();){v=w.gU(w)
u=v.a
if(A.dr(d,u,0)){t=C.hLr(o,v.b)
o=t
break}}s=A.af("\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cC(d)
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
hLr(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(A.mo(w)===e){u=!0
if(v<=0){t=d.bN(36e8)
s=w.a
if(s>=t.gbo())u=s===t.gbo()&&w.b<t.gcv()}}else u=!1
if(u)return w
w=w.bN(r)}return d.bN(r)},
fiU:function fiU(){},
hWJ(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=B.a.i(d)
if(j.length===0)return B.i9
w=j.toLowerCase()
if(B.a.t(w,k))v=k
else v=B.a.t(w,"imessage")||B.a.t(w,"i message")?"sms":l
u=A.af("(?:saying|say|message|text|tell(?:ing)?)\\s+(.+)$",!1,!1,!1,!1).cC(j)
if(u!=null){t=u.b[1]
s=t==null?l:B.a.i(t)
if(s==null)s=""
t=A.af("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
s=B.a.i(A.aJ(s,t,""))
t=s.length
r=t>=2&&t<500?s:l}else r=l
q=C.hIE(w,j)
if(q==null||q.length===0)return B.i9
t=A.af("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=A.af("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return A.a([new A.kj("call",A.E(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=A.E(["name",q],t,t)
if(r!=null)m.n(0,"body",r)
return A.a([new A.kj(n,m)],x.Z)}if(p){t=x.N
return A.a([new A.kj("call",A.E(["name",q],t,t))],x.Z)}return B.i9},
hIE(d,e){var w,v,u,t,s,r,q=[A.af("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),A.af("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),A.af("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
for(w=0;w<3;++w){v=q[w].cC(d)
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
if(u)return C.hPQ(t)}r=A.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cC(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return B.a.i(u==null?"":u)}return null},
hPQ(d){var w=B.a.fv(d,A.af("\\s+",!0,!1,!1,!1))
return new A.J(w,new C.fiT(),A.T(w).k("J<1,n>")).aH(0," ")},
fiT:function fiT(){},
hfX(d){var w=new A.J(d,new C.fzv(),A.T(d).k("J<1,a4<n,@>>")).bZ(0,new C.fzw())
w=A.B(w,w.$ti.k("H.E"))
return w},
fzv:function fzv(){},
fzw:function fzw(){},
hWM(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return B.i9
w=B.a.i(d)
if(w.length===0)return B.i9
v=w.toLowerCase()
if(!(B.a.t(v,"send email")||B.a.t(v,"send an email")||B.a.t(v,"send a message to")||B.a.t(v,"email ")||B.a.t(v,"write an email")||B.a.t(v,"write email")))return B.i9
u=A.af("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cC(w)
if(u==null)return B.i9
t=u.b[0]
t.toString
s=B.a.i(t)
r=A.af("(?:subject|title)\\s*[:\\-]\\s*(.+)$",!1,!1,!1,!1).cC(w)
if(r!=null){t=r.b[1]
t.toString
q=B.a.i(t)}else q="Message from NGMY"
p=A.af("(?:saying|that says|with message|message:|body:|write:|text:)\\s*(.+)$",!1,!1,!1,!1).cC(w)
if(p!=null){t=p.b[1]
t.toString
o=B.a.i(t)}else o=""
t=x.N
t=A.V(t,t)
t.n(0,"to",s)
t.n(0,"subject",q)
if(o.length!==0)t.n(0,"body",o)
return A.a([new A.kj("send_email",t)],x.Z)},
hVV(d,e){var w
if(e)return d
w=J.dH(d,new C.ftq())
w=A.B(w,w.$ti.k("H.E"))
return w},
ftq:function ftq(){},
hY8(d){switch(d){case"blackjack_vegas":return D.dz_
case"roulette_euro":return D.dyK
case"slots_jackpot":return D.dyR
case"poker_texas":return D.dyU
case"chess_royale":return D.dyL
case"connect_four_pro":return D.dyM
case"domino_block":return D.dyO
case"plinko_prizes":return D.dyW
case"spin_wheel":return D.dyT
case"baccarat_punto":return D.dyN
case"craps_table":return D.dyV
case"casino_war":return D.dyP
case"bingo_live":return D.dyS
case"solitaire_klondike":return D.dyZ
case"backgammon_pro":return D.dyJ
case"billiards_snooker":return D.dyX
case"profit_solve":return D.dyY
default:return D.dyQ}},
fx0(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=A.m(8)
v=A.I(B.aM,B.r,1.5)
u=A.a([new A.ad(0,B.G,B.w.j(0.35),B.ej,6)],x.V)
return A.p(p,A.av(A.W(B.md,B.c.j(0.5),p,p,p,23.400000000000002),p,p,p),B.f,p,p,new A.o(p,p,v,w,u,D.bRm,B.n),p,74,p,p,p,p,p,52)}t=B.o.D(d,1,13)
s=t===1||t>=10||B.o.F(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][B.o.F(t,4)]
q=s?B.bL:B.M
w=A.m(8)
v=A.I(B.aL,B.r,1)
u=A.a([new A.ad(0,B.G,B.w.j(0.28),B.ej,6)],x.V)
return A.p(p,A.v(A.a([new A.C(D.bso,A.d(D.coc[t-1]+"\n"+r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,B.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),B.b3,A.av(A.d(r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),B.b3],x.p),B.F,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(B.hS,p,v,w,u,p,B.n),p,74,p,p,p,p,p,52)},
hZc(d,e){var w,v=null,u=A.m(18),t=A.I(B.aM,B.r,3),s=A.a([new A.ad(0,B.G,B.aE.j(0.5),B.J,20)],x.V),r=A.T(e).k("J<1,hh>")
r=A.B(new A.J(e,new C.fyX(),r),r.k("ai.E"))
w=x.p
return A.v(A.a([A.p(v,A.v(A.a([D.f6F,B.ac,A.A(r,B.m,v,B.ba,B.j,0,v,v)],w),B.m,v,B.e,B.j,0,B.p),B.f,v,v,new A.o(v,v,t,u,s,D.bRI,B.n),v,v,v,v,I.ag9,v,v,v),B.az,A.dp(B.am0,D.f7i,d,A.bk(B.aM,v,v,v,B.dv,v,Ai.XZ,v,v,v,v,v))],w),B.m,v,B.e,B.j,0,B.p)},
oU:function oU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
boh:function boh(d,e){this.b=d
this.a=e},
fyX:function fyX(){},
hxN(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e1(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=A.c2(8,0,!1,w)
u=A.c2(9,"",!1,p)
t=x.t
s=A.a([],t)
r=A.a([],t)
t=A.a([0,0,0],t)
q=J.e1(6,o)
for(v=0;v<6;++v)q[v]=A.c2(7,0,!1,w)
return new C.apx(A.V(p,x.z),n,u,s,r,t,q,new A.ar(B.as,$.aw()))},
hRb(d,e,f,g,h){var w=new C.fky(f,h)
switch(d){case"checkers_deluxe":return C.hHj(h,g,e,w)
case"tic_tac_go":return C.hQ0(h,g,e,w)
case"blackjack_vegas":return C.hGF(h,g,e,new C.fks(w))
case"roulette_euro":return C.hOk(h,g,e,new C.fkt(w))
case"slots_jackpot":return C.hP8(h,g,e,new C.fku(w))
case"billiards_snooker":return C.hN8(h,g,e,new C.fkv(w))
case"connect_four_pro":return C.hHK(h,g,e,w)
case"profit_solve":return C.hNb(h,g,e,new C.fkw(w))
default:return C.hHg(d,h,g,e,new C.fkx(w))}},
hHj(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vZ,B.L,w,w),u=A.m(12),t=A.I(D.VT,B.r,8),s=A.a([new A.ad(0,B.G,B.w.j(0.4),B.J,16)],x.V)
return A.v(A.a([new A.C(B.eO,v,w),A.D(A.av(new A.fF(1,A.p(w,A.bv(A.m(6),A.ib(!0,w,w,B.y,D.eIl,new C.f6D(d,e,f,g),64,w,B.dQ,B.ah,!1),B.aq),B.f,w,w,new A.o(w,w,t,u,s,w,B.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hQ0(d,e,f,g){var w=null
return A.v(A.a([new A.C(B.eO,A.d(d.c,w,w,w,w,w,w,D.vZ,B.L,w,w),w),A.D(A.av(new A.fF(1,A.cm(new C.fj3(d,e,f,g)),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hGF(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.vZ,B.L,v,v),t=x.p,s=A.a([],t),r=d.CW,q=d.ch
if(r)B.d.v(s,new A.J(q,new C.f63(),A.T(q).k("J<1,r>")))
else B.d.v(s,A.a([C.fx0(q[0],!1),B.bp,C.fx0(0,!0)],t))
s=A.A(s,B.m,v,B.ba,B.j,0,v,v)
r=A.d("Total: "+d.a2g(d.ay),v,v,v,v,v,v,D.f1X,v,v,v)
q=d.ay
w=A.T(q).k("J<1,r>")
q=A.B(new A.J(q,new C.f64(),w),w.k("ai.E"))
q=A.c_(B.fM,q,B.bt,6,6)
return A.v(A.a([new A.C(B.eO,u,v),D.fdf,B.ao,s,B.az,D.fkl,r,B.ao,q,B.b3,A.A(A.a([A.D(A.bJ(D.f7J,d.CW?v:new C.f65(d,e,f,g),v),1),B.ab,A.D(A.bJ(D.fmD,new C.f66(d,e,f,g),v),1)],t),B.m,v,B.e,B.j,0,v,v)],t),B.m,v,B.e,B.j,0,B.p)},
hOk(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vZ,B.L,w,w),u=d.cx,t=A.a([new A.ad(0,B.G,B.w.j(0.45),B.cy,16)],x.V)
t=A.a([new A.C(B.eO,v,w),A.p(w,A.b3(w,w,w,new C.boh(u,w),B.au),B.f,w,w,new A.o(w,w,w,w,t,w,B.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new A.C(B.ke,A.d("Result: "+A.t(v),w,w,w,w,w,w,D.eRd,w,w,w),w))
t.push(B.ac)
t.push(A.c_(B.fM,A.ip(6,new C.fgg(d,e,f,g),!0,x.l),B.bt,6,6))
return A.v(t,B.m,w,B.e,B.j,0,B.p)},
hP8(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vZ,B.L,w,w),u=d.db,t=A.T(u).k("J<1,n>")
u=A.B(new A.J(u,new C.fia(),t),t.k("ai.E"))
return A.v(A.a([new A.C(B.eO,v,w),C.hZc(new C.fib(d,e,f,g),u)],x.p),B.m,w,B.e,B.j,0,B.p)},
hN8(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vZ,B.L,w,w),u=A.m(20),t=A.I(B.fv,B.r,12),s=x.V,r=A.a([new A.ad(0,B.G,B.w.j(0.45),B.dn,18)],s),q=x.p
return A.v(A.a([new A.C(B.eO,v,w),A.D(A.p(w,new A.an(B.W,w,B.aa,B.q,A.a([A.ao(w,A.p(w,w,B.f,w,w,D.aXt,w,18,w,w,w,w,w,18),w,w,24,w,24,w),A.ao(28,A.p(w,w,B.f,w,w,B.a9J,w,14,w,w,w,w,w,14),w,w,w,32,w,w),A.av(A.eA(B.A,d.dx,A.p(w,w,B.f,w,w,new A.o(B.aM,w,w,A.m(2),A.a([new A.ad(0,B.G,B.w.j(0.3),B.J,4)],s),w,B.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),B.f,w,w,new A.o(w,w,t,u,r,D.e7r,B.n),w,w,w,B.eQ,w,w,w,w),1),A.kS(B.bn,w,w,1,0,new C.ff0(d,f),d.dy),A.bJ(D.fck,new C.ff1(d,e,g,f),w)],q),B.m,w,B.e,B.j,0,B.p)},
hHK(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.vZ,B.L,v,v),t=x.l,s=J.e1(7,t)
for(w=0;w<7;++w)s[w]=new A.bE(1,B.bi,A.aE(v,A.v(A.ip(6,new C.f73(d,w),!0,t),B.m,v,B.lK,B.j,0,B.p),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f74(d,w,e,f,g),v,v,v,v,v,v,!1,B.a8),v)
return A.v(A.a([new A.C(B.eO,u,v),A.D(A.av(new A.fF(1.1666666666666667,A.A(s,B.dE,v,B.e,B.j,0,v,v),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
hNb(d,e,f,g){var w=null
return A.v(A.a([new A.C(B.eO,A.d(d.c,w,w,w,w,w,w,D.vZ,B.L,w,w),w),A.d(""+d.a+"/"+d.b,w,w,w,w,w,w,B.ks,w,w,w),A.d(d.fy,w,w,w,w,w,w,D.aOx,B.L,w,w),A.aL(w,B.T,!1,w,!0,B.q,w,A.aM(),d.id,w,w,w,w,w,2,D.bNw,B.y,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,B.dM,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.ffd(d,e,g,f),w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,B.dk,!0,B.a5,w,B.am,w,w,w,w),A.bJ(D.faZ,new C.ffe(d,e,g,f),w)],x.p),B.m,w,B.e,B.j,0,B.p)},
hHg(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gjO(),k=e.d
k=k==null?n:k.c
w=C.hY8(d)
v=D.aBU.h(0,d)
if(v==null)v=d
m=A.d(m,n,n,n,n,n,n,B.mu,B.L,n,n)
u=A.m(22)
t=w.a
s=w.b
r=A.I(s.j(0.5),B.r,2)
q=A.a([new A.ad(0,B.G,w.c.j(0.35),B.eT,24)],x.V)
p=A.d(w.e,n,n,n,n,n,n,X.SC,n,n,n)
o=A.d(v,n,n,n,n,n,n,B.oS,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+A.t(k)+" at the table"
k=x.p
q=A.D(A.av(A.p(n,A.v(A.a([p,B.S,o,B.P,A.d(l,n,n,n,n,n,n,A.l(n,n,B.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),B.L,n,n),B.d5,A.W(w.f,s.j(0.85),n,n,n,48)],k),B.m,n,B.ba,B.j,0,B.p),B.f,n,n,new A.o(n,n,r,u,q,new A.a7(B.b1,B.b6,B.x,t,n,n),B.n),n,n,n,B.eQ,B.a9,n,n,1/0),n,n,n),1)
return A.v(A.a([m,B.ac,q,B.P,new A.a6(1/0,n,A.bJ(D.flN,new C.f6x(f,e,g,h),A.bk(s,n,n,n,B.d.gL(t).j2()>0.4?B.w:B.c,n,B.cf,n,n,n,n,n)),n)],k),B.m,n,B.e,B.j,0,B.p)},
E5:function E5(d,e){this.a=d
this.b=e},
apx:function apx(d,e,f,g,h,i,j,k){var _=this
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
caK:function caK(){},
caL:function caL(){},
caJ:function caJ(){},
caM:function caM(){},
caI:function caI(){},
caO:function caO(){},
caP:function caP(){},
caH:function caH(d){this.a=d},
caN:function caN(){},
caG:function caG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fky:function fky(d,e){this.a=d
this.b=e},
fks:function fks(d){this.a=d},
fkt:function fkt(d){this.a=d},
fku:function fku(d){this.a=d},
fkv:function fkv(d){this.a=d},
fkw:function fkw(d){this.a=d},
fkx:function fkx(d){this.a=d},
f6D:function f6D(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6C:function f6C(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fj3:function fj3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fj2:function fj2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fj1:function fj1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f63:function f63(){},
f64:function f64(){},
f65:function f65(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f66:function f66(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fgg:function fgg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fgf:function fgf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fia:function fia(){},
fib:function fib(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ff0:function ff0(d,e){this.a=d
this.b=e},
ff1:function ff1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f74:function f74(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f73:function f73(d,e){this.a=d
this.b=e},
ffd:function ffd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ffe:function ffe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6x:function f6x(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hTZ(d){var w,v=A.T(d).k("a2<1>")
v=A.p3(new A.a2(d,new C.fp2(),v),120,v.k("H.E"))
w=A.cD(v,new C.fp3(),A.a3(v).k("H.E"),x.N).aH(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fp2:function fp2(){},
fp3:function fp3(){},
agf(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
aqt:function aqt(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aD4:function aD4(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
ezI:function ezI(){},
aKR:function aKR(){},
hvL(){var w=$.HR
if(w<=0)return;--w
$.HR=w
if(w===0){w=$.h1L
if(w!=null)w.$0()}},
c6f(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
aoa(d){var w=0,v=A.j(x.H),u,t
var $async$aoa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.fMO.J(0,t)
w=4
return A.b(A.aA(),$async$aoa)
case 4:w=3
return A.b(f.ar("Bool","ngmy_game_free_play_used_"+B.a.i(t.toLowerCase()),!0),$async$aoa)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aoa,v)},
ao9(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$ao9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(C.c6f(d)){u=!0
w=1
break}t=B.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.fMO.t(0,t)){u=!1
w=1
break}w=3
return A.b(A.aA(),$async$ao9)
case 3:s=f
r=B.a.i(t.toLowerCase())
r=A.ka(J.q(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ao9,v)},
Un(){var w=0,v=A.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Un=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$Un)
case 7:r=e
q=A.aU(J.q(r.a,"ngmy_helper_ai_usage_v1"))
if(q==null||B.a.i(q).length===0){u=A.V(x.N,x.z)
w=1
break}p=B.R.aG(0,q,null)
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
return A.i($async$Un,v)},
aYL(d){return C.hvY(d)},
hvY(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aYL=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.aA(),$async$aYL)
case 6:s=f
w=7
return A.b(s.ar("String","ngmy_helper_ai_usage_v1",B.R.ao(d,null)),$async$aYL)
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
return A.i($async$aYL,v)},
aYJ(d,e){var w,v,u,t,s=J.q(d,B.a.i(e.toLowerCase()))
if(!x.f.b(s))return new A.acR(0,new A.S(Date.now(),0,!1))
w=J.a8(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=A.bi(u==null?"":u)
if(t==null)t=new A.S(Date.now(),0,!1)
return new A.acR(typeof v=="number"?B.o.D(B.k.O(v),0,999999):0,t)},
aYK(d,e){if(B.o.an(e.by(d.b).a,36e8)>=24)return new A.acR(0,e)
return d},
c6M(d,e){var w=0,v=A.j(x.S),u,t,s
var $async$c6M=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return A.b(C.Un(),$async$c6M)
case 3:t=g
s=Date.now()
u=B.o.D(e-C.aYK(C.aYJ(t,d),new A.S(s,0,!1)).a,0,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6M,v)},
c6N(d,e){var w=0,v=A.j(x.cJ),u,t,s,r
var $async$c6N=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return A.b(C.Un(),$async$c6N)
case 3:t=g
s=Date.now()
r=C.aYK(C.aYJ(t,d),new A.S(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bN(864e8)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6N,v)},
hvZ(d){var w,v,u,t=d.a,s=B.o.an(t,1e6)
if(s<=0)return"0s"
w=B.o.an(t,36e8)
v=B.o.an(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+B.a.aT(B.o.u(v),2,"0")+"m "+B.a.aT(B.o.u(u),2,"0")+"s"
if(v>0)return""+v+"m "+B.a.aT(B.o.u(u),2,"0")+"s"
return""+u+"s"},
aYM(d){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aYM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return A.b(C.Un(),$async$aYM)
case 3:t=p.aYK(o.aYJ(f,d),new A.S(Date.now(),0,!1))
w=4
return A.b(A.aA(),$async$aYM)
case 4:s=f
r=B.a.i(d.toLowerCase())
q=t.b.a5().ac()
u=A.ka(J.q(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYM,v)},
aow(d){var w=0,v=A.j(x.H),u,t,s,r
var $async$aow=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return A.b(C.Un(),$async$aow)
case 3:t=s.aYK(r.aYJ(f,d),new A.S(Date.now(),0,!1))
w=5
return A.b(A.aA(),$async$aow)
case 5:w=4
return A.b(f.ar("Bool","ngmy_helper_3left_"+B.a.i(d.toLowerCase())+"_"+t.b.a5().ac(),!0),$async$aow)
case 4:case 1:return A.h(u,v)}})
return A.i($async$aow,v)},
aox(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aox=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=B.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return A.b(C.Un(),$async$aox)
case 3:s=g
r=Date.now()
q=C.aYK(C.aYJ(s,d),new A.S(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aG(s,t,A.E(["count",r+1,"windowStart",q.b.a5().ac()],x.N,x.K))
w=4
return A.b(C.aYL(s),$async$aox)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aox,v)},
afS(d,e,a0){var w=0,v=A.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$afS=A.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new A.fc("")
if(!d.d){p=!0
if(!C.hfP(a0))if(!C.hfO(a0)){p=A.af("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.hfP(a0)?3:4
break
case 3:o=C.hXO(a0)
w=o!=null?5:6
break
case 5:w=7
return A.b(C.c_m(e,o),$async$afS)
case 7:n=a2
p=J.a8(n)
if(p.gcl(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.h0d(o)+":\n"
m.a+=l
for(p=p.gah(n);p.C();){m=p.gU(p)
l=h
k="- "+m.gUB()+"\n"
l.a+=k
m=m.f
if(m!=null&&B.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=A.af("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return A.b(A.Rg("text/plain"),$async$afS)
case 14:r=a2
p=r
if(p==null)p=null
else p=B.a.i(p.a)
q=p==null?"":p
if(J.ac(q)!==0){p=h
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
case 13:case 9:w=C.hfO(a0)?15:16
break
case 15:p=h
f=C
w=17
return A.b(C.a6m(e),$async$afS)
case 17:m=f.h1S(a2)+"\n"
p.a+=m
case 16:p=A.af("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return A.b(C.Tq(e),$async$afS)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cx(i)){p=h
m=C.h0e(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=B.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afS,v)},
hxk(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
c9l(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$c9l=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=A.h2x(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.f0("ngmy_local_growth_income_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bG),$async$c9l)
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
return A.i($async$c9l,v)},
ape(d){var w=0,v=A.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$ape=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=B.a.i(d)
if(J.ac(k)===0){u=null
w=1
break}t=4
w=7
return A.b(A.f0("ngmy_local_growth_income_stash_v1_"+B.a.i(k),null,!1,B.bG),$async$ape)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.q(r,"payload")
q=J.k(n==null?"":n)
if(J.ac(q)===0){u=null
w=1
break}n=J.q(r,"ownerEmail")
p=B.a.i(J.k(n==null?"":n))
n=B.c4.c8(0,B.cB.aI(q))
m=J.y(J.q(r,"live"),!0)
u=new A.aEt(m,p,n)
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
return A.i($async$ape,v)},
aZQ(d){var w=0,v=A.j(x.bY),u,t,s,r,q
var $async$aZQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
w=C.hxk(q)?3:4
break
case 3:w=5
return A.b(C.c9l(q),$async$aZQ)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.ape(t)
w=1
break
case 4:if(B.a.a0(q,"NGMYLOCALSYNC1|")){u=C.ape(B.a.i(B.a.b_(q,15)))
w=1
break}w=B.a.a0(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return A.b(C.ape(B.a.i(B.a.b_(q,15))),$async$aZQ)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new A.aEt(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZQ,v)},
h2L(d){var w=d.bL
if(w>=0)return w
return 1},
ag2(d,e,f){var w=0,v=A.j(x.H),u,t
var $async$ag2=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return A.b(A.aOq(d,e),$async$ag2)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return A.b(A.G5(d,null,null,!1,!0,""),$async$ag2)
case 5:w=4
return A.b(t.$1(h),$async$ag2)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ag2,v)},
hWH(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=B.a.i(a2)
if(a1.length===0)return B.i9
w=a1.toLowerCase()
v=A.af("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=A.af("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cC(w)
if(!u&&t==null)return B.i9
s=new A.S(Date.now(),0,!1)
r=A.df()
q=A.df()
p=C.hMo(w)
if(p!=null){v=p.a
r.b=s.bN(v)
q.b=C.haV(a1,w)
if(J.y(q.bd(),"Wake up")&&B.o.an(v,e)<=180)q.b="Reminder \u2014 "+B.o.an(v,e)+" min"}else{if(t!=null){v=A.af("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=B.a.e9(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.haW(v[2],v[4],v[3])
o=v[3]
m=A.c7(o==null?"":o,null)
if(m==null)m=0
l=A.c0(A.by(s),A.bG(s),A.bQ(s),0,0,0,0,0)
if(B.a.t(w,d))l=l.bN(a0)
r.b=A.c0(A.by(l),A.bG(l),A.bQ(l),n,m,0,0,0).bN(-36e8)
if(r.bd().cY(s.bN(e)))r.b=J.cf(r.bd(),B.nG)
v=C.hQu(v[1])
k=B.o.F(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+B.a.aT(B.o.u(m),2,"0")+" "+j)}else{l=A.c0(A.by(s),A.bG(s),A.bQ(s),0,0,0,0,0)
v=B.a.t(w,d)
if(v)l=l.bN(a0)
i=A.af("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cC(w)
if(i!=null){o=i.b
h=C.haW(o[1],o[3],o[2])
o=o[2]
g=A.c7(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=A.c0(A.by(l),A.bG(l),A.bQ(l),h,g,0,0,0)
r.b=f.cY(s.bN(3e7))&&!v?f.bN(a0):f
q.b=C.haV(a1,w)}}v=x.N
return A.a([new A.kj("alarm",A.E(["title",q.bd(),"start",r.bd().ac(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
hMo(d){var w,v,u,t,s,r,q=[A.af("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.af("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.af("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),A.af("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
for(w=0;w<4;++w){v=q[w].cC(d)
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
hQu(d){var w=d==null?"work":d,v=w.toLowerCase()
if(B.a.t(v,"meeting")||B.a.t(v,"appointment"))return"Meeting"
if(B.a.t(v,"class")||B.a.t(v,"school"))return"Class"
if(B.a.t(v,"shift"))return"Shift"
return"Work"},
haW(d,e,f){var w,v=A.c7(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return B.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
haV(d,e){var w,v,u,t
if(B.a.t(e,"work"))return"Wake up \u2014 Work"
if(B.a.t(e,"school")||B.a.t(e,"class"))return"Wake up \u2014 School"
w=A.af("\\btimer\\b",!1,!1,!1,!1)
if(w.b.test(e))return"Timer"
v=A.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cC(d)
if(v!=null){w=v.b
u=w[1]
w=u==null?w[2]:u
t=B.a.i(w==null?"":w)
w=t.length
if(w>=3&&w<=60)return t}return"Wake up"},
hxG(d){var w,v,u,t,s=J.a8(d)
if(s.gam(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.ki(d,80),v=w.$ti,w=new A.bV(w,w.gM(0),v.k("bV<ai.E>")),v=v.k("ai.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gM(d)>80?u+("\u2026 and "+(s.gM(d)-80)+" more\n"):u
return B.a.i(s.charCodeAt(0)==0?s:s)}},D,H,Ae,I,G,Af,W,F,X,Q,Ag,Y,Ah,Z,Ai,Aj,Ak,A_,Al,A0,K
J=c[1]
A=c[0]
B=c[2]
A1=c[188]
L=c[32]
R=c[180]
A2=c[191]
E=c[172]
M=c[182]
A3=c[104]
N=c[119]
A4=c[178]
S=c[35]
O=c[73]
T=c[79]
A5=c[80]
P=c[146]
A6=c[183]
U=c[174]
A7=c[186]
A8=c[184]
A9=c[185]
Aa=c[181]
Ab=c[177]
Ac=c[65]
V=c[162]
Ad=c[100]
C=a.updateHolder(c[5],C)
D=c[171]
H=c[27]
Ae=c[64]
I=c[176]
G=c[125]
Af=c[187]
W=c[28]
F=c[175]
X=c[133]
Q=c[98]
Ag=c[173]
Y=c[111]
Ah=c[190]
Z=c[179]
Ai=c[192]
Aj=c[127]
Ak=c[189]
A_=c[72]
Al=c[123]
A0=c[56]
K=c[54]
C.bpr.prototype={
oi(d,e){return this.a.$2(d,e)}}
C.EH.prototype={
T(){return new C.aGw(this.$ti.k("aGw<EH.T,EH.S>"))}}
C.aGw.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a
v=w.f
w=new A.hB(B.Ew,v,null,null,w.$ti.k("hB<1>"))
u.e=w
u.V7()},
br(d){var w,v=this
v.bE(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aLC()
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hB(B.Ew,w.b,w.c,w.d,w.$ti)}v.V7()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&A.c()
return v.mR(d,w)},
q(){this.aLC()
this.a2()},
V7(){var w,v=this
v.d=v.a.c.lf(new C.eVD(v),new C.eVE(v),new C.eVF(v))
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hB(B.WE,w.b,w.c,w.d,w.$ti)},
aLC(){var w=this.d
if(w!=null){w.a9(0)
this.d=null}}}
C.au8.prototype={
mR(d,e){return this.e.$2(d,e)}}
C.ajO.prototype={
T(){return C.hEd()},
bp(){return this.r.$0()}}
C.qw.prototype={}
C.ayJ.prototype={
abB(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$abB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.h1j(r)
if(r.x==null||r.c6.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.h1l(s),$async$abB)
case 3:case 1:return A.h(u,v)}})
return A.i($async$abB,v)},
Wv(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.apc(t.a.c),$async$Wv)
case 3:if(e!=null&&t.c!=null)t.a.bp()
r=!C.c6f(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return A.b(C.ao9(t.a.c),$async$Wv)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.m(new C.d75(t,s))
if(!s)t.abB()
case 1:return A.h(u,v)}})
return A.i($async$Wv,v)},
abc(){var w=0,v=A.j(x.H),u,t=this,s
var $async$abc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.bAs(),$async$abc)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.d7g(t,s))
case 1:return A.h(u,v)}})
return A.i($async$abc,v)},
a_(){var w,v,u=this
u.brr()
$.t5=$.t5+1
w=u.a
$.bAx=w.c.a
w=w.d.b5
v=A.T(w).k("J<1,a4<n,@>>")
w=A.B(new A.J(w,new C.d7y(),v),v.k("ai.E"))
u.f=w
u.abc()
u.J1()
u.Wv()
u.e=A.dC(B.nD,new C.d7z(u))},
J1(){var w=0,v=A.j(x.H),u,t=this,s
var $async$J1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:C.ag3(t.a.d.b5)
w=3
return A.b(C.fzd(t.a.d.b5),$async$J1)
case 3:s=e
if(t.c==null){w=1
break}C.ag3(t.a.d.b5)
if(s!=null)t.m(new C.d7o(t,s))
else t.m(new C.d7p(t))
case 1:return A.h(u,v)}})
return A.i($async$J1,v)},
q(){C.aYv()
var w=this.e
if(w!=null)w.a9(0)
this.brq()},
ag7(d,e,f){return this.coh(d,e,f)},
coh(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ag7=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(e.toLowerCase())
p=J.q(t.r,q)
o=t.a
n=o.d.b5
o=o.c
s=d.b
C.hQx(n,o.a,o.c,d.a,s,f,e,p)
t.a.bp()
w=3
return A.b(C.ag4(t.a.d.b5),$async$ag7)
case 3:if(t.c==null){w=1
break}t.m(new C.d7r(t))
r=f===1?"1 game":""+f+" games"
t.c.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ag7,v)},
HU(d,e){return this.c9J(d,e)},
bYM(d){return this.HU(d,null)},
c9J(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&B.a.i(e).length!==0){s=C.tG(t.a.d.b5,B.a.i(e))
if(s!=null&&C.aNl(s)<=0){t.c.I(x.q).f.R(D.aMp)
w=1
break}}w=5
return A.b(C.ao9(t.a.c),$async$HU)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return A.b(C.fMP(r,C.ftB(q.c),p),$async$HU)
case 6:w=1
break
case 4:o=new C.d7j(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
A.hu(r,new C.aBA(p,q.d,q.f,q.r,new C.d7k(o),q.w,C.ftB(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
A.hu(q,new C.ajN(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.d7l(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$HU,v)},
bWg(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.ag3(i.a.d.b5)
C.ag3(i.f)
w=C.i0k(i.a.c.a,i.f)
v=C.hQw(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return B.bH
if(!u){t=B.d.gL(w)
u=A.m(14)
s=A.I(B.b5,B.r,1)
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
return A.p(h,A.v(A.a([D.fgq,A.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,B.oW,h,h,h),B.P,A.A(A.a([A.D(A.dT(B.II,new C.d7b(i,t),h),1),B.ab,A.D(A.bJ(D.fp1,new C.d7c(i,t),h),1)],n),B.m,h,B.e,B.j,0,h,h)],n),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(B.aE,h,s,u,h,h,B.n),h,h,h,B.e3,B.bk,h,h,1/0)}m=B.d.gL(v)
l=B.d.dM(i.y,new C.d7d(m),new C.d7e(i))
k=C.fSR(m,i.a.c.a,i.r)
j=C.aNl(m)
u=A.m(14)
s=A.I(B.b5,B.r,1)
r=j===1?"":"s"
return A.p(h,A.v(A.a([D.f8Q,A.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,B.oW,h,h,h),B.at,A.d(C.hTa(m,i.a.c.a),h,h,h,h,h,h,B.a6J,h,h,h),B.P,A.bJ(D.ffI,new C.d7f(i,l,m),h)],x.p),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(B.bj,h,s,u,h,h,B.n),h,h,h,B.e3,B.bk,h,h,1/0)},
bN6(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.eEs.t(0,d.a),l=A.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=A.a3T(w[v])
t=B.k.D(u.d*0.58,0.12,0.3)
l.push(new A.wQ(u.a,u.b,B.k.D(u.c*0.92,0,0.9),t).iB())}s=B.d.gL(w)
w=A.m(16)
t=A.m(18)
r=A.I(A.Z(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1)
q=x.V
p=A.a([new A.ad(0,B.G,A.Z(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.je,12)],q)
o=x.p
o=A.a([new A.a6(100,n,A.av(A.W(d.e,B.c,n,n,n,64),n,n,n),n),A.D(new A.C(B.j6,A.v(A.a([A.A(A.a([A.D(A.d(d.b,n,n,n,n,n,n,B.kU,n,n,n),1)],o),B.m,n,B.e,B.j,0,n,n),B.at,A.d(d.c,n,2,B.a2,n,n,n,B.oT,n,n,n)],o),B.F,n,B.ba,B.j,0,B.p),n),1)],o)
if(m)o.push(A.aH(n,n,n,n,D.bL7,n,n,n,new C.d77(this,d),n,n,n,n,"Invite player",n))
o.push(new A.C(B.Lh,A.p(n,D.bJf,B.f,n,n,new A.o(A.Z(71,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),n,A.I(A.Z(B.k.V(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1.6),n,A.a([new A.ad(0,B.G,A.Z(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,10)],q),n,B.a6),n,44,n,n,n,n,n,44),n))
return A.aK(!1,w,!0,A.p(n,A.A(o,B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,r,t,p,new A.a7(B.ax,B.aD,B.x,l,n,n),B.n),n,92,n,B.e3,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.d78(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.N(d).ax.a===B.H,l=A.N(d).ax.a===B.H?B.j0:B.ph,k=m?B.i3.j(0.94):B.c.j(0.94),j=m?B.c:B.M,i=m?B.i3:B.c,h=m?B.c.j(0.08):B.aL,g=m?B.c:B.M,f=m?B.bm:B.bN
if(!o.x)return C.aNT(n,l,A.av(A.mC(n,m?B.c:B.bn,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.ftB(o.a.c)
return new C.MP(o.a.w,w,!0,o.gaQn(),n)}w=A.aI(d,B.e7,x.w).w
v=A.m(12)
u=A.I(h,B.r,1)
t=x.V
s=A.a([],t)
if(!m)s.push(new A.ad(0,B.G,B.w.j(0.04),B.cJ,12))
r=x.p
s=A.a([A.p(n,A.A(A.a([A.D(A.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,A.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,B.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new A.uc(new C.d7v(o,f,g),n,$.aPf(),n)],r),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(i,n,u,v,s,n,B.n),n,n,n,n,B.Xv,n,n,1/0),B.S,o.bWg()],r)
v=o.y
B.d.v(s,new A.J(v,o.gbN5(),A.T(v).k("J<1,r>")))
w=A.cd(A.v(s,B.m,n,B.e,B.j,0,B.p),B.q,n,B.y,n,new A.Q(14,w.r.b+78,14,24),n,n,B.ah)
s=A.m(35)
v=A.a([new A.ad(0,B.G,B.w.j(m?0.28:0.08),B.je,15)],t)
u=A.I(m?B.c.j(0.1):B.aL,B.r,1)
t=A.aH(n,n,n,n,A.W(B.eB,j,n,n,n,18),n,n,n,o.gaQn(),n,n,n,n,n,n)
q=A.D(A.av(A.d("GAME CENTER",n,n,n,n,n,n,A.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,B.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=A.m(20)
return A.ob(!0,C.aNT(n,l,new A.an(B.W,n,B.aa,B.f,A.a([w,A.ao(n,A.bn(!1,new A.C(B.Lu,A.p(n,A.A(A.a([t,q,new A.C(B.j6,A.p(n,A.A(A.a([D.bGz,B.ea,C.ap1(new C.d7w(o),B.mu,o.a.c.a)],r),B.m,n,B.e,B.Q,0,n,n),B.f,n,n,new A.o(B.cR,n,n,p,n,n,B.n),n,n,n,n,B.h3,n,n,n),n)],r),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(k,n,u,s,v,n,B.n),n,60,n,n,B.mb,n,n,n),n),!0,!1,B.ag,!0,!0),n,n,0,0,0,n)],r),n)),new C.d7x(o),x.K)},
aQo(){var w,v
this.a.bp()
w=this.d
v=w>0?A.E(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
A.iK(w,v)}}
C.aBA.prototype={
T(){return new C.bhA()},
hq(d){return this.e.$1(d)},
bp(){return this.f.$0()},
aFb(){return this.r.$0()}}
C.bhA.prototype={
a_(){this.bsr()
this.d=A.TO(this.a.d.bi)
$.t5=$.t5+1},
q(){C.aYv()
this.bsq()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&A.c()
return new C.anE(v,new C.dL4(w),u,new C.dL5(w),new C.dL6(w,d),new C.dL7(w),null)}}
C.ajN.prototype={
T(){return new C.ayI(new A.ar(B.as,$.aw()))},
hq(d){return this.x.$1(d)},
bp(){return this.y.$0()},
aFb(){return this.z.$0()}}
C.ayI.prototype={
a_(){this.brp()
this.a.toString
$.t5=$.t5+1},
q(){C.aYv()
var w=this.d
w.S$=$.aw()
w.P$=0
this.bro()},
a15(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a15=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.MV()
w=5
return A.b(C.ao9(t.a.c),$async$a15)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return A.b(C.fMP(s,C.ftB(r.c),q),$async$a15)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&B.a.i(r).length!==0){p=C.tG(s.d.b5,B.a.i(r))
if(p!=null&&C.aNl(p)<=0){t.c.I(x.q).f.R(D.aMp)
w=1
break}}o=A.d3(B.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.I(x.q).f.R(D.eLm)
w=1
break}m=A.Ko(t.a.c.a,new C.d7_(t))
if(m+0.001<n){t.c.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Not enough balance for this bet \u2014 you have $"+A.dA(m)+", the bet is $"+A.dA(n)+".",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aFb()
s=t.a
s.toString
r=B.o.u(1000*Date.now())
q=t.a
s.hq(new A.d1(r,q.c.a,n,B.jD,B.fb,"Game bet: "+q.f,null,null,B.ck,new A.S(Date.now(),0,!1)))
t.a.bp()
if(D.eEk.t(0,t.a.e)){s=t.c
s.toString
r=t.a
A.hu(s,new C.amH(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
A.hu(s,new C.ajP(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$a15,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=A.aH(o,o,o,o,B.FY,o,o,o,new C.d72(d),o,o,o,o,o,o),k=p.a,j=A.d(k.f,o,o,o,o,o,o,B.cu,o,o,o),i=A.m(12),h=x.p
j=A.eD(A.a([A.p(o,A.av(C.ap1(new C.d73(p),B.ks,k.c.a),o,o,o),B.f,o,o,new A.o(B.cR,o,o,i,o,o,B.n),o,o,o,D.bmS,B.h2,o,o,o)],h),o,o,!0,!0,D.WC,o,1,o,o,o,!1,o,!1,B.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=A.m(16)
i=A.I(B.b5,B.r,1)
k=A.W(D.bxy,D.bhb,o,o,o,28)
w=p.a
v=A.d(w.f,o,o,o,o,o,o,B.oS,o,o,o)
w=A.d(w.r,o,o,o,o,o,o,B.oW,o,o,o)
u=A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.m(12)
s=x.a3
s=A.B(new A.J(A.a([2,5,10,25],x.t),new C.d74(p),s),s.k("ai.E"))
s=A.A(s,B.m,o,B.e,B.j,0,o,o)
r=A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.p(o,A.v(A.a([D.fqB,B.S,s,B.P,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.d,o,o,o,o,o,2,A.br(o,new A.b4(4,A.m(10),B.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,B.lk,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dM,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,B.dk,!0,B.a5,o,B.am,o,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(u,o,o,t,o,o,B.n),o,o,o,o,B.bR,o,o,1/0)
u=A.m(12)
r=A.I(A.Z(102,B.a2T.l()>>>16&255,B.a2T.l()>>>8&255,B.a2T.l()&255),B.r,1)
s=A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
q=A.m(10)
q=A.p(o,A.v(A.a([D.f8d,A.d("+ $"+B.k.aa(n*0.46,2),o,o,o,o,o,o,D.eZP,o,o,o),A.d("(46% return on $"+B.k.aa(p.e,2)+" bet)",o,o,o,o,o,o,B.oT,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(s,o,o,q,o,o,B.n),o,o,o,o,B.cj,o,o,1/0)
s=A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
n=A.m(10)
u=A.p(o,A.v(A.a([D.fgG,B.P,q,B.P,A.p(o,A.v(A.a([D.f3r,A.d("$"+B.k.aa(m,2),o,o,o,o,o,o,D.ePz,o,o,o),A.d("8 pairs \xd7 $"+B.k.aa(m,2)+" each",o,o,o,o,o,o,B.oT,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(s,o,o,n,o,o,B.n),o,o,o,o,B.cj,o,o,1/0)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(D.bdA,o,r,u,o,o,B.n),o,o,o,o,B.bR,o,o,1/0)
r=A.fm(o,o,B.bn,o,o,o,o,o,o,B.c,o,B.fL,o,o,o,o,o,o,o,o)
return C.aNT(j,D.WC,A.cd(A.p(o,A.v(A.a([k,B.at,v,B.bz,w,B.S,t,B.P,u,B.S,new A.a6(1/0,o,A.i9(A.d("Start Game ($"+B.k.aa(p.e,2)+")",o,o,o,o,o,o,B.cc,o,o,o),p.gcs4(),r),o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,i,l,o,D.bQK,B.n),o,o,o,o,B.eP,o,o,1/0),B.q,o,B.y,o,E.afK,o,o,B.ah))}}
C.ajP.prototype={
T(){var w=x.s,v=x.t,u=x.S
return new C.ayK(B.cI,new A.ar(B.as,$.aw()),A.a([],w),A.a([],x.d4),A.a([],w),A.a([],w),A.a([],v),A.a([],v),A.a([],v),A.aW(u),A.aW(u),A.a([],v),A.a([],v),A.a([],v))},
hq(d){return this.y.$1(d)},
bp(){return this.z.$0()}}
C.ayK.prototype={
ghx(){var w=this.a.Q
return w!=null&&B.a.i(w).length!==0},
qQ(d){return this.bLo(d)},
bLo(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$qQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.zJ()
r=t.NO()
w=s<=0?3:4
break
case 3:w=5
return A.b(t.a9G(d),$async$qQ)
case 5:w=1
break
case 4:q=B.k.D(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return A.b(t.tr(d),$async$qQ)
case 9:w=7
break
case 8:w=10
return A.b(t.E1(q,s,r),$async$qQ)
case 10:case 7:case 1:return A.h(u,v)}})
return A.i($async$qQ,v)},
EC(d,e,f,g){return this.cpU(d,e,f,g)},
cpU(d,e,f,g){var w=0,v=A.j(x.H),u,t=this,s
var $async$EC=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return A.b(C.bBz(s,C.bBc(),C.fUJ(),d,e,f,g),$async$EC)
case 3:case 1:return A.h(u,v)}})
return A.i($async$EC,v)},
zJ(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.b_U(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&A.c()
return u+C.agf(t,s.e.a.a)
case"memory":return s.ghx()&&D.mr.t(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.awC()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bi
case"color":return s.b5
case"reflex":return s.Z
default:u=s.b0
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
awC(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
NO(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&A.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.fSV()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.b0
if(w!=null)return w.b
return 1}},
br(d){var w,v,u=this
u.bE(d)
if(u.f||u.c6)return
w=u.a
v=C.ftG(w.e,w.d.y2)
if(v!==C.ftG(d.e,d.d.y2)&&u.c!=null)u.m(new C.d8S(u,v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.brt()
w=i.a
w.toString
$.t5=$.t5+1
i.Q=C.ftG(w.e,w.d.y2)
i.b2I()
i.aaX()
if(i.ghx()){i.c6=!0
i.cW="Connecting to match\u2026"
i.cj="Both players enter the room together \u2014 play starts at the same time."
i.O9()
i.aaB()
i.bj=A.dC(B.fF,new C.d8V(i))}if(B.d.t(D.Pp,i.a.e)){w=i.ghx()
v=i.a
if(w){w=v.d.b5
v=v.Q
v.toString
u=C.tG(w,v)
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
k=B.a.i(J.k(t==null?"":t))}w=new C.aYt(!1,w,k.length===0||B.a.t(k,"@")?C.fSR(u,v,null):k,p,l,s)}else{w=w.c
w=C.fMT(w.c,w.a)}w=i.bJ=w}else{w=v.c
w=i.bJ=C.fMT(w.c,w.a)}v=C.hxN()
v.blv(i.a.e,i.d,w)
i.b0=v
i.r=v.c
if(i.ghx()){w=i.a
v=w.d.b5
w=w.Q
w.toString
u=C.tG(v,w)
m=u==null?null:J.q(u,h)
if(x.f.b(m)){w=i.b0
w.toString
w.b7L(i.a.e,A.a1(m,x.N,x.z),i.a.c.a)
w=i.b0
i.r=w.c
if(w.e){if(w.r)j=D.QQ
else j=w.f===!0?D.pO:D.Hg
i.zL(j)}}}i.b3=A.dC(B.nF,new C.d8W(i))
if(i.ghx())i.ba=A.dC(B.on,new C.d8X(i))}if(i.ghx()&&!B.d.t(D.Pp,i.a.e))i.ba=A.dC(B.on,new C.d8Y(i))
i.as=A.dC(B.hf,new C.d8Z(i))},
O9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$O9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghx()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tG(s.d.b5,q)
w=p!=null?3:4
break
case 3:w=5
return A.b(C.bzx(p,t.a.c.a),$async$O9)
case 5:o=e
if(t.c!=null)t.m(new C.d87(t,o))
w=1
break
case 4:w=6
return A.b(C.Kf(q,t.a.d.b5,!1),$async$O9)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return A.b(C.bzx(n,t.a.c.a),$async$O9)
case 7:o=e
if(t.c!=null)t.m(new C.d88(t,o))
case 1:return A.h(u,v)}})
return A.i($async$O9,v)},
ahe(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$ahe=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghx()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.Kf(r,s.d.b5,!1),$async$ahe)
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
t.aLq(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=B.k.O(j)
else{h=j==null?null:J.k(j)
i=A.c7(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)B.d.bn(t.fy,new C.d8B(t))
if(i!=null&&t.fr.length!==0){s=A.B(t.dy,x.S)
B.d.v(s,t.dy)
r=new A.eT()
r.dI(i)
B.d.fo(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.m(new C.d8C())}case 1:return A.h(u,v)}})
return A.i($async$ahe,v)},
aaB(){var w=0,v=A.j(x.H),u=this
var $async$aaB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.a_p(!0),$async$aaB)
case 2:return A.h(null,v)}})
return A.i($async$aaB,v)},
a_p(d){return this.cfu(d)},
cft(){return this.a_p(!1)},
cfu(b3){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$a_p=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghx()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
if(q.length===0){w=1
break}p=B.a.i(s.c.a.toLowerCase())
w=3
return A.b(C.Kf(q,s.d.b5,b3),$async$a_p)
case 3:o=b5
if(o==null)o=C.tG(t.a.d.b5,q)
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
a2=new A.S(Date.now(),0,!1).a5()
if(b3){d.n(0,p,!0)
a1.n(0,p,a2.ac())}if(i&&!d.ag(0,h))d.n(0,h,!1)
if(f&&!d.ag(0,g))d.n(0,g,!1)
s=!1
if(i)if(J.y(d.h(0,h),!0)){s=a1.h(0,h)
s=J.k(s==null?"":s).length===0}if(s)a1.n(0,h,a2.ac())
s=!1
if(f)if(J.y(d.h(0,g),!0)){s=a1.h(0,g)
s=J.k(s==null?"":s).length===0}if(s)a1.n(0,g,a2.ac())
j.n(0,"inGame",d)
j.n(0,"readyAt",a1)
b2.a=null
s=j.h(0,"startAt")
a3=J.k(s==null?"":s)
if(a3.length!==0){s=A.bi(a3)
a4=s==null?null:s.bQ()
b2.a=a4
s=a4}else s=null
a5=i&&f&&J.y(d.h(0,h),!0)&&J.y(d.h(0,g),!0)
if(a5&&s==null){if(i){r=a1.h(0,h)
r=A.bi(J.k(r==null?"":r))
a6=r==null?null:r.bQ()}else a6=null
if(f){r=a1.h(0,g)
r=A.bi(J.k(r==null?"":r))
a7=r==null?null:r.bQ()}else a7=null
if(a6!=null&&a7!=null){a8=(a6.ca(a7)?a6:a7).bN(5e5)
if(!new A.S(Date.now(),0,!1).cY(a8)){a4=b2.a=a8.bN(4e6)
j.n(0,"startAt",a4.a5().ac())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.n(0,"memorySeed",B.o.F(1000*Date.now(),2147483647))
j.n(0,"memoryMatched",A.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.n(0,"patternSeed",B.o.F(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.hYb(t.a.d.b5,q,j)
t.a.bp()}if(t.c==null){w=1
break}b0=t.bC
if(b0==null)b0="your opponent"
if(!a5){t.m(new C.d8n(b2,t,b0))
w=1
break}if(s==null){t.m(new C.d8o(t))
w=1
break}b1=new A.S(Date.now(),0,!1)
if(b1.cY(s)){s=s.by(b1).a
r=B.o.an(s,1e6)
t.m(new C.d8p(b2,t,r+(B.o.F(B.o.an(s,1000),1000)>0?1:0)))
w=1
break}if(t.c6){t.m(new C.d8q(b2,t))
b2=t.a.e
if(b2==="pattern")t.a7y()
else if(b2==="memory"){t.b2H()
if(t.c!=null)t.m(new C.d8r())}}b2=t.bj
if(b2!=null)b2.a9(0)
t.bj=null
case 1:return A.h(u,v)}})
return A.i($async$a_p,v)},
aMk(d){var w,v,u,t,s=this
if(d!=null){w=new A.eT()
w.dI(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e1(v,x.S)
for(t=0;t<v;++t)u[t]=w.aB(9)
s.ry=u
s.x1=0
s.to=-1},
aMj(){return this.aMk(null)},
a7y(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a7y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ghx()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.cd0()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return A.b(C.Kf(q,s.d.b5,!1),$async$a7y)
case 5:r=t.aZE(e)
case 4:if(t.c==null){w=1
break}t.aMk(r)
t.m(new C.d7A(t))
t.Dd()
case 1:return A.h(u,v)}})
return A.i($async$a7y,v)},
aZE(d){var w,v,u,t=null
if(d==null)return t
w=J.q(d,"sessionState")
if(!x.f.b(w))return t
v=J.q(w,"patternSeed")
if(typeof v=="number")return B.k.O(v)
u=v==null?t:J.k(v)
return A.c7(u==null?"":u,t)},
cd0(){var w=this.a,v=w.Q
if(v==null)return null
return this.aZE(C.tG(w.d.b5,v))},
aaX(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$aaX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$aaX)
case 3:r=e
q=t.a
p=q.e
q=B.a.i(q.c.a.toLowerCase())
s=A.f4(J.q(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.m(new C.d86(t,s))
case 1:return A.h(u,v)}})
return A.i($async$aaX,v)},
oM(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n
var $async$oM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$oM)
case 2:p=e
o=u.a
n=o.e
o=B.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bC2().length
else s=n==="typing"?50:105
if(n==="typing")r=B.o.F(u.at+5,s)
else{q=u.at
r=t?B.o.F(q+6,s):B.o.F(q+1,s)}w=3
return A.b(p.ar("Int","ngmy_game_"+n+"_"+o,r),$async$oM)
case 3:u.at=r
return A.h(null,v)}})
return A.i($async$oM,v)},
a1k(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a1k=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghx()||t.b0==null||t.f||t.aR){w=1
break}if(t.c6){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.Kf(r,s.d.b5,!1),$async$a1k)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.b5
s=s.Q
s.toString
p=C.tG(r,s)
s=p==null
if(!s){r=J.cE(p)
r.a8(p)
r.v(p,q)}r=J.a8(q)
o=r.h(q,"sessionState")
if(!x.f.b(o)){w=1
break}n=A.a1(o,x.N,x.z)
r=r.h(q,"sessionUpdatedAt")
m=A.bi(J.k(r==null?"":r))
s=s?null:J.q(p,"sessionUpdatedAt")
l=A.bi(J.k(s==null?"":s))
if(m!=null&&l!=null&&!m.ca(l)){w=1
break}s=t.b0
s.toString
r=t.a
s.b7L(r.e,n,r.c.a)
r=t.b0
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.QQ
else k=r.f===!0?D.pO:D.Hg
w=7
return A.b(t.zL(k),$async$a1k)
case 7:w=5
break
case 6:if(t.c!=null)t.m(new C.d8D())
case 5:case 1:return A.h(u,v)}})
return A.i($async$a1k,v)},
af8(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$af8=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghx()||q.b0==null||q.a.Q==null||q.aR){w=1
break}q.aR=!0
t=3
o=q.b0
o.toString
p=o.cHb(q.a.e)
o=q.a
n=o.d.b5
o=o.Q
o.toString
w=6
return A.b(C.aOe(n,o,p),$async$af8)
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
return A.i($async$af8,v)},
zL(d){return this.bSo(d)},
bSo(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$zL=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(t.IB(s,s),$async$zL)
case 9:w=4
break
case 6:w=10
return A.b(t.WR(s,s),$async$zL)
case 10:w=4
break
case 7:w=11
return A.b(t.a9F(s,s),$async$zL)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghx()?12:13
break
case 12:w=14
return A.b(t.Hd(),$async$zL)
case 14:case 13:case 1:return A.h(u,v)}})
return A.i($async$zL,v)},
Zm(d,e){return this.c7u(d,e)},
c7u(d,e){var w=0,v=A.j(x.H),u,t=this
var $async$Zm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=t.ghx()?3:5
break
case 3:w=6
return A.b(t.af8(),$async$Zm)
case 6:if(d===D.pN){w=1
break}w=4
break
case 5:if(d===D.pN){w=1
break}case 4:w=7
return A.b(t.zL(d),$async$Zm)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Zm,v)},
aaR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aaR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghx()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tG(s.d.b5,q)
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
return A.b(C.aOe(t.a.d.b5,q,l),$async$aaR)
case 3:t.a.bp()
case 1:return A.h(u,v)}})
return A.i($async$aaR,v)},
Hd(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Hd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghx()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tG(s.d.b5,q)
if(p==null){w=1
break}o=J.q(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?A.a1(o,s,r):A.V(s,r)
n.n(0,"gameOver",!0)
C.fV9(t.a.d.b5,q,n)
C.i0v(t.a.d.b5,q)
w=3
return A.b(C.ag4(t.a.d.b5),$async$Hd)
case 3:t.a.bp()
case 1:return A.h(u,v)}})
return A.i($async$Hd,v)},
q(){var w,v=this
if(v.ghx()&&!v.f)v.aaR()
else if(!v.f)v.bYN()
C.aYv();++v.RG
w=v.as
if(w!=null)w.a9(0)
w=v.b3
if(w!=null)w.a9(0)
w=v.cx
if(w!=null)w.a9(0)
w=v.ba
if(w!=null)w.a9(0)
w=v.bj
if(w!=null)w.a9(0)
w=v.e
w.S$=$.aw()
w.P$=0
v.brs()},
cvc(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&A.c()
v=v<=0||w.b0==null}if(v)return
if(w.c6)return
v=w.b0
v.toString
w.a.toString
if(v.a>=v.b){w.tr("Goal completed!")
return}v=++w.rx
if(v%5===0)w.m(new C.d8M())},
b2I(){var w,v,u,t,s,r=this
r.x=A.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e1(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b2H()
break
case"scramble":r.bi=0
r.b2J()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=B.o.F(r.at,50)
v=J.e1(5,x.N)
for(t=0;t<5;++t)v[t]=D.d7G[B.o.F(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bM(0,B.c3)
break
case"math":r.y2=0
r.b2G()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b2K()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e1(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
B.d.fo(v,s)
if(!r.chT()){w=J.e1(9,w)
for(u=0;u<9;++u)w[u]=u
B.d.fo(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
B.d.a8(w)
w.push(r.d.aB(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.PK()
break
case"pattern":if(r.ghx()){r.ry=A.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aMj()
w=A.t(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Dd()}break
case"color":r.b5=0
r.b2B()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.Z=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b3P()
break
default:if(B.d.t(D.Pp,w)){w=r.b0
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
b_U(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
chT(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return B.o.F(v,2)===0},
b2K(){var w,v,u,t,s,r=this,q=B.o.F(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e1(o,x.S)
for(w=0;w<o;w=v){v=w+1
n[w]=B.k.O(Math.pow(p,v))}u=B.k.O(Math.pow(p,o))
r.w=B.o.u(u)
r.az=B.d.aH(n,", ")
q=r.w
t=x.s
s=A.a([B.o.u(u+p),B.o.u(u-p),B.o.u(u+p*2)],t)
t=A.a([q],t)
B.d.v(t,s)
B.d.fo(t,r.d)
r.x=t},
b2G(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bC2().length-6)u.at=0
w=$.bC2()
v=w[B.o.F(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b2J(){var w=this,v=w.w=D.cNr[B.o.F(w.at+w.bi,105)]
w.ax=C.i0N(v)
w.ay=A.c2(v.length,null,!1,x.T)
w.ch=A.a(w.ax.split(""),x.s)
w.e.bM(0,B.c3)},
b3P(){var w=this,v=w.cx
if(v!=null)v.a9(0)
w.y=!1
w.z=null
w.cx=A.cM(A.dB(0,0,0,120+w.d.aB(280),0,0),new C.d8A(w))},
bSr(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.qQ("Too early \u2014 paid for "+t.Z+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=B.o.an(new A.S(v,0,!1).by(u).a,1000)}if(w<520){t.m(new C.d84(t))
v=t.Z
if(v>=5){t.oM()
t.tr("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b3P()
t.m(new C.d85())}}else t.qQ("Too slow ("+w+"ms) \u2014 paid for "+t.Z+"/5.")},
cut(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=B.d.bc(t.ay,new C.d8H())
if(u<0)return
t.m(new C.d8I(t,u,v,d))},
cuu(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.m(new C.d8J(u,d,v))},
bCL(){var w,v,u=this
if(u.f)return
if(B.d.b8(u.ay,new C.d7B())){u.c.I(x.q).f.R(D.eLg)
return}w=B.d.fU(u.ay)
v=u.w
v===$&&A.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.m(new C.d7C(u))
if(u.ghx()&&D.mr.t(0,u.a.e))u.a_D()
if(u.bi>=5){u.oM()
if(u.ghx()&&D.mr.t(0,u.a.e))u.mO(!0)
else u.tr("All 5 words unscrambled!")}else{u.b2J()
u.r="Word "+(u.bi+1)+" of 5 \u2014 place letters in order"
u.m(new C.d7D())}}else u.qQ("Wrong word \u2014 paid for "+u.bi+"/5.")},
b2B(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=B.o.F(w.at+w.b5*11,4),t=v[w.d.aB(4)]
w.aF=t
w.aE=v[u]
w.aN=[B.dF,B.dw,B.hM,B.r2][u]
w.w=t},
aLq(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=B.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a8(0)
w=h.id
w.a8(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=A.aW(x.S)
for(s=J.jq(v),s=s.gah(s),r=x.j;s.C();){q=s.gU(s)
p=B.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aX(r.b(o)?o:B.cH),n=p===g;q.C();){m=q.gU(q)
l=typeof m=="number"?B.k.O(m):A.c7(J.k(m),null)
if(l==null)continue
t.J(0,l)
if(n)w.J(0,l)}}f.v(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aX(k);w.C();){m=w.gU(w)
l=typeof m=="number"?B.k.O(m):A.c7(J.k(m),null)
if(l!=null)f.J(0,l)}}h.k2=B.k.bw(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=A.aN(J.q(j,g))
i=f==null?null:B.k.O(f)
if(i!=null)h.fx=i}},
b2H(){var w,v,u,t,s,r,q,p=this
p.fx=p.k2=0
p.go.a8(0)
p.id.a8(0)
p.fy=A.a([],x.t)
p.k1=!1
w=A.B(p.dy,x.S)
B.d.v(w,p.dy)
p.fr=w
if(p.ghx()&&p.a.Q!=null){w=p.a
v=w.d.b5
w=w.Q
w.toString
u=C.tG(v,w)
t=u==null?null:J.q(u,"sessionState")
w=x.N
v=x.z
s=x.f.b(t)?A.a1(t,w,v):A.V(w,v)
r=s.h(0,"memorySeed")
if(typeof r=="number")q=B.k.O(r)
else{w=r==null?null:J.k(r)
q=A.c7(w==null?"":w,null)}w=p.fr
if(q!=null){v=new A.eT()
v.dI(q)
B.d.fo(w,v)}else B.d.fo(w,p.d)
p.aLq(s)}else B.d.fo(p.fr,p.d)},
ceP(d){var w,v,u,t=this
if(t.c6)return
if(t.f||t.k1||t.go.t(0,d)||B.d.t(t.fy,d))return
t.m(new C.d8g(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.m(new C.d8h(t,v,u))
if(t.ghx()&&D.mr.t(0,t.a.e))t.a_D()
if(t.go.a>=t.fr.length){t.oM()
if(t.ghx()&&D.mr.t(0,t.a.e))t.mO(!0)
else t.awF()}return}t.k1=!0
A.bN(D.blP,new C.d8i(t),x.c)},
b24(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&A.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.m(new C.d8s(u))
if(u.y1>=5){u.oM()
u.tr("All 5 questions correct!")}else{u.b2K()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.m(new C.d8t())}}else u.qQ(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.m(new C.d8u(u))
if(u.y2>=6){u.oM()
u.tr("All 6 math questions correct!")}else{u.b2G()
u.r="Question "+(u.y2+1)+" of 6"
u.m(new C.d8v())}}else{u.UW(u.y2+1)
u.qQ(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.m(new C.d8w(u))
if(u.b5>=5){u.oM()
u.tr("All 5 color rounds correct!")}else{u.b2B()
u.r="Round "+(u.b5+1)+" of 5 \u2014 tap the COLOR of the text"
u.m(new C.d8x())}}else u.qQ("Wrong color \u2014 paid for "+u.b5+"/5.")
return}if(v){u.oM()
u.awF()}else u.c.I(x.q).f.R(D.eM_)},
cus(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=B.d.cJ(q.k4,0)
v=B.o.an(d,3)
u=B.o.F(d,3)
t=B.o.an(w,3)
s=B.o.F(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.m(new C.d8G(q,d,w))
if(B.d.fU(q.k4)==="123456780"){q.oM()
q.awF()}}},
PK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.m(new C.d8j(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.d8k(t,q).$0()
t.c.e8()
w=6
return A.b(A.bN(B.kD,null,r),$async$PK)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.d8l(t).$0()
t.c.e8()
w=7
return A.b(A.bN(B.jp,null,r),$async$PK)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.m(new C.d8m(t))
case 1:return A.h(u,v)}})
return A.i($async$PK,v)},
cuv(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.qQ("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.m(new C.d8K(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.oM()
u.tr("Perfect Simon run!")
return}u.m(new C.d8L(u))
u.PK()}},
Dd(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Dd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.m(new C.d7E(t))
s=x.H
w=3
return A.b(A.bN(B.j4,null,s),$async$Dd)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.d7F(t,o).$0()
t.c.e8()
w=7
return A.b(A.bN(B.X8,null,s),$async$Dd)
case 7:if(t.c==null){w=1
break}new C.d7G(t).$0()
t.c.e8()
w=8
return A.b(A.bN(B.is,null,s),$async$Dd)
case 8:case 5:r.length===q||(0,A.L)(r),++p
w=4
break
case 6:if(t.c!=null)t.m(new C.d7H(t))
case 1:return A.h(u,v)}})
return A.i($async$Dd,v)},
UW(d){return this.bxx(d)},
bxx(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$UW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return A.b(A.aA(),$async$UW)
case 3:s=f
r=t.a
q=r.e
r=B.a.i(r.c.a.toLowerCase())
p=$.bC2().length
o=B.o.F(t.at+d,p)
w=4
return A.b(s.ar("Int","ngmy_game_"+q+"_"+r,o),$async$UW)
case 4:t.at=o
case 1:return A.h(u,v)}})
return A.i($async$UW,v)},
cuq(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.qQ("Wrong tile \u2014 paid for "+v.awC()+"/"+C.fSV()+" moves.")
return}v.m(new C.d8E(v,w))
if(v.ghx()&&D.mr.t(0,v.a.e))v.a_D()
if(v.x1>=w)if(v.x2>=7){v.oM()
if(v.ghx()&&D.mr.t(0,v.a.e))v.mO(!0)
else v.tr("All 7 pattern rounds correct!")}else{v.m(new C.d8F(v))
v.Dd()}},
IB(d,e){return this.cdg(d,e)},
tr(d){return this.IB(null,d)},
awF(){return this.IB(null,null)},
cdg(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a9(0)
s=t.b3
if(s!=null)s.a9(0)
r=t.a.x*1.46
t.m(new C.d8e(t,r))
q=B.o.u(1000*Date.now())
s=t.a
p=new A.d1(q,s.c.a,r,B.fB,B.fb,"Game payout: "+s.f,null,null,B.ck,new A.S(Date.now(),0,!1))
A.ag1(p,!0)
t.a.hq(p)
t.a.bp()
o=e==null?"+$"+B.k.aa(r,2)+" added to your balance!":e
s=t.a
C.un(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.EC(d,o,"YOU WIN!",!0),$async$IB)
case 3:w=4
return A.b(C.afU(t.a.f,o),$async$IB)
case 4:case 1:return A.h(u,v)}})
return A.i($async$IB,v)},
EA(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$EA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghx()&&D.mr.t(0,t.a.e)?3:4
break
case 3:w=5
return A.b(t.coZ(),$async$EA)
case 5:w=1
break
case 4:s=t.zJ()
r=t.NO()
w=r<=0||s<=0?6:7
break
case 6:w=8
return A.b(t.a9G("Time's up \u2014 no progress to pay."),$async$EA)
case 8:w=1
break
case 7:q=B.k.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return A.b(t.tr("Complete! Max payout earned."),$async$EA)
case 12:w=10
break
case 11:w=13
return A.b(t.E1(q,s,r),$async$EA)
case 13:case 10:case 1:return A.h(u,v)}})
return A.i($async$EA,v)},
PR(d){return this.chA(d)},
a_D(){return this.PR(!1)},
chA(b1){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$PR=A.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghx()&&D.mr.t(0,r.a.e))||r.a.Q==null){w=1
break}if(!b1){a1=new A.S(Date.now(),0,!1)
a2=r.bR
if(a2!=null&&a1.by(a2).a<3e6){w=1
break}r.bR=a1}a2=r.a
a3=a2.Q
a3.toString
q=B.a.i(a3)
if(J.ac(q)===0){w=1
break}t=4
p=B.a.i(a2.c.a.toLowerCase())
a4=C.tG(a2.d.b5,q)
w=a4==null?7:9
break
case 7:w=10
return A.b(C.Kf(q,r.a.d.b5,!1),$async$PR)
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
J.aG(k,p,r.zJ())
J.aG(m,"scores",k)
if(r.a.e==="memory"){j=J.q(m,"memoryMatchedBy")
i=a2.b(j)?A.a1(j,a3,a5):A.V(a3,a5)
a6=r.id
a6=A.B(a6,A.a3(a6).k("cl.E"))
B.d.ff(a6)
J.aG(i,p,a6)
J.aG(m,"memoryMatchedBy",i)
h=A.aW(x.S)
for(a6=i,a6=new A.dt(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aX(g);a8.C();){f=a8.gU(a8)
e=typeof f=="number"?B.k.O(f):A.c7(J.k(f),null)
if(e!=null)J.cf(h,e)}}a6=h
a6=A.B(a6,A.a3(a6).k("cl.E"))
B.d.ff(a6)
J.aG(m,"memoryMatched",a6)}d=J.q(m,"wagers")
a0=a2.b(d)?A.a1(d,a3,a5):A.V(a3,a5)
J.aG(a0,p,r.a.x)
J.aG(m,"wagers",a0)
w=11
return A.b(C.aOe(r.a.d.b5,q,m),$async$PR)
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
return A.i($async$PR,v)},
mO(d){return this.cp_(d)},
coZ(){return this.mO(!1)},
cp_(b5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$mO=A.e(function(b6,b7){if(b6===1)return A.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghx()||t.a.Q==null?3:4
break
case 3:w=5
return A.b(t.EA(),$async$mO)
case 5:w=1
break
case 4:w=6
return A.b(t.PR(!0),$async$mO)
case 6:s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=B.a.i(s.c.a.toLowerCase())
w=7
return A.b(C.Kf(q,s.d.b5,!0),$async$mO)
case 7:o=b7
n=t.NO()
w=o==null?8:9
break
case 8:m=B.k.D(t.zJ()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return A.b(t.a9G("Time's up \u2014 no progress to pay."),$async$mO)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return A.b(t.tr("Complete! Max payout earned."),$async$mO)
case 17:w=15
break
case 16:w=18
return A.b(t.E1(m,t.zJ(),n),$async$mO)
case 18:case 15:case 11:w=19
return A.b(t.Hd(),$async$mO)
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
if(a0==null)a0=t.zJ()
d=A.aN(e.h(0,j))
a1=d==null?null:B.k.O(d)
if(a1==null)a1=0
a2=B.k.D(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return A.b(t.a9G("Time's up \u2014 no progress to pay."),$async$mO)
case 22:w=23
return A.b(t.Hd(),$async$mO)
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
if(r!=null)r.a9(0)
r=t.b3
if(r!=null)r.a9(0)
a8=t.a.x*1.46*a2
a9=a8+a7
t.m(new C.d8y(t,a8,a2))
r=t.a
r.toString
h=B.o.u(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+B.k.aa(a7,2):d+" ("+b1+"/"+b2+")"
r.hq(new A.d1(h,b0,a9,B.fB,B.fb,d,null,null,B.ck,new A.S(Date.now(),0,!1)))
t.a.bp()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+B.k.aa(a9,2)+" (includes opponent bonus $"+B.k.aa(a7,2)+")":"+$"+B.k.aa(a8,2)+" (your progress payout)"
s=t.a
C.un(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return A.b(t.EC(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$mO)
case 24:w=25
return A.b(t.Hd(),$async$mO)
case 25:case 1:return A.h(u,v)}})
return A.i($async$mO,v)},
E1(d,e,f){return this.cde(d,e,f)},
cde(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$E1=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a9(0)
s=t.b3
if(s!=null)s.a9(0)
r=t.a.x*1.46*d
t.m(new C.d8c(t,r,d))
s=B.o.u(1000*Date.now())
q=t.a
p=new A.d1(s,q.c.a,r,B.fB,B.fb,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,B.ck,new A.S(Date.now(),0,!1))
A.ag1(p,!0)
t.a.hq(p)
t.a.bp()
if(t.c==null){w=1
break}o=B.k.V(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&A.c()
m=q+C.agf(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?B.d.cI(t.cy,0,new C.d8d()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+B.k.aa(r,2)+" ("+n+"% \u2014 "+A.t(k)+" mistakes/missed)":"+$"+B.k.aa(r,2)+" ("+n+"% of full prize)"
q=t.a
C.un(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return A.b(t.EC(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$E1)
case 3:w=4
return A.b(C.afU(t.a.f,j),$async$E1)
case 4:case 1:return A.h(u,v)}})
return A.i($async$E1,v)},
bYN(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.zJ()
v=o.NO()}catch(u){return}if(v<=0||w<=0)return
t=B.k.D(w/v,0,1)
s=A.nO(B.k.aa(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=B.o.u(1000*Date.now())
p=o.a
r.hq(new A.d1(q,p.c.a,s,B.fB,B.fb,"Game partial: "+p.f+" ("+A.t(w)+"/"+A.t(v)+", left early)",n,n,B.ck,new A.S(Date.now(),0,!1)))
o.a.bp()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.un(s,n,"Left early \xb7 +$"+B.k.aa(s,2)+" ("+A.t(w)+"/"+A.t(v)+")",q,r,p,n,!0)},
a9F(d,e){return this.bN0(d,e)},
bN0(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a9F=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a9(0)
s=t.b3
if(s!=null)s.a9(0)
r=B.o.u(1000*Date.now())
s=t.a
q=s.c.a
p=s.x
s=s.f
o=Date.now()
t.a.hq(new A.d1(r,q,p,B.fB,B.fb,"Game payout: "+s+" (draw, stake returned)",null,null,B.ck,new A.S(o,0,!1)))
t.a.bp()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.un(o,null,"Draw. Your $"+B.k.aa(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.EC(d,"Nobody won, so your $"+B.k.aa(t.a.x,2)+" stake was returned.","DRAW",!1),$async$a9F)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9F,v)},
WR(d,e){return this.bN1(d,e)},
a9G(d){return this.WR(null,d)},
bN1(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$WR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a9(0)
s=t.b3
if(s!=null)s.a9(0)
s=t.a
r=s.c.a
q=s.f
s=s.x
C.un(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return A.b(t.EC(d,e,"YOU LOSE",!1),$async$WR)
case 3:case 1:return A.h(u,v)}})
return A.i($async$WR,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&A.c()
w=B.o.an(m,60)
m=B.a.aT(B.o.u(B.o.F(m,60)),2,"0")
v=A.aH(n,n,n,n,B.alo,n,n,n,new C.d8N(d),n,n,n,n,n,n)
if(o.ghx()){u=o.bC
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=A.D(A.d(u?t.f+" vs "+A.t(o.bC):t.f,n,2,B.a2,n,n,n,B.fW,n,n,n),1)
r=A.m(10)
q=x.p
r=A.A(A.a([v,s,A.p(n,C.ap1(new C.d8O(o),B.o0,t.c.a),B.f,n,n,new A.o(B.cR,n,n,r,n,n,B.n),n,n,n,n,B.fG,n,n,n)],q),B.m,n,B.e,B.j,0,n,n)
t=o.a
s=t.w
v=A.m(10)
s=A.p(n,A.A(A.a([A.D(A.d("Win $"+B.k.aa(t.x*1.46,2)+" \xb7 stake $"+B.k.aa(o.a.x,2)+" \u2022 Progress "+o.zJ()+"/"+o.NO(),n,n,n,n,n,n,D.eUx,n,n,n),1),new C.aob(o.a.c.a,new C.d8P(o),n),B.ab,D.bCc,B.d8,A.d(""+w+":"+m,n,n,n,n,n,n,B.ne,n,n,n)],q),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,n,v,n,new A.a7(B.a3,B.a7,B.x,s,n,n),B.n),n,n,n,n,B.h1,n,n,n)
v=o.a.w
m=A.T(v).k("J<1,w>")
m=A.B(new A.J(v,new C.d8Q(),m),m.k("ai.E"))
w=A.m(14)
v=A.I(B.b5,B.r,1)
p=C.aNT(n,D.b4b,A.bn(!0,new A.C(Ag.Xw,A.v(A.a([r,s,B.P,new A.fj(new C.d8R(o),n),B.ao,A.D(A.p(n,o.bN_(),B.f,n,n,new A.o(n,n,v,w,n,new A.a7(B.a3,B.a7,B.x,m,n,n),B.n),n,n,n,n,B.cj,n,n,n),1)],q),B.aj,n,B.e,B.j,0,B.p),n),!0,!1,B.ag,!0,!0))
if(!o.c6)return p
m=A.Z(140,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255)
w=A.Z(242,B.ip.l()>>>16&255,B.ip.l()>>>8&255,B.ip.l()&255)
v=A.m(18)
u=A.I(B.b5,B.r,1)
return new A.an(B.W,n,B.aa,B.q,A.a([p,A.bY(0,A.p(B.A,A.e_(A.p(n,A.v(A.a([D.eHs,B.ac,A.d(o.cW,n,n,n,n,n,n,D.eVZ,B.L,n,n),B.ao,A.d(o.cj,n,n,n,n,n,n,D.eUe,B.L,n,n)],q),B.m,n,B.e,B.Q,0,B.p),B.f,n,n,new A.o(w,n,u,v,n,n,B.n),n,n,n,B.v1,B.xf,n,n,n),!1,n),B.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
bZL(){var w=this.k3
return A.cm(new C.d8b(this,w,B.k.dw(this.fr.length/w)))},
bN_(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.bZL()
if(m==="scramble"){m=o.r
m===$&&A.c()
w=x.l
return A.v(A.a([A.d(m,n,n,n,n,n,n,B.oT,n,n,n),A.d("Words "+o.bi+"/5",n,n,n,n,n,n,B.CT,n,n,n),B.ac,A.d("Tap letters below to fill each slot",n,n,n,n,n,n,A.l(n,n,A.Z(166,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.S,A.c_(B.fM,A.ip(o.ay.length,new C.d7U(o),!0,w),B.bt,6,6),B.aO,A.c_(B.fM,A.ip(o.ch.length,new C.d7V(o),!0,w),B.bt,8,8),B.aO,new A.a6(1/0,n,A.i9(D.fjY,o.gbCK(),A.fm(n,n,B.aE,n,n,n,n,n,n,B.c,n,n,B.cf,n,n,n,n,n,n,n)),n)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="typing"){m=o.w
m===$&&A.c()
return new C.aqt(m,o.e,new C.d7W(o),new C.d7X(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&A.c()
m=A.a([A.d(m,n,n,n,n,n,n,B.oT,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(A.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,B.CT,n,n,n))
m.push(B.ac)
if(o.a.e==="sequence"){w=o.az
w===$&&A.c()
w+=", ?"}else w=o.CW
m.push(A.f1(B.A,A.d(w,n,n,n,n,n,n,B.oS,B.L,n,n),B.f,B.dt))
m.push(B.aO)
w=o.x
B.d.v(m,new A.J(w,new C.d7Y(o),A.T(w).k("J<1,r>")))
return A.v(m,B.m,n,B.e,B.j,0,B.p)}if(m==="puzzle")return A.cm(new C.d7Z(o))
if(m==="simon"){m=o.r
m===$&&A.c()
return A.v(A.a([A.d(m,n,n,n,n,n,n,B.oT,n,n,n),A.d("Progress "+o.p3+"/21",n,n,n,n,n,n,B.CT,n,n,n),B.P,A.D(A.lS(1,A.ip(4,new C.d8_(o),!0,x.l),2,10,10,n,B.dQ,!1),1)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="pattern")return A.cm(new C.d80(o))
if(m==="color"){u=A.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[B.dF,B.dw,B.hM,B.r2]
m=o.r
m===$&&A.c()
m=A.d(m,n,n,n,n,n,n,B.oT,n,n,n)
w=A.d("Round "+o.b5+"/5",n,n,n,n,n,n,B.CT,n,n,n)
v=o.aE
v===$&&A.c()
s=o.aN
s===$&&A.c()
s=A.a([m,w,B.ac,A.d(v,n,n,n,n,n,n,A.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.aO],x.p)
r=J.e1(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=A.fm(n,n,A.Z(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,B.c,n,n,B.f3,n,n,n,n,n,n,n)
r[q]=new A.C(B.cG,new A.a6(1/0,n,A.i9(new A.x(u[q],n,B.cu,n,n,n,n,n,n,n,n,n),new C.d81(o,u,q),m),n),n)}B.d.v(s,r)
return A.v(s,B.m,n,B.e,B.j,0,B.p)}if(m==="reflex"){m=o.y
p=m?B.bn:B.cb
w=o.r
w===$&&A.c()
w=A.d(w,n,n,n,n,n,n,B.a6F,B.L,n,n)
v=A.d("Fast taps "+o.Z+"/5",n,n,n,n,n,n,D.eRN,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=A.d(m,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,n,n,n,Math.min(A.aI(s,B.bS,x.w).w.a.a*0.18,72),n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return A.ri(A.aE(B.c5,A.dg(n,A.v(A.a([w,B.P,v,B.b3,s,B.b3,new A.C(B.EI,A.d(m,n,n,n,n,n,n,A.l(n,n,A.Z(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),B.m,n,B.ba,B.j,0,B.p),p,n,B.bb,n,U.Au,n,n,n,n,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gbSq(),n,n,n,n,n,n,!1,B.a8))}if(B.d.t(D.Pp,m)&&o.b0!=null){m=o.a.e
w=o.b0
w.toString
return C.hRb(m,new C.d82(o),new C.d83(o),o.d,w)}m=o.r
m===$&&A.c()
return A.av(A.d(m,n,n,n,n,n,n,B.dk,n,n,n),n,n,n)}}
C.akF.prototype={
T(){return new C.beJ()},
cMS(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.beJ.prototype={
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.a,a0=d.c,a1=d.d
d=A.aI(a2,B.e7,x.w).w
w=x.p
v=A.a([A.bM0(!1,f.a.r,"INVESTMENT PLANS",e),B.d5],w)
u=a0.x
if(u!=null){t=u.d.bQ()
s=B.a.aT(B.o.u(A.bG(t)),2,"0")
r=B.a.b_(B.o.u(A.by(t)+1),2)
q=A.m(18)
p=A.I(Y.Wd,B.r,2.2)
o=x.V
n=A.a([new A.ad(0,B.G,A.Z(89,B.qp.l()>>>16&255,B.qp.l()>>>8&255,B.qp.l()&255),B.eT,20),new A.ad(0,B.G,A.Z(102,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dn,14)],o)
m=A.ao(e,A.p(e,e,B.f,e,e,new A.o(A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),e,e,e,e,e,B.a6),e,120,e,e,e,e,e,120),e,e,e,-20,-24,e)
l=A.m(10)
k=A.I(Y.Wd,B.r,3.4)
o=A.a([new A.ad(0,B.G,A.Z(166,B.qp.l()>>>16&255,B.qp.l()>>>8&255,B.qp.l()&255),B.dB,10),new A.ad(0,B.G,A.Z(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cJ,6)],o)
o=A.A(A.a([A.p(e,e,B.f,e,e,new A.o(e,e,k,l,o,new A.a7(B.ax,B.aD,B.x,D.cXE,D.cA7,e),B.n),e,42,e,e,e,e,e,56),B.b3,f.b4A(a2,!0)],w),B.m,e,B.e,B.j,0,e,e)
l=A.CX(u.a,1,B.a2,D.eZ5)
k=u.b
j=u.c
i=A.CX("Making $"+A.dA(k*j)+" Daily",1,B.a2,D.eZi)
h=A.CX(f.b_G(k),1,B.a2,D.eSu)
r=A.A(A.a([A.D(A.v(A.a([D.fdl,A.CX(a0.c,1,B.a2,D.aOh)],w),B.F,e,B.e,B.j,0,B.p),1),A.v(A.a([D.fd7,A.d(s+"/"+r,e,e,e,e,e,e,D.aOh,e,e,e)],w),B.dE,e,B.e,B.j,0,B.p)],w),B.m,e,B.e,B.j,0,e,e)
s=A.p(e,e,B.f,A.Z(89,D.wK.l()>>>16&255,D.wK.l()>>>8&255,D.wK.l()&255),e,e,e,1,e,e,e,e,e,e)
j=A.A(A.a([f.apF("INVESTED","$"+A.dA(k),!0),f.apF("DAILY ROI",B.k.aa(j*100,2)+"%",!0),f.apF("DAYS LEFT",""+(261-u.f)+" d",!0)],w),B.m,e,B.hK,B.j,0,e,e)
k=A.dA(u.e)
u=u.f
g=261-u>0?"ACTIVE":"ENDED"
B.d.v(v,A.a([D.fjy,B.ue,A.p(e,new A.an(B.W,e,B.aa,B.q,A.a([m,A.v(A.a([o,B.P,D.fbO,B.bz,l,B.at,i,B.at,h,B.P,r,B.ao,s,B.ao,j,B.at,A.CX("Earned $"+k+" \u2022 Clocked "+u+"/261 \u2022 "+g,1,B.a2,D.eYt)],w),B.F,e,B.e,B.Q,0,B.p)],w),e),B.f,e,e,new A.o(e,e,p,q,n,D.bRx,B.n),e,e,e,e,B.bB,e,e,1/0),B.a5Y],w))}v.push(D.f46)
v.push(B.ue)
B.d.v(v,new A.J(a1,new C.dcp(f,a2),A.T(a1).k("J<1,r>")))
return A.cb(e,B.K,A.bn(!1,A.cd(A.v(v,B.F,e,B.e,B.j,0,B.p),B.q,e,B.y,e,new A.Q(20,10,20,124+d.r.d),e,e,B.ah),!0,!1,B.ag,!0,!0),e,!1,!1,e,e)},
b4A(d,e){var w=null,v=A.Z(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(8),t=A.I(B.j3,B.r,1)
return A.p(w,A.A(A.a([A.W(B.ajf,B.c,w,w,w,16),B.d8,A.d("TAP",w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eF,w,w,w)},
b_G(d){var w=B.a.aT(B.o.u(B.k.V(d*100)),4,"0")
return"****  ****  ****  "+B.a.b_(w,w.length-4)},
apF(d,e,f){var w=null,v=A.Z(217,D.wK.l()>>>16&255,D.wK.l()>>>8&255,D.wK.l()&255)
v=A.d(d,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.v(A.a([v,B.bz,A.CX(e,w,w,A.l(w,w,E.Ad,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),B.F,w,B.e,B.j,0,B.p)},
cfi(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gcRe(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
w=A.I(B.aP,B.r,2)
p=x.V
o=A.a([new A.ad(0,B.G,A.Z(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.Rc,16),new A.ad(0,B.G,A.Z(115,B.ak.l()>>>16&255,B.ak.l()>>>8&255,B.ak.l()&255),B.dn,14),new A.ad(0,B.G,A.Z(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cJ,8)],p)
n=A.ao(d,A.p(d,d,B.f,d,d,new A.o(d,d,d,d,d,new A.bR(B.A,0.5,B.x,d,0,A.a([A.Z(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),A.Z(0,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)],x.O),d,d),B.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=A.m(5)
l=A.I(B.c,B.r,2.2)
k=A.b0(4286436348)
k=A.Z(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=A.Z(B.k.V(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
i=A.b0(4279150057)
h=x.p
p=A.A(A.a([new A.a6(44,44,new A.an(B.W,d,B.aa,B.f,A.a([A.ao(d,A.eA(B.A,0.7853981633974483,A.p(d,d,B.f,d,d,new A.o(d,d,l,m,A.a([new A.ad(0.5,B.G,k,B.J,14),new A.ad(0,B.G,j,B.J,6),new A.ad(0,B.G,A.Z(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new A.u(0,2),4)],p),D.bQd,B.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.e6R],h),d),d),B.b3,e.b4A(b2,!0)],h),B.m,d,B.e,B.j,0,d,d)
a6=A.CX(a6,1,B.a2,D.ePg)
i=A.CX(e.b_G(a3),1,B.a2,D.f2w)
j=A.A(A.a([e.b_7(B.k.aa(2.86,2)+"%"),B.ea,e.b_7("261d")],h),B.m,d,B.e,B.j,0,d,d)
k=A.D(A.v(A.a([D.f5j,A.CX("$"+A.dA(a3),1,B.a2,D.f1j)],h),B.F,d,B.e,B.j,0,B.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=A.A(A.a([k,A.d(m,d,d,d,d,d,d,D.eQ2,d,d,d)],h),B.dE,d,B.e,B.j,0,d,d)
k=A.p(d,d,B.f,A.Z(89,B.bw.l()>>>16&255,B.bw.l()>>>8&255,B.bw.l()&255),d,d,d,1,d,d,d,d,d,d)
l=A.A(A.a([A.D(e.awS("Daily","$"+A.dA(a4)),1),B.ea,A.D(e.awS("Total","$"+A.dA(a4*261)),1),B.ea,A.D(e.awS("Days","261"),1)],h),B.m,d,B.e,B.j,0,d,d)
g=q?d:new C.dco(e,b3,a3,t)
f=B.k.V(127.5)
f=A.fm(d,d,B.bm,A.Z(f,B.ak.l()>>>16&255,B.ak.l()>>>8&255,B.ak.l()&255),A.Z(f,B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255),d,3,d,d,B.aP,d,d,d,d,new A.b7(A.m(10),D.aVE),d,d,d,d,d)
return A.p(d,new A.an(B.W,d,B.aa,B.f,A.a([n,A.v(A.a([p,B.bz,D.fe3,B.bz,a6,B.d0,i,B.fV,j,B.fV,m,B.fV,k,B.fV,l,B.P,new A.a6(1/0,40,A.i9(A.f1(B.A,A.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.eQs,d,d,d),B.f,B.eg),g,f),d)],h),B.F,d,B.e,B.Q,0,B.p)],h),d),B.f,d,d,new A.o(d,d,w,a0,o,D.bS6,B.n),d,d,d,B.kE,D.bnB,d,d,1/0)},
b_7(d){var w=null,v=A.Z(115,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(5),t=A.I(B.cn,B.r,1)
return A.p(w,A.d(d,w,w,w,w,w,w,D.ePF,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.F_,w,w,w)},
awS(d,e){var w=null,v=A.Z(97,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(7),t=A.I(B.aL,B.r,1)
return A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,D.eYR,w,w,w),B.uf,A.f1(B.a3,A.d(e,w,w,w,w,w,w,D.f0n,w,w,w),B.f,B.dt)],x.p),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.lC,w,w,w)}}
C.ah2.prototype={
T(){var w=null,v=A.a([],x._),u=$.aw()
return new C.avW(v,new A.ar(B.as,u),new A.ar(B.as,u),A.mq(0,w,w),new A.hV(),D.QF,C.afR(),A.a([],x.fw),A.aW(x.N),A.mq(0,w,w))}}
C.avW.prototype={
a_(){var w,v,u,t,s,r=this
r.a1()
w=r.a
w.toString
r.d=0
v=A.z7(0,1)
r.e!==$&&A.aO()
r.e=v
r.ay=w.f.aE
w=r.k3=A.bl(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t].a
if(s.length!==0)u.J(0,s)}r.ab1()
r.O8()
r.aph()
r.crS()
r.cs6()
$.aT.x1$.push(new C.cAh(r))
r.a.toString},
O8(){var w=0,v=A.j(x.H),u,t=this,s
var $async$O8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aoC(),$async$O8)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.czC(t,s))
case 1:return A.h(u,v)}})
return A.i($async$O8,v)},
gays(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gO4())return!0
return!1},
gO4(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaTe(){var w,v=this.CW
if(v==null)return B.bx
w=v.by(new A.S(Date.now(),0,!1))
return w.a<0?B.bx:w},
byk(){var w=this
if(w.a.c.w)return
if(w.gO4()){if(!w.cx)w.m(new C.czs(w))}else if(w.cx)w.m(new C.czt(w))},
cll(){this.m(new C.czM(this))},
ty(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ty=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.m(new C.czJ(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.m(new C.czK(t))
w=1
break}w=3
return A.b(C.c6M(o.a,s),$async$ty)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return A.b(C.c6N(t.a.c.a,s),$async$ty)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.m(new C.czL(t,r,q))
t.ctV()
t.byk()
if(r===3)t.XS(r)}case 1:return A.h(u,v)}})
return A.i($async$ty,v)},
XS(d){return this.bZC(d)},
bZC(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$XS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return A.b(C.bBF(q,r,new C.czE(t),d,s.c.a),$async$XS)
case 3:case 1:return A.h(u,v)}})
return A.i($async$XS,v)},
x0(d){return this.bzP(d)},
aph(){return this.x0(!1)},
bzP(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$x0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return A.b(A.a7_(k,C.hfX(l.d)),$async$x0)
case 3:j=m
w=4
return A.b(C.c7b(k),$async$x0)
case 4:s=j.a=f
w=5
return A.b(A.apr(k),$async$x0)
case 5:r=f
w=!s.a&&J.cx(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.Uq(!0,l,q,p)
m.a=s
w=8
return A.b(C.aoE(k,s),$async$x0)
case 8:case 7:w=9
return A.b(C.Tq(k),$async$x0)
case 9:o=f
w=10
return A.b(C.a6m(k),$async$x0)
case 10:n=f
if(t.c==null){w=1
break}t.m(new C.czu(m,t,r,o,n))
case 1:return A.h(u,v)}})
return A.i($async$x0,v)},
Po(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Po=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.O8(),$async$Po)
case 3:s=t.c
if(s==null){w=1
break}r=A.ej(new C.czH(t),!1,null,x.H)
w=4
return A.b(A.a5(s,!1).ce(r),$async$Po)
case 4:w=5
return A.b(t.O8(),$async$Po)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Po,v)},
cw_(){this.m(new C.cA4(this))},
cs6(){var w=this,v=w.go
if(v!=null)v.a9(0)
if(w.a.c.w)return
w.go=A.dC(B.qD,new C.czZ(w))},
ctV(){var w=this,v=w.id
if(v!=null)v.a9(0)
w.id=null
if(!w.gO4()||w.CW==null)return
w.id=A.dC(B.hf,new C.cA1(w))},
crS(){var w=this,v=w.fy
if(v!=null)v.a9(0)
w.fy=A.dC(B.j5,new C.czY(w))
w.EH()},
EH(){return this.ctU()},
ctU(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$EH=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aE
t=4
w=7
return A.b(A.aA(),$async$EH)
case 7:q=e
p=A.aU(J.q(q.a,"app_config"))
if(p!=null&&p.length!==0){o=B.R.aG(0,p,null)
if(x.f.b(o)){m=A.CI(A.a1(o,x.N,x.z)).aE
i.a=m
r.a.f.aE=m}}w=10
return A.b(A.Kr(),$async$EH)
case 10:w=e?8:9
break
case 8:w=11
return A.b(A.aNS(),$async$EH)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aE=l
w=14
return A.b(q.ar("String","app_config",B.R.ao(k.ad(),null)),$async$EH)
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
break}if(i.a!==r.ay)r.m(new C.cA_(i,r))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$EH,v)},
b3v(){B.d.b1(this.f,new C.czX())},
ab1(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ab1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Mf(t.a.c.a),$async$ab1)
case 3:q=e
if(t.c==null){w=1
break}s=A.a([],x._)
if(J.cx(q)){B.d.v(s,q)
B.d.b1(s,new C.czz())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(A.E(["role","ai","text",r,"at",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z))}t.m(new C.czA(t,s))
t.a0A(!0)
A.bN(B.j4,new C.czB(t),x.H)
case 1:return A.h(u,v)}})
return A.i($async$ab1,v)},
aew(){var w=0,v=A.j(x.H),u=this
var $async$aew=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ams(u.a.c.a,u.f),$async$aew)
case 2:return A.h(null,v)}})
return A.i($async$aew,v)},
br(d){this.bE(d)},
q(){var w,v=this,u=v.fy
if(u!=null)u.a9(0)
u=v.go
if(u!=null)u.a9(0)
u=v.id
if(u!=null)u.a9(0)
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
aa1(d){var w,v=this
v.m(new C.czx(v,d))
w=v.e
w===$&&A.c()
if(w.f.length!==0)w.AJ(d,B.cq,B.kD)
else $.aT.x1$.push(new C.czy(v,d))
if(d===0)v.a0A(!0)
if(d===1)v.cni(!0)},
a0A(d){$.aT.x1$.push(new C.czP(this,d))},
ay5(){return this.a0A(!1)},
a_U(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_U=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0a(),$async$a_U)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==B.a.i(t.a.f.r))t.m(new C.czI(t))
case 1:return A.h(u,v)}})
return A.i($async$a_U,v)},
mN(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$mN=A.e(function(c8,c9){if(c8===1){s.push(c9)
w=t}for(;;)switch(w){case 0:c5=B.a.i(q.r.a.a)
if(J.ac(c5)===0){w=1
break}a8=q.a
a9=a8.c
w=!a9.w?3:4
break
case 3:b0=a8.f.xr
w=b0>0?5:6
break
case 5:w=9
return A.b(C.aox(a9.a,b0),$async$mN)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return A.b(q.ty(),$async$mN)
case 10:q.m(new C.czQ(q))
w=1
break
case 8:w=11
return A.b(q.ty(),$async$mN)
case 11:if(q.c!=null&&q.ch===3)q.XS(3)
case 6:case 4:q.m(new C.czR(q,c5))
C.Td(q.a.c.a,"user",c5)
q.ay5()
t=13
a8={}
w=16
return A.b(q.a_U(),$async$mN)
case 16:b1=B.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return A.b(A.a0a(),$async$mN)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.m(new C.czS(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.bzK("",null)
q.m(new C.czT(q,p))
C.Td(q.a.c.a,"ai",p)
q.ay5()
r=[1]
w=14
break}o=A.mY(a9)
a9=q.a
n=""
m=C.hfX(a9.d)
w=C.hfQ(c5)?20:21
break
case 20:w=22
return A.b(C.c7a(q.a.c.a),$async$mN)
case 22:q.db=c9
w=23
return A.b(q.x0(!0),$async$mN)
case 23:case 21:w=24
return A.b(A.a7_(q.a.c.a,m),$async$mN)
case 24:l=c9
k=C.hxG(l)
a9=k
b2=Date.now()
b3=new A.S(b2,0,!1).bQ()
b2=B.a.aT(B.o.u(A.bG(b3)),2,"0")
b4=B.a.aT(B.o.u(A.bQ(b3)),2,"0")
b5=B.a.aT(B.o.u(A.dh(b3)),2,"0")
b6=B.a.aT(B.o.u(A.fY(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+A.by(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return A.b(C.Tq(q.a.c.a),$async$mN)
case 25:i=c9
h=C.h0e(i,25)
w=26
return A.b(C.a6m(q.a.c.a),$async$mN)
case 26:g=c9
f=C.h1S(g)
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
return A.b(C.afS(a9,q.a.c.a,c5),$async$mN)
case 27:a0=c9
a1=""
if(C.hfQ(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:B.a.i(b2).length!==0)===!0){b2.toString
b8=B.a.i(b2)}else{a9=a9.c
b8=B.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=A.t(d)
b4=A.t(j)
b5=q.a.c.w?"\n"+C.hTZ(m)+"\n":""
b6=J.ac(n)!==0?"\n"+A.t(n)+"\n":""
b9=J.ac(a0)!==0?"\n"+A.t(a0)+"\n":""
c0=A.t(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hs1(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+A.t(c5)
w=28
return A.b(A.qC(o,a2,B.hj,null),$async$mN)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.bzK(a8.a,a3.a)
a4=c2
a5=A.hfc(a4)
c3=a5.a
a8.b=c3
if(B.d.gam(c3)){a9=A.B(C.hWH(c5),x.an)
a6=a9
J.h_(a6,C.hWI(c5))
J.h_(a6,C.hWJ(c5))
J.h_(a6,A.heF(c5))
J.h_(a6,C.hWM(c5,q.a.c.w))
a8.b=a6}c3=C.hVV(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return A.b(A.ag7(c3,a6,m,q.a.c.a),$async$mN)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.m(new C.czU(a8,q,a7))
C.Td(q.a.c.a,"ai",a7)
if(J.cx(a8.b)&&q.c!=null)q.Jf(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.m(new C.czV(q))
C.Td(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.m(new C.czW(q))
q.ay5()
q.aew()
if(!q.a.c.w)q.ty()
w=r.pop()
break
case 15:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$mN,v)},
ceh(d){var w=A.V(x.N,x.z)
w.n(0,"type",d.a)
w.v(0,d.b)
return w},
cei(d){var w,v,u,t,s,r,q,p=J.q(d,"phoneActions")
if(!x.j.b(p))return B.i9
w=A.a([],x.Z)
for(v=J.aX(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gU(v)
if(u.b(r)){q=A.cah(A.a1(r,t,s))
if(q!=null)w.push(q)}}return w},
Jf(d){return this.clQ(d)},
clQ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Jf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J.aX(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gU(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return A.b(C.ag2(p,o,new C.czN(t,p)),$async$Jf)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return A.b(A.G5(p,null,o,!1,!0,t.a.c.a),$async$Jf)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.I(r).f
p.R(new A.b1(new A.x(m,null,null,null,null,null,null,null,null,null,null,null),B.cb,null,null,null,null,null,null,null,null,null,null,null,B.l3,!1,null,null,null,B.q,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return A.b(A.G5(p,l.f,o,k,n,j),$async$Jf)
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
return A.b(C.aWR(p,A.a([new C.r6("out_"+1000*o,new A.S(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$Jf)
case 14:t.aph()
case 13:p=t.c.I(r).f
p.R(new A.b1(new A.x(m,null,null,null,null,null,null,null,null,null,null,null),B.cZ,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null))
w=3
break
case 4:case 1:return A.h(u,v)}})
return A.i($async$Jf,v)},
R6(d){return this.cun(d)},
cun(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$R6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return A.b(C.ag2(d,n,new C.cA3(t)),$async$R6)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return A.b(A.G5(d,null,n,!1,!0,t.a.c.a),$async$R6)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.I(x.q).f.R(A.b2(null,null,null,B.cb,null,B.q,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.l3,null,null,null,null,null,null,null,null,null,null))
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
return A.b(A.G5(d,q.f,r,p,n,o),$async$R6)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.I(x.q).f.R(A.b2(null,null,null,B.cZ,null,B.q,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$R6,v)},
cni(d){$.aT.x1$.push(new C.czO(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.N(d).ax.a===B.H,j=k?B.da:B.Aj,i=m.d
i===$&&A.c()
w=x.O
w=k?A.a([B.ae_,D.b9I],w):A.a([B.aI,B.wG],w)
v=A.m(22)
u=A.a([new A.ad(0,B.G,A.Z(71,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),B.cy,16)],x.V)
t=m.a.c.w?m.gc9Y():l
s=A.Z(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
r=A.I(B.c_,B.r,1.5)
t=A.aE(l,A.p(l,C.fRg(m.a.f.Q,48),B.f,l,l,new A.o(s,l,r,l,l,l,B.a6),l,48,l,l,l,l,l,48),B.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,B.a8)
r=A.d("NGMY Helper",l,1,B.a2,l,l,l,B.du,l,l,l)
s=A.p(l,l,B.f,l,l,D.aXM,l,8,l,l,l,l,l,8)
if(m.gays()&&m.d===0)q=m.gO4()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=A.p(l,A.A(A.a([t,B.bf,A.D(A.v(A.a([r,B.bz,A.A(A.a([s,B.bp,A.D(A.d(q,l,1,B.a2,l,l,l,A.l(l,l,A.Z(B.k.V(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,B.cs,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,B.mj,l,l,l,new C.cA9(d),l,l,l,l,l,l)],p),B.m,l,B.e,B.j,0,l,l),B.f,l,l,new A.o(l,l,l,v,u,new A.a7(B.ax,B.aD,B.x,w,l,l),B.n),l,l,l,F.afJ,D.boh,l,l,l)
v=k?D.rP:B.c
u=A.m(14)
t=A.I(k?B.bF:B.e2,B.r,1)
u=A.p(l,A.A(A.a([m.bCv(),m.cu6(1,B.lE,"Music")],p),B.m,l,B.e,B.j,0,l,l),B.f,l,l,new A.o(v,l,t,u,l,l,B.n),l,l,l,l,B.en,l,l,l)
t=m.e
t===$&&A.c()
if(m.gays()){v=A.a([],p)
if(m.gO4()){s=A.Z(38,B.cZ.l()>>>16&255,B.cZ.l()>>>8&255,B.cZ.l()&255)
r=A.m(12)
q=A.I(A.Z(115,B.cZ.l()>>>16&255,B.cZ.l()>>>8&255,B.cZ.l()&255),B.r,1)
v.push(new A.C(B.Lr,A.p(l,A.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hvZ(m.gaTe())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.f_S,B.L,l,l),B.f,l,l,new A.o(s,l,q,r,l,l,B.n),l,l,l,l,B.eh,l,l,1/0),l))}if(m.cy&&!m.gO4()){s=A.Z(31,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
r=A.m(12)
q=A.m(12)
o=A.W(B.pv,k?B.iM:B.hd,l,l,l,16)
v.push(new A.C(B.Lr,A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,new A.C(B.eh,A.A(A.a([o,B.bp,A.d("Back to NGMY Helper AI",l,l,l,l,l,l,A.l(l,l,k?B.iM:B.hd,l,l,l,l,l,l,l,l,12,l,l,B.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),B.m,l,B.ba,B.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gclk(),l,l,l,l,l,l,l),B.f,s,0,l,l,l,l,l,B.af),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcvZ():l
v.push(A.D(new C.aoA(s,q,new C.cAa(),r,o,l),1))
v=A.v(v,B.m,l,B.e,B.j,0,B.p)}else v=m.bCw(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.h2L(r)
t=A.a([w,B.ac,new A.C(B.hH,u,l),B.P,A.D(A.h3K(A.a([v,new C.aoD(q,o,n,new C.cAb(m,d),s,l)],p),B.q,t,B.y,new C.cAc(m),l),1)],p)
if(m.d===0&&!m.gays()){w=A.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a1D:D.a1_
w.push(new A.a6(l,36,A.hE(l,new C.cAd(m),v.length,l,l,B.aQ,new C.cAe(),!1),l))}if(m.ax&&m.f.length<=1)w.push(B.P)
v=m.r
u=A.l(l,l,k?B.c:B.bh,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=A.l(l,l,k?B.ay:B.dz,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?B.w:B.c
r=A.Z(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=A.m(22)
o=A.m(22)
n=k?B.b5:B.f7
u=A.D(A.aL(l,B.T,!1,l,!0,B.q,l,A.aM(),v,l,l,l,l,l,2,A.br(l,new A.b4(4,q,B.Y),l,B.AC,l,l,l,l,!0,new A.b4(4,o,new A.az(n,1,B.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.y,!0,l,!0,l,!1,l,B.ai,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cAf(m),l,!1,l,l,!1,l,!0,l,B.a9,l,l,l,l,l,l,l,l,l,l,l,u,!0,B.a5,l,B.am,l,B.aNc,l,l),1)
s=m.at
r=s?l:m.gcoi()
w.push(A.A(A.a([u,new A.Ic(v,B.aI,l),B.bp,A.aF(!1,B.a1,!0,l,A.aK(!1,l,!0,new A.a6(44,44,s?D.e0y:P.alg,l),B.cL,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),B.f,B.aI,0,l,l,B.cL,l,l,B.af)],p),B.dE,l,B.e,B.j,0,l,l))
w=A.v(w,B.m,l,B.e,B.Q,0,B.p)
v=k?B.l_:B.c
t.push(A.tH(B.rA,A.p(l,new A.C(B.EK,w,l),B.f,l,l,new A.o(v,l,A.I(k?A.Z(41,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Z(18,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.r,1),B.rA,l,l,B.n),l,l,l,l,l,l,l,l),14,!1))}return new A.Vl(i,new C.cAg(m),A.cb(l,j,A.bn(!0,A.v(t,B.m,l,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),l,!1,!1,l,l),l)},
bCv(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===0
p=this.c
p.toString
v=A.N(p).ax.a===B.H
if(w)p=A.Z(B.k.V(255*(v?0.25:0.12)),B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
else p=B.K
u=A.m(11)
t=w?A.I(A.Z(B.k.V(127.5),B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),B.r,1):q
s=A.W(B.tw,w?B.aI:B.cU,q,q,q,17)
if(w)r=v?B.c:B.aA
else r=B.cU
return A.D(A.aE(q,A.dg(q,A.A(A.a([s,B.bp,A.d("Chat",q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.ba,B.j,0,q,q),q,q,B.bb,new A.o(p,q,t,u,q,q,B.n),B.eE,q,q,q,B.uT,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.czv(this),q,q,q,q,q,q,!1,B.a8),1)},
cu6(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===d
p=this.c
p.toString
v=A.N(p).ax.a===B.H
if(w)p=A.Z(B.k.V(255*(v?0.25:0.12)),B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
else p=B.K
u=A.m(11)
t=w?A.I(A.Z(B.k.V(127.5),B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),B.r,1):q
s=A.W(e,w?B.aI:B.cU,q,q,q,17)
if(w)r=v?B.c:B.aA
else r=B.cU
r=A.a([s,B.bp,A.d(f,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return A.D(A.aE(q,A.dg(q,A.A(r,B.m,q,B.ba,B.j,0,q,q),q,q,B.bb,new A.o(p,q,t,u,q,q,B.n),B.eE,q,q,q,B.uT,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cA2(this,d),q,q,q,q,q,q,!1,B.a8),1)},
bCw(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.beT:A.Z(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
w=A.m(18)
v=A.I(d?B.dq:B.aL,B.r,1)
u=q===0?1:q
return A.p(s,A.k0(!0,s,t.ok,new C.czw(t,e,d),u,s,B.bU,s,s,!1,!1),B.f,s,s,new A.o(r,s,v,w,s,s,B.n),s,s,s,B.hH,s,s,s,s)},
aMU(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a8(d),m=J.y(n.h(d,"role"),"user"),l=m?B.i9:this.cei(d),k=m?B.lK:B.e,j=x.p,i=A.a([],j),h=!m
if(h)B.d.v(i,A.a([new A.a6(28,28,C.fRg(this.a.f.Q,28),o),B.ab],j))
w=m?B.dE:B.F
j=A.a([],j)
if(h)j.push(D.e0O)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=B.aI
else u=e?B.Wp:B.aP
t=m?16:4
s=m?4:16
if(m)r=o
else r=A.I(e?B.bF:B.aL,B.r,1)
q=A.a([new A.ad(0,B.G,A.Z(10,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dB,6)],x.V)
if(f)n=A.d("typing\u2026",o,o,o,o,o,o,A.l(o,o,e?B.ay:B.dz,o,o,o,o,o,o,o,o,12,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=B.c
else p=e?B.ad:B.bm
p=A.d(n,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(A.fNm(m,A.p(o,n,B.f,o,o,new A.o(u,o,r,new A.bp(B.kT,B.kT,new A.aV(t,t),new A.aV(s,s)),q,o,B.n),o,o,o,o,Ad.EL,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(A.hfh(l,e,this.gcum()))
i.push(new A.dm(1,B.ci,A.v(j,w,o,B.e,B.j,0,B.p),o))
if(m)i.push(B.d8)
return new A.C(B.db,A.A(i,B.dE,o,k,B.j,0,o,o),o)},
bCu(d,e){return this.aMU(d,e,!1)}}
C.aIW.prototype={
a_(){this.a1()
$.yf().aM(0,this.gDW())},
q(){$.yf().a3(0,this.gDW())
this.a2()}}
C.aIX.prototype={
a_(){this.a1()
$.yf().aM(0,this.gDW())},
q(){$.yf().a3(0,this.gDW())
this.a2()}}
C.aIY.prototype={
a_(){this.a1()
$.yf().aM(0,this.gDW())},
q(){$.yf().a3(0,this.gDW())
this.a2()}}
C.aJU.prototype={
a_(){this.a1()
$.yf().aM(0,this.gDW())},
q(){$.yf().a3(0,this.gDW())
this.a2()}}
C.Va.prototype={
a4(){return"NgmySnapshotResolveOutcome."+this.b}}
C.amc.prototype={
T(){return new C.aAQ()}}
C.aAQ.prototype={
a_(){var w,v=this
v.a1()
w=v.a
v.d=w.d
v.e=A.bl(w.e,!0,x.o)
v.f=v.a.f},
kI(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
zW(d,e){return this.czq(d,e)},
czq(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$zW=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dsU(q,e))
t=3
w=6
return A.b(d.$0(),$async$zW)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.m(new C.dsV(q))
w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$zW,v)},
Al(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Al=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=t.d
q===$&&A.c()
w=3
return A.b(A.uq(r,q),$async$Al)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dsL(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Al,v)},
a8A(){var w=0,v=A.j(x.gE),u,t=this,s,r,q,p
var $async$a8A=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Al(),$async$a8A)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&A.c()
q=t.e
q===$&&A.c()
p=t.f
p===$&&A.c()
u=A.N2(s,A.Jj(A.bWD(r,q,s,p).eJ(),null,"  "))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a8A,v)},
WB(){var w=0,v=A.j(x.H),u,t=this,s
var $async$WB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oW(s,t.a.c,!1),$async$WB)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zW(new C.dsJ(t),"Preparing download\u2026"),$async$WB)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WB,v)},
Y2(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Y2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oW(s,t.a.c,!1),$async$Y2)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zW(new C.dsT(t),"Creating QR code\u2026"),$async$Y2)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y2,v)},
Y1(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hOS(r),$async$Y1)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.zW(new C.dsI(t,s),"Looking up code\u2026"),$async$Y1)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y1,v)},
abR(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$abR=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wN.c4().Lo(B.PK,B.tq,!0),$async$abR)
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
p=A.jk(p,0,null)
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
case 6:u=A.G1()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$abR,v)},
zA(d,e,f){return this.bEP(d,e,f)},
aO7(d,e){return this.zA(d,!1,e)},
bEO(d){return this.zA(d,!1,!1)},
bEP(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zA=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Al(),$async$zA)
case 3:if(t.c==null){w=1
break}if(!C.bWI(d,t.a.c,null)){t.kI(C.bWJ(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&A.c()
s=!C.hrJ(d,s)}if(s){t.kI(y.B)
w=1
break}r=d.as
q=J.ck(r)
s=t.c
s.toString
w=4
return A.b(C.hP4(s,q,t.a.c,d),$async$zA)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=A.lD(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,B.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&A.c()
r=o}w=5
return A.b(A.ra(s,p,r,!1,null,null,d.ax),$async$zA)
case 5:if(t.c==null){w=1
break}t.m(new C.dsH(t,p,r,d))
t.kI("Restored your local Growth Income. Go back to see it updated.")
case 1:return A.h(u,v)}})
return A.i($async$zA,v)},
abQ(){var w=0,v=A.j(x.H),u=this
var $async$abQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.zW(new C.dsK(u),"Reading file\u2026"),$async$abQ)
case 2:return A.h(null,v)}})
return A.i($async$abQ,v)},
VV(d){return this.bG5(d)},
bG5(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$VV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&A.c()
s=new A.d1("local_qr_dep_"+1000*r,q.a,d,B.fq,B.fb,"Admin deposit ($"+A.dA(d)+")",null,null,B.ck,new A.S(Date.now(),0,!1))
C.c9c(t.d,s)
q=t.e
q===$&&A.c()
r=A.B(q,x.o)
r.push(s)
w=3
return A.b(A.ra(t.a.c,t.d,r,!0,null,null,null),$async$VV)
case 3:w=4
return A.b(t.Al(),$async$VV)
case 4:if(t.c==null){w=1
break}t.kI("Deposited $"+A.dA(d)+" to your local wallet.")
case 1:return A.h(u,v)}})
return A.i($async$VV,v)},
b2V(d){var w=null
return A.c9(w,w,!0,w,new C.dsR(),d,w,!0,!0,x.N)},
V1(d){return this.bye(d)},
bye(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$V1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return A.b(t.VV(d.b),$async$V1)
case 5:w=1
break
case 4:s=d.c
t.kI(s==null?"Could not apply deposit.":s)
case 1:return A.h(u,v)}})
return A.i($async$V1,v)},
Eg(d){return this.cj_(d)},
cj_(d){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Eg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Al(),$async$Eg)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return A.b(C.aZJ(d,t.a.c),$async$Eg)
case 4:s=f
if(!s.a){u=!1
w=1
break}if(s.b){t.kI("This deposit code was already used.")
u=!0
w=1
break}if(s.d){t.kI(y.y)
u=!0
w=1
break}if(s.c){t.kI(y.j)
u=!0
w=1
break}r=t.c
if(r==null){u=!0
w=1
break}w=5
return A.b(t.b2V(r),$async$Eg)
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
return A.b(C.c95(d,o,n.a,r,p),$async$Eg)
case 7:w=6
return A.b(t.V1(f),$async$Eg)
case 6:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Eg,v)},
Eh(d){return this.cj0(d)},
cj0(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Eh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Al(),$async$Eh)
case 3:if(t.c==null){w=1
break}w=4
return A.b(C.c94(d,t.a.c),$async$Eh)
case 4:s=f
if(!s.a){t.kI(y.m)
w=1
break}if(s.b){t.kI("This deposit code was already used.")
w=1
break}if(s.d){t.kI(y.y)
w=1
break}if(s.c){t.kI(y.j)
w=1
break}r=t.c
if(r==null){w=1
break}w=5
return A.b(t.b2V(r),$async$Eh)
case 5:q=f
if(q==null||B.a.i(q).length===0){w=1
break}r=t.a.c
p=B.a.i(q)
o=t.e
o===$&&A.c()
n=t.d
n===$&&A.c()
w=7
return A.b(C.UL(o,n.a,d,r,p),$async$Eh)
case 7:w=6
return A.b(t.V1(f),$async$Eh)
case 6:case 1:return A.h(u,v)}})
return A.i($async$Eh,v)},
On(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$On=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Co()){t.kI("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).ce(A.ej(new C.dsM(),!0,null,x.N)),$async$On)
case 3:r=e
if(r==null||B.a.i(r).length===0){w=1
break}w=B.a.a0(B.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return A.b(t.zW(new C.dsN(t,r),"Applying deposit\u2026"),$async$On)
case 6:w=1
break
case 5:w=7
return A.b(t.zW(new C.dsO(t,r),"Loading\u2026"),$async$On)
case 7:case 1:return A.h(u,v)}})
return A.i($async$On,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.N(d).ax.a===B.H,m=n?B.j0:B.ph,l=n?B.c:B.M,k=n?B.aR:B.ak,j=n?B.bF:B.w.j(0.06),i=x.p
j=A.A(A.a([A.aK(!1,o,!0,A.p(B.A,A.W(B.eB,l,o,o,o,16),B.f,o,o,new A.o(j,o,o,o,o,o,B.a6),o,38,o,o,o,o,o,38),B.cL,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dsW(d),o,o,o,o,o,o,o)],i),B.m,o,B.e,B.j,0,o,o)
w=A.d("Backup & Restore",o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,B.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=A.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,B.cs,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=A.D(new C.a_w(D.bzC,"Download",E.a1T,u?o:p.gbLd(),o),1)
t=A.A(A.a([t,B.ev,A.D(new C.a_w(B.jc,"Show QR",D.daK,u?o:p.gc0e(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r
s=A.D(new C.a_w(D.bzD,"Upload",B.a1k,u?o:p.gc0c(),o),1)
s=A.A(A.a([s,B.ev,A.D(new C.a_w(B.iP,"Scan QR",D.cNE,u?o:p.gc0d(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r?o:p.gc0b()
r=n?B.c.j(0.06):B.aU.j(0.08)
q=A.m(16)
q=A.a([A.cB(A.a([j,B.az,w,B.P,v,B.kq,t,B.az,s,B.az,new C.bpX(B.qR,"Enter Code",B.a0F,u,o),B.kq,A.p(o,A.A(A.a([A.W(B.h4,B.aU,o,o,o,18),B.aw,A.D(A.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.F,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(r,o,o,q,o,o,B.n),o,o,o,o,B.j7,o,o,o)],i),o,Ac.LF,o,o,B.ah,!1)],i)
if(p.r){j=n?B.i3:B.c
w=p.w
if(w==null)w="Working\u2026"
q.push(A.ao(0,A.aF(!1,B.a1,!0,o,new A.C(B.AG,A.A(A.a([I.aMa,B.bf,A.D(A.d(w,o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.m,o,B.e,B.j,0,o,o),o),B.f,j,8,o,o,o,o,o,B.af),o,o,0,0,o,o))}return A.cb(o,m,A.bn(!1,new A.an(B.W,o,B.aa,B.q,q,o),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)}}
C.a_w.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ad(0,B.G,B.d.gal(s).j(0.35),B.dn,16)],x.V),p=B.c.j(0.22)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(v,A.v(A.a([A.p(v,A.W(w.c,B.c,v,v,v,30),B.f,v,v,new A.o(p,v,v,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.ac,A.d(w.d,v,v,v,v,v,v,B.rq,v,v,v)],x.p),B.m,v,B.ba,B.j,0,B.p),B.f,v,v,new A.o(v,v,v,r,q,new A.a7(B.ax,B.aD,B.x,s,v,v),B.n),v,140,v,v,B.bU,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.af)}}
C.bpX.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ad(0,B.G,B.d.gal(s).j(0.35),B.dn,16)],x.V),p=B.c.j(0.22)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(v,A.A(A.a([A.p(v,A.W(w.c,B.c,v,v,v,24),B.f,v,v,new A.o(p,v,v,v,v,v,B.a6),v,44,v,v,v,v,v,44),B.ev,A.d(w.d,v,v,v,v,v,v,B.rq,v,v,v)],x.p),B.m,v,B.ba,B.j,0,v,v),B.f,v,v,new A.o(v,v,v,r,q,new A.a7(B.ax,B.aD,B.x,s,v,v),B.n),v,v,v,v,D.bqm,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.af)}}
C.Za.prototype={
T(){return new C.bh8()}}
C.bh8.prototype={
gauL(){var w=this.e
return w===$?this.e=this.a.d:w},
a_(){var w=this
w.a1()
w.Q2()
w.f=A.dC(B.nD,new C.dt_(w))},
q(){var w=this.f
if(w!=null)w.a9(0)
this.a2()},
Q2(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Q2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return A.b(A.uq(q.e,q.f),$async$Q2)
case 3:q=e.a
s=A.bWD(q[3],q[1],t.a.e,q[4])
w=4
return A.b(A.N2(t.a.e,A.Jj(s.eJ(),null,"  ")),$async$Q2)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.m(new C.dsX(t,r))
case 1:return A.h(u,v)}})
return A.i($async$Q2,v)},
B(d){var w=this,v=null,u=A.N(d).ax.a===B.H,t=u?B.j0:B.ph,s=u?B.i3:B.c,r=u?B.c:B.bh,q=A.eD(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,B.aP6,v,v,v,1,v,!0),p=A.m(24),o=A.I(B.aU.j(0.35),B.r,1),n=w.d,m=A.pA(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,B.c),l=A.d("Code: "+w.gauL(),v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=A.m(20),j=B.aU.j(0.12),i=A.m(20),h=x.p
i=A.aK(!1,k,!0,A.p(v,A.A(A.a([A.W(B.fJ,B.aU,v,v,v,14),B.bp,A.d("Copy code",v,v,v,v,v,v,A.l(v,v,B.aU,v,v,v,v,v,v,v,v,12,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),B.m,v,B.e,B.Q,0,v,v),B.f,v,v,new A.o(j,v,v,i,v,v,B.n),v,v,v,v,B.ma,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dsY(w,d),v,v,v,v,v,v,v)
return A.cb(q,t,new A.C(B.a9,A.v(A.a([A.D(A.p(v,A.v(A.a([B.P,m,B.bv,l,B.P,i,B.az,A.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,A.l(v,v,u?B.aR:B.ak,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v)],h),B.m,v,B.ba,B.j,0,B.p),B.f,v,v,new A.o(s,v,o,p,v,v,B.n),v,v,v,v,B.a9,v,v,1/0),1),B.aO,new A.a6(1/0,v,A.bJ(B.ze,new C.dsZ(d),A.bk(B.aU,v,v,v,v,B.fL,v,v,v,v,v,v)),v)],h),B.m,v,B.e,B.j,0,B.p),v),v,!1,!1,v,v)}}
C.Zb.prototype={
T(){return new C.bh9(A.yM(B.x1,B.nn,B.tM))}}
C.bh9.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.cb(A.eD(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fjT,w,w,w,1,w,!0),B.w,A.yL(this.d,B.bQ,new C.dt0(this,d)),w,!1,!1,w,w)}}
C.adj.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.N(a0).ax.a===B.H,k=l?B.i3:B.c,j=l?B.c:B.M,i=l?B.aR:B.ak,h=l?B.b5:B.e2,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=A.m(26)
w=A.I(B.aU.j(0.35),B.r,1)
v=A.a([new A.ad(0,B.G,B.aU.j(0.16),B.jX,36)],x.V)
u=A.p(m,D.bFD,B.f,m,m,new A.o(m,m,m,A.m(18),B.a1S,D.bPz,B.n),m,58,m,m,m,m,m,58)
t=A.d("Restore local backup?",m,m,m,m,m,m,A.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,B.u,m,m,!0,m,-0.3,m,m,m,m,m,m),B.L,m,m)
s=A.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,A.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),B.L,m,m)
r=l?B.j0:B.ph
q=A.m(18)
p=A.I(B.aU.j(0.22),B.r,1)
o=x.p
g=A.a([new C.Pc("Account",B.a.i(this.d),i,j,m),B.S,new C.Pc("Balance","$"+A.dA(g.d),i,j,m)],o)
if(d!=null&&B.a.i(d).length!==0)B.d.v(g,A.a([B.S,new C.Pc("Investment",d,i,j,m)],o))
g.push(B.S)
g.push(new C.Pc("Saved on",""+A.bG(f)+"/"+A.bQ(f)+"/"+A.by(f),i,j,m))
g.push(B.S)
g.push(new C.Pc("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=A.p(m,A.v(g,B.F,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bU,m,m,1/0)
r=B.aJ.j(l?0.14:0.12)
q=A.m(14)
p=A.I(B.aJ.j(0.35),B.r,1)
n=A.W(B.xM,l?B.aM:B.dj,m,m,m,16)
return A.eE(m,B.K,new A.cU(B.Ut,A.bZ(new A.C(B.xj,A.v(A.a([u,B.aO,t,B.P,s,B.bv,g,B.az,A.p(m,A.A(A.a([n,B.ab,A.D(A.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,A.l(m,m,l?B.bJ:B.iq,m,m,m,m,m,m,m,m,11.5,m,m,B.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),B.F,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.eh,m,m,1/0),B.d5,A.A(A.a([A.D(A.dT(B.ng,new C.ePt(a0),A.de(m,m,m,m,m,m,m,m,m,j,m,m,B.cf,m,new A.b7(A.m(14),B.Y),new A.az(h,1,B.r,-1),m,m,m,m)),1),B.aw,A.D(A.bJ(D.f3s,new C.ePu(a0),A.bk(B.aU,m,m,m,m,m,B.cf,m,new A.b7(A.m(14),B.Y),m,m,m)),2)],o),B.m,m,B.e,B.j,0,m,m)],o),B.m,m,B.e,B.Q,0,B.p),m),new A.o(k,m,w,e,v,m,B.n),B.bd),m),m,m,m,B.eA,B.d_,m,m,m)}}
C.Pc.prototype={
B(d){var w=this,v=null
return A.A(A.a([new A.a6(92,v,A.d(w.c,v,v,v,v,v,v,A.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),A.D(A.d(w.d,v,v,v,v,v,v,A.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,B.I,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.F,v,B.e,B.j,0,v,v)}}
C.Yi.prototype={
T(){return new C.ay7(new A.ar(B.as,$.aw()),A.kg(!0,null,!0,!0,null,null,!1))}}
C.ay7.prototype={
a_(){this.a1()
$.aT.x1$.push(new C.d2_(this))},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.e.q()
this.a2()},
c0g(){var w,v=this.c
v.toString
w=B.a.i(this.d.a.a)
A.a5(v,!1).N(w)
return null},
B(d){var w=this,v=null,u=A.N(d).ax.a===B.H,t=u?B.i3:B.c,s=u?B.c:B.M,r=u?B.aR:B.ak,q=u?B.j0:B.ph,p=u?B.b5:B.e2,o=A.m(24),n=A.I(B.aU.j(0.35),B.r,1),m=A.a([new A.ad(0,B.G,B.aU.j(0.18),B.fK,32)],x.V),l=A.p(v,Ab.alZ,B.f,v,v,new A.o(v,v,v,A.m(18),B.a1S,D.bSg,B.n),v,56,v,v,v,v,v,56),k=A.d("Enter restore code",v,v,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,B.u,v,v,!0,v,-0.3,v,v,v,v,v,v),B.L,v,v),j=A.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),B.L,v,v),i=A.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,B.I,v,v,!0,v,8,v,v,v,v,v,v),h=A.a([new A.u0(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bpr(new C.d1X())],x.G),g=A.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,B.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return A.eE(v,B.K,new A.cU(A4.JA,A.bZ(new A.C(B.xj,A.v(A.a([l,B.aO,k,B.P,j,B.e0,A.aL(!1,B.T,!1,v,!0,B.q,v,A.aM(),w.d,v,v,v,v,v,2,A.br(v,v,v,B.ER,v,v,"",v,!0,new A.b4(4,A.m(16),new A.az(p,1,B.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new A.b4(4,A.m(16),D.aVC),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!1,v,!1,w.e,B.ai,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.d1Y(w),v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,i,!0,B.L,v,B.lR,v,v,v,v),B.e0,A.A(A.a([A.D(A.dT(B.ng,new C.d1Z(d),A.de(v,v,v,v,v,v,v,v,v,s,v,v,B.cf,v,new A.b7(A.m(14),B.Y),new A.az(p,1,B.r,-1),v,v,v,v)),1),B.aw,A.D(A.bJ(D.f6Z,w.gc0f(),A.bk(B.aU,v,v,v,v,v,B.cf,v,new A.b7(A.m(14),B.Y),v,v,v)),2)],f),B.m,v,B.e,B.j,0,v,v)],f),B.m,v,B.e,B.Q,0,B.p),v),new A.o(t,v,n,o,m,v,B.n),B.bd),v),v,v,v,B.LH,B.d_,v,v,v)}}
C.amH.prototype={
T(){return new C.bhf(B.cI)},
hq(d){return this.x.$1(d)},
bp(){return this.y.$0()}}
C.bhf.prototype={
a_(){var w,v=this
v.a1()
w=v.a
w.toString
$.t5=$.t5+1
v.r=B.o.O(B.o.D(C.ftG(w.e,w.d.y2),1,600))
w=v.a
if(!J.lk(w.d.y2,w.e))v.r=C.hUr(v.a.e)
v.w=A.dC(B.hf,new C.dzl(v))},
q(){var w=this.w
if(w!=null)w.a9(0)
this.cd8()
C.aYv()
this.a2()},
cd8(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:B.k.D(r.e/w,0,1)
if(v<=0)return
u=A.nO(B.k.aa(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=B.o.u(1000*Date.now())
s=r.a
w.hq(new A.d1(t,s.c.a,u,B.fB,B.fb,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,B.ck,new A.S(Date.now(),0,!1)))
r.a.bp()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.un(u,q,"Left early \xb7 +$"+B.k.aa(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
Jn(d,e){return this.coV(d,e)},
b2z(d){return this.Jn(!1,d)},
coU(d){return this.Jn(d,"")},
coV(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Jn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}t.x=!0
s=t.w
if(s!=null)s.a9(0)
if(d)r=1
else{s=t.f
r=s<=0?0:B.k.D(t.e/s,0,1)}w=r<=0?3:4
break
case 3:s=t.a
q=s.c.a
p=s.f
s=s.w
o=e.length===0
C.un(s,null,o?"No progress":e,q,p,s,null,!1)
s=t.c
if(s==null){w=1
break}w=5
return A.b(C.bBz(s,C.bBc(),C.fUJ(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$Jn)
case 5:w=1
break
case 4:n=A.nO(B.k.aa(t.a.w*1.46*r,2))
m=r>=1
t.m(new C.dzc(t,n,r))
s=B.o.u(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new A.d1(s,p,n,B.fB,B.fb,q,null,null,B.ck,new A.S(Date.now(),0,!1))
A.ag1(l,!0)
t.a.hq(l)
t.a.bp()
if(m)k="+$"+B.k.aa(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+B.k.aa(n,2)+" ("+B.k.V(r*100)+"% of the prize)"}q=t.a
C.un(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return A.b(C.bBz(s,C.bBc(),C.fUJ(),""+t.e+"/"+t.f,k,q,!0),$async$Jn)
case 6:w=7
return A.b(C.afU(t.a.f,k),$async$Jn)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Jn,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.r
m===$&&A.c()
w=B.o.an(m,60)
v=B.a.aT(B.o.u(B.o.F(m,60)),2,"0")
u=A.aH(n,n,n,n,B.am1,n,n,n,new C.dzf(d),n,n,n,n,n,n)
t=o.a
s=x.p
t=A.D(A.v(A.a([A.d(t.f,n,1,B.a2,n,n,n,B.kU,n,n,n),A.d("Win $"+B.k.aa(t.w*1.46,2)+" \xb7 stake $"+B.k.aa(o.a.w,2),n,n,n,n,n,n,D.eTX,n,n,n)],s),B.F,n,B.e,B.j,0,B.p),1)
r=o.a.c.a
m=m<=10?B.aB:B.c.j(0.1)
q=A.m(99)
q=A.A(A.a([u,t,new C.aob(r,new C.dzg(o),n),B.bp,A.dg(n,A.A(A.a([D.bK3,B.d8,A.d(""+w+":"+v,n,n,n,n,n,n,B.ks,n,n,n)],s),B.m,n,B.e,B.j,0,n,n),n,n,B.bb,new A.o(m,n,n,q,n,n,B.n),B.a1,n,n,n,B.tj,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
m=o.a
v=m.w
w=v*1.46
r=o.e/o.f
m=A.A(A.a([A.D(A.bv(A.m(99),A.mf(B.bF,n,n,9,n,r,new A.mA(B.d.gL(m.r),x.dw)),B.aq),1),B.aw,A.d(""+o.e+"/"+o.f,n,n,n,n,n,n,D.f1H,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
t=A.m(22)
u=A.a([B.d.gL(o.a.r).j(0.35),F.adS],x.O)
p=o.x
return C.aNT(n,D.bfK,A.bn(!0,A.v(A.a([new A.C(D.bsr,q,n),new C.MH(w*r,w,v,n),new A.C(F.agc,m,n),A.D(new A.C(B.Xm,A.bv(t,A.bZ(A.e_(W.hdR(o.a.e,new W.yT(new C.dzh(o),new C.dzi(o),new C.dzj(o),o.d)),p,n),new A.o(n,n,n,n,n,new A.a7(B.b1,B.b6,B.x,u,n,n),B.n),B.bd),B.aq),n),1)],s),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0))}}
C.a5A.prototype={
B(d){var w=null,v=A.m(26),u=A.I(B.aJ.j(0.5),B.r,1),t=A.a([new A.ad(0,B.G,B.aJ.j(0.22),B.J,26)],x.V)
return A.eE(w,B.K,A.p(w,A.v(A.a([A.p(w,D.bDS,B.f,w,w,new A.o(B.aJ.j(0.16),w,A.I(B.aJ,B.r,2),w,w,w,B.a6),w,68,w,w,w,w,w,68),B.az,D.fg4,B.P,A.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.P,A.d("The count starts again from zero next month.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.aO,new A.a6(1/0,w,A.bJ(D.f49,new C.c3Q(d),A.bk(B.aJ,w,w,w,B.w,B.fL,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,u,v,t,D.bQb,B.n),w,w,w,w,D.bqN,w,w,w),w,w,w,B.agI,B.d_,w,w,w)}}
C.amb.prototype={
T(){return new C.bh6(null,null)},
gY(d){return this.e}}
C.bh6.prototype={
a_(){var w,v=this,u=null
v.a1()
w=v.d=A.bj(u,B.At,u,1,u,v)
w.d8()
w.dR$.J(0,new C.dsw(v))
w=A.bj(u,B.m5,u,1,u,v)
w.cG(0)
v.e=w
w=A.bj(u,B.L8,u,1,u,v)
w.cG(0)
v.f=w
w.d8()
w.dR$.J(0,new C.dsx(v))
if(v.a.c){v.d.cG(0)
v.e.bX(0)
v.f.bX(0)}},
br(d){var w,v,u=this
u.bE(d)
w=u.a.c
if(w){v=u.d
v===$&&A.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){w=u.d
w===$&&A.c()
w.cG(0)
w=u.e
w===$&&A.c()
w.bX(0)
w=u.f
w===$&&A.c()
w.bX(0)}else if(!w&&d.c){w=u.d
w===$&&A.c()
w.bX(0)
w=u.d
w.sp(0,w.a)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cG(0)
w=u.f
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cG(0)}},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
w.bs_()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.PL[B.o.F(a9.r,5)]:b4
w=!b3&&b4==null?D.PL[B.o.F(a9.w,5)]:b0
b1=b4!=null
if(b1){b3=A.t(b4)
v=b4>0?"+"+b3:b3}else if(w!=null){b3=A.t(w)
if(w>0)b3="+"+b3
v=b3}else v="?"
if(b1)u=b4>0?B.cZ:B.bL
else if(w!=null){b1=(w>0?B.cZ:B.bL).j(0.45)
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
b3=A.a([A.e9(B.A,A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,b0,A.a([new A.ad(6+e,B.G,B.aE.j(0.4+q*0.3),B.J,32+q*22),new A.ad(3,B.G,B.b7.j(0.2+p*0.25),B.J,40+p*16)],d),b0,B.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=A.p(b0,b0,B.f,b0,b0,new A.o(A.aq(B.by,B.aM,B.o.F(a3,3)/2).j(a2),b0,b0,b0,A.a([new A.ad(0,B.G,B.aE.j(0.7),B.J,e)],d),b0,B.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(A.dU(new A.iD(A.vW(a4+a3),b0,B.A,!0,b0,a8,b0),new A.u(a6*a0+a5*b2*0.04,a7*a0)))}B.d.v(f,b3)}b3=b2*0.06
e=x.V
f.push(A.dU(A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,A.m(b2*0.5),A.a([new A.ad(b2*0.02,B.G,B.w.j(0.4+b1),B.J,b2*0.14)],e),b0,B.n),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new A.u(0,n+b3)))
b1=A.dl()
d=b1.a
d.$flags&2&&A.aj(d)
d[11]=0.0025
b1.mz(o)
b1.jv(k,k,k,1)
b1.jL(l)
b1.fu(m)
d=b2*0.2
a1=A.m(d)
if(a9.a.c)a2=D.cSS
else{a2=A.aq(B.c,B.k5,q*0.45)
a2.toString
a2=A.a([a2,B.bN,B.cn],x.O)}a4=A.aq(B.bI,B.aE,q*0.65)
a4.toString
a4=A.I(a4,B.r,3)
e=A.a([new A.ad(0,B.G,B.w.j(0.3),D.dYF,16)],e)
if(!a9.a.c)e.push(new A.ad(p*3,B.G,B.aE.j(0.3+q*0.4),B.J,24+p*16))
e.push(new A.ad(0,B.G,B.c.j(0.9),B.Rc,0))
g=A.a([],g)
if(!a9.a.c)g.push(A.bY(0,A.bZ(b0,new A.o(b0,b0,b0,A.m(d),b0,new A.a7(new A.d8(-1+Math.cos(j)*0.8,-1),new A.d8(1,1),B.x,A.a([B.c.j(0),B.c.j(0.28+p*0.25),B.c.j(0)],x.O),b0,b0),B.n),B.bd),0,0,0))
g.push(A.ao(b0,A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,A.m(6),b0,new A.a7(B.a3,B.a7,B.x,A.a([B.c.j(0.95),B.c.j(0)],x.O),b0,b0),B.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=A.a([new A.cP(B.w.j(0.18),B.dB,5)],x.C)
if(!a9.a.c)d.push(new A.cP(B.aE.j(0.4+q*0.35),B.J,12+p*10))
g.push(A.av(A.v7(A.d(v,b0,b0,b0,b0,b0,b0,A.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,B.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),B.bb,B.j4,b3),b0,b0,b0))
f.push(A.dU(A.fr(B.A,A.p(b0,new A.an(B.W,b0,B.aa,B.q,g,b0),B.f,b0,b0,new A.o(b0,b0,a4,a1,e,new A.a7(B.ax,B.aD,B.x,a2,b0,b0),B.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new A.u(0,n)))
return new A.a6(h,h,new A.an(B.A,b0,B.aa,B.f,f,b0),b0)}}
C.aJt.prototype={
aQ(){this.aX()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdG())
w.b2$=null
w.a2()}}
C.MH.prototype={
B(d){var w=null,v=new C.c5P(),u=v.$3("STAKE","$"+B.k.aa(this.e,2),B.c),t=A.m(18),s=A.I(B.bs.j(0.7),B.r,1.4),r=A.a([new A.ad(0,B.G,B.aU.j(0.35),B.J,14)],x.V),q=x.p
return new A.C(B.Lr,A.A(A.a([u,A.p(w,A.v(A.a([D.feL,A.mt(new C.c5O(),w,B.bb,B.mS,w,w,new A.bm(w,this.c,x.e7),x.gR)],q),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(w,w,s,t,r,D.amO,B.n),w,w,w,w,B.LC,w,w,w),v.$3("FULL WIN","$"+B.k.aa(this.d,2),B.bJ)],q),B.m,w,B.e,B.j,0,w,w),w)}}
C.aob.prototype={
B(d){var w=null,v=A.m(99),u=A.I(B.jm.j(0.7),B.r,1)
return A.p(w,A.A(A.a([D.bCk,B.d8,C.ap1(this.d,B.ne,this.c)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(w,w,u,v,w,D.amO,B.n),w,w,w,w,B.LN,w,w,w)},
gdX(){return this.c}}
C.MP.prototype={
T(){return new C.bhM(null,null)}}
C.bhM.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.m5,null,1,null,v)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bsA()},
aLP(d,e){var w=this.a.d,v=A.T(w).k("J<1,n>"),u=A.B(new A.J(w,C.i_n(),v),v.k("ai.E"))
w=this.d
w===$&&A.c()
return A.c6(w,new C.dS7(this,u),null)},
B(d){var w=null
if(this.a.e)return A.cb(w,D.adi,A.bn(!0,this.aLP(0,d),!0,!1,B.ag,!0,!0),w,!1,!1,w,w)
return this.aLP(0,d)},
avv(d,e,f){var w=null,v=f.j(0.16),u=A.m(10)
return A.A(A.a([A.p(w,A.W(d,f,w,w,w,17),B.f,w,w,new A.o(v,w,w,u,w,w,B.n),w,32,w,w,w,w,w,32),B.aw,A.D(A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.aK2.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.ac9.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=A.aI(d,B.e7,o).w.r.d,m=this.c,l=J.cE(m),k=l.eI(m,new C.dSa()).gM(0),j=new A.e6(l.dt(m,new C.dSb(),x.cD),x.bG).cI(0,0,new C.dSc())
o=A.aI(d,B.bS,o).w
w=x.p
v=A.a([B.S,A.p(p,p,B.f,p,p,new A.o(B.b5,p,p,A.m(2),p,p,B.n),p,4,p,p,p,p,p,42),new A.C(B.agq,A.A(A.a([A.p(p,D.bMr,B.f,p,p,new A.o(p,p,p,A.m(14),A.a([new A.ad(0,B.G,B.ff.j(0.45),B.J,14)],x.V),D.amI,B.n),p,44,p,p,p,p,p,44),B.bf,D.buA,A.aH(p,p,p,p,B.ld,p,p,p,new C.dSd(d),p,p,p,p,p,p)],w),B.m,p,B.e,B.j,0,p,p),p)],w)
if(l.gcl(m)){u=C.fPK("GAMES",""+l.gM(m),B.ez)
t=C.fPK("WON",""+k,B.jm)
s=j>=0
r=s?"+":"-"
q=C.bxZ(j)
s=s?B.jm:B.f9
v.push(new A.C(D.bp_,A.A(A.a([u,B.ab,t,B.ab,C.fPK("NET",r+q,s)],w),B.m,p,B.e,B.j,0,p,p),p))}if(l.gam(m))v.push(new A.C(new A.Q(24,36,24,24+n),A.v(A.a([A.W(D.bym,B.c.j(0.35),p,p,p,52),B.ac,A.d("No game receipts yet",p,p,p,p,p,p,A.l(p,p,B.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.ao,A.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,A.l(p,p,B.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),B.L,p,p)],w),B.m,p,B.e,B.j,0,B.p),p))
else v.push(new A.dm(1,B.ci,A.hE(p,new C.dSe(this),l.gM(m),new A.Q(14,2,14,16+n),p,B.ah,new C.dSf(),!1),p))
return A.p(p,A.v(v,B.m,p,B.e,B.Q,0,B.p),B.f,p,new A.aY(0,1/0,0,o.a.b*0.88),D.aYs,p,p,p,p,p,p,p,p)}}
C.ac8.prototype={
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
t=s}if(w)r=B.cr
else if(u)r=B.dy
else{w=v?B.aM:B.bs
r=w}q=h.gbdT()
w=new C.dS9()
s=A.m(14)
p=A.a([r.j(0.13),D.beO],x.O)
o=A.I(r.j(0.4),B.r,1)
n=A.W(g?B.me:B.cx,r,i,i,i,16)
m=A.D(A.d(h.b,i,1,B.a2,i,i,i,B.rp,i,i,i),1)
l=r.j(0.2)
k=A.m(99)
k=A.p(i,A.d(t,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,B.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),B.f,i,i,new A.o(l,i,i,k,i,i,B.n),i,i,i,i,D.bsm,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bxZ(q)}else{l=g?"+":"-"
l+=C.bxZ(h.d)}j=x.p
l=A.A(A.a([n,B.bp,m,k,B.bp,A.d(l,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.m,i,B.e,B.j,0,i,i)
k=C.dS8("STAKE",w.$1(h.w),B.c)
w=A.A(A.a([k,B.d8,C.dS8("PAID",C.bxZ(g?h.d:0),r),B.d8,C.dS8("BEFORE",w.$1(h.x),B.ez),B.d8,C.dS8("AFTER",w.$1(h.y),B.dy)],j),B.m,i,B.e,B.j,0,i,i)
n=C.hVZ(h.f)
h=B.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return A.p(i,A.v(A.a([l,B.ao,w,B.at,A.d(n+h,i,1,B.a2,i,i,i,A.l(i,i,B.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.aj,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(i,i,o,s,i,new A.a7(B.ax,B.aD,B.x,p,i,i),B.n),i,i,i,i,B.l5,i,i,i)}}
C.ayL.prototype={
T(){return new C.bds(B.cI,null,null)}}
C.bds.prototype={
a_(){var w,v,u,t=this
t.a1()
w=A.bj(null,B.m6,null,1,null,t)
w.cG(0)
t.d=w
v=J.e1(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.acy(40+w.aj()*260,-20+w.aj()*40,1.5+w.aj()*3,w.aj()*3.141592653589793,0.7+w.aj()*0.3,12+w.aj()*16,[Z.a2U,B.r2,B.cR,B.c][w.aB(4)],[B.hY,B.l7,B.dW,B.Fe][w.aB(4)])
t.f=v},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bru()},
B(d){var w=null,v=this.d
v===$&&A.c()
return A.av(A.aF(!1,B.a1,!0,w,A.c6(v,new C.d90(this,d),w),B.f,B.K,0,w,w,w,w,w,B.af),w,w,w)}}
C.acy.prototype={
gY(d){return this.f}}
C.aIZ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.aZj.prototype={
B(d){return new A.uc(new C.c85(this),null,new A.h3(A.a([$.yf(),$.a1L()],x.U)),null)},
gdX(){return this.c}}
C.Mi.prototype={
c7a(){if(this.c!=null)this.m(new C.bXX())}}
C.HY.prototype={}
C.anE.prototype={
T(){return new C.aBB(B.cI,new A.ar(B.as,$.aw()))},
cB0(){return this.d.$0()},
cMo(){return this.f.$0()},
cMc(d,e){return this.r.$2(d,e)},
cN_(d,e,f){return this.w.$3$bonus(d,e,f)},
gdX(){return this.c}}
C.aBB.prototype={
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.a2()},
arl(){var w=A.d3(B.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
An(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$An=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.arl()
if(s<2){t.avw("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cB0()<s){t.avw("Insufficient balance.")
w=1
break}if(!t.a.cMc(s,"Dice Roll bet")){t.avw("Could not place bet.")
w=1
break}t.a.toString
t.m(new C.dLa(t))}w=3
return A.b(C.c5_(t.a.e),$async$An)
case 3:r=t.a
q=C.hY3(r.e,r.c,t.d)
t.a.cMo()
A.aXT(t.a.e)
t.m(new C.dLb(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return A.b(A.bN(new A.b9(1000*(40+p*6)),null,r),$async$An)
case 7:if(t.c==null){w=1
break}new C.dLc(t).$0()
t.c.e8()
case 5:++p
w=4
break
case 6:w=8
return A.b(A.bN(B.jp,null,r),$async$An)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.fTx(q)
t.m(new C.dLd(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cN_(m,"Dice Roll "+n,o)
t.m(new C.dLe(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+B.k.aa(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(m,2)+" added to your balance"
w=12
return A.b(C.bBz(r,C.bBc(),new C.dLf(t),n,k,"YOU WIN!",!0),$async$An)
case 12:w=13
return A.b(C.afU("Dice Roll",l?"+$"+B.k.aa(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(m,2)+" added to your balance"),$async$An)
case 13:w=10
break
case 11:w=14
return A.b(C.bBz(r,C.bBc(),new C.dLg(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$An)
case 14:C.un(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return A.h(u,v)}})
return A.i($async$An,v)},
avw(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.arl(),d=x.w,a0=A.aI(a2,B.e7,d).w,a1=Math.min(A.aI(a2,B.bS,d).w.a.a*0.44,200)
d=A.hc(R.ala,D.flG,new C.dLj(a2),f)
w=A.m(20)
v=g.a
u=v.c
t=x.p
w=A.A(A.a([d,B.b3,A.p(f,A.A(A.a([B.al7,B.bp,C.ap1(v.d,B.jC,u)],t),B.m,f,B.e,B.Q,0,f,f),B.f,f,f,new A.o(B.cR,f,f,w,f,f,B.n),f,f,f,f,B.lA,f,f,f)],t),B.m,f,B.e,B.j,0,f,f)
u=g.z
v=A.Z(140,D.Wu.l()>>>16&255,D.Wu.l()>>>8&255,D.Wu.l()&255)
d=A.m(18)
s=A.I(A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
r=g.x
d=A.D(A.p(f,A.av(new C.amb(r,r?g.w:g.r,a1,f),f,f,f),B.f,f,f,new A.o(v,f,s,d,f,f,B.n),f,f,f,f,f,f,f,1/0),1)
v=A.d("Roll lands on one of:",f,f,f,f,f,f,A.l(f,f,B.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,B.a4,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=A.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.PL[q]
o=C.fTx(p)
n=p>0?B.bn:B.aB
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new A.aV(10,10)
i=m?B.c:n.j(0.7)
h=new A.az(i,m?2.5:1.2,B.r,-1)
n=m?A.a([new A.ad(1,B.G,n.j(0.65),B.J,14)],r):B.Pw
m=m?18:15
s.push(new A.bE(1,B.bi,new A.C(B.jr,A.p(B.A,new A.x(o,f,new A.F(!0,B.c,f,f,f,f,m,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f),B.f,f,f,new A.o(k,f,new A.bP(h,h,h,h),new A.bp(j,j,j,j),n,f,B.n),f,l,f,f,f,f,f,f),f),f))}d=A.a([d,B.ac,v,B.ao,A.A(s,B.m,f,B.e,B.j,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.fTx(v)
s=g.r
s.toString
d.push(new A.C(B.ke,A.d("Landed on "+v,f,f,f,f,f,f,A.l(f,f,s>0?B.bc:B.cr,f,f,f,f,f,f,f,f,20,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(B.S)
d.push(new A.bI(B.a3,f,f,A.d("Bet Amount",f,f,f,f,f,f,A.l(f,f,A.Z(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,B.I,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(B.ao)
v=x.bL
v=A.B(new A.J(A.a([2,5,10,25],x.n),new C.dLk(g),v),v.k("ai.E"))
s=g.y
r=A.Z(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v.push(A.D(new A.C(B.Y1,A.aL(f,B.T,!1,f,!0,B.q,f,A.aM(),g.e,f,f,f,f,f,2,A.br(f,new A.b4(4,A.m(10),B.Y),f,B.jq,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,B.lk,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,!s,!1,f,B.ai,f,f,f,f,f,B.dM,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,B.a9,f,f,f,f,f,f,f,f,f,f,f,B.hm,!0,B.L,f,B.am,f,f,f,f),f),1))
d.push(A.A(v,B.m,f,B.e,B.j,0,f,f))
d.push(B.P)
d.push(new A.bI(B.a7,f,f,A.d("Perfect Score Profit: +$"+B.k.aa(g.arl()*0.46,2),f,f,f,f,f,f,D.eVY,f,f,f),f))
d.push(B.S)
d=A.D(new A.C(B.hH,A.v(d,B.aj,f,B.e,B.j,0,B.p),f),1)
v=g.x?f:g.gclB()
s=A.fm(f,f,B.aE,f,f,f,f,f,f,B.c,f,f,f,f,new A.b7(A.m(14),B.Y),f,f,f,f,f)
return C.aNT(f,D.WC,A.bn(!0,A.v(A.a([new A.C(D.bsN,w,f),new C.MH(u,e*1.46,e,f),A.D(A.v(A.a([d,new A.C(new A.Q(14,4,14,8+a0.r.d),new A.a6(1/0,52,A.i9(A.d("\ud83c\udfb2 ROLL ($"+B.k.aa(e,2)+")",f,f,f,f,f,f,B.kV,f,f,f),v,s),f),f)],t),B.m,f,B.e,B.j,0,B.p),1)],t),B.m,f,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0))}}
C.aoh.prototype={
T(){return new C.aBS(B.km,new A.ar(B.as,$.aw()))},
cM4(d){return this.e.$1(d)}}
C.aBS.prototype={
gaq8(){var w,v=this.r
if(v===$){w=B.o.u(1e4+B.cI.aB(89999))
this.r!==$&&A.bM()
this.r=w
v=w}return v},
gPv(){var w=this.d,v=this.a
return w===B.km?B.a.i(v.f.a):B.a.i(v.f.b)},
ga7Q(){var w=this.gPv(),v=A.af("^\\$+",!0,!1,!1,!1),u=B.a.i(A.aJ(w,v,""))
return u.length===0?"":"$"+u},
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.a2()},
Ik(d,e){return this.bFf(d,e)},
bFf(d,e){var w=0,v=A.j(x.H),u=this,t
var $async$Ik=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.fI(new A.fA(d)),$async$Ik)
case 2:A.eP()
t=u.c
if(t!=null)t.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$Ik,v)},
Pq(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pq=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gPv().length===0){r.c.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}A.jd()
o=B.k.aa(r.a.d,2)
q=r.d===B.km?A.cv("https://cash.app/"+r.ga7Q()+"/"+o,0,null):A.cv("bitcoin:"+r.gPv(),0,null)
t=4
w=7
return A.b(A.iO(q,B.fj,null),$async$Pq)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===B.km?r.ga7Q():r.gPv()
w=10
return A.b(r.Ik(n,r.d===B.km?"Cash App tag":"Bitcoin address"),$async$Pq)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===B.km?r.ga7Q():r.gPv()
w=11
return A.b(r.Ik(n,r.d===B.km?"Cash App tag":"Bitcoin address"),$async$Pq)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Pq,v)},
a_j(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hV().beB(B.eG),$async$a_j)
case 3:r=e
if(r==null){w=1
break}w=4
return A.b(r.fd(),$async$a_j)
case 4:s=e
t.m(new C.dSx(t,B.a.c9(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return A.h(u,v)}})
return A.i($async$a_j,v)},
c3C(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===B.km?C.hf7(s.a):B.a.i(s.a)
if(r.length===0){t=v.d===B.km?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.I(x.q).f.R(A.b2(u,u,u,u,u,B.q,u,A.d(t,u,u,u,u,u,u,u,u,u,u),u,B.U,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.I(x.q).f.R(A.b2(u,u,u,u,u,B.q,u,A.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,B.U,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new A.S(Date.now(),0,!1).u(0)
w=v.a
t.cM4(new A.d1(s,w.c.a,w.d,B.fq,v.d,r,v.f,v.gaq8(),B.ds,new A.S(Date.now(),0,!1)))
w=v.c
w.toString
A.iK(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.eD(o,o,o,!0,!0,B.zX,o,1,!0,o,0,!1,o,!1,B.c,o,A.aH(o,o,o,o,B.FY,o,o,o,new C.dSy(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.f5I,o,o,o,1,o,!0),m=A.m(26),l=A.I(D.eH.j(0.25),B.r,1),k=x.V,j=A.a([new A.ad(0,B.G,B.aZ.j(0.25),B.eT,24)],k),i=x.p
j=A.p(o,A.v(A.a([A.d("YOU'RE ADDING",o,o,o,o,o,o,A.l(o,o,B.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,B.I,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),B.ao,A.f1(B.A,A.d("$"+A.dA(p.a.d),o,o,o,o,o,o,D.eQk,o,o,o),B.f,B.dt),B.ao,A.d("to your Growth Income wallet",o,o,o,o,o,o,A.l(o,o,D.eH.j(0.85),o,o,o,o,o,o,o,o,12,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,l,m,j,D.bT3,B.n),o,o,o,o,D.bqq,o,o,o)
m=p.c_2()
l=p.az7(1,"Send the money to NGMY Pay",p.c3A())
w=p.az7(2,"Put this code in the payment note",p.bDQ())
v=p.d===B.km
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=A.l(o,o,B.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.az7(3,u,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.e,o,o,o,o,o,2,A.br(o,o,o,o,o,o,o,o,!0,new A.b4(4,A.m(18),new A.az(B.c.j(0.08),1,B.r,-1)),o,o,o,o,o,B.t3,!0,o,o,o,o,new A.b4(4,A.m(18),D.aVx),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.eRL,t,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,B.rq,!0,B.a5,o,B.am,o,o,o,o))
r=p.f!=null
v=r?8:22
u=A.m(20)
s=r?D.eH:B.c
s=A.I(s.j(r?0.5:0.12),B.r,1.4)
q=r?A.v(A.a([A.bv(A.m(14),new A.cU(D.aWY,new A.E4(p.f,o),o),B.aq),B.P,D.eCq,B.at],i),B.m,o,B.e,B.j,0,B.p):A.v(A.a([A.p(o,D.bLC,B.f,o,o,new A.o(D.eH.j(0.12),o,o,o,o,o,B.a6),o,54,o,o,o,o,o,54),B.S,D.faK,B.d0,A.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p)
v=p.b3Z(4,"Screenshot of your payment",A.aE(o,A.p(o,q,B.f,o,o,new A.o(B.t3,o,s,u,o,o,B.n),o,o,o,o,new A.Q(v,v,v,v),o,o,o),B.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gceY(),o,o,o,o,o,o,!1,B.a8),!0)
u=A.d(p.a.r,o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,1.4,!0,o,o,o,o,o,o,o,o),B.L,o,o)
s=A.m(18)
k=A.a([new A.ad(0,B.G,B.aZ.j(0.45),B.dn,18)],k)
return A.cb(n,B.zX,A.av(new A.cU(B.a9x,A.cB(A.a([j,B.bv,m,B.bv,l,w,t,v,B.ao,u,B.aO,new A.a6(o,56,A.bZ(A.lp(D.bKi,D.fkX,p.gc3B(),A.fm(o,o,B.K,o,o,o,o,o,o,B.c,o,o,o,B.K,new A.b7(A.m(18),B.Y),o,o,o,o,o)),new A.o(o,o,o,s,k,D.bRH,B.n),B.bd),o)],i),o,D.bpV,o,o,B.ah,!1),o),o,o,o),o,!1,!1,o,o)},
c_2(){var w=null,v=new C.dSt(this),u=A.m(18),t=A.I(B.c.j(0.06),B.r,1)
return A.p(w,A.A(A.a([v.$3(B.km,B.hW,"Cash App"),B.ea,v.$3(B.a4k,D.akR,"Bitcoin")],x.p),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(B.t3,w,t,u,w,w,B.n),w,w,w,w,B.lC,w,w,w)},
b3Z(d,e,f,g){var w,v=null,u=x.p,t=A.a([A.p(B.A,A.d(""+d,v,v,v,v,v,v,D.eWI,v,v,v),B.f,v,v,D.aXH,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(A.D(A.p(v,v,B.f,D.eH.j(0.18),v,v,v,v,v,B.uW,v,v,v,2),1))
t=A.v(t,B.m,v,B.e,B.j,0,B.p)
w=g?12:20
return new A.Dv(A.A(A.a([new A.a6(34,v,t,v),B.aw,A.D(new A.C(new A.Q(0,0,0,w),A.v(A.a([new A.C(B.Xk,A.d(e,v,v,v,v,v,v,A5.SD,v,v,v),v),f],u),B.aj,v,B.e,B.j,0,B.p),v),1)],u),B.aj,v,B.e,B.j,0,v,v),v)},
az7(d,e,f){return this.b3Z(d,e,f,!1)},
c3A(){var w,v,u,t,s=this,r=null,q=s.d===B.km?s.ga7Q():s.gPv(),p=A.m(20),o=A.m(20),n=s.d===B.km,m=n?D.bQD:D.bSq,l=A.a([new A.ad(0,B.G,(n?D.adx:D.Vt).j(0.35),B.cy,16)],x.V),k=A.m(12)
n=s.d===B.km
w=n?B.hW:D.akR
k=A.p(r,A.W(w,n?D.adx:D.Vt,r,r,r,30),B.f,r,r,new A.o(B.c,r,r,k,r,r,B.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=A.d(n,r,r,r,r,r,r,A.l(r,r,B.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===B.km
t=u?22:13
v=A.d(v,r,1,B.a2,r,r,r,A.l(r,r,B.c,r,r,r,r,r,r,r,r,t,r,r,B.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=A.D(A.v(A.a([n,B.bz,v,B.at,A.A(A.a([D.bH9,B.d8,A.d(s.d===B.km?"Tap to pay $"+A.dA(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,B.q3,r,r,r)],u),B.m,r,B.e,B.j,0,r,r)],u),B.F,r,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,r,A.aK(!1,p,!0,A.ex(A.A(A.a([k,B.bf,v,A.aH(r,r,r,r,D.bGe,r,r,r,w?r:new C.dSw(s,q),r,r,r,r,"Copy",r)],u),B.m,r,B.e,B.j,0,r,r),r,new A.o(r,r,r,o,l,m,B.n),r,B.ag6,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gcah(),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af)},
bDQ(){var w,v,u,t,s,r,q,p,o=null,n=A.m(20),m=A.I(B.b4.j(0.35),B.r,1),l=x.p,k=A.a([],l)
for(w=this.gaq8().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new A.aV(12,12)
q=A.a([B.b4.j(0.28),B.b4.j(0.08)],u)
p=new A.az(B.ez.j(0.4),1,B.r,-1)
k.push(A.p(B.A,new A.x(s,o,B.CU,o,o,o,o,o,o,o,o,o),B.f,o,o,new A.o(o,o,new A.bP(p,p,p,p),new A.bp(r,r,r,r),o,new A.a7(B.b1,B.b6,B.x,q,o,o),B.n),o,52,o,B.jr,o,o,o,42))}return A.p(o,A.v(A.a([A.A(k,B.m,o,B.ba,B.j,0,o,o),B.ac,A.A(A.a([A.D(A.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,A.l(o,o,B.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.ab,A.hc(B.a_L,D.fmL,new C.dSs(this),A.fu(o,o,o,o,o,o,o,o,o,o,o,B.ez,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),B.m,o,B.e,B.j,0,o,o)],l),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(B.t3,o,m,n,o,o,B.n),o,o,o,o,B.bB,o,o,o)}}
C.r5.prototype={
ad(){var w=this
return A.E(["id",w.a,"title",w.b,"start",w.c.ac(),"end",w.d.ac(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.r6.prototype={
ad(){var w=this
return A.E(["id",w.a,"when",w.b.ac(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gUB(){var w=this,v=A.a([],x.s),u=w.d
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
u=w.c
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
v.push(C.h0d(w.b))
u=w.e
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
return B.d.aH(v," \xb7 ")},
gkB(d){return this.c}}
C.lv.prototype={
ad(){var w,v=this,u=A.V(x.N,x.z)
u.n(0,"type",v.a)
w=v.b
if(w.length!==0)u.n(0,"content",w)
w=v.c
if(w!=null&&w.length!==0)u.n(0,"url",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"label",w)
return u}}
C.ie.prototype={
ad(){var w,v=this,u=A.V(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"question",v.b)
w=J.b6(v.c,new C.c74(),x.P)
w=A.B(w,w.$ti.k("ai.E"))
u.n(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"thumbnailPath",w)
u.n(0,"printable",v.e)
u.n(0,"sortOrder",v.f)
return u}}
C.i0.prototype={
ajs(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.i0(v,u,t,s,r,h==null?w.f:h)},
b9j(d){var w=null
return this.ajs(w,w,w,w,d,w)},
cEE(d,e,f){return this.ajs(d,e,null,null,null,f)},
b9i(d){var w=null
return this.ajs(w,w,w,d,w,w)},
cEj(d,e){var w=null
return this.ajs(w,w,d,w,e,w)},
ad(){var w=this,v=C.hJI(w.c),u=w.e,t=A.T(u).k("J<1,a4<n,@>>")
u=A.B(new A.J(u,new C.c72(),t),t.k("ai.E"))
return A.E(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.b76.prototype={}
C.Uo.prototype={
T(){return new C.aC3(new A.ar(B.as,$.aw()),A.mq(0,null,null),A.a([],x.m))},
Tb(d){return this.d.$1(d)}}
C.aC3.prototype={
a_(){var w,v=this
v.a1()
w=J.b6(v.a.c,new C.dWc(),x.i)
w=A.B(w,w.$ti.k("ai.E"))
B.d.b1(w,new C.dWd())
v.d=w
v.It()},
q(){var w=this.w
w.S$=$.aw()
w.P$=0
this.x.q()
this.a2()},
acK(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$acK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.It()
u.m(new C.dW6(u))
t=u.a
t.toString
s=u.d
s===$&&A.c()
w=2
return A.b(t.Tb(s),$async$acK)
case 2:r=e
if(u.c!=null){u.m(new C.dW7(u))
t=u.c.I(x.q).f
s=A.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.R(A.b2(null,null,null,r?B.cZ:B.aB,null,B.q,null,s,null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$acK,v)},
a72(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a72=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&A.c()
s=new C.i0(q,"New Category",B.Fx,4284773515,D.avk,p.length)
t.m(new C.dVQ(t,s))
t.It()
p=t.c
if(p==null){w=1
break}w=3
return A.b(A.c9(null,null,!0,null,new C.dVR(s),p,null,!0,!0,x.i),$async$a72)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dVS(t,q,r))
case 1:return A.h(u,v)}})
return A.i($async$a72,v)},
a0h(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a0h=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=B.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.m(new C.dW3(t,p))
q.bM(0,B.c3)
q=t.a.e
s=t.d
s===$&&A.c()
w=3
return A.b(C.c7_(p,q,s),$async$a0h)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dW4(t,r))
$.aT.x1$.push(new C.dW5(t))
case 1:return A.h(u,v)}})
return A.i($async$a0h,v)},
a91(d){return this.bJO(d)},
bJO(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a91=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&A.c()
t=r[d]
r=u.c
r.toString
w=2
return A.b(A.c9(null,null,!0,null,new C.dVY(t),r,null,!0,!0,x.i),$async$a91)
case 2:s=f
if(s!=null)u.m(new C.dVZ(u,d,s))
return A.h(null,v)}})
return A.i($async$a91,v)},
bHE(d){this.m(new C.dVX(this,d))
this.It()},
It(){var w,v,u=this.d
u===$&&A.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].b9j(v)},
c7G(d,e){var w={}
w.a=e
this.m(new C.dW2(w,this,d))},
XJ(d){return this.bYY(d)},
bYY(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$XJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=A.ej(new C.dW1(u,d),!1,null,x.H)
w=2
return A.b(A.a5(s,!1).ce(t),$async$XJ)
case 2:return A.h(null,v)}})
return A.i($async$XJ,v)},
bA6(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?A.a([B.fl,B.bm],l):A.a([B.p6,B.es],l)
w=A.m(16)
v=A.I(m?B.d7.j(0.35):B.dy,B.r,1)
u=A.W(B.dW,m?B.dy:B.dS,n,n,n,n)
t=A.D(A.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.M,n,n,n,n,n,n,n,n,n,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.Zd:Aa.M9
r=x.p
s=A.a([A.aK(!1,n,!0,A.A(A.a([u,B.ab,t,A.W(s,m?B.bI:B.ak,n,n,n,n)],r),B.m,n,B.e,B.j,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dVU(o),n,n,n,n,n,n,n)],r)
if(o.r){u=A.a([B.S],r)
t=o.y
if(t.length!==0){q=(m?D.rP:B.c).j(0.65)
p=A.m(12)
u.push(A.p(n,A.k0(!0,n,o.x,new C.dVV(o,d),t.length,n,n,n,n,!1,!1),B.f,n,B.a9s,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.cj,n,n,n))}u.push(B.P)
t=o.w
q=A.l(n,n,m?B.aP:B.M,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=A.l(n,n,m?B.bI:B.ak,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?B.bm:B.aP
q=A.D(A.aL(n,B.T,!1,n,!0,B.q,n,A.aM(),t,n,n,n,n,n,2,A.br(n,new A.b4(4,A.m(14),B.Y),n,B.eP,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.dVW(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,q,!0,B.a5,n,B.am,n,n,n,n),1)
m=o.f?n:o.gclP()
p=A.bk(B.bj,n,n,n,n,n,B.j7,n,n,n,n,n)
u.push(A.A(A.a([q,new A.Ic(t,B.bj,n),B.d8,A.bJ(o.f?B.pZ:D.al0,m,p)],r),B.dE,n,B.e,B.j,0,n,n))
B.d.v(s,u)}return A.dg(n,A.v(s,B.aj,n,B.e,B.j,0,B.p),n,n,B.bb,new A.o(n,n,v,w,n,new A.a7(B.a3,B.a7,B.x,l,n,n),B.n),B.is,n,n,B.EO,B.bB,n,n,n)},
B(d){var w,v=this,u=null,t=A.N(d).ax.a===B.H,s=new C.b76(t),r=t?B.da:B.bN,q=t?B.da:u,p=t?B.aP:B.M,o=A.d("Help Topics Admin",u,u,u,u,u,u,A.l(u,u,t?B.aP:B.M,u,u,u,u,u,u,u,u,u,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gc3G()
if(n)n=B.S9
else n=A.W(B.xE,t?B.aP:B.M,u,u,u,u)
w=x.p
o=A.eD(A.a([A.hc(n,A.d("Save",u,u,u,u,u,u,A.l(u,u,t?B.aP:B.M,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=S.aSW(B.aI,u,O.UE,B.nN,D.fjk,v.gbwr())
q=v.bA6(s)
n=A.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,A.l(u,u,t?B.bI:B.ak,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&A.c()
return A.cb(o,r,A.v(A.a([q,new A.C(B.EO,n,u),A.D(H.h4B(!1,new C.dWb(v,s),m.length,v.gc7F(),D.boM,u,!1),1)],w),B.aj,u,B.e,B.j,0,B.p),u,!1,!1,p,u)}}
C.OF.prototype={
T(){return new C.b8X()}}
C.b8X.prototype={
a_(){var w,v=this
v.a1()
w=v.a.c
v.d=new A.ar(new A.bb(w.b,B.b2,B.aN),$.aw())
v.e=w.c
v.f=w.d},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.N(d).ax.a===B.H,q=r?D.rP:B.c,p=A.d("Edit category",s,s,s,s,s,s,A.l(s,s,r?B.c:B.bh,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&A.c()
o=A.aL(s,B.T,!1,s,!0,B.q,s,A.aM(),o,s,s,s,s,s,2,D.bNl,B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,A.l(s,s,r?B.c:B.bh,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,B.a5,s,B.am,s,s,s,s)
w=x.aS
w=A.B(new A.J(D.bTq,new C.cII(t),w),w.k("ai.E"))
w=A.c_(B.bD,w,B.bt,8,8)
v=x.gN
v=A.B(new A.J(D.cQ9,new C.cIJ(t),v),v.k("ai.E"))
u=x.p
v=A.cd(A.v(A.a([o,B.ac,w,B.ac,A.c_(B.bD,v,B.bt,0,8)],u),B.m,s,B.e,B.Q,0,B.p),B.q,s,B.y,s,s,s,s,B.ah)
return A.eh(A.a([A.bK(!1,B.dd,s,s,!0,s,s,new C.cIK(d),s,s),A.bJ(B.oX,new C.cIL(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.ZY.prototype={
T(){return new C.aE1()},
os(d){return this.d.$1(d)}}
C.aE1.prototype={
a_(){this.a1()
this.d=A.bl(this.a.c.e,!0,x.u)},
avy(){var w=this.a,v=w.c,u=this.d
u===$&&A.c()
return w.os(v.b9i(u))},
a74(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a74=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&A.c()
w=2
return A.b(u.aYT(new C.ie("q_"+1000*s,"",D.cOL,null,!1,r.length)),$async$a74)
case 2:t=e
if(t!=null){u.m(new C.eKy(u,t))
u.avy()}return A.h(null,v)}})
return A.i($async$a74,v)},
aYT(d){var w,v=this.c
v.toString
w=A.ej(new C.eKz(d),!1,null,x.u)
return A.a5(v,!1).ce(w)},
B(d){var w=this,v=null,u=A.N(d).ax.a===B.H,t=u?B.da:B.bN,s=u?B.da:v,r=u?B.aP:B.M,q=w.a.c
s=A.eD(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,A.d(q.b+" \u2014 Questions",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.M,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=S.aSW(B.aI,v,O.UE,B.nN,D.foQ,w.gbwT())
q=w.d
q===$&&A.c()
q=q.length
if(q===0){q=A.av(A.d("No questions yet. Tap + Question.",v,v,v,v,v,v,A.l(v,v,u?B.bI:B.ak,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=A.hE(v,new C.eKE(w,new C.b76(u)),q,D.boV,v,B.ah,new C.eKF(),!1)
return A.cb(s,t,u,v,!1,!1,r,v)}}
C.ZX.prototype={
T(){return new C.aE0()}}
C.aE0.prototype={
a_(){var w,v=this
v.a1()
w=v.a.c
v.d=new A.ar(new A.bb(w.b,B.b2,B.aN),$.aw())
w=A.bl(w.c,!0,x.bP)
v.e=w
if(B.d.gam(w))J.cf(v.e,D.a3C)
w=v.a.c
v.f=w.d
v.r=w.e},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
acJ(){var w=0,v=A.j(x.H),u=this,t
var $async$acJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A0.G2(78,1920),$async$acJ)
case 2:t=e
if(t!=null)u.m(new C.eKu(u,t))
return A.h(null,v)}})
return A.i($async$acJ,v)},
adN(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=A.ej(new C.eKs(u),!1,null,x.dZ)
w=2
return A.b(A.a5(r,!1).ce(t),$async$adN)
case 2:s=e
if(s!=null)u.m(new C.eKt(u,s))
return A.h(null,v)}})
return A.i($async$adN,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.N(a1).ax.a===B.H,g=h?B.da:B.bN,f=h?B.da:i,e=h?B.aP:B.M,d=A.d("Edit Question",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=A.eD(A.a([A.dp(T.a_U,B.oX,new C.eKw(j,a1),A.bk(B.aI,i,i,i,B.c,i,i,i,i,i,i,i)),B.aw],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=A.d("Question thumbnail",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=A.m(14)
w=j.f
v=h?B.bI:B.ak
w=A.aE(i,A.bv(e,K.aNW(A.m(14),B.bQ,140,B.AY,v,w,1/0),B.aq),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gc3F(),i,i,i,i,i,i,!1,B.a8)
e=A.d("Question users will tap",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?B.bm:B.aP
u=A.m(16)
t=A.I(h?B.aK:B.aL,B.r,1)
s=j.d
s===$&&A.c()
r=A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,15,i,i,B.a4,i,i,!0,i,i,i,i,i,i,i,i)
v=A.p(i,A.A(A.a([A.D(A.aL(i,B.T,!1,i,!0,B.q,i,A.aM(),s,i,i,i,i,i,2,A.br(i,B.ew,i,B.bk,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,i,i,i,B.cs,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),B.y,!0,i,!0,i,!1,i,B.ai,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,B.a9,i,i,i,i,i,i,i,i,i,i,i,r,!0,B.a5,i,B.am,i,i,i,i),1),new A.Ic(j.d,i,i)],a0),B.m,i,B.e,B.j,0,i,i),B.f,i,i,new A.o(v,i,t,u,i,i,B.n),i,i,i,i,B.en,i,i,i)
u=A.d("Printable document",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,i,i,i,B.a4,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=A.iC(B.aI,i,i,B.ag,i,new C.eKx(j),i,A.d("Shows a printable badge on this answer",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=A.d("Stored answer (not AI)",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=A.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.rP:B.c
q=A.m(16)
p=A.m(16)
o=A.m(16)
n=A.I(B.bj.j(0.45),B.r,1)
m=A.p(i,D.bF_,B.f,i,i,new A.o(B.bj.j(0.12),i,i,A.m(12),i,i,B.n),i,i,i,i,B.bk,i,i,i)
l=A.d("Open Document Editor",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&A.c()
k=J.ac(k)
l=A.D(A.v(A.a([l,B.at,A.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),B.F,i,B.e,B.j,0,B.p),1)
return A.cb(d,g,A.cB(A.a([f,B.P,w,B.d5,e,B.P,v,B.aO,u,B.P,t,B.at,s,B.ac,A.aF(!1,B.a1,!0,q,A.aK(!1,p,!0,A.p(i,A.A(A.a([m,B.ev,l,A.W(B.B3,h?B.bI:B.ak,i,i,i,16)],a0),B.m,i,B.e,B.j,0,i,i),B.f,i,i,new A.o(i,i,n,o,i,i,B.n),i,i,i,i,B.fy,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gc9f(),i,i,i,i,i,i,i),B.f,r,0,i,i,i,i,i,B.af)],a0),i,B.bU,i,i,B.ah,!1),i,!1,!1,i,i)}}
C.d_9.prototype={}
C.Up.prototype={
T(){return new C.aC5(A.kg(!0,null,!0,!0,null,null,!1))}}
C.aC5.prototype={
a_(){var w,v,u,t,s,r,q=this
q.a1()
w=J.dH(q.a.c,new C.dWN())
w=A.B(w,w.$ti.k("H.E"))
q.e=w
v=A.a([],x.s)
for(w=J.aX(q.a.c);w.C();){u=w.gU(w)
switch(u.a){case"heading":v.push("## "+u.b)
break
case"text":u=u.b
if(B.a.i(u).length!==0)v.push(u)
break
case"bullets":for(u=u.b.split("\n"),t=u.length,s=0;s<t;++s){r=B.a.i(u[s])
if(r.length!==0)v.push("\u2022 "+r)}break
default:break}}w=B.d.aH(v,"\n\n")
q.d=new A.ar(new A.bb(w,B.b2,B.aN),$.aw())},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.f.q()
this.a2()},
avz(d,e){var w,v,u,t,s,r=this.d
r===$&&A.c()
r=r.a
w=r.b
if(!w.geu())return
v=r.a
r=w.a
u=w.b
t=d+B.a.ap(v,r,u)+e
s=B.a.ov(v,r,u,t)
this.d.bM(0,new A.bb(s,A.h8(B.bu,r+t.length),B.aN))},
aX5(d){var w,v,u,t,s=this.d
s===$&&A.c()
s=s.a
w=s.a
v=B.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=B.a.ov(w,v,v,u)
this.d.bM(0,new A.bb(t,A.h8(B.bu,v+u.length),B.aN))},
aaG(){var w=0,v=A.j(x.H),u,t=this,s
var $async$aaG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A0.G2(78,1920),$async$aaG)
case 3:s=e
if(s==null){w=1
break}t.m(new C.dWt(t,s))
case 1:return A.h(u,v)}})
return A.i($async$aaG,v)},
Xe(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xe=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hV().a4B(B.eG),$async$Xe)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return A.b(s.fd(),$async$Xe)
case 4:t.m(new r.dWy(t,e))
case 1:return A.h(u,v)}})
return A.i($async$Xe,v)},
aaH(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$aaH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=$.aw()
s=new A.ar(B.as,t)
r=new A.ar(new A.bb("https://",B.b2,B.aN),t)
q=u.c
q.toString
w=2
return A.b(A.c9(null,null,!0,null,new C.dWw(s,r),q,null,!0,!0,x.y),$async$aaH)
case 2:if(e===!0)u.m(new C.dWx(u,s,r))
s.S$=t
s.P$=0
r.S$=t
r.P$=0
return A.h(null,v)}})
return A.i($async$aaH,v)},
bB2(){var w,v,u,t,s,r=null,q=A.a([],x.a),p=this.d
p===$&&A.c()
p=B.a.fv(p.a.a,A.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new A.J(p,new C.dWp(),A.T(p).k("J<1,n>")).bZ(0,new C.dWq())
for(p=J.aX(w.a),v=new A.fG(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gU(p)
if(B.a.a0(s,"## "))q.push(new C.lv("heading",B.a.i(B.a.b_(s,3)),r,r))
else if(B.a.a0(s,"\u2022 ")||B.a.a0(s,"- "))q.push(new C.lv("bullets",new A.J(A.a(s.split("\n"),u),new C.dWr(),t).bZ(0,new C.dWs()).aH(0,"\n"),r,r))
else q.push(new C.lv("text",s,r,r))}p=this.e
p===$&&A.c()
B.d.v(q,p)
if(q.length===0)q.push(D.a3C)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.N(d).ax.a===B.H,m=new C.d_9(n),l=n?B.aA:B.fD,k=A.d(p.a.d,o,o,o,o,o,o,B.cu,o,o,o),j=x.p
k=A.eD(A.a([A.dp(T.a_U,B.a77,new C.dWD(p,d),A.bk(B.aI,o,o,o,B.c,o,o,o,o,o,o,o)),B.ab],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?B.cC:B.iH
v=A.c_(B.bD,A.a([p.vg(E.Ma,"Bold",new C.dWE(p),m),p.vg(E.Zf,"Italic",new C.dWF(p),m),p.vg(E.aig,"Underline",new C.dWG(p),m),p.vg(Ae.Zm,"Heading",new C.dWH(p),m),p.vg(O.Mb,"Bullets",new C.dWI(p),m),p.vg(E.aif,"Align",new C.dWJ(),m),p.vg(B.Ff,"Link",p.gbW7(),m),p.vg(B.pu,"Image",p.gbW6(),m),p.vg(A_.Zy,"Video",p.gbW8(),m),p.vg(M.a_z,"Signature",new C.dWK(p),m),p.vg(A_.Mc,"Divider",new C.dWL(p),m)],j),B.bt,4,4)
w=A.p(o,A.v(A.a([v,B.ao,A.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,A.l(o,o,n?B.dL:B.bo,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),B.aj,o,B.e,B.j,0,B.p),B.f,w,o,o,o,o,o,o,E.ah7,o,o,o)
v=n?B.da:B.c
u=A.m(12)
t=A.I(n?B.et:B.e2,B.r,1)
s=A.a([new A.ad(0,B.G,B.w.j(n?0.35:0.08),B.cJ,16)],x.V)
r=p.d
r===$&&A.c()
q=A.l(o,o,n?B.iK:B.aA,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=A.a([w,A.D(new A.C(B.bU,A.p(o,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),r,o,o,o,o,o,2,A.br(o,B.ew,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.dL:B.bo,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,p.f,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,q,!0,B.a5,o,B.am,o,o,o,o),B.f,o,o,new A.o(v,o,t,u,s,o,B.n),o,o,o,o,A6.AI,o,o,o),o),1)],j)
n=p.e
n===$&&A.c()
if(n.length!==0){n=new A.hW(n,A.T(n).k("hW<1>"))
j.push(A.p(o,A.c_(B.bD,n.gdL(n).dt(0,new C.dWM(p,m),x.g5).dF(0),B.bt,0,8),B.f,o,o,o,o,o,o,o,B.Lv,o,o,o))}return A.cb(k,l,A.v(j,B.m,o,B.e,B.j,0,B.p),o,!1,!1,o,o)},
vg(d,e,f,g){var w=null,v=g.a,u=v?B.da:B.c,t=A.m(8),s=A.m(8)
return A.ho(A.aF(!1,B.a1,!0,t,A.aK(!1,s,!0,new A.C(B.cj,A.W(d,v?B.iK:B.aA,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,w,w,w,B.af),w,e,w,w)}}
C.ddh.prototype={}
C.azE.prototype={
a4(){return"_KbView."+this.b}}
C.aoA.prototype={
T(){return new C.aC4(D.aS8)},
cLj(d,e){return this.e.$2$size(d,e)}}
C.aC4.prototype={
gayh(){var w,v
if(this.e==null)return null
for(w=J.aX(this.a.c);w.C();){v=w.gU(w)
if(v.a===this.e)return v}return null},
gco_(){var w,v,u,t,s,r=this.gayh()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
c3H(d){this.m(new C.dWm(this,d))},
caq(d){this.m(new C.dWn(this,d))},
bzg(){this.m(new C.dWe(this))},
bzi(){this.m(new C.dWf(this))},
gb3w(){var w=A.bl(this.a.c,!0,x.i)
B.d.b1(w,new C.dWo())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.N(d).ax.a===B.H,f=new C.ddh(g),e=x.O
e=g?A.a([B.M.j(0.9),B.bm.j(0.85)],e):A.a([B.es.j(0.55),B.mI.j(0.45)],e)
w=A.m(22)
v=A.I((g?B.aK:B.fg).j(0.55),B.r,1)
switch(i.d.a){case 0:g=i.bAi(f)
break
case 1:g=i.gayh()
g.toString
g=i.bB0(f,g)
break
case 2:u=i.gayh()
u.toString
t=i.gco_()
t.toString
s=A.b0(u.d)
r=A.m(16)
r=A.p(h,A.d(t.b,h,h,h,h,h,h,D.eVN,h,h,h),B.f,h,h,new A.o(B.aI,h,h,r,h,h,B.n),h,h,h,h,B.bB,h,h,1/0)
q=g?B.aA:B.c
p=A.m(16)
o=A.I(g?B.aK:B.aL,B.r,1)
n=A.a([new A.ad(0,B.G,B.w.j(g?0.28:0.06),B.ej,10)],x.V)
m=g?B.fl:B.p6
l=A.m(8)
k=A.W(B.pB,g?B.dy:B.dS,h,h,h,14)
j=x.p
j=A.v(A.a([new C.azC(f,i.gbzh(),u.c,s,"Answer",h),A.D(A.cB(A.a([r,B.ac,A.p(h,A.v(A.a([A.p(h,A.A(A.a([k,B.ea,A.d("Stored answer",h,h,h,h,h,h,A.l(h,h,g?B.dy:B.dS,h,h,h,h,h,h,h,h,11,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),B.m,h,B.e,B.Q,0,h,h),B.f,h,h,new A.o(m,h,h,l,h,h,B.n),h,h,h,B.e3,B.h1,h,h,h),new C.aYQ(t.c,t.e,f,h)],j),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(q,h,o,p,n,h,B.n),h,h,h,h,B.bU,h,h,1/0)],j),h,B.boE,h,h,B.ah,!1),1)],j),B.aj,h,B.e,B.j,0,B.p)
g=j
break
default:g=h}return A.p(h,g,B.aq,h,h,new A.o(h,h,v,w,h,new A.a7(B.b1,B.b6,B.x,e,h,h),B.n),h,h,h,B.hH,h,h,h,h)},
aUB(d){var w,v,u,t=null,s=d.a,r=s?D.rP:B.c,q=B.aE.j(0.22)
q=A.a([new A.ad(0,B.G,q,B.J,14),new A.ad(0,B.G,B.w.j(s?0.28:0.06),B.J,8)],x.V)
w=A.I(s?B.aK:B.fg,B.r,2)
v=this.a
u=x.p
q=A.a([A.p(t,A.hR(v.cLj(v.d,72),B.aq),B.f,t,t,new A.o(r,t,w,t,q,t,B.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)B.d.v(q,A.a([B.ao,A.d("Tap to switch",t,t,t,t,t,t,A.l(t,t,B.cZ,t,t,t,t,t,t,t,t,12,t,t,B.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return A.v(q,B.m,t,B.e,B.j,0,B.p)},
bAi(d){var w,v,u=this,t=null,s=u.a.r
s=A.av(s!=null?A.aE(t,u.aUB(d),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,B.a8):u.aUB(d),t,t,t)
w=d.a
v=A.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,A.l(t,t,w?B.aP:B.M,t,t,t,t,t,t,t,t,20,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),B.L,t,t)
return A.cB(A.a([s,B.az,v,B.ao,A.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,A.l(t,t,w?B.bI:B.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),B.L,t,t),B.bv,A.ib(!0,t,t,B.y,F.aMf,new C.dWh(u,d),u.gb3w().length,t,B.dQ,B.ah,!0)],x.p),t,D.boW,t,t,B.ah,!1)},
bB0(d,e){var w,v,u,t,s=null,r=A.bl(e.e,!0,x.u)
B.d.b1(r,new C.dWj())
w=A.b0(e.d)
v=d.a
u=A.d("Tap a question to read the stored answer.",s,s,s,s,s,s,A.l(s,s,v?B.bI:B.ak,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=A.av(A.d("No questions in this category yet.",s,s,s,s,s,s,A.l(s,s,v?B.bI:B.ak,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=A.hE(s,new C.dWk(this,r,d,e),t,B.v_,s,B.ah,new C.dWl(),!1)
return A.v(A.a([new C.azC(d,this.gbzf(),e.c,w,e.b,s),new A.C(Aj.v0,u,s),A.D(v,1)],x.p),B.aj,s,B.e,B.j,0,B.p)}}
C.azC.prototype={
B(d){var w=this,v=null,u=w.c.a,t=A.aH(v,v,v,v,A.W(B.eB,u?B.aP:B.M,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=A.m(12)
q=A.p(v,A.W(w.e,s,v,v,v,22),B.f,v,v,new A.o(r,v,v,q,v,v,B.n),v,v,v,v,B.cj,v,v,v)
return new A.C(D.bs9,A.A(A.a([t,q,B.aw,A.D(A.d(w.r,v,v,v,v,v,v,A.l(v,v,u?B.aP:B.M,v,v,v,v,v,v,v,v,17,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,v,v),v)}}
C.aaI.prototype={
B(d){var w=null,v=this.c,u=A.b0(v.d),t=this.d.a,s=t?D.rP:B.c,r=A.m(14),q=A.m(14),p=A.m(14),o=A.I(t?B.aK:B.aL,B.r,1),n=A.a([new A.ad(0,B.G,B.w.j(t?0.28:0.06),B.dB,6)],x.V),m=u.j(0.15),l=A.m(12)
l=A.p(w,A.W(v.c,u,w,w,w,22),B.f,w,w,new A.o(m,w,w,l,w,w,B.n),w,40,w,w,w,w,w,40)
return new A.fF(1,A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(w,A.v(A.a([l,B.ao,A.d(v.b,w,2,B.a2,w,w,w,A.l(w,w,t?B.aP:B.M,w,w,w,w,w,w,w,w,10,w,w,B.I,w,1.1,!0,w,w,w,w,w,w,w,w),B.L,w,w)],x.p),B.m,w,B.ba,B.j,0,B.p),B.f,w,w,new A.o(w,w,o,p,n,w,B.n),w,w,w,w,B.cj,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.af),w)}}
C.aYQ.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=A.a([],q)
if(this.d){w=r.a
v=w?B.fl:B.p6
u=A.m(8)
t=A.W(B.tD,w?B.dy:B.dS,s,s,s,14)
p.push(A.p(s,A.A(A.a([t,B.d8,A.d("Printable document",s,s,s,s,s,s,A.l(s,s,w?B.dy:B.dS,s,s,s,s,s,s,s,s,10,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),B.m,s,B.e,B.Q,0,s,s),B.f,s,s,new A.o(v,s,s,u,s,s,B.n),s,s,s,B.cG,B.eF,s,s,s))}B.d.v(p,J.b6(this.c,new C.c70(r),x.l))
return A.v(p,B.F,s,B.e,B.j,0,B.p)}}
C.aaA.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new A.C(D.bmP,A.d(q.b,r,r,r,r,r,r,A.l(r,r,s.d.a?B.aP:B.M,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new A.C(B.hG,A.bv(A.m(12),K.aNW(r,B.bQ,160,B.pu,r,w,1/0),B.aq),r)
case"video":v=q.c
q=v==null?q.b:v
return new A.C(B.hG,new C.azD(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new A.C(B.uW,A.aK(!1,r,!0,A.d(q,r,r,r,r,r,r,A.l(r,r,s.d.a?B.ct:B.bj,r,B.mt,r,r,r,r,r,r,r,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cCo(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=A.iw(v?B.aK:B.aL,r,r,r,r,r)
q=A.d(q.b,r,r,r,r,r,r,A.l(r,r,v?B.cn:B.aK,r,r,r,r,r,r,r,r,r,B.cD,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=A.p(r,r,B.f,v?B.bI:B.ak,r,r,r,1,r,r,r,r,r,120)
return new A.C(B.Aw,A.v(A.a([u,q,B.aO,t,B.at,A.d("Signature",r,r,r,r,r,r,A.l(r,r,v?B.bI:B.ak,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r)
case"bullets":v=x.cl
q=A.B(new A.cQ(new A.a2(A.a(q.b.split("\n"),x.s),new C.cCp(),x.cc),new C.cCq(s),v),v.k("H.E"))
return new A.C(B.kF,A.v(q,B.F,r,B.e,B.j,0,B.p),r)
case"divider":return new A.C(B.hG,A.iw(s.d.a?B.aK:B.aL,r,r,r,r,r),r)
default:q=q.b
if(B.a.i(q).length===0)return B.bH
return new A.C(B.eO,C.hDS(q,s.d),r)}}}
C.azD.prototype={
T(){return new C.beX()}}
C.beX.prototype={
a_(){this.a1()
this.acL()},
acL(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$acL=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=B.a.i(r.a.c)
if(J.ac(n)!==0)p=!J.cZ(n,"http")&&!J.cZ(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=A.Xj(A.cv(n,0,null),null)
w=7
return A.b(J.agJ(q),$async$acL)
case 7:if(r.c==null){w=1
break}r.m(new C.ddi(r,q))
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
return A.i($async$acL,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?B.bm:B.f7
u=A.m(12)
return A.p(B.A,A.W(B.pG,w?B.bI:B.ak,t,t,t,36),B.f,t,t,new A.o(v,t,t,u,t,t,B.n),t,120,t,t,t,t,t,t)}w=A.m(12)
v=s.a
u=J.agH(v)
return A.bv(w,new A.fF(u,new A.an(B.A,t,B.aa,B.q,A.a([new A.zF(s,t),A.aH(t,t,t,t,A.W(v.f?B.ain:B.Md,B.c,t,t,t,44),t,t,t,new C.ddk(this,s),t,t,t,t,t,t)],x.p),t),t),B.aq)}}
C.apo.prototype={
a4(){return"NgmyMusicLane."+this.b}}
C.I2.prototype={
a4(){return"NgmyMusicRhymeScheme."+this.b}}
C.rc.prototype={}
C.aoD.prototype={
T(){var w=null
return new C.aC6(new A.ar(B.as,$.aw()),A.mq(0,w,w),A.a([],x.m),D.C4,D.aDU,w,w)},
gdX(){return this.d}}
C.aC6.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.mR,null,1,null,v)
w.f7(0,!0)
v.as!==$&&A.aO()
v.as=w
v.z=B.d.gL(D.a2e).a},
q(){var w=this,v=w.as
v===$&&A.c()
v.q()
v=w.d
v.S$=$.aw()
v.P$=0
w.e.q()
w.bsJ()},
gaoI(){var w,v,u,t,s=this.x
if(s===D.C5)return null
s=s===D.C4
w=s?D.a2e:D.a1s
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?B.d.gL(w):null},
coL(d){return this.m(new C.dX0(this,d))},
ay4(){$.aT.x1$.push(new C.dWS(this))},
Il(d){return this.cod(d)},
aX6(){return this.Il(null)},
cod(b0){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$Il=A.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=B.a.i(b0==null?q.d.a.a:b0)
if(J.ac(a8)===0||q.r||q.a.e){w=1
break}w=3
return A.b(q.a.f.$0(),$async$Il)
case 3:e=b2
if(!e){w=1
break}A.jK()
d=a8.toLowerCase()
p=B.a.t(d,"continue")||B.a.t(d,"keep going")||B.a.t(d,"go on")||B.a.t(d,"next verse")||B.a.t(d,"more lyrics")||B.a.t(d,"endelea")||B.a.t(d,"endelea na")||B.a.t(d,"ongeza")||B.a.t(d,"tuendelee")
a0=q.f
a1=B.d.b8(a0,new C.dWU())
o=!p&&!a1
d=a8.toLowerCase()
if(!(B.a.t(d,"fix")||B.a.t(d,"rewrite")||B.a.t(d,"re-write")||B.a.t(d,"rhyme better")||B.a.t(d,"better rhyme")||B.a.t(d,"sound better")||B.a.t(d,"improve")||B.a.t(d,"polish")||B.a.t(d,"make it rhyme")||B.a.t(d,"boresha")||B.a.t(d,"rekebisha")||B.a.t(d,"endeleza mistari")))a2=C.ha3(a8)&&a1
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
l=C.ha3(a8)&&!p
q.m(new C.dWV(q,a8))
q.ay4()
k=B.a.i(q.a.c)
if(J.ac(k)===0){q.m(new C.dWW(q))
q.ay4()
w=1
break}t=5
j=A.mY(k)
i=new A.J(a0,new C.dWX(),A.T(a0).k("J<1,n>")).aH(0,"\n\n")
a0=C.hXt(m,p,o,q.x,n,q.y,q.gaoI(),l)
a3=J.ac(i)!==0?"--- Conversation so far ---\n"+A.t(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+A.t(a8)
w=8
return A.b(A.qC(j,h,B.hj,null),$async$Il)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=B.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=B.a.i(a0)}else a6=L.bzK(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.m(new C.dWY(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.m(new C.dWZ(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.m(new C.dX_(q))
q.ay4()
w=r.pop()
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Il,v)},
bF_(){return this.Il("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=A.N(d).ax.a===B.H,p=q?B.Ei:D.bdu,o=x.p
o=A.a([A.v(A.a([A.D(s.cnt(q),1),s.bEc(q)],o),B.m,r,B.e,B.j,0,B.p)],o)
if(s.f.length!==0&&!s.r){w=B.aM.j(0.55)
v=s.r?r:s.gbEZ()
u=A.m(28)
t=A.a([B.aM,B.aJ],x.O)
o.push(A.ao(78,A.aF(!1,B.a1,!0,r,A.aK(!1,r,!0,A.ex(D.e0R,r,new A.o(r,r,r,u,A.a([new A.ad(0,B.G,B.aM.j(0.45),B.cJ,16)],x.V),new A.a7(B.a3,B.a7,B.x,t,r,r),B.n),r,r,r),B.rm,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),B.f,B.K,10,r,w,B.rm,r,r,B.af),r,r,r,14,r,r))}return A.p(r,new A.an(B.W,r,B.aa,B.q,o,r),B.f,p,r,r,r,r,r,r,r,r,r,r)},
cnt(d){var w,v,u,t=this,s=null
if(t.x===D.C5)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=A.a([A.fOM(s,!1,B.K,0,0,w,A.fL6(t.ct2(d),B.UY,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=A.W(B.akS,B.aE.j(0.5),s,s,s,52)
w.push(A.b4o(new A.C(B.eA,A.v(A.a([u,B.az,A.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,A.l(s,s,d?B.ay:B.dz,s,s,s,s,s,s,s,s,14,s,s,B.a4,s,1.45,!0,s,s,s,s,s,s,s,s),B.L,s,s),B.az,A.c_(B.fM,A.a([t.agY("Full bongo love song ABAB",d),t.agY("Mix: group vs private jet \u2014 which flies?",d),t.agY("Song from John 3:16 + matching verses",d),t.agY("Fix my rhyme \u2014 paste your lines",d)],v),B.bt,8,8)],v),B.m,s,B.ba,B.j,0,B.p),s),!1))}else{v=t.r?1:0
w.push(new A.nG(D.bnu,A.WL(new A.oe(new C.dWT(t,d),u+v,!0,!0,!0,0,A.rF(),s)),s))}return A.ve(0,s,B.q,t.e,B.y,s,s,A8.a9o,s,s,!1,s,B.ah,!1,w)},
ct2(d){var w=this.as
w===$&&A.c()
return A.c6(w,new C.dX7(this,d),null)},
ct4(d){var w,v=this,u=null,t=A.m(14),s=v.r?u:new C.dX9(v),r=B.w.j(d?0.35:0.06),q=A.m(14),p=A.I(B.b7.j(0.35),B.r,1),o=v.gaoI()
o=o==null?u:o.c
o=A.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,B.Ir,u,u,u)
w=v.gaoI()
w=w==null?u:w.b
if(w==null)w="Style"
w=A.D(A.d(w,u,u,u,u,u,u,A.l(u,u,d?B.c:B.bh,u,u,u,u,u,u,u,u,12,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(u,A.A(A.a([o,B.ab,w,A.W(v.w?B.ME:B.qM,B.b7,u,u,u,20)],x.p),B.m,u,B.e,B.j,0,u,u),B.f,u,u,new A.o(r,u,p,q,u,u,B.n),u,u,u,u,B.oo,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.af)},
atO(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=A.a([B.aZ,B.aU],x.O)
break
case 1:w=A.a([B.bj,B.ct],x.O)
break
case 2:w=A.a([B.bA,B.aE],x.O)
break
default:w=n}v=m?6:0
u=A.m(14)
t=A.m(14)
s=this.r?n:new C.dWR(this,d)
r=A.m(14)
w=m?new A.a7(B.a3,B.a7,B.x,w,n,n):n
if(m)q=n
else q=B.w.j(g?0.3:0.05)
p=A.d(f,n,n,n,n,n,n,B.Ir,n,n,n)
if(m)o=B.c
else o=g?B.ad:B.bh
return A.D(A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.dg(n,A.v(A.a([p,A.d(e,n,n,n,n,n,n,A.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),B.m,n,B.e,B.j,0,B.p),n,n,B.bb,new A.o(q,n,n,r,n,w,B.n),B.a1,n,n,n,B.jq,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),B.f,n,v,n,n,n,n,n,B.af),1)},
ct5(d,e){var w,v,u,t=this,s=null,r=t.x===D.C4?t.z:t.Q,q=A.m(20)
if(r===d.a)r=B.b7.j(e?0.25:0.15)
else r=B.w.j(e?0.2:0.04)
w=A.m(20)
v=t.r?s:new C.dXa(t,d)
u=A.d(d.c,s,s,s,s,s,s,B.Ss,s,s,s)
return A.aF(!1,B.a1,!0,q,A.aK(!1,w,!0,new A.C(B.fG,A.A(A.a([u,B.d8,A.d(d.b,s,s,s,s,s,s,A.l(s,s,e?B.c:B.bh,s,s,s,s,s,s,s,s,10,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.m,s,B.e,B.Q,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),B.f,r,0,s,s,s,s,s,B.af)},
agY(d,e){var w=null,v=A.d(d,w,w,w,w,w,w,E.a70,w,w,w),u=B.aE.j(e?0.2:0.1)
return A.mz(w,u,v,w,this.r?w:new C.dX1(this,d),w,w,w,w)},
bEc(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=A.m(22),o=d?B.M.j(0.95):B.c,n=A.I(B.aE.j(0.2),B.r,1),m=x.p,l=A.a([],m)
if(q>0)l.push(new A.C(G.agS,A.d("$"+B.k.aa(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,A.l(r,r,B.aM.j(0.85),r,r,r,r,r,r,r,r,9,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=A.l(r,r,d?B.c:B.bh,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.C5?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=A.D(A.aL(r,B.T,!1,r,!0,B.q,r,A.aM(),w,r,r,r,r,r,2,A.br(r,B.ew,r,B.h3,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.l(r,r,d?B.c_:B.hE,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),B.y,!0,r,!0,r,!1,r,B.ai,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.dWO(s),r,!1,r,r,!1,r,!0,r,B.a9,r,r,r,r,r,r,r,r,r,r,r,v,!0,B.a5,r,B.am,r,r,r,r),1)
u=s.r
t=u?r:new C.dWP(s)
l.push(A.A(A.a([v,new A.Ic(w,B.aE,r),A.aF(!1,B.a1,!0,r,A.aK(!1,r,!0,A.ex(u?D.e10:D.bHi,r,D.aYy,42,r,42),B.cL,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),B.f,r,0,r,r,B.cL,r,r,B.af)],m),B.dE,r,B.e,B.j,0,r,r))
return A.p(r,A.v(l,B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,n,p,r,r,B.n),r,r,r,B.uY,B.afs,r,r,r)}}
C.aKa.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.Uq.prototype={
ad(){var w=this
return A.E(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.YH.prototype={
T(){return new C.az3(null,null)},
be8(){return this.f.$0()}}
C.az3.prototype={
a_(){var w,v=this,u=null
v.a1()
w=A.bj(u,D.blT,u,1,u,v)
w.cp(0)
v.d!==$&&A.aO()
v.d=w
w=A.bj(u,B.pm,u,1,u,v)
w.f7(0,!0)
v.e!==$&&A.aO()
v.e=w
w=A.bj(u,B.l3,u,1,u,v)
w.cG(0)
v.f!==$&&A.aO()
v.f=w
w=A.bj(u,B.x4,u,1,u,v)
w.cp(0)
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
w.brz()},
c3J(){var w=this.d
w===$&&A.c()
w.er(0).bz(new C.daC(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(A.aI(d,B.bS,x.w).w.a.a-32,360),h=B.w.j(0.82),g=k.gc3I(),f=x.l,e=J.e1(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&A.c()
e[v]=new A.CF(new C.daD(k,v,d),j,w,j)}f=A.B(e,f)
w=k.d
w===$&&A.c()
u=A.m(28)
t=A.I(B.c.j(0.22),B.r,1.5)
s=A.a([new A.ad(2,B.G,B.aJ.j(0.35),B.J,40),new A.ad(0,B.G,B.aI.j(0.25),B.fK,28)],x.V)
r=k.e
r===$&&A.c()
q=k.r
q===$&&A.c()
q=A.c6(new A.h3(A.a([r,q],x.U)),new C.daE(k),j)
r=A.nF(B.jj,D.fm8,new C.daF())
p=A.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,A.l(j,j,B.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,B.cs,j,1.45,!0,j,j,j,j,j,j,j,j),B.L,j,j)
o=x.p
n=A.A(A.a([k.aX7(B.kg,"Resets in 24h"),B.ab,k.aX7(B.pB,"Help Topics ready")],o),B.m,j,B.ba,B.j,0,j,j)
m=A.a([],o)
k.a.toString
l=B.c.j(0.35)
m.push(A.D(A.dT(D.fgR,new C.daG(k),A.de(j,j,j,j,j,j,j,j,j,B.ad,j,j,B.m8,j,new A.b7(A.m(14),B.Y),new A.az(l,1,B.r,-1),j,j,j,j)),1))
k.a.toString
m.push(B.aw)
k.a.toString
l=A.m(14)
m.push(A.D(A.bJ(D.flZ,g,A.bk(B.aI,j,j,6,B.c,j,B.m8,B.aI.j(0.5),new A.b7(l,B.Y),j,j,j)),1))
f.push(A.av(A.aE(j,A.c6(w,new C.daH(k),A.p(j,A.v(A.a([q,B.az,r,B.S,p,B.P,n,B.bv,A.A(m,B.m,j,B.e,B.j,0,j,j)],o),B.m,j,B.e,B.Q,0,B.p),B.f,j,j,new A.o(j,j,t,u,s,D.bPN,B.n),j,j,j,j,A9.agK,j,j,i)),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.daI(),j,j,j,j,j,j,!1,B.a8),j,j,j))
return A.aF(!1,B.a1,!0,j,A.aE(j,new A.an(B.W,j,B.aa,B.q,f,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,B.a8),B.f,h,0,j,j,j,j,j,B.af)},
aX7(d,e){var w=null,v=B.c.j(0.08),u=A.m(20),t=A.I(B.c.j(0.12),B.r,1)
return A.p(w,A.A(A.a([A.W(d,B.aJ,w,w,w,13),B.ea,A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.fG,w,w,w)}}
C.aJ3.prototype={
aQ(){this.aX()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdG())
w.b2$=null
w.a2()}}
C.N1.prototype={}
C.pC.prototype={}
C.apb.prototype={
T(){return new C.aCt(A.a([],x.E),A.a([],x.s))}}
C.aCt.prototype={
gap5(){return B.k.D(A.Ko(this.a.c.a,new C.e7w(this)),0,1/0)},
a7c(){var w,v=this,u=v.d,t=v.gap5()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)A.qB(u.a,t,!0,!1)},
IO(d,e){var w,v,u,t=this,s=t.gap5(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gap5()
if(w<v-0.005)A.hf9(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)A.qB(u.a,w,!0,!1)
A.qB(t.a.c.a,w,!0,!1)
A.Aj(!0,!1,w,t.a.c.a)},
a_(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a1()
$.aT.c1$.push(o)
w=$.HR+1
$.HR=w
if(w===1){w=$.h1I
if(w!=null)w.$0()}v=$.fN8.h(0,B.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=A.bl(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=A.bl(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=A.lD(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,B.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=A.aNB(u,B.k.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new A.v6(w,u,r,q,s.e,p)}o.d=t}o.Oj()
o.a7c()
$.aT.x1$.push(new C.e8c(o))
o.Q=A.dC(B.nE,new C.e8d(o))
o.as=A.dC(B.fP,new C.e8e(o))},
q(){var w=this,v=w.Q
if(v!=null)v.a9(0)
v=w.as
if(v!=null)v.a9(0)
$.aT.hB(w)
C.hvL()
w.a2()},
cvb(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new A.S(Date.now(),0,!1)
v=p.r
if(!C.a6J(v,w)){if(C.fNa(p,q.e)){q.m(new C.e7V(q,p))
q.xs(!1,!0,!0)}else if(q.c!=null)q.m(new C.e7W())
return}if(!C.c9g(v.c?v.bQ():v)){q.m(new C.e7X(p))
q.aXf(!1)
return}u=p.gBV()
if(u<=0)return
t=w.cY(A.c0(A.by(w),A.bG(w),A.bQ(w),12,0,0,0,0))
s=C.fNb(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.m(new C.e7Y())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(B.d.b8(q.e,new C.e7Z(r))){q.m(new C.e8_(p,w,u))
return}q.m(new C.e80(q,p,u,w))
q.aw9(new A.d1(r,p.a,u,B.fB,B.fb,"Clock-in daily earnings (local)",null,null,B.ck,w))},
iO(d){if(d===B.fs)this.Eb()},
Oj(){var w,v,u,t,s,r,q,p=this.d
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
w.c6=A.bl(p.c6,!0,x.N)
w=this.a.c
w.bR=p.c6.length
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
q=new A.v6(u,t,s,r,v.e,q)
u=q}w.x=u},
QZ(d){return this.ctS(d)},
ctS(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$QZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.Oj()
t.IO(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return A.b(x.r.b(s)?s:A.dP(s,x.H),$async$QZ)
case 3:case 1:return A.h(u,v)}})
return A.i($async$QZ,v)},
Eb(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$Eb=A.e(function(d,e){if(d===1){s.push(e)
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
return A.b(H.z1(q.w,k,l,j,m,!1,n),$async$Eb)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.m(new C.e7Q(q,p))
q.QZ(!1)}w=8
return A.b(q.J_(),$async$Eb)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=A.a9(h)
$.am.$1("[growth income] pull wallet: "+A.t(o))
w=9
return A.b(q.J_(),$async$Eb)
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
return A.i($async$Eb,v)},
MM(d){return this.bys(d)},
byr(){return this.MM(null)},
bys(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$MM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return A.b(A.aA(),$async$MM)
case 3:s=f
r=B.a.i(t.a.c.a.toLowerCase())
q=A.d9(t.w,x.N)
r=s.rR("ngmy_gi_credited_txn_ids_"+r)
q.v(0,r==null?A.a([],x.s):r)
j.a=0
p=A.a([],x.s)
o=d==null?null:A.kv(d,A.T(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,A.L)(r),++m){l=r[m]
k=l.a
if(q.t(0,k))continue
if(o!=null&&!o.t(0,k))continue
if(l.d===B.fq&&l.x===B.ck&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.m(new C.e7x(j,t,i))
q.v(0,p)
r=A.B(q,A.a3(q).k("cl.E"))
t.w=r
w=4
return A.b(A.apd(t.a.c.a,r),$async$MM)
case 4:t.avH(!1,!0)
r=t.c
if(r!=null)r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Balance updated: +$"+A.dA(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$MM,v)},
J_(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$J_=A.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=A.T(a2).k("a2<1>")
a4=A.B(new A.a2(a2,new C.e7R(),a3),a3.k("H.E"))
a5=a4
a6=A.a([],x.s)
w=J.ac(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=A.T(a2).k("J<1,n>")
e=A.B(new A.J(a2,new C.e7S(),a3),a3.k("ai.E"))
q=e
w=9
return A.b(A.lj("transactions","id,status",null,null,null,A.E(["id",q],x.N,x.j),null,!0,null,null,!1,B.bG),$async$J_)
case 9:p=a9
if(r.c==null){w=1
break}o=!1
for(a2=J.aX(p);a2.C();){n=a2.gU(a2)
m=n
a3=J.q(m,"id")
l=J.k(a3==null?"":a3)
a3=A.aN(J.q(m,"status"))
d=a3==null?null:B.k.O(a3)
k=d==null?0:d
if(J.ac(l)===0)continue
j=B.d.bc(r.e,new C.e7T(l))
if(j<0)continue
i=r.e[j].x
if(J.y(k,1))a0=B.ck
else a0=J.y(k,2)?B.k0:B.ds
h=a0
if(!J.y(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===B.ds&&h===B.ck&&a3[j].d===B.fq)J.cf(a6,l)
if(i===B.ds&&h===B.k0&&r.e[j].d===B.eK){g=r.d
if(g!=null){r.IO(g.d+r.e[j].c,!1)
r.avH(!1,!0)}}}}if(o&&r.c!=null)r.m(new C.e7U())
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
case 8:case 4:w=J.ac(a6)!==0?10:12
break
case 10:w=13
return A.b(r.MM(a6),$async$J_)
case 13:w=11
break
case 12:w=14
return A.b(r.byr(),$async$J_)
case 14:case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$J_,v)},
OX(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$OX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return A.b(A.uq(i.a,i),$async$OX)
case 3:h=e
if(t.c==null){w=1
break}t.m(new C.e7B(t,h))
t.Oj()
t.a7c()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return A.b(H.z1(s[0],p,q,o,r,!0,i),$async$OX)
case 4:i=e.a
n=i[4]
m=A.bl(i[2],!0,x.o)
l=i[5]
t.w=A.bl(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.Oj()
t.a7c()
k=C.fNa(n,m)
if(k)t.IO(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.Z&&s.az>0
else s=!0
j=A.h2r(n,m,new A.S(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.Oj()
if(t.c==null){w=1
break}t.m(new C.e7C(t,n,m,l))
if(i){t.xs(!1,!0,!0)
if(j==="reset"){A.h1h(t.a.c.a)
i=t.c
if(i!=null)A.h1k(i,null)}else if(j==="warn2"){A.h1i(t.a.c.a)
i=t.c
if(i!=null)C.h1l(i)}}else if(k)t.xs(!1,!0,!0)
else t.QZ(!1)
case 1:return A.h(u,v)}})
return A.i($async$OX,v)},
xs(d,e,f){return this.cdZ(d,e,f)},
avH(d,e){return this.xs(d,!1,e)},
aXf(d){return this.xs(!1,d,!1)},
cdZ(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$xs=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new A.S(Date.now(),0,!1).a5()
r=t.a.c.a
q=t.e
p=t.f
w=3
return A.b(A.ra(r,o,q,!1,t.w,s,p),$async$xs)
case 3:p=t.a.c.a
q=t.e
r=t.f
A.HW(t.w,p,q,s,o,r)
if(f)t.QZ(d)
case 1:return A.h(u,v)}})
return A.i($async$xs,v)},
c3Y(){this.m(new C.e7K())
this.avH(!1,!0)},
adq(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===B.ck&&A.rD(d)){w=r.a
w.f.$1(new A.d1(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.c9c(q,d)
v=q.d=A.Ko(r.a.c.a,new C.e7H(r))
r.at=r.a.c.d=v
A.qB(q.a,v,!0,!1)
if(r.c!=null)r.m(new C.e7I(r,d))
r.xs(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new A.d1(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===B.ds
if(w&&d.d===B.fq)s=!1
else if(w&&d.d===B.eK){r.IO(q.d-d.c,!0)
s=!0}else{C.c9c(q,d)
w=d.d
s=w===B.eK||w===B.jD
r.IO(q.d,s)}r.m(new C.e7J(r,d))
w=d.d
r.xs(s,e,w===B.eK||w===B.jD||d.x===B.ck||w===B.fB)},
aw9(d){return this.adq(d,!0,!1)},
aYc(d,e){return this.adq(d,!0,e)},
aYb(d,e){return this.adq(d,e,!1)},
c6U(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.hZD(u,e,d)){v.lT("This plan is already active.")
return}w=A.heG(u.a,d,e)
if(C.hW4(u.a,v.e,w)){v.lT("You already own this plan.")
return}if(u.d<g){v.lT("Insufficient balance. Add funds in the Wallet tab first.")
return}v.m(new C.e7L(v))
v.m(new C.e7M(v,u,new A.v6(d,e,0.0286,new A.S(Date.now(),0,!1),0,0)))
v.aw9(new A.d1(w,u.a,g,B.jD,B.fb,"Direct investment buy: "+d,null,null,B.ck,new A.S(Date.now(),0,!1)))
v.m(new C.e7N(v))
v.lT("Plan purchased: "+d)},
lT(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
Zt(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hu(s,new C.amc(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$Zt)
case 3:w=4
return A.b(t.OX(),$async$Zt)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zt,v)},
adU(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$adU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hu(s,new C.ah2(r,A.a([r],x.d9),B.Px,t.a.d,t.gaYa(),t.gaXe(),null),!1,null,x.X),$async$adU)
case 3:case 1:return A.h(u,v)}})
return A.i($async$adU,v)},
adS(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$adS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hu(s,new C.ajO(r,t.a.d,t.e,t.gaYa(),t.gaXe(),new C.e7P(t),null),!1,"LocalGrowthGameCenter",x.X),$async$adS)
case 3:case 1:return A.h(u,v)}})
return A.i($async$adS,v)},
abq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$abq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new A.S(s,0,!1)
w=C.fNa(j,t.e)?3:4
break
case 3:w=5
return A.b(t.aXf(!0),$async$abq)
case 5:case 4:if(j.x==null){t.lT("Choose an investment plan first, then come back to clock in.")
t.m(new C.e7D(t))
w=1
break}if(A.mo(r)===6||A.mo(r)===7){t.lT("Clock-in opens Monday through Friday.")
w=1
break}if(!C.h2s(r)){t.lT("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a6J(q,r)&&j.fy>0){t.lT("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!A.aOj(q,r))if(!A.aOj(j.fr,r)){q=A.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,A.L)(p),++n){m=p[n]
if(B.a.i(m.b.toLowerCase())===B.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new A.aEl(m.y,l,m.a))}}q=A.he7(q,r)}else q=p
else q=p}else q=!1
if(q){t.lT("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.lT("You are already clocked in for today.")
w=1
break}k=C.hxc(r)
q=j.a
t.m(new C.e7E(j,r,k))
t.aYb(new A.d1("local_clockin_manual_"+q+"_"+s,j.a,0,B.fB,B.fb,"Clock-in session started (local)",null,null,B.ck,r),!1)
t.lT("Clock-in started. Keep Growth Income open for today.")
case 1:return A.h(u,v)}})
return A.i($async$abq,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.N(d).ax.a===B.H?B.j0:B.ph
if(l.d==null)return A.ei(B.kp,j,!0)
w=x.o
v=A.V(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=B.a.i(l.a.c.a.toLowerCase())
u=$.fpN
u=u==null?k:u.$0()
u=J.aX(u==null?B.i_:u)
while(u.C()){t=u.gU(u)
q=t.a
if(q.length===0||v.ag(0,q)||A.rD(t))continue
if(B.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(A.dr(o.toLowerCase(),"clock-in",0))continue
v.n(0,q,t)}w=A.B(new A.bc(v,v.$ti.k("bc<2>")),w)
v=l.e
B.d.v(w,new A.a2(v,new C.e84(),A.T(v).k("a2<1>")))
B.d.b1(w,new C.e85())
v=l.d
v.toString
u=C.hLN(l.a.c)
t=l.d
t.toString
t=A.ei(new C.akF(t,l.a.e,l.z,l.gc6T(),l.aS6(),D.fD5),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=A.ei(new C.azR(l.aS6(),q,n,o,w,new C.e86(l),l.gc8Z(),new C.e87(l),D.fD6),j,!0)
m=A.aI(d,k,x.w).w
n=l.y
return new A.Vl(n,new C.e88(l),A.aF(!1,B.a1,!0,k,new A.a6(1/0,m.a.b,new A.an(B.W,k,B.aa,B.q,A.a([A.bY(0,A.ei(k,j,!0),0,0,0),A.bY(0,A.bn(!1,[new C.azQ(v,u,w,l.gbZ_(),new C.e89(l),new C.e8a(l),new C.e8b(d),l.gc9P(),l.gc9L(),D.fD4),t,o][n],!0,!1,B.ag,!0,!0),0,0,0),A.ao(0,l.bAK(),k,k,0,0,k,k)],x.p),k),k),B.f,j,0,k,k,k,k,k,B.af),k)},
aS6(){var w=null,v=A.a([D.eH.j(0.24),B.M.j(0.72)],x.O)
return A.ho(A.aK(!1,w,!0,A.p(B.A,D.bLM,B.f,w,w,new A.o(w,w,A.I(D.eH.j(0.38),B.r,1),w,A.a([new A.ad(0,B.G,D.eH.j(0.18),B.J,16)],x.V),new A.a7(B.ax,B.aD,B.x,v,w,w),B.a6),w,40,w,w,w,w,w,40),B.cL,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e7A(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bAK(){var w=null,v=A.m(27),u=A.I(B.av.j(0.45),B.r,1),t=A.a([new A.ad(0,B.G,B.w.j(0.5),B.eT,24),new A.ad(-2,B.G,B.av.j(0.12),B.J,18)],x.V)
return new A.C(B.Lv,A.bn(!0,A.av(new A.cU(D.aWR,A.p(w,A.cm(new C.e7y(this)),B.f,w,w,new A.o(w,w,u,v,t,D.bPg,B.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,B.ag,!0,!1),w)},
c_E(d){var w=null,v=this.y===d,u=D.cSl[d],t=u.b,s=u.a,r=""+d,q=x.W
return A.D(A.ds(w,!0,w,A.aE(B.c5,A.ri(A.q4(v?A.W(s,D.aaH,new A.cw("on"+r,q),w,w,21):A.v(A.a([A.W(s,B.c.j(0.62),w,w,w,19),B.bz,A.d(t,w,1,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,new A.cw("off"+r,q),B.ba,B.j,0,B.p),B.is,A.rA(),B.bb,B.bb,A.a0I())),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e7G(this,d),w,w,w,w,w,w,!1,B.a8),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,B.c1,w),1)}}
C.azQ.prototype={
bXQ(d){return C.fNb(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.N(d)
w=B.c.j(0.58)
v=f.e
u=A.T(v).k("a2<1>")
u=A.p3(new A.a2(v,new C.df5(),u),3,u.k("H.E"))
t=A.B(u,A.a3(u).k("H.E"))
v=f.c
s=v.x
r=new A.S(Date.now(),0,!1)
q=v.f
p=C.a6J(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.h2s(r)
m=v.gBV()
l=A.a([D.eH.j(0.24),B.M.j(0.72)],x.O)
k=A.I(D.eH.j(0.38),B.r,1)
j=x.V
i=A.a([new A.ad(0,B.G,D.eH.j(0.18),B.J,16)],j)
l=A.aK(!1,e,!0,A.p(B.A,A.W(B.hW,D.eH,e,e,e,19),B.f,e,e,new A.o(e,e,k,e,i,new A.a7(B.ax,B.aD,B.x,l,e,e),B.a6),e,38,e,e,e,e,e,38),B.cL,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=A.m(14)
k=A.m(14)
j=A.a([new A.ad(0,B.G,B.b4.j(0.45),B.cJ,16)],j)
h=A.m(12)
g=x.p
j=A.bM0(!1,l,"GROWTH INCOME",A.aK(!1,i,!0,new A.a6(44,44,new A.an(B.W,e,B.aa,B.f,A.a([A.p(B.A,A.p(B.A,D.bEp,B.f,e,e,new A.o(B.ip.j(0.78),e,e,h,e,e,B.n),e,36,e,e,e,e,e,36),B.f,e,e,new A.o(e,e,e,k,j,D.bQI,B.n),e,42,e,e,e,e,e,42),A.ao(e,A.p(B.A,D.bKR,B.f,e,e,new A.o(B.cp,e,A.I(D.acY,B.r,2),e,e,e,B.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.h50(B.hf,new C.df6(),k)
k=A.A(A.a([A.D(C.h5_(new C.df7(f,B.qn,n),new A.S(Date.now(),0,!1),h,k),1),B.o_,A.D(new A.uc(new C.df8(f,B.qn),e,new A.h3(A.a([$.yf(),$.a1L()],x.U)),e),1)],g),B.m,e,B.e,B.j,0,e,e)
h=f.c_P(B.qn,D.eH)
v=A.D(f.crq("Total Profit","$"+A.dA(v.e),B.qn),1)
u=u?e:s.b
return A.ei(A.cd(A.v(A.a([j,B.S,k,B.ac,new C.azP(f.d,m,q,p,n,o,D.eH,f.gbXP(),f.f,e),B.ac,h,B.S,A.A(A.a([v,B.o_,A.D(f.b3r("Total Investment","$"+A.dA(u==null?0:u),B.qn,f.r),1)],g),B.m,e,B.e,B.j,0,e,e),B.S,f.bXM(d,t,D.eH,w)],g),B.aj,e,B.e,B.j,0,B.p),B.q,e,B.y,e,B.XV,e,e,B.ah),D.acY,!0)},
avG(d,e,f,g,h){var w=null,v=A.m(h),u=A.I(B.c.j(0.09),B.r,1),t=A.a([new A.ad(0,B.G,B.w.j(0.4),B.dn,18)],x.V)
return A.p(w,A.bv(A.m(h-1),new A.an(B.W,w,B.aa,B.q,A.a([A.bY(0,A.bZ(w,new A.o(w,w,w,w,w,new A.bR(f,1.15,B.x,w,0,A.a([e.j(0.22),e.j(0)],x.O),w,w),B.n),B.bd),0,0,0),new A.C(g,d,w)],x.p),w),B.aq),B.f,w,w,new A.o(w,w,u,v,t,D.bPG,B.n),w,w,w,w,w,w,w,w)},
aXd(d,e,f,g){return this.avG(d,e,f,B.ag,g)},
b5h(d,e,f,g,h,i,j){var w=null,v=A.ao(-14,A.W(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=A.m(30),s=A.I(f.j(0.4),B.r,1),r=x.p,q=this.aXd(new A.a6(w,80,new A.an(B.W,w,B.aa,B.q,A.a([v,new A.C(D.bnY,A.v(A.a([A.p(w,A.A(A.a([A.W(e,f,w,w,w,15),B.ea,A.d(h.toUpperCase(),w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.agZ,w,w,w),B.b3,A.f1(B.a3,A.d(i,w,1,w,w,w,w,A.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,B.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.eg)],r),B.F,w,B.e,B.j,0,B.p),w)],r),w),w),f,B.kX,22)
if(g==null)return q
return A.aK(!1,A.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
c_P(d,e){var w,v,u,t,s=null,r=A.I(e.j(0.55),B.r,2),q=e.j(0.12),p=x.p,o=A.a([],p)
for(w=0;w<3;++w){v=new A.aV(3,3)
o.push(A.p(s,s,B.f,s,s,new A.o(e,s,s,new A.bp(v,v,v,v),s,s,B.n),s,D.cDY[w],s,D.brr,s,s,s,5))}r=A.p(s,A.A(o,B.dE,s,B.ba,B.j,0,s,s),B.f,s,s,new A.o(q,s,r,s,s,s,B.a6),s,42,s,s,s,s,s,42)
q=A.D(A.v(A.a([D.fiv,B.bz,A.A(A.a([A.p(s,s,B.f,s,s,new A.o(e,s,s,s,A.a([new A.ad(0,B.G,e,B.J,6)],x.V),s,B.a6),s,7,s,s,s,s,s,7),B.bp,new A.dm(1,B.ci,A.d("Live \xb7 real-time statistics",s,1,B.a2,s,s,s,A.l(s,s,B.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),B.m,s,B.e,B.j,0,s,s)],p),B.F,s,B.e,B.j,0,B.p),1)
o=A.m(16)
v=A.m(16)
u=B.w.j(0.3)
t=A.I(e.j(0.45),B.r,1.2)
return this.avG(A.A(A.a([r,D.eHi,q,B.ab,A.aK(!1,o,!0,A.p(s,A.v(A.a([A.W(B.ov,e.j(0.95),s,s,s,21),B.uf,A.d("PLAY",s,s,s,s,s,s,A.l(s,s,B.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,B.I,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),B.m,s,B.ba,B.j,0,B.p),B.f,s,s,new A.o(u,s,t,v,s,s,B.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),B.m,s,B.e,B.j,0,s,s),e,B.a3,B.Xt,26)},
b3r(d,e,f,g){var w,v=null,u=B.a.t(d.toLowerCase(),"profit"),t=u?B.cp:B.aW,s=A.p(v,v,B.f,v,v,new A.o(t,v,v,D.aV4,v,v,B.n),v,v,v,B.mU,v,v,v,5),r=x.p
r=A.a([s,B.bf,A.D(A.v(A.a([A.A(A.a([A.W(u?B.tB:B.xU,t,v,v,v,14),B.ea,new A.dm(1,B.ci,A.d(d,v,1,B.a2,v,v,v,A.l(v,v,B.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),B.m,v,B.e,B.j,0,v,v),B.ao,A.f1(B.a3,A.d(e,v,1,v,v,v,v,D.eQc,v,v,v),B.f,B.eg)],r),B.F,v,B.ba,B.j,0,B.p),1)],r)
s=g==null
if(!s)r.push(new A.C(B.afe,A.W(B.eo,B.c.j(0.35),v,v,v,v),v))
w=this.aXd(new A.a6(v,66,A.A(r,B.m,v,B.e,B.j,0,v,v),v),t,B.lo,20)
if(s)return w
return A.aK(!1,A.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
crq(d,e,f){return this.b3r(d,e,f,null)},
bXM(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.p(m,m,B.f,m,m,new A.o(f,m,m,m,A.a([new A.ad(0,B.G,f,B.J,8)],x.V),m,B.a6),m,9,m,m,m,m,m,9),k=A.d("LIVE ACTIVITY",m,m,m,m,m,m,A.l(m,m,B.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,B.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=B.c.j(0.07),i=A.m(20),h=x.p
i=A.a([A.A(A.a([l,B.a5U,k,B.b3,A.p(m,A.d(""+e.length,m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.f,m,m,new A.o(j,m,m,i,m,m,B.n),m,m,m,m,B.Y7,m,m,m)],h),B.m,m,B.e,B.j,0,m,m),B.P],h)
if(e.length===0)i.push(new A.C(B.Xh,A.v(A.a([A.W(B.h4,g,m,m,m,30),B.ao,A.d("Nothing yet",m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.bz,A.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),B.L,m,m)],h),B.m,m,B.e,B.j,0,B.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=A.a([],h)
if(w>0)k.push(new A.m9(1,m,m,m,m,B.c.j(0.07),m))
j=e[w]
v=j.d
u=v===B.eK||v===B.jD
t=u?B.iZ:D.eH
g=B.c.j(0.5)
v=new A.aV(12,12)
s=A.a([t.j(0.28),t.j(0.08)],l)
r=new A.az(t.j(0.35),1,B.r,-1)
v=A.p(B.A,A.W(u?B.tB:B.vm,t,m,m,m,18),B.f,m,m,new A.o(m,m,new A.bP(r,r,r,r),new A.bp(v,v,v,v),m,new A.a7(B.ax,B.aD,B.x,s,m,m),B.n),m,38,m,m,m,m,m,38)
s=C.hTX(j)
q=C.h6G(j.y)
s=A.v(A.a([new A.x(s,m,B.mu,m,m,m,m,B.a2,m,1,m,m),B.bz,new A.x(q,m,new A.F(!0,g,m,m,m,m,11,B.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.F,m,B.e,B.j,0,B.p)
q=t.j(0.14)
p=new A.aV(20,20)
o=u?"-":"+"
n=A.dA(j.c)
q=A.p(m,new A.x(o+"$"+n,m,new A.F(!0,t,m,m,m,m,13,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),B.f,m,m,new A.o(q,m,m,new A.bp(p,p,p,p),m,m,B.n),m,m,m,m,B.nJ,m,m,m)
j=C.hdK(j)
k.push(new A.C(Q.Ll,new A.co(B.aQ,B.e,B.j,B.m,m,B.p,m,0,A.a([v,B.bf,new A.bE(1,B.bi,s,m),A.v(A.a([q,B.d0,new A.x(j,m,new A.F(!0,g,m,m,m,m,10,B.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.dE,m,B.e,B.j,0,B.p)],h),m),m))
B.d.v(i,k)}return this.avG(A.v(i,B.m,m,B.e,B.j,0,B.p),f,B.b1,D.bo5,26)}}
C.azP.prototype={
T(){return new C.bfF(null,null)},
cL1(d){return this.z.$1(d)},
cMf(){return this.Q.$0()}}
C.bfF.prototype={
a_(){var w,v=this,u=null
v.a1()
w=A.bj(u,B.pp,u,1,u,v)
w.cG(0)
v.d!==$&&A.aO()
v.d=w
w=A.bj(u,D.blK,u,1,u,v)
w.cG(0)
v.e!==$&&A.aO()
v.e=w
w=A.bj(u,B.uR,u,1,u,v)
v.f!==$&&A.aO()
v.f=w
v.b4o()},
gb7_(){var w=new A.S(Date.now(),0,!1)
if(A.mo(w)===6||A.mo(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
b4o(){var w=this,v=w.a,u=v.e||v.f||w.gb7_()
if(u){v=w.f
v===$&&A.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){v=w.f
v===$&&A.c()
v.cG(0)}else{if(!u){v=w.f
v===$&&A.c()
v=v.r
v=v!=null&&v.a!=null}else v=!1
if(v){v=w.f
v===$&&A.c()
v.bX(0)}}},
br(d){this.bE(d)
this.b4o()},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
w.brQ()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gb7_()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=B.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?B.av:g.x
g=g.r?new C.deZ(i):h
v=A.m(32)
s=A.m(32)
r=f?D.d74:D.d72
q=A.I((f?D.od:B.b0).j(0.28),B.r,1.4)
p=x.V
o=A.a([new A.ad(0,B.G,(f?B.av:B.b7).j(0.16),B.fK,28)],p)
n=x.p
m=A.a([],n)
if(f)B.d.v(m,A.a([A.ao(h,i.aa_(D.od,130),h,h,h,-24,-30,h),A.ao(-36,i.aa_(B.av,140),h,h,-28,h,h,h)],n))
else B.d.v(m,A.a([A.ao(h,i.aa_(B.b7,120),h,h,h,-30,-36,h),A.ao(-40,i.aa_(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bY(0,A.e_(A.bv(l,new A.es(A.c6(k,new C.df_(i),h),h),B.aq),!0,h),0,0,0))}if(f){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bY(0,A.e_(A.bv(l,new A.es(A.c6(k,new C.df0(i),h),h),B.aq),!0,h),0,0,0))}l=A.m(999)
k=B.c.j(0.06)
j=A.I(B.c.j(0.16),B.r,1)
m.push(A.ao(h,new A.cU(D.aWX,A.p(h,A.A(A.a([A.p(h,h,B.f,h,h,new A.o(t,h,h,h,A.a([new A.ad(0,B.G,t.j(0.5),B.J,8)],p),h,B.a6),h,8,h,h,h,h,h,8),B.ab,new A.dm(1,B.ci,A.d(u,h,1,B.a2,h,h,h,D.eVy,h,h,h),h)],n),B.m,h,B.e,B.Q,0,h,h),B.f,h,h,new A.o(k,h,j,l,h,h,B.n),h,h,h,h,B.h3,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.h50(B.hf,new C.df1(),l)
m.push(C.h5_(new C.df2(i,f,t,e,w),new A.S(Date.now(),0,!1),j,l))
return A.aK(!1,v,!0,A.dg(h,new A.an(B.W,h,B.aa,B.f,m,h),h,h,B.bb,new A.o(h,h,q,s,o,new A.a7(B.ax,B.aD,B.x,r,h,h),B.n),B.As,h,392,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
aa_(d,e){var w=null
return A.e_(A.p(w,w,B.f,w,w,new A.o(w,w,w,w,w,new A.bR(B.A,0.5,B.x,w,0,A.a([d.j(0.22),d.j(0)],x.O),w,w),B.a6),w,e,w,w,w,w,w,e),!0,w)}}
C.b9r.prototype={
aXg(d,e,f,g){var w=new A.aQ($.X().r,B.ap,null,null,A.a([],x.g)),v=e.a,u=e.b,t=u-f
w.E(new A.b5(v,t))
w.E(new A.cS(v,u,v+f,u))
w.E(new A.cS(v,u,v,u+f))
w.E(new A.cS(v,u,v-f,u))
w.E(new A.cS(v,u,v,t))
w.E(new A.bF())
d.aO(w,g)},
a6(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=a8/2,b0=b3.b,b1=b0/2
for(w=a7.b,v=w*6.283185307179586,u=0;u<16;++u){t=B.k.F(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=B.k.F(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+B.o.F(u,3))+u)+1)/2
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.1+r*0.5).gp(0)
a7.aXg(b2,new A.u(t*a8,s*b0),2+r*2.2,q)}for(a8=b2.a,b0=w*2,p=a7.e,o=0;o<3;++o){n=B.k.F(b0+o/3,1)
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
J.bA(a8.save())
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
if(e>0.6&&f>0.35){h=$.hjf()
g=h.b
a0=g.c
g=g.a.c
h.a6(b2,new A.u(-a0/2,-g.gbb(g)/2))}a8.restore()
break
case 1:$.X()
a0=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
a0.r=p.j(f*0.95).gp(0)
a7.aXg(b2,new A.u(h,g),3+f*3,a0)
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
g.z=N.mn
l=g.H()
a8.drawCircle(a9+w*144,b1+h*144,7,l)
l.delete()}},
aq(d){return d.b!==this.b}}
C.b9q.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.X(),a4=A.M()
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
q=p.gbI().a.snapshot()
w.drawPath((p.e=new A.cF(q)).a,n)
n.delete()}a0=v*2
a2=B.k.F(a0,1)
J.bA(w.save())
w.translate(a2*(d+240)-120,0)
a5.j7(0,0.35)
a2=-a1
a3=A.M()
a3.sau(new A.a7(B.a3,B.a7,B.x,A.a([B.c.j(0),B.c.j(0.07),B.c.j(0)],x.O),e,e).aw(0,D.eBb))
a5.aY(new A.aa(-18,a2,18,a2+a1*3),a3)
w.restore()
for(a2=a1+40,s=0;s<34;++s){m=B.k.F(Math.abs(Math.sin(s*91.7)*43758.5453),1)
l=B.k.F(v*(1+B.o.F(s,2))+s/34,1)
a3=l*6.283185307179586
u=Math.sin(a3*2+s)
J.bA(w.save())
w.translate(m*d+u*14,l*a2-20)
w.rotate(a3*(2+B.o.F(s,3))*180/3.141592653589793,0,0)
a3=B.k.D(Math.abs(Math.cos(a3*3+s)),0.3,1)
w.scale(1,a3)
if(l<0.08)a3=l/0.08
else a3=l>0.9?(1-l)/0.1:1
k=B.k.D(a3,0,1)
a3=A.bz(D.eBI,B.RB)
u=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
u.r=D.awi[B.o.F(s,6)].j(k*0.9).gp(0)
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
f=D.awi[B.o.F(s+i,6)].j(k)
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
C.b9p.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a6.a/2,a1=a6.b/2,a2=new A.u(a0,a1),a3=a0-4,a4=a3-22
$.X()
w=A.M()
w.b=B.ae
w.c=14
v=e.d
w.r=(v?e.r:B.b0).j(0.22).gp(0)
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
l.delete()}J.bA(s.save())
w=$.X().r
t=x.g
p=new A.aQ(w,B.ap,d,d,A.a([],t))
p.E(new A.kE(A.bU(a2,a4)))
a5.tQ(0,p)
p=A.bU(a2,a4)
o=A.M()
o.sau(D.e7y.aw(0,A.bU(a2,a4)))
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
a1=v?A.a([e.f.j(0.55),w.j(0.78),e.r.j(0.92)],a1):A.a([w.j(0.22),D.eH.j(0.34),B.cY.j(0.62)],a1)
a0.sau(new A.a7(B.b1,B.b6,B.x,a1,d,d).aw(0,A.bU(a2,a4)))
a5.aO(h,a0)
a0=A.M()
a0.b=B.ae
a0.c=2
a0.r=B.c.j(v?0.28:0.14).gp(0)
a5.aO(h,a0)}s.restore()},
aq(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.azR.prototype={
T(){var w=$.aw()
return new C.azS(new A.ar(B.as,w),new A.ar(B.as,w))},
be1(d,e){return this.w.$2$cloudRequest(d,e)}}
C.azS.prototype={
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
lT(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
cte(d){this.a.be1(d,!0)
this.lT("Deposit submitted. Admin will review your payment proof.")
this.m(new C.dfp())},
crX(){var w,v,u=this,t=A.d3(u.d.a.a)
if(t==null||t<=0){u.lT("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
A.hu(w,new C.aoh(v.d,t,u.gctd(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
czv(){var w,v,u,t,s=this,r=s.d,q=A.d3(r.a.a)
if(q==null||q<=0){s.lT("Enter an amount to withdraw.")
return}if(q<10){s.lT("Minimum withdrawal is $"+A.dA(10)+".")
return}w=s.a.d.d
if(q>w){s.lT("Insufficient balance. You have $"+A.dA(w)+".")
return}w=s.e
v=C.hf7(w.a.a)
if(v.length===0){s.lT("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.be1(new A.d1("wd_"+1000*Date.now(),s.a.d.a,q,B.eK,B.km,"Withdrawal to $"+v+" \u2014 Fee: $"+A.dA(u)+" \u2014 You receive: $"+A.dA(q-u),null,null,B.ds,new A.S(Date.now(),0,!1)),!0)
s.lT("Withdrawal submitted \u2014 waiting for admin approval.")
r.bM(0,B.c3)
w.bM(0,B.c3)
s.m(new C.dfq())},
cws(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,A.L)(w),++s){r=w[s]
if(r.x!==B.ck||!this.aTT(r)||A.fUC(r))continue
q=r.d
p=q===B.eK||q===B.jD||q===B.ep
q=r.c
if(p)t+=q
else u+=q}return new A.bmB(u,t)},
B(d){var w,v,u,t=this,s=null,r=t.cws(),q=t.a.r,p=new A.a2(q,new C.dfr(),A.T(q).k("a2<1>")).gM(0)
q=t.a
w=q.c
q=q.x
v=A.a([D.eH.j(0.24),B.M.j(0.72)],x.O)
u=A.I(D.eH.j(0.38),B.r,1)
q=A.bM0(!1,w,"WALLET",A.ho(A.aK(!1,s,!0,A.p(B.A,A.W(V.ak8,D.eH,s,s,s,18),B.f,s,s,new A.o(s,s,u,s,s,new A.a7(B.ax,B.aD,B.x,v,s,s),B.a6),s,40,s,s,s,s,s,40),B.cL,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),s,"Back up wallet",s,s))
v=t.bzm(r.a,r.b,p)
u=x.p
w=A.A(A.a([t.aoF(B.vm,"Deposit",0),t.aoF(B.tB,"Withdraw",1),t.aoF(B.h5,"History",2)],u),B.m,s,B.pK,B.j,0,s,s)
return A.ei(A.bn(!1,A.cd(A.v(A.a([q,B.bv,v,B.d5,w,B.d5,A.q4(t.f===2?t.bUU():t.c_i(),B.i5,A.rA(),B.bb,B.bb,A.a0I())],u),B.aj,s,B.e,B.j,0,B.p),B.q,s,B.y,s,D.bpX,s,s,B.ah),!0,!1,B.ag,!0,!0),B.zX,!0)},
bzm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.a.i(i.a.e)
if(B.a.t(g,"@")){w=B.a.cJ(g,"@")
v=B.a.ap(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+B.a.b_(g,w)}else v=g
w=A.m(26)
u=A.ao(h,i.axP(220,0.1),h,h,h,-60,-70,h)
t=A.ao(-90,i.axP(200,0.07),h,h,h,30,h,h)
s=A.ao(-60,i.axP(150,0.05),h,h,-40,h,h,h)
r=A.m(26)
r=A.bY(0,A.bZ(h,new A.o(h,h,A.I(B.c.j(0.18),B.r,1),r,h,h,B.n),B.bd),0,0,0)
q=A.m(6)
p=x.p
q=A.A(A.a([A.p(h,A.b3(h,h,h,new C.b8S(h),B.au),B.f,h,h,new A.o(h,h,h,q,h,D.bRL,B.n),h,28,h,h,h,h,h,38),B.b3,D.fqA],p),B.m,h,B.e,B.j,0,h,h)
o=A.d("Available balance",h,h,h,h,h,h,A.l(h,h,B.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,B.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=A.f1(B.a3,C.ap1(new C.dfb(i),D.f_M,i.a.d.a),B.f,B.eg)
m=A.a([A.D(i.aMM(B.tu,"In",d),1),A.D(i.aMM(B.vb,"Out",e),1)],p)
if(f>0){l=B.cR.j(0.22)
k=A.m(99)
j=A.I(B.iy.j(0.6),B.r,1)
m.push(A.p(h,A.d(""+f+" pending",h,h,h,h,h,h,D.eWu,h,h,h),B.f,h,h,new A.o(l,h,j,k,h,h,B.n),h,h,h,h,B.nJ,h,h,h))}return new A.fF(1.62,A.bv(w,new A.an(B.W,h,B.aa,B.q,A.a([D.e6N,u,t,s,r,new A.C(A7.qG,A.v(A.a([q,B.b3,o,B.bz,n,B.b3,A.A(m,B.m,h,B.e,B.j,0,h,h),B.ao,A.d(v,h,1,B.a2,h,h,h,A.l(h,h,B.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,B.a4,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),B.F,h,B.e,B.j,0,B.p),h)],p),h),B.aq),h)},
axP(d,e){var w=null
return A.p(w,w,B.f,w,w,new A.o(w,w,A.I(B.c.j(e),B.r,22),w,w,w,B.a6),w,d,w,w,w,w,w,d)},
aMM(d,e,f){var w=null,v=B.c.j(0.16)
return A.A(A.a([A.p(w,A.W(d,B.c,w,w,w,13),B.f,w,w,new A.o(v,w,w,w,w,w,B.a6),w,22,w,w,w,w,w,22),B.bp,new A.dm(1,B.ci,A.f1(B.a3,A.d(e+"  $"+A.dA(f),w,w,w,w,w,w,B.o0,w,w,w),B.f,B.eg),w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aoF(d,e,f){var w=null,v=this.f===f,u=v?D.bT4:new A.a7(B.a3,B.a7,B.x,A.a([B.c.j(0.08),B.c.j(0.03)],x.O),w,w),t=A.I(v?B.c.j(0.6):D.eH.j(0.25),B.r,1),s=v?A.a([new A.ad(0,B.G,B.av.j(0.45),B.J,18)],x.V):w
u=A.dg(w,A.W(d,v?D.aaH:D.eH,w,w,w,26),w,w,B.cq,new A.o(w,w,t,w,s,u,B.a6),B.EF,w,62,w,w,w,w,62)
return A.aE(B.c5,new A.a6(92,w,A.v(A.a([u,D.eIc,A.d(e,w,w,w,w,w,w,A.l(w,w,v?B.c:B.aR,w,w,w,w,w,w,w,w,12.5,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dfa(this,f),w,w,w,w,w,w,!1,B.a8)},
c_i(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=A.d3(a1.a.a)
if(a2==null)a2=0
w=a0?D.eH:B.ct
v=a2>0
u=new C.dfm(e,w)
t=new C.dfl()
s=e.f
r=A.m(26)
q=x.O
p=A.a([w.j(0.1),B.t3,B.t3],q)
o=A.I(w.j(0.22),B.r,1)
n=x.V
m=A.a([new A.ad(0,B.G,B.w.j(0.35),B.eT,22)],n)
l=w.j(0.15)
l=A.p(d,A.W(a0?B.vm:B.tB,w,d,d,d,18),B.f,d,d,new A.o(l,d,d,d,d,d,B.a6),d,34,d,d,d,d,d,34)
k=A.D(A.d(a0?"Add money":"Take money out",d,d,d,d,d,d,B.fW,d,d,d),1)
j=B.c.j(0.06)
i=A.m(99)
h=x.p
i=A.A(A.a([l,B.aw,k,A.p(d,A.A(A.a([A.W(B.hW,w,d,d,d,14),A.d("Cash App",d,d,d,d,d,d,A.l(d,d,B.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,B.I,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),B.m,d,B.e,B.Q,0,d,d),B.f,d,d,new A.o(j,d,d,i,d,d,B.n),d,d,d,d,B.kG,d,d,d)],h),B.m,d,B.e,B.j,0,d,d)
l=A.d("$",d,d,d,d,d,d,A.l(d,d,v?w:B.c_,d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=A.a([new A.u0(A.af("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=A.A(A.a([new A.C(B.i7,l,d),B.d8,A.aUB(new A.cU(D.aXf,A.aL(d,B.T,!1,d,!0,B.q,d,A.aM(),a1,w,d,d,d,d,2,A.br(d,B.ew,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,A.l(d,d,B.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.ai,d,d,k,d,d,B.dU,d,d,d,1,d,d,!1,"\u2022",d,new C.dfk(e),d,d,d,!1,d,d,!1,d,!0,d,B.a9,d,d,d,d,d,d,d,d,d,d,d,D.f2s,!0,B.L,d,B.am,d,d,d,d),d),d)],h),B.F,d,B.ba,B.j,0,d,d)
a1=v?120:60
a1=A.av(A.dg(d,d,d,d,B.bb,new A.o(d,d,d,A.m(99),d,new A.a7(B.a3,B.a7,B.x,A.a([w.j(0),w,w.j(0)],q),d,d),B.n),B.a1,d,3,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+A.dA(10)+" \xb7 admin sends it to your Cash App."
q=A.d(q,d,d,d,d,d,d,A.l(d,d,B.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,B.a4,d,1.35,!0,d,d,d,d,d,d,d,d),B.L,d,d)
l=A.a([],h)
j=a0?D.bWN:D.cap
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=A.a([i,B.bv,k,B.ao,a1,B.P,q,B.az,A.A(l,B.m,d,B.e,B.j,0,d,d)],h)
if(!a0){q=B.c.j(0.04)
l=A.W(B.hW,w,d,d,d,d)
k=A.l(d,d,B.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,B.O,d,d,!0,d,d,d,d,d,d,d,d)
l=A.a([B.az,A.aL(d,B.T,!1,d,!0,B.q,d,A.aM(),e.e,d,d,d,d,d,2,A.br(d,d,d,d,d,d,d,d,!0,new A.b4(4,A.m(16),new A.az(B.c.j(0.08),1,B.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new A.b4(4,A.m(16),new A.az(w,1,B.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.ai,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a9,d,d,d,d,d,d,d,d,d,d,d,B.nf,!0,B.a5,d,B.am,d,d,d,d)],h)
if(v){q=B.c.j(0.04)
k=A.m(16)
B.d.v(l,A.a([B.ac,A.p(d,A.v(A.a([t.$2("Amount","$"+A.dA(a2)),t.$3$color("Fee (15%)","\u2212 $"+A.dA(a2*0.15),B.f9),A.iw(B.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+A.dA(a2*0.85),!0,D.eH)],h),B.m,d,B.e,B.j,0,B.p),B.f,d,d,new A.o(q,d,d,k,d,d,B.n),d,d,d,d,B.iN,d,d,d)],h))}B.d.v(a1,l)}a1.push(B.aO)
q=A.m(18)
l=a0?B.PU:P.ar_
n=A.a([new A.ad(0,B.G,(a0?B.aZ:B.dS).j(0.45),B.dn,18)],n)
k=a0?e.gcrW():e.gczu()
j=A.W(a0?B.Mr:B.lb,d,d,d,d,20)
if(a0)i=v?"Deposit $"+A.dA(a2):"Deposit funds"
else i=v?"Withdraw $"+A.dA(a2):"Request withdrawal"
a1.push(new A.a6(d,54,A.bZ(A.lp(j,A.d(i,d,d,d,d,d,d,B.oU,d,d,d),k,A.fm(d,d,B.K,d,d,d,d,d,d,B.c,d,d,d,B.K,new A.b7(A.m(18),B.Y),d,d,d,d,d)),new A.o(d,d,d,q,n,new A.a7(B.a3,B.a7,B.x,l,d,d),B.n),B.bd),d))
return A.p(d,A.v(a1,B.aj,d,B.e,B.j,0,B.p),B.f,d,d,new A.o(d,d,o,r,m,new A.a7(B.b1,B.b6,B.x,p,B.Pq,d),B.n),d,d,new A.cw("form"+s,x.W),d,B.xg,d,d,d)},
bUU(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=A.T(a2).k("a2<1>"),a4=A.B(new A.a2(a2,new C.dfe(a0),a3),a3.k("H.E"))
B.d.b1(a4,new C.dff())
w=B.a.i(a0.a.e.toLowerCase())
a2=A.V(x.N,x.o)
a3=$.fpN
a3=a3==null?a1:a3.$0()
a3=J.aX(a3==null?B.i_:a3)
while(a3.C()){v=a3.gU(a3)
u=v.a
if(u.length!==0&&B.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,A.L)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("bc<2>")
a2=A.B(new A.bc(a2,a3),a3.k("H.E"))
r=C.hUv(a2,A.Ko(a0.a.e,new C.dfg(a0)))
a2=A.m(24)
a3=A.I(B.c.j(0.07),B.r,1)
v=A.m(99)
u=A.m(99)
q=x.p
u=A.a([A.A(A.a([D.bux,A.aK(!1,v,!0,A.p(a1,D.eCs,B.f,a1,a1,new A.o(a1,a1,A.I(D.eH.j(0.4),B.r,1),u,a1,a1,B.n),a1,a1,a1,a1,B.ma,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.dfh(a0),a1,a1,a1,a1,a1,a1,a1)],q),B.m,a1,B.e,B.j,0,a1,a1),B.S],q)
if(a4.length===0)u.push(new A.C(D.bmH,A.v(A.a([A.W(B.Fh,B.c.j(0.25),a1,a1,a1,40),B.S,D.fni],q),B.m,a1,B.e,B.j,0,B.p),a1))
else{v=A.a([],q)
for(p=A.dc(a4,0,A.dJ(a0.r,"count",x.S),A.T(a4).c),o=p.$ti,p=new A.bV(p,p.gM(0),o.k("bV<ai.E>")),o=o.k("ai.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===B.eK||k===B.jD||k===B.ep
if(l===B.ck)i=j?B.cr:D.eH
else i=l===B.ds?B.iy:B.fU
h=j?"-":"+"
l=B.c.j(0.06)
k=i.j(0.14)
g=new A.az(i.j(0.4),1,B.r,-1)
k=A.p(a1,A.W(j?B.tB:B.vm,i,a1,a1,a1,19),B.f,a1,a1,new A.o(k,a1,new A.bP(g,g,g,g),a1,a1,a1,B.a6),a1,42,a1,a1,a1,a1,a1,42)
f=a0.bOO(n)
e=C.h6G(n.y)
d=B.c.j(0.5)
f=A.a([new A.x(f,a1,B.jC,a1,a1,a1,a1,a1,a1,a1,a1,a1),B.bz,new A.x(e,a1,new A.F(!0,d,a1,a1,a1,a1,11,B.a4,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1)],q)
e=n.f
if(B.a.i(e==null?"":e).length!==0){e.toString
d=B.c.j(0.4)
f.push(new A.x(e,a1,new A.F(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,B.a2,a1,1,a1,a1))}if(m!=null&&n.x!==B.k0)f.push(new A.C(E.afn,new A.EY(B.bD,5,4,B.bt,A.a([a0.aLI("Before",m.b),a0.aLI("After",m.a)],q),a1),a1))
m=A.v(f,B.F,a1,B.e,B.j,0,B.p)
f=n.c
f=f===0?"\u2014":h+"$"+A.dA(f)
e=i.j(0.14)
d=new A.aV(99,99)
n=C.hdK(n)
v.push(A.p(a1,new A.co(B.aQ,B.e,B.j,B.m,a1,B.p,a1,0,A.a([k,B.bf,new A.bE(1,B.bi,m,a1),B.ab,A.v(A.a([new A.x(f,a1,new A.F(!0,i,a1,a1,a1,a1,15,B.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.at,A.p(a1,new A.x(n,a1,new A.F(!0,i,a1,a1,a1,a1,9.5,B.I,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.f,a1,a1,new A.o(e,a1,a1,new A.bp(d,d,d,d),a1,a1,B.n),a1,a1,a1,a1,B.AL,a1,a1,a1)],q),B.dE,a1,B.e,B.j,0,B.p)],q),a1),B.f,a1,a1,new A.o(a1,a1,new A.bP(B.Y,B.Y,new A.az(l,1,B.r,-1),B.Y),a1,a1,a1,B.n),a1,a1,a1,a1,B.uT,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(A.hc(D.bJ3,A.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,B.cc,a1,a1,a1),new C.dfi(a0),A.fu(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.eH,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
B.d.v(u,v)}return A.p(a1,A.v(u,B.aj,a1,B.e,B.j,0,B.p),B.f,a1,a1,new A.o(B.t3,a1,a3,a2,a1,a1,B.n),a1,a1,D.fD_,a1,D.boR,a1,a1,a1)},
aLI(d,e){var w=null,v=B.c.j(0.05),u=A.m(7),t=A.I(B.c.j(0.1),B.r,1),s=A.dq(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=A.dA(e)
return A.p(w,A.WW(A.dq(A.a([s,A.dq(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.f_W,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.mX,w,w,w)},
aTT(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(B.a.t(w,"clock-in session started"))return!1
v=d.d
if(v===B.ep)return d.c>0
if(A.rD(d))return!1
if(v===B.fq||v===B.eK)return!0
if(v===B.o5||v===B.jD)return!0
if(v===B.k1)return!0
if(v===B.fB)return B.a.t(w,"clock-in")||d.c>0
return!1},
bOO(d){var w,v=d.f
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
C.b8S.prototype={
a6(d,e){var w,v,u,t
$.X()
w=A.M()
w.r=D.b6I.j(0.55).gp(0)
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
C.bth.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null
for(w=a4.b,v=this.b,u=v*6.283185307179586,t=a4.a,s=0+t,r=x.O,q=a3.a,p=0;p<3;++p){o=w*(0.2+0.25*p)+Math.sin(u+p*2)*14-40
n=new A.aa(0,o,s,o+80)
m=[B.b7,B.fY,B.bs][p]
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.sau(new A.a7(B.b1,B.b6,B.x,A.a([m.j(0),m.j(0.1),m.j(0)],r),a2,a2).aw(0,n))
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
f.r=B.oi.j(0.35*g).gp(0)
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
t=B.oi.j(0.5*Math.sin(f*3.141592653589793))
a1=new A.km(new A.eo("z",a2,a2,B.cO,a2,a2,a2,a2,a2,a2,new A.F(!0,t,a2,a2,a2,a2,12+f*14,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),B.a5,B.ch,new A.jm(1),a2,a2,a2,a2,B.cd,a2)
a1.eO()
a1.a6(a3,new A.u(u+Math.sin(f*6.283185307179586+k)*12+k*8,w-f*90))}},
aq(d){return d.b!==this.b}}
C.aJj.prototype={
aQ(){this.aX()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdG())
w.b2$=null
w.a2()}}
C.bvd.prototype={}
C.aYt.prototype={}
C.Zu.prototype={
T(){return new C.aCg(new A.ar(B.as,$.aw()))},
cNp(d,e){return this.d.$2(d,e)}}
C.aCg.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
aXk(){var w=this,v=B.a.i(w.d.a.a),u=A.af("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.m(new C.e1M(w))
return}u=w.c
u.toString
A.a5(u,!1).N(null)
w.a.cNp(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=A.aI(a0,B.eD,e).w
e=A.aI(a0,B.e7,e).w
w=A.av(A.p(f,f,B.f,f,f,new A.o(B.b5,f,f,A.m(2),f,f,B.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=A.A(A.a([A.p(f,D.bIt,B.f,f,f,new A.o(f,f,f,f,A.a([new A.ad(0,B.G,B.ff.j(0.5),B.J,18)],v),D.amJ,B.a6),f,52,f,f,f,f,f,52),B.ev,A.D(A.v(A.a([D.fbo,B.bz,A.d(g.a.c,f,1,B.a2,f,f,f,B.oS,f,f,f)],u),B.F,f,B.e,B.j,0,B.p),1),A.aH(f,f,f,f,D.bJh,f,f,f,new C.e1P(a0),f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,f,f)
s=g.b3a(B.eR,"You",B.ct)
r=B.aM.j(0.15)
q=A.m(99)
q=A.A(A.a([s,new A.C(B.l4,A.p(f,D.ffi,B.f,f,f,new A.o(r,f,A.I(B.aM.j(0.6),B.r,1),q,f,f,B.n),f,f,f,f,B.fG,f,f,f),f),g.b3a(B.vj,"Your friend",B.bZ)],u),B.m,f,B.e,B.j,0,f,f)
r=B.c.j(0.06)
s=A.m(16)
p=B.c.j(0.12)
o=A.m(16)
n=g.f
if(n.length===0)n=f
o=A.aL(f,B.T,!0,f,!0,B.q,f,A.aM(),g.d,f,f,f,f,f,2,A.br(f,f,f,f,f,f,f,f,!0,new A.b4(4,s,new A.az(p,1,B.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new A.b4(4,o,D.aW0),f,f,f,f,f,f,f,f,N.CS,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.bLH,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,f,!1,f,B.ai,f,f,f,f,f,B.lS,f,f,f,1,f,f,!1,"\u2022",f,new C.e1Q(g),f,new C.e1R(g),f,!1,f,f,!1,f,!0,f,B.a9,f,f,f,f,f,f,f,f,f,f,f,B.iC,!0,B.a5,f,B.am,f,f,f,f)
r=A.a([],u)
for(m=0;m<4;++m){l=D.c5s[m]
s=new A.aV(14,14)
p=g.e===l
n=p?D.amI:f
p=p?f:B.c.j(0.06)
k=new A.az(g.e===l?B.ay:B.bF,1,B.r,-1)
j=""+l
i=l===1?"game":"best of "+j
h=B.c.j(0.7)
s=A.a([new A.bE(1,B.bi,A.aE(f,A.dg(f,A.v(A.a([new A.x(j,f,B.du,f,f,f,f,f,f,f,f,f),new A.x(i,f,new A.F(!0,h,f,f,f,f,10,B.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,B.p),f,f,B.bb,new A.o(p,f,new A.bP(k,k,k,k),new A.bp(s,s,s,s),f,n,B.n),B.eE,f,f,f,B.f3,f,f,f),B.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.e1S(g,l),f,f,f,f,f,f,!1,B.a8),f)],u)
if(l!==7)s.push(B.ab)
B.d.v(r,s)}s=A.A(r,B.m,f,B.e,B.j,0,f,f)
r=A.A(A.a([A.W(B.l9,B.c.j(0.5),f,f,f,15),B.bp,A.D(A.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,A.l(f,f,B.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),B.m,f,B.e,B.j,0,f,f)
p=A.m(18)
v=A.a([new A.ad(0,B.G,B.bA.j(0.4),B.cy,18)],v)
n=g.e
j=n===1?"":"s"
return new A.C(new A.Q(0,0,0,d.f.d+e.r.d),A.p(f,A.v(A.a([w,B.aO,t,B.bv,q,B.bv,D.fj0,B.ao,o,B.aO,D.fn6,B.P,s,B.az,r,B.aO,new A.a6(f,54,A.bZ(A.hc(D.al0,A.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,B.fW,f,f,f),g.gc4i(),f),new A.o(f,f,f,p,v,D.bRW,B.n),B.bd),f)],u),B.aj,f,B.e,B.Q,0,B.p),B.f,f,f,D.aY2,f,f,f,f,D.bq9,f,f,f),f)},
b3a(d,e,f){var w=null,v=f.j(0.1),u=A.m(16),t=A.I(f.j(0.45),B.r,1)
return A.D(A.p(w,A.v(A.a([A.W(d,f,w,w,w,24),B.at,A.d(e,w,w,w,w,w,w,B.SZ,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.f3,w,w,w),1)}}
C.oU.prototype={}
C.boh.prototype={
a6(d,e){var w,v,u,t,s,r=null,q=e.a/2,p=new A.u(q,e.b/2),o=q-4
for(q=d.a,w=0;w<37;++w){$.X()
v=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
if(w===0)u=B.bn
else u=(w&1)===0?B.bL:B.M
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
if(q!=null){s=A.ih(r,r,r,r,A.dq(r,r,r,r,r,r,r,r,r,B.aOy,A.t(q)),B.a5,B.ch,r,B.er,B.cd)
s.eO()
q=s.b
u=q.c
q=q.a.c
s.a6(d,p.aC(0,new A.u(u/2,q.gbb(q)/2)))}},
aq(d){return d.b!=this.b}}
C.E5.prototype={
a4(){return"NgmyProMoveResult."+this.b}}
C.apx.prototype={
gjO(){var w=this.d
w=w==null?null:w.a
return w!==!1},
blv(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.fMT("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.bVH()
w=s.gjO()
v=s.d
s.c=w?"You ("+v.b+") vs NGMY \u2014 capture all opponent discs":v.b+" vs "+v.c+" \u2014 capture all discs"
break
case"tic_tac_go":s.b=1
s.at=A.c2(9,"",!1,x.N)
s.ax=!0
if(s.gjO())w="You are X vs NGMY (O) \u2014 get 3 in a row"
else{w=s.d
w=w.b+" (X) vs "+w.c+" (O)"}s.c=w
break
case"blackjack_vegas":s.b=1
w=x.t
s.ay=A.a([1+e.aB(10),1+e.aB(10)],w)
s.ch=A.a([1+e.aB(10),1+e.aB(10)],w)
s.CW=!1
s.c="Beat the dealer \u2014 don't bust over 21"
break
case"roulette_euro":s.b=1
s.cx=null
s.c="Pick a number \u2014 spin the wheel"
break
case"slots_jackpot":s.b=1
s.db=A.a([e.aB(6),e.aB(6),e.aB(6)],x.t)
s.c="Match 3 symbols for jackpot"
break
case"billiards_snooker":s.b=1
s.dx=e.aj()*3.141592653589793*2
s.c=s.gjO()?"Aim and shoot \u2014 beat NGMY on the snooker table":"Aim and shoot \u2014 pocket balls"
break
case"connect_four_pro":s.b=1
u=J.e1(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=A.c2(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gjO())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.aVO(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aBU.h(0,d)
s.c=w==null?"Play to earn":w}},
b7L(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gjO()
if(o)return
o=x.N
s.x=A.a1(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b6(w,new C.caK(),o)
v=A.B(v,v.$ti.k("ai.E"))
s.at=v
if(v.length<9){v=A.B(v,o)
B.d.v(v,A.c2(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=B.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===B.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cx1(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.apa(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b6(t,new C.caL(),x.L)
o=A.B(o,o.$ti.k("ai.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)B.d.J(v,A.c2(7,0,!1,o))}if(A.iE(e.h(0,q)))o=A.ec(e.h(0,q))
else{o=A.c7(A.t(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bBA(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.apa(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b6(t,new C.caM(),x.L)
o=A.B(o,o.$ti.k("ai.E"))
s.y=o}if(A.iE(e.h(0,p)))o=A.ec(e.h(0,p))
else{o=A.c7(A.t(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bCP(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.apa(e,f)
break}},
cHb(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=A.a1(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",A.bl(w.at,!0,q))
o.n(0,"turnEmail",w.azV())
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
p=A.T(q).k("J<1,ak<G>>")
q=A.B(new A.J(q,new C.caO(),p),p.k("ai.E"))
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
p=A.T(q).k("J<1,ak<G>>")
q=A.B(new A.J(q,new C.caP(),p),p.k("ai.E"))
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
default:q=A.dW(o,q,p)
q.n(0,v,w.e)
q.n(0,s,w.w)
return q}},
azV(){var w,v,u,t=this
if(t.gjO()){if(t.ax){w=t.d
w=w==null?null:w.d
if(w==null)w=""}else w="ngmy@system"
return w}w=t.x.h(0,"playerXEmail")
if(w==null){w=t.d
w=w==null?null:w.d}v=B.a.i(J.k(w==null?"":w).toLowerCase())
w=t.x.h(0,"playerOEmail")
if(w==null){w=t.d
w=w==null?null:w.e}u=B.a.i(J.k(w==null?"":w).toLowerCase())
return t.ax?v:u},
apa(d,e){var w,v=this,u=B.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
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
cx1(d,e){var w,v,u,t,s,r="playerXEmail"
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
bBA(d,e){var w,v,u,t,s
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
bCP(d,e){var w,v,u,t,s,r,q
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
ST(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gjO())return s
w=B.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return B.a.i(J.k(s==null?u.azV():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
bVH(){var w,v,u=this,t=J.e1(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=A.ip(8,new C.caH(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
aVO(d){var w=20+d.aB(80),v=w+10+d.aB(50),u=4+d.aB(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bM(0,B.c3)},
cQP(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gjO())w=1
else{v=r.d
v=v==null?null:v.d
w=r.ST(q,v==null?"":v)?r.z:-1}if(!r.gjO()){v=r.d
v=v==null?null:v.d
v=!r.ST(q,v==null?"":v)}else v=!1
if(v)return!1
u=r.gjO()?r.z:w
if(!r.gjO()&&u!==r.z)return!1
t=J.q(r.y[d],e)
v=r.Q
if(v==null){if(t===r.z)v=!r.gjO()||t===1
else v=!1
if(v){r.Q=d
r.as=e}return!1}s=r.as
s.toString
if(d===v&&e===s){r.as=r.Q=null
return!1}if(Math.abs(d-v)===1&&Math.abs(e-s)===1&&t===0&&B.o.F(d+e,2)===1){J.aG(r.y[d],e,r.z)
J.aG(r.y[v],s,0)
r.as=r.Q=null
r.z=r.z===1?2:1
if(r.a7T(2)){r.a9s(1)
return!0}if(r.a7T(1)){r.a9s(2)
return!0}if(r.gjO()&&r.z===2){r.bxC(f)
if(r.a7T(2)){r.a9s(1)
return!0}if(r.a7T(1)){r.a9s(2)
return!0}}}return!1},
a9s(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
t.e=!0
w=t.f=d===1
if(t.gjO()){if(w){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+s}else v="NGMY wins \u2014 your discs are gone"
v=t.w=v}else{v=t.d
if(w){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+s}t.a=w?1:0
t.c=v
return!0},
bxC(d){var w,v,u,t,s,r,q,p,o,n=this,m=A.a([],x.B)
for(w=x.t,v=0;v<8;++v)for(u=0;u<8;++u){if(J.q(n.y[v],u)!==2)continue
for(t=[A.a([1,-1],w),A.a([1,1],w)],s=0;s<2;++s){r=t[s]
q=v+r[0]
p=u+r[1]
if(q>=0&&q<8&&p>=0&&p<8&&J.q(n.y[q],p)===0&&B.o.F(q+p,2)===1)m.push(A.a([v,u,q,p],w))}}w=m.length
if(w===0)return
o=m[d.aB(w)]
J.aG(n.y[o[2]],o[3],2)
J.aG(n.y[o[0]],o[1],0)
n.z=1},
a7T(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)for(t=J.aX(w[u]);t.C();)if(t.gU(t)===d)return!1
return!0},
cQQ(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.pN
if(!s.gjO()){w=s.d
w=w!=null&&!s.ST("tic_tac_go",w.d)}else w=!1
if(w)return D.pN
if(s.gjO())v="X"
else{w=B.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===B.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.ahG(v))return s.aQL(v,!0)
if(!B.d.t(s.at,""))return s.aQM()
s.ax=!s.ax
if(!s.gjO()){s.x.n(0,"turnEmail",s.azV())
s.c=s.aVk()
return D.pN}if(s.gjO()){t=s.cf8(e)
if(t>=0){s.at[t]="O"
if(s.ahG("O"))return s.aQL("O",!1)
if(!B.d.t(s.at,""))return s.aQM()
s.ax=!0}}s.c=s.gjO()?"Your turn \u2014 you are X":s.aVk()
return D.pN},
aVk(){var w=this.d
if(w==null)return"Take your turn"
return this.ST("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aQL(d,e){var w,v,u=this
u.e=!0
u.f=e
u.r=!1
if(u.gjO()){if(e){w=u.d
w=w==null?null:w.b
w=(w==null?"You":w)+" wins with "+d+"!"}else w="NGMY wins with "+d+"!"
w=u.w=w}else{w=u.d
if(e){w=w==null?null:w.b
v=w==null?"You":w}else{w=w==null?null:w.c
v=w==null?"Opponent":w}w=u.w=v+" wins with "+d+"!"}u.c=w
u.a=e?1:0
return e?D.pO:D.Hg},
aQM(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.QQ},
cf8(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.ahG("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.ahG("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.cSK[u]
if(v[w].length===0)return w}return-1},
ahG(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.cZT[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a2g(d){return B.d.cI(d,0,new C.caN())},
cB5(d){this.ay.push(1+d.aB(10))
if(this.a2g(this.ay)>21)return!0
return!1},
cB6(d){var w,v,u,t=this
while(t.a2g(t.ch)<17)t.ch.push(1+d.aB(10))
t.CW=!0
w=t.a2g(t.ay)
v=t.a2g(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cGE(d,e){var w,v,u,t=this
if(t.e)return D.pN
if(!t.gjO()){w=t.d
w=w!=null&&!t.ST("connect_four_pro",w.d)}else w=!1
if(w)return D.pN
if(t.gjO())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.pN
if(!t.aeN(d,w))return D.pN
if(t.a7J(t.fx))return t.aQJ(t.fx,!0)
if(t.aMw())return t.aQK()
w=t.fx===1?2:1
t.fx=w
if(t.gjO()&&w===2){u=t.cex(e)
if(u>=0){t.aeN(u,2)
if(t.a7J(2))return t.aQJ(2,!1)
if(t.aMw())return t.aQK()
t.fx=1}}t.c=t.gjO()?"Your turn \u2014 drop a red disc":t.bBz()
return D.pN},
bBz(){var w=this.d
if(w==null)return"Drop a disc"
return this.ST("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
aeN(d,e){var w
for(w=5;w>=0;--w)if(J.q(this.fr[w],d)===0){J.aG(this.fr[w],d,e)
return!0}return!1},
aMw(){for(var w=0;w<7;++w)if(J.q(this.fr[0],w)===0)return!1
return!0},
aQJ(d,e){var w,v,u,t=this
t.e=!0
t.f=e
t.r=!1
w=d===1?"red discs":"gold discs"
if(t.gjO()){if(e){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+" wins with "+w+"!"}else v="NGMY wins with "+w+"!"
v=t.w=v}else{v=t.d
if(e){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+" wins with "+w+"!"}t.c=v
t.a=e?1:0
return e?D.pO:D.Hg},
aQK(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.QQ},
cex(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.aeN(w,2)
v=r.a7J(2)
r.b5t(w)
if(v)return w}for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.aeN(w,1)
u=r.a7J(1)
r.b5t(w)
if(u)return w}t=A.a([],x.t)
for(w=0;w<7;++w)if(J.q(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aB(s)]},
b5t(d){var w
for(w=0;w<6;++w)if(J.q(this.fr[w],d)!==0){J.aG(this.fr[w],d,0)
return}},
a7J(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.q(this.fr[w],v)!==d)continue
if(this.bBB(w,v,d))return!0}return!1},
bBB(d,e,f){var w,v,u,t=new C.caG(this,d,e,f)
for(w=x.t,w=[A.a([0,1],w),A.a([1,0],w),A.a([1,1],w),A.a([1,-1],w)],v=0;v<4;++v){u=w[v]
if(t.$2(u[0],u[1])+t.$2(-u[0],-u[1])-1>=4)return!0}return!1},
b8G(d){var w=this
if(B.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.aVO(d)}return w.a>=w.b}}
C.aqt.prototype={
T(){return new C.aD4(null,null)},
cMj(d){return this.e.$1(d)}}
C.aD4.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.blN,null,1,null,v)
w.f7(0,!0)
v.d=w
v.a.d.aM(0,v.gaXM())
v.avX()},
br(d){var w
this.bE(d)
w=this.a
if(d.c!==w.c){w.d.bM(0,B.c3)
this.avX()}},
avX(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.agf(t,u)
C.agf(t,u)
w.a.cMj(s)
w.a.toString
w.m(new C.ezI())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
q(){var w,v=this
v.a.d.a3(0,v.gaXM())
w=v.d
w===$&&A.c()
w.q()
v.btp()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.agf(j,i),g=C.agf(j,i),f=j.length,e=i.length,d=A.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&A.c()
u=new A.aV(1,1)
d.push(new A.vZ(new A.cX(v,!1,A.p(l,l,B.f,l,l,new A.o(B.aM,l,l,new A.bp(u,u,u,u),A.a([new A.ad(0,B.G,B.aM.j(0.6),B.J,6)],k),l,B.n),l,22,l,B.LD,l,l,l,3),l),B.Ro,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new A.eo(v,l,l,B.cO,l,l,l,l,l,l,D.eY7))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=B.c.j(0.4)
q=B.cs}else if(s===t){r=B.bc
q=B.O}else{r=B.aB
q=B.I}d.push(new A.eo(t,l,l,B.cO,l,l,l,l,l,l,new A.F(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&A.c()
d.push(new A.vZ(new A.cX(k,!1,A.p(l,l,B.f,B.aM,l,l,l,22,l,l,l,l,l,3),l),B.Ro,l,l))}p=f===0?0:B.k.V(h/f*100)
k=B.w.j(0.35)
v=A.m(12)
u=A.I(B.b5,B.r,1)
o=x.p
v=A.p(l,A.v(A.a([A.A(A.a([m.aXL("Correct",""+h,B.bn),B.ab,m.aXL("Wrong / missed",""+(f-g),B.aB),B.b3,A.d(""+p+"% accuracy",l,l,l,l,l,l,G.a6m,l,l,l)],o),B.m,l,B.e,B.j,0,l,l),B.ao,D.fgp],o),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(k,l,u,v,l,l,B.n),l,l,l,l,B.bk,l,l,l)
u=A.D(A.cd(new A.a8M(l,A.dq(d,l,l,l,l,l,l,l,l,l,l),l,l,l),B.q,l,B.y,l,l,l,l,B.ah),1)
k=m.a.d
g=A.l(l,l,B.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.w.j(0.35)
return A.v(A.a([v,B.ac,u,B.S,A.aL(l,B.T,!0,l,!0,B.q,l,A.aM(),k,l,l,l,l,l,2,A.br(l,new A.b4(4,A.m(12),B.Y),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new A.b4(4,A.m(12),D.aVU),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.y,!0,l,!0,l,!1,l,B.ai,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,B.a9,l,l,l,l,l,l,l,l,l,l,l,D.aOx,!0,B.a5,l,B.am,l,l,l,l)],o),B.aj,l,B.e,B.j,0,B.p)},
aXL(d,e,f){var w=null,v=f.j(0.15),u=A.m(8)
return A.p(w,A.d(d+": "+e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(v,w,w,u,w,w,B.n),w,w,w,w,B.fG,w,w,w)}}
C.aKR.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
var z=a.updateTypes(["ay<~>()","~()","G(i0,i0)","~([x1?])","R(qw)","qw()","G(r5,r5)","R(r5)","G(r6,r6)","OF(Y)","R(i0)","cK(acy)","Zb(Y)","Yi(Y)","adj(Y)","a5A(Y)","MP(Y)","ac9(Y,hB<ak<j4>>)","ac8(Y,G)","r(qw)","r5(a4<@,@>)","~(E5,apx)","MH(Y)","a4<n,@>(r5)","r6(a4<@,@>)","a4<n,@>(kj)","a4<n,@>(r6)","R(r6)","a4<n,@>(lv)","lv(@)","a4<n,@>(ie)","ie(@)","i0(@)","ay<~>(kj)","a4<n,@>(i0)","~(G,G)","i0(i0)","Uo(Y)","ay<R>(ak<i0>)","Za(Y)","~(i0)","ZX(Y)","Up(Y)","n(i0)","R(lv)","wF(bu<G,lv>)","aaI(Y,G)","G(ie,ie)","aaA(lv)","r(rc)","bE(I2)","YH(Y)","~(d1{bumpWalletRevision:R,cloudRequest:R})","~(n,O,O,O)","O(S)","~(d1)","Zu(Y)","~(E5)","n(n)","ZY(Y)"])
C.cpf.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.cpg(r,w,s.b,v,s.d)
t=s.e
r.b=A.dC(t,u)
v.r=new C.cpc(r)
v.e=new C.cpd(r,w)
v.f=new C.cpe(r,w,t,u)},
$S:0}
C.cpg.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.lm(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=A.a9(r)
u=A.ce(r)
s=v
q=u
p=A.Fz(s,q)
if(p==null)p=new A.j1(s,q==null?A.a1Z(s):q)
t=p
o.d.hj(t.a,t.b)
return}o.d.J(0,w)}else{o.e.a(null)
o.d.J(0,null)}},
$S:40}
C.cpc.prototype={
$0(){this.a.b.a9(0)
return $.Gd()},
$S:1623}
C.cpd.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.arW.$0()
this.a.b.a9(0)},
$S:0}
C.cpe.prototype={
$0(){var w,v=this,u=v.b,t=A.dB(0,0,u.gbaL(),0,0,0)
u.iX(0)
u=v.c
w=v.a
w.b=A.cM(new A.b9(u.a-t.a),new C.cpb(w,u,v.d))},
$S:0}
C.cpb.prototype={
$0(){var w=this.c
this.a.b=A.dC(this.b,w)
w.$1(null)},
$S:0}
C.eVD.prototype={
$1(d){var w=this.a
w.m(new C.eVC(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.eVC.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hB(D.aeA,this.b,null,null,v.$ti.k("hB<1>"))},
$S:0}
C.eVF.prototype={
$2(d,e){var w=this.a
w.m(new C.eVA(w,d,e))},
$S:55}
C.eVA.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hB(D.aeA,null,this.b,this.c,v.$ti.k("hB<1>"))},
$S:0}
C.eVE.prototype={
$0(){var w=this.a
w.m(new C.eVB(w))},
$S:0}
C.eVB.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hB(B.Am,w.b,w.c,w.d,w.$ti)},
$S:0}
C.ftK.prototype={
$1(d){return d.a===this.a&&B.a.i(d.b.toLowerCase())===this.b&&d.x===B.ck},
$S:16}
C.ftC.prototype={
$1(d){return d},
$S:13}
C.fdi.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return A.p(B.A,new A.C(new A.Q(u,0,u,0),A.d("NGMY",w,1,B.eC,w,!1,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,B.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),B.f,w,w,B.a9E,w,v,w,w,w,w,w,v)},
$S:145}
C.fdf.prototype={
$3(d,e,f){return this.a.$0()},
$S:129}
C.fdg.prototype={
$2(d,e){var w,v=this,u=e.b
if(B.a.i(u==null?"":u).length!==0){u.toString
w=B.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return A.kh(w,B.A,v.d,new C.fde(v.e),B.fQ,v.c,!0,v.b,null,null,v.a)},
$S:1624}
C.fde.prototype={
$3(d,e,f){return this.a.$0()},
$S:129}
C.fdh.prototype={
$3(d,e,f){return this.a.$0()},
$S:129}
C.d75.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.d7g.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.d7y.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.d7z.prototype={
$1(d){return this.a.J1()},
$S:14}
C.d7o.prototype={
$0(){var w=J.b6(this.b,new C.d7n(),x.P)
w=A.B(w,w.$ti.k("ai.E"))
this.a.f=w},
$S:0}
C.d7n.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.d7p.prototype={
$0(){var w=this.a,v=w.a.d.b5,u=A.T(v).k("J<1,a4<n,@>>")
v=A.B(new A.J(v,new C.d7m(),u),u.k("ai.E"))
w.f=v},
$S:0}
C.d7m.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.d7r.prototype={
$0(){var w=this.a,v=w.a.d.b5,u=A.T(v).k("J<1,a4<n,@>>")
v=A.B(new A.J(v,new C.d7q(),u),u.k("ai.E"))
w.f=v},
$S:0}
C.d7q.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.d7j.prototype={
$0(){var w=0,v=A.j(x.c),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.c6f(t.a.c)?2:3
break
case 2:w=4
return A.b(C.aoa(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.m(new C.d7h(t))
case 3:if(t.c!=null)t.m(new C.d7i(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:51}
C.d7h.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d7i.prototype={
$0(){return this.a.d++},
$S:0}
C.d7k.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d7l.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d7b.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.i0x(t.a.d.b5,J.k(J.q(u.b,"id")),"rejected")
t.a.bp()
w=2
return A.b(C.ag4(t.a.d.b5),$async$$0)
case 2:w=3
return A.b(t.J1(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d7c.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a8(s)
C.hQv(t.a.d.b5,J.k(r.h(s,"id")),t.a.c.c)
t.a.bp()
w=2
return A.b(C.ag4(t.a.d.b5),$async$$0)
case 2:w=3
return A.b(t.J1(),$async$$0)
case 3:t.HU(B.d.dM(t.y,new C.d79(s),new C.d7a(t)),J.k(r.h(s,"id")))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d79.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d7a.prototype={
$0(){return B.d.gL(this.a.y)},
$S:z+5}
C.d7d.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d7e.prototype={
$0(){return B.d.gL(this.a.y)},
$S:z+5}
C.d7f.prototype={
$0(){return this.a.HU(this.b,J.k(J.q(this.c,"id")))},
$S:0}
C.d78.prototype={
$0(){return this.a.bYM(this.b)},
$S:0}
C.d77.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.i1_(u,w.b,new C.d76(v,w))},
$S:0}
C.d76.prototype={
$2(d,e){return this.a.ag7(this.b,d,e)},
$S:653}
C.d7x.prototype={
$2(d,e){if(d)return
this.a.aQo()},
$S:118}
C.d7v.prototype={
$2(d,e){var w=this.a
return new A.l4(C.aYs(w.a.c.a),new C.d7u(w,this.b,this.c),null,null,x.gH)},
$S:1626}
C.d7u.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=A.m(12)
v=A.m(12)
u=A.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return A.aF(!1,B.a1,!0,w,A.aK(!1,v,!0,new A.C(B.l5,A.bEb(B.cR,A.W(B.h5,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.d7t(this.a,d),t,t,t,t,t,t,t),B.f,this.b,0,t,t,t,t,t,B.af)},
$S:1627}
C.d7t.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fq1(s.c.a,s.e).eT(new C.d7s())
w=2
return A.b(C.bBy(u.b,t.a.c.a),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d7s.prototype={
$1(d){},
$S:31}
C.d7w.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dL4.prototype={
$0(){var w=this.a
return A.Ko(w.a.c.a,new C.dL3(w))},
$S:80}
C.dL3.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dL5.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&A.c()
u.bi=t.ad()
v.bp()
w.m(new C.dL2())},
$S:0}
C.dL2.prototype={
$0(){},
$S:0}
C.dL6.prototype={
$2(d,e){var w,v=this.a
if(!C.c6f(v.a.c)){if($.fMO.t(0,B.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.fMP(this.b,v.x,w)
return!1}C.aoa(v.a.c.a)}if(A.Ko(v.a.c.a,new C.dL1(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aFb()
w=v.a
w.toString
w.hq(new A.d1(B.o.u(1000*Date.now()),v.a.c.a,d,B.jD,B.fb,e,null,null,B.ck,new A.S(Date.now(),0,!1)))
v.a.bp()
return!0},
$S:1628}
C.dL1.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dL7.prototype={
$3$bonus(d,e,f){var w,v=null,u=B.o.u(1000*Date.now()),t=this.a,s=t.a
s.hq(new A.d1(u,s.c.a,d,B.fB,B.fb,e,v,v,B.ck,new A.S(Date.now(),0,!1)))
t.a.bp()
w=f>0?"+$"+B.k.aa(d,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.un(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1629}
C.d7_.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.d72.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.d73.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.d74.prototype={
$1(d){var w=null,v=this.a,u=A.fm(w,w,v.e===d?B.bn:A.Z(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,w,w,w,w,w,w,w,w)
return A.D(new A.C(B.eQ,A.i9(A.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.d71(v,d),u),w),1)},
$S:202}
C.d71.prototype={
$0(){var w=this.a
return w.m(new C.d70(w,this.b))},
$S:0}
C.d70.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d8S.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.d8V.prototype={
$1(d){this.a.cft()
return null},
$S:14}
C.d8W.prototype={
$1(d){return this.a.cvc()},
$S:14}
C.d8X.prototype={
$1(d){this.a.a1k()
return null},
$S:14}
C.d8Y.prototype={
$1(d){this.a.ahe()
return null},
$S:14}
C.d8Z.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c6)return
w=v.Q
w===$&&A.c()
if(w<=0){v.m(new C.d8T(v))
w=v.as
if(w!=null)w.a9(0)
v.EA()
return}v.m(new C.d8U(v))},
$S:14}
C.d8T.prototype={
$0(){return this.a.Q=0},
$S:0}
C.d8U.prototype={
$0(){var w=this.a,v=w.Q
v===$&&A.c()
w.Q=v-1
return v},
$S:0}
C.d87.prototype={
$0(){return this.a.bC=this.b},
$S:0}
C.d88.prototype={
$0(){return this.a.bC=this.b},
$S:0}
C.d8B.prototype={
$1(d){return this.a.go.t(0,d)},
$S:34}
C.d8C.prototype={
$0(){},
$S:0}
C.d8n.prototype={
$0(){var w=this.b
w.c6=!0
w.cW="Waiting for both players\u2026"
w.cj="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.d8o.prototype={
$0(){var w=this.a
w.c6=!0
w.cW="Both players connected"
w.cj="Starting together in a moment\u2026"},
$S:0}
C.d8p.prototype={
$0(){var w=this.b
w.c6=!0
w.cW="Match starting together\u2026"
w.cj="Both players start in "+B.o.D(this.c,1,99)+"s"},
$S:0}
C.d8q.prototype={
$0(){this.b.c6=!1},
$S:0}
C.d8r.prototype={
$0(){},
$S:0}
C.d7A.prototype={
$0(){var w=this.a,v=w.x2,u=A.t(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.d86.prototype={
$0(){var w=this.a
w.at=this.b
w.b2I()},
$S:0}
C.d8D.prototype={
$0(){},
$S:0}
C.d8M.prototype={
$0(){},
$S:0}
C.d8A.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.d8z(w))},
$S:0}
C.d8z.prototype={
$0(){var w=this.a
w.y=!0
w.z=new A.S(Date.now(),0,!1)},
$S:0}
C.d84.prototype={
$0(){var w=this.a;++w.Z
w.y=!1
w.z=null},
$S:0}
C.d85.prototype={
$0(){},
$S:0}
C.d8H.prototype={
$1(d){return d==null},
$S:266}
C.d8I.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
B.d.cz(v.ch,w.d)},
$S:0}
C.d8J.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.d7B.prototype={
$1(d){return d==null},
$S:266}
C.d7C.prototype={
$0(){return this.a.bi++},
$S:0}
C.d7D.prototype={
$0(){},
$S:0}
C.d8g.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.d8h.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.J(0,t)
w=this.c
u.J(0,w)
if(v.ghx()&&D.mr.t(0,v.a.e)){u=v.id
u.J(0,t)
u.J(0,w);++v.fx}++v.k2
v.fy=A.a([],x.t)},
$S:0}
C.d8i.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.d8f(w))},
$S:11}
C.d8f.prototype={
$0(){var w=this.a
w.fy=A.a([],x.t)
w.k1=!1},
$S:0}
C.d8s.prototype={
$0(){return this.a.y1++},
$S:0}
C.d8t.prototype={
$0(){},
$S:0}
C.d8u.prototype={
$0(){return this.a.y2++},
$S:0}
C.d8v.prototype={
$0(){},
$S:0}
C.d8w.prototype={
$0(){return this.a.b5++},
$S:0}
C.d8x.prototype={
$0(){},
$S:0}
C.d8G.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.d8j.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d8k.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.d8l.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d8m.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.d8K.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.d8L.prototype={
$0(){var w=this.a
w.ok.push(w.d.aB(4))
w.p2=0},
$S:0}
C.d7E.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d7F.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.d7G.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d7H.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.d8E.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.d8F.prototype={
$0(){var w,v=this.a;++v.x2
v.aMj()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+A.t(Math.min(w+2,7))+" tiles"},
$S:0}
C.d8e.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.d8y.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d8c.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d8d.prototype={
$2(d,e){return d+e.length},
$S:225}
C.d8N.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.d8O.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.d8P.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.d8R.prototype={
$1(d){var w=this.a,v=w.NO(),u=v<=0?0:B.k.D(w.zJ()/v,0,1),t=w.a.x,s=t*1.46
return new C.MH(w.f?s:s*u,s,t,null)},
$S:z+22}
C.d8Q.prototype={
$1(d){return d.bU(0.85)},
$S:165}
C.d8b.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghx()&&D.mr.t(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return A.v(A.a([A.d(p,w,w,w,w,w,w,B.jC,B.L,w,w),B.ao,A.D(A.av(new A.a6(r*v+u,r*t+s,A.ib(!0,w,w,B.y,new A.hH(v,6,6,1,r),new C.d8a(q,r),q.fr.length,w,B.dQ,B.ah,!1),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
$S:150}
C.d8a.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.t(0,e),p=r.ghx()&&D.mr.t(0,r.a.e)&&q&&r.id.t(0,e),o=r.ghx()&&D.mr.t(0,r.a.e)&&q&&!p,n=B.d.t(r.fy,e)||q,m=p?D.amP:D.bPQ,l=A.m(10),k=A.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.amP:D.amJ
v=o?A.I(B.dy,B.r,2):s
u=A.a([new A.ad(0,B.G,A.Z(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.J,4)],x.V)
t=this.b*0.42
return A.aK(!1,l,!0,A.dg(s,A.av(n?A.W(D.ciU[r.fr[e]],B.c,s,s,s,t):A.d("?",s,s,s,s,s,s,A.l(s,s,B.c,s,s,s,s,s,s,s,s,t,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,B.bb,new A.o(s,s,v,k,u,w,B.n),B.eE,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.d89(r,e),s,s,s,s,s,s,s)},
$S:198}
C.d89.prototype={
$0(){return this.a.ceP(this.b)},
$S:0}
C.d7U.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Z(89,B.bn.l()>>>16&255,B.bn.l()>>>8&255,B.bn.l()&255),r=A.m(10),q=A.m(10),p=A.m(10),o=A.I(A.Z(64,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
return A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(B.A,A.d(t?"":u,w,w,w,w,w,w,D.aNB,w,w,w),B.f,w,w,new A.o(w,w,o,p,w,w,B.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d7T(v,d),w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.af)},
$S:656}
C.d7T.prototype={
$0(){return this.a.cuu(this.b)},
$S:0}
C.d7V.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=A.Z(46,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
return A.aF(!1,B.a1,!0,A.m(10),A.aK(!1,A.m(10),!0,A.p(B.A,A.d(u,w,w,w,w,w,w,D.aNB,w,w,w),B.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d7S(v,d),w,w,w,w,w,w,w),B.f,t,0,w,w,w,w,w,B.af)},
$S:656}
C.d7S.prototype={
$0(){return this.a.cut(this.b)},
$S:0}
C.d7W.prototype={
$1(d){return this.a.m(new C.d7R())},
$S:28}
C.d7R.prototype={
$0(){},
$S:0}
C.d7X.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&A.c()
w=C.agf(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.oM()
if(u.ghx()&&D.mr.t(0,u.a.e)){u.a_D()
u.mO(!0)}else{v=B.d.cI(u.cy,0,new C.d7P())
t=u.dx
if(t>=v)u.tr("All 5 sentences perfect \u2014 full payout!")
else u.E1(t/v,t,v)}}else{if(u.ghx()&&D.mr.t(0,u.a.e))u.a_D()
u.m(new C.d7Q(u))}},
$S:0}
C.d7P.prototype={
$2(d,e){return d+e.length},
$S:225}
C.d7Q.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bM(0,B.c3)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.d7Y.prototype={
$1(d){var w=null,v=A.fm(w,w,A.Z(38,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,B.cf,w,w,w,w,w,w,w)
return new A.C(B.cG,new A.a6(1/0,w,A.i9(A.d(d,w,w,w,w,w,w,V.aNu,w,w,w),new C.d7O(this.a,d),v),w),w)},
$S:127}
C.d7O.prototype={
$0(){return this.a.b24(this.b)},
$S:0}
C.d7Z.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&A.c()
w=u*3+8
return A.v(A.a([A.d(s,v,v,v,v,v,v,B.oT,v,v,v),B.P,A.D(A.av(new A.a6(w,w,A.ib(!0,v,v,B.y,new A.hH(3,4,4,1,u),new C.d7N(t,u),9,v,B.dQ,B.ah,!1),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
$S:150}
C.d7N.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.b_U(e),p=r===0
if(p)w=B.K
else w=q?B.bn:A.Z(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v=A.m(10)
s=p?t:new C.d7J(s,e)
u=A.m(10)
p=p?"":""+r
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.av(A.d(p,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),B.f,w,0,t,t,t,t,t,B.af)},
$S:78}
C.d7J.prototype={
$0(){return this.a.cus(this.b)},
$S:0}
C.d8_.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.d7M(q,d)
p=A.m(16)
if(o)w=D.a1x[d]
else{w=D.a1x[d]
w=A.Z(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=A.m(16)
u=o?A.Z(B.k.V(127.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
u=A.I(u,B.r,o?2:1)
t=x.V
if(o){s=D.a1x[d]
t=A.a([new A.ad(0,B.G,A.Z(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,16)],t)}else t=A.a([],t)
return A.aK(!1,p,!0,A.dg(r,r,r,r,B.bb,new A.o(w,r,u,v,t,r,B.n),U.Au,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1633}
C.d7M.prototype={
$0(){return this.a.cuv(this.b)},
$S:0}
C.d80.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&A.c()
q=A.d(q,t,t,t,t,t,t,B.oT,t,t,t)
w=A.d("Move "+r.awC()+"/"+C.fSV(),t,t,t,t,t,t,B.CT,t,t,t)
v=r.x2
u=s*3+12
return A.v(A.a([q,w,A.d("Round "+v+"/7 \xb7 "+A.t(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,A.l(t,t,A.Z(153,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.D(A.av(new A.a6(u,u,A.ib(!0,t,t,B.y,new A.hH(3,6,6,1,s),new C.d7L(r),9,t,B.dQ,B.ah,!1),t),t,t,t),1)],x.p),B.m,t,B.e,B.j,0,B.p)},
$S:150}
C.d7L.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=A.m(10),s=A.m(10),r=u?B.bn:D.b8r,q=u?B.ey:D.bgI
return A.aF(!1,B.a1,!0,w,A.aK(!1,t,!0,A.p(w,w,B.f,w,w,new A.o(r,w,A.I(q,B.r,u?2.5:1),s,w,w,B.n),w,w,w,w,w,w,w,w),w,!0,w,w,B.K,w,w,w,w,w,w,w,w,new C.d7I(v,e),w,w,w,w,B.K,w,w),B.f,B.K,0,w,w,w,w,w,B.af)},
$S:78}
C.d7I.prototype={
$0(){return this.a.cuq(this.b)},
$S:0}
C.d81.prototype={
$0(){return this.a.b24(this.b[this.c])},
$S:0}
C.d82.prototype={
$0(){return this.a.m(new C.d7K())},
$S:0}
C.d7K.prototype={
$0(){},
$S:0}
C.d83.prototype={
$2(d,e){this.a.Zm(d,e)
return null},
$S:z+21}
C.dcp.prototype={
$1(d){return this.a.cfi(this.b,d)},
$S:1634}
C.dco.prototype={
$0(){var w=this
return w.a.a.cMS(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cAh.prototype={
$1(d){var w=this.a
w.a_U()
w.ty()},
$S:8}
C.czC.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.czs.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.czt.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.czM.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.czJ.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.czK.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.czL.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.czE.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.czD(w))},
$S:0}
C.czD.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.czu.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ac(w.c)
v.dy=J.ac(w.d)
v.fr=J.ac(w.e)},
$S:0}
C.czH.prototype={
$1(d){var w=this.a
return new C.Uo(w.fx,new C.czG(w),w.a.f.r,null)},
$S:z+37}
C.czG.prototype={
$1(d){return this.bh3(d)},
bh3(d){var w=0,v=A.j(x.y),u,t=this,s,r
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c79(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.m(new C.czF(r,d))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+38}
C.czF.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cA4.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.czZ.prototype={
$1(d){this.a.ty()
return null},
$S:14}
C.cA1.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(B.o.an(v.gaTe().a,1e6)<=0){w=v.id
if(w!=null)w.a9(0)
v.ty()
return}v.m(new C.cA0())},
$S:14}
C.cA0.prototype={
$0(){},
$S:0}
C.czY.prototype={
$1(d){this.a.EH()
return null},
$S:14}
C.cA_.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.czX.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bi(J.k(v==null?"":v))
if(u==null)u=new A.S(A.fQ(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bi(J.k(v==null?"":v))
return u.aL(0,w==null?new A.S(A.fQ(0,0,!1),0,!1):w)},
$S:42}
C.czz.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bi(J.k(v==null?"":v))
if(u==null)u=new A.S(A.fQ(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bi(J.k(v==null?"":v))
return u.aL(0,w==null?new A.S(A.fQ(0,0,!1),0,!1):w)},
$S:42}
C.czA.prototype={
$0(){var w=this.a,v=w.f
B.d.a8(v)
B.d.v(v,this.b)
w.ax=!0},
$S:0}
C.czB.prototype={
$0(){var w=this.a
if(w.c!=null)w.a0A(!0)},
$S:11}
C.czx.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.czy.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
if(w.f.length!==0)w.SX(this.b)},
$S:8}
C.czP.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=B.d.gcZ(v).Q
v.toString
if(this.b)w.hV(v)
else w.lX(v,B.dV,B.kD)},
$S:8}
C.czI.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.czQ.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.czR.prototype={
$0(){var w=this.a
w.f.push(A.E(["role","user","text",this.b,"at",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z))
w.b3v()
w.r.bM(0,B.c3)
w.at=!0},
$S:0}
C.czS.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.czT.prototype={
$0(){var w=this.a
w.f.push(A.E(["role","ai","text",this.b,"at",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z))
w.at=!1},
$S:0}
C.czU.prototype={
$0(){var w,v=this.b,u=A.V(x.N,x.z)
J.aG(u,"role","ai")
J.aG(u,"text",this.c)
J.aG(u,"at",new A.S(Date.now(),0,!1).a5().ac())
w=this.a
if(J.cx(w.b)){w=J.b6(w.b,v.gceg(),x.P)
w=A.B(w,w.$ti.k("ai.E"))
J.aG(u,"phoneActions",w)}v.f.push(u)
v.b3v()},
$S:0}
C.czV.prototype={
$0(){this.a.f.push(A.E(["role","ai","text",y.g,"at",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z))},
$S:0}
C.czW.prototype={
$0(){return this.a.at=!1},
$S:0}
C.czN.prototype={
$1(d){return this.bh4(d)},
bh4(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
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
l=p.bQ()
w=5
return A.b(C.aoz(q,new C.r5("cal_"+1000*n,m,l,(o==null?p.bN(36e8):o).bQ(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.aph()
case 4:k.c.I(x.q).f.R(A.b2(null,null,null,B.cZ,null,B.q,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:435}
C.cA3.prototype={
$1(d){return this.bh5(d)},
bh5(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.I(x.q).f.R(A.b2(null,null,null,B.cZ,null,B.q,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:435}
C.czO.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=B.d.gcZ(v).Q
v.toString
w.hV(v)},
$S:8}
C.cAg.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
if(v>0)w.aa1(v-1)},
$S:0}
C.cA9.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.cAc.prototype={
$1(d){var w=this.a
w.m(new C.cA6(w,d))
if(d===0)w.a0A(!0)},
$S:28}
C.cA6.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cAa.prototype={
$2$size(d,e){return C.fRg(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:1635}
C.cAb.prototype={
$0(){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.h2L(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return A.b(H.app(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cA7(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return A.b(C.aox(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return A.b(p.ty(),$async$$0)
case 15:p.m(new C.cA8(p))
p.aa1(0)
case 14:u=!1
w=1
break
case 11:w=16
return A.b(p.ty(),$async$$0)
case 16:case 9:case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:61}
C.cA7.prototype={
$2(d,e){return this.bh6(d,e)},
bh6(d,e){var w=0,v=A.j(x.y),u,t=this,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=A.a11(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$2,v)},
$S:117}
C.cA8.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cAe.prototype={
$2(d,e){return B.ab},
$S:36}
C.cAd.prototype={
$2(d,e){var w=null,v=this.a,u=A.d((v.a.c.w?D.a1D:D.a1_)[e],w,w,w,w,w,w,B.q2,w,w,w),t=A.Z(31,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),s=A.Z(89,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
v=v.at?w:new C.cA5(v,e)
return A.mz(w,t,u,w,v,w,w,new A.az(s,1,B.r,-1),w)},
$S:504}
C.cA5.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a1D:D.a1_
w.r.saV(0,v[this.b])
w.mN()
return null},
$S:0}
C.cAf.prototype={
$1(d){var w=this.a
return w.at?null:w.mN()},
$S:2}
C.czv.prototype={
$0(){return this.a.aa1(0)},
$S:0}
C.cA2.prototype={
$0(){return this.a.aa1(this.b)},
$S:0}
C.czw.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=A.p(v,D.bJX,B.f,v,v,new A.o(v,v,v,v,v,new A.a7(B.a3,B.a7,B.x,A.a([A.Z(51,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),w.b],x.O),v,v),B.a6),v,72,v,v,v,v,v,72)
t=w.c
s=A.d("Start a conversation",v,v,v,v,v,v,A.l(v,v,t?B.c:B.aA,v,v,v,v,v,v,v,v,16,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.av(new A.C(B.Xi,A.v(A.a([u,B.ac,s,B.ao,A.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,A.l(v,v,t?B.ay:B.aX,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v)],x.p),B.m,v,B.e,B.j,0,B.p),v),v,v,v)}if(e<s)return u.bCu(t[e],w.c)
return u.aMU(A.E(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:39}
C.bWF.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=B.k.O(d)
return new A.S(A.fQ(w>1e11?w:w*1000,0,!0),0,!0).bQ()}v=A.bi(J.k(d))
return v==null?null:v.bQ()},
$S:303}
C.bWE.prototype={
$1(d){A.aN(d)
return(d==null?0:d)/100},
$S:702}
C.bWH.prototype={
$1(d){var w
if(d==null)w=null
else{w=A.bi(J.k(d))
w=w==null?null:w.bQ()}return w},
$S:303}
C.bWG.prototype={
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
s=A.a3x(B.a2j,J.k(s==null?"reimbursement":s))
r=J.q(w,"method")
r=A.a3x(B.a0Y,J.k(r==null?"system":r))
q=A.aU(J.q(w,"sourceDetails"))
p=J.q(w,"status")
p=A.a3x(B.Gq,J.k(p==null?"approved":p))
o=this.a.$1(J.q(w,"timestamp"))
if(o==null)o=new A.S(Date.now(),0,!1)
return new A.d1(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:595}
C.dsU.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dsV.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dsL.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bl(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dsJ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.a
w=2
return A.b(o.Al(),$async$$0)
case 2:t=o.d
t===$&&A.c()
s=o.e
s===$&&A.c()
r=o.a.c
q=o.f
q===$&&A.c()
w=3
return A.b(C.fLO(t,s,r,q),$async$$0)
case 3:p=e
w=4
return A.b(A.oV(o.a.c,!1),$async$$0)
case 4:o.kI(p)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsT.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.a8A(),$async$$0)
case 3:q=e
if(q==null){r.kI("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return A.b(A.a5(s,!1).ce(A.ej(new C.dsS(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return A.b(A.oV(r.a.c,!1),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsS.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&A.c()
return new C.Za(w.b,w.a,u,v,null)},
$S:z+39}
C.dsI.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.hx2(q)?3:4
break
case 3:w=5
return A.b(t.a.Eg(B.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return A.b(C.aW3(q,s.a.c),$async$$0)
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
case 9:s.kI(C.bWJ(s.a.c))
w=1
break
case 10:s.kI("That code didn't match anything on your account. Double-check it and try again.")
w=1
break
case 11:s.kI(y.B)
w=1
break
case 12:q=r.b
q.toString
w=14
return A.b(s.zA(q,!0,!0),$async$$0)
case 14:w=1
break
case 13:q=r.b
q.toString
w=15
return A.b(s.aO7(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsH.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=A.bl(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dsK.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.abR(),$async$$0)
case 3:q=e
if(q==null||B.a.i(q).length===0){w=1
break}s=C.h_G(q)
if(s==null){r.kI("Could not read that backup file.")
w=1
break}if(!C.bWI(s,r.a.c,null)){r.kI(C.bWJ(r.a.c))
w=1
break}w=4
return A.b(r.bEO(s),$async$$0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsR.prototype={
$1(d){var w=null,v=new A.ar(B.as,$.aw()),u=A.N(d).ax.a===B.H,t=u?B.i3:B.c,s=x.p,r=A.v(A.a([A.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,A.l(w,w,u?B.ad:B.ak,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),B.az,A.aL(w,B.T,!0,w,!0,B.q,w,A.aM(),v,w,w,w,w,w,2,A.br(w,new A.b4(4,A.m(14),B.df),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),B.y,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,B.dM,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.L,w,B.am,w,w,w,w)],s),B.F,w,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bK(!1,B.dd,w,w,!0,w,w,new C.dsP(d),w,w),A.bJ(D.f5l,new C.dsQ(d,v),A.bk(B.aU,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.fjj,w)},
$S:19}
C.dsP.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dsQ.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).N(w)
return null},
$S:0}
C.dsM.prototype={
$1(d){return D.fI0},
$S:z+12}
C.dsN.prototype={
$0(){return this.a.Eh(B.a.i(this.b))},
$S:1}
C.dsO.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(C.aW3(t.b,r.a.c),$async$$0)
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
return A.b(r.zA(s,!0,!0),$async$$0)
case 11:w=1
break
case 7:r.kI(C.bWJ(r.a.c))
w=1
break
case 8:r.kI("Could not read that QR code for your account.")
w=1
break
case 9:r.kI(y.B)
w=1
break
case 10:s=q.b
s.toString
w=12
return A.b(r.aO7(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsW.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dt_.prototype={
$1(d){this.a.Q2()
return null},
$S:14}
C.dsX.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dsY.prototype={
$0(){var w=null,v=this.a
A.fI(new A.fA(v.gauL()))
this.b.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d("Code "+v.gauL()+" copied",w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dsZ.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dt0.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!(B.a.a0(s,"NGMYSNAP1|")||B.a.a0(s,"NGMYLOCALSYNC1|")||B.a.a0(s,"NGMYLOCALLIVE1|")||B.a.a0(s,"NGMYLOCALDEP1|")))continue
r.e=!0
A.a5(this.b,!1).N(s)
return}},
$S:180}
C.fgO.prototype={
$1(d){return D.fFO},
$S:z+13}
C.fi0.prototype={
$1(d){return new C.adj(this.a,this.b,this.c,null)},
$S:z+14}
C.ePt.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.ePu.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.d2_.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fE()},
$S:8}
C.d1X.prototype={
$2(d,e){return e.ajp(e.a.toUpperCase())},
$S:1636}
C.d1Y.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=B.a.i(w.d.a.a)
A.a5(v,!1).N(w)
return null},
$S:2}
C.d1Z.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.bXq.prototype={
$1(d){var w=J.q(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!B.d.b8(D.d6j,B.a.gkO(v))},
$S:4}
C.fpW.prototype={
$1(d){return d.a===this.a},
$S:1637}
C.fpX.prototype={
$0(){return B.d.gL(B.BG)},
$S:1638}
C.dzl.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.m(new C.dzk(v))
w=v.r
w===$&&A.c()
if(w<=0)v.b2z("Time's up")},
$S:14}
C.dzk.prototype={
$0(){var w=this.a,v=w.r
v===$&&A.c()
w.r=v-1
return v},
$S:0}
C.dzc.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dzh.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.m(new C.dze(w,d,e))},
$S:133}
C.dze.prototype={
$0(){var w=this.a,v=this.c
w.e=B.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dzi.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.dzd(w))
w.coU(!0)},
$S:0}
C.dzd.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dzj.prototype={
$1(d){this.a.b2z(d)
return null},
$S:2}
C.dzf.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.dzg.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.c3R.prototype={
$1(d){return D.dqB},
$S:z+15}
C.c3Q.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fiN.prototype={
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
C.fiO.prototype={
$2(d,e){var w=A.aN(J.q(d,e))
w=w==null?null:B.k.O(w)
return w==null?0:w},
$S:566}
C.fiP.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:225}
C.fwX.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.hb1(w,v):C.fRy(w,v)
if(u===3)++w.f
C.aeI(w,this.c,u)
return u},
$S:1640}
C.fwZ.prototype={
$0(){return C.hb1(this.a,this.b)},
$S:114}
C.fwY.prototype={
$0(){return C.fRy(this.a,this.b)},
$S:114}
C.dsw.prototype={
$0(){var w=this.a
if(w.a.c)w.m(new C.dsv(w))},
$S:0}
C.dsv.prototype={
$0(){this.a.r=1+B.o.F(A.Bn(new A.S(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dsx.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&A.c()
u=u.x
u===$&&A.c()
w=B.k.bw(u*10)
if(w!==v.w)v.m(new C.dsu(v,w))}},
$S:0}
C.dsu.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.c5P.prototype={
$3(d,e,f){var w=null
return A.D(A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,B.I,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.bz,A.f1(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.dt)],x.p),B.m,w,B.e,B.j,0,B.p),1)},
$S:1641}
C.c5O.prototype={
$3(d,e,f){var w=null
return A.d("$"+B.k.aa(e,2),w,w,w,w,w,w,B.oS,w,w,w)},
$S:359}
C.c6g.prototype={
$1(d){return new C.MP(this.a,this.b,!1,null,null)},
$S:z+16}
C.dS7.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=A.m(e?0:30)
e=e?g:A.I(B.b4.j(0.5),B.r,1)
w=f.a.e?g:A.a([new A.ad(2,B.G,B.b4.j(0.35),B.J,36),new A.ad(0,B.G,B.bA.j(0.175),B.J,24)],x.V)
v=A.m(f.a.e?0:30)
u=x.O
t=A.ao(g,A.p(g,g,B.f,g,g,new A.o(g,g,g,g,g,new A.bR(B.A,0.5,B.x,g,0,A.a([B.b7.j(0.22),B.K],u),g,g),B.a6),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=A.ao(-50,A.p(g,g,B.f,g,g,new A.o(g,g,g,g,g,new A.bR(B.A,0.5,B.x,g,0,A.a([B.bA.j(0.18),B.K],u),g,g),B.a6),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?B.j:B.Q
p=x.p
o=A.a([],p)
if(f.a.e)o.push(B.P)
n=x.V
o.push(A.p(g,D.bFu,B.f,g,g,new A.o(g,g,A.I(B.aM.j(0.8),B.r,2.5),g,A.a([new A.ad(0,B.G,B.b4.j(0.55),B.cy,18)],n),E.tJ,B.a6),g,88,g,g,g,g,g,88))
o.push(B.aO)
o.push(A.nF(B.jj,D.fh5,new C.dS3()))
o.push(B.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(A.d(m,g,g,g,g,g,g,A.l(g,g,B.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,B.cs,g,1.45,!0,g,g,g,g,g,g,g,g),B.L,g,g))
m=this.b
if(m.length!==0){l=B.cr.j(0.12)
k=A.m(18)
j=A.I(B.cr.j(0.45),B.r,1)
i=A.a([A.A(A.a([A.W(D.bzw,B.cr.j(0.95),g,g,g,20),B.ab,A.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,A.l(g,g,B.cr.j(0.95),g,g,g,g,g,g,g,g,13,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),B.m,g,B.e,B.j,0,g,g),B.S,A.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,A.l(g,g,B.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),B.S],p)
B.d.v(i,new A.J(m,new C.dS4(),A.T(m).k("J<1,r>")))
B.d.v(o,A.a([B.aO,A.p(g,A.v(i,B.F,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(l,g,j,k,g,g,B.n),g,g,g,g,B.bB,g,g,1/0)],p))}o.push(B.bv)
m=B.w.j(0.35)
l=A.m(18)
k=A.I(B.b4.j(0.35),B.r,1)
o.push(A.p(g,A.v(A.a([f.avv(B.h4,"Unlimited games with an active plan",B.b7),B.P,f.avv(B.kg,"Weekday check-ins grow your balance",B.b4),B.P,f.avv(B.me,"Compete, bet, and earn points",B.aM)],p),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(m,g,k,l,g,g,B.n),g,g,g,g,B.bB,g,g,1/0))
o.push(B.d5)
l=A.m(16)
n=A.a([new A.ad(0,B.G,B.bA.j(0.45),B.cy,16)],n)
o.push(new A.a6(1/0,g,A.bZ(A.dp(D.bII,D.fcI,new C.dS5(f,a0),A.bk(B.K,g,g,g,B.c,B.Ic,g,B.K,new A.b7(A.m(16),B.Y),g,g,g)),new A.o(g,g,g,l,n,E.tJ,B.n),B.bd),g))
o.push(B.P)
n=f.a.e?"Back":"Maybe later"
o.push(A.bK(!1,A.d(n,g,g,g,g,g,g,A.l(g,g,B.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,new C.dS6(f,a0),g,g))
if(f.a.e)o.push(B.b3)
h=A.p(g,A.bv(v,new A.an(B.W,g,B.aa,B.q,A.a([t,u,new A.C(new A.Q(22,r,22,q),A.v(o,B.m,g,B.e,s,0,B.p),g)],p),g),B.aq),B.f,g,g,new A.o(g,g,e,d,w,D.bSy,B.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return A.eE(g,B.K,h,g,g,g,Af.XN,B.d_,g,g,g)},
$S:657}
C.dS3.prototype={
$1(d){return D.bRw.aw(0,d)},
$S:65}
C.dS4.prototype={
$1(d){var w=null
return new A.C(B.eO,A.A(A.a([A.W(A1.ZK,B.cr.j(0.85),w,w,w,14),B.ab,A.D(A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$S:127}
C.dS5.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{A.a5(this.b,!1).N(null)
w.a.c.$0()}},
$S:0}
C.dS6.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else A.a5(this.b,!1).N(null)},
$S:0}
C.fsi.prototype={
$1(d){if(d.gmu())this.a.a=d
return d.gmu()},
$S:493}
C.fs5.prototype={
$1(d){$.aT.x1$.push(new C.fs4(this.a))},
$S:8}
C.fs4.prototype={
$1(d){return this.a.$0()},
$S:8}
C.ff4.prototype={
$1(d){return C.hb8(this.a,this.b+1)},
$S:8}
C.ftF.prototype={
$2(d,e){var w=A.aI(d,B.bS,x.w).w.a
return new A.a6(w.a,w.b,A.cb(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:163}
C.c6u.prototype={
$1(d){return d.r===this.a},
$S:246}
C.c6v.prototype={
$1(d){var w=$.aPf(),v=w.a
w.sp(0,v+1)
return v},
$S:1643}
C.c6w.prototype={
$1(d){},
$S:31}
C.c6t.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:246}
C.c6s.prototype={
$1(d){return d.f.ca(this.a)},
$S:246}
C.fd_.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.fFc.prototype={
$1(d){return C.a6g(this.a)},
$S:104}
C.fFd.prototype={
$1(d){var w=$.aPf()
w.sp(0,w.a+1)},
$S:27}
C.fFe.prototype={
$1(d){},
$S:31}
C.fFf.prototype={
$1(d){return new A.k9($.aPf(),new C.fFb(this.a,this.b),null,null,x.am)},
$S:1644}
C.fFb.prototype={
$3(d,e,f){var w=this.b
return new A.l4(C.aog(this.a,!1),new C.fFa(w),w,null,x.gv)},
$S:1645}
C.fFa.prototype={
$2(d,e){var w=e.b
return new C.ac9(w==null?this.a:w,null)},
$S:z+17}
C.dSa.prototype={
$1(d){return d.c},
$S:246}
C.dSb.prototype={
$1(d){return d.gbdT()},
$S:1646}
C.dSc.prototype={
$2(d,e){return d+e},
$S:85}
C.dSd.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dSf.prototype={
$2(d,e){return B.P},
$S:36}
C.dSe.prototype={
$2(d,e){return new C.ac8(J.q(this.a.c,e),null)},
$S:z+18}
C.dS9.prototype={
$1(d){return d==null?"\u2026":C.bxZ(d)},
$S:1647}
C.fFi.prototype={
$3(d,e,f){var w=this
return A.ri(new C.ayL(w.a,w.b,w.c,w.d,new C.fFg(d,w.e),new C.fFh(d,w.f),null))},
$C:"$3",
$R:3,
$S:96}
C.fFg.prototype={
$0(){A.a5(this.a,!1).N(null)
C.he8(this.b)},
$S:0}
C.fFh.prototype={
$0(){A.a5(this.a,!1).N(null)
C.he8(this.b)},
$S:0}
C.d90.prototype={
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
B.d.v(w,new A.J(t,new C.d9_(),A.T(t).k("J<1,r>")))}t=h.d
t===$&&A.c()
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,A.aI(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?A.a([B.bn,B.fm,B.ec],r):A.a([B.aB,B.eM,B.ex],r)
p=A.m(26)
o=A.I(B.c.j(0.4),B.r,2)
n=x.V
m=A.a([new A.ad(6,B.G,(h.a.c?B.dw:B.dF).j(0.5),B.J,36)],n)
l=A.a([],g)
if(h.a.c){k=A.dl()
j=k.a
j.$flags&2&&A.aj(j)
j[11]=0.001
k.jL(-0.35)
r=A.a([Z.ad5,B.rS],r)
l.push(new A.a6(i,100,new A.an(B.A,i,B.aa,B.f,A.a([A.fr(B.A,A.p(i,D.b2T,B.f,i,i,new A.o(i,i,i,i,A.a([new A.ad(4,B.G,B.cR.j(0.6),B.J,24),new A.ad(0,B.G,B.w.j(0.3),B.dn,12)],n),new A.bR(B.A,0.5,B.x,i,0,r,i,i),B.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.bLW)
l.push(B.az)
l.push(A.d(h.a.d,i,i,i,i,i,i,B.a6V,B.L,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=A.m(18)
k=A.I(B.fm,B.r,4)
B.d.v(l,A.a([B.az,D.f72,B.P,A.p(i,A.d(r,i,i,i,i,i,i,D.eYQ,B.L,i,i),B.f,i,i,new A.o(B.c,i,k,n,i,i,B.n),i,i,i,i,B.Xg,i,i,1/0)],g))}B.d.v(l,A.a([B.ac,A.d(h.a.e,i,i,i,i,i,i,D.f0r,B.L,i,i)],g))
l.push(B.e0)
r=A.D(A.dT(D.f4D,h.a.r,A.de(i,i,i,i,i,i,i,i,i,B.c,i,i,B.cf,i,i,D.aVz,i,i,i,i)),1)
h=h.a
n=h.w
l.push(A.A(A.a([r,B.aw,A.D(A.bJ(F.aOV,n,A.bk(B.c,i,i,i,h.c?B.fm:B.eM,i,B.cf,i,i,i,i,i)),1)],g),B.m,i,B.e,B.j,0,i,i))
w.push(A.e9(B.A,A.p(i,A.v(l,B.m,i,B.e,B.Q,0,B.p),B.f,i,i,new A.o(i,i,o,p,m,new A.a7(B.ax,B.aD,B.x,q,i,i),B.n),i,i,i,B.a9,B.agJ,i,i,s),1+t*0.02,i,i))
return new A.an(B.A,i,B.aa,B.f,w,i)},
$S:110}
C.d9_.prototype={
$1(d){var w=null,v=d.a,u=d.b
return A.ao(w,A.db(A.eA(B.A,d.d,A.W(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.c85.prototype={
$2(d,e){var w=null,v=this.a,u=C.hws(A.Ko(v.c,v.d))
return A.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1648}
C.c84.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.bXX.prototype={
$0(){},
$S:0}
C.fbZ.prototype={
$1(d){return B.o.u(d)},
$S:76}
C.dLa.prototype={
$0(){return this.a.y=!0},
$S:0}
C.dLb.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.dLc.prototype={
$0(){var w=this.a
return w.w=D.PL[w.d.aB(5)]},
$S:0}
C.dLd.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.dLe.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.dLf.prototype={
$0(){var w=this.a
return w.m(new C.dL9(w))},
$S:0}
C.dL9.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dLg.prototype={
$0(){var w=this.a
return w.m(new C.dL8(w))},
$S:0}
C.dL8.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dLj.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.dLk.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&B.a.i(t.e.a.a).length===0?B.bn:A.Z(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),r=A.m(10)
t=t.y?u:new C.dLi(t,d)
w=A.m(10)
v=B.k.aa(d,0)
return A.D(new A.C(B.jr,A.aF(!1,B.a1,!0,r,A.aK(!1,w,!0,new A.a6(u,38,A.av(A.d("$"+v,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),B.f,s,0,u,u,u,u,u,B.af),u),1)},
$S:1649}
C.dLi.prototype={
$0(){var w=this.a
return w.m(new C.dLh(w,this.b))},
$S:0}
C.dLh.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bM(0,B.c3)},
$S:0}
C.dSx.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+B.cS.gcu().aI(this.c)},
$S:0}
C.dSy.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.dSt.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=A.m(14),s=u?B.c.j(0.1):B.K,r=A.I(u?D.eH.j(0.5):B.K,B.r,1),q=A.W(e,u?D.eH:B.ay,w,w,w,20)
return A.D(A.aE(w,A.dg(w,A.A(A.a([q,B.bp,A.d(f,w,w,w,w,w,w,A.l(w,w,u?B.c:B.ay,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.ba,B.j,0,w,w),w,w,B.bb,new A.o(s,w,r,t,w,w,B.n),B.a1,w,46,w,w,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dSv(v,d),w,w,w,w,w,w,!1,B.a8),1)},
$S:1650}
C.dSv.prototype={
$0(){var w=this.a
return w.m(new C.dSu(w,this.b))},
$S:0}
C.dSu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSw.prototype={
$0(){var w=this.a,v=w.d===B.km?"Cash App tag":"Bitcoin address"
return w.Ik(this.b,v)},
$S:0}
C.dSs.prototype={
$0(){var w=this.a
return w.Ik(w.gaq8(),"Code")},
$S:0}
C.c6W.prototype={
$1(d){return C.hsE(A.a1(d,x.N,x.z))},
$S:z+20}
C.c6X.prototype={
$2(d,e){return d.c.aL(0,e.c)},
$S:z+6}
C.c6T.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.c6U.prototype={
$2(d,e){return d.c.aL(0,e.c)},
$S:z+6}
C.c6V.prototype={
$1(d){return d.ad()},
$S:z+23}
C.c6Y.prototype={
$1(d){var w=d.c
return!w.cY(this.a.bN(-36e8))&&!w.ca(this.b)},
$S:z+7}
C.c_k.prototype={
$1(d){return C.hsF(A.a1(d,x.N,x.z))},
$S:z+24}
C.c_l.prototype={
$2(d,e){return e.b.aL(0,d.b)},
$S:z+8}
C.c_i.prototype={
$1(d){return d.ad()},
$S:z+26}
C.c_j.prototype={
$2(d,e){return e.b.aL(0,d.b)},
$S:z+8}
C.c_n.prototype={
$1(d){var w=d.b
return!w.cY(this.a)&&!w.ca(this.b)},
$S:z+27}
C.c74.prototype={
$1(d){return d.ad()},
$S:z+28}
C.c73.prototype={
$1(d){return C.h1V(A.a1(x.f.a(d),x.N,x.z))},
$S:z+29}
C.c72.prototype={
$1(d){return d.ad()},
$S:z+30}
C.c71.prototype={
$1(d){return C.hw6(A.a1(x.f.a(d),x.N,x.z))},
$S:z+31}
C.c76.prototype={
$1(d){return C.hw5(A.a1(x.f.a(d),x.N,x.z))},
$S:z+32}
C.c77.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+2}
C.c78.prototype={
$1(d){return d.ad()},
$S:z+34}
C.dWc.prototype={
$1(d){return d.b9i(A.bl(d.e,!0,x.u))},
$S:z+36}
C.dWd.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+2}
C.dW6.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dW7.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dVQ.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.J(w,this.b)},
$S:0}
C.dVR.prototype={
$1(d){return new C.OF(this.a,null)},
$S:z+9}
C.dVS.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=B.d.bc(t,new C.dVP(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){B.d.cz(u.d,w)
u.It()}},
$S:0}
C.dVP.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dW3.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(A.E(["role","admin","text",this.b],w,w))},
$S:0}
C.dW4.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(A.E(["role","ai","text",v],t,t))}else{v=t.d
v===$&&A.c()
t.d=C.hWk(v,w[0],w[3])
t.It()
t=w[2]
if(t==null)t="Created "+J.ac(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(A.E(["role","ai","text",t],w,w))}},
$S:0}
C.dW5.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=B.d.gcZ(v).Q
v.toString
w.hV(v)}},
$S:8}
C.dVY.prototype={
$1(d){return new C.OF(this.a,null)},
$S:z+9}
C.dVZ.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dVX.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cz(w,this.b)},
$S:0}
C.dW2.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&A.c()
v=B.d.cz(w,s)
B.d.cn(t.d,u.a,v)
t.It()},
$S:0}
C.dW1.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
return new C.ZY(u[w],new C.dW0(v,w),null)},
$S:z+59}
C.dW0.prototype={
$1(d){var w=this.a
return w.m(new C.dW_(w,this.b,d))},
$S:z+40}
C.dW_.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dVU.prototype={
$0(){var w=this.a
return w.m(new C.dVT(w))},
$S:0}
C.dVT.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dVV.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?B.cn:B.aK
return new A.C(B.eO,A.d(t+": "+A.t(s),w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?B.a4:B.cs,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:111}
C.dVW.prototype={
$1(d){return this.a.a0h()},
$S:2}
C.dWb.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.rP:B.c
u=A.m(16)
t=A.m(16)
s=l?B.aK:B.aL
r=w.d
q=A.b0(r).j(0.15)
p=A.m(12)
q=A.p(n,A.W(B.ajm,l?B.bI:B.ak,n,n,n,20),B.f,n,n,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.bR,n,n,n)
p=A.b0(r).j(0.12)
o=A.m(8)
o=A.p(n,A.W(w.c,A.b0(r),n,n,n,18),B.f,n,n,new A.o(p,n,n,o,n,n,B.n),n,n,n,n,B.hu,n,n,n)
r=A.A(A.a([o,B.aw,A.D(A.d(w.b,n,n,n,n,n,n,A.l(n,n,l?B.aP:B.M,n,n,n,n,n,n,n,n,n,n,n,B.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),B.m,n,B.e,B.j,0,n,n)
p=w.e.length
return new A.C(B.db,A.aF(!1,B.a1,!0,u,A.dN(!1,n,n,n,!0,n,n,n,!0,n,new H.asV(q,e,!0,n),n,n,n,n,new C.dW8(m,e),!1,n,n,new A.b7(t,new A.az(s,1,B.r,-1)),n,n,A.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,A.l(n,n,l?B.bI:B.ak,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,A.Bm(n,n,n,new C.dW9(),B.J,new C.dWa(m,e),B.cj,n,x.N),n),B.f,v,0,n,n,n,n,n,B.af),new A.cw(w.a,x.W))},
$S:111}
C.dWa.prototype={
$1(d){var w=this
if(d==="edit")w.a.a91(w.b)
if(d==="questions")w.a.XJ(w.b)
if(d==="delete")w.a.bHE(w.b)},
$S:2}
C.dW9.prototype={
$1(d){return D.cE6},
$S:126}
C.dW8.prototype={
$0(){return this.a.XJ(this.b)},
$S:0}
C.cII.prototype={
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
u=A.I(u,B.r,1)
t=r.f
t===$&&A.c()
return A.aK(!1,s,!0,A.p(s,A.W(d,A.b0(t),s,s,s,s),B.f,s,s,new A.o(q,s,u,v,s,s,B.n),s,s,s,s,B.cj,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cIH(r,d),s,s,s,s,s,s,s)},
$S:1651}
C.cIH.prototype={
$0(){var w=this.a
return w.m(new C.cIF(w,this.b))},
$S:0}
C.cIF.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cIJ.prototype={
$1(d){var w=null,v=this.a,u=A.b0(d),t=v.f
t===$&&A.c()
return A.aE(w,A.hp(u,w,t===d?D.bJo:w,w,14),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cIG(v,d),w,w,w,w,w,w,!1,B.a8)},
$S:386}
C.cIG.prototype={
$0(){var w=this.a
return w.m(new C.cIE(w,this.b))},
$S:0}
C.cIE.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cIK.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cIL.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=B.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&A.c()
v=v.f
v===$&&A.c()
t=u.cEE(v,w,t)
A.a5(this.b,!1).N(t)
return null},
$S:0}
C.eKy.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return w.push(this.b)},
$S:0}
C.eKz.prototype={
$1(d){return new C.ZX(this.a,null)},
$S:z+41}
C.eKF.prototype={
$2(d,e){return B.P},
$S:36}
C.eKE.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.rP:B.c
u=A.m(14)
t=A.m(14)
s=l?B.aK:B.aL
r=w.d
if(r!=null&&r.length!==0){q=A.m(8)
r=A.bv(q,K.aNW(n,B.bQ,36,B.pu,l?B.bI:B.ak,r,48),B.aq)}else r=A.W(D.Zu,A.b0(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=A.d(q,n,2,B.a2,n,n,n,A.l(n,n,l?B.aP:B.M,n,n,n,n,n,n,n,n,n,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ac(w.c)
o=w.e?" \xb7 Printable":""
return A.aF(!1,B.a1,!0,u,A.dN(!1,n,n,n,!0,n,n,n,!0,n,r,n,n,n,n,new C.eKC(m,w,e),!1,n,n,new A.b7(t,new A.az(s,1,B.r,-1)),n,n,A.d(""+p+" block(s)"+o,n,n,n,n,n,n,A.l(n,n,l?B.bI:B.ak,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,A.aH(n,n,n,n,D.bHP,n,n,n,new C.eKD(m,e),n,n,n,n,n,n),n),B.f,v,0,n,n,n,n,n,B.af)},
$S:78}
C.eKD.prototype={
$0(){var w=this.a
w.m(new C.eKA(w,this.b))
w.avy()},
$S:0}
C.eKA.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cz(w,this.b)},
$S:0}
C.eKC.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.aYT(u.b),$async$$0)
case 2:s=e
if(s!=null){t.m(new C.eKB(t,u.c,s))
t.avy()}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eKB.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eKu.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eKs.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
return new C.Up(w,"Answer Document",null)},
$S:z+42}
C.eKt.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eKw.prototype={
$0(){var w,v,u=this.a,t=u.a.c,s=u.d
s===$&&A.c()
s=B.a.i(s.a.a)
w=u.e
w===$&&A.c()
v=u.f
u=u.r
if(v==null)v=t.d
A.a5(this.b,!1).N(new C.ie(t.a,s,w,v,u,t.f))
return null},
$S:0}
C.eKx.prototype={
$1(d){var w=this.a
return w.m(new C.eKv(w,d))},
$S:9}
C.eKv.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.c6Z.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fu2.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dWN.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.dWt.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,new C.lv("image","",this.b,null))},
$S:0}
C.dWy.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,new C.lv("video","","data:video/mp4;base64,"+B.cS.gcu().aI(this.b),null))},
$S:0}
C.dWw.prototype={
$1(d){var w=null,v=x.p,u=A.v(A.a([A.aL(w,B.T,!1,w,!0,B.q,w,A.aM(),this.a,w,w,w,w,w,2,D.bNM,B.y,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.am,w,w,w,w),A.aL(w,B.T,!1,w,!0,B.q,w,A.aM(),this.b,w,w,w,w,w,2,D.bNL,B.y,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.am,w,w,w,w)],v),B.m,w,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bK(!1,B.dd,w,w,!0,w,w,new C.dWu(d),w,w),A.bJ(D.fgA,new C.dWv(d),w)],v),w,w,w,u,w,w,w,w,D.f3Y,w)},
$S:19}
C.dWu.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dWv.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dWx.prototype={
$0(){var w,v=this.a.e
v===$&&A.c()
w=B.a.i(this.b.a.a)
return B.d.J(v,new C.lv("link","",B.a.i(this.c.a.a),w))},
$S:0}
C.dWp.prototype={
$1(d){return B.a.i(d)},
$S:13}
C.dWq.prototype={
$1(d){return d.length!==0},
$S:3}
C.dWr.prototype={
$1(d){return B.a.i(B.a.e9(d,A.af("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.dWs.prototype={
$1(d){return d.length!==0},
$S:3}
C.dWD.prototype={
$0(){var w=this.a.bB2()
A.a5(this.b,!1).N(w)
return null},
$S:0}
C.dWE.prototype={
$0(){return this.a.avz("**","**")},
$S:0}
C.dWF.prototype={
$0(){return this.a.avz("*","*")},
$S:0}
C.dWG.prototype={
$0(){return this.a.avz("__","__")},
$S:0}
C.dWH.prototype={
$0(){return this.a.aX5("## Section title")},
$S:0}
C.dWI.prototype={
$0(){return this.a.aX5("\u2022 First point\n\u2022 Second point")},
$S:0}
C.dWJ.prototype={
$0(){},
$S:0}
C.dWK.prototype={
$0(){var w=this.a
w.m(new C.dWC(w))},
$S:0}
C.dWC.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,D.dtX)},
$S:0}
C.dWL.prototype={
$0(){var w=this.a
w.m(new C.dWB(w))},
$S:0}
C.dWB.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,D.dtY)},
$S:0}
C.dWM.prototype={
$1(d){var w,v,u=null,t=d.b,s=t.a
A:{if("image"===s){w="Image"
break A}if("video"===s){w="Video"
break A}if("link"===s){w=t.d
if(w==null)w="Link"
break A}if("signature"===s){w="Signature"
break A}w=s
break A}v=this.b.a
w=A.d(w,u,u,u,u,u,u,A.l(u,u,v?B.iK:B.aA,u,u,u,u,u,u,u,u,11,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
v=v?B.cC:B.iH
return A.CS(u,v,B.alG,w,u,new C.dWA(this.a,d),u)},
$S:z+45}
C.dWA.prototype={
$0(){var w=this.a
return w.m(new C.dWz(w,this.b))},
$S:0}
C.dWz.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.cz(w,this.b.a)},
$S:0}
C.dWm.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.aS9},
$S:0}
C.dWn.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.fH5},
$S:0}
C.dWe.prototype={
$0(){var w=this.a
w.d=D.aS8
w.f=w.e=null},
$S:0}
C.dWf.prototype={
$0(){var w=this.a
w.d=D.aS9
w.f=null},
$S:0}
C.dWo.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+2}
C.dWh.prototype={
$2(d,e){var w=this.a,v=w.gb3w()[e]
return new C.aaI(v,this.b,new C.dWg(w,v),null)},
$S:z+46}
C.dWg.prototype={
$0(){return this.a.c3H(this.b.a)},
$S:0}
C.dWj.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+47}
C.dWl.prototype={
$2(d,e){return B.S},
$S:36}
C.dWk.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.rP:B.c,p=A.m(16),o=A.m(16),n=A.m(16),m=A.I(r?B.aK:B.aL,B.r,1),l=A.a([new A.ad(0,B.G,B.w.j(r?0.28:0.06),B.dB,8)],x.V),k=A.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=A.m(10)
v=A.m(10)
k.push(A.bv(w,K.aNW(v,B.bQ,52,D.Zu,r?B.bI:B.ak,j,52),B.aq))}else{j=u.d.d
w=A.b0(j).j(0.15)
v=A.m(12)
k.push(A.p(t,A.W(D.Zu,A.b0(j),t,t,t,24),B.f,t,t,new A.o(w,t,t,v,t,t,B.n),t,52,t,t,t,t,t,52))}k.push(B.bf)
k.push(A.D(A.d(s.b,t,t,t,t,t,t,A.l(t,t,r?B.aP:B.M,t,t,t,t,t,t,t,t,13,t,t,B.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(A.W(B.eo,r?B.bI:B.ak,t,t,t,22))
return A.aF(!1,B.a1,!0,p,A.aK(!1,o,!0,A.p(t,A.A(k,B.m,t,B.e,B.j,0,t,t),B.f,t,t,new A.o(t,t,m,n,l,t,B.n),t,t,t,t,B.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dWi(u.a,s),t,t,t,t,t,t,t),B.f,q,0,t,t,t,t,t,B.af)},
$S:78}
C.dWi.prototype={
$0(){return this.a.caq(this.b)},
$S:0}
C.c70.prototype={
$1(d){return new C.aaA(d,this.a,null)},
$S:z+48}
C.cCo.prototype={
$0(){var w=this.a.c,v=w.c,u=A.oi(v==null?w.b:v)
if(u!=null)A.iO(u,B.fj,null)},
$S:0}
C.cCp.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.cCq.prototype={
$1(d){var w=null,v=this.a.d.a,u=A.d("\u2022  ",w,w,w,w,w,w,A.l(w,w,v?B.cn:B.aK,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=B.a.i(d)
return new A.C(B.nH,A.A(A.a([u,A.D(A.d(t,w,w,w,w,w,w,A.l(w,w,v?B.cn:B.aK,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.F,w,B.e,B.j,0,w,w),w)},
$S:127}
C.ddi.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ddk.prototype={
$0(){return this.a.m(new C.ddj(this.b))},
$S:0}
C.ddj.prototype={
$0(){var w=this.a
return w.a.f?w.fZ(0):w.py(0)},
$S:0}
C.fbJ.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.dX0.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.C4)w.z=v
else w.Q=v},
$S:0}
C.dWS.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=B.d.gcZ(v).Q
v.toString
w.lX(v,B.cq,B.eN)},
$S:8}
C.dWU.prototype={
$1(d){return J.q(d,"role")==="ai"},
$S:90}
C.dWV.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.E(["role","user","text",this.b],v,v))
w.d.bM(0,B.c3)
w.r=!0},
$S:0}
C.dWW.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.E(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.dWX.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+A.t(w.h(d,"text"))},
$S:154}
C.dWY.prototype={
$0(){var w=x.N
return this.a.f.push(A.E(["role","ai","text",this.b],w,w))},
$S:0}
C.dWZ.prototype={
$0(){var w=x.N
return this.a.f.push(A.E(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.dX_.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dWT.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=A.mC(l,B.bA.j(0.9),l,l,l,l,l,2,l,l)
return new A.C(B.bU,A.A(A.a([new A.a6(22,22,k,l),B.aw,A.d("Writing full song\u2026",l,l,l,l,l,l,A.l(l,l,this.b?B.ay:B.dz,l,l,l,l,l,l,l,l,12,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),B.m,l,B.e,B.j,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?B.a7:B.a3
k=k.c
k.toString
k=A.aI(k,B.bS,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new A.a7(B.a3,B.a7,B.x,A.a([B.aE,B.bA.j(0.85)],x.O),l,l)
else{q=x.O
q=new A.a7(B.a3,B.a7,B.x,v?A.a([B.bm,B.M],q):A.a([B.c,B.aP],q),l,l)}p=A.a([new A.ad(0,B.G,(u?B.bA:B.aE).j(0.22),B.je,14)],x.V)
o=A.I(B.c.j(u?0.2:0.08),B.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=B.c
else v=v?B.aL:B.bh
n=u?13.5:15
m=u?B.bl:B.cD
return new A.bI(t,l,l,A.p(l,A.d(w,l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?B.a4:B.cs,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,new A.aY(0,k.a.a*0.94,0,1/0),new A.o(l,l,o,new A.bp(B.jZ,B.jZ,new A.aV(s,s),new A.aV(r,r)),p,q,B.n),l,l,l,B.kE,B.j7,l,l,l),l)},
$S:39}
C.dX7.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&A.c()
w=m.x
w===$&&A.c()
v=A.m(22)
u=this.b
t=x.O
s=u?A.a([D.abJ,B.M,B.nt],t):A.a([B.qt,B.qo,B.pa],t)
w=A.a([new A.ad(-4,B.G,B.aE.j(0.35+w*0.25),B.dn,28)],x.V)
r=A.I(B.c.j(u?0.08:0.5),B.r,1)
q=A.dl()
p=q.a
p.$flags&2&&A.aj(p)
p[11]=0.001
m=m.x
m===$&&A.c()
q.fu(m*0.08)
q=A.fr(B.A,A.p(o,D.bEy,B.f,o,o,new A.o(o,o,A.I(B.aM.j(0.6),B.r,2),o,o,D.e7W,B.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=A.nF(B.jj,D.fkU,new C.dX4())
p=x.p
m=A.a([A.A(A.a([q,B.bf,A.D(A.v(A.a([m,A.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,A.l(o,o,u?B.aR:B.aX,o,o,o,o,o,o,o,o,10,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),B.F,o,B.e,B.j,0,B.p),1)],p),B.m,o,B.e,B.j,0,o,o),B.ac,A.A(A.a([n.atO(D.C4,"Swahili","\ud83c\uddf9\ud83c\uddff",u),B.ab,n.atO(D.aDT,"English","\ud83c\uddec\ud83c\udde7",u),B.ab,n.atO(D.C5,"Mix","\ud83d\udd25",u)],p),B.m,o,B.e,B.j,0,o,o)],p)
if(n.x!==D.C5){t=A.a([B.P,n.ct4(u)],p)
if(n.w){q=n.x===D.C4?D.a2e:D.a1s
p=A.T(q).k("J<1,r>")
q=A.B(new A.J(q,new C.dX5(n,u),p),p.k("ai.E"))
t.push(new A.C(B.ke,A.c_(B.bD,q,B.bt,6,6),o))}B.d.v(m,t)}else{t=A.a([B.bA.j(0.22),B.aE.j(0.12)],t)
q=A.m(12)
p=A.I(B.bA.j(0.45),B.r,1)
m.push(new A.C(B.ke,A.p(o,A.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,A.l(o,o,u?B.ik:B.kC,o,o,o,o,o,o,o,o,10,o,o,B.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),B.f,o,o,new A.o(o,o,p,q,o,new A.a7(B.a3,B.a7,B.x,t,o,o),B.n),o,o,o,o,B.bR,o,o,o),o))}m.push(B.P)
t=x.dc
n=A.B(new A.J(D.d_T,new C.dX6(n,u),t),t.k("ai.E"))
m.push(A.A(n,B.m,o,B.e,B.j,0,o,o))
return A.p(o,A.v(m,B.aj,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,r,v,w,new A.a7(B.ax,B.aD,B.x,s,o,o),B.n),o,o,o,I.afD,I.afS,o,o,o)},
$S:95}
C.dX4.prototype={
$1(d){return D.bRY.aw(0,d)},
$S:65}
C.dX5.prototype={
$1(d){return this.a.ct5(d,this.b)},
$S:z+49}
C.dX6.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aDV?6:0,m=o?5:0,l=A.m(12)
if(o){w=this.b
v=w?B.aE.j(0.45):B.aE.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=B.w.j(w?0.25:0.05)
u=v
v=w
w=u}t=A.m(12)
p=p.r?q:new C.dX3(p,d)
s=C.hxB(d)
if(o)r=B.c
else r=v?B.ad:B.bh
r=A.d(s,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.hxC(d)
if(o)v=B.ad
else v=v?B.c_:B.dz
return A.D(new A.C(new A.Q(0,0,n,0),A.aF(!1,B.a1,!0,l,A.aK(!1,t,!0,new A.C(Q.Ll,A.v(A.a([r,A.d(s,q,q,q,q,q,q,A.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.e,B.j,0,B.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,w,m,q,q,q,q,q,B.af),q),1)},
$S:z+50}
C.dX3.prototype={
$0(){var w=this.a
return w.m(new C.dX2(w,this.b))},
$S:0}
C.dX2.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dX9.prototype={
$0(){var w=this.a
return w.m(new C.dX8(w))},
$S:0}
C.dX8.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dWR.prototype={
$0(){var w=this.a
return w.m(new C.dWQ(w,this.b))},
$S:0}
C.dWQ.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.C5
if(v===D.aDT&&w.Q==null)w.Q=B.d.gL(D.a1s).a},
$S:0}
C.dXa.prototype={
$0(){return this.a.coL(this.b.a)},
$S:0}
C.dX1.prototype={
$0(){return this.a.Il(this.b)},
$S:0}
C.dWO.prototype={
$1(d){return this.a.aX6()},
$S:2}
C.dWP.prototype={
$0(){return this.a.aX6()},
$S:0}
C.fG2.prototype={
$1(d){var w=this
return new C.YH(w.a,w.b,w.c,new C.fG1(w.d),null)},
$S:z+51}
C.fG1.prototype={
$0(){return J.lO(this.a.bd())},
$S:0}
C.daC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.be8()},
$S:27}
C.daD.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a.f
m===$&&A.c()
m=m.x
m===$&&A.c()
w=this.b
v=m*3.141592653589793*2+w*0.55
m=this.c
u=x.w
t=A.aI(m,B.bS,u).w
s=Math.cos(v)
u=A.aI(m,B.bS,u).w
m=Math.sin(v*1.3)
r=Math.sin(v)
q=(w&1)===0
p=q?B.dW:B.h4
o=B.o.F(w,4)
q=q?B.aJ:B.aI
return A.ao(n,A.db(A.W(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:315}
C.daI.prototype={
$0(){},
$S:0}
C.daH.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&A.c()
w=t.x
w===$&&A.c()
v=B.mA.av(0,B.k.D(w,0,1))
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793)
w=A.dl()
u=w.a
u.$flags&2&&A.aj(u)
u[11]=0.0028
w.fu(t*0.08)
w.jL(0.12)
return A.e9(B.A,A.fr(B.A,e,null,w,!0),0.5+v*0.5,null,null)},
$S:45}
C.daE.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=0.55+r*0.45
r=A.p(t,t,B.f,t,t,new A.o(t,t,t,t,A.a([new A.ad(6,B.G,B.aJ.j(w*0.5),B.J,36)],x.V),t,B.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new A.an(B.A,t,B.aa,B.q,A.a([r,new A.a6(96,96,A.mC(B.c.j(0.08),B.aJ,t,t,t,t,t,6,u/v,t),t),A.d(""+s.a.c,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,38,t,t,B.u,t,t,!0,t,t,t,t,t,A.a([new A.cP(B.aJ.j(w),B.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:110}
C.daF.prototype={
$1(d){return D.bS1.aw(0,d)},
$S:65}
C.daG.prototype={
$0(){var w=this.a
w.a.be8()
w.a.e.$0()},
$S:0}
C.c8Z.prototype={
$1(d){var w=!1
if(B.a.i(d.b.toLowerCase())===this.a)if(d.d===B.fq)if(d.x===B.ds){w=d.w
w=B.a.i(w==null?"":w)===this.b}return w},
$S:16}
C.c9b.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e7w.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.e8c.prototype={
$1(d){var w=this.a
if(w.c!=null)w.OX()},
$S:8}
C.e8d.prototype={
$1(d){var w=$.aT.p2$
if(w===B.ry||w===B.rz)return
this.a.Eb()},
$S:14}
C.e8e.prototype={
$1(d){this.a.cvb()},
$S:14}
C.e7V.prototype={
$0(){this.a.IO(this.b.d,!1)},
$S:0}
C.e7W.prototype={
$0(){},
$S:0}
C.e7X.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.e7Y.prototype={
$0(){},
$S:0}
C.e7Z.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e8_.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.e80.prototype={
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
C.e7Q.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=A.bl(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=A.bl(v[1],!0,x.N)
w.Oj()
w.a7c()},
$S:0}
C.e7x.prototype={
$0(){this.b.IO(this.c.d+this.a.a,!1)},
$S:0}
C.e7R.prototype={
$1(d){var w=d.d
return(w===B.fq||w===B.eK)&&d.x===B.ds},
$S:16}
C.e7S.prototype={
$1(d){return d.a},
$S:168}
C.e7T.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e7U.prototype={
$0(){},
$S:0}
C.e7B.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bl(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=A.bl(v[0],!0,x.N)},
$S:0}
C.e7C.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.e7K.prototype={
$0(){},
$S:0}
C.e7H.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.e7I.prototype={
$0(){var w=this.a,v=A.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e7J.prototype={
$0(){var w=this.a,v=A.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e7L.prototype={
$0(){return this.a.z=!0},
$S:0}
C.e7M.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new A.v6(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.e7N.prototype={
$0(){return this.a.z=!1},
$S:0}
C.e7P.prototype={
$0(){var w=this.a
return w.m(new C.e7O(w))},
$S:0}
C.e7O.prototype={
$0(){return this.a.y=1},
$S:0}
C.e7D.prototype={
$0(){return this.a.y=1},
$S:0}
C.e7E.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.e84.prototype={
$1(d){return d.a.length===0},
$S:16}
C.e85.prototype={
$2(d,e){return e.y.aL(0,d.y)},
$S:72}
C.e89.prototype={
$0(){var w=this.a
return w.m(new C.e82(w))},
$S:0}
C.e82.prototype={
$0(){return this.a.y=1},
$S:0}
C.e8a.prototype={
$0(){var w=this.a
return w.m(new C.e81(w))},
$S:0}
C.e81.prototype={
$0(){return this.a.y=2},
$S:0}
C.e8b.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.e86.prototype={
$2$cloudRequest(d,e){return this.a.aYc(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1653}
C.e87.prototype={
$0(){return this.a.Eb()},
$S:1}
C.e88.prototype={
$0(){var w=this.a
return w.m(new C.e83(w))},
$S:0}
C.e83.prototype={
$0(){var w=this.a
return w.y=B.o.D(w.y-1,0,2)},
$S:0}
C.e7A.prototype={
$0(){A.eP()
var w=this.a
w.m(new C.e7z(w))},
$S:0}
C.e7z.prototype={
$0(){return this.a.y=0},
$S:0}
C.e7y.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=A.bCL(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.c.j(0.55),B.r,1.2),t,A.a([new A.ad(1,B.G,B.av.j(0.55),B.J,18)],x.V),D.bQ6,B.a6),t,t,t,t,t,t,t,t),B.eu,B.tg,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=A.a([],w)
for(u=0;u<3;++u)v.push(r.c_E(u))
return new A.an(B.W,t,B.aa,B.q,A.a([q,A.A(v,B.m,t,B.e,B.j,0,t,t)],w),t)},
$S:62}
C.e7G.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
A.eP()
w.m(new C.e7F(w,v))},
$S:0}
C.e7F.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.df5.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===B.fq||v===B.eK)return!0
if(d.c!==0)v=B.a.t(w,"clock-in daily earnings")||B.a.t(w,"clock-in earnings")
else v=!1
return v},
$S:16}
C.df6.prototype={
$1(d){return new A.S(Date.now(),0,!1)},
$S:659}
C.df7.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new A.S(Date.now(),0,!1)
u=A.dA(C.fNb(v.c,u))
w=this.c?new C.df4(v):null
return v.b5h(this.b,B.pF,D.eH,w,"Today","$"+u,D.eH)},
$S:1655}
C.df4.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.df8.prototype={
$2(d,e){var w=this.a
return w.b5h(this.b,B.jR,B.c8,w.w,"Balance","$"+A.dA(A.Ko(w.c.a,new C.df3(w))),B.ct)},
$S:58}
C.df3.prototype={
$0(){return this.a.c.d},
$S:80}
C.deZ.prototype={
$0(){this.a.a.cMf()
return null},
$S:0}
C.df_.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(w,w,w,new C.bth(v,w),B.au)},
$S:67}
C.df0.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b9r(v,!0,B.av,D.od,w)}else{v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b9q(v,D.od,w)}return A.b3(w,w,w,v,B.au)},
$S:67}
C.df1.prototype={
$1(d){return new A.S(Date.now(),0,!1)},
$S:659}
C.df2.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new A.S(Date.now(),0,!1)
w=r.a
v=w.a.cL1(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:B.k.D(v/u,0,1)}u=w.d
u===$&&A.c()
s=w.e
s===$&&A.c()
return A.c6(new A.h3(A.a([u,s],x.U)),new C.deY(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1656}
C.deY.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=A.a([],m),k=o.b
if(k)B.d.v(l,A.ip(7,new C.deX(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&A.c()
v=v.x
v===$&&A.c()
u=o.d
l.push(A.b3(n,n,n,new C.b9p(o.c,v,k,u,D.od,D.bhW,n),D.eGC))
v=A.I(B.c.j(0.1),B.r,1.2)
if(k)t=B.vg
else t=o.e?B.v8:D.bzK
t=A.W(t,k?D.od:B.b0,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=A.d(s,n,n,n,n,n,n,A.l(n,n,B.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,B.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+A.dA(w.f&&w.d>0?w.d:o.f)}q=k?D.od:B.c
w=A.d(w,n,n,n,n,n,n,A.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,B.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=A.m(999)
p=u.j(0.16)
u=A.I(u.j(0.5),B.r,1)
l.push(A.p(n,A.v(A.a([t,B.ao,s,B.at,w,B.P,A.p(n,A.d(o.r,n,n,n,n,n,n,A.l(n,n,k?D.od:B.oi,n,n,n,n,n,n,n,n,9,n,n,B.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),B.f,n,n,new A.o(p,n,u,q,n,n,B.n),n,n,n,n,B.kG,n,n,n)],m),B.m,n,B.ba,B.j,0,B.p),B.f,n,n,new A.o(B.K,n,v,n,n,n,B.a6),n,176,n,n,n,n,n,176))
return A.av(new A.a6(276,276,new A.an(B.A,n,B.aa,B.f,l,n),n),n,n,n)},
$S:224}
C.deX.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=B.k.F(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=B.o.F(d,3)
t=B.o.F(d,2)
return A.ao(s,A.e_(A.db(A.p(s,s,B.f,s,s,new A.o(s,s,s,A.m(40),s,new A.bR(B.A,0.5,B.x,s,0,A.a([D.od.j(0.38),B.c.j(0.08),B.K],x.O),s,s),B.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),!0,s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:206}
C.dfp.prototype={
$0(){},
$S:0}
C.dfq.prototype={
$0(){},
$S:0}
C.dfr.prototype={
$1(d){return d.x===B.ds},
$S:16}
C.dfb.prototype={
$0(){return this.a.a.d.d},
$S:80}
C.dfa.prototype={
$0(){var w,v
A.eP()
w=this.a
v=this.b
w.m(new C.df9(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)A.fe(null,x.H)}},
$S:0}
C.df9.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dfm.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=A.m(12),q=s?w.b.j(0.18):B.c.j(0.04),p=A.I(s?w.b.j(0.7):B.c.j(0.08),B.r,1)
return A.D(new A.C(B.jr,A.aE(v,A.dg(B.A,A.d("$"+t,v,v,v,v,v,v,A.l(v,v,s?w.b:B.ad,v,v,v,v,v,v,v,v,13,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,B.bb,new A.o(q,v,p,r,v,v,B.n),B.hV,v,38,v,v,v,v,v),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dfo(u,d),v,v,v,v,v,v,!1,B.a8),v),1)},
$S:1658}
C.dfo.prototype={
$0(){A.eP()
var w=this.a
w.m(new C.dfn(w,this.b))},
$S:0}
C.dfn.prototype={
$0(){var w=""+this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.dfl.prototype={
$4$bold$color(d,e,f,g){var w=null,v=A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?B.c:g,t=f?15:13
return new A.C(B.x9,A.A(A.a([v,B.b3,A.d(e,w,w,w,w,w,w,A.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?B.u:B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1659}
C.dfk.prototype={
$1(d){return this.a.m(new C.dfj())},
$S:2}
C.dfj.prototype={
$0(){},
$S:0}
C.dfe.prototype={
$1(d){return this.a.aTT(d)&&!A.fUC(d)},
$S:16}
C.dff.prototype={
$2(d,e){return e.y.aL(0,d.y)},
$S:72}
C.dfg.prototype={
$0(){return this.a.a.d.d},
$S:80}
C.dfh.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return A.b(x.r.b(s)?s:A.dP(s,x.H),$async$$0)
case 2:if(t.c!=null)t.m(new C.dfd())
t.lT("Balance refreshed.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dfd.prototype={
$0(){},
$S:0}
C.dfi.prototype={
$0(){var w=this.a
return w.m(new C.dfc(w))},
$S:0}
C.dfc.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fq2.prototype={
$2(d,e){return e.y.aL(0,d.y)},
$S:72}
C.fjJ.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail"),u=!1
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.y(v,this.b)){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fAp.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail")
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fjI.prototype={
$1(d){var w,v,u
if(!C.hTb(d,this.a))return!1
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
C.f9h.prototype={
$1(d){var w=this.a
if(B.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:74}
C.fze.prototype={
$0(){return $.fSd=null},
$S:11}
C.fzf.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.fx9.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.fxa.prototype={
$0(){var w,v=this.a
$.fS1.W(0,v)
w=C.tG(this.b,v)
if(w!=null)A.PY(A.a([A.a1(w,x.N,x.z)],x._),v)},
$S:0}
C.fBu.prototype={
$1(d){return new C.Zu(this.a,this.b,null)},
$S:z+56}
C.e1M.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.e1P.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.e1Q.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.m(new C.e1O(w))},
$S:2}
C.e1O.prototype={
$0(){return this.a.f=""},
$S:0}
C.e1R.prototype={
$1(d){return this.a.aXk()},
$S:2}
C.e1S.prototype={
$0(){var w=this.a
return w.m(new C.e1N(w,this.b))},
$S:0}
C.e1N.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fiU.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+B.a.b_(d,1)},
$S:13}
C.fiT.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+B.a.b_(d,1)},
$S:13}
C.fzv.prototype={
$1(d){var w,v=x.f
if(v.b(d))return A.a1(d,x.N,x.z)
try{v=A.a1(v.a(d.ad()),x.N,x.z)
return v}catch(w){return A.V(x.N,x.z)}},
$S:12}
C.fzw.prototype={
$1(d){return J.cx(d)},
$S:4}
C.ftq.prototype={
$1(d){return d.a!=="send_email"},
$S:306}
C.fyX.prototype={
$1(d){var w=null,v=B.w.j(0.35),u=A.m(10),t=A.I(B.b5,B.r,1)
return A.p(B.A,A.d(d,w,w,w,w,w,w,B.jg,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,86,w,B.eQ,w,w,w,72)},
$S:661}
C.caK.prototype={
$1(d){return J.k(d)},
$S:17}
C.caL.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b6(d,new C.caJ(),x.S)
w=A.B(w,w.$ti.k("ai.E"))
return w}return A.c2(7,0,!1,x.S)},
$S:662}
C.caJ.prototype={
$1(d){var w
if(A.iE(d))w=d
else{w=A.c7(J.k(d),null)
if(w==null)w=0}return w},
$S:445}
C.caM.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b6(d,new C.caI(),x.S)
w=A.B(w,w.$ti.k("ai.E"))
return w}return A.c2(8,0,!1,x.S)},
$S:662}
C.caI.prototype={
$1(d){var w
if(A.iE(d))w=d
else{w=A.c7(J.k(d),null)
if(w==null)w=0}return w},
$S:445}
C.caO.prototype={
$1(d){return A.bl(d,!0,x.S)},
$S:663}
C.caP.prototype={
$1(d){return A.bl(d,!0,x.S)},
$S:663}
C.caH.prototype={
$1(d){var w=this.a
if(B.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:74}
C.caN.prototype={
$2(d,e){return d+e},
$S:77}
C.caG.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.q(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:77}
C.fky.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fks.prototype={
$0(){return this.a.$1(D.pO)},
$S:0}
C.fkt.prototype={
$0(){return this.a.$1(D.pO)},
$S:0}
C.fku.prototype={
$0(){return this.a.$1(D.pO)},
$S:0}
C.fkv.prototype={
$0(){return this.a.$1(D.pO)},
$S:0}
C.fkw.prototype={
$0(){return this.a.$1(D.pO)},
$S:0}
C.fkx.prototype={
$0(){return this.a.$1(D.pO)},
$S:0}
C.f6D.prototype={
$2(d,e){var w,v,u=this,t=null,s=B.o.an(e,8),r=B.o.F(e,8),q=B.o.F(s+r,2),p=u.a,o=J.q(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.VT:D.b6E
if(o===0)w=t
else{w=x.O
w=o===1?A.a([B.c,B.aL],w):A.a([B.bm,B.w],w)
v=n?B.aM:B.dm
w=A.p(t,t,B.f,t,t,new A.o(t,t,A.I(v,B.r,n?3:1),t,A.a([new A.ad(0,B.G,B.w.j(0.35),B.dB,4)],x.V),new A.bR(B.A,0.5,B.x,t,0,w,t,t),B.a6),t,28,t,t,t,t,t,28)}return A.aE(t,A.p(t,A.av(w,t,t,t),B.f,q,t,t,t,t,t,t,t,t,t,t),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f6C(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,B.a8)},
$S:73}
C.f6C.prototype={
$0(){var w=this,v=w.a,u=v.cQP(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.pO:D.Hg
w.f.$1(v)}},
$S:0}
C.fj3.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new A.a6(u,u,A.ib(!0,v,v,B.y,R.aMe,new C.fj2(w.a,w.b,w.c,w.d,u),9,v,B.dQ,B.ah,!1),v)},
$S:163}
C.fj2.prototype={
$2(d,e){var w=this,v=null,u=A.m(12),t=A.m(12),s=w.a,r=s.at[e],q=r==="X"?B.aW:B.aB
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.av(A.d(r,v,v,v,v,v,v,A.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fj1(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),B.f,B.fl,0,v,v,v,v,v,B.af)},
$S:78}
C.fj1.prototype={
$0(){var w=this,v=w.a.cQQ(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.f63.prototype={
$1(d){return new A.C(B.jr,C.fx0(d,!1),null)},
$S:271}
C.f64.prototype={
$1(d){return C.fx0(d,!1)},
$S:1663}
C.f65.prototype={
$0(){var w=this,v=w.a
v.cB5(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.f66.prototype={
$0(){var w=this
w.a.cB6(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.fgg.prototype={
$1(d){var w=this,v=null,u=d*6
return A.mz(v,B.bm,A.d(""+u,v,v,v,v,v,v,B.cc,v,v,v),B.dk,new C.fgf(w.a,w.b,u,w.c,w.d),v,v,new A.az(B.c.j(0.2),1,B.r,-1),v)},
$S:1664}
C.fgf.prototype={
$0(){var w=this,v=w.a,u=w.b.aB(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.fia.prototype={
$1(d){return D.d3x[d]},
$S:76}
C.fib.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=A.a([s.aB(6),s.aB(6),s.aB(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.ff0.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.ff1.prototype={
$0(){var w=this,v=w.a
if(w.b.aj()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.f74.prototype={
$0(){var w=this,v=w.a.cGE(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.f73.prototype={
$1(d){var w,v=null,u=J.q(this.a.fr[5-d],this.b)
if(u===0)w=B.m4
else w=u===1?B.dF:B.r2
return new A.fF(1,A.p(v,v,B.f,v,v,new A.o(w,v,A.I(B.bF,B.r,1),v,v,v,B.a6),v,v,v,B.mW,v,v,v,v),v)},
$S:1665}
C.ffd.prototype={
$1(d){var w=this
if(w.a.b8G(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.ffe.prototype={
$0(){var w=this
if(w.a.b8G(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.f6x.prototype={
$0(){var w=this
if(w.a.aj()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fp2.prototype={
$1(d){var w=J.q(d,"email")
return B.a.t(B.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fp3.prototype={
$1(d){var w,v=J.a8(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=B.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+B.a.i(J.k(v==null?"":v))+">"},
$S:54}
C.ezI.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aIW.prototype
w.brp=w.a_
w.bro=w.q
w=C.aIX.prototype
w.brr=w.a_
w.brq=w.q
w=C.aIY.prototype
w.brt=w.a_
w.brs=w.q
w=C.aJU.prototype
w.bsr=w.a_
w.bsq=w.q
w=C.aJt.prototype
w.bs_=w.q
w=C.aK2.prototype
w.bsA=w.q
w=C.aIZ.prototype
w.bru=w.q
w=C.aKa.prototype
w.bsJ=w.q
w=C.aJ3.prototype
w.brz=w.q
w=C.aJj.prototype
w.brQ=w.q
w=C.aKR.prototype
w.btp=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.ayJ.prototype,"gbN5","bN6",19)
v(q,"gaQn","aQo",1)
v(C.ayI.prototype,"gcs4","a15",1)
v(q=C.ayK.prototype,"gbSq","bSr",1)
v(q,"gbCK","bCL",1)
v(q=C.avW.prototype,"gclk","cll",1)
v(q,"gc9Y","Po",0)
v(q,"gcvZ","cw_",1)
v(q,"gcoi","mN",0)
w(q,"gceg","ceh",25)
w(q,"gcum","R6",33)
v(q=C.aAQ.prototype,"gbLd","WB",0)
v(q,"gc0e","Y2",0)
v(q,"gc0b","Y1",0)
v(q,"gc0c","abQ",0)
v(q,"gc0d","On",0)
v(C.ay7.prototype,"gc0f","c0g",1)
u(C,"i_n","hvO",58)
t(C,"fUJ",0,null,["$1","$0"],["hes",function(){return C.hes(null)}],3,0)
t(C,"bBc",0,null,["$1","$0"],["her",function(){return C.her(null)}],3,0)
v(C.Mi.prototype,"gDW","c7a",1)
v(C.aBB.prototype,"gclB","An",0)
v(q=C.aBS.prototype,"gcah","Pq",0)
v(q,"gceY","a_j",0)
v(q,"gc3B","c3C",1)
v(q=C.aC3.prototype,"gc3G","acK",0)
v(q,"gbwr","a72",0)
v(q,"gclP","a0h",0)
s(q,"gc7F","c7G",35)
v(C.aE1.prototype,"gbwT","a74",1)
v(q=C.aE0.prototype,"gc3F","acJ",0)
v(q,"gc9f","adN",0)
v(q=C.aC5.prototype,"gbW6","aaG",0)
v(q,"gbW8","Xe",0)
v(q,"gbW7","aaH",0)
v(q=C.aC4.prototype,"gbzf","bzg",1)
v(q,"gbzh","bzi",1)
v(C.aC6.prototype,"gbEZ","bF_",1)
v(C.az3.prototype,"gc3I","c3J",1)
v(q=C.aCt.prototype,"gaXe","c3Y",1)
r(q,"gaYa",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["adq","aw9","aYc","aYb"],52,0,0)
r(q,"gc6T",0,4,null,["$4"],["c6U"],53,0,0)
v(q,"gc8Z","Zt",0)
v(q,"gc9P","adU",0)
v(q,"gc9L","adS",0)
v(q,"gbZ_","abq",0)
w(C.azQ.prototype,"gbXP","bXQ",54)
w(q=C.azS.prototype,"gctd","cte",55)
v(q,"gcrW","crX",1)
v(q,"gczu","czv",1)
v(C.aCg.prototype,"gc4i","aXk",1)
v(C.aD4.prototype,"gaXM","avX",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.j2,[C.cpf,C.cpc,C.cpd,C.cpe,C.cpb,C.eVC,C.eVA,C.eVE,C.eVB,C.fdi,C.d75,C.d7g,C.d7o,C.d7p,C.d7r,C.d7j,C.d7h,C.d7i,C.d7k,C.d7l,C.d7b,C.d7c,C.d7a,C.d7e,C.d7f,C.d78,C.d77,C.d7t,C.d7w,C.dL4,C.dL3,C.dL5,C.dL2,C.dL1,C.d7_,C.d72,C.d73,C.d71,C.d70,C.d8S,C.d8T,C.d8U,C.d87,C.d88,C.d8C,C.d8n,C.d8o,C.d8p,C.d8q,C.d8r,C.d7A,C.d86,C.d8D,C.d8M,C.d8A,C.d8z,C.d84,C.d85,C.d8I,C.d8J,C.d7C,C.d7D,C.d8g,C.d8h,C.d8i,C.d8f,C.d8s,C.d8t,C.d8u,C.d8v,C.d8w,C.d8x,C.d8G,C.d8j,C.d8k,C.d8l,C.d8m,C.d8K,C.d8L,C.d7E,C.d7F,C.d7G,C.d7H,C.d8E,C.d8F,C.d8e,C.d8y,C.d8c,C.d8N,C.d8O,C.d8P,C.d89,C.d7T,C.d7S,C.d7R,C.d7X,C.d7Q,C.d7O,C.d7J,C.d7M,C.d7I,C.d81,C.d82,C.d7K,C.dco,C.czC,C.czs,C.czt,C.czM,C.czJ,C.czK,C.czL,C.czE,C.czD,C.czu,C.czF,C.cA4,C.cA0,C.cA_,C.czA,C.czB,C.czx,C.czI,C.czQ,C.czR,C.czS,C.czT,C.czU,C.czV,C.czW,C.cAg,C.cA9,C.cA6,C.cAb,C.cA8,C.cA5,C.czv,C.cA2,C.dsU,C.dsV,C.dsL,C.dsJ,C.dsT,C.dsI,C.dsH,C.dsK,C.dsP,C.dsQ,C.dsN,C.dsO,C.dsW,C.dsX,C.dsY,C.dsZ,C.ePt,C.ePu,C.d1Z,C.fpX,C.dzk,C.dzc,C.dze,C.dzi,C.dzd,C.dzf,C.dzg,C.c3Q,C.fwZ,C.fwY,C.dsw,C.dsv,C.dsx,C.dsu,C.dS5,C.dS6,C.dSd,C.fFg,C.fFh,C.bXX,C.dLa,C.dLb,C.dLc,C.dLd,C.dLe,C.dLf,C.dL9,C.dLg,C.dL8,C.dLj,C.dLi,C.dLh,C.dSx,C.dSy,C.dSv,C.dSu,C.dSw,C.dSs,C.dW6,C.dW7,C.dVQ,C.dVS,C.dW3,C.dW4,C.dVZ,C.dVX,C.dW2,C.dW_,C.dVU,C.dVT,C.dW8,C.cIH,C.cIF,C.cIG,C.cIE,C.cIK,C.cIL,C.eKy,C.eKD,C.eKA,C.eKC,C.eKB,C.eKu,C.eKt,C.eKw,C.eKv,C.dWt,C.dWy,C.dWu,C.dWv,C.dWx,C.dWD,C.dWE,C.dWF,C.dWG,C.dWH,C.dWI,C.dWJ,C.dWK,C.dWC,C.dWL,C.dWB,C.dWA,C.dWz,C.dWm,C.dWn,C.dWe,C.dWf,C.dWg,C.dWi,C.cCo,C.ddi,C.ddk,C.ddj,C.dX0,C.dWV,C.dWW,C.dWY,C.dWZ,C.dX_,C.dX3,C.dX2,C.dX9,C.dX8,C.dWR,C.dWQ,C.dXa,C.dX1,C.dWP,C.fG1,C.daI,C.daG,C.e7w,C.e7V,C.e7W,C.e7X,C.e7Y,C.e8_,C.e80,C.e7Q,C.e7x,C.e7U,C.e7B,C.e7C,C.e7K,C.e7H,C.e7I,C.e7J,C.e7L,C.e7M,C.e7N,C.e7P,C.e7O,C.e7D,C.e7E,C.e89,C.e82,C.e8a,C.e81,C.e8b,C.e87,C.e88,C.e83,C.e7A,C.e7z,C.e7G,C.e7F,C.df4,C.df3,C.deZ,C.dfp,C.dfq,C.dfb,C.dfa,C.df9,C.dfo,C.dfn,C.dfj,C.dfg,C.dfh,C.dfd,C.dfi,C.dfc,C.fze,C.fxa,C.e1M,C.e1P,C.e1O,C.e1S,C.e1N,C.fks,C.fkt,C.fku,C.fkv,C.fkw,C.fkx,C.f6C,C.fj1,C.f65,C.f66,C.fgf,C.fib,C.ff1,C.f74,C.ffe,C.f6x,C.ezI])
u(A.hS,[C.cpg,C.eVD,C.ftK,C.ftC,C.fdf,C.fde,C.fdh,C.d7y,C.d7z,C.d7n,C.d7m,C.d7q,C.d79,C.d7d,C.d7s,C.dL7,C.d74,C.d8V,C.d8W,C.d8X,C.d8Y,C.d8Z,C.d8B,C.d8H,C.d7B,C.d8R,C.d8Q,C.d7U,C.d7V,C.d7W,C.d7Y,C.d8_,C.dcp,C.cAh,C.czH,C.czG,C.czZ,C.cA1,C.czY,C.czy,C.czP,C.czN,C.cA3,C.czO,C.cAc,C.cAa,C.cAf,C.bWF,C.bWE,C.bWH,C.bWG,C.dsS,C.dsR,C.dsM,C.dt_,C.dt0,C.fgO,C.fi0,C.d2_,C.d1Y,C.bXq,C.fpW,C.dzl,C.dzj,C.c3R,C.fiN,C.fwX,C.c5P,C.c5O,C.c6g,C.dS3,C.dS4,C.fsi,C.fs5,C.fs4,C.ff4,C.c6u,C.c6v,C.c6w,C.c6t,C.c6s,C.fd_,C.fFc,C.fFd,C.fFe,C.fFf,C.fFb,C.dSa,C.dSb,C.dS9,C.fFi,C.d9_,C.c84,C.fbZ,C.dLk,C.dSt,C.c6W,C.c6T,C.c6V,C.c6Y,C.c_k,C.c_i,C.c_n,C.c74,C.c73,C.c72,C.c71,C.c76,C.c78,C.dWc,C.dVR,C.dVP,C.dW5,C.dVY,C.dW1,C.dW0,C.dVW,C.dWa,C.dW9,C.cII,C.cIJ,C.eKz,C.eKs,C.eKx,C.c6Z,C.fu2,C.dWN,C.dWw,C.dWp,C.dWq,C.dWr,C.dWs,C.dWM,C.c70,C.cCp,C.cCq,C.fbJ,C.dWS,C.dWU,C.dWX,C.dX4,C.dX5,C.dX6,C.dWO,C.fG2,C.daC,C.daF,C.c8Z,C.c9b,C.e8c,C.e8d,C.e8e,C.e7Z,C.e7R,C.e7S,C.e7T,C.e84,C.e86,C.df5,C.df6,C.df1,C.deX,C.dfr,C.dfm,C.dfl,C.dfk,C.dfe,C.fjJ,C.fAp,C.fjI,C.f9h,C.fzf,C.fx9,C.fBu,C.e1Q,C.e1R,C.fiU,C.fiT,C.fzv,C.fzw,C.ftq,C.fyX,C.caK,C.caL,C.caJ,C.caM,C.caI,C.caO,C.caP,C.caH,C.fky,C.f63,C.f64,C.fgg,C.fia,C.ff0,C.f73,C.ffd,C.fp2,C.fp3])
t(C.bpr,A.iN)
u(A.ag,[C.EH,C.ajO,C.aBA,C.ajN,C.ajP,C.akF,C.ah2,C.amc,C.Za,C.Zb,C.Yi,C.amH,C.amb,C.MP,C.ayL,C.anE,C.aoh,C.Uo,C.OF,C.ZY,C.ZX,C.Up,C.aoA,C.azD,C.aoD,C.YH,C.apb,C.azP,C.azR,C.Zu,C.aqt])
u(A.ah,[C.aGw,C.aIX,C.aJU,C.aIW,C.aIY,C.beJ,C.avW,C.aAQ,C.bh8,C.bh9,C.ay7,C.bhf,C.aJt,C.aK2,C.aIZ,C.aBB,C.aBS,C.aC3,C.b8X,C.aE1,C.aE0,C.aC5,C.aC4,C.beX,C.aKa,C.aJ3,C.bvd,C.aJj,C.azS,C.aCg,C.aKR])
u(A.kc,[C.eVF,C.fdg,C.d76,C.d7x,C.d7v,C.d7u,C.dL6,C.d8d,C.d8b,C.d8a,C.d7P,C.d7Z,C.d7N,C.d80,C.d7L,C.d83,C.czX,C.czz,C.cA7,C.cAe,C.cAd,C.czw,C.d1X,C.dzh,C.fiO,C.fiP,C.dS7,C.ftF,C.fFa,C.dSc,C.dSf,C.dSe,C.d90,C.c85,C.c6X,C.c6U,C.c_l,C.c_j,C.c77,C.dWd,C.dVV,C.dWb,C.eKF,C.eKE,C.dWo,C.dWh,C.dWj,C.dWl,C.dWk,C.dWT,C.dX7,C.daD,C.daH,C.daE,C.e85,C.e7y,C.df7,C.df8,C.df_,C.df0,C.df2,C.deY,C.dff,C.fq2,C.caN,C.caG,C.f6D,C.fj3,C.fj2])
t(C.au8,C.EH)
u(A.aC,[C.qw,C.acy,C.Mi,C.HY,C.r5,C.r6,C.lv,C.ie,C.i0,C.b76,C.d_9,C.ddh,C.rc,C.Uq,C.N1,C.pC,C.aYt,C.oU,C.apx])
t(C.ayJ,C.aIX)
t(C.bhA,C.aJU)
t(C.ayI,C.aIW)
t(C.ayK,C.aIY)
u(A.m0,[C.Va,C.azE,C.apo,C.I2,C.E5])
u(A.au,[C.a_w,C.bpX,C.adj,C.Pc,C.a5A,C.MH,C.aob,C.ac9,C.ac8,C.aZj,C.azC,C.aaI,C.aYQ,C.aaA,C.azQ])
t(C.bh6,C.aJt)
t(C.bhM,C.aK2)
t(C.bds,C.aIZ)
t(C.aC6,C.aKa)
t(C.az3,C.aJ3)
t(C.aCt,C.bvd)
t(C.bfF,C.aJj)
u(A.mF,[C.b9r,C.b9q,C.b9p,C.b8S,C.bth,C.boh])
t(C.aD4,C.aKR)
w(C.aIW,C.Mi)
w(C.aIX,C.Mi)
w(C.aIY,C.Mi)
w(C.aJU,C.Mi)
w(C.aJt,A.eR)
w(C.aK2,A.c8)
w(C.aIZ,A.c8)
w(C.aKa,A.c8)
w(C.aJ3,A.eR)
w(C.aJj,A.eR)
v(C.bvd,A.ev)
w(C.aKR,A.c8)})()
A.jR(b.typeUniverse,JSON.parse('{"bpr":{"iN":[]},"EH":{"ag":[],"r":[]},"aGw":{"ah":["EH<1,2>"]},"au8":{"EH":["1","hB<1>"],"ag":[],"r":[],"EH.T":"1","EH.S":"hB<1>"},"ajO":{"ag":[],"r":[]},"aBA":{"ag":[],"r":[]},"ajN":{"ag":[],"r":[]},"ajP":{"ag":[],"r":[]},"akF":{"ag":[],"r":[]},"ah2":{"ag":[],"r":[]},"ayJ":{"ah":["ajO"]},"bhA":{"ah":["aBA"]},"ayI":{"ah":["ajN"]},"ayK":{"ah":["ajP"]},"beJ":{"ah":["akF"]},"avW":{"ah":["ah2"]},"amc":{"ag":[],"r":[]},"Za":{"ag":[],"r":[]},"Zb":{"ag":[],"r":[]},"adj":{"au":[],"r":[]},"Yi":{"ag":[],"r":[]},"aAQ":{"ah":["amc"]},"a_w":{"au":[],"r":[]},"bpX":{"au":[],"r":[]},"bh8":{"ah":["Za"]},"bh9":{"ah":["Zb"]},"Pc":{"au":[],"r":[]},"ay7":{"ah":["Yi"]},"amH":{"ag":[],"r":[]},"bhf":{"ah":["amH"]},"a5A":{"au":[],"r":[]},"amb":{"ag":[],"r":[]},"bh6":{"ah":["amb"]},"MH":{"au":[],"r":[]},"aob":{"au":[],"r":[]},"MP":{"ag":[],"r":[]},"bhM":{"ah":["MP"]},"ac9":{"au":[],"r":[]},"ac8":{"au":[],"r":[]},"ayL":{"ag":[],"r":[]},"bds":{"ah":["ayL"]},"aZj":{"au":[],"r":[]},"anE":{"ag":[],"r":[]},"aBB":{"ah":["anE"]},"aoh":{"ag":[],"r":[]},"aBS":{"ah":["aoh"]},"Uo":{"ag":[],"r":[]},"OF":{"ag":[],"r":[]},"ZY":{"ag":[],"r":[]},"ZX":{"ag":[],"r":[]},"aC3":{"ah":["Uo"]},"b8X":{"ah":["OF"]},"aE1":{"ah":["ZY"]},"aE0":{"ah":["ZX"]},"Up":{"ag":[],"r":[]},"aC5":{"ah":["Up"]},"aoA":{"ag":[],"r":[]},"aaI":{"au":[],"r":[]},"aaA":{"au":[],"r":[]},"azD":{"ag":[],"r":[]},"aC4":{"ah":["aoA"]},"azC":{"au":[],"r":[]},"aYQ":{"au":[],"r":[]},"beX":{"ah":["azD"]},"aoD":{"ag":[],"r":[]},"aC6":{"ah":["aoD"]},"YH":{"ag":[],"r":[]},"az3":{"ah":["YH"]},"apb":{"ag":[],"r":[]},"azP":{"ag":[],"r":[]},"azR":{"ag":[],"r":[]},"aCt":{"ah":["apb"],"ev":[]},"azQ":{"au":[],"r":[]},"bfF":{"ah":["azP"]},"b9r":{"aB":[]},"b9q":{"aB":[]},"b9p":{"aB":[]},"azS":{"ah":["azR"]},"b8S":{"aB":[]},"bth":{"aB":[]},"Zu":{"ag":[],"r":[]},"aCg":{"ah":["Zu"]},"boh":{"aB":[]},"aqt":{"ag":[],"r":[]},"aD4":{"ah":["aqt"]}}'))
A.Pn(b.typeUniverse,JSON.parse('{"Mi":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=A.ax
return{dw:w("mA<w?>"),gS:w("nW"),o:w("d1"),g5:w("wF"),M:w("eV<n>"),k:w("S"),gv:w("l4<ak<j4>>"),gh:w("l4<n>"),gH:w("l4<G>"),r:w("ay<~>"),dk:w("a0"),fw:w("P<nW>"),E:w("P<d1>"),V:w("P<ad>"),O:w("P<w>"),A:w("P<a0>"),R:w("P<n5>"),B:w("P<ak<G>>"),m:w("P<a4<n,n>>"),_:w("P<a4<n,@>>"),b:w("P<r5>"),x:w("P<r6>"),gi:w("P<j4>"),a:w("P<lv>"),Y:w("P<i0>"),v:w("P<ie>"),dA:w("P<HY>"),F:w("P<rc>"),Z:w("P<kj>"),g:w("P<hm>"),gK:w("P<+at,details,id(S,n,n)>"),C:w("P<cP>"),s:w("P<n>"),G:w("P<iN>"),eO:w("P<eo>"),d9:w("P<eS>"),p:w("P<r>"),n:w("P<O>"),t:w("P<G>"),U:w("P<aB?>"),d4:w("P<n?>"),ck:w("ak<r5>"),e:w("ak<r6>"),ac:w("ak<j4>"),dZ:w("ak<lv>"),I:w("ak<i0>"),j:w("ak<@>"),L:w("ak<G>"),eq:w("a4<n,n>"),P:w("a4<n,@>"),f:w("a4<@,@>"),cl:w("cQ<n,C>"),aS:w("J<a0,rX>"),dc:w("J<I2,bE>"),dv:w("J<n,n>"),bL:w("J<O,bE>"),a3:w("J<G,bE>"),gN:w("J<G,ps>"),w:w("iy"),b1:w("r5"),Q:w("r6"),bP:w("lv"),i:w("i0"),u:w("ie"),gp:w("Uq"),J:w("N1"),D:w("pC"),an:w("kj"),c:w("cn"),K:w("aC"),d:w("ji<n>"),di:w("+outcome,snapshot(Va,a4X?)"),ee:w("+after,before(O,O)"),et:w("+categories,error,message,replaceId(ak<i0>,n?,n?,n?)"),cz:w("Ev"),bJ:w("dw<n>"),N:w("n"),e7:w("bm<O>"),W:w("cw<n>"),am:w("k9<G>"),cc:w("a2<n>"),aM:w("e6<d1>"),bG:w("e6<O>"),l:w("r"),gm:w("qw"),ec:w("acy"),q:w("mT"),y:w("R"),gR:w("O"),z:w("@"),S:w("G"),eG:w("d1?"),cJ:w("S?"),gw:w("ak<a4<n,@>>?"),bM:w("ak<@>?"),h:w("a4<n,@>?"),X:w("aC?"),gE:w("+code,qrPayload(n,n)?"),bY:w("+isLive,ownerEmail,snapshotJson(R,n,n)?"),T:w("n?"),cD:w("O?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aV4=new A.bp(B.bE,B.ie,B.bE,B.ie)
D.eH=new A.w(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,B.t)
D.aVx=new A.az(D.eH,1,B.r,-1)
D.aVz=new A.az(B.ad,2,B.r,-1)
D.aVC=new A.az(B.aU,2,B.r,-1)
D.aVE=new A.az(B.cn,0.8,B.r,-1)
D.aVU=new A.az(B.aM,2,B.r,-1)
D.aW0=new A.az(B.ff,1.6,B.r,-1)
D.aWR=new A.aY(0,330,0,1/0)
D.aWX=new A.aY(0,176,0,1/0)
D.aWY=new A.aY(0,1/0,0,260)
D.aXf=new A.aY(90,1/0,0,1/0)
D.b_1=new A.ad(0,B.G,B.dm,B.J,4)
D.cN6=w([D.b_1],x.V)
D.aXt=new A.o(B.c,null,null,null,D.cN6,null,B.a6)
D.cHo=w([D.eH,B.aZ],x.O)
D.bT1=new A.a7(B.a3,B.a7,B.x,D.cHo,null,null)
D.aXH=new A.o(null,null,null,null,null,D.bT1,B.a6)
D.aXM=new A.o(B.bc,null,null,null,null,null,B.a6)
D.b8L=new A.w(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,B.t)
D.d0F=w([P.abm,D.b8L],x.O)
D.bS7=new A.a7(B.b1,B.b6,B.x,D.d0F,null,null)
D.aY2=new A.o(null,null,null,B.lW,null,D.bS7,B.n)
D.bfc=new A.w(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,B.t)
D.dbd=w([D.bfc,M.adf],x.O)
D.bRk=new A.a7(B.b1,B.b6,B.x,D.dbd,null,null)
D.aYs=new A.o(null,null,null,B.rA,null,D.bRk,B.n)
D.cXP=w([B.aE,B.bA],x.O)
D.bRP=new A.a7(B.a3,B.a7,B.x,D.cXP,null,null)
D.aYy=new A.o(null,null,null,null,null,D.bRP,B.a6)
D.eUr=new A.F(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcp=new A.x("\ud83c\udf89",null,D.eUr,null,null,null,null,null,null,null,null,null)
D.b2T=new A.cr(B.A,null,null,D.fcp,null)
D.b4b=new A.w(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,B.t)
D.aaH=new A.w(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,B.t)
D.b6E=new A.w(1,0.8431372549019608,0.8,0.7843137254901961,B.t)
D.b6I=new A.w(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,B.t)
D.od=new A.w(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,B.t)
D.rP=new A.w(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,B.t)
D.abJ=new A.w(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,B.t)
D.b8r=new A.w(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,B.t)
D.Vt=new A.w(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,B.t)
D.wK=new A.w(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,B.t)
D.b9I=new A.w(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,B.t)
D.VT=new A.w(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,B.t)
D.acY=new A.w(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,B.t)
D.bdu=new A.w(1,0.9529411764705882,0.9411764705882353,1,B.t)
D.bdA=new A.w(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,B.t)
D.adi=new A.w(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,B.t)
D.adx=new A.w(1,0,0.8392156862745098,0.30980392156862746,B.t)
D.beO=new A.w(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,B.t)
D.beT=new A.w(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,B.t)
D.bfK=new A.w(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,B.t)
D.Wu=new A.w(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,B.t)
D.bgI=new A.w(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,B.t)
D.bhb=new A.w(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,B.t)
D.WC=new A.w(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,B.t)
D.bhW=new A.w(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,B.t)
D.aeA=new A.a2U(2,"active")
D.blK=new A.b9(42e5)
D.blN=new A.b9(53e4)
D.blP=new A.b9(58e4)
D.blT=new A.b9(82e4)
D.bmH=new A.Q(0,30,0,30)
D.bmP=new A.Q(0,4,0,8)
D.bmS=new A.Q(0,8,12,8)
D.bnu=new A.Q(12,0,12,88)
D.bnB=new A.Q(12,11,12,10)
D.bnY=new A.Q(13,10,12,10)
D.bo5=new A.Q(14,10,14,2)
D.boh=new A.Q(14,14,10,14)
D.boM=new A.Q(16,12,16,96)
D.boR=new A.Q(16,14,16,8)
D.boV=new A.Q(16,16,16,96)
D.boW=new A.Q(16,18,16,16)
D.bp_=new A.Q(16,4,16,10)
D.bpV=new A.Q(18,6,18,40)
D.bpX=new A.Q(18,8,18,130)
D.bq9=new A.Q(20,10,20,20)
D.bqm=new A.Q(20,18,20,18)
D.bqq=new A.Q(20,20,20,22)
D.bqN=new A.Q(22,22,22,16)
D.brr=new A.Q(2,0,2,10)
D.bs9=new A.Q(4,8,12,4)
D.bsm=new A.Q(6,1,6,1)
D.bso=new A.Q(6,4,0,0)
D.bsr=new A.Q(6,6,12,4)
D.bsN=new A.Q(8,4,12,8)
D.ffO=new A.x("Activity",null,B.fW,null,null,null,null,null,null,null,null,null)
D.bux=new A.bE(1,B.bi,D.ffO,null)
D.fnK=new A.x("Game Receipts",null,A3.vW,null,null,null,null,null,null,null,null,null)
D.f7K=new A.x("Your last 59 games \xb7 kept for 7 days",null,Q.aO_,null,null,null,null,null,null,null,null,null)
D.cDQ=w([D.fnK,D.f7K],x.p)
D.biW=new A.fl(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cDQ,null)
D.buA=new A.bE(1,B.bi,D.biW,null)
D.bxy=new A.a0(58607,"MaterialIcons",!1)
D.Zu=new A.a0(62178,"MaterialIcons",!1)
D.bym=new A.a0(62410,"MaterialIcons",!1)
D.bzw=new A.a0(63258,"MaterialIcons",!1)
D.bzC=new A.a0(63304,"MaterialIcons",!1)
D.bzD=new A.a0(63306,"MaterialIcons",!1)
D.bzK=new A.a0(63330,"MaterialIcons",!1)
D.akR=new A.a0(984777,"MaterialIcons",!1)
D.bCc=new A.ae(B.Fl,13,B.ad,null,null,null)
D.bCk=new A.ae(B.ju,13,B.pk,null,null,null)
D.al0=new A.ae(B.lb,null,B.c,null,null,null)
D.bDS=new A.ae(B.Bc,34,B.aJ,null,null,null)
D.bEp=new A.ae(B.Fp,19,B.c,null,null,null)
D.byF=new A.a0(62804,"MaterialIcons",!1)
D.bEy=new A.ae(D.byF,24,B.aM,null,null,null)
D.bF_=new A.ae(B.AZ,28,B.bj,null,null,null)
D.bFu=new A.ae(B.akv,42,B.c,null,null,null)
D.bFD=new A.ae(B.a_k,30,B.c,null,null,null)
D.bGe=new A.ae(B.fJ,null,B.c,null,null,null)
D.bGz=new A.ae(B.ju,16,B.c,null,null,null)
D.bH9=new A.ae(B.qQ,13,B.c,null,null,null)
D.bHi=new A.ae(B.lb,18,B.c,null,null,null)
D.bHP=new A.ae(B.v7,null,B.dF,null,null,null)
D.bIt=new A.ae(B.ov,28,B.c,null,null,null)
D.bII=new A.ae(B.n2,22,null,null,null,null)
D.bJ3=new A.ae(B.qM,null,null,null,null,null)
D.bJf=new A.ae(B.iO,28,B.c,null,null,null)
D.bJh=new A.ae(B.cx,null,B.aR,null,null,null)
D.bJo=new A.ae(B.Zb,14,B.c,null,null,null)
D.bJX=new A.ae(B.MO,36,B.aI,null,null,null)
D.bK3=new A.ae(B.ow,16,B.c,null,null,null)
D.bKi=new A.ae(B.ee,null,null,null,null,null)
D.b95=new A.w(1,0.23137254901960785,0.16470588235294117,0,B.t)
D.bKR=new A.ae(B.dW,9,D.b95,null,null,null)
D.bAz=new A.a0(983146,"MaterialIcons",!1)
D.bL7=new A.ae(D.bAz,null,B.aM,null,null,null)
D.bLC=new A.ae(B.va,28,D.eH,null,null,null)
D.bLH=new A.ae(B.tt,null,B.ff,null,null,null)
D.bLM=new A.ae(B.hW,20,D.eH,null,null,null)
D.bAU=new A.a0(983377,"MaterialIcons",!1)
D.bLW=new A.ae(D.bAU,64,B.c,null,null,null)
D.bMr=new A.ae(B.h5,24,B.c,null,null,null)
D.bNl=new A.e0(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bNw=new A.e0(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bNL=new A.e0(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bNM=new A.e0(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.b7m=new A.w(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,B.t)
D.ba1=new A.w(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,B.t)
D.b9J=new A.w(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,B.t)
D.d0X=w([D.b7m,D.ba1,D.b9J],x.O)
D.bPg=new A.a7(B.ax,B.aD,B.x,D.d0X,null,null)
D.d5s=w([B.bn,B.aZ],x.O)
D.bPz=new A.a7(B.ax,B.aD,B.x,D.d5s,null,null)
D.b8E=new A.w(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,B.t)
D.be1=new A.w(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,B.t)
D.cNx=w([D.b8E,D.be1],x.O)
D.bPG=new A.a7(B.ax,B.aD,B.x,D.cNx,null,null)
D.d2o=w([B.bm,B.M,B.ec],x.O)
D.bPN=new A.a7(B.ax,B.aD,B.x,D.d2o,null,null)
D.bPQ=new A.a7(B.a3,B.a7,B.x,F.asb,null,null)
D.cMZ=w([B.ff,B.c8],x.O)
D.amI=new A.a7(B.a3,B.a7,B.x,D.cMZ,null,null)
D.cNj=w([B.ff,B.bA],x.O)
D.amJ=new A.a7(B.a3,B.a7,B.x,D.cNj,null,null)
D.avY=w([D.od,B.av,B.bV],x.O)
D.bQ6=new A.a7(B.ax,B.aD,B.x,D.avY,null,null)
D.bbx=new A.w(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,B.t)
D.cL5=w([D.bbx,E.aaR,B.M],x.O)
D.bQb=new A.a7(B.ax,B.aD,B.x,D.cL5,null,null)
D.aTU=new A.d8(-0.8,-1)
D.aTW=new A.d8(1.2,1)
D.cKi=w([B.c,B.es,B.he,B.c,B.fg,B.aW,B.mE],x.O)
D.d1Q=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.bQd=new A.a7(D.aTU,D.aTW,B.x,D.cKi,D.d1Q,null)
D.bdW=new A.w(1,0,0.7607843137254902,0.26666666666666666,B.t)
D.bbN=new A.w(1,0,0.6392156862745098,0.22745098039215686,B.t)
D.d0W=w([D.bdW,D.bbN],x.O)
D.bQD=new A.a7(B.a3,B.a7,B.x,D.d0W,null,null)
D.bQI=new A.a7(B.ax,B.aD,B.x,B.Ph,null,null)
D.cWV=w([E.Wx,B.wM],x.O)
D.bQK=new A.a7(B.a3,B.a7,B.x,D.cWV,null,null)
D.d_P=w([B.h0,B.fu],x.O)
D.amO=new A.a7(B.a3,B.a7,B.x,D.d_P,null,null)
D.d51=w([B.bc,B.bT],x.O)
D.amP=new A.a7(B.a3,B.a7,B.x,D.d51,null,null)
D.cvh=w([B.dp,B.f5],x.O)
D.bRm=new A.a7(B.ax,B.aD,B.x,D.cvh,null,null)
D.cJl=w([B.c,B.b7],x.O)
D.bRw=new A.a7(B.a3,B.a7,B.x,D.cJl,null,null)
D.acx=new A.w(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,B.t)
D.b6p=new A.w(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,B.t)
D.cTP=w([D.acx,B.j1,B.qp,B.av,D.b6p],x.O)
D.bTV=w([0,0.28,0.55,0.82,1],x.n)
D.bRx=new A.a7(B.ax,B.aD,B.x,D.cTP,D.bTV,null)
D.bRH=new A.a7(B.a3,B.a7,B.x,B.PU,null,null)
D.bRI=new A.a7(B.a3,B.a7,B.x,F.auz,null,null)
D.bRL=new A.a7(B.a3,B.a7,B.x,D.avY,null,null)
D.cOA=w([B.bA,B.ff],x.O)
D.bRW=new A.a7(B.a3,B.a7,B.x,D.cOA,null,null)
D.d8Q=w([B.aE,B.bA,B.b7],x.O)
D.bRY=new A.a7(B.a3,B.a7,B.x,D.d8Q,null,null)
D.cX3=w([B.aJ,B.bJ,B.fC],x.O)
D.bS1=new A.a7(B.a3,B.a7,B.x,D.cX3,null,null)
D.d8z=w([B.bm,B.aK,B.bI,B.aL,B.aP,B.cn,B.ak],x.O)
D.cS9=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.bS6=new A.a7(B.ax,B.aD,B.x,D.d8z,D.cS9,null)
D.bSg=new A.a7(B.ax,B.aD,B.x,B.a0F,null,null)
D.cXy=w([D.Vt,B.dT],x.O)
D.bSq=new A.a7(B.a3,B.a7,B.x,D.cXy,null,null)
D.d3F=w([D.adi,D.abJ,B.M],x.O)
D.bSy=new A.a7(B.ax,B.aD,B.x,D.d3F,null,null)
D.bga=new A.w(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,B.t)
D.cJR=w([B.eX,B.h0,D.bga],x.O)
D.bT3=new A.a7(B.ax,B.aD,B.x,D.cJR,null,null)
D.cP7=w([D.od,B.av],x.O)
D.bT4=new A.a7(B.ax,B.aD,B.x,D.cP7,null,null)
D.bTq=w([G.Bg,B.ov,B.ju,B.hx,B.kK,B.kL,B.kJ,B.qU,B.mg,B.eR,B.lE,B.xJ,B.Fx],x.A)
D.bWN=w([10,50,100,200],x.t)
D.c5s=w([1,3,5,7],x.t)
D.cap=w([25,50,100,250],x.t)
D.bAu=new A.a0(983104,"MaterialIcons",!1)
D.ciU=w([B.ov,B.lF,B.n2,B.l8,B.h4,B.vg,D.bAu,B.a_g],x.A)
D.coc=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cA7=w([0,0.22,0.5,0.78,1],x.n)
D.cDY=w([8,13,19],x.n)
D.a1_=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.feQ=new A.x("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.e6n=new A.ji("questions",48,D.feQ,null,x.d)
D.f50=new A.x("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.e6s=new A.ji("edit",48,D.f50,null,x.d)
D.fmk=new A.x("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.e6y=new A.ji("delete",48,D.fmk,null,x.d)
D.cE6=w([D.e6n,D.e6s,D.e6y],A.ax("P<oY<n>>"))
D.cNr=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.cNE=w([B.bM,B.fh],x.O)
D.a3C=new C.lv("text","",null,null)
D.cOL=w([D.a3C],x.a)
D.cQ9=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.ep7=new A.acV(B.lD,"Home")
D.egr=new A.acV(B.pF,"Growth")
D.ekL=new A.acV(B.ju,"Wallet")
D.cSl=w([D.ep7,D.egr,D.ekL],A.ax("P<+icon,label(a0,n)>"))
D.cSK=w([4,0,2,6,8,1,3,5,7],x.t)
D.cSS=w([B.c,B.bN,B.cn],x.O)
D.dxD=new C.rc("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.dxG=new C.rc("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.dxE=new C.rc("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.dxy=new C.rc("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.dxz=new C.rc("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.dxH=new C.rc("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a1s=w([D.dxD,D.dxG,D.dxE,D.dxy,D.dxz,D.dxH],x.F)
D.a1x=w([B.aB,B.bn,B.d7,B.aJ],x.O)
D.b9d=new A.w(1,1,0.8980392156862745,0.4,B.t)
D.cXE=w([B.V4,D.b9d,B.qp,B.hT,B.j1],x.O)
D.a1D=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.Pp=w(["checkers_deluxe","tic_tac_go"],x.s)
D.bTu=w([0,1,2],x.t)
D.cj7=w([3,4,5],x.t)
D.cvS=w([6,7,8],x.t)
D.bTw=w([0,3,6],x.t)
D.c5x=w([1,4,7],x.t)
D.ccV=w([2,5,8],x.t)
D.bTA=w([0,4,8],x.t)
D.ccS=w([2,4,6],x.t)
D.cZT=w([D.bTu,D.cj7,D.cvS,D.bTw,D.c5x,D.ccV,D.bTA,D.ccS],x.B)
D.aDU=new C.I2(0,"abab")
D.dxw=new C.I2(1,"aaaBbb")
D.aDV=new C.I2(2,"aabb")
D.d_T=w([D.aDU,D.dxw,D.aDV],A.ax("P<I2>"))
D.d08=w([],x.a)
D.avk=w([],x.v)
D.d3x=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.PL=w([1,2,3,-1,-2],x.t)
D.db1=w([B.j2,B.aE],x.O)
D.fG5=new C.qw("dice","Dice Roll","Roll for cash & prizes!",B.md,D.db1)
D.fG2=new C.qw("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",B.qO,B.au6)
D.d5M=w([B.cZ,B.bj],x.O)
D.fG0=new C.qw("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",B.a_3,D.d5M)
D.daw=w([B.dO,B.mH],x.O)
D.fG6=new C.qw("memory","Memory Match","Match pairs \u2014 solo or multiplayer",B.a_g,D.daw)
D.c5f=w([B.jI,B.pi],x.O)
D.fG3=new C.qw("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",F.ZQ,D.c5f)
D.d3w=w([M.l1,D.VT],x.O)
D.fG1=new C.qw("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",B.FA,D.d3w)
D.fG4=new C.qw("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",B.cx,Ak.n3)
D.d50=w([D.fG5,D.fG2,D.fG0,D.fG6,D.fG3,D.fG1,D.fG4],A.ax("P<qw>"))
D.d6j=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.bdh=new A.w(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,B.t)
D.bd9=new A.w(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,B.t)
D.ae1=new A.w(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,B.t)
D.d72=w([D.bdh,D.bd9,D.ae1],x.O)
D.bf7=new A.w(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,B.t)
D.d74=w([B.aaQ,D.bf7,D.ae1],x.O)
D.d7G=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.awi=w([D.od,B.c,D.eH,B.bZ,B.b0,B.av],x.O)
D.dxB=new C.rc("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.dxA=new C.rc("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.dxx=new C.rc("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.dxF=new C.rc("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.dxI=new C.rc("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.dxC=new C.rc("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a2e=w([D.dxB,D.dxA,D.dxx,D.dxF,D.dxI,D.dxC],x.F)
D.daK=w([B.c8,B.pi],x.O)
D.dWw={checkers_deluxe:0,tic_tac_go:1}
D.aBU=new A.bq(D.dWw,["Checkers Deluxe","Tic Tac Go"],A.ax("bq<n,n>"))
D.dVC={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aC4=new A.bq(D.dVC,[1,2,3,4,5,6,7],A.ax("bq<n,G>"))
D.dqB=new C.a5A(null)
D.dtX=new C.lv("signature","NGMY Support Team",null,null)
D.dtY=new C.lv("divider","",null,null)
D.QF=new C.Uq(!1,!1,!1,!1)
D.QH=new C.N1(!1,!1,!1,!1)
D.dv_=new C.N1(!0,!0,!1,!1)
D.C4=new C.apo(0,"swahili")
D.aDT=new C.apo(1,"english")
D.C5=new C.apo(2,"mix")
D.cZn=w([B.fv,B.iq,B.dj],x.O)
D.bzk=new A.a0(63118,"MaterialIcons",!1)
D.dyJ=new C.oU(D.cZn,B.fZ,B.aJ,"BACKGAMMON","\ud83c\udfb2",D.bzk)
D.bBi=new A.a0(983637,"MaterialIcons",!1)
D.dyK=new C.oU(Ah.aws,B.bn,B.eM,"EURO WHEEL","\ud83c\udfa1",D.bBi)
D.d6B=w([B.M,B.aK,B.bw],x.O)
D.dyL=new C.oU(D.d6B,B.aP,B.ak,"ROYALE","\u265f\ufe0f",F.ZQ)
D.cN1=w([B.dp,B.bj,B.dS],x.O)
D.dyM=new C.oU(D.cN1,B.aB,B.d7,"CONNECT 4","\ud83d\udd34",B.a_t)
D.d22=w([B.dv,B.f5,B.pi],x.O)
D.dyN=new C.oU(D.d22,B.uE,B.c8,"PUNTO BANCO","\ud83d\udc8e",B.lF)
D.cvj=w([B.ns,B.i2,B.lv],x.O)
D.dyO=new C.oU(D.cvj,B.iW,B.jJ,"DOMINOES","\ud83c\udc53",B.akx)
D.d7f=w([B.wS,B.rT,B.hc],x.O)
D.dyP=new C.oU(D.d7f,B.Ai,B.fX,"WAR","\u2694\ufe0f",N.ZN)
D.dyQ=new C.oU(B.awn,B.aM,B.ak,"PREMIUM","\ud83c\udfae",B.md)
D.cOB=w([B.jl,B.aE,B.dO],x.O)
D.dyR=new C.oU(D.cOB,B.dN,B.ff,"JACKPOT","\ud83c\udfb0",B.md)
D.d1d=w([B.kC,B.lt,B.bA],x.O)
D.dyS=new C.oU(D.d1d,B.qo,B.bZ,"LIVE BINGO","\ud83c\udfb1",B.xC)
D.cHm=w([B.iq,B.dT,B.aJ],x.O)
D.byL=new A.a0(62865,"MaterialIcons",!1)
D.dyT=new C.oU(D.cHm,B.rZ,B.aM,"BIG SPIN","\ud83c\udfa1",D.byL)
D.dyU=new C.oU(B.a2c,B.aL,B.bn,"HOLD'EM","\u2660\ufe0f",B.ju)
D.d7F=w([B.eX,B.fu,B.aZ],x.O)
D.bxT=new A.a0(61234,"MaterialIcons",!1)
D.dyV=new C.oU(D.d7F,B.lw,B.aU,"CRAPS","\ud83c\udfb2",D.bxT)
D.cMm=w([B.fh,B.iG,B.bM],x.O)
D.dyW=new C.oU(D.cMm,B.bJ,B.b7,"PLINKO","\ud83d\udc8e",Al.MP)
D.bB3=new A.a0(983492,"MaterialIcons",!1)
D.dyX=new C.oU(B.a2c,B.ey,B.bn,"SNOOKER","\ud83c\udfb1",D.bB3)
D.d5n=w([B.eX,B.fu,B.aU],x.O)
D.dyY=new C.oU(D.d5n,B.rU,B.bs,"PROFIT LAB","\ud83d\udcb0",B.hW)
D.d5F=w([B.ec,B.fm,B.bn],x.O)
D.bzI=new A.a0(63324,"MaterialIcons",!1)
D.dyZ=new C.oU(D.d5F,B.Af,B.bc,"KLONDIKE","\ud83c\udccf",D.bzI)
D.d__=w([B.da,B.bm,B.M],x.O)
D.dz_=new C.oU(D.d__,B.aM,B.aK,"VEGAS TABLE","\ud83c\udccf",A2.FN)
D.pN=new C.E5(0,"continueGame")
D.pO=new C.E5(1,"youWin")
D.Hg=new C.E5(2,"youLose")
D.QQ=new C.E5(3,"draw")
D.aE7=new C.Va(0,"found")
D.dRM=new C.Va(1,"foundLive")
D.a3S=new C.Va(2,"notFound")
D.aE8=new C.Va(3,"wrongAccount")
D.dYF=new A.u(4,12)
D.e0y=new A.C(B.Ln,B.rF,null)
D.brP=new A.Q(4,0,0,3)
D.eRT=new A.F(!0,B.aI,null,null,null,null,10,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqG=new A.x("NGMY Helper",null,D.eRT,null,null,null,null,null,null,null,null,null)
D.e0O=new A.C(D.brP,D.fqG,null)
D.bzA=new A.a0(63284,"MaterialIcons",!1)
D.bEM=new A.ae(D.bzA,18,B.of,null,null,null)
D.eWm=new A.F(!0,B.of,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8S=new A.x("Continue",null,D.eWm,null,null,null,null,null,null,null,null,null)
D.d0z=w([D.bEM,B.bp,D.f8S],x.p)
D.eCZ=new A.co(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.d0z,null)
D.e0R=new A.C(B.iN,D.eCZ,null)
D.e10=new A.C(B.bR,B.rF,null)
D.bcU=new A.w(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,B.t)
D.cYd=w([B.h0,B.fu,B.cY,D.bcU],x.O)
D.bS9=new A.a7(B.ax,B.aD,B.x,D.cYd,B.Bx,null)
D.aYB=new A.o(null,null,null,null,null,D.bS9,B.n)
D.bjT=new A.kG(D.aYB,B.bd,null,null)
D.e6N=new A.cK(0,0,0,0,null,null,D.bjT,null)
D.bGv=new A.ae(B.v6,11,B.c,null,null,null)
D.e6R=new A.cK(10,12,null,null,null,null,D.bGv,null)
D.cA_=w([B.hd,B.ec,B.l0],x.O)
D.e7r=new A.bR(B.Jf,1.1,B.x,null,0,D.cA_,null,null)
D.bee=new A.w(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,B.t)
D.b8V=new A.w(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,B.t)
D.baz=new A.w(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,B.t)
D.cW2=w([D.bee,D.b8V,D.baz],x.O)
D.e7y=new A.bR(B.a8z,1.05,B.x,null,0,D.cW2,null,null)
D.e7W=new A.bR(B.A,0.5,B.x,null,0,X.a1e,null,null)
D.eBb=new A.aa(-18,0,18,1)
D.eBI=new A.aa(-3,-5,3,5)
D.bFd=new A.ae(B.ee,16,D.eH,null,null,null)
D.aOQ=new A.F(!0,D.eH,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fop=new A.x("Screenshot added \xb7 tap to change",null,D.aOQ,null,null,null,null,null,null,null,null,null)
D.cKl=w([D.bFd,B.bp,D.fop],x.p)
D.eCq=new A.co(B.aQ,B.ba,B.j,B.m,null,B.p,null,0,D.cKl,null)
D.bJ_=new A.ae(B.jS,15,D.eH,null,null,null)
D.fmf=new A.x("Refresh",null,D.aOQ,null,null,null,null,null,null,null,null,null)
D.cMv=w([D.bJ_,B.d8,D.fmf],x.p)
D.eCs=new A.co(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cMv,null)
D.dW2={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.eEe=new A.eV(D.dW2,3,x.M)
D.dVN={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.eEk=new A.eV(D.dVN,36,x.M)
D.dVQ={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.eEs=new A.eV(D.dVQ,6,x.M)
D.dWZ={memory:0,typing:1,scramble:2,pattern:3}
D.mr=new A.eV(D.dWZ,4,x.M)
D.eGC=new A.at(276,276)
D.eHi=new A.a6(13,null,null,null)
D.b3w=new A.fh(2.6,null,null,null,null,B.aM,null,null,null,null)
D.eHs=new A.a6(26,26,D.b3w,null)
D.eIc=new A.a6(null,7,null,null)
D.eIl=new A.hH(8,0,0,1,null)
D.fpv=new A.x("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aMp=new A.b1(D.fpv,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f4b=new A.x("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.eLg=new A.b1(D.f4b,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f5b=new A.x("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.eLm=new A.b1(D.f5b,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fmp=new A.x("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.eM_=new A.b1(D.fmp,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.bdC=new A.w(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,B.t)
D.eVi=new A.F(!0,D.bdC,null,null,null,null,9,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eP0=new A.eo("$",null,null,B.cO,null,null,null,null,null,null,D.eVi)
D.ePg=new A.F(!0,B.M,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePz=new A.F(!0,B.c,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePF=new A.F(!0,B.bm,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQ2=new A.F(!0,B.M,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQc=new A.F(!0,B.c,null,null,null,null,19,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQk=new A.F(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQs=new A.F(!0,null,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRd=new A.F(!0,B.aM,null,null,null,null,28,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRL=new A.F(!0,D.eH,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRN=new A.F(!0,B.bJ,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSu=new A.F(!0,E.Ad,null,null,null,null,13,B.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNB=new A.F(!0,B.c,null,null,null,null,20,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTX=new A.F(!0,B.bJ,null,null,null,null,11.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUe=new A.F(!0,B.ad,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,B.aC,null,null,null,null,null,null,null,null)
D.eUx=new A.F(!0,B.ad,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVy=new A.F(!0,B.c,null,null,null,null,11,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVN=new A.F(!0,B.c,null,null,null,null,14,B.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVY=new A.F(!0,B.bc,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVZ=new A.F(!0,B.c,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,B.aC,null,null,null,null,null,null,null,null)
D.eWu=new A.F(!0,B.iy,null,null,null,null,10.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b7F=new A.w(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,B.t)
D.eWI=new A.F(!0,D.b7F,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY7=new A.F(!0,B.aB,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYt=new A.F(!0,D.acx,null,null,null,null,9,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOh=new A.F(!0,E.Ad,null,null,null,null,11,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYQ=new A.F(!0,B.fm,null,null,null,null,52,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYR=new A.F(!0,B.bw,null,null,null,null,7,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ5=new A.F(!0,E.Ad,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.vZ=new A.F(!0,B.c,null,null,null,null,13,B.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bbo=new A.w(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,B.t)
D.eZi=new A.F(!0,D.bbo,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZP=new A.F(!0,B.Ql,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_M=new A.F(!0,B.c,null,null,null,null,38,B.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_S=new A.F(!0,B.iM,null,null,null,null,11,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_W=new A.F(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOx=new A.F(!0,B.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0n=new A.F(!0,B.M,null,null,null,null,10,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0r=new A.F(!0,B.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1j=new A.F(!0,B.M,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1H=new A.F(!0,B.ad,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1X=new A.F(!0,B.bc,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2s=new A.F(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2w=new A.F(!0,B.M,null,null,null,null,11,B.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3r=new A.x("Value per pair",null,B.hz,null,null,null,null,null,null,null,null,null)
D.f3s=new A.x("Restore now",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f3Y=new A.x("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aO3=new A.F(!0,B.cU,null,null,null,null,12,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f46=new A.x("AVAILABLE PLANS",null,D.aO3,null,null,null,null,null,null,null,null,null)
D.f49=new A.x("I understand",null,B.cu,null,null,null,null,null,null,null,null,null)
D.f4D=new A.x("Go Back",null,B.cu,null,null,null,null,null,null,null,null,null)
D.eSl=new A.F(!0,B.bw,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5j=new A.x("PLAN VALUE",null,D.eSl,null,null,null,null,null,null,null,null,null)
D.f5l=new A.x("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.f5I=new A.x("Deposit",null,B.SX,null,null,null,null,null,null,null,null,null)
D.f0H=new A.F(!0,B.dN,null,null,null,null,null,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6F=new A.x("JACKPOT SLOTS",null,D.f0H,null,null,null,null,null,null,null,null,null)
D.f6Z=new A.x("Restore",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eSo=new A.F(!0,B.c,null,null,null,null,12,B.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f72=new A.x("YOUR NUMBER",null,D.eSo,null,null,null,null,null,null,null,null,null)
D.f7i=new A.x("SPIN REELS",null,F.a6B,null,null,null,null,null,null,null,null,null)
D.f7J=new A.x("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.f8d=new A.x("Perfect Score Profit",null,B.hz,null,null,null,null,null,null,null,null,null)
D.f8Q=new A.x("Join room",null,B.ks,null,null,null,null,null,null,null,null,null)
D.faK=new A.x("Add payment screenshot",null,B.jC,null,null,null,null,null,null,null,null,null)
D.faZ=new A.x("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.f_Y=new A.F(!0,B.aM,null,null,null,null,11,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbo=new A.x("INVITE A PLAYER",null,D.f_Y,null,null,null,null,null,null,null,null,null)
D.f_b=new A.F(!0,B.V4,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbO=new A.x("NGMY GOLD LEADER",null,D.f_b,null,null,null,null,null,null,null,null,null)
D.fck=new A.x("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.fcI=new A.x("Invest & Play",null,B.oU,null,null,null,null,null,null,null,null,null)
D.aNX=new A.F(!0,D.wK,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd7=new A.x("VALID THRU",null,D.aNX,null,null,null,null,null,null,null,null,null)
D.aOz=new A.F(!0,B.ay,null,null,null,null,11,B.I,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdf=new A.x("DEALER",null,D.aOz,null,null,null,null,null,null,null,null,null)
D.fdl=new A.x("CARDHOLDER",null,D.aNX,null,null,null,null,null,null,null,null,null)
D.eZI=new A.F(!0,B.aL,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe3=new A.x("NGMY PLATINUM",null,D.eZI,null,null,null,null,null,null,null,null,null)
D.f1O=new A.F(!0,B.pk,null,null,null,null,10,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feL=new A.x("EARNED SO FAR",null,D.f1O,null,null,null,null,null,null,null,null,null)
D.ffi=new A.x("VS",null,B.aNS,null,null,null,null,null,null,null,null,null)
D.ffI=new A.x("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.fg4=new A.x("One day left",null,B.aNz,null,B.L,null,null,null,null,null,null,null)
D.fgp=new A.x("Keep typing \u2014 mistakes are counted in your payout",null,B.CJ,null,null,null,null,null,null,null,null,null)
D.fgq=new A.x("Multiplayer invite",null,B.ks,null,null,null,null,null,null,null,null,null)
D.fgA=new A.x("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.eR0=new A.F(!0,B.Ql,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgG=new A.x("\ud83d\udcb0 Partial Payout System",null,D.eR0,null,null,null,null,null,null,null,null,null)
D.fgR=new A.x("Browse Topics",null,B.eV,null,null,null,null,null,null,null,null,null)
D.eQ_=new A.F(!0,B.c,null,null,null,null,22,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh5=new A.x("Investment Required",null,D.eQ_,null,B.L,null,null,null,null,null,null,null)
D.ePw=new A.F(!0,B.c,null,null,null,null,16.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiv=new A.x("Network Status",null,D.ePw,null,null,null,null,null,null,null,null,null)
D.fj0=new A.x("Their account email",null,G.a6o,null,null,null,null,null,null,null,null,null)
D.fjj=new A.x("Verification code",null,B.cu,null,null,null,null,null,null,null,null,null)
D.fjk=new A.x("Category",null,null,null,null,null,null,null,null,null,null,null)
D.fjy=new A.x("ACTIVE ASSET",null,D.aO3,null,null,null,null,null,null,null,null,null)
D.fjT=new A.x("Scan QR",null,B.cu,null,null,null,null,null,null,null,null,null)
D.fjY=new A.x("Check word",null,B.cu,null,null,null,null,null,null,null,null,null)
D.fkl=new A.x("YOUR HAND",null,D.aOz,null,null,null,null,null,null,null,null,null)
D.fkU=new A.x("NGMY Music Studio",null,B.kU,null,null,null,null,null,null,null,null,null)
D.fkX=new A.x("I sent it \u2014 submit deposit",null,B.oU,null,null,null,null,null,null,null,null,null)
D.flG=new A.x("Back",null,B.Sr,null,null,null,null,null,null,null,null,null)
D.f2H=new A.F(!0,null,null,null,null,null,null,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flN=new A.x("DEAL / PLAY ROUND",null,D.f2H,null,null,null,null,null,null,null,null,null)
D.flZ=new A.x("Got it \u2014 keep chatting",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fm8=new A.x("3 Messages Left",null,B.aOm,null,null,null,null,null,null,null,null,null)
D.fmD=new A.x("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.fmL=new A.x("Copy",null,B.cu,null,null,null,null,null,null,null,null,null)
D.fn6=new A.x("How many games?",null,G.a6o,null,null,null,null,null,null,null,null,null)
D.eZc=new A.F(!0,B.ay,null,null,null,null,null,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fni=new A.x("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.eZc,null,B.L,null,null,null,null,null,null,null)
D.foQ=new A.x("Question",null,null,null,null,null,null,null,null,null,null,null)
D.fp1=new A.x("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.f35=new A.F(!0,B.c,null,null,null,null,12.5,B.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqA=new A.x("NGMY  WALLET",null,D.f35,null,null,null,null,null,null,null,null,null)
D.fqB=new A.x("Select Your Bet",null,B.hm,null,null,null,null,null,null,null,null,null)
D.fD_=new A.cw("history",x.W)
D.fD4=new A.cw("ngmy_local_home",x.W)
D.fD5=new A.cw("ngmy_local_invest",x.W)
D.fD6=new A.cw("ngmy_local_wallet",x.W)
D.fFO=new C.Yi(null)
D.aS8=new C.azE(0,"grid")
D.aS9=new C.azE(1,"questions")
D.fH5=new C.azE(2,"answer")
D.fI0=new C.Zb(null)})();(function staticFields(){$.fMO=A.aW(x.N)
$.hbi=A.V(x.N,x.k)
$.fSd=null
$.fS1=A.V(x.N,A.ax("vU"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"i83","bC2",()=>C.hR9())
w($,"i7Q","hjf",()=>{var v=null,u=A.ih(v,v,v,v,D.eP0,B.a5,B.ch,v,B.er,B.cd)
u.eO()
return u})})()};
(a=>{a["HdFg/NGwPGAFPy88vT1UfVDrUe0="]=a.current})($__dart_deferred_initializers__);