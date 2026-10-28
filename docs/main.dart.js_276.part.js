((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,L,R,A2,E,M,A3,N,A4,S,O,T,A5,P,A6,U,A7,A8,A9,Aa,Ab,Ac,V,Ad,C={
h4z(d,e,f){var w=null,v=f.k("Fo<0>"),u=new A.Fo(w,w,w,w,v)
$.Cw()
u.d=new C.cp8(new A.BA(),e,u,f,d)
return new A.hO(u,v.k("hO<1>"))},
cp8:function cp8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cp9:function cp9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cp5:function cp5(d){this.a=d},
cp6:function cp6(d,e){this.a=d
this.b=e},
cp7:function cp7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cp4:function cp4(d,e,f){this.a=d
this.b=e
this.c=f},
bpn:function bpn(d){this.a=d},
h4y(d,e,f,g){return new C.au7(d,e,f,null,g.k("au7<0>"))},
EG:function EG(){},
aGv:function aGv(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
eVr:function eVr(d){this.a=d},
eVq:function eVq(d,e){this.a=d
this.b=e},
eVt:function eVt(d){this.a=d},
eVo:function eVo(d,e,f){this.a=d
this.b=e
this.c=f},
eVs:function eVs(d){this.a=d},
eVp:function eVp(d){this.a=d},
au7:function au7(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
hUx(d){var w=B.a.i(d)
while(B.a.a0(w,"$"))w=B.a.i(B.a.b_(w,1))
return w},
heF(d){var w=C.hUx(d)
if(w.length===0)return""
return"$"+w},
fpA(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fpA=A.e(function(f,g){if(f===1)return A.f(g,v)
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
break}if(q.d!==B.fC){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!A.ds(m,"game payout:",0))if(!A.ds(m,"game partial:",0)){if(!A.ds(m,"multiplayer payout:",0))o=A.ds(m,"dice",0)&&q.e===B.fb
else o=l
l=o}if(!l){w=4
break}if(A.ds(m,"game payout:",0))k=B.a.i(B.a.b_(n,B.a.cI(m,"game payout:")+12))
else if(A.ds(m,"game partial:",0)){k=B.a.i(B.a.b_(n,B.a.cI(m,"game partial:")+13))
j=B.a.cI(k,"(")
if(j>0)k=B.a.i(B.a.ap(k,0,j))}else if(A.ds(m,"multiplayer payout:",0)){k=B.a.i(B.a.b_(n,B.a.cI(m,"multiplayer payout:")+19))
j=B.a.cI(k,"(")
if(j>0)k=B.a.i(B.a.ap(k,0,j))}else k=A.ds(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return A.b(C.un(q.c,p,n,d,o,null,q.a,!0),$async$fpA)
case 6:case 4:e.length===s||(0,A.K)(e),++r
w=3
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$fpA,v)},
hZ8(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
hVA(d,e,f){return B.d.b8(e,new C.fti(f,B.a.i(d.toLowerCase())))},
ft9(d){var w
C.h0S(d)
w=d.c6
return A.bl(new A.J(w,new C.fta(),A.T(w).k("J<1,@>")),!0,x.N)},
hLk(d,e,f){var w,v,u,t,s,r,q=null,p=B.bQ,o=B.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aT.toString
u=$.eg().gi9().b
if(u.a===0)t=1
else{new A.bc(u,A.a3(u).k("bc<2>")).gL(0)
u=$.kY()
s=u.d
t=s==null?u.gh3():s}w=B.k.dJ(f*t)
v=new C.fd5(f)
if(J.cZ(n,"data:image"))try{u=A.fL(B.cB.aI(B.d.gam(J.lk(n,","))),B.A,w,new C.fd2(v),B.fQ,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.cZ(n,"supabase://"))return new A.l3(A.a0w(n),new C.fd3(f,e,p,w,v),q,q,x.gh)
return A.kh(n,B.A,w,new C.fd4(v),B.fQ,p,!0,e,q,q,f)},
fQQ(d,e){return new A.a6(e,e,A.hR(C.hLk(d,e,e),B.aq),null)},
hDL(){var w,v,u=A.a([],x._),t=x.N,s=A.B(D.d4Q,x.gm)
for(w=0;w<36;++w){v=B.BE[w]
s.push(new C.qv(v.a,v.b,v.c,v.e,v.f))}return new C.ayI(u,A.V(t,t),s)},
fti:function fti(d,e){this.a=d
this.b=e},
fta:function fta(){},
fd5:function fd5(d){this.a=d},
fd2:function fd2(d){this.a=d},
fd3:function fd3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fd1:function fd1(d){this.a=d},
fd4:function fd4(d){this.a=d},
ajN:function ajN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
qv:function qv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
ayI:function ayI(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
d6Z:function d6Z(d,e){this.a=d
this.b=e},
d79:function d79(d,e){this.a=d
this.b=e},
d7r:function d7r(){},
d7s:function d7s(d){this.a=d},
d7h:function d7h(d,e){this.a=d
this.b=e},
d7g:function d7g(){},
d7i:function d7i(d){this.a=d},
d7f:function d7f(){},
d7k:function d7k(d){this.a=d},
d7j:function d7j(){},
d7c:function d7c(d){this.a=d},
d7a:function d7a(d){this.a=d},
d7b:function d7b(d){this.a=d},
d7d:function d7d(d){this.a=d},
d7e:function d7e(d){this.a=d},
d74:function d74(d,e){this.a=d
this.b=e},
d75:function d75(d,e){this.a=d
this.b=e},
d72:function d72(d){this.a=d},
d73:function d73(d){this.a=d},
d76:function d76(d){this.a=d},
d77:function d77(d){this.a=d},
d78:function d78(d,e,f){this.a=d
this.b=e
this.c=f},
d71:function d71(d,e){this.a=d
this.b=e},
d70:function d70(d,e){this.a=d
this.b=e},
d7_:function d7_(d,e){this.a=d
this.b=e},
d7q:function d7q(d){this.a=d},
d7o:function d7o(d,e,f){this.a=d
this.b=e
this.c=f},
d7n:function d7n(d,e,f){this.a=d
this.b=e
this.c=f},
d7m:function d7m(d,e){this.a=d
this.b=e},
d7l:function d7l(){},
d7p:function d7p(d){this.a=d},
aBz:function aBz(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bhy:function bhy(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
dKY:function dKY(d){this.a=d},
dKX:function dKX(d){this.a=d},
dKZ:function dKZ(d){this.a=d},
dKW:function dKW(){},
dL_:function dL_(d,e){this.a=d
this.b=e},
dKV:function dKV(d){this.a=d},
dL0:function dL0(d){this.a=d},
ajM:function ajM(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ayH:function ayH(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
d6T:function d6T(d){this.a=d},
d6W:function d6W(d){this.a=d},
d6X:function d6X(d){this.a=d},
d6Y:function d6Y(d){this.a=d},
d6V:function d6V(d,e){this.a=d
this.b=e},
d6U:function d6U(d,e){this.a=d
this.b=e},
ajO:function ajO(d,e,f,g,h,i,j,k,l,m){var _=this
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
ayJ:function ayJ(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
d8L:function d8L(d,e){this.a=d
this.b=e},
d8O:function d8O(d){this.a=d},
d8P:function d8P(d){this.a=d},
d8Q:function d8Q(d){this.a=d},
d8R:function d8R(d){this.a=d},
d8S:function d8S(d){this.a=d},
d8M:function d8M(d){this.a=d},
d8N:function d8N(d){this.a=d},
d80:function d80(d,e){this.a=d
this.b=e},
d81:function d81(d,e){this.a=d
this.b=e},
d8u:function d8u(d){this.a=d},
d8v:function d8v(){},
d8g:function d8g(d,e,f){this.a=d
this.b=e
this.c=f},
d8h:function d8h(d){this.a=d},
d8i:function d8i(d,e,f){this.a=d
this.b=e
this.c=f},
d8j:function d8j(d,e){this.a=d
this.b=e},
d8k:function d8k(){},
d7t:function d7t(d){this.a=d},
d8_:function d8_(d,e){this.a=d
this.b=e},
d8w:function d8w(){},
d8F:function d8F(){},
d8t:function d8t(d){this.a=d},
d8s:function d8s(d){this.a=d},
d7Y:function d7Y(d){this.a=d},
d7Z:function d7Z(){},
d8A:function d8A(){},
d8B:function d8B(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d8C:function d8C(d,e,f){this.a=d
this.b=e
this.c=f},
d7u:function d7u(){},
d7v:function d7v(d){this.a=d},
d7w:function d7w(){},
d89:function d89(d,e){this.a=d
this.b=e},
d8a:function d8a(d,e,f){this.a=d
this.b=e
this.c=f},
d8b:function d8b(d){this.a=d},
d88:function d88(d){this.a=d},
d8l:function d8l(d){this.a=d},
d8m:function d8m(){},
d8n:function d8n(d){this.a=d},
d8o:function d8o(){},
d8p:function d8p(d){this.a=d},
d8q:function d8q(){},
d8z:function d8z(d,e,f){this.a=d
this.b=e
this.c=f},
d8c:function d8c(d){this.a=d},
d8d:function d8d(d,e){this.a=d
this.b=e},
d8e:function d8e(d){this.a=d},
d8f:function d8f(d){this.a=d},
d8D:function d8D(d){this.a=d},
d8E:function d8E(d){this.a=d},
d7x:function d7x(d){this.a=d},
d7y:function d7y(d,e){this.a=d
this.b=e},
d7z:function d7z(d){this.a=d},
d7A:function d7A(d){this.a=d},
d8x:function d8x(d,e){this.a=d
this.b=e},
d8y:function d8y(d){this.a=d},
d87:function d87(d,e){this.a=d
this.b=e},
d8r:function d8r(d,e,f){this.a=d
this.b=e
this.c=f},
d85:function d85(d,e,f){this.a=d
this.b=e
this.c=f},
d86:function d86(){},
d8G:function d8G(d){this.a=d},
d8H:function d8H(d){this.a=d},
d8I:function d8I(d){this.a=d},
d8K:function d8K(d){this.a=d},
d8J:function d8J(){},
d84:function d84(d,e,f){this.a=d
this.b=e
this.c=f},
d83:function d83(d,e){this.a=d
this.b=e},
d82:function d82(d,e){this.a=d
this.b=e},
d7N:function d7N(d){this.a=d},
d7M:function d7M(d,e){this.a=d
this.b=e},
d7O:function d7O(d){this.a=d},
d7L:function d7L(d,e){this.a=d
this.b=e},
d7P:function d7P(d){this.a=d},
d7K:function d7K(){},
d7Q:function d7Q(d){this.a=d},
d7I:function d7I(){},
d7J:function d7J(d){this.a=d},
d7R:function d7R(d){this.a=d},
d7H:function d7H(d,e){this.a=d
this.b=e},
d7S:function d7S(d){this.a=d},
d7G:function d7G(d,e){this.a=d
this.b=e},
d7C:function d7C(d,e){this.a=d
this.b=e},
d7T:function d7T(d){this.a=d},
d7F:function d7F(d,e){this.a=d
this.b=e},
d7U:function d7U(d){this.a=d},
d7E:function d7E(d){this.a=d},
d7B:function d7B(d,e){this.a=d
this.b=e},
d7V:function d7V(d,e,f){this.a=d
this.b=e
this.c=f},
d7W:function d7W(d){this.a=d},
d7D:function d7D(){},
d7X:function d7X(d){this.a=d},
akE:function akE(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
beH:function beH(){this.c=this.a=null},
dci:function dci(d,e){this.a=d
this.b=e},
dch:function dch(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ah1:function ah1(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
avV:function avV(d,e,f,g,h,i,j,k,l,m){var _=this
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
cAa:function cAa(d){this.a=d},
czv:function czv(d,e){this.a=d
this.b=e},
czl:function czl(d){this.a=d},
czm:function czm(d){this.a=d},
czF:function czF(d){this.a=d},
czC:function czC(d){this.a=d},
czD:function czD(d){this.a=d},
czE:function czE(d,e,f){this.a=d
this.b=e
this.c=f},
czx:function czx(d){this.a=d},
czw:function czw(d){this.a=d},
czn:function czn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
czA:function czA(d){this.a=d},
czz:function czz(d){this.a=d},
czy:function czy(d,e){this.a=d
this.b=e},
czY:function czY(d){this.a=d},
czS:function czS(d){this.a=d},
czV:function czV(d){this.a=d},
czU:function czU(){},
czR:function czR(d){this.a=d},
czT:function czT(d,e){this.a=d
this.b=e},
czQ:function czQ(){},
czs:function czs(){},
czt:function czt(d,e){this.a=d
this.b=e},
czu:function czu(d){this.a=d},
czq:function czq(d,e){this.a=d
this.b=e},
czr:function czr(d,e){this.a=d
this.b=e},
czI:function czI(d,e){this.a=d
this.b=e},
czB:function czB(d){this.a=d},
czJ:function czJ(d){this.a=d},
czK:function czK(d,e){this.a=d
this.b=e},
czL:function czL(d,e){this.a=d
this.b=e},
czM:function czM(d,e){this.a=d
this.b=e},
czN:function czN(d,e,f){this.a=d
this.b=e
this.c=f},
czO:function czO(d){this.a=d},
czP:function czP(d){this.a=d},
czG:function czG(d,e){this.a=d
this.b=e},
czX:function czX(d){this.a=d},
czH:function czH(d,e){this.a=d
this.b=e},
cA9:function cA9(d){this.a=d},
cA2:function cA2(d){this.a=d},
cA5:function cA5(d){this.a=d},
cA_:function cA_(d,e){this.a=d
this.b=e},
cA3:function cA3(){},
cA4:function cA4(d,e){this.a=d
this.b=e},
cA0:function cA0(d){this.a=d},
cA1:function cA1(d){this.a=d},
cA7:function cA7(){},
cA6:function cA6(d){this.a=d},
czZ:function czZ(d,e){this.a=d
this.b=e},
cA8:function cA8(d){this.a=d},
czo:function czo(d){this.a=d},
czW:function czW(d,e){this.a=d
this.b=e},
czp:function czp(d,e,f){this.a=d
this.b=e
this.c=f},
aIV:function aIV(){},
aIW:function aIW(){},
aIX:function aIX(){},
aJT:function aJT(){},
bWD(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase())
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
bWE(d){var w=B.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hrg(d,e){var w=d.ax
if(w<0)return!1
return w===e},
aW2(d,e){return C.hrh(d,e)},
hrh(d,e){var w=0,v=A.j(x.di),u,t,s,r,q,p
var $async$aW2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aZP(d),$async$aW2)
case 3:p=g
if(p!=null){try{t=B.R.aG(0,p.c,null)
if(x.f.b(t)){s=C.h_d(A.a1(t,x.N,x.z))
if(s==null){u=new A.Fj(D.a3M,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bWD(s,e,p.b)){u=new A.Fj(D.aE2,null)
w=1
break}r=p.a?D.dRz:D.aE1
u=new A.Fj(r,s)
w=1
break}}catch(o){}u=new A.Fj(D.a3M,null)
w=1
break}s=C.h_e(d)
if(s==null){u=new A.Fj(D.a3M,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bWD(s,e,null)){u=new A.Fj(D.aE2,null)
w=1
break}u=new A.Fj(D.aE1,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aW2,v)},
h_e(d){var w,v,u,t,s,r
try{w=B.a.i(d)
if(J.cZ(w,"\ufeff"))w=J.mu(w,1)
v=!1
if(J.cZ(w,"NGMYSNAP1|")){v=!0
w=B.c4.c8(0,B.cB.aI(J.mu(w,10)))}u=B.R.aG(0,w,null)
if(!x.f.b(u))return null
t=A.a1(u,x.N,x.z)
s=v?C.hrf(t):C.h_d(t)
return s}catch(r){return null}},
hrf(d){var w,v,u,t,s,r,q,p,o,n=new C.bWA(),m=new C.bWz(),l=d.h(0,"qi")
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
return new A.a4W("","",v,u,t,s,r,q,n,m,o,p,B.i_,new A.S(Date.now(),0,!1),-1)},
h_d(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.y(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.bWC()
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
l=A.B(new A.e6(J.b6(m,new C.bWB(w),x.eG),t),t.k("H.E"))}else l=A.a([],x.E)
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
return new A.a4W(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
fLm(d,e,f,g){var w=0,v=A.j(x.N),u,t,s,r
var $async$fLm=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:t=A.bWy(d,e,f,g)
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(t.a,s,"_")
u=A.FQ(A.Jh(t.eJ(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fLm,v)},
V9:function V9(d,e){this.a=d
this.b=e},
bWA:function bWA(){},
bWz:function bWz(){},
bWC:function bWC(){},
bWB:function bWB(d){this.a=d},
hOo(d){return A.c9(null,B.aX,!0,null,new C.fgn(),d,null,!0,!0,x.N)},
hOB(d,e,f,g){return A.c9(null,B.aX,!0,null,new C.fhA(g,f,e),d,null,!0,!0,x.y)},
amb:function amb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAP:function aAP(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dsN:function dsN(d,e){this.a=d
this.b=e},
dsO:function dsO(d){this.a=d},
dsE:function dsE(d,e){this.a=d
this.b=e},
dsC:function dsC(d){this.a=d},
dsM:function dsM(d){this.a=d},
dsL:function dsL(d,e){this.a=d
this.b=e},
dsB:function dsB(d,e){this.a=d
this.b=e},
dsA:function dsA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dsD:function dsD(d){this.a=d},
dsK:function dsK(){},
dsI:function dsI(d){this.a=d},
dsJ:function dsJ(d,e){this.a=d
this.b=e},
dsF:function dsF(){},
dsG:function dsG(d,e){this.a=d
this.b=e},
dsH:function dsH(d,e){this.a=d
this.b=e},
dsP:function dsP(d){this.a=d},
a_v:function a_v(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bpT:function bpT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Z9:function Z9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bh6:function bh6(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dsT:function dsT(d){this.a=d},
dsQ:function dsQ(d,e){this.a=d
this.b=e},
dsR:function dsR(d,e){this.a=d
this.b=e},
dsS:function dsS(d){this.a=d},
Za:function Za(d){this.a=d},
bh7:function bh7(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dsU:function dsU(d,e){this.a=d
this.b=e},
fgn:function fgn(){},
fhA:function fhA(d,e,f){this.a=d
this.b=e
this.c=f},
adi:function adi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ePh:function ePh(d){this.a=d},
ePi:function ePi(d){this.a=d},
Pa:function Pa(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Yh:function Yh(d){this.a=d},
ay6:function ay6(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d1T:function d1T(d){this.a=d},
d1Q:function d1Q(){},
d1R:function d1R(d){this.a=d},
d1S:function d1S(d){this.a=d},
Tc(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$Tc=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||B.a.i(f).length===0){w=1
break}w=3
return A.b(A.Mc(s),$async$Tc)
case 3:t=h
J.cf(t,A.E(["role",e,"text",B.a.i(f),"at",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z))
w=4
return A.b(A.amr(s,t),$async$Tc)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Tc,v)},
hrz(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=A.T(d).k("a2<1>")
v=A.B(new A.a2(d,new C.bXl(),w),w.k("H.E"))
w=v.length
if(w===0)return""
u=w<=24?v:B.d.fH(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,A.K)(u),++s){r=u[s]
q=J.a8(r)
p=J.y(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+A.t(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
bXl:function bXl(){},
hTX(d){return B.d.dM(B.BE,new C.fpu(d),new C.fpv()).r},
fpu:function fpu(d){this.a=d},
fpv:function fpv(){},
amG:function amG(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bhd:function bhd(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dze:function dze(d){this.a=d},
dzd:function dzd(d){this.a=d},
dz5:function dz5(d,e,f){this.a=d
this.b=e
this.c=f},
dza:function dza(d){this.a=d},
dz7:function dz7(d,e,f){this.a=d
this.b=e
this.c=f},
dzb:function dzb(d){this.a=d},
dz6:function dz6(d){this.a=d},
dzc:function dzc(d){this.a=d},
dz8:function dz8(d){this.a=d},
dz9:function dz9(d){this.a=d},
h0S(d){var w=A.c3H(new A.S(Date.now(),0,!1)),v=d.bj
if(v===w)return
d.bj=w
d.bR=0
d.c6=A.a([],x.s)},
h0U(d){return A.c9(null,B.w.j(0.82),!0,null,new C.c3M(),d,null,!0,!0,x.H)},
a5z:function a5z(d){this.a=d},
c3M:function c3M(){},
c3L:function c3L(d){this.a=d},
hdS(){var w=new A.S(Date.now(),0,!1),v=w.bN(A.dB(4-A.mn(w),0,0,0,0,0).a),u=A.c0(A.bx(v),1,4,0,0,0,0,0)
return""+A.bx(v)+"-W"+B.a.aT(B.o.u(1+B.k.bw(B.o.an(v.by(A.c0(A.bx(u),A.bG(u),A.bQ(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
f88(d,e){var w,v,u,t,s,r,q=A.Fv(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.q(t,"email")
r=B.a.i(J.k(s==null?"":s).toLowerCase())
if((B.a.c9(r,"+local.ngmy")?B.a.ap(r,0,r.length-11):r)===q)return t}t=A.E(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
hJ0(d,e){var w,v,u,t,s,r,q,p=A.Fv(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c9(q,"+local.ngmy")?B.a.ap(q,0,q.length-11):q)===p){w=A.aN(s.h(t,"winsLeft"))
w=w==null?null:B.k.O(w)
return w==null?0:w}}return 0},
i22(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=A.Fv(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c9(q,"+local.ngmy")?B.a.ap(q,0,q.length-11):q)===n){w=A.aN(s.h(t,o))
w=w==null?null:B.k.O(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
hPg(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=A.Fv(b5),b2=A.c52(),b3=C.hdS()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
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
return w==null?1:w}n=new C.fim()
for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.q(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c9(p,a3)?B.a.ap(p,0,p.length-11):p)!==b1)continue
m=n.$5(s,"perDay",a6,a7,b2)
if(m!=null)return m}for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.q(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c9(p,a3)?B.a.ap(p,0,p.length-11):p)!==b1)continue
l=n.$5(s,"perWeek",a8,a9,b3)
if(l!=null)return l}k=C.f88(b4,b5)
w=J.a8(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?A.a1(v.a(w.h(k,b0)),r,q):A.V(r,q)
w.n(k,b0,j)
for(w=b4.y,w=new A.cJ(w,A.a3(w).k("cJ<1,2>")).gag(0);w.C();){i=w.d
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
haz(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[1,2,3],v=d.a,u=0;u<3;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
if(w===0)return 1
t=q[e.aB(w)]
if(t===3&&d.f>=d.e)t=e.hf()?1:2
return t},
fR7(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[-1,-2],v=d.a,u=0;u<2;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
return w===0?-1:q[e.aB(w)]},
hPh(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=A.Fv(a3),a1=new C.fin()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
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
q=new C.fio(v+r+q>1,l)
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
return C.fR7(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
hPf(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=A.aN(i.h(0,"wins")),g=h==null?m:B.k.O(h)
if(g==null)g=0
h=A.aN(i.h(0,"loses"))
w=h==null?m:B.k.O(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.hdS():A.c52()
t=v+"|"+u
s=C.f88(d,e)
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
hXz(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
d.bf3()
w=C.hPh(d,e,a0)
if(w!=null){if(w===3)++d.f
C.aeH(d,e,w)
return w}v=C.hPg(d,e)
if(v!=null){if(v===3)++d.f
C.aeH(d,e,v)
return v}u=C.hPf(d,e,a0)
if(u!=null)return new C.fwv(d,a0,e).$1(u)
t=C.f88(d,e)
s=J.a8(t)
r=A.aN(s.h(t,"winStreak"))
q=r==null?null:B.k.O(r)
if(q==null)q=0
s=A.aN(s.h(t,"loseStreak"))
p=s==null?null:B.k.O(s)
if(p==null)p=0
o=new C.fwx(d,a0)
if(C.hJ0(d,e)>0){n=o.$0()
C.i22(d,e)
C.aeH(d,e,n)
return n}if(q>=d.c){n=new C.fww(d,a0).$0()
C.aeH(d,e,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.aeH(d,e,n)
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
C.aeH(d,e,f)
return f},
c4V(d){var w=0,v=A.j(x.y),u
var $async$c4V=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c4U(d),$async$c4V)
case 3:if(f){u=!0
w=1
break}u=A.c4U(d)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c4V,v)},
aeH(d,e,f){var w,v="winStreak",u="loseStreak",t=C.f88(d,e),s=J.a8(t),r=A.aN(s.h(t,v)),q=r==null?null:B.k.O(r)
if(q==null)q=0
r=A.aN(s.h(t,u))
w=r==null?null:B.k.O(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
fim:function fim(){},
fin:function fin(){},
fio:function fio(d,e){this.a=d
this.b=e},
fwv:function fwv(d,e,f){this.a=d
this.b=e
this.c=f},
fwx:function fwx(d,e){this.a=d
this.b=e},
fww:function fww(d,e){this.a=d
this.b=e},
ama:function ama(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bh4:function bh4(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cS$=d
_.b2$=e
_.c=_.a=null},
dsp:function dsp(d){this.a=d},
dso:function dso(d){this.a=d},
dsq:function dsq(d){this.a=d},
dsn:function dsn(d,e){this.a=d
this.b=e},
aJs:function aJs(){},
ME:function ME(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c5K:function c5K(){},
c5J:function c5J(){},
aoa:function aoa(d,e,f){this.c=d
this.d=e
this.a=f},
fMn(d,e,f){return A.c9(null,B.w.j(0.88),!0,null,new C.c6b(f,e),d,null,!0,!0,x.H)},
hvl(d){var w,v,u,t,s=B.a.i(d),r=s.split("-")
if(r.length===3){w=A.c7(r[0],null)
v=r[1]
u=A.c7(v,null)
t=A.c7(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?B.i7[u-1]:v)+" "+A.t(t)+", "+A.t(w)}return s},
MM:function MM(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c6b:function c6b(d,e){this.a=d
this.b=e},
bhK:function bhK(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
dS0:function dS0(d,e){this.a=d
this.b=e},
dRX:function dRX(){},
dRY:function dRY(){},
dRZ:function dRZ(d,e){this.a=d
this.b=e},
dS_:function dS_(d,e){this.a=d
this.b=e},
aK1:function aK1(){},
hdO(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.beA(new C.frR(w))
w=w.a
return w==null?null:w.c.a},
hdG(d){$.aT.x1$.push(new C.frE(d))},
he_(d){var w=$.rG().gbe(),v=w!=null
if(!v||w.c==null)return
if(C.hdO(w)==="GamePlayScreen")if(v&&w.c!=null&&w.pe())w.eH()},
hdZ(d){C.haG(d,0)},
haG(d,e){var w,v
if(e>4)return
w=d==null?$.rG().gbe():d
if(w==null||w.c==null)return
v=C.hdO(w)
if(v==="GameCenterScreen")return
if(D.eE_.t(0,v)&&w.pe()){w.eH()
$.aT.x1$.push(new C.feE(w,e))}},
aNS(d,e,f){return A.ei(A.cm(new C.ftd(e,d,f)),e,!0)},
frR:function frR(d){this.a=d},
frE:function frE(d){this.a=d},
frD:function frD(d){this.a=d},
feE:function feE(d,e){this.a=d
this.b=e},
ftd:function ftd(d,e,f){this.a=d
this.b=e
this.c=f},
aoe(d,e){var w=0,v=A.j(x.H),u
var $async$aoe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=A.Ug(e)
w=2
return A.b(A.aod(d,u),$async$aoe)
case 2:A.a6d(d,u)
return A.h(null,v)}})
return A.i($async$aoe,v)},
un(d,e,f,g,h,i,j,k){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$un=A.e(function(l,m){if(l===1)return A.f(m,v)
for(;;)switch(w){case 0:o=A.xV(g)
if(o.length===0){w=1
break}t=e==null?A.Km(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return A.b(A.MN(o),$async$un)
case 3:q=m
if(j!=null&&j.length!==0&&J.qF(q,new C.c6p(j))){w=1
break}p=e==null?new A.S(Date.now(),0,!1):e
J.pj(q,0,new A.j4(B.o.u(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return A.b(C.aoe(o,q),$async$un)
case 4:if(i==null||r==null||s)C.a6f(o).bz(new C.c6q(),x.S).eT(new C.c6r())
case 1:return A.h(u,v)}})
return A.i($async$un,v)},
a6f(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a6f=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=$.heX
m=A.xV(d)
if(n==null||m.length===0){w=1
break}w=3
return A.b(A.MN(m),$async$a6f)
case 3:t=f
s=J.cE(t)
if(!s.b8(t,new C.c6o())){w=1
break}w=4
return A.b(n.$2(m,t),$async$a6f)
case 4:r=f
q=J.a8(r)
if(q.gM(r)!==s.gM(t)){w=1
break}for(p=!1,o=0;o<s.gM(t);++o)if(B.R.ao(s.h(t,o).ad(),null)!==B.R.ao(q.h(r,o).ad(),null))p=!0
w=p?5:6
break
case 5:w=7
return A.b(C.aoe(m,r),$async$a6f)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$a6f,v)},
aYr(d){var w=0,v=A.j(x.S),u,t
var $async$aYr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fMq(d,!1),$async$aYr)
case 3:t=J
w=4
return A.b(C.aof(d,!1),$async$aYr)
case 4:u=t.dH(f,new C.c6n(new A.S(Date.now(),0,!1).bN(-864e8))).gM(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYr,v)},
aof(d,e){var w=0,v=A.j(x.ac),u,t,s,r
var $async$aof=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=A.xV(d)
if(r.length===0){u=A.a([],x.gi)
w=1
break}w=3
return A.b(A.MN(r),$async$aof)
case 3:t=g
s=A.Ug(t)
if(s.length!==J.ac(t))C.aoe(r,s)
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aof,v)},
hVu(d){var w,v,u,t=new A.S(Date.now(),0,!1),s=t.by(d).a,r=B.o.an(s,6e7)
if(r<1)return"Just now"
w=B.o.an(s,36e8)
if(w<1)return""+r+"m ago"
if(B.o.an(s,864e8)<1)return""+w+"h ago"
v=B.o.F(A.dh(d),12)===0?12:B.o.F(A.dh(d),12)
s=B.i7[A.bG(d)-1]
r=A.bx(d)===A.bx(t)?"":", "+A.bx(d)
w=B.a.aT(B.o.u(A.fY(d)),2,"0")
u=A.dh(d)<12?"AM":"PM"
return s+" "+A.bQ(d)+r+" \xb7 "+v+":"+w+" "+u},
bxV(d){var w=B.k.aa(Math.abs(d),2).split(".")
return"$"+A.ou(w[0],A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fcN(),null)+"."+w[1]},
bBu(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$bBu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aof(e,!1),$async$bBu)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
A.fMq(e,!0).bz(new C.fEL(e),t).bz(new C.fEM(),t).eT(new C.fEN())
w=4
return A.b(A.bV(B.K,null,new C.fEO(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bBu)
case 4:case 1:return A.h(u,v)}})
return A.i($async$bBu,v)},
fPj(d,e,f){var w=null,v=B.c.j(0.05),u=A.m(14),t=A.I(f.j(0.35),B.r,1)
return A.D(A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),B.bz,A.f1(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.dt)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.hG,w,w,w),1)},
dS1(d,e,f){var w=null,v=B.w.j(0.22),u=A.m(8),t=A.I(f.j(0.28),B.r,1)
return A.D(A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.f1(B.a3,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.eg)],x.p),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.LH,w,w,w),1)},
c6p:function c6p(d){this.a=d},
c6q:function c6q(){},
c6r:function c6r(){},
c6o:function c6o(){},
c6n:function c6n(d){this.a=d},
fcN:function fcN(){},
fEL:function fEL(d){this.a=d},
fEM:function fEM(){},
fEN:function fEN(){},
fEO:function fEO(d,e){this.a=d
this.b=e},
fEK:function fEK(d,e){this.a=d
this.b=e},
fEJ:function fEJ(d){this.a=d},
ac8:function ac8(d,e){this.c=d
this.a=e},
dS3:function dS3(){},
dS4:function dS4(){},
dS5:function dS5(){},
dS6:function dS6(d){this.a=d},
dS8:function dS8(){},
dS7:function dS7(d){this.a=d},
ac7:function ac7(d,e){this.c=d
this.a=e},
dS2:function dS2(){},
bBv(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return A.hQ(B.aX,!1,w,d,new C.fER(j,i,h,g,e,f),null,B.eN,!1,x.H)},
fER:function fER(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fEP:function fEP(d,e){this.a=d
this.b=e},
fEQ:function fEQ(d,e){this.a=d
this.b=e},
ayK:function ayK(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bdq:function bdq(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bq$=e
_.a7$=f
_.c=_.a=null},
d8U:function d8U(d,e){this.a=d
this.b=e},
d8T:function d8T(){},
acx:function acx(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aIY:function aIY(){},
ap0(d,e,f){return new C.aZi(f,d,e,null)},
hw_(d){var w=A.a(B.k.aa(d,2).split("."),x.s),v=A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=A.ou(w[0],v,new C.c8_(),null)
return B.d.aH(w,".")},
aYu(){var w=$.t4
if((w>0?$.t4=w-1:w)<=0)$.t4=0},
afT(d,e){var w=0,v=A.j(x.H),u
var $async$afT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=$.fTH
w=u!=null?2:3
break
case 2:w=4
return A.b(u.$2(d,e),$async$afT)
case 4:case 3:return A.h(null,v)}})
return A.i($async$afT,v)},
aZi:function aZi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c80:function c80(d){this.a=d},
c8_:function c8_(){},
Mf:function Mf(){},
bXS:function bXS(){},
fT6(d){if(d>0)return"+"+d
return""+d},
fSu(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fte(d,e){var w=J.q(e,d)
if(w==null)w=A.fs0().h(0,d)
return w==null?90:w},
fbL(d,e){var w,v,u=A.aX(x.S)
while(u.a<3){w=e.aB(41)-20
if(w===0)continue
u.J(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.J(0,d+v*7+3)
v=A.a([B.o.u(d)],x.s)
B.d.v(v,new A.jI(u,new C.fbM(),u.$ti.k("jI<cl.E,n>")))
B.d.fo(v,e)
return v},
h9G(d,e,f){var w,v,u,t,s=A.aX(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.J(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.J(0,f[B.o.F(u,5)]+u);++u}t=A.a([d],x.s)
B.d.v(t,A.p1(s,3,s.$ti.k("cl.E")))
B.d.fo(t,e)
return t},
hQF(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=A.a([],x.dA),b2=new A.eT()
b2.dH(42)
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
b1.push(new C.HW("Simplify \u221a("+t*s+"x^"+q+")",m,C.h9G(m,b2,A.a([""+(r+1)+"x^"+o+"\u221a"+n,A.t(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aB(35)
j=b2.aB(4)===0?1:2+b2.aB(4)
i=b2.aB(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.HW("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.fbL(k,b2)))}else if(u===2){k=2+b2.aB(18)
j=b2.aB(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aB(10)+2
b1.push(new C.HW("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.fbL(g,b2)))}else b1.push(new C.HW("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.fbL(k,b2)))}else if(u===3){e=b2.aB(11)-5
o=b2.aB(11)
n=b2.aB(11)
d=b2.aB(11)+2
l=b2.hf()?1:-1
a0=e+l*(b2.aB(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===B.k.jL(a4)?""+B.k.O(a4):"\u221a"+a3
b1.push(new C.HW("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.fbL(a0,b2)))}else{a6=2+b2.aB(10)
a7=a6+2+b2.aB(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.HW("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.h9G(m,b2,A.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
i0h(d){var w,v,u=x.s,t=A.a(d.split(""),u)
if(t.length<4)return new A.dA(A.a(d.split(""),u),x.bJ).fU(0)
for(w=0;w<12;++w){B.d.fo(t,B.cI)
v=B.d.fU(t)
if(v!==d)return v}return new A.dA(t,x.bJ).fU(0)},
HW:function HW(d,e,f){this.a=d
this.b=e
this.c=f},
fbM:function fbM(){},
anD:function anD(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBA:function aBA(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
dL3:function dL3(d){this.a=d},
dL4:function dL4(d){this.a=d},
dL5:function dL5(d){this.a=d},
dL6:function dL6(d,e){this.a=d
this.b=e},
dL7:function dL7(d,e){this.a=d
this.b=e},
dL8:function dL8(d){this.a=d},
dL2:function dL2(d){this.a=d},
dL9:function dL9(d){this.a=d},
dL1:function dL1(d){this.a=d},
dLc:function dLc(d){this.a=d},
dLd:function dLd(d){this.a=d},
dLb:function dLb(d,e){this.a=d
this.b=e},
dLa:function dLa(d,e){this.a=d
this.b=e},
aog:function aog(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBR:function aBR(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
dSq:function dSq(d,e,f){this.a=d
this.b=e
this.c=f},
dSr:function dSr(d){this.a=d},
dSm:function dSm(d){this.a=d},
dSo:function dSo(d,e){this.a=d
this.b=e},
dSn:function dSn(d,e){this.a=d
this.b=e},
dSp:function dSp(d,e){this.a=d
this.b=e},
dSl:function dSl(d){this.a=d},
hsb(d){var w,v,u,t,s,r,q,p=new A.S(Date.now(),0,!1),o=p.bN(36e8)
try{w=d.h(0,"start")
p=A.mD(J.k(w==null?"":w)).bQ()
w=d.h(0,"end")
o=A.mD(J.k(w==null?"":w)).bQ()}catch(v){}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"title")
u=J.k(u==null?"Event":u)
t=p
s=o
r=d.h(0,"notes")
r=r==null?null:J.k(r)
q=d.h(0,"location")
return new C.r4(w,u,t,s,r,q==null?null:J.k(q))},
a6l(d){var w=0,v=A.j(x.ck),u,t,s,r,q,p,o
var $async$a6l=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.b)
w=1
break}w=3
return A.b(A.aA(),$async$a6l)
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
p=A.cD(p,new C.c6R(),p.$ti.k("H.E"),x.b1)
p=A.B(p,A.a3(p).k("H.E"))
B.d.b1(p,new C.c6S())
u=p
w=1
break}catch(n){r=A.a9(n)
$.am.$1("[calendar-memory] load: "+A.t(r))
p=A.a([],x.b)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$a6l,v)},
aoy(d,e){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$aoy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.a6l(d),$async$aoy)
case 2:r=g
q=J.cE(r)
q.bn(r,new C.c6O(e))
q.J(r,e)
q.b1(r,new C.c6P())
w=3
return A.b(A.aA(),$async$aoy)
case 3:u=g
t=B.a.i(d.toLowerCase())
q=q.kh(r,80)
s=q.$ti.k("J<aj.E,a4<n,@>>")
q=A.B(new A.J(q,new C.c6Q(),s),s.k("aj.E"))
w=4
return A.b(u.ar("String","ngmy_helper_calendar_v1_"+t,B.R.ao(q,null)),$async$aoy)
case 4:return A.h(null,v)}})
return A.i($async$aoy,v)},
hvy(d,e){var w=Date.now(),v=new A.S(w,0,!1).bQ()
w=J.dH(d,new C.c6T(v,v.bN(A.dB(14,0,0,0,0,0).a)))
w=A.B(w,w.$ti.k("H.E"))
return w},
h1q(d){var w,v,u,t,s,r,q,p,o,n,m=C.hvy(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=A.db(m,0,A.dJ(20,"count",x.S),A.T(m).c),v=w.$ti,w=new A.bX(w,w.gM(0),v.k("bX<aj.E>")),v=v.k("aj.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
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
r4:function r4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c6R:function c6R(){},
c6S:function c6S(){},
c6O:function c6O(d){this.a=d},
c6P:function c6P(){},
c6Q:function c6Q(){},
c6T:function c6T(d,e){this.a=d
this.b=e},
hsc(d){var w,v,u,t,s,r,q,p,o=null,n=new A.S(Date.now(),0,!1)
try{w=d.h(0,"when")
n=A.mD(J.k(w==null?"":w)).bQ()}catch(v){}w=d.h(0,"id")
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
return new C.r5(w,u,t,s,r,q,J.k(p==null?"user":p))},
h_M(d){var w=B.o.F(A.dh(d),12)===0?12:B.o.F(A.dh(d),12),v=A.dh(d)>=12?"PM":"AM"
return""+A.bG(d)+"/"+A.bQ(d)+" "+w+":"+B.a.aT(B.o.u(A.fY(d)),2,"0")+" "+v},
Tp(d){var w=0,v=A.j(x.e),u,t,s,r,q,p,o
var $async$Tp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.x)
w=1
break}w=3
return A.b(A.aA(),$async$Tp)
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
p=A.cD(p,new C.c_f(),p.$ti.k("H.E"),x.Q)
p=A.B(p,A.a3(p).k("H.E"))
B.d.b1(p,new C.c_g())
u=p
w=1
break}catch(n){r=A.a9(n)
$.am.$1("[call-memory] load: "+A.t(r))
p=A.a([],x.x)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Tp,v)},
aWP(d,e){var w=0,v=A.j(x.H),u,t,s,r
var $async$aWP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$aWP)
case 2:u=g
t=A.db(e,0,A.dJ(120,"count",x.S),A.T(e).c).dE(0)
s=B.a.i(d.toLowerCase())
r=A.T(t).k("J<1,a4<n,@>>")
r=A.B(new A.J(t,new C.c_d(),r),r.k("aj.E"))
w=3
return A.b(u.ar("String","ngmy_call_memory_v1_"+s,B.R.ao(r,null)),$async$aWP)
case 3:return A.h(null,v)}})
return A.i($async$aWP,v)},
aWQ(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$aWQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:p=A.V(x.N,x.Q)
o=J
w=2
return A.b(C.Tp(d),$async$aWQ)
case 2:u=o.aW(g)
case 3:if(!u.C()){w=4
break}t=u.gU(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("bc<2>")
q=A.B(new A.bc(p,u),u.k("H.E"))
B.d.b1(q,new C.c_e())
w=5
return A.b(C.aWP(d,q),$async$aWQ)
case 5:return A.h(null,v)}})
return A.i($async$aWQ,v)},
c_h(d,e){var w=0,v=A.j(x.e),u,t,s
var $async$c_h=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Tp(d),$async$c_h)
case 3:t=s.dH(g,new C.c_i(e.bN(-72e8),e.bN(72e8)))
t=A.B(t,t.$ti.k("H.E"))
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c_h,v)},
h_N(d,e){var w,v,u,t,s,r=J.a8(d)
if(r.gal(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.kh(d,e),v=w.$ti,w=new A.bX(w,w.gM(0),v.k("bX<aj.E>")),v=v.k("aj.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gUA()+"\n"
t=t.f
if(t!=null&&B.a.i(t).length!==0){s=B.a.i(t)
u+="  Voicemail/text: "+(s.length>180?B.a.ap(s,0,177)+"\u2026":s)+"\n"}}r=r.gM(d)>e?u+("\u2026 and "+(r.gM(d)-e)+" more\n"):u
return B.a.i(r.charCodeAt(0)==0?r:r)},
hXj(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new A.S(q,0,!1).bQ(),o=d.toLowerCase(),n=A.c0(A.bx(p),A.bG(p),A.bQ(p),0,0,0,0,0)
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
return A.c0(A.bx(n),A.bG(n),A.bQ(n),u,t,0,0,0)},
hfm(d){var w=A.af("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
r5:function r5(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c_f:function c_f(){},
c_g:function c_g(){},
c_d:function c_d(){},
c_e:function c_e(){},
c_i:function c_i(d,e){this.a=d
this.b=e},
h1t(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lu(t,w,v,u==null?null:J.k(u))},
hvE(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b6(v,new C.c6Z(),x.bP)
v=A.B(v,v.$ti.k("aj.E"))}if(v==null)v=D.d_Z
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.y(d.h(0,"printable"),!0)
return new C.ie(r,w,v,u,t,typeof d.h(0,s)=="number"?B.k.O(A.f8(d.h(0,s))):0)},
hvD(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.hJd(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?B.k.O(A.f8(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?B.k.O(A.f8(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b6(s,new C.c6X(),x.u)
s=A.B(s,s.$ti.k("aj.E"))}return new C.i0(p,w,v,u,s==null?D.ave:s,t)},
hJe(d){var w,v,u,t=A.E([G.Be,"investments",B.ou,"games",B.jt,"loans",B.hx,"withdrawals",B.kJ,"deposits",B.kK,"civic",B.kI,"store",B.qS,"jobs",B.mf,"refunds",B.eR,"account",B.lD,"music",B.xH,"help"],x.dk,x.N)
for(w=new A.cJ(t,A.a3(t).k("cJ<1,2>")).gag(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
hJd(d){switch(d){case"investments":return G.Be
case"games":return B.ou
case"loans":return B.jt
case"withdrawals":return B.hx
case"deposits":return B.kJ
case"civic":return B.kK
case"store":return B.kI
case"jobs":return B.qS
case"refunds":return B.mf
case"account":return B.eR
case"music":return B.lD
default:return B.xH}},
mT(d){var w=A.a([new C.lu("text",d,null,null)],x.a)
return w},
afQ(){var w=null,v=x.v
return A.a([new C.i0("investments","Investments",G.Be,4280468830,A.a([new C.ie("inv1","How do I buy an investment plan?",C.mT("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.ie("inv2","When do I get paid from my plan?",C.mT("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.ie("inv3","Can I have more than one plan?",C.mT("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.i0("games","Games",B.ou,4287323382,A.a([new C.ie("gam1","How do NGMY games work?",C.mT("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.ie("gam2","Why did my game payout change?",C.mT("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.i0("loans","Loans",B.jt,4294538006,A.a([new C.ie("loan1","How do I apply for a loan?",C.mT("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.ie("loan2","What is the repayment period?",C.mT("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.i0("withdrawals","Withdrawals",B.hx,4282090230,A.a([new C.ie("wd1","How do I withdraw money?",C.mT("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.ie("wd2","Why is my withdrawal pending?",C.mT("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.i0("deposits","Deposits",B.kJ,4279548070,A.a([new C.ie("dep1","How do I deposit funds?",C.mT("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.ie("dep2","How long until my deposit posts?",C.mT("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.i0("civic","Civic Registry",B.kK,4289170426,A.a([new C.ie("civ1","What is Civic Registry?",C.mT("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.ie("civ2","What does \u201cmissed\u201d mean on my profile?",C.mT("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.i0("store","NGMY Store",B.kI,4293675161,A.a([new C.ie("sto1","How do I buy from NGMY Store?",C.mT("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.ie("sto2","How do I sell in the store?",C.mT("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.i0("jobs","Jobs & Creator",B.qS,4293548044,A.a([new C.ie("job1","How do I find jobs?",C.mT("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.ie("job2","How do I post a job?",C.mT("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.i0("refunds","Refunds",B.mf,4293870660,A.a([new C.ie("ref1","Can I get a refund?",C.mT("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.ie("ref2","How long do refunds take?",C.mT("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.i0("account","Account",B.eR,4281908728,A.a([new C.ie("acc1","How do I update my profile?",C.mT("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.ie("acc2","I forgot my password \u2014 what now?",C.mT("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.i0("music","Music Charts",B.lD,4290807036,A.a([new C.ie("mus1","What are Music Charts?",C.mT("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.ie("mus2","How do I upload music?",C.mT("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.i0("help","Help Center",B.xH,4279080072,A.a([new C.ie("hlp1","Where can I get live help?",C.mT("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.ie("hlp2","How do daily Helper limits work?",C.mT("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
h1u(d){var w,v=J.a8(d),u=v.gal(d)
if(u)return C.afQ()
v=v.dt(d,new C.c71(),x.i)
w=A.B(v,v.$ti.k("aj.E"))
B.d.b1(w,new C.c72())
return w.length===0?C.afQ():w},
h1v(d){var w=J.b6(d,new C.c73(),x.P)
w=A.B(w,w.$ti.k("aj.E"))
return A.E(["categories",w,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z)},
aoA(d){return C.hvF(d)},
hvF(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q,p
var $async$aoA=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.aA(),$async$aoA)
case 6:s=f
w=7
return A.b(s.ar("String","ngmy_helper_kb_v1",B.R.ao(C.h1v(d),null)),$async$aoA)
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
return A.i($async$aoA,v)},
c70(){var w=0,v=A.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$c70=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$c70)
case 7:r=e
q=A.aU(J.q(r.a,"ngmy_helper_kb_v1"))
if(q==null||B.a.i(q).length===0){l=C.afQ()
u=l
w=1
break}p=B.R.aG(0,q,null)
if(!x.f.b(p)){l=C.afQ()
u=l
w=1
break}o=J.q(p,"categories")
if(!x.j.b(o)){l=C.afQ()
u=l
w=1
break}n=C.h1u(o)
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
l=C.afQ()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$c70,v)},
aYQ(){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$aYQ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c1(),$async$aYQ)
case 7:if(!e){u=null
w=1
break}w=8
return A.b(A.f0("ngmy_helper_kb",null,!1,B.bG),$async$aYQ)
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
return A.i($async$aYQ,v)},
aYR(d){return C.hvG(d)},
hvG(d){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aYR=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c1(),$async$aYR)
case 7:if(!f){u=!1
w=1
break}w=8
return A.b(A.hA("ngmy_helper_kb",d,!1,!1,B.cF,null),$async$aYR)
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
return A.i($async$aYR,v)},
aoB(){var w=0,v=A.j(x.I),u,t,s,r
var $async$aoB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c70(),$async$aoB)
case 3:s=e
w=4
return A.b(C.aYQ(),$async$aoB)
case 4:r=e
w=r!=null&&x.j.b(J.q(r,"categories"))?5:6
break
case 5:t=C.h1u(x.j.a(J.q(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return A.b(C.aoA(t),$async$aoB)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoB,v)},
c74(d){var w=0,v=A.j(x.y),u
var $async$c74=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aoA(d),$async$c74)
case 3:u=C.aYR(C.h1v(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c74,v)},
lu:function lu(d,e,f,g){var _=this
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
c7_:function c7_(){},
c6Z:function c6Z(){},
i0:function i0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c6Y:function c6Y(){},
c6X:function c6X(){},
c71:function c71(){},
c72:function c72(){},
c73:function c73(){},
b74:function b74(d){this.a=d},
Un:function Un(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aC2:function aC2(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
dW5:function dW5(){},
dW6:function dW6(){},
dW_:function dW_(d){this.a=d},
dW0:function dW0(d){this.a=d},
dVJ:function dVJ(d,e){this.a=d
this.b=e},
dVK:function dVK(d){this.a=d},
dVL:function dVL(d,e,f){this.a=d
this.b=e
this.c=f},
dVI:function dVI(d){this.a=d},
dVX:function dVX(d,e){this.a=d
this.b=e},
dVY:function dVY(d,e){this.a=d
this.b=e},
dVZ:function dVZ(d){this.a=d},
dVR:function dVR(d){this.a=d},
dVS:function dVS(d,e,f){this.a=d
this.b=e
this.c=f},
dVQ:function dVQ(d,e){this.a=d
this.b=e},
dVW:function dVW(d,e,f){this.a=d
this.b=e
this.c=f},
dVV:function dVV(d,e){this.a=d
this.b=e},
dVU:function dVU(d,e){this.a=d
this.b=e},
dVT:function dVT(d,e,f){this.a=d
this.b=e
this.c=f},
dVN:function dVN(d){this.a=d},
dVM:function dVM(d){this.a=d},
dVO:function dVO(d,e){this.a=d
this.b=e},
dVP:function dVP(d){this.a=d},
dW4:function dW4(d,e){this.a=d
this.b=e},
dW3:function dW3(d,e){this.a=d
this.b=e},
dW2:function dW2(){},
dW1:function dW1(d,e){this.a=d
this.b=e},
OC:function OC(d,e){this.c=d
this.a=e},
b8V:function b8V(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cIB:function cIB(d){this.a=d},
cIA:function cIA(d,e){this.a=d
this.b=e},
cIy:function cIy(d,e){this.a=d
this.b=e},
cIC:function cIC(d){this.a=d},
cIz:function cIz(d,e){this.a=d
this.b=e},
cIx:function cIx(d,e){this.a=d
this.b=e},
cID:function cID(d){this.a=d},
cIE:function cIE(d,e){this.a=d
this.b=e},
ZX:function ZX(d,e,f){this.c=d
this.d=e
this.a=f},
aE0:function aE0(){this.d=$
this.c=this.a=null},
eKm:function eKm(d,e){this.a=d
this.b=e},
eKn:function eKn(d){this.a=d},
eKt:function eKt(){},
eKs:function eKs(d,e){this.a=d
this.b=e},
eKr:function eKr(d,e){this.a=d
this.b=e},
eKo:function eKo(d,e){this.a=d
this.b=e},
eKq:function eKq(d,e,f){this.a=d
this.b=e
this.c=f},
eKp:function eKp(d,e,f){this.a=d
this.b=e
this.c=f},
ZW:function ZW(d,e){this.c=d
this.a=e},
aE_:function aE_(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
eKi:function eKi(d,e){this.a=d
this.b=e},
eKg:function eKg(d){this.a=d},
eKh:function eKh(d,e){this.a=d
this.b=e},
eKk:function eKk(d,e){this.a=d
this.b=e},
eKl:function eKl(d){this.a=d},
eKj:function eKj(d,e){this.a=d
this.b=e},
hvB(d){var w=new A.J(d,new C.c6U(),A.T(d).k("J<1,n>")).aH(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
c6V(d,e,f){return C.hvC(d,e,f)},
hvC(b4,b5,b6){var w=0,v=A.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$c6V=A.e(function(b8,b9){if(b8===1)return A.f(b9,v)
for(;;)switch(w){case 0:b3=B.a.i(b5)
if(b3.length===0){u=new A.Jw([A.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return A.b(A.qB(A.mX(b3),C.hvB(b6)+"\n\nAdmin instruction:\n"+b4,B.hj,null),$async$c6V)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=B.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new A.Jw([A.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=B.a.i(a3)
if(J.cZ(s,"```"))s=B.a.e8(J.fWs(s,A.af("^```(?:json)?\\s*",!0,!1,!1,!1),""),A.af("\\s*```$",!0,!1,!1,!1),"")
r=B.R.aG(0,s,null)
a3=x.f
if(!a3.b(r)){a3=A.a([],x.Y)
u=new A.Jw([a3,"AI response was not valid JSON.",null,null])
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
u=new A.Jw([a3,"AI did not return any categories.",p,o])
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
if(a6.b(d))for(a9=J.aW(d);a9.C();){a1=a9.gU(a9)
J.cf(a0,C.h1t(A.a1(a3.a(a1),a4,a5)))}if(J.ac(a0)===0){a9=J.q(e,"answer")
J.cf(a0,new C.lu("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=A.t(f)
b1=J.q(e,"question")
J.cf(g,new C.ie("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.y(J.q(e,"printable"),!0),f))}a9=J.q(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.q(j,"iconKey")
b0=C.hvA(J.k(b0==null?"help":b0))
b1=typeof J.q(j,"colorValue")=="number"?B.k.O(A.f8(J.q(j,"colorValue"))):4284773515
J.cf(m,new C.i0(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ac(a3)!==0)===!0?o:null
u=new A.Jw([m,null,p,a3])
w=1
break}catch(b7){a2=A.a9(b7)
a3=A.t(a2)
a4=A.a([],x.Y)
u=new A.Jw([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c6V,v)},
hvA(d){switch(d){case"investments":return G.Be
case"games":return B.ou
case"loans":return B.jt
case"withdrawals":return B.hx
case"deposits":return B.kJ
case"civic":return B.kK
case"store":return B.kI
case"jobs":return B.qS
case"refunds":return B.mf
case"account":return B.eR
case"music":return B.lD
default:return B.xH}},
hVQ(d,e,f){var w,v,u,t=A.bl(d,!0,x.i)
if(f!=null&&J.ac(e)===1){w=B.d.bd(t,new C.ftB(f))
if(w>=0){t[w]=J.fo(e).cE3(f,t[w].f)
return t}}B.d.v(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].b9c(u)
return t},
c6U:function c6U(){},
ftB:function ftB(d){this.a=d},
d_2:function d_2(d){this.a=d},
Uo:function Uo(d,e,f){this.c=d
this.d=e
this.a=f},
aC4:function aC4(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
dWG:function dWG(){},
dWm:function dWm(d,e){this.a=d
this.b=e},
dWr:function dWr(d,e){this.a=d
this.b=e},
dWp:function dWp(d,e){this.a=d
this.b=e},
dWn:function dWn(d){this.a=d},
dWo:function dWo(d){this.a=d},
dWq:function dWq(d,e,f){this.a=d
this.b=e
this.c=f},
dWi:function dWi(){},
dWj:function dWj(){},
dWk:function dWk(){},
dWl:function dWl(){},
dWw:function dWw(d,e){this.a=d
this.b=e},
dWx:function dWx(d){this.a=d},
dWy:function dWy(d){this.a=d},
dWz:function dWz(d){this.a=d},
dWA:function dWA(d){this.a=d},
dWB:function dWB(d){this.a=d},
dWC:function dWC(){},
dWD:function dWD(d){this.a=d},
dWv:function dWv(d){this.a=d},
dWE:function dWE(d){this.a=d},
dWu:function dWu(d){this.a=d},
dWF:function dWF(d,e){this.a=d
this.b=e},
dWt:function dWt(d,e){this.a=d
this.b=e},
dWs:function dWs(d,e){this.a=d
this.b=e},
hDp(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.a([],x.eO)
for(w=A.af("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kK(0,d),w=new A.J_(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=B.a.ap(d,t,q)
o=u?B.cm:B.aK
m.push(new A.eo(p,n,n,B.cO,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?B.cm:B.aK
m.push(new A.eo(p,n,n,B.cO,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,B.I,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?B.cm:B.aK
m.push(new A.eo(p,n,n,B.cO,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,B.cD,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?B.cm:B.aK
m.push(new A.eo(p,n,n,B.cO,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,B.ms,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=B.a.b_(d,t)
m.push(A.dq(n,n,n,n,n,n,n,n,n,A.l(n,n,u?B.cm:B.aK,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return A.tf(n,n,n,B.eC,n,n,!0,n,A.dq(m,n,n,n,n,n,n,n,n,n,n),B.a5,n,n,B.de,B.cd)},
dda:function dda(d){this.a=d},
azD:function azD(d,e){this.a=d
this.b=e},
aoz:function aoz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aC3:function aC3(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
dWf:function dWf(d,e){this.a=d
this.b=e},
dWg:function dWg(d,e){this.a=d
this.b=e},
dW7:function dW7(d){this.a=d},
dW8:function dW8(d){this.a=d},
dWh:function dWh(){},
dWa:function dWa(d,e){this.a=d
this.b=e},
dW9:function dW9(d,e){this.a=d
this.b=e},
dWc:function dWc(){},
dWe:function dWe(){},
dWd:function dWd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dWb:function dWb(d,e){this.a=d
this.b=e},
azB:function azB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aaH:function aaH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aYP:function aYP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c6W:function c6W(d){this.a=d},
aaz:function aaz(d,e,f){this.c=d
this.d=e
this.a=f},
cCh:function cCh(d){this.a=d},
cCi:function cCi(){},
cCj:function cCj(d){this.a=d},
azC:function azC(d,e,f){this.c=d
this.d=e
this.a=f},
beV:function beV(){this.c=this.a=this.d=null},
ddb:function ddb(d,e){this.a=d
this.b=e},
ddd:function ddd(d,e){this.a=d
this.b=e},
ddc:function ddc(d){this.a=d},
hx8(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
hx9(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
hx7(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
h9B(d){var w
if(new A.a2(A.a(d.split("\n"),x.s),new C.fbw(),x.cc).gM(0)<3)w=d.length>100&&B.a.t(d,"\n")
else w=!0
return w},
hWZ(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.hx7(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
apn:function apn(d,e){this.a=d
this.b=e},
I0:function I0(d,e){this.a=d
this.b=e},
rb:function rb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fbw:function fbw(){},
aoC:function aoC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aC5:function aC5(d,e,f,g,h,i,j){var _=this
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
dWU:function dWU(d,e){this.a=d
this.b=e},
dWL:function dWL(d){this.a=d},
dWN:function dWN(){},
dWO:function dWO(d,e){this.a=d
this.b=e},
dWP:function dWP(d){this.a=d},
dWQ:function dWQ(){},
dWR:function dWR(d,e){this.a=d
this.b=e},
dWS:function dWS(d){this.a=d},
dWT:function dWT(d){this.a=d},
dWM:function dWM(d,e){this.a=d
this.b=e},
dX0:function dX0(d,e){this.a=d
this.b=e},
dWY:function dWY(){},
dWZ:function dWZ(d,e){this.a=d
this.b=e},
dX_:function dX_(d,e){this.a=d
this.b=e},
dWX:function dWX(d,e){this.a=d
this.b=e},
dWW:function dWW(d,e){this.a=d
this.b=e},
dX2:function dX2(d){this.a=d},
dX1:function dX1(d){this.a=d},
dWK:function dWK(d,e){this.a=d
this.b=e},
dWJ:function dWJ(d,e){this.a=d
this.b=e},
dX3:function dX3(d,e){this.a=d
this.b=e},
dWV:function dWV(d,e){this.a=d
this.b=e},
dWH:function dWH(d){this.a=d},
dWI:function dWI(d){this.a=d},
aK9:function aK9(){},
c76(d){var w=0,v=A.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$c76=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=D.QD
w=1
break}w=3
return A.b(A.aA(),$async$c76)
case 3:r=f
q=B.a.i(d.toLowerCase())
t=A.aU(J.q(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.QD
w=1
break}try{q=A.a1(x.f.a(B.R.aG(0,t,null)),x.N,x.z)
p=J.y(q.h(0,"contacts"),!0)
o=J.y(q.h(0,"calendar"),!0)
n=J.y(q.h(0,"calls"),!0)
q=J.y(q.h(0,"allGrantedOnce"),!0)
u=new C.Up(p,o,n,q)
w=1
break}catch(l){s=A.a9(l)
$.am.$1("[helper-perms] load: "+A.t(s))
u=D.QD
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c76,v)},
aoD(d,e){var w=0,v=A.j(x.H),u
var $async$aoD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){w=1
break}w=4
return A.b(A.aA(),$async$aoD)
case 4:w=3
return A.b(g.ar("String","ngmy_helper_permissions_v1_"+B.a.i(d.toLowerCase()),B.R.ao(e.ad(),null)),$async$aoD)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aoD,v)},
c75(d){var w=0,v=A.j(x.gp),u,t
var $async$c75=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=new C.Up(!0,!0,!0,!0)
w=3
return A.b(C.aoD(d,t),$async$c75)
case 3:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c75,v)},
hfn(d){var w=B.a.i(d.toLowerCase()),v=A.af("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=A.af("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=A.af("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=A.af("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
hfl(d){var w=A.af("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
Up:function Up(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bBB(d,e,f,g,h){var w=0,v=A.j(x.H),u,t,s
var $async$bBB=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return A.b(C.aYL(h),$async$bBB)
case 3:if(j){w=1
break}w=4
return A.b(C.aov(h),$async$bBB)
case 4:if(d.e==null){w=1
break}t=A.qi(d,!0)
t.toString
s=A.df()
s.b=A.o9(new C.fFB(g,e,f,s),!1,!1)
t.lC(0,s.bc())
case 1:return A.h(u,v)}})
return A.i($async$bBB,v)},
fFB:function fFB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fFA:function fFA(d){this.a=d},
YG:function YG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
az2:function az2(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
dav:function dav(d){this.a=d},
daw:function daw(d,e,f){this.a=d
this.b=e
this.c=f},
daB:function daB(){},
daA:function daA(d){this.a=d},
dax:function dax(d){this.a=d},
day:function day(){},
daz:function daz(d){this.a=d},
aJ2:function aJ2(){},
hwB(d){var w=B.a.i(d),v=A.af("[^A-Z0-9]",!0,!1,!1,!1),u=A.aJ(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
hwA(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
ap9(d){return C.hwy(d)},
hwy(d){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$ap9=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.f0("ngmy_local_deposit_qr_v1_"+B.a.i(d),null,!1,B.bG),$async$ap9)
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
return A.i($async$ap9,v)},
aZG(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aZG=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.hwB(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.f0("ngmy_local_deposit_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bG),$async$aZG)
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
return A.i($async$aZG,v)},
h1T(d){var w,v=B.a.i(d)
if(B.a.a0(v,"NGMYLOCALDEP1|")){w=B.a.i(B.a.b_(v,14))
return w.length===0?null:w}return null},
hwz(d,e,f){var w=B.a.i(f)
if(w.length===0)return!1
return B.d.b8(e,new C.c8U(B.a.i(d.toLowerCase()),w))},
h1U(d,e,f,g,h){var w,v,u=J.a8(g),t=u.h(g,"lockedToEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=B.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.pB(!1,0,y.u)
if(s!==B.a.i(f.toLowerCase()))return new C.pB(!1,0,y.j)
v=B.a.i(h)
if(v.length===0)return new C.pB(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.pB(!1,0,"Verification code does not match this deposit.")
if(!C.hwz(e,d,w))return new C.pB(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
fMG(d,e){var w,v,u="amount",t=J.a8(d),s=t.h(d,"redeemedBy")
if(B.a.i(J.k(s==null?"":s)).length!==0)return D.duN
s=t.h(d,"lockedToEmail")
w=B.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=B.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){A.aN(t.h(d,u))
return new C.MZ(!0,!1,!1,!0)}if(w!==B.a.i(e.toLowerCase())){A.aN(t.h(d,u))
return new C.MZ(!0,!1,!0,!1)}A.aN(t.h(d,u))
return new C.MZ(!0,!1,!1,!1)},
c9_(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$c9_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=C.h1T(d)
if(s==null){u=D.QF
w=1
break}w=3
return A.b(C.ap9(s),$async$c9_)
case 3:t=g
if(t==null){u=D.QF
w=1
break}u=C.fMG(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c9_,v)},
aZI(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$aZI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aZG(d),$async$aZI)
case 3:s=g
if(s==null||s.length===0){u=D.QF
w=1
break}w=4
return A.b(C.ap9(s),$async$aZI)
case 4:t=g
if(t==null){u=D.QF
w=1
break}u=C.fMG(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZI,v)},
c90(d,e,f,g,h){var w=0,v=A.j(x.D),u,t
var $async$c90=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aZG(d),$async$c90)
case 3:t=j
if(t==null||t.length===0){u=new C.pB(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.UK(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c90,v)},
UK(d,e,f,g,h){return C.hwC(d,e,f,g,h)},
hwC(a2,a3,a4,a5,a6){var w=0,v=A.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$UK=A.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.h1T(a4)
if(a0==null){u=new C.pB(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return A.b(C.ap9(a0),$async$UK)
case 3:k=a8
if(k==null){u=new C.pB(!1,0,y.m)
w=1
break}j=C.fMG(k,a5)
if(j.b){u=new C.pB(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.pB(!1,0,y.u)
w=1
break}if(j.c){u=new C.pB(!1,0,y.j)
w=1
break}i=C.h1U(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=A.aN(J.q(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.pB(!1,0,"Invalid deposit amount.")
w=1
break}r=new A.S(Date.now(),0,!1).a5().ac()
q=B.a.i(a5.toLowerCase())
t=5
w=8
return A.b(A.f0("ngmy_local_deposit_qr_v1_"+B.a.i(a0),null,!1,B.bG),$async$UK)
case 8:p=a8
if(p==null){u=new C.pB(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.q(p,"redeemedBy")
if(B.a.i(J.k(g==null?"":g)).length!==0){u=new C.pB(!1,0,"This deposit code was already used.")
w=1
break}o=C.h1U(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=B.a.i(a0)
f=x.N
e=x.z
n=A.dW(p,f,e)
J.aG(n,"redeemedBy",q)
J.aG(n,"redeemedAt",r)
w=9
return A.b(A.hA("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,B.cF,null),$async$UK)
case 9:n=J.q(p,"shortCode")
m=B.a.i(J.k(n==null?"":n))
w=J.ac(m)!==0?10:11
break
case 10:w=12
return A.b(A.hA("ngmy_local_deposit_code_v1_"+B.a.i(m).toUpperCase(),A.E(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,B.cF,null),$async$UK)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=A.a9(a1)
$.am.$1("[local deposit qr] redeem: "+A.t(l))
u=new C.pB(!1,0,"Could not apply deposit. Check connection and try again.")
w=1
break
w=7
break
case 4:w=2
break
case 7:u=new C.pB(!0,h,null)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$UK,v)},
MZ:function MZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
pB:function pB(d,e,f){this.a=d
this.b=e
this.c=f},
c8U:function c8U(d,e){this.a=d
this.b=e},
c97(d,e){var w
A.fSI(d,e,!1)
A.qA(d.a,d.d,!0,!1)
w=B.a.i("")
if(w.length!==0)A.Aj(!0,!1,d.d,w)},
a6I(d,e){if(d==null)return!1
return A.bx(d)===e.gcg()&&A.bG(d)===e.gcc()&&A.bQ(d)===e.gcs()},
hwK(d){var w=A.dh(d)*60+A.fY(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
h20(d){if(A.dh(d)>=12)return!1
if(A.mn(d)===6||A.mn(d)===7)return!1
return!0},
c9b(d){var w=d.c?d.bQ():d
return w.cY(A.c0(A.bx(w),A.bG(w),A.bQ(w),12,0,0,0,0))},
fMK(d,e){var w,v,u,t=d.gBU()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a6I(d.fx,e)&&d.fy>0.0001)return B.k.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bQ()
if(!C.c9b(w))return 0
v=A.c0(e.gcg(),e.gcc(),e.gcs(),12,0,0,0,0)
if(!e.cY(v))return t
if(!e.ca(w))return 0
u=B.o.an(v.by(w).a,1000)
if(u<=0)return t
return B.k.D(t*(B.o.D(B.o.an(e.by(w).a,1000),0,u)/u),0,t)},
fMJ(d,e){var w,v,u,t,s,r,q,p=new A.S(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a6I(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bQ():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!B.d.b8(e,new C.c96(s))&&C.c9b(t)){r=d.gBU()
v=r>0
if(v){q=new A.d1(s,d.a,r,B.fC,B.fb,"Clock-in daily earnings (local)",null,null,B.ck,p)
C.c97(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a6I(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a6I(o,p)&&!C.c9b(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
c96:function c96(d){this.a=d},
hLj(d){var w,v,u=d.k4,t=u==null?null:B.a.i(u)
if(t!=null&&t.length!==0)return t
w=B.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=B.a.i(d.a)
if(B.a.t(v,"@"))return B.d.gL(v.split("@"))
return"Member"},
i15(d,e,f,g,h,i){return A.hu(d,new C.apa(f,e,i,g,h,null),!0,null,x.H)},
h6e(d){var w,v,u=d.c?d.bQ():d,t=A.dh(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+A.bG(u)+"/"+A.bQ(u)+"/"+A.bx(u)+" \xb7 "+w+":"+B.a.aT(B.o.u(A.fY(u)),2,"0")+" "+v},
hdh(d){var w=d.x
if(w===B.ds)return"Processing"
if(w===B.k_)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
hTs(d){var w=d.f,v=B.a.i(w==null?"":w),u=v.toLowerCase()
if(B.a.t(u,"clock-in daily earnings")||B.a.t(u,"clock-in earnings"))return"Clock-in completed"
if(B.a.t(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===B.fq)return"Deposit"
if(w===B.eK)return"Withdrawal"
return v.length!==0?v:w.b},
hKZ(d){var w=d.d,v=w===B.fq||w===B.o4||w===B.fC||w===B.k0,u=d.x
if(u===B.ds)return w===B.eK?-d.c:0
if(u!==B.ck)return 0
w=d.c
return v?w:-w},
hU0(d,e){var w,v,u,t,s,r,q=A.B(d,x.o)
B.d.b1(q,new C.fpB())
w=A.V(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,A.K)(q),++t,v=r){s=q[t]
r=v-C.hKZ(s)
if(r<0)r=0
w.n(0,s.a,new A.bme(v,r))}return w},
apa:function apa(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCs:function aCs(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
e7k:function e7k(d){this.a=d},
e80:function e80(d){this.a=d},
e81:function e81(d){this.a=d},
e82:function e82(d){this.a=d},
e7J:function e7J(d,e){this.a=d
this.b=e},
e7K:function e7K(){},
e7L:function e7L(d){this.a=d},
e7M:function e7M(){},
e7N:function e7N(d){this.a=d},
e7O:function e7O(d,e,f){this.a=d
this.b=e
this.c=f},
e7P:function e7P(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7E:function e7E(d,e){this.a=d
this.b=e},
e7l:function e7l(d,e,f){this.a=d
this.b=e
this.c=f},
e7F:function e7F(){},
e7G:function e7G(){},
e7H:function e7H(d){this.a=d},
e7I:function e7I(){},
e7p:function e7p(d,e){this.a=d
this.b=e},
e7q:function e7q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7y:function e7y(){},
e7v:function e7v(d){this.a=d},
e7w:function e7w(d,e){this.a=d
this.b=e},
e7x:function e7x(d,e){this.a=d
this.b=e},
e7z:function e7z(d){this.a=d},
e7A:function e7A(d,e,f){this.a=d
this.b=e
this.c=f},
e7B:function e7B(d){this.a=d},
e7D:function e7D(d){this.a=d},
e7C:function e7C(d){this.a=d},
e7r:function e7r(d){this.a=d},
e7s:function e7s(d,e,f){this.a=d
this.b=e
this.c=f},
e7T:function e7T(){},
e7U:function e7U(){},
e7Y:function e7Y(d){this.a=d},
e7R:function e7R(d){this.a=d},
e7Z:function e7Z(d){this.a=d},
e7Q:function e7Q(d){this.a=d},
e8_:function e8_(d){this.a=d},
e7V:function e7V(d){this.a=d},
e7W:function e7W(d){this.a=d},
e7X:function e7X(d){this.a=d},
e7S:function e7S(d){this.a=d},
e7o:function e7o(d){this.a=d},
e7n:function e7n(d){this.a=d},
e7m:function e7m(d){this.a=d},
e7u:function e7u(d,e){this.a=d
this.b=e},
e7t:function e7t(d,e){this.a=d
this.b=e},
azP:function azP(d,e,f,g,h,i,j,k,l,m){var _=this
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
deZ:function deZ(){},
df_:function df_(){},
df0:function df0(d,e,f){this.a=d
this.b=e
this.c=f},
deY:function deY(d){this.a=d},
df1:function df1(d,e){this.a=d
this.b=e},
deX:function deX(d){this.a=d},
azO:function azO(d,e,f,g,h,i,j,k,l,m){var _=this
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
bfD:function bfD(d,e){var _=this
_.f=_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
deS:function deS(d){this.a=d},
deT:function deT(d){this.a=d},
deU:function deU(d){this.a=d},
deV:function deV(){},
deW:function deW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
deR:function deR(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
deQ:function deQ(d){this.a=d},
b9p:function b9p(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
b9o:function b9o(d,e,f){this.b=d
this.d=e
this.a=f},
b9n:function b9n(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
azQ:function azQ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
azR:function azR(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
dfi:function dfi(){},
dfj:function dfj(){},
dfk:function dfk(){},
df4:function df4(d){this.a=d},
df3:function df3(d,e){this.a=d
this.b=e},
df2:function df2(d,e){this.a=d
this.b=e},
dff:function dff(d,e){this.a=d
this.b=e},
dfh:function dfh(d,e){this.a=d
this.b=e},
dfg:function dfg(d,e){this.a=d
this.b=e},
dfe:function dfe(){},
dfd:function dfd(d){this.a=d},
dfc:function dfc(){},
df7:function df7(d){this.a=d},
df8:function df8(){},
df9:function df9(d){this.a=d},
dfa:function dfa(d){this.a=d},
df6:function df6(){},
dfb:function dfb(d){this.a=d},
df5:function df5(d){this.a=d},
b8Q:function b8Q(d){this.a=d},
fpB:function fpB(){},
btd:function btd(d,e){this.b=d
this.a=e},
aJi:function aJi(){},
bv9:function bv9(){},
hQ2(d,e,f,g,h,i,j,k){var w,v=B.a.i(j.toLowerCase())
B.d.bn(d,new C.fji(v,g))
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
aNk(d){var w,v=J.a8(d),u=A.aN(v.h(d,"matchesTotal")),t=u==null?null:B.k.O(u)
if(t==null)t=1
v=A.aN(v.h(d,"matchesPlayed"))
w=v==null?null:B.k.O(v)
return B.o.D(t-(w==null?0:w),0,t)},
i_P(d,e){var w=A.T(e).k("a2<1>")
w=A.B(new A.a2(e,new C.fzY(B.a.i(d.toLowerCase())),w),w.k("H.E"))
return w},
ag2(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
if(C.aNk(u)<=0){t=J.cE(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
hSH(d,e){var w,v,u,t=J.a8(d),s=t.h(d,"status")
if(!J.y(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.y(s==null?"":s,"complete"))return!1
if(C.aNk(d)<=0)return!1
w=B.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=B.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=B.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aNk(d)>0},
hSG(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a8(d),h=A.aN(i.h(d,"matchesTotal")),g=h==null?null:B.k.O(h)
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
hQ1(d,e){var w
C.ag2(e)
w=A.T(e).k("a2<1>")
w=A.B(new A.a2(e,new C.fjh(B.a.i(d.toLowerCase())),w),w.k("H.E"))
return w},
tG(d,e){var w,v,u
for(w=J.aW(d);w.C();){v=w.gU(w)
u=J.q(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
hMD(d,e,f){var w,v,u,t="fromName",s=J.a8(f),r=s.h(f,"fromEmail"),q=B.a.i(J.k(r==null?"":r).toLowerCase())
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
fSq(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase()),r=J.a8(d),q=r.h(d,"fromEmail"),p=B.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=B.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.hMD(x.f.b(u)?A.a1(u,r,q):A.V(r,q),v,d)
if((t.length===0||B.a.t(t,"@"))&&f!=null){t=J.q(f,v)
if(t==null)t=""}if(t.length===0||B.a.t(t,"@"))return"Opponent"
return t},
bAo(){var w=0,v=A.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bAo=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bAo)
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
for(k=J.aW(p),j=x.f;k.C();){n=k.gU(k)
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
return A.i($async$bAo,v)},
bzt(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bzt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return A.b(C.bAo(),$async$bzt)
case 3:u=t.fSq(s,r,g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzt,v)},
Kd(d,e,f){var w=0,v=A.j(x.h),u,t,s,r,q,p
var $async$Kd=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(d)
p=$.haQ.h(0,q)
if(p!=null){t=new A.S(Date.now(),0,!1).by(p)
t=t.a>A.dB(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.haQ.n(0,q,new A.S(Date.now(),0,!1))
w=5
return A.b(A.PW(B.c6,q),$async$Kd)
case 5:case 4:s=$.haP.h(0,q)
if(s==null){u=C.tG(e,q)
w=1
break}r=C.tG(A.bzz(e,A.a([s],x._)),q)
if(r!=null)A.fUK(e,r)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Kd,v)},
i01(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new A.S(Date.now(),0,!1).ac())
return}}},
hJl(d,e){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
p=q.h(d,"fromEmail")
w=B.a.i(J.k(p==null?"":p).toLowerCase())
p=q.h(d,"toEmail")
v=B.a.i(J.k(p==null?"":p).toLowerCase())
q=q.h(d,"fromName")
u=J.k(q==null?w:q)
switch(o){case"tic_tac_go":q=x.N
return A.E(["ttt",A.c2(9,"",!1,q),"turnEmail",w,"playerXEmail",w,"playerXName",u,"playerOEmail",v,"playerOName",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],q,x.z)
case"connect_four_pro":t=J.e0(6,x.L)
for(q=x.S,s=0;s<6;++s)t[s]=A.c2(7,0,!1,q)
return A.E(["c4",t,"c4Turn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
case"checkers_deluxe":t=J.e0(8,x.L)
for(q=x.S,r=0;r<8;++r)t[r]=A.ip(8,new C.f94(r),!0,q)
return A.E(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return A.E(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
hQ0(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new A.S(Date.now(),0,!1).ac())
r=C.hJl(u,f)
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
i0_(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
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
fUJ(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",A.a1(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new A.S(Date.now(),0,!1).ac())
return}}},
fyM(d){var w=0,v=A.j(x.gw),u,t,s,r,q
var $async$fyM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.ag2(d)
t=$.fRN
if(t==null)s=$.fRN=A.PW(B.c6,null).f9(new C.fyN())
else s=t
w=3
return A.b(s,$async$fyM)
case 3:r=f
if(r==null){u=A.bl(new A.J(d,new C.fyO(),A.T(d).k("J<1,@>")),!0,x.P)
w=1
break}q=A.bzz(d,r)
B.d.a8(d)
B.d.v(d,q)
u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fyM,v)},
ag3(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$ag3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.ag2(d)
t=A.T(d).k("J<1,a4<n,@>>")
t=A.B(new A.J(d,new C.fwI(),t),t.k("aj.E"))
w=3
return A.b(A.PW(t,null),$async$ag3)
case 3:s=f
if(s==null){u=!1
w=1
break}r=A.bzz(d,s)
B.d.a8(d)
B.d.v(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ag3,v)},
aOd(d,e,f){var w=0,v=A.j(x.y),u,t,s,r
var $async$aOd=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:C.fUJ(d,e,f)
t=C.tG(d,e)
if(t==null){u=!1
w=1
break}w=3
return A.b(A.PW(A.a([A.a1(t,x.N,x.z)],x._),e),$async$aOd)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.tG(s,e)
if(r!=null)A.fUK(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aOd,v)},
hXH(d,e,f){var w
C.fUJ(d,e,f)
w=$.fRB.h(0,e)
if(w!=null)w.a9(0)
$.fRB.n(0,e,A.cM(B.ly,new C.fwJ(e,d)))},
fMr(d,e){return new C.aYs(!0,d,"NGMY",B.a.i(e.toLowerCase()),null,!0)},
fji:function fji(d,e){this.a=d
this.b=e},
fzY:function fzY(d){this.a=d},
fjh:function fjh(d){this.a=d},
f94:function f94(d){this.a=d},
fyN:function fyN(){},
fyO:function fyO(){},
fwI:function fwI(){},
fwJ:function fwJ(d,e){this.a=d
this.b=e},
aYs:function aYs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
i0u(d,e,f){return A.bV(B.K,null,new C.fB2(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
fB2:function fB2(d,e){this.a=d
this.b=e},
Zt:function Zt(d,e,f){this.c=d
this.d=e
this.a=f},
aCf:function aCf(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
e1A:function e1A(d){this.a=d},
e1D:function e1D(d){this.a=d},
e1E:function e1E(d){this.a=d},
e1C:function e1C(d){this.a=d},
e1F:function e1F(d){this.a=d},
e1G:function e1G(d,e){this.a=d
this.b=e},
e1B:function e1B(d,e){this.a=d
this.b=e},
hWd(d){var w,v,u,t=B.a.i(d)
if(t.length===0)return B.i8
w=t.toLowerCase()
v=A.af("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return B.i8
v=Date.now()
u=C.hLX(w,new A.S(v,0,!1))
v=x.N
return A.a([new A.kj("calendar",A.E(["title",C.hLW(t,w),"start",u.ac(),"end",u.bN(36e8).ac(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
hLW(d,e){var w,v,u,t,s,r=A.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cC(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return B.a.i(w==null?"":w)}u=A.af("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cC(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hbB(B.a.i(t))}s=A.af("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cC(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hbB(B.a.i(t))}if(B.a.t(e,"meeting"))return"Meeting"
if(B.a.t(e,"appointment"))return"Appointment"
return"NGMY Event"},
hbB(d){var w
if(d.length===0)return d
w=B.a.fv(d,A.af("\\s+",!0,!1,!1,!1))
return new A.J(w,new C.fit(),A.T(w).k("J<1,n>")).aH(0," ")},
hLX(d,e){var w,v,u,t,s,r,q,p,o=A.c0(A.bx(e),A.bG(e),A.bQ(e),0,0,0,0,0)
if(B.a.t(d,"tomorrow"))o=o.bN(864e8)
else if(!B.a.t(d,"today"))for(w=D.aBZ.gdL(D.aBZ),w=w.gag(w);w.C();){v=w.gU(w)
u=v.a
if(A.ds(d,u,0)){t=C.hKY(o,v.b)
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
q=0}return A.c0(A.bx(o),A.bG(o),A.bQ(o),r,q,0,0,0)},
hKY(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(A.mn(w)===e){u=!0
if(v<=0){t=d.bN(36e8)
s=w.a
if(s>=t.gbo())u=s===t.gbo()&&w.b<t.gcv()}}else u=!1
if(u)return w
w=w.bN(r)}return d.bN(r)},
fit:function fit(){},
hWe(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=B.a.i(d)
if(j.length===0)return B.i8
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
q=C.hIb(w,j)
if(q==null||q.length===0)return B.i8
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
return A.a([new A.kj("call",A.E(["name",q],t,t))],x.Z)}return B.i8},
hIb(d,e){var w,v,u,t,s,r,q=[A.af("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),A.af("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),A.af("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
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
if(u)return C.hPl(t)}r=A.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cC(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return B.a.i(u==null?"":u)}return null},
hPl(d){var w=B.a.fv(d,A.af("\\s+",!0,!1,!1,!1))
return new A.J(w,new C.fis(),A.T(w).k("J<1,n>")).aH(0," ")},
fis:function fis(){},
hfu(d){var w=new A.J(d,new C.fz3(),A.T(d).k("J<1,a4<n,@>>")).bZ(0,new C.fz4())
w=A.B(w,w.$ti.k("H.E"))
return w},
fz3:function fz3(){},
fz4:function fz4(){},
hWh(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return B.i8
w=B.a.i(d)
if(w.length===0)return B.i8
v=w.toLowerCase()
if(!(B.a.t(v,"send email")||B.a.t(v,"send an email")||B.a.t(v,"send a message to")||B.a.t(v,"email ")||B.a.t(v,"write an email")||B.a.t(v,"write email")))return B.i8
u=A.af("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cC(w)
if(u==null)return B.i8
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
hVq(d,e){var w
if(e)return d
w=J.dH(d,new C.fsZ())
w=A.B(w,w.$ti.k("H.E"))
return w},
fsZ:function fsZ(){},
hXE(d){switch(d){case"blackjack_vegas":return D.dyN
case"roulette_euro":return D.dyx
case"slots_jackpot":return D.dyE
case"poker_texas":return D.dyH
case"chess_royale":return D.dyy
case"connect_four_pro":return D.dyz
case"domino_block":return D.dyB
case"plinko_prizes":return D.dyJ
case"spin_wheel":return D.dyG
case"baccarat_punto":return D.dyA
case"craps_table":return D.dyI
case"casino_war":return D.dyC
case"bingo_live":return D.dyF
case"solitaire_klondike":return D.dyM
case"backgammon_pro":return D.dyw
case"billiards_snooker":return D.dyK
case"profit_solve":return D.dyL
default:return D.dyD}},
fwz(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=A.m(8)
v=A.I(B.aM,B.r,1.5)
u=A.a([new A.ad(0,B.G,B.w.j(0.35),B.ej,6)],x.V)
return A.p(p,A.av(A.W(B.mc,B.c.j(0.5),p,p,p,23.400000000000002),p,p,p),B.f,p,p,new A.o(p,p,v,w,u,D.bRb,B.n),p,74,p,p,p,p,p,52)}t=B.o.D(d,1,13)
s=t===1||t>=10||B.o.F(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][B.o.F(t,4)]
q=s?B.bL:B.M
w=A.m(8)
v=A.I(B.aL,B.r,1)
u=A.a([new A.ad(0,B.G,B.w.j(0.28),B.ej,6)],x.V)
return A.p(p,A.v(A.a([new A.C(D.bsd,A.d(D.co1[t-1]+"\n"+r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,B.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),B.b3,A.av(A.d(r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),B.b3],x.p),B.F,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(B.hS,p,v,w,u,p,B.n),p,74,p,p,p,p,p,52)},
hYI(d,e){var w,v=null,u=A.m(18),t=A.I(B.aM,B.r,3),s=A.a([new A.ad(0,B.G,B.aE.j(0.5),B.J,20)],x.V),r=A.T(e).k("J<1,hh>")
r=A.B(new A.J(e,new C.fyv(),r),r.k("aj.E"))
w=x.p
return A.v(A.a([A.p(v,A.v(A.a([D.f6q,B.ac,A.A(r,B.m,v,B.ba,B.j,0,v,v)],w),B.m,v,B.e,B.j,0,B.p),B.f,v,v,new A.o(v,v,t,u,s,D.bRx,B.n),v,v,v,v,I.ag3,v,v,v),B.az,A.dp(B.alV,D.f73,d,A.bk(B.aM,v,v,v,B.dv,v,Ai.XU,v,v,v,v,v))],w),B.m,v,B.e,B.j,0,B.p)},
oS:function oS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bof:function bof(d,e){this.b=d
this.a=e},
fyv:function fyv(){},
hxk(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e0(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=A.c2(8,0,!1,w)
u=A.c2(9,"",!1,p)
t=x.t
s=A.a([],t)
r=A.a([],t)
t=A.a([0,0,0],t)
q=J.e0(6,o)
for(v=0;v<6;++v)q[v]=A.c2(7,0,!1,w)
return new C.apw(A.V(p,x.z),n,u,s,r,t,q,new A.ar(B.as,$.aw()))},
hQH(d,e,f,g,h){var w=new C.fk6(f,h)
switch(d){case"checkers_deluxe":return C.hGR(h,g,e,w)
case"tic_tac_go":return C.hPw(h,g,e,w)
case"blackjack_vegas":return C.hGc(h,g,e,new C.fk0(w))
case"roulette_euro":return C.hNR(h,g,e,new C.fk1(w))
case"slots_jackpot":return C.hOF(h,g,e,new C.fk2(w))
case"billiards_snooker":return C.hMF(h,g,e,new C.fk3(w))
case"connect_four_pro":return C.hHh(h,g,e,w)
case"profit_solve":return C.hMI(h,g,e,new C.fk4(w))
default:return C.hGO(d,h,g,e,new C.fk5(w))}},
hGR(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vX,B.L,w,w),u=A.m(12),t=A.I(D.VP,B.r,8),s=A.a([new A.ad(0,B.G,B.w.j(0.4),B.J,16)],x.V)
return A.v(A.a([new A.C(B.eO,v,w),A.D(A.av(new A.fF(1,A.p(w,A.bv(A.m(6),A.ib(!0,w,w,B.y,D.eI6,new C.f6r(d,e,f,g),64,w,B.dQ,B.ah,!1),B.aq),B.f,w,w,new A.o(w,w,t,u,s,w,B.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hPw(d,e,f,g){var w=null
return A.v(A.a([new A.C(B.eO,A.d(d.c,w,w,w,w,w,w,D.vX,B.L,w,w),w),A.D(A.av(new A.fF(1,A.cm(new C.fiD(d,e,f,g)),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hGc(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.vX,B.L,v,v),t=x.p,s=A.a([],t),r=d.CW,q=d.ch
if(r)B.d.v(s,new A.J(q,new C.f5S(),A.T(q).k("J<1,r>")))
else B.d.v(s,A.a([C.fwz(q[0],!1),B.bp,C.fwz(0,!0)],t))
s=A.A(s,B.m,v,B.ba,B.j,0,v,v)
r=A.d("Total: "+d.a2e(d.ay),v,v,v,v,v,v,D.f1I,v,v,v)
q=d.ay
w=A.T(q).k("J<1,r>")
q=A.B(new A.J(q,new C.f5T(),w),w.k("aj.E"))
q=A.c_(B.fM,q,B.bt,6,6)
return A.v(A.a([new A.C(B.eO,u,v),D.fd0,B.ao,s,B.az,D.fk6,r,B.ao,q,B.b3,A.A(A.a([A.D(A.bJ(D.f7u,d.CW?v:new C.f5U(d,e,f,g),v),1),B.ab,A.D(A.bJ(D.fmo,new C.f5V(d,e,f,g),v),1)],t),B.m,v,B.e,B.j,0,v,v)],t),B.m,v,B.e,B.j,0,B.p)},
hNR(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vX,B.L,w,w),u=d.cx,t=A.a([new A.ad(0,B.G,B.w.j(0.45),B.cy,16)],x.V)
t=A.a([new A.C(B.eO,v,w),A.p(w,A.b3(w,w,w,new C.bof(u,w),B.au),B.f,w,w,new A.o(w,w,w,w,t,w,B.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new A.C(B.kc,A.d("Result: "+A.t(v),w,w,w,w,w,w,D.eQZ,w,w,w),w))
t.push(B.ac)
t.push(A.c_(B.fM,A.ip(6,new C.ffQ(d,e,f,g),!0,x.l),B.bt,6,6))
return A.v(t,B.m,w,B.e,B.j,0,B.p)},
hOF(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vX,B.L,w,w),u=d.db,t=A.T(u).k("J<1,n>")
u=A.B(new A.J(u,new C.fhK(),t),t.k("aj.E"))
return A.v(A.a([new A.C(B.eO,v,w),C.hYI(new C.fhL(d,e,f,g),u)],x.p),B.m,w,B.e,B.j,0,B.p)},
hMF(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vX,B.L,w,w),u=A.m(20),t=A.I(B.fv,B.r,12),s=x.V,r=A.a([new A.ad(0,B.G,B.w.j(0.45),B.dn,18)],s),q=x.p
return A.v(A.a([new A.C(B.eO,v,w),A.D(A.p(w,new A.an(B.W,w,B.aa,B.q,A.a([A.ao(w,A.p(w,w,B.f,w,w,D.aXo,w,18,w,w,w,w,w,18),w,w,24,w,24,w),A.ao(28,A.p(w,w,B.f,w,w,B.a9D,w,14,w,w,w,w,w,14),w,w,w,32,w,w),A.av(A.eA(B.A,d.dx,A.p(w,w,B.f,w,w,new A.o(B.aM,w,w,A.m(2),A.a([new A.ad(0,B.G,B.w.j(0.3),B.J,4)],s),w,B.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),B.f,w,w,new A.o(w,w,t,u,r,D.e7e,B.n),w,w,w,B.eQ,w,w,w,w),1),A.kR(B.bn,w,w,1,0,new C.feA(d,f),d.dy),A.bJ(D.fc5,new C.feB(d,e,g,f),w)],q),B.m,w,B.e,B.j,0,B.p)},
hHh(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.vX,B.L,v,v),t=x.l,s=J.e0(7,t)
for(w=0;w<7;++w)s[w]=new A.bE(1,B.bi,A.aE(v,A.v(A.ip(6,new C.f6S(d,w),!0,t),B.m,v,B.lJ,B.j,0,B.p),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f6T(d,w,e,f,g),v,v,v,v,v,v,!1,B.a8),v)
return A.v(A.a([new A.C(B.eO,u,v),A.D(A.av(new A.fF(1.1666666666666667,A.A(s,B.dD,v,B.e,B.j,0,v,v),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
hMI(d,e,f,g){var w=null
return A.v(A.a([new A.C(B.eO,A.d(d.c,w,w,w,w,w,w,D.vX,B.L,w,w),w),A.d(""+d.a+"/"+d.b,w,w,w,w,w,w,B.kq,w,w,w),A.d(d.fy,w,w,w,w,w,w,D.aOs,B.L,w,w),A.aL(w,B.T,!1,w,!0,B.q,w,A.aM(),d.id,w,w,w,w,w,2,D.bNl,B.y,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,B.dM,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.feN(d,e,g,f),w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,B.dk,!0,B.a5,w,B.am,w,w,w,w),A.bJ(D.faK,new C.feO(d,e,g,f),w)],x.p),B.m,w,B.e,B.j,0,B.p)},
hGO(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gjN(),k=e.d
k=k==null?n:k.c
w=C.hXE(d)
v=D.aBO.h(0,d)
if(v==null)v=d
m=A.d(m,n,n,n,n,n,n,B.mt,B.L,n,n)
u=A.m(22)
t=w.a
s=w.b
r=A.I(s.j(0.5),B.r,2)
q=A.a([new A.ad(0,B.G,w.c.j(0.35),B.eT,24)],x.V)
p=A.d(w.e,n,n,n,n,n,n,X.SA,n,n,n)
o=A.d(v,n,n,n,n,n,n,B.oP,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+A.t(k)+" at the table"
k=x.p
q=A.D(A.av(A.p(n,A.v(A.a([p,B.S,o,B.P,A.d(l,n,n,n,n,n,n,A.l(n,n,B.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),B.L,n,n),B.d5,A.W(w.f,s.j(0.85),n,n,n,48)],k),B.m,n,B.ba,B.j,0,B.p),B.f,n,n,new A.o(n,n,r,u,q,new A.a7(B.b1,B.b6,B.x,t,n,n),B.n),n,n,n,B.eQ,B.a9,n,n,1/0),n,n,n),1)
return A.v(A.a([m,B.ac,q,B.P,new A.a6(1/0,n,A.bJ(D.fly,new C.f6l(f,e,g,h),A.bk(s,n,n,n,B.d.gL(t).j1()>0.4?B.w:B.c,n,B.cf,n,n,n,n,n)),n)],k),B.m,n,B.e,B.j,0,B.p)},
E4:function E4(d,e){this.a=d
this.b=e},
apw:function apw(d,e,f,g,h,i,j,k){var _=this
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
caF:function caF(){},
caG:function caG(){},
caE:function caE(){},
caH:function caH(){},
caD:function caD(){},
caJ:function caJ(){},
caK:function caK(){},
caC:function caC(d){this.a=d},
caI:function caI(){},
caB:function caB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fk6:function fk6(d,e){this.a=d
this.b=e},
fk0:function fk0(d){this.a=d},
fk1:function fk1(d){this.a=d},
fk2:function fk2(d){this.a=d},
fk3:function fk3(d){this.a=d},
fk4:function fk4(d){this.a=d},
fk5:function fk5(d){this.a=d},
f6r:function f6r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6q:function f6q(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fiD:function fiD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fiC:function fiC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fiB:function fiB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f5S:function f5S(){},
f5T:function f5T(){},
f5U:function f5U(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f5V:function f5V(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ffQ:function ffQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ffP:function ffP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fhK:function fhK(){},
fhL:function fhL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
feA:function feA(d,e){this.a=d
this.b=e},
feB:function feB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6T:function f6T(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f6S:function f6S(d,e){this.a=d
this.b=e},
feN:function feN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
feO:function feO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6l:function f6l(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hTu(d){var w,v=A.T(d).k("a2<1>")
v=A.p1(new A.a2(d,new C.foB(),v),120,v.k("H.E"))
w=A.cD(v,new C.foC(),A.a3(v).k("H.E"),x.N).aH(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
foB:function foB(){},
foC:function foC(){},
age(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
aqs:function aqs(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aD3:function aD3(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
ezw:function ezw(){},
aKQ:function aKQ(){},
hvi(){var w=$.HP
if(w<=0)return;--w
$.HP=w
if(w===0){w=$.h1j
if(w!=null)w.$0()}},
c6a(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
ao9(d){var w=0,v=A.j(x.H),u,t
var $async$ao9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.fMm.J(0,t)
w=4
return A.b(A.aA(),$async$ao9)
case 4:w=3
return A.b(f.ar("Bool","ngmy_game_free_play_used_"+B.a.i(t.toLowerCase()),!0),$async$ao9)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ao9,v)},
ao8(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$ao8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(C.c6a(d)){u=!0
w=1
break}t=B.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.fMm.t(0,t)){u=!1
w=1
break}w=3
return A.b(A.aA(),$async$ao8)
case 3:s=f
r=B.a.i(t.toLowerCase())
r=A.ka(J.q(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ao8,v)},
Um(){var w=0,v=A.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Um=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$Um)
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
return A.i($async$Um,v)},
aYK(d){return C.hvv(d)},
hvv(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aYK=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.aA(),$async$aYK)
case 6:s=f
w=7
return A.b(s.ar("String","ngmy_helper_ai_usage_v1",B.R.ao(d,null)),$async$aYK)
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
return A.i($async$aYK,v)},
aYI(d,e){var w,v,u,t,s=J.q(d,B.a.i(e.toLowerCase()))
if(!x.f.b(s))return new A.acQ(0,new A.S(Date.now(),0,!1))
w=J.a8(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=A.bi(u==null?"":u)
if(t==null)t=new A.S(Date.now(),0,!1)
return new A.acQ(typeof v=="number"?B.o.D(B.k.O(v),0,999999):0,t)},
aYJ(d,e){if(B.o.an(e.by(d.b).a,36e8)>=24)return new A.acQ(0,e)
return d},
c6H(d,e){var w=0,v=A.j(x.S),u,t,s
var $async$c6H=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return A.b(C.Um(),$async$c6H)
case 3:t=g
s=Date.now()
u=B.o.D(e-C.aYJ(C.aYI(t,d),new A.S(s,0,!1)).a,0,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6H,v)},
c6I(d,e){var w=0,v=A.j(x.cJ),u,t,s,r
var $async$c6I=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return A.b(C.Um(),$async$c6I)
case 3:t=g
s=Date.now()
r=C.aYJ(C.aYI(t,d),new A.S(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bN(864e8)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6I,v)},
hvw(d){var w,v,u,t=d.a,s=B.o.an(t,1e6)
if(s<=0)return"0s"
w=B.o.an(t,36e8)
v=B.o.an(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+B.a.aT(B.o.u(v),2,"0")+"m "+B.a.aT(B.o.u(u),2,"0")+"s"
if(v>0)return""+v+"m "+B.a.aT(B.o.u(u),2,"0")+"s"
return""+u+"s"},
aYL(d){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aYL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return A.b(C.Um(),$async$aYL)
case 3:t=p.aYJ(o.aYI(f,d),new A.S(Date.now(),0,!1))
w=4
return A.b(A.aA(),$async$aYL)
case 4:s=f
r=B.a.i(d.toLowerCase())
q=t.b.a5().ac()
u=A.ka(J.q(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYL,v)},
aov(d){var w=0,v=A.j(x.H),u,t,s,r
var $async$aov=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return A.b(C.Um(),$async$aov)
case 3:t=s.aYJ(r.aYI(f,d),new A.S(Date.now(),0,!1))
w=5
return A.b(A.aA(),$async$aov)
case 5:w=4
return A.b(f.ar("Bool","ngmy_helper_3left_"+B.a.i(d.toLowerCase())+"_"+t.b.a5().ac(),!0),$async$aov)
case 4:case 1:return A.h(u,v)}})
return A.i($async$aov,v)},
aow(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aow=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=B.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return A.b(C.Um(),$async$aow)
case 3:s=g
r=Date.now()
q=C.aYJ(C.aYI(s,d),new A.S(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aG(s,t,A.E(["count",r+1,"windowStart",q.b.a5().ac()],x.N,x.K))
w=4
return A.b(C.aYK(s),$async$aow)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aow,v)},
afR(d,e,a0){var w=0,v=A.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$afR=A.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new A.fc("")
if(!d.d){p=!0
if(!C.hfm(a0))if(!C.hfl(a0)){p=A.af("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.hfm(a0)?3:4
break
case 3:o=C.hXj(a0)
w=o!=null?5:6
break
case 5:w=7
return A.b(C.c_h(e,o),$async$afR)
case 7:n=a2
p=J.a8(n)
if(p.gcl(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.h_M(o)+":\n"
m.a+=l
for(p=p.gag(n);p.C();){m=p.gU(p)
l=h
k="- "+m.gUA()+"\n"
l.a+=k
m=m.f
if(m!=null&&B.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=A.af("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return A.b(A.Re("text/plain"),$async$afR)
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
case 13:case 9:w=C.hfl(a0)?15:16
break
case 15:p=h
f=C
w=17
return A.b(C.a6l(e),$async$afR)
case 17:m=f.h1q(a2)+"\n"
p.a+=m
case 16:p=A.af("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return A.b(C.Tp(e),$async$afR)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cw(i)){p=h
m=C.h_N(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=B.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afR,v)},
hwS(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
c9g(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$c9g=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=A.h25(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.f0("ngmy_local_growth_income_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bG),$async$c9g)
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
return A.i($async$c9g,v)},
apd(d){var w=0,v=A.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$apd=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=B.a.i(d)
if(J.ac(k)===0){u=null
w=1
break}t=4
w=7
return A.b(A.f0("ngmy_local_growth_income_stash_v1_"+B.a.i(k),null,!1,B.bG),$async$apd)
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
u=new A.aEs(m,p,n)
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
return A.i($async$apd,v)},
aZP(d){var w=0,v=A.j(x.bY),u,t,s,r,q
var $async$aZP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
w=C.hwS(q)?3:4
break
case 3:w=5
return A.b(C.c9g(q),$async$aZP)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.apd(t)
w=1
break
case 4:if(B.a.a0(q,"NGMYLOCALSYNC1|")){u=C.apd(B.a.i(B.a.b_(q,15)))
w=1
break}w=B.a.a0(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return A.b(C.apd(B.a.i(B.a.b_(q,15))),$async$aZP)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new A.aEs(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZP,v)},
h2j(d){var w=d.bL
if(w>=0)return w
return 1},
ag1(d,e,f){var w=0,v=A.j(x.H),u,t
var $async$ag1=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return A.b(A.aOp(d,e),$async$ag1)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return A.b(A.G4(d,null,null,!1,!0,""),$async$ag1)
case 5:w=4
return A.b(t.$1(h),$async$ag1)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ag1,v)},
hWc(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=B.a.i(a2)
if(a1.length===0)return B.i8
w=a1.toLowerCase()
v=A.af("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=A.af("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cC(w)
if(!u&&t==null)return B.i8
s=new A.S(Date.now(),0,!1)
r=A.df()
q=A.df()
p=C.hLV(w)
if(p!=null){v=p.a
r.b=s.bN(v)
q.b=C.has(a1,w)
if(J.y(q.bc(),"Wake up")&&B.o.an(v,e)<=180)q.b="Reminder \u2014 "+B.o.an(v,e)+" min"}else{if(t!=null){v=A.af("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=B.a.e8(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.hat(v[2],v[4],v[3])
o=v[3]
m=A.c7(o==null?"":o,null)
if(m==null)m=0
l=A.c0(A.bx(s),A.bG(s),A.bQ(s),0,0,0,0,0)
if(B.a.t(w,d))l=l.bN(a0)
r.b=A.c0(A.bx(l),A.bG(l),A.bQ(l),n,m,0,0,0).bN(-36e8)
if(r.bc().cY(s.bN(e)))r.b=J.cf(r.bc(),B.nF)
v=C.hQ_(v[1])
k=B.o.F(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+B.a.aT(B.o.u(m),2,"0")+" "+j)}else{l=A.c0(A.bx(s),A.bG(s),A.bQ(s),0,0,0,0,0)
v=B.a.t(w,d)
if(v)l=l.bN(a0)
i=A.af("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cC(w)
if(i!=null){o=i.b
h=C.hat(o[1],o[3],o[2])
o=o[2]
g=A.c7(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=A.c0(A.bx(l),A.bG(l),A.bQ(l),h,g,0,0,0)
r.b=f.cY(s.bN(3e7))&&!v?f.bN(a0):f
q.b=C.has(a1,w)}}v=x.N
return A.a([new A.kj("alarm",A.E(["title",q.bc(),"start",r.bc().ac(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
hLV(d){var w,v,u,t,s,r,q=[A.af("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.af("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.af("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),A.af("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
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
hQ_(d){var w=d==null?"work":d,v=w.toLowerCase()
if(B.a.t(v,"meeting")||B.a.t(v,"appointment"))return"Meeting"
if(B.a.t(v,"class")||B.a.t(v,"school"))return"Class"
if(B.a.t(v,"shift"))return"Shift"
return"Work"},
hat(d,e,f){var w,v=A.c7(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return B.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
has(d,e){var w,v,u,t
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
hxd(d){var w,v,u,t,s=J.a8(d)
if(s.gal(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.kh(d,80),v=w.$ti,w=new A.bX(w,w.gM(0),v.k("bX<aj.E>")),v=v.k("aj.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gM(d)>80?u+("\u2026 and "+(s.gM(d)-80)+" more\n"):u
return B.a.i(s.charCodeAt(0)==0?s:s)}},D,H,Ae,I,G,Af,W,F,X,Q,Y,Ag,Ah,Z,Ai,Aj,Ak,A_,Al,A0,K
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
Y=c[111]
Ag=c[173]
Ah=c[190]
Z=c[179]
Ai=c[192]
Aj=c[127]
Ak=c[189]
A_=c[72]
Al=c[123]
A0=c[56]
K=c[54]
C.bpn.prototype={
oe(d,e){return this.a.$2(d,e)}}
C.EG.prototype={
T(){return new C.aGv(this.$ti.k("aGv<EG.T,EG.S>"))}}
C.aGv.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a
v=w.f
w=new A.hB(B.Eu,v,null,null,w.$ti.k("hB<1>"))
u.e=w
u.V6()},
br(d){var w,v=this
v.bE(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aLy()
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hB(B.Eu,w.b,w.c,w.d,w.$ti)}v.V6()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&A.c()
return v.mP(d,w)},
q(){this.aLy()
this.a2()},
V6(){var w,v=this
v.d=v.a.c.lf(new C.eVr(v),new C.eVs(v),new C.eVt(v))
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hB(B.Wz,w.b,w.c,w.d,w.$ti)},
aLy(){var w=this.d
if(w!=null){w.a9(0)
this.d=null}}}
C.au7.prototype={
mP(d,e){return this.e.$2(d,e)}}
C.ajN.prototype={
T(){return C.hDL()},
bp(){return this.r.$0()}}
C.qv.prototype={}
C.ayI.prototype={
aby(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aby=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.h0S(r)
if(r.x==null||r.c6.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.h0U(s),$async$aby)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aby,v)},
Wt(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.apb(t.a.c),$async$Wt)
case 3:if(e!=null&&t.c!=null)t.a.bp()
r=!C.c6a(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return A.b(C.ao8(t.a.c),$async$Wt)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.m(new C.d6Z(t,s))
if(!s)t.aby()
case 1:return A.h(u,v)}})
return A.i($async$Wt,v)},
ab9(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ab9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.bAo(),$async$ab9)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.d79(t,s))
case 1:return A.h(u,v)}})
return A.i($async$ab9,v)},
a_(){var w,v,u=this
u.bri()
$.t4=$.t4+1
w=u.a
$.bAt=w.c.a
w=w.d.b5
v=A.T(w).k("J<1,a4<n,@>>")
w=A.B(new A.J(w,new C.d7r(),v),v.k("aj.E"))
u.f=w
u.ab9()
u.J1()
u.Wt()
u.e=A.dC(B.nC,new C.d7s(u))},
J1(){var w=0,v=A.j(x.H),u,t=this,s
var $async$J1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:C.ag2(t.a.d.b5)
w=3
return A.b(C.fyM(t.a.d.b5),$async$J1)
case 3:s=e
if(t.c==null){w=1
break}C.ag2(t.a.d.b5)
if(s!=null)t.m(new C.d7h(t,s))
else t.m(new C.d7i(t))
case 1:return A.h(u,v)}})
return A.i($async$J1,v)},
q(){C.aYu()
var w=this.e
if(w!=null)w.a9(0)
this.brh()},
ag5(d,e,f){return this.co3(d,e,f)},
co3(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ag5=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(e.toLowerCase())
p=J.q(t.r,q)
o=t.a
n=o.d.b5
o=o.c
s=d.b
C.hQ2(n,o.a,o.c,d.a,s,f,e,p)
t.a.bp()
w=3
return A.b(C.ag3(t.a.d.b5),$async$ag5)
case 3:if(t.c==null){w=1
break}t.m(new C.d7k(t))
r=f===1?"1 game":""+f+" games"
t.c.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ag5,v)},
HU(d,e){return this.c9w(d,e)},
bYA(d){return this.HU(d,null)},
c9w(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&B.a.i(e).length!==0){s=C.tG(t.a.d.b5,B.a.i(e))
if(s!=null&&C.aNk(s)<=0){t.c.I(x.q).f.R(D.aMk)
w=1
break}}w=5
return A.b(C.ao8(t.a.c),$async$HU)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return A.b(C.fMn(r,C.ft9(q.c),p),$async$HU)
case 6:w=1
break
case 4:o=new C.d7c(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
A.hu(r,new C.aBz(p,q.d,q.f,q.r,new C.d7d(o),q.w,C.ft9(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
A.hu(q,new C.ajM(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.d7e(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$HU,v)},
bW3(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.ag2(i.a.d.b5)
C.ag2(i.f)
w=C.i_P(i.a.c.a,i.f)
v=C.hQ1(i.a.c.a,i.f)
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
return A.p(h,A.v(A.a([D.fgb,A.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,B.oT,h,h,h),B.P,A.A(A.a([A.D(A.dT(B.IG,new C.d74(i,t),h),1),B.ab,A.D(A.bJ(D.foN,new C.d75(i,t),h),1)],n),B.m,h,B.e,B.j,0,h,h)],n),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(B.aE,h,s,u,h,h,B.n),h,h,h,B.e3,B.bk,h,h,1/0)}m=B.d.gL(v)
l=B.d.dM(i.y,new C.d76(m),new C.d77(i))
k=C.fSq(m,i.a.c.a,i.r)
j=C.aNk(m)
u=A.m(14)
s=A.I(B.b5,B.r,1)
r=j===1?"":"s"
return A.p(h,A.v(A.a([D.f8B,A.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,B.oT,h,h,h),B.at,A.d(C.hSG(m,i.a.c.a),h,h,h,h,h,h,B.a6D,h,h,h),B.P,A.bJ(D.fft,new C.d78(i,l,m),h)],x.p),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(B.bj,h,s,u,h,h,B.n),h,h,h,B.e3,B.bk,h,h,1/0)},
bMV(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.eEd.t(0,d.a),l=A.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=A.a3R(w[v])
t=B.k.D(u.d*0.58,0.12,0.3)
l.push(new A.wQ(u.a,u.b,B.k.D(u.c*0.92,0,0.9),t).iB())}s=B.d.gL(w)
w=A.m(16)
t=A.m(18)
r=A.I(A.Z(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1)
q=x.V
p=A.a([new A.ad(0,B.G,A.Z(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.jd,12)],q)
o=x.p
o=A.a([new A.a6(100,n,A.av(A.W(d.e,B.c,n,n,n,64),n,n,n),n),A.D(new A.C(B.j5,A.v(A.a([A.A(A.a([A.D(A.d(d.b,n,n,n,n,n,n,B.kT,n,n,n),1)],o),B.m,n,B.e,B.j,0,n,n),B.at,A.d(d.c,n,2,B.a2,n,n,n,B.oQ,n,n,n)],o),B.F,n,B.ba,B.j,0,B.p),n),1)],o)
if(m)o.push(A.aH(n,n,n,n,D.bKX,n,n,n,new C.d70(this,d),n,n,n,n,"Invite player",n))
o.push(new A.C(B.Lf,A.p(n,D.bJ4,B.f,n,n,new A.o(A.Z(71,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),n,A.I(A.Z(B.k.V(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1.6),n,A.a([new A.ad(0,B.G,A.Z(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,10)],q),n,B.a6),n,44,n,n,n,n,n,44),n))
return A.aK(!1,w,!0,A.p(n,A.A(o,B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,r,t,p,new A.a7(B.ax,B.aD,B.x,l,n,n),B.n),n,92,n,B.e3,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.d71(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.N(d).ax.a===B.H,l=A.N(d).ax.a===B.H?B.j0:B.pe,k=m?B.i3.j(0.94):B.c.j(0.94),j=m?B.c:B.M,i=m?B.i3:B.c,h=m?B.c.j(0.08):B.aL,g=m?B.c:B.M,f=m?B.bm:B.bN
if(!o.x)return C.aNS(n,l,A.av(A.mz(n,m?B.c:B.bn,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.ft9(o.a.c)
return new C.MM(o.a.w,w,!0,o.gaQj(),n)}w=A.aI(d,B.e7,x.w).w
v=A.m(12)
u=A.I(h,B.r,1)
t=x.V
s=A.a([],t)
if(!m)s.push(new A.ad(0,B.G,B.w.j(0.04),B.cJ,12))
r=x.p
s=A.a([A.p(n,A.A(A.a([A.D(A.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,A.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,B.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new A.uc(new C.d7o(o,f,g),n,$.aPe(),n)],r),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(i,n,u,v,s,n,B.n),n,n,n,n,B.Xq,n,n,1/0),B.S,o.bW3()],r)
v=o.y
B.d.v(s,new A.J(v,o.gbMU(),A.T(v).k("J<1,r>")))
w=A.cd(A.v(s,B.m,n,B.e,B.j,0,B.p),B.q,n,B.y,n,new A.Q(14,w.r.b+78,14,24),n,n,B.ah)
s=A.m(35)
v=A.a([new A.ad(0,B.G,B.w.j(m?0.28:0.08),B.jd,15)],t)
u=A.I(m?B.c.j(0.1):B.aL,B.r,1)
t=A.aH(n,n,n,n,A.W(B.eB,j,n,n,n,18),n,n,n,o.gaQj(),n,n,n,n,n,n)
q=A.D(A.av(A.d("GAME CENTER",n,n,n,n,n,n,A.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,B.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=A.m(20)
return A.oa(!0,C.aNS(n,l,new A.an(B.W,n,B.aa,B.f,A.a([w,A.ao(n,A.bm(!1,new A.C(B.Ls,A.p(n,A.A(A.a([t,q,new A.C(B.j5,A.p(n,A.A(A.a([D.bGo,B.ea,C.ap0(new C.d7p(o),B.mt,o.a.c.a)],r),B.m,n,B.e,B.Q,0,n,n),B.f,n,n,new A.o(B.cR,n,n,p,n,n,B.n),n,n,n,n,B.h3,n,n,n),n)],r),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(k,n,u,s,v,n,B.n),n,60,n,n,B.ma,n,n,n),n),!0,!1,B.ag,!0,!0),n,n,0,0,0,n)],r),n)),new C.d7q(o),x.K)},
aQk(){var w,v
this.a.bp()
w=this.d
v=w>0?A.E(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
A.iK(w,v)}}
C.aBz.prototype={
T(){return new C.bhy()},
hq(d){return this.e.$1(d)},
bp(){return this.f.$0()},
aF7(){return this.r.$0()}}
C.bhy.prototype={
a_(){this.bsi()
this.d=A.TN(this.a.d.bi)
$.t4=$.t4+1},
q(){C.aYu()
this.bsh()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&A.c()
return new C.anD(v,new C.dKY(w),u,new C.dKZ(w),new C.dL_(w,d),new C.dL0(w),null)}}
C.ajM.prototype={
T(){return new C.ayH(new A.ar(B.as,$.aw()))},
hq(d){return this.x.$1(d)},
bp(){return this.y.$0()},
aF7(){return this.z.$0()}}
C.ayH.prototype={
a_(){this.brg()
this.a.toString
$.t4=$.t4+1},
q(){C.aYu()
var w=this.d
w.S$=$.aw()
w.P$=0
this.brf()},
a13(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a13=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.MS()
w=5
return A.b(C.ao8(t.a.c),$async$a13)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return A.b(C.fMn(s,C.ft9(r.c),q),$async$a13)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&B.a.i(r).length!==0){p=C.tG(s.d.b5,B.a.i(r))
if(p!=null&&C.aNk(p)<=0){t.c.I(x.q).f.R(D.aMk)
w=1
break}}o=A.d3(B.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.I(x.q).f.R(D.eL7)
w=1
break}m=A.Km(t.a.c.a,new C.d6T(t))
if(m+0.001<n){t.c.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Not enough balance for this bet \u2014 you have $"+A.dz(m)+", the bet is $"+A.dz(n)+".",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aF7()
s=t.a
s.toString
r=B.o.u(1000*Date.now())
q=t.a
s.hq(new A.d1(r,q.c.a,n,B.jC,B.fb,"Game bet: "+q.f,null,null,B.ck,new A.S(Date.now(),0,!1)))
t.a.bp()
if(D.eE5.t(0,t.a.e)){s=t.c
s.toString
r=t.a
A.hu(s,new C.amG(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
A.hu(s,new C.ajO(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$a13,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=A.aH(o,o,o,o,B.FW,o,o,o,new C.d6W(d),o,o,o,o,o,o),k=p.a,j=A.d(k.f,o,o,o,o,o,o,B.cu,o,o,o),i=A.m(12),h=x.p
j=A.eD(A.a([A.p(o,A.av(C.ap0(new C.d6X(p),B.kq,k.c.a),o,o,o),B.f,o,o,new A.o(B.cR,o,o,i,o,o,B.n),o,o,o,D.bmH,B.h2,o,o,o)],h),o,o,!0,!0,D.Wx,o,1,o,o,o,!1,o,!1,B.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=A.m(16)
i=A.I(B.b5,B.r,1)
k=A.W(D.bxn,D.bh1,o,o,o,28)
w=p.a
v=A.d(w.f,o,o,o,o,o,o,B.oP,o,o,o)
w=A.d(w.r,o,o,o,o,o,o,B.oT,o,o,o)
u=A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.m(12)
s=x.a3
s=A.B(new A.J(A.a([2,5,10,25],x.t),new C.d6Y(p),s),s.k("aj.E"))
s=A.A(s,B.m,o,B.e,B.j,0,o,o)
r=A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.p(o,A.v(A.a([D.fqm,B.S,s,B.P,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.d,o,o,o,o,o,2,A.br(o,new A.b4(4,A.m(10),B.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,B.lk,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dM,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,B.dk,!0,B.a5,o,B.am,o,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(u,o,o,t,o,o,B.n),o,o,o,o,B.bR,o,o,1/0)
u=A.m(12)
r=A.I(A.Z(102,B.a2N.l()>>>16&255,B.a2N.l()>>>8&255,B.a2N.l()&255),B.r,1)
s=A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
q=A.m(10)
q=A.p(o,A.v(A.a([D.f7Z,A.d("+ $"+B.k.aa(n*0.46,2),o,o,o,o,o,o,D.eZA,o,o,o),A.d("(46% return on $"+B.k.aa(p.e,2)+" bet)",o,o,o,o,o,o,B.oQ,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(s,o,o,q,o,o,B.n),o,o,o,o,B.cj,o,o,1/0)
s=A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
n=A.m(10)
u=A.p(o,A.v(A.a([D.fgr,B.P,q,B.P,A.p(o,A.v(A.a([D.f3c,A.d("$"+B.k.aa(m,2),o,o,o,o,o,o,D.ePk,o,o,o),A.d("8 pairs \xd7 $"+B.k.aa(m,2)+" each",o,o,o,o,o,o,B.oQ,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(s,o,o,n,o,o,B.n),o,o,o,o,B.cj,o,o,1/0)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(D.bdp,o,r,u,o,o,B.n),o,o,o,o,B.bR,o,o,1/0)
r=A.fm(o,o,B.bn,o,o,o,o,o,o,B.c,o,B.fL,o,o,o,o,o,o,o,o)
return C.aNS(j,D.Wx,A.cd(A.p(o,A.v(A.a([k,B.at,v,B.bz,w,B.S,t,B.P,u,B.S,new A.a6(1/0,o,A.i9(A.d("Start Game ($"+B.k.aa(p.e,2)+")",o,o,o,o,o,o,B.cc,o,o,o),p.gcrR(),r),o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,i,l,o,D.bQz,B.n),o,o,o,o,B.eP,o,o,1/0),B.q,o,B.y,o,E.afE,o,o,B.ah))}}
C.ajO.prototype={
T(){var w=x.s,v=x.t,u=x.S
return new C.ayJ(B.cI,new A.ar(B.as,$.aw()),A.a([],w),A.a([],x.d4),A.a([],w),A.a([],w),A.a([],v),A.a([],v),A.a([],v),A.aX(u),A.aX(u),A.a([],v),A.a([],v),A.a([],v))},
hq(d){return this.y.$1(d)},
bp(){return this.z.$0()}}
C.ayJ.prototype={
ghx(){var w=this.a.Q
return w!=null&&B.a.i(w).length!==0},
qN(d){return this.bLc(d)},
bLc(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$qN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.zH()
r=t.NO()
w=s<=0?3:4
break
case 3:w=5
return A.b(t.a9D(d),$async$qN)
case 5:w=1
break
case 4:q=B.k.D(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return A.b(t.tn(d),$async$qN)
case 9:w=7
break
case 8:w=10
return A.b(t.E0(q,s,r),$async$qN)
case 10:case 7:case 1:return A.h(u,v)}})
return A.i($async$qN,v)},
EB(d,e,f,g){return this.cpG(d,e,f,g)},
cpG(d,e,f,g){var w=0,v=A.j(x.H),u,t=this,s
var $async$EB=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return A.b(C.bBv(s,C.bB8(),C.fUi(),d,e,f,g),$async$EB)
case 3:case 1:return A.h(u,v)}})
return A.i($async$EB,v)},
zH(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.b_O(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&A.c()
return u+C.age(t,s.e.a.a)
case"memory":return s.ghx()&&D.mq.t(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.awx()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bi
case"color":return s.b5
case"reflex":return s.Z
default:u=s.b0
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
awx(){var w,v,u=this.x1
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
case"pattern":return C.fSu()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.b0
if(w!=null)return w.b
return 1}},
br(d){var w,v,u=this
u.bE(d)
if(u.f||u.c6)return
w=u.a
v=C.fte(w.e,w.d.y2)
if(v!==C.fte(d.e,d.d.y2)&&u.c!=null)u.m(new C.d8L(u,v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.brk()
w=i.a
w.toString
$.t4=$.t4+1
i.Q=C.fte(w.e,w.d.y2)
i.b2C()
i.aaU()
if(i.ghx()){i.c6=!0
i.cW="Connecting to match\u2026"
i.cj="Both players enter the room together \u2014 play starts at the same time."
i.O9()
i.aay()
i.bj=A.dC(B.fx,new C.d8O(i))}if(B.d.t(D.Pn,i.a.e)){w=i.ghx()
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
k=B.a.i(J.k(t==null?"":t))}w=new C.aYs(!1,w,k.length===0||B.a.t(k,"@")?C.fSq(u,v,null):k,p,l,s)}else{w=w.c
w=C.fMr(w.c,w.a)}w=i.bJ=w}else{w=v.c
w=i.bJ=C.fMr(w.c,w.a)}v=C.hxk()
v.blm(i.a.e,i.d,w)
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
w.b7F(i.a.e,A.a1(m,x.N,x.z),i.a.c.a)
w=i.b0
i.r=w.c
if(w.e){if(w.r)j=D.QO
else j=w.f===!0?D.pM:D.He
i.zJ(j)}}}i.b3=A.dC(B.nE,new C.d8P(i))
if(i.ghx())i.ba=A.dC(B.om,new C.d8Q(i))}if(i.ghx()&&!B.d.t(D.Pn,i.a.e))i.ba=A.dC(B.om,new C.d8R(i))
i.as=A.dC(B.hf,new C.d8S(i))},
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
return A.b(C.bzt(p,t.a.c.a),$async$O9)
case 5:o=e
if(t.c!=null)t.m(new C.d80(t,o))
w=1
break
case 4:w=6
return A.b(C.Kd(q,t.a.d.b5,!1),$async$O9)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return A.b(C.bzt(n,t.a.c.a),$async$O9)
case 7:o=e
if(t.c!=null)t.m(new C.d81(t,o))
case 1:return A.h(u,v)}})
return A.i($async$O9,v)},
ahc(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$ahc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghx()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.Kd(r,s.d.b5,!1),$async$ahc)
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
t.aLm(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=B.k.O(j)
else{h=j==null?null:J.k(j)
i=A.c7(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)B.d.bn(t.fy,new C.d8u(t))
if(i!=null&&t.fr.length!==0){s=A.B(t.dy,x.S)
B.d.v(s,t.dy)
r=new A.eT()
r.dH(i)
B.d.fo(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.m(new C.d8v())}case 1:return A.h(u,v)}})
return A.i($async$ahc,v)},
aay(){var w=0,v=A.j(x.H),u=this
var $async$aay=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.a_n(!0),$async$aay)
case 2:return A.h(null,v)}})
return A.i($async$aay,v)},
a_n(d){return this.cfh(d)},
cfg(){return this.a_n(!1)},
cfh(b3){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$a_n=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghx()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
if(q.length===0){w=1
break}p=B.a.i(s.c.a.toLowerCase())
w=3
return A.b(C.Kd(q,s.d.b5,b3),$async$a_n)
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
if(a6!=null&&a7!=null){a8=(a6.ca(a7)?a6:a7).bN(5e5)
if(!new A.S(Date.now(),0,!1).cY(a8)){a4=b2.a=a8.bN(4e6)
j.n(0,"startAt",a4.a5().ac())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.n(0,"memorySeed",B.o.F(1000*Date.now(),2147483647))
j.n(0,"memoryMatched",A.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.n(0,"patternSeed",B.o.F(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.hXH(t.a.d.b5,q,j)
t.a.bp()}if(t.c==null){w=1
break}b0=t.bC
if(b0==null)b0="your opponent"
if(!a5){t.m(new C.d8g(b2,t,b0))
w=1
break}if(s==null){t.m(new C.d8h(t))
w=1
break}b1=new A.S(Date.now(),0,!1)
if(b1.cY(s)){s=s.by(b1).a
r=B.o.an(s,1e6)
t.m(new C.d8i(b2,t,r+(B.o.F(B.o.an(s,1000),1000)>0?1:0)))
w=1
break}if(t.c6){t.m(new C.d8j(b2,t))
b2=t.a.e
if(b2==="pattern")t.a7v()
else if(b2==="memory"){t.b2B()
if(t.c!=null)t.m(new C.d8k())}}b2=t.bj
if(b2!=null)b2.a9(0)
t.bj=null
case 1:return A.h(u,v)}})
return A.i($async$a_n,v)},
aMg(d){var w,v,u,t,s=this
if(d!=null){w=new A.eT()
w.dH(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e0(v,x.S)
for(t=0;t<v;++t)u[t]=w.aB(9)
s.ry=u
s.x1=0
s.to=-1},
aMf(){return this.aMg(null)},
a7v(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a7v=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ghx()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.ccO()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return A.b(C.Kd(q,s.d.b5,!1),$async$a7v)
case 5:r=t.aZx(e)
case 4:if(t.c==null){w=1
break}t.aMg(r)
t.m(new C.d7t(t))
t.Dc()
case 1:return A.h(u,v)}})
return A.i($async$a7v,v)},
aZx(d){var w,v,u,t=null
if(d==null)return t
w=J.q(d,"sessionState")
if(!x.f.b(w))return t
v=J.q(w,"patternSeed")
if(typeof v=="number")return B.k.O(v)
u=v==null?t:J.k(v)
return A.c7(u==null?"":u,t)},
ccO(){var w=this.a,v=w.Q
if(v==null)return null
return this.aZx(C.tG(w.d.b5,v))},
aaU(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$aaU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$aaU)
case 3:r=e
q=t.a
p=q.e
q=B.a.i(q.c.a.toLowerCase())
s=A.f4(J.q(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.m(new C.d8_(t,s))
case 1:return A.h(u,v)}})
return A.i($async$aaU,v)},
oI(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n
var $async$oI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$oI)
case 2:p=e
o=u.a
n=o.e
o=B.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bBZ().length
else s=n==="typing"?50:105
if(n==="typing")r=B.o.F(u.at+5,s)
else{q=u.at
r=t?B.o.F(q+6,s):B.o.F(q+1,s)}w=3
return A.b(p.ar("Int","ngmy_game_"+n+"_"+o,r),$async$oI)
case 3:u.at=r
return A.h(null,v)}})
return A.i($async$oI,v)},
a1i(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a1i=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghx()||t.b0==null||t.f||t.aR){w=1
break}if(t.c6){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.Kd(r,s.d.b5,!1),$async$a1i)
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
s.b7F(r.e,n,r.c.a)
r=t.b0
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.QO
else k=r.f===!0?D.pM:D.He
w=7
return A.b(t.zJ(k),$async$a1i)
case 7:w=5
break
case 6:if(t.c!=null)t.m(new C.d8w())
case 5:case 1:return A.h(u,v)}})
return A.i($async$a1i,v)},
af6(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$af6=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghx()||q.b0==null||q.a.Q==null||q.aR){w=1
break}q.aR=!0
t=3
o=q.b0
o.toString
p=o.cGX(q.a.e)
o=q.a
n=o.d.b5
o=o.Q
o.toString
w=6
return A.b(C.aOd(n,o,p),$async$af6)
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
return A.i($async$af6,v)},
zJ(d){return this.bSb(d)},
bSb(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$zJ=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(t.IB(s,s),$async$zJ)
case 9:w=4
break
case 6:w=10
return A.b(t.WP(s,s),$async$zJ)
case 10:w=4
break
case 7:w=11
return A.b(t.a9C(s,s),$async$zJ)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghx()?12:13
break
case 12:w=14
return A.b(t.Hd(),$async$zJ)
case 14:case 13:case 1:return A.h(u,v)}})
return A.i($async$zJ,v)},
Zk(d,e){return this.c7h(d,e)},
c7h(d,e){var w=0,v=A.j(x.H),u,t=this
var $async$Zk=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=t.ghx()?3:5
break
case 3:w=6
return A.b(t.af6(),$async$Zk)
case 6:if(d===D.pL){w=1
break}w=4
break
case 5:if(d===D.pL){w=1
break}case 4:w=7
return A.b(t.zJ(d),$async$Zk)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Zk,v)},
aaO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aaO=A.e(function(d,e){if(d===1)return A.f(e,v)
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
return A.b(C.aOd(t.a.d.b5,q,l),$async$aaO)
case 3:t.a.bp()
case 1:return A.h(u,v)}})
return A.i($async$aaO,v)},
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
C.fUJ(t.a.d.b5,q,n)
C.i0_(t.a.d.b5,q)
w=3
return A.b(C.ag3(t.a.d.b5),$async$Hd)
case 3:t.a.bp()
case 1:return A.h(u,v)}})
return A.i($async$Hd,v)},
q(){var w,v=this
if(v.ghx()&&!v.f)v.aaO()
else if(!v.f)v.bYB()
C.aYu();++v.RG
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
v.brj()},
cuZ(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&A.c()
v=v<=0||w.b0==null}if(v)return
if(w.c6)return
v=w.b0
v.toString
w.a.toString
if(v.a>=v.b){w.tn("Goal completed!")
return}v=++w.rx
if(v%5===0)w.m(new C.d8F())},
b2C(){var w,v,u,t,s,r=this
r.x=A.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e0(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b2B()
break
case"scramble":r.bi=0
r.b2D()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=B.o.F(r.at,50)
v=J.e0(5,x.N)
for(t=0;t<5;++t)v[t]=D.d7w[B.o.F(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bM(0,B.c3)
break
case"math":r.y2=0
r.b2A()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b2E()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e0(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
B.d.fo(v,s)
if(!r.chF()){w=J.e0(9,w)
for(u=0;u<9;++u)w[u]=u
B.d.fo(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
B.d.a8(w)
w.push(r.d.aB(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.PJ()
break
case"pattern":if(r.ghx()){r.ry=A.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aMf()
w=A.t(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Dc()}break
case"color":r.b5=0
r.b2v()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.Z=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b3J()
break
default:if(B.d.t(D.Pn,w)){w=r.b0
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
b_O(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
chF(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return B.o.F(v,2)===0},
b2E(){var w,v,u,t,s,r=this,q=B.o.F(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e0(o,x.S)
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
b2A(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bBZ().length-6)u.at=0
w=$.bBZ()
v=w[B.o.F(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b2D(){var w=this,v=w.w=D.cNf[B.o.F(w.at+w.bi,105)]
w.ax=C.i0h(v)
w.ay=A.c2(v.length,null,!1,x.T)
w.ch=A.a(w.ax.split(""),x.s)
w.e.bM(0,B.c3)},
b3J(){var w=this,v=w.cx
if(v!=null)v.a9(0)
w.y=!1
w.z=null
w.cx=A.cM(A.dB(0,0,0,120+w.d.aB(280),0,0),new C.d8t(w))},
bSe(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.qN("Too early \u2014 paid for "+t.Z+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=B.o.an(new A.S(v,0,!1).by(u).a,1000)}if(w<520){t.m(new C.d7Y(t))
v=t.Z
if(v>=5){t.oI()
t.tn("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b3J()
t.m(new C.d7Z())}}else t.qN("Too slow ("+w+"ms) \u2014 paid for "+t.Z+"/5.")},
cuf(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=B.d.bd(t.ay,new C.d8A())
if(u<0)return
t.m(new C.d8B(t,u,v,d))},
cug(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.m(new C.d8C(u,d,v))},
bCB(){var w,v,u=this
if(u.f)return
if(B.d.b8(u.ay,new C.d7u())){u.c.I(x.q).f.R(D.eL1)
return}w=B.d.fU(u.ay)
v=u.w
v===$&&A.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.m(new C.d7v(u))
if(u.ghx()&&D.mq.t(0,u.a.e))u.a_B()
if(u.bi>=5){u.oI()
if(u.ghx()&&D.mq.t(0,u.a.e))u.mM(!0)
else u.tn("All 5 words unscrambled!")}else{u.b2D()
u.r="Word "+(u.bi+1)+" of 5 \u2014 place letters in order"
u.m(new C.d7w())}}else u.qN("Wrong word \u2014 paid for "+u.bi+"/5.")},
b2v(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=B.o.F(w.at+w.b5*11,4),t=v[w.d.aB(4)]
w.aF=t
w.aE=v[u]
w.aN=[B.dE,B.dw,B.hM,B.r0][u]
w.w=t},
aLm(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=B.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a8(0)
w=h.id
w.a8(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=A.aX(x.S)
for(s=J.jq(v),s=s.gag(s),r=x.j;s.C();){q=s.gU(s)
p=B.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aW(r.b(o)?o:B.cH),n=p===g;q.C();){m=q.gU(q)
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
b2B(){var w,v,u,t,s,r,q,p=this
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
v.dH(q)
B.d.fo(w,v)}else B.d.fo(w,p.d)
p.aLm(s)}else B.d.fo(p.fr,p.d)},
ceC(d){var w,v,u,t=this
if(t.c6)return
if(t.f||t.k1||t.go.t(0,d)||B.d.t(t.fy,d))return
t.m(new C.d89(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.m(new C.d8a(t,v,u))
if(t.ghx()&&D.mq.t(0,t.a.e))t.a_B()
if(t.go.a>=t.fr.length){t.oI()
if(t.ghx()&&D.mq.t(0,t.a.e))t.mM(!0)
else t.awA()}return}t.k1=!0
A.bN(D.blE,new C.d8b(t),x.c)},
b1Z(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&A.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.m(new C.d8l(u))
if(u.y1>=5){u.oI()
u.tn("All 5 questions correct!")}else{u.b2E()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.m(new C.d8m())}}else u.qN(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.m(new C.d8n(u))
if(u.y2>=6){u.oI()
u.tn("All 6 math questions correct!")}else{u.b2A()
u.r="Question "+(u.y2+1)+" of 6"
u.m(new C.d8o())}}else{u.UV(u.y2+1)
u.qN(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.m(new C.d8p(u))
if(u.b5>=5){u.oI()
u.tn("All 5 color rounds correct!")}else{u.b2v()
u.r="Round "+(u.b5+1)+" of 5 \u2014 tap the COLOR of the text"
u.m(new C.d8q())}}else u.qN("Wrong color \u2014 paid for "+u.b5+"/5.")
return}if(v){u.oI()
u.awA()}else u.c.I(x.q).f.R(D.eLL)},
cue(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=B.d.cI(q.k4,0)
v=B.o.an(d,3)
u=B.o.F(d,3)
t=B.o.an(w,3)
s=B.o.F(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.m(new C.d8z(q,d,w))
if(B.d.fU(q.k4)==="123456780"){q.oI()
q.awA()}}},
PJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.m(new C.d8c(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.d8d(t,q).$0()
t.c.e7()
w=6
return A.b(A.bN(B.kB,null,r),$async$PJ)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.d8e(t).$0()
t.c.e7()
w=7
return A.b(A.bN(B.jo,null,r),$async$PJ)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.m(new C.d8f(t))
case 1:return A.h(u,v)}})
return A.i($async$PJ,v)},
cuh(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.qN("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.m(new C.d8D(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.oI()
u.tn("Perfect Simon run!")
return}u.m(new C.d8E(u))
u.PJ()}},
Dc(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Dc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.m(new C.d7x(t))
s=x.H
w=3
return A.b(A.bN(B.jn,null,s),$async$Dc)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.d7y(t,o).$0()
t.c.e7()
w=7
return A.b(A.bN(B.X3,null,s),$async$Dc)
case 7:if(t.c==null){w=1
break}new C.d7z(t).$0()
t.c.e7()
w=8
return A.b(A.bN(B.ir,null,s),$async$Dc)
case 8:case 5:r.length===q||(0,A.K)(r),++p
w=4
break
case 6:if(t.c!=null)t.m(new C.d7A(t))
case 1:return A.h(u,v)}})
return A.i($async$Dc,v)},
UV(d){return this.bxo(d)},
bxo(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$UV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return A.b(A.aA(),$async$UV)
case 3:s=f
r=t.a
q=r.e
r=B.a.i(r.c.a.toLowerCase())
p=$.bBZ().length
o=B.o.F(t.at+d,p)
w=4
return A.b(s.ar("Int","ngmy_game_"+q+"_"+r,o),$async$UV)
case 4:t.at=o
case 1:return A.h(u,v)}})
return A.i($async$UV,v)},
cuc(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.qN("Wrong tile \u2014 paid for "+v.awx()+"/"+C.fSu()+" moves.")
return}v.m(new C.d8x(v,w))
if(v.ghx()&&D.mq.t(0,v.a.e))v.a_B()
if(v.x1>=w)if(v.x2>=7){v.oI()
if(v.ghx()&&D.mq.t(0,v.a.e))v.mM(!0)
else v.tn("All 7 pattern rounds correct!")}else{v.m(new C.d8y(v))
v.Dc()}},
IB(d,e){return this.cd3(d,e)},
tn(d){return this.IB(null,d)},
awA(){return this.IB(null,null)},
cd3(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a9(0)
s=t.b3
if(s!=null)s.a9(0)
r=t.a.x*1.46
t.m(new C.d87(t,r))
q=B.o.u(1000*Date.now())
s=t.a
p=new A.d1(q,s.c.a,r,B.fC,B.fb,"Game payout: "+s.f,null,null,B.ck,new A.S(Date.now(),0,!1))
A.ag0(p,!0)
t.a.hq(p)
t.a.bp()
o=e==null?"+$"+B.k.aa(r,2)+" added to your balance!":e
s=t.a
C.un(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.EB(d,o,"YOU WIN!",!0),$async$IB)
case 3:w=4
return A.b(C.afT(t.a.f,o),$async$IB)
case 4:case 1:return A.h(u,v)}})
return A.i($async$IB,v)},
Ez(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Ez=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghx()&&D.mq.t(0,t.a.e)?3:4
break
case 3:w=5
return A.b(t.coL(),$async$Ez)
case 5:w=1
break
case 4:s=t.zH()
r=t.NO()
w=r<=0||s<=0?6:7
break
case 6:w=8
return A.b(t.a9D("Time's up \u2014 no progress to pay."),$async$Ez)
case 8:w=1
break
case 7:q=B.k.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return A.b(t.tn("Complete! Max payout earned."),$async$Ez)
case 12:w=10
break
case 11:w=13
return A.b(t.E0(q,s,r),$async$Ez)
case 13:case 10:case 1:return A.h(u,v)}})
return A.i($async$Ez,v)},
PQ(d){return this.chm(d)},
a_B(){return this.PQ(!1)},
chm(b1){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$PQ=A.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghx()&&D.mq.t(0,r.a.e))||r.a.Q==null){w=1
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
return A.b(C.Kd(q,r.a.d.b5,!1),$async$PQ)
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
J.aG(k,p,r.zH())
J.aG(m,"scores",k)
if(r.a.e==="memory"){j=J.q(m,"memoryMatchedBy")
i=a2.b(j)?A.a1(j,a3,a5):A.V(a3,a5)
a6=r.id
a6=A.B(a6,A.a3(a6).k("cl.E"))
B.d.ff(a6)
J.aG(i,p,a6)
J.aG(m,"memoryMatchedBy",i)
h=A.aX(x.S)
for(a6=i,a6=new A.dt(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aW(g);a8.C();){f=a8.gU(a8)
e=typeof f=="number"?B.k.O(f):A.c7(J.k(f),null)
if(e!=null)J.cf(h,e)}}a6=h
a6=A.B(a6,A.a3(a6).k("cl.E"))
B.d.ff(a6)
J.aG(m,"memoryMatched",a6)}d=J.q(m,"wagers")
a0=a2.b(d)?A.a1(d,a3,a5):A.V(a3,a5)
J.aG(a0,p,r.a.x)
J.aG(m,"wagers",a0)
w=11
return A.b(C.aOd(r.a.d.b5,q,m),$async$PQ)
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
return A.i($async$PQ,v)},
mM(d){return this.coM(d)},
coL(){return this.mM(!1)},
coM(b5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$mM=A.e(function(b6,b7){if(b6===1)return A.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghx()||t.a.Q==null?3:4
break
case 3:w=5
return A.b(t.Ez(),$async$mM)
case 5:w=1
break
case 4:w=6
return A.b(t.PQ(!0),$async$mM)
case 6:s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=B.a.i(s.c.a.toLowerCase())
w=7
return A.b(C.Kd(q,s.d.b5,!0),$async$mM)
case 7:o=b7
n=t.NO()
w=o==null?8:9
break
case 8:m=B.k.D(t.zH()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return A.b(t.a9D("Time's up \u2014 no progress to pay."),$async$mM)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return A.b(t.tn("Complete! Max payout earned."),$async$mM)
case 17:w=15
break
case 16:w=18
return A.b(t.E0(m,t.zH(),n),$async$mM)
case 18:case 15:case 11:w=19
return A.b(t.Hd(),$async$mM)
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
if(a0==null)a0=t.zH()
d=A.aN(e.h(0,j))
a1=d==null?null:B.k.O(d)
if(a1==null)a1=0
a2=B.k.D(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return A.b(t.a9D("Time's up \u2014 no progress to pay."),$async$mM)
case 22:w=23
return A.b(t.Hd(),$async$mM)
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
t.m(new C.d8r(t,a8,a2))
r=t.a
r.toString
h=B.o.u(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+B.k.aa(a7,2):d+" ("+b1+"/"+b2+")"
r.hq(new A.d1(h,b0,a9,B.fC,B.fb,d,null,null,B.ck,new A.S(Date.now(),0,!1)))
t.a.bp()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+B.k.aa(a9,2)+" (includes opponent bonus $"+B.k.aa(a7,2)+")":"+$"+B.k.aa(a8,2)+" (your progress payout)"
s=t.a
C.un(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return A.b(t.EB(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$mM)
case 24:w=25
return A.b(t.Hd(),$async$mM)
case 25:case 1:return A.h(u,v)}})
return A.i($async$mM,v)},
E0(d,e,f){return this.cd1(d,e,f)},
cd1(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$E0=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a9(0)
s=t.b3
if(s!=null)s.a9(0)
r=t.a.x*1.46*d
t.m(new C.d85(t,r,d))
s=B.o.u(1000*Date.now())
q=t.a
p=new A.d1(s,q.c.a,r,B.fC,B.fb,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,B.ck,new A.S(Date.now(),0,!1))
A.ag0(p,!0)
t.a.hq(p)
t.a.bp()
if(t.c==null){w=1
break}o=B.k.V(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&A.c()
m=q+C.age(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?B.d.cH(t.cy,0,new C.d86()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+B.k.aa(r,2)+" ("+n+"% \u2014 "+A.t(k)+" mistakes/missed)":"+$"+B.k.aa(r,2)+" ("+n+"% of full prize)"
q=t.a
C.un(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return A.b(t.EB(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$E0)
case 3:w=4
return A.b(C.afT(t.a.f,j),$async$E0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$E0,v)},
bYB(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.zH()
v=o.NO()}catch(u){return}if(v<=0||w<=0)return
t=B.k.D(w/v,0,1)
s=A.nN(B.k.aa(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=B.o.u(1000*Date.now())
p=o.a
r.hq(new A.d1(q,p.c.a,s,B.fC,B.fb,"Game partial: "+p.f+" ("+A.t(w)+"/"+A.t(v)+", left early)",n,n,B.ck,new A.S(Date.now(),0,!1)))
o.a.bp()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.un(s,n,"Left early \xb7 +$"+B.k.aa(s,2)+" ("+A.t(w)+"/"+A.t(v)+")",q,r,p,n,!0)},
a9C(d,e){return this.bMP(d,e)},
bMP(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a9C=A.e(function(f,g){if(f===1)return A.f(g,v)
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
t.a.hq(new A.d1(r,q,p,B.fC,B.fb,"Game payout: "+s+" (draw, stake returned)",null,null,B.ck,new A.S(o,0,!1)))
t.a.bp()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.un(o,null,"Draw. Your $"+B.k.aa(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.EB(d,"Nobody won, so your $"+B.k.aa(t.a.x,2)+" stake was returned.","DRAW",!1),$async$a9C)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9C,v)},
WP(d,e){return this.bMQ(d,e)},
a9D(d){return this.WP(null,d)},
bMQ(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$WP=A.e(function(f,g){if(f===1)return A.f(g,v)
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
return A.b(t.EB(d,e,"YOU LOSE",!1),$async$WP)
case 3:case 1:return A.h(u,v)}})
return A.i($async$WP,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&A.c()
w=B.o.an(m,60)
m=B.a.aT(B.o.u(B.o.F(m,60)),2,"0")
v=A.aH(n,n,n,n,B.ali,n,n,n,new C.d8G(d),n,n,n,n,n,n)
if(o.ghx()){u=o.bC
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=A.D(A.d(u?t.f+" vs "+A.t(o.bC):t.f,n,2,B.a2,n,n,n,B.fW,n,n,n),1)
r=A.m(10)
q=x.p
r=A.A(A.a([v,s,A.p(n,C.ap0(new C.d8H(o),B.o_,t.c.a),B.f,n,n,new A.o(B.cR,n,n,r,n,n,B.n),n,n,n,n,B.fG,n,n,n)],q),B.m,n,B.e,B.j,0,n,n)
t=o.a
s=t.w
v=A.m(10)
s=A.p(n,A.A(A.a([A.D(A.d("Win $"+B.k.aa(t.x*1.46,2)+" \xb7 stake $"+B.k.aa(o.a.x,2)+" \u2022 Progress "+o.zH()+"/"+o.NO(),n,n,n,n,n,n,D.eUi,n,n,n),1),new C.aoa(o.a.c.a,new C.d8I(o),n),B.ab,D.bC1,B.d8,A.d(""+w+":"+m,n,n,n,n,n,n,B.nd,n,n,n)],q),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,n,v,n,new A.a7(B.a3,B.a7,B.x,s,n,n),B.n),n,n,n,n,B.h1,n,n,n)
v=o.a.w
m=A.T(v).k("J<1,w>")
m=A.B(new A.J(v,new C.d8J(),m),m.k("aj.E"))
w=A.m(14)
v=A.I(B.b5,B.r,1)
p=C.aNS(n,D.b46,A.bm(!0,new A.C(Ag.Xr,A.v(A.a([r,s,B.P,new A.fj(new C.d8K(o),n),B.ao,A.D(A.p(n,o.bMO(),B.f,n,n,new A.o(n,n,v,w,n,new A.a7(B.a3,B.a7,B.x,m,n,n),B.n),n,n,n,n,B.cj,n,n,n),1)],q),B.aj,n,B.e,B.j,0,B.p),n),!0,!1,B.ag,!0,!0))
if(!o.c6)return p
m=A.Z(140,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255)
w=A.Z(242,B.io.l()>>>16&255,B.io.l()>>>8&255,B.io.l()&255)
v=A.m(18)
u=A.I(B.b5,B.r,1)
return new A.an(B.W,n,B.aa,B.q,A.a([p,A.bZ(0,A.p(B.A,A.e3(A.p(n,A.v(A.a([D.eHd,B.ac,A.d(o.cW,n,n,n,n,n,n,D.eVK,B.L,n,n),B.ao,A.d(o.cj,n,n,n,n,n,n,D.eU_,B.L,n,n)],q),B.m,n,B.e,B.Q,0,B.p),B.f,n,n,new A.o(w,n,u,v,n,n,B.n),n,n,n,B.v0,B.xd,n,n,n),!1,n),B.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
bZz(){var w=this.k3
return A.cm(new C.d84(this,w,B.k.dJ(this.fr.length/w)))},
bMO(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.bZz()
if(m==="scramble"){m=o.r
m===$&&A.c()
w=x.l
return A.v(A.a([A.d(m,n,n,n,n,n,n,B.oQ,n,n,n),A.d("Words "+o.bi+"/5",n,n,n,n,n,n,B.CR,n,n,n),B.ac,A.d("Tap letters below to fill each slot",n,n,n,n,n,n,A.l(n,n,A.Z(166,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.S,A.c_(B.fM,A.ip(o.ay.length,new C.d7N(o),!0,w),B.bt,6,6),B.aO,A.c_(B.fM,A.ip(o.ch.length,new C.d7O(o),!0,w),B.bt,8,8),B.aO,new A.a6(1/0,n,A.i9(D.fjJ,o.gbCA(),A.fm(n,n,B.aE,n,n,n,n,n,n,B.c,n,n,B.cf,n,n,n,n,n,n,n)),n)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="typing"){m=o.w
m===$&&A.c()
return new C.aqs(m,o.e,new C.d7P(o),new C.d7Q(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&A.c()
m=A.a([A.d(m,n,n,n,n,n,n,B.oQ,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(A.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,B.CR,n,n,n))
m.push(B.ac)
if(o.a.e==="sequence"){w=o.az
w===$&&A.c()
w+=", ?"}else w=o.CW
m.push(A.f1(B.A,A.d(w,n,n,n,n,n,n,B.oP,B.L,n,n),B.f,B.dt))
m.push(B.aO)
w=o.x
B.d.v(m,new A.J(w,new C.d7R(o),A.T(w).k("J<1,r>")))
return A.v(m,B.m,n,B.e,B.j,0,B.p)}if(m==="puzzle")return A.cm(new C.d7S(o))
if(m==="simon"){m=o.r
m===$&&A.c()
return A.v(A.a([A.d(m,n,n,n,n,n,n,B.oQ,n,n,n),A.d("Progress "+o.p3+"/21",n,n,n,n,n,n,B.CR,n,n,n),B.P,A.D(A.lR(1,A.ip(4,new C.d7T(o),!0,x.l),2,10,10,n,B.dQ,!1),1)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="pattern")return A.cm(new C.d7U(o))
if(m==="color"){u=A.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[B.dE,B.dw,B.hM,B.r0]
m=o.r
m===$&&A.c()
m=A.d(m,n,n,n,n,n,n,B.oQ,n,n,n)
w=A.d("Round "+o.b5+"/5",n,n,n,n,n,n,B.CR,n,n,n)
v=o.aE
v===$&&A.c()
s=o.aN
s===$&&A.c()
s=A.a([m,w,B.ac,A.d(v,n,n,n,n,n,n,A.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.aO],x.p)
r=J.e0(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=A.fm(n,n,A.Z(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,B.c,n,n,B.f3,n,n,n,n,n,n,n)
r[q]=new A.C(B.cG,new A.a6(1/0,n,A.i9(new A.x(u[q],n,B.cu,n,n,n,n,n,n,n,n,n),new C.d7V(o,u,q),m),n),n)}B.d.v(s,r)
return A.v(s,B.m,n,B.e,B.j,0,B.p)}if(m==="reflex"){m=o.y
p=m?B.bn:B.cb
w=o.r
w===$&&A.c()
w=A.d(w,n,n,n,n,n,n,B.a6z,B.L,n,n)
v=A.d("Fast taps "+o.Z+"/5",n,n,n,n,n,n,D.eRy,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=A.d(m,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,n,n,n,Math.min(A.aI(s,B.bS,x.w).w.a.a*0.18,72),n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return A.rh(A.aE(B.c5,A.dg(n,A.v(A.a([w,B.P,v,B.b3,s,B.b3,new A.C(B.EG,A.d(m,n,n,n,n,n,n,A.l(n,n,A.Z(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),B.m,n,B.ba,B.j,0,B.p),p,n,B.bb,n,U.As,n,n,n,n,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gbSd(),n,n,n,n,n,n,!1,B.a8))}if(B.d.t(D.Pn,m)&&o.b0!=null){m=o.a.e
w=o.b0
w.toString
return C.hQH(m,new C.d7W(o),new C.d7X(o),o.d,w)}m=o.r
m===$&&A.c()
return A.av(A.d(m,n,n,n,n,n,n,B.dk,n,n,n),n,n,n)}}
C.akE.prototype={
T(){return new C.beH()},
cMD(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.beH.prototype={
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.a,a0=d.c,a1=d.d
d=A.aI(a2,B.e7,x.w).w
w=x.p
v=A.a([A.bLX(!1,f.a.r,"INVESTMENT PLANS",e),B.d5],w)
u=a0.x
if(u!=null){t=u.d.bQ()
s=B.a.aT(B.o.u(A.bG(t)),2,"0")
r=B.a.b_(B.o.u(A.bx(t)+1),2)
q=A.m(18)
p=A.I(Y.W9,B.r,2.2)
o=x.V
n=A.a([new A.ad(0,B.G,A.Z(89,B.qn.l()>>>16&255,B.qn.l()>>>8&255,B.qn.l()&255),B.eT,20),new A.ad(0,B.G,A.Z(102,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dn,14)],o)
m=A.ao(e,A.p(e,e,B.f,e,e,new A.o(A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),e,e,e,e,e,B.a6),e,120,e,e,e,e,e,120),e,e,e,-20,-24,e)
l=A.m(10)
k=A.I(Y.W9,B.r,3.4)
o=A.a([new A.ad(0,B.G,A.Z(166,B.qn.l()>>>16&255,B.qn.l()>>>8&255,B.qn.l()&255),B.dA,10),new A.ad(0,B.G,A.Z(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cJ,6)],o)
o=A.A(A.a([A.p(e,e,B.f,e,e,new A.o(e,e,k,l,o,new A.a7(B.ax,B.aD,B.x,D.cXu,D.czW,e),B.n),e,42,e,e,e,e,e,56),B.b3,f.b4u(a2,!0)],w),B.m,e,B.e,B.j,0,e,e)
l=A.CW(u.a,1,B.a2,D.eYR)
k=u.b
j=u.c
i=A.CW("Making $"+A.dz(k*j)+" Daily",1,B.a2,D.eZ3)
h=A.CW(f.b_A(k),1,B.a2,D.eSf)
r=A.A(A.a([A.D(A.v(A.a([D.fd6,A.CW(a0.c,1,B.a2,D.aOc)],w),B.F,e,B.e,B.j,0,B.p),1),A.v(A.a([D.fcT,A.d(s+"/"+r,e,e,e,e,e,e,D.aOc,e,e,e)],w),B.dD,e,B.e,B.j,0,B.p)],w),B.m,e,B.e,B.j,0,e,e)
s=A.p(e,e,B.f,A.Z(89,D.wI.l()>>>16&255,D.wI.l()>>>8&255,D.wI.l()&255),e,e,e,1,e,e,e,e,e,e)
j=A.A(A.a([f.apC("INVESTED","$"+A.dz(k),!0),f.apC("DAILY ROI",B.k.aa(j*100,2)+"%",!0),f.apC("DAYS LEFT",""+(261-u.f)+" d",!0)],w),B.m,e,B.hK,B.j,0,e,e)
k=A.dz(u.e)
u=u.f
g=261-u>0?"ACTIVE":"ENDED"
B.d.v(v,A.a([D.fjj,B.ud,A.p(e,new A.an(B.W,e,B.aa,B.q,A.a([m,A.v(A.a([o,B.P,D.fbz,B.bz,l,B.at,i,B.at,h,B.P,r,B.ao,s,B.ao,j,B.at,A.CW("Earned $"+k+" \u2022 Clocked "+u+"/261 \u2022 "+g,1,B.a2,D.eYe)],w),B.F,e,B.e,B.Q,0,B.p)],w),e),B.f,e,e,new A.o(e,e,p,q,n,D.bRm,B.n),e,e,e,e,B.bB,e,e,1/0),B.a5S],w))}v.push(D.f3S)
v.push(B.ud)
B.d.v(v,new A.J(a1,new C.dci(f,a2),A.T(a1).k("J<1,r>")))
return A.cb(e,B.K,A.bm(!1,A.cd(A.v(v,B.F,e,B.e,B.j,0,B.p),B.q,e,B.y,e,new A.Q(20,10,20,124+d.r.d),e,e,B.ah),!0,!1,B.ag,!0,!0),e,!1,!1,e,e)},
b4u(d,e){var w=null,v=A.Z(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(8),t=A.I(B.j3,B.r,1)
return A.p(w,A.A(A.a([A.W(B.aj9,B.c,w,w,w,16),B.d8,A.d("TAP",w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eF,w,w,w)},
b_A(d){var w=B.a.aT(B.o.u(B.k.V(d*100)),4,"0")
return"****  ****  ****  "+B.a.b_(w,w.length-4)},
apC(d,e,f){var w=null,v=A.Z(217,D.wI.l()>>>16&255,D.wI.l()>>>8&255,D.wI.l()&255)
v=A.d(d,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.v(A.a([v,B.bz,A.CW(e,w,w,A.l(w,w,E.Ac,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),B.F,w,B.e,B.j,0,B.p)},
cf5(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gcR_(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
o=A.a([new A.ad(0,B.G,A.Z(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.Ra,16),new A.ad(0,B.G,A.Z(115,B.ak.l()>>>16&255,B.ak.l()>>>8&255,B.ak.l()&255),B.dn,14),new A.ad(0,B.G,A.Z(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cJ,8)],p)
n=A.ao(d,A.p(d,d,B.f,d,d,new A.o(d,d,d,d,d,new A.bR(B.A,0.5,B.x,d,0,A.a([A.Z(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),A.Z(0,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)],x.O),d,d),B.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=A.m(5)
l=A.I(B.c,B.r,2.2)
k=A.b0(4286436348)
k=A.Z(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=A.Z(B.k.V(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
i=A.b0(4279150057)
h=x.p
p=A.A(A.a([new A.a6(44,44,new A.an(B.W,d,B.aa,B.f,A.a([A.ao(d,A.eA(B.A,0.7853981633974483,A.p(d,d,B.f,d,d,new A.o(d,d,l,m,A.a([new A.ad(0.5,B.G,k,B.J,14),new A.ad(0,B.G,j,B.J,6),new A.ad(0,B.G,A.Z(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new A.u(0,2),4)],p),D.bQ2,B.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.e6E],h),d),d),B.b3,e.b4u(b2,!0)],h),B.m,d,B.e,B.j,0,d,d)
a6=A.CW(a6,1,B.a2,D.eP1)
i=A.CW(e.b_A(a3),1,B.a2,D.f2h)
j=A.A(A.a([e.b_0(B.k.aa(2.86,2)+"%"),B.ea,e.b_0("261d")],h),B.m,d,B.e,B.j,0,d,d)
k=A.D(A.v(A.a([D.f54,A.CW("$"+A.dz(a3),1,B.a2,D.f14)],h),B.F,d,B.e,B.j,0,B.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=A.A(A.a([k,A.d(m,d,d,d,d,d,d,D.ePO,d,d,d)],h),B.dD,d,B.e,B.j,0,d,d)
k=A.p(d,d,B.f,A.Z(89,B.bw.l()>>>16&255,B.bw.l()>>>8&255,B.bw.l()&255),d,d,d,1,d,d,d,d,d,d)
l=A.A(A.a([A.D(e.awN("Daily","$"+A.dz(a4)),1),B.ea,A.D(e.awN("Total","$"+A.dz(a4*261)),1),B.ea,A.D(e.awN("Days","261"),1)],h),B.m,d,B.e,B.j,0,d,d)
g=q?d:new C.dch(e,b3,a3,t)
f=B.k.V(127.5)
f=A.fm(d,d,B.bm,A.Z(f,B.ak.l()>>>16&255,B.ak.l()>>>8&255,B.ak.l()&255),A.Z(f,B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255),d,3,d,d,B.aP,d,d,d,d,new A.b7(A.m(10),D.aVz),d,d,d,d,d)
return A.p(d,new A.an(B.W,d,B.aa,B.f,A.a([n,A.v(A.a([p,B.bz,D.fdP,B.bz,a6,B.d0,i,B.fV,j,B.fV,m,B.fV,k,B.fV,l,B.P,new A.a6(1/0,40,A.i9(A.f1(B.A,A.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.eQd,d,d,d),B.f,B.eg),g,f),d)],h),B.F,d,B.e,B.Q,0,B.p)],h),d),B.f,d,d,new A.o(d,d,w,a0,o,D.bRW,B.n),d,d,d,B.kD,D.bnq,d,d,1/0)},
b_0(d){var w=null,v=A.Z(115,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(5),t=A.I(B.cm,B.r,1)
return A.p(w,A.d(d,w,w,w,w,w,w,D.ePq,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.EY,w,w,w)},
awN(d,e){var w=null,v=A.Z(97,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(7),t=A.I(B.aL,B.r,1)
return A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,D.eYC,w,w,w),B.ue,A.f1(B.a3,A.d(e,w,w,w,w,w,w,D.f08,w,w,w),B.f,B.dt)],x.p),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.lB,w,w,w)}}
C.ah1.prototype={
T(){var w=null,v=A.a([],x._),u=$.aw()
return new C.avV(v,new A.ar(B.as,u),new A.ar(B.as,u),A.mp(0,w,w),new A.hV(),D.QD,C.afQ(),A.a([],x.fw),A.aX(x.N),A.mp(0,w,w))}}
C.avV.prototype={
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
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t].a
if(s.length!==0)u.J(0,s)}r.aaZ()
r.O8()
r.ape()
r.crE()
r.crT()
$.aT.x1$.push(new C.cAa(r))
r.a.toString},
O8(){var w=0,v=A.j(x.H),u,t=this,s
var $async$O8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aoB(),$async$O8)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.czv(t,s))
case 1:return A.h(u,v)}})
return A.i($async$O8,v)},
gayn(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gO4())return!0
return!1},
gO4(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaTa(){var w,v=this.CW
if(v==null)return B.bx
w=v.by(new A.S(Date.now(),0,!1))
return w.a<0?B.bx:w},
byb(){var w=this
if(w.a.c.w)return
if(w.gO4()){if(!w.cx)w.m(new C.czl(w))}else if(w.cx)w.m(new C.czm(w))},
cl7(){this.m(new C.czF(this))},
tv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$tv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.m(new C.czC(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.m(new C.czD(t))
w=1
break}w=3
return A.b(C.c6H(o.a,s),$async$tv)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return A.b(C.c6I(t.a.c.a,s),$async$tv)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.m(new C.czE(t,r,q))
t.ctH()
t.byb()
if(r===3)t.XQ(r)}case 1:return A.h(u,v)}})
return A.i($async$tv,v)},
XQ(d){return this.bZq(d)},
bZq(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$XQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return A.b(C.bBB(q,r,new C.czx(t),d,s.c.a),$async$XQ)
case 3:case 1:return A.h(u,v)}})
return A.i($async$XQ,v)},
x_(d){return this.bzG(d)},
ape(){return this.x_(!1)},
bzG(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$x_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return A.b(A.a6Z(k,C.hfu(l.d)),$async$x_)
case 3:j=m
w=4
return A.b(C.c76(k),$async$x_)
case 4:s=j.a=f
w=5
return A.b(A.apq(k),$async$x_)
case 5:r=f
w=!s.a&&J.cw(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.Up(!0,l,q,p)
m.a=s
w=8
return A.b(C.aoD(k,s),$async$x_)
case 8:case 7:w=9
return A.b(C.Tp(k),$async$x_)
case 9:o=f
w=10
return A.b(C.a6l(k),$async$x_)
case 10:n=f
if(t.c==null){w=1
break}t.m(new C.czn(m,t,r,o,n))
case 1:return A.h(u,v)}})
return A.i($async$x_,v)},
Pn(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Pn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.O8(),$async$Pn)
case 3:s=t.c
if(s==null){w=1
break}r=A.ej(new C.czA(t),!1,null,x.H)
w=4
return A.b(A.a5(s,!1).ce(r),$async$Pn)
case 4:w=5
return A.b(t.O8(),$async$Pn)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Pn,v)},
cvM(){this.m(new C.czY(this))},
crT(){var w=this,v=w.go
if(v!=null)v.a9(0)
if(w.a.c.w)return
w.go=A.dC(B.qB,new C.czS(w))},
ctH(){var w=this,v=w.id
if(v!=null)v.a9(0)
w.id=null
if(!w.gO4()||w.CW==null)return
w.id=A.dC(B.hf,new C.czV(w))},
crE(){var w=this,v=w.fy
if(v!=null)v.a9(0)
w.fy=A.dC(B.j4,new C.czR(w))
w.EG()},
EG(){return this.ctG()},
ctG(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$EG=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aE
t=4
w=7
return A.b(A.aA(),$async$EG)
case 7:q=e
p=A.aU(J.q(q.a,"app_config"))
if(p!=null&&p.length!==0){o=B.R.aG(0,p,null)
if(x.f.b(o)){m=A.CH(A.a1(o,x.N,x.z)).aE
i.a=m
r.a.f.aE=m}}w=10
return A.b(A.Kp(),$async$EG)
case 10:w=e?8:9
break
case 8:w=11
return A.b(A.aNR(),$async$EG)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aE=l
w=14
return A.b(q.ar("String","app_config",B.R.ao(k.ad(),null)),$async$EG)
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
break}if(i.a!==r.ay)r.m(new C.czT(i,r))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$EG,v)},
b3p(){B.d.b1(this.f,new C.czQ())},
aaZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$aaZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Mc(t.a.c.a),$async$aaZ)
case 3:q=e
if(t.c==null){w=1
break}s=A.a([],x._)
if(J.cw(q)){B.d.v(s,q)
B.d.b1(s,new C.czs())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(A.E(["role","ai","text",r,"at",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z))}t.m(new C.czt(t,s))
t.a0y(!0)
A.bN(B.jn,new C.czu(t),x.H)
case 1:return A.h(u,v)}})
return A.i($async$aaZ,v)},
aeu(){var w=0,v=A.j(x.H),u=this
var $async$aeu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.amr(u.a.c.a,u.f),$async$aeu)
case 2:return A.h(null,v)}})
return A.i($async$aeu,v)},
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
a9Z(d){var w,v=this
v.m(new C.czq(v,d))
w=v.e
w===$&&A.c()
if(w.f.length!==0)w.AH(d,B.cq,B.kB)
else $.aT.x1$.push(new C.czr(v,d))
if(d===0)v.a0y(!0)
if(d===1)v.cn4(!0)},
a0y(d){$.aT.x1$.push(new C.czI(this,d))},
ay0(){return this.a0y(!1)},
a_S(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_S=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a09(),$async$a_S)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==B.a.i(t.a.f.r))t.m(new C.czB(t))
case 1:return A.h(u,v)}})
return A.i($async$a_S,v)},
mL(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$mL=A.e(function(c8,c9){if(c8===1){s.push(c9)
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
return A.b(C.aow(a9.a,b0),$async$mL)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return A.b(q.tv(),$async$mL)
case 10:q.m(new C.czJ(q))
w=1
break
case 8:w=11
return A.b(q.tv(),$async$mL)
case 11:if(q.c!=null&&q.ch===3)q.XQ(3)
case 6:case 4:q.m(new C.czK(q,c5))
C.Tc(q.a.c.a,"user",c5)
q.ay0()
t=13
a8={}
w=16
return A.b(q.a_S(),$async$mL)
case 16:b1=B.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return A.b(A.a09(),$async$mL)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.m(new C.czL(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.bzG("",null)
q.m(new C.czM(q,p))
C.Tc(q.a.c.a,"ai",p)
q.ay0()
r=[1]
w=14
break}o=A.mX(a9)
a9=q.a
n=""
m=C.hfu(a9.d)
w=C.hfn(c5)?20:21
break
case 20:w=22
return A.b(C.c75(q.a.c.a),$async$mL)
case 22:q.db=c9
w=23
return A.b(q.x_(!0),$async$mL)
case 23:case 21:w=24
return A.b(A.a6Z(q.a.c.a,m),$async$mL)
case 24:l=c9
k=C.hxd(l)
a9=k
b2=Date.now()
b3=new A.S(b2,0,!1).bQ()
b2=B.a.aT(B.o.u(A.bG(b3)),2,"0")
b4=B.a.aT(B.o.u(A.bQ(b3)),2,"0")
b5=B.a.aT(B.o.u(A.dh(b3)),2,"0")
b6=B.a.aT(B.o.u(A.fY(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+A.bx(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return A.b(C.Tp(q.a.c.a),$async$mL)
case 25:i=c9
h=C.h_N(i,25)
w=26
return A.b(C.a6l(q.a.c.a),$async$mL)
case 26:g=c9
f=C.h1q(g)
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
return A.b(C.afR(a9,q.a.c.a,c5),$async$mL)
case 27:a0=c9
a1=""
if(C.hfn(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:B.a.i(b2).length!==0)===!0){b2.toString
b8=B.a.i(b2)}else{a9=a9.c
b8=B.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=A.t(d)
b4=A.t(j)
b5=q.a.c.w?"\n"+C.hTu(m)+"\n":""
b6=J.ac(n)!==0?"\n"+A.t(n)+"\n":""
b9=J.ac(a0)!==0?"\n"+A.t(a0)+"\n":""
c0=A.t(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hrz(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+A.t(c5)
w=28
return A.b(A.qB(o,a2,B.hj,null),$async$mL)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.bzG(a8.a,a3.a)
a4=c2
a5=A.heK(a4)
c3=a5.a
a8.b=c3
if(B.d.gal(c3)){a9=A.B(C.hWc(c5),x.an)
a6=a9
J.h_(a6,C.hWd(c5))
J.h_(a6,C.hWe(c5))
J.h_(a6,A.hec(c5))
J.h_(a6,C.hWh(c5,q.a.c.w))
a8.b=a6}c3=C.hVq(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return A.b(A.ag6(c3,a6,m,q.a.c.a),$async$mL)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.m(new C.czN(a8,q,a7))
C.Tc(q.a.c.a,"ai",a7)
if(J.cw(a8.b)&&q.c!=null)q.Jf(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.m(new C.czO(q))
C.Tc(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.m(new C.czP(q))
q.ay0()
q.aeu()
if(!q.a.c.w)q.tv()
w=r.pop()
break
case 15:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$mL,v)},
ce4(d){var w=A.V(x.N,x.z)
w.n(0,"type",d.a)
w.v(0,d.b)
return w},
ce5(d){var w,v,u,t,s,r,q,p=J.q(d,"phoneActions")
if(!x.j.b(p))return B.i8
w=A.a([],x.Z)
for(v=J.aW(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gU(v)
if(u.b(r)){q=A.cac(A.a1(r,t,s))
if(q!=null)w.push(q)}}return w},
Jf(d){return this.clC(d)},
clC(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Jf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J.aW(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gU(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return A.b(C.ag1(p,o,new C.czG(t,p)),$async$Jf)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return A.b(A.G4(p,null,o,!1,!0,t.a.c.a),$async$Jf)
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
return A.b(A.G4(p,l.f,o,k,n,j),$async$Jf)
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
return A.b(C.aWQ(p,A.a([new C.r5("out_"+1000*o,new A.S(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$Jf)
case 14:t.ape()
case 13:p=t.c.I(r).f
p.R(new A.b1(new A.x(m,null,null,null,null,null,null,null,null,null,null,null),B.cZ,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null))
w=3
break
case 4:case 1:return A.h(u,v)}})
return A.i($async$Jf,v)},
R5(d){return this.cu9(d)},
cu9(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$R5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return A.b(C.ag1(d,n,new C.czX(t)),$async$R5)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return A.b(A.G4(d,null,n,!1,!0,t.a.c.a),$async$R5)
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
return A.b(A.G4(d,q.f,r,p,n,o),$async$R5)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.I(x.q).f.R(A.b2(null,null,null,B.cZ,null,B.q,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$R5,v)},
cn4(d){$.aT.x1$.push(new C.czH(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.N(d).ax.a===B.H,j=k?B.da:B.Ai,i=m.d
i===$&&A.c()
w=x.O
w=k?A.a([B.adV,D.b9z],w):A.a([B.aI,B.wE],w)
v=A.m(22)
u=A.a([new A.ad(0,B.G,A.Z(71,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),B.cy,16)],x.V)
t=m.a.c.w?m.gc9L():l
s=A.Z(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
r=A.I(B.c_,B.r,1.5)
t=A.aE(l,A.p(l,C.fQQ(m.a.f.Q,48),B.f,l,l,new A.o(s,l,r,l,l,l,B.a6),l,48,l,l,l,l,l,48),B.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,B.a8)
r=A.d("NGMY Helper",l,1,B.a2,l,l,l,B.du,l,l,l)
s=A.p(l,l,B.f,l,l,D.aXH,l,8,l,l,l,l,l,8)
if(m.gayn()&&m.d===0)q=m.gO4()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=A.p(l,A.A(A.a([t,B.bf,A.D(A.v(A.a([r,B.bz,A.A(A.a([s,B.bp,A.D(A.d(q,l,1,B.a2,l,l,l,A.l(l,l,A.Z(B.k.V(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,B.cs,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,B.mi,l,l,l,new C.cA2(d),l,l,l,l,l,l)],p),B.m,l,B.e,B.j,0,l,l),B.f,l,l,new A.o(l,l,l,v,u,new A.a7(B.ax,B.aD,B.x,w,l,l),B.n),l,l,l,F.afD,D.bo6,l,l,l)
v=k?D.rN:B.c
u=A.m(14)
t=A.I(k?B.bF:B.e2,B.r,1)
u=A.p(l,A.A(A.a([m.bCl(),m.ctT(1,B.lD,"Music")],p),B.m,l,B.e,B.j,0,l,l),B.f,l,l,new A.o(v,l,t,u,l,l,B.n),l,l,l,l,B.en,l,l,l)
t=m.e
t===$&&A.c()
if(m.gayn()){v=A.a([],p)
if(m.gO4()){s=A.Z(38,B.cZ.l()>>>16&255,B.cZ.l()>>>8&255,B.cZ.l()&255)
r=A.m(12)
q=A.I(A.Z(115,B.cZ.l()>>>16&255,B.cZ.l()>>>8&255,B.cZ.l()&255),B.r,1)
v.push(new A.C(B.Lp,A.p(l,A.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hvw(m.gaTa())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.f_D,B.L,l,l),B.f,l,l,new A.o(s,l,q,r,l,l,B.n),l,l,l,l,B.eh,l,l,1/0),l))}if(m.cy&&!m.gO4()){s=A.Z(31,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
r=A.m(12)
q=A.m(12)
o=A.W(B.ps,k?B.iM:B.hd,l,l,l,16)
v.push(new A.C(B.Lp,A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,new A.C(B.eh,A.A(A.a([o,B.bp,A.d("Back to NGMY Helper AI",l,l,l,l,l,l,A.l(l,l,k?B.iM:B.hd,l,l,l,l,l,l,l,l,12,l,l,B.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),B.m,l,B.ba,B.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcl6(),l,l,l,l,l,l,l),B.f,s,0,l,l,l,l,l,B.af),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcvL():l
v.push(A.D(new C.aoz(s,q,new C.cA3(),r,o,l),1))
v=A.v(v,B.m,l,B.e,B.j,0,B.p)}else v=m.bCm(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.h2j(r)
t=A.a([w,B.ac,new A.C(B.hH,u,l),B.P,A.D(A.h3i(A.a([v,new C.aoC(q,o,n,new C.cA4(m,d),s,l)],p),B.q,t,B.y,new C.cA5(m),l),1)],p)
if(m.d===0&&!m.gayn()){w=A.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a1x:D.a0U
w.push(new A.a6(l,36,A.hE(l,new C.cA6(m),v.length,l,l,B.aQ,new C.cA7(),!1),l))}if(m.ax&&m.f.length<=1)w.push(B.P)
v=m.r
u=A.l(l,l,k?B.c:B.bh,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=A.l(l,l,k?B.ay:B.dz,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?B.w:B.c
r=A.Z(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=A.m(22)
o=A.m(22)
n=k?B.b5:B.f7
u=A.D(A.aL(l,B.T,!1,l,!0,B.q,l,A.aM(),v,l,l,l,l,l,2,A.br(l,new A.b4(4,q,B.Y),l,B.AA,l,l,l,l,!0,new A.b4(4,o,new A.az(n,1,B.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.y,!0,l,!0,l,!1,l,B.ai,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cA8(m),l,!1,l,l,!1,l,!0,l,B.a9,l,l,l,l,l,l,l,l,l,l,l,u,!0,B.a5,l,B.am,l,B.aN7,l,l),1)
s=m.at
r=s?l:m.gco4()
w.push(A.A(A.a([u,new A.Ia(v,B.aI,l),B.bp,A.aF(!1,B.a1,!0,l,A.aK(!1,l,!0,new A.a6(44,44,s?D.e0l:P.ala,l),B.cL,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),B.f,B.aI,0,l,l,B.cL,l,l,B.af)],p),B.dD,l,B.e,B.j,0,l,l))
w=A.v(w,B.m,l,B.e,B.Q,0,B.p)
v=k?B.kZ:B.c
t.push(A.tH(B.ry,A.p(l,new A.C(B.EI,w,l),B.f,l,l,new A.o(v,l,A.I(k?A.Z(41,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Z(18,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.r,1),B.ry,l,l,B.n),l,l,l,l,l,l,l,l),14,!1))}return new A.Vk(i,new C.cA9(m),A.cb(l,j,A.bm(!0,A.v(t,B.m,l,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),l,!1,!1,l,l),l)},
bCl(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===0
p=this.c
p.toString
v=A.N(p).ax.a===B.H
if(w)p=A.Z(B.k.V(255*(v?0.25:0.12)),B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
else p=B.K
u=A.m(11)
t=w?A.I(A.Z(B.k.V(127.5),B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),B.r,1):q
s=A.W(B.tu,w?B.aI:B.cU,q,q,q,17)
if(w)r=v?B.c:B.aA
else r=B.cU
return A.D(A.aE(q,A.dg(q,A.A(A.a([s,B.bp,A.d("Chat",q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.ba,B.j,0,q,q),q,q,B.bb,new A.o(p,q,t,u,q,q,B.n),B.eE,q,q,q,B.uS,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.czo(this),q,q,q,q,q,q,!1,B.a8),1)},
ctT(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
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
return A.D(A.aE(q,A.dg(q,A.A(r,B.m,q,B.ba,B.j,0,q,q),q,q,B.bb,new A.o(p,q,t,u,q,q,B.n),B.eE,q,q,q,B.uS,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.czW(this,d),q,q,q,q,q,q,!1,B.a8),1)},
bCm(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.beI:A.Z(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
w=A.m(18)
v=A.I(d?B.dq:B.aL,B.r,1)
u=q===0?1:q
return A.p(s,A.k0(!0,s,t.ok,new C.czp(t,e,d),u,s,B.bU,s,s,!1,!1),B.f,s,s,new A.o(r,s,v,w,s,s,B.n),s,s,s,B.hH,s,s,s,s)},
aMQ(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a8(d),m=J.y(n.h(d,"role"),"user"),l=m?B.i8:this.ce5(d),k=m?B.lJ:B.e,j=x.p,i=A.a([],j),h=!m
if(h)B.d.v(i,A.a([new A.a6(28,28,C.fQQ(this.a.f.Q,28),o),B.ab],j))
w=m?B.dD:B.F
j=A.a([],j)
if(h)j.push(D.e0B)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=B.aI
else u=e?B.Wk:B.aP
t=m?16:4
s=m?4:16
if(m)r=o
else r=A.I(e?B.bF:B.aL,B.r,1)
q=A.a([new A.ad(0,B.G,A.Z(10,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dA,6)],x.V)
if(f)n=A.d("typing\u2026",o,o,o,o,o,o,A.l(o,o,e?B.ay:B.dz,o,o,o,o,o,o,o,o,12,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=B.c
else p=e?B.ad:B.bm
p=A.d(n,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(A.fMV(m,A.p(o,n,B.f,o,o,new A.o(u,o,r,new A.bp(B.kS,B.kS,new A.aV(t,t),new A.aV(s,s)),q,o,B.n),o,o,o,o,Ad.EJ,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(A.heP(l,e,this.gcu8()))
i.push(new A.dm(1,B.ci,A.v(j,w,o,B.e,B.j,0,B.p),o))
if(m)i.push(B.d8)
return new A.C(B.db,A.A(i,B.dD,o,k,B.j,0,o,o),o)},
bCk(d,e){return this.aMQ(d,e,!1)}}
C.aIV.prototype={
a_(){this.a1()
$.yf().aM(0,this.gDV())},
q(){$.yf().a3(0,this.gDV())
this.a2()}}
C.aIW.prototype={
a_(){this.a1()
$.yf().aM(0,this.gDV())},
q(){$.yf().a3(0,this.gDV())
this.a2()}}
C.aIX.prototype={
a_(){this.a1()
$.yf().aM(0,this.gDV())},
q(){$.yf().a3(0,this.gDV())
this.a2()}}
C.aJT.prototype={
a_(){this.a1()
$.yf().aM(0,this.gDV())},
q(){$.yf().a3(0,this.gDV())
this.a2()}}
C.V9.prototype={
a4(){return"NgmySnapshotResolveOutcome."+this.b}}
C.amb.prototype={
T(){return new C.aAP()}}
C.aAP.prototype={
a_(){var w,v=this
v.a1()
w=v.a
v.d=w.d
v.e=A.bl(w.e,!0,x.o)
v.f=v.a.f},
kG(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
zU(d,e){return this.cza(d,e)},
cza(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$zU=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dsN(q,e))
t=3
w=6
return A.b(d.$0(),$async$zU)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.m(new C.dsO(q))
w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$zU,v)},
Aj(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Aj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=t.d
q===$&&A.c()
w=3
return A.b(A.uq(r,q),$async$Aj)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dsE(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Aj,v)},
a8x(){var w=0,v=A.j(x.gE),u,t=this,s,r,q,p
var $async$a8x=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Aj(),$async$a8x)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&A.c()
q=t.e
q===$&&A.c()
p=t.f
p===$&&A.c()
u=A.N_(s,A.Jh(A.bWy(r,q,s,p).eJ(),null,"  "))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a8x,v)},
Wz(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Wz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oU(s,t.a.c,!1),$async$Wz)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zU(new C.dsC(t),"Preparing download\u2026"),$async$Wz)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wz,v)},
Y0(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Y0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oU(s,t.a.c,!1),$async$Y0)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zU(new C.dsM(t),"Creating QR code\u2026"),$async$Y0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y0,v)},
Y_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hOo(r),$async$Y_)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.zU(new C.dsB(t,s),"Looking up code\u2026"),$async$Y_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y_,v)},
abO(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$abO=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wN.c4().Lo(B.PI,B.to,!0),$async$abO)
case 7:r=e
p=r
q=p==null?null:J.fo(p.a)
if(q==null){u=null
w=1
break}if(q.c!=null){p=q.c
p.toString
p=!B.aG.gal(p)}else p=!1
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
case 6:u=A.G0()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$abO,v)},
zy(d,e,f){return this.bEF(d,e,f)},
aO3(d,e){return this.zy(d,!1,e)},
bEE(d){return this.zy(d,!1,!1)},
bEF(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zy=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Aj(),$async$zy)
case 3:if(t.c==null){w=1
break}if(!C.bWD(d,t.a.c,null)){t.kG(C.bWE(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&A.c()
s=!C.hrg(d,s)}if(s){t.kG(y.B)
w=1
break}r=d.as
q=J.ck(r)
s=t.c
s.toString
w=4
return A.b(C.hOB(s,q,t.a.c,d),$async$zy)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=A.lC(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,B.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&A.c()
r=o}w=5
return A.b(A.r9(s,p,r,!1,null,null,d.ax),$async$zy)
case 5:if(t.c==null){w=1
break}t.m(new C.dsA(t,p,r,d))
t.kG("Restored your local Growth Income. Go back to see it updated.")
case 1:return A.h(u,v)}})
return A.i($async$zy,v)},
abN(){var w=0,v=A.j(x.H),u=this
var $async$abN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.zU(new C.dsD(u),"Reading file\u2026"),$async$abN)
case 2:return A.h(null,v)}})
return A.i($async$abN,v)},
VT(d){return this.bFW(d)},
bFW(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$VT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&A.c()
s=new A.d1("local_qr_dep_"+1000*r,q.a,d,B.fq,B.fb,"Admin deposit ($"+A.dz(d)+")",null,null,B.ck,new A.S(Date.now(),0,!1))
C.c97(t.d,s)
q=t.e
q===$&&A.c()
r=A.B(q,x.o)
r.push(s)
w=3
return A.b(A.r9(t.a.c,t.d,r,!0,null,null,null),$async$VT)
case 3:w=4
return A.b(t.Aj(),$async$VT)
case 4:if(t.c==null){w=1
break}t.kG("Deposited $"+A.dz(d)+" to your local wallet.")
case 1:return A.h(u,v)}})
return A.i($async$VT,v)},
b2P(d){var w=null
return A.c9(w,w,!0,w,new C.dsK(),d,w,!0,!0,x.N)},
V0(d){return this.by5(d)},
by5(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$V0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return A.b(t.VT(d.b),$async$V0)
case 5:w=1
break
case 4:s=d.c
t.kG(s==null?"Could not apply deposit.":s)
case 1:return A.h(u,v)}})
return A.i($async$V0,v)},
Ef(d){return this.ciM(d)},
ciM(d){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Ef=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Aj(),$async$Ef)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return A.b(C.aZI(d,t.a.c),$async$Ef)
case 4:s=f
if(!s.a){u=!1
w=1
break}if(s.b){t.kG("This deposit code was already used.")
u=!0
w=1
break}if(s.d){t.kG(y.y)
u=!0
w=1
break}if(s.c){t.kG(y.j)
u=!0
w=1
break}r=t.c
if(r==null){u=!0
w=1
break}w=5
return A.b(t.b2P(r),$async$Ef)
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
return A.b(C.c90(d,o,n.a,r,p),$async$Ef)
case 7:w=6
return A.b(t.V0(f),$async$Ef)
case 6:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ef,v)},
Eg(d){return this.ciN(d)},
ciN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Eg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Aj(),$async$Eg)
case 3:if(t.c==null){w=1
break}w=4
return A.b(C.c9_(d,t.a.c),$async$Eg)
case 4:s=f
if(!s.a){t.kG(y.m)
w=1
break}if(s.b){t.kG("This deposit code was already used.")
w=1
break}if(s.d){t.kG(y.y)
w=1
break}if(s.c){t.kG(y.j)
w=1
break}r=t.c
if(r==null){w=1
break}w=5
return A.b(t.b2P(r),$async$Eg)
case 5:q=f
if(q==null||B.a.i(q).length===0){w=1
break}r=t.a.c
p=B.a.i(q)
o=t.e
o===$&&A.c()
n=t.d
n===$&&A.c()
w=7
return A.b(C.UK(o,n.a,d,r,p),$async$Eg)
case 7:w=6
return A.b(t.V0(f),$async$Eg)
case 6:case 1:return A.h(u,v)}})
return A.i($async$Eg,v)},
On(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$On=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Cn()){t.kG("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).ce(A.ej(new C.dsF(),!0,null,x.N)),$async$On)
case 3:r=e
if(r==null||B.a.i(r).length===0){w=1
break}w=B.a.a0(B.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return A.b(t.zU(new C.dsG(t,r),"Applying deposit\u2026"),$async$On)
case 6:w=1
break
case 5:w=7
return A.b(t.zU(new C.dsH(t,r),"Loading\u2026"),$async$On)
case 7:case 1:return A.h(u,v)}})
return A.i($async$On,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.N(d).ax.a===B.H,m=n?B.j0:B.pe,l=n?B.c:B.M,k=n?B.aR:B.ak,j=n?B.bF:B.w.j(0.06),i=x.p
j=A.A(A.a([A.aK(!1,o,!0,A.p(B.A,A.W(B.eB,l,o,o,o,16),B.f,o,o,new A.o(j,o,o,o,o,o,B.a6),o,38,o,o,o,o,o,38),B.cL,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dsP(d),o,o,o,o,o,o,o)],i),B.m,o,B.e,B.j,0,o,o)
w=A.d("Backup & Restore",o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,B.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=A.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,B.cs,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=A.D(new C.a_v(D.bzr,"Download",E.a1N,u?o:p.gbL1(),o),1)
t=A.A(A.a([t,B.ew,A.D(new C.a_v(B.jb,"Show QR",D.daz,u?o:p.gc02(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r
s=A.D(new C.a_v(D.bzs,"Upload",B.a1e,u?o:p.gc00(),o),1)
s=A.A(A.a([s,B.ew,A.D(new C.a_v(B.iP,"Scan QR",D.cNs,u?o:p.gc01(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r?o:p.gc0_()
r=n?B.c.j(0.06):B.aU.j(0.08)
q=A.m(16)
q=A.a([A.cB(A.a([j,B.az,w,B.P,v,B.ko,t,B.az,s,B.az,new C.bpT(B.qP,"Enter Code",B.a0z,u,o),B.ko,A.p(o,A.A(A.a([A.W(B.h4,B.aU,o,o,o,18),B.aw,A.D(A.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.F,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(r,o,o,q,o,o,B.n),o,o,o,o,B.j6,o,o,o)],i),o,Ac.LD,o,o,B.ah,!1)],i)
if(p.r){j=n?B.i3:B.c
w=p.w
if(w==null)w="Working\u2026"
q.push(A.ao(0,A.aF(!1,B.a1,!0,o,new A.C(B.AE,A.A(A.a([I.aM5,B.bf,A.D(A.d(w,o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.m,o,B.e,B.j,0,o,o),o),B.f,j,8,o,o,o,o,o,B.af),o,o,0,0,o,o))}return A.cb(o,m,A.bm(!1,new A.an(B.W,o,B.aa,B.q,q,o),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)}}
C.a_v.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ad(0,B.G,B.d.gam(s).j(0.35),B.dn,16)],x.V),p=B.c.j(0.22)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(v,A.v(A.a([A.p(v,A.W(w.c,B.c,v,v,v,30),B.f,v,v,new A.o(p,v,v,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.ac,A.d(w.d,v,v,v,v,v,v,B.ro,v,v,v)],x.p),B.m,v,B.ba,B.j,0,B.p),B.f,v,v,new A.o(v,v,v,r,q,new A.a7(B.ax,B.aD,B.x,s,v,v),B.n),v,140,v,v,B.bU,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.af)}}
C.bpT.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ad(0,B.G,B.d.gam(s).j(0.35),B.dn,16)],x.V),p=B.c.j(0.22)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(v,A.A(A.a([A.p(v,A.W(w.c,B.c,v,v,v,24),B.f,v,v,new A.o(p,v,v,v,v,v,B.a6),v,44,v,v,v,v,v,44),B.ew,A.d(w.d,v,v,v,v,v,v,B.ro,v,v,v)],x.p),B.m,v,B.ba,B.j,0,v,v),B.f,v,v,new A.o(v,v,v,r,q,new A.a7(B.ax,B.aD,B.x,s,v,v),B.n),v,v,v,v,D.bqb,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.af)}}
C.Z9.prototype={
T(){return new C.bh6()}}
C.bh6.prototype={
gauG(){var w=this.e
return w===$?this.e=this.a.d:w},
a_(){var w=this
w.a1()
w.Q1()
w.f=A.dC(B.nC,new C.dsT(w))},
q(){var w=this.f
if(w!=null)w.a9(0)
this.a2()},
Q1(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Q1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return A.b(A.uq(q.e,q.f),$async$Q1)
case 3:q=e.a
s=A.bWy(q[3],q[1],t.a.e,q[4])
w=4
return A.b(A.N_(t.a.e,A.Jh(s.eJ(),null,"  ")),$async$Q1)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.m(new C.dsQ(t,r))
case 1:return A.h(u,v)}})
return A.i($async$Q1,v)},
B(d){var w=this,v=null,u=A.N(d).ax.a===B.H,t=u?B.j0:B.pe,s=u?B.i3:B.c,r=u?B.c:B.bh,q=A.eD(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,B.aP1,v,v,v,1,v,!0),p=A.m(24),o=A.I(B.aU.j(0.35),B.r,1),n=w.d,m=A.pz(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,B.c),l=A.d("Code: "+w.gauG(),v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=A.m(20),j=B.aU.j(0.12),i=A.m(20),h=x.p
i=A.aK(!1,k,!0,A.p(v,A.A(A.a([A.W(B.fJ,B.aU,v,v,v,14),B.bp,A.d("Copy code",v,v,v,v,v,v,A.l(v,v,B.aU,v,v,v,v,v,v,v,v,12,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),B.m,v,B.e,B.Q,0,v,v),B.f,v,v,new A.o(j,v,v,i,v,v,B.n),v,v,v,v,B.m9,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dsR(w,d),v,v,v,v,v,v,v)
return A.cb(q,t,new A.C(B.a9,A.v(A.a([A.D(A.p(v,A.v(A.a([B.P,m,B.bv,l,B.P,i,B.az,A.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,A.l(v,v,u?B.aR:B.ak,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v)],h),B.m,v,B.ba,B.j,0,B.p),B.f,v,v,new A.o(s,v,o,p,v,v,B.n),v,v,v,v,B.a9,v,v,1/0),1),B.aO,new A.a6(1/0,v,A.bJ(B.zd,new C.dsS(d),A.bk(B.aU,v,v,v,v,B.fL,v,v,v,v,v,v)),v)],h),B.m,v,B.e,B.j,0,B.p),v),v,!1,!1,v,v)}}
C.Za.prototype={
T(){return new C.bh7(A.yM(B.x_,B.nm,B.tK))}}
C.bh7.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.cb(A.eD(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fjE,w,w,w,1,w,!0),B.w,A.yL(this.d,B.bQ,new C.dsU(this,d)),w,!1,!1,w,w)}}
C.adi.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.N(a0).ax.a===B.H,k=l?B.i3:B.c,j=l?B.c:B.M,i=l?B.aR:B.ak,h=l?B.b5:B.e2,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=A.m(26)
w=A.I(B.aU.j(0.35),B.r,1)
v=A.a([new A.ad(0,B.G,B.aU.j(0.16),B.jW,36)],x.V)
u=A.p(m,D.bFs,B.f,m,m,new A.o(m,m,m,A.m(18),B.a1M,D.bPo,B.n),m,58,m,m,m,m,m,58)
t=A.d("Restore local backup?",m,m,m,m,m,m,A.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,B.u,m,m,!0,m,-0.3,m,m,m,m,m,m),B.L,m,m)
s=A.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,A.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),B.L,m,m)
r=l?B.j0:B.pe
q=A.m(18)
p=A.I(B.aU.j(0.22),B.r,1)
o=x.p
g=A.a([new C.Pa("Account",B.a.i(this.d),i,j,m),B.S,new C.Pa("Balance","$"+A.dz(g.d),i,j,m)],o)
if(d!=null&&B.a.i(d).length!==0)B.d.v(g,A.a([B.S,new C.Pa("Investment",d,i,j,m)],o))
g.push(B.S)
g.push(new C.Pa("Saved on",""+A.bG(f)+"/"+A.bQ(f)+"/"+A.bx(f),i,j,m))
g.push(B.S)
g.push(new C.Pa("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=A.p(m,A.v(g,B.F,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bU,m,m,1/0)
r=B.aJ.j(l?0.14:0.12)
q=A.m(14)
p=A.I(B.aJ.j(0.35),B.r,1)
n=A.W(B.xK,l?B.aM:B.dj,m,m,m,16)
return A.eE(m,B.K,new A.cU(B.Ur,A.bY(new A.C(B.xh,A.v(A.a([u,B.aO,t,B.P,s,B.bv,g,B.az,A.p(m,A.A(A.a([n,B.ab,A.D(A.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,A.l(m,m,l?B.bJ:B.ip,m,m,m,m,m,m,m,m,11.5,m,m,B.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),B.F,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.eh,m,m,1/0),B.d5,A.A(A.a([A.D(A.dT(B.nf,new C.ePh(a0),A.de(m,m,m,m,m,m,m,m,m,j,m,m,B.cf,m,new A.b7(A.m(14),B.Y),new A.az(h,1,B.r,-1),m,m,m,m)),1),B.aw,A.D(A.bJ(D.f3d,new C.ePi(a0),A.bk(B.aU,m,m,m,m,m,B.cf,m,new A.b7(A.m(14),B.Y),m,m,m)),2)],o),B.m,m,B.e,B.j,0,m,m)],o),B.m,m,B.e,B.Q,0,B.p),m),new A.o(k,m,w,e,v,m,B.n),B.bd),m),m,m,m,B.eA,B.d_,m,m,m)}}
C.Pa.prototype={
B(d){var w=this,v=null
return A.A(A.a([new A.a6(92,v,A.d(w.c,v,v,v,v,v,v,A.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),A.D(A.d(w.d,v,v,v,v,v,v,A.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,B.I,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.F,v,B.e,B.j,0,v,v)}}
C.Yh.prototype={
T(){return new C.ay6(new A.ar(B.as,$.aw()),A.kg(!0,null,!0,!0,null,null,!1))}}
C.ay6.prototype={
a_(){this.a1()
$.aT.x1$.push(new C.d1T(this))},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.e.q()
this.a2()},
c04(){var w,v=this.c
v.toString
w=B.a.i(this.d.a.a)
A.a5(v,!1).N(w)
return null},
B(d){var w=this,v=null,u=A.N(d).ax.a===B.H,t=u?B.i3:B.c,s=u?B.c:B.M,r=u?B.aR:B.ak,q=u?B.j0:B.pe,p=u?B.b5:B.e2,o=A.m(24),n=A.I(B.aU.j(0.35),B.r,1),m=A.a([new A.ad(0,B.G,B.aU.j(0.18),B.fK,32)],x.V),l=A.p(v,Ab.alT,B.f,v,v,new A.o(v,v,v,A.m(18),B.a1M,D.bS5,B.n),v,56,v,v,v,v,v,56),k=A.d("Enter restore code",v,v,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,B.u,v,v,!0,v,-0.3,v,v,v,v,v,v),B.L,v,v),j=A.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),B.L,v,v),i=A.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,B.I,v,v,!0,v,8,v,v,v,v,v,v),h=A.a([new A.u0(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bpn(new C.d1Q())],x.G),g=A.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,B.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return A.eE(v,B.K,new A.cU(A4.Jy,A.bY(new A.C(B.xh,A.v(A.a([l,B.aO,k,B.P,j,B.e0,A.aL(!1,B.T,!1,v,!0,B.q,v,A.aM(),w.d,v,v,v,v,v,2,A.br(v,v,v,B.EP,v,v,"",v,!0,new A.b4(4,A.m(16),new A.az(p,1,B.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new A.b4(4,A.m(16),D.aVx),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!1,v,!1,w.e,B.ai,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.d1R(w),v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,i,!0,B.L,v,B.lQ,v,v,v,v),B.e0,A.A(A.a([A.D(A.dT(B.nf,new C.d1S(d),A.de(v,v,v,v,v,v,v,v,v,s,v,v,B.cf,v,new A.b7(A.m(14),B.Y),new A.az(p,1,B.r,-1),v,v,v,v)),1),B.aw,A.D(A.bJ(D.f6K,w.gc03(),A.bk(B.aU,v,v,v,v,v,B.cf,v,new A.b7(A.m(14),B.Y),v,v,v)),2)],f),B.m,v,B.e,B.j,0,v,v)],f),B.m,v,B.e,B.Q,0,B.p),v),new A.o(t,v,n,o,m,v,B.n),B.bd),v),v,v,v,B.LF,B.d_,v,v,v)}}
C.amG.prototype={
T(){return new C.bhd(B.cI)},
hq(d){return this.x.$1(d)},
bp(){return this.y.$0()}}
C.bhd.prototype={
a_(){var w,v=this
v.a1()
w=v.a
w.toString
$.t4=$.t4+1
v.r=B.o.O(B.o.D(C.fte(w.e,w.d.y2),1,600))
w=v.a
if(!J.lj(w.d.y2,w.e))v.r=C.hTX(v.a.e)
v.w=A.dC(B.hf,new C.dze(v))},
q(){var w=this.w
if(w!=null)w.a9(0)
this.ccW()
C.aYu()
this.a2()},
ccW(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:B.k.D(r.e/w,0,1)
if(v<=0)return
u=A.nN(B.k.aa(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=B.o.u(1000*Date.now())
s=r.a
w.hq(new A.d1(t,s.c.a,u,B.fC,B.fb,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,B.ck,new A.S(Date.now(),0,!1)))
r.a.bp()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.un(u,q,"Left early \xb7 +$"+B.k.aa(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
Jn(d,e){return this.coH(d,e)},
b2t(d){return this.Jn(!1,d)},
coG(d){return this.Jn(d,"")},
coH(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
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
return A.b(C.bBv(s,C.bB8(),C.fUi(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$Jn)
case 5:w=1
break
case 4:n=A.nN(B.k.aa(t.a.w*1.46*r,2))
m=r>=1
t.m(new C.dz5(t,n,r))
s=B.o.u(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new A.d1(s,p,n,B.fC,B.fb,q,null,null,B.ck,new A.S(Date.now(),0,!1))
A.ag0(l,!0)
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
return A.b(C.bBv(s,C.bB8(),C.fUi(),""+t.e+"/"+t.f,k,q,!0),$async$Jn)
case 6:w=7
return A.b(C.afT(t.a.f,k),$async$Jn)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Jn,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.r
m===$&&A.c()
w=B.o.an(m,60)
v=B.a.aT(B.o.u(B.o.F(m,60)),2,"0")
u=A.aH(n,n,n,n,B.alW,n,n,n,new C.dz8(d),n,n,n,n,n,n)
t=o.a
s=x.p
t=A.D(A.v(A.a([A.d(t.f,n,1,B.a2,n,n,n,B.kT,n,n,n),A.d("Win $"+B.k.aa(t.w*1.46,2)+" \xb7 stake $"+B.k.aa(o.a.w,2),n,n,n,n,n,n,D.eTI,n,n,n)],s),B.F,n,B.e,B.j,0,B.p),1)
r=o.a.c.a
m=m<=10?B.aC:B.c.j(0.1)
q=A.m(99)
q=A.A(A.a([u,t,new C.aoa(r,new C.dz9(o),n),B.bp,A.dg(n,A.A(A.a([D.bJT,B.d8,A.d(""+w+":"+v,n,n,n,n,n,n,B.kq,n,n,n)],s),B.m,n,B.e,B.j,0,n,n),n,n,B.bb,new A.o(m,n,n,q,n,n,B.n),B.a1,n,n,n,B.th,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
m=o.a
v=m.w
w=v*1.46
r=o.e/o.f
m=A.A(A.a([A.D(A.bv(A.m(99),A.me(B.bF,n,n,9,n,r,new A.mx(B.d.gL(m.r),x.dw)),B.aq),1),B.aw,A.d(""+o.e+"/"+o.f,n,n,n,n,n,n,D.f1s,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
t=A.m(22)
u=A.a([B.d.gL(o.a.r).j(0.35),F.adN],x.O)
p=o.x
return C.aNS(n,D.bfA,A.bm(!0,A.v(A.a([new A.C(D.bsg,q,n),new C.ME(w*r,w,v,n),new A.C(F.ag6,m,n),A.D(new A.C(B.Xh,A.bv(t,A.bY(A.e3(W.hdo(o.a.e,new W.yT(new C.dza(o),new C.dzb(o),new C.dzc(o),o.d)),p,n),new A.o(n,n,n,n,n,new A.a7(B.b1,B.b6,B.x,u,n,n),B.n),B.bd),B.aq),n),1)],s),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0))}}
C.a5z.prototype={
B(d){var w=null,v=A.m(26),u=A.I(B.aJ.j(0.5),B.r,1),t=A.a([new A.ad(0,B.G,B.aJ.j(0.22),B.J,26)],x.V)
return A.eE(w,B.K,A.p(w,A.v(A.a([A.p(w,D.bDH,B.f,w,w,new A.o(B.aJ.j(0.16),w,A.I(B.aJ,B.r,2),w,w,w,B.a6),w,68,w,w,w,w,w,68),B.az,D.ffQ,B.P,A.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.P,A.d("The count starts again from zero next month.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.aO,new A.a6(1/0,w,A.bJ(D.f3V,new C.c3L(d),A.bk(B.aJ,w,w,w,B.w,B.fL,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,u,v,t,D.bQ0,B.n),w,w,w,w,D.bqC,w,w,w),w,w,w,B.agC,B.d_,w,w,w)}}
C.ama.prototype={
T(){return new C.bh4(null,null)},
gY(d){return this.e}}
C.bh4.prototype={
a_(){var w,v=this,u=null
v.a1()
w=v.d=A.bj(u,B.Ar,u,1,u,v)
w.d8()
w.dR$.J(0,new C.dsp(v))
w=A.bj(u,B.m4,u,1,u,v)
w.cG(0)
v.e=w
w=A.bj(u,B.L6,u,1,u,v)
w.cG(0)
v.f=w
w.d8()
w.dR$.J(0,new C.dsq(v))
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
w.brR()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.PJ[B.o.F(a9.r,5)]:b4
w=!b3&&b4==null?D.PJ[B.o.F(a9.w,5)]:b0
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
d.$flags&2&&A.ai(d)
d[11]=0.0025
b1.mw(o)
b1.ju(k,k,k,1)
b1.jK(l)
b1.fu(m)
d=b2*0.2
a1=A.m(d)
if(a9.a.c)a2=D.cSH
else{a2=A.aq(B.c,B.k4,q*0.45)
a2.toString
a2=A.a([a2,B.bN,B.cm],x.O)}a4=A.aq(B.bI,B.aE,q*0.65)
a4.toString
a4=A.I(a4,B.r,3)
e=A.a([new A.ad(0,B.G,B.w.j(0.3),D.dYs,16)],e)
if(!a9.a.c)e.push(new A.ad(p*3,B.G,B.aE.j(0.3+q*0.4),B.J,24+p*16))
e.push(new A.ad(0,B.G,B.c.j(0.9),B.Ra,0))
g=A.a([],g)
if(!a9.a.c)g.push(A.bZ(0,A.bY(b0,new A.o(b0,b0,b0,A.m(d),b0,new A.a7(new A.d8(-1+Math.cos(j)*0.8,-1),new A.d8(1,1),B.x,A.a([B.c.j(0),B.c.j(0.28+p*0.25),B.c.j(0)],x.O),b0,b0),B.n),B.bd),0,0,0))
g.push(A.ao(b0,A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,A.m(6),b0,new A.a7(B.a3,B.a7,B.x,A.a([B.c.j(0.95),B.c.j(0)],x.O),b0,b0),B.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=A.a([new A.cP(B.w.j(0.18),B.dA,5)],x.C)
if(!a9.a.c)d.push(new A.cP(B.aE.j(0.4+q*0.35),B.J,12+p*10))
g.push(A.av(A.v7(A.d(v,b0,b0,b0,b0,b0,b0,A.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,B.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),B.bb,B.jn,b3),b0,b0,b0))
f.push(A.dU(A.fr(B.A,A.p(b0,new A.an(B.W,b0,B.aa,B.q,g,b0),B.f,b0,b0,new A.o(b0,b0,a4,a1,e,new A.a7(B.ax,B.aD,B.x,a2,b0,b0),B.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new A.u(0,n)))
return new A.a6(h,h,new A.an(B.A,b0,B.aa,B.f,f,b0),b0)}}
C.aJs.prototype={
aQ(){this.aX()
this.aW()
this.dI()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdF())
w.b2$=null
w.a2()}}
C.ME.prototype={
B(d){var w=null,v=new C.c5K(),u=v.$3("STAKE","$"+B.k.aa(this.e,2),B.c),t=A.m(18),s=A.I(B.bs.j(0.7),B.r,1.4),r=A.a([new A.ad(0,B.G,B.aU.j(0.35),B.J,14)],x.V),q=x.p
return new A.C(B.Lp,A.A(A.a([u,A.p(w,A.v(A.a([D.few,A.mP(new C.c5J(),w,B.bb,B.mR,w,new A.bn(w,this.c,x.e7),x.gR)],q),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(w,w,s,t,r,D.amI,B.n),w,w,w,w,B.LA,w,w,w),v.$3("FULL WIN","$"+B.k.aa(this.d,2),B.bJ)],q),B.m,w,B.e,B.j,0,w,w),w)}}
C.aoa.prototype={
B(d){var w=null,v=A.m(99),u=A.I(B.jk.j(0.7),B.r,1)
return A.p(w,A.A(A.a([D.bC9,B.d8,C.ap0(this.d,B.nd,this.c)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(w,w,u,v,w,D.amI,B.n),w,w,w,w,B.LL,w,w,w)},
gdX(){return this.c}}
C.MM.prototype={
T(){return new C.bhK(null,null)}}
C.bhK.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.m4,null,1,null,v)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bsr()},
aLL(d,e){var w=this.a.d,v=A.T(w).k("J<1,n>"),u=A.B(new A.J(w,C.hZT(),v),v.k("aj.E"))
w=this.d
w===$&&A.c()
return A.c6(w,new C.dS0(this,u),null)},
B(d){var w=null
if(this.a.e)return A.cb(w,D.add,A.bm(!0,this.aLL(0,d),!0,!1,B.ag,!0,!0),w,!1,!1,w,w)
return this.aLL(0,d)},
avq(d,e,f){var w=null,v=f.j(0.16),u=A.m(10)
return A.A(A.a([A.p(w,A.W(d,f,w,w,w,17),B.f,w,w,new A.o(v,w,w,u,w,w,B.n),w,32,w,w,w,w,w,32),B.aw,A.D(A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.aK1.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.ac8.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=A.aI(d,B.e7,o).w.r.d,m=this.c,l=J.cE(m),k=l.eI(m,new C.dS3()).gM(0),j=new A.e6(l.dt(m,new C.dS4(),x.cD),x.bG).cH(0,0,new C.dS5())
o=A.aI(d,B.bS,o).w
w=x.p
v=A.a([B.S,A.p(p,p,B.f,p,p,new A.o(B.b5,p,p,A.m(2),p,p,B.n),p,4,p,p,p,p,p,42),new A.C(B.agk,A.A(A.a([A.p(p,D.bMg,B.f,p,p,new A.o(p,p,p,A.m(14),A.a([new A.ad(0,B.G,B.ff.j(0.45),B.J,14)],x.V),D.amC,B.n),p,44,p,p,p,p,p,44),B.bf,D.bup,A.aH(p,p,p,p,B.ld,p,p,p,new C.dS6(d),p,p,p,p,p,p)],w),B.m,p,B.e,B.j,0,p,p),p)],w)
if(l.gcl(m)){u=C.fPj("GAMES",""+l.gM(m),B.ez)
t=C.fPj("WON",""+k,B.jk)
s=j>=0
r=s?"+":"-"
q=C.bxV(j)
s=s?B.jk:B.f9
v.push(new A.C(D.boP,A.A(A.a([u,B.ab,t,B.ab,C.fPj("NET",r+q,s)],w),B.m,p,B.e,B.j,0,p,p),p))}if(l.gal(m))v.push(new A.C(new A.Q(24,36,24,24+n),A.v(A.a([A.W(D.byb,B.c.j(0.35),p,p,p,52),B.ac,A.d("No game receipts yet",p,p,p,p,p,p,A.l(p,p,B.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.ao,A.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,A.l(p,p,B.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),B.L,p,p)],w),B.m,p,B.e,B.j,0,B.p),p))
else v.push(new A.dm(1,B.ci,A.hE(p,new C.dS7(this),l.gM(m),new A.Q(14,2,14,16+n),p,B.ah,new C.dS8(),!1),p))
return A.p(p,A.v(v,B.m,p,B.e,B.Q,0,B.p),B.f,p,new A.aY(0,1/0,0,o.a.b*0.88),D.aYn,p,p,p,p,p,p,p,p)}}
C.ac7.prototype={
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
r=w}q=h.gbdK()
w=new C.dS2()
s=A.m(14)
p=A.a([r.j(0.13),D.beD],x.O)
o=A.I(r.j(0.4),B.r,1)
n=A.W(g?B.md:B.cx,r,i,i,i,16)
m=A.D(A.d(h.b,i,1,B.a2,i,i,i,B.rn,i,i,i),1)
l=r.j(0.2)
k=A.m(99)
k=A.p(i,A.d(t,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,B.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),B.f,i,i,new A.o(l,i,i,k,i,i,B.n),i,i,i,i,D.bsb,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bxV(q)}else{l=g?"+":"-"
l+=C.bxV(h.d)}j=x.p
l=A.A(A.a([n,B.bp,m,k,B.bp,A.d(l,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.m,i,B.e,B.j,0,i,i)
k=C.dS1("STAKE",w.$1(h.w),B.c)
w=A.A(A.a([k,B.d8,C.dS1("PAID",C.bxV(g?h.d:0),r),B.d8,C.dS1("BEFORE",w.$1(h.x),B.ez),B.d8,C.dS1("AFTER",w.$1(h.y),B.dy)],j),B.m,i,B.e,B.j,0,i,i)
n=C.hVu(h.f)
h=B.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return A.p(i,A.v(A.a([l,B.ao,w,B.at,A.d(n+h,i,1,B.a2,i,i,i,A.l(i,i,B.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.aj,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(i,i,o,s,i,new A.a7(B.ax,B.aD,B.x,p,i,i),B.n),i,i,i,i,B.l5,i,i,i)}}
C.ayK.prototype={
T(){return new C.bdq(B.cI,null,null)}}
C.bdq.prototype={
a_(){var w,v,u,t=this
t.a1()
w=A.bj(null,B.m5,null,1,null,t)
w.cG(0)
t.d=w
v=J.e0(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.acx(40+w.aj()*260,-20+w.aj()*40,1.5+w.aj()*3,w.aj()*3.141592653589793,0.7+w.aj()*0.3,12+w.aj()*16,[Z.a2O,B.r0,B.cR,B.c][w.aB(4)],[B.hY,B.l7,B.dV,B.Fc][w.aB(4)])
t.f=v},
q(){var w=this.d
w===$&&A.c()
w.q()
this.brl()},
B(d){var w=null,v=this.d
v===$&&A.c()
return A.av(A.aF(!1,B.a1,!0,w,A.c6(v,new C.d8U(this,d),w),B.f,B.K,0,w,w,w,w,w,B.af),w,w,w)}}
C.acx.prototype={
gY(d){return this.f}}
C.aIY.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.aZi.prototype={
B(d){return new A.uc(new C.c80(this),null,new A.h3(A.a([$.yf(),$.a1K()],x.U)),null)},
gdX(){return this.c}}
C.Mf.prototype={
c6Y(){if(this.c!=null)this.m(new C.bXS())}}
C.HW.prototype={}
C.anD.prototype={
T(){return new C.aBA(B.cI,new A.ar(B.as,$.aw()))},
cAL(){return this.d.$0()},
cM9(){return this.f.$0()},
cLY(d,e){return this.r.$2(d,e)},
cML(d,e,f){return this.w.$3$bonus(d,e,f)},
gdX(){return this.c}}
C.aBA.prototype={
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.a2()},
ari(){var w=A.d3(B.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
Al(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Al=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.ari()
if(s<2){t.avr("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cAL()<s){t.avr("Insufficient balance.")
w=1
break}if(!t.a.cLY(s,"Dice Roll bet")){t.avr("Could not place bet.")
w=1
break}t.a.toString
t.m(new C.dL3(t))}w=3
return A.b(C.c4V(t.a.e),$async$Al)
case 3:r=t.a
q=C.hXz(r.e,r.c,t.d)
t.a.cM9()
A.aXS(t.a.e)
t.m(new C.dL4(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return A.b(A.bN(new A.b9(1000*(40+p*6)),null,r),$async$Al)
case 7:if(t.c==null){w=1
break}new C.dL5(t).$0()
t.c.e7()
case 5:++p
w=4
break
case 6:w=8
return A.b(A.bN(B.jo,null,r),$async$Al)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.fT6(q)
t.m(new C.dL6(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cML(m,"Dice Roll "+n,o)
t.m(new C.dL7(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+B.k.aa(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(m,2)+" added to your balance"
w=12
return A.b(C.bBv(r,C.bB8(),new C.dL8(t),n,k,"YOU WIN!",!0),$async$Al)
case 12:w=13
return A.b(C.afT("Dice Roll",l?"+$"+B.k.aa(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(m,2)+" added to your balance"),$async$Al)
case 13:w=10
break
case 11:w=14
return A.b(C.bBv(r,C.bB8(),new C.dL9(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$Al)
case 14:C.un(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return A.h(u,v)}})
return A.i($async$Al,v)},
avr(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.ari(),d=x.w,a0=A.aI(a2,B.e7,d).w,a1=Math.min(A.aI(a2,B.bS,d).w.a.a*0.44,200)
d=A.hc(R.al4,D.flr,new C.dLc(a2),f)
w=A.m(20)
v=g.a
u=v.c
t=x.p
w=A.A(A.a([d,B.b3,A.p(f,A.A(A.a([B.al1,B.bp,C.ap0(v.d,B.jB,u)],t),B.m,f,B.e,B.Q,0,f,f),B.f,f,f,new A.o(B.cR,f,f,w,f,f,B.n),f,f,f,f,B.lz,f,f,f)],t),B.m,f,B.e,B.j,0,f,f)
u=g.z
v=A.Z(140,D.Wp.l()>>>16&255,D.Wp.l()>>>8&255,D.Wp.l()&255)
d=A.m(18)
s=A.I(A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
r=g.x
d=A.D(A.p(f,A.av(new C.ama(r,r?g.w:g.r,a1,f),f,f,f),B.f,f,f,new A.o(v,f,s,d,f,f,B.n),f,f,f,f,f,f,f,1/0),1)
v=A.d("Roll lands on one of:",f,f,f,f,f,f,A.l(f,f,B.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,B.a4,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=A.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.PJ[q]
o=C.fT6(p)
n=p>0?B.bn:B.aC
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new A.aV(10,10)
i=m?B.c:n.j(0.7)
h=new A.az(i,m?2.5:1.2,B.r,-1)
n=m?A.a([new A.ad(1,B.G,n.j(0.65),B.J,14)],r):B.Pu
m=m?18:15
s.push(new A.bE(1,B.bi,new A.C(B.jq,A.p(B.A,new A.x(o,f,new A.F(!0,B.c,f,f,f,f,m,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f),B.f,f,f,new A.o(k,f,new A.bP(h,h,h,h),new A.bp(j,j,j,j),n,f,B.n),f,l,f,f,f,f,f,f),f),f))}d=A.a([d,B.ac,v,B.ao,A.A(s,B.m,f,B.e,B.j,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.fT6(v)
s=g.r
s.toString
d.push(new A.C(B.kc,A.d("Landed on "+v,f,f,f,f,f,f,A.l(f,f,s>0?B.bc:B.cr,f,f,f,f,f,f,f,f,20,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(B.S)
d.push(new A.bI(B.a3,f,f,A.d("Bet Amount",f,f,f,f,f,f,A.l(f,f,A.Z(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,B.I,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(B.ao)
v=x.bL
v=A.B(new A.J(A.a([2,5,10,25],x.n),new C.dLd(g),v),v.k("aj.E"))
s=g.y
r=A.Z(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v.push(A.D(new A.C(B.XX,A.aL(f,B.T,!1,f,!0,B.q,f,A.aM(),g.e,f,f,f,f,f,2,A.br(f,new A.b4(4,A.m(10),B.Y),f,B.jp,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,B.lk,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,!s,!1,f,B.ai,f,f,f,f,f,B.dM,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,B.a9,f,f,f,f,f,f,f,f,f,f,f,B.hm,!0,B.L,f,B.am,f,f,f,f),f),1))
d.push(A.A(v,B.m,f,B.e,B.j,0,f,f))
d.push(B.P)
d.push(new A.bI(B.a7,f,f,A.d("Perfect Score Profit: +$"+B.k.aa(g.ari()*0.46,2),f,f,f,f,f,f,D.eVJ,f,f,f),f))
d.push(B.S)
d=A.D(new A.C(B.hH,A.v(d,B.aj,f,B.e,B.j,0,B.p),f),1)
v=g.x?f:g.gcln()
s=A.fm(f,f,B.aE,f,f,f,f,f,f,B.c,f,f,f,f,new A.b7(A.m(14),B.Y),f,f,f,f,f)
return C.aNS(f,D.Wx,A.bm(!0,A.v(A.a([new A.C(D.bsC,w,f),new C.ME(u,e*1.46,e,f),A.D(A.v(A.a([d,new A.C(new A.Q(14,4,14,8+a0.r.d),new A.a6(1/0,52,A.i9(A.d("\ud83c\udfb2 ROLL ($"+B.k.aa(e,2)+")",f,f,f,f,f,f,B.kU,f,f,f),v,s),f),f)],t),B.m,f,B.e,B.j,0,B.p),1)],t),B.m,f,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0))}}
C.aog.prototype={
T(){return new C.aBR(B.kk,new A.ar(B.as,$.aw()))},
cLQ(d){return this.e.$1(d)}}
C.aBR.prototype={
gaq5(){var w,v=this.r
if(v===$){w=B.o.u(1e4+B.cI.aB(89999))
this.r!==$&&A.bM()
this.r=w
v=w}return v},
gPu(){var w=this.d,v=this.a
return w===B.kk?B.a.i(v.f.a):B.a.i(v.f.b)},
ga7N(){var w=this.gPu(),v=A.af("^\\$+",!0,!1,!1,!1),u=B.a.i(A.aJ(w,v,""))
return u.length===0?"":"$"+u},
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.a2()},
Ik(d,e){return this.bF5(d,e)},
bF5(d,e){var w=0,v=A.j(x.H),u=this,t
var $async$Ik=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.fI(new A.fA(d)),$async$Ik)
case 2:A.eP()
t=u.c
if(t!=null)t.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$Ik,v)},
Pp(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pp=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gPu().length===0){r.c.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}A.jd()
o=B.k.aa(r.a.d,2)
q=r.d===B.kk?A.cv("https://cash.app/"+r.ga7N()+"/"+o,0,null):A.cv("bitcoin:"+r.gPu(),0,null)
t=4
w=7
return A.b(A.iO(q,B.fj,null),$async$Pp)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===B.kk?r.ga7N():r.gPu()
w=10
return A.b(r.Ik(n,r.d===B.kk?"Cash App tag":"Bitcoin address"),$async$Pp)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===B.kk?r.ga7N():r.gPu()
w=11
return A.b(r.Ik(n,r.d===B.kk?"Cash App tag":"Bitcoin address"),$async$Pp)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Pp,v)},
a_h(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_h=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hV().bes(B.eG),$async$a_h)
case 3:r=e
if(r==null){w=1
break}w=4
return A.b(r.fd(),$async$a_h)
case 4:s=e
t.m(new C.dSq(t,B.a.c9(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return A.h(u,v)}})
return A.i($async$a_h,v)},
c3p(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===B.kk?C.heF(s.a):B.a.i(s.a)
if(r.length===0){t=v.d===B.kk?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.I(x.q).f.R(A.b2(u,u,u,u,u,B.q,u,A.d(t,u,u,u,u,u,u,u,u,u,u),u,B.U,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.I(x.q).f.R(A.b2(u,u,u,u,u,B.q,u,A.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,B.U,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new A.S(Date.now(),0,!1).u(0)
w=v.a
t.cLQ(new A.d1(s,w.c.a,w.d,B.fq,v.d,r,v.f,v.gaq5(),B.ds,new A.S(Date.now(),0,!1)))
w=v.c
w.toString
A.iK(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.eD(o,o,o,!0,!0,B.zW,o,1,!0,o,0,!1,o,!1,B.c,o,A.aH(o,o,o,o,B.FW,o,o,o,new C.dSr(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.f5t,o,o,o,1,o,!0),m=A.m(26),l=A.I(D.eH.j(0.25),B.r,1),k=x.V,j=A.a([new A.ad(0,B.G,B.aZ.j(0.25),B.eT,24)],k),i=x.p
j=A.p(o,A.v(A.a([A.d("YOU'RE ADDING",o,o,o,o,o,o,A.l(o,o,B.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,B.I,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),B.ao,A.f1(B.A,A.d("$"+A.dz(p.a.d),o,o,o,o,o,o,D.eQ5,o,o,o),B.f,B.dt),B.ao,A.d("to your Growth Income wallet",o,o,o,o,o,o,A.l(o,o,D.eH.j(0.85),o,o,o,o,o,o,o,o,12,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,l,m,j,D.bST,B.n),o,o,o,o,D.bqf,o,o,o)
m=p.bZR()
l=p.az2(1,"Send the money to NGMY Pay",p.c3n())
w=p.az2(2,"Put this code in the payment note",p.bDG())
v=p.d===B.kk
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=A.l(o,o,B.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.az2(3,u,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.e,o,o,o,o,o,2,A.br(o,o,o,o,o,o,o,o,!0,new A.b4(4,A.m(18),new A.az(B.c.j(0.08),1,B.r,-1)),o,o,o,o,o,B.t1,!0,o,o,o,o,new A.b4(4,A.m(18),D.aVs),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.eRw,t,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,B.ro,!0,B.a5,o,B.am,o,o,o,o))
r=p.f!=null
v=r?8:22
u=A.m(20)
s=r?D.eH:B.c
s=A.I(s.j(r?0.5:0.12),B.r,1.4)
q=r?A.v(A.a([A.bv(A.m(14),new A.cU(D.aWT,new A.E3(p.f,o),o),B.aq),B.P,D.eCb,B.at],i),B.m,o,B.e,B.j,0,B.p):A.v(A.a([A.p(o,D.bLr,B.f,o,o,new A.o(D.eH.j(0.12),o,o,o,o,o,B.a6),o,54,o,o,o,o,o,54),B.S,D.fav,B.d0,A.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p)
v=p.b3T(4,"Screenshot of your payment",A.aE(o,A.p(o,q,B.f,o,o,new A.o(B.t1,o,s,u,o,o,B.n),o,o,o,o,new A.Q(v,v,v,v),o,o,o),B.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gceL(),o,o,o,o,o,o,!1,B.a8),!0)
u=A.d(p.a.r,o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,1.4,!0,o,o,o,o,o,o,o,o),B.L,o,o)
s=A.m(18)
k=A.a([new A.ad(0,B.G,B.aZ.j(0.45),B.dn,18)],k)
return A.cb(n,B.zW,A.av(new A.cU(B.a9r,A.cB(A.a([j,B.bv,m,B.bv,l,w,t,v,B.ao,u,B.aO,new A.a6(o,56,A.bY(A.lo(D.bK7,D.fkI,p.gc3o(),A.fm(o,o,B.K,o,o,o,o,o,o,B.c,o,o,o,B.K,new A.b7(A.m(18),B.Y),o,o,o,o,o)),new A.o(o,o,o,s,k,D.bRw,B.n),B.bd),o)],i),o,D.bpK,o,o,B.ah,!1),o),o,o,o),o,!1,!1,o,o)},
bZR(){var w=null,v=new C.dSm(this),u=A.m(18),t=A.I(B.c.j(0.06),B.r,1)
return A.p(w,A.A(A.a([v.$3(B.kk,B.hW,"Cash App"),B.ea,v.$3(B.a4e,D.akL,"Bitcoin")],x.p),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(B.t1,w,t,u,w,w,B.n),w,w,w,w,B.lB,w,w,w)},
b3T(d,e,f,g){var w,v=null,u=x.p,t=A.a([A.p(B.A,A.d(""+d,v,v,v,v,v,v,D.eWt,v,v,v),B.f,v,v,D.aXC,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(A.D(A.p(v,v,B.f,D.eH.j(0.18),v,v,v,v,v,B.uV,v,v,v,2),1))
t=A.v(t,B.m,v,B.e,B.j,0,B.p)
w=g?12:20
return new A.Du(A.A(A.a([new A.a6(34,v,t,v),B.aw,A.D(new A.C(new A.Q(0,0,0,w),A.v(A.a([new A.C(B.Xf,A.d(e,v,v,v,v,v,v,A5.SB,v,v,v),v),f],u),B.aj,v,B.e,B.j,0,B.p),v),1)],u),B.aj,v,B.e,B.j,0,v,v),v)},
az2(d,e,f){return this.b3T(d,e,f,!1)},
c3n(){var w,v,u,t,s=this,r=null,q=s.d===B.kk?s.ga7N():s.gPu(),p=A.m(20),o=A.m(20),n=s.d===B.kk,m=n?D.bQs:D.bSf,l=A.a([new A.ad(0,B.G,(n?D.ads:D.Vq).j(0.35),B.cy,16)],x.V),k=A.m(12)
n=s.d===B.kk
w=n?B.hW:D.akL
k=A.p(r,A.W(w,n?D.ads:D.Vq,r,r,r,30),B.f,r,r,new A.o(B.c,r,r,k,r,r,B.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=A.d(n,r,r,r,r,r,r,A.l(r,r,B.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===B.kk
t=u?22:13
v=A.d(v,r,1,B.a2,r,r,r,A.l(r,r,B.c,r,r,r,r,r,r,r,r,t,r,r,B.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=A.D(A.v(A.a([n,B.bz,v,B.at,A.A(A.a([D.bGZ,B.d8,A.d(s.d===B.kk?"Tap to pay $"+A.dz(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,B.q1,r,r,r)],u),B.m,r,B.e,B.j,0,r,r)],u),B.F,r,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,r,A.aK(!1,p,!0,A.ex(A.A(A.a([k,B.bf,v,A.aH(r,r,r,r,D.bG3,r,r,r,w?r:new C.dSp(s,q),r,r,r,r,"Copy",r)],u),B.m,r,B.e,B.j,0,r,r),r,new A.o(r,r,r,o,l,m,B.n),r,B.ag0,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gca4(),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af)},
bDG(){var w,v,u,t,s,r,q,p,o=null,n=A.m(20),m=A.I(B.b4.j(0.35),B.r,1),l=x.p,k=A.a([],l)
for(w=this.gaq5().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new A.aV(12,12)
q=A.a([B.b4.j(0.28),B.b4.j(0.08)],u)
p=new A.az(B.ez.j(0.4),1,B.r,-1)
k.push(A.p(B.A,new A.x(s,o,B.CS,o,o,o,o,o,o,o,o,o),B.f,o,o,new A.o(o,o,new A.bP(p,p,p,p),new A.bp(r,r,r,r),o,new A.a7(B.b1,B.b6,B.x,q,o,o),B.n),o,52,o,B.jq,o,o,o,42))}return A.p(o,A.v(A.a([A.A(k,B.m,o,B.ba,B.j,0,o,o),B.ac,A.A(A.a([A.D(A.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,A.l(o,o,B.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.ab,A.hc(B.a_F,D.fmw,new C.dSl(this),A.fu(o,o,o,o,o,o,o,o,o,o,o,B.ez,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),B.m,o,B.e,B.j,0,o,o)],l),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(B.t1,o,m,n,o,o,B.n),o,o,o,o,B.bB,o,o,o)}}
C.r4.prototype={
ad(){var w=this
return A.E(["id",w.a,"title",w.b,"start",w.c.ac(),"end",w.d.ac(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.r5.prototype={
ad(){var w=this
return A.E(["id",w.a,"when",w.b.ac(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gUA(){var w=this,v=A.a([],x.s),u=w.d
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
u=w.c
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
v.push(C.h_M(w.b))
u=w.e
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
return B.d.aH(v," \xb7 ")},
gkz(d){return this.c}}
C.lu.prototype={
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
w=J.b6(v.c,new C.c7_(),x.P)
w=A.B(w,w.$ti.k("aj.E"))
u.n(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"thumbnailPath",w)
u.n(0,"printable",v.e)
u.n(0,"sortOrder",v.f)
return u}}
C.i0.prototype={
ajp(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.i0(v,u,t,s,r,h==null?w.f:h)},
b9c(d){var w=null
return this.ajp(w,w,w,w,d,w)},
cEo(d,e,f){return this.ajp(d,e,null,null,null,f)},
b9b(d){var w=null
return this.ajp(w,w,w,d,w,w)},
cE3(d,e){var w=null
return this.ajp(w,w,d,w,e,w)},
ad(){var w=this,v=C.hJe(w.c),u=w.e,t=A.T(u).k("J<1,a4<n,@>>")
u=A.B(new A.J(u,new C.c6Y(),t),t.k("aj.E"))
return A.E(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.b74.prototype={}
C.Un.prototype={
T(){return new C.aC2(new A.ar(B.as,$.aw()),A.mp(0,null,null),A.a([],x.m))},
Ta(d){return this.d.$1(d)}}
C.aC2.prototype={
a_(){var w,v=this
v.a1()
w=J.b6(v.a.c,new C.dW5(),x.i)
w=A.B(w,w.$ti.k("aj.E"))
B.d.b1(w,new C.dW6())
v.d=w
v.It()},
q(){var w=this.w
w.S$=$.aw()
w.P$=0
this.x.q()
this.a2()},
acI(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$acI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.It()
u.m(new C.dW_(u))
t=u.a
t.toString
s=u.d
s===$&&A.c()
w=2
return A.b(t.Ta(s),$async$acI)
case 2:r=e
if(u.c!=null){u.m(new C.dW0(u))
t=u.c.I(x.q).f
s=A.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.R(A.b2(null,null,null,r?B.cZ:B.aC,null,B.q,null,s,null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$acI,v)},
a7_(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a7_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&A.c()
s=new C.i0(q,"New Category",B.Fv,4284773515,D.ave,p.length)
t.m(new C.dVJ(t,s))
t.It()
p=t.c
if(p==null){w=1
break}w=3
return A.b(A.c9(null,null,!0,null,new C.dVK(s),p,null,!0,!0,x.i),$async$a7_)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dVL(t,q,r))
case 1:return A.h(u,v)}})
return A.i($async$a7_,v)},
a0f(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a0f=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=B.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.m(new C.dVX(t,p))
q.bM(0,B.c3)
q=t.a.e
s=t.d
s===$&&A.c()
w=3
return A.b(C.c6V(p,q,s),$async$a0f)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dVY(t,r))
$.aT.x1$.push(new C.dVZ(t))
case 1:return A.h(u,v)}})
return A.i($async$a0f,v)},
a8Z(d){return this.bJC(d)},
bJC(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a8Z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&A.c()
t=r[d]
r=u.c
r.toString
w=2
return A.b(A.c9(null,null,!0,null,new C.dVR(t),r,null,!0,!0,x.i),$async$a8Z)
case 2:s=f
if(s!=null)u.m(new C.dVS(u,d,s))
return A.h(null,v)}})
return A.i($async$a8Z,v)},
bHu(d){this.m(new C.dVQ(this,d))
this.It()},
It(){var w,v,u=this.d
u===$&&A.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].b9c(v)},
c7t(d,e){var w={}
w.a=e
this.m(new C.dVW(w,this,d))},
XH(d){return this.bYM(d)},
bYM(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$XH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=A.ej(new C.dVV(u,d),!1,null,x.H)
w=2
return A.b(A.a5(s,!1).ce(t),$async$XH)
case 2:return A.h(null,v)}})
return A.i($async$XH,v)},
bzY(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?A.a([B.fl,B.bm],l):A.a([B.p3,B.et],l)
w=A.m(16)
v=A.I(m?B.d7.j(0.35):B.dy,B.r,1)
u=A.W(B.dV,m?B.dy:B.dS,n,n,n,n)
t=A.D(A.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.M,n,n,n,n,n,n,n,n,n,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.Z7:Aa.M7
r=x.p
s=A.a([A.aK(!1,n,!0,A.A(A.a([u,B.ab,t,A.W(s,m?B.bI:B.ak,n,n,n,n)],r),B.m,n,B.e,B.j,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dVN(o),n,n,n,n,n,n,n)],r)
if(o.r){u=A.a([B.S],r)
t=o.y
if(t.length!==0){q=(m?D.rN:B.c).j(0.65)
p=A.m(12)
u.push(A.p(n,A.k0(!0,n,o.x,new C.dVO(o,d),t.length,n,n,n,n,!1,!1),B.f,n,B.a9m,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.cj,n,n,n))}u.push(B.P)
t=o.w
q=A.l(n,n,m?B.aP:B.M,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=A.l(n,n,m?B.bI:B.ak,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?B.bm:B.aP
q=A.D(A.aL(n,B.T,!1,n,!0,B.q,n,A.aM(),t,n,n,n,n,n,2,A.br(n,new A.b4(4,A.m(14),B.Y),n,B.eP,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.dVP(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,q,!0,B.a5,n,B.am,n,n,n,n),1)
m=o.f?n:o.gclB()
p=A.bk(B.bj,n,n,n,n,n,B.j6,n,n,n,n,n)
u.push(A.A(A.a([q,new A.Ia(t,B.bj,n),B.d8,A.bJ(o.f?B.pX:D.akV,m,p)],r),B.dD,n,B.e,B.j,0,n,n))
B.d.v(s,u)}return A.dg(n,A.v(s,B.aj,n,B.e,B.j,0,B.p),n,n,B.bb,new A.o(n,n,v,w,n,new A.a7(B.a3,B.a7,B.x,l,n,n),B.n),B.ir,n,n,B.EM,B.bB,n,n,n)},
B(d){var w,v=this,u=null,t=A.N(d).ax.a===B.H,s=new C.b74(t),r=t?B.da:B.bN,q=t?B.da:u,p=t?B.aP:B.M,o=A.d("Help Topics Admin",u,u,u,u,u,u,A.l(u,u,t?B.aP:B.M,u,u,u,u,u,u,u,u,u,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gc3t()
if(n)n=B.S7
else n=A.W(B.xC,t?B.aP:B.M,u,u,u,u)
w=x.p
o=A.eD(A.a([A.hc(n,A.d("Save",u,u,u,u,u,u,A.l(u,u,t?B.aP:B.M,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=S.aSV(B.aI,u,O.UC,B.nM,D.fj5,v.gbwi())
q=v.bzY(s)
n=A.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,A.l(u,u,t?B.bI:B.ak,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&A.c()
return A.cb(o,r,A.v(A.a([q,new A.C(B.EM,n,u),A.D(H.h49(!1,new C.dW4(v,s),m.length,v.gc7s(),D.boB,u,!1),1)],w),B.aj,u,B.e,B.j,0,B.p),u,!1,!1,p,u)}}
C.OC.prototype={
T(){return new C.b8V()}}
C.b8V.prototype={
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
B(d){var w,v,u,t=this,s=null,r=A.N(d).ax.a===B.H,q=r?D.rN:B.c,p=A.d("Edit category",s,s,s,s,s,s,A.l(s,s,r?B.c:B.bh,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&A.c()
o=A.aL(s,B.T,!1,s,!0,B.q,s,A.aM(),o,s,s,s,s,s,2,D.bNa,B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,A.l(s,s,r?B.c:B.bh,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,B.a5,s,B.am,s,s,s,s)
w=x.aS
w=A.B(new A.J(D.bTf,new C.cIB(t),w),w.k("aj.E"))
w=A.c_(B.bD,w,B.bt,8,8)
v=x.gN
v=A.B(new A.J(D.cPY,new C.cIC(t),v),v.k("aj.E"))
u=x.p
v=A.cd(A.v(A.a([o,B.ac,w,B.ac,A.c_(B.bD,v,B.bt,0,8)],u),B.m,s,B.e,B.Q,0,B.p),B.q,s,B.y,s,s,s,s,B.ah)
return A.eh(A.a([A.bK(!1,B.dd,s,s,!0,s,s,new C.cID(d),s,s),A.bJ(B.oU,new C.cIE(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.ZX.prototype={
T(){return new C.aE0()},
oo(d){return this.d.$1(d)}}
C.aE0.prototype={
a_(){this.a1()
this.d=A.bl(this.a.c.e,!0,x.u)},
avt(){var w=this.a,v=w.c,u=this.d
u===$&&A.c()
return w.oo(v.b9b(u))},
a71(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a71=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&A.c()
w=2
return A.b(u.aYM(new C.ie("q_"+1000*s,"",D.cOz,null,!1,r.length)),$async$a71)
case 2:t=e
if(t!=null){u.m(new C.eKm(u,t))
u.avt()}return A.h(null,v)}})
return A.i($async$a71,v)},
aYM(d){var w,v=this.c
v.toString
w=A.ej(new C.eKn(d),!1,null,x.u)
return A.a5(v,!1).ce(w)},
B(d){var w=this,v=null,u=A.N(d).ax.a===B.H,t=u?B.da:B.bN,s=u?B.da:v,r=u?B.aP:B.M,q=w.a.c
s=A.eD(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,A.d(q.b+" \u2014 Questions",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.M,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=S.aSV(B.aI,v,O.UC,B.nM,D.foB,w.gbwK())
q=w.d
q===$&&A.c()
q=q.length
if(q===0){q=A.av(A.d("No questions yet. Tap + Question.",v,v,v,v,v,v,A.l(v,v,u?B.bI:B.ak,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=A.hE(v,new C.eKs(w,new C.b74(u)),q,D.boK,v,B.ah,new C.eKt(),!1)
return A.cb(s,t,u,v,!1,!1,r,v)}}
C.ZW.prototype={
T(){return new C.aE_()}}
C.aE_.prototype={
a_(){var w,v=this
v.a1()
w=v.a.c
v.d=new A.ar(new A.bb(w.b,B.b2,B.aN),$.aw())
w=A.bl(w.c,!0,x.bP)
v.e=w
if(B.d.gal(w))J.cf(v.e,D.a3w)
w=v.a.c
v.f=w.d
v.r=w.e},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
acH(){var w=0,v=A.j(x.H),u=this,t
var $async$acH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A0.G1(78,1920),$async$acH)
case 2:t=e
if(t!=null)u.m(new C.eKi(u,t))
return A.h(null,v)}})
return A.i($async$acH,v)},
adL(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=A.ej(new C.eKg(u),!1,null,x.dZ)
w=2
return A.b(A.a5(r,!1).ce(t),$async$adL)
case 2:s=e
if(s!=null)u.m(new C.eKh(u,s))
return A.h(null,v)}})
return A.i($async$adL,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.N(a1).ax.a===B.H,g=h?B.da:B.bN,f=h?B.da:i,e=h?B.aP:B.M,d=A.d("Edit Question",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=A.eD(A.a([A.dp(T.a_O,B.oU,new C.eKk(j,a1),A.bk(B.aI,i,i,i,B.c,i,i,i,i,i,i,i)),B.aw],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=A.d("Question thumbnail",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=A.m(14)
w=j.f
v=h?B.bI:B.ak
w=A.aE(i,A.bv(e,K.aNV(A.m(14),B.bQ,140,B.AW,v,w,1/0),B.aq),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gc3s(),i,i,i,i,i,i,!1,B.a8)
e=A.d("Question users will tap",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?B.bm:B.aP
u=A.m(16)
t=A.I(h?B.aK:B.aL,B.r,1)
s=j.d
s===$&&A.c()
r=A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,15,i,i,B.a4,i,i,!0,i,i,i,i,i,i,i,i)
v=A.p(i,A.A(A.a([A.D(A.aL(i,B.T,!1,i,!0,B.q,i,A.aM(),s,i,i,i,i,i,2,A.br(i,B.ex,i,B.bk,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,i,i,i,B.cs,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),B.y,!0,i,!0,i,!1,i,B.ai,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,B.a9,i,i,i,i,i,i,i,i,i,i,i,r,!0,B.a5,i,B.am,i,i,i,i),1),new A.Ia(j.d,i,i)],a0),B.m,i,B.e,B.j,0,i,i),B.f,i,i,new A.o(v,i,t,u,i,i,B.n),i,i,i,i,B.en,i,i,i)
u=A.d("Printable document",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,i,i,i,B.a4,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=A.iC(B.aI,i,i,B.ag,i,new C.eKl(j),i,A.d("Shows a printable badge on this answer",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=A.d("Stored answer (not AI)",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=A.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.rN:B.c
q=A.m(16)
p=A.m(16)
o=A.m(16)
n=A.I(B.bj.j(0.45),B.r,1)
m=A.p(i,D.bEP,B.f,i,i,new A.o(B.bj.j(0.12),i,i,A.m(12),i,i,B.n),i,i,i,i,B.bk,i,i,i)
l=A.d("Open Document Editor",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&A.c()
k=J.ac(k)
l=A.D(A.v(A.a([l,B.at,A.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),B.F,i,B.e,B.j,0,B.p),1)
return A.cb(d,g,A.cB(A.a([f,B.P,w,B.d5,e,B.P,v,B.aO,u,B.P,t,B.at,s,B.ac,A.aF(!1,B.a1,!0,q,A.aK(!1,p,!0,A.p(i,A.A(A.a([m,B.ew,l,A.W(B.B1,h?B.bI:B.ak,i,i,i,16)],a0),B.m,i,B.e,B.j,0,i,i),B.f,i,i,new A.o(i,i,n,o,i,i,B.n),i,i,i,i,B.fz,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gc92(),i,i,i,i,i,i,i),B.f,r,0,i,i,i,i,i,B.af)],a0),i,B.bU,i,i,B.ah,!1),i,!1,!1,i,i)}}
C.d_2.prototype={}
C.Uo.prototype={
T(){return new C.aC4(A.kg(!0,null,!0,!0,null,null,!1))}}
C.aC4.prototype={
a_(){var w,v,u,t,s,r,q=this
q.a1()
w=J.dH(q.a.c,new C.dWG())
w=A.B(w,w.$ti.k("H.E"))
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
q.d=new A.ar(new A.bb(w,B.b2,B.aN),$.aw())},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.f.q()
this.a2()},
avu(d,e){var w,v,u,t,s,r=this.d
r===$&&A.c()
r=r.a
w=r.b
if(!w.geu())return
v=r.a
r=w.a
u=w.b
t=d+B.a.ap(v,r,u)+e
s=B.a.or(v,r,u,t)
this.d.bM(0,new A.bb(s,A.h8(B.bu,r+t.length),B.aN))},
aWZ(d){var w,v,u,t,s=this.d
s===$&&A.c()
s=s.a
w=s.a
v=B.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=B.a.or(w,v,v,u)
this.d.bM(0,new A.bb(t,A.h8(B.bu,v+u.length),B.aN))},
aaD(){var w=0,v=A.j(x.H),u,t=this,s
var $async$aaD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A0.G1(78,1920),$async$aaD)
case 3:s=e
if(s==null){w=1
break}t.m(new C.dWm(t,s))
case 1:return A.h(u,v)}})
return A.i($async$aaD,v)},
Xc(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hV().a4y(B.eG),$async$Xc)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return A.b(s.fd(),$async$Xc)
case 4:t.m(new r.dWr(t,e))
case 1:return A.h(u,v)}})
return A.i($async$Xc,v)},
aaE(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$aaE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=$.aw()
s=new A.ar(B.as,t)
r=new A.ar(new A.bb("https://",B.b2,B.aN),t)
q=u.c
q.toString
w=2
return A.b(A.c9(null,null,!0,null,new C.dWp(s,r),q,null,!0,!0,x.y),$async$aaE)
case 2:if(e===!0)u.m(new C.dWq(u,s,r))
s.S$=t
s.P$=0
r.S$=t
r.P$=0
return A.h(null,v)}})
return A.i($async$aaE,v)},
bAT(){var w,v,u,t,s,r=null,q=A.a([],x.a),p=this.d
p===$&&A.c()
p=B.a.fv(p.a.a,A.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new A.J(p,new C.dWi(),A.T(p).k("J<1,n>")).bZ(0,new C.dWj())
for(p=J.aW(w.a),v=new A.fG(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gU(p)
if(B.a.a0(s,"## "))q.push(new C.lu("heading",B.a.i(B.a.b_(s,3)),r,r))
else if(B.a.a0(s,"\u2022 ")||B.a.a0(s,"- "))q.push(new C.lu("bullets",new A.J(A.a(s.split("\n"),u),new C.dWk(),t).bZ(0,new C.dWl()).aH(0,"\n"),r,r))
else q.push(new C.lu("text",s,r,r))}p=this.e
p===$&&A.c()
B.d.v(q,p)
if(q.length===0)q.push(D.a3w)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.N(d).ax.a===B.H,m=new C.d_2(n),l=n?B.aA:B.fE,k=A.d(p.a.d,o,o,o,o,o,o,B.cu,o,o,o),j=x.p
k=A.eD(A.a([A.dp(T.a_O,B.a71,new C.dWw(p,d),A.bk(B.aI,o,o,o,B.c,o,o,o,o,o,o,o)),B.ab],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?B.cC:B.iH
v=A.c_(B.bD,A.a([p.vf(E.M8,"Bold",new C.dWx(p),m),p.vf(E.Z9,"Italic",new C.dWy(p),m),p.vf(E.aia,"Underline",new C.dWz(p),m),p.vf(Ae.Zg,"Heading",new C.dWA(p),m),p.vf(O.M9,"Bullets",new C.dWB(p),m),p.vf(E.ai9,"Align",new C.dWC(),m),p.vf(B.Fd,"Link",p.gbVV(),m),p.vf(B.pr,"Image",p.gbVU(),m),p.vf(A_.Zs,"Video",p.gbVW(),m),p.vf(M.a_t,"Signature",new C.dWD(p),m),p.vf(A_.Ma,"Divider",new C.dWE(p),m)],j),B.bt,4,4)
w=A.p(o,A.v(A.a([v,B.ao,A.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,A.l(o,o,n?B.dL:B.bo,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),B.aj,o,B.e,B.j,0,B.p),B.f,w,o,o,o,o,o,o,E.ah1,o,o,o)
v=n?B.da:B.c
u=A.m(12)
t=A.I(n?B.eu:B.e2,B.r,1)
s=A.a([new A.ad(0,B.G,B.w.j(n?0.35:0.08),B.cJ,16)],x.V)
r=p.d
r===$&&A.c()
q=A.l(o,o,n?B.iK:B.aA,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=A.a([w,A.D(new A.C(B.bU,A.p(o,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),r,o,o,o,o,o,2,A.br(o,B.ex,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.dL:B.bo,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,p.f,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,q,!0,B.a5,o,B.am,o,o,o,o),B.f,o,o,new A.o(v,o,t,u,s,o,B.n),o,o,o,o,A6.AG,o,o,o),o),1)],j)
n=p.e
n===$&&A.c()
if(n.length!==0){n=new A.hW(n,A.T(n).k("hW<1>"))
j.push(A.p(o,A.c_(B.bD,n.gdL(n).dt(0,new C.dWF(p,m),x.g5).dE(0),B.bt,0,8),B.f,o,o,o,o,o,o,o,B.Lt,o,o,o))}return A.cb(k,l,A.v(j,B.m,o,B.e,B.j,0,B.p),o,!1,!1,o,o)},
vf(d,e,f,g){var w=null,v=g.a,u=v?B.da:B.c,t=A.m(8),s=A.m(8)
return A.ho(A.aF(!1,B.a1,!0,t,A.aK(!1,s,!0,new A.C(B.cj,A.W(d,v?B.iK:B.aA,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,w,w,w,B.af),w,e,w,w)}}
C.dda.prototype={}
C.azD.prototype={
a4(){return"_KbView."+this.b}}
C.aoz.prototype={
T(){return new C.aC3(D.aS3)},
cL4(d,e){return this.e.$2$size(d,e)}}
C.aC3.prototype={
gayc(){var w,v
if(this.e==null)return null
for(w=J.aW(this.a.c);w.C();){v=w.gU(w)
if(v.a===this.e)return v}return null},
gcnM(){var w,v,u,t,s,r=this.gayc()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
c3u(d){this.m(new C.dWf(this,d))},
cad(d){this.m(new C.dWg(this,d))},
bz7(){this.m(new C.dW7(this))},
bz9(){this.m(new C.dW8(this))},
gb3q(){var w=A.bl(this.a.c,!0,x.i)
B.d.b1(w,new C.dWh())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.N(d).ax.a===B.H,f=new C.dda(g),e=x.O
e=g?A.a([B.M.j(0.9),B.bm.j(0.85)],e):A.a([B.et.j(0.55),B.mH.j(0.45)],e)
w=A.m(22)
v=A.I((g?B.aK:B.fg).j(0.55),B.r,1)
switch(i.d.a){case 0:g=i.bA9(f)
break
case 1:g=i.gayc()
g.toString
g=i.bAR(f,g)
break
case 2:u=i.gayc()
u.toString
t=i.gcnM()
t.toString
s=A.b0(u.d)
r=A.m(16)
r=A.p(h,A.d(t.b,h,h,h,h,h,h,D.eVy,h,h,h),B.f,h,h,new A.o(B.aI,h,h,r,h,h,B.n),h,h,h,h,B.bB,h,h,1/0)
q=g?B.aA:B.c
p=A.m(16)
o=A.I(g?B.aK:B.aL,B.r,1)
n=A.a([new A.ad(0,B.G,B.w.j(g?0.28:0.06),B.ej,10)],x.V)
m=g?B.fl:B.p3
l=A.m(8)
k=A.W(B.py,g?B.dy:B.dS,h,h,h,14)
j=x.p
j=A.v(A.a([new C.azB(f,i.gbz8(),u.c,s,"Answer",h),A.D(A.cB(A.a([r,B.ac,A.p(h,A.v(A.a([A.p(h,A.A(A.a([k,B.ea,A.d("Stored answer",h,h,h,h,h,h,A.l(h,h,g?B.dy:B.dS,h,h,h,h,h,h,h,h,11,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),B.m,h,B.e,B.Q,0,h,h),B.f,h,h,new A.o(m,h,h,l,h,h,B.n),h,h,h,B.e3,B.h1,h,h,h),new C.aYP(t.c,t.e,f,h)],j),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(q,h,o,p,n,h,B.n),h,h,h,h,B.bU,h,h,1/0)],j),h,B.bot,h,h,B.ah,!1),1)],j),B.aj,h,B.e,B.j,0,B.p)
g=j
break
default:g=h}return A.p(h,g,B.aq,h,h,new A.o(h,h,v,w,h,new A.a7(B.b1,B.b6,B.x,e,h,h),B.n),h,h,h,B.hH,h,h,h,h)},
aUw(d){var w,v,u,t=null,s=d.a,r=s?D.rN:B.c,q=B.aE.j(0.22)
q=A.a([new A.ad(0,B.G,q,B.J,14),new A.ad(0,B.G,B.w.j(s?0.28:0.06),B.J,8)],x.V)
w=A.I(s?B.aK:B.fg,B.r,2)
v=this.a
u=x.p
q=A.a([A.p(t,A.hR(v.cL4(v.d,72),B.aq),B.f,t,t,new A.o(r,t,w,t,q,t,B.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)B.d.v(q,A.a([B.ao,A.d("Tap to switch",t,t,t,t,t,t,A.l(t,t,B.cZ,t,t,t,t,t,t,t,t,12,t,t,B.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return A.v(q,B.m,t,B.e,B.j,0,B.p)},
bA9(d){var w,v,u=this,t=null,s=u.a.r
s=A.av(s!=null?A.aE(t,u.aUw(d),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,B.a8):u.aUw(d),t,t,t)
w=d.a
v=A.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,A.l(t,t,w?B.aP:B.M,t,t,t,t,t,t,t,t,20,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),B.L,t,t)
return A.cB(A.a([s,B.az,v,B.ao,A.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,A.l(t,t,w?B.bI:B.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),B.L,t,t),B.bv,A.ib(!0,t,t,B.y,F.aMa,new C.dWa(u,d),u.gb3q().length,t,B.dQ,B.ah,!0)],x.p),t,D.boL,t,t,B.ah,!1)},
bAR(d,e){var w,v,u,t,s=null,r=A.bl(e.e,!0,x.u)
B.d.b1(r,new C.dWc())
w=A.b0(e.d)
v=d.a
u=A.d("Tap a question to read the stored answer.",s,s,s,s,s,s,A.l(s,s,v?B.bI:B.ak,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=A.av(A.d("No questions in this category yet.",s,s,s,s,s,s,A.l(s,s,v?B.bI:B.ak,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=A.hE(s,new C.dWd(this,r,d,e),t,B.uZ,s,B.ah,new C.dWe(),!1)
return A.v(A.a([new C.azB(d,this.gbz6(),e.c,w,e.b,s),new A.C(Aj.v_,u,s),A.D(v,1)],x.p),B.aj,s,B.e,B.j,0,B.p)}}
C.azB.prototype={
B(d){var w=this,v=null,u=w.c.a,t=A.aH(v,v,v,v,A.W(B.eB,u?B.aP:B.M,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=A.m(12)
q=A.p(v,A.W(w.e,s,v,v,v,22),B.f,v,v,new A.o(r,v,v,q,v,v,B.n),v,v,v,v,B.cj,v,v,v)
return new A.C(D.brZ,A.A(A.a([t,q,B.aw,A.D(A.d(w.r,v,v,v,v,v,v,A.l(v,v,u?B.aP:B.M,v,v,v,v,v,v,v,v,17,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,v,v),v)}}
C.aaH.prototype={
B(d){var w=null,v=this.c,u=A.b0(v.d),t=this.d.a,s=t?D.rN:B.c,r=A.m(14),q=A.m(14),p=A.m(14),o=A.I(t?B.aK:B.aL,B.r,1),n=A.a([new A.ad(0,B.G,B.w.j(t?0.28:0.06),B.dA,6)],x.V),m=u.j(0.15),l=A.m(12)
l=A.p(w,A.W(v.c,u,w,w,w,22),B.f,w,w,new A.o(m,w,w,l,w,w,B.n),w,40,w,w,w,w,w,40)
return new A.fF(1,A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(w,A.v(A.a([l,B.ao,A.d(v.b,w,2,B.a2,w,w,w,A.l(w,w,t?B.aP:B.M,w,w,w,w,w,w,w,w,10,w,w,B.I,w,1.1,!0,w,w,w,w,w,w,w,w),B.L,w,w)],x.p),B.m,w,B.ba,B.j,0,B.p),B.f,w,w,new A.o(w,w,o,p,n,w,B.n),w,w,w,w,B.cj,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.af),w)}}
C.aYP.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=A.a([],q)
if(this.d){w=r.a
v=w?B.fl:B.p3
u=A.m(8)
t=A.W(B.tB,w?B.dy:B.dS,s,s,s,14)
p.push(A.p(s,A.A(A.a([t,B.d8,A.d("Printable document",s,s,s,s,s,s,A.l(s,s,w?B.dy:B.dS,s,s,s,s,s,s,s,s,10,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),B.m,s,B.e,B.Q,0,s,s),B.f,s,s,new A.o(v,s,s,u,s,s,B.n),s,s,s,B.cG,B.eF,s,s,s))}B.d.v(p,J.b6(this.c,new C.c6W(r),x.l))
return A.v(p,B.F,s,B.e,B.j,0,B.p)}}
C.aaz.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new A.C(D.bmE,A.d(q.b,r,r,r,r,r,r,A.l(r,r,s.d.a?B.aP:B.M,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new A.C(B.hG,A.bv(A.m(12),K.aNV(r,B.bQ,160,B.pr,r,w,1/0),B.aq),r)
case"video":v=q.c
q=v==null?q.b:v
return new A.C(B.hG,new C.azC(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new A.C(B.uV,A.aK(!1,r,!0,A.d(q,r,r,r,r,r,r,A.l(r,r,s.d.a?B.ct:B.bj,r,B.ms,r,r,r,r,r,r,r,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cCh(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=A.iw(v?B.aK:B.aL,r,r,r,r,r)
q=A.d(q.b,r,r,r,r,r,r,A.l(r,r,v?B.cm:B.aK,r,r,r,r,r,r,r,r,r,B.cD,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=A.p(r,r,B.f,v?B.bI:B.ak,r,r,r,1,r,r,r,r,r,120)
return new A.C(B.Au,A.v(A.a([u,q,B.aO,t,B.at,A.d("Signature",r,r,r,r,r,r,A.l(r,r,v?B.bI:B.ak,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r)
case"bullets":v=x.cl
q=A.B(new A.cQ(new A.a2(A.a(q.b.split("\n"),x.s),new C.cCi(),x.cc),new C.cCj(s),v),v.k("H.E"))
return new A.C(B.kE,A.v(q,B.F,r,B.e,B.j,0,B.p),r)
case"divider":return new A.C(B.hG,A.iw(s.d.a?B.aK:B.aL,r,r,r,r,r),r)
default:q=q.b
if(B.a.i(q).length===0)return B.bH
return new A.C(B.eO,C.hDp(q,s.d),r)}}}
C.azC.prototype={
T(){return new C.beV()}}
C.beV.prototype={
a_(){this.a1()
this.acJ()},
acJ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$acJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=B.a.i(r.a.c)
if(J.ac(n)!==0)p=!J.cZ(n,"http")&&!J.cZ(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=A.Xi(A.cv(n,0,null),null)
w=7
return A.b(J.agI(q),$async$acJ)
case 7:if(r.c==null){w=1
break}r.m(new C.ddb(r,q))
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
return A.i($async$acJ,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?B.bm:B.f7
u=A.m(12)
return A.p(B.A,A.W(B.pD,w?B.bI:B.ak,t,t,t,36),B.f,t,t,new A.o(v,t,t,u,t,t,B.n),t,120,t,t,t,t,t,t)}w=A.m(12)
v=s.a
u=J.agG(v)
return A.bv(w,new A.fF(u,new A.an(B.A,t,B.aa,B.q,A.a([new A.zF(s,t),A.aH(t,t,t,t,A.W(v.f?B.aih:B.Mb,B.c,t,t,t,44),t,t,t,new C.ddd(this,s),t,t,t,t,t,t)],x.p),t),t),B.aq)}}
C.apn.prototype={
a4(){return"NgmyMusicLane."+this.b}}
C.I0.prototype={
a4(){return"NgmyMusicRhymeScheme."+this.b}}
C.rb.prototype={}
C.aoC.prototype={
T(){var w=null
return new C.aC5(new A.ar(B.as,$.aw()),A.mp(0,w,w),A.a([],x.m),D.C2,D.aDO,w,w)},
gdX(){return this.d}}
C.aC5.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.mQ,null,1,null,v)
w.f7(0,!0)
v.as!==$&&A.aO()
v.as=w
v.z=B.d.gL(D.a28).a},
q(){var w=this,v=w.as
v===$&&A.c()
v.q()
v=w.d
v.S$=$.aw()
v.P$=0
w.e.q()
w.bsA()},
gaoF(){var w,v,u,t,s=this.x
if(s===D.C3)return null
s=s===D.C2
w=s?D.a28:D.a1m
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?B.d.gL(w):null},
cox(d){return this.m(new C.dWU(this,d))},
ay_(){$.aT.x1$.push(new C.dWL(this))},
Il(d){return this.co_(d)},
aX_(){return this.Il(null)},
co_(b0){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
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
a1=B.d.b8(a0,new C.dWN())
o=!p&&!a1
d=a8.toLowerCase()
if(!(B.a.t(d,"fix")||B.a.t(d,"rewrite")||B.a.t(d,"re-write")||B.a.t(d,"rhyme better")||B.a.t(d,"better rhyme")||B.a.t(d,"sound better")||B.a.t(d,"improve")||B.a.t(d,"polish")||B.a.t(d,"make it rhyme")||B.a.t(d,"boresha")||B.a.t(d,"rekebisha")||B.a.t(d,"endeleza mistari")))a2=C.h9B(a8)&&a1
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
l=C.h9B(a8)&&!p
q.m(new C.dWO(q,a8))
q.ay_()
k=B.a.i(q.a.c)
if(J.ac(k)===0){q.m(new C.dWP(q))
q.ay_()
w=1
break}t=5
j=A.mX(k)
i=new A.J(a0,new C.dWQ(),A.T(a0).k("J<1,n>")).aH(0,"\n\n")
a0=C.hWZ(m,p,o,q.x,n,q.y,q.gaoF(),l)
a3=J.ac(i)!==0?"--- Conversation so far ---\n"+A.t(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+A.t(a8)
w=8
return A.b(A.qB(j,h,B.hj,null),$async$Il)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=B.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=B.a.i(a0)}else a6=L.bzG(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.m(new C.dWR(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.m(new C.dWS(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.m(new C.dWT(q))
q.ay_()
w=r.pop()
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Il,v)},
bEQ(){return this.Il("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=A.N(d).ax.a===B.H,p=q?B.Eg:D.bdj,o=x.p
o=A.a([A.v(A.a([A.D(s.cnf(q),1),s.bE2(q)],o),B.m,r,B.e,B.j,0,B.p)],o)
if(s.f.length!==0&&!s.r){w=B.aM.j(0.55)
v=s.r?r:s.gbEP()
u=A.m(28)
t=A.a([B.aM,B.aJ],x.O)
o.push(A.ao(78,A.aF(!1,B.a1,!0,r,A.aK(!1,r,!0,A.ex(D.e0E,r,new A.o(r,r,r,u,A.a([new A.ad(0,B.G,B.aM.j(0.45),B.cJ,16)],x.V),new A.a7(B.a3,B.a7,B.x,t,r,r),B.n),r,r,r),B.rk,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),B.f,B.K,10,r,w,B.rk,r,r,B.af),r,r,r,14,r,r))}return A.p(r,new A.an(B.W,r,B.aa,B.q,o,r),B.f,p,r,r,r,r,r,r,r,r,r,r)},
cnf(d){var w,v,u,t=this,s=null
if(t.x===D.C3)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=A.a([A.fOl(s,!1,B.K,0,0,w,A.fKF(t.csP(d),B.UW,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=A.W(B.akM,B.aE.j(0.5),s,s,s,52)
w.push(A.b4m(new A.C(B.eA,A.v(A.a([u,B.az,A.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,A.l(s,s,d?B.ay:B.dz,s,s,s,s,s,s,s,s,14,s,s,B.a4,s,1.45,!0,s,s,s,s,s,s,s,s),B.L,s,s),B.az,A.c_(B.fM,A.a([t.agW("Full bongo love song ABAB",d),t.agW("Mix: group vs private jet \u2014 which flies?",d),t.agW("Song from John 3:16 + matching verses",d),t.agW("Fix my rhyme \u2014 paste your lines",d)],v),B.bt,8,8)],v),B.m,s,B.ba,B.j,0,B.p),s),!1))}else{v=t.r?1:0
w.push(new A.nE(D.bnj,A.WK(new A.od(new C.dWM(t,d),u+v,!0,!0,!0,0,A.rE(),s)),s))}return A.ve(0,s,B.q,t.e,B.y,s,s,A8.a9i,s,s,!1,s,B.ah,!1,w)},
csP(d){var w=this.as
w===$&&A.c()
return A.c6(w,new C.dX0(this,d),null)},
csR(d){var w,v=this,u=null,t=A.m(14),s=v.r?u:new C.dX2(v),r=B.w.j(d?0.35:0.06),q=A.m(14),p=A.I(B.b7.j(0.35),B.r,1),o=v.gaoF()
o=o==null?u:o.c
o=A.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,B.Ip,u,u,u)
w=v.gaoF()
w=w==null?u:w.b
if(w==null)w="Style"
w=A.D(A.d(w,u,u,u,u,u,u,A.l(u,u,d?B.c:B.bh,u,u,u,u,u,u,u,u,12,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(u,A.A(A.a([o,B.ab,w,A.W(v.w?B.MC:B.qK,B.b7,u,u,u,20)],x.p),B.m,u,B.e,B.j,0,u,u),B.f,u,u,new A.o(r,u,p,q,u,u,B.n),u,u,u,u,B.on,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.af)},
atK(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=A.a([B.aZ,B.aU],x.O)
break
case 1:w=A.a([B.bj,B.ct],x.O)
break
case 2:w=A.a([B.bA,B.aE],x.O)
break
default:w=n}v=m?6:0
u=A.m(14)
t=A.m(14)
s=this.r?n:new C.dWK(this,d)
r=A.m(14)
w=m?new A.a7(B.a3,B.a7,B.x,w,n,n):n
if(m)q=n
else q=B.w.j(g?0.3:0.05)
p=A.d(f,n,n,n,n,n,n,B.Ip,n,n,n)
if(m)o=B.c
else o=g?B.ad:B.bh
return A.D(A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.dg(n,A.v(A.a([p,A.d(e,n,n,n,n,n,n,A.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),B.m,n,B.e,B.j,0,B.p),n,n,B.bb,new A.o(q,n,n,r,n,w,B.n),B.a1,n,n,n,B.jp,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),B.f,n,v,n,n,n,n,n,B.af),1)},
csS(d,e){var w,v,u,t=this,s=null,r=t.x===D.C2?t.z:t.Q,q=A.m(20)
if(r===d.a)r=B.b7.j(e?0.25:0.15)
else r=B.w.j(e?0.2:0.04)
w=A.m(20)
v=t.r?s:new C.dX3(t,d)
u=A.d(d.c,s,s,s,s,s,s,B.Sq,s,s,s)
return A.aF(!1,B.a1,!0,q,A.aK(!1,w,!0,new A.C(B.fG,A.A(A.a([u,B.d8,A.d(d.b,s,s,s,s,s,s,A.l(s,s,e?B.c:B.bh,s,s,s,s,s,s,s,s,10,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.m,s,B.e,B.Q,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),B.f,r,0,s,s,s,s,s,B.af)},
agW(d,e){var w=null,v=A.d(d,w,w,w,w,w,w,E.a6V,w,w,w),u=B.aE.j(e?0.2:0.1)
return A.mw(w,u,v,w,this.r?w:new C.dWV(this,d),w,w,w,w)},
bE2(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=A.m(22),o=d?B.M.j(0.95):B.c,n=A.I(B.aE.j(0.2),B.r,1),m=x.p,l=A.a([],m)
if(q>0)l.push(new A.C(G.agM,A.d("$"+B.k.aa(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,A.l(r,r,B.aM.j(0.85),r,r,r,r,r,r,r,r,9,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=A.l(r,r,d?B.c:B.bh,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.C3?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=A.D(A.aL(r,B.T,!1,r,!0,B.q,r,A.aM(),w,r,r,r,r,r,2,A.br(r,B.ex,r,B.h3,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.l(r,r,d?B.c_:B.hE,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),B.y,!0,r,!0,r,!1,r,B.ai,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.dWH(s),r,!1,r,r,!1,r,!0,r,B.a9,r,r,r,r,r,r,r,r,r,r,r,v,!0,B.a5,r,B.am,r,r,r,r),1)
u=s.r
t=u?r:new C.dWI(s)
l.push(A.A(A.a([v,new A.Ia(w,B.aE,r),A.aF(!1,B.a1,!0,r,A.aK(!1,r,!0,A.ex(u?D.e0O:D.bH7,r,D.aYt,42,r,42),B.cL,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),B.f,r,0,r,r,B.cL,r,r,B.af)],m),B.dD,r,B.e,B.j,0,r,r))
return A.p(r,A.v(l,B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,n,p,r,r,B.n),r,r,r,B.uX,B.afm,r,r,r)}}
C.aK9.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.Up.prototype={
ad(){var w=this
return A.E(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.YG.prototype={
T(){return new C.az2(null,null)},
be_(){return this.f.$0()}}
C.az2.prototype={
a_(){var w,v=this,u=null
v.a1()
w=A.bj(u,D.blI,u,1,u,v)
w.cp(0)
v.d!==$&&A.aO()
v.d=w
w=A.bj(u,B.pj,u,1,u,v)
w.f7(0,!0)
v.e!==$&&A.aO()
v.e=w
w=A.bj(u,B.l3,u,1,u,v)
w.cG(0)
v.f!==$&&A.aO()
v.f=w
w=A.bj(u,B.x2,u,1,u,v)
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
w.brq()},
c3w(){var w=this.d
w===$&&A.c()
w.er(0).bz(new C.dav(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(A.aI(d,B.bS,x.w).w.a.a-32,360),h=B.w.j(0.82),g=k.gc3v(),f=x.l,e=J.e0(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&A.c()
e[v]=new A.CE(new C.daw(k,v,d),j,w,j)}f=A.B(e,f)
w=k.d
w===$&&A.c()
u=A.m(28)
t=A.I(B.c.j(0.22),B.r,1.5)
s=A.a([new A.ad(2,B.G,B.aJ.j(0.35),B.J,40),new A.ad(0,B.G,B.aI.j(0.25),B.fK,28)],x.V)
r=k.e
r===$&&A.c()
q=k.r
q===$&&A.c()
q=A.c6(new A.h3(A.a([r,q],x.U)),new C.dax(k),j)
r=A.nD(B.jh,D.flU,new C.day())
p=A.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,A.l(j,j,B.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,B.cs,j,1.45,!0,j,j,j,j,j,j,j,j),B.L,j,j)
o=x.p
n=A.A(A.a([k.aX0(B.ke,"Resets in 24h"),B.ab,k.aX0(B.py,"Help Topics ready")],o),B.m,j,B.ba,B.j,0,j,j)
m=A.a([],o)
k.a.toString
l=B.c.j(0.35)
m.push(A.D(A.dT(D.fgC,new C.daz(k),A.de(j,j,j,j,j,j,j,j,j,B.ad,j,j,B.m7,j,new A.b7(A.m(14),B.Y),new A.az(l,1,B.r,-1),j,j,j,j)),1))
k.a.toString
m.push(B.aw)
k.a.toString
l=A.m(14)
m.push(A.D(A.bJ(D.flK,g,A.bk(B.aI,j,j,6,B.c,j,B.m7,B.aI.j(0.5),new A.b7(l,B.Y),j,j,j)),1))
f.push(A.av(A.aE(j,A.c6(w,new C.daA(k),A.p(j,A.v(A.a([q,B.az,r,B.S,p,B.P,n,B.bv,A.A(m,B.m,j,B.e,B.j,0,j,j)],o),B.m,j,B.e,B.Q,0,B.p),B.f,j,j,new A.o(j,j,t,u,s,D.bPC,B.n),j,j,j,j,A9.agE,j,j,i)),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.daB(),j,j,j,j,j,j,!1,B.a8),j,j,j))
return A.aF(!1,B.a1,!0,j,A.aE(j,new A.an(B.W,j,B.aa,B.q,f,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,B.a8),B.f,h,0,j,j,j,j,j,B.af)},
aX0(d,e){var w=null,v=B.c.j(0.08),u=A.m(20),t=A.I(B.c.j(0.12),B.r,1)
return A.p(w,A.A(A.a([A.W(d,B.aJ,w,w,w,13),B.ea,A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.fG,w,w,w)}}
C.aJ2.prototype={
aQ(){this.aX()
this.aW()
this.dI()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdF())
w.b2$=null
w.a2()}}
C.MZ.prototype={}
C.pB.prototype={}
C.apa.prototype={
T(){return new C.aCs(A.a([],x.E),A.a([],x.s))}}
C.aCs.prototype={
gap2(){return B.k.D(A.Km(this.a.c.a,new C.e7k(this)),0,1/0)},
a79(){var w,v=this,u=v.d,t=v.gap2()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)A.qA(u.a,t,!0,!1)},
IO(d,e){var w,v,u,t=this,s=t.gap2(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gap2()
if(w<v-0.005)A.heH(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)A.qA(u.a,w,!0,!1)
A.qA(t.a.c.a,w,!0,!1)
A.Aj(!0,!1,w,t.a.c.a)},
a_(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a1()
$.aT.c1$.push(o)
w=$.HP+1
$.HP=w
if(w===1){w=$.h1g
if(w!=null)w.$0()}v=$.fMH.h(0,B.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=A.bl(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=A.bl(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=A.lC(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,B.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=A.aNA(u,B.k.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new A.v6(w,u,r,q,s.e,p)}o.d=t}o.Oj()
o.a79()
$.aT.x1$.push(new C.e80(o))
o.Q=A.dC(B.nD,new C.e81(o))
o.as=A.dC(B.fP,new C.e82(o))},
q(){var w=this,v=w.Q
if(v!=null)v.a9(0)
v=w.as
if(v!=null)v.a9(0)
$.aT.hB(w)
C.hvi()
w.a2()},
cuY(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new A.S(Date.now(),0,!1)
v=p.r
if(!C.a6I(v,w)){if(C.fMJ(p,q.e)){q.m(new C.e7J(q,p))
q.xq(!1,!0,!0)}else if(q.c!=null)q.m(new C.e7K())
return}if(!C.c9b(v.c?v.bQ():v)){q.m(new C.e7L(p))
q.aX8(!1)
return}u=p.gBU()
if(u<=0)return
t=w.cY(A.c0(A.bx(w),A.bG(w),A.bQ(w),12,0,0,0,0))
s=C.fMK(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.m(new C.e7M())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(B.d.b8(q.e,new C.e7N(r))){q.m(new C.e7O(p,w,u))
return}q.m(new C.e7P(q,p,u,w))
q.aw4(new A.d1(r,p.a,u,B.fC,B.fb,"Clock-in daily earnings (local)",null,null,B.ck,w))},
iM(d){if(d===B.fs)this.Ea()},
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
QY(d){return this.ctE(d)},
ctE(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$QY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.Oj()
t.IO(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return A.b(x.r.b(s)?s:A.dR(s,x.H),$async$QY)
case 3:case 1:return A.h(u,v)}})
return A.i($async$QY,v)},
Ea(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$Ea=A.e(function(d,e){if(d===1){s.push(e)
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
return A.b(H.z1(q.w,k,l,j,m,!1,n),$async$Ea)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.m(new C.e7E(q,p))
q.QY(!1)}w=8
return A.b(q.J_(),$async$Ea)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=A.a9(h)
$.am.$1("[growth income] pull wallet: "+A.t(o))
w=9
return A.b(q.J_(),$async$Ea)
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
return A.i($async$Ea,v)},
MM(d){return this.byj(d)},
byi(){return this.MM(null)},
byj(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$MM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return A.b(A.aA(),$async$MM)
case 3:s=f
r=B.a.i(t.a.c.a.toLowerCase())
q=A.d9(t.w,x.N)
r=s.rP("ngmy_gi_credited_txn_ids_"+r)
q.v(0,r==null?A.a([],x.s):r)
j.a=0
p=A.a([],x.s)
o=d==null?null:A.kv(d,A.T(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,A.K)(r),++m){l=r[m]
k=l.a
if(q.t(0,k))continue
if(o!=null&&!o.t(0,k))continue
if(l.d===B.fq&&l.x===B.ck&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.m(new C.e7l(j,t,i))
q.v(0,p)
r=A.B(q,A.a3(q).k("cl.E"))
t.w=r
w=4
return A.b(A.apc(t.a.c.a,r),$async$MM)
case 4:t.avC(!1,!0)
r=t.c
if(r!=null)r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Balance updated: +$"+A.dz(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$MM,v)},
J_(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$J_=A.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=A.T(a2).k("a2<1>")
a4=A.B(new A.a2(a2,new C.e7F(),a3),a3.k("H.E"))
a5=a4
a6=A.a([],x.s)
w=J.ac(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=A.T(a2).k("J<1,n>")
e=A.B(new A.J(a2,new C.e7G(),a3),a3.k("aj.E"))
q=e
w=9
return A.b(A.li("transactions","id,status",null,null,null,A.E(["id",q],x.N,x.j),null,!0,null,null,!1,B.bG),$async$J_)
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
if(J.ac(l)===0)continue
j=B.d.bd(r.e,new C.e7H(l))
if(j<0)continue
i=r.e[j].x
if(J.y(k,1))a0=B.ck
else a0=J.y(k,2)?B.k_:B.ds
h=a0
if(!J.y(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===B.ds&&h===B.ck&&a3[j].d===B.fq)J.cf(a6,l)
if(i===B.ds&&h===B.k_&&r.e[j].d===B.eK){g=r.d
if(g!=null){r.IO(g.d+r.e[j].c,!1)
r.avC(!1,!0)}}}}if(o&&r.c!=null)r.m(new C.e7I())
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
return A.b(r.byi(),$async$J_)
case 14:case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$J_,v)},
OW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$OW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return A.b(A.uq(i.a,i),$async$OW)
case 3:h=e
if(t.c==null){w=1
break}t.m(new C.e7p(t,h))
t.Oj()
t.a79()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return A.b(H.z1(s[0],p,q,o,r,!0,i),$async$OW)
case 4:i=e.a
n=i[4]
m=A.bl(i[2],!0,x.o)
l=i[5]
t.w=A.bl(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.Oj()
t.a79()
k=C.fMJ(n,m)
if(k)t.IO(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.Z&&s.az>0
else s=!0
j=A.h2_(n,m,new A.S(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.Oj()
if(t.c==null){w=1
break}t.m(new C.e7q(t,n,m,l))
if(i){t.xq(!1,!0,!0)
if(j==="reset"){A.h0Q(t.a.c.a)
i=t.c
if(i!=null)A.h0T(i,null)}else if(j==="warn2"){A.h0R(t.a.c.a)
i=t.c
if(i!=null)C.h0U(i)}}else if(k)t.xq(!1,!0,!0)
else t.QY(!1)
case 1:return A.h(u,v)}})
return A.i($async$OW,v)},
xq(d,e,f){return this.cdM(d,e,f)},
avC(d,e){return this.xq(d,!1,e)},
aX8(d){return this.xq(!1,d,!1)},
cdM(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$xq=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new A.S(Date.now(),0,!1).a5()
r=t.a.c.a
q=t.e
p=t.f
w=3
return A.b(A.r9(r,o,q,!1,t.w,s,p),$async$xq)
case 3:p=t.a.c.a
q=t.e
r=t.f
A.HU(t.w,p,q,s,o,r)
if(f)t.QY(d)
case 1:return A.h(u,v)}})
return A.i($async$xq,v)},
c3L(){this.m(new C.e7y())
this.avC(!1,!0)},
ado(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===B.ck&&A.rC(d)){w=r.a
w.f.$1(new A.d1(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.c97(q,d)
v=q.d=A.Km(r.a.c.a,new C.e7v(r))
r.at=r.a.c.d=v
A.qA(q.a,v,!0,!1)
if(r.c!=null)r.m(new C.e7w(r,d))
r.xq(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new A.d1(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===B.ds
if(w&&d.d===B.fq)s=!1
else if(w&&d.d===B.eK){r.IO(q.d-d.c,!0)
s=!0}else{C.c97(q,d)
w=d.d
s=w===B.eK||w===B.jC
r.IO(q.d,s)}r.m(new C.e7x(r,d))
w=d.d
r.xq(s,e,w===B.eK||w===B.jC||d.x===B.ck||w===B.fC)},
aw4(d){return this.ado(d,!0,!1)},
aY5(d,e){return this.ado(d,!0,e)},
aY4(d,e){return this.ado(d,e,!1)},
c6H(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.hZ8(u,e,d)){v.lR("This plan is already active.")
return}w=A.hed(u.a,d,e)
if(C.hVA(u.a,v.e,w)){v.lR("You already own this plan.")
return}if(u.d<g){v.lR("Insufficient balance. Add funds in the Wallet tab first.")
return}v.m(new C.e7z(v))
v.m(new C.e7A(v,u,new A.v6(d,e,0.0286,new A.S(Date.now(),0,!1),0,0)))
v.aw4(new A.d1(w,u.a,g,B.jC,B.fb,"Direct investment buy: "+d,null,null,B.ck,new A.S(Date.now(),0,!1)))
v.m(new C.e7B(v))
v.lR("Plan purchased: "+d)},
lR(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
Zr(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hu(s,new C.amb(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$Zr)
case 3:w=4
return A.b(t.OW(),$async$Zr)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zr,v)},
adS(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$adS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hu(s,new C.ah1(r,A.a([r],x.d9),B.Pv,t.a.d,t.gaY3(),t.gaX7(),null),!1,null,x.X),$async$adS)
case 3:case 1:return A.h(u,v)}})
return A.i($async$adS,v)},
adQ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$adQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hu(s,new C.ajN(r,t.a.d,t.e,t.gaY3(),t.gaX7(),new C.e7D(t),null),!1,"LocalGrowthGameCenter",x.X),$async$adQ)
case 3:case 1:return A.h(u,v)}})
return A.i($async$adQ,v)},
abn(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$abn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new A.S(s,0,!1)
w=C.fMJ(j,t.e)?3:4
break
case 3:w=5
return A.b(t.aX8(!0),$async$abn)
case 5:case 4:if(j.x==null){t.lR("Choose an investment plan first, then come back to clock in.")
t.m(new C.e7r(t))
w=1
break}if(A.mn(r)===6||A.mn(r)===7){t.lR("Clock-in opens Monday through Friday.")
w=1
break}if(!C.h20(r)){t.lR("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a6I(q,r)&&j.fy>0){t.lR("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!A.aOi(q,r))if(!A.aOi(j.fr,r)){q=A.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,A.K)(p),++n){m=p[n]
if(B.a.i(m.b.toLowerCase())===B.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new A.aEk(m.y,l,m.a))}}q=A.hdF(q,r)}else q=p
else q=p}else q=!1
if(q){t.lR("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.lR("You are already clocked in for today.")
w=1
break}k=C.hwK(r)
q=j.a
t.m(new C.e7s(j,r,k))
t.aY4(new A.d1("local_clockin_manual_"+q+"_"+s,j.a,0,B.fC,B.fb,"Clock-in session started (local)",null,null,B.ck,r),!1)
t.lR("Clock-in started. Keep Growth Income open for today.")
case 1:return A.h(u,v)}})
return A.i($async$abn,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.N(d).ax.a===B.H?B.j0:B.pe
if(l.d==null)return A.ei(B.kn,j,!0)
w=x.o
v=A.V(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=B.a.i(l.a.c.a.toLowerCase())
u=$.fpl
u=u==null?k:u.$0()
u=J.aW(u==null?B.i_:u)
while(u.C()){t=u.gU(u)
q=t.a
if(q.length===0||v.ah(0,q)||A.rC(t))continue
if(B.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(A.ds(o.toLowerCase(),"clock-in",0))continue
v.n(0,q,t)}w=A.B(new A.bc(v,v.$ti.k("bc<2>")),w)
v=l.e
B.d.v(w,new A.a2(v,new C.e7T(),A.T(v).k("a2<1>")))
B.d.b1(w,new C.e7U())
v=l.d
v.toString
u=C.hLj(l.a.c)
t=l.d
t.toString
t=A.ei(new C.akE(t,l.a.e,l.z,l.gc6G(),l.aS2(),D.fCt),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=A.ei(new C.azQ(l.aS2(),q,n,o,w,new C.e7V(l),l.gc8M(),new C.e7W(l),D.fCu),j,!0)
m=A.aI(d,k,x.w).w
n=l.y
return new A.Vk(n,new C.e7X(l),A.aF(!1,B.a1,!0,k,new A.a6(1/0,m.a.b,new A.an(B.W,k,B.aa,B.q,A.a([A.bZ(0,A.ei(k,j,!0),0,0,0),A.bZ(0,A.bm(!1,[new C.azP(v,u,w,l.gbYO(),new C.e7Y(l),new C.e7Z(l),new C.e8_(d),l.gc9C(),l.gc9y(),D.fCs),t,o][n],!0,!1,B.ag,!0,!0),0,0,0),A.ao(0,l.bAB(),k,k,0,0,k,k)],x.p),k),k),B.f,j,0,k,k,k,k,k,B.af),k)},
aS2(){var w=null,v=A.a([D.eH.j(0.24),B.M.j(0.72)],x.O)
return A.ho(A.aK(!1,w,!0,A.p(B.A,D.bLB,B.f,w,w,new A.o(w,w,A.I(D.eH.j(0.38),B.r,1),w,A.a([new A.ad(0,B.G,D.eH.j(0.18),B.J,16)],x.V),new A.a7(B.ax,B.aD,B.x,v,w,w),B.a6),w,40,w,w,w,w,w,40),B.cL,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e7o(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bAB(){var w=null,v=A.m(27),u=A.I(B.av.j(0.45),B.r,1),t=A.a([new A.ad(0,B.G,B.w.j(0.5),B.eT,24),new A.ad(-2,B.G,B.av.j(0.12),B.J,18)],x.V)
return new A.C(B.Lt,A.bm(!0,A.av(new A.cU(D.aWM,A.p(w,A.cm(new C.e7m(this)),B.f,w,w,new A.o(w,w,u,v,t,D.bP5,B.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,B.ag,!0,!1),w)},
c_s(d){var w=null,v=this.y===d,u=D.cSa[d],t=u.b,s=u.a,r=""+d,q=x.W
return A.D(A.dr(w,!0,w,A.aE(B.c5,A.rh(A.q2(v?A.W(s,D.aaB,new A.cz("on"+r,q),w,w,21):A.v(A.a([A.W(s,B.c.j(0.62),w,w,w,19),B.bz,A.d(t,w,1,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,new A.cz("off"+r,q),B.ba,B.j,0,B.p),B.ir,A.rz(),B.bb,B.bb,A.a0H())),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e7u(this,d),w,w,w,w,w,w,!1,B.a8),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,B.c1,w),1)}}
C.azP.prototype={
bXE(d){return C.fMK(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.N(d)
w=B.c.j(0.58)
v=f.e
u=A.T(v).k("a2<1>")
u=A.p1(new A.a2(v,new C.deZ(),u),3,u.k("H.E"))
t=A.B(u,A.a3(u).k("H.E"))
v=f.c
s=v.x
r=new A.S(Date.now(),0,!1)
q=v.f
p=C.a6I(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.h20(r)
m=v.gBU()
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
j=A.bLX(!1,l,"GROWTH INCOME",A.aK(!1,i,!0,new A.a6(44,44,new A.an(B.W,e,B.aa,B.f,A.a([A.p(B.A,A.p(B.A,D.bEe,B.f,e,e,new A.o(B.io.j(0.78),e,e,h,e,e,B.n),e,36,e,e,e,e,e,36),B.f,e,e,new A.o(e,e,e,k,j,D.bQx,B.n),e,42,e,e,e,e,e,42),A.ao(e,A.p(B.A,D.bKG,B.f,e,e,new A.o(B.cp,e,A.I(D.acS,B.r,2),e,e,e,B.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.h4z(B.hf,new C.df_(),k)
k=A.A(A.a([A.D(C.h4y(new C.df0(f,B.ql,n),new A.S(Date.now(),0,!1),h,k),1),B.nZ,A.D(new A.uc(new C.df1(f,B.ql),e,new A.h3(A.a([$.yf(),$.a1K()],x.U)),e),1)],g),B.m,e,B.e,B.j,0,e,e)
h=f.c_D(B.ql,D.eH)
v=A.D(f.crc("Total Profit","$"+A.dz(v.e),B.ql),1)
u=u?e:s.b
return A.ei(A.cd(A.v(A.a([j,B.S,k,B.ac,new C.azO(f.d,m,q,p,n,o,D.eH,f.gbXD(),f.f,e),B.ac,h,B.S,A.A(A.a([v,B.nZ,A.D(f.b3l("Total Investment","$"+A.dz(u==null?0:u),B.ql,f.r),1)],g),B.m,e,B.e,B.j,0,e,e),B.S,f.bXA(d,t,D.eH,w)],g),B.aj,e,B.e,B.j,0,B.p),B.q,e,B.y,e,B.XQ,e,e,B.ah),D.acS,!0)},
avB(d,e,f,g,h){var w=null,v=A.m(h),u=A.I(B.c.j(0.09),B.r,1),t=A.a([new A.ad(0,B.G,B.w.j(0.4),B.dn,18)],x.V)
return A.p(w,A.bv(A.m(h-1),new A.an(B.W,w,B.aa,B.q,A.a([A.bZ(0,A.bY(w,new A.o(w,w,w,w,w,new A.bR(f,1.15,B.x,w,0,A.a([e.j(0.22),e.j(0)],x.O),w,w),B.n),B.bd),0,0,0),new A.C(g,d,w)],x.p),w),B.aq),B.f,w,w,new A.o(w,w,u,v,t,D.bPv,B.n),w,w,w,w,w,w,w,w)},
aX6(d,e,f,g){return this.avB(d,e,f,B.ag,g)},
b5b(d,e,f,g,h,i,j){var w=null,v=A.ao(-14,A.W(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=A.m(30),s=A.I(f.j(0.4),B.r,1),r=x.p,q=this.aX6(new A.a6(w,80,new A.an(B.W,w,B.aa,B.q,A.a([v,new A.C(D.bnN,A.v(A.a([A.p(w,A.A(A.a([A.W(e,f,w,w,w,15),B.ea,A.d(h.toUpperCase(),w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.agT,w,w,w),B.b3,A.f1(B.a3,A.d(i,w,1,w,w,w,w,A.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,B.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.eg)],r),B.F,w,B.e,B.j,0,B.p),w)],r),w),w),f,B.kW,22)
if(g==null)return q
return A.aK(!1,A.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
c_D(d,e){var w,v,u,t,s=null,r=A.I(e.j(0.55),B.r,2),q=e.j(0.12),p=x.p,o=A.a([],p)
for(w=0;w<3;++w){v=new A.aV(3,3)
o.push(A.p(s,s,B.f,s,s,new A.o(e,s,s,new A.bp(v,v,v,v),s,s,B.n),s,D.cDN[w],s,D.brg,s,s,s,5))}r=A.p(s,A.A(o,B.dD,s,B.ba,B.j,0,s,s),B.f,s,s,new A.o(q,s,r,s,s,s,B.a6),s,42,s,s,s,s,s,42)
q=A.D(A.v(A.a([D.fig,B.bz,A.A(A.a([A.p(s,s,B.f,s,s,new A.o(e,s,s,s,A.a([new A.ad(0,B.G,e,B.J,6)],x.V),s,B.a6),s,7,s,s,s,s,s,7),B.bp,new A.dm(1,B.ci,A.d("Live \xb7 real-time statistics",s,1,B.a2,s,s,s,A.l(s,s,B.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),B.m,s,B.e,B.j,0,s,s)],p),B.F,s,B.e,B.j,0,B.p),1)
o=A.m(16)
v=A.m(16)
u=B.w.j(0.3)
t=A.I(e.j(0.45),B.r,1.2)
return this.avB(A.A(A.a([r,D.eH3,q,B.ab,A.aK(!1,o,!0,A.p(s,A.v(A.a([A.W(B.ou,e.j(0.95),s,s,s,21),B.ue,A.d("PLAY",s,s,s,s,s,s,A.l(s,s,B.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,B.I,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),B.m,s,B.ba,B.j,0,B.p),B.f,s,s,new A.o(u,s,t,v,s,s,B.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),B.m,s,B.e,B.j,0,s,s),e,B.a3,B.Xo,26)},
b3l(d,e,f,g){var w,v=null,u=B.a.t(d.toLowerCase(),"profit"),t=u?B.cp:B.aW,s=A.p(v,v,B.f,v,v,new A.o(t,v,v,D.aV_,v,v,B.n),v,v,v,B.mT,v,v,v,5),r=x.p
r=A.a([s,B.bf,A.D(A.v(A.a([A.A(A.a([A.W(u?B.tz:B.xS,t,v,v,v,14),B.ea,new A.dm(1,B.ci,A.d(d,v,1,B.a2,v,v,v,A.l(v,v,B.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),B.m,v,B.e,B.j,0,v,v),B.ao,A.f1(B.a3,A.d(e,v,1,v,v,v,v,D.ePY,v,v,v),B.f,B.eg)],r),B.F,v,B.ba,B.j,0,B.p),1)],r)
s=g==null
if(!s)r.push(new A.C(B.af8,A.W(B.eo,B.c.j(0.35),v,v,v,v),v))
w=this.aX6(new A.a6(v,66,A.A(r,B.m,v,B.e,B.j,0,v,v),v),t,B.lo,20)
if(s)return w
return A.aK(!1,A.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
crc(d,e,f){return this.b3l(d,e,f,null)},
bXA(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.p(m,m,B.f,m,m,new A.o(f,m,m,m,A.a([new A.ad(0,B.G,f,B.J,8)],x.V),m,B.a6),m,9,m,m,m,m,m,9),k=A.d("LIVE ACTIVITY",m,m,m,m,m,m,A.l(m,m,B.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,B.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=B.c.j(0.07),i=A.m(20),h=x.p
i=A.a([A.A(A.a([l,B.a5O,k,B.b3,A.p(m,A.d(""+e.length,m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.f,m,m,new A.o(j,m,m,i,m,m,B.n),m,m,m,m,B.Y2,m,m,m)],h),B.m,m,B.e,B.j,0,m,m),B.P],h)
if(e.length===0)i.push(new A.C(B.Xc,A.v(A.a([A.W(B.h4,g,m,m,m,30),B.ao,A.d("Nothing yet",m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.bz,A.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),B.L,m,m)],h),B.m,m,B.e,B.j,0,B.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=A.a([],h)
if(w>0)k.push(new A.m8(1,m,m,m,m,B.c.j(0.07),m))
j=e[w]
v=j.d
u=v===B.eK||v===B.jC
t=u?B.iZ:D.eH
g=B.c.j(0.5)
v=new A.aV(12,12)
s=A.a([t.j(0.28),t.j(0.08)],l)
r=new A.az(t.j(0.35),1,B.r,-1)
v=A.p(B.A,A.W(u?B.tz:B.vl,t,m,m,m,18),B.f,m,m,new A.o(m,m,new A.bP(r,r,r,r),new A.bp(v,v,v,v),m,new A.a7(B.ax,B.aD,B.x,s,m,m),B.n),m,38,m,m,m,m,m,38)
s=C.hTs(j)
q=C.h6e(j.y)
s=A.v(A.a([new A.x(s,m,B.mt,m,m,m,m,B.a2,m,1,m,m),B.bz,new A.x(q,m,new A.F(!0,g,m,m,m,m,11,B.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.F,m,B.e,B.j,0,B.p)
q=t.j(0.14)
p=new A.aV(20,20)
o=u?"-":"+"
n=A.dz(j.c)
q=A.p(m,new A.x(o+"$"+n,m,new A.F(!0,t,m,m,m,m,13,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),B.f,m,m,new A.o(q,m,m,new A.bp(p,p,p,p),m,m,B.n),m,m,m,m,B.nI,m,m,m)
j=C.hdh(j)
k.push(new A.C(Q.Lj,new A.co(B.aQ,B.e,B.j,B.m,m,B.p,m,0,A.a([v,B.bf,new A.bE(1,B.bi,s,m),A.v(A.a([q,B.d0,new A.x(j,m,new A.F(!0,g,m,m,m,m,10,B.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.dD,m,B.e,B.j,0,B.p)],h),m),m))
B.d.v(i,k)}return this.avB(A.v(i,B.m,m,B.e,B.j,0,B.p),f,B.b1,D.bnV,26)}}
C.azO.prototype={
T(){return new C.bfD(null,null)},
cKN(d){return this.z.$1(d)},
cM0(){return this.Q.$0()}}
C.bfD.prototype={
a_(){var w,v=this,u=null
v.a1()
w=A.bj(u,B.pm,u,1,u,v)
w.cG(0)
v.d!==$&&A.aO()
v.d=w
w=A.bj(u,D.blz,u,1,u,v)
w.cG(0)
v.e!==$&&A.aO()
v.e=w
w=A.bj(u,B.uQ,u,1,u,v)
v.f!==$&&A.aO()
v.f=w
v.b4i()},
gb6U(){var w=new A.S(Date.now(),0,!1)
if(A.mn(w)===6||A.mn(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
b4i(){var w=this,v=w.a,u=v.e||v.f||w.gb6U()
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
this.b4i()},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
w.brH()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gb6U()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=B.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?B.av:g.x
g=g.r?new C.deS(i):h
v=A.m(32)
s=A.m(32)
r=f?D.d6U:D.d6S
q=A.I((f?D.oc:B.b0).j(0.28),B.r,1.4)
p=x.V
o=A.a([new A.ad(0,B.G,(f?B.av:B.b7).j(0.16),B.fK,28)],p)
n=x.p
m=A.a([],n)
if(f)B.d.v(m,A.a([A.ao(h,i.a9X(D.oc,130),h,h,h,-24,-30,h),A.ao(-36,i.a9X(B.av,140),h,h,-28,h,h,h)],n))
else B.d.v(m,A.a([A.ao(h,i.a9X(B.b7,120),h,h,h,-30,-36,h),A.ao(-40,i.a9X(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bZ(0,A.e3(A.bv(l,new A.et(A.c6(k,new C.deT(i),h),h),B.aq),!0,h),0,0,0))}if(f){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bZ(0,A.e3(A.bv(l,new A.et(A.c6(k,new C.deU(i),h),h),B.aq),!0,h),0,0,0))}l=A.m(999)
k=B.c.j(0.06)
j=A.I(B.c.j(0.16),B.r,1)
m.push(A.ao(h,new A.cU(D.aWS,A.p(h,A.A(A.a([A.p(h,h,B.f,h,h,new A.o(t,h,h,h,A.a([new A.ad(0,B.G,t.j(0.5),B.J,8)],p),h,B.a6),h,8,h,h,h,h,h,8),B.ab,new A.dm(1,B.ci,A.d(u,h,1,B.a2,h,h,h,D.eVj,h,h,h),h)],n),B.m,h,B.e,B.Q,0,h,h),B.f,h,h,new A.o(k,h,j,l,h,h,B.n),h,h,h,h,B.h3,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.h4z(B.hf,new C.deV(),l)
m.push(C.h4y(new C.deW(i,f,t,e,w),new A.S(Date.now(),0,!1),j,l))
return A.aK(!1,v,!0,A.dg(h,new A.an(B.W,h,B.aa,B.f,m,h),h,h,B.bb,new A.o(h,h,q,s,o,new A.a7(B.ax,B.aD,B.x,r,h,h),B.n),B.Aq,h,392,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
a9X(d,e){var w=null
return A.e3(A.p(w,w,B.f,w,w,new A.o(w,w,w,w,w,new A.bR(B.A,0.5,B.x,w,0,A.a([d.j(0.22),d.j(0)],x.O),w,w),B.a6),w,e,w,w,w,w,w,e),!0,w)}}
C.b9p.prototype={
aX9(d,e,f,g){var w=new A.aQ($.X().r,B.ap,null,null,A.a([],x.g)),v=e.a,u=e.b,t=u-f
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
a7.aX9(b2,new A.u(t*a8,s*b0),2+r*2.2,q)}for(a8=b2.a,b0=w*2,p=a7.e,o=0;o<3;++o){n=B.k.F(b0+o/3,1)
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
if(e>0.6&&f>0.35){h=$.hiN()
g=h.b
a0=g.c
g=g.a.c
h.a6(b2,new A.u(-a0/2,-g.gbb(g)/2))}a8.restore()
break
case 1:$.X()
a0=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
a0.r=p.j(f*0.95).gp(0)
a7.aX9(b2,new A.u(h,g),3+f*3,a0)
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
g.z=N.mm
l=g.H()
a8.drawCircle(a9+w*144,b1+h*144,7,l)
l.delete()}},
aq(d){return d.b!==this.b}}
C.b9o.prototype={
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
a5.j6(0,0.35)
a2=-a1
a3=A.M()
a3.sau(new A.a7(B.a3,B.a7,B.x,A.a([B.c.j(0),B.c.j(0.07),B.c.j(0)],x.O),e,e).aw(0,D.eAX))
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
a3=A.bz(D.eBt,B.Rz)
u=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
u.r=D.awc[B.o.F(s,6)].j(k*0.9).gp(0)
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
f=D.awc[B.o.F(s+i,6)].j(k)
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
C.b9n.prototype={
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
a5.tN(0,p)
p=A.bU(a2,a4)
o=A.M()
o.sau(D.e7l.aw(0,A.bU(a2,a4)))
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
C.azQ.prototype={
T(){var w=$.aw()
return new C.azR(new A.ar(B.as,w),new A.ar(B.as,w))},
bdT(d,e){return this.w.$2$cloudRequest(d,e)}}
C.azR.prototype={
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
lR(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
ct0(d){this.a.bdT(d,!0)
this.lR("Deposit submitted. Admin will review your payment proof.")
this.m(new C.dfi())},
crJ(){var w,v,u=this,t=A.d3(u.d.a.a)
if(t==null||t<=0){u.lR("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
A.hu(w,new C.aog(v.d,t,u.gct_(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
czf(){var w,v,u,t,s=this,r=s.d,q=A.d3(r.a.a)
if(q==null||q<=0){s.lR("Enter an amount to withdraw.")
return}if(q<10){s.lR("Minimum withdrawal is $"+A.dz(10)+".")
return}w=s.a.d.d
if(q>w){s.lR("Insufficient balance. You have $"+A.dz(w)+".")
return}w=s.e
v=C.heF(w.a.a)
if(v.length===0){s.lR("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.bdT(new A.d1("wd_"+1000*Date.now(),s.a.d.a,q,B.eK,B.kk,"Withdrawal to $"+v+" \u2014 Fee: $"+A.dz(u)+" \u2014 You receive: $"+A.dz(q-u),null,null,B.ds,new A.S(Date.now(),0,!1)),!0)
s.lR("Withdrawal submitted \u2014 waiting for admin approval.")
r.bM(0,B.c3)
w.bM(0,B.c3)
s.m(new C.dfj())},
cwe(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,A.K)(w),++s){r=w[s]
if(r.x!==B.ck||!this.aTP(r)||A.fUb(r))continue
q=r.d
p=q===B.eK||q===B.jC||q===B.ep
q=r.c
if(p)t+=q
else u+=q}return new A.bmz(u,t)},
B(d){var w,v,u,t=this,s=null,r=t.cwe(),q=t.a.r,p=new A.a2(q,new C.dfk(),A.T(q).k("a2<1>")).gM(0)
q=t.a
w=q.c
q=q.x
v=A.a([D.eH.j(0.24),B.M.j(0.72)],x.O)
u=A.I(D.eH.j(0.38),B.r,1)
q=A.bLX(!1,w,"WALLET",A.ho(A.aK(!1,s,!0,A.p(B.A,A.W(V.ak2,D.eH,s,s,s,18),B.f,s,s,new A.o(s,s,u,s,s,new A.a7(B.ax,B.aD,B.x,v,s,s),B.a6),s,40,s,s,s,s,s,40),B.cL,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),s,"Back up wallet",s,s))
v=t.bzd(r.a,r.b,p)
u=x.p
w=A.A(A.a([t.aoC(B.vl,"Deposit",0),t.aoC(B.tz,"Withdraw",1),t.aoC(B.h5,"History",2)],u),B.m,s,B.pI,B.j,0,s,s)
return A.ei(A.bm(!1,A.cd(A.v(A.a([q,B.bv,v,B.d5,w,B.d5,A.q2(t.f===2?t.bUH():t.c_6(),B.i5,A.rz(),B.bb,B.bb,A.a0H())],u),B.aj,s,B.e,B.j,0,B.p),B.q,s,B.y,s,D.bpM,s,s,B.ah),!0,!1,B.ag,!0,!0),B.zW,!0)},
bzd(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.a.i(i.a.e)
if(B.a.t(g,"@")){w=B.a.cI(g,"@")
v=B.a.ap(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+B.a.b_(g,w)}else v=g
w=A.m(26)
u=A.ao(h,i.axK(220,0.1),h,h,h,-60,-70,h)
t=A.ao(-90,i.axK(200,0.07),h,h,h,30,h,h)
s=A.ao(-60,i.axK(150,0.05),h,h,-40,h,h,h)
r=A.m(26)
r=A.bZ(0,A.bY(h,new A.o(h,h,A.I(B.c.j(0.18),B.r,1),r,h,h,B.n),B.bd),0,0,0)
q=A.m(6)
p=x.p
q=A.A(A.a([A.p(h,A.b3(h,h,h,new C.b8Q(h),B.au),B.f,h,h,new A.o(h,h,h,q,h,D.bRA,B.n),h,28,h,h,h,h,h,38),B.b3,D.fql],p),B.m,h,B.e,B.j,0,h,h)
o=A.d("Available balance",h,h,h,h,h,h,A.l(h,h,B.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,B.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=A.f1(B.a3,C.ap0(new C.df4(i),D.f_x,i.a.d.a),B.f,B.eg)
m=A.a([A.D(i.aMI(B.ts,"In",d),1),A.D(i.aMI(B.va,"Out",e),1)],p)
if(f>0){l=B.cR.j(0.22)
k=A.m(99)
j=A.I(B.iy.j(0.6),B.r,1)
m.push(A.p(h,A.d(""+f+" pending",h,h,h,h,h,h,D.eWf,h,h,h),B.f,h,h,new A.o(l,h,j,k,h,h,B.n),h,h,h,h,B.nI,h,h,h))}return new A.fF(1.62,A.bv(w,new A.an(B.W,h,B.aa,B.q,A.a([D.e6A,u,t,s,r,new A.C(A7.qE,A.v(A.a([q,B.b3,o,B.bz,n,B.b3,A.A(m,B.m,h,B.e,B.j,0,h,h),B.ao,A.d(v,h,1,B.a2,h,h,h,A.l(h,h,B.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,B.a4,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),B.F,h,B.e,B.j,0,B.p),h)],p),h),B.aq),h)},
axK(d,e){var w=null
return A.p(w,w,B.f,w,w,new A.o(w,w,A.I(B.c.j(e),B.r,22),w,w,w,B.a6),w,d,w,w,w,w,w,d)},
aMI(d,e,f){var w=null,v=B.c.j(0.16)
return A.A(A.a([A.p(w,A.W(d,B.c,w,w,w,13),B.f,w,w,new A.o(v,w,w,w,w,w,B.a6),w,22,w,w,w,w,w,22),B.bp,new A.dm(1,B.ci,A.f1(B.a3,A.d(e+"  $"+A.dz(f),w,w,w,w,w,w,B.o_,w,w,w),B.f,B.eg),w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aoC(d,e,f){var w=null,v=this.f===f,u=v?D.bSU:new A.a7(B.a3,B.a7,B.x,A.a([B.c.j(0.08),B.c.j(0.03)],x.O),w,w),t=A.I(v?B.c.j(0.6):D.eH.j(0.25),B.r,1),s=v?A.a([new A.ad(0,B.G,B.av.j(0.45),B.J,18)],x.V):w
u=A.dg(w,A.W(d,v?D.aaB:D.eH,w,w,w,26),w,w,B.cq,new A.o(w,w,t,w,s,u,B.a6),B.ED,w,62,w,w,w,w,62)
return A.aE(B.c5,new A.a6(92,w,A.v(A.a([u,D.eHY,A.d(e,w,w,w,w,w,w,A.l(w,w,v?B.c:B.aR,w,w,w,w,w,w,w,w,12.5,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.df3(this,f),w,w,w,w,w,w,!1,B.a8)},
c_6(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=A.d3(a1.a.a)
if(a2==null)a2=0
w=a0?D.eH:B.ct
v=a2>0
u=new C.dff(e,w)
t=new C.dfe()
s=e.f
r=A.m(26)
q=x.O
p=A.a([w.j(0.1),B.t1,B.t1],q)
o=A.I(w.j(0.22),B.r,1)
n=x.V
m=A.a([new A.ad(0,B.G,B.w.j(0.35),B.eT,22)],n)
l=w.j(0.15)
l=A.p(d,A.W(a0?B.vl:B.tz,w,d,d,d,18),B.f,d,d,new A.o(l,d,d,d,d,d,B.a6),d,34,d,d,d,d,d,34)
k=A.D(A.d(a0?"Add money":"Take money out",d,d,d,d,d,d,B.fW,d,d,d),1)
j=B.c.j(0.06)
i=A.m(99)
h=x.p
i=A.A(A.a([l,B.aw,k,A.p(d,A.A(A.a([A.W(B.hW,w,d,d,d,14),A.d("Cash App",d,d,d,d,d,d,A.l(d,d,B.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,B.I,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),B.m,d,B.e,B.Q,0,d,d),B.f,d,d,new A.o(j,d,d,i,d,d,B.n),d,d,d,d,B.kF,d,d,d)],h),B.m,d,B.e,B.j,0,d,d)
l=A.d("$",d,d,d,d,d,d,A.l(d,d,v?w:B.c_,d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=A.a([new A.u0(A.af("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=A.A(A.a([new A.C(B.i6,l,d),B.d8,A.aUA(new A.cU(D.aXa,A.aL(d,B.T,!1,d,!0,B.q,d,A.aM(),a1,w,d,d,d,d,2,A.br(d,B.ex,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,A.l(d,d,B.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.ai,d,d,k,d,d,B.dU,d,d,d,1,d,d,!1,"\u2022",d,new C.dfd(e),d,d,d,!1,d,d,!1,d,!0,d,B.a9,d,d,d,d,d,d,d,d,d,d,d,D.f2d,!0,B.L,d,B.am,d,d,d,d),d),d)],h),B.F,d,B.ba,B.j,0,d,d)
a1=v?120:60
a1=A.av(A.dg(d,d,d,d,B.bb,new A.o(d,d,d,A.m(99),d,new A.a7(B.a3,B.a7,B.x,A.a([w.j(0),w,w.j(0)],q),d,d),B.n),B.a1,d,3,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+A.dz(10)+" \xb7 admin sends it to your Cash App."
q=A.d(q,d,d,d,d,d,d,A.l(d,d,B.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,B.a4,d,1.35,!0,d,d,d,d,d,d,d,d),B.L,d,d)
l=A.a([],h)
j=a0?D.bWC:D.cae
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=A.a([i,B.bv,k,B.ao,a1,B.P,q,B.az,A.A(l,B.m,d,B.e,B.j,0,d,d)],h)
if(!a0){q=B.c.j(0.04)
l=A.W(B.hW,w,d,d,d,d)
k=A.l(d,d,B.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,B.O,d,d,!0,d,d,d,d,d,d,d,d)
l=A.a([B.az,A.aL(d,B.T,!1,d,!0,B.q,d,A.aM(),e.e,d,d,d,d,d,2,A.br(d,d,d,d,d,d,d,d,!0,new A.b4(4,A.m(16),new A.az(B.c.j(0.08),1,B.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new A.b4(4,A.m(16),new A.az(w,1,B.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.ai,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a9,d,d,d,d,d,d,d,d,d,d,d,B.ne,!0,B.a5,d,B.am,d,d,d,d)],h)
if(v){q=B.c.j(0.04)
k=A.m(16)
B.d.v(l,A.a([B.ac,A.p(d,A.v(A.a([t.$2("Amount","$"+A.dz(a2)),t.$3$color("Fee (15%)","\u2212 $"+A.dz(a2*0.15),B.f9),A.iw(B.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+A.dz(a2*0.85),!0,D.eH)],h),B.m,d,B.e,B.j,0,B.p),B.f,d,d,new A.o(q,d,d,k,d,d,B.n),d,d,d,d,B.iN,d,d,d)],h))}B.d.v(a1,l)}a1.push(B.aO)
q=A.m(18)
l=a0?B.PS:P.aqU
n=A.a([new A.ad(0,B.G,(a0?B.aZ:B.dS).j(0.45),B.dn,18)],n)
k=a0?e.gcrI():e.gcze()
j=A.W(a0?B.Mp:B.lb,d,d,d,d,20)
if(a0)i=v?"Deposit $"+A.dz(a2):"Deposit funds"
else i=v?"Withdraw $"+A.dz(a2):"Request withdrawal"
a1.push(new A.a6(d,54,A.bY(A.lo(j,A.d(i,d,d,d,d,d,d,B.oR,d,d,d),k,A.fm(d,d,B.K,d,d,d,d,d,d,B.c,d,d,d,B.K,new A.b7(A.m(18),B.Y),d,d,d,d,d)),new A.o(d,d,d,q,n,new A.a7(B.a3,B.a7,B.x,l,d,d),B.n),B.bd),d))
return A.p(d,A.v(a1,B.aj,d,B.e,B.j,0,B.p),B.f,d,d,new A.o(d,d,o,r,m,new A.a7(B.b1,B.b6,B.x,p,B.Po,d),B.n),d,d,new A.cz("form"+s,x.W),d,B.xe,d,d,d)},
bUH(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=A.T(a2).k("a2<1>"),a4=A.B(new A.a2(a2,new C.df7(a0),a3),a3.k("H.E"))
B.d.b1(a4,new C.df8())
w=B.a.i(a0.a.e.toLowerCase())
a2=A.V(x.N,x.o)
a3=$.fpl
a3=a3==null?a1:a3.$0()
a3=J.aW(a3==null?B.i_:a3)
while(a3.C()){v=a3.gU(a3)
u=v.a
if(u.length!==0&&B.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,A.K)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("bc<2>")
a2=A.B(new A.bc(a2,a3),a3.k("H.E"))
r=C.hU0(a2,A.Km(a0.a.e,new C.df9(a0)))
a2=A.m(24)
a3=A.I(B.c.j(0.07),B.r,1)
v=A.m(99)
u=A.m(99)
q=x.p
u=A.a([A.A(A.a([D.bum,A.aK(!1,v,!0,A.p(a1,D.eCd,B.f,a1,a1,new A.o(a1,a1,A.I(D.eH.j(0.4),B.r,1),u,a1,a1,B.n),a1,a1,a1,a1,B.m9,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.dfa(a0),a1,a1,a1,a1,a1,a1,a1)],q),B.m,a1,B.e,B.j,0,a1,a1),B.S],q)
if(a4.length===0)u.push(new A.C(D.bmw,A.v(A.a([A.W(B.Ff,B.c.j(0.25),a1,a1,a1,40),B.S,D.fn3],q),B.m,a1,B.e,B.j,0,B.p),a1))
else{v=A.a([],q)
for(p=A.db(a4,0,A.dJ(a0.r,"count",x.S),A.T(a4).c),o=p.$ti,p=new A.bX(p,p.gM(0),o.k("bX<aj.E>")),o=o.k("aj.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===B.eK||k===B.jC||k===B.ep
if(l===B.ck)i=j?B.cr:D.eH
else i=l===B.ds?B.iy:B.fU
h=j?"-":"+"
l=B.c.j(0.06)
k=i.j(0.14)
g=new A.az(i.j(0.4),1,B.r,-1)
k=A.p(a1,A.W(j?B.tz:B.vl,i,a1,a1,a1,19),B.f,a1,a1,new A.o(k,a1,new A.bP(g,g,g,g),a1,a1,a1,B.a6),a1,42,a1,a1,a1,a1,a1,42)
f=a0.bOC(n)
e=C.h6e(n.y)
d=B.c.j(0.5)
f=A.a([new A.x(f,a1,B.jB,a1,a1,a1,a1,a1,a1,a1,a1,a1),B.bz,new A.x(e,a1,new A.F(!0,d,a1,a1,a1,a1,11,B.a4,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1)],q)
e=n.f
if(B.a.i(e==null?"":e).length!==0){e.toString
d=B.c.j(0.4)
f.push(new A.x(e,a1,new A.F(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,B.a2,a1,1,a1,a1))}if(m!=null&&n.x!==B.k_)f.push(new A.C(E.afh,new A.EX(B.bD,5,4,B.bt,A.a([a0.aLE("Before",m.b),a0.aLE("After",m.a)],q),a1),a1))
m=A.v(f,B.F,a1,B.e,B.j,0,B.p)
f=n.c
f=f===0?"\u2014":h+"$"+A.dz(f)
e=i.j(0.14)
d=new A.aV(99,99)
n=C.hdh(n)
v.push(A.p(a1,new A.co(B.aQ,B.e,B.j,B.m,a1,B.p,a1,0,A.a([k,B.bf,new A.bE(1,B.bi,m,a1),B.ab,A.v(A.a([new A.x(f,a1,new A.F(!0,i,a1,a1,a1,a1,15,B.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.at,A.p(a1,new A.x(n,a1,new A.F(!0,i,a1,a1,a1,a1,9.5,B.I,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.f,a1,a1,new A.o(e,a1,a1,new A.bp(d,d,d,d),a1,a1,B.n),a1,a1,a1,a1,B.AJ,a1,a1,a1)],q),B.dD,a1,B.e,B.j,0,B.p)],q),a1),B.f,a1,a1,new A.o(a1,a1,new A.bP(B.Y,B.Y,new A.az(l,1,B.r,-1),B.Y),a1,a1,a1,B.n),a1,a1,a1,a1,B.uS,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(A.hc(D.bIT,A.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,B.cc,a1,a1,a1),new C.dfb(a0),A.fu(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.eH,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
B.d.v(u,v)}return A.p(a1,A.v(u,B.aj,a1,B.e,B.j,0,B.p),B.f,a1,a1,new A.o(B.t1,a1,a3,a2,a1,a1,B.n),a1,a1,D.fCn,a1,D.boG,a1,a1,a1)},
aLE(d,e){var w=null,v=B.c.j(0.05),u=A.m(7),t=A.I(B.c.j(0.1),B.r,1),s=A.dq(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=A.dz(e)
return A.p(w,A.WV(A.dq(A.a([s,A.dq(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.f_H,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.mW,w,w,w)},
aTP(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(B.a.t(w,"clock-in session started"))return!1
v=d.d
if(v===B.ep)return d.c>0
if(A.rC(d))return!1
if(v===B.fq||v===B.eK)return!0
if(v===B.o4||v===B.jC)return!0
if(v===B.k0)return!0
if(v===B.fC)return B.a.t(w,"clock-in")||d.c>0
return!1},
bOC(d){var w,v=d.f
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
C.b8Q.prototype={
a6(d,e){var w,v,u,t
$.X()
w=A.M()
w.r=D.b6A.j(0.55).gp(0)
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
C.btd.prototype={
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
f.r=B.oh.j(0.35*g).gp(0)
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
t=B.oh.j(0.5*Math.sin(f*3.141592653589793))
a1=new A.km(new A.eo("z",a2,a2,B.cO,a2,a2,a2,a2,a2,a2,new A.F(!0,t,a2,a2,a2,a2,12+f*14,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),B.a5,B.ch,new A.jm(1),a2,a2,a2,a2,B.cd,a2)
a1.eO()
a1.a6(a3,new A.u(u+Math.sin(f*6.283185307179586+k)*12+k*8,w-f*90))}},
aq(d){return d.b!==this.b}}
C.aJi.prototype={
aQ(){this.aX()
this.aW()
this.dI()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdF())
w.b2$=null
w.a2()}}
C.bv9.prototype={}
C.aYs.prototype={}
C.Zt.prototype={
T(){return new C.aCf(new A.ar(B.as,$.aw()))},
cNa(d,e){return this.d.$2(d,e)}}
C.aCf.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
aXd(){var w=this,v=B.a.i(w.d.a.a),u=A.af("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.m(new C.e1A(w))
return}u=w.c
u.toString
A.a5(u,!1).N(null)
w.a.cNa(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=A.aI(a0,B.eD,e).w
e=A.aI(a0,B.e7,e).w
w=A.av(A.p(f,f,B.f,f,f,new A.o(B.b5,f,f,A.m(2),f,f,B.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=A.A(A.a([A.p(f,D.bIi,B.f,f,f,new A.o(f,f,f,f,A.a([new A.ad(0,B.G,B.ff.j(0.5),B.J,18)],v),D.amD,B.a6),f,52,f,f,f,f,f,52),B.ew,A.D(A.v(A.a([D.fb9,B.bz,A.d(g.a.c,f,1,B.a2,f,f,f,B.oP,f,f,f)],u),B.F,f,B.e,B.j,0,B.p),1),A.aH(f,f,f,f,D.bJ6,f,f,f,new C.e1D(a0),f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,f,f)
s=g.b34(B.eR,"You",B.ct)
r=B.aM.j(0.15)
q=A.m(99)
q=A.A(A.a([s,new A.C(B.l4,A.p(f,D.ff3,B.f,f,f,new A.o(r,f,A.I(B.aM.j(0.6),B.r,1),q,f,f,B.n),f,f,f,f,B.fG,f,f,f),f),g.b34(B.vi,"Your friend",B.bZ)],u),B.m,f,B.e,B.j,0,f,f)
r=B.c.j(0.06)
s=A.m(16)
p=B.c.j(0.12)
o=A.m(16)
n=g.f
if(n.length===0)n=f
o=A.aL(f,B.T,!0,f,!0,B.q,f,A.aM(),g.d,f,f,f,f,f,2,A.br(f,f,f,f,f,f,f,f,!0,new A.b4(4,s,new A.az(p,1,B.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new A.b4(4,o,D.aVW),f,f,f,f,f,f,f,f,N.CQ,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.bLw,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,f,!1,f,B.ai,f,f,f,f,f,B.lR,f,f,f,1,f,f,!1,"\u2022",f,new C.e1E(g),f,new C.e1F(g),f,!1,f,f,!1,f,!0,f,B.a9,f,f,f,f,f,f,f,f,f,f,f,B.iC,!0,B.a5,f,B.am,f,f,f,f)
r=A.a([],u)
for(m=0;m<4;++m){l=D.c5h[m]
s=new A.aV(14,14)
p=g.e===l
n=p?D.amC:f
p=p?f:B.c.j(0.06)
k=new A.az(g.e===l?B.ay:B.bF,1,B.r,-1)
j=""+l
i=l===1?"game":"best of "+j
h=B.c.j(0.7)
s=A.a([new A.bE(1,B.bi,A.aE(f,A.dg(f,A.v(A.a([new A.x(j,f,B.du,f,f,f,f,f,f,f,f,f),new A.x(i,f,new A.F(!0,h,f,f,f,f,10,B.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,B.p),f,f,B.bb,new A.o(p,f,new A.bP(k,k,k,k),new A.bp(s,s,s,s),f,n,B.n),B.eE,f,f,f,B.f3,f,f,f),B.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.e1G(g,l),f,f,f,f,f,f,!1,B.a8),f)],u)
if(l!==7)s.push(B.ab)
B.d.v(r,s)}s=A.A(r,B.m,f,B.e,B.j,0,f,f)
r=A.A(A.a([A.W(B.l9,B.c.j(0.5),f,f,f,15),B.bp,A.D(A.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,A.l(f,f,B.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),B.m,f,B.e,B.j,0,f,f)
p=A.m(18)
v=A.a([new A.ad(0,B.G,B.bA.j(0.4),B.cy,18)],v)
n=g.e
j=n===1?"":"s"
return new A.C(new A.Q(0,0,0,d.f.d+e.r.d),A.p(f,A.v(A.a([w,B.aO,t,B.bv,q,B.bv,D.fiM,B.ao,o,B.aO,D.fmS,B.P,s,B.az,r,B.aO,new A.a6(f,54,A.bY(A.hc(D.akV,A.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,B.fW,f,f,f),g.gc45(),f),new A.o(f,f,f,p,v,D.bRL,B.n),B.bd),f)],u),B.aj,f,B.e,B.Q,0,B.p),B.f,f,f,D.aXY,f,f,f,f,D.bpZ,f,f,f),f)},
b34(d,e,f){var w=null,v=f.j(0.1),u=A.m(16),t=A.I(f.j(0.45),B.r,1)
return A.D(A.p(w,A.v(A.a([A.W(d,f,w,w,w,24),B.at,A.d(e,w,w,w,w,w,w,B.SX,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.f3,w,w,w),1)}}
C.oS.prototype={}
C.bof.prototype={
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
if(q!=null){s=A.ih(r,r,r,r,A.dq(r,r,r,r,r,r,r,r,r,B.aOt,A.t(q)),B.a5,B.ch,r,B.er,B.cd)
s.eO()
q=s.b
u=q.c
q=q.a.c
s.a6(d,p.aC(0,new A.u(u/2,q.gbb(q)/2)))}},
aq(d){return d.b!=this.b}}
C.E4.prototype={
a4(){return"NgmyProMoveResult."+this.b}}
C.apw.prototype={
gjN(){var w=this.d
w=w==null?null:w.a
return w!==!1},
blm(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.fMr("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.bVu()
w=s.gjN()
v=s.d
s.c=w?"You ("+v.b+") vs NGMY \u2014 capture all opponent discs":v.b+" vs "+v.c+" \u2014 capture all discs"
break
case"tic_tac_go":s.b=1
s.at=A.c2(9,"",!1,x.N)
s.ax=!0
if(s.gjN())w="You are X vs NGMY (O) \u2014 get 3 in a row"
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
s.c=s.gjN()?"Aim and shoot \u2014 beat NGMY on the snooker table":"Aim and shoot \u2014 pocket balls"
break
case"connect_four_pro":s.b=1
u=J.e0(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=A.c2(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gjN())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.aVI(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aBO.h(0,d)
s.c=w==null?"Play to earn":w}},
b7F(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gjN()
if(o)return
o=x.N
s.x=A.a1(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b6(w,new C.caF(),o)
v=A.B(v,v.$ti.k("aj.E"))
s.at=v
if(v.length<9){v=A.B(v,o)
B.d.v(v,A.c2(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=B.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===B.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cwM(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.ap7(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b6(t,new C.caG(),x.L)
o=A.B(o,o.$ti.k("aj.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)B.d.J(v,A.c2(7,0,!1,o))}if(A.iE(e.h(0,q)))o=A.ec(e.h(0,q))
else{o=A.c7(A.t(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bBq(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.ap7(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b6(t,new C.caH(),x.L)
o=A.B(o,o.$ti.k("aj.E"))
s.y=o}if(A.iE(e.h(0,p)))o=A.ec(e.h(0,p))
else{o=A.c7(A.t(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bCF(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.ap7(e,f)
break}},
cGX(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=A.a1(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",A.bl(w.at,!0,q))
o.n(0,"turnEmail",w.azQ())
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
q=A.B(new A.J(q,new C.caJ(),p),p.k("aj.E"))
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
q=A.B(new A.J(q,new C.caK(),p),p.k("aj.E"))
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
azQ(){var w,v,u,t=this
if(t.gjN()){if(t.ax){w=t.d
w=w==null?null:w.d
if(w==null)w=""}else w="ngmy@system"
return w}w=t.x.h(0,"playerXEmail")
if(w==null){w=t.d
w=w==null?null:w.d}v=B.a.i(J.k(w==null?"":w).toLowerCase())
w=t.x.h(0,"playerOEmail")
if(w==null){w=t.d
w=w==null?null:w.e}u=B.a.i(J.k(w==null?"":w).toLowerCase())
return t.ax?v:u},
ap7(d,e){var w,v=this,u=B.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
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
cwM(d,e){var w,v,u,t,s,r="playerXEmail"
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
bBq(d,e){var w,v,u,t,s
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
bCF(d,e){var w,v,u,t,s,r,q
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
SS(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gjN())return s
w=B.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return B.a.i(J.k(s==null?u.azQ():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
bVu(){var w,v,u=this,t=J.e0(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=A.ip(8,new C.caC(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
aVI(d){var w=20+d.aB(80),v=w+10+d.aB(50),u=4+d.aB(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bM(0,B.c3)},
cQA(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gjN())w=1
else{v=r.d
v=v==null?null:v.d
w=r.SS(q,v==null?"":v)?r.z:-1}if(!r.gjN()){v=r.d
v=v==null?null:v.d
v=!r.SS(q,v==null?"":v)}else v=!1
if(v)return!1
u=r.gjN()?r.z:w
if(!r.gjN()&&u!==r.z)return!1
t=J.q(r.y[d],e)
v=r.Q
if(v==null){if(t===r.z)v=!r.gjN()||t===1
else v=!1
if(v){r.Q=d
r.as=e}return!1}s=r.as
s.toString
if(d===v&&e===s){r.as=r.Q=null
return!1}if(Math.abs(d-v)===1&&Math.abs(e-s)===1&&t===0&&B.o.F(d+e,2)===1){J.aG(r.y[d],e,r.z)
J.aG(r.y[v],s,0)
r.as=r.Q=null
r.z=r.z===1?2:1
if(r.a7Q(2)){r.a9p(1)
return!0}if(r.a7Q(1)){r.a9p(2)
return!0}if(r.gjN()&&r.z===2){r.bxt(f)
if(r.a7Q(2)){r.a9p(1)
return!0}if(r.a7Q(1)){r.a9p(2)
return!0}}}return!1},
a9p(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
t.e=!0
w=t.f=d===1
if(t.gjN()){if(w){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+s}else v="NGMY wins \u2014 your discs are gone"
v=t.w=v}else{v=t.d
if(w){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+s}t.a=w?1:0
t.c=v
return!0},
bxt(d){var w,v,u,t,s,r,q,p,o,n=this,m=A.a([],x.B)
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
a7Q(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)for(t=J.aW(w[u]);t.C();)if(t.gU(t)===d)return!1
return!0},
cQB(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.pL
if(!s.gjN()){w=s.d
w=w!=null&&!s.SS("tic_tac_go",w.d)}else w=!1
if(w)return D.pL
if(s.gjN())v="X"
else{w=B.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===B.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.ahD(v))return s.aQH(v,!0)
if(!B.d.t(s.at,""))return s.aQI()
s.ax=!s.ax
if(!s.gjN()){s.x.n(0,"turnEmail",s.azQ())
s.c=s.aVf()
return D.pL}if(s.gjN()){t=s.ceW(e)
if(t>=0){s.at[t]="O"
if(s.ahD("O"))return s.aQH("O",!1)
if(!B.d.t(s.at,""))return s.aQI()
s.ax=!0}}s.c=s.gjN()?"Your turn \u2014 you are X":s.aVf()
return D.pL},
aVf(){var w=this.d
if(w==null)return"Take your turn"
return this.SS("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aQH(d,e){var w,v,u=this
u.e=!0
u.f=e
u.r=!1
if(u.gjN()){if(e){w=u.d
w=w==null?null:w.b
w=(w==null?"You":w)+" wins with "+d+"!"}else w="NGMY wins with "+d+"!"
w=u.w=w}else{w=u.d
if(e){w=w==null?null:w.b
v=w==null?"You":w}else{w=w==null?null:w.c
v=w==null?"Opponent":w}w=u.w=v+" wins with "+d+"!"}u.c=w
u.a=e?1:0
return e?D.pM:D.He},
aQI(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.QO},
ceW(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.ahD("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.ahD("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.cSz[u]
if(v[w].length===0)return w}return-1},
ahD(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.cZJ[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a2e(d){return B.d.cH(d,0,new C.caI())},
cAQ(d){this.ay.push(1+d.aB(10))
if(this.a2e(this.ay)>21)return!0
return!1},
cAR(d){var w,v,u,t=this
while(t.a2e(t.ch)<17)t.ch.push(1+d.aB(10))
t.CW=!0
w=t.a2e(t.ay)
v=t.a2e(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cGp(d,e){var w,v,u,t=this
if(t.e)return D.pL
if(!t.gjN()){w=t.d
w=w!=null&&!t.SS("connect_four_pro",w.d)}else w=!1
if(w)return D.pL
if(t.gjN())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.pL
if(!t.aeL(d,w))return D.pL
if(t.a7G(t.fx))return t.aQF(t.fx,!0)
if(t.aMs())return t.aQG()
w=t.fx===1?2:1
t.fx=w
if(t.gjN()&&w===2){u=t.cek(e)
if(u>=0){t.aeL(u,2)
if(t.a7G(2))return t.aQF(2,!1)
if(t.aMs())return t.aQG()
t.fx=1}}t.c=t.gjN()?"Your turn \u2014 drop a red disc":t.bBp()
return D.pL},
bBp(){var w=this.d
if(w==null)return"Drop a disc"
return this.SS("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
aeL(d,e){var w
for(w=5;w>=0;--w)if(J.q(this.fr[w],d)===0){J.aG(this.fr[w],d,e)
return!0}return!1},
aMs(){for(var w=0;w<7;++w)if(J.q(this.fr[0],w)===0)return!1
return!0},
aQF(d,e){var w,v,u,t=this
t.e=!0
t.f=e
t.r=!1
w=d===1?"red discs":"gold discs"
if(t.gjN()){if(e){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+" wins with "+w+"!"}else v="NGMY wins with "+w+"!"
v=t.w=v}else{v=t.d
if(e){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+" wins with "+w+"!"}t.c=v
t.a=e?1:0
return e?D.pM:D.He},
aQG(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.QO},
cek(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.aeL(w,2)
v=r.a7G(2)
r.b5n(w)
if(v)return w}for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.aeL(w,1)
u=r.a7G(1)
r.b5n(w)
if(u)return w}t=A.a([],x.t)
for(w=0;w<7;++w)if(J.q(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aB(s)]},
b5n(d){var w
for(w=0;w<6;++w)if(J.q(this.fr[w],d)!==0){J.aG(this.fr[w],d,0)
return}},
a7G(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.q(this.fr[w],v)!==d)continue
if(this.bBr(w,v,d))return!0}return!1},
bBr(d,e,f){var w,v,u,t=new C.caB(this,d,e,f)
for(w=x.t,w=[A.a([0,1],w),A.a([1,0],w),A.a([1,1],w),A.a([1,-1],w)],v=0;v<4;++v){u=w[v]
if(t.$2(u[0],u[1])+t.$2(-u[0],-u[1])-1>=4)return!0}return!1},
b8z(d){var w=this
if(B.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.aVI(d)}return w.a>=w.b}}
C.aqs.prototype={
T(){return new C.aD3(null,null)},
cM4(d){return this.e.$1(d)}}
C.aD3.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.blC,null,1,null,v)
w.f7(0,!0)
v.d=w
v.a.d.aM(0,v.gaXF())
v.avS()},
br(d){var w
this.bE(d)
w=this.a
if(d.c!==w.c){w.d.bM(0,B.c3)
this.avS()}},
avS(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.age(t,u)
C.age(t,u)
w.a.cM4(s)
w.a.toString
w.m(new C.ezw())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
q(){var w,v=this
v.a.d.a3(0,v.gaXF())
w=v.d
w===$&&A.c()
w.q()
v.btg()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.age(j,i),g=C.age(j,i),f=j.length,e=i.length,d=A.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&A.c()
u=new A.aV(1,1)
d.push(new A.vZ(new A.cX(v,!1,A.p(l,l,B.f,l,l,new A.o(B.aM,l,l,new A.bp(u,u,u,u),A.a([new A.ad(0,B.G,B.aM.j(0.6),B.J,6)],k),l,B.n),l,22,l,B.LB,l,l,l,3),l),B.Rm,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new A.eo(v,l,l,B.cO,l,l,l,l,l,l,D.eXT))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=B.c.j(0.4)
q=B.cs}else if(s===t){r=B.bc
q=B.O}else{r=B.aC
q=B.I}d.push(new A.eo(t,l,l,B.cO,l,l,l,l,l,l,new A.F(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&A.c()
d.push(new A.vZ(new A.cX(k,!1,A.p(l,l,B.f,B.aM,l,l,l,22,l,l,l,l,l,3),l),B.Rm,l,l))}p=f===0?0:B.k.V(h/f*100)
k=B.w.j(0.35)
v=A.m(12)
u=A.I(B.b5,B.r,1)
o=x.p
v=A.p(l,A.v(A.a([A.A(A.a([m.aXE("Correct",""+h,B.bn),B.ab,m.aXE("Wrong / missed",""+(f-g),B.aC),B.b3,A.d(""+p+"% accuracy",l,l,l,l,l,l,G.a6g,l,l,l)],o),B.m,l,B.e,B.j,0,l,l),B.ao,D.fga],o),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(k,l,u,v,l,l,B.n),l,l,l,l,B.bk,l,l,l)
u=A.D(A.cd(new A.a8L(l,A.dq(d,l,l,l,l,l,l,l,l,l,l),l,l,l),B.q,l,B.y,l,l,l,l,B.ah),1)
k=m.a.d
g=A.l(l,l,B.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.w.j(0.35)
return A.v(A.a([v,B.ac,u,B.S,A.aL(l,B.T,!0,l,!0,B.q,l,A.aM(),k,l,l,l,l,l,2,A.br(l,new A.b4(4,A.m(12),B.Y),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new A.b4(4,A.m(12),D.aVP),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.y,!0,l,!0,l,!1,l,B.ai,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,B.a9,l,l,l,l,l,l,l,l,l,l,l,D.aOs,!0,B.a5,l,B.am,l,l,l,l)],o),B.aj,l,B.e,B.j,0,B.p)},
aXE(d,e,f){var w=null,v=f.j(0.15),u=A.m(8)
return A.p(w,A.d(d+": "+e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(v,w,w,u,w,w,B.n),w,w,w,w,B.fG,w,w,w)}}
C.aKQ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
var z=a.updateTypes(["ay<~>()","~()","G(i0,i0)","~([x1?])","R(qv)","qv()","G(r4,r4)","R(r4)","G(r5,r5)","OC(Y)","R(i0)","cL(acx)","Za(Y)","Yh(Y)","adi(Y)","a5z(Y)","MM(Y)","ac8(Y,hB<ak<j4>>)","ac7(Y,G)","r(qv)","r4(a4<@,@>)","~(E4,apw)","ME(Y)","a4<n,@>(r4)","r5(a4<@,@>)","a4<n,@>(kj)","a4<n,@>(r5)","R(r5)","a4<n,@>(lu)","lu(@)","a4<n,@>(ie)","ie(@)","i0(@)","ay<~>(kj)","a4<n,@>(i0)","~(G,G)","i0(i0)","Un(Y)","ay<R>(ak<i0>)","Z9(Y)","~(i0)","ZW(Y)","Uo(Y)","n(i0)","R(lu)","wF(bu<G,lu>)","aaH(Y,G)","G(ie,ie)","aaz(lu)","r(rb)","bE(I0)","YG(Y)","~(d1{bumpWalletRevision:R,cloudRequest:R})","~(n,O,O,O)","O(S)","~(d1)","Zt(Y)","~(E4)","n(n)","ZX(Y)"])
C.cp8.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.cp9(r,w,s.b,v,s.d)
t=s.e
r.b=A.dC(t,u)
v.r=new C.cp5(r)
v.e=new C.cp6(r,w)
v.f=new C.cp7(r,w,t,u)},
$S:0}
C.cp9.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.lm(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=A.a9(r)
u=A.ce(r)
s=v
q=u
p=A.Fy(s,q)
if(p==null)p=new A.j1(s,q==null?A.a1Y(s):q)
t=p
o.d.hj(t.a,t.b)
return}o.d.J(0,w)}else{o.e.a(null)
o.d.J(0,null)}},
$S:40}
C.cp5.prototype={
$0(){this.a.b.a9(0)
return $.Gb()},
$S:1623}
C.cp6.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.arV.$0()
this.a.b.a9(0)},
$S:0}
C.cp7.prototype={
$0(){var w,v=this,u=v.b,t=A.dB(0,0,u.gbaC(),0,0,0)
u.iV(0)
u=v.c
w=v.a
w.b=A.cM(new A.b9(u.a-t.a),new C.cp4(w,u,v.d))},
$S:0}
C.cp4.prototype={
$0(){var w=this.c
this.a.b=A.dC(this.b,w)
w.$1(null)},
$S:0}
C.eVr.prototype={
$1(d){var w=this.a
w.m(new C.eVq(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.eVq.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hB(D.aeu,this.b,null,null,v.$ti.k("hB<1>"))},
$S:0}
C.eVt.prototype={
$2(d,e){var w=this.a
w.m(new C.eVo(w,d,e))},
$S:55}
C.eVo.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hB(D.aeu,null,this.b,this.c,v.$ti.k("hB<1>"))},
$S:0}
C.eVs.prototype={
$0(){var w=this.a
w.m(new C.eVp(w))},
$S:0}
C.eVp.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hB(B.Ak,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fti.prototype={
$1(d){return d.a===this.a&&B.a.i(d.b.toLowerCase())===this.b&&d.x===B.ck},
$S:16}
C.fta.prototype={
$1(d){return d},
$S:13}
C.fd5.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return A.p(B.A,new A.C(new A.Q(u,0,u,0),A.d("NGMY",w,1,B.eC,w,!1,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,B.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),B.f,w,w,B.a9y,w,v,w,w,w,w,w,v)},
$S:145}
C.fd2.prototype={
$3(d,e,f){return this.a.$0()},
$S:129}
C.fd3.prototype={
$2(d,e){var w,v=this,u=e.b
if(B.a.i(u==null?"":u).length!==0){u.toString
w=B.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return A.kh(w,B.A,v.d,new C.fd1(v.e),B.fQ,v.c,!0,v.b,null,null,v.a)},
$S:1624}
C.fd1.prototype={
$3(d,e,f){return this.a.$0()},
$S:129}
C.fd4.prototype={
$3(d,e,f){return this.a.$0()},
$S:129}
C.d6Z.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.d79.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.d7r.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.d7s.prototype={
$1(d){return this.a.J1()},
$S:14}
C.d7h.prototype={
$0(){var w=J.b6(this.b,new C.d7g(),x.P)
w=A.B(w,w.$ti.k("aj.E"))
this.a.f=w},
$S:0}
C.d7g.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.d7i.prototype={
$0(){var w=this.a,v=w.a.d.b5,u=A.T(v).k("J<1,a4<n,@>>")
v=A.B(new A.J(v,new C.d7f(),u),u.k("aj.E"))
w.f=v},
$S:0}
C.d7f.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.d7k.prototype={
$0(){var w=this.a,v=w.a.d.b5,u=A.T(v).k("J<1,a4<n,@>>")
v=A.B(new A.J(v,new C.d7j(),u),u.k("aj.E"))
w.f=v},
$S:0}
C.d7j.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.d7c.prototype={
$0(){var w=0,v=A.j(x.c),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.c6a(t.a.c)?2:3
break
case 2:w=4
return A.b(C.ao9(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.m(new C.d7a(t))
case 3:if(t.c!=null)t.m(new C.d7b(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:51}
C.d7a.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d7b.prototype={
$0(){return this.a.d++},
$S:0}
C.d7d.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d7e.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d74.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.i01(t.a.d.b5,J.k(J.q(u.b,"id")),"rejected")
t.a.bp()
w=2
return A.b(C.ag3(t.a.d.b5),$async$$0)
case 2:w=3
return A.b(t.J1(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d75.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a8(s)
C.hQ0(t.a.d.b5,J.k(r.h(s,"id")),t.a.c.c)
t.a.bp()
w=2
return A.b(C.ag3(t.a.d.b5),$async$$0)
case 2:w=3
return A.b(t.J1(),$async$$0)
case 3:t.HU(B.d.dM(t.y,new C.d72(s),new C.d73(t)),J.k(r.h(s,"id")))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d72.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d73.prototype={
$0(){return B.d.gL(this.a.y)},
$S:z+5}
C.d76.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d77.prototype={
$0(){return B.d.gL(this.a.y)},
$S:z+5}
C.d78.prototype={
$0(){return this.a.HU(this.b,J.k(J.q(this.c,"id")))},
$S:0}
C.d71.prototype={
$0(){return this.a.bYA(this.b)},
$S:0}
C.d70.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.i0u(u,w.b,new C.d7_(v,w))},
$S:0}
C.d7_.prototype={
$2(d,e){return this.a.ag5(this.b,d,e)},
$S:653}
C.d7q.prototype={
$2(d,e){if(d)return
this.a.aQk()},
$S:118}
C.d7o.prototype={
$2(d,e){var w=this.a
return new A.l3(C.aYr(w.a.c.a),new C.d7n(w,this.b,this.c),null,null,x.gH)},
$S:1626}
C.d7n.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=A.m(12)
v=A.m(12)
u=A.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return A.aF(!1,B.a1,!0,w,A.aK(!1,v,!0,new A.C(B.l5,A.bE7(B.cR,A.W(B.h5,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.d7m(this.a,d),t,t,t,t,t,t,t),B.f,this.b,0,t,t,t,t,t,B.af)},
$S:1627}
C.d7m.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fpA(s.c.a,s.e).eT(new C.d7l())
w=2
return A.b(C.bBu(u.b,t.a.c.a),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d7l.prototype={
$1(d){},
$S:31}
C.d7p.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dKY.prototype={
$0(){var w=this.a
return A.Km(w.a.c.a,new C.dKX(w))},
$S:80}
C.dKX.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dKZ.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&A.c()
u.bi=t.ad()
v.bp()
w.m(new C.dKW())},
$S:0}
C.dKW.prototype={
$0(){},
$S:0}
C.dL_.prototype={
$2(d,e){var w,v=this.a
if(!C.c6a(v.a.c)){if($.fMm.t(0,B.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.fMn(this.b,v.x,w)
return!1}C.ao9(v.a.c.a)}if(A.Km(v.a.c.a,new C.dKV(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aF7()
w=v.a
w.toString
w.hq(new A.d1(B.o.u(1000*Date.now()),v.a.c.a,d,B.jC,B.fb,e,null,null,B.ck,new A.S(Date.now(),0,!1)))
v.a.bp()
return!0},
$S:1628}
C.dKV.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dL0.prototype={
$3$bonus(d,e,f){var w,v=null,u=B.o.u(1000*Date.now()),t=this.a,s=t.a
s.hq(new A.d1(u,s.c.a,d,B.fC,B.fb,e,v,v,B.ck,new A.S(Date.now(),0,!1)))
t.a.bp()
w=f>0?"+$"+B.k.aa(d,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.un(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1629}
C.d6T.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.d6W.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.d6X.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.d6Y.prototype={
$1(d){var w=null,v=this.a,u=A.fm(w,w,v.e===d?B.bn:A.Z(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,w,w,w,w,w,w,w,w)
return A.D(new A.C(B.eQ,A.i9(A.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.d6V(v,d),u),w),1)},
$S:202}
C.d6V.prototype={
$0(){var w=this.a
return w.m(new C.d6U(w,this.b))},
$S:0}
C.d6U.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d8L.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.d8O.prototype={
$1(d){this.a.cfg()
return null},
$S:14}
C.d8P.prototype={
$1(d){return this.a.cuZ()},
$S:14}
C.d8Q.prototype={
$1(d){this.a.a1i()
return null},
$S:14}
C.d8R.prototype={
$1(d){this.a.ahc()
return null},
$S:14}
C.d8S.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c6)return
w=v.Q
w===$&&A.c()
if(w<=0){v.m(new C.d8M(v))
w=v.as
if(w!=null)w.a9(0)
v.Ez()
return}v.m(new C.d8N(v))},
$S:14}
C.d8M.prototype={
$0(){return this.a.Q=0},
$S:0}
C.d8N.prototype={
$0(){var w=this.a,v=w.Q
v===$&&A.c()
w.Q=v-1
return v},
$S:0}
C.d80.prototype={
$0(){return this.a.bC=this.b},
$S:0}
C.d81.prototype={
$0(){return this.a.bC=this.b},
$S:0}
C.d8u.prototype={
$1(d){return this.a.go.t(0,d)},
$S:34}
C.d8v.prototype={
$0(){},
$S:0}
C.d8g.prototype={
$0(){var w=this.b
w.c6=!0
w.cW="Waiting for both players\u2026"
w.cj="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.d8h.prototype={
$0(){var w=this.a
w.c6=!0
w.cW="Both players connected"
w.cj="Starting together in a moment\u2026"},
$S:0}
C.d8i.prototype={
$0(){var w=this.b
w.c6=!0
w.cW="Match starting together\u2026"
w.cj="Both players start in "+B.o.D(this.c,1,99)+"s"},
$S:0}
C.d8j.prototype={
$0(){this.b.c6=!1},
$S:0}
C.d8k.prototype={
$0(){},
$S:0}
C.d7t.prototype={
$0(){var w=this.a,v=w.x2,u=A.t(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.d8_.prototype={
$0(){var w=this.a
w.at=this.b
w.b2C()},
$S:0}
C.d8w.prototype={
$0(){},
$S:0}
C.d8F.prototype={
$0(){},
$S:0}
C.d8t.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.d8s(w))},
$S:0}
C.d8s.prototype={
$0(){var w=this.a
w.y=!0
w.z=new A.S(Date.now(),0,!1)},
$S:0}
C.d7Y.prototype={
$0(){var w=this.a;++w.Z
w.y=!1
w.z=null},
$S:0}
C.d7Z.prototype={
$0(){},
$S:0}
C.d8A.prototype={
$1(d){return d==null},
$S:266}
C.d8B.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
B.d.cz(v.ch,w.d)},
$S:0}
C.d8C.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.d7u.prototype={
$1(d){return d==null},
$S:266}
C.d7v.prototype={
$0(){return this.a.bi++},
$S:0}
C.d7w.prototype={
$0(){},
$S:0}
C.d89.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.d8a.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.J(0,t)
w=this.c
u.J(0,w)
if(v.ghx()&&D.mq.t(0,v.a.e)){u=v.id
u.J(0,t)
u.J(0,w);++v.fx}++v.k2
v.fy=A.a([],x.t)},
$S:0}
C.d8b.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.d88(w))},
$S:11}
C.d88.prototype={
$0(){var w=this.a
w.fy=A.a([],x.t)
w.k1=!1},
$S:0}
C.d8l.prototype={
$0(){return this.a.y1++},
$S:0}
C.d8m.prototype={
$0(){},
$S:0}
C.d8n.prototype={
$0(){return this.a.y2++},
$S:0}
C.d8o.prototype={
$0(){},
$S:0}
C.d8p.prototype={
$0(){return this.a.b5++},
$S:0}
C.d8q.prototype={
$0(){},
$S:0}
C.d8z.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.d8c.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d8d.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.d8e.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d8f.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.d8D.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.d8E.prototype={
$0(){var w=this.a
w.ok.push(w.d.aB(4))
w.p2=0},
$S:0}
C.d7x.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d7y.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.d7z.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d7A.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.d8x.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.d8y.prototype={
$0(){var w,v=this.a;++v.x2
v.aMf()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+A.t(Math.min(w+2,7))+" tiles"},
$S:0}
C.d87.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.d8r.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d85.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d86.prototype={
$2(d,e){return d+e.length},
$S:225}
C.d8G.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.d8H.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.d8I.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.d8K.prototype={
$1(d){var w=this.a,v=w.NO(),u=v<=0?0:B.k.D(w.zH()/v,0,1),t=w.a.x,s=t*1.46
return new C.ME(w.f?s:s*u,s,t,null)},
$S:z+22}
C.d8J.prototype={
$1(d){return d.bU(0.85)},
$S:165}
C.d84.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghx()&&D.mq.t(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return A.v(A.a([A.d(p,w,w,w,w,w,w,B.jB,B.L,w,w),B.ao,A.D(A.av(new A.a6(r*v+u,r*t+s,A.ib(!0,w,w,B.y,new A.hH(v,6,6,1,r),new C.d83(q,r),q.fr.length,w,B.dQ,B.ah,!1),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
$S:150}
C.d83.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.t(0,e),p=r.ghx()&&D.mq.t(0,r.a.e)&&q&&r.id.t(0,e),o=r.ghx()&&D.mq.t(0,r.a.e)&&q&&!p,n=B.d.t(r.fy,e)||q,m=p?D.amJ:D.bPF,l=A.m(10),k=A.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.amJ:D.amD
v=o?A.I(B.dy,B.r,2):s
u=A.a([new A.ad(0,B.G,A.Z(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.J,4)],x.V)
t=this.b*0.42
return A.aK(!1,l,!0,A.dg(s,A.av(n?A.W(D.ciJ[r.fr[e]],B.c,s,s,s,t):A.d("?",s,s,s,s,s,s,A.l(s,s,B.c,s,s,s,s,s,s,s,s,t,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,B.bb,new A.o(s,s,v,k,u,w,B.n),B.eE,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.d82(r,e),s,s,s,s,s,s,s)},
$S:198}
C.d82.prototype={
$0(){return this.a.ceC(this.b)},
$S:0}
C.d7N.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Z(89,B.bn.l()>>>16&255,B.bn.l()>>>8&255,B.bn.l()&255),r=A.m(10),q=A.m(10),p=A.m(10),o=A.I(A.Z(64,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
return A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(B.A,A.d(t?"":u,w,w,w,w,w,w,D.aNw,w,w,w),B.f,w,w,new A.o(w,w,o,p,w,w,B.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d7M(v,d),w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.af)},
$S:656}
C.d7M.prototype={
$0(){return this.a.cug(this.b)},
$S:0}
C.d7O.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=A.Z(46,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
return A.aF(!1,B.a1,!0,A.m(10),A.aK(!1,A.m(10),!0,A.p(B.A,A.d(u,w,w,w,w,w,w,D.aNw,w,w,w),B.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d7L(v,d),w,w,w,w,w,w,w),B.f,t,0,w,w,w,w,w,B.af)},
$S:656}
C.d7L.prototype={
$0(){return this.a.cuf(this.b)},
$S:0}
C.d7P.prototype={
$1(d){return this.a.m(new C.d7K())},
$S:28}
C.d7K.prototype={
$0(){},
$S:0}
C.d7Q.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&A.c()
w=C.age(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.oI()
if(u.ghx()&&D.mq.t(0,u.a.e)){u.a_B()
u.mM(!0)}else{v=B.d.cH(u.cy,0,new C.d7I())
t=u.dx
if(t>=v)u.tn("All 5 sentences perfect \u2014 full payout!")
else u.E0(t/v,t,v)}}else{if(u.ghx()&&D.mq.t(0,u.a.e))u.a_B()
u.m(new C.d7J(u))}},
$S:0}
C.d7I.prototype={
$2(d,e){return d+e.length},
$S:225}
C.d7J.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bM(0,B.c3)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.d7R.prototype={
$1(d){var w=null,v=A.fm(w,w,A.Z(38,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,B.cf,w,w,w,w,w,w,w)
return new A.C(B.cG,new A.a6(1/0,w,A.i9(A.d(d,w,w,w,w,w,w,V.aNp,w,w,w),new C.d7H(this.a,d),v),w),w)},
$S:127}
C.d7H.prototype={
$0(){return this.a.b1Z(this.b)},
$S:0}
C.d7S.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&A.c()
w=u*3+8
return A.v(A.a([A.d(s,v,v,v,v,v,v,B.oQ,v,v,v),B.P,A.D(A.av(new A.a6(w,w,A.ib(!0,v,v,B.y,new A.hH(3,4,4,1,u),new C.d7G(t,u),9,v,B.dQ,B.ah,!1),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
$S:150}
C.d7G.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.b_O(e),p=r===0
if(p)w=B.K
else w=q?B.bn:A.Z(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v=A.m(10)
s=p?t:new C.d7C(s,e)
u=A.m(10)
p=p?"":""+r
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.av(A.d(p,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),B.f,w,0,t,t,t,t,t,B.af)},
$S:78}
C.d7C.prototype={
$0(){return this.a.cue(this.b)},
$S:0}
C.d7T.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.d7F(q,d)
p=A.m(16)
if(o)w=D.a1r[d]
else{w=D.a1r[d]
w=A.Z(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=A.m(16)
u=o?A.Z(B.k.V(127.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
u=A.I(u,B.r,o?2:1)
t=x.V
if(o){s=D.a1r[d]
t=A.a([new A.ad(0,B.G,A.Z(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,16)],t)}else t=A.a([],t)
return A.aK(!1,p,!0,A.dg(r,r,r,r,B.bb,new A.o(w,r,u,v,t,r,B.n),U.As,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1633}
C.d7F.prototype={
$0(){return this.a.cuh(this.b)},
$S:0}
C.d7U.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&A.c()
q=A.d(q,t,t,t,t,t,t,B.oQ,t,t,t)
w=A.d("Move "+r.awx()+"/"+C.fSu(),t,t,t,t,t,t,B.CR,t,t,t)
v=r.x2
u=s*3+12
return A.v(A.a([q,w,A.d("Round "+v+"/7 \xb7 "+A.t(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,A.l(t,t,A.Z(153,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.D(A.av(new A.a6(u,u,A.ib(!0,t,t,B.y,new A.hH(3,6,6,1,s),new C.d7E(r),9,t,B.dQ,B.ah,!1),t),t,t,t),1)],x.p),B.m,t,B.e,B.j,0,B.p)},
$S:150}
C.d7E.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=A.m(10),s=A.m(10),r=u?B.bn:D.b8i,q=u?B.ey:D.bgy
return A.aF(!1,B.a1,!0,w,A.aK(!1,t,!0,A.p(w,w,B.f,w,w,new A.o(r,w,A.I(q,B.r,u?2.5:1),s,w,w,B.n),w,w,w,w,w,w,w,w),w,!0,w,w,B.K,w,w,w,w,w,w,w,w,new C.d7B(v,e),w,w,w,w,B.K,w,w),B.f,B.K,0,w,w,w,w,w,B.af)},
$S:78}
C.d7B.prototype={
$0(){return this.a.cuc(this.b)},
$S:0}
C.d7V.prototype={
$0(){return this.a.b1Z(this.b[this.c])},
$S:0}
C.d7W.prototype={
$0(){return this.a.m(new C.d7D())},
$S:0}
C.d7D.prototype={
$0(){},
$S:0}
C.d7X.prototype={
$2(d,e){this.a.Zk(d,e)
return null},
$S:z+21}
C.dci.prototype={
$1(d){return this.a.cf5(this.b,d)},
$S:1634}
C.dch.prototype={
$0(){var w=this
return w.a.a.cMD(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cAa.prototype={
$1(d){var w=this.a
w.a_S()
w.tv()},
$S:8}
C.czv.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.czl.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.czm.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.czF.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.czC.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.czD.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.czE.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.czx.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.czw(w))},
$S:0}
C.czw.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.czn.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ac(w.c)
v.dy=J.ac(w.d)
v.fr=J.ac(w.e)},
$S:0}
C.czA.prototype={
$1(d){var w=this.a
return new C.Un(w.fx,new C.czz(w),w.a.f.r,null)},
$S:z+37}
C.czz.prototype={
$1(d){return this.bgU(d)},
bgU(d){var w=0,v=A.j(x.y),u,t=this,s,r
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c74(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.m(new C.czy(r,d))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+38}
C.czy.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.czY.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.czS.prototype={
$1(d){this.a.tv()
return null},
$S:14}
C.czV.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(B.o.an(v.gaTa().a,1e6)<=0){w=v.id
if(w!=null)w.a9(0)
v.tv()
return}v.m(new C.czU())},
$S:14}
C.czU.prototype={
$0(){},
$S:0}
C.czR.prototype={
$1(d){this.a.EG()
return null},
$S:14}
C.czT.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.czQ.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bi(J.k(v==null?"":v))
if(u==null)u=new A.S(A.fQ(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bi(J.k(v==null?"":v))
return u.aL(0,w==null?new A.S(A.fQ(0,0,!1),0,!1):w)},
$S:42}
C.czs.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bi(J.k(v==null?"":v))
if(u==null)u=new A.S(A.fQ(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bi(J.k(v==null?"":v))
return u.aL(0,w==null?new A.S(A.fQ(0,0,!1),0,!1):w)},
$S:42}
C.czt.prototype={
$0(){var w=this.a,v=w.f
B.d.a8(v)
B.d.v(v,this.b)
w.ax=!0},
$S:0}
C.czu.prototype={
$0(){var w=this.a
if(w.c!=null)w.a0y(!0)},
$S:11}
C.czq.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.czr.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
if(w.f.length!==0)w.SW(this.b)},
$S:8}
C.czI.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=B.d.gcZ(v).Q
v.toString
if(this.b)w.hV(v)
else w.lV(v,B.dX,B.kB)},
$S:8}
C.czB.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.czJ.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.czK.prototype={
$0(){var w=this.a
w.f.push(A.E(["role","user","text",this.b,"at",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z))
w.b3p()
w.r.bM(0,B.c3)
w.at=!0},
$S:0}
C.czL.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.czM.prototype={
$0(){var w=this.a
w.f.push(A.E(["role","ai","text",this.b,"at",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z))
w.at=!1},
$S:0}
C.czN.prototype={
$0(){var w,v=this.b,u=A.V(x.N,x.z)
J.aG(u,"role","ai")
J.aG(u,"text",this.c)
J.aG(u,"at",new A.S(Date.now(),0,!1).a5().ac())
w=this.a
if(J.cw(w.b)){w=J.b6(w.b,v.gce3(),x.P)
w=A.B(w,w.$ti.k("aj.E"))
J.aG(u,"phoneActions",w)}v.f.push(u)
v.b3p()},
$S:0}
C.czO.prototype={
$0(){this.a.f.push(A.E(["role","ai","text",y.g,"at",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z))},
$S:0}
C.czP.prototype={
$0(){return this.a.at=!1},
$S:0}
C.czG.prototype={
$1(d){return this.bgV(d)},
bgV(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
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
return A.b(C.aoy(q,new C.r4("cal_"+1000*n,m,l,(o==null?p.bN(36e8):o).bQ(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.ape()
case 4:k.c.I(x.q).f.R(A.b2(null,null,null,B.cZ,null,B.q,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:435}
C.czX.prototype={
$1(d){return this.bgW(d)},
bgW(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.I(x.q).f.R(A.b2(null,null,null,B.cZ,null,B.q,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:435}
C.czH.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=B.d.gcZ(v).Q
v.toString
w.hV(v)},
$S:8}
C.cA9.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
if(v>0)w.a9Z(v-1)},
$S:0}
C.cA2.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.cA5.prototype={
$1(d){var w=this.a
w.m(new C.cA_(w,d))
if(d===0)w.a0y(!0)},
$S:28}
C.cA_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cA3.prototype={
$2$size(d,e){return C.fQQ(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:1635}
C.cA4.prototype={
$0(){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.h2j(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return A.b(H.apo(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cA0(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return A.b(C.aow(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return A.b(p.tv(),$async$$0)
case 15:p.m(new C.cA1(p))
p.a9Z(0)
case 14:u=!1
w=1
break
case 11:w=16
return A.b(p.tv(),$async$$0)
case 16:case 9:case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:61}
C.cA0.prototype={
$2(d,e){return this.bgX(d,e)},
bgX(d,e){var w=0,v=A.j(x.y),u,t=this,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=A.a10(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$2,v)},
$S:117}
C.cA1.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cA7.prototype={
$2(d,e){return B.ab},
$S:36}
C.cA6.prototype={
$2(d,e){var w=null,v=this.a,u=A.d((v.a.c.w?D.a1x:D.a0U)[e],w,w,w,w,w,w,B.q0,w,w,w),t=A.Z(31,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),s=A.Z(89,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
v=v.at?w:new C.czZ(v,e)
return A.mw(w,t,u,w,v,w,w,new A.az(s,1,B.r,-1),w)},
$S:504}
C.czZ.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a1x:D.a0U
w.r.saV(0,v[this.b])
w.mL()
return null},
$S:0}
C.cA8.prototype={
$1(d){var w=this.a
return w.at?null:w.mL()},
$S:2}
C.czo.prototype={
$0(){return this.a.a9Z(0)},
$S:0}
C.czW.prototype={
$0(){return this.a.a9Z(this.b)},
$S:0}
C.czp.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=A.p(v,D.bJM,B.f,v,v,new A.o(v,v,v,v,v,new A.a7(B.a3,B.a7,B.x,A.a([A.Z(51,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),w.b],x.O),v,v),B.a6),v,72,v,v,v,v,v,72)
t=w.c
s=A.d("Start a conversation",v,v,v,v,v,v,A.l(v,v,t?B.c:B.aA,v,v,v,v,v,v,v,v,16,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.av(new A.C(B.Xd,A.v(A.a([u,B.ac,s,B.ao,A.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,A.l(v,v,t?B.ay:B.aX,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v)],x.p),B.m,v,B.e,B.j,0,B.p),v),v,v,v)}if(e<s)return u.bCk(t[e],w.c)
return u.aMQ(A.E(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:39}
C.bWA.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=B.k.O(d)
return new A.S(A.fQ(w>1e11?w:w*1000,0,!0),0,!0).bQ()}v=A.bi(J.k(d))
return v==null?null:v.bQ()},
$S:303}
C.bWz.prototype={
$1(d){A.aN(d)
return(d==null?0:d)/100},
$S:702}
C.bWC.prototype={
$1(d){var w
if(d==null)w=null
else{w=A.bi(J.k(d))
w=w==null?null:w.bQ()}return w},
$S:303}
C.bWB.prototype={
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
s=A.a3w(B.a2d,J.k(s==null?"reimbursement":s))
r=J.q(w,"method")
r=A.a3w(B.a0S,J.k(r==null?"system":r))
q=A.aU(J.q(w,"sourceDetails"))
p=J.q(w,"status")
p=A.a3w(B.Go,J.k(p==null?"approved":p))
o=this.a.$1(J.q(w,"timestamp"))
if(o==null)o=new A.S(Date.now(),0,!1)
return new A.d1(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:595}
C.dsN.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dsO.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dsE.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bl(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dsC.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.a
w=2
return A.b(o.Aj(),$async$$0)
case 2:t=o.d
t===$&&A.c()
s=o.e
s===$&&A.c()
r=o.a.c
q=o.f
q===$&&A.c()
w=3
return A.b(C.fLm(t,s,r,q),$async$$0)
case 3:p=e
w=4
return A.b(A.oT(o.a.c,!1),$async$$0)
case 4:o.kG(p)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsM.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.a8x(),$async$$0)
case 3:q=e
if(q==null){r.kG("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return A.b(A.a5(s,!1).ce(A.ej(new C.dsL(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return A.b(A.oT(r.a.c,!1),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsL.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&A.c()
return new C.Z9(w.b,w.a,u,v,null)},
$S:z+39}
C.dsB.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.hwA(q)?3:4
break
case 3:w=5
return A.b(t.a.Ef(B.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return A.b(C.aW2(q,s.a.c),$async$$0)
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
case 9:s.kG(C.bWE(s.a.c))
w=1
break
case 10:s.kG("That code didn't match anything on your account. Double-check it and try again.")
w=1
break
case 11:s.kG(y.B)
w=1
break
case 12:q=r.b
q.toString
w=14
return A.b(s.zy(q,!0,!0),$async$$0)
case 14:w=1
break
case 13:q=r.b
q.toString
w=15
return A.b(s.aO3(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsA.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=A.bl(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dsD.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.abO(),$async$$0)
case 3:q=e
if(q==null||B.a.i(q).length===0){w=1
break}s=C.h_e(q)
if(s==null){r.kG("Could not read that backup file.")
w=1
break}if(!C.bWD(s,r.a.c,null)){r.kG(C.bWE(r.a.c))
w=1
break}w=4
return A.b(r.bEE(s),$async$$0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsK.prototype={
$1(d){var w=null,v=new A.ar(B.as,$.aw()),u=A.N(d).ax.a===B.H,t=u?B.i3:B.c,s=x.p,r=A.v(A.a([A.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,A.l(w,w,u?B.ad:B.ak,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),B.az,A.aL(w,B.T,!0,w,!0,B.q,w,A.aM(),v,w,w,w,w,w,2,A.br(w,new A.b4(4,A.m(14),B.df),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),B.y,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,B.dM,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.L,w,B.am,w,w,w,w)],s),B.F,w,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bK(!1,B.dd,w,w,!0,w,w,new C.dsI(d),w,w),A.bJ(D.f56,new C.dsJ(d,v),A.bk(B.aU,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.fj4,w)},
$S:19}
C.dsI.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dsJ.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).N(w)
return null},
$S:0}
C.dsF.prototype={
$1(d){return D.fHm},
$S:z+12}
C.dsG.prototype={
$0(){return this.a.Eg(B.a.i(this.b))},
$S:1}
C.dsH.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(C.aW2(t.b,r.a.c),$async$$0)
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
return A.b(r.zy(s,!0,!0),$async$$0)
case 11:w=1
break
case 7:r.kG(C.bWE(r.a.c))
w=1
break
case 8:r.kG("Could not read that QR code for your account.")
w=1
break
case 9:r.kG(y.B)
w=1
break
case 10:s=q.b
s.toString
w=12
return A.b(r.aO3(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsP.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dsT.prototype={
$1(d){this.a.Q1()
return null},
$S:14}
C.dsQ.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dsR.prototype={
$0(){var w=null,v=this.a
A.fI(new A.fA(v.gauG()))
this.b.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d("Code "+v.gauG()+" copied",w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dsS.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dsU.prototype={
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
C.fgn.prototype={
$1(d){return D.fFb},
$S:z+13}
C.fhA.prototype={
$1(d){return new C.adi(this.a,this.b,this.c,null)},
$S:z+14}
C.ePh.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.ePi.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.d1T.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fE()},
$S:8}
C.d1Q.prototype={
$2(d,e){return e.ajm(e.a.toUpperCase())},
$S:1636}
C.d1R.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=B.a.i(w.d.a.a)
A.a5(v,!1).N(w)
return null},
$S:2}
C.d1S.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.bXl.prototype={
$1(d){var w=J.q(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!B.d.b8(D.d68,B.a.gkN(v))},
$S:4}
C.fpu.prototype={
$1(d){return d.a===this.a},
$S:1637}
C.fpv.prototype={
$0(){return B.d.gL(B.BE)},
$S:1638}
C.dze.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.m(new C.dzd(v))
w=v.r
w===$&&A.c()
if(w<=0)v.b2t("Time's up")},
$S:14}
C.dzd.prototype={
$0(){var w=this.a,v=w.r
v===$&&A.c()
w.r=v-1
return v},
$S:0}
C.dz5.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dza.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.m(new C.dz7(w,d,e))},
$S:133}
C.dz7.prototype={
$0(){var w=this.a,v=this.c
w.e=B.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dzb.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.dz6(w))
w.coG(!0)},
$S:0}
C.dz6.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dzc.prototype={
$1(d){this.a.b2t(d)
return null},
$S:2}
C.dz8.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.dz9.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.c3M.prototype={
$1(d){return D.dqo},
$S:z+15}
C.c3L.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fim.prototype={
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
C.fin.prototype={
$2(d,e){var w=A.aN(J.q(d,e))
w=w==null?null:B.k.O(w)
return w==null?0:w},
$S:566}
C.fio.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:225}
C.fwv.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.haz(w,v):C.fR7(w,v)
if(u===3)++w.f
C.aeH(w,this.c,u)
return u},
$S:1640}
C.fwx.prototype={
$0(){return C.haz(this.a,this.b)},
$S:114}
C.fww.prototype={
$0(){return C.fR7(this.a,this.b)},
$S:114}
C.dsp.prototype={
$0(){var w=this.a
if(w.a.c)w.m(new C.dso(w))},
$S:0}
C.dso.prototype={
$0(){this.a.r=1+B.o.F(A.Bn(new A.S(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dsq.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&A.c()
u=u.x
u===$&&A.c()
w=B.k.bw(u*10)
if(w!==v.w)v.m(new C.dsn(v,w))}},
$S:0}
C.dsn.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.c5K.prototype={
$3(d,e,f){var w=null
return A.D(A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,B.I,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.bz,A.f1(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.dt)],x.p),B.m,w,B.e,B.j,0,B.p),1)},
$S:1641}
C.c5J.prototype={
$3(d,e,f){var w=null
return A.d("$"+B.k.aa(e,2),w,w,w,w,w,w,B.oP,w,w,w)},
$S:359}
C.c6b.prototype={
$1(d){return new C.MM(this.a,this.b,!1,null,null)},
$S:z+16}
C.dS0.prototype={
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
o.push(A.p(g,D.bFj,B.f,g,g,new A.o(g,g,A.I(B.aM.j(0.8),B.r,2.5),g,A.a([new A.ad(0,B.G,B.b4.j(0.55),B.cy,18)],n),E.tH,B.a6),g,88,g,g,g,g,g,88))
o.push(B.aO)
o.push(A.nD(B.jh,D.fgR,new C.dRX()))
o.push(B.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(A.d(m,g,g,g,g,g,g,A.l(g,g,B.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,B.cs,g,1.45,!0,g,g,g,g,g,g,g,g),B.L,g,g))
m=this.b
if(m.length!==0){l=B.cr.j(0.12)
k=A.m(18)
j=A.I(B.cr.j(0.45),B.r,1)
i=A.a([A.A(A.a([A.W(D.bzl,B.cr.j(0.95),g,g,g,20),B.ab,A.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,A.l(g,g,B.cr.j(0.95),g,g,g,g,g,g,g,g,13,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),B.m,g,B.e,B.j,0,g,g),B.S,A.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,A.l(g,g,B.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),B.S],p)
B.d.v(i,new A.J(m,new C.dRY(),A.T(m).k("J<1,r>")))
B.d.v(o,A.a([B.aO,A.p(g,A.v(i,B.F,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(l,g,j,k,g,g,B.n),g,g,g,g,B.bB,g,g,1/0)],p))}o.push(B.bv)
m=B.w.j(0.35)
l=A.m(18)
k=A.I(B.b4.j(0.35),B.r,1)
o.push(A.p(g,A.v(A.a([f.avq(B.h4,"Unlimited games with an active plan",B.b7),B.P,f.avq(B.ke,"Weekday check-ins grow your balance",B.b4),B.P,f.avq(B.md,"Compete, bet, and earn points",B.aM)],p),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(m,g,k,l,g,g,B.n),g,g,g,g,B.bB,g,g,1/0))
o.push(B.d5)
l=A.m(16)
n=A.a([new A.ad(0,B.G,B.bA.j(0.45),B.cy,16)],n)
o.push(new A.a6(1/0,g,A.bY(A.dp(D.bIx,D.fct,new C.dRZ(f,a0),A.bk(B.K,g,g,g,B.c,B.Ia,g,B.K,new A.b7(A.m(16),B.Y),g,g,g)),new A.o(g,g,g,l,n,E.tH,B.n),B.bd),g))
o.push(B.P)
n=f.a.e?"Back":"Maybe later"
o.push(A.bK(!1,A.d(n,g,g,g,g,g,g,A.l(g,g,B.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,new C.dS_(f,a0),g,g))
if(f.a.e)o.push(B.b3)
h=A.p(g,A.bv(v,new A.an(B.W,g,B.aa,B.q,A.a([t,u,new A.C(new A.Q(22,r,22,q),A.v(o,B.m,g,B.e,s,0,B.p),g)],p),g),B.aq),B.f,g,g,new A.o(g,g,e,d,w,D.bSn,B.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return A.eE(g,B.K,h,g,g,g,Af.XI,B.d_,g,g,g)},
$S:657}
C.dRX.prototype={
$1(d){return D.bRl.aw(0,d)},
$S:65}
C.dRY.prototype={
$1(d){var w=null
return new A.C(B.eO,A.A(A.a([A.W(A1.ZE,B.cr.j(0.85),w,w,w,14),B.ab,A.D(A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$S:127}
C.dRZ.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{A.a5(this.b,!1).N(null)
w.a.c.$0()}},
$S:0}
C.dS_.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else A.a5(this.b,!1).N(null)},
$S:0}
C.frR.prototype={
$1(d){if(d.gmr())this.a.a=d
return d.gmr()},
$S:493}
C.frE.prototype={
$1(d){$.aT.x1$.push(new C.frD(this.a))},
$S:8}
C.frD.prototype={
$1(d){return this.a.$0()},
$S:8}
C.feE.prototype={
$1(d){return C.haG(this.a,this.b+1)},
$S:8}
C.ftd.prototype={
$2(d,e){var w=A.aI(d,B.bS,x.w).w.a
return new A.a6(w.a,w.b,A.cb(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:163}
C.c6p.prototype={
$1(d){return d.r===this.a},
$S:246}
C.c6q.prototype={
$1(d){var w=$.aPe(),v=w.a
w.sp(0,v+1)
return v},
$S:1643}
C.c6r.prototype={
$1(d){},
$S:31}
C.c6o.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:246}
C.c6n.prototype={
$1(d){return d.f.ca(this.a)},
$S:246}
C.fcN.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.fEL.prototype={
$1(d){return C.a6f(this.a)},
$S:103}
C.fEM.prototype={
$1(d){var w=$.aPe()
w.sp(0,w.a+1)},
$S:27}
C.fEN.prototype={
$1(d){},
$S:31}
C.fEO.prototype={
$1(d){return new A.k9($.aPe(),new C.fEK(this.a,this.b),null,null,x.am)},
$S:1644}
C.fEK.prototype={
$3(d,e,f){var w=this.b
return new A.l3(C.aof(this.a,!1),new C.fEJ(w),w,null,x.gv)},
$S:1645}
C.fEJ.prototype={
$2(d,e){var w=e.b
return new C.ac8(w==null?this.a:w,null)},
$S:z+17}
C.dS3.prototype={
$1(d){return d.c},
$S:246}
C.dS4.prototype={
$1(d){return d.gbdK()},
$S:1646}
C.dS5.prototype={
$2(d,e){return d+e},
$S:85}
C.dS6.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dS8.prototype={
$2(d,e){return B.P},
$S:36}
C.dS7.prototype={
$2(d,e){return new C.ac7(J.q(this.a.c,e),null)},
$S:z+18}
C.dS2.prototype={
$1(d){return d==null?"\u2026":C.bxV(d)},
$S:1647}
C.fER.prototype={
$3(d,e,f){var w=this
return A.rh(new C.ayK(w.a,w.b,w.c,w.d,new C.fEP(d,w.e),new C.fEQ(d,w.f),null))},
$C:"$3",
$R:3,
$S:96}
C.fEP.prototype={
$0(){A.a5(this.a,!1).N(null)
C.hdG(this.b)},
$S:0}
C.fEQ.prototype={
$0(){A.a5(this.a,!1).N(null)
C.hdG(this.b)},
$S:0}
C.d8U.prototype={
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
B.d.v(w,new A.J(t,new C.d8T(),A.T(t).k("J<1,r>")))}t=h.d
t===$&&A.c()
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,A.aI(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?A.a([B.bn,B.fm,B.ec],r):A.a([B.aC,B.eM,B.es],r)
p=A.m(26)
o=A.I(B.c.j(0.4),B.r,2)
n=x.V
m=A.a([new A.ad(6,B.G,(h.a.c?B.dw:B.dE).j(0.5),B.J,36)],n)
l=A.a([],g)
if(h.a.c){k=A.dl()
j=k.a
j.$flags&2&&A.ai(j)
j[11]=0.001
k.jK(-0.35)
r=A.a([Z.ad_,B.rQ],r)
l.push(new A.a6(i,100,new A.an(B.A,i,B.aa,B.f,A.a([A.fr(B.A,A.p(i,D.b2O,B.f,i,i,new A.o(i,i,i,i,A.a([new A.ad(4,B.G,B.cR.j(0.6),B.J,24),new A.ad(0,B.G,B.w.j(0.3),B.dn,12)],n),new A.bR(B.A,0.5,B.x,i,0,r,i,i),B.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.bLL)
l.push(B.az)
l.push(A.d(h.a.d,i,i,i,i,i,i,B.a6P,B.L,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=A.m(18)
k=A.I(B.fm,B.r,4)
B.d.v(l,A.a([B.az,D.f6O,B.P,A.p(i,A.d(r,i,i,i,i,i,i,D.eYB,B.L,i,i),B.f,i,i,new A.o(B.c,i,k,n,i,i,B.n),i,i,i,i,B.Xb,i,i,1/0)],g))}B.d.v(l,A.a([B.ac,A.d(h.a.e,i,i,i,i,i,i,D.f0c,B.L,i,i)],g))
l.push(B.e0)
r=A.D(A.dT(D.f4o,h.a.r,A.de(i,i,i,i,i,i,i,i,i,B.c,i,i,B.cf,i,i,D.aVu,i,i,i,i)),1)
h=h.a
n=h.w
l.push(A.A(A.a([r,B.aw,A.D(A.bJ(F.aOQ,n,A.bk(B.c,i,i,i,h.c?B.fm:B.eM,i,B.cf,i,i,i,i,i)),1)],g),B.m,i,B.e,B.j,0,i,i))
w.push(A.e9(B.A,A.p(i,A.v(l,B.m,i,B.e,B.Q,0,B.p),B.f,i,i,new A.o(i,i,o,p,m,new A.a7(B.ax,B.aD,B.x,q,i,i),B.n),i,i,i,B.a9,B.agD,i,i,s),1+t*0.02,i,i))
return new A.an(B.A,i,B.aa,B.f,w,i)},
$S:110}
C.d8T.prototype={
$1(d){var w=null,v=d.a,u=d.b
return A.ao(w,A.dc(A.eA(B.A,d.d,A.W(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.c80.prototype={
$2(d,e){var w=null,v=this.a,u=C.hw_(A.Km(v.c,v.d))
return A.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1648}
C.c8_.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.bXS.prototype={
$0(){},
$S:0}
C.fbM.prototype={
$1(d){return B.o.u(d)},
$S:76}
C.dL3.prototype={
$0(){return this.a.y=!0},
$S:0}
C.dL4.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.dL5.prototype={
$0(){var w=this.a
return w.w=D.PJ[w.d.aB(5)]},
$S:0}
C.dL6.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.dL7.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.dL8.prototype={
$0(){var w=this.a
return w.m(new C.dL2(w))},
$S:0}
C.dL2.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dL9.prototype={
$0(){var w=this.a
return w.m(new C.dL1(w))},
$S:0}
C.dL1.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dLc.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.dLd.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&B.a.i(t.e.a.a).length===0?B.bn:A.Z(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),r=A.m(10)
t=t.y?u:new C.dLb(t,d)
w=A.m(10)
v=B.k.aa(d,0)
return A.D(new A.C(B.jq,A.aF(!1,B.a1,!0,r,A.aK(!1,w,!0,new A.a6(u,38,A.av(A.d("$"+v,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),B.f,s,0,u,u,u,u,u,B.af),u),1)},
$S:1649}
C.dLb.prototype={
$0(){var w=this.a
return w.m(new C.dLa(w,this.b))},
$S:0}
C.dLa.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bM(0,B.c3)},
$S:0}
C.dSq.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+B.cS.gcu().aI(this.c)},
$S:0}
C.dSr.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.dSm.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=A.m(14),s=u?B.c.j(0.1):B.K,r=A.I(u?D.eH.j(0.5):B.K,B.r,1),q=A.W(e,u?D.eH:B.ay,w,w,w,20)
return A.D(A.aE(w,A.dg(w,A.A(A.a([q,B.bp,A.d(f,w,w,w,w,w,w,A.l(w,w,u?B.c:B.ay,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.ba,B.j,0,w,w),w,w,B.bb,new A.o(s,w,r,t,w,w,B.n),B.a1,w,46,w,w,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dSo(v,d),w,w,w,w,w,w,!1,B.a8),1)},
$S:1650}
C.dSo.prototype={
$0(){var w=this.a
return w.m(new C.dSn(w,this.b))},
$S:0}
C.dSn.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSp.prototype={
$0(){var w=this.a,v=w.d===B.kk?"Cash App tag":"Bitcoin address"
return w.Ik(this.b,v)},
$S:0}
C.dSl.prototype={
$0(){var w=this.a
return w.Ik(w.gaq5(),"Code")},
$S:0}
C.c6R.prototype={
$1(d){return C.hsb(A.a1(d,x.N,x.z))},
$S:z+20}
C.c6S.prototype={
$2(d,e){return d.c.aL(0,e.c)},
$S:z+6}
C.c6O.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.c6P.prototype={
$2(d,e){return d.c.aL(0,e.c)},
$S:z+6}
C.c6Q.prototype={
$1(d){return d.ad()},
$S:z+23}
C.c6T.prototype={
$1(d){var w=d.c
return!w.cY(this.a.bN(-36e8))&&!w.ca(this.b)},
$S:z+7}
C.c_f.prototype={
$1(d){return C.hsc(A.a1(d,x.N,x.z))},
$S:z+24}
C.c_g.prototype={
$2(d,e){return e.b.aL(0,d.b)},
$S:z+8}
C.c_d.prototype={
$1(d){return d.ad()},
$S:z+26}
C.c_e.prototype={
$2(d,e){return e.b.aL(0,d.b)},
$S:z+8}
C.c_i.prototype={
$1(d){var w=d.b
return!w.cY(this.a)&&!w.ca(this.b)},
$S:z+27}
C.c7_.prototype={
$1(d){return d.ad()},
$S:z+28}
C.c6Z.prototype={
$1(d){return C.h1t(A.a1(x.f.a(d),x.N,x.z))},
$S:z+29}
C.c6Y.prototype={
$1(d){return d.ad()},
$S:z+30}
C.c6X.prototype={
$1(d){return C.hvE(A.a1(x.f.a(d),x.N,x.z))},
$S:z+31}
C.c71.prototype={
$1(d){return C.hvD(A.a1(x.f.a(d),x.N,x.z))},
$S:z+32}
C.c72.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+2}
C.c73.prototype={
$1(d){return d.ad()},
$S:z+34}
C.dW5.prototype={
$1(d){return d.b9b(A.bl(d.e,!0,x.u))},
$S:z+36}
C.dW6.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+2}
C.dW_.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dW0.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dVJ.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.J(w,this.b)},
$S:0}
C.dVK.prototype={
$1(d){return new C.OC(this.a,null)},
$S:z+9}
C.dVL.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=B.d.bd(t,new C.dVI(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){B.d.cz(u.d,w)
u.It()}},
$S:0}
C.dVI.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dVX.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(A.E(["role","admin","text",this.b],w,w))},
$S:0}
C.dVY.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(A.E(["role","ai","text",v],t,t))}else{v=t.d
v===$&&A.c()
t.d=C.hVQ(v,w[0],w[3])
t.It()
t=w[2]
if(t==null)t="Created "+J.ac(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(A.E(["role","ai","text",t],w,w))}},
$S:0}
C.dVZ.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=B.d.gcZ(v).Q
v.toString
w.hV(v)}},
$S:8}
C.dVR.prototype={
$1(d){return new C.OC(this.a,null)},
$S:z+9}
C.dVS.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dVQ.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cz(w,this.b)},
$S:0}
C.dVW.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&A.c()
v=B.d.cz(w,s)
B.d.cn(t.d,u.a,v)
t.It()},
$S:0}
C.dVV.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
return new C.ZX(u[w],new C.dVU(v,w),null)},
$S:z+59}
C.dVU.prototype={
$1(d){var w=this.a
return w.m(new C.dVT(w,this.b,d))},
$S:z+40}
C.dVT.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dVN.prototype={
$0(){var w=this.a
return w.m(new C.dVM(w))},
$S:0}
C.dVM.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dVO.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?B.cm:B.aK
return new A.C(B.eO,A.d(t+": "+A.t(s),w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?B.a4:B.cs,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:111}
C.dVP.prototype={
$1(d){return this.a.a0f()},
$S:2}
C.dW4.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.rN:B.c
u=A.m(16)
t=A.m(16)
s=l?B.aK:B.aL
r=w.d
q=A.b0(r).j(0.15)
p=A.m(12)
q=A.p(n,A.W(B.ajg,l?B.bI:B.ak,n,n,n,20),B.f,n,n,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.bR,n,n,n)
p=A.b0(r).j(0.12)
o=A.m(8)
o=A.p(n,A.W(w.c,A.b0(r),n,n,n,18),B.f,n,n,new A.o(p,n,n,o,n,n,B.n),n,n,n,n,B.hu,n,n,n)
r=A.A(A.a([o,B.aw,A.D(A.d(w.b,n,n,n,n,n,n,A.l(n,n,l?B.aP:B.M,n,n,n,n,n,n,n,n,n,n,n,B.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),B.m,n,B.e,B.j,0,n,n)
p=w.e.length
return new A.C(B.db,A.aF(!1,B.a1,!0,u,A.dN(!1,n,n,n,!0,n,n,n,!0,n,new H.asU(q,e,!0,n),n,n,n,n,new C.dW1(m,e),!1,n,n,new A.b7(t,new A.az(s,1,B.r,-1)),n,n,A.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,A.l(n,n,l?B.bI:B.ak,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,A.Bm(n,n,n,new C.dW2(),B.J,new C.dW3(m,e),B.cj,n,x.N),n),B.f,v,0,n,n,n,n,n,B.af),new A.cz(w.a,x.W))},
$S:111}
C.dW3.prototype={
$1(d){var w=this
if(d==="edit")w.a.a8Z(w.b)
if(d==="questions")w.a.XH(w.b)
if(d==="delete")w.a.bHu(w.b)},
$S:2}
C.dW2.prototype={
$1(d){return D.cDW},
$S:126}
C.dW1.prototype={
$0(){return this.a.XH(this.b)},
$S:0}
C.cIB.prototype={
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
return A.aK(!1,s,!0,A.p(s,A.W(d,A.b0(t),s,s,s,s),B.f,s,s,new A.o(q,s,u,v,s,s,B.n),s,s,s,s,B.cj,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cIA(r,d),s,s,s,s,s,s,s)},
$S:1651}
C.cIA.prototype={
$0(){var w=this.a
return w.m(new C.cIy(w,this.b))},
$S:0}
C.cIy.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cIC.prototype={
$1(d){var w=null,v=this.a,u=A.b0(d),t=v.f
t===$&&A.c()
return A.aE(w,A.hp(u,w,t===d?D.bJd:w,w,14),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cIz(v,d),w,w,w,w,w,w,!1,B.a8)},
$S:386}
C.cIz.prototype={
$0(){var w=this.a
return w.m(new C.cIx(w,this.b))},
$S:0}
C.cIx.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cID.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cIE.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=B.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&A.c()
v=v.f
v===$&&A.c()
t=u.cEo(v,w,t)
A.a5(this.b,!1).N(t)
return null},
$S:0}
C.eKm.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return w.push(this.b)},
$S:0}
C.eKn.prototype={
$1(d){return new C.ZW(this.a,null)},
$S:z+41}
C.eKt.prototype={
$2(d,e){return B.P},
$S:36}
C.eKs.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.rN:B.c
u=A.m(14)
t=A.m(14)
s=l?B.aK:B.aL
r=w.d
if(r!=null&&r.length!==0){q=A.m(8)
r=A.bv(q,K.aNV(n,B.bQ,36,B.pr,l?B.bI:B.ak,r,48),B.aq)}else r=A.W(D.Zo,A.b0(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=A.d(q,n,2,B.a2,n,n,n,A.l(n,n,l?B.aP:B.M,n,n,n,n,n,n,n,n,n,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ac(w.c)
o=w.e?" \xb7 Printable":""
return A.aF(!1,B.a1,!0,u,A.dN(!1,n,n,n,!0,n,n,n,!0,n,r,n,n,n,n,new C.eKq(m,w,e),!1,n,n,new A.b7(t,new A.az(s,1,B.r,-1)),n,n,A.d(""+p+" block(s)"+o,n,n,n,n,n,n,A.l(n,n,l?B.bI:B.ak,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,A.aH(n,n,n,n,D.bHE,n,n,n,new C.eKr(m,e),n,n,n,n,n,n),n),B.f,v,0,n,n,n,n,n,B.af)},
$S:78}
C.eKr.prototype={
$0(){var w=this.a
w.m(new C.eKo(w,this.b))
w.avt()},
$S:0}
C.eKo.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cz(w,this.b)},
$S:0}
C.eKq.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.aYM(u.b),$async$$0)
case 2:s=e
if(s!=null){t.m(new C.eKp(t,u.c,s))
t.avt()}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eKp.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eKi.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eKg.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
return new C.Uo(w,"Answer Document",null)},
$S:z+42}
C.eKh.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eKk.prototype={
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
C.eKl.prototype={
$1(d){var w=this.a
return w.m(new C.eKj(w,d))},
$S:9}
C.eKj.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.c6U.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.ftB.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dWG.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.dWm.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,new C.lu("image","",this.b,null))},
$S:0}
C.dWr.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,new C.lu("video","","data:video/mp4;base64,"+B.cS.gcu().aI(this.b),null))},
$S:0}
C.dWp.prototype={
$1(d){var w=null,v=x.p,u=A.v(A.a([A.aL(w,B.T,!1,w,!0,B.q,w,A.aM(),this.a,w,w,w,w,w,2,D.bNB,B.y,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.am,w,w,w,w),A.aL(w,B.T,!1,w,!0,B.q,w,A.aM(),this.b,w,w,w,w,w,2,D.bNA,B.y,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.am,w,w,w,w)],v),B.m,w,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bK(!1,B.dd,w,w,!0,w,w,new C.dWn(d),w,w),A.bJ(D.fgl,new C.dWo(d),w)],v),w,w,w,u,w,w,w,w,D.f3J,w)},
$S:19}
C.dWn.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dWo.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dWq.prototype={
$0(){var w,v=this.a.e
v===$&&A.c()
w=B.a.i(this.b.a.a)
return B.d.J(v,new C.lu("link","",B.a.i(this.c.a.a),w))},
$S:0}
C.dWi.prototype={
$1(d){return B.a.i(d)},
$S:13}
C.dWj.prototype={
$1(d){return d.length!==0},
$S:3}
C.dWk.prototype={
$1(d){return B.a.i(B.a.e8(d,A.af("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.dWl.prototype={
$1(d){return d.length!==0},
$S:3}
C.dWw.prototype={
$0(){var w=this.a.bAT()
A.a5(this.b,!1).N(w)
return null},
$S:0}
C.dWx.prototype={
$0(){return this.a.avu("**","**")},
$S:0}
C.dWy.prototype={
$0(){return this.a.avu("*","*")},
$S:0}
C.dWz.prototype={
$0(){return this.a.avu("__","__")},
$S:0}
C.dWA.prototype={
$0(){return this.a.aWZ("## Section title")},
$S:0}
C.dWB.prototype={
$0(){return this.a.aWZ("\u2022 First point\n\u2022 Second point")},
$S:0}
C.dWC.prototype={
$0(){},
$S:0}
C.dWD.prototype={
$0(){var w=this.a
w.m(new C.dWv(w))},
$S:0}
C.dWv.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,D.dtK)},
$S:0}
C.dWE.prototype={
$0(){var w=this.a
w.m(new C.dWu(w))},
$S:0}
C.dWu.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,D.dtL)},
$S:0}
C.dWF.prototype={
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
return A.CR(u,v,B.alA,w,u,new C.dWt(this.a,d),u)},
$S:z+45}
C.dWt.prototype={
$0(){var w=this.a
return w.m(new C.dWs(w,this.b))},
$S:0}
C.dWs.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.cz(w,this.b.a)},
$S:0}
C.dWf.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.aS4},
$S:0}
C.dWg.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.fGq},
$S:0}
C.dW7.prototype={
$0(){var w=this.a
w.d=D.aS3
w.f=w.e=null},
$S:0}
C.dW8.prototype={
$0(){var w=this.a
w.d=D.aS4
w.f=null},
$S:0}
C.dWh.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+2}
C.dWa.prototype={
$2(d,e){var w=this.a,v=w.gb3q()[e]
return new C.aaH(v,this.b,new C.dW9(w,v),null)},
$S:z+46}
C.dW9.prototype={
$0(){return this.a.c3u(this.b.a)},
$S:0}
C.dWc.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+47}
C.dWe.prototype={
$2(d,e){return B.S},
$S:36}
C.dWd.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.rN:B.c,p=A.m(16),o=A.m(16),n=A.m(16),m=A.I(r?B.aK:B.aL,B.r,1),l=A.a([new A.ad(0,B.G,B.w.j(r?0.28:0.06),B.dA,8)],x.V),k=A.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=A.m(10)
v=A.m(10)
k.push(A.bv(w,K.aNV(v,B.bQ,52,D.Zo,r?B.bI:B.ak,j,52),B.aq))}else{j=u.d.d
w=A.b0(j).j(0.15)
v=A.m(12)
k.push(A.p(t,A.W(D.Zo,A.b0(j),t,t,t,24),B.f,t,t,new A.o(w,t,t,v,t,t,B.n),t,52,t,t,t,t,t,52))}k.push(B.bf)
k.push(A.D(A.d(s.b,t,t,t,t,t,t,A.l(t,t,r?B.aP:B.M,t,t,t,t,t,t,t,t,13,t,t,B.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(A.W(B.eo,r?B.bI:B.ak,t,t,t,22))
return A.aF(!1,B.a1,!0,p,A.aK(!1,o,!0,A.p(t,A.A(k,B.m,t,B.e,B.j,0,t,t),B.f,t,t,new A.o(t,t,m,n,l,t,B.n),t,t,t,t,B.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dWb(u.a,s),t,t,t,t,t,t,t),B.f,q,0,t,t,t,t,t,B.af)},
$S:78}
C.dWb.prototype={
$0(){return this.a.cad(this.b)},
$S:0}
C.c6W.prototype={
$1(d){return new C.aaz(d,this.a,null)},
$S:z+48}
C.cCh.prototype={
$0(){var w=this.a.c,v=w.c,u=A.oh(v==null?w.b:v)
if(u!=null)A.iO(u,B.fj,null)},
$S:0}
C.cCi.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.cCj.prototype={
$1(d){var w=null,v=this.a.d.a,u=A.d("\u2022  ",w,w,w,w,w,w,A.l(w,w,v?B.cm:B.aK,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=B.a.i(d)
return new A.C(B.nG,A.A(A.a([u,A.D(A.d(t,w,w,w,w,w,w,A.l(w,w,v?B.cm:B.aK,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.F,w,B.e,B.j,0,w,w),w)},
$S:127}
C.ddb.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ddd.prototype={
$0(){return this.a.m(new C.ddc(this.b))},
$S:0}
C.ddc.prototype={
$0(){var w=this.a
return w.a.f?w.fZ(0):w.pv(0)},
$S:0}
C.fbw.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.dWU.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.C2)w.z=v
else w.Q=v},
$S:0}
C.dWL.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=B.d.gcZ(v).Q
v.toString
w.lV(v,B.cq,B.eN)},
$S:8}
C.dWN.prototype={
$1(d){return J.q(d,"role")==="ai"},
$S:90}
C.dWO.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.E(["role","user","text",this.b],v,v))
w.d.bM(0,B.c3)
w.r=!0},
$S:0}
C.dWP.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.E(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.dWQ.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+A.t(w.h(d,"text"))},
$S:154}
C.dWR.prototype={
$0(){var w=x.N
return this.a.f.push(A.E(["role","ai","text",this.b],w,w))},
$S:0}
C.dWS.prototype={
$0(){var w=x.N
return this.a.f.push(A.E(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.dWT.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dWM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=A.mz(l,B.bA.j(0.9),l,l,l,l,l,2,l,l)
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
q=new A.a7(B.a3,B.a7,B.x,v?A.a([B.bm,B.M],q):A.a([B.c,B.aP],q),l,l)}p=A.a([new A.ad(0,B.G,(u?B.bA:B.aE).j(0.22),B.jd,14)],x.V)
o=A.I(B.c.j(u?0.2:0.08),B.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=B.c
else v=v?B.aL:B.bh
n=u?13.5:15
m=u?B.bl:B.cD
return new A.bI(t,l,l,A.p(l,A.d(w,l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?B.a4:B.cs,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,new A.aY(0,k.a.a*0.94,0,1/0),new A.o(l,l,o,new A.bp(B.jY,B.jY,new A.aV(s,s),new A.aV(r,r)),p,q,B.n),l,l,l,B.kD,B.j6,l,l,l),l)},
$S:39}
C.dX0.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&A.c()
w=m.x
w===$&&A.c()
v=A.m(22)
u=this.b
t=x.O
s=u?A.a([D.abC,B.M,B.ns],t):A.a([B.qr,B.qm,B.p7],t)
w=A.a([new A.ad(-4,B.G,B.aE.j(0.35+w*0.25),B.dn,28)],x.V)
r=A.I(B.c.j(u?0.08:0.5),B.r,1)
q=A.dl()
p=q.a
p.$flags&2&&A.ai(p)
p[11]=0.001
m=m.x
m===$&&A.c()
q.fu(m*0.08)
q=A.fr(B.A,A.p(o,D.bEn,B.f,o,o,new A.o(o,o,A.I(B.aM.j(0.6),B.r,2),o,o,D.e7J,B.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=A.nD(B.jh,D.fkF,new C.dWY())
p=x.p
m=A.a([A.A(A.a([q,B.bf,A.D(A.v(A.a([m,A.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,A.l(o,o,u?B.aR:B.aX,o,o,o,o,o,o,o,o,10,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),B.F,o,B.e,B.j,0,B.p),1)],p),B.m,o,B.e,B.j,0,o,o),B.ac,A.A(A.a([n.atK(D.C2,"Swahili","\ud83c\uddf9\ud83c\uddff",u),B.ab,n.atK(D.aDN,"English","\ud83c\uddec\ud83c\udde7",u),B.ab,n.atK(D.C3,"Mix","\ud83d\udd25",u)],p),B.m,o,B.e,B.j,0,o,o)],p)
if(n.x!==D.C3){t=A.a([B.P,n.csR(u)],p)
if(n.w){q=n.x===D.C2?D.a28:D.a1m
p=A.T(q).k("J<1,r>")
q=A.B(new A.J(q,new C.dWZ(n,u),p),p.k("aj.E"))
t.push(new A.C(B.kc,A.c_(B.bD,q,B.bt,6,6),o))}B.d.v(m,t)}else{t=A.a([B.bA.j(0.22),B.aE.j(0.12)],t)
q=A.m(12)
p=A.I(B.bA.j(0.45),B.r,1)
m.push(new A.C(B.kc,A.p(o,A.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,A.l(o,o,u?B.ij:B.kA,o,o,o,o,o,o,o,o,10,o,o,B.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),B.f,o,o,new A.o(o,o,p,q,o,new A.a7(B.a3,B.a7,B.x,t,o,o),B.n),o,o,o,o,B.bR,o,o,o),o))}m.push(B.P)
t=x.dc
n=A.B(new A.J(D.d_J,new C.dX_(n,u),t),t.k("aj.E"))
m.push(A.A(n,B.m,o,B.e,B.j,0,o,o))
return A.p(o,A.v(m,B.aj,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,r,v,w,new A.a7(B.ax,B.aD,B.x,s,o,o),B.n),o,o,o,I.afx,I.afM,o,o,o)},
$S:95}
C.dWY.prototype={
$1(d){return D.bRN.aw(0,d)},
$S:65}
C.dWZ.prototype={
$1(d){return this.a.csS(d,this.b)},
$S:z+49}
C.dX_.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aDP?6:0,m=o?5:0,l=A.m(12)
if(o){w=this.b
v=w?B.aE.j(0.45):B.aE.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=B.w.j(w?0.25:0.05)
u=v
v=w
w=u}t=A.m(12)
p=p.r?q:new C.dWX(p,d)
s=C.hx8(d)
if(o)r=B.c
else r=v?B.ad:B.bh
r=A.d(s,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.hx9(d)
if(o)v=B.ad
else v=v?B.c_:B.dz
return A.D(new A.C(new A.Q(0,0,n,0),A.aF(!1,B.a1,!0,l,A.aK(!1,t,!0,new A.C(Q.Lj,A.v(A.a([r,A.d(s,q,q,q,q,q,q,A.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.e,B.j,0,B.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,w,m,q,q,q,q,q,B.af),q),1)},
$S:z+50}
C.dWX.prototype={
$0(){var w=this.a
return w.m(new C.dWW(w,this.b))},
$S:0}
C.dWW.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dX2.prototype={
$0(){var w=this.a
return w.m(new C.dX1(w))},
$S:0}
C.dX1.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dWK.prototype={
$0(){var w=this.a
return w.m(new C.dWJ(w,this.b))},
$S:0}
C.dWJ.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.C3
if(v===D.aDN&&w.Q==null)w.Q=B.d.gL(D.a1m).a},
$S:0}
C.dX3.prototype={
$0(){return this.a.cox(this.b.a)},
$S:0}
C.dWV.prototype={
$0(){return this.a.Il(this.b)},
$S:0}
C.dWH.prototype={
$1(d){return this.a.aX_()},
$S:2}
C.dWI.prototype={
$0(){return this.a.aX_()},
$S:0}
C.fFB.prototype={
$1(d){var w=this
return new C.YG(w.a,w.b,w.c,new C.fFA(w.d),null)},
$S:z+51}
C.fFA.prototype={
$0(){return J.lN(this.a.bc())},
$S:0}
C.dav.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.be_()},
$S:27}
C.daw.prototype={
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
p=q?B.dV:B.h4
o=B.o.F(w,4)
q=q?B.aJ:B.aI
return A.ao(n,A.dc(A.W(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:315}
C.daB.prototype={
$0(){},
$S:0}
C.daA.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&A.c()
w=t.x
w===$&&A.c()
v=B.mz.av(0,B.k.D(w,0,1))
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793)
w=A.dl()
u=w.a
u.$flags&2&&A.ai(u)
u[11]=0.0028
w.fu(t*0.08)
w.jK(0.12)
return A.e9(B.A,A.fr(B.A,e,null,w,!0),0.5+v*0.5,null,null)},
$S:45}
C.dax.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=0.55+r*0.45
r=A.p(t,t,B.f,t,t,new A.o(t,t,t,t,A.a([new A.ad(6,B.G,B.aJ.j(w*0.5),B.J,36)],x.V),t,B.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new A.an(B.A,t,B.aa,B.q,A.a([r,new A.a6(96,96,A.mz(B.c.j(0.08),B.aJ,t,t,t,t,t,6,u/v,t),t),A.d(""+s.a.c,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,38,t,t,B.u,t,t,!0,t,t,t,t,t,A.a([new A.cP(B.aJ.j(w),B.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:110}
C.day.prototype={
$1(d){return D.bRR.aw(0,d)},
$S:65}
C.daz.prototype={
$0(){var w=this.a
w.a.be_()
w.a.e.$0()},
$S:0}
C.c8U.prototype={
$1(d){var w=!1
if(B.a.i(d.b.toLowerCase())===this.a)if(d.d===B.fq)if(d.x===B.ds){w=d.w
w=B.a.i(w==null?"":w)===this.b}return w},
$S:16}
C.c96.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e7k.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.e80.prototype={
$1(d){var w=this.a
if(w.c!=null)w.OW()},
$S:8}
C.e81.prototype={
$1(d){var w=$.aT.p2$
if(w===B.rw||w===B.rx)return
this.a.Ea()},
$S:14}
C.e82.prototype={
$1(d){this.a.cuY()},
$S:14}
C.e7J.prototype={
$0(){this.a.IO(this.b.d,!1)},
$S:0}
C.e7K.prototype={
$0(){},
$S:0}
C.e7L.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.e7M.prototype={
$0(){},
$S:0}
C.e7N.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e7O.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.e7P.prototype={
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
C.e7E.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=A.bl(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=A.bl(v[1],!0,x.N)
w.Oj()
w.a79()},
$S:0}
C.e7l.prototype={
$0(){this.b.IO(this.c.d+this.a.a,!1)},
$S:0}
C.e7F.prototype={
$1(d){var w=d.d
return(w===B.fq||w===B.eK)&&d.x===B.ds},
$S:16}
C.e7G.prototype={
$1(d){return d.a},
$S:168}
C.e7H.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e7I.prototype={
$0(){},
$S:0}
C.e7p.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bl(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=A.bl(v[0],!0,x.N)},
$S:0}
C.e7q.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.e7y.prototype={
$0(){},
$S:0}
C.e7v.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.e7w.prototype={
$0(){var w=this.a,v=A.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e7x.prototype={
$0(){var w=this.a,v=A.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e7z.prototype={
$0(){return this.a.z=!0},
$S:0}
C.e7A.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new A.v6(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.e7B.prototype={
$0(){return this.a.z=!1},
$S:0}
C.e7D.prototype={
$0(){var w=this.a
return w.m(new C.e7C(w))},
$S:0}
C.e7C.prototype={
$0(){return this.a.y=1},
$S:0}
C.e7r.prototype={
$0(){return this.a.y=1},
$S:0}
C.e7s.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.e7T.prototype={
$1(d){return d.a.length===0},
$S:16}
C.e7U.prototype={
$2(d,e){return e.y.aL(0,d.y)},
$S:72}
C.e7Y.prototype={
$0(){var w=this.a
return w.m(new C.e7R(w))},
$S:0}
C.e7R.prototype={
$0(){return this.a.y=1},
$S:0}
C.e7Z.prototype={
$0(){var w=this.a
return w.m(new C.e7Q(w))},
$S:0}
C.e7Q.prototype={
$0(){return this.a.y=2},
$S:0}
C.e8_.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.e7V.prototype={
$2$cloudRequest(d,e){return this.a.aY5(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1653}
C.e7W.prototype={
$0(){return this.a.Ea()},
$S:1}
C.e7X.prototype={
$0(){var w=this.a
return w.m(new C.e7S(w))},
$S:0}
C.e7S.prototype={
$0(){var w=this.a
return w.y=B.o.D(w.y-1,0,2)},
$S:0}
C.e7o.prototype={
$0(){A.eP()
var w=this.a
w.m(new C.e7n(w))},
$S:0}
C.e7n.prototype={
$0(){return this.a.y=0},
$S:0}
C.e7m.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=A.bCH(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.c.j(0.55),B.r,1.2),t,A.a([new A.ad(1,B.G,B.av.j(0.55),B.J,18)],x.V),D.bPW,B.a6),t,t,t,t,t,t,t,t),B.ev,B.te,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=A.a([],w)
for(u=0;u<3;++u)v.push(r.c_s(u))
return new A.an(B.W,t,B.aa,B.q,A.a([q,A.A(v,B.m,t,B.e,B.j,0,t,t)],w),t)},
$S:62}
C.e7u.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
A.eP()
w.m(new C.e7t(w,v))},
$S:0}
C.e7t.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.deZ.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===B.fq||v===B.eK)return!0
if(d.c!==0)v=B.a.t(w,"clock-in daily earnings")||B.a.t(w,"clock-in earnings")
else v=!1
return v},
$S:16}
C.df_.prototype={
$1(d){return new A.S(Date.now(),0,!1)},
$S:659}
C.df0.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new A.S(Date.now(),0,!1)
u=A.dz(C.fMK(v.c,u))
w=this.c?new C.deY(v):null
return v.b5b(this.b,B.pC,D.eH,w,"Today","$"+u,D.eH)},
$S:1655}
C.deY.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.df1.prototype={
$2(d,e){var w=this.a
return w.b5b(this.b,B.jQ,B.c8,w.w,"Balance","$"+A.dz(A.Km(w.c.a,new C.deX(w))),B.ct)},
$S:58}
C.deX.prototype={
$0(){return this.a.c.d},
$S:80}
C.deS.prototype={
$0(){this.a.a.cM0()
return null},
$S:0}
C.deT.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(w,w,w,new C.btd(v,w),B.au)},
$S:67}
C.deU.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b9p(v,!0,B.av,D.oc,w)}else{v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b9o(v,D.oc,w)}return A.b3(w,w,w,v,B.au)},
$S:67}
C.deV.prototype={
$1(d){return new A.S(Date.now(),0,!1)},
$S:659}
C.deW.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new A.S(Date.now(),0,!1)
w=r.a
v=w.a.cKN(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:B.k.D(v/u,0,1)}u=w.d
u===$&&A.c()
s=w.e
s===$&&A.c()
return A.c6(new A.h3(A.a([u,s],x.U)),new C.deR(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1656}
C.deR.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=A.a([],m),k=o.b
if(k)B.d.v(l,A.ip(7,new C.deQ(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&A.c()
v=v.x
v===$&&A.c()
u=o.d
l.push(A.b3(n,n,n,new C.b9n(o.c,v,k,u,D.oc,D.bhL,n),D.eGn))
v=A.I(B.c.j(0.1),B.r,1.2)
if(k)t=B.vf
else t=o.e?B.v7:D.bzz
t=A.W(t,k?D.oc:B.b0,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=A.d(s,n,n,n,n,n,n,A.l(n,n,B.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,B.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+A.dz(w.f&&w.d>0?w.d:o.f)}q=k?D.oc:B.c
w=A.d(w,n,n,n,n,n,n,A.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,B.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=A.m(999)
p=u.j(0.16)
u=A.I(u.j(0.5),B.r,1)
l.push(A.p(n,A.v(A.a([t,B.ao,s,B.at,w,B.P,A.p(n,A.d(o.r,n,n,n,n,n,n,A.l(n,n,k?D.oc:B.oh,n,n,n,n,n,n,n,n,9,n,n,B.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),B.f,n,n,new A.o(p,n,u,q,n,n,B.n),n,n,n,n,B.kF,n,n,n)],m),B.m,n,B.ba,B.j,0,B.p),B.f,n,n,new A.o(B.K,n,v,n,n,n,B.a6),n,176,n,n,n,n,n,176))
return A.av(new A.a6(276,276,new A.an(B.A,n,B.aa,B.f,l,n),n),n,n,n)},
$S:224}
C.deQ.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=B.k.F(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=B.o.F(d,3)
t=B.o.F(d,2)
return A.ao(s,A.e3(A.dc(A.p(s,s,B.f,s,s,new A.o(s,s,s,A.m(40),s,new A.bR(B.A,0.5,B.x,s,0,A.a([D.oc.j(0.38),B.c.j(0.08),B.K],x.O),s,s),B.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),!0,s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:206}
C.dfi.prototype={
$0(){},
$S:0}
C.dfj.prototype={
$0(){},
$S:0}
C.dfk.prototype={
$1(d){return d.x===B.ds},
$S:16}
C.df4.prototype={
$0(){return this.a.a.d.d},
$S:80}
C.df3.prototype={
$0(){var w,v
A.eP()
w=this.a
v=this.b
w.m(new C.df2(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)A.fe(null,x.H)}},
$S:0}
C.df2.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dff.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=A.m(12),q=s?w.b.j(0.18):B.c.j(0.04),p=A.I(s?w.b.j(0.7):B.c.j(0.08),B.r,1)
return A.D(new A.C(B.jq,A.aE(v,A.dg(B.A,A.d("$"+t,v,v,v,v,v,v,A.l(v,v,s?w.b:B.ad,v,v,v,v,v,v,v,v,13,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,B.bb,new A.o(q,v,p,r,v,v,B.n),B.hV,v,38,v,v,v,v,v),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dfh(u,d),v,v,v,v,v,v,!1,B.a8),v),1)},
$S:1658}
C.dfh.prototype={
$0(){A.eP()
var w=this.a
w.m(new C.dfg(w,this.b))},
$S:0}
C.dfg.prototype={
$0(){var w=""+this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.dfe.prototype={
$4$bold$color(d,e,f,g){var w=null,v=A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?B.c:g,t=f?15:13
return new A.C(B.x7,A.A(A.a([v,B.b3,A.d(e,w,w,w,w,w,w,A.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?B.u:B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1659}
C.dfd.prototype={
$1(d){return this.a.m(new C.dfc())},
$S:2}
C.dfc.prototype={
$0(){},
$S:0}
C.df7.prototype={
$1(d){return this.a.aTP(d)&&!A.fUb(d)},
$S:16}
C.df8.prototype={
$2(d,e){return e.y.aL(0,d.y)},
$S:72}
C.df9.prototype={
$0(){return this.a.a.d.d},
$S:80}
C.dfa.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return A.b(x.r.b(s)?s:A.dR(s,x.H),$async$$0)
case 2:if(t.c!=null)t.m(new C.df6())
t.lR("Balance refreshed.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.df6.prototype={
$0(){},
$S:0}
C.dfb.prototype={
$0(){var w=this.a
return w.m(new C.df5(w))},
$S:0}
C.df5.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fpB.prototype={
$2(d,e){return e.y.aL(0,d.y)},
$S:72}
C.fji.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail"),u=!1
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.y(v,this.b)){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fzY.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail")
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fjh.prototype={
$1(d){var w,v,u
if(!C.hSH(d,this.a))return!1
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
C.f94.prototype={
$1(d){var w=this.a
if(B.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:74}
C.fyN.prototype={
$0(){return $.fRN=null},
$S:11}
C.fyO.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.fwI.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.fwJ.prototype={
$0(){var w,v=this.a
$.fRB.W(0,v)
w=C.tG(this.b,v)
if(w!=null)A.PW(A.a([A.a1(w,x.N,x.z)],x._),v)},
$S:0}
C.fB2.prototype={
$1(d){return new C.Zt(this.a,this.b,null)},
$S:z+56}
C.e1A.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.e1D.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.e1E.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.m(new C.e1C(w))},
$S:2}
C.e1C.prototype={
$0(){return this.a.f=""},
$S:0}
C.e1F.prototype={
$1(d){return this.a.aXd()},
$S:2}
C.e1G.prototype={
$0(){var w=this.a
return w.m(new C.e1B(w,this.b))},
$S:0}
C.e1B.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fit.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+B.a.b_(d,1)},
$S:13}
C.fis.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+B.a.b_(d,1)},
$S:13}
C.fz3.prototype={
$1(d){var w,v=x.f
if(v.b(d))return A.a1(d,x.N,x.z)
try{v=A.a1(v.a(d.ad()),x.N,x.z)
return v}catch(w){return A.V(x.N,x.z)}},
$S:12}
C.fz4.prototype={
$1(d){return J.cw(d)},
$S:4}
C.fsZ.prototype={
$1(d){return d.a!=="send_email"},
$S:306}
C.fyv.prototype={
$1(d){var w=null,v=B.w.j(0.35),u=A.m(10),t=A.I(B.b5,B.r,1)
return A.p(B.A,A.d(d,w,w,w,w,w,w,B.jf,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,86,w,B.eQ,w,w,w,72)},
$S:661}
C.caF.prototype={
$1(d){return J.k(d)},
$S:17}
C.caG.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b6(d,new C.caE(),x.S)
w=A.B(w,w.$ti.k("aj.E"))
return w}return A.c2(7,0,!1,x.S)},
$S:662}
C.caE.prototype={
$1(d){var w
if(A.iE(d))w=d
else{w=A.c7(J.k(d),null)
if(w==null)w=0}return w},
$S:445}
C.caH.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b6(d,new C.caD(),x.S)
w=A.B(w,w.$ti.k("aj.E"))
return w}return A.c2(8,0,!1,x.S)},
$S:662}
C.caD.prototype={
$1(d){var w
if(A.iE(d))w=d
else{w=A.c7(J.k(d),null)
if(w==null)w=0}return w},
$S:445}
C.caJ.prototype={
$1(d){return A.bl(d,!0,x.S)},
$S:663}
C.caK.prototype={
$1(d){return A.bl(d,!0,x.S)},
$S:663}
C.caC.prototype={
$1(d){var w=this.a
if(B.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:74}
C.caI.prototype={
$2(d,e){return d+e},
$S:77}
C.caB.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.q(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:77}
C.fk6.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fk0.prototype={
$0(){return this.a.$1(D.pM)},
$S:0}
C.fk1.prototype={
$0(){return this.a.$1(D.pM)},
$S:0}
C.fk2.prototype={
$0(){return this.a.$1(D.pM)},
$S:0}
C.fk3.prototype={
$0(){return this.a.$1(D.pM)},
$S:0}
C.fk4.prototype={
$0(){return this.a.$1(D.pM)},
$S:0}
C.fk5.prototype={
$0(){return this.a.$1(D.pM)},
$S:0}
C.f6r.prototype={
$2(d,e){var w,v,u=this,t=null,s=B.o.an(e,8),r=B.o.F(e,8),q=B.o.F(s+r,2),p=u.a,o=J.q(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.VP:D.b6w
if(o===0)w=t
else{w=x.O
w=o===1?A.a([B.c,B.aL],w):A.a([B.bm,B.w],w)
v=n?B.aM:B.dm
w=A.p(t,t,B.f,t,t,new A.o(t,t,A.I(v,B.r,n?3:1),t,A.a([new A.ad(0,B.G,B.w.j(0.35),B.dA,4)],x.V),new A.bR(B.A,0.5,B.x,t,0,w,t,t),B.a6),t,28,t,t,t,t,t,28)}return A.aE(t,A.p(t,A.av(w,t,t,t),B.f,q,t,t,t,t,t,t,t,t,t,t),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f6q(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,B.a8)},
$S:73}
C.f6q.prototype={
$0(){var w=this,v=w.a,u=v.cQA(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.pM:D.He
w.f.$1(v)}},
$S:0}
C.fiD.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new A.a6(u,u,A.ib(!0,v,v,B.y,R.aM9,new C.fiC(w.a,w.b,w.c,w.d,u),9,v,B.dQ,B.ah,!1),v)},
$S:163}
C.fiC.prototype={
$2(d,e){var w=this,v=null,u=A.m(12),t=A.m(12),s=w.a,r=s.at[e],q=r==="X"?B.aW:B.aC
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.av(A.d(r,v,v,v,v,v,v,A.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fiB(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),B.f,B.fl,0,v,v,v,v,v,B.af)},
$S:78}
C.fiB.prototype={
$0(){var w=this,v=w.a.cQB(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.f5S.prototype={
$1(d){return new A.C(B.jq,C.fwz(d,!1),null)},
$S:271}
C.f5T.prototype={
$1(d){return C.fwz(d,!1)},
$S:1663}
C.f5U.prototype={
$0(){var w=this,v=w.a
v.cAQ(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.f5V.prototype={
$0(){var w=this
w.a.cAR(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.ffQ.prototype={
$1(d){var w=this,v=null,u=d*6
return A.mw(v,B.bm,A.d(""+u,v,v,v,v,v,v,B.cc,v,v,v),B.dk,new C.ffP(w.a,w.b,u,w.c,w.d),v,v,new A.az(B.c.j(0.2),1,B.r,-1),v)},
$S:1664}
C.ffP.prototype={
$0(){var w=this,v=w.a,u=w.b.aB(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.fhK.prototype={
$1(d){return D.d3m[d]},
$S:76}
C.fhL.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=A.a([s.aB(6),s.aB(6),s.aB(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.feA.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.feB.prototype={
$0(){var w=this,v=w.a
if(w.b.aj()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.f6T.prototype={
$0(){var w=this,v=w.a.cGp(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.f6S.prototype={
$1(d){var w,v=null,u=J.q(this.a.fr[5-d],this.b)
if(u===0)w=B.m3
else w=u===1?B.dE:B.r0
return new A.fF(1,A.p(v,v,B.f,v,v,new A.o(w,v,A.I(B.bF,B.r,1),v,v,v,B.a6),v,v,v,B.mV,v,v,v,v),v)},
$S:1665}
C.feN.prototype={
$1(d){var w=this
if(w.a.b8z(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.feO.prototype={
$0(){var w=this
if(w.a.b8z(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.f6l.prototype={
$0(){var w=this
if(w.a.aj()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.foB.prototype={
$1(d){var w=J.q(d,"email")
return B.a.t(B.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.foC.prototype={
$1(d){var w,v=J.a8(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=B.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+B.a.i(J.k(v==null?"":v))+">"},
$S:54}
C.ezw.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aIV.prototype
w.brg=w.a_
w.brf=w.q
w=C.aIW.prototype
w.bri=w.a_
w.brh=w.q
w=C.aIX.prototype
w.brk=w.a_
w.brj=w.q
w=C.aJT.prototype
w.bsi=w.a_
w.bsh=w.q
w=C.aJs.prototype
w.brR=w.q
w=C.aK1.prototype
w.bsr=w.q
w=C.aIY.prototype
w.brl=w.q
w=C.aK9.prototype
w.bsA=w.q
w=C.aJ2.prototype
w.brq=w.q
w=C.aJi.prototype
w.brH=w.q
w=C.aKQ.prototype
w.btg=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.ayI.prototype,"gbMU","bMV",19)
v(q,"gaQj","aQk",1)
v(C.ayH.prototype,"gcrR","a13",1)
v(q=C.ayJ.prototype,"gbSd","bSe",1)
v(q,"gbCA","bCB",1)
v(q=C.avV.prototype,"gcl6","cl7",1)
v(q,"gc9L","Pn",0)
v(q,"gcvL","cvM",1)
v(q,"gco4","mL",0)
w(q,"gce3","ce4",25)
w(q,"gcu8","R5",33)
v(q=C.aAP.prototype,"gbL1","Wz",0)
v(q,"gc02","Y0",0)
v(q,"gc0_","Y_",0)
v(q,"gc00","abN",0)
v(q,"gc01","On",0)
v(C.ay6.prototype,"gc03","c04",1)
u(C,"hZT","hvl",58)
t(C,"fUi",0,null,["$1","$0"],["he_",function(){return C.he_(null)}],3,0)
t(C,"bB8",0,null,["$1","$0"],["hdZ",function(){return C.hdZ(null)}],3,0)
v(C.Mf.prototype,"gDV","c6Y",1)
v(C.aBA.prototype,"gcln","Al",0)
v(q=C.aBR.prototype,"gca4","Pp",0)
v(q,"gceL","a_h",0)
v(q,"gc3o","c3p",1)
v(q=C.aC2.prototype,"gc3t","acI",0)
v(q,"gbwi","a7_",0)
v(q,"gclB","a0f",0)
s(q,"gc7s","c7t",35)
v(C.aE0.prototype,"gbwK","a71",1)
v(q=C.aE_.prototype,"gc3s","acH",0)
v(q,"gc92","adL",0)
v(q=C.aC4.prototype,"gbVU","aaD",0)
v(q,"gbVW","Xc",0)
v(q,"gbVV","aaE",0)
v(q=C.aC3.prototype,"gbz6","bz7",1)
v(q,"gbz8","bz9",1)
v(C.aC5.prototype,"gbEP","bEQ",1)
v(C.az2.prototype,"gc3v","c3w",1)
v(q=C.aCs.prototype,"gaX7","c3L",1)
r(q,"gaY3",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["ado","aw4","aY5","aY4"],52,0,0)
r(q,"gc6G",0,4,null,["$4"],["c6H"],53,0,0)
v(q,"gc8M","Zr",0)
v(q,"gc9C","adS",0)
v(q,"gc9y","adQ",0)
v(q,"gbYO","abn",0)
w(C.azP.prototype,"gbXD","bXE",54)
w(q=C.azR.prototype,"gct_","ct0",55)
v(q,"gcrI","crJ",1)
v(q,"gcze","czf",1)
v(C.aCf.prototype,"gc45","aXd",1)
v(C.aD3.prototype,"gaXF","avS",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.j2,[C.cp8,C.cp5,C.cp6,C.cp7,C.cp4,C.eVq,C.eVo,C.eVs,C.eVp,C.fd5,C.d6Z,C.d79,C.d7h,C.d7i,C.d7k,C.d7c,C.d7a,C.d7b,C.d7d,C.d7e,C.d74,C.d75,C.d73,C.d77,C.d78,C.d71,C.d70,C.d7m,C.d7p,C.dKY,C.dKX,C.dKZ,C.dKW,C.dKV,C.d6T,C.d6W,C.d6X,C.d6V,C.d6U,C.d8L,C.d8M,C.d8N,C.d80,C.d81,C.d8v,C.d8g,C.d8h,C.d8i,C.d8j,C.d8k,C.d7t,C.d8_,C.d8w,C.d8F,C.d8t,C.d8s,C.d7Y,C.d7Z,C.d8B,C.d8C,C.d7v,C.d7w,C.d89,C.d8a,C.d8b,C.d88,C.d8l,C.d8m,C.d8n,C.d8o,C.d8p,C.d8q,C.d8z,C.d8c,C.d8d,C.d8e,C.d8f,C.d8D,C.d8E,C.d7x,C.d7y,C.d7z,C.d7A,C.d8x,C.d8y,C.d87,C.d8r,C.d85,C.d8G,C.d8H,C.d8I,C.d82,C.d7M,C.d7L,C.d7K,C.d7Q,C.d7J,C.d7H,C.d7C,C.d7F,C.d7B,C.d7V,C.d7W,C.d7D,C.dch,C.czv,C.czl,C.czm,C.czF,C.czC,C.czD,C.czE,C.czx,C.czw,C.czn,C.czy,C.czY,C.czU,C.czT,C.czt,C.czu,C.czq,C.czB,C.czJ,C.czK,C.czL,C.czM,C.czN,C.czO,C.czP,C.cA9,C.cA2,C.cA_,C.cA4,C.cA1,C.czZ,C.czo,C.czW,C.dsN,C.dsO,C.dsE,C.dsC,C.dsM,C.dsB,C.dsA,C.dsD,C.dsI,C.dsJ,C.dsG,C.dsH,C.dsP,C.dsQ,C.dsR,C.dsS,C.ePh,C.ePi,C.d1S,C.fpv,C.dzd,C.dz5,C.dz7,C.dzb,C.dz6,C.dz8,C.dz9,C.c3L,C.fwx,C.fww,C.dsp,C.dso,C.dsq,C.dsn,C.dRZ,C.dS_,C.dS6,C.fEP,C.fEQ,C.bXS,C.dL3,C.dL4,C.dL5,C.dL6,C.dL7,C.dL8,C.dL2,C.dL9,C.dL1,C.dLc,C.dLb,C.dLa,C.dSq,C.dSr,C.dSo,C.dSn,C.dSp,C.dSl,C.dW_,C.dW0,C.dVJ,C.dVL,C.dVX,C.dVY,C.dVS,C.dVQ,C.dVW,C.dVT,C.dVN,C.dVM,C.dW1,C.cIA,C.cIy,C.cIz,C.cIx,C.cID,C.cIE,C.eKm,C.eKr,C.eKo,C.eKq,C.eKp,C.eKi,C.eKh,C.eKk,C.eKj,C.dWm,C.dWr,C.dWn,C.dWo,C.dWq,C.dWw,C.dWx,C.dWy,C.dWz,C.dWA,C.dWB,C.dWC,C.dWD,C.dWv,C.dWE,C.dWu,C.dWt,C.dWs,C.dWf,C.dWg,C.dW7,C.dW8,C.dW9,C.dWb,C.cCh,C.ddb,C.ddd,C.ddc,C.dWU,C.dWO,C.dWP,C.dWR,C.dWS,C.dWT,C.dWX,C.dWW,C.dX2,C.dX1,C.dWK,C.dWJ,C.dX3,C.dWV,C.dWI,C.fFA,C.daB,C.daz,C.e7k,C.e7J,C.e7K,C.e7L,C.e7M,C.e7O,C.e7P,C.e7E,C.e7l,C.e7I,C.e7p,C.e7q,C.e7y,C.e7v,C.e7w,C.e7x,C.e7z,C.e7A,C.e7B,C.e7D,C.e7C,C.e7r,C.e7s,C.e7Y,C.e7R,C.e7Z,C.e7Q,C.e8_,C.e7W,C.e7X,C.e7S,C.e7o,C.e7n,C.e7u,C.e7t,C.deY,C.deX,C.deS,C.dfi,C.dfj,C.df4,C.df3,C.df2,C.dfh,C.dfg,C.dfc,C.df9,C.dfa,C.df6,C.dfb,C.df5,C.fyN,C.fwJ,C.e1A,C.e1D,C.e1C,C.e1G,C.e1B,C.fk0,C.fk1,C.fk2,C.fk3,C.fk4,C.fk5,C.f6q,C.fiB,C.f5U,C.f5V,C.ffP,C.fhL,C.feB,C.f6T,C.feO,C.f6l,C.ezw])
u(A.hS,[C.cp9,C.eVr,C.fti,C.fta,C.fd2,C.fd1,C.fd4,C.d7r,C.d7s,C.d7g,C.d7f,C.d7j,C.d72,C.d76,C.d7l,C.dL0,C.d6Y,C.d8O,C.d8P,C.d8Q,C.d8R,C.d8S,C.d8u,C.d8A,C.d7u,C.d8K,C.d8J,C.d7N,C.d7O,C.d7P,C.d7R,C.d7T,C.dci,C.cAa,C.czA,C.czz,C.czS,C.czV,C.czR,C.czr,C.czI,C.czG,C.czX,C.czH,C.cA5,C.cA3,C.cA8,C.bWA,C.bWz,C.bWC,C.bWB,C.dsL,C.dsK,C.dsF,C.dsT,C.dsU,C.fgn,C.fhA,C.d1T,C.d1R,C.bXl,C.fpu,C.dze,C.dzc,C.c3M,C.fim,C.fwv,C.c5K,C.c5J,C.c6b,C.dRX,C.dRY,C.frR,C.frE,C.frD,C.feE,C.c6p,C.c6q,C.c6r,C.c6o,C.c6n,C.fcN,C.fEL,C.fEM,C.fEN,C.fEO,C.fEK,C.dS3,C.dS4,C.dS2,C.fER,C.d8T,C.c8_,C.fbM,C.dLd,C.dSm,C.c6R,C.c6O,C.c6Q,C.c6T,C.c_f,C.c_d,C.c_i,C.c7_,C.c6Z,C.c6Y,C.c6X,C.c71,C.c73,C.dW5,C.dVK,C.dVI,C.dVZ,C.dVR,C.dVV,C.dVU,C.dVP,C.dW3,C.dW2,C.cIB,C.cIC,C.eKn,C.eKg,C.eKl,C.c6U,C.ftB,C.dWG,C.dWp,C.dWi,C.dWj,C.dWk,C.dWl,C.dWF,C.c6W,C.cCi,C.cCj,C.fbw,C.dWL,C.dWN,C.dWQ,C.dWY,C.dWZ,C.dX_,C.dWH,C.fFB,C.dav,C.day,C.c8U,C.c96,C.e80,C.e81,C.e82,C.e7N,C.e7F,C.e7G,C.e7H,C.e7T,C.e7V,C.deZ,C.df_,C.deV,C.deQ,C.dfk,C.dff,C.dfe,C.dfd,C.df7,C.fji,C.fzY,C.fjh,C.f94,C.fyO,C.fwI,C.fB2,C.e1E,C.e1F,C.fit,C.fis,C.fz3,C.fz4,C.fsZ,C.fyv,C.caF,C.caG,C.caE,C.caH,C.caD,C.caJ,C.caK,C.caC,C.fk6,C.f5S,C.f5T,C.ffQ,C.fhK,C.feA,C.f6S,C.feN,C.foB,C.foC])
t(C.bpn,A.iN)
u(A.ag,[C.EG,C.ajN,C.aBz,C.ajM,C.ajO,C.akE,C.ah1,C.amb,C.Z9,C.Za,C.Yh,C.amG,C.ama,C.MM,C.ayK,C.anD,C.aog,C.Un,C.OC,C.ZX,C.ZW,C.Uo,C.aoz,C.azC,C.aoC,C.YG,C.apa,C.azO,C.azQ,C.Zt,C.aqs])
u(A.ah,[C.aGv,C.aIW,C.aJT,C.aIV,C.aIX,C.beH,C.avV,C.aAP,C.bh6,C.bh7,C.ay6,C.bhd,C.aJs,C.aK1,C.aIY,C.aBA,C.aBR,C.aC2,C.b8V,C.aE0,C.aE_,C.aC4,C.aC3,C.beV,C.aK9,C.aJ2,C.bv9,C.aJi,C.azR,C.aCf,C.aKQ])
u(A.kc,[C.eVt,C.fd3,C.d7_,C.d7q,C.d7o,C.d7n,C.dL_,C.d86,C.d84,C.d83,C.d7I,C.d7S,C.d7G,C.d7U,C.d7E,C.d7X,C.czQ,C.czs,C.cA0,C.cA7,C.cA6,C.czp,C.d1Q,C.dza,C.fin,C.fio,C.dS0,C.ftd,C.fEJ,C.dS5,C.dS8,C.dS7,C.d8U,C.c80,C.c6S,C.c6P,C.c_g,C.c_e,C.c72,C.dW6,C.dVO,C.dW4,C.eKt,C.eKs,C.dWh,C.dWa,C.dWc,C.dWe,C.dWd,C.dWM,C.dX0,C.daw,C.daA,C.dax,C.e7U,C.e7m,C.df0,C.df1,C.deT,C.deU,C.deW,C.deR,C.df8,C.fpB,C.caI,C.caB,C.f6r,C.fiD,C.fiC])
t(C.au7,C.EG)
u(A.aC,[C.qv,C.acx,C.Mf,C.HW,C.r4,C.r5,C.lu,C.ie,C.i0,C.b74,C.d_2,C.dda,C.rb,C.Up,C.MZ,C.pB,C.aYs,C.oS,C.apw])
t(C.ayI,C.aIW)
t(C.bhy,C.aJT)
t(C.ayH,C.aIV)
t(C.ayJ,C.aIX)
u(A.m_,[C.V9,C.azD,C.apn,C.I0,C.E4])
u(A.au,[C.a_v,C.bpT,C.adi,C.Pa,C.a5z,C.ME,C.aoa,C.ac8,C.ac7,C.aZi,C.azB,C.aaH,C.aYP,C.aaz,C.azP])
t(C.bh4,C.aJs)
t(C.bhK,C.aK1)
t(C.bdq,C.aIY)
t(C.aC5,C.aK9)
t(C.az2,C.aJ2)
t(C.aCs,C.bv9)
t(C.bfD,C.aJi)
u(A.mC,[C.b9p,C.b9o,C.b9n,C.b8Q,C.btd,C.bof])
t(C.aD3,C.aKQ)
w(C.aIV,C.Mf)
w(C.aIW,C.Mf)
w(C.aIX,C.Mf)
w(C.aJT,C.Mf)
w(C.aJs,A.eR)
w(C.aK1,A.c8)
w(C.aIY,A.c8)
w(C.aK9,A.c8)
w(C.aJ2,A.eR)
w(C.aJi,A.eR)
v(C.bv9,A.eu)
w(C.aKQ,A.c8)})()
A.jR(b.typeUniverse,JSON.parse('{"bpn":{"iN":[]},"EG":{"ag":[],"r":[]},"aGv":{"ah":["EG<1,2>"]},"au7":{"EG":["1","hB<1>"],"ag":[],"r":[],"EG.T":"1","EG.S":"hB<1>"},"ajN":{"ag":[],"r":[]},"aBz":{"ag":[],"r":[]},"ajM":{"ag":[],"r":[]},"ajO":{"ag":[],"r":[]},"akE":{"ag":[],"r":[]},"ah1":{"ag":[],"r":[]},"ayI":{"ah":["ajN"]},"bhy":{"ah":["aBz"]},"ayH":{"ah":["ajM"]},"ayJ":{"ah":["ajO"]},"beH":{"ah":["akE"]},"avV":{"ah":["ah1"]},"amb":{"ag":[],"r":[]},"Z9":{"ag":[],"r":[]},"Za":{"ag":[],"r":[]},"adi":{"au":[],"r":[]},"Yh":{"ag":[],"r":[]},"aAP":{"ah":["amb"]},"a_v":{"au":[],"r":[]},"bpT":{"au":[],"r":[]},"bh6":{"ah":["Z9"]},"bh7":{"ah":["Za"]},"Pa":{"au":[],"r":[]},"ay6":{"ah":["Yh"]},"amG":{"ag":[],"r":[]},"bhd":{"ah":["amG"]},"a5z":{"au":[],"r":[]},"ama":{"ag":[],"r":[]},"bh4":{"ah":["ama"]},"ME":{"au":[],"r":[]},"aoa":{"au":[],"r":[]},"MM":{"ag":[],"r":[]},"bhK":{"ah":["MM"]},"ac8":{"au":[],"r":[]},"ac7":{"au":[],"r":[]},"ayK":{"ag":[],"r":[]},"bdq":{"ah":["ayK"]},"aZi":{"au":[],"r":[]},"anD":{"ag":[],"r":[]},"aBA":{"ah":["anD"]},"aog":{"ag":[],"r":[]},"aBR":{"ah":["aog"]},"Un":{"ag":[],"r":[]},"OC":{"ag":[],"r":[]},"ZX":{"ag":[],"r":[]},"ZW":{"ag":[],"r":[]},"aC2":{"ah":["Un"]},"b8V":{"ah":["OC"]},"aE0":{"ah":["ZX"]},"aE_":{"ah":["ZW"]},"Uo":{"ag":[],"r":[]},"aC4":{"ah":["Uo"]},"aoz":{"ag":[],"r":[]},"aaH":{"au":[],"r":[]},"aaz":{"au":[],"r":[]},"azC":{"ag":[],"r":[]},"aC3":{"ah":["aoz"]},"azB":{"au":[],"r":[]},"aYP":{"au":[],"r":[]},"beV":{"ah":["azC"]},"aoC":{"ag":[],"r":[]},"aC5":{"ah":["aoC"]},"YG":{"ag":[],"r":[]},"az2":{"ah":["YG"]},"apa":{"ag":[],"r":[]},"azO":{"ag":[],"r":[]},"azQ":{"ag":[],"r":[]},"aCs":{"ah":["apa"],"eu":[]},"azP":{"au":[],"r":[]},"bfD":{"ah":["azO"]},"b9p":{"aB":[]},"b9o":{"aB":[]},"b9n":{"aB":[]},"azR":{"ah":["azQ"]},"b8Q":{"aB":[]},"btd":{"aB":[]},"Zt":{"ag":[],"r":[]},"aCf":{"ah":["Zt"]},"bof":{"aB":[]},"aqs":{"ag":[],"r":[]},"aD3":{"ah":["aqs"]}}'))
A.Pl(b.typeUniverse,JSON.parse('{"Mf":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=A.ax
return{dw:w("mx<w?>"),gS:w("nV"),o:w("d1"),g5:w("wF"),M:w("eV<n>"),k:w("S"),gv:w("l3<ak<j4>>"),gh:w("l3<n>"),gH:w("l3<G>"),r:w("ay<~>"),dk:w("a0"),fw:w("P<nV>"),E:w("P<d1>"),V:w("P<ad>"),O:w("P<w>"),A:w("P<a0>"),R:w("P<n4>"),B:w("P<ak<G>>"),m:w("P<a4<n,n>>"),_:w("P<a4<n,@>>"),b:w("P<r4>"),x:w("P<r5>"),gi:w("P<j4>"),a:w("P<lu>"),Y:w("P<i0>"),v:w("P<ie>"),dA:w("P<HW>"),F:w("P<rb>"),Z:w("P<kj>"),g:w("P<hm>"),gK:w("P<+at,details,id(S,n,n)>"),C:w("P<cP>"),s:w("P<n>"),G:w("P<iN>"),eO:w("P<eo>"),d9:w("P<eS>"),p:w("P<r>"),n:w("P<O>"),t:w("P<G>"),U:w("P<aB?>"),d4:w("P<n?>"),ck:w("ak<r4>"),e:w("ak<r5>"),ac:w("ak<j4>"),dZ:w("ak<lu>"),I:w("ak<i0>"),j:w("ak<@>"),L:w("ak<G>"),eq:w("a4<n,n>"),P:w("a4<n,@>"),f:w("a4<@,@>"),cl:w("cQ<n,C>"),aS:w("J<a0,rW>"),dc:w("J<I0,bE>"),dv:w("J<n,n>"),bL:w("J<O,bE>"),a3:w("J<G,bE>"),gN:w("J<G,pq>"),w:w("iy"),b1:w("r4"),Q:w("r5"),bP:w("lu"),i:w("i0"),u:w("ie"),gp:w("Up"),J:w("MZ"),D:w("pB"),an:w("kj"),c:w("cn"),K:w("aC"),d:w("ji<n>"),di:w("+outcome,snapshot(V9,a4W?)"),ee:w("+after,before(O,O)"),et:w("+categories,error,message,replaceId(ak<i0>,n?,n?,n?)"),cz:w("Eu"),bJ:w("dA<n>"),N:w("n"),e7:w("bn<O>"),W:w("cz<n>"),am:w("k9<G>"),cc:w("a2<n>"),aM:w("e6<d1>"),bG:w("e6<O>"),l:w("r"),gm:w("qv"),ec:w("acx"),q:w("mR"),y:w("R"),gR:w("O"),z:w("@"),S:w("G"),eG:w("d1?"),cJ:w("S?"),gw:w("ak<a4<n,@>>?"),bM:w("ak<@>?"),h:w("a4<n,@>?"),X:w("aC?"),gE:w("+code,qrPayload(n,n)?"),bY:w("+isLive,ownerEmail,snapshotJson(R,n,n)?"),T:w("n?"),cD:w("O?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aV_=new A.bp(B.bE,B.id,B.bE,B.id)
D.eH=new A.w(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,B.t)
D.aVs=new A.az(D.eH,1,B.r,-1)
D.aVu=new A.az(B.ad,2,B.r,-1)
D.aVx=new A.az(B.aU,2,B.r,-1)
D.aVz=new A.az(B.cm,0.8,B.r,-1)
D.aVP=new A.az(B.aM,2,B.r,-1)
D.aVW=new A.az(B.ff,1.6,B.r,-1)
D.aWM=new A.aY(0,330,0,1/0)
D.aWS=new A.aY(0,176,0,1/0)
D.aWT=new A.aY(0,1/0,0,260)
D.aXa=new A.aY(90,1/0,0,1/0)
D.aZX=new A.ad(0,B.G,B.dm,B.J,4)
D.cMV=w([D.aZX],x.V)
D.aXo=new A.o(B.c,null,null,null,D.cMV,null,B.a6)
D.cHd=w([D.eH,B.aZ],x.O)
D.bSR=new A.a7(B.a3,B.a7,B.x,D.cHd,null,null)
D.aXC=new A.o(null,null,null,null,null,D.bSR,B.a6)
D.aXH=new A.o(B.bc,null,null,null,null,null,B.a6)
D.b8C=new A.w(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,B.t)
D.d0u=w([P.abf,D.b8C],x.O)
D.bRX=new A.a7(B.b1,B.b6,B.x,D.d0u,null,null)
D.aXY=new A.o(null,null,null,B.lV,null,D.bRX,B.n)
D.bf2=new A.w(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,B.t)
D.db2=w([D.bf2,M.ada],x.O)
D.bR9=new A.a7(B.b1,B.b6,B.x,D.db2,null,null)
D.aYn=new A.o(null,null,null,B.ry,null,D.bR9,B.n)
D.cXF=w([B.aE,B.bA],x.O)
D.bRE=new A.a7(B.a3,B.a7,B.x,D.cXF,null,null)
D.aYt=new A.o(null,null,null,null,null,D.bRE,B.a6)
D.eUc=new A.F(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fca=new A.x("\ud83c\udf89",null,D.eUc,null,null,null,null,null,null,null,null,null)
D.b2O=new A.cq(B.A,null,null,D.fca,null)
D.b46=new A.w(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,B.t)
D.aaB=new A.w(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,B.t)
D.b6w=new A.w(1,0.8431372549019608,0.8,0.7843137254901961,B.t)
D.b6A=new A.w(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,B.t)
D.oc=new A.w(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,B.t)
D.rN=new A.w(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,B.t)
D.abC=new A.w(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,B.t)
D.b8i=new A.w(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,B.t)
D.Vq=new A.w(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,B.t)
D.wI=new A.w(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,B.t)
D.b9z=new A.w(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,B.t)
D.VP=new A.w(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,B.t)
D.acS=new A.w(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,B.t)
D.bdj=new A.w(1,0.9529411764705882,0.9411764705882353,1,B.t)
D.bdp=new A.w(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,B.t)
D.add=new A.w(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,B.t)
D.ads=new A.w(1,0,0.8392156862745098,0.30980392156862746,B.t)
D.beD=new A.w(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,B.t)
D.beI=new A.w(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,B.t)
D.bfA=new A.w(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,B.t)
D.Wp=new A.w(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,B.t)
D.bgy=new A.w(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,B.t)
D.bh1=new A.w(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,B.t)
D.Wx=new A.w(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,B.t)
D.bhL=new A.w(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,B.t)
D.aeu=new A.a2T(2,"active")
D.blz=new A.b9(42e5)
D.blC=new A.b9(53e4)
D.blE=new A.b9(58e4)
D.blI=new A.b9(82e4)
D.bmw=new A.Q(0,30,0,30)
D.bmE=new A.Q(0,4,0,8)
D.bmH=new A.Q(0,8,12,8)
D.bnj=new A.Q(12,0,12,88)
D.bnq=new A.Q(12,11,12,10)
D.bnN=new A.Q(13,10,12,10)
D.bnV=new A.Q(14,10,14,2)
D.bo6=new A.Q(14,14,10,14)
D.boB=new A.Q(16,12,16,96)
D.boG=new A.Q(16,14,16,8)
D.boK=new A.Q(16,16,16,96)
D.boL=new A.Q(16,18,16,16)
D.boP=new A.Q(16,4,16,10)
D.bpK=new A.Q(18,6,18,40)
D.bpM=new A.Q(18,8,18,130)
D.bpZ=new A.Q(20,10,20,20)
D.bqb=new A.Q(20,18,20,18)
D.bqf=new A.Q(20,20,20,22)
D.bqC=new A.Q(22,22,22,16)
D.brg=new A.Q(2,0,2,10)
D.brZ=new A.Q(4,8,12,4)
D.bsb=new A.Q(6,1,6,1)
D.bsd=new A.Q(6,4,0,0)
D.bsg=new A.Q(6,6,12,4)
D.bsC=new A.Q(8,4,12,8)
D.ffz=new A.x("Activity",null,B.fW,null,null,null,null,null,null,null,null,null)
D.bum=new A.bE(1,B.bi,D.ffz,null)
D.fnv=new A.x("Game Receipts",null,A3.vU,null,null,null,null,null,null,null,null,null)
D.f7v=new A.x("Your last 59 games \xb7 kept for 7 days",null,Q.aNV,null,null,null,null,null,null,null,null,null)
D.cDE=w([D.fnv,D.f7v],x.p)
D.biL=new A.fl(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cDE,null)
D.bup=new A.bE(1,B.bi,D.biL,null)
D.bxn=new A.a0(58607,"MaterialIcons",!1)
D.Zo=new A.a0(62178,"MaterialIcons",!1)
D.byb=new A.a0(62410,"MaterialIcons",!1)
D.bzl=new A.a0(63258,"MaterialIcons",!1)
D.bzr=new A.a0(63304,"MaterialIcons",!1)
D.bzs=new A.a0(63306,"MaterialIcons",!1)
D.bzz=new A.a0(63330,"MaterialIcons",!1)
D.akL=new A.a0(984777,"MaterialIcons",!1)
D.bC1=new A.ae(B.Fj,13,B.ad,null,null,null)
D.bC9=new A.ae(B.jt,13,B.ph,null,null,null)
D.akV=new A.ae(B.lb,null,B.c,null,null,null)
D.bDH=new A.ae(B.Ba,34,B.aJ,null,null,null)
D.bEe=new A.ae(B.Fn,19,B.c,null,null,null)
D.byu=new A.a0(62804,"MaterialIcons",!1)
D.bEn=new A.ae(D.byu,24,B.aM,null,null,null)
D.bEP=new A.ae(B.AX,28,B.bj,null,null,null)
D.bFj=new A.ae(B.akp,42,B.c,null,null,null)
D.bFs=new A.ae(B.a_e,30,B.c,null,null,null)
D.bG3=new A.ae(B.fJ,null,B.c,null,null,null)
D.bGo=new A.ae(B.jt,16,B.c,null,null,null)
D.bGZ=new A.ae(B.qO,13,B.c,null,null,null)
D.bH7=new A.ae(B.lb,18,B.c,null,null,null)
D.bHE=new A.ae(B.v6,null,B.dE,null,null,null)
D.bIi=new A.ae(B.ou,28,B.c,null,null,null)
D.bIx=new A.ae(B.n1,22,null,null,null,null)
D.bIT=new A.ae(B.qK,null,null,null,null,null)
D.bJ4=new A.ae(B.iO,28,B.c,null,null,null)
D.bJ6=new A.ae(B.cx,null,B.aR,null,null,null)
D.bJd=new A.ae(B.Z5,14,B.c,null,null,null)
D.bJM=new A.ae(B.MM,36,B.aI,null,null,null)
D.bJT=new A.ae(B.ov,16,B.c,null,null,null)
D.bK7=new A.ae(B.ee,null,null,null,null,null)
D.b8X=new A.w(1,0.23137254901960785,0.16470588235294117,0,B.t)
D.bKG=new A.ae(B.dV,9,D.b8X,null,null,null)
D.bAo=new A.a0(983146,"MaterialIcons",!1)
D.bKX=new A.ae(D.bAo,null,B.aM,null,null,null)
D.bLr=new A.ae(B.v9,28,D.eH,null,null,null)
D.bLw=new A.ae(B.tr,null,B.ff,null,null,null)
D.bLB=new A.ae(B.hW,20,D.eH,null,null,null)
D.bAJ=new A.a0(983377,"MaterialIcons",!1)
D.bLL=new A.ae(D.bAJ,64,B.c,null,null,null)
D.bMg=new A.ae(B.h5,24,B.c,null,null,null)
D.bNa=new A.e_(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bNl=new A.e_(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bNA=new A.e_(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bNB=new A.e_(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.b7e=new A.w(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,B.t)
D.b9T=new A.w(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,B.t)
D.b9A=new A.w(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,B.t)
D.d0M=w([D.b7e,D.b9T,D.b9A],x.O)
D.bP5=new A.a7(B.ax,B.aD,B.x,D.d0M,null,null)
D.d5h=w([B.bn,B.aZ],x.O)
D.bPo=new A.a7(B.ax,B.aD,B.x,D.d5h,null,null)
D.b8v=new A.w(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,B.t)
D.bdR=new A.w(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,B.t)
D.cNl=w([D.b8v,D.bdR],x.O)
D.bPv=new A.a7(B.ax,B.aD,B.x,D.cNl,null,null)
D.d2d=w([B.bm,B.M,B.ec],x.O)
D.bPC=new A.a7(B.ax,B.aD,B.x,D.d2d,null,null)
D.bPF=new A.a7(B.a3,B.a7,B.x,F.as5,null,null)
D.cMN=w([B.ff,B.c8],x.O)
D.amC=new A.a7(B.a3,B.a7,B.x,D.cMN,null,null)
D.cN7=w([B.ff,B.bA],x.O)
D.amD=new A.a7(B.a3,B.a7,B.x,D.cN7,null,null)
D.avS=w([D.oc,B.av,B.bV],x.O)
D.bPW=new A.a7(B.ax,B.aD,B.x,D.avS,null,null)
D.bbo=new A.w(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,B.t)
D.cKU=w([D.bbo,E.aaL,B.M],x.O)
D.bQ0=new A.a7(B.ax,B.aD,B.x,D.cKU,null,null)
D.aTP=new A.d8(-0.8,-1)
D.aTR=new A.d8(1.2,1)
D.cK6=w([B.c,B.et,B.he,B.c,B.fg,B.aW,B.mD],x.O)
D.d1F=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.bQ2=new A.a7(D.aTP,D.aTR,B.x,D.cK6,D.d1F,null)
D.bdL=new A.w(1,0,0.7607843137254902,0.26666666666666666,B.t)
D.bbE=new A.w(1,0,0.6392156862745098,0.22745098039215686,B.t)
D.d0L=w([D.bdL,D.bbE],x.O)
D.bQs=new A.a7(B.a3,B.a7,B.x,D.d0L,null,null)
D.bQx=new A.a7(B.ax,B.aD,B.x,B.Pf,null,null)
D.cWL=w([E.Ws,B.wK],x.O)
D.bQz=new A.a7(B.a3,B.a7,B.x,D.cWL,null,null)
D.d_F=w([B.h0,B.fu],x.O)
D.amI=new A.a7(B.a3,B.a7,B.x,D.d_F,null,null)
D.d4R=w([B.bc,B.bT],x.O)
D.amJ=new A.a7(B.a3,B.a7,B.x,D.d4R,null,null)
D.cv6=w([B.dp,B.f5],x.O)
D.bRb=new A.a7(B.ax,B.aD,B.x,D.cv6,null,null)
D.cJa=w([B.c,B.b7],x.O)
D.bRl=new A.a7(B.a3,B.a7,B.x,D.cJa,null,null)
D.acr=new A.w(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,B.t)
D.b6i=new A.w(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,B.t)
D.cTE=w([D.acr,B.j1,B.qn,B.av,D.b6i],x.O)
D.bTK=w([0,0.28,0.55,0.82,1],x.n)
D.bRm=new A.a7(B.ax,B.aD,B.x,D.cTE,D.bTK,null)
D.bRw=new A.a7(B.a3,B.a7,B.x,B.PS,null,null)
D.bRx=new A.a7(B.a3,B.a7,B.x,F.aut,null,null)
D.bRA=new A.a7(B.a3,B.a7,B.x,D.avS,null,null)
D.cOo=w([B.bA,B.ff],x.O)
D.bRL=new A.a7(B.a3,B.a7,B.x,D.cOo,null,null)
D.d8F=w([B.aE,B.bA,B.b7],x.O)
D.bRN=new A.a7(B.a3,B.a7,B.x,D.d8F,null,null)
D.cWU=w([B.aJ,B.bJ,B.fD],x.O)
D.bRR=new A.a7(B.a3,B.a7,B.x,D.cWU,null,null)
D.d8o=w([B.bm,B.aK,B.bI,B.aL,B.aP,B.cm,B.ak],x.O)
D.cRY=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.bRW=new A.a7(B.ax,B.aD,B.x,D.d8o,D.cRY,null)
D.bS5=new A.a7(B.ax,B.aD,B.x,B.a0z,null,null)
D.cXo=w([D.Vq,B.dT],x.O)
D.bSf=new A.a7(B.a3,B.a7,B.x,D.cXo,null,null)
D.d3u=w([D.add,D.abC,B.M],x.O)
D.bSn=new A.a7(B.ax,B.aD,B.x,D.d3u,null,null)
D.bg0=new A.w(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,B.t)
D.cJF=w([B.eX,B.h0,D.bg0],x.O)
D.bST=new A.a7(B.ax,B.aD,B.x,D.cJF,null,null)
D.cOW=w([D.oc,B.av],x.O)
D.bSU=new A.a7(B.ax,B.aD,B.x,D.cOW,null,null)
D.bTf=w([G.Be,B.ou,B.jt,B.hx,B.kJ,B.kK,B.kI,B.qS,B.mf,B.eR,B.lD,B.xH,B.Fv],x.A)
D.bWC=w([10,50,100,200],x.t)
D.c5h=w([1,3,5,7],x.t)
D.cae=w([25,50,100,250],x.t)
D.bAj=new A.a0(983104,"MaterialIcons",!1)
D.ciJ=w([B.ou,B.lE,B.n1,B.l8,B.h4,B.vf,D.bAj,B.a_a],x.A)
D.co1=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.czW=w([0,0.22,0.5,0.78,1],x.n)
D.cDN=w([8,13,19],x.n)
D.a0U=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.feB=new A.x("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.e6a=new A.ji("questions",48,D.feB,null,x.d)
D.f4M=new A.x("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.e6f=new A.ji("edit",48,D.f4M,null,x.d)
D.fm5=new A.x("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.e6l=new A.ji("delete",48,D.fm5,null,x.d)
D.cDW=w([D.e6a,D.e6f,D.e6l],A.ax("P<oW<n>>"))
D.cNf=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.cNs=w([B.bM,B.fh],x.O)
D.a3w=new C.lu("text","",null,null)
D.cOz=w([D.a3w],x.a)
D.cPY=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.eoR=new A.acU(B.lC,"Home")
D.egd=new A.acU(B.pC,"Growth")
D.ekv=new A.acU(B.jt,"Wallet")
D.cSa=w([D.eoR,D.egd,D.ekv],A.ax("P<+icon,label(a0,n)>"))
D.cSz=w([4,0,2,6,8,1,3,5,7],x.t)
D.cSH=w([B.c,B.bN,B.cm],x.O)
D.dxq=new C.rb("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.dxt=new C.rb("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.dxr=new C.rb("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.dxl=new C.rb("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.dxm=new C.rb("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.dxu=new C.rb("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a1m=w([D.dxq,D.dxt,D.dxr,D.dxl,D.dxm,D.dxu],x.F)
D.a1r=w([B.aC,B.bn,B.d7,B.aJ],x.O)
D.b94=new A.w(1,1,0.8980392156862745,0.4,B.t)
D.cXu=w([B.V2,D.b94,B.qn,B.hT,B.j1],x.O)
D.a1x=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.Pn=w(["checkers_deluxe","tic_tac_go"],x.s)
D.bTj=w([0,1,2],x.t)
D.ciX=w([3,4,5],x.t)
D.cvG=w([6,7,8],x.t)
D.bTl=w([0,3,6],x.t)
D.c5m=w([1,4,7],x.t)
D.ccK=w([2,5,8],x.t)
D.bTp=w([0,4,8],x.t)
D.ccH=w([2,4,6],x.t)
D.cZJ=w([D.bTj,D.ciX,D.cvG,D.bTl,D.c5m,D.ccK,D.bTp,D.ccH],x.B)
D.aDO=new C.I0(0,"abab")
D.dxj=new C.I0(1,"aaaBbb")
D.aDP=new C.I0(2,"aabb")
D.d_J=w([D.aDO,D.dxj,D.aDP],A.ax("P<I0>"))
D.d_Z=w([],x.a)
D.ave=w([],x.v)
D.d3m=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.PJ=w([1,2,3,-1,-2],x.t)
D.daR=w([B.j2,B.aE],x.O)
D.fFt=new C.qv("dice","Dice Roll","Roll for cash & prizes!",B.mc,D.daR)
D.fFq=new C.qv("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",B.qM,B.au0)
D.d5B=w([B.cZ,B.bj],x.O)
D.fFo=new C.qv("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",B.ZY,D.d5B)
D.dal=w([B.dO,B.mG],x.O)
D.fFu=new C.qv("memory","Memory Match","Match pairs \u2014 solo or multiplayer",B.a_a,D.dal)
D.c54=w([B.jH,B.pf],x.O)
D.fFr=new C.qv("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",F.ZK,D.c54)
D.d3l=w([M.l0,D.VP],x.O)
D.fFp=new C.qv("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",B.Fy,D.d3l)
D.fFs=new C.qv("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",B.cx,Ak.n2)
D.d4Q=w([D.fFt,D.fFq,D.fFo,D.fFu,D.fFr,D.fFp,D.fFs],A.ax("P<qv>"))
D.d68=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.bd6=new A.w(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,B.t)
D.bcZ=new A.w(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,B.t)
D.adX=new A.w(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,B.t)
D.d6S=w([D.bd6,D.bcZ,D.adX],x.O)
D.beY=new A.w(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,B.t)
D.d6U=w([B.aaK,D.beY,D.adX],x.O)
D.d7w=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.awc=w([D.oc,B.c,D.eH,B.bZ,B.b0,B.av],x.O)
D.dxo=new C.rb("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.dxn=new C.rb("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.dxk=new C.rb("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.dxs=new C.rb("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.dxv=new C.rb("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.dxp=new C.rb("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a28=w([D.dxo,D.dxn,D.dxk,D.dxs,D.dxv,D.dxp],x.F)
D.daz=w([B.c8,B.pf],x.O)
D.dWj={checkers_deluxe:0,tic_tac_go:1}
D.aBO=new A.bq(D.dWj,["Checkers Deluxe","Tic Tac Go"],A.ax("bq<n,n>"))
D.dVp={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aBZ=new A.bq(D.dVp,[1,2,3,4,5,6,7],A.ax("bq<n,G>"))
D.dqo=new C.a5z(null)
D.dtK=new C.lu("signature","NGMY Support Team",null,null)
D.dtL=new C.lu("divider","",null,null)
D.QD=new C.Up(!1,!1,!1,!1)
D.QF=new C.MZ(!1,!1,!1,!1)
D.duN=new C.MZ(!0,!0,!1,!1)
D.C2=new C.apn(0,"swahili")
D.aDN=new C.apn(1,"english")
D.C3=new C.apn(2,"mix")
D.cZd=w([B.fv,B.ip,B.dj],x.O)
D.bz9=new A.a0(63118,"MaterialIcons",!1)
D.dyw=new C.oS(D.cZd,B.fZ,B.aJ,"BACKGAMMON","\ud83c\udfb2",D.bz9)
D.bB7=new A.a0(983637,"MaterialIcons",!1)
D.dyx=new C.oS(Ah.awm,B.bn,B.eM,"EURO WHEEL","\ud83c\udfa1",D.bB7)
D.d6q=w([B.M,B.aK,B.bw],x.O)
D.dyy=new C.oS(D.d6q,B.aP,B.ak,"ROYALE","\u265f\ufe0f",F.ZK)
D.cMQ=w([B.dp,B.bj,B.dS],x.O)
D.dyz=new C.oS(D.cMQ,B.aC,B.d7,"CONNECT 4","\ud83d\udd34",B.a_n)
D.d1S=w([B.dv,B.f5,B.pf],x.O)
D.dyA=new C.oS(D.d1S,B.uD,B.c8,"PUNTO BANCO","\ud83d\udc8e",B.lE)
D.cv8=w([B.nr,B.i2,B.lv],x.O)
D.dyB=new C.oS(D.cv8,B.iW,B.jI,"DOMINOES","\ud83c\udc53",B.akr)
D.d75=w([B.wQ,B.rR,B.hc],x.O)
D.dyC=new C.oS(D.d75,B.Ah,B.fX,"WAR","\u2694\ufe0f",N.ZH)
D.dyD=new C.oS(B.awh,B.aM,B.ak,"PREMIUM","\ud83c\udfae",B.mc)
D.cOp=w([B.jj,B.aE,B.dO],x.O)
D.dyE=new C.oS(D.cOp,B.dN,B.ff,"JACKPOT","\ud83c\udfb0",B.mc)
D.d12=w([B.kA,B.lt,B.bA],x.O)
D.dyF=new C.oS(D.d12,B.qm,B.bZ,"LIVE BINGO","\ud83c\udfb1",B.xA)
D.cHb=w([B.ip,B.dT,B.aJ],x.O)
D.byA=new A.a0(62865,"MaterialIcons",!1)
D.dyG=new C.oS(D.cHb,B.rX,B.aM,"BIG SPIN","\ud83c\udfa1",D.byA)
D.dyH=new C.oS(B.a26,B.aL,B.bn,"HOLD'EM","\u2660\ufe0f",B.jt)
D.d7v=w([B.eX,B.fu,B.aZ],x.O)
D.bxI=new A.a0(61234,"MaterialIcons",!1)
D.dyI=new C.oS(D.d7v,B.lw,B.aU,"CRAPS","\ud83c\udfb2",D.bxI)
D.cMa=w([B.fh,B.iG,B.bM],x.O)
D.dyJ=new C.oS(D.cMa,B.bJ,B.b7,"PLINKO","\ud83d\udc8e",Al.MN)
D.bAT=new A.a0(983492,"MaterialIcons",!1)
D.dyK=new C.oS(B.a26,B.ey,B.bn,"SNOOKER","\ud83c\udfb1",D.bAT)
D.d5c=w([B.eX,B.fu,B.aU],x.O)
D.dyL=new C.oS(D.d5c,B.rS,B.bs,"PROFIT LAB","\ud83d\udcb0",B.hW)
D.d5u=w([B.ec,B.fm,B.bn],x.O)
D.bzx=new A.a0(63324,"MaterialIcons",!1)
D.dyM=new C.oS(D.d5u,B.Ae,B.bc,"KLONDIKE","\ud83c\udccf",D.bzx)
D.cZQ=w([B.da,B.bm,B.M],x.O)
D.dyN=new C.oS(D.cZQ,B.aM,B.aK,"VEGAS TABLE","\ud83c\udccf",A2.FL)
D.pL=new C.E4(0,"continueGame")
D.pM=new C.E4(1,"youWin")
D.He=new C.E4(2,"youLose")
D.QO=new C.E4(3,"draw")
D.aE1=new C.V9(0,"found")
D.dRz=new C.V9(1,"foundLive")
D.a3M=new C.V9(2,"notFound")
D.aE2=new C.V9(3,"wrongAccount")
D.dYs=new A.u(4,12)
D.e0l=new A.C(B.Ll,B.rD,null)
D.brE=new A.Q(4,0,0,3)
D.eRE=new A.F(!0,B.aI,null,null,null,null,10,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqr=new A.x("NGMY Helper",null,D.eRE,null,null,null,null,null,null,null,null,null)
D.e0B=new A.C(D.brE,D.fqr,null)
D.bzp=new A.a0(63284,"MaterialIcons",!1)
D.bEB=new A.ae(D.bzp,18,B.oe,null,null,null)
D.eW7=new A.F(!0,B.oe,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8D=new A.x("Continue",null,D.eW7,null,null,null,null,null,null,null,null,null)
D.d0o=w([D.bEB,B.bp,D.f8D],x.p)
D.eCK=new A.co(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.d0o,null)
D.e0E=new A.C(B.iN,D.eCK,null)
D.e0O=new A.C(B.bR,B.rD,null)
D.bcJ=new A.w(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,B.t)
D.cY3=w([B.h0,B.fu,B.cY,D.bcJ],x.O)
D.bRZ=new A.a7(B.ax,B.aD,B.x,D.cY3,B.Bv,null)
D.aYw=new A.o(null,null,null,null,null,D.bRZ,B.n)
D.bjI=new A.kG(D.aYw,B.bd,null,null)
D.e6A=new A.cL(0,0,0,0,null,null,D.bjI,null)
D.bGk=new A.ae(B.v5,11,B.c,null,null,null)
D.e6E=new A.cL(10,12,null,null,null,null,D.bGk,null)
D.czO=w([B.hd,B.ec,B.l_],x.O)
D.e7e=new A.bR(B.Jd,1.1,B.x,null,0,D.czO,null,null)
D.be3=new A.w(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,B.t)
D.b8M=new A.w(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,B.t)
D.baq=new A.w(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,B.t)
D.cVT=w([D.be3,D.b8M,D.baq],x.O)
D.e7l=new A.bR(B.a8t,1.05,B.x,null,0,D.cVT,null,null)
D.e7J=new A.bR(B.A,0.5,B.x,null,0,X.a18,null,null)
D.eAX=new A.aa(-18,0,18,1)
D.eBt=new A.aa(-3,-5,3,5)
D.bF2=new A.ae(B.ee,16,D.eH,null,null,null)
D.aOL=new A.F(!0,D.eH,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foa=new A.x("Screenshot added \xb7 tap to change",null,D.aOL,null,null,null,null,null,null,null,null,null)
D.cK9=w([D.bF2,B.bp,D.foa],x.p)
D.eCb=new A.co(B.aQ,B.ba,B.j,B.m,null,B.p,null,0,D.cK9,null)
D.bIP=new A.ae(B.jR,15,D.eH,null,null,null)
D.fm0=new A.x("Refresh",null,D.aOL,null,null,null,null,null,null,null,null,null)
D.cMj=w([D.bIP,B.d8,D.fm0],x.p)
D.eCd=new A.co(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cMj,null)
D.dVQ={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.eE_=new A.eV(D.dVQ,3,x.M)
D.dVA={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.eE5=new A.eV(D.dVA,36,x.M)
D.dVD={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.eEd=new A.eV(D.dVD,6,x.M)
D.dWM={memory:0,typing:1,scramble:2,pattern:3}
D.mq=new A.eV(D.dWM,4,x.M)
D.eGn=new A.at(276,276)
D.eH3=new A.a6(13,null,null,null)
D.b3r=new A.fh(2.6,null,null,null,null,B.aM,null,null,null,null)
D.eHd=new A.a6(26,26,D.b3r,null)
D.eHY=new A.a6(null,7,null,null)
D.eI6=new A.hH(8,0,0,1,null)
D.fpg=new A.x("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aMk=new A.b1(D.fpg,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f3X=new A.x("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.eL1=new A.b1(D.f3X,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f4X=new A.x("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.eL7=new A.b1(D.f4X,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fma=new A.x("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.eLL=new A.b1(D.fma,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.bdr=new A.w(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,B.t)
D.eV3=new A.F(!0,D.bdr,null,null,null,null,9,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOM=new A.eo("$",null,null,B.cO,null,null,null,null,null,null,D.eV3)
D.eP1=new A.F(!0,B.M,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePk=new A.F(!0,B.c,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePq=new A.F(!0,B.bm,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePO=new A.F(!0,B.M,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePY=new A.F(!0,B.c,null,null,null,null,19,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQ5=new A.F(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQd=new A.F(!0,null,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQZ=new A.F(!0,B.aM,null,null,null,null,28,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRw=new A.F(!0,D.eH,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRy=new A.F(!0,B.bJ,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSf=new A.F(!0,E.Ac,null,null,null,null,13,B.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNw=new A.F(!0,B.c,null,null,null,null,20,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTI=new A.F(!0,B.bJ,null,null,null,null,11.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU_=new A.F(!0,B.ad,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,B.aB,null,null,null,null,null,null,null,null)
D.eUi=new A.F(!0,B.ad,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVj=new A.F(!0,B.c,null,null,null,null,11,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVy=new A.F(!0,B.c,null,null,null,null,14,B.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVJ=new A.F(!0,B.bc,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVK=new A.F(!0,B.c,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,B.aB,null,null,null,null,null,null,null,null)
D.eWf=new A.F(!0,B.iy,null,null,null,null,10.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b7w=new A.w(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,B.t)
D.eWt=new A.F(!0,D.b7w,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXT=new A.F(!0,B.aC,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYe=new A.F(!0,D.acr,null,null,null,null,9,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOc=new A.F(!0,E.Ac,null,null,null,null,11,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYB=new A.F(!0,B.fm,null,null,null,null,52,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYC=new A.F(!0,B.bw,null,null,null,null,7,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYR=new A.F(!0,E.Ac,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.vX=new A.F(!0,B.c,null,null,null,null,13,B.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bbf=new A.w(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,B.t)
D.eZ3=new A.F(!0,D.bbf,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZA=new A.F(!0,B.Qj,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_x=new A.F(!0,B.c,null,null,null,null,38,B.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_D=new A.F(!0,B.iM,null,null,null,null,11,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_H=new A.F(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOs=new A.F(!0,B.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f08=new A.F(!0,B.M,null,null,null,null,10,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0c=new A.F(!0,B.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f14=new A.F(!0,B.M,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1s=new A.F(!0,B.ad,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1I=new A.F(!0,B.bc,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2d=new A.F(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2h=new A.F(!0,B.M,null,null,null,null,11,B.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3c=new A.x("Value per pair",null,B.hz,null,null,null,null,null,null,null,null,null)
D.f3d=new A.x("Restore now",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f3J=new A.x("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aNZ=new A.F(!0,B.cU,null,null,null,null,12,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3S=new A.x("AVAILABLE PLANS",null,D.aNZ,null,null,null,null,null,null,null,null,null)
D.f3V=new A.x("I understand",null,B.cu,null,null,null,null,null,null,null,null,null)
D.f4o=new A.x("Go Back",null,B.cu,null,null,null,null,null,null,null,null,null)
D.eS6=new A.F(!0,B.bw,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f54=new A.x("PLAN VALUE",null,D.eS6,null,null,null,null,null,null,null,null,null)
D.f56=new A.x("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.f5t=new A.x("Deposit",null,B.SV,null,null,null,null,null,null,null,null,null)
D.f0s=new A.F(!0,B.dN,null,null,null,null,null,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6q=new A.x("JACKPOT SLOTS",null,D.f0s,null,null,null,null,null,null,null,null,null)
D.f6K=new A.x("Restore",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eS9=new A.F(!0,B.c,null,null,null,null,12,B.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6O=new A.x("YOUR NUMBER",null,D.eS9,null,null,null,null,null,null,null,null,null)
D.f73=new A.x("SPIN REELS",null,F.a6v,null,null,null,null,null,null,null,null,null)
D.f7u=new A.x("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.f7Z=new A.x("Perfect Score Profit",null,B.hz,null,null,null,null,null,null,null,null,null)
D.f8B=new A.x("Join room",null,B.kq,null,null,null,null,null,null,null,null,null)
D.fav=new A.x("Add payment screenshot",null,B.jB,null,null,null,null,null,null,null,null,null)
D.faK=new A.x("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.f_J=new A.F(!0,B.aM,null,null,null,null,11,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb9=new A.x("INVITE A PLAYER",null,D.f_J,null,null,null,null,null,null,null,null,null)
D.eZX=new A.F(!0,B.V2,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbz=new A.x("NGMY GOLD LEADER",null,D.eZX,null,null,null,null,null,null,null,null,null)
D.fc5=new A.x("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.fct=new A.x("Invest & Play",null,B.oR,null,null,null,null,null,null,null,null,null)
D.aNS=new A.F(!0,D.wI,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcT=new A.x("VALID THRU",null,D.aNS,null,null,null,null,null,null,null,null,null)
D.aOu=new A.F(!0,B.ay,null,null,null,null,11,B.I,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd0=new A.x("DEALER",null,D.aOu,null,null,null,null,null,null,null,null,null)
D.fd6=new A.x("CARDHOLDER",null,D.aNS,null,null,null,null,null,null,null,null,null)
D.eZt=new A.F(!0,B.aL,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdP=new A.x("NGMY PLATINUM",null,D.eZt,null,null,null,null,null,null,null,null,null)
D.f1z=new A.F(!0,B.ph,null,null,null,null,10,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.few=new A.x("EARNED SO FAR",null,D.f1z,null,null,null,null,null,null,null,null,null)
D.ff3=new A.x("VS",null,B.aNN,null,null,null,null,null,null,null,null,null)
D.fft=new A.x("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.ffQ=new A.x("One day left",null,B.aNu,null,B.L,null,null,null,null,null,null,null)
D.fga=new A.x("Keep typing \u2014 mistakes are counted in your payout",null,B.CH,null,null,null,null,null,null,null,null,null)
D.fgb=new A.x("Multiplayer invite",null,B.kq,null,null,null,null,null,null,null,null,null)
D.fgl=new A.x("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.eQM=new A.F(!0,B.Qj,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgr=new A.x("\ud83d\udcb0 Partial Payout System",null,D.eQM,null,null,null,null,null,null,null,null,null)
D.fgC=new A.x("Browse Topics",null,B.eV,null,null,null,null,null,null,null,null,null)
D.ePL=new A.F(!0,B.c,null,null,null,null,22,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgR=new A.x("Investment Required",null,D.ePL,null,B.L,null,null,null,null,null,null,null)
D.ePh=new A.F(!0,B.c,null,null,null,null,16.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fig=new A.x("Network Status",null,D.ePh,null,null,null,null,null,null,null,null,null)
D.fiM=new A.x("Their account email",null,G.a6i,null,null,null,null,null,null,null,null,null)
D.fj4=new A.x("Verification code",null,B.cu,null,null,null,null,null,null,null,null,null)
D.fj5=new A.x("Category",null,null,null,null,null,null,null,null,null,null,null)
D.fjj=new A.x("ACTIVE ASSET",null,D.aNZ,null,null,null,null,null,null,null,null,null)
D.fjE=new A.x("Scan QR",null,B.cu,null,null,null,null,null,null,null,null,null)
D.fjJ=new A.x("Check word",null,B.cu,null,null,null,null,null,null,null,null,null)
D.fk6=new A.x("YOUR HAND",null,D.aOu,null,null,null,null,null,null,null,null,null)
D.fkF=new A.x("NGMY Music Studio",null,B.kT,null,null,null,null,null,null,null,null,null)
D.fkI=new A.x("I sent it \u2014 submit deposit",null,B.oR,null,null,null,null,null,null,null,null,null)
D.flr=new A.x("Back",null,B.Sp,null,null,null,null,null,null,null,null,null)
D.f2s=new A.F(!0,null,null,null,null,null,null,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fly=new A.x("DEAL / PLAY ROUND",null,D.f2s,null,null,null,null,null,null,null,null,null)
D.flK=new A.x("Got it \u2014 keep chatting",null,B.cc,null,null,null,null,null,null,null,null,null)
D.flU=new A.x("3 Messages Left",null,B.aOh,null,null,null,null,null,null,null,null,null)
D.fmo=new A.x("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.fmw=new A.x("Copy",null,B.cu,null,null,null,null,null,null,null,null,null)
D.fmS=new A.x("How many games?",null,G.a6i,null,null,null,null,null,null,null,null,null)
D.eYY=new A.F(!0,B.ay,null,null,null,null,null,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn3=new A.x("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.eYY,null,B.L,null,null,null,null,null,null,null)
D.foB=new A.x("Question",null,null,null,null,null,null,null,null,null,null,null)
D.foN=new A.x("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.f2R=new A.F(!0,B.c,null,null,null,null,12.5,B.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fql=new A.x("NGMY  WALLET",null,D.f2R,null,null,null,null,null,null,null,null,null)
D.fqm=new A.x("Select Your Bet",null,B.hm,null,null,null,null,null,null,null,null,null)
D.fCn=new A.cz("history",x.W)
D.fCs=new A.cz("ngmy_local_home",x.W)
D.fCt=new A.cz("ngmy_local_invest",x.W)
D.fCu=new A.cz("ngmy_local_wallet",x.W)
D.fFb=new C.Yh(null)
D.aS3=new C.azD(0,"grid")
D.aS4=new C.azD(1,"questions")
D.fGq=new C.azD(2,"answer")
D.fHm=new C.Za(null)})();(function staticFields(){$.fMm=A.aX(x.N)
$.haQ=A.V(x.N,x.k)
$.fRN=null
$.fRB=A.V(x.N,A.ax("vU"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"i7y","bBZ",()=>C.hQF())
w($,"i7k","hiN",()=>{var v=null,u=A.ih(v,v,v,v,D.eOM,B.a5,B.ch,v,B.er,B.cd)
u.eO()
return u})})()};
(a=>{a["1In7auwo0cFa8U0Hm7xe6w5BKPw="]=a.current})($__dart_deferred_initializers__);