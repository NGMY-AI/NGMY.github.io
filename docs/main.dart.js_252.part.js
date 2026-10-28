((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,L,Q,A_,E,M,A0,N,A1,R,O,S,A2,P,A3,T,A4,A5,A6,A7,A8,A9,U,Aa,C={
h1O(d,e,f){var w=null,v=f.k("Fe<0>"),u=new A.Fe(w,w,w,w,v)
$.G3()
u.d=new C.coI(new A.Ew(),e,u,f,d)
return new A.hO(u,v.k("hO<1>"))},
coI:function coI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
coJ:function coJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
coF:function coF(d){this.a=d},
coG:function coG(d,e){this.a=d
this.b=e},
coH:function coH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
coE:function coE(d,e,f){this.a=d
this.b=e
this.c=f},
bp0:function bp0(d){this.a=d},
h1N(d,e,f,g){return new C.atS(d,e,f,null,g.k("atS<0>"))},
Ex:function Ex(){},
aGg:function aGg(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
eSU:function eSU(d){this.a=d},
eST:function eST(d,e){this.a=d
this.b=e},
eSW:function eSW(d){this.a=d},
eSR:function eSR(d,e,f){this.a=d
this.b=e
this.c=f},
eSV:function eSV(d){this.a=d},
eSS:function eSS(d){this.a=d},
atS:function atS(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
hRH(d){var w=B.a.i(d)
while(B.a.a0(w,"$"))w=B.a.i(B.a.b_(w,1))
return w},
hbT(d){var w=C.hRH(d)
if(w.length===0)return""
return"$"+w},
fmS(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fmS=A.e(function(f,g){if(f===1)return A.f(g,v)
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
break}if(q.x!==B.cj){w=4
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
return A.b(C.ui(q.c,p,n,d,o,null,q.a,!0),$async$fmS)
case 6:case 4:e.length===s||(0,A.K)(e),++r
w=3
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$fmS,v)},
hWi(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
hSK(d,e,f){return B.d.b8(e,new C.fqB(f,B.a.i(d.toLowerCase())))},
fqs(d){var w
C.fZ4(d)
w=d.c5
return A.bl(new A.J(w,new C.fqt(),A.T(w).k("J<1,@>")),!0,x.N)},
hIx(d,e,f){var w,v,u,t,s,r,q=null,p=B.bQ,o=B.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aU.toString
u=$.eg().gi7().b
if(u.a===0)t=1
else{new A.bc(u,A.a2(u).k("bc<2>")).gK(0)
u=$.kV()
s=u.d
t=s==null?u.gh1():s}w=B.k.dG(f*t)
v=new C.faC(f)
if(J.cZ(n,"data:image"))try{u=A.fK(B.cB.aI(B.d.gam(J.lg(n,","))),B.A,w,new C.faz(v),B.fO,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.cZ(n,"supabase://"))return new A.l0(A.a0f(n),new C.faA(f,e,p,w,v),q,q,x.gh)
return A.ke(n,B.A,w,new C.faB(v),B.fO,p,!0,e,q,q,f)},
fO4(d,e){return new A.a5(e,e,A.hR(C.hIx(d,e,e),B.ap),null)},
hAZ(){var w,v,u=A.a([],x._),t=x.N,s=A.B(D.d1w,x.gm)
for(w=0;w<36;++w){v=B.Bp[w]
s.push(new C.qq(v.a,v.b,v.c,v.e,v.f))}return new C.ayt(u,A.U(t,t),s)},
fqB:function fqB(d,e){this.a=d
this.b=e},
fqt:function fqt(){},
faC:function faC(d){this.a=d},
faz:function faz(d){this.a=d},
faA:function faA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fay:function fay(d){this.a=d},
faB:function faB(d){this.a=d},
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
ayt:function ayt(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
d6x:function d6x(d,e){this.a=d
this.b=e},
d6I:function d6I(d,e){this.a=d
this.b=e},
d7_:function d7_(){},
d70:function d70(d){this.a=d},
d6Q:function d6Q(d,e){this.a=d
this.b=e},
d6P:function d6P(){},
d6R:function d6R(d){this.a=d},
d6O:function d6O(){},
d6T:function d6T(d){this.a=d},
d6S:function d6S(){},
d6L:function d6L(d){this.a=d},
d6J:function d6J(d){this.a=d},
d6K:function d6K(d){this.a=d},
d6M:function d6M(d){this.a=d},
d6N:function d6N(d){this.a=d},
d6D:function d6D(d,e){this.a=d
this.b=e},
d6E:function d6E(d,e){this.a=d
this.b=e},
d6B:function d6B(d){this.a=d},
d6C:function d6C(d){this.a=d},
d6F:function d6F(d){this.a=d},
d6G:function d6G(d){this.a=d},
d6H:function d6H(d,e,f){this.a=d
this.b=e
this.c=f},
d6A:function d6A(d,e){this.a=d
this.b=e},
d6z:function d6z(d,e){this.a=d
this.b=e},
d6y:function d6y(d,e){this.a=d
this.b=e},
d6Z:function d6Z(d){this.a=d},
d6X:function d6X(d,e,f){this.a=d
this.b=e
this.c=f},
d6W:function d6W(d,e,f){this.a=d
this.b=e
this.c=f},
d6V:function d6V(d,e){this.a=d
this.b=e},
d6U:function d6U(){},
d6Y:function d6Y(d){this.a=d},
aBk:function aBk(d,e,f,g,h,i,j,k){var _=this
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
dKg:function dKg(d){this.a=d},
dKf:function dKf(d){this.a=d},
dKh:function dKh(d){this.a=d},
dKe:function dKe(){},
dKi:function dKi(d,e){this.a=d
this.b=e},
dKd:function dKd(d){this.a=d},
dKj:function dKj(d){this.a=d},
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
ays:function ays(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
d6r:function d6r(d){this.a=d},
d6u:function d6u(d){this.a=d},
d6v:function d6v(d){this.a=d},
d6w:function d6w(d){this.a=d},
d6t:function d6t(d,e){this.a=d
this.b=e},
d6s:function d6s(d,e){this.a=d
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
ayu:function ayu(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
d8j:function d8j(d,e){this.a=d
this.b=e},
d8m:function d8m(d){this.a=d},
d8n:function d8n(d){this.a=d},
d8o:function d8o(d){this.a=d},
d8p:function d8p(d){this.a=d},
d8q:function d8q(d){this.a=d},
d8k:function d8k(d){this.a=d},
d8l:function d8l(d){this.a=d},
d7z:function d7z(d,e){this.a=d
this.b=e},
d7A:function d7A(d,e){this.a=d
this.b=e},
d82:function d82(d){this.a=d},
d83:function d83(){},
d7P:function d7P(d,e,f){this.a=d
this.b=e
this.c=f},
d7Q:function d7Q(d){this.a=d},
d7R:function d7R(d,e,f){this.a=d
this.b=e
this.c=f},
d7S:function d7S(d,e){this.a=d
this.b=e},
d7T:function d7T(){},
d71:function d71(d){this.a=d},
d7y:function d7y(d,e){this.a=d
this.b=e},
d84:function d84(){},
d8d:function d8d(){},
d81:function d81(d){this.a=d},
d80:function d80(d){this.a=d},
d7w:function d7w(d){this.a=d},
d7x:function d7x(){},
d88:function d88(){},
d89:function d89(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d8a:function d8a(d,e,f){this.a=d
this.b=e
this.c=f},
d72:function d72(){},
d73:function d73(d){this.a=d},
d74:function d74(){},
d7I:function d7I(d,e){this.a=d
this.b=e},
d7J:function d7J(d,e,f){this.a=d
this.b=e
this.c=f},
d7K:function d7K(d){this.a=d},
d7H:function d7H(d){this.a=d},
d7U:function d7U(d){this.a=d},
d7V:function d7V(){},
d7W:function d7W(d){this.a=d},
d7X:function d7X(){},
d7Y:function d7Y(d){this.a=d},
d7Z:function d7Z(){},
d87:function d87(d,e,f){this.a=d
this.b=e
this.c=f},
d7L:function d7L(d){this.a=d},
d7M:function d7M(d,e){this.a=d
this.b=e},
d7N:function d7N(d){this.a=d},
d7O:function d7O(d){this.a=d},
d8b:function d8b(d){this.a=d},
d8c:function d8c(d){this.a=d},
d75:function d75(d){this.a=d},
d76:function d76(d,e){this.a=d
this.b=e},
d77:function d77(d){this.a=d},
d78:function d78(d){this.a=d},
d85:function d85(d,e){this.a=d
this.b=e},
d86:function d86(d){this.a=d},
d7G:function d7G(d,e){this.a=d
this.b=e},
d8_:function d8_(d,e,f){this.a=d
this.b=e
this.c=f},
d7E:function d7E(d,e,f){this.a=d
this.b=e
this.c=f},
d7F:function d7F(){},
d8e:function d8e(d){this.a=d},
d8f:function d8f(d){this.a=d},
d8g:function d8g(d){this.a=d},
d8i:function d8i(d){this.a=d},
d8h:function d8h(){},
d7D:function d7D(d,e,f){this.a=d
this.b=e
this.c=f},
d7C:function d7C(d,e){this.a=d
this.b=e},
d7B:function d7B(d,e){this.a=d
this.b=e},
d7l:function d7l(d){this.a=d},
d7k:function d7k(d,e){this.a=d
this.b=e},
d7m:function d7m(d){this.a=d},
d7j:function d7j(d,e){this.a=d
this.b=e},
d7n:function d7n(d){this.a=d},
d7i:function d7i(){},
d7o:function d7o(d){this.a=d},
d7g:function d7g(){},
d7h:function d7h(d){this.a=d},
d7p:function d7p(d){this.a=d},
d7f:function d7f(d,e){this.a=d
this.b=e},
d7q:function d7q(d){this.a=d},
d7e:function d7e(d,e){this.a=d
this.b=e},
d7a:function d7a(d,e){this.a=d
this.b=e},
d7r:function d7r(d){this.a=d},
d7d:function d7d(d,e){this.a=d
this.b=e},
d7s:function d7s(d){this.a=d},
d7c:function d7c(d){this.a=d},
d79:function d79(d,e){this.a=d
this.b=e},
d7t:function d7t(d,e,f){this.a=d
this.b=e
this.c=f},
d7u:function d7u(d){this.a=d},
d7b:function d7b(){},
d7v:function d7v(d){this.a=d},
akq:function akq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
beo:function beo(){this.c=this.a=null},
dbR:function dbR(d,e){this.a=d
this.b=e},
dbQ:function dbQ(d,e,f,g){var _=this
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
avF:function avF(d,e,f,g,h,i,j,k,l,m){var _=this
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
czK:function czK(d){this.a=d},
cz4:function cz4(d,e){this.a=d
this.b=e},
cyV:function cyV(d){this.a=d},
cyW:function cyW(d){this.a=d},
cze:function cze(d){this.a=d},
czb:function czb(d){this.a=d},
czc:function czc(d){this.a=d},
czd:function czd(d,e,f){this.a=d
this.b=e
this.c=f},
cz6:function cz6(d){this.a=d},
cz5:function cz5(d){this.a=d},
cyX:function cyX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cz9:function cz9(d){this.a=d},
cz8:function cz8(d){this.a=d},
cz7:function cz7(d,e){this.a=d
this.b=e},
czx:function czx(d){this.a=d},
czr:function czr(d){this.a=d},
czu:function czu(d){this.a=d},
czt:function czt(){},
czq:function czq(d){this.a=d},
czs:function czs(d,e){this.a=d
this.b=e},
czp:function czp(){},
cz1:function cz1(){},
cz2:function cz2(d,e){this.a=d
this.b=e},
cz3:function cz3(d){this.a=d},
cz_:function cz_(d,e){this.a=d
this.b=e},
cz0:function cz0(d,e){this.a=d
this.b=e},
czh:function czh(d,e){this.a=d
this.b=e},
cza:function cza(d){this.a=d},
czi:function czi(d){this.a=d},
czj:function czj(d,e){this.a=d
this.b=e},
czk:function czk(d,e){this.a=d
this.b=e},
czl:function czl(d,e){this.a=d
this.b=e},
czm:function czm(d,e,f){this.a=d
this.b=e
this.c=f},
czn:function czn(d){this.a=d},
czo:function czo(d){this.a=d},
czf:function czf(d,e){this.a=d
this.b=e},
czw:function czw(d){this.a=d},
czg:function czg(d,e){this.a=d
this.b=e},
czJ:function czJ(d){this.a=d},
czC:function czC(d){this.a=d},
czF:function czF(d){this.a=d},
czz:function czz(d,e){this.a=d
this.b=e},
czD:function czD(){},
czE:function czE(d,e){this.a=d
this.b=e},
czA:function czA(d){this.a=d},
czB:function czB(d){this.a=d},
czH:function czH(){},
czG:function czG(d){this.a=d},
czy:function czy(d,e){this.a=d
this.b=e},
czI:function czI(d){this.a=d},
cyY:function cyY(d){this.a=d},
czv:function czv(d,e){this.a=d
this.b=e},
cyZ:function cyZ(d,e,f){this.a=d
this.b=e
this.c=f},
aIG:function aIG(){},
aIH:function aIH(){},
aII:function aII(){},
aJE:function aJE(){},
bW6(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase())
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
bW7(d){var w=B.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hov(d,e){var w=d.ax
if(w<0)return!1
return w===e},
aVK(d,e){return C.how(d,e)},
how(d,e){var w=0,v=A.j(x.di),u,t,s,r,q,p
var $async$aVK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aZv(d),$async$aVK)
case 3:p=g
if(p!=null){try{t=B.R.aG(0,p.c,null)
if(x.f.b(t)){s=C.fXq(A.a0(t,x.N,x.z))
if(s==null){u=new A.F9(D.a3g,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bW6(s,e,p.b)){u=new A.F9(D.aDo,null)
w=1
break}r=p.a?D.dOg:D.aDn
u=new A.F9(r,s)
w=1
break}}catch(o){}u=new A.F9(D.a3g,null)
w=1
break}s=C.fXr(d)
if(s==null){u=new A.F9(D.a3g,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bW6(s,e,null)){u=new A.F9(D.aDo,null)
w=1
break}u=new A.F9(D.aDn,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aVK,v)},
fXr(d){var w,v,u,t,s,r
try{w=B.a.i(d)
if(J.cZ(w,"\ufeff"))w=J.mu(w,1)
v=!1
if(J.cZ(w,"NGMYSNAP1|")){v=!0
w=B.c4.c7(0,B.cB.aI(J.mu(w,10)))}u=B.R.aG(0,w,null)
if(!x.f.b(u))return null
t=A.a0(u,x.N,x.z)
s=v?C.hou(t):C.fXq(t)
return s}catch(r){return null}},
hou(d){var w,v,u,t,s,r,q,p,o,n=new C.bW3(),m=new C.bW2(),l=d.h(0,"qi")
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
return new A.a4G("","",v,u,t,s,r,q,n,m,o,p,B.i_,new A.Q(Date.now(),0,!1),-1)},
fXq(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.y(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.bW5()
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
l=A.B(new A.e6(J.b6(m,new C.bW4(w),x.eG),t),t.k("G.E"))}else l=A.a([],x.E)
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
return new A.a4G(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
fIG(d,e,f,g){var w=0,v=A.j(x.N),u,t,s,r
var $async$fIG=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:t=A.bW1(d,e,f,g)
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(t.a,s,"_")
u=A.FG(A.J5(t.eH(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fIG,v)},
UX:function UX(d,e){this.a=d
this.b=e},
bW3:function bW3(){},
bW2:function bW2(){},
bW5:function bW5(){},
bW4:function bW4(d){this.a=d},
hLz(d){return A.c9(null,B.aW,!0,null,new C.fdT(),d,null,!0,!0,x.N)},
hLM(d,e,f,g){return A.c9(null,B.aW,!0,null,new C.ff5(g,f,e),d,null,!0,!0,x.y)},
alY:function alY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAA:function aAA(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dsk:function dsk(d,e){this.a=d
this.b=e},
dsl:function dsl(d){this.a=d},
dsb:function dsb(d,e){this.a=d
this.b=e},
ds9:function ds9(d){this.a=d},
dsj:function dsj(d){this.a=d},
dsi:function dsi(d,e){this.a=d
this.b=e},
ds8:function ds8(d,e){this.a=d
this.b=e},
ds7:function ds7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dsa:function dsa(d){this.a=d},
dsh:function dsh(){},
dsf:function dsf(d){this.a=d},
dsg:function dsg(d,e){this.a=d
this.b=e},
dsc:function dsc(){},
dsd:function dsd(d,e){this.a=d
this.b=e},
dse:function dse(d,e){this.a=d
this.b=e},
dsm:function dsm(d){this.a=d},
a_e:function a_e(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bpw:function bpw(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
YT:function YT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgM:function bgM(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dsq:function dsq(d){this.a=d},
dsn:function dsn(d,e){this.a=d
this.b=e},
dso:function dso(d,e){this.a=d
this.b=e},
dsp:function dsp(d){this.a=d},
YU:function YU(d){this.a=d},
bgN:function bgN(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dsr:function dsr(d,e){this.a=d
this.b=e},
fdT:function fdT(){},
ff5:function ff5(d,e,f){this.a=d
this.b=e
this.c=f},
ad3:function ad3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eMK:function eMK(d){this.a=d},
eML:function eML(d){this.a=d},
P0:function P0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Y0:function Y0(d){this.a=d},
axR:function axR(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d1r:function d1r(d){this.a=d},
d1o:function d1o(){},
d1p:function d1p(d){this.a=d},
d1q:function d1q(d){this.a=d},
T0(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$T0=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||B.a.i(f).length===0){w=1
break}w=3
return A.b(A.M0(s),$async$T0)
case 3:t=h
J.ce(t,A.E(["role",e,"text",B.a.i(f),"at",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.z))
w=4
return A.b(A.amd(s,t),$async$T0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$T0,v)},
hoO(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=A.T(d).k("a1<1>")
v=A.B(new A.a1(d,new C.bWP(),w),w.k("G.E"))
w=v.length
if(w===0)return""
u=w<=24?v:B.d.fG(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,A.K)(u),++s){r=u[s]
q=J.a7(r)
p=J.y(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+A.t(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
bWP:function bWP(){},
hR6(d){return B.d.dL(B.Bp,new C.fmM(d),new C.fmN()).r},
fmM:function fmM(d){this.a=d},
fmN:function fmN(){},
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
dyM:function dyM(d){this.a=d},
dyL:function dyL(d){this.a=d},
dyD:function dyD(d,e,f){this.a=d
this.b=e
this.c=f},
dyI:function dyI(d){this.a=d},
dyF:function dyF(d,e,f){this.a=d
this.b=e
this.c=f},
dyJ:function dyJ(d){this.a=d},
dyE:function dyE(d){this.a=d},
dyK:function dyK(d){this.a=d},
dyG:function dyG(d){this.a=d},
dyH:function dyH(d){this.a=d},
fZ4(d){var w=A.c3a(new A.Q(Date.now(),0,!1)),v=d.bj
if(v===w)return
d.bj=w
d.bR=0
d.c5=A.a([],x.s)},
fZ6(d){return A.c9(null,B.w.j(0.82),!0,null,new C.c3f(),d,null,!0,!0,x.H)},
a5j:function a5j(d){this.a=d},
c3f:function c3f(){},
c3e:function c3e(d){this.a=d},
hb5(){var w=new A.Q(Date.now(),0,!1),v=w.bN(A.dA(4-A.ml(w),0,0,0,0,0).a),u=A.bZ(A.bx(v),1,4,0,0,0,0,0)
return""+A.bx(v)+"-W"+B.a.aV(B.o.u(1+B.k.bw(B.o.an(v.by(A.bZ(A.bx(u),A.bF(u),A.bP(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
f5E(d,e){var w,v,u,t,s,r,q=A.Fl(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.q(t,"email")
r=B.a.i(J.k(s==null?"":s).toLowerCase())
if((B.a.c8(r,"+local.ngmy")?B.a.ap(r,0,r.length-11):r)===q)return t}t=A.E(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
hGc(d,e){var w,v,u,t,s,r,q,p=A.Fl(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.a7(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c8(q,"+local.ngmy")?B.a.ap(q,0,q.length-11):q)===p){w=A.aN(s.h(t,"winsLeft"))
w=w==null?null:B.k.O(w)
return w==null?0:w}}return 0},
i_c(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=A.Fl(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.a7(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c8(q,"+local.ngmy")?B.a.ap(q,0,q.length-11):q)===n){w=A.aN(s.h(t,o))
w=w==null?null:B.k.O(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
hMr(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=A.Fl(b5),b2=A.c4H(),b3=C.hb5()
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
return w==null?1:w}n=new C.ffS()
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
if(l!=null)return l}k=C.f5E(b4,b5)
w=J.a7(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?A.a0(v.a(w.h(k,b0)),r,q):A.U(r,q)
w.n(k,b0,j)
for(w=b4.y,w=new A.cI(w,A.a2(w).k("cI<1,2>")).gah(0);w.C();){i=w.d
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
h7O(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[1,2,3],v=d.a,u=0;u<3;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
if(w===0)return 1
t=q[e.aD(w)]
if(t===3&&d.f>=d.e)t=e.hc()?1:2
return t},
fOm(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[-1,-2],v=d.a,u=0;u<2;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
return w===0?-1:q[e.aD(w)]},
hMs(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=A.Fl(a3),a1=new C.ffT()
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
q=new C.ffU(v+r+q>1,l)
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
return C.fOm(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
hMq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=A.aN(i.h(0,"wins")),g=h==null?m:B.k.O(h)
if(g==null)g=0
h=A.aN(i.h(0,"loses"))
w=h==null?m:B.k.O(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.hb5():A.c4H()
t=v+"|"+u
s=C.f5E(d,e)
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
hUJ(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
d.be_()
w=C.hMs(d,e,a0)
if(w!=null){if(w===3)++d.f
C.aes(d,e,w)
return w}v=C.hMr(d,e)
if(v!=null){if(v===3)++d.f
C.aes(d,e,v)
return v}u=C.hMq(d,e,a0)
if(u!=null)return new C.ftO(d,a0,e).$1(u)
t=C.f5E(d,e)
s=J.a7(t)
r=A.aN(s.h(t,"winStreak"))
q=r==null?null:B.k.O(r)
if(q==null)q=0
s=A.aN(s.h(t,"loseStreak"))
p=s==null?null:B.k.O(s)
if(p==null)p=0
o=new C.ftQ(d,a0)
if(C.hGc(d,e)>0){n=o.$0()
C.i_c(d,e)
C.aes(d,e,n)
return n}if(q>=d.c){n=new C.ftP(d,a0).$0()
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
c4z(d){var w=0,v=A.j(x.y),u
var $async$c4z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c4y(d),$async$c4z)
case 3:if(f){u=!0
w=1
break}u=A.c4y(d)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c4z,v)},
aes(d,e,f){var w,v="winStreak",u="loseStreak",t=C.f5E(d,e),s=J.a7(t),r=A.aN(s.h(t,v)),q=r==null?null:B.k.O(r)
if(q==null)q=0
r=A.aN(s.h(t,u))
w=r==null?null:B.k.O(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
ffS:function ffS(){},
ffT:function ffT(){},
ffU:function ffU(d,e){this.a=d
this.b=e},
ftO:function ftO(d,e,f){this.a=d
this.b=e
this.c=f},
ftQ:function ftQ(d,e){this.a=d
this.b=e},
ftP:function ftP(d,e){this.a=d
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
drX:function drX(d){this.a=d},
drW:function drW(d){this.a=d},
drY:function drY(d){this.a=d},
drV:function drV(d,e){this.a=d
this.b=e},
aJd:function aJd(){},
Ms:function Ms(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c5o:function c5o(){},
c5n:function c5n(){},
anX:function anX(d,e,f){this.c=d
this.d=e
this.a=f},
fJH(d,e,f){return A.c9(null,B.w.j(0.88),!0,null,new C.c5Q(f,e),d,null,!0,!0,x.H)},
hsz(d){var w,v,u,t,s=B.a.i(d),r=s.split("-")
if(r.length===3){w=A.c7(r[0],null)
v=r[1]
u=A.c7(v,null)
t=A.c7(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?B.i7[u-1]:v)+" "+A.t(t)+", "+A.t(w)}return s},
MA:function MA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c5Q:function c5Q(d,e){this.a=d
this.b=e},
bho:function bho(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
dRj:function dRj(d,e){this.a=d
this.b=e},
dRf:function dRf(){},
dRg:function dRg(){},
dRh:function dRh(d,e){this.a=d
this.b=e},
dRi:function dRi(d,e){this.a=d
this.b=e},
aJN:function aJN(){},
hb1(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.bdy(new C.fp9(w))
w=w.a
return w==null?null:w.c.a},
haU(d){$.aU.x1$.push(new C.foX(d))},
hbd(d){var w=$.rC().gbd(),v=w!=null
if(!v||w.c==null)return
if(C.hb1(w)==="GamePlayScreen")if(v&&w.c!=null&&w.p9())w.eF()},
hbc(d){C.h7V(d,0)},
h7V(d,e){var w,v
if(e>4)return
w=d==null?$.rC().gbd():d
if(w==null||w.c==null)return
v=C.hb1(w)
if(v==="GameCenterScreen")return
if(D.eA9.t(0,v)&&w.p9()){w.eF()
$.aU.x1$.push(new C.fc9(w,e))}},
aND(d,e,f){return A.ei(A.cm(new C.fqw(e,d,f)),e,!0)},
fp9:function fp9(d){this.a=d},
foX:function foX(d){this.a=d},
foW:function foW(d){this.a=d},
fc9:function fc9(d,e){this.a=d
this.b=e},
fqw:function fqw(d,e,f){this.a=d
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
break}t=e==null?A.Kb(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return A.b(A.MB(o),$async$ui)
case 3:q=m
if(j!=null&&j.length!==0&&J.qA(q,new C.c63(j))){w=1
break}p=e==null?new A.Q(Date.now(),0,!1):e
J.pf(q,0,new A.j3(B.o.u(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return A.b(C.ao0(o,q),$async$ui)
case 4:if(i==null||r==null||s)C.a5Z(o).bz(new C.c64(),x.S).eP(new C.c65())
case 1:return A.h(u,v)}})
return A.i($async$ui,v)},
a5Z(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a5Z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=$.hca
m=A.xR(d)
if(n==null||m.length===0){w=1
break}w=3
return A.b(A.MB(m),$async$a5Z)
case 3:t=f
s=J.cD(t)
if(!s.b8(t,new C.c62())){w=1
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
aY8(d){var w=0,v=A.j(x.S),u,t
var $async$aY8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fJK(d,!1),$async$aY8)
case 3:t=J
w=4
return A.b(C.ao1(d,!1),$async$aY8)
case 4:u=t.dG(f,new C.c61(new A.Q(Date.now(),0,!1).bN(-864e8))).gM(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aY8,v)},
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
hSE(d){var w,v,u,t=new A.Q(Date.now(),0,!1),s=t.by(d).a,r=B.o.an(s,6e7)
if(r<1)return"Just now"
w=B.o.an(s,36e8)
if(w<1)return""+r+"m ago"
if(B.o.an(s,864e8)<1)return""+w+"h ago"
v=B.o.F(A.dk(d),12)===0?12:B.o.F(A.dk(d),12)
s=B.i7[A.bF(d)-1]
r=A.bx(d)===A.bx(t)?"":", "+A.bx(d)
w=B.a.aV(B.o.u(A.h0(d)),2,"0")
u=A.dk(d)<12?"AM":"PM"
return s+" "+A.bP(d)+r+" \xb7 "+v+":"+w+" "+u},
bxz(d){var w=B.k.aa(Math.abs(d),2).split(".")
return"$"+A.oq(w[0],A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.faj(),null)+"."+w[1]},
bB6(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$bB6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ao1(e,!1),$async$bB6)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
A.fJK(e,!0).bz(new C.fC4(e),t).bz(new C.fC5(),t).eP(new C.fC6())
w=4
return A.b(A.c_(B.K,null,new C.fC7(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bB6)
case 4:case 1:return A.h(u,v)}})
return A.i($async$bB6,v)},
fMz(d,e,f){var w=null,v=B.c.j(0.05),u=A.m(14),t=A.I(f.j(0.35),B.r,1)
return A.D(A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),B.bB,A.f4(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.ds)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.hF,w,w,w),1)},
dRk(d,e,f){var w=null,v=B.w.j(0.22),u=A.m(8),t=A.I(f.j(0.28),B.r,1)
return A.D(A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.f4(B.a3,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.ef)],x.p),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.Lk,w,w,w),1)},
c63:function c63(d){this.a=d},
c64:function c64(){},
c65:function c65(){},
c62:function c62(){},
c61:function c61(d){this.a=d},
faj:function faj(){},
fC4:function fC4(d){this.a=d},
fC5:function fC5(){},
fC6:function fC6(){},
fC7:function fC7(d,e){this.a=d
this.b=e},
fC3:function fC3(d,e){this.a=d
this.b=e},
fC2:function fC2(d){this.a=d},
abU:function abU(d,e){this.c=d
this.a=e},
dRm:function dRm(){},
dRn:function dRn(){},
dRo:function dRo(){},
dRp:function dRp(d){this.a=d},
dRr:function dRr(){},
dRq:function dRq(d){this.a=d},
abT:function abT(d,e){this.c=d
this.a=e},
dRl:function dRl(){},
bB7(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return A.hQ(B.aW,!1,w,d,new C.fCa(j,i,h,g,e,f),null,B.eM,!1,x.H)},
fCa:function fCa(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fC8:function fC8(d,e){this.a=d
this.b=e},
fC9:function fC9(d,e){this.a=d
this.b=e},
ayv:function ayv(d,e,f,g,h,i,j){var _=this
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
d8s:function d8s(d,e){this.a=d
this.b=e},
d8r:function d8r(){},
aci:function aci(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aIJ:function aIJ(){},
aoM(d,e,f){return new C.aYZ(f,d,e,null)},
htd(d){var w=A.a(B.k.aa(d,2).split("."),x.s),v=A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=A.oq(w[0],v,new C.c7E(),null)
return B.d.aH(w,".")},
aYb(){var w=$.t0
if((w>0?$.t0=w-1:w)<=0)$.t0=0},
afD(d,e){var w=0,v=A.j(x.H),u
var $async$afD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=$.fQX
w=u!=null?2:3
break
case 2:w=4
return A.b(u.$2(d,e),$async$afD)
case 4:case 3:return A.h(null,v)}})
return A.i($async$afD,v)},
aYZ:function aYZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c7F:function c7F(d){this.a=d},
c7E:function c7E(){},
M3:function M3(){},
bXl:function bXl(){},
fQm(d){if(d>0)return"+"+d
return""+d},
fPK(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fqx(d,e){var w=J.q(e,d)
if(w==null)w=A.fpj().h(0,d)
return w==null?90:w},
f9h(d,e){var w,v,u=A.aZ(x.S)
while(u.a<3){w=e.aD(41)-20
if(w===0)continue
u.J(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.J(0,d+v*7+3)
v=A.a([B.o.u(d)],x.s)
B.d.v(v,new A.jH(u,new C.f9i(),u.$ti.k("jH<cl.E,n>")))
B.d.fn(v,e)
return v},
h6V(d,e,f){var w,v,u,t,s=A.aZ(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.J(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.J(0,f[B.o.F(u,5)]+u);++u}t=A.a([d],x.s)
B.d.v(t,A.oX(s,3,s.$ti.k("cl.E")))
B.d.fn(t,e)
return t},
hNQ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=A.a([],x.dA),b2=new A.eT()
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
b1.push(new C.HL("Simplify \u221a("+t*s+"x^"+q+")",m,C.h6V(m,b2,A.a([""+(r+1)+"x^"+o+"\u221a"+n,A.t(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aD(35)
j=b2.aD(4)===0?1:2+b2.aD(4)
i=b2.aD(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.HL("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.f9h(k,b2)))}else if(u===2){k=2+b2.aD(18)
j=b2.aD(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aD(10)+2
b1.push(new C.HL("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.f9h(g,b2)))}else b1.push(new C.HL("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.f9h(k,b2)))}else if(u===3){e=b2.aD(11)-5
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
b1.push(new C.HL("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.f9h(a0,b2)))}else{a6=2+b2.aD(10)
a7=a6+2+b2.aD(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.HL("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.h6V(m,b2,A.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
hYr(d){var w,v,u=x.s,t=A.a(d.split(""),u)
if(t.length<4)return new A.dz(A.a(d.split(""),u),x.bJ).fS(0)
for(w=0;w<12;++w){B.d.fn(t,B.cH)
v=B.d.fS(t)
if(v!==d)return v}return new A.dz(t,x.bJ).fS(0)},
HL:function HL(d,e,f){this.a=d
this.b=e
this.c=f},
f9i:function f9i(){},
anp:function anp(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBl:function aBl(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
dKm:function dKm(d){this.a=d},
dKn:function dKn(d){this.a=d},
dKo:function dKo(d){this.a=d},
dKp:function dKp(d,e){this.a=d
this.b=e},
dKq:function dKq(d,e){this.a=d
this.b=e},
dKr:function dKr(d){this.a=d},
dKl:function dKl(d){this.a=d},
dKs:function dKs(d){this.a=d},
dKk:function dKk(d){this.a=d},
dKv:function dKv(d){this.a=d},
dKw:function dKw(d){this.a=d},
dKu:function dKu(d,e){this.a=d
this.b=e},
dKt:function dKt(d,e){this.a=d
this.b=e},
ao2:function ao2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBC:function aBC(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
dRJ:function dRJ(d,e,f){this.a=d
this.b=e
this.c=f},
dRK:function dRK(d){this.a=d},
dRF:function dRF(d){this.a=d},
dRH:function dRH(d,e){this.a=d
this.b=e},
dRG:function dRG(d,e){this.a=d
this.b=e},
dRI:function dRI(d,e){this.a=d
this.b=e},
dRE:function dRE(d){this.a=d},
hpq(d){var w,v,u,t,s,r,q,p=new A.Q(Date.now(),0,!1),o=p.bN(36e8)
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
p=A.cC(p,new C.c6v(),p.$ti.k("G.E"),x.b1)
p=A.B(p,A.a2(p).k("G.E"))
B.d.b1(p,new C.c6w())
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
q.bn(r,new C.c6s(e))
q.J(r,e)
q.b1(r,new C.c6t())
w=3
return A.b(A.ay(),$async$aok)
case 3:u=g
t=B.a.i(d.toLowerCase())
q=q.ke(r,80)
s=q.$ti.k("J<aj.E,a3<n,@>>")
q=A.B(new A.J(q,new C.c6u(),s),s.k("aj.E"))
w=4
return A.b(u.aq("String","ngmy_helper_calendar_v1_"+t,B.R.ao(q,null)),$async$aok)
case 4:return A.h(null,v)}})
return A.i($async$aok,v)},
hsM(d,e){var w=Date.now(),v=new A.Q(w,0,!1).bQ()
w=J.dG(d,new C.c6x(v,v.bN(A.dA(14,0,0,0,0,0).a)))
w=A.B(w,w.$ti.k("G.E"))
return w},
fZD(d){var w,v,u,t,s,r,q,p,o,n,m=C.hsM(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=A.d9(m,0,A.dJ(20,"count",x.S),A.T(m).c),v=w.$ti,w=new A.bW(w,w.gM(0),v.k("bW<aj.E>")),v=v.k("aj.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=B.o.F(A.dk(s),12)===0?12:B.o.F(A.dk(s),12)
q=A.dk(s)>=12?"PM":"AM"
p=B.a.aV(B.o.u(A.h0(s)),2,"0")
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
c6v:function c6v(){},
c6w:function c6w(){},
c6s:function c6s(d){this.a=d},
c6t:function c6t(){},
c6u:function c6u(){},
c6x:function c6x(d,e){this.a=d
this.b=e},
hpr(d){var w,v,u,t,s,r,q,p,o=null,n=new A.Q(Date.now(),0,!1)
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
fXZ(d){var w=B.o.F(A.dk(d),12)===0?12:B.o.F(A.dk(d),12),v=A.dk(d)>=12?"PM":"AM"
return""+A.bF(d)+"/"+A.bP(d)+" "+w+":"+B.a.aV(B.o.u(A.h0(d)),2,"0")+" "+v},
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
p=A.cC(p,new C.bZJ(),p.$ti.k("G.E"),x.Q)
p=A.B(p,A.a2(p).k("G.E"))
B.d.b1(p,new C.bZK())
u=p
w=1
break}catch(n){r=A.a8(n)
$.am.$1("[call-memory] load: "+A.t(r))
p=A.a([],x.x)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Td,v)},
aWw(d,e){var w=0,v=A.j(x.H),u,t,s,r
var $async$aWw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$aWw)
case 2:u=g
t=A.d9(e,0,A.dJ(120,"count",x.S),A.T(e).c).dC(0)
s=B.a.i(d.toLowerCase())
r=A.T(t).k("J<1,a3<n,@>>")
r=A.B(new A.J(t,new C.bZH(),r),r.k("aj.E"))
w=3
return A.b(u.aq("String","ngmy_call_memory_v1_"+s,B.R.ao(r,null)),$async$aWw)
case 3:return A.h(null,v)}})
return A.i($async$aWw,v)},
aWx(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$aWx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:p=A.U(x.N,x.Q)
o=J
w=2
return A.b(C.Td(d),$async$aWx)
case 2:u=o.aV(g)
case 3:if(!u.C()){w=4
break}t=u.gU(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("bc<2>")
q=A.B(new A.bc(p,u),u.k("G.E"))
B.d.b1(q,new C.bZI())
w=5
return A.b(C.aWw(d,q),$async$aWx)
case 5:return A.h(null,v)}})
return A.i($async$aWx,v)},
bZL(d,e){var w=0,v=A.j(x.e),u,t,s
var $async$bZL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Td(d),$async$bZL)
case 3:t=s.dG(g,new C.bZM(e.bN(-72e8),e.bN(72e8)))
t=A.B(t,t.$ti.k("G.E"))
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bZL,v)},
fY_(d,e){var w,v,u,t,s,r=J.a7(d)
if(r.gal(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.ke(d,e),v=w.$ti,w=new A.bW(w,w.gM(0),v.k("bW<aj.E>")),v=v.k("aj.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gU9()+"\n"
t=t.f
if(t!=null&&B.a.i(t).length!==0){s=B.a.i(t)
u+="  Voicemail/text: "+(s.length>180?B.a.ap(s,0,177)+"\u2026":s)+"\n"}}r=r.gM(d)>e?u+("\u2026 and "+(r.gM(d)-e)+" more\n"):u
return B.a.i(r.charCodeAt(0)==0?r:r)},
hUt(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new A.Q(q,0,!1).bQ(),o=d.toLowerCase(),n=A.bZ(A.bx(p),A.bF(p),A.bP(p),0,0,0,0,0)
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
hcA(d){var w=A.af("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
r0:function r0(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bZJ:function bZJ(){},
bZK:function bZK(){},
bZH:function bZH(){},
bZI:function bZI(){},
bZM:function bZM(d,e){this.a=d
this.b=e},
fZG(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lq(t,w,v,u==null?null:J.k(u))},
hsS(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b6(v,new C.c6D(),x.bP)
v=A.B(v,v.$ti.k("aj.E"))}if(v==null)v=D.cXM
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.y(d.h(0,"printable"),!0)
return new C.ie(r,w,v,u,t,typeof d.h(0,s)=="number"?B.k.O(A.f8(d.h(0,s))):0)},
hsR(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.hGq(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?B.k.O(A.f8(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?B.k.O(A.f8(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b6(s,new C.c6B(),x.u)
s=A.B(s,s.$ti.k("aj.E"))}return new C.i_(p,w,v,u,s==null?D.auA:s,t)},
hGr(d){var w,v,u,t=A.E([F.B_,"investments",B.oo,"games",B.jr,"loans",B.hw,"withdrawals",B.kI,"deposits",B.kJ,"civic",B.kH,"store",B.qP,"jobs",B.mb,"refunds",B.eO,"account",B.ly,"music",B.xs,"help"],x.dk,x.N)
for(w=new A.cI(t,A.a2(t).k("cI<1,2>")).gah(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
hGq(d){switch(d){case"investments":return F.B_
case"games":return B.oo
case"loans":return B.jr
case"withdrawals":return B.hw
case"deposits":return B.kI
case"civic":return B.kJ
case"store":return B.kH
case"jobs":return B.qP
case"refunds":return B.mb
case"account":return B.eO
case"music":return B.ly
default:return B.xs}},
mQ(d){var w=A.a([new C.lq("text",d,null,null)],x.a)
return w},
afA(){var w=null,v=x.v
return A.a([new C.i_("investments","Investments",F.B_,4280468830,A.a([new C.ie("inv1","How do I buy an investment plan?",C.mQ("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.ie("inv2","When do I get paid from my plan?",C.mQ("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.ie("inv3","Can I have more than one plan?",C.mQ("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.i_("games","Games",B.oo,4287323382,A.a([new C.ie("gam1","How do NGMY games work?",C.mQ("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.ie("gam2","Why did my game payout change?",C.mQ("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.i_("loans","Loans",B.jr,4294538006,A.a([new C.ie("loan1","How do I apply for a loan?",C.mQ("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.ie("loan2","What is the repayment period?",C.mQ("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.i_("withdrawals","Withdrawals",B.hw,4282090230,A.a([new C.ie("wd1","How do I withdraw money?",C.mQ("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.ie("wd2","Why is my withdrawal pending?",C.mQ("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.i_("deposits","Deposits",B.kI,4279548070,A.a([new C.ie("dep1","How do I deposit funds?",C.mQ("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.ie("dep2","How long until my deposit posts?",C.mQ("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.i_("civic","Civic Registry",B.kJ,4289170426,A.a([new C.ie("civ1","What is Civic Registry?",C.mQ("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.ie("civ2","What does \u201cmissed\u201d mean on my profile?",C.mQ("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.i_("store","NGMY Store",B.kH,4293675161,A.a([new C.ie("sto1","How do I buy from NGMY Store?",C.mQ("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.ie("sto2","How do I sell in the store?",C.mQ("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.i_("jobs","Jobs & Creator",B.qP,4293548044,A.a([new C.ie("job1","How do I find jobs?",C.mQ("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.ie("job2","How do I post a job?",C.mQ("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.i_("refunds","Refunds",B.mb,4293870660,A.a([new C.ie("ref1","Can I get a refund?",C.mQ("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.ie("ref2","How long do refunds take?",C.mQ("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.i_("account","Account",B.eO,4281908728,A.a([new C.ie("acc1","How do I update my profile?",C.mQ("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.ie("acc2","I forgot my password \u2014 what now?",C.mQ("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.i_("music","Music Charts",B.ly,4290807036,A.a([new C.ie("mus1","What are Music Charts?",C.mQ("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.ie("mus2","How do I upload music?",C.mQ("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.i_("help","Help Center",B.xs,4279080072,A.a([new C.ie("hlp1","Where can I get live help?",C.mQ("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.ie("hlp2","How do daily Helper limits work?",C.mQ("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
fZH(d){var w,v=J.a7(d),u=v.gal(d)
if(u)return C.afA()
v=v.dr(d,new C.c6G(),x.i)
w=A.B(v,v.$ti.k("aj.E"))
B.d.b1(w,new C.c6H())
return w.length===0?C.afA():w},
fZI(d){var w=J.b6(d,new C.c6I(),x.P)
w=A.B(w,w.$ti.k("aj.E"))
return A.E(["categories",w,"savedAt",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.z)},
aom(d){return C.hsT(d)},
hsT(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q,p
var $async$aom=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.ay(),$async$aom)
case 6:s=f
w=7
return A.b(s.aq("String","ngmy_helper_kb_v1",B.R.ao(C.fZI(d),null)),$async$aom)
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
c6F(){var w=0,v=A.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$c6F=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$c6F)
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
break}n=C.fZH(o)
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
return A.i($async$c6F,v)},
aYx(){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$aYx=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c0(),$async$aYx)
case 7:if(!e){u=null
w=1
break}w=8
return A.b(A.f0("ngmy_helper_kb",null,!1,B.bF),$async$aYx)
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
return A.i($async$aYx,v)},
aYy(d){return C.hsU(d)},
hsU(d){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aYy=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c0(),$async$aYy)
case 7:if(!f){u=!1
w=1
break}w=8
return A.b(A.hz("ngmy_helper_kb",d,!1,!1,B.cF,null),$async$aYy)
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
return A.i($async$aYy,v)},
aon(){var w=0,v=A.j(x.I),u,t,s,r
var $async$aon=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c6F(),$async$aon)
case 3:s=e
w=4
return A.b(C.aYx(),$async$aon)
case 4:r=e
w=r!=null&&x.j.b(J.q(r,"categories"))?5:6
break
case 5:t=C.fZH(x.j.a(J.q(r,"categories")))
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
c6J(d){var w=0,v=A.j(x.y),u
var $async$c6J=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aom(d),$async$c6J)
case 3:u=C.aYy(C.fZI(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6J,v)},
lq:function lq(d,e,f,g){var _=this
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
c6E:function c6E(){},
c6D:function c6D(){},
i_:function i_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c6C:function c6C(){},
c6B:function c6B(){},
c6G:function c6G(){},
c6H:function c6H(){},
c6I:function c6I(){},
b6M:function b6M(d){this.a=d},
Ub:function Ub(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBO:function aBO(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
dVo:function dVo(){},
dVp:function dVp(){},
dVi:function dVi(d){this.a=d},
dVj:function dVj(d){this.a=d},
dV1:function dV1(d,e){this.a=d
this.b=e},
dV2:function dV2(d){this.a=d},
dV3:function dV3(d,e,f){this.a=d
this.b=e
this.c=f},
dV0:function dV0(d){this.a=d},
dVf:function dVf(d,e){this.a=d
this.b=e},
dVg:function dVg(d,e){this.a=d
this.b=e},
dVh:function dVh(d){this.a=d},
dV9:function dV9(d){this.a=d},
dVa:function dVa(d,e,f){this.a=d
this.b=e
this.c=f},
dV8:function dV8(d,e){this.a=d
this.b=e},
dVe:function dVe(d,e,f){this.a=d
this.b=e
this.c=f},
dVd:function dVd(d,e){this.a=d
this.b=e},
dVc:function dVc(d,e){this.a=d
this.b=e},
dVb:function dVb(d,e,f){this.a=d
this.b=e
this.c=f},
dV5:function dV5(d){this.a=d},
dV4:function dV4(d){this.a=d},
dV6:function dV6(d,e){this.a=d
this.b=e},
dV7:function dV7(d){this.a=d},
dVn:function dVn(d,e){this.a=d
this.b=e},
dVm:function dVm(d,e){this.a=d
this.b=e},
dVl:function dVl(){},
dVk:function dVk(d,e){this.a=d
this.b=e},
Os:function Os(d,e){this.c=d
this.a=e},
b8C:function b8C(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cIa:function cIa(d){this.a=d},
cI9:function cI9(d,e){this.a=d
this.b=e},
cI7:function cI7(d,e){this.a=d
this.b=e},
cIb:function cIb(d){this.a=d},
cI8:function cI8(d,e){this.a=d
this.b=e},
cI6:function cI6(d,e){this.a=d
this.b=e},
cIc:function cIc(d){this.a=d},
cId:function cId(d,e){this.a=d
this.b=e},
ZG:function ZG(d,e,f){this.c=d
this.d=e
this.a=f},
aDM:function aDM(){this.d=$
this.c=this.a=null},
eHP:function eHP(d,e){this.a=d
this.b=e},
eHQ:function eHQ(d){this.a=d},
eHW:function eHW(){},
eHV:function eHV(d,e){this.a=d
this.b=e},
eHU:function eHU(d,e){this.a=d
this.b=e},
eHR:function eHR(d,e){this.a=d
this.b=e},
eHT:function eHT(d,e,f){this.a=d
this.b=e
this.c=f},
eHS:function eHS(d,e,f){this.a=d
this.b=e
this.c=f},
ZF:function ZF(d,e){this.c=d
this.a=e},
aDL:function aDL(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
eHL:function eHL(d,e){this.a=d
this.b=e},
eHJ:function eHJ(d){this.a=d},
eHK:function eHK(d,e){this.a=d
this.b=e},
eHN:function eHN(d,e){this.a=d
this.b=e},
eHO:function eHO(d){this.a=d},
eHM:function eHM(d,e){this.a=d
this.b=e},
hsP(d){var w=new A.J(d,new C.c6y(),A.T(d).k("J<1,n>")).aH(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
c6z(d,e,f){return C.hsQ(d,e,f)},
hsQ(b4,b5,b6){var w=0,v=A.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$c6z=A.e(function(b8,b9){if(b8===1)return A.f(b9,v)
for(;;)switch(w){case 0:b3=B.a.i(b5)
if(b3.length===0){u=new A.Jk([A.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return A.b(A.qx(A.mT(b3),C.hsP(b6)+"\n\nAdmin instruction:\n"+b4,B.hh,null),$async$c6z)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=B.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new A.Jk([A.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=B.a.i(a3)
if(J.cZ(s,"```"))s=B.a.e5(J.fTH(s,A.af("^```(?:json)?\\s*",!0,!1,!1,!1),""),A.af("\\s*```$",!0,!1,!1,!1),"")
r=B.R.aG(0,s,null)
a3=x.f
if(!a3.b(r)){a3=A.a([],x.Y)
u=new A.Jk([a3,"AI response was not valid JSON.",null,null])
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
u=new A.Jk([a3,"AI did not return any categories.",p,o])
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
if(a6.b(d))for(a9=J.aV(d);a9.C();){a1=a9.gU(a9)
J.ce(a0,C.fZG(A.a0(a3.a(a1),a4,a5)))}if(J.ab(a0)===0){a9=J.q(e,"answer")
J.ce(a0,new C.lq("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=A.t(f)
b1=J.q(e,"question")
J.ce(g,new C.ie("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.y(J.q(e,"printable"),!0),f))}a9=J.q(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.q(j,"iconKey")
b0=C.hsO(J.k(b0==null?"help":b0))
b1=typeof J.q(j,"colorValue")=="number"?B.k.O(A.f8(J.q(j,"colorValue"))):4284773515
J.ce(m,new C.i_(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ab(a3)!==0)===!0?o:null
u=new A.Jk([m,null,p,a3])
w=1
break}catch(b7){a2=A.a8(b7)
a3=A.t(a2)
a4=A.a([],x.Y)
u=new A.Jk([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c6z,v)},
hsO(d){switch(d){case"investments":return F.B_
case"games":return B.oo
case"loans":return B.jr
case"withdrawals":return B.hw
case"deposits":return B.kI
case"civic":return B.kJ
case"store":return B.kH
case"jobs":return B.qP
case"refunds":return B.mb
case"account":return B.eO
case"music":return B.ly
default:return B.xs}},
hT_(d,e,f){var w,v,u,t=A.bl(d,!0,x.i)
if(f!=null&&J.ab(e)===1){w=B.d.bf(t,new C.fqU(f))
if(w>=0){t[w]=J.fn(e).cCm(f,t[w].f)
return t}}B.d.v(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].b8d(u)
return t},
c6y:function c6y(){},
fqU:function fqU(d){this.a=d},
cZC:function cZC(d){this.a=d},
Uc:function Uc(d,e,f){this.c=d
this.d=e
this.a=f},
aBQ:function aBQ(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
dVZ:function dVZ(){},
dVF:function dVF(d,e){this.a=d
this.b=e},
dVK:function dVK(d,e){this.a=d
this.b=e},
dVI:function dVI(d,e){this.a=d
this.b=e},
dVG:function dVG(d){this.a=d},
dVH:function dVH(d){this.a=d},
dVJ:function dVJ(d,e,f){this.a=d
this.b=e
this.c=f},
dVB:function dVB(){},
dVC:function dVC(){},
dVD:function dVD(){},
dVE:function dVE(){},
dVP:function dVP(d,e){this.a=d
this.b=e},
dVQ:function dVQ(d){this.a=d},
dVR:function dVR(d){this.a=d},
dVS:function dVS(d){this.a=d},
dVT:function dVT(d){this.a=d},
dVU:function dVU(d){this.a=d},
dVV:function dVV(){},
dVW:function dVW(d){this.a=d},
dVO:function dVO(d){this.a=d},
dVX:function dVX(d){this.a=d},
dVN:function dVN(d){this.a=d},
dVY:function dVY(d,e){this.a=d
this.b=e},
dVM:function dVM(d,e){this.a=d
this.b=e},
dVL:function dVL(d,e){this.a=d
this.b=e},
hAD(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.a([],x.eO)
for(w=A.af("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kI(0,d),w=new A.IP(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
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
m.push(new A.es(p,n,n,B.cQ,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,B.mp,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=B.a.b_(d,t)
m.push(A.dn(n,n,n,n,n,n,n,n,n,A.l(n,n,u?B.cm:B.aJ,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return A.tb(n,n,n,B.eB,n,n,!0,n,A.dn(m,n,n,n,n,n,n,n,n,n,n),B.a5,n,n,B.de,B.cg)},
dcJ:function dcJ(d){this.a=d},
azo:function azo(d,e){this.a=d
this.b=e},
aol:function aol(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBP:function aBP(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
dVy:function dVy(d,e){this.a=d
this.b=e},
dVz:function dVz(d,e){this.a=d
this.b=e},
dVq:function dVq(d){this.a=d},
dVr:function dVr(d){this.a=d},
dVA:function dVA(){},
dVt:function dVt(d,e){this.a=d
this.b=e},
dVs:function dVs(d,e){this.a=d
this.b=e},
dVv:function dVv(){},
dVx:function dVx(){},
dVw:function dVw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dVu:function dVu(d,e){this.a=d
this.b=e},
azm:function azm(d,e,f,g,h,i){var _=this
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
aYw:function aYw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c6A:function c6A(d){this.a=d},
aaj:function aaj(d,e,f){this.c=d
this.d=e
this.a=f},
cBR:function cBR(d){this.a=d},
cBS:function cBS(){},
cBT:function cBT(d){this.a=d},
azn:function azn(d,e,f){this.c=d
this.d=e
this.a=f},
beC:function beC(){this.c=this.a=this.d=null},
dcK:function dcK(d,e){this.a=d
this.b=e},
dcM:function dcM(d,e){this.a=d
this.b=e},
dcL:function dcL(d){this.a=d},
hum(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
hun(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
hul(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
h6Q(d){var w
if(new A.a1(A.a(d.split("\n"),x.s),new C.f92(),x.cc).gM(0)<3)w=d.length>100&&B.a.t(d,"\n")
else w=!0
return w},
hU8(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.hul(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
ap8:function ap8(d,e){this.a=d
this.b=e},
HQ:function HQ(d,e){this.a=d
this.b=e},
r6:function r6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f92:function f92(){},
aoo:function aoo(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBR:function aBR(d,e,f,g,h,i,j){var _=this
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
dWc:function dWc(d,e){this.a=d
this.b=e},
dW3:function dW3(d){this.a=d},
dW5:function dW5(){},
dW6:function dW6(d,e){this.a=d
this.b=e},
dW7:function dW7(d){this.a=d},
dW8:function dW8(){},
dW9:function dW9(d,e){this.a=d
this.b=e},
dWa:function dWa(d){this.a=d},
dWb:function dWb(d){this.a=d},
dW4:function dW4(d,e){this.a=d
this.b=e},
dWj:function dWj(d,e){this.a=d
this.b=e},
dWg:function dWg(){},
dWh:function dWh(d,e){this.a=d
this.b=e},
dWi:function dWi(d,e){this.a=d
this.b=e},
dWf:function dWf(d,e){this.a=d
this.b=e},
dWe:function dWe(d,e){this.a=d
this.b=e},
dWl:function dWl(d){this.a=d},
dWk:function dWk(d){this.a=d},
dW2:function dW2(d,e){this.a=d
this.b=e},
dW1:function dW1(d,e){this.a=d
this.b=e},
dWm:function dWm(d,e){this.a=d
this.b=e},
dWd:function dWd(d,e){this.a=d
this.b=e},
dW_:function dW_(d){this.a=d},
dW0:function dW0(d){this.a=d},
aJV:function aJV(){},
c6L(d){var w=0,v=A.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$c6L=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=D.Qf
w=1
break}w=3
return A.b(A.ay(),$async$c6L)
case 3:r=f
q=B.a.i(d.toLowerCase())
t=A.aT(J.q(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.Qf
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
u=D.Qf
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c6L,v)},
aop(d,e){var w=0,v=A.j(x.H),u
var $async$aop=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){w=1
break}w=4
return A.b(A.ay(),$async$aop)
case 4:w=3
return A.b(g.aq("String","ngmy_helper_permissions_v1_"+B.a.i(d.toLowerCase()),B.R.ao(e.ad(),null)),$async$aop)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aop,v)},
c6K(d){var w=0,v=A.j(x.gp),u,t
var $async$c6K=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=new C.Ud(!0,!0,!0,!0)
w=3
return A.b(C.aop(d,t),$async$c6K)
case 3:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6K,v)},
hcB(d){var w=B.a.i(d.toLowerCase()),v=A.af("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=A.af("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=A.af("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=A.af("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
hcz(d){var w=A.af("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
Ud:function Ud(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bBd(d,e,f,g,h){var w=0,v=A.j(x.H),u,t,s
var $async$bBd=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return A.b(C.aYs(h),$async$bBd)
case 3:if(j){w=1
break}w=4
return A.b(C.aoh(h),$async$bBd)
case 4:if(d.e==null){w=1
break}t=A.qd(d,!0)
t.toString
s=A.de()
s.b=A.o6(new C.fCV(g,e,f,s),!1,!1)
t.lx(0,s.bb())
case 1:return A.h(u,v)}})
return A.i($async$bBd,v)},
fCV:function fCV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCU:function fCU(d){this.a=d},
Yp:function Yp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayO:function ayO(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cQ$=d
_.b2$=e
_.c=_.a=null},
da3:function da3(d){this.a=d},
da4:function da4(d,e,f){this.a=d
this.b=e
this.c=f},
da9:function da9(){},
da8:function da8(d){this.a=d},
da5:function da5(d){this.a=d},
da6:function da6(){},
da7:function da7(d){this.a=d},
aIO:function aIO(){},
htP(d){var w=B.a.i(d),v=A.af("[^A-Z0-9]",!0,!1,!1,!1),u=A.aJ(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
htO(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
aoV(d){return C.htM(d)},
htM(d){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$aoV=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.f0("ngmy_local_deposit_qr_v1_"+B.a.i(d),null,!1,B.bF),$async$aoV)
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
aZm(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aZm=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.htP(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.f0("ngmy_local_deposit_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bF),$async$aZm)
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
return A.i($async$aZm,v)},
h_5(d){var w,v=B.a.i(d)
if(B.a.a0(v,"NGMYLOCALDEP1|")){w=B.a.i(B.a.b_(v,14))
return w.length===0?null:w}return null},
htN(d,e,f){var w=B.a.i(f)
if(w.length===0)return!1
return B.d.b8(e,new C.c8y(B.a.i(d.toLowerCase()),w))},
h_6(d,e,f,g,h){var w,v,u=J.a7(g),t=u.h(g,"lockedToEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=B.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.px(!1,0,y.u)
if(s!==B.a.i(f.toLowerCase()))return new C.px(!1,0,y.j)
v=B.a.i(h)
if(v.length===0)return new C.px(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.px(!1,0,"Verification code does not match this deposit.")
if(!C.htN(e,d,w))return new C.px(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
fK_(d,e){var w,v,u="amount",t=J.a7(d),s=t.h(d,"redeemedBy")
if(B.a.i(J.k(s==null?"":s)).length!==0)return D.drq
s=t.h(d,"lockedToEmail")
w=B.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=B.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){A.aN(t.h(d,u))
return new C.MN(!0,!1,!1,!0)}if(w!==B.a.i(e.toLowerCase())){A.aN(t.h(d,u))
return new C.MN(!0,!1,!0,!1)}A.aN(t.h(d,u))
return new C.MN(!0,!1,!1,!1)},
c8E(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$c8E=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=C.h_5(d)
if(s==null){u=D.Qh
w=1
break}w=3
return A.b(C.aoV(s),$async$c8E)
case 3:t=g
if(t==null){u=D.Qh
w=1
break}u=C.fK_(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c8E,v)},
aZo(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$aZo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aZm(d),$async$aZo)
case 3:s=g
if(s==null||s.length===0){u=D.Qh
w=1
break}w=4
return A.b(C.aoV(s),$async$aZo)
case 4:t=g
if(t==null){u=D.Qh
w=1
break}u=C.fK_(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZo,v)},
c8F(d,e,f,g,h){var w=0,v=A.j(x.D),u,t
var $async$c8F=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aZm(d),$async$c8F)
case 3:t=j
if(t==null||t.length===0){u=new C.px(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.Uy(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c8F,v)},
Uy(d,e,f,g,h){return C.htQ(d,e,f,g,h)},
htQ(a2,a3,a4,a5,a6){var w=0,v=A.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Uy=A.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.h_5(a4)
if(a0==null){u=new C.px(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return A.b(C.aoV(a0),$async$Uy)
case 3:k=a8
if(k==null){u=new C.px(!1,0,y.m)
w=1
break}j=C.fK_(k,a5)
if(j.b){u=new C.px(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.px(!1,0,y.u)
w=1
break}if(j.c){u=new C.px(!1,0,y.j)
w=1
break}i=C.h_6(a2,a3,a5,k,a6)
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
return A.b(A.f0("ngmy_local_deposit_qr_v1_"+B.a.i(a0),null,!1,B.bF),$async$Uy)
case 8:p=a8
if(p==null){u=new C.px(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.q(p,"redeemedBy")
if(B.a.i(J.k(g==null?"":g)).length!==0){u=new C.px(!1,0,"This deposit code was already used.")
w=1
break}o=C.h_6(a2,a3,a5,p,a6)
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
c8y:function c8y(d,e){this.a=d
this.b=e},
c8M(d,e){var w
A.fPY(d,e,!1)
A.qv(d.a,d.d,!0,!1)
w=B.a.i("")
if(w.length!==0)A.Ad(!0,!1,d.d,w)},
a6r(d,e){if(d==null)return!1
return A.bx(d)===e.gce()&&A.bF(d)===e.gcb()&&A.bP(d)===e.gcr()},
htY(d){var w=A.dk(d)*60+A.h0(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
h_d(d){if(A.dk(d)>=12)return!1
if(A.ml(d)===6||A.ml(d)===7)return!1
return!0},
c8Q(d){var w=d.c?d.bQ():d
return w.cW(A.bZ(A.bx(w),A.bF(w),A.bP(w),12,0,0,0,0))},
fK3(d,e){var w,v,u,t=d.gBE()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a6r(d.fx,e)&&d.fy>0.0001)return B.k.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bQ()
if(!C.c8Q(w))return 0
v=A.bZ(e.gce(),e.gcb(),e.gcr(),12,0,0,0,0)
if(!e.cW(v))return t
if(!e.c9(w))return 0
u=B.o.an(v.by(w).a,1000)
if(u<=0)return t
return B.k.D(t*(B.o.D(B.o.an(e.by(w).a,1000),0,u)/u),0,t)},
fK2(d,e){var w,v,u,t,s,r,q,p=new A.Q(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a6r(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bQ():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!B.d.b8(e,new C.c8L(s))&&C.c8Q(t)){r=d.gBE()
v=r>0
if(v){q=new A.d1(s,d.a,r,B.fz,B.fa,"Clock-in daily earnings (local)",null,null,B.cj,p)
C.c8M(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a6r(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a6r(o,p)&&!C.c8Q(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
c8L:function c8L(d){this.a=d},
hIw(d){var w,v,u=d.k4,t=u==null?null:B.a.i(u)
if(t!=null&&t.length!==0)return t
w=B.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=B.a.i(d.a)
if(B.a.t(v,"@"))return B.d.gK(v.split("@"))
return"Member"},
hZf(d,e,f,g,h,i){return A.ht(d,new C.aoW(f,e,i,g,h,null),!0,null,x.H)},
h3t(d){var w,v,u=d.c?d.bQ():d,t=A.dk(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+A.bF(u)+"/"+A.bP(u)+"/"+A.bx(u)+" \xb7 "+w+":"+B.a.aV(B.o.u(A.h0(u)),2,"0")+" "+v},
hav(d){var w=d.x
if(w===B.dr)return"Processing"
if(w===B.jY)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
hQC(d){var w=d.f,v=B.a.i(w==null?"":w),u=v.toLowerCase()
if(B.a.t(u,"clock-in daily earnings")||B.a.t(u,"clock-in earnings"))return"Clock-in completed"
if(B.a.t(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===B.fn)return"Deposit"
if(w===B.eJ)return"Withdrawal"
return v.length!==0?v:w.b},
hIb(d){var w=d.d,v=w===B.fn||w===B.nX||w===B.fz||w===B.jZ,u=d.x
if(u===B.dr)return w===B.eJ?-d.c:0
if(u!==B.cj)return 0
w=d.c
return v?w:-w},
hRa(d,e){var w,v,u,t,s,r,q=A.B(d,x.o)
B.d.b1(q,new C.fmT())
w=A.U(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,A.K)(q),++t,v=r){s=q[t]
r=v-C.hIb(s)
if(r<0)r=0
w.n(0,s.a,new A.blS(v,r))}return w},
aoW:function aoW(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCc:function aCc(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
e51:function e51(d){this.a=d},
e5I:function e5I(d){this.a=d},
e5J:function e5J(d){this.a=d},
e5K:function e5K(d){this.a=d},
e5q:function e5q(d,e){this.a=d
this.b=e},
e5r:function e5r(){},
e5s:function e5s(d){this.a=d},
e5t:function e5t(){},
e5u:function e5u(d){this.a=d},
e5v:function e5v(d,e,f){this.a=d
this.b=e
this.c=f},
e5w:function e5w(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5l:function e5l(d,e){this.a=d
this.b=e},
e52:function e52(d,e,f){this.a=d
this.b=e
this.c=f},
e5m:function e5m(){},
e5n:function e5n(){},
e5o:function e5o(d){this.a=d},
e5p:function e5p(){},
e56:function e56(d,e){this.a=d
this.b=e},
e57:function e57(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5f:function e5f(){},
e5c:function e5c(d){this.a=d},
e5d:function e5d(d,e){this.a=d
this.b=e},
e5e:function e5e(d,e){this.a=d
this.b=e},
e5g:function e5g(d){this.a=d},
e5h:function e5h(d,e,f){this.a=d
this.b=e
this.c=f},
e5i:function e5i(d){this.a=d},
e5k:function e5k(d){this.a=d},
e5j:function e5j(d){this.a=d},
e58:function e58(d){this.a=d},
e59:function e59(d,e,f){this.a=d
this.b=e
this.c=f},
e5A:function e5A(){},
e5B:function e5B(){},
e5F:function e5F(d){this.a=d},
e5y:function e5y(d){this.a=d},
e5G:function e5G(d){this.a=d},
e5x:function e5x(d){this.a=d},
e5H:function e5H(d){this.a=d},
e5C:function e5C(d){this.a=d},
e5D:function e5D(d){this.a=d},
e5E:function e5E(d){this.a=d},
e5z:function e5z(d){this.a=d},
e55:function e55(d){this.a=d},
e54:function e54(d){this.a=d},
e53:function e53(d){this.a=d},
e5b:function e5b(d,e){this.a=d
this.b=e},
e5a:function e5a(d,e){this.a=d
this.b=e},
azA:function azA(d,e,f,g,h,i,j,k,l,m){var _=this
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
dex:function dex(){},
dey:function dey(){},
dez:function dez(d,e,f){this.a=d
this.b=e
this.c=f},
dew:function dew(d){this.a=d},
deA:function deA(d,e){this.a=d
this.b=e},
dev:function dev(d){this.a=d},
azz:function azz(d,e,f,g,h,i,j,k,l,m){var _=this
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
deq:function deq(d){this.a=d},
der:function der(d){this.a=d},
des:function des(d){this.a=d},
det:function det(){},
deu:function deu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dep:function dep(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
deo:function deo(d){this.a=d},
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
azB:function azB(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
azC:function azC(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
deR:function deR(){},
deS:function deS(){},
deT:function deT(){},
deD:function deD(d){this.a=d},
deC:function deC(d,e){this.a=d
this.b=e},
deB:function deB(d,e){this.a=d
this.b=e},
deO:function deO(d,e){this.a=d
this.b=e},
deQ:function deQ(d,e){this.a=d
this.b=e},
deP:function deP(d,e){this.a=d
this.b=e},
deN:function deN(){},
deM:function deM(d){this.a=d},
deL:function deL(){},
deG:function deG(d){this.a=d},
deH:function deH(){},
deI:function deI(d){this.a=d},
deJ:function deJ(d){this.a=d},
deF:function deF(){},
deK:function deK(d){this.a=d},
deE:function deE(d){this.a=d},
b8x:function b8x(d){this.a=d},
fmT:function fmT(){},
bsS:function bsS(d,e){this.b=d
this.a=e},
aJ3:function aJ3(){},
buO:function buO(){},
hNd(d,e,f,g,h,i,j,k){var w,v=B.a.i(j.toLowerCase())
B.d.bn(d,new C.fgO(v,g))
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
aN5(d){var w,v=J.a7(d),u=A.aN(v.h(d,"matchesTotal")),t=u==null?null:B.k.O(u)
if(t==null)t=1
v=A.aN(v.h(d,"matchesPlayed"))
w=v==null?null:B.k.O(v)
return B.o.D(t-(w==null?0:w),0,t)},
hXZ(d,e){var w=A.T(e).k("a1<1>")
w=A.B(new A.a1(e,new C.fxg(B.a.i(d.toLowerCase())),w),w.k("G.E"))
return w},
afN(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
if(C.aN5(u)<=0){t=J.cD(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
hPR(d,e){var w,v,u,t=J.a7(d),s=t.h(d,"status")
if(!J.y(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.y(s==null?"":s,"complete"))return!1
if(C.aN5(d)<=0)return!1
w=B.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=B.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=B.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aN5(d)>0},
hPQ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a7(d),h=A.aN(i.h(d,"matchesTotal")),g=h==null?null:B.k.O(h)
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
hNc(d,e){var w
C.afN(e)
w=A.T(e).k("a1<1>")
w=A.B(new A.a1(e,new C.fgN(B.a.i(d.toLowerCase())),w),w.k("G.E"))
return w},
tC(d,e){var w,v,u
for(w=J.aV(d);w.C();){v=w.gU(w)
u=J.q(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
hJO(d,e,f){var w,v,u,t="fromName",s=J.a7(f),r=s.h(f,"fromEmail"),q=B.a.i(J.k(r==null?"":r).toLowerCase())
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
fPG(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase()),r=J.a7(d),q=r.h(d,"fromEmail"),p=B.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=B.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.hJO(x.f.b(u)?A.a0(u,r,q):A.U(r,q),v,d)
if((t.length===0||B.a.t(t,"@"))&&f!=null){t=J.q(f,v)
if(t==null)t=""}if(t.length===0||B.a.t(t,"@"))return"Opponent"
return t},
bA1(){var w=0,v=A.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bA1=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$bA1)
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
for(k=J.aV(p),j=x.f;k.C();){n=k.gU(k)
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
return A.i($async$bA1,v)},
bz6(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bz6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return A.b(C.bA1(),$async$bz6)
case 3:u=t.fPG(s,r,g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bz6,v)},
K2(d,e,f){var w=0,v=A.j(x.h),u,t,s,r,q,p
var $async$K2=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(d)
p=$.h84.h(0,q)
if(p!=null){t=new A.Q(Date.now(),0,!1).by(p)
t=t.a>A.dA(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.h84.n(0,q,new A.Q(Date.now(),0,!1))
w=5
return A.b(A.PM(B.c6,q),$async$K2)
case 5:case 4:s=$.h83.h(0,q)
if(s==null){u=C.tC(e,q)
w=1
break}r=C.tC(A.bzc(e,A.a([s],x._)),q)
if(r!=null)A.fRZ(e,r)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$K2,v)},
hYb(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new A.Q(Date.now(),0,!1).ac())
return}}},
hGy(d,e){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
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
for(q=x.S,r=0;r<8;++r)t[r]=A.ip(8,new C.f6A(r),!0,q)
return A.E(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return A.E(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
hNb(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new A.Q(Date.now(),0,!1).ac())
r=C.hGy(u,f)
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
hY9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
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
fRY(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",A.a0(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new A.Q(Date.now(),0,!1).ac())
return}}},
fw4(d){var w=0,v=A.j(x.gw),u,t,s,r,q
var $async$fw4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.afN(d)
t=$.fP1
if(t==null)s=$.fP1=A.PM(B.c6,null).f7(new C.fw5())
else s=t
w=3
return A.b(s,$async$fw4)
case 3:r=f
if(r==null){u=A.bl(new A.J(d,new C.fw6(),A.T(d).k("J<1,@>")),!0,x.P)
w=1
break}q=A.bzc(d,r)
B.d.a8(d)
B.d.v(d,q)
u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fw4,v)},
afO(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$afO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.afN(d)
t=A.T(d).k("J<1,a3<n,@>>")
t=A.B(new A.J(d,new C.fu0(),t),t.k("aj.E"))
w=3
return A.b(A.PM(t,null),$async$afO)
case 3:s=f
if(s==null){u=!1
w=1
break}r=A.bzc(d,s)
B.d.a8(d)
B.d.v(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afO,v)},
aNZ(d,e,f){var w=0,v=A.j(x.y),u,t,s,r
var $async$aNZ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:C.fRY(d,e,f)
t=C.tC(d,e)
if(t==null){u=!1
w=1
break}w=3
return A.b(A.PM(A.a([A.a0(t,x.N,x.z)],x._),e),$async$aNZ)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.tC(s,e)
if(r!=null)A.fRZ(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aNZ,v)},
hUR(d,e,f){var w
C.fRY(d,e,f)
w=$.fOQ.h(0,e)
if(w!=null)w.a9(0)
$.fOQ.n(0,e,A.cL(B.lu,new C.fu1(e,d)))},
fJL(d,e){return new C.aY9(!0,d,"NGMY",B.a.i(e.toLowerCase()),null,!0)},
fgO:function fgO(d,e){this.a=d
this.b=e},
fxg:function fxg(d){this.a=d},
fgN:function fgN(d){this.a=d},
f6A:function f6A(d){this.a=d},
fw5:function fw5(){},
fw6:function fw6(){},
fu0:function fu0(){},
fu1:function fu1(d,e){this.a=d
this.b=e},
aY9:function aY9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
hYE(d,e,f){return A.c_(B.K,null,new C.fym(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
fym:function fym(d,e){this.a=d
this.b=e},
Zc:function Zc(d,e,f){this.c=d
this.d=e
this.a=f},
aC_:function aC_(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
e_h:function e_h(d){this.a=d},
e_k:function e_k(d){this.a=d},
e_l:function e_l(d){this.a=d},
e_j:function e_j(d){this.a=d},
e_m:function e_m(d){this.a=d},
e_n:function e_n(d,e){this.a=d
this.b=e},
e_i:function e_i(d,e){this.a=d
this.b=e},
hTn(d){var w,v,u,t=B.a.i(d)
if(t.length===0)return B.i8
w=t.toLowerCase()
v=A.af("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return B.i8
v=Date.now()
u=C.hJ8(w,new A.Q(v,0,!1))
v=x.N
return A.a([new A.kg("calendar",A.E(["title",C.hJ7(t,w),"start",u.ac(),"end",u.bN(36e8).ac(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
hJ7(d,e){var w,v,u,t,s,r=A.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cB(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return B.a.i(w==null?"":w)}u=A.af("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cB(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.h8Q(B.a.i(t))}s=A.af("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cB(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.h8Q(B.a.i(t))}if(B.a.t(e,"meeting"))return"Meeting"
if(B.a.t(e,"appointment"))return"Appointment"
return"NGMY Event"},
h8Q(d){var w
if(d.length===0)return d
w=B.a.fu(d,A.af("\\s+",!0,!1,!1,!1))
return new A.J(w,new C.ffZ(),A.T(w).k("J<1,n>")).aH(0," ")},
hJ8(d,e){var w,v,u,t,s,r,q,p,o=A.bZ(A.bx(e),A.bF(e),A.bP(e),0,0,0,0,0)
if(B.a.t(d,"tomorrow"))o=o.bN(864e8)
else if(!B.a.t(d,"today"))for(w=D.aBk.gdK(D.aBk),w=w.gah(w);w.C();){v=w.gU(w)
u=v.a
if(A.dr(d,u,0)){t=C.hIa(o,v.b)
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
hIa(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(A.ml(w)===e){u=!0
if(v<=0){t=d.bN(36e8)
s=w.a
if(s>=t.gbo())u=s===t.gbo()&&w.b<t.gcu()}}else u=!1
if(u)return w
w=w.bN(r)}return d.bN(r)},
ffZ:function ffZ(){},
hTo(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=B.a.i(d)
if(j.length===0)return B.i8
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
q=C.hFo(w,j)
if(q==null||q.length===0)return B.i8
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
return A.a([new A.kg("call",A.E(["name",q],t,t))],x.Z)}return B.i8},
hFo(d,e){var w,v,u,t,s,r,q=[A.af("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),A.af("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),A.af("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
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
if(u)return C.hMw(t)}r=A.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cB(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return B.a.i(u==null?"":u)}return null},
hMw(d){var w=B.a.fu(d,A.af("\\s+",!0,!1,!1,!1))
return new A.J(w,new C.ffY(),A.T(w).k("J<1,n>")).aH(0," ")},
ffY:function ffY(){},
hcI(d){var w=new A.J(d,new C.fwm(),A.T(d).k("J<1,a3<n,@>>")).bY(0,new C.fwn())
w=A.B(w,w.$ti.k("G.E"))
return w},
fwm:function fwm(){},
fwn:function fwn(){},
hTr(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return B.i8
w=B.a.i(d)
if(w.length===0)return B.i8
v=w.toLowerCase()
if(!(B.a.t(v,"send email")||B.a.t(v,"send an email")||B.a.t(v,"send a message to")||B.a.t(v,"email ")||B.a.t(v,"write an email")||B.a.t(v,"write email")))return B.i8
u=A.af("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cB(w)
if(u==null)return B.i8
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
hSA(d,e){var w
if(e)return d
w=J.dG(d,new C.fqh())
w=A.B(w,w.$ti.k("G.E"))
return w},
fqh:function fqh(){},
hUO(d){switch(d){case"blackjack_vegas":return D.dvs
case"roulette_euro":return D.dvc
case"slots_jackpot":return D.dvj
case"poker_texas":return D.dvm
case"chess_royale":return D.dvd
case"connect_four_pro":return D.dve
case"domino_block":return D.dvg
case"plinko_prizes":return D.dvo
case"spin_wheel":return D.dvl
case"baccarat_punto":return D.dvf
case"craps_table":return D.dvn
case"casino_war":return D.dvh
case"bingo_live":return D.dvk
case"solitaire_klondike":return D.dvr
case"backgammon_pro":return D.dvb
case"billiards_snooker":return D.dvp
case"profit_solve":return D.dvq
default:return D.dvi}},
ftS(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=A.m(8)
v=A.I(B.aM,B.r,1.5)
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.ej,6)],x.V)
return A.p(p,A.av(A.V(B.m7,B.c.j(0.5),p,p,p,23.400000000000002),p,p,p),B.f,p,p,new A.o(p,p,v,w,u,D.bOh,B.n),p,74,p,p,p,p,p,52)}t=B.o.D(d,1,13)
s=t===1||t>=10||B.o.F(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][B.o.F(t,4)]
q=s?B.bL:B.M
w=A.m(8)
v=A.I(B.aK,B.r,1)
u=A.a([new A.ac(0,B.G,B.w.j(0.28),B.ej,6)],x.V)
return A.p(p,A.v(A.a([new A.C(D.bqx,A.d(D.cl3[t-1]+"\n"+r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,B.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),B.b8,A.av(A.d(r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),B.b8],x.p),B.F,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(B.hS,p,v,w,u,p,B.n),p,74,p,p,p,p,p,52)},
hVS(d,e){var w,v=null,u=A.m(18),t=A.I(B.aM,B.r,3),s=A.a([new A.ac(0,B.G,B.aD.j(0.5),B.J,20)],x.V),r=A.T(e).k("J<1,hh>")
r=A.B(new A.J(e,new C.fvO(),r),r.k("aj.E"))
w=x.p
return A.v(A.a([A.p(v,A.v(A.a([D.f2i,B.ac,A.A(r,B.m,v,B.b9,B.j,0,v,v)],w),B.m,v,B.e,B.j,0,B.p),B.f,v,v,new A.o(v,v,t,u,s,D.bOD,B.n),v,v,v,v,I.afz,v,v,v),B.ay,A.dp(B.alj,D.f2U,d,A.bk(B.aM,v,v,v,B.du,v,Af.Xm,v,v,v,v,v))],w),B.m,v,B.e,B.j,0,B.p)},
oN:function oN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bnT:function bnT(d,e){this.b=d
this.a=e},
fvO:function fvO(){},
huy(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e0(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=A.c1(8,0,!1,w)
u=A.c1(9,"",!1,p)
t=x.t
s=A.a([],t)
r=A.a([],t)
t=A.a([0,0,0],t)
q=J.e0(6,o)
for(v=0;v<6;++v)q[v]=A.c1(7,0,!1,w)
return new C.aph(A.U(p,x.z),n,u,s,r,t,q,new A.aq(B.as,$.aw()))},
hNS(d,e,f,g,h){var w=new C.fhr(f,h)
switch(d){case"checkers_deluxe":return C.hE4(h,g,e,w)
case"tic_tac_go":return C.hMH(h,g,e,w)
case"blackjack_vegas":return C.hDq(h,g,e,new C.fhl(w))
case"roulette_euro":return C.hL1(h,g,e,new C.fhm(w))
case"slots_jackpot":return C.hLQ(h,g,e,new C.fhn(w))
case"billiards_snooker":return C.hJQ(h,g,e,new C.fho(w))
case"connect_four_pro":return C.hEv(h,g,e,w)
case"profit_solve":return C.hJT(h,g,e,new C.fhp(w))
default:return C.hE1(d,h,g,e,new C.fhq(w))}},
hE4(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vL,B.L,w,w),u=A.m(12),t=A.I(D.Vn,B.r,8),s=A.a([new A.ac(0,B.G,B.w.j(0.4),B.J,16)],x.V)
return A.v(A.a([new A.C(B.f2,v,w),A.D(A.av(new A.fF(1,A.p(w,A.bv(A.m(6),A.ib(!0,w,w,B.y,D.eEf,new C.f3W(d,e,f,g),64,w,B.dP,B.ai,!1),B.ap),B.f,w,w,new A.o(w,w,t,u,s,w,B.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hMH(d,e,f,g){var w=null
return A.v(A.a([new A.C(B.f2,A.d(d.c,w,w,w,w,w,w,D.vL,B.L,w,w),w),A.D(A.av(new A.fF(1,A.cm(new C.fg8(d,e,f,g)),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hDq(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.vL,B.L,v,v),t=x.p,s=A.a([],t),r=d.CW,q=d.ch
if(r)B.d.v(s,new A.J(q,new C.f3m(),A.T(q).k("J<1,r>")))
else B.d.v(s,A.a([C.ftS(q[0],!1),B.bp,C.ftS(0,!0)],t))
s=A.A(s,B.m,v,B.b9,B.j,0,v,v)
r=A.d("Total: "+d.a1J(d.ay),v,v,v,v,v,v,D.eYD,v,v,v)
q=d.ay
w=A.T(q).k("J<1,r>")
q=A.B(new A.J(q,new C.f3n(),w),w.k("aj.E"))
q=A.c5(B.fI,q,B.bx,6,6)
return A.v(A.a([new A.C(B.f2,u,v),D.f8M,B.ao,s,B.ay,D.ffQ,r,B.ao,q,B.b8,A.A(A.a([A.D(A.bI(D.f3j,d.CW?v:new C.f3o(d,e,f,g),v),1),B.ab,A.D(A.bI(D.fi3,new C.f3p(d,e,f,g),v),1)],t),B.m,v,B.e,B.j,0,v,v)],t),B.m,v,B.e,B.j,0,B.p)},
hL1(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vL,B.L,w,w),u=d.cx,t=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cw,16)],x.V)
t=A.a([new A.C(B.f2,v,w),A.p(w,A.b3(w,w,w,new C.bnT(u,w),B.at),B.f,w,w,new A.o(w,w,w,w,t,w,B.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new A.C(B.kB,A.d("Result: "+A.t(v),w,w,w,w,w,w,D.eN6,w,w,w),w))
t.push(B.ac)
t.push(A.c5(B.fI,A.ip(6,new C.fdl(d,e,f,g),!0,x.l),B.bx,6,6))
return A.v(t,B.m,w,B.e,B.j,0,B.p)},
hLQ(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vL,B.L,w,w),u=d.db,t=A.T(u).k("J<1,n>")
u=A.B(new A.J(u,new C.fff(),t),t.k("aj.E"))
return A.v(A.a([new A.C(B.f2,v,w),C.hVS(new C.ffg(d,e,f,g),u)],x.p),B.m,w,B.e,B.j,0,B.p)},
hJQ(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vL,B.L,w,w),u=A.m(20),t=A.I(B.fk,B.r,12),s=x.V,r=A.a([new A.ac(0,B.G,B.w.j(0.45),B.dp,18)],s),q=x.p
return A.v(A.a([new A.C(B.f2,v,w),A.D(A.p(w,new A.an(B.W,w,B.a9,B.q,A.a([A.ao(w,A.p(w,w,B.f,w,w,D.aWe,w,18,w,w,w,w,w,18),w,w,24,w,24,w),A.ao(28,A.p(w,w,B.f,w,w,B.a9e,w,14,w,w,w,w,w,14),w,w,w,32,w,w),A.av(A.eA(B.A,d.dx,A.p(w,w,B.f,w,w,new A.o(B.aM,w,w,A.m(2),A.a([new A.ac(0,B.G,B.w.j(0.3),B.J,4)],s),w,B.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),B.f,w,w,new A.o(w,w,t,u,r,D.e3S,B.n),w,w,w,B.eX,w,w,w,w),1),A.kQ(B.bl,w,w,1,0,new C.fc5(d,f),d.dy),A.bI(D.f7S,new C.fc6(d,e,g,f),w)],q),B.m,w,B.e,B.j,0,B.p)},
hEv(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.vL,B.L,v,v),t=x.l,s=J.e0(7,t)
for(w=0;w<7;++w)s[w]=new A.bG(1,B.bn,A.aE(v,A.v(A.ip(6,new C.f4n(d,w),!0,t),B.m,v,B.mh,B.j,0,B.p),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f4o(d,w,e,f,g),v,v,v,v,v,v,!1,B.aa),v)
return A.v(A.a([new A.C(B.f2,u,v),A.D(A.av(new A.fF(1.1666666666666667,A.A(s,B.dG,v,B.e,B.j,0,v,v),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
hJT(d,e,f,g){var w=null
return A.v(A.a([new A.C(B.f2,A.d(d.c,w,w,w,w,w,w,D.vL,B.L,w,w),w),A.d(""+d.a+"/"+d.b,w,w,w,w,w,w,B.kn,w,w,w),A.d(d.fy,w,w,w,w,w,w,D.aNI,B.L,w,w),A.aL(w,B.T,!1,w,!0,B.q,w,A.aM(),d.id,w,w,w,w,w,2,D.bL1,B.y,!0,w,!0,w,!1,w,B.ag,w,w,w,w,w,B.dL,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.fci(d,e,g,f),w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,B.dj,!0,B.a5,w,B.am,w,w,w,w),A.bI(D.f6w,new C.fcj(d,e,g,f),w)],x.p),B.m,w,B.e,B.j,0,B.p)},
hE1(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gjK(),k=e.d
k=k==null?n:k.c
w=C.hUO(d)
v=D.aB9.h(0,d)
if(v==null)v=d
m=A.d(m,n,n,n,n,n,n,B.n6,B.L,n,n)
u=A.m(22)
t=w.a
s=w.b
r=A.I(s.j(0.5),B.r,2)
q=A.a([new A.ac(0,B.G,w.c.j(0.35),B.eQ,24)],x.V)
p=A.d(w.e,n,n,n,n,n,n,W.Sc,n,n,n)
o=A.d(v,n,n,n,n,n,n,B.oM,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+A.t(k)+" at the table"
k=x.p
q=A.D(A.av(A.p(n,A.v(A.a([p,B.S,o,B.P,A.d(l,n,n,n,n,n,n,A.l(n,n,B.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),B.L,n,n),B.d5,A.V(w.f,s.j(0.85),n,n,n,48)],k),B.m,n,B.b9,B.j,0,B.p),B.f,n,n,new A.o(n,n,r,u,q,new A.a6(B.b1,B.b3,B.x,t,n,n),B.n),n,n,n,B.eX,B.a8,n,n,1/0),n,n,n),1)
return A.v(A.a([m,B.ac,q,B.P,new A.a5(1/0,n,A.bI(D.fhd,new C.f3Q(f,e,g,h),A.bk(s,n,n,n,B.d.gK(t).jc()>0.4?B.w:B.c,n,B.ce,n,n,n,n,n)),n)],k),B.m,n,B.e,B.j,0,B.p)},
DU:function DU(d,e){this.a=d
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
caj:function caj(){},
cak:function cak(){},
cai:function cai(){},
cal:function cal(){},
cah:function cah(){},
can:function can(){},
cao:function cao(){},
cag:function cag(d){this.a=d},
cam:function cam(){},
caf:function caf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fhr:function fhr(d,e){this.a=d
this.b=e},
fhl:function fhl(d){this.a=d},
fhm:function fhm(d){this.a=d},
fhn:function fhn(d){this.a=d},
fho:function fho(d){this.a=d},
fhp:function fhp(d){this.a=d},
fhq:function fhq(d){this.a=d},
f3W:function f3W(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3V:function f3V(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fg8:function fg8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fg7:function fg7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fg6:function fg6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f3m:function f3m(){},
f3n:function f3n(){},
f3o:function f3o(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3p:function f3p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fdl:function fdl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fdk:function fdk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fff:function fff(){},
ffg:function ffg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fc5:function fc5(d,e){this.a=d
this.b=e},
fc6:function fc6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f4o:function f4o(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f4n:function f4n(d,e){this.a=d
this.b=e},
fci:function fci(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fcj:function fcj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3Q:function f3Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hQE(d){var w,v=A.T(d).k("a1<1>")
v=A.oX(new A.a1(d,new C.flT(),v),120,v.k("G.E"))
w=A.cC(v,new C.flU(),A.a2(v).k("G.E"),x.N).aH(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
flT:function flT(){},
flU:function flU(){},
afZ(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
aqb:function aqb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aCO:function aCO(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
ewZ:function ewZ(){},
aKB:function aKB(){},
hsw(){var w=$.HE
if(w<=0)return;--w
$.HE=w
if(w===0){w=$.fZw
if(w!=null)w.$0()}},
c5P(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
anW(d){var w=0,v=A.j(x.H),u,t
var $async$anW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.fJG.J(0,t)
w=4
return A.b(A.ay(),$async$anW)
case 4:w=3
return A.b(f.aq("Bool","ngmy_game_free_play_used_"+B.a.i(t.toLowerCase()),!0),$async$anW)
case 3:case 1:return A.h(u,v)}})
return A.i($async$anW,v)},
anV(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$anV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(C.c5P(d)){u=!0
w=1
break}t=B.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.fJG.t(0,t)){u=!1
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
aYr(d){return C.hsJ(d)},
hsJ(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aYr=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.ay(),$async$aYr)
case 6:s=f
w=7
return A.b(s.aq("String","ngmy_helper_ai_usage_v1",B.R.ao(d,null)),$async$aYr)
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
return A.i($async$aYr,v)},
aYp(d,e){var w,v,u,t,s=J.q(d,B.a.i(e.toLowerCase()))
if(!x.f.b(s))return new A.acB(0,new A.Q(Date.now(),0,!1))
w=J.a7(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=A.bi(u==null?"":u)
if(t==null)t=new A.Q(Date.now(),0,!1)
return new A.acB(typeof v=="number"?B.o.D(B.k.O(v),0,999999):0,t)},
aYq(d,e){if(B.o.an(e.by(d.b).a,36e8)>=24)return new A.acB(0,e)
return d},
c6l(d,e){var w=0,v=A.j(x.S),u,t,s
var $async$c6l=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return A.b(C.Ua(),$async$c6l)
case 3:t=g
s=Date.now()
u=B.o.D(e-C.aYq(C.aYp(t,d),new A.Q(s,0,!1)).a,0,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6l,v)},
c6m(d,e){var w=0,v=A.j(x.cJ),u,t,s,r
var $async$c6m=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return A.b(C.Ua(),$async$c6m)
case 3:t=g
s=Date.now()
r=C.aYq(C.aYp(t,d),new A.Q(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bN(864e8)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6m,v)},
hsK(d){var w,v,u,t=d.a,s=B.o.an(t,1e6)
if(s<=0)return"0s"
w=B.o.an(t,36e8)
v=B.o.an(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+B.a.aV(B.o.u(v),2,"0")+"m "+B.a.aV(B.o.u(u),2,"0")+"s"
if(v>0)return""+v+"m "+B.a.aV(B.o.u(u),2,"0")+"s"
return""+u+"s"},
aYs(d){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aYs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return A.b(C.Ua(),$async$aYs)
case 3:t=p.aYq(o.aYp(f,d),new A.Q(Date.now(),0,!1))
w=4
return A.b(A.ay(),$async$aYs)
case 4:s=f
r=B.a.i(d.toLowerCase())
q=t.b.a5().ac()
u=A.k8(J.q(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYs,v)},
aoh(d){var w=0,v=A.j(x.H),u,t,s,r
var $async$aoh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return A.b(C.Ua(),$async$aoh)
case 3:t=s.aYq(r.aYp(f,d),new A.Q(Date.now(),0,!1))
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
q=C.aYq(C.aYp(s,d),new A.Q(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aG(s,t,A.E(["count",r+1,"windowStart",q.b.a5().ac()],x.N,x.K))
w=4
return A.b(C.aYr(s),$async$aoi)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoi,v)},
afB(d,e,a0){var w=0,v=A.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$afB=A.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new A.fc("")
if(!d.d){p=!0
if(!C.hcA(a0))if(!C.hcz(a0)){p=A.af("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.hcA(a0)?3:4
break
case 3:o=C.hUt(a0)
w=o!=null?5:6
break
case 5:w=7
return A.b(C.bZL(e,o),$async$afB)
case 7:n=a2
p=J.a7(n)
if(p.gck(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.fXZ(o)+":\n"
m.a+=l
for(p=p.gah(n);p.C();){m=p.gU(p)
l=h
k="- "+m.gU9()+"\n"
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
case 13:case 9:w=C.hcz(a0)?15:16
break
case 15:p=h
f=C
w=17
return A.b(C.a64(e),$async$afB)
case 17:m=f.fZD(a2)+"\n"
p.a+=m
case 16:p=A.af("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return A.b(C.Td(e),$async$afB)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cw(i)){p=h
m=C.fY_(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=B.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afB,v)},
hu5(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
c8V(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$c8V=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=A.h_i(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.f0("ngmy_local_growth_income_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bF),$async$c8V)
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
return A.i($async$c8V,v)},
aoZ(d){var w=0,v=A.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$aoZ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=B.a.i(d)
if(J.ab(k)===0){u=null
w=1
break}t=4
w=7
return A.b(A.f0("ngmy_local_growth_income_stash_v1_"+B.a.i(k),null,!1,B.bF),$async$aoZ)
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
u=new A.aEd(m,p,n)
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
aZv(d){var w=0,v=A.j(x.bY),u,t,s,r,q
var $async$aZv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
w=C.hu5(q)?3:4
break
case 3:w=5
return A.b(C.c8V(q),$async$aZv)
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
return A.b(C.aoZ(B.a.i(B.a.b_(q,15))),$async$aZv)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new A.aEd(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZv,v)},
h_w(d){var w=d.bL
if(w>=0)return w
return 1},
afM(d,e,f){var w=0,v=A.j(x.H),u,t
var $async$afM=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return A.b(A.aOa(d,e),$async$afM)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return A.b(A.FV(d,null,null,!1,!0,""),$async$afM)
case 5:w=4
return A.b(t.$1(h),$async$afM)
case 4:case 1:return A.h(u,v)}})
return A.i($async$afM,v)},
hTm(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=B.a.i(a2)
if(a1.length===0)return B.i8
w=a1.toLowerCase()
v=A.af("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=A.af("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cB(w)
if(!u&&t==null)return B.i8
s=new A.Q(Date.now(),0,!1)
r=A.de()
q=A.de()
p=C.hJ6(w)
if(p!=null){v=p.a
r.b=s.bN(v)
q.b=C.h7H(a1,w)
if(J.y(q.bb(),"Wake up")&&B.o.an(v,e)<=180)q.b="Reminder \u2014 "+B.o.an(v,e)+" min"}else{if(t!=null){v=A.af("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=B.a.e5(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.h7I(v[2],v[4],v[3])
o=v[3]
m=A.c7(o==null?"":o,null)
if(m==null)m=0
l=A.bZ(A.bx(s),A.bF(s),A.bP(s),0,0,0,0,0)
if(B.a.t(w,d))l=l.bN(a0)
r.b=A.bZ(A.bx(l),A.bF(l),A.bP(l),n,m,0,0,0).bN(-36e8)
if(r.bb().cW(s.bN(e)))r.b=J.ce(r.bb(),B.ny)
v=C.hNa(v[1])
k=B.o.F(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+B.a.aV(B.o.u(m),2,"0")+" "+j)}else{l=A.bZ(A.bx(s),A.bF(s),A.bP(s),0,0,0,0,0)
v=B.a.t(w,d)
if(v)l=l.bN(a0)
i=A.af("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cB(w)
if(i!=null){o=i.b
h=C.h7I(o[1],o[3],o[2])
o=o[2]
g=A.c7(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=A.bZ(A.bx(l),A.bF(l),A.bP(l),h,g,0,0,0)
r.b=f.cW(s.bN(3e7))&&!v?f.bN(a0):f
q.b=C.h7H(a1,w)}}v=x.N
return A.a([new A.kg("alarm",A.E(["title",q.bb(),"start",r.bb().ac(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
hJ6(d){var w,v,u,t,s,r,q=[A.af("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.af("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.af("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),A.af("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
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
hNa(d){var w=d==null?"work":d,v=w.toLowerCase()
if(B.a.t(v,"meeting")||B.a.t(v,"appointment"))return"Meeting"
if(B.a.t(v,"class")||B.a.t(v,"school"))return"Class"
if(B.a.t(v,"shift"))return"Shift"
return"Work"},
h7I(d,e,f){var w,v=A.c7(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return B.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
h7H(d,e){var w,v,u,t
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
hur(d){var w,v,u,t,s=J.a7(d)
if(s.gal(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.ke(d,80),v=w.$ti,w=new A.bW(w,w.gM(0),v.k("bW<aj.E>")),v=v.k("aj.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gM(d)>80?u+("\u2026 and "+(s.gM(d)-80)+" more\n"):u
return B.a.i(s.charCodeAt(0)==0?s:s)}},D,H,Ab,I,F,Ac,V,G,W,Ad,Ae,X,Af,Ag,Ah,Ai,Y,Z,K,Aj
J=c[1]
A=c[0]
B=c[2]
L=c[31]
Q=c[160]
A_=c[171]
E=c[152]
M=c[162]
A0=c[115]
N=c[96]
A1=c[158]
R=c[34]
O=c[71]
S=c[77]
A2=c[78]
P=c[126]
A3=c[163]
T=c[154]
A4=c[166]
A5=c[164]
A6=c[165]
A7=c[161]
A8=c[157]
A9=c[63]
U=c[142]
Aa=c[143]
C=a.updateHolder(c[5],C)
D=c[151]
H=c[25]
Ab=c[62]
I=c[156]
F=c[93]
Ac=c[167]
V=c[26]
G=c[155]
W=c[107]
Ad=c[153]
Ae=c[170]
X=c[159]
Af=c[172]
Ag=c[102]
Ah=c[169]
Ai=c[99]
Y=c[70]
Z=c[55]
K=c[53]
Aj=c[168]
C.bp0.prototype={
o9(d,e){return this.a.$2(d,e)}}
C.Ex.prototype={
T(){return new C.aGg(this.$ti.k("aGg<Ex.T,Ex.S>"))}}
C.aGg.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a
v=w.f
w=new A.hA(B.E9,v,null,null,w.$ti.k("hA<1>"))
u.e=w
u.UG()},
br(d){var w,v=this
v.bE(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aKL()
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hA(B.E9,w.b,w.c,w.d,w.$ti)}v.UG()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&A.c()
return v.mJ(d,w)},
q(){this.aKL()
this.a2()},
UG(){var w,v=this
v.d=v.a.c.lb(new C.eSU(v),new C.eSV(v),new C.eSW(v))
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hA(B.W2,w.b,w.c,w.d,w.$ti)},
aKL(){var w=this.d
if(w!=null){w.a9(0)
this.d=null}}}
C.atS.prototype={
mJ(d,e){return this.e.$2(d,e)}}
C.ajz.prototype={
T(){return C.hAZ()},
bp(){return this.r.$0()}}
C.qq.prototype={}
C.ayt.prototype={
ab0(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ab0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.fZ4(r)
if(r.x==null||r.c5.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.fZ6(s),$async$ab0)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ab0,v)},
W2(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$W2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aoX(t.a.c),$async$W2)
case 3:if(e!=null&&t.c!=null)t.a.bp()
r=!C.c5P(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return A.b(C.anV(t.a.c),$async$W2)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.m(new C.d6x(t,s))
if(!s)t.ab0()
case 1:return A.h(u,v)}})
return A.i($async$W2,v)},
aaC(){var w=0,v=A.j(x.H),u,t=this,s
var $async$aaC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.bA1(),$async$aaC)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.d6I(t,s))
case 1:return A.h(u,v)}})
return A.i($async$aaC,v)},
a_(){var w,v,u=this
u.bqd()
$.t0=$.t0+1
w=u.a
$.bA6=w.c.a
w=w.d.b5
v=A.T(w).k("J<1,a3<n,@>>")
w=A.B(new A.J(w,new C.d7_(),v),v.k("aj.E"))
u.f=w
u.aaC()
u.IH()
u.W2()
u.e=A.dF(B.nu,new C.d70(u))},
IH(){var w=0,v=A.j(x.H),u,t=this,s
var $async$IH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:C.afN(t.a.d.b5)
w=3
return A.b(C.fw4(t.a.d.b5),$async$IH)
case 3:s=e
if(t.c==null){w=1
break}C.afN(t.a.d.b5)
if(s!=null)t.m(new C.d6Q(t,s))
else t.m(new C.d6R(t))
case 1:return A.h(u,v)}})
return A.i($async$IH,v)},
q(){C.aYb()
var w=this.e
if(w!=null)w.a9(0)
this.bqc()},
afx(d,e,f){return this.cmx(d,e,f)},
cmx(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$afx=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(e.toLowerCase())
p=J.q(t.r,q)
o=t.a
n=o.d.b5
o=o.c
s=d.b
C.hNd(n,o.a,o.c,d.a,s,f,e,p)
t.a.bp()
w=3
return A.b(C.afO(t.a.d.b5),$async$afx)
case 3:if(t.c==null){w=1
break}t.m(new C.d6T(t))
r=f===1?"1 game":""+f+" games"
t.c.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$afx,v)},
HB(d,e){return this.c82(d,e)},
bXi(d){return this.HB(d,null)},
c82(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&B.a.i(e).length!==0){s=C.tC(t.a.d.b5,B.a.i(e))
if(s!=null&&C.aN5(s)<=0){t.c.I(x.q).f.R(D.aLF)
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
return A.b(C.fJH(r,C.fqs(q.c),p),$async$HB)
case 6:w=1
break
case 4:o=new C.d6L(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
A.ht(r,new C.aBk(p,q.d,q.f,q.r,new C.d6M(o),q.w,C.fqs(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
A.ht(q,new C.ajy(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.d6N(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$HB,v)},
bUP(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.afN(i.a.d.b5)
C.afN(i.f)
w=C.hXZ(i.a.c.a,i.f)
v=C.hNc(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return B.bH
if(!u){t=B.d.gK(w)
u=A.m(14)
s=A.I(B.b7,B.r,1)
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
return A.p(h,A.v(A.a([D.fbV,A.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,B.oQ,h,h,h),B.P,A.A(A.a([A.D(A.dW(B.Ij,new C.d6D(i,t),h),1),B.ab,A.D(A.bI(D.fkp,new C.d6E(i,t),h),1)],n),B.m,h,B.e,B.j,0,h,h)],n),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(B.aD,h,s,u,h,h,B.n),h,h,h,B.e3,B.bm,h,h,1/0)}m=B.d.gK(v)
l=B.d.dL(i.y,new C.d6F(m),new C.d6G(i))
k=C.fPG(m,i.a.c.a,i.r)
j=C.aN5(m)
u=A.m(14)
s=A.I(B.b7,B.r,1)
r=j===1?"":"s"
return A.p(h,A.v(A.a([D.f4p,A.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,B.oQ,h,h,h),B.au,A.d(C.hPQ(m,i.a.c.a),h,h,h,h,h,h,B.a69,h,h,h),B.P,A.bI(D.fbd,new C.d6H(i,l,m),h)],x.p),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(B.bk,h,s,u,h,h,B.n),h,h,h,B.e3,B.bm,h,h,1/0)},
bLH(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.eAn.t(0,d.a),l=A.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=A.a3A(w[v])
t=B.k.D(u.d*0.58,0.12,0.3)
l.push(new A.wK(u.a,u.b,B.k.D(u.c*0.92,0,0.9),t).im())}s=B.d.gK(w)
w=A.m(16)
t=A.m(18)
r=A.I(A.Y(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1)
q=x.V
p=A.a([new A.ac(0,B.G,A.Y(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.jb,12)],q)
o=x.p
o=A.a([new A.a5(100,n,A.av(A.V(d.e,B.c,n,n,n,64),n,n,n),n),A.D(new A.C(B.jn,A.v(A.a([A.A(A.a([A.D(A.d(d.b,n,n,n,n,n,n,B.kS,n,n,n),1)],o),B.m,n,B.e,B.j,0,n,n),B.au,A.d(d.c,n,2,B.a2,n,n,n,B.oN,n,n,n)],o),B.F,n,B.b9,B.j,0,B.p),n),1)],o)
if(m)o.push(A.aH(n,n,n,n,D.bID,n,n,n,new C.d6z(this,d),n,n,n,n,"Invite player",n))
o.push(new A.C(B.KT,A.p(n,D.bGO,B.f,n,n,new A.o(A.Y(71,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),n,A.I(A.Y(B.k.V(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1.6),n,A.a([new A.ac(0,B.G,A.Y(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,10)],q),n,B.a6),n,44,n,n,n,n,n,44),n))
return A.aK(!1,w,!0,A.p(n,A.A(o,B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,r,t,p,new A.a6(B.ax,B.aC,B.x,l,n,n),B.n),n,92,n,B.e3,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.d6A(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.M(d).ax.a===B.H,l=A.M(d).ax.a===B.H?B.j_:B.pc,k=m?B.i4.j(0.94):B.c.j(0.94),j=m?B.c:B.M,i=m?B.i4:B.c,h=m?B.c.j(0.08):B.aK,g=m?B.c:B.M,f=m?B.bj:B.bN
if(!o.x)return C.aND(n,l,A.av(A.mz(n,m?B.c:B.bl,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fqs(o.a.c)
return new C.MA(o.a.w,w,!0,o.gaPw(),n)}w=A.aI(d,B.e6,x.w).w
v=A.m(12)
u=A.I(h,B.r,1)
t=x.V
s=A.a([],t)
if(!m)s.push(new A.ac(0,B.G,B.w.j(0.04),B.cI,12))
r=x.p
s=A.a([A.p(n,A.A(A.a([A.D(A.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,A.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,B.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new A.u6(new C.d6X(o,f,g),n,$.aOZ(),n)],r),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(i,n,u,v,s,n,B.n),n,n,n,n,B.WR,n,n,1/0),B.S,o.bUP()],r)
v=o.y
B.d.v(s,new A.J(v,o.gbLG(),A.T(v).k("J<1,r>")))
w=A.ci(A.v(s,B.m,n,B.e,B.j,0,B.p),B.q,n,B.y,n,new A.N(14,w.r.b+78,14,24),n,n,B.ai)
s=A.m(35)
v=A.a([new A.ac(0,B.G,B.w.j(m?0.28:0.08),B.jb,15)],t)
u=A.I(m?B.c.j(0.1):B.aK,B.r,1)
t=A.aH(n,n,n,n,A.V(B.ez,j,n,n,n,18),n,n,n,o.gaPw(),n,n,n,n,n,n)
q=A.D(A.av(A.d("GAME CENTER",n,n,n,n,n,n,A.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,B.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=A.m(20)
return A.o7(!0,C.aND(n,l,new A.an(B.W,n,B.a9,B.f,A.a([w,A.ao(n,A.bq(!1,new A.C(B.L3,A.p(n,A.A(A.a([t,q,new A.C(B.jn,A.p(n,A.A(A.a([D.bE7,B.ea,C.aoM(new C.d6Y(o),B.n6,o.a.c.a)],r),B.m,n,B.e,B.Q,0,n,n),B.f,n,n,new A.o(B.cR,n,n,p,n,n,B.n),n,n,n,n,B.h2,n,n,n),n)],r),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(k,n,u,s,v,n,B.n),n,60,n,n,B.m5,n,n,n),n),!0,!1,B.ah,!0,!0),n,n,0,0,0,n)],r),n)),new C.d6Z(o),x.K)},
aPx(){var w,v
this.a.bp()
w=this.d
v=w>0?A.E(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
A.iK(w,v)}}
C.aBk.prototype={
T(){return new C.bhc()},
ho(d){return this.e.$1(d)},
bp(){return this.f.$0()},
aEn(){return this.r.$0()}}
C.bhc.prototype={
a_(){this.brd()
this.d=A.TB(this.a.d.bi)
$.t0=$.t0+1},
q(){C.aYb()
this.brc()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&A.c()
return new C.anp(v,new C.dKg(w),u,new C.dKh(w),new C.dKi(w,d),new C.dKj(w),null)}}
C.ajy.prototype={
T(){return new C.ays(new A.aq(B.as,$.aw()))},
ho(d){return this.x.$1(d)},
bp(){return this.y.$0()},
aEn(){return this.z.$0()}}
C.ays.prototype={
a_(){this.bqb()
this.a.toString
$.t0=$.t0+1},
q(){C.aYb()
var w=this.d
w.S$=$.aw()
w.P$=0
this.bqa()},
a0y(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.MG()
w=5
return A.b(C.anV(t.a.c),$async$a0y)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return A.b(C.fJH(s,C.fqs(r.c),q),$async$a0y)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&B.a.i(r).length!==0){p=C.tC(s.d.b5,B.a.i(r))
if(p!=null&&C.aN5(p)<=0){t.c.I(x.q).f.R(D.aLF)
w=1
break}}o=A.d3(B.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.I(x.q).f.R(D.eHh)
w=1
break}m=A.Kb(t.a.c.a,new C.d6r(t))
if(m+0.001<n){t.c.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Not enough balance for this bet \u2014 you have $"+A.dy(m)+", the bet is $"+A.dy(n)+".",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aEn()
s=t.a
s.toString
r=B.o.u(1000*Date.now())
q=t.a
s.ho(new A.d1(r,q.c.a,n,B.jA,B.fa,"Game bet: "+q.f,null,null,B.cj,new A.Q(Date.now(),0,!1)))
t.a.bp()
if(D.eAf.t(0,t.a.e)){s=t.c
s.toString
r=t.a
A.ht(s,new C.ams(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
A.ht(s,new C.ajA(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$a0y,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=A.aH(o,o,o,o,B.FB,o,o,o,new C.d6u(d),o,o,o,o,o,o),k=p.a,j=A.d(k.f,o,o,o,o,o,o,B.ct,o,o,o),i=A.m(12),h=x.p
j=A.eC(A.a([A.p(o,A.av(C.aoM(new C.d6v(p),B.kn,k.c.a),o,o,o),B.f,o,o,new A.o(B.cR,o,o,i,o,o,B.n),o,o,o,D.bkX,B.hs,o,o,o)],h),o,o,!0,!0,D.W0,o,1,o,o,o,!1,o,!1,B.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=A.m(16)
i=A.I(B.b7,B.r,1)
k=A.V(D.bv6,D.bfn,o,o,o,28)
w=p.a
v=A.d(w.f,o,o,o,o,o,o,B.oM,o,o,o)
w=A.d(w.r,o,o,o,o,o,o,B.oQ,o,o,o)
u=A.Y(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.m(12)
s=x.a3
s=A.B(new A.J(A.a([2,5,10,25],x.t),new C.d6w(p),s),s.k("aj.E"))
s=A.A(s,B.m,o,B.e,B.j,0,o,o)
r=A.Y(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.p(o,A.v(A.a([D.flX,B.S,s,B.P,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.d,o,o,o,o,o,2,A.bo(o,new A.b4(4,A.m(10),B.Z),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,B.lg,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,B.dL,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,B.dj,!0,B.a5,o,B.am,o,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(u,o,o,t,o,o,B.n),o,o,o,o,B.bR,o,o,1/0)
u=A.m(12)
r=A.I(A.Y(102,B.a2h.l()>>>16&255,B.a2h.l()>>>8&255,B.a2h.l()&255),B.r,1)
s=A.Y(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
q=A.m(10)
q=A.p(o,A.v(A.a([D.f3N,A.d("+ $"+B.k.aa(n*0.46,2),o,o,o,o,o,o,D.eVx,o,o,o),A.d("(46% return on $"+B.k.aa(p.e,2)+" bet)",o,o,o,o,o,o,B.oN,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(s,o,o,q,o,o,B.n),o,o,o,o,B.cl,o,o,1/0)
s=A.Y(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
n=A.m(10)
u=A.p(o,A.v(A.a([D.fca,B.P,q,B.P,A.p(o,A.v(A.a([D.f_6,A.d("$"+B.k.aa(m,2),o,o,o,o,o,o,D.eLu,o,o,o),A.d("8 pairs \xd7 $"+B.k.aa(m,2)+" each",o,o,o,o,o,o,B.oN,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(s,o,o,n,o,o,B.n),o,o,o,o,B.cl,o,o,1/0)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(D.bbT,o,r,u,o,o,B.n),o,o,o,o,B.bR,o,o,1/0)
r=A.fl(o,o,B.bl,o,o,o,o,o,o,B.c,o,B.fH,o,o,o,o,o,o,o,o)
return C.aND(j,D.W0,A.ci(A.p(o,A.v(A.a([k,B.au,v,B.bB,w,B.S,t,B.P,u,B.S,new A.a5(1/0,o,A.i9(A.d("Start Game ($"+B.k.aa(p.e,2)+")",o,o,o,o,o,o,B.cc,o,o,o),p.gcqi(),r),o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,i,l,o,D.bNF,B.n),o,o,o,o,B.eN,o,o,1/0),B.q,o,B.y,o,E.afa,o,o,B.ai))}}
C.ajA.prototype={
T(){var w=x.s,v=x.t,u=x.S
return new C.ayu(B.cH,new A.aq(B.as,$.aw()),A.a([],w),A.a([],x.d4),A.a([],w),A.a([],w),A.a([],v),A.a([],v),A.a([],v),A.aZ(u),A.aZ(u),A.a([],v),A.a([],v),A.a([],v))},
ho(d){return this.y.$1(d)},
bp(){return this.z.$0()}}
C.ayu.prototype={
ghv(){var w=this.a.Q
return w!=null&&B.a.i(w).length!==0},
qG(d){return this.bJZ(d)},
bJZ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$qG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.zu()
r=t.Ns()
w=s<=0?3:4
break
case 3:w=5
return A.b(t.a95(d),$async$qG)
case 5:w=1
break
case 4:q=B.k.D(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return A.b(t.tg(d),$async$qG)
case 9:w=7
break
case 8:w=10
return A.b(t.DJ(q,s,r),$async$qG)
case 10:case 7:case 1:return A.h(u,v)}})
return A.i($async$qG,v)},
Ej(d,e,f,g){return this.coa(d,e,f,g)},
coa(d,e,f,g){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ej=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return A.b(C.bB7(s,C.bAM(),C.fRy(),d,e,f,g),$async$Ej)
case 3:case 1:return A.h(u,v)}})
return A.i($async$Ej,v)},
zu(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.aZQ(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&A.c()
return u+C.afZ(t,s.e.a.a)
case"memory":return s.ghv()&&D.mn.t(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.avU()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bi
case"color":return s.b5
case"reflex":return s.Z
default:u=s.b0
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
avU(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
Ns(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&A.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.fPK()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.b0
if(w!=null)return w.b
return 1}},
br(d){var w,v,u=this
u.bE(d)
if(u.f||u.c5)return
w=u.a
v=C.fqx(w.e,w.d.y2)
if(v!==C.fqx(d.e,d.d.y2)&&u.c!=null)u.m(new C.d8j(u,v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.bqf()
w=i.a
w.toString
$.t0=$.t0+1
i.Q=C.fqx(w.e,w.d.y2)
i.b1D()
i.aam()
if(i.ghv()){i.c5=!0
i.cU="Connecting to match\u2026"
i.cg="Both players enter the room together \u2014 play starts at the same time."
i.NO()
i.aa0()
i.bj=A.dF(B.h0,new C.d8m(i))}if(B.d.t(D.P0,i.a.e)){w=i.ghv()
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
k=B.a.i(J.k(t==null?"":t))}w=new C.aY9(!1,w,k.length===0||B.a.t(k,"@")?C.fPG(u,v,null):k,p,l,s)}else{w=w.c
w=C.fJL(w.c,w.a)}w=i.bJ=w}else{w=v.c
w=i.bJ=C.fJL(w.c,w.a)}v=C.huy()
v.bkh(i.a.e,i.d,w)
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
w.b6F(i.a.e,A.a0(m,x.N,x.z),i.a.c.a)
w=i.b0
i.r=w.c
if(w.e){if(w.r)j=D.Qq
else j=w.f===!0?D.pI:D.GT
i.zw(j)}}}i.b3=A.dF(B.nx,new C.d8n(i))
if(i.ghv())i.ba=A.dF(B.of,new C.d8o(i))}if(i.ghv()&&!B.d.t(D.P0,i.a.e))i.ba=A.dF(B.of,new C.d8p(i))
i.as=A.dF(B.hd,new C.d8q(i))},
NO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$NO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghv()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tC(s.d.b5,q)
w=p!=null?3:4
break
case 3:w=5
return A.b(C.bz6(p,t.a.c.a),$async$NO)
case 5:o=e
if(t.c!=null)t.m(new C.d7z(t,o))
w=1
break
case 4:w=6
return A.b(C.K2(q,t.a.d.b5,!1),$async$NO)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return A.b(C.bz6(n,t.a.c.a),$async$NO)
case 7:o=e
if(t.c!=null)t.m(new C.d7A(t,o))
case 1:return A.h(u,v)}})
return A.i($async$NO,v)},
agD(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$agD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghv()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.K2(r,s.d.b5,!1),$async$agD)
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
t.aKz(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=B.k.O(j)
else{h=j==null?null:J.k(j)
i=A.c7(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)B.d.bn(t.fy,new C.d82(t))
if(i!=null&&t.fr.length!==0){s=A.B(t.dy,x.S)
B.d.v(s,t.dy)
r=new A.eT()
r.dI(i)
B.d.fn(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.m(new C.d83())}case 1:return A.h(u,v)}})
return A.i($async$agD,v)},
aa0(){var w=0,v=A.j(x.H),u=this
var $async$aa0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.ZU(!0),$async$aa0)
case 2:return A.h(null,v)}})
return A.i($async$aa0,v)},
ZU(d){return this.cdP(d)},
cdO(){return this.ZU(!1)},
cdP(b3){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$ZU=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghv()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
if(q.length===0){w=1
break}p=B.a.i(s.c.a.toLowerCase())
w=3
return A.b(C.K2(q,s.d.b5,b3),$async$ZU)
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
a1.n(0,p,a2.ac())}if(i&&!d.aj(0,h))d.n(0,h,!1)
if(f&&!d.aj(0,g))d.n(0,g,!1)
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
if(a9){C.hUR(t.a.d.b5,q,j)
t.a.bp()}if(t.c==null){w=1
break}b0=t.bC
if(b0==null)b0="your opponent"
if(!a5){t.m(new C.d7P(b2,t,b0))
w=1
break}if(s==null){t.m(new C.d7Q(t))
w=1
break}b1=new A.Q(Date.now(),0,!1)
if(b1.cW(s)){s=s.by(b1).a
r=B.o.an(s,1e6)
t.m(new C.d7R(b2,t,r+(B.o.F(B.o.an(s,1000),1000)>0?1:0)))
w=1
break}if(t.c5){t.m(new C.d7S(b2,t))
b2=t.a.e
if(b2==="pattern")t.a6Y()
else if(b2==="memory"){t.b1C()
if(t.c!=null)t.m(new C.d7T())}}b2=t.bj
if(b2!=null)b2.a9(0)
t.bj=null
case 1:return A.h(u,v)}})
return A.i($async$ZU,v)},
aLt(d){var w,v,u,t,s=this
if(d!=null){w=new A.eT()
w.dI(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e0(v,x.S)
for(t=0;t<v;++t)u[t]=w.aD(9)
s.ry=u
s.x1=0
s.to=-1},
aLs(){return this.aLt(null)},
a6Y(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a6Y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ghv()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.cbi()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return A.b(C.K2(q,s.d.b5,!1),$async$a6Y)
case 5:r=t.aYC(e)
case 4:if(t.c==null){w=1
break}t.aLt(r)
t.m(new C.d71(t))
t.CX()
case 1:return A.h(u,v)}})
return A.i($async$a6Y,v)},
aYC(d){var w,v,u,t=null
if(d==null)return t
w=J.q(d,"sessionState")
if(!x.f.b(w))return t
v=J.q(w,"patternSeed")
if(typeof v=="number")return B.k.O(v)
u=v==null?t:J.k(v)
return A.c7(u==null?"":u,t)},
cbi(){var w=this.a,v=w.Q
if(v==null)return null
return this.aYC(C.tC(w.d.b5,v))},
aam(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$aam=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$aam)
case 3:r=e
q=t.a
p=q.e
q=B.a.i(q.c.a.toLowerCase())
s=A.f3(J.q(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.m(new C.d7y(t,s))
case 1:return A.h(u,v)}})
return A.i($async$aam,v)},
oD(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n
var $async$oD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$oD)
case 2:p=e
o=u.a
n=o.e
o=B.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bBB().length
else s=n==="typing"?50:105
if(n==="typing")r=B.o.F(u.at+5,s)
else{q=u.at
r=t?B.o.F(q+6,s):B.o.F(q+1,s)}w=3
return A.b(p.aq("Int","ngmy_game_"+n+"_"+o,r),$async$oD)
case 3:u.at=r
return A.h(null,v)}})
return A.i($async$oD,v)},
a0N(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a0N=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghv()||t.b0==null||t.f||t.aR){w=1
break}if(t.c5){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.K2(r,s.d.b5,!1),$async$a0N)
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
s.b6F(r.e,n,r.c.a)
r=t.b0
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.Qq
else k=r.f===!0?D.pI:D.GT
w=7
return A.b(t.zw(k),$async$a0N)
case 7:w=5
break
case 6:if(t.c!=null)t.m(new C.d84())
case 5:case 1:return A.h(u,v)}})
return A.i($async$a0N,v)},
aey(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$aey=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghv()||q.b0==null||q.a.Q==null||q.aR){w=1
break}q.aR=!0
t=3
o=q.b0
o.toString
p=o.cFf(q.a.e)
o=q.a
n=o.d.b5
o=o.Q
o.toString
w=6
return A.b(C.aNZ(n,o,p),$async$aey)
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
return A.i($async$aey,v)},
zw(d){return this.bQY(d)},
bQY(d){var w=0,v=A.j(x.H),u,t=this,s
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
return A.b(t.Ig(s,s),$async$zw)
case 9:w=4
break
case 6:w=10
return A.b(t.Wo(s,s),$async$zw)
case 10:w=4
break
case 7:w=11
return A.b(t.a94(s,s),$async$zw)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghv()?12:13
break
case 12:w=14
return A.b(t.GU(),$async$zw)
case 14:case 13:case 1:return A.h(u,v)}})
return A.i($async$zw,v)},
YT(d,e){return this.c5P(d,e)},
c5P(d,e){var w=0,v=A.j(x.H),u,t=this
var $async$YT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=t.ghv()?3:5
break
case 3:w=6
return A.b(t.aey(),$async$YT)
case 6:if(d===D.pH){w=1
break}w=4
break
case 5:if(d===D.pH){w=1
break}case 4:w=7
return A.b(t.zw(d),$async$YT)
case 7:case 1:return A.h(u,v)}})
return A.i($async$YT,v)},
aag(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aag=A.e(function(d,e){if(d===1)return A.f(e,v)
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
return A.b(C.aNZ(t.a.d.b5,q,l),$async$aag)
case 3:t.a.bp()
case 1:return A.h(u,v)}})
return A.i($async$aag,v)},
GU(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$GU=A.e(function(d,e){if(d===1)return A.f(e,v)
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
C.fRY(t.a.d.b5,q,n)
C.hY9(t.a.d.b5,q)
w=3
return A.b(C.afO(t.a.d.b5),$async$GU)
case 3:t.a.bp()
case 1:return A.h(u,v)}})
return A.i($async$GU,v)},
q(){var w,v=this
if(v.ghv()&&!v.f)v.aag()
else if(!v.f)v.bXj()
C.aYb();++v.RG
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
v.bqe()},
ctm(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&A.c()
v=v<=0||w.b0==null}if(v)return
if(w.c5)return
v=w.b0
v.toString
w.a.toString
if(v.a>=v.b){w.tg("Goal completed!")
return}v=++w.rx
if(v%5===0)w.m(new C.d8d())},
b1D(){var w,v,u,t,s,r=this
r.x=A.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e0(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b1C()
break
case"scramble":r.bi=0
r.b1E()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=B.o.F(r.at,50)
v=J.e0(5,x.N)
for(t=0;t<5;++t)v[t]=D.d4b[B.o.F(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bM(0,B.c3)
break
case"math":r.y2=0
r.b1B()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b1F()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e0(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
B.d.fn(v,s)
if(!r.cgb()){w=J.e0(9,w)
for(u=0;u<9;++u)w[u]=u
B.d.fn(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
B.d.a8(w)
w.push(r.d.aD(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.Pl()
break
case"pattern":if(r.ghv()){r.ry=A.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aLs()
w=A.t(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.CX()}break
case"color":r.b5=0
r.b1w()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.Z=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b2J()
break
default:if(B.d.t(D.P0,w)){w=r.b0
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
aZQ(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
cgb(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return B.o.F(v,2)===0},
b1F(){var w,v,u,t,s,r=this,q=B.o.F(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e0(o,x.S)
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
b1B(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bBB().length-6)u.at=0
w=$.bBB()
v=w[B.o.F(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b1E(){var w=this,v=w.w=D.cKd[B.o.F(w.at+w.bi,105)]
w.ax=C.hYr(v)
w.ay=A.c1(v.length,null,!1,x.T)
w.ch=A.a(w.ax.split(""),x.s)
w.e.bM(0,B.c3)},
b2J(){var w=this,v=w.cx
if(v!=null)v.a9(0)
w.y=!1
w.z=null
w.cx=A.cL(A.dA(0,0,0,120+w.d.aD(280),0,0),new C.d81(w))},
bR0(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.qG("Too early \u2014 paid for "+t.Z+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=B.o.an(new A.Q(v,0,!1).by(u).a,1000)}if(w<520){t.m(new C.d7w(t))
v=t.Z
if(v>=5){t.oD()
t.tg("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b2J()
t.m(new C.d7x())}}else t.qG("Too slow ("+w+"ms) \u2014 paid for "+t.Z+"/5.")},
csD(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=B.d.bf(t.ay,new C.d88())
if(u<0)return
t.m(new C.d89(t,u,v,d))},
csE(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.m(new C.d8a(u,d,v))},
bBo(){var w,v,u=this
if(u.f)return
if(B.d.b8(u.ay,new C.d72())){u.c.I(x.q).f.R(D.eHb)
return}w=B.d.fS(u.ay)
v=u.w
v===$&&A.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.m(new C.d73(u))
if(u.ghv()&&D.mn.t(0,u.a.e))u.a_7()
if(u.bi>=5){u.oD()
if(u.ghv()&&D.mn.t(0,u.a.e))u.mG(!0)
else u.tg("All 5 words unscrambled!")}else{u.b1E()
u.r="Word "+(u.bi+1)+" of 5 \u2014 place letters in order"
u.m(new C.d74())}}else u.qG("Wrong word \u2014 paid for "+u.bi+"/5.")},
b1w(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=B.o.F(w.at+w.b5*11,4),t=v[w.d.aD(4)]
w.aF=t
w.aE=v[u]
w.aO=[B.dC,B.dv,B.hL,B.qY][u]
w.w=t},
aKz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=B.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a8(0)
w=h.id
w.a8(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=A.aZ(x.S)
for(s=J.jo(v),s=s.gah(s),r=x.j;s.C();){q=s.gU(s)
p=B.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aV(r.b(o)?o:B.cG),n=p===g;q.C();){m=q.gU(q)
l=typeof m=="number"?B.k.O(m):A.c7(J.k(m),null)
if(l==null)continue
t.J(0,l)
if(n)w.J(0,l)}}f.v(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aV(k);w.C();){m=w.gU(w)
l=typeof m=="number"?B.k.O(m):A.c7(J.k(m),null)
if(l!=null)f.J(0,l)}}h.k2=B.k.bw(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=A.aN(J.q(j,g))
i=f==null?null:B.k.O(f)
if(i!=null)h.fx=i}},
b1C(){var w,v,u,t,s,r,q,p=this
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
p.aKz(s)}else B.d.fn(p.fr,p.d)},
cd8(d){var w,v,u,t=this
if(t.c5)return
if(t.f||t.k1||t.go.t(0,d)||B.d.t(t.fy,d))return
t.m(new C.d7I(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.m(new C.d7J(t,v,u))
if(t.ghv()&&D.mn.t(0,t.a.e))t.a_7()
if(t.go.a>=t.fr.length){t.oD()
if(t.ghv()&&D.mn.t(0,t.a.e))t.mG(!0)
else t.avX()}return}t.k1=!0
A.bN(D.bjV,new C.d7K(t),x.c)},
b1_(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&A.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.m(new C.d7U(u))
if(u.y1>=5){u.oD()
u.tg("All 5 questions correct!")}else{u.b1F()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.m(new C.d7V())}}else u.qG(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.m(new C.d7W(u))
if(u.y2>=6){u.oD()
u.tg("All 6 math questions correct!")}else{u.b1B()
u.r="Question "+(u.y2+1)+" of 6"
u.m(new C.d7X())}}else{u.Uu(u.y2+1)
u.qG(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.m(new C.d7Y(u))
if(u.b5>=5){u.oD()
u.tg("All 5 color rounds correct!")}else{u.b1w()
u.r="Round "+(u.b5+1)+" of 5 \u2014 tap the COLOR of the text"
u.m(new C.d7Z())}}else u.qG("Wrong color \u2014 paid for "+u.b5+"/5.")
return}if(v){u.oD()
u.avX()}else u.c.I(x.q).f.R(D.eHV)},
csC(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=B.d.cG(q.k4,0)
v=B.o.an(d,3)
u=B.o.F(d,3)
t=B.o.an(w,3)
s=B.o.F(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.m(new C.d87(q,d,w))
if(B.d.fS(q.k4)==="123456780"){q.oD()
q.avX()}}},
Pl(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Pl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.m(new C.d7L(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.d7M(t,q).$0()
t.c.e4()
w=6
return A.b(A.bN(B.kx,null,r),$async$Pl)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.d7N(t).$0()
t.c.e4()
w=7
return A.b(A.bN(B.jm,null,r),$async$Pl)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.m(new C.d7O(t))
case 1:return A.h(u,v)}})
return A.i($async$Pl,v)},
csF(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.qG("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.m(new C.d8b(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.oD()
u.tg("Perfect Simon run!")
return}u.m(new C.d8c(u))
u.Pl()}},
CX(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$CX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.m(new C.d75(t))
s=x.H
w=3
return A.b(A.bN(B.jl,null,s),$async$CX)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.d76(t,o).$0()
t.c.e4()
w=7
return A.b(A.bN(B.Wx,null,s),$async$CX)
case 7:if(t.c==null){w=1
break}new C.d77(t).$0()
t.c.e4()
w=8
return A.b(A.bN(B.iq,null,s),$async$CX)
case 8:case 5:r.length===q||(0,A.K)(r),++p
w=4
break
case 6:if(t.c!=null)t.m(new C.d78(t))
case 1:return A.h(u,v)}})
return A.i($async$CX,v)},
Uu(d){return this.bwc(d)},
bwc(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Uu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return A.b(A.ay(),$async$Uu)
case 3:s=f
r=t.a
q=r.e
r=B.a.i(r.c.a.toLowerCase())
p=$.bBB().length
o=B.o.F(t.at+d,p)
w=4
return A.b(s.aq("Int","ngmy_game_"+q+"_"+r,o),$async$Uu)
case 4:t.at=o
case 1:return A.h(u,v)}})
return A.i($async$Uu,v)},
csA(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.qG("Wrong tile \u2014 paid for "+v.avU()+"/"+C.fPK()+" moves.")
return}v.m(new C.d85(v,w))
if(v.ghv()&&D.mn.t(0,v.a.e))v.a_7()
if(v.x1>=w)if(v.x2>=7){v.oD()
if(v.ghv()&&D.mn.t(0,v.a.e))v.mG(!0)
else v.tg("All 7 pattern rounds correct!")}else{v.m(new C.d86(v))
v.CX()}},
Ig(d,e){return this.cby(d,e)},
tg(d){return this.Ig(null,d)},
avX(){return this.Ig(null,null)},
cby(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ig=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a9(0)
s=t.b3
if(s!=null)s.a9(0)
r=t.a.x*1.46
t.m(new C.d7G(t,r))
q=B.o.u(1000*Date.now())
s=t.a
p=new A.d1(q,s.c.a,r,B.fz,B.fa,"Game payout: "+s.f,null,null,B.cj,new A.Q(Date.now(),0,!1))
A.afL(p,!0)
t.a.ho(p)
t.a.bp()
o=e==null?"+$"+B.k.aa(r,2)+" added to your balance!":e
s=t.a
C.ui(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.Ej(d,o,"YOU WIN!",!0),$async$Ig)
case 3:w=4
return A.b(C.afD(t.a.f,o),$async$Ig)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ig,v)},
Eh(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Eh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghv()&&D.mn.t(0,t.a.e)?3:4
break
case 3:w=5
return A.b(t.cne(),$async$Eh)
case 5:w=1
break
case 4:s=t.zu()
r=t.Ns()
w=r<=0||s<=0?6:7
break
case 6:w=8
return A.b(t.a95("Time's up \u2014 no progress to pay."),$async$Eh)
case 8:w=1
break
case 7:q=B.k.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return A.b(t.tg("Complete! Max payout earned."),$async$Eh)
case 12:w=10
break
case 11:w=13
return A.b(t.DJ(q,s,r),$async$Eh)
case 13:case 10:case 1:return A.h(u,v)}})
return A.i($async$Eh,v)},
Ps(d){return this.cfT(d)},
a_7(){return this.Ps(!1)},
cfT(b1){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$Ps=A.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghv()&&D.mn.t(0,r.a.e))||r.a.Q==null){w=1
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
return A.b(C.K2(q,r.a.d.b5,!1),$async$Ps)
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
h=A.aZ(x.S)
for(a6=i,a6=new A.ds(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aV(g);a8.C();){f=a8.gU(a8)
e=typeof f=="number"?B.k.O(f):A.c7(J.k(f),null)
if(e!=null)J.ce(h,e)}}a6=h
a6=A.B(a6,A.a2(a6).k("cl.E"))
B.d.fe(a6)
J.aG(m,"memoryMatched",a6)}d=J.q(m,"wagers")
a0=a2.b(d)?A.a0(d,a3,a5):A.U(a3,a5)
J.aG(a0,p,r.a.x)
J.aG(m,"wagers",a0)
w=11
return A.b(C.aNZ(r.a.d.b5,q,m),$async$Ps)
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
return A.i($async$Ps,v)},
mG(d){return this.cnf(d)},
cne(){return this.mG(!1)},
cnf(b5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$mG=A.e(function(b6,b7){if(b6===1)return A.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghv()||t.a.Q==null?3:4
break
case 3:w=5
return A.b(t.Eh(),$async$mG)
case 5:w=1
break
case 4:w=6
return A.b(t.Ps(!0),$async$mG)
case 6:s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=B.a.i(s.c.a.toLowerCase())
w=7
return A.b(C.K2(q,s.d.b5,!0),$async$mG)
case 7:o=b7
n=t.Ns()
w=o==null?8:9
break
case 8:m=B.k.D(t.zu()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return A.b(t.a95("Time's up \u2014 no progress to pay."),$async$mG)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return A.b(t.tg("Complete! Max payout earned."),$async$mG)
case 17:w=15
break
case 16:w=18
return A.b(t.DJ(m,t.zu(),n),$async$mG)
case 18:case 15:case 11:w=19
return A.b(t.GU(),$async$mG)
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
return A.b(t.a95("Time's up \u2014 no progress to pay."),$async$mG)
case 22:w=23
return A.b(t.GU(),$async$mG)
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
t.m(new C.d8_(t,a8,a2))
r=t.a
r.toString
h=B.o.u(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+B.k.aa(a7,2):d+" ("+b1+"/"+b2+")"
r.ho(new A.d1(h,b0,a9,B.fz,B.fa,d,null,null,B.cj,new A.Q(Date.now(),0,!1)))
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
return A.b(t.GU(),$async$mG)
case 25:case 1:return A.h(u,v)}})
return A.i($async$mG,v)},
DJ(d,e,f){return this.cbw(d,e,f)},
cbw(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$DJ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a9(0)
s=t.b3
if(s!=null)s.a9(0)
r=t.a.x*1.46*d
t.m(new C.d7E(t,r,d))
s=B.o.u(1000*Date.now())
q=t.a
p=new A.d1(s,q.c.a,r,B.fz,B.fa,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,B.cj,new A.Q(Date.now(),0,!1))
A.afL(p,!0)
t.a.ho(p)
t.a.bp()
if(t.c==null){w=1
break}o=B.k.V(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&A.c()
m=q+C.afZ(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?B.d.cI(t.cy,0,new C.d7F()):f
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
bXj(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.zu()
v=o.Ns()}catch(u){return}if(v<=0||w<=0)return
t=B.k.D(w/v,0,1)
s=A.nK(B.k.aa(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=B.o.u(1000*Date.now())
p=o.a
r.ho(new A.d1(q,p.c.a,s,B.fz,B.fa,"Game partial: "+p.f+" ("+A.t(w)+"/"+A.t(v)+", left early)",n,n,B.cj,new A.Q(Date.now(),0,!1)))
o.a.bp()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.ui(s,n,"Left early \xb7 +$"+B.k.aa(s,2)+" ("+A.t(w)+"/"+A.t(v)+")",q,r,p,n,!0)},
a94(d,e){return this.bLB(d,e)},
bLB(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a94=A.e(function(f,g){if(f===1)return A.f(g,v)
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
t.a.ho(new A.d1(r,q,p,B.fz,B.fa,"Game payout: "+s+" (draw, stake returned)",null,null,B.cj,new A.Q(o,0,!1)))
t.a.bp()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.ui(o,null,"Draw. Your $"+B.k.aa(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.Ej(d,"Nobody won, so your $"+B.k.aa(t.a.x,2)+" stake was returned.","DRAW",!1),$async$a94)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a94,v)},
Wo(d,e){return this.bLC(d,e)},
a95(d){return this.Wo(null,d)},
bLC(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Wo=A.e(function(f,g){if(f===1)return A.f(g,v)
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
return A.b(t.Ej(d,e,"YOU LOSE",!1),$async$Wo)
case 3:case 1:return A.h(u,v)}})
return A.i($async$Wo,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&A.c()
w=B.o.an(m,60)
m=B.a.aV(B.o.u(B.o.F(m,60)),2,"0")
v=A.aH(n,n,n,n,B.akH,n,n,n,new C.d8e(d),n,n,n,n,n,n)
if(o.ghv()){u=o.bC
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=A.D(A.d(u?t.f+" vs "+A.t(o.bC):t.f,n,2,B.a2,n,n,n,B.fT,n,n,n),1)
r=A.m(10)
q=x.p
r=A.A(A.a([v,s,A.p(n,C.aoM(new C.d8f(o),B.ri,t.c.a),B.f,n,n,new A.o(B.cR,n,n,r,n,n,B.n),n,n,n,n,B.fN,n,n,n)],q),B.m,n,B.e,B.j,0,n,n)
t=o.a
s=t.w
v=A.m(10)
s=A.p(n,A.A(A.a([A.D(A.d("Win $"+B.k.aa(t.x*1.46,2)+" \xb7 stake $"+B.k.aa(o.a.x,2)+" \u2022 Progress "+o.zu()+"/"+o.Ns(),n,n,n,n,n,n,D.eQm,n,n,n),1),new C.anX(o.a.c.a,new C.d8g(o),n),B.ab,D.bzM,B.d9,A.d(""+w+":"+m,n,n,n,n,n,n,B.nU,n,n,n)],q),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,n,v,n,new A.a6(B.a3,B.a7,B.x,s,n,n),B.n),n,n,n,n,B.h1,n,n,n)
v=o.a.w
m=A.T(v).k("J<1,w>")
m=A.B(new A.J(v,new C.d8h(),m),m.k("aj.E"))
w=A.m(14)
v=A.I(B.b7,B.r,1)
p=C.aND(n,D.b2P,A.bq(!0,new A.C(Ad.WT,A.v(A.a([r,s,B.P,new A.fj(new C.d8i(o),n),B.ao,A.D(A.p(n,o.bLA(),B.f,n,n,new A.o(n,n,v,w,n,new A.a6(B.a3,B.a7,B.x,m,n,n),B.n),n,n,n,n,B.cl,n,n,n),1)],q),B.aj,n,B.e,B.j,0,B.p),n),!0,!1,B.ah,!0,!0))
if(!o.c5)return p
m=A.Y(140,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255)
w=A.Y(242,B.im.l()>>>16&255,B.im.l()>>>8&255,B.im.l()&255)
v=A.m(18)
u=A.I(B.b7,B.r,1)
return new A.an(B.W,n,B.a9,B.q,A.a([p,A.bY(0,A.p(B.A,A.e2(A.p(n,A.v(A.a([D.eDm,B.ac,A.d(o.cU,n,n,n,n,n,n,D.eRM,B.L,n,n),B.ao,A.d(o.cg,n,n,n,n,n,n,D.eQ5,B.L,n,n)],q),B.m,n,B.e,B.Q,0,B.p),B.f,n,n,new A.o(w,n,u,v,n,n,B.n),n,n,n,B.uQ,B.x0,n,n,n),!1,n),B.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
bYh(){var w=this.k3
return A.cm(new C.d7D(this,w,B.k.dG(this.fr.length/w)))},
bLA(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.bYh()
if(m==="scramble"){m=o.r
m===$&&A.c()
w=x.l
return A.v(A.a([A.d(m,n,n,n,n,n,n,B.oN,n,n,n),A.d("Words "+o.bi+"/5",n,n,n,n,n,n,B.CA,n,n,n),B.ac,A.d("Tap letters below to fill each slot",n,n,n,n,n,n,A.l(n,n,A.Y(166,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.S,A.c5(B.fI,A.ip(o.ay.length,new C.d7l(o),!0,w),B.bx,6,6),B.aO,A.c5(B.fI,A.ip(o.ch.length,new C.d7m(o),!0,w),B.bx,8,8),B.aO,new A.a5(1/0,n,A.i9(D.ffr,o.gbBn(),A.fl(n,n,B.aD,n,n,n,n,n,n,B.c,n,n,B.ce,n,n,n,n,n,n,n)),n)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="typing"){m=o.w
m===$&&A.c()
return new C.aqb(m,o.e,new C.d7n(o),new C.d7o(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&A.c()
m=A.a([A.d(m,n,n,n,n,n,n,B.oN,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(A.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,B.CA,n,n,n))
m.push(B.ac)
if(o.a.e==="sequence"){w=o.az
w===$&&A.c()
w+=", ?"}else w=o.CW
m.push(A.f4(B.A,A.d(w,n,n,n,n,n,n,B.oM,B.L,n,n),B.f,B.ds))
m.push(B.aO)
w=o.x
B.d.v(m,new A.J(w,new C.d7p(o),A.T(w).k("J<1,r>")))
return A.v(m,B.m,n,B.e,B.j,0,B.p)}if(m==="puzzle")return A.cm(new C.d7q(o))
if(m==="simon"){m=o.r
m===$&&A.c()
return A.v(A.a([A.d(m,n,n,n,n,n,n,B.oN,n,n,n),A.d("Progress "+o.p3+"/21",n,n,n,n,n,n,B.CA,n,n,n),B.P,A.D(A.lP(1,A.ip(4,new C.d7r(o),!0,x.l),2,10,10,n,B.dP,!1),1)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="pattern")return A.cm(new C.d7s(o))
if(m==="color"){u=A.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[B.dC,B.dv,B.hL,B.qY]
m=o.r
m===$&&A.c()
m=A.d(m,n,n,n,n,n,n,B.oN,n,n,n)
w=A.d("Round "+o.b5+"/5",n,n,n,n,n,n,B.CA,n,n,n)
v=o.aE
v===$&&A.c()
s=o.aO
s===$&&A.c()
s=A.a([m,w,B.ac,A.d(v,n,n,n,n,n,n,A.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.aO],x.p)
r=J.e0(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=A.fl(n,n,A.Y(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,B.c,n,n,B.f3,n,n,n,n,n,n,n)
r[q]=new A.C(B.cK,new A.a5(1/0,n,A.i9(new A.x(u[q],n,B.ct,n,n,n,n,n,n,n,n,n),new C.d7t(o,u,q),m),n),n)}B.d.v(s,r)
return A.v(s,B.m,n,B.e,B.j,0,B.p)}if(m==="reflex"){m=o.y
p=m?B.bl:B.cb
w=o.r
w===$&&A.c()
w=A.d(w,n,n,n,n,n,n,B.a65,B.L,n,n)
v=A.d("Fast taps "+o.Z+"/5",n,n,n,n,n,n,D.eNE,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=A.d(m,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,n,n,n,Math.min(A.aI(s,B.bS,x.w).w.a.a*0.18,72),n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return A.rc(A.aE(B.c5,A.dh(n,A.v(A.a([w,B.P,v,B.b8,s,B.b8,new A.C(B.Em,A.d(m,n,n,n,n,n,n,A.l(n,n,A.Y(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),B.m,n,B.b9,B.j,0,B.p),p,n,B.bc,n,T.Aa,n,n,n,n,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gbR_(),n,n,n,n,n,n,!1,B.aa))}if(B.d.t(D.P0,m)&&o.b0!=null){m=o.a.e
w=o.b0
w.toString
return C.hNS(m,new C.d7u(o),new C.d7v(o),o.d,w)}m=o.r
m===$&&A.c()
return A.av(A.d(m,n,n,n,n,n,n,B.dj,n,n,n),n,n,n)}}
C.akq.prototype={
T(){return new C.beo()},
cKX(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.beo.prototype={
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.a,a0=d.c,a1=d.d
d=A.aI(a2,B.e6,x.w).w
w=x.p
v=A.a([A.bLz(!1,f.a.r,"INVESTMENT PLANS",e),B.d5],w)
u=a0.x
if(u!=null){t=u.d.bQ()
s=B.a.aV(B.o.u(A.bF(t)),2,"0")
r=B.a.b_(B.o.u(A.bx(t)+1),2)
q=A.m(18)
p=A.I(F.VF,B.r,2.2)
o=x.V
n=A.a([new A.ac(0,B.G,A.Y(89,B.qi.l()>>>16&255,B.qi.l()>>>8&255,B.qi.l()&255),B.eQ,20),new A.ac(0,B.G,A.Y(102,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dp,14)],o)
m=A.ao(e,A.p(e,e,B.f,e,e,new A.o(A.Y(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),e,e,e,e,e,B.a6),e,120,e,e,e,e,e,120),e,e,e,-20,-24,e)
l=A.m(10)
k=A.I(F.VF,B.r,3.4)
o=A.a([new A.ac(0,B.G,A.Y(166,B.qi.l()>>>16&255,B.qi.l()>>>8&255,B.qi.l()&255),B.dz,10),new A.ac(0,B.G,A.Y(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cI,6)],o)
o=A.A(A.a([A.p(e,e,B.f,e,e,new A.o(e,e,k,l,o,new A.a6(B.ax,B.aC,B.x,D.cUj,D.cwW,e),B.n),e,42,e,e,e,e,e,56),B.b8,f.b3u(a2,!0)],w),B.m,e,B.e,B.j,0,e,e)
l=A.CL(u.a,1,B.a2,D.eUP)
k=u.b
j=u.c
i=A.CL("Making $"+A.dy(k*j)+" Daily",1,B.a2,D.eV1)
h=A.CL(f.aZC(k),1,B.a2,D.eOl)
r=A.A(A.a([A.D(A.v(A.a([D.f8S,A.CL(a0.c,1,B.a2,D.aNv)],w),B.F,e,B.e,B.j,0,B.p),1),A.v(A.a([D.f8E,A.d(s+"/"+r,e,e,e,e,e,e,D.aNv,e,e,e)],w),B.dG,e,B.e,B.j,0,B.p)],w),B.m,e,B.e,B.j,0,e,e)
s=A.p(e,e,B.f,A.Y(89,D.wv.l()>>>16&255,D.wv.l()>>>8&255,D.wv.l()&255),e,e,e,1,e,e,e,e,e,e)
j=A.A(A.a([f.ap1("INVESTED","$"+A.dy(k),!0),f.ap1("DAILY ROI",B.k.aa(j*100,2)+"%",!0),f.ap1("DAYS LEFT",""+(261-u.f)+" d",!0)],w),B.m,e,B.hJ,B.j,0,e,e)
k=A.dy(u.e)
u=u.f
g=261-u>0?"ACTIVE":"ENDED"
B.d.v(v,A.a([D.ff0,B.u4,A.p(e,new A.an(B.W,e,B.a9,B.q,A.a([m,A.v(A.a([o,B.P,D.f7m,B.bB,l,B.au,i,B.au,h,B.P,r,B.ao,s,B.ao,j,B.au,A.CL("Earned $"+k+" \u2022 Clocked "+u+"/261 \u2022 "+g,1,B.a2,D.eUd)],w),B.F,e,B.e,B.Q,0,B.p)],w),e),B.f,e,e,new A.o(e,e,p,q,n,D.bOs,B.n),e,e,e,e,B.by,e,e,1/0),B.a5m],w))}v.push(D.f_L)
v.push(B.u4)
B.d.v(v,new A.J(a1,new C.dbR(f,a2),A.T(a1).k("J<1,r>")))
return A.cc(e,B.K,A.bq(!1,A.ci(A.v(v,B.F,e,B.e,B.j,0,B.p),B.q,e,B.y,e,new A.N(20,10,20,124+d.r.d),e,e,B.ai),!0,!1,B.ah,!0,!0),e,!1,!1,e,e)},
b3u(d,e){var w=null,v=A.Y(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(8),t=A.I(B.j2,B.r,1)
return A.p(w,A.A(A.a([A.V(B.aiC,B.c,w,w,w,16),B.d9,A.d("TAP",w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eD,w,w,w)},
aZC(d){var w=B.a.aV(B.o.u(B.k.V(d*100)),4,"0")
return"****  ****  ****  "+B.a.b_(w,w.length-4)},
ap1(d,e,f){var w=null,v=A.Y(217,D.wv.l()>>>16&255,D.wv.l()>>>8&255,D.wv.l()&255)
v=A.d(d,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.v(A.a([v,B.bB,A.CL(e,w,w,A.l(w,w,E.zV,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),B.F,w,B.e,B.j,0,B.p)},
cdD(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gcPn(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
o=A.a([new A.ac(0,B.G,A.Y(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.QN,16),new A.ac(0,B.G,A.Y(115,B.ak.l()>>>16&255,B.ak.l()>>>8&255,B.ak.l()&255),B.dp,14),new A.ac(0,B.G,A.Y(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cI,8)],p)
n=A.ao(d,A.p(d,d,B.f,d,d,new A.o(d,d,d,d,d,new A.bS(B.A,0.5,B.x,d,0,A.a([A.Y(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),A.Y(0,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)],x.O),d,d),B.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=A.m(5)
l=A.I(B.c,B.r,2.2)
k=A.b0(4286436348)
k=A.Y(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=A.Y(B.k.V(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
i=A.b0(4279150057)
h=x.p
p=A.A(A.a([new A.a5(44,44,new A.an(B.W,d,B.a9,B.f,A.a([A.ao(d,A.eA(B.A,0.7853981633974483,A.p(d,d,B.f,d,d,new A.o(d,d,l,m,A.a([new A.ac(0.5,B.G,k,B.J,14),new A.ac(0,B.G,j,B.J,6),new A.ac(0,B.G,A.Y(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new A.u(0,2),4)],p),D.bN9,B.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.e3i],h),d),d),B.b8,e.b3u(b2,!0)],h),B.m,d,B.e,B.j,0,d,d)
a6=A.CL(a6,1,B.a2,D.eLb)
i=A.CL(e.aZC(a3),1,B.a2,D.eZa)
j=A.A(A.a([e.aZ2(B.k.aa(2.86,2)+"%"),B.ea,e.aZ2("261d")],h),B.m,d,B.e,B.j,0,d,d)
k=A.D(A.v(A.a([D.f0X,A.CL("$"+A.dy(a3),1,B.a2,D.eY_)],h),B.F,d,B.e,B.j,0,B.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=A.A(A.a([k,A.d(m,d,d,d,d,d,d,D.eLX,d,d,d)],h),B.dG,d,B.e,B.j,0,d,d)
k=A.p(d,d,B.f,A.Y(89,B.bv.l()>>>16&255,B.bv.l()>>>8&255,B.bv.l()&255),d,d,d,1,d,d,d,d,d,d)
l=A.A(A.a([A.D(e.aw9("Daily","$"+A.dy(a4)),1),B.ea,A.D(e.aw9("Total","$"+A.dy(a4*261)),1),B.ea,A.D(e.aw9("Days","261"),1)],h),B.m,d,B.e,B.j,0,d,d)
g=q?d:new C.dbQ(e,b3,a3,t)
f=B.k.V(127.5)
f=A.fl(d,d,B.bj,A.Y(f,B.ak.l()>>>16&255,B.ak.l()>>>8&255,B.ak.l()&255),A.Y(f,B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255),d,3,d,d,B.aP,d,d,d,d,new A.b7(A.m(10),D.aUt),d,d,d,d,d)
return A.p(d,new A.an(B.W,d,B.a9,B.f,A.a([n,A.v(A.a([p,B.bB,D.f9z,B.bB,a6,B.d_,i,B.ha,j,B.ha,m,B.ha,k,B.ha,l,B.P,new A.a5(1/0,40,A.i9(A.f4(B.A,A.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.eMm,d,d,d),B.f,B.ef),g,f),d)],h),B.F,d,B.e,B.Q,0,B.p)],h),d),B.f,d,d,new A.o(d,d,w,a0,o,D.bP0,B.n),d,d,d,B.kz,D.blI,d,d,1/0)},
aZ2(d){var w=null,v=A.Y(115,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(5),t=A.I(B.cm,B.r,1)
return A.p(w,A.d(d,w,w,w,w,w,w,D.eLz,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.EB,w,w,w)},
aw9(d,e){var w=null,v=A.Y(97,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(7),t=A.I(B.aK,B.r,1)
return A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,D.eUA,w,w,w),B.u5,A.f4(B.a3,A.d(e,w,w,w,w,w,w,D.eX5,w,w,w),B.f,B.ds)],x.p),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.m4,w,w,w)}}
C.agM.prototype={
T(){var w=null,v=A.a([],x._),u=$.aw()
return new C.avF(v,new A.aq(B.as,u),new A.aq(B.as,u),A.mn(0,w,w),new A.hU(),D.Qf,C.afA(),A.a([],x.fw),A.aZ(x.N),A.mn(0,w,w))}}
C.avF.prototype={
a_(){var w,v,u,t,s,r=this
r.a1()
w=r.a
w.toString
r.d=0
v=A.z1(0,1)
r.e!==$&&A.aQ()
r.e=v
r.ay=w.f.aE
w=r.k3=A.bl(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t].a
if(s.length!==0)u.J(0,s)}r.aar()
r.NN()
r.aoE()
r.cq5()
r.cqk()
$.aU.x1$.push(new C.czK(r))
r.a.toString},
NN(){var w=0,v=A.j(x.H),u,t=this,s
var $async$NN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aon(),$async$NN)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cz4(t,s))
case 1:return A.h(u,v)}})
return A.i($async$NN,v)},
gaxK(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gNJ())return!0
return!1},
gNJ(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaSl(){var w,v=this.CW
if(v==null)return B.bw
w=v.by(new A.Q(Date.now(),0,!1))
return w.a<0?B.bw:w},
bx_(){var w=this
if(w.a.c.w)return
if(w.gNJ()){if(!w.cx)w.m(new C.cyV(w))}else if(w.cx)w.m(new C.cyW(w))},
cjC(){this.m(new C.cze(this))},
tn(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$tn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.m(new C.czb(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.m(new C.czc(t))
w=1
break}w=3
return A.b(C.c6l(o.a,s),$async$tn)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return A.b(C.c6m(t.a.c.a,s),$async$tn)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.m(new C.czd(t,r,q))
t.cs3()
t.bx_()
if(r===3)t.Xp(r)}case 1:return A.h(u,v)}})
return A.i($async$tn,v)},
Xp(d){return this.bY8(d)},
bY8(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Xp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return A.b(C.bBd(q,r,new C.cz6(t),d,s.c.a),$async$Xp)
case 3:case 1:return A.h(u,v)}})
return A.i($async$Xp,v)},
wP(d){return this.byt(d)},
aoE(){return this.wP(!1)},
byt(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$wP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return A.b(A.a6I(k,C.hcI(l.d)),$async$wP)
case 3:j=m
w=4
return A.b(C.c6L(k),$async$wP)
case 4:s=j.a=f
w=5
return A.b(A.apb(k),$async$wP)
case 5:r=f
w=!s.a&&J.cw(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.Ud(!0,l,q,p)
m.a=s
w=8
return A.b(C.aop(k,s),$async$wP)
case 8:case 7:w=9
return A.b(C.Td(k),$async$wP)
case 9:o=f
w=10
return A.b(C.a64(k),$async$wP)
case 10:n=f
if(t.c==null){w=1
break}t.m(new C.cyX(m,t,r,o,n))
case 1:return A.h(u,v)}})
return A.i($async$wP,v)},
P_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$P_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.NN(),$async$P_)
case 3:s=t.c
if(s==null){w=1
break}r=A.eo(new C.cz9(t),!1,null,x.H)
w=4
return A.b(A.a4(s,!1).ci(r),$async$P_)
case 4:w=5
return A.b(t.NN(),$async$P_)
case 5:case 1:return A.h(u,v)}})
return A.i($async$P_,v)},
cua(){this.m(new C.czx(this))},
cqk(){var w=this,v=w.go
if(v!=null)v.a9(0)
if(w.a.c.w)return
w.go=A.dF(B.qw,new C.czr(w))},
cs3(){var w=this,v=w.id
if(v!=null)v.a9(0)
w.id=null
if(!w.gNJ()||w.CW==null)return
w.id=A.dF(B.hd,new C.czu(w))},
cq5(){var w=this,v=w.fy
if(v!=null)v.a9(0)
w.fy=A.dF(B.j3,new C.czq(w))
w.Eo()},
Eo(){return this.cs2()},
cs2(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Eo=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aE
t=4
w=7
return A.b(A.ay(),$async$Eo)
case 7:q=e
p=A.aT(J.q(q.a,"app_config"))
if(p!=null&&p.length!==0){o=B.R.aG(0,p,null)
if(x.f.b(o)){m=A.Cw(A.a0(o,x.N,x.z)).aE
i.a=m
r.a.f.aE=m}}w=10
return A.b(A.Ke(),$async$Eo)
case 10:w=e?8:9
break
case 8:w=11
return A.b(A.aNC(),$async$Eo)
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
break}if(i.a!==r.ay)r.m(new C.czs(i,r))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Eo,v)},
b2q(){B.d.b1(this.f,new C.czp())},
aar(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$aar=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.M0(t.a.c.a),$async$aar)
case 3:q=e
if(t.c==null){w=1
break}s=A.a([],x._)
if(J.cw(q)){B.d.v(s,q)
B.d.b1(s,new C.cz1())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(A.E(["role","ai","text",r,"at",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.z))}t.m(new C.cz2(t,s))
t.a04(!0)
A.bN(B.jl,new C.cz3(t),x.H)
case 1:return A.h(u,v)}})
return A.i($async$aar,v)},
adW(){var w=0,v=A.j(x.H),u=this
var $async$adW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.amd(u.a.c.a,u.f),$async$adW)
case 2:return A.h(null,v)}})
return A.i($async$adW,v)},
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
a9r(d){var w,v=this
v.m(new C.cz_(v,d))
w=v.e
w===$&&A.c()
if(w.f.length!==0)w.As(d,B.cp,B.kx)
else $.aU.x1$.push(new C.cz0(v,d))
if(d===0)v.a04(!0)
if(d===1)v.clx(!0)},
a04(d){$.aU.x1$.push(new C.czh(this,d))},
axn(){return this.a04(!1)},
a_o(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_o=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_T(),$async$a_o)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==B.a.i(t.a.f.r))t.m(new C.cza(t))
case 1:return A.h(u,v)}})
return A.i($async$a_o,v)},
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
return A.b(q.tn(),$async$mF)
case 10:q.m(new C.czi(q))
w=1
break
case 8:w=11
return A.b(q.tn(),$async$mF)
case 11:if(q.c!=null&&q.ch===3)q.Xp(3)
case 6:case 4:q.m(new C.czj(q,c5))
C.T0(q.a.c.a,"user",c5)
q.axn()
t=13
a8={}
w=16
return A.b(q.a_o(),$async$mF)
case 16:b1=B.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return A.b(A.a_T(),$async$mF)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.m(new C.czk(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.bzj("",null)
q.m(new C.czl(q,p))
C.T0(q.a.c.a,"ai",p)
q.axn()
r=[1]
w=14
break}o=A.mT(a9)
a9=q.a
n=""
m=C.hcI(a9.d)
w=C.hcB(c5)?20:21
break
case 20:w=22
return A.b(C.c6K(q.a.c.a),$async$mF)
case 22:q.db=c9
w=23
return A.b(q.wP(!0),$async$mF)
case 23:case 21:w=24
return A.b(A.a6I(q.a.c.a,m),$async$mF)
case 24:l=c9
k=C.hur(l)
a9=k
b2=Date.now()
b3=new A.Q(b2,0,!1).bQ()
b2=B.a.aV(B.o.u(A.bF(b3)),2,"0")
b4=B.a.aV(B.o.u(A.bP(b3)),2,"0")
b5=B.a.aV(B.o.u(A.dk(b3)),2,"0")
b6=B.a.aV(B.o.u(A.h0(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+A.bx(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return A.b(C.Td(q.a.c.a),$async$mF)
case 25:i=c9
h=C.fY_(i,25)
w=26
return A.b(C.a64(q.a.c.a),$async$mF)
case 26:g=c9
f=C.fZD(g)
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
if(C.hcB(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:B.a.i(b2).length!==0)===!0){b2.toString
b8=B.a.i(b2)}else{a9=a9.c
b8=B.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=A.t(d)
b4=A.t(j)
b5=q.a.c.w?"\n"+C.hQE(m)+"\n":""
b6=J.ab(n)!==0?"\n"+A.t(n)+"\n":""
b9=J.ab(a0)!==0?"\n"+A.t(a0)+"\n":""
c0=A.t(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hoO(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+A.t(c5)
w=28
return A.b(A.qx(o,a2,B.hh,null),$async$mF)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.bzj(a8.a,a3.a)
a4=c2
a5=A.hbY(a4)
c3=a5.a
a8.b=c3
if(B.d.gal(c3)){a9=A.B(C.hTm(c5),x.an)
a6=a9
J.fY(a6,C.hTn(c5))
J.fY(a6,C.hTo(c5))
J.fY(a6,A.hbq(c5))
J.fY(a6,C.hTr(c5,q.a.c.w))
a8.b=a6}c3=C.hSA(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return A.b(A.afR(c3,a6,m,q.a.c.a),$async$mF)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.m(new C.czm(a8,q,a7))
C.T0(q.a.c.a,"ai",a7)
if(J.cw(a8.b)&&q.c!=null)q.IV(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.m(new C.czn(q))
C.T0(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.m(new C.czo(q))
q.axn()
q.adW()
if(!q.a.c.w)q.tn()
w=r.pop()
break
case 15:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$mF,v)},
ccz(d){var w=A.U(x.N,x.z)
w.n(0,"type",d.a)
w.v(0,d.b)
return w},
ccA(d){var w,v,u,t,s,r,q,p=J.q(d,"phoneActions")
if(!x.j.b(p))return B.i8
w=A.a([],x.Z)
for(v=J.aV(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gU(v)
if(u.b(r)){q=A.c9R(A.a0(r,t,s))
if(q!=null)w.push(q)}}return w},
IV(d){return this.ck6(d)},
ck6(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$IV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J.aV(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gU(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return A.b(C.afM(p,o,new C.czf(t,p)),$async$IV)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return A.b(A.FV(p,null,o,!1,!0,t.a.c.a),$async$IV)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.I(r).f
p.R(new A.b1(new A.x(m,null,null,null,null,null,null,null,null,null,null,null),B.cb,null,null,null,null,null,null,null,null,null,null,null,B.l1,!1,null,null,null,B.q,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return A.b(A.FV(p,l.f,o,k,n,j),$async$IV)
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
return A.b(C.aWx(p,A.a([new C.r0("out_"+1000*o,new A.Q(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$IV)
case 14:t.aoE()
case 13:p=t.c.I(r).f
p.R(new A.b1(new A.x(m,null,null,null,null,null,null,null,null,null,null,null),B.d2,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null))
w=3
break
case 4:case 1:return A.h(u,v)}})
return A.i($async$IV,v)},
QH(d){return this.csx(d)},
csx(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$QH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return A.b(C.afM(d,n,new C.czw(t)),$async$QH)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return A.b(A.FV(d,null,n,!1,!0,t.a.c.a),$async$QH)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.I(x.q).f.R(A.b2(null,null,null,B.cb,null,B.q,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.l1,null,null,null,null,null,null,null,null,null,null))
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
return A.b(A.FV(d,q.f,r,p,n,o),$async$QH)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.I(x.q).f.R(A.b2(null,null,null,B.d2,null,B.q,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QH,v)},
clx(d){$.aU.x1$.push(new C.czg(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.M(d).ax.a===B.H,j=k?B.db:B.A0,i=m.d
i===$&&A.c()
w=x.O
w=k?A.a([B.adp,D.b87],w):A.a([B.aI,B.wr],w)
v=A.m(22)
u=A.a([new A.ac(0,B.G,A.Y(71,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),B.cw,16)],x.V)
t=m.a.c.w?m.gc8h():l
s=A.Y(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
r=A.I(B.bZ,B.r,1.5)
t=A.aE(l,A.p(l,C.fO4(m.a.f.Q,48),B.f,l,l,new A.o(s,l,r,l,l,l,B.a6),l,48,l,l,l,l,l,48),B.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,B.aa)
r=A.d("NGMY Helper",l,1,B.a2,l,l,l,B.dI,l,l,l)
s=A.p(l,l,B.f,l,l,D.aWx,l,8,l,l,l,l,l,8)
if(m.gaxK()&&m.d===0)q=m.gNJ()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=A.p(l,A.A(A.a([t,B.bd,A.D(A.v(A.a([r,B.bB,A.A(A.a([s,B.bp,A.D(A.d(q,l,1,B.a2,l,l,l,A.l(l,l,A.Y(B.k.V(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,B.cs,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,B.me,l,l,l,new C.czC(d),l,l,l,l,l,l)],p),B.m,l,B.e,B.j,0,l,l),B.f,l,l,new A.o(l,l,l,v,u,new A.a6(B.ax,B.aC,B.x,w,l,l),B.n),l,l,l,G.af9,D.bmo,l,l,l)
v=k?D.rK:B.c
u=A.m(14)
t=A.I(k?B.bE:B.e2,B.r,1)
u=A.p(l,A.A(A.a([m.bB8(),m.csf(1,B.ly,"Music")],p),B.m,l,B.e,B.j,0,l,l),B.f,l,l,new A.o(v,l,t,u,l,l,B.n),l,l,l,l,B.en,l,l,l)
t=m.e
t===$&&A.c()
if(m.gaxK()){v=A.a([],p)
if(m.gNJ()){s=A.Y(38,B.d2.l()>>>16&255,B.d2.l()>>>8&255,B.d2.l()&255)
r=A.m(12)
q=A.I(A.Y(115,B.d2.l()>>>16&255,B.d2.l()>>>8&255,B.d2.l()&255),B.r,1)
v.push(new A.C(B.L0,A.p(l,A.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hsK(m.gaSl())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.eWA,B.L,l,l),B.f,l,l,new A.o(s,l,q,r,l,l,B.n),l,l,l,l,B.eu,l,l,1/0),l))}if(m.cy&&!m.gNJ()){s=A.Y(31,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
r=A.m(12)
q=A.m(12)
o=A.V(B.qD,k?B.iM:B.fX,l,l,l,16)
v.push(new A.C(B.L0,A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,new A.C(B.eu,A.A(A.a([o,B.bp,A.d("Back to NGMY Helper AI",l,l,l,l,l,l,A.l(l,l,k?B.iM:B.fX,l,l,l,l,l,l,l,l,12,l,l,B.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),B.m,l,B.b9,B.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcjB(),l,l,l,l,l,l,l),B.f,s,0,l,l,l,l,l,B.ae),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcu9():l
v.push(A.D(new C.aol(s,q,new C.czD(),r,o,l),1))
v=A.v(v,B.m,l,B.e,B.j,0,B.p)}else v=m.bB9(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.h_w(r)
t=A.a([w,B.ac,new A.C(B.hG,u,l),B.P,A.D(A.h0v(A.a([v,new C.aoo(q,o,n,new C.czE(m,d),s,l)],p),B.q,t,B.y,new C.czF(m),l),1)],p)
if(m.d===0&&!m.gaxK()){w=A.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a1_:D.a0m
w.push(new A.a5(l,36,A.hL(l,new C.czG(m),v.length,l,l,B.aX,new C.czH(),!1),l))}if(m.ax&&m.f.length<=1)w.push(B.P)
v=m.r
u=A.l(l,l,k?B.c:B.bh,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=A.l(l,l,k?B.aA:B.dy,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?B.w:B.c
r=A.Y(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=A.m(22)
o=A.m(22)
n=k?B.b7:B.f7
u=A.D(A.aL(l,B.T,!1,l,!0,B.q,l,A.aM(),v,l,l,l,l,l,2,A.bo(l,new A.b4(4,q,B.Z),l,B.Al,l,l,l,l,!0,new A.b4(4,o,new A.aA(n,1,B.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.y,!0,l,!0,l,!1,l,B.ag,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.czI(m),l,!1,l,l,!1,l,!0,l,B.a8,l,l,l,l,l,l,l,l,l,l,l,u,!0,B.a5,l,B.am,l,B.aMs,l,l),1)
s=m.at
r=s?l:m.gcmy()
w.push(A.A(A.a([u,new A.I_(v,B.aI,l),B.bp,A.aF(!1,B.a1,!0,l,A.aK(!1,l,!0,new A.a5(44,44,s?D.dXY:P.akz,l),B.cL,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),B.f,B.aI,0,l,l,B.cL,l,l,B.ae)],p),B.dG,l,B.e,B.j,0,l,l))
w=A.v(w,B.m,l,B.e,B.Q,0,B.p)
v=k?B.kY:B.c
t.push(A.tD(B.rw,A.p(l,new A.C(B.Ah,w,l),B.f,l,l,new A.o(v,l,A.I(k?A.Y(41,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Y(18,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.r,1),B.rw,l,l,B.n),l,l,l,l,l,l,l,l),14,!1))}return new A.V7(i,new C.czJ(m),A.cc(l,j,A.bq(!0,A.v(t,B.m,l,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),l,!1,!1,l,l),l)},
bB8(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===0
p=this.c
p.toString
v=A.M(p).ax.a===B.H
if(w)p=A.Y(B.k.V(255*(v?0.25:0.12)),B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
else p=B.K
u=A.m(11)
t=w?A.I(A.Y(B.k.V(127.5),B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),B.r,1):q
s=A.V(B.tm,w?B.aI:B.cU,q,q,q,17)
if(w)r=v?B.c:B.az
else r=B.cU
return A.D(A.aE(q,A.dh(q,A.A(A.a([s,B.bp,A.d("Chat",q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.b9,B.j,0,q,q),q,q,B.bc,new A.o(p,q,t,u,q,q,B.n),B.eL,q,q,q,B.uI,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cyY(this),q,q,q,q,q,q,!1,B.aa),1)},
csf(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
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
if(w)r=v?B.c:B.az
else r=B.cU
r=A.a([s,B.bp,A.d(f,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return A.D(A.aE(q,A.dh(q,A.A(r,B.m,q,B.b9,B.j,0,q,q),q,q,B.bc,new A.o(p,q,t,u,q,q,B.n),B.eL,q,q,q,B.uI,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.czv(this,d),q,q,q,q,q,q,!1,B.aa),1)},
bB9(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.bd7:A.Y(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
w=A.m(18)
v=A.I(d?B.dt:B.aK,B.r,1)
u=q===0?1:q
return A.p(s,A.jZ(!0,s,t.ok,new C.cyZ(t,e,d),u,s,B.c0,s,s,!1,!1),B.f,s,s,new A.o(r,s,v,w,s,s,B.n),s,s,s,B.hG,s,s,s,s)},
aM2(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a7(d),m=J.y(n.h(d,"role"),"user"),l=m?B.i8:this.ccA(d),k=m?B.mh:B.e,j=x.p,i=A.a([],j),h=!m
if(h)B.d.v(i,A.a([new A.a5(28,28,C.fO4(this.a.f.Q,28),o),B.ab],j))
w=m?B.dG:B.F
j=A.a([],j)
if(h)j.push(D.dYd)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=B.aI
else u=e?B.VQ:B.aP
t=m?16:4
s=m?4:16
if(m)r=o
else r=A.I(e?B.bE:B.aK,B.r,1)
q=A.a([new A.ac(0,B.G,A.Y(10,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dz,6)],x.V)
if(f)n=A.d("typing\u2026",o,o,o,o,o,o,A.l(o,o,e?B.aA:B.dy,o,o,o,o,o,o,o,o,12,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=B.c
else p=e?B.ad:B.bj
p=A.d(n,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(A.fKe(m,A.p(o,n,B.f,o,o,new A.o(u,o,r,new A.bt(B.kR,B.kR,new A.aX(t,t),new A.aX(s,s)),q,o,B.n),o,o,o,o,Aa.WW,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(A.hc2(l,e,this.gcsw()))
i.push(new A.dl(1,B.ch,A.v(j,w,o,B.e,B.j,0,B.p),o))
if(m)i.push(B.d9)
return new A.C(B.d8,A.A(i,B.dG,o,k,B.j,0,o,o),o)},
bB7(d,e){return this.aM2(d,e,!1)}}
C.aIG.prototype={
a_(){this.a1()
$.yb().aM(0,this.gDD())},
q(){$.yb().a3(0,this.gDD())
this.a2()}}
C.aIH.prototype={
a_(){this.a1()
$.yb().aM(0,this.gDD())},
q(){$.yb().a3(0,this.gDD())
this.a2()}}
C.aII.prototype={
a_(){this.a1()
$.yb().aM(0,this.gDD())},
q(){$.yb().a3(0,this.gDD())
this.a2()}}
C.aJE.prototype={
a_(){this.a1()
$.yb().aM(0,this.gDD())},
q(){$.yb().a3(0,this.gDD())
this.a2()}}
C.UX.prototype={
a4(){return"NgmySnapshotResolveOutcome."+this.b}}
C.alY.prototype={
T(){return new C.aAA()}}
C.aAA.prototype={
a_(){var w,v=this
v.a1()
w=v.a
v.d=w.d
v.e=A.bl(w.e,!0,x.o)
v.f=v.a.f},
kF(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
zH(d,e){return this.cxv(d,e)},
cxv(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$zH=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dsk(q,e))
t=3
w=6
return A.b(d.$0(),$async$zH)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.m(new C.dsl(q))
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
break}t.m(new C.dsb(t,s))
case 1:return A.h(u,v)}})
return A.i($async$A4,v)},
a8_(){var w=0,v=A.j(x.gE),u,t=this,s,r,q,p
var $async$a8_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.A4(),$async$a8_)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&A.c()
q=t.e
q===$&&A.c()
p=t.f
p===$&&A.c()
u=A.MO(s,A.J5(A.bW1(r,q,s,p).eH(),null,"  "))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a8_,v)},
W8(){var w=0,v=A.j(x.H),u,t=this,s
var $async$W8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oP(s,t.a.c,!1),$async$W8)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zH(new C.ds9(t),"Preparing download\u2026"),$async$W8)
case 4:case 1:return A.h(u,v)}})
return A.i($async$W8,v)},
XA(){var w=0,v=A.j(x.H),u,t=this,s
var $async$XA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oP(s,t.a.c,!1),$async$XA)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zH(new C.dsj(t),"Creating QR code\u2026"),$async$XA)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XA,v)},
Xz(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hLz(r),$async$Xz)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.zH(new C.ds8(t,s),"Looking up code\u2026"),$async$Xz)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xz,v)},
abg(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$abg=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wH.c3().L2(B.Pk,B.th,!0),$async$abg)
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
case 6:u=A.FR()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$abg,v)},
zl(d,e,f){return this.bDs(d,e,f)},
aNg(d,e){return this.zl(d,!1,e)},
bDr(d){return this.zl(d,!1,!1)},
bDs(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zl=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(t.A4(),$async$zl)
case 3:if(t.c==null){w=1
break}if(!C.bW6(d,t.a.c,null)){t.kF(C.bW7(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&A.c()
s=!C.hov(d,s)}if(s){t.kF(y.B)
w=1
break}r=d.as
q=J.ck(r)
s=t.c
s.toString
w=4
return A.b(C.hLM(s,q,t.a.c,d),$async$zl)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=A.ly(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,B.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&A.c()
r=o}w=5
return A.b(A.r4(s,p,r,!1,null,null,d.ax),$async$zl)
case 5:if(t.c==null){w=1
break}t.m(new C.ds7(t,p,r,d))
t.kF("Restored your local Growth Income. Go back to see it updated.")
case 1:return A.h(u,v)}})
return A.i($async$zl,v)},
abf(){var w=0,v=A.j(x.H),u=this
var $async$abf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.zH(new C.dsa(u),"Reading file\u2026"),$async$abf)
case 2:return A.h(null,v)}})
return A.i($async$abf,v)},
Vs(d){return this.bEI(d)},
bEI(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Vs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&A.c()
s=new A.d1("local_qr_dep_"+1000*r,q.a,d,B.fn,B.fa,"Admin deposit ($"+A.dy(d)+")",null,null,B.cj,new A.Q(Date.now(),0,!1))
C.c8M(t.d,s)
q=t.e
q===$&&A.c()
r=A.B(q,x.o)
r.push(s)
w=3
return A.b(A.r4(t.a.c,t.d,r,!0,null,null,null),$async$Vs)
case 3:w=4
return A.b(t.A4(),$async$Vs)
case 4:if(t.c==null){w=1
break}t.kF("Deposited $"+A.dy(d)+" to your local wallet.")
case 1:return A.h(u,v)}})
return A.i($async$Vs,v)},
b1Q(d){var w=null
return A.c9(w,w,!0,w,new C.dsh(),d,w,!0,!0,x.N)},
UA(d){return this.bwU(d)},
bwU(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$UA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return A.b(t.Vs(d.b),$async$UA)
case 5:w=1
break
case 4:s=d.c
t.kF(s==null?"Could not apply deposit.":s)
case 1:return A.h(u,v)}})
return A.i($async$UA,v)},
DY(d){return this.chg(d)},
chg(d){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o,n
var $async$DY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.A4(),$async$DY)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return A.b(C.aZo(d,t.a.c),$async$DY)
case 4:s=f
if(!s.a){u=!1
w=1
break}if(s.b){t.kF("This deposit code was already used.")
u=!0
w=1
break}if(s.d){t.kF(y.y)
u=!0
w=1
break}if(s.c){t.kF(y.j)
u=!0
w=1
break}r=t.c
if(r==null){u=!0
w=1
break}w=5
return A.b(t.b1Q(r),$async$DY)
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
return A.b(C.c8F(d,o,n.a,r,p),$async$DY)
case 7:w=6
return A.b(t.UA(f),$async$DY)
case 6:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DY,v)},
DZ(d){return this.chh(d)},
chh(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$DZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.A4(),$async$DZ)
case 3:if(t.c==null){w=1
break}w=4
return A.b(C.c8E(d,t.a.c),$async$DZ)
case 4:s=f
if(!s.a){t.kF(y.m)
w=1
break}if(s.b){t.kF("This deposit code was already used.")
w=1
break}if(s.d){t.kF(y.y)
w=1
break}if(s.c){t.kF(y.j)
w=1
break}r=t.c
if(r==null){w=1
break}w=5
return A.b(t.b1Q(r),$async$DZ)
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
return A.b(t.UA(f),$async$DZ)
case 6:case 1:return A.h(u,v)}})
return A.i($async$DZ,v)},
O1(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$O1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Cd()){t.kF("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a4(s,!1).ci(A.eo(new C.dsc(),!0,null,x.N)),$async$O1)
case 3:r=e
if(r==null||B.a.i(r).length===0){w=1
break}w=B.a.a0(B.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return A.b(t.zH(new C.dsd(t,r),"Applying deposit\u2026"),$async$O1)
case 6:w=1
break
case 5:w=7
return A.b(t.zH(new C.dse(t,r),"Loading\u2026"),$async$O1)
case 7:case 1:return A.h(u,v)}})
return A.i($async$O1,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=n?B.j_:B.pc,l=n?B.c:B.M,k=n?B.aQ:B.ak,j=n?B.bE:B.w.j(0.06),i=x.p
j=A.A(A.a([A.aK(!1,o,!0,A.p(B.A,A.V(B.ez,l,o,o,o,16),B.f,o,o,new A.o(j,o,o,o,o,o,B.a6),o,38,o,o,o,o,o,38),B.cL,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dsm(d),o,o,o,o,o,o,o)],i),B.m,o,B.e,B.j,0,o,o)
w=A.d("Backup & Restore",o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,B.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=A.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,B.cs,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=A.D(new C.a_e(D.bxa,"Download",E.a1g,u?o:p.gbJO(),o),1)
t=A.A(A.a([t,B.eA,A.D(new C.a_e(B.j9,"Show QR",D.d7a,u?o:p.gbZL(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r
s=A.D(new C.a_e(D.bxb,"Upload",B.a0H,u?o:p.gbZJ(),o),1)
s=A.A(A.a([s,B.eA,A.D(new C.a_e(B.iO,"Scan QR",D.cKq,u?o:p.gbZK(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r?o:p.gbZI()
r=n?B.c.j(0.06):B.aT.j(0.08)
q=A.m(16)
q=A.a([A.cK(A.a([j,B.ay,w,B.P,v,B.kl,t,B.ay,s,B.ay,new C.bpw(B.qL,"Enter Code",B.a02,u,o),B.kl,A.p(o,A.A(A.a([A.V(B.h3,B.aT,o,o,o,18),B.aw,A.D(A.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.F,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(r,o,o,q,o,o,B.n),o,o,o,o,B.j5,o,o,o)],i),o,A9.Lf,o,o,B.ai,!1)],i)
if(p.r){j=n?B.i4:B.c
w=p.w
if(w==null)w="Working\u2026"
q.push(A.ao(0,A.aF(!1,B.a1,!0,o,new A.C(B.Ap,A.A(A.a([I.aLq,B.bd,A.D(A.d(w,o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.m,o,B.e,B.j,0,o,o),o),B.f,j,8,o,o,o,o,o,B.ae),o,o,0,0,o,o))}return A.cc(o,m,A.bq(!1,new A.an(B.W,o,B.a9,B.q,q,o),!0,!1,B.ah,!0,!0),o,!1,!1,o,o)}}
C.a_e.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ac(0,B.G,B.d.gam(s).j(0.35),B.dp,16)],x.V),p=B.c.j(0.22)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(v,A.v(A.a([A.p(v,A.V(w.c,B.c,v,v,v,30),B.f,v,v,new A.o(p,v,v,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.ac,A.d(w.d,v,v,v,v,v,v,B.rm,v,v,v)],x.p),B.m,v,B.b9,B.j,0,B.p),B.f,v,v,new A.o(v,v,v,r,q,new A.a6(B.ax,B.aC,B.x,s,v,v),B.n),v,140,v,v,B.c0,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ae)}}
C.bpw.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ac(0,B.G,B.d.gam(s).j(0.35),B.dp,16)],x.V),p=B.c.j(0.22)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(v,A.A(A.a([A.p(v,A.V(w.c,B.c,v,v,v,24),B.f,v,v,new A.o(p,v,v,v,v,v,B.a6),v,44,v,v,v,v,v,44),B.eA,A.d(w.d,v,v,v,v,v,v,B.rm,v,v,v)],x.p),B.m,v,B.b9,B.j,0,v,v),B.f,v,v,new A.o(v,v,v,r,q,new A.a6(B.ax,B.aC,B.x,s,v,v),B.n),v,v,v,v,D.bou,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ae)}}
C.YT.prototype={
T(){return new C.bgM()}}
C.bgM.prototype={
gau5(){var w=this.e
return w===$?this.e=this.a.d:w},
a_(){var w=this
w.a1()
w.PE()
w.f=A.dF(B.nu,new C.dsq(w))},
q(){var w=this.f
if(w!=null)w.a9(0)
this.a2()},
PE(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$PE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return A.b(A.ul(q.e,q.f),$async$PE)
case 3:q=e.a
s=A.bW1(q[3],q[1],t.a.e,q[4])
w=4
return A.b(A.MO(t.a.e,A.J5(s.eH(),null,"  ")),$async$PE)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.m(new C.dsn(t,r))
case 1:return A.h(u,v)}})
return A.i($async$PE,v)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=u?B.j_:B.pc,s=u?B.i4:B.c,r=u?B.c:B.bh,q=A.eC(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,B.aOh,v,v,v,1,v,!0),p=A.m(24),o=A.I(B.aT.j(0.35),B.r,1),n=w.d,m=A.pv(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,B.c),l=A.d("Code: "+w.gau5(),v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=A.m(20),j=B.aT.j(0.12),i=A.m(20),h=x.p
i=A.aK(!1,k,!0,A.p(v,A.A(A.a([A.V(B.fF,B.aT,v,v,v,14),B.bp,A.d("Copy code",v,v,v,v,v,v,A.l(v,v,B.aT,v,v,v,v,v,v,v,v,12,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),B.m,v,B.e,B.Q,0,v,v),B.f,v,v,new A.o(j,v,v,i,v,v,B.n),v,v,v,v,B.m3,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dso(w,d),v,v,v,v,v,v,v)
return A.cc(q,t,new A.C(B.a8,A.v(A.a([A.D(A.p(v,A.v(A.a([B.P,m,B.bu,l,B.P,i,B.ay,A.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.ak,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v)],h),B.m,v,B.b9,B.j,0,B.p),B.f,v,v,new A.o(s,v,o,p,v,v,B.n),v,v,v,v,B.a8,v,v,1/0),1),B.aO,new A.a5(1/0,v,A.bI(B.z_,new C.dsp(d),A.bk(B.aT,v,v,v,v,B.fH,v,v,v,v,v,v)),v)],h),B.m,v,B.e,B.j,0,B.p),v),v,!1,!1,v,v)}}
C.YU.prototype={
T(){return new C.bgN(A.yG(B.wN,B.ne,B.tB))}}
C.bgN.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.cc(A.eC(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.ffm,w,w,w,1,w,!0),B.w,A.yF(this.d,B.bQ,new C.dsr(this,d)),w,!1,!1,w,w)}}
C.ad3.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.M(a0).ax.a===B.H,k=l?B.i4:B.c,j=l?B.c:B.M,i=l?B.aQ:B.ak,h=l?B.b7:B.e2,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=A.m(26)
w=A.I(B.aT.j(0.35),B.r,1)
v=A.a([new A.ac(0,B.G,B.aT.j(0.16),B.jT,36)],x.V)
u=A.p(m,D.bDc,B.f,m,m,new A.o(m,m,m,A.m(18),B.a1f,D.bMv,B.n),m,58,m,m,m,m,m,58)
t=A.d("Restore local backup?",m,m,m,m,m,m,A.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,B.u,m,m,!0,m,-0.3,m,m,m,m,m,m),B.L,m,m)
s=A.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,A.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),B.L,m,m)
r=l?B.j_:B.pc
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
n=A.V(B.xv,l?B.aM:B.dm,m,m,m,16)
return A.eD(m,B.K,new A.cW(B.U2,A.bX(new A.C(B.x4,A.v(A.a([u,B.aO,t,B.P,s,B.bu,g,B.ay,A.p(m,A.A(A.a([n,B.ab,A.D(A.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,A.l(m,m,l?B.bJ:B.io,m,m,m,m,m,m,m,m,11.5,m,m,B.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),B.F,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.eu,m,m,1/0),B.d5,A.A(A.a([A.D(A.dW(B.n7,new C.eMK(a0),A.dd(m,m,m,m,m,m,m,m,m,j,m,m,B.ce,m,new A.b7(A.m(14),B.Z),new A.aA(h,1,B.r,-1),m,m,m,m)),1),B.aw,A.D(A.bI(D.f_7,new C.eML(a0),A.bk(B.aT,m,m,m,m,m,B.ce,m,new A.b7(A.m(14),B.Z),m,m,m)),2)],o),B.m,m,B.e,B.j,0,m,m)],o),B.m,m,B.e,B.Q,0,B.p),m),new A.o(k,m,w,e,v,m,B.n),B.be),m),m,m,m,B.ey,B.cZ,m,m,m)}}
C.P0.prototype={
B(d){var w=this,v=null
return A.A(A.a([new A.a5(92,v,A.d(w.c,v,v,v,v,v,v,A.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),A.D(A.d(w.d,v,v,v,v,v,v,A.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,B.I,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.F,v,B.e,B.j,0,v,v)}}
C.Y0.prototype={
T(){return new C.axR(new A.aq(B.as,$.aw()),A.kd(!0,null,!0,!0,null,null,!1))}}
C.axR.prototype={
a_(){this.a1()
$.aU.x1$.push(new C.d1r(this))},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.e.q()
this.a2()},
bZN(){var w,v=this.c
v.toString
w=B.a.i(this.d.a.a)
A.a4(v,!1).N(w)
return null},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=u?B.i4:B.c,s=u?B.c:B.M,r=u?B.aQ:B.ak,q=u?B.j_:B.pc,p=u?B.b7:B.e2,o=A.m(24),n=A.I(B.aT.j(0.35),B.r,1),m=A.a([new A.ac(0,B.G,B.aT.j(0.18),B.fG,32)],x.V),l=A.p(v,A8.alh,B.f,v,v,new A.o(v,v,v,A.m(18),B.a1f,D.bPa,B.n),v,56,v,v,v,v,v,56),k=A.d("Enter restore code",v,v,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,B.u,v,v,!0,v,-0.3,v,v,v,v,v,v),B.L,v,v),j=A.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),B.L,v,v),i=A.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,B.I,v,v,!0,v,8,v,v,v,v,v,v),h=A.a([new A.tX(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bp0(new C.d1o())],x.G),g=A.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,B.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return A.eD(v,B.K,new A.cW(A1.Jd,A.bX(new A.C(B.x4,A.v(A.a([l,B.aO,k,B.P,j,B.dZ,A.aL(!1,B.T,!1,v,!0,B.q,v,A.aM(),w.d,v,v,v,v,v,2,A.bo(v,v,v,B.Et,v,v,"",v,!0,new A.b4(4,A.m(16),new A.aA(p,1,B.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new A.b4(4,A.m(16),D.aUr),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!1,v,!1,w.e,B.ag,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.d1p(w),v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,i,!0,B.L,v,B.lJ,v,v,v,v),B.dZ,A.A(A.a([A.D(A.dW(B.n7,new C.d1q(d),A.dd(v,v,v,v,v,v,v,v,v,s,v,v,B.ce,v,new A.b7(A.m(14),B.Z),new A.aA(p,1,B.r,-1),v,v,v,v)),1),B.aw,A.D(A.bI(D.f2B,w.gbZM(),A.bk(B.aT,v,v,v,v,v,B.ce,v,new A.b7(A.m(14),B.Z),v,v,v)),2)],f),B.m,v,B.e,B.j,0,v,v)],f),B.m,v,B.e,B.Q,0,B.p),v),new A.o(t,v,n,o,m,v,B.n),B.be),v),v,v,v,B.Lh,B.cZ,v,v,v)}}
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
v.r=B.o.O(B.o.D(C.fqx(w.e,w.d.y2),1,600))
w=v.a
if(!J.lf(w.d.y2,w.e))v.r=C.hR6(v.a.e)
v.w=A.dF(B.hd,new C.dyM(v))},
q(){var w=this.w
if(w!=null)w.a9(0)
this.cbq()
C.aYb()
this.a2()},
cbq(){var w,v,u,t,s,r=this,q=null
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
w.ho(new A.d1(t,s.c.a,u,B.fz,B.fa,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,B.cj,new A.Q(Date.now(),0,!1)))
r.a.bp()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.ui(u,q,"Left early \xb7 +$"+B.k.aa(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
J2(d,e){return this.cna(d,e)},
b1u(d){return this.J2(!1,d)},
cn9(d){return this.J2(d,"")},
cna(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$J2=A.e(function(f,g){if(f===1)return A.f(g,v)
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
return A.b(C.bB7(s,C.bAM(),C.fRy(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$J2)
case 5:w=1
break
case 4:n=A.nK(B.k.aa(t.a.w*1.46*r,2))
m=r>=1
t.m(new C.dyD(t,n,r))
s=B.o.u(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new A.d1(s,p,n,B.fz,B.fa,q,null,null,B.cj,new A.Q(Date.now(),0,!1))
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
return A.b(C.bB7(s,C.bAM(),C.fRy(),""+t.e+"/"+t.f,k,q,!0),$async$J2)
case 6:w=7
return A.b(C.afD(t.a.f,k),$async$J2)
case 7:case 1:return A.h(u,v)}})
return A.i($async$J2,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.r
m===$&&A.c()
w=B.o.an(m,60)
v=B.a.aV(B.o.u(B.o.F(m,60)),2,"0")
u=A.aH(n,n,n,n,B.alk,n,n,n,new C.dyG(d),n,n,n,n,n,n)
t=o.a
s=x.p
t=A.D(A.v(A.a([A.d(t.f,n,1,B.a2,n,n,n,B.kS,n,n,n),A.d("Win $"+B.k.aa(t.w*1.46,2)+" \xb7 stake $"+B.k.aa(o.a.w,2),n,n,n,n,n,n,D.ePO,n,n,n)],s),B.F,n,B.e,B.j,0,B.p),1)
r=o.a.c.a
m=m<=10?B.aE:B.c.j(0.1)
q=A.m(99)
q=A.A(A.a([u,t,new C.anX(r,new C.dyH(o),n),B.bp,A.dh(n,A.A(A.a([D.bHB,B.d9,A.d(""+w+":"+v,n,n,n,n,n,n,B.kn,n,n,n)],s),B.m,n,B.e,B.j,0,n,n),n,n,B.bc,new A.o(m,n,n,q,n,n,B.n),B.a1,n,n,n,B.ta,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
m=o.a
v=m.w
w=v*1.46
r=o.e/o.f
m=A.A(A.a([A.D(A.bv(A.m(99),A.mc(B.bE,n,n,9,n,r,new A.mx(B.d.gK(m.r),x.dw)),B.ap),1),B.aw,A.d(""+o.e+"/"+o.f,n,n,n,n,n,n,D.eYn,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
t=A.m(22)
u=A.a([B.d.gK(o.a.r).j(0.35),G.adh],x.O)
p=o.x
return C.aND(n,D.be0,A.bq(!0,A.v(A.a([new A.C(D.bqA,q,n),new C.Ms(w*r,w,v,n),new A.C(G.afC,m,n),A.D(new A.C(B.WL,A.bv(t,A.bX(A.e2(V.haC(o.a.e,new V.yN(new C.dyI(o),new C.dyJ(o),new C.dyK(o),o.d)),p,n),new A.o(n,n,n,n,n,new A.a6(B.b1,B.b3,B.x,u,n,n),B.n),B.be),B.ap),n),1)],s),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0))}}
C.a5j.prototype={
B(d){var w=null,v=A.m(26),u=A.I(B.aL.j(0.5),B.r,1),t=A.a([new A.ac(0,B.G,B.aL.j(0.22),B.J,26)],x.V)
return A.eD(w,B.K,A.p(w,A.v(A.a([A.p(w,D.bBr,B.f,w,w,new A.o(B.aL.j(0.16),w,A.I(B.aL,B.r,2),w,w,w,B.a6),w,68,w,w,w,w,w,68),B.ay,D.fbz,B.P,A.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.P,A.d("The count starts again from zero next month.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.aO,new A.a5(1/0,w,A.bI(D.f_O,new C.c3e(d),A.bk(B.aL,w,w,w,B.w,B.fH,w,w,new A.b7(A.m(14),B.Z),w,w,w)),w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,u,v,t,D.bN7,B.n),w,w,w,w,D.boV,w,w,w),w,w,w,B.ag7,B.cZ,w,w,w)}}
C.alX.prototype={
T(){return new C.bgK(null,null)},
gY(d){return this.e}}
C.bgK.prototype={
a_(){var w,v=this,u=null
v.a1()
w=v.d=A.bj(u,B.A9,u,1,u,v)
w.d6()
w.dP$.J(0,new C.drX(v))
w=A.bj(u,B.lZ,u,1,u,v)
w.cF(0)
v.e=w
w=A.bj(u,B.KK,u,1,u,v)
w.cF(0)
v.f=w
w.d6()
w.dP$.J(0,new C.drY(v))
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
w.bqM()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.Pl[B.o.F(a9.r,5)]:b4
w=!b3&&b4==null?D.Pl[B.o.F(a9.w,5)]:b0
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
a8=A.p(b0,b0,B.f,b0,b0,new A.o(A.ar(B.bz,B.aM,B.o.F(a3,3)/2).j(a2),b0,b0,b0,A.a([new A.ac(0,B.G,B.aD.j(0.7),B.J,e)],d),b0,B.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(A.dT(new A.iC(A.vQ(a4+a3),b0,B.A,!0,b0,a8,b0),new A.u(a6*a0+a5*b2*0.04,a7*a0)))}B.d.v(f,b3)}b3=b2*0.06
e=x.V
f.push(A.dT(A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,A.m(b2*0.5),A.a([new A.ac(b2*0.02,B.G,B.w.j(0.4+b1),B.J,b2*0.14)],e),b0,B.n),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new A.u(0,n+b3)))
b1=A.dj()
d=b1.a
d.$flags&2&&A.ai(d)
d[11]=0.0025
b1.mr(o)
b1.js(k,k,k,1)
b1.jI(l)
b1.ft(m)
d=b2*0.2
a1=A.m(d)
if(a9.a.c)a2=D.cPD
else{a2=A.ar(B.c,B.k2,q*0.45)
a2.toString
a2=A.a([a2,B.bN,B.cm],x.O)}a4=A.ar(B.bI,B.aD,q*0.65)
a4.toString
a4=A.I(a4,B.r,3)
e=A.a([new A.ac(0,B.G,B.w.j(0.3),D.dV4,16)],e)
if(!a9.a.c)e.push(new A.ac(p*3,B.G,B.aD.j(0.3+q*0.4),B.J,24+p*16))
e.push(new A.ac(0,B.G,B.c.j(0.9),B.QN,0))
g=A.a([],g)
if(!a9.a.c)g.push(A.bY(0,A.bX(b0,new A.o(b0,b0,b0,A.m(d),b0,new A.a6(new A.da(-1+Math.cos(j)*0.8,-1),new A.da(1,1),B.x,A.a([B.c.j(0),B.c.j(0.28+p*0.25),B.c.j(0)],x.O),b0,b0),B.n),B.be),0,0,0))
g.push(A.ao(b0,A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,A.m(6),b0,new A.a6(B.a3,B.a7,B.x,A.a([B.c.j(0.95),B.c.j(0)],x.O),b0,b0),B.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=A.a([new A.cP(B.w.j(0.18),B.dz,5)],x.C)
if(!a9.a.c)d.push(new A.cP(B.aD.j(0.4+q*0.35),B.J,12+p*10))
g.push(A.av(A.wp(A.d(v,b0,b0,b0,b0,b0,b0,A.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,B.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),B.bc,B.jl,b3),b0,b0,b0))
f.push(A.dT(A.fr(B.A,A.p(b0,new A.an(B.W,b0,B.a9,B.q,g,b0),B.f,b0,b0,new A.o(b0,b0,a4,a1,e,new A.a6(B.ax,B.aC,B.x,a2,b0,b0),B.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new A.u(0,n)))
return new A.a5(h,h,new A.an(B.A,b0,B.a9,B.f,f,b0),b0)}}
C.aJd.prototype={
aQ(){this.aY()
this.aW()
this.dF()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdD())
w.b2$=null
w.a2()}}
C.Ms.prototype={
B(d){var w=null,v=new C.c5o(),u=v.$3("STAKE","$"+B.k.aa(this.e,2),B.c),t=A.m(18),s=A.I(B.bs.j(0.7),B.r,1.4),r=A.a([new A.ac(0,B.G,B.aT.j(0.35),B.J,14)],x.V),q=x.p
return new A.C(B.L0,A.A(A.a([u,A.p(w,A.v(A.a([D.fah,A.mM(new C.c5n(),w,B.bc,B.mM,w,new A.bm(w,this.c,x.e7),x.gR)],q),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(w,w,s,t,r,D.am6,B.n),w,w,w,w,B.Lc,w,w,w),v.$3("FULL WIN","$"+B.k.aa(this.d,2),B.bJ)],q),B.m,w,B.e,B.j,0,w,w),w)}}
C.anX.prototype={
B(d){var w=null,v=A.m(99),u=A.I(B.jh.j(0.7),B.r,1)
return A.p(w,A.A(A.a([D.bzU,B.d9,C.aoM(this.d,B.nU,this.c)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(w,w,u,v,w,D.am6,B.n),w,w,w,w,B.Ln,w,w,w)},
gdV(){return this.c}}
C.MA.prototype={
T(){return new C.bho(null,null)}}
C.bho.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.lZ,null,1,null,v)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.brm()},
aKY(d,e){var w=this.a.d,v=A.T(w).k("J<1,n>"),u=A.B(new A.J(w,C.hX2(),v),v.k("aj.E"))
w=this.d
w===$&&A.c()
return A.c6(w,new C.dRj(this,u),null)},
B(d){var w=null
if(this.a.e)return A.cc(w,D.acH,A.bq(!0,this.aKY(0,d),!0,!1,B.ah,!0,!0),w,!1,!1,w,w)
return this.aKY(0,d)},
auM(d,e,f){var w=null,v=f.j(0.16),u=A.m(10)
return A.A(A.a([A.p(w,A.V(d,f,w,w,w,17),B.f,w,w,new A.o(v,w,w,u,w,w,B.n),w,32,w,w,w,w,w,32),B.aw,A.D(A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.aJN.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.abU.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=A.aI(d,B.e6,o).w.r.d,m=this.c,l=J.cD(m),k=l.eG(m,new C.dRm()).gM(0),j=new A.e6(l.dr(m,new C.dRn(),x.cD),x.bG).cI(0,0,new C.dRo())
o=A.aI(d,B.bS,o).w
w=x.p
v=A.a([B.S,A.p(p,p,B.f,p,p,new A.o(B.b7,p,p,A.m(2),p,p,B.n),p,4,p,p,p,p,p,42),new A.C(B.afQ,A.A(A.a([A.p(p,D.bJX,B.f,p,p,new A.o(p,p,p,A.m(14),A.a([new A.ac(0,B.G,B.fe.j(0.45),B.J,14)],x.V),D.am0,B.n),p,44,p,p,p,p,p,44),B.bd,D.bsI,A.aH(p,p,p,p,B.l9,p,p,p,new C.dRp(d),p,p,p,p,p,p)],w),B.m,p,B.e,B.j,0,p,p),p)],w)
if(l.gck(m)){u=C.fMz("GAMES",""+l.gM(m),B.ex)
t=C.fMz("WON",""+k,B.jh)
s=j>=0
r=s?"+":"-"
q=C.bxz(j)
s=s?B.jh:B.f9
v.push(new A.C(D.bn7,A.A(A.a([u,B.ab,t,B.ab,C.fMz("NET",r+q,s)],w),B.m,p,B.e,B.j,0,p,p),p))}if(l.gal(m))v.push(new A.C(new A.N(24,36,24,24+n),A.v(A.a([A.V(D.bvV,B.c.j(0.35),p,p,p,52),B.ac,A.d("No game receipts yet",p,p,p,p,p,p,A.l(p,p,B.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.ao,A.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,A.l(p,p,B.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),B.L,p,p)],w),B.m,p,B.e,B.j,0,B.p),p))
else v.push(new A.dl(1,B.ch,A.hL(p,new C.dRq(this),l.gM(m),new A.N(14,2,14,16+n),p,B.ai,new C.dRr(),!1),p))
return A.p(p,A.v(v,B.m,p,B.e,B.Q,0,B.p),B.f,p,new A.aY(0,1/0,0,o.a.b*0.88),D.aXb,p,p,p,p,p,p,p,p)}}
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
r=w}q=h.gbcK()
w=new C.dRl()
s=A.m(14)
p=A.a([r.j(0.13),D.bd3],x.O)
o=A.I(r.j(0.4),B.r,1)
n=A.V(g?B.m8:B.cv,r,i,i,i,16)
m=A.D(A.d(h.b,i,1,B.a2,i,i,i,B.ua,i,i,i),1)
l=r.j(0.2)
k=A.m(99)
k=A.p(i,A.d(t,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,B.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),B.f,i,i,new A.o(l,i,i,k,i,i,B.n),i,i,i,i,D.bqv,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bxz(q)}else{l=g?"+":"-"
l+=C.bxz(h.d)}j=x.p
l=A.A(A.a([n,B.bp,m,k,B.bp,A.d(l,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.m,i,B.e,B.j,0,i,i)
k=C.dRk("STAKE",w.$1(h.w),B.c)
w=A.A(A.a([k,B.d9,C.dRk("PAID",C.bxz(g?h.d:0),r),B.d9,C.dRk("BEFORE",w.$1(h.x),B.ex),B.d9,C.dRk("AFTER",w.$1(h.y),B.dx)],j),B.m,i,B.e,B.j,0,i,i)
n=C.hSE(h.f)
h=B.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return A.p(i,A.v(A.a([l,B.ao,w,B.au,A.d(n+h,i,1,B.a2,i,i,i,A.l(i,i,B.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.aj,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(i,i,o,s,i,new A.a6(B.ax,B.aC,B.x,p,i,i),B.n),i,i,i,i,B.l2,i,i,i)}}
C.ayv.prototype={
T(){return new C.bd7(B.cH,null,null)}}
C.bd7.prototype={
a_(){var w,v,u,t=this
t.a1()
w=A.bj(null,B.m_,null,1,null,t)
w.cF(0)
t.d=w
v=J.e0(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.aci(40+w.ai()*260,-20+w.ai()*40,1.5+w.ai()*3,w.ai()*3.141592653589793,0.7+w.ai()*0.3,12+w.ai()*16,[X.a2i,B.qY,B.cR,B.c][w.aD(4)],[B.hY,B.l3,B.dS,B.ER][w.aD(4)])
t.f=v},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bqg()},
B(d){var w=null,v=this.d
v===$&&A.c()
return A.av(A.aF(!1,B.a1,!0,w,A.c6(v,new C.d8s(this,d),w),B.f,B.K,0,w,w,w,w,w,B.ae),w,w,w)}}
C.aci.prototype={
gY(d){return this.f}}
C.aIJ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.aYZ.prototype={
B(d){return new A.u6(new C.c7F(this),null,new A.h2(A.a([$.yb(),$.a1u()],x.U)),null)},
gdV(){return this.c}}
C.M3.prototype={
c5v(){if(this.c!=null)this.m(new C.bXl())}}
C.HL.prototype={}
C.anp.prototype={
T(){return new C.aBl(B.cH,new A.aq(B.as,$.aw()))},
cz5(){return this.d.$0()},
cKt(){return this.f.$0()},
cKh(d,e){return this.r.$2(d,e)},
cL5(d,e,f){return this.w.$3$bonus(d,e,f)},
gdV(){return this.c}}
C.aBl.prototype={
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.a2()},
aqH(){var w=A.d3(B.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
A6(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$A6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.aqH()
if(s<2){t.auN("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cz5()<s){t.auN("Insufficient balance.")
w=1
break}if(!t.a.cKh(s,"Dice Roll bet")){t.auN("Could not place bet.")
w=1
break}t.a.toString
t.m(new C.dKm(t))}w=3
return A.b(C.c4z(t.a.e),$async$A6)
case 3:r=t.a
q=C.hUJ(r.e,r.c,t.d)
t.a.cKt()
A.aXz(t.a.e)
t.m(new C.dKn(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return A.b(A.bN(new A.b9(1000*(40+p*6)),null,r),$async$A6)
case 7:if(t.c==null){w=1
break}new C.dKo(t).$0()
t.c.e4()
case 5:++p
w=4
break
case 6:w=8
return A.b(A.bN(B.jm,null,r),$async$A6)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.fQm(q)
t.m(new C.dKp(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cL5(m,"Dice Roll "+n,o)
t.m(new C.dKq(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+B.k.aa(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(m,2)+" added to your balance"
w=12
return A.b(C.bB7(r,C.bAM(),new C.dKr(t),n,k,"YOU WIN!",!0),$async$A6)
case 12:w=13
return A.b(C.afD("Dice Roll",l?"+$"+B.k.aa(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(m,2)+" added to your balance"),$async$A6)
case 13:w=10
break
case 11:w=14
return A.b(C.bB7(r,C.bAM(),new C.dKs(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$A6)
case 14:C.ui(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return A.h(u,v)}})
return A.i($async$A6,v)},
auN(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.aqH(),d=x.w,a0=A.aI(a2,B.e6,d).w,a1=Math.min(A.aI(a2,B.bS,d).w.a.a*0.44,200)
d=A.hb(Q.akt,D.fh6,new C.dKv(a2),f)
w=A.m(20)
v=g.a
u=v.c
t=x.p
w=A.A(A.a([d,B.b8,A.p(f,A.A(A.a([B.akq,B.bp,C.aoM(v.d,B.jX,u)],t),B.m,f,B.e,B.Q,0,f,f),B.f,f,f,new A.o(B.cR,f,f,w,f,f,B.n),f,f,f,f,B.lw,f,f,f)],t),B.m,f,B.e,B.j,0,f,f)
u=g.z
v=A.Y(140,D.VU.l()>>>16&255,D.VU.l()>>>8&255,D.VU.l()&255)
d=A.m(18)
s=A.I(A.Y(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
r=g.x
d=A.D(A.p(f,A.av(new C.alX(r,r?g.w:g.r,a1,f),f,f,f),B.f,f,f,new A.o(v,f,s,d,f,f,B.n),f,f,f,f,f,f,f,1/0),1)
v=A.d("Roll lands on one of:",f,f,f,f,f,f,A.l(f,f,B.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,B.a4,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=A.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.Pl[q]
o=C.fQm(p)
n=p>0?B.bl:B.aE
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new A.aX(10,10)
i=m?B.c:n.j(0.7)
h=new A.aA(i,m?2.5:1.2,B.r,-1)
n=m?A.a([new A.ac(1,B.G,n.j(0.65),B.J,14)],r):B.a1b
m=m?18:15
s.push(new A.bG(1,B.bn,new A.C(B.jo,A.p(B.A,new A.x(o,f,new A.F(!0,B.c,f,f,f,f,m,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f),B.f,f,f,new A.o(k,f,new A.bU(h,h,h,h),new A.bt(j,j,j,j),n,f,B.n),f,l,f,f,f,f,f,f),f),f))}d=A.a([d,B.ac,v,B.ao,A.A(s,B.m,f,B.e,B.j,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.fQm(v)
s=g.r
s.toString
d.push(new A.C(B.kB,A.d("Landed on "+v,f,f,f,f,f,f,A.l(f,f,s>0?B.bb:B.cq,f,f,f,f,f,f,f,f,20,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(B.S)
d.push(new A.bK(B.a3,f,f,A.d("Bet Amount",f,f,f,f,f,f,A.l(f,f,A.Y(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,B.I,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(B.ao)
v=x.bL
v=A.B(new A.J(A.a([2,5,10,25],x.n),new C.dKw(g),v),v.k("aj.E"))
s=g.y
r=A.Y(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v.push(A.D(new A.C(B.Xp,A.aL(f,B.T,!1,f,!0,B.q,f,A.aM(),g.e,f,f,f,f,f,2,A.bo(f,new A.b4(4,A.m(10),B.Z),f,B.jM,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,B.lg,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,!s,!1,f,B.ag,f,f,f,f,f,B.dL,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,B.a8,f,f,f,f,f,f,f,f,f,f,f,B.hk,!0,B.L,f,B.am,f,f,f,f),f),1))
d.push(A.A(v,B.m,f,B.e,B.j,0,f,f))
d.push(B.P)
d.push(new A.bK(B.a7,f,f,A.d("Perfect Score Profit: +$"+B.k.aa(g.aqH()*0.46,2),f,f,f,f,f,f,D.eRL,f,f,f),f))
d.push(B.S)
d=A.D(new A.C(B.hG,A.v(d,B.aj,f,B.e,B.j,0,B.p),f),1)
v=g.x?f:g.gcjS()
s=A.fl(f,f,B.aD,f,f,f,f,f,f,B.c,f,f,f,f,new A.b7(A.m(14),B.Z),f,f,f,f,f)
return C.aND(f,D.W0,A.bq(!0,A.v(A.a([new A.C(D.bqW,w,f),new C.Ms(u,e*1.46,e,f),A.D(A.v(A.a([d,new A.C(new A.N(14,4,14,8+a0.r.d),new A.a5(1/0,52,A.i9(A.d("\ud83c\udfb2 ROLL ($"+B.k.aa(e,2)+")",f,f,f,f,f,f,B.kT,f,f,f),v,s),f),f)],t),B.m,f,B.e,B.j,0,B.p),1)],t),B.m,f,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0))}}
C.ao2.prototype={
T(){return new C.aBC(B.kh,new A.aq(B.as,$.aw()))},
cK9(d){return this.e.$1(d)}}
C.aBC.prototype={
gapv(){var w,v=this.r
if(v===$){w=B.o.u(1e4+B.cH.aD(89999))
this.r!==$&&A.bM()
this.r=w
v=w}return v},
gP6(){var w=this.d,v=this.a
return w===B.kh?B.a.i(v.f.a):B.a.i(v.f.b)},
ga7f(){var w=this.gP6(),v=A.af("^\\$+",!0,!1,!1,!1),u=B.a.i(A.aJ(w,v,""))
return u.length===0?"":"$"+u},
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.a2()},
I_(d,e){return this.bDS(d,e)},
bDS(d,e){var w=0,v=A.j(x.H),u=this,t
var $async$I_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.fH(new A.fA(d)),$async$I_)
case 2:A.eO()
t=u.c
if(t!=null)t.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$I_,v)},
P1(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$P1=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gP6().length===0){r.c.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}A.jc()
o=B.k.aa(r.a.d,2)
q=r.d===B.kh?A.cv("https://cash.app/"+r.ga7f()+"/"+o,0,null):A.cv("bitcoin:"+r.gP6(),0,null)
t=4
w=7
return A.b(A.iO(q,B.fh,null),$async$P1)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===B.kh?r.ga7f():r.gP6()
w=10
return A.b(r.I_(n,r.d===B.kh?"Cash App tag":"Bitcoin address"),$async$P1)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===B.kh?r.ga7f():r.gP6()
w=11
return A.b(r.I_(n,r.d===B.kh?"Cash App tag":"Bitcoin address"),$async$P1)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$P1,v)},
ZO(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hU().bds(B.eE),$async$ZO)
case 3:r=e
if(r==null){w=1
break}w=4
return A.b(r.fc(),$async$ZO)
case 4:s=e
t.m(new C.dRJ(t,B.a.c8(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return A.h(u,v)}})
return A.i($async$ZO,v)},
c1X(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===B.kh?C.hbT(s.a):B.a.i(s.a)
if(r.length===0){t=v.d===B.kh?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.I(x.q).f.R(A.b2(u,u,u,u,u,B.q,u,A.d(t,u,u,u,u,u,u,u,u,u,u),u,B.U,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.I(x.q).f.R(A.b2(u,u,u,u,u,B.q,u,A.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,B.U,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new A.Q(Date.now(),0,!1).u(0)
w=v.a
t.cK9(new A.d1(s,w.c.a,w.d,B.fn,v.d,r,v.f,v.gapv(),B.dr,new A.Q(Date.now(),0,!1)))
w=v.c
w.toString
A.iK(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.eC(o,o,o,!0,!0,B.zH,o,1,!0,o,0,!1,o,!1,B.c,o,A.aH(o,o,o,o,B.FB,o,o,o,new C.dRK(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.f1k,o,o,o,1,o,!0),m=A.m(26),l=A.I(D.eG.j(0.25),B.r,1),k=x.V,j=A.a([new A.ac(0,B.G,B.aZ.j(0.25),B.eQ,24)],k),i=x.p
j=A.p(o,A.v(A.a([A.d("YOU'RE ADDING",o,o,o,o,o,o,A.l(o,o,B.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,B.I,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),B.ao,A.f4(B.A,A.d("$"+A.dy(p.a.d),o,o,o,o,o,o,D.eMe,o,o,o),B.f,B.ds),B.ao,A.d("to your Growth Income wallet",o,o,o,o,o,o,A.l(o,o,D.eG.j(0.85),o,o,o,o,o,o,o,o,12,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,l,m,j,D.bPX,B.n),o,o,o,o,D.boy,o,o,o)
m=p.bYz()
l=p.ayp(1,"Send the money to NGMY Pay",p.c1V())
w=p.ayp(2,"Put this code in the payment note",p.bCt())
v=p.d===B.kh
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=A.l(o,o,B.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.ayp(3,u,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.e,o,o,o,o,o,2,A.bo(o,o,o,o,o,o,o,o,!0,new A.b4(4,A.m(18),new A.aA(B.c.j(0.08),1,B.r,-1)),o,o,o,o,o,B.rY,!0,o,o,o,o,new A.b4(4,A.m(18),D.aUm),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.eNC,t,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,B.rm,!0,B.a5,o,B.am,o,o,o,o))
r=p.f!=null
v=r?8:22
u=A.m(20)
s=r?D.eG:B.c
s=A.I(s.j(r?0.5:0.12),B.r,1.4)
q=r?A.v(A.a([A.bv(A.m(14),new A.cW(D.aVJ,new A.DT(p.f,o),o),B.ap),B.P,D.eym,B.au],i),B.m,o,B.e,B.j,0,B.p):A.v(A.a([A.p(o,D.bJ7,B.f,o,o,new A.o(D.eG.j(0.12),o,o,o,o,o,B.a6),o,54,o,o,o,o,o,54),B.S,D.f6i,B.d_,A.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p)
v=p.b2T(4,"Screenshot of your payment",A.aE(o,A.p(o,q,B.f,o,o,new A.o(B.rY,o,s,u,o,o,B.n),o,o,o,o,new A.N(v,v,v,v),o,o,o),B.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcdh(),o,o,o,o,o,o,!1,B.aa),!0)
u=A.d(p.a.r,o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,1.4,!0,o,o,o,o,o,o,o,o),B.L,o,o)
s=A.m(18)
k=A.a([new A.ac(0,B.G,B.aZ.j(0.45),B.dp,18)],k)
return A.cc(n,B.zH,A.av(new A.cW(B.a92,A.cK(A.a([j,B.bu,m,B.bu,l,w,t,v,B.ao,u,B.aO,new A.a5(o,56,A.bX(A.lk(D.bHQ,D.fgq,p.gc1W(),A.fl(o,o,B.K,o,o,o,o,o,o,B.c,o,o,o,B.K,new A.b7(A.m(18),B.Z),o,o,o,o,o)),new A.o(o,o,o,s,k,D.bOC,B.n),B.be),o)],i),o,D.bo2,o,o,B.ai,!1),o),o,o,o),o,!1,!1,o,o)},
bYz(){var w=null,v=new C.dRF(this),u=A.m(18),t=A.I(B.c.j(0.06),B.r,1)
return A.p(w,A.A(A.a([v.$3(B.kh,B.hW,"Cash App"),B.ea,v.$3(B.a3J,D.aka,"Bitcoin")],x.p),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(B.rY,w,t,u,w,w,B.n),w,w,w,w,B.m4,w,w,w)},
b2T(d,e,f,g){var w,v=null,u=x.p,t=A.a([A.p(B.A,A.d(""+d,v,v,v,v,v,v,D.eSu,v,v,v),B.f,v,v,D.aWs,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(A.D(A.p(v,v,B.f,D.eG.j(0.18),v,v,v,v,v,B.uK,v,v,v,2),1))
t=A.v(t,B.m,v,B.e,B.j,0,B.p)
w=g?12:20
return new A.H5(A.A(A.a([new A.a5(34,v,t,v),B.aw,A.D(new A.C(new A.N(0,0,0,w),A.v(A.a([new A.C(B.WJ,A.d(e,v,v,v,v,v,v,A2.Se,v,v,v),v),f],u),B.aj,v,B.e,B.j,0,B.p),v),1)],u),B.aj,v,B.e,B.j,0,v,v),v)},
ayp(d,e,f){return this.b2T(d,e,f,!1)},
c1V(){var w,v,u,t,s=this,r=null,q=s.d===B.kh?s.ga7f():s.gP6(),p=A.m(20),o=A.m(20),n=s.d===B.kh,m=n?D.bNz:D.bPj,l=A.a([new A.ac(0,B.G,(n?D.acY:D.V_).j(0.35),B.cw,16)],x.V),k=A.m(12)
n=s.d===B.kh
w=n?B.hW:D.aka
k=A.p(r,A.V(w,n?D.acY:D.V_,r,r,r,30),B.f,r,r,new A.o(B.c,r,r,k,r,r,B.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=A.d(n,r,r,r,r,r,r,A.l(r,r,B.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===B.kh
t=u?22:13
v=A.d(v,r,1,B.a2,r,r,r,A.l(r,r,B.c,r,r,r,r,r,r,r,r,t,r,r,B.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=A.D(A.v(A.a([n,B.bB,v,B.au,A.A(A.a([D.bEI,B.d9,A.d(s.d===B.kh?"Tap to pay $"+A.dy(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,B.rl,r,r,r)],u),B.m,r,B.e,B.j,0,r,r)],u),B.F,r,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,r,A.aK(!1,p,!0,A.ex(A.A(A.a([k,B.bd,v,A.aH(r,r,r,r,D.bDN,r,r,r,w?r:new C.dRI(s,q),r,r,r,r,"Copy",r)],u),B.m,r,B.e,B.j,0,r,r),r,new A.o(r,r,r,o,l,m,B.n),r,B.afw,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gc8B(),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ae)},
bCt(){var w,v,u,t,s,r,q,p,o=null,n=A.m(20),m=A.I(B.b2.j(0.35),B.r,1),l=x.p,k=A.a([],l)
for(w=this.gapv().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new A.aX(12,12)
q=A.a([B.b2.j(0.28),B.b2.j(0.08)],u)
p=new A.aA(B.ex.j(0.4),1,B.r,-1)
k.push(A.p(B.A,new A.x(s,o,B.CB,o,o,o,o,o,o,o,o,o),B.f,o,o,new A.o(o,o,new A.bU(p,p,p,p),new A.bt(r,r,r,r),o,new A.a6(B.b1,B.b3,B.x,q,o,o),B.n),o,52,o,B.jo,o,o,o,42))}return A.p(o,A.v(A.a([A.A(k,B.m,o,B.b9,B.j,0,o,o),B.ac,A.A(A.a([A.D(A.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,A.l(o,o,B.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.ab,A.hb(B.a_8,D.fib,new C.dRE(this),A.fu(o,o,o,o,o,o,o,o,o,o,o,B.ex,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),B.m,o,B.e,B.j,0,o,o)],l),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(B.rY,o,m,n,o,o,B.n),o,o,o,o,B.by,o,o,o)}}
C.r_.prototype={
ad(){var w=this
return A.E(["id",w.a,"title",w.b,"start",w.c.ac(),"end",w.d.ac(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.r0.prototype={
ad(){var w=this
return A.E(["id",w.a,"when",w.b.ac(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gU9(){var w=this,v=A.a([],x.s),u=w.d
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
u=w.c
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
v.push(C.fXZ(w.b))
u=w.e
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
return B.d.aH(v," \xb7 ")},
gky(d){return this.c}}
C.lq.prototype={
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
w=J.b6(v.c,new C.c6E(),x.P)
w=A.B(w,w.$ti.k("aj.E"))
u.n(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"thumbnailPath",w)
u.n(0,"printable",v.e)
u.n(0,"sortOrder",v.f)
return u}}
C.i_.prototype={
aiN(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.i_(v,u,t,s,r,h==null?w.f:h)},
b8d(d){var w=null
return this.aiN(w,w,w,w,d,w)},
cCH(d,e,f){return this.aiN(d,e,null,null,null,f)},
b8c(d){var w=null
return this.aiN(w,w,w,d,w,w)},
cCm(d,e){var w=null
return this.aiN(w,w,d,w,e,w)},
ad(){var w=this,v=C.hGr(w.c),u=w.e,t=A.T(u).k("J<1,a3<n,@>>")
u=A.B(new A.J(u,new C.c6C(),t),t.k("aj.E"))
return A.E(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.b6M.prototype={}
C.Ub.prototype={
T(){return new C.aBO(new A.aq(B.as,$.aw()),A.mn(0,null,null),A.a([],x.m))},
SK(d){return this.d.$1(d)}}
C.aBO.prototype={
a_(){var w,v=this
v.a1()
w=J.b6(v.a.c,new C.dVo(),x.i)
w=A.B(w,w.$ti.k("aj.E"))
B.d.b1(w,new C.dVp())
v.d=w
v.I8()},
q(){var w=this.w
w.S$=$.aw()
w.P$=0
this.x.q()
this.a2()},
ac9(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ac9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.I8()
u.m(new C.dVi(u))
t=u.a
t.toString
s=u.d
s===$&&A.c()
w=2
return A.b(t.SK(s),$async$ac9)
case 2:r=e
if(u.c!=null){u.m(new C.dVj(u))
t=u.c.I(x.q).f
s=A.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.R(A.b2(null,null,null,r?B.d2:B.aE,null,B.q,null,s,null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$ac9,v)},
a6s(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a6s=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&A.c()
s=new C.i_(q,"New Category",B.F9,4284773515,D.auA,p.length)
t.m(new C.dV1(t,s))
t.I8()
p=t.c
if(p==null){w=1
break}w=3
return A.b(A.c9(null,null,!0,null,new C.dV2(s),p,null,!0,!0,x.i),$async$a6s)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dV3(t,q,r))
case 1:return A.h(u,v)}})
return A.i($async$a6s,v)},
a_M(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a_M=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=B.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.m(new C.dVf(t,p))
q.bM(0,B.c3)
q=t.a.e
s=t.d
s===$&&A.c()
w=3
return A.b(C.c6z(p,q,s),$async$a_M)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dVg(t,r))
$.aU.x1$.push(new C.dVh(t))
case 1:return A.h(u,v)}})
return A.i($async$a_M,v)},
a8r(d){return this.bIo(d)},
bIo(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a8r=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&A.c()
t=r[d]
r=u.c
r.toString
w=2
return A.b(A.c9(null,null,!0,null,new C.dV9(t),r,null,!0,!0,x.i),$async$a8r)
case 2:s=f
if(s!=null)u.m(new C.dVa(u,d,s))
return A.h(null,v)}})
return A.i($async$a8r,v)},
bGg(d){this.m(new C.dV8(this,d))
this.I8()},
I8(){var w,v,u=this.d
u===$&&A.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].b8d(v)},
c60(d,e){var w={}
w.a=e
this.m(new C.dVe(w,this,d))},
Xg(d){return this.bXu(d)},
bXu(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Xg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=A.eo(new C.dVd(u,d),!1,null,x.H)
w=2
return A.b(A.a4(s,!1).ci(t),$async$Xg)
case 2:return A.h(null,v)}})
return A.i($async$Xg,v)},
byL(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?A.a([B.fs,B.bj],l):A.a([B.p1,B.er],l)
w=A.m(16)
v=A.I(m?B.d6.j(0.35):B.dx,B.r,1)
u=A.V(B.dS,m?B.dx:B.dW,n,n,n,n)
t=A.D(A.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.M,n,n,n,n,n,n,n,n,n,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.YB:A7.LK
r=x.p
s=A.a([A.aK(!1,n,!0,A.A(A.a([u,B.ab,t,A.V(s,m?B.bI:B.ak,n,n,n,n)],r),B.m,n,B.e,B.j,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dV5(o),n,n,n,n,n,n,n)],r)
if(o.r){u=A.a([B.S],r)
t=o.y
if(t.length!==0){q=(m?D.rK:B.c).j(0.65)
p=A.m(12)
u.push(A.p(n,A.jZ(!0,n,o.x,new C.dV6(o,d),t.length,n,n,n,n,!1,!1),B.f,n,B.a8Y,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.cl,n,n,n))}u.push(B.P)
t=o.w
q=A.l(n,n,m?B.aP:B.M,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=A.l(n,n,m?B.bI:B.ak,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?B.bj:B.aP
q=A.D(A.aL(n,B.T,!1,n,!0,B.q,n,A.aM(),t,n,n,n,n,n,2,A.bo(n,new A.b4(4,A.m(14),B.Z),n,B.eN,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ag,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.dV7(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,q,!0,B.a5,n,B.am,n,n,n,n),1)
m=o.f?n:o.gck5()
p=A.bk(B.bk,n,n,n,n,n,B.j5,n,n,n,n,n)
u.push(A.A(A.a([q,new A.I_(t,B.bk,n),B.d9,A.bI(o.f?B.pT:D.akj,m,p)],r),B.dG,n,B.e,B.j,0,n,n))
B.d.v(s,u)}return A.dh(n,A.v(s,B.aj,n,B.e,B.j,0,B.p),n,n,B.bc,new A.o(n,n,v,w,n,new A.a6(B.a3,B.a7,B.x,l,n,n),B.n),B.iq,n,n,B.Eq,B.by,n,n,n)},
B(d){var w,v=this,u=null,t=A.M(d).ax.a===B.H,s=new C.b6M(t),r=t?B.db:B.bN,q=t?B.db:u,p=t?B.aP:B.M,o=A.d("Help Topics Admin",u,u,u,u,u,u,A.l(u,u,t?B.aP:B.M,u,u,u,u,u,u,u,u,u,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gc20()
if(n)n=B.RK
else n=A.V(B.xo,t?B.aP:B.M,u,u,u,u)
w=x.p
o=A.eC(A.a([A.hb(n,A.d("Save",u,u,u,u,u,u,A.l(u,u,t?B.aP:B.M,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=R.aSF(B.aI,u,O.Ud,B.nG,D.feO,v.gbva())
q=v.byL(s)
n=A.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,A.l(u,u,t?B.bI:B.ak,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&A.c()
return A.cc(o,r,A.v(A.a([q,new A.C(B.Eq,n,u),A.D(H.h1n(!1,new C.dVn(v,s),m.length,v.gc6_(),D.bmU,u,!1),1)],w),B.aj,u,B.e,B.j,0,B.p),u,!1,!1,p,u)}}
C.Os.prototype={
T(){return new C.b8C()}}
C.b8C.prototype={
a_(){var w,v=this
v.a1()
w=v.a.c
v.d=new A.aq(new A.bb(w.b,B.b0,B.aN),$.aw())
v.e=w.c
v.f=w.d},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=r?D.rK:B.c,p=A.d("Edit category",s,s,s,s,s,s,A.l(s,s,r?B.c:B.bh,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&A.c()
o=A.aL(s,B.T,!1,s,!0,B.q,s,A.aM(),o,s,s,s,s,s,2,D.bKR,B.y,!0,s,!0,s,!1,s,B.ag,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,A.l(s,s,r?B.c:B.bh,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,B.a5,s,B.am,s,s,s,s)
w=x.aS
w=A.B(new A.J(D.bQj,new C.cIa(t),w),w.k("aj.E"))
w=A.c5(B.bG,w,B.bx,8,8)
v=x.gN
v=A.B(new A.J(D.cMT,new C.cIb(t),v),v.k("aj.E"))
u=x.p
v=A.ci(A.v(A.a([o,B.ac,w,B.ac,A.c5(B.bG,v,B.bx,0,8)],u),B.m,s,B.e,B.Q,0,B.p),B.q,s,B.y,s,s,s,s,B.ai)
return A.eh(A.a([A.bJ(!1,B.dd,s,s,!0,s,s,new C.cIc(d),s,s),A.bI(B.oS,new C.cId(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.ZG.prototype={
T(){return new C.aDM()},
oi(d){return this.d.$1(d)}}
C.aDM.prototype={
a_(){this.a1()
this.d=A.bl(this.a.c.e,!0,x.u)},
auP(){var w=this.a,v=w.c,u=this.d
u===$&&A.c()
return w.oi(v.b8c(u))},
a6u(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a6u=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&A.c()
w=2
return A.b(u.aXR(new C.ie("q_"+1000*s,"",D.cLw,null,!1,r.length)),$async$a6u)
case 2:t=e
if(t!=null){u.m(new C.eHP(u,t))
u.auP()}return A.h(null,v)}})
return A.i($async$a6u,v)},
aXR(d){var w,v=this.c
v.toString
w=A.eo(new C.eHQ(d),!1,null,x.u)
return A.a4(v,!1).ci(w)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=u?B.db:B.bN,s=u?B.db:v,r=u?B.aP:B.M,q=w.a.c
s=A.eC(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,A.d(q.b+" \u2014 Questions",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.M,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=R.aSF(B.aI,v,O.Ud,B.nG,D.fkd,w.gbvA())
q=w.d
q===$&&A.c()
q=q.length
if(q===0){q=A.av(A.d("No questions yet. Tap + Question.",v,v,v,v,v,v,A.l(v,v,u?B.bI:B.ak,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=A.hL(v,new C.eHV(w,new C.b6M(u)),q,D.bn2,v,B.ai,new C.eHW(),!1)
return A.cc(s,t,u,v,!1,!1,r,v)}}
C.ZF.prototype={
T(){return new C.aDL()}}
C.aDL.prototype={
a_(){var w,v=this
v.a1()
w=v.a.c
v.d=new A.aq(new A.bb(w.b,B.b0,B.aN),$.aw())
w=A.bl(w.c,!0,x.bP)
v.e=w
if(B.d.gal(w))J.ce(v.e,D.a30)
w=v.a.c
v.f=w.d
v.r=w.e},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
ac8(){var w=0,v=A.j(x.H),u=this,t
var $async$ac8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(Z.FS(78,1920),$async$ac8)
case 2:t=e
if(t!=null)u.m(new C.eHL(u,t))
return A.h(null,v)}})
return A.i($async$ac8,v)},
adb(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=A.eo(new C.eHJ(u),!1,null,x.dZ)
w=2
return A.b(A.a4(r,!1).ci(t),$async$adb)
case 2:s=e
if(s!=null)u.m(new C.eHK(u,s))
return A.h(null,v)}})
return A.i($async$adb,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.M(a1).ax.a===B.H,g=h?B.db:B.bN,f=h?B.db:i,e=h?B.aP:B.M,d=A.d("Edit Question",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=A.eC(A.a([A.dp(S.a_h,B.oS,new C.eHN(j,a1),A.bk(B.aI,i,i,i,B.c,i,i,i,i,i,i,i)),B.aw],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=A.d("Question thumbnail",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=A.m(14)
w=j.f
v=h?B.bI:B.ak
w=A.aE(i,A.bv(e,K.aNG(A.m(14),B.bQ,140,B.AH,v,w,1/0),B.ap),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gc2_(),i,i,i,i,i,i,!1,B.aa)
e=A.d("Question users will tap",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?B.bj:B.aP
u=A.m(16)
t=A.I(h?B.aJ:B.aK,B.r,1)
s=j.d
s===$&&A.c()
r=A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,15,i,i,B.a4,i,i,!0,i,i,i,i,i,i,i,i)
v=A.p(i,A.A(A.a([A.D(A.aL(i,B.T,!1,i,!0,B.q,i,A.aM(),s,i,i,i,i,i,2,A.bo(i,B.ev,i,B.bm,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,i,i,i,B.cs,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),B.y,!0,i,!0,i,!1,i,B.ag,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,B.a8,i,i,i,i,i,i,i,i,i,i,i,r,!0,B.a5,i,B.am,i,i,i,i),1),new A.I_(j.d,i,i)],a0),B.m,i,B.e,B.j,0,i,i),B.f,i,i,new A.o(v,i,t,u,i,i,B.n),i,i,i,i,B.en,i,i,i)
u=A.d("Printable document",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,i,i,i,B.a4,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=A.iB(B.aI,i,i,B.ah,i,new C.eHO(j),i,A.d("Shows a printable badge on this answer",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=A.d("Stored answer (not AI)",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=A.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.rK:B.c
q=A.m(16)
p=A.m(16)
o=A.m(16)
n=A.I(B.bk.j(0.45),B.r,1)
m=A.p(i,D.bCz,B.f,i,i,new A.o(B.bk.j(0.12),i,i,A.m(12),i,i,B.n),i,i,i,i,B.bm,i,i,i)
l=A.d("Open Document Editor",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&A.c()
k=J.ab(k)
l=A.D(A.v(A.a([l,B.au,A.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),B.F,i,B.e,B.j,0,B.p),1)
return A.cc(d,g,A.cK(A.a([f,B.P,w,B.d5,e,B.P,v,B.aO,u,B.P,t,B.au,s,B.ac,A.aF(!1,B.a1,!0,q,A.aK(!1,p,!0,A.p(i,A.A(A.a([m,B.eA,l,A.V(B.AO,h?B.bI:B.ak,i,i,i,16)],a0),B.m,i,B.e,B.j,0,i,i),B.f,i,i,new A.o(i,i,n,o,i,i,B.n),i,i,i,i,B.fv,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gc7z(),i,i,i,i,i,i,i),B.f,r,0,i,i,i,i,i,B.ae)],a0),i,B.c0,i,i,B.ai,!1),i,!1,!1,i,i)}}
C.cZC.prototype={}
C.Uc.prototype={
T(){return new C.aBQ(A.kd(!0,null,!0,!0,null,null,!1))}}
C.aBQ.prototype={
a_(){var w,v,u,t,s,r,q=this
q.a1()
w=J.dG(q.a.c,new C.dVZ())
w=A.B(w,w.$ti.k("G.E"))
q.e=w
v=A.a([],x.s)
for(w=J.aV(q.a.c);w.C();){u=w.gU(w)
switch(u.a){case"heading":v.push("## "+u.b)
break
case"text":u=u.b
if(B.a.i(u).length!==0)v.push(u)
break
case"bullets":for(u=u.b.split("\n"),t=u.length,s=0;s<t;++s){r=B.a.i(u[s])
if(r.length!==0)v.push("\u2022 "+r)}break
default:break}}w=B.d.aH(v,"\n\n")
q.d=new A.aq(new A.bb(w,B.b0,B.aN),$.aw())},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.f.q()
this.a2()},
auQ(d,e){var w,v,u,t,s,r=this.d
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
aW3(d){var w,v,u,t,s=this.d
s===$&&A.c()
s=s.a
w=s.a
v=B.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=B.a.ol(w,v,v,u)
this.d.bM(0,new A.bb(t,A.h7(B.bt,v+u.length),B.aN))},
aa5(){var w=0,v=A.j(x.H),u,t=this,s
var $async$aa5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(Z.FS(78,1920),$async$aa5)
case 3:s=e
if(s==null){w=1
break}t.m(new C.dVF(t,s))
case 1:return A.h(u,v)}})
return A.i($async$aa5,v)},
WM(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hU().a41(B.eE),$async$WM)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return A.b(s.fc(),$async$WM)
case 4:t.m(new r.dVK(t,e))
case 1:return A.h(u,v)}})
return A.i($async$WM,v)},
aa6(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$aa6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=$.aw()
s=new A.aq(B.as,t)
r=new A.aq(new A.bb("https://",B.b0,B.aN),t)
q=u.c
q.toString
w=2
return A.b(A.c9(null,null,!0,null,new C.dVI(s,r),q,null,!0,!0,x.y),$async$aa6)
case 2:if(e===!0)u.m(new C.dVJ(u,s,r))
s.S$=t
s.P$=0
r.S$=t
r.P$=0
return A.h(null,v)}})
return A.i($async$aa6,v)},
bzG(){var w,v,u,t,s,r=null,q=A.a([],x.a),p=this.d
p===$&&A.c()
p=B.a.fu(p.a.a,A.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new A.J(p,new C.dVB(),A.T(p).k("J<1,n>")).bY(0,new C.dVC())
for(p=J.aV(w.a),v=new A.hc(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gU(p)
if(B.a.a0(s,"## "))q.push(new C.lq("heading",B.a.i(B.a.b_(s,3)),r,r))
else if(B.a.a0(s,"\u2022 ")||B.a.a0(s,"- "))q.push(new C.lq("bullets",new A.J(A.a(s.split("\n"),u),new C.dVD(),t).bY(0,new C.dVE()).aH(0,"\n"),r,r))
else q.push(new C.lq("text",s,r,r))}p=this.e
p===$&&A.c()
B.d.v(q,p)
if(q.length===0)q.push(D.a30)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.cZC(n),l=n?B.az:B.fB,k=A.d(p.a.d,o,o,o,o,o,o,B.ct,o,o,o),j=x.p
k=A.eC(A.a([A.dp(S.a_h,B.a6C,new C.dVP(p,d),A.bk(B.aI,o,o,o,B.c,o,o,o,o,o,o,o)),B.ab],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?B.cC:B.iH
v=A.c5(B.bG,A.a([p.v4(E.LL,"Bold",new C.dVQ(p),m),p.v4(E.YD,"Italic",new C.dVR(p),m),p.v4(E.ahD,"Underline",new C.dVS(p),m),p.v4(Ab.YK,"Heading",new C.dVT(p),m),p.v4(O.LM,"Bullets",new C.dVU(p),m),p.v4(E.ahC,"Align",new C.dVV(),m),p.v4(B.ES,"Link",p.gbUG(),m),p.v4(B.pp,"Image",p.gbUF(),m),p.v4(Y.YW,"Video",p.gbUH(),m),p.v4(M.ZX,"Signature",new C.dVW(p),m),p.v4(Y.LN,"Divider",new C.dVX(p),m)],j),B.bx,4,4)
w=A.p(o,A.v(A.a([v,B.ao,A.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,A.l(o,o,n?B.e0:B.bo,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),B.aj,o,B.e,B.j,0,B.p),B.f,w,o,o,o,o,o,o,E.agv,o,o,o)
v=n?B.db:B.c
u=A.m(12)
t=A.I(n?B.es:B.e2,B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(n?0.35:0.08),B.cI,16)],x.V)
r=p.d
r===$&&A.c()
q=A.l(o,o,n?B.iK:B.az,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=A.a([w,A.D(new A.C(B.c0,A.p(o,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),r,o,o,o,o,o,2,A.bo(o,B.ev,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.e0:B.bo,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,p.f,B.ag,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,q,!0,B.a5,o,B.am,o,o,o,o),B.f,o,o,new A.o(v,o,t,u,s,o,B.n),o,o,o,o,A3.Ar,o,o,o),o),1)],j)
n=p.e
n===$&&A.c()
if(n.length!==0){n=new A.hV(n,A.T(n).k("hV<1>"))
j.push(A.p(o,A.c5(B.bG,n.gdK(n).dr(0,new C.dVY(p,m),x.g5).dC(0),B.bx,0,8),B.f,o,o,o,o,o,o,o,B.L4,o,o,o))}return A.cc(k,l,A.v(j,B.m,o,B.e,B.j,0,B.p),o,!1,!1,o,o)},
v4(d,e,f,g){var w=null,v=g.a,u=v?B.db:B.c,t=A.m(8),s=A.m(8)
return A.hn(A.aF(!1,B.a1,!0,t,A.aK(!1,s,!0,new A.C(B.cl,A.V(d,v?B.iK:B.az,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,w,w,w,B.ae),w,e,w,w)}}
C.dcJ.prototype={}
C.azo.prototype={
a4(){return"_KbView."+this.b}}
C.aol.prototype={
T(){return new C.aBP(D.aQZ)},
cJp(d,e){return this.e.$2$size(d,e)}}
C.aBP.prototype={
gaxz(){var w,v
if(this.e==null)return null
for(w=J.aV(this.a.c);w.C();){v=w.gU(w)
if(v.a===this.e)return v}return null},
gcme(){var w,v,u,t,s,r=this.gaxz()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
c21(d){this.m(new C.dVy(this,d))},
c8J(d){this.m(new C.dVz(this,d))},
bxW(){this.m(new C.dVq(this))},
bxY(){this.m(new C.dVr(this))},
gb2r(){var w=A.bl(this.a.c,!0,x.i)
B.d.b1(w,new C.dVA())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.M(d).ax.a===B.H,f=new C.dcJ(g),e=x.O
e=g?A.a([B.M.j(0.9),B.bj.j(0.85)],e):A.a([B.er.j(0.55),B.mC.j(0.45)],e)
w=A.m(22)
v=A.I((g?B.aJ:B.ff).j(0.55),B.r,1)
switch(i.d.a){case 0:g=i.byX(f)
break
case 1:g=i.gaxz()
g.toString
g=i.bzE(f,g)
break
case 2:u=i.gaxz()
u.toString
t=i.gcme()
t.toString
s=A.b0(u.d)
r=A.m(16)
r=A.p(h,A.d(t.b,h,h,h,h,h,h,D.eRA,h,h,h),B.f,h,h,new A.o(B.aI,h,h,r,h,h,B.n),h,h,h,h,B.by,h,h,1/0)
q=g?B.az:B.c
p=A.m(16)
o=A.I(g?B.aJ:B.aK,B.r,1)
n=A.a([new A.ac(0,B.G,B.w.j(g?0.28:0.06),B.ej,10)],x.V)
m=g?B.fs:B.p1
l=A.m(8)
k=A.V(B.pv,g?B.dx:B.dW,h,h,h,14)
j=x.p
j=A.v(A.a([new C.azm(f,i.gbxX(),u.c,s,"Answer",h),A.D(A.cK(A.a([r,B.ac,A.p(h,A.v(A.a([A.p(h,A.A(A.a([k,B.ea,A.d("Stored answer",h,h,h,h,h,h,A.l(h,h,g?B.dx:B.dW,h,h,h,h,h,h,h,h,11,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),B.m,h,B.e,B.Q,0,h,h),B.f,h,h,new A.o(m,h,h,l,h,h,B.n),h,h,h,B.e3,B.h1,h,h,h),new C.aYw(t.c,t.e,f,h)],j),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(q,h,o,p,n,h,B.n),h,h,h,h,B.c0,h,h,1/0)],j),h,B.bmM,h,h,B.ai,!1),1)],j),B.aj,h,B.e,B.j,0,B.p)
g=j
break
default:g=h}return A.p(h,g,B.ap,h,h,new A.o(h,h,v,w,h,new A.a6(B.b1,B.b3,B.x,e,h,h),B.n),h,h,h,B.hG,h,h,h,h)},
aTG(d){var w,v,u,t=null,s=d.a,r=s?D.rK:B.c,q=B.aD.j(0.22)
q=A.a([new A.ac(0,B.G,q,B.J,14),new A.ac(0,B.G,B.w.j(s?0.28:0.06),B.J,8)],x.V)
w=A.I(s?B.aJ:B.ff,B.r,2)
v=this.a
u=x.p
q=A.a([A.p(t,A.hR(v.cJp(v.d,72),B.ap),B.f,t,t,new A.o(r,t,w,t,q,t,B.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)B.d.v(q,A.a([B.ao,A.d("Tap to switch",t,t,t,t,t,t,A.l(t,t,B.d2,t,t,t,t,t,t,t,t,12,t,t,B.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return A.v(q,B.m,t,B.e,B.j,0,B.p)},
byX(d){var w,v,u=this,t=null,s=u.a.r
s=A.av(s!=null?A.aE(t,u.aTG(d),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,B.aa):u.aTG(d),t,t,t)
w=d.a
v=A.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,A.l(t,t,w?B.aP:B.M,t,t,t,t,t,t,t,t,20,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),B.L,t,t)
return A.cK(A.a([s,B.ay,v,B.ao,A.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,A.l(t,t,w?B.bI:B.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),B.L,t,t),B.bu,A.ib(!0,t,t,B.y,G.aLv,new C.dVt(u,d),u.gb2r().length,t,B.dP,B.ai,!0)],x.p),t,D.bn3,t,t,B.ai,!1)},
bzE(d,e){var w,v,u,t,s=null,r=A.bl(e.e,!0,x.u)
B.d.b1(r,new C.dVv())
w=A.b0(e.d)
v=d.a
u=A.d("Tap a question to read the stored answer.",s,s,s,s,s,s,A.l(s,s,v?B.bI:B.ak,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=A.av(A.d("No questions in this category yet.",s,s,s,s,s,s,A.l(s,s,v?B.bI:B.ak,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=A.hL(s,new C.dVw(this,r,d,e),t,B.uO,s,B.ai,new C.dVx(),!1)
return A.v(A.a([new C.azm(d,this.gbxV(),e.c,w,e.b,s),new A.C(Ag.uP,u,s),A.D(v,1)],x.p),B.aj,s,B.e,B.j,0,B.p)}}
C.azm.prototype={
B(d){var w=this,v=null,u=w.c.a,t=A.aH(v,v,v,v,A.V(B.ez,u?B.aP:B.M,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=A.m(12)
q=A.p(v,A.V(w.e,s,v,v,v,22),B.f,v,v,new A.o(r,v,v,q,v,v,B.n),v,v,v,v,B.cl,v,v,v)
return new A.C(D.bqi,A.A(A.a([t,q,B.aw,A.D(A.d(w.r,v,v,v,v,v,v,A.l(v,v,u?B.aP:B.M,v,v,v,v,v,v,v,v,17,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,v,v),v)}}
C.aar.prototype={
B(d){var w=null,v=this.c,u=A.b0(v.d),t=this.d.a,s=t?D.rK:B.c,r=A.m(14),q=A.m(14),p=A.m(14),o=A.I(t?B.aJ:B.aK,B.r,1),n=A.a([new A.ac(0,B.G,B.w.j(t?0.28:0.06),B.dz,6)],x.V),m=u.j(0.15),l=A.m(12)
l=A.p(w,A.V(v.c,u,w,w,w,22),B.f,w,w,new A.o(m,w,w,l,w,w,B.n),w,40,w,w,w,w,w,40)
return new A.fF(1,A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(w,A.v(A.a([l,B.ao,A.d(v.b,w,2,B.a2,w,w,w,A.l(w,w,t?B.aP:B.M,w,w,w,w,w,w,w,w,10,w,w,B.I,w,1.1,!0,w,w,w,w,w,w,w,w),B.L,w,w)],x.p),B.m,w,B.b9,B.j,0,B.p),B.f,w,w,new A.o(w,w,o,p,n,w,B.n),w,w,w,w,B.cl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.ae),w)}}
C.aYw.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=A.a([],q)
if(this.d){w=r.a
v=w?B.fs:B.p1
u=A.m(8)
t=A.V(B.tu,w?B.dx:B.dW,s,s,s,14)
p.push(A.p(s,A.A(A.a([t,B.d9,A.d("Printable document",s,s,s,s,s,s,A.l(s,s,w?B.dx:B.dW,s,s,s,s,s,s,s,s,10,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),B.m,s,B.e,B.Q,0,s,s),B.f,s,s,new A.o(v,s,s,u,s,s,B.n),s,s,s,B.cK,B.eD,s,s,s))}B.d.v(p,J.b6(this.c,new C.c6A(r),x.l))
return A.v(p,B.F,s,B.e,B.j,0,B.p)}}
C.aaj.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new A.C(D.bkU,A.d(q.b,r,r,r,r,r,r,A.l(r,r,s.d.a?B.aP:B.M,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new A.C(B.hF,A.bv(A.m(12),K.aNG(r,B.bQ,160,B.pp,r,w,1/0),B.ap),r)
case"video":v=q.c
q=v==null?q.b:v
return new A.C(B.hF,new C.azn(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new A.C(B.uK,A.aK(!1,r,!0,A.d(q,r,r,r,r,r,r,A.l(r,r,s.d.a?B.cx:B.bk,r,B.mp,r,r,r,r,r,r,r,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cBR(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=A.iw(v?B.aJ:B.aK,r,r,r,r,r)
q=A.d(q.b,r,r,r,r,r,r,A.l(r,r,v?B.cm:B.aJ,r,r,r,r,r,r,r,r,r,B.cD,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=A.p(r,r,B.f,v?B.bI:B.ak,r,r,r,1,r,r,r,r,r,120)
return new A.C(B.Ac,A.v(A.a([u,q,B.aO,t,B.au,A.d("Signature",r,r,r,r,r,r,A.l(r,r,v?B.bI:B.ak,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r)
case"bullets":v=x.cl
q=A.B(new A.cS(new A.a1(A.a(q.b.split("\n"),x.s),new C.cBS(),x.cc),new C.cBT(s),v),v.k("G.E"))
return new A.C(B.kA,A.v(q,B.F,r,B.e,B.j,0,B.p),r)
case"divider":return new A.C(B.hF,A.iw(s.d.a?B.aJ:B.aK,r,r,r,r,r),r)
default:q=q.b
if(B.a.i(q).length===0)return B.bH
return new A.C(B.f2,C.hAD(q,s.d),r)}}}
C.azn.prototype={
T(){return new C.beC()}}
C.beC.prototype={
a_(){this.a1()
this.aca()},
aca(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$aca=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=B.a.i(r.a.c)
if(J.ab(n)!==0)p=!J.cZ(n,"http")&&!J.cZ(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=A.X2(A.cv(n,0,null),null)
w=7
return A.b(J.ags(q),$async$aca)
case 7:if(r.c==null){w=1
break}r.m(new C.dcK(r,q))
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
return A.i($async$aca,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?B.bj:B.f7
u=A.m(12)
return A.p(B.A,A.V(B.pA,w?B.bI:B.ak,t,t,t,36),B.f,t,t,new A.o(v,t,t,u,t,t,B.n),t,120,t,t,t,t,t,t)}w=A.m(12)
v=s.a
u=J.agq(v)
return A.bv(w,new A.fF(u,new A.an(B.A,t,B.a9,B.q,A.a([new A.zy(s,t),A.aH(t,t,t,t,A.V(v.f?B.ahK:B.LO,B.c,t,t,t,44),t,t,t,new C.dcM(this,s),t,t,t,t,t,t)],x.p),t),t),B.ap)}}
C.ap8.prototype={
a4(){return"NgmyMusicLane."+this.b}}
C.HQ.prototype={
a4(){return"NgmyMusicRhymeScheme."+this.b}}
C.r6.prototype={}
C.aoo.prototype={
T(){var w=null
return new C.aBR(new A.aq(B.as,$.aw()),A.mn(0,w,w),A.a([],x.m),D.BO,D.aD9,w,w)},
gdV(){return this.d}}
C.aBR.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.mL,null,1,null,v)
w.f5(0,!0)
v.as!==$&&A.aQ()
v.as=w
v.z=B.d.gK(D.a1C).a},
q(){var w=this,v=w.as
v===$&&A.c()
v.q()
v=w.d
v.S$=$.aw()
v.P$=0
w.e.q()
w.brv()},
gao4(){var w,v,u,t,s=this.x
if(s===D.BP)return null
s=s===D.BO
w=s?D.a1C:D.a0P
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?B.d.gK(w):null},
cn0(d){return this.m(new C.dWc(this,d))},
axm(){$.aU.x1$.push(new C.dW3(this))},
I0(d){return this.cmt(d)},
aW4(){return this.I0(null)},
cmt(b0){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$I0=A.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=B.a.i(b0==null?q.d.a.a:b0)
if(J.ab(a8)===0||q.r||q.a.e){w=1
break}w=3
return A.b(q.a.f.$0(),$async$I0)
case 3:e=b2
if(!e){w=1
break}A.jJ()
d=a8.toLowerCase()
p=B.a.t(d,"continue")||B.a.t(d,"keep going")||B.a.t(d,"go on")||B.a.t(d,"next verse")||B.a.t(d,"more lyrics")||B.a.t(d,"endelea")||B.a.t(d,"endelea na")||B.a.t(d,"ongeza")||B.a.t(d,"tuendelee")
a0=q.f
a1=B.d.b8(a0,new C.dW5())
o=!p&&!a1
d=a8.toLowerCase()
if(!(B.a.t(d,"fix")||B.a.t(d,"rewrite")||B.a.t(d,"re-write")||B.a.t(d,"rhyme better")||B.a.t(d,"better rhyme")||B.a.t(d,"sound better")||B.a.t(d,"improve")||B.a.t(d,"polish")||B.a.t(d,"make it rhyme")||B.a.t(d,"boresha")||B.a.t(d,"rekebisha")||B.a.t(d,"endeleza mistari")))a2=C.h6Q(a8)&&a1
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
l=C.h6Q(a8)&&!p
q.m(new C.dW6(q,a8))
q.axm()
k=B.a.i(q.a.c)
if(J.ab(k)===0){q.m(new C.dW7(q))
q.axm()
w=1
break}t=5
j=A.mT(k)
i=new A.J(a0,new C.dW8(),A.T(a0).k("J<1,n>")).aH(0,"\n\n")
a0=C.hU8(m,p,o,q.x,n,q.y,q.gao4(),l)
a3=J.ab(i)!==0?"--- Conversation so far ---\n"+A.t(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+A.t(a8)
w=8
return A.b(A.qx(j,h,B.hh,null),$async$I0)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=B.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=B.a.i(a0)}else a6=L.bzj(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.m(new C.dW9(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.m(new C.dWa(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.m(new C.dWb(q))
q.axm()
w=r.pop()
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$I0,v)},
bDC(){return this.I0("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=A.M(d).ax.a===B.H,p=q?B.DX:D.bbN,o=x.p
o=A.a([A.v(A.a([A.D(s.clI(q),1),s.bCQ(q)],o),B.m,r,B.e,B.j,0,B.p)],o)
if(s.f.length!==0&&!s.r){w=B.aM.j(0.55)
v=s.r?r:s.gbDB()
u=A.m(28)
t=A.a([B.aM,B.aL],x.O)
o.push(A.ao(78,A.aF(!1,B.a1,!0,r,A.aK(!1,r,!0,A.ex(D.dYg,r,new A.o(r,r,r,u,A.a([new A.ac(0,B.G,B.aM.j(0.45),B.cI,16)],x.V),new A.a6(B.a3,B.a7,B.x,t,r,r),B.n),r,r,r),B.rh,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),B.f,B.K,10,r,w,B.rh,r,r,B.ae),r,r,r,14,r,r))}return A.p(r,new A.an(B.W,r,B.a9,B.q,o,r),B.f,p,r,r,r,r,r,r,r,r,r,r)},
clI(d){var w,v,u,t=this,s=null
if(t.x===D.BP)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=A.a([A.fLB(s,!1,B.K,0,0,w,A.fHY(t.crd(d),B.Ux,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=A.V(B.akb,B.aD.j(0.5),s,s,s,52)
w.push(A.b42(new A.C(B.ey,A.v(A.a([u,B.ay,A.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,A.l(s,s,d?B.aA:B.dy,s,s,s,s,s,s,s,s,14,s,s,B.a4,s,1.45,!0,s,s,s,s,s,s,s,s),B.L,s,s),B.ay,A.c5(B.fI,A.a([t.agn("Full bongo love song ABAB",d),t.agn("Mix: group vs private jet \u2014 which flies?",d),t.agn("Song from John 3:16 + matching verses",d),t.agn("Fix my rhyme \u2014 paste your lines",d)],v),B.bx,8,8)],v),B.m,s,B.b9,B.j,0,B.p),s),!1))}else{v=t.r?1:0
w.push(new A.nB(D.blB,A.Wv(new A.oa(new C.dW4(t,d),u+v,!0,!0,!0,0,A.rz(),s)),s))}return A.va(0,s,B.q,t.e,B.y,s,s,A5.a8U,s,s,!1,s,B.ai,!1,w)},
crd(d){var w=this.as
w===$&&A.c()
return A.c6(w,new C.dWj(this,d),null)},
crf(d){var w,v=this,u=null,t=A.m(14),s=v.r?u:new C.dWl(v),r=B.w.j(d?0.35:0.06),q=A.m(14),p=A.I(B.ba.j(0.35),B.r,1),o=v.gao4()
o=o==null?u:o.c
o=A.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,B.I3,u,u,u)
w=v.gao4()
w=w==null?u:w.b
if(w==null)w="Style"
w=A.D(A.d(w,u,u,u,u,u,u,A.l(u,u,d?B.c:B.bh,u,u,u,u,u,u,u,u,12,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(u,A.A(A.a([o,B.ab,w,A.V(v.w?B.Mf:B.qG,B.ba,u,u,u,20)],x.p),B.m,u,B.e,B.j,0,u,u),B.f,u,u,new A.o(r,u,p,q,u,u,B.n),u,u,u,u,B.oh,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ae)},
at9(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=A.a([B.aZ,B.aT],x.O)
break
case 1:w=A.a([B.bk,B.cx],x.O)
break
case 2:w=A.a([B.bA,B.aD],x.O)
break
default:w=n}v=m?6:0
u=A.m(14)
t=A.m(14)
s=this.r?n:new C.dW2(this,d)
r=A.m(14)
w=m?new A.a6(B.a3,B.a7,B.x,w,n,n):n
if(m)q=n
else q=B.w.j(g?0.3:0.05)
p=A.d(f,n,n,n,n,n,n,B.I3,n,n,n)
if(m)o=B.c
else o=g?B.ad:B.bh
return A.D(A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.dh(n,A.v(A.a([p,A.d(e,n,n,n,n,n,n,A.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),B.m,n,B.e,B.j,0,B.p),n,n,B.bc,new A.o(q,n,n,r,n,w,B.n),B.a1,n,n,n,B.jM,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),B.f,n,v,n,n,n,n,n,B.ae),1)},
crg(d,e){var w,v,u,t=this,s=null,r=t.x===D.BO?t.z:t.Q,q=A.m(20)
if(r===d.a)r=B.ba.j(e?0.25:0.15)
else r=B.w.j(e?0.2:0.04)
w=A.m(20)
v=t.r?s:new C.dWm(t,d)
u=A.d(d.c,s,s,s,s,s,s,B.S2,s,s,s)
return A.aF(!1,B.a1,!0,q,A.aK(!1,w,!0,new A.C(B.fN,A.A(A.a([u,B.d9,A.d(d.b,s,s,s,s,s,s,A.l(s,s,e?B.c:B.bh,s,s,s,s,s,s,s,s,10,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.m,s,B.e,B.Q,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),B.f,r,0,s,s,s,s,s,B.ae)},
agn(d,e){var w=null,v=A.d(d,w,w,w,w,w,w,E.a6w,w,w,w),u=B.aD.j(e?0.2:0.1)
return A.mw(w,u,v,w,this.r?w:new C.dWd(this,d),w,w,w,w)},
bCQ(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=A.m(22),o=d?B.M.j(0.95):B.c,n=A.I(B.aD.j(0.2),B.r,1),m=x.p,l=A.a([],m)
if(q>0)l.push(new A.C(F.agh,A.d("$"+B.k.aa(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,A.l(r,r,B.aM.j(0.85),r,r,r,r,r,r,r,r,9,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=A.l(r,r,d?B.c:B.bh,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.BP?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=A.D(A.aL(r,B.T,!1,r,!0,B.q,r,A.aM(),w,r,r,r,r,r,2,A.bo(r,B.ev,r,B.h2,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.l(r,r,d?B.bZ:B.hD,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),B.y,!0,r,!0,r,!1,r,B.ag,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.dW_(s),r,!1,r,r,!1,r,!0,r,B.a8,r,r,r,r,r,r,r,r,r,r,r,v,!0,B.a5,r,B.am,r,r,r,r),1)
u=s.r
t=u?r:new C.dW0(s)
l.push(A.A(A.a([v,new A.I_(w,B.aD,r),A.aF(!1,B.a1,!0,r,A.aK(!1,r,!0,A.ex(u?D.dYt:D.bER,r,D.aXg,42,r,42),B.cL,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),B.f,r,0,r,r,B.cL,r,r,B.ae)],m),B.dG,r,B.e,B.j,0,r,r))
return A.p(r,A.v(l,B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,n,p,r,r,B.n),r,r,r,B.uM,B.aeS,r,r,r)}}
C.aJV.prototype={
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
C.Yp.prototype={
T(){return new C.ayO(null,null)},
bd_(){return this.f.$0()}}
C.ayO.prototype={
a_(){var w,v=this,u=null
v.a1()
w=A.bj(u,D.bjZ,u,1,u,v)
w.co(0)
v.d!==$&&A.aQ()
v.d=w
w=A.bj(u,B.ph,u,1,u,v)
w.f5(0,!0)
v.e!==$&&A.aQ()
v.e=w
w=A.bj(u,B.l1,u,1,u,v)
w.cF(0)
v.f!==$&&A.aQ()
v.f=w
w=A.bj(u,B.wQ,u,1,u,v)
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
w.bql()},
c23(){var w=this.d
w===$&&A.c()
w.ep(0).bz(new C.da3(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(A.aI(d,B.bS,x.w).w.a.a-32,360),h=B.w.j(0.82),g=k.gc22(),f=x.l,e=J.e0(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&A.c()
e[v]=new A.Cs(new C.da4(k,v,d),j,w,j)}f=A.B(e,f)
w=k.d
w===$&&A.c()
u=A.m(28)
t=A.I(B.c.j(0.22),B.r,1.5)
s=A.a([new A.ac(2,B.G,B.aL.j(0.35),B.J,40),new A.ac(0,B.G,B.aI.j(0.25),B.fG,28)],x.V)
r=k.e
r===$&&A.c()
q=k.r
q===$&&A.c()
q=A.c6(new A.h2(A.a([r,q],x.U)),new C.da5(k),j)
r=A.nA(B.je,D.fhz,new C.da6())
p=A.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,A.l(j,j,B.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,B.cs,j,1.45,!0,j,j,j,j,j,j,j,j),B.L,j,j)
o=x.p
n=A.A(A.a([k.aW5(B.kb,"Resets in 24h"),B.ab,k.aW5(B.pv,"Help Topics ready")],o),B.m,j,B.b9,B.j,0,j,j)
m=A.a([],o)
k.a.toString
l=B.c.j(0.35)
m.push(A.D(A.dW(D.fcl,new C.da7(k),A.dd(j,j,j,j,j,j,j,j,j,B.ad,j,j,B.m1,j,new A.b7(A.m(14),B.Z),new A.aA(l,1,B.r,-1),j,j,j,j)),1))
k.a.toString
m.push(B.aw)
k.a.toString
l=A.m(14)
m.push(A.D(A.bI(D.fhp,g,A.bk(B.aI,j,j,6,B.c,j,B.m1,B.aI.j(0.5),new A.b7(l,B.Z),j,j,j)),1))
f.push(A.av(A.aE(j,A.c6(w,new C.da8(k),A.p(j,A.v(A.a([q,B.ay,r,B.S,p,B.P,n,B.bu,A.A(m,B.m,j,B.e,B.j,0,j,j)],o),B.m,j,B.e,B.Q,0,B.p),B.f,j,j,new A.o(j,j,t,u,s,D.bMJ,B.n),j,j,j,j,A6.ag9,j,j,i)),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.da9(),j,j,j,j,j,j,!1,B.aa),j,j,j))
return A.aF(!1,B.a1,!0,j,A.aE(j,new A.an(B.W,j,B.a9,B.q,f,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,B.aa),B.f,h,0,j,j,j,j,j,B.ae)},
aW5(d,e){var w=null,v=B.c.j(0.08),u=A.m(20),t=A.I(B.c.j(0.12),B.r,1)
return A.p(w,A.A(A.a([A.V(d,B.aL,w,w,w,13),B.ea,A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.fN,w,w,w)}}
C.aIO.prototype={
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
T(){return new C.aCc(A.a([],x.E),A.a([],x.s))}}
C.aCc.prototype={
gaos(){return B.k.D(A.Kb(this.a.c.a,new C.e51(this)),0,1/0)},
a6C(){var w,v=this,u=v.d,t=v.gaos()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)A.qv(u.a,t,!0,!1)},
It(d,e){var w,v,u,t=this,s=t.gaos(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gaos()
if(w<v-0.005)A.hbV(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)A.qv(u.a,w,!0,!1)
A.qv(t.a.c.a,w,!0,!1)
A.Ad(!0,!1,w,t.a.c.a)},
a_(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a1()
$.aU.c0$.push(o)
w=$.HE+1
$.HE=w
if(w===1){w=$.fZt
if(w!=null)w.$0()}v=$.fK0.h(0,B.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=A.bl(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=A.bl(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=A.ly(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,B.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=A.aNl(u,B.k.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new A.v2(w,u,r,q,s.e,p)}o.d=t}o.NY()
o.a6C()
$.aU.x1$.push(new C.e5I(o))
o.Q=A.dF(B.nv,new C.e5J(o))
o.as=A.dF(B.fL,new C.e5K(o))},
q(){var w=this,v=w.Q
if(v!=null)v.a9(0)
v=w.as
if(v!=null)v.a9(0)
$.aU.hz(w)
C.hsw()
w.a2()},
ctl(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new A.Q(Date.now(),0,!1)
v=p.r
if(!C.a6r(v,w)){if(C.fK2(p,q.e)){q.m(new C.e5q(q,p))
q.xf(!1,!0,!0)}else if(q.c!=null)q.m(new C.e5r())
return}if(!C.c8Q(v.c?v.bQ():v)){q.m(new C.e5s(p))
q.aWd(!1)
return}u=p.gBE()
if(u<=0)return
t=w.cW(A.bZ(A.bx(w),A.bF(w),A.bP(w),12,0,0,0,0))
s=C.fK3(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.m(new C.e5t())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(B.d.b8(q.e,new C.e5u(r))){q.m(new C.e5v(p,w,u))
return}q.m(new C.e5w(q,p,u,w))
q.avr(new A.d1(r,p.a,u,B.fz,B.fa,"Clock-in daily earnings (local)",null,null,B.cj,w))},
iI(d){if(d===B.fp)this.DT()},
NY(){var w,v,u,t,s,r,q,p=this.d
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
Qz(d){return this.cs0(d)},
cs0(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Qz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.NY()
t.It(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return A.b(x.r.b(s)?s:A.dR(s,x.H),$async$Qz)
case 3:case 1:return A.h(u,v)}})
return A.i($async$Qz,v)},
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
return A.b(H.yW(q.w,k,l,j,m,!1,n),$async$DT)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.m(new C.e5l(q,p))
q.Qz(!1)}w=8
return A.b(q.IF(),$async$DT)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=A.a8(h)
$.am.$1("[growth income] pull wallet: "+A.t(o))
w=9
return A.b(q.IF(),$async$DT)
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
Mq(d){return this.bx7(d)},
bx6(){return this.Mq(null)},
bx7(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$Mq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return A.b(A.ay(),$async$Mq)
case 3:s=f
r=B.a.i(t.a.c.a.toLowerCase())
q=A.d8(t.w,x.N)
r=s.rI("ngmy_gi_credited_txn_ids_"+r)
q.v(0,r==null?A.a([],x.s):r)
j.a=0
p=A.a([],x.s)
o=d==null?null:A.ks(d,A.T(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,A.K)(r),++m){l=r[m]
k=l.a
if(q.t(0,k))continue
if(o!=null&&!o.t(0,k))continue
if(l.d===B.fn&&l.x===B.cj&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.m(new C.e52(j,t,i))
q.v(0,p)
r=A.B(q,A.a2(q).k("cl.E"))
t.w=r
w=4
return A.b(A.aoY(t.a.c.a,r),$async$Mq)
case 4:t.auY(!1,!0)
r=t.c
if(r!=null)r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Balance updated: +$"+A.dy(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Mq,v)},
IF(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$IF=A.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=A.T(a2).k("a1<1>")
a4=A.B(new A.a1(a2,new C.e5m(),a3),a3.k("G.E"))
a5=a4
a6=A.a([],x.s)
w=J.ab(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=A.T(a2).k("J<1,n>")
e=A.B(new A.J(a2,new C.e5n(),a3),a3.k("aj.E"))
q=e
w=9
return A.b(A.le("transactions","id,status",null,null,null,A.E(["id",q],x.N,x.j),null,!0,null,null,!1,B.bF),$async$IF)
case 9:p=a9
if(r.c==null){w=1
break}o=!1
for(a2=J.aV(p);a2.C();){n=a2.gU(a2)
m=n
a3=J.q(m,"id")
l=J.k(a3==null?"":a3)
a3=A.aN(J.q(m,"status"))
d=a3==null?null:B.k.O(a3)
k=d==null?0:d
if(J.ab(l)===0)continue
j=B.d.bf(r.e,new C.e5o(l))
if(j<0)continue
i=r.e[j].x
if(J.y(k,1))a0=B.cj
else a0=J.y(k,2)?B.jY:B.dr
h=a0
if(!J.y(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===B.dr&&h===B.cj&&a3[j].d===B.fn)J.ce(a6,l)
if(i===B.dr&&h===B.jY&&r.e[j].d===B.eJ){g=r.d
if(g!=null){r.It(g.d+r.e[j].c,!1)
r.auY(!1,!0)}}}}if(o&&r.c!=null)r.m(new C.e5p())
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
return A.b(r.Mq(a6),$async$IF)
case 13:w=11
break
case 12:w=14
return A.b(r.bx6(),$async$IF)
case 14:case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$IF,v)},
Oy(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$Oy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return A.b(A.ul(i.a,i),$async$Oy)
case 3:h=e
if(t.c==null){w=1
break}t.m(new C.e56(t,h))
t.NY()
t.a6C()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return A.b(H.yW(s[0],p,q,o,r,!0,i),$async$Oy)
case 4:i=e.a
n=i[4]
m=A.bl(i[2],!0,x.o)
l=i[5]
t.w=A.bl(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.NY()
t.a6C()
k=C.fK2(n,m)
if(k)t.It(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.Z&&s.az>0
else s=!0
j=A.h_c(n,m,new A.Q(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.NY()
if(t.c==null){w=1
break}t.m(new C.e57(t,n,m,l))
if(i){t.xf(!1,!0,!0)
if(j==="reset"){A.fZ2(t.a.c.a)
i=t.c
if(i!=null)A.fZ5(i,null)}else if(j==="warn2"){A.fZ3(t.a.c.a)
i=t.c
if(i!=null)C.fZ6(i)}}else if(k)t.xf(!1,!0,!0)
else t.Qz(!1)
case 1:return A.h(u,v)}})
return A.i($async$Oy,v)},
xf(d,e,f){return this.ccg(d,e,f)},
auY(d,e){return this.xf(d,!1,e)},
aWd(d){return this.xf(!1,d,!1)},
ccg(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
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
A.HJ(t.w,p,q,s,o,r)
if(f)t.Qz(d)
case 1:return A.h(u,v)}})
return A.i($async$xf,v)},
c2i(){this.m(new C.e5f())
this.auY(!1,!0)},
acP(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===B.cj&&A.rx(d)){w=r.a
w.f.$1(new A.d1(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.c8M(q,d)
v=q.d=A.Kb(r.a.c.a,new C.e5c(r))
r.at=r.a.c.d=v
A.qv(q.a,v,!0,!1)
if(r.c!=null)r.m(new C.e5d(r,d))
r.xf(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new A.d1(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===B.dr
if(w&&d.d===B.fn)s=!1
else if(w&&d.d===B.eJ){r.It(q.d-d.c,!0)
s=!0}else{C.c8M(q,d)
w=d.d
s=w===B.eJ||w===B.jA
r.It(q.d,s)}r.m(new C.e5e(r,d))
w=d.d
r.xf(s,e,w===B.eJ||w===B.jA||d.x===B.cj||w===B.fz)},
avr(d){return this.acP(d,!0,!1)},
aXa(d,e){return this.acP(d,!0,e)},
aX9(d,e){return this.acP(d,e,!1)},
c5e(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.hWi(u,e,d)){v.lL("This plan is already active.")
return}w=A.hbr(u.a,d,e)
if(C.hSK(u.a,v.e,w)){v.lL("You already own this plan.")
return}if(u.d<g){v.lL("Insufficient balance. Add funds in the Wallet tab first.")
return}v.m(new C.e5g(v))
v.m(new C.e5h(v,u,new A.v2(d,e,0.0286,new A.Q(Date.now(),0,!1),0,0)))
v.avr(new A.d1(w,u.a,g,B.jA,B.fa,"Direct investment buy: "+d,null,null,B.cj,new A.Q(Date.now(),0,!1)))
v.m(new C.e5i(v))
v.lL("Plan purchased: "+d)},
lL(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
Z_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Z_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ht(s,new C.alY(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$Z_)
case 3:w=4
return A.b(t.Oy(),$async$Z_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Z_,v)},
adj(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$adj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ht(s,new C.agM(r,A.a([r],x.d9),B.P7,t.a.d,t.gaX8(),t.gaWc(),null),!1,null,x.X),$async$adj)
case 3:case 1:return A.h(u,v)}})
return A.i($async$adj,v)},
adh(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$adh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ht(s,new C.ajz(r,t.a.d,t.e,t.gaX8(),t.gaWc(),new C.e5k(t),null),!1,"LocalGrowthGameCenter",x.X),$async$adh)
case 3:case 1:return A.h(u,v)}})
return A.i($async$adh,v)},
aaQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aaQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new A.Q(s,0,!1)
w=C.fK2(j,t.e)?3:4
break
case 3:w=5
return A.b(t.aWd(!0),$async$aaQ)
case 5:case 4:if(j.x==null){t.lL("Choose an investment plan first, then come back to clock in.")
t.m(new C.e58(t))
w=1
break}if(A.ml(r)===6||A.ml(r)===7){t.lL("Clock-in opens Monday through Friday.")
w=1
break}if(!C.h_d(r)){t.lL("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a6r(q,r)&&j.fy>0){t.lL("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!A.aO3(q,r))if(!A.aO3(j.fr,r)){q=A.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,A.K)(p),++n){m=p[n]
if(B.a.i(m.b.toLowerCase())===B.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new A.aE5(m.y,l,m.a))}}q=A.haT(q,r)}else q=p
else q=p}else q=!1
if(q){t.lL("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.lL("You are already clocked in for today.")
w=1
break}k=C.htY(r)
q=j.a
t.m(new C.e59(j,r,k))
t.aX9(new A.d1("local_clockin_manual_"+q+"_"+s,j.a,0,B.fz,B.fa,"Clock-in session started (local)",null,null,B.cj,r),!1)
t.lL("Clock-in started. Keep Growth Income open for today.")
case 1:return A.h(u,v)}})
return A.i($async$aaQ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===B.H?B.j_:B.pc
if(l.d==null)return A.ei(B.kk,j,!0)
w=x.o
v=A.U(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=B.a.i(l.a.c.a.toLowerCase())
u=$.fmD
u=u==null?k:u.$0()
u=J.aV(u==null?B.i_:u)
while(u.C()){t=u.gU(u)
q=t.a
if(q.length===0||v.aj(0,q)||A.rx(t))continue
if(B.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(A.dr(o.toLowerCase(),"clock-in",0))continue
v.n(0,q,t)}w=A.B(new A.bc(v,v.$ti.k("bc<2>")),w)
v=l.e
B.d.v(w,new A.a1(v,new C.e5A(),A.T(v).k("a1<1>")))
B.d.b1(w,new C.e5B())
v=l.d
v.toString
u=C.hIw(l.a.c)
t=l.d
t.toString
t=A.ei(new C.akq(t,l.a.e,l.z,l.gc5d(),l.aRd(),D.fvi),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=A.ei(new C.azB(l.aRd(),q,n,o,w,new C.e5C(l),l.gc7i(),new C.e5D(l),D.fvj),j,!0)
m=A.aI(d,k,x.w).w
n=l.y
return new A.V7(n,new C.e5E(l),A.aF(!1,B.a1,!0,k,new A.a5(1/0,m.a.b,new A.an(B.W,k,B.a9,B.q,A.a([A.bY(0,A.ei(k,j,!0),0,0,0),A.bY(0,A.bq(!1,[new C.azA(v,u,w,l.gbXw(),new C.e5F(l),new C.e5G(l),new C.e5H(d),l.gc88(),l.gc84(),D.fvh),t,o][n],!0,!1,B.ah,!0,!0),0,0,0),A.ao(0,l.bzo(),k,k,0,0,k,k)],x.p),k),k),B.f,j,0,k,k,k,k,k,B.ae),k)},
aRd(){var w=null,v=A.a([D.eG.j(0.24),B.M.j(0.72)],x.O)
return A.hn(A.aK(!1,w,!0,A.p(B.A,D.bJh,B.f,w,w,new A.o(w,w,A.I(D.eG.j(0.38),B.r,1),w,A.a([new A.ac(0,B.G,D.eG.j(0.18),B.J,16)],x.V),new A.a6(B.ax,B.aC,B.x,v,w,w),B.a6),w,40,w,w,w,w,w,40),B.cL,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e55(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bzo(){var w=null,v=A.m(27),u=A.I(B.av.j(0.45),B.r,1),t=A.a([new A.ac(0,B.G,B.w.j(0.5),B.eQ,24),new A.ac(-2,B.G,B.av.j(0.12),B.J,18)],x.V)
return new A.C(B.L4,A.bq(!0,A.av(new A.cW(D.aVC,A.p(w,A.cm(new C.e53(this)),B.f,w,w,new A.o(w,w,u,v,t,D.bMc,B.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,B.ah,!0,!1),w)},
bZa(d){var w=null,v=this.y===d,u=D.cP6[d],t=u.b,s=u.a,r=""+d,q=x.W
return A.D(A.dq(w,!0,w,A.aE(B.c5,A.rc(A.pZ(v?A.V(s,D.aac,new A.cz("on"+r,q),w,w,21):A.v(A.a([A.V(s,B.c.j(0.62),w,w,w,19),B.bB,A.d(t,w,1,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,new A.cz("off"+r,q),B.b9,B.j,0,B.p),B.iq,A.rt(),B.bc,B.bc,A.a0q())),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e5b(this,d),w,w,w,w,w,w,!1,B.aa),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,B.c1,w),1)}}
C.azA.prototype={
bWm(d){return C.fK3(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.M(d)
w=B.c.j(0.58)
v=f.e
u=A.T(v).k("a1<1>")
u=A.oX(new A.a1(v,new C.dex(),u),3,u.k("G.E"))
t=A.B(u,A.a2(u).k("G.E"))
v=f.c
s=v.x
r=new A.Q(Date.now(),0,!1)
q=v.f
p=C.a6r(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.h_d(r)
m=v.gBE()
l=A.a([D.eG.j(0.24),B.M.j(0.72)],x.O)
k=A.I(D.eG.j(0.38),B.r,1)
j=x.V
i=A.a([new A.ac(0,B.G,D.eG.j(0.18),B.J,16)],j)
l=A.aK(!1,e,!0,A.p(B.A,A.V(B.hW,D.eG,e,e,e,19),B.f,e,e,new A.o(e,e,k,e,i,new A.a6(B.ax,B.aC,B.x,l,e,e),B.a6),e,38,e,e,e,e,e,38),B.cL,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=A.m(14)
k=A.m(14)
j=A.a([new A.ac(0,B.G,B.b2.j(0.45),B.cI,16)],j)
h=A.m(12)
g=x.p
j=A.bLz(!1,l,"GROWTH INCOME",A.aK(!1,i,!0,new A.a5(44,44,new A.an(B.W,e,B.a9,B.f,A.a([A.p(B.A,A.p(B.A,D.bBZ,B.f,e,e,new A.o(B.im.j(0.78),e,e,h,e,e,B.n),e,36,e,e,e,e,e,36),B.f,e,e,new A.o(e,e,e,k,j,D.bND,B.n),e,42,e,e,e,e,e,42),A.ao(e,A.p(B.A,D.bIn,B.f,e,e,new A.o(B.cr,e,A.I(D.acn,B.r,2),e,e,e,B.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.h1O(B.hd,new C.dey(),k)
k=A.A(A.a([A.D(C.h1N(new C.dez(f,B.qg,n),new A.Q(Date.now(),0,!1),h,k),1),B.nS,A.D(new A.u6(new C.deA(f,B.qg),e,new A.h2(A.a([$.yb(),$.a1u()],x.U)),e),1)],g),B.m,e,B.e,B.j,0,e,e)
h=f.bZl(B.qg,D.eG)
v=A.D(f.cpH("Total Profit","$"+A.dy(v.e),B.qg),1)
u=u?e:s.b
return A.ei(A.ci(A.v(A.a([j,B.S,k,B.ac,new C.azz(f.d,m,q,p,n,o,D.eG,f.gbWl(),f.f,e),B.ac,h,B.S,A.A(A.a([v,B.nS,A.D(f.b2m("Total Investment","$"+A.dy(u==null?0:u),B.qg,f.r),1)],g),B.m,e,B.e,B.j,0,e,e),B.S,f.bWi(d,t,D.eG,w)],g),B.aj,e,B.e,B.j,0,B.p),B.q,e,B.y,e,B.Xi,e,e,B.ai),D.acn,!0)},
auX(d,e,f,g,h){var w=null,v=A.m(h),u=A.I(B.c.j(0.09),B.r,1),t=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dp,18)],x.V)
return A.p(w,A.bv(A.m(h-1),new A.an(B.W,w,B.a9,B.q,A.a([A.bY(0,A.bX(w,new A.o(w,w,w,w,w,new A.bS(f,1.15,B.x,w,0,A.a([e.j(0.22),e.j(0)],x.O),w,w),B.n),B.be),0,0,0),new A.C(g,d,w)],x.p),w),B.ap),B.f,w,w,new A.o(w,w,u,v,t,D.bMC,B.n),w,w,w,w,w,w,w,w)},
aWb(d,e,f,g){return this.auX(d,e,f,B.ah,g)},
b4b(d,e,f,g,h,i,j){var w=null,v=A.ao(-14,A.V(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=A.m(30),s=A.I(f.j(0.4),B.r,1),r=x.p,q=this.aWb(new A.a5(w,80,new A.an(B.W,w,B.a9,B.q,A.a([v,new A.C(D.bm4,A.v(A.a([A.p(w,A.A(A.a([A.V(e,f,w,w,w,15),B.ea,A.d(h.toUpperCase(),w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.agm,w,w,w),B.b8,A.f4(B.a3,A.d(i,w,1,w,w,w,w,A.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,B.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.ef)],r),B.F,w,B.e,B.j,0,B.p),w)],r),w),w),f,B.kV,22)
if(g==null)return q
return A.aK(!1,A.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
bZl(d,e){var w,v,u,t,s=null,r=A.I(e.j(0.55),B.r,2),q=e.j(0.12),p=x.p,o=A.a([],p)
for(w=0;w<3;++w){v=new A.aX(3,3)
o.push(A.p(s,s,B.f,s,s,new A.o(e,s,s,new A.bt(v,v,v,v),s,s,B.n),s,D.cAM[w],s,D.bpz,s,s,s,5))}r=A.p(s,A.A(o,B.dG,s,B.b9,B.j,0,s,s),B.f,s,s,new A.o(q,s,r,s,s,s,B.a6),s,42,s,s,s,s,s,42)
q=A.D(A.v(A.a([D.fdZ,B.bB,A.A(A.a([A.p(s,s,B.f,s,s,new A.o(e,s,s,s,A.a([new A.ac(0,B.G,e,B.J,6)],x.V),s,B.a6),s,7,s,s,s,s,s,7),B.bp,new A.dl(1,B.ch,A.d("Live \xb7 real-time statistics",s,1,B.a2,s,s,s,A.l(s,s,B.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),B.m,s,B.e,B.j,0,s,s)],p),B.F,s,B.e,B.j,0,B.p),1)
o=A.m(16)
v=A.m(16)
u=B.w.j(0.3)
t=A.I(e.j(0.45),B.r,1.2)
return this.auX(A.A(A.a([r,D.eDc,q,B.ab,A.aK(!1,o,!0,A.p(s,A.v(A.a([A.V(B.oo,e.j(0.95),s,s,s,21),B.u5,A.d("PLAY",s,s,s,s,s,s,A.l(s,s,B.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,B.I,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),B.m,s,B.b9,B.j,0,B.p),B.f,s,s,new A.o(u,s,t,v,s,s,B.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),B.m,s,B.e,B.j,0,s,s),e,B.a3,B.WP,26)},
b2m(d,e,f,g){var w,v=null,u=B.a.t(d.toLowerCase(),"profit"),t=u?B.cr:B.aV,s=A.p(v,v,B.f,v,v,new A.o(t,v,v,D.aTT,v,v,B.n),v,v,v,B.mN,v,v,v,5),r=x.p
r=A.a([s,B.bd,A.D(A.v(A.a([A.A(A.a([A.V(u?B.ts:B.xD,t,v,v,v,14),B.ea,new A.dl(1,B.ch,A.d(d,v,1,B.a2,v,v,v,A.l(v,v,B.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),B.m,v,B.e,B.j,0,v,v),B.ao,A.f4(B.a3,A.d(e,v,1,v,v,v,v,D.eM6,v,v,v),B.f,B.ef)],r),B.F,v,B.b9,B.j,0,B.p),1)],r)
s=g==null
if(!s)r.push(new A.C(B.aeE,A.V(B.ed,B.c.j(0.35),v,v,v,v),v))
w=this.aWb(new A.a5(v,66,A.A(r,B.m,v,B.e,B.j,0,v,v),v),t,B.lk,20)
if(s)return w
return A.aK(!1,A.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cpH(d,e,f){return this.b2m(d,e,f,null)},
bWi(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.p(m,m,B.f,m,m,new A.o(f,m,m,m,A.a([new A.ac(0,B.G,f,B.J,8)],x.V),m,B.a6),m,9,m,m,m,m,m,9),k=A.d("LIVE ACTIVITY",m,m,m,m,m,m,A.l(m,m,B.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,B.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=B.c.j(0.07),i=A.m(20),h=x.p
i=A.a([A.A(A.a([l,B.a5i,k,B.b8,A.p(m,A.d(""+e.length,m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.f,m,m,new A.o(j,m,m,i,m,m,B.n),m,m,m,m,B.Xw,m,m,m)],h),B.m,m,B.e,B.j,0,m,m),B.P],h)
if(e.length===0)i.push(new A.C(B.WG,A.v(A.a([A.V(B.h3,g,m,m,m,30),B.ao,A.d("Nothing yet",m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.bB,A.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),B.L,m,m)],h),B.m,m,B.e,B.j,0,B.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=A.a([],h)
if(w>0)k.push(new A.m5(1,m,m,m,m,B.c.j(0.07),m))
j=e[w]
v=j.d
u=v===B.eJ||v===B.jA
t=u?B.ji:D.eG
g=B.c.j(0.5)
v=new A.aX(12,12)
s=A.a([t.j(0.28),t.j(0.08)],l)
r=new A.aA(t.j(0.35),1,B.r,-1)
v=A.p(B.A,A.V(u?B.ts:B.va,t,m,m,m,18),B.f,m,m,new A.o(m,m,new A.bU(r,r,r,r),new A.bt(v,v,v,v),m,new A.a6(B.ax,B.aC,B.x,s,m,m),B.n),m,38,m,m,m,m,m,38)
s=C.hQC(j)
q=C.h3t(j.y)
s=A.v(A.a([new A.x(s,m,B.n6,m,m,m,m,B.a2,m,1,m,m),B.bB,new A.x(q,m,new A.F(!0,g,m,m,m,m,11,B.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.F,m,B.e,B.j,0,B.p)
q=t.j(0.14)
p=new A.aX(20,20)
o=u?"-":"+"
n=A.dy(j.c)
q=A.p(m,new A.x(o+"$"+n,m,new A.F(!0,t,m,m,m,m,13,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),B.f,m,m,new A.o(q,m,m,new A.bt(p,p,p,p),m,m,B.n),m,m,m,m,B.nB,m,m,m)
j=C.hav(j)
k.push(new A.C(F.KW,new A.cs(B.aX,B.e,B.j,B.m,m,B.p,m,0,A.a([v,B.bd,new A.bG(1,B.bn,s,m),A.v(A.a([q,B.d_,new A.x(j,m,new A.F(!0,g,m,m,m,m,10,B.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.dG,m,B.e,B.j,0,B.p)],h),m),m))
B.d.v(i,k)}return this.auX(A.v(i,B.m,m,B.e,B.j,0,B.p),f,B.b1,D.bmc,26)}}
C.azz.prototype={
T(){return new C.bfk(null,null)},
cJ7(d){return this.z.$1(d)},
cKk(){return this.Q.$0()}}
C.bfk.prototype={
a_(){var w,v=this,u=null
v.a1()
w=A.bj(u,B.pk,u,1,u,v)
w.cF(0)
v.d!==$&&A.aQ()
v.d=w
w=A.bj(u,D.bjQ,u,1,u,v)
w.cF(0)
v.e!==$&&A.aQ()
v.e=w
w=A.bj(u,B.uG,u,1,u,v)
v.f!==$&&A.aQ()
v.f=w
v.b3i()},
gb5U(){var w=new A.Q(Date.now(),0,!1)
if(A.ml(w)===6||A.ml(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
b3i(){var w=this,v=w.a,u=v.e||v.f||w.gb5U()
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
this.b3i()},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
w.bqC()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gb5U()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=B.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?B.av:g.x
g=g.r?new C.deq(i):h
v=A.m(32)
s=A.m(32)
r=f?D.d3B:D.d3z
q=A.I((f?D.o4:B.b4).j(0.28),B.r,1.4)
p=x.V
o=A.a([new A.ac(0,B.G,(f?B.av:B.ba).j(0.16),B.fG,28)],p)
n=x.p
m=A.a([],n)
if(f)B.d.v(m,A.a([A.ao(h,i.a9p(D.o4,130),h,h,h,-24,-30,h),A.ao(-36,i.a9p(B.av,140),h,h,-28,h,h,h)],n))
else B.d.v(m,A.a([A.ao(h,i.a9p(B.ba,120),h,h,h,-30,-36,h),A.ao(-40,i.a9p(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bY(0,A.e2(A.bv(l,new A.eq(A.c6(k,new C.der(i),h),h),B.ap),!0,h),0,0,0))}if(f){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bY(0,A.e2(A.bv(l,new A.eq(A.c6(k,new C.des(i),h),h),B.ap),!0,h),0,0,0))}l=A.m(999)
k=B.c.j(0.06)
j=A.I(B.c.j(0.16),B.r,1)
m.push(A.ao(h,new A.cW(D.aVI,A.p(h,A.A(A.a([A.p(h,h,B.f,h,h,new A.o(t,h,h,h,A.a([new A.ac(0,B.G,t.j(0.5),B.J,8)],p),h,B.a6),h,8,h,h,h,h,h,8),B.ab,new A.dl(1,B.ch,A.d(u,h,1,B.a2,h,h,h,D.eRl,h,h,h),h)],n),B.m,h,B.e,B.Q,0,h,h),B.f,h,h,new A.o(k,h,j,l,h,h,B.n),h,h,h,h,B.h2,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.h1O(B.hd,new C.det(),l)
m.push(C.h1N(new C.deu(i,f,t,e,w),new A.Q(Date.now(),0,!1),j,l))
return A.aK(!1,v,!0,A.dh(h,new A.an(B.W,h,B.a9,B.f,m,h),h,h,B.bc,new A.o(h,h,q,s,o,new A.a6(B.ax,B.aC,B.x,r,h,h),B.n),B.A8,h,392,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
a9p(d,e){var w=null
return A.e2(A.p(w,w,B.f,w,w,new A.o(w,w,w,w,w,new A.bS(B.A,0.5,B.x,w,0,A.a([d.j(0.22),d.j(0)],x.O),w,w),B.a6),w,e,w,w,w,w,w,e),!0,w)}}
C.b96.prototype={
aWe(d,e,f,g){var w=new A.aP($.W().r,B.aq,null,null,A.a([],x.g)),v=e.a,u=e.b,t=u-f
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
q=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
q.r=B.c.j(0.1+r*0.5).gp(0)
a7.aWe(b2,new A.u(t*a8,s*b0),2+r*2.2,q)}for(a8=b2.a,b0=w*2,p=a7.e,o=0;o<3;++o){n=B.k.F(b0+o/3,1)
$.W()
m=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
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
d=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
d.r=b0.j(f).gp(0)
l=d.H()
a8.drawCircle(0,0,6.5,l)
l.delete()
h=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
h.b=B.af
h.c=1.2
h.r=p.j(f).gp(0)
l=h.H()
a8.drawCircle(0,0,6.5,l)
l.delete()
if(e>0.6&&f>0.35){h=$.hg2()
g=h.b
a0=g.c
g=g.a.c
h.a6(b2,new A.u(-a0/2,-g.gbc(g)/2))}a8.restore()
break
case 1:$.W()
a0=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
a0.r=p.j(f*0.95).gp(0)
a7.aWe(b2,new A.u(h,g),3+f*3,a0)
break
case 2:$.W()
a0=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
a0.r=B.c.j(f*0.8).gp(0)
l=a0.H()
a8.drawCircle(h,g,1.6+f*1.8,l)
l.delete()
break
default:a0=Math.cos(j)
a1=Math.sin(j)
a2=7+f*7
$.W()
a3=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
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
g=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
g.r=p.j(o*0.85).gp(0)
l=g.H()
a8.drawCircle(a9+w*144,b1+h*144,1.4+o*2.6,l)
l.delete()}w=Math.cos(a5)
h=Math.sin(a5)
$.W()
g=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
g.r=b0.j(0.28).gp(0)
g.z=N.mj
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
a3.sau(new A.a6(B.a3,B.a7,B.x,A.a([B.c.j(0),B.c.j(0.07),B.c.j(0)],x.O),e,e).aw(0,D.ex7))
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
a3=A.by(D.exE,B.Rb)
u=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
u.r=D.avy[B.o.F(s,6)].j(k*0.9).gp(0)
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
f=D.avy[B.o.F(s+i,6)].j(k)
u=j[i]
t=u.a
u=u.b
$.W()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
q.c=2
q.d=B.bO
q.r=f.gp(0)
n=q.H()
w.drawLine.apply(w,[t+a3*a1,u+v*a1,t+a3*g,u+v*g,n])
n.delete()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
q.r=f.gp(0)
n=q.H()
w.drawCircle(t+a3*a2,u+v*a2,1.6,n)
n.delete()}a1=j[i]
$.W()
a2=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
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
p.E(new A.kC(A.bT(a2,a4)))
a5.tG(0,p)
p=A.bT(a2,a4)
o=A.L()
o.sau(D.e3Z.aw(0,A.bT(a2,a4)))
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
a1=v?A.a([e.f.j(0.55),w.j(0.78),e.r.j(0.92)],a1):A.a([w.j(0.22),D.eG.j(0.34),B.cY.j(0.62)],a1)
a0.sau(new A.a6(B.b1,B.b3,B.x,a1,d,d).aw(0,A.bT(a2,a4)))
a5.aN(h,a0)
a0=A.L()
a0.b=B.af
a0.c=2
a0.r=B.c.j(v?0.28:0.14).gp(0)
a5.aN(h,a0)}s.restore()},
ar(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.azB.prototype={
T(){var w=$.aw()
return new C.azC(new A.aq(B.as,w),new A.aq(B.as,w))},
bcT(d,e){return this.w.$2$cloudRequest(d,e)}}
C.azC.prototype={
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
lL(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
crp(d){this.a.bcT(d,!0)
this.lL("Deposit submitted. Admin will review your payment proof.")
this.m(new C.deR())},
cqa(){var w,v,u=this,t=A.d3(u.d.a.a)
if(t==null||t<=0){u.lL("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
A.ht(w,new C.ao2(v.d,t,u.gcro(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cxA(){var w,v,u,t,s=this,r=s.d,q=A.d3(r.a.a)
if(q==null||q<=0){s.lL("Enter an amount to withdraw.")
return}if(q<10){s.lL("Minimum withdrawal is $"+A.dy(10)+".")
return}w=s.a.d.d
if(q>w){s.lL("Insufficient balance. You have $"+A.dy(w)+".")
return}w=s.e
v=C.hbT(w.a.a)
if(v.length===0){s.lL("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.bcT(new A.d1("wd_"+1000*Date.now(),s.a.d.a,q,B.eJ,B.kh,"Withdrawal to $"+v+" \u2014 Fee: $"+A.dy(u)+" \u2014 You receive: $"+A.dy(q-u),null,null,B.dr,new A.Q(Date.now(),0,!1)),!0)
s.lL("Withdrawal submitted \u2014 waiting for admin approval.")
r.bM(0,B.c3)
w.bM(0,B.c3)
s.m(new C.deS())},
cuD(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,A.K)(w),++s){r=w[s]
if(r.x!==B.cj||!this.aT_(r)||A.fRr(r))continue
q=r.d
p=q===B.eJ||q===B.jA||q===B.eo
q=r.c
if(p)t+=q
else u+=q}return new A.bmc(u,t)},
B(d){var w,v,u,t=this,s=null,r=t.cuD(),q=t.a.r,p=new A.a1(q,new C.deT(),A.T(q).k("a1<1>")).gM(0)
q=t.a
w=q.c
q=q.x
v=A.a([D.eG.j(0.24),B.M.j(0.72)],x.O)
u=A.I(D.eG.j(0.38),B.r,1)
q=A.bLz(!1,w,"WALLET",A.hn(A.aK(!1,s,!0,A.p(B.A,A.V(U.ajt,D.eG,s,s,s,18),B.f,s,s,new A.o(s,s,u,s,s,new A.a6(B.ax,B.aC,B.x,v,s,s),B.a6),s,40,s,s,s,s,s,40),B.cL,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),s,"Back up wallet",s,s))
v=t.by1(r.a,r.b,p)
u=x.p
w=A.A(A.a([t.ao1(B.va,"Deposit",0),t.ao1(B.ts,"Withdraw",1),t.ao1(B.h4,"History",2)],u),B.m,s,B.pE,B.j,0,s,s)
return A.ei(A.bq(!1,A.ci(A.v(A.a([q,B.bu,v,B.d5,w,B.d5,A.pZ(t.f===2?t.bTt():t.bYP(),B.i6,A.rt(),B.bc,B.bc,A.a0q())],u),B.aj,s,B.e,B.j,0,B.p),B.q,s,B.y,s,D.bo4,s,s,B.ai),!0,!1,B.ah,!0,!0),B.zH,!0)},
by1(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.a.i(i.a.e)
if(B.a.t(g,"@")){w=B.a.cG(g,"@")
v=B.a.ap(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+B.a.b_(g,w)}else v=g
w=A.m(26)
u=A.ao(h,i.ax5(220,0.1),h,h,h,-60,-70,h)
t=A.ao(-90,i.ax5(200,0.07),h,h,h,30,h,h)
s=A.ao(-60,i.ax5(150,0.05),h,h,-40,h,h,h)
r=A.m(26)
r=A.bY(0,A.bX(h,new A.o(h,h,A.I(B.c.j(0.18),B.r,1),r,h,h,B.n),B.be),0,0,0)
q=A.m(6)
p=x.p
q=A.A(A.a([A.p(h,A.b3(h,h,h,new C.b8x(h),B.at),B.f,h,h,new A.o(h,h,h,q,h,D.bOG,B.n),h,28,h,h,h,h,h,38),B.b8,D.flW],p),B.m,h,B.e,B.j,0,h,h)
o=A.d("Available balance",h,h,h,h,h,h,A.l(h,h,B.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,B.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=A.f4(B.a3,C.aoM(new C.deD(i),D.eWu,i.a.d.a),B.f,B.ef)
m=A.a([A.D(i.aLV(B.v_,"In",d),1),A.D(i.aLV(B.xm,"Out",e),1)],p)
if(f>0){l=B.cR.j(0.22)
k=A.m(99)
j=A.I(B.iy.j(0.6),B.r,1)
m.push(A.p(h,A.d(""+f+" pending",h,h,h,h,h,h,D.eSh,h,h,h),B.f,h,h,new A.o(l,h,j,k,h,h,B.n),h,h,h,h,B.nB,h,h,h))}return new A.fF(1.62,A.bv(w,new A.an(B.W,h,B.a9,B.q,A.a([D.e3e,u,t,s,r,new A.C(A4.qz,A.v(A.a([q,B.b8,o,B.bB,n,B.b8,A.A(m,B.m,h,B.e,B.j,0,h,h),B.ao,A.d(v,h,1,B.a2,h,h,h,A.l(h,h,B.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,B.a4,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),B.F,h,B.e,B.j,0,B.p),h)],p),h),B.ap),h)},
ax5(d,e){var w=null
return A.p(w,w,B.f,w,w,new A.o(w,w,A.I(B.c.j(e),B.r,22),w,w,w,B.a6),w,d,w,w,w,w,w,d)},
aLV(d,e,f){var w=null,v=B.c.j(0.16)
return A.A(A.a([A.p(w,A.V(d,B.c,w,w,w,13),B.f,w,w,new A.o(v,w,w,w,w,w,B.a6),w,22,w,w,w,w,w,22),B.bp,new A.dl(1,B.ch,A.f4(B.a3,A.d(e+"  $"+A.dy(f),w,w,w,w,w,w,B.ri,w,w,w),B.f,B.ef),w)],x.p),B.m,w,B.e,B.j,0,w,w)},
ao1(d,e,f){var w=null,v=this.f===f,u=v?D.bPY:new A.a6(B.a3,B.a7,B.x,A.a([B.c.j(0.08),B.c.j(0.03)],x.O),w,w),t=A.I(v?B.c.j(0.6):D.eG.j(0.25),B.r,1),s=v?A.a([new A.ac(0,B.G,B.av.j(0.45),B.J,18)],x.V):w
u=A.dh(w,A.V(d,v?D.aac:D.eG,w,w,w,26),w,w,B.cp,new A.o(w,w,t,w,s,u,B.a6),B.Ei,w,62,w,w,w,w,62)
return A.aE(B.c5,new A.a5(92,w,A.v(A.a([u,D.eE6,A.d(e,w,w,w,w,w,w,A.l(w,w,v?B.c:B.aQ,w,w,w,w,w,w,w,w,12.5,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.deC(this,f),w,w,w,w,w,w,!1,B.aa)},
bYP(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=A.d3(a1.a.a)
if(a2==null)a2=0
w=a0?D.eG:B.cx
v=a2>0
u=new C.deO(e,w)
t=new C.deN()
s=e.f
r=A.m(26)
q=x.O
p=A.a([w.j(0.1),B.rY,B.rY],q)
o=A.I(w.j(0.22),B.r,1)
n=x.V
m=A.a([new A.ac(0,B.G,B.w.j(0.35),B.eQ,22)],n)
l=w.j(0.15)
l=A.p(d,A.V(a0?B.va:B.ts,w,d,d,d,18),B.f,d,d,new A.o(l,d,d,d,d,d,B.a6),d,34,d,d,d,d,d,34)
k=A.D(A.d(a0?"Add money":"Take money out",d,d,d,d,d,d,B.fT,d,d,d),1)
j=B.c.j(0.06)
i=A.m(99)
h=x.p
i=A.A(A.a([l,B.aw,k,A.p(d,A.A(A.a([A.V(B.hW,w,d,d,d,14),A.d("Cash App",d,d,d,d,d,d,A.l(d,d,B.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,B.I,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),B.m,d,B.e,B.Q,0,d,d),B.f,d,d,new A.o(j,d,d,i,d,d,B.n),d,d,d,d,B.kC,d,d,d)],h),B.m,d,B.e,B.j,0,d,d)
l=A.d("$",d,d,d,d,d,d,A.l(d,d,v?w:B.bZ,d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=A.a([new A.tX(A.af("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=A.A(A.a([new A.C(B.it,l,d),B.d9,A.aUh(new A.cW(D.aW0,A.aL(d,B.T,!1,d,!0,B.q,d,A.aM(),a1,w,d,d,d,d,2,A.bo(d,B.ev,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,A.l(d,d,B.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.ag,d,d,k,d,d,B.dR,d,d,d,1,d,d,!1,"\u2022",d,new C.deM(e),d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,D.eZ6,!0,B.L,d,B.am,d,d,d,d),d),d)],h),B.F,d,B.b9,B.j,0,d,d)
a1=v?120:60
a1=A.av(A.dh(d,d,d,d,B.bc,new A.o(d,d,d,A.m(99),d,new A.a6(B.a3,B.a7,B.x,A.a([w.j(0),w,w.j(0)],q),d,d),B.n),B.a1,d,3,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+A.dy(10)+" \xb7 admin sends it to your Cash App."
q=A.d(q,d,d,d,d,d,d,A.l(d,d,B.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,B.a4,d,1.35,!0,d,d,d,d,d,d,d,d),B.L,d,d)
l=A.a([],h)
j=a0?D.bTG:D.c7h
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=A.a([i,B.bu,k,B.ao,a1,B.P,q,B.ay,A.A(l,B.m,d,B.e,B.j,0,d,d)],h)
if(!a0){q=B.c.j(0.04)
l=A.V(B.hW,w,d,d,d,d)
k=A.l(d,d,B.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,B.O,d,d,!0,d,d,d,d,d,d,d,d)
l=A.a([B.ay,A.aL(d,B.T,!1,d,!0,B.q,d,A.aM(),e.e,d,d,d,d,d,2,A.bo(d,d,d,d,d,d,d,d,!0,new A.b4(4,A.m(16),new A.aA(B.c.j(0.08),1,B.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new A.b4(4,A.m(16),new A.aA(w,1,B.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.ag,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,B.n5,!0,B.a5,d,B.am,d,d,d,d)],h)
if(v){q=B.c.j(0.04)
k=A.m(16)
B.d.v(l,A.a([B.ac,A.p(d,A.v(A.a([t.$2("Amount","$"+A.dy(a2)),t.$3$color("Fee (15%)","\u2212 $"+A.dy(a2*0.15),B.f9),A.iw(B.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+A.dy(a2*0.85),!0,D.eG)],h),B.m,d,B.e,B.j,0,B.p),B.f,d,d,new A.o(q,d,d,k,d,d,B.n),d,d,d,d,B.j4,d,d,d)],h))}B.d.v(a1,l)}a1.push(B.aO)
q=A.m(18)
l=a0?B.Pu:P.aqi
n=A.a([new A.ac(0,B.G,(a0?B.aZ:B.dW).j(0.45),B.dp,18)],n)
k=a0?e.gcq9():e.gcxz()
j=A.V(a0?B.M1:B.l7,d,d,d,d,20)
if(a0)i=v?"Deposit $"+A.dy(a2):"Deposit funds"
else i=v?"Withdraw $"+A.dy(a2):"Request withdrawal"
a1.push(new A.a5(d,54,A.bX(A.lk(j,A.d(i,d,d,d,d,d,d,B.oO,d,d,d),k,A.fl(d,d,B.K,d,d,d,d,d,d,B.c,d,d,d,B.K,new A.b7(A.m(18),B.Z),d,d,d,d,d)),new A.o(d,d,d,q,n,new A.a6(B.a3,B.a7,B.x,l,d,d),B.n),B.be),d))
return A.p(d,A.v(a1,B.aj,d,B.e,B.j,0,B.p),B.f,d,d,new A.o(d,d,o,r,m,new A.a6(B.b1,B.b3,B.x,p,B.P1,d),B.n),d,d,new A.cz("form"+s,x.W),d,B.x1,d,d,d)},
bTt(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=A.T(a2).k("a1<1>"),a4=A.B(new A.a1(a2,new C.deG(a0),a3),a3.k("G.E"))
B.d.b1(a4,new C.deH())
w=B.a.i(a0.a.e.toLowerCase())
a2=A.U(x.N,x.o)
a3=$.fmD
a3=a3==null?a1:a3.$0()
a3=J.aV(a3==null?B.i_:a3)
while(a3.C()){v=a3.gU(a3)
u=v.a
if(u.length!==0&&B.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,A.K)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("bc<2>")
a2=A.B(new A.bc(a2,a3),a3.k("G.E"))
r=C.hRa(a2,A.Kb(a0.a.e,new C.deI(a0)))
a2=A.m(24)
a3=A.I(B.c.j(0.07),B.r,1)
v=A.m(99)
u=A.m(99)
q=x.p
u=A.a([A.A(A.a([D.bsF,A.aK(!1,v,!0,A.p(a1,D.eyo,B.f,a1,a1,new A.o(a1,a1,A.I(D.eG.j(0.4),B.r,1),u,a1,a1,B.n),a1,a1,a1,a1,B.m3,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.deJ(a0),a1,a1,a1,a1,a1,a1,a1)],q),B.m,a1,B.e,B.j,0,a1,a1),B.S],q)
if(a4.length===0)u.push(new A.C(D.bkM,A.v(A.a([A.V(B.EU,B.c.j(0.25),a1,a1,a1,40),B.S,D.fiJ],q),B.m,a1,B.e,B.j,0,B.p),a1))
else{v=A.a([],q)
for(p=A.d9(a4,0,A.dJ(a0.r,"count",x.S),A.T(a4).c),o=p.$ti,p=new A.bW(p,p.gM(0),o.k("bW<aj.E>")),o=o.k("aj.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===B.eJ||k===B.jA||k===B.eo
if(l===B.cj)i=j?B.cq:D.eG
else i=l===B.dr?B.iy:B.fS
h=j?"-":"+"
l=B.c.j(0.06)
k=i.j(0.14)
g=new A.aA(i.j(0.4),1,B.r,-1)
k=A.p(a1,A.V(j?B.ts:B.va,i,a1,a1,a1,19),B.f,a1,a1,new A.o(k,a1,new A.bU(g,g,g,g),a1,a1,a1,B.a6),a1,42,a1,a1,a1,a1,a1,42)
f=a0.bNo(n)
e=C.h3t(n.y)
d=B.c.j(0.5)
f=A.a([new A.x(f,a1,B.jX,a1,a1,a1,a1,a1,a1,a1,a1,a1),B.bB,new A.x(e,a1,new A.F(!0,d,a1,a1,a1,a1,11,B.a4,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1)],q)
e=n.f
if(B.a.i(e==null?"":e).length!==0){e.toString
d=B.c.j(0.4)
f.push(new A.x(e,a1,new A.F(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,B.a2,a1,1,a1,a1))}if(m!=null&&n.x!==B.jY)f.push(new A.C(E.aeO,new A.EO(B.bG,5,4,B.bx,A.a([a0.aKR("Before",m.b),a0.aKR("After",m.a)],q),a1),a1))
m=A.v(f,B.F,a1,B.e,B.j,0,B.p)
f=n.c
f=f===0?"\u2014":h+"$"+A.dy(f)
e=i.j(0.14)
d=new A.aX(99,99)
n=C.hav(n)
v.push(A.p(a1,new A.cs(B.aX,B.e,B.j,B.m,a1,B.p,a1,0,A.a([k,B.bd,new A.bG(1,B.bn,m,a1),B.ab,A.v(A.a([new A.x(f,a1,new A.F(!0,i,a1,a1,a1,a1,15,B.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.au,A.p(a1,new A.x(n,a1,new A.F(!0,i,a1,a1,a1,a1,9.5,B.I,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.f,a1,a1,new A.o(e,a1,a1,new A.bt(d,d,d,d),a1,a1,B.n),a1,a1,a1,a1,B.Au,a1,a1,a1)],q),B.dG,a1,B.e,B.j,0,B.p)],q),a1),B.f,a1,a1,new A.o(a1,a1,new A.bU(B.Z,B.Z,new A.aA(l,1,B.r,-1),B.Z),a1,a1,a1,B.n),a1,a1,a1,a1,B.uI,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(A.hb(D.bGC,A.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,B.cc,a1,a1,a1),new C.deK(a0),A.fu(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.eG,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
B.d.v(u,v)}return A.p(a1,A.v(u,B.aj,a1,B.e,B.j,0,B.p),B.f,a1,a1,new A.o(B.rY,a1,a3,a2,a1,a1,B.n),a1,a1,D.fvc,a1,D.bmZ,a1,a1,a1)},
aKR(d,e){var w=null,v=B.c.j(0.05),u=A.m(7),t=A.I(B.c.j(0.1),B.r,1),s=A.dn(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=A.dy(e)
return A.p(w,A.WF(A.dn(A.a([s,A.dn(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.eWE,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.nA,w,w,w)},
aT_(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(B.a.t(w,"clock-in session started"))return!1
v=d.d
if(v===B.eo)return d.c>0
if(A.rx(d))return!1
if(v===B.fn||v===B.eJ)return!0
if(v===B.nX||v===B.jA)return!0
if(v===B.jZ)return!0
if(v===B.fz)return B.a.t(w,"clock-in")||d.c>0
return!1},
bNo(d){var w,v=d.f
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
w.r=D.b5d.j(0.55).gp(0)
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
C.bsS.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null
for(w=a4.b,v=this.b,u=v*6.283185307179586,t=a4.a,s=0+t,r=x.O,q=a3.a,p=0;p<3;++p){o=w*(0.2+0.25*p)+Math.sin(u+p*2)*14-40
n=new A.a9(0,o,s,o+80)
m=[B.ba,B.fV,B.bs][p]
$.W()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
o.sau(new A.a6(B.b1,B.b3,B.x,A.a([m.j(0),m.j(0.1),m.j(0)],r),a2,a2).aw(0,n))
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
$.W()
r=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
r.r=B.c.j(0.55*g).gp(0)
l=r.H()
q.drawCircle(j,h,0.7+(i-s)*1.5,l)
l.delete()
if(B.o.F(k,9)===0){f=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
f.r=B.oa.j(0.35*g).gp(0)
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
a0=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
a0.r=B.c.j(0.7*(1-p)).gp(0)
a0.c=1.6
a0.d=B.bO
l=a0.H()
q.drawLine.apply(q,[e+r,d+o,e,d,l])
l.delete()}for(u=t*0.62,w*=0.36,k=0;k<4;++k){f=B.k.F(v+k*0.25,1)
t=B.oa.j(0.5*Math.sin(f*3.141592653589793))
a1=new A.ku(new A.es("z",a2,a2,B.cQ,a2,a2,a2,a2,a2,a2,new A.F(!0,t,a2,a2,a2,a2,12+f*14,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),B.a5,B.ci,new A.jC(1),a2,a2,a2,a2,B.cg,a2)
a1.eR()
a1.a6(a3,new A.u(u+Math.sin(f*6.283185307179586+k)*12+k*8,w-f*90))}},
ar(d){return d.b!==this.b}}
C.aJ3.prototype={
aQ(){this.aY()
this.aW()
this.dF()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdD())
w.b2$=null
w.a2()}}
C.buO.prototype={}
C.aY9.prototype={}
C.Zc.prototype={
T(){return new C.aC_(new A.aq(B.as,$.aw()))},
cLv(d,e){return this.d.$2(d,e)}}
C.aC_.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
aWi(){var w=this,v=B.a.i(w.d.a.a),u=A.af("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.m(new C.e_h(w))
return}u=w.c
u.toString
A.a4(u,!1).N(null)
w.a.cLv(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=A.aI(a0,B.eC,e).w
e=A.aI(a0,B.e6,e).w
w=A.av(A.p(f,f,B.f,f,f,new A.o(B.b7,f,f,A.m(2),f,f,B.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=A.A(A.a([A.p(f,D.bG1,B.f,f,f,new A.o(f,f,f,f,A.a([new A.ac(0,B.G,B.fe.j(0.5),B.J,18)],v),D.am1,B.a6),f,52,f,f,f,f,f,52),B.eA,A.D(A.v(A.a([D.f6X,B.bB,A.d(g.a.c,f,1,B.a2,f,f,f,B.oM,f,f,f)],u),B.F,f,B.e,B.j,0,B.p),1),A.aH(f,f,f,f,D.bGQ,f,f,f,new C.e_k(a0),f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,f,f)
s=g.b25(B.eO,"You",B.cx)
r=B.aM.j(0.15)
q=A.m(99)
q=A.A(A.a([s,new A.C(B.lv,A.p(f,D.faO,B.f,f,f,new A.o(r,f,A.I(B.aM.j(0.6),B.r,1),q,f,f,B.n),f,f,f,f,B.fN,f,f,f),f),g.b25(B.v7,"Your friend",B.bY)],u),B.m,f,B.e,B.j,0,f,f)
r=B.c.j(0.06)
s=A.m(16)
p=B.c.j(0.12)
o=A.m(16)
n=g.f
if(n.length===0)n=f
o=A.aL(f,B.T,!0,f,!0,B.q,f,A.aM(),g.d,f,f,f,f,f,2,A.bo(f,f,f,f,f,f,f,f,!0,new A.b4(4,s,new A.aA(p,1,B.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new A.b4(4,o,D.aUQ),f,f,f,f,f,f,f,f,N.Cz,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.bJc,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,f,!1,f,B.ag,f,f,f,f,f,B.lK,f,f,f,1,f,f,!1,"\u2022",f,new C.e_l(g),f,new C.e_m(g),f,!1,f,f,!1,f,!0,f,B.a8,f,f,f,f,f,f,f,f,f,f,f,B.iC,!0,B.a5,f,B.am,f,f,f,f)
r=A.a([],u)
for(m=0;m<4;++m){l=D.c2l[m]
s=new A.aX(14,14)
p=g.e===l
n=p?D.am0:f
p=p?f:B.c.j(0.06)
k=new A.aA(g.e===l?B.aA:B.bE,1,B.r,-1)
j=""+l
i=l===1?"game":"best of "+j
h=B.c.j(0.7)
s=A.a([new A.bG(1,B.bn,A.aE(f,A.dh(f,A.v(A.a([new A.x(j,f,B.dI,f,f,f,f,f,f,f,f,f),new A.x(i,f,new A.F(!0,h,f,f,f,f,10,B.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,B.p),f,f,B.bc,new A.o(p,f,new A.bU(k,k,k,k),new A.bt(s,s,s,s),f,n,B.n),B.eL,f,f,f,B.f3,f,f,f),B.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.e_n(g,l),f,f,f,f,f,f,!1,B.aa),f)],u)
if(l!==7)s.push(B.ab)
B.d.v(r,s)}s=A.A(r,B.m,f,B.e,B.j,0,f,f)
r=A.A(A.a([A.V(B.l5,B.c.j(0.5),f,f,f,15),B.bp,A.D(A.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,A.l(f,f,B.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),B.m,f,B.e,B.j,0,f,f)
p=A.m(18)
v=A.a([new A.ac(0,B.G,B.bA.j(0.4),B.cw,18)],v)
n=g.e
j=n===1?"":"s"
return new A.C(new A.N(0,0,0,d.f.d+e.r.d),A.p(f,A.v(A.a([w,B.aO,t,B.bu,q,B.bu,D.feu,B.ao,o,B.aO,D.fix,B.P,s,B.ay,r,B.aO,new A.a5(f,54,A.bX(A.hb(D.akj,A.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,B.fT,f,f,f),g.gc2D(),f),new A.o(f,f,f,p,v,D.bOQ,B.n),B.be),f)],u),B.aj,f,B.e,B.Q,0,B.p),B.f,f,f,D.aWM,f,f,f,f,D.boh,f,f,f),f)},
b25(d,e,f){var w=null,v=f.j(0.1),u=A.m(16),t=A.I(f.j(0.45),B.r,1)
return A.D(A.p(w,A.v(A.a([A.V(d,f,w,w,w,24),B.au,A.d(e,w,w,w,w,w,w,B.a6s,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.f3,w,w,w),1)}}
C.oN.prototype={}
C.bnT.prototype={
a6(d,e){var w,v,u,t,s,r=null,q=e.a/2,p=new A.u(q,e.b/2),o=q-4
for(q=d.a,w=0;w<37;++w){$.W()
v=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
if(w===0)u=B.bl
else u=(w&1)===0?B.bL:B.M
v.r=u.gp(0)
u=A.bT(p,o)
t=v.H()
q.drawArc.apply(q,[A.c4(u),(w*2*3.141592653589793/37-1.5707963267948966)*57.29577951308232,9.72972972972973,!0,t])
t.delete()}$.W()
q=A.L()
q.r=B.fk.gp(0)
q.b=B.af
q.c=8
d.ag(p,o,q)
q=A.L()
q.r=B.aM.gp(0)
d.ag(p,o*0.22,q)
q=this.b
if(q!=null){s=A.ih(r,r,r,r,A.dn(r,r,r,r,r,r,r,r,r,B.aNJ,A.t(q)),B.a5,B.ci,r,B.eq,B.cg)
s.eR()
q=s.b
u=q.c
q=q.a.c
s.a6(d,p.aB(0,new A.u(u/2,q.gbc(q)/2)))}},
ar(d){return d.b!=this.b}}
C.DU.prototype={
a4(){return"NgmyProMoveResult."+this.b}}
C.aph.prototype={
gjK(){var w=this.d
w=w==null?null:w.a
return w!==!1},
bkh(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.fJL("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.bUf()
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
s.dx=e.ai()*3.141592653589793*2
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
s.aUS(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aB9.h(0,d)
s.c=w==null?"Play to earn":w}},
b6F(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gjK()
if(o)return
o=x.N
s.x=A.a0(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b6(w,new C.caj(),o)
v=A.B(v,v.$ti.k("aj.E"))
s.at=v
if(v.length<9){v=A.B(v,o)
B.d.v(v,A.c1(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=B.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===B.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cv9(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.aox(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b6(t,new C.cak(),x.L)
o=A.B(o,o.$ti.k("aj.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)B.d.J(v,A.c1(7,0,!1,o))}if(A.iD(e.h(0,q)))o=A.ec(e.h(0,q))
else{o=A.c7(A.t(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bAd(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.aox(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b6(t,new C.cal(),x.L)
o=A.B(o,o.$ti.k("aj.E"))
s.y=o}if(A.iD(e.h(0,p)))o=A.ec(e.h(0,p))
else{o=A.c7(A.t(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bBs(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.aox(e,f)
break}},
cFf(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=A.a0(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",A.bl(w.at,!0,q))
o.n(0,"turnEmail",w.aza())
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
q=A.B(new A.J(q,new C.can(),p),p.k("aj.E"))
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
q=A.B(new A.J(q,new C.cao(),p),p.k("aj.E"))
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
aza(){var w,v,u,t=this
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
aox(d,e){var w,v=this,u=B.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
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
cv9(d,e){var w,v,u,t,s,r="playerXEmail"
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
bAd(d,e){var w,v,u,t,s
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
bBs(d,e){var w,v,u,t,s,r,q
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
Ss(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gjK())return s
w=B.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return B.a.i(J.k(s==null?u.aza():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
bUf(){var w,v,u=this,t=J.e0(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=A.ip(8,new C.cag(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
aUS(d){var w=20+d.aD(80),v=w+10+d.aD(50),u=4+d.aD(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bM(0,B.c3)},
cOW(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gjK())w=1
else{v=r.d
v=v==null?null:v.d
w=r.Ss(q,v==null?"":v)?r.z:-1}if(!r.gjK()){v=r.d
v=v==null?null:v.d
v=!r.Ss(q,v==null?"":v)}else v=!1
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
if(r.a7i(2)){r.a8S(1)
return!0}if(r.a7i(1)){r.a8S(2)
return!0}if(r.gjK()&&r.z===2){r.bwh(f)
if(r.a7i(2)){r.a8S(1)
return!0}if(r.a7i(1)){r.a8S(2)
return!0}}}return!1},
a8S(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
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
bwh(d){var w,v,u,t,s,r,q,p,o,n=this,m=A.a([],x.B)
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
a7i(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)for(t=J.aV(w[u]);t.C();)if(t.gU(t)===d)return!1
return!0},
cOX(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.pH
if(!s.gjK()){w=s.d
w=w!=null&&!s.Ss("tic_tac_go",w.d)}else w=!1
if(w)return D.pH
if(s.gjK())v="X"
else{w=B.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===B.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.ah3(v))return s.aPU(v,!0)
if(!B.d.t(s.at,""))return s.aPV()
s.ax=!s.ax
if(!s.gjK()){s.x.n(0,"turnEmail",s.aza())
s.c=s.aUp()
return D.pH}if(s.gjK()){t=s.cdt(e)
if(t>=0){s.at[t]="O"
if(s.ah3("O"))return s.aPU("O",!1)
if(!B.d.t(s.at,""))return s.aPV()
s.ax=!0}}s.c=s.gjK()?"Your turn \u2014 you are X":s.aUp()
return D.pH},
aUp(){var w=this.d
if(w==null)return"Take your turn"
return this.Ss("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aPU(d,e){var w,v,u=this
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
return e?D.pI:D.GT},
aPV(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.Qq},
cdt(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.ah3("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.ah3("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.cPv[u]
if(v[w].length===0)return w}return-1},
ah3(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.cWx[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a1J(d){return B.d.cI(d,0,new C.cam())},
cza(d){this.ay.push(1+d.aD(10))
if(this.a1J(this.ay)>21)return!0
return!1},
czb(d){var w,v,u,t=this
while(t.a1J(t.ch)<17)t.ch.push(1+d.aD(10))
t.CW=!0
w=t.a1J(t.ay)
v=t.a1J(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cEI(d,e){var w,v,u,t=this
if(t.e)return D.pH
if(!t.gjK()){w=t.d
w=w!=null&&!t.Ss("connect_four_pro",w.d)}else w=!1
if(w)return D.pH
if(t.gjK())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.pH
if(!t.aec(d,w))return D.pH
if(t.a78(t.fx))return t.aPS(t.fx,!0)
if(t.aLF())return t.aPT()
w=t.fx===1?2:1
t.fx=w
if(t.gjK()&&w===2){u=t.ccQ(e)
if(u>=0){t.aec(u,2)
if(t.a78(2))return t.aPS(2,!1)
if(t.aLF())return t.aPT()
t.fx=1}}t.c=t.gjK()?"Your turn \u2014 drop a red disc":t.bAc()
return D.pH},
bAc(){var w=this.d
if(w==null)return"Drop a disc"
return this.Ss("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
aec(d,e){var w
for(w=5;w>=0;--w)if(J.q(this.fr[w],d)===0){J.aG(this.fr[w],d,e)
return!0}return!1},
aLF(){for(var w=0;w<7;++w)if(J.q(this.fr[0],w)===0)return!1
return!0},
aPS(d,e){var w,v,u,t=this
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
return e?D.pI:D.GT},
aPT(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.Qq},
ccQ(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.aec(w,2)
v=r.a78(2)
r.b4n(w)
if(v)return w}for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.aec(w,1)
u=r.a78(1)
r.b4n(w)
if(u)return w}t=A.a([],x.t)
for(w=0;w<7;++w)if(J.q(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aD(s)]},
b4n(d){var w
for(w=0;w<6;++w)if(J.q(this.fr[w],d)!==0){J.aG(this.fr[w],d,0)
return}},
a78(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.q(this.fr[w],v)!==d)continue
if(this.bAe(w,v,d))return!0}return!1},
bAe(d,e,f){var w,v,u,t=new C.caf(this,d,e,f)
for(w=x.t,w=[A.a([0,1],w),A.a([1,0],w),A.a([1,1],w),A.a([1,-1],w)],v=0;v<4;++v){u=w[v]
if(t.$2(u[0],u[1])+t.$2(-u[0],-u[1])-1>=4)return!0}return!1},
b7A(d){var w=this
if(B.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.aUS(d)}return w.a>=w.b}}
C.aqb.prototype={
T(){return new C.aCO(null,null)},
cKo(d){return this.e.$1(d)}}
C.aCO.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bjT,null,1,null,v)
w.f5(0,!0)
v.d=w
v.a.d.aM(0,v.gaWK())
v.avd()},
br(d){var w
this.bE(d)
w=this.a
if(d.c!==w.c){w.d.bM(0,B.c3)
this.avd()}},
avd(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.afZ(t,u)
C.afZ(t,u)
w.a.cKo(s)
w.a.toString
w.m(new C.ewZ())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
q(){var w,v=this
v.a.d.a3(0,v.gaWK())
w=v.d
w===$&&A.c()
w.q()
v.bsb()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.afZ(j,i),g=C.afZ(j,i),f=j.length,e=i.length,d=A.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&A.c()
u=new A.aX(1,1)
d.push(new A.vT(new A.cX(v,!1,A.p(l,l,B.f,l,l,new A.o(B.aM,l,l,new A.bt(u,u,u,u),A.a([new A.ac(0,B.G,B.aM.j(0.6),B.J,6)],k),l,B.n),l,22,l,B.Ld,l,l,l,3),l),B.QZ,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new A.es(v,l,l,B.cQ,l,l,l,l,l,l,D.eTS))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=B.c.j(0.4)
q=B.cs}else if(s===t){r=B.bb
q=B.O}else{r=B.aE
q=B.I}d.push(new A.es(t,l,l,B.cQ,l,l,l,l,l,l,new A.F(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&A.c()
d.push(new A.vT(new A.cX(k,!1,A.p(l,l,B.f,B.aM,l,l,l,22,l,l,l,l,l,3),l),B.QZ,l,l))}p=f===0?0:B.k.V(h/f*100)
k=B.w.j(0.35)
v=A.m(12)
u=A.I(B.b7,B.r,1)
o=x.p
v=A.p(l,A.v(A.a([A.A(A.a([m.aWJ("Correct",""+h,B.bl),B.ab,m.aWJ("Wrong / missed",""+(f-g),B.aE),B.b8,A.d(""+p+"% accuracy",l,l,l,l,l,l,F.a5L,l,l,l)],o),B.m,l,B.e,B.j,0,l,l),B.ao,D.fbU],o),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(k,l,u,v,l,l,B.n),l,l,l,l,B.bm,l,l,l)
u=A.D(A.ci(new A.a8t(l,A.dn(d,l,l,l,l,l,l,l,l,l,l),l,l,l),B.q,l,B.y,l,l,l,l,B.ai),1)
k=m.a.d
g=A.l(l,l,B.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.w.j(0.35)
return A.v(A.a([v,B.ac,u,B.S,A.aL(l,B.T,!0,l,!0,B.q,l,A.aM(),k,l,l,l,l,l,2,A.bo(l,new A.b4(4,A.m(12),B.Z),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new A.b4(4,A.m(12),D.aUJ),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.y,!0,l,!0,l,!1,l,B.ag,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,B.a8,l,l,l,l,l,l,l,l,l,l,l,D.aNI,!0,B.a5,l,B.am,l,l,l,l)],o),B.aj,l,B.e,B.j,0,B.p)},
aWJ(d,e,f){var w=null,v=f.j(0.15),u=A.m(8)
return A.p(w,A.d(d+": "+e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(v,w,w,u,w,w,B.n),w,w,w,w,B.fN,w,w,w)}}
C.aKB.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
var z=a.updateTypes(["ax<~>()","~()","H(i_,i_)","~([wW?])","R(qq)","qq()","H(r_,r_)","R(r_)","H(r0,r0)","Os(X)","R(i_)","cJ(aci)","YU(X)","Y0(X)","ad3(X)","a5j(X)","MA(X)","abU(X,hA<ak<j3>>)","abT(X,H)","r(qq)","r_(a3<@,@>)","~(DU,aph)","Ms(X)","a3<n,@>(r_)","r0(a3<@,@>)","a3<n,@>(kg)","a3<n,@>(r0)","R(r0)","a3<n,@>(lq)","lq(@)","a3<n,@>(ie)","ie(@)","i_(@)","ax<~>(kg)","a3<n,@>(i_)","~(H,H)","i_(i_)","Ub(X)","ax<R>(ak<i_>)","YT(X)","~(i_)","ZF(X)","Uc(X)","n(i_)","R(lq)","wz(bu<H,lq>)","aar(X,H)","H(ie,ie)","aaj(lq)","r(r6)","bG(HQ)","Yp(X)","~(d1{bumpWalletRevision:R,cloudRequest:R})","~(n,O,O,O)","O(Q)","~(d1)","Zc(X)","~(DU)","n(n)","ZG(X)"])
C.coI.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.coJ(r,w,s.b,v,s.d)
t=s.e
r.b=A.dF(t,u)
v.r=new C.coF(r)
v.e=new C.coG(r,w)
v.f=new C.coH(r,w,t,u)},
$S:0}
C.coJ.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.li(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=A.a8(r)
u=A.cd(r)
s=v
q=u
p=A.Fo(s,q)
if(p==null)p=new A.j1(s,q==null?A.a1J(s):q)
t=p
o.d.hg(t.a,t.b)
return}o.d.J(0,w)}else{o.e.a(null)
o.d.J(0,null)}},
$S:40}
C.coF.prototype={
$0(){this.a.b.a9(0)
return $.G1()},
$S:1623}
C.coG.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.arF.$0()
this.a.b.a9(0)},
$S:0}
C.coH.prototype={
$0(){var w,v=this,u=v.b,t=A.dA(0,0,u.gb9D(),0,0,0)
u.j1(0)
u=v.c
w=v.a
w.b=A.cL(new A.b9(u.a-t.a),new C.coE(w,u,v.d))},
$S:0}
C.coE.prototype={
$0(){var w=this.c
this.a.b=A.dF(this.b,w)
w.$1(null)},
$S:0}
C.eSU.prototype={
$1(d){var w=this.a
w.m(new C.eST(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.eST.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hA(D.ae_,this.b,null,null,v.$ti.k("hA<1>"))},
$S:0}
C.eSW.prototype={
$2(d,e){var w=this.a
w.m(new C.eSR(w,d,e))},
$S:55}
C.eSR.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hA(D.ae_,null,this.b,this.c,v.$ti.k("hA<1>"))},
$S:0}
C.eSV.prototype={
$0(){var w=this.a
w.m(new C.eSS(w))},
$S:0}
C.eSS.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hA(B.A2,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fqB.prototype={
$1(d){return d.a===this.a&&B.a.i(d.b.toLowerCase())===this.b&&d.x===B.cj},
$S:16}
C.fqt.prototype={
$1(d){return d},
$S:13}
C.faC.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return A.p(B.A,new A.C(new A.N(u,0,u,0),A.d("NGMY",w,1,B.eB,w,!1,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,B.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),B.f,w,w,B.a99,w,v,w,w,w,w,w,v)},
$S:153}
C.faz.prototype={
$3(d,e,f){return this.a.$0()},
$S:136}
C.faA.prototype={
$2(d,e){var w,v=this,u=e.b
if(B.a.i(u==null?"":u).length!==0){u.toString
w=B.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return A.ke(w,B.A,v.d,new C.fay(v.e),B.fO,v.c,!0,v.b,null,null,v.a)},
$S:1624}
C.fay.prototype={
$3(d,e,f){return this.a.$0()},
$S:136}
C.faB.prototype={
$3(d,e,f){return this.a.$0()},
$S:136}
C.d6x.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.d6I.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.d7_.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:7}
C.d70.prototype={
$1(d){return this.a.IH()},
$S:14}
C.d6Q.prototype={
$0(){var w=J.b6(this.b,new C.d6P(),x.P)
w=A.B(w,w.$ti.k("aj.E"))
this.a.f=w},
$S:0}
C.d6P.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:7}
C.d6R.prototype={
$0(){var w=this.a,v=w.a.d.b5,u=A.T(v).k("J<1,a3<n,@>>")
v=A.B(new A.J(v,new C.d6O(),u),u.k("aj.E"))
w.f=v},
$S:0}
C.d6O.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:7}
C.d6T.prototype={
$0(){var w=this.a,v=w.a.d.b5,u=A.T(v).k("J<1,a3<n,@>>")
v=A.B(new A.J(v,new C.d6S(),u),u.k("aj.E"))
w.f=v},
$S:0}
C.d6S.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:7}
C.d6L.prototype={
$0(){var w=0,v=A.j(x.c),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.c5P(t.a.c)?2:3
break
case 2:w=4
return A.b(C.anW(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.m(new C.d6J(t))
case 3:if(t.c!=null)t.m(new C.d6K(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:53}
C.d6J.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d6K.prototype={
$0(){return this.a.d++},
$S:0}
C.d6M.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d6N.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d6D.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.hYb(t.a.d.b5,J.k(J.q(u.b,"id")),"rejected")
t.a.bp()
w=2
return A.b(C.afO(t.a.d.b5),$async$$0)
case 2:w=3
return A.b(t.IH(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6E.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a7(s)
C.hNb(t.a.d.b5,J.k(r.h(s,"id")),t.a.c.c)
t.a.bp()
w=2
return A.b(C.afO(t.a.d.b5),$async$$0)
case 2:w=3
return A.b(t.IH(),$async$$0)
case 3:t.HB(B.d.dL(t.y,new C.d6B(s),new C.d6C(t)),J.k(r.h(s,"id")))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6B.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d6C.prototype={
$0(){return B.d.gK(this.a.y)},
$S:z+5}
C.d6F.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d6G.prototype={
$0(){return B.d.gK(this.a.y)},
$S:z+5}
C.d6H.prototype={
$0(){return this.a.HB(this.b,J.k(J.q(this.c,"id")))},
$S:0}
C.d6A.prototype={
$0(){return this.a.bXi(this.b)},
$S:0}
C.d6z.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.hYE(u,w.b,new C.d6y(v,w))},
$S:0}
C.d6y.prototype={
$2(d,e){return this.a.afx(this.b,d,e)},
$S:671}
C.d6Z.prototype={
$2(d,e){if(d)return
this.a.aPx()},
$S:120}
C.d6X.prototype={
$2(d,e){var w=this.a
return new A.l0(C.aY8(w.a.c.a),new C.d6W(w,this.b,this.c),null,null,x.gH)},
$S:1626}
C.d6W.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=A.m(12)
v=A.m(12)
u=A.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return A.aF(!1,B.a1,!0,w,A.aK(!1,v,!0,new A.C(B.l2,A.bDK(B.cR,A.V(B.h4,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.d6V(this.a,d),t,t,t,t,t,t,t),B.f,this.b,0,t,t,t,t,t,B.ae)},
$S:1627}
C.d6V.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fmS(s.c.a,s.e).eP(new C.d6U())
w=2
return A.b(C.bB6(u.b,t.a.c.a),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6U.prototype={
$1(d){},
$S:30}
C.d6Y.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dKg.prototype={
$0(){var w=this.a
return A.Kb(w.a.c.a,new C.dKf(w))},
$S:79}
C.dKf.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dKh.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&A.c()
u.bi=t.ad()
v.bp()
w.m(new C.dKe())},
$S:0}
C.dKe.prototype={
$0(){},
$S:0}
C.dKi.prototype={
$2(d,e){var w,v=this.a
if(!C.c5P(v.a.c)){if($.fJG.t(0,B.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.fJH(this.b,v.x,w)
return!1}C.anW(v.a.c.a)}if(A.Kb(v.a.c.a,new C.dKd(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aEn()
w=v.a
w.toString
w.ho(new A.d1(B.o.u(1000*Date.now()),v.a.c.a,d,B.jA,B.fa,e,null,null,B.cj,new A.Q(Date.now(),0,!1)))
v.a.bp()
return!0},
$S:1628}
C.dKd.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dKj.prototype={
$3$bonus(d,e,f){var w,v=null,u=B.o.u(1000*Date.now()),t=this.a,s=t.a
s.ho(new A.d1(u,s.c.a,d,B.fz,B.fa,e,v,v,B.cj,new A.Q(Date.now(),0,!1)))
t.a.bp()
w=f>0?"+$"+B.k.aa(d,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.ui(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1629}
C.d6r.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d6u.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.d6v.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d6w.prototype={
$1(d){var w=null,v=this.a,u=A.fl(w,w,v.e===d?B.bl:A.Y(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,w,w,w,w,w,w,w,w)
return A.D(new A.C(B.eX,A.i9(A.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.d6t(v,d),u),w),1)},
$S:227}
C.d6t.prototype={
$0(){var w=this.a
return w.m(new C.d6s(w,this.b))},
$S:0}
C.d6s.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d8j.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.d8m.prototype={
$1(d){this.a.cdO()
return null},
$S:14}
C.d8n.prototype={
$1(d){return this.a.ctm()},
$S:14}
C.d8o.prototype={
$1(d){this.a.a0N()
return null},
$S:14}
C.d8p.prototype={
$1(d){this.a.agD()
return null},
$S:14}
C.d8q.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c5)return
w=v.Q
w===$&&A.c()
if(w<=0){v.m(new C.d8k(v))
w=v.as
if(w!=null)w.a9(0)
v.Eh()
return}v.m(new C.d8l(v))},
$S:14}
C.d8k.prototype={
$0(){return this.a.Q=0},
$S:0}
C.d8l.prototype={
$0(){var w=this.a,v=w.Q
v===$&&A.c()
w.Q=v-1
return v},
$S:0}
C.d7z.prototype={
$0(){return this.a.bC=this.b},
$S:0}
C.d7A.prototype={
$0(){return this.a.bC=this.b},
$S:0}
C.d82.prototype={
$1(d){return this.a.go.t(0,d)},
$S:31}
C.d83.prototype={
$0(){},
$S:0}
C.d7P.prototype={
$0(){var w=this.b
w.c5=!0
w.cU="Waiting for both players\u2026"
w.cg="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.d7Q.prototype={
$0(){var w=this.a
w.c5=!0
w.cU="Both players connected"
w.cg="Starting together in a moment\u2026"},
$S:0}
C.d7R.prototype={
$0(){var w=this.b
w.c5=!0
w.cU="Match starting together\u2026"
w.cg="Both players start in "+B.o.D(this.c,1,99)+"s"},
$S:0}
C.d7S.prototype={
$0(){this.b.c5=!1},
$S:0}
C.d7T.prototype={
$0(){},
$S:0}
C.d71.prototype={
$0(){var w=this.a,v=w.x2,u=A.t(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.d7y.prototype={
$0(){var w=this.a
w.at=this.b
w.b1D()},
$S:0}
C.d84.prototype={
$0(){},
$S:0}
C.d8d.prototype={
$0(){},
$S:0}
C.d81.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.d80(w))},
$S:0}
C.d80.prototype={
$0(){var w=this.a
w.y=!0
w.z=new A.Q(Date.now(),0,!1)},
$S:0}
C.d7w.prototype={
$0(){var w=this.a;++w.Z
w.y=!1
w.z=null},
$S:0}
C.d7x.prototype={
$0(){},
$S:0}
C.d88.prototype={
$1(d){return d==null},
$S:256}
C.d89.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
B.d.cw(v.ch,w.d)},
$S:0}
C.d8a.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.d72.prototype={
$1(d){return d==null},
$S:256}
C.d73.prototype={
$0(){return this.a.bi++},
$S:0}
C.d74.prototype={
$0(){},
$S:0}
C.d7I.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.d7J.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.J(0,t)
w=this.c
u.J(0,w)
if(v.ghv()&&D.mn.t(0,v.a.e)){u=v.id
u.J(0,t)
u.J(0,w);++v.fx}++v.k2
v.fy=A.a([],x.t)},
$S:0}
C.d7K.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.d7H(w))},
$S:11}
C.d7H.prototype={
$0(){var w=this.a
w.fy=A.a([],x.t)
w.k1=!1},
$S:0}
C.d7U.prototype={
$0(){return this.a.y1++},
$S:0}
C.d7V.prototype={
$0(){},
$S:0}
C.d7W.prototype={
$0(){return this.a.y2++},
$S:0}
C.d7X.prototype={
$0(){},
$S:0}
C.d7Y.prototype={
$0(){return this.a.b5++},
$S:0}
C.d7Z.prototype={
$0(){},
$S:0}
C.d87.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.d7L.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d7M.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.d7N.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d7O.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.d8b.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.d8c.prototype={
$0(){var w=this.a
w.ok.push(w.d.aD(4))
w.p2=0},
$S:0}
C.d75.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d76.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.d77.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d78.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.d85.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.d86.prototype={
$0(){var w,v=this.a;++v.x2
v.aLs()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+A.t(Math.min(w+2,7))+" tiles"},
$S:0}
C.d7G.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.d8_.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d7E.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d7F.prototype={
$2(d,e){return d+e.length},
$S:215}
C.d8e.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.d8f.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d8g.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d8i.prototype={
$1(d){var w=this.a,v=w.Ns(),u=v<=0?0:B.k.D(w.zu()/v,0,1),t=w.a.x,s=t*1.46
return new C.Ms(w.f?s:s*u,s,t,null)},
$S:z+22}
C.d8h.prototype={
$1(d){return d.bT(0.85)},
$S:155}
C.d7D.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghv()&&D.mn.t(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return A.v(A.a([A.d(p,w,w,w,w,w,w,B.jX,B.L,w,w),B.ao,A.D(A.av(new A.a5(r*v+u,r*t+s,A.ib(!0,w,w,B.y,new A.hN(v,6,6,1,r),new C.d7C(q,r),q.fr.length,w,B.dP,B.ai,!1),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
$S:152}
C.d7C.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.t(0,e),p=r.ghv()&&D.mn.t(0,r.a.e)&&q&&r.id.t(0,e),o=r.ghv()&&D.mn.t(0,r.a.e)&&q&&!p,n=B.d.t(r.fy,e)||q,m=p?D.am7:D.bMM,l=A.m(10),k=A.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.am7:D.am1
v=o?A.I(B.dx,B.r,2):s
u=A.a([new A.ac(0,B.G,A.Y(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.J,4)],x.V)
t=this.b*0.42
return A.aK(!1,l,!0,A.dh(s,A.av(n?A.V(D.cfL[r.fr[e]],B.c,s,s,s,t):A.d("?",s,s,s,s,s,s,A.l(s,s,B.c,s,s,s,s,s,s,s,s,t,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,B.bc,new A.o(s,s,v,k,u,w,B.n),B.eL,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.d7B(r,e),s,s,s,s,s,s,s)},
$S:194}
C.d7B.prototype={
$0(){return this.a.cd8(this.b)},
$S:0}
C.d7l.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?A.Y(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Y(89,B.bl.l()>>>16&255,B.bl.l()>>>8&255,B.bl.l()&255),r=A.m(10),q=A.m(10),p=A.m(10),o=A.I(A.Y(64,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
return A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(B.A,A.d(t?"":u,w,w,w,w,w,w,D.aMQ,w,w,w),B.f,w,w,new A.o(w,w,o,p,w,w,B.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d7k(v,d),w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.ae)},
$S:673}
C.d7k.prototype={
$0(){return this.a.csE(this.b)},
$S:0}
C.d7m.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=A.Y(46,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
return A.aF(!1,B.a1,!0,A.m(10),A.aK(!1,A.m(10),!0,A.p(B.A,A.d(u,w,w,w,w,w,w,D.aMQ,w,w,w),B.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d7j(v,d),w,w,w,w,w,w,w),B.f,t,0,w,w,w,w,w,B.ae)},
$S:673}
C.d7j.prototype={
$0(){return this.a.csD(this.b)},
$S:0}
C.d7n.prototype={
$1(d){return this.a.m(new C.d7i())},
$S:28}
C.d7i.prototype={
$0(){},
$S:0}
C.d7o.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&A.c()
w=C.afZ(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.oD()
if(u.ghv()&&D.mn.t(0,u.a.e)){u.a_7()
u.mG(!0)}else{v=B.d.cI(u.cy,0,new C.d7g())
t=u.dx
if(t>=v)u.tg("All 5 sentences perfect \u2014 full payout!")
else u.DJ(t/v,t,v)}}else{if(u.ghv()&&D.mn.t(0,u.a.e))u.a_7()
u.m(new C.d7h(u))}},
$S:0}
C.d7g.prototype={
$2(d,e){return d+e.length},
$S:215}
C.d7h.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bM(0,B.c3)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.d7p.prototype={
$1(d){var w=null,v=A.fl(w,w,A.Y(38,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,B.ce,w,w,w,w,w,w,w)
return new A.C(B.cK,new A.a5(1/0,w,A.i9(A.d(d,w,w,w,w,w,w,U.aMJ,w,w,w),new C.d7f(this.a,d),v),w),w)},
$S:130}
C.d7f.prototype={
$0(){return this.a.b1_(this.b)},
$S:0}
C.d7q.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&A.c()
w=u*3+8
return A.v(A.a([A.d(s,v,v,v,v,v,v,B.oN,v,v,v),B.P,A.D(A.av(new A.a5(w,w,A.ib(!0,v,v,B.y,new A.hN(3,4,4,1,u),new C.d7e(t,u),9,v,B.dP,B.ai,!1),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
$S:152}
C.d7e.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.aZQ(e),p=r===0
if(p)w=B.K
else w=q?B.bl:A.Y(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v=A.m(10)
s=p?t:new C.d7a(s,e)
u=A.m(10)
p=p?"":""+r
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.av(A.d(p,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),B.f,w,0,t,t,t,t,t,B.ae)},
$S:76}
C.d7a.prototype={
$0(){return this.a.csC(this.b)},
$S:0}
C.d7r.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.d7d(q,d)
p=A.m(16)
if(o)w=D.a0U[d]
else{w=D.a0U[d]
w=A.Y(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=A.m(16)
u=o?A.Y(B.k.V(127.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Y(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
u=A.I(u,B.r,o?2:1)
t=x.V
if(o){s=D.a0U[d]
t=A.a([new A.ac(0,B.G,A.Y(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,16)],t)}else t=A.a([],t)
return A.aK(!1,p,!0,A.dh(r,r,r,r,B.bc,new A.o(w,r,u,v,t,r,B.n),T.Aa,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1633}
C.d7d.prototype={
$0(){return this.a.csF(this.b)},
$S:0}
C.d7s.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&A.c()
q=A.d(q,t,t,t,t,t,t,B.oN,t,t,t)
w=A.d("Move "+r.avU()+"/"+C.fPK(),t,t,t,t,t,t,B.CA,t,t,t)
v=r.x2
u=s*3+12
return A.v(A.a([q,w,A.d("Round "+v+"/7 \xb7 "+A.t(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,A.l(t,t,A.Y(153,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.D(A.av(new A.a5(u,u,A.ib(!0,t,t,B.y,new A.hN(3,6,6,1,s),new C.d7c(r),9,t,B.dP,B.ai,!1),t),t,t,t),1)],x.p),B.m,t,B.e,B.j,0,B.p)},
$S:152}
C.d7c.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=A.m(10),s=A.m(10),r=u?B.bl:D.b6W,q=u?B.ew:D.beV
return A.aF(!1,B.a1,!0,w,A.aK(!1,t,!0,A.p(w,w,B.f,w,w,new A.o(r,w,A.I(q,B.r,u?2.5:1),s,w,w,B.n),w,w,w,w,w,w,w,w),w,!0,w,w,B.K,w,w,w,w,w,w,w,w,new C.d79(v,e),w,w,w,w,B.K,w,w),B.f,B.K,0,w,w,w,w,w,B.ae)},
$S:76}
C.d79.prototype={
$0(){return this.a.csA(this.b)},
$S:0}
C.d7t.prototype={
$0(){return this.a.b1_(this.b[this.c])},
$S:0}
C.d7u.prototype={
$0(){return this.a.m(new C.d7b())},
$S:0}
C.d7b.prototype={
$0(){},
$S:0}
C.d7v.prototype={
$2(d,e){this.a.YT(d,e)
return null},
$S:z+21}
C.dbR.prototype={
$1(d){return this.a.cdD(this.b,d)},
$S:1634}
C.dbQ.prototype={
$0(){var w=this
return w.a.a.cKX(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.czK.prototype={
$1(d){var w=this.a
w.a_o()
w.tn()},
$S:8}
C.cz4.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cyV.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cyW.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cze.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.czb.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.czc.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.czd.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cz6.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.cz5(w))},
$S:0}
C.cz5.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cyX.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ab(w.c)
v.dy=J.ab(w.d)
v.fr=J.ab(w.e)},
$S:0}
C.cz9.prototype={
$1(d){var w=this.a
return new C.Ub(w.fx,new C.cz8(w),w.a.f.r,null)},
$S:z+37}
C.cz8.prototype={
$1(d){return this.bfP(d)},
bfP(d){var w=0,v=A.j(x.y),u,t=this,s,r
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c6J(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.m(new C.cz7(r,d))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+38}
C.cz7.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.czx.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.czr.prototype={
$1(d){this.a.tn()
return null},
$S:14}
C.czu.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(B.o.an(v.gaSl().a,1e6)<=0){w=v.id
if(w!=null)w.a9(0)
v.tn()
return}v.m(new C.czt())},
$S:14}
C.czt.prototype={
$0(){},
$S:0}
C.czq.prototype={
$1(d){this.a.Eo()
return null},
$S:14}
C.czs.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.czp.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bi(J.k(v==null?"":v))
if(u==null)u=new A.Q(A.fP(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bi(J.k(v==null?"":v))
return u.aL(0,w==null?new A.Q(A.fP(0,0,!1),0,!1):w)},
$S:41}
C.cz1.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bi(J.k(v==null?"":v))
if(u==null)u=new A.Q(A.fP(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bi(J.k(v==null?"":v))
return u.aL(0,w==null?new A.Q(A.fP(0,0,!1),0,!1):w)},
$S:41}
C.cz2.prototype={
$0(){var w=this.a,v=w.f
B.d.a8(v)
B.d.v(v,this.b)
w.ax=!0},
$S:0}
C.cz3.prototype={
$0(){var w=this.a
if(w.c!=null)w.a04(!0)},
$S:11}
C.cz_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cz0.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
if(w.f.length!==0)w.Sw(this.b)},
$S:8}
C.czh.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=B.d.gcX(v).Q
v.toString
if(this.b)w.hT(v)
else w.lP(v,B.dU,B.kx)},
$S:8}
C.cza.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.czi.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.czj.prototype={
$0(){var w=this.a
w.f.push(A.E(["role","user","text",this.b,"at",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.z))
w.b2q()
w.r.bM(0,B.c3)
w.at=!0},
$S:0}
C.czk.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.czl.prototype={
$0(){var w=this.a
w.f.push(A.E(["role","ai","text",this.b,"at",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.z))
w.at=!1},
$S:0}
C.czm.prototype={
$0(){var w,v=this.b,u=A.U(x.N,x.z)
J.aG(u,"role","ai")
J.aG(u,"text",this.c)
J.aG(u,"at",new A.Q(Date.now(),0,!1).a5().ac())
w=this.a
if(J.cw(w.b)){w=J.b6(w.b,v.gccy(),x.P)
w=A.B(w,w.$ti.k("aj.E"))
J.aG(u,"phoneActions",w)}v.f.push(u)
v.b2q()},
$S:0}
C.czn.prototype={
$0(){this.a.f.push(A.E(["role","ai","text",y.g,"at",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.z))},
$S:0}
C.czo.prototype={
$0(){return this.a.at=!1},
$S:0}
C.czf.prototype={
$1(d){return this.bfQ(d)},
bfQ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
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
case 5:k.aoE()
case 4:k.c.I(x.q).f.R(A.b2(null,null,null,B.d2,null,B.q,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:405}
C.czw.prototype={
$1(d){return this.bfR(d)},
bfR(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.I(x.q).f.R(A.b2(null,null,null,B.d2,null,B.q,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:405}
C.czg.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=B.d.gcX(v).Q
v.toString
w.hT(v)},
$S:8}
C.czJ.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
if(v>0)w.a9r(v-1)},
$S:0}
C.czC.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.czF.prototype={
$1(d){var w=this.a
w.m(new C.czz(w,d))
if(d===0)w.a04(!0)},
$S:28}
C.czz.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.czD.prototype={
$2$size(d,e){return C.fO4(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:1635}
C.czE.prototype={
$0(){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.h_w(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return A.b(H.ap9(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.czA(p),"NGMY Music Studio",r),$async$$0)
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
return A.b(p.tn(),$async$$0)
case 15:p.m(new C.czB(p))
p.a9r(0)
case 14:u=!1
w=1
break
case 11:w=16
return A.b(p.tn(),$async$$0)
case 16:case 9:case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:62}
C.czA.prototype={
$2(d,e){return this.bfS(d,e)},
bfS(d,e){var w=0,v=A.j(x.y),u,t=this,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=A.a0L(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$2,v)},
$S:123}
C.czB.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.czH.prototype={
$2(d,e){return B.ab},
$S:36}
C.czG.prototype={
$2(d,e){var w=null,v=this.a,u=A.d((v.a.c.w?D.a1_:D.a0m)[e],w,w,w,w,w,w,B.pX,w,w,w),t=A.Y(31,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),s=A.Y(89,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
v=v.at?w:new C.czy(v,e)
return A.mw(w,t,u,w,v,w,w,new A.aA(s,1,B.r,-1),w)},
$S:565}
C.czy.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a1_:D.a0m
w.r.saU(0,v[this.b])
w.mF()
return null},
$S:0}
C.czI.prototype={
$1(d){var w=this.a
return w.at?null:w.mF()},
$S:2}
C.cyY.prototype={
$0(){return this.a.a9r(0)},
$S:0}
C.czv.prototype={
$0(){return this.a.a9r(this.b)},
$S:0}
C.cyZ.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=A.p(v,D.bHu,B.f,v,v,new A.o(v,v,v,v,v,new A.a6(B.a3,B.a7,B.x,A.a([A.Y(51,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),w.b],x.O),v,v),B.a6),v,72,v,v,v,v,v,72)
t=w.c
s=A.d("Start a conversation",v,v,v,v,v,v,A.l(v,v,t?B.c:B.az,v,v,v,v,v,v,v,v,16,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.av(new A.C(B.WH,A.v(A.a([u,B.ac,s,B.ao,A.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,A.l(v,v,t?B.aA:B.aW,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v)],x.p),B.m,v,B.e,B.j,0,B.p),v),v,v,v)}if(e<s)return u.bB7(t[e],w.c)
return u.aM2(A.E(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:42}
C.bW3.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=B.k.O(d)
return new A.Q(A.fP(w>1e11?w:w*1000,0,!0),0,!0).bQ()}v=A.bi(J.k(d))
return v==null?null:v.bQ()},
$S:294}
C.bW2.prototype={
$1(d){A.aN(d)
return(d==null?0:d)/100},
$S:520}
C.bW5.prototype={
$1(d){var w
if(d==null)w=null
else{w=A.bi(J.k(d))
w=w==null?null:w.bQ()}return w},
$S:294}
C.bW4.prototype={
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
s=A.a3g(B.a1I,J.k(s==null?"reimbursement":s))
r=J.q(w,"method")
r=A.a3g(B.a0k,J.k(r==null?"system":r))
q=A.aT(J.q(w,"sourceDetails"))
p=J.q(w,"status")
p=A.a3g(B.G3,J.k(p==null?"approved":p))
o=this.a.$1(J.q(w,"timestamp"))
if(o==null)o=new A.Q(Date.now(),0,!1)
return new A.d1(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:623}
C.dsk.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dsl.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dsb.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bl(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.ds9.prototype={
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
return A.b(C.fIG(t,s,r,q),$async$$0)
case 3:p=e
w=4
return A.b(A.oO(o.a.c,!1),$async$$0)
case 4:o.kF(p)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsj.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.a8_(),$async$$0)
case 3:q=e
if(q==null){r.kF("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return A.b(A.a4(s,!1).ci(A.eo(new C.dsi(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return A.b(A.oO(r.a.c,!1),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsi.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&A.c()
return new C.YT(w.b,w.a,u,v,null)},
$S:z+39}
C.ds8.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.htO(q)?3:4
break
case 3:w=5
return A.b(t.a.DY(B.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return A.b(C.aVK(q,s.a.c),$async$$0)
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
case 9:s.kF(C.bW7(s.a.c))
w=1
break
case 10:s.kF("That code didn't match anything on your account. Double-check it and try again.")
w=1
break
case 11:s.kF(y.B)
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
return A.b(s.aNg(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.ds7.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=A.bl(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dsa.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.abg(),$async$$0)
case 3:q=e
if(q==null||B.a.i(q).length===0){w=1
break}s=C.fXr(q)
if(s==null){r.kF("Could not read that backup file.")
w=1
break}if(!C.bW6(s,r.a.c,null)){r.kF(C.bW7(r.a.c))
w=1
break}w=4
return A.b(r.bDr(s),$async$$0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsh.prototype={
$1(d){var w=null,v=new A.aq(B.as,$.aw()),u=A.M(d).ax.a===B.H,t=u?B.i4:B.c,s=x.p,r=A.v(A.a([A.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,A.l(w,w,u?B.ad:B.ak,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),B.ay,A.aL(w,B.T,!0,w,!0,B.q,w,A.aM(),v,w,w,w,w,w,2,A.bo(w,new A.b4(4,A.m(14),B.df),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),B.y,!0,w,!0,w,!1,w,B.ag,w,w,w,w,w,B.dL,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.L,w,B.am,w,w,w,w)],s),B.F,w,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bJ(!1,B.dd,w,w,!0,w,w,new C.dsf(d),w,w),A.bI(D.f0Z,new C.dsg(d,v),A.bk(B.aT,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.feN,w)},
$S:19}
C.dsf.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.dsg.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a4(this.a,!1).N(w)
return null},
$S:0}
C.dsc.prototype={
$1(d){return D.fA8},
$S:z+12}
C.dsd.prototype={
$0(){return this.a.DZ(B.a.i(this.b))},
$S:1}
C.dse.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(C.aVK(t.b,r.a.c),$async$$0)
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
case 7:r.kF(C.bW7(r.a.c))
w=1
break
case 8:r.kF("Could not read that QR code for your account.")
w=1
break
case 9:r.kF(y.B)
w=1
break
case 10:s=q.b
s.toString
w=12
return A.b(r.aNg(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsm.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.dsq.prototype={
$1(d){this.a.PE()
return null},
$S:14}
C.dsn.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dso.prototype={
$0(){var w=null,v=this.a
A.fH(new A.fA(v.gau5()))
this.b.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d("Code "+v.gau5()+" copied",w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dsp.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.dsr.prototype={
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
C.fdT.prototype={
$1(d){return D.fy1},
$S:z+13}
C.ff5.prototype={
$1(d){return new C.ad3(this.a,this.b,this.c,null)},
$S:z+14}
C.eMK.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.eML.prototype={
$0(){A.a4(this.a,!1).N(!0)
return null},
$S:0}
C.d1r.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fD()},
$S:8}
C.d1o.prototype={
$2(d,e){return e.aiK(e.a.toUpperCase())},
$S:1636}
C.d1p.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=B.a.i(w.d.a.a)
A.a4(v,!1).N(w)
return null},
$S:2}
C.d1q.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.bWP.prototype={
$1(d){var w=J.q(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!B.d.b8(D.d2Q,B.a.gkn(v))},
$S:4}
C.fmM.prototype={
$1(d){return d.a===this.a},
$S:1637}
C.fmN.prototype={
$0(){return B.d.gK(B.Bp)},
$S:1638}
C.dyM.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.m(new C.dyL(v))
w=v.r
w===$&&A.c()
if(w<=0)v.b1u("Time's up")},
$S:14}
C.dyL.prototype={
$0(){var w=this.a,v=w.r
v===$&&A.c()
w.r=v-1
return v},
$S:0}
C.dyD.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dyI.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.m(new C.dyF(w,d,e))},
$S:126}
C.dyF.prototype={
$0(){var w=this.a,v=this.c
w.e=B.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dyJ.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.dyE(w))
w.cn9(!0)},
$S:0}
C.dyE.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dyK.prototype={
$1(d){this.a.b1u(d)
return null},
$S:2}
C.dyG.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.dyH.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.c3f.prototype={
$1(d){return D.dn1},
$S:z+15}
C.c3e.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.ffS.prototype={
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
C.ffT.prototype={
$2(d,e){var w=A.aN(J.q(d,e))
w=w==null?null:B.k.O(w)
return w==null?0:w},
$S:607}
C.ffU.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:215}
C.ftO.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.h7O(w,v):C.fOm(w,v)
if(u===3)++w.f
C.aes(w,this.c,u)
return u},
$S:1640}
C.ftQ.prototype={
$0(){return C.h7O(this.a,this.b)},
$S:112}
C.ftP.prototype={
$0(){return C.fOm(this.a,this.b)},
$S:112}
C.drX.prototype={
$0(){var w=this.a
if(w.a.c)w.m(new C.drW(w))},
$S:0}
C.drW.prototype={
$0(){this.a.r=1+B.o.F(A.Bf(new A.Q(Date.now(),0,!1))/90|0,5)},
$S:0}
C.drY.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&A.c()
u=u.x
u===$&&A.c()
w=B.k.bw(u*10)
if(w!==v.w)v.m(new C.drV(v,w))}},
$S:0}
C.drV.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.c5o.prototype={
$3(d,e,f){var w=null
return A.D(A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,B.I,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.bB,A.f4(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.ds)],x.p),B.m,w,B.e,B.j,0,B.p),1)},
$S:1641}
C.c5n.prototype={
$3(d,e,f){var w=null
return A.d("$"+B.k.aa(e,2),w,w,w,w,w,w,B.oM,w,w,w)},
$S:456}
C.c5Q.prototype={
$1(d){return new C.MA(this.a,this.b,!1,null,null)},
$S:z+16}
C.dRj.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=A.m(e?0:30)
e=e?g:A.I(B.b2.j(0.5),B.r,1)
w=f.a.e?g:A.a([new A.ac(2,B.G,B.b2.j(0.35),B.J,36),new A.ac(0,B.G,B.bA.j(0.175),B.J,24)],x.V)
v=A.m(f.a.e?0:30)
u=x.O
t=A.ao(g,A.p(g,g,B.f,g,g,new A.o(g,g,g,g,g,new A.bS(B.A,0.5,B.x,g,0,A.a([B.ba.j(0.22),B.K],u),g,g),B.a6),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=A.ao(-50,A.p(g,g,B.f,g,g,new A.o(g,g,g,g,g,new A.bS(B.A,0.5,B.x,g,0,A.a([B.bA.j(0.18),B.K],u),g,g),B.a6),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?B.j:B.Q
p=x.p
o=A.a([],p)
if(f.a.e)o.push(B.P)
n=x.V
o.push(A.p(g,D.bD3,B.f,g,g,new A.o(g,g,A.I(B.aM.j(0.8),B.r,2.5),g,A.a([new A.ac(0,B.G,B.b2.j(0.55),B.cw,18)],n),E.tz,B.a6),g,88,g,g,g,g,g,88))
o.push(B.aO)
o.push(A.nA(B.je,D.fcA,new C.dRf()))
o.push(B.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(A.d(m,g,g,g,g,g,g,A.l(g,g,B.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,B.cs,g,1.45,!0,g,g,g,g,g,g,g,g),B.L,g,g))
m=this.b
if(m.length!==0){l=B.cq.j(0.12)
k=A.m(18)
j=A.I(B.cq.j(0.45),B.r,1)
i=A.a([A.A(A.a([A.V(D.bx4,B.cq.j(0.95),g,g,g,20),B.ab,A.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,A.l(g,g,B.cq.j(0.95),g,g,g,g,g,g,g,g,13,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),B.m,g,B.e,B.j,0,g,g),B.S,A.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,A.l(g,g,B.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),B.S],p)
B.d.v(i,new A.J(m,new C.dRg(),A.T(m).k("J<1,r>")))
B.d.v(o,A.a([B.aO,A.p(g,A.v(i,B.F,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(l,g,j,k,g,g,B.n),g,g,g,g,B.by,g,g,1/0)],p))}o.push(B.bu)
m=B.w.j(0.35)
l=A.m(18)
k=A.I(B.b2.j(0.35),B.r,1)
o.push(A.p(g,A.v(A.a([f.auM(B.h3,"Unlimited games with an active plan",B.ba),B.P,f.auM(B.kb,"Weekday check-ins grow your balance",B.b2),B.P,f.auM(B.m8,"Compete, bet, and earn points",B.aM)],p),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(m,g,k,l,g,g,B.n),g,g,g,g,B.by,g,g,1/0))
o.push(B.d5)
l=A.m(16)
n=A.a([new A.ac(0,B.G,B.bA.j(0.45),B.cw,16)],n)
o.push(new A.a5(1/0,g,A.bX(A.dp(D.bGg,D.f8e,new C.dRh(f,a0),A.bk(B.K,g,g,g,B.c,B.HP,g,B.K,new A.b7(A.m(16),B.Z),g,g,g)),new A.o(g,g,g,l,n,E.tz,B.n),B.be),g))
o.push(B.P)
n=f.a.e?"Back":"Maybe later"
o.push(A.bJ(!1,A.d(n,g,g,g,g,g,g,A.l(g,g,B.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,new C.dRi(f,a0),g,g))
if(f.a.e)o.push(B.b8)
h=A.p(g,A.bv(v,new A.an(B.W,g,B.a9,B.q,A.a([t,u,new A.C(new A.N(22,r,22,q),A.v(o,B.m,g,B.e,s,0,B.p),g)],p),g),B.ap),B.f,g,g,new A.o(g,g,e,d,w,D.bPr,B.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return A.eD(g,B.K,h,g,g,g,Ac.Xa,B.cZ,g,g,g)},
$S:674}
C.dRf.prototype={
$1(d){return D.bOr.aw(0,d)},
$S:65}
C.dRg.prototype={
$1(d){var w=null
return new A.C(B.f2,A.A(A.a([A.V(Aj.Z7,B.cq.j(0.85),w,w,w,14),B.ab,A.D(A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$S:130}
C.dRh.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{A.a4(this.b,!1).N(null)
w.a.c.$0()}},
$S:0}
C.dRi.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else A.a4(this.b,!1).N(null)},
$S:0}
C.fp9.prototype={
$1(d){if(d.gml())this.a.a=d
return d.gml()},
$S:537}
C.foX.prototype={
$1(d){$.aU.x1$.push(new C.foW(this.a))},
$S:8}
C.foW.prototype={
$1(d){return this.a.$0()},
$S:8}
C.fc9.prototype={
$1(d){return C.h7V(this.a,this.b+1)},
$S:8}
C.fqw.prototype={
$2(d,e){var w=A.aI(d,B.bS,x.w).w.a
return new A.a5(w.a,w.b,A.cc(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:171}
C.c63.prototype={
$1(d){return d.r===this.a},
$S:235}
C.c64.prototype={
$1(d){var w=$.aOZ(),v=w.a
w.sp(0,v+1)
return v},
$S:1643}
C.c65.prototype={
$1(d){},
$S:30}
C.c62.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:235}
C.c61.prototype={
$1(d){return d.f.c9(this.a)},
$S:235}
C.faj.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:67}
C.fC4.prototype={
$1(d){return C.a5Z(this.a)},
$S:102}
C.fC5.prototype={
$1(d){var w=$.aOZ()
w.sp(0,w.a+1)},
$S:27}
C.fC6.prototype={
$1(d){},
$S:30}
C.fC7.prototype={
$1(d){return new A.k7($.aOZ(),new C.fC3(this.a,this.b),null,null,x.am)},
$S:1644}
C.fC3.prototype={
$3(d,e,f){var w=this.b
return new A.l0(C.ao1(this.a,!1),new C.fC2(w),w,null,x.gv)},
$S:1645}
C.fC2.prototype={
$2(d,e){var w=e.b
return new C.abU(w==null?this.a:w,null)},
$S:z+17}
C.dRm.prototype={
$1(d){return d.c},
$S:235}
C.dRn.prototype={
$1(d){return d.gbcK()},
$S:1646}
C.dRo.prototype={
$2(d,e){return d+e},
$S:93}
C.dRp.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.dRr.prototype={
$2(d,e){return B.P},
$S:36}
C.dRq.prototype={
$2(d,e){return new C.abT(J.q(this.a.c,e),null)},
$S:z+18}
C.dRl.prototype={
$1(d){return d==null?"\u2026":C.bxz(d)},
$S:1647}
C.fCa.prototype={
$3(d,e,f){var w=this
return A.rc(new C.ayv(w.a,w.b,w.c,w.d,new C.fC8(d,w.e),new C.fC9(d,w.f),null))},
$C:"$3",
$R:3,
$S:94}
C.fC8.prototype={
$0(){A.a4(this.a,!1).N(null)
C.haU(this.b)},
$S:0}
C.fC9.prototype={
$0(){A.a4(this.a,!1).N(null)
C.haU(this.b)},
$S:0}
C.d8s.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.a,g=h.f
g===$&&A.c()
w=h.e
v=0
for(;v<28;++v){u=g[v]
t=u.b+u.c
u.b=t
u.d+=0.08
if(t>320){u.b=-10
u.a=40+w.ai()*260
u.c=1.5+w.ai()*3}}g=x.p
w=A.a([],g)
if(h.a.c){t=h.f
B.d.v(w,new A.J(t,new C.d8r(),A.T(t).k("J<1,r>")))}t=h.d
t===$&&A.c()
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,A.aI(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?A.a([B.bl,B.ft,B.e7],r):A.a([B.aE,B.f0,B.eF],r)
p=A.m(26)
o=A.I(B.c.j(0.4),B.r,2)
n=x.V
m=A.a([new A.ac(6,B.G,(h.a.c?B.dv:B.dC).j(0.5),B.J,36)],n)
l=A.a([],g)
if(h.a.c){k=A.dj()
j=k.a
j.$flags&2&&A.ai(j)
j[11]=0.001
k.jI(-0.35)
r=A.a([X.acv,B.rM],r)
l.push(new A.a5(i,100,new A.an(B.A,i,B.a9,B.f,A.a([A.fr(B.A,A.p(i,D.b1x,B.f,i,i,new A.o(i,i,i,i,A.a([new A.ac(4,B.G,B.cR.j(0.6),B.J,24),new A.ac(0,B.G,B.w.j(0.3),B.dp,12)],n),new A.bS(B.A,0.5,B.x,i,0,r,i,i),B.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.bJr)
l.push(B.ay)
l.push(A.d(h.a.d,i,i,i,i,i,i,B.a6p,B.L,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=A.m(18)
k=A.I(B.ft,B.r,4)
B.d.v(l,A.a([B.ay,D.f2F,B.P,A.p(i,A.d(r,i,i,i,i,i,i,D.eUz,B.L,i,i),B.f,i,i,new A.o(B.c,i,k,n,i,i,B.n),i,i,i,i,B.WF,i,i,1/0)],g))}B.d.v(l,A.a([B.ac,A.d(h.a.e,i,i,i,i,i,i,D.eX9,B.L,i,i)],g))
l.push(B.dZ)
r=A.D(A.dW(D.f0g,h.a.r,A.dd(i,i,i,i,i,i,i,i,i,B.c,i,i,B.ce,i,i,D.aUo,i,i,i,i)),1)
h=h.a
n=h.w
l.push(A.A(A.a([r,B.aw,A.D(A.bI(G.aO5,n,A.bk(B.c,i,i,i,h.c?B.ft:B.f0,i,B.ce,i,i,i,i,i)),1)],g),B.m,i,B.e,B.j,0,i,i))
w.push(A.e9(B.A,A.p(i,A.v(l,B.m,i,B.e,B.Q,0,B.p),B.f,i,i,new A.o(i,i,o,p,m,new A.a6(B.ax,B.aC,B.x,q,i,i),B.n),i,i,i,B.a8,B.ag8,i,i,s),1+t*0.02,i,i))
return new A.an(B.A,i,B.a9,B.f,w,i)},
$S:110}
C.d8r.prototype={
$1(d){var w=null,v=d.a,u=d.b
return A.ao(w,A.db(A.eA(B.A,d.d,A.V(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.c7F.prototype={
$2(d,e){var w=null,v=this.a,u=C.htd(A.Kb(v.c,v.d))
return A.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1648}
C.c7E.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:67}
C.bXl.prototype={
$0(){},
$S:0}
C.f9i.prototype={
$1(d){return B.o.u(d)},
$S:77}
C.dKm.prototype={
$0(){return this.a.y=!0},
$S:0}
C.dKn.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.dKo.prototype={
$0(){var w=this.a
return w.w=D.Pl[w.d.aD(5)]},
$S:0}
C.dKp.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.dKq.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.dKr.prototype={
$0(){var w=this.a
return w.m(new C.dKl(w))},
$S:0}
C.dKl.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dKs.prototype={
$0(){var w=this.a
return w.m(new C.dKk(w))},
$S:0}
C.dKk.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dKv.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.dKw.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&B.a.i(t.e.a.a).length===0?B.bl:A.Y(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),r=A.m(10)
t=t.y?u:new C.dKu(t,d)
w=A.m(10)
v=B.k.aa(d,0)
return A.D(new A.C(B.jo,A.aF(!1,B.a1,!0,r,A.aK(!1,w,!0,new A.a5(u,38,A.av(A.d("$"+v,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),B.f,s,0,u,u,u,u,u,B.ae),u),1)},
$S:1649}
C.dKu.prototype={
$0(){var w=this.a
return w.m(new C.dKt(w,this.b))},
$S:0}
C.dKt.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bM(0,B.c3)},
$S:0}
C.dRJ.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+B.cS.gct().aI(this.c)},
$S:0}
C.dRK.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.dRF.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=A.m(14),s=u?B.c.j(0.1):B.K,r=A.I(u?D.eG.j(0.5):B.K,B.r,1),q=A.V(e,u?D.eG:B.aA,w,w,w,20)
return A.D(A.aE(w,A.dh(w,A.A(A.a([q,B.bp,A.d(f,w,w,w,w,w,w,A.l(w,w,u?B.c:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.b9,B.j,0,w,w),w,w,B.bc,new A.o(s,w,r,t,w,w,B.n),B.a1,w,46,w,w,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dRH(v,d),w,w,w,w,w,w,!1,B.aa),1)},
$S:1650}
C.dRH.prototype={
$0(){var w=this.a
return w.m(new C.dRG(w,this.b))},
$S:0}
C.dRG.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dRI.prototype={
$0(){var w=this.a,v=w.d===B.kh?"Cash App tag":"Bitcoin address"
return w.I_(this.b,v)},
$S:0}
C.dRE.prototype={
$0(){var w=this.a
return w.I_(w.gapv(),"Code")},
$S:0}
C.c6v.prototype={
$1(d){return C.hpq(A.a0(d,x.N,x.z))},
$S:z+20}
C.c6w.prototype={
$2(d,e){return d.c.aL(0,e.c)},
$S:z+6}
C.c6s.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.c6t.prototype={
$2(d,e){return d.c.aL(0,e.c)},
$S:z+6}
C.c6u.prototype={
$1(d){return d.ad()},
$S:z+23}
C.c6x.prototype={
$1(d){var w=d.c
return!w.cW(this.a.bN(-36e8))&&!w.c9(this.b)},
$S:z+7}
C.bZJ.prototype={
$1(d){return C.hpr(A.a0(d,x.N,x.z))},
$S:z+24}
C.bZK.prototype={
$2(d,e){return e.b.aL(0,d.b)},
$S:z+8}
C.bZH.prototype={
$1(d){return d.ad()},
$S:z+26}
C.bZI.prototype={
$2(d,e){return e.b.aL(0,d.b)},
$S:z+8}
C.bZM.prototype={
$1(d){var w=d.b
return!w.cW(this.a)&&!w.c9(this.b)},
$S:z+27}
C.c6E.prototype={
$1(d){return d.ad()},
$S:z+28}
C.c6D.prototype={
$1(d){return C.fZG(A.a0(x.f.a(d),x.N,x.z))},
$S:z+29}
C.c6C.prototype={
$1(d){return d.ad()},
$S:z+30}
C.c6B.prototype={
$1(d){return C.hsS(A.a0(x.f.a(d),x.N,x.z))},
$S:z+31}
C.c6G.prototype={
$1(d){return C.hsR(A.a0(x.f.a(d),x.N,x.z))},
$S:z+32}
C.c6H.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+2}
C.c6I.prototype={
$1(d){return d.ad()},
$S:z+34}
C.dVo.prototype={
$1(d){return d.b8c(A.bl(d.e,!0,x.u))},
$S:z+36}
C.dVp.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+2}
C.dVi.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dVj.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dV1.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.J(w,this.b)},
$S:0}
C.dV2.prototype={
$1(d){return new C.Os(this.a,null)},
$S:z+9}
C.dV3.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=B.d.bf(t,new C.dV0(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){B.d.cw(u.d,w)
u.I8()}},
$S:0}
C.dV0.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dVf.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(A.E(["role","admin","text",this.b],w,w))},
$S:0}
C.dVg.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(A.E(["role","ai","text",v],t,t))}else{v=t.d
v===$&&A.c()
t.d=C.hT_(v,w[0],w[3])
t.I8()
t=w[2]
if(t==null)t="Created "+J.ab(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(A.E(["role","ai","text",t],w,w))}},
$S:0}
C.dVh.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=B.d.gcX(v).Q
v.toString
w.hT(v)}},
$S:8}
C.dV9.prototype={
$1(d){return new C.Os(this.a,null)},
$S:z+9}
C.dVa.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dV8.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cw(w,this.b)},
$S:0}
C.dVe.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&A.c()
v=B.d.cw(w,s)
B.d.cm(t.d,u.a,v)
t.I8()},
$S:0}
C.dVd.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
return new C.ZG(u[w],new C.dVc(v,w),null)},
$S:z+59}
C.dVc.prototype={
$1(d){var w=this.a
return w.m(new C.dVb(w,this.b,d))},
$S:z+40}
C.dVb.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dV5.prototype={
$0(){var w=this.a
return w.m(new C.dV4(w))},
$S:0}
C.dV4.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dV6.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?B.cm:B.aJ
return new A.C(B.f2,A.d(t+": "+A.t(s),w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?B.a4:B.cs,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:109}
C.dV7.prototype={
$1(d){return this.a.a_M()},
$S:2}
C.dVn.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.rK:B.c
u=A.m(16)
t=A.m(16)
s=l?B.aJ:B.aK
r=w.d
q=A.b0(r).j(0.15)
p=A.m(12)
q=A.p(n,A.V(B.aiJ,l?B.bI:B.ak,n,n,n,20),B.f,n,n,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.bR,n,n,n)
p=A.b0(r).j(0.12)
o=A.m(8)
o=A.p(n,A.V(w.c,A.b0(r),n,n,n,18),B.f,n,n,new A.o(p,n,n,o,n,n,B.n),n,n,n,n,B.ht,n,n,n)
r=A.A(A.a([o,B.aw,A.D(A.d(w.b,n,n,n,n,n,n,A.l(n,n,l?B.aP:B.M,n,n,n,n,n,n,n,n,n,n,n,B.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),B.m,n,B.e,B.j,0,n,n)
p=w.e.length
return new A.C(B.d8,A.aF(!1,B.a1,!0,u,A.dO(!1,n,n,n,!0,n,n,n,!0,n,new H.asE(q,e,!0,n),n,n,n,n,new C.dVk(m,e),!1,n,n,new A.b7(t,new A.aA(s,1,B.r,-1)),n,n,A.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,A.l(n,n,l?B.bI:B.ak,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,A.Be(n,n,n,new C.dVl(),B.J,new C.dVm(m,e),B.cl,n,x.N),n),B.f,v,0,n,n,n,n,n,B.ae),new A.cz(w.a,x.W))},
$S:109}
C.dVm.prototype={
$1(d){var w=this
if(d==="edit")w.a.a8r(w.b)
if(d==="questions")w.a.Xg(w.b)
if(d==="delete")w.a.bGg(w.b)},
$S:2}
C.dVl.prototype={
$1(d){return D.cAV},
$S:137}
C.dVk.prototype={
$0(){return this.a.Xg(this.b)},
$S:0}
C.cIa.prototype={
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
return A.aK(!1,s,!0,A.p(s,A.V(d,A.b0(t),s,s,s,s),B.f,s,s,new A.o(q,s,u,v,s,s,B.n),s,s,s,s,B.cl,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cI9(r,d),s,s,s,s,s,s,s)},
$S:1651}
C.cI9.prototype={
$0(){var w=this.a
return w.m(new C.cI7(w,this.b))},
$S:0}
C.cI7.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cIb.prototype={
$1(d){var w=null,v=this.a,u=A.b0(d),t=v.f
t===$&&A.c()
return A.aE(w,A.ho(u,w,t===d?D.bGX:w,w,14),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cI8(v,d),w,w,w,w,w,w,!1,B.aa)},
$S:448}
C.cI8.prototype={
$0(){var w=this.a
return w.m(new C.cI6(w,this.b))},
$S:0}
C.cI6.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cIc.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.cId.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=B.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&A.c()
v=v.f
v===$&&A.c()
t=u.cCH(v,w,t)
A.a4(this.b,!1).N(t)
return null},
$S:0}
C.eHP.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return w.push(this.b)},
$S:0}
C.eHQ.prototype={
$1(d){return new C.ZF(this.a,null)},
$S:z+41}
C.eHW.prototype={
$2(d,e){return B.P},
$S:36}
C.eHV.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.rK:B.c
u=A.m(14)
t=A.m(14)
s=l?B.aJ:B.aK
r=w.d
if(r!=null&&r.length!==0){q=A.m(8)
r=A.bv(q,K.aNG(n,B.bQ,36,B.pp,l?B.bI:B.ak,r,48),B.ap)}else r=A.V(D.YS,A.b0(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=A.d(q,n,2,B.a2,n,n,n,A.l(n,n,l?B.aP:B.M,n,n,n,n,n,n,n,n,n,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ab(w.c)
o=w.e?" \xb7 Printable":""
return A.aF(!1,B.a1,!0,u,A.dO(!1,n,n,n,!0,n,n,n,!0,n,r,n,n,n,n,new C.eHT(m,w,e),!1,n,n,new A.b7(t,new A.aA(s,1,B.r,-1)),n,n,A.d(""+p+" block(s)"+o,n,n,n,n,n,n,A.l(n,n,l?B.bI:B.ak,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,A.aH(n,n,n,n,D.bFn,n,n,n,new C.eHU(m,e),n,n,n,n,n,n),n),B.f,v,0,n,n,n,n,n,B.ae)},
$S:76}
C.eHU.prototype={
$0(){var w=this.a
w.m(new C.eHR(w,this.b))
w.auP()},
$S:0}
C.eHR.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cw(w,this.b)},
$S:0}
C.eHT.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.aXR(u.b),$async$$0)
case 2:s=e
if(s!=null){t.m(new C.eHS(t,u.c,s))
t.auP()}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eHS.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eHL.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eHJ.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
return new C.Uc(w,"Answer Document",null)},
$S:z+42}
C.eHK.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eHN.prototype={
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
C.eHO.prototype={
$1(d){var w=this.a
return w.m(new C.eHM(w,d))},
$S:9}
C.eHM.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.c6y.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fqU.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dVZ.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.dVF.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,new C.lq("image","",this.b,null))},
$S:0}
C.dVK.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,new C.lq("video","","data:video/mp4;base64,"+B.cS.gct().aI(this.b),null))},
$S:0}
C.dVI.prototype={
$1(d){var w=null,v=x.p,u=A.v(A.a([A.aL(w,B.T,!1,w,!0,B.q,w,A.aM(),this.a,w,w,w,w,w,2,D.bLh,B.y,!0,w,!0,w,!1,w,B.ag,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.am,w,w,w,w),A.aL(w,B.T,!1,w,!0,B.q,w,A.aM(),this.b,w,w,w,w,w,2,D.bLg,B.y,!0,w,!0,w,!1,w,B.ag,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.am,w,w,w,w)],v),B.m,w,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bJ(!1,B.dd,w,w,!0,w,w,new C.dVG(d),w,w),A.bI(D.fc4,new C.dVH(d),w)],v),w,w,w,u,w,w,w,w,D.f_D,w)},
$S:19}
C.dVG.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.dVH.prototype={
$0(){A.a4(this.a,!1).N(!0)
return null},
$S:0}
C.dVJ.prototype={
$0(){var w,v=this.a.e
v===$&&A.c()
w=B.a.i(this.b.a.a)
return B.d.J(v,new C.lq("link","",B.a.i(this.c.a.a),w))},
$S:0}
C.dVB.prototype={
$1(d){return B.a.i(d)},
$S:13}
C.dVC.prototype={
$1(d){return d.length!==0},
$S:3}
C.dVD.prototype={
$1(d){return B.a.i(B.a.e5(d,A.af("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.dVE.prototype={
$1(d){return d.length!==0},
$S:3}
C.dVP.prototype={
$0(){var w=this.a.bzG()
A.a4(this.b,!1).N(w)
return null},
$S:0}
C.dVQ.prototype={
$0(){return this.a.auQ("**","**")},
$S:0}
C.dVR.prototype={
$0(){return this.a.auQ("*","*")},
$S:0}
C.dVS.prototype={
$0(){return this.a.auQ("__","__")},
$S:0}
C.dVT.prototype={
$0(){return this.a.aW3("## Section title")},
$S:0}
C.dVU.prototype={
$0(){return this.a.aW3("\u2022 First point\n\u2022 Second point")},
$S:0}
C.dVV.prototype={
$0(){},
$S:0}
C.dVW.prototype={
$0(){var w=this.a
w.m(new C.dVO(w))},
$S:0}
C.dVO.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,D.dqn)},
$S:0}
C.dVX.prototype={
$0(){var w=this.a
w.m(new C.dVN(w))},
$S:0}
C.dVN.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,D.dqo)},
$S:0}
C.dVY.prototype={
$1(d){var w,v,u=null,t=d.b,s=t.a
A:{if("image"===s){w="Image"
break A}if("video"===s){w="Video"
break A}if("link"===s){w=t.d
if(w==null)w="Link"
break A}if("signature"===s){w="Signature"
break A}w=s
break A}v=this.b.a
w=A.d(w,u,u,u,u,u,u,A.l(u,u,v?B.iK:B.az,u,u,u,u,u,u,u,u,11,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
v=v?B.cC:B.iH
return A.CG(u,v,B.akZ,w,u,new C.dVM(this.a,d),u)},
$S:z+45}
C.dVM.prototype={
$0(){var w=this.a
return w.m(new C.dVL(w,this.b))},
$S:0}
C.dVL.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.cw(w,this.b.a)},
$S:0}
C.dVy.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.aR_},
$S:0}
C.dVz.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.fze},
$S:0}
C.dVq.prototype={
$0(){var w=this.a
w.d=D.aQZ
w.f=w.e=null},
$S:0}
C.dVr.prototype={
$0(){var w=this.a
w.d=D.aR_
w.f=null},
$S:0}
C.dVA.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+2}
C.dVt.prototype={
$2(d,e){var w=this.a,v=w.gb2r()[e]
return new C.aar(v,this.b,new C.dVs(w,v),null)},
$S:z+46}
C.dVs.prototype={
$0(){return this.a.c21(this.b.a)},
$S:0}
C.dVv.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+47}
C.dVx.prototype={
$2(d,e){return B.S},
$S:36}
C.dVw.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.rK:B.c,p=A.m(16),o=A.m(16),n=A.m(16),m=A.I(r?B.aJ:B.aK,B.r,1),l=A.a([new A.ac(0,B.G,B.w.j(r?0.28:0.06),B.dz,8)],x.V),k=A.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=A.m(10)
v=A.m(10)
k.push(A.bv(w,K.aNG(v,B.bQ,52,D.YS,r?B.bI:B.ak,j,52),B.ap))}else{j=u.d.d
w=A.b0(j).j(0.15)
v=A.m(12)
k.push(A.p(t,A.V(D.YS,A.b0(j),t,t,t,24),B.f,t,t,new A.o(w,t,t,v,t,t,B.n),t,52,t,t,t,t,t,52))}k.push(B.bd)
k.push(A.D(A.d(s.b,t,t,t,t,t,t,A.l(t,t,r?B.aP:B.M,t,t,t,t,t,t,t,t,13,t,t,B.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(A.V(B.ed,r?B.bI:B.ak,t,t,t,22))
return A.aF(!1,B.a1,!0,p,A.aK(!1,o,!0,A.p(t,A.A(k,B.m,t,B.e,B.j,0,t,t),B.f,t,t,new A.o(t,t,m,n,l,t,B.n),t,t,t,t,B.bm,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dVu(u.a,s),t,t,t,t,t,t,t),B.f,q,0,t,t,t,t,t,B.ae)},
$S:76}
C.dVu.prototype={
$0(){return this.a.c8J(this.b)},
$S:0}
C.c6A.prototype={
$1(d){return new C.aaj(d,this.a,null)},
$S:z+48}
C.cBR.prototype={
$0(){var w=this.a.c,v=w.c,u=A.oe(v==null?w.b:v)
if(u!=null)A.iO(u,B.fh,null)},
$S:0}
C.cBS.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.cBT.prototype={
$1(d){var w=null,v=this.a.d.a,u=A.d("\u2022  ",w,w,w,w,w,w,A.l(w,w,v?B.cm:B.aJ,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=B.a.i(d)
return new A.C(B.og,A.A(A.a([u,A.D(A.d(t,w,w,w,w,w,w,A.l(w,w,v?B.cm:B.aJ,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.F,w,B.e,B.j,0,w,w),w)},
$S:130}
C.dcK.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dcM.prototype={
$0(){return this.a.m(new C.dcL(this.b))},
$S:0}
C.dcL.prototype={
$0(){var w=this.a
return w.a.f?w.fX(0):w.pp(0)},
$S:0}
C.f92.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.dWc.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.BO)w.z=v
else w.Q=v},
$S:0}
C.dW3.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=B.d.gcX(v).Q
v.toString
w.lP(v,B.cp,B.eM)},
$S:8}
C.dW5.prototype={
$1(d){return J.q(d,"role")==="ai"},
$S:95}
C.dW6.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.E(["role","user","text",this.b],v,v))
w.d.bM(0,B.c3)
w.r=!0},
$S:0}
C.dW7.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.E(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.dW8.prototype={
$1(d){var w=J.a7(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+A.t(w.h(d,"text"))},
$S:150}
C.dW9.prototype={
$0(){var w=x.N
return this.a.f.push(A.E(["role","ai","text",this.b],w,w))},
$S:0}
C.dWa.prototype={
$0(){var w=x.N
return this.a.f.push(A.E(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.dWb.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dW4.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=A.mz(l,B.bA.j(0.9),l,l,l,l,l,2,l,l)
return new A.C(B.c0,A.A(A.a([new A.a5(22,22,k,l),B.aw,A.d("Writing full song\u2026",l,l,l,l,l,l,A.l(l,l,this.b?B.aA:B.dy,l,l,l,l,l,l,l,l,12,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),B.m,l,B.e,B.j,0,l,l),l)}w=k.f[e]
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
q=new A.a6(B.a3,B.a7,B.x,v?A.a([B.bj,B.M],q):A.a([B.c,B.aP],q),l,l)}p=A.a([new A.ac(0,B.G,(u?B.bA:B.aD).j(0.22),B.jb,14)],x.V)
o=A.I(B.c.j(u?0.2:0.08),B.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=B.c
else v=v?B.aK:B.bh
n=u?13.5:15
m=u?B.bi:B.cD
return new A.bK(t,l,l,A.p(l,A.d(w,l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?B.a4:B.cs,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,new A.aY(0,k.a.a*0.94,0,1/0),new A.o(l,l,o,new A.bt(B.jV,B.jV,new A.aX(s,s),new A.aX(r,r)),p,q,B.n),l,l,l,B.kz,B.j5,l,l,l),l)},
$S:42}
C.dWj.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&A.c()
w=m.x
w===$&&A.c()
v=A.m(22)
u=this.b
t=x.O
s=u?A.a([D.aba,B.M,B.nl],t):A.a([B.qm,B.qh,B.p5],t)
w=A.a([new A.ac(-4,B.G,B.aD.j(0.35+w*0.25),B.dp,28)],x.V)
r=A.I(B.c.j(u?0.08:0.5),B.r,1)
q=A.dj()
p=q.a
p.$flags&2&&A.ai(p)
p[11]=0.001
m=m.x
m===$&&A.c()
q.ft(m*0.08)
q=A.fr(B.A,A.p(o,D.bC7,B.f,o,o,new A.o(o,o,A.I(B.aM.j(0.6),B.r,2),o,o,D.e4l,B.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=A.nA(B.je,D.fgn,new C.dWg())
p=x.p
m=A.a([A.A(A.a([q,B.bd,A.D(A.v(A.a([m,A.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,A.l(o,o,u?B.aQ:B.aW,o,o,o,o,o,o,o,o,10,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),B.F,o,B.e,B.j,0,B.p),1)],p),B.m,o,B.e,B.j,0,o,o),B.ac,A.A(A.a([n.at9(D.BO,"Swahili","\ud83c\uddf9\ud83c\uddff",u),B.ab,n.at9(D.aD8,"English","\ud83c\uddec\ud83c\udde7",u),B.ab,n.at9(D.BP,"Mix","\ud83d\udd25",u)],p),B.m,o,B.e,B.j,0,o,o)],p)
if(n.x!==D.BP){t=A.a([B.P,n.crf(u)],p)
if(n.w){q=n.x===D.BO?D.a1C:D.a0P
p=A.T(q).k("J<1,r>")
q=A.B(new A.J(q,new C.dWh(n,u),p),p.k("aj.E"))
t.push(new A.C(B.kB,A.c5(B.bG,q,B.bx,6,6),o))}B.d.v(m,t)}else{t=A.a([B.bA.j(0.22),B.aD.j(0.12)],t)
q=A.m(12)
p=A.I(B.bA.j(0.45),B.r,1)
m.push(new A.C(B.kB,A.p(o,A.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,A.l(o,o,u?B.ii:B.kw,o,o,o,o,o,o,o,o,10,o,o,B.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),B.f,o,o,new A.o(o,o,p,q,o,new A.a6(B.a3,B.a7,B.x,t,o,o),B.n),o,o,o,o,B.bR,o,o,o),o))}m.push(B.P)
t=x.dc
n=A.B(new A.J(D.cXw,new C.dWi(n,u),t),t.k("aj.E"))
m.push(A.A(n,B.m,o,B.e,B.j,0,o,o))
return A.p(o,A.v(m,B.aj,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,r,v,w,new A.a6(B.ax,B.aC,B.x,s,o,o),B.n),o,o,o,I.af3,I.afi,o,o,o)},
$S:91}
C.dWg.prototype={
$1(d){return D.bOS.aw(0,d)},
$S:65}
C.dWh.prototype={
$1(d){return this.a.crg(d,this.b)},
$S:z+49}
C.dWi.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aDa?6:0,m=o?5:0,l=A.m(12)
if(o){w=this.b
v=w?B.aD.j(0.45):B.aD.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=B.w.j(w?0.25:0.05)
u=v
v=w
w=u}t=A.m(12)
p=p.r?q:new C.dWf(p,d)
s=C.hum(d)
if(o)r=B.c
else r=v?B.ad:B.bh
r=A.d(s,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.hun(d)
if(o)v=B.ad
else v=v?B.bZ:B.dy
return A.D(new A.C(new A.N(0,0,n,0),A.aF(!1,B.a1,!0,l,A.aK(!1,t,!0,new A.C(F.KW,A.v(A.a([r,A.d(s,q,q,q,q,q,q,A.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.e,B.j,0,B.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,w,m,q,q,q,q,q,B.ae),q),1)},
$S:z+50}
C.dWf.prototype={
$0(){var w=this.a
return w.m(new C.dWe(w,this.b))},
$S:0}
C.dWe.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dWl.prototype={
$0(){var w=this.a
return w.m(new C.dWk(w))},
$S:0}
C.dWk.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dW2.prototype={
$0(){var w=this.a
return w.m(new C.dW1(w,this.b))},
$S:0}
C.dW1.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.BP
if(v===D.aD8&&w.Q==null)w.Q=B.d.gK(D.a0P).a},
$S:0}
C.dWm.prototype={
$0(){return this.a.cn0(this.b.a)},
$S:0}
C.dWd.prototype={
$0(){return this.a.I0(this.b)},
$S:0}
C.dW_.prototype={
$1(d){return this.a.aW4()},
$S:2}
C.dW0.prototype={
$0(){return this.a.aW4()},
$S:0}
C.fCV.prototype={
$1(d){var w=this
return new C.Yp(w.a,w.b,w.c,new C.fCU(w.d),null)},
$S:z+51}
C.fCU.prototype={
$0(){return J.lL(this.a.bb())},
$S:0}
C.da3.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.bd_()},
$S:27}
C.da4.prototype={
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
p=q?B.dS:B.h3
o=B.o.F(w,4)
q=q?B.aL:B.aI
return A.ao(n,A.db(A.V(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:309}
C.da9.prototype={
$0(){},
$S:0}
C.da8.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&A.c()
w=t.x
w===$&&A.c()
v=B.lP.av(0,B.k.D(w,0,1))
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793)
w=A.dj()
u=w.a
u.$flags&2&&A.ai(u)
u[11]=0.0028
w.ft(t*0.08)
w.jI(0.12)
return A.e9(B.A,A.fr(B.A,e,null,w,!0),0.5+v*0.5,null,null)},
$S:45}
C.da5.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=0.55+r*0.45
r=A.p(t,t,B.f,t,t,new A.o(t,t,t,t,A.a([new A.ac(6,B.G,B.aL.j(w*0.5),B.J,36)],x.V),t,B.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new A.an(B.A,t,B.a9,B.q,A.a([r,new A.a5(96,96,A.mz(B.c.j(0.08),B.aL,t,t,t,t,t,6,u/v,t),t),A.d(""+s.a.c,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,38,t,t,B.u,t,t,!0,t,t,t,t,t,A.a([new A.cP(B.aL.j(w),B.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:110}
C.da6.prototype={
$1(d){return D.bOW.aw(0,d)},
$S:65}
C.da7.prototype={
$0(){var w=this.a
w.a.bd_()
w.a.e.$0()},
$S:0}
C.c8y.prototype={
$1(d){var w=!1
if(B.a.i(d.b.toLowerCase())===this.a)if(d.d===B.fn)if(d.x===B.dr){w=d.w
w=B.a.i(w==null?"":w)===this.b}return w},
$S:16}
C.c8L.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e51.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.e5I.prototype={
$1(d){var w=this.a
if(w.c!=null)w.Oy()},
$S:8}
C.e5J.prototype={
$1(d){var w=$.aU.p2$
if(w===B.ru||w===B.rv)return
this.a.DT()},
$S:14}
C.e5K.prototype={
$1(d){this.a.ctl()},
$S:14}
C.e5q.prototype={
$0(){this.a.It(this.b.d,!1)},
$S:0}
C.e5r.prototype={
$0(){},
$S:0}
C.e5s.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.e5t.prototype={
$0(){},
$S:0}
C.e5u.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e5v.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.e5w.prototype={
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
C.e5l.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=A.bl(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=A.bl(v[1],!0,x.N)
w.NY()
w.a6C()},
$S:0}
C.e52.prototype={
$0(){this.b.It(this.c.d+this.a.a,!1)},
$S:0}
C.e5m.prototype={
$1(d){var w=d.d
return(w===B.fn||w===B.eJ)&&d.x===B.dr},
$S:16}
C.e5n.prototype={
$1(d){return d.a},
$S:157}
C.e5o.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e5p.prototype={
$0(){},
$S:0}
C.e56.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bl(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=A.bl(v[0],!0,x.N)},
$S:0}
C.e57.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.e5f.prototype={
$0(){},
$S:0}
C.e5c.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.e5d.prototype={
$0(){var w=this.a,v=A.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e5e.prototype={
$0(){var w=this.a,v=A.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e5g.prototype={
$0(){return this.a.z=!0},
$S:0}
C.e5h.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new A.v2(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.e5i.prototype={
$0(){return this.a.z=!1},
$S:0}
C.e5k.prototype={
$0(){var w=this.a
return w.m(new C.e5j(w))},
$S:0}
C.e5j.prototype={
$0(){return this.a.y=1},
$S:0}
C.e58.prototype={
$0(){return this.a.y=1},
$S:0}
C.e59.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.e5A.prototype={
$1(d){return d.a.length===0},
$S:16}
C.e5B.prototype={
$2(d,e){return e.y.aL(0,d.y)},
$S:71}
C.e5F.prototype={
$0(){var w=this.a
return w.m(new C.e5y(w))},
$S:0}
C.e5y.prototype={
$0(){return this.a.y=1},
$S:0}
C.e5G.prototype={
$0(){var w=this.a
return w.m(new C.e5x(w))},
$S:0}
C.e5x.prototype={
$0(){return this.a.y=2},
$S:0}
C.e5H.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.e5C.prototype={
$2$cloudRequest(d,e){return this.a.aXa(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1653}
C.e5D.prototype={
$0(){return this.a.DT()},
$S:1}
C.e5E.prototype={
$0(){var w=this.a
return w.m(new C.e5z(w))},
$S:0}
C.e5z.prototype={
$0(){var w=this.a
return w.y=B.o.D(w.y-1,0,2)},
$S:0}
C.e55.prototype={
$0(){A.eO()
var w=this.a
w.m(new C.e54(w))},
$S:0}
C.e54.prototype={
$0(){return this.a.y=0},
$S:0}
C.e53.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=A.bCj(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.c.j(0.55),B.r,1.2),t,A.a([new A.ac(1,B.G,B.av.j(0.55),B.J,18)],x.V),D.bN2,B.a6),t,t,t,t,t,t,t,t),B.et,B.t8,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=A.a([],w)
for(u=0;u<3;++u)v.push(r.bZa(u))
return new A.an(B.W,t,B.a9,B.q,A.a([q,A.A(v,B.m,t,B.e,B.j,0,t,t)],w),t)},
$S:64}
C.e5b.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
A.eO()
w.m(new C.e5a(w,v))},
$S:0}
C.e5a.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dex.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===B.fn||v===B.eJ)return!0
if(d.c!==0)v=B.a.t(w,"clock-in daily earnings")||B.a.t(w,"clock-in earnings")
else v=!1
return v},
$S:16}
C.dey.prototype={
$1(d){return new A.Q(Date.now(),0,!1)},
$S:676}
C.dez.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new A.Q(Date.now(),0,!1)
u=A.dy(C.fK3(v.c,u))
w=this.c?new C.dew(v):null
return v.b4b(this.b,B.pz,D.eG,w,"Today","$"+u,D.eG)},
$S:1655}
C.dew.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.deA.prototype={
$2(d,e){var w=this.a
return w.b4b(this.b,B.jO,B.c8,w.w,"Balance","$"+A.dy(A.Kb(w.c.a,new C.dev(w))),B.cx)},
$S:58}
C.dev.prototype={
$0(){return this.a.c.d},
$S:79}
C.deq.prototype={
$0(){this.a.a.cKk()
return null},
$S:0}
C.der.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(w,w,w,new C.bsS(v,w),B.at)},
$S:69}
C.des.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b96(v,!0,B.av,D.o4,w)}else{v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b95(v,D.o4,w)}return A.b3(w,w,w,v,B.at)},
$S:69}
C.det.prototype={
$1(d){return new A.Q(Date.now(),0,!1)},
$S:676}
C.deu.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new A.Q(Date.now(),0,!1)
w=r.a
v=w.a.cJ7(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:B.k.D(v/u,0,1)}u=w.d
u===$&&A.c()
s=w.e
s===$&&A.c()
return A.c6(new A.h2(A.a([u,s],x.U)),new C.dep(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1656}
C.dep.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=A.a([],m),k=o.b
if(k)B.d.v(l,A.ip(7,new C.deo(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&A.c()
v=v.x
v===$&&A.c()
u=o.d
l.push(A.b3(n,n,n,new C.b94(o.c,v,k,u,D.o4,D.bg3,n),D.eCw))
v=A.I(B.c.j(0.1),B.r,1.2)
if(k)t=B.v4
else t=o.e?B.uX:D.bxi
t=A.V(t,k?D.o4:B.b4,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=A.d(s,n,n,n,n,n,n,A.l(n,n,B.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,B.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+A.dy(w.f&&w.d>0?w.d:o.f)}q=k?D.o4:B.c
w=A.d(w,n,n,n,n,n,n,A.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,B.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=A.m(999)
p=u.j(0.16)
u=A.I(u.j(0.5),B.r,1)
l.push(A.p(n,A.v(A.a([t,B.ao,s,B.au,w,B.P,A.p(n,A.d(o.r,n,n,n,n,n,n,A.l(n,n,k?D.o4:B.oa,n,n,n,n,n,n,n,n,9,n,n,B.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),B.f,n,n,new A.o(p,n,u,q,n,n,B.n),n,n,n,n,B.kC,n,n,n)],m),B.m,n,B.b9,B.j,0,B.p),B.f,n,n,new A.o(B.K,n,v,n,n,n,B.a6),n,176,n,n,n,n,n,176))
return A.av(new A.a5(276,276,new A.an(B.A,n,B.a9,B.f,l,n),n),n,n,n)},
$S:204}
C.deo.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=B.k.F(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=B.o.F(d,3)
t=B.o.F(d,2)
return A.ao(s,A.e2(A.db(A.p(s,s,B.f,s,s,new A.o(s,s,s,A.m(40),s,new A.bS(B.A,0.5,B.x,s,0,A.a([D.o4.j(0.38),B.c.j(0.08),B.K],x.O),s,s),B.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),!0,s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:222}
C.deR.prototype={
$0(){},
$S:0}
C.deS.prototype={
$0(){},
$S:0}
C.deT.prototype={
$1(d){return d.x===B.dr},
$S:16}
C.deD.prototype={
$0(){return this.a.a.d.d},
$S:79}
C.deC.prototype={
$0(){var w,v
A.eO()
w=this.a
v=this.b
w.m(new C.deB(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)A.fe(null,x.H)}},
$S:0}
C.deB.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.deO.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=A.m(12),q=s?w.b.j(0.18):B.c.j(0.04),p=A.I(s?w.b.j(0.7):B.c.j(0.08),B.r,1)
return A.D(new A.C(B.jo,A.aE(v,A.dh(B.A,A.d("$"+t,v,v,v,v,v,v,A.l(v,v,s?w.b:B.ad,v,v,v,v,v,v,v,v,13,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,B.bc,new A.o(q,v,p,r,v,v,B.n),B.hV,v,38,v,v,v,v,v),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.deQ(u,d),v,v,v,v,v,v,!1,B.aa),v),1)},
$S:1658}
C.deQ.prototype={
$0(){A.eO()
var w=this.a
w.m(new C.deP(w,this.b))},
$S:0}
C.deP.prototype={
$0(){var w=""+this.b
this.a.d.saU(0,w)
return w},
$S:0}
C.deN.prototype={
$4$bold$color(d,e,f,g){var w=null,v=A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?B.c:g,t=f?15:13
return new A.C(B.Ae,A.A(A.a([v,B.b8,A.d(e,w,w,w,w,w,w,A.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?B.u:B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1659}
C.deM.prototype={
$1(d){return this.a.m(new C.deL())},
$S:2}
C.deL.prototype={
$0(){},
$S:0}
C.deG.prototype={
$1(d){return this.a.aT_(d)&&!A.fRr(d)},
$S:16}
C.deH.prototype={
$2(d,e){return e.y.aL(0,d.y)},
$S:71}
C.deI.prototype={
$0(){return this.a.a.d.d},
$S:79}
C.deJ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return A.b(x.r.b(s)?s:A.dR(s,x.H),$async$$0)
case 2:if(t.c!=null)t.m(new C.deF())
t.lL("Balance refreshed.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.deF.prototype={
$0(){},
$S:0}
C.deK.prototype={
$0(){var w=this.a
return w.m(new C.deE(w))},
$S:0}
C.deE.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fmT.prototype={
$2(d,e){return e.y.aL(0,d.y)},
$S:71}
C.fgO.prototype={
$1(d){var w=J.a7(d),v=w.h(d,"toEmail"),u=!1
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.y(v,this.b)){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fxg.prototype={
$1(d){var w=J.a7(d),v=w.h(d,"toEmail")
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fgN.prototype={
$1(d){var w,v,u
if(!C.hPR(d,this.a))return!1
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
C.f6A.prototype={
$1(d){var w=this.a
if(B.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:75}
C.fw5.prototype={
$0(){return $.fP1=null},
$S:11}
C.fw6.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:7}
C.fu0.prototype={
$1(d){return A.a0(d,x.N,x.z)},
$S:7}
C.fu1.prototype={
$0(){var w,v=this.a
$.fOQ.W(0,v)
w=C.tC(this.b,v)
if(w!=null)A.PM(A.a([A.a0(w,x.N,x.z)],x._),v)},
$S:0}
C.fym.prototype={
$1(d){return new C.Zc(this.a,this.b,null)},
$S:z+56}
C.e_h.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.e_k.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.e_l.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.m(new C.e_j(w))},
$S:2}
C.e_j.prototype={
$0(){return this.a.f=""},
$S:0}
C.e_m.prototype={
$1(d){return this.a.aWi()},
$S:2}
C.e_n.prototype={
$0(){var w=this.a
return w.m(new C.e_i(w,this.b))},
$S:0}
C.e_i.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ffZ.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+B.a.b_(d,1)},
$S:13}
C.ffY.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+B.a.b_(d,1)},
$S:13}
C.fwm.prototype={
$1(d){var w,v=x.f
if(v.b(d))return A.a0(d,x.N,x.z)
try{v=A.a0(v.a(d.ad()),x.N,x.z)
return v}catch(w){return A.U(x.N,x.z)}},
$S:12}
C.fwn.prototype={
$1(d){return J.cw(d)},
$S:4}
C.fqh.prototype={
$1(d){return d.a!=="send_email"},
$S:278}
C.fvO.prototype={
$1(d){var w=null,v=B.w.j(0.35),u=A.m(10),t=A.I(B.b7,B.r,1)
return A.p(B.A,A.d(d,w,w,w,w,w,w,B.iU,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,86,w,B.eX,w,w,w,72)},
$S:678}
C.caj.prototype={
$1(d){return J.k(d)},
$S:17}
C.cak.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b6(d,new C.cai(),x.S)
w=A.B(w,w.$ti.k("aj.E"))
return w}return A.c1(7,0,!1,x.S)},
$S:679}
C.cai.prototype={
$1(d){var w
if(A.iD(d))w=d
else{w=A.c7(J.k(d),null)
if(w==null)w=0}return w},
$S:415}
C.cal.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b6(d,new C.cah(),x.S)
w=A.B(w,w.$ti.k("aj.E"))
return w}return A.c1(8,0,!1,x.S)},
$S:679}
C.cah.prototype={
$1(d){var w
if(A.iD(d))w=d
else{w=A.c7(J.k(d),null)
if(w==null)w=0}return w},
$S:415}
C.can.prototype={
$1(d){return A.bl(d,!0,x.S)},
$S:680}
C.cao.prototype={
$1(d){return A.bl(d,!0,x.S)},
$S:680}
C.cag.prototype={
$1(d){var w=this.a
if(B.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:75}
C.cam.prototype={
$2(d,e){return d+e},
$S:74}
C.caf.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.q(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:74}
C.fhr.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fhl.prototype={
$0(){return this.a.$1(D.pI)},
$S:0}
C.fhm.prototype={
$0(){return this.a.$1(D.pI)},
$S:0}
C.fhn.prototype={
$0(){return this.a.$1(D.pI)},
$S:0}
C.fho.prototype={
$0(){return this.a.$1(D.pI)},
$S:0}
C.fhp.prototype={
$0(){return this.a.$1(D.pI)},
$S:0}
C.fhq.prototype={
$0(){return this.a.$1(D.pI)},
$S:0}
C.f3W.prototype={
$2(d,e){var w,v,u=this,t=null,s=B.o.an(e,8),r=B.o.F(e,8),q=B.o.F(s+r,2),p=u.a,o=J.q(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.Vn:D.b59
if(o===0)w=t
else{w=x.O
w=o===1?A.a([B.c,B.aK],w):A.a([B.bj,B.w],w)
v=n?B.aM:B.dl
w=A.p(t,t,B.f,t,t,new A.o(t,t,A.I(v,B.r,n?3:1),t,A.a([new A.ac(0,B.G,B.w.j(0.35),B.dz,4)],x.V),new A.bS(B.A,0.5,B.x,t,0,w,t,t),B.a6),t,28,t,t,t,t,t,28)}return A.aE(t,A.p(t,A.av(w,t,t,t),B.f,q,t,t,t,t,t,t,t,t,t,t),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f3V(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,B.aa)},
$S:72}
C.f3V.prototype={
$0(){var w=this,v=w.a,u=v.cOW(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.pI:D.GT
w.f.$1(v)}},
$S:0}
C.fg8.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new A.a5(u,u,A.ib(!0,v,v,B.y,Q.aLu,new C.fg7(w.a,w.b,w.c,w.d,u),9,v,B.dP,B.ai,!1),v)},
$S:171}
C.fg7.prototype={
$2(d,e){var w=this,v=null,u=A.m(12),t=A.m(12),s=w.a,r=s.at[e],q=r==="X"?B.aV:B.aE
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.av(A.d(r,v,v,v,v,v,v,A.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fg6(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),B.f,B.fs,0,v,v,v,v,v,B.ae)},
$S:76}
C.fg6.prototype={
$0(){var w=this,v=w.a.cOX(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.f3m.prototype={
$1(d){return new A.C(B.jo,C.ftS(d,!1),null)},
$S:304}
C.f3n.prototype={
$1(d){return C.ftS(d,!1)},
$S:1663}
C.f3o.prototype={
$0(){var w=this,v=w.a
v.cza(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.f3p.prototype={
$0(){var w=this
w.a.czb(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.fdl.prototype={
$1(d){var w=this,v=null,u=d*6
return A.mw(v,B.bj,A.d(""+u,v,v,v,v,v,v,B.cc,v,v,v),B.dj,new C.fdk(w.a,w.b,u,w.c,w.d),v,v,new A.aA(B.c.j(0.2),1,B.r,-1),v)},
$S:1664}
C.fdk.prototype={
$0(){var w=this,v=w.a,u=w.b.aD(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.fff.prototype={
$1(d){return D.d06[d]},
$S:77}
C.ffg.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=A.a([s.aD(6),s.aD(6),s.aD(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.fc5.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.fc6.prototype={
$0(){var w=this,v=w.a
if(w.b.ai()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.f4o.prototype={
$0(){var w=this,v=w.a.cEI(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.f4n.prototype={
$1(d){var w,v=null,u=J.q(this.a.fr[5-d],this.b)
if(u===0)w=B.lY
else w=u===1?B.dC:B.qY
return new A.fF(1,A.p(v,v,B.f,v,v,new A.o(w,v,A.I(B.bE,B.r,1),v,v,v,B.a6),v,v,v,B.mP,v,v,v,v),v)},
$S:1665}
C.fci.prototype={
$1(d){var w=this
if(w.a.b7A(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.fcj.prototype={
$0(){var w=this
if(w.a.b7A(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.f3Q.prototype={
$0(){var w=this
if(w.a.ai()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.flT.prototype={
$1(d){var w=J.q(d,"email")
return B.a.t(B.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.flU.prototype={
$1(d){var w,v=J.a7(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=B.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+B.a.i(J.k(v==null?"":v))+">"},
$S:52}
C.ewZ.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aIG.prototype
w.bqb=w.a_
w.bqa=w.q
w=C.aIH.prototype
w.bqd=w.a_
w.bqc=w.q
w=C.aII.prototype
w.bqf=w.a_
w.bqe=w.q
w=C.aJE.prototype
w.brd=w.a_
w.brc=w.q
w=C.aJd.prototype
w.bqM=w.q
w=C.aJN.prototype
w.brm=w.q
w=C.aIJ.prototype
w.bqg=w.q
w=C.aJV.prototype
w.brv=w.q
w=C.aIO.prototype
w.bql=w.q
w=C.aJ3.prototype
w.bqC=w.q
w=C.aKB.prototype
w.bsb=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.ayt.prototype,"gbLG","bLH",19)
v(q,"gaPw","aPx",1)
v(C.ays.prototype,"gcqi","a0y",1)
v(q=C.ayu.prototype,"gbR_","bR0",1)
v(q,"gbBn","bBo",1)
v(q=C.avF.prototype,"gcjB","cjC",1)
v(q,"gc8h","P_",0)
v(q,"gcu9","cua",1)
v(q,"gcmy","mF",0)
w(q,"gccy","ccz",25)
w(q,"gcsw","QH",33)
v(q=C.aAA.prototype,"gbJO","W8",0)
v(q,"gbZL","XA",0)
v(q,"gbZI","Xz",0)
v(q,"gbZJ","abf",0)
v(q,"gbZK","O1",0)
v(C.axR.prototype,"gbZM","bZN",1)
u(C,"hX2","hsz",58)
t(C,"fRy",0,null,["$1","$0"],["hbd",function(){return C.hbd(null)}],3,0)
t(C,"bAM",0,null,["$1","$0"],["hbc",function(){return C.hbc(null)}],3,0)
v(C.M3.prototype,"gDD","c5v",1)
v(C.aBl.prototype,"gcjS","A6",0)
v(q=C.aBC.prototype,"gc8B","P1",0)
v(q,"gcdh","ZO",0)
v(q,"gc1W","c1X",1)
v(q=C.aBO.prototype,"gc20","ac9",0)
v(q,"gbva","a6s",0)
v(q,"gck5","a_M",0)
s(q,"gc6_","c60",35)
v(C.aDM.prototype,"gbvA","a6u",1)
v(q=C.aDL.prototype,"gc2_","ac8",0)
v(q,"gc7z","adb",0)
v(q=C.aBQ.prototype,"gbUF","aa5",0)
v(q,"gbUH","WM",0)
v(q,"gbUG","aa6",0)
v(q=C.aBP.prototype,"gbxV","bxW",1)
v(q,"gbxX","bxY",1)
v(C.aBR.prototype,"gbDB","bDC",1)
v(C.ayO.prototype,"gc22","c23",1)
v(q=C.aCc.prototype,"gaWc","c2i",1)
r(q,"gaX8",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["acP","avr","aXa","aX9"],52,0,0)
r(q,"gc5d",0,4,null,["$4"],["c5e"],53,0,0)
v(q,"gc7i","Z_",0)
v(q,"gc88","adj",0)
v(q,"gc84","adh",0)
v(q,"gbXw","aaQ",0)
w(C.azA.prototype,"gbWl","bWm",54)
w(q=C.azC.prototype,"gcro","crp",55)
v(q,"gcq9","cqa",1)
v(q,"gcxz","cxA",1)
v(C.aC_.prototype,"gc2D","aWi",1)
v(C.aCO.prototype,"gaWK","avd",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.jq,[C.coI,C.coF,C.coG,C.coH,C.coE,C.eST,C.eSR,C.eSV,C.eSS,C.faC,C.d6x,C.d6I,C.d6Q,C.d6R,C.d6T,C.d6L,C.d6J,C.d6K,C.d6M,C.d6N,C.d6D,C.d6E,C.d6C,C.d6G,C.d6H,C.d6A,C.d6z,C.d6V,C.d6Y,C.dKg,C.dKf,C.dKh,C.dKe,C.dKd,C.d6r,C.d6u,C.d6v,C.d6t,C.d6s,C.d8j,C.d8k,C.d8l,C.d7z,C.d7A,C.d83,C.d7P,C.d7Q,C.d7R,C.d7S,C.d7T,C.d71,C.d7y,C.d84,C.d8d,C.d81,C.d80,C.d7w,C.d7x,C.d89,C.d8a,C.d73,C.d74,C.d7I,C.d7J,C.d7K,C.d7H,C.d7U,C.d7V,C.d7W,C.d7X,C.d7Y,C.d7Z,C.d87,C.d7L,C.d7M,C.d7N,C.d7O,C.d8b,C.d8c,C.d75,C.d76,C.d77,C.d78,C.d85,C.d86,C.d7G,C.d8_,C.d7E,C.d8e,C.d8f,C.d8g,C.d7B,C.d7k,C.d7j,C.d7i,C.d7o,C.d7h,C.d7f,C.d7a,C.d7d,C.d79,C.d7t,C.d7u,C.d7b,C.dbQ,C.cz4,C.cyV,C.cyW,C.cze,C.czb,C.czc,C.czd,C.cz6,C.cz5,C.cyX,C.cz7,C.czx,C.czt,C.czs,C.cz2,C.cz3,C.cz_,C.cza,C.czi,C.czj,C.czk,C.czl,C.czm,C.czn,C.czo,C.czJ,C.czC,C.czz,C.czE,C.czB,C.czy,C.cyY,C.czv,C.dsk,C.dsl,C.dsb,C.ds9,C.dsj,C.ds8,C.ds7,C.dsa,C.dsf,C.dsg,C.dsd,C.dse,C.dsm,C.dsn,C.dso,C.dsp,C.eMK,C.eML,C.d1q,C.fmN,C.dyL,C.dyD,C.dyF,C.dyJ,C.dyE,C.dyG,C.dyH,C.c3e,C.ftQ,C.ftP,C.drX,C.drW,C.drY,C.drV,C.dRh,C.dRi,C.dRp,C.fC8,C.fC9,C.bXl,C.dKm,C.dKn,C.dKo,C.dKp,C.dKq,C.dKr,C.dKl,C.dKs,C.dKk,C.dKv,C.dKu,C.dKt,C.dRJ,C.dRK,C.dRH,C.dRG,C.dRI,C.dRE,C.dVi,C.dVj,C.dV1,C.dV3,C.dVf,C.dVg,C.dVa,C.dV8,C.dVe,C.dVb,C.dV5,C.dV4,C.dVk,C.cI9,C.cI7,C.cI8,C.cI6,C.cIc,C.cId,C.eHP,C.eHU,C.eHR,C.eHT,C.eHS,C.eHL,C.eHK,C.eHN,C.eHM,C.dVF,C.dVK,C.dVG,C.dVH,C.dVJ,C.dVP,C.dVQ,C.dVR,C.dVS,C.dVT,C.dVU,C.dVV,C.dVW,C.dVO,C.dVX,C.dVN,C.dVM,C.dVL,C.dVy,C.dVz,C.dVq,C.dVr,C.dVs,C.dVu,C.cBR,C.dcK,C.dcM,C.dcL,C.dWc,C.dW6,C.dW7,C.dW9,C.dWa,C.dWb,C.dWf,C.dWe,C.dWl,C.dWk,C.dW2,C.dW1,C.dWm,C.dWd,C.dW0,C.fCU,C.da9,C.da7,C.e51,C.e5q,C.e5r,C.e5s,C.e5t,C.e5v,C.e5w,C.e5l,C.e52,C.e5p,C.e56,C.e57,C.e5f,C.e5c,C.e5d,C.e5e,C.e5g,C.e5h,C.e5i,C.e5k,C.e5j,C.e58,C.e59,C.e5F,C.e5y,C.e5G,C.e5x,C.e5H,C.e5D,C.e5E,C.e5z,C.e55,C.e54,C.e5b,C.e5a,C.dew,C.dev,C.deq,C.deR,C.deS,C.deD,C.deC,C.deB,C.deQ,C.deP,C.deL,C.deI,C.deJ,C.deF,C.deK,C.deE,C.fw5,C.fu1,C.e_h,C.e_k,C.e_j,C.e_n,C.e_i,C.fhl,C.fhm,C.fhn,C.fho,C.fhp,C.fhq,C.f3V,C.fg6,C.f3o,C.f3p,C.fdk,C.ffg,C.fc6,C.f4o,C.fcj,C.f3Q,C.ewZ])
u(A.i7,[C.coJ,C.eSU,C.fqB,C.fqt,C.faz,C.fay,C.faB,C.d7_,C.d70,C.d6P,C.d6O,C.d6S,C.d6B,C.d6F,C.d6U,C.dKj,C.d6w,C.d8m,C.d8n,C.d8o,C.d8p,C.d8q,C.d82,C.d88,C.d72,C.d8i,C.d8h,C.d7l,C.d7m,C.d7n,C.d7p,C.d7r,C.dbR,C.czK,C.cz9,C.cz8,C.czr,C.czu,C.czq,C.cz0,C.czh,C.czf,C.czw,C.czg,C.czF,C.czD,C.czI,C.bW3,C.bW2,C.bW5,C.bW4,C.dsi,C.dsh,C.dsc,C.dsq,C.dsr,C.fdT,C.ff5,C.d1r,C.d1p,C.bWP,C.fmM,C.dyM,C.dyK,C.c3f,C.ffS,C.ftO,C.c5o,C.c5n,C.c5Q,C.dRf,C.dRg,C.fp9,C.foX,C.foW,C.fc9,C.c63,C.c64,C.c65,C.c62,C.c61,C.faj,C.fC4,C.fC5,C.fC6,C.fC7,C.fC3,C.dRm,C.dRn,C.dRl,C.fCa,C.d8r,C.c7E,C.f9i,C.dKw,C.dRF,C.c6v,C.c6s,C.c6u,C.c6x,C.bZJ,C.bZH,C.bZM,C.c6E,C.c6D,C.c6C,C.c6B,C.c6G,C.c6I,C.dVo,C.dV2,C.dV0,C.dVh,C.dV9,C.dVd,C.dVc,C.dV7,C.dVm,C.dVl,C.cIa,C.cIb,C.eHQ,C.eHJ,C.eHO,C.c6y,C.fqU,C.dVZ,C.dVI,C.dVB,C.dVC,C.dVD,C.dVE,C.dVY,C.c6A,C.cBS,C.cBT,C.f92,C.dW3,C.dW5,C.dW8,C.dWg,C.dWh,C.dWi,C.dW_,C.fCV,C.da3,C.da6,C.c8y,C.c8L,C.e5I,C.e5J,C.e5K,C.e5u,C.e5m,C.e5n,C.e5o,C.e5A,C.e5C,C.dex,C.dey,C.det,C.deo,C.deT,C.deO,C.deN,C.deM,C.deG,C.fgO,C.fxg,C.fgN,C.f6A,C.fw6,C.fu0,C.fym,C.e_l,C.e_m,C.ffZ,C.ffY,C.fwm,C.fwn,C.fqh,C.fvO,C.caj,C.cak,C.cai,C.cal,C.cah,C.can,C.cao,C.cag,C.fhr,C.f3m,C.f3n,C.fdl,C.fff,C.fc5,C.f4n,C.fci,C.flT,C.flU])
t(C.bp0,A.iN)
u(A.ag,[C.Ex,C.ajz,C.aBk,C.ajy,C.ajA,C.akq,C.agM,C.alY,C.YT,C.YU,C.Y0,C.ams,C.alX,C.MA,C.ayv,C.anp,C.ao2,C.Ub,C.Os,C.ZG,C.ZF,C.Uc,C.aol,C.azn,C.aoo,C.Yp,C.aoW,C.azz,C.azB,C.Zc,C.aqb])
u(A.ah,[C.aGg,C.aIH,C.aJE,C.aIG,C.aII,C.beo,C.avF,C.aAA,C.bgM,C.bgN,C.axR,C.bgT,C.aJd,C.aJN,C.aIJ,C.aBl,C.aBC,C.aBO,C.b8C,C.aDM,C.aDL,C.aBQ,C.aBP,C.beC,C.aJV,C.aIO,C.buO,C.aJ3,C.azC,C.aC_,C.aKB])
u(A.kD,[C.eSW,C.faA,C.d6y,C.d6Z,C.d6X,C.d6W,C.dKi,C.d7F,C.d7D,C.d7C,C.d7g,C.d7q,C.d7e,C.d7s,C.d7c,C.d7v,C.czp,C.cz1,C.czA,C.czH,C.czG,C.cyZ,C.d1o,C.dyI,C.ffT,C.ffU,C.dRj,C.fqw,C.fC2,C.dRo,C.dRr,C.dRq,C.d8s,C.c7F,C.c6w,C.c6t,C.bZK,C.bZI,C.c6H,C.dVp,C.dV6,C.dVn,C.eHW,C.eHV,C.dVA,C.dVt,C.dVv,C.dVx,C.dVw,C.dW4,C.dWj,C.da4,C.da8,C.da5,C.e5B,C.e53,C.dez,C.deA,C.der,C.des,C.deu,C.dep,C.deH,C.fmT,C.cam,C.caf,C.f3W,C.fg8,C.fg7])
t(C.atS,C.Ex)
u(A.aC,[C.qq,C.aci,C.M3,C.HL,C.r_,C.r0,C.lq,C.ie,C.i_,C.b6M,C.cZC,C.dcJ,C.r6,C.Ud,C.MN,C.px,C.aY9,C.oN,C.aph])
t(C.ayt,C.aIH)
t(C.bhc,C.aJE)
t(C.ays,C.aIG)
t(C.ayu,C.aII)
u(A.mq,[C.UX,C.azo,C.ap8,C.HQ,C.DU])
u(A.au,[C.a_e,C.bpw,C.ad3,C.P0,C.a5j,C.Ms,C.anX,C.abU,C.abT,C.aYZ,C.azm,C.aar,C.aYw,C.aaj,C.azA])
t(C.bgK,C.aJd)
t(C.bho,C.aJN)
t(C.bd7,C.aIJ)
t(C.aBR,C.aJV)
t(C.ayO,C.aIO)
t(C.aCc,C.buO)
t(C.bfk,C.aJ3)
u(A.nh,[C.b96,C.b95,C.b94,C.b8x,C.bsS,C.bnT])
t(C.aCO,C.aKB)
w(C.aIG,C.M3)
w(C.aIH,C.M3)
w(C.aII,C.M3)
w(C.aJE,C.M3)
w(C.aJd,A.eQ)
w(C.aJN,A.c8)
w(C.aIJ,A.c8)
w(C.aJV,A.c8)
w(C.aIO,A.eQ)
w(C.aJ3,A.eQ)
v(C.buO,A.eu)
w(C.aKB,A.c8)})()
A.kj(b.typeUniverse,JSON.parse('{"bp0":{"iN":[]},"Ex":{"ag":[],"r":[]},"aGg":{"ah":["Ex<1,2>"]},"atS":{"Ex":["1","hA<1>"],"ag":[],"r":[],"Ex.T":"1","Ex.S":"hA<1>"},"ajz":{"ag":[],"r":[]},"aBk":{"ag":[],"r":[]},"ajy":{"ag":[],"r":[]},"ajA":{"ag":[],"r":[]},"akq":{"ag":[],"r":[]},"agM":{"ag":[],"r":[]},"ayt":{"ah":["ajz"]},"bhc":{"ah":["aBk"]},"ays":{"ah":["ajy"]},"ayu":{"ah":["ajA"]},"beo":{"ah":["akq"]},"avF":{"ah":["agM"]},"alY":{"ag":[],"r":[]},"YT":{"ag":[],"r":[]},"YU":{"ag":[],"r":[]},"ad3":{"au":[],"r":[]},"Y0":{"ag":[],"r":[]},"aAA":{"ah":["alY"]},"a_e":{"au":[],"r":[]},"bpw":{"au":[],"r":[]},"bgM":{"ah":["YT"]},"bgN":{"ah":["YU"]},"P0":{"au":[],"r":[]},"axR":{"ah":["Y0"]},"ams":{"ag":[],"r":[]},"bgT":{"ah":["ams"]},"a5j":{"au":[],"r":[]},"alX":{"ag":[],"r":[]},"bgK":{"ah":["alX"]},"Ms":{"au":[],"r":[]},"anX":{"au":[],"r":[]},"MA":{"ag":[],"r":[]},"bho":{"ah":["MA"]},"abU":{"au":[],"r":[]},"abT":{"au":[],"r":[]},"ayv":{"ag":[],"r":[]},"bd7":{"ah":["ayv"]},"aYZ":{"au":[],"r":[]},"anp":{"ag":[],"r":[]},"aBl":{"ah":["anp"]},"ao2":{"ag":[],"r":[]},"aBC":{"ah":["ao2"]},"Ub":{"ag":[],"r":[]},"Os":{"ag":[],"r":[]},"ZG":{"ag":[],"r":[]},"ZF":{"ag":[],"r":[]},"aBO":{"ah":["Ub"]},"b8C":{"ah":["Os"]},"aDM":{"ah":["ZG"]},"aDL":{"ah":["ZF"]},"Uc":{"ag":[],"r":[]},"aBQ":{"ah":["Uc"]},"aol":{"ag":[],"r":[]},"aar":{"au":[],"r":[]},"aaj":{"au":[],"r":[]},"azn":{"ag":[],"r":[]},"aBP":{"ah":["aol"]},"azm":{"au":[],"r":[]},"aYw":{"au":[],"r":[]},"beC":{"ah":["azn"]},"aoo":{"ag":[],"r":[]},"aBR":{"ah":["aoo"]},"Yp":{"ag":[],"r":[]},"ayO":{"ah":["Yp"]},"aoW":{"ag":[],"r":[]},"azz":{"ag":[],"r":[]},"azB":{"ag":[],"r":[]},"aCc":{"ah":["aoW"],"eu":[]},"azA":{"au":[],"r":[]},"bfk":{"ah":["azz"]},"b96":{"aB":[]},"b95":{"aB":[]},"b94":{"aB":[]},"azC":{"ah":["azB"]},"b8x":{"aB":[]},"bsS":{"aB":[]},"Zc":{"ag":[],"r":[]},"aC_":{"ah":["Zc"]},"bnT":{"aB":[]},"aqb":{"ag":[],"r":[]},"aCO":{"ah":["aqb"]}}'))
A.Pb(b.typeUniverse,JSON.parse('{"M3":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=A.az
return{dw:w("mx<w?>"),gS:w("nS"),o:w("d1"),g5:w("wz"),M:w("eV<n>"),k:w("Q"),gv:w("l0<ak<j3>>"),gh:w("l0<n>"),gH:w("l0<H>"),r:w("ax<~>"),dk:w("a_"),fw:w("P<nS>"),E:w("P<d1>"),V:w("P<ac>"),O:w("P<w>"),A:w("P<a_>"),R:w("P<n0>"),B:w("P<ak<H>>"),m:w("P<a3<n,n>>"),_:w("P<a3<n,@>>"),b:w("P<r_>"),x:w("P<r0>"),gi:w("P<j3>"),a:w("P<lq>"),Y:w("P<i_>"),v:w("P<ie>"),dA:w("P<HL>"),F:w("P<r6>"),Z:w("P<kg>"),g:w("P<hD>"),gK:w("P<+at,details,id(Q,n,n)>"),C:w("P<cP>"),s:w("P<n>"),G:w("P<iN>"),eO:w("P<es>"),d9:w("P<eR>"),p:w("P<r>"),n:w("P<O>"),t:w("P<H>"),U:w("P<aB?>"),d4:w("P<n?>"),ck:w("ak<r_>"),e:w("ak<r0>"),ac:w("ak<j3>"),dZ:w("ak<lq>"),I:w("ak<i_>"),j:w("ak<@>"),L:w("ak<H>"),eq:w("a3<n,n>"),P:w("a3<n,@>"),f:w("a3<@,@>"),cl:w("cS<n,C>"),aS:w("J<a_,rS>"),dc:w("J<HQ,bG>"),dv:w("J<n,n>"),bL:w("J<O,bG>"),a3:w("J<H,bG>"),gN:w("J<H,pn>"),w:w("iI"),b1:w("r_"),Q:w("r0"),bP:w("lq"),i:w("i_"),u:w("ie"),gp:w("Ud"),J:w("MN"),D:w("px"),an:w("kg"),c:w("cn"),K:w("aC"),d:w("jh<n>"),di:w("+outcome,snapshot(UX,a4G?)"),ee:w("+after,before(O,O)"),et:w("+categories,error,message,replaceId(ak<i_>,n?,n?,n?)"),cz:w("Ej"),bJ:w("dz<n>"),N:w("n"),e7:w("bm<O>"),W:w("cz<n>"),am:w("k7<H>"),cc:w("a1<n>"),aM:w("e6<d1>"),bG:w("e6<O>"),l:w("r"),gm:w("qq"),ec:w("aci"),q:w("mO"),y:w("R"),gR:w("O"),z:w("@"),S:w("H"),eG:w("d1?"),cJ:w("Q?"),gw:w("ak<a3<n,@>>?"),bM:w("ak<@>?"),h:w("a3<n,@>?"),X:w("aC?"),gE:w("+code,qrPayload(n,n)?"),bY:w("+isLive,ownerEmail,snapshotJson(R,n,n)?"),T:w("n?"),cD:w("O?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aTT=new A.bt(B.bD,B.hN,B.bD,B.hN)
D.eG=new A.w(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,B.t)
D.aUm=new A.aA(D.eG,1,B.r,-1)
D.aUo=new A.aA(B.ad,2,B.r,-1)
D.aUr=new A.aA(B.aT,2,B.r,-1)
D.aUt=new A.aA(B.cm,0.8,B.r,-1)
D.aUJ=new A.aA(B.aM,2,B.r,-1)
D.aUQ=new A.aA(B.fe,1.6,B.r,-1)
D.aVC=new A.aY(0,330,0,1/0)
D.aVI=new A.aY(0,176,0,1/0)
D.aVJ=new A.aY(0,1/0,0,260)
D.aW0=new A.aY(90,1/0,0,1/0)
D.aYJ=new A.ac(0,B.G,B.dl,B.J,4)
D.cJT=w([D.aYJ],x.V)
D.aWe=new A.o(B.c,null,null,null,D.cJT,null,B.a6)
D.cEc=w([D.eG,B.aZ],x.O)
D.bPV=new A.a6(B.a3,B.a7,B.x,D.cEc,null,null)
D.aWs=new A.o(null,null,null,null,null,D.bPV,B.a6)
D.aWx=new A.o(B.bb,null,null,null,null,null,B.a6)
D.b7d=new A.w(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,B.t)
D.cYh=w([P.aaP,D.b7d],x.O)
D.bP1=new A.a6(B.b1,B.b3,B.x,D.cYh,null,null)
D.aWM=new A.o(null,null,null,B.lO,null,D.bP1,B.n)
D.bds=new A.w(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,B.t)
D.d7D=w([D.bds,M.acE],x.O)
D.bOf=new A.a6(B.b1,B.b3,B.x,D.d7D,null,null)
D.aXb=new A.o(null,null,null,B.rw,null,D.bOf,B.n)
D.cUt=w([B.aD,B.bA],x.O)
D.bOK=new A.a6(B.a3,B.a7,B.x,D.cUt,null,null)
D.aXg=new A.o(null,null,null,null,null,D.bOK,B.a6)
D.eQg=new A.F(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7X=new A.x("\ud83c\udf89",null,D.eQg,null,null,null,null,null,null,null,null,null)
D.b1x=new A.ct(B.A,null,null,D.f7X,null)
D.b2P=new A.w(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,B.t)
D.aac=new A.w(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,B.t)
D.b59=new A.w(1,0.8431372549019608,0.8,0.7843137254901961,B.t)
D.b5d=new A.w(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,B.t)
D.o4=new A.w(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,B.t)
D.rK=new A.w(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,B.t)
D.aba=new A.w(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,B.t)
D.b6W=new A.w(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,B.t)
D.V_=new A.w(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,B.t)
D.wv=new A.w(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,B.t)
D.b87=new A.w(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,B.t)
D.Vn=new A.w(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,B.t)
D.acn=new A.w(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,B.t)
D.bbN=new A.w(1,0.9529411764705882,0.9411764705882353,1,B.t)
D.bbT=new A.w(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,B.t)
D.acH=new A.w(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,B.t)
D.acY=new A.w(1,0,0.8392156862745098,0.30980392156862746,B.t)
D.bd3=new A.w(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,B.t)
D.bd7=new A.w(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,B.t)
D.be0=new A.w(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,B.t)
D.VU=new A.w(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,B.t)
D.beV=new A.w(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,B.t)
D.bfn=new A.w(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,B.t)
D.W0=new A.w(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,B.t)
D.bg3=new A.w(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,B.t)
D.ae_=new A.a2D(2,"active")
D.bjQ=new A.b9(42e5)
D.bjT=new A.b9(53e4)
D.bjV=new A.b9(58e4)
D.bjZ=new A.b9(82e4)
D.bkM=new A.N(0,30,0,30)
D.bkU=new A.N(0,4,0,8)
D.bkX=new A.N(0,8,12,8)
D.blB=new A.N(12,0,12,88)
D.blI=new A.N(12,11,12,10)
D.bm4=new A.N(13,10,12,10)
D.bmc=new A.N(14,10,14,2)
D.bmo=new A.N(14,14,10,14)
D.bmU=new A.N(16,12,16,96)
D.bmZ=new A.N(16,14,16,8)
D.bn2=new A.N(16,16,16,96)
D.bn3=new A.N(16,18,16,16)
D.bn7=new A.N(16,4,16,10)
D.bo2=new A.N(18,6,18,40)
D.bo4=new A.N(18,8,18,130)
D.boh=new A.N(20,10,20,20)
D.bou=new A.N(20,18,20,18)
D.boy=new A.N(20,20,20,22)
D.boV=new A.N(22,22,22,16)
D.bpz=new A.N(2,0,2,10)
D.bqi=new A.N(4,8,12,4)
D.bqv=new A.N(6,1,6,1)
D.bqx=new A.N(6,4,0,0)
D.bqA=new A.N(6,6,12,4)
D.bqW=new A.N(8,4,12,8)
D.fbj=new A.x("Activity",null,B.fT,null,null,null,null,null,null,null,null,null)
D.bsF=new A.bG(1,B.bn,D.fbj,null)
D.fj8=new A.x("Game Receipts",null,A0.yU,null,null,null,null,null,null,null,null,null)
D.f3k=new A.x("Your last 59 games \xb7 kept for 7 days",null,F.aNe,null,null,null,null,null,null,null,null,null)
D.cAE=w([D.fj8,D.f3k],x.p)
D.bh1=new A.fp(B.ai,B.e,B.j,B.F,null,B.p,null,0,D.cAE,null)
D.bsI=new A.bG(1,B.bn,D.bh1,null)
D.bv6=new A.a_(58607,"MaterialIcons",!1)
D.YS=new A.a_(62178,"MaterialIcons",!1)
D.bvV=new A.a_(62410,"MaterialIcons",!1)
D.bx4=new A.a_(63258,"MaterialIcons",!1)
D.bxa=new A.a_(63304,"MaterialIcons",!1)
D.bxb=new A.a_(63306,"MaterialIcons",!1)
D.bxi=new A.a_(63330,"MaterialIcons",!1)
D.aka=new A.a_(984777,"MaterialIcons",!1)
D.bzM=new A.ae(B.EY,13,B.ad,null,null,null)
D.bzU=new A.ae(B.jr,13,B.pf,null,null,null)
D.akj=new A.ae(B.l7,null,B.c,null,null,null)
D.bBr=new A.ae(B.AX,34,B.aL,null,null,null)
D.bBZ=new A.ae(B.F1,19,B.c,null,null,null)
D.bwd=new A.a_(62804,"MaterialIcons",!1)
D.bC7=new A.ae(D.bwd,24,B.aM,null,null,null)
D.bCz=new A.ae(B.AI,28,B.bk,null,null,null)
D.bD3=new A.ae(B.ajQ,42,B.c,null,null,null)
D.bDc=new A.ae(B.ZI,30,B.c,null,null,null)
D.bDN=new A.ae(B.fF,null,B.c,null,null,null)
D.bE7=new A.ae(B.jr,16,B.c,null,null,null)
D.bEI=new A.ae(B.qK,13,B.c,null,null,null)
D.bER=new A.ae(B.l7,18,B.c,null,null,null)
D.bFn=new A.ae(B.uW,null,B.dC,null,null,null)
D.bG1=new A.ae(B.oo,28,B.c,null,null,null)
D.bGg=new A.ae(B.mU,22,null,null,null,null)
D.bGC=new A.ae(B.qG,null,null,null,null,null)
D.bGO=new A.ae(B.iN,28,B.c,null,null,null)
D.bGQ=new A.ae(B.cv,null,B.aQ,null,null,null)
D.bGX=new A.ae(B.Yz,14,B.c,null,null,null)
D.bHu=new A.ae(B.Mp,36,B.aI,null,null,null)
D.bHB=new A.ae(B.op,16,B.c,null,null,null)
D.bHQ=new A.ae(B.ec,null,null,null,null,null)
D.b7y=new A.w(1,0.23137254901960785,0.16470588235294117,0,B.t)
D.bIn=new A.ae(B.dS,9,D.b7y,null,null,null)
D.by7=new A.a_(983146,"MaterialIcons",!1)
D.bID=new A.ae(D.by7,null,B.aM,null,null,null)
D.bJ7=new A.ae(B.uZ,28,D.eG,null,null,null)
D.bJc=new A.ae(B.tk,null,B.fe,null,null,null)
D.bJh=new A.ae(B.hW,20,D.eG,null,null,null)
D.byt=new A.a_(983377,"MaterialIcons",!1)
D.bJr=new A.ae(D.byt,64,B.c,null,null,null)
D.bJX=new A.ae(B.h4,24,B.c,null,null,null)
D.bKR=new A.e_(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bL1=new A.e_(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bLg=new A.e_(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bLh=new A.e_(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.b5R=new A.w(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,B.t)
D.b8q=new A.w(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,B.t)
D.b88=new A.w(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,B.t)
D.cYz=w([D.b5R,D.b8q,D.b88],x.O)
D.bMc=new A.a6(B.ax,B.aC,B.x,D.cYz,null,null)
D.d1Y=w([B.bl,B.aZ],x.O)
D.bMv=new A.a6(B.ax,B.aC,B.x,D.d1Y,null,null)
D.b77=new A.w(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,B.t)
D.bci=new A.w(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,B.t)
D.cKj=w([D.b77,D.bci],x.O)
D.bMC=new A.a6(B.ax,B.aC,B.x,D.cKj,null,null)
D.d__=w([B.bj,B.M,B.e7],x.O)
D.bMJ=new A.a6(B.ax,B.aC,B.x,D.d__,null,null)
D.bMM=new A.a6(B.a3,B.a7,B.x,G.aru,null,null)
D.cJL=w([B.fe,B.c8],x.O)
D.am0=new A.a6(B.a3,B.a7,B.x,D.cJL,null,null)
D.cK5=w([B.fe,B.bA],x.O)
D.am1=new A.a6(B.a3,B.a7,B.x,D.cK5,null,null)
D.avd=w([D.o4,B.av,B.bU],x.O)
D.bN2=new A.a6(B.ax,B.aC,B.x,D.avd,null,null)
D.b9U=new A.w(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,B.t)
D.cHR=w([D.b9U,E.aal,B.M],x.O)
D.bN7=new A.a6(B.ax,B.aC,B.x,D.cHR,null,null)
D.aSJ=new A.da(-0.8,-1)
D.aSL=new A.da(1.2,1)
D.cH3=w([B.c,B.er,B.fZ,B.c,B.ff,B.aV,B.my],x.O)
D.cZr=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.bN9=new A.a6(D.aSJ,D.aSL,B.x,D.cH3,D.cZr,null)
D.bce=new A.w(1,0,0.7607843137254902,0.26666666666666666,B.t)
D.ba8=new A.w(1,0,0.6392156862745098,0.22745098039215686,B.t)
D.cYy=w([D.bce,D.ba8],x.O)
D.bNz=new A.a6(B.a3,B.a7,B.x,D.cYy,null,null)
D.bND=new A.a6(B.ax,B.aC,B.x,B.OT,null,null)
D.cTB=w([E.VX,B.wx],x.O)
D.bNF=new A.a6(B.a3,B.a7,B.x,D.cTB,null,null)
D.cXs=w([B.h_,B.fr],x.O)
D.am6=new A.a6(B.a3,B.a7,B.x,D.cXs,null,null)
D.d1x=w([B.bb,B.bT],x.O)
D.am7=new A.a6(B.a3,B.a7,B.x,D.d1x,null,null)
D.cs9=w([B.dn,B.f5],x.O)
D.bOh=new A.a6(B.ax,B.aC,B.x,D.cs9,null,null)
D.cG8=w([B.c,B.ba],x.O)
D.bOr=new A.a6(B.a3,B.a7,B.x,D.cG8,null,null)
D.abZ=new A.w(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,B.t)
D.b4X=new A.w(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,B.t)
D.cQz=w([D.abZ,B.j0,B.qi,B.av,D.b4X],x.O)
D.bQO=w([0,0.28,0.55,0.82,1],x.n)
D.bOs=new A.a6(B.ax,B.aC,B.x,D.cQz,D.bQO,null)
D.bOC=new A.a6(B.a3,B.a7,B.x,B.Pu,null,null)
D.bOD=new A.a6(B.a3,B.a7,B.x,G.atQ,null,null)
D.bOG=new A.a6(B.a3,B.a7,B.x,D.avd,null,null)
D.cLm=w([B.bA,B.fe],x.O)
D.bOQ=new A.a6(B.a3,B.a7,B.x,D.cLm,null,null)
D.d5k=w([B.aD,B.bA,B.ba],x.O)
D.bOS=new A.a6(B.a3,B.a7,B.x,D.d5k,null,null)
D.cTK=w([B.aL,B.bJ,B.fA],x.O)
D.bOW=new A.a6(B.a3,B.a7,B.x,D.cTK,null,null)
D.d53=w([B.bj,B.aJ,B.bI,B.aK,B.aP,B.cm,B.ak],x.O)
D.cOV=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.bP0=new A.a6(B.ax,B.aC,B.x,D.d53,D.cOV,null)
D.bPa=new A.a6(B.ax,B.aC,B.x,B.a02,null,null)
D.cUd=w([D.V_,B.e1],x.O)
D.bPj=new A.a6(B.a3,B.a7,B.x,D.cUd,null,null)
D.d0e=w([D.acH,D.aba,B.M],x.O)
D.bPr=new A.a6(B.ax,B.aC,B.x,D.d0e,null,null)
D.beq=new A.w(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,B.t)
D.cGC=w([B.eV,B.h_,D.beq],x.O)
D.bPX=new A.a6(B.ax,B.aC,B.x,D.cGC,null,null)
D.cLR=w([D.o4,B.av],x.O)
D.bPY=new A.a6(B.ax,B.aC,B.x,D.cLR,null,null)
D.bQj=w([F.B_,B.oo,B.jr,B.hw,B.kI,B.kJ,B.kH,B.qP,B.mb,B.eO,B.ly,B.xs,B.F9],x.A)
D.bTG=w([10,50,100,200],x.t)
D.c2l=w([1,3,5,7],x.t)
D.c7h=w([25,50,100,250],x.t)
D.by2=new A.a_(983104,"MaterialIcons",!1)
D.cfL=w([B.oo,B.lz,B.mU,B.l4,B.h3,B.v4,D.by2,B.ZE],x.A)
D.cl3=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cwW=w([0,0.22,0.5,0.78,1],x.n)
D.cAM=w([8,13,19],x.n)
D.a0m=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.fam=new A.x("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.e2P=new A.jh("questions",48,D.fam,null,x.d)
D.f0E=new A.x("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.e2U=new A.jh("edit",48,D.f0E,null,x.d)
D.fhL=new A.x("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.e3_=new A.jh("delete",48,D.fhL,null,x.d)
D.cAV=w([D.e2P,D.e2U,D.e3_],A.az("P<oR<n>>"))
D.cKd=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.cKq=w([B.bM,B.hc],x.O)
D.a30=new C.lq("text","",null,null)
D.cLw=w([D.a30],x.a)
D.cMT=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.elg=new A.acF(B.m9,"Home")
D.ecF=new A.acF(B.pz,"Growth")
D.egX=new A.acF(B.jr,"Wallet")
D.cP6=w([D.elg,D.ecF,D.egX],A.az("P<+icon,label(a_,n)>"))
D.cPv=w([4,0,2,6,8,1,3,5,7],x.t)
D.cPD=w([B.c,B.bN,B.cm],x.O)
D.du3=new C.r6("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.du6=new C.r6("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.du4=new C.r6("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.dtZ=new C.r6("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.du_=new C.r6("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.du7=new C.r6("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a0P=w([D.du3,D.du6,D.du4,D.dtZ,D.du_,D.du7],x.F)
D.a0U=w([B.aE,B.bl,B.d6,B.aL],x.O)
D.b7G=new A.w(1,1,0.8980392156862745,0.4,B.t)
D.cUj=w([B.UF,D.b7G,B.qi,B.hT,B.j0],x.O)
D.a1_=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.P0=w(["checkers_deluxe","tic_tac_go"],x.s)
D.bQn=w([0,1,2],x.t)
D.cfZ=w([3,4,5],x.t)
D.csI=w([6,7,8],x.t)
D.bQp=w([0,3,6],x.t)
D.c2q=w([1,4,7],x.t)
D.c9M=w([2,5,8],x.t)
D.bQt=w([0,4,8],x.t)
D.c9J=w([2,4,6],x.t)
D.cWx=w([D.bQn,D.cfZ,D.csI,D.bQp,D.c2q,D.c9M,D.bQt,D.c9J],x.B)
D.aD9=new C.HQ(0,"abab")
D.dtX=new C.HQ(1,"aaaBbb")
D.aDa=new C.HQ(2,"aabb")
D.cXw=w([D.aD9,D.dtX,D.aDa],A.az("P<HQ>"))
D.cXM=w([],x.a)
D.auA=w([],x.v)
D.d06=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.Pl=w([1,2,3,-1,-2],x.t)
D.d7s=w([B.j1,B.aD],x.O)
D.fyj=new C.qq("dice","Dice Roll","Roll for cash & prizes!",B.m7,D.d7s)
D.fyg=new C.qq("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",B.qI,B.ato)
D.d2i=w([B.d2,B.bk],x.O)
D.fye=new C.qq("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",B.Zq,D.d2i)
D.d6Y=w([B.dN,B.mB],x.O)
D.fyk=new C.qq("memory","Memory Match","Match pairs \u2014 solo or multiplayer",B.ZE,D.d6Y)
D.c28=w([B.jF,B.pd],x.O)
D.fyh=new C.qq("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",G.Zc,D.c28)
D.d05=w([M.l_,D.Vn],x.O)
D.fyf=new C.qq("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",B.Fc,D.d05)
D.fyi=new C.qq("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",B.cv,Ah.mV)
D.d1w=w([D.fyj,D.fyg,D.fye,D.fyk,D.fyh,D.fyf,D.fyi],A.az("P<qq>"))
D.d2Q=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.bbA=new A.w(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,B.t)
D.bbs=new A.w(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,B.t)
D.adr=new A.w(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,B.t)
D.d3z=w([D.bbA,D.bbs,D.adr],x.O)
D.bdn=new A.w(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,B.t)
D.d3B=w([B.aak,D.bdn,D.adr],x.O)
D.d4b=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.avy=w([D.o4,B.c,D.eG,B.bY,B.b4,B.av],x.O)
D.du1=new C.r6("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.du0=new C.r6("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.dtY=new C.r6("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.du5=new C.r6("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.du8=new C.r6("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.du2=new C.r6("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a1C=w([D.du1,D.du0,D.dtY,D.du5,D.du8,D.du2],x.F)
D.d7a=w([B.c8,B.pd],x.O)
D.dSW={checkers_deluxe:0,tic_tac_go:1}
D.aB9=new A.br(D.dSW,["Checkers Deluxe","Tic Tac Go"],A.az("br<n,n>"))
D.dS2={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aBk=new A.br(D.dS2,[1,2,3,4,5,6,7],A.az("br<n,H>"))
D.dn1=new C.a5j(null)
D.dqn=new C.lq("signature","NGMY Support Team",null,null)
D.dqo=new C.lq("divider","",null,null)
D.Qf=new C.Ud(!1,!1,!1,!1)
D.Qh=new C.MN(!1,!1,!1,!1)
D.drq=new C.MN(!0,!0,!1,!1)
D.BO=new C.ap8(0,"swahili")
D.aD8=new C.ap8(1,"english")
D.BP=new C.ap8(2,"mix")
D.cW1=w([B.fk,B.io,B.dm],x.O)
D.bwT=new A.a_(63118,"MaterialIcons",!1)
D.dvb=new C.oN(D.cW1,B.fW,B.aL,"BACKGAMMON","\ud83c\udfb2",D.bwT)
D.byS=new A.a_(983637,"MaterialIcons",!1)
D.dvc=new C.oN(Ae.avI,B.bl,B.f0,"EURO WHEEL","\ud83c\udfa1",D.byS)
D.d37=w([B.M,B.aJ,B.bv],x.O)
D.dvd=new C.oN(D.d37,B.aP,B.ak,"ROYALE","\u265f\ufe0f",G.Zc)
D.cJO=w([B.dn,B.bk,B.dW],x.O)
D.dve=new C.oN(D.cJO,B.aE,B.d6,"CONNECT 4","\ud83d\udd34",B.ZR)
D.cZE=w([B.du,B.f5,B.pd],x.O)
D.dvf=new C.oN(D.cZE,B.ut,B.c8,"PUNTO BANCO","\ud83d\udc8e",B.lz)
D.csb=w([B.nj,B.i3,B.lr],x.O)
D.dvg=new C.oN(D.csb,B.iW,B.jG,"DOMINOES","\ud83c\udc53",B.ajS)
D.d3M=w([B.wD,B.rN,B.hA],x.O)
D.dvh=new C.oN(D.d3M,B.A_,B.fU,"WAR","\u2694\ufe0f",N.Za)
D.dvi=new C.oN(B.avD,B.aM,B.ak,"PREMIUM","\ud83c\udfae",B.m7)
D.cLn=w([B.jg,B.aD,B.dN],x.O)
D.dvj=new C.oN(D.cLn,B.dM,B.fe,"JACKPOT","\ud83c\udfb0",B.m7)
D.cYQ=w([B.kw,B.lp,B.bA],x.O)
D.dvk=new C.oN(D.cYQ,B.qh,B.bY,"LIVE BINGO","\ud83c\udfb1",B.AN)
D.cEa=w([B.io,B.e1,B.aL],x.O)
D.bwj=new A.a_(62865,"MaterialIcons",!1)
D.dvl=new C.oN(D.cEa,B.rT,B.aM,"BIG SPIN","\ud83c\udfa1",D.bwj)
D.dvm=new C.oN(B.a1A,B.aK,B.bl,"HOLD'EM","\u2660\ufe0f",B.jr)
D.d4a=w([B.eV,B.fr,B.aZ],x.O)
D.bvr=new A.a_(61234,"MaterialIcons",!1)
D.dvn=new C.oN(D.d4a,B.ls,B.aT,"CRAPS","\ud83c\udfb2",D.bvr)
D.cJ7=w([B.hc,B.iG,B.bM],x.O)
D.dvo=new C.oN(D.cJ7,B.bJ,B.ba,"PLINKO","\ud83d\udc8e",Ai.Mq)
D.byD=new A.a_(983492,"MaterialIcons",!1)
D.dvp=new C.oN(B.a1A,B.ew,B.bl,"SNOOKER","\ud83c\udfb1",D.byD)
D.d1T=w([B.eV,B.fr,B.aT],x.O)
D.dvq=new C.oN(D.d1T,B.rO,B.bs,"PROFIT LAB","\ud83d\udcb0",B.hW)
D.d2b=w([B.e7,B.ft,B.bl],x.O)
D.bxg=new A.a_(63324,"MaterialIcons",!1)
D.dvr=new C.oN(D.d2b,B.zX,B.bb,"KLONDIKE","\ud83c\udccf",D.bxg)
D.cWE=w([B.db,B.bj,B.M],x.O)
D.dvs=new C.oN(D.cWE,B.aM,B.aJ,"VEGAS TABLE","\ud83c\udccf",A_.Fq)
D.pH=new C.DU(0,"continueGame")
D.pI=new C.DU(1,"youWin")
D.GT=new C.DU(2,"youLose")
D.Qq=new C.DU(3,"draw")
D.aDn=new C.UX(0,"found")
D.dOg=new C.UX(1,"foundLive")
D.a3g=new C.UX(2,"notFound")
D.aDo=new C.UX(3,"wrongAccount")
D.dV4=new A.u(4,12)
D.dXY=new A.C(B.KY,B.rB,null)
D.bpX=new A.N(4,0,0,3)
D.eNK=new A.F(!0,B.aI,null,null,null,null,10,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm1=new A.x("NGMY Helper",null,D.eNK,null,null,null,null,null,null,null,null,null)
D.dYd=new A.C(D.bpX,D.fm1,null)
D.bx8=new A.a_(63284,"MaterialIcons",!1)
D.bCl=new A.ae(D.bx8,18,B.o6,null,null,null)
D.eS9=new A.F(!0,B.o6,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4r=new A.x("Continue",null,D.eS9,null,null,null,null,null,null,null,null,null)
D.cYb=w([D.bCl,B.bp,D.f4r],x.p)
D.eyU=new A.cs(B.aX,B.e,B.Q,B.m,null,B.p,null,0,D.cYb,null)
D.dYg=new A.C(B.j4,D.eyU,null)
D.dYt=new A.C(B.bR,B.rB,null)
D.bbd=new A.w(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,B.t)
D.cUT=w([B.h_,B.fr,B.cY,D.bbd],x.O)
D.bP3=new A.a6(B.ax,B.aC,B.x,D.cUT,B.Bg,null)
D.aXj=new A.o(null,null,null,null,null,D.bP3,B.n)
D.bhZ=new A.kF(D.aXj,B.be,null,null)
D.e3e=new A.cJ(0,0,0,0,null,null,D.bhZ,null)
D.bE3=new A.ae(B.uV,11,B.c,null,null,null)
D.e3i=new A.cJ(10,12,null,null,null,null,D.bE3,null)
D.cwO=w([B.fX,B.e7,B.kZ],x.O)
D.e3S=new A.bS(B.IS,1.1,B.x,null,0,D.cwO,null,null)
D.bcv=new A.w(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,B.t)
D.b7n=new A.w(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,B.t)
D.b8Y=new A.w(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,B.t)
D.cSN=w([D.bcv,D.b7n,D.b8Y],x.O)
D.e3Z=new A.bS(B.a83,1.05,B.x,null,0,D.cSN,null,null)
D.e4l=new A.bS(B.A,0.5,B.x,null,0,W.a0B,null,null)
D.ex7=new A.a9(-18,0,18,1)
D.exE=new A.a9(-3,-5,3,5)
D.bCN=new A.ae(B.ec,16,D.eG,null,null,null)
D.aO0=new A.F(!0,D.eG,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjO=new A.x("Screenshot added \xb7 tap to change",null,D.aO0,null,null,null,null,null,null,null,null,null)
D.cH6=w([D.bCN,B.bp,D.fjO],x.p)
D.eym=new A.cs(B.aX,B.b9,B.j,B.m,null,B.p,null,0,D.cH6,null)
D.bGy=new A.ae(B.jP,15,D.eG,null,null,null)
D.fhG=new A.x("Refresh",null,D.aO0,null,null,null,null,null,null,null,null,null)
D.cJg=w([D.bGy,B.d9,D.fhG],x.p)
D.eyo=new A.cs(B.aX,B.e,B.Q,B.m,null,B.p,null,0,D.cJg,null)
D.dSt={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.eA9=new A.eV(D.dSt,3,x.M)
D.dSd={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.eAf=new A.eV(D.dSd,36,x.M)
D.dSg={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.eAn=new A.eV(D.dSg,6,x.M)
D.dTo={memory:0,typing:1,scramble:2,pattern:3}
D.mn=new A.eV(D.dTo,4,x.M)
D.eCw=new A.at(276,276)
D.eDc=new A.a5(13,null,null,null)
D.b2a=new A.fh(2.6,null,null,null,null,B.aM,null,null,null,null)
D.eDm=new A.a5(26,26,D.b2a,null)
D.eE6=new A.a5(null,7,null,null)
D.eEf=new A.hN(8,0,0,1,null)
D.fkS=new A.x("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aLF=new A.b1(D.fkS,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f_Q=new A.x("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.eHb=new A.b1(D.f_Q,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f0P=new A.x("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.eHh=new A.b1(D.f0P,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fhQ=new A.x("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.eHV=new A.b1(D.fhQ,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.bbV=new A.w(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,B.t)
D.eR6=new A.F(!0,D.bbV,null,null,null,null,9,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKW=new A.es("$",null,null,B.cQ,null,null,null,null,null,null,D.eR6)
D.eLb=new A.F(!0,B.M,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLu=new A.F(!0,B.c,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLz=new A.F(!0,B.bj,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLX=new A.F(!0,B.M,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eM6=new A.F(!0,B.c,null,null,null,null,19,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMe=new A.F(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMm=new A.F(!0,null,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eN6=new A.F(!0,B.aM,null,null,null,null,28,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNC=new A.F(!0,D.eG,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNE=new A.F(!0,B.bJ,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOl=new A.F(!0,E.zV,null,null,null,null,13,B.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aMQ=new A.F(!0,B.c,null,null,null,null,20,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePO=new A.F(!0,B.bJ,null,null,null,null,11.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQ5=new A.F(!0,B.ad,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,B.aB,null,null,null,null,null,null,null,null)
D.eQm=new A.F(!0,B.ad,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRl=new A.F(!0,B.c,null,null,null,null,11,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRA=new A.F(!0,B.c,null,null,null,null,14,B.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRL=new A.F(!0,B.bb,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRM=new A.F(!0,B.c,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,B.aB,null,null,null,null,null,null,null,null)
D.eSh=new A.F(!0,B.iy,null,null,null,null,10.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b68=new A.w(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,B.t)
D.eSu=new A.F(!0,D.b68,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTS=new A.F(!0,B.aE,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUd=new A.F(!0,D.abZ,null,null,null,null,9,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNv=new A.F(!0,E.zV,null,null,null,null,11,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUz=new A.F(!0,B.ft,null,null,null,null,52,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUA=new A.F(!0,B.bv,null,null,null,null,7,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUP=new A.F(!0,E.zV,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.vL=new A.F(!0,B.c,null,null,null,null,13,B.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b9L=new A.w(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,B.t)
D.eV1=new A.F(!0,D.b9L,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVx=new A.F(!0,B.PW,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWu=new A.F(!0,B.c,null,null,null,null,38,B.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWA=new A.F(!0,B.iM,null,null,null,null,11,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWE=new A.F(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNI=new A.F(!0,B.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eX5=new A.F(!0,B.M,null,null,null,null,10,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eX9=new A.F(!0,B.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY_=new A.F(!0,B.M,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYn=new A.F(!0,B.ad,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYD=new A.F(!0,B.bb,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ6=new A.F(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZa=new A.F(!0,B.M,null,null,null,null,11,B.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_6=new A.x("Value per pair",null,B.hx,null,null,null,null,null,null,null,null,null)
D.f_7=new A.x("Restore now",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f_D=new A.x("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aNi=new A.F(!0,B.cU,null,null,null,null,12,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_L=new A.x("AVAILABLE PLANS",null,D.aNi,null,null,null,null,null,null,null,null,null)
D.f_O=new A.x("I understand",null,B.ct,null,null,null,null,null,null,null,null,null)
D.f0g=new A.x("Go Back",null,B.ct,null,null,null,null,null,null,null,null,null)
D.eOc=new A.F(!0,B.bv,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0X=new A.x("PLAN VALUE",null,D.eOc,null,null,null,null,null,null,null,null,null)
D.f0Z=new A.x("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.f1k=new A.x("Deposit",null,B.Sz,null,null,null,null,null,null,null,null,null)
D.eXn=new A.F(!0,B.dM,null,null,null,null,null,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2i=new A.x("JACKPOT SLOTS",null,D.eXn,null,null,null,null,null,null,null,null,null)
D.f2B=new A.x("Restore",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eOf=new A.F(!0,B.c,null,null,null,null,12,B.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2F=new A.x("YOUR NUMBER",null,D.eOf,null,null,null,null,null,null,null,null,null)
D.f2U=new A.x("SPIN REELS",null,G.a61,null,null,null,null,null,null,null,null,null)
D.f3j=new A.x("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.f3N=new A.x("Perfect Score Profit",null,B.hx,null,null,null,null,null,null,null,null,null)
D.f4p=new A.x("Join room",null,B.kn,null,null,null,null,null,null,null,null,null)
D.f6i=new A.x("Add payment screenshot",null,B.jX,null,null,null,null,null,null,null,null,null)
D.f6w=new A.x("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.eWG=new A.F(!0,B.aM,null,null,null,null,11,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6X=new A.x("INVITE A PLAYER",null,D.eWG,null,null,null,null,null,null,null,null,null)
D.eVU=new A.F(!0,B.UF,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7m=new A.x("NGMY GOLD LEADER",null,D.eVU,null,null,null,null,null,null,null,null,null)
D.f7S=new A.x("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.f8e=new A.x("Invest & Play",null,B.oO,null,null,null,null,null,null,null,null,null)
D.aNb=new A.F(!0,D.wv,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8E=new A.x("VALID THRU",null,D.aNb,null,null,null,null,null,null,null,null,null)
D.aNK=new A.F(!0,B.aA,null,null,null,null,11,B.I,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8M=new A.x("DEALER",null,D.aNK,null,null,null,null,null,null,null,null,null)
D.f8S=new A.x("CARDHOLDER",null,D.aNb,null,null,null,null,null,null,null,null,null)
D.eVq=new A.F(!0,B.aK,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9z=new A.x("NGMY PLATINUM",null,D.eVq,null,null,null,null,null,null,null,null,null)
D.eYu=new A.F(!0,B.pf,null,null,null,null,10,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fah=new A.x("EARNED SO FAR",null,D.eYu,null,null,null,null,null,null,null,null,null)
D.faO=new A.x("VS",null,B.aN6,null,null,null,null,null,null,null,null,null)
D.fbd=new A.x("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.fbz=new A.x("One day left",null,B.aMO,null,B.L,null,null,null,null,null,null,null)
D.fbU=new A.x("Keep typing \u2014 mistakes are counted in your payout",null,B.Cs,null,null,null,null,null,null,null,null,null)
D.fbV=new A.x("Multiplayer invite",null,B.kn,null,null,null,null,null,null,null,null,null)
D.fc4=new A.x("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.eMU=new A.F(!0,B.PW,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fca=new A.x("\ud83d\udcb0 Partial Payout System",null,D.eMU,null,null,null,null,null,null,null,null,null)
D.fcl=new A.x("Browse Topics",null,B.eT,null,null,null,null,null,null,null,null,null)
D.eLU=new A.F(!0,B.c,null,null,null,null,22,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcA=new A.x("Investment Required",null,D.eLU,null,B.L,null,null,null,null,null,null,null)
D.eLr=new A.F(!0,B.c,null,null,null,null,16.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdZ=new A.x("Network Status",null,D.eLr,null,null,null,null,null,null,null,null,null)
D.feu=new A.x("Their account email",null,F.a5N,null,null,null,null,null,null,null,null,null)
D.feN=new A.x("Verification code",null,B.ct,null,null,null,null,null,null,null,null,null)
D.feO=new A.x("Category",null,null,null,null,null,null,null,null,null,null,null)
D.ff0=new A.x("ACTIVE ASSET",null,D.aNi,null,null,null,null,null,null,null,null,null)
D.ffm=new A.x("Scan QR",null,B.ct,null,null,null,null,null,null,null,null,null)
D.ffr=new A.x("Check word",null,B.ct,null,null,null,null,null,null,null,null,null)
D.ffQ=new A.x("YOUR HAND",null,D.aNK,null,null,null,null,null,null,null,null,null)
D.fgn=new A.x("NGMY Music Studio",null,B.kS,null,null,null,null,null,null,null,null,null)
D.fgq=new A.x("I sent it \u2014 submit deposit",null,B.oO,null,null,null,null,null,null,null,null,null)
D.fh6=new A.x("Back",null,B.S1,null,null,null,null,null,null,null,null,null)
D.eZl=new A.F(!0,null,null,null,null,null,null,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhd=new A.x("DEAL / PLAY ROUND",null,D.eZl,null,null,null,null,null,null,null,null,null)
D.fhp=new A.x("Got it \u2014 keep chatting",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fhz=new A.x("3 Messages Left",null,B.aNz,null,null,null,null,null,null,null,null,null)
D.fi3=new A.x("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.fib=new A.x("Copy",null,B.ct,null,null,null,null,null,null,null,null,null)
D.fix=new A.x("How many games?",null,F.a5N,null,null,null,null,null,null,null,null,null)
D.eUW=new A.F(!0,B.aA,null,null,null,null,null,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiJ=new A.x("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.eUW,null,B.L,null,null,null,null,null,null,null)
D.fkd=new A.x("Question",null,null,null,null,null,null,null,null,null,null,null)
D.fkp=new A.x("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.eZK=new A.F(!0,B.c,null,null,null,null,12.5,B.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flW=new A.x("NGMY  WALLET",null,D.eZK,null,null,null,null,null,null,null,null,null)
D.flX=new A.x("Select Your Bet",null,B.hk,null,null,null,null,null,null,null,null,null)
D.fvc=new A.cz("history",x.W)
D.fvh=new A.cz("ngmy_local_home",x.W)
D.fvi=new A.cz("ngmy_local_invest",x.W)
D.fvj=new A.cz("ngmy_local_wallet",x.W)
D.fy1=new C.Y0(null)
D.aQZ=new C.azo(0,"grid")
D.aR_=new C.azo(1,"questions")
D.fze=new C.azo(2,"answer")
D.fA8=new C.YU(null)})();(function staticFields(){$.fJG=A.aZ(x.N)
$.h84=A.U(x.N,x.k)
$.fP1=null
$.fOQ=A.U(x.N,A.az("vO"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"i4H","bBB",()=>C.hNQ())
w($,"i4t","hg2",()=>{var v=null,u=A.ih(v,v,v,v,D.eKW,B.a5,B.ci,v,B.eq,B.cg)
u.eR()
return u})})()};
(a=>{a["fo+9moitEazprYLq25eyVbHcrpE="]=a.current})($__dart_deferred_initializers__);