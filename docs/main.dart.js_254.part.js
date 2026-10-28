((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,L,Q,A_,E,M,A0,N,A1,R,O,S,A2,P,A3,T,A4,A5,A6,A7,A8,A9,U,Aa,C={
h3h(d,e,f){var w=null,v=f.k("Fk<0>"),u=new A.Fk(w,w,w,w,v)
$.G8()
u.d=new C.coV(new A.EC(),e,u,f,d)
return new A.hO(u,v.k("hO<1>"))},
coV:function coV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
coW:function coW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
coS:function coS(d){this.a=d},
coT:function coT(d,e){this.a=d
this.b=e},
coU:function coU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
coR:function coR(d,e,f){this.a=d
this.b=e
this.c=f},
bpf:function bpf(d){this.a=d},
h3g(d,e,f,g){return new C.au0(d,e,f,null,g.k("au0<0>"))},
ED:function ED(){},
aGr:function aGr(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
eUg:function eUg(d){this.a=d},
eUf:function eUf(d,e){this.a=d
this.b=e},
eUi:function eUi(d){this.a=d},
eUd:function eUd(d,e,f){this.a=d
this.b=e
this.c=f},
eUh:function eUh(d){this.a=d},
eUe:function eUe(d){this.a=d},
au0:function au0(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
hTb(d){var w=B.a.i(d)
while(B.a.a0(w,"$"))w=B.a.i(B.a.b_(w,1))
return w},
hdn(d){var w=C.hTb(d)
if(w.length===0)return""
return"$"+w},
fog(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fog=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:i=B.a.i(d.toLowerCase())
if(i.length===0){w=1
break}t=new A.R(Date.now(),0,!1).bN(-6048e8)
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
break}if(q.d!==B.fA){w=4
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
return A.b(C.ul(q.c,p,n,d,o,null,q.a,!0),$async$fog)
case 6:case 4:e.length===s||(0,A.K)(e),++r
w=3
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$fog,v)},
hXN(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
hUe(d,e,f){return B.d.b8(e,new C.fs_(f,B.a.i(d.toLowerCase())))},
frR(d){var w
C.h_y(d)
w=d.c5
return A.bl(new A.J(w,new C.frS(),A.S(w).k("J<1,@>")),!0,x.N)},
hK1(d,e,f){var w,v,u,t,s,r,q=null,p=B.bQ,o=B.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aU.toString
u=$.eg().gi8().b
if(u.a===0)t=1
else{new A.bc(u,A.a3(u).k("bc<2>")).gL(0)
u=$.kX()
s=u.d
t=s==null?u.gh2():s}w=B.k.dJ(f*t)
v=new C.fbW(f)
if(J.cZ(n,"data:image"))try{u=A.fK(B.cB.aI(B.d.gam(J.lj(n,","))),B.A,w,new C.fbT(v),B.fQ,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.cZ(n,"supabase://"))return new A.l2(A.a0m(n),new C.fbU(f,e,p,w,v),q,q,x.gh)
return A.kf(n,B.A,w,new C.fbV(v),B.fQ,p,!0,e,q,q,f)},
fPu(d,e){return new A.a6(e,e,A.hR(C.hK1(d,e,e),B.aq),null)},
hCs(){var w,v,u=A.a([],x._),t=x.N,s=A.B(D.d4k,x.gm)
for(w=0;w<36;++w){v=B.By[w]
s.push(new C.qu(v.a,v.b,v.c,v.e,v.f))}return new C.ayD(u,A.V(t,t),s)},
fs_:function fs_(d,e){this.a=d
this.b=e},
frS:function frS(){},
fbW:function fbW(d){this.a=d},
fbT:function fbT(d){this.a=d},
fbU:function fbU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fbS:function fbS(d){this.a=d},
fbV:function fbV(d){this.a=d},
ajG:function ajG(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
qu:function qu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
ayD:function ayD(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
d6K:function d6K(d,e){this.a=d
this.b=e},
d6V:function d6V(d,e){this.a=d
this.b=e},
d7c:function d7c(){},
d7d:function d7d(d){this.a=d},
d72:function d72(d,e){this.a=d
this.b=e},
d71:function d71(){},
d73:function d73(d){this.a=d},
d70:function d70(){},
d75:function d75(d){this.a=d},
d74:function d74(){},
d6Y:function d6Y(d){this.a=d},
d6W:function d6W(d){this.a=d},
d6X:function d6X(d){this.a=d},
d6Z:function d6Z(d){this.a=d},
d7_:function d7_(d){this.a=d},
d6Q:function d6Q(d,e){this.a=d
this.b=e},
d6R:function d6R(d,e){this.a=d
this.b=e},
d6O:function d6O(d){this.a=d},
d6P:function d6P(d){this.a=d},
d6S:function d6S(d){this.a=d},
d6T:function d6T(d){this.a=d},
d6U:function d6U(d,e,f){this.a=d
this.b=e
this.c=f},
d6N:function d6N(d,e){this.a=d
this.b=e},
d6M:function d6M(d,e){this.a=d
this.b=e},
d6L:function d6L(d,e){this.a=d
this.b=e},
d7b:function d7b(d){this.a=d},
d79:function d79(d,e,f){this.a=d
this.b=e
this.c=f},
d78:function d78(d,e,f){this.a=d
this.b=e
this.c=f},
d77:function d77(d,e){this.a=d
this.b=e},
d76:function d76(){},
d7a:function d7a(d){this.a=d},
aBu:function aBu(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bhq:function bhq(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
dKH:function dKH(d){this.a=d},
dKG:function dKG(d){this.a=d},
dKI:function dKI(d){this.a=d},
dKF:function dKF(){},
dKJ:function dKJ(d,e){this.a=d
this.b=e},
dKE:function dKE(d){this.a=d},
dKK:function dKK(d){this.a=d},
ajF:function ajF(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ayC:function ayC(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
d6E:function d6E(d){this.a=d},
d6H:function d6H(d){this.a=d},
d6I:function d6I(d){this.a=d},
d6J:function d6J(d){this.a=d},
d6G:function d6G(d,e){this.a=d
this.b=e},
d6F:function d6F(d,e){this.a=d
this.b=e},
ajH:function ajH(d,e,f,g,h,i,j,k,l,m){var _=this
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
ayE:function ayE(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.cj=_.cV=""
_.c=_.a=_.bC=null},
d8w:function d8w(d,e){this.a=d
this.b=e},
d8z:function d8z(d){this.a=d},
d8A:function d8A(d){this.a=d},
d8B:function d8B(d){this.a=d},
d8C:function d8C(d){this.a=d},
d8D:function d8D(d){this.a=d},
d8x:function d8x(d){this.a=d},
d8y:function d8y(d){this.a=d},
d7M:function d7M(d,e){this.a=d
this.b=e},
d7N:function d7N(d,e){this.a=d
this.b=e},
d8f:function d8f(d){this.a=d},
d8g:function d8g(){},
d81:function d81(d,e,f){this.a=d
this.b=e
this.c=f},
d82:function d82(d){this.a=d},
d83:function d83(d,e,f){this.a=d
this.b=e
this.c=f},
d84:function d84(d,e){this.a=d
this.b=e},
d85:function d85(){},
d7e:function d7e(d){this.a=d},
d7L:function d7L(d,e){this.a=d
this.b=e},
d8h:function d8h(){},
d8q:function d8q(){},
d8e:function d8e(d){this.a=d},
d8d:function d8d(d){this.a=d},
d7J:function d7J(d){this.a=d},
d7K:function d7K(){},
d8l:function d8l(){},
d8m:function d8m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d8n:function d8n(d,e,f){this.a=d
this.b=e
this.c=f},
d7f:function d7f(){},
d7g:function d7g(d){this.a=d},
d7h:function d7h(){},
d7V:function d7V(d,e){this.a=d
this.b=e},
d7W:function d7W(d,e,f){this.a=d
this.b=e
this.c=f},
d7X:function d7X(d){this.a=d},
d7U:function d7U(d){this.a=d},
d86:function d86(d){this.a=d},
d87:function d87(){},
d88:function d88(d){this.a=d},
d89:function d89(){},
d8a:function d8a(d){this.a=d},
d8b:function d8b(){},
d8k:function d8k(d,e,f){this.a=d
this.b=e
this.c=f},
d7Y:function d7Y(d){this.a=d},
d7Z:function d7Z(d,e){this.a=d
this.b=e},
d8_:function d8_(d){this.a=d},
d80:function d80(d){this.a=d},
d8o:function d8o(d){this.a=d},
d8p:function d8p(d){this.a=d},
d7i:function d7i(d){this.a=d},
d7j:function d7j(d,e){this.a=d
this.b=e},
d7k:function d7k(d){this.a=d},
d7l:function d7l(d){this.a=d},
d8i:function d8i(d,e){this.a=d
this.b=e},
d8j:function d8j(d){this.a=d},
d7T:function d7T(d,e){this.a=d
this.b=e},
d8c:function d8c(d,e,f){this.a=d
this.b=e
this.c=f},
d7R:function d7R(d,e,f){this.a=d
this.b=e
this.c=f},
d7S:function d7S(){},
d8r:function d8r(d){this.a=d},
d8s:function d8s(d){this.a=d},
d8t:function d8t(d){this.a=d},
d8v:function d8v(d){this.a=d},
d8u:function d8u(){},
d7Q:function d7Q(d,e,f){this.a=d
this.b=e
this.c=f},
d7P:function d7P(d,e){this.a=d
this.b=e},
d7O:function d7O(d,e){this.a=d
this.b=e},
d7y:function d7y(d){this.a=d},
d7x:function d7x(d,e){this.a=d
this.b=e},
d7z:function d7z(d){this.a=d},
d7w:function d7w(d,e){this.a=d
this.b=e},
d7A:function d7A(d){this.a=d},
d7v:function d7v(){},
d7B:function d7B(d){this.a=d},
d7t:function d7t(){},
d7u:function d7u(d){this.a=d},
d7C:function d7C(d){this.a=d},
d7s:function d7s(d,e){this.a=d
this.b=e},
d7D:function d7D(d){this.a=d},
d7r:function d7r(d,e){this.a=d
this.b=e},
d7n:function d7n(d,e){this.a=d
this.b=e},
d7E:function d7E(d){this.a=d},
d7q:function d7q(d,e){this.a=d
this.b=e},
d7F:function d7F(d){this.a=d},
d7p:function d7p(d){this.a=d},
d7m:function d7m(d,e){this.a=d
this.b=e},
d7G:function d7G(d,e,f){this.a=d
this.b=e
this.c=f},
d7H:function d7H(d){this.a=d},
d7o:function d7o(){},
d7I:function d7I(d){this.a=d},
akx:function akx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bez:function bez(){this.c=this.a=null},
dc3:function dc3(d,e){this.a=d
this.b=e},
dc2:function dc2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agT:function agT(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
avP:function avP(d,e,f,g,h,i,j,k,l,m){var _=this
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
czX:function czX(d){this.a=d},
czh:function czh(d,e){this.a=d
this.b=e},
cz7:function cz7(d){this.a=d},
cz8:function cz8(d){this.a=d},
czr:function czr(d){this.a=d},
czo:function czo(d){this.a=d},
czp:function czp(d){this.a=d},
czq:function czq(d,e,f){this.a=d
this.b=e
this.c=f},
czj:function czj(d){this.a=d},
czi:function czi(d){this.a=d},
cz9:function cz9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
czm:function czm(d){this.a=d},
czl:function czl(d){this.a=d},
czk:function czk(d,e){this.a=d
this.b=e},
czK:function czK(d){this.a=d},
czE:function czE(d){this.a=d},
czH:function czH(d){this.a=d},
czG:function czG(){},
czD:function czD(d){this.a=d},
czF:function czF(d,e){this.a=d
this.b=e},
czC:function czC(){},
cze:function cze(){},
czf:function czf(d,e){this.a=d
this.b=e},
czg:function czg(d){this.a=d},
czc:function czc(d,e){this.a=d
this.b=e},
czd:function czd(d,e){this.a=d
this.b=e},
czu:function czu(d,e){this.a=d
this.b=e},
czn:function czn(d){this.a=d},
czv:function czv(d){this.a=d},
czw:function czw(d,e){this.a=d
this.b=e},
czx:function czx(d,e){this.a=d
this.b=e},
czy:function czy(d,e){this.a=d
this.b=e},
czz:function czz(d,e,f){this.a=d
this.b=e
this.c=f},
czA:function czA(d){this.a=d},
czB:function czB(d){this.a=d},
czs:function czs(d,e){this.a=d
this.b=e},
czJ:function czJ(d){this.a=d},
czt:function czt(d,e){this.a=d
this.b=e},
czW:function czW(d){this.a=d},
czP:function czP(d){this.a=d},
czS:function czS(d){this.a=d},
czM:function czM(d,e){this.a=d
this.b=e},
czQ:function czQ(){},
czR:function czR(d,e){this.a=d
this.b=e},
czN:function czN(d){this.a=d},
czO:function czO(d){this.a=d},
czU:function czU(){},
czT:function czT(d){this.a=d},
czL:function czL(d,e){this.a=d
this.b=e},
czV:function czV(d){this.a=d},
cza:function cza(d){this.a=d},
czI:function czI(d,e){this.a=d
this.b=e},
czb:function czb(d,e,f){this.a=d
this.b=e
this.c=f},
aIR:function aIR(){},
aIS:function aIS(){},
aIT:function aIT(){},
aJP:function aJP(){},
bWt(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase())
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
bWu(d){var w=B.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hpZ(d,e){var w=d.ax
if(w<0)return!1
return w===e},
aVW(d,e){return C.hq_(d,e)},
hq_(d,e){var w=0,v=A.j(x.di),u,t,s,r,q,p
var $async$aVW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aZH(d),$async$aVW)
case 3:p=g
if(p!=null){try{t=B.R.aG(0,p.c,null)
if(x.f.b(t)){s=C.fYU(A.a1(t,x.N,x.z))
if(s==null){u=new A.Ff(D.a3z,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bWt(s,e,p.b)){u=new A.Ff(D.aDT,null)
w=1
break}r=p.a?D.dR4:D.aDS
u=new A.Ff(r,s)
w=1
break}}catch(o){}u=new A.Ff(D.a3z,null)
w=1
break}s=C.fYV(d)
if(s==null){u=new A.Ff(D.a3z,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bWt(s,e,null)){u=new A.Ff(D.aDT,null)
w=1
break}u=new A.Ff(D.aDS,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aVW,v)},
fYV(d){var w,v,u,t,s,r
try{w=B.a.i(d)
if(J.cZ(w,"\ufeff"))w=J.mv(w,1)
v=!1
if(J.cZ(w,"NGMYSNAP1|")){v=!0
w=B.c4.c7(0,B.cB.aI(J.mv(w,10)))}u=B.R.aG(0,w,null)
if(!x.f.b(u))return null
t=A.a1(u,x.N,x.z)
s=v?C.hpY(t):C.fYU(t)
return s}catch(r){return null}},
hpY(d){var w,v,u,t,s,r,q,p,o,n=new C.bWq(),m=new C.bWp(),l=d.h(0,"qi")
if(x.f.b(l)){w=A.a1(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new A.R(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=A.aN(w.h(0,"d"))
p=new A.v5(v,u,t,s,r,B.k.O(q==null?0:q))}else p=null
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
return new A.a4O("","",v,u,t,s,r,q,n,m,o,p,B.i0,new A.R(Date.now(),0,!1),-1)},
fYU(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.y(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.bWs()
v=d.h(0,"activeInvestment")
if(x.f.b(v)){u=A.a1(v,x.N,x.z)
t=u.h(0,"name")
t=J.k(t==null?"":t)
s=A.aN(u.h(0,"amount"))
if(s==null)s=0
r=A.aN(u.h(0,"dailyROI"))
if(r==null)r=0
q=w.$1(u.h(0,"purchaseDate"))
if(q==null)q=new A.R(Date.now(),0,!1)
p=A.aN(u.h(0,"totalEarned"))
if(p==null)p=0
o=A.aN(u.h(0,"daysClockedIn"))
n=new A.v5(t,s,r,q,p,B.k.O(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=A.B(new A.e6(J.b6(m,new C.bWr(w),x.eG),t),t.k("H.E"))}else l=A.a([],x.E)
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
if(w==null)w=new A.R(Date.now(),0,!1)
f=A.aN(d.h(0,"walletStateRevision"))
f=f==null?null:B.k.O(f)
return new A.a4O(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
fK2(d,e,f,g){var w=0,v=A.j(x.N),u,t,s,r
var $async$fK2=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:t=A.bWo(d,e,f,g)
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(t.a,s,"_")
u=A.FL(A.Ja(t.eJ(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fK2,v)},
V1:function V1(d,e){this.a=d
this.b=e},
bWq:function bWq(){},
bWp:function bWp(){},
bWs:function bWs(){},
bWr:function bWr(d){this.a=d},
hN3(d){return A.c9(null,B.aW,!0,null,new C.ffc(),d,null,!0,!0,x.N)},
hNg(d,e,f,g){return A.c9(null,B.aW,!0,null,new C.fgp(g,f,e),d,null,!0,!0,x.y)},
am4:function am4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAK:function aAK(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dsy:function dsy(d,e){this.a=d
this.b=e},
dsz:function dsz(d){this.a=d},
dsp:function dsp(d,e){this.a=d
this.b=e},
dsn:function dsn(d){this.a=d},
dsx:function dsx(d){this.a=d},
dsw:function dsw(d,e){this.a=d
this.b=e},
dsm:function dsm(d,e){this.a=d
this.b=e},
dsl:function dsl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dso:function dso(d){this.a=d},
dsv:function dsv(){},
dst:function dst(d){this.a=d},
dsu:function dsu(d,e){this.a=d
this.b=e},
dsq:function dsq(){},
dsr:function dsr(d,e){this.a=d
this.b=e},
dss:function dss(d,e){this.a=d
this.b=e},
dsA:function dsA(d){this.a=d},
a_l:function a_l(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bpL:function bpL(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Z_:function Z_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgZ:function bgZ(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dsE:function dsE(d){this.a=d},
dsB:function dsB(d,e){this.a=d
this.b=e},
dsC:function dsC(d,e){this.a=d
this.b=e},
dsD:function dsD(d){this.a=d},
Z0:function Z0(d){this.a=d},
bh_:function bh_(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dsF:function dsF(d,e){this.a=d
this.b=e},
ffc:function ffc(){},
fgp:function fgp(d,e,f){this.a=d
this.b=e
this.c=f},
ada:function ada(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eO6:function eO6(d){this.a=d},
eO7:function eO7(d){this.a=d},
P2:function P2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Y7:function Y7(d){this.a=d},
ay0:function ay0(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d1E:function d1E(d){this.a=d},
d1B:function d1B(){},
d1C:function d1C(d){this.a=d},
d1D:function d1D(d){this.a=d},
T3(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$T3=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||B.a.i(f).length===0){w=1
break}w=3
return A.b(A.M5(s),$async$T3)
case 3:t=h
J.cf(t,A.E(["role",e,"text",B.a.i(f),"at",new A.R(Date.now(),0,!1).a5().ac()],x.N,x.z))
w=4
return A.b(A.amk(s,t),$async$T3)
case 4:case 1:return A.h(u,v)}})
return A.i($async$T3,v)},
hqh(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=A.S(d).k("a2<1>")
v=A.B(new A.a2(d,new C.bXb(),w),w.k("H.E"))
w=v.length
if(w===0)return""
u=w<=24?v:B.d.fH(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,A.K)(u),++s){r=u[s]
q=J.a8(r)
p=J.y(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+A.t(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
bXb:function bXb(){},
hSB(d){return B.d.dN(B.By,new C.foa(d),new C.fob()).r},
foa:function foa(d){this.a=d},
fob:function fob(){},
amz:function amz(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bh5:function bh5(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dz_:function dz_(d){this.a=d},
dyZ:function dyZ(d){this.a=d},
dyR:function dyR(d,e,f){this.a=d
this.b=e
this.c=f},
dyW:function dyW(d){this.a=d},
dyT:function dyT(d,e,f){this.a=d
this.b=e
this.c=f},
dyX:function dyX(d){this.a=d},
dyS:function dyS(d){this.a=d},
dyY:function dyY(d){this.a=d},
dyU:function dyU(d){this.a=d},
dyV:function dyV(d){this.a=d},
h_y(d){var w=A.c3x(new A.R(Date.now(),0,!1)),v=d.bj
if(v===w)return
d.bj=w
d.bR=0
d.c5=A.a([],x.s)},
h_A(d){return A.c9(null,B.w.j(0.82),!0,null,new C.c3C(),d,null,!0,!0,x.H)},
a5r:function a5r(d){this.a=d},
c3C:function c3C(){},
c3B:function c3B(d){this.a=d},
hcA(){var w=new A.R(Date.now(),0,!1),v=w.bN(A.dB(4-A.mm(w),0,0,0,0,0).a),u=A.c_(A.bx(v),1,4,0,0,0,0,0)
return""+A.bx(v)+"-W"+B.a.aT(B.o.u(1+B.k.bw(B.o.an(v.by(A.c_(A.bx(u),A.bG(u),A.bQ(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
f6Z(d,e){var w,v,u,t,s,r,q=A.Fr(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.q(t,"email")
r=B.a.i(J.k(s==null?"":s).toLowerCase())
if((B.a.c8(r,"+local.ngmy")?B.a.ap(r,0,r.length-11):r)===q)return t}t=A.E(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
hHH(d,e){var w,v,u,t,s,r,q,p=A.Fr(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c8(q,"+local.ngmy")?B.a.ap(q,0,q.length-11):q)===p){w=A.aN(s.h(t,"winsLeft"))
w=w==null?null:B.k.O(w)
return w==null?0:w}}return 0},
i0I(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=A.Fr(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c8(q,"+local.ngmy")?B.a.ap(q,0,q.length-11):q)===n){w=A.aN(s.h(t,o))
w=w==null?null:B.k.O(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
hNW(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=A.Fr(b5),b2=A.c4T(),b3=C.hcA()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.a8(s)
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
if(r)u=s}if(u!=null){w=J.a8(u)
v=A.aN(w.h(u,a4))
v=v==null?a1:B.k.O(v)
w.n(u,a4,(v==null?1:v)-1)
w=A.aN(w.h(u,"outcome"))
w=w==null?a1:B.k.O(w)
return w==null?1:w}n=new C.fhb()
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
if(l!=null)return l}k=C.f6Z(b4,b5)
w=J.a8(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?A.a1(v.a(w.h(k,b0)),r,q):A.V(r,q)
w.n(k,b0,j)
for(w=b4.y,w=new A.cJ(w,A.a3(w).k("cJ<1,2>")).gaj(0);w.C();){i=w.d
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
h9h(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[1,2,3],v=d.a,u=0;u<3;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
if(w===0)return 1
t=q[e.aB(w)]
if(t===3&&d.f>=d.e)t=e.he()?1:2
return t},
fPM(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[-1,-2],v=d.a,u=0;u<2;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
return w===0?-1:q[e.aB(w)]},
hNX(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=A.Fr(a3),a1=new C.fhc()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.a8(s)
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
w=J.a8(u)
v=w.h(u,d)
l=J.k(v==null?"":v)
v=o>0?1:0
r=n>0?1:0
q=m>0?1:0
q=new C.fhd(v+r+q>1,l)
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
return C.fPM(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
hNV(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=A.aN(i.h(0,"wins")),g=h==null?m:B.k.O(h)
if(g==null)g=0
h=A.aN(i.h(0,"loses"))
w=h==null?m:B.k.O(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.hcA():A.c4T()
t=v+"|"+u
s=C.f6Z(d,e)
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
hWd(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
d.beC()
w=C.hNX(d,e,a0)
if(w!=null){if(w===3)++d.f
C.aez(d,e,w)
return w}v=C.hNW(d,e)
if(v!=null){if(v===3)++d.f
C.aez(d,e,v)
return v}u=C.hNV(d,e,a0)
if(u!=null)return new C.fvc(d,a0,e).$1(u)
t=C.f6Z(d,e)
s=J.a8(t)
r=A.aN(s.h(t,"winStreak"))
q=r==null?null:B.k.O(r)
if(q==null)q=0
s=A.aN(s.h(t,"loseStreak"))
p=s==null?null:B.k.O(s)
if(p==null)p=0
o=new C.fve(d,a0)
if(C.hHH(d,e)>0){n=o.$0()
C.i0I(d,e)
C.aez(d,e,n)
return n}if(q>=d.c){n=new C.fvd(d,a0).$0()
C.aez(d,e,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.aez(d,e,n)
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
if(f===3&&d.f>=d.e)f=a0.he()?1:2}else{s=l.length
if(s!==0)f=l[a0.aB(s)]
else f=g?1:-1}if(f===3)++d.f
C.aez(d,e,f)
return f},
c4L(d){var w=0,v=A.j(x.y),u
var $async$c4L=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c4K(d),$async$c4L)
case 3:if(f){u=!0
w=1
break}u=A.c4K(d)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c4L,v)},
aez(d,e,f){var w,v="winStreak",u="loseStreak",t=C.f6Z(d,e),s=J.a8(t),r=A.aN(s.h(t,v)),q=r==null?null:B.k.O(r)
if(q==null)q=0
r=A.aN(s.h(t,u))
w=r==null?null:B.k.O(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
fhb:function fhb(){},
fhc:function fhc(){},
fhd:function fhd(d,e){this.a=d
this.b=e},
fvc:function fvc(d,e,f){this.a=d
this.b=e
this.c=f},
fve:function fve(d,e){this.a=d
this.b=e},
fvd:function fvd(d,e){this.a=d
this.b=e},
am3:function am3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgX:function bgX(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cR$=d
_.b2$=e
_.c=_.a=null},
dsa:function dsa(d){this.a=d},
ds9:function ds9(d){this.a=d},
dsb:function dsb(d){this.a=d},
ds8:function ds8(d,e){this.a=d
this.b=e},
aJo:function aJo(){},
Mw:function Mw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c5A:function c5A(){},
c5z:function c5z(){},
ao3:function ao3(d,e,f){this.c=d
this.d=e
this.a=f},
fL3(d,e,f){return A.c9(null,B.w.j(0.88),!0,null,new C.c61(f,e),d,null,!0,!0,x.H)},
hu2(d){var w,v,u,t,s=B.a.i(d),r=s.split("-")
if(r.length===3){w=A.c7(r[0],null)
v=r[1]
u=A.c7(v,null)
t=A.c7(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?B.i8[u-1]:v)+" "+A.t(t)+", "+A.t(w)}return s},
ME:function ME(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c61:function c61(d,e){this.a=d
this.b=e},
bhC:function bhC(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
dRK:function dRK(d,e){this.a=d
this.b=e},
dRG:function dRG(){},
dRH:function dRH(){},
dRI:function dRI(d,e){this.a=d
this.b=e},
dRJ:function dRJ(d,e){this.a=d
this.b=e},
aJY:function aJY(){},
hcw(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.bea(new C.fqy(w))
w=w.a
return w==null?null:w.c.a},
hco(d){$.aU.x1$.push(new C.fql(d))},
hcI(d){var w=$.rG().gbd(),v=w!=null
if(!v||w.c==null)return
if(C.hcw(w)==="GamePlayScreen")if(v&&w.c!=null&&w.p9())w.eH()},
hcH(d){C.h9o(d,0)},
h9o(d,e){var w,v
if(e>4)return
w=d==null?$.rG().gbd():d
if(w==null||w.c==null)return
v=C.hcw(w)
if(v==="GameCenterScreen")return
if(D.eDi.t(0,v)&&w.p9()){w.eH()
$.aU.x1$.push(new C.fdt(w,e))}},
aNO(d,e,f){return A.ei(A.cm(new C.frV(e,d,f)),e,!0)},
fqy:function fqy(d){this.a=d},
fql:function fql(d){this.a=d},
fqk:function fqk(d){this.a=d},
fdt:function fdt(d,e){this.a=d
this.b=e},
frV:function frV(d,e,f){this.a=d
this.b=e
this.c=f},
ao7(d,e){var w=0,v=A.j(x.H),u
var $async$ao7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=A.U8(e)
w=2
return A.b(A.ao6(d,u),$async$ao7)
case 2:A.a65(d,u)
return A.h(null,v)}})
return A.i($async$ao7,v)},
ul(d,e,f,g,h,i,j,k){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$ul=A.e(function(l,m){if(l===1)return A.f(m,v)
for(;;)switch(w){case 0:o=A.xU(g)
if(o.length===0){w=1
break}t=e==null?A.Kg(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return A.b(A.MF(o),$async$ul)
case 3:q=m
if(j!=null&&j.length!==0&&J.qE(q,new C.c6f(j))){w=1
break}p=e==null?new A.R(Date.now(),0,!1):e
J.ph(q,0,new A.j3(B.o.u(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return A.b(C.ao7(o,q),$async$ul)
case 4:if(i==null||r==null||s)C.a67(o).bz(new C.c6g(),x.S).eS(new C.c6h())
case 1:return A.h(u,v)}})
return A.i($async$ul,v)},
a67(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a67=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=$.hdF
m=A.xU(d)
if(n==null||m.length===0){w=1
break}w=3
return A.b(A.MF(m),$async$a67)
case 3:t=f
s=J.cE(t)
if(!s.b8(t,new C.c6e())){w=1
break}w=4
return A.b(n.$2(m,t),$async$a67)
case 4:r=f
q=J.a8(r)
if(q.gM(r)!==s.gM(t)){w=1
break}for(p=!1,o=0;o<s.gM(t);++o)if(B.R.ao(s.h(t,o).ad(),null)!==B.R.ao(q.h(r,o).ad(),null))p=!0
w=p?5:6
break
case 5:w=7
return A.b(C.ao7(m,r),$async$a67)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$a67,v)},
aYk(d){var w=0,v=A.j(x.S),u,t
var $async$aYk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fL6(d,!1),$async$aYk)
case 3:t=J
w=4
return A.b(C.ao8(d,!1),$async$aYk)
case 4:u=t.dH(f,new C.c6d(new A.R(Date.now(),0,!1).bN(-864e8))).gM(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYk,v)},
ao8(d,e){var w=0,v=A.j(x.ac),u,t,s,r
var $async$ao8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=A.xU(d)
if(r.length===0){u=A.a([],x.gi)
w=1
break}w=3
return A.b(A.MF(r),$async$ao8)
case 3:t=g
s=A.U8(t)
if(s.length!==J.ac(t))C.ao7(r,s)
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ao8,v)},
hU8(d){var w,v,u,t=new A.R(Date.now(),0,!1),s=t.by(d).a,r=B.o.an(s,6e7)
if(r<1)return"Just now"
w=B.o.an(s,36e8)
if(w<1)return""+r+"m ago"
if(B.o.an(s,864e8)<1)return""+w+"h ago"
v=B.o.F(A.dh(d),12)===0?12:B.o.F(A.dh(d),12)
s=B.i8[A.bG(d)-1]
r=A.bx(d)===A.bx(t)?"":", "+A.bx(d)
w=B.a.aT(B.o.u(A.fX(d)),2,"0")
u=A.dh(d)<12?"AM":"PM"
return s+" "+A.bQ(d)+r+" \xb7 "+v+":"+w+" "+u},
bxN(d){var w=B.k.aa(Math.abs(d),2).split(".")
return"$"+A.os(w[0],A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fbD(),null)+"."+w[1]},
bBm(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$bBm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ao8(e,!1),$async$bBm)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
A.fL6(e,!0).bz(new C.fDs(e),t).bz(new C.fDt(),t).eS(new C.fDu())
w=4
return A.b(A.bZ(B.K,null,new C.fDv(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bBm)
case 4:case 1:return A.h(u,v)}})
return A.i($async$bBm,v)},
fNZ(d,e,f){var w=null,v=B.c.j(0.05),u=A.m(14),t=A.I(f.j(0.35),B.r,1)
return A.D(A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),B.bz,A.f4(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.dt)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.hG,w,w,w),1)},
dRL(d,e,f){var w=null,v=B.w.j(0.22),u=A.m(8),t=A.I(f.j(0.28),B.r,1)
return A.D(A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.f4(B.a3,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.eg)],x.p),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.Ly,w,w,w),1)},
c6f:function c6f(d){this.a=d},
c6g:function c6g(){},
c6h:function c6h(){},
c6e:function c6e(){},
c6d:function c6d(d){this.a=d},
fbD:function fbD(){},
fDs:function fDs(d){this.a=d},
fDt:function fDt(){},
fDu:function fDu(){},
fDv:function fDv(d,e){this.a=d
this.b=e},
fDr:function fDr(d,e){this.a=d
this.b=e},
fDq:function fDq(d){this.a=d},
ac0:function ac0(d,e){this.c=d
this.a=e},
dRN:function dRN(){},
dRO:function dRO(){},
dRP:function dRP(){},
dRQ:function dRQ(d){this.a=d},
dRS:function dRS(){},
dRR:function dRR(d){this.a=d},
ac_:function ac_(d,e){this.c=d
this.a=e},
dRM:function dRM(){},
bBn(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return A.hQ(B.aW,!1,w,d,new C.fDy(j,i,h,g,e,f),null,B.eN,!1,x.H)},
fDy:function fDy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fDw:function fDw(d,e){this.a=d
this.b=e},
fDx:function fDx(d,e){this.a=d
this.b=e},
ayF:function ayF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bdi:function bdi(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bq$=e
_.a7$=f
_.c=_.a=null},
d8F:function d8F(d,e){this.a=d
this.b=e},
d8E:function d8E(){},
acp:function acp(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aIU:function aIU(){},
aoU(d,e,f){return new C.aZa(f,d,e,null)},
huH(d){var w=A.a(B.k.aa(d,2).split("."),x.s),v=A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=A.os(w[0],v,new C.c7Q(),null)
return B.d.aH(w,".")},
aYn(){var w=$.t4
if((w>0?$.t4=w-1:w)<=0)$.t4=0},
afK(d,e){var w=0,v=A.j(x.H),u
var $async$afK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=$.fSn
w=u!=null?2:3
break
case 2:w=4
return A.b(u.$2(d,e),$async$afK)
case 4:case 3:return A.h(null,v)}})
return A.i($async$afK,v)},
aZa:function aZa(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c7R:function c7R(d){this.a=d},
c7Q:function c7Q(){},
M8:function M8(){},
bXI:function bXI(){},
fRN(d){if(d>0)return"+"+d
return""+d},
fRa(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
frW(d,e){var w=J.q(e,d)
if(w==null)w=A.fqI().h(0,d)
return w==null?90:w},
faB(d,e){var w,v,u=A.aX(x.S)
while(u.a<3){w=e.aB(41)-20
if(w===0)continue
u.J(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.J(0,d+v*7+3)
v=A.a([B.o.u(d)],x.s)
B.d.v(v,new A.jI(u,new C.faC(),u.$ti.k("jI<cl.E,n>")))
B.d.fo(v,e)
return v},
h8o(d,e,f){var w,v,u,t,s=A.aX(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.J(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.J(0,f[B.o.F(u,5)]+u);++u}t=A.a([d],x.s)
B.d.v(t,A.oZ(s,3,s.$ti.k("cl.E")))
B.d.fo(t,e)
return t},
hPk(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=A.a([],x.dA),b2=new A.eS()
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
b1.push(new C.HQ("Simplify \u221a("+t*s+"x^"+q+")",m,C.h8o(m,b2,A.a([""+(r+1)+"x^"+o+"\u221a"+n,A.t(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aB(35)
j=b2.aB(4)===0?1:2+b2.aB(4)
i=b2.aB(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.HQ("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.faB(k,b2)))}else if(u===2){k=2+b2.aB(18)
j=b2.aB(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aB(10)+2
b1.push(new C.HQ("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.faB(g,b2)))}else b1.push(new C.HQ("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.faB(k,b2)))}else if(u===3){e=b2.aB(11)-5
o=b2.aB(11)
n=b2.aB(11)
d=b2.aB(11)+2
l=b2.he()?1:-1
a0=e+l*(b2.aB(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===B.k.jK(a4)?""+B.k.O(a4):"\u221a"+a3
b1.push(new C.HQ("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.faB(a0,b2)))}else{a6=2+b2.aB(10)
a7=a6+2+b2.aB(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.HQ("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.h8o(m,b2,A.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
hZW(d){var w,v,u=x.s,t=A.a(d.split(""),u)
if(t.length<4)return new A.dA(A.a(d.split(""),u),x.bJ).fT(0)
for(w=0;w<12;++w){B.d.fo(t,B.cI)
v=B.d.fT(t)
if(v!==d)return v}return new A.dA(t,x.bJ).fT(0)},
HQ:function HQ(d,e,f){this.a=d
this.b=e
this.c=f},
faC:function faC(){},
anw:function anw(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBv:function aBv(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
dKN:function dKN(d){this.a=d},
dKO:function dKO(d){this.a=d},
dKP:function dKP(d){this.a=d},
dKQ:function dKQ(d,e){this.a=d
this.b=e},
dKR:function dKR(d,e){this.a=d
this.b=e},
dKS:function dKS(d){this.a=d},
dKM:function dKM(d){this.a=d},
dKT:function dKT(d){this.a=d},
dKL:function dKL(d){this.a=d},
dKW:function dKW(d){this.a=d},
dKX:function dKX(d){this.a=d},
dKV:function dKV(d,e){this.a=d
this.b=e},
dKU:function dKU(d,e){this.a=d
this.b=e},
ao9:function ao9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBM:function aBM(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
dS9:function dS9(d,e,f){this.a=d
this.b=e
this.c=f},
dSa:function dSa(d){this.a=d},
dS5:function dS5(d){this.a=d},
dS7:function dS7(d,e){this.a=d
this.b=e},
dS6:function dS6(d,e){this.a=d
this.b=e},
dS8:function dS8(d,e){this.a=d
this.b=e},
dS4:function dS4(d){this.a=d},
hqU(d){var w,v,u,t,s,r,q,p=new A.R(Date.now(),0,!1),o=p.bN(36e8)
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
a6d(d){var w=0,v=A.j(x.ck),u,t,s,r,q,p,o
var $async$a6d=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.b)
w=1
break}w=3
return A.b(A.ay(),$async$a6d)
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
p=A.cD(p,new C.c6H(),p.$ti.k("H.E"),x.b1)
p=A.B(p,A.a3(p).k("H.E"))
B.d.b1(p,new C.c6I())
u=p
w=1
break}catch(n){r=A.a9(n)
$.am.$1("[calendar-memory] load: "+A.t(r))
p=A.a([],x.b)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$a6d,v)},
aor(d,e){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$aor=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.a6d(d),$async$aor)
case 2:r=g
q=J.cE(r)
q.bn(r,new C.c6E(e))
q.J(r,e)
q.b1(r,new C.c6F())
w=3
return A.b(A.ay(),$async$aor)
case 3:u=g
t=B.a.i(d.toLowerCase())
q=q.kf(r,80)
s=q.$ti.k("J<aj.E,a4<n,@>>")
q=A.B(new A.J(q,new C.c6G(),s),s.k("aj.E"))
w=4
return A.b(u.ar("String","ngmy_helper_calendar_v1_"+t,B.R.ao(q,null)),$async$aor)
case 4:return A.h(null,v)}})
return A.i($async$aor,v)},
huf(d,e){var w=Date.now(),v=new A.R(w,0,!1).bQ()
w=J.dH(d,new C.c6J(v,v.bN(A.dB(14,0,0,0,0,0).a)))
w=A.B(w,w.$ti.k("H.E"))
return w},
h06(d){var w,v,u,t,s,r,q,p,o,n,m=C.huf(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=A.da(m,0,A.dJ(20,"count",x.S),A.S(m).c),v=w.$ti,w=new A.bW(w,w.gM(0),v.k("bW<aj.E>")),v=v.k("aj.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=B.o.F(A.dh(s),12)===0?12:B.o.F(A.dh(s),12)
q=A.dh(s)>=12?"PM":"AM"
p=B.a.aT(B.o.u(A.fX(s)),2,"0")
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
c6H:function c6H(){},
c6I:function c6I(){},
c6E:function c6E(d){this.a=d},
c6F:function c6F(){},
c6G:function c6G(){},
c6J:function c6J(d,e){this.a=d
this.b=e},
hqV(d){var w,v,u,t,s,r,q,p,o=null,n=new A.R(Date.now(),0,!1)
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
fZs(d){var w=B.o.F(A.dh(d),12)===0?12:B.o.F(A.dh(d),12),v=A.dh(d)>=12?"PM":"AM"
return""+A.bG(d)+"/"+A.bQ(d)+" "+w+":"+B.a.aT(B.o.u(A.fX(d)),2,"0")+" "+v},
Tg(d){var w=0,v=A.j(x.e),u,t,s,r,q,p,o
var $async$Tg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.x)
w=1
break}w=3
return A.b(A.ay(),$async$Tg)
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
p=A.cD(p,new C.c_5(),p.$ti.k("H.E"),x.Q)
p=A.B(p,A.a3(p).k("H.E"))
B.d.b1(p,new C.c_6())
u=p
w=1
break}catch(n){r=A.a9(n)
$.am.$1("[call-memory] load: "+A.t(r))
p=A.a([],x.x)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Tg,v)},
aWI(d,e){var w=0,v=A.j(x.H),u,t,s,r
var $async$aWI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$aWI)
case 2:u=g
t=A.da(e,0,A.dJ(120,"count",x.S),A.S(e).c).dE(0)
s=B.a.i(d.toLowerCase())
r=A.S(t).k("J<1,a4<n,@>>")
r=A.B(new A.J(t,new C.c_3(),r),r.k("aj.E"))
w=3
return A.b(u.ar("String","ngmy_call_memory_v1_"+s,B.R.ao(r,null)),$async$aWI)
case 3:return A.h(null,v)}})
return A.i($async$aWI,v)},
aWJ(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$aWJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:p=A.V(x.N,x.Q)
o=J
w=2
return A.b(C.Tg(d),$async$aWJ)
case 2:u=o.aW(g)
case 3:if(!u.C()){w=4
break}t=u.gU(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("bc<2>")
q=A.B(new A.bc(p,u),u.k("H.E"))
B.d.b1(q,new C.c_4())
w=5
return A.b(C.aWI(d,q),$async$aWJ)
case 5:return A.h(null,v)}})
return A.i($async$aWJ,v)},
c_7(d,e){var w=0,v=A.j(x.e),u,t,s
var $async$c_7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Tg(d),$async$c_7)
case 3:t=s.dH(g,new C.c_8(e.bN(-72e8),e.bN(72e8)))
t=A.B(t,t.$ti.k("H.E"))
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c_7,v)},
fZt(d,e){var w,v,u,t,s,r=J.a8(d)
if(r.gal(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.kf(d,e),v=w.$ti,w=new A.bW(w,w.gM(0),v.k("bW<aj.E>")),v=v.k("aj.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gUs()+"\n"
t=t.f
if(t!=null&&B.a.i(t).length!==0){s=B.a.i(t)
u+="  Voicemail/text: "+(s.length>180?B.a.ap(s,0,177)+"\u2026":s)+"\n"}}r=r.gM(d)>e?u+("\u2026 and "+(r.gM(d)-e)+" more\n"):u
return B.a.i(r.charCodeAt(0)==0?r:r)},
hVY(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new A.R(q,0,!1).bQ(),o=d.toLowerCase(),n=A.c_(A.bx(p),A.bG(p),A.bQ(p),0,0,0,0,0)
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
return A.c_(A.bx(n),A.bG(n),A.bQ(n),u,t,0,0,0)},
he4(d){var w=A.af("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
r5:function r5(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c_5:function c_5(){},
c_6:function c_6(){},
c_3:function c_3(){},
c_4:function c_4(){},
c_8:function c_8(d,e){this.a=d
this.b=e},
h09(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lt(t,w,v,u==null?null:J.k(u))},
hul(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b6(v,new C.c6P(),x.bP)
v=A.B(v,v.$ti.k("aj.E"))}if(v==null)v=D.d_u
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.y(d.h(0,"printable"),!0)
return new C.ie(r,w,v,u,t,typeof d.h(0,s)=="number"?B.k.O(A.f8(d.h(0,s))):0)},
huk(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.hHV(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?B.k.O(A.f8(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?B.k.O(A.f8(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b6(s,new C.c6N(),x.u)
s=A.B(s,s.$ti.k("aj.E"))}return new C.i_(p,w,v,u,s==null?D.av4:s,t)},
hHW(d){var w,v,u,t=A.E([F.B8,"investments",B.os,"games",B.jt,"loans",B.hx,"withdrawals",B.kH,"deposits",B.kI,"civic",B.kG,"store",B.qR,"jobs",B.mf,"refunds",B.eR,"account",B.lD,"music",B.xC,"help"],x.dk,x.N)
for(w=new A.cJ(t,A.a3(t).k("cJ<1,2>")).gaj(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
hHV(d){switch(d){case"investments":return F.B8
case"games":return B.os
case"loans":return B.jt
case"withdrawals":return B.hx
case"deposits":return B.kH
case"civic":return B.kI
case"store":return B.kG
case"jobs":return B.qR
case"refunds":return B.mf
case"account":return B.eR
case"music":return B.lD
default:return B.xC}},
mR(d){var w=A.a([new C.lt("text",d,null,null)],x.a)
return w},
afH(){var w=null,v=x.v
return A.a([new C.i_("investments","Investments",F.B8,4280468830,A.a([new C.ie("inv1","How do I buy an investment plan?",C.mR("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.ie("inv2","When do I get paid from my plan?",C.mR("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.ie("inv3","Can I have more than one plan?",C.mR("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.i_("games","Games",B.os,4287323382,A.a([new C.ie("gam1","How do NGMY games work?",C.mR("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.ie("gam2","Why did my game payout change?",C.mR("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.i_("loans","Loans",B.jt,4294538006,A.a([new C.ie("loan1","How do I apply for a loan?",C.mR("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.ie("loan2","What is the repayment period?",C.mR("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.i_("withdrawals","Withdrawals",B.hx,4282090230,A.a([new C.ie("wd1","How do I withdraw money?",C.mR("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.ie("wd2","Why is my withdrawal pending?",C.mR("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.i_("deposits","Deposits",B.kH,4279548070,A.a([new C.ie("dep1","How do I deposit funds?",C.mR("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.ie("dep2","How long until my deposit posts?",C.mR("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.i_("civic","Civic Registry",B.kI,4289170426,A.a([new C.ie("civ1","What is Civic Registry?",C.mR("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.ie("civ2","What does \u201cmissed\u201d mean on my profile?",C.mR("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.i_("store","NGMY Store",B.kG,4293675161,A.a([new C.ie("sto1","How do I buy from NGMY Store?",C.mR("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.ie("sto2","How do I sell in the store?",C.mR("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.i_("jobs","Jobs & Creator",B.qR,4293548044,A.a([new C.ie("job1","How do I find jobs?",C.mR("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.ie("job2","How do I post a job?",C.mR("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.i_("refunds","Refunds",B.mf,4293870660,A.a([new C.ie("ref1","Can I get a refund?",C.mR("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.ie("ref2","How long do refunds take?",C.mR("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.i_("account","Account",B.eR,4281908728,A.a([new C.ie("acc1","How do I update my profile?",C.mR("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.ie("acc2","I forgot my password \u2014 what now?",C.mR("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.i_("music","Music Charts",B.lD,4290807036,A.a([new C.ie("mus1","What are Music Charts?",C.mR("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.ie("mus2","How do I upload music?",C.mR("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.i_("help","Help Center",B.xC,4279080072,A.a([new C.ie("hlp1","Where can I get live help?",C.mR("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.ie("hlp2","How do daily Helper limits work?",C.mR("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
h0a(d){var w,v=J.a8(d),u=v.gal(d)
if(u)return C.afH()
v=v.dt(d,new C.c6S(),x.i)
w=A.B(v,v.$ti.k("aj.E"))
B.d.b1(w,new C.c6T())
return w.length===0?C.afH():w},
h0b(d){var w=J.b6(d,new C.c6U(),x.P)
w=A.B(w,w.$ti.k("aj.E"))
return A.E(["categories",w,"savedAt",new A.R(Date.now(),0,!1).a5().ac()],x.N,x.z)},
aot(d){return C.hum(d)},
hum(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q,p
var $async$aot=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.ay(),$async$aot)
case 6:s=f
w=7
return A.b(s.ar("String","ngmy_helper_kb_v1",B.R.ao(C.h0b(d),null)),$async$aot)
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
return A.i($async$aot,v)},
c6R(){var w=0,v=A.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$c6R=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$c6R)
case 7:r=e
q=A.aT(J.q(r.a,"ngmy_helper_kb_v1"))
if(q==null||B.a.i(q).length===0){l=C.afH()
u=l
w=1
break}p=B.R.aG(0,q,null)
if(!x.f.b(p)){l=C.afH()
u=l
w=1
break}o=J.q(p,"categories")
if(!x.j.b(o)){l=C.afH()
u=l
w=1
break}n=C.h0a(o)
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
l=C.afH()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$c6R,v)},
aYJ(){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$aYJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c0(),$async$aYJ)
case 7:if(!e){u=null
w=1
break}w=8
return A.b(A.f0("ngmy_helper_kb",null,!1,B.bG),$async$aYJ)
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
return A.i($async$aYJ,v)},
aYK(d){return C.hun(d)},
hun(d){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aYK=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c0(),$async$aYK)
case 7:if(!f){u=!1
w=1
break}w=8
return A.b(A.hz("ngmy_helper_kb",d,!1,!1,B.cF,null),$async$aYK)
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
return A.i($async$aYK,v)},
aou(){var w=0,v=A.j(x.I),u,t,s,r
var $async$aou=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c6R(),$async$aou)
case 3:s=e
w=4
return A.b(C.aYJ(),$async$aou)
case 4:r=e
w=r!=null&&x.j.b(J.q(r,"categories"))?5:6
break
case 5:t=C.h0a(x.j.a(J.q(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return A.b(C.aot(t),$async$aou)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aou,v)},
c6V(d){var w=0,v=A.j(x.y),u
var $async$c6V=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aot(d),$async$c6V)
case 3:u=C.aYK(C.h0b(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6V,v)},
lt:function lt(d,e,f,g){var _=this
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
c6Q:function c6Q(){},
c6P:function c6P(){},
i_:function i_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c6O:function c6O(){},
c6N:function c6N(){},
c6S:function c6S(){},
c6T:function c6T(){},
c6U:function c6U(){},
b6X:function b6X(d){this.a=d},
Uf:function Uf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBY:function aBY(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
dVP:function dVP(){},
dVQ:function dVQ(){},
dVJ:function dVJ(d){this.a=d},
dVK:function dVK(d){this.a=d},
dVs:function dVs(d,e){this.a=d
this.b=e},
dVt:function dVt(d){this.a=d},
dVu:function dVu(d,e,f){this.a=d
this.b=e
this.c=f},
dVr:function dVr(d){this.a=d},
dVG:function dVG(d,e){this.a=d
this.b=e},
dVH:function dVH(d,e){this.a=d
this.b=e},
dVI:function dVI(d){this.a=d},
dVA:function dVA(d){this.a=d},
dVB:function dVB(d,e,f){this.a=d
this.b=e
this.c=f},
dVz:function dVz(d,e){this.a=d
this.b=e},
dVF:function dVF(d,e,f){this.a=d
this.b=e
this.c=f},
dVE:function dVE(d,e){this.a=d
this.b=e},
dVD:function dVD(d,e){this.a=d
this.b=e},
dVC:function dVC(d,e,f){this.a=d
this.b=e
this.c=f},
dVw:function dVw(d){this.a=d},
dVv:function dVv(d){this.a=d},
dVx:function dVx(d,e){this.a=d
this.b=e},
dVy:function dVy(d){this.a=d},
dVO:function dVO(d,e){this.a=d
this.b=e},
dVN:function dVN(d,e){this.a=d
this.b=e},
dVM:function dVM(){},
dVL:function dVL(d,e){this.a=d
this.b=e},
Ou:function Ou(d,e){this.c=d
this.a=e},
b8N:function b8N(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cIn:function cIn(d){this.a=d},
cIm:function cIm(d,e){this.a=d
this.b=e},
cIk:function cIk(d,e){this.a=d
this.b=e},
cIo:function cIo(d){this.a=d},
cIl:function cIl(d,e){this.a=d
this.b=e},
cIj:function cIj(d,e){this.a=d
this.b=e},
cIp:function cIp(d){this.a=d},
cIq:function cIq(d,e){this.a=d
this.b=e},
ZN:function ZN(d,e,f){this.c=d
this.d=e
this.a=f},
aDX:function aDX(){this.d=$
this.c=this.a=null},
eJb:function eJb(d,e){this.a=d
this.b=e},
eJc:function eJc(d){this.a=d},
eJi:function eJi(){},
eJh:function eJh(d,e){this.a=d
this.b=e},
eJg:function eJg(d,e){this.a=d
this.b=e},
eJd:function eJd(d,e){this.a=d
this.b=e},
eJf:function eJf(d,e,f){this.a=d
this.b=e
this.c=f},
eJe:function eJe(d,e,f){this.a=d
this.b=e
this.c=f},
ZM:function ZM(d,e){this.c=d
this.a=e},
aDW:function aDW(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
eJ7:function eJ7(d,e){this.a=d
this.b=e},
eJ5:function eJ5(d){this.a=d},
eJ6:function eJ6(d,e){this.a=d
this.b=e},
eJ9:function eJ9(d,e){this.a=d
this.b=e},
eJa:function eJa(d){this.a=d},
eJ8:function eJ8(d,e){this.a=d
this.b=e},
hui(d){var w=new A.J(d,new C.c6K(),A.S(d).k("J<1,n>")).aH(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
c6L(d,e,f){return C.huj(d,e,f)},
huj(b4,b5,b6){var w=0,v=A.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$c6L=A.e(function(b8,b9){if(b8===1)return A.f(b9,v)
for(;;)switch(w){case 0:b3=B.a.i(b5)
if(b3.length===0){u=new A.Jq([A.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return A.b(A.qB(A.mU(b3),C.hui(b6)+"\n\nAdmin instruction:\n"+b4,B.hj,null),$async$c6L)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=B.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new A.Jq([A.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=B.a.i(a3)
if(J.cZ(s,"```"))s=B.a.e7(J.fV8(s,A.af("^```(?:json)?\\s*",!0,!1,!1,!1),""),A.af("\\s*```$",!0,!1,!1,!1),"")
r=B.R.aG(0,s,null)
a3=x.f
if(!a3.b(r)){a3=A.a([],x.Y)
u=new A.Jq([a3,"AI response was not valid JSON.",null,null])
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
u=new A.Jq([a3,"AI did not return any categories.",p,o])
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
J.cf(a0,C.h09(A.a1(a3.a(a1),a4,a5)))}if(J.ac(a0)===0){a9=J.q(e,"answer")
J.cf(a0,new C.lt("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=A.t(f)
b1=J.q(e,"question")
J.cf(g,new C.ie("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.y(J.q(e,"printable"),!0),f))}a9=J.q(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.q(j,"iconKey")
b0=C.huh(J.k(b0==null?"help":b0))
b1=typeof J.q(j,"colorValue")=="number"?B.k.O(A.f8(J.q(j,"colorValue"))):4284773515
J.cf(m,new C.i_(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ac(a3)!==0)===!0?o:null
u=new A.Jq([m,null,p,a3])
w=1
break}catch(b7){a2=A.a9(b7)
a3=A.t(a2)
a4=A.a([],x.Y)
u=new A.Jq([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c6L,v)},
huh(d){switch(d){case"investments":return F.B8
case"games":return B.os
case"loans":return B.jt
case"withdrawals":return B.hx
case"deposits":return B.kH
case"civic":return B.kI
case"store":return B.kG
case"jobs":return B.qR
case"refunds":return B.mf
case"account":return B.eR
case"music":return B.lD
default:return B.xC}},
hUu(d,e,f){var w,v,u,t=A.bl(d,!0,x.i)
if(f!=null&&J.ac(e)===1){w=B.d.be(t,new C.fsi(f))
if(w>=0){t[w]=J.fo(e).cDl(f,t[w].f)
return t}}B.d.v(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].b8S(u)
return t},
c6K:function c6K(){},
fsi:function fsi(d){this.a=d},
cZP:function cZP(d){this.a=d},
Ug:function Ug(d,e,f){this.c=d
this.d=e
this.a=f},
aC_:function aC_(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
dWp:function dWp(){},
dW5:function dW5(d,e){this.a=d
this.b=e},
dWa:function dWa(d,e){this.a=d
this.b=e},
dW8:function dW8(d,e){this.a=d
this.b=e},
dW6:function dW6(d){this.a=d},
dW7:function dW7(d){this.a=d},
dW9:function dW9(d,e,f){this.a=d
this.b=e
this.c=f},
dW1:function dW1(){},
dW2:function dW2(){},
dW3:function dW3(){},
dW4:function dW4(){},
dWf:function dWf(d,e){this.a=d
this.b=e},
dWg:function dWg(d){this.a=d},
dWh:function dWh(d){this.a=d},
dWi:function dWi(d){this.a=d},
dWj:function dWj(d){this.a=d},
dWk:function dWk(d){this.a=d},
dWl:function dWl(){},
dWm:function dWm(d){this.a=d},
dWe:function dWe(d){this.a=d},
dWn:function dWn(d){this.a=d},
dWd:function dWd(d){this.a=d},
dWo:function dWo(d,e){this.a=d
this.b=e},
dWc:function dWc(d,e){this.a=d
this.b=e},
dWb:function dWb(d,e){this.a=d
this.b=e},
hC6(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.a([],x.eO)
for(w=A.af("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kI(0,d),w=new A.IU(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
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
m.push(A.dp(n,n,n,n,n,n,n,n,n,A.l(n,n,u?B.cm:B.aK,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return A.tf(n,n,n,B.eB,n,n,!0,n,A.dp(m,n,n,n,n,n,n,n,n,n,n),B.a5,n,n,B.de,B.cd)},
dcW:function dcW(d){this.a=d},
azy:function azy(d,e){this.a=d
this.b=e},
aos:function aos(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBZ:function aBZ(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
dVZ:function dVZ(d,e){this.a=d
this.b=e},
dW_:function dW_(d,e){this.a=d
this.b=e},
dVR:function dVR(d){this.a=d},
dVS:function dVS(d){this.a=d},
dW0:function dW0(){},
dVU:function dVU(d,e){this.a=d
this.b=e},
dVT:function dVT(d,e){this.a=d
this.b=e},
dVW:function dVW(){},
dVY:function dVY(){},
dVX:function dVX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dVV:function dVV(d,e){this.a=d
this.b=e},
azw:function azw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aay:function aay(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aYI:function aYI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c6M:function c6M(d){this.a=d},
aaq:function aaq(d,e,f){this.c=d
this.d=e
this.a=f},
cC3:function cC3(d){this.a=d},
cC4:function cC4(){},
cC5:function cC5(d){this.a=d},
azx:function azx(d,e,f){this.c=d
this.d=e
this.a=f},
beN:function beN(){this.c=this.a=this.d=null},
dcX:function dcX(d,e){this.a=d
this.b=e},
dcZ:function dcZ(d,e){this.a=d
this.b=e},
dcY:function dcY(d){this.a=d},
hvQ(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
hvR(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
hvP(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
h8j(d){var w
if(new A.a2(A.a(d.split("\n"),x.s),new C.fam(),x.cc).gM(0)<3)w=d.length>100&&B.a.t(d,"\n")
else w=!0
return w},
hVD(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.hvP(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
apg:function apg(d,e){this.a=d
this.b=e},
HV:function HV(d,e){this.a=d
this.b=e},
rb:function rb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fam:function fam(){},
aov:function aov(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aC0:function aC0(d,e,f,g,h,i,j){var _=this
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
dWD:function dWD(d,e){this.a=d
this.b=e},
dWu:function dWu(d){this.a=d},
dWw:function dWw(){},
dWx:function dWx(d,e){this.a=d
this.b=e},
dWy:function dWy(d){this.a=d},
dWz:function dWz(){},
dWA:function dWA(d,e){this.a=d
this.b=e},
dWB:function dWB(d){this.a=d},
dWC:function dWC(d){this.a=d},
dWv:function dWv(d,e){this.a=d
this.b=e},
dWK:function dWK(d,e){this.a=d
this.b=e},
dWH:function dWH(){},
dWI:function dWI(d,e){this.a=d
this.b=e},
dWJ:function dWJ(d,e){this.a=d
this.b=e},
dWG:function dWG(d,e){this.a=d
this.b=e},
dWF:function dWF(d,e){this.a=d
this.b=e},
dWM:function dWM(d){this.a=d},
dWL:function dWL(d){this.a=d},
dWt:function dWt(d,e){this.a=d
this.b=e},
dWs:function dWs(d,e){this.a=d
this.b=e},
dWN:function dWN(d,e){this.a=d
this.b=e},
dWE:function dWE(d,e){this.a=d
this.b=e},
dWq:function dWq(d){this.a=d},
dWr:function dWr(d){this.a=d},
aK5:function aK5(){},
c6X(d){var w=0,v=A.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$c6X=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=D.Qu
w=1
break}w=3
return A.b(A.ay(),$async$c6X)
case 3:r=f
q=B.a.i(d.toLowerCase())
t=A.aT(J.q(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.Qu
w=1
break}try{q=A.a1(x.f.a(B.R.aG(0,t,null)),x.N,x.z)
p=J.y(q.h(0,"contacts"),!0)
o=J.y(q.h(0,"calendar"),!0)
n=J.y(q.h(0,"calls"),!0)
q=J.y(q.h(0,"allGrantedOnce"),!0)
u=new C.Uh(p,o,n,q)
w=1
break}catch(l){s=A.a9(l)
$.am.$1("[helper-perms] load: "+A.t(s))
u=D.Qu
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c6X,v)},
aow(d,e){var w=0,v=A.j(x.H),u
var $async$aow=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){w=1
break}w=4
return A.b(A.ay(),$async$aow)
case 4:w=3
return A.b(g.ar("String","ngmy_helper_permissions_v1_"+B.a.i(d.toLowerCase()),B.R.ao(e.ad(),null)),$async$aow)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aow,v)},
c6W(d){var w=0,v=A.j(x.gp),u,t
var $async$c6W=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=new C.Uh(!0,!0,!0,!0)
w=3
return A.b(C.aow(d,t),$async$c6W)
case 3:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6W,v)},
he5(d){var w=B.a.i(d.toLowerCase()),v=A.af("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=A.af("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=A.af("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=A.af("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
he3(d){var w=A.af("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
Uh:function Uh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bBt(d,e,f,g,h){var w=0,v=A.j(x.H),u,t,s
var $async$bBt=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return A.b(C.aYE(h),$async$bBt)
case 3:if(j){w=1
break}w=4
return A.b(C.aoo(h),$async$bBt)
case 4:if(d.e==null){w=1
break}t=A.qh(d,!0)
t.toString
s=A.de()
s.b=A.o7(new C.fEi(g,e,f,s),!1,!1)
t.lz(0,s.bc())
case 1:return A.h(u,v)}})
return A.i($async$bBt,v)},
fEi:function fEi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fEh:function fEh(d){this.a=d},
Yw:function Yw(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayY:function ayY(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cR$=d
_.b2$=e
_.c=_.a=null},
dag:function dag(d){this.a=d},
dah:function dah(d,e,f){this.a=d
this.b=e
this.c=f},
dam:function dam(){},
dal:function dal(d){this.a=d},
dai:function dai(d){this.a=d},
daj:function daj(){},
dak:function dak(d){this.a=d},
aIZ:function aIZ(){},
hvi(d){var w=B.a.i(d),v=A.af("[^A-Z0-9]",!0,!1,!1,!1),u=A.aJ(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
hvh(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
ap2(d){return C.hvf(d)},
hvf(d){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$ap2=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.f0("ngmy_local_deposit_qr_v1_"+B.a.i(d),null,!1,B.bG),$async$ap2)
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
return A.i($async$ap2,v)},
aZy(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aZy=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.hvi(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.f0("ngmy_local_deposit_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bG),$async$aZy)
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
return A.i($async$aZy,v)},
h0z(d){var w,v=B.a.i(d)
if(B.a.a0(v,"NGMYLOCALDEP1|")){w=B.a.i(B.a.b_(v,14))
return w.length===0?null:w}return null},
hvg(d,e,f){var w=B.a.i(f)
if(w.length===0)return!1
return B.d.b8(e,new C.c8K(B.a.i(d.toLowerCase()),w))},
h0A(d,e,f,g,h){var w,v,u=J.a8(g),t=u.h(g,"lockedToEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=B.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.pA(!1,0,y.u)
if(s!==B.a.i(f.toLowerCase()))return new C.pA(!1,0,y.j)
v=B.a.i(h)
if(v.length===0)return new C.pA(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.pA(!1,0,"Verification code does not match this deposit.")
if(!C.hvg(e,d,w))return new C.pA(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
fLm(d,e){var w,v,u="amount",t=J.a8(d),s=t.h(d,"redeemedBy")
if(B.a.i(J.k(s==null?"":s)).length!==0)return D.dui
s=t.h(d,"lockedToEmail")
w=B.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=B.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){A.aN(t.h(d,u))
return new C.MR(!0,!1,!1,!0)}if(w!==B.a.i(e.toLowerCase())){A.aN(t.h(d,u))
return new C.MR(!0,!1,!0,!1)}A.aN(t.h(d,u))
return new C.MR(!0,!1,!1,!1)},
c8Q(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$c8Q=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=C.h0z(d)
if(s==null){u=D.Qw
w=1
break}w=3
return A.b(C.ap2(s),$async$c8Q)
case 3:t=g
if(t==null){u=D.Qw
w=1
break}u=C.fLm(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c8Q,v)},
aZA(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$aZA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aZy(d),$async$aZA)
case 3:s=g
if(s==null||s.length===0){u=D.Qw
w=1
break}w=4
return A.b(C.ap2(s),$async$aZA)
case 4:t=g
if(t==null){u=D.Qw
w=1
break}u=C.fLm(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZA,v)},
c8R(d,e,f,g,h){var w=0,v=A.j(x.D),u,t
var $async$c8R=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aZy(d),$async$c8R)
case 3:t=j
if(t==null||t.length===0){u=new C.pA(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.UC(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c8R,v)},
UC(d,e,f,g,h){return C.hvj(d,e,f,g,h)},
hvj(a2,a3,a4,a5,a6){var w=0,v=A.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$UC=A.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.h0z(a4)
if(a0==null){u=new C.pA(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return A.b(C.ap2(a0),$async$UC)
case 3:k=a8
if(k==null){u=new C.pA(!1,0,y.m)
w=1
break}j=C.fLm(k,a5)
if(j.b){u=new C.pA(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.pA(!1,0,y.u)
w=1
break}if(j.c){u=new C.pA(!1,0,y.j)
w=1
break}i=C.h0A(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=A.aN(J.q(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.pA(!1,0,"Invalid deposit amount.")
w=1
break}r=new A.R(Date.now(),0,!1).a5().ac()
q=B.a.i(a5.toLowerCase())
t=5
w=8
return A.b(A.f0("ngmy_local_deposit_qr_v1_"+B.a.i(a0),null,!1,B.bG),$async$UC)
case 8:p=a8
if(p==null){u=new C.pA(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.q(p,"redeemedBy")
if(B.a.i(J.k(g==null?"":g)).length!==0){u=new C.pA(!1,0,"This deposit code was already used.")
w=1
break}o=C.h0A(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=B.a.i(a0)
f=x.N
e=x.z
n=A.dV(p,f,e)
J.aG(n,"redeemedBy",q)
J.aG(n,"redeemedAt",r)
w=9
return A.b(A.hz("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,B.cF,null),$async$UC)
case 9:n=J.q(p,"shortCode")
m=B.a.i(J.k(n==null?"":n))
w=J.ac(m)!==0?10:11
break
case 10:w=12
return A.b(A.hz("ngmy_local_deposit_code_v1_"+B.a.i(m).toUpperCase(),A.E(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,B.cF,null),$async$UC)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=A.a9(a1)
$.am.$1("[local deposit qr] redeem: "+A.t(l))
u=new C.pA(!1,0,"Could not apply deposit. Check connection and try again.")
w=1
break
w=7
break
case 4:w=2
break
case 7:u=new C.pA(!0,h,null)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$UC,v)},
MR:function MR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
pA:function pA(d,e,f){this.a=d
this.b=e
this.c=f},
c8K:function c8K(d,e){this.a=d
this.b=e},
c8Y(d,e){var w
A.fRo(d,e,!1)
A.qz(d.a,d.d,!0,!1)
w=B.a.i("")
if(w.length!==0)A.Ah(!0,!1,d.d,w)},
a6A(d,e){if(d==null)return!1
return A.bx(d)===e.gce()&&A.bG(d)===e.gcb()&&A.bQ(d)===e.gcs()},
hvr(d){var w=A.dh(d)*60+A.fX(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
h0H(d){if(A.dh(d)>=12)return!1
if(A.mm(d)===6||A.mm(d)===7)return!1
return!0},
c91(d){var w=d.c?d.bQ():d
return w.cX(A.c_(A.bx(w),A.bG(w),A.bQ(w),12,0,0,0,0))},
fLq(d,e){var w,v,u,t=d.gBK()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a6A(d.fx,e)&&d.fy>0.0001)return B.k.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bQ()
if(!C.c91(w))return 0
v=A.c_(e.gce(),e.gcb(),e.gcs(),12,0,0,0,0)
if(!e.cX(v))return t
if(!e.c9(w))return 0
u=B.o.an(v.by(w).a,1000)
if(u<=0)return t
return B.k.D(t*(B.o.D(B.o.an(e.by(w).a,1000),0,u)/u),0,t)},
fLp(d,e){var w,v,u,t,s,r,q,p=new A.R(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a6A(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bQ():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!B.d.b8(e,new C.c8X(s))&&C.c91(t)){r=d.gBK()
v=r>0
if(v){q=new A.d1(s,d.a,r,B.fA,B.fb,"Clock-in daily earnings (local)",null,null,B.ck,p)
C.c8Y(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a6A(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a6A(o,p)&&!C.c91(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
c8X:function c8X(d){this.a=d},
hK0(d){var w,v,u=d.k4,t=u==null?null:B.a.i(u)
if(t!=null&&t.length!==0)return t
w=B.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=B.a.i(d.a)
if(B.a.t(v,"@"))return B.d.gL(v.split("@"))
return"Member"},
i_K(d,e,f,g,h,i){return A.ht(d,new C.ap3(f,e,i,g,h,null),!0,null,x.H)},
h4X(d){var w,v,u=d.c?d.bQ():d,t=A.dh(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+A.bG(u)+"/"+A.bQ(u)+"/"+A.bx(u)+" \xb7 "+w+":"+B.a.aT(B.o.u(A.fX(u)),2,"0")+" "+v},
hc_(d){var w=d.x
if(w===B.ds)return"Processing"
if(w===B.jZ)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
hS6(d){var w=d.f,v=B.a.i(w==null?"":w),u=v.toLowerCase()
if(B.a.t(u,"clock-in daily earnings")||B.a.t(u,"clock-in earnings"))return"Clock-in completed"
if(B.a.t(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===B.fq)return"Deposit"
if(w===B.eK)return"Withdrawal"
return v.length!==0?v:w.b},
hJG(d){var w=d.d,v=w===B.fq||w===B.o1||w===B.fA||w===B.k_,u=d.x
if(u===B.ds)return w===B.eK?-d.c:0
if(u!==B.ck)return 0
w=d.c
return v?w:-w},
hSF(d,e){var w,v,u,t,s,r,q=A.B(d,x.o)
B.d.b1(q,new C.foh())
w=A.V(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,A.K)(q),++t,v=r){s=q[t]
r=v-C.hJG(s)
if(r<0)r=0
w.n(0,s.a,new A.bm6(v,r))}return w},
ap3:function ap3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCn:function aCn(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
e6b:function e6b(d){this.a=d},
e6S:function e6S(d){this.a=d},
e6T:function e6T(d){this.a=d},
e6U:function e6U(d){this.a=d},
e6A:function e6A(d,e){this.a=d
this.b=e},
e6B:function e6B(){},
e6C:function e6C(d){this.a=d},
e6D:function e6D(){},
e6E:function e6E(d){this.a=d},
e6F:function e6F(d,e,f){this.a=d
this.b=e
this.c=f},
e6G:function e6G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6v:function e6v(d,e){this.a=d
this.b=e},
e6c:function e6c(d,e,f){this.a=d
this.b=e
this.c=f},
e6w:function e6w(){},
e6x:function e6x(){},
e6y:function e6y(d){this.a=d},
e6z:function e6z(){},
e6g:function e6g(d,e){this.a=d
this.b=e},
e6h:function e6h(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6p:function e6p(){},
e6m:function e6m(d){this.a=d},
e6n:function e6n(d,e){this.a=d
this.b=e},
e6o:function e6o(d,e){this.a=d
this.b=e},
e6q:function e6q(d){this.a=d},
e6r:function e6r(d,e,f){this.a=d
this.b=e
this.c=f},
e6s:function e6s(d){this.a=d},
e6u:function e6u(d){this.a=d},
e6t:function e6t(d){this.a=d},
e6i:function e6i(d){this.a=d},
e6j:function e6j(d,e,f){this.a=d
this.b=e
this.c=f},
e6K:function e6K(){},
e6L:function e6L(){},
e6P:function e6P(d){this.a=d},
e6I:function e6I(d){this.a=d},
e6Q:function e6Q(d){this.a=d},
e6H:function e6H(d){this.a=d},
e6R:function e6R(d){this.a=d},
e6M:function e6M(d){this.a=d},
e6N:function e6N(d){this.a=d},
e6O:function e6O(d){this.a=d},
e6J:function e6J(d){this.a=d},
e6f:function e6f(d){this.a=d},
e6e:function e6e(d){this.a=d},
e6d:function e6d(d){this.a=d},
e6l:function e6l(d,e){this.a=d
this.b=e},
e6k:function e6k(d,e){this.a=d
this.b=e},
azK:function azK(d,e,f,g,h,i,j,k,l,m){var _=this
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
deK:function deK(){},
deL:function deL(){},
deM:function deM(d,e,f){this.a=d
this.b=e
this.c=f},
deJ:function deJ(d){this.a=d},
deN:function deN(d,e){this.a=d
this.b=e},
deI:function deI(d){this.a=d},
azJ:function azJ(d,e,f,g,h,i,j,k,l,m){var _=this
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
bfv:function bfv(d,e){var _=this
_.f=_.e=_.d=$
_.cR$=d
_.b2$=e
_.c=_.a=null},
deD:function deD(d){this.a=d},
deE:function deE(d){this.a=d},
deF:function deF(d){this.a=d},
deG:function deG(){},
deH:function deH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
deC:function deC(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
deB:function deB(d){this.a=d},
b9h:function b9h(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
b9g:function b9g(d,e,f){this.b=d
this.d=e
this.a=f},
b9f:function b9f(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
azL:function azL(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
azM:function azM(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
df3:function df3(){},
df4:function df4(){},
df5:function df5(){},
deQ:function deQ(d){this.a=d},
deP:function deP(d,e){this.a=d
this.b=e},
deO:function deO(d,e){this.a=d
this.b=e},
df0:function df0(d,e){this.a=d
this.b=e},
df2:function df2(d,e){this.a=d
this.b=e},
df1:function df1(d,e){this.a=d
this.b=e},
df_:function df_(){},
deZ:function deZ(d){this.a=d},
deY:function deY(){},
deT:function deT(d){this.a=d},
deU:function deU(){},
deV:function deV(d){this.a=d},
deW:function deW(d){this.a=d},
deS:function deS(){},
deX:function deX(d){this.a=d},
deR:function deR(d){this.a=d},
b8I:function b8I(d){this.a=d},
foh:function foh(){},
bt5:function bt5(d,e){this.b=d
this.a=e},
aJe:function aJe(){},
bv1:function bv1(){},
hOI(d,e,f,g,h,i,j,k){var w,v=B.a.i(j.toLowerCase())
B.d.bn(d,new C.fi7(v,g))
w=A.V(x.N,x.z)
w.n(0,"id",B.o.u(1000*Date.now()))
w.n(0,"fromEmail",B.a.i(e.toLowerCase()))
w.n(0,"fromName",f)
w.n(0,"toEmail",v)
if(k!=null&&B.a.i(k).length!==0)w.n(0,"toName",B.a.i(k))
w.n(0,"gameId",g)
w.n(0,"gameTitle",h)
w.n(0,"status","pending")
w.n(0,"createdAt",new A.R(Date.now(),0,!1).ac())
w.n(0,"matchesTotal",i)
w.n(0,"matchesPlayed",0)
w.n(0,"seriesStatus","active")
B.d.J(d,w)},
aNg(d){var w,v=J.a8(d),u=A.aN(v.h(d,"matchesTotal")),t=u==null?null:B.k.O(u)
if(t==null)t=1
v=A.aN(v.h(d,"matchesPlayed"))
w=v==null?null:B.k.O(v)
return B.o.D(t-(w==null?0:w),0,t)},
hZt(d,e){var w=A.S(e).k("a2<1>")
w=A.B(new A.a2(e,new C.fyF(B.a.i(d.toLowerCase())),w),w.k("H.E"))
return w},
afU(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
if(C.aNg(u)<=0){t=J.cE(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
hRl(d,e){var w,v,u,t=J.a8(d),s=t.h(d,"status")
if(!J.y(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.y(s==null?"":s,"complete"))return!1
if(C.aNg(d)<=0)return!1
w=B.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=B.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=B.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aNg(d)>0},
hRk(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a8(d),h=A.aN(i.h(d,"matchesTotal")),g=h==null?null:B.k.O(h)
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
hOH(d,e){var w
C.afU(e)
w=A.S(e).k("a2<1>")
w=A.B(new A.a2(e,new C.fi6(B.a.i(d.toLowerCase())),w),w.k("H.E"))
return w},
tG(d,e){var w,v,u
for(w=J.aW(d);w.C();){v=w.gU(w)
u=J.q(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
hLi(d,e,f){var w,v,u,t="fromName",s=J.a8(f),r=s.h(f,"fromEmail"),q=B.a.i(J.k(r==null?"":r).toLowerCase())
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
fR6(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase()),r=J.a8(d),q=r.h(d,"fromEmail"),p=B.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=B.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.hLi(x.f.b(u)?A.a1(u,r,q):A.V(r,q),v,d)
if((t.length===0||B.a.t(t,"@"))&&f!=null){t=J.q(f,v)
if(t==null)t=""}if(t.length===0||B.a.t(t,"@"))return"Opponent"
return t},
bAg(){var w=0,v=A.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bAg=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$bAg)
case 7:r=e
q=A.aT(J.q(r.a,"all_users"))
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
return A.i($async$bAg,v)},
bzl(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bzl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return A.b(C.bAg(),$async$bzl)
case 3:u=t.fR6(s,r,g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzl,v)},
K7(d,e,f){var w=0,v=A.j(x.h),u,t,s,r,q,p
var $async$K7=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(d)
p=$.h9y.h(0,q)
if(p!=null){t=new A.R(Date.now(),0,!1).by(p)
t=t.a>A.dB(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.h9y.n(0,q,new A.R(Date.now(),0,!1))
w=5
return A.b(A.PO(B.c6,q),$async$K7)
case 5:case 4:s=$.h9x.h(0,q)
if(s==null){u=C.tG(e,q)
w=1
break}r=C.tG(A.bzr(e,A.a([s],x._)),q)
if(r!=null)A.fTq(e,r)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$K7,v)},
hZG(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new A.R(Date.now(),0,!1).ac())
return}}},
hI2(d,e){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
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
for(q=x.S,r=0;r<8;++r)t[r]=A.ip(8,new C.f7V(r),!0,q)
return A.E(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return A.E(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
hOG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new A.R(Date.now(),0,!1).ac())
r=C.hI2(u,f)
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
t.n(u,"sessionUpdatedAt",new A.R(Date.now(),0,!1).ac())
return}}},
hZE(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
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
t.n(u,h,o)}}t.n(u,"sessionUpdatedAt",new A.R(Date.now(),0,!1).ac())
return}},
fTp(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",A.a1(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new A.R(Date.now(),0,!1).ac())
return}}},
fxt(d){var w=0,v=A.j(x.gw),u,t,s,r,q
var $async$fxt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.afU(d)
t=$.fQr
if(t==null)s=$.fQr=A.PO(B.c6,null).f8(new C.fxu())
else s=t
w=3
return A.b(s,$async$fxt)
case 3:r=f
if(r==null){u=A.bl(new A.J(d,new C.fxv(),A.S(d).k("J<1,@>")),!0,x.P)
w=1
break}q=A.bzr(d,r)
B.d.a8(d)
B.d.v(d,q)
u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fxt,v)},
afV(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$afV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.afU(d)
t=A.S(d).k("J<1,a4<n,@>>")
t=A.B(new A.J(d,new C.fvp(),t),t.k("aj.E"))
w=3
return A.b(A.PO(t,null),$async$afV)
case 3:s=f
if(s==null){u=!1
w=1
break}r=A.bzr(d,s)
B.d.a8(d)
B.d.v(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afV,v)},
aO9(d,e,f){var w=0,v=A.j(x.y),u,t,s,r
var $async$aO9=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:C.fTp(d,e,f)
t=C.tG(d,e)
if(t==null){u=!1
w=1
break}w=3
return A.b(A.PO(A.a([A.a1(t,x.N,x.z)],x._),e),$async$aO9)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.tG(s,e)
if(r!=null)A.fTq(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aO9,v)},
hWl(d,e,f){var w
C.fTp(d,e,f)
w=$.fQf.h(0,e)
if(w!=null)w.a9(0)
$.fQf.n(0,e,A.cM(B.ly,new C.fvq(e,d)))},
fL7(d,e){return new C.aYl(!0,d,"NGMY",B.a.i(e.toLowerCase()),null,!0)},
fi7:function fi7(d,e){this.a=d
this.b=e},
fyF:function fyF(d){this.a=d},
fi6:function fi6(d){this.a=d},
f7V:function f7V(d){this.a=d},
fxu:function fxu(){},
fxv:function fxv(){},
fvp:function fvp(){},
fvq:function fvq(d,e){this.a=d
this.b=e},
aYl:function aYl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
i_8(d,e,f){return A.bZ(B.K,null,new C.fzK(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
fzK:function fzK(d,e){this.a=d
this.b=e},
Zj:function Zj(d,e,f){this.c=d
this.d=e
this.a=f},
aCa:function aCa(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
e0r:function e0r(d){this.a=d},
e0u:function e0u(d){this.a=d},
e0v:function e0v(d){this.a=d},
e0t:function e0t(d){this.a=d},
e0w:function e0w(d){this.a=d},
e0x:function e0x(d,e){this.a=d
this.b=e},
e0s:function e0s(d,e){this.a=d
this.b=e},
hUS(d){var w,v,u,t=B.a.i(d)
if(t.length===0)return B.i9
w=t.toLowerCase()
v=A.af("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return B.i9
v=Date.now()
u=C.hKD(w,new A.R(v,0,!1))
v=x.N
return A.a([new A.kh("calendar",A.E(["title",C.hKC(t,w),"start",u.ac(),"end",u.bN(36e8).ac(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
hKC(d,e){var w,v,u,t,s,r=A.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cC(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return B.a.i(w==null?"":w)}u=A.af("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cC(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.haj(B.a.i(t))}s=A.af("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cC(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.haj(B.a.i(t))}if(B.a.t(e,"meeting"))return"Meeting"
if(B.a.t(e,"appointment"))return"Appointment"
return"NGMY Event"},
haj(d){var w
if(d.length===0)return d
w=B.a.fv(d,A.af("\\s+",!0,!1,!1,!1))
return new A.J(w,new C.fhi(),A.S(w).k("J<1,n>")).aH(0," ")},
hKD(d,e){var w,v,u,t,s,r,q,p,o=A.c_(A.bx(e),A.bG(e),A.bQ(e),0,0,0,0,0)
if(B.a.t(d,"tomorrow"))o=o.bN(864e8)
else if(!B.a.t(d,"today"))for(w=D.aBP.gdL(D.aBP),w=w.gaj(w);w.C();){v=w.gU(w)
u=v.a
if(A.ds(d,u,0)){t=C.hJF(o,v.b)
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
q=0}return A.c_(A.bx(o),A.bG(o),A.bQ(o),r,q,0,0,0)},
hJF(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(A.mm(w)===e){u=!0
if(v<=0){t=d.bN(36e8)
s=w.a
if(s>=t.gbo())u=s===t.gbo()&&w.b<t.gcv()}}else u=!1
if(u)return w
w=w.bN(r)}return d.bN(r)},
fhi:function fhi(){},
hUT(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=B.a.i(d)
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
q=C.hGS(w,j)
if(q==null||q.length===0)return B.i9
t=A.af("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=A.af("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return A.a([new A.kh("call",A.E(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=A.E(["name",q],t,t)
if(r!=null)m.n(0,"body",r)
return A.a([new A.kh(n,m)],x.Z)}if(p){t=x.N
return A.a([new A.kh("call",A.E(["name",q],t,t))],x.Z)}return B.i9},
hGS(d,e){var w,v,u,t,s,r,q=[A.af("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),A.af("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),A.af("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
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
if(u)return C.hO0(t)}r=A.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cC(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return B.a.i(u==null?"":u)}return null},
hO0(d){var w=B.a.fv(d,A.af("\\s+",!0,!1,!1,!1))
return new A.J(w,new C.fhh(),A.S(w).k("J<1,n>")).aH(0," ")},
fhh:function fhh(){},
hec(d){var w=new A.J(d,new C.fxL(),A.S(d).k("J<1,a4<n,@>>")).bY(0,new C.fxM())
w=A.B(w,w.$ti.k("H.E"))
return w},
fxL:function fxL(){},
fxM:function fxM(){},
hUW(d,e){var w,v,u,t,s,r,q,p,o
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
return A.a([new A.kh("send_email",t)],x.Z)},
hU4(d,e){var w
if(e)return d
w=J.dH(d,new C.frG())
w=A.B(w,w.$ti.k("H.E"))
return w},
frG:function frG(){},
hWi(d){switch(d){case"blackjack_vegas":return D.dyi
case"roulette_euro":return D.dy2
case"slots_jackpot":return D.dy9
case"poker_texas":return D.dyc
case"chess_royale":return D.dy3
case"connect_four_pro":return D.dy4
case"domino_block":return D.dy6
case"plinko_prizes":return D.dye
case"spin_wheel":return D.dyb
case"baccarat_punto":return D.dy5
case"craps_table":return D.dyd
case"casino_war":return D.dy7
case"bingo_live":return D.dya
case"solitaire_klondike":return D.dyh
case"backgammon_pro":return D.dy1
case"billiards_snooker":return D.dyf
case"profit_solve":return D.dyg
default:return D.dy8}},
fvg(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=A.m(8)
v=A.I(B.aM,B.r,1.5)
u=A.a([new A.ad(0,B.G,B.w.j(0.35),B.ei,6)],x.V)
return A.p(p,A.av(A.W(B.mc,B.c.j(0.5),p,p,p,23.400000000000002),p,p,p),B.f,p,p,new A.o(p,p,v,w,u,D.bQN,B.n),p,74,p,p,p,p,p,52)}t=B.o.D(d,1,13)
s=t===1||t>=10||B.o.F(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][B.o.F(t,4)]
q=s?B.bL:B.M
w=A.m(8)
v=A.I(B.aL,B.r,1)
u=A.a([new A.ad(0,B.G,B.w.j(0.28),B.ei,6)],x.V)
return A.p(p,A.v(A.a([new A.C(D.brX,A.d(D.cnD[t-1]+"\n"+r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,B.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),B.b3,A.av(A.d(r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),B.b3],x.p),B.F,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(B.hT,p,v,w,u,p,B.n),p,74,p,p,p,p,p,52)},
hXm(d,e){var w,v=null,u=A.m(18),t=A.I(B.aM,B.r,3),s=A.a([new A.ad(0,B.G,B.aE.j(0.5),B.J,20)],x.V),r=A.S(e).k("J<1,hg>")
r=A.B(new A.J(e,new C.fxc(),r),r.k("aj.E"))
w=x.p
return A.v(A.a([A.p(v,A.v(A.a([D.f5I,B.ac,A.A(r,B.m,v,B.b9,B.j,0,v,v)],w),B.m,v,B.e,B.j,0,B.p),B.f,v,v,new A.o(v,v,t,u,s,D.bR8,B.n),v,v,v,v,I.afX,v,v,v),B.az,A.dq(B.alL,D.f6k,d,A.bk(B.aM,v,v,v,B.du,v,Af.XI,v,v,v,v,v))],w),B.m,v,B.e,B.j,0,B.p)},
oP:function oP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bo7:function bo7(d,e){this.b=d
this.a=e},
fxc:function fxc(){},
hw1(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e0(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=A.c1(8,0,!1,w)
u=A.c1(9,"",!1,p)
t=x.t
s=A.a([],t)
r=A.a([],t)
t=A.a([0,0,0],t)
q=J.e0(6,o)
for(v=0;v<6;++v)q[v]=A.c1(7,0,!1,w)
return new C.app(A.V(p,x.z),n,u,s,r,t,q,new A.ar(B.as,$.aw()))},
hPm(d,e,f,g,h){var w=new C.fiQ(f,h)
switch(d){case"checkers_deluxe":return C.hFy(h,g,e,w)
case"tic_tac_go":return C.hOb(h,g,e,w)
case"blackjack_vegas":return C.hEU(h,g,e,new C.fiK(w))
case"roulette_euro":return C.hMw(h,g,e,new C.fiL(w))
case"slots_jackpot":return C.hNk(h,g,e,new C.fiM(w))
case"billiards_snooker":return C.hLk(h,g,e,new C.fiN(w))
case"connect_four_pro":return C.hFZ(h,g,e,w)
case"profit_solve":return C.hLn(h,g,e,new C.fiO(w))
default:return C.hFv(d,h,g,e,new C.fiP(w))}},
hFy(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vT,B.L,w,w),u=A.m(12),t=A.I(D.VD,B.r,8),s=A.a([new A.ad(0,B.G,B.w.j(0.4),B.J,16)],x.V)
return A.v(A.a([new A.C(B.eO,v,w),A.D(A.av(new A.fF(1,A.p(w,A.bv(A.m(6),A.ib(!0,w,w,B.y,D.eHp,new C.f5g(d,e,f,g),64,w,B.dP,B.ah,!1),B.aq),B.f,w,w,new A.o(w,w,t,u,s,w,B.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hOb(d,e,f,g){var w=null
return A.v(A.a([new A.C(B.eO,A.d(d.c,w,w,w,w,w,w,D.vT,B.L,w,w),w),A.D(A.av(new A.fF(1,A.cm(new C.fhs(d,e,f,g)),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hEU(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.vT,B.L,v,v),t=x.p,s=A.a([],t),r=d.CW,q=d.ch
if(r)B.d.v(s,new A.J(q,new C.f4H(),A.S(q).k("J<1,r>")))
else B.d.v(s,A.a([C.fvg(q[0],!1),B.bo,C.fvg(0,!0)],t))
s=A.A(s,B.m,v,B.b9,B.j,0,v,v)
r=A.d("Total: "+d.a24(d.ay),v,v,v,v,v,v,D.f1_,v,v,v)
q=d.ay
w=A.S(q).k("J<1,r>")
q=A.B(new A.J(q,new C.f4I(),w),w.k("aj.E"))
q=A.c4(B.fM,q,B.bx,6,6)
return A.v(A.a([new A.C(B.eO,u,v),D.fcg,B.ao,s,B.az,D.fjk,r,B.ao,q,B.b3,A.A(A.a([A.D(A.bJ(D.f6L,d.CW?v:new C.f4J(d,e,f,g),v),1),B.ab,A.D(A.bJ(D.flB,new C.f4K(d,e,f,g),v),1)],t),B.m,v,B.e,B.j,0,v,v)],t),B.m,v,B.e,B.j,0,B.p)},
hMw(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vT,B.L,w,w),u=d.cx,t=A.a([new A.ad(0,B.G,B.w.j(0.45),B.cx,16)],x.V)
t=A.a([new A.C(B.eO,v,w),A.p(w,A.b3(w,w,w,new C.bo7(u,w),B.at),B.f,w,w,new A.o(w,w,w,w,t,w,B.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new A.C(B.kb,A.d("Result: "+A.t(v),w,w,w,w,w,w,D.eQh,w,w,w),w))
t.push(B.ac)
t.push(A.c4(B.fM,A.ip(6,new C.feF(d,e,f,g),!0,x.l),B.bx,6,6))
return A.v(t,B.m,w,B.e,B.j,0,B.p)},
hNk(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vT,B.L,w,w),u=d.db,t=A.S(u).k("J<1,n>")
u=A.B(new A.J(u,new C.fgz(),t),t.k("aj.E"))
return A.v(A.a([new A.C(B.eO,v,w),C.hXm(new C.fgA(d,e,f,g),u)],x.p),B.m,w,B.e,B.j,0,B.p)},
hLk(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vT,B.L,w,w),u=A.m(20),t=A.I(B.fn,B.r,12),s=x.V,r=A.a([new A.ad(0,B.G,B.w.j(0.45),B.dn,18)],s),q=x.p
return A.v(A.a([new A.C(B.eO,v,w),A.D(A.p(w,new A.an(B.W,w,B.aa,B.q,A.a([A.ao(w,A.p(w,w,B.f,w,w,D.aXa,w,18,w,w,w,w,w,18),w,w,24,w,24,w),A.ao(28,A.p(w,w,B.f,w,w,B.a9t,w,14,w,w,w,w,w,14),w,w,w,32,w,w),A.av(A.eA(B.A,d.dx,A.p(w,w,B.f,w,w,new A.o(B.aM,w,w,A.m(2),A.a([new A.ad(0,B.G,B.w.j(0.3),B.J,4)],s),w,B.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),B.f,w,w,new A.o(w,w,t,u,r,D.e6I,B.n),w,w,w,B.eQ,w,w,w,w),1),A.kR(B.bk,w,w,1,0,new C.fdp(d,f),d.dy),A.bJ(D.fbl,new C.fdq(d,e,g,f),w)],q),B.m,w,B.e,B.j,0,B.p)},
hFZ(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.vT,B.L,v,v),t=x.l,s=J.e0(7,t)
for(w=0;w<7;++w)s[w]=new A.bE(1,B.bi,A.aE(v,A.v(A.ip(6,new C.f5I(d,w),!0,t),B.m,v,B.lJ,B.j,0,B.p),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f5J(d,w,e,f,g),v,v,v,v,v,v,!1,B.a9),v)
return A.v(A.a([new A.C(B.eO,u,v),A.D(A.av(new A.fF(1.1666666666666667,A.A(s,B.dC,v,B.e,B.j,0,v,v),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
hLn(d,e,f,g){var w=null
return A.v(A.a([new A.C(B.eO,A.d(d.c,w,w,w,w,w,w,D.vT,B.L,w,w),w),A.d(""+d.a+"/"+d.b,w,w,w,w,w,w,B.kp,w,w,w),A.d(d.fy,w,w,w,w,w,w,D.aOh,B.L,w,w),A.aL(w,B.T,!1,w,!0,B.q,w,A.aM(),d.id,w,w,w,w,w,2,D.bMX,B.y,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,B.dL,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.fdC(d,e,g,f),w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,B.dk,!0,B.a5,w,B.am,w,w,w,w),A.bJ(D.fa_,new C.fdD(d,e,g,f),w)],x.p),B.m,w,B.e,B.j,0,B.p)},
hFv(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gjL(),k=e.d
k=k==null?n:k.c
w=C.hWi(d)
v=D.aBE.h(0,d)
if(v==null)v=d
m=A.d(m,n,n,n,n,n,n,B.mt,B.L,n,n)
u=A.m(22)
t=w.a
s=w.b
r=A.I(s.j(0.5),B.r,2)
q=A.a([new A.ad(0,B.G,w.c.j(0.35),B.eT,24)],x.V)
p=A.d(w.e,n,n,n,n,n,n,W.Sq,n,n,n)
o=A.d(v,n,n,n,n,n,n,B.oO,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+A.t(k)+" at the table"
k=x.p
q=A.D(A.av(A.p(n,A.v(A.a([p,B.S,o,B.P,A.d(l,n,n,n,n,n,n,A.l(n,n,B.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),B.L,n,n),B.d6,A.W(w.f,s.j(0.85),n,n,n,48)],k),B.m,n,B.b9,B.j,0,B.p),B.f,n,n,new A.o(n,n,r,u,q,new A.a7(B.b0,B.b5,B.x,t,n,n),B.n),n,n,n,B.eQ,B.a8,n,n,1/0),n,n,n),1)
return A.v(A.a([m,B.ac,q,B.P,new A.a6(1/0,n,A.bJ(D.fkL,new C.f5a(f,e,g,h),A.bk(s,n,n,n,B.d.gL(t).iY()>0.4?B.w:B.c,n,B.cf,n,n,n,n,n)),n)],k),B.m,n,B.e,B.j,0,B.p)},
E0:function E0(d,e){this.a=d
this.b=e},
app:function app(d,e,f,g,h,i,j,k){var _=this
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
cav:function cav(){},
caw:function caw(){},
cau:function cau(){},
cax:function cax(){},
cat:function cat(){},
caz:function caz(){},
caA:function caA(){},
cas:function cas(d){this.a=d},
cay:function cay(){},
car:function car(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fiQ:function fiQ(d,e){this.a=d
this.b=e},
fiK:function fiK(d){this.a=d},
fiL:function fiL(d){this.a=d},
fiM:function fiM(d){this.a=d},
fiN:function fiN(d){this.a=d},
fiO:function fiO(d){this.a=d},
fiP:function fiP(d){this.a=d},
f5g:function f5g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f5f:function f5f(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fhs:function fhs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fhr:function fhr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fhq:function fhq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f4H:function f4H(){},
f4I:function f4I(){},
f4J:function f4J(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f4K:function f4K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
feF:function feF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
feE:function feE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fgz:function fgz(){},
fgA:function fgA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fdp:function fdp(d,e){this.a=d
this.b=e},
fdq:function fdq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f5J:function f5J(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f5I:function f5I(d,e){this.a=d
this.b=e},
fdC:function fdC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fdD:function fdD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f5a:function f5a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hS8(d){var w,v=A.S(d).k("a2<1>")
v=A.oZ(new A.a2(d,new C.fnh(),v),120,v.k("H.E"))
w=A.cD(v,new C.fni(),A.a3(v).k("H.E"),x.N).aH(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fnh:function fnh(){},
fni:function fni(){},
ag5(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
aql:function aql(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aCZ:function aCZ(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
eyl:function eyl(){},
aKM:function aKM(){},
hu_(){var w=$.HJ
if(w<=0)return;--w
$.HJ=w
if(w===0){w=$.h0_
if(w!=null)w.$0()}},
c60(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
ao2(d){var w=0,v=A.j(x.H),u,t
var $async$ao2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.fL2.J(0,t)
w=4
return A.b(A.ay(),$async$ao2)
case 4:w=3
return A.b(f.ar("Bool","ngmy_game_free_play_used_"+B.a.i(t.toLowerCase()),!0),$async$ao2)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ao2,v)},
ao1(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$ao1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(C.c60(d)){u=!0
w=1
break}t=B.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.fL2.t(0,t)){u=!1
w=1
break}w=3
return A.b(A.ay(),$async$ao1)
case 3:s=f
r=B.a.i(t.toLowerCase())
r=A.k9(J.q(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ao1,v)},
Ue(){var w=0,v=A.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Ue=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$Ue)
case 7:r=e
q=A.aT(J.q(r.a,"ngmy_helper_ai_usage_v1"))
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
return A.i($async$Ue,v)},
aYD(d){return C.huc(d)},
huc(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aYD=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.ay(),$async$aYD)
case 6:s=f
w=7
return A.b(s.ar("String","ngmy_helper_ai_usage_v1",B.R.ao(d,null)),$async$aYD)
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
return A.i($async$aYD,v)},
aYB(d,e){var w,v,u,t,s=J.q(d,B.a.i(e.toLowerCase()))
if(!x.f.b(s))return new A.acI(0,new A.R(Date.now(),0,!1))
w=J.a8(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=A.bi(u==null?"":u)
if(t==null)t=new A.R(Date.now(),0,!1)
return new A.acI(typeof v=="number"?B.o.D(B.k.O(v),0,999999):0,t)},
aYC(d,e){if(B.o.an(e.by(d.b).a,36e8)>=24)return new A.acI(0,e)
return d},
c6x(d,e){var w=0,v=A.j(x.S),u,t,s
var $async$c6x=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return A.b(C.Ue(),$async$c6x)
case 3:t=g
s=Date.now()
u=B.o.D(e-C.aYC(C.aYB(t,d),new A.R(s,0,!1)).a,0,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6x,v)},
c6y(d,e){var w=0,v=A.j(x.cJ),u,t,s,r
var $async$c6y=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return A.b(C.Ue(),$async$c6y)
case 3:t=g
s=Date.now()
r=C.aYC(C.aYB(t,d),new A.R(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bN(864e8)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6y,v)},
hud(d){var w,v,u,t=d.a,s=B.o.an(t,1e6)
if(s<=0)return"0s"
w=B.o.an(t,36e8)
v=B.o.an(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+B.a.aT(B.o.u(v),2,"0")+"m "+B.a.aT(B.o.u(u),2,"0")+"s"
if(v>0)return""+v+"m "+B.a.aT(B.o.u(u),2,"0")+"s"
return""+u+"s"},
aYE(d){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aYE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return A.b(C.Ue(),$async$aYE)
case 3:t=p.aYC(o.aYB(f,d),new A.R(Date.now(),0,!1))
w=4
return A.b(A.ay(),$async$aYE)
case 4:s=f
r=B.a.i(d.toLowerCase())
q=t.b.a5().ac()
u=A.k9(J.q(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYE,v)},
aoo(d){var w=0,v=A.j(x.H),u,t,s,r
var $async$aoo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return A.b(C.Ue(),$async$aoo)
case 3:t=s.aYC(r.aYB(f,d),new A.R(Date.now(),0,!1))
w=5
return A.b(A.ay(),$async$aoo)
case 5:w=4
return A.b(f.ar("Bool","ngmy_helper_3left_"+B.a.i(d.toLowerCase())+"_"+t.b.a5().ac(),!0),$async$aoo)
case 4:case 1:return A.h(u,v)}})
return A.i($async$aoo,v)},
aop(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aop=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=B.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return A.b(C.Ue(),$async$aop)
case 3:s=g
r=Date.now()
q=C.aYC(C.aYB(s,d),new A.R(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aG(s,t,A.E(["count",r+1,"windowStart",q.b.a5().ac()],x.N,x.K))
w=4
return A.b(C.aYD(s),$async$aop)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aop,v)},
afI(d,e,a0){var w=0,v=A.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$afI=A.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new A.fc("")
if(!d.d){p=!0
if(!C.he4(a0))if(!C.he3(a0)){p=A.af("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.he4(a0)?3:4
break
case 3:o=C.hVY(a0)
w=o!=null?5:6
break
case 5:w=7
return A.b(C.c_7(e,o),$async$afI)
case 7:n=a2
p=J.a8(n)
if(p.gcl(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.fZs(o)+":\n"
m.a+=l
for(p=p.gaj(n);p.C();){m=p.gU(p)
l=h
k="- "+m.gUs()+"\n"
l.a+=k
m=m.f
if(m!=null&&B.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=A.af("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return A.b(A.R6("text/plain"),$async$afI)
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
case 13:case 9:w=C.he3(a0)?15:16
break
case 15:p=h
f=C
w=17
return A.b(C.a6d(e),$async$afI)
case 17:m=f.h06(a2)+"\n"
p.a+=m
case 16:p=A.af("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return A.b(C.Tg(e),$async$afI)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cw(i)){p=h
m=C.fZt(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=B.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afI,v)},
hvz(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
c96(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$c96=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=A.h0M(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.f0("ngmy_local_growth_income_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bG),$async$c96)
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
return A.i($async$c96,v)},
ap6(d){var w=0,v=A.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$ap6=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=B.a.i(d)
if(J.ac(k)===0){u=null
w=1
break}t=4
w=7
return A.b(A.f0("ngmy_local_growth_income_stash_v1_"+B.a.i(k),null,!1,B.bG),$async$ap6)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.q(r,"payload")
q=J.k(n==null?"":n)
if(J.ac(q)===0){u=null
w=1
break}n=J.q(r,"ownerEmail")
p=B.a.i(J.k(n==null?"":n))
n=B.c4.c7(0,B.cB.aI(q))
m=J.y(J.q(r,"live"),!0)
u=new A.aEo(m,p,n)
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
return A.i($async$ap6,v)},
aZH(d){var w=0,v=A.j(x.bY),u,t,s,r,q
var $async$aZH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
w=C.hvz(q)?3:4
break
case 3:w=5
return A.b(C.c96(q),$async$aZH)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.ap6(t)
w=1
break
case 4:if(B.a.a0(q,"NGMYLOCALSYNC1|")){u=C.ap6(B.a.i(B.a.b_(q,15)))
w=1
break}w=B.a.a0(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return A.b(C.ap6(B.a.i(B.a.b_(q,15))),$async$aZH)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new A.aEo(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZH,v)},
h1_(d){var w=d.bL
if(w>=0)return w
return 1},
afT(d,e,f){var w=0,v=A.j(x.H),u,t
var $async$afT=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return A.b(A.aOl(d,e),$async$afT)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return A.b(A.G_(d,null,null,!1,!0,""),$async$afT)
case 5:w=4
return A.b(t.$1(h),$async$afT)
case 4:case 1:return A.h(u,v)}})
return A.i($async$afT,v)},
hUR(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=B.a.i(a2)
if(a1.length===0)return B.i9
w=a1.toLowerCase()
v=A.af("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=A.af("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cC(w)
if(!u&&t==null)return B.i9
s=new A.R(Date.now(),0,!1)
r=A.de()
q=A.de()
p=C.hKB(w)
if(p!=null){v=p.a
r.b=s.bN(v)
q.b=C.h9a(a1,w)
if(J.y(q.bc(),"Wake up")&&B.o.an(v,e)<=180)q.b="Reminder \u2014 "+B.o.an(v,e)+" min"}else{if(t!=null){v=A.af("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=B.a.e7(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.h9b(v[2],v[4],v[3])
o=v[3]
m=A.c7(o==null?"":o,null)
if(m==null)m=0
l=A.c_(A.bx(s),A.bG(s),A.bQ(s),0,0,0,0,0)
if(B.a.t(w,d))l=l.bN(a0)
r.b=A.c_(A.bx(l),A.bG(l),A.bQ(l),n,m,0,0,0).bN(-36e8)
if(r.bc().cX(s.bN(e)))r.b=J.cf(r.bc(),B.nC)
v=C.hOF(v[1])
k=B.o.F(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+B.a.aT(B.o.u(m),2,"0")+" "+j)}else{l=A.c_(A.bx(s),A.bG(s),A.bQ(s),0,0,0,0,0)
v=B.a.t(w,d)
if(v)l=l.bN(a0)
i=A.af("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cC(w)
if(i!=null){o=i.b
h=C.h9b(o[1],o[3],o[2])
o=o[2]
g=A.c7(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=A.c_(A.bx(l),A.bG(l),A.bQ(l),h,g,0,0,0)
r.b=f.cX(s.bN(3e7))&&!v?f.bN(a0):f
q.b=C.h9a(a1,w)}}v=x.N
return A.a([new A.kh("alarm",A.E(["title",q.bc(),"start",r.bc().ac(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
hKB(d){var w,v,u,t,s,r,q=[A.af("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.af("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.af("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),A.af("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
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
hOF(d){var w=d==null?"work":d,v=w.toLowerCase()
if(B.a.t(v,"meeting")||B.a.t(v,"appointment"))return"Meeting"
if(B.a.t(v,"class")||B.a.t(v,"school"))return"Class"
if(B.a.t(v,"shift"))return"Shift"
return"Work"},
h9b(d,e,f){var w,v=A.c7(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return B.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
h9a(d,e){var w,v,u,t
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
hvV(d){var w,v,u,t,s=J.a8(d)
if(s.gal(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.kf(d,80),v=w.$ti,w=new A.bW(w,w.gM(0),v.k("bW<aj.E>")),v=v.k("aj.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gM(d)>80?u+("\u2026 and "+(s.gM(d)-80)+" more\n"):u
return B.a.i(s.charCodeAt(0)==0?s:s)}},D,H,Ab,I,F,Ac,V,G,W,Ad,Ae,X,Af,Ag,Ah,Ai,Y,Z,K,Aj
J=c[1]
A=c[0]
B=c[2]
L=c[30]
Q=c[161]
A_=c[172]
E=c[153]
M=c[163]
A0=c[116]
N=c[97]
A1=c[159]
R=c[33]
O=c[70]
S=c[76]
A2=c[77]
P=c[127]
A3=c[164]
T=c[155]
A4=c[167]
A5=c[165]
A6=c[166]
A7=c[162]
A8=c[158]
A9=c[62]
U=c[143]
Aa=c[144]
C=a.updateHolder(c[5],C)
D=c[152]
H=c[25]
Ab=c[61]
I=c[157]
F=c[94]
Ac=c[168]
V=c[26]
G=c[156]
W=c[109]
Ad=c[154]
Ae=c[171]
X=c[160]
Af=c[173]
Ag=c[103]
Ah=c[170]
Ai=c[100]
Y=c[69]
Z=c[54]
K=c[52]
Aj=c[169]
C.bpf.prototype={
oa(d,e){return this.a.$2(d,e)}}
C.ED.prototype={
T(){return new C.aGr(this.$ti.k("aGr<ED.T,ED.S>"))}}
C.aGr.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a
v=w.f
w=new A.hA(B.El,v,null,null,w.$ti.k("hA<1>"))
u.e=w
u.UZ()},
br(d){var w,v=this
v.bE(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aLe()
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hA(B.El,w.b,w.c,w.d,w.$ti)}v.UZ()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&A.c()
return v.mK(d,w)},
q(){this.aLe()
this.a2()},
UZ(){var w,v=this
v.d=v.a.c.ld(new C.eUg(v),new C.eUh(v),new C.eUi(v))
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hA(B.Wm,w.b,w.c,w.d,w.$ti)},
aLe(){var w=this.d
if(w!=null){w.a9(0)
this.d=null}}}
C.au0.prototype={
mK(d,e){return this.e.$2(d,e)}}
C.ajG.prototype={
T(){return C.hCs()},
bp(){return this.r.$0()}}
C.qu.prototype={}
C.ayD.prototype={
abn(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$abn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.h_y(r)
if(r.x==null||r.c5.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.h_A(s),$async$abn)
case 3:case 1:return A.h(u,v)}})
return A.i($async$abn,v)},
Wl(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ap4(t.a.c),$async$Wl)
case 3:if(e!=null&&t.c!=null)t.a.bp()
r=!C.c60(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return A.b(C.ao1(t.a.c),$async$Wl)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.m(new C.d6K(t,s))
if(!s)t.abn()
case 1:return A.h(u,v)}})
return A.i($async$Wl,v)},
aaZ(){var w=0,v=A.j(x.H),u,t=this,s
var $async$aaZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.bAg(),$async$aaZ)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.d6V(t,s))
case 1:return A.h(u,v)}})
return A.i($async$aaZ,v)},
a_(){var w,v,u=this
u.bqQ()
$.t4=$.t4+1
w=u.a
$.bAl=w.c.a
w=w.d.b5
v=A.S(w).k("J<1,a4<n,@>>")
w=A.B(new A.J(w,new C.d7c(),v),v.k("aj.E"))
u.f=w
u.aaZ()
u.IT()
u.Wl()
u.e=A.dG(B.ny,new C.d7d(u))},
IT(){var w=0,v=A.j(x.H),u,t=this,s
var $async$IT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:C.afU(t.a.d.b5)
w=3
return A.b(C.fxt(t.a.d.b5),$async$IT)
case 3:s=e
if(t.c==null){w=1
break}C.afU(t.a.d.b5)
if(s!=null)t.m(new C.d72(t,s))
else t.m(new C.d73(t))
case 1:return A.h(u,v)}})
return A.i($async$IT,v)},
q(){C.aYn()
var w=this.e
if(w!=null)w.a9(0)
this.bqP()},
afU(d,e,f){return this.cnt(d,e,f)},
cnt(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$afU=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(e.toLowerCase())
p=J.q(t.r,q)
o=t.a
n=o.d.b5
o=o.c
s=d.b
C.hOI(n,o.a,o.c,d.a,s,f,e,p)
t.a.bp()
w=3
return A.b(C.afV(t.a.d.b5),$async$afU)
case 3:if(t.c==null){w=1
break}t.m(new C.d75(t))
r=f===1?"1 game":""+f+" games"
t.c.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$afU,v)},
HK(d,e){return this.c8W(d,e)},
bY2(d){return this.HK(d,null)},
c8W(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&B.a.i(e).length!==0){s=C.tG(t.a.d.b5,B.a.i(e))
if(s!=null&&C.aNg(s)<=0){t.c.I(x.q).f.R(D.aM9)
w=1
break}}w=5
return A.b(C.ao1(t.a.c),$async$HK)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return A.b(C.fL3(r,C.frR(q.c),p),$async$HK)
case 6:w=1
break
case 4:o=new C.d6Y(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
A.ht(r,new C.aBu(p,q.d,q.f,q.r,new C.d6Z(o),q.w,C.frR(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
A.ht(q,new C.ajF(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.d7_(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$HK,v)},
bVx(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.afU(i.a.d.b5)
C.afU(i.f)
w=C.hZt(i.a.c.a,i.f)
v=C.hOH(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return B.bH
if(!u){t=B.d.gL(w)
u=A.m(14)
s=A.I(B.b6,B.r,1)
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
return A.p(h,A.v(A.a([D.ffq,A.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,B.oS,h,h,h),B.P,A.A(A.a([A.D(A.dW(B.Iy,new C.d6Q(i,t),h),1),B.ab,A.D(A.bJ(D.fnY,new C.d6R(i,t),h),1)],n),B.m,h,B.e,B.j,0,h,h)],n),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(B.aE,h,s,u,h,h,B.n),h,h,h,B.e3,B.bl,h,h,1/0)}m=B.d.gL(v)
l=B.d.dN(i.y,new C.d6S(m),new C.d6T(i))
k=C.fR6(m,i.a.c.a,i.r)
j=C.aNg(m)
u=A.m(14)
s=A.I(B.b6,B.r,1)
r=j===1?"":"s"
return A.p(h,A.v(A.a([D.f7S,A.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,B.oS,h,h,h),B.au,A.d(C.hRk(m,i.a.c.a),h,h,h,h,h,h,B.a6r,h,h,h),B.P,A.bJ(D.feJ,new C.d6U(i,l,m),h)],x.p),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(B.bj,h,s,u,h,h,B.n),h,h,h,B.e3,B.bl,h,h,1/0)},
bMo(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.eDw.t(0,d.a),l=A.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=A.a3I(w[v])
t=B.k.D(u.d*0.58,0.12,0.3)
l.push(new A.wN(u.a,u.b,B.k.D(u.c*0.92,0,0.9),t).io())}s=B.d.gL(w)
w=A.m(16)
t=A.m(18)
r=A.I(A.Z(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1)
q=x.V
p=A.a([new A.ad(0,B.G,A.Z(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.jc,12)],q)
o=x.p
o=A.a([new A.a6(100,n,A.av(A.W(d.e,B.c,n,n,n,64),n,n,n),n),A.D(new A.C(B.j3,A.v(A.a([A.A(A.a([A.D(A.d(d.b,n,n,n,n,n,n,B.kR,n,n,n),1)],o),B.m,n,B.e,B.j,0,n,n),B.au,A.d(d.c,n,2,B.a2,n,n,n,B.oP,n,n,n)],o),B.F,n,B.b9,B.j,0,B.p),n),1)],o)
if(m)o.push(A.aH(n,n,n,n,D.bKy,n,n,n,new C.d6M(this,d),n,n,n,n,"Invite player",n))
o.push(new A.C(B.L6,A.p(n,D.bIG,B.f,n,n,new A.o(A.Z(71,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),n,A.I(A.Z(B.k.V(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1.6),n,A.a([new A.ad(0,B.G,A.Z(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,10)],q),n,B.a6),n,44,n,n,n,n,n,44),n))
return A.aK(!1,w,!0,A.p(n,A.A(o,B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,r,t,p,new A.a7(B.ax,B.aC,B.x,l,n,n),B.n),n,92,n,B.e3,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.d6N(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.M(d).ax.a===B.H,l=A.M(d).ax.a===B.H?B.iZ:B.pd,k=m?B.i4.j(0.94):B.c.j(0.94),j=m?B.c:B.M,i=m?B.i4:B.c,h=m?B.c.j(0.08):B.aL,g=m?B.c:B.M,f=m?B.bn:B.bN
if(!o.x)return C.aNO(n,l,A.av(A.mA(n,m?B.c:B.bk,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.frR(o.a.c)
return new C.ME(o.a.w,w,!0,o.gaQ_(),n)}w=A.aI(d,B.e7,x.w).w
v=A.m(12)
u=A.I(h,B.r,1)
t=x.V
s=A.a([],t)
if(!m)s.push(new A.ad(0,B.G,B.w.j(0.04),B.cJ,12))
r=x.p
s=A.a([A.p(n,A.A(A.a([A.D(A.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,A.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,B.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new A.ua(new C.d79(o,f,g),n,$.aP9(),n)],r),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(i,n,u,v,s,n,B.n),n,n,n,n,B.Xd,n,n,1/0),B.S,o.bVx()],r)
v=o.y
B.d.v(s,new A.J(v,o.gbMn(),A.S(v).k("J<1,r>")))
w=A.cd(A.v(s,B.m,n,B.e,B.j,0,B.p),B.q,n,B.y,n,new A.O(14,w.r.b+78,14,24),n,n,B.ah)
s=A.m(35)
v=A.a([new A.ad(0,B.G,B.w.j(m?0.28:0.08),B.jc,15)],t)
u=A.I(m?B.c.j(0.1):B.aL,B.r,1)
t=A.aH(n,n,n,n,A.W(B.eA,j,n,n,n,18),n,n,n,o.gaQ_(),n,n,n,n,n,n)
q=A.D(A.av(A.d("GAME CENTER",n,n,n,n,n,n,A.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,B.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=A.m(20)
return A.o8(!0,C.aNO(n,l,new A.an(B.W,n,B.aa,B.f,A.a([w,A.ao(n,A.bp(!1,new A.C(B.Lj,A.p(n,A.A(A.a([t,q,new A.C(B.j3,A.p(n,A.A(A.a([D.bG_,B.eb,C.aoU(new C.d7a(o),B.mt,o.a.c.a)],r),B.m,n,B.e,B.Q,0,n,n),B.f,n,n,new A.o(B.cR,n,n,p,n,n,B.n),n,n,n,n,B.h5,n,n,n),n)],r),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(k,n,u,s,v,n,B.n),n,60,n,n,B.ma,n,n,n),n),!0,!1,B.ag,!0,!0),n,n,0,0,0,n)],r),n)),new C.d7b(o),x.K)},
aQ0(){var w,v
this.a.bp()
w=this.d
v=w>0?A.E(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
A.iK(w,v)}}
C.aBu.prototype={
T(){return new C.bhq()},
hp(d){return this.e.$1(d)},
bp(){return this.f.$0()},
aER(){return this.r.$0()}}
C.bhq.prototype={
a_(){this.brQ()
this.d=A.TF(this.a.d.bi)
$.t4=$.t4+1},
q(){C.aYn()
this.brP()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&A.c()
return new C.anw(v,new C.dKH(w),u,new C.dKI(w),new C.dKJ(w,d),new C.dKK(w),null)}}
C.ajF.prototype={
T(){return new C.ayC(new A.ar(B.as,$.aw()))},
hp(d){return this.x.$1(d)},
bp(){return this.y.$0()},
aER(){return this.z.$0()}}
C.ayC.prototype={
a_(){this.bqO()
this.a.toString
$.t4=$.t4+1},
q(){C.aYn()
var w=this.d
w.S$=$.aw()
w.P$=0
this.bqN()},
a0U(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0U=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.MK()
w=5
return A.b(C.ao1(t.a.c),$async$a0U)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return A.b(C.fL3(s,C.frR(r.c),q),$async$a0U)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&B.a.i(r).length!==0){p=C.tG(s.d.b5,B.a.i(r))
if(p!=null&&C.aNg(p)<=0){t.c.I(x.q).f.R(D.aM9)
w=1
break}}o=A.d3(B.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.I(x.q).f.R(D.eKq)
w=1
break}m=A.Kg(t.a.c.a,new C.d6E(t))
if(m+0.001<n){t.c.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Not enough balance for this bet \u2014 you have $"+A.dz(m)+", the bet is $"+A.dz(n)+".",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aER()
s=t.a
s.toString
r=B.o.u(1000*Date.now())
q=t.a
s.hp(new A.d1(r,q.c.a,n,B.jC,B.fb,"Game bet: "+q.f,null,null,B.ck,new A.R(Date.now(),0,!1)))
t.a.bp()
if(D.eDo.t(0,t.a.e)){s=t.c
s.toString
r=t.a
A.ht(s,new C.amz(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
A.ht(s,new C.ajH(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$a0U,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=A.aH(o,o,o,o,B.FN,o,o,o,new C.d6H(d),o,o,o,o,o,o),k=p.a,j=A.d(k.f,o,o,o,o,o,o,B.ct,o,o,o),i=A.m(12),h=x.p
j=A.eC(A.a([A.p(o,A.av(C.aoU(new C.d6I(p),B.kp,k.c.a),o,o,o),B.f,o,o,new A.o(B.cR,o,o,i,o,o,B.n),o,o,o,D.bmq,B.h4,o,o,o)],h),o,o,!0,!0,D.Wj,o,1,o,o,o,!1,o,!1,B.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=A.m(16)
i=A.I(B.b6,B.r,1)
k=A.W(D.bwX,D.bgL,o,o,o,28)
w=p.a
v=A.d(w.f,o,o,o,o,o,o,B.oO,o,o,o)
w=A.d(w.r,o,o,o,o,o,o,B.oS,o,o,o)
u=A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.m(12)
s=x.a3
s=A.B(new A.J(A.a([2,5,10,25],x.t),new C.d6J(p),s),s.k("aj.E"))
s=A.A(s,B.m,o,B.e,B.j,0,o,o)
r=A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.p(o,A.v(A.a([D.fpx,B.S,s,B.P,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.d,o,o,o,o,o,2,A.bo(o,new A.b4(4,A.m(10),B.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,B.lj,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dL,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,B.dk,!0,B.a5,o,B.am,o,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(u,o,o,t,o,o,B.n),o,o,o,o,B.bR,o,o,1/0)
u=A.m(12)
r=A.I(A.Z(102,B.a2A.l()>>>16&255,B.a2A.l()>>>8&255,B.a2A.l()&255),B.r,1)
s=A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
q=A.m(10)
q=A.p(o,A.v(A.a([D.f7f,A.d("+ $"+B.k.aa(n*0.46,2),o,o,o,o,o,o,D.eYS,o,o,o),A.d("(46% return on $"+B.k.aa(p.e,2)+" bet)",o,o,o,o,o,o,B.oP,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(s,o,o,q,o,o,B.n),o,o,o,o,B.cj,o,o,1/0)
s=A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
n=A.m(10)
u=A.p(o,A.v(A.a([D.ffG,B.P,q,B.P,A.p(o,A.v(A.a([D.f2u,A.d("$"+B.k.aa(m,2),o,o,o,o,o,o,D.eOD,o,o,o),A.d("8 pairs \xd7 $"+B.k.aa(m,2)+" each",o,o,o,o,o,o,B.oP,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(s,o,o,n,o,o,B.n),o,o,o,o,B.cj,o,o,1/0)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(D.bd7,o,r,u,o,o,B.n),o,o,o,o,B.bR,o,o,1/0)
r=A.fm(o,o,B.bk,o,o,o,o,o,o,B.c,o,B.fL,o,o,o,o,o,o,o,o)
return C.aNO(j,D.Wj,A.cd(A.p(o,A.v(A.a([k,B.au,v,B.bz,w,B.S,t,B.P,u,B.S,new A.a6(1/0,o,A.i9(A.d("Start Game ($"+B.k.aa(p.e,2)+")",o,o,o,o,o,o,B.cc,o,o,o),p.gcrh(),r),o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,i,l,o,D.bQa,B.n),o,o,o,o,B.eP,o,o,1/0),B.q,o,B.y,o,E.afx,o,o,B.ah))}}
C.ajH.prototype={
T(){var w=x.s,v=x.t,u=x.S
return new C.ayE(B.cI,new A.ar(B.as,$.aw()),A.a([],w),A.a([],x.d4),A.a([],w),A.a([],w),A.a([],v),A.a([],v),A.a([],v),A.aX(u),A.aX(u),A.a([],v),A.a([],v),A.a([],v))},
hp(d){return this.y.$1(d)},
bp(){return this.z.$0()}}
C.ayE.prototype={
ghw(){var w=this.a.Q
return w!=null&&B.a.i(w).length!==0},
qH(d){return this.bKF(d)},
bKF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$qH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.zz()
r=t.NI()
w=s<=0?3:4
break
case 3:w=5
return A.b(t.a9s(d),$async$qH)
case 5:w=1
break
case 4:q=B.k.D(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return A.b(t.th(d),$async$qH)
case 9:w=7
break
case 8:w=10
return A.b(t.DP(q,s,r),$async$qH)
case 10:case 7:case 1:return A.h(u,v)}})
return A.i($async$qH,v)},
Ep(d,e,f,g){return this.cp6(d,e,f,g)},
cp6(d,e,f,g){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ep=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return A.b(C.bBn(s,C.bB0(),C.fSZ(),d,e,f,g),$async$Ep)
case 3:case 1:return A.h(u,v)}})
return A.i($async$Ep,v)},
zz(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.b_t(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&A.c()
return u+C.ag5(t,s.e.a.a)
case"memory":return s.ghw()&&D.mq.t(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.awk()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bi
case"color":return s.b5
case"reflex":return s.Z
default:u=s.b0
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
awk(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
NI(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&A.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.fRa()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.b0
if(w!=null)return w.b
return 1}},
br(d){var w,v,u=this
u.bE(d)
if(u.f||u.c5)return
w=u.a
v=C.frW(w.e,w.d.y2)
if(v!==C.frW(d.e,d.d.y2)&&u.c!=null)u.m(new C.d8w(u,v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.bqS()
w=i.a
w.toString
$.t4=$.t4+1
i.Q=C.frW(w.e,w.d.y2)
i.b2h()
i.aaJ()
if(i.ghw()){i.c5=!0
i.cV="Connecting to match\u2026"
i.cj="Both players enter the room together \u2014 play starts at the same time."
i.O3()
i.aan()
i.bj=A.dG(B.fF,new C.d8z(i))}if(B.d.t(D.Pe,i.a.e)){w=i.ghw()
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
k=B.a.i(J.k(t==null?"":t))}w=new C.aYl(!1,w,k.length===0||B.a.t(k,"@")?C.fR6(u,v,null):k,p,l,s)}else{w=w.c
w=C.fL7(w.c,w.a)}w=i.bJ=w}else{w=v.c
w=i.bJ=C.fL7(w.c,w.a)}v=C.hw1()
v.bkU(i.a.e,i.d,w)
i.b0=v
i.r=v.c
if(i.ghw()){w=i.a
v=w.d.b5
w=w.Q
w.toString
u=C.tG(v,w)
m=u==null?null:J.q(u,h)
if(x.f.b(m)){w=i.b0
w.toString
w.b7j(i.a.e,A.a1(m,x.N,x.z),i.a.c.a)
w=i.b0
i.r=w.c
if(w.e){if(w.r)j=D.QF
else j=w.f===!0?D.pL:D.H5
i.zB(j)}}}i.b3=A.dG(B.nB,new C.d8A(i))
if(i.ghw())i.ba=A.dG(B.ok,new C.d8B(i))}if(i.ghw()&&!B.d.t(D.Pe,i.a.e))i.ba=A.dG(B.ok,new C.d8C(i))
i.as=A.dG(B.hf,new C.d8D(i))},
O3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$O3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghw()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tG(s.d.b5,q)
w=p!=null?3:4
break
case 3:w=5
return A.b(C.bzl(p,t.a.c.a),$async$O3)
case 5:o=e
if(t.c!=null)t.m(new C.d7M(t,o))
w=1
break
case 4:w=6
return A.b(C.K7(q,t.a.d.b5,!1),$async$O3)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return A.b(C.bzl(n,t.a.c.a),$async$O3)
case 7:o=e
if(t.c!=null)t.m(new C.d7N(t,o))
case 1:return A.h(u,v)}})
return A.i($async$O3,v)},
ah_(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$ah_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghw()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.K7(r,s.d.b5,!1),$async$ah_)
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
t.aL2(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=B.k.O(j)
else{h=j==null?null:J.k(j)
i=A.c7(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)B.d.bn(t.fy,new C.d8f(t))
if(i!=null&&t.fr.length!==0){s=A.B(t.dy,x.S)
B.d.v(s,t.dy)
r=new A.eS()
r.dH(i)
B.d.fo(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.m(new C.d8g())}case 1:return A.h(u,v)}})
return A.i($async$ah_,v)},
aan(){var w=0,v=A.j(x.H),u=this
var $async$aan=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.a_f(!0),$async$aan)
case 2:return A.h(null,v)}})
return A.i($async$aan,v)},
a_f(d){return this.ceH(d)},
ceG(){return this.a_f(!1)},
ceH(b3){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$a_f=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghw()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
if(q.length===0){w=1
break}p=B.a.i(s.c.a.toLowerCase())
w=3
return A.b(C.K7(q,s.d.b5,b3),$async$a_f)
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
a2=new A.R(Date.now(),0,!1).a5()
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
if(!new A.R(Date.now(),0,!1).cX(a8)){a4=b2.a=a8.bN(4e6)
j.n(0,"startAt",a4.a5().ac())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.n(0,"memorySeed",B.o.F(1000*Date.now(),2147483647))
j.n(0,"memoryMatched",A.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.n(0,"patternSeed",B.o.F(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.hWl(t.a.d.b5,q,j)
t.a.bp()}if(t.c==null){w=1
break}b0=t.bC
if(b0==null)b0="your opponent"
if(!a5){t.m(new C.d81(b2,t,b0))
w=1
break}if(s==null){t.m(new C.d82(t))
w=1
break}b1=new A.R(Date.now(),0,!1)
if(b1.cX(s)){s=s.by(b1).a
r=B.o.an(s,1e6)
t.m(new C.d83(b2,t,r+(B.o.F(B.o.an(s,1000),1000)>0?1:0)))
w=1
break}if(t.c5){t.m(new C.d84(b2,t))
b2=t.a.e
if(b2==="pattern")t.a7k()
else if(b2==="memory"){t.b2g()
if(t.c!=null)t.m(new C.d85())}}b2=t.bj
if(b2!=null)b2.a9(0)
t.bj=null
case 1:return A.h(u,v)}})
return A.i($async$a_f,v)},
aLX(d){var w,v,u,t,s=this
if(d!=null){w=new A.eS()
w.dH(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e0(v,x.S)
for(t=0;t<v;++t)u[t]=w.aB(9)
s.ry=u
s.x1=0
s.to=-1},
aLW(){return this.aLX(null)},
a7k(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a7k=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ghw()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.ccd()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return A.b(C.K7(q,s.d.b5,!1),$async$a7k)
case 5:r=t.aZd(e)
case 4:if(t.c==null){w=1
break}t.aLX(r)
t.m(new C.d7e(t))
t.D2()
case 1:return A.h(u,v)}})
return A.i($async$a7k,v)},
aZd(d){var w,v,u,t=null
if(d==null)return t
w=J.q(d,"sessionState")
if(!x.f.b(w))return t
v=J.q(w,"patternSeed")
if(typeof v=="number")return B.k.O(v)
u=v==null?t:J.k(v)
return A.c7(u==null?"":u,t)},
ccd(){var w=this.a,v=w.Q
if(v==null)return null
return this.aZd(C.tG(w.d.b5,v))},
aaJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$aaJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$aaJ)
case 3:r=e
q=t.a
p=q.e
q=B.a.i(q.c.a.toLowerCase())
s=A.f3(J.q(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.m(new C.d7L(t,s))
case 1:return A.h(u,v)}})
return A.i($async$aaJ,v)},
oD(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n
var $async$oD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$oD)
case 2:p=e
o=u.a
n=o.e
o=B.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bBR().length
else s=n==="typing"?50:105
if(n==="typing")r=B.o.F(u.at+5,s)
else{q=u.at
r=t?B.o.F(q+6,s):B.o.F(q+1,s)}w=3
return A.b(p.ar("Int","ngmy_game_"+n+"_"+o,r),$async$oD)
case 3:u.at=r
return A.h(null,v)}})
return A.i($async$oD,v)},
a18(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a18=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghw()||t.b0==null||t.f||t.aR){w=1
break}if(t.c5){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.K7(r,s.d.b5,!1),$async$a18)
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
if(m!=null&&l!=null&&!m.c9(l)){w=1
break}s=t.b0
s.toString
r=t.a
s.b7j(r.e,n,r.c.a)
r=t.b0
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.QF
else k=r.f===!0?D.pL:D.H5
w=7
return A.b(t.zB(k),$async$a18)
case 7:w=5
break
case 6:if(t.c!=null)t.m(new C.d8h())
case 5:case 1:return A.h(u,v)}})
return A.i($async$a18,v)},
aeV(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$aeV=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghw()||q.b0==null||q.a.Q==null||q.aR){w=1
break}q.aR=!0
t=3
o=q.b0
o.toString
p=o.cGf(q.a.e)
o=q.a
n=o.d.b5
o=o.Q
o.toString
w=6
return A.b(C.aO9(n,o,p),$async$aeV)
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
return A.i($async$aeV,v)},
zB(d){return this.bRF(d)},
bRF(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$zB=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(t.Is(s,s),$async$zB)
case 9:w=4
break
case 6:w=10
return A.b(t.WH(s,s),$async$zB)
case 10:w=4
break
case 7:w=11
return A.b(t.a9r(s,s),$async$zB)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghw()?12:13
break
case 12:w=14
return A.b(t.H3(),$async$zB)
case 14:case 13:case 1:return A.h(u,v)}})
return A.i($async$zB,v)},
Zc(d,e){return this.c6H(d,e)},
c6H(d,e){var w=0,v=A.j(x.H),u,t=this
var $async$Zc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=t.ghw()?3:5
break
case 3:w=6
return A.b(t.aeV(),$async$Zc)
case 6:if(d===D.pK){w=1
break}w=4
break
case 5:if(d===D.pK){w=1
break}case 4:w=7
return A.b(t.zB(d),$async$Zc)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Zc,v)},
aaD(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aaD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghw()||t.a.Q==null||t.f){w=1
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
return A.b(C.aO9(t.a.d.b5,q,l),$async$aaD)
case 3:t.a.bp()
case 1:return A.h(u,v)}})
return A.i($async$aaD,v)},
H3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$H3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghw()||t.a.Q==null){w=1
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
C.fTp(t.a.d.b5,q,n)
C.hZE(t.a.d.b5,q)
w=3
return A.b(C.afV(t.a.d.b5),$async$H3)
case 3:t.a.bp()
case 1:return A.h(u,v)}})
return A.i($async$H3,v)},
q(){var w,v=this
if(v.ghw()&&!v.f)v.aaD()
else if(!v.f)v.bY3()
C.aYn();++v.RG
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
v.bqR()},
cun(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&A.c()
v=v<=0||w.b0==null}if(v)return
if(w.c5)return
v=w.b0
v.toString
w.a.toString
if(v.a>=v.b){w.th("Goal completed!")
return}v=++w.rx
if(v%5===0)w.m(new C.d8q())},
b2h(){var w,v,u,t,s,r=this
r.x=A.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e0(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b2g()
break
case"scramble":r.bi=0
r.b2i()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=B.o.F(r.at,50)
v=J.e0(5,x.N)
for(t=0;t<5;++t)v[t]=D.d70[B.o.F(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bM(0,B.c3)
break
case"math":r.y2=0
r.b2f()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b2j()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e0(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
B.d.fo(v,s)
if(!r.ch4()){w=J.e0(9,w)
for(u=0;u<9;++u)w[u]=u
B.d.fo(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
B.d.a8(w)
w.push(r.d.aB(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.PC()
break
case"pattern":if(r.ghw()){r.ry=A.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aLW()
w=A.t(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.D2()}break
case"color":r.b5=0
r.b2a()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.Z=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b3o()
break
default:if(B.d.t(D.Pe,w)){w=r.b0
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
b_t(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
ch4(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return B.o.F(v,2)===0},
b2j(){var w,v,u,t,s,r=this,q=B.o.F(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e0(o,x.S)
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
b2f(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bBR().length-6)u.at=0
w=$.bBR()
v=w[B.o.F(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b2i(){var w=this,v=w.w=D.cMQ[B.o.F(w.at+w.bi,105)]
w.ax=C.hZW(v)
w.ay=A.c1(v.length,null,!1,x.T)
w.ch=A.a(w.ax.split(""),x.s)
w.e.bM(0,B.c3)},
b3o(){var w=this,v=w.cx
if(v!=null)v.a9(0)
w.y=!1
w.z=null
w.cx=A.cM(A.dB(0,0,0,120+w.d.aB(280),0,0),new C.d8e(w))},
bRI(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.qH("Too early \u2014 paid for "+t.Z+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=B.o.an(new A.R(v,0,!1).by(u).a,1000)}if(w<520){t.m(new C.d7J(t))
v=t.Z
if(v>=5){t.oD()
t.th("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b3o()
t.m(new C.d7K())}}else t.qH("Too slow ("+w+"ms) \u2014 paid for "+t.Z+"/5.")},
ctE(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=B.d.be(t.ay,new C.d8l())
if(u<0)return
t.m(new C.d8m(t,u,v,d))},
ctF(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.m(new C.d8n(u,d,v))},
bC3(){var w,v,u=this
if(u.f)return
if(B.d.b8(u.ay,new C.d7f())){u.c.I(x.q).f.R(D.eKk)
return}w=B.d.fT(u.ay)
v=u.w
v===$&&A.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.m(new C.d7g(u))
if(u.ghw()&&D.mq.t(0,u.a.e))u.a_t()
if(u.bi>=5){u.oD()
if(u.ghw()&&D.mq.t(0,u.a.e))u.mH(!0)
else u.th("All 5 words unscrambled!")}else{u.b2i()
u.r="Word "+(u.bi+1)+" of 5 \u2014 place letters in order"
u.m(new C.d7h())}}else u.qH("Wrong word \u2014 paid for "+u.bi+"/5.")},
b2a(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=B.o.F(w.at+w.b5*11,4),t=v[w.d.aB(4)]
w.aF=t
w.aE=v[u]
w.aO=[B.dD,B.dv,B.hM,B.r_][u]
w.w=t},
aL2(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=B.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a8(0)
w=h.id
w.a8(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=A.aX(x.S)
for(s=J.jp(v),s=s.gaj(s),r=x.j;s.C();){q=s.gU(s)
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
b2g(){var w,v,u,t,s,r,q,p=this
p.fx=p.k2=0
p.go.a8(0)
p.id.a8(0)
p.fy=A.a([],x.t)
p.k1=!1
w=A.B(p.dy,x.S)
B.d.v(w,p.dy)
p.fr=w
if(p.ghw()&&p.a.Q!=null){w=p.a
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
if(q!=null){v=new A.eS()
v.dH(q)
B.d.fo(w,v)}else B.d.fo(w,p.d)
p.aL2(s)}else B.d.fo(p.fr,p.d)},
ce1(d){var w,v,u,t=this
if(t.c5)return
if(t.f||t.k1||t.go.t(0,d)||B.d.t(t.fy,d))return
t.m(new C.d7V(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.m(new C.d7W(t,v,u))
if(t.ghw()&&D.mq.t(0,t.a.e))t.a_t()
if(t.go.a>=t.fr.length){t.oD()
if(t.ghw()&&D.mq.t(0,t.a.e))t.mH(!0)
else t.awn()}return}t.k1=!0
A.bN(D.bln,new C.d7X(t),x.c)},
b1E(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&A.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.m(new C.d86(u))
if(u.y1>=5){u.oD()
u.th("All 5 questions correct!")}else{u.b2j()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.m(new C.d87())}}else u.qH(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.m(new C.d88(u))
if(u.y2>=6){u.oD()
u.th("All 6 math questions correct!")}else{u.b2f()
u.r="Question "+(u.y2+1)+" of 6"
u.m(new C.d89())}}else{u.UN(u.y2+1)
u.qH(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.m(new C.d8a(u))
if(u.b5>=5){u.oD()
u.th("All 5 color rounds correct!")}else{u.b2a()
u.r="Round "+(u.b5+1)+" of 5 \u2014 tap the COLOR of the text"
u.m(new C.d8b())}}else u.qH("Wrong color \u2014 paid for "+u.b5+"/5.")
return}if(v){u.oD()
u.awn()}else u.c.I(x.q).f.R(D.eL3)},
ctD(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=B.d.cI(q.k4,0)
v=B.o.an(d,3)
u=B.o.F(d,3)
t=B.o.an(w,3)
s=B.o.F(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.m(new C.d8k(q,d,w))
if(B.d.fT(q.k4)==="123456780"){q.oD()
q.awn()}}},
PC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.m(new C.d7Y(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.d7Z(t,q).$0()
t.c.e6()
w=6
return A.b(A.bN(B.kz,null,r),$async$PC)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.d8_(t).$0()
t.c.e6()
w=7
return A.b(A.bN(B.jo,null,r),$async$PC)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.m(new C.d80(t))
case 1:return A.h(u,v)}})
return A.i($async$PC,v)},
ctG(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.qH("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.m(new C.d8o(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.oD()
u.th("Perfect Simon run!")
return}u.m(new C.d8p(u))
u.PC()}},
D2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$D2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.m(new C.d7i(t))
s=x.H
w=3
return A.b(A.bN(B.jn,null,s),$async$D2)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.d7j(t,o).$0()
t.c.e6()
w=7
return A.b(A.bN(B.WR,null,s),$async$D2)
case 7:if(t.c==null){w=1
break}new C.d7k(t).$0()
t.c.e6()
w=8
return A.b(A.bN(B.ir,null,s),$async$D2)
case 8:case 5:r.length===q||(0,A.K)(r),++p
w=4
break
case 6:if(t.c!=null)t.m(new C.d7l(t))
case 1:return A.h(u,v)}})
return A.i($async$D2,v)},
UN(d){return this.bwR(d)},
bwR(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$UN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return A.b(A.ay(),$async$UN)
case 3:s=f
r=t.a
q=r.e
r=B.a.i(r.c.a.toLowerCase())
p=$.bBR().length
o=B.o.F(t.at+d,p)
w=4
return A.b(s.ar("Int","ngmy_game_"+q+"_"+r,o),$async$UN)
case 4:t.at=o
case 1:return A.h(u,v)}})
return A.i($async$UN,v)},
ctB(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.qH("Wrong tile \u2014 paid for "+v.awk()+"/"+C.fRa()+" moves.")
return}v.m(new C.d8i(v,w))
if(v.ghw()&&D.mq.t(0,v.a.e))v.a_t()
if(v.x1>=w)if(v.x2>=7){v.oD()
if(v.ghw()&&D.mq.t(0,v.a.e))v.mH(!0)
else v.th("All 7 pattern rounds correct!")}else{v.m(new C.d8j(v))
v.D2()}},
Is(d,e){return this.cct(d,e)},
th(d){return this.Is(null,d)},
awn(){return this.Is(null,null)},
cct(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Is=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a9(0)
s=t.b3
if(s!=null)s.a9(0)
r=t.a.x*1.46
t.m(new C.d7T(t,r))
q=B.o.u(1000*Date.now())
s=t.a
p=new A.d1(q,s.c.a,r,B.fA,B.fb,"Game payout: "+s.f,null,null,B.ck,new A.R(Date.now(),0,!1))
A.afS(p,!0)
t.a.hp(p)
t.a.bp()
o=e==null?"+$"+B.k.aa(r,2)+" added to your balance!":e
s=t.a
C.ul(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.Ep(d,o,"YOU WIN!",!0),$async$Is)
case 3:w=4
return A.b(C.afK(t.a.f,o),$async$Is)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Is,v)},
En(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$En=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghw()&&D.mq.t(0,t.a.e)?3:4
break
case 3:w=5
return A.b(t.coa(),$async$En)
case 5:w=1
break
case 4:s=t.zz()
r=t.NI()
w=r<=0||s<=0?6:7
break
case 6:w=8
return A.b(t.a9s("Time's up \u2014 no progress to pay."),$async$En)
case 8:w=1
break
case 7:q=B.k.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return A.b(t.th("Complete! Max payout earned."),$async$En)
case 12:w=10
break
case 11:w=13
return A.b(t.DP(q,s,r),$async$En)
case 13:case 10:case 1:return A.h(u,v)}})
return A.i($async$En,v)},
PJ(d){return this.cgM(d)},
a_t(){return this.PJ(!1)},
cgM(b1){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$PJ=A.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghw()&&D.mq.t(0,r.a.e))||r.a.Q==null){w=1
break}if(!b1){a1=new A.R(Date.now(),0,!1)
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
return A.b(C.K7(q,r.a.d.b5,!1),$async$PJ)
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
J.aG(k,p,r.zz())
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
return A.b(C.aO9(r.a.d.b5,q,m),$async$PJ)
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
return A.i($async$PJ,v)},
mH(d){return this.cob(d)},
coa(){return this.mH(!1)},
cob(b5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$mH=A.e(function(b6,b7){if(b6===1)return A.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghw()||t.a.Q==null?3:4
break
case 3:w=5
return A.b(t.En(),$async$mH)
case 5:w=1
break
case 4:w=6
return A.b(t.PJ(!0),$async$mH)
case 6:s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=B.a.i(s.c.a.toLowerCase())
w=7
return A.b(C.K7(q,s.d.b5,!0),$async$mH)
case 7:o=b7
n=t.NI()
w=o==null?8:9
break
case 8:m=B.k.D(t.zz()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return A.b(t.a9s("Time's up \u2014 no progress to pay."),$async$mH)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return A.b(t.th("Complete! Max payout earned."),$async$mH)
case 17:w=15
break
case 16:w=18
return A.b(t.DP(m,t.zz(),n),$async$mH)
case 18:case 15:case 11:w=19
return A.b(t.H3(),$async$mH)
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
if(a0==null)a0=t.zz()
d=A.aN(e.h(0,j))
a1=d==null?null:B.k.O(d)
if(a1==null)a1=0
a2=B.k.D(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return A.b(t.a9s("Time's up \u2014 no progress to pay."),$async$mH)
case 22:w=23
return A.b(t.H3(),$async$mH)
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
t.m(new C.d8c(t,a8,a2))
r=t.a
r.toString
h=B.o.u(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+B.k.aa(a7,2):d+" ("+b1+"/"+b2+")"
r.hp(new A.d1(h,b0,a9,B.fA,B.fb,d,null,null,B.ck,new A.R(Date.now(),0,!1)))
t.a.bp()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+B.k.aa(a9,2)+" (includes opponent bonus $"+B.k.aa(a7,2)+")":"+$"+B.k.aa(a8,2)+" (your progress payout)"
s=t.a
C.ul(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return A.b(t.Ep(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$mH)
case 24:w=25
return A.b(t.H3(),$async$mH)
case 25:case 1:return A.h(u,v)}})
return A.i($async$mH,v)},
DP(d,e,f){return this.ccr(d,e,f)},
ccr(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$DP=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a9(0)
s=t.b3
if(s!=null)s.a9(0)
r=t.a.x*1.46*d
t.m(new C.d7R(t,r,d))
s=B.o.u(1000*Date.now())
q=t.a
p=new A.d1(s,q.c.a,r,B.fA,B.fb,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,B.ck,new A.R(Date.now(),0,!1))
A.afS(p,!0)
t.a.hp(p)
t.a.bp()
if(t.c==null){w=1
break}o=B.k.V(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&A.c()
m=q+C.ag5(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?B.d.cH(t.cy,0,new C.d7S()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+B.k.aa(r,2)+" ("+n+"% \u2014 "+A.t(k)+" mistakes/missed)":"+$"+B.k.aa(r,2)+" ("+n+"% of full prize)"
q=t.a
C.ul(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return A.b(t.Ep(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$DP)
case 3:w=4
return A.b(C.afK(t.a.f,j),$async$DP)
case 4:case 1:return A.h(u,v)}})
return A.i($async$DP,v)},
bY3(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.zz()
v=o.NI()}catch(u){return}if(v<=0||w<=0)return
t=B.k.D(w/v,0,1)
s=A.nL(B.k.aa(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=B.o.u(1000*Date.now())
p=o.a
r.hp(new A.d1(q,p.c.a,s,B.fA,B.fb,"Game partial: "+p.f+" ("+A.t(w)+"/"+A.t(v)+", left early)",n,n,B.ck,new A.R(Date.now(),0,!1)))
o.a.bp()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.ul(s,n,"Left early \xb7 +$"+B.k.aa(s,2)+" ("+A.t(w)+"/"+A.t(v)+")",q,r,p,n,!0)},
a9r(d,e){return this.bMi(d,e)},
bMi(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a9r=A.e(function(f,g){if(f===1)return A.f(g,v)
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
t.a.hp(new A.d1(r,q,p,B.fA,B.fb,"Game payout: "+s+" (draw, stake returned)",null,null,B.ck,new A.R(o,0,!1)))
t.a.bp()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.ul(o,null,"Draw. Your $"+B.k.aa(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.Ep(d,"Nobody won, so your $"+B.k.aa(t.a.x,2)+" stake was returned.","DRAW",!1),$async$a9r)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9r,v)},
WH(d,e){return this.bMj(d,e)},
a9s(d){return this.WH(null,d)},
bMj(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$WH=A.e(function(f,g){if(f===1)return A.f(g,v)
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
C.ul(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return A.b(t.Ep(d,e,"YOU LOSE",!1),$async$WH)
case 3:case 1:return A.h(u,v)}})
return A.i($async$WH,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&A.c()
w=B.o.an(m,60)
m=B.a.aT(B.o.u(B.o.F(m,60)),2,"0")
v=A.aH(n,n,n,n,B.al8,n,n,n,new C.d8r(d),n,n,n,n,n,n)
if(o.ghw()){u=o.bC
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=A.D(A.d(u?t.f+" vs "+A.t(o.bC):t.f,n,2,B.a2,n,n,n,B.fW,n,n,n),1)
r=A.m(10)
q=x.p
r=A.A(A.a([v,s,A.p(n,C.aoU(new C.d8s(o),B.nX,t.c.a),B.f,n,n,new A.o(B.cR,n,n,r,n,n,B.n),n,n,n,n,B.fG,n,n,n)],q),B.m,n,B.e,B.j,0,n,n)
t=o.a
s=t.w
v=A.m(10)
s=A.p(n,A.A(A.a([A.D(A.d("Win $"+B.k.aa(t.x*1.46,2)+" \xb7 stake $"+B.k.aa(o.a.x,2)+" \u2022 Progress "+o.zz()+"/"+o.NI(),n,n,n,n,n,n,D.eTB,n,n,n),1),new C.ao3(o.a.c.a,new C.d8t(o),n),B.ab,D.bBC,B.d8,A.d(""+w+":"+m,n,n,n,n,n,n,B.na,n,n,n)],q),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,n,v,n,new A.a7(B.a3,B.a7,B.x,s,n,n),B.n),n,n,n,n,B.h3,n,n,n)
v=o.a.w
m=A.S(v).k("J<1,w>")
m=A.B(new A.J(v,new C.d8u(),m),m.k("aj.E"))
w=A.m(14)
v=A.I(B.b6,B.r,1)
p=C.aNO(n,D.b3T,A.bp(!0,new A.C(Ad.Xe,A.v(A.a([r,s,B.P,new A.fj(new C.d8v(o),n),B.ao,A.D(A.p(n,o.bMh(),B.f,n,n,new A.o(n,n,v,w,n,new A.a7(B.a3,B.a7,B.x,m,n,n),B.n),n,n,n,n,B.cj,n,n,n),1)],q),B.aj,n,B.e,B.j,0,B.p),n),!0,!1,B.ag,!0,!0))
if(!o.c5)return p
m=A.Z(140,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255)
w=A.Z(242,B.io.l()>>>16&255,B.io.l()>>>8&255,B.io.l()&255)
v=A.m(18)
u=A.I(B.b6,B.r,1)
return new A.an(B.W,n,B.aa,B.q,A.a([p,A.bY(0,A.p(B.A,A.e2(A.p(n,A.v(A.a([D.eGw,B.ac,A.d(o.cV,n,n,n,n,n,n,D.eV2,B.L,n,n),B.ao,A.d(o.cj,n,n,n,n,n,n,D.eTi,B.L,n,n)],q),B.m,n,B.e,B.Q,0,B.p),B.f,n,n,new A.o(w,n,u,v,n,n,B.n),n,n,n,B.uX,B.x8,n,n,n),!1,n),B.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
bZ1(){var w=this.k3
return A.cm(new C.d7Q(this,w,B.k.dJ(this.fr.length/w)))},
bMh(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.bZ1()
if(m==="scramble"){m=o.r
m===$&&A.c()
w=x.l
return A.v(A.a([A.d(m,n,n,n,n,n,n,B.oP,n,n,n),A.d("Words "+o.bi+"/5",n,n,n,n,n,n,B.CL,n,n,n),B.ac,A.d("Tap letters below to fill each slot",n,n,n,n,n,n,A.l(n,n,A.Z(166,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.S,A.c4(B.fM,A.ip(o.ay.length,new C.d7y(o),!0,w),B.bx,6,6),B.aO,A.c4(B.fM,A.ip(o.ch.length,new C.d7z(o),!0,w),B.bx,8,8),B.aO,new A.a6(1/0,n,A.i9(D.fiX,o.gbC2(),A.fm(n,n,B.aE,n,n,n,n,n,n,B.c,n,n,B.cf,n,n,n,n,n,n,n)),n)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="typing"){m=o.w
m===$&&A.c()
return new C.aql(m,o.e,new C.d7A(o),new C.d7B(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&A.c()
m=A.a([A.d(m,n,n,n,n,n,n,B.oP,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(A.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,B.CL,n,n,n))
m.push(B.ac)
if(o.a.e==="sequence"){w=o.az
w===$&&A.c()
w+=", ?"}else w=o.CW
m.push(A.f4(B.A,A.d(w,n,n,n,n,n,n,B.oO,B.L,n,n),B.f,B.dt))
m.push(B.aO)
w=o.x
B.d.v(m,new A.J(w,new C.d7C(o),A.S(w).k("J<1,r>")))
return A.v(m,B.m,n,B.e,B.j,0,B.p)}if(m==="puzzle")return A.cm(new C.d7D(o))
if(m==="simon"){m=o.r
m===$&&A.c()
return A.v(A.a([A.d(m,n,n,n,n,n,n,B.oP,n,n,n),A.d("Progress "+o.p3+"/21",n,n,n,n,n,n,B.CL,n,n,n),B.P,A.D(A.lR(1,A.ip(4,new C.d7E(o),!0,x.l),2,10,10,n,B.dP,!1),1)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="pattern")return A.cm(new C.d7F(o))
if(m==="color"){u=A.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[B.dD,B.dv,B.hM,B.r_]
m=o.r
m===$&&A.c()
m=A.d(m,n,n,n,n,n,n,B.oP,n,n,n)
w=A.d("Round "+o.b5+"/5",n,n,n,n,n,n,B.CL,n,n,n)
v=o.aE
v===$&&A.c()
s=o.aO
s===$&&A.c()
s=A.a([m,w,B.ac,A.d(v,n,n,n,n,n,n,A.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.aO],x.p)
r=J.e0(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=A.fm(n,n,A.Z(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,B.c,n,n,B.f3,n,n,n,n,n,n,n)
r[q]=new A.C(B.cG,new A.a6(1/0,n,A.i9(new A.x(u[q],n,B.ct,n,n,n,n,n,n,n,n,n),new C.d7G(o,u,q),m),n),n)}B.d.v(s,r)
return A.v(s,B.m,n,B.e,B.j,0,B.p)}if(m==="reflex"){m=o.y
p=m?B.bk:B.cb
w=o.r
w===$&&A.c()
w=A.d(w,n,n,n,n,n,n,B.a6n,B.L,n,n)
v=A.d("Fast taps "+o.Z+"/5",n,n,n,n,n,n,D.eQR,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=A.d(m,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,n,n,n,Math.min(A.aI(s,B.bS,x.w).w.a.a*0.18,72),n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return A.rh(A.aE(B.c5,A.df(n,A.v(A.a([w,B.P,v,B.b3,s,B.b3,new A.C(B.Ey,A.d(m,n,n,n,n,n,n,A.l(n,n,A.Z(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),B.m,n,B.b9,B.j,0,B.p),p,n,B.bb,n,T.Am,n,n,n,n,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gbRH(),n,n,n,n,n,n,!1,B.a9))}if(B.d.t(D.Pe,m)&&o.b0!=null){m=o.a.e
w=o.b0
w.toString
return C.hPm(m,new C.d7H(o),new C.d7I(o),o.d,w)}m=o.r
m===$&&A.c()
return A.av(A.d(m,n,n,n,n,n,n,B.dk,n,n,n),n,n,n)}}
C.akx.prototype={
T(){return new C.bez()},
cLY(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bez.prototype={
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.a,a0=d.c,a1=d.d
d=A.aI(a2,B.e7,x.w).w
w=x.p
v=A.a([A.bLP(!1,f.a.r,"INVESTMENT PLANS",e),B.d6],w)
u=a0.x
if(u!=null){t=u.d.bQ()
s=B.a.aT(B.o.u(A.bG(t)),2,"0")
r=B.a.b_(B.o.u(A.bx(t)+1),2)
q=A.m(18)
p=A.I(F.VW,B.r,2.2)
o=x.V
n=A.a([new A.ad(0,B.G,A.Z(89,B.qm.l()>>>16&255,B.qm.l()>>>8&255,B.qm.l()&255),B.eT,20),new A.ad(0,B.G,A.Z(102,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dn,14)],o)
m=A.ao(e,A.p(e,e,B.f,e,e,new A.o(A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),e,e,e,e,e,B.a6),e,120,e,e,e,e,e,120),e,e,e,-20,-24,e)
l=A.m(10)
k=A.I(F.VW,B.r,3.4)
o=A.a([new A.ad(0,B.G,A.Z(166,B.qm.l()>>>16&255,B.qm.l()>>>8&255,B.qm.l()&255),B.dz,10),new A.ad(0,B.G,A.Z(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cJ,6)],o)
o=A.A(A.a([A.p(e,e,B.f,e,e,new A.o(e,e,k,l,o,new A.a7(B.ax,B.aC,B.x,D.cX1,D.czx,e),B.n),e,42,e,e,e,e,e,56),B.b3,f.b49(a2,!0)],w),B.m,e,B.e,B.j,0,e,e)
l=A.CR(u.a,1,B.a2,D.eY8)
k=u.b
j=u.c
i=A.CR("Making $"+A.dz(k*j)+" Daily",1,B.a2,D.eYl)
h=A.CR(f.b_f(k),1,B.a2,D.eRy)
r=A.A(A.a([A.D(A.v(A.a([D.fcm,A.CR(a0.c,1,B.a2,D.aO1)],w),B.F,e,B.e,B.j,0,B.p),1),A.v(A.a([D.fc8,A.d(s+"/"+r,e,e,e,e,e,e,D.aO1,e,e,e)],w),B.dC,e,B.e,B.j,0,B.p)],w),B.m,e,B.e,B.j,0,e,e)
s=A.p(e,e,B.f,A.Z(89,D.wD.l()>>>16&255,D.wD.l()>>>8&255,D.wD.l()&255),e,e,e,1,e,e,e,e,e,e)
j=A.A(A.a([f.apo("INVESTED","$"+A.dz(k),!0),f.apo("DAILY ROI",B.k.aa(j*100,2)+"%",!0),f.apo("DAYS LEFT",""+(261-u.f)+" d",!0)],w),B.m,e,B.hK,B.j,0,e,e)
k=A.dz(u.e)
u=u.f
g=261-u>0?"ACTIVE":"ENDED"
B.d.v(v,A.a([D.fix,B.u8,A.p(e,new A.an(B.W,e,B.aa,B.q,A.a([m,A.v(A.a([o,B.P,D.faP,B.bz,l,B.au,i,B.au,h,B.P,r,B.ao,s,B.ao,j,B.au,A.CR("Earned $"+k+" \u2022 Clocked "+u+"/261 \u2022 "+g,1,B.a2,D.eXw)],w),B.F,e,B.e,B.Q,0,B.p)],w),e),B.f,e,e,new A.o(e,e,p,q,n,D.bQY,B.n),e,e,e,e,B.bB,e,e,1/0),B.a5F],w))}v.push(D.f39)
v.push(B.u8)
B.d.v(v,new A.J(a1,new C.dc3(f,a2),A.S(a1).k("J<1,r>")))
return A.cb(e,B.K,A.bp(!1,A.cd(A.v(v,B.F,e,B.e,B.j,0,B.p),B.q,e,B.y,e,new A.O(20,10,20,124+d.r.d),e,e,B.ah),!0,!1,B.ag,!0,!0),e,!1,!1,e,e)},
b49(d,e){var w=null,v=A.Z(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(8),t=A.I(B.j1,B.r,1)
return A.p(w,A.A(A.a([A.W(B.aj1,B.c,w,w,w,16),B.d8,A.d("TAP",w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eE,w,w,w)},
b_f(d){var w=B.a.aT(B.o.u(B.k.V(d*100)),4,"0")
return"****  ****  ****  "+B.a.b_(w,w.length-4)},
apo(d,e,f){var w=null,v=A.Z(217,D.wD.l()>>>16&255,D.wD.l()>>>8&255,D.wD.l()&255)
v=A.d(d,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.v(A.a([v,B.bz,A.CR(e,w,w,A.l(w,w,E.A6,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),B.F,w,B.e,B.j,0,B.p)},
cev(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gcQp(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
o=A.a([new A.ad(0,B.G,A.Z(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.R1,16),new A.ad(0,B.G,A.Z(115,B.ak.l()>>>16&255,B.ak.l()>>>8&255,B.ak.l()&255),B.dn,14),new A.ad(0,B.G,A.Z(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cJ,8)],p)
n=A.ao(d,A.p(d,d,B.f,d,d,new A.o(d,d,d,d,d,new A.bR(B.A,0.5,B.x,d,0,A.a([A.Z(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),A.Z(0,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)],x.O),d,d),B.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=A.m(5)
l=A.I(B.c,B.r,2.2)
k=A.b0(4286436348)
k=A.Z(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=A.Z(B.k.V(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
i=A.b0(4279150057)
h=x.p
p=A.A(A.a([new A.a6(44,44,new A.an(B.W,d,B.aa,B.f,A.a([A.ao(d,A.eA(B.A,0.7853981633974483,A.p(d,d,B.f,d,d,new A.o(d,d,l,m,A.a([new A.ad(0.5,B.G,k,B.J,14),new A.ad(0,B.G,j,B.J,6),new A.ad(0,B.G,A.Z(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new A.u(0,2),4)],p),D.bPE,B.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.e68],h),d),d),B.b3,e.b49(b2,!0)],h),B.m,d,B.e,B.j,0,d,d)
a6=A.CR(a6,1,B.a2,D.eOk)
i=A.CR(e.b_f(a3),1,B.a2,D.f1z)
j=A.A(A.a([e.aZH(B.k.aa(2.86,2)+"%"),B.eb,e.aZH("261d")],h),B.m,d,B.e,B.j,0,d,d)
k=A.D(A.v(A.a([D.f4m,A.CR("$"+A.dz(a3),1,B.a2,D.f0m)],h),B.F,d,B.e,B.j,0,B.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=A.A(A.a([k,A.d(m,d,d,d,d,d,d,D.eP6,d,d,d)],h),B.dC,d,B.e,B.j,0,d,d)
k=A.p(d,d,B.f,A.Z(89,B.bv.l()>>>16&255,B.bv.l()>>>8&255,B.bv.l()&255),d,d,d,1,d,d,d,d,d,d)
l=A.A(A.a([A.D(e.awA("Daily","$"+A.dz(a4)),1),B.eb,A.D(e.awA("Total","$"+A.dz(a4*261)),1),B.eb,A.D(e.awA("Days","261"),1)],h),B.m,d,B.e,B.j,0,d,d)
g=q?d:new C.dc2(e,b3,a3,t)
f=B.k.V(127.5)
f=A.fm(d,d,B.bn,A.Z(f,B.ak.l()>>>16&255,B.ak.l()>>>8&255,B.ak.l()&255),A.Z(f,B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255),d,3,d,d,B.aP,d,d,d,d,new A.b7(A.m(10),D.aVl),d,d,d,d,d)
return A.p(d,new A.an(B.W,d,B.aa,B.f,A.a([n,A.v(A.a([p,B.bz,D.fd4,B.bz,a6,B.d_,i,B.fV,j,B.fV,m,B.fV,k,B.fV,l,B.P,new A.a6(1/0,40,A.i9(A.f4(B.A,A.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.ePw,d,d,d),B.f,B.eg),g,f),d)],h),B.F,d,B.e,B.Q,0,B.p)],h),d),B.f,d,d,new A.o(d,d,w,a0,o,D.bRx,B.n),d,d,d,B.kB,D.bn9,d,d,1/0)},
aZH(d){var w=null,v=A.Z(115,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(5),t=A.I(B.cm,B.r,1)
return A.p(w,A.d(d,w,w,w,w,w,w,D.eOJ,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.EP,w,w,w)},
awA(d,e){var w=null,v=A.Z(97,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(7),t=A.I(B.aL,B.r,1)
return A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,D.eXU,w,w,w),B.u9,A.f4(B.a3,A.d(e,w,w,w,w,w,w,D.f_q,w,w,w),B.f,B.dt)],x.p),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.lB,w,w,w)}}
C.agT.prototype={
T(){var w=null,v=A.a([],x._),u=$.aw()
return new C.avP(v,new A.ar(B.as,u),new A.ar(B.as,u),A.mo(0,w,w),new A.hU(),D.Qu,C.afH(),A.a([],x.fw),A.aX(x.N),A.mo(0,w,w))}}
C.avP.prototype={
a_(){var w,v,u,t,s,r=this
r.a1()
w=r.a
w.toString
r.d=0
v=A.z5(0,1)
r.e!==$&&A.aO()
r.e=v
r.ay=w.f.aE
w=r.k3=A.bl(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t].a
if(s.length!==0)u.J(0,s)}r.aaO()
r.O2()
r.ap0()
r.cr4()
r.crj()
$.aU.x1$.push(new C.czX(r))
r.a.toString},
O2(){var w=0,v=A.j(x.H),u,t=this,s
var $async$O2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aou(),$async$O2)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.czh(t,s))
case 1:return A.h(u,v)}})
return A.i($async$O2,v)},
gay9(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gNZ())return!0
return!1},
gNZ(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaSP(){var w,v=this.CW
if(v==null)return B.bw
w=v.by(new A.R(Date.now(),0,!1))
return w.a<0?B.bw:w},
bxE(){var w=this
if(w.a.c.w)return
if(w.gNZ()){if(!w.cx)w.m(new C.cz7(w))}else if(w.cx)w.m(new C.cz8(w))},
ckx(){this.m(new C.czr(this))},
tp(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$tp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.m(new C.czo(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.m(new C.czp(t))
w=1
break}w=3
return A.b(C.c6x(o.a,s),$async$tp)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return A.b(C.c6y(t.a.c.a,s),$async$tp)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.m(new C.czq(t,r,q))
t.ct4()
t.bxE()
if(r===3)t.XI(r)}case 1:return A.h(u,v)}})
return A.i($async$tp,v)},
XI(d){return this.bYT(d)},
bYT(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$XI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return A.b(C.bBt(q,r,new C.czj(t),d,s.c.a),$async$XI)
case 3:case 1:return A.h(u,v)}})
return A.i($async$XI,v)},
wS(d){return this.bz8(d)},
ap0(){return this.wS(!1)},
bz8(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$wS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return A.b(A.a6R(k,C.hec(l.d)),$async$wS)
case 3:j=m
w=4
return A.b(C.c6X(k),$async$wS)
case 4:s=j.a=f
w=5
return A.b(A.apj(k),$async$wS)
case 5:r=f
w=!s.a&&J.cw(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.Uh(!0,l,q,p)
m.a=s
w=8
return A.b(C.aow(k,s),$async$wS)
case 8:case 7:w=9
return A.b(C.Tg(k),$async$wS)
case 9:o=f
w=10
return A.b(C.a6d(k),$async$wS)
case 10:n=f
if(t.c==null){w=1
break}t.m(new C.cz9(m,t,r,o,n))
case 1:return A.h(u,v)}})
return A.i($async$wS,v)},
Pg(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Pg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.O2(),$async$Pg)
case 3:s=t.c
if(s==null){w=1
break}r=A.em(new C.czm(t),!1,null,x.H)
w=4
return A.b(A.a5(s,!1).ci(r),$async$Pg)
case 4:w=5
return A.b(t.O2(),$async$Pg)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Pg,v)},
cva(){this.m(new C.czK(this))},
crj(){var w=this,v=w.go
if(v!=null)v.a9(0)
if(w.a.c.w)return
w.go=A.dG(B.qA,new C.czE(w))},
ct4(){var w=this,v=w.id
if(v!=null)v.a9(0)
w.id=null
if(!w.gNZ()||w.CW==null)return
w.id=A.dG(B.hf,new C.czH(w))},
cr4(){var w=this,v=w.fy
if(v!=null)v.a9(0)
w.fy=A.dG(B.j2,new C.czD(w))
w.Eu()},
Eu(){return this.ct3()},
ct3(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Eu=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aE
t=4
w=7
return A.b(A.ay(),$async$Eu)
case 7:q=e
p=A.aT(J.q(q.a,"app_config"))
if(p!=null&&p.length!==0){o=B.R.aG(0,p,null)
if(x.f.b(o)){m=A.CC(A.a1(o,x.N,x.z)).aE
i.a=m
r.a.f.aE=m}}w=10
return A.b(A.Kj(),$async$Eu)
case 10:w=e?8:9
break
case 8:w=11
return A.b(A.aNN(),$async$Eu)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aE=l
w=14
return A.b(q.ar("String","app_config",B.R.ao(k.ad(),null)),$async$Eu)
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
break}if(i.a!==r.ay)r.m(new C.czF(i,r))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Eu,v)},
b34(){B.d.b1(this.f,new C.czC())},
aaO(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$aaO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.M5(t.a.c.a),$async$aaO)
case 3:q=e
if(t.c==null){w=1
break}s=A.a([],x._)
if(J.cw(q)){B.d.v(s,q)
B.d.b1(s,new C.cze())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(A.E(["role","ai","text",r,"at",new A.R(Date.now(),0,!1).a5().ac()],x.N,x.z))}t.m(new C.czf(t,s))
t.a0q(!0)
A.bN(B.jn,new C.czg(t),x.H)
case 1:return A.h(u,v)}})
return A.i($async$aaO,v)},
aei(){var w=0,v=A.j(x.H),u=this
var $async$aei=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.amk(u.a.c.a,u.f),$async$aei)
case 2:return A.h(null,v)}})
return A.i($async$aei,v)},
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
a9O(d){var w,v=this
v.m(new C.czc(v,d))
w=v.e
w===$&&A.c()
if(w.f.length!==0)w.Ay(d,B.cp,B.kz)
else $.aU.x1$.push(new C.czd(v,d))
if(d===0)v.a0q(!0)
if(d===1)v.cmu(!0)},
a0q(d){$.aU.x1$.push(new C.czu(this,d))},
axN(){return this.a0q(!1)},
a_K(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_K=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0_(),$async$a_K)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==B.a.i(t.a.f.r))t.m(new C.czn(t))
case 1:return A.h(u,v)}})
return A.i($async$a_K,v)},
mG(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$mG=A.e(function(c8,c9){if(c8===1){s.push(c9)
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
return A.b(C.aop(a9.a,b0),$async$mG)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return A.b(q.tp(),$async$mG)
case 10:q.m(new C.czv(q))
w=1
break
case 8:w=11
return A.b(q.tp(),$async$mG)
case 11:if(q.c!=null&&q.ch===3)q.XI(3)
case 6:case 4:q.m(new C.czw(q,c5))
C.T3(q.a.c.a,"user",c5)
q.axN()
t=13
a8={}
w=16
return A.b(q.a_K(),$async$mG)
case 16:b1=B.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return A.b(A.a0_(),$async$mG)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.m(new C.czx(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.bzy("",null)
q.m(new C.czy(q,p))
C.T3(q.a.c.a,"ai",p)
q.axN()
r=[1]
w=14
break}o=A.mU(a9)
a9=q.a
n=""
m=C.hec(a9.d)
w=C.he5(c5)?20:21
break
case 20:w=22
return A.b(C.c6W(q.a.c.a),$async$mG)
case 22:q.db=c9
w=23
return A.b(q.wS(!0),$async$mG)
case 23:case 21:w=24
return A.b(A.a6R(q.a.c.a,m),$async$mG)
case 24:l=c9
k=C.hvV(l)
a9=k
b2=Date.now()
b3=new A.R(b2,0,!1).bQ()
b2=B.a.aT(B.o.u(A.bG(b3)),2,"0")
b4=B.a.aT(B.o.u(A.bQ(b3)),2,"0")
b5=B.a.aT(B.o.u(A.dh(b3)),2,"0")
b6=B.a.aT(B.o.u(A.fX(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+A.bx(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return A.b(C.Tg(q.a.c.a),$async$mG)
case 25:i=c9
h=C.fZt(i,25)
w=26
return A.b(C.a6d(q.a.c.a),$async$mG)
case 26:g=c9
f=C.h06(g)
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
return A.b(C.afI(a9,q.a.c.a,c5),$async$mG)
case 27:a0=c9
a1=""
if(C.he5(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:B.a.i(b2).length!==0)===!0){b2.toString
b8=B.a.i(b2)}else{a9=a9.c
b8=B.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=A.t(d)
b4=A.t(j)
b5=q.a.c.w?"\n"+C.hS8(m)+"\n":""
b6=J.ac(n)!==0?"\n"+A.t(n)+"\n":""
b9=J.ac(a0)!==0?"\n"+A.t(a0)+"\n":""
c0=A.t(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hqh(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+A.t(c5)
w=28
return A.b(A.qB(o,a2,B.hj,null),$async$mG)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.bzy(a8.a,a3.a)
a4=c2
a5=A.hds(a4)
c3=a5.a
a8.b=c3
if(B.d.gal(c3)){a9=A.B(C.hUR(c5),x.an)
a6=a9
J.fZ(a6,C.hUS(c5))
J.fZ(a6,C.hUT(c5))
J.fZ(a6,A.hcV(c5))
J.fZ(a6,C.hUW(c5,q.a.c.w))
a8.b=a6}c3=C.hU4(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return A.b(A.afY(c3,a6,m,q.a.c.a),$async$mG)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.m(new C.czz(a8,q,a7))
C.T3(q.a.c.a,"ai",a7)
if(J.cw(a8.b)&&q.c!=null)q.J6(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.m(new C.czA(q))
C.T3(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.m(new C.czB(q))
q.axN()
q.aei()
if(!q.a.c.w)q.tp()
w=r.pop()
break
case 15:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$mG,v)},
cdu(d){var w=A.V(x.N,x.z)
w.n(0,"type",d.a)
w.v(0,d.b)
return w},
cdv(d){var w,v,u,t,s,r,q,p=J.q(d,"phoneActions")
if(!x.j.b(p))return B.i9
w=A.a([],x.Z)
for(v=J.aW(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gU(v)
if(u.b(r)){q=A.ca2(A.a1(r,t,s))
if(q!=null)w.push(q)}}return w},
J6(d){return this.cl1(d)},
cl1(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$J6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J.aW(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gU(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return A.b(C.afT(p,o,new C.czs(t,p)),$async$J6)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return A.b(A.G_(p,null,o,!1,!0,t.a.c.a),$async$J6)
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
return A.b(A.G_(p,l.f,o,k,n,j),$async$J6)
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
return A.b(C.aWJ(p,A.a([new C.r5("out_"+1000*o,new A.R(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$J6)
case 14:t.ap0()
case 13:p=t.c.I(r).f
p.R(new A.b1(new A.x(m,null,null,null,null,null,null,null,null,null,null,null),B.d2,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null))
w=3
break
case 4:case 1:return A.h(u,v)}})
return A.i($async$J6,v)},
QZ(d){return this.cty(d)},
cty(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$QZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return A.b(C.afT(d,n,new C.czJ(t)),$async$QZ)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return A.b(A.G_(d,null,n,!1,!0,t.a.c.a),$async$QZ)
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
return A.b(A.G_(d,q.f,r,p,n,o),$async$QZ)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.I(x.q).f.R(A.b2(null,null,null,B.d2,null,B.q,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QZ,v)},
cmu(d){$.aU.x1$.push(new C.czt(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.M(d).ax.a===B.H,j=k?B.da:B.Ac,i=m.d
i===$&&A.c()
w=x.O
w=k?A.a([B.adM,D.b9j],w):A.a([B.aI,B.wz],w)
v=A.m(22)
u=A.a([new A.ad(0,B.G,A.Z(71,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),B.cx,16)],x.V)
t=m.a.c.w?m.gc9a():l
s=A.Z(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
r=A.I(B.c_,B.r,1.5)
t=A.aE(l,A.p(l,C.fPu(m.a.f.Q,48),B.f,l,l,new A.o(s,l,r,l,l,l,B.a6),l,48,l,l,l,l,l,48),B.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,B.a9)
r=A.d("NGMY Helper",l,1,B.a2,l,l,l,B.dF,l,l,l)
s=A.p(l,l,B.f,l,l,D.aXt,l,8,l,l,l,l,l,8)
if(m.gay9()&&m.d===0)q=m.gNZ()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=A.p(l,A.A(A.a([t,B.bf,A.D(A.v(A.a([r,B.bz,A.A(A.a([s,B.bo,A.D(A.d(q,l,1,B.a2,l,l,l,A.l(l,l,A.Z(B.k.V(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,B.cs,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,B.mi,l,l,l,new C.czP(d),l,l,l,l,l,l)],p),B.m,l,B.e,B.j,0,l,l),B.f,l,l,new A.o(l,l,l,v,u,new A.a7(B.ax,B.aC,B.x,w,l,l),B.n),l,l,l,G.afw,D.bnQ,l,l,l)
v=k?D.rK:B.c
u=A.m(14)
t=A.I(k?B.bF:B.e2,B.r,1)
u=A.p(l,A.A(A.a([m.bBO(),m.ctg(1,B.lD,"Music")],p),B.m,l,B.e,B.j,0,l,l),B.f,l,l,new A.o(v,l,t,u,l,l,B.n),l,l,l,l,B.em,l,l,l)
t=m.e
t===$&&A.c()
if(m.gay9()){v=A.a([],p)
if(m.gNZ()){s=A.Z(38,B.d2.l()>>>16&255,B.d2.l()>>>8&255,B.d2.l()&255)
r=A.m(12)
q=A.I(A.Z(115,B.d2.l()>>>16&255,B.d2.l()>>>8&255,B.d2.l()&255),B.r,1)
v.push(new A.C(B.Lg,A.p(l,A.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hud(m.gaSP())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.eZV,B.L,l,l),B.f,l,l,new A.o(s,l,q,r,l,l,B.n),l,l,l,l,B.ev,l,l,1/0),l))}if(m.cy&&!m.gNZ()){s=A.Z(31,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
r=A.m(12)
q=A.m(12)
o=A.W(B.pr,k?B.iM:B.h_,l,l,l,16)
v.push(new A.C(B.Lg,A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,new A.C(B.ev,A.A(A.a([o,B.bo,A.d("Back to NGMY Helper AI",l,l,l,l,l,l,A.l(l,l,k?B.iM:B.h_,l,l,l,l,l,l,l,l,12,l,l,B.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),B.m,l,B.b9,B.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gckw(),l,l,l,l,l,l,l),B.f,s,0,l,l,l,l,l,B.af),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcv9():l
v.push(A.D(new C.aos(s,q,new C.czQ(),r,o,l),1))
v=A.v(v,B.m,l,B.e,B.j,0,B.p)}else v=m.bBP(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.h1_(r)
t=A.a([w,B.ac,new A.C(B.hH,u,l),B.P,A.D(A.h2_(A.a([v,new C.aov(q,o,n,new C.czR(m,d),s,l)],p),B.q,t,B.y,new C.czS(m),l),1)],p)
if(m.d===0&&!m.gay9()){w=A.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a1k:D.a0H
w.push(new A.a6(l,36,A.hD(l,new C.czT(m),v.length,l,l,B.aQ,new C.czU(),!1),l))}if(m.ax&&m.f.length<=1)w.push(B.P)
v=m.r
u=A.l(l,l,k?B.c:B.bh,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=A.l(l,l,k?B.ay:B.dy,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?B.w:B.c
r=A.Z(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=A.m(22)
o=A.m(22)
n=k?B.b6:B.f7
u=A.D(A.aL(l,B.T,!1,l,!0,B.q,l,A.aM(),v,l,l,l,l,l,2,A.bo(l,new A.b4(4,q,B.Y),l,B.Au,l,l,l,l,!0,new A.b4(4,o,new A.az(n,1,B.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.y,!0,l,!0,l,!1,l,B.ai,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.czV(m),l,!1,l,l,!1,l,!0,l,B.a8,l,l,l,l,l,l,l,l,l,l,l,u,!0,B.a5,l,B.am,l,B.aMX,l,l),1)
s=m.at
r=s?l:m.gcnu()
w.push(A.A(A.a([u,new A.I4(v,B.aI,l),B.bo,A.aF(!1,B.a1,!0,l,A.aK(!1,l,!0,new A.a6(44,44,s?D.e_Q:P.al0,l),B.cL,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),B.f,B.aI,0,l,l,B.cL,l,l,B.af)],p),B.dC,l,B.e,B.j,0,l,l))
w=A.v(w,B.m,l,B.e,B.Q,0,B.p)
v=k?B.kY:B.c
t.push(A.tH(B.rw,A.p(l,new A.C(B.EA,w,l),B.f,l,l,new A.o(v,l,A.I(k?A.Z(41,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Z(18,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.r,1),B.rw,l,l,B.n),l,l,l,l,l,l,l,l),14,!1))}return new A.Vc(i,new C.czW(m),A.cb(l,j,A.bp(!0,A.v(t,B.m,l,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),l,!1,!1,l,l),l)},
bBO(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===0
p=this.c
p.toString
v=A.M(p).ax.a===B.H
if(w)p=A.Z(B.k.V(255*(v?0.25:0.12)),B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
else p=B.K
u=A.m(11)
t=w?A.I(A.Z(B.k.V(127.5),B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),B.r,1):q
s=A.W(B.tq,w?B.aI:B.cU,q,q,q,17)
if(w)r=v?B.c:B.aA
else r=B.cU
return A.D(A.aE(q,A.df(q,A.A(A.a([s,B.bo,A.d("Chat",q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.b9,B.j,0,q,q),q,q,B.bb,new A.o(p,q,t,u,q,q,B.n),B.eD,q,q,q,B.uO,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cza(this),q,q,q,q,q,q,!1,B.a9),1)},
ctg(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===d
p=this.c
p.toString
v=A.M(p).ax.a===B.H
if(w)p=A.Z(B.k.V(255*(v?0.25:0.12)),B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
else p=B.K
u=A.m(11)
t=w?A.I(A.Z(B.k.V(127.5),B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),B.r,1):q
s=A.W(e,w?B.aI:B.cU,q,q,q,17)
if(w)r=v?B.c:B.aA
else r=B.cU
r=A.a([s,B.bo,A.d(f,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return A.D(A.aE(q,A.df(q,A.A(r,B.m,q,B.b9,B.j,0,q,q),q,q,B.bb,new A.o(p,q,t,u,q,q,B.n),B.eD,q,q,q,B.uO,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.czI(this,d),q,q,q,q,q,q,!1,B.a9),1)},
bBP(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.beq:A.Z(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
w=A.m(18)
v=A.I(d?B.dq:B.aL,B.r,1)
u=q===0?1:q
return A.p(s,A.k_(!0,s,t.ok,new C.czb(t,e,d),u,s,B.bY,s,s,!1,!1),B.f,s,s,new A.o(r,s,v,w,s,s,B.n),s,s,s,B.hH,s,s,s,s)},
aMw(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a8(d),m=J.y(n.h(d,"role"),"user"),l=m?B.i9:this.cdv(d),k=m?B.lJ:B.e,j=x.p,i=A.a([],j),h=!m
if(h)B.d.v(i,A.a([new A.a6(28,28,C.fPu(this.a.f.Q,28),o),B.ab],j))
w=m?B.dC:B.F
j=A.a([],j)
if(h)j.push(D.e05)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=B.aI
else u=e?B.W6:B.aP
t=m?16:4
s=m?4:16
if(m)r=o
else r=A.I(e?B.bF:B.aL,B.r,1)
q=A.a([new A.ad(0,B.G,A.Z(10,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dz,6)],x.V)
if(f)n=A.d("typing\u2026",o,o,o,o,o,o,A.l(o,o,e?B.ay:B.dy,o,o,o,o,o,o,o,o,12,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=B.c
else p=e?B.ad:B.bn
p=A.d(n,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(A.fLB(m,A.p(o,n,B.f,o,o,new A.o(u,o,r,new A.bs(B.kQ,B.kQ,new A.aV(t,t),new A.aV(s,s)),q,o,B.n),o,o,o,o,Aa.Xh,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(A.hdx(l,e,this.gctx()))
i.push(new A.dm(1,B.ci,A.v(j,w,o,B.e,B.j,0,B.p),o))
if(m)i.push(B.d8)
return new A.C(B.db,A.A(i,B.dC,o,k,B.j,0,o,o),o)},
bBN(d,e){return this.aMw(d,e,!1)}}
C.aIR.prototype={
a_(){this.a1()
$.ye().aM(0,this.gDJ())},
q(){$.ye().a3(0,this.gDJ())
this.a2()}}
C.aIS.prototype={
a_(){this.a1()
$.ye().aM(0,this.gDJ())},
q(){$.ye().a3(0,this.gDJ())
this.a2()}}
C.aIT.prototype={
a_(){this.a1()
$.ye().aM(0,this.gDJ())},
q(){$.ye().a3(0,this.gDJ())
this.a2()}}
C.aJP.prototype={
a_(){this.a1()
$.ye().aM(0,this.gDJ())},
q(){$.ye().a3(0,this.gDJ())
this.a2()}}
C.V1.prototype={
a4(){return"NgmySnapshotResolveOutcome."+this.b}}
C.am4.prototype={
T(){return new C.aAK()}}
C.aAK.prototype={
a_(){var w,v=this
v.a1()
w=v.a
v.d=w.d
v.e=A.bl(w.e,!0,x.o)
v.f=v.a.f},
kF(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
zM(d,e){return this.cyv(d,e)},
cyv(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$zM=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dsy(q,e))
t=3
w=6
return A.b(d.$0(),$async$zM)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.m(new C.dsz(q))
w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$zM,v)},
Aa(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Aa=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=t.d
q===$&&A.c()
w=3
return A.b(A.uo(r,q),$async$Aa)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dsp(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Aa,v)},
a8m(){var w=0,v=A.j(x.gE),u,t=this,s,r,q,p
var $async$a8m=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Aa(),$async$a8m)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&A.c()
q=t.e
q===$&&A.c()
p=t.f
p===$&&A.c()
u=A.MS(s,A.Ja(A.bWo(r,q,s,p).eJ(),null,"  "))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a8m,v)},
Wr(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Wr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oR(s,t.a.c,!1),$async$Wr)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zM(new C.dsn(t),"Preparing download\u2026"),$async$Wr)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wr,v)},
XT(){var w=0,v=A.j(x.H),u,t=this,s
var $async$XT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oR(s,t.a.c,!1),$async$XT)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zM(new C.dsx(t),"Creating QR code\u2026"),$async$XT)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XT,v)},
XS(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hN3(r),$async$XS)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.zM(new C.dsm(t,s),"Looking up code\u2026"),$async$XS)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XS,v)},
abD(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$abD=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wK.c3().Lf(B.Pz,B.tk,!0),$async$abD)
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
case 6:u=A.FW()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$abD,v)},
zq(d,e,f){return this.bE7(d,e,f)},
aNK(d,e){return this.zq(d,!1,e)},
bE6(d){return this.zq(d,!1,!1)},
bE7(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zq=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Aa(),$async$zq)
case 3:if(t.c==null){w=1
break}if(!C.bWt(d,t.a.c,null)){t.kF(C.bWu(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&A.c()
s=!C.hpZ(d,s)}if(s){t.kF(y.B)
w=1
break}r=d.as
q=J.ck(r)
s=t.c
s.toString
w=4
return A.b(C.hNg(s,q,t.a.c,d),$async$zq)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=A.lB(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,B.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&A.c()
r=o}w=5
return A.b(A.r9(s,p,r,!1,null,null,d.ax),$async$zq)
case 5:if(t.c==null){w=1
break}t.m(new C.dsl(t,p,r,d))
t.kF("Restored your local Growth Income. Go back to see it updated.")
case 1:return A.h(u,v)}})
return A.i($async$zq,v)},
abC(){var w=0,v=A.j(x.H),u=this
var $async$abC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.zM(new C.dso(u),"Reading file\u2026"),$async$abC)
case 2:return A.h(null,v)}})
return A.i($async$abC,v)},
VL(d){return this.bFo(d)},
bFo(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$VL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&A.c()
s=new A.d1("local_qr_dep_"+1000*r,q.a,d,B.fq,B.fb,"Admin deposit ($"+A.dz(d)+")",null,null,B.ck,new A.R(Date.now(),0,!1))
C.c8Y(t.d,s)
q=t.e
q===$&&A.c()
r=A.B(q,x.o)
r.push(s)
w=3
return A.b(A.r9(t.a.c,t.d,r,!0,null,null,null),$async$VL)
case 3:w=4
return A.b(t.Aa(),$async$VL)
case 4:if(t.c==null){w=1
break}t.kF("Deposited $"+A.dz(d)+" to your local wallet.")
case 1:return A.h(u,v)}})
return A.i($async$VL,v)},
b2u(d){var w=null
return A.c9(w,w,!0,w,new C.dsv(),d,w,!0,!0,x.N)},
UT(d){return this.bxy(d)},
bxy(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$UT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return A.b(t.VL(d.b),$async$UT)
case 5:w=1
break
case 4:s=d.c
t.kF(s==null?"Could not apply deposit.":s)
case 1:return A.h(u,v)}})
return A.i($async$UT,v)},
E3(d){return this.cib(d)},
cib(d){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o,n
var $async$E3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Aa(),$async$E3)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return A.b(C.aZA(d,t.a.c),$async$E3)
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
return A.b(t.b2u(r),$async$E3)
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
return A.b(C.c8R(d,o,n.a,r,p),$async$E3)
case 7:w=6
return A.b(t.UT(f),$async$E3)
case 6:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$E3,v)},
E4(d){return this.cic(d)},
cic(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$E4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Aa(),$async$E4)
case 3:if(t.c==null){w=1
break}w=4
return A.b(C.c8Q(d,t.a.c),$async$E4)
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
return A.b(t.b2u(r),$async$E4)
case 5:q=f
if(q==null||B.a.i(q).length===0){w=1
break}r=t.a.c
p=B.a.i(q)
o=t.e
o===$&&A.c()
n=t.d
n===$&&A.c()
w=7
return A.b(C.UC(o,n.a,d,r,p),$async$E4)
case 7:w=6
return A.b(t.UT(f),$async$E4)
case 6:case 1:return A.h(u,v)}})
return A.i($async$E4,v)},
Og(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Og=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Ck()){t.kF("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).ci(A.em(new C.dsq(),!0,null,x.N)),$async$Og)
case 3:r=e
if(r==null||B.a.i(r).length===0){w=1
break}w=B.a.a0(B.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return A.b(t.zM(new C.dsr(t,r),"Applying deposit\u2026"),$async$Og)
case 6:w=1
break
case 5:w=7
return A.b(t.zM(new C.dss(t,r),"Loading\u2026"),$async$Og)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Og,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=n?B.iZ:B.pd,l=n?B.c:B.M,k=n?B.aR:B.ak,j=n?B.bF:B.w.j(0.06),i=x.p
j=A.A(A.a([A.aK(!1,o,!0,A.p(B.A,A.W(B.eA,l,o,o,o,16),B.f,o,o,new A.o(j,o,o,o,o,o,B.a6),o,38,o,o,o,o,o,38),B.cL,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dsA(d),o,o,o,o,o,o,o)],i),B.m,o,B.e,B.j,0,o,o)
w=A.d("Backup & Restore",o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,B.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=A.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,B.cs,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=A.D(new C.a_l(D.bz0,"Download",E.a1A,u?o:p.gbKu(),o),1)
t=A.A(A.a([t,B.ew,A.D(new C.a_l(B.ja,"Show QR",D.da2,u?o:p.gc_v(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r
s=A.D(new C.a_l(D.bz1,"Upload",B.a11,u?o:p.gc_t(),o),1)
s=A.A(A.a([s,B.ew,A.D(new C.a_l(B.iO,"Scan QR",D.cN2,u?o:p.gc_u(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r?o:p.gc_s()
r=n?B.c.j(0.06):B.aU.j(0.08)
q=A.m(16)
q=A.a([A.cB(A.a([j,B.az,w,B.P,v,B.kn,t,B.az,s,B.az,new C.bpL(B.qO,"Enter Code",B.a0n,u,o),B.kn,A.p(o,A.A(A.a([A.W(B.h6,B.aU,o,o,o,18),B.aw,A.D(A.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.F,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(r,o,o,q,o,o,B.n),o,o,o,o,B.j5,o,o,o)],i),o,A9.Lu,o,o,B.ah,!1)],i)
if(p.r){j=n?B.i4:B.c
w=p.w
if(w==null)w="Working\u2026"
q.push(A.ao(0,A.aF(!1,B.a1,!0,o,new A.C(B.Ay,A.A(A.a([I.aLV,B.bf,A.D(A.d(w,o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.m,o,B.e,B.j,0,o,o),o),B.f,j,8,o,o,o,o,o,B.af),o,o,0,0,o,o))}return A.cb(o,m,A.bp(!1,new A.an(B.W,o,B.aa,B.q,q,o),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)}}
C.a_l.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ad(0,B.G,B.d.gam(s).j(0.35),B.dn,16)],x.V),p=B.c.j(0.22)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(v,A.v(A.a([A.p(v,A.W(w.c,B.c,v,v,v,30),B.f,v,v,new A.o(p,v,v,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.ac,A.d(w.d,v,v,v,v,v,v,B.rm,v,v,v)],x.p),B.m,v,B.b9,B.j,0,B.p),B.f,v,v,new A.o(v,v,v,r,q,new A.a7(B.ax,B.aC,B.x,s,v,v),B.n),v,140,v,v,B.bY,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.af)}}
C.bpL.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ad(0,B.G,B.d.gam(s).j(0.35),B.dn,16)],x.V),p=B.c.j(0.22)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(v,A.A(A.a([A.p(v,A.W(w.c,B.c,v,v,v,24),B.f,v,v,new A.o(p,v,v,v,v,v,B.a6),v,44,v,v,v,v,v,44),B.ew,A.d(w.d,v,v,v,v,v,v,B.rm,v,v,v)],x.p),B.m,v,B.b9,B.j,0,v,v),B.f,v,v,new A.o(v,v,v,r,q,new A.a7(B.ax,B.aC,B.x,s,v,v),B.n),v,v,v,v,D.bpV,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.af)}}
C.Z_.prototype={
T(){return new C.bgZ()}}
C.bgZ.prototype={
gaus(){var w=this.e
return w===$?this.e=this.a.d:w},
a_(){var w=this
w.a1()
w.PV()
w.f=A.dG(B.ny,new C.dsE(w))},
q(){var w=this.f
if(w!=null)w.a9(0)
this.a2()},
PV(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$PV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return A.b(A.uo(q.e,q.f),$async$PV)
case 3:q=e.a
s=A.bWo(q[3],q[1],t.a.e,q[4])
w=4
return A.b(A.MS(t.a.e,A.Ja(s.eJ(),null,"  ")),$async$PV)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.m(new C.dsB(t,r))
case 1:return A.h(u,v)}})
return A.i($async$PV,v)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=u?B.iZ:B.pd,s=u?B.i4:B.c,r=u?B.c:B.bh,q=A.eC(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,B.aOR,v,v,v,1,v,!0),p=A.m(24),o=A.I(B.aU.j(0.35),B.r,1),n=w.d,m=A.py(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,B.c),l=A.d("Code: "+w.gaus(),v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=A.m(20),j=B.aU.j(0.12),i=A.m(20),h=x.p
i=A.aK(!1,k,!0,A.p(v,A.A(A.a([A.W(B.fJ,B.aU,v,v,v,14),B.bo,A.d("Copy code",v,v,v,v,v,v,A.l(v,v,B.aU,v,v,v,v,v,v,v,v,12,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),B.m,v,B.e,B.Q,0,v,v),B.f,v,v,new A.o(j,v,v,i,v,v,B.n),v,v,v,v,B.m9,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dsC(w,d),v,v,v,v,v,v,v)
return A.cb(q,t,new A.C(B.a8,A.v(A.a([A.D(A.p(v,A.v(A.a([B.P,m,B.bu,l,B.P,i,B.az,A.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,A.l(v,v,u?B.aR:B.ak,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v)],h),B.m,v,B.b9,B.j,0,B.p),B.f,v,v,new A.o(s,v,o,p,v,v,B.n),v,v,v,v,B.a8,v,v,1/0),1),B.aO,new A.a6(1/0,v,A.bJ(B.z7,new C.dsD(d),A.bk(B.aU,v,v,v,v,B.fL,v,v,v,v,v,v)),v)],h),B.m,v,B.e,B.j,0,B.p),v),v,!1,!1,v,v)}}
C.Z0.prototype={
T(){return new C.bh_(A.yK(B.wV,B.nj,B.tG))}}
C.bh_.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.cb(A.eC(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fiS,w,w,w,1,w,!0),B.w,A.yJ(this.d,B.bQ,new C.dsF(this,d)),w,!1,!1,w,w)}}
C.ada.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.M(a0).ax.a===B.H,k=l?B.i4:B.c,j=l?B.c:B.M,i=l?B.aR:B.ak,h=l?B.b6:B.e2,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=A.m(26)
w=A.I(B.aU.j(0.35),B.r,1)
v=A.a([new A.ad(0,B.G,B.aU.j(0.16),B.jV,36)],x.V)
u=A.p(m,D.bF3,B.f,m,m,new A.o(m,m,m,A.m(18),B.a1z,D.bP_,B.n),m,58,m,m,m,m,m,58)
t=A.d("Restore local backup?",m,m,m,m,m,m,A.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,B.u,m,m,!0,m,-0.3,m,m,m,m,m,m),B.L,m,m)
s=A.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,A.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),B.L,m,m)
r=l?B.iZ:B.pd
q=A.m(18)
p=A.I(B.aU.j(0.22),B.r,1)
o=x.p
g=A.a([new C.P2("Account",B.a.i(this.d),i,j,m),B.S,new C.P2("Balance","$"+A.dz(g.d),i,j,m)],o)
if(d!=null&&B.a.i(d).length!==0)B.d.v(g,A.a([B.S,new C.P2("Investment",d,i,j,m)],o))
g.push(B.S)
g.push(new C.P2("Saved on",""+A.bG(f)+"/"+A.bQ(f)+"/"+A.bx(f),i,j,m))
g.push(B.S)
g.push(new C.P2("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=A.p(m,A.v(g,B.F,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bY,m,m,1/0)
r=B.aJ.j(l?0.14:0.12)
q=A.m(14)
p=A.I(B.aJ.j(0.35),B.r,1)
n=A.W(B.xF,l?B.aM:B.dj,m,m,m,16)
return A.eD(m,B.K,new A.cU(B.Ug,A.bX(new A.C(B.xc,A.v(A.a([u,B.aO,t,B.P,s,B.bu,g,B.az,A.p(m,A.A(A.a([n,B.ab,A.D(A.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,A.l(m,m,l?B.bJ:B.ip,m,m,m,m,m,m,m,m,11.5,m,m,B.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),B.F,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.ev,m,m,1/0),B.d6,A.A(A.a([A.D(A.dW(B.nc,new C.eO6(a0),A.dd(m,m,m,m,m,m,m,m,m,j,m,m,B.cf,m,new A.b7(A.m(14),B.Y),new A.az(h,1,B.r,-1),m,m,m,m)),1),B.aw,A.D(A.bJ(D.f2v,new C.eO7(a0),A.bk(B.aU,m,m,m,m,m,B.cf,m,new A.b7(A.m(14),B.Y),m,m,m)),2)],o),B.m,m,B.e,B.j,0,m,m)],o),B.m,m,B.e,B.Q,0,B.p),m),new A.o(k,m,w,e,v,m,B.n),B.bd),m),m,m,m,B.ez,B.cZ,m,m,m)}}
C.P2.prototype={
B(d){var w=this,v=null
return A.A(A.a([new A.a6(92,v,A.d(w.c,v,v,v,v,v,v,A.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),A.D(A.d(w.d,v,v,v,v,v,v,A.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,B.I,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.F,v,B.e,B.j,0,v,v)}}
C.Y7.prototype={
T(){return new C.ay0(new A.ar(B.as,$.aw()),A.ke(!0,null,!0,!0,null,null,!1))}}
C.ay0.prototype={
a_(){this.a1()
$.aU.x1$.push(new C.d1E(this))},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.e.q()
this.a2()},
c_x(){var w,v=this.c
v.toString
w=B.a.i(this.d.a.a)
A.a5(v,!1).N(w)
return null},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=u?B.i4:B.c,s=u?B.c:B.M,r=u?B.aR:B.ak,q=u?B.iZ:B.pd,p=u?B.b6:B.e2,o=A.m(24),n=A.I(B.aU.j(0.35),B.r,1),m=A.a([new A.ad(0,B.G,B.aU.j(0.18),B.fK,32)],x.V),l=A.p(v,A8.alJ,B.f,v,v,new A.o(v,v,v,A.m(18),B.a1z,D.bRH,B.n),v,56,v,v,v,v,v,56),k=A.d("Enter restore code",v,v,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,B.u,v,v,!0,v,-0.3,v,v,v,v,v,v),B.L,v,v),j=A.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),B.L,v,v),i=A.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,B.I,v,v,!0,v,8,v,v,v,v,v,v),h=A.a([new A.u0(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bpf(new C.d1B())],x.G),g=A.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,B.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return A.eD(v,B.K,new A.cU(A1.Jq,A.bX(new A.C(B.xc,A.v(A.a([l,B.aO,k,B.P,j,B.e0,A.aL(!1,B.T,!1,v,!0,B.q,v,A.aM(),w.d,v,v,v,v,v,2,A.bo(v,v,v,B.EG,v,v,"",v,!0,new A.b4(4,A.m(16),new A.az(p,1,B.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new A.b4(4,A.m(16),D.aVj),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!1,v,!1,w.e,B.ai,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.d1C(w),v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,i,!0,B.L,v,B.lP,v,v,v,v),B.e0,A.A(A.a([A.D(A.dW(B.nc,new C.d1D(d),A.dd(v,v,v,v,v,v,v,v,v,s,v,v,B.cf,v,new A.b7(A.m(14),B.Y),new A.az(p,1,B.r,-1),v,v,v,v)),1),B.aw,A.D(A.bJ(D.f60,w.gc_w(),A.bk(B.aU,v,v,v,v,v,B.cf,v,new A.b7(A.m(14),B.Y),v,v,v)),2)],f),B.m,v,B.e,B.j,0,v,v)],f),B.m,v,B.e,B.Q,0,B.p),v),new A.o(t,v,n,o,m,v,B.n),B.bd),v),v,v,v,B.Lw,B.cZ,v,v,v)}}
C.amz.prototype={
T(){return new C.bh5(B.cI)},
hp(d){return this.x.$1(d)},
bp(){return this.y.$0()}}
C.bh5.prototype={
a_(){var w,v=this
v.a1()
w=v.a
w.toString
$.t4=$.t4+1
v.r=B.o.O(B.o.D(C.frW(w.e,w.d.y2),1,600))
w=v.a
if(!J.li(w.d.y2,w.e))v.r=C.hSB(v.a.e)
v.w=A.dG(B.hf,new C.dz_(v))},
q(){var w=this.w
if(w!=null)w.a9(0)
this.ccl()
C.aYn()
this.a2()},
ccl(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:B.k.D(r.e/w,0,1)
if(v<=0)return
u=A.nL(B.k.aa(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=B.o.u(1000*Date.now())
s=r.a
w.hp(new A.d1(t,s.c.a,u,B.fA,B.fb,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,B.ck,new A.R(Date.now(),0,!1)))
r.a.bp()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.ul(u,q,"Left early \xb7 +$"+B.k.aa(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
Je(d,e){return this.co6(d,e)},
b28(d){return this.Je(!1,d)},
co5(d){return this.Je(d,"")},
co6(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Je=A.e(function(f,g){if(f===1)return A.f(g,v)
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
C.ul(s,null,o?"No progress":e,q,p,s,null,!1)
s=t.c
if(s==null){w=1
break}w=5
return A.b(C.bBn(s,C.bB0(),C.fSZ(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$Je)
case 5:w=1
break
case 4:n=A.nL(B.k.aa(t.a.w*1.46*r,2))
m=r>=1
t.m(new C.dyR(t,n,r))
s=B.o.u(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new A.d1(s,p,n,B.fA,B.fb,q,null,null,B.ck,new A.R(Date.now(),0,!1))
A.afS(l,!0)
t.a.hp(l)
t.a.bp()
if(m)k="+$"+B.k.aa(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+B.k.aa(n,2)+" ("+B.k.V(r*100)+"% of the prize)"}q=t.a
C.ul(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return A.b(C.bBn(s,C.bB0(),C.fSZ(),""+t.e+"/"+t.f,k,q,!0),$async$Je)
case 6:w=7
return A.b(C.afK(t.a.f,k),$async$Je)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Je,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.r
m===$&&A.c()
w=B.o.an(m,60)
v=B.a.aT(B.o.u(B.o.F(m,60)),2,"0")
u=A.aH(n,n,n,n,B.alM,n,n,n,new C.dyU(d),n,n,n,n,n,n)
t=o.a
s=x.p
t=A.D(A.v(A.a([A.d(t.f,n,1,B.a2,n,n,n,B.kR,n,n,n),A.d("Win $"+B.k.aa(t.w*1.46,2)+" \xb7 stake $"+B.k.aa(o.a.w,2),n,n,n,n,n,n,D.eT0,n,n,n)],s),B.F,n,B.e,B.j,0,B.p),1)
r=o.a.c.a
m=m<=10?B.aD:B.c.j(0.1)
q=A.m(99)
q=A.A(A.a([u,t,new C.ao3(r,new C.dyV(o),n),B.bo,A.df(n,A.A(A.a([D.bJu,B.d8,A.d(""+w+":"+v,n,n,n,n,n,n,B.kp,n,n,n)],s),B.m,n,B.e,B.j,0,n,n),n,n,B.bb,new A.o(m,n,n,q,n,n,B.n),B.a1,n,n,n,B.td,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
m=o.a
v=m.w
w=v*1.46
r=o.e/o.f
m=A.A(A.a([A.D(A.bv(A.m(99),A.md(B.bF,n,n,9,n,r,new A.my(B.d.gL(m.r),x.dw)),B.aq),1),B.aw,A.d(""+o.e+"/"+o.f,n,n,n,n,n,n,D.f0K,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
t=A.m(22)
u=A.a([B.d.gL(o.a.r).j(0.35),G.adF],x.O)
p=o.x
return C.aNO(n,D.bfj,A.bp(!0,A.v(A.a([new A.C(D.bs_,q,n),new C.Mw(w*r,w,v,n),new A.C(G.ag_,m,n),A.D(new A.C(B.X4,A.bv(t,A.bX(A.e2(V.hc6(o.a.e,new V.yR(new C.dyW(o),new C.dyX(o),new C.dyY(o),o.d)),p,n),new A.o(n,n,n,n,n,new A.a7(B.b0,B.b5,B.x,u,n,n),B.n),B.bd),B.aq),n),1)],s),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0))}}
C.a5r.prototype={
B(d){var w=null,v=A.m(26),u=A.I(B.aJ.j(0.5),B.r,1),t=A.a([new A.ad(0,B.G,B.aJ.j(0.22),B.J,26)],x.V)
return A.eD(w,B.K,A.p(w,A.v(A.a([A.p(w,D.bDi,B.f,w,w,new A.o(B.aJ.j(0.16),w,A.I(B.aJ,B.r,2),w,w,w,B.a6),w,68,w,w,w,w,w,68),B.az,D.ff4,B.P,A.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.P,A.d("The count starts again from zero next month.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.aO,new A.a6(1/0,w,A.bJ(D.f3c,new C.c3B(d),A.bk(B.aJ,w,w,w,B.w,B.fL,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,u,v,t,D.bPC,B.n),w,w,w,w,D.bql,w,w,w),w,w,w,B.agv,B.cZ,w,w,w)}}
C.am3.prototype={
T(){return new C.bgX(null,null)},
gY(d){return this.e}}
C.bgX.prototype={
a_(){var w,v=this,u=null
v.a1()
w=v.d=A.bj(u,B.Al,u,1,u,v)
w.d7()
w.dR$.J(0,new C.dsa(v))
w=A.bj(u,B.m4,u,1,u,v)
w.cG(0)
v.e=w
w=A.bj(u,B.KY,u,1,u,v)
w.cG(0)
v.f=w
w.d7()
w.dR$.J(0,new C.dsb(v))
if(v.a.c){v.d.cG(0)
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
w.cG(0)
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
w.bro()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.PA[B.o.F(a9.r,5)]:b4
w=!b3&&b4==null?D.PA[B.o.F(a9.w,5)]:b0
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
b3=A.a([A.e9(B.A,A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,b0,A.a([new A.ad(6+e,B.G,B.aE.j(0.4+q*0.3),B.J,32+q*22),new A.ad(3,B.G,B.ba.j(0.2+p*0.25),B.J,40+p*16)],d),b0,B.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=A.p(b0,b0,B.f,b0,b0,new A.o(A.aq(B.by,B.aM,B.o.F(a3,3)/2).j(a2),b0,b0,b0,A.a([new A.ad(0,B.G,B.aE.j(0.7),B.J,e)],d),b0,B.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(A.dT(new A.iC(A.vU(a4+a3),b0,B.A,!0,b0,a8,b0),new A.u(a6*a0+a5*b2*0.04,a7*a0)))}B.d.v(f,b3)}b3=b2*0.06
e=x.V
f.push(A.dT(A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,A.m(b2*0.5),A.a([new A.ad(b2*0.02,B.G,B.w.j(0.4+b1),B.J,b2*0.14)],e),b0,B.n),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new A.u(0,n+b3)))
b1=A.dl()
d=b1.a
d.$flags&2&&A.ai(d)
d[11]=0.0025
b1.ms(o)
b1.js(k,k,k,1)
b1.jJ(l)
b1.fu(m)
d=b2*0.2
a1=A.m(d)
if(a9.a.c)a2=D.cSf
else{a2=A.aq(B.c,B.k3,q*0.45)
a2.toString
a2=A.a([a2,B.bN,B.cm],x.O)}a4=A.aq(B.bI,B.aE,q*0.65)
a4.toString
a4=A.I(a4,B.r,3)
e=A.a([new A.ad(0,B.G,B.w.j(0.3),D.dXX,16)],e)
if(!a9.a.c)e.push(new A.ad(p*3,B.G,B.aE.j(0.3+q*0.4),B.J,24+p*16))
e.push(new A.ad(0,B.G,B.c.j(0.9),B.R1,0))
g=A.a([],g)
if(!a9.a.c)g.push(A.bY(0,A.bX(b0,new A.o(b0,b0,b0,A.m(d),b0,new A.a7(new A.d8(-1+Math.cos(j)*0.8,-1),new A.d8(1,1),B.x,A.a([B.c.j(0),B.c.j(0.28+p*0.25),B.c.j(0)],x.O),b0,b0),B.n),B.bd),0,0,0))
g.push(A.ao(b0,A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,A.m(6),b0,new A.a7(B.a3,B.a7,B.x,A.a([B.c.j(0.95),B.c.j(0)],x.O),b0,b0),B.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=A.a([new A.cP(B.w.j(0.18),B.dz,5)],x.C)
if(!a9.a.c)d.push(new A.cP(B.aE.j(0.4+q*0.35),B.J,12+p*10))
g.push(A.av(A.v6(A.d(v,b0,b0,b0,b0,b0,b0,A.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,B.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),B.bb,B.jn,b3),b0,b0,b0))
f.push(A.dT(A.fr(B.A,A.p(b0,new A.an(B.W,b0,B.aa,B.q,g,b0),B.f,b0,b0,new A.o(b0,b0,a4,a1,e,new A.a7(B.ax,B.aC,B.x,a2,b0,b0),B.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new A.u(0,n)))
return new A.a6(h,h,new A.an(B.A,b0,B.aa,B.f,f,b0),b0)}}
C.aJo.prototype={
aQ(){this.aY()
this.aW()
this.dI()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdF())
w.b2$=null
w.a2()}}
C.Mw.prototype={
B(d){var w=null,v=new C.c5A(),u=v.$3("STAKE","$"+B.k.aa(this.e,2),B.c),t=A.m(18),s=A.I(B.bs.j(0.7),B.r,1.4),r=A.a([new A.ad(0,B.G,B.aU.j(0.35),B.J,14)],x.V),q=x.p
return new A.C(B.Lg,A.A(A.a([u,A.p(w,A.v(A.a([D.fdM,A.mN(new C.c5z(),w,B.bb,B.mP,w,new A.bm(w,this.c,x.e7),x.gR)],q),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(w,w,s,t,r,D.amy,B.n),w,w,w,w,B.Lr,w,w,w),v.$3("FULL WIN","$"+B.k.aa(this.d,2),B.bJ)],q),B.m,w,B.e,B.j,0,w,w),w)}}
C.ao3.prototype={
B(d){var w=null,v=A.m(99),u=A.I(B.jj.j(0.7),B.r,1)
return A.p(w,A.A(A.a([D.bBK,B.d8,C.aoU(this.d,B.na,this.c)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(w,w,u,v,w,D.amy,B.n),w,w,w,w,B.LC,w,w,w)},
gdX(){return this.c}}
C.ME.prototype={
T(){return new C.bhC(null,null)}}
C.bhC.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.m4,null,1,null,v)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.brZ()},
aLr(d,e){var w=this.a.d,v=A.S(w).k("J<1,n>"),u=A.B(new A.J(w,C.hYx(),v),v.k("aj.E"))
w=this.d
w===$&&A.c()
return A.c6(w,new C.dRK(this,u),null)},
B(d){var w=null
if(this.a.e)return A.cb(w,D.ad4,A.bp(!0,this.aLr(0,d),!0,!1,B.ag,!0,!0),w,!1,!1,w,w)
return this.aLr(0,d)},
avc(d,e,f){var w=null,v=f.j(0.16),u=A.m(10)
return A.A(A.a([A.p(w,A.W(d,f,w,w,w,17),B.f,w,w,new A.o(v,w,w,u,w,w,B.n),w,32,w,w,w,w,w,32),B.aw,A.D(A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.aJY.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.ac0.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=A.aI(d,B.e7,o).w.r.d,m=this.c,l=J.cE(m),k=l.eI(m,new C.dRN()).gM(0),j=new A.e6(l.dt(m,new C.dRO(),x.cD),x.bG).cH(0,0,new C.dRP())
o=A.aI(d,B.bS,o).w
w=x.p
v=A.a([B.S,A.p(p,p,B.f,p,p,new A.o(B.b6,p,p,A.m(2),p,p,B.n),p,4,p,p,p,p,p,42),new A.C(B.agd,A.A(A.a([A.p(p,D.bLS,B.f,p,p,new A.o(p,p,p,A.m(14),A.a([new A.ad(0,B.G,B.fg.j(0.45),B.J,14)],x.V),D.ams,B.n),p,44,p,p,p,p,p,44),B.bf,D.bu8,A.aH(p,p,p,p,B.lb,p,p,p,new C.dRQ(d),p,p,p,p,p,p)],w),B.m,p,B.e,B.j,0,p,p),p)],w)
if(l.gcl(m)){u=C.fNZ("GAMES",""+l.gM(m),B.ey)
t=C.fNZ("WON",""+k,B.jj)
s=j>=0
r=s?"+":"-"
q=C.bxN(j)
s=s?B.jj:B.f9
v.push(new A.C(D.boy,A.A(A.a([u,B.ab,t,B.ab,C.fNZ("NET",r+q,s)],w),B.m,p,B.e,B.j,0,p,p),p))}if(l.gal(m))v.push(new A.C(new A.O(24,36,24,24+n),A.v(A.a([A.W(D.bxL,B.c.j(0.35),p,p,p,52),B.ac,A.d("No game receipts yet",p,p,p,p,p,p,A.l(p,p,B.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.ao,A.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,A.l(p,p,B.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),B.L,p,p)],w),B.m,p,B.e,B.j,0,B.p),p))
else v.push(new A.dm(1,B.ci,A.hD(p,new C.dRR(this),l.gM(m),new A.O(14,2,14,16+n),p,B.ah,new C.dRS(),!1),p))
return A.p(p,A.v(v,B.m,p,B.e,B.Q,0,B.p),B.f,p,new A.aY(0,1/0,0,o.a.b*0.88),D.aY9,p,p,p,p,p,p,p,p)}}
C.ac_.prototype={
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
else if(u)r=B.dx
else{w=v?B.aM:B.bs
r=w}q=h.gbdm()
w=new C.dRM()
s=A.m(14)
p=A.a([r.j(0.13),D.bel],x.O)
o=A.I(r.j(0.4),B.r,1)
n=A.W(g?B.md:B.cw,r,i,i,i,16)
m=A.D(A.d(h.b,i,1,B.a2,i,i,i,B.uf,i,i,i),1)
l=r.j(0.2)
k=A.m(99)
k=A.p(i,A.d(t,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,B.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),B.f,i,i,new A.o(l,i,i,k,i,i,B.n),i,i,i,i,D.brV,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bxN(q)}else{l=g?"+":"-"
l+=C.bxN(h.d)}j=x.p
l=A.A(A.a([n,B.bo,m,k,B.bo,A.d(l,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.m,i,B.e,B.j,0,i,i)
k=C.dRL("STAKE",w.$1(h.w),B.c)
w=A.A(A.a([k,B.d8,C.dRL("PAID",C.bxN(g?h.d:0),r),B.d8,C.dRL("BEFORE",w.$1(h.x),B.ey),B.d8,C.dRL("AFTER",w.$1(h.y),B.dx)],j),B.m,i,B.e,B.j,0,i,i)
n=C.hU8(h.f)
h=B.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return A.p(i,A.v(A.a([l,B.ao,w,B.au,A.d(n+h,i,1,B.a2,i,i,i,A.l(i,i,B.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.aj,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(i,i,o,s,i,new A.a7(B.ax,B.aC,B.x,p,i,i),B.n),i,i,i,i,B.l3,i,i,i)}}
C.ayF.prototype={
T(){return new C.bdi(B.cI,null,null)}}
C.bdi.prototype={
a_(){var w,v,u,t=this
t.a1()
w=A.bj(null,B.m5,null,1,null,t)
w.cG(0)
t.d=w
v=J.e0(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.acp(40+w.ai()*260,-20+w.ai()*40,1.5+w.ai()*3,w.ai()*3.141592653589793,0.7+w.ai()*0.3,12+w.ai()*16,[X.a2B,B.r_,B.cR,B.c][w.aB(4)],[B.hZ,B.l5,B.dV,B.F3][w.aB(4)])
t.f=v},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bqT()},
B(d){var w=null,v=this.d
v===$&&A.c()
return A.av(A.aF(!1,B.a1,!0,w,A.c6(v,new C.d8F(this,d),w),B.f,B.K,0,w,w,w,w,w,B.af),w,w,w)}}
C.acp.prototype={
gY(d){return this.f}}
C.aIU.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.aZa.prototype={
B(d){return new A.ua(new C.c7R(this),null,new A.h2(A.a([$.ye(),$.a1B()],x.U)),null)},
gdX(){return this.c}}
C.M8.prototype={
c6n(){if(this.c!=null)this.m(new C.bXI())}}
C.HQ.prototype={}
C.anw.prototype={
T(){return new C.aBv(B.cI,new A.ar(B.as,$.aw()))},
cA4(){return this.d.$0()},
cLu(){return this.f.$0()},
cLi(d,e){return this.r.$2(d,e)},
cM5(d,e,f){return this.w.$3$bonus(d,e,f)},
gdX(){return this.c}}
C.aBv.prototype={
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.a2()},
ar3(){var w=A.d3(B.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
Ac(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Ac=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.ar3()
if(s<2){t.avd("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cA4()<s){t.avd("Insufficient balance.")
w=1
break}if(!t.a.cLi(s,"Dice Roll bet")){t.avd("Could not place bet.")
w=1
break}t.a.toString
t.m(new C.dKN(t))}w=3
return A.b(C.c4L(t.a.e),$async$Ac)
case 3:r=t.a
q=C.hWd(r.e,r.c,t.d)
t.a.cLu()
A.aXL(t.a.e)
t.m(new C.dKO(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return A.b(A.bN(new A.b9(1000*(40+p*6)),null,r),$async$Ac)
case 7:if(t.c==null){w=1
break}new C.dKP(t).$0()
t.c.e6()
case 5:++p
w=4
break
case 6:w=8
return A.b(A.bN(B.jo,null,r),$async$Ac)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.fRN(q)
t.m(new C.dKQ(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cM5(m,"Dice Roll "+n,o)
t.m(new C.dKR(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+B.k.aa(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(m,2)+" added to your balance"
w=12
return A.b(C.bBn(r,C.bB0(),new C.dKS(t),n,k,"YOU WIN!",!0),$async$Ac)
case 12:w=13
return A.b(C.afK("Dice Roll",l?"+$"+B.k.aa(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(m,2)+" added to your balance"),$async$Ac)
case 13:w=10
break
case 11:w=14
return A.b(C.bBn(r,C.bB0(),new C.dKT(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$Ac)
case 14:C.ul(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return A.h(u,v)}})
return A.i($async$Ac,v)},
avd(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.ar3(),d=x.w,a0=A.aI(a2,B.e7,d).w,a1=Math.min(A.aI(a2,B.bS,d).w.a.a*0.44,200)
d=A.hb(Q.akV,D.fkE,new C.dKW(a2),f)
w=A.m(20)
v=g.a
u=v.c
t=x.p
w=A.A(A.a([d,B.b3,A.p(f,A.A(A.a([B.akS,B.bo,C.aoU(v.d,B.jB,u)],t),B.m,f,B.e,B.Q,0,f,f),B.f,f,f,new A.o(B.cR,f,f,w,f,f,B.n),f,f,f,f,B.lz,f,f,f)],t),B.m,f,B.e,B.j,0,f,f)
u=g.z
v=A.Z(140,D.Wb.l()>>>16&255,D.Wb.l()>>>8&255,D.Wb.l()&255)
d=A.m(18)
s=A.I(A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
r=g.x
d=A.D(A.p(f,A.av(new C.am3(r,r?g.w:g.r,a1,f),f,f,f),B.f,f,f,new A.o(v,f,s,d,f,f,B.n),f,f,f,f,f,f,f,1/0),1)
v=A.d("Roll lands on one of:",f,f,f,f,f,f,A.l(f,f,B.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,B.a4,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=A.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.PA[q]
o=C.fRN(p)
n=p>0?B.bk:B.aD
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new A.aV(10,10)
i=m?B.c:n.j(0.7)
h=new A.az(i,m?2.5:1.2,B.r,-1)
n=m?A.a([new A.ad(1,B.G,n.j(0.65),B.J,14)],r):B.Pl
m=m?18:15
s.push(new A.bE(1,B.bi,new A.C(B.jq,A.p(B.A,new A.x(o,f,new A.F(!0,B.c,f,f,f,f,m,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f),B.f,f,f,new A.o(k,f,new A.bP(h,h,h,h),new A.bs(j,j,j,j),n,f,B.n),f,l,f,f,f,f,f,f),f),f))}d=A.a([d,B.ac,v,B.ao,A.A(s,B.m,f,B.e,B.j,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.fRN(v)
s=g.r
s.toString
d.push(new A.C(B.kb,A.d("Landed on "+v,f,f,f,f,f,f,A.l(f,f,s>0?B.bc:B.cr,f,f,f,f,f,f,f,f,20,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(B.S)
d.push(new A.bI(B.a3,f,f,A.d("Bet Amount",f,f,f,f,f,f,A.l(f,f,A.Z(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,B.I,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(B.ao)
v=x.bL
v=A.B(new A.J(A.a([2,5,10,25],x.n),new C.dKX(g),v),v.k("aj.E"))
s=g.y
r=A.Z(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v.push(A.D(new A.C(B.XL,A.aL(f,B.T,!1,f,!0,B.q,f,A.aM(),g.e,f,f,f,f,f,2,A.bo(f,new A.b4(4,A.m(10),B.Y),f,B.jp,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,B.lj,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,!s,!1,f,B.ai,f,f,f,f,f,B.dL,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,B.a8,f,f,f,f,f,f,f,f,f,f,f,B.hm,!0,B.L,f,B.am,f,f,f,f),f),1))
d.push(A.A(v,B.m,f,B.e,B.j,0,f,f))
d.push(B.P)
d.push(new A.bI(B.a7,f,f,A.d("Perfect Score Profit: +$"+B.k.aa(g.ar3()*0.46,2),f,f,f,f,f,f,D.eV1,f,f,f),f))
d.push(B.S)
d=A.D(new A.C(B.hH,A.v(d,B.aj,f,B.e,B.j,0,B.p),f),1)
v=g.x?f:g.gckN()
s=A.fm(f,f,B.aE,f,f,f,f,f,f,B.c,f,f,f,f,new A.b7(A.m(14),B.Y),f,f,f,f,f)
return C.aNO(f,D.Wj,A.bp(!0,A.v(A.a([new A.C(D.bsl,w,f),new C.Mw(u,e*1.46,e,f),A.D(A.v(A.a([d,new A.C(new A.O(14,4,14,8+a0.r.d),new A.a6(1/0,52,A.i9(A.d("\ud83c\udfb2 ROLL ($"+B.k.aa(e,2)+")",f,f,f,f,f,f,B.kS,f,f,f),v,s),f),f)],t),B.m,f,B.e,B.j,0,B.p),1)],t),B.m,f,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0))}}
C.ao9.prototype={
T(){return new C.aBM(B.kj,new A.ar(B.as,$.aw()))},
cLa(d){return this.e.$1(d)}}
C.aBM.prototype={
gapS(){var w,v=this.r
if(v===$){w=B.o.u(1e4+B.cI.aB(89999))
this.r!==$&&A.bM()
this.r=w
v=w}return v},
gPn(){var w=this.d,v=this.a
return w===B.kj?B.a.i(v.f.a):B.a.i(v.f.b)},
ga7C(){var w=this.gPn(),v=A.af("^\\$+",!0,!1,!1,!1),u=B.a.i(A.aJ(w,v,""))
return u.length===0?"":"$"+u},
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.a2()},
Ib(d,e){return this.bEy(d,e)},
bEy(d,e){var w=0,v=A.j(x.H),u=this,t
var $async$Ib=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.fH(new A.fA(d)),$async$Ib)
case 2:A.eO()
t=u.c
if(t!=null)t.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$Ib,v)},
Pi(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pi=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gPn().length===0){r.c.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}A.jc()
o=B.k.aa(r.a.d,2)
q=r.d===B.kj?A.cv("https://cash.app/"+r.ga7C()+"/"+o,0,null):A.cv("bitcoin:"+r.gPn(),0,null)
t=4
w=7
return A.b(A.iO(q,B.fj,null),$async$Pi)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===B.kj?r.ga7C():r.gPn()
w=10
return A.b(r.Ib(n,r.d===B.kj?"Cash App tag":"Bitcoin address"),$async$Pi)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===B.kj?r.ga7C():r.gPn()
w=11
return A.b(r.Ib(n,r.d===B.kj?"Cash App tag":"Bitcoin address"),$async$Pi)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Pi,v)},
a_9(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hU().be4(B.eF),$async$a_9)
case 3:r=e
if(r==null){w=1
break}w=4
return A.b(r.fd(),$async$a_9)
case 4:s=e
t.m(new C.dS9(t,B.a.c8(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return A.h(u,v)}})
return A.i($async$a_9,v)},
c2P(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===B.kj?C.hdn(s.a):B.a.i(s.a)
if(r.length===0){t=v.d===B.kj?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.I(x.q).f.R(A.b2(u,u,u,u,u,B.q,u,A.d(t,u,u,u,u,u,u,u,u,u,u),u,B.U,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.I(x.q).f.R(A.b2(u,u,u,u,u,B.q,u,A.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,B.U,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new A.R(Date.now(),0,!1).u(0)
w=v.a
t.cLa(new A.d1(s,w.c.a,w.d,B.fq,v.d,r,v.f,v.gapS(),B.ds,new A.R(Date.now(),0,!1)))
w=v.c
w.toString
A.iK(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.eC(o,o,o,!0,!0,B.zR,o,1,!0,o,0,!1,o,!1,B.c,o,A.aH(o,o,o,o,B.FN,o,o,o,new C.dSa(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.f4L,o,o,o,1,o,!0),m=A.m(26),l=A.I(D.eH.j(0.25),B.r,1),k=x.V,j=A.a([new A.ad(0,B.G,B.aZ.j(0.25),B.eT,24)],k),i=x.p
j=A.p(o,A.v(A.a([A.d("YOU'RE ADDING",o,o,o,o,o,o,A.l(o,o,B.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,B.I,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),B.ao,A.f4(B.A,A.d("$"+A.dz(p.a.d),o,o,o,o,o,o,D.ePo,o,o,o),B.f,B.dt),B.ao,A.d("to your Growth Income wallet",o,o,o,o,o,o,A.l(o,o,D.eH.j(0.85),o,o,o,o,o,o,o,o,12,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,l,m,j,D.bSu,B.n),o,o,o,o,D.bpZ,o,o,o)
m=p.bZj()
l=p.ayP(1,"Send the money to NGMY Pay",p.c2N())
w=p.ayP(2,"Put this code in the payment note",p.bD8())
v=p.d===B.kj
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=A.l(o,o,B.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.ayP(3,u,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.e,o,o,o,o,o,2,A.bo(o,o,o,o,o,o,o,o,!0,new A.b4(4,A.m(18),new A.az(B.c.j(0.08),1,B.r,-1)),o,o,o,o,o,B.t_,!0,o,o,o,o,new A.b4(4,A.m(18),D.aVe),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.eQP,t,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,B.rm,!0,B.a5,o,B.am,o,o,o,o))
r=p.f!=null
v=r?8:22
u=A.m(20)
s=r?D.eH:B.c
s=A.I(s.j(r?0.5:0.12),B.r,1.4)
q=r?A.v(A.a([A.bv(A.m(14),new A.cU(D.aWF,new A.E_(p.f,o),o),B.aq),B.P,D.eBu,B.au],i),B.m,o,B.e,B.j,0,B.p):A.v(A.a([A.p(o,D.bL2,B.f,o,o,new A.o(D.eH.j(0.12),o,o,o,o,o,B.a6),o,54,o,o,o,o,o,54),B.S,D.f9L,B.d_,A.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p)
v=p.b3y(4,"Screenshot of your payment",A.aE(o,A.p(o,q,B.f,o,o,new A.o(B.t_,o,s,u,o,o,B.n),o,o,o,o,new A.O(v,v,v,v),o,o,o),B.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcea(),o,o,o,o,o,o,!1,B.a9),!0)
u=A.d(p.a.r,o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,1.4,!0,o,o,o,o,o,o,o,o),B.L,o,o)
s=A.m(18)
k=A.a([new A.ad(0,B.G,B.aZ.j(0.45),B.dn,18)],k)
return A.cb(n,B.zR,A.av(new A.cU(B.a9h,A.cB(A.a([j,B.bu,m,B.bu,l,w,t,v,B.ao,u,B.aO,new A.a6(o,56,A.bX(A.ln(D.bJJ,D.fjW,p.gc2O(),A.fm(o,o,B.K,o,o,o,o,o,o,B.c,o,o,o,B.K,new A.b7(A.m(18),B.Y),o,o,o,o,o)),new A.o(o,o,o,s,k,D.bR7,B.n),B.bd),o)],i),o,D.bpt,o,o,B.ah,!1),o),o,o,o),o,!1,!1,o,o)},
bZj(){var w=null,v=new C.dS5(this),u=A.m(18),t=A.I(B.c.j(0.06),B.r,1)
return A.p(w,A.A(A.a([v.$3(B.kj,B.hX,"Cash App"),B.eb,v.$3(B.a41,D.akC,"Bitcoin")],x.p),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(B.t_,w,t,u,w,w,B.n),w,w,w,w,B.lB,w,w,w)},
b3y(d,e,f,g){var w,v=null,u=x.p,t=A.a([A.p(B.A,A.d(""+d,v,v,v,v,v,v,D.eVL,v,v,v),B.f,v,v,D.aXo,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(A.D(A.p(v,v,B.f,D.eH.j(0.18),v,v,v,v,v,B.uR,v,v,v,2),1))
t=A.v(t,B.m,v,B.e,B.j,0,B.p)
w=g?12:20
return new A.Dq(A.A(A.a([new A.a6(34,v,t,v),B.aw,A.D(new A.C(new A.O(0,0,0,w),A.v(A.a([new A.C(B.X2,A.d(e,v,v,v,v,v,v,A2.Sr,v,v,v),v),f],u),B.aj,v,B.e,B.j,0,B.p),v),1)],u),B.aj,v,B.e,B.j,0,v,v),v)},
ayP(d,e,f){return this.b3y(d,e,f,!1)},
c2N(){var w,v,u,t,s=this,r=null,q=s.d===B.kj?s.ga7C():s.gPn(),p=A.m(20),o=A.m(20),n=s.d===B.kj,m=n?D.bQ3:D.bRR,l=A.a([new A.ad(0,B.G,(n?D.adl:D.Vg).j(0.35),B.cx,16)],x.V),k=A.m(12)
n=s.d===B.kj
w=n?B.hX:D.akC
k=A.p(r,A.W(w,n?D.adl:D.Vg,r,r,r,30),B.f,r,r,new A.o(B.c,r,r,k,r,r,B.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=A.d(n,r,r,r,r,r,r,A.l(r,r,B.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===B.kj
t=u?22:13
v=A.d(v,r,1,B.a2,r,r,r,A.l(r,r,B.c,r,r,r,r,r,r,r,r,t,r,r,B.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=A.D(A.v(A.a([n,B.bz,v,B.au,A.A(A.a([D.bGA,B.d8,A.d(s.d===B.kj?"Tap to pay $"+A.dz(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,B.q0,r,r,r)],u),B.m,r,B.e,B.j,0,r,r)],u),B.F,r,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,r,A.aK(!1,p,!0,A.ex(A.A(A.a([k,B.bf,v,A.aH(r,r,r,r,D.bFF,r,r,r,w?r:new C.dS8(s,q),r,r,r,r,"Copy",r)],u),B.m,r,B.e,B.j,0,r,r),r,new A.o(r,r,r,o,l,m,B.n),r,B.afU,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gc9u(),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af)},
bD8(){var w,v,u,t,s,r,q,p,o=null,n=A.m(20),m=A.I(B.b4.j(0.35),B.r,1),l=x.p,k=A.a([],l)
for(w=this.gapS().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new A.aV(12,12)
q=A.a([B.b4.j(0.28),B.b4.j(0.08)],u)
p=new A.az(B.ey.j(0.4),1,B.r,-1)
k.push(A.p(B.A,new A.x(s,o,B.CM,o,o,o,o,o,o,o,o,o),B.f,o,o,new A.o(o,o,new A.bP(p,p,p,p),new A.bs(r,r,r,r),o,new A.a7(B.b0,B.b5,B.x,q,o,o),B.n),o,52,o,B.jq,o,o,o,42))}return A.p(o,A.v(A.a([A.A(k,B.m,o,B.b9,B.j,0,o,o),B.ac,A.A(A.a([A.D(A.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,A.l(o,o,B.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.ab,A.hb(B.a_t,D.flJ,new C.dS4(this),A.fu(o,o,o,o,o,o,o,o,o,o,o,B.ey,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),B.m,o,B.e,B.j,0,o,o)],l),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(B.t_,o,m,n,o,o,B.n),o,o,o,o,B.bB,o,o,o)}}
C.r4.prototype={
ad(){var w=this
return A.E(["id",w.a,"title",w.b,"start",w.c.ac(),"end",w.d.ac(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.r5.prototype={
ad(){var w=this
return A.E(["id",w.a,"when",w.b.ac(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gUs(){var w=this,v=A.a([],x.s),u=w.d
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
u=w.c
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
v.push(C.fZs(w.b))
u=w.e
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
return B.d.aH(v," \xb7 ")},
gky(d){return this.c}}
C.lt.prototype={
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
w=J.b6(v.c,new C.c6Q(),x.P)
w=A.B(w,w.$ti.k("aj.E"))
u.n(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"thumbnailPath",w)
u.n(0,"printable",v.e)
u.n(0,"sortOrder",v.f)
return u}}
C.i_.prototype={
aj9(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.i_(v,u,t,s,r,h==null?w.f:h)},
b8S(d){var w=null
return this.aj9(w,w,w,w,d,w)},
cDG(d,e,f){return this.aj9(d,e,null,null,null,f)},
b8R(d){var w=null
return this.aj9(w,w,w,d,w,w)},
cDl(d,e){var w=null
return this.aj9(w,w,d,w,e,w)},
ad(){var w=this,v=C.hHW(w.c),u=w.e,t=A.S(u).k("J<1,a4<n,@>>")
u=A.B(new A.J(u,new C.c6O(),t),t.k("aj.E"))
return A.E(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.b6X.prototype={}
C.Uf.prototype={
T(){return new C.aBY(new A.ar(B.as,$.aw()),A.mo(0,null,null),A.a([],x.m))},
T2(d){return this.d.$1(d)}}
C.aBY.prototype={
a_(){var w,v=this
v.a1()
w=J.b6(v.a.c,new C.dVP(),x.i)
w=A.B(w,w.$ti.k("aj.E"))
B.d.b1(w,new C.dVQ())
v.d=w
v.Ik()},
q(){var w=this.w
w.S$=$.aw()
w.P$=0
this.x.q()
this.a2()},
acw(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$acw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.Ik()
u.m(new C.dVJ(u))
t=u.a
t.toString
s=u.d
s===$&&A.c()
w=2
return A.b(t.T2(s),$async$acw)
case 2:r=e
if(u.c!=null){u.m(new C.dVK(u))
t=u.c.I(x.q).f
s=A.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.R(A.b2(null,null,null,r?B.d2:B.aD,null,B.q,null,s,null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$acw,v)},
a6P(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a6P=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&A.c()
s=new C.i_(q,"New Category",B.Fm,4284773515,D.av4,p.length)
t.m(new C.dVs(t,s))
t.Ik()
p=t.c
if(p==null){w=1
break}w=3
return A.b(A.c9(null,null,!0,null,new C.dVt(s),p,null,!0,!0,x.i),$async$a6P)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dVu(t,q,r))
case 1:return A.h(u,v)}})
return A.i($async$a6P,v)},
a07(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a07=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=B.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.m(new C.dVG(t,p))
q.bM(0,B.c3)
q=t.a.e
s=t.d
s===$&&A.c()
w=3
return A.b(C.c6L(p,q,s),$async$a07)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dVH(t,r))
$.aU.x1$.push(new C.dVI(t))
case 1:return A.h(u,v)}})
return A.i($async$a07,v)},
a8O(d){return this.bJ4(d)},
bJ4(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a8O=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&A.c()
t=r[d]
r=u.c
r.toString
w=2
return A.b(A.c9(null,null,!0,null,new C.dVA(t),r,null,!0,!0,x.i),$async$a8O)
case 2:s=f
if(s!=null)u.m(new C.dVB(u,d,s))
return A.h(null,v)}})
return A.i($async$a8O,v)},
bGX(d){this.m(new C.dVz(this,d))
this.Ik()},
Ik(){var w,v,u=this.d
u===$&&A.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].b8S(v)},
c6T(d,e){var w={}
w.a=e
this.m(new C.dVF(w,this,d))},
Xz(d){return this.bYe(d)},
bYe(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Xz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=A.em(new C.dVE(u,d),!1,null,x.H)
w=2
return A.b(A.a5(s,!1).ci(t),$async$Xz)
case 2:return A.h(null,v)}})
return A.i($async$Xz,v)},
bzq(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?A.a([B.fl,B.bn],l):A.a([B.p2,B.es],l)
w=A.m(16)
v=A.I(m?B.d4.j(0.35):B.dx,B.r,1)
u=A.W(B.dV,m?B.dx:B.dR,n,n,n,n)
t=A.D(A.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.M,n,n,n,n,n,n,n,n,n,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.YW:A7.LZ
r=x.p
s=A.a([A.aK(!1,n,!0,A.A(A.a([u,B.ab,t,A.W(s,m?B.bI:B.ak,n,n,n,n)],r),B.m,n,B.e,B.j,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dVw(o),n,n,n,n,n,n,n)],r)
if(o.r){u=A.a([B.S],r)
t=o.y
if(t.length!==0){q=(m?D.rK:B.c).j(0.65)
p=A.m(12)
u.push(A.p(n,A.k_(!0,n,o.x,new C.dVx(o,d),t.length,n,n,n,n,!1,!1),B.f,n,B.a9c,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.cj,n,n,n))}u.push(B.P)
t=o.w
q=A.l(n,n,m?B.aP:B.M,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=A.l(n,n,m?B.bI:B.ak,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?B.bn:B.aP
q=A.D(A.aL(n,B.T,!1,n,!0,B.q,n,A.aM(),t,n,n,n,n,n,2,A.bo(n,new A.b4(4,A.m(14),B.Y),n,B.eP,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.dVy(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,q,!0,B.a5,n,B.am,n,n,n,n),1)
m=o.f?n:o.gcl0()
p=A.bk(B.bj,n,n,n,n,n,B.j5,n,n,n,n,n)
u.push(A.A(A.a([q,new A.I4(t,B.bj,n),B.d8,A.bJ(o.f?B.pW:D.akL,m,p)],r),B.dC,n,B.e,B.j,0,n,n))
B.d.v(s,u)}return A.df(n,A.v(s,B.aj,n,B.e,B.j,0,B.p),n,n,B.bb,new A.o(n,n,v,w,n,new A.a7(B.a3,B.a7,B.x,l,n,n),B.n),B.ir,n,n,B.ED,B.bB,n,n,n)},
B(d){var w,v=this,u=null,t=A.M(d).ax.a===B.H,s=new C.b6X(t),r=t?B.da:B.bN,q=t?B.da:u,p=t?B.aP:B.M,o=A.d("Help Topics Admin",u,u,u,u,u,u,A.l(u,u,t?B.aP:B.M,u,u,u,u,u,u,u,u,u,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gc2T()
if(n)n=B.RZ
else n=A.W(B.xx,t?B.aP:B.M,u,u,u,u)
w=x.p
o=A.eC(A.a([A.hb(n,A.d("Save",u,u,u,u,u,u,A.l(u,u,t?B.aP:B.M,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=R.aSQ(B.aI,u,O.Ur,B.nJ,D.fik,v.gbvO())
q=v.bzq(s)
n=A.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,A.l(u,u,t?B.bI:B.ak,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&A.c()
return A.cb(o,r,A.v(A.a([q,new A.C(B.ED,n,u),A.D(H.h2S(!1,new C.dVO(v,s),m.length,v.gc6S(),D.bok,u,!1),1)],w),B.aj,u,B.e,B.j,0,B.p),u,!1,!1,p,u)}}
C.Ou.prototype={
T(){return new C.b8N()}}
C.b8N.prototype={
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
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=r?D.rK:B.c,p=A.d("Edit category",s,s,s,s,s,s,A.l(s,s,r?B.c:B.bh,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&A.c()
o=A.aL(s,B.T,!1,s,!0,B.q,s,A.aM(),o,s,s,s,s,s,2,D.bMM,B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,A.l(s,s,r?B.c:B.bh,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,B.a5,s,B.am,s,s,s,s)
w=x.aS
w=A.B(new A.J(D.bSR,new C.cIn(t),w),w.k("aj.E"))
w=A.c4(B.bE,w,B.bx,8,8)
v=x.gN
v=A.B(new A.J(D.cPx,new C.cIo(t),v),v.k("aj.E"))
u=x.p
v=A.cd(A.v(A.a([o,B.ac,w,B.ac,A.c4(B.bE,v,B.bx,0,8)],u),B.m,s,B.e,B.Q,0,B.p),B.q,s,B.y,s,s,s,s,B.ah)
return A.eh(A.a([A.bK(!1,B.dd,s,s,!0,s,s,new C.cIp(d),s,s),A.bJ(B.oT,new C.cIq(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.ZN.prototype={
T(){return new C.aDX()},
oj(d){return this.d.$1(d)}}
C.aDX.prototype={
a_(){this.a1()
this.d=A.bl(this.a.c.e,!0,x.u)},
avg(){var w=this.a,v=w.c,u=this.d
u===$&&A.c()
return w.oj(v.b8R(u))},
a6R(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a6R=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&A.c()
w=2
return A.b(u.aYs(new C.ie("q_"+1000*s,"",D.cO8,null,!1,r.length)),$async$a6R)
case 2:t=e
if(t!=null){u.m(new C.eJb(u,t))
u.avg()}return A.h(null,v)}})
return A.i($async$a6R,v)},
aYs(d){var w,v=this.c
v.toString
w=A.em(new C.eJc(d),!1,null,x.u)
return A.a5(v,!1).ci(w)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=u?B.da:B.bN,s=u?B.da:v,r=u?B.aP:B.M,q=w.a.c
s=A.eC(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,A.d(q.b+" \u2014 Questions",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.M,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=R.aSQ(B.aI,v,O.Ur,B.nJ,D.fnM,w.gbwe())
q=w.d
q===$&&A.c()
q=q.length
if(q===0){q=A.av(A.d("No questions yet. Tap + Question.",v,v,v,v,v,v,A.l(v,v,u?B.bI:B.ak,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=A.hD(v,new C.eJh(w,new C.b6X(u)),q,D.bot,v,B.ah,new C.eJi(),!1)
return A.cb(s,t,u,v,!1,!1,r,v)}}
C.ZM.prototype={
T(){return new C.aDW()}}
C.aDW.prototype={
a_(){var w,v=this
v.a1()
w=v.a.c
v.d=new A.ar(new A.bb(w.b,B.b1,B.aN),$.aw())
w=A.bl(w.c,!0,x.bP)
v.e=w
if(B.d.gal(w))J.cf(v.e,D.a3j)
w=v.a.c
v.f=w.d
v.r=w.e},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
acv(){var w=0,v=A.j(x.H),u=this,t
var $async$acv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(Z.FX(78,1920),$async$acv)
case 2:t=e
if(t!=null)u.m(new C.eJ7(u,t))
return A.h(null,v)}})
return A.i($async$acv,v)},
adz(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=A.em(new C.eJ5(u),!1,null,x.dZ)
w=2
return A.b(A.a5(r,!1).ci(t),$async$adz)
case 2:s=e
if(s!=null)u.m(new C.eJ6(u,s))
return A.h(null,v)}})
return A.i($async$adz,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.M(a1).ax.a===B.H,g=h?B.da:B.bN,f=h?B.da:i,e=h?B.aP:B.M,d=A.d("Edit Question",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=A.eC(A.a([A.dq(S.a_C,B.oT,new C.eJ9(j,a1),A.bk(B.aI,i,i,i,B.c,i,i,i,i,i,i,i)),B.aw],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=A.d("Question thumbnail",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=A.m(14)
w=j.f
v=h?B.bI:B.ak
w=A.aE(i,A.bv(e,K.aNR(A.m(14),B.bQ,140,B.AQ,v,w,1/0),B.aq),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gc2S(),i,i,i,i,i,i,!1,B.a9)
e=A.d("Question users will tap",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?B.bn:B.aP
u=A.m(16)
t=A.I(h?B.aK:B.aL,B.r,1)
s=j.d
s===$&&A.c()
r=A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,15,i,i,B.a4,i,i,!0,i,i,i,i,i,i,i,i)
v=A.p(i,A.A(A.a([A.D(A.aL(i,B.T,!1,i,!0,B.q,i,A.aM(),s,i,i,i,i,i,2,A.bo(i,B.ex,i,B.bl,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,i,i,i,B.cs,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),B.y,!0,i,!0,i,!1,i,B.ai,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,B.a8,i,i,i,i,i,i,i,i,i,i,i,r,!0,B.a5,i,B.am,i,i,i,i),1),new A.I4(j.d,i,i)],a0),B.m,i,B.e,B.j,0,i,i),B.f,i,i,new A.o(v,i,t,u,i,i,B.n),i,i,i,i,B.em,i,i,i)
u=A.d("Printable document",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,i,i,i,B.a4,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=A.iB(B.aI,i,i,B.ag,i,new C.eJa(j),i,A.d("Shows a printable badge on this answer",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=A.d("Stored answer (not AI)",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=A.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.rK:B.c
q=A.m(16)
p=A.m(16)
o=A.m(16)
n=A.I(B.bj.j(0.45),B.r,1)
m=A.p(i,D.bEq,B.f,i,i,new A.o(B.bj.j(0.12),i,i,A.m(12),i,i,B.n),i,i,i,i,B.bl,i,i,i)
l=A.d("Open Document Editor",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&A.c()
k=J.ac(k)
l=A.D(A.v(A.a([l,B.au,A.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),B.F,i,B.e,B.j,0,B.p),1)
return A.cb(d,g,A.cB(A.a([f,B.P,w,B.d6,e,B.P,v,B.aO,u,B.P,t,B.au,s,B.ac,A.aF(!1,B.a1,!0,q,A.aK(!1,p,!0,A.p(i,A.A(A.a([m,B.ew,l,A.W(B.AW,h?B.bI:B.ak,i,i,i,16)],a0),B.m,i,B.e,B.j,0,i,i),B.f,i,i,new A.o(i,i,n,o,i,i,B.n),i,i,i,i,B.fx,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gc8s(),i,i,i,i,i,i,i),B.f,r,0,i,i,i,i,i,B.af)],a0),i,B.bY,i,i,B.ah,!1),i,!1,!1,i,i)}}
C.cZP.prototype={}
C.Ug.prototype={
T(){return new C.aC_(A.ke(!0,null,!0,!0,null,null,!1))}}
C.aC_.prototype={
a_(){var w,v,u,t,s,r,q=this
q.a1()
w=J.dH(q.a.c,new C.dWp())
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
q.d=new A.ar(new A.bb(w,B.b1,B.aN),$.aw())},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.f.q()
this.a2()},
avh(d,e){var w,v,u,t,s,r=this.d
r===$&&A.c()
r=r.a
w=r.b
if(!w.geu())return
v=r.a
r=w.a
u=w.b
t=d+B.a.ap(v,r,u)+e
s=B.a.om(v,r,u,t)
this.d.bM(0,new A.bb(s,A.h7(B.bt,r+t.length),B.aN))},
aWF(d){var w,v,u,t,s=this.d
s===$&&A.c()
s=s.a
w=s.a
v=B.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=B.a.om(w,v,v,u)
this.d.bM(0,new A.bb(t,A.h7(B.bt,v+u.length),B.aN))},
aas(){var w=0,v=A.j(x.H),u,t=this,s
var $async$aas=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(Z.FX(78,1920),$async$aas)
case 3:s=e
if(s==null){w=1
break}t.m(new C.dW5(t,s))
case 1:return A.h(u,v)}})
return A.i($async$aas,v)},
X4(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hU().a4n(B.eF),$async$X4)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return A.b(s.fd(),$async$X4)
case 4:t.m(new r.dWa(t,e))
case 1:return A.h(u,v)}})
return A.i($async$X4,v)},
aat(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$aat=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=$.aw()
s=new A.ar(B.as,t)
r=new A.ar(new A.bb("https://",B.b1,B.aN),t)
q=u.c
q.toString
w=2
return A.b(A.c9(null,null,!0,null,new C.dW8(s,r),q,null,!0,!0,x.y),$async$aat)
case 2:if(e===!0)u.m(new C.dW9(u,s,r))
s.S$=t
s.P$=0
r.S$=t
r.P$=0
return A.h(null,v)}})
return A.i($async$aat,v)},
bAl(){var w,v,u,t,s,r=null,q=A.a([],x.a),p=this.d
p===$&&A.c()
p=B.a.fv(p.a.a,A.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new A.J(p,new C.dW1(),A.S(p).k("J<1,n>")).bY(0,new C.dW2())
for(p=J.aW(w.a),v=new A.hn(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gU(p)
if(B.a.a0(s,"## "))q.push(new C.lt("heading",B.a.i(B.a.b_(s,3)),r,r))
else if(B.a.a0(s,"\u2022 ")||B.a.a0(s,"- "))q.push(new C.lt("bullets",new A.J(A.a(s.split("\n"),u),new C.dW3(),t).bY(0,new C.dW4()).aH(0,"\n"),r,r))
else q.push(new C.lt("text",s,r,r))}p=this.e
p===$&&A.c()
B.d.v(q,p)
if(q.length===0)q.push(D.a3j)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.cZP(n),l=n?B.aA:B.fC,k=A.d(p.a.d,o,o,o,o,o,o,B.ct,o,o,o),j=x.p
k=A.eC(A.a([A.dq(S.a_C,B.a6S,new C.dWf(p,d),A.bk(B.aI,o,o,o,B.c,o,o,o,o,o,o,o)),B.ab],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?B.cC:B.iH
v=A.c4(B.bE,A.a([p.v7(E.M_,"Bold",new C.dWg(p),m),p.v7(E.YY,"Italic",new C.dWh(p),m),p.v7(E.ai2,"Underline",new C.dWi(p),m),p.v7(Ab.Z4,"Heading",new C.dWj(p),m),p.v7(O.M0,"Bullets",new C.dWk(p),m),p.v7(E.ai1,"Align",new C.dWl(),m),p.v7(B.F4,"Link",p.gbVo(),m),p.v7(B.pq,"Image",p.gbVn(),m),p.v7(Y.Zg,"Video",p.gbVp(),m),p.v7(M.a_h,"Signature",new C.dWm(p),m),p.v7(Y.M1,"Divider",new C.dWn(p),m)],j),B.bx,4,4)
w=A.p(o,A.v(A.a([v,B.ao,A.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,A.l(o,o,n?B.dS:B.bp,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),B.aj,o,B.e,B.j,0,B.p),B.f,w,o,o,o,o,o,o,E.agV,o,o,o)
v=n?B.da:B.c
u=A.m(12)
t=A.I(n?B.et:B.e2,B.r,1)
s=A.a([new A.ad(0,B.G,B.w.j(n?0.35:0.08),B.cJ,16)],x.V)
r=p.d
r===$&&A.c()
q=A.l(o,o,n?B.iK:B.aA,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=A.a([w,A.D(new A.C(B.bY,A.p(o,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),r,o,o,o,o,o,2,A.bo(o,B.ex,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.dS:B.bp,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,p.f,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,q,!0,B.a5,o,B.am,o,o,o,o),B.f,o,o,new A.o(v,o,t,u,s,o,B.n),o,o,o,o,A3.AA,o,o,o),o),1)],j)
n=p.e
n===$&&A.c()
if(n.length!==0){n=new A.hV(n,A.S(n).k("hV<1>"))
j.push(A.p(o,A.c4(B.bE,n.gdL(n).dt(0,new C.dWo(p,m),x.g5).dE(0),B.bx,0,8),B.f,o,o,o,o,o,o,o,B.Lk,o,o,o))}return A.cb(k,l,A.v(j,B.m,o,B.e,B.j,0,B.p),o,!1,!1,o,o)},
v7(d,e,f,g){var w=null,v=g.a,u=v?B.da:B.c,t=A.m(8),s=A.m(8)
return A.hm(A.aF(!1,B.a1,!0,t,A.aK(!1,s,!0,new A.C(B.cj,A.W(d,v?B.iK:B.aA,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,w,w,w,B.af),w,e,w,w)}}
C.dcW.prototype={}
C.azy.prototype={
a4(){return"_KbView."+this.b}}
C.aos.prototype={
T(){return new C.aBZ(D.aRQ)},
cKq(d,e){return this.e.$2$size(d,e)}}
C.aBZ.prototype={
gaxZ(){var w,v
if(this.e==null)return null
for(w=J.aW(this.a.c);w.C();){v=w.gU(w)
if(v.a===this.e)return v}return null},
gcnb(){var w,v,u,t,s,r=this.gaxZ()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
c2U(d){this.m(new C.dVZ(this,d))},
c9D(d){this.m(new C.dW_(this,d))},
byA(){this.m(new C.dVR(this))},
byC(){this.m(new C.dVS(this))},
gb35(){var w=A.bl(this.a.c,!0,x.i)
B.d.b1(w,new C.dW0())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.M(d).ax.a===B.H,f=new C.dcW(g),e=x.O
e=g?A.a([B.M.j(0.9),B.bn.j(0.85)],e):A.a([B.es.j(0.55),B.mG.j(0.45)],e)
w=A.m(22)
v=A.I((g?B.aK:B.fh).j(0.55),B.r,1)
switch(i.d.a){case 0:g=i.bzC(f)
break
case 1:g=i.gaxZ()
g.toString
g=i.bAj(f,g)
break
case 2:u=i.gaxZ()
u.toString
t=i.gcnb()
t.toString
s=A.b0(u.d)
r=A.m(16)
r=A.p(h,A.d(t.b,h,h,h,h,h,h,D.eUR,h,h,h),B.f,h,h,new A.o(B.aI,h,h,r,h,h,B.n),h,h,h,h,B.bB,h,h,1/0)
q=g?B.aA:B.c
p=A.m(16)
o=A.I(g?B.aK:B.aL,B.r,1)
n=A.a([new A.ad(0,B.G,B.w.j(g?0.28:0.06),B.ei,10)],x.V)
m=g?B.fl:B.p2
l=A.m(8)
k=A.W(B.px,g?B.dx:B.dR,h,h,h,14)
j=x.p
j=A.v(A.a([new C.azw(f,i.gbyB(),u.c,s,"Answer",h),A.D(A.cB(A.a([r,B.ac,A.p(h,A.v(A.a([A.p(h,A.A(A.a([k,B.eb,A.d("Stored answer",h,h,h,h,h,h,A.l(h,h,g?B.dx:B.dR,h,h,h,h,h,h,h,h,11,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),B.m,h,B.e,B.Q,0,h,h),B.f,h,h,new A.o(m,h,h,l,h,h,B.n),h,h,h,B.e3,B.h3,h,h,h),new C.aYI(t.c,t.e,f,h)],j),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(q,h,o,p,n,h,B.n),h,h,h,h,B.bY,h,h,1/0)],j),h,B.boc,h,h,B.ah,!1),1)],j),B.aj,h,B.e,B.j,0,B.p)
g=j
break
default:g=h}return A.p(h,g,B.aq,h,h,new A.o(h,h,v,w,h,new A.a7(B.b0,B.b5,B.x,e,h,h),B.n),h,h,h,B.hH,h,h,h,h)},
aU9(d){var w,v,u,t=null,s=d.a,r=s?D.rK:B.c,q=B.aE.j(0.22)
q=A.a([new A.ad(0,B.G,q,B.J,14),new A.ad(0,B.G,B.w.j(s?0.28:0.06),B.J,8)],x.V)
w=A.I(s?B.aK:B.fh,B.r,2)
v=this.a
u=x.p
q=A.a([A.p(t,A.hR(v.cKq(v.d,72),B.aq),B.f,t,t,new A.o(r,t,w,t,q,t,B.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)B.d.v(q,A.a([B.ao,A.d("Tap to switch",t,t,t,t,t,t,A.l(t,t,B.d2,t,t,t,t,t,t,t,t,12,t,t,B.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return A.v(q,B.m,t,B.e,B.j,0,B.p)},
bzC(d){var w,v,u=this,t=null,s=u.a.r
s=A.av(s!=null?A.aE(t,u.aU9(d),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,B.a9):u.aU9(d),t,t,t)
w=d.a
v=A.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,A.l(t,t,w?B.aP:B.M,t,t,t,t,t,t,t,t,20,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),B.L,t,t)
return A.cB(A.a([s,B.az,v,B.ao,A.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,A.l(t,t,w?B.bI:B.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),B.L,t,t),B.bu,A.ib(!0,t,t,B.y,G.aM_,new C.dVU(u,d),u.gb35().length,t,B.dP,B.ah,!0)],x.p),t,D.bou,t,t,B.ah,!1)},
bAj(d,e){var w,v,u,t,s=null,r=A.bl(e.e,!0,x.u)
B.d.b1(r,new C.dVW())
w=A.b0(e.d)
v=d.a
u=A.d("Tap a question to read the stored answer.",s,s,s,s,s,s,A.l(s,s,v?B.bI:B.ak,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=A.av(A.d("No questions in this category yet.",s,s,s,s,s,s,A.l(s,s,v?B.bI:B.ak,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=A.hD(s,new C.dVX(this,r,d,e),t,B.uV,s,B.ah,new C.dVY(),!1)
return A.v(A.a([new C.azw(d,this.gbyz(),e.c,w,e.b,s),new A.C(Ag.uW,u,s),A.D(v,1)],x.p),B.aj,s,B.e,B.j,0,B.p)}}
C.azw.prototype={
B(d){var w=this,v=null,u=w.c.a,t=A.aH(v,v,v,v,A.W(B.eA,u?B.aP:B.M,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=A.m(12)
q=A.p(v,A.W(w.e,s,v,v,v,22),B.f,v,v,new A.o(r,v,v,q,v,v,B.n),v,v,v,v,B.cj,v,v,v)
return new A.C(D.brI,A.A(A.a([t,q,B.aw,A.D(A.d(w.r,v,v,v,v,v,v,A.l(v,v,u?B.aP:B.M,v,v,v,v,v,v,v,v,17,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,v,v),v)}}
C.aay.prototype={
B(d){var w=null,v=this.c,u=A.b0(v.d),t=this.d.a,s=t?D.rK:B.c,r=A.m(14),q=A.m(14),p=A.m(14),o=A.I(t?B.aK:B.aL,B.r,1),n=A.a([new A.ad(0,B.G,B.w.j(t?0.28:0.06),B.dz,6)],x.V),m=u.j(0.15),l=A.m(12)
l=A.p(w,A.W(v.c,u,w,w,w,22),B.f,w,w,new A.o(m,w,w,l,w,w,B.n),w,40,w,w,w,w,w,40)
return new A.fF(1,A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(w,A.v(A.a([l,B.ao,A.d(v.b,w,2,B.a2,w,w,w,A.l(w,w,t?B.aP:B.M,w,w,w,w,w,w,w,w,10,w,w,B.I,w,1.1,!0,w,w,w,w,w,w,w,w),B.L,w,w)],x.p),B.m,w,B.b9,B.j,0,B.p),B.f,w,w,new A.o(w,w,o,p,n,w,B.n),w,w,w,w,B.cj,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.af),w)}}
C.aYI.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=A.a([],q)
if(this.d){w=r.a
v=w?B.fl:B.p2
u=A.m(8)
t=A.W(B.tx,w?B.dx:B.dR,s,s,s,14)
p.push(A.p(s,A.A(A.a([t,B.d8,A.d("Printable document",s,s,s,s,s,s,A.l(s,s,w?B.dx:B.dR,s,s,s,s,s,s,s,s,10,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),B.m,s,B.e,B.Q,0,s,s),B.f,s,s,new A.o(v,s,s,u,s,s,B.n),s,s,s,B.cG,B.eE,s,s,s))}B.d.v(p,J.b6(this.c,new C.c6M(r),x.l))
return A.v(p,B.F,s,B.e,B.j,0,B.p)}}
C.aaq.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new A.C(D.bmn,A.d(q.b,r,r,r,r,r,r,A.l(r,r,s.d.a?B.aP:B.M,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new A.C(B.hG,A.bv(A.m(12),K.aNR(r,B.bQ,160,B.pq,r,w,1/0),B.aq),r)
case"video":v=q.c
q=v==null?q.b:v
return new A.C(B.hG,new C.azx(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new A.C(B.uR,A.aK(!1,r,!0,A.d(q,r,r,r,r,r,r,A.l(r,r,s.d.a?B.cu:B.bj,r,B.ms,r,r,r,r,r,r,r,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cC3(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=A.iw(v?B.aK:B.aL,r,r,r,r,r)
q=A.d(q.b,r,r,r,r,r,r,A.l(r,r,v?B.cm:B.aK,r,r,r,r,r,r,r,r,r,B.cD,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=A.p(r,r,B.f,v?B.bI:B.ak,r,r,r,1,r,r,r,r,r,120)
return new A.C(B.Ao,A.v(A.a([u,q,B.aO,t,B.au,A.d("Signature",r,r,r,r,r,r,A.l(r,r,v?B.bI:B.ak,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r)
case"bullets":v=x.cl
q=A.B(new A.cQ(new A.a2(A.a(q.b.split("\n"),x.s),new C.cC4(),x.cc),new C.cC5(s),v),v.k("H.E"))
return new A.C(B.kC,A.v(q,B.F,r,B.e,B.j,0,B.p),r)
case"divider":return new A.C(B.hG,A.iw(s.d.a?B.aK:B.aL,r,r,r,r,r),r)
default:q=q.b
if(B.a.i(q).length===0)return B.bH
return new A.C(B.eO,C.hC6(q,s.d),r)}}}
C.azx.prototype={
T(){return new C.beN()}}
C.beN.prototype={
a_(){this.a1()
this.acx()},
acx(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$acx=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=B.a.i(r.a.c)
if(J.ac(n)!==0)p=!J.cZ(n,"http")&&!J.cZ(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=A.X9(A.cv(n,0,null),null)
w=7
return A.b(J.agz(q),$async$acx)
case 7:if(r.c==null){w=1
break}r.m(new C.dcX(r,q))
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
return A.i($async$acx,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?B.bn:B.f7
u=A.m(12)
return A.p(B.A,A.W(B.pC,w?B.bI:B.ak,t,t,t,36),B.f,t,t,new A.o(v,t,t,u,t,t,B.n),t,120,t,t,t,t,t,t)}w=A.m(12)
v=s.a
u=J.agx(v)
return A.bv(w,new A.fF(u,new A.an(B.A,t,B.aa,B.q,A.a([new A.zC(s,t),A.aH(t,t,t,t,A.W(v.f?B.ai9:B.M2,B.c,t,t,t,44),t,t,t,new C.dcZ(this,s),t,t,t,t,t,t)],x.p),t),t),B.aq)}}
C.apg.prototype={
a4(){return"NgmyMusicLane."+this.b}}
C.HV.prototype={
a4(){return"NgmyMusicRhymeScheme."+this.b}}
C.rb.prototype={}
C.aov.prototype={
T(){var w=null
return new C.aC0(new A.ar(B.as,$.aw()),A.mo(0,w,w),A.a([],x.m),D.BX,D.aDE,w,w)},
gdX(){return this.d}}
C.aC0.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.mO,null,1,null,v)
w.f6(0,!0)
v.as!==$&&A.aO()
v.as=w
v.z=B.d.gL(D.a1W).a},
q(){var w=this,v=w.as
v===$&&A.c()
v.q()
v=w.d
v.S$=$.aw()
v.P$=0
w.e.q()
w.bs7()},
gaor(){var w,v,u,t,s=this.x
if(s===D.BY)return null
s=s===D.BX
w=s?D.a1W:D.a19
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?B.d.gL(w):null},
cnX(d){return this.m(new C.dWD(this,d))},
axM(){$.aU.x1$.push(new C.dWu(this))},
Ic(d){return this.cnp(d)},
aWG(){return this.Ic(null)},
cnp(b0){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$Ic=A.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=B.a.i(b0==null?q.d.a.a:b0)
if(J.ac(a8)===0||q.r||q.a.e){w=1
break}w=3
return A.b(q.a.f.$0(),$async$Ic)
case 3:e=b2
if(!e){w=1
break}A.jK()
d=a8.toLowerCase()
p=B.a.t(d,"continue")||B.a.t(d,"keep going")||B.a.t(d,"go on")||B.a.t(d,"next verse")||B.a.t(d,"more lyrics")||B.a.t(d,"endelea")||B.a.t(d,"endelea na")||B.a.t(d,"ongeza")||B.a.t(d,"tuendelee")
a0=q.f
a1=B.d.b8(a0,new C.dWw())
o=!p&&!a1
d=a8.toLowerCase()
if(!(B.a.t(d,"fix")||B.a.t(d,"rewrite")||B.a.t(d,"re-write")||B.a.t(d,"rhyme better")||B.a.t(d,"better rhyme")||B.a.t(d,"sound better")||B.a.t(d,"improve")||B.a.t(d,"polish")||B.a.t(d,"make it rhyme")||B.a.t(d,"boresha")||B.a.t(d,"rekebisha")||B.a.t(d,"endeleza mistari")))a2=C.h8j(a8)&&a1
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
l=C.h8j(a8)&&!p
q.m(new C.dWx(q,a8))
q.axM()
k=B.a.i(q.a.c)
if(J.ac(k)===0){q.m(new C.dWy(q))
q.axM()
w=1
break}t=5
j=A.mU(k)
i=new A.J(a0,new C.dWz(),A.S(a0).k("J<1,n>")).aH(0,"\n\n")
a0=C.hVD(m,p,o,q.x,n,q.y,q.gaor(),l)
a3=J.ac(i)!==0?"--- Conversation so far ---\n"+A.t(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+A.t(a8)
w=8
return A.b(A.qB(j,h,B.hj,null),$async$Ic)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=B.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=B.a.i(a0)}else a6=L.bzy(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.m(new C.dWA(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.m(new C.dWB(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.m(new C.dWC(q))
q.axM()
w=r.pop()
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ic,v)},
bEi(){return this.Ic("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=A.M(d).ax.a===B.H,p=q?B.E8:D.bd1,o=x.p
o=A.a([A.v(A.a([A.D(s.cmF(q),1),s.bDv(q)],o),B.m,r,B.e,B.j,0,B.p)],o)
if(s.f.length!==0&&!s.r){w=B.aM.j(0.55)
v=s.r?r:s.gbEh()
u=A.m(28)
t=A.a([B.aM,B.aJ],x.O)
o.push(A.ao(78,A.aF(!1,B.a1,!0,r,A.aK(!1,r,!0,A.ex(D.e08,r,new A.o(r,r,r,u,A.a([new A.ad(0,B.G,B.aM.j(0.45),B.cJ,16)],x.V),new A.a7(B.a3,B.a7,B.x,t,r,r),B.n),r,r,r),B.rj,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),B.f,B.K,10,r,w,B.rj,r,r,B.af),r,r,r,14,r,r))}return A.p(r,new A.an(B.W,r,B.aa,B.q,o,r),B.f,p,r,r,r,r,r,r,r,r,r,r)},
cmF(d){var w,v,u,t=this,s=null
if(t.x===D.BY)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=A.a([A.fN0(s,!1,B.K,0,0,w,A.fJl(t.csc(d),B.UL,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=A.W(B.akD,B.aE.j(0.5),s,s,s,52)
w.push(A.b4e(new A.C(B.ez,A.v(A.a([u,B.az,A.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,A.l(s,s,d?B.ay:B.dy,s,s,s,s,s,s,s,s,14,s,s,B.a4,s,1.45,!0,s,s,s,s,s,s,s,s),B.L,s,s),B.az,A.c4(B.fM,A.a([t.agK("Full bongo love song ABAB",d),t.agK("Mix: group vs private jet \u2014 which flies?",d),t.agK("Song from John 3:16 + matching verses",d),t.agK("Fix my rhyme \u2014 paste your lines",d)],v),B.bx,8,8)],v),B.m,s,B.b9,B.j,0,B.p),s),!1))}else{v=t.r?1:0
w.push(new A.nC(D.bn2,A.WB(new A.ob(new C.dWv(t,d),u+v,!0,!0,!0,0,A.rD(),s)),s))}return A.vd(0,s,B.q,t.e,B.y,s,s,A5.a98,s,s,!1,s,B.ah,!1,w)},
csc(d){var w=this.as
w===$&&A.c()
return A.c6(w,new C.dWK(this,d),null)},
cse(d){var w,v=this,u=null,t=A.m(14),s=v.r?u:new C.dWM(v),r=B.w.j(d?0.35:0.06),q=A.m(14),p=A.I(B.ba.j(0.35),B.r,1),o=v.gaor()
o=o==null?u:o.c
o=A.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,B.Ih,u,u,u)
w=v.gaor()
w=w==null?u:w.b
if(w==null)w="Style"
w=A.D(A.d(w,u,u,u,u,u,u,A.l(u,u,d?B.c:B.bh,u,u,u,u,u,u,u,u,12,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(u,A.A(A.a([o,B.ab,w,A.W(v.w?B.Mt:B.qJ,B.ba,u,u,u,20)],x.p),B.m,u,B.e,B.j,0,u,u),B.f,u,u,new A.o(r,u,p,q,u,u,B.n),u,u,u,u,B.ol,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.af)},
atw(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=A.a([B.aZ,B.aU],x.O)
break
case 1:w=A.a([B.bj,B.cu],x.O)
break
case 2:w=A.a([B.bA,B.aE],x.O)
break
default:w=n}v=m?6:0
u=A.m(14)
t=A.m(14)
s=this.r?n:new C.dWt(this,d)
r=A.m(14)
w=m?new A.a7(B.a3,B.a7,B.x,w,n,n):n
if(m)q=n
else q=B.w.j(g?0.3:0.05)
p=A.d(f,n,n,n,n,n,n,B.Ih,n,n,n)
if(m)o=B.c
else o=g?B.ad:B.bh
return A.D(A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.df(n,A.v(A.a([p,A.d(e,n,n,n,n,n,n,A.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),B.m,n,B.e,B.j,0,B.p),n,n,B.bb,new A.o(q,n,n,r,n,w,B.n),B.a1,n,n,n,B.jp,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),B.f,n,v,n,n,n,n,n,B.af),1)},
csf(d,e){var w,v,u,t=this,s=null,r=t.x===D.BX?t.z:t.Q,q=A.m(20)
if(r===d.a)r=B.ba.j(e?0.25:0.15)
else r=B.w.j(e?0.2:0.04)
w=A.m(20)
v=t.r?s:new C.dWN(t,d)
u=A.d(d.c,s,s,s,s,s,s,B.Sh,s,s,s)
return A.aF(!1,B.a1,!0,q,A.aK(!1,w,!0,new A.C(B.fG,A.A(A.a([u,B.d8,A.d(d.b,s,s,s,s,s,s,A.l(s,s,e?B.c:B.bh,s,s,s,s,s,s,s,s,10,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.m,s,B.e,B.Q,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),B.f,r,0,s,s,s,s,s,B.af)},
agK(d,e){var w=null,v=A.d(d,w,w,w,w,w,w,E.a6L,w,w,w),u=B.aE.j(e?0.2:0.1)
return A.mx(w,u,v,w,this.r?w:new C.dWE(this,d),w,w,w,w)},
bDv(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=A.m(22),o=d?B.M.j(0.95):B.c,n=A.I(B.aE.j(0.2),B.r,1),m=x.p,l=A.a([],m)
if(q>0)l.push(new A.C(F.agF,A.d("$"+B.k.aa(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,A.l(r,r,B.aM.j(0.85),r,r,r,r,r,r,r,r,9,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=A.l(r,r,d?B.c:B.bh,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.BY?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=A.D(A.aL(r,B.T,!1,r,!0,B.q,r,A.aM(),w,r,r,r,r,r,2,A.bo(r,B.ex,r,B.h5,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.l(r,r,d?B.c_:B.hE,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),B.y,!0,r,!0,r,!1,r,B.ai,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.dWq(s),r,!1,r,r,!1,r,!0,r,B.a8,r,r,r,r,r,r,r,r,r,r,r,v,!0,B.a5,r,B.am,r,r,r,r),1)
u=s.r
t=u?r:new C.dWr(s)
l.push(A.A(A.a([v,new A.I4(w,B.aE,r),A.aF(!1,B.a1,!0,r,A.aK(!1,r,!0,A.ex(u?D.e0i:D.bGJ,r,D.aYf,42,r,42),B.cL,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),B.f,r,0,r,r,B.cL,r,r,B.af)],m),B.dC,r,B.e,B.j,0,r,r))
return A.p(r,A.v(l,B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,n,p,r,r,B.n),r,r,r,B.uT,B.aff,r,r,r)}}
C.aK5.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.Uh.prototype={
ad(){var w=this
return A.E(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.Yw.prototype={
T(){return new C.ayY(null,null)},
bdC(){return this.f.$0()}}
C.ayY.prototype={
a_(){var w,v=this,u=null
v.a1()
w=A.bj(u,D.blr,u,1,u,v)
w.cp(0)
v.d!==$&&A.aO()
v.d=w
w=A.bj(u,B.pi,u,1,u,v)
w.f6(0,!0)
v.e!==$&&A.aO()
v.e=w
w=A.bj(u,B.l1,u,1,u,v)
w.cG(0)
v.f!==$&&A.aO()
v.f=w
w=A.bj(u,B.wY,u,1,u,v)
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
w.bqY()},
c2W(){var w=this.d
w===$&&A.c()
w.er(0).bz(new C.dag(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(A.aI(d,B.bS,x.w).w.a.a-32,360),h=B.w.j(0.82),g=k.gc2V(),f=x.l,e=J.e0(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&A.c()
e[v]=new A.Cz(new C.dah(k,v,d),j,w,j)}f=A.B(e,f)
w=k.d
w===$&&A.c()
u=A.m(28)
t=A.I(B.c.j(0.22),B.r,1.5)
s=A.a([new A.ad(2,B.G,B.aJ.j(0.35),B.J,40),new A.ad(0,B.G,B.aI.j(0.25),B.fK,28)],x.V)
r=k.e
r===$&&A.c()
q=k.r
q===$&&A.c()
q=A.c6(new A.h2(A.a([r,q],x.U)),new C.dai(k),j)
r=A.nB(B.jg,D.fl6,new C.daj())
p=A.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,A.l(j,j,B.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,B.cs,j,1.45,!0,j,j,j,j,j,j,j,j),B.L,j,j)
o=x.p
n=A.A(A.a([k.aWH(B.kd,"Resets in 24h"),B.ab,k.aWH(B.px,"Help Topics ready")],o),B.m,j,B.b9,B.j,0,j,j)
m=A.a([],o)
k.a.toString
l=B.c.j(0.35)
m.push(A.D(A.dW(D.ffR,new C.dak(k),A.dd(j,j,j,j,j,j,j,j,j,B.ad,j,j,B.m7,j,new A.b7(A.m(14),B.Y),new A.az(l,1,B.r,-1),j,j,j,j)),1))
k.a.toString
m.push(B.aw)
k.a.toString
l=A.m(14)
m.push(A.D(A.bJ(D.fkX,g,A.bk(B.aI,j,j,6,B.c,j,B.m7,B.aI.j(0.5),new A.b7(l,B.Y),j,j,j)),1))
f.push(A.av(A.aE(j,A.c6(w,new C.dal(k),A.p(j,A.v(A.a([q,B.az,r,B.S,p,B.P,n,B.bu,A.A(m,B.m,j,B.e,B.j,0,j,j)],o),B.m,j,B.e,B.Q,0,B.p),B.f,j,j,new A.o(j,j,t,u,s,D.bPd,B.n),j,j,j,j,A6.agx,j,j,i)),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.dam(),j,j,j,j,j,j,!1,B.a9),j,j,j))
return A.aF(!1,B.a1,!0,j,A.aE(j,new A.an(B.W,j,B.aa,B.q,f,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,B.a9),B.f,h,0,j,j,j,j,j,B.af)},
aWH(d,e){var w=null,v=B.c.j(0.08),u=A.m(20),t=A.I(B.c.j(0.12),B.r,1)
return A.p(w,A.A(A.a([A.W(d,B.aJ,w,w,w,13),B.eb,A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.fG,w,w,w)}}
C.aIZ.prototype={
aQ(){this.aY()
this.aW()
this.dI()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdF())
w.b2$=null
w.a2()}}
C.MR.prototype={}
C.pA.prototype={}
C.ap3.prototype={
T(){return new C.aCn(A.a([],x.E),A.a([],x.s))}}
C.aCn.prototype={
gaoP(){return B.k.D(A.Kg(this.a.c.a,new C.e6b(this)),0,1/0)},
a6Z(){var w,v=this,u=v.d,t=v.gaoP()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)A.qz(u.a,t,!0,!1)},
IF(d,e){var w,v,u,t=this,s=t.gaoP(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gaoP()
if(w<v-0.005)A.hdp(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)A.qz(u.a,w,!0,!1)
A.qz(t.a.c.a,w,!0,!1)
A.Ah(!0,!1,w,t.a.c.a)},
a_(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a1()
$.aU.c0$.push(o)
w=$.HJ+1
$.HJ=w
if(w===1){w=$.h_X
if(w!=null)w.$0()}v=$.fLn.h(0,B.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=A.bl(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=A.bl(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=A.lB(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,B.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=A.aNw(u,B.k.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new A.v5(w,u,r,q,s.e,p)}o.d=t}o.Od()
o.a6Z()
$.aU.x1$.push(new C.e6S(o))
o.Q=A.dG(B.nz,new C.e6T(o))
o.as=A.dG(B.fP,new C.e6U(o))},
q(){var w=this,v=w.Q
if(v!=null)v.a9(0)
v=w.as
if(v!=null)v.a9(0)
$.aU.hA(w)
C.hu_()
w.a2()},
cum(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new A.R(Date.now(),0,!1)
v=p.r
if(!C.a6A(v,w)){if(C.fLp(p,q.e)){q.m(new C.e6A(q,p))
q.xj(!1,!0,!0)}else if(q.c!=null)q.m(new C.e6B())
return}if(!C.c91(v.c?v.bQ():v)){q.m(new C.e6C(p))
q.aWP(!1)
return}u=p.gBK()
if(u<=0)return
t=w.cX(A.c_(A.bx(w),A.bG(w),A.bQ(w),12,0,0,0,0))
s=C.fLq(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.m(new C.e6D())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(B.d.b8(q.e,new C.e6E(r))){q.m(new C.e6F(p,w,u))
return}q.m(new C.e6G(q,p,u,w))
q.avS(new A.d1(r,p.a,u,B.fA,B.fb,"Clock-in daily earnings (local)",null,null,B.ck,w))},
iK(d){if(d===B.fs)this.DZ()},
Od(){var w,v,u,t,s,r,q,p=this.d
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
q=new A.v5(u,t,s,r,v.e,q)
u=q}w.x=u},
QR(d){return this.ct1(d)},
ct1(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$QR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.Od()
t.IF(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return A.b(x.r.b(s)?s:A.dR(s,x.H),$async$QR)
case 3:case 1:return A.h(u,v)}})
return A.i($async$QR,v)},
DZ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$DZ=A.e(function(d,e){if(d===1){s.push(e)
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
return A.b(H.z_(q.w,k,l,j,m,!1,n),$async$DZ)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.m(new C.e6v(q,p))
q.QR(!1)}w=8
return A.b(q.IR(),$async$DZ)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=A.a9(h)
$.am.$1("[growth income] pull wallet: "+A.t(o))
w=9
return A.b(q.IR(),$async$DZ)
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
return A.i($async$DZ,v)},
MG(d){return this.bxM(d)},
bxL(){return this.MG(null)},
bxM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$MG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return A.b(A.ay(),$async$MG)
case 3:s=f
r=B.a.i(t.a.c.a.toLowerCase())
q=A.d9(t.w,x.N)
r=s.rJ("ngmy_gi_credited_txn_ids_"+r)
q.v(0,r==null?A.a([],x.s):r)
j.a=0
p=A.a([],x.s)
o=d==null?null:A.ku(d,A.S(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,A.K)(r),++m){l=r[m]
k=l.a
if(q.t(0,k))continue
if(o!=null&&!o.t(0,k))continue
if(l.d===B.fq&&l.x===B.ck&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.m(new C.e6c(j,t,i))
q.v(0,p)
r=A.B(q,A.a3(q).k("cl.E"))
t.w=r
w=4
return A.b(A.ap5(t.a.c.a,r),$async$MG)
case 4:t.avp(!1,!0)
r=t.c
if(r!=null)r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Balance updated: +$"+A.dz(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$MG,v)},
IR(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$IR=A.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=A.S(a2).k("a2<1>")
a4=A.B(new A.a2(a2,new C.e6w(),a3),a3.k("H.E"))
a5=a4
a6=A.a([],x.s)
w=J.ac(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=A.S(a2).k("J<1,n>")
e=A.B(new A.J(a2,new C.e6x(),a3),a3.k("aj.E"))
q=e
w=9
return A.b(A.lh("transactions","id,status",null,null,null,A.E(["id",q],x.N,x.j),null,!0,null,null,!1,B.bG),$async$IR)
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
j=B.d.be(r.e,new C.e6y(l))
if(j<0)continue
i=r.e[j].x
if(J.y(k,1))a0=B.ck
else a0=J.y(k,2)?B.jZ:B.ds
h=a0
if(!J.y(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===B.ds&&h===B.ck&&a3[j].d===B.fq)J.cf(a6,l)
if(i===B.ds&&h===B.jZ&&r.e[j].d===B.eK){g=r.d
if(g!=null){r.IF(g.d+r.e[j].c,!1)
r.avp(!1,!0)}}}}if(o&&r.c!=null)r.m(new C.e6z())
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
return A.b(r.MG(a6),$async$IR)
case 13:w=11
break
case 12:w=14
return A.b(r.bxL(),$async$IR)
case 14:case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$IR,v)},
OP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$OP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return A.b(A.uo(i.a,i),$async$OP)
case 3:h=e
if(t.c==null){w=1
break}t.m(new C.e6g(t,h))
t.Od()
t.a6Z()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return A.b(H.z_(s[0],p,q,o,r,!0,i),$async$OP)
case 4:i=e.a
n=i[4]
m=A.bl(i[2],!0,x.o)
l=i[5]
t.w=A.bl(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.Od()
t.a6Z()
k=C.fLp(n,m)
if(k)t.IF(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.Z&&s.az>0
else s=!0
j=A.h0G(n,m,new A.R(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.Od()
if(t.c==null){w=1
break}t.m(new C.e6h(t,n,m,l))
if(i){t.xj(!1,!0,!0)
if(j==="reset"){A.h_w(t.a.c.a)
i=t.c
if(i!=null)A.h_z(i,null)}else if(j==="warn2"){A.h_x(t.a.c.a)
i=t.c
if(i!=null)C.h_A(i)}}else if(k)t.xj(!1,!0,!0)
else t.QR(!1)
case 1:return A.h(u,v)}})
return A.i($async$OP,v)},
xj(d,e,f){return this.cdb(d,e,f)},
avp(d,e){return this.xj(d,!1,e)},
aWP(d){return this.xj(!1,d,!1)},
cdb(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$xj=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new A.R(Date.now(),0,!1).a5()
r=t.a.c.a
q=t.e
p=t.f
w=3
return A.b(A.r9(r,o,q,!1,t.w,s,p),$async$xj)
case 3:p=t.a.c.a
q=t.e
r=t.f
A.HO(t.w,p,q,s,o,r)
if(f)t.QR(d)
case 1:return A.h(u,v)}})
return A.i($async$xj,v)},
c3a(){this.m(new C.e6p())
this.avp(!1,!0)},
adb(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===B.ck&&A.rB(d)){w=r.a
w.f.$1(new A.d1(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.c8Y(q,d)
v=q.d=A.Kg(r.a.c.a,new C.e6m(r))
r.at=r.a.c.d=v
A.qz(q.a,v,!0,!1)
if(r.c!=null)r.m(new C.e6n(r,d))
r.xj(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new A.d1(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===B.ds
if(w&&d.d===B.fq)s=!1
else if(w&&d.d===B.eK){r.IF(q.d-d.c,!0)
s=!0}else{C.c8Y(q,d)
w=d.d
s=w===B.eK||w===B.jC
r.IF(q.d,s)}r.m(new C.e6o(r,d))
w=d.d
r.xj(s,e,w===B.eK||w===B.jC||d.x===B.ck||w===B.fA)},
avS(d){return this.adb(d,!0,!1)},
aXM(d,e){return this.adb(d,!0,e)},
aXL(d,e){return this.adb(d,e,!1)},
c66(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.hXN(u,e,d)){v.lN("This plan is already active.")
return}w=A.hcW(u.a,d,e)
if(C.hUe(u.a,v.e,w)){v.lN("You already own this plan.")
return}if(u.d<g){v.lN("Insufficient balance. Add funds in the Wallet tab first.")
return}v.m(new C.e6q(v))
v.m(new C.e6r(v,u,new A.v5(d,e,0.0286,new A.R(Date.now(),0,!1),0,0)))
v.avS(new A.d1(w,u.a,g,B.jC,B.fb,"Direct investment buy: "+d,null,null,B.ck,new A.R(Date.now(),0,!1)))
v.m(new C.e6s(v))
v.lN("Plan purchased: "+d)},
lN(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
Zj(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ht(s,new C.am4(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$Zj)
case 3:w=4
return A.b(t.OP(),$async$Zj)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zj,v)},
adG(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$adG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ht(s,new C.agT(r,A.a([r],x.d9),B.Pm,t.a.d,t.gaXK(),t.gaWO(),null),!1,null,x.X),$async$adG)
case 3:case 1:return A.h(u,v)}})
return A.i($async$adG,v)},
adE(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$adE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ht(s,new C.ajG(r,t.a.d,t.e,t.gaXK(),t.gaWO(),new C.e6u(t),null),!1,"LocalGrowthGameCenter",x.X),$async$adE)
case 3:case 1:return A.h(u,v)}})
return A.i($async$adE,v)},
abc(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$abc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new A.R(s,0,!1)
w=C.fLp(j,t.e)?3:4
break
case 3:w=5
return A.b(t.aWP(!0),$async$abc)
case 5:case 4:if(j.x==null){t.lN("Choose an investment plan first, then come back to clock in.")
t.m(new C.e6i(t))
w=1
break}if(A.mm(r)===6||A.mm(r)===7){t.lN("Clock-in opens Monday through Friday.")
w=1
break}if(!C.h0H(r)){t.lN("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a6A(q,r)&&j.fy>0){t.lN("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!A.aOe(q,r))if(!A.aOe(j.fr,r)){q=A.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,A.K)(p),++n){m=p[n]
if(B.a.i(m.b.toLowerCase())===B.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new A.aEg(m.y,l,m.a))}}q=A.hcn(q,r)}else q=p
else q=p}else q=!1
if(q){t.lN("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.lN("You are already clocked in for today.")
w=1
break}k=C.hvr(r)
q=j.a
t.m(new C.e6j(j,r,k))
t.aXL(new A.d1("local_clockin_manual_"+q+"_"+s,j.a,0,B.fA,B.fb,"Clock-in session started (local)",null,null,B.ck,r),!1)
t.lN("Clock-in started. Keep Growth Income open for today.")
case 1:return A.h(u,v)}})
return A.i($async$abc,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===B.H?B.iZ:B.pd
if(l.d==null)return A.ei(B.km,j,!0)
w=x.o
v=A.V(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=B.a.i(l.a.c.a.toLowerCase())
u=$.fo1
u=u==null?k:u.$0()
u=J.aW(u==null?B.i0:u)
while(u.C()){t=u.gU(u)
q=t.a
if(q.length===0||v.ah(0,q)||A.rB(t))continue
if(B.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(A.ds(o.toLowerCase(),"clock-in",0))continue
v.n(0,q,t)}w=A.B(new A.bc(v,v.$ti.k("bc<2>")),w)
v=l.e
B.d.v(w,new A.a2(v,new C.e6K(),A.S(v).k("a2<1>")))
B.d.b1(w,new C.e6L())
v=l.d
v.toString
u=C.hK0(l.a.c)
t=l.d
t.toString
t=A.ei(new C.akx(t,l.a.e,l.z,l.gc65(),l.aRH(),D.fAI),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=A.ei(new C.azL(l.aRH(),q,n,o,w,new C.e6M(l),l.gc8b(),new C.e6N(l),D.fAJ),j,!0)
m=A.aI(d,k,x.w).w
n=l.y
return new A.Vc(n,new C.e6O(l),A.aF(!1,B.a1,!0,k,new A.a6(1/0,m.a.b,new A.an(B.W,k,B.aa,B.q,A.a([A.bY(0,A.ei(k,j,!0),0,0,0),A.bY(0,A.bp(!1,[new C.azK(v,u,w,l.gbYg(),new C.e6P(l),new C.e6Q(l),new C.e6R(d),l.gc91(),l.gc8Y(),D.fAH),t,o][n],!0,!1,B.ag,!0,!0),0,0,0),A.ao(0,l.bA3(),k,k,0,0,k,k)],x.p),k),k),B.f,j,0,k,k,k,k,k,B.af),k)},
aRH(){var w=null,v=A.a([D.eH.j(0.24),B.M.j(0.72)],x.O)
return A.hm(A.aK(!1,w,!0,A.p(B.A,D.bLc,B.f,w,w,new A.o(w,w,A.I(D.eH.j(0.38),B.r,1),w,A.a([new A.ad(0,B.G,D.eH.j(0.18),B.J,16)],x.V),new A.a7(B.ax,B.aC,B.x,v,w,w),B.a6),w,40,w,w,w,w,w,40),B.cL,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e6f(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bA3(){var w=null,v=A.m(27),u=A.I(B.av.j(0.45),B.r,1),t=A.a([new A.ad(0,B.G,B.w.j(0.5),B.eT,24),new A.ad(-2,B.G,B.av.j(0.12),B.J,18)],x.V)
return new A.C(B.Lk,A.bp(!0,A.av(new A.cU(D.aWy,A.p(w,A.cm(new C.e6d(this)),B.f,w,w,new A.o(w,w,u,v,t,D.bOH,B.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,B.ag,!0,!1),w)},
bZV(d){var w=null,v=this.y===d,u=D.cRJ[d],t=u.b,s=u.a,r=""+d,q=x.W
return A.D(A.dr(w,!0,w,A.aE(B.c5,A.rh(A.q1(v?A.W(s,D.aar,new A.cz("on"+r,q),w,w,21):A.v(A.a([A.W(s,B.c.j(0.62),w,w,w,19),B.bz,A.d(t,w,1,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,new A.cz("off"+r,q),B.b9,B.j,0,B.p),B.ir,A.ry(),B.bb,B.bb,A.a0x())),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e6l(this,d),w,w,w,w,w,w,!1,B.a9),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,B.c1,w),1)}}
C.azK.prototype={
bX6(d){return C.fLq(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.M(d)
w=B.c.j(0.58)
v=f.e
u=A.S(v).k("a2<1>")
u=A.oZ(new A.a2(v,new C.deK(),u),3,u.k("H.E"))
t=A.B(u,A.a3(u).k("H.E"))
v=f.c
s=v.x
r=new A.R(Date.now(),0,!1)
q=v.f
p=C.a6A(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.h0H(r)
m=v.gBK()
l=A.a([D.eH.j(0.24),B.M.j(0.72)],x.O)
k=A.I(D.eH.j(0.38),B.r,1)
j=x.V
i=A.a([new A.ad(0,B.G,D.eH.j(0.18),B.J,16)],j)
l=A.aK(!1,e,!0,A.p(B.A,A.W(B.hX,D.eH,e,e,e,19),B.f,e,e,new A.o(e,e,k,e,i,new A.a7(B.ax,B.aC,B.x,l,e,e),B.a6),e,38,e,e,e,e,e,38),B.cL,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=A.m(14)
k=A.m(14)
j=A.a([new A.ad(0,B.G,B.b4.j(0.45),B.cJ,16)],j)
h=A.m(12)
g=x.p
j=A.bLP(!1,l,"GROWTH INCOME",A.aK(!1,i,!0,new A.a6(44,44,new A.an(B.W,e,B.aa,B.f,A.a([A.p(B.A,A.p(B.A,D.bDQ,B.f,e,e,new A.o(B.io.j(0.78),e,e,h,e,e,B.n),e,36,e,e,e,e,e,36),B.f,e,e,new A.o(e,e,e,k,j,D.bQ8,B.n),e,42,e,e,e,e,e,42),A.ao(e,A.p(B.A,D.bKh,B.f,e,e,new A.o(B.cq,e,A.I(D.acJ,B.r,2),e,e,e,B.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.h3h(B.hf,new C.deL(),k)
k=A.A(A.a([A.D(C.h3g(new C.deM(f,B.qk,n),new A.R(Date.now(),0,!1),h,k),1),B.nW,A.D(new A.ua(new C.deN(f,B.qk),e,new A.h2(A.a([$.ye(),$.a1B()],x.U)),e),1)],g),B.m,e,B.e,B.j,0,e,e)
h=f.c_5(B.qk,D.eH)
v=A.D(f.cqD("Total Profit","$"+A.dz(v.e),B.qk),1)
u=u?e:s.b
return A.ei(A.cd(A.v(A.a([j,B.S,k,B.ac,new C.azJ(f.d,m,q,p,n,o,D.eH,f.gbX5(),f.f,e),B.ac,h,B.S,A.A(A.a([v,B.nW,A.D(f.b30("Total Investment","$"+A.dz(u==null?0:u),B.qk,f.r),1)],g),B.m,e,B.e,B.j,0,e,e),B.S,f.bX2(d,t,D.eH,w)],g),B.aj,e,B.e,B.j,0,B.p),B.q,e,B.y,e,B.XE,e,e,B.ah),D.acJ,!0)},
avo(d,e,f,g,h){var w=null,v=A.m(h),u=A.I(B.c.j(0.09),B.r,1),t=A.a([new A.ad(0,B.G,B.w.j(0.4),B.dn,18)],x.V)
return A.p(w,A.bv(A.m(h-1),new A.an(B.W,w,B.aa,B.q,A.a([A.bY(0,A.bX(w,new A.o(w,w,w,w,w,new A.bR(f,1.15,B.x,w,0,A.a([e.j(0.22),e.j(0)],x.O),w,w),B.n),B.bd),0,0,0),new A.C(g,d,w)],x.p),w),B.aq),B.f,w,w,new A.o(w,w,u,v,t,D.bP6,B.n),w,w,w,w,w,w,w,w)},
aWN(d,e,f,g){return this.avo(d,e,f,B.ag,g)},
b4Q(d,e,f,g,h,i,j){var w=null,v=A.ao(-14,A.W(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=A.m(30),s=A.I(f.j(0.4),B.r,1),r=x.p,q=this.aWN(new A.a6(w,80,new A.an(B.W,w,B.aa,B.q,A.a([v,new A.C(D.bnw,A.v(A.a([A.p(w,A.A(A.a([A.W(e,f,w,w,w,15),B.eb,A.d(h.toUpperCase(),w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.agM,w,w,w),B.b3,A.f4(B.a3,A.d(i,w,1,w,w,w,w,A.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,B.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.eg)],r),B.F,w,B.e,B.j,0,B.p),w)],r),w),w),f,B.kU,22)
if(g==null)return q
return A.aK(!1,A.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
c_5(d,e){var w,v,u,t,s=null,r=A.I(e.j(0.55),B.r,2),q=e.j(0.12),p=x.p,o=A.a([],p)
for(w=0;w<3;++w){v=new A.aV(3,3)
o.push(A.p(s,s,B.f,s,s,new A.o(e,s,s,new A.bs(v,v,v,v),s,s,B.n),s,D.cDn[w],s,D.br_,s,s,s,5))}r=A.p(s,A.A(o,B.dC,s,B.b9,B.j,0,s,s),B.f,s,s,new A.o(q,s,r,s,s,s,B.a6),s,42,s,s,s,s,s,42)
q=A.D(A.v(A.a([D.fhv,B.bz,A.A(A.a([A.p(s,s,B.f,s,s,new A.o(e,s,s,s,A.a([new A.ad(0,B.G,e,B.J,6)],x.V),s,B.a6),s,7,s,s,s,s,s,7),B.bo,new A.dm(1,B.ci,A.d("Live \xb7 real-time statistics",s,1,B.a2,s,s,s,A.l(s,s,B.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),B.m,s,B.e,B.j,0,s,s)],p),B.F,s,B.e,B.j,0,B.p),1)
o=A.m(16)
v=A.m(16)
u=B.w.j(0.3)
t=A.I(e.j(0.45),B.r,1.2)
return this.avo(A.A(A.a([r,D.eGm,q,B.ab,A.aK(!1,o,!0,A.p(s,A.v(A.a([A.W(B.os,e.j(0.95),s,s,s,21),B.u9,A.d("PLAY",s,s,s,s,s,s,A.l(s,s,B.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,B.I,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),B.m,s,B.b9,B.j,0,B.p),B.f,s,s,new A.o(u,s,t,v,s,s,B.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),B.m,s,B.e,B.j,0,s,s),e,B.a3,B.Xb,26)},
b30(d,e,f,g){var w,v=null,u=B.a.t(d.toLowerCase(),"profit"),t=u?B.cq:B.aX,s=A.p(v,v,B.f,v,v,new A.o(t,v,v,D.aUM,v,v,B.n),v,v,v,B.mQ,v,v,v,5),r=x.p
r=A.a([s,B.bf,A.D(A.v(A.a([A.A(A.a([A.W(u?B.tv:B.xN,t,v,v,v,14),B.eb,new A.dm(1,B.ci,A.d(d,v,1,B.a2,v,v,v,A.l(v,v,B.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),B.m,v,B.e,B.j,0,v,v),B.ao,A.f4(B.a3,A.d(e,v,1,v,v,v,v,D.ePg,v,v,v),B.f,B.eg)],r),B.F,v,B.b9,B.j,0,B.p),1)],r)
s=g==null
if(!s)r.push(new A.C(B.af1,A.W(B.en,B.c.j(0.35),v,v,v,v),v))
w=this.aWN(new A.a6(v,66,A.A(r,B.m,v,B.e,B.j,0,v,v),v),t,B.ln,20)
if(s)return w
return A.aK(!1,A.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cqD(d,e,f){return this.b30(d,e,f,null)},
bX2(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.p(m,m,B.f,m,m,new A.o(f,m,m,m,A.a([new A.ad(0,B.G,f,B.J,8)],x.V),m,B.a6),m,9,m,m,m,m,m,9),k=A.d("LIVE ACTIVITY",m,m,m,m,m,m,A.l(m,m,B.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,B.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=B.c.j(0.07),i=A.m(20),h=x.p
i=A.a([A.A(A.a([l,B.a5B,k,B.b3,A.p(m,A.d(""+e.length,m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.f,m,m,new A.o(j,m,m,i,m,m,B.n),m,m,m,m,B.XR,m,m,m)],h),B.m,m,B.e,B.j,0,m,m),B.P],h)
if(e.length===0)i.push(new A.C(B.X_,A.v(A.a([A.W(B.h6,g,m,m,m,30),B.ao,A.d("Nothing yet",m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.bz,A.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),B.L,m,m)],h),B.m,m,B.e,B.j,0,B.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=A.a([],h)
if(w>0)k.push(new A.m6(1,m,m,m,m,B.c.j(0.07),m))
j=e[w]
v=j.d
u=v===B.eK||v===B.jC
t=u?B.jk:D.eH
g=B.c.j(0.5)
v=new A.aV(12,12)
s=A.a([t.j(0.28),t.j(0.08)],l)
r=new A.az(t.j(0.35),1,B.r,-1)
v=A.p(B.A,A.W(u?B.tv:B.vh,t,m,m,m,18),B.f,m,m,new A.o(m,m,new A.bP(r,r,r,r),new A.bs(v,v,v,v),m,new A.a7(B.ax,B.aC,B.x,s,m,m),B.n),m,38,m,m,m,m,m,38)
s=C.hS6(j)
q=C.h4X(j.y)
s=A.v(A.a([new A.x(s,m,B.mt,m,m,m,m,B.a2,m,1,m,m),B.bz,new A.x(q,m,new A.F(!0,g,m,m,m,m,11,B.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.F,m,B.e,B.j,0,B.p)
q=t.j(0.14)
p=new A.aV(20,20)
o=u?"-":"+"
n=A.dz(j.c)
q=A.p(m,new A.x(o+"$"+n,m,new A.F(!0,t,m,m,m,m,13,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),B.f,m,m,new A.o(q,m,m,new A.bs(p,p,p,p),m,m,B.n),m,m,m,m,B.nF,m,m,m)
j=C.hc_(j)
k.push(new A.C(F.La,new A.cn(B.aQ,B.e,B.j,B.m,m,B.p,m,0,A.a([v,B.bf,new A.bE(1,B.bi,s,m),A.v(A.a([q,B.d_,new A.x(j,m,new A.F(!0,g,m,m,m,m,10,B.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.dC,m,B.e,B.j,0,B.p)],h),m),m))
B.d.v(i,k)}return this.avo(A.v(i,B.m,m,B.e,B.j,0,B.p),f,B.b0,D.bnE,26)}}
C.azJ.prototype={
T(){return new C.bfv(null,null)},
cK8(d){return this.z.$1(d)},
cLl(){return this.Q.$0()}}
C.bfv.prototype={
a_(){var w,v=this,u=null
v.a1()
w=A.bj(u,B.pl,u,1,u,v)
w.cG(0)
v.d!==$&&A.aO()
v.d=w
w=A.bj(u,D.bli,u,1,u,v)
w.cG(0)
v.e!==$&&A.aO()
v.e=w
w=A.bj(u,B.uM,u,1,u,v)
v.f!==$&&A.aO()
v.f=w
v.b3Y()},
gb6y(){var w=new A.R(Date.now(),0,!1)
if(A.mm(w)===6||A.mm(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
b3Y(){var w=this,v=w.a,u=v.e||v.f||w.gb6y()
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
v.bW(0)}}},
br(d){this.bE(d)
this.b3Y()},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
w.bre()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gb6y()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=B.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?B.av:g.x
g=g.r?new C.deD(i):h
v=A.m(32)
s=A.m(32)
r=f?D.d6p:D.d6n
q=A.I((f?D.o9:B.b2).j(0.28),B.r,1.4)
p=x.V
o=A.a([new A.ad(0,B.G,(f?B.av:B.ba).j(0.16),B.fK,28)],p)
n=x.p
m=A.a([],n)
if(f)B.d.v(m,A.a([A.ao(h,i.a9M(D.o9,130),h,h,h,-24,-30,h),A.ao(-36,i.a9M(B.av,140),h,h,-28,h,h,h)],n))
else B.d.v(m,A.a([A.ao(h,i.a9M(B.ba,120),h,h,h,-30,-36,h),A.ao(-40,i.a9M(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bY(0,A.e2(A.bv(l,new A.et(A.c6(k,new C.deE(i),h),h),B.aq),!0,h),0,0,0))}if(f){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bY(0,A.e2(A.bv(l,new A.et(A.c6(k,new C.deF(i),h),h),B.aq),!0,h),0,0,0))}l=A.m(999)
k=B.c.j(0.06)
j=A.I(B.c.j(0.16),B.r,1)
m.push(A.ao(h,new A.cU(D.aWE,A.p(h,A.A(A.a([A.p(h,h,B.f,h,h,new A.o(t,h,h,h,A.a([new A.ad(0,B.G,t.j(0.5),B.J,8)],p),h,B.a6),h,8,h,h,h,h,h,8),B.ab,new A.dm(1,B.ci,A.d(u,h,1,B.a2,h,h,h,D.eUC,h,h,h),h)],n),B.m,h,B.e,B.Q,0,h,h),B.f,h,h,new A.o(k,h,j,l,h,h,B.n),h,h,h,h,B.h5,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.h3h(B.hf,new C.deG(),l)
m.push(C.h3g(new C.deH(i,f,t,e,w),new A.R(Date.now(),0,!1),j,l))
return A.aK(!1,v,!0,A.df(h,new A.an(B.W,h,B.aa,B.f,m,h),h,h,B.bb,new A.o(h,h,q,s,o,new A.a7(B.ax,B.aC,B.x,r,h,h),B.n),B.Ak,h,392,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
a9M(d,e){var w=null
return A.e2(A.p(w,w,B.f,w,w,new A.o(w,w,w,w,w,new A.bR(B.A,0.5,B.x,w,0,A.a([d.j(0.22),d.j(0)],x.O),w,w),B.a6),w,e,w,w,w,w,w,e),!0,w)}}
C.b9h.prototype={
aWQ(d,e,f,g){var w=new A.aQ($.X().r,B.ap,null,null,A.a([],x.g)),v=e.a,u=e.b,t=u-f
w.E(new A.b5(v,t))
w.E(new A.cS(v,u,v+f,u))
w.E(new A.cS(v,u,v,u+f))
w.E(new A.cS(v,u,v-f,u))
w.E(new A.cS(v,u,v,t))
w.E(new A.bF())
d.aN(w,g)},
a6(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=a8/2,b0=b3.b,b1=b0/2
for(w=a7.b,v=w*6.283185307179586,u=0;u<16;++u){t=B.k.F(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=B.k.F(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+B.o.F(u,3))+u)+1)/2
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.1+r*0.5).gp(0)
a7.aWQ(b2,new A.u(t*a8,s*b0),2+r*2.2,q)}for(a8=b2.a,b0=w*2,p=a7.e,o=0;o<3;++o){n=B.k.F(b0+o/3,1)
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
if(e>0.6&&f>0.35){h=$.hhw()
g=h.b
a0=g.c
g=g.a.c
h.a6(b2,new A.u(-a0/2,-g.gbb(g)/2))}a8.restore()
break
case 1:$.X()
a0=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
a0.r=p.j(f*0.95).gp(0)
a7.aWQ(b2,new A.u(h,g),3+f*3,a0)
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
C.b9g.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.X(),a4=A.L()
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
a5.j2(0,0.35)
a2=-a1
a3=A.L()
a3.sau(new A.a7(B.a3,B.a7,B.x,A.a([B.c.j(0),B.c.j(0.07),B.c.j(0)],x.O),e,e).aw(0,D.eAf))
a5.aX(new A.aa(-18,a2,18,a2+a1*3),a3)
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
a3=A.by(D.eAM,B.Rq)
u=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
u.r=D.aw2[B.o.F(s,6)].j(k*0.9).gp(0)
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
f=D.aw2[B.o.F(s+i,6)].j(k)
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
C.b9f.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a6.a/2,a1=a6.b/2,a2=new A.u(a0,a1),a3=a0-4,a4=a3-22
$.X()
w=A.L()
w.b=B.ae
w.c=14
v=e.d
w.r=(v?e.r:B.b2).j(0.22).gp(0)
a5.ag(a2,a3-7,w)
w=A.L()
w.b=B.ae
w.c=1.7
w.r=(v?e.f:B.c).j(0.28).gp(0)
a5.ag(a2,a3-1,w)
w=A.L()
w.b=B.ae
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
w=$.X().r
t=x.g
p=new A.aQ(w,B.ap,d,d,A.a([],t))
p.E(new A.kD(A.bU(a2,a4)))
a5.tH(0,p)
p=A.bU(a2,a4)
o=A.L()
o.sau(D.e6P.aw(0,A.bU(a2,a4)))
a5.aX(p,o)
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
a0=A.L()
a1=x.O
w=e.e
a1=v?A.a([e.f.j(0.55),w.j(0.78),e.r.j(0.92)],a1):A.a([w.j(0.22),D.eH.j(0.34),B.cY.j(0.62)],a1)
a0.sau(new A.a7(B.b0,B.b5,B.x,a1,d,d).aw(0,A.bU(a2,a4)))
a5.aN(h,a0)
a0=A.L()
a0.b=B.ae
a0.c=2
a0.r=B.c.j(v?0.28:0.14).gp(0)
a5.aN(h,a0)}s.restore()},
aq(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.azL.prototype={
T(){var w=$.aw()
return new C.azM(new A.ar(B.as,w),new A.ar(B.as,w))},
bdv(d,e){return this.w.$2$cloudRequest(d,e)}}
C.azM.prototype={
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
lN(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
cso(d){this.a.bdv(d,!0)
this.lN("Deposit submitted. Admin will review your payment proof.")
this.m(new C.df3())},
cr9(){var w,v,u=this,t=A.d3(u.d.a.a)
if(t==null||t<=0){u.lN("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
A.ht(w,new C.ao9(v.d,t,u.gcsn(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cyA(){var w,v,u,t,s=this,r=s.d,q=A.d3(r.a.a)
if(q==null||q<=0){s.lN("Enter an amount to withdraw.")
return}if(q<10){s.lN("Minimum withdrawal is $"+A.dz(10)+".")
return}w=s.a.d.d
if(q>w){s.lN("Insufficient balance. You have $"+A.dz(w)+".")
return}w=s.e
v=C.hdn(w.a.a)
if(v.length===0){s.lN("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.bdv(new A.d1("wd_"+1000*Date.now(),s.a.d.a,q,B.eK,B.kj,"Withdrawal to $"+v+" \u2014 Fee: $"+A.dz(u)+" \u2014 You receive: $"+A.dz(q-u),null,null,B.ds,new A.R(Date.now(),0,!1)),!0)
s.lN("Withdrawal submitted \u2014 waiting for admin approval.")
r.bM(0,B.c3)
w.bM(0,B.c3)
s.m(new C.df4())},
cvD(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,A.K)(w),++s){r=w[s]
if(r.x!==B.ck||!this.aTt(r)||A.fSS(r))continue
q=r.d
p=q===B.eK||q===B.jC||q===B.eo
q=r.c
if(p)t+=q
else u+=q}return new A.bmr(u,t)},
B(d){var w,v,u,t=this,s=null,r=t.cvD(),q=t.a.r,p=new A.a2(q,new C.df5(),A.S(q).k("a2<1>")).gM(0)
q=t.a
w=q.c
q=q.x
v=A.a([D.eH.j(0.24),B.M.j(0.72)],x.O)
u=A.I(D.eH.j(0.38),B.r,1)
q=A.bLP(!1,w,"WALLET",A.hm(A.aK(!1,s,!0,A.p(B.A,A.W(U.ajU,D.eH,s,s,s,18),B.f,s,s,new A.o(s,s,u,s,s,new A.a7(B.ax,B.aC,B.x,v,s,s),B.a6),s,40,s,s,s,s,s,40),B.cL,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),s,"Back up wallet",s,s))
v=t.byG(r.a,r.b,p)
u=x.p
w=A.A(A.a([t.aoo(B.vh,"Deposit",0),t.aoo(B.tv,"Withdraw",1),t.aoo(B.h7,"History",2)],u),B.m,s,B.pH,B.j,0,s,s)
return A.ei(A.bp(!1,A.cd(A.v(A.a([q,B.bu,v,B.d6,w,B.d6,A.q1(t.f===2?t.bUa():t.bZz(),B.i6,A.ry(),B.bb,B.bb,A.a0x())],u),B.aj,s,B.e,B.j,0,B.p),B.q,s,B.y,s,D.bpv,s,s,B.ah),!0,!1,B.ag,!0,!0),B.zR,!0)},
byG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.a.i(i.a.e)
if(B.a.t(g,"@")){w=B.a.cI(g,"@")
v=B.a.ap(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+B.a.b_(g,w)}else v=g
w=A.m(26)
u=A.ao(h,i.axw(220,0.1),h,h,h,-60,-70,h)
t=A.ao(-90,i.axw(200,0.07),h,h,h,30,h,h)
s=A.ao(-60,i.axw(150,0.05),h,h,-40,h,h,h)
r=A.m(26)
r=A.bY(0,A.bX(h,new A.o(h,h,A.I(B.c.j(0.18),B.r,1),r,h,h,B.n),B.bd),0,0,0)
q=A.m(6)
p=x.p
q=A.A(A.a([A.p(h,A.b3(h,h,h,new C.b8I(h),B.at),B.f,h,h,new A.o(h,h,h,q,h,D.bRb,B.n),h,28,h,h,h,h,h,38),B.b3,D.fpw],p),B.m,h,B.e,B.j,0,h,h)
o=A.d("Available balance",h,h,h,h,h,h,A.l(h,h,B.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,B.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=A.f4(B.a3,C.aoU(new C.deQ(i),D.eZP,i.a.d.a),B.f,B.eg)
m=A.a([A.D(i.aMo(B.to,"In",d),1),A.D(i.aMo(B.v6,"Out",e),1)],p)
if(f>0){l=B.cR.j(0.22)
k=A.m(99)
j=A.I(B.iy.j(0.6),B.r,1)
m.push(A.p(h,A.d(""+f+" pending",h,h,h,h,h,h,D.eVx,h,h,h),B.f,h,h,new A.o(l,h,j,k,h,h,B.n),h,h,h,h,B.nF,h,h,h))}return new A.fF(1.62,A.bv(w,new A.an(B.W,h,B.aa,B.q,A.a([D.e64,u,t,s,r,new A.C(A4.qD,A.v(A.a([q,B.b3,o,B.bz,n,B.b3,A.A(m,B.m,h,B.e,B.j,0,h,h),B.ao,A.d(v,h,1,B.a2,h,h,h,A.l(h,h,B.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,B.a4,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),B.F,h,B.e,B.j,0,B.p),h)],p),h),B.aq),h)},
axw(d,e){var w=null
return A.p(w,w,B.f,w,w,new A.o(w,w,A.I(B.c.j(e),B.r,22),w,w,w,B.a6),w,d,w,w,w,w,w,d)},
aMo(d,e,f){var w=null,v=B.c.j(0.16)
return A.A(A.a([A.p(w,A.W(d,B.c,w,w,w,13),B.f,w,w,new A.o(v,w,w,w,w,w,B.a6),w,22,w,w,w,w,w,22),B.bo,new A.dm(1,B.ci,A.f4(B.a3,A.d(e+"  $"+A.dz(f),w,w,w,w,w,w,B.nX,w,w,w),B.f,B.eg),w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aoo(d,e,f){var w=null,v=this.f===f,u=v?D.bSv:new A.a7(B.a3,B.a7,B.x,A.a([B.c.j(0.08),B.c.j(0.03)],x.O),w,w),t=A.I(v?B.c.j(0.6):D.eH.j(0.25),B.r,1),s=v?A.a([new A.ad(0,B.G,B.av.j(0.45),B.J,18)],x.V):w
u=A.df(w,A.W(d,v?D.aar:D.eH,w,w,w,26),w,w,B.cp,new A.o(w,w,t,w,s,u,B.a6),B.Eu,w,62,w,w,w,w,62)
return A.aE(B.c5,new A.a6(92,w,A.v(A.a([u,D.eHg,A.d(e,w,w,w,w,w,w,A.l(w,w,v?B.c:B.aR,w,w,w,w,w,w,w,w,12.5,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.deP(this,f),w,w,w,w,w,w,!1,B.a9)},
bZz(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=A.d3(a1.a.a)
if(a2==null)a2=0
w=a0?D.eH:B.cu
v=a2>0
u=new C.df0(e,w)
t=new C.df_()
s=e.f
r=A.m(26)
q=x.O
p=A.a([w.j(0.1),B.t_,B.t_],q)
o=A.I(w.j(0.22),B.r,1)
n=x.V
m=A.a([new A.ad(0,B.G,B.w.j(0.35),B.eT,22)],n)
l=w.j(0.15)
l=A.p(d,A.W(a0?B.vh:B.tv,w,d,d,d,18),B.f,d,d,new A.o(l,d,d,d,d,d,B.a6),d,34,d,d,d,d,d,34)
k=A.D(A.d(a0?"Add money":"Take money out",d,d,d,d,d,d,B.fW,d,d,d),1)
j=B.c.j(0.06)
i=A.m(99)
h=x.p
i=A.A(A.a([l,B.aw,k,A.p(d,A.A(A.a([A.W(B.hX,w,d,d,d,14),A.d("Cash App",d,d,d,d,d,d,A.l(d,d,B.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,B.I,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),B.m,d,B.e,B.Q,0,d,d),B.f,d,d,new A.o(j,d,d,i,d,d,B.n),d,d,d,d,B.kD,d,d,d)],h),B.m,d,B.e,B.j,0,d,d)
l=A.d("$",d,d,d,d,d,d,A.l(d,d,v?w:B.c_,d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=A.a([new A.u0(A.af("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=A.A(A.a([new A.C(B.i7,l,d),B.d8,A.aUt(new A.cU(D.aWX,A.aL(d,B.T,!1,d,!0,B.q,d,A.aM(),a1,w,d,d,d,d,2,A.bo(d,B.ex,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,A.l(d,d,B.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.ai,d,d,k,d,d,B.dT,d,d,d,1,d,d,!1,"\u2022",d,new C.deZ(e),d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,D.f1v,!0,B.L,d,B.am,d,d,d,d),d),d)],h),B.F,d,B.b9,B.j,0,d,d)
a1=v?120:60
a1=A.av(A.df(d,d,d,d,B.bb,new A.o(d,d,d,A.m(99),d,new A.a7(B.a3,B.a7,B.x,A.a([w.j(0),w,w.j(0)],q),d,d),B.n),B.a1,d,3,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+A.dz(10)+" \xb7 admin sends it to your Cash App."
q=A.d(q,d,d,d,d,d,d,A.l(d,d,B.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,B.a4,d,1.35,!0,d,d,d,d,d,d,d,d),B.L,d,d)
l=A.a([],h)
j=a0?D.bWd:D.c9Q
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=A.a([i,B.bu,k,B.ao,a1,B.P,q,B.az,A.A(l,B.m,d,B.e,B.j,0,d,d)],h)
if(!a0){q=B.c.j(0.04)
l=A.W(B.hX,w,d,d,d,d)
k=A.l(d,d,B.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,B.O,d,d,!0,d,d,d,d,d,d,d,d)
l=A.a([B.az,A.aL(d,B.T,!1,d,!0,B.q,d,A.aM(),e.e,d,d,d,d,d,2,A.bo(d,d,d,d,d,d,d,d,!0,new A.b4(4,A.m(16),new A.az(B.c.j(0.08),1,B.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new A.b4(4,A.m(16),new A.az(w,1,B.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.ai,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,B.nb,!0,B.a5,d,B.am,d,d,d,d)],h)
if(v){q=B.c.j(0.04)
k=A.m(16)
B.d.v(l,A.a([B.ac,A.p(d,A.v(A.a([t.$2("Amount","$"+A.dz(a2)),t.$3$color("Fee (15%)","\u2212 $"+A.dz(a2*0.15),B.f9),A.iw(B.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+A.dz(a2*0.85),!0,D.eH)],h),B.m,d,B.e,B.j,0,B.p),B.f,d,d,new A.o(q,d,d,k,d,d,B.n),d,d,d,d,B.j4,d,d,d)],h))}B.d.v(a1,l)}a1.push(B.aO)
q=A.m(18)
l=a0?B.PJ:P.aqK
n=A.a([new A.ad(0,B.G,(a0?B.aZ:B.dR).j(0.45),B.dn,18)],n)
k=a0?e.gcr8():e.gcyz()
j=A.W(a0?B.Mg:B.l9,d,d,d,d,20)
if(a0)i=v?"Deposit $"+A.dz(a2):"Deposit funds"
else i=v?"Withdraw $"+A.dz(a2):"Request withdrawal"
a1.push(new A.a6(d,54,A.bX(A.ln(j,A.d(i,d,d,d,d,d,d,B.oQ,d,d,d),k,A.fm(d,d,B.K,d,d,d,d,d,d,B.c,d,d,d,B.K,new A.b7(A.m(18),B.Y),d,d,d,d,d)),new A.o(d,d,d,q,n,new A.a7(B.a3,B.a7,B.x,l,d,d),B.n),B.bd),d))
return A.p(d,A.v(a1,B.aj,d,B.e,B.j,0,B.p),B.f,d,d,new A.o(d,d,o,r,m,new A.a7(B.b0,B.b5,B.x,p,B.Pf,d),B.n),d,d,new A.cz("form"+s,x.W),d,B.x9,d,d,d)},
bUa(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=A.S(a2).k("a2<1>"),a4=A.B(new A.a2(a2,new C.deT(a0),a3),a3.k("H.E"))
B.d.b1(a4,new C.deU())
w=B.a.i(a0.a.e.toLowerCase())
a2=A.V(x.N,x.o)
a3=$.fo1
a3=a3==null?a1:a3.$0()
a3=J.aW(a3==null?B.i0:a3)
while(a3.C()){v=a3.gU(a3)
u=v.a
if(u.length!==0&&B.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,A.K)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("bc<2>")
a2=A.B(new A.bc(a2,a3),a3.k("H.E"))
r=C.hSF(a2,A.Kg(a0.a.e,new C.deV(a0)))
a2=A.m(24)
a3=A.I(B.c.j(0.07),B.r,1)
v=A.m(99)
u=A.m(99)
q=x.p
u=A.a([A.A(A.a([D.bu5,A.aK(!1,v,!0,A.p(a1,D.eBw,B.f,a1,a1,new A.o(a1,a1,A.I(D.eH.j(0.4),B.r,1),u,a1,a1,B.n),a1,a1,a1,a1,B.m9,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.deW(a0),a1,a1,a1,a1,a1,a1,a1)],q),B.m,a1,B.e,B.j,0,a1,a1),B.S],q)
if(a4.length===0)u.push(new A.C(D.bmf,A.v(A.a([A.W(B.F6,B.c.j(0.25),a1,a1,a1,40),B.S,D.fmg],q),B.m,a1,B.e,B.j,0,B.p),a1))
else{v=A.a([],q)
for(p=A.da(a4,0,A.dJ(a0.r,"count",x.S),A.S(a4).c),o=p.$ti,p=new A.bW(p,p.gM(0),o.k("bW<aj.E>")),o=o.k("aj.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===B.eK||k===B.jC||k===B.eo
if(l===B.ck)i=j?B.cr:D.eH
else i=l===B.ds?B.iy:B.fU
h=j?"-":"+"
l=B.c.j(0.06)
k=i.j(0.14)
g=new A.az(i.j(0.4),1,B.r,-1)
k=A.p(a1,A.W(j?B.tv:B.vh,i,a1,a1,a1,19),B.f,a1,a1,new A.o(k,a1,new A.bP(g,g,g,g),a1,a1,a1,B.a6),a1,42,a1,a1,a1,a1,a1,42)
f=a0.bO5(n)
e=C.h4X(n.y)
d=B.c.j(0.5)
f=A.a([new A.x(f,a1,B.jB,a1,a1,a1,a1,a1,a1,a1,a1,a1),B.bz,new A.x(e,a1,new A.F(!0,d,a1,a1,a1,a1,11,B.a4,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1)],q)
e=n.f
if(B.a.i(e==null?"":e).length!==0){e.toString
d=B.c.j(0.4)
f.push(new A.x(e,a1,new A.F(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,B.a2,a1,1,a1,a1))}if(m!=null&&n.x!==B.jZ)f.push(new A.C(E.afa,new A.EU(B.bE,5,4,B.bx,A.a([a0.aLk("Before",m.b),a0.aLk("After",m.a)],q),a1),a1))
m=A.v(f,B.F,a1,B.e,B.j,0,B.p)
f=n.c
f=f===0?"\u2014":h+"$"+A.dz(f)
e=i.j(0.14)
d=new A.aV(99,99)
n=C.hc_(n)
v.push(A.p(a1,new A.cn(B.aQ,B.e,B.j,B.m,a1,B.p,a1,0,A.a([k,B.bf,new A.bE(1,B.bi,m,a1),B.ab,A.v(A.a([new A.x(f,a1,new A.F(!0,i,a1,a1,a1,a1,15,B.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.au,A.p(a1,new A.x(n,a1,new A.F(!0,i,a1,a1,a1,a1,9.5,B.I,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.f,a1,a1,new A.o(e,a1,a1,new A.bs(d,d,d,d),a1,a1,B.n),a1,a1,a1,a1,B.AD,a1,a1,a1)],q),B.dC,a1,B.e,B.j,0,B.p)],q),a1),B.f,a1,a1,new A.o(a1,a1,new A.bP(B.Y,B.Y,new A.az(l,1,B.r,-1),B.Y),a1,a1,a1,B.n),a1,a1,a1,a1,B.uO,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(A.hb(D.bIu,A.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,B.cc,a1,a1,a1),new C.deX(a0),A.fu(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.eH,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
B.d.v(u,v)}return A.p(a1,A.v(u,B.aj,a1,B.e,B.j,0,B.p),B.f,a1,a1,new A.o(B.t_,a1,a3,a2,a1,a1,B.n),a1,a1,D.fAC,a1,D.bop,a1,a1,a1)},
aLk(d,e){var w=null,v=B.c.j(0.05),u=A.m(7),t=A.I(B.c.j(0.1),B.r,1),s=A.dp(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=A.dz(e)
return A.p(w,A.WM(A.dp(A.a([s,A.dp(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.eZZ,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.mT,w,w,w)},
aTt(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(B.a.t(w,"clock-in session started"))return!1
v=d.d
if(v===B.eo)return d.c>0
if(A.rB(d))return!1
if(v===B.fq||v===B.eK)return!0
if(v===B.o1||v===B.jC)return!0
if(v===B.k_)return!0
if(v===B.fA)return B.a.t(w,"clock-in")||d.c>0
return!1},
bO5(d){var w,v=d.f
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
C.b8I.prototype={
a6(d,e){var w,v,u,t
$.X()
w=A.L()
w.r=D.b6l.j(0.55).gp(0)
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
C.bt5.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null
for(w=a4.b,v=this.b,u=v*6.283185307179586,t=a4.a,s=0+t,r=x.O,q=a3.a,p=0;p<3;++p){o=w*(0.2+0.25*p)+Math.sin(u+p*2)*14-40
n=new A.aa(0,o,s,o+80)
m=[B.ba,B.fY,B.bs][p]
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.sau(new A.a7(B.b0,B.b5,B.x,A.a([m.j(0),m.j(0.1),m.j(0)],r),a2,a2).aw(0,n))
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
$.X()
r=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.55*g).gp(0)
l=r.H()
q.drawCircle(j,h,0.7+(i-s)*1.5,l)
l.delete()
if(B.o.F(k,9)===0){f=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
f.r=B.of.j(0.35*g).gp(0)
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
t=B.of.j(0.5*Math.sin(f*3.141592653589793))
a1=new A.kk(new A.eo("z",a2,a2,B.cO,a2,a2,a2,a2,a2,a2,new A.F(!0,t,a2,a2,a2,a2,12+f*14,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),B.a5,B.ch,new A.jl(1),a2,a2,a2,a2,B.cd,a2)
a1.eO()
a1.a6(a3,new A.u(u+Math.sin(f*6.283185307179586+k)*12+k*8,w-f*90))}},
aq(d){return d.b!==this.b}}
C.aJe.prototype={
aQ(){this.aY()
this.aW()
this.dI()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdF())
w.b2$=null
w.a2()}}
C.bv1.prototype={}
C.aYl.prototype={}
C.Zj.prototype={
T(){return new C.aCa(new A.ar(B.as,$.aw()))},
cMv(d,e){return this.d.$2(d,e)}}
C.aCa.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
aWU(){var w=this,v=B.a.i(w.d.a.a),u=A.af("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.m(new C.e0r(w))
return}u=w.c
u.toString
A.a5(u,!1).N(null)
w.a.cMv(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=A.aI(a0,B.eC,e).w
e=A.aI(a0,B.e7,e).w
w=A.av(A.p(f,f,B.f,f,f,new A.o(B.b6,f,f,A.m(2),f,f,B.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=A.A(A.a([A.p(f,D.bHU,B.f,f,f,new A.o(f,f,f,f,A.a([new A.ad(0,B.G,B.fg.j(0.5),B.J,18)],v),D.amt,B.a6),f,52,f,f,f,f,f,52),B.ew,A.D(A.v(A.a([D.fap,B.bz,A.d(g.a.c,f,1,B.a2,f,f,f,B.oO,f,f,f)],u),B.F,f,B.e,B.j,0,B.p),1),A.aH(f,f,f,f,D.bII,f,f,f,new C.e0u(a0),f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,f,f)
s=g.b2K(B.eR,"You",B.cu)
r=B.aM.j(0.15)
q=A.m(99)
q=A.A(A.a([s,new A.C(B.l2,A.p(f,D.fej,B.f,f,f,new A.o(r,f,A.I(B.aM.j(0.6),B.r,1),q,f,f,B.n),f,f,f,f,B.fG,f,f,f),f),g.b2K(B.ve,"Your friend",B.bZ)],u),B.m,f,B.e,B.j,0,f,f)
r=B.c.j(0.06)
s=A.m(16)
p=B.c.j(0.12)
o=A.m(16)
n=g.f
if(n.length===0)n=f
o=A.aL(f,B.T,!0,f,!0,B.q,f,A.aM(),g.d,f,f,f,f,f,2,A.bo(f,f,f,f,f,f,f,f,!0,new A.b4(4,s,new A.az(p,1,B.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new A.b4(4,o,D.aVI),f,f,f,f,f,f,f,f,N.CK,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.bL7,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,f,!1,f,B.ai,f,f,f,f,f,B.lQ,f,f,f,1,f,f,!1,"\u2022",f,new C.e0v(g),f,new C.e0w(g),f,!1,f,f,!1,f,!0,f,B.a8,f,f,f,f,f,f,f,f,f,f,f,B.iC,!0,B.a5,f,B.am,f,f,f,f)
r=A.a([],u)
for(m=0;m<4;++m){l=D.c4T[m]
s=new A.aV(14,14)
p=g.e===l
n=p?D.ams:f
p=p?f:B.c.j(0.06)
k=new A.az(g.e===l?B.ay:B.bF,1,B.r,-1)
j=""+l
i=l===1?"game":"best of "+j
h=B.c.j(0.7)
s=A.a([new A.bE(1,B.bi,A.aE(f,A.df(f,A.v(A.a([new A.x(j,f,B.dF,f,f,f,f,f,f,f,f,f),new A.x(i,f,new A.F(!0,h,f,f,f,f,10,B.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,B.p),f,f,B.bb,new A.o(p,f,new A.bP(k,k,k,k),new A.bs(s,s,s,s),f,n,B.n),B.eD,f,f,f,B.f3,f,f,f),B.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.e0x(g,l),f,f,f,f,f,f,!1,B.a9),f)],u)
if(l!==7)s.push(B.ab)
B.d.v(r,s)}s=A.A(r,B.m,f,B.e,B.j,0,f,f)
r=A.A(A.a([A.W(B.l7,B.c.j(0.5),f,f,f,15),B.bo,A.D(A.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,A.l(f,f,B.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),B.m,f,B.e,B.j,0,f,f)
p=A.m(18)
v=A.a([new A.ad(0,B.G,B.bA.j(0.4),B.cx,18)],v)
n=g.e
j=n===1?"":"s"
return new A.C(new A.O(0,0,0,d.f.d+e.r.d),A.p(f,A.v(A.a([w,B.aO,t,B.bu,q,B.bu,D.fi0,B.ao,o,B.aO,D.fm4,B.P,s,B.az,r,B.aO,new A.a6(f,54,A.bX(A.hb(D.akL,A.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,B.fW,f,f,f),g.gc3v(),f),new A.o(f,f,f,p,v,D.bRm,B.n),B.bd),f)],u),B.aj,f,B.e,B.Q,0,B.p),B.f,f,f,D.aXK,f,f,f,f,D.bpI,f,f,f),f)},
b2K(d,e,f){var w=null,v=f.j(0.1),u=A.m(16),t=A.I(f.j(0.45),B.r,1)
return A.D(A.p(w,A.v(A.a([A.W(d,f,w,w,w,24),B.au,A.d(e,w,w,w,w,w,w,B.a6H,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.f3,w,w,w),1)}}
C.oP.prototype={}
C.bo7.prototype={
a6(d,e){var w,v,u,t,s,r=null,q=e.a/2,p=new A.u(q,e.b/2),o=q-4
for(q=d.a,w=0;w<37;++w){$.X()
v=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
if(w===0)u=B.bk
else u=(w&1)===0?B.bL:B.M
v.r=u.gp(0)
u=A.bU(p,o)
t=v.H()
q.drawArc.apply(q,[A.c5(u),(w*2*3.141592653589793/37-1.5707963267948966)*57.29577951308232,9.72972972972973,!0,t])
t.delete()}$.X()
q=A.L()
q.r=B.fn.gp(0)
q.b=B.ae
q.c=8
d.ag(p,o,q)
q=A.L()
q.r=B.aM.gp(0)
d.ag(p,o*0.22,q)
q=this.b
if(q!=null){s=A.ih(r,r,r,r,A.dp(r,r,r,r,r,r,r,r,r,B.aOi,A.t(q)),B.a5,B.ch,r,B.eq,B.cd)
s.eO()
q=s.b
u=q.c
q=q.a.c
s.a6(d,p.aC(0,new A.u(u/2,q.gbb(q)/2)))}},
aq(d){return d.b!=this.b}}
C.E0.prototype={
a4(){return"NgmyProMoveResult."+this.b}}
C.app.prototype={
gjL(){var w=this.d
w=w==null?null:w.a
return w!==!1},
bkU(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.fL7("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.bUY()
w=s.gjL()
v=s.d
s.c=w?"You ("+v.b+") vs NGMY \u2014 capture all opponent discs":v.b+" vs "+v.c+" \u2014 capture all discs"
break
case"tic_tac_go":s.b=1
s.at=A.c1(9,"",!1,x.N)
s.ax=!0
if(s.gjL())w="You are X vs NGMY (O) \u2014 get 3 in a row"
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
s.dx=e.ai()*3.141592653589793*2
s.c=s.gjL()?"Aim and shoot \u2014 beat NGMY on the snooker table":"Aim and shoot \u2014 pocket balls"
break
case"connect_four_pro":s.b=1
u=J.e0(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=A.c1(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gjL())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.aVm(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aBE.h(0,d)
s.c=w==null?"Play to earn":w}},
b7j(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gjL()
if(o)return
o=x.N
s.x=A.a1(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b6(w,new C.cav(),o)
v=A.B(v,v.$ti.k("aj.E"))
s.at=v
if(v.length<9){v=A.B(v,o)
B.d.v(v,A.c1(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=B.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===B.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cw9(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.aoU(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b6(t,new C.caw(),x.L)
o=A.B(o,o.$ti.k("aj.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)B.d.J(v,A.c1(7,0,!1,o))}if(A.iD(e.h(0,q)))o=A.ec(e.h(0,q))
else{o=A.c7(A.t(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bAT(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.aoU(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b6(t,new C.cax(),x.L)
o=A.B(o,o.$ti.k("aj.E"))
s.y=o}if(A.iD(e.h(0,p)))o=A.ec(e.h(0,p))
else{o=A.c7(A.t(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bC7(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.aoU(e,f)
break}},
cGf(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=A.a1(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",A.bl(w.at,!0,q))
o.n(0,"turnEmail",w.azC())
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
p=A.S(q).k("J<1,ak<G>>")
q=A.B(new A.J(q,new C.caz(),p),p.k("aj.E"))
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
p=A.S(q).k("J<1,ak<G>>")
q=A.B(new A.J(q,new C.caA(),p),p.k("aj.E"))
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
azC(){var w,v,u,t=this
if(t.gjL()){if(t.ax){w=t.d
w=w==null?null:w.d
if(w==null)w=""}else w="ngmy@system"
return w}w=t.x.h(0,"playerXEmail")
if(w==null){w=t.d
w=w==null?null:w.d}v=B.a.i(J.k(w==null?"":w).toLowerCase())
w=t.x.h(0,"playerOEmail")
if(w==null){w=t.d
w=w==null?null:w.e}u=B.a.i(J.k(w==null?"":w).toLowerCase())
return t.ax?v:u},
aoU(d,e){var w,v=this,u=B.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
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
cw9(d,e){var w,v,u,t,s,r="playerXEmail"
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
bAT(d,e){var w,v,u,t,s
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
bC7(d,e){var w,v,u,t,s,r,q
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
SL(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gjL())return s
w=B.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return B.a.i(J.k(s==null?u.azC():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
bUY(){var w,v,u=this,t=J.e0(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=A.ip(8,new C.cas(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
aVm(d){var w=20+d.aB(80),v=w+10+d.aB(50),u=4+d.aB(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bM(0,B.c3)},
cPY(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gjL())w=1
else{v=r.d
v=v==null?null:v.d
w=r.SL(q,v==null?"":v)?r.z:-1}if(!r.gjL()){v=r.d
v=v==null?null:v.d
v=!r.SL(q,v==null?"":v)}else v=!1
if(v)return!1
u=r.gjL()?r.z:w
if(!r.gjL()&&u!==r.z)return!1
t=J.q(r.y[d],e)
v=r.Q
if(v==null){if(t===r.z)v=!r.gjL()||t===1
else v=!1
if(v){r.Q=d
r.as=e}return!1}s=r.as
s.toString
if(d===v&&e===s){r.as=r.Q=null
return!1}if(Math.abs(d-v)===1&&Math.abs(e-s)===1&&t===0&&B.o.F(d+e,2)===1){J.aG(r.y[d],e,r.z)
J.aG(r.y[v],s,0)
r.as=r.Q=null
r.z=r.z===1?2:1
if(r.a7F(2)){r.a9e(1)
return!0}if(r.a7F(1)){r.a9e(2)
return!0}if(r.gjL()&&r.z===2){r.bwW(f)
if(r.a7F(2)){r.a9e(1)
return!0}if(r.a7F(1)){r.a9e(2)
return!0}}}return!1},
a9e(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
t.e=!0
w=t.f=d===1
if(t.gjL()){if(w){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+s}else v="NGMY wins \u2014 your discs are gone"
v=t.w=v}else{v=t.d
if(w){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+s}t.a=w?1:0
t.c=v
return!0},
bwW(d){var w,v,u,t,s,r,q,p,o,n=this,m=A.a([],x.B)
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
a7F(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)for(t=J.aW(w[u]);t.C();)if(t.gU(t)===d)return!1
return!0},
cPZ(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.pK
if(!s.gjL()){w=s.d
w=w!=null&&!s.SL("tic_tac_go",w.d)}else w=!1
if(w)return D.pK
if(s.gjL())v="X"
else{w=B.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===B.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.ahq(v))return s.aQn(v,!0)
if(!B.d.t(s.at,""))return s.aQo()
s.ax=!s.ax
if(!s.gjL()){s.x.n(0,"turnEmail",s.azC())
s.c=s.aUU()
return D.pK}if(s.gjL()){t=s.cel(e)
if(t>=0){s.at[t]="O"
if(s.ahq("O"))return s.aQn("O",!1)
if(!B.d.t(s.at,""))return s.aQo()
s.ax=!0}}s.c=s.gjL()?"Your turn \u2014 you are X":s.aUU()
return D.pK},
aUU(){var w=this.d
if(w==null)return"Take your turn"
return this.SL("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aQn(d,e){var w,v,u=this
u.e=!0
u.f=e
u.r=!1
if(u.gjL()){if(e){w=u.d
w=w==null?null:w.b
w=(w==null?"You":w)+" wins with "+d+"!"}else w="NGMY wins with "+d+"!"
w=u.w=w}else{w=u.d
if(e){w=w==null?null:w.b
v=w==null?"You":w}else{w=w==null?null:w.c
v=w==null?"Opponent":w}w=u.w=v+" wins with "+d+"!"}u.c=w
u.a=e?1:0
return e?D.pL:D.H5},
aQo(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.QF},
cel(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.ahq("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.ahq("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.cS7[u]
if(v[w].length===0)return w}return-1},
ahq(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.cZf[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a24(d){return B.d.cH(d,0,new C.cay())},
cA9(d){this.ay.push(1+d.aB(10))
if(this.a24(this.ay)>21)return!0
return!1},
cAa(d){var w,v,u,t=this
while(t.a24(t.ch)<17)t.ch.push(1+d.aB(10))
t.CW=!0
w=t.a24(t.ay)
v=t.a24(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cFI(d,e){var w,v,u,t=this
if(t.e)return D.pK
if(!t.gjL()){w=t.d
w=w!=null&&!t.SL("connect_four_pro",w.d)}else w=!1
if(w)return D.pK
if(t.gjL())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.pK
if(!t.aez(d,w))return D.pK
if(t.a7v(t.fx))return t.aQl(t.fx,!0)
if(t.aM8())return t.aQm()
w=t.fx===1?2:1
t.fx=w
if(t.gjL()&&w===2){u=t.cdK(e)
if(u>=0){t.aez(u,2)
if(t.a7v(2))return t.aQl(2,!1)
if(t.aM8())return t.aQm()
t.fx=1}}t.c=t.gjL()?"Your turn \u2014 drop a red disc":t.bAS()
return D.pK},
bAS(){var w=this.d
if(w==null)return"Drop a disc"
return this.SL("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
aez(d,e){var w
for(w=5;w>=0;--w)if(J.q(this.fr[w],d)===0){J.aG(this.fr[w],d,e)
return!0}return!1},
aM8(){for(var w=0;w<7;++w)if(J.q(this.fr[0],w)===0)return!1
return!0},
aQl(d,e){var w,v,u,t=this
t.e=!0
t.f=e
t.r=!1
w=d===1?"red discs":"gold discs"
if(t.gjL()){if(e){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+" wins with "+w+"!"}else v="NGMY wins with "+w+"!"
v=t.w=v}else{v=t.d
if(e){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+" wins with "+w+"!"}t.c=v
t.a=e?1:0
return e?D.pL:D.H5},
aQm(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.QF},
cdK(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.aez(w,2)
v=r.a7v(2)
r.b51(w)
if(v)return w}for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.aez(w,1)
u=r.a7v(1)
r.b51(w)
if(u)return w}t=A.a([],x.t)
for(w=0;w<7;++w)if(J.q(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aB(s)]},
b51(d){var w
for(w=0;w<6;++w)if(J.q(this.fr[w],d)!==0){J.aG(this.fr[w],d,0)
return}},
a7v(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.q(this.fr[w],v)!==d)continue
if(this.bAU(w,v,d))return!0}return!1},
bAU(d,e,f){var w,v,u,t=new C.car(this,d,e,f)
for(w=x.t,w=[A.a([0,1],w),A.a([1,0],w),A.a([1,1],w),A.a([1,-1],w)],v=0;v<4;++v){u=w[v]
if(t.$2(u[0],u[1])+t.$2(-u[0],-u[1])-1>=4)return!0}return!1},
b8e(d){var w=this
if(B.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.aVm(d)}return w.a>=w.b}}
C.aql.prototype={
T(){return new C.aCZ(null,null)},
cLp(d){return this.e.$1(d)}}
C.aCZ.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bll,null,1,null,v)
w.f6(0,!0)
v.d=w
v.a.d.aM(0,v.gaXl())
v.avF()},
br(d){var w
this.bE(d)
w=this.a
if(d.c!==w.c){w.d.bM(0,B.c3)
this.avF()}},
avF(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.ag5(t,u)
C.ag5(t,u)
w.a.cLp(s)
w.a.toString
w.m(new C.eyl())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
q(){var w,v=this
v.a.d.a3(0,v.gaXl())
w=v.d
w===$&&A.c()
w.q()
v.bsO()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.ag5(j,i),g=C.ag5(j,i),f=j.length,e=i.length,d=A.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&A.c()
u=new A.aV(1,1)
d.push(new A.vX(new A.cX(v,!1,A.p(l,l,B.f,l,l,new A.o(B.aM,l,l,new A.bs(u,u,u,u),A.a([new A.ad(0,B.G,B.aM.j(0.6),B.J,6)],k),l,B.n),l,22,l,B.Ls,l,l,l,3),l),B.Rd,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new A.eo(v,l,l,B.cO,l,l,l,l,l,l,D.eXa))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=B.c.j(0.4)
q=B.cs}else if(s===t){r=B.bc
q=B.O}else{r=B.aD
q=B.I}d.push(new A.eo(t,l,l,B.cO,l,l,l,l,l,l,new A.F(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&A.c()
d.push(new A.vX(new A.cX(k,!1,A.p(l,l,B.f,B.aM,l,l,l,22,l,l,l,l,l,3),l),B.Rd,l,l))}p=f===0?0:B.k.V(h/f*100)
k=B.w.j(0.35)
v=A.m(12)
u=A.I(B.b6,B.r,1)
o=x.p
v=A.p(l,A.v(A.a([A.A(A.a([m.aXk("Correct",""+h,B.bk),B.ab,m.aXk("Wrong / missed",""+(f-g),B.aD),B.b3,A.d(""+p+"% accuracy",l,l,l,l,l,l,F.a63,l,l,l)],o),B.m,l,B.e,B.j,0,l,l),B.ao,D.ffp],o),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(k,l,u,v,l,l,B.n),l,l,l,l,B.bl,l,l,l)
u=A.D(A.cd(new A.a8C(l,A.dp(d,l,l,l,l,l,l,l,l,l,l),l,l,l),B.q,l,B.y,l,l,l,l,B.ah),1)
k=m.a.d
g=A.l(l,l,B.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.w.j(0.35)
return A.v(A.a([v,B.ac,u,B.S,A.aL(l,B.T,!0,l,!0,B.q,l,A.aM(),k,l,l,l,l,l,2,A.bo(l,new A.b4(4,A.m(12),B.Y),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new A.b4(4,A.m(12),D.aVB),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.y,!0,l,!0,l,!1,l,B.ai,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,B.a8,l,l,l,l,l,l,l,l,l,l,l,D.aOh,!0,B.a5,l,B.am,l,l,l,l)],o),B.aj,l,B.e,B.j,0,B.p)},
aXk(d,e,f){var w=null,v=f.j(0.15),u=A.m(8)
return A.p(w,A.d(d+": "+e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(v,w,w,u,w,w,B.n),w,w,w,w,B.fG,w,w,w)}}
C.aKM.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
var z=a.updateTypes(["ax<~>()","~()","G(i_,i_)","~([x_?])","Q(qu)","qu()","G(r4,r4)","Q(r4)","G(r5,r5)","Ou(Y)","Q(i_)","cK(acp)","Z0(Y)","Y7(Y)","ada(Y)","a5r(Y)","ME(Y)","ac0(Y,hA<ak<j3>>)","ac_(Y,G)","r(qu)","r4(a4<@,@>)","~(E0,app)","Mw(Y)","a4<n,@>(r4)","r5(a4<@,@>)","a4<n,@>(kh)","a4<n,@>(r5)","Q(r5)","a4<n,@>(lt)","lt(@)","a4<n,@>(ie)","ie(@)","i_(@)","ax<~>(kh)","a4<n,@>(i_)","~(G,G)","i_(i_)","Uf(Y)","ax<Q>(ak<i_>)","Z_(Y)","~(i_)","ZM(Y)","Ug(Y)","n(i_)","Q(lt)","wC(bu<G,lt>)","aay(Y,G)","G(ie,ie)","aaq(lt)","r(rb)","bE(HV)","Yw(Y)","~(d1{bumpWalletRevision:Q,cloudRequest:Q})","~(n,N,N,N)","N(R)","~(d1)","Zj(Y)","~(E0)","n(n)","ZN(Y)"])
C.coV.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.coW(r,w,s.b,v,s.d)
t=s.e
r.b=A.dG(t,u)
v.r=new C.coS(r)
v.e=new C.coT(r,w)
v.f=new C.coU(r,w,t,u)},
$S:0}
C.coW.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.lk(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=A.a9(r)
u=A.ce(r)
s=v
q=u
p=A.Fu(s,q)
if(p==null)p=new A.j1(s,q==null?A.a1Q(s):q)
t=p
o.d.hi(t.a,t.b)
return}o.d.J(0,w)}else{o.e.a(null)
o.d.J(0,null)}},
$S:40}
C.coS.prototype={
$0(){this.a.b.a9(0)
return $.G6()},
$S:1623}
C.coT.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.arO.$0()
this.a.b.a9(0)},
$S:0}
C.coU.prototype={
$0(){var w,v=this,u=v.b,t=A.dB(0,0,u.gbag(),0,0,0)
u.j4(0)
u=v.c
w=v.a
w.b=A.cM(new A.b9(u.a-t.a),new C.coR(w,u,v.d))},
$S:0}
C.coR.prototype={
$0(){var w=this.c
this.a.b=A.dG(this.b,w)
w.$1(null)},
$S:0}
C.eUg.prototype={
$1(d){var w=this.a
w.m(new C.eUf(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.eUf.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hA(D.aen,this.b,null,null,v.$ti.k("hA<1>"))},
$S:0}
C.eUi.prototype={
$2(d,e){var w=this.a
w.m(new C.eUd(w,d,e))},
$S:55}
C.eUd.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hA(D.aen,null,this.b,this.c,v.$ti.k("hA<1>"))},
$S:0}
C.eUh.prototype={
$0(){var w=this.a
w.m(new C.eUe(w))},
$S:0}
C.eUe.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hA(B.Ae,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fs_.prototype={
$1(d){return d.a===this.a&&B.a.i(d.b.toLowerCase())===this.b&&d.x===B.ck},
$S:16}
C.frS.prototype={
$1(d){return d},
$S:13}
C.fbW.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return A.p(B.A,new A.C(new A.O(u,0,u,0),A.d("NGMY",w,1,B.eB,w,!1,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,B.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),B.f,w,w,B.a9o,w,v,w,w,w,w,w,v)},
$S:153}
C.fbT.prototype={
$3(d,e,f){return this.a.$0()},
$S:126}
C.fbU.prototype={
$2(d,e){var w,v=this,u=e.b
if(B.a.i(u==null?"":u).length!==0){u.toString
w=B.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return A.kf(w,B.A,v.d,new C.fbS(v.e),B.fQ,v.c,!0,v.b,null,null,v.a)},
$S:1624}
C.fbS.prototype={
$3(d,e,f){return this.a.$0()},
$S:126}
C.fbV.prototype={
$3(d,e,f){return this.a.$0()},
$S:126}
C.d6K.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.d6V.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.d7c.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.d7d.prototype={
$1(d){return this.a.IT()},
$S:14}
C.d72.prototype={
$0(){var w=J.b6(this.b,new C.d71(),x.P)
w=A.B(w,w.$ti.k("aj.E"))
this.a.f=w},
$S:0}
C.d71.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.d73.prototype={
$0(){var w=this.a,v=w.a.d.b5,u=A.S(v).k("J<1,a4<n,@>>")
v=A.B(new A.J(v,new C.d70(),u),u.k("aj.E"))
w.f=v},
$S:0}
C.d70.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.d75.prototype={
$0(){var w=this.a,v=w.a.d.b5,u=A.S(v).k("J<1,a4<n,@>>")
v=A.B(new A.J(v,new C.d74(),u),u.k("aj.E"))
w.f=v},
$S:0}
C.d74.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.d6Y.prototype={
$0(){var w=0,v=A.j(x.c),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.c60(t.a.c)?2:3
break
case 2:w=4
return A.b(C.ao2(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.m(new C.d6W(t))
case 3:if(t.c!=null)t.m(new C.d6X(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:54}
C.d6W.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d6X.prototype={
$0(){return this.a.d++},
$S:0}
C.d6Z.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d7_.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d6Q.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.hZG(t.a.d.b5,J.k(J.q(u.b,"id")),"rejected")
t.a.bp()
w=2
return A.b(C.afV(t.a.d.b5),$async$$0)
case 2:w=3
return A.b(t.IT(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6R.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a8(s)
C.hOG(t.a.d.b5,J.k(r.h(s,"id")),t.a.c.c)
t.a.bp()
w=2
return A.b(C.afV(t.a.d.b5),$async$$0)
case 2:w=3
return A.b(t.IT(),$async$$0)
case 3:t.HK(B.d.dN(t.y,new C.d6O(s),new C.d6P(t)),J.k(r.h(s,"id")))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6O.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d6P.prototype={
$0(){return B.d.gL(this.a.y)},
$S:z+5}
C.d6S.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d6T.prototype={
$0(){return B.d.gL(this.a.y)},
$S:z+5}
C.d6U.prototype={
$0(){return this.a.HK(this.b,J.k(J.q(this.c,"id")))},
$S:0}
C.d6N.prototype={
$0(){return this.a.bY2(this.b)},
$S:0}
C.d6M.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.i_8(u,w.b,new C.d6L(v,w))},
$S:0}
C.d6L.prototype={
$2(d,e){return this.a.afU(this.b,d,e)},
$S:514}
C.d7b.prototype={
$2(d,e){if(d)return
this.a.aQ0()},
$S:116}
C.d79.prototype={
$2(d,e){var w=this.a
return new A.l2(C.aYk(w.a.c.a),new C.d78(w,this.b,this.c),null,null,x.gH)},
$S:1626}
C.d78.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=A.m(12)
v=A.m(12)
u=A.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return A.aF(!1,B.a1,!0,w,A.aK(!1,v,!0,new A.C(B.l3,A.bE_(B.cR,A.W(B.h7,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.d77(this.a,d),t,t,t,t,t,t,t),B.f,this.b,0,t,t,t,t,t,B.af)},
$S:1627}
C.d77.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fog(s.c.a,s.e).eS(new C.d76())
w=2
return A.b(C.bBm(u.b,t.a.c.a),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d76.prototype={
$1(d){},
$S:30}
C.d7a.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dKH.prototype={
$0(){var w=this.a
return A.Kg(w.a.c.a,new C.dKG(w))},
$S:79}
C.dKG.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dKI.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&A.c()
u.bi=t.ad()
v.bp()
w.m(new C.dKF())},
$S:0}
C.dKF.prototype={
$0(){},
$S:0}
C.dKJ.prototype={
$2(d,e){var w,v=this.a
if(!C.c60(v.a.c)){if($.fL2.t(0,B.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.fL3(this.b,v.x,w)
return!1}C.ao2(v.a.c.a)}if(A.Kg(v.a.c.a,new C.dKE(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aER()
w=v.a
w.toString
w.hp(new A.d1(B.o.u(1000*Date.now()),v.a.c.a,d,B.jC,B.fb,e,null,null,B.ck,new A.R(Date.now(),0,!1)))
v.a.bp()
return!0},
$S:1628}
C.dKE.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dKK.prototype={
$3$bonus(d,e,f){var w,v=null,u=B.o.u(1000*Date.now()),t=this.a,s=t.a
s.hp(new A.d1(u,s.c.a,d,B.fA,B.fb,e,v,v,B.ck,new A.R(Date.now(),0,!1)))
t.a.bp()
w=f>0?"+$"+B.k.aa(d,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.ul(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1629}
C.d6E.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d6H.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.d6I.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d6J.prototype={
$1(d){var w=null,v=this.a,u=A.fm(w,w,v.e===d?B.bk:A.Z(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,w,w,w,w,w,w,w,w)
return A.D(new A.C(B.eQ,A.i9(A.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.d6G(v,d),u),w),1)},
$S:212}
C.d6G.prototype={
$0(){var w=this.a
return w.m(new C.d6F(w,this.b))},
$S:0}
C.d6F.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d8w.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.d8z.prototype={
$1(d){this.a.ceG()
return null},
$S:14}
C.d8A.prototype={
$1(d){return this.a.cun()},
$S:14}
C.d8B.prototype={
$1(d){this.a.a18()
return null},
$S:14}
C.d8C.prototype={
$1(d){this.a.ah_()
return null},
$S:14}
C.d8D.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c5)return
w=v.Q
w===$&&A.c()
if(w<=0){v.m(new C.d8x(v))
w=v.as
if(w!=null)w.a9(0)
v.En()
return}v.m(new C.d8y(v))},
$S:14}
C.d8x.prototype={
$0(){return this.a.Q=0},
$S:0}
C.d8y.prototype={
$0(){var w=this.a,v=w.Q
v===$&&A.c()
w.Q=v-1
return v},
$S:0}
C.d7M.prototype={
$0(){return this.a.bC=this.b},
$S:0}
C.d7N.prototype={
$0(){return this.a.bC=this.b},
$S:0}
C.d8f.prototype={
$1(d){return this.a.go.t(0,d)},
$S:32}
C.d8g.prototype={
$0(){},
$S:0}
C.d81.prototype={
$0(){var w=this.b
w.c5=!0
w.cV="Waiting for both players\u2026"
w.cj="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.d82.prototype={
$0(){var w=this.a
w.c5=!0
w.cV="Both players connected"
w.cj="Starting together in a moment\u2026"},
$S:0}
C.d83.prototype={
$0(){var w=this.b
w.c5=!0
w.cV="Match starting together\u2026"
w.cj="Both players start in "+B.o.D(this.c,1,99)+"s"},
$S:0}
C.d84.prototype={
$0(){this.b.c5=!1},
$S:0}
C.d85.prototype={
$0(){},
$S:0}
C.d7e.prototype={
$0(){var w=this.a,v=w.x2,u=A.t(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.d7L.prototype={
$0(){var w=this.a
w.at=this.b
w.b2h()},
$S:0}
C.d8h.prototype={
$0(){},
$S:0}
C.d8q.prototype={
$0(){},
$S:0}
C.d8e.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.d8d(w))},
$S:0}
C.d8d.prototype={
$0(){var w=this.a
w.y=!0
w.z=new A.R(Date.now(),0,!1)},
$S:0}
C.d7J.prototype={
$0(){var w=this.a;++w.Z
w.y=!1
w.z=null},
$S:0}
C.d7K.prototype={
$0(){},
$S:0}
C.d8l.prototype={
$1(d){return d==null},
$S:253}
C.d8m.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
B.d.cz(v.ch,w.d)},
$S:0}
C.d8n.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.d7f.prototype={
$1(d){return d==null},
$S:253}
C.d7g.prototype={
$0(){return this.a.bi++},
$S:0}
C.d7h.prototype={
$0(){},
$S:0}
C.d7V.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.d7W.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.J(0,t)
w=this.c
u.J(0,w)
if(v.ghw()&&D.mq.t(0,v.a.e)){u=v.id
u.J(0,t)
u.J(0,w);++v.fx}++v.k2
v.fy=A.a([],x.t)},
$S:0}
C.d7X.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.d7U(w))},
$S:11}
C.d7U.prototype={
$0(){var w=this.a
w.fy=A.a([],x.t)
w.k1=!1},
$S:0}
C.d86.prototype={
$0(){return this.a.y1++},
$S:0}
C.d87.prototype={
$0(){},
$S:0}
C.d88.prototype={
$0(){return this.a.y2++},
$S:0}
C.d89.prototype={
$0(){},
$S:0}
C.d8a.prototype={
$0(){return this.a.b5++},
$S:0}
C.d8b.prototype={
$0(){},
$S:0}
C.d8k.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.d7Y.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d7Z.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.d8_.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d80.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.d8o.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.d8p.prototype={
$0(){var w=this.a
w.ok.push(w.d.aB(4))
w.p2=0},
$S:0}
C.d7i.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d7j.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.d7k.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d7l.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.d8i.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.d8j.prototype={
$0(){var w,v=this.a;++v.x2
v.aLW()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+A.t(Math.min(w+2,7))+" tiles"},
$S:0}
C.d7T.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.d8c.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d7R.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d7S.prototype={
$2(d,e){return d+e.length},
$S:221}
C.d8r.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.d8s.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d8t.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d8v.prototype={
$1(d){var w=this.a,v=w.NI(),u=v<=0?0:B.k.D(w.zz()/v,0,1),t=w.a.x,s=t*1.46
return new C.Mw(w.f?s:s*u,s,t,null)},
$S:z+22}
C.d8u.prototype={
$1(d){return d.bT(0.85)},
$S:171}
C.d7Q.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghw()&&D.mq.t(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return A.v(A.a([A.d(p,w,w,w,w,w,w,B.jB,B.L,w,w),B.ao,A.D(A.av(new A.a6(r*v+u,r*t+s,A.ib(!0,w,w,B.y,new A.hH(v,6,6,1,r),new C.d7P(q,r),q.fr.length,w,B.dP,B.ah,!1),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
$S:150}
C.d7P.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.t(0,e),p=r.ghw()&&D.mq.t(0,r.a.e)&&q&&r.id.t(0,e),o=r.ghw()&&D.mq.t(0,r.a.e)&&q&&!p,n=B.d.t(r.fy,e)||q,m=p?D.amz:D.bPg,l=A.m(10),k=A.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.amz:D.amt
v=o?A.I(B.dx,B.r,2):s
u=A.a([new A.ad(0,B.G,A.Z(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.J,4)],x.V)
t=this.b*0.42
return A.aK(!1,l,!0,A.df(s,A.av(n?A.W(D.cik[r.fr[e]],B.c,s,s,s,t):A.d("?",s,s,s,s,s,s,A.l(s,s,B.c,s,s,s,s,s,s,s,s,t,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,B.bb,new A.o(s,s,v,k,u,w,B.n),B.eD,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.d7O(r,e),s,s,s,s,s,s,s)},
$S:182}
C.d7O.prototype={
$0(){return this.a.ce1(this.b)},
$S:0}
C.d7y.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Z(89,B.bk.l()>>>16&255,B.bk.l()>>>8&255,B.bk.l()&255),r=A.m(10),q=A.m(10),p=A.m(10),o=A.I(A.Z(64,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
return A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(B.A,A.d(t?"":u,w,w,w,w,w,w,D.aNl,w,w,w),B.f,w,w,new A.o(w,w,o,p,w,w,B.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d7x(v,d),w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.af)},
$S:500}
C.d7x.prototype={
$0(){return this.a.ctF(this.b)},
$S:0}
C.d7z.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=A.Z(46,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
return A.aF(!1,B.a1,!0,A.m(10),A.aK(!1,A.m(10),!0,A.p(B.A,A.d(u,w,w,w,w,w,w,D.aNl,w,w,w),B.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d7w(v,d),w,w,w,w,w,w,w),B.f,t,0,w,w,w,w,w,B.af)},
$S:500}
C.d7w.prototype={
$0(){return this.a.ctE(this.b)},
$S:0}
C.d7A.prototype={
$1(d){return this.a.m(new C.d7v())},
$S:28}
C.d7v.prototype={
$0(){},
$S:0}
C.d7B.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&A.c()
w=C.ag5(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.oD()
if(u.ghw()&&D.mq.t(0,u.a.e)){u.a_t()
u.mH(!0)}else{v=B.d.cH(u.cy,0,new C.d7t())
t=u.dx
if(t>=v)u.th("All 5 sentences perfect \u2014 full payout!")
else u.DP(t/v,t,v)}}else{if(u.ghw()&&D.mq.t(0,u.a.e))u.a_t()
u.m(new C.d7u(u))}},
$S:0}
C.d7t.prototype={
$2(d,e){return d+e.length},
$S:221}
C.d7u.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bM(0,B.c3)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.d7C.prototype={
$1(d){var w=null,v=A.fm(w,w,A.Z(38,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,B.cf,w,w,w,w,w,w,w)
return new A.C(B.cG,new A.a6(1/0,w,A.i9(A.d(d,w,w,w,w,w,w,U.aNe,w,w,w),new C.d7s(this.a,d),v),w),w)},
$S:134}
C.d7s.prototype={
$0(){return this.a.b1E(this.b)},
$S:0}
C.d7D.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&A.c()
w=u*3+8
return A.v(A.a([A.d(s,v,v,v,v,v,v,B.oP,v,v,v),B.P,A.D(A.av(new A.a6(w,w,A.ib(!0,v,v,B.y,new A.hH(3,4,4,1,u),new C.d7r(t,u),9,v,B.dP,B.ah,!1),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
$S:150}
C.d7r.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.b_t(e),p=r===0
if(p)w=B.K
else w=q?B.bk:A.Z(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v=A.m(10)
s=p?t:new C.d7n(s,e)
u=A.m(10)
p=p?"":""+r
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.av(A.d(p,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),B.f,w,0,t,t,t,t,t,B.af)},
$S:76}
C.d7n.prototype={
$0(){return this.a.ctD(this.b)},
$S:0}
C.d7E.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.d7q(q,d)
p=A.m(16)
if(o)w=D.a1e[d]
else{w=D.a1e[d]
w=A.Z(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=A.m(16)
u=o?A.Z(B.k.V(127.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
u=A.I(u,B.r,o?2:1)
t=x.V
if(o){s=D.a1e[d]
t=A.a([new A.ad(0,B.G,A.Z(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,16)],t)}else t=A.a([],t)
return A.aK(!1,p,!0,A.df(r,r,r,r,B.bb,new A.o(w,r,u,v,t,r,B.n),T.Am,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1633}
C.d7q.prototype={
$0(){return this.a.ctG(this.b)},
$S:0}
C.d7F.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&A.c()
q=A.d(q,t,t,t,t,t,t,B.oP,t,t,t)
w=A.d("Move "+r.awk()+"/"+C.fRa(),t,t,t,t,t,t,B.CL,t,t,t)
v=r.x2
u=s*3+12
return A.v(A.a([q,w,A.d("Round "+v+"/7 \xb7 "+A.t(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,A.l(t,t,A.Z(153,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.D(A.av(new A.a6(u,u,A.ib(!0,t,t,B.y,new A.hH(3,6,6,1,s),new C.d7p(r),9,t,B.dP,B.ah,!1),t),t,t,t),1)],x.p),B.m,t,B.e,B.j,0,B.p)},
$S:150}
C.d7p.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=A.m(10),s=A.m(10),r=u?B.bk:D.b84,q=u?B.er:D.bgh
return A.aF(!1,B.a1,!0,w,A.aK(!1,t,!0,A.p(w,w,B.f,w,w,new A.o(r,w,A.I(q,B.r,u?2.5:1),s,w,w,B.n),w,w,w,w,w,w,w,w),w,!0,w,w,B.K,w,w,w,w,w,w,w,w,new C.d7m(v,e),w,w,w,w,B.K,w,w),B.f,B.K,0,w,w,w,w,w,B.af)},
$S:76}
C.d7m.prototype={
$0(){return this.a.ctB(this.b)},
$S:0}
C.d7G.prototype={
$0(){return this.a.b1E(this.b[this.c])},
$S:0}
C.d7H.prototype={
$0(){return this.a.m(new C.d7o())},
$S:0}
C.d7o.prototype={
$0(){},
$S:0}
C.d7I.prototype={
$2(d,e){this.a.Zc(d,e)
return null},
$S:z+21}
C.dc3.prototype={
$1(d){return this.a.cev(this.b,d)},
$S:1634}
C.dc2.prototype={
$0(){var w=this
return w.a.a.cLY(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.czX.prototype={
$1(d){var w=this.a
w.a_K()
w.tp()},
$S:8}
C.czh.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cz7.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cz8.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.czr.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.czo.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.czp.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.czq.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.czj.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.czi(w))},
$S:0}
C.czi.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cz9.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ac(w.c)
v.dy=J.ac(w.d)
v.fr=J.ac(w.e)},
$S:0}
C.czm.prototype={
$1(d){var w=this.a
return new C.Uf(w.fx,new C.czl(w),w.a.f.r,null)},
$S:z+37}
C.czl.prototype={
$1(d){return this.bgs(d)},
bgs(d){var w=0,v=A.j(x.y),u,t=this,s,r
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c6V(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.m(new C.czk(r,d))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+38}
C.czk.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.czK.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.czE.prototype={
$1(d){this.a.tp()
return null},
$S:14}
C.czH.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(B.o.an(v.gaSP().a,1e6)<=0){w=v.id
if(w!=null)w.a9(0)
v.tp()
return}v.m(new C.czG())},
$S:14}
C.czG.prototype={
$0(){},
$S:0}
C.czD.prototype={
$1(d){this.a.Eu()
return null},
$S:14}
C.czF.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.czC.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bi(J.k(v==null?"":v))
if(u==null)u=new A.R(A.fP(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bi(J.k(v==null?"":v))
return u.aL(0,w==null?new A.R(A.fP(0,0,!1),0,!1):w)},
$S:43}
C.cze.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bi(J.k(v==null?"":v))
if(u==null)u=new A.R(A.fP(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bi(J.k(v==null?"":v))
return u.aL(0,w==null?new A.R(A.fP(0,0,!1),0,!1):w)},
$S:43}
C.czf.prototype={
$0(){var w=this.a,v=w.f
B.d.a8(v)
B.d.v(v,this.b)
w.ax=!0},
$S:0}
C.czg.prototype={
$0(){var w=this.a
if(w.c!=null)w.a0q(!0)},
$S:11}
C.czc.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.czd.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
if(w.f.length!==0)w.SP(this.b)},
$S:8}
C.czu.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=B.d.gcY(v).Q
v.toString
if(this.b)w.hU(v)
else w.lR(v,B.dX,B.kz)},
$S:8}
C.czn.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.czv.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.czw.prototype={
$0(){var w=this.a
w.f.push(A.E(["role","user","text",this.b,"at",new A.R(Date.now(),0,!1).a5().ac()],x.N,x.z))
w.b34()
w.r.bM(0,B.c3)
w.at=!0},
$S:0}
C.czx.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.czy.prototype={
$0(){var w=this.a
w.f.push(A.E(["role","ai","text",this.b,"at",new A.R(Date.now(),0,!1).a5().ac()],x.N,x.z))
w.at=!1},
$S:0}
C.czz.prototype={
$0(){var w,v=this.b,u=A.V(x.N,x.z)
J.aG(u,"role","ai")
J.aG(u,"text",this.c)
J.aG(u,"at",new A.R(Date.now(),0,!1).a5().ac())
w=this.a
if(J.cw(w.b)){w=J.b6(w.b,v.gcdt(),x.P)
w=A.B(w,w.$ti.k("aj.E"))
J.aG(u,"phoneActions",w)}v.f.push(u)
v.b34()},
$S:0}
C.czA.prototype={
$0(){this.a.f.push(A.E(["role","ai","text",y.g,"at",new A.R(Date.now(),0,!1).a5().ac()],x.N,x.z))},
$S:0}
C.czB.prototype={
$0(){return this.a.at=!1},
$S:0}
C.czs.prototype={
$1(d){return this.bgt(d)},
bgt(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
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
return A.b(C.aor(q,new C.r4("cal_"+1000*n,m,l,(o==null?p.bN(36e8):o).bQ(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.ap0()
case 4:k.c.I(x.q).f.R(A.b2(null,null,null,B.d2,null,B.q,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:355}
C.czJ.prototype={
$1(d){return this.bgu(d)},
bgu(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.I(x.q).f.R(A.b2(null,null,null,B.d2,null,B.q,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:355}
C.czt.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=B.d.gcY(v).Q
v.toString
w.hU(v)},
$S:8}
C.czW.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
if(v>0)w.a9O(v-1)},
$S:0}
C.czP.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.czS.prototype={
$1(d){var w=this.a
w.m(new C.czM(w,d))
if(d===0)w.a0q(!0)},
$S:28}
C.czM.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.czQ.prototype={
$2$size(d,e){return C.fPu(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:1635}
C.czR.prototype={
$0(){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.h1_(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return A.b(H.aph(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.czN(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return A.b(C.aop(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return A.b(p.tp(),$async$$0)
case 15:p.m(new C.czO(p))
p.a9O(0)
case 14:u=!1
w=1
break
case 11:w=16
return A.b(p.tp(),$async$$0)
case 16:case 9:case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:61}
C.czN.prototype={
$2(d,e){return this.bgv(d,e)},
bgv(d,e){var w=0,v=A.j(x.y),u,t=this,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=A.a0R(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$2,v)},
$S:118}
C.czO.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.czU.prototype={
$2(d,e){return B.ab},
$S:36}
C.czT.prototype={
$2(d,e){var w=null,v=this.a,u=A.d((v.a.c.w?D.a1k:D.a0H)[e],w,w,w,w,w,w,B.q_,w,w,w),t=A.Z(31,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),s=A.Z(89,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
v=v.at?w:new C.czL(v,e)
return A.mx(w,t,u,w,v,w,w,new A.az(s,1,B.r,-1),w)},
$S:489}
C.czL.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a1k:D.a0H
w.r.saV(0,v[this.b])
w.mG()
return null},
$S:0}
C.czV.prototype={
$1(d){var w=this.a
return w.at?null:w.mG()},
$S:2}
C.cza.prototype={
$0(){return this.a.a9O(0)},
$S:0}
C.czI.prototype={
$0(){return this.a.a9O(this.b)},
$S:0}
C.czb.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=A.p(v,D.bJn,B.f,v,v,new A.o(v,v,v,v,v,new A.a7(B.a3,B.a7,B.x,A.a([A.Z(51,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),w.b],x.O),v,v),B.a6),v,72,v,v,v,v,v,72)
t=w.c
s=A.d("Start a conversation",v,v,v,v,v,v,A.l(v,v,t?B.c:B.aA,v,v,v,v,v,v,v,v,16,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.av(new A.C(B.X0,A.v(A.a([u,B.ac,s,B.ao,A.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,A.l(v,v,t?B.ay:B.aW,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v)],x.p),B.m,v,B.e,B.j,0,B.p),v),v,v,v)}if(e<s)return u.bBN(t[e],w.c)
return u.aMw(A.E(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:41}
C.bWq.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=B.k.O(d)
return new A.R(A.fP(w>1e11?w:w*1000,0,!0),0,!0).bQ()}v=A.bi(J.k(d))
return v==null?null:v.bQ()},
$S:338}
C.bWp.prototype={
$1(d){A.aN(d)
return(d==null?0:d)/100},
$S:566}
C.bWs.prototype={
$1(d){var w
if(d==null)w=null
else{w=A.bi(J.k(d))
w=w==null?null:w.bQ()}return w},
$S:338}
C.bWr.prototype={
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
s=A.a3n(B.a20,J.k(s==null?"reimbursement":s))
r=J.q(w,"method")
r=A.a3n(B.a0F,J.k(r==null?"system":r))
q=A.aT(J.q(w,"sourceDetails"))
p=J.q(w,"status")
p=A.a3n(B.Gf,J.k(p==null?"approved":p))
o=this.a.$1(J.q(w,"timestamp"))
if(o==null)o=new A.R(Date.now(),0,!1)
return new A.d1(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:739}
C.dsy.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dsz.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dsp.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bl(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dsn.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.a
w=2
return A.b(o.Aa(),$async$$0)
case 2:t=o.d
t===$&&A.c()
s=o.e
s===$&&A.c()
r=o.a.c
q=o.f
q===$&&A.c()
w=3
return A.b(C.fK2(t,s,r,q),$async$$0)
case 3:p=e
w=4
return A.b(A.oQ(o.a.c,!1),$async$$0)
case 4:o.kF(p)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsx.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.a8m(),$async$$0)
case 3:q=e
if(q==null){r.kF("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return A.b(A.a5(s,!1).ci(A.em(new C.dsw(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return A.b(A.oQ(r.a.c,!1),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsw.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&A.c()
return new C.Z_(w.b,w.a,u,v,null)},
$S:z+39}
C.dsm.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.hvh(q)?3:4
break
case 3:w=5
return A.b(t.a.E3(B.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return A.b(C.aVW(q,s.a.c),$async$$0)
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
case 9:s.kF(C.bWu(s.a.c))
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
return A.b(s.zq(q,!0,!0),$async$$0)
case 14:w=1
break
case 13:q=r.b
q.toString
w=15
return A.b(s.aNK(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsl.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=A.bl(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dso.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.abD(),$async$$0)
case 3:q=e
if(q==null||B.a.i(q).length===0){w=1
break}s=C.fYV(q)
if(s==null){r.kF("Could not read that backup file.")
w=1
break}if(!C.bWt(s,r.a.c,null)){r.kF(C.bWu(r.a.c))
w=1
break}w=4
return A.b(r.bE6(s),$async$$0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsv.prototype={
$1(d){var w=null,v=new A.ar(B.as,$.aw()),u=A.M(d).ax.a===B.H,t=u?B.i4:B.c,s=x.p,r=A.v(A.a([A.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,A.l(w,w,u?B.ad:B.ak,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),B.az,A.aL(w,B.T,!0,w,!0,B.q,w,A.aM(),v,w,w,w,w,w,2,A.bo(w,new A.b4(4,A.m(14),B.df),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),B.y,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,B.dL,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.L,w,B.am,w,w,w,w)],s),B.F,w,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bK(!1,B.dd,w,w,!0,w,w,new C.dst(d),w,w),A.bJ(D.f4o,new C.dsu(d,v),A.bk(B.aU,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.fij,w)},
$S:19}
C.dst.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dsu.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a5(this.a,!1).N(w)
return null},
$S:0}
C.dsq.prototype={
$1(d){return D.fFz},
$S:z+12}
C.dsr.prototype={
$0(){return this.a.E4(B.a.i(this.b))},
$S:1}
C.dss.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(C.aVW(t.b,r.a.c),$async$$0)
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
return A.b(r.zq(s,!0,!0),$async$$0)
case 11:w=1
break
case 7:r.kF(C.bWu(r.a.c))
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
return A.b(r.aNK(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsA.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dsE.prototype={
$1(d){this.a.PV()
return null},
$S:14}
C.dsB.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dsC.prototype={
$0(){var w=null,v=this.a
A.fH(new A.fA(v.gaus()))
this.b.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d("Code "+v.gaus()+" copied",w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dsD.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dsF.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!(B.a.a0(s,"NGMYSNAP1|")||B.a.a0(s,"NGMYLOCALSYNC1|")||B.a.a0(s,"NGMYLOCALLIVE1|")||B.a.a0(s,"NGMYLOCALDEP1|")))continue
r.e=!0
A.a5(this.b,!1).N(s)
return}},
$S:196}
C.ffc.prototype={
$1(d){return D.fDr},
$S:z+13}
C.fgp.prototype={
$1(d){return new C.ada(this.a,this.b,this.c,null)},
$S:z+14}
C.eO6.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.eO7.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.d1E.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fE()},
$S:8}
C.d1B.prototype={
$2(d,e){return e.aj6(e.a.toUpperCase())},
$S:1636}
C.d1C.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=B.a.i(w.d.a.a)
A.a5(v,!1).N(w)
return null},
$S:2}
C.d1D.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.bXb.prototype={
$1(d){var w=J.q(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!B.d.b8(D.d5E,B.a.gkL(v))},
$S:4}
C.foa.prototype={
$1(d){return d.a===this.a},
$S:1637}
C.fob.prototype={
$0(){return B.d.gL(B.By)},
$S:1638}
C.dz_.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.m(new C.dyZ(v))
w=v.r
w===$&&A.c()
if(w<=0)v.b28("Time's up")},
$S:14}
C.dyZ.prototype={
$0(){var w=this.a,v=w.r
v===$&&A.c()
w.r=v-1
return v},
$S:0}
C.dyR.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dyW.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.m(new C.dyT(w,d,e))},
$S:137}
C.dyT.prototype={
$0(){var w=this.a,v=this.c
w.e=B.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dyX.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.dyS(w))
w.co5(!0)},
$S:0}
C.dyS.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dyY.prototype={
$1(d){this.a.b28(d)
return null},
$S:2}
C.dyU.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.dyV.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.c3C.prototype={
$1(d){return D.dpT},
$S:z+15}
C.c3B.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fhb.prototype={
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
C.fhc.prototype={
$2(d,e){var w=A.aN(J.q(d,e))
w=w==null?null:B.k.O(w)
return w==null?0:w},
$S:677}
C.fhd.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:221}
C.fvc.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.h9h(w,v):C.fPM(w,v)
if(u===3)++w.f
C.aez(w,this.c,u)
return u},
$S:1640}
C.fve.prototype={
$0(){return C.h9h(this.a,this.b)},
$S:114}
C.fvd.prototype={
$0(){return C.fPM(this.a,this.b)},
$S:114}
C.dsa.prototype={
$0(){var w=this.a
if(w.a.c)w.m(new C.ds9(w))},
$S:0}
C.ds9.prototype={
$0(){this.a.r=1+B.o.F(A.Bl(new A.R(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dsb.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&A.c()
u=u.x
u===$&&A.c()
w=B.k.bw(u*10)
if(w!==v.w)v.m(new C.ds8(v,w))}},
$S:0}
C.ds8.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.c5A.prototype={
$3(d,e,f){var w=null
return A.D(A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,B.I,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.bz,A.f4(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.dt)],x.p),B.m,w,B.e,B.j,0,B.p),1)},
$S:1641}
C.c5z.prototype={
$3(d,e,f){var w=null
return A.d("$"+B.k.aa(e,2),w,w,w,w,w,w,B.oO,w,w,w)},
$S:393}
C.c61.prototype={
$1(d){return new C.ME(this.a,this.b,!1,null,null)},
$S:z+16}
C.dRK.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=A.m(e?0:30)
e=e?g:A.I(B.b4.j(0.5),B.r,1)
w=f.a.e?g:A.a([new A.ad(2,B.G,B.b4.j(0.35),B.J,36),new A.ad(0,B.G,B.bA.j(0.175),B.J,24)],x.V)
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
o.push(A.p(g,D.bEV,B.f,g,g,new A.o(g,g,A.I(B.aM.j(0.8),B.r,2.5),g,A.a([new A.ad(0,B.G,B.b4.j(0.55),B.cx,18)],n),E.tD,B.a6),g,88,g,g,g,g,g,88))
o.push(B.aO)
o.push(A.nB(B.jg,D.fg5,new C.dRG()))
o.push(B.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(A.d(m,g,g,g,g,g,g,A.l(g,g,B.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,B.cs,g,1.45,!0,g,g,g,g,g,g,g,g),B.L,g,g))
m=this.b
if(m.length!==0){l=B.cr.j(0.12)
k=A.m(18)
j=A.I(B.cr.j(0.45),B.r,1)
i=A.a([A.A(A.a([A.W(D.byV,B.cr.j(0.95),g,g,g,20),B.ab,A.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,A.l(g,g,B.cr.j(0.95),g,g,g,g,g,g,g,g,13,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),B.m,g,B.e,B.j,0,g,g),B.S,A.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,A.l(g,g,B.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),B.S],p)
B.d.v(i,new A.J(m,new C.dRH(),A.S(m).k("J<1,r>")))
B.d.v(o,A.a([B.aO,A.p(g,A.v(i,B.F,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(l,g,j,k,g,g,B.n),g,g,g,g,B.bB,g,g,1/0)],p))}o.push(B.bu)
m=B.w.j(0.35)
l=A.m(18)
k=A.I(B.b4.j(0.35),B.r,1)
o.push(A.p(g,A.v(A.a([f.avc(B.h6,"Unlimited games with an active plan",B.ba),B.P,f.avc(B.kd,"Weekday check-ins grow your balance",B.b4),B.P,f.avc(B.md,"Compete, bet, and earn points",B.aM)],p),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(m,g,k,l,g,g,B.n),g,g,g,g,B.bB,g,g,1/0))
o.push(B.d6)
l=A.m(16)
n=A.a([new A.ad(0,B.G,B.bA.j(0.45),B.cx,16)],n)
o.push(new A.a6(1/0,g,A.bX(A.dq(D.bI8,D.fbJ,new C.dRI(f,a0),A.bk(B.K,g,g,g,B.c,B.I1,g,B.K,new A.b7(A.m(16),B.Y),g,g,g)),new A.o(g,g,g,l,n,E.tD,B.n),B.bd),g))
o.push(B.P)
n=f.a.e?"Back":"Maybe later"
o.push(A.bK(!1,A.d(n,g,g,g,g,g,g,A.l(g,g,B.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,new C.dRJ(f,a0),g,g))
if(f.a.e)o.push(B.b3)
h=A.p(g,A.bv(v,new A.an(B.W,g,B.aa,B.q,A.a([t,u,new A.C(new A.O(22,r,22,q),A.v(o,B.m,g,B.e,s,0,B.p),g)],p),g),B.aq),B.f,g,g,new A.o(g,g,e,d,w,D.bRZ,B.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return A.eD(g,B.K,h,g,g,g,Ac.Xw,B.cZ,g,g,g)},
$S:497}
C.dRG.prototype={
$1(d){return D.bQX.aw(0,d)},
$S:66}
C.dRH.prototype={
$1(d){var w=null
return new A.C(B.eO,A.A(A.a([A.W(Aj.Zs,B.cr.j(0.85),w,w,w,14),B.ab,A.D(A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$S:134}
C.dRI.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{A.a5(this.b,!1).N(null)
w.a.c.$0()}},
$S:0}
C.dRJ.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else A.a5(this.b,!1).N(null)},
$S:0}
C.fqy.prototype={
$1(d){if(d.gmn())this.a.a=d
return d.gmn()},
$S:528}
C.fql.prototype={
$1(d){$.aU.x1$.push(new C.fqk(this.a))},
$S:8}
C.fqk.prototype={
$1(d){return this.a.$0()},
$S:8}
C.fdt.prototype={
$1(d){return C.h9o(this.a,this.b+1)},
$S:8}
C.frV.prototype={
$2(d,e){var w=A.aI(d,B.bS,x.w).w.a
return new A.a6(w.a,w.b,A.cb(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:156}
C.c6f.prototype={
$1(d){return d.r===this.a},
$S:236}
C.c6g.prototype={
$1(d){var w=$.aP9(),v=w.a
w.sp(0,v+1)
return v},
$S:1643}
C.c6h.prototype={
$1(d){},
$S:30}
C.c6e.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:236}
C.c6d.prototype={
$1(d){return d.f.c9(this.a)},
$S:236}
C.fbD.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:67}
C.fDs.prototype={
$1(d){return C.a67(this.a)},
$S:101}
C.fDt.prototype={
$1(d){var w=$.aP9()
w.sp(0,w.a+1)},
$S:27}
C.fDu.prototype={
$1(d){},
$S:30}
C.fDv.prototype={
$1(d){return new A.k8($.aP9(),new C.fDr(this.a,this.b),null,null,x.am)},
$S:1644}
C.fDr.prototype={
$3(d,e,f){var w=this.b
return new A.l2(C.ao8(this.a,!1),new C.fDq(w),w,null,x.gv)},
$S:1645}
C.fDq.prototype={
$2(d,e){var w=e.b
return new C.ac0(w==null?this.a:w,null)},
$S:z+17}
C.dRN.prototype={
$1(d){return d.c},
$S:236}
C.dRO.prototype={
$1(d){return d.gbdm()},
$S:1646}
C.dRP.prototype={
$2(d,e){return d+e},
$S:85}
C.dRQ.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dRS.prototype={
$2(d,e){return B.P},
$S:36}
C.dRR.prototype={
$2(d,e){return new C.ac_(J.q(this.a.c,e),null)},
$S:z+18}
C.dRM.prototype={
$1(d){return d==null?"\u2026":C.bxN(d)},
$S:1647}
C.fDy.prototype={
$3(d,e,f){var w=this
return A.rh(new C.ayF(w.a,w.b,w.c,w.d,new C.fDw(d,w.e),new C.fDx(d,w.f),null))},
$C:"$3",
$R:3,
$S:94}
C.fDw.prototype={
$0(){A.a5(this.a,!1).N(null)
C.hco(this.b)},
$S:0}
C.fDx.prototype={
$0(){A.a5(this.a,!1).N(null)
C.hco(this.b)},
$S:0}
C.d8F.prototype={
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
B.d.v(w,new A.J(t,new C.d8E(),A.S(t).k("J<1,r>")))}t=h.d
t===$&&A.c()
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,A.aI(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?A.a([B.bk,B.ff,B.e9],r):A.a([B.aD,B.eM,B.eG],r)
p=A.m(26)
o=A.I(B.c.j(0.4),B.r,2)
n=x.V
m=A.a([new A.ad(6,B.G,(h.a.c?B.dv:B.dD).j(0.5),B.J,36)],n)
l=A.a([],g)
if(h.a.c){k=A.dl()
j=k.a
j.$flags&2&&A.ai(j)
j[11]=0.001
k.jJ(-0.35)
r=A.a([X.acR,B.rN],r)
l.push(new A.a6(i,100,new A.an(B.A,i,B.aa,B.f,A.a([A.fr(B.A,A.p(i,D.b2A,B.f,i,i,new A.o(i,i,i,i,A.a([new A.ad(4,B.G,B.cR.j(0.6),B.J,24),new A.ad(0,B.G,B.w.j(0.3),B.dn,12)],n),new A.bR(B.A,0.5,B.x,i,0,r,i,i),B.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.bLm)
l.push(B.az)
l.push(A.d(h.a.d,i,i,i,i,i,i,B.a6E,B.L,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=A.m(18)
k=A.I(B.ff,B.r,4)
B.d.v(l,A.a([B.az,D.f64,B.P,A.p(i,A.d(r,i,i,i,i,i,i,D.eXT,B.L,i,i),B.f,i,i,new A.o(B.c,i,k,n,i,i,B.n),i,i,i,i,B.WZ,i,i,1/0)],g))}B.d.v(l,A.a([B.ac,A.d(h.a.e,i,i,i,i,i,i,D.f_u,B.L,i,i)],g))
l.push(B.e0)
r=A.D(A.dW(D.f3G,h.a.r,A.dd(i,i,i,i,i,i,i,i,i,B.c,i,i,B.cf,i,i,D.aVg,i,i,i,i)),1)
h=h.a
n=h.w
l.push(A.A(A.a([r,B.aw,A.D(A.bJ(G.aOF,n,A.bk(B.c,i,i,i,h.c?B.ff:B.eM,i,B.cf,i,i,i,i,i)),1)],g),B.m,i,B.e,B.j,0,i,i))
w.push(A.e9(B.A,A.p(i,A.v(l,B.m,i,B.e,B.Q,0,B.p),B.f,i,i,new A.o(i,i,o,p,m,new A.a7(B.ax,B.aC,B.x,q,i,i),B.n),i,i,i,B.a8,B.agw,i,i,s),1+t*0.02,i,i))
return new A.an(B.A,i,B.aa,B.f,w,i)},
$S:112}
C.d8E.prototype={
$1(d){var w=null,v=d.a,u=d.b
return A.ao(w,A.db(A.eA(B.A,d.d,A.W(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.c7R.prototype={
$2(d,e){var w=null,v=this.a,u=C.huH(A.Kg(v.c,v.d))
return A.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1648}
C.c7Q.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:67}
C.bXI.prototype={
$0(){},
$S:0}
C.faC.prototype={
$1(d){return B.o.u(d)},
$S:73}
C.dKN.prototype={
$0(){return this.a.y=!0},
$S:0}
C.dKO.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.dKP.prototype={
$0(){var w=this.a
return w.w=D.PA[w.d.aB(5)]},
$S:0}
C.dKQ.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.dKR.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.dKS.prototype={
$0(){var w=this.a
return w.m(new C.dKM(w))},
$S:0}
C.dKM.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dKT.prototype={
$0(){var w=this.a
return w.m(new C.dKL(w))},
$S:0}
C.dKL.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dKW.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.dKX.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&B.a.i(t.e.a.a).length===0?B.bk:A.Z(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),r=A.m(10)
t=t.y?u:new C.dKV(t,d)
w=A.m(10)
v=B.k.aa(d,0)
return A.D(new A.C(B.jq,A.aF(!1,B.a1,!0,r,A.aK(!1,w,!0,new A.a6(u,38,A.av(A.d("$"+v,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),B.f,s,0,u,u,u,u,u,B.af),u),1)},
$S:1649}
C.dKV.prototype={
$0(){var w=this.a
return w.m(new C.dKU(w,this.b))},
$S:0}
C.dKU.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bM(0,B.c3)},
$S:0}
C.dS9.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+B.cS.gcu().aI(this.c)},
$S:0}
C.dSa.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.dS5.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=A.m(14),s=u?B.c.j(0.1):B.K,r=A.I(u?D.eH.j(0.5):B.K,B.r,1),q=A.W(e,u?D.eH:B.ay,w,w,w,20)
return A.D(A.aE(w,A.df(w,A.A(A.a([q,B.bo,A.d(f,w,w,w,w,w,w,A.l(w,w,u?B.c:B.ay,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.b9,B.j,0,w,w),w,w,B.bb,new A.o(s,w,r,t,w,w,B.n),B.a1,w,46,w,w,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dS7(v,d),w,w,w,w,w,w,!1,B.a9),1)},
$S:1650}
C.dS7.prototype={
$0(){var w=this.a
return w.m(new C.dS6(w,this.b))},
$S:0}
C.dS6.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dS8.prototype={
$0(){var w=this.a,v=w.d===B.kj?"Cash App tag":"Bitcoin address"
return w.Ib(this.b,v)},
$S:0}
C.dS4.prototype={
$0(){var w=this.a
return w.Ib(w.gapS(),"Code")},
$S:0}
C.c6H.prototype={
$1(d){return C.hqU(A.a1(d,x.N,x.z))},
$S:z+20}
C.c6I.prototype={
$2(d,e){return d.c.aL(0,e.c)},
$S:z+6}
C.c6E.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.c6F.prototype={
$2(d,e){return d.c.aL(0,e.c)},
$S:z+6}
C.c6G.prototype={
$1(d){return d.ad()},
$S:z+23}
C.c6J.prototype={
$1(d){var w=d.c
return!w.cX(this.a.bN(-36e8))&&!w.c9(this.b)},
$S:z+7}
C.c_5.prototype={
$1(d){return C.hqV(A.a1(d,x.N,x.z))},
$S:z+24}
C.c_6.prototype={
$2(d,e){return e.b.aL(0,d.b)},
$S:z+8}
C.c_3.prototype={
$1(d){return d.ad()},
$S:z+26}
C.c_4.prototype={
$2(d,e){return e.b.aL(0,d.b)},
$S:z+8}
C.c_8.prototype={
$1(d){var w=d.b
return!w.cX(this.a)&&!w.c9(this.b)},
$S:z+27}
C.c6Q.prototype={
$1(d){return d.ad()},
$S:z+28}
C.c6P.prototype={
$1(d){return C.h09(A.a1(x.f.a(d),x.N,x.z))},
$S:z+29}
C.c6O.prototype={
$1(d){return d.ad()},
$S:z+30}
C.c6N.prototype={
$1(d){return C.hul(A.a1(x.f.a(d),x.N,x.z))},
$S:z+31}
C.c6S.prototype={
$1(d){return C.huk(A.a1(x.f.a(d),x.N,x.z))},
$S:z+32}
C.c6T.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+2}
C.c6U.prototype={
$1(d){return d.ad()},
$S:z+34}
C.dVP.prototype={
$1(d){return d.b8R(A.bl(d.e,!0,x.u))},
$S:z+36}
C.dVQ.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+2}
C.dVJ.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dVK.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dVs.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.J(w,this.b)},
$S:0}
C.dVt.prototype={
$1(d){return new C.Ou(this.a,null)},
$S:z+9}
C.dVu.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=B.d.be(t,new C.dVr(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){B.d.cz(u.d,w)
u.Ik()}},
$S:0}
C.dVr.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dVG.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(A.E(["role","admin","text",this.b],w,w))},
$S:0}
C.dVH.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(A.E(["role","ai","text",v],t,t))}else{v=t.d
v===$&&A.c()
t.d=C.hUu(v,w[0],w[3])
t.Ik()
t=w[2]
if(t==null)t="Created "+J.ac(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(A.E(["role","ai","text",t],w,w))}},
$S:0}
C.dVI.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=B.d.gcY(v).Q
v.toString
w.hU(v)}},
$S:8}
C.dVA.prototype={
$1(d){return new C.Ou(this.a,null)},
$S:z+9}
C.dVB.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dVz.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cz(w,this.b)},
$S:0}
C.dVF.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&A.c()
v=B.d.cz(w,s)
B.d.cn(t.d,u.a,v)
t.Ik()},
$S:0}
C.dVE.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
return new C.ZN(u[w],new C.dVD(v,w),null)},
$S:z+59}
C.dVD.prototype={
$1(d){var w=this.a
return w.m(new C.dVC(w,this.b,d))},
$S:z+40}
C.dVC.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dVw.prototype={
$0(){var w=this.a
return w.m(new C.dVv(w))},
$S:0}
C.dVv.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dVx.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?B.cm:B.aK
return new A.C(B.eO,A.d(t+": "+A.t(s),w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?B.a4:B.cs,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:111}
C.dVy.prototype={
$1(d){return this.a.a07()},
$S:2}
C.dVO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.rK:B.c
u=A.m(16)
t=A.m(16)
s=l?B.aK:B.aL
r=w.d
q=A.b0(r).j(0.15)
p=A.m(12)
q=A.p(n,A.W(B.aj8,l?B.bI:B.ak,n,n,n,20),B.f,n,n,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.bR,n,n,n)
p=A.b0(r).j(0.12)
o=A.m(8)
o=A.p(n,A.W(w.c,A.b0(r),n,n,n,18),B.f,n,n,new A.o(p,n,n,o,n,n,B.n),n,n,n,n,B.hu,n,n,n)
r=A.A(A.a([o,B.aw,A.D(A.d(w.b,n,n,n,n,n,n,A.l(n,n,l?B.aP:B.M,n,n,n,n,n,n,n,n,n,n,n,B.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),B.m,n,B.e,B.j,0,n,n)
p=w.e.length
return new A.C(B.db,A.aF(!1,B.a1,!0,u,A.dN(!1,n,n,n,!0,n,n,n,!0,n,new H.asN(q,e,!0,n),n,n,n,n,new C.dVL(m,e),!1,n,n,new A.b7(t,new A.az(s,1,B.r,-1)),n,n,A.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,A.l(n,n,l?B.bI:B.ak,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,A.Bk(n,n,n,new C.dVM(),B.J,new C.dVN(m,e),B.cj,n,x.N),n),B.f,v,0,n,n,n,n,n,B.af),new A.cz(w.a,x.W))},
$S:111}
C.dVN.prototype={
$1(d){var w=this
if(d==="edit")w.a.a8O(w.b)
if(d==="questions")w.a.Xz(w.b)
if(d==="delete")w.a.bGX(w.b)},
$S:2}
C.dVM.prototype={
$1(d){return D.cDw},
$S:138}
C.dVL.prototype={
$0(){return this.a.Xz(this.b)},
$S:0}
C.cIn.prototype={
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
return A.aK(!1,s,!0,A.p(s,A.W(d,A.b0(t),s,s,s,s),B.f,s,s,new A.o(q,s,u,v,s,s,B.n),s,s,s,s,B.cj,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cIm(r,d),s,s,s,s,s,s,s)},
$S:1651}
C.cIm.prototype={
$0(){var w=this.a
return w.m(new C.cIk(w,this.b))},
$S:0}
C.cIk.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cIo.prototype={
$1(d){var w=null,v=this.a,u=A.b0(d),t=v.f
t===$&&A.c()
return A.aE(w,A.ho(u,w,t===d?D.bIP:w,w,14),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cIl(v,d),w,w,w,w,w,w,!1,B.a9)},
$S:465}
C.cIl.prototype={
$0(){var w=this.a
return w.m(new C.cIj(w,this.b))},
$S:0}
C.cIj.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cIp.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cIq.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=B.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&A.c()
v=v.f
v===$&&A.c()
t=u.cDG(v,w,t)
A.a5(this.b,!1).N(t)
return null},
$S:0}
C.eJb.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return w.push(this.b)},
$S:0}
C.eJc.prototype={
$1(d){return new C.ZM(this.a,null)},
$S:z+41}
C.eJi.prototype={
$2(d,e){return B.P},
$S:36}
C.eJh.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.rK:B.c
u=A.m(14)
t=A.m(14)
s=l?B.aK:B.aL
r=w.d
if(r!=null&&r.length!==0){q=A.m(8)
r=A.bv(q,K.aNR(n,B.bQ,36,B.pq,l?B.bI:B.ak,r,48),B.aq)}else r=A.W(D.Zc,A.b0(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=A.d(q,n,2,B.a2,n,n,n,A.l(n,n,l?B.aP:B.M,n,n,n,n,n,n,n,n,n,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ac(w.c)
o=w.e?" \xb7 Printable":""
return A.aF(!1,B.a1,!0,u,A.dN(!1,n,n,n,!0,n,n,n,!0,n,r,n,n,n,n,new C.eJf(m,w,e),!1,n,n,new A.b7(t,new A.az(s,1,B.r,-1)),n,n,A.d(""+p+" block(s)"+o,n,n,n,n,n,n,A.l(n,n,l?B.bI:B.ak,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,A.aH(n,n,n,n,D.bHf,n,n,n,new C.eJg(m,e),n,n,n,n,n,n),n),B.f,v,0,n,n,n,n,n,B.af)},
$S:76}
C.eJg.prototype={
$0(){var w=this.a
w.m(new C.eJd(w,this.b))
w.avg()},
$S:0}
C.eJd.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cz(w,this.b)},
$S:0}
C.eJf.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.aYs(u.b),$async$$0)
case 2:s=e
if(s!=null){t.m(new C.eJe(t,u.c,s))
t.avg()}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eJe.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eJ7.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eJ5.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
return new C.Ug(w,"Answer Document",null)},
$S:z+42}
C.eJ6.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eJ9.prototype={
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
C.eJa.prototype={
$1(d){var w=this.a
return w.m(new C.eJ8(w,d))},
$S:9}
C.eJ8.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.c6K.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fsi.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dWp.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.dW5.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,new C.lt("image","",this.b,null))},
$S:0}
C.dWa.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,new C.lt("video","","data:video/mp4;base64,"+B.cS.gcu().aI(this.b),null))},
$S:0}
C.dW8.prototype={
$1(d){var w=null,v=x.p,u=A.v(A.a([A.aL(w,B.T,!1,w,!0,B.q,w,A.aM(),this.a,w,w,w,w,w,2,D.bNc,B.y,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.am,w,w,w,w),A.aL(w,B.T,!1,w,!0,B.q,w,A.aM(),this.b,w,w,w,w,w,2,D.bNb,B.y,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.am,w,w,w,w)],v),B.m,w,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bK(!1,B.dd,w,w,!0,w,w,new C.dW6(d),w,w),A.bJ(D.ffA,new C.dW7(d),w)],v),w,w,w,u,w,w,w,w,D.f30,w)},
$S:19}
C.dW6.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dW7.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dW9.prototype={
$0(){var w,v=this.a.e
v===$&&A.c()
w=B.a.i(this.b.a.a)
return B.d.J(v,new C.lt("link","",B.a.i(this.c.a.a),w))},
$S:0}
C.dW1.prototype={
$1(d){return B.a.i(d)},
$S:13}
C.dW2.prototype={
$1(d){return d.length!==0},
$S:3}
C.dW3.prototype={
$1(d){return B.a.i(B.a.e7(d,A.af("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.dW4.prototype={
$1(d){return d.length!==0},
$S:3}
C.dWf.prototype={
$0(){var w=this.a.bAl()
A.a5(this.b,!1).N(w)
return null},
$S:0}
C.dWg.prototype={
$0(){return this.a.avh("**","**")},
$S:0}
C.dWh.prototype={
$0(){return this.a.avh("*","*")},
$S:0}
C.dWi.prototype={
$0(){return this.a.avh("__","__")},
$S:0}
C.dWj.prototype={
$0(){return this.a.aWF("## Section title")},
$S:0}
C.dWk.prototype={
$0(){return this.a.aWF("\u2022 First point\n\u2022 Second point")},
$S:0}
C.dWl.prototype={
$0(){},
$S:0}
C.dWm.prototype={
$0(){var w=this.a
w.m(new C.dWe(w))},
$S:0}
C.dWe.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,D.dtf)},
$S:0}
C.dWn.prototype={
$0(){var w=this.a
w.m(new C.dWd(w))},
$S:0}
C.dWd.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,D.dtg)},
$S:0}
C.dWo.prototype={
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
return A.CM(u,v,B.alq,w,u,new C.dWc(this.a,d),u)},
$S:z+45}
C.dWc.prototype={
$0(){var w=this.a
return w.m(new C.dWb(w,this.b))},
$S:0}
C.dWb.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.cz(w,this.b.a)},
$S:0}
C.dVZ.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.aRR},
$S:0}
C.dW_.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.fEF},
$S:0}
C.dVR.prototype={
$0(){var w=this.a
w.d=D.aRQ
w.f=w.e=null},
$S:0}
C.dVS.prototype={
$0(){var w=this.a
w.d=D.aRR
w.f=null},
$S:0}
C.dW0.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+2}
C.dVU.prototype={
$2(d,e){var w=this.a,v=w.gb35()[e]
return new C.aay(v,this.b,new C.dVT(w,v),null)},
$S:z+46}
C.dVT.prototype={
$0(){return this.a.c2U(this.b.a)},
$S:0}
C.dVW.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+47}
C.dVY.prototype={
$2(d,e){return B.S},
$S:36}
C.dVX.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.rK:B.c,p=A.m(16),o=A.m(16),n=A.m(16),m=A.I(r?B.aK:B.aL,B.r,1),l=A.a([new A.ad(0,B.G,B.w.j(r?0.28:0.06),B.dz,8)],x.V),k=A.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=A.m(10)
v=A.m(10)
k.push(A.bv(w,K.aNR(v,B.bQ,52,D.Zc,r?B.bI:B.ak,j,52),B.aq))}else{j=u.d.d
w=A.b0(j).j(0.15)
v=A.m(12)
k.push(A.p(t,A.W(D.Zc,A.b0(j),t,t,t,24),B.f,t,t,new A.o(w,t,t,v,t,t,B.n),t,52,t,t,t,t,t,52))}k.push(B.bf)
k.push(A.D(A.d(s.b,t,t,t,t,t,t,A.l(t,t,r?B.aP:B.M,t,t,t,t,t,t,t,t,13,t,t,B.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(A.W(B.en,r?B.bI:B.ak,t,t,t,22))
return A.aF(!1,B.a1,!0,p,A.aK(!1,o,!0,A.p(t,A.A(k,B.m,t,B.e,B.j,0,t,t),B.f,t,t,new A.o(t,t,m,n,l,t,B.n),t,t,t,t,B.bl,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dVV(u.a,s),t,t,t,t,t,t,t),B.f,q,0,t,t,t,t,t,B.af)},
$S:76}
C.dVV.prototype={
$0(){return this.a.c9D(this.b)},
$S:0}
C.c6M.prototype={
$1(d){return new C.aaq(d,this.a,null)},
$S:z+48}
C.cC3.prototype={
$0(){var w=this.a.c,v=w.c,u=A.of(v==null?w.b:v)
if(u!=null)A.iO(u,B.fj,null)},
$S:0}
C.cC4.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.cC5.prototype={
$1(d){var w=null,v=this.a.d.a,u=A.d("\u2022  ",w,w,w,w,w,w,A.l(w,w,v?B.cm:B.aK,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=B.a.i(d)
return new A.C(B.nD,A.A(A.a([u,A.D(A.d(t,w,w,w,w,w,w,A.l(w,w,v?B.cm:B.aK,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.F,w,B.e,B.j,0,w,w),w)},
$S:134}
C.dcX.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dcZ.prototype={
$0(){return this.a.m(new C.dcY(this.b))},
$S:0}
C.dcY.prototype={
$0(){var w=this.a
return w.a.f?w.fY(0):w.pp(0)},
$S:0}
C.fam.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.dWD.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.BX)w.z=v
else w.Q=v},
$S:0}
C.dWu.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=B.d.gcY(v).Q
v.toString
w.lR(v,B.cp,B.eN)},
$S:8}
C.dWw.prototype={
$1(d){return J.q(d,"role")==="ai"},
$S:93}
C.dWx.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.E(["role","user","text",this.b],v,v))
w.d.bM(0,B.c3)
w.r=!0},
$S:0}
C.dWy.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.E(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.dWz.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+A.t(w.h(d,"text"))},
$S:141}
C.dWA.prototype={
$0(){var w=x.N
return this.a.f.push(A.E(["role","ai","text",this.b],w,w))},
$S:0}
C.dWB.prototype={
$0(){var w=x.N
return this.a.f.push(A.E(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.dWC.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dWv.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=A.mA(l,B.bA.j(0.9),l,l,l,l,l,2,l,l)
return new A.C(B.bY,A.A(A.a([new A.a6(22,22,k,l),B.aw,A.d("Writing full song\u2026",l,l,l,l,l,l,A.l(l,l,this.b?B.ay:B.dy,l,l,l,l,l,l,l,l,12,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),B.m,l,B.e,B.j,0,l,l),l)}w=k.f[e]
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
q=new A.a7(B.a3,B.a7,B.x,v?A.a([B.bn,B.M],q):A.a([B.c,B.aP],q),l,l)}p=A.a([new A.ad(0,B.G,(u?B.bA:B.aE).j(0.22),B.jc,14)],x.V)
o=A.I(B.c.j(u?0.2:0.08),B.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=B.c
else v=v?B.aL:B.bh
n=u?13.5:15
m=u?B.bm:B.cD
return new A.bI(t,l,l,A.p(l,A.d(w,l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?B.a4:B.cs,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,new A.aY(0,k.a.a*0.94,0,1/0),new A.o(l,l,o,new A.bs(B.jX,B.jX,new A.aV(s,s),new A.aV(r,r)),p,q,B.n),l,l,l,B.kB,B.j5,l,l,l),l)},
$S:41}
C.dWK.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&A.c()
w=m.x
w===$&&A.c()
v=A.m(22)
u=this.b
t=x.O
s=u?A.a([D.abt,B.M,B.np],t):A.a([B.qq,B.ql,B.p6],t)
w=A.a([new A.ad(-4,B.G,B.aE.j(0.35+w*0.25),B.dn,28)],x.V)
r=A.I(B.c.j(u?0.08:0.5),B.r,1)
q=A.dl()
p=q.a
p.$flags&2&&A.ai(p)
p[11]=0.001
m=m.x
m===$&&A.c()
q.fu(m*0.08)
q=A.fr(B.A,A.p(o,D.bDZ,B.f,o,o,new A.o(o,o,A.I(B.aM.j(0.6),B.r,2),o,o,D.e7c,B.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=A.nB(B.jg,D.fjT,new C.dWH())
p=x.p
m=A.a([A.A(A.a([q,B.bf,A.D(A.v(A.a([m,A.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,A.l(o,o,u?B.aR:B.aW,o,o,o,o,o,o,o,o,10,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),B.F,o,B.e,B.j,0,B.p),1)],p),B.m,o,B.e,B.j,0,o,o),B.ac,A.A(A.a([n.atw(D.BX,"Swahili","\ud83c\uddf9\ud83c\uddff",u),B.ab,n.atw(D.aDD,"English","\ud83c\uddec\ud83c\udde7",u),B.ab,n.atw(D.BY,"Mix","\ud83d\udd25",u)],p),B.m,o,B.e,B.j,0,o,o)],p)
if(n.x!==D.BY){t=A.a([B.P,n.cse(u)],p)
if(n.w){q=n.x===D.BX?D.a1W:D.a19
p=A.S(q).k("J<1,r>")
q=A.B(new A.J(q,new C.dWI(n,u),p),p.k("aj.E"))
t.push(new A.C(B.kb,A.c4(B.bE,q,B.bx,6,6),o))}B.d.v(m,t)}else{t=A.a([B.bA.j(0.22),B.aE.j(0.12)],t)
q=A.m(12)
p=A.I(B.bA.j(0.45),B.r,1)
m.push(new A.C(B.kb,A.p(o,A.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,A.l(o,o,u?B.ij:B.ky,o,o,o,o,o,o,o,o,10,o,o,B.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),B.f,o,o,new A.o(o,o,p,q,o,new A.a7(B.a3,B.a7,B.x,t,o,o),B.n),o,o,o,o,B.bR,o,o,o),o))}m.push(B.P)
t=x.dc
n=A.B(new A.J(D.d_e,new C.dWJ(n,u),t),t.k("aj.E"))
m.push(A.A(n,B.m,o,B.e,B.j,0,o,o))
return A.p(o,A.v(m,B.aj,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,r,v,w,new A.a7(B.ax,B.aC,B.x,s,o,o),B.n),o,o,o,I.afq,I.afF,o,o,o)},
$S:89}
C.dWH.prototype={
$1(d){return D.bRo.aw(0,d)},
$S:66}
C.dWI.prototype={
$1(d){return this.a.csf(d,this.b)},
$S:z+49}
C.dWJ.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aDF?6:0,m=o?5:0,l=A.m(12)
if(o){w=this.b
v=w?B.aE.j(0.45):B.aE.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=B.w.j(w?0.25:0.05)
u=v
v=w
w=u}t=A.m(12)
p=p.r?q:new C.dWG(p,d)
s=C.hvQ(d)
if(o)r=B.c
else r=v?B.ad:B.bh
r=A.d(s,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.hvR(d)
if(o)v=B.ad
else v=v?B.c_:B.dy
return A.D(new A.C(new A.O(0,0,n,0),A.aF(!1,B.a1,!0,l,A.aK(!1,t,!0,new A.C(F.La,A.v(A.a([r,A.d(s,q,q,q,q,q,q,A.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.e,B.j,0,B.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,w,m,q,q,q,q,q,B.af),q),1)},
$S:z+50}
C.dWG.prototype={
$0(){var w=this.a
return w.m(new C.dWF(w,this.b))},
$S:0}
C.dWF.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dWM.prototype={
$0(){var w=this.a
return w.m(new C.dWL(w))},
$S:0}
C.dWL.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dWt.prototype={
$0(){var w=this.a
return w.m(new C.dWs(w,this.b))},
$S:0}
C.dWs.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.BY
if(v===D.aDD&&w.Q==null)w.Q=B.d.gL(D.a19).a},
$S:0}
C.dWN.prototype={
$0(){return this.a.cnX(this.b.a)},
$S:0}
C.dWE.prototype={
$0(){return this.a.Ic(this.b)},
$S:0}
C.dWq.prototype={
$1(d){return this.a.aWG()},
$S:2}
C.dWr.prototype={
$0(){return this.a.aWG()},
$S:0}
C.fEi.prototype={
$1(d){var w=this
return new C.Yw(w.a,w.b,w.c,new C.fEh(w.d),null)},
$S:z+51}
C.fEh.prototype={
$0(){return J.lN(this.a.bc())},
$S:0}
C.dag.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.bdC()},
$S:27}
C.dah.prototype={
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
p=q?B.dV:B.h6
o=B.o.F(w,4)
q=q?B.aJ:B.aI
return A.ao(n,A.db(A.W(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:308}
C.dam.prototype={
$0(){},
$S:0}
C.dal.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&A.c()
w=t.x
w===$&&A.c()
v=B.lV.av(0,B.k.D(w,0,1))
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793)
w=A.dl()
u=w.a
u.$flags&2&&A.ai(u)
u[11]=0.0028
w.fu(t*0.08)
w.jJ(0.12)
return A.e9(B.A,A.fr(B.A,e,null,w,!0),0.5+v*0.5,null,null)},
$S:45}
C.dai.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=0.55+r*0.45
r=A.p(t,t,B.f,t,t,new A.o(t,t,t,t,A.a([new A.ad(6,B.G,B.aJ.j(w*0.5),B.J,36)],x.V),t,B.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new A.an(B.A,t,B.aa,B.q,A.a([r,new A.a6(96,96,A.mA(B.c.j(0.08),B.aJ,t,t,t,t,t,6,u/v,t),t),A.d(""+s.a.c,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,38,t,t,B.u,t,t,!0,t,t,t,t,t,A.a([new A.cP(B.aJ.j(w),B.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:112}
C.daj.prototype={
$1(d){return D.bRs.aw(0,d)},
$S:66}
C.dak.prototype={
$0(){var w=this.a
w.a.bdC()
w.a.e.$0()},
$S:0}
C.c8K.prototype={
$1(d){var w=!1
if(B.a.i(d.b.toLowerCase())===this.a)if(d.d===B.fq)if(d.x===B.ds){w=d.w
w=B.a.i(w==null?"":w)===this.b}return w},
$S:16}
C.c8X.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e6b.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.e6S.prototype={
$1(d){var w=this.a
if(w.c!=null)w.OP()},
$S:8}
C.e6T.prototype={
$1(d){var w=$.aU.p2$
if(w===B.ru||w===B.rv)return
this.a.DZ()},
$S:14}
C.e6U.prototype={
$1(d){this.a.cum()},
$S:14}
C.e6A.prototype={
$0(){this.a.IF(this.b.d,!1)},
$S:0}
C.e6B.prototype={
$0(){},
$S:0}
C.e6C.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.e6D.prototype={
$0(){},
$S:0}
C.e6E.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e6F.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.e6G.prototype={
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
C.e6v.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=A.bl(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=A.bl(v[1],!0,x.N)
w.Od()
w.a6Z()},
$S:0}
C.e6c.prototype={
$0(){this.b.IF(this.c.d+this.a.a,!1)},
$S:0}
C.e6w.prototype={
$1(d){var w=d.d
return(w===B.fq||w===B.eK)&&d.x===B.ds},
$S:16}
C.e6x.prototype={
$1(d){return d.a},
$S:168}
C.e6y.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e6z.prototype={
$0(){},
$S:0}
C.e6g.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bl(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=A.bl(v[0],!0,x.N)},
$S:0}
C.e6h.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.e6p.prototype={
$0(){},
$S:0}
C.e6m.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.e6n.prototype={
$0(){var w=this.a,v=A.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e6o.prototype={
$0(){var w=this.a,v=A.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e6q.prototype={
$0(){return this.a.z=!0},
$S:0}
C.e6r.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new A.v5(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.e6s.prototype={
$0(){return this.a.z=!1},
$S:0}
C.e6u.prototype={
$0(){var w=this.a
return w.m(new C.e6t(w))},
$S:0}
C.e6t.prototype={
$0(){return this.a.y=1},
$S:0}
C.e6i.prototype={
$0(){return this.a.y=1},
$S:0}
C.e6j.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.e6K.prototype={
$1(d){return d.a.length===0},
$S:16}
C.e6L.prototype={
$2(d,e){return e.y.aL(0,d.y)},
$S:72}
C.e6P.prototype={
$0(){var w=this.a
return w.m(new C.e6I(w))},
$S:0}
C.e6I.prototype={
$0(){return this.a.y=1},
$S:0}
C.e6Q.prototype={
$0(){var w=this.a
return w.m(new C.e6H(w))},
$S:0}
C.e6H.prototype={
$0(){return this.a.y=2},
$S:0}
C.e6R.prototype={
$0(){return A.iK(this.a,null)},
$S:0}
C.e6M.prototype={
$2$cloudRequest(d,e){return this.a.aXM(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1653}
C.e6N.prototype={
$0(){return this.a.DZ()},
$S:1}
C.e6O.prototype={
$0(){var w=this.a
return w.m(new C.e6J(w))},
$S:0}
C.e6J.prototype={
$0(){var w=this.a
return w.y=B.o.D(w.y-1,0,2)},
$S:0}
C.e6f.prototype={
$0(){A.eO()
var w=this.a
w.m(new C.e6e(w))},
$S:0}
C.e6e.prototype={
$0(){return this.a.y=0},
$S:0}
C.e6d.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=A.bCz(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.c.j(0.55),B.r,1.2),t,A.a([new A.ad(1,B.G,B.av.j(0.55),B.J,18)],x.V),D.bPx,B.a6),t,t,t,t,t,t,t,t),B.eu,B.ta,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=A.a([],w)
for(u=0;u<3;++u)v.push(r.bZV(u))
return new A.an(B.W,t,B.aa,B.q,A.a([q,A.A(v,B.m,t,B.e,B.j,0,t,t)],w),t)},
$S:62}
C.e6l.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
A.eO()
w.m(new C.e6k(w,v))},
$S:0}
C.e6k.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.deK.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===B.fq||v===B.eK)return!0
if(d.c!==0)v=B.a.t(w,"clock-in daily earnings")||B.a.t(w,"clock-in earnings")
else v=!1
return v},
$S:16}
C.deL.prototype={
$1(d){return new A.R(Date.now(),0,!1)},
$S:495}
C.deM.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new A.R(Date.now(),0,!1)
u=A.dz(C.fLq(v.c,u))
w=this.c?new C.deJ(v):null
return v.b4Q(this.b,B.pB,D.eH,w,"Today","$"+u,D.eH)},
$S:1655}
C.deJ.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.deN.prototype={
$2(d,e){var w=this.a
return w.b4Q(this.b,B.jQ,B.c8,w.w,"Balance","$"+A.dz(A.Kg(w.c.a,new C.deI(w))),B.cu)},
$S:59}
C.deI.prototype={
$0(){return this.a.c.d},
$S:79}
C.deD.prototype={
$0(){this.a.a.cLl()
return null},
$S:0}
C.deE.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(w,w,w,new C.bt5(v,w),B.at)},
$S:69}
C.deF.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b9h(v,!0,B.av,D.o9,w)}else{v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b9g(v,D.o9,w)}return A.b3(w,w,w,v,B.at)},
$S:69}
C.deG.prototype={
$1(d){return new A.R(Date.now(),0,!1)},
$S:495}
C.deH.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new A.R(Date.now(),0,!1)
w=r.a
v=w.a.cK8(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:B.k.D(v/u,0,1)}u=w.d
u===$&&A.c()
s=w.e
s===$&&A.c()
return A.c6(new A.h2(A.a([u,s],x.U)),new C.deC(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1656}
C.deC.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=A.a([],m),k=o.b
if(k)B.d.v(l,A.ip(7,new C.deB(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&A.c()
v=v.x
v===$&&A.c()
u=o.d
l.push(A.b3(n,n,n,new C.b9f(o.c,v,k,u,D.o9,D.bhu,n),D.eFG))
v=A.I(B.c.j(0.1),B.r,1.2)
if(k)t=B.vb
else t=o.e?B.v3:D.bz8
t=A.W(t,k?D.o9:B.b2,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=A.d(s,n,n,n,n,n,n,A.l(n,n,B.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,B.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+A.dz(w.f&&w.d>0?w.d:o.f)}q=k?D.o9:B.c
w=A.d(w,n,n,n,n,n,n,A.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,B.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=A.m(999)
p=u.j(0.16)
u=A.I(u.j(0.5),B.r,1)
l.push(A.p(n,A.v(A.a([t,B.ao,s,B.au,w,B.P,A.p(n,A.d(o.r,n,n,n,n,n,n,A.l(n,n,k?D.o9:B.of,n,n,n,n,n,n,n,n,9,n,n,B.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),B.f,n,n,new A.o(p,n,u,q,n,n,B.n),n,n,n,n,B.kD,n,n,n)],m),B.m,n,B.b9,B.j,0,B.p),B.f,n,n,new A.o(B.K,n,v,n,n,n,B.a6),n,176,n,n,n,n,n,176))
return A.av(new A.a6(276,276,new A.an(B.A,n,B.aa,B.f,l,n),n),n,n,n)},
$S:227}
C.deB.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=B.k.F(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=B.o.F(d,3)
t=B.o.F(d,2)
return A.ao(s,A.e2(A.db(A.p(s,s,B.f,s,s,new A.o(s,s,s,A.m(40),s,new A.bR(B.A,0.5,B.x,s,0,A.a([D.o9.j(0.38),B.c.j(0.08),B.K],x.O),s,s),B.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),!0,s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:211}
C.df3.prototype={
$0(){},
$S:0}
C.df4.prototype={
$0(){},
$S:0}
C.df5.prototype={
$1(d){return d.x===B.ds},
$S:16}
C.deQ.prototype={
$0(){return this.a.a.d.d},
$S:79}
C.deP.prototype={
$0(){var w,v
A.eO()
w=this.a
v=this.b
w.m(new C.deO(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)A.fe(null,x.H)}},
$S:0}
C.deO.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.df0.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=A.m(12),q=s?w.b.j(0.18):B.c.j(0.04),p=A.I(s?w.b.j(0.7):B.c.j(0.08),B.r,1)
return A.D(new A.C(B.jq,A.aE(v,A.df(B.A,A.d("$"+t,v,v,v,v,v,v,A.l(v,v,s?w.b:B.ad,v,v,v,v,v,v,v,v,13,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,B.bb,new A.o(q,v,p,r,v,v,B.n),B.hW,v,38,v,v,v,v,v),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.df2(u,d),v,v,v,v,v,v,!1,B.a9),v),1)},
$S:1658}
C.df2.prototype={
$0(){A.eO()
var w=this.a
w.m(new C.df1(w,this.b))},
$S:0}
C.df1.prototype={
$0(){var w=""+this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.df_.prototype={
$4$bold$color(d,e,f,g){var w=null,v=A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?B.c:g,t=f?15:13
return new A.C(B.x2,A.A(A.a([v,B.b3,A.d(e,w,w,w,w,w,w,A.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?B.u:B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1659}
C.deZ.prototype={
$1(d){return this.a.m(new C.deY())},
$S:2}
C.deY.prototype={
$0(){},
$S:0}
C.deT.prototype={
$1(d){return this.a.aTt(d)&&!A.fSS(d)},
$S:16}
C.deU.prototype={
$2(d,e){return e.y.aL(0,d.y)},
$S:72}
C.deV.prototype={
$0(){return this.a.a.d.d},
$S:79}
C.deW.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return A.b(x.r.b(s)?s:A.dR(s,x.H),$async$$0)
case 2:if(t.c!=null)t.m(new C.deS())
t.lN("Balance refreshed.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.deS.prototype={
$0(){},
$S:0}
C.deX.prototype={
$0(){var w=this.a
return w.m(new C.deR(w))},
$S:0}
C.deR.prototype={
$0(){return this.a.r+=80},
$S:0}
C.foh.prototype={
$2(d,e){return e.y.aL(0,d.y)},
$S:72}
C.fi7.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail"),u=!1
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.y(v,this.b)){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fyF.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail")
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fi6.prototype={
$1(d){var w,v,u
if(!C.hRl(d,this.a))return!1
w=J.a8(d)
v=w.h(d,"sessionUpdatedAt")
v=A.bi(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=A.bi(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=A.bi(J.k(w==null?"":w))}if(u!=null&&B.o.an(new A.R(Date.now(),0,!1).by(u).a,36e8)>72)return!1
return!0},
$S:4}
C.f7V.prototype={
$1(d){var w=this.a
if(B.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:78}
C.fxu.prototype={
$0(){return $.fQr=null},
$S:11}
C.fxv.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.fvp.prototype={
$1(d){return A.a1(d,x.N,x.z)},
$S:7}
C.fvq.prototype={
$0(){var w,v=this.a
$.fQf.W(0,v)
w=C.tG(this.b,v)
if(w!=null)A.PO(A.a([A.a1(w,x.N,x.z)],x._),v)},
$S:0}
C.fzK.prototype={
$1(d){return new C.Zj(this.a,this.b,null)},
$S:z+56}
C.e0r.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.e0u.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.e0v.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.m(new C.e0t(w))},
$S:2}
C.e0t.prototype={
$0(){return this.a.f=""},
$S:0}
C.e0w.prototype={
$1(d){return this.a.aWU()},
$S:2}
C.e0x.prototype={
$0(){var w=this.a
return w.m(new C.e0s(w,this.b))},
$S:0}
C.e0s.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fhi.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+B.a.b_(d,1)},
$S:13}
C.fhh.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+B.a.b_(d,1)},
$S:13}
C.fxL.prototype={
$1(d){var w,v=x.f
if(v.b(d))return A.a1(d,x.N,x.z)
try{v=A.a1(v.a(d.ad()),x.N,x.z)
return v}catch(w){return A.V(x.N,x.z)}},
$S:12}
C.fxM.prototype={
$1(d){return J.cw(d)},
$S:4}
C.frG.prototype={
$1(d){return d.a!=="send_email"},
$S:325}
C.fxc.prototype={
$1(d){var w=null,v=B.w.j(0.35),u=A.m(10),t=A.I(B.b6,B.r,1)
return A.p(B.A,A.d(d,w,w,w,w,w,w,B.je,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,86,w,B.eQ,w,w,w,72)},
$S:490}
C.cav.prototype={
$1(d){return J.k(d)},
$S:17}
C.caw.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b6(d,new C.cau(),x.S)
w=A.B(w,w.$ti.k("aj.E"))
return w}return A.c1(7,0,!1,x.S)},
$S:473}
C.cau.prototype={
$1(d){var w
if(A.iD(d))w=d
else{w=A.c7(J.k(d),null)
if(w==null)w=0}return w},
$S:365}
C.cax.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b6(d,new C.cat(),x.S)
w=A.B(w,w.$ti.k("aj.E"))
return w}return A.c1(8,0,!1,x.S)},
$S:473}
C.cat.prototype={
$1(d){var w
if(A.iD(d))w=d
else{w=A.c7(J.k(d),null)
if(w==null)w=0}return w},
$S:365}
C.caz.prototype={
$1(d){return A.bl(d,!0,x.S)},
$S:472}
C.caA.prototype={
$1(d){return A.bl(d,!0,x.S)},
$S:472}
C.cas.prototype={
$1(d){var w=this.a
if(B.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:78}
C.cay.prototype={
$2(d,e){return d+e},
$S:74}
C.car.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.q(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:74}
C.fiQ.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fiK.prototype={
$0(){return this.a.$1(D.pL)},
$S:0}
C.fiL.prototype={
$0(){return this.a.$1(D.pL)},
$S:0}
C.fiM.prototype={
$0(){return this.a.$1(D.pL)},
$S:0}
C.fiN.prototype={
$0(){return this.a.$1(D.pL)},
$S:0}
C.fiO.prototype={
$0(){return this.a.$1(D.pL)},
$S:0}
C.fiP.prototype={
$0(){return this.a.$1(D.pL)},
$S:0}
C.f5g.prototype={
$2(d,e){var w,v,u=this,t=null,s=B.o.an(e,8),r=B.o.F(e,8),q=B.o.F(s+r,2),p=u.a,o=J.q(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.VD:D.b6h
if(o===0)w=t
else{w=x.O
w=o===1?A.a([B.c,B.aL],w):A.a([B.bn,B.w],w)
v=n?B.aM:B.dm
w=A.p(t,t,B.f,t,t,new A.o(t,t,A.I(v,B.r,n?3:1),t,A.a([new A.ad(0,B.G,B.w.j(0.35),B.dz,4)],x.V),new A.bR(B.A,0.5,B.x,t,0,w,t,t),B.a6),t,28,t,t,t,t,t,28)}return A.aE(t,A.p(t,A.av(w,t,t,t),B.f,q,t,t,t,t,t,t,t,t,t,t),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f5f(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,B.a9)},
$S:75}
C.f5f.prototype={
$0(){var w=this,v=w.a,u=v.cPY(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.pL:D.H5
w.f.$1(v)}},
$S:0}
C.fhs.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new A.a6(u,u,A.ib(!0,v,v,B.y,Q.aLZ,new C.fhr(w.a,w.b,w.c,w.d,u),9,v,B.dP,B.ah,!1),v)},
$S:156}
C.fhr.prototype={
$2(d,e){var w=this,v=null,u=A.m(12),t=A.m(12),s=w.a,r=s.at[e],q=r==="X"?B.aX:B.aD
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.av(A.d(r,v,v,v,v,v,v,A.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fhq(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),B.f,B.fl,0,v,v,v,v,v,B.af)},
$S:76}
C.fhq.prototype={
$0(){var w=this,v=w.a.cPZ(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.f4H.prototype={
$1(d){return new A.C(B.jq,C.fvg(d,!1),null)},
$S:332}
C.f4I.prototype={
$1(d){return C.fvg(d,!1)},
$S:1663}
C.f4J.prototype={
$0(){var w=this,v=w.a
v.cA9(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.f4K.prototype={
$0(){var w=this
w.a.cAa(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.feF.prototype={
$1(d){var w=this,v=null,u=d*6
return A.mx(v,B.bn,A.d(""+u,v,v,v,v,v,v,B.cc,v,v,v),B.dk,new C.feE(w.a,w.b,u,w.c,w.d),v,v,new A.az(B.c.j(0.2),1,B.r,-1),v)},
$S:1664}
C.feE.prototype={
$0(){var w=this,v=w.a,u=w.b.aB(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.fgz.prototype={
$1(d){return D.d2T[d]},
$S:73}
C.fgA.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=A.a([s.aB(6),s.aB(6),s.aB(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.fdp.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.fdq.prototype={
$0(){var w=this,v=w.a
if(w.b.ai()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.f5J.prototype={
$0(){var w=this,v=w.a.cFI(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.f5I.prototype={
$1(d){var w,v=null,u=J.q(this.a.fr[5-d],this.b)
if(u===0)w=B.m3
else w=u===1?B.dD:B.r_
return new A.fF(1,A.p(v,v,B.f,v,v,new A.o(w,v,A.I(B.bF,B.r,1),v,v,v,B.a6),v,v,v,B.mS,v,v,v,v),v)},
$S:1665}
C.fdC.prototype={
$1(d){var w=this
if(w.a.b8e(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.fdD.prototype={
$0(){var w=this
if(w.a.b8e(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.f5a.prototype={
$0(){var w=this
if(w.a.ai()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fnh.prototype={
$1(d){var w=J.q(d,"email")
return B.a.t(B.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fni.prototype={
$1(d){var w,v=J.a8(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=B.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+B.a.i(J.k(v==null?"":v))+">"},
$S:51}
C.eyl.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aIR.prototype
w.bqO=w.a_
w.bqN=w.q
w=C.aIS.prototype
w.bqQ=w.a_
w.bqP=w.q
w=C.aIT.prototype
w.bqS=w.a_
w.bqR=w.q
w=C.aJP.prototype
w.brQ=w.a_
w.brP=w.q
w=C.aJo.prototype
w.bro=w.q
w=C.aJY.prototype
w.brZ=w.q
w=C.aIU.prototype
w.bqT=w.q
w=C.aK5.prototype
w.bs7=w.q
w=C.aIZ.prototype
w.bqY=w.q
w=C.aJe.prototype
w.bre=w.q
w=C.aKM.prototype
w.bsO=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.ayD.prototype,"gbMn","bMo",19)
v(q,"gaQ_","aQ0",1)
v(C.ayC.prototype,"gcrh","a0U",1)
v(q=C.ayE.prototype,"gbRH","bRI",1)
v(q,"gbC2","bC3",1)
v(q=C.avP.prototype,"gckw","ckx",1)
v(q,"gc9a","Pg",0)
v(q,"gcv9","cva",1)
v(q,"gcnu","mG",0)
w(q,"gcdt","cdu",25)
w(q,"gctx","QZ",33)
v(q=C.aAK.prototype,"gbKu","Wr",0)
v(q,"gc_v","XT",0)
v(q,"gc_s","XS",0)
v(q,"gc_t","abC",0)
v(q,"gc_u","Og",0)
v(C.ay0.prototype,"gc_w","c_x",1)
u(C,"hYx","hu2",58)
t(C,"fSZ",0,null,["$1","$0"],["hcI",function(){return C.hcI(null)}],3,0)
t(C,"bB0",0,null,["$1","$0"],["hcH",function(){return C.hcH(null)}],3,0)
v(C.M8.prototype,"gDJ","c6n",1)
v(C.aBv.prototype,"gckN","Ac",0)
v(q=C.aBM.prototype,"gc9u","Pi",0)
v(q,"gcea","a_9",0)
v(q,"gc2O","c2P",1)
v(q=C.aBY.prototype,"gc2T","acw",0)
v(q,"gbvO","a6P",0)
v(q,"gcl0","a07",0)
s(q,"gc6S","c6T",35)
v(C.aDX.prototype,"gbwe","a6R",1)
v(q=C.aDW.prototype,"gc2S","acv",0)
v(q,"gc8s","adz",0)
v(q=C.aC_.prototype,"gbVn","aas",0)
v(q,"gbVp","X4",0)
v(q,"gbVo","aat",0)
v(q=C.aBZ.prototype,"gbyz","byA",1)
v(q,"gbyB","byC",1)
v(C.aC0.prototype,"gbEh","bEi",1)
v(C.ayY.prototype,"gc2V","c2W",1)
v(q=C.aCn.prototype,"gaWO","c3a",1)
r(q,"gaXK",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["adb","avS","aXM","aXL"],52,0,0)
r(q,"gc65",0,4,null,["$4"],["c66"],53,0,0)
v(q,"gc8b","Zj",0)
v(q,"gc91","adG",0)
v(q,"gc8Y","adE",0)
v(q,"gbYg","abc",0)
w(C.azK.prototype,"gbX5","bX6",54)
w(q=C.azM.prototype,"gcsn","cso",55)
v(q,"gcr8","cr9",1)
v(q,"gcyz","cyA",1)
v(C.aCa.prototype,"gc3v","aWU",1)
v(C.aCZ.prototype,"gaXl","avF",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.jr,[C.coV,C.coS,C.coT,C.coU,C.coR,C.eUf,C.eUd,C.eUh,C.eUe,C.fbW,C.d6K,C.d6V,C.d72,C.d73,C.d75,C.d6Y,C.d6W,C.d6X,C.d6Z,C.d7_,C.d6Q,C.d6R,C.d6P,C.d6T,C.d6U,C.d6N,C.d6M,C.d77,C.d7a,C.dKH,C.dKG,C.dKI,C.dKF,C.dKE,C.d6E,C.d6H,C.d6I,C.d6G,C.d6F,C.d8w,C.d8x,C.d8y,C.d7M,C.d7N,C.d8g,C.d81,C.d82,C.d83,C.d84,C.d85,C.d7e,C.d7L,C.d8h,C.d8q,C.d8e,C.d8d,C.d7J,C.d7K,C.d8m,C.d8n,C.d7g,C.d7h,C.d7V,C.d7W,C.d7X,C.d7U,C.d86,C.d87,C.d88,C.d89,C.d8a,C.d8b,C.d8k,C.d7Y,C.d7Z,C.d8_,C.d80,C.d8o,C.d8p,C.d7i,C.d7j,C.d7k,C.d7l,C.d8i,C.d8j,C.d7T,C.d8c,C.d7R,C.d8r,C.d8s,C.d8t,C.d7O,C.d7x,C.d7w,C.d7v,C.d7B,C.d7u,C.d7s,C.d7n,C.d7q,C.d7m,C.d7G,C.d7H,C.d7o,C.dc2,C.czh,C.cz7,C.cz8,C.czr,C.czo,C.czp,C.czq,C.czj,C.czi,C.cz9,C.czk,C.czK,C.czG,C.czF,C.czf,C.czg,C.czc,C.czn,C.czv,C.czw,C.czx,C.czy,C.czz,C.czA,C.czB,C.czW,C.czP,C.czM,C.czR,C.czO,C.czL,C.cza,C.czI,C.dsy,C.dsz,C.dsp,C.dsn,C.dsx,C.dsm,C.dsl,C.dso,C.dst,C.dsu,C.dsr,C.dss,C.dsA,C.dsB,C.dsC,C.dsD,C.eO6,C.eO7,C.d1D,C.fob,C.dyZ,C.dyR,C.dyT,C.dyX,C.dyS,C.dyU,C.dyV,C.c3B,C.fve,C.fvd,C.dsa,C.ds9,C.dsb,C.ds8,C.dRI,C.dRJ,C.dRQ,C.fDw,C.fDx,C.bXI,C.dKN,C.dKO,C.dKP,C.dKQ,C.dKR,C.dKS,C.dKM,C.dKT,C.dKL,C.dKW,C.dKV,C.dKU,C.dS9,C.dSa,C.dS7,C.dS6,C.dS8,C.dS4,C.dVJ,C.dVK,C.dVs,C.dVu,C.dVG,C.dVH,C.dVB,C.dVz,C.dVF,C.dVC,C.dVw,C.dVv,C.dVL,C.cIm,C.cIk,C.cIl,C.cIj,C.cIp,C.cIq,C.eJb,C.eJg,C.eJd,C.eJf,C.eJe,C.eJ7,C.eJ6,C.eJ9,C.eJ8,C.dW5,C.dWa,C.dW6,C.dW7,C.dW9,C.dWf,C.dWg,C.dWh,C.dWi,C.dWj,C.dWk,C.dWl,C.dWm,C.dWe,C.dWn,C.dWd,C.dWc,C.dWb,C.dVZ,C.dW_,C.dVR,C.dVS,C.dVT,C.dVV,C.cC3,C.dcX,C.dcZ,C.dcY,C.dWD,C.dWx,C.dWy,C.dWA,C.dWB,C.dWC,C.dWG,C.dWF,C.dWM,C.dWL,C.dWt,C.dWs,C.dWN,C.dWE,C.dWr,C.fEh,C.dam,C.dak,C.e6b,C.e6A,C.e6B,C.e6C,C.e6D,C.e6F,C.e6G,C.e6v,C.e6c,C.e6z,C.e6g,C.e6h,C.e6p,C.e6m,C.e6n,C.e6o,C.e6q,C.e6r,C.e6s,C.e6u,C.e6t,C.e6i,C.e6j,C.e6P,C.e6I,C.e6Q,C.e6H,C.e6R,C.e6N,C.e6O,C.e6J,C.e6f,C.e6e,C.e6l,C.e6k,C.deJ,C.deI,C.deD,C.df3,C.df4,C.deQ,C.deP,C.deO,C.df2,C.df1,C.deY,C.deV,C.deW,C.deS,C.deX,C.deR,C.fxu,C.fvq,C.e0r,C.e0u,C.e0t,C.e0x,C.e0s,C.fiK,C.fiL,C.fiM,C.fiN,C.fiO,C.fiP,C.f5f,C.fhq,C.f4J,C.f4K,C.feE,C.fgA,C.fdq,C.f5J,C.fdD,C.f5a,C.eyl])
u(A.i7,[C.coW,C.eUg,C.fs_,C.frS,C.fbT,C.fbS,C.fbV,C.d7c,C.d7d,C.d71,C.d70,C.d74,C.d6O,C.d6S,C.d76,C.dKK,C.d6J,C.d8z,C.d8A,C.d8B,C.d8C,C.d8D,C.d8f,C.d8l,C.d7f,C.d8v,C.d8u,C.d7y,C.d7z,C.d7A,C.d7C,C.d7E,C.dc3,C.czX,C.czm,C.czl,C.czE,C.czH,C.czD,C.czd,C.czu,C.czs,C.czJ,C.czt,C.czS,C.czQ,C.czV,C.bWq,C.bWp,C.bWs,C.bWr,C.dsw,C.dsv,C.dsq,C.dsE,C.dsF,C.ffc,C.fgp,C.d1E,C.d1C,C.bXb,C.foa,C.dz_,C.dyY,C.c3C,C.fhb,C.fvc,C.c5A,C.c5z,C.c61,C.dRG,C.dRH,C.fqy,C.fql,C.fqk,C.fdt,C.c6f,C.c6g,C.c6h,C.c6e,C.c6d,C.fbD,C.fDs,C.fDt,C.fDu,C.fDv,C.fDr,C.dRN,C.dRO,C.dRM,C.fDy,C.d8E,C.c7Q,C.faC,C.dKX,C.dS5,C.c6H,C.c6E,C.c6G,C.c6J,C.c_5,C.c_3,C.c_8,C.c6Q,C.c6P,C.c6O,C.c6N,C.c6S,C.c6U,C.dVP,C.dVt,C.dVr,C.dVI,C.dVA,C.dVE,C.dVD,C.dVy,C.dVN,C.dVM,C.cIn,C.cIo,C.eJc,C.eJ5,C.eJa,C.c6K,C.fsi,C.dWp,C.dW8,C.dW1,C.dW2,C.dW3,C.dW4,C.dWo,C.c6M,C.cC4,C.cC5,C.fam,C.dWu,C.dWw,C.dWz,C.dWH,C.dWI,C.dWJ,C.dWq,C.fEi,C.dag,C.daj,C.c8K,C.c8X,C.e6S,C.e6T,C.e6U,C.e6E,C.e6w,C.e6x,C.e6y,C.e6K,C.e6M,C.deK,C.deL,C.deG,C.deB,C.df5,C.df0,C.df_,C.deZ,C.deT,C.fi7,C.fyF,C.fi6,C.f7V,C.fxv,C.fvp,C.fzK,C.e0v,C.e0w,C.fhi,C.fhh,C.fxL,C.fxM,C.frG,C.fxc,C.cav,C.caw,C.cau,C.cax,C.cat,C.caz,C.caA,C.cas,C.fiQ,C.f4H,C.f4I,C.feF,C.fgz,C.fdp,C.f5I,C.fdC,C.fnh,C.fni])
t(C.bpf,A.iN)
u(A.ag,[C.ED,C.ajG,C.aBu,C.ajF,C.ajH,C.akx,C.agT,C.am4,C.Z_,C.Z0,C.Y7,C.amz,C.am3,C.ME,C.ayF,C.anw,C.ao9,C.Uf,C.Ou,C.ZN,C.ZM,C.Ug,C.aos,C.azx,C.aov,C.Yw,C.ap3,C.azJ,C.azL,C.Zj,C.aql])
u(A.ah,[C.aGr,C.aIS,C.aJP,C.aIR,C.aIT,C.bez,C.avP,C.aAK,C.bgZ,C.bh_,C.ay0,C.bh5,C.aJo,C.aJY,C.aIU,C.aBv,C.aBM,C.aBY,C.b8N,C.aDX,C.aDW,C.aC_,C.aBZ,C.beN,C.aK5,C.aIZ,C.bv1,C.aJe,C.azM,C.aCa,C.aKM])
u(A.kE,[C.eUi,C.fbU,C.d6L,C.d7b,C.d79,C.d78,C.dKJ,C.d7S,C.d7Q,C.d7P,C.d7t,C.d7D,C.d7r,C.d7F,C.d7p,C.d7I,C.czC,C.cze,C.czN,C.czU,C.czT,C.czb,C.d1B,C.dyW,C.fhc,C.fhd,C.dRK,C.frV,C.fDq,C.dRP,C.dRS,C.dRR,C.d8F,C.c7R,C.c6I,C.c6F,C.c_6,C.c_4,C.c6T,C.dVQ,C.dVx,C.dVO,C.eJi,C.eJh,C.dW0,C.dVU,C.dVW,C.dVY,C.dVX,C.dWv,C.dWK,C.dah,C.dal,C.dai,C.e6L,C.e6d,C.deM,C.deN,C.deE,C.deF,C.deH,C.deC,C.deU,C.foh,C.cay,C.car,C.f5g,C.fhs,C.fhr])
t(C.au0,C.ED)
u(A.aC,[C.qu,C.acp,C.M8,C.HQ,C.r4,C.r5,C.lt,C.ie,C.i_,C.b6X,C.cZP,C.dcW,C.rb,C.Uh,C.MR,C.pA,C.aYl,C.oP,C.app])
t(C.ayD,C.aIS)
t(C.bhq,C.aJP)
t(C.ayC,C.aIR)
t(C.ayE,C.aIT)
u(A.mr,[C.V1,C.azy,C.apg,C.HV,C.E0])
u(A.au,[C.a_l,C.bpL,C.ada,C.P2,C.a5r,C.Mw,C.ao3,C.ac0,C.ac_,C.aZa,C.azw,C.aay,C.aYI,C.aaq,C.azK])
t(C.bgX,C.aJo)
t(C.bhC,C.aJY)
t(C.bdi,C.aIU)
t(C.aC0,C.aK5)
t(C.ayY,C.aIZ)
t(C.aCn,C.bv1)
t(C.bfv,C.aJe)
u(A.ni,[C.b9h,C.b9g,C.b9f,C.b8I,C.bt5,C.bo7])
t(C.aCZ,C.aKM)
w(C.aIR,C.M8)
w(C.aIS,C.M8)
w(C.aIT,C.M8)
w(C.aJP,C.M8)
w(C.aJo,A.eQ)
w(C.aJY,A.c8)
w(C.aIU,A.c8)
w(C.aK5,A.c8)
w(C.aIZ,A.eQ)
w(C.aJe,A.eQ)
v(C.bv1,A.eu)
w(C.aKM,A.c8)})()
A.kl(b.typeUniverse,JSON.parse('{"bpf":{"iN":[]},"ED":{"ag":[],"r":[]},"aGr":{"ah":["ED<1,2>"]},"au0":{"ED":["1","hA<1>"],"ag":[],"r":[],"ED.T":"1","ED.S":"hA<1>"},"ajG":{"ag":[],"r":[]},"aBu":{"ag":[],"r":[]},"ajF":{"ag":[],"r":[]},"ajH":{"ag":[],"r":[]},"akx":{"ag":[],"r":[]},"agT":{"ag":[],"r":[]},"ayD":{"ah":["ajG"]},"bhq":{"ah":["aBu"]},"ayC":{"ah":["ajF"]},"ayE":{"ah":["ajH"]},"bez":{"ah":["akx"]},"avP":{"ah":["agT"]},"am4":{"ag":[],"r":[]},"Z_":{"ag":[],"r":[]},"Z0":{"ag":[],"r":[]},"ada":{"au":[],"r":[]},"Y7":{"ag":[],"r":[]},"aAK":{"ah":["am4"]},"a_l":{"au":[],"r":[]},"bpL":{"au":[],"r":[]},"bgZ":{"ah":["Z_"]},"bh_":{"ah":["Z0"]},"P2":{"au":[],"r":[]},"ay0":{"ah":["Y7"]},"amz":{"ag":[],"r":[]},"bh5":{"ah":["amz"]},"a5r":{"au":[],"r":[]},"am3":{"ag":[],"r":[]},"bgX":{"ah":["am3"]},"Mw":{"au":[],"r":[]},"ao3":{"au":[],"r":[]},"ME":{"ag":[],"r":[]},"bhC":{"ah":["ME"]},"ac0":{"au":[],"r":[]},"ac_":{"au":[],"r":[]},"ayF":{"ag":[],"r":[]},"bdi":{"ah":["ayF"]},"aZa":{"au":[],"r":[]},"anw":{"ag":[],"r":[]},"aBv":{"ah":["anw"]},"ao9":{"ag":[],"r":[]},"aBM":{"ah":["ao9"]},"Uf":{"ag":[],"r":[]},"Ou":{"ag":[],"r":[]},"ZN":{"ag":[],"r":[]},"ZM":{"ag":[],"r":[]},"aBY":{"ah":["Uf"]},"b8N":{"ah":["Ou"]},"aDX":{"ah":["ZN"]},"aDW":{"ah":["ZM"]},"Ug":{"ag":[],"r":[]},"aC_":{"ah":["Ug"]},"aos":{"ag":[],"r":[]},"aay":{"au":[],"r":[]},"aaq":{"au":[],"r":[]},"azx":{"ag":[],"r":[]},"aBZ":{"ah":["aos"]},"azw":{"au":[],"r":[]},"aYI":{"au":[],"r":[]},"beN":{"ah":["azx"]},"aov":{"ag":[],"r":[]},"aC0":{"ah":["aov"]},"Yw":{"ag":[],"r":[]},"ayY":{"ah":["Yw"]},"ap3":{"ag":[],"r":[]},"azJ":{"ag":[],"r":[]},"azL":{"ag":[],"r":[]},"aCn":{"ah":["ap3"],"eu":[]},"azK":{"au":[],"r":[]},"bfv":{"ah":["azJ"]},"b9h":{"aB":[]},"b9g":{"aB":[]},"b9f":{"aB":[]},"azM":{"ah":["azL"]},"b8I":{"aB":[]},"bt5":{"aB":[]},"Zj":{"ag":[],"r":[]},"aCa":{"ah":["Zj"]},"bo7":{"aB":[]},"aql":{"ag":[],"r":[]},"aCZ":{"ah":["aql"]}}'))
A.Pd(b.typeUniverse,JSON.parse('{"M8":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=A.aA
return{dw:w("my<w?>"),gS:w("nT"),o:w("d1"),g5:w("wC"),M:w("eV<n>"),k:w("R"),gv:w("l2<ak<j3>>"),gh:w("l2<n>"),gH:w("l2<G>"),r:w("ax<~>"),dk:w("a0"),fw:w("P<nT>"),E:w("P<d1>"),V:w("P<ad>"),O:w("P<w>"),A:w("P<a0>"),R:w("P<n1>"),B:w("P<ak<G>>"),m:w("P<a4<n,n>>"),_:w("P<a4<n,@>>"),b:w("P<r4>"),x:w("P<r5>"),gi:w("P<j3>"),a:w("P<lt>"),Y:w("P<i_>"),v:w("P<ie>"),dA:w("P<HQ>"),F:w("P<rb>"),Z:w("P<kh>"),g:w("P<hE>"),gK:w("P<+at,details,id(R,n,n)>"),C:w("P<cP>"),s:w("P<n>"),G:w("P<iN>"),eO:w("P<eo>"),d9:w("P<eR>"),p:w("P<r>"),n:w("P<N>"),t:w("P<G>"),U:w("P<aB?>"),d4:w("P<n?>"),ck:w("ak<r4>"),e:w("ak<r5>"),ac:w("ak<j3>"),dZ:w("ak<lt>"),I:w("ak<i_>"),j:w("ak<@>"),L:w("ak<G>"),eq:w("a4<n,n>"),P:w("a4<n,@>"),f:w("a4<@,@>"),cl:w("cQ<n,C>"),aS:w("J<a0,rW>"),dc:w("J<HV,bE>"),dv:w("J<n,n>"),bL:w("J<N,bE>"),a3:w("J<G,bE>"),gN:w("J<G,pp>"),w:w("iI"),b1:w("r4"),Q:w("r5"),bP:w("lt"),i:w("i_"),u:w("ie"),gp:w("Uh"),J:w("MR"),D:w("pA"),an:w("kh"),c:w("co"),K:w("aC"),d:w("jh<n>"),di:w("+outcome,snapshot(V1,a4O?)"),ee:w("+after,before(N,N)"),et:w("+categories,error,message,replaceId(ak<i_>,n?,n?,n?)"),cz:w("Eq"),bJ:w("dA<n>"),N:w("n"),e7:w("bm<N>"),W:w("cz<n>"),am:w("k8<G>"),cc:w("a2<n>"),aM:w("e6<d1>"),bG:w("e6<N>"),l:w("r"),gm:w("qu"),ec:w("acp"),q:w("mP"),y:w("Q"),gR:w("N"),z:w("@"),S:w("G"),eG:w("d1?"),cJ:w("R?"),gw:w("ak<a4<n,@>>?"),bM:w("ak<@>?"),h:w("a4<n,@>?"),X:w("aC?"),gE:w("+code,qrPayload(n,n)?"),bY:w("+isLive,ownerEmail,snapshotJson(Q,n,n)?"),T:w("n?"),cD:w("N?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aUM=new A.bs(B.bD,B.hO,B.bD,B.hO)
D.eH=new A.w(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,B.t)
D.aVe=new A.az(D.eH,1,B.r,-1)
D.aVg=new A.az(B.ad,2,B.r,-1)
D.aVj=new A.az(B.aU,2,B.r,-1)
D.aVl=new A.az(B.cm,0.8,B.r,-1)
D.aVB=new A.az(B.aM,2,B.r,-1)
D.aVI=new A.az(B.fg,1.6,B.r,-1)
D.aWy=new A.aY(0,330,0,1/0)
D.aWE=new A.aY(0,176,0,1/0)
D.aWF=new A.aY(0,1/0,0,260)
D.aWX=new A.aY(90,1/0,0,1/0)
D.aZJ=new A.ad(0,B.G,B.dm,B.J,4)
D.cMv=w([D.aZJ],x.V)
D.aXa=new A.o(B.c,null,null,null,D.cMv,null,B.a6)
D.cGO=w([D.eH,B.aZ],x.O)
D.bSs=new A.a7(B.a3,B.a7,B.x,D.cGO,null,null)
D.aXo=new A.o(null,null,null,null,null,D.bSs,B.a6)
D.aXt=new A.o(B.bc,null,null,null,null,null,B.a6)
D.b8o=new A.w(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,B.t)
D.d0_=w([P.ab5,D.b8o],x.O)
D.bRy=new A.a7(B.b0,B.b5,B.x,D.d0_,null,null)
D.aXK=new A.o(null,null,null,B.lU,null,D.bRy,B.n)
D.beL=new A.w(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,B.t)
D.dav=w([D.beL,M.ad1],x.O)
D.bQL=new A.a7(B.b0,B.b5,B.x,D.dav,null,null)
D.aY9=new A.o(null,null,null,B.rw,null,D.bQL,B.n)
D.cXb=w([B.aE,B.bA],x.O)
D.bRf=new A.a7(B.a3,B.a7,B.x,D.cXb,null,null)
D.aYf=new A.o(null,null,null,null,null,D.bRf,B.a6)
D.eTv=new A.F(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbq=new A.x("\ud83c\udf89",null,D.eTv,null,null,null,null,null,null,null,null,null)
D.b2A=new A.cq(B.A,null,null,D.fbq,null)
D.b3T=new A.w(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,B.t)
D.aar=new A.w(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,B.t)
D.b6h=new A.w(1,0.8431372549019608,0.8,0.7843137254901961,B.t)
D.b6l=new A.w(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,B.t)
D.o9=new A.w(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,B.t)
D.rK=new A.w(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,B.t)
D.abt=new A.w(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,B.t)
D.b84=new A.w(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,B.t)
D.Vg=new A.w(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,B.t)
D.wD=new A.w(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,B.t)
D.b9j=new A.w(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,B.t)
D.VD=new A.w(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,B.t)
D.acJ=new A.w(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,B.t)
D.bd1=new A.w(1,0.9529411764705882,0.9411764705882353,1,B.t)
D.bd7=new A.w(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,B.t)
D.ad4=new A.w(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,B.t)
D.adl=new A.w(1,0,0.8392156862745098,0.30980392156862746,B.t)
D.bel=new A.w(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,B.t)
D.beq=new A.w(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,B.t)
D.bfj=new A.w(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,B.t)
D.Wb=new A.w(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,B.t)
D.bgh=new A.w(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,B.t)
D.bgL=new A.w(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,B.t)
D.Wj=new A.w(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,B.t)
D.bhu=new A.w(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,B.t)
D.aen=new A.a2K(2,"active")
D.bli=new A.b9(42e5)
D.bll=new A.b9(53e4)
D.bln=new A.b9(58e4)
D.blr=new A.b9(82e4)
D.bmf=new A.O(0,30,0,30)
D.bmn=new A.O(0,4,0,8)
D.bmq=new A.O(0,8,12,8)
D.bn2=new A.O(12,0,12,88)
D.bn9=new A.O(12,11,12,10)
D.bnw=new A.O(13,10,12,10)
D.bnE=new A.O(14,10,14,2)
D.bnQ=new A.O(14,14,10,14)
D.bok=new A.O(16,12,16,96)
D.bop=new A.O(16,14,16,8)
D.bot=new A.O(16,16,16,96)
D.bou=new A.O(16,18,16,16)
D.boy=new A.O(16,4,16,10)
D.bpt=new A.O(18,6,18,40)
D.bpv=new A.O(18,8,18,130)
D.bpI=new A.O(20,10,20,20)
D.bpV=new A.O(20,18,20,18)
D.bpZ=new A.O(20,20,20,22)
D.bql=new A.O(22,22,22,16)
D.br_=new A.O(2,0,2,10)
D.brI=new A.O(4,8,12,4)
D.brV=new A.O(6,1,6,1)
D.brX=new A.O(6,4,0,0)
D.bs_=new A.O(6,6,12,4)
D.bsl=new A.O(8,4,12,8)
D.feP=new A.x("Activity",null,B.fW,null,null,null,null,null,null,null,null,null)
D.bu5=new A.bE(1,B.bi,D.feP,null)
D.fmH=new A.x("Game Receipts",null,A0.vQ,null,null,null,null,null,null,null,null,null)
D.f6M=new A.x("Your last 59 games \xb7 kept for 7 days",null,F.aNK,null,null,null,null,null,null,null,null,null)
D.cDf=w([D.fmH,D.f6M],x.p)
D.biu=new A.fl(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cDf,null)
D.bu8=new A.bE(1,B.bi,D.biu,null)
D.bwX=new A.a0(58607,"MaterialIcons",!1)
D.Zc=new A.a0(62178,"MaterialIcons",!1)
D.bxL=new A.a0(62410,"MaterialIcons",!1)
D.byV=new A.a0(63258,"MaterialIcons",!1)
D.bz0=new A.a0(63304,"MaterialIcons",!1)
D.bz1=new A.a0(63306,"MaterialIcons",!1)
D.bz8=new A.a0(63330,"MaterialIcons",!1)
D.akC=new A.a0(984777,"MaterialIcons",!1)
D.bBC=new A.ae(B.Fa,13,B.ad,null,null,null)
D.bBK=new A.ae(B.jt,13,B.pg,null,null,null)
D.akL=new A.ae(B.l9,null,B.c,null,null,null)
D.bDi=new A.ae(B.B4,34,B.aJ,null,null,null)
D.bDQ=new A.ae(B.Fe,19,B.c,null,null,null)
D.by3=new A.a0(62804,"MaterialIcons",!1)
D.bDZ=new A.ae(D.by3,24,B.aM,null,null,null)
D.bEq=new A.ae(B.AR,28,B.bj,null,null,null)
D.bEV=new A.ae(B.akg,42,B.c,null,null,null)
D.bF3=new A.ae(B.a_2,30,B.c,null,null,null)
D.bFF=new A.ae(B.fJ,null,B.c,null,null,null)
D.bG_=new A.ae(B.jt,16,B.c,null,null,null)
D.bGA=new A.ae(B.qN,13,B.c,null,null,null)
D.bGJ=new A.ae(B.l9,18,B.c,null,null,null)
D.bHf=new A.ae(B.v2,null,B.dD,null,null,null)
D.bHU=new A.ae(B.os,28,B.c,null,null,null)
D.bI8=new A.ae(B.mZ,22,null,null,null,null)
D.bIu=new A.ae(B.qJ,null,null,null,null,null)
D.bIG=new A.ae(B.iN,28,B.c,null,null,null)
D.bII=new A.ae(B.cw,null,B.aR,null,null,null)
D.bIP=new A.ae(B.YU,14,B.c,null,null,null)
D.bJn=new A.ae(B.MD,36,B.aI,null,null,null)
D.bJu=new A.ae(B.ot,16,B.c,null,null,null)
D.bJJ=new A.ae(B.ee,null,null,null,null,null)
D.b8J=new A.w(1,0.23137254901960785,0.16470588235294117,0,B.t)
D.bKh=new A.ae(B.dV,9,D.b8J,null,null,null)
D.bzY=new A.a0(983146,"MaterialIcons",!1)
D.bKy=new A.ae(D.bzY,null,B.aM,null,null,null)
D.bL2=new A.ae(B.v5,28,D.eH,null,null,null)
D.bL7=new A.ae(B.tn,null,B.fg,null,null,null)
D.bLc=new A.ae(B.hX,20,D.eH,null,null,null)
D.bAj=new A.a0(983377,"MaterialIcons",!1)
D.bLm=new A.ae(D.bAj,64,B.c,null,null,null)
D.bLS=new A.ae(B.h7,24,B.c,null,null,null)
D.bMM=new A.e_(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bMX=new A.e_(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bNb=new A.e_(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bNc=new A.e_(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.b7_=new A.w(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,B.t)
D.b9D=new A.w(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,B.t)
D.b9k=new A.w(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,B.t)
D.d0h=w([D.b7_,D.b9D,D.b9k],x.O)
D.bOH=new A.a7(B.ax,B.aC,B.x,D.d0h,null,null)
D.d4M=w([B.bk,B.aZ],x.O)
D.bP_=new A.a7(B.ax,B.aC,B.x,D.d4M,null,null)
D.b8h=new A.w(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,B.t)
D.bdz=new A.w(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,B.t)
D.cMW=w([D.b8h,D.bdz],x.O)
D.bP6=new A.a7(B.ax,B.aC,B.x,D.cMW,null,null)
D.d1K=w([B.bn,B.M,B.e9],x.O)
D.bPd=new A.a7(B.ax,B.aC,B.x,D.d1K,null,null)
D.bPg=new A.a7(B.a3,B.a7,B.x,G.arW,null,null)
D.cMn=w([B.fg,B.c8],x.O)
D.ams=new A.a7(B.a3,B.a7,B.x,D.cMn,null,null)
D.cMI=w([B.fg,B.bA],x.O)
D.amt=new A.a7(B.a3,B.a7,B.x,D.cMI,null,null)
D.avI=w([D.o9,B.av,B.bU],x.O)
D.bPx=new A.a7(B.ax,B.aC,B.x,D.avI,null,null)
D.bb7=new A.w(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,B.t)
D.cKu=w([D.bb7,E.aaA,B.M],x.O)
D.bPC=new A.a7(B.ax,B.aC,B.x,D.cKu,null,null)
D.aTB=new A.d8(-0.8,-1)
D.aTD=new A.d8(1.2,1)
D.cJH=w([B.c,B.es,B.h1,B.c,B.fh,B.aX,B.mC],x.O)
D.d1b=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.bPE=new A.a7(D.aTB,D.aTD,B.x,D.cJH,D.d1b,null)
D.bdt=new A.w(1,0,0.7607843137254902,0.26666666666666666,B.t)
D.bbm=new A.w(1,0,0.6392156862745098,0.22745098039215686,B.t)
D.d0g=w([D.bdt,D.bbm],x.O)
D.bQ3=new A.a7(B.a3,B.a7,B.x,D.d0g,null,null)
D.bQ8=new A.a7(B.ax,B.aC,B.x,B.P6,null,null)
D.cWi=w([E.We,B.wF],x.O)
D.bQa=new A.a7(B.a3,B.a7,B.x,D.cWi,null,null)
D.d_a=w([B.h2,B.fu],x.O)
D.amy=new A.a7(B.a3,B.a7,B.x,D.d_a,null,null)
D.d4l=w([B.bc,B.bT],x.O)
D.amz=new A.a7(B.a3,B.a7,B.x,D.d4l,null,null)
D.cuI=w([B.dp,B.f5],x.O)
D.bQN=new A.a7(B.ax,B.aC,B.x,D.cuI,null,null)
D.cIL=w([B.c,B.ba],x.O)
D.bQX=new A.a7(B.a3,B.a7,B.x,D.cIL,null,null)
D.aci=new A.w(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,B.t)
D.b63=new A.w(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,B.t)
D.cTc=w([D.aci,B.j_,B.qm,B.av,D.b63],x.O)
D.bTl=w([0,0.28,0.55,0.82,1],x.n)
D.bQY=new A.a7(B.ax,B.aC,B.x,D.cTc,D.bTl,null)
D.bR7=new A.a7(B.a3,B.a7,B.x,B.PJ,null,null)
D.bR8=new A.a7(B.a3,B.a7,B.x,G.auj,null,null)
D.bRb=new A.a7(B.a3,B.a7,B.x,D.avI,null,null)
D.cNZ=w([B.bA,B.fg],x.O)
D.bRm=new A.a7(B.a3,B.a7,B.x,D.cNZ,null,null)
D.d89=w([B.aE,B.bA,B.ba],x.O)
D.bRo=new A.a7(B.a3,B.a7,B.x,D.d89,null,null)
D.cWr=w([B.aJ,B.bJ,B.fB],x.O)
D.bRs=new A.a7(B.a3,B.a7,B.x,D.cWr,null,null)
D.d7T=w([B.bn,B.aK,B.bI,B.aL,B.aP,B.cm,B.ak],x.O)
D.cRx=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.bRx=new A.a7(B.ax,B.aC,B.x,D.d7T,D.cRx,null)
D.bRH=new A.a7(B.ax,B.aC,B.x,B.a0n,null,null)
D.cWW=w([D.Vg,B.dU],x.O)
D.bRR=new A.a7(B.a3,B.a7,B.x,D.cWW,null,null)
D.d30=w([D.ad4,D.abt,B.M],x.O)
D.bRZ=new A.a7(B.ax,B.aC,B.x,D.d30,null,null)
D.bfK=new A.w(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,B.t)
D.cJf=w([B.eX,B.h2,D.bfK],x.O)
D.bSu=new A.a7(B.ax,B.aC,B.x,D.cJf,null,null)
D.cOv=w([D.o9,B.av],x.O)
D.bSv=new A.a7(B.ax,B.aC,B.x,D.cOv,null,null)
D.bSR=w([F.B8,B.os,B.jt,B.hx,B.kH,B.kI,B.kG,B.qR,B.mf,B.eR,B.lD,B.xC,B.Fm],x.A)
D.bWd=w([10,50,100,200],x.t)
D.c4T=w([1,3,5,7],x.t)
D.c9Q=w([25,50,100,250],x.t)
D.bzT=new A.a0(983104,"MaterialIcons",!1)
D.cik=w([B.os,B.lE,B.mZ,B.l6,B.h6,B.vb,D.bzT,B.ZZ],x.A)
D.cnD=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.czx=w([0,0.22,0.5,0.78,1],x.n)
D.cDn=w([8,13,19],x.n)
D.a0H=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.fdR=new A.x("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.e5F=new A.jh("questions",48,D.fdR,null,x.d)
D.f43=new A.x("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.e5K=new A.jh("edit",48,D.f43,null,x.d)
D.fli=new A.x("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.e5Q=new A.jh("delete",48,D.fli,null,x.d)
D.cDw=w([D.e5F,D.e5K,D.e5Q],A.aA("P<oT<n>>"))
D.cMQ=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.cN2=w([B.bM,B.fD],x.O)
D.a3j=new C.lt("text","",null,null)
D.cO8=w([D.a3j],x.a)
D.cPx=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.eoe=new A.acM(B.lC,"Home")
D.efC=new A.acM(B.pB,"Growth")
D.ejU=new A.acM(B.jt,"Wallet")
D.cRJ=w([D.eoe,D.efC,D.ejU],A.aA("P<+icon,label(a0,n)>"))
D.cS7=w([4,0,2,6,8,1,3,5,7],x.t)
D.cSf=w([B.c,B.bN,B.cm],x.O)
D.dwW=new C.rb("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.dwZ=new C.rb("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.dwX=new C.rb("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.dwR=new C.rb("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.dwS=new C.rb("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.dx_=new C.rb("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a19=w([D.dwW,D.dwZ,D.dwX,D.dwR,D.dwS,D.dx_],x.F)
D.a1e=w([B.aD,B.bk,B.d4,B.aJ],x.O)
D.b8R=new A.w(1,1,0.8980392156862745,0.4,B.t)
D.cX1=w([B.UU,D.b8R,B.qm,B.hU,B.j_],x.O)
D.a1k=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.Pe=w(["checkers_deluxe","tic_tac_go"],x.s)
D.bSV=w([0,1,2],x.t)
D.ciy=w([3,4,5],x.t)
D.cvh=w([6,7,8],x.t)
D.bSX=w([0,3,6],x.t)
D.c4Y=w([1,4,7],x.t)
D.ccl=w([2,5,8],x.t)
D.bT0=w([0,4,8],x.t)
D.cci=w([2,4,6],x.t)
D.cZf=w([D.bSV,D.ciy,D.cvh,D.bSX,D.c4Y,D.ccl,D.bT0,D.cci],x.B)
D.aDE=new C.HV(0,"abab")
D.dwP=new C.HV(1,"aaaBbb")
D.aDF=new C.HV(2,"aabb")
D.d_e=w([D.aDE,D.dwP,D.aDF],A.aA("P<HV>"))
D.d_u=w([],x.a)
D.av4=w([],x.v)
D.d2T=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.PA=w([1,2,3,-1,-2],x.t)
D.dak=w([B.j0,B.aE],x.O)
D.fDJ=new C.qu("dice","Dice Roll","Roll for cash & prizes!",B.mc,D.dak)
D.fDG=new C.qu("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",B.qL,B.atR)
D.d56=w([B.d2,B.bj],x.O)
D.fDE=new C.qu("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",B.ZM,D.d56)
D.d9P=w([B.dN,B.mF],x.O)
D.fDK=new C.qu("memory","Memory Match","Match pairs \u2014 solo or multiplayer",B.ZZ,D.d9P)
D.c4G=w([B.jH,B.pe],x.O)
D.fDH=new C.qu("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",G.Zy,D.c4G)
D.d2S=w([M.l_,D.VD],x.O)
D.fDF=new C.qu("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",B.Fp,D.d2S)
D.fDI=new C.qu("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",B.cw,Ah.n_)
D.d4k=w([D.fDJ,D.fDG,D.fDE,D.fDK,D.fDH,D.fDF,D.fDI],A.aA("P<qu>"))
D.d5E=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.bcP=new A.w(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,B.t)
D.bcH=new A.w(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,B.t)
D.adO=new A.w(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,B.t)
D.d6n=w([D.bcP,D.bcH,D.adO],x.O)
D.beG=new A.w(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,B.t)
D.d6p=w([B.aaz,D.beG,D.adO],x.O)
D.d70=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.aw2=w([D.o9,B.c,D.eH,B.bZ,B.b2,B.av],x.O)
D.dwU=new C.rb("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.dwT=new C.rb("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.dwQ=new C.rb("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.dwY=new C.rb("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.dx0=new C.rb("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.dwV=new C.rb("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a1W=w([D.dwU,D.dwT,D.dwQ,D.dwY,D.dx0,D.dwV],x.F)
D.da2=w([B.c8,B.pe],x.O)
D.dVO={checkers_deluxe:0,tic_tac_go:1}
D.aBE=new A.br(D.dVO,["Checkers Deluxe","Tic Tac Go"],A.aA("br<n,n>"))
D.dUU={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aBP=new A.br(D.dUU,[1,2,3,4,5,6,7],A.aA("br<n,G>"))
D.dpT=new C.a5r(null)
D.dtf=new C.lt("signature","NGMY Support Team",null,null)
D.dtg=new C.lt("divider","",null,null)
D.Qu=new C.Uh(!1,!1,!1,!1)
D.Qw=new C.MR(!1,!1,!1,!1)
D.dui=new C.MR(!0,!0,!1,!1)
D.BX=new C.apg(0,"swahili")
D.aDD=new C.apg(1,"english")
D.BY=new C.apg(2,"mix")
D.cYK=w([B.fn,B.ip,B.dj],x.O)
D.byJ=new A.a0(63118,"MaterialIcons",!1)
D.dy1=new C.oP(D.cYK,B.fZ,B.aJ,"BACKGAMMON","\ud83c\udfb2",D.byJ)
D.bAI=new A.a0(983637,"MaterialIcons",!1)
D.dy2=new C.oP(Ae.awc,B.bk,B.eM,"EURO WHEEL","\ud83c\udfa1",D.bAI)
D.d5W=w([B.M,B.aK,B.bv],x.O)
D.dy3=new C.oP(D.d5W,B.aP,B.ak,"ROYALE","\u265f\ufe0f",G.Zy)
D.cMq=w([B.dp,B.bj,B.dR],x.O)
D.dy4=new C.oP(D.cMq,B.aD,B.d4,"CONNECT 4","\ud83d\udd34",B.a_b)
D.d1o=w([B.du,B.f5,B.pe],x.O)
D.dy5=new C.oP(D.d1o,B.uz,B.c8,"PUNTO BANCO","\ud83d\udc8e",B.lE)
D.cuK=w([B.no,B.i3,B.lu],x.O)
D.dy6=new C.oP(D.cuK,B.iV,B.jI,"DOMINOES","\ud83c\udc53",B.aki)
D.d6A=w([B.wL,B.rO,B.he],x.O)
D.dy7=new C.oP(D.d6A,B.Ab,B.fX,"WAR","\u2694\ufe0f",N.Zv)
D.dy8=new C.oP(B.aw7,B.aM,B.ak,"PREMIUM","\ud83c\udfae",B.mc)
D.cO_=w([B.ji,B.aE,B.dN],x.O)
D.dy9=new C.oP(D.cO_,B.dM,B.fg,"JACKPOT","\ud83c\udfb0",B.mc)
D.d0z=w([B.ky,B.ls,B.bA],x.O)
D.dya=new C.oP(D.d0z,B.ql,B.bZ,"LIVE BINGO","\ud83c\udfb1",B.xv)
D.cGM=w([B.ip,B.dU,B.aJ],x.O)
D.by9=new A.a0(62865,"MaterialIcons",!1)
D.dyb=new C.oP(D.cGM,B.rU,B.aM,"BIG SPIN","\ud83c\udfa1",D.by9)
D.dyc=new C.oP(B.a1U,B.aL,B.bk,"HOLD'EM","\u2660\ufe0f",B.jt)
D.d7_=w([B.eX,B.fu,B.aZ],x.O)
D.bxh=new A.a0(61234,"MaterialIcons",!1)
D.dyd=new C.oP(D.d7_,B.lv,B.aU,"CRAPS","\ud83c\udfb2",D.bxh)
D.cLL=w([B.fD,B.iG,B.bM],x.O)
D.dye=new C.oP(D.cLL,B.bJ,B.ba,"PLINKO","\ud83d\udc8e",Ai.ME)
D.bAt=new A.a0(983492,"MaterialIcons",!1)
D.dyf=new C.oP(B.a1U,B.er,B.bk,"SNOOKER","\ud83c\udfb1",D.bAt)
D.d4H=w([B.eX,B.fu,B.aU],x.O)
D.dyg=new C.oP(D.d4H,B.rP,B.bs,"PROFIT LAB","\ud83d\udcb0",B.hX)
D.d5_=w([B.e9,B.ff,B.bk],x.O)
D.bz6=new A.a0(63324,"MaterialIcons",!1)
D.dyh=new C.oP(D.d5_,B.A8,B.bc,"KLONDIKE","\ud83c\udccf",D.bz6)
D.cZm=w([B.da,B.bn,B.M],x.O)
D.dyi=new C.oP(D.cZm,B.aM,B.aK,"VEGAS TABLE","\ud83c\udccf",A_.FC)
D.pK=new C.E0(0,"continueGame")
D.pL=new C.E0(1,"youWin")
D.H5=new C.E0(2,"youLose")
D.QF=new C.E0(3,"draw")
D.aDS=new C.V1(0,"found")
D.dR4=new C.V1(1,"foundLive")
D.a3z=new C.V1(2,"notFound")
D.aDT=new C.V1(3,"wrongAccount")
D.dXX=new A.u(4,12)
D.e_Q=new A.C(B.Lc,B.rB,null)
D.brn=new A.O(4,0,0,3)
D.eQX=new A.F(!0,B.aI,null,null,null,null,10,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpC=new A.x("NGMY Helper",null,D.eQX,null,null,null,null,null,null,null,null,null)
D.e05=new A.C(D.brn,D.fpC,null)
D.byZ=new A.a0(63284,"MaterialIcons",!1)
D.bEc=new A.ae(D.byZ,18,B.ob,null,null,null)
D.eVp=new A.F(!0,B.ob,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7U=new A.x("Continue",null,D.eVp,null,null,null,null,null,null,null,null,null)
D.d_U=w([D.bEc,B.bo,D.f7U],x.p)
D.eC2=new A.cn(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.d_U,null)
D.e08=new A.C(B.j4,D.eC2,null)
D.e0i=new A.C(B.bR,B.rB,null)
D.bcq=new A.w(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,B.t)
D.cXA=w([B.h2,B.fu,B.cY,D.bcq],x.O)
D.bRA=new A.a7(B.ax,B.aC,B.x,D.cXA,B.Bp,null)
D.aYi=new A.o(null,null,null,null,null,D.bRA,B.n)
D.bjr=new A.kG(D.aYi,B.bd,null,null)
D.e64=new A.cK(0,0,0,0,null,null,D.bjr,null)
D.bFW=new A.ae(B.v1,11,B.c,null,null,null)
D.e68=new A.cK(10,12,null,null,null,null,D.bFW,null)
D.czp=w([B.h_,B.e9,B.kZ],x.O)
D.e6I=new A.bR(B.J5,1.1,B.x,null,0,D.czp,null,null)
D.bdM=new A.w(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,B.t)
D.b8y=new A.w(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,B.t)
D.baa=new A.w(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,B.t)
D.cVr=w([D.bdM,D.b8y,D.baa],x.O)
D.e6P=new A.bR(B.a8j,1.05,B.x,null,0,D.cVr,null,null)
D.e7c=new A.bR(B.A,0.5,B.x,null,0,W.a0W,null,null)
D.eAf=new A.aa(-18,0,18,1)
D.eAM=new A.aa(-3,-5,3,5)
D.bEE=new A.ae(B.ee,16,D.eH,null,null,null)
D.aOA=new A.F(!0,D.eH,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnm=new A.x("Screenshot added \xb7 tap to change",null,D.aOA,null,null,null,null,null,null,null,null,null)
D.cJK=w([D.bEE,B.bo,D.fnm],x.p)
D.eBu=new A.cn(B.aQ,B.b9,B.j,B.m,null,B.p,null,0,D.cJK,null)
D.bIq=new A.ae(B.jR,15,D.eH,null,null,null)
D.fld=new A.x("Refresh",null,D.aOA,null,null,null,null,null,null,null,null,null)
D.cLU=w([D.bIq,B.d8,D.fld],x.p)
D.eBw=new A.cn(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cLU,null)
D.dVk={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.eDi=new A.eV(D.dVk,3,x.M)
D.dV4={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.eDo=new A.eV(D.dV4,36,x.M)
D.dV7={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.eDw=new A.eV(D.dV7,6,x.M)
D.dWg={memory:0,typing:1,scramble:2,pattern:3}
D.mq=new A.eV(D.dWg,4,x.M)
D.eFG=new A.at(276,276)
D.eGm=new A.a6(13,null,null,null)
D.b3d=new A.fh(2.6,null,null,null,null,B.aM,null,null,null,null)
D.eGw=new A.a6(26,26,D.b3d,null)
D.eHg=new A.a6(null,7,null,null)
D.eHp=new A.hH(8,0,0,1,null)
D.fos=new A.x("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aM9=new A.b1(D.fos,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f3e=new A.x("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.eKk=new A.b1(D.f3e,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f4e=new A.x("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.eKq=new A.b1(D.f4e,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fln=new A.x("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.eL3=new A.b1(D.fln,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.bd9=new A.w(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,B.t)
D.eUm=new A.F(!0,D.bd9,null,null,null,null,9,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eO4=new A.eo("$",null,null,B.cO,null,null,null,null,null,null,D.eUm)
D.eOk=new A.F(!0,B.M,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOD=new A.F(!0,B.c,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOJ=new A.F(!0,B.bn,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eP6=new A.F(!0,B.M,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePg=new A.F(!0,B.c,null,null,null,null,19,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePo=new A.F(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePw=new A.F(!0,null,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQh=new A.F(!0,B.aM,null,null,null,null,28,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQP=new A.F(!0,D.eH,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQR=new A.F(!0,B.bJ,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRy=new A.F(!0,E.A6,null,null,null,null,13,B.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNl=new A.F(!0,B.c,null,null,null,null,20,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eT0=new A.F(!0,B.bJ,null,null,null,null,11.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTi=new A.F(!0,B.ad,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,B.aB,null,null,null,null,null,null,null,null)
D.eTB=new A.F(!0,B.ad,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUC=new A.F(!0,B.c,null,null,null,null,11,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUR=new A.F(!0,B.c,null,null,null,null,14,B.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV1=new A.F(!0,B.bc,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV2=new A.F(!0,B.c,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,B.aB,null,null,null,null,null,null,null,null)
D.eVx=new A.F(!0,B.iy,null,null,null,null,10.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b7h=new A.w(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,B.t)
D.eVL=new A.F(!0,D.b7h,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXa=new A.F(!0,B.aD,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXw=new A.F(!0,D.aci,null,null,null,null,9,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aO1=new A.F(!0,E.A6,null,null,null,null,11,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXT=new A.F(!0,B.ff,null,null,null,null,52,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXU=new A.F(!0,B.bv,null,null,null,null,7,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY8=new A.F(!0,E.A6,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.vT=new A.F(!0,B.c,null,null,null,null,13,B.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.baZ=new A.w(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,B.t)
D.eYl=new A.F(!0,D.baZ,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYS=new A.F(!0,B.Qa,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZP=new A.F(!0,B.c,null,null,null,null,38,B.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZV=new A.F(!0,B.iM,null,null,null,null,11,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZZ=new A.F(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOh=new A.F(!0,B.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_q=new A.F(!0,B.M,null,null,null,null,10,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_u=new A.F(!0,B.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0m=new A.F(!0,B.M,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0K=new A.F(!0,B.ad,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1_=new A.F(!0,B.bc,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1v=new A.F(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1z=new A.F(!0,B.M,null,null,null,null,11,B.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2u=new A.x("Value per pair",null,B.hz,null,null,null,null,null,null,null,null,null)
D.f2v=new A.x("Restore now",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f30=new A.x("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aNO=new A.F(!0,B.cU,null,null,null,null,12,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f39=new A.x("AVAILABLE PLANS",null,D.aNO,null,null,null,null,null,null,null,null,null)
D.f3c=new A.x("I understand",null,B.ct,null,null,null,null,null,null,null,null,null)
D.f3G=new A.x("Go Back",null,B.ct,null,null,null,null,null,null,null,null,null)
D.eRp=new A.F(!0,B.bv,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4m=new A.x("PLAN VALUE",null,D.eRp,null,null,null,null,null,null,null,null,null)
D.f4o=new A.x("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.f4L=new A.x("Deposit",null,B.SK,null,null,null,null,null,null,null,null,null)
D.f_K=new A.F(!0,B.dM,null,null,null,null,null,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5I=new A.x("JACKPOT SLOTS",null,D.f_K,null,null,null,null,null,null,null,null,null)
D.f60=new A.x("Restore",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eRs=new A.F(!0,B.c,null,null,null,null,12,B.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f64=new A.x("YOUR NUMBER",null,D.eRs,null,null,null,null,null,null,null,null,null)
D.f6k=new A.x("SPIN REELS",null,G.a6j,null,null,null,null,null,null,null,null,null)
D.f6L=new A.x("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.f7f=new A.x("Perfect Score Profit",null,B.hz,null,null,null,null,null,null,null,null,null)
D.f7S=new A.x("Join room",null,B.kp,null,null,null,null,null,null,null,null,null)
D.f9L=new A.x("Add payment screenshot",null,B.jB,null,null,null,null,null,null,null,null,null)
D.fa_=new A.x("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.f_0=new A.F(!0,B.aM,null,null,null,null,11,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fap=new A.x("INVITE A PLAYER",null,D.f_0,null,null,null,null,null,null,null,null,null)
D.eZe=new A.F(!0,B.UU,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faP=new A.x("NGMY GOLD LEADER",null,D.eZe,null,null,null,null,null,null,null,null,null)
D.fbl=new A.x("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.fbJ=new A.x("Invest & Play",null,B.oQ,null,null,null,null,null,null,null,null,null)
D.aNH=new A.F(!0,D.wD,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc8=new A.x("VALID THRU",null,D.aNH,null,null,null,null,null,null,null,null,null)
D.aOj=new A.F(!0,B.ay,null,null,null,null,11,B.I,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcg=new A.x("DEALER",null,D.aOj,null,null,null,null,null,null,null,null,null)
D.fcm=new A.x("CARDHOLDER",null,D.aNH,null,null,null,null,null,null,null,null,null)
D.eYL=new A.F(!0,B.aL,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd4=new A.x("NGMY PLATINUM",null,D.eYL,null,null,null,null,null,null,null,null,null)
D.f0R=new A.F(!0,B.pg,null,null,null,null,10,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdM=new A.x("EARNED SO FAR",null,D.f0R,null,null,null,null,null,null,null,null,null)
D.fej=new A.x("VS",null,B.aNC,null,null,null,null,null,null,null,null,null)
D.feJ=new A.x("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.ff4=new A.x("One day left",null,B.aNj,null,B.L,null,null,null,null,null,null,null)
D.ffp=new A.x("Keep typing \u2014 mistakes are counted in your payout",null,B.CB,null,null,null,null,null,null,null,null,null)
D.ffq=new A.x("Multiplayer invite",null,B.kp,null,null,null,null,null,null,null,null,null)
D.ffA=new A.x("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.eQ4=new A.F(!0,B.Qa,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffG=new A.x("\ud83d\udcb0 Partial Payout System",null,D.eQ4,null,null,null,null,null,null,null,null,null)
D.ffR=new A.x("Browse Topics",null,B.eV,null,null,null,null,null,null,null,null,null)
D.eP3=new A.F(!0,B.c,null,null,null,null,22,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg5=new A.x("Investment Required",null,D.eP3,null,B.L,null,null,null,null,null,null,null)
D.eOA=new A.F(!0,B.c,null,null,null,null,16.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhv=new A.x("Network Status",null,D.eOA,null,null,null,null,null,null,null,null,null)
D.fi0=new A.x("Their account email",null,F.a65,null,null,null,null,null,null,null,null,null)
D.fij=new A.x("Verification code",null,B.ct,null,null,null,null,null,null,null,null,null)
D.fik=new A.x("Category",null,null,null,null,null,null,null,null,null,null,null)
D.fix=new A.x("ACTIVE ASSET",null,D.aNO,null,null,null,null,null,null,null,null,null)
D.fiS=new A.x("Scan QR",null,B.ct,null,null,null,null,null,null,null,null,null)
D.fiX=new A.x("Check word",null,B.ct,null,null,null,null,null,null,null,null,null)
D.fjk=new A.x("YOUR HAND",null,D.aOj,null,null,null,null,null,null,null,null,null)
D.fjT=new A.x("NGMY Music Studio",null,B.kR,null,null,null,null,null,null,null,null,null)
D.fjW=new A.x("I sent it \u2014 submit deposit",null,B.oQ,null,null,null,null,null,null,null,null,null)
D.fkE=new A.x("Back",null,B.Sg,null,null,null,null,null,null,null,null,null)
D.f1K=new A.F(!0,null,null,null,null,null,null,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkL=new A.x("DEAL / PLAY ROUND",null,D.f1K,null,null,null,null,null,null,null,null,null)
D.fkX=new A.x("Got it \u2014 keep chatting",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fl6=new A.x("3 Messages Left",null,B.aO6,null,null,null,null,null,null,null,null,null)
D.flB=new A.x("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.flJ=new A.x("Copy",null,B.ct,null,null,null,null,null,null,null,null,null)
D.fm4=new A.x("How many games?",null,F.a65,null,null,null,null,null,null,null,null,null)
D.eYf=new A.F(!0,B.ay,null,null,null,null,null,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmg=new A.x("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.eYf,null,B.L,null,null,null,null,null,null,null)
D.fnM=new A.x("Question",null,null,null,null,null,null,null,null,null,null,null)
D.fnY=new A.x("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.f28=new A.F(!0,B.c,null,null,null,null,12.5,B.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpw=new A.x("NGMY  WALLET",null,D.f28,null,null,null,null,null,null,null,null,null)
D.fpx=new A.x("Select Your Bet",null,B.hm,null,null,null,null,null,null,null,null,null)
D.fAC=new A.cz("history",x.W)
D.fAH=new A.cz("ngmy_local_home",x.W)
D.fAI=new A.cz("ngmy_local_invest",x.W)
D.fAJ=new A.cz("ngmy_local_wallet",x.W)
D.fDr=new C.Y7(null)
D.aRQ=new C.azy(0,"grid")
D.aRR=new C.azy(1,"questions")
D.fEF=new C.azy(2,"answer")
D.fFz=new C.Z0(null)})();(function staticFields(){$.fL2=A.aX(x.N)
$.h9y=A.V(x.N,x.k)
$.fQr=null
$.fQf=A.V(x.N,A.aA("vS"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"i6d","bBR",()=>C.hPk())
w($,"i6_","hhw",()=>{var v=null,u=A.ih(v,v,v,v,D.eO4,B.a5,B.ch,v,B.eq,B.cd)
u.eO()
return u})})()};
(a=>{a["t/uaJWsM/ss0YUlfBYo+RtjdMEg="]=a.current})($__dart_deferred_initializers__);