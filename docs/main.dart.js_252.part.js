((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,L,Q,A_,E,M,A0,N,A1,R,O,S,A2,P,A3,T,A4,A5,A6,A7,A8,A9,U,Aa,C={
h22(d,e,f){var w=null,v=f.k("Fg<0>"),u=new A.Fg(w,w,w,w,v)
$.G4()
u.d=new C.coL(new A.Ey(),e,u,f,d)
return new A.hO(u,v.k("hO<1>"))},
coL:function coL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
coM:function coM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
coI:function coI(d){this.a=d},
coJ:function coJ(d,e){this.a=d
this.b=e},
coK:function coK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
coH:function coH(d,e,f){this.a=d
this.b=e
this.c=f},
bp1:function bp1(d){this.a=d},
h21(d,e,f,g){return new C.atU(d,e,f,null,g.k("atU<0>"))},
Ez:function Ez(){},
aGi:function aGi(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
eT8:function eT8(d){this.a=d},
eT7:function eT7(d,e){this.a=d
this.b=e},
eTa:function eTa(d){this.a=d},
eT5:function eT5(d,e,f){this.a=d
this.b=e
this.c=f},
eT9:function eT9(d){this.a=d},
eT6:function eT6(d){this.a=d},
atU:function atU(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
hRW(d){var w=B.a.i(d)
while(B.a.a0(w,"$"))w=B.a.i(B.a.b_(w,1))
return w},
hc7(d){var w=C.hRW(d)
if(w.length===0)return""
return"$"+w},
fn5(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fn5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:i=B.a.i(d.toLowerCase())
if(i.length===0){w=1
break}t=new A.Q(Date.now(),0,!1).bN(-6048e8)
s=e.length,r=0
case 3:if(!(r<e.length)){w=5
break}q=e[r]
if(B.a.i(q.b.toLowerCase())!==i){w=4
break}p=q.y
o=p.a
if(o>=t.gbo())o=o===t.gbo()&&p.b<t.gcu()
else o=!0
if(o){w=4
break}if(q.x!==B.ck){w=4
break}if(q.d!==B.fz){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!A.dr(m,"game payout:",0))if(!A.dr(m,"game partial:",0)){if(!A.dr(m,"multiplayer payout:",0))o=A.dr(m,"dice",0)&&q.e===B.fa
else o=l
l=o}if(!l){w=4
break}if(A.dr(m,"game payout:",0))k=B.a.i(B.a.b_(n,B.a.cG(m,"game payout:")+12))
else if(A.dr(m,"game partial:",0)){k=B.a.i(B.a.b_(n,B.a.cG(m,"game partial:")+13))
j=B.a.cG(k,"(")
if(j>0)k=B.a.i(B.a.ap(k,0,j))}else if(A.dr(m,"multiplayer payout:",0)){k=B.a.i(B.a.b_(n,B.a.cG(m,"multiplayer payout:")+19))
j=B.a.cG(k,"(")
if(j>0)k=B.a.i(B.a.ap(k,0,j))}else k=A.dr(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return A.b(C.ui(q.c,p,n,d,o,null,q.a,!0),$async$fn5)
case 6:case 4:e.length===s||(0,A.K)(e),++r
w=3
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$fn5,v)},
hWx(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
hSZ(d,e,f){return B.d.b8(e,new C.fqP(f,B.a.i(d.toLowerCase())))},
fqG(d){var w
C.fZj(d)
w=d.c5
return A.bl(new A.J(w,new C.fqH(),A.T(w).k("J<1,@>")),!0,x.N)},
hIM(d,e,f){var w,v,u,t,s,r,q=null,p=B.bQ,o=B.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aU.toString
u=$.eg().gi7().b
if(u.a===0)t=1
else{new A.bc(u,A.a2(u).k("bc<2>")).gK(0)
u=$.kW()
s=u.d
t=s==null?u.gh1():s}w=B.k.dG(f*t)
v=new C.faQ(f)
if(J.cZ(n,"data:image"))try{u=A.fK(B.cB.aI(B.d.gam(J.lh(n,","))),B.A,w,new C.faN(v),B.fQ,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.cZ(n,"supabase://"))return new A.l1(A.a0e(n),new C.faO(f,e,p,w,v),q,q,x.gh)
return A.ke(n,B.A,w,new C.faP(v),B.fQ,p,!0,e,q,q,f)},
fOi(d,e){return new A.a5(e,e,A.hR(C.hIM(d,e,e),B.ap),null)},
hBd(){var w,v,u=A.a([],x._),t=x.N,s=A.B(D.d2c,x.gm)
for(w=0;w<36;++w){v=B.Bs[w]
s.push(new C.qq(v.a,v.b,v.c,v.e,v.f))}return new C.ayv(u,A.U(t,t),s)},
fqP:function fqP(d,e){this.a=d
this.b=e},
fqH:function fqH(){},
faQ:function faQ(d){this.a=d},
faN:function faN(d){this.a=d},
faO:function faO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
faM:function faM(d){this.a=d},
faP:function faP(d){this.a=d},
ajz:function ajz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
qq:function qq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
ayv:function ayv(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
d6A:function d6A(d,e){this.a=d
this.b=e},
d6L:function d6L(d,e){this.a=d
this.b=e},
d72:function d72(){},
d73:function d73(d){this.a=d},
d6T:function d6T(d,e){this.a=d
this.b=e},
d6S:function d6S(){},
d6U:function d6U(d){this.a=d},
d6R:function d6R(){},
d6W:function d6W(d){this.a=d},
d6V:function d6V(){},
d6O:function d6O(d){this.a=d},
d6M:function d6M(d){this.a=d},
d6N:function d6N(d){this.a=d},
d6P:function d6P(d){this.a=d},
d6Q:function d6Q(d){this.a=d},
d6G:function d6G(d,e){this.a=d
this.b=e},
d6H:function d6H(d,e){this.a=d
this.b=e},
d6E:function d6E(d){this.a=d},
d6F:function d6F(d){this.a=d},
d6I:function d6I(d){this.a=d},
d6J:function d6J(d){this.a=d},
d6K:function d6K(d,e,f){this.a=d
this.b=e
this.c=f},
d6D:function d6D(d,e){this.a=d
this.b=e},
d6C:function d6C(d,e){this.a=d
this.b=e},
d6B:function d6B(d,e){this.a=d
this.b=e},
d71:function d71(d){this.a=d},
d7_:function d7_(d,e,f){this.a=d
this.b=e
this.c=f},
d6Z:function d6Z(d,e,f){this.a=d
this.b=e
this.c=f},
d6Y:function d6Y(d,e){this.a=d
this.b=e},
d6X:function d6X(){},
d70:function d70(d){this.a=d},
aBm:function aBm(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bhc:function bhc(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
dKj:function dKj(d){this.a=d},
dKi:function dKi(d){this.a=d},
dKk:function dKk(d){this.a=d},
dKh:function dKh(){},
dKl:function dKl(d,e){this.a=d
this.b=e},
dKg:function dKg(d){this.a=d},
dKm:function dKm(d){this.a=d},
ajy:function ajy(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ayu:function ayu(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
d6u:function d6u(d){this.a=d},
d6x:function d6x(d){this.a=d},
d6y:function d6y(d){this.a=d},
d6z:function d6z(d){this.a=d},
d6w:function d6w(d,e){this.a=d
this.b=e},
d6v:function d6v(d,e){this.a=d
this.b=e},
ajA:function ajA(d,e,f,g,h,i,j,k,l,m){var _=this
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
ayw:function ayw(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.aF=_.aO=_.aE=_.az=$
_.bJ=_.ba=_.b0=_.b3=null
_.aR=!1
_.bR=_.bj=null
_.c5=!1
_.cg=_.cU=""
_.c=_.a=_.bC=null},
d8m:function d8m(d,e){this.a=d
this.b=e},
d8p:function d8p(d){this.a=d},
d8q:function d8q(d){this.a=d},
d8r:function d8r(d){this.a=d},
d8s:function d8s(d){this.a=d},
d8t:function d8t(d){this.a=d},
d8n:function d8n(d){this.a=d},
d8o:function d8o(d){this.a=d},
d7C:function d7C(d,e){this.a=d
this.b=e},
d7D:function d7D(d,e){this.a=d
this.b=e},
d85:function d85(d){this.a=d},
d86:function d86(){},
d7S:function d7S(d,e,f){this.a=d
this.b=e
this.c=f},
d7T:function d7T(d){this.a=d},
d7U:function d7U(d,e,f){this.a=d
this.b=e
this.c=f},
d7V:function d7V(d,e){this.a=d
this.b=e},
d7W:function d7W(){},
d74:function d74(d){this.a=d},
d7B:function d7B(d,e){this.a=d
this.b=e},
d87:function d87(){},
d8g:function d8g(){},
d84:function d84(d){this.a=d},
d83:function d83(d){this.a=d},
d7z:function d7z(d){this.a=d},
d7A:function d7A(){},
d8b:function d8b(){},
d8c:function d8c(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d8d:function d8d(d,e,f){this.a=d
this.b=e
this.c=f},
d75:function d75(){},
d76:function d76(d){this.a=d},
d77:function d77(){},
d7L:function d7L(d,e){this.a=d
this.b=e},
d7M:function d7M(d,e,f){this.a=d
this.b=e
this.c=f},
d7N:function d7N(d){this.a=d},
d7K:function d7K(d){this.a=d},
d7X:function d7X(d){this.a=d},
d7Y:function d7Y(){},
d7Z:function d7Z(d){this.a=d},
d8_:function d8_(){},
d80:function d80(d){this.a=d},
d81:function d81(){},
d8a:function d8a(d,e,f){this.a=d
this.b=e
this.c=f},
d7O:function d7O(d){this.a=d},
d7P:function d7P(d,e){this.a=d
this.b=e},
d7Q:function d7Q(d){this.a=d},
d7R:function d7R(d){this.a=d},
d8e:function d8e(d){this.a=d},
d8f:function d8f(d){this.a=d},
d78:function d78(d){this.a=d},
d79:function d79(d,e){this.a=d
this.b=e},
d7a:function d7a(d){this.a=d},
d7b:function d7b(d){this.a=d},
d88:function d88(d,e){this.a=d
this.b=e},
d89:function d89(d){this.a=d},
d7J:function d7J(d,e){this.a=d
this.b=e},
d82:function d82(d,e,f){this.a=d
this.b=e
this.c=f},
d7H:function d7H(d,e,f){this.a=d
this.b=e
this.c=f},
d7I:function d7I(){},
d8h:function d8h(d){this.a=d},
d8i:function d8i(d){this.a=d},
d8j:function d8j(d){this.a=d},
d8l:function d8l(d){this.a=d},
d8k:function d8k(){},
d7G:function d7G(d,e,f){this.a=d
this.b=e
this.c=f},
d7F:function d7F(d,e){this.a=d
this.b=e},
d7E:function d7E(d,e){this.a=d
this.b=e},
d7o:function d7o(d){this.a=d},
d7n:function d7n(d,e){this.a=d
this.b=e},
d7p:function d7p(d){this.a=d},
d7m:function d7m(d,e){this.a=d
this.b=e},
d7q:function d7q(d){this.a=d},
d7l:function d7l(){},
d7r:function d7r(d){this.a=d},
d7j:function d7j(){},
d7k:function d7k(d){this.a=d},
d7s:function d7s(d){this.a=d},
d7i:function d7i(d,e){this.a=d
this.b=e},
d7t:function d7t(d){this.a=d},
d7h:function d7h(d,e){this.a=d
this.b=e},
d7d:function d7d(d,e){this.a=d
this.b=e},
d7u:function d7u(d){this.a=d},
d7g:function d7g(d,e){this.a=d
this.b=e},
d7v:function d7v(d){this.a=d},
d7f:function d7f(d){this.a=d},
d7c:function d7c(d,e){this.a=d
this.b=e},
d7w:function d7w(d,e,f){this.a=d
this.b=e
this.c=f},
d7x:function d7x(d){this.a=d},
d7e:function d7e(){},
d7y:function d7y(d){this.a=d},
akq:function akq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
beo:function beo(){this.c=this.a=null},
dbU:function dbU(d,e){this.a=d
this.b=e},
dbT:function dbT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agM:function agM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
avH:function avH(d,e,f,g,h,i,j,k,l,m){var _=this
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
czN:function czN(d){this.a=d},
cz7:function cz7(d,e){this.a=d
this.b=e},
cyY:function cyY(d){this.a=d},
cyZ:function cyZ(d){this.a=d},
czh:function czh(d){this.a=d},
cze:function cze(d){this.a=d},
czf:function czf(d){this.a=d},
czg:function czg(d,e,f){this.a=d
this.b=e
this.c=f},
cz9:function cz9(d){this.a=d},
cz8:function cz8(d){this.a=d},
cz_:function cz_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
czc:function czc(d){this.a=d},
czb:function czb(d){this.a=d},
cza:function cza(d,e){this.a=d
this.b=e},
czA:function czA(d){this.a=d},
czu:function czu(d){this.a=d},
czx:function czx(d){this.a=d},
czw:function czw(){},
czt:function czt(d){this.a=d},
czv:function czv(d,e){this.a=d
this.b=e},
czs:function czs(){},
cz4:function cz4(){},
cz5:function cz5(d,e){this.a=d
this.b=e},
cz6:function cz6(d){this.a=d},
cz2:function cz2(d,e){this.a=d
this.b=e},
cz3:function cz3(d,e){this.a=d
this.b=e},
czk:function czk(d,e){this.a=d
this.b=e},
czd:function czd(d){this.a=d},
czl:function czl(d){this.a=d},
czm:function czm(d,e){this.a=d
this.b=e},
czn:function czn(d,e){this.a=d
this.b=e},
czo:function czo(d,e){this.a=d
this.b=e},
czp:function czp(d,e,f){this.a=d
this.b=e
this.c=f},
czq:function czq(d){this.a=d},
czr:function czr(d){this.a=d},
czi:function czi(d,e){this.a=d
this.b=e},
czz:function czz(d){this.a=d},
czj:function czj(d,e){this.a=d
this.b=e},
czM:function czM(d){this.a=d},
czF:function czF(d){this.a=d},
czI:function czI(d){this.a=d},
czC:function czC(d,e){this.a=d
this.b=e},
czG:function czG(){},
czH:function czH(d,e){this.a=d
this.b=e},
czD:function czD(d){this.a=d},
czE:function czE(d){this.a=d},
czK:function czK(){},
czJ:function czJ(d){this.a=d},
czB:function czB(d,e){this.a=d
this.b=e},
czL:function czL(d){this.a=d},
cz0:function cz0(d){this.a=d},
czy:function czy(d,e){this.a=d
this.b=e},
cz1:function cz1(d,e,f){this.a=d
this.b=e
this.c=f},
aII:function aII(){},
aIJ:function aIJ(){},
aIK:function aIK(){},
aJG:function aJG(){},
bW7(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase())
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
bW8(d){var w=B.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hoK(d,e){var w=d.ax
if(w<0)return!1
return w===e},
aVM(d,e){return C.hoL(d,e)},
hoL(d,e){var w=0,v=A.j(x.di),u,t,s,r,q,p
var $async$aVM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aZx(d),$async$aVM)
case 3:p=g
if(p!=null){try{t=B.R.aG(0,p.c,null)
if(x.f.b(t)){s=C.fXF(A.a0(t,x.N,x.z))
if(s==null){u=new A.Fb(D.a3k,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bW7(s,e,p.b)){u=new A.Fb(D.aDq,null)
w=1
break}r=p.a?D.dP0:D.aDp
u=new A.Fb(r,s)
w=1
break}}catch(o){}u=new A.Fb(D.a3k,null)
w=1
break}s=C.fXG(d)
if(s==null){u=new A.Fb(D.a3k,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bW7(s,e,null)){u=new A.Fb(D.aDq,null)
w=1
break}u=new A.Fb(D.aDp,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aVM,v)},
fXG(d){var w,v,u,t,s,r
try{w=B.a.i(d)
if(J.cZ(w,"\ufeff"))w=J.mu(w,1)
v=!1
if(J.cZ(w,"NGMYSNAP1|")){v=!0
w=B.c4.c7(0,B.cB.aI(J.mu(w,10)))}u=B.R.aG(0,w,null)
if(!x.f.b(u))return null
t=A.a0(u,x.N,x.z)
s=v?C.hoJ(t):C.fXF(t)
return s}catch(r){return null}},
hoJ(d){var w,v,u,t,s,r,q,p,o,n=new C.bW4(),m=new C.bW3(),l=d.h(0,"qi")
if(x.f.b(l)){w=A.a0(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new A.Q(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=A.aN(w.h(0,"d"))
p=new A.v2(v,u,t,s,r,B.k.O(q==null?0:q))}else p=null
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
return new A.a4F("","",v,u,t,s,r,q,n,m,o,p,B.i_,new A.Q(Date.now(),0,!1),-1)},
fXF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.y(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.bW6()
v=d.h(0,"activeInvestment")
if(x.f.b(v)){u=A.a0(v,x.N,x.z)
t=u.h(0,"name")
t=J.k(t==null?"":t)
s=A.aN(u.h(0,"amount"))
if(s==null)s=0
r=A.aN(u.h(0,"dailyROI"))
if(r==null)r=0
q=w.$1(u.h(0,"purchaseDate"))
if(q==null)q=new A.Q(Date.now(),0,!1)
p=A.aN(u.h(0,"totalEarned"))
if(p==null)p=0
o=A.aN(u.h(0,"daysClockedIn"))
n=new A.v2(t,s,r,q,p,B.k.O(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=A.B(new A.e6(J.b6(m,new C.bW5(w),x.eG),t),t.k("G.E"))}else l=A.a([],x.E)
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
if(w==null)w=new A.Q(Date.now(),0,!1)
f=A.aN(d.h(0,"walletStateRevision"))
f=f==null?null:B.k.O(f)
return new A.a4F(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
fIU(d,e,f,g){var w=0,v=A.j(x.N),u,t,s,r
var $async$fIU=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:t=A.bW2(d,e,f,g)
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(t.a,s,"_")
u=A.FH(A.J7(t.eH(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fIU,v)},
UW:function UW(d,e){this.a=d
this.b=e},
bW4:function bW4(){},
bW3:function bW3(){},
bW6:function bW6(){},
bW5:function bW5(d){this.a=d},
hLO(d){return A.c9(null,B.aX,!0,null,new C.fe6(),d,null,!0,!0,x.N)},
hM0(d,e,f,g){return A.c9(null,B.aX,!0,null,new C.ffj(g,f,e),d,null,!0,!0,x.y)},
alY:function alY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAC:function aAC(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dsn:function dsn(d,e){this.a=d
this.b=e},
dso:function dso(d){this.a=d},
dse:function dse(d,e){this.a=d
this.b=e},
dsc:function dsc(d){this.a=d},
dsm:function dsm(d){this.a=d},
dsl:function dsl(d,e){this.a=d
this.b=e},
dsb:function dsb(d,e){this.a=d
this.b=e},
dsa:function dsa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dsd:function dsd(d){this.a=d},
dsk:function dsk(){},
dsi:function dsi(d){this.a=d},
dsj:function dsj(d,e){this.a=d
this.b=e},
dsf:function dsf(){},
dsg:function dsg(d,e){this.a=d
this.b=e},
dsh:function dsh(d,e){this.a=d
this.b=e},
dsp:function dsp(d){this.a=d},
a_d:function a_d(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bpx:function bpx(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
YS:function YS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgM:function bgM(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dst:function dst(d){this.a=d},
dsq:function dsq(d,e){this.a=d
this.b=e},
dsr:function dsr(d,e){this.a=d
this.b=e},
dss:function dss(d){this.a=d},
YT:function YT(d){this.a=d},
bgN:function bgN(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dsu:function dsu(d,e){this.a=d
this.b=e},
fe6:function fe6(){},
ffj:function ffj(d,e,f){this.a=d
this.b=e
this.c=f},
ad3:function ad3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eMZ:function eMZ(d){this.a=d},
eN_:function eN_(d){this.a=d},
P0:function P0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Y_:function Y_(d){this.a=d},
axT:function axT(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d1u:function d1u(d){this.a=d},
d1r:function d1r(){},
d1s:function d1s(d){this.a=d},
d1t:function d1t(d){this.a=d},
T0(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$T0=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||B.a.i(f).length===0){w=1
break}w=3
return A.b(A.M1(s),$async$T0)
case 3:t=h
J.cf(t,A.E(["role",e,"text",B.a.i(f),"at",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.z))
w=4
return A.b(A.amd(s,t),$async$T0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$T0,v)},
hp2(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=A.T(d).k("a1<1>")
v=A.B(new A.a1(d,new C.bWQ(),w),w.k("G.E"))
w=v.length
if(w===0)return""
u=w<=24?v:B.d.fG(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,A.K)(u),++s){r=u[s]
q=J.a7(r)
p=J.y(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+A.t(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
bWQ:function bWQ(){},
hRl(d){return B.d.dL(B.Bs,new C.fn_(d),new C.fn0()).r},
fn_:function fn_(d){this.a=d},
fn0:function fn0(){},
ams:function ams(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bgT:function bgT(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dyP:function dyP(d){this.a=d},
dyO:function dyO(d){this.a=d},
dyG:function dyG(d,e,f){this.a=d
this.b=e
this.c=f},
dyL:function dyL(d){this.a=d},
dyI:function dyI(d,e,f){this.a=d
this.b=e
this.c=f},
dyM:function dyM(d){this.a=d},
dyH:function dyH(d){this.a=d},
dyN:function dyN(d){this.a=d},
dyJ:function dyJ(d){this.a=d},
dyK:function dyK(d){this.a=d},
fZj(d){var w=A.c3b(new A.Q(Date.now(),0,!1)),v=d.bj
if(v===w)return
d.bj=w
d.bR=0
d.c5=A.a([],x.s)},
fZl(d){return A.c9(null,B.w.j(0.82),!0,null,new C.c3g(),d,null,!0,!0,x.H)},
a5i:function a5i(d){this.a=d},
c3g:function c3g(){},
c3f:function c3f(d){this.a=d},
hbk(){var w=new A.Q(Date.now(),0,!1),v=w.bN(A.dA(4-A.ml(w),0,0,0,0,0).a),u=A.bZ(A.bx(v),1,4,0,0,0,0,0)
return""+A.bx(v)+"-W"+B.a.aT(B.o.u(1+B.k.bw(B.o.an(v.by(A.bZ(A.bx(u),A.bF(u),A.bP(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
f5T(d,e){var w,v,u,t,s,r,q=A.Fn(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.q(t,"email")
r=B.a.i(J.k(s==null?"":s).toLowerCase())
if((B.a.c8(r,"+local.ngmy")?B.a.ap(r,0,r.length-11):r)===q)return t}t=A.E(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
hGr(d,e){var w,v,u,t,s,r,q,p=A.Fn(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.a7(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c8(q,"+local.ngmy")?B.a.ap(q,0,q.length-11):q)===p){w=A.aN(s.h(t,"winsLeft"))
w=w==null?null:B.k.O(w)
return w==null?0:w}}return 0},
i_s(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=A.Fn(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.a7(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c8(q,"+local.ngmy")?B.a.ap(q,0,q.length-11):q)===n){w=A.aN(s.h(t,o))
w=w==null?null:B.k.O(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
hMG(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=A.Fn(b5),b2=A.c4J(),b3=C.hbk()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.a7(s)
q=r.h(s,a2)
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.c8(p,a3)?B.a.ap(p,0,p.length-11):p)!==b1)continue
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
if(r)u=s}if(u!=null){w=J.a7(u)
v=A.aN(w.h(u,a4))
v=v==null?a1:B.k.O(v)
w.n(u,a4,(v==null?1:v)-1)
w=A.aN(w.h(u,"outcome"))
w=w==null?a1:B.k.O(w)
return w==null?1:w}n=new C.fg5()
for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.q(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c8(p,a3)?B.a.ap(p,0,p.length-11):p)!==b1)continue
m=n.$5(s,"perDay",a6,a7,b2)
if(m!=null)return m}for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.q(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c8(p,a3)?B.a.ap(p,0,p.length-11):p)!==b1)continue
l=n.$5(s,"perWeek",a8,a9,b3)
if(l!=null)return l}k=C.f5T(b4,b5)
w=J.a7(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?A.a0(v.a(w.h(k,b0)),r,q):A.U(r,q)
w.n(k,b0,j)
for(w=b4.y,w=new A.cI(w,A.a2(w).k("cI<1,2>")).gai(0);w.C();){i=w.d
h=i.b
g=J.a7(h)
f=g.h(h,"perDay")
if(f==null)f=0
e=g.h(h,"perWeek")
if(e==null)e=0
if(f<=0&&e<=0)continue
h=i.a
d=v.b(j.h(0,h))?A.a0(v.a(j.h(0,h)),r,q):A.U(r,q)
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
h82(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[1,2,3],v=d.a,u=0;u<3;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
if(w===0)return 1
t=q[e.aD(w)]
if(t===3&&d.f>=d.e)t=e.hc()?1:2
return t},
fOA(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[-1,-2],v=d.a,u=0;u<2;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
return w===0?-1:q[e.aD(w)]},
hMH(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=A.Fn(a3),a1=new C.fg6()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.a7(s)
q=r.h(s,"email")
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.c8(p,"+local.ngmy")?B.a.ap(p,0,p.length-11):p)!==a0)continue
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
w=J.a7(u)
v=w.h(u,d)
l=J.k(v==null?"":v)
v=o>0?1:0
r=n>0?1:0
q=m>0?1:0
q=new C.fg7(v+r+q>1,l)
k=q.$2(o,"w")
r=k+q.$2(n,"l")
j=a4.aD(r+q.$2(m,"p"))
if(j<k){w.n(u,h,o-1)
w.n(u,d,"w")
w=a2.a
v=w.h(0,"1")
if(v==null)v=10
i=Math.max(1,v)
w=w.h(0,"2")
if(w==null)w=10
return a4.aD(i+Math.max(1,w))<i?1:2}if(j<r){w.n(u,g,n-1)
w.n(u,d,"l")
return C.fOA(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
hMF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=A.aN(i.h(0,"wins")),g=h==null?m:B.k.O(h)
if(g==null)g=0
h=A.aN(i.h(0,"loses"))
w=h==null?m:B.k.O(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.hbk():A.c4J()
t=v+"|"+u
s=C.f5T(d,e)
h=J.a7(s)
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
n=f.aD(r)<o
if(n)h.n(s,k,q+1)
else h.n(s,j,p+1)
return n},
hUY(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
d.bea()
w=C.hMH(d,e,a0)
if(w!=null){if(w===3)++d.f
C.aes(d,e,w)
return w}v=C.hMG(d,e)
if(v!=null){if(v===3)++d.f
C.aes(d,e,v)
return v}u=C.hMF(d,e,a0)
if(u!=null)return new C.fu1(d,a0,e).$1(u)
t=C.f5T(d,e)
s=J.a7(t)
r=A.aN(s.h(t,"winStreak"))
q=r==null?null:B.k.O(r)
if(q==null)q=0
s=A.aN(s.h(t,"loseStreak"))
p=s==null?null:B.k.O(s)
if(p==null)p=0
o=new C.fu3(d,a0)
if(C.hGr(d,e)>0){n=o.$0()
C.i_s(d,e)
C.aes(d,e,n)
return n}if(q>=d.c){n=new C.fu2(d,a0).$0()
C.aes(d,e,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.aes(d,e,n)
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
g=a0.aD(100)<h
if(g&&m.length!==0){f=m[a0.aD(m.length)]
if(f===3&&d.f>=d.e)f=a0.hc()?1:2}else{s=l.length
if(s!==0)f=l[a0.aD(s)]
else f=g?1:-1}if(f===3)++d.f
C.aes(d,e,f)
return f},
c4B(d){var w=0,v=A.j(x.y),u
var $async$c4B=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c4A(d),$async$c4B)
case 3:if(f){u=!0
w=1
break}u=A.c4A(d)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c4B,v)},
aes(d,e,f){var w,v="winStreak",u="loseStreak",t=C.f5T(d,e),s=J.a7(t),r=A.aN(s.h(t,v)),q=r==null?null:B.k.O(r)
if(q==null)q=0
r=A.aN(s.h(t,u))
w=r==null?null:B.k.O(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
fg5:function fg5(){},
fg6:function fg6(){},
fg7:function fg7(d,e){this.a=d
this.b=e},
fu1:function fu1(d,e,f){this.a=d
this.b=e
this.c=f},
fu3:function fu3(d,e){this.a=d
this.b=e},
fu2:function fu2(d,e){this.a=d
this.b=e},
alX:function alX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgK:function bgK(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cQ$=d
_.b2$=e
_.c=_.a=null},
ds_:function ds_(d){this.a=d},
drZ:function drZ(d){this.a=d},
ds0:function ds0(d){this.a=d},
drY:function drY(d,e){this.a=d
this.b=e},
aJf:function aJf(){},
Ms:function Ms(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c5q:function c5q(){},
c5p:function c5p(){},
anX:function anX(d,e,f){this.c=d
this.d=e
this.a=f},
fJV(d,e,f){return A.c9(null,B.w.j(0.88),!0,null,new C.c5S(f,e),d,null,!0,!0,x.H)},
hsO(d){var w,v,u,t,s=B.a.i(d),r=s.split("-")
if(r.length===3){w=A.c7(r[0],null)
v=r[1]
u=A.c7(v,null)
t=A.c7(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?B.i8[u-1]:v)+" "+A.t(t)+", "+A.t(w)}return s},
MA:function MA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c5S:function c5S(d,e){this.a=d
this.b=e},
bho:function bho(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
dRm:function dRm(d,e){this.a=d
this.b=e},
dRi:function dRi(){},
dRj:function dRj(){},
dRk:function dRk(d,e){this.a=d
this.b=e},
dRl:function dRl(d,e){this.a=d
this.b=e},
aJP:function aJP(){},
hbg(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.bdJ(new C.fpn(w))
w=w.a
return w==null?null:w.c.a},
hb8(d){$.aU.x1$.push(new C.fpa(d))},
hbs(d){var w=$.rC().gbd(),v=w!=null
if(!v||w.c==null)return
if(C.hbg(w)==="GamePlayScreen")if(v&&w.c!=null&&w.p8())w.eF()},
hbr(d){C.h89(d,0)},
h89(d,e){var w,v
if(e>4)return
w=d==null?$.rC().gbd():d
if(w==null||w.c==null)return
v=C.hbg(w)
if(v==="GameCenterScreen")return
if(D.eB0.t(0,v)&&w.p8()){w.eF()
$.aU.x1$.push(new C.fcn(w,e))}},
aNF(d,e,f){return A.ei(A.cm(new C.fqK(e,d,f)),e,!0)},
fpn:function fpn(d){this.a=d},
fpa:function fpa(d){this.a=d},
fp9:function fp9(d){this.a=d},
fcn:function fcn(d,e){this.a=d
this.b=e},
fqK:function fqK(d,e,f){this.a=d
this.b=e
this.c=f},
ao0(d,e){var w=0,v=A.j(x.H),u
var $async$ao0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=A.U4(e)
w=2
return A.b(A.ao_(d,u),$async$ao0)
case 2:A.a5X(d,u)
return A.h(null,v)}})
return A.i($async$ao0,v)},
ui(d,e,f,g,h,i,j,k){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$ui=A.e(function(l,m){if(l===1)return A.f(m,v)
for(;;)switch(w){case 0:o=A.xR(g)
if(o.length===0){w=1
break}t=e==null?A.Kd(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return A.b(A.MB(o),$async$ui)
case 3:q=m
if(j!=null&&j.length!==0&&J.qA(q,new C.c65(j))){w=1
break}p=e==null?new A.Q(Date.now(),0,!1):e
J.pf(q,0,new A.j3(B.o.u(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return A.b(C.ao0(o,q),$async$ui)
case 4:if(i==null||r==null||s)C.a5Z(o).bz(new C.c66(),x.S).eP(new C.c67())
case 1:return A.h(u,v)}})
return A.i($async$ui,v)},
a5Z(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a5Z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=$.hcp
m=A.xR(d)
if(n==null||m.length===0){w=1
break}w=3
return A.b(A.MB(m),$async$a5Z)
case 3:t=f
s=J.cD(t)
if(!s.b8(t,new C.c64())){w=1
break}w=4
return A.b(n.$2(m,t),$async$a5Z)
case 4:r=f
q=J.a7(r)
if(q.gM(r)!==s.gM(t)){w=1
break}for(p=!1,o=0;o<s.gM(t);++o)if(B.R.ao(s.h(t,o).ad(),null)!==B.R.ao(q.h(r,o).ad(),null))p=!0
w=p?5:6
break
case 5:w=7
return A.b(C.ao0(m,r),$async$a5Z)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$a5Z,v)},
aYa(d){var w=0,v=A.j(x.S),u,t
var $async$aYa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fJY(d,!1),$async$aYa)
case 3:t=J
w=4
return A.b(C.ao1(d,!1),$async$aYa)
case 4:u=t.dG(f,new C.c63(new A.Q(Date.now(),0,!1).bN(-864e8))).gM(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYa,v)},
ao1(d,e){var w=0,v=A.j(x.ac),u,t,s,r
var $async$ao1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=A.xR(d)
if(r.length===0){u=A.a([],x.gi)
w=1
break}w=3
return A.b(A.MB(r),$async$ao1)
case 3:t=g
s=A.U4(t)
if(s.length!==J.ab(t))C.ao0(r,s)
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ao1,v)},
hST(d){var w,v,u,t=new A.Q(Date.now(),0,!1),s=t.by(d).a,r=B.o.an(s,6e7)
if(r<1)return"Just now"
w=B.o.an(s,36e8)
if(w<1)return""+r+"m ago"
if(B.o.an(s,864e8)<1)return""+w+"h ago"
v=B.o.F(A.dg(d),12)===0?12:B.o.F(A.dg(d),12)
s=B.i8[A.bF(d)-1]
r=A.bx(d)===A.bx(t)?"":", "+A.bx(d)
w=B.a.aT(B.o.u(A.fX(d)),2,"0")
u=A.dg(d)<12?"AM":"PM"
return s+" "+A.bP(d)+r+" \xb7 "+v+":"+w+" "+u},
bxA(d){var w=B.k.aa(Math.abs(d),2).split(".")
return"$"+A.or(w[0],A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fax(),null)+"."+w[1]},
bB7(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$bB7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ao1(e,!1),$async$bB7)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
A.fJY(e,!0).bz(new C.fCi(e),t).bz(new C.fCj(),t).eP(new C.fCk())
w=4
return A.b(A.c_(B.K,null,new C.fCl(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bB7)
case 4:case 1:return A.h(u,v)}})
return A.i($async$bB7,v)},
fMN(d,e,f){var w=null,v=B.c.j(0.05),u=A.m(14),t=A.I(f.j(0.35),B.r,1)
return A.D(A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),B.bB,A.f4(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.dt)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.hF,w,w,w),1)},
dRn(d,e,f){var w=null,v=B.w.j(0.22),u=A.m(8),t=A.I(f.j(0.28),B.r,1)
return A.D(A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.f4(B.a3,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.eg)],x.p),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.Ln,w,w,w),1)},
c65:function c65(d){this.a=d},
c66:function c66(){},
c67:function c67(){},
c64:function c64(){},
c63:function c63(d){this.a=d},
fax:function fax(){},
fCi:function fCi(d){this.a=d},
fCj:function fCj(){},
fCk:function fCk(){},
fCl:function fCl(d,e){this.a=d
this.b=e},
fCh:function fCh(d,e){this.a=d
this.b=e},
fCg:function fCg(d){this.a=d},
abU:function abU(d,e){this.c=d
this.a=e},
dRp:function dRp(){},
dRq:function dRq(){},
dRr:function dRr(){},
dRs:function dRs(d){this.a=d},
dRu:function dRu(){},
dRt:function dRt(d){this.a=d},
abT:function abT(d,e){this.c=d
this.a=e},
dRo:function dRo(){},
bB8(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return A.hQ(B.aX,!1,w,d,new C.fCo(j,i,h,g,e,f),null,B.eM,!1,x.H)},
fCo:function fCo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fCm:function fCm(d,e){this.a=d
this.b=e},
fCn:function fCn(d,e){this.a=d
this.b=e},
ayx:function ayx(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bd7:function bd7(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bq$=e
_.a7$=f
_.c=_.a=null},
d8v:function d8v(d,e){this.a=d
this.b=e},
d8u:function d8u(){},
aci:function aci(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aIL:function aIL(){},
aoM(d,e,f){return new C.aZ0(f,d,e,null)},
hts(d){var w=A.a(B.k.aa(d,2).split("."),x.s),v=A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=A.or(w[0],v,new C.c7G(),null)
return B.d.aH(w,".")},
aYd(){var w=$.t0
if((w>0?$.t0=w-1:w)<=0)$.t0=0},
afD(d,e){var w=0,v=A.j(x.H),u
var $async$afD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=$.fRa
w=u!=null?2:3
break
case 2:w=4
return A.b(u.$2(d,e),$async$afD)
case 4:case 3:return A.h(null,v)}})
return A.i($async$afD,v)},
aZ0:function aZ0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c7H:function c7H(d){this.a=d},
c7G:function c7G(){},
M4:function M4(){},
bXm:function bXm(){},
fQA(d){if(d>0)return"+"+d
return""+d},
fPY(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fqL(d,e){var w=J.q(e,d)
if(w==null)w=A.fpx().h(0,d)
return w==null?90:w},
f9v(d,e){var w,v,u=A.aY(x.S)
while(u.a<3){w=e.aD(41)-20
if(w===0)continue
u.J(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.J(0,d+v*7+3)
v=A.a([B.o.u(d)],x.s)
B.d.v(v,new A.jH(u,new C.f9w(),u.$ti.k("jH<cl.E,n>")))
B.d.fn(v,e)
return v},
h79(d,e,f){var w,v,u,t,s=A.aY(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.J(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.J(0,f[B.o.F(u,5)]+u);++u}t=A.a([d],x.s)
B.d.v(t,A.oY(s,3,s.$ti.k("cl.E")))
B.d.fn(t,e)
return t},
hO4(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=A.a([],x.dA),b2=new A.eT()
b2.dI(42)
for(w=x.s,v=0;v<200;++v){u=B.o.F(v,5)
if(u===0){t=[4,9,16,25,36,49,64,81,121,144,196,256][b2.aD(12)]
s=[2,3,5,6,7,10,11,13][b2.aD(8)]
r=B.k.O(Math.sqrt(t))
q=2+b2.aD(4)
p=B.o.an(q,2)
if((q&1)===0){o=""+r
n=""+s
m=p===1?o+"\u221a"+n:o+"x^"+p+"\u221a"+n}else{o=""+r
n=""+s
m=p===0?o+"\u221a"+n+"x":o+"x^"+p+"\u221a"+n+"x"}o=""+p
n=""+s
l=""+r+"x^"
b1.push(new C.HN("Simplify \u221a("+t*s+"x^"+q+")",m,C.h79(m,b2,A.a([""+(r+1)+"x^"+o+"\u221a"+n,A.t(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aD(35)
j=b2.aD(4)===0?1:2+b2.aD(4)
i=b2.aD(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.HN("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.f9v(k,b2)))}else if(u===2){k=2+b2.aD(18)
j=b2.aD(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aD(10)+2
b1.push(new C.HN("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.f9v(g,b2)))}else b1.push(new C.HN("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.f9v(k,b2)))}else if(u===3){e=b2.aD(11)-5
o=b2.aD(11)
n=b2.aD(11)
d=b2.aD(11)+2
l=b2.hc()?1:-1
a0=e+l*(b2.aD(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===B.k.jJ(a4)?""+B.k.O(a4):"\u221a"+a3
b1.push(new C.HN("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.f9v(a0,b2)))}else{a6=2+b2.aD(10)
a7=a6+2+b2.aD(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.HN("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.h79(m,b2,A.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
hYG(d){var w,v,u=x.s,t=A.a(d.split(""),u)
if(t.length<4)return new A.dz(A.a(d.split(""),u),x.bJ).fS(0)
for(w=0;w<12;++w){B.d.fn(t,B.cH)
v=B.d.fS(t)
if(v!==d)return v}return new A.dz(t,x.bJ).fS(0)},
HN:function HN(d,e,f){this.a=d
this.b=e
this.c=f},
f9w:function f9w(){},
anp:function anp(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBn:function aBn(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
dKp:function dKp(d){this.a=d},
dKq:function dKq(d){this.a=d},
dKr:function dKr(d){this.a=d},
dKs:function dKs(d,e){this.a=d
this.b=e},
dKt:function dKt(d,e){this.a=d
this.b=e},
dKu:function dKu(d){this.a=d},
dKo:function dKo(d){this.a=d},
dKv:function dKv(d){this.a=d},
dKn:function dKn(d){this.a=d},
dKy:function dKy(d){this.a=d},
dKz:function dKz(d){this.a=d},
dKx:function dKx(d,e){this.a=d
this.b=e},
dKw:function dKw(d,e){this.a=d
this.b=e},
ao2:function ao2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBE:function aBE(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
dRM:function dRM(d,e,f){this.a=d
this.b=e
this.c=f},
dRN:function dRN(d){this.a=d},
dRI:function dRI(d){this.a=d},
dRK:function dRK(d,e){this.a=d
this.b=e},
dRJ:function dRJ(d,e){this.a=d
this.b=e},
dRL:function dRL(d,e){this.a=d
this.b=e},
dRH:function dRH(d){this.a=d},
hpF(d){var w,v,u,t,s,r,q,p=new A.Q(Date.now(),0,!1),o=p.bN(36e8)
try{w=d.h(0,"start")
p=A.mC(J.k(w==null?"":w)).bQ()
w=d.h(0,"end")
o=A.mC(J.k(w==null?"":w)).bQ()}catch(v){}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"title")
u=J.k(u==null?"Event":u)
t=p
s=o
r=d.h(0,"notes")
r=r==null?null:J.k(r)
q=d.h(0,"location")
return new C.r_(w,u,t,s,r,q==null?null:J.k(q))},
a64(d){var w=0,v=A.j(x.ck),u,t,s,r,q,p,o
var $async$a64=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.b)
w=1
break}w=3
return A.b(A.ay(),$async$a64)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aT(J.q(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.b)
w=1
break}try{s=B.R.aG(0,t,null)
if(!x.j.b(s)){p=A.a([],x.b)
u=p
w=1
break}p=J.d7(s,x.f)
p=A.cC(p,new C.c6x(),p.$ti.k("G.E"),x.b1)
p=A.B(p,A.a2(p).k("G.E"))
B.d.b1(p,new C.c6y())
u=p
w=1
break}catch(n){r=A.a8(n)
$.am.$1("[calendar-memory] load: "+A.t(r))
p=A.a([],x.b)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$a64,v)},
aok(d,e){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$aok=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.a64(d),$async$aok)
case 2:r=g
q=J.cD(r)
q.bn(r,new C.c6u(e))
q.J(r,e)
q.b1(r,new C.c6v())
w=3
return A.b(A.ay(),$async$aok)
case 3:u=g
t=B.a.i(d.toLowerCase())
q=q.ke(r,80)
s=q.$ti.k("J<aj.E,a3<n,@>>")
q=A.B(new A.J(q,new C.c6w(),s),s.k("aj.E"))
w=4
return A.b(u.aq("String","ngmy_helper_calendar_v1_"+t,B.R.ao(q,null)),$async$aok)
case 4:return A.h(null,v)}})
return A.i($async$aok,v)},
ht0(d,e){var w=Date.now(),v=new A.Q(w,0,!1).bQ()
w=J.dG(d,new C.c6z(v,v.bN(A.dA(14,0,0,0,0,0).a)))
w=A.B(w,w.$ti.k("G.E"))
return w},
fZS(d){var w,v,u,t,s,r,q,p,o,n,m=C.ht0(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=A.da(m,0,A.dJ(20,"count",x.S),A.T(m).c),v=w.$ti,w=new A.bW(w,w.gM(0),v.k("bW<aj.E>")),v=v.k("aj.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=B.o.F(A.dg(s),12)===0?12:B.o.F(A.dg(s),12)
q=A.dg(s)>=12?"PM":"AM"
p=B.a.aT(B.o.u(A.fX(s)),2,"0")
o=t.f
if((o==null?null:B.a.i(o).length!==0)===!0){o.toString
n=" @ "+B.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+A.bF(s)+"/"+A.bP(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&B.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return B.a.i(u.charCodeAt(0)==0?u:u)},
r_:function r_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c6x:function c6x(){},
c6y:function c6y(){},
c6u:function c6u(d){this.a=d},
c6v:function c6v(){},
c6w:function c6w(){},
c6z:function c6z(d,e){this.a=d
this.b=e},
hpG(d){var w,v,u,t,s,r,q,p,o=null,n=new A.Q(Date.now(),0,!1)
try{w=d.h(0,"when")
n=A.mC(J.k(w==null?"":w)).bQ()}catch(v){}w=d.h(0,"id")
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
return new C.r0(w,u,t,s,r,q,J.k(p==null?"user":p))},
fYd(d){var w=B.o.F(A.dg(d),12)===0?12:B.o.F(A.dg(d),12),v=A.dg(d)>=12?"PM":"AM"
return""+A.bF(d)+"/"+A.bP(d)+" "+w+":"+B.a.aT(B.o.u(A.fX(d)),2,"0")+" "+v},
Td(d){var w=0,v=A.j(x.e),u,t,s,r,q,p,o
var $async$Td=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.x)
w=1
break}w=3
return A.b(A.ay(),$async$Td)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aT(J.q(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.x)
w=1
break}try{s=B.R.aG(0,t,null)
if(!x.j.b(s)){p=A.a([],x.x)
u=p
w=1
break}p=J.d7(s,x.f)
p=A.cC(p,new C.bZK(),p.$ti.k("G.E"),x.Q)
p=A.B(p,A.a2(p).k("G.E"))
B.d.b1(p,new C.bZL())
u=p
w=1
break}catch(n){r=A.a8(n)
$.am.$1("[call-memory] load: "+A.t(r))
p=A.a([],x.x)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Td,v)},
aWy(d,e){var w=0,v=A.j(x.H),u,t,s,r
var $async$aWy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$aWy)
case 2:u=g
t=A.da(e,0,A.dJ(120,"count",x.S),A.T(e).c).dC(0)
s=B.a.i(d.toLowerCase())
r=A.T(t).k("J<1,a3<n,@>>")
r=A.B(new A.J(t,new C.bZI(),r),r.k("aj.E"))
w=3
return A.b(u.aq("String","ngmy_call_memory_v1_"+s,B.R.ao(r,null)),$async$aWy)
case 3:return A.h(null,v)}})
return A.i($async$aWy,v)},
aWz(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$aWz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:p=A.U(x.N,x.Q)
o=J
w=2
return A.b(C.Td(d),$async$aWz)
case 2:u=o.aW(g)
case 3:if(!u.C()){w=4
break}t=u.gU(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("bc<2>")
q=A.B(new A.bc(p,u),u.k("G.E"))
B.d.b1(q,new C.bZJ())
w=5
return A.b(C.aWy(d,q),$async$aWz)
case 5:return A.h(null,v)}})
return A.i($async$aWz,v)},
bZM(d,e){var w=0,v=A.j(x.e),u,t,s
var $async$bZM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Td(d),$async$bZM)
case 3:t=s.dG(g,new C.bZN(e.bN(-72e8),e.bN(72e8)))
t=A.B(t,t.$ti.k("G.E"))
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bZM,v)},
fYe(d,e){var w,v,u,t,s,r=J.a7(d)
if(r.gal(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.ke(d,e),v=w.$ti,w=new A.bW(w,w.gM(0),v.k("bW<aj.E>")),v=v.k("aj.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gUb()+"\n"
t=t.f
if(t!=null&&B.a.i(t).length!==0){s=B.a.i(t)
u+="  Voicemail/text: "+(s.length>180?B.a.ap(s,0,177)+"\u2026":s)+"\n"}}r=r.gM(d)>e?u+("\u2026 and "+(r.gM(d)-e)+" more\n"):u
return B.a.i(r.charCodeAt(0)==0?r:r)},
hUI(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new A.Q(q,0,!1).bQ(),o=d.toLowerCase(),n=A.bZ(A.bx(p),A.bF(p),A.bP(p),0,0,0,0,0)
if(B.a.t(o,"yesterday"))n=n.bN(r)
else if(!B.a.t(o,"today")&&B.a.t(o,"last night"))n=n.bN(r)
w=A.af("\\b(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!0,!1,!1,!1).cB(o)
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
return A.bZ(A.bx(n),A.bF(n),A.bP(n),u,t,0,0,0)},
hcP(d){var w=A.af("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
r0:function r0(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bZK:function bZK(){},
bZL:function bZL(){},
bZI:function bZI(){},
bZJ:function bZJ(){},
bZN:function bZN(d,e){this.a=d
this.b=e},
fZV(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lr(t,w,v,u==null?null:J.k(u))},
ht6(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b6(v,new C.c6F(),x.bP)
v=A.B(v,v.$ti.k("aj.E"))}if(v==null)v=D.cYr
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.y(d.h(0,"printable"),!0)
return new C.ie(r,w,v,u,t,typeof d.h(0,s)=="number"?B.k.O(A.f8(d.h(0,s))):0)},
ht5(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.hGF(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?B.k.O(A.f8(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?B.k.O(A.f8(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b6(s,new C.c6D(),x.u)
s=A.B(s,s.$ti.k("aj.E"))}return new C.i_(p,w,v,u,s==null?D.auD:s,t)},
hGG(d){var w,v,u,t=A.E([F.B2,"investments",B.or,"games",B.jr,"loans",B.hx,"withdrawals",B.kH,"deposits",B.kI,"civic",B.kG,"store",B.qS,"jobs",B.md,"refunds",B.eP,"account",B.lA,"music",B.xz,"help"],x.dk,x.N)
for(w=new A.cI(t,A.a2(t).k("cI<1,2>")).gai(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
hGF(d){switch(d){case"investments":return F.B2
case"games":return B.or
case"loans":return B.jr
case"withdrawals":return B.hx
case"deposits":return B.kH
case"civic":return B.kI
case"store":return B.kG
case"jobs":return B.qS
case"refunds":return B.md
case"account":return B.eP
case"music":return B.lA
default:return B.xz}},
mQ(d){var w=A.a([new C.lr("text",d,null,null)],x.a)
return w},
afA(){var w=null,v=x.v
return A.a([new C.i_("investments","Investments",F.B2,4280468830,A.a([new C.ie("inv1","How do I buy an investment plan?",C.mQ("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.ie("inv2","When do I get paid from my plan?",C.mQ("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.ie("inv3","Can I have more than one plan?",C.mQ("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.i_("games","Games",B.or,4287323382,A.a([new C.ie("gam1","How do NGMY games work?",C.mQ("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.ie("gam2","Why did my game payout change?",C.mQ("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.i_("loans","Loans",B.jr,4294538006,A.a([new C.ie("loan1","How do I apply for a loan?",C.mQ("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.ie("loan2","What is the repayment period?",C.mQ("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.i_("withdrawals","Withdrawals",B.hx,4282090230,A.a([new C.ie("wd1","How do I withdraw money?",C.mQ("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.ie("wd2","Why is my withdrawal pending?",C.mQ("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.i_("deposits","Deposits",B.kH,4279548070,A.a([new C.ie("dep1","How do I deposit funds?",C.mQ("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.ie("dep2","How long until my deposit posts?",C.mQ("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.i_("civic","Civic Registry",B.kI,4289170426,A.a([new C.ie("civ1","What is Civic Registry?",C.mQ("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.ie("civ2","What does \u201cmissed\u201d mean on my profile?",C.mQ("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.i_("store","NGMY Store",B.kG,4293675161,A.a([new C.ie("sto1","How do I buy from NGMY Store?",C.mQ("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.ie("sto2","How do I sell in the store?",C.mQ("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.i_("jobs","Jobs & Creator",B.qS,4293548044,A.a([new C.ie("job1","How do I find jobs?",C.mQ("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.ie("job2","How do I post a job?",C.mQ("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.i_("refunds","Refunds",B.md,4293870660,A.a([new C.ie("ref1","Can I get a refund?",C.mQ("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.ie("ref2","How long do refunds take?",C.mQ("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.i_("account","Account",B.eP,4281908728,A.a([new C.ie("acc1","How do I update my profile?",C.mQ("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.ie("acc2","I forgot my password \u2014 what now?",C.mQ("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.i_("music","Music Charts",B.lA,4290807036,A.a([new C.ie("mus1","What are Music Charts?",C.mQ("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.ie("mus2","How do I upload music?",C.mQ("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.i_("help","Help Center",B.xz,4279080072,A.a([new C.ie("hlp1","Where can I get live help?",C.mQ("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.ie("hlp2","How do daily Helper limits work?",C.mQ("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
fZW(d){var w,v=J.a7(d),u=v.gal(d)
if(u)return C.afA()
v=v.dr(d,new C.c6I(),x.i)
w=A.B(v,v.$ti.k("aj.E"))
B.d.b1(w,new C.c6J())
return w.length===0?C.afA():w},
fZX(d){var w=J.b6(d,new C.c6K(),x.P)
w=A.B(w,w.$ti.k("aj.E"))
return A.E(["categories",w,"savedAt",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.z)},
aom(d){return C.ht7(d)},
ht7(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q,p
var $async$aom=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.ay(),$async$aom)
case 6:s=f
w=7
return A.b(s.aq("String","ngmy_helper_kb_v1",B.R.ao(C.fZX(d),null)),$async$aom)
case 7:u=1
w=5
break
case 3:u=2
p=t.pop()
r=A.a8(p)
$.am.$1("[helper kb] local save: "+A.t(r))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$aom,v)},
c6H(){var w=0,v=A.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$c6H=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$c6H)
case 7:r=e
q=A.aT(J.q(r.a,"ngmy_helper_kb_v1"))
if(q==null||B.a.i(q).length===0){l=C.afA()
u=l
w=1
break}p=B.R.aG(0,q,null)
if(!x.f.b(p)){l=C.afA()
u=l
w=1
break}o=J.q(p,"categories")
if(!x.j.b(o)){l=C.afA()
u=l
w=1
break}n=C.fZW(o)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
m=A.a8(j)
$.am.$1("[helper kb] local load: "+A.t(m))
l=C.afA()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$c6H,v)},
aYz(){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$aYz=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c0(),$async$aYz)
case 7:if(!e){u=null
w=1
break}w=8
return A.b(A.f0("ngmy_helper_kb",null,!1,B.bG),$async$aYz)
case 8:q=e
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a8(o)
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
return A.i($async$aYz,v)},
aYA(d){return C.ht8(d)},
ht8(d){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aYA=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c0(),$async$aYA)
case 7:if(!f){u=!1
w=1
break}w=8
return A.b(A.hz("ngmy_helper_kb",d,!1,!1,B.cF,null),$async$aYA)
case 8:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a8(o)
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
return A.i($async$aYA,v)},
aon(){var w=0,v=A.j(x.I),u,t,s,r
var $async$aon=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c6H(),$async$aon)
case 3:s=e
w=4
return A.b(C.aYz(),$async$aon)
case 4:r=e
w=r!=null&&x.j.b(J.q(r,"categories"))?5:6
break
case 5:t=C.fZW(x.j.a(J.q(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return A.b(C.aom(t),$async$aon)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aon,v)},
c6L(d){var w=0,v=A.j(x.y),u
var $async$c6L=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aom(d),$async$c6L)
case 3:u=C.aYA(C.fZX(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6L,v)},
lr:function lr(d,e,f,g){var _=this
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
c6G:function c6G(){},
c6F:function c6F(){},
i_:function i_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c6E:function c6E(){},
c6D:function c6D(){},
c6I:function c6I(){},
c6J:function c6J(){},
c6K:function c6K(){},
b6M:function b6M(d){this.a=d},
Ub:function Ub(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBQ:function aBQ(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
dVr:function dVr(){},
dVs:function dVs(){},
dVl:function dVl(d){this.a=d},
dVm:function dVm(d){this.a=d},
dV4:function dV4(d,e){this.a=d
this.b=e},
dV5:function dV5(d){this.a=d},
dV6:function dV6(d,e,f){this.a=d
this.b=e
this.c=f},
dV3:function dV3(d){this.a=d},
dVi:function dVi(d,e){this.a=d
this.b=e},
dVj:function dVj(d,e){this.a=d
this.b=e},
dVk:function dVk(d){this.a=d},
dVc:function dVc(d){this.a=d},
dVd:function dVd(d,e,f){this.a=d
this.b=e
this.c=f},
dVb:function dVb(d,e){this.a=d
this.b=e},
dVh:function dVh(d,e,f){this.a=d
this.b=e
this.c=f},
dVg:function dVg(d,e){this.a=d
this.b=e},
dVf:function dVf(d,e){this.a=d
this.b=e},
dVe:function dVe(d,e,f){this.a=d
this.b=e
this.c=f},
dV8:function dV8(d){this.a=d},
dV7:function dV7(d){this.a=d},
dV9:function dV9(d,e){this.a=d
this.b=e},
dVa:function dVa(d){this.a=d},
dVq:function dVq(d,e){this.a=d
this.b=e},
dVp:function dVp(d,e){this.a=d
this.b=e},
dVo:function dVo(){},
dVn:function dVn(d,e){this.a=d
this.b=e},
Os:function Os(d,e){this.c=d
this.a=e},
b8C:function b8C(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cId:function cId(d){this.a=d},
cIc:function cIc(d,e){this.a=d
this.b=e},
cIa:function cIa(d,e){this.a=d
this.b=e},
cIe:function cIe(d){this.a=d},
cIb:function cIb(d,e){this.a=d
this.b=e},
cI9:function cI9(d,e){this.a=d
this.b=e},
cIf:function cIf(d){this.a=d},
cIg:function cIg(d,e){this.a=d
this.b=e},
ZF:function ZF(d,e,f){this.c=d
this.d=e
this.a=f},
aDO:function aDO(){this.d=$
this.c=this.a=null},
eI3:function eI3(d,e){this.a=d
this.b=e},
eI4:function eI4(d){this.a=d},
eIa:function eIa(){},
eI9:function eI9(d,e){this.a=d
this.b=e},
eI8:function eI8(d,e){this.a=d
this.b=e},
eI5:function eI5(d,e){this.a=d
this.b=e},
eI7:function eI7(d,e,f){this.a=d
this.b=e
this.c=f},
eI6:function eI6(d,e,f){this.a=d
this.b=e
this.c=f},
ZE:function ZE(d,e){this.c=d
this.a=e},
aDN:function aDN(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
eI_:function eI_(d,e){this.a=d
this.b=e},
eHY:function eHY(d){this.a=d},
eHZ:function eHZ(d,e){this.a=d
this.b=e},
eI1:function eI1(d,e){this.a=d
this.b=e},
eI2:function eI2(d){this.a=d},
eI0:function eI0(d,e){this.a=d
this.b=e},
ht3(d){var w=new A.J(d,new C.c6A(),A.T(d).k("J<1,n>")).aH(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
c6B(d,e,f){return C.ht4(d,e,f)},
ht4(b4,b5,b6){var w=0,v=A.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$c6B=A.e(function(b8,b9){if(b8===1)return A.f(b9,v)
for(;;)switch(w){case 0:b3=B.a.i(b5)
if(b3.length===0){u=new A.Jm([A.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return A.b(A.qx(A.mT(b3),C.ht3(b6)+"\n\nAdmin instruction:\n"+b4,B.hj,null),$async$c6B)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=B.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new A.Jm([A.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=B.a.i(a3)
if(J.cZ(s,"```"))s=B.a.e6(J.fTW(s,A.af("^```(?:json)?\\s*",!0,!1,!1,!1),""),A.af("\\s*```$",!0,!1,!1,!1),"")
r=B.R.aG(0,s,null)
a3=x.f
if(!a3.b(r)){a3=A.a([],x.Y)
u=new A.Jm([a3,"AI response was not valid JSON.",null,null])
w=1
break}a4=x.N
a5=x.z
q=A.a0(r,a4,a5)
a6=J.q(q,"message")
p=a6==null?null:J.k(a6)
a6=J.q(q,"replaceCategoryId")
o=a6==null?null:J.k(a6)
n=J.q(q,"categories")
a6=x.j
if(!a6.b(n)||J.ck(n)){a3=A.a([],x.Y)
u=new A.Jm([a3,"AI did not return any categories.",p,o])
w=1
break}m=A.a([],x.Y)
l=b6.length
for(k=0,a7=x.v,a8=x.a;k<J.ab(n);++k){j=A.a0(a3.a(J.q(n,k)),a4,a5)
i="cat_ai_"+1000*Date.now()+"_"+A.t(k)
h=J.q(j,"questions")
g=A.a([],a7)
if(a6.b(h))for(f=0;f<J.ab(h);++f){e=A.a0(a3.a(J.q(h,f)),a4,a5)
d=J.q(e,"answerBlocks")
a0=A.a([],a8)
if(a6.b(d))for(a9=J.aW(d);a9.C();){a1=a9.gU(a9)
J.cf(a0,C.fZV(A.a0(a3.a(a1),a4,a5)))}if(J.ab(a0)===0){a9=J.q(e,"answer")
J.cf(a0,new C.lr("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=A.t(f)
b1=J.q(e,"question")
J.cf(g,new C.ie("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.y(J.q(e,"printable"),!0),f))}a9=J.q(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.q(j,"iconKey")
b0=C.ht2(J.k(b0==null?"help":b0))
b1=typeof J.q(j,"colorValue")=="number"?B.k.O(A.f8(J.q(j,"colorValue"))):4284773515
J.cf(m,new C.i_(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ab(a3)!==0)===!0?o:null
u=new A.Jm([m,null,p,a3])
w=1
break}catch(b7){a2=A.a8(b7)
a3=A.t(a2)
a4=A.a([],x.Y)
u=new A.Jm([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c6B,v)},
ht2(d){switch(d){case"investments":return F.B2
case"games":return B.or
case"loans":return B.jr
case"withdrawals":return B.hx
case"deposits":return B.kH
case"civic":return B.kI
case"store":return B.kG
case"jobs":return B.qS
case"refunds":return B.md
case"account":return B.eP
case"music":return B.lA
default:return B.xz}},
hTe(d,e,f){var w,v,u,t=A.bl(d,!0,x.i)
if(f!=null&&J.ab(e)===1){w=B.d.be(t,new C.fr7(f))
if(w>=0){t[w]=J.fn(e).cCD(f,t[w].f)
return t}}B.d.v(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].b8o(u)
return t},
c6A:function c6A(){},
fr7:function fr7(d){this.a=d},
cZF:function cZF(d){this.a=d},
Uc:function Uc(d,e,f){this.c=d
this.d=e
this.a=f},
aBS:function aBS(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
dW1:function dW1(){},
dVI:function dVI(d,e){this.a=d
this.b=e},
dVN:function dVN(d,e){this.a=d
this.b=e},
dVL:function dVL(d,e){this.a=d
this.b=e},
dVJ:function dVJ(d){this.a=d},
dVK:function dVK(d){this.a=d},
dVM:function dVM(d,e,f){this.a=d
this.b=e
this.c=f},
dVE:function dVE(){},
dVF:function dVF(){},
dVG:function dVG(){},
dVH:function dVH(){},
dVS:function dVS(d,e){this.a=d
this.b=e},
dVT:function dVT(d){this.a=d},
dVU:function dVU(d){this.a=d},
dVV:function dVV(d){this.a=d},
dVW:function dVW(d){this.a=d},
dVX:function dVX(d){this.a=d},
dVY:function dVY(){},
dVZ:function dVZ(d){this.a=d},
dVR:function dVR(d){this.a=d},
dW_:function dW_(d){this.a=d},
dVQ:function dVQ(d){this.a=d},
dW0:function dW0(d,e){this.a=d
this.b=e},
dVP:function dVP(d,e){this.a=d
this.b=e},
dVO:function dVO(d,e){this.a=d
this.b=e},
hAS(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.a([],x.eO)
for(w=A.af("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kH(0,d),w=new A.IR(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=B.a.ap(d,t,q)
o=u?B.cm:B.aJ
m.push(new A.es(p,n,n,B.cQ,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?B.cm:B.aJ
m.push(new A.es(p,n,n,B.cQ,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,B.I,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?B.cm:B.aJ
m.push(new A.es(p,n,n,B.cQ,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,B.cD,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?B.cm:B.aJ
m.push(new A.es(p,n,n,B.cQ,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,B.mq,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=B.a.b_(d,t)
m.push(A.dn(n,n,n,n,n,n,n,n,n,A.l(n,n,u?B.cm:B.aJ,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return A.tb(n,n,n,B.eB,n,n,!0,n,A.dn(m,n,n,n,n,n,n,n,n,n,n),B.a5,n,n,B.de,B.cg)},
dcM:function dcM(d){this.a=d},
azq:function azq(d,e){this.a=d
this.b=e},
aol:function aol(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBR:function aBR(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
dVB:function dVB(d,e){this.a=d
this.b=e},
dVC:function dVC(d,e){this.a=d
this.b=e},
dVt:function dVt(d){this.a=d},
dVu:function dVu(d){this.a=d},
dVD:function dVD(){},
dVw:function dVw(d,e){this.a=d
this.b=e},
dVv:function dVv(d,e){this.a=d
this.b=e},
dVy:function dVy(){},
dVA:function dVA(){},
dVz:function dVz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dVx:function dVx(d,e){this.a=d
this.b=e},
azo:function azo(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aar:function aar(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aYy:function aYy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c6C:function c6C(d){this.a=d},
aaj:function aaj(d,e,f){this.c=d
this.d=e
this.a=f},
cBU:function cBU(d){this.a=d},
cBV:function cBV(){},
cBW:function cBW(d){this.a=d},
azp:function azp(d,e,f){this.c=d
this.d=e
this.a=f},
beC:function beC(){this.c=this.a=this.d=null},
dcN:function dcN(d,e){this.a=d
this.b=e},
dcP:function dcP(d,e){this.a=d
this.b=e},
dcO:function dcO(d){this.a=d},
huB(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
huC(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
huA(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
h74(d){var w
if(new A.a1(A.a(d.split("\n"),x.s),new C.f9g(),x.cc).gM(0)<3)w=d.length>100&&B.a.t(d,"\n")
else w=!0
return w},
hUn(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.huA(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
ap8:function ap8(d,e){this.a=d
this.b=e},
HS:function HS(d,e){this.a=d
this.b=e},
r6:function r6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9g:function f9g(){},
aoo:function aoo(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBT:function aBT(d,e,f,g,h,i,j){var _=this
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
dWf:function dWf(d,e){this.a=d
this.b=e},
dW6:function dW6(d){this.a=d},
dW8:function dW8(){},
dW9:function dW9(d,e){this.a=d
this.b=e},
dWa:function dWa(d){this.a=d},
dWb:function dWb(){},
dWc:function dWc(d,e){this.a=d
this.b=e},
dWd:function dWd(d){this.a=d},
dWe:function dWe(d){this.a=d},
dW7:function dW7(d,e){this.a=d
this.b=e},
dWm:function dWm(d,e){this.a=d
this.b=e},
dWj:function dWj(){},
dWk:function dWk(d,e){this.a=d
this.b=e},
dWl:function dWl(d,e){this.a=d
this.b=e},
dWi:function dWi(d,e){this.a=d
this.b=e},
dWh:function dWh(d,e){this.a=d
this.b=e},
dWo:function dWo(d){this.a=d},
dWn:function dWn(d){this.a=d},
dW5:function dW5(d,e){this.a=d
this.b=e},
dW4:function dW4(d,e){this.a=d
this.b=e},
dWp:function dWp(d,e){this.a=d
this.b=e},
dWg:function dWg(d,e){this.a=d
this.b=e},
dW2:function dW2(d){this.a=d},
dW3:function dW3(d){this.a=d},
aJX:function aJX(){},
c6N(d){var w=0,v=A.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$c6N=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=D.Ql
w=1
break}w=3
return A.b(A.ay(),$async$c6N)
case 3:r=f
q=B.a.i(d.toLowerCase())
t=A.aT(J.q(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.Ql
w=1
break}try{q=A.a0(x.f.a(B.R.aG(0,t,null)),x.N,x.z)
p=J.y(q.h(0,"contacts"),!0)
o=J.y(q.h(0,"calendar"),!0)
n=J.y(q.h(0,"calls"),!0)
q=J.y(q.h(0,"allGrantedOnce"),!0)
u=new C.Ud(p,o,n,q)
w=1
break}catch(l){s=A.a8(l)
$.am.$1("[helper-perms] load: "+A.t(s))
u=D.Ql
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c6N,v)},
aop(d,e){var w=0,v=A.j(x.H),u
var $async$aop=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){w=1
break}w=4
return A.b(A.ay(),$async$aop)
case 4:w=3
return A.b(g.aq("String","ngmy_helper_permissions_v1_"+B.a.i(d.toLowerCase()),B.R.ao(e.ad(),null)),$async$aop)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aop,v)},
c6M(d){var w=0,v=A.j(x.gp),u,t
var $async$c6M=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=new C.Ud(!0,!0,!0,!0)
w=3
return A.b(C.aop(d,t),$async$c6M)
case 3:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6M,v)},
hcQ(d){var w=B.a.i(d.toLowerCase()),v=A.af("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=A.af("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=A.af("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=A.af("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
hcO(d){var w=A.af("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
Ud:function Ud(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bBe(d,e,f,g,h){var w=0,v=A.j(x.H),u,t,s
var $async$bBe=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return A.b(C.aYu(h),$async$bBe)
case 3:if(j){w=1
break}w=4
return A.b(C.aoh(h),$async$bBe)
case 4:if(d.e==null){w=1
break}t=A.qd(d,!0)
t.toString
s=A.de()
s.b=A.o6(new C.fD8(g,e,f,s),!1,!1)
t.ly(0,s.bb())
case 1:return A.h(u,v)}})
return A.i($async$bBe,v)},
fD8:function fD8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fD7:function fD7(d){this.a=d},
Yo:function Yo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayQ:function ayQ(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cQ$=d
_.b2$=e
_.c=_.a=null},
da6:function da6(d){this.a=d},
da7:function da7(d,e,f){this.a=d
this.b=e
this.c=f},
dac:function dac(){},
dab:function dab(d){this.a=d},
da8:function da8(d){this.a=d},
da9:function da9(){},
daa:function daa(d){this.a=d},
aIQ:function aIQ(){},
hu3(d){var w=B.a.i(d),v=A.af("[^A-Z0-9]",!0,!1,!1,!1),u=A.aJ(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
hu2(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
aoV(d){return C.hu0(d)},
hu0(d){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$aoV=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.f0("ngmy_local_deposit_qr_v1_"+B.a.i(d),null,!1,B.bG),$async$aoV)
case 7:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a8(o)
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
return A.i($async$aoV,v)},
aZo(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aZo=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.hu3(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.f0("ngmy_local_deposit_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bG),$async$aZo)
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
q=A.a8(m)
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
return A.i($async$aZo,v)},
h_k(d){var w,v=B.a.i(d)
if(B.a.a0(v,"NGMYLOCALDEP1|")){w=B.a.i(B.a.b_(v,14))
return w.length===0?null:w}return null},
hu1(d,e,f){var w=B.a.i(f)
if(w.length===0)return!1
return B.d.b8(e,new C.c8A(B.a.i(d.toLowerCase()),w))},
h_l(d,e,f,g,h){var w,v,u=J.a7(g),t=u.h(g,"lockedToEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=B.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.px(!1,0,y.u)
if(s!==B.a.i(f.toLowerCase()))return new C.px(!1,0,y.j)
v=B.a.i(h)
if(v.length===0)return new C.px(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.px(!1,0,"Verification code does not match this deposit.")
if(!C.hu1(e,d,w))return new C.px(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
fKd(d,e){var w,v,u="amount",t=J.a7(d),s=t.h(d,"redeemedBy")
if(B.a.i(J.k(s==null?"":s)).length!==0)return D.ds9
s=t.h(d,"lockedToEmail")
w=B.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=B.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){A.aN(t.h(d,u))
return new C.MN(!0,!1,!1,!0)}if(w!==B.a.i(e.toLowerCase())){A.aN(t.h(d,u))
return new C.MN(!0,!1,!0,!1)}A.aN(t.h(d,u))
return new C.MN(!0,!1,!1,!1)},
c8G(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$c8G=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=C.h_k(d)
if(s==null){u=D.Qn
w=1
break}w=3
return A.b(C.aoV(s),$async$c8G)
case 3:t=g
if(t==null){u=D.Qn
w=1
break}u=C.fKd(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c8G,v)},
aZq(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$aZq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aZo(d),$async$aZq)
case 3:s=g
if(s==null||s.length===0){u=D.Qn
w=1
break}w=4
return A.b(C.aoV(s),$async$aZq)
case 4:t=g
if(t==null){u=D.Qn
w=1
break}u=C.fKd(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZq,v)},
c8H(d,e,f,g,h){var w=0,v=A.j(x.D),u,t
var $async$c8H=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aZo(d),$async$c8H)
case 3:t=j
if(t==null||t.length===0){u=new C.px(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.Uy(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c8H,v)},
Uy(d,e,f,g,h){return C.hu4(d,e,f,g,h)},
hu4(a2,a3,a4,a5,a6){var w=0,v=A.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Uy=A.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.h_k(a4)
if(a0==null){u=new C.px(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return A.b(C.aoV(a0),$async$Uy)
case 3:k=a8
if(k==null){u=new C.px(!1,0,y.m)
w=1
break}j=C.fKd(k,a5)
if(j.b){u=new C.px(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.px(!1,0,y.u)
w=1
break}if(j.c){u=new C.px(!1,0,y.j)
w=1
break}i=C.h_l(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=A.aN(J.q(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.px(!1,0,"Invalid deposit amount.")
w=1
break}r=new A.Q(Date.now(),0,!1).a5().ac()
q=B.a.i(a5.toLowerCase())
t=5
w=8
return A.b(A.f0("ngmy_local_deposit_qr_v1_"+B.a.i(a0),null,!1,B.bG),$async$Uy)
case 8:p=a8
if(p==null){u=new C.px(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.q(p,"redeemedBy")
if(B.a.i(J.k(g==null?"":g)).length!==0){u=new C.px(!1,0,"This deposit code was already used.")
w=1
break}o=C.h_l(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=B.a.i(a0)
f=x.N
e=x.z
n=A.dV(p,f,e)
J.aG(n,"redeemedBy",q)
J.aG(n,"redeemedAt",r)
w=9
return A.b(A.hz("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,B.cF,null),$async$Uy)
case 9:n=J.q(p,"shortCode")
m=B.a.i(J.k(n==null?"":n))
w=J.ab(m)!==0?10:11
break
case 10:w=12
return A.b(A.hz("ngmy_local_deposit_code_v1_"+B.a.i(m).toUpperCase(),A.E(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,B.cF,null),$async$Uy)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=A.a8(a1)
$.am.$1("[local deposit qr] redeem: "+A.t(l))
u=new C.px(!1,0,"Could not apply deposit. Check connection and try again.")
w=1
break
w=7
break
case 4:w=2
break
case 7:u=new C.px(!0,h,null)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Uy,v)},
MN:function MN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
px:function px(d,e,f){this.a=d
this.b=e
this.c=f},
c8A:function c8A(d,e){this.a=d
this.b=e},
c8O(d,e){var w
A.fQb(d,e,!1)
A.qv(d.a,d.d,!0,!1)
w=B.a.i("")
if(w.length!==0)A.Ae(!0,!1,d.d,w)},
a6r(d,e){if(d==null)return!1
return A.bx(d)===e.gce()&&A.bF(d)===e.gcb()&&A.bP(d)===e.gcr()},
huc(d){var w=A.dg(d)*60+A.fX(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
h_s(d){if(A.dg(d)>=12)return!1
if(A.ml(d)===6||A.ml(d)===7)return!1
return!0},
c8S(d){var w=d.c?d.bQ():d
return w.cW(A.bZ(A.bx(w),A.bF(w),A.bP(w),12,0,0,0,0))},
fKh(d,e){var w,v,u,t=d.gBE()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a6r(d.fx,e)&&d.fy>0.0001)return B.k.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bQ()
if(!C.c8S(w))return 0
v=A.bZ(e.gce(),e.gcb(),e.gcr(),12,0,0,0,0)
if(!e.cW(v))return t
if(!e.c9(w))return 0
u=B.o.an(v.by(w).a,1000)
if(u<=0)return t
return B.k.D(t*(B.o.D(B.o.an(e.by(w).a,1000),0,u)/u),0,t)},
fKg(d,e){var w,v,u,t,s,r,q,p=new A.Q(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a6r(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bQ():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!B.d.b8(e,new C.c8N(s))&&C.c8S(t)){r=d.gBE()
v=r>0
if(v){q=new A.d1(s,d.a,r,B.fz,B.fa,"Clock-in daily earnings (local)",null,null,B.ck,p)
C.c8O(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a6r(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a6r(o,p)&&!C.c8S(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
c8N:function c8N(d){this.a=d},
hIL(d){var w,v,u=d.k4,t=u==null?null:B.a.i(u)
if(t!=null&&t.length!==0)return t
w=B.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=B.a.i(d.a)
if(B.a.t(v,"@"))return B.d.gK(v.split("@"))
return"Member"},
hZu(d,e,f,g,h,i){return A.ht(d,new C.aoW(f,e,i,g,h,null),!0,null,x.H)},
h3I(d){var w,v,u=d.c?d.bQ():d,t=A.dg(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+A.bF(u)+"/"+A.bP(u)+"/"+A.bx(u)+" \xb7 "+w+":"+B.a.aT(B.o.u(A.fX(u)),2,"0")+" "+v},
haK(d){var w=d.x
if(w===B.ds)return"Processing"
if(w===B.jZ)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
hQR(d){var w=d.f,v=B.a.i(w==null?"":w),u=v.toLowerCase()
if(B.a.t(u,"clock-in daily earnings")||B.a.t(u,"clock-in earnings"))return"Clock-in completed"
if(B.a.t(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===B.fo)return"Deposit"
if(w===B.eK)return"Withdrawal"
return v.length!==0?v:w.b},
hIq(d){var w=d.d,v=w===B.fo||w===B.o_||w===B.fz||w===B.k_,u=d.x
if(u===B.ds)return w===B.eK?-d.c:0
if(u!==B.ck)return 0
w=d.c
return v?w:-w},
hRp(d,e){var w,v,u,t,s,r,q=A.B(d,x.o)
B.d.b1(q,new C.fn6())
w=A.U(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,A.K)(q),++t,v=r){s=q[t]
r=v-C.hIq(s)
if(r<0)r=0
w.n(0,s.a,new A.blT(v,r))}return w},
aoW:function aoW(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCe:function aCe(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
e54:function e54(d){this.a=d},
e5L:function e5L(d){this.a=d},
e5M:function e5M(d){this.a=d},
e5N:function e5N(d){this.a=d},
e5t:function e5t(d,e){this.a=d
this.b=e},
e5u:function e5u(){},
e5v:function e5v(d){this.a=d},
e5w:function e5w(){},
e5x:function e5x(d){this.a=d},
e5y:function e5y(d,e,f){this.a=d
this.b=e
this.c=f},
e5z:function e5z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5o:function e5o(d,e){this.a=d
this.b=e},
e55:function e55(d,e,f){this.a=d
this.b=e
this.c=f},
e5p:function e5p(){},
e5q:function e5q(){},
e5r:function e5r(d){this.a=d},
e5s:function e5s(){},
e59:function e59(d,e){this.a=d
this.b=e},
e5a:function e5a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5i:function e5i(){},
e5f:function e5f(d){this.a=d},
e5g:function e5g(d,e){this.a=d
this.b=e},
e5h:function e5h(d,e){this.a=d
this.b=e},
e5j:function e5j(d){this.a=d},
e5k:function e5k(d,e,f){this.a=d
this.b=e
this.c=f},
e5l:function e5l(d){this.a=d},
e5n:function e5n(d){this.a=d},
e5m:function e5m(d){this.a=d},
e5b:function e5b(d){this.a=d},
e5c:function e5c(d,e,f){this.a=d
this.b=e
this.c=f},
e5D:function e5D(){},
e5E:function e5E(){},
e5I:function e5I(d){this.a=d},
e5B:function e5B(d){this.a=d},
e5J:function e5J(d){this.a=d},
e5A:function e5A(d){this.a=d},
e5K:function e5K(d){this.a=d},
e5F:function e5F(d){this.a=d},
e5G:function e5G(d){this.a=d},
e5H:function e5H(d){this.a=d},
e5C:function e5C(d){this.a=d},
e58:function e58(d){this.a=d},
e57:function e57(d){this.a=d},
e56:function e56(d){this.a=d},
e5e:function e5e(d,e){this.a=d
this.b=e},
e5d:function e5d(d,e){this.a=d
this.b=e},
azC:function azC(d,e,f,g,h,i,j,k,l,m){var _=this
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
deA:function deA(){},
deB:function deB(){},
deC:function deC(d,e,f){this.a=d
this.b=e
this.c=f},
dez:function dez(d){this.a=d},
deD:function deD(d,e){this.a=d
this.b=e},
dey:function dey(d){this.a=d},
azB:function azB(d,e,f,g,h,i,j,k,l,m){var _=this
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
bfk:function bfk(d,e){var _=this
_.f=_.e=_.d=$
_.cQ$=d
_.b2$=e
_.c=_.a=null},
det:function det(d){this.a=d},
deu:function deu(d){this.a=d},
dev:function dev(d){this.a=d},
dew:function dew(){},
dex:function dex(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
des:function des(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
der:function der(d){this.a=d},
b96:function b96(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
b95:function b95(d,e,f){this.b=d
this.d=e
this.a=f},
b94:function b94(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
azD:function azD(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
azE:function azE(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
deU:function deU(){},
deV:function deV(){},
deW:function deW(){},
deG:function deG(d){this.a=d},
deF:function deF(d,e){this.a=d
this.b=e},
deE:function deE(d,e){this.a=d
this.b=e},
deR:function deR(d,e){this.a=d
this.b=e},
deT:function deT(d,e){this.a=d
this.b=e},
deS:function deS(d,e){this.a=d
this.b=e},
deQ:function deQ(){},
deP:function deP(d){this.a=d},
deO:function deO(){},
deJ:function deJ(d){this.a=d},
deK:function deK(){},
deL:function deL(d){this.a=d},
deM:function deM(d){this.a=d},
deI:function deI(){},
deN:function deN(d){this.a=d},
deH:function deH(d){this.a=d},
b8x:function b8x(d){this.a=d},
fn6:function fn6(){},
bsT:function bsT(d,e){this.b=d
this.a=e},
aJ5:function aJ5(){},
buP:function buP(){},
hNs(d,e,f,g,h,i,j,k){var w,v=B.a.i(j.toLowerCase())
B.d.bn(d,new C.fh1(v,g))
w=A.U(x.N,x.z)
w.n(0,"id",B.o.u(1000*Date.now()))
w.n(0,"fromEmail",B.a.i(e.toLowerCase()))
w.n(0,"fromName",f)
w.n(0,"toEmail",v)
if(k!=null&&B.a.i(k).length!==0)w.n(0,"toName",B.a.i(k))
w.n(0,"gameId",g)
w.n(0,"gameTitle",h)
w.n(0,"status","pending")
w.n(0,"createdAt",new A.Q(Date.now(),0,!1).ac())
w.n(0,"matchesTotal",i)
w.n(0,"matchesPlayed",0)
w.n(0,"seriesStatus","active")
B.d.J(d,w)},
aN7(d){var w,v=J.a7(d),u=A.aN(v.h(d,"matchesTotal")),t=u==null?null:B.k.O(u)
if(t==null)t=1
v=A.aN(v.h(d,"matchesPlayed"))
w=v==null?null:B.k.O(v)
return B.o.D(t-(w==null?0:w),0,t)},
hYd(d,e){var w=A.T(e).k("a1<1>")
w=A.B(new A.a1(e,new C.fxu(B.a.i(d.toLowerCase())),w),w.k("G.E"))
return w},
afN(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
if(C.aN7(u)<=0){t=J.cD(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
hQ5(d,e){var w,v,u,t=J.a7(d),s=t.h(d,"status")
if(!J.y(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.y(s==null?"":s,"complete"))return!1
if(C.aN7(d)<=0)return!1
w=B.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=B.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=B.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aN7(d)>0},
hQ4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a7(d),h=A.aN(i.h(d,"matchesTotal")),g=h==null?null:B.k.O(h)
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
q=A.a0(t,s,r)
p=q.h(0,"inGame")
o=h.b(p)?A.a0(p,s,r):A.U(s,r)
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
hNr(d,e){var w
C.afN(e)
w=A.T(e).k("a1<1>")
w=A.B(new A.a1(e,new C.fh0(B.a.i(d.toLowerCase())),w),w.k("G.E"))
return w},
tC(d,e){var w,v,u
for(w=J.aW(d);w.C();){v=w.gU(w)
u=J.q(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
hK2(d,e,f){var w,v,u,t="fromName",s=J.a7(f),r=s.h(f,"fromEmail"),q=B.a.i(J.k(r==null?"":r).toLowerCase())
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
fPU(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase()),r=J.a7(d),q=r.h(d,"fromEmail"),p=B.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=B.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.hK2(x.f.b(u)?A.a0(u,r,q):A.U(r,q),v,d)
if((t.length===0||B.a.t(t,"@"))&&f!=null){t=J.q(f,v)
if(t==null)t=""}if(t.length===0||B.a.t(t,"@"))return"Opponent"
return t},
bA2(){var w=0,v=A.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bA2=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$bA2)
case 7:r=e
q=A.aT(J.q(r.a,"all_users"))
if(q==null||q.length===0){k=x.N
u=A.U(k,k)
w=1
break}p=B.R.aG(0,q,null)
if(!x.j.b(p)){k=x.N
u=A.U(k,k)
w=1
break}k=x.N
o=A.U(k,k)
for(k=J.aW(p),j=x.f;k.C();){n=k.gU(k)
if(!j.b(n))continue
i=J.q(n,"email")
m=B.a.i(J.k(i==null?"":i).toLowerCase())
i=J.q(n,"username")
l=B.a.i(J.k(i==null?"":i))
if(J.ab(m)!==0&&J.ab(l)!==0)J.aG(o,m,l)}u=o
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
return A.i($async$bA2,v)},
bz7(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bz7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return A.b(C.bA2(),$async$bz7)
case 3:u=t.fPU(s,r,g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bz7,v)},
K4(d,e,f){var w=0,v=A.j(x.h),u,t,s,r,q,p
var $async$K4=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(d)
p=$.h8j.h(0,q)
if(p!=null){t=new A.Q(Date.now(),0,!1).by(p)
t=t.a>A.dA(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.h8j.n(0,q,new A.Q(Date.now(),0,!1))
w=5
return A.b(A.PM(B.c6,q),$async$K4)
case 5:case 4:s=$.h8i.h(0,q)
if(s==null){u=C.tC(e,q)
w=1
break}r=C.tC(A.bzd(e,A.a([s],x._)),q)
if(r!=null)A.fSd(e,r)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$K4,v)},
hYq(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new A.Q(Date.now(),0,!1).ac())
return}}},
hGN(d,e){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
p=q.h(d,"fromEmail")
w=B.a.i(J.k(p==null?"":p).toLowerCase())
p=q.h(d,"toEmail")
v=B.a.i(J.k(p==null?"":p).toLowerCase())
q=q.h(d,"fromName")
u=J.k(q==null?w:q)
switch(o){case"tic_tac_go":q=x.N
return A.E(["ttt",A.c1(9,"",!1,q),"turnEmail",w,"playerXEmail",w,"playerXName",u,"playerOEmail",v,"playerOName",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],q,x.z)
case"connect_four_pro":t=J.e0(6,x.L)
for(q=x.S,s=0;s<6;++s)t[s]=A.c1(7,0,!1,q)
return A.E(["c4",t,"c4Turn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
case"checkers_deluxe":t=J.e0(8,x.L)
for(q=x.S,r=0;r<8;++r)t[r]=A.ip(8,new C.f6P(r),!0,q)
return A.E(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return A.E(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
hNq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new A.Q(Date.now(),0,!1).ac())
r=C.hGN(u,f)
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
t.n(u,"sessionUpdatedAt",new A.Q(Date.now(),0,!1).ac())
return}}},
hYo(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a7(u)
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
o=A.a0(p,w,s)
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
t.n(u,h,o)}}t.n(u,"sessionUpdatedAt",new A.Q(Date.now(),0,!1).ac())
return}},
fSc(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",A.a0(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new A.Q(Date.now(),0,!1).ac())
return}}},
fwi(d){var w=0,v=A.j(x.gw),u,t,s,r,q
var $async$fwi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.afN(d)
t=$.fPf
if(t==null)s=$.fPf=A.PM(B.c6,null).f7(new C.fwj())
else s=t
w=3
return A.b(s,$async$fwi)
case 3:r=f
if(r==null){u=A.bl(new A.J(d,new C.fwk(),A.T(d).k("J<1,@>")),!0,x.P)
w=1
break}q=A.bzd(d,r)
B.d.a8(d)
B.d.v(d,q)
u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fwi,v)},
afO(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$afO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.afN(d)
t=A.T(d).k("J<1,a3<n,@>>")
t=A.B(new A.J(d,new C.fue(),t),t.k("aj.E"))
w=3
return A.b(A.PM(t,null),$async$afO)
case 3:s=f
if(s==null){u=!1
w=1
break}r=A.bzd(d,s)
B.d.a8(d)
B.d.v(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afO,v)},
aO0(d,e,f){var w=0,v=A.j(x.y),u,t,s,r
var $async$aO0=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:C.fSc(d,e,f)
t=C.tC(d,e)
if(t==null){u=!1
w=1
break}w=3
return A.b(A.PM(A.a([A.a0(t,x.N,x.z)],x._),e),$async$aO0)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.tC(s,e)
if(r!=null)A.fSd(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aO0,v)},
hV5(d,e,f){var w
C.fSc(d,e,f)
w=$.fP3.h(0,e)
if(w!=null)w.a9(0)
$.fP3.n(0,e,A.cM(B.lv,new C.fuf(e,d)))},
fJZ(d,e){return new C.aYb(!0,d,"NGMY",B.a.i(e.toLowerCase()),null,!0)},
fh1:function fh1(d,e){this.a=d
this.b=e},
fxu:function fxu(d){this.a=d},
fh0:function fh0(d){this.a=d},
f6P:function f6P(d){this.a=d},
fwj:function fwj(){},
fwk:function fwk(){},
fue:function fue(){},
fuf:function fuf(d,e){this.a=d
this.b=e},
aYb:function aYb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
hYT(d,e,f){return A.c_(B.K,null,new C.fyA(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
fyA:function fyA(d,e){this.a=d
this.b=e},
Zb:function Zb(d,e,f){this.c=d
this.d=e
this.a=f},
aC1:function aC1(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
e_k:function e_k(d){this.a=d},
e_n:function e_n(d){this.a=d},
e_o:function e_o(d){this.a=d},
e_m:function e_m(d){this.a=d},
e_p:function e_p(d){this.a=d},
e_q:function e_q(d,e){this.a=d
this.b=e},
e_l:function e_l(d,e){this.a=d
this.b=e},
hTC(d){var w,v,u,t=B.a.i(d)
if(t.length===0)return B.i9
w=t.toLowerCase()
v=A.af("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return B.i9
v=Date.now()
u=C.hJn(w,new A.Q(v,0,!1))
v=x.N
return A.a([new A.kg("calendar",A.E(["title",C.hJm(t,w),"start",u.ac(),"end",u.bN(36e8).ac(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
hJm(d,e){var w,v,u,t,s,r=A.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cB(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return B.a.i(w==null?"":w)}u=A.af("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cB(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.h94(B.a.i(t))}s=A.af("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cB(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.h94(B.a.i(t))}if(B.a.t(e,"meeting"))return"Meeting"
if(B.a.t(e,"appointment"))return"Appointment"
return"NGMY Event"},
h94(d){var w
if(d.length===0)return d
w=B.a.fu(d,A.af("\\s+",!0,!1,!1,!1))
return new A.J(w,new C.fgc(),A.T(w).k("J<1,n>")).aH(0," ")},
hJn(d,e){var w,v,u,t,s,r,q,p,o=A.bZ(A.bx(e),A.bF(e),A.bP(e),0,0,0,0,0)
if(B.a.t(d,"tomorrow"))o=o.bN(864e8)
else if(!B.a.t(d,"today"))for(w=D.aBn.gdK(D.aBn),w=w.gai(w);w.C();){v=w.gU(w)
u=v.a
if(A.dr(d,u,0)){t=C.hIp(o,v.b)
o=t
break}}s=A.af("\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cB(d)
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
q=0}return A.bZ(A.bx(o),A.bF(o),A.bP(o),r,q,0,0,0)},
hIp(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(A.ml(w)===e){u=!0
if(v<=0){t=d.bN(36e8)
s=w.a
if(s>=t.gbo())u=s===t.gbo()&&w.b<t.gcu()}}else u=!1
if(u)return w
w=w.bN(r)}return d.bN(r)},
fgc:function fgc(){},
hTD(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=B.a.i(d)
if(j.length===0)return B.i9
w=j.toLowerCase()
if(B.a.t(w,k))v=k
else v=B.a.t(w,"imessage")||B.a.t(w,"i message")?"sms":l
u=A.af("(?:saying|say|message|text|tell(?:ing)?)\\s+(.+)$",!1,!1,!1,!1).cB(j)
if(u!=null){t=u.b[1]
s=t==null?l:B.a.i(t)
if(s==null)s=""
t=A.af("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
s=B.a.i(A.aJ(s,t,""))
t=s.length
r=t>=2&&t<500?s:l}else r=l
q=C.hFD(w,j)
if(q==null||q.length===0)return B.i9
t=A.af("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=A.af("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return A.a([new A.kg("call",A.E(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=A.E(["name",q],t,t)
if(r!=null)m.n(0,"body",r)
return A.a([new A.kg(n,m)],x.Z)}if(p){t=x.N
return A.a([new A.kg("call",A.E(["name",q],t,t))],x.Z)}return B.i9},
hFD(d,e){var w,v,u,t,s,r,q=[A.af("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),A.af("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),A.af("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
for(w=0;w<3;++w){v=q[w].cB(d)
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
if(u)return C.hML(t)}r=A.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cB(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return B.a.i(u==null?"":u)}return null},
hML(d){var w=B.a.fu(d,A.af("\\s+",!0,!1,!1,!1))
return new A.J(w,new C.fgb(),A.T(w).k("J<1,n>")).aH(0," ")},
fgb:function fgb(){},
hcX(d){var w=new A.J(d,new C.fwA(),A.T(d).k("J<1,a3<n,@>>")).bY(0,new C.fwB())
w=A.B(w,w.$ti.k("G.E"))
return w},
fwA:function fwA(){},
fwB:function fwB(){},
hTG(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return B.i9
w=B.a.i(d)
if(w.length===0)return B.i9
v=w.toLowerCase()
if(!(B.a.t(v,"send email")||B.a.t(v,"send an email")||B.a.t(v,"send a message to")||B.a.t(v,"email ")||B.a.t(v,"write an email")||B.a.t(v,"write email")))return B.i9
u=A.af("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cB(w)
if(u==null)return B.i9
t=u.b[0]
t.toString
s=B.a.i(t)
r=A.af("(?:subject|title)\\s*[:\\-]\\s*(.+)$",!1,!1,!1,!1).cB(w)
if(r!=null){t=r.b[1]
t.toString
q=B.a.i(t)}else q="Message from NGMY"
p=A.af("(?:saying|that says|with message|message:|body:|write:|text:)\\s*(.+)$",!1,!1,!1,!1).cB(w)
if(p!=null){t=p.b[1]
t.toString
o=B.a.i(t)}else o=""
t=x.N
t=A.U(t,t)
t.n(0,"to",s)
t.n(0,"subject",q)
if(o.length!==0)t.n(0,"body",o)
return A.a([new A.kg("send_email",t)],x.Z)},
hSP(d,e){var w
if(e)return d
w=J.dG(d,new C.fqv())
w=A.B(w,w.$ti.k("G.E"))
return w},
fqv:function fqv(){},
hV2(d){switch(d){case"blackjack_vegas":return D.dwb
case"roulette_euro":return D.dvW
case"slots_jackpot":return D.dw2
case"poker_texas":return D.dw5
case"chess_royale":return D.dvX
case"connect_four_pro":return D.dvY
case"domino_block":return D.dw_
case"plinko_prizes":return D.dw7
case"spin_wheel":return D.dw4
case"baccarat_punto":return D.dvZ
case"craps_table":return D.dw6
case"casino_war":return D.dw0
case"bingo_live":return D.dw3
case"solitaire_klondike":return D.dwa
case"backgammon_pro":return D.dvV
case"billiards_snooker":return D.dw8
case"profit_solve":return D.dw9
default:return D.dw1}},
fu5(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=A.m(8)
v=A.I(B.aM,B.r,1.5)
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.ej,6)],x.V)
return A.p(p,A.av(A.V(B.ma,B.c.j(0.5),p,p,p,23.400000000000002),p,p,p),B.f,p,p,new A.o(p,p,v,w,u,D.bOS,B.n),p,74,p,p,p,p,p,52)}t=B.o.D(d,1,13)
s=t===1||t>=10||B.o.F(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][B.o.F(t,4)]
q=s?B.bL:B.M
w=A.m(8)
v=A.I(B.aK,B.r,1)
u=A.a([new A.ac(0,B.G,B.w.j(0.28),B.ej,6)],x.V)
return A.p(p,A.v(A.a([new A.C(D.br1,A.d(D.clH[t-1]+"\n"+r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,B.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),B.b2,A.av(A.d(r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),B.b2],x.p),B.F,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(B.hS,p,v,w,u,p,B.n),p,74,p,p,p,p,p,52)},
hW6(d,e){var w,v=null,u=A.m(18),t=A.I(B.aM,B.r,3),s=A.a([new A.ac(0,B.G,B.aD.j(0.5),B.J,20)],x.V),r=A.T(e).k("J<1,hh>")
r=A.B(new A.J(e,new C.fw1(),r),r.k("aj.E"))
w=x.p
return A.v(A.a([A.p(v,A.v(A.a([D.f3i,B.ac,A.A(r,B.m,v,B.b9,B.j,0,v,v)],w),B.m,v,B.e,B.j,0,B.p),B.f,v,v,new A.o(v,v,t,u,s,D.bPd,B.n),v,v,v,v,I.afC,v,v,v),B.az,A.dp(B.alm,D.f3U,d,A.bk(B.aM,v,v,v,B.du,v,Af.Xt,v,v,v,v,v))],w),B.m,v,B.e,B.j,0,B.p)},
oO:function oO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bnU:function bnU(d,e){this.b=d
this.a=e},
fw1:function fw1(){},
huN(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e0(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=A.c1(8,0,!1,w)
u=A.c1(9,"",!1,p)
t=x.t
s=A.a([],t)
r=A.a([],t)
t=A.a([0,0,0],t)
q=J.e0(6,o)
for(v=0;v<6;++v)q[v]=A.c1(7,0,!1,w)
return new C.aph(A.U(p,x.z),n,u,s,r,t,q,new A.ar(B.as,$.aw()))},
hO6(d,e,f,g,h){var w=new C.fhF(f,h)
switch(d){case"checkers_deluxe":return C.hEj(h,g,e,w)
case"tic_tac_go":return C.hMW(h,g,e,w)
case"blackjack_vegas":return C.hDF(h,g,e,new C.fhz(w))
case"roulette_euro":return C.hLg(h,g,e,new C.fhA(w))
case"slots_jackpot":return C.hM4(h,g,e,new C.fhB(w))
case"billiards_snooker":return C.hK4(h,g,e,new C.fhC(w))
case"connect_four_pro":return C.hEK(h,g,e,w)
case"profit_solve":return C.hK7(h,g,e,new C.fhD(w))
default:return C.hEg(d,h,g,e,new C.fhE(w))}},
hEj(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vP,B.L,w,w),u=A.m(12),t=A.I(D.Vu,B.r,8),s=A.a([new A.ac(0,B.G,B.w.j(0.4),B.J,16)],x.V)
return A.v(A.a([new A.C(B.eY,v,w),A.D(A.av(new A.fF(1,A.p(w,A.bv(A.m(6),A.ib(!0,w,w,B.y,D.eF6,new C.f4a(d,e,f,g),64,w,B.dP,B.ai,!1),B.ap),B.f,w,w,new A.o(w,w,t,u,s,w,B.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hMW(d,e,f,g){var w=null
return A.v(A.a([new A.C(B.eY,A.d(d.c,w,w,w,w,w,w,D.vP,B.L,w,w),w),A.D(A.av(new A.fF(1,A.cm(new C.fgm(d,e,f,g)),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hDF(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.vP,B.L,v,v),t=x.p,s=A.a([],t),r=d.CW,q=d.ch
if(r)B.d.v(s,new A.J(q,new C.f3B(),A.T(q).k("J<1,r>")))
else B.d.v(s,A.a([C.fu5(q[0],!1),B.bn,C.fu5(0,!0)],t))
s=A.A(s,B.m,v,B.b9,B.j,0,v,v)
r=A.d("Total: "+d.a1L(d.ay),v,v,v,v,v,v,D.eZB,v,v,v)
q=d.ay
w=A.T(q).k("J<1,r>")
q=A.B(new A.J(q,new C.f3C(),w),w.k("aj.E"))
q=A.c4(B.fL,q,B.bx,6,6)
return A.v(A.a([new A.C(B.eY,u,v),D.f9Q,B.ao,s,B.az,D.fgU,r,B.ao,q,B.b2,A.A(A.a([A.D(A.bJ(D.f4k,d.CW?v:new C.f3D(d,e,f,g),v),1),B.ab,A.D(A.bJ(D.fj9,new C.f3E(d,e,f,g),v),1)],t),B.m,v,B.e,B.j,0,v,v)],t),B.m,v,B.e,B.j,0,B.p)},
hLg(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vP,B.L,w,w),u=d.cx,t=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cw,16)],x.V)
t=A.a([new A.C(B.eY,v,w),A.p(w,A.b3(w,w,w,new C.bnU(u,w),B.at),B.f,w,w,new A.o(w,w,w,w,t,w,B.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new A.C(B.kb,A.d("Result: "+A.t(v),w,w,w,w,w,w,D.eNY,w,w,w),w))
t.push(B.ac)
t.push(A.c4(B.fL,A.ip(6,new C.fdz(d,e,f,g),!0,x.l),B.bx,6,6))
return A.v(t,B.m,w,B.e,B.j,0,B.p)},
hM4(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vP,B.L,w,w),u=d.db,t=A.T(u).k("J<1,n>")
u=A.B(new A.J(u,new C.fft(),t),t.k("aj.E"))
return A.v(A.a([new A.C(B.eY,v,w),C.hW6(new C.ffu(d,e,f,g),u)],x.p),B.m,w,B.e,B.j,0,B.p)},
hK4(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vP,B.L,w,w),u=A.m(20),t=A.I(B.fl,B.r,12),s=x.V,r=A.a([new A.ac(0,B.G,B.w.j(0.45),B.dn,18)],s),q=x.p
return A.v(A.a([new A.C(B.eY,v,w),A.D(A.p(w,new A.an(B.W,w,B.aa,B.q,A.a([A.ao(w,A.p(w,w,B.f,w,w,D.aWo,w,18,w,w,w,w,w,18),w,w,24,w,24,w),A.ao(28,A.p(w,w,B.f,w,w,B.a9f,w,14,w,w,w,w,w,14),w,w,w,32,w,w),A.av(A.eA(B.A,d.dx,A.p(w,w,B.f,w,w,new A.o(B.aM,w,w,A.m(2),A.a([new A.ac(0,B.G,B.w.j(0.3),B.J,4)],s),w,B.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),B.f,w,w,new A.o(w,w,t,u,r,D.e4C,B.n),w,w,w,B.eO,w,w,w,w),1),A.kQ(B.bk,w,w,1,0,new C.fcj(d,f),d.dy),A.bJ(D.f8W,new C.fck(d,e,g,f),w)],q),B.m,w,B.e,B.j,0,B.p)},
hEK(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.vP,B.L,v,v),t=x.l,s=J.e0(7,t)
for(w=0;w<7;++w)s[w]=new A.bG(1,B.bo,A.aE(v,A.v(A.ip(6,new C.f4C(d,w),!0,t),B.m,v,B.lG,B.j,0,B.p),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f4D(d,w,e,f,g),v,v,v,v,v,v,!1,B.a9),v)
return A.v(A.a([new A.C(B.eY,u,v),A.D(A.av(new A.fF(1.1666666666666667,A.A(s,B.dC,v,B.e,B.j,0,v,v),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
hK7(d,e,f,g){var w=null
return A.v(A.a([new A.C(B.eY,A.d(d.c,w,w,w,w,w,w,D.vP,B.L,w,w),w),A.d(""+d.a+"/"+d.b,w,w,w,w,w,w,B.kp,w,w,w),A.d(d.fy,w,w,w,w,w,w,D.aNN,B.L,w,w),A.aL(w,B.T,!1,w,!0,B.q,w,A.aM(),d.id,w,w,w,w,w,2,D.bLB,B.y,!0,w,!0,w,!1,w,B.ag,w,w,w,w,w,B.dL,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.fcw(d,e,g,f),w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,B.dj,!0,B.a5,w,B.am,w,w,w,w),A.bJ(D.f7z,new C.fcx(d,e,g,f),w)],x.p),B.m,w,B.e,B.j,0,B.p)},
hEg(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gjK(),k=e.d
k=k==null?n:k.c
w=C.hV2(d)
v=D.aBc.h(0,d)
if(v==null)v=d
m=A.d(m,n,n,n,n,n,n,B.mr,B.L,n,n)
u=A.m(22)
t=w.a
s=w.b
r=A.I(s.j(0.5),B.r,2)
q=A.a([new A.ac(0,B.G,w.c.j(0.35),B.eR,24)],x.V)
p=A.d(w.e,n,n,n,n,n,n,W.Sh,n,n,n)
o=A.d(v,n,n,n,n,n,n,B.oO,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+A.t(k)+" at the table"
k=x.p
q=A.D(A.av(A.p(n,A.v(A.a([p,B.S,o,B.P,A.d(l,n,n,n,n,n,n,A.l(n,n,B.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),B.L,n,n),B.d5,A.V(w.f,s.j(0.85),n,n,n,48)],k),B.m,n,B.b9,B.j,0,B.p),B.f,n,n,new A.o(n,n,r,u,q,new A.a6(B.b0,B.b5,B.x,t,n,n),B.n),n,n,n,B.eO,B.a8,n,n,1/0),n,n,n),1)
return A.v(A.a([m,B.ac,q,B.P,new A.a5(1/0,n,A.bJ(D.fij,new C.f44(f,e,g,h),A.bk(s,n,n,n,B.d.gK(t).jc()>0.4?B.w:B.c,n,B.ce,n,n,n,n,n)),n)],k),B.m,n,B.e,B.j,0,B.p)},
DV:function DV(d,e){this.a=d
this.b=e},
aph:function aph(d,e,f,g,h,i,j,k){var _=this
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
cal:function cal(){},
cam:function cam(){},
cak:function cak(){},
can:function can(){},
caj:function caj(){},
cap:function cap(){},
caq:function caq(){},
cai:function cai(d){this.a=d},
cao:function cao(){},
cah:function cah(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fhF:function fhF(d,e){this.a=d
this.b=e},
fhz:function fhz(d){this.a=d},
fhA:function fhA(d){this.a=d},
fhB:function fhB(d){this.a=d},
fhC:function fhC(d){this.a=d},
fhD:function fhD(d){this.a=d},
fhE:function fhE(d){this.a=d},
f4a:function f4a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f49:function f49(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fgm:function fgm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fgl:function fgl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fgk:function fgk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f3B:function f3B(){},
f3C:function f3C(){},
f3D:function f3D(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3E:function f3E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fdz:function fdz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fdy:function fdy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fft:function fft(){},
ffu:function ffu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fcj:function fcj(d,e){this.a=d
this.b=e},
fck:function fck(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f4D:function f4D(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f4C:function f4C(d,e){this.a=d
this.b=e},
fcw:function fcw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fcx:function fcx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f44:function f44(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hQT(d){var w,v=A.T(d).k("a1<1>")
v=A.oY(new A.a1(d,new C.fm6(),v),120,v.k("G.E"))
w=A.cC(v,new C.fm7(),A.a2(v).k("G.E"),x.N).aH(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fm6:function fm6(){},
fm7:function fm7(){},
afZ(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
aqc:function aqc(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aCQ:function aCQ(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
exd:function exd(){},
aKD:function aKD(){},
hsL(){var w=$.HG
if(w<=0)return;--w
$.HG=w
if(w===0){w=$.fZL
if(w!=null)w.$0()}},
c5R(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
anW(d){var w=0,v=A.j(x.H),u,t
var $async$anW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.fJU.J(0,t)
w=4
return A.b(A.ay(),$async$anW)
case 4:w=3
return A.b(f.aq("Bool","ngmy_game_free_play_used_"+B.a.i(t.toLowerCase()),!0),$async$anW)
case 3:case 1:return A.h(u,v)}})
return A.i($async$anW,v)},
anV(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$anV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(C.c5R(d)){u=!0
w=1
break}t=B.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.fJU.t(0,t)){u=!1
w=1
break}w=3
return A.b(A.ay(),$async$anV)
case 3:s=f
r=B.a.i(t.toLowerCase())
r=A.k8(J.q(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anV,v)},
Ua(){var w=0,v=A.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Ua=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$Ua)
case 7:r=e
q=A.aT(J.q(r.a,"ngmy_helper_ai_usage_v1"))
if(q==null||B.a.i(q).length===0){u=A.U(x.N,x.z)
w=1
break}p=B.R.aG(0,q,null)
if(x.f.b(p)){o=A.a0(p,x.N,x.z)
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
return A.i($async$Ua,v)},
aYt(d){return C.hsY(d)},
hsY(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aYt=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.ay(),$async$aYt)
case 6:s=f
w=7
return A.b(s.aq("String","ngmy_helper_ai_usage_v1",B.R.ao(d,null)),$async$aYt)
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
return A.i($async$aYt,v)},
aYr(d,e){var w,v,u,t,s=J.q(d,B.a.i(e.toLowerCase()))
if(!x.f.b(s))return new A.acB(0,new A.Q(Date.now(),0,!1))
w=J.a7(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=A.bi(u==null?"":u)
if(t==null)t=new A.Q(Date.now(),0,!1)
return new A.acB(typeof v=="number"?B.o.D(B.k.O(v),0,999999):0,t)},
aYs(d,e){if(B.o.an(e.by(d.b).a,36e8)>=24)return new A.acB(0,e)
return d},
c6n(d,e){var w=0,v=A.j(x.S),u,t,s
var $async$c6n=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return A.b(C.Ua(),$async$c6n)
case 3:t=g
s=Date.now()
u=B.o.D(e-C.aYs(C.aYr(t,d),new A.Q(s,0,!1)).a,0,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6n,v)},
c6o(d,e){var w=0,v=A.j(x.cJ),u,t,s,r
var $async$c6o=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return A.b(C.Ua(),$async$c6o)
case 3:t=g
s=Date.now()
r=C.aYs(C.aYr(t,d),new A.Q(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bN(864e8)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6o,v)},
hsZ(d){var w,v,u,t=d.a,s=B.o.an(t,1e6)
if(s<=0)return"0s"
w=B.o.an(t,36e8)
v=B.o.an(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+B.a.aT(B.o.u(v),2,"0")+"m "+B.a.aT(B.o.u(u),2,"0")+"s"
if(v>0)return""+v+"m "+B.a.aT(B.o.u(u),2,"0")+"s"
return""+u+"s"},
aYu(d){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aYu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return A.b(C.Ua(),$async$aYu)
case 3:t=p.aYs(o.aYr(f,d),new A.Q(Date.now(),0,!1))
w=4
return A.b(A.ay(),$async$aYu)
case 4:s=f
r=B.a.i(d.toLowerCase())
q=t.b.a5().ac()
u=A.k8(J.q(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYu,v)},
aoh(d){var w=0,v=A.j(x.H),u,t,s,r
var $async$aoh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return A.b(C.Ua(),$async$aoh)
case 3:t=s.aYs(r.aYr(f,d),new A.Q(Date.now(),0,!1))
w=5
return A.b(A.ay(),$async$aoh)
case 5:w=4
return A.b(f.aq("Bool","ngmy_helper_3left_"+B.a.i(d.toLowerCase())+"_"+t.b.a5().ac(),!0),$async$aoh)
case 4:case 1:return A.h(u,v)}})
return A.i($async$aoh,v)},
aoi(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aoi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=B.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return A.b(C.Ua(),$async$aoi)
case 3:s=g
r=Date.now()
q=C.aYs(C.aYr(s,d),new A.Q(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aG(s,t,A.E(["count",r+1,"windowStart",q.b.a5().ac()],x.N,x.K))
w=4
return A.b(C.aYt(s),$async$aoi)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoi,v)},
afB(d,e,a0){var w=0,v=A.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$afB=A.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new A.fc("")
if(!d.d){p=!0
if(!C.hcP(a0))if(!C.hcO(a0)){p=A.af("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.hcP(a0)?3:4
break
case 3:o=C.hUI(a0)
w=o!=null?5:6
break
case 5:w=7
return A.b(C.bZM(e,o),$async$afB)
case 7:n=a2
p=J.a7(n)
if(p.gck(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.fYd(o)+":\n"
m.a+=l
for(p=p.gai(n);p.C();){m=p.gU(p)
l=h
k="- "+m.gUb()+"\n"
l.a+=k
m=m.f
if(m!=null&&B.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=A.af("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return A.b(A.R3("text/plain"),$async$afB)
case 14:r=a2
p=r
if(p==null)p=null
else p=B.a.i(p.a)
q=p==null?"":p
if(J.ab(q)!==0){p=h
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
case 13:case 9:w=C.hcO(a0)?15:16
break
case 15:p=h
f=C
w=17
return A.b(C.a64(e),$async$afB)
case 17:m=f.fZS(a2)+"\n"
p.a+=m
case 16:p=A.af("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return A.b(C.Td(e),$async$afB)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cw(i)){p=h
m=C.fYe(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=B.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afB,v)},
huk(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
c8X(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$c8X=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=A.h_x(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.f0("ngmy_local_growth_income_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bG),$async$c8X)
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
q=A.a8(m)
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
return A.i($async$c8X,v)},
aoZ(d){var w=0,v=A.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$aoZ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=B.a.i(d)
if(J.ab(k)===0){u=null
w=1
break}t=4
w=7
return A.b(A.f0("ngmy_local_growth_income_stash_v1_"+B.a.i(k),null,!1,B.bG),$async$aoZ)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.q(r,"payload")
q=J.k(n==null?"":n)
if(J.ab(q)===0){u=null
w=1
break}n=J.q(r,"ownerEmail")
p=B.a.i(J.k(n==null?"":n))
n=B.c4.c7(0,B.cB.aI(q))
m=J.y(J.q(r,"live"),!0)
u=new A.aEf(m,p,n)
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=A.a8(j)
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
return A.i($async$aoZ,v)},
aZx(d){var w=0,v=A.j(x.bY),u,t,s,r,q
var $async$aZx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
w=C.huk(q)?3:4
break
case 3:w=5
return A.b(C.c8X(q),$async$aZx)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.aoZ(t)
w=1
break
case 4:if(B.a.a0(q,"NGMYLOCALSYNC1|")){u=C.aoZ(B.a.i(B.a.b_(q,15)))
w=1
break}w=B.a.a0(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return A.b(C.aoZ(B.a.i(B.a.b_(q,15))),$async$aZx)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new A.aEf(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZx,v)},
h_L(d){var w=d.bL
if(w>=0)return w
return 1},
afM(d,e,f){var w=0,v=A.j(x.H),u,t
var $async$afM=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return A.b(A.aOc(d,e),$async$afM)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return A.b(A.FW(d,null,null,!1,!0,""),$async$afM)
case 5:w=4
return A.b(t.$1(h),$async$afM)
case 4:case 1:return A.h(u,v)}})
return A.i($async$afM,v)},
hTB(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=B.a.i(a2)
if(a1.length===0)return B.i9
w=a1.toLowerCase()
v=A.af("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=A.af("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cB(w)
if(!u&&t==null)return B.i9
s=new A.Q(Date.now(),0,!1)
r=A.de()
q=A.de()
p=C.hJl(w)
if(p!=null){v=p.a
r.b=s.bN(v)
q.b=C.h7W(a1,w)
if(J.y(q.bb(),"Wake up")&&B.o.an(v,e)<=180)q.b="Reminder \u2014 "+B.o.an(v,e)+" min"}else{if(t!=null){v=A.af("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=B.a.e6(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.h7X(v[2],v[4],v[3])
o=v[3]
m=A.c7(o==null?"":o,null)
if(m==null)m=0
l=A.bZ(A.bx(s),A.bF(s),A.bP(s),0,0,0,0,0)
if(B.a.t(w,d))l=l.bN(a0)
r.b=A.bZ(A.bx(l),A.bF(l),A.bP(l),n,m,0,0,0).bN(-36e8)
if(r.bb().cW(s.bN(e)))r.b=J.cf(r.bb(),B.nB)
v=C.hNp(v[1])
k=B.o.F(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+B.a.aT(B.o.u(m),2,"0")+" "+j)}else{l=A.bZ(A.bx(s),A.bF(s),A.bP(s),0,0,0,0,0)
v=B.a.t(w,d)
if(v)l=l.bN(a0)
i=A.af("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cB(w)
if(i!=null){o=i.b
h=C.h7X(o[1],o[3],o[2])
o=o[2]
g=A.c7(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=A.bZ(A.bx(l),A.bF(l),A.bP(l),h,g,0,0,0)
r.b=f.cW(s.bN(3e7))&&!v?f.bN(a0):f
q.b=C.h7W(a1,w)}}v=x.N
return A.a([new A.kg("alarm",A.E(["title",q.bb(),"start",r.bb().ac(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
hJl(d){var w,v,u,t,s,r,q=[A.af("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.af("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.af("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),A.af("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
for(w=0;w<4;++w){v=q[w].cB(d)
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
hNp(d){var w=d==null?"work":d,v=w.toLowerCase()
if(B.a.t(v,"meeting")||B.a.t(v,"appointment"))return"Meeting"
if(B.a.t(v,"class")||B.a.t(v,"school"))return"Class"
if(B.a.t(v,"shift"))return"Shift"
return"Work"},
h7X(d,e,f){var w,v=A.c7(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return B.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
h7W(d,e){var w,v,u,t
if(B.a.t(e,"work"))return"Wake up \u2014 Work"
if(B.a.t(e,"school")||B.a.t(e,"class"))return"Wake up \u2014 School"
w=A.af("\\btimer\\b",!1,!1,!1,!1)
if(w.b.test(e))return"Timer"
v=A.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cB(d)
if(v!=null){w=v.b
u=w[1]
w=u==null?w[2]:u
t=B.a.i(w==null?"":w)
w=t.length
if(w>=3&&w<=60)return t}return"Wake up"},
huG(d){var w,v,u,t,s=J.a7(d)
if(s.gal(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.ke(d,80),v=w.$ti,w=new A.bW(w,w.gM(0),v.k("bW<aj.E>")),v=v.k("aj.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gM(d)>80?u+("\u2026 and "+(s.gM(d)-80)+" more\n"):u
return B.a.i(s.charCodeAt(0)==0?s:s)}},D,H,Ab,I,F,Ac,V,G,W,Ad,Ae,X,Af,Ag,Ah,Ai,Y,Z,K,Aj
J=c[1]
A=c[0]
B=c[2]
L=c[30]
Q=c[160]
A_=c[171]
E=c[152]
M=c[162]
A0=c[115]
N=c[95]
A1=c[158]
R=c[33]
O=c[70]
S=c[76]
A2=c[77]
P=c[126]
A3=c[163]
T=c[154]
A4=c[166]
A5=c[164]
A6=c[165]
A7=c[161]
A8=c[157]
A9=c[62]
U=c[142]
Aa=c[143]
C=a.updateHolder(c[5],C)
D=c[151]
H=c[25]
Ab=c[61]
I=c[156]
F=c[92]
Ac=c[167]
V=c[26]
G=c[155]
W=c[107]
Ad=c[153]
Ae=c[170]
X=c[159]
Af=c[172]
Ag=c[101]
Ah=c[169]
Ai=c[98]
Y=c[69]
Z=c[54]
K=c[52]
Aj=c[168]
C.bp1.prototype={
o9(d,e){return this.a.$2(d,e)}}
C.Ez.prototype={
T(){return new C.aGi(this.$ti.k("aGi<Ez.T,Ez.S>"))}}
C.aGi.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a
v=w.f
w=new A.hA(B.Ee,v,null,null,w.$ti.k("hA<1>"))
u.e=w
u.UI()},
br(d){var w,v=this
v.bE(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aKM()
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hA(B.Ee,w.b,w.c,w.d,w.$ti)}v.UI()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&A.c()
return v.mJ(d,w)},
q(){this.aKM()
this.a2()},
UI(){var w,v=this
v.d=v.a.c.lb(new C.eT8(v),new C.eT9(v),new C.eTa(v))
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hA(B.W9,w.b,w.c,w.d,w.$ti)},
aKM(){var w=this.d
if(w!=null){w.a9(0)
this.d=null}}}
C.atU.prototype={
mJ(d,e){return this.e.$2(d,e)}}
C.ajz.prototype={
T(){return C.hBd()},
bp(){return this.r.$0()}}
C.qq.prototype={}
C.ayv.prototype={
ab3(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ab3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.fZj(r)
if(r.x==null||r.c5.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.fZl(s),$async$ab3)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ab3,v)},
W4(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$W4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aoX(t.a.c),$async$W4)
case 3:if(e!=null&&t.c!=null)t.a.bp()
r=!C.c5R(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return A.b(C.anV(t.a.c),$async$W4)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.m(new C.d6A(t,s))
if(!s)t.ab3()
case 1:return A.h(u,v)}})
return A.i($async$W4,v)},
aaF(){var w=0,v=A.j(x.H),u,t=this,s
var $async$aaF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.bA2(),$async$aaF)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.d6L(t,s))
case 1:return A.h(u,v)}})
return A.i($async$aaF,v)},
a_(){var w,v,u=this
u.bqn()
$.t0=$.t0+1
w=u.a
$.bA7=w.c.a
w=w.d.b5
v=A.T(w).k("J<1,a3<n,@>>")
w=A.B(new A.J(w,new C.d72(),v),v.k("aj.E"))
u.f=w
u.aaF()
u.II()
u.W4()
u.e=A.dF(B.nx,new C.d73(u))},
II(){var w=0,v=A.j(x.H),u,t=this,s
var $async$II=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:C.afN(t.a.d.b5)
w=3
return A.b(C.fwi(t.a.d.b5),$async$II)
case 3:s=e
if(t.c==null){w=1
break}C.afN(t.a.d.b5)
if(s!=null)t.m(new C.d6T(t,s))
else t.m(new C.d6U(t))
case 1:return A.h(u,v)}})
return A.i($async$II,v)},
q(){C.aYd()
var w=this.e
if(w!=null)w.a9(0)
this.bqm()},
afz(d,e,f){return this.cmL(d,e,f)},
cmL(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$afz=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(e.toLowerCase())
p=J.q(t.r,q)
o=t.a
n=o.d.b5
o=o.c
s=d.b
C.hNs(n,o.a,o.c,d.a,s,f,e,p)
t.a.bp()
w=3
return A.b(C.afO(t.a.d.b5),$async$afz)
case 3:if(t.c==null){w=1
break}t.m(new C.d6W(t))
r=f===1?"1 game":""+f+" games"
t.c.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$afz,v)},
HB(d,e){return this.c8i(d,e)},
bXv(d){return this.HB(d,null)},
c8i(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&B.a.i(e).length!==0){s=C.tC(t.a.d.b5,B.a.i(e))
if(s!=null&&C.aN7(s)<=0){t.c.I(x.q).f.R(D.aLH)
w=1
break}}w=5
return A.b(C.anV(t.a.c),$async$HB)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return A.b(C.fJV(r,C.fqG(q.c),p),$async$HB)
case 6:w=1
break
case 4:o=new C.d6O(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
A.ht(r,new C.aBm(p,q.d,q.f,q.r,new C.d6P(o),q.w,C.fqG(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
A.ht(q,new C.ajy(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.d6Q(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$HB,v)},
bV0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.afN(i.a.d.b5)
C.afN(i.f)
w=C.hYd(i.a.c.a,i.f)
v=C.hNr(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return B.bH
if(!u){t=B.d.gK(w)
u=A.m(14)
s=A.I(B.b8,B.r,1)
r=J.a7(t)
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
return A.p(h,A.v(A.a([D.fcY,A.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,B.oS,h,h,h),B.P,A.A(A.a([A.D(A.dW(B.Im,new C.d6G(i,t),h),1),B.ab,A.D(A.bJ(D.flw,new C.d6H(i,t),h),1)],n),B.m,h,B.e,B.j,0,h,h)],n),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(B.aD,h,s,u,h,h,B.n),h,h,h,B.e3,B.bm,h,h,1/0)}m=B.d.gK(v)
l=B.d.dL(i.y,new C.d6I(m),new C.d6J(i))
k=C.fPU(m,i.a.c.a,i.r)
j=C.aN7(m)
u=A.m(14)
s=A.I(B.b8,B.r,1)
r=j===1?"":"s"
return A.p(h,A.v(A.a([D.f5r,A.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,B.oS,h,h,h),B.au,A.d(C.hQ4(m,i.a.c.a),h,h,h,h,h,h,B.a6d,h,h,h),B.P,A.bJ(D.fcg,new C.d6K(i,l,m),h)],x.p),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(B.bl,h,s,u,h,h,B.n),h,h,h,B.e3,B.bm,h,h,1/0)},
bLS(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.eBe.t(0,d.a),l=A.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=A.a3z(w[v])
t=B.k.D(u.d*0.58,0.12,0.3)
l.push(new A.wL(u.a,u.b,B.k.D(u.c*0.92,0,0.9),t).im())}s=B.d.gK(w)
w=A.m(16)
t=A.m(18)
r=A.I(A.Y(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1)
q=x.V
p=A.a([new A.ac(0,B.G,A.Y(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.jc,12)],q)
o=x.p
o=A.a([new A.a5(100,n,A.av(A.V(d.e,B.c,n,n,n,64),n,n,n),n),A.D(new A.C(B.j4,A.v(A.a([A.A(A.a([A.D(A.d(d.b,n,n,n,n,n,n,B.kR,n,n,n),1)],o),B.m,n,B.e,B.j,0,n,n),B.au,A.d(d.c,n,2,B.a2,n,n,n,B.oP,n,n,n)],o),B.F,n,B.b9,B.j,0,B.p),n),1)],o)
if(m)o.push(A.aH(n,n,n,n,D.bJc,n,n,n,new C.d6C(this,d),n,n,n,n,"Invite player",n))
o.push(new A.C(B.KV,A.p(n,D.bHk,B.f,n,n,new A.o(A.Y(71,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),n,A.I(A.Y(B.k.V(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1.6),n,A.a([new A.ac(0,B.G,A.Y(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,10)],q),n,B.a6),n,44,n,n,n,n,n,44),n))
return A.aK(!1,w,!0,A.p(n,A.A(o,B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,r,t,p,new A.a6(B.ax,B.aC,B.x,l,n,n),B.n),n,92,n,B.e3,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.d6D(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.M(d).ax.a===B.H,l=A.M(d).ax.a===B.H?B.j_:B.pd,k=m?B.i4.j(0.94):B.c.j(0.94),j=m?B.c:B.M,i=m?B.i4:B.c,h=m?B.c.j(0.08):B.aK,g=m?B.c:B.M,f=m?B.bj:B.bN
if(!o.x)return C.aNF(n,l,A.av(A.mz(n,m?B.c:B.bk,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fqG(o.a.c)
return new C.MA(o.a.w,w,!0,o.gaPx(),n)}w=A.aI(d,B.e6,x.w).w
v=A.m(12)
u=A.I(h,B.r,1)
t=x.V
s=A.a([],t)
if(!m)s.push(new A.ac(0,B.G,B.w.j(0.04),B.cI,12))
r=x.p
s=A.a([A.p(n,A.A(A.a([A.D(A.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,A.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,B.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new A.u6(new C.d7_(o,f,g),n,$.aP0(),n)],r),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(i,n,u,v,s,n,B.n),n,n,n,n,B.WZ,n,n,1/0),B.S,o.bV0()],r)
v=o.y
B.d.v(s,new A.J(v,o.gbLR(),A.T(v).k("J<1,r>")))
w=A.cd(A.v(s,B.m,n,B.e,B.j,0,B.p),B.q,n,B.y,n,new A.N(14,w.r.b+78,14,24),n,n,B.ai)
s=A.m(35)
v=A.a([new A.ac(0,B.G,B.w.j(m?0.28:0.08),B.jc,15)],t)
u=A.I(m?B.c.j(0.1):B.aK,B.r,1)
t=A.aH(n,n,n,n,A.V(B.ez,j,n,n,n,18),n,n,n,o.gaPx(),n,n,n,n,n,n)
q=A.D(A.av(A.d("GAME CENTER",n,n,n,n,n,n,A.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,B.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=A.m(20)
return A.o7(!0,C.aNF(n,l,new A.an(B.W,n,B.aa,B.f,A.a([w,A.ao(n,A.bq(!1,new A.C(B.L7,A.p(n,A.A(A.a([t,q,new A.C(B.j4,A.p(n,A.A(A.a([D.bEE,B.eb,C.aoM(new C.d70(o),B.mr,o.a.c.a)],r),B.m,n,B.e,B.Q,0,n,n),B.f,n,n,new A.o(B.cR,n,n,p,n,n,B.n),n,n,n,n,B.h5,n,n,n),n)],r),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(k,n,u,s,v,n,B.n),n,60,n,n,B.m8,n,n,n),n),!0,!1,B.ah,!0,!0),n,n,0,0,0,n)],r),n)),new C.d71(o),x.K)},
aPy(){var w,v
this.a.bp()
w=this.d
v=w>0?A.E(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
A.iK(w,v)}}
C.aBm.prototype={
T(){return new C.bhc()},
ho(d){return this.e.$1(d)},
bp(){return this.f.$0()},
aEp(){return this.r.$0()}}
C.bhc.prototype={
a_(){this.brn()
this.d=A.TB(this.a.d.bi)
$.t0=$.t0+1},
q(){C.aYd()
this.brm()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&A.c()
return new C.anp(v,new C.dKj(w),u,new C.dKk(w),new C.dKl(w,d),new C.dKm(w),null)}}
C.ajy.prototype={
T(){return new C.ayu(new A.ar(B.as,$.aw()))},
ho(d){return this.x.$1(d)},
bp(){return this.y.$0()},
aEp(){return this.z.$0()}}
C.ayu.prototype={
a_(){this.bql()
this.a.toString
$.t0=$.t0+1},
q(){C.aYd()
var w=this.d
w.S$=$.aw()
w.P$=0
this.bqk()},
a0A(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0A=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.MG()
w=5
return A.b(C.anV(t.a.c),$async$a0A)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return A.b(C.fJV(s,C.fqG(r.c),q),$async$a0A)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&B.a.i(r).length!==0){p=C.tC(s.d.b5,B.a.i(r))
if(p!=null&&C.aN7(p)<=0){t.c.I(x.q).f.R(D.aLH)
w=1
break}}o=A.d3(B.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.I(x.q).f.R(D.eI7)
w=1
break}m=A.Kd(t.a.c.a,new C.d6u(t))
if(m+0.001<n){t.c.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Not enough balance for this bet \u2014 you have $"+A.dy(m)+", the bet is $"+A.dy(n)+".",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aEp()
s=t.a
s.toString
r=B.o.u(1000*Date.now())
q=t.a
s.ho(new A.d1(r,q.c.a,n,B.jA,B.fa,"Game bet: "+q.f,null,null,B.ck,new A.Q(Date.now(),0,!1)))
t.a.bp()
if(D.eB6.t(0,t.a.e)){s=t.c
s.toString
r=t.a
A.ht(s,new C.ams(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
A.ht(s,new C.ajA(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$a0A,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=A.aH(o,o,o,o,B.FF,o,o,o,new C.d6x(d),o,o,o,o,o,o),k=p.a,j=A.d(k.f,o,o,o,o,o,o,B.ct,o,o,o),i=A.m(12),h=x.p
j=A.eC(A.a([A.p(o,A.av(C.aoM(new C.d6y(p),B.kp,k.c.a),o,o,o),B.f,o,o,new A.o(B.cR,o,o,i,o,o,B.n),o,o,o,D.blt,B.h4,o,o,o)],h),o,o,!0,!0,D.W7,o,1,o,o,o,!1,o,!1,B.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=A.m(16)
i=A.I(B.b8,B.r,1)
k=A.V(D.bvB,D.bfQ,o,o,o,28)
w=p.a
v=A.d(w.f,o,o,o,o,o,o,B.oO,o,o,o)
w=A.d(w.r,o,o,o,o,o,o,B.oS,o,o,o)
u=A.Y(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.m(12)
s=x.a3
s=A.B(new A.J(A.a([2,5,10,25],x.t),new C.d6z(p),s),s.k("aj.E"))
s=A.A(s,B.m,o,B.e,B.j,0,o,o)
r=A.Y(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.p(o,A.v(A.a([D.fn4,B.S,s,B.P,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.d,o,o,o,o,o,2,A.bo(o,new A.b4(4,A.m(10),B.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,B.lh,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,B.dL,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,B.dj,!0,B.a5,o,B.am,o,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(u,o,o,t,o,o,B.n),o,o,o,o,B.bR,o,o,1/0)
u=A.m(12)
r=A.I(A.Y(102,B.a2l.l()>>>16&255,B.a2l.l()>>>8&255,B.a2l.l()&255),B.r,1)
s=A.Y(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
q=A.m(10)
q=A.p(o,A.v(A.a([D.f4P,A.d("+ $"+B.k.aa(n*0.46,2),o,o,o,o,o,o,D.eWu,o,o,o),A.d("(46% return on $"+B.k.aa(p.e,2)+" bet)",o,o,o,o,o,o,B.oP,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(s,o,o,q,o,o,B.n),o,o,o,o,B.cj,o,o,1/0)
s=A.Y(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
n=A.m(10)
u=A.p(o,A.v(A.a([D.fdd,B.P,q,B.P,A.p(o,A.v(A.a([D.f05,A.d("$"+B.k.aa(m,2),o,o,o,o,o,o,D.eMk,o,o,o),A.d("8 pairs \xd7 $"+B.k.aa(m,2)+" each",o,o,o,o,o,o,B.oP,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(s,o,o,n,o,o,B.n),o,o,o,o,B.cj,o,o,1/0)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(D.bcg,o,r,u,o,o,B.n),o,o,o,o,B.bR,o,o,1/0)
r=A.fl(o,o,B.bk,o,o,o,o,o,o,B.c,o,B.fK,o,o,o,o,o,o,o,o)
return C.aNF(j,D.W7,A.cd(A.p(o,A.v(A.a([k,B.au,v,B.bB,w,B.S,t,B.P,u,B.S,new A.a5(1/0,o,A.i9(A.d("Start Game ($"+B.k.aa(p.e,2)+")",o,o,o,o,o,o,B.cc,o,o,o),p.gcqz(),r),o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,i,l,o,D.bOf,B.n),o,o,o,o,B.eN,o,o,1/0),B.q,o,B.y,o,E.afd,o,o,B.ai))}}
C.ajA.prototype={
T(){var w=x.s,v=x.t,u=x.S
return new C.ayw(B.cH,new A.ar(B.as,$.aw()),A.a([],w),A.a([],x.d4),A.a([],w),A.a([],w),A.a([],v),A.a([],v),A.a([],v),A.aY(u),A.aY(u),A.a([],v),A.a([],v),A.a([],v))},
ho(d){return this.y.$1(d)},
bp(){return this.z.$0()}}
C.ayw.prototype={
ghv(){var w=this.a.Q
return w!=null&&B.a.i(w).length!==0},
qF(d){return this.bK9(d)},
bK9(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$qF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.zu()
r=t.Nt()
w=s<=0?3:4
break
case 3:w=5
return A.b(t.a98(d),$async$qF)
case 5:w=1
break
case 4:q=B.k.D(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return A.b(t.te(d),$async$qF)
case 9:w=7
break
case 8:w=10
return A.b(t.DJ(q,s,r),$async$qF)
case 10:case 7:case 1:return A.h(u,v)}})
return A.i($async$qF,v)},
Ej(d,e,f,g){return this.coo(d,e,f,g)},
coo(d,e,f,g){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ej=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return A.b(C.bB8(s,C.bAN(),C.fRM(),d,e,f,g),$async$Ej)
case 3:case 1:return A.h(u,v)}})
return A.i($async$Ej,v)},
zu(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.aZZ(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&A.c()
return u+C.afZ(t,s.e.a.a)
case"memory":return s.ghv()&&D.mo.t(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.avX()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bi
case"color":return s.b5
case"reflex":return s.Z
default:u=s.b0
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
avX(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
Nt(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&A.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.fPY()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.b0
if(w!=null)return w.b
return 1}},
br(d){var w,v,u=this
u.bE(d)
if(u.f||u.c5)return
w=u.a
v=C.fqL(w.e,w.d.y2)
if(v!==C.fqL(d.e,d.d.y2)&&u.c!=null)u.m(new C.d8m(u,v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.bqp()
w=i.a
w.toString
$.t0=$.t0+1
i.Q=C.fqL(w.e,w.d.y2)
i.b1N()
i.aap()
if(i.ghv()){i.c5=!0
i.cU="Connecting to match\u2026"
i.cg="Both players enter the room together \u2014 play starts at the same time."
i.NP()
i.aa3()
i.bj=A.dF(B.fE,new C.d8p(i))}if(B.d.t(D.P4,i.a.e)){w=i.ghv()
v=i.a
if(w){w=v.d.b5
v=v.Q
v.toString
u=C.tC(w,v)
w=i.a
if(u!=null){w=w.c
v=w.a
w=w.c
t=J.a7(u)
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
m=s.b(t.h(u,h))?A.a0(s.a(t.h(u,h)),o,n):A.U(o,n)
s=p===r
l=s?q:r
if(s){o=m.h(0,"player2Name")
if(o==null)o=m.h(0,"playerOName")
t=o==null?t.h(u,"toName"):o
k=B.a.i(J.k(t==null?"":t))}else{o=m.h(0,"player1Name")
if(o==null)o=m.h(0,"playerXName")
t=o==null?t.h(u,"fromName"):o
k=B.a.i(J.k(t==null?"":t))}w=new C.aYb(!1,w,k.length===0||B.a.t(k,"@")?C.fPU(u,v,null):k,p,l,s)}else{w=w.c
w=C.fJZ(w.c,w.a)}w=i.bJ=w}else{w=v.c
w=i.bJ=C.fJZ(w.c,w.a)}v=C.huN()
v.bkr(i.a.e,i.d,w)
i.b0=v
i.r=v.c
if(i.ghv()){w=i.a
v=w.d.b5
w=w.Q
w.toString
u=C.tC(v,w)
m=u==null?null:J.q(u,h)
if(x.f.b(m)){w=i.b0
w.toString
w.b6Q(i.a.e,A.a0(m,x.N,x.z),i.a.c.a)
w=i.b0
i.r=w.c
if(w.e){if(w.r)j=D.Qw
else j=w.f===!0?D.pJ:D.GX
i.zw(j)}}}i.b3=A.dF(B.nA,new C.d8q(i))
if(i.ghv())i.ba=A.dF(B.oi,new C.d8r(i))}if(i.ghv()&&!B.d.t(D.P4,i.a.e))i.ba=A.dF(B.oi,new C.d8s(i))
i.as=A.dF(B.hf,new C.d8t(i))},
NP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$NP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghv()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tC(s.d.b5,q)
w=p!=null?3:4
break
case 3:w=5
return A.b(C.bz7(p,t.a.c.a),$async$NP)
case 5:o=e
if(t.c!=null)t.m(new C.d7C(t,o))
w=1
break
case 4:w=6
return A.b(C.K4(q,t.a.d.b5,!1),$async$NP)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return A.b(C.bz7(n,t.a.c.a),$async$NP)
case 7:o=e
if(t.c!=null)t.m(new C.d7D(t,o))
case 1:return A.h(u,v)}})
return A.i($async$NP,v)},
agF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$agF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghv()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.K4(r,s.d.b5,!1),$async$agF)
case 3:q=e
if(q==null||t.c==null){w=1
break}p=J.q(q,"sessionState")
if(!x.f.b(p)){w=1
break}o=A.a0(p,x.N,x.z)
if(t.a.e==="memory"){s=t.go
r=s.a
n=t.id
m=n.a
l=t.fx
t.aKA(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=B.k.O(j)
else{h=j==null?null:J.k(j)
i=A.c7(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)B.d.bn(t.fy,new C.d85(t))
if(i!=null&&t.fr.length!==0){s=A.B(t.dy,x.S)
B.d.v(s,t.dy)
r=new A.eT()
r.dI(i)
B.d.fn(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.m(new C.d86())}case 1:return A.h(u,v)}})
return A.i($async$agF,v)},
aa3(){var w=0,v=A.j(x.H),u=this
var $async$aa3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.ZW(!0),$async$aa3)
case 2:return A.h(null,v)}})
return A.i($async$aa3,v)},
ZW(d){return this.ce1(d)},
ce0(){return this.ZW(!1)},
ce1(b3){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$ZW=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghv()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
if(q.length===0){w=1
break}p=B.a.i(s.c.a.toLowerCase())
w=3
return A.b(C.K4(q,s.d.b5,b3),$async$ZW)
case 3:o=b5
if(o==null)o=C.tC(t.a.d.b5,q)
if(o==null){w=1
break}s=J.a7(o)
r=s.h(o,"fromEmail")
n=B.a.i(J.k(r==null?"":r).toLowerCase())
r=s.h(o,"toEmail")
m=B.a.i(J.k(r==null?"":r).toLowerCase())
l=s.h(o,"sessionState")
s=x.f
r=x.N
k=x.z
j=s.b(l)?A.a0(l,r,k):A.U(r,k)
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
d=s.b(e)?A.a0(e,r,k):A.U(r,k)
a0=j.h(0,"readyAt")
a1=s.b(a0)?A.a0(a0,r,k):A.U(r,k)
a2=new A.Q(Date.now(),0,!1).a5()
if(b3){d.n(0,p,!0)
a1.n(0,p,a2.ac())}if(i&&!d.ah(0,h))d.n(0,h,!1)
if(f&&!d.ah(0,g))d.n(0,g,!1)
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
if(a6!=null&&a7!=null){a8=(a6.c9(a7)?a6:a7).bN(5e5)
if(!new A.Q(Date.now(),0,!1).cW(a8)){a4=b2.a=a8.bN(4e6)
j.n(0,"startAt",a4.a5().ac())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.n(0,"memorySeed",B.o.F(1000*Date.now(),2147483647))
j.n(0,"memoryMatched",A.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.n(0,"patternSeed",B.o.F(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.hV5(t.a.d.b5,q,j)
t.a.bp()}if(t.c==null){w=1
break}b0=t.bC
if(b0==null)b0="your opponent"
if(!a5){t.m(new C.d7S(b2,t,b0))
w=1
break}if(s==null){t.m(new C.d7T(t))
w=1
break}b1=new A.Q(Date.now(),0,!1)
if(b1.cW(s)){s=s.by(b1).a
r=B.o.an(s,1e6)
t.m(new C.d7U(b2,t,r+(B.o.F(B.o.an(s,1000),1000)>0?1:0)))
w=1
break}if(t.c5){t.m(new C.d7V(b2,t))
b2=t.a.e
if(b2==="pattern")t.a70()
else if(b2==="memory"){t.b1M()
if(t.c!=null)t.m(new C.d7W())}}b2=t.bj
if(b2!=null)b2.a9(0)
t.bj=null
case 1:return A.h(u,v)}})
return A.i($async$ZW,v)},
aLu(d){var w,v,u,t,s=this
if(d!=null){w=new A.eT()
w.dI(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e0(v,x.S)
for(t=0;t<v;++t)u[t]=w.aD(9)
s.ry=u
s.x1=0
s.to=-1},
aLt(){return this.aLu(null)},
a70(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a70=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ghv()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.cby()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return A.b(C.K4(q,s.d.b5,!1),$async$a70)
case 5:r=t.aYI(e)
case 4:if(t.c==null){w=1
break}t.aLu(r)
t.m(new C.d74(t))
t.CX()
case 1:return A.h(u,v)}})
return A.i($async$a70,v)},
aYI(d){var w,v,u,t=null
if(d==null)return t
w=J.q(d,"sessionState")
if(!x.f.b(w))return t
v=J.q(w,"patternSeed")
if(typeof v=="number")return B.k.O(v)
u=v==null?t:J.k(v)
return A.c7(u==null?"":u,t)},
cby(){var w=this.a,v=w.Q
if(v==null)return null
return this.aYI(C.tC(w.d.b5,v))},
aap(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$aap=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$aap)
case 3:r=e
q=t.a
p=q.e
q=B.a.i(q.c.a.toLowerCase())
s=A.f3(J.q(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.m(new C.d7B(t,s))
case 1:return A.h(u,v)}})
return A.i($async$aap,v)},
oC(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n
var $async$oC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$oC)
case 2:p=e
o=u.a
n=o.e
o=B.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bBC().length
else s=n==="typing"?50:105
if(n==="typing")r=B.o.F(u.at+5,s)
else{q=u.at
r=t?B.o.F(q+6,s):B.o.F(q+1,s)}w=3
return A.b(p.aq("Int","ngmy_game_"+n+"_"+o,r),$async$oC)
case 3:u.at=r
return A.h(null,v)}})
return A.i($async$oC,v)},
a0P(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a0P=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghv()||t.b0==null||t.f||t.aR){w=1
break}if(t.c5){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.K4(r,s.d.b5,!1),$async$a0P)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.b5
s=s.Q
s.toString
p=C.tC(r,s)
s=p==null
if(!s){r=J.cD(p)
r.a8(p)
r.v(p,q)}r=J.a7(q)
o=r.h(q,"sessionState")
if(!x.f.b(o)){w=1
break}n=A.a0(o,x.N,x.z)
r=r.h(q,"sessionUpdatedAt")
m=A.bi(J.k(r==null?"":r))
s=s?null:J.q(p,"sessionUpdatedAt")
l=A.bi(J.k(s==null?"":s))
if(m!=null&&l!=null&&!m.c9(l)){w=1
break}s=t.b0
s.toString
r=t.a
s.b6Q(r.e,n,r.c.a)
r=t.b0
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.Qw
else k=r.f===!0?D.pJ:D.GX
w=7
return A.b(t.zw(k),$async$a0P)
case 7:w=5
break
case 6:if(t.c!=null)t.m(new C.d87())
case 5:case 1:return A.h(u,v)}})
return A.i($async$a0P,v)},
aeA(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$aeA=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghv()||q.b0==null||q.a.Q==null||q.aR){w=1
break}q.aR=!0
t=3
o=q.b0
o.toString
p=o.cFw(q.a.e)
o=q.a
n=o.d.b5
o=o.Q
o.toString
w=6
return A.b(C.aO0(n,o,p),$async$aeA)
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
return A.i($async$aeA,v)},
zw(d){return this.bR8(d)},
bR8(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$zw=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(t.Ih(s,s),$async$zw)
case 9:w=4
break
case 6:w=10
return A.b(t.Wq(s,s),$async$zw)
case 10:w=4
break
case 7:w=11
return A.b(t.a97(s,s),$async$zw)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghv()?12:13
break
case 12:w=14
return A.b(t.GV(),$async$zw)
case 14:case 13:case 1:return A.h(u,v)}})
return A.i($async$zw,v)},
YV(d,e){return this.c63(d,e)},
c63(d,e){var w=0,v=A.j(x.H),u,t=this
var $async$YV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=t.ghv()?3:5
break
case 3:w=6
return A.b(t.aeA(),$async$YV)
case 6:if(d===D.pI){w=1
break}w=4
break
case 5:if(d===D.pI){w=1
break}case 4:w=7
return A.b(t.zw(d),$async$YV)
case 7:case 1:return A.h(u,v)}})
return A.i($async$YV,v)},
aaj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aaj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghv()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tC(s.d.b5,q)
if(p==null){w=1
break}o=B.a.i(t.a.c.a.toLowerCase())
n=J.q(p,"sessionState")
s=x.f
if(!s.b(n)){w=1
break}r=x.N
m=x.z
l=A.a0(n,r,m)
k=l.h(0,"inGame")
j=s.b(k)?A.a0(k,r,m):A.U(r,m)
j.n(0,o,!1)
l.n(0,"inGame",j)
l.W(0,"startAt")
w=3
return A.b(C.aO0(t.a.d.b5,q,l),$async$aaj)
case 3:t.a.bp()
case 1:return A.h(u,v)}})
return A.i($async$aaj,v)},
GV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$GV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghv()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tC(s.d.b5,q)
if(p==null){w=1
break}o=J.q(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?A.a0(o,s,r):A.U(s,r)
n.n(0,"gameOver",!0)
C.fSc(t.a.d.b5,q,n)
C.hYo(t.a.d.b5,q)
w=3
return A.b(C.afO(t.a.d.b5),$async$GV)
case 3:t.a.bp()
case 1:return A.h(u,v)}})
return A.i($async$GV,v)},
q(){var w,v=this
if(v.ghv()&&!v.f)v.aaj()
else if(!v.f)v.bXw()
C.aYd();++v.RG
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
v.bqo()},
ctE(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&A.c()
v=v<=0||w.b0==null}if(v)return
if(w.c5)return
v=w.b0
v.toString
w.a.toString
if(v.a>=v.b){w.te("Goal completed!")
return}v=++w.rx
if(v%5===0)w.m(new C.d8g())},
b1N(){var w,v,u,t,s,r=this
r.x=A.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e0(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b1M()
break
case"scramble":r.bi=0
r.b1O()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=B.o.F(r.at,50)
v=J.e0(5,x.N)
for(t=0;t<5;++t)v[t]=D.d4T[B.o.F(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bM(0,B.c3)
break
case"math":r.y2=0
r.b1L()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b1P()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e0(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
B.d.fn(v,s)
if(!r.cgo()){w=J.e0(9,w)
for(u=0;u<9;++u)w[u]=u
B.d.fn(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
B.d.a8(w)
w.push(r.d.aD(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.Pm()
break
case"pattern":if(r.ghv()){r.ry=A.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aLt()
w=A.t(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.CX()}break
case"color":r.b5=0
r.b1G()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.Z=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b2U()
break
default:if(B.d.t(D.P4,w)){w=r.b0
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
aZZ(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
cgo(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return B.o.F(v,2)===0},
b1P(){var w,v,u,t,s,r=this,q=B.o.F(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e0(o,x.S)
for(w=0;w<o;w=v){v=w+1
n[w]=B.k.O(Math.pow(p,v))}u=B.k.O(Math.pow(p,o))
r.w=B.o.u(u)
r.az=B.d.aH(n,", ")
q=r.w
t=x.s
s=A.a([B.o.u(u+p),B.o.u(u-p),B.o.u(u+p*2)],t)
t=A.a([q],t)
B.d.v(t,s)
B.d.fn(t,r.d)
r.x=t},
b1L(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bBC().length-6)u.at=0
w=$.bBC()
v=w[B.o.F(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b1O(){var w=this,v=w.w=D.cKS[B.o.F(w.at+w.bi,105)]
w.ax=C.hYG(v)
w.ay=A.c1(v.length,null,!1,x.T)
w.ch=A.a(w.ax.split(""),x.s)
w.e.bM(0,B.c3)},
b2U(){var w=this,v=w.cx
if(v!=null)v.a9(0)
w.y=!1
w.z=null
w.cx=A.cM(A.dA(0,0,0,120+w.d.aD(280),0,0),new C.d84(w))},
bRb(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.qF("Too early \u2014 paid for "+t.Z+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=B.o.an(new A.Q(v,0,!1).by(u).a,1000)}if(w<520){t.m(new C.d7z(t))
v=t.Z
if(v>=5){t.oC()
t.te("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b2U()
t.m(new C.d7A())}}else t.qF("Too slow ("+w+"ms) \u2014 paid for "+t.Z+"/5.")},
csU(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=B.d.be(t.ay,new C.d8b())
if(u<0)return
t.m(new C.d8c(t,u,v,d))},
csV(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.m(new C.d8d(u,d,v))},
bBz(){var w,v,u=this
if(u.f)return
if(B.d.b8(u.ay,new C.d75())){u.c.I(x.q).f.R(D.eI1)
return}w=B.d.fS(u.ay)
v=u.w
v===$&&A.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.m(new C.d76(u))
if(u.ghv()&&D.mo.t(0,u.a.e))u.a_9()
if(u.bi>=5){u.oC()
if(u.ghv()&&D.mo.t(0,u.a.e))u.mG(!0)
else u.te("All 5 words unscrambled!")}else{u.b1O()
u.r="Word "+(u.bi+1)+" of 5 \u2014 place letters in order"
u.m(new C.d77())}}else u.qF("Wrong word \u2014 paid for "+u.bi+"/5.")},
b1G(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=B.o.F(w.at+w.b5*11,4),t=v[w.d.aD(4)]
w.aF=t
w.aE=v[u]
w.aO=[B.dD,B.dv,B.hL,B.r0][u]
w.w=t},
aKA(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=B.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a8(0)
w=h.id
w.a8(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=A.aY(x.S)
for(s=J.jo(v),s=s.gai(s),r=x.j;s.C();){q=s.gU(s)
p=B.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aW(r.b(o)?o:B.cG),n=p===g;q.C();){m=q.gU(q)
l=typeof m=="number"?B.k.O(m):A.c7(J.k(m),null)
if(l==null)continue
t.J(0,l)
if(n)w.J(0,l)}}f.v(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aW(k);w.C();){m=w.gU(w)
l=typeof m=="number"?B.k.O(m):A.c7(J.k(m),null)
if(l!=null)f.J(0,l)}}h.k2=B.k.bw(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=A.aN(J.q(j,g))
i=f==null?null:B.k.O(f)
if(i!=null)h.fx=i}},
b1M(){var w,v,u,t,s,r,q,p=this
p.fx=p.k2=0
p.go.a8(0)
p.id.a8(0)
p.fy=A.a([],x.t)
p.k1=!1
w=A.B(p.dy,x.S)
B.d.v(w,p.dy)
p.fr=w
if(p.ghv()&&p.a.Q!=null){w=p.a
v=w.d.b5
w=w.Q
w.toString
u=C.tC(v,w)
t=u==null?null:J.q(u,"sessionState")
w=x.N
v=x.z
s=x.f.b(t)?A.a0(t,w,v):A.U(w,v)
r=s.h(0,"memorySeed")
if(typeof r=="number")q=B.k.O(r)
else{w=r==null?null:J.k(r)
q=A.c7(w==null?"":w,null)}w=p.fr
if(q!=null){v=new A.eT()
v.dI(q)
B.d.fn(w,v)}else B.d.fn(w,p.d)
p.aKA(s)}else B.d.fn(p.fr,p.d)},
cdm(d){var w,v,u,t=this
if(t.c5)return
if(t.f||t.k1||t.go.t(0,d)||B.d.t(t.fy,d))return
t.m(new C.d7L(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.m(new C.d7M(t,v,u))
if(t.ghv()&&D.mo.t(0,t.a.e))t.a_9()
if(t.go.a>=t.fr.length){t.oC()
if(t.ghv()&&D.mo.t(0,t.a.e))t.mG(!0)
else t.aw_()}return}t.k1=!0
A.bN(D.bkq,new C.d7N(t),x.c)},
b19(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&A.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.m(new C.d7X(u))
if(u.y1>=5){u.oC()
u.te("All 5 questions correct!")}else{u.b1P()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.m(new C.d7Y())}}else u.qF(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.m(new C.d7Z(u))
if(u.y2>=6){u.oC()
u.te("All 6 math questions correct!")}else{u.b1L()
u.r="Question "+(u.y2+1)+" of 6"
u.m(new C.d8_())}}else{u.Uw(u.y2+1)
u.qF(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.m(new C.d80(u))
if(u.b5>=5){u.oC()
u.te("All 5 color rounds correct!")}else{u.b1G()
u.r="Round "+(u.b5+1)+" of 5 \u2014 tap the COLOR of the text"
u.m(new C.d81())}}else u.qF("Wrong color \u2014 paid for "+u.b5+"/5.")
return}if(v){u.oC()
u.aw_()}else u.c.I(x.q).f.R(D.eIL)},
csT(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=B.d.cG(q.k4,0)
v=B.o.an(d,3)
u=B.o.F(d,3)
t=B.o.an(w,3)
s=B.o.F(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.m(new C.d8a(q,d,w))
if(B.d.fS(q.k4)==="123456780"){q.oC()
q.aw_()}}},
Pm(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Pm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.m(new C.d7O(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.d7P(t,q).$0()
t.c.e5()
w=6
return A.b(A.bN(B.kz,null,r),$async$Pm)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.d7Q(t).$0()
t.c.e5()
w=7
return A.b(A.bN(B.jn,null,r),$async$Pm)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.m(new C.d7R(t))
case 1:return A.h(u,v)}})
return A.i($async$Pm,v)},
csW(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.qF("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.m(new C.d8e(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.oC()
u.te("Perfect Simon run!")
return}u.m(new C.d8f(u))
u.Pm()}},
CX(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$CX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.m(new C.d78(t))
s=x.H
w=3
return A.b(A.bN(B.jm,null,s),$async$CX)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.d79(t,o).$0()
t.c.e5()
w=7
return A.b(A.bN(B.WE,null,s),$async$CX)
case 7:if(t.c==null){w=1
break}new C.d7a(t).$0()
t.c.e5()
w=8
return A.b(A.bN(B.ir,null,s),$async$CX)
case 8:case 5:r.length===q||(0,A.K)(r),++p
w=4
break
case 6:if(t.c!=null)t.m(new C.d7b(t))
case 1:return A.h(u,v)}})
return A.i($async$CX,v)},
Uw(d){return this.bwm(d)},
bwm(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Uw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return A.b(A.ay(),$async$Uw)
case 3:s=f
r=t.a
q=r.e
r=B.a.i(r.c.a.toLowerCase())
p=$.bBC().length
o=B.o.F(t.at+d,p)
w=4
return A.b(s.aq("Int","ngmy_game_"+q+"_"+r,o),$async$Uw)
case 4:t.at=o
case 1:return A.h(u,v)}})
return A.i($async$Uw,v)},
csR(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.qF("Wrong tile \u2014 paid for "+v.avX()+"/"+C.fPY()+" moves.")
return}v.m(new C.d88(v,w))
if(v.ghv()&&D.mo.t(0,v.a.e))v.a_9()
if(v.x1>=w)if(v.x2>=7){v.oC()
if(v.ghv()&&D.mo.t(0,v.a.e))v.mG(!0)
else v.te("All 7 pattern rounds correct!")}else{v.m(new C.d89(v))
v.CX()}},
Ih(d,e){return this.cbO(d,e)},
te(d){return this.Ih(null,d)},
aw_(){return this.Ih(null,null)},
cbO(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ih=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a9(0)
s=t.b3
if(s!=null)s.a9(0)
r=t.a.x*1.46
t.m(new C.d7J(t,r))
q=B.o.u(1000*Date.now())
s=t.a
p=new A.d1(q,s.c.a,r,B.fz,B.fa,"Game payout: "+s.f,null,null,B.ck,new A.Q(Date.now(),0,!1))
A.afL(p,!0)
t.a.ho(p)
t.a.bp()
o=e==null?"+$"+B.k.aa(r,2)+" added to your balance!":e
s=t.a
C.ui(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.Ej(d,o,"YOU WIN!",!0),$async$Ih)
case 3:w=4
return A.b(C.afD(t.a.f,o),$async$Ih)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ih,v)},
Eh(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Eh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghv()&&D.mo.t(0,t.a.e)?3:4
break
case 3:w=5
return A.b(t.cns(),$async$Eh)
case 5:w=1
break
case 4:s=t.zu()
r=t.Nt()
w=r<=0||s<=0?6:7
break
case 6:w=8
return A.b(t.a98("Time's up \u2014 no progress to pay."),$async$Eh)
case 8:w=1
break
case 7:q=B.k.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return A.b(t.te("Complete! Max payout earned."),$async$Eh)
case 12:w=10
break
case 11:w=13
return A.b(t.DJ(q,s,r),$async$Eh)
case 13:case 10:case 1:return A.h(u,v)}})
return A.i($async$Eh,v)},
Pt(d){return this.cg5(d)},
a_9(){return this.Pt(!1)},
cg5(b1){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$Pt=A.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghv()&&D.mo.t(0,r.a.e))||r.a.Q==null){w=1
break}if(!b1){a1=new A.Q(Date.now(),0,!1)
a2=r.bR
if(a2!=null&&a1.by(a2).a<3e6){w=1
break}r.bR=a1}a2=r.a
a3=a2.Q
a3.toString
q=B.a.i(a3)
if(J.ab(q)===0){w=1
break}t=4
p=B.a.i(a2.c.a.toLowerCase())
a4=C.tC(a2.d.b5,q)
w=a4==null?7:9
break
case 7:w=10
return A.b(C.K4(q,r.a.d.b5,!1),$async$Pt)
case 10:w=8
break
case 9:b3=a4
case 8:o=b3
if(o==null){w=1
break}n=J.q(o,"sessionState")
a2=x.f
a3=x.N
a5=x.z
m=a2.b(n)?A.a0(n,a3,a5):A.U(a3,a5)
l=J.q(m,"scores")
k=a2.b(l)?A.a0(l,a3,a5):A.U(a3,a5)
J.aG(k,p,r.zu())
J.aG(m,"scores",k)
if(r.a.e==="memory"){j=J.q(m,"memoryMatchedBy")
i=a2.b(j)?A.a0(j,a3,a5):A.U(a3,a5)
a6=r.id
a6=A.B(a6,A.a2(a6).k("cl.E"))
B.d.fe(a6)
J.aG(i,p,a6)
J.aG(m,"memoryMatchedBy",i)
h=A.aY(x.S)
for(a6=i,a6=new A.ds(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aW(g);a8.C();){f=a8.gU(a8)
e=typeof f=="number"?B.k.O(f):A.c7(J.k(f),null)
if(e!=null)J.cf(h,e)}}a6=h
a6=A.B(a6,A.a2(a6).k("cl.E"))
B.d.fe(a6)
J.aG(m,"memoryMatched",a6)}d=J.q(m,"wagers")
a0=a2.b(d)?A.a0(d,a3,a5):A.U(a3,a5)
J.aG(a0,p,r.a.x)
J.aG(m,"wagers",a0)
w=11
return A.b(C.aO0(r.a.d.b5,q,m),$async$Pt)
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
return A.i($async$Pt,v)},
mG(d){return this.cnt(d)},
cns(){return this.mG(!1)},
cnt(b5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$mG=A.e(function(b6,b7){if(b6===1)return A.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghv()||t.a.Q==null?3:4
break
case 3:w=5
return A.b(t.Eh(),$async$mG)
case 5:w=1
break
case 4:w=6
return A.b(t.Pt(!0),$async$mG)
case 6:s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=B.a.i(s.c.a.toLowerCase())
w=7
return A.b(C.K4(q,s.d.b5,!0),$async$mG)
case 7:o=b7
n=t.Nt()
w=o==null?8:9
break
case 8:m=B.k.D(t.zu()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return A.b(t.a98("Time's up \u2014 no progress to pay."),$async$mG)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return A.b(t.te("Complete! Max payout earned."),$async$mG)
case 17:w=15
break
case 16:w=18
return A.b(t.DJ(m,t.zu(),n),$async$mG)
case 18:case 15:case 11:w=19
return A.b(t.GV(),$async$mG)
case 19:w=1
break
case 9:s=J.a7(o)
r=s.h(o,"fromEmail")
l=B.a.i(J.k(r==null?"":r).toLowerCase())
r=s.h(o,"toEmail")
k=B.a.i(J.k(r==null?"":r).toLowerCase())
j=p===l?k:l
i=s.h(o,"sessionState")
s=x.f
r=x.N
h=x.z
g=s.b(i)?A.a0(i,r,h):A.U(r,h)
f=g.h(0,"scores")
e=s.b(f)?A.a0(f,r,h):A.U(r,h)
d=A.aN(e.h(0,p))
a0=d==null?null:B.k.O(d)
if(a0==null)a0=t.zu()
d=A.aN(e.h(0,j))
a1=d==null?null:B.k.O(d)
if(a1==null)a1=0
a2=B.k.D(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return A.b(t.a98("Time's up \u2014 no progress to pay."),$async$mG)
case 22:w=23
return A.b(t.GV(),$async$mG)
case 23:w=1
break
case 21:a3=g.h(0,"wagers")
r=A.aN((s.b(a3)?A.a0(a3,r,h):A.U(r,h)).h(0,j))
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
t.m(new C.d82(t,a8,a2))
r=t.a
r.toString
h=B.o.u(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+B.k.aa(a7,2):d+" ("+b1+"/"+b2+")"
r.ho(new A.d1(h,b0,a9,B.fz,B.fa,d,null,null,B.ck,new A.Q(Date.now(),0,!1)))
t.a.bp()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+B.k.aa(a9,2)+" (includes opponent bonus $"+B.k.aa(a7,2)+")":"+$"+B.k.aa(a8,2)+" (your progress payout)"
s=t.a
C.ui(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return A.b(t.Ej(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$mG)
case 24:w=25
return A.b(t.GV(),$async$mG)
case 25:case 1:return A.h(u,v)}})
return A.i($async$mG,v)},
DJ(d,e,f){return this.cbM(d,e,f)},
cbM(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$DJ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a9(0)
s=t.b3
if(s!=null)s.a9(0)
r=t.a.x*1.46*d
t.m(new C.d7H(t,r,d))
s=B.o.u(1000*Date.now())
q=t.a
p=new A.d1(s,q.c.a,r,B.fz,B.fa,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,B.ck,new A.Q(Date.now(),0,!1))
A.afL(p,!0)
t.a.ho(p)
t.a.bp()
if(t.c==null){w=1
break}o=B.k.V(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&A.c()
m=q+C.afZ(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?B.d.cI(t.cy,0,new C.d7I()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+B.k.aa(r,2)+" ("+n+"% \u2014 "+A.t(k)+" mistakes/missed)":"+$"+B.k.aa(r,2)+" ("+n+"% of full prize)"
q=t.a
C.ui(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return A.b(t.Ej(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$DJ)
case 3:w=4
return A.b(C.afD(t.a.f,j),$async$DJ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$DJ,v)},
bXw(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.zu()
v=o.Nt()}catch(u){return}if(v<=0||w<=0)return
t=B.k.D(w/v,0,1)
s=A.nK(B.k.aa(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=B.o.u(1000*Date.now())
p=o.a
r.ho(new A.d1(q,p.c.a,s,B.fz,B.fa,"Game partial: "+p.f+" ("+A.t(w)+"/"+A.t(v)+", left early)",n,n,B.ck,new A.Q(Date.now(),0,!1)))
o.a.bp()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.ui(s,n,"Left early \xb7 +$"+B.k.aa(s,2)+" ("+A.t(w)+"/"+A.t(v)+")",q,r,p,n,!0)},
a97(d,e){return this.bLM(d,e)},
bLM(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a97=A.e(function(f,g){if(f===1)return A.f(g,v)
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
t.a.ho(new A.d1(r,q,p,B.fz,B.fa,"Game payout: "+s+" (draw, stake returned)",null,null,B.ck,new A.Q(o,0,!1)))
t.a.bp()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.ui(o,null,"Draw. Your $"+B.k.aa(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.Ej(d,"Nobody won, so your $"+B.k.aa(t.a.x,2)+" stake was returned.","DRAW",!1),$async$a97)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a97,v)},
Wq(d,e){return this.bLN(d,e)},
a98(d){return this.Wq(null,d)},
bLN(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Wq=A.e(function(f,g){if(f===1)return A.f(g,v)
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
C.ui(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return A.b(t.Ej(d,e,"YOU LOSE",!1),$async$Wq)
case 3:case 1:return A.h(u,v)}})
return A.i($async$Wq,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&A.c()
w=B.o.an(m,60)
m=B.a.aT(B.o.u(B.o.F(m,60)),2,"0")
v=A.aH(n,n,n,n,B.akK,n,n,n,new C.d8h(d),n,n,n,n,n,n)
if(o.ghv()){u=o.bC
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=A.D(A.d(u?t.f+" vs "+A.t(o.bC):t.f,n,2,B.a2,n,n,n,B.fW,n,n,n),1)
r=A.m(10)
q=x.p
r=A.A(A.a([v,s,A.p(n,C.aoM(new C.d8i(o),B.nV,t.c.a),B.f,n,n,new A.o(B.cR,n,n,r,n,n,B.n),n,n,n,n,B.fF,n,n,n)],q),B.m,n,B.e,B.j,0,n,n)
t=o.a
s=t.w
v=A.m(10)
s=A.p(n,A.A(A.a([A.D(A.d("Win $"+B.k.aa(t.x*1.46,2)+" \xb7 stake $"+B.k.aa(o.a.x,2)+" \u2022 Progress "+o.zu()+"/"+o.Nt(),n,n,n,n,n,n,D.eRg,n,n,n),1),new C.anX(o.a.c.a,new C.d8j(o),n),B.ab,D.bAh,B.d9,A.d(""+w+":"+m,n,n,n,n,n,n,B.n8,n,n,n)],q),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,n,v,n,new A.a6(B.a3,B.a7,B.x,s,n,n),B.n),n,n,n,n,B.h3,n,n,n)
v=o.a.w
m=A.T(v).k("J<1,w>")
m=A.B(new A.J(v,new C.d8k(),m),m.k("aj.E"))
w=A.m(14)
v=A.I(B.b8,B.r,1)
p=C.aNF(n,D.b35,A.bq(!0,new A.C(Ad.X_,A.v(A.a([r,s,B.P,new A.fj(new C.d8l(o),n),B.ao,A.D(A.p(n,o.bLL(),B.f,n,n,new A.o(n,n,v,w,n,new A.a6(B.a3,B.a7,B.x,m,n,n),B.n),n,n,n,n,B.cj,n,n,n),1)],q),B.aj,n,B.e,B.j,0,B.p),n),!0,!1,B.ah,!0,!0))
if(!o.c5)return p
m=A.Y(140,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255)
w=A.Y(242,B.io.l()>>>16&255,B.io.l()>>>8&255,B.io.l()&255)
v=A.m(18)
u=A.I(B.b8,B.r,1)
return new A.an(B.W,n,B.aa,B.q,A.a([p,A.bY(0,A.p(B.A,A.e2(A.p(n,A.v(A.a([D.eEd,B.ac,A.d(o.cU,n,n,n,n,n,n,D.eSG,B.L,n,n),B.ao,A.d(o.cg,n,n,n,n,n,n,D.eQY,B.L,n,n)],q),B.m,n,B.e,B.Q,0,B.p),B.f,n,n,new A.o(w,n,u,v,n,n,B.n),n,n,n,B.uV,B.x4,n,n,n),!1,n),B.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
bYu(){var w=this.k3
return A.cm(new C.d7G(this,w,B.k.dG(this.fr.length/w)))},
bLL(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.bYu()
if(m==="scramble"){m=o.r
m===$&&A.c()
w=x.l
return A.v(A.a([A.d(m,n,n,n,n,n,n,B.oP,n,n,n),A.d("Words "+o.bi+"/5",n,n,n,n,n,n,B.CF,n,n,n),B.ac,A.d("Tap letters below to fill each slot",n,n,n,n,n,n,A.l(n,n,A.Y(166,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.S,A.c4(B.fL,A.ip(o.ay.length,new C.d7o(o),!0,w),B.bx,6,6),B.aO,A.c4(B.fL,A.ip(o.ch.length,new C.d7p(o),!0,w),B.bx,8,8),B.aO,new A.a5(1/0,n,A.i9(D.fgv,o.gbBy(),A.fl(n,n,B.aD,n,n,n,n,n,n,B.c,n,n,B.ce,n,n,n,n,n,n,n)),n)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="typing"){m=o.w
m===$&&A.c()
return new C.aqc(m,o.e,new C.d7q(o),new C.d7r(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&A.c()
m=A.a([A.d(m,n,n,n,n,n,n,B.oP,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(A.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,B.CF,n,n,n))
m.push(B.ac)
if(o.a.e==="sequence"){w=o.az
w===$&&A.c()
w+=", ?"}else w=o.CW
m.push(A.f4(B.A,A.d(w,n,n,n,n,n,n,B.oO,B.L,n,n),B.f,B.dt))
m.push(B.aO)
w=o.x
B.d.v(m,new A.J(w,new C.d7s(o),A.T(w).k("J<1,r>")))
return A.v(m,B.m,n,B.e,B.j,0,B.p)}if(m==="puzzle")return A.cm(new C.d7t(o))
if(m==="simon"){m=o.r
m===$&&A.c()
return A.v(A.a([A.d(m,n,n,n,n,n,n,B.oP,n,n,n),A.d("Progress "+o.p3+"/21",n,n,n,n,n,n,B.CF,n,n,n),B.P,A.D(A.lP(1,A.ip(4,new C.d7u(o),!0,x.l),2,10,10,n,B.dP,!1),1)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="pattern")return A.cm(new C.d7v(o))
if(m==="color"){u=A.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[B.dD,B.dv,B.hL,B.r0]
m=o.r
m===$&&A.c()
m=A.d(m,n,n,n,n,n,n,B.oP,n,n,n)
w=A.d("Round "+o.b5+"/5",n,n,n,n,n,n,B.CF,n,n,n)
v=o.aE
v===$&&A.c()
s=o.aO
s===$&&A.c()
s=A.a([m,w,B.ac,A.d(v,n,n,n,n,n,n,A.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.aO],x.p)
r=J.e0(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=A.fl(n,n,A.Y(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,B.c,n,n,B.f3,n,n,n,n,n,n,n)
r[q]=new A.C(B.cK,new A.a5(1/0,n,A.i9(new A.x(u[q],n,B.ct,n,n,n,n,n,n,n,n,n),new C.d7w(o,u,q),m),n),n)}B.d.v(s,r)
return A.v(s,B.m,n,B.e,B.j,0,B.p)}if(m==="reflex"){m=o.y
p=m?B.bk:B.cb
w=o.r
w===$&&A.c()
w=A.d(w,n,n,n,n,n,n,B.a69,B.L,n,n)
v=A.d("Fast taps "+o.Z+"/5",n,n,n,n,n,n,D.eOw,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=A.d(m,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,n,n,n,Math.min(A.aI(s,B.bS,x.w).w.a.a*0.18,72),n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return A.rc(A.aE(B.c5,A.df(n,A.v(A.a([w,B.P,v,B.b2,s,B.b2,new A.C(B.Er,A.d(m,n,n,n,n,n,n,A.l(n,n,A.Y(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),B.m,n,B.b9,B.j,0,B.p),p,n,B.bb,n,T.Af,n,n,n,n,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gbRa(),n,n,n,n,n,n,!1,B.a9))}if(B.d.t(D.P4,m)&&o.b0!=null){m=o.a.e
w=o.b0
w.toString
return C.hO6(m,new C.d7x(o),new C.d7y(o),o.d,w)}m=o.r
m===$&&A.c()
return A.av(A.d(m,n,n,n,n,n,n,B.dj,n,n,n),n,n,n)}}
C.akq.prototype={
T(){return new C.beo()},
cLd(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.beo.prototype={
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.a,a0=d.c,a1=d.d
d=A.aI(a2,B.e6,x.w).w
w=x.p
v=A.a([A.bLA(!1,f.a.r,"INVESTMENT PLANS",e),B.d5],w)
u=a0.x
if(u!=null){t=u.d.bQ()
s=B.a.aT(B.o.u(A.bF(t)),2,"0")
r=B.a.b_(B.o.u(A.bx(t)+1),2)
q=A.m(18)
p=A.I(F.VM,B.r,2.2)
o=x.V
n=A.a([new A.ac(0,B.G,A.Y(89,B.ql.l()>>>16&255,B.ql.l()>>>8&255,B.ql.l()&255),B.eR,20),new A.ac(0,B.G,A.Y(102,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dn,14)],o)
m=A.ao(e,A.p(e,e,B.f,e,e,new A.o(A.Y(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),e,e,e,e,e,B.a6),e,120,e,e,e,e,e,120),e,e,e,-20,-24,e)
l=A.m(10)
k=A.I(F.VM,B.r,3.4)
o=A.a([new A.ac(0,B.G,A.Y(166,B.ql.l()>>>16&255,B.ql.l()>>>8&255,B.ql.l()&255),B.dz,10),new A.ac(0,B.G,A.Y(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cI,6)],o)
o=A.A(A.a([A.p(e,e,B.f,e,e,new A.o(e,e,k,l,o,new A.a6(B.ax,B.aC,B.x,D.cUZ,D.cxA,e),B.n),e,42,e,e,e,e,e,56),B.b2,f.b3F(a2,!0)],w),B.m,e,B.e,B.j,0,e,e)
l=A.CM(u.a,1,B.a2,D.eVL)
k=u.b
j=u.c
i=A.CM("Making $"+A.dy(k*j)+" Daily",1,B.a2,D.eVY)
h=A.CM(f.aZL(k),1,B.a2,D.ePd)
r=A.A(A.a([A.D(A.v(A.a([D.f9W,A.CM(a0.c,1,B.a2,D.aNy)],w),B.F,e,B.e,B.j,0,B.p),1),A.v(A.a([D.f9I,A.d(s+"/"+r,e,e,e,e,e,e,D.aNy,e,e,e)],w),B.dC,e,B.e,B.j,0,B.p)],w),B.m,e,B.e,B.j,0,e,e)
s=A.p(e,e,B.f,A.Y(89,D.wz.l()>>>16&255,D.wz.l()>>>8&255,D.wz.l()&255),e,e,e,1,e,e,e,e,e,e)
j=A.A(A.a([f.ap4("INVESTED","$"+A.dy(k),!0),f.ap4("DAILY ROI",B.k.aa(j*100,2)+"%",!0),f.ap4("DAYS LEFT",""+(261-u.f)+" d",!0)],w),B.m,e,B.hJ,B.j,0,e,e)
k=A.dy(u.e)
u=u.f
g=261-u>0?"ACTIVE":"ENDED"
B.d.v(v,A.a([D.fg4,B.u6,A.p(e,new A.an(B.W,e,B.aa,B.q,A.a([m,A.v(A.a([o,B.P,D.f8p,B.bB,l,B.au,i,B.au,h,B.P,r,B.ao,s,B.ao,j,B.au,A.CM("Earned $"+k+" \u2022 Clocked "+u+"/261 \u2022 "+g,1,B.a2,D.eV9)],w),B.F,e,B.e,B.Q,0,B.p)],w),e),B.f,e,e,new A.o(e,e,p,q,n,D.bP2,B.n),e,e,e,e,B.by,e,e,1/0),B.a5q],w))}v.push(D.f0K)
v.push(B.u6)
B.d.v(v,new A.J(a1,new C.dbU(f,a2),A.T(a1).k("J<1,r>")))
return A.cc(e,B.K,A.bq(!1,A.cd(A.v(v,B.F,e,B.e,B.j,0,B.p),B.q,e,B.y,e,new A.N(20,10,20,124+d.r.d),e,e,B.ai),!0,!1,B.ah,!0,!0),e,!1,!1,e,e)},
b3F(d,e){var w=null,v=A.Y(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(8),t=A.I(B.j2,B.r,1)
return A.p(w,A.A(A.a([A.V(B.aiF,B.c,w,w,w,16),B.d9,A.d("TAP",w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eE,w,w,w)},
aZL(d){var w=B.a.aT(B.o.u(B.k.V(d*100)),4,"0")
return"****  ****  ****  "+B.a.b_(w,w.length-4)},
ap4(d,e,f){var w=null,v=A.Y(217,D.wz.l()>>>16&255,D.wz.l()>>>8&255,D.wz.l()&255)
v=A.d(d,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.v(A.a([v,B.bB,A.CM(e,w,w,A.l(w,w,E.A_,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),B.F,w,B.e,B.j,0,B.p)},
cdQ(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gcPD(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
o=A.a([new A.ac(0,B.G,A.Y(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.QT,16),new A.ac(0,B.G,A.Y(115,B.ak.l()>>>16&255,B.ak.l()>>>8&255,B.ak.l()&255),B.dn,14),new A.ac(0,B.G,A.Y(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cI,8)],p)
n=A.ao(d,A.p(d,d,B.f,d,d,new A.o(d,d,d,d,d,new A.bR(B.A,0.5,B.x,d,0,A.a([A.Y(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),A.Y(0,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)],x.O),d,d),B.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=A.m(5)
l=A.I(B.c,B.r,2.2)
k=A.b0(4286436348)
k=A.Y(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=A.Y(B.k.V(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
i=A.b0(4279150057)
h=x.p
p=A.A(A.a([new A.a5(44,44,new A.an(B.W,d,B.aa,B.f,A.a([A.ao(d,A.eA(B.A,0.7853981633974483,A.p(d,d,B.f,d,d,new A.o(d,d,l,m,A.a([new A.ac(0.5,B.G,k,B.J,14),new A.ac(0,B.G,j,B.J,6),new A.ac(0,B.G,A.Y(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new A.u(0,2),4)],p),D.bNJ,B.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.e42],h),d),d),B.b2,e.b3F(b2,!0)],h),B.m,d,B.e,B.j,0,d,d)
a6=A.CM(a6,1,B.a2,D.eM1)
i=A.CM(e.aZL(a3),1,B.a2,D.f_9)
j=A.A(A.a([e.aZb(B.k.aa(2.86,2)+"%"),B.eb,e.aZb("261d")],h),B.m,d,B.e,B.j,0,d,d)
k=A.D(A.v(A.a([D.f1X,A.CM("$"+A.dy(a3),1,B.a2,D.eYY)],h),B.F,d,B.e,B.j,0,B.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=A.A(A.a([k,A.d(m,d,d,d,d,d,d,D.eMO,d,d,d)],h),B.dC,d,B.e,B.j,0,d,d)
k=A.p(d,d,B.f,A.Y(89,B.bv.l()>>>16&255,B.bv.l()>>>8&255,B.bv.l()&255),d,d,d,1,d,d,d,d,d,d)
l=A.A(A.a([A.D(e.awc("Daily","$"+A.dy(a4)),1),B.eb,A.D(e.awc("Total","$"+A.dy(a4*261)),1),B.eb,A.D(e.awc("Days","261"),1)],h),B.m,d,B.e,B.j,0,d,d)
g=q?d:new C.dbT(e,b3,a3,t)
f=B.k.V(127.5)
f=A.fl(d,d,B.bj,A.Y(f,B.ak.l()>>>16&255,B.ak.l()>>>8&255,B.ak.l()&255),A.Y(f,B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255),d,3,d,d,B.aP,d,d,d,d,new A.b7(A.m(10),D.aUB),d,d,d,d,d)
return A.p(d,new A.an(B.W,d,B.aa,B.f,A.a([n,A.v(A.a([p,B.bB,D.faD,B.bB,a6,B.cZ,i,B.fV,j,B.fV,m,B.fV,k,B.fV,l,B.P,new A.a5(1/0,40,A.i9(A.f4(B.A,A.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.eNd,d,d,d),B.f,B.eg),g,f),d)],h),B.F,d,B.e,B.Q,0,B.p)],h),d),B.f,d,d,new A.o(d,d,w,a0,o,D.bPB,B.n),d,d,d,B.kB,D.bmc,d,d,1/0)},
aZb(d){var w=null,v=A.Y(115,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(5),t=A.I(B.cm,B.r,1)
return A.p(w,A.d(d,w,w,w,w,w,w,D.eMq,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.EH,w,w,w)},
awc(d,e){var w=null,v=A.Y(97,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(7),t=A.I(B.aK,B.r,1)
return A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,D.eVw,w,w,w),B.u7,A.f4(B.a3,A.d(e,w,w,w,w,w,w,D.eY2,w,w,w),B.f,B.dt)],x.p),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.m7,w,w,w)}}
C.agM.prototype={
T(){var w=null,v=A.a([],x._),u=$.aw()
return new C.avH(v,new A.ar(B.as,u),new A.ar(B.as,u),A.mn(0,w,w),new A.hU(),D.Ql,C.afA(),A.a([],x.fw),A.aY(x.N),A.mn(0,w,w))}}
C.avH.prototype={
a_(){var w,v,u,t,s,r=this
r.a1()
w=r.a
w.toString
r.d=0
v=A.z2(0,1)
r.e!==$&&A.aQ()
r.e=v
r.ay=w.f.aE
w=r.k3=A.bl(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t].a
if(s.length!==0)u.J(0,s)}r.aau()
r.NO()
r.aoH()
r.cqm()
r.cqB()
$.aU.x1$.push(new C.czN(r))
r.a.toString},
NO(){var w=0,v=A.j(x.H),u,t=this,s
var $async$NO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aon(),$async$NO)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cz7(t,s))
case 1:return A.h(u,v)}})
return A.i($async$NO,v)},
gaxM(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gNK())return!0
return!1},
gNK(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaSm(){var w,v=this.CW
if(v==null)return B.bw
w=v.by(new A.Q(Date.now(),0,!1))
return w.a<0?B.bw:w},
bx9(){var w=this
if(w.a.c.w)return
if(w.gNK()){if(!w.cx)w.m(new C.cyY(w))}else if(w.cx)w.m(new C.cyZ(w))},
cjP(){this.m(new C.czh(this))},
tl(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$tl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.m(new C.cze(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.m(new C.czf(t))
w=1
break}w=3
return A.b(C.c6n(o.a,s),$async$tl)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return A.b(C.c6o(t.a.c.a,s),$async$tl)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.m(new C.czg(t,r,q))
t.csk()
t.bx9()
if(r===3)t.Xr(r)}case 1:return A.h(u,v)}})
return A.i($async$tl,v)},
Xr(d){return this.bYl(d)},
bYl(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Xr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return A.b(C.bBe(q,r,new C.cz9(t),d,s.c.a),$async$Xr)
case 3:case 1:return A.h(u,v)}})
return A.i($async$Xr,v)},
wO(d){return this.byE(d)},
aoH(){return this.wO(!1)},
byE(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$wO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return A.b(A.a6I(k,C.hcX(l.d)),$async$wO)
case 3:j=m
w=4
return A.b(C.c6N(k),$async$wO)
case 4:s=j.a=f
w=5
return A.b(A.apb(k),$async$wO)
case 5:r=f
w=!s.a&&J.cw(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.Ud(!0,l,q,p)
m.a=s
w=8
return A.b(C.aop(k,s),$async$wO)
case 8:case 7:w=9
return A.b(C.Td(k),$async$wO)
case 9:o=f
w=10
return A.b(C.a64(k),$async$wO)
case 10:n=f
if(t.c==null){w=1
break}t.m(new C.cz_(m,t,r,o,n))
case 1:return A.h(u,v)}})
return A.i($async$wO,v)},
P0(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$P0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.NO(),$async$P0)
case 3:s=t.c
if(s==null){w=1
break}r=A.eo(new C.czc(t),!1,null,x.H)
w=4
return A.b(A.a4(s,!1).ci(r),$async$P0)
case 4:w=5
return A.b(t.NO(),$async$P0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$P0,v)},
cur(){this.m(new C.czA(this))},
cqB(){var w=this,v=w.go
if(v!=null)v.a9(0)
if(w.a.c.w)return
w.go=A.dF(B.qz,new C.czu(w))},
csk(){var w=this,v=w.id
if(v!=null)v.a9(0)
w.id=null
if(!w.gNK()||w.CW==null)return
w.id=A.dF(B.hf,new C.czx(w))},
cqm(){var w=this,v=w.fy
if(v!=null)v.a9(0)
w.fy=A.dF(B.j3,new C.czt(w))
w.Eo()},
Eo(){return this.csj()},
csj(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Eo=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aE
t=4
w=7
return A.b(A.ay(),$async$Eo)
case 7:q=e
p=A.aT(J.q(q.a,"app_config"))
if(p!=null&&p.length!==0){o=B.R.aG(0,p,null)
if(x.f.b(o)){m=A.Cx(A.a0(o,x.N,x.z)).aE
i.a=m
r.a.f.aE=m}}w=10
return A.b(A.Kg(),$async$Eo)
case 10:w=e?8:9
break
case 8:w=11
return A.b(A.aNE(),$async$Eo)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aE=l
w=14
return A.b(q.aq("String","app_config",B.R.ao(k.ad(),null)),$async$Eo)
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
break}if(i.a!==r.ay)r.m(new C.czv(i,r))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Eo,v)},
b2A(){B.d.b1(this.f,new C.czs())},
aau(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$aau=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.M1(t.a.c.a),$async$aau)
case 3:q=e
if(t.c==null){w=1
break}s=A.a([],x._)
if(J.cw(q)){B.d.v(s,q)
B.d.b1(s,new C.cz4())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(A.E(["role","ai","text",r,"at",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.z))}t.m(new C.cz5(t,s))
t.a06(!0)
A.bN(B.jm,new C.cz6(t),x.H)
case 1:return A.h(u,v)}})
return A.i($async$aau,v)},
adY(){var w=0,v=A.j(x.H),u=this
var $async$adY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.amd(u.a.c.a,u.f),$async$adY)
case 2:return A.h(null,v)}})
return A.i($async$adY,v)},
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
a9u(d){var w,v=this
v.m(new C.cz2(v,d))
w=v.e
w===$&&A.c()
if(w.f.length!==0)w.As(d,B.cp,B.kz)
else $.aU.x1$.push(new C.cz3(v,d))
if(d===0)v.a06(!0)
if(d===1)v.clL(!0)},
a06(d){$.aU.x1$.push(new C.czk(this,d))},
axp(){return this.a06(!1)},
a_q(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_S(),$async$a_q)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==B.a.i(t.a.f.r))t.m(new C.czd(t))
case 1:return A.h(u,v)}})
return A.i($async$a_q,v)},
mF(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$mF=A.e(function(c8,c9){if(c8===1){s.push(c9)
w=t}for(;;)switch(w){case 0:c5=B.a.i(q.r.a.a)
if(J.ab(c5)===0){w=1
break}a8=q.a
a9=a8.c
w=!a9.w?3:4
break
case 3:b0=a8.f.xr
w=b0>0?5:6
break
case 5:w=9
return A.b(C.aoi(a9.a,b0),$async$mF)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return A.b(q.tl(),$async$mF)
case 10:q.m(new C.czl(q))
w=1
break
case 8:w=11
return A.b(q.tl(),$async$mF)
case 11:if(q.c!=null&&q.ch===3)q.Xr(3)
case 6:case 4:q.m(new C.czm(q,c5))
C.T0(q.a.c.a,"user",c5)
q.axp()
t=13
a8={}
w=16
return A.b(q.a_q(),$async$mF)
case 16:b1=B.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return A.b(A.a_S(),$async$mF)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.m(new C.czn(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.bzk("",null)
q.m(new C.czo(q,p))
C.T0(q.a.c.a,"ai",p)
q.axp()
r=[1]
w=14
break}o=A.mT(a9)
a9=q.a
n=""
m=C.hcX(a9.d)
w=C.hcQ(c5)?20:21
break
case 20:w=22
return A.b(C.c6M(q.a.c.a),$async$mF)
case 22:q.db=c9
w=23
return A.b(q.wO(!0),$async$mF)
case 23:case 21:w=24
return A.b(A.a6I(q.a.c.a,m),$async$mF)
case 24:l=c9
k=C.huG(l)
a9=k
b2=Date.now()
b3=new A.Q(b2,0,!1).bQ()
b2=B.a.aT(B.o.u(A.bF(b3)),2,"0")
b4=B.a.aT(B.o.u(A.bP(b3)),2,"0")
b5=B.a.aT(B.o.u(A.dg(b3)),2,"0")
b6=B.a.aT(B.o.u(A.fX(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+A.bx(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return A.b(C.Td(q.a.c.a),$async$mF)
case 25:i=c9
h=C.fYe(i,25)
w=26
return A.b(C.a64(q.a.c.a),$async$mF)
case 26:g=c9
f=C.fZS(g)
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
return A.b(C.afB(a9,q.a.c.a,c5),$async$mF)
case 27:a0=c9
a1=""
if(C.hcQ(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:B.a.i(b2).length!==0)===!0){b2.toString
b8=B.a.i(b2)}else{a9=a9.c
b8=B.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=A.t(d)
b4=A.t(j)
b5=q.a.c.w?"\n"+C.hQT(m)+"\n":""
b6=J.ab(n)!==0?"\n"+A.t(n)+"\n":""
b9=J.ab(a0)!==0?"\n"+A.t(a0)+"\n":""
c0=A.t(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hp2(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+A.t(c5)
w=28
return A.b(A.qx(o,a2,B.hj,null),$async$mF)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.bzk(a8.a,a3.a)
a4=c2
a5=A.hcc(a4)
c3=a5.a
a8.b=c3
if(B.d.gal(c3)){a9=A.B(C.hTB(c5),x.an)
a6=a9
J.fZ(a6,C.hTC(c5))
J.fZ(a6,C.hTD(c5))
J.fZ(a6,A.hbF(c5))
J.fZ(a6,C.hTG(c5,q.a.c.w))
a8.b=a6}c3=C.hSP(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return A.b(A.afR(c3,a6,m,q.a.c.a),$async$mF)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.m(new C.czp(a8,q,a7))
C.T0(q.a.c.a,"ai",a7)
if(J.cw(a8.b)&&q.c!=null)q.IW(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.m(new C.czq(q))
C.T0(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.m(new C.czr(q))
q.axp()
q.adY()
if(!q.a.c.w)q.tl()
w=r.pop()
break
case 15:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$mF,v)},
ccP(d){var w=A.U(x.N,x.z)
w.n(0,"type",d.a)
w.v(0,d.b)
return w},
ccQ(d){var w,v,u,t,s,r,q,p=J.q(d,"phoneActions")
if(!x.j.b(p))return B.i9
w=A.a([],x.Z)
for(v=J.aW(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gU(v)
if(u.b(r)){q=A.c9T(A.a0(r,t,s))
if(q!=null)w.push(q)}}return w},
IW(d){return this.ckj(d)},
ckj(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$IW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J.aW(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gU(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return A.b(C.afM(p,o,new C.czi(t,p)),$async$IW)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return A.b(A.FW(p,null,o,!1,!0,t.a.c.a),$async$IW)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.I(r).f
p.R(new A.b1(new A.x(m,null,null,null,null,null,null,null,null,null,null,null),B.cb,null,null,null,null,null,null,null,null,null,null,null,B.l0,!1,null,null,null,B.q,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return A.b(A.FW(p,l.f,o,k,n,j),$async$IW)
case 11:m=f
if(t.c==null||m==null){w=3
break}w=i?12:13
break
case 12:p=p.b
o=J.a7(p)
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
return A.b(C.aWz(p,A.a([new C.r0("out_"+1000*o,new A.Q(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$IW)
case 14:t.aoH()
case 13:p=t.c.I(r).f
p.R(new A.b1(new A.x(m,null,null,null,null,null,null,null,null,null,null,null),B.d2,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null))
w=3
break
case 4:case 1:return A.h(u,v)}})
return A.i($async$IW,v)},
QI(d){return this.csO(d)},
csO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$QI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return A.b(C.afM(d,n,new C.czz(t)),$async$QI)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return A.b(A.FW(d,null,n,!1,!0,t.a.c.a),$async$QI)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.I(x.q).f.R(A.b2(null,null,null,B.cb,null,B.q,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.l0,null,null,null,null,null,null,null,null,null,null))
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
return A.b(A.FW(d,q.f,r,p,n,o),$async$QI)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.I(x.q).f.R(A.b2(null,null,null,B.d2,null,B.q,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QI,v)},
clL(d){$.aU.x1$.push(new C.czj(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.M(d).ax.a===B.H,j=k?B.db:B.A5,i=m.d
i===$&&A.c()
w=x.O
w=k?A.a([B.adr,D.b8t],w):A.a([B.aI,B.wv],w)
v=A.m(22)
u=A.a([new A.ac(0,B.G,A.Y(71,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),B.cw,16)],x.V)
t=m.a.c.w?m.gc8x():l
s=A.Y(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
r=A.I(B.bZ,B.r,1.5)
t=A.aE(l,A.p(l,C.fOi(m.a.f.Q,48),B.f,l,l,new A.o(s,l,r,l,l,l,B.a6),l,48,l,l,l,l,l,48),B.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,B.a9)
r=A.d("NGMY Helper",l,1,B.a2,l,l,l,B.dI,l,l,l)
s=A.p(l,l,B.f,l,l,D.aWH,l,8,l,l,l,l,l,8)
if(m.gaxM()&&m.d===0)q=m.gNK()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=A.p(l,A.A(A.a([t,B.bd,A.D(A.v(A.a([r,B.bB,A.A(A.a([s,B.bn,A.D(A.d(q,l,1,B.a2,l,l,l,A.l(l,l,A.Y(B.k.V(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,B.cs,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,B.mg,l,l,l,new C.czF(d),l,l,l,l,l,l)],p),B.m,l,B.e,B.j,0,l,l),B.f,l,l,new A.o(l,l,l,v,u,new A.a6(B.ax,B.aC,B.x,w,l,l),B.n),l,l,l,G.afc,D.bmT,l,l,l)
v=k?D.rL:B.c
u=A.m(14)
t=A.I(k?B.bF:B.e2,B.r,1)
u=A.p(l,A.A(A.a([m.bBj(),m.csx(1,B.lA,"Music")],p),B.m,l,B.e,B.j,0,l,l),B.f,l,l,new A.o(v,l,t,u,l,l,B.n),l,l,l,l,B.en,l,l,l)
t=m.e
t===$&&A.c()
if(m.gaxM()){v=A.a([],p)
if(m.gNK()){s=A.Y(38,B.d2.l()>>>16&255,B.d2.l()>>>8&255,B.d2.l()&255)
r=A.m(12)
q=A.I(A.Y(115,B.d2.l()>>>16&255,B.d2.l()>>>8&255,B.d2.l()&255),B.r,1)
v.push(new A.C(B.L4,A.p(l,A.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hsZ(m.gaSm())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.eXx,B.L,l,l),B.f,l,l,new A.o(s,l,q,r,l,l,B.n),l,l,l,l,B.eu,l,l,1/0),l))}if(m.cy&&!m.gNK()){s=A.Y(31,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
r=A.m(12)
q=A.m(12)
o=A.V(B.qG,k?B.iM:B.h_,l,l,l,16)
v.push(new A.C(B.L4,A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,new A.C(B.eu,A.A(A.a([o,B.bn,A.d("Back to NGMY Helper AI",l,l,l,l,l,l,A.l(l,l,k?B.iM:B.h_,l,l,l,l,l,l,l,l,12,l,l,B.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),B.m,l,B.b9,B.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcjO(),l,l,l,l,l,l,l),B.f,s,0,l,l,l,l,l,B.ae),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcuq():l
v.push(A.D(new C.aol(s,q,new C.czG(),r,o,l),1))
v=A.v(v,B.m,l,B.e,B.j,0,B.p)}else v=m.bBk(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.h_L(r)
t=A.a([w,B.ac,new A.C(B.hG,u,l),B.P,A.D(A.h0K(A.a([v,new C.aoo(q,o,n,new C.czH(m,d),s,l)],p),B.q,t,B.y,new C.czI(m),l),1)],p)
if(m.d===0&&!m.gaxM()){w=A.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a15:D.a0s
w.push(new A.a5(l,36,A.hD(l,new C.czJ(m),v.length,l,l,B.aU,new C.czK(),!1),l))}if(m.ax&&m.f.length<=1)w.push(B.P)
v=m.r
u=A.l(l,l,k?B.c:B.bh,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=A.l(l,l,k?B.ay:B.dy,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?B.w:B.c
r=A.Y(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=A.m(22)
o=A.m(22)
n=k?B.b8:B.f7
u=A.D(A.aL(l,B.T,!1,l,!0,B.q,l,A.aM(),v,l,l,l,l,l,2,A.bo(l,new A.b4(4,q,B.Y),l,B.Ao,l,l,l,l,!0,new A.b4(4,o,new A.az(n,1,B.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.y,!0,l,!0,l,!1,l,B.ag,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.czL(m),l,!1,l,l,!1,l,!0,l,B.a8,l,l,l,l,l,l,l,l,l,l,l,u,!0,B.a5,l,B.am,l,B.aMu,l,l),1)
s=m.at
r=s?l:m.gcmM()
w.push(A.A(A.a([u,new A.I1(v,B.aI,l),B.bn,A.aF(!1,B.a1,!0,l,A.aK(!1,l,!0,new A.a5(44,44,s?D.dYI:P.akC,l),B.cL,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),B.f,B.aI,0,l,l,B.cL,l,l,B.ae)],p),B.dC,l,B.e,B.j,0,l,l))
w=A.v(w,B.m,l,B.e,B.Q,0,B.p)
v=k?B.kX:B.c
t.push(A.tD(B.rx,A.p(l,new A.C(B.Ak,w,l),B.f,l,l,new A.o(v,l,A.I(k?A.Y(41,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Y(18,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.r,1),B.rx,l,l,B.n),l,l,l,l,l,l,l,l),14,!1))}return new A.V6(i,new C.czM(m),A.cc(l,j,A.bq(!0,A.v(t,B.m,l,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),l,!1,!1,l,l),l)},
bBj(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===0
p=this.c
p.toString
v=A.M(p).ax.a===B.H
if(w)p=A.Y(B.k.V(255*(v?0.25:0.12)),B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
else p=B.K
u=A.m(11)
t=w?A.I(A.Y(B.k.V(127.5),B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),B.r,1):q
s=A.V(B.to,w?B.aI:B.cU,q,q,q,17)
if(w)r=v?B.c:B.aA
else r=B.cU
return A.D(A.aE(q,A.df(q,A.A(A.a([s,B.bn,A.d("Chat",q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.b9,B.j,0,q,q),q,q,B.bb,new A.o(p,q,t,u,q,q,B.n),B.eD,q,q,q,B.uM,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cz0(this),q,q,q,q,q,q,!1,B.a9),1)},
csx(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===d
p=this.c
p.toString
v=A.M(p).ax.a===B.H
if(w)p=A.Y(B.k.V(255*(v?0.25:0.12)),B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
else p=B.K
u=A.m(11)
t=w?A.I(A.Y(B.k.V(127.5),B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),B.r,1):q
s=A.V(e,w?B.aI:B.cU,q,q,q,17)
if(w)r=v?B.c:B.aA
else r=B.cU
r=A.a([s,B.bn,A.d(f,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return A.D(A.aE(q,A.df(q,A.A(r,B.m,q,B.b9,B.j,0,q,q),q,q,B.bb,new A.o(p,q,t,u,q,q,B.n),B.eD,q,q,q,B.uM,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.czy(this,d),q,q,q,q,q,q,!1,B.a9),1)},
bBk(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.bdx:A.Y(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
w=A.m(18)
v=A.I(d?B.dq:B.aK,B.r,1)
u=q===0?1:q
return A.p(s,A.jZ(!0,s,t.ok,new C.cz1(t,e,d),u,s,B.c0,s,s,!1,!1),B.f,s,s,new A.o(r,s,v,w,s,s,B.n),s,s,s,B.hG,s,s,s,s)},
aM3(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a7(d),m=J.y(n.h(d,"role"),"user"),l=m?B.i9:this.ccQ(d),k=m?B.lG:B.e,j=x.p,i=A.a([],j),h=!m
if(h)B.d.v(i,A.a([new A.a5(28,28,C.fOi(this.a.f.Q,28),o),B.ab],j))
w=m?B.dC:B.F
j=A.a([],j)
if(h)j.push(D.dYY)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=B.aI
else u=e?B.VX:B.aP
t=m?16:4
s=m?4:16
if(m)r=o
else r=A.I(e?B.bF:B.aK,B.r,1)
q=A.a([new A.ac(0,B.G,A.Y(10,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dz,6)],x.V)
if(f)n=A.d("typing\u2026",o,o,o,o,o,o,A.l(o,o,e?B.ay:B.dy,o,o,o,o,o,o,o,o,12,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=B.c
else p=e?B.ad:B.bj
p=A.d(n,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(A.fKs(m,A.p(o,n,B.f,o,o,new A.o(u,o,r,new A.bs(B.kQ,B.kQ,new A.aV(t,t),new A.aV(s,s)),q,o,B.n),o,o,o,o,Aa.X2,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(A.hch(l,e,this.gcsN()))
i.push(new A.dl(1,B.ch,A.v(j,w,o,B.e,B.j,0,B.p),o))
if(m)i.push(B.d9)
return new A.C(B.d8,A.A(i,B.dC,o,k,B.j,0,o,o),o)},
bBi(d,e){return this.aM3(d,e,!1)}}
C.aII.prototype={
a_(){this.a1()
$.yb().aM(0,this.gDD())},
q(){$.yb().a3(0,this.gDD())
this.a2()}}
C.aIJ.prototype={
a_(){this.a1()
$.yb().aM(0,this.gDD())},
q(){$.yb().a3(0,this.gDD())
this.a2()}}
C.aIK.prototype={
a_(){this.a1()
$.yb().aM(0,this.gDD())},
q(){$.yb().a3(0,this.gDD())
this.a2()}}
C.aJG.prototype={
a_(){this.a1()
$.yb().aM(0,this.gDD())},
q(){$.yb().a3(0,this.gDD())
this.a2()}}
C.UW.prototype={
a4(){return"NgmySnapshotResolveOutcome."+this.b}}
C.alY.prototype={
T(){return new C.aAC()}}
C.aAC.prototype={
a_(){var w,v=this
v.a1()
w=v.a
v.d=w.d
v.e=A.bl(w.e,!0,x.o)
v.f=v.a.f},
kE(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
zH(d,e){return this.cxM(d,e)},
cxM(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$zH=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dsn(q,e))
t=3
w=6
return A.b(d.$0(),$async$zH)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.m(new C.dso(q))
w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$zH,v)},
A4(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$A4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=t.d
q===$&&A.c()
w=3
return A.b(A.ul(r,q),$async$A4)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dse(t,s))
case 1:return A.h(u,v)}})
return A.i($async$A4,v)},
a82(){var w=0,v=A.j(x.gE),u,t=this,s,r,q,p
var $async$a82=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.A4(),$async$a82)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&A.c()
q=t.e
q===$&&A.c()
p=t.f
p===$&&A.c()
u=A.MO(s,A.J7(A.bW2(r,q,s,p).eH(),null,"  "))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a82,v)},
Wa(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Wa=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oQ(s,t.a.c,!1),$async$Wa)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zH(new C.dsc(t),"Preparing download\u2026"),$async$Wa)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wa,v)},
XC(){var w=0,v=A.j(x.H),u,t=this,s
var $async$XC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oQ(s,t.a.c,!1),$async$XC)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zH(new C.dsm(t),"Creating QR code\u2026"),$async$XC)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XC,v)},
XB(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hLO(r),$async$XB)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.zH(new C.dsb(t,s),"Looking up code\u2026"),$async$XB)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XB,v)},
abj(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$abj=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wI.c3().L3(B.Pp,B.tj,!0),$async$abj)
case 7:r=e
p=r
q=p==null?null:J.fn(p.a)
if(q==null){u=null
w=1
break}if(q.c!=null){p=q.c
p.toString
p=!B.aG.gal(p)}else p=!1
if(p){p=q.c
p.toString
p=A.jj(p,0,null)
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
case 6:u=A.FS()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$abj,v)},
zl(d,e,f){return this.bDD(d,e,f)},
aNh(d,e){return this.zl(d,!1,e)},
bDC(d){return this.zl(d,!1,!1)},
bDD(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zl=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(t.A4(),$async$zl)
case 3:if(t.c==null){w=1
break}if(!C.bW7(d,t.a.c,null)){t.kE(C.bW8(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&A.c()
s=!C.hoK(d,s)}if(s){t.kE(y.B)
w=1
break}r=d.as
q=J.ck(r)
s=t.c
s.toString
w=4
return A.b(C.hM0(s,q,t.a.c,d),$async$zl)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=A.lz(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,B.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&A.c()
r=o}w=5
return A.b(A.r4(s,p,r,!1,null,null,d.ax),$async$zl)
case 5:if(t.c==null){w=1
break}t.m(new C.dsa(t,p,r,d))
t.kE("Restored your local Growth Income. Go back to see it updated.")
case 1:return A.h(u,v)}})
return A.i($async$zl,v)},
abi(){var w=0,v=A.j(x.H),u=this
var $async$abi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.zH(new C.dsd(u),"Reading file\u2026"),$async$abi)
case 2:return A.h(null,v)}})
return A.i($async$abi,v)},
Vu(d){return this.bET(d)},
bET(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Vu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&A.c()
s=new A.d1("local_qr_dep_"+1000*r,q.a,d,B.fo,B.fa,"Admin deposit ($"+A.dy(d)+")",null,null,B.ck,new A.Q(Date.now(),0,!1))
C.c8O(t.d,s)
q=t.e
q===$&&A.c()
r=A.B(q,x.o)
r.push(s)
w=3
return A.b(A.r4(t.a.c,t.d,r,!0,null,null,null),$async$Vu)
case 3:w=4
return A.b(t.A4(),$async$Vu)
case 4:if(t.c==null){w=1
break}t.kE("Deposited $"+A.dy(d)+" to your local wallet.")
case 1:return A.h(u,v)}})
return A.i($async$Vu,v)},
b2_(d){var w=null
return A.c9(w,w,!0,w,new C.dsk(),d,w,!0,!0,x.N)},
UC(d){return this.bx3(d)},
bx3(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$UC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return A.b(t.Vu(d.b),$async$UC)
case 5:w=1
break
case 4:s=d.c
t.kE(s==null?"Could not apply deposit.":s)
case 1:return A.h(u,v)}})
return A.i($async$UC,v)},
DY(d){return this.cht(d)},
cht(d){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o,n
var $async$DY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.A4(),$async$DY)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return A.b(C.aZq(d,t.a.c),$async$DY)
case 4:s=f
if(!s.a){u=!1
w=1
break}if(s.b){t.kE("This deposit code was already used.")
u=!0
w=1
break}if(s.d){t.kE(y.y)
u=!0
w=1
break}if(s.c){t.kE(y.j)
u=!0
w=1
break}r=t.c
if(r==null){u=!0
w=1
break}w=5
return A.b(t.b2_(r),$async$DY)
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
return A.b(C.c8H(d,o,n.a,r,p),$async$DY)
case 7:w=6
return A.b(t.UC(f),$async$DY)
case 6:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DY,v)},
DZ(d){return this.chu(d)},
chu(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$DZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.A4(),$async$DZ)
case 3:if(t.c==null){w=1
break}w=4
return A.b(C.c8G(d,t.a.c),$async$DZ)
case 4:s=f
if(!s.a){t.kE(y.m)
w=1
break}if(s.b){t.kE("This deposit code was already used.")
w=1
break}if(s.d){t.kE(y.y)
w=1
break}if(s.c){t.kE(y.j)
w=1
break}r=t.c
if(r==null){w=1
break}w=5
return A.b(t.b2_(r),$async$DZ)
case 5:q=f
if(q==null||B.a.i(q).length===0){w=1
break}r=t.a.c
p=B.a.i(q)
o=t.e
o===$&&A.c()
n=t.d
n===$&&A.c()
w=7
return A.b(C.Uy(o,n.a,d,r,p),$async$DZ)
case 7:w=6
return A.b(t.UC(f),$async$DZ)
case 6:case 1:return A.h(u,v)}})
return A.i($async$DZ,v)},
O2(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$O2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Cf()){t.kE("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a4(s,!1).ci(A.eo(new C.dsf(),!0,null,x.N)),$async$O2)
case 3:r=e
if(r==null||B.a.i(r).length===0){w=1
break}w=B.a.a0(B.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return A.b(t.zH(new C.dsg(t,r),"Applying deposit\u2026"),$async$O2)
case 6:w=1
break
case 5:w=7
return A.b(t.zH(new C.dsh(t,r),"Loading\u2026"),$async$O2)
case 7:case 1:return A.h(u,v)}})
return A.i($async$O2,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=n?B.j_:B.pd,l=n?B.c:B.M,k=n?B.aQ:B.ak,j=n?B.bF:B.w.j(0.06),i=x.p
j=A.A(A.a([A.aK(!1,o,!0,A.p(B.A,A.V(B.ez,l,o,o,o,16),B.f,o,o,new A.o(j,o,o,o,o,o,B.a6),o,38,o,o,o,o,o,38),B.cL,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dsp(d),o,o,o,o,o,o,o)],i),B.m,o,B.e,B.j,0,o,o)
w=A.d("Backup & Restore",o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,B.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=A.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,B.cs,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=A.D(new C.a_d(D.bxF,"Download",E.a1l,u?o:p.gbJZ(),o),1)
t=A.A(A.a([t,B.eA,A.D(new C.a_d(B.ja,"Show QR",D.d7T,u?o:p.gbZY(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r
s=A.D(new C.a_d(D.bxG,"Upload",B.a0N,u?o:p.gbZW(),o),1)
s=A.A(A.a([s,B.eA,A.D(new C.a_d(B.iO,"Scan QR",D.cL4,u?o:p.gbZX(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r?o:p.gbZV()
r=n?B.c.j(0.06):B.aT.j(0.08)
q=A.m(16)
q=A.a([A.cJ(A.a([j,B.az,w,B.P,v,B.kn,t,B.az,s,B.az,new C.bpx(B.qO,"Enter Code",B.a08,u,o),B.kn,A.p(o,A.A(A.a([A.V(B.h6,B.aT,o,o,o,18),B.aw,A.D(A.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.F,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(r,o,o,q,o,o,B.n),o,o,o,o,B.j6,o,o,o)],i),o,A9.Li,o,o,B.ai,!1)],i)
if(p.r){j=n?B.i4:B.c
w=p.w
if(w==null)w="Working\u2026"
q.push(A.ao(0,A.aF(!1,B.a1,!0,o,new A.C(B.As,A.A(A.a([I.aLs,B.bd,A.D(A.d(w,o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.m,o,B.e,B.j,0,o,o),o),B.f,j,8,o,o,o,o,o,B.ae),o,o,0,0,o,o))}return A.cc(o,m,A.bq(!1,new A.an(B.W,o,B.aa,B.q,q,o),!0,!1,B.ah,!0,!0),o,!1,!1,o,o)}}
C.a_d.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ac(0,B.G,B.d.gam(s).j(0.35),B.dn,16)],x.V),p=B.c.j(0.22)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(v,A.v(A.a([A.p(v,A.V(w.c,B.c,v,v,v,30),B.f,v,v,new A.o(p,v,v,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.ac,A.d(w.d,v,v,v,v,v,v,B.rn,v,v,v)],x.p),B.m,v,B.b9,B.j,0,B.p),B.f,v,v,new A.o(v,v,v,r,q,new A.a6(B.ax,B.aC,B.x,s,v,v),B.n),v,140,v,v,B.c0,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ae)}}
C.bpx.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ac(0,B.G,B.d.gam(s).j(0.35),B.dn,16)],x.V),p=B.c.j(0.22)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(v,A.A(A.a([A.p(v,A.V(w.c,B.c,v,v,v,24),B.f,v,v,new A.o(p,v,v,v,v,v,B.a6),v,44,v,v,v,v,v,44),B.eA,A.d(w.d,v,v,v,v,v,v,B.rn,v,v,v)],x.p),B.m,v,B.b9,B.j,0,v,v),B.f,v,v,new A.o(v,v,v,r,q,new A.a6(B.ax,B.aC,B.x,s,v,v),B.n),v,v,v,v,D.boZ,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ae)}}
C.YS.prototype={
T(){return new C.bgM()}}
C.bgM.prototype={
gau8(){var w=this.e
return w===$?this.e=this.a.d:w},
a_(){var w=this
w.a1()
w.PF()
w.f=A.dF(B.nx,new C.dst(w))},
q(){var w=this.f
if(w!=null)w.a9(0)
this.a2()},
PF(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$PF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return A.b(A.ul(q.e,q.f),$async$PF)
case 3:q=e.a
s=A.bW2(q[3],q[1],t.a.e,q[4])
w=4
return A.b(A.MO(t.a.e,A.J7(s.eH(),null,"  ")),$async$PF)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.m(new C.dsq(t,r))
case 1:return A.h(u,v)}})
return A.i($async$PF,v)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=u?B.j_:B.pd,s=u?B.i4:B.c,r=u?B.c:B.bh,q=A.eC(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,B.aOm,v,v,v,1,v,!0),p=A.m(24),o=A.I(B.aT.j(0.35),B.r,1),n=w.d,m=A.pv(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,B.c),l=A.d("Code: "+w.gau8(),v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=A.m(20),j=B.aT.j(0.12),i=A.m(20),h=x.p
i=A.aK(!1,k,!0,A.p(v,A.A(A.a([A.V(B.fI,B.aT,v,v,v,14),B.bn,A.d("Copy code",v,v,v,v,v,v,A.l(v,v,B.aT,v,v,v,v,v,v,v,v,12,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),B.m,v,B.e,B.Q,0,v,v),B.f,v,v,new A.o(j,v,v,i,v,v,B.n),v,v,v,v,B.m6,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dsr(w,d),v,v,v,v,v,v,v)
return A.cc(q,t,new A.C(B.a8,A.v(A.a([A.D(A.p(v,A.v(A.a([B.P,m,B.bu,l,B.P,i,B.az,A.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.ak,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v)],h),B.m,v,B.b9,B.j,0,B.p),B.f,v,v,new A.o(s,v,o,p,v,v,B.n),v,v,v,v,B.a8,v,v,1/0),1),B.aO,new A.a5(1/0,v,A.bJ(B.z4,new C.dss(d),A.bk(B.aT,v,v,v,v,B.fK,v,v,v,v,v,v)),v)],h),B.m,v,B.e,B.j,0,B.p),v),v,!1,!1,v,v)}}
C.YT.prototype={
T(){return new C.bgN(A.yH(B.wR,B.nh,B.tE))}}
C.bgN.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.cc(A.eC(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fgq,w,w,w,1,w,!0),B.w,A.yG(this.d,B.bQ,new C.dsu(this,d)),w,!1,!1,w,w)}}
C.ad3.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.M(a0).ax.a===B.H,k=l?B.i4:B.c,j=l?B.c:B.M,i=l?B.aQ:B.ak,h=l?B.b8:B.e2,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=A.m(26)
w=A.I(B.aT.j(0.35),B.r,1)
v=A.a([new A.ac(0,B.G,B.aT.j(0.16),B.jU,36)],x.V)
u=A.p(m,D.bDI,B.f,m,m,new A.o(m,m,m,A.m(18),B.a1k,D.bN4,B.n),m,58,m,m,m,m,m,58)
t=A.d("Restore local backup?",m,m,m,m,m,m,A.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,B.u,m,m,!0,m,-0.3,m,m,m,m,m,m),B.L,m,m)
s=A.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,A.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),B.L,m,m)
r=l?B.j_:B.pd
q=A.m(18)
p=A.I(B.aT.j(0.22),B.r,1)
o=x.p
g=A.a([new C.P0("Account",B.a.i(this.d),i,j,m),B.S,new C.P0("Balance","$"+A.dy(g.d),i,j,m)],o)
if(d!=null&&B.a.i(d).length!==0)B.d.v(g,A.a([B.S,new C.P0("Investment",d,i,j,m)],o))
g.push(B.S)
g.push(new C.P0("Saved on",""+A.bF(f)+"/"+A.bP(f)+"/"+A.bx(f),i,j,m))
g.push(B.S)
g.push(new C.P0("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=A.p(m,A.v(g,B.F,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.c0,m,m,1/0)
r=B.aL.j(l?0.14:0.12)
q=A.m(14)
p=A.I(B.aL.j(0.35),B.r,1)
n=A.V(B.xC,l?B.aM:B.dm,m,m,m,16)
return A.eD(m,B.K,new A.cW(B.U8,A.bX(new A.C(B.x8,A.v(A.a([u,B.aO,t,B.P,s,B.bu,g,B.az,A.p(m,A.A(A.a([n,B.ab,A.D(A.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,A.l(m,m,l?B.bJ:B.ip,m,m,m,m,m,m,m,m,11.5,m,m,B.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),B.F,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.eu,m,m,1/0),B.d5,A.A(A.a([A.D(A.dW(B.na,new C.eMZ(a0),A.dd(m,m,m,m,m,m,m,m,m,j,m,m,B.ce,m,new A.b7(A.m(14),B.Y),new A.az(h,1,B.r,-1),m,m,m,m)),1),B.aw,A.D(A.bJ(D.f06,new C.eN_(a0),A.bk(B.aT,m,m,m,m,m,B.ce,m,new A.b7(A.m(14),B.Y),m,m,m)),2)],o),B.m,m,B.e,B.j,0,m,m)],o),B.m,m,B.e,B.Q,0,B.p),m),new A.o(k,m,w,e,v,m,B.n),B.be),m),m,m,m,B.ey,B.d_,m,m,m)}}
C.P0.prototype={
B(d){var w=this,v=null
return A.A(A.a([new A.a5(92,v,A.d(w.c,v,v,v,v,v,v,A.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),A.D(A.d(w.d,v,v,v,v,v,v,A.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,B.I,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.F,v,B.e,B.j,0,v,v)}}
C.Y_.prototype={
T(){return new C.axT(new A.ar(B.as,$.aw()),A.kd(!0,null,!0,!0,null,null,!1))}}
C.axT.prototype={
a_(){this.a1()
$.aU.x1$.push(new C.d1u(this))},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.e.q()
this.a2()},
c__(){var w,v=this.c
v.toString
w=B.a.i(this.d.a.a)
A.a4(v,!1).N(w)
return null},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=u?B.i4:B.c,s=u?B.c:B.M,r=u?B.aQ:B.ak,q=u?B.j_:B.pd,p=u?B.b8:B.e2,o=A.m(24),n=A.I(B.aT.j(0.35),B.r,1),m=A.a([new A.ac(0,B.G,B.aT.j(0.18),B.fJ,32)],x.V),l=A.p(v,A8.alk,B.f,v,v,new A.o(v,v,v,A.m(18),B.a1k,D.bPL,B.n),v,56,v,v,v,v,v,56),k=A.d("Enter restore code",v,v,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,B.u,v,v,!0,v,-0.3,v,v,v,v,v,v),B.L,v,v),j=A.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),B.L,v,v),i=A.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,B.I,v,v,!0,v,8,v,v,v,v,v,v),h=A.a([new A.tX(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bp1(new C.d1r())],x.G),g=A.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,B.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return A.eD(v,B.K,new A.cW(A1.Jg,A.bX(new A.C(B.x8,A.v(A.a([l,B.aO,k,B.P,j,B.e_,A.aL(!1,B.T,!1,v,!0,B.q,v,A.aM(),w.d,v,v,v,v,v,2,A.bo(v,v,v,B.Ey,v,v,"",v,!0,new A.b4(4,A.m(16),new A.az(p,1,B.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new A.b4(4,A.m(16),D.aUz),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!1,v,!1,w.e,B.ag,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.d1s(w),v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,i,!0,B.L,v,B.lM,v,v,v,v),B.e_,A.A(A.a([A.D(A.dW(B.na,new C.d1t(d),A.dd(v,v,v,v,v,v,v,v,v,s,v,v,B.ce,v,new A.b7(A.m(14),B.Y),new A.az(p,1,B.r,-1),v,v,v,v)),1),B.aw,A.D(A.bJ(D.f3B,w.gbZZ(),A.bk(B.aT,v,v,v,v,v,B.ce,v,new A.b7(A.m(14),B.Y),v,v,v)),2)],f),B.m,v,B.e,B.j,0,v,v)],f),B.m,v,B.e,B.Q,0,B.p),v),new A.o(t,v,n,o,m,v,B.n),B.be),v),v,v,v,B.Lk,B.d_,v,v,v)}}
C.ams.prototype={
T(){return new C.bgT(B.cH)},
ho(d){return this.x.$1(d)},
bp(){return this.y.$0()}}
C.bgT.prototype={
a_(){var w,v=this
v.a1()
w=v.a
w.toString
$.t0=$.t0+1
v.r=B.o.O(B.o.D(C.fqL(w.e,w.d.y2),1,600))
w=v.a
if(!J.lg(w.d.y2,w.e))v.r=C.hRl(v.a.e)
v.w=A.dF(B.hf,new C.dyP(v))},
q(){var w=this.w
if(w!=null)w.a9(0)
this.cbG()
C.aYd()
this.a2()},
cbG(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:B.k.D(r.e/w,0,1)
if(v<=0)return
u=A.nK(B.k.aa(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=B.o.u(1000*Date.now())
s=r.a
w.ho(new A.d1(t,s.c.a,u,B.fz,B.fa,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,B.ck,new A.Q(Date.now(),0,!1)))
r.a.bp()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.ui(u,q,"Left early \xb7 +$"+B.k.aa(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
J3(d,e){return this.cno(d,e)},
b1E(d){return this.J3(!1,d)},
cnn(d){return this.J3(d,"")},
cno(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$J3=A.e(function(f,g){if(f===1)return A.f(g,v)
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
C.ui(s,null,o?"No progress":e,q,p,s,null,!1)
s=t.c
if(s==null){w=1
break}w=5
return A.b(C.bB8(s,C.bAN(),C.fRM(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$J3)
case 5:w=1
break
case 4:n=A.nK(B.k.aa(t.a.w*1.46*r,2))
m=r>=1
t.m(new C.dyG(t,n,r))
s=B.o.u(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new A.d1(s,p,n,B.fz,B.fa,q,null,null,B.ck,new A.Q(Date.now(),0,!1))
A.afL(l,!0)
t.a.ho(l)
t.a.bp()
if(m)k="+$"+B.k.aa(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+B.k.aa(n,2)+" ("+B.k.V(r*100)+"% of the prize)"}q=t.a
C.ui(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return A.b(C.bB8(s,C.bAN(),C.fRM(),""+t.e+"/"+t.f,k,q,!0),$async$J3)
case 6:w=7
return A.b(C.afD(t.a.f,k),$async$J3)
case 7:case 1:return A.h(u,v)}})
return A.i($async$J3,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.r
m===$&&A.c()
w=B.o.an(m,60)
v=B.a.aT(B.o.u(B.o.F(m,60)),2,"0")
u=A.aH(n,n,n,n,B.aln,n,n,n,new C.dyJ(d),n,n,n,n,n,n)
t=o.a
s=x.p
t=A.D(A.v(A.a([A.d(t.f,n,1,B.a2,n,n,n,B.kR,n,n,n),A.d("Win $"+B.k.aa(t.w*1.46,2)+" \xb7 stake $"+B.k.aa(o.a.w,2),n,n,n,n,n,n,D.eQG,n,n,n)],s),B.F,n,B.e,B.j,0,B.p),1)
r=o.a.c.a
m=m<=10?B.aE:B.c.j(0.1)
q=A.m(99)
q=A.A(A.a([u,t,new C.anX(r,new C.dyK(o),n),B.bn,A.df(n,A.A(A.a([D.bI8,B.d9,A.d(""+w+":"+v,n,n,n,n,n,n,B.kp,n,n,n)],s),B.m,n,B.e,B.j,0,n,n),n,n,B.bb,new A.o(m,n,n,q,n,n,B.n),B.a1,n,n,n,B.tc,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
m=o.a
v=m.w
w=v*1.46
r=o.e/o.f
m=A.A(A.a([A.D(A.bv(A.m(99),A.mc(B.bF,n,n,9,n,r,new A.mx(B.d.gK(m.r),x.dw)),B.ap),1),B.aw,A.d(""+o.e+"/"+o.f,n,n,n,n,n,n,D.eZl,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
t=A.m(22)
u=A.a([B.d.gK(o.a.r).j(0.35),G.adj],x.O)
p=o.x
return C.aNF(n,D.beq,A.bq(!0,A.v(A.a([new A.C(D.br4,q,n),new C.Ms(w*r,w,v,n),new A.C(G.afF,m,n),A.D(new A.C(B.WS,A.bv(t,A.bX(A.e2(V.haR(o.a.e,new V.yO(new C.dyL(o),new C.dyM(o),new C.dyN(o),o.d)),p,n),new A.o(n,n,n,n,n,new A.a6(B.b0,B.b5,B.x,u,n,n),B.n),B.be),B.ap),n),1)],s),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0))}}
C.a5i.prototype={
B(d){var w=null,v=A.m(26),u=A.I(B.aL.j(0.5),B.r,1),t=A.a([new A.ac(0,B.G,B.aL.j(0.22),B.J,26)],x.V)
return A.eD(w,B.K,A.p(w,A.v(A.a([A.p(w,D.bBX,B.f,w,w,new A.o(B.aL.j(0.16),w,A.I(B.aL,B.r,2),w,w,w,B.a6),w,68,w,w,w,w,w,68),B.az,D.fcC,B.P,A.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.P,A.d("The count starts again from zero next month.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.aO,new A.a5(1/0,w,A.bJ(D.f0N,new C.c3f(d),A.bk(B.aL,w,w,w,B.w,B.fK,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,u,v,t,D.bNH,B.n),w,w,w,w,D.bpp,w,w,w),w,w,w,B.aga,B.d_,w,w,w)}}
C.alX.prototype={
T(){return new C.bgK(null,null)},
gY(d){return this.e}}
C.bgK.prototype={
a_(){var w,v=this,u=null
v.a1()
w=v.d=A.bj(u,B.Ae,u,1,u,v)
w.d6()
w.dP$.J(0,new C.ds_(v))
w=A.bj(u,B.m1,u,1,u,v)
w.cF(0)
v.e=w
w=A.bj(u,B.KM,u,1,u,v)
w.cF(0)
v.f=w
w.d6()
w.dP$.J(0,new C.ds0(v))
if(v.a.c){v.d.cF(0)
v.e.bW(0)
v.f.bW(0)}},
br(d){var w,v,u=this
u.bE(d)
w=u.a.c
if(w){v=u.d
v===$&&A.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){w=u.d
w===$&&A.c()
w.cF(0)
w=u.e
w===$&&A.c()
w.bW(0)
w=u.f
w===$&&A.c()
w.bW(0)}else if(!w&&d.c){w=u.d
w===$&&A.c()
w.bW(0)
w=u.d
w.sp(0,w.a)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cF(0)
w=u.f
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cF(0)}},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
w.bqW()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.Pq[B.o.F(a9.r,5)]:b4
w=!b3&&b4==null?D.Pq[B.o.F(a9.w,5)]:b0
b1=b4!=null
if(b1){b3=A.t(b4)
v=b4>0?"+"+b3:b3}else if(w!=null){b3=A.t(w)
if(w>0)b3="+"+b3
v=b3}else v="?"
if(b1)u=b4>0?B.d2:B.bL
else if(w!=null){b1=(w>0?B.d2:B.bL).j(0.45)
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
b3=A.a([A.e9(B.A,A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,b0,A.a([new A.ac(6+e,B.G,B.aD.j(0.4+q*0.3),B.J,32+q*22),new A.ac(3,B.G,B.ba.j(0.2+p*0.25),B.J,40+p*16)],d),b0,B.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=A.p(b0,b0,B.f,b0,b0,new A.o(A.aq(B.bz,B.aM,B.o.F(a3,3)/2).j(a2),b0,b0,b0,A.a([new A.ac(0,B.G,B.aD.j(0.7),B.J,e)],d),b0,B.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(A.dT(new A.iC(A.vS(a4+a3),b0,B.A,!0,b0,a8,b0),new A.u(a6*a0+a5*b2*0.04,a7*a0)))}B.d.v(f,b3)}b3=b2*0.06
e=x.V
f.push(A.dT(A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,A.m(b2*0.5),A.a([new A.ac(b2*0.02,B.G,B.w.j(0.4+b1),B.J,b2*0.14)],e),b0,B.n),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new A.u(0,n+b3)))
b1=A.dk()
d=b1.a
d.$flags&2&&A.ai(d)
d[11]=0.0025
b1.mr(o)
b1.js(k,k,k,1)
b1.jI(l)
b1.ft(m)
d=b2*0.2
a1=A.m(d)
if(a9.a.c)a2=D.cQh
else{a2=A.aq(B.c,B.k3,q*0.45)
a2.toString
a2=A.a([a2,B.bN,B.cm],x.O)}a4=A.aq(B.bI,B.aD,q*0.65)
a4.toString
a4=A.I(a4,B.r,3)
e=A.a([new A.ac(0,B.G,B.w.j(0.3),D.dVP,16)],e)
if(!a9.a.c)e.push(new A.ac(p*3,B.G,B.aD.j(0.3+q*0.4),B.J,24+p*16))
e.push(new A.ac(0,B.G,B.c.j(0.9),B.QT,0))
g=A.a([],g)
if(!a9.a.c)g.push(A.bY(0,A.bX(b0,new A.o(b0,b0,b0,A.m(d),b0,new A.a6(new A.d8(-1+Math.cos(j)*0.8,-1),new A.d8(1,1),B.x,A.a([B.c.j(0),B.c.j(0.28+p*0.25),B.c.j(0)],x.O),b0,b0),B.n),B.be),0,0,0))
g.push(A.ao(b0,A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,A.m(6),b0,new A.a6(B.a3,B.a7,B.x,A.a([B.c.j(0.95),B.c.j(0)],x.O),b0,b0),B.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=A.a([new A.cP(B.w.j(0.18),B.dz,5)],x.C)
if(!a9.a.c)d.push(new A.cP(B.aD.j(0.4+q*0.35),B.J,12+p*10))
g.push(A.av(A.v3(A.d(v,b0,b0,b0,b0,b0,b0,A.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,B.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),B.bb,B.jm,b3),b0,b0,b0))
f.push(A.dT(A.fr(B.A,A.p(b0,new A.an(B.W,b0,B.aa,B.q,g,b0),B.f,b0,b0,new A.o(b0,b0,a4,a1,e,new A.a6(B.ax,B.aC,B.x,a2,b0,b0),B.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new A.u(0,n)))
return new A.a5(h,h,new A.an(B.A,b0,B.aa,B.f,f,b0),b0)}}
C.aJf.prototype={
aQ(){this.aY()
this.aW()
this.dF()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdD())
w.b2$=null
w.a2()}}
C.Ms.prototype={
B(d){var w=null,v=new C.c5q(),u=v.$3("STAKE","$"+B.k.aa(this.e,2),B.c),t=A.m(18),s=A.I(B.bs.j(0.7),B.r,1.4),r=A.a([new A.ac(0,B.G,B.aT.j(0.35),B.J,14)],x.V),q=x.p
return new A.C(B.L4,A.A(A.a([u,A.p(w,A.v(A.a([D.fbk,A.mM(new C.c5p(),w,B.bb,B.mO,w,new A.bm(w,this.c,x.e7),x.gR)],q),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(w,w,s,t,r,D.am9,B.n),w,w,w,w,B.Lf,w,w,w),v.$3("FULL WIN","$"+B.k.aa(this.d,2),B.bJ)],q),B.m,w,B.e,B.j,0,w,w),w)}}
C.anX.prototype={
B(d){var w=null,v=A.m(99),u=A.I(B.ji.j(0.7),B.r,1)
return A.p(w,A.A(A.a([D.bAp,B.d9,C.aoM(this.d,B.n8,this.c)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(w,w,u,v,w,D.am9,B.n),w,w,w,w,B.Lr,w,w,w)},
gdV(){return this.c}}
C.MA.prototype={
T(){return new C.bho(null,null)}}
C.bho.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.m1,null,1,null,v)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.brw()},
aKZ(d,e){var w=this.a.d,v=A.T(w).k("J<1,n>"),u=A.B(new A.J(w,C.hXh(),v),v.k("aj.E"))
w=this.d
w===$&&A.c()
return A.c6(w,new C.dRm(this,u),null)},
B(d){var w=null
if(this.a.e)return A.cc(w,D.acJ,A.bq(!0,this.aKZ(0,d),!0,!1,B.ah,!0,!0),w,!1,!1,w,w)
return this.aKZ(0,d)},
auP(d,e,f){var w=null,v=f.j(0.16),u=A.m(10)
return A.A(A.a([A.p(w,A.V(d,f,w,w,w,17),B.f,w,w,new A.o(v,w,w,u,w,w,B.n),w,32,w,w,w,w,w,32),B.aw,A.D(A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.aJP.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.abU.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=A.aI(d,B.e6,o).w.r.d,m=this.c,l=J.cD(m),k=l.eG(m,new C.dRp()).gM(0),j=new A.e6(l.dr(m,new C.dRq(),x.cD),x.bG).cI(0,0,new C.dRr())
o=A.aI(d,B.bS,o).w
w=x.p
v=A.a([B.S,A.p(p,p,B.f,p,p,new A.o(B.b8,p,p,A.m(2),p,p,B.n),p,4,p,p,p,p,p,42),new A.C(B.afT,A.A(A.a([A.p(p,D.bKw,B.f,p,p,new A.o(p,p,p,A.m(14),A.a([new A.ac(0,B.G,B.fe.j(0.45),B.J,14)],x.V),D.am3,B.n),p,44,p,p,p,p,p,44),B.bd,D.btc,A.aH(p,p,p,p,B.l9,p,p,p,new C.dRs(d),p,p,p,p,p,p)],w),B.m,p,B.e,B.j,0,p,p),p)],w)
if(l.gck(m)){u=C.fMN("GAMES",""+l.gM(m),B.ex)
t=C.fMN("WON",""+k,B.ji)
s=j>=0
r=s?"+":"-"
q=C.bxA(j)
s=s?B.ji:B.f9
v.push(new A.C(D.bnC,A.A(A.a([u,B.ab,t,B.ab,C.fMN("NET",r+q,s)],w),B.m,p,B.e,B.j,0,p,p),p))}if(l.gal(m))v.push(new A.C(new A.N(24,36,24,24+n),A.v(A.a([A.V(D.bwp,B.c.j(0.35),p,p,p,52),B.ac,A.d("No game receipts yet",p,p,p,p,p,p,A.l(p,p,B.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.ao,A.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,A.l(p,p,B.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),B.L,p,p)],w),B.m,p,B.e,B.j,0,B.p),p))
else v.push(new A.dl(1,B.ch,A.hD(p,new C.dRt(this),l.gM(m),new A.N(14,2,14,16+n),p,B.ai,new C.dRu(),!1),p))
return A.p(p,A.v(v,B.m,p,B.e,B.Q,0,B.p),B.f,p,new A.aZ(0,1/0,0,o.a.b*0.88),D.aXo,p,p,p,p,p,p,p,p)}}
C.abT.prototype={
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
t=s}if(w)r=B.cq
else if(u)r=B.dx
else{w=v?B.aM:B.bs
r=w}q=h.gbcV()
w=new C.dRo()
s=A.m(14)
p=A.a([r.j(0.13),D.bds],x.O)
o=A.I(r.j(0.4),B.r,1)
n=A.V(g?B.mb:B.cv,r,i,i,i,16)
m=A.D(A.d(h.b,i,1,B.a2,i,i,i,B.ud,i,i,i),1)
l=r.j(0.2)
k=A.m(99)
k=A.p(i,A.d(t,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,B.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),B.f,i,i,new A.o(l,i,i,k,i,i,B.n),i,i,i,i,D.br_,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bxA(q)}else{l=g?"+":"-"
l+=C.bxA(h.d)}j=x.p
l=A.A(A.a([n,B.bn,m,k,B.bn,A.d(l,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.m,i,B.e,B.j,0,i,i)
k=C.dRn("STAKE",w.$1(h.w),B.c)
w=A.A(A.a([k,B.d9,C.dRn("PAID",C.bxA(g?h.d:0),r),B.d9,C.dRn("BEFORE",w.$1(h.x),B.ex),B.d9,C.dRn("AFTER",w.$1(h.y),B.dx)],j),B.m,i,B.e,B.j,0,i,i)
n=C.hST(h.f)
h=B.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return A.p(i,A.v(A.a([l,B.ao,w,B.au,A.d(n+h,i,1,B.a2,i,i,i,A.l(i,i,B.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.aj,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(i,i,o,s,i,new A.a6(B.ax,B.aC,B.x,p,i,i),B.n),i,i,i,i,B.l1,i,i,i)}}
C.ayx.prototype={
T(){return new C.bd7(B.cH,null,null)}}
C.bd7.prototype={
a_(){var w,v,u,t=this
t.a1()
w=A.bj(null,B.m2,null,1,null,t)
w.cF(0)
t.d=w
v=J.e0(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.aci(40+w.aj()*260,-20+w.aj()*40,1.5+w.aj()*3,w.aj()*3.141592653589793,0.7+w.aj()*0.3,12+w.aj()*16,[X.a2m,B.r0,B.cR,B.c][w.aD(4)],[B.hY,B.l3,B.dS,B.EW][w.aD(4)])
t.f=v},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bqq()},
B(d){var w=null,v=this.d
v===$&&A.c()
return A.av(A.aF(!1,B.a1,!0,w,A.c6(v,new C.d8v(this,d),w),B.f,B.K,0,w,w,w,w,w,B.ae),w,w,w)}}
C.aci.prototype={
gY(d){return this.f}}
C.aIL.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.aZ0.prototype={
B(d){return new A.u6(new C.c7H(this),null,new A.h2(A.a([$.yb(),$.a1t()],x.U)),null)},
gdV(){return this.c}}
C.M4.prototype={
c5K(){if(this.c!=null)this.m(new C.bXm())}}
C.HN.prototype={}
C.anp.prototype={
T(){return new C.aBn(B.cH,new A.ar(B.as,$.aw()))},
czm(){return this.d.$0()},
cKK(){return this.f.$0()},
cKy(d,e){return this.r.$2(d,e)},
cLl(d,e,f){return this.w.$3$bonus(d,e,f)},
gdV(){return this.c}}
C.aBn.prototype={
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.a2()},
aqK(){var w=A.d3(B.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
A6(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$A6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.aqK()
if(s<2){t.auQ("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.czm()<s){t.auQ("Insufficient balance.")
w=1
break}if(!t.a.cKy(s,"Dice Roll bet")){t.auQ("Could not place bet.")
w=1
break}t.a.toString
t.m(new C.dKp(t))}w=3
return A.b(C.c4B(t.a.e),$async$A6)
case 3:r=t.a
q=C.hUY(r.e,r.c,t.d)
t.a.cKK()
A.aXB(t.a.e)
t.m(new C.dKq(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return A.b(A.bN(new A.b9(1000*(40+p*6)),null,r),$async$A6)
case 7:if(t.c==null){w=1
break}new C.dKr(t).$0()
t.c.e5()
case 5:++p
w=4
break
case 6:w=8
return A.b(A.bN(B.jn,null,r),$async$A6)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.fQA(q)
t.m(new C.dKs(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cLl(m,"Dice Roll "+n,o)
t.m(new C.dKt(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+B.k.aa(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(m,2)+" added to your balance"
w=12
return A.b(C.bB8(r,C.bAN(),new C.dKu(t),n,k,"YOU WIN!",!0),$async$A6)
case 12:w=13
return A.b(C.afD("Dice Roll",l?"+$"+B.k.aa(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(m,2)+" added to your balance"),$async$A6)
case 13:w=10
break
case 11:w=14
return A.b(C.bB8(r,C.bAN(),new C.dKv(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$A6)
case 14:C.ui(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return A.h(u,v)}})
return A.i($async$A6,v)},
auQ(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.aqK(),d=x.w,a0=A.aI(a2,B.e6,d).w,a1=Math.min(A.aI(a2,B.bS,d).w.a.a*0.44,200)
d=A.hb(Q.akw,D.fic,new C.dKy(a2),f)
w=A.m(20)
v=g.a
u=v.c
t=x.p
w=A.A(A.a([d,B.b2,A.p(f,A.A(A.a([B.akt,B.bn,C.aoM(v.d,B.jY,u)],t),B.m,f,B.e,B.Q,0,f,f),B.f,f,f,new A.o(B.cR,f,f,w,f,f,B.n),f,f,f,f,B.lx,f,f,f)],t),B.m,f,B.e,B.j,0,f,f)
u=g.z
v=A.Y(140,D.W0.l()>>>16&255,D.W0.l()>>>8&255,D.W0.l()&255)
d=A.m(18)
s=A.I(A.Y(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
r=g.x
d=A.D(A.p(f,A.av(new C.alX(r,r?g.w:g.r,a1,f),f,f,f),B.f,f,f,new A.o(v,f,s,d,f,f,B.n),f,f,f,f,f,f,f,1/0),1)
v=A.d("Roll lands on one of:",f,f,f,f,f,f,A.l(f,f,B.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,B.a4,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=A.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.Pq[q]
o=C.fQA(p)
n=p>0?B.bk:B.aE
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new A.aV(10,10)
i=m?B.c:n.j(0.7)
h=new A.az(i,m?2.5:1.2,B.r,-1)
n=m?A.a([new A.ac(1,B.G,n.j(0.65),B.J,14)],r):B.Pb
m=m?18:15
s.push(new A.bG(1,B.bo,new A.C(B.jo,A.p(B.A,new A.x(o,f,new A.F(!0,B.c,f,f,f,f,m,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f),B.f,f,f,new A.o(k,f,new A.bQ(h,h,h,h),new A.bs(j,j,j,j),n,f,B.n),f,l,f,f,f,f,f,f),f),f))}d=A.a([d,B.ac,v,B.ao,A.A(s,B.m,f,B.e,B.j,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.fQA(v)
s=g.r
s.toString
d.push(new A.C(B.kb,A.d("Landed on "+v,f,f,f,f,f,f,A.l(f,f,s>0?B.bc:B.cq,f,f,f,f,f,f,f,f,20,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(B.S)
d.push(new A.bI(B.a3,f,f,A.d("Bet Amount",f,f,f,f,f,f,A.l(f,f,A.Y(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,B.I,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(B.ao)
v=x.bL
v=A.B(new A.J(A.a([2,5,10,25],x.n),new C.dKz(g),v),v.k("aj.E"))
s=g.y
r=A.Y(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v.push(A.D(new A.C(B.Xw,A.aL(f,B.T,!1,f,!0,B.q,f,A.aM(),g.e,f,f,f,f,f,2,A.bo(f,new A.b4(4,A.m(10),B.Y),f,B.jM,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,B.lh,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,!s,!1,f,B.ag,f,f,f,f,f,B.dL,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,B.a8,f,f,f,f,f,f,f,f,f,f,f,B.hm,!0,B.L,f,B.am,f,f,f,f),f),1))
d.push(A.A(v,B.m,f,B.e,B.j,0,f,f))
d.push(B.P)
d.push(new A.bI(B.a7,f,f,A.d("Perfect Score Profit: +$"+B.k.aa(g.aqK()*0.46,2),f,f,f,f,f,f,D.eSF,f,f,f),f))
d.push(B.S)
d=A.D(new A.C(B.hG,A.v(d,B.aj,f,B.e,B.j,0,B.p),f),1)
v=g.x?f:g.gck4()
s=A.fl(f,f,B.aD,f,f,f,f,f,f,B.c,f,f,f,f,new A.b7(A.m(14),B.Y),f,f,f,f,f)
return C.aNF(f,D.W7,A.bq(!0,A.v(A.a([new A.C(D.brq,w,f),new C.Ms(u,e*1.46,e,f),A.D(A.v(A.a([d,new A.C(new A.N(14,4,14,8+a0.r.d),new A.a5(1/0,52,A.i9(A.d("\ud83c\udfb2 ROLL ($"+B.k.aa(e,2)+")",f,f,f,f,f,f,B.kS,f,f,f),v,s),f),f)],t),B.m,f,B.e,B.j,0,B.p),1)],t),B.m,f,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0))}}
C.ao2.prototype={
T(){return new C.aBE(B.kj,new A.ar(B.as,$.aw()))},
cKq(d){return this.e.$1(d)}}
C.aBE.prototype={
gapy(){var w,v=this.r
if(v===$){w=B.o.u(1e4+B.cH.aD(89999))
this.r!==$&&A.bM()
this.r=w
v=w}return v},
gP7(){var w=this.d,v=this.a
return w===B.kj?B.a.i(v.f.a):B.a.i(v.f.b)},
ga7i(){var w=this.gP7(),v=A.af("^\\$+",!0,!1,!1,!1),u=B.a.i(A.aJ(w,v,""))
return u.length===0?"":"$"+u},
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.a2()},
I0(d,e){return this.bE2(d,e)},
bE2(d,e){var w=0,v=A.j(x.H),u=this,t
var $async$I0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.fH(new A.fA(d)),$async$I0)
case 2:A.eO()
t=u.c
if(t!=null)t.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$I0,v)},
P2(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$P2=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gP7().length===0){r.c.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}A.jc()
o=B.k.aa(r.a.d,2)
q=r.d===B.kj?A.cv("https://cash.app/"+r.ga7i()+"/"+o,0,null):A.cv("bitcoin:"+r.gP7(),0,null)
t=4
w=7
return A.b(A.iO(q,B.fi,null),$async$P2)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===B.kj?r.ga7i():r.gP7()
w=10
return A.b(r.I0(n,r.d===B.kj?"Cash App tag":"Bitcoin address"),$async$P2)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===B.kj?r.ga7i():r.gP7()
w=11
return A.b(r.I0(n,r.d===B.kj?"Cash App tag":"Bitcoin address"),$async$P2)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$P2,v)},
ZQ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hU().bdD(B.eF),$async$ZQ)
case 3:r=e
if(r==null){w=1
break}w=4
return A.b(r.fc(),$async$ZQ)
case 4:s=e
t.m(new C.dRM(t,B.a.c8(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return A.h(u,v)}})
return A.i($async$ZQ,v)},
c2b(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===B.kj?C.hc7(s.a):B.a.i(s.a)
if(r.length===0){t=v.d===B.kj?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.I(x.q).f.R(A.b2(u,u,u,u,u,B.q,u,A.d(t,u,u,u,u,u,u,u,u,u,u),u,B.U,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.I(x.q).f.R(A.b2(u,u,u,u,u,B.q,u,A.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,B.U,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new A.Q(Date.now(),0,!1).u(0)
w=v.a
t.cKq(new A.d1(s,w.c.a,w.d,B.fo,v.d,r,v.f,v.gapy(),B.ds,new A.Q(Date.now(),0,!1)))
w=v.c
w.toString
A.iK(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.eC(o,o,o,!0,!0,B.zM,o,1,!0,o,0,!1,o,!1,B.c,o,A.aH(o,o,o,o,B.FF,o,o,o,new C.dRN(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.f2k,o,o,o,1,o,!0),m=A.m(26),l=A.I(D.eH.j(0.25),B.r,1),k=x.V,j=A.a([new A.ac(0,B.G,B.aZ.j(0.25),B.eR,24)],k),i=x.p
j=A.p(o,A.v(A.a([A.d("YOU'RE ADDING",o,o,o,o,o,o,A.l(o,o,B.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,B.I,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),B.ao,A.f4(B.A,A.d("$"+A.dy(p.a.d),o,o,o,o,o,o,D.eN5,o,o,o),B.f,B.dt),B.ao,A.d("to your Growth Income wallet",o,o,o,o,o,o,A.l(o,o,D.eH.j(0.85),o,o,o,o,o,o,o,o,12,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,l,m,j,D.bQy,B.n),o,o,o,o,D.bp2,o,o,o)
m=p.bYM()
l=p.ayr(1,"Send the money to NGMY Pay",p.c29())
w=p.ayr(2,"Put this code in the payment note",p.bCE())
v=p.d===B.kj
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=A.l(o,o,B.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.ayr(3,u,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.e,o,o,o,o,o,2,A.bo(o,o,o,o,o,o,o,o,!0,new A.b4(4,A.m(18),new A.az(B.c.j(0.08),1,B.r,-1)),o,o,o,o,o,B.t_,!0,o,o,o,o,new A.b4(4,A.m(18),D.aUu),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.eOu,t,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,B.rn,!0,B.a5,o,B.am,o,o,o,o))
r=p.f!=null
v=r?8:22
u=A.m(20)
s=r?D.eH:B.c
s=A.I(s.j(r?0.5:0.12),B.r,1.4)
q=r?A.v(A.a([A.bv(A.m(14),new A.cW(D.aVT,new A.DU(p.f,o),o),B.ap),B.P,D.ezc,B.au],i),B.m,o,B.e,B.j,0,B.p):A.v(A.a([A.p(o,D.bJH,B.f,o,o,new A.o(D.eH.j(0.12),o,o,o,o,o,B.a6),o,54,o,o,o,o,o,54),B.S,D.f7k,B.cZ,A.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p)
v=p.b33(4,"Screenshot of your payment",A.aE(o,A.p(o,q,B.f,o,o,new A.o(B.t_,o,s,u,o,o,B.n),o,o,o,o,new A.N(v,v,v,v),o,o,o),B.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcdv(),o,o,o,o,o,o,!1,B.a9),!0)
u=A.d(p.a.r,o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,1.4,!0,o,o,o,o,o,o,o,o),B.L,o,o)
s=A.m(18)
k=A.a([new A.ac(0,B.G,B.aZ.j(0.45),B.dn,18)],k)
return A.cc(n,B.zM,A.av(new A.cW(B.a93,A.cJ(A.a([j,B.bu,m,B.bu,l,w,t,v,B.ao,u,B.aO,new A.a5(o,56,A.bX(A.ll(D.bIn,D.fhv,p.gc2a(),A.fl(o,o,B.K,o,o,o,o,o,o,B.c,o,o,o,B.K,new A.b7(A.m(18),B.Y),o,o,o,o,o)),new A.o(o,o,o,s,k,D.bPc,B.n),B.be),o)],i),o,D.box,o,o,B.ai,!1),o),o,o,o),o,!1,!1,o,o)},
bYM(){var w=null,v=new C.dRI(this),u=A.m(18),t=A.I(B.c.j(0.06),B.r,1)
return A.p(w,A.A(A.a([v.$3(B.kj,B.hW,"Cash App"),B.eb,v.$3(B.a3N,D.akd,"Bitcoin")],x.p),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(B.t_,w,t,u,w,w,B.n),w,w,w,w,B.m7,w,w,w)},
b33(d,e,f,g){var w,v=null,u=x.p,t=A.a([A.p(B.A,A.d(""+d,v,v,v,v,v,v,D.eTp,v,v,v),B.f,v,v,D.aWC,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(A.D(A.p(v,v,B.f,D.eH.j(0.18),v,v,v,v,v,B.uP,v,v,v,2),1))
t=A.v(t,B.m,v,B.e,B.j,0,B.p)
w=g?12:20
return new A.H7(A.A(A.a([new A.a5(34,v,t,v),B.aw,A.D(new A.C(new A.N(0,0,0,w),A.v(A.a([new A.C(B.WQ,A.d(e,v,v,v,v,v,v,A2.Sj,v,v,v),v),f],u),B.aj,v,B.e,B.j,0,B.p),v),1)],u),B.aj,v,B.e,B.j,0,v,v),v)},
ayr(d,e,f){return this.b33(d,e,f,!1)},
c29(){var w,v,u,t,s=this,r=null,q=s.d===B.kj?s.ga7i():s.gP7(),p=A.m(20),o=A.m(20),n=s.d===B.kj,m=n?D.bO8:D.bPV,l=A.a([new A.ac(0,B.G,(n?D.ad_:D.V6).j(0.35),B.cw,16)],x.V),k=A.m(12)
n=s.d===B.kj
w=n?B.hW:D.akd
k=A.p(r,A.V(w,n?D.ad_:D.V6,r,r,r,30),B.f,r,r,new A.o(B.c,r,r,k,r,r,B.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=A.d(n,r,r,r,r,r,r,A.l(r,r,B.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===B.kj
t=u?22:13
v=A.d(v,r,1,B.a2,r,r,r,A.l(r,r,B.c,r,r,r,r,r,r,r,r,t,r,r,B.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=A.D(A.v(A.a([n,B.bB,v,B.au,A.A(A.a([D.bFe,B.d9,A.d(s.d===B.kj?"Tap to pay $"+A.dy(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,B.q_,r,r,r)],u),B.m,r,B.e,B.j,0,r,r)],u),B.F,r,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,r,A.aK(!1,p,!0,A.ex(A.A(A.a([k,B.bd,v,A.aH(r,r,r,r,D.bEj,r,r,r,w?r:new C.dRL(s,q),r,r,r,r,"Copy",r)],u),B.m,r,B.e,B.j,0,r,r),r,new A.o(r,r,r,o,l,m,B.n),r,B.afz,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gc8R(),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ae)},
bCE(){var w,v,u,t,s,r,q,p,o=null,n=A.m(20),m=A.I(B.b3.j(0.35),B.r,1),l=x.p,k=A.a([],l)
for(w=this.gapy().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new A.aV(12,12)
q=A.a([B.b3.j(0.28),B.b3.j(0.08)],u)
p=new A.az(B.ex.j(0.4),1,B.r,-1)
k.push(A.p(B.A,new A.x(s,o,B.CG,o,o,o,o,o,o,o,o,o),B.f,o,o,new A.o(o,o,new A.bQ(p,p,p,p),new A.bs(r,r,r,r),o,new A.a6(B.b0,B.b5,B.x,q,o,o),B.n),o,52,o,B.jo,o,o,o,42))}return A.p(o,A.v(A.a([A.A(k,B.m,o,B.b9,B.j,0,o,o),B.ac,A.A(A.a([A.D(A.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,A.l(o,o,B.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.ab,A.hb(B.a_e,D.fjh,new C.dRH(this),A.fu(o,o,o,o,o,o,o,o,o,o,o,B.ex,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),B.m,o,B.e,B.j,0,o,o)],l),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(B.t_,o,m,n,o,o,B.n),o,o,o,o,B.by,o,o,o)}}
C.r_.prototype={
ad(){var w=this
return A.E(["id",w.a,"title",w.b,"start",w.c.ac(),"end",w.d.ac(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.r0.prototype={
ad(){var w=this
return A.E(["id",w.a,"when",w.b.ac(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gUb(){var w=this,v=A.a([],x.s),u=w.d
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
u=w.c
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
v.push(C.fYd(w.b))
u=w.e
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
return B.d.aH(v," \xb7 ")},
gkx(d){return this.c}}
C.lr.prototype={
ad(){var w,v=this,u=A.U(x.N,x.z)
u.n(0,"type",v.a)
w=v.b
if(w.length!==0)u.n(0,"content",w)
w=v.c
if(w!=null&&w.length!==0)u.n(0,"url",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"label",w)
return u}}
C.ie.prototype={
ad(){var w,v=this,u=A.U(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"question",v.b)
w=J.b6(v.c,new C.c6G(),x.P)
w=A.B(w,w.$ti.k("aj.E"))
u.n(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"thumbnailPath",w)
u.n(0,"printable",v.e)
u.n(0,"sortOrder",v.f)
return u}}
C.i_.prototype={
aiP(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.i_(v,u,t,s,r,h==null?w.f:h)},
b8o(d){var w=null
return this.aiP(w,w,w,w,d,w)},
cCY(d,e,f){return this.aiP(d,e,null,null,null,f)},
b8n(d){var w=null
return this.aiP(w,w,w,d,w,w)},
cCD(d,e){var w=null
return this.aiP(w,w,d,w,e,w)},
ad(){var w=this,v=C.hGG(w.c),u=w.e,t=A.T(u).k("J<1,a3<n,@>>")
u=A.B(new A.J(u,new C.c6E(),t),t.k("aj.E"))
return A.E(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.b6M.prototype={}
C.Ub.prototype={
T(){return new C.aBQ(new A.ar(B.as,$.aw()),A.mn(0,null,null),A.a([],x.m))},
SM(d){return this.d.$1(d)}}
C.aBQ.prototype={
a_(){var w,v=this
v.a1()
w=J.b6(v.a.c,new C.dVr(),x.i)
w=A.B(w,w.$ti.k("aj.E"))
B.d.b1(w,new C.dVs())
v.d=w
v.I9()},
q(){var w=this.w
w.S$=$.aw()
w.P$=0
this.x.q()
this.a2()},
acb(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$acb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.I9()
u.m(new C.dVl(u))
t=u.a
t.toString
s=u.d
s===$&&A.c()
w=2
return A.b(t.SM(s),$async$acb)
case 2:r=e
if(u.c!=null){u.m(new C.dVm(u))
t=u.c.I(x.q).f
s=A.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.R(A.b2(null,null,null,r?B.d2:B.aE,null,B.q,null,s,null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$acb,v)},
a6v(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a6v=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&A.c()
s=new C.i_(q,"New Category",B.Fe,4284773515,D.auD,p.length)
t.m(new C.dV4(t,s))
t.I9()
p=t.c
if(p==null){w=1
break}w=3
return A.b(A.c9(null,null,!0,null,new C.dV5(s),p,null,!0,!0,x.i),$async$a6v)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dV6(t,q,r))
case 1:return A.h(u,v)}})
return A.i($async$a6v,v)},
a_O(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a_O=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=B.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.m(new C.dVi(t,p))
q.bM(0,B.c3)
q=t.a.e
s=t.d
s===$&&A.c()
w=3
return A.b(C.c6B(p,q,s),$async$a_O)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dVj(t,r))
$.aU.x1$.push(new C.dVk(t))
case 1:return A.h(u,v)}})
return A.i($async$a_O,v)},
a8u(d){return this.bIz(d)},
bIz(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a8u=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&A.c()
t=r[d]
r=u.c
r.toString
w=2
return A.b(A.c9(null,null,!0,null,new C.dVc(t),r,null,!0,!0,x.i),$async$a8u)
case 2:s=f
if(s!=null)u.m(new C.dVd(u,d,s))
return A.h(null,v)}})
return A.i($async$a8u,v)},
bGr(d){this.m(new C.dVb(this,d))
this.I9()},
I9(){var w,v,u=this.d
u===$&&A.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].b8o(v)},
c6f(d,e){var w={}
w.a=e
this.m(new C.dVh(w,this,d))},
Xi(d){return this.bXH(d)},
bXH(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Xi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=A.eo(new C.dVg(u,d),!1,null,x.H)
w=2
return A.b(A.a4(s,!1).ci(t),$async$Xi)
case 2:return A.h(null,v)}})
return A.i($async$Xi,v)},
byW(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?A.a([B.ft,B.bj],l):A.a([B.p2,B.er],l)
w=A.m(16)
v=A.I(m?B.d6.j(0.35):B.dx,B.r,1)
u=A.V(B.dS,m?B.dx:B.dT,n,n,n,n)
t=A.D(A.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.M,n,n,n,n,n,n,n,n,n,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.YH:A7.LO
r=x.p
s=A.a([A.aK(!1,n,!0,A.A(A.a([u,B.ab,t,A.V(s,m?B.bI:B.ak,n,n,n,n)],r),B.m,n,B.e,B.j,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dV8(o),n,n,n,n,n,n,n)],r)
if(o.r){u=A.a([B.S],r)
t=o.y
if(t.length!==0){q=(m?D.rL:B.c).j(0.65)
p=A.m(12)
u.push(A.p(n,A.jZ(!0,n,o.x,new C.dV9(o,d),t.length,n,n,n,n,!1,!1),B.f,n,B.a8Z,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.cj,n,n,n))}u.push(B.P)
t=o.w
q=A.l(n,n,m?B.aP:B.M,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=A.l(n,n,m?B.bI:B.ak,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?B.bj:B.aP
q=A.D(A.aL(n,B.T,!1,n,!0,B.q,n,A.aM(),t,n,n,n,n,n,2,A.bo(n,new A.b4(4,A.m(14),B.Y),n,B.eN,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ag,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.dVa(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,q,!0,B.a5,n,B.am,n,n,n,n),1)
m=o.f?n:o.gcki()
p=A.bk(B.bl,n,n,n,n,n,B.j6,n,n,n,n,n)
u.push(A.A(A.a([q,new A.I1(t,B.bl,n),B.d9,A.bJ(o.f?B.pV:D.akm,m,p)],r),B.dC,n,B.e,B.j,0,n,n))
B.d.v(s,u)}return A.df(n,A.v(s,B.aj,n,B.e,B.j,0,B.p),n,n,B.bb,new A.o(n,n,v,w,n,new A.a6(B.a3,B.a7,B.x,l,n,n),B.n),B.ir,n,n,B.Ev,B.by,n,n,n)},
B(d){var w,v=this,u=null,t=A.M(d).ax.a===B.H,s=new C.b6M(t),r=t?B.db:B.bN,q=t?B.db:u,p=t?B.aP:B.M,o=A.d("Help Topics Admin",u,u,u,u,u,u,A.l(u,u,t?B.aP:B.M,u,u,u,u,u,u,u,u,u,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gc2f()
if(n)n=B.RQ
else n=A.V(B.xu,t?B.aP:B.M,u,u,u,u)
w=x.p
o=A.eC(A.a([A.hb(n,A.d("Save",u,u,u,u,u,u,A.l(u,u,t?B.aP:B.M,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=R.aSH(B.aI,u,O.Uj,B.nI,D.ffS,v.gbvk())
q=v.byW(s)
n=A.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,A.l(u,u,t?B.bI:B.ak,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&A.c()
return A.cc(o,r,A.v(A.a([q,new A.C(B.Ev,n,u),A.D(H.h1C(!1,new C.dVq(v,s),m.length,v.gc6e(),D.bno,u,!1),1)],w),B.aj,u,B.e,B.j,0,B.p),u,!1,!1,p,u)}}
C.Os.prototype={
T(){return new C.b8C()}}
C.b8C.prototype={
a_(){var w,v=this
v.a1()
w=v.a.c
v.d=new A.ar(new A.bb(w.b,B.b1,B.aN),$.aw())
v.e=w.c
v.f=w.d},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=r?D.rL:B.c,p=A.d("Edit category",s,s,s,s,s,s,A.l(s,s,r?B.c:B.bh,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&A.c()
o=A.aL(s,B.T,!1,s,!0,B.q,s,A.aM(),o,s,s,s,s,s,2,D.bLq,B.y,!0,s,!0,s,!1,s,B.ag,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,A.l(s,s,r?B.c:B.bh,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,B.a5,s,B.am,s,s,s,s)
w=x.aS
w=A.B(new A.J(D.bQV,new C.cId(t),w),w.k("aj.E"))
w=A.c4(B.bE,w,B.bx,8,8)
v=x.gN
v=A.B(new A.J(D.cNx,new C.cIe(t),v),v.k("aj.E"))
u=x.p
v=A.cd(A.v(A.a([o,B.ac,w,B.ac,A.c4(B.bE,v,B.bx,0,8)],u),B.m,s,B.e,B.Q,0,B.p),B.q,s,B.y,s,s,s,s,B.ai)
return A.eh(A.a([A.bK(!1,B.dd,s,s,!0,s,s,new C.cIf(d),s,s),A.bJ(B.oT,new C.cIg(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.ZF.prototype={
T(){return new C.aDO()},
oi(d){return this.d.$1(d)}}
C.aDO.prototype={
a_(){this.a1()
this.d=A.bl(this.a.c.e,!0,x.u)},
auS(){var w=this.a,v=w.c,u=this.d
u===$&&A.c()
return w.oi(v.b8n(u))},
a6x(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a6x=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&A.c()
w=2
return A.b(u.aXX(new C.ie("q_"+1000*s,"",D.cMa,null,!1,r.length)),$async$a6x)
case 2:t=e
if(t!=null){u.m(new C.eI3(u,t))
u.auS()}return A.h(null,v)}})
return A.i($async$a6x,v)},
aXX(d){var w,v=this.c
v.toString
w=A.eo(new C.eI4(d),!1,null,x.u)
return A.a4(v,!1).ci(w)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=u?B.db:B.bN,s=u?B.db:v,r=u?B.aP:B.M,q=w.a.c
s=A.eC(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,A.d(q.b+" \u2014 Questions",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.M,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=R.aSH(B.aI,v,O.Uj,B.nI,D.flk,w.gbvK())
q=w.d
q===$&&A.c()
q=q.length
if(q===0){q=A.av(A.d("No questions yet. Tap + Question.",v,v,v,v,v,v,A.l(v,v,u?B.bI:B.ak,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=A.hD(v,new C.eI9(w,new C.b6M(u)),q,D.bnx,v,B.ai,new C.eIa(),!1)
return A.cc(s,t,u,v,!1,!1,r,v)}}
C.ZE.prototype={
T(){return new C.aDN()}}
C.aDN.prototype={
a_(){var w,v=this
v.a1()
w=v.a.c
v.d=new A.ar(new A.bb(w.b,B.b1,B.aN),$.aw())
w=A.bl(w.c,!0,x.bP)
v.e=w
if(B.d.gal(w))J.cf(v.e,D.a34)
w=v.a.c
v.f=w.d
v.r=w.e},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
aca(){var w=0,v=A.j(x.H),u=this,t
var $async$aca=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(Z.FT(78,1920),$async$aca)
case 2:t=e
if(t!=null)u.m(new C.eI_(u,t))
return A.h(null,v)}})
return A.i($async$aca,v)},
ade(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ade=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=A.eo(new C.eHY(u),!1,null,x.dZ)
w=2
return A.b(A.a4(r,!1).ci(t),$async$ade)
case 2:s=e
if(s!=null)u.m(new C.eHZ(u,s))
return A.h(null,v)}})
return A.i($async$ade,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.M(a1).ax.a===B.H,g=h?B.db:B.bN,f=h?B.db:i,e=h?B.aP:B.M,d=A.d("Edit Question",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=A.eC(A.a([A.dp(S.a_n,B.oT,new C.eI1(j,a1),A.bk(B.aI,i,i,i,B.c,i,i,i,i,i,i,i)),B.aw],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=A.d("Question thumbnail",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=A.m(14)
w=j.f
v=h?B.bI:B.ak
w=A.aE(i,A.bv(e,K.aNI(A.m(14),B.bQ,140,B.AK,v,w,1/0),B.ap),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gc2e(),i,i,i,i,i,i,!1,B.a9)
e=A.d("Question users will tap",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?B.bj:B.aP
u=A.m(16)
t=A.I(h?B.aJ:B.aK,B.r,1)
s=j.d
s===$&&A.c()
r=A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,15,i,i,B.a4,i,i,!0,i,i,i,i,i,i,i,i)
v=A.p(i,A.A(A.a([A.D(A.aL(i,B.T,!1,i,!0,B.q,i,A.aM(),s,i,i,i,i,i,2,A.bo(i,B.ev,i,B.bm,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,i,i,i,B.cs,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),B.y,!0,i,!0,i,!1,i,B.ag,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,B.a8,i,i,i,i,i,i,i,i,i,i,i,r,!0,B.a5,i,B.am,i,i,i,i),1),new A.I1(j.d,i,i)],a0),B.m,i,B.e,B.j,0,i,i),B.f,i,i,new A.o(v,i,t,u,i,i,B.n),i,i,i,i,B.en,i,i,i)
u=A.d("Printable document",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,i,i,i,B.a4,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=A.iB(B.aI,i,i,B.ah,i,new C.eI2(j),i,A.d("Shows a printable badge on this answer",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=A.d("Stored answer (not AI)",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=A.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.rL:B.c
q=A.m(16)
p=A.m(16)
o=A.m(16)
n=A.I(B.bl.j(0.45),B.r,1)
m=A.p(i,D.bD4,B.f,i,i,new A.o(B.bl.j(0.12),i,i,A.m(12),i,i,B.n),i,i,i,i,B.bm,i,i,i)
l=A.d("Open Document Editor",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&A.c()
k=J.ab(k)
l=A.D(A.v(A.a([l,B.au,A.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),B.F,i,B.e,B.j,0,B.p),1)
return A.cc(d,g,A.cJ(A.a([f,B.P,w,B.d5,e,B.P,v,B.aO,u,B.P,t,B.au,s,B.ac,A.aF(!1,B.a1,!0,q,A.aK(!1,p,!0,A.p(i,A.A(A.a([m,B.eA,l,A.V(B.AQ,h?B.bI:B.ak,i,i,i,16)],a0),B.m,i,B.e,B.j,0,i,i),B.f,i,i,new A.o(i,i,n,o,i,i,B.n),i,i,i,i,B.fw,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gc7P(),i,i,i,i,i,i,i),B.f,r,0,i,i,i,i,i,B.ae)],a0),i,B.c0,i,i,B.ai,!1),i,!1,!1,i,i)}}
C.cZF.prototype={}
C.Uc.prototype={
T(){return new C.aBS(A.kd(!0,null,!0,!0,null,null,!1))}}
C.aBS.prototype={
a_(){var w,v,u,t,s,r,q=this
q.a1()
w=J.dG(q.a.c,new C.dW1())
w=A.B(w,w.$ti.k("G.E"))
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
default:break}}w=B.d.aH(v,"\n\n")
q.d=new A.ar(new A.bb(w,B.b1,B.aN),$.aw())},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.f.q()
this.a2()},
auT(d,e){var w,v,u,t,s,r=this.d
r===$&&A.c()
r=r.a
w=r.b
if(!w.ger())return
v=r.a
r=w.a
u=w.b
t=d+B.a.ap(v,r,u)+e
s=B.a.ol(v,r,u,t)
this.d.bM(0,new A.bb(s,A.h7(B.bt,r+t.length),B.aN))},
aW9(d){var w,v,u,t,s=this.d
s===$&&A.c()
s=s.a
w=s.a
v=B.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=B.a.ol(w,v,v,u)
this.d.bM(0,new A.bb(t,A.h7(B.bt,v+u.length),B.aN))},
aa8(){var w=0,v=A.j(x.H),u,t=this,s
var $async$aa8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(Z.FT(78,1920),$async$aa8)
case 3:s=e
if(s==null){w=1
break}t.m(new C.dVI(t,s))
case 1:return A.h(u,v)}})
return A.i($async$aa8,v)},
WO(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hU().a44(B.eF),$async$WO)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return A.b(s.fc(),$async$WO)
case 4:t.m(new r.dVN(t,e))
case 1:return A.h(u,v)}})
return A.i($async$WO,v)},
aa9(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$aa9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=$.aw()
s=new A.ar(B.as,t)
r=new A.ar(new A.bb("https://",B.b1,B.aN),t)
q=u.c
q.toString
w=2
return A.b(A.c9(null,null,!0,null,new C.dVL(s,r),q,null,!0,!0,x.y),$async$aa9)
case 2:if(e===!0)u.m(new C.dVM(u,s,r))
s.S$=t
s.P$=0
r.S$=t
r.P$=0
return A.h(null,v)}})
return A.i($async$aa9,v)},
bzR(){var w,v,u,t,s,r=null,q=A.a([],x.a),p=this.d
p===$&&A.c()
p=B.a.fu(p.a.a,A.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new A.J(p,new C.dVE(),A.T(p).k("J<1,n>")).bY(0,new C.dVF())
for(p=J.aW(w.a),v=new A.hc(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gU(p)
if(B.a.a0(s,"## "))q.push(new C.lr("heading",B.a.i(B.a.b_(s,3)),r,r))
else if(B.a.a0(s,"\u2022 ")||B.a.a0(s,"- "))q.push(new C.lr("bullets",new A.J(A.a(s.split("\n"),u),new C.dVG(),t).bY(0,new C.dVH()).aH(0,"\n"),r,r))
else q.push(new C.lr("text",s,r,r))}p=this.e
p===$&&A.c()
B.d.v(q,p)
if(q.length===0)q.push(D.a34)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.cZF(n),l=n?B.aA:B.fB,k=A.d(p.a.d,o,o,o,o,o,o,B.ct,o,o,o),j=x.p
k=A.eC(A.a([A.dp(S.a_n,B.a6F,new C.dVS(p,d),A.bk(B.aI,o,o,o,B.c,o,o,o,o,o,o,o)),B.ab],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?B.cC:B.iH
v=A.c4(B.bE,A.a([p.v4(E.LP,"Bold",new C.dVT(p),m),p.v4(E.YJ,"Italic",new C.dVU(p),m),p.v4(E.ahG,"Underline",new C.dVV(p),m),p.v4(Ab.YQ,"Heading",new C.dVW(p),m),p.v4(O.LQ,"Bullets",new C.dVX(p),m),p.v4(E.ahF,"Align",new C.dVY(),m),p.v4(B.EX,"Link",p.gbUS(),m),p.v4(B.pq,"Image",p.gbUR(),m),p.v4(Y.Z1,"Video",p.gbUT(),m),p.v4(M.a_2,"Signature",new C.dVZ(p),m),p.v4(Y.LR,"Divider",new C.dW_(p),m)],j),B.bx,4,4)
w=A.p(o,A.v(A.a([v,B.ao,A.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,A.l(o,o,n?B.dV:B.bp,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),B.aj,o,B.e,B.j,0,B.p),B.f,w,o,o,o,o,o,o,E.agy,o,o,o)
v=n?B.db:B.c
u=A.m(12)
t=A.I(n?B.es:B.e2,B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(n?0.35:0.08),B.cI,16)],x.V)
r=p.d
r===$&&A.c()
q=A.l(o,o,n?B.iK:B.aA,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=A.a([w,A.D(new A.C(B.c0,A.p(o,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),r,o,o,o,o,o,2,A.bo(o,B.ev,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.dV:B.bp,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,p.f,B.ag,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,q,!0,B.a5,o,B.am,o,o,o,o),B.f,o,o,new A.o(v,o,t,u,s,o,B.n),o,o,o,o,A3.Au,o,o,o),o),1)],j)
n=p.e
n===$&&A.c()
if(n.length!==0){n=new A.hV(n,A.T(n).k("hV<1>"))
j.push(A.p(o,A.c4(B.bE,n.gdK(n).dr(0,new C.dW0(p,m),x.g5).dC(0),B.bx,0,8),B.f,o,o,o,o,o,o,o,B.L8,o,o,o))}return A.cc(k,l,A.v(j,B.m,o,B.e,B.j,0,B.p),o,!1,!1,o,o)},
v4(d,e,f,g){var w=null,v=g.a,u=v?B.db:B.c,t=A.m(8),s=A.m(8)
return A.hn(A.aF(!1,B.a1,!0,t,A.aK(!1,s,!0,new A.C(B.cj,A.V(d,v?B.iK:B.aA,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,w,w,w,B.ae),w,e,w,w)}}
C.dcM.prototype={}
C.azq.prototype={
a4(){return"_KbView."+this.b}}
C.aol.prototype={
T(){return new C.aBR(D.aR5)},
cJG(d,e){return this.e.$2$size(d,e)}}
C.aBR.prototype={
gaxB(){var w,v
if(this.e==null)return null
for(w=J.aW(this.a.c);w.C();){v=w.gU(w)
if(v.a===this.e)return v}return null},
gcmt(){var w,v,u,t,s,r=this.gaxB()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
c2g(d){this.m(new C.dVB(this,d))},
c8Z(d){this.m(new C.dVC(this,d))},
by5(){this.m(new C.dVt(this))},
by7(){this.m(new C.dVu(this))},
gb2B(){var w=A.bl(this.a.c,!0,x.i)
B.d.b1(w,new C.dVD())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.M(d).ax.a===B.H,f=new C.dcM(g),e=x.O
e=g?A.a([B.M.j(0.9),B.bj.j(0.85)],e):A.a([B.er.j(0.55),B.mE.j(0.45)],e)
w=A.m(22)
v=A.I((g?B.aJ:B.ff).j(0.55),B.r,1)
switch(i.d.a){case 0:g=i.bz7(f)
break
case 1:g=i.gaxB()
g.toString
g=i.bzP(f,g)
break
case 2:u=i.gaxB()
u.toString
t=i.gcmt()
t.toString
s=A.b0(u.d)
r=A.m(16)
r=A.p(h,A.d(t.b,h,h,h,h,h,h,D.eSu,h,h,h),B.f,h,h,new A.o(B.aI,h,h,r,h,h,B.n),h,h,h,h,B.by,h,h,1/0)
q=g?B.aA:B.c
p=A.m(16)
o=A.I(g?B.aJ:B.aK,B.r,1)
n=A.a([new A.ac(0,B.G,B.w.j(g?0.28:0.06),B.ej,10)],x.V)
m=g?B.ft:B.p2
l=A.m(8)
k=A.V(B.pw,g?B.dx:B.dT,h,h,h,14)
j=x.p
j=A.v(A.a([new C.azo(f,i.gby6(),u.c,s,"Answer",h),A.D(A.cJ(A.a([r,B.ac,A.p(h,A.v(A.a([A.p(h,A.A(A.a([k,B.eb,A.d("Stored answer",h,h,h,h,h,h,A.l(h,h,g?B.dx:B.dT,h,h,h,h,h,h,h,h,11,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),B.m,h,B.e,B.Q,0,h,h),B.f,h,h,new A.o(m,h,h,l,h,h,B.n),h,h,h,B.e3,B.h3,h,h,h),new C.aYy(t.c,t.e,f,h)],j),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(q,h,o,p,n,h,B.n),h,h,h,h,B.c0,h,h,1/0)],j),h,B.bng,h,h,B.ai,!1),1)],j),B.aj,h,B.e,B.j,0,B.p)
g=j
break
default:g=h}return A.p(h,g,B.ap,h,h,new A.o(h,h,v,w,h,new A.a6(B.b0,B.b5,B.x,e,h,h),B.n),h,h,h,B.hG,h,h,h,h)},
aTH(d){var w,v,u,t=null,s=d.a,r=s?D.rL:B.c,q=B.aD.j(0.22)
q=A.a([new A.ac(0,B.G,q,B.J,14),new A.ac(0,B.G,B.w.j(s?0.28:0.06),B.J,8)],x.V)
w=A.I(s?B.aJ:B.ff,B.r,2)
v=this.a
u=x.p
q=A.a([A.p(t,A.hR(v.cJG(v.d,72),B.ap),B.f,t,t,new A.o(r,t,w,t,q,t,B.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)B.d.v(q,A.a([B.ao,A.d("Tap to switch",t,t,t,t,t,t,A.l(t,t,B.d2,t,t,t,t,t,t,t,t,12,t,t,B.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return A.v(q,B.m,t,B.e,B.j,0,B.p)},
bz7(d){var w,v,u=this,t=null,s=u.a.r
s=A.av(s!=null?A.aE(t,u.aTH(d),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,B.a9):u.aTH(d),t,t,t)
w=d.a
v=A.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,A.l(t,t,w?B.aP:B.M,t,t,t,t,t,t,t,t,20,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),B.L,t,t)
return A.cJ(A.a([s,B.az,v,B.ao,A.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,A.l(t,t,w?B.bI:B.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),B.L,t,t),B.bu,A.ib(!0,t,t,B.y,G.aLx,new C.dVw(u,d),u.gb2B().length,t,B.dP,B.ai,!0)],x.p),t,D.bny,t,t,B.ai,!1)},
bzP(d,e){var w,v,u,t,s=null,r=A.bl(e.e,!0,x.u)
B.d.b1(r,new C.dVy())
w=A.b0(e.d)
v=d.a
u=A.d("Tap a question to read the stored answer.",s,s,s,s,s,s,A.l(s,s,v?B.bI:B.ak,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=A.av(A.d("No questions in this category yet.",s,s,s,s,s,s,A.l(s,s,v?B.bI:B.ak,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=A.hD(s,new C.dVz(this,r,d,e),t,B.uT,s,B.ai,new C.dVA(),!1)
return A.v(A.a([new C.azo(d,this.gby4(),e.c,w,e.b,s),new A.C(Ag.uU,u,s),A.D(v,1)],x.p),B.aj,s,B.e,B.j,0,B.p)}}
C.azo.prototype={
B(d){var w=this,v=null,u=w.c.a,t=A.aH(v,v,v,v,A.V(B.ez,u?B.aP:B.M,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=A.m(12)
q=A.p(v,A.V(w.e,s,v,v,v,22),B.f,v,v,new A.o(r,v,v,q,v,v,B.n),v,v,v,v,B.cj,v,v,v)
return new A.C(D.bqN,A.A(A.a([t,q,B.aw,A.D(A.d(w.r,v,v,v,v,v,v,A.l(v,v,u?B.aP:B.M,v,v,v,v,v,v,v,v,17,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,v,v),v)}}
C.aar.prototype={
B(d){var w=null,v=this.c,u=A.b0(v.d),t=this.d.a,s=t?D.rL:B.c,r=A.m(14),q=A.m(14),p=A.m(14),o=A.I(t?B.aJ:B.aK,B.r,1),n=A.a([new A.ac(0,B.G,B.w.j(t?0.28:0.06),B.dz,6)],x.V),m=u.j(0.15),l=A.m(12)
l=A.p(w,A.V(v.c,u,w,w,w,22),B.f,w,w,new A.o(m,w,w,l,w,w,B.n),w,40,w,w,w,w,w,40)
return new A.fF(1,A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(w,A.v(A.a([l,B.ao,A.d(v.b,w,2,B.a2,w,w,w,A.l(w,w,t?B.aP:B.M,w,w,w,w,w,w,w,w,10,w,w,B.I,w,1.1,!0,w,w,w,w,w,w,w,w),B.L,w,w)],x.p),B.m,w,B.b9,B.j,0,B.p),B.f,w,w,new A.o(w,w,o,p,n,w,B.n),w,w,w,w,B.cj,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.ae),w)}}
C.aYy.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=A.a([],q)
if(this.d){w=r.a
v=w?B.ft:B.p2
u=A.m(8)
t=A.V(B.tw,w?B.dx:B.dT,s,s,s,14)
p.push(A.p(s,A.A(A.a([t,B.d9,A.d("Printable document",s,s,s,s,s,s,A.l(s,s,w?B.dx:B.dT,s,s,s,s,s,s,s,s,10,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),B.m,s,B.e,B.Q,0,s,s),B.f,s,s,new A.o(v,s,s,u,s,s,B.n),s,s,s,B.cK,B.eE,s,s,s))}B.d.v(p,J.b6(this.c,new C.c6C(r),x.l))
return A.v(p,B.F,s,B.e,B.j,0,B.p)}}
C.aaj.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new A.C(D.blq,A.d(q.b,r,r,r,r,r,r,A.l(r,r,s.d.a?B.aP:B.M,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new A.C(B.hF,A.bv(A.m(12),K.aNI(r,B.bQ,160,B.pq,r,w,1/0),B.ap),r)
case"video":v=q.c
q=v==null?q.b:v
return new A.C(B.hF,new C.azp(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new A.C(B.uP,A.aK(!1,r,!0,A.d(q,r,r,r,r,r,r,A.l(r,r,s.d.a?B.cx:B.bl,r,B.mq,r,r,r,r,r,r,r,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cBU(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=A.iw(v?B.aJ:B.aK,r,r,r,r,r)
q=A.d(q.b,r,r,r,r,r,r,A.l(r,r,v?B.cm:B.aJ,r,r,r,r,r,r,r,r,r,B.cD,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=A.p(r,r,B.f,v?B.bI:B.ak,r,r,r,1,r,r,r,r,r,120)
return new A.C(B.Ah,A.v(A.a([u,q,B.aO,t,B.au,A.d("Signature",r,r,r,r,r,r,A.l(r,r,v?B.bI:B.ak,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r)
case"bullets":v=x.cl
q=A.B(new A.cS(new A.a1(A.a(q.b.split("\n"),x.s),new C.cBV(),x.cc),new C.cBW(s),v),v.k("G.E"))
return new A.C(B.kC,A.v(q,B.F,r,B.e,B.j,0,B.p),r)
case"divider":return new A.C(B.hF,A.iw(s.d.a?B.aJ:B.aK,r,r,r,r,r),r)
default:q=q.b
if(B.a.i(q).length===0)return B.bH
return new A.C(B.eY,C.hAS(q,s.d),r)}}}
C.azp.prototype={
T(){return new C.beC()}}
C.beC.prototype={
a_(){this.a1()
this.acc()},
acc(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$acc=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=B.a.i(r.a.c)
if(J.ab(n)!==0)p=!J.cZ(n,"http")&&!J.cZ(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=A.X1(A.cv(n,0,null),null)
w=7
return A.b(J.ags(q),$async$acc)
case 7:if(r.c==null){w=1
break}r.m(new C.dcN(r,q))
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
return A.i($async$acc,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?B.bj:B.f7
u=A.m(12)
return A.p(B.A,A.V(B.pB,w?B.bI:B.ak,t,t,t,36),B.f,t,t,new A.o(v,t,t,u,t,t,B.n),t,120,t,t,t,t,t,t)}w=A.m(12)
v=s.a
u=J.agq(v)
return A.bv(w,new A.fF(u,new A.an(B.A,t,B.aa,B.q,A.a([new A.zz(s,t),A.aH(t,t,t,t,A.V(v.f?B.ahN:B.LS,B.c,t,t,t,44),t,t,t,new C.dcP(this,s),t,t,t,t,t,t)],x.p),t),t),B.ap)}}
C.ap8.prototype={
a4(){return"NgmyMusicLane."+this.b}}
C.HS.prototype={
a4(){return"NgmyMusicRhymeScheme."+this.b}}
C.r6.prototype={}
C.aoo.prototype={
T(){var w=null
return new C.aBT(new A.ar(B.as,$.aw()),A.mn(0,w,w),A.a([],x.m),D.BR,D.aDb,w,w)},
gdV(){return this.d}}
C.aBT.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.mN,null,1,null,v)
w.f5(0,!0)
v.as!==$&&A.aQ()
v.as=w
v.z=B.d.gK(D.a1H).a},
q(){var w=this,v=w.as
v===$&&A.c()
v.q()
v=w.d
v.S$=$.aw()
v.P$=0
w.e.q()
w.brF()},
gao7(){var w,v,u,t,s=this.x
if(s===D.BS)return null
s=s===D.BR
w=s?D.a1H:D.a0V
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?B.d.gK(w):null},
cne(d){return this.m(new C.dWf(this,d))},
axo(){$.aU.x1$.push(new C.dW6(this))},
I1(d){return this.cmH(d)},
aWa(){return this.I1(null)},
cmH(b0){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$I1=A.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=B.a.i(b0==null?q.d.a.a:b0)
if(J.ab(a8)===0||q.r||q.a.e){w=1
break}w=3
return A.b(q.a.f.$0(),$async$I1)
case 3:e=b2
if(!e){w=1
break}A.jJ()
d=a8.toLowerCase()
p=B.a.t(d,"continue")||B.a.t(d,"keep going")||B.a.t(d,"go on")||B.a.t(d,"next verse")||B.a.t(d,"more lyrics")||B.a.t(d,"endelea")||B.a.t(d,"endelea na")||B.a.t(d,"ongeza")||B.a.t(d,"tuendelee")
a0=q.f
a1=B.d.b8(a0,new C.dW8())
o=!p&&!a1
d=a8.toLowerCase()
if(!(B.a.t(d,"fix")||B.a.t(d,"rewrite")||B.a.t(d,"re-write")||B.a.t(d,"rhyme better")||B.a.t(d,"better rhyme")||B.a.t(d,"sound better")||B.a.t(d,"improve")||B.a.t(d,"polish")||B.a.t(d,"make it rhyme")||B.a.t(d,"boresha")||B.a.t(d,"rekebisha")||B.a.t(d,"endeleza mistari")))a2=C.h74(a8)&&a1
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
l=C.h74(a8)&&!p
q.m(new C.dW9(q,a8))
q.axo()
k=B.a.i(q.a.c)
if(J.ab(k)===0){q.m(new C.dWa(q))
q.axo()
w=1
break}t=5
j=A.mT(k)
i=new A.J(a0,new C.dWb(),A.T(a0).k("J<1,n>")).aH(0,"\n\n")
a0=C.hUn(m,p,o,q.x,n,q.y,q.gao7(),l)
a3=J.ab(i)!==0?"--- Conversation so far ---\n"+A.t(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+A.t(a8)
w=8
return A.b(A.qx(j,h,B.hj,null),$async$I1)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=B.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=B.a.i(a0)}else a6=L.bzk(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.m(new C.dWc(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.m(new C.dWd(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.m(new C.dWe(q))
q.axo()
w=r.pop()
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$I1,v)},
bDN(){return this.I1("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=A.M(d).ax.a===B.H,p=q?B.E1:D.bca,o=x.p
o=A.a([A.v(A.a([A.D(s.clW(q),1),s.bD0(q)],o),B.m,r,B.e,B.j,0,B.p)],o)
if(s.f.length!==0&&!s.r){w=B.aM.j(0.55)
v=s.r?r:s.gbDM()
u=A.m(28)
t=A.a([B.aM,B.aL],x.O)
o.push(A.ao(78,A.aF(!1,B.a1,!0,r,A.aK(!1,r,!0,A.ex(D.dZ0,r,new A.o(r,r,r,u,A.a([new A.ac(0,B.G,B.aM.j(0.45),B.cI,16)],x.V),new A.a6(B.a3,B.a7,B.x,t,r,r),B.n),r,r,r),B.rk,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),B.f,B.K,10,r,w,B.rk,r,r,B.ae),r,r,r,14,r,r))}return A.p(r,new A.an(B.W,r,B.aa,B.q,o,r),B.f,p,r,r,r,r,r,r,r,r,r,r)},
clW(d){var w,v,u,t=this,s=null
if(t.x===D.BS)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=A.a([A.fLP(s,!1,B.K,0,0,w,A.fIb(t.cru(d),B.UD,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=A.V(B.ake,B.aD.j(0.5),s,s,s,52)
w.push(A.b43(new A.C(B.ey,A.v(A.a([u,B.az,A.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,A.l(s,s,d?B.ay:B.dy,s,s,s,s,s,s,s,s,14,s,s,B.a4,s,1.45,!0,s,s,s,s,s,s,s,s),B.L,s,s),B.az,A.c4(B.fL,A.a([t.agp("Full bongo love song ABAB",d),t.agp("Mix: group vs private jet \u2014 which flies?",d),t.agp("Song from John 3:16 + matching verses",d),t.agp("Fix my rhyme \u2014 paste your lines",d)],v),B.bx,8,8)],v),B.m,s,B.b9,B.j,0,B.p),s),!1))}else{v=t.r?1:0
w.push(new A.nB(D.bm5,A.Wu(new A.oa(new C.dW7(t,d),u+v,!0,!0,!0,0,A.rz(),s)),s))}return A.vb(0,s,B.q,t.e,B.y,s,s,A5.a8V,s,s,!1,s,B.ai,!1,w)},
cru(d){var w=this.as
w===$&&A.c()
return A.c6(w,new C.dWm(this,d),null)},
crw(d){var w,v=this,u=null,t=A.m(14),s=v.r?u:new C.dWo(v),r=B.w.j(d?0.35:0.06),q=A.m(14),p=A.I(B.ba.j(0.35),B.r,1),o=v.gao7()
o=o==null?u:o.c
o=A.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,B.I6,u,u,u)
w=v.gao7()
w=w==null?u:w.b
if(w==null)w="Style"
w=A.D(A.d(w,u,u,u,u,u,u,A.l(u,u,d?B.c:B.bh,u,u,u,u,u,u,u,u,12,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(u,A.A(A.a([o,B.ab,w,A.V(v.w?B.Mj:B.qJ,B.ba,u,u,u,20)],x.p),B.m,u,B.e,B.j,0,u,u),B.f,u,u,new A.o(r,u,p,q,u,u,B.n),u,u,u,u,B.ok,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ae)},
atc(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=A.a([B.aZ,B.aT],x.O)
break
case 1:w=A.a([B.bl,B.cx],x.O)
break
case 2:w=A.a([B.bA,B.aD],x.O)
break
default:w=n}v=m?6:0
u=A.m(14)
t=A.m(14)
s=this.r?n:new C.dW5(this,d)
r=A.m(14)
w=m?new A.a6(B.a3,B.a7,B.x,w,n,n):n
if(m)q=n
else q=B.w.j(g?0.3:0.05)
p=A.d(f,n,n,n,n,n,n,B.I6,n,n,n)
if(m)o=B.c
else o=g?B.ad:B.bh
return A.D(A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.df(n,A.v(A.a([p,A.d(e,n,n,n,n,n,n,A.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),B.m,n,B.e,B.j,0,B.p),n,n,B.bb,new A.o(q,n,n,r,n,w,B.n),B.a1,n,n,n,B.jM,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),B.f,n,v,n,n,n,n,n,B.ae),1)},
crx(d,e){var w,v,u,t=this,s=null,r=t.x===D.BR?t.z:t.Q,q=A.m(20)
if(r===d.a)r=B.ba.j(e?0.25:0.15)
else r=B.w.j(e?0.2:0.04)
w=A.m(20)
v=t.r?s:new C.dWp(t,d)
u=A.d(d.c,s,s,s,s,s,s,B.S8,s,s,s)
return A.aF(!1,B.a1,!0,q,A.aK(!1,w,!0,new A.C(B.fF,A.A(A.a([u,B.d9,A.d(d.b,s,s,s,s,s,s,A.l(s,s,e?B.c:B.bh,s,s,s,s,s,s,s,s,10,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.m,s,B.e,B.Q,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),B.f,r,0,s,s,s,s,s,B.ae)},
agp(d,e){var w=null,v=A.d(d,w,w,w,w,w,w,E.a6y,w,w,w),u=B.aD.j(e?0.2:0.1)
return A.mw(w,u,v,w,this.r?w:new C.dWg(this,d),w,w,w,w)},
bD0(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=A.m(22),o=d?B.M.j(0.95):B.c,n=A.I(B.aD.j(0.2),B.r,1),m=x.p,l=A.a([],m)
if(q>0)l.push(new A.C(F.agk,A.d("$"+B.k.aa(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,A.l(r,r,B.aM.j(0.85),r,r,r,r,r,r,r,r,9,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=A.l(r,r,d?B.c:B.bh,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.BS?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=A.D(A.aL(r,B.T,!1,r,!0,B.q,r,A.aM(),w,r,r,r,r,r,2,A.bo(r,B.ev,r,B.h5,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.l(r,r,d?B.bZ:B.hD,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),B.y,!0,r,!0,r,!1,r,B.ag,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.dW2(s),r,!1,r,r,!1,r,!0,r,B.a8,r,r,r,r,r,r,r,r,r,r,r,v,!0,B.a5,r,B.am,r,r,r,r),1)
u=s.r
t=u?r:new C.dW3(s)
l.push(A.A(A.a([v,new A.I1(w,B.aD,r),A.aF(!1,B.a1,!0,r,A.aK(!1,r,!0,A.ex(u?D.dZd:D.bFn,r,D.aXu,42,r,42),B.cL,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),B.f,r,0,r,r,B.cL,r,r,B.ae)],m),B.dC,r,B.e,B.j,0,r,r))
return A.p(r,A.v(l,B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,n,p,r,r,B.n),r,r,r,B.uR,B.aeV,r,r,r)}}
C.aJX.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.Ud.prototype={
ad(){var w=this
return A.E(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.Yo.prototype={
T(){return new C.ayQ(null,null)},
bda(){return this.f.$0()}}
C.ayQ.prototype={
a_(){var w,v=this,u=null
v.a1()
w=A.bj(u,D.bku,u,1,u,v)
w.co(0)
v.d!==$&&A.aQ()
v.d=w
w=A.bj(u,B.pi,u,1,u,v)
w.f5(0,!0)
v.e!==$&&A.aQ()
v.e=w
w=A.bj(u,B.l0,u,1,u,v)
w.cF(0)
v.f!==$&&A.aQ()
v.f=w
w=A.bj(u,B.wU,u,1,u,v)
w.co(0)
v.r!==$&&A.aQ()
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
w.bqv()},
c2i(){var w=this.d
w===$&&A.c()
w.ep(0).bz(new C.da6(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(A.aI(d,B.bS,x.w).w.a.a-32,360),h=B.w.j(0.82),g=k.gc2h(),f=x.l,e=J.e0(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&A.c()
e[v]=new A.Cu(new C.da7(k,v,d),j,w,j)}f=A.B(e,f)
w=k.d
w===$&&A.c()
u=A.m(28)
t=A.I(B.c.j(0.22),B.r,1.5)
s=A.a([new A.ac(2,B.G,B.aL.j(0.35),B.J,40),new A.ac(0,B.G,B.aI.j(0.25),B.fJ,28)],x.V)
r=k.e
r===$&&A.c()
q=k.r
q===$&&A.c()
q=A.c6(new A.h2(A.a([r,q],x.U)),new C.da8(k),j)
r=A.nA(B.jf,D.fiF,new C.da9())
p=A.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,A.l(j,j,B.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,B.cs,j,1.45,!0,j,j,j,j,j,j,j,j),B.L,j,j)
o=x.p
n=A.A(A.a([k.aWb(B.kd,"Resets in 24h"),B.ab,k.aWb(B.pw,"Help Topics ready")],o),B.m,j,B.b9,B.j,0,j,j)
m=A.a([],o)
k.a.toString
l=B.c.j(0.35)
m.push(A.D(A.dW(D.fdo,new C.daa(k),A.dd(j,j,j,j,j,j,j,j,j,B.ad,j,j,B.m4,j,new A.b7(A.m(14),B.Y),new A.az(l,1,B.r,-1),j,j,j,j)),1))
k.a.toString
m.push(B.aw)
k.a.toString
l=A.m(14)
m.push(A.D(A.bJ(D.fiv,g,A.bk(B.aI,j,j,6,B.c,j,B.m4,B.aI.j(0.5),new A.b7(l,B.Y),j,j,j)),1))
f.push(A.av(A.aE(j,A.c6(w,new C.dab(k),A.p(j,A.v(A.a([q,B.az,r,B.S,p,B.P,n,B.bu,A.A(m,B.m,j,B.e,B.j,0,j,j)],o),B.m,j,B.e,B.Q,0,B.p),B.f,j,j,new A.o(j,j,t,u,s,D.bNi,B.n),j,j,j,j,A6.agc,j,j,i)),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.dac(),j,j,j,j,j,j,!1,B.a9),j,j,j))
return A.aF(!1,B.a1,!0,j,A.aE(j,new A.an(B.W,j,B.aa,B.q,f,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,B.a9),B.f,h,0,j,j,j,j,j,B.ae)},
aWb(d,e){var w=null,v=B.c.j(0.08),u=A.m(20),t=A.I(B.c.j(0.12),B.r,1)
return A.p(w,A.A(A.a([A.V(d,B.aL,w,w,w,13),B.eb,A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.fF,w,w,w)}}
C.aIQ.prototype={
aQ(){this.aY()
this.aW()
this.dF()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdD())
w.b2$=null
w.a2()}}
C.MN.prototype={}
C.px.prototype={}
C.aoW.prototype={
T(){return new C.aCe(A.a([],x.E),A.a([],x.s))}}
C.aCe.prototype={
gaov(){return B.k.D(A.Kd(this.a.c.a,new C.e54(this)),0,1/0)},
a6F(){var w,v=this,u=v.d,t=v.gaov()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)A.qv(u.a,t,!0,!1)},
Iu(d,e){var w,v,u,t=this,s=t.gaov(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gaov()
if(w<v-0.005)A.hc9(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)A.qv(u.a,w,!0,!1)
A.qv(t.a.c.a,w,!0,!1)
A.Ae(!0,!1,w,t.a.c.a)},
a_(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a1()
$.aU.c0$.push(o)
w=$.HG+1
$.HG=w
if(w===1){w=$.fZI
if(w!=null)w.$0()}v=$.fKe.h(0,B.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=A.bl(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=A.bl(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=A.lz(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,B.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=A.aNn(u,B.k.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new A.v2(w,u,r,q,s.e,p)}o.d=t}o.NZ()
o.a6F()
$.aU.x1$.push(new C.e5L(o))
o.Q=A.dF(B.ny,new C.e5M(o))
o.as=A.dF(B.fO,new C.e5N(o))},
q(){var w=this,v=w.Q
if(v!=null)v.a9(0)
v=w.as
if(v!=null)v.a9(0)
$.aU.hz(w)
C.hsL()
w.a2()},
ctD(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new A.Q(Date.now(),0,!1)
v=p.r
if(!C.a6r(v,w)){if(C.fKg(p,q.e)){q.m(new C.e5t(q,p))
q.xf(!1,!0,!0)}else if(q.c!=null)q.m(new C.e5u())
return}if(!C.c8S(v.c?v.bQ():v)){q.m(new C.e5v(p))
q.aWj(!1)
return}u=p.gBE()
if(u<=0)return
t=w.cW(A.bZ(A.bx(w),A.bF(w),A.bP(w),12,0,0,0,0))
s=C.fKh(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.m(new C.e5w())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(B.d.b8(q.e,new C.e5x(r))){q.m(new C.e5y(p,w,u))
return}q.m(new C.e5z(q,p,u,w))
q.avu(new A.d1(r,p.a,u,B.fz,B.fa,"Clock-in daily earnings (local)",null,null,B.ck,w))},
iI(d){if(d===B.fq)this.DT()},
NZ(){var w,v,u,t,s,r,q,p=this.d
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
w.c5=A.bl(p.c5,!0,x.N)
w=this.a.c
w.bR=p.c5.length
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
q=new A.v2(u,t,s,r,v.e,q)
u=q}w.x=u},
QA(d){return this.csh(d)},
csh(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$QA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.NZ()
t.Iu(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return A.b(x.r.b(s)?s:A.dR(s,x.H),$async$QA)
case 3:case 1:return A.h(u,v)}})
return A.i($async$QA,v)},
DT(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$DT=A.e(function(d,e){if(d===1){s.push(e)
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
return A.b(H.yX(q.w,k,l,j,m,!1,n),$async$DT)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.m(new C.e5o(q,p))
q.QA(!1)}w=8
return A.b(q.IG(),$async$DT)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=A.a8(h)
$.am.$1("[growth income] pull wallet: "+A.t(o))
w=9
return A.b(q.IG(),$async$DT)
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
return A.i($async$DT,v)},
Mr(d){return this.bxh(d)},
bxg(){return this.Mr(null)},
bxh(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$Mr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return A.b(A.ay(),$async$Mr)
case 3:s=f
r=B.a.i(t.a.c.a.toLowerCase())
q=A.d9(t.w,x.N)
r=s.rG("ngmy_gi_credited_txn_ids_"+r)
q.v(0,r==null?A.a([],x.s):r)
j.a=0
p=A.a([],x.s)
o=d==null?null:A.ks(d,A.T(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,A.K)(r),++m){l=r[m]
k=l.a
if(q.t(0,k))continue
if(o!=null&&!o.t(0,k))continue
if(l.d===B.fo&&l.x===B.ck&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.m(new C.e55(j,t,i))
q.v(0,p)
r=A.B(q,A.a2(q).k("cl.E"))
t.w=r
w=4
return A.b(A.aoY(t.a.c.a,r),$async$Mr)
case 4:t.av0(!1,!0)
r=t.c
if(r!=null)r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Balance updated: +$"+A.dy(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Mr,v)},
IG(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$IG=A.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=A.T(a2).k("a1<1>")
a4=A.B(new A.a1(a2,new C.e5p(),a3),a3.k("G.E"))
a5=a4
a6=A.a([],x.s)
w=J.ab(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=A.T(a2).k("J<1,n>")
e=A.B(new A.J(a2,new C.e5q(),a3),a3.k("aj.E"))
q=e
w=9
return A.b(A.lf("transactions","id,status",null,null,null,A.E(["id",q],x.N,x.j),null,!0,null,null,!1,B.bG),$async$IG)
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
if(J.ab(l)===0)continue
j=B.d.be(r.e,new C.e5r(l))
if(j<0)continue
i=r.e[j].x
if(J.y(k,1))a0=B.ck
else a0=J.y(k,2)?B.jZ:B.ds
h=a0
if(!J.y(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===B.ds&&h===B.ck&&a3[j].d===B.fo)J.cf(a6,l)
if(i===B.ds&&h===B.jZ&&r.e[j].d===B.eK){g=r.d
if(g!=null){r.Iu(g.d+r.e[j].c,!1)
r.av0(!1,!0)}}}}if(o&&r.c!=null)r.m(new C.e5s())
t=2
w=8
break
case 6:t=5
a7=s.pop()
f=A.a8(a7)
$.am.$1("[growth income] refresh deposit status: "+A.t(f))
w=8
break
case 5:w=2
break
case 8:case 4:w=J.ab(a6)!==0?10:12
break
case 10:w=13
return A.b(r.Mr(a6),$async$IG)
case 13:w=11
break
case 12:w=14
return A.b(r.bxg(),$async$IG)
case 14:case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$IG,v)},
Oz(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$Oz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return A.b(A.ul(i.a,i),$async$Oz)
case 3:h=e
if(t.c==null){w=1
break}t.m(new C.e59(t,h))
t.NZ()
t.a6F()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return A.b(H.yX(s[0],p,q,o,r,!0,i),$async$Oz)
case 4:i=e.a
n=i[4]
m=A.bl(i[2],!0,x.o)
l=i[5]
t.w=A.bl(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.NZ()
t.a6F()
k=C.fKg(n,m)
if(k)t.Iu(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.Z&&s.az>0
else s=!0
j=A.h_r(n,m,new A.Q(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.NZ()
if(t.c==null){w=1
break}t.m(new C.e5a(t,n,m,l))
if(i){t.xf(!1,!0,!0)
if(j==="reset"){A.fZh(t.a.c.a)
i=t.c
if(i!=null)A.fZk(i,null)}else if(j==="warn2"){A.fZi(t.a.c.a)
i=t.c
if(i!=null)C.fZl(i)}}else if(k)t.xf(!1,!0,!0)
else t.QA(!1)
case 1:return A.h(u,v)}})
return A.i($async$Oz,v)},
xf(d,e,f){return this.ccw(d,e,f)},
av0(d,e){return this.xf(d,!1,e)},
aWj(d){return this.xf(!1,d,!1)},
ccw(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$xf=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new A.Q(Date.now(),0,!1).a5()
r=t.a.c.a
q=t.e
p=t.f
w=3
return A.b(A.r4(r,o,q,!1,t.w,s,p),$async$xf)
case 3:p=t.a.c.a
q=t.e
r=t.f
A.HL(t.w,p,q,s,o,r)
if(f)t.QA(d)
case 1:return A.h(u,v)}})
return A.i($async$xf,v)},
c2x(){this.m(new C.e5i())
this.av0(!1,!0)},
acR(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===B.ck&&A.rx(d)){w=r.a
w.f.$1(new A.d1(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.c8O(q,d)
v=q.d=A.Kd(r.a.c.a,new C.e5f(r))
r.at=r.a.c.d=v
A.qv(q.a,v,!0,!1)
if(r.c!=null)r.m(new C.e5g(r,d))
r.xf(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new A.d1(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===B.ds
if(w&&d.d===B.fo)s=!1
else if(w&&d.d===B.eK){r.Iu(q.d-d.c,!0)
s=!0}else{C.c8O(q,d)
w=d.d
s=w===B.eK||w===B.jA
r.Iu(q.d,s)}r.m(new C.e5h(r,d))
w=d.d
r.xf(s,e,w===B.eK||w===B.jA||d.x===B.ck||w===B.fz)},
avu(d){return this.acR(d,!0,!1)},
aXg(d,e){return this.acR(d,!0,e)},
aXf(d,e){return this.acR(d,e,!1)},
c5t(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.hWx(u,e,d)){v.lM("This plan is already active.")
return}w=A.hbG(u.a,d,e)
if(C.hSZ(u.a,v.e,w)){v.lM("You already own this plan.")
return}if(u.d<g){v.lM("Insufficient balance. Add funds in the Wallet tab first.")
return}v.m(new C.e5j(v))
v.m(new C.e5k(v,u,new A.v2(d,e,0.0286,new A.Q(Date.now(),0,!1),0,0)))
v.avu(new A.d1(w,u.a,g,B.jA,B.fa,"Direct investment buy: "+d,null,null,B.ck,new A.Q(Date.now(),0,!1)))
v.m(new C.e5l(v))
v.lM("Plan purchased: "+d)},
lM(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
Z1(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Z1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ht(s,new C.alY(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$Z1)
case 3:w=4
return A.b(t.Oz(),$async$Z1)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Z1,v)},
adl(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$adl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ht(s,new C.agM(r,A.a([r],x.d9),B.Pc,t.a.d,t.gaXe(),t.gaWi(),null),!1,null,x.X),$async$adl)
case 3:case 1:return A.h(u,v)}})
return A.i($async$adl,v)},
adj(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$adj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ht(s,new C.ajz(r,t.a.d,t.e,t.gaXe(),t.gaWi(),new C.e5n(t),null),!1,"LocalGrowthGameCenter",x.X),$async$adj)
case 3:case 1:return A.h(u,v)}})
return A.i($async$adj,v)},
aaT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aaT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new A.Q(s,0,!1)
w=C.fKg(j,t.e)?3:4
break
case 3:w=5
return A.b(t.aWj(!0),$async$aaT)
case 5:case 4:if(j.x==null){t.lM("Choose an investment plan first, then come back to clock in.")
t.m(new C.e5b(t))
w=1
break}if(A.ml(r)===6||A.ml(r)===7){t.lM("Clock-in opens Monday through Friday.")
w=1
break}if(!C.h_s(r)){t.lM("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a6r(q,r)&&j.fy>0){t.lM("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!A.aO5(q,r))if(!A.aO5(j.fr,r)){q=A.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,A.K)(p),++n){m=p[n]
if(B.a.i(m.b.toLowerCase())===B.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new A.aE7(m.y,l,m.a))}}q=A.hb7(q,r)}else q=p
else q=p}else q=!1
if(q){t.lM("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.lM("You are already clocked in for today.")
w=1
break}k=C.huc(r)
q=j.a
t.m(new C.e5c(j,r,k))
t.aXf(new A.d1("local_clockin_manual_"+q+"_"+s,j.a,0,B.fz,B.fa,"Clock-in session started (local)",null,null,B.ck,r),!1)
t.lM("Clock-in started. Keep Growth Income open for today.")
case 1:return A.h(u,v)}})
return A.i($async$aaT,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===B.H?B.j_:B.pd
if(l.d==null)return A.ei(B.km,j,!0)
w=x.o
v=A.U(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=B.a.i(l.a.c.a.toLowerCase())
u=$.fmR
u=u==null?k:u.$0()
u=J.aW(u==null?B.i_:u)
while(u.C()){t=u.gU(u)
q=t.a
if(q.length===0||v.ah(0,q)||A.rx(t))continue
if(B.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(A.dr(o.toLowerCase(),"clock-in",0))continue
v.n(0,q,t)}w=A.B(new A.bc(v,v.$ti.k("bc<2>")),w)
v=l.e
B.d.v(w,new A.a1(v,new C.e5D(),A.T(v).k("a1<1>")))
B.d.b1(w,new C.e5E())
v=l.d
v.toString
u=C.hIL(l.a.c)
t=l.d
t.toString
t=A.ei(new C.akq(t,l.a.e,l.z,l.gc5s(),l.aRe(),D.fwu),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=A.ei(new C.azD(l.aRe(),q,n,o,w,new C.e5F(l),l.gc7y(),new C.e5G(l),D.fwv),j,!0)
m=A.aI(d,k,x.w).w
n=l.y
return new A.V6(n,new C.e5H(l),A.aF(!1,B.a1,!0,k,new A.a5(1/0,m.a.b,new A.an(B.W,k,B.aa,B.q,A.a([A.bY(0,A.ei(k,j,!0),0,0,0),A.bY(0,A.bq(!1,[new C.azC(v,u,w,l.gbXJ(),new C.e5I(l),new C.e5J(l),new C.e5K(d),l.gc8o(),l.gc8k(),D.fwt),t,o][n],!0,!1,B.ah,!0,!0),0,0,0),A.ao(0,l.bzz(),k,k,0,0,k,k)],x.p),k),k),B.f,j,0,k,k,k,k,k,B.ae),k)},
aRe(){var w=null,v=A.a([D.eH.j(0.24),B.M.j(0.72)],x.O)
return A.hn(A.aK(!1,w,!0,A.p(B.A,D.bJR,B.f,w,w,new A.o(w,w,A.I(D.eH.j(0.38),B.r,1),w,A.a([new A.ac(0,B.G,D.eH.j(0.18),B.J,16)],x.V),new A.a6(B.ax,B.aC,B.x,v,w,w),B.a6),w,40,w,w,w,w,w,40),B.cL,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e58(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bzz(){var w=null,v=A.m(27),u=A.I(B.av.j(0.45),B.r,1),t=A.a([new A.ac(0,B.G,B.w.j(0.5),B.eR,24),new A.ac(-2,B.G,B.av.j(0.12),B.J,18)],x.V)
return new A.C(B.L8,A.bq(!0,A.av(new A.cW(D.aVM,A.p(w,A.cm(new C.e56(this)),B.f,w,w,new A.o(w,w,u,v,t,D.bMM,B.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,B.ah,!0,!1),w)},
bZn(d){var w=null,v=this.y===d,u=D.cPL[d],t=u.b,s=u.a,r=""+d,q=x.W
return A.D(A.dq(w,!0,w,A.aE(B.c5,A.rc(A.pZ(v?A.V(s,D.aad,new A.cz("on"+r,q),w,w,21):A.v(A.a([A.V(s,B.c.j(0.62),w,w,w,19),B.bB,A.d(t,w,1,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,new A.cz("off"+r,q),B.b9,B.j,0,B.p),B.ir,A.rt(),B.bb,B.bb,A.a0p())),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e5e(this,d),w,w,w,w,w,w,!1,B.a9),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,B.c1,w),1)}}
C.azC.prototype={
bWz(d){return C.fKh(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.M(d)
w=B.c.j(0.58)
v=f.e
u=A.T(v).k("a1<1>")
u=A.oY(new A.a1(v,new C.deA(),u),3,u.k("G.E"))
t=A.B(u,A.a2(u).k("G.E"))
v=f.c
s=v.x
r=new A.Q(Date.now(),0,!1)
q=v.f
p=C.a6r(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.h_s(r)
m=v.gBE()
l=A.a([D.eH.j(0.24),B.M.j(0.72)],x.O)
k=A.I(D.eH.j(0.38),B.r,1)
j=x.V
i=A.a([new A.ac(0,B.G,D.eH.j(0.18),B.J,16)],j)
l=A.aK(!1,e,!0,A.p(B.A,A.V(B.hW,D.eH,e,e,e,19),B.f,e,e,new A.o(e,e,k,e,i,new A.a6(B.ax,B.aC,B.x,l,e,e),B.a6),e,38,e,e,e,e,e,38),B.cL,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=A.m(14)
k=A.m(14)
j=A.a([new A.ac(0,B.G,B.b3.j(0.45),B.cI,16)],j)
h=A.m(12)
g=x.p
j=A.bLA(!1,l,"GROWTH INCOME",A.aK(!1,i,!0,new A.a5(44,44,new A.an(B.W,e,B.aa,B.f,A.a([A.p(B.A,A.p(B.A,D.bCu,B.f,e,e,new A.o(B.io.j(0.78),e,e,h,e,e,B.n),e,36,e,e,e,e,e,36),B.f,e,e,new A.o(e,e,e,k,j,D.bOd,B.n),e,42,e,e,e,e,e,42),A.ao(e,A.p(B.A,D.bIW,B.f,e,e,new A.o(B.cr,e,A.I(D.acp,B.r,2),e,e,e,B.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.h22(B.hf,new C.deB(),k)
k=A.A(A.a([A.D(C.h21(new C.deC(f,B.qj,n),new A.Q(Date.now(),0,!1),h,k),1),B.nU,A.D(new A.u6(new C.deD(f,B.qj),e,new A.h2(A.a([$.yb(),$.a1t()],x.U)),e),1)],g),B.m,e,B.e,B.j,0,e,e)
h=f.bZy(B.qj,D.eH)
v=A.D(f.cpV("Total Profit","$"+A.dy(v.e),B.qj),1)
u=u?e:s.b
return A.ei(A.cd(A.v(A.a([j,B.S,k,B.ac,new C.azB(f.d,m,q,p,n,o,D.eH,f.gbWy(),f.f,e),B.ac,h,B.S,A.A(A.a([v,B.nU,A.D(f.b2w("Total Investment","$"+A.dy(u==null?0:u),B.qj,f.r),1)],g),B.m,e,B.e,B.j,0,e,e),B.S,f.bWv(d,t,D.eH,w)],g),B.aj,e,B.e,B.j,0,B.p),B.q,e,B.y,e,B.Xp,e,e,B.ai),D.acp,!0)},
av_(d,e,f,g,h){var w=null,v=A.m(h),u=A.I(B.c.j(0.09),B.r,1),t=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dn,18)],x.V)
return A.p(w,A.bv(A.m(h-1),new A.an(B.W,w,B.aa,B.q,A.a([A.bY(0,A.bX(w,new A.o(w,w,w,w,w,new A.bR(f,1.15,B.x,w,0,A.a([e.j(0.22),e.j(0)],x.O),w,w),B.n),B.be),0,0,0),new A.C(g,d,w)],x.p),w),B.ap),B.f,w,w,new A.o(w,w,u,v,t,D.bNb,B.n),w,w,w,w,w,w,w,w)},
aWh(d,e,f,g){return this.av_(d,e,f,B.ah,g)},
b4m(d,e,f,g,h,i,j){var w=null,v=A.ao(-14,A.V(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=A.m(30),s=A.I(f.j(0.4),B.r,1),r=x.p,q=this.aWh(new A.a5(w,80,new A.an(B.W,w,B.aa,B.q,A.a([v,new A.C(D.bmz,A.v(A.a([A.p(w,A.A(A.a([A.V(e,f,w,w,w,15),B.eb,A.d(h.toUpperCase(),w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.agp,w,w,w),B.b2,A.f4(B.a3,A.d(i,w,1,w,w,w,w,A.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,B.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.eg)],r),B.F,w,B.e,B.j,0,B.p),w)],r),w),w),f,B.kU,22)
if(g==null)return q
return A.aK(!1,A.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
bZy(d,e){var w,v,u,t,s=null,r=A.I(e.j(0.55),B.r,2),q=e.j(0.12),p=x.p,o=A.a([],p)
for(w=0;w<3;++w){v=new A.aV(3,3)
o.push(A.p(s,s,B.f,s,s,new A.o(e,s,s,new A.bs(v,v,v,v),s,s,B.n),s,D.cBq[w],s,D.bq3,s,s,s,5))}r=A.p(s,A.A(o,B.dC,s,B.b9,B.j,0,s,s),B.f,s,s,new A.o(q,s,r,s,s,s,B.a6),s,42,s,s,s,s,s,42)
q=A.D(A.v(A.a([D.ff2,B.bB,A.A(A.a([A.p(s,s,B.f,s,s,new A.o(e,s,s,s,A.a([new A.ac(0,B.G,e,B.J,6)],x.V),s,B.a6),s,7,s,s,s,s,s,7),B.bn,new A.dl(1,B.ch,A.d("Live \xb7 real-time statistics",s,1,B.a2,s,s,s,A.l(s,s,B.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),B.m,s,B.e,B.j,0,s,s)],p),B.F,s,B.e,B.j,0,B.p),1)
o=A.m(16)
v=A.m(16)
u=B.w.j(0.3)
t=A.I(e.j(0.45),B.r,1.2)
return this.av_(A.A(A.a([r,D.eE3,q,B.ab,A.aK(!1,o,!0,A.p(s,A.v(A.a([A.V(B.or,e.j(0.95),s,s,s,21),B.u7,A.d("PLAY",s,s,s,s,s,s,A.l(s,s,B.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,B.I,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),B.m,s,B.b9,B.j,0,B.p),B.f,s,s,new A.o(u,s,t,v,s,s,B.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),B.m,s,B.e,B.j,0,s,s),e,B.a3,B.WX,26)},
b2w(d,e,f,g){var w,v=null,u=B.a.t(d.toLowerCase(),"profit"),t=u?B.cr:B.aW,s=A.p(v,v,B.f,v,v,new A.o(t,v,v,D.aU0,v,v,B.n),v,v,v,B.mP,v,v,v,5),r=x.p
r=A.a([s,B.bd,A.D(A.v(A.a([A.A(A.a([A.V(u?B.tu:B.xK,t,v,v,v,14),B.eb,new A.dl(1,B.ch,A.d(d,v,1,B.a2,v,v,v,A.l(v,v,B.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),B.m,v,B.e,B.j,0,v,v),B.ao,A.f4(B.a3,A.d(e,v,1,v,v,v,v,D.eMY,v,v,v),B.f,B.eg)],r),B.F,v,B.b9,B.j,0,B.p),1)],r)
s=g==null
if(!s)r.push(new A.C(B.aeG,A.V(B.ee,B.c.j(0.35),v,v,v,v),v))
w=this.aWh(new A.a5(v,66,A.A(r,B.m,v,B.e,B.j,0,v,v),v),t,B.ll,20)
if(s)return w
return A.aK(!1,A.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cpV(d,e,f){return this.b2w(d,e,f,null)},
bWv(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.p(m,m,B.f,m,m,new A.o(f,m,m,m,A.a([new A.ac(0,B.G,f,B.J,8)],x.V),m,B.a6),m,9,m,m,m,m,m,9),k=A.d("LIVE ACTIVITY",m,m,m,m,m,m,A.l(m,m,B.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,B.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=B.c.j(0.07),i=A.m(20),h=x.p
i=A.a([A.A(A.a([l,B.a5m,k,B.b2,A.p(m,A.d(""+e.length,m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.f,m,m,new A.o(j,m,m,i,m,m,B.n),m,m,m,m,B.XC,m,m,m)],h),B.m,m,B.e,B.j,0,m,m),B.P],h)
if(e.length===0)i.push(new A.C(B.WN,A.v(A.a([A.V(B.h6,g,m,m,m,30),B.ao,A.d("Nothing yet",m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.bB,A.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),B.L,m,m)],h),B.m,m,B.e,B.j,0,B.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=A.a([],h)
if(w>0)k.push(new A.m5(1,m,m,m,m,B.c.j(0.07),m))
j=e[w]
v=j.d
u=v===B.eK||v===B.jA
t=u?B.jj:D.eH
g=B.c.j(0.5)
v=new A.aV(12,12)
s=A.a([t.j(0.28),t.j(0.08)],l)
r=new A.az(t.j(0.35),1,B.r,-1)
v=A.p(B.A,A.V(u?B.tu:B.ve,t,m,m,m,18),B.f,m,m,new A.o(m,m,new A.bQ(r,r,r,r),new A.bs(v,v,v,v),m,new A.a6(B.ax,B.aC,B.x,s,m,m),B.n),m,38,m,m,m,m,m,38)
s=C.hQR(j)
q=C.h3I(j.y)
s=A.v(A.a([new A.x(s,m,B.mr,m,m,m,m,B.a2,m,1,m,m),B.bB,new A.x(q,m,new A.F(!0,g,m,m,m,m,11,B.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.F,m,B.e,B.j,0,B.p)
q=t.j(0.14)
p=new A.aV(20,20)
o=u?"-":"+"
n=A.dy(j.c)
q=A.p(m,new A.x(o+"$"+n,m,new A.F(!0,t,m,m,m,m,13,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),B.f,m,m,new A.o(q,m,m,new A.bs(p,p,p,p),m,m,B.n),m,m,m,m,B.nD,m,m,m)
j=C.haK(j)
k.push(new A.C(F.KZ,new A.co(B.aU,B.e,B.j,B.m,m,B.p,m,0,A.a([v,B.bd,new A.bG(1,B.bo,s,m),A.v(A.a([q,B.cZ,new A.x(j,m,new A.F(!0,g,m,m,m,m,10,B.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.dC,m,B.e,B.j,0,B.p)],h),m),m))
B.d.v(i,k)}return this.av_(A.v(i,B.m,m,B.e,B.j,0,B.p),f,B.b0,D.bmH,26)}}
C.azB.prototype={
T(){return new C.bfk(null,null)},
cJo(d){return this.z.$1(d)},
cKB(){return this.Q.$0()}}
C.bfk.prototype={
a_(){var w,v=this,u=null
v.a1()
w=A.bj(u,B.pl,u,1,u,v)
w.cF(0)
v.d!==$&&A.aQ()
v.d=w
w=A.bj(u,D.bkl,u,1,u,v)
w.cF(0)
v.e!==$&&A.aQ()
v.e=w
w=A.bj(u,B.uJ,u,1,u,v)
v.f!==$&&A.aQ()
v.f=w
v.b3t()},
gb64(){var w=new A.Q(Date.now(),0,!1)
if(A.ml(w)===6||A.ml(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
b3t(){var w=this,v=w.a,u=v.e||v.f||w.gb64()
if(u){v=w.f
v===$&&A.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){v=w.f
v===$&&A.c()
v.cF(0)}else{if(!u){v=w.f
v===$&&A.c()
v=v.r
v=v!=null&&v.a!=null}else v=!1
if(v){v=w.f
v===$&&A.c()
v.bW(0)}}},
br(d){this.bE(d)
this.b3t()},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
w.bqM()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gb64()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=B.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?B.av:g.x
g=g.r?new C.det(i):h
v=A.m(32)
s=A.m(32)
r=f?D.d4h:D.d4f
q=A.I((f?D.o7:B.b4).j(0.28),B.r,1.4)
p=x.V
o=A.a([new A.ac(0,B.G,(f?B.av:B.ba).j(0.16),B.fJ,28)],p)
n=x.p
m=A.a([],n)
if(f)B.d.v(m,A.a([A.ao(h,i.a9s(D.o7,130),h,h,h,-24,-30,h),A.ao(-36,i.a9s(B.av,140),h,h,-28,h,h,h)],n))
else B.d.v(m,A.a([A.ao(h,i.a9s(B.ba,120),h,h,h,-30,-36,h),A.ao(-40,i.a9s(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bY(0,A.e2(A.bv(l,new A.eq(A.c6(k,new C.deu(i),h),h),B.ap),!0,h),0,0,0))}if(f){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bY(0,A.e2(A.bv(l,new A.eq(A.c6(k,new C.dev(i),h),h),B.ap),!0,h),0,0,0))}l=A.m(999)
k=B.c.j(0.06)
j=A.I(B.c.j(0.16),B.r,1)
m.push(A.ao(h,new A.cW(D.aVS,A.p(h,A.A(A.a([A.p(h,h,B.f,h,h,new A.o(t,h,h,h,A.a([new A.ac(0,B.G,t.j(0.5),B.J,8)],p),h,B.a6),h,8,h,h,h,h,h,8),B.ab,new A.dl(1,B.ch,A.d(u,h,1,B.a2,h,h,h,D.eSf,h,h,h),h)],n),B.m,h,B.e,B.Q,0,h,h),B.f,h,h,new A.o(k,h,j,l,h,h,B.n),h,h,h,h,B.h5,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.h22(B.hf,new C.dew(),l)
m.push(C.h21(new C.dex(i,f,t,e,w),new A.Q(Date.now(),0,!1),j,l))
return A.aK(!1,v,!0,A.df(h,new A.an(B.W,h,B.aa,B.f,m,h),h,h,B.bb,new A.o(h,h,q,s,o,new A.a6(B.ax,B.aC,B.x,r,h,h),B.n),B.Ad,h,392,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
a9s(d,e){var w=null
return A.e2(A.p(w,w,B.f,w,w,new A.o(w,w,w,w,w,new A.bR(B.A,0.5,B.x,w,0,A.a([d.j(0.22),d.j(0)],x.O),w,w),B.a6),w,e,w,w,w,w,w,e),!0,w)}}
C.b96.prototype={
aWk(d,e,f,g){var w=new A.aP($.W().r,B.aq,null,null,A.a([],x.g)),v=e.a,u=e.b,t=u-f
w.E(new A.b5(v,t))
w.E(new A.cR(v,u,v+f,u))
w.E(new A.cR(v,u,v,u+f))
w.E(new A.cR(v,u,v-f,u))
w.E(new A.cR(v,u,v,t))
w.E(new A.bE())
d.aN(w,g)},
a6(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=a8/2,b0=b3.b,b1=b0/2
for(w=a7.b,v=w*6.283185307179586,u=0;u<16;++u){t=B.k.F(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=B.k.F(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+B.o.F(u,3))+u)+1)/2
$.W()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.1+r*0.5).gp(0)
a7.aWk(b2,new A.u(t*a8,s*b0),2+r*2.2,q)}for(a8=b2.a,b0=w*2,p=a7.e,o=0;o<3;++o){n=B.k.F(b0+o/3,1)
$.W()
m=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
m.b=B.af
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
$.W()
d=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
d.r=b0.j(f).gp(0)
l=d.H()
a8.drawCircle(0,0,6.5,l)
l.delete()
h=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
h.b=B.af
h.c=1.2
h.r=p.j(f).gp(0)
l=h.H()
a8.drawCircle(0,0,6.5,l)
l.delete()
if(e>0.6&&f>0.35){h=$.hgh()
g=h.b
a0=g.c
g=g.a.c
h.a6(b2,new A.u(-a0/2,-g.gbc(g)/2))}a8.restore()
break
case 1:$.W()
a0=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
a0.r=p.j(f*0.95).gp(0)
a7.aWk(b2,new A.u(h,g),3+f*3,a0)
break
case 2:$.W()
a0=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
a0.r=B.c.j(f*0.8).gp(0)
l=a0.H()
a8.drawCircle(h,g,1.6+f*1.8,l)
l.delete()
break
default:a0=Math.cos(j)
a1=Math.sin(j)
a2=7+f*7
$.W()
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
$.W()
g=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
g.r=p.j(o*0.85).gp(0)
l=g.H()
a8.drawCircle(a9+w*144,b1+h*144,1.4+o*2.6,l)
l.delete()}w=Math.cos(a5)
h=Math.sin(a5)
$.W()
g=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
g.r=b0.j(0.28).gp(0)
g.z=N.mk
l=g.H()
a8.drawCircle(a9+w*144,b1+h*144,7,l)
l.delete()}},
ar(d){return d.b!==this.b}}
C.b95.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.W(),a4=A.L()
a4.r=this.d.j(0.075).gp(0)
for(w=a5.a,v=this.b,u=v*6.283185307179586,t=x.g,a3=a3.r,s=0;s<14;++s){r=u+s*6.283185307179586/14
q=A.a([],t)
p=new A.aP(a3,B.aq,e,e,q)
o=r-0.14361566416410484
q.push(new A.b5(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new A.ap(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
o=r+0.14361566416410484
q.push(new A.ap(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
q.push(new A.ap(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new A.bE())
n=a4.H()
q=p.gbI().a.snapshot()
w.drawPath((p.e=new A.cE(q)).a,n)
n.delete()}a0=v*2
a2=B.k.F(a0,1)
J.bA(w.save())
w.translate(a2*(d+240)-120,0)
a5.j_(0,0.35)
a2=-a1
a3=A.L()
a3.sau(new A.a6(B.a3,B.a7,B.x,A.a([B.c.j(0),B.c.j(0.07),B.c.j(0)],x.O),e,e).aw(0,D.exY))
a5.aX(new A.a9(-18,a2,18,a2+a1*3),a3)
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
a3=A.by(D.eyu,B.Rh)
u=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
u.r=D.avB[B.o.F(s,6)].j(k*0.9).gp(0)
n=u.H()
w.drawRRect(A.ew(a3),n)
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
f=D.avB[B.o.F(s+i,6)].j(k)
u=j[i]
t=u.a
u=u.b
$.W()
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
$.W()
a2=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
a2.r=B.c.j(k).gp(0)
n=a2.H()
w.drawCircle(a1.a,a1.b,5*d,n)
n.delete()}},
ar(d){return d.b!==this.b}}
C.b94.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a6.a/2,a1=a6.b/2,a2=new A.u(a0,a1),a3=a0-4,a4=a3-22
$.W()
w=A.L()
w.b=B.af
w.c=14
v=e.d
w.r=(v?e.r:B.b4).j(0.22).gp(0)
a5.ag(a2,a3-7,w)
w=A.L()
w.b=B.af
w.c=1.7
w.r=(v?e.f:B.c).j(0.28).gp(0)
a5.ag(a2,a3-1,w)
w=A.L()
w.b=B.af
w.c=1.6
w.r=B.c.j(0.16).gp(0)
a5.ag(a2,a4+8,w)
u=A.L()
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
w=$.W().r
t=x.g
p=new A.aP(w,B.aq,d,d,A.a([],t))
p.E(new A.kC(A.bU(a2,a4)))
a5.tF(0,p)
p=A.bU(a2,a4)
o=A.L()
o.sau(D.e4J.aw(0,A.bU(a2,a4)))
a5.aX(p,o)
k=B.k.D(e.b,0,1)
if(k>0.004){a1+=a4
j=a1-a4*2*k
i=v?5.2:1.8
t=A.a([],t)
h=new A.aP(w,B.aq,d,d,t)
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
h.E(new A.bE())
$.W()
a0=A.L()
a1=x.O
w=e.e
a1=v?A.a([e.f.j(0.55),w.j(0.78),e.r.j(0.92)],a1):A.a([w.j(0.22),D.eH.j(0.34),B.cY.j(0.62)],a1)
a0.sau(new A.a6(B.b0,B.b5,B.x,a1,d,d).aw(0,A.bU(a2,a4)))
a5.aN(h,a0)
a0=A.L()
a0.b=B.af
a0.c=2
a0.r=B.c.j(v?0.28:0.14).gp(0)
a5.aN(h,a0)}s.restore()},
ar(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.azD.prototype={
T(){var w=$.aw()
return new C.azE(new A.ar(B.as,w),new A.ar(B.as,w))},
bd3(d,e){return this.w.$2$cloudRequest(d,e)}}
C.azE.prototype={
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
lM(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
crG(d){this.a.bd3(d,!0)
this.lM("Deposit submitted. Admin will review your payment proof.")
this.m(new C.deU())},
cqr(){var w,v,u=this,t=A.d3(u.d.a.a)
if(t==null||t<=0){u.lM("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
A.ht(w,new C.ao2(v.d,t,u.gcrF(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cxR(){var w,v,u,t,s=this,r=s.d,q=A.d3(r.a.a)
if(q==null||q<=0){s.lM("Enter an amount to withdraw.")
return}if(q<10){s.lM("Minimum withdrawal is $"+A.dy(10)+".")
return}w=s.a.d.d
if(q>w){s.lM("Insufficient balance. You have $"+A.dy(w)+".")
return}w=s.e
v=C.hc7(w.a.a)
if(v.length===0){s.lM("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.bd3(new A.d1("wd_"+1000*Date.now(),s.a.d.a,q,B.eK,B.kj,"Withdrawal to $"+v+" \u2014 Fee: $"+A.dy(u)+" \u2014 You receive: $"+A.dy(q-u),null,null,B.ds,new A.Q(Date.now(),0,!1)),!0)
s.lM("Withdrawal submitted \u2014 waiting for admin approval.")
r.bM(0,B.c3)
w.bM(0,B.c3)
s.m(new C.deV())},
cuU(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,A.K)(w),++s){r=w[s]
if(r.x!==B.ck||!this.aT0(r)||A.fRF(r))continue
q=r.d
p=q===B.eK||q===B.jA||q===B.eo
q=r.c
if(p)t+=q
else u+=q}return new A.bmd(u,t)},
B(d){var w,v,u,t=this,s=null,r=t.cuU(),q=t.a.r,p=new A.a1(q,new C.deW(),A.T(q).k("a1<1>")).gM(0)
q=t.a
w=q.c
q=q.x
v=A.a([D.eH.j(0.24),B.M.j(0.72)],x.O)
u=A.I(D.eH.j(0.38),B.r,1)
q=A.bLA(!1,w,"WALLET",A.hn(A.aK(!1,s,!0,A.p(B.A,A.V(U.ajw,D.eH,s,s,s,18),B.f,s,s,new A.o(s,s,u,s,s,new A.a6(B.ax,B.aC,B.x,v,s,s),B.a6),s,40,s,s,s,s,s,40),B.cL,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),s,"Back up wallet",s,s))
v=t.byb(r.a,r.b,p)
u=x.p
w=A.A(A.a([t.ao4(B.ve,"Deposit",0),t.ao4(B.tu,"Withdraw",1),t.ao4(B.h7,"History",2)],u),B.m,s,B.pF,B.j,0,s,s)
return A.ei(A.bq(!1,A.cd(A.v(A.a([q,B.bu,v,B.d5,w,B.d5,A.pZ(t.f===2?t.bTE():t.bZ1(),B.i6,A.rt(),B.bb,B.bb,A.a0p())],u),B.aj,s,B.e,B.j,0,B.p),B.q,s,B.y,s,D.boz,s,s,B.ai),!0,!1,B.ah,!0,!0),B.zM,!0)},
byb(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.a.i(i.a.e)
if(B.a.t(g,"@")){w=B.a.cG(g,"@")
v=B.a.ap(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+B.a.b_(g,w)}else v=g
w=A.m(26)
u=A.ao(h,i.ax8(220,0.1),h,h,h,-60,-70,h)
t=A.ao(-90,i.ax8(200,0.07),h,h,h,30,h,h)
s=A.ao(-60,i.ax8(150,0.05),h,h,-40,h,h,h)
r=A.m(26)
r=A.bY(0,A.bX(h,new A.o(h,h,A.I(B.c.j(0.18),B.r,1),r,h,h,B.n),B.be),0,0,0)
q=A.m(6)
p=x.p
q=A.A(A.a([A.p(h,A.b3(h,h,h,new C.b8x(h),B.at),B.f,h,h,new A.o(h,h,h,q,h,D.bPg,B.n),h,28,h,h,h,h,h,38),B.b2,D.fn3],p),B.m,h,B.e,B.j,0,h,h)
o=A.d("Available balance",h,h,h,h,h,h,A.l(h,h,B.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,B.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=A.f4(B.a3,C.aoM(new C.deG(i),D.eXr,i.a.d.a),B.f,B.eg)
m=A.a([A.D(i.aLW(B.v4,"In",d),1),A.D(i.aLW(B.xs,"Out",e),1)],p)
if(f>0){l=B.cR.j(0.22)
k=A.m(99)
j=A.I(B.iy.j(0.6),B.r,1)
m.push(A.p(h,A.d(""+f+" pending",h,h,h,h,h,h,D.eTb,h,h,h),B.f,h,h,new A.o(l,h,j,k,h,h,B.n),h,h,h,h,B.nD,h,h,h))}return new A.fF(1.62,A.bv(w,new A.an(B.W,h,B.aa,B.q,A.a([D.e3Z,u,t,s,r,new A.C(A4.qC,A.v(A.a([q,B.b2,o,B.bB,n,B.b2,A.A(m,B.m,h,B.e,B.j,0,h,h),B.ao,A.d(v,h,1,B.a2,h,h,h,A.l(h,h,B.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,B.a4,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),B.F,h,B.e,B.j,0,B.p),h)],p),h),B.ap),h)},
ax8(d,e){var w=null
return A.p(w,w,B.f,w,w,new A.o(w,w,A.I(B.c.j(e),B.r,22),w,w,w,B.a6),w,d,w,w,w,w,w,d)},
aLW(d,e,f){var w=null,v=B.c.j(0.16)
return A.A(A.a([A.p(w,A.V(d,B.c,w,w,w,13),B.f,w,w,new A.o(v,w,w,w,w,w,B.a6),w,22,w,w,w,w,w,22),B.bn,new A.dl(1,B.ch,A.f4(B.a3,A.d(e+"  $"+A.dy(f),w,w,w,w,w,w,B.nV,w,w,w),B.f,B.eg),w)],x.p),B.m,w,B.e,B.j,0,w,w)},
ao4(d,e,f){var w=null,v=this.f===f,u=v?D.bQz:new A.a6(B.a3,B.a7,B.x,A.a([B.c.j(0.08),B.c.j(0.03)],x.O),w,w),t=A.I(v?B.c.j(0.6):D.eH.j(0.25),B.r,1),s=v?A.a([new A.ac(0,B.G,B.av.j(0.45),B.J,18)],x.V):w
u=A.df(w,A.V(d,v?D.aad:D.eH,w,w,w,26),w,w,B.cp,new A.o(w,w,t,w,s,u,B.a6),B.En,w,62,w,w,w,w,62)
return A.aE(B.c5,new A.a5(92,w,A.v(A.a([u,D.eEY,A.d(e,w,w,w,w,w,w,A.l(w,w,v?B.c:B.aQ,w,w,w,w,w,w,w,w,12.5,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.deF(this,f),w,w,w,w,w,w,!1,B.a9)},
bZ1(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=A.d3(a1.a.a)
if(a2==null)a2=0
w=a0?D.eH:B.cx
v=a2>0
u=new C.deR(e,w)
t=new C.deQ()
s=e.f
r=A.m(26)
q=x.O
p=A.a([w.j(0.1),B.t_,B.t_],q)
o=A.I(w.j(0.22),B.r,1)
n=x.V
m=A.a([new A.ac(0,B.G,B.w.j(0.35),B.eR,22)],n)
l=w.j(0.15)
l=A.p(d,A.V(a0?B.ve:B.tu,w,d,d,d,18),B.f,d,d,new A.o(l,d,d,d,d,d,B.a6),d,34,d,d,d,d,d,34)
k=A.D(A.d(a0?"Add money":"Take money out",d,d,d,d,d,d,B.fW,d,d,d),1)
j=B.c.j(0.06)
i=A.m(99)
h=x.p
i=A.A(A.a([l,B.aw,k,A.p(d,A.A(A.a([A.V(B.hW,w,d,d,d,14),A.d("Cash App",d,d,d,d,d,d,A.l(d,d,B.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,B.I,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),B.m,d,B.e,B.Q,0,d,d),B.f,d,d,new A.o(j,d,d,i,d,d,B.n),d,d,d,d,B.kD,d,d,d)],h),B.m,d,B.e,B.j,0,d,d)
l=A.d("$",d,d,d,d,d,d,A.l(d,d,v?w:B.bZ,d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=A.a([new A.tX(A.af("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=A.A(A.a([new A.C(B.i7,l,d),B.d9,A.aUj(new A.cW(D.aWa,A.aL(d,B.T,!1,d,!0,B.q,d,A.aM(),a1,w,d,d,d,d,2,A.bo(d,B.ev,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,A.l(d,d,B.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.ag,d,d,k,d,d,B.dR,d,d,d,1,d,d,!1,"\u2022",d,new C.deP(e),d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,D.f_5,!0,B.L,d,B.am,d,d,d,d),d),d)],h),B.F,d,B.b9,B.j,0,d,d)
a1=v?120:60
a1=A.av(A.df(d,d,d,d,B.bb,new A.o(d,d,d,A.m(99),d,new A.a6(B.a3,B.a7,B.x,A.a([w.j(0),w,w.j(0)],q),d,d),B.n),B.a1,d,3,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+A.dy(10)+" \xb7 admin sends it to your Cash App."
q=A.d(q,d,d,d,d,d,d,A.l(d,d,B.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,B.a4,d,1.35,!0,d,d,d,d,d,d,d,d),B.L,d,d)
l=A.a([],h)
j=a0?D.bUh:D.c7T
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=A.a([i,B.bu,k,B.ao,a1,B.P,q,B.az,A.A(l,B.m,d,B.e,B.j,0,d,d)],h)
if(!a0){q=B.c.j(0.04)
l=A.V(B.hW,w,d,d,d,d)
k=A.l(d,d,B.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,B.O,d,d,!0,d,d,d,d,d,d,d,d)
l=A.a([B.az,A.aL(d,B.T,!1,d,!0,B.q,d,A.aM(),e.e,d,d,d,d,d,2,A.bo(d,d,d,d,d,d,d,d,!0,new A.b4(4,A.m(16),new A.az(B.c.j(0.08),1,B.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new A.b4(4,A.m(16),new A.az(w,1,B.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.ag,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,B.n9,!0,B.a5,d,B.am,d,d,d,d)],h)
if(v){q=B.c.j(0.04)
k=A.m(16)
B.d.v(l,A.a([B.ac,A.p(d,A.v(A.a([t.$2("Amount","$"+A.dy(a2)),t.$3$color("Fee (15%)","\u2212 $"+A.dy(a2*0.15),B.f9),A.iw(B.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+A.dy(a2*0.85),!0,D.eH)],h),B.m,d,B.e,B.j,0,B.p),B.f,d,d,new A.o(q,d,d,k,d,d,B.n),d,d,d,d,B.j5,d,d,d)],h))}B.d.v(a1,l)}a1.push(B.aO)
q=A.m(18)
l=a0?B.PA:P.aql
n=A.a([new A.ac(0,B.G,(a0?B.aZ:B.dT).j(0.45),B.dn,18)],n)
k=a0?e.gcqq():e.gcxQ()
j=A.V(a0?B.M5:B.l7,d,d,d,d,20)
if(a0)i=v?"Deposit $"+A.dy(a2):"Deposit funds"
else i=v?"Withdraw $"+A.dy(a2):"Request withdrawal"
a1.push(new A.a5(d,54,A.bX(A.ll(j,A.d(i,d,d,d,d,d,d,B.oQ,d,d,d),k,A.fl(d,d,B.K,d,d,d,d,d,d,B.c,d,d,d,B.K,new A.b7(A.m(18),B.Y),d,d,d,d,d)),new A.o(d,d,d,q,n,new A.a6(B.a3,B.a7,B.x,l,d,d),B.n),B.be),d))
return A.p(d,A.v(a1,B.aj,d,B.e,B.j,0,B.p),B.f,d,d,new A.o(d,d,o,r,m,new A.a6(B.b0,B.b5,B.x,p,B.P5,d),B.n),d,d,new A.cz("form"+s,x.W),d,B.x5,d,d,d)},
bTE(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=A.T(a2).k("a1<1>"),a4=A.B(new A.a1(a2,new C.deJ(a0),a3),a3.k("G.E"))
B.d.b1(a4,new C.deK())
w=B.a.i(a0.a.e.toLowerCase())
a2=A.U(x.N,x.o)
a3=$.fmR
a3=a3==null?a1:a3.$0()
a3=J.aW(a3==null?B.i_:a3)
while(a3.C()){v=a3.gU(a3)
u=v.a
if(u.length!==0&&B.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,A.K)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("bc<2>")
a2=A.B(new A.bc(a2,a3),a3.k("G.E"))
r=C.hRp(a2,A.Kd(a0.a.e,new C.deL(a0)))
a2=A.m(24)
a3=A.I(B.c.j(0.07),B.r,1)
v=A.m(99)
u=A.m(99)
q=x.p
u=A.a([A.A(A.a([D.bt9,A.aK(!1,v,!0,A.p(a1,D.eze,B.f,a1,a1,new A.o(a1,a1,A.I(D.eH.j(0.4),B.r,1),u,a1,a1,B.n),a1,a1,a1,a1,B.m6,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.deM(a0),a1,a1,a1,a1,a1,a1,a1)],q),B.m,a1,B.e,B.j,0,a1,a1),B.S],q)
if(a4.length===0)u.push(new A.C(D.bli,A.v(A.a([A.V(B.EZ,B.c.j(0.25),a1,a1,a1,40),B.S,D.fjP],q),B.m,a1,B.e,B.j,0,B.p),a1))
else{v=A.a([],q)
for(p=A.da(a4,0,A.dJ(a0.r,"count",x.S),A.T(a4).c),o=p.$ti,p=new A.bW(p,p.gM(0),o.k("bW<aj.E>")),o=o.k("aj.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===B.eK||k===B.jA||k===B.eo
if(l===B.ck)i=j?B.cq:D.eH
else i=l===B.ds?B.iy:B.fU
h=j?"-":"+"
l=B.c.j(0.06)
k=i.j(0.14)
g=new A.az(i.j(0.4),1,B.r,-1)
k=A.p(a1,A.V(j?B.tu:B.ve,i,a1,a1,a1,19),B.f,a1,a1,new A.o(k,a1,new A.bQ(g,g,g,g),a1,a1,a1,B.a6),a1,42,a1,a1,a1,a1,a1,42)
f=a0.bNz(n)
e=C.h3I(n.y)
d=B.c.j(0.5)
f=A.a([new A.x(f,a1,B.jY,a1,a1,a1,a1,a1,a1,a1,a1,a1),B.bB,new A.x(e,a1,new A.F(!0,d,a1,a1,a1,a1,11,B.a4,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1)],q)
e=n.f
if(B.a.i(e==null?"":e).length!==0){e.toString
d=B.c.j(0.4)
f.push(new A.x(e,a1,new A.F(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,B.a2,a1,1,a1,a1))}if(m!=null&&n.x!==B.jZ)f.push(new A.C(E.aeP,new A.EQ(B.bE,5,4,B.bx,A.a([a0.aKS("Before",m.b),a0.aKS("After",m.a)],q),a1),a1))
m=A.v(f,B.F,a1,B.e,B.j,0,B.p)
f=n.c
f=f===0?"\u2014":h+"$"+A.dy(f)
e=i.j(0.14)
d=new A.aV(99,99)
n=C.haK(n)
v.push(A.p(a1,new A.co(B.aU,B.e,B.j,B.m,a1,B.p,a1,0,A.a([k,B.bd,new A.bG(1,B.bo,m,a1),B.ab,A.v(A.a([new A.x(f,a1,new A.F(!0,i,a1,a1,a1,a1,15,B.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.au,A.p(a1,new A.x(n,a1,new A.F(!0,i,a1,a1,a1,a1,9.5,B.I,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.f,a1,a1,new A.o(e,a1,a1,new A.bs(d,d,d,d),a1,a1,B.n),a1,a1,a1,a1,B.Ax,a1,a1,a1)],q),B.dC,a1,B.e,B.j,0,B.p)],q),a1),B.f,a1,a1,new A.o(a1,a1,new A.bQ(B.Y,B.Y,new A.az(l,1,B.r,-1),B.Y),a1,a1,a1,B.n),a1,a1,a1,a1,B.uM,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(A.hb(D.bH8,A.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,B.cc,a1,a1,a1),new C.deN(a0),A.fu(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.eH,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
B.d.v(u,v)}return A.p(a1,A.v(u,B.aj,a1,B.e,B.j,0,B.p),B.f,a1,a1,new A.o(B.t_,a1,a3,a2,a1,a1,B.n),a1,a1,D.fwo,a1,D.bnt,a1,a1,a1)},
aKS(d,e){var w=null,v=B.c.j(0.05),u=A.m(7),t=A.I(B.c.j(0.1),B.r,1),s=A.dn(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=A.dy(e)
return A.p(w,A.WE(A.dn(A.a([s,A.dn(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.eXB,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.mS,w,w,w)},
aT0(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(B.a.t(w,"clock-in session started"))return!1
v=d.d
if(v===B.eo)return d.c>0
if(A.rx(d))return!1
if(v===B.fo||v===B.eK)return!0
if(v===B.o_||v===B.jA)return!0
if(v===B.k_)return!0
if(v===B.fz)return B.a.t(w,"clock-in")||d.c>0
return!1},
bNz(d){var w,v=d.f
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
C.b8x.prototype={
a6(d,e){var w,v,u,t
$.W()
w=A.L()
w.r=D.b5y.j(0.55).gp(0)
w.c=1
v=e.a
u=v*0.35
t=e.b
d.bA(new A.u(u,0),new A.u(u,t),w)
u=v*0.65
d.bA(new A.u(u,0),new A.u(u,t),w)
t*=0.5
d.bA(new A.u(0,t),new A.u(v,t),w)},
ar(d){return!1}}
C.bsT.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null
for(w=a4.b,v=this.b,u=v*6.283185307179586,t=a4.a,s=0+t,r=x.O,q=a3.a,p=0;p<3;++p){o=w*(0.2+0.25*p)+Math.sin(u+p*2)*14-40
n=new A.a9(0,o,s,o+80)
m=[B.ba,B.fY,B.bs][p]
$.W()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.sau(new A.a6(B.b0,B.b5,B.x,A.a([m.j(0),m.j(0.1),m.j(0)],r),a2,a2).aw(0,n))
l=o.H()
q.drawRect(A.c5(n),l)
l.delete()}for(k=0;k<46;++k){s=k*12.9898
j=Math.sin(s+78.233)*43758.5453
j=(j-Math.floor(j))*t
i=Math.sin(s+156.466)*43758.5453
h=(i-Math.floor(i))*w
g=0.25+0.75*(0.5+0.5*Math.sin(u*(1+B.o.F(k,3))+k))
i=Math.sin(s+234.699)*43758.5453
s=Math.floor(i)
$.W()
r=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.55*g).gp(0)
l=r.H()
q.drawCircle(j,h,0.7+(i-s)*1.5,l)
l.delete()
if(B.o.F(k,9)===0){f=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
f.r=B.od.j(0.35*g).gp(0)
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
$.W()
a0=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
a0.r=B.c.j(0.7*(1-p)).gp(0)
a0.c=1.6
a0.d=B.bO
l=a0.H()
q.drawLine.apply(q,[e+r,d+o,e,d,l])
l.delete()}for(u=t*0.62,w*=0.36,k=0;k<4;++k){f=B.k.F(v+k*0.25,1)
t=B.od.j(0.5*Math.sin(f*3.141592653589793))
a1=new A.ku(new A.es("z",a2,a2,B.cQ,a2,a2,a2,a2,a2,a2,new A.F(!0,t,a2,a2,a2,a2,12+f*14,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),B.a5,B.ci,new A.jC(1),a2,a2,a2,a2,B.cg,a2)
a1.eR()
a1.a6(a3,new A.u(u+Math.sin(f*6.283185307179586+k)*12+k*8,w-f*90))}},
ar(d){return d.b!==this.b}}
C.aJ5.prototype={
aQ(){this.aY()
this.aW()
this.dF()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdD())
w.b2$=null
w.a2()}}
C.buP.prototype={}
C.aYb.prototype={}
C.Zb.prototype={
T(){return new C.aC1(new A.ar(B.as,$.aw()))},
cLL(d,e){return this.d.$2(d,e)}}
C.aC1.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
aWo(){var w=this,v=B.a.i(w.d.a.a),u=A.af("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.m(new C.e_k(w))
return}u=w.c
u.toString
A.a4(u,!1).N(null)
w.a.cLL(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=A.aI(a0,B.eC,e).w
e=A.aI(a0,B.e6,e).w
w=A.av(A.p(f,f,B.f,f,f,new A.o(B.b8,f,f,A.m(2),f,f,B.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=A.A(A.a([A.p(f,D.bGy,B.f,f,f,new A.o(f,f,f,f,A.a([new A.ac(0,B.G,B.fe.j(0.5),B.J,18)],v),D.am4,B.a6),f,52,f,f,f,f,f,52),B.eA,A.D(A.v(A.a([D.f8_,B.bB,A.d(g.a.c,f,1,B.a2,f,f,f,B.oO,f,f,f)],u),B.F,f,B.e,B.j,0,B.p),1),A.aH(f,f,f,f,D.bHm,f,f,f,new C.e_n(a0),f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,f,f)
s=g.b2f(B.eP,"You",B.cx)
r=B.aM.j(0.15)
q=A.m(99)
q=A.A(A.a([s,new A.C(B.lw,A.p(f,D.fbR,B.f,f,f,new A.o(r,f,A.I(B.aM.j(0.6),B.r,1),q,f,f,B.n),f,f,f,f,B.fF,f,f,f),f),g.b2f(B.vb,"Your friend",B.bY)],u),B.m,f,B.e,B.j,0,f,f)
r=B.c.j(0.06)
s=A.m(16)
p=B.c.j(0.12)
o=A.m(16)
n=g.f
if(n.length===0)n=f
o=A.aL(f,B.T,!0,f,!0,B.q,f,A.aM(),g.d,f,f,f,f,f,2,A.bo(f,f,f,f,f,f,f,f,!0,new A.b4(4,s,new A.az(p,1,B.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new A.b4(4,o,D.aUY),f,f,f,f,f,f,f,f,N.CE,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.bJM,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,f,!1,f,B.ag,f,f,f,f,f,B.lN,f,f,f,1,f,f,!1,"\u2022",f,new C.e_o(g),f,new C.e_p(g),f,!1,f,f,!1,f,!0,f,B.a8,f,f,f,f,f,f,f,f,f,f,f,B.iC,!0,B.a5,f,B.am,f,f,f,f)
r=A.a([],u)
for(m=0;m<4;++m){l=D.c2X[m]
s=new A.aV(14,14)
p=g.e===l
n=p?D.am3:f
p=p?f:B.c.j(0.06)
k=new A.az(g.e===l?B.ay:B.bF,1,B.r,-1)
j=""+l
i=l===1?"game":"best of "+j
h=B.c.j(0.7)
s=A.a([new A.bG(1,B.bo,A.aE(f,A.df(f,A.v(A.a([new A.x(j,f,B.dI,f,f,f,f,f,f,f,f,f),new A.x(i,f,new A.F(!0,h,f,f,f,f,10,B.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,B.p),f,f,B.bb,new A.o(p,f,new A.bQ(k,k,k,k),new A.bs(s,s,s,s),f,n,B.n),B.eD,f,f,f,B.f3,f,f,f),B.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.e_q(g,l),f,f,f,f,f,f,!1,B.a9),f)],u)
if(l!==7)s.push(B.ab)
B.d.v(r,s)}s=A.A(r,B.m,f,B.e,B.j,0,f,f)
r=A.A(A.a([A.V(B.l5,B.c.j(0.5),f,f,f,15),B.bn,A.D(A.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,A.l(f,f,B.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),B.m,f,B.e,B.j,0,f,f)
p=A.m(18)
v=A.a([new A.ac(0,B.G,B.bA.j(0.4),B.cw,18)],v)
n=g.e
j=n===1?"":"s"
return new A.C(new A.N(0,0,0,d.f.d+e.r.d),A.p(f,A.v(A.a([w,B.aO,t,B.bu,q,B.bu,D.ffy,B.ao,o,B.aO,D.fjD,B.P,s,B.az,r,B.aO,new A.a5(f,54,A.bX(A.hb(D.akm,A.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,B.fW,f,f,f),g.gc2S(),f),new A.o(f,f,f,p,v,D.bPq,B.n),B.be),f)],u),B.aj,f,B.e,B.Q,0,B.p),B.f,f,f,D.aWY,f,f,f,f,D.boM,f,f,f),f)},
b2f(d,e,f){var w=null,v=f.j(0.1),u=A.m(16),t=A.I(f.j(0.45),B.r,1)
return A.D(A.p(w,A.v(A.a([A.V(d,f,w,w,w,24),B.au,A.d(e,w,w,w,w,w,w,B.a6u,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.f3,w,w,w),1)}}
C.oO.prototype={}
C.bnU.prototype={
a6(d,e){var w,v,u,t,s,r=null,q=e.a/2,p=new A.u(q,e.b/2),o=q-4
for(q=d.a,w=0;w<37;++w){$.W()
v=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
if(w===0)u=B.bk
else u=(w&1)===0?B.bL:B.M
v.r=u.gp(0)
u=A.bU(p,o)
t=v.H()
q.drawArc.apply(q,[A.c5(u),(w*2*3.141592653589793/37-1.5707963267948966)*57.29577951308232,9.72972972972973,!0,t])
t.delete()}$.W()
q=A.L()
q.r=B.fl.gp(0)
q.b=B.af
q.c=8
d.ag(p,o,q)
q=A.L()
q.r=B.aM.gp(0)
d.ag(p,o*0.22,q)
q=this.b
if(q!=null){s=A.ih(r,r,r,r,A.dn(r,r,r,r,r,r,r,r,r,B.aNO,A.t(q)),B.a5,B.ci,r,B.eq,B.cg)
s.eR()
q=s.b
u=q.c
q=q.a.c
s.a6(d,p.aB(0,new A.u(u/2,q.gbc(q)/2)))}},
ar(d){return d.b!=this.b}}
C.DV.prototype={
a4(){return"NgmyProMoveResult."+this.b}}
C.aph.prototype={
gjK(){var w=this.d
w=w==null?null:w.a
return w!==!1},
bkr(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.fJZ("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.bUr()
w=s.gjK()
v=s.d
s.c=w?"You ("+v.b+") vs NGMY \u2014 capture all opponent discs":v.b+" vs "+v.c+" \u2014 capture all discs"
break
case"tic_tac_go":s.b=1
s.at=A.c1(9,"",!1,x.N)
s.ax=!0
if(s.gjK())w="You are X vs NGMY (O) \u2014 get 3 in a row"
else{w=s.d
w=w.b+" (X) vs "+w.c+" (O)"}s.c=w
break
case"blackjack_vegas":s.b=1
w=x.t
s.ay=A.a([1+e.aD(10),1+e.aD(10)],w)
s.ch=A.a([1+e.aD(10),1+e.aD(10)],w)
s.CW=!1
s.c="Beat the dealer \u2014 don't bust over 21"
break
case"roulette_euro":s.b=1
s.cx=null
s.c="Pick a number \u2014 spin the wheel"
break
case"slots_jackpot":s.b=1
s.db=A.a([e.aD(6),e.aD(6),e.aD(6)],x.t)
s.c="Match 3 symbols for jackpot"
break
case"billiards_snooker":s.b=1
s.dx=e.aj()*3.141592653589793*2
s.c=s.gjK()?"Aim and shoot \u2014 beat NGMY on the snooker table":"Aim and shoot \u2014 pocket balls"
break
case"connect_four_pro":s.b=1
u=J.e0(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=A.c1(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gjK())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.aUT(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aBc.h(0,d)
s.c=w==null?"Play to earn":w}},
b6Q(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gjK()
if(o)return
o=x.N
s.x=A.a0(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b6(w,new C.cal(),o)
v=A.B(v,v.$ti.k("aj.E"))
s.at=v
if(v.length<9){v=A.B(v,o)
B.d.v(v,A.c1(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=B.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===B.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cvq(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.aoA(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b6(t,new C.cam(),x.L)
o=A.B(o,o.$ti.k("aj.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)B.d.J(v,A.c1(7,0,!1,o))}if(A.iD(e.h(0,q)))o=A.ec(e.h(0,q))
else{o=A.c7(A.t(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bAo(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.aoA(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b6(t,new C.can(),x.L)
o=A.B(o,o.$ti.k("aj.E"))
s.y=o}if(A.iD(e.h(0,p)))o=A.ec(e.h(0,p))
else{o=A.c7(A.t(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bBD(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.aoA(e,f)
break}},
cFw(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=A.a0(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",A.bl(w.at,!0,q))
o.n(0,"turnEmail",w.azc())
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
p=A.T(q).k("J<1,ak<H>>")
q=A.B(new A.J(q,new C.cap(),p),p.k("aj.E"))
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
p=A.T(q).k("J<1,ak<H>>")
q=A.B(new A.J(q,new C.caq(),p),p.k("aj.E"))
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
default:q=A.dV(o,q,p)
q.n(0,v,w.e)
q.n(0,s,w.w)
return q}},
azc(){var w,v,u,t=this
if(t.gjK()){if(t.ax){w=t.d
w=w==null?null:w.d
if(w==null)w=""}else w="ngmy@system"
return w}w=t.x.h(0,"playerXEmail")
if(w==null){w=t.d
w=w==null?null:w.d}v=B.a.i(J.k(w==null?"":w).toLowerCase())
w=t.x.h(0,"playerOEmail")
if(w==null){w=t.d
w=w==null?null:w.e}u=B.a.i(J.k(w==null?"":w).toLowerCase())
return t.ax?v:u},
aoA(d,e){var w,v=this,u=B.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
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
cvq(d,e){var w,v,u,t,s,r="playerXEmail"
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
bAo(d,e){var w,v,u,t,s
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
bBD(d,e){var w,v,u,t,s,r,q
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
Su(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gjK())return s
w=B.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return B.a.i(J.k(s==null?u.azc():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
bUr(){var w,v,u=this,t=J.e0(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=A.ip(8,new C.cai(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
aUT(d){var w=20+d.aD(80),v=w+10+d.aD(50),u=4+d.aD(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bM(0,B.c3)},
cPb(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gjK())w=1
else{v=r.d
v=v==null?null:v.d
w=r.Su(q,v==null?"":v)?r.z:-1}if(!r.gjK()){v=r.d
v=v==null?null:v.d
v=!r.Su(q,v==null?"":v)}else v=!1
if(v)return!1
u=r.gjK()?r.z:w
if(!r.gjK()&&u!==r.z)return!1
t=J.q(r.y[d],e)
v=r.Q
if(v==null){if(t===r.z)v=!r.gjK()||t===1
else v=!1
if(v){r.Q=d
r.as=e}return!1}s=r.as
s.toString
if(d===v&&e===s){r.as=r.Q=null
return!1}if(Math.abs(d-v)===1&&Math.abs(e-s)===1&&t===0&&B.o.F(d+e,2)===1){J.aG(r.y[d],e,r.z)
J.aG(r.y[v],s,0)
r.as=r.Q=null
r.z=r.z===1?2:1
if(r.a7l(2)){r.a8V(1)
return!0}if(r.a7l(1)){r.a8V(2)
return!0}if(r.gjK()&&r.z===2){r.bwr(f)
if(r.a7l(2)){r.a8V(1)
return!0}if(r.a7l(1)){r.a8V(2)
return!0}}}return!1},
a8V(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
t.e=!0
w=t.f=d===1
if(t.gjK()){if(w){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+s}else v="NGMY wins \u2014 your discs are gone"
v=t.w=v}else{v=t.d
if(w){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+s}t.a=w?1:0
t.c=v
return!0},
bwr(d){var w,v,u,t,s,r,q,p,o,n=this,m=A.a([],x.B)
for(w=x.t,v=0;v<8;++v)for(u=0;u<8;++u){if(J.q(n.y[v],u)!==2)continue
for(t=[A.a([1,-1],w),A.a([1,1],w)],s=0;s<2;++s){r=t[s]
q=v+r[0]
p=u+r[1]
if(q>=0&&q<8&&p>=0&&p<8&&J.q(n.y[q],p)===0&&B.o.F(q+p,2)===1)m.push(A.a([v,u,q,p],w))}}w=m.length
if(w===0)return
o=m[d.aD(w)]
J.aG(n.y[o[2]],o[3],2)
J.aG(n.y[o[0]],o[1],0)
n.z=1},
a7l(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)for(t=J.aW(w[u]);t.C();)if(t.gU(t)===d)return!1
return!0},
cPc(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.pI
if(!s.gjK()){w=s.d
w=w!=null&&!s.Su("tic_tac_go",w.d)}else w=!1
if(w)return D.pI
if(s.gjK())v="X"
else{w=B.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===B.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.ah5(v))return s.aPV(v,!0)
if(!B.d.t(s.at,""))return s.aPW()
s.ax=!s.ax
if(!s.gjK()){s.x.n(0,"turnEmail",s.azc())
s.c=s.aUq()
return D.pI}if(s.gjK()){t=s.cdG(e)
if(t>=0){s.at[t]="O"
if(s.ah5("O"))return s.aPV("O",!1)
if(!B.d.t(s.at,""))return s.aPW()
s.ax=!0}}s.c=s.gjK()?"Your turn \u2014 you are X":s.aUq()
return D.pI},
aUq(){var w=this.d
if(w==null)return"Take your turn"
return this.Su("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aPV(d,e){var w,v,u=this
u.e=!0
u.f=e
u.r=!1
if(u.gjK()){if(e){w=u.d
w=w==null?null:w.b
w=(w==null?"You":w)+" wins with "+d+"!"}else w="NGMY wins with "+d+"!"
w=u.w=w}else{w=u.d
if(e){w=w==null?null:w.b
v=w==null?"You":w}else{w=w==null?null:w.c
v=w==null?"Opponent":w}w=u.w=v+" wins with "+d+"!"}u.c=w
u.a=e?1:0
return e?D.pJ:D.GX},
aPW(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.Qw},
cdG(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.ah5("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.ah5("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.cQ9[u]
if(v[w].length===0)return w}return-1},
ah5(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.cXb[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a1L(d){return B.d.cI(d,0,new C.cao())},
czr(d){this.ay.push(1+d.aD(10))
if(this.a1L(this.ay)>21)return!0
return!1},
czs(d){var w,v,u,t=this
while(t.a1L(t.ch)<17)t.ch.push(1+d.aD(10))
t.CW=!0
w=t.a1L(t.ay)
v=t.a1L(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cEZ(d,e){var w,v,u,t=this
if(t.e)return D.pI
if(!t.gjK()){w=t.d
w=w!=null&&!t.Su("connect_four_pro",w.d)}else w=!1
if(w)return D.pI
if(t.gjK())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.pI
if(!t.aee(d,w))return D.pI
if(t.a7b(t.fx))return t.aPT(t.fx,!0)
if(t.aLG())return t.aPU()
w=t.fx===1?2:1
t.fx=w
if(t.gjK()&&w===2){u=t.cd4(e)
if(u>=0){t.aee(u,2)
if(t.a7b(2))return t.aPT(2,!1)
if(t.aLG())return t.aPU()
t.fx=1}}t.c=t.gjK()?"Your turn \u2014 drop a red disc":t.bAn()
return D.pI},
bAn(){var w=this.d
if(w==null)return"Drop a disc"
return this.Su("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
aee(d,e){var w
for(w=5;w>=0;--w)if(J.q(this.fr[w],d)===0){J.aG(this.fr[w],d,e)
return!0}return!1},
aLG(){for(var w=0;w<7;++w)if(J.q(this.fr[0],w)===0)return!1
return!0},
aPT(d,e){var w,v,u,t=this
t.e=!0
t.f=e
t.r=!1
w=d===1?"red discs":"gold discs"
if(t.gjK()){if(e){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+" wins with "+w+"!"}else v="NGMY wins with "+w+"!"
v=t.w=v}else{v=t.d
if(e){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+" wins with "+w+"!"}t.c=v
t.a=e?1:0
return e?D.pJ:D.GX},
aPU(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.Qw},
cd4(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.aee(w,2)
v=r.a7b(2)
r.b4y(w)
if(v)return w}for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.aee(w,1)
u=r.a7b(1)
r.b4y(w)
if(u)return w}t=A.a([],x.t)
for(w=0;w<7;++w)if(J.q(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aD(s)]},
b4y(d){var w
for(w=0;w<6;++w)if(J.q(this.fr[w],d)!==0){J.aG(this.fr[w],d,0)
return}},
a7b(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.q(this.fr[w],v)!==d)continue
if(this.bAp(w,v,d))return!0}return!1},
bAp(d,e,f){var w,v,u,t=new C.cah(this,d,e,f)
for(w=x.t,w=[A.a([0,1],w),A.a([1,0],w),A.a([1,1],w),A.a([1,-1],w)],v=0;v<4;++v){u=w[v]
if(t.$2(u[0],u[1])+t.$2(-u[0],-u[1])-1>=4)return!0}return!1},
b7L(d){var w=this
if(B.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.aUT(d)}return w.a>=w.b}}
C.aqc.prototype={
T(){return new C.aCQ(null,null)},
cKF(d){return this.e.$1(d)}}
C.aCQ.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bko,null,1,null,v)
w.f5(0,!0)
v.d=w
v.a.d.aM(0,v.gaWQ())
v.avh()},
br(d){var w
this.bE(d)
w=this.a
if(d.c!==w.c){w.d.bM(0,B.c3)
this.avh()}},
avh(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.afZ(t,u)
C.afZ(t,u)
w.a.cKF(s)
w.a.toString
w.m(new C.exd())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
q(){var w,v=this
v.a.d.a3(0,v.gaWQ())
w=v.d
w===$&&A.c()
w.q()
v.bsl()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.afZ(j,i),g=C.afZ(j,i),f=j.length,e=i.length,d=A.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&A.c()
u=new A.aV(1,1)
d.push(new A.vV(new A.cX(v,!1,A.p(l,l,B.f,l,l,new A.o(B.aM,l,l,new A.bs(u,u,u,u),A.a([new A.ac(0,B.G,B.aM.j(0.6),B.J,6)],k),l,B.n),l,22,l,B.Lg,l,l,l,3),l),B.R4,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new A.es(v,l,l,B.cQ,l,l,l,l,l,l,D.eUO))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=B.c.j(0.4)
q=B.cs}else if(s===t){r=B.bc
q=B.O}else{r=B.aE
q=B.I}d.push(new A.es(t,l,l,B.cQ,l,l,l,l,l,l,new A.F(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&A.c()
d.push(new A.vV(new A.cX(k,!1,A.p(l,l,B.f,B.aM,l,l,l,22,l,l,l,l,l,3),l),B.R4,l,l))}p=f===0?0:B.k.V(h/f*100)
k=B.w.j(0.35)
v=A.m(12)
u=A.I(B.b8,B.r,1)
o=x.p
v=A.p(l,A.v(A.a([A.A(A.a([m.aWP("Correct",""+h,B.bk),B.ab,m.aWP("Wrong / missed",""+(f-g),B.aE),B.b2,A.d(""+p+"% accuracy",l,l,l,l,l,l,F.a5P,l,l,l)],o),B.m,l,B.e,B.j,0,l,l),B.ao,D.fcX],o),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(k,l,u,v,l,l,B.n),l,l,l,l,B.bm,l,l,l)
u=A.D(A.cd(new A.a8t(l,A.dn(d,l,l,l,l,l,l,l,l,l,l),l,l,l),B.q,l,B.y,l,l,l,l,B.ai),1)
k=m.a.d
g=A.l(l,l,B.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.w.j(0.35)
return A.v(A.a([v,B.ac,u,B.S,A.aL(l,B.T,!0,l,!0,B.q,l,A.aM(),k,l,l,l,l,l,2,A.bo(l,new A.b4(4,A.m(12),B.Y),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new A.b4(4,A.m(12),D.aUR),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.y,!0,l,!0,l,!1,l,B.ag,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,B.a8,l,l,l,l,l,l,l,l,l,l,l,D.aNN,!0,B.a5,l,B.am,l,l,l,l)],o),B.aj,l,B.e,B.j,0,B.p)},
aWP(d,e,f){var w=null,v=f.j(0.15),u=A.m(8)
return A.p(w,A.d(d+": "+e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(v,w,w,u,w,w,B.n),w,w,w,w,B.fF,w,w,w)}}
C.aKD.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
var z=a.updateTypes(["ax<~>()","~()","H(i_,i_)","~([wX?])","R(qq)","qq()","H(r_,r_)","R(r_)","H(r0,r0)","Os(X)","R(i_)","cK(aci)","YT(X)","Y_(X)","ad3(X)","a5i(X)","MA(X)","abU(X,hA<ak<j3>>)","abT(X,H)","r(qq)","r_(a3<@,@>)","~(DV,aph)","Ms(X)","a3<n,@>(r_)","r0(a3<@,@>)","a3<n,@>(kg)","a3<n,@>(r0)","R(r0)","a3<n,@>(lr)","lr(@)","a3<n,@>(ie)","ie(@)","i_(@)","ax<~>(kg)","a3<n,@>(i_)","~(H,H)","i_(i_)","Ub(X)","ax<R>(ak<i_>)","YS(X)","~(i_)","ZE(X)","Uc(X)","n(i_)","R(lr)","wA(bu<H,lr>)","aar(X,H)","H(ie,ie)","aaj(lr)","r(r6)","bG(HS)","Yo(X)","~(d1{bumpWalletRevision:R,cloudRequest:R})","~(n,O,O,O)","O(Q)","~(d1)","Zb(X)","~(DV)","n(n)","ZF(X)"])
C.coL.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.coM(r,w,s.b,v,s.d)
t=s.e
r.b=A.dF(t,u)
v.r=new C.coI(r)
v.e=new C.coJ(r,w)
v.f=new C.coK(r,w,t,u)},
$S:0}
C.coM.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.li(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=A.a8(r)
u=A.ce(r)
s=v
q=u
p=A.Fq(s,q)
if(p==null)p=new A.j1(s,q==null?A.a1I(s):q)
t=p
o.d.hg(t.a,t.b)
return}o.d.J(0,w)}else{o.e.a(null)
o.d.J(0,null)}},
$S:41}
C.coI.prototype={
$0(){this.a.b.a9(0)
return $.G2()},
$S:1623}
C.coJ.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.arG.$0()
this.a.b.a9(0)},
$S:0}
C.coK.prototype={
$0(){var w,v=this,u=v.b,t=A.dA(0,0,u.gb9O(),0,0,0)
u.j1(0)
u=v.c
w=v.a
w.b=A.cM(new A.b9(u.a-t.a),new C.coH(w,u,v.d))},
$S:0}
C.coH.prototype={
$0(){var w=this.c
this.a.b=A.dF(this.b,w)
w.$1(null)},
$S:0}
C.eT8.prototype={
$1(d){var w=this.a
w.m(new C.eT7(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.eT7.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hA(D.ae1,this.b,null,null,v.$ti.k("hA<1>"))},
$S:0}
C.eTa.prototype={
$2(d,e){var w=this.a
w.m(new C.eT5(w,d,e))},
$S:55}
C.eT5.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hA(D.ae1,null,this.b,this.c,v.$ti.k("hA<1>"))},
$S:0}
C.eT9.prototype={
$0(){var w=this.a
w.m(new C.eT6(w))},
$S:0}
C.eT6.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hA(B.A7,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fqP.prototype={
$1(d){return d.a===this.a&&B.a.i(d.b.toLowerCase())===this.b&&d.x===B.ck},
$S:16}
C.fqH.prototype={
$1(d){return d},
$S:13}
C.faQ.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return A.p(B.A,new A.C(new A.N(u,0,u,0),A.d("NGMY",w,1,B.eB,w,!1,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,B.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),B.f,w,w,B.a9a,w,v,w,w,w,w,w,v)},
$S:153}
C.faN.prototype={
$3(d,e,f){return this.a.$0()},
$S:136}
C.faO.prototype={
$2(d,e){var w,v=this,u=e.b
if(B.a.i(u==null?"":u).length!==0){u.toString
w=B.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return A.ke(w,B.A,v.d,new C.faM(v.e),B.fQ,v.c,!0,v.b,null,null,v.a)},
$S:1624}
C.faM.prototype={
$3(d,e,f){return this.a.$0()},
$S:136}
C.faP.prototype={
$3(d,e,f){return this.a.$0()},
$S:136}
C.d6A.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.d6L.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.d72.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:7}
C.d73.prototype={
$1(d){return this.a.II()},
$S:14}
C.d6T.prototype={
$0(){var w=J.b6(this.b,new C.d6S(),x.P)
w=A.B(w,w.$ti.k("aj.E"))
this.a.f=w},
$S:0}
C.d6S.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:7}
C.d6U.prototype={
$0(){var w=this.a,v=w.a.d.b5,u=A.T(v).k("J<1,a3<n,@>>")
v=A.B(new A.J(v,new C.d6R(),u),u.k("aj.E"))
w.f=v},
$S:0}
C.d6R.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:7}
C.d6W.prototype={
$0(){var w=this.a,v=w.a.d.b5,u=A.T(v).k("J<1,a3<n,@>>")
v=A.B(new A.J(v,new C.d6V(),u),u.k("aj.E"))
w.f=v},
$S:0}
C.d6V.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:7}
C.d6O.prototype={
$0(){var w=0,v=A.j(x.c),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.c5R(t.a.c)?2:3
break
case 2:w=4
return A.b(C.anW(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.m(new C.d6M(t))
case 3:if(t.c!=null)t.m(new C.d6N(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:53}
C.d6M.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d6N.prototype={
$0(){return this.a.d++},
$S:0}
C.d6P.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d6Q.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d6G.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.hYq(t.a.d.b5,J.k(J.q(u.b,"id")),"rejected")
t.a.bp()
w=2
return A.b(C.afO(t.a.d.b5),$async$$0)
case 2:w=3
return A.b(t.II(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6H.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a7(s)
C.hNq(t.a.d.b5,J.k(r.h(s,"id")),t.a.c.c)
t.a.bp()
w=2
return A.b(C.afO(t.a.d.b5),$async$$0)
case 2:w=3
return A.b(t.II(),$async$$0)
case 3:t.HB(B.d.dL(t.y,new C.d6E(s),new C.d6F(t)),J.k(r.h(s,"id")))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6E.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d6F.prototype={
$0(){return B.d.gK(this.a.y)},
$S:z+5}
C.d6I.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d6J.prototype={
$0(){return B.d.gK(this.a.y)},
$S:z+5}
C.d6K.prototype={
$0(){return this.a.HB(this.b,J.k(J.q(this.c,"id")))},
$S:0}
C.d6D.prototype={
$0(){return this.a.bXv(this.b)},
$S:0}
C.d6C.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.hYT(u,w.b,new C.d6B(v,w))},
$S:0}
C.d6B.prototype={
$2(d,e){return this.a.afz(this.b,d,e)},
$S:671}
C.d71.prototype={
$2(d,e){if(d)return
this.a.aPy()},
$S:120}
C.d7_.prototype={
$2(d,e){var w=this.a
return new A.l1(C.aYa(w.a.c.a),new C.d6Z(w,this.b,this.c),null,null,x.gH)},
$S:1626}
C.d6Z.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=A.m(12)
v=A.m(12)
u=A.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return A.aF(!1,B.a1,!0,w,A.aK(!1,v,!0,new A.C(B.l1,A.bDL(B.cR,A.V(B.h7,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.d6Y(this.a,d),t,t,t,t,t,t,t),B.f,this.b,0,t,t,t,t,t,B.ae)},
$S:1627}
C.d6Y.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fn5(s.c.a,s.e).eP(new C.d6X())
w=2
return A.b(C.bB7(u.b,t.a.c.a),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6X.prototype={
$1(d){},
$S:30}
C.d70.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dKj.prototype={
$0(){var w=this.a
return A.Kd(w.a.c.a,new C.dKi(w))},
$S:79}
C.dKi.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dKk.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&A.c()
u.bi=t.ad()
v.bp()
w.m(new C.dKh())},
$S:0}
C.dKh.prototype={
$0(){},
$S:0}
C.dKl.prototype={
$2(d,e){var w,v=this.a
if(!C.c5R(v.a.c)){if($.fJU.t(0,B.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.fJV(this.b,v.x,w)
return!1}C.anW(v.a.c.a)}if(A.Kd(v.a.c.a,new C.dKg(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aEp()
w=v.a
w.toString
w.ho(new A.d1(B.o.u(1000*Date.now()),v.a.c.a,d,B.jA,B.fa,e,null,null,B.ck,new A.Q(Date.now(),0,!1)))
v.a.bp()
return!0},
$S:1628}
C.dKg.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dKm.prototype={
$3$bonus(d,e,f){var w,v=null,u=B.o.u(1000*Date.now()),t=this.a,s=t.a
s.ho(new A.d1(u,s.c.a,d,B.fz,B.fa,e,v,v,B.ck,new A.Q(Date.now(),0,!1)))
t.a.bp()
w=f>0?"+$"+B.k.aa(d,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.ui(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1629}
C.d6u.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d6x.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.d6y.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d6z.prototype={
$1(d){var w=null,v=this.a,u=A.fl(w,w,v.e===d?B.bk:A.Y(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,w,w,w,w,w,w,w,w)
return A.D(new A.C(B.eO,A.i9(A.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.d6w(v,d),u),w),1)},
$S:227}
C.d6w.prototype={
$0(){var w=this.a
return w.m(new C.d6v(w,this.b))},
$S:0}
C.d6v.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d8m.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.d8p.prototype={
$1(d){this.a.ce0()
return null},
$S:14}
C.d8q.prototype={
$1(d){return this.a.ctE()},
$S:14}
C.d8r.prototype={
$1(d){this.a.a0P()
return null},
$S:14}
C.d8s.prototype={
$1(d){this.a.agF()
return null},
$S:14}
C.d8t.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c5)return
w=v.Q
w===$&&A.c()
if(w<=0){v.m(new C.d8n(v))
w=v.as
if(w!=null)w.a9(0)
v.Eh()
return}v.m(new C.d8o(v))},
$S:14}
C.d8n.prototype={
$0(){return this.a.Q=0},
$S:0}
C.d8o.prototype={
$0(){var w=this.a,v=w.Q
v===$&&A.c()
w.Q=v-1
return v},
$S:0}
C.d7C.prototype={
$0(){return this.a.bC=this.b},
$S:0}
C.d7D.prototype={
$0(){return this.a.bC=this.b},
$S:0}
C.d85.prototype={
$1(d){return this.a.go.t(0,d)},
$S:31}
C.d86.prototype={
$0(){},
$S:0}
C.d7S.prototype={
$0(){var w=this.b
w.c5=!0
w.cU="Waiting for both players\u2026"
w.cg="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.d7T.prototype={
$0(){var w=this.a
w.c5=!0
w.cU="Both players connected"
w.cg="Starting together in a moment\u2026"},
$S:0}
C.d7U.prototype={
$0(){var w=this.b
w.c5=!0
w.cU="Match starting together\u2026"
w.cg="Both players start in "+B.o.D(this.c,1,99)+"s"},
$S:0}
C.d7V.prototype={
$0(){this.b.c5=!1},
$S:0}
C.d7W.prototype={
$0(){},
$S:0}
C.d74.prototype={
$0(){var w=this.a,v=w.x2,u=A.t(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.d7B.prototype={
$0(){var w=this.a
w.at=this.b
w.b1N()},
$S:0}
C.d87.prototype={
$0(){},
$S:0}
C.d8g.prototype={
$0(){},
$S:0}
C.d84.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.d83(w))},
$S:0}
C.d83.prototype={
$0(){var w=this.a
w.y=!0
w.z=new A.Q(Date.now(),0,!1)},
$S:0}
C.d7z.prototype={
$0(){var w=this.a;++w.Z
w.y=!1
w.z=null},
$S:0}
C.d7A.prototype={
$0(){},
$S:0}
C.d8b.prototype={
$1(d){return d==null},
$S:256}
C.d8c.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
B.d.cw(v.ch,w.d)},
$S:0}
C.d8d.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.d75.prototype={
$1(d){return d==null},
$S:256}
C.d76.prototype={
$0(){return this.a.bi++},
$S:0}
C.d77.prototype={
$0(){},
$S:0}
C.d7L.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.d7M.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.J(0,t)
w=this.c
u.J(0,w)
if(v.ghv()&&D.mo.t(0,v.a.e)){u=v.id
u.J(0,t)
u.J(0,w);++v.fx}++v.k2
v.fy=A.a([],x.t)},
$S:0}
C.d7N.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.d7K(w))},
$S:11}
C.d7K.prototype={
$0(){var w=this.a
w.fy=A.a([],x.t)
w.k1=!1},
$S:0}
C.d7X.prototype={
$0(){return this.a.y1++},
$S:0}
C.d7Y.prototype={
$0(){},
$S:0}
C.d7Z.prototype={
$0(){return this.a.y2++},
$S:0}
C.d8_.prototype={
$0(){},
$S:0}
C.d80.prototype={
$0(){return this.a.b5++},
$S:0}
C.d81.prototype={
$0(){},
$S:0}
C.d8a.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.d7O.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d7P.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.d7Q.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d7R.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.d8e.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.d8f.prototype={
$0(){var w=this.a
w.ok.push(w.d.aD(4))
w.p2=0},
$S:0}
C.d78.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d79.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.d7a.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d7b.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.d88.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.d89.prototype={
$0(){var w,v=this.a;++v.x2
v.aLt()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+A.t(Math.min(w+2,7))+" tiles"},
$S:0}
C.d7J.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.d82.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d7H.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d7I.prototype={
$2(d,e){return d+e.length},
$S:215}
C.d8h.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.d8i.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d8j.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d8l.prototype={
$1(d){var w=this.a,v=w.Nt(),u=v<=0?0:B.k.D(w.zu()/v,0,1),t=w.a.x,s=t*1.46
return new C.Ms(w.f?s:s*u,s,t,null)},
$S:z+22}
C.d8k.prototype={
$1(d){return d.bT(0.85)},
$S:155}
C.d7G.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghv()&&D.mo.t(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return A.v(A.a([A.d(p,w,w,w,w,w,w,B.jY,B.L,w,w),B.ao,A.D(A.av(new A.a5(r*v+u,r*t+s,A.ib(!0,w,w,B.y,new A.hH(v,6,6,1,r),new C.d7F(q,r),q.fr.length,w,B.dP,B.ai,!1),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
$S:152}
C.d7F.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.t(0,e),p=r.ghv()&&D.mo.t(0,r.a.e)&&q&&r.id.t(0,e),o=r.ghv()&&D.mo.t(0,r.a.e)&&q&&!p,n=B.d.t(r.fy,e)||q,m=p?D.ama:D.bNl,l=A.m(10),k=A.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.ama:D.am4
v=o?A.I(B.dx,B.r,2):s
u=A.a([new A.ac(0,B.G,A.Y(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.J,4)],x.V)
t=this.b*0.42
return A.aK(!1,l,!0,A.df(s,A.av(n?A.V(D.cgo[r.fr[e]],B.c,s,s,s,t):A.d("?",s,s,s,s,s,s,A.l(s,s,B.c,s,s,s,s,s,s,s,s,t,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,B.bb,new A.o(s,s,v,k,u,w,B.n),B.eD,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.d7E(r,e),s,s,s,s,s,s,s)},
$S:194}
C.d7E.prototype={
$0(){return this.a.cdm(this.b)},
$S:0}
C.d7o.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?A.Y(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Y(89,B.bk.l()>>>16&255,B.bk.l()>>>8&255,B.bk.l()&255),r=A.m(10),q=A.m(10),p=A.m(10),o=A.I(A.Y(64,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
return A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(B.A,A.d(t?"":u,w,w,w,w,w,w,D.aMS,w,w,w),B.f,w,w,new A.o(w,w,o,p,w,w,B.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d7n(v,d),w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.ae)},
$S:673}
C.d7n.prototype={
$0(){return this.a.csV(this.b)},
$S:0}
C.d7p.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=A.Y(46,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
return A.aF(!1,B.a1,!0,A.m(10),A.aK(!1,A.m(10),!0,A.p(B.A,A.d(u,w,w,w,w,w,w,D.aMS,w,w,w),B.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d7m(v,d),w,w,w,w,w,w,w),B.f,t,0,w,w,w,w,w,B.ae)},
$S:673}
C.d7m.prototype={
$0(){return this.a.csU(this.b)},
$S:0}
C.d7q.prototype={
$1(d){return this.a.m(new C.d7l())},
$S:28}
C.d7l.prototype={
$0(){},
$S:0}
C.d7r.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&A.c()
w=C.afZ(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.oC()
if(u.ghv()&&D.mo.t(0,u.a.e)){u.a_9()
u.mG(!0)}else{v=B.d.cI(u.cy,0,new C.d7j())
t=u.dx
if(t>=v)u.te("All 5 sentences perfect \u2014 full payout!")
else u.DJ(t/v,t,v)}}else{if(u.ghv()&&D.mo.t(0,u.a.e))u.a_9()
u.m(new C.d7k(u))}},
$S:0}
C.d7j.prototype={
$2(d,e){return d+e.length},
$S:215}
C.d7k.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bM(0,B.c3)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.d7s.prototype={
$1(d){var w=null,v=A.fl(w,w,A.Y(38,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,B.ce,w,w,w,w,w,w,w)
return new A.C(B.cK,new A.a5(1/0,w,A.i9(A.d(d,w,w,w,w,w,w,U.aML,w,w,w),new C.d7i(this.a,d),v),w),w)},
$S:130}
C.d7i.prototype={
$0(){return this.a.b19(this.b)},
$S:0}
C.d7t.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&A.c()
w=u*3+8
return A.v(A.a([A.d(s,v,v,v,v,v,v,B.oP,v,v,v),B.P,A.D(A.av(new A.a5(w,w,A.ib(!0,v,v,B.y,new A.hH(3,4,4,1,u),new C.d7h(t,u),9,v,B.dP,B.ai,!1),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
$S:152}
C.d7h.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.aZZ(e),p=r===0
if(p)w=B.K
else w=q?B.bk:A.Y(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v=A.m(10)
s=p?t:new C.d7d(s,e)
u=A.m(10)
p=p?"":""+r
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.av(A.d(p,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),B.f,w,0,t,t,t,t,t,B.ae)},
$S:75}
C.d7d.prototype={
$0(){return this.a.csT(this.b)},
$S:0}
C.d7u.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.d7g(q,d)
p=A.m(16)
if(o)w=D.a1_[d]
else{w=D.a1_[d]
w=A.Y(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=A.m(16)
u=o?A.Y(B.k.V(127.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Y(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
u=A.I(u,B.r,o?2:1)
t=x.V
if(o){s=D.a1_[d]
t=A.a([new A.ac(0,B.G,A.Y(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,16)],t)}else t=A.a([],t)
return A.aK(!1,p,!0,A.df(r,r,r,r,B.bb,new A.o(w,r,u,v,t,r,B.n),T.Af,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1633}
C.d7g.prototype={
$0(){return this.a.csW(this.b)},
$S:0}
C.d7v.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&A.c()
q=A.d(q,t,t,t,t,t,t,B.oP,t,t,t)
w=A.d("Move "+r.avX()+"/"+C.fPY(),t,t,t,t,t,t,B.CF,t,t,t)
v=r.x2
u=s*3+12
return A.v(A.a([q,w,A.d("Round "+v+"/7 \xb7 "+A.t(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,A.l(t,t,A.Y(153,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.D(A.av(new A.a5(u,u,A.ib(!0,t,t,B.y,new A.hH(3,6,6,1,s),new C.d7f(r),9,t,B.dP,B.ai,!1),t),t,t,t),1)],x.p),B.m,t,B.e,B.j,0,B.p)},
$S:152}
C.d7f.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=A.m(10),s=A.m(10),r=u?B.bk:D.b7h,q=u?B.ew:D.bfm
return A.aF(!1,B.a1,!0,w,A.aK(!1,t,!0,A.p(w,w,B.f,w,w,new A.o(r,w,A.I(q,B.r,u?2.5:1),s,w,w,B.n),w,w,w,w,w,w,w,w),w,!0,w,w,B.K,w,w,w,w,w,w,w,w,new C.d7c(v,e),w,w,w,w,B.K,w,w),B.f,B.K,0,w,w,w,w,w,B.ae)},
$S:75}
C.d7c.prototype={
$0(){return this.a.csR(this.b)},
$S:0}
C.d7w.prototype={
$0(){return this.a.b19(this.b[this.c])},
$S:0}
C.d7x.prototype={
$0(){return this.a.m(new C.d7e())},
$S:0}
C.d7e.prototype={
$0(){},
$S:0}
C.d7y.prototype={
$2(d,e){this.a.YV(d,e)
return null},
$S:z+21}
C.dbU.prototype={
$1(d){return this.a.cdQ(this.b,d)},
$S:1634}
C.dbT.prototype={
$0(){var w=this
return w.a.a.cLd(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.czN.prototype={
$1(d){var w=this.a
w.a_q()
w.tl()},
$S:8}
C.cz7.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cyY.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cyZ.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.czh.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cze.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.czf.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.czg.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cz9.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.cz8(w))},
$S:0}
C.cz8.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cz_.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ab(w.c)
v.dy=J.ab(w.d)
v.fr=J.ab(w.e)},
$S:0}
C.czc.prototype={
$1(d){var w=this.a
return new C.Ub(w.fx,new C.czb(w),w.a.f.r,null)},
$S:z+37}
C.czb.prototype={
$1(d){return this.bg_(d)},
bg_(d){var w=0,v=A.j(x.y),u,t=this,s,r
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c6L(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.m(new C.cza(r,d))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+38}
C.cza.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.czA.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.czu.prototype={
$1(d){this.a.tl()
return null},
$S:14}
C.czx.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(B.o.an(v.gaSm().a,1e6)<=0){w=v.id
if(w!=null)w.a9(0)
v.tl()
return}v.m(new C.czw())},
$S:14}
C.czw.prototype={
$0(){},
$S:0}
C.czt.prototype={
$1(d){this.a.Eo()
return null},
$S:14}
C.czv.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.czs.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bi(J.k(v==null?"":v))
if(u==null)u=new A.Q(A.fP(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bi(J.k(v==null?"":v))
return u.aL(0,w==null?new A.Q(A.fP(0,0,!1),0,!1):w)},
$S:42}
C.cz4.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bi(J.k(v==null?"":v))
if(u==null)u=new A.Q(A.fP(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bi(J.k(v==null?"":v))
return u.aL(0,w==null?new A.Q(A.fP(0,0,!1),0,!1):w)},
$S:42}
C.cz5.prototype={
$0(){var w=this.a,v=w.f
B.d.a8(v)
B.d.v(v,this.b)
w.ax=!0},
$S:0}
C.cz6.prototype={
$0(){var w=this.a
if(w.c!=null)w.a06(!0)},
$S:11}
C.cz2.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cz3.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
if(w.f.length!==0)w.Sy(this.b)},
$S:8}
C.czk.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=B.d.gcX(v).Q
v.toString
if(this.b)w.hT(v)
else w.lQ(v,B.dW,B.kz)},
$S:8}
C.czd.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.czl.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.czm.prototype={
$0(){var w=this.a
w.f.push(A.E(["role","user","text",this.b,"at",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.z))
w.b2A()
w.r.bM(0,B.c3)
w.at=!0},
$S:0}
C.czn.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.czo.prototype={
$0(){var w=this.a
w.f.push(A.E(["role","ai","text",this.b,"at",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.z))
w.at=!1},
$S:0}
C.czp.prototype={
$0(){var w,v=this.b,u=A.U(x.N,x.z)
J.aG(u,"role","ai")
J.aG(u,"text",this.c)
J.aG(u,"at",new A.Q(Date.now(),0,!1).a5().ac())
w=this.a
if(J.cw(w.b)){w=J.b6(w.b,v.gccO(),x.P)
w=A.B(w,w.$ti.k("aj.E"))
J.aG(u,"phoneActions",w)}v.f.push(u)
v.b2A()},
$S:0}
C.czq.prototype={
$0(){this.a.f.push(A.E(["role","ai","text",y.g,"at",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.z))},
$S:0}
C.czr.prototype={
$0(){return this.a.at=!1},
$S:0}
C.czi.prototype={
$1(d){return this.bg0(d)},
bg0(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:k=t.a
if(k.c==null||d==null){w=1
break}s=t.b.b
r=J.a7(s)
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
return A.b(C.aok(q,new C.r_("cal_"+1000*n,m,l,(o==null?p.bN(36e8):o).bQ(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.aoH()
case 4:k.c.I(x.q).f.R(A.b2(null,null,null,B.d2,null,B.q,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:405}
C.czz.prototype={
$1(d){return this.bg1(d)},
bg1(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.I(x.q).f.R(A.b2(null,null,null,B.d2,null,B.q,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:405}
C.czj.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=B.d.gcX(v).Q
v.toString
w.hT(v)},
$S:8}
C.czM.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
if(v>0)w.a9u(v-1)},
$S:0}
C.czF.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.czI.prototype={
$1(d){var w=this.a
w.m(new C.czC(w,d))
if(d===0)w.a06(!0)},
$S:28}
C.czC.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.czG.prototype={
$2$size(d,e){return C.fOi(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:1635}
C.czH.prototype={
$0(){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.h_L(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return A.b(H.ap9(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.czD(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return A.b(C.aoi(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return A.b(p.tl(),$async$$0)
case 15:p.m(new C.czE(p))
p.a9u(0)
case 14:u=!1
w=1
break
case 11:w=16
return A.b(p.tl(),$async$$0)
case 16:case 9:case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:62}
C.czD.prototype={
$2(d,e){return this.bg2(d,e)},
bg2(d,e){var w=0,v=A.j(x.y),u,t=this,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=A.a0K(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$2,v)},
$S:123}
C.czE.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.czK.prototype={
$2(d,e){return B.ab},
$S:36}
C.czJ.prototype={
$2(d,e){var w=null,v=this.a,u=A.d((v.a.c.w?D.a15:D.a0s)[e],w,w,w,w,w,w,B.pZ,w,w,w),t=A.Y(31,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),s=A.Y(89,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
v=v.at?w:new C.czB(v,e)
return A.mw(w,t,u,w,v,w,w,new A.az(s,1,B.r,-1),w)},
$S:565}
C.czB.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a15:D.a0s
w.r.saV(0,v[this.b])
w.mF()
return null},
$S:0}
C.czL.prototype={
$1(d){var w=this.a
return w.at?null:w.mF()},
$S:2}
C.cz0.prototype={
$0(){return this.a.a9u(0)},
$S:0}
C.czy.prototype={
$0(){return this.a.a9u(this.b)},
$S:0}
C.cz1.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=A.p(v,D.bI1,B.f,v,v,new A.o(v,v,v,v,v,new A.a6(B.a3,B.a7,B.x,A.a([A.Y(51,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),w.b],x.O),v,v),B.a6),v,72,v,v,v,v,v,72)
t=w.c
s=A.d("Start a conversation",v,v,v,v,v,v,A.l(v,v,t?B.c:B.aA,v,v,v,v,v,v,v,v,16,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.av(new A.C(B.WO,A.v(A.a([u,B.ac,s,B.ao,A.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,A.l(v,v,t?B.ay:B.aX,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v)],x.p),B.m,v,B.e,B.j,0,B.p),v),v,v,v)}if(e<s)return u.bBi(t[e],w.c)
return u.aM3(A.E(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:40}
C.bW4.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=B.k.O(d)
return new A.Q(A.fP(w>1e11?w:w*1000,0,!0),0,!0).bQ()}v=A.bi(J.k(d))
return v==null?null:v.bQ()},
$S:294}
C.bW3.prototype={
$1(d){A.aN(d)
return(d==null?0:d)/100},
$S:520}
C.bW6.prototype={
$1(d){var w
if(d==null)w=null
else{w=A.bi(J.k(d))
w=w==null?null:w.bQ()}return w},
$S:294}
C.bW5.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null
if(!x.f.b(d))return m
w=A.a0(d,x.N,x.z)
try{v=J.q(w,"id")
v=J.k(v==null?"":v)
u=J.q(w,"userEmail")
u=J.k(u==null?"":u)
t=A.aN(J.q(w,"amount"))
if(t==null)t=0
s=J.q(w,"type")
s=A.a3f(B.a1M,J.k(s==null?"reimbursement":s))
r=J.q(w,"method")
r=A.a3f(B.a0q,J.k(r==null?"system":r))
q=A.aT(J.q(w,"sourceDetails"))
p=J.q(w,"status")
p=A.a3f(B.G7,J.k(p==null?"approved":p))
o=this.a.$1(J.q(w,"timestamp"))
if(o==null)o=new A.Q(Date.now(),0,!1)
return new A.d1(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:623}
C.dsn.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dso.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dse.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bl(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dsc.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.a
w=2
return A.b(o.A4(),$async$$0)
case 2:t=o.d
t===$&&A.c()
s=o.e
s===$&&A.c()
r=o.a.c
q=o.f
q===$&&A.c()
w=3
return A.b(C.fIU(t,s,r,q),$async$$0)
case 3:p=e
w=4
return A.b(A.oP(o.a.c,!1),$async$$0)
case 4:o.kE(p)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsm.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.a82(),$async$$0)
case 3:q=e
if(q==null){r.kE("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return A.b(A.a4(s,!1).ci(A.eo(new C.dsl(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return A.b(A.oP(r.a.c,!1),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsl.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&A.c()
return new C.YS(w.b,w.a,u,v,null)},
$S:z+39}
C.dsb.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.hu2(q)?3:4
break
case 3:w=5
return A.b(t.a.DY(B.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return A.b(C.aVM(q,s.a.c),$async$$0)
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
case 9:s.kE(C.bW8(s.a.c))
w=1
break
case 10:s.kE("That code didn't match anything on your account. Double-check it and try again.")
w=1
break
case 11:s.kE(y.B)
w=1
break
case 12:q=r.b
q.toString
w=14
return A.b(s.zl(q,!0,!0),$async$$0)
case 14:w=1
break
case 13:q=r.b
q.toString
w=15
return A.b(s.aNh(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsa.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=A.bl(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dsd.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.abj(),$async$$0)
case 3:q=e
if(q==null||B.a.i(q).length===0){w=1
break}s=C.fXG(q)
if(s==null){r.kE("Could not read that backup file.")
w=1
break}if(!C.bW7(s,r.a.c,null)){r.kE(C.bW8(r.a.c))
w=1
break}w=4
return A.b(r.bDC(s),$async$$0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsk.prototype={
$1(d){var w=null,v=new A.ar(B.as,$.aw()),u=A.M(d).ax.a===B.H,t=u?B.i4:B.c,s=x.p,r=A.v(A.a([A.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,A.l(w,w,u?B.ad:B.ak,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),B.az,A.aL(w,B.T,!0,w,!0,B.q,w,A.aM(),v,w,w,w,w,w,2,A.bo(w,new A.b4(4,A.m(14),B.df),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),B.y,!0,w,!0,w,!1,w,B.ag,w,w,w,w,w,B.dL,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.L,w,B.am,w,w,w,w)],s),B.F,w,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bK(!1,B.dd,w,w,!0,w,w,new C.dsi(d),w,w),A.bJ(D.f1Z,new C.dsj(d,v),A.bk(B.aT,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.ffR,w)},
$S:19}
C.dsi.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.dsj.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a4(this.a,!1).N(w)
return null},
$S:0}
C.dsf.prototype={
$1(d){return D.fBk},
$S:z+12}
C.dsg.prototype={
$0(){return this.a.DZ(B.a.i(this.b))},
$S:1}
C.dsh.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(C.aVM(t.b,r.a.c),$async$$0)
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
return A.b(r.zl(s,!0,!0),$async$$0)
case 11:w=1
break
case 7:r.kE(C.bW8(r.a.c))
w=1
break
case 8:r.kE("Could not read that QR code for your account.")
w=1
break
case 9:r.kE(y.B)
w=1
break
case 10:s=q.b
s.toString
w=12
return A.b(r.aNh(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsp.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.dst.prototype={
$1(d){this.a.PF()
return null},
$S:14}
C.dsq.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dsr.prototype={
$0(){var w=null,v=this.a
A.fH(new A.fA(v.gau8()))
this.b.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d("Code "+v.gau8()+" copied",w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dss.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.dsu.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!(B.a.a0(s,"NGMYSNAP1|")||B.a.a0(s,"NGMYLOCALSYNC1|")||B.a.a0(s,"NGMYLOCALLIVE1|")||B.a.a0(s,"NGMYLOCALDEP1|")))continue
r.e=!0
A.a4(this.b,!1).N(s)
return}},
$S:190}
C.fe6.prototype={
$1(d){return D.fzd},
$S:z+13}
C.ffj.prototype={
$1(d){return new C.ad3(this.a,this.b,this.c,null)},
$S:z+14}
C.eMZ.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.eN_.prototype={
$0(){A.a4(this.a,!1).N(!0)
return null},
$S:0}
C.d1u.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fD()},
$S:8}
C.d1r.prototype={
$2(d,e){return e.aiM(e.a.toUpperCase())},
$S:1636}
C.d1s.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=B.a.i(w.d.a.a)
A.a4(v,!1).N(w)
return null},
$S:2}
C.d1t.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.bWQ.prototype={
$1(d){var w=J.q(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!B.d.b8(D.d3w,B.a.gkK(v))},
$S:4}
C.fn_.prototype={
$1(d){return d.a===this.a},
$S:1637}
C.fn0.prototype={
$0(){return B.d.gK(B.Bs)},
$S:1638}
C.dyP.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.m(new C.dyO(v))
w=v.r
w===$&&A.c()
if(w<=0)v.b1E("Time's up")},
$S:14}
C.dyO.prototype={
$0(){var w=this.a,v=w.r
v===$&&A.c()
w.r=v-1
return v},
$S:0}
C.dyG.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dyL.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.m(new C.dyI(w,d,e))},
$S:126}
C.dyI.prototype={
$0(){var w=this.a,v=this.c
w.e=B.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dyM.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.dyH(w))
w.cnn(!0)},
$S:0}
C.dyH.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dyN.prototype={
$1(d){this.a.b1E(d)
return null},
$S:2}
C.dyJ.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.dyK.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.c3g.prototype={
$1(d){return D.dnK},
$S:z+15}
C.c3f.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.fg5.prototype={
$5(d,e,f,g,h){var w,v=null,u=J.a7(d),t=A.aN(u.h(d,e)),s=t==null?v:B.k.O(t)
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
C.fg6.prototype={
$2(d,e){var w=A.aN(J.q(d,e))
w=w==null?null:B.k.O(w)
return w==null?0:w},
$S:607}
C.fg7.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:215}
C.fu1.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.h82(w,v):C.fOA(w,v)
if(u===3)++w.f
C.aes(w,this.c,u)
return u},
$S:1640}
C.fu3.prototype={
$0(){return C.h82(this.a,this.b)},
$S:112}
C.fu2.prototype={
$0(){return C.fOA(this.a,this.b)},
$S:112}
C.ds_.prototype={
$0(){var w=this.a
if(w.a.c)w.m(new C.drZ(w))},
$S:0}
C.drZ.prototype={
$0(){this.a.r=1+B.o.F(A.Bg(new A.Q(Date.now(),0,!1))/90|0,5)},
$S:0}
C.ds0.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&A.c()
u=u.x
u===$&&A.c()
w=B.k.bw(u*10)
if(w!==v.w)v.m(new C.drY(v,w))}},
$S:0}
C.drY.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.c5q.prototype={
$3(d,e,f){var w=null
return A.D(A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,B.I,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.bB,A.f4(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.dt)],x.p),B.m,w,B.e,B.j,0,B.p),1)},
$S:1641}
C.c5p.prototype={
$3(d,e,f){var w=null
return A.d("$"+B.k.aa(e,2),w,w,w,w,w,w,B.oO,w,w,w)},
$S:456}
C.c5S.prototype={
$1(d){return new C.MA(this.a,this.b,!1,null,null)},
$S:z+16}
C.dRm.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=A.m(e?0:30)
e=e?g:A.I(B.b3.j(0.5),B.r,1)
w=f.a.e?g:A.a([new A.ac(2,B.G,B.b3.j(0.35),B.J,36),new A.ac(0,B.G,B.bA.j(0.175),B.J,24)],x.V)
v=A.m(f.a.e?0:30)
u=x.O
t=A.ao(g,A.p(g,g,B.f,g,g,new A.o(g,g,g,g,g,new A.bR(B.A,0.5,B.x,g,0,A.a([B.ba.j(0.22),B.K],u),g,g),B.a6),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=A.ao(-50,A.p(g,g,B.f,g,g,new A.o(g,g,g,g,g,new A.bR(B.A,0.5,B.x,g,0,A.a([B.bA.j(0.18),B.K],u),g,g),B.a6),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?B.j:B.Q
p=x.p
o=A.a([],p)
if(f.a.e)o.push(B.P)
n=x.V
o.push(A.p(g,D.bDz,B.f,g,g,new A.o(g,g,A.I(B.aM.j(0.8),B.r,2.5),g,A.a([new A.ac(0,B.G,B.b3.j(0.55),B.cw,18)],n),E.tB,B.a6),g,88,g,g,g,g,g,88))
o.push(B.aO)
o.push(A.nA(B.jf,D.fdD,new C.dRi()))
o.push(B.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(A.d(m,g,g,g,g,g,g,A.l(g,g,B.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,B.cs,g,1.45,!0,g,g,g,g,g,g,g,g),B.L,g,g))
m=this.b
if(m.length!==0){l=B.cq.j(0.12)
k=A.m(18)
j=A.I(B.cq.j(0.45),B.r,1)
i=A.a([A.A(A.a([A.V(D.bxz,B.cq.j(0.95),g,g,g,20),B.ab,A.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,A.l(g,g,B.cq.j(0.95),g,g,g,g,g,g,g,g,13,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),B.m,g,B.e,B.j,0,g,g),B.S,A.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,A.l(g,g,B.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),B.S],p)
B.d.v(i,new A.J(m,new C.dRj(),A.T(m).k("J<1,r>")))
B.d.v(o,A.a([B.aO,A.p(g,A.v(i,B.F,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(l,g,j,k,g,g,B.n),g,g,g,g,B.by,g,g,1/0)],p))}o.push(B.bu)
m=B.w.j(0.35)
l=A.m(18)
k=A.I(B.b3.j(0.35),B.r,1)
o.push(A.p(g,A.v(A.a([f.auP(B.h6,"Unlimited games with an active plan",B.ba),B.P,f.auP(B.kd,"Weekday check-ins grow your balance",B.b3),B.P,f.auP(B.mb,"Compete, bet, and earn points",B.aM)],p),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(m,g,k,l,g,g,B.n),g,g,g,g,B.by,g,g,1/0))
o.push(B.d5)
l=A.m(16)
n=A.a([new A.ac(0,B.G,B.bA.j(0.45),B.cw,16)],n)
o.push(new A.a5(1/0,g,A.bX(A.dp(D.bGN,D.f9i,new C.dRk(f,a0),A.bk(B.K,g,g,g,B.c,B.HT,g,B.K,new A.b7(A.m(16),B.Y),g,g,g)),new A.o(g,g,g,l,n,E.tB,B.n),B.be),g))
o.push(B.P)
n=f.a.e?"Back":"Maybe later"
o.push(A.bK(!1,A.d(n,g,g,g,g,g,g,A.l(g,g,B.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,new C.dRl(f,a0),g,g))
if(f.a.e)o.push(B.b2)
h=A.p(g,A.bv(v,new A.an(B.W,g,B.aa,B.q,A.a([t,u,new A.C(new A.N(22,r,22,q),A.v(o,B.m,g,B.e,s,0,B.p),g)],p),g),B.ap),B.f,g,g,new A.o(g,g,e,d,w,D.bQ2,B.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return A.eD(g,B.K,h,g,g,g,Ac.Xh,B.d_,g,g,g)},
$S:674}
C.dRi.prototype={
$1(d){return D.bP1.aw(0,d)},
$S:65}
C.dRj.prototype={
$1(d){var w=null
return new A.C(B.eY,A.A(A.a([A.V(Aj.Zd,B.cq.j(0.85),w,w,w,14),B.ab,A.D(A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$S:130}
C.dRk.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{A.a4(this.b,!1).N(null)
w.a.c.$0()}},
$S:0}
C.dRl.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else A.a4(this.b,!1).N(null)},
$S:0}
C.fpn.prototype={
$1(d){if(d.gml())this.a.a=d
return d.gml()},
$S:537}
C.fpa.prototype={
$1(d){$.aU.x1$.push(new C.fp9(this.a))},
$S:8}
C.fp9.prototype={
$1(d){return this.a.$0()},
$S:8}
C.fcn.prototype={
$1(d){return C.h89(this.a,this.b+1)},
$S:8}
C.fqK.prototype={
$2(d,e){var w=A.aI(d,B.bS,x.w).w.a
return new A.a5(w.a,w.b,A.cc(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:171}
C.c65.prototype={
$1(d){return d.r===this.a},
$S:235}
C.c66.prototype={
$1(d){var w=$.aP0(),v=w.a
w.sp(0,v+1)
return v},
$S:1643}
C.c67.prototype={
$1(d){},
$S:30}
C.c64.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:235}
C.c63.prototype={
$1(d){return d.f.c9(this.a)},
$S:235}
C.fax.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:67}
C.fCi.prototype={
$1(d){return C.a5Z(this.a)},
$S:102}
C.fCj.prototype={
$1(d){var w=$.aP0()
w.sp(0,w.a+1)},
$S:27}
C.fCk.prototype={
$1(d){},
$S:30}
C.fCl.prototype={
$1(d){return new A.k7($.aP0(),new C.fCh(this.a,this.b),null,null,x.am)},
$S:1644}
C.fCh.prototype={
$3(d,e,f){var w=this.b
return new A.l1(C.ao1(this.a,!1),new C.fCg(w),w,null,x.gv)},
$S:1645}
C.fCg.prototype={
$2(d,e){var w=e.b
return new C.abU(w==null?this.a:w,null)},
$S:z+17}
C.dRp.prototype={
$1(d){return d.c},
$S:235}
C.dRq.prototype={
$1(d){return d.gbcV()},
$S:1646}
C.dRr.prototype={
$2(d,e){return d+e},
$S:93}
C.dRs.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.dRu.prototype={
$2(d,e){return B.P},
$S:36}
C.dRt.prototype={
$2(d,e){return new C.abT(J.q(this.a.c,e),null)},
$S:z+18}
C.dRo.prototype={
$1(d){return d==null?"\u2026":C.bxA(d)},
$S:1647}
C.fCo.prototype={
$3(d,e,f){var w=this
return A.rc(new C.ayx(w.a,w.b,w.c,w.d,new C.fCm(d,w.e),new C.fCn(d,w.f),null))},
$C:"$3",
$R:3,
$S:94}
C.fCm.prototype={
$0(){A.a4(this.a,!1).N(null)
C.hb8(this.b)},
$S:0}
C.fCn.prototype={
$0(){A.a4(this.a,!1).N(null)
C.hb8(this.b)},
$S:0}
C.d8v.prototype={
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
B.d.v(w,new A.J(t,new C.d8u(),A.T(t).k("J<1,r>")))}t=h.d
t===$&&A.c()
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,A.aI(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?A.a([B.bk,B.fu,B.e8],r):A.a([B.aE,B.f1,B.eG],r)
p=A.m(26)
o=A.I(B.c.j(0.4),B.r,2)
n=x.V
m=A.a([new A.ac(6,B.G,(h.a.c?B.dv:B.dD).j(0.5),B.J,36)],n)
l=A.a([],g)
if(h.a.c){k=A.dk()
j=k.a
j.$flags&2&&A.ai(j)
j[11]=0.001
k.jI(-0.35)
r=A.a([X.acx,B.rO],r)
l.push(new A.a5(i,100,new A.an(B.A,i,B.aa,B.f,A.a([A.fr(B.A,A.p(i,D.b1O,B.f,i,i,new A.o(i,i,i,i,A.a([new A.ac(4,B.G,B.cR.j(0.6),B.J,24),new A.ac(0,B.G,B.w.j(0.3),B.dn,12)],n),new A.bR(B.A,0.5,B.x,i,0,r,i,i),B.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.bK0)
l.push(B.az)
l.push(A.d(h.a.d,i,i,i,i,i,i,B.a6r,B.L,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=A.m(18)
k=A.I(B.fu,B.r,4)
B.d.v(l,A.a([B.az,D.f3F,B.P,A.p(i,A.d(r,i,i,i,i,i,i,D.eVv,B.L,i,i),B.f,i,i,new A.o(B.c,i,k,n,i,i,B.n),i,i,i,i,B.WM,i,i,1/0)],g))}B.d.v(l,A.a([B.ac,A.d(h.a.e,i,i,i,i,i,i,D.eY6,B.L,i,i)],g))
l.push(B.e_)
r=A.D(A.dW(D.f1g,h.a.r,A.dd(i,i,i,i,i,i,i,i,i,B.c,i,i,B.ce,i,i,D.aUw,i,i,i,i)),1)
h=h.a
n=h.w
l.push(A.A(A.a([r,B.aw,A.D(A.bJ(G.aOa,n,A.bk(B.c,i,i,i,h.c?B.fu:B.f1,i,B.ce,i,i,i,i,i)),1)],g),B.m,i,B.e,B.j,0,i,i))
w.push(A.e9(B.A,A.p(i,A.v(l,B.m,i,B.e,B.Q,0,B.p),B.f,i,i,new A.o(i,i,o,p,m,new A.a6(B.ax,B.aC,B.x,q,i,i),B.n),i,i,i,B.a8,B.agb,i,i,s),1+t*0.02,i,i))
return new A.an(B.A,i,B.aa,B.f,w,i)},
$S:110}
C.d8u.prototype={
$1(d){var w=null,v=d.a,u=d.b
return A.ao(w,A.db(A.eA(B.A,d.d,A.V(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.c7H.prototype={
$2(d,e){var w=null,v=this.a,u=C.hts(A.Kd(v.c,v.d))
return A.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1648}
C.c7G.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:67}
C.bXm.prototype={
$0(){},
$S:0}
C.f9w.prototype={
$1(d){return B.o.u(d)},
$S:76}
C.dKp.prototype={
$0(){return this.a.y=!0},
$S:0}
C.dKq.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.dKr.prototype={
$0(){var w=this.a
return w.w=D.Pq[w.d.aD(5)]},
$S:0}
C.dKs.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.dKt.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.dKu.prototype={
$0(){var w=this.a
return w.m(new C.dKo(w))},
$S:0}
C.dKo.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dKv.prototype={
$0(){var w=this.a
return w.m(new C.dKn(w))},
$S:0}
C.dKn.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dKy.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.dKz.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&B.a.i(t.e.a.a).length===0?B.bk:A.Y(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),r=A.m(10)
t=t.y?u:new C.dKx(t,d)
w=A.m(10)
v=B.k.aa(d,0)
return A.D(new A.C(B.jo,A.aF(!1,B.a1,!0,r,A.aK(!1,w,!0,new A.a5(u,38,A.av(A.d("$"+v,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),B.f,s,0,u,u,u,u,u,B.ae),u),1)},
$S:1649}
C.dKx.prototype={
$0(){var w=this.a
return w.m(new C.dKw(w,this.b))},
$S:0}
C.dKw.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bM(0,B.c3)},
$S:0}
C.dRM.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+B.cS.gct().aI(this.c)},
$S:0}
C.dRN.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.dRI.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=A.m(14),s=u?B.c.j(0.1):B.K,r=A.I(u?D.eH.j(0.5):B.K,B.r,1),q=A.V(e,u?D.eH:B.ay,w,w,w,20)
return A.D(A.aE(w,A.df(w,A.A(A.a([q,B.bn,A.d(f,w,w,w,w,w,w,A.l(w,w,u?B.c:B.ay,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.b9,B.j,0,w,w),w,w,B.bb,new A.o(s,w,r,t,w,w,B.n),B.a1,w,46,w,w,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dRK(v,d),w,w,w,w,w,w,!1,B.a9),1)},
$S:1650}
C.dRK.prototype={
$0(){var w=this.a
return w.m(new C.dRJ(w,this.b))},
$S:0}
C.dRJ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dRL.prototype={
$0(){var w=this.a,v=w.d===B.kj?"Cash App tag":"Bitcoin address"
return w.I0(this.b,v)},
$S:0}
C.dRH.prototype={
$0(){var w=this.a
return w.I0(w.gapy(),"Code")},
$S:0}
C.c6x.prototype={
$1(d){return C.hpF(A.a0(d,x.N,x.z))},
$S:z+20}
C.c6y.prototype={
$2(d,e){return d.c.aL(0,e.c)},
$S:z+6}
C.c6u.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.c6v.prototype={
$2(d,e){return d.c.aL(0,e.c)},
$S:z+6}
C.c6w.prototype={
$1(d){return d.ad()},
$S:z+23}
C.c6z.prototype={
$1(d){var w=d.c
return!w.cW(this.a.bN(-36e8))&&!w.c9(this.b)},
$S:z+7}
C.bZK.prototype={
$1(d){return C.hpG(A.a0(d,x.N,x.z))},
$S:z+24}
C.bZL.prototype={
$2(d,e){return e.b.aL(0,d.b)},
$S:z+8}
C.bZI.prototype={
$1(d){return d.ad()},
$S:z+26}
C.bZJ.prototype={
$2(d,e){return e.b.aL(0,d.b)},
$S:z+8}
C.bZN.prototype={
$1(d){var w=d.b
return!w.cW(this.a)&&!w.c9(this.b)},
$S:z+27}
C.c6G.prototype={
$1(d){return d.ad()},
$S:z+28}
C.c6F.prototype={
$1(d){return C.fZV(A.a0(x.f.a(d),x.N,x.z))},
$S:z+29}
C.c6E.prototype={
$1(d){return d.ad()},
$S:z+30}
C.c6D.prototype={
$1(d){return C.ht6(A.a0(x.f.a(d),x.N,x.z))},
$S:z+31}
C.c6I.prototype={
$1(d){return C.ht5(A.a0(x.f.a(d),x.N,x.z))},
$S:z+32}
C.c6J.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+2}
C.c6K.prototype={
$1(d){return d.ad()},
$S:z+34}
C.dVr.prototype={
$1(d){return d.b8n(A.bl(d.e,!0,x.u))},
$S:z+36}
C.dVs.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+2}
C.dVl.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dVm.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dV4.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.J(w,this.b)},
$S:0}
C.dV5.prototype={
$1(d){return new C.Os(this.a,null)},
$S:z+9}
C.dV6.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=B.d.be(t,new C.dV3(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){B.d.cw(u.d,w)
u.I9()}},
$S:0}
C.dV3.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dVi.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(A.E(["role","admin","text",this.b],w,w))},
$S:0}
C.dVj.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(A.E(["role","ai","text",v],t,t))}else{v=t.d
v===$&&A.c()
t.d=C.hTe(v,w[0],w[3])
t.I9()
t=w[2]
if(t==null)t="Created "+J.ab(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(A.E(["role","ai","text",t],w,w))}},
$S:0}
C.dVk.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=B.d.gcX(v).Q
v.toString
w.hT(v)}},
$S:8}
C.dVc.prototype={
$1(d){return new C.Os(this.a,null)},
$S:z+9}
C.dVd.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dVb.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cw(w,this.b)},
$S:0}
C.dVh.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&A.c()
v=B.d.cw(w,s)
B.d.cm(t.d,u.a,v)
t.I9()},
$S:0}
C.dVg.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
return new C.ZF(u[w],new C.dVf(v,w),null)},
$S:z+59}
C.dVf.prototype={
$1(d){var w=this.a
return w.m(new C.dVe(w,this.b,d))},
$S:z+40}
C.dVe.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dV8.prototype={
$0(){var w=this.a
return w.m(new C.dV7(w))},
$S:0}
C.dV7.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dV9.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?B.cm:B.aJ
return new A.C(B.eY,A.d(t+": "+A.t(s),w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?B.a4:B.cs,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:109}
C.dVa.prototype={
$1(d){return this.a.a_O()},
$S:2}
C.dVq.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.rL:B.c
u=A.m(16)
t=A.m(16)
s=l?B.aJ:B.aK
r=w.d
q=A.b0(r).j(0.15)
p=A.m(12)
q=A.p(n,A.V(B.aiM,l?B.bI:B.ak,n,n,n,20),B.f,n,n,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.bR,n,n,n)
p=A.b0(r).j(0.12)
o=A.m(8)
o=A.p(n,A.V(w.c,A.b0(r),n,n,n,18),B.f,n,n,new A.o(p,n,n,o,n,n,B.n),n,n,n,n,B.hu,n,n,n)
r=A.A(A.a([o,B.aw,A.D(A.d(w.b,n,n,n,n,n,n,A.l(n,n,l?B.aP:B.M,n,n,n,n,n,n,n,n,n,n,n,B.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),B.m,n,B.e,B.j,0,n,n)
p=w.e.length
return new A.C(B.d8,A.aF(!1,B.a1,!0,u,A.dO(!1,n,n,n,!0,n,n,n,!0,n,new H.asF(q,e,!0,n),n,n,n,n,new C.dVn(m,e),!1,n,n,new A.b7(t,new A.az(s,1,B.r,-1)),n,n,A.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,A.l(n,n,l?B.bI:B.ak,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,A.Bf(n,n,n,new C.dVo(),B.J,new C.dVp(m,e),B.cj,n,x.N),n),B.f,v,0,n,n,n,n,n,B.ae),new A.cz(w.a,x.W))},
$S:109}
C.dVp.prototype={
$1(d){var w=this
if(d==="edit")w.a.a8u(w.b)
if(d==="questions")w.a.Xi(w.b)
if(d==="delete")w.a.bGr(w.b)},
$S:2}
C.dVo.prototype={
$1(d){return D.cBz},
$S:137}
C.dVn.prototype={
$0(){return this.a.Xi(this.b)},
$S:0}
C.cId.prototype={
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
return A.aK(!1,s,!0,A.p(s,A.V(d,A.b0(t),s,s,s,s),B.f,s,s,new A.o(q,s,u,v,s,s,B.n),s,s,s,s,B.cj,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cIc(r,d),s,s,s,s,s,s,s)},
$S:1651}
C.cIc.prototype={
$0(){var w=this.a
return w.m(new C.cIa(w,this.b))},
$S:0}
C.cIa.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cIe.prototype={
$1(d){var w=null,v=this.a,u=A.b0(d),t=v.f
t===$&&A.c()
return A.aE(w,A.ho(u,w,t===d?D.bHt:w,w,14),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cIb(v,d),w,w,w,w,w,w,!1,B.a9)},
$S:448}
C.cIb.prototype={
$0(){var w=this.a
return w.m(new C.cI9(w,this.b))},
$S:0}
C.cI9.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cIf.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.cIg.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=B.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&A.c()
v=v.f
v===$&&A.c()
t=u.cCY(v,w,t)
A.a4(this.b,!1).N(t)
return null},
$S:0}
C.eI3.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return w.push(this.b)},
$S:0}
C.eI4.prototype={
$1(d){return new C.ZE(this.a,null)},
$S:z+41}
C.eIa.prototype={
$2(d,e){return B.P},
$S:36}
C.eI9.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.rL:B.c
u=A.m(14)
t=A.m(14)
s=l?B.aJ:B.aK
r=w.d
if(r!=null&&r.length!==0){q=A.m(8)
r=A.bv(q,K.aNI(n,B.bQ,36,B.pq,l?B.bI:B.ak,r,48),B.ap)}else r=A.V(D.YY,A.b0(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=A.d(q,n,2,B.a2,n,n,n,A.l(n,n,l?B.aP:B.M,n,n,n,n,n,n,n,n,n,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ab(w.c)
o=w.e?" \xb7 Printable":""
return A.aF(!1,B.a1,!0,u,A.dO(!1,n,n,n,!0,n,n,n,!0,n,r,n,n,n,n,new C.eI7(m,w,e),!1,n,n,new A.b7(t,new A.az(s,1,B.r,-1)),n,n,A.d(""+p+" block(s)"+o,n,n,n,n,n,n,A.l(n,n,l?B.bI:B.ak,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,A.aH(n,n,n,n,D.bFU,n,n,n,new C.eI8(m,e),n,n,n,n,n,n),n),B.f,v,0,n,n,n,n,n,B.ae)},
$S:75}
C.eI8.prototype={
$0(){var w=this.a
w.m(new C.eI5(w,this.b))
w.auS()},
$S:0}
C.eI5.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cw(w,this.b)},
$S:0}
C.eI7.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.aXX(u.b),$async$$0)
case 2:s=e
if(s!=null){t.m(new C.eI6(t,u.c,s))
t.auS()}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eI6.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eI_.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eHY.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
return new C.Uc(w,"Answer Document",null)},
$S:z+42}
C.eHZ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eI1.prototype={
$0(){var w,v,u=this.a,t=u.a.c,s=u.d
s===$&&A.c()
s=B.a.i(s.a.a)
w=u.e
w===$&&A.c()
v=u.f
u=u.r
if(v==null)v=t.d
A.a4(this.b,!1).N(new C.ie(t.a,s,w,v,u,t.f))
return null},
$S:0}
C.eI2.prototype={
$1(d){var w=this.a
return w.m(new C.eI0(w,d))},
$S:9}
C.eI0.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.c6A.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fr7.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dW1.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.dVI.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,new C.lr("image","",this.b,null))},
$S:0}
C.dVN.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,new C.lr("video","","data:video/mp4;base64,"+B.cS.gct().aI(this.b),null))},
$S:0}
C.dVL.prototype={
$1(d){var w=null,v=x.p,u=A.v(A.a([A.aL(w,B.T,!1,w,!0,B.q,w,A.aM(),this.a,w,w,w,w,w,2,D.bLR,B.y,!0,w,!0,w,!1,w,B.ag,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.am,w,w,w,w),A.aL(w,B.T,!1,w,!0,B.q,w,A.aM(),this.b,w,w,w,w,w,2,D.bLQ,B.y,!0,w,!0,w,!1,w,B.ag,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.am,w,w,w,w)],v),B.m,w,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bK(!1,B.dd,w,w,!0,w,w,new C.dVJ(d),w,w),A.bJ(D.fd7,new C.dVK(d),w)],v),w,w,w,u,w,w,w,w,D.f0C,w)},
$S:19}
C.dVJ.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.dVK.prototype={
$0(){A.a4(this.a,!1).N(!0)
return null},
$S:0}
C.dVM.prototype={
$0(){var w,v=this.a.e
v===$&&A.c()
w=B.a.i(this.b.a.a)
return B.d.J(v,new C.lr("link","",B.a.i(this.c.a.a),w))},
$S:0}
C.dVE.prototype={
$1(d){return B.a.i(d)},
$S:13}
C.dVF.prototype={
$1(d){return d.length!==0},
$S:3}
C.dVG.prototype={
$1(d){return B.a.i(B.a.e6(d,A.af("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.dVH.prototype={
$1(d){return d.length!==0},
$S:3}
C.dVS.prototype={
$0(){var w=this.a.bzR()
A.a4(this.b,!1).N(w)
return null},
$S:0}
C.dVT.prototype={
$0(){return this.a.auT("**","**")},
$S:0}
C.dVU.prototype={
$0(){return this.a.auT("*","*")},
$S:0}
C.dVV.prototype={
$0(){return this.a.auT("__","__")},
$S:0}
C.dVW.prototype={
$0(){return this.a.aW9("## Section title")},
$S:0}
C.dVX.prototype={
$0(){return this.a.aW9("\u2022 First point\n\u2022 Second point")},
$S:0}
C.dVY.prototype={
$0(){},
$S:0}
C.dVZ.prototype={
$0(){var w=this.a
w.m(new C.dVR(w))},
$S:0}
C.dVR.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,D.dr6)},
$S:0}
C.dW_.prototype={
$0(){var w=this.a
w.m(new C.dVQ(w))},
$S:0}
C.dVQ.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,D.dr7)},
$S:0}
C.dW0.prototype={
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
return A.CH(u,v,B.al1,w,u,new C.dVP(this.a,d),u)},
$S:z+45}
C.dVP.prototype={
$0(){var w=this.a
return w.m(new C.dVO(w,this.b))},
$S:0}
C.dVO.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.cw(w,this.b.a)},
$S:0}
C.dVB.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.aR6},
$S:0}
C.dVC.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.fAq},
$S:0}
C.dVt.prototype={
$0(){var w=this.a
w.d=D.aR5
w.f=w.e=null},
$S:0}
C.dVu.prototype={
$0(){var w=this.a
w.d=D.aR6
w.f=null},
$S:0}
C.dVD.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+2}
C.dVw.prototype={
$2(d,e){var w=this.a,v=w.gb2B()[e]
return new C.aar(v,this.b,new C.dVv(w,v),null)},
$S:z+46}
C.dVv.prototype={
$0(){return this.a.c2g(this.b.a)},
$S:0}
C.dVy.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+47}
C.dVA.prototype={
$2(d,e){return B.S},
$S:36}
C.dVz.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.rL:B.c,p=A.m(16),o=A.m(16),n=A.m(16),m=A.I(r?B.aJ:B.aK,B.r,1),l=A.a([new A.ac(0,B.G,B.w.j(r?0.28:0.06),B.dz,8)],x.V),k=A.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=A.m(10)
v=A.m(10)
k.push(A.bv(w,K.aNI(v,B.bQ,52,D.YY,r?B.bI:B.ak,j,52),B.ap))}else{j=u.d.d
w=A.b0(j).j(0.15)
v=A.m(12)
k.push(A.p(t,A.V(D.YY,A.b0(j),t,t,t,24),B.f,t,t,new A.o(w,t,t,v,t,t,B.n),t,52,t,t,t,t,t,52))}k.push(B.bd)
k.push(A.D(A.d(s.b,t,t,t,t,t,t,A.l(t,t,r?B.aP:B.M,t,t,t,t,t,t,t,t,13,t,t,B.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(A.V(B.ee,r?B.bI:B.ak,t,t,t,22))
return A.aF(!1,B.a1,!0,p,A.aK(!1,o,!0,A.p(t,A.A(k,B.m,t,B.e,B.j,0,t,t),B.f,t,t,new A.o(t,t,m,n,l,t,B.n),t,t,t,t,B.bm,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dVx(u.a,s),t,t,t,t,t,t,t),B.f,q,0,t,t,t,t,t,B.ae)},
$S:75}
C.dVx.prototype={
$0(){return this.a.c8Z(this.b)},
$S:0}
C.c6C.prototype={
$1(d){return new C.aaj(d,this.a,null)},
$S:z+48}
C.cBU.prototype={
$0(){var w=this.a.c,v=w.c,u=A.oe(v==null?w.b:v)
if(u!=null)A.iO(u,B.fi,null)},
$S:0}
C.cBV.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.cBW.prototype={
$1(d){var w=null,v=this.a.d.a,u=A.d("\u2022  ",w,w,w,w,w,w,A.l(w,w,v?B.cm:B.aJ,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=B.a.i(d)
return new A.C(B.oj,A.A(A.a([u,A.D(A.d(t,w,w,w,w,w,w,A.l(w,w,v?B.cm:B.aJ,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.F,w,B.e,B.j,0,w,w),w)},
$S:130}
C.dcN.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dcP.prototype={
$0(){return this.a.m(new C.dcO(this.b))},
$S:0}
C.dcO.prototype={
$0(){var w=this.a
return w.a.f?w.fX(0):w.po(0)},
$S:0}
C.f9g.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.dWf.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.BR)w.z=v
else w.Q=v},
$S:0}
C.dW6.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=B.d.gcX(v).Q
v.toString
w.lQ(v,B.cp,B.eM)},
$S:8}
C.dW8.prototype={
$1(d){return J.q(d,"role")==="ai"},
$S:95}
C.dW9.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.E(["role","user","text",this.b],v,v))
w.d.bM(0,B.c3)
w.r=!0},
$S:0}
C.dWa.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.E(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.dWb.prototype={
$1(d){var w=J.a7(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+A.t(w.h(d,"text"))},
$S:150}
C.dWc.prototype={
$0(){var w=x.N
return this.a.f.push(A.E(["role","ai","text",this.b],w,w))},
$S:0}
C.dWd.prototype={
$0(){var w=x.N
return this.a.f.push(A.E(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.dWe.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dW7.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=A.mz(l,B.bA.j(0.9),l,l,l,l,l,2,l,l)
return new A.C(B.c0,A.A(A.a([new A.a5(22,22,k,l),B.aw,A.d("Writing full song\u2026",l,l,l,l,l,l,A.l(l,l,this.b?B.ay:B.dy,l,l,l,l,l,l,l,l,12,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),B.m,l,B.e,B.j,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?B.a7:B.a3
k=k.c
k.toString
k=A.aI(k,B.bS,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new A.a6(B.a3,B.a7,B.x,A.a([B.aD,B.bA.j(0.85)],x.O),l,l)
else{q=x.O
q=new A.a6(B.a3,B.a7,B.x,v?A.a([B.bj,B.M],q):A.a([B.c,B.aP],q),l,l)}p=A.a([new A.ac(0,B.G,(u?B.bA:B.aD).j(0.22),B.jc,14)],x.V)
o=A.I(B.c.j(u?0.2:0.08),B.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=B.c
else v=v?B.aK:B.bh
n=u?13.5:15
m=u?B.bi:B.cD
return new A.bI(t,l,l,A.p(l,A.d(w,l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?B.a4:B.cs,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,new A.aZ(0,k.a.a*0.94,0,1/0),new A.o(l,l,o,new A.bs(B.jW,B.jW,new A.aV(s,s),new A.aV(r,r)),p,q,B.n),l,l,l,B.kB,B.j6,l,l,l),l)},
$S:40}
C.dWm.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&A.c()
w=m.x
w===$&&A.c()
v=A.m(22)
u=this.b
t=x.O
s=u?A.a([D.abc,B.M,B.no],t):A.a([B.qp,B.qk,B.p6],t)
w=A.a([new A.ac(-4,B.G,B.aD.j(0.35+w*0.25),B.dn,28)],x.V)
r=A.I(B.c.j(u?0.08:0.5),B.r,1)
q=A.dk()
p=q.a
p.$flags&2&&A.ai(p)
p[11]=0.001
m=m.x
m===$&&A.c()
q.ft(m*0.08)
q=A.fr(B.A,A.p(o,D.bCD,B.f,o,o,new A.o(o,o,A.I(B.aM.j(0.6),B.r,2),o,o,D.e56,B.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=A.nA(B.jf,D.fhs,new C.dWj())
p=x.p
m=A.a([A.A(A.a([q,B.bd,A.D(A.v(A.a([m,A.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,A.l(o,o,u?B.aQ:B.aX,o,o,o,o,o,o,o,o,10,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),B.F,o,B.e,B.j,0,B.p),1)],p),B.m,o,B.e,B.j,0,o,o),B.ac,A.A(A.a([n.atc(D.BR,"Swahili","\ud83c\uddf9\ud83c\uddff",u),B.ab,n.atc(D.aDa,"English","\ud83c\uddec\ud83c\udde7",u),B.ab,n.atc(D.BS,"Mix","\ud83d\udd25",u)],p),B.m,o,B.e,B.j,0,o,o)],p)
if(n.x!==D.BS){t=A.a([B.P,n.crw(u)],p)
if(n.w){q=n.x===D.BR?D.a1H:D.a0V
p=A.T(q).k("J<1,r>")
q=A.B(new A.J(q,new C.dWk(n,u),p),p.k("aj.E"))
t.push(new A.C(B.kb,A.c4(B.bE,q,B.bx,6,6),o))}B.d.v(m,t)}else{t=A.a([B.bA.j(0.22),B.aD.j(0.12)],t)
q=A.m(12)
p=A.I(B.bA.j(0.45),B.r,1)
m.push(new A.C(B.kb,A.p(o,A.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,A.l(o,o,u?B.ij:B.ky,o,o,o,o,o,o,o,o,10,o,o,B.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),B.f,o,o,new A.o(o,o,p,q,o,new A.a6(B.a3,B.a7,B.x,t,o,o),B.n),o,o,o,o,B.bR,o,o,o),o))}m.push(B.P)
t=x.dc
n=A.B(new A.J(D.cYb,new C.dWl(n,u),t),t.k("aj.E"))
m.push(A.A(n,B.m,o,B.e,B.j,0,o,o))
return A.p(o,A.v(m,B.aj,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,r,v,w,new A.a6(B.ax,B.aC,B.x,s,o,o),B.n),o,o,o,I.af6,I.afl,o,o,o)},
$S:91}
C.dWj.prototype={
$1(d){return D.bPs.aw(0,d)},
$S:65}
C.dWk.prototype={
$1(d){return this.a.crx(d,this.b)},
$S:z+49}
C.dWl.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aDc?6:0,m=o?5:0,l=A.m(12)
if(o){w=this.b
v=w?B.aD.j(0.45):B.aD.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=B.w.j(w?0.25:0.05)
u=v
v=w
w=u}t=A.m(12)
p=p.r?q:new C.dWi(p,d)
s=C.huB(d)
if(o)r=B.c
else r=v?B.ad:B.bh
r=A.d(s,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.huC(d)
if(o)v=B.ad
else v=v?B.bZ:B.dy
return A.D(new A.C(new A.N(0,0,n,0),A.aF(!1,B.a1,!0,l,A.aK(!1,t,!0,new A.C(F.KZ,A.v(A.a([r,A.d(s,q,q,q,q,q,q,A.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.e,B.j,0,B.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,w,m,q,q,q,q,q,B.ae),q),1)},
$S:z+50}
C.dWi.prototype={
$0(){var w=this.a
return w.m(new C.dWh(w,this.b))},
$S:0}
C.dWh.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dWo.prototype={
$0(){var w=this.a
return w.m(new C.dWn(w))},
$S:0}
C.dWn.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dW5.prototype={
$0(){var w=this.a
return w.m(new C.dW4(w,this.b))},
$S:0}
C.dW4.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.BS
if(v===D.aDa&&w.Q==null)w.Q=B.d.gK(D.a0V).a},
$S:0}
C.dWp.prototype={
$0(){return this.a.cne(this.b.a)},
$S:0}
C.dWg.prototype={
$0(){return this.a.I1(this.b)},
$S:0}
C.dW2.prototype={
$1(d){return this.a.aWa()},
$S:2}
C.dW3.prototype={
$0(){return this.a.aWa()},
$S:0}
C.fD8.prototype={
$1(d){var w=this
return new C.Yo(w.a,w.b,w.c,new C.fD7(w.d),null)},
$S:z+51}
C.fD7.prototype={
$0(){return J.lL(this.a.bb())},
$S:0}
C.da6.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.bda()},
$S:27}
C.da7.prototype={
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
p=q?B.dS:B.h6
o=B.o.F(w,4)
q=q?B.aL:B.aI
return A.ao(n,A.db(A.V(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:309}
C.dac.prototype={
$0(){},
$S:0}
C.dab.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&A.c()
w=t.x
w===$&&A.c()
v=B.lS.av(0,B.k.D(w,0,1))
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793)
w=A.dk()
u=w.a
u.$flags&2&&A.ai(u)
u[11]=0.0028
w.ft(t*0.08)
w.jI(0.12)
return A.e9(B.A,A.fr(B.A,e,null,w,!0),0.5+v*0.5,null,null)},
$S:45}
C.da8.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=0.55+r*0.45
r=A.p(t,t,B.f,t,t,new A.o(t,t,t,t,A.a([new A.ac(6,B.G,B.aL.j(w*0.5),B.J,36)],x.V),t,B.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new A.an(B.A,t,B.aa,B.q,A.a([r,new A.a5(96,96,A.mz(B.c.j(0.08),B.aL,t,t,t,t,t,6,u/v,t),t),A.d(""+s.a.c,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,38,t,t,B.u,t,t,!0,t,t,t,t,t,A.a([new A.cP(B.aL.j(w),B.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:110}
C.da9.prototype={
$1(d){return D.bPw.aw(0,d)},
$S:65}
C.daa.prototype={
$0(){var w=this.a
w.a.bda()
w.a.e.$0()},
$S:0}
C.c8A.prototype={
$1(d){var w=!1
if(B.a.i(d.b.toLowerCase())===this.a)if(d.d===B.fo)if(d.x===B.ds){w=d.w
w=B.a.i(w==null?"":w)===this.b}return w},
$S:16}
C.c8N.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e54.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.e5L.prototype={
$1(d){var w=this.a
if(w.c!=null)w.Oz()},
$S:8}
C.e5M.prototype={
$1(d){var w=$.aU.p2$
if(w===B.rv||w===B.rw)return
this.a.DT()},
$S:14}
C.e5N.prototype={
$1(d){this.a.ctD()},
$S:14}
C.e5t.prototype={
$0(){this.a.Iu(this.b.d,!1)},
$S:0}
C.e5u.prototype={
$0(){},
$S:0}
C.e5v.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.e5w.prototype={
$0(){},
$S:0}
C.e5x.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e5y.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.e5z.prototype={
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
C.e5o.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=A.bl(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=A.bl(v[1],!0,x.N)
w.NZ()
w.a6F()},
$S:0}
C.e55.prototype={
$0(){this.b.Iu(this.c.d+this.a.a,!1)},
$S:0}
C.e5p.prototype={
$1(d){var w=d.d
return(w===B.fo||w===B.eK)&&d.x===B.ds},
$S:16}
C.e5q.prototype={
$1(d){return d.a},
$S:157}
C.e5r.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e5s.prototype={
$0(){},
$S:0}
C.e59.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bl(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=A.bl(v[0],!0,x.N)},
$S:0}
C.e5a.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.e5i.prototype={
$0(){},
$S:0}
C.e5f.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.e5g.prototype={
$0(){var w=this.a,v=A.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e5h.prototype={
$0(){var w=this.a,v=A.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e5j.prototype={
$0(){return this.a.z=!0},
$S:0}
C.e5k.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new A.v2(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.e5l.prototype={
$0(){return this.a.z=!1},
$S:0}
C.e5n.prototype={
$0(){var w=this.a
return w.m(new C.e5m(w))},
$S:0}
C.e5m.prototype={
$0(){return this.a.y=1},
$S:0}
C.e5b.prototype={
$0(){return this.a.y=1},
$S:0}
C.e5c.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.e5D.prototype={
$1(d){return d.a.length===0},
$S:16}
C.e5E.prototype={
$2(d,e){return e.y.aL(0,d.y)},
$S:71}
C.e5I.prototype={
$0(){var w=this.a
return w.m(new C.e5B(w))},
$S:0}
C.e5B.prototype={
$0(){return this.a.y=1},
$S:0}
C.e5J.prototype={
$0(){var w=this.a
return w.m(new C.e5A(w))},
$S:0}
C.e5A.prototype={
$0(){return this.a.y=2},
$S:0}
C.e5K.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.e5F.prototype={
$2$cloudRequest(d,e){return this.a.aXg(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1653}
C.e5G.prototype={
$0(){return this.a.DT()},
$S:1}
C.e5H.prototype={
$0(){var w=this.a
return w.m(new C.e5C(w))},
$S:0}
C.e5C.prototype={
$0(){var w=this.a
return w.y=B.o.D(w.y-1,0,2)},
$S:0}
C.e58.prototype={
$0(){A.eO()
var w=this.a
w.m(new C.e57(w))},
$S:0}
C.e57.prototype={
$0(){return this.a.y=0},
$S:0}
C.e56.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=A.bCk(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.c.j(0.55),B.r,1.2),t,A.a([new A.ac(1,B.G,B.av.j(0.55),B.J,18)],x.V),D.bNC,B.a6),t,t,t,t,t,t,t,t),B.et,B.ta,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=A.a([],w)
for(u=0;u<3;++u)v.push(r.bZn(u))
return new A.an(B.W,t,B.aa,B.q,A.a([q,A.A(v,B.m,t,B.e,B.j,0,t,t)],w),t)},
$S:64}
C.e5e.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
A.eO()
w.m(new C.e5d(w,v))},
$S:0}
C.e5d.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.deA.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===B.fo||v===B.eK)return!0
if(d.c!==0)v=B.a.t(w,"clock-in daily earnings")||B.a.t(w,"clock-in earnings")
else v=!1
return v},
$S:16}
C.deB.prototype={
$1(d){return new A.Q(Date.now(),0,!1)},
$S:676}
C.deC.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new A.Q(Date.now(),0,!1)
u=A.dy(C.fKh(v.c,u))
w=this.c?new C.dez(v):null
return v.b4m(this.b,B.pA,D.eH,w,"Today","$"+u,D.eH)},
$S:1655}
C.dez.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.deD.prototype={
$2(d,e){var w=this.a
return w.b4m(this.b,B.jP,B.c8,w.w,"Balance","$"+A.dy(A.Kd(w.c.a,new C.dey(w))),B.cx)},
$S:58}
C.dey.prototype={
$0(){return this.a.c.d},
$S:79}
C.det.prototype={
$0(){this.a.a.cKB()
return null},
$S:0}
C.deu.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(w,w,w,new C.bsT(v,w),B.at)},
$S:69}
C.dev.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b96(v,!0,B.av,D.o7,w)}else{v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b95(v,D.o7,w)}return A.b3(w,w,w,v,B.at)},
$S:69}
C.dew.prototype={
$1(d){return new A.Q(Date.now(),0,!1)},
$S:676}
C.dex.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new A.Q(Date.now(),0,!1)
w=r.a
v=w.a.cJo(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:B.k.D(v/u,0,1)}u=w.d
u===$&&A.c()
s=w.e
s===$&&A.c()
return A.c6(new A.h2(A.a([u,s],x.U)),new C.des(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1656}
C.des.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=A.a([],m),k=o.b
if(k)B.d.v(l,A.ip(7,new C.der(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&A.c()
v=v.x
v===$&&A.c()
u=o.d
l.push(A.b3(n,n,n,new C.b94(o.c,v,k,u,D.o7,D.bgz,n),D.eDn))
v=A.I(B.c.j(0.1),B.r,1.2)
if(k)t=B.v8
else t=o.e?B.v1:D.bxN
t=A.V(t,k?D.o7:B.b4,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=A.d(s,n,n,n,n,n,n,A.l(n,n,B.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,B.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+A.dy(w.f&&w.d>0?w.d:o.f)}q=k?D.o7:B.c
w=A.d(w,n,n,n,n,n,n,A.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,B.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=A.m(999)
p=u.j(0.16)
u=A.I(u.j(0.5),B.r,1)
l.push(A.p(n,A.v(A.a([t,B.ao,s,B.au,w,B.P,A.p(n,A.d(o.r,n,n,n,n,n,n,A.l(n,n,k?D.o7:B.od,n,n,n,n,n,n,n,n,9,n,n,B.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),B.f,n,n,new A.o(p,n,u,q,n,n,B.n),n,n,n,n,B.kD,n,n,n)],m),B.m,n,B.b9,B.j,0,B.p),B.f,n,n,new A.o(B.K,n,v,n,n,n,B.a6),n,176,n,n,n,n,n,176))
return A.av(new A.a5(276,276,new A.an(B.A,n,B.aa,B.f,l,n),n),n,n,n)},
$S:204}
C.der.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=B.k.F(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=B.o.F(d,3)
t=B.o.F(d,2)
return A.ao(s,A.e2(A.db(A.p(s,s,B.f,s,s,new A.o(s,s,s,A.m(40),s,new A.bR(B.A,0.5,B.x,s,0,A.a([D.o7.j(0.38),B.c.j(0.08),B.K],x.O),s,s),B.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),!0,s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:222}
C.deU.prototype={
$0(){},
$S:0}
C.deV.prototype={
$0(){},
$S:0}
C.deW.prototype={
$1(d){return d.x===B.ds},
$S:16}
C.deG.prototype={
$0(){return this.a.a.d.d},
$S:79}
C.deF.prototype={
$0(){var w,v
A.eO()
w=this.a
v=this.b
w.m(new C.deE(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)A.fe(null,x.H)}},
$S:0}
C.deE.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.deR.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=A.m(12),q=s?w.b.j(0.18):B.c.j(0.04),p=A.I(s?w.b.j(0.7):B.c.j(0.08),B.r,1)
return A.D(new A.C(B.jo,A.aE(v,A.df(B.A,A.d("$"+t,v,v,v,v,v,v,A.l(v,v,s?w.b:B.ad,v,v,v,v,v,v,v,v,13,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,B.bb,new A.o(q,v,p,r,v,v,B.n),B.hV,v,38,v,v,v,v,v),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.deT(u,d),v,v,v,v,v,v,!1,B.a9),v),1)},
$S:1658}
C.deT.prototype={
$0(){A.eO()
var w=this.a
w.m(new C.deS(w,this.b))},
$S:0}
C.deS.prototype={
$0(){var w=""+this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.deQ.prototype={
$4$bold$color(d,e,f,g){var w=null,v=A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?B.c:g,t=f?15:13
return new A.C(B.wZ,A.A(A.a([v,B.b2,A.d(e,w,w,w,w,w,w,A.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?B.u:B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1659}
C.deP.prototype={
$1(d){return this.a.m(new C.deO())},
$S:2}
C.deO.prototype={
$0(){},
$S:0}
C.deJ.prototype={
$1(d){return this.a.aT0(d)&&!A.fRF(d)},
$S:16}
C.deK.prototype={
$2(d,e){return e.y.aL(0,d.y)},
$S:71}
C.deL.prototype={
$0(){return this.a.a.d.d},
$S:79}
C.deM.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return A.b(x.r.b(s)?s:A.dR(s,x.H),$async$$0)
case 2:if(t.c!=null)t.m(new C.deI())
t.lM("Balance refreshed.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.deI.prototype={
$0(){},
$S:0}
C.deN.prototype={
$0(){var w=this.a
return w.m(new C.deH(w))},
$S:0}
C.deH.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fn6.prototype={
$2(d,e){return e.y.aL(0,d.y)},
$S:71}
C.fh1.prototype={
$1(d){var w=J.a7(d),v=w.h(d,"toEmail"),u=!1
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.y(v,this.b)){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fxu.prototype={
$1(d){var w=J.a7(d),v=w.h(d,"toEmail")
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fh0.prototype={
$1(d){var w,v,u
if(!C.hQ5(d,this.a))return!1
w=J.a7(d)
v=w.h(d,"sessionUpdatedAt")
v=A.bi(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=A.bi(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=A.bi(J.k(w==null?"":w))}if(u!=null&&B.o.an(new A.Q(Date.now(),0,!1).by(u).a,36e8)>72)return!1
return!0},
$S:4}
C.f6P.prototype={
$1(d){var w=this.a
if(B.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:74}
C.fwj.prototype={
$0(){return $.fPf=null},
$S:11}
C.fwk.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:7}
C.fue.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:7}
C.fuf.prototype={
$0(){var w,v=this.a
$.fP3.W(0,v)
w=C.tC(this.b,v)
if(w!=null)A.PM(A.a([A.a0(w,x.N,x.z)],x._),v)},
$S:0}
C.fyA.prototype={
$1(d){return new C.Zb(this.a,this.b,null)},
$S:z+56}
C.e_k.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.e_n.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.e_o.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.m(new C.e_m(w))},
$S:2}
C.e_m.prototype={
$0(){return this.a.f=""},
$S:0}
C.e_p.prototype={
$1(d){return this.a.aWo()},
$S:2}
C.e_q.prototype={
$0(){var w=this.a
return w.m(new C.e_l(w,this.b))},
$S:0}
C.e_l.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fgc.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+B.a.b_(d,1)},
$S:13}
C.fgb.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+B.a.b_(d,1)},
$S:13}
C.fwA.prototype={
$1(d){var w,v=x.f
if(v.b(d))return A.a0(d,x.N,x.z)
try{v=A.a0(v.a(d.ad()),x.N,x.z)
return v}catch(w){return A.U(x.N,x.z)}},
$S:12}
C.fwB.prototype={
$1(d){return J.cw(d)},
$S:4}
C.fqv.prototype={
$1(d){return d.a!=="send_email"},
$S:278}
C.fw1.prototype={
$1(d){var w=null,v=B.w.j(0.35),u=A.m(10),t=A.I(B.b8,B.r,1)
return A.p(B.A,A.d(d,w,w,w,w,w,w,B.iU,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,86,w,B.eO,w,w,w,72)},
$S:678}
C.cal.prototype={
$1(d){return J.k(d)},
$S:17}
C.cam.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b6(d,new C.cak(),x.S)
w=A.B(w,w.$ti.k("aj.E"))
return w}return A.c1(7,0,!1,x.S)},
$S:679}
C.cak.prototype={
$1(d){var w
if(A.iD(d))w=d
else{w=A.c7(J.k(d),null)
if(w==null)w=0}return w},
$S:415}
C.can.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b6(d,new C.caj(),x.S)
w=A.B(w,w.$ti.k("aj.E"))
return w}return A.c1(8,0,!1,x.S)},
$S:679}
C.caj.prototype={
$1(d){var w
if(A.iD(d))w=d
else{w=A.c7(J.k(d),null)
if(w==null)w=0}return w},
$S:415}
C.cap.prototype={
$1(d){return A.bl(d,!0,x.S)},
$S:680}
C.caq.prototype={
$1(d){return A.bl(d,!0,x.S)},
$S:680}
C.cai.prototype={
$1(d){var w=this.a
if(B.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:74}
C.cao.prototype={
$2(d,e){return d+e},
$S:73}
C.cah.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.q(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:73}
C.fhF.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fhz.prototype={
$0(){return this.a.$1(D.pJ)},
$S:0}
C.fhA.prototype={
$0(){return this.a.$1(D.pJ)},
$S:0}
C.fhB.prototype={
$0(){return this.a.$1(D.pJ)},
$S:0}
C.fhC.prototype={
$0(){return this.a.$1(D.pJ)},
$S:0}
C.fhD.prototype={
$0(){return this.a.$1(D.pJ)},
$S:0}
C.fhE.prototype={
$0(){return this.a.$1(D.pJ)},
$S:0}
C.f4a.prototype={
$2(d,e){var w,v,u=this,t=null,s=B.o.an(e,8),r=B.o.F(e,8),q=B.o.F(s+r,2),p=u.a,o=J.q(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.Vu:D.b5u
if(o===0)w=t
else{w=x.O
w=o===1?A.a([B.c,B.aK],w):A.a([B.bj,B.w],w)
v=n?B.aM:B.dl
w=A.p(t,t,B.f,t,t,new A.o(t,t,A.I(v,B.r,n?3:1),t,A.a([new A.ac(0,B.G,B.w.j(0.35),B.dz,4)],x.V),new A.bR(B.A,0.5,B.x,t,0,w,t,t),B.a6),t,28,t,t,t,t,t,28)}return A.aE(t,A.p(t,A.av(w,t,t,t),B.f,q,t,t,t,t,t,t,t,t,t,t),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f49(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,B.a9)},
$S:78}
C.f49.prototype={
$0(){var w=this,v=w.a,u=v.cPb(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.pJ:D.GX
w.f.$1(v)}},
$S:0}
C.fgm.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new A.a5(u,u,A.ib(!0,v,v,B.y,Q.aLw,new C.fgl(w.a,w.b,w.c,w.d,u),9,v,B.dP,B.ai,!1),v)},
$S:171}
C.fgl.prototype={
$2(d,e){var w=this,v=null,u=A.m(12),t=A.m(12),s=w.a,r=s.at[e],q=r==="X"?B.aW:B.aE
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.av(A.d(r,v,v,v,v,v,v,A.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fgk(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),B.f,B.ft,0,v,v,v,v,v,B.ae)},
$S:75}
C.fgk.prototype={
$0(){var w=this,v=w.a.cPc(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.f3B.prototype={
$1(d){return new A.C(B.jo,C.fu5(d,!1),null)},
$S:304}
C.f3C.prototype={
$1(d){return C.fu5(d,!1)},
$S:1663}
C.f3D.prototype={
$0(){var w=this,v=w.a
v.czr(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.f3E.prototype={
$0(){var w=this
w.a.czs(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.fdz.prototype={
$1(d){var w=this,v=null,u=d*6
return A.mw(v,B.bj,A.d(""+u,v,v,v,v,v,v,B.cc,v,v,v),B.dj,new C.fdy(w.a,w.b,u,w.c,w.d),v,v,new A.az(B.c.j(0.2),1,B.r,-1),v)},
$S:1664}
C.fdy.prototype={
$0(){var w=this,v=w.a,u=w.b.aD(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.fft.prototype={
$1(d){return D.d0N[d]},
$S:76}
C.ffu.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=A.a([s.aD(6),s.aD(6),s.aD(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.fcj.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.fck.prototype={
$0(){var w=this,v=w.a
if(w.b.aj()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.f4D.prototype={
$0(){var w=this,v=w.a.cEZ(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.f4C.prototype={
$1(d){var w,v=null,u=J.q(this.a.fr[5-d],this.b)
if(u===0)w=B.m0
else w=u===1?B.dD:B.r0
return new A.fF(1,A.p(v,v,B.f,v,v,new A.o(w,v,A.I(B.bF,B.r,1),v,v,v,B.a6),v,v,v,B.mR,v,v,v,v),v)},
$S:1665}
C.fcw.prototype={
$1(d){var w=this
if(w.a.b7L(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.fcx.prototype={
$0(){var w=this
if(w.a.b7L(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.f44.prototype={
$0(){var w=this
if(w.a.aj()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fm6.prototype={
$1(d){var w=J.q(d,"email")
return B.a.t(B.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fm7.prototype={
$1(d){var w,v=J.a7(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=B.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+B.a.i(J.k(v==null?"":v))+">"},
$S:52}
C.exd.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aII.prototype
w.bql=w.a_
w.bqk=w.q
w=C.aIJ.prototype
w.bqn=w.a_
w.bqm=w.q
w=C.aIK.prototype
w.bqp=w.a_
w.bqo=w.q
w=C.aJG.prototype
w.brn=w.a_
w.brm=w.q
w=C.aJf.prototype
w.bqW=w.q
w=C.aJP.prototype
w.brw=w.q
w=C.aIL.prototype
w.bqq=w.q
w=C.aJX.prototype
w.brF=w.q
w=C.aIQ.prototype
w.bqv=w.q
w=C.aJ5.prototype
w.bqM=w.q
w=C.aKD.prototype
w.bsl=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.ayv.prototype,"gbLR","bLS",19)
v(q,"gaPx","aPy",1)
v(C.ayu.prototype,"gcqz","a0A",1)
v(q=C.ayw.prototype,"gbRa","bRb",1)
v(q,"gbBy","bBz",1)
v(q=C.avH.prototype,"gcjO","cjP",1)
v(q,"gc8x","P0",0)
v(q,"gcuq","cur",1)
v(q,"gcmM","mF",0)
w(q,"gccO","ccP",25)
w(q,"gcsN","QI",33)
v(q=C.aAC.prototype,"gbJZ","Wa",0)
v(q,"gbZY","XC",0)
v(q,"gbZV","XB",0)
v(q,"gbZW","abi",0)
v(q,"gbZX","O2",0)
v(C.axT.prototype,"gbZZ","c__",1)
u(C,"hXh","hsO",58)
t(C,"fRM",0,null,["$1","$0"],["hbs",function(){return C.hbs(null)}],3,0)
t(C,"bAN",0,null,["$1","$0"],["hbr",function(){return C.hbr(null)}],3,0)
v(C.M4.prototype,"gDD","c5K",1)
v(C.aBn.prototype,"gck4","A6",0)
v(q=C.aBE.prototype,"gc8R","P2",0)
v(q,"gcdv","ZQ",0)
v(q,"gc2a","c2b",1)
v(q=C.aBQ.prototype,"gc2f","acb",0)
v(q,"gbvk","a6v",0)
v(q,"gcki","a_O",0)
s(q,"gc6e","c6f",35)
v(C.aDO.prototype,"gbvK","a6x",1)
v(q=C.aDN.prototype,"gc2e","aca",0)
v(q,"gc7P","ade",0)
v(q=C.aBS.prototype,"gbUR","aa8",0)
v(q,"gbUT","WO",0)
v(q,"gbUS","aa9",0)
v(q=C.aBR.prototype,"gby4","by5",1)
v(q,"gby6","by7",1)
v(C.aBT.prototype,"gbDM","bDN",1)
v(C.ayQ.prototype,"gc2h","c2i",1)
v(q=C.aCe.prototype,"gaWi","c2x",1)
r(q,"gaXe",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["acR","avu","aXg","aXf"],52,0,0)
r(q,"gc5s",0,4,null,["$4"],["c5t"],53,0,0)
v(q,"gc7y","Z1",0)
v(q,"gc8o","adl",0)
v(q,"gc8k","adj",0)
v(q,"gbXJ","aaT",0)
w(C.azC.prototype,"gbWy","bWz",54)
w(q=C.azE.prototype,"gcrF","crG",55)
v(q,"gcqq","cqr",1)
v(q,"gcxQ","cxR",1)
v(C.aC1.prototype,"gc2S","aWo",1)
v(C.aCQ.prototype,"gaWQ","avh",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.jq,[C.coL,C.coI,C.coJ,C.coK,C.coH,C.eT7,C.eT5,C.eT9,C.eT6,C.faQ,C.d6A,C.d6L,C.d6T,C.d6U,C.d6W,C.d6O,C.d6M,C.d6N,C.d6P,C.d6Q,C.d6G,C.d6H,C.d6F,C.d6J,C.d6K,C.d6D,C.d6C,C.d6Y,C.d70,C.dKj,C.dKi,C.dKk,C.dKh,C.dKg,C.d6u,C.d6x,C.d6y,C.d6w,C.d6v,C.d8m,C.d8n,C.d8o,C.d7C,C.d7D,C.d86,C.d7S,C.d7T,C.d7U,C.d7V,C.d7W,C.d74,C.d7B,C.d87,C.d8g,C.d84,C.d83,C.d7z,C.d7A,C.d8c,C.d8d,C.d76,C.d77,C.d7L,C.d7M,C.d7N,C.d7K,C.d7X,C.d7Y,C.d7Z,C.d8_,C.d80,C.d81,C.d8a,C.d7O,C.d7P,C.d7Q,C.d7R,C.d8e,C.d8f,C.d78,C.d79,C.d7a,C.d7b,C.d88,C.d89,C.d7J,C.d82,C.d7H,C.d8h,C.d8i,C.d8j,C.d7E,C.d7n,C.d7m,C.d7l,C.d7r,C.d7k,C.d7i,C.d7d,C.d7g,C.d7c,C.d7w,C.d7x,C.d7e,C.dbT,C.cz7,C.cyY,C.cyZ,C.czh,C.cze,C.czf,C.czg,C.cz9,C.cz8,C.cz_,C.cza,C.czA,C.czw,C.czv,C.cz5,C.cz6,C.cz2,C.czd,C.czl,C.czm,C.czn,C.czo,C.czp,C.czq,C.czr,C.czM,C.czF,C.czC,C.czH,C.czE,C.czB,C.cz0,C.czy,C.dsn,C.dso,C.dse,C.dsc,C.dsm,C.dsb,C.dsa,C.dsd,C.dsi,C.dsj,C.dsg,C.dsh,C.dsp,C.dsq,C.dsr,C.dss,C.eMZ,C.eN_,C.d1t,C.fn0,C.dyO,C.dyG,C.dyI,C.dyM,C.dyH,C.dyJ,C.dyK,C.c3f,C.fu3,C.fu2,C.ds_,C.drZ,C.ds0,C.drY,C.dRk,C.dRl,C.dRs,C.fCm,C.fCn,C.bXm,C.dKp,C.dKq,C.dKr,C.dKs,C.dKt,C.dKu,C.dKo,C.dKv,C.dKn,C.dKy,C.dKx,C.dKw,C.dRM,C.dRN,C.dRK,C.dRJ,C.dRL,C.dRH,C.dVl,C.dVm,C.dV4,C.dV6,C.dVi,C.dVj,C.dVd,C.dVb,C.dVh,C.dVe,C.dV8,C.dV7,C.dVn,C.cIc,C.cIa,C.cIb,C.cI9,C.cIf,C.cIg,C.eI3,C.eI8,C.eI5,C.eI7,C.eI6,C.eI_,C.eHZ,C.eI1,C.eI0,C.dVI,C.dVN,C.dVJ,C.dVK,C.dVM,C.dVS,C.dVT,C.dVU,C.dVV,C.dVW,C.dVX,C.dVY,C.dVZ,C.dVR,C.dW_,C.dVQ,C.dVP,C.dVO,C.dVB,C.dVC,C.dVt,C.dVu,C.dVv,C.dVx,C.cBU,C.dcN,C.dcP,C.dcO,C.dWf,C.dW9,C.dWa,C.dWc,C.dWd,C.dWe,C.dWi,C.dWh,C.dWo,C.dWn,C.dW5,C.dW4,C.dWp,C.dWg,C.dW3,C.fD7,C.dac,C.daa,C.e54,C.e5t,C.e5u,C.e5v,C.e5w,C.e5y,C.e5z,C.e5o,C.e55,C.e5s,C.e59,C.e5a,C.e5i,C.e5f,C.e5g,C.e5h,C.e5j,C.e5k,C.e5l,C.e5n,C.e5m,C.e5b,C.e5c,C.e5I,C.e5B,C.e5J,C.e5A,C.e5K,C.e5G,C.e5H,C.e5C,C.e58,C.e57,C.e5e,C.e5d,C.dez,C.dey,C.det,C.deU,C.deV,C.deG,C.deF,C.deE,C.deT,C.deS,C.deO,C.deL,C.deM,C.deI,C.deN,C.deH,C.fwj,C.fuf,C.e_k,C.e_n,C.e_m,C.e_q,C.e_l,C.fhz,C.fhA,C.fhB,C.fhC,C.fhD,C.fhE,C.f49,C.fgk,C.f3D,C.f3E,C.fdy,C.ffu,C.fck,C.f4D,C.fcx,C.f44,C.exd])
u(A.i7,[C.coM,C.eT8,C.fqP,C.fqH,C.faN,C.faM,C.faP,C.d72,C.d73,C.d6S,C.d6R,C.d6V,C.d6E,C.d6I,C.d6X,C.dKm,C.d6z,C.d8p,C.d8q,C.d8r,C.d8s,C.d8t,C.d85,C.d8b,C.d75,C.d8l,C.d8k,C.d7o,C.d7p,C.d7q,C.d7s,C.d7u,C.dbU,C.czN,C.czc,C.czb,C.czu,C.czx,C.czt,C.cz3,C.czk,C.czi,C.czz,C.czj,C.czI,C.czG,C.czL,C.bW4,C.bW3,C.bW6,C.bW5,C.dsl,C.dsk,C.dsf,C.dst,C.dsu,C.fe6,C.ffj,C.d1u,C.d1s,C.bWQ,C.fn_,C.dyP,C.dyN,C.c3g,C.fg5,C.fu1,C.c5q,C.c5p,C.c5S,C.dRi,C.dRj,C.fpn,C.fpa,C.fp9,C.fcn,C.c65,C.c66,C.c67,C.c64,C.c63,C.fax,C.fCi,C.fCj,C.fCk,C.fCl,C.fCh,C.dRp,C.dRq,C.dRo,C.fCo,C.d8u,C.c7G,C.f9w,C.dKz,C.dRI,C.c6x,C.c6u,C.c6w,C.c6z,C.bZK,C.bZI,C.bZN,C.c6G,C.c6F,C.c6E,C.c6D,C.c6I,C.c6K,C.dVr,C.dV5,C.dV3,C.dVk,C.dVc,C.dVg,C.dVf,C.dVa,C.dVp,C.dVo,C.cId,C.cIe,C.eI4,C.eHY,C.eI2,C.c6A,C.fr7,C.dW1,C.dVL,C.dVE,C.dVF,C.dVG,C.dVH,C.dW0,C.c6C,C.cBV,C.cBW,C.f9g,C.dW6,C.dW8,C.dWb,C.dWj,C.dWk,C.dWl,C.dW2,C.fD8,C.da6,C.da9,C.c8A,C.c8N,C.e5L,C.e5M,C.e5N,C.e5x,C.e5p,C.e5q,C.e5r,C.e5D,C.e5F,C.deA,C.deB,C.dew,C.der,C.deW,C.deR,C.deQ,C.deP,C.deJ,C.fh1,C.fxu,C.fh0,C.f6P,C.fwk,C.fue,C.fyA,C.e_o,C.e_p,C.fgc,C.fgb,C.fwA,C.fwB,C.fqv,C.fw1,C.cal,C.cam,C.cak,C.can,C.caj,C.cap,C.caq,C.cai,C.fhF,C.f3B,C.f3C,C.fdz,C.fft,C.fcj,C.f4C,C.fcw,C.fm6,C.fm7])
t(C.bp1,A.iN)
u(A.ag,[C.Ez,C.ajz,C.aBm,C.ajy,C.ajA,C.akq,C.agM,C.alY,C.YS,C.YT,C.Y_,C.ams,C.alX,C.MA,C.ayx,C.anp,C.ao2,C.Ub,C.Os,C.ZF,C.ZE,C.Uc,C.aol,C.azp,C.aoo,C.Yo,C.aoW,C.azB,C.azD,C.Zb,C.aqc])
u(A.ah,[C.aGi,C.aIJ,C.aJG,C.aII,C.aIK,C.beo,C.avH,C.aAC,C.bgM,C.bgN,C.axT,C.bgT,C.aJf,C.aJP,C.aIL,C.aBn,C.aBE,C.aBQ,C.b8C,C.aDO,C.aDN,C.aBS,C.aBR,C.beC,C.aJX,C.aIQ,C.buP,C.aJ5,C.azE,C.aC1,C.aKD])
u(A.kD,[C.eTa,C.faO,C.d6B,C.d71,C.d7_,C.d6Z,C.dKl,C.d7I,C.d7G,C.d7F,C.d7j,C.d7t,C.d7h,C.d7v,C.d7f,C.d7y,C.czs,C.cz4,C.czD,C.czK,C.czJ,C.cz1,C.d1r,C.dyL,C.fg6,C.fg7,C.dRm,C.fqK,C.fCg,C.dRr,C.dRu,C.dRt,C.d8v,C.c7H,C.c6y,C.c6v,C.bZL,C.bZJ,C.c6J,C.dVs,C.dV9,C.dVq,C.eIa,C.eI9,C.dVD,C.dVw,C.dVy,C.dVA,C.dVz,C.dW7,C.dWm,C.da7,C.dab,C.da8,C.e5E,C.e56,C.deC,C.deD,C.deu,C.dev,C.dex,C.des,C.deK,C.fn6,C.cao,C.cah,C.f4a,C.fgm,C.fgl])
t(C.atU,C.Ez)
u(A.aC,[C.qq,C.aci,C.M4,C.HN,C.r_,C.r0,C.lr,C.ie,C.i_,C.b6M,C.cZF,C.dcM,C.r6,C.Ud,C.MN,C.px,C.aYb,C.oO,C.aph])
t(C.ayv,C.aIJ)
t(C.bhc,C.aJG)
t(C.ayu,C.aII)
t(C.ayw,C.aIK)
u(A.mq,[C.UW,C.azq,C.ap8,C.HS,C.DV])
u(A.au,[C.a_d,C.bpx,C.ad3,C.P0,C.a5i,C.Ms,C.anX,C.abU,C.abT,C.aZ0,C.azo,C.aar,C.aYy,C.aaj,C.azC])
t(C.bgK,C.aJf)
t(C.bho,C.aJP)
t(C.bd7,C.aIL)
t(C.aBT,C.aJX)
t(C.ayQ,C.aIQ)
t(C.aCe,C.buP)
t(C.bfk,C.aJ5)
u(A.nh,[C.b96,C.b95,C.b94,C.b8x,C.bsT,C.bnU])
t(C.aCQ,C.aKD)
w(C.aII,C.M4)
w(C.aIJ,C.M4)
w(C.aIK,C.M4)
w(C.aJG,C.M4)
w(C.aJf,A.eQ)
w(C.aJP,A.c8)
w(C.aIL,A.c8)
w(C.aJX,A.c8)
w(C.aIQ,A.eQ)
w(C.aJ5,A.eQ)
v(C.buP,A.eu)
w(C.aKD,A.c8)})()
A.kj(b.typeUniverse,JSON.parse('{"bp1":{"iN":[]},"Ez":{"ag":[],"r":[]},"aGi":{"ah":["Ez<1,2>"]},"atU":{"Ez":["1","hA<1>"],"ag":[],"r":[],"Ez.T":"1","Ez.S":"hA<1>"},"ajz":{"ag":[],"r":[]},"aBm":{"ag":[],"r":[]},"ajy":{"ag":[],"r":[]},"ajA":{"ag":[],"r":[]},"akq":{"ag":[],"r":[]},"agM":{"ag":[],"r":[]},"ayv":{"ah":["ajz"]},"bhc":{"ah":["aBm"]},"ayu":{"ah":["ajy"]},"ayw":{"ah":["ajA"]},"beo":{"ah":["akq"]},"avH":{"ah":["agM"]},"alY":{"ag":[],"r":[]},"YS":{"ag":[],"r":[]},"YT":{"ag":[],"r":[]},"ad3":{"au":[],"r":[]},"Y_":{"ag":[],"r":[]},"aAC":{"ah":["alY"]},"a_d":{"au":[],"r":[]},"bpx":{"au":[],"r":[]},"bgM":{"ah":["YS"]},"bgN":{"ah":["YT"]},"P0":{"au":[],"r":[]},"axT":{"ah":["Y_"]},"ams":{"ag":[],"r":[]},"bgT":{"ah":["ams"]},"a5i":{"au":[],"r":[]},"alX":{"ag":[],"r":[]},"bgK":{"ah":["alX"]},"Ms":{"au":[],"r":[]},"anX":{"au":[],"r":[]},"MA":{"ag":[],"r":[]},"bho":{"ah":["MA"]},"abU":{"au":[],"r":[]},"abT":{"au":[],"r":[]},"ayx":{"ag":[],"r":[]},"bd7":{"ah":["ayx"]},"aZ0":{"au":[],"r":[]},"anp":{"ag":[],"r":[]},"aBn":{"ah":["anp"]},"ao2":{"ag":[],"r":[]},"aBE":{"ah":["ao2"]},"Ub":{"ag":[],"r":[]},"Os":{"ag":[],"r":[]},"ZF":{"ag":[],"r":[]},"ZE":{"ag":[],"r":[]},"aBQ":{"ah":["Ub"]},"b8C":{"ah":["Os"]},"aDO":{"ah":["ZF"]},"aDN":{"ah":["ZE"]},"Uc":{"ag":[],"r":[]},"aBS":{"ah":["Uc"]},"aol":{"ag":[],"r":[]},"aar":{"au":[],"r":[]},"aaj":{"au":[],"r":[]},"azp":{"ag":[],"r":[]},"aBR":{"ah":["aol"]},"azo":{"au":[],"r":[]},"aYy":{"au":[],"r":[]},"beC":{"ah":["azp"]},"aoo":{"ag":[],"r":[]},"aBT":{"ah":["aoo"]},"Yo":{"ag":[],"r":[]},"ayQ":{"ah":["Yo"]},"aoW":{"ag":[],"r":[]},"azB":{"ag":[],"r":[]},"azD":{"ag":[],"r":[]},"aCe":{"ah":["aoW"],"eu":[]},"azC":{"au":[],"r":[]},"bfk":{"ah":["azB"]},"b96":{"aB":[]},"b95":{"aB":[]},"b94":{"aB":[]},"azE":{"ah":["azD"]},"b8x":{"aB":[]},"bsT":{"aB":[]},"Zb":{"ag":[],"r":[]},"aC1":{"ah":["Zb"]},"bnU":{"aB":[]},"aqc":{"ag":[],"r":[]},"aCQ":{"ah":["aqc"]}}'))
A.Pb(b.typeUniverse,JSON.parse('{"M4":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=A.aA
return{dw:w("mx<w?>"),gS:w("nS"),o:w("d1"),g5:w("wA"),M:w("eV<n>"),k:w("Q"),gv:w("l1<ak<j3>>"),gh:w("l1<n>"),gH:w("l1<H>"),r:w("ax<~>"),dk:w("a_"),fw:w("P<nS>"),E:w("P<d1>"),V:w("P<ac>"),O:w("P<w>"),A:w("P<a_>"),R:w("P<n0>"),B:w("P<ak<H>>"),m:w("P<a3<n,n>>"),_:w("P<a3<n,@>>"),b:w("P<r_>"),x:w("P<r0>"),gi:w("P<j3>"),a:w("P<lr>"),Y:w("P<i_>"),v:w("P<ie>"),dA:w("P<HN>"),F:w("P<r6>"),Z:w("P<kg>"),g:w("P<hE>"),gK:w("P<+at,details,id(Q,n,n)>"),C:w("P<cP>"),s:w("P<n>"),G:w("P<iN>"),eO:w("P<es>"),d9:w("P<eR>"),p:w("P<r>"),n:w("P<O>"),t:w("P<H>"),U:w("P<aB?>"),d4:w("P<n?>"),ck:w("ak<r_>"),e:w("ak<r0>"),ac:w("ak<j3>"),dZ:w("ak<lr>"),I:w("ak<i_>"),j:w("ak<@>"),L:w("ak<H>"),eq:w("a3<n,n>"),P:w("a3<n,@>"),f:w("a3<@,@>"),cl:w("cS<n,C>"),aS:w("J<a_,rS>"),dc:w("J<HS,bG>"),dv:w("J<n,n>"),bL:w("J<O,bG>"),a3:w("J<H,bG>"),gN:w("J<H,pn>"),w:w("iI"),b1:w("r_"),Q:w("r0"),bP:w("lr"),i:w("i_"),u:w("ie"),gp:w("Ud"),J:w("MN"),D:w("px"),an:w("kg"),c:w("cn"),K:w("aC"),d:w("jh<n>"),di:w("+outcome,snapshot(UW,a4F?)"),ee:w("+after,before(O,O)"),et:w("+categories,error,message,replaceId(ak<i_>,n?,n?,n?)"),cz:w("El"),bJ:w("dz<n>"),N:w("n"),e7:w("bm<O>"),W:w("cz<n>"),am:w("k7<H>"),cc:w("a1<n>"),aM:w("e6<d1>"),bG:w("e6<O>"),l:w("r"),gm:w("qq"),ec:w("aci"),q:w("mO"),y:w("R"),gR:w("O"),z:w("@"),S:w("H"),eG:w("d1?"),cJ:w("Q?"),gw:w("ak<a3<n,@>>?"),bM:w("ak<@>?"),h:w("a3<n,@>?"),X:w("aC?"),gE:w("+code,qrPayload(n,n)?"),bY:w("+isLive,ownerEmail,snapshotJson(R,n,n)?"),T:w("n?"),cD:w("O?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aU0=new A.bs(B.bD,B.hN,B.bD,B.hN)
D.eH=new A.w(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,B.t)
D.aUu=new A.az(D.eH,1,B.r,-1)
D.aUw=new A.az(B.ad,2,B.r,-1)
D.aUz=new A.az(B.aT,2,B.r,-1)
D.aUB=new A.az(B.cm,0.8,B.r,-1)
D.aUR=new A.az(B.aM,2,B.r,-1)
D.aUY=new A.az(B.fe,1.6,B.r,-1)
D.aVM=new A.aZ(0,330,0,1/0)
D.aVS=new A.aZ(0,176,0,1/0)
D.aVT=new A.aZ(0,1/0,0,260)
D.aWa=new A.aZ(90,1/0,0,1/0)
D.aYX=new A.ac(0,B.G,B.dl,B.J,4)
D.cKx=w([D.aYX],x.V)
D.aWo=new A.o(B.c,null,null,null,D.cKx,null,B.a6)
D.cER=w([D.eH,B.aZ],x.O)
D.bQw=new A.a6(B.a3,B.a7,B.x,D.cER,null,null)
D.aWC=new A.o(null,null,null,null,null,D.bQw,B.a6)
D.aWH=new A.o(B.bc,null,null,null,null,null,B.a6)
D.b7z=new A.w(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,B.t)
D.cYX=w([P.aaR,D.b7z],x.O)
D.bPC=new A.a6(B.b0,B.b5,B.x,D.cYX,null,null)
D.aWY=new A.o(null,null,null,B.lR,null,D.bPC,B.n)
D.bdS=new A.w(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,B.t)
D.d8l=w([D.bdS,M.acG],x.O)
D.bOQ=new A.a6(B.b0,B.b5,B.x,D.d8l,null,null)
D.aXo=new A.o(null,null,null,B.rx,null,D.bOQ,B.n)
D.cV8=w([B.aD,B.bA],x.O)
D.bPk=new A.a6(B.a3,B.a7,B.x,D.cV8,null,null)
D.aXu=new A.o(null,null,null,null,null,D.bPk,B.a6)
D.eRa=new A.F(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f90=new A.x("\ud83c\udf89",null,D.eRa,null,null,null,null,null,null,null,null,null)
D.b1O=new A.cq(B.A,null,null,D.f90,null)
D.b35=new A.w(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,B.t)
D.aad=new A.w(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,B.t)
D.b5u=new A.w(1,0.8431372549019608,0.8,0.7843137254901961,B.t)
D.b5y=new A.w(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,B.t)
D.o7=new A.w(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,B.t)
D.rL=new A.w(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,B.t)
D.abc=new A.w(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,B.t)
D.b7h=new A.w(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,B.t)
D.V6=new A.w(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,B.t)
D.wz=new A.w(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,B.t)
D.b8t=new A.w(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,B.t)
D.Vu=new A.w(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,B.t)
D.acp=new A.w(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,B.t)
D.bca=new A.w(1,0.9529411764705882,0.9411764705882353,1,B.t)
D.bcg=new A.w(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,B.t)
D.acJ=new A.w(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,B.t)
D.ad_=new A.w(1,0,0.8392156862745098,0.30980392156862746,B.t)
D.bds=new A.w(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,B.t)
D.bdx=new A.w(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,B.t)
D.beq=new A.w(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,B.t)
D.W0=new A.w(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,B.t)
D.bfm=new A.w(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,B.t)
D.bfQ=new A.w(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,B.t)
D.W7=new A.w(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,B.t)
D.bgz=new A.w(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,B.t)
D.ae1=new A.a2C(2,"active")
D.bkl=new A.b9(42e5)
D.bko=new A.b9(53e4)
D.bkq=new A.b9(58e4)
D.bku=new A.b9(82e4)
D.bli=new A.N(0,30,0,30)
D.blq=new A.N(0,4,0,8)
D.blt=new A.N(0,8,12,8)
D.bm5=new A.N(12,0,12,88)
D.bmc=new A.N(12,11,12,10)
D.bmz=new A.N(13,10,12,10)
D.bmH=new A.N(14,10,14,2)
D.bmT=new A.N(14,14,10,14)
D.bno=new A.N(16,12,16,96)
D.bnt=new A.N(16,14,16,8)
D.bnx=new A.N(16,16,16,96)
D.bny=new A.N(16,18,16,16)
D.bnC=new A.N(16,4,16,10)
D.box=new A.N(18,6,18,40)
D.boz=new A.N(18,8,18,130)
D.boM=new A.N(20,10,20,20)
D.boZ=new A.N(20,18,20,18)
D.bp2=new A.N(20,20,20,22)
D.bpp=new A.N(22,22,22,16)
D.bq3=new A.N(2,0,2,10)
D.bqN=new A.N(4,8,12,4)
D.br_=new A.N(6,1,6,1)
D.br1=new A.N(6,4,0,0)
D.br4=new A.N(6,6,12,4)
D.brq=new A.N(8,4,12,8)
D.fcm=new A.x("Activity",null,B.fW,null,null,null,null,null,null,null,null,null)
D.bt9=new A.bG(1,B.bo,D.fcm,null)
D.fkf=new A.x("Game Receipts",null,A0.z0,null,null,null,null,null,null,null,null,null)
D.f4l=new A.x("Your last 59 games \xb7 kept for 7 days",null,F.aNg,null,null,null,null,null,null,null,null,null)
D.cBi=w([D.fkf,D.f4l],x.p)
D.bhx=new A.fp(B.ai,B.e,B.j,B.F,null,B.p,null,0,D.cBi,null)
D.btc=new A.bG(1,B.bo,D.bhx,null)
D.bvB=new A.a_(58607,"MaterialIcons",!1)
D.YY=new A.a_(62178,"MaterialIcons",!1)
D.bwp=new A.a_(62410,"MaterialIcons",!1)
D.bxz=new A.a_(63258,"MaterialIcons",!1)
D.bxF=new A.a_(63304,"MaterialIcons",!1)
D.bxG=new A.a_(63306,"MaterialIcons",!1)
D.bxN=new A.a_(63330,"MaterialIcons",!1)
D.akd=new A.a_(984777,"MaterialIcons",!1)
D.bAh=new A.ae(B.F2,13,B.ad,null,null,null)
D.bAp=new A.ae(B.jr,13,B.pg,null,null,null)
D.akm=new A.ae(B.l7,null,B.c,null,null,null)
D.bBX=new A.ae(B.AZ,34,B.aL,null,null,null)
D.bCu=new A.ae(B.F6,19,B.c,null,null,null)
D.bwI=new A.a_(62804,"MaterialIcons",!1)
D.bCD=new A.ae(D.bwI,24,B.aM,null,null,null)
D.bD4=new A.ae(B.AL,28,B.bl,null,null,null)
D.bDz=new A.ae(B.ajT,42,B.c,null,null,null)
D.bDI=new A.ae(B.ZO,30,B.c,null,null,null)
D.bEj=new A.ae(B.fI,null,B.c,null,null,null)
D.bEE=new A.ae(B.jr,16,B.c,null,null,null)
D.bFe=new A.ae(B.qN,13,B.c,null,null,null)
D.bFn=new A.ae(B.l7,18,B.c,null,null,null)
D.bFU=new A.ae(B.v0,null,B.dD,null,null,null)
D.bGy=new A.ae(B.or,28,B.c,null,null,null)
D.bGN=new A.ae(B.mX,22,null,null,null,null)
D.bH8=new A.ae(B.qJ,null,null,null,null,null)
D.bHk=new A.ae(B.iN,28,B.c,null,null,null)
D.bHm=new A.ae(B.cv,null,B.aQ,null,null,null)
D.bHt=new A.ae(B.YF,14,B.c,null,null,null)
D.bI1=new A.ae(B.Mt,36,B.aI,null,null,null)
D.bI8=new A.ae(B.os,16,B.c,null,null,null)
D.bIn=new A.ae(B.ed,null,null,null,null,null)
D.b7U=new A.w(1,0.23137254901960785,0.16470588235294117,0,B.t)
D.bIW=new A.ae(B.dS,9,D.b7U,null,null,null)
D.byC=new A.a_(983146,"MaterialIcons",!1)
D.bJc=new A.ae(D.byC,null,B.aM,null,null,null)
D.bJH=new A.ae(B.v3,28,D.eH,null,null,null)
D.bJM=new A.ae(B.tm,null,B.fe,null,null,null)
D.bJR=new A.ae(B.hW,20,D.eH,null,null,null)
D.byY=new A.a_(983377,"MaterialIcons",!1)
D.bK0=new A.ae(D.byY,64,B.c,null,null,null)
D.bKw=new A.ae(B.h7,24,B.c,null,null,null)
D.bLq=new A.e_(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bLB=new A.e_(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bLQ=new A.e_(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bLR=new A.e_(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.b6c=new A.w(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,B.t)
D.b8N=new A.w(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,B.t)
D.b8u=new A.w(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,B.t)
D.cZe=w([D.b6c,D.b8N,D.b8u],x.O)
D.bMM=new A.a6(B.ax,B.aC,B.x,D.cZe,null,null)
D.d2E=w([B.bk,B.aZ],x.O)
D.bN4=new A.a6(B.ax,B.aC,B.x,D.d2E,null,null)
D.b7t=new A.w(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,B.t)
D.bcG=new A.w(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,B.t)
D.cKY=w([D.b7t,D.bcG],x.O)
D.bNb=new A.a6(B.ax,B.aC,B.x,D.cKY,null,null)
D.d_F=w([B.bj,B.M,B.e8],x.O)
D.bNi=new A.a6(B.ax,B.aC,B.x,D.d_F,null,null)
D.bNl=new A.a6(B.a3,B.a7,B.x,G.arx,null,null)
D.cKp=w([B.fe,B.c8],x.O)
D.am3=new A.a6(B.a3,B.a7,B.x,D.cKp,null,null)
D.cKK=w([B.fe,B.bA],x.O)
D.am4=new A.a6(B.a3,B.a7,B.x,D.cKK,null,null)
D.avg=w([D.o7,B.av,B.bU],x.O)
D.bNC=new A.a6(B.ax,B.aC,B.x,D.avg,null,null)
D.bag=new A.w(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,B.t)
D.cIv=w([D.bag,E.aam,B.M],x.O)
D.bNH=new A.a6(B.ax,B.aC,B.x,D.cIv,null,null)
D.aSQ=new A.d8(-0.8,-1)
D.aSS=new A.d8(1.2,1)
D.cHI=w([B.c,B.er,B.h1,B.c,B.ff,B.aW,B.mA],x.O)
D.d_6=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.bNJ=new A.a6(D.aSQ,D.aSS,B.x,D.cHI,D.d_6,null)
D.bcC=new A.w(1,0,0.7607843137254902,0.26666666666666666,B.t)
D.bav=new A.w(1,0,0.6392156862745098,0.22745098039215686,B.t)
D.cZd=w([D.bcC,D.bav],x.O)
D.bO8=new A.a6(B.a3,B.a7,B.x,D.cZd,null,null)
D.bOd=new A.a6(B.ax,B.aC,B.x,B.OX,null,null)
D.cUg=w([E.W3,B.wB],x.O)
D.bOf=new A.a6(B.a3,B.a7,B.x,D.cUg,null,null)
D.cY7=w([B.h2,B.fs],x.O)
D.am9=new A.a6(B.a3,B.a7,B.x,D.cY7,null,null)
D.d2d=w([B.bc,B.bT],x.O)
D.ama=new A.a6(B.a3,B.a7,B.x,D.d2d,null,null)
D.csN=w([B.dp,B.f5],x.O)
D.bOS=new A.a6(B.ax,B.aC,B.x,D.csN,null,null)
D.cGN=w([B.c,B.ba],x.O)
D.bP1=new A.a6(B.a3,B.a7,B.x,D.cGN,null,null)
D.ac0=new A.w(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,B.t)
D.b5h=new A.w(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,B.t)
D.cRd=w([D.ac0,B.j0,B.ql,B.av,D.b5h],x.O)
D.bRp=w([0,0.28,0.55,0.82,1],x.n)
D.bP2=new A.a6(B.ax,B.aC,B.x,D.cRd,D.bRp,null)
D.bPc=new A.a6(B.a3,B.a7,B.x,B.PA,null,null)
D.bPd=new A.a6(B.a3,B.a7,B.x,G.atT,null,null)
D.bPg=new A.a6(B.a3,B.a7,B.x,D.avg,null,null)
D.cM0=w([B.bA,B.fe],x.O)
D.bPq=new A.a6(B.a3,B.a7,B.x,D.cM0,null,null)
D.d61=w([B.aD,B.bA,B.ba],x.O)
D.bPs=new A.a6(B.a3,B.a7,B.x,D.d61,null,null)
D.cUp=w([B.aL,B.bJ,B.fA],x.O)
D.bPw=new A.a6(B.a3,B.a7,B.x,D.cUp,null,null)
D.d5L=w([B.bj,B.aJ,B.bI,B.aK,B.aP,B.cm,B.ak],x.O)
D.cPz=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.bPB=new A.a6(B.ax,B.aC,B.x,D.d5L,D.cPz,null)
D.bPL=new A.a6(B.ax,B.aC,B.x,B.a08,null,null)
D.cUT=w([D.V6,B.e1],x.O)
D.bPV=new A.a6(B.a3,B.a7,B.x,D.cUT,null,null)
D.d0V=w([D.acJ,D.abc,B.M],x.O)
D.bQ2=new A.a6(B.ax,B.aC,B.x,D.d0V,null,null)
D.beQ=new A.w(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,B.t)
D.cHg=w([B.eW,B.h2,D.beQ],x.O)
D.bQy=new A.a6(B.ax,B.aC,B.x,D.cHg,null,null)
D.cMv=w([D.o7,B.av],x.O)
D.bQz=new A.a6(B.ax,B.aC,B.x,D.cMv,null,null)
D.bQV=w([F.B2,B.or,B.jr,B.hx,B.kH,B.kI,B.kG,B.qS,B.md,B.eP,B.lA,B.xz,B.Fe],x.A)
D.bUh=w([10,50,100,200],x.t)
D.c2X=w([1,3,5,7],x.t)
D.c7T=w([25,50,100,250],x.t)
D.byx=new A.a_(983104,"MaterialIcons",!1)
D.cgo=w([B.or,B.lB,B.mX,B.l4,B.h6,B.v8,D.byx,B.ZK],x.A)
D.clH=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cxA=w([0,0.22,0.5,0.78,1],x.n)
D.cBq=w([8,13,19],x.n)
D.a0s=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.fbp=new A.x("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.e3z=new A.jh("questions",48,D.fbp,null,x.d)
D.f1E=new A.x("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.e3E=new A.jh("edit",48,D.f1E,null,x.d)
D.fiR=new A.x("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.e3K=new A.jh("delete",48,D.fiR,null,x.d)
D.cBz=w([D.e3z,D.e3E,D.e3K],A.aA("P<oS<n>>"))
D.cKS=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.cL4=w([B.bM,B.fC],x.O)
D.a34=new C.lr("text","",null,null)
D.cMa=w([D.a34],x.a)
D.cNx=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.em2=new A.acF(B.lz,"Home")
D.edq=new A.acF(B.pA,"Growth")
D.ehI=new A.acF(B.jr,"Wallet")
D.cPL=w([D.em2,D.edq,D.ehI],A.aA("P<+icon,label(a_,n)>"))
D.cQ9=w([4,0,2,6,8,1,3,5,7],x.t)
D.cQh=w([B.c,B.bN,B.cm],x.O)
D.duN=new C.r6("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.duQ=new C.r6("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.duO=new C.r6("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.duI=new C.r6("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.duJ=new C.r6("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.duR=new C.r6("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a0V=w([D.duN,D.duQ,D.duO,D.duI,D.duJ,D.duR],x.F)
D.a1_=w([B.aE,B.bk,B.d6,B.aL],x.O)
D.b81=new A.w(1,1,0.8980392156862745,0.4,B.t)
D.cUZ=w([B.UL,D.b81,B.ql,B.hT,B.j0],x.O)
D.a15=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.P4=w(["checkers_deluxe","tic_tac_go"],x.s)
D.bQZ=w([0,1,2],x.t)
D.cgC=w([3,4,5],x.t)
D.ctl=w([6,7,8],x.t)
D.bR0=w([0,3,6],x.t)
D.c31=w([1,4,7],x.t)
D.cao=w([2,5,8],x.t)
D.bR4=w([0,4,8],x.t)
D.cal=w([2,4,6],x.t)
D.cXb=w([D.bQZ,D.cgC,D.ctl,D.bR0,D.c31,D.cao,D.bR4,D.cal],x.B)
D.aDb=new C.HS(0,"abab")
D.duG=new C.HS(1,"aaaBbb")
D.aDc=new C.HS(2,"aabb")
D.cYb=w([D.aDb,D.duG,D.aDc],A.aA("P<HS>"))
D.cYr=w([],x.a)
D.auD=w([],x.v)
D.d0N=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.Pq=w([1,2,3,-1,-2],x.t)
D.d8a=w([B.j1,B.aD],x.O)
D.fzv=new C.qq("dice","Dice Roll","Roll for cash & prizes!",B.ma,D.d8a)
D.fzs=new C.qq("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",B.qL,B.atr)
D.d2Z=w([B.d2,B.bl],x.O)
D.fzq=new C.qq("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",B.Zw,D.d2Z)
D.d7G=w([B.dN,B.mD],x.O)
D.fzw=new C.qq("memory","Memory Match","Match pairs \u2014 solo or multiplayer",B.ZK,D.d7G)
D.c2K=w([B.jF,B.pe],x.O)
D.fzt=new C.qq("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",G.Zi,D.c2K)
D.d0M=w([M.kZ,D.Vu],x.O)
D.fzr=new C.qq("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",B.Fh,D.d0M)
D.fzu=new C.qq("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",B.cv,Ah.mY)
D.d2c=w([D.fzv,D.fzs,D.fzq,D.fzw,D.fzt,D.fzr,D.fzu],A.aA("P<qq>"))
D.d3w=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.bbY=new A.w(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,B.t)
D.bbQ=new A.w(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,B.t)
D.adt=new A.w(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,B.t)
D.d4f=w([D.bbY,D.bbQ,D.adt],x.O)
D.bdN=new A.w(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,B.t)
D.d4h=w([B.aal,D.bdN,D.adt],x.O)
D.d4T=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.avB=w([D.o7,B.c,D.eH,B.bY,B.b4,B.av],x.O)
D.duL=new C.r6("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.duK=new C.r6("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.duH=new C.r6("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.duP=new C.r6("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.duS=new C.r6("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.duM=new C.r6("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a1H=w([D.duL,D.duK,D.duH,D.duP,D.duS,D.duM],x.F)
D.d7T=w([B.c8,B.pe],x.O)
D.dTG={checkers_deluxe:0,tic_tac_go:1}
D.aBc=new A.br(D.dTG,["Checkers Deluxe","Tic Tac Go"],A.aA("br<n,n>"))
D.dSN={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aBn=new A.br(D.dSN,[1,2,3,4,5,6,7],A.aA("br<n,H>"))
D.dnK=new C.a5i(null)
D.dr6=new C.lr("signature","NGMY Support Team",null,null)
D.dr7=new C.lr("divider","",null,null)
D.Ql=new C.Ud(!1,!1,!1,!1)
D.Qn=new C.MN(!1,!1,!1,!1)
D.ds9=new C.MN(!0,!0,!1,!1)
D.BR=new C.ap8(0,"swahili")
D.aDa=new C.ap8(1,"english")
D.BS=new C.ap8(2,"mix")
D.cWG=w([B.fl,B.ip,B.dm],x.O)
D.bxn=new A.a_(63118,"MaterialIcons",!1)
D.dvV=new C.oO(D.cWG,B.fZ,B.aL,"BACKGAMMON","\ud83c\udfb2",D.bxn)
D.bzm=new A.a_(983637,"MaterialIcons",!1)
D.dvW=new C.oO(Ae.avL,B.bk,B.f1,"EURO WHEEL","\ud83c\udfa1",D.bzm)
D.d3O=w([B.M,B.aJ,B.bv],x.O)
D.dvX=new C.oO(D.d3O,B.aP,B.ak,"ROYALE","\u265f\ufe0f",G.Zi)
D.cKs=w([B.dp,B.bl,B.dT],x.O)
D.dvY=new C.oO(D.cKs,B.aE,B.d6,"CONNECT 4","\ud83d\udd34",B.ZX)
D.d_j=w([B.du,B.f5,B.pe],x.O)
D.dvZ=new C.oO(D.d_j,B.uw,B.c8,"PUNTO BANCO","\ud83d\udc8e",B.lB)
D.csP=w([B.nm,B.i3,B.ls],x.O)
D.dw_=new C.oO(D.csP,B.iW,B.jG,"DOMINOES","\ud83c\udc53",B.ajV)
D.d4s=w([B.wH,B.rP,B.he],x.O)
D.dw0=new C.oO(D.d4s,B.A4,B.fX,"WAR","\u2694\ufe0f",N.Zg)
D.dw1=new C.oO(B.avG,B.aM,B.ak,"PREMIUM","\ud83c\udfae",B.ma)
D.cM1=w([B.jh,B.aD,B.dN],x.O)
D.dw2=new C.oO(D.cM1,B.dM,B.fe,"JACKPOT","\ud83c\udfb0",B.ma)
D.cZv=w([B.ky,B.lq,B.bA],x.O)
D.dw3=new C.oO(D.cZv,B.qk,B.bY,"LIVE BINGO","\ud83c\udfb1",B.xr)
D.cEP=w([B.ip,B.e1,B.aL],x.O)
D.bwO=new A.a_(62865,"MaterialIcons",!1)
D.dw4=new C.oO(D.cEP,B.rV,B.aM,"BIG SPIN","\ud83c\udfa1",D.bwO)
D.dw5=new C.oO(B.a1F,B.aK,B.bk,"HOLD'EM","\u2660\ufe0f",B.jr)
D.d4S=w([B.eW,B.fs,B.aZ],x.O)
D.bvW=new A.a_(61234,"MaterialIcons",!1)
D.dw6=new C.oO(D.d4S,B.lt,B.aT,"CRAPS","\ud83c\udfb2",D.bvW)
D.cJM=w([B.fC,B.iG,B.bM],x.O)
D.dw7=new C.oO(D.cJM,B.bJ,B.ba,"PLINKO","\ud83d\udc8e",Ai.Mu)
D.bz7=new A.a_(983492,"MaterialIcons",!1)
D.dw8=new C.oO(B.a1F,B.ew,B.bk,"SNOOKER","\ud83c\udfb1",D.bz7)
D.d2z=w([B.eW,B.fs,B.aT],x.O)
D.dw9=new C.oO(D.d2z,B.rQ,B.bs,"PROFIT LAB","\ud83d\udcb0",B.hW)
D.d2S=w([B.e8,B.fu,B.bk],x.O)
D.bxL=new A.a_(63324,"MaterialIcons",!1)
D.dwa=new C.oO(D.d2S,B.A1,B.bc,"KLONDIKE","\ud83c\udccf",D.bxL)
D.cXi=w([B.db,B.bj,B.M],x.O)
D.dwb=new C.oO(D.cXi,B.aM,B.aJ,"VEGAS TABLE","\ud83c\udccf",A_.Fu)
D.pI=new C.DV(0,"continueGame")
D.pJ=new C.DV(1,"youWin")
D.GX=new C.DV(2,"youLose")
D.Qw=new C.DV(3,"draw")
D.aDp=new C.UW(0,"found")
D.dP0=new C.UW(1,"foundLive")
D.a3k=new C.UW(2,"notFound")
D.aDq=new C.UW(3,"wrongAccount")
D.dVP=new A.u(4,12)
D.dYI=new A.C(B.L0,B.rC,null)
D.bqr=new A.N(4,0,0,3)
D.eOC=new A.F(!0,B.aI,null,null,null,null,10,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn9=new A.x("NGMY Helper",null,D.eOC,null,null,null,null,null,null,null,null,null)
D.dYY=new A.C(D.bqr,D.fn9,null)
D.bxD=new A.a_(63284,"MaterialIcons",!1)
D.bCR=new A.ae(D.bxD,18,B.o9,null,null,null)
D.eT3=new A.F(!0,B.o9,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5t=new A.x("Continue",null,D.eT3,null,null,null,null,null,null,null,null,null)
D.cYR=w([D.bCR,B.bn,D.f5t],x.p)
D.ezL=new A.co(B.aU,B.e,B.Q,B.m,null,B.p,null,0,D.cYR,null)
D.dZ0=new A.C(B.j5,D.ezL,null)
D.dZd=new A.C(B.bR,B.rC,null)
D.bbA=new A.w(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,B.t)
D.cVx=w([B.h2,B.fs,B.cY,D.bbA],x.O)
D.bPE=new A.a6(B.ax,B.aC,B.x,D.cVx,B.Bj,null)
D.aXx=new A.o(null,null,null,null,null,D.bPE,B.n)
D.biu=new A.kF(D.aXx,B.be,null,null)
D.e3Z=new A.cK(0,0,0,0,null,null,D.biu,null)
D.bEA=new A.ae(B.v_,11,B.c,null,null,null)
D.e42=new A.cK(10,12,null,null,null,null,D.bEA,null)
D.cxs=w([B.h_,B.e8,B.kY],x.O)
D.e4C=new A.bR(B.IV,1.1,B.x,null,0,D.cxs,null,null)
D.bcT=new A.w(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,B.t)
D.b7J=new A.w(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,B.t)
D.b9k=new A.w(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,B.t)
D.cTr=w([D.bcT,D.b7J,D.b9k],x.O)
D.e4J=new A.bR(B.a85,1.05,B.x,null,0,D.cTr,null,null)
D.e56=new A.bR(B.A,0.5,B.x,null,0,W.a0H,null,null)
D.exY=new A.a9(-18,0,18,1)
D.eyu=new A.a9(-3,-5,3,5)
D.bDi=new A.ae(B.ed,16,D.eH,null,null,null)
D.aO5=new A.F(!0,D.eH,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkV=new A.x("Screenshot added \xb7 tap to change",null,D.aO5,null,null,null,null,null,null,null,null,null)
D.cHL=w([D.bDi,B.bn,D.fkV],x.p)
D.ezc=new A.co(B.aU,B.b9,B.j,B.m,null,B.p,null,0,D.cHL,null)
D.bH4=new A.ae(B.jQ,15,D.eH,null,null,null)
D.fiM=new A.x("Refresh",null,D.aO5,null,null,null,null,null,null,null,null,null)
D.cJV=w([D.bH4,B.d9,D.fiM],x.p)
D.eze=new A.co(B.aU,B.e,B.Q,B.m,null,B.p,null,0,D.cJV,null)
D.dTd={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.eB0=new A.eV(D.dTd,3,x.M)
D.dSY={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.eB6=new A.eV(D.dSY,36,x.M)
D.dT0={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.eBe=new A.eV(D.dT0,6,x.M)
D.dU8={memory:0,typing:1,scramble:2,pattern:3}
D.mo=new A.eV(D.dU8,4,x.M)
D.eDn=new A.at(276,276)
D.eE3=new A.a5(13,null,null,null)
D.b2r=new A.fh(2.6,null,null,null,null,B.aM,null,null,null,null)
D.eEd=new A.a5(26,26,D.b2r,null)
D.eEY=new A.a5(null,7,null,null)
D.eF6=new A.hH(8,0,0,1,null)
D.fm_=new A.x("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aLH=new A.b1(D.fm_,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f0P=new A.x("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.eI1=new A.b1(D.f0P,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f1P=new A.x("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.eI7=new A.b1(D.f1P,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fiW=new A.x("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.eIL=new A.b1(D.fiW,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.bci=new A.w(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,B.t)
D.eS0=new A.F(!0,D.bci,null,null,null,null,9,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLM=new A.es("$",null,null,B.cQ,null,null,null,null,null,null,D.eS0)
D.eM1=new A.F(!0,B.M,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMk=new A.F(!0,B.c,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMq=new A.F(!0,B.bj,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMO=new A.F(!0,B.M,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMY=new A.F(!0,B.c,null,null,null,null,19,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eN5=new A.F(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNd=new A.F(!0,null,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNY=new A.F(!0,B.aM,null,null,null,null,28,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOu=new A.F(!0,D.eH,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOw=new A.F(!0,B.bJ,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePd=new A.F(!0,E.A_,null,null,null,null,13,B.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aMS=new A.F(!0,B.c,null,null,null,null,20,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQG=new A.F(!0,B.bJ,null,null,null,null,11.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQY=new A.F(!0,B.ad,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,B.aB,null,null,null,null,null,null,null,null)
D.eRg=new A.F(!0,B.ad,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSf=new A.F(!0,B.c,null,null,null,null,11,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSu=new A.F(!0,B.c,null,null,null,null,14,B.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSF=new A.F(!0,B.bc,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSG=new A.F(!0,B.c,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,B.aB,null,null,null,null,null,null,null,null)
D.eTb=new A.F(!0,B.iy,null,null,null,null,10.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b6u=new A.w(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,B.t)
D.eTp=new A.F(!0,D.b6u,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUO=new A.F(!0,B.aE,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV9=new A.F(!0,D.ac0,null,null,null,null,9,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNy=new A.F(!0,E.A_,null,null,null,null,11,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVv=new A.F(!0,B.fu,null,null,null,null,52,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVw=new A.F(!0,B.bv,null,null,null,null,7,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVL=new A.F(!0,E.A_,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.vP=new A.F(!0,B.c,null,null,null,null,13,B.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ba7=new A.w(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,B.t)
D.eVY=new A.F(!0,D.ba7,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWu=new A.F(!0,B.Q1,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXr=new A.F(!0,B.c,null,null,null,null,38,B.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXx=new A.F(!0,B.iM,null,null,null,null,11,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXB=new A.F(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNN=new A.F(!0,B.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY2=new A.F(!0,B.M,null,null,null,null,10,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY6=new A.F(!0,B.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYY=new A.F(!0,B.M,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZl=new A.F(!0,B.ad,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZB=new A.F(!0,B.bc,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_5=new A.F(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_9=new A.F(!0,B.M,null,null,null,null,11,B.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f05=new A.x("Value per pair",null,B.hy,null,null,null,null,null,null,null,null,null)
D.f06=new A.x("Restore now",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f0C=new A.x("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aNk=new A.F(!0,B.cU,null,null,null,null,12,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0K=new A.x("AVAILABLE PLANS",null,D.aNk,null,null,null,null,null,null,null,null,null)
D.f0N=new A.x("I understand",null,B.ct,null,null,null,null,null,null,null,null,null)
D.f1g=new A.x("Go Back",null,B.ct,null,null,null,null,null,null,null,null,null)
D.eP4=new A.F(!0,B.bv,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1X=new A.x("PLAN VALUE",null,D.eP4,null,null,null,null,null,null,null,null,null)
D.f1Z=new A.x("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.f2k=new A.x("Deposit",null,B.SF,null,null,null,null,null,null,null,null,null)
D.eYl=new A.F(!0,B.dM,null,null,null,null,null,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3i=new A.x("JACKPOT SLOTS",null,D.eYl,null,null,null,null,null,null,null,null,null)
D.f3B=new A.x("Restore",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eP7=new A.F(!0,B.c,null,null,null,null,12,B.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3F=new A.x("YOUR NUMBER",null,D.eP7,null,null,null,null,null,null,null,null,null)
D.f3U=new A.x("SPIN REELS",null,G.a65,null,null,null,null,null,null,null,null,null)
D.f4k=new A.x("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.f4P=new A.x("Perfect Score Profit",null,B.hy,null,null,null,null,null,null,null,null,null)
D.f5r=new A.x("Join room",null,B.kp,null,null,null,null,null,null,null,null,null)
D.f7k=new A.x("Add payment screenshot",null,B.jY,null,null,null,null,null,null,null,null,null)
D.f7z=new A.x("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.eXD=new A.F(!0,B.aM,null,null,null,null,11,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8_=new A.x("INVITE A PLAYER",null,D.eXD,null,null,null,null,null,null,null,null,null)
D.eWR=new A.F(!0,B.UL,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8p=new A.x("NGMY GOLD LEADER",null,D.eWR,null,null,null,null,null,null,null,null,null)
D.f8W=new A.x("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.f9i=new A.x("Invest & Play",null,B.oQ,null,null,null,null,null,null,null,null,null)
D.aNd=new A.F(!0,D.wz,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9I=new A.x("VALID THRU",null,D.aNd,null,null,null,null,null,null,null,null,null)
D.aNP=new A.F(!0,B.ay,null,null,null,null,11,B.I,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9Q=new A.x("DEALER",null,D.aNP,null,null,null,null,null,null,null,null,null)
D.f9W=new A.x("CARDHOLDER",null,D.aNd,null,null,null,null,null,null,null,null,null)
D.eWn=new A.F(!0,B.aK,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faD=new A.x("NGMY PLATINUM",null,D.eWn,null,null,null,null,null,null,null,null,null)
D.eZs=new A.F(!0,B.pg,null,null,null,null,10,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbk=new A.x("EARNED SO FAR",null,D.eZs,null,null,null,null,null,null,null,null,null)
D.fbR=new A.x("VS",null,B.aN8,null,null,null,null,null,null,null,null,null)
D.fcg=new A.x("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.fcC=new A.x("One day left",null,B.aMQ,null,B.L,null,null,null,null,null,null,null)
D.fcX=new A.x("Keep typing \u2014 mistakes are counted in your payout",null,B.Cv,null,null,null,null,null,null,null,null,null)
D.fcY=new A.x("Multiplayer invite",null,B.kp,null,null,null,null,null,null,null,null,null)
D.fd7=new A.x("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.eNL=new A.F(!0,B.Q1,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdd=new A.x("\ud83d\udcb0 Partial Payout System",null,D.eNL,null,null,null,null,null,null,null,null,null)
D.fdo=new A.x("Browse Topics",null,B.eU,null,null,null,null,null,null,null,null,null)
D.eML=new A.F(!0,B.c,null,null,null,null,22,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdD=new A.x("Investment Required",null,D.eML,null,B.L,null,null,null,null,null,null,null)
D.eMh=new A.F(!0,B.c,null,null,null,null,16.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff2=new A.x("Network Status",null,D.eMh,null,null,null,null,null,null,null,null,null)
D.ffy=new A.x("Their account email",null,F.a5R,null,null,null,null,null,null,null,null,null)
D.ffR=new A.x("Verification code",null,B.ct,null,null,null,null,null,null,null,null,null)
D.ffS=new A.x("Category",null,null,null,null,null,null,null,null,null,null,null)
D.fg4=new A.x("ACTIVE ASSET",null,D.aNk,null,null,null,null,null,null,null,null,null)
D.fgq=new A.x("Scan QR",null,B.ct,null,null,null,null,null,null,null,null,null)
D.fgv=new A.x("Check word",null,B.ct,null,null,null,null,null,null,null,null,null)
D.fgU=new A.x("YOUR HAND",null,D.aNP,null,null,null,null,null,null,null,null,null)
D.fhs=new A.x("NGMY Music Studio",null,B.kR,null,null,null,null,null,null,null,null,null)
D.fhv=new A.x("I sent it \u2014 submit deposit",null,B.oQ,null,null,null,null,null,null,null,null,null)
D.fic=new A.x("Back",null,B.S7,null,null,null,null,null,null,null,null,null)
D.f_k=new A.F(!0,null,null,null,null,null,null,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fij=new A.x("DEAL / PLAY ROUND",null,D.f_k,null,null,null,null,null,null,null,null,null)
D.fiv=new A.x("Got it \u2014 keep chatting",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fiF=new A.x("3 Messages Left",null,B.aND,null,null,null,null,null,null,null,null,null)
D.fj9=new A.x("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.fjh=new A.x("Copy",null,B.ct,null,null,null,null,null,null,null,null,null)
D.fjD=new A.x("How many games?",null,F.a5R,null,null,null,null,null,null,null,null,null)
D.eVS=new A.F(!0,B.ay,null,null,null,null,null,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjP=new A.x("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.eVS,null,B.L,null,null,null,null,null,null,null)
D.flk=new A.x("Question",null,null,null,null,null,null,null,null,null,null,null)
D.flw=new A.x("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.f_J=new A.F(!0,B.c,null,null,null,null,12.5,B.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn3=new A.x("NGMY  WALLET",null,D.f_J,null,null,null,null,null,null,null,null,null)
D.fn4=new A.x("Select Your Bet",null,B.hm,null,null,null,null,null,null,null,null,null)
D.fwo=new A.cz("history",x.W)
D.fwt=new A.cz("ngmy_local_home",x.W)
D.fwu=new A.cz("ngmy_local_invest",x.W)
D.fwv=new A.cz("ngmy_local_wallet",x.W)
D.fzd=new C.Y_(null)
D.aR5=new C.azq(0,"grid")
D.aR6=new C.azq(1,"questions")
D.fAq=new C.azq(2,"answer")
D.fBk=new C.YT(null)})();(function staticFields(){$.fJU=A.aY(x.N)
$.h8j=A.U(x.N,x.k)
$.fPf=null
$.fP3=A.U(x.N,A.aA("vQ"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"i4X","bBC",()=>C.hO4())
w($,"i4J","hgh",()=>{var v=null,u=A.ih(v,v,v,v,D.eLM,B.a5,B.ci,v,B.eq,B.cg)
u.eR()
return u})})()};
(a=>{a["CkJz9STz7ITiG+AdPHhZ7RhyiaQ="]=a.current})($__dart_deferred_initializers__);