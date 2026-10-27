((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,L,Q,A_,E,M,A0,N,A1,R,O,S,A2,P,A3,T,A4,A5,A6,A7,A8,A9,U,Aa,C={
fZa(d,e,f){var w=null,v=f.k("EY<0>"),u=new A.EY(w,w,w,w,v)
$.a14()
u.d=new C.cnw(new A.Wc(),e,u,f,d)
return new A.hN(u,v.k("hN<1>"))},
cnw:function cnw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cnx:function cnx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cnt:function cnt(d){this.a=d},
cnu:function cnu(d,e){this.a=d
this.b=e},
cnv:function cnv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cns:function cns(d,e,f){this.a=d
this.b=e
this.c=f},
bow:function bow(d){this.a=d},
fZ9(d,e,f,g){return new C.att(d,e,f,null,g.k("att<0>"))},
Ef:function Ef(){},
aFO:function aFO(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
ePT:function ePT(d){this.a=d},
ePS:function ePS(d,e){this.a=d
this.b=e},
ePV:function ePV(d){this.a=d},
ePQ:function ePQ(d,e,f){this.a=d
this.b=e
this.c=f},
ePU:function ePU(d){this.a=d},
ePR:function ePR(d){this.a=d},
att:function att(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
hNV(d){var w=B.a.i(d)
while(B.a.a_(w,"$"))w=B.a.i(B.a.aY(w,1))
return w},
h8a(d){var w=C.hNV(d)
if(w.length===0)return""
return"$"+w},
fjt(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fjt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:i=B.a.i(d.toLowerCase())
if(i.length===0){w=1
break}t=new A.Q(Date.now(),0,!1).bM(-6048e8)
s=e.length,r=0
case 3:if(!(r<e.length)){w=5
break}q=e[r]
if(B.a.i(q.b.toLowerCase())!==i){w=4
break}p=q.y
o=p.a
if(o>=t.gbn())o=o===t.gbn()&&p.b<t.gct()
else o=!0
if(o){w=4
break}if(q.x!==B.cj){w=4
break}if(q.d!==B.fy){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!A.dr(m,"game payout:",0))if(!A.dr(m,"game partial:",0)){if(!A.dr(m,"multiplayer payout:",0))o=A.dr(m,"dice",0)&&q.e===B.f9
else o=l
l=o}if(!l){w=4
break}if(A.dr(m,"game payout:",0))k=B.a.i(B.a.aY(n,B.a.cJ(m,"game payout:")+12))
else if(A.dr(m,"game partial:",0)){k=B.a.i(B.a.aY(n,B.a.cJ(m,"game partial:")+13))
j=B.a.cJ(k,"(")
if(j>0)k=B.a.i(B.a.ao(k,0,j))}else if(A.dr(m,"multiplayer payout:",0)){k=B.a.i(B.a.aY(n,B.a.cJ(m,"multiplayer payout:")+19))
j=B.a.cJ(k,"(")
if(j>0)k=B.a.i(B.a.ao(k,0,j))}else k=A.dr(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return A.b(C.u8(q.c,p,n,d,o,null,q.a,!0),$async$fjt)
case 6:case 4:e.length===s||(0,A.K)(e),++r
w=3
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$fjt,v)},
hSw(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
hOY(d,e,f){return B.d.ba(e,new C.fnb(f,B.a.i(d.toLowerCase())))},
fn2(d){var w
C.fVu(d)
w=d.c4
return A.bl(new A.J(w,new C.fn3(),A.U(w).k("J<1,@>")),!0,x.N)},
hEL(d,e,f){var w,v,u,t,s,r,q=null,p=B.bQ,o=B.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aU.toString
u=$.ee().gi4().b
if(u.a===0)t=1
else{new A.bc(u,A.a2(u).k("bc<2>")).gK(0)
u=$.kU()
s=u.d
t=s==null?u.gfY():s}w=B.k.dE(f*t)
v=new C.f7B(f)
if(J.cY(n,"data:image"))try{u=A.fI(B.cA.aG(B.d.gak(J.lf(n,","))),B.A,w,new C.f7y(v),B.fO,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.cY(n,"supabase://"))return new A.l_(A.a_U(n),new C.f7z(f,e,p,w,v),q,q,x.gh)
return A.kd(n,B.A,w,new C.f7A(v),B.fO,p,!0,e,q,q,f)},
fKt(d,e){return new A.a4(e,e,A.hQ(C.hEL(d,e,e),B.ao),null)},
hxe(){var w,v,u=A.a([],x._),t=x.N,s=A.B(D.cZt,x.gm)
for(w=0;w<36;++w){v=B.Be[w]
s.push(new C.qk(v.a,v.b,v.c,v.e,v.f))}return new C.ay3(u,A.T(t,t),s)},
fnb:function fnb(d,e){this.a=d
this.b=e},
fn3:function fn3(){},
f7B:function f7B(d){this.a=d},
f7y:function f7y(d){this.a=d},
f7z:function f7z(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f7x:function f7x(d){this.a=d},
f7A:function f7A(d){this.a=d},
ajb:function ajb(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
qk:function qk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
ay3:function ay3(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
d5l:function d5l(d,e){this.a=d
this.b=e},
d5w:function d5w(d,e){this.a=d
this.b=e},
d5O:function d5O(){},
d5P:function d5P(d){this.a=d},
d5E:function d5E(d,e){this.a=d
this.b=e},
d5D:function d5D(){},
d5F:function d5F(d){this.a=d},
d5C:function d5C(){},
d5H:function d5H(d){this.a=d},
d5G:function d5G(){},
d5z:function d5z(d){this.a=d},
d5x:function d5x(d){this.a=d},
d5y:function d5y(d){this.a=d},
d5A:function d5A(d){this.a=d},
d5B:function d5B(d){this.a=d},
d5r:function d5r(d,e){this.a=d
this.b=e},
d5s:function d5s(d,e){this.a=d
this.b=e},
d5p:function d5p(d){this.a=d},
d5q:function d5q(d){this.a=d},
d5t:function d5t(d){this.a=d},
d5u:function d5u(d){this.a=d},
d5v:function d5v(d,e,f){this.a=d
this.b=e
this.c=f},
d5o:function d5o(d,e){this.a=d
this.b=e},
d5n:function d5n(d,e){this.a=d
this.b=e},
d5m:function d5m(d,e){this.a=d
this.b=e},
d5N:function d5N(d){this.a=d},
d5L:function d5L(d,e,f){this.a=d
this.b=e
this.c=f},
d5K:function d5K(d,e,f){this.a=d
this.b=e
this.c=f},
d5J:function d5J(d,e){this.a=d
this.b=e},
d5I:function d5I(){},
d5M:function d5M(d){this.a=d},
aAV:function aAV(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bgI:function bgI(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
dJ5:function dJ5(d){this.a=d},
dJ4:function dJ4(d){this.a=d},
dJ6:function dJ6(d){this.a=d},
dJ3:function dJ3(){},
dJ7:function dJ7(d,e){this.a=d
this.b=e},
dJ2:function dJ2(d){this.a=d},
dJ8:function dJ8(d){this.a=d},
aja:function aja(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ay2:function ay2(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
d5f:function d5f(d){this.a=d},
d5i:function d5i(d){this.a=d},
d5j:function d5j(d){this.a=d},
d5k:function d5k(d){this.a=d},
d5h:function d5h(d,e){this.a=d
this.b=e},
d5g:function d5g(d,e){this.a=d
this.b=e},
ajc:function ajc(d,e,f,g,h,i,j,k,l,m){var _=this
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
ay4:function ay4(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.Y=_.b4=_.bg=_.y2=_.y1=0
_.aE=_.aN=_.aC=_.aw=$
_.bI=_.b8=_.aZ=_.b2=null
_.aQ=!1
_.bQ=_.bh=null
_.c4=!1
_.cf=_.cT=""
_.c=_.a=_.bB=null},
d77:function d77(d,e){this.a=d
this.b=e},
d7a:function d7a(d){this.a=d},
d7b:function d7b(d){this.a=d},
d7c:function d7c(d){this.a=d},
d7d:function d7d(d){this.a=d},
d7e:function d7e(d){this.a=d},
d78:function d78(d){this.a=d},
d79:function d79(d){this.a=d},
d6n:function d6n(d,e){this.a=d
this.b=e},
d6o:function d6o(d,e){this.a=d
this.b=e},
d6R:function d6R(d){this.a=d},
d6S:function d6S(){},
d6D:function d6D(d,e,f){this.a=d
this.b=e
this.c=f},
d6E:function d6E(d){this.a=d},
d6F:function d6F(d,e,f){this.a=d
this.b=e
this.c=f},
d6G:function d6G(d,e){this.a=d
this.b=e},
d6H:function d6H(){},
d5Q:function d5Q(d){this.a=d},
d6m:function d6m(d,e){this.a=d
this.b=e},
d6T:function d6T(){},
d71:function d71(){},
d6Q:function d6Q(d){this.a=d},
d6P:function d6P(d){this.a=d},
d6k:function d6k(d){this.a=d},
d6l:function d6l(){},
d6X:function d6X(){},
d6Y:function d6Y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d6Z:function d6Z(d,e,f){this.a=d
this.b=e
this.c=f},
d5R:function d5R(){},
d5S:function d5S(d){this.a=d},
d5T:function d5T(){},
d6w:function d6w(d,e){this.a=d
this.b=e},
d6x:function d6x(d,e,f){this.a=d
this.b=e
this.c=f},
d6y:function d6y(d){this.a=d},
d6v:function d6v(d){this.a=d},
d6I:function d6I(d){this.a=d},
d6J:function d6J(){},
d6K:function d6K(d){this.a=d},
d6L:function d6L(){},
d6M:function d6M(d){this.a=d},
d6N:function d6N(){},
d6W:function d6W(d,e,f){this.a=d
this.b=e
this.c=f},
d6z:function d6z(d){this.a=d},
d6A:function d6A(d,e){this.a=d
this.b=e},
d6B:function d6B(d){this.a=d},
d6C:function d6C(d){this.a=d},
d7_:function d7_(d){this.a=d},
d70:function d70(d){this.a=d},
d5U:function d5U(d){this.a=d},
d5V:function d5V(d,e){this.a=d
this.b=e},
d5W:function d5W(d){this.a=d},
d5X:function d5X(d){this.a=d},
d6U:function d6U(d,e){this.a=d
this.b=e},
d6V:function d6V(d){this.a=d},
d6u:function d6u(d,e){this.a=d
this.b=e},
d6O:function d6O(d,e,f){this.a=d
this.b=e
this.c=f},
d6s:function d6s(d,e,f){this.a=d
this.b=e
this.c=f},
d6t:function d6t(){},
d72:function d72(d){this.a=d},
d73:function d73(d){this.a=d},
d74:function d74(d){this.a=d},
d76:function d76(d){this.a=d},
d75:function d75(){},
d6r:function d6r(d,e,f){this.a=d
this.b=e
this.c=f},
d6q:function d6q(d,e){this.a=d
this.b=e},
d6p:function d6p(d,e){this.a=d
this.b=e},
d69:function d69(d){this.a=d},
d68:function d68(d,e){this.a=d
this.b=e},
d6a:function d6a(d){this.a=d},
d67:function d67(d,e){this.a=d
this.b=e},
d6b:function d6b(d){this.a=d},
d66:function d66(){},
d6c:function d6c(d){this.a=d},
d64:function d64(){},
d65:function d65(d){this.a=d},
d6d:function d6d(d){this.a=d},
d63:function d63(d,e){this.a=d
this.b=e},
d6e:function d6e(d){this.a=d},
d62:function d62(d,e){this.a=d
this.b=e},
d5Z:function d5Z(d,e){this.a=d
this.b=e},
d6f:function d6f(d){this.a=d},
d61:function d61(d,e){this.a=d
this.b=e},
d6g:function d6g(d){this.a=d},
d60:function d60(d){this.a=d},
d5Y:function d5Y(d,e){this.a=d
this.b=e},
d6h:function d6h(d,e,f){this.a=d
this.b=e
this.c=f},
d6i:function d6i(d){this.a=d},
d6_:function d6_(){},
d6j:function d6j(d){this.a=d},
ak2:function ak2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bdU:function bdU(){this.c=this.a=null},
daF:function daF(d,e){this.a=d
this.b=e},
daE:function daE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ago:function ago(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
avf:function avf(d,e,f,g,h,i,j,k,l,m){var _=this
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
cyy:function cyy(d){this.a=d},
cxT:function cxT(d,e){this.a=d
this.b=e},
cxJ:function cxJ(d){this.a=d},
cxK:function cxK(d){this.a=d},
cy2:function cy2(d){this.a=d},
cy_:function cy_(d){this.a=d},
cy0:function cy0(d){this.a=d},
cy1:function cy1(d,e,f){this.a=d
this.b=e
this.c=f},
cxV:function cxV(d){this.a=d},
cxU:function cxU(d){this.a=d},
cxL:function cxL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cxY:function cxY(d){this.a=d},
cxX:function cxX(d){this.a=d},
cxW:function cxW(d,e){this.a=d
this.b=e},
cyl:function cyl(d){this.a=d},
cyf:function cyf(d){this.a=d},
cyi:function cyi(d){this.a=d},
cyh:function cyh(){},
cye:function cye(d){this.a=d},
cyg:function cyg(d,e){this.a=d
this.b=e},
cyd:function cyd(){},
cxQ:function cxQ(){},
cxR:function cxR(d,e){this.a=d
this.b=e},
cxS:function cxS(d){this.a=d},
cxO:function cxO(d,e){this.a=d
this.b=e},
cxP:function cxP(d,e){this.a=d
this.b=e},
cy5:function cy5(d,e){this.a=d
this.b=e},
cxZ:function cxZ(d){this.a=d},
cy6:function cy6(d){this.a=d},
cy7:function cy7(d,e){this.a=d
this.b=e},
cy8:function cy8(d,e){this.a=d
this.b=e},
cy9:function cy9(d,e){this.a=d
this.b=e},
cya:function cya(d,e,f){this.a=d
this.b=e
this.c=f},
cyb:function cyb(d){this.a=d},
cyc:function cyc(d){this.a=d},
cy3:function cy3(d,e){this.a=d
this.b=e},
cyk:function cyk(d){this.a=d},
cy4:function cy4(d,e){this.a=d
this.b=e},
cyx:function cyx(d){this.a=d},
cyq:function cyq(d){this.a=d},
cyt:function cyt(d){this.a=d},
cyn:function cyn(d,e){this.a=d
this.b=e},
cyr:function cyr(){},
cys:function cys(d,e){this.a=d
this.b=e},
cyo:function cyo(d){this.a=d},
cyp:function cyp(d){this.a=d},
cyv:function cyv(){},
cyu:function cyu(d){this.a=d},
cym:function cym(d,e){this.a=d
this.b=e},
cyw:function cyw(d){this.a=d},
cxM:function cxM(d){this.a=d},
cyj:function cyj(d,e){this.a=d
this.b=e},
cxN:function cxN(d,e,f){this.a=d
this.b=e
this.c=f},
aId:function aId(){},
aIe:function aIe(){},
aIf:function aIf(){},
aJb:function aJb(){},
bVz(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase())
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
bVA(d){var w=B.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hkM(d,e){var w=d.ax
if(w<0)return!1
return w===e},
aVh(d,e){return C.hkN(d,e)},
hkN(d,e){var w=0,v=A.j(x.di),u,t,s,r,q,p
var $async$aVh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aZ2(d),$async$aVh)
case 3:p=g
if(p!=null){try{t=B.R.aF(0,p.c,null)
if(x.f.b(t)){s=C.fTQ(A.a_(t,x.N,x.z))
if(s==null){u=new A.ET(D.a2o,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bVz(s,e,p.b)){u=new A.ET(D.aCe,null)
w=1
break}r=p.a?D.dKV:D.aCd
u=new A.ET(r,s)
w=1
break}}catch(o){}u=new A.ET(D.a2o,null)
w=1
break}s=C.fTR(d)
if(s==null){u=new A.ET(D.a2o,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bVz(s,e,null)){u=new A.ET(D.aCe,null)
w=1
break}u=new A.ET(D.aCd,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aVh,v)},
fTR(d){var w,v,u,t,s,r
try{w=B.a.i(d)
if(J.cY(w,"\ufeff"))w=J.mp(w,1)
v=!1
if(J.cY(w,"NGMYSNAP1|")){v=!0
w=B.c4.c6(0,B.cA.aG(J.mp(w,10)))}u=B.R.aF(0,w,null)
if(!x.f.b(u))return null
t=A.a_(u,x.N,x.z)
s=v?C.hkL(t):C.fTQ(t)
return s}catch(r){return null}},
hkL(d){var w,v,u,t,s,r,q,p,o,n=new C.bVw(),m=new C.bVv(),l=d.h(0,"qi")
if(x.f.b(l)){w=A.a_(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new A.Q(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=A.aN(w.h(0,"d"))
p=new A.uT(v,u,t,s,r,B.k.N(q==null?0:q))}else p=null
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
return new A.a4k("","",v,u,t,s,r,q,n,m,o,p,B.hZ,new A.Q(Date.now(),0,!1),-1)},
fTQ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.y(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.bVy()
v=d.h(0,"activeInvestment")
if(x.f.b(v)){u=A.a_(v,x.N,x.z)
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
n=new A.uT(t,s,r,q,p,B.k.N(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=A.B(new A.e4(J.b6(m,new C.bVx(w),x.eG),t),t.k("G.E"))}else l=A.a([],x.E)
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
f=f==null?null:B.k.N(f)
return new A.a4k(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
fF3(d,e,f,g){var w=0,v=A.j(x.N),u,t,s,r
var $async$fF3=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:t=A.bVu(d,e,f,g)
s=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(t.a,s,"_")
u=A.Fp(A.IP(t.eF(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fF3,v)},
UA:function UA(d,e){this.a=d
this.b=e},
bVw:function bVw(){},
bVv:function bVv(){},
bVy:function bVy(){},
bVx:function bVx(d){this.a=d},
hHM(d){return A.cg(null,B.aV,!0,null,new C.faQ(),d,null,!0,!0,x.N)},
hHZ(d,e,f,g){return A.cg(null,B.aV,!0,null,new C.fc2(g,f,e),d,null,!0,!0,x.y)},
alA:function alA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAa:function aAa(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dr9:function dr9(d,e){this.a=d
this.b=e},
dra:function dra(d){this.a=d},
dr0:function dr0(d,e){this.a=d
this.b=e},
dqZ:function dqZ(d){this.a=d},
dr8:function dr8(d){this.a=d},
dr7:function dr7(d,e){this.a=d
this.b=e},
dqY:function dqY(d,e){this.a=d
this.b=e},
dqX:function dqX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dr_:function dr_(d){this.a=d},
dr6:function dr6(){},
dr4:function dr4(d){this.a=d},
dr5:function dr5(d,e){this.a=d
this.b=e},
dr1:function dr1(){},
dr2:function dr2(d,e){this.a=d
this.b=e},
dr3:function dr3(d,e){this.a=d
this.b=e},
drb:function drb(d){this.a=d},
ZT:function ZT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bp1:function bp1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Yx:function Yx(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgh:function bgh(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
drf:function drf(d){this.a=d},
drc:function drc(d,e){this.a=d
this.b=e},
drd:function drd(d,e){this.a=d
this.b=e},
dre:function dre(d){this.a=d},
Yy:function Yy(d){this.a=d},
bgi:function bgi(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
drg:function drg(d,e){this.a=d
this.b=e},
faQ:function faQ(){},
fc2:function fc2(d,e,f){this.a=d
this.b=e
this.c=f},
acH:function acH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eJG:function eJG(d){this.a=d},
eJH:function eJH(d){this.a=d},
OF:function OF(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
XE:function XE(d){this.a=d},
axr:function axr(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d0f:function d0f(d){this.a=d},
d0c:function d0c(){},
d0d:function d0d(d){this.a=d},
d0e:function d0e(d){this.a=d},
SF(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$SF=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||B.a.i(f).length===0){w=1
break}w=3
return A.b(A.LH(s),$async$SF)
case 3:t=h
J.cd(t,A.E(["role",e,"text",B.a.i(f),"at",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z))
w=4
return A.b(A.alQ(s,t),$async$SF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$SF,v)},
hl4(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=A.U(d).k("a3<1>")
v=A.B(new A.a3(d,new C.bWh(),w),w.k("G.E"))
w=v.length
if(w===0)return""
u=w<=24?v:B.d.fC(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,A.K)(u),++s){r=u[s]
q=J.a8(r)
p=J.y(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+A.t(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
bWh:function bWh(){},
hNk(d){return B.d.dH(B.Be,new C.fjn(d),new C.fjo()).r},
fjn:function fjn(d){this.a=d},
fjo:function fjo(){},
am4:function am4(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bgo:function bgo(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dxB:function dxB(d){this.a=d},
dxA:function dxA(d){this.a=d},
dxs:function dxs(d,e,f){this.a=d
this.b=e
this.c=f},
dxx:function dxx(d){this.a=d},
dxu:function dxu(d,e,f){this.a=d
this.b=e
this.c=f},
dxy:function dxy(d){this.a=d},
dxt:function dxt(d){this.a=d},
dxz:function dxz(d){this.a=d},
dxv:function dxv(d){this.a=d},
dxw:function dxw(d){this.a=d},
fVu(d){var w=A.c2D(new A.Q(Date.now(),0,!1)),v=d.bh
if(v===w)return
d.bh=w
d.bQ=0
d.c4=A.a([],x.s)},
fVw(d){return A.cg(null,B.w.j(0.82),!0,null,new C.c2I(),d,null,!0,!0,x.H)},
a4Y:function a4Y(d){this.a=d},
c2I:function c2I(){},
c2H:function c2H(d){this.a=d},
h7n(){var w=new A.Q(Date.now(),0,!1),v=w.bM(A.dA(4-A.mg(w),0,0,0,0,0).a),u=A.bX(A.bx(v),1,4,0,0,0,0,0)
return""+A.bx(v)+"-W"+B.a.aU(B.o.u(1+B.k.bv(B.o.am(v.bx(A.bX(A.bx(u),A.bF(u),A.bP(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
f2C(d,e){var w,v,u,t,s,r,q=A.F4(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.q(t,"email")
r=B.a.i(J.k(s==null?"":s).toLowerCase())
if((B.a.c7(r,"+local.ngmy")?B.a.ao(r,0,r.length-11):r)===q)return t}t=A.E(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
hCq(d,e){var w,v,u,t,s,r,q,p=A.F4(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c7(q,"+local.ngmy")?B.a.ao(q,0,q.length-11):q)===p){w=A.aN(s.h(t,"winsLeft"))
w=w==null?null:B.k.N(w)
return w==null?0:w}}return 0},
hWp(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=A.F4(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c7(q,"+local.ngmy")?B.a.ao(q,0,q.length-11):q)===n){w=A.aN(s.h(t,o))
w=w==null?null:B.k.N(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
hIE(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=A.F4(b5),b2=A.c41(),b3=C.h7n()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.a8(s)
q=r.h(s,a2)
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.c7(p,a3)?B.a.ao(p,0,p.length-11):p)!==b1)continue
q=A.aN(r.h(s,a4))
o=q==null?a1:B.k.N(q)
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
v=v==null?a1:B.k.N(v)
w.n(u,a4,(v==null?1:v)-1)
w=A.aN(w.h(u,"outcome"))
w=w==null?a1:B.k.N(w)
return w==null?1:w}n=new C.fcS()
for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.q(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c7(p,a3)?B.a.ao(p,0,p.length-11):p)!==b1)continue
m=n.$5(s,"perDay",a6,a7,b2)
if(m!=null)return m}for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.q(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c7(p,a3)?B.a.ao(p,0,p.length-11):p)!==b1)continue
l=n.$5(s,"perWeek",a8,a9,b3)
if(l!=null)return l}k=C.f2C(b4,b5)
w=J.a8(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?A.a_(v.a(w.h(k,b0)),r,q):A.T(r,q)
w.n(k,b0,j)
for(w=b4.y,w=new A.cP(w,A.a2(w).k("cP<1,2>")).gai(0);w.C();){i=w.d
h=i.b
g=J.a8(h)
f=g.h(h,"perDay")
if(f==null)f=0
e=g.h(h,"perWeek")
if(e==null)e=0
if(f<=0&&e<=0)continue
h=i.a
d=v.b(j.h(0,h))?A.a_(v.a(j.h(0,h)),r,q):A.T(r,q)
j.n(0,h,d)
if(f>0){g=d.h(0,a7)
if(J.k(g==null?"":g)!==b2){d.n(0,a7,b2)
d.n(0,a6,0)}g=A.aN(d.h(0,a6))
a0=g==null?a1:B.k.N(g)
if(a0==null)a0=0
if(a0<f){d.n(0,a6,a0+1)
return A.c7(h,a1)}}if(e>0){g=d.h(0,a9)
if(J.k(g==null?"":g)!==b3){d.n(0,a9,b3)
d.n(0,a8,0)}g=A.aN(d.h(0,a8))
a0=g==null?a1:B.k.N(g)
if(a0==null)a0=0
if(a0<e){d.n(0,a8,a0+1)
return A.c7(h,a1)}}}return a1},
h47(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[1,2,3],v=d.a,u=0;u<3;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
if(w===0)return 1
t=q[e.aD(w)]
if(t===3&&d.f>=d.e)t=e.hf()?1:2
return t},
fKL(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[-1,-2],v=d.a,u=0;u<2;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
return w===0?-1:q[e.aD(w)]},
hIF(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=A.F4(a3),a1=new C.fcT()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.a8(s)
q=r.h(s,"email")
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.c7(p,"+local.ngmy")?B.a.ao(p,0,p.length-11):p)!==a0)continue
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
q=new C.fcU(v+r+q>1,l)
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
return C.fKL(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
hID(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=A.aN(i.h(0,"wins")),g=h==null?m:B.k.N(h)
if(g==null)g=0
h=A.aN(i.h(0,"loses"))
w=h==null?m:B.k.N(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.h7n():A.c41()
t=v+"|"+u
s=C.f2C(d,e)
h=J.a8(s)
r=h.h(s,l)
if(J.k(r==null?"":r)!==t){h.n(s,l,t)
h.n(s,k,0)
h.n(s,j,0)}r=A.aN(h.h(s,k))
q=r==null?m:B.k.N(r)
if(q==null)q=0
r=A.aN(h.h(s,j))
p=r==null?m:B.k.N(r)
if(p==null)p=0
o=Math.max(0,g-q)
r=o+Math.max(0,w-p)
if(r<=0)return m
n=f.aD(r)<o
if(n)h.n(s,k,q+1)
else h.n(s,j,p+1)
return n},
hQX(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
d.bdf()
w=C.hIF(d,e,a0)
if(w!=null){if(w===3)++d.f
C.ae5(d,e,w)
return w}v=C.hIE(d,e)
if(v!=null){if(v===3)++d.f
C.ae5(d,e,v)
return v}u=C.hID(d,e,a0)
if(u!=null)return new C.fqp(d,a0,e).$1(u)
t=C.f2C(d,e)
s=J.a8(t)
r=A.aN(s.h(t,"winStreak"))
q=r==null?null:B.k.N(r)
if(q==null)q=0
s=A.aN(s.h(t,"loseStreak"))
p=s==null?null:B.k.N(s)
if(p==null)p=0
o=new C.fqr(d,a0)
if(C.hCq(d,e)>0){n=o.$0()
C.hWp(d,e)
C.ae5(d,e,n)
return n}if(q>=d.c){n=new C.fqq(d,a0).$0()
C.ae5(d,e,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.ae5(d,e,n)
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
if(f===3&&d.f>=d.e)f=a0.hf()?1:2}else{s=l.length
if(s!==0)f=l[a0.aD(s)]
else f=g?1:-1}if(f===3)++d.f
C.ae5(d,e,f)
return f},
c3U(d){var w=0,v=A.j(x.y),u
var $async$c3U=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3T(d),$async$c3U)
case 3:if(f){u=!0
w=1
break}u=A.c3T(d)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c3U,v)},
ae5(d,e,f){var w,v="winStreak",u="loseStreak",t=C.f2C(d,e),s=J.a8(t),r=A.aN(s.h(t,v)),q=r==null?null:B.k.N(r)
if(q==null)q=0
r=A.aN(s.h(t,u))
w=r==null?null:B.k.N(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
fcS:function fcS(){},
fcT:function fcT(){},
fcU:function fcU(d,e){this.a=d
this.b=e},
fqp:function fqp(d,e,f){this.a=d
this.b=e
this.c=f},
fqr:function fqr(d,e){this.a=d
this.b=e},
fqq:function fqq(d,e){this.a=d
this.b=e},
alz:function alz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgf:function bgf(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cP$=d
_.b1$=e
_.c=_.a=null},
dqM:function dqM(d){this.a=d},
dqL:function dqL(d){this.a=d},
dqN:function dqN(d){this.a=d},
dqK:function dqK(d,e){this.a=d
this.b=e},
aIL:function aIL(){},
M8:function M8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c4J:function c4J(){},
c4I:function c4I(){},
anz:function anz(d,e,f){this.c=d
this.d=e
this.a=f},
fG4(d,e,f){return A.cg(null,B.w.j(0.88),!0,null,new C.c5a(f,e),d,null,!0,!0,x.H)},
hoQ(d){var w,v,u,t,s=B.a.i(d),r=s.split("-")
if(r.length===3){w=A.c7(r[0],null)
v=r[1]
u=A.c7(v,null)
t=A.c7(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?B.i6[u-1]:v)+" "+A.t(t)+", "+A.t(w)}return s},
Mg:function Mg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c5a:function c5a(d,e){this.a=d
this.b=e},
bgU:function bgU(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
dQ8:function dQ8(d,e){this.a=d
this.b=e},
dQ4:function dQ4(){},
dQ5:function dQ5(){},
dQ6:function dQ6(d,e){this.a=d
this.b=e},
dQ7:function dQ7(d,e){this.a=d
this.b=e},
aJk:function aJk(){},
h7j(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.bcO(new C.flK(w))
w=w.a
return w==null?null:w.c.a},
h7b(d){$.aU.x1$.push(new C.flx(d))},
h7v(d){var w=$.ru().gbc(),v=w!=null
if(!v||w.c==null)return
if(C.h7j(w)==="GamePlayScreen")if(v&&w.c!=null&&w.oY())w.eD()},
h7u(d){C.h4d(d,0)},
h4d(d,e){var w,v
if(e>4)return
w=d==null?$.ru().gbc():d
if(w==null||w.c==null)return
v=C.h7j(w)
if(v==="GameCenterScreen")return
if(D.ewg.t(0,v)&&w.oY()){w.eD()
$.aU.x1$.push(new C.f96(w,e))}},
aNb(d,e,f){return A.ef(A.cl(new C.fn6(e,d,f)),e,!0)},
flK:function flK(d){this.a=d},
flx:function flx(d){this.a=d},
flw:function flw(d){this.a=d},
f96:function f96(d,e){this.a=d
this.b=e},
fn6:function fn6(d,e,f){this.a=d
this.b=e
this.c=f},
anD(d,e){var w=0,v=A.j(x.H),u
var $async$anD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=A.TJ(e)
w=2
return A.b(A.anC(d,u),$async$anD)
case 2:A.a5B(d,u)
return A.h(null,v)}})
return A.i($async$anD,v)},
u8(d,e,f,g,h,i,j,k){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$u8=A.e(function(l,m){if(l===1)return A.f(m,v)
for(;;)switch(w){case 0:o=A.xG(g)
if(o.length===0){w=1
break}t=e==null?A.JU(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return A.b(A.Mh(o),$async$u8)
case 3:q=m
if(j!=null&&j.length!==0&&J.qu(q,new C.c5o(j))){w=1
break}p=e==null?new A.Q(Date.now(),0,!1):e
J.p9(q,0,new A.j2(B.o.u(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return A.b(C.anD(o,q),$async$u8)
case 4:if(i==null||r==null||s)C.a5D(o).by(new C.c5p(),x.S).eN(new C.c5q())
case 1:return A.h(u,v)}})
return A.i($async$u8,v)},
a5D(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a5D=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=$.h8s
m=A.xG(d)
if(n==null||m.length===0){w=1
break}w=3
return A.b(A.Mh(m),$async$a5D)
case 3:t=f
s=J.cD(t)
if(!s.ba(t,new C.c5n())){w=1
break}w=4
return A.b(n.$2(m,t),$async$a5D)
case 4:r=f
q=J.a8(r)
if(q.gJ(r)!==s.gJ(t)){w=1
break}for(p=!1,o=0;o<s.gJ(t);++o)if(B.R.an(s.h(t,o).ac(),null)!==B.R.an(q.h(r,o).ac(),null))p=!0
w=p?5:6
break
case 5:w=7
return A.b(C.anD(m,r),$async$a5D)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$a5D,v)},
aXG(d){var w=0,v=A.j(x.S),u,t
var $async$aXG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fG7(d,!1),$async$aXG)
case 3:t=J
w=4
return A.b(C.anE(d,!1),$async$aXG)
case 4:u=t.dG(f,new C.c5m(new A.Q(Date.now(),0,!1).bM(-864e8))).gJ(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aXG,v)},
anE(d,e){var w=0,v=A.j(x.ac),u,t,s,r
var $async$anE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=A.xG(d)
if(r.length===0){u=A.a([],x.gi)
w=1
break}w=3
return A.b(A.Mh(r),$async$anE)
case 3:t=g
s=A.TJ(t)
if(s.length!==J.ab(t))C.anD(r,s)
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anE,v)},
hOS(d){var w,v,u,t=new A.Q(Date.now(),0,!1),s=t.bx(d).a,r=B.o.am(s,6e7)
if(r<1)return"Just now"
w=B.o.am(s,36e8)
if(w<1)return""+r+"m ago"
if(B.o.am(s,864e8)<1)return""+w+"h ago"
v=B.o.G(A.dk(d),12)===0?12:B.o.G(A.dk(d),12)
s=B.i6[A.bF(d)-1]
r=A.bx(d)===A.bx(t)?"":", "+A.bx(d)
w=B.a.aU(B.o.u(A.h_(d)),2,"0")
u=A.dk(d)<12?"AM":"PM"
return s+" "+A.bP(d)+r+" \xb7 "+v+":"+w+" "+u},
bx4(d){var w=B.k.a9(Math.abs(d),2).split(".")
return"$"+A.ol(w[0],A.ae("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.f7i(),null)+"."+w[1]},
bAC(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$bAC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.anE(e,!1),$async$bAC)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
A.fG7(e,!0).by(new C.fyx(e),t).by(new C.fyy(),t).eN(new C.fyz())
w=4
return A.b(A.c2(B.K,null,new C.fyA(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bAC)
case 4:case 1:return A.h(u,v)}})
return A.i($async$bAC,v)},
fIY(d,e,f){var w=null,v=B.c.j(0.05),u=A.m(14),t=A.I(f.j(0.35),B.r,1)
return A.D(A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),B.bB,A.f1(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.ds)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.hD,w,w,w),1)},
dQ9(d,e,f){var w=null,v=B.w.j(0.22),u=A.m(8),t=A.I(f.j(0.28),B.r,1)
return A.D(A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.f1(B.a3,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.ec)],x.p),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.KX,w,w,w),1)},
c5o:function c5o(d){this.a=d},
c5p:function c5p(){},
c5q:function c5q(){},
c5n:function c5n(){},
c5m:function c5m(d){this.a=d},
f7i:function f7i(){},
fyx:function fyx(d){this.a=d},
fyy:function fyy(){},
fyz:function fyz(){},
fyA:function fyA(d,e){this.a=d
this.b=e},
fyw:function fyw(d,e){this.a=d
this.b=e},
fyv:function fyv(d){this.a=d},
abx:function abx(d,e){this.c=d
this.a=e},
dQb:function dQb(){},
dQc:function dQc(){},
dQd:function dQd(){},
dQe:function dQe(d){this.a=d},
dQg:function dQg(){},
dQf:function dQf(d){this.a=d},
abw:function abw(d,e){this.c=d
this.a=e},
dQa:function dQa(){},
bAD(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return A.hP(B.aV,!1,w,d,new C.fyD(j,i,h,g,e,f),null,B.eM,!1,x.H)},
fyD:function fyD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fyB:function fyB(d,e){this.a=d
this.b=e},
fyC:function fyC(d,e){this.a=d
this.b=e},
ay5:function ay5(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bcD:function bcD(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bp$=e
_.a6$=f
_.c=_.a=null},
d7g:function d7g(d,e){this.a=d
this.b=e},
d7f:function d7f(){},
abW:function abW(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aIg:function aIg(){},
aoo(d,e,f){return new C.aYw(f,d,e,null)},
hpu(d){var w=A.a(B.k.a9(d,2).split("."),x.s),v=A.ae("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=A.ol(w[0],v,new C.c6Z(),null)
return B.d.aH(w,".")},
aXJ(){var w=$.rT
if((w>0?$.rT=w-1:w)<=0)$.rT=0},
afg(d,e){var w=0,v=A.j(x.H),u
var $async$afg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=$.fNl
w=u!=null?2:3
break
case 2:w=4
return A.b(u.$2(d,e),$async$afg)
case 4:case 3:return A.h(null,v)}})
return A.i($async$afg,v)},
aYw:function aYw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c7_:function c7_(d){this.a=d},
c6Z:function c6Z(){},
LK:function LK(){},
bWO:function bWO(){},
fML(d){if(d>0)return"+"+d
return""+d},
fM8(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fn7(d,e){var w=J.q(e,d)
if(w==null)w=A.flU().h(0,d)
return w==null?90:w},
f6g(d,e){var w,v,u=A.b0(x.S)
while(u.a<3){w=e.aD(41)-20
if(w===0)continue
u.L(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.L(0,d+v*7+3)
v=A.a([B.o.u(d)],x.s)
B.d.v(v,new A.jG(u,new C.f6h(),u.$ti.k("jG<cn.E,n>")))
B.d.fB(v,e)
return v},
h3e(d,e,f){var w,v,u,t,s=A.b0(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.L(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.L(0,f[B.o.G(u,5)]+u);++u}t=A.a([d],x.s)
B.d.v(t,A.oS(s,3,s.$ti.k("cn.E")))
B.d.fB(t,e)
return t},
hK2(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=A.a([],x.dA),b2=new A.f5()
b2.dU(42)
for(w=x.s,v=0;v<200;++v){u=B.o.G(v,5)
if(u===0){t=[4,9,16,25,36,49,64,81,121,144,196,256][b2.aD(12)]
s=[2,3,5,6,7,10,11,13][b2.aD(8)]
r=B.k.N(Math.sqrt(t))
q=2+b2.aD(4)
p=B.o.am(q,2)
if((q&1)===0){o=""+r
n=""+s
m=p===1?o+"\u221a"+n:o+"x^"+p+"\u221a"+n}else{o=""+r
n=""+s
m=p===0?o+"\u221a"+n+"x":o+"x^"+p+"\u221a"+n+"x"}o=""+p
n=""+s
l=""+r+"x^"
b1.push(new C.Hu("Simplify \u221a("+t*s+"x^"+q+")",m,C.h3e(m,b2,A.a([""+(r+1)+"x^"+o+"\u221a"+n,A.t(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aD(35)
j=b2.aD(4)===0?1:2+b2.aD(4)
i=b2.aD(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.Hu("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.f6g(k,b2)))}else if(u===2){k=2+b2.aD(18)
j=b2.aD(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aD(10)+2
b1.push(new C.Hu("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.f6g(g,b2)))}else b1.push(new C.Hu("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.f6g(k,b2)))}else if(u===3){e=b2.aD(11)-5
o=b2.aD(11)
n=b2.aD(11)
d=b2.aD(11)+2
l=b2.hf()?1:-1
a0=e+l*(b2.aD(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===B.k.jB(a4)?""+B.k.N(a4):"\u221a"+a3
b1.push(new C.Hu("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.f6g(a0,b2)))}else{a6=2+b2.aD(10)
a7=a6+2+b2.aD(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.Hu("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.h3e(m,b2,A.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
hUD(d){var w,v,u=x.s,t=A.a(d.split(""),u)
if(t.length<4)return new A.dz(A.a(d.split(""),u),x.bJ).fO(0)
for(w=0;w<12;++w){B.d.fB(t,B.cG)
v=B.d.fO(t)
if(v!==d)return v}return new A.dz(t,x.bJ).fO(0)},
Hu:function Hu(d,e,f){this.a=d
this.b=e
this.c=f},
f6h:function f6h(){},
an1:function an1(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAW:function aAW(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
dJb:function dJb(d){this.a=d},
dJc:function dJc(d){this.a=d},
dJd:function dJd(d){this.a=d},
dJe:function dJe(d,e){this.a=d
this.b=e},
dJf:function dJf(d,e){this.a=d
this.b=e},
dJg:function dJg(d){this.a=d},
dJa:function dJa(d){this.a=d},
dJh:function dJh(d){this.a=d},
dJ9:function dJ9(d){this.a=d},
dJk:function dJk(d){this.a=d},
dJl:function dJl(d){this.a=d},
dJj:function dJj(d,e){this.a=d
this.b=e},
dJi:function dJi(d,e){this.a=d
this.b=e},
anF:function anF(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBc:function aBc(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
dQy:function dQy(d,e,f){this.a=d
this.b=e
this.c=f},
dQz:function dQz(d){this.a=d},
dQu:function dQu(d){this.a=d},
dQw:function dQw(d,e){this.a=d
this.b=e},
dQv:function dQv(d,e){this.a=d
this.b=e},
dQx:function dQx(d,e){this.a=d
this.b=e},
dQt:function dQt(d){this.a=d},
hlH(d){var w,v,u,t,s,r,q,p=new A.Q(Date.now(),0,!1),o=p.bM(36e8)
try{w=d.h(0,"start")
p=A.mx(J.k(w==null?"":w)).bP()
w=d.h(0,"end")
o=A.mx(J.k(w==null?"":w)).bP()}catch(v){}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"title")
u=J.k(u==null?"Event":u)
t=p
s=o
r=d.h(0,"notes")
r=r==null?null:J.k(r)
q=d.h(0,"location")
return new C.qT(w,u,t,s,r,q==null?null:J.k(q))},
a5J(d){var w=0,v=A.j(x.ck),u,t,s,r,q,p,o
var $async$a5J=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.b)
w=1
break}w=3
return A.b(A.ay(),$async$a5J)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aT(J.q(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.b)
w=1
break}try{s=B.R.aF(0,t,null)
if(!x.j.b(s)){p=A.a([],x.b)
u=p
w=1
break}p=J.d7(s,x.f)
p=A.cC(p,new C.c5Q(),p.$ti.k("G.E"),x.b1)
p=A.B(p,A.a2(p).k("G.E"))
B.d.b0(p,new C.c5R())
u=p
w=1
break}catch(n){r=A.a7(n)
$.al.$1("[calendar-memory] load: "+A.t(r))
p=A.a([],x.b)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$a5J,v)},
anX(d,e){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$anX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.a5J(d),$async$anX)
case 2:r=g
q=J.cD(r)
q.bm(r,new C.c5N(e))
q.L(r,e)
q.b0(r,new C.c5O())
w=3
return A.b(A.ay(),$async$anX)
case 3:u=g
t=B.a.i(d.toLowerCase())
q=q.k6(r,80)
s=q.$ti.k("J<ai.E,a1<n,@>>")
q=A.B(new A.J(q,new C.c5P(),s),s.k("ai.E"))
w=4
return A.b(u.ap("String","ngmy_helper_calendar_v1_"+t,B.R.an(q,null)),$async$anX)
case 4:return A.h(null,v)}})
return A.i($async$anX,v)},
hp2(d,e){var w=Date.now(),v=new A.Q(w,0,!1).bP()
w=J.dG(d,new C.c5S(v,v.bM(A.dA(14,0,0,0,0,0).a)))
w=A.B(w,w.$ti.k("G.E"))
return w},
fW2(d){var w,v,u,t,s,r,q,p,o,n,m=C.hp2(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=A.d9(m,0,A.dI(20,"count",x.S),A.U(m).c),v=w.$ti,w=new A.bV(w,w.gJ(0),v.k("bV<ai.E>")),v=v.k("ai.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=B.o.G(A.dk(s),12)===0?12:B.o.G(A.dk(s),12)
q=A.dk(s)>=12?"PM":"AM"
p=B.a.aU(B.o.u(A.h_(s)),2,"0")
o=t.f
if((o==null?null:B.a.i(o).length!==0)===!0){o.toString
n=" @ "+B.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+A.bF(s)+"/"+A.bP(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&B.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return B.a.i(u.charCodeAt(0)==0?u:u)},
qT:function qT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c5Q:function c5Q(){},
c5R:function c5R(){},
c5N:function c5N(d){this.a=d},
c5O:function c5O(){},
c5P:function c5P(){},
c5S:function c5S(d,e){this.a=d
this.b=e},
hlI(d){var w,v,u,t,s,r,q,p,o=null,n=new A.Q(Date.now(),0,!1)
try{w=d.h(0,"when")
n=A.mx(J.k(w==null?"":w)).bP()}catch(v){}w=d.h(0,"id")
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
return new C.qU(w,u,t,s,r,q,J.k(p==null?"user":p))},
fUo(d){var w=B.o.G(A.dk(d),12)===0?12:B.o.G(A.dk(d),12),v=A.dk(d)>=12?"PM":"AM"
return""+A.bF(d)+"/"+A.bP(d)+" "+w+":"+B.a.aU(B.o.u(A.h_(d)),2,"0")+" "+v},
SS(d){var w=0,v=A.j(x.e),u,t,s,r,q,p,o
var $async$SS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.x)
w=1
break}w=3
return A.b(A.ay(),$async$SS)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aT(J.q(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.x)
w=1
break}try{s=B.R.aF(0,t,null)
if(!x.j.b(s)){p=A.a([],x.x)
u=p
w=1
break}p=J.d7(s,x.f)
p=A.cC(p,new C.bZb(),p.$ti.k("G.E"),x.Q)
p=A.B(p,A.a2(p).k("G.E"))
B.d.b0(p,new C.bZc())
u=p
w=1
break}catch(n){r=A.a7(n)
$.al.$1("[call-memory] load: "+A.t(r))
p=A.a([],x.x)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$SS,v)},
aW3(d,e){var w=0,v=A.j(x.H),u,t,s,r
var $async$aW3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$aW3)
case 2:u=g
t=A.d9(e,0,A.dI(120,"count",x.S),A.U(e).c).dA(0)
s=B.a.i(d.toLowerCase())
r=A.U(t).k("J<1,a1<n,@>>")
r=A.B(new A.J(t,new C.bZ9(),r),r.k("ai.E"))
w=3
return A.b(u.ap("String","ngmy_call_memory_v1_"+s,B.R.an(r,null)),$async$aW3)
case 3:return A.h(null,v)}})
return A.i($async$aW3,v)},
aW4(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$aW4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:p=A.T(x.N,x.Q)
o=J
w=2
return A.b(C.SS(d),$async$aW4)
case 2:u=o.aV(g)
case 3:if(!u.C()){w=4
break}t=u.gT(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("bc<2>")
q=A.B(new A.bc(p,u),u.k("G.E"))
B.d.b0(q,new C.bZa())
w=5
return A.b(C.aW3(d,q),$async$aW4)
case 5:return A.h(null,v)}})
return A.i($async$aW4,v)},
bZd(d,e){var w=0,v=A.j(x.e),u,t,s
var $async$bZd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.SS(d),$async$bZd)
case 3:t=s.dG(g,new C.bZe(e.bM(-72e8),e.bM(72e8)))
t=A.B(t,t.$ti.k("G.E"))
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bZd,v)},
fUp(d,e){var w,v,u,t,s,r=J.a8(d)
if(r.gaj(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.k6(d,e),v=w.$ti,w=new A.bV(w,w.gJ(0),v.k("bV<ai.E>")),v=v.k("ai.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gTY()+"\n"
t=t.f
if(t!=null&&B.a.i(t).length!==0){s=B.a.i(t)
u+="  Voicemail/text: "+(s.length>180?B.a.ao(s,0,177)+"\u2026":s)+"\n"}}r=r.gJ(d)>e?u+("\u2026 and "+(r.gJ(d)-e)+" more\n"):u
return B.a.i(r.charCodeAt(0)==0?r:r)},
hQH(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new A.Q(q,0,!1).bP(),o=d.toLowerCase(),n=A.bX(A.bx(p),A.bF(p),A.bP(p),0,0,0,0,0)
if(B.a.t(o,"yesterday"))n=n.bM(r)
else if(!B.a.t(o,"today")&&B.a.t(o,"last night"))n=n.bM(r)
w=A.ae("\\b(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!0,!1,!1,!1).cA(o)
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
return A.bX(A.bx(n),A.bF(n),A.bP(n),u,t,0,0,0)},
h8S(d){var w=A.ae("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
qU:function qU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bZb:function bZb(){},
bZc:function bZc(){},
bZ9:function bZ9(){},
bZa:function bZa(){},
bZe:function bZe(d,e){this.a=d
this.b=e},
fW5(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lp(t,w,v,u==null?null:J.k(u))},
hp8(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b6(v,new C.c5Y(),x.bP)
v=A.B(v,v.$ti.k("ai.E"))}if(v==null)v=D.cUK
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.y(d.h(0,"printable"),!0)
return new C.id(r,w,v,u,t,typeof d.h(0,s)=="number"?B.k.N(A.f6(d.h(0,s))):0)},
hp7(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.hCE(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?B.k.N(A.f6(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?B.k.N(A.f6(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b6(s,new C.c5W(),x.u)
s=A.B(s,s.$ti.k("ai.E"))}return new C.hZ(p,w,v,u,s==null?D.atr:s,t)},
hCF(d){var w,v,u,t=A.E([F.AQ,"investments",B.oj,"games",B.jq,"loans",B.hu,"withdrawals",B.kI,"deposits",B.kJ,"civic",B.kH,"store",B.qA,"jobs",B.ma,"refunds",B.eO,"account",B.ly,"music",B.xg,"help"],x.dk,x.N)
for(w=new A.cP(t,A.a2(t).k("cP<1,2>")).gai(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
hCE(d){switch(d){case"investments":return F.AQ
case"games":return B.oj
case"loans":return B.jq
case"withdrawals":return B.hu
case"deposits":return B.kI
case"civic":return B.kJ
case"store":return B.kH
case"jobs":return B.qA
case"refunds":return B.ma
case"account":return B.eO
case"music":return B.ly
default:return B.xg}},
mM(d){var w=A.a([new C.lp("text",d,null,null)],x.a)
return w},
afd(){var w=null,v=x.v
return A.a([new C.hZ("investments","Investments",F.AQ,4280468830,A.a([new C.id("inv1","How do I buy an investment plan?",C.mM("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.id("inv2","When do I get paid from my plan?",C.mM("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.id("inv3","Can I have more than one plan?",C.mM("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.hZ("games","Games",B.oj,4287323382,A.a([new C.id("gam1","How do NGMY games work?",C.mM("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.id("gam2","Why did my game payout change?",C.mM("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.hZ("loans","Loans",B.jq,4294538006,A.a([new C.id("loan1","How do I apply for a loan?",C.mM("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.id("loan2","What is the repayment period?",C.mM("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.hZ("withdrawals","Withdrawals",B.hu,4282090230,A.a([new C.id("wd1","How do I withdraw money?",C.mM("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.id("wd2","Why is my withdrawal pending?",C.mM("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.hZ("deposits","Deposits",B.kI,4279548070,A.a([new C.id("dep1","How do I deposit funds?",C.mM("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.id("dep2","How long until my deposit posts?",C.mM("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.hZ("civic","Civic Registry",B.kJ,4289170426,A.a([new C.id("civ1","What is Civic Registry?",C.mM("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.id("civ2","What does \u201cmissed\u201d mean on my profile?",C.mM("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.hZ("store","NGMY Store",B.kH,4293675161,A.a([new C.id("sto1","How do I buy from NGMY Store?",C.mM("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.id("sto2","How do I sell in the store?",C.mM("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.hZ("jobs","Jobs & Creator",B.qA,4293548044,A.a([new C.id("job1","How do I find jobs?",C.mM("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.id("job2","How do I post a job?",C.mM("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.hZ("refunds","Refunds",B.ma,4293870660,A.a([new C.id("ref1","Can I get a refund?",C.mM("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.id("ref2","How long do refunds take?",C.mM("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.hZ("account","Account",B.eO,4281908728,A.a([new C.id("acc1","How do I update my profile?",C.mM("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.id("acc2","I forgot my password \u2014 what now?",C.mM("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.hZ("music","Music Charts",B.ly,4290807036,A.a([new C.id("mus1","What are Music Charts?",C.mM("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.id("mus2","How do I upload music?",C.mM("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.hZ("help","Help Center",B.xg,4279080072,A.a([new C.id("hlp1","Where can I get live help?",C.mM("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.id("hlp2","How do daily Helper limits work?",C.mM("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
fW6(d){var w,v=J.a8(d),u=v.gaj(d)
if(u)return C.afd()
v=v.dn(d,new C.c60(),x.i)
w=A.B(v,v.$ti.k("ai.E"))
B.d.b0(w,new C.c61())
return w.length===0?C.afd():w},
fW7(d){var w=J.b6(d,new C.c62(),x.P)
w=A.B(w,w.$ti.k("ai.E"))
return A.E(["categories",w,"savedAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z)},
anZ(d){return C.hp9(d)},
hp9(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q,p
var $async$anZ=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.ay(),$async$anZ)
case 6:s=f
w=7
return A.b(s.ap("String","ngmy_helper_kb_v1",B.R.an(C.fW7(d),null)),$async$anZ)
case 7:u=1
w=5
break
case 3:u=2
p=t.pop()
r=A.a7(p)
$.al.$1("[helper kb] local save: "+A.t(r))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$anZ,v)},
c6_(){var w=0,v=A.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$c6_=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$c6_)
case 7:r=e
q=A.aT(J.q(r.a,"ngmy_helper_kb_v1"))
if(q==null||B.a.i(q).length===0){l=C.afd()
u=l
w=1
break}p=B.R.aF(0,q,null)
if(!x.f.b(p)){l=C.afd()
u=l
w=1
break}o=J.q(p,"categories")
if(!x.j.b(o)){l=C.afd()
u=l
w=1
break}n=C.fW6(o)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
m=A.a7(j)
$.al.$1("[helper kb] local load: "+A.t(m))
l=C.afd()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$c6_,v)},
aY4(){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$aY4=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c_(),$async$aY4)
case 7:if(!e){u=null
w=1
break}w=8
return A.b(A.eY("ngmy_helper_kb",null,!1,B.bE),$async$aY4)
case 8:q=e
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a7(o)
$.al.$1("[helper kb] cloud fetch: "+A.t(r))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aY4,v)},
aY5(d){return C.hpa(d)},
hpa(d){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aY5=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c_(),$async$aY5)
case 7:if(!f){u=!1
w=1
break}w=8
return A.b(A.hx("ngmy_helper_kb",d,!1,!1,B.cE,null),$async$aY5)
case 8:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a7(o)
$.al.$1("[helper kb] cloud upsert: "+A.t(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aY5,v)},
ao_(){var w=0,v=A.j(x.I),u,t,s,r
var $async$ao_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c6_(),$async$ao_)
case 3:s=e
w=4
return A.b(C.aY4(),$async$ao_)
case 4:r=e
w=r!=null&&x.j.b(J.q(r,"categories"))?5:6
break
case 5:t=C.fW6(x.j.a(J.q(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return A.b(C.anZ(t),$async$ao_)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ao_,v)},
c63(d){var w=0,v=A.j(x.y),u
var $async$c63=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.anZ(d),$async$c63)
case 3:u=C.aY5(C.fW7(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c63,v)},
lp:function lp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
id:function id(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c5Z:function c5Z(){},
c5Y:function c5Y(){},
hZ:function hZ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c5X:function c5X(){},
c5W:function c5W(){},
c60:function c60(){},
c61:function c61(){},
c62:function c62(){},
b6h:function b6h(d){this.a=d},
TQ:function TQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBo:function aBo(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
dUd:function dUd(){},
dUe:function dUe(){},
dU7:function dU7(d){this.a=d},
dU8:function dU8(d){this.a=d},
dTR:function dTR(d,e){this.a=d
this.b=e},
dTS:function dTS(d){this.a=d},
dTT:function dTT(d,e,f){this.a=d
this.b=e
this.c=f},
dTQ:function dTQ(d){this.a=d},
dU4:function dU4(d,e){this.a=d
this.b=e},
dU5:function dU5(d,e){this.a=d
this.b=e},
dU6:function dU6(d){this.a=d},
dTZ:function dTZ(d){this.a=d},
dU_:function dU_(d,e,f){this.a=d
this.b=e
this.c=f},
dTY:function dTY(d,e){this.a=d
this.b=e},
dU3:function dU3(d,e,f){this.a=d
this.b=e
this.c=f},
dU2:function dU2(d,e){this.a=d
this.b=e},
dU1:function dU1(d,e){this.a=d
this.b=e},
dU0:function dU0(d,e,f){this.a=d
this.b=e
this.c=f},
dTV:function dTV(d){this.a=d},
dTU:function dTU(d){this.a=d},
dTW:function dTW(d,e){this.a=d
this.b=e},
dTX:function dTX(d){this.a=d},
dUc:function dUc(d,e){this.a=d
this.b=e},
dUb:function dUb(d,e){this.a=d
this.b=e},
dUa:function dUa(){},
dU9:function dU9(d,e){this.a=d
this.b=e},
O6:function O6(d,e){this.c=d
this.a=e},
b87:function b87(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cGZ:function cGZ(d){this.a=d},
cGY:function cGY(d,e){this.a=d
this.b=e},
cGW:function cGW(d,e){this.a=d
this.b=e},
cH_:function cH_(d){this.a=d},
cGX:function cGX(d,e){this.a=d
this.b=e},
cGV:function cGV(d,e){this.a=d
this.b=e},
cH0:function cH0(d){this.a=d},
cH1:function cH1(d,e){this.a=d
this.b=e},
Zk:function Zk(d,e,f){this.c=d
this.d=e
this.a=f},
aDj:function aDj(){this.d=$
this.c=this.a=null},
eEL:function eEL(d,e){this.a=d
this.b=e},
eEM:function eEM(d){this.a=d},
eES:function eES(){},
eER:function eER(d,e){this.a=d
this.b=e},
eEQ:function eEQ(d,e){this.a=d
this.b=e},
eEN:function eEN(d,e){this.a=d
this.b=e},
eEP:function eEP(d,e,f){this.a=d
this.b=e
this.c=f},
eEO:function eEO(d,e,f){this.a=d
this.b=e
this.c=f},
Zj:function Zj(d,e){this.c=d
this.a=e},
aDi:function aDi(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
eEH:function eEH(d,e){this.a=d
this.b=e},
eEF:function eEF(d){this.a=d},
eEG:function eEG(d,e){this.a=d
this.b=e},
eEJ:function eEJ(d,e){this.a=d
this.b=e},
eEK:function eEK(d){this.a=d},
eEI:function eEI(d,e){this.a=d
this.b=e},
hp5(d){var w=new A.J(d,new C.c5T(),A.U(d).k("J<1,n>")).aH(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
c5U(d,e,f){return C.hp6(d,e,f)},
hp6(b4,b5,b6){var w=0,v=A.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$c5U=A.e(function(b8,b9){if(b8===1)return A.f(b9,v)
for(;;)switch(w){case 0:b3=B.a.i(b5)
if(b3.length===0){u=new A.J3([A.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return A.b(A.qr(A.mP(b3),C.hp5(b6)+"\n\nAdmin instruction:\n"+b4,B.hg,null),$async$c5U)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=B.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new A.J3([A.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=B.a.i(a3)
if(J.cY(s,"```"))s=B.a.e4(J.fQ6(s,A.ae("^```(?:json)?\\s*",!0,!1,!1,!1),""),A.ae("\\s*```$",!0,!1,!1,!1),"")
r=B.R.aF(0,s,null)
a3=x.f
if(!a3.b(r)){a3=A.a([],x.Y)
u=new A.J3([a3,"AI response was not valid JSON.",null,null])
w=1
break}a4=x.N
a5=x.z
q=A.a_(r,a4,a5)
a6=J.q(q,"message")
p=a6==null?null:J.k(a6)
a6=J.q(q,"replaceCategoryId")
o=a6==null?null:J.k(a6)
n=J.q(q,"categories")
a6=x.j
if(!a6.b(n)||J.ck(n)){a3=A.a([],x.Y)
u=new A.J3([a3,"AI did not return any categories.",p,o])
w=1
break}m=A.a([],x.Y)
l=b6.length
for(k=0,a7=x.v,a8=x.a;k<J.ab(n);++k){j=A.a_(a3.a(J.q(n,k)),a4,a5)
i="cat_ai_"+1000*Date.now()+"_"+A.t(k)
h=J.q(j,"questions")
g=A.a([],a7)
if(a6.b(h))for(f=0;f<J.ab(h);++f){e=A.a_(a3.a(J.q(h,f)),a4,a5)
d=J.q(e,"answerBlocks")
a0=A.a([],a8)
if(a6.b(d))for(a9=J.aV(d);a9.C();){a1=a9.gT(a9)
J.cd(a0,C.fW5(A.a_(a3.a(a1),a4,a5)))}if(J.ab(a0)===0){a9=J.q(e,"answer")
J.cd(a0,new C.lp("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=A.t(f)
b1=J.q(e,"question")
J.cd(g,new C.id("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.y(J.q(e,"printable"),!0),f))}a9=J.q(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.q(j,"iconKey")
b0=C.hp4(J.k(b0==null?"help":b0))
b1=typeof J.q(j,"colorValue")=="number"?B.k.N(A.f6(J.q(j,"colorValue"))):4284773515
J.cd(m,new C.hZ(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ab(a3)!==0)===!0?o:null
u=new A.J3([m,null,p,a3])
w=1
break}catch(b7){a2=A.a7(b7)
a3=A.t(a2)
a4=A.a([],x.Y)
u=new A.J3([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c5U,v)},
hp4(d){switch(d){case"investments":return F.AQ
case"games":return B.oj
case"loans":return B.jq
case"withdrawals":return B.hu
case"deposits":return B.kI
case"civic":return B.kJ
case"store":return B.kH
case"jobs":return B.qA
case"refunds":return B.ma
case"account":return B.eO
case"music":return B.ly
default:return B.xg}},
hPd(d,e,f){var w,v,u,t=A.bl(d,!0,x.i)
if(f!=null&&J.ab(e)===1){w=B.d.bi(t,new C.fnu(f))
if(w>=0){t[w]=J.fm(e).cAY(f,t[w].f)
return t}}B.d.v(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].b7t(u)
return t},
c5T:function c5T(){},
fnu:function fnu(d){this.a=d},
cYq:function cYq(d){this.a=d},
TR:function TR(d,e,f){this.c=d
this.d=e
this.a=f},
aBq:function aBq(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
dUO:function dUO(){},
dUu:function dUu(d,e){this.a=d
this.b=e},
dUz:function dUz(d,e){this.a=d
this.b=e},
dUx:function dUx(d,e){this.a=d
this.b=e},
dUv:function dUv(d){this.a=d},
dUw:function dUw(d){this.a=d},
dUy:function dUy(d,e,f){this.a=d
this.b=e
this.c=f},
dUq:function dUq(){},
dUr:function dUr(){},
dUs:function dUs(){},
dUt:function dUt(){},
dUE:function dUE(d,e){this.a=d
this.b=e},
dUF:function dUF(d){this.a=d},
dUG:function dUG(d){this.a=d},
dUH:function dUH(d){this.a=d},
dUI:function dUI(d){this.a=d},
dUJ:function dUJ(d){this.a=d},
dUK:function dUK(){},
dUL:function dUL(d){this.a=d},
dUD:function dUD(d){this.a=d},
dUM:function dUM(d){this.a=d},
dUC:function dUC(d){this.a=d},
dUN:function dUN(d,e){this.a=d
this.b=e},
dUB:function dUB(d,e){this.a=d
this.b=e},
dUA:function dUA(d,e){this.a=d
this.b=e},
hwT(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.a([],x.eO)
for(w=A.ae("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kz(0,d),w=new A.Iy(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=B.a.ao(d,t,q)
o=u?B.cl:B.aJ
m.push(new A.ep(p,n,n,B.cQ,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?B.cl:B.aJ
m.push(new A.ep(p,n,n,B.cQ,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,B.I,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?B.cl:B.aJ
m.push(new A.ep(p,n,n,B.cQ,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,B.cC,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?B.cl:B.aJ
m.push(new A.ep(p,n,n,B.cQ,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,B.mo,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=B.a.aY(d,t)
m.push(A.dn(n,n,n,n,n,n,n,n,n,A.l(n,n,u?B.cl:B.aJ,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return A.t2(n,n,n,B.eB,n,n,!0,n,A.dn(m,n,n,n,n,n,n,n,n,n,n),B.a5,n,n,B.de,B.cg)},
dbx:function dbx(d){this.a=d},
ayZ:function ayZ(d,e){this.a=d
this.b=e},
anY:function anY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBp:function aBp(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
dUn:function dUn(d,e){this.a=d
this.b=e},
dUo:function dUo(d,e){this.a=d
this.b=e},
dUf:function dUf(d){this.a=d},
dUg:function dUg(d){this.a=d},
dUp:function dUp(){},
dUi:function dUi(d,e){this.a=d
this.b=e},
dUh:function dUh(d,e){this.a=d
this.b=e},
dUk:function dUk(){},
dUm:function dUm(){},
dUl:function dUl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUj:function dUj(d,e){this.a=d
this.b=e},
ayX:function ayX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aa4:function aa4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aY3:function aY3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c5V:function c5V(d){this.a=d},
a9X:function a9X(d,e,f){this.c=d
this.d=e
this.a=f},
cAF:function cAF(d){this.a=d},
cAG:function cAG(){},
cAH:function cAH(d){this.a=d},
ayY:function ayY(d,e,f){this.c=d
this.d=e
this.a=f},
be7:function be7(){this.c=this.a=this.d=null},
dby:function dby(d,e){this.a=d
this.b=e},
dbA:function dbA(d,e){this.a=d
this.b=e},
dbz:function dbz(d){this.a=d},
hqD(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
hqE(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
hqC(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
h39(d){var w
if(new A.a3(A.a(d.split("\n"),x.s),new C.f61(),x.cc).gJ(0)<3)w=d.length>100&&B.a.t(d,"\n")
else w=!0
return w},
hQm(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.hqC(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
aoL:function aoL(d,e){this.a=d
this.b=e},
Hz:function Hz(d,e){this.a=d
this.b=e},
r_:function r_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f61:function f61(){},
ao0:function ao0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBr:function aBr(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=!1
_.x=g
_.y=h
_.Q=_.z=null
_.as=$
_.bp$=i
_.a6$=j
_.c=_.a=null},
dV1:function dV1(d,e){this.a=d
this.b=e},
dUT:function dUT(d){this.a=d},
dUV:function dUV(){},
dUW:function dUW(d,e){this.a=d
this.b=e},
dUX:function dUX(d){this.a=d},
dUY:function dUY(){},
dUZ:function dUZ(d,e){this.a=d
this.b=e},
dV_:function dV_(d){this.a=d},
dV0:function dV0(d){this.a=d},
dUU:function dUU(d,e){this.a=d
this.b=e},
dV8:function dV8(d,e){this.a=d
this.b=e},
dV5:function dV5(){},
dV6:function dV6(d,e){this.a=d
this.b=e},
dV7:function dV7(d,e){this.a=d
this.b=e},
dV4:function dV4(d,e){this.a=d
this.b=e},
dV3:function dV3(d,e){this.a=d
this.b=e},
dVa:function dVa(d){this.a=d},
dV9:function dV9(d){this.a=d},
dUS:function dUS(d,e){this.a=d
this.b=e},
dUR:function dUR(d,e){this.a=d
this.b=e},
dVb:function dVb(d,e){this.a=d
this.b=e},
dV2:function dV2(d,e){this.a=d
this.b=e},
dUP:function dUP(d){this.a=d},
dUQ:function dUQ(d){this.a=d},
aJs:function aJs(){},
c65(d){var w=0,v=A.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$c65=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=D.PM
w=1
break}w=3
return A.b(A.ay(),$async$c65)
case 3:r=f
q=B.a.i(d.toLowerCase())
t=A.aT(J.q(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.PM
w=1
break}try{q=A.a_(x.f.a(B.R.aF(0,t,null)),x.N,x.z)
p=J.y(q.h(0,"contacts"),!0)
o=J.y(q.h(0,"calendar"),!0)
n=J.y(q.h(0,"calls"),!0)
q=J.y(q.h(0,"allGrantedOnce"),!0)
u=new C.TS(p,o,n,q)
w=1
break}catch(l){s=A.a7(l)
$.al.$1("[helper-perms] load: "+A.t(s))
u=D.PM
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c65,v)},
ao1(d,e){var w=0,v=A.j(x.H),u
var $async$ao1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){w=1
break}w=4
return A.b(A.ay(),$async$ao1)
case 4:w=3
return A.b(g.ap("String","ngmy_helper_permissions_v1_"+B.a.i(d.toLowerCase()),B.R.an(e.ac(),null)),$async$ao1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ao1,v)},
c64(d){var w=0,v=A.j(x.gp),u,t
var $async$c64=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=new C.TS(!0,!0,!0,!0)
w=3
return A.b(C.ao1(d,t),$async$c64)
case 3:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c64,v)},
h8T(d){var w=B.a.i(d.toLowerCase()),v=A.ae("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=A.ae("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=A.ae("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=A.ae("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
h8R(d){var w=A.ae("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
TS:function TS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bAJ(d,e,f,g,h){var w=0,v=A.j(x.H),u,t,s
var $async$bAJ=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return A.b(C.aY_(h),$async$bAJ)
case 3:if(j){w=1
break}w=4
return A.b(C.anU(h),$async$bAJ)
case 4:if(d.e==null){w=1
break}t=A.q7(d,!0)
t.toString
s=A.de()
s.b=A.o1(new C.fzn(g,e,f,s),!1,!1)
t.lr(0,s.b9())
case 1:return A.h(u,v)}})
return A.i($async$bAJ,v)},
fzn:function fzn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fzm:function fzm(d){this.a=d},
Y2:function Y2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayo:function ayo(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cP$=d
_.b1$=e
_.c=_.a=null},
d8S:function d8S(d){this.a=d},
d8T:function d8T(d,e,f){this.a=d
this.b=e
this.c=f},
d8Y:function d8Y(){},
d8X:function d8X(d){this.a=d},
d8U:function d8U(d){this.a=d},
d8V:function d8V(){},
d8W:function d8W(d){this.a=d},
aIl:function aIl(){},
hq5(d){var w=B.a.i(d),v=A.ae("[^A-Z0-9]",!0,!1,!1,!1),u=A.aJ(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
hq4(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.ae("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.ae("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
aox(d){return C.hq2(d)},
hq2(d){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$aox=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.eY("ngmy_local_deposit_qr_v1_"+B.a.i(d),null,!1,B.bE),$async$aox)
case 7:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a7(o)
$.al.$1("[local deposit qr] load: "+A.t(r))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aox,v)},
aYU(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aYU=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.hq5(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.eY("ngmy_local_deposit_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bE),$async$aYU)
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
q=A.a7(m)
$.al.$1("[local deposit qr] code lookup: "+A.t(q))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aYU,v)},
fWv(d){var w,v=B.a.i(d)
if(B.a.a_(v,"NGMYLOCALDEP1|")){w=B.a.i(B.a.aY(v,14))
return w.length===0?null:w}return null},
hq3(d,e,f){var w=B.a.i(f)
if(w.length===0)return!1
return B.d.ba(e,new C.c7T(B.a.i(d.toLowerCase()),w))},
fWw(d,e,f,g,h){var w,v,u=J.a8(g),t=u.h(g,"lockedToEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=B.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.ps(!1,0,y.u)
if(s!==B.a.i(f.toLowerCase()))return new C.ps(!1,0,y.j)
v=B.a.i(h)
if(v.length===0)return new C.ps(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.ps(!1,0,"Verification code does not match this deposit.")
if(!C.hq3(e,d,w))return new C.ps(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
fGn(d,e){var w,v,u="amount",t=J.a8(d),s=t.h(d,"redeemedBy")
if(B.a.i(J.k(s==null?"":s)).length!==0)return D.do8
s=t.h(d,"lockedToEmail")
w=B.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=B.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){A.aN(t.h(d,u))
return new C.Mt(!0,!1,!1,!0)}if(w!==B.a.i(e.toLowerCase())){A.aN(t.h(d,u))
return new C.Mt(!0,!1,!0,!1)}A.aN(t.h(d,u))
return new C.Mt(!0,!1,!1,!1)},
c7Z(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$c7Z=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=C.fWv(d)
if(s==null){u=D.PO
w=1
break}w=3
return A.b(C.aox(s),$async$c7Z)
case 3:t=g
if(t==null){u=D.PO
w=1
break}u=C.fGn(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c7Z,v)},
aYW(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$aYW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aYU(d),$async$aYW)
case 3:s=g
if(s==null||s.length===0){u=D.PO
w=1
break}w=4
return A.b(C.aox(s),$async$aYW)
case 4:t=g
if(t==null){u=D.PO
w=1
break}u=C.fGn(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYW,v)},
c8_(d,e,f,g,h){var w=0,v=A.j(x.D),u,t
var $async$c8_=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aYU(d),$async$c8_)
case 3:t=j
if(t==null||t.length===0){u=new C.ps(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.Uc(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c8_,v)},
Uc(d,e,f,g,h){return C.hq6(d,e,f,g,h)},
hq6(a2,a3,a4,a5,a6){var w=0,v=A.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Uc=A.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.fWv(a4)
if(a0==null){u=new C.ps(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return A.b(C.aox(a0),$async$Uc)
case 3:k=a8
if(k==null){u=new C.ps(!1,0,y.m)
w=1
break}j=C.fGn(k,a5)
if(j.b){u=new C.ps(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.ps(!1,0,y.u)
w=1
break}if(j.c){u=new C.ps(!1,0,y.j)
w=1
break}i=C.fWw(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=A.aN(J.q(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.ps(!1,0,"Invalid deposit amount.")
w=1
break}r=new A.Q(Date.now(),0,!1).a4().ab()
q=B.a.i(a5.toLowerCase())
t=5
w=8
return A.b(A.eY("ngmy_local_deposit_qr_v1_"+B.a.i(a0),null,!1,B.bE),$async$Uc)
case 8:p=a8
if(p==null){u=new C.ps(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.q(p,"redeemedBy")
if(B.a.i(J.k(g==null?"":g)).length!==0){u=new C.ps(!1,0,"This deposit code was already used.")
w=1
break}o=C.fWw(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=B.a.i(a0)
f=x.N
e=x.z
n=A.dU(p,f,e)
J.aF(n,"redeemedBy",q)
J.aF(n,"redeemedAt",r)
w=9
return A.b(A.hx("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,B.cE,null),$async$Uc)
case 9:n=J.q(p,"shortCode")
m=B.a.i(J.k(n==null?"":n))
w=J.ab(m)!==0?10:11
break
case 10:w=12
return A.b(A.hx("ngmy_local_deposit_code_v1_"+B.a.i(m).toUpperCase(),A.E(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,B.cE,null),$async$Uc)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=A.a7(a1)
$.al.$1("[local deposit qr] redeem: "+A.t(l))
u=new C.ps(!1,0,"Could not apply deposit. Check connection and try again.")
w=1
break
w=7
break
case 4:w=2
break
case 7:u=new C.ps(!0,h,null)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Uc,v)},
Mt:function Mt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ps:function ps(d,e,f){this.a=d
this.b=e
this.c=f},
c7T:function c7T(d,e){this.a=d
this.b=e},
c86(d,e){var w
A.fMm(d,e,!1)
A.qp(d.a,d.d,!0,!1)
w=B.a.i("")
if(w.length!==0)A.A_(!0,!1,d.d,w)},
a65(d,e){if(d==null)return!1
return A.bx(d)===e.gcd()&&A.bF(d)===e.gca()&&A.bP(d)===e.gcq()},
hqe(d){var w=A.dk(d)*60+A.h_(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
fWD(d){if(A.dk(d)>=12)return!1
if(A.mg(d)===6||A.mg(d)===7)return!1
return!0},
c8a(d){var w=d.c?d.bP():d
return w.cV(A.bX(A.bx(w),A.bF(w),A.bP(w),12,0,0,0,0))},
fGr(d,e){var w,v,u,t=d.gBw()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a65(d.fx,e)&&d.fy>0.0001)return B.k.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bP()
if(!C.c8a(w))return 0
v=A.bX(e.gcd(),e.gca(),e.gcq(),12,0,0,0,0)
if(!e.cV(v))return t
if(!e.c8(w))return 0
u=B.o.am(v.bx(w).a,1000)
if(u<=0)return t
return B.k.D(t*(B.o.D(B.o.am(e.bx(w).a,1000),0,u)/u),0,t)},
fGq(d,e){var w,v,u,t,s,r,q,p=new A.Q(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a65(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bP():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!B.d.ba(e,new C.c85(s))&&C.c8a(t)){r=d.gBw()
v=r>0
if(v){q=new A.d1(s,d.a,r,B.fy,B.f9,"Clock-in daily earnings (local)",null,null,B.cj,p)
C.c86(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a65(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a65(o,p)&&!C.c8a(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
c85:function c85(d){this.a=d},
hEK(d){var w,v,u=d.k4,t=u==null?null:B.a.i(u)
if(t!=null&&t.length!==0)return t
w=B.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=B.a.i(d.a)
if(B.a.t(v,"@"))return B.d.gK(v.split("@"))
return"Member"},
hVr(d,e,f,g,h,i){return A.hr(d,new C.aoy(f,e,i,g,h,null),!0,null,x.H)},
h_Q(d){var w,v,u=d.c?d.bP():d,t=A.dk(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+A.bF(u)+"/"+A.bP(u)+"/"+A.bx(u)+" \xb7 "+w+":"+B.a.aU(B.o.u(A.h_(u)),2,"0")+" "+v},
h6N(d){var w=d.x
if(w===B.dr)return"Processing"
if(w===B.jW)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
hMQ(d){var w=d.f,v=B.a.i(w==null?"":w),u=v.toLowerCase()
if(B.a.t(u,"clock-in daily earnings")||B.a.t(u,"clock-in earnings"))return"Clock-in completed"
if(B.a.t(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===B.fn)return"Deposit"
if(w===B.eI)return"Withdrawal"
return v.length!==0?v:w.b},
hEp(d){var w=d.d,v=w===B.fn||w===B.nS||w===B.fy||w===B.jX,u=d.x
if(u===B.dr)return w===B.eI?-d.c:0
if(u!==B.cj)return 0
w=d.c
return v?w:-w},
hNo(d,e){var w,v,u,t,s,r,q=A.B(d,x.o)
B.d.b0(q,new C.fju())
w=A.T(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,A.K)(q),++t,v=r){s=q[t]
r=v-C.hEp(s)
if(r<0)r=0
w.n(0,s.a,new A.bln(v,r))}return w},
aoy:function aoy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBN:function aBN(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
e3R:function e3R(d){this.a=d},
e4x:function e4x(d){this.a=d},
e4y:function e4y(d){this.a=d},
e4z:function e4z(d){this.a=d},
e4f:function e4f(d,e){this.a=d
this.b=e},
e4g:function e4g(){},
e4h:function e4h(d){this.a=d},
e4i:function e4i(){},
e4j:function e4j(d){this.a=d},
e4k:function e4k(d,e,f){this.a=d
this.b=e
this.c=f},
e4l:function e4l(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4a:function e4a(d,e){this.a=d
this.b=e},
e3S:function e3S(d,e,f){this.a=d
this.b=e
this.c=f},
e4b:function e4b(){},
e4c:function e4c(){},
e4d:function e4d(d){this.a=d},
e4e:function e4e(){},
e3W:function e3W(d,e){this.a=d
this.b=e},
e3X:function e3X(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e44:function e44(){},
e41:function e41(d){this.a=d},
e42:function e42(d,e){this.a=d
this.b=e},
e43:function e43(d,e){this.a=d
this.b=e},
e45:function e45(d){this.a=d},
e46:function e46(d,e,f){this.a=d
this.b=e
this.c=f},
e47:function e47(d){this.a=d},
e49:function e49(d){this.a=d},
e48:function e48(d){this.a=d},
e3Y:function e3Y(d){this.a=d},
e3Z:function e3Z(d,e,f){this.a=d
this.b=e
this.c=f},
e4p:function e4p(){},
e4q:function e4q(){},
e4u:function e4u(d){this.a=d},
e4n:function e4n(d){this.a=d},
e4v:function e4v(d){this.a=d},
e4m:function e4m(d){this.a=d},
e4w:function e4w(d){this.a=d},
e4r:function e4r(d){this.a=d},
e4s:function e4s(d){this.a=d},
e4t:function e4t(d){this.a=d},
e4o:function e4o(d){this.a=d},
e3V:function e3V(d){this.a=d},
e3U:function e3U(d){this.a=d},
e3T:function e3T(d){this.a=d},
e40:function e40(d,e){this.a=d
this.b=e},
e4_:function e4_(d,e){this.a=d
this.b=e},
aza:function aza(d,e,f,g,h,i,j,k,l,m){var _=this
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
ddm:function ddm(){},
ddn:function ddn(){},
ddo:function ddo(d,e,f){this.a=d
this.b=e
this.c=f},
ddl:function ddl(d){this.a=d},
ddp:function ddp(d,e){this.a=d
this.b=e},
ddk:function ddk(d){this.a=d},
az9:function az9(d,e,f,g,h,i,j,k,l,m){var _=this
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
beQ:function beQ(d,e){var _=this
_.f=_.e=_.d=$
_.cP$=d
_.b1$=e
_.c=_.a=null},
ddf:function ddf(d){this.a=d},
ddg:function ddg(d){this.a=d},
ddh:function ddh(d){this.a=d},
ddi:function ddi(){},
ddj:function ddj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dde:function dde(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ddd:function ddd(d){this.a=d},
b8C:function b8C(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
b8B:function b8B(d,e,f){this.b=d
this.d=e
this.a=f},
b8A:function b8A(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
azb:function azb(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
azc:function azc(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
ddG:function ddG(){},
ddH:function ddH(){},
ddI:function ddI(){},
dds:function dds(d){this.a=d},
ddr:function ddr(d,e){this.a=d
this.b=e},
ddq:function ddq(d,e){this.a=d
this.b=e},
ddD:function ddD(d,e){this.a=d
this.b=e},
ddF:function ddF(d,e){this.a=d
this.b=e},
ddE:function ddE(d,e){this.a=d
this.b=e},
ddC:function ddC(){},
ddB:function ddB(d){this.a=d},
ddA:function ddA(){},
ddv:function ddv(d){this.a=d},
ddw:function ddw(){},
ddx:function ddx(d){this.a=d},
ddy:function ddy(d){this.a=d},
ddu:function ddu(){},
ddz:function ddz(d){this.a=d},
ddt:function ddt(d){this.a=d},
b82:function b82(d){this.a=d},
fju:function fju(){},
bso:function bso(d,e){this.b=d
this.a=e},
aIB:function aIB(){},
buk:function buk(){},
hJq(d,e,f,g,h,i,j,k){var w,v=B.a.i(j.toLowerCase())
B.d.bm(d,new C.fdO(v,g))
w=A.T(x.N,x.z)
w.n(0,"id",B.o.u(1000*Date.now()))
w.n(0,"fromEmail",B.a.i(e.toLowerCase()))
w.n(0,"fromName",f)
w.n(0,"toEmail",v)
if(k!=null&&B.a.i(k).length!==0)w.n(0,"toName",B.a.i(k))
w.n(0,"gameId",g)
w.n(0,"gameTitle",h)
w.n(0,"status","pending")
w.n(0,"createdAt",new A.Q(Date.now(),0,!1).ab())
w.n(0,"matchesTotal",i)
w.n(0,"matchesPlayed",0)
w.n(0,"seriesStatus","active")
B.d.L(d,w)},
aME(d){var w,v=J.a8(d),u=A.aN(v.h(d,"matchesTotal")),t=u==null?null:B.k.N(u)
if(t==null)t=1
v=A.aN(v.h(d,"matchesPlayed"))
w=v==null?null:B.k.N(v)
return B.o.D(t-(w==null?0:w),0,t)},
hUc(d,e){var w=A.U(e).k("a3<1>")
w=A.B(new A.a3(e,new C.ftS(B.a.i(d.toLowerCase())),w),w.k("G.E"))
return w},
afq(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
if(C.aME(u)<=0){t=J.cD(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
hM4(d,e){var w,v,u,t=J.a8(d),s=t.h(d,"status")
if(!J.y(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.y(s==null?"":s,"complete"))return!1
if(C.aME(d)<=0)return!1
w=B.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=B.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=B.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aME(d)>0},
hM3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a8(d),h=A.aN(i.h(d,"matchesTotal")),g=h==null?null:B.k.N(h)
if(g==null)g=1
h=A.aN(i.h(d,"matchesPlayed"))
w=h==null?null:B.k.N(h)
v=(w==null?0:w)+1
u=B.a.i(e.toLowerCase())
t=i.h(d,"sessionState")
h=x.f
if(!h.b(t))return"Game "+v+" of "+g+" \u2014 tap Join room when you are ready"
s=x.N
r=x.z
q=A.a_(t,s,r)
p=q.h(0,"inGame")
o=h.b(p)?A.a_(p,s,r):A.T(s,r)
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
hJp(d,e){var w
C.afq(e)
w=A.U(e).k("a3<1>")
w=A.B(new A.a3(e,new C.fdN(B.a.i(d.toLowerCase())),w),w.k("G.E"))
return w},
tu(d,e){var w,v,u
for(w=J.aV(d);w.C();){v=w.gT(w)
u=J.q(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
hG0(d,e,f){var w,v,u,t="fromName",s=J.a8(f),r=s.h(f,"fromEmail"),q=B.a.i(J.k(r==null?"":r).toLowerCase())
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
fM4(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase()),r=J.a8(d),q=r.h(d,"fromEmail"),p=B.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=B.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.hG0(x.f.b(u)?A.a_(u,r,q):A.T(r,q),v,d)
if((t.length===0||B.a.t(t,"@"))&&f!=null){t=J.q(f,v)
if(t==null)t=""}if(t.length===0||B.a.t(t,"@"))return"Opponent"
return t},
bzx(){var w=0,v=A.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bzx=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$bzx)
case 7:r=e
q=A.aT(J.q(r.a,"all_users"))
if(q==null||q.length===0){k=x.N
u=A.T(k,k)
w=1
break}p=B.R.aF(0,q,null)
if(!x.j.b(p)){k=x.N
u=A.T(k,k)
w=1
break}k=x.N
o=A.T(k,k)
for(k=J.aV(p),j=x.f;k.C();){n=k.gT(k)
if(!j.b(n))continue
i=J.q(n,"email")
m=B.a.i(J.k(i==null?"":i).toLowerCase())
i=J.q(n,"username")
l=B.a.i(J.k(i==null?"":i))
if(J.ab(m)!==0&&J.ab(l)!==0)J.aF(o,m,l)}u=o
w=1
break
t=2
w=6
break
case 4:t=3
g=s.pop()
k=x.N
u=A.T(k,k)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bzx,v)},
byC(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$byC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return A.b(C.bzx(),$async$byC)
case 3:u=t.fM4(s,r,g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byC,v)},
JL(d,e,f){var w=0,v=A.j(x.h),u,t,s,r,q,p
var $async$JL=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(d)
p=$.h4n.h(0,q)
if(p!=null){t=new A.Q(Date.now(),0,!1).bx(p)
t=t.a>A.dA(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.h4n.n(0,q,new A.Q(Date.now(),0,!1))
w=5
return A.b(A.Pr(B.c6,q),$async$JL)
case 5:case 4:s=$.h4m.h(0,q)
if(s==null){u=C.tu(e,q)
w=1
break}r=C.tu(A.byI(e,A.a([s],x._)),q)
if(r!=null)A.fOn(e,r)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$JL,v)},
hUo(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new A.Q(Date.now(),0,!1).ab())
return}}},
hCM(d,e){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
p=q.h(d,"fromEmail")
w=B.a.i(J.k(p==null?"":p).toLowerCase())
p=q.h(d,"toEmail")
v=B.a.i(J.k(p==null?"":p).toLowerCase())
q=q.h(d,"fromName")
u=J.k(q==null?w:q)
switch(o){case"tic_tac_go":q=x.N
return A.E(["ttt",A.c0(9,"",!1,q),"turnEmail",w,"playerXEmail",w,"playerXName",u,"playerOEmail",v,"playerOName",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],q,x.z)
case"connect_four_pro":t=J.e1(6,x.L)
for(q=x.S,s=0;s<6;++s)t[s]=A.c0(7,0,!1,q)
return A.E(["c4",t,"c4Turn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
case"checkers_deluxe":t=J.e1(8,x.L)
for(q=x.S,r=0;r<8;++r)t[r]=A.io(8,new C.f3z(r),!0,q)
return A.E(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return A.E(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
hJo(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new A.Q(Date.now(),0,!1).ab())
r=C.hCM(u,f)
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
m=A.T(x.N,x.z)
if(w)m.n(0,o,!1)
if(s)m.n(0,n,!1)
r.n(0,"inGame",m)
t.n(u,"sessionState",r)
t.n(u,"sessionUpdatedAt",new A.Q(Date.now(),0,!1).ab())
return}}},
hUm(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)!==e)continue
w=A.aN(t.h(u,i))
w=w==null?null:B.k.N(w)
r=(w==null?0:w)+1
t.n(u,i,r)
w=A.aN(t.h(u,"matchesTotal"))
q=w==null?null:B.k.N(w)
if(r>=(q==null?1:q)){t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}else{p=t.h(u,h)
if(x.f.b(p)){w=x.N
s=x.z
o=A.a_(p,w,s)
o.n(0,"gameOver",!1)
o.W(0,"startAt")
n=o.h(0,"player1Email")
if(n==null)n=o.h(0,"playerXEmail")
m=B.a.i(J.k(n==null?"":n).toLowerCase())
n=o.h(0,"player2Email")
if(n==null)n=o.h(0,"playerOEmail")
l=B.a.i(J.k(n==null?"":n).toLowerCase())
k=A.T(w,s)
if(m.length!==0)k.n(0,m,!1)
if(l.length!==0)k.n(0,l,!1)
o.n(0,"inGame",k)
w=t.h(u,"gameId")
j=J.k(w==null?"":w)
if(j==="memory"){o.n(0,"memoryMatched",A.a([],x.t))
o.W(0,"memorySeed")}else if(j==="pattern")o.W(0,"patternSeed")
t.n(u,h,o)}}t.n(u,"sessionUpdatedAt",new A.Q(Date.now(),0,!1).ab())
return}},
fOm(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",A.a_(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new A.Q(Date.now(),0,!1).ab())
return}}},
fsG(d){var w=0,v=A.j(x.gw),u,t,s,r,q
var $async$fsG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.afq(d)
t=$.fLp
if(t==null)s=$.fLp=A.Pr(B.c6,null).f4(new C.fsH())
else s=t
w=3
return A.b(s,$async$fsG)
case 3:r=f
if(r==null){u=A.bl(new A.J(d,new C.fsI(),A.U(d).k("J<1,@>")),!0,x.P)
w=1
break}q=A.byI(d,r)
B.d.a7(d)
B.d.v(d,q)
u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fsG,v)},
afr(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$afr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.afq(d)
t=A.U(d).k("J<1,a1<n,@>>")
t=A.B(new A.J(d,new C.fqC(),t),t.k("ai.E"))
w=3
return A.b(A.Pr(t,null),$async$afr)
case 3:s=f
if(s==null){u=!1
w=1
break}r=A.byI(d,s)
B.d.a7(d)
B.d.v(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afr,v)},
aNx(d,e,f){var w=0,v=A.j(x.y),u,t,s,r
var $async$aNx=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:C.fOm(d,e,f)
t=C.tu(d,e)
if(t==null){u=!1
w=1
break}w=3
return A.b(A.Pr(A.a([A.a_(t,x.N,x.z)],x._),e),$async$aNx)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.tu(s,e)
if(r!=null)A.fOn(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aNx,v)},
hR4(d,e,f){var w
C.fOm(d,e,f)
w=$.fLd.h(0,e)
if(w!=null)w.a8(0)
$.fLd.n(0,e,A.cM(B.lu,new C.fqD(e,d)))},
fG8(d,e){return new C.aXH(!0,d,"NGMY",B.a.i(e.toLowerCase()),null,!0)},
fdO:function fdO(d,e){this.a=d
this.b=e},
ftS:function ftS(d){this.a=d},
fdN:function fdN(d){this.a=d},
f3z:function f3z(d){this.a=d},
fsH:function fsH(){},
fsI:function fsI(){},
fqC:function fqC(){},
fqD:function fqD(d,e){this.a=d
this.b=e},
aXH:function aXH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
hUQ(d,e,f){return A.c2(B.K,null,new C.fuP(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
fuP:function fuP(d,e){this.a=d
this.b=e},
YR:function YR(d,e,f){this.c=d
this.d=e
this.a=f},
aBA:function aBA(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
dZ6:function dZ6(d){this.a=d},
dZ9:function dZ9(d){this.a=d},
dZa:function dZa(d){this.a=d},
dZ8:function dZ8(d){this.a=d},
dZb:function dZb(d){this.a=d},
dZc:function dZc(d,e){this.a=d
this.b=e},
dZ7:function dZ7(d,e){this.a=d
this.b=e},
hPB(d){var w,v,u,t=B.a.i(d)
if(t.length===0)return B.i7
w=t.toLowerCase()
v=A.ae("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return B.i7
v=Date.now()
u=C.hFl(w,new A.Q(v,0,!1))
v=x.N
return A.a([new A.kf("calendar",A.E(["title",C.hFk(t,w),"start",u.ab(),"end",u.bM(36e8).ab(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
hFk(d,e){var w,v,u,t,s,r=A.ae("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cA(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return B.a.i(w==null?"":w)}u=A.ae("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cA(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.h58(B.a.i(t))}s=A.ae("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cA(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.h58(B.a.i(t))}if(B.a.t(e,"meeting"))return"Meeting"
if(B.a.t(e,"appointment"))return"Appointment"
return"NGMY Event"},
h58(d){var w
if(d.length===0)return d
w=B.a.fo(d,A.ae("\\s+",!0,!1,!1,!1))
return new A.J(w,new C.fcZ(),A.U(w).k("J<1,n>")).aH(0," ")},
hFl(d,e){var w,v,u,t,s,r,q,p,o=A.bX(A.bx(e),A.bF(e),A.bP(e),0,0,0,0,0)
if(B.a.t(d,"tomorrow"))o=o.bM(864e8)
else if(!B.a.t(d,"today"))for(w=D.aAa.gdL(D.aAa),w=w.gai(w);w.C();){v=w.gT(w)
u=v.a
if(A.dr(d,u,0)){t=C.hEo(o,v.b)
o=t
break}}s=A.ae("\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cA(d)
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
q=0}return A.bX(A.bx(o),A.bF(o),A.bP(o),r,q,0,0,0)},
hEo(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(A.mg(w)===e){u=!0
if(v<=0){t=d.bM(36e8)
s=w.a
if(s>=t.gbn())u=s===t.gbn()&&w.b<t.gct()}}else u=!1
if(u)return w
w=w.bM(r)}return d.bM(r)},
fcZ:function fcZ(){},
hPC(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=B.a.i(d)
if(j.length===0)return B.i7
w=j.toLowerCase()
if(B.a.t(w,k))v=k
else v=B.a.t(w,"imessage")||B.a.t(w,"i message")?"sms":l
u=A.ae("(?:saying|say|message|text|tell(?:ing)?)\\s+(.+)$",!1,!1,!1,!1).cA(j)
if(u!=null){t=u.b[1]
s=t==null?l:B.a.i(t)
if(s==null)s=""
t=A.ae("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
s=B.a.i(A.aJ(s,t,""))
t=s.length
r=t>=2&&t<500?s:l}else r=l
q=C.hBC(w,j)
if(q==null||q.length===0)return B.i7
t=A.ae("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=A.ae("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return A.a([new A.kf("call",A.E(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=A.E(["name",q],t,t)
if(r!=null)m.n(0,"body",r)
return A.a([new A.kf(n,m)],x.Z)}if(p){t=x.N
return A.a([new A.kf("call",A.E(["name",q],t,t))],x.Z)}return B.i7},
hBC(d,e){var w,v,u,t,s,r,q=[A.ae("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),A.ae("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),A.ae("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
for(w=0;w<3;++w){v=q[w].cA(d)
if(v==null)continue
u=v.b[1]
t=u==null?null:B.a.i(u)
if(t==null)t=""
u=A.ae("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
t=B.a.i(A.aJ(t,u,""))
u=A.ae("\\s+saying\\s+.+$",!1,!1,!1,!1)
t=B.a.i(A.aJ(t,u,""))
u=t.length
s=!1
if(u>=2)if(u<=50){u=A.ae("^\\d+$",!0,!1,!1,!1)
s=A.ae("\\s",!0,!1,!1,!1)
s=A.aJ(t,s,"")
u=!u.b.test(s)}else u=s
else u=s
if(u)return C.hIJ(t)}r=A.ae("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cA(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return B.a.i(u==null?"":u)}return null},
hIJ(d){var w=B.a.fo(d,A.ae("\\s+",!0,!1,!1,!1))
return new A.J(w,new C.fcY(),A.U(w).k("J<1,n>")).aH(0," ")},
fcY:function fcY(){},
h9_(d){var w=new A.J(d,new C.fsY(),A.U(d).k("J<1,a1<n,@>>")).bX(0,new C.fsZ())
w=A.B(w,w.$ti.k("G.E"))
return w},
fsY:function fsY(){},
fsZ:function fsZ(){},
hPF(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return B.i7
w=B.a.i(d)
if(w.length===0)return B.i7
v=w.toLowerCase()
if(!(B.a.t(v,"send email")||B.a.t(v,"send an email")||B.a.t(v,"send a message to")||B.a.t(v,"email ")||B.a.t(v,"write an email")||B.a.t(v,"write email")))return B.i7
u=A.ae("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cA(w)
if(u==null)return B.i7
t=u.b[0]
t.toString
s=B.a.i(t)
r=A.ae("(?:subject|title)\\s*[:\\-]\\s*(.+)$",!1,!1,!1,!1).cA(w)
if(r!=null){t=r.b[1]
t.toString
q=B.a.i(t)}else q="Message from NGMY"
p=A.ae("(?:saying|that says|with message|message:|body:|write:|text:)\\s*(.+)$",!1,!1,!1,!1).cA(w)
if(p!=null){t=p.b[1]
t.toString
o=B.a.i(t)}else o=""
t=x.N
t=A.T(t,t)
t.n(0,"to",s)
t.n(0,"subject",q)
if(o.length!==0)t.n(0,"body",o)
return A.a([new A.kf("send_email",t)],x.Z)},
hOO(d,e){var w
if(e)return d
w=J.dG(d,new C.fmS())
w=A.B(w,w.$ti.k("G.E"))
return w},
fmS:function fmS(){},
hR1(d){switch(d){case"blackjack_vegas":return D.ds8
case"roulette_euro":return D.drT
case"slots_jackpot":return D.ds_
case"poker_texas":return D.ds2
case"chess_royale":return D.drU
case"connect_four_pro":return D.drV
case"domino_block":return D.drX
case"plinko_prizes":return D.ds4
case"spin_wheel":return D.ds1
case"baccarat_punto":return D.drW
case"craps_table":return D.ds3
case"casino_war":return D.drY
case"bingo_live":return D.ds0
case"solitaire_klondike":return D.ds7
case"backgammon_pro":return D.drS
case"billiards_snooker":return D.ds5
case"profit_solve":return D.ds6
default:return D.drZ}},
fqt(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=A.m(8)
v=A.I(B.aL,B.r,1.5)
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.ei,6)],x.V)
return A.p(p,A.au(A.W(B.m6,B.c.j(0.5),p,p,p,23.400000000000002),p,p,p),B.f,p,p,new A.o(p,p,v,w,u,D.bLr,B.n),p,74,p,p,p,p,p,52)}t=B.o.D(d,1,13)
s=t===1||t>=10||B.o.G(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][B.o.G(t,4)]
q=s?B.bM:B.M
w=A.m(8)
v=A.I(B.aK,B.r,1)
u=A.a([new A.ac(0,B.G,B.w.j(0.28),B.ei,6)],x.V)
return A.p(p,A.v(A.a([new A.C(D.bo2,A.d(D.cic[t-1]+"\n"+r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,B.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),B.b6,A.au(A.d(r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),B.b6],x.p),B.F,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(B.hQ,p,v,w,u,p,B.n),p,74,p,p,p,p,p,52)},
hS5(d,e){var w,v=null,u=A.m(18),t=A.I(B.aL,B.r,3),s=A.a([new A.ac(0,B.G,B.aD.j(0.5),B.J,20)],x.V),r=A.U(e).k("J<1,hf>")
r=A.B(new A.J(e,new C.fsp(),r),r.k("ai.E"))
w=x.p
return A.v(A.a([A.p(v,A.v(A.a([D.eZo,B.aa,A.A(r,B.m,v,B.b7,B.j,0,v,v)],w),B.m,v,B.e,B.j,0,B.p),B.f,v,v,new A.o(v,v,t,u,s,D.bLN,B.n),v,v,v,v,I.aev,v,v,v),B.ay,A.dp(B.ak9,D.eZZ,d,A.bk(B.aL,v,v,v,B.dt,v,Af.WE,v,v,v,v,v))],w),B.m,v,B.e,B.j,0,B.p)},
oI:function oI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bno:function bno(d,e){this.b=d
this.a=e},
fsp:function fsp(){},
hqP(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e1(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=A.c0(8,0,!1,w)
u=A.c0(9,"",!1,p)
t=x.t
s=A.a([],t)
r=A.a([],t)
t=A.a([0,0,0],t)
q=J.e1(6,o)
for(v=0;v<6;++v)q[v]=A.c0(7,0,!1,w)
return new C.aoU(A.T(p,x.z),n,u,s,r,t,q,new A.ap(B.as,$.av()))},
hK4(d,e,f,g,h){var w=new C.fes(f,h)
switch(d){case"checkers_deluxe":return C.hAj(h,g,e,w)
case"tic_tac_go":return C.hIU(h,g,e,w)
case"blackjack_vegas":return C.hzF(h,g,e,new C.fem(w))
case"roulette_euro":return C.hHe(h,g,e,new C.fen(w))
case"slots_jackpot":return C.hI2(h,g,e,new C.feo(w))
case"billiards_snooker":return C.hG2(h,g,e,new C.fep(w))
case"connect_four_pro":return C.hAK(h,g,e,w)
case"profit_solve":return C.hG5(h,g,e,new C.feq(w))
default:return C.hAg(d,h,g,e,new C.fer(w))}},
hAj(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vz,B.L,w,w),u=A.m(12),t=A.I(D.UE,B.r,8),s=A.a([new A.ac(0,B.G,B.w.j(0.4),B.J,16)],x.V)
return A.v(A.a([new A.C(B.ff,v,w),A.D(A.au(new A.fE(1,A.p(w,A.bu(A.m(6),A.ia(!0,w,w,B.z,D.eAm,new C.f0U(d,e,f,g),64,w,B.dO,B.aj,!1),B.ao),B.f,w,w,new A.o(w,w,t,u,s,w,B.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hIU(d,e,f,g){var w=null
return A.v(A.a([new A.C(B.ff,A.d(d.c,w,w,w,w,w,w,D.vz,B.L,w,w),w),A.D(A.au(new A.fE(1,A.cl(new C.fd8(d,e,f,g)),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hzF(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.vz,B.L,v,v),t=x.p,s=A.a([],t),r=d.CW,q=d.ch
if(r)B.d.v(s,new A.J(q,new C.f0l(),A.U(q).k("J<1,r>")))
else B.d.v(s,A.a([C.fqt(q[0],!1),B.bp,C.fqt(0,!0)],t))
s=A.A(s,B.m,v,B.b7,B.j,0,v,v)
r=A.d("Total: "+d.a1v(d.ay),v,v,v,v,v,v,D.eUN,v,v,v)
q=d.ay
w=A.U(q).k("J<1,r>")
q=A.B(new A.J(q,new C.f0m(),w),w.k("ai.E"))
q=A.c6(B.fI,q,B.bx,6,6)
return A.v(A.a([new A.C(B.ff,u,v),D.f4N,B.aq,s,B.ay,D.fbF,r,B.aq,q,B.b6,A.A(A.a([A.D(A.bM(D.f_o,d.CW?v:new C.f0n(d,e,f,g),v),1),B.ab,A.D(A.bM(D.fdO,new C.f0o(d,e,f,g),v),1)],t),B.m,v,B.e,B.j,0,v,v)],t),B.m,v,B.e,B.j,0,B.p)},
hHe(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vz,B.L,w,w),u=d.cx,t=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cv,16)],x.V)
t=A.a([new A.C(B.ff,v,w),A.p(w,A.b3(w,w,w,new C.bno(u,w),B.at),B.f,w,w,new A.o(w,w,w,w,t,w,B.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new A.C(B.kB,A.d("Result: "+A.t(v),w,w,w,w,w,w,D.eJd,w,w,w),w))
t.push(B.aa)
t.push(A.c6(B.fI,A.io(6,new C.fai(d,e,f,g),!0,x.l),B.bx,6,6))
return A.v(t,B.m,w,B.e,B.j,0,B.p)},
hI2(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vz,B.L,w,w),u=d.db,t=A.U(u).k("J<1,n>")
u=A.B(new A.J(u,new C.fcf(),t),t.k("ai.E"))
return A.v(A.a([new A.C(B.ff,v,w),C.hS5(new C.fcg(d,e,f,g),u)],x.p),B.m,w,B.e,B.j,0,B.p)},
hG2(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vz,B.L,w,w),u=A.m(20),t=A.I(B.fj,B.r,12),s=x.V,r=A.a([new A.ac(0,B.G,B.w.j(0.45),B.dp,18)],s),q=x.p
return A.v(A.a([new A.C(B.ff,v,w),A.D(A.p(w,new A.am(B.X,w,B.a9,B.q,A.a([A.an(w,A.p(w,w,B.f,w,w,D.aUc,w,18,w,w,w,w,w,18),w,w,24,w,24,w),A.an(28,A.p(w,w,B.f,w,w,B.a8j,w,14,w,w,w,w,w,14),w,w,w,32,w,w),A.au(A.ey(B.A,d.dx,A.p(w,w,B.f,w,w,new A.o(B.aL,w,w,A.m(2),A.a([new A.ac(0,B.G,B.w.j(0.3),B.J,4)],s),w,B.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),B.f,w,w,new A.o(w,w,t,u,r,D.e0b,B.n),w,w,w,B.eX,w,w,w,w),1),A.kP(B.bl,w,w,1,0,new C.f92(d,f),d.dy),A.bM(D.f3W,new C.f93(d,e,g,f),w)],q),B.m,w,B.e,B.j,0,B.p)},
hAK(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.vz,B.L,v,v),t=x.l,s=J.e1(7,t)
for(w=0;w<7;++w)s[w]=new A.bH(1,B.bo,A.aH(v,A.v(A.io(6,new C.f1l(d,w),!0,t),B.m,v,B.mg,B.j,0,B.p),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f1m(d,w,e,f,g),v,v,v,v,v,v,!1,B.ac),v)
return A.v(A.a([new A.C(B.ff,u,v),A.D(A.au(new A.fE(1.1666666666666667,A.A(s,B.dG,v,B.e,B.j,0,v,v),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
hG5(d,e,f,g){var w=null
return A.v(A.a([new A.C(B.ff,A.d(d.c,w,w,w,w,w,w,D.vz,B.L,w,w),w),A.d(""+d.a+"/"+d.b,w,w,w,w,w,w,B.kl,w,w,w),A.d(d.fy,w,w,w,w,w,w,D.aMr,B.L,w,w),A.aL(w,B.U,!1,w,!0,B.q,w,A.aM(),d.id,w,w,w,w,w,2,D.bIb,B.z,!0,w,!0,w,!1,w,B.ag,w,w,w,w,w,B.dK,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.f9f(d,e,g,f),w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,B.dj,!0,B.a5,w,B.am,w,w,w,w),A.bM(D.f2B,new C.f9g(d,e,g,f),w)],x.p),B.m,w,B.e,B.j,0,B.p)},
hAg(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gjC(),k=e.d
k=k==null?n:k.c
w=C.hR1(d)
v=D.aA_.h(0,d)
if(v==null)v=d
m=A.d(m,n,n,n,n,n,n,B.n4,B.L,n,n)
u=A.m(22)
t=w.a
s=w.b
r=A.I(s.j(0.5),B.r,2)
q=A.a([new A.ac(0,B.G,w.c.j(0.35),B.eQ,24)],x.V)
p=A.d(w.e,n,n,n,n,n,n,W.RG,n,n,n)
o=A.d(v,n,n,n,n,n,n,B.oF,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+A.t(k)+" at the table"
k=x.p
q=A.D(A.au(A.p(n,A.v(A.a([p,B.S,o,B.P,A.d(l,n,n,n,n,n,n,A.l(n,n,B.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),B.L,n,n),B.d4,A.W(w.f,s.j(0.85),n,n,n,48)],k),B.m,n,B.b7,B.j,0,B.p),B.f,n,n,new A.o(n,n,r,u,q,new A.a5(B.b1,B.b3,B.x,t,n,n),B.n),n,n,n,B.eX,B.a8,n,n,1/0),n,n,n),1)
return A.v(A.a([m,B.aa,q,B.P,new A.a4(1/0,n,A.bM(D.fd_,new C.f0O(f,e,g,h),A.bk(s,n,n,n,B.d.gK(t).j4()>0.4?B.w:B.c,n,B.ce,n,n,n,n,n)),n)],k),B.m,n,B.e,B.j,0,B.p)},
DE:function DE(d,e){this.a=d
this.b=e},
aoU:function aoU(d,e,f,g,h,i,j,k){var _=this
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
c9E:function c9E(){},
c9F:function c9F(){},
c9D:function c9D(){},
c9G:function c9G(){},
c9C:function c9C(){},
c9I:function c9I(){},
c9J:function c9J(){},
c9B:function c9B(d){this.a=d},
c9H:function c9H(){},
c9A:function c9A(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fes:function fes(d,e){this.a=d
this.b=e},
fem:function fem(d){this.a=d},
fen:function fen(d){this.a=d},
feo:function feo(d){this.a=d},
fep:function fep(d){this.a=d},
feq:function feq(d){this.a=d},
fer:function fer(d){this.a=d},
f0U:function f0U(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f0T:function f0T(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fd8:function fd8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fd7:function fd7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fd6:function fd6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f0l:function f0l(){},
f0m:function f0m(){},
f0n:function f0n(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f0o:function f0o(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fai:function fai(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fah:function fah(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fcf:function fcf(){},
fcg:function fcg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f92:function f92(d,e){this.a=d
this.b=e},
f93:function f93(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f1m:function f1m(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f1l:function f1l(d,e){this.a=d
this.b=e},
f9f:function f9f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9g:function f9g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f0O:function f0O(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hMS(d){var w,v=A.U(d).k("a3<1>")
v=A.oS(new A.a3(d,new C.fiu(),v),120,v.k("G.E"))
w=A.cC(v,new C.fiv(),A.a2(v).k("G.E"),x.N).aH(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fiu:function fiu(){},
fiv:function fiv(){},
afC(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
apO:function apO(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aCl:function aCl(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
etV:function etV(){},
aK8:function aK8(){},
hoN(){var w=$.Hn
if(w<=0)return;--w
$.Hn=w
if(w===0){w=$.fVW
if(w!=null)w.$0()}},
c59(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
any(d){var w=0,v=A.j(x.H),u,t
var $async$any=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.fG3.L(0,t)
w=4
return A.b(A.ay(),$async$any)
case 4:w=3
return A.b(f.ap("Bool","ngmy_game_free_play_used_"+B.a.i(t.toLowerCase()),!0),$async$any)
case 3:case 1:return A.h(u,v)}})
return A.i($async$any,v)},
anx(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$anx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(C.c59(d)){u=!0
w=1
break}t=B.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.fG3.t(0,t)){u=!1
w=1
break}w=3
return A.b(A.ay(),$async$anx)
case 3:s=f
r=B.a.i(t.toLowerCase())
r=A.k7(J.q(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anx,v)},
TP(){var w=0,v=A.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$TP=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$TP)
case 7:r=e
q=A.aT(J.q(r.a,"ngmy_helper_ai_usage_v1"))
if(q==null||B.a.i(q).length===0){u=A.T(x.N,x.z)
w=1
break}p=B.R.aF(0,q,null)
if(x.f.b(p)){o=A.a_(p,x.N,x.z)
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
case 6:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$TP,v)},
aXZ(d){return C.hp_(d)},
hp_(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aXZ=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.ay(),$async$aXZ)
case 6:s=f
w=7
return A.b(s.ap("String","ngmy_helper_ai_usage_v1",B.R.an(d,null)),$async$aXZ)
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
return A.i($async$aXZ,v)},
aXX(d,e){var w,v,u,t,s=J.q(d,B.a.i(e.toLowerCase()))
if(!x.f.b(s))return new A.ace(0,new A.Q(Date.now(),0,!1))
w=J.a8(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=A.bi(u==null?"":u)
if(t==null)t=new A.Q(Date.now(),0,!1)
return new A.ace(typeof v=="number"?B.o.D(B.k.N(v),0,999999):0,t)},
aXY(d,e){if(B.o.am(e.bx(d.b).a,36e8)>=24)return new A.ace(0,e)
return d},
c5G(d,e){var w=0,v=A.j(x.S),u,t,s
var $async$c5G=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return A.b(C.TP(),$async$c5G)
case 3:t=g
s=Date.now()
u=B.o.D(e-C.aXY(C.aXX(t,d),new A.Q(s,0,!1)).a,0,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c5G,v)},
c5H(d,e){var w=0,v=A.j(x.cJ),u,t,s,r
var $async$c5H=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return A.b(C.TP(),$async$c5H)
case 3:t=g
s=Date.now()
r=C.aXY(C.aXX(t,d),new A.Q(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bM(864e8)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c5H,v)},
hp0(d){var w,v,u,t=d.a,s=B.o.am(t,1e6)
if(s<=0)return"0s"
w=B.o.am(t,36e8)
v=B.o.am(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+B.a.aU(B.o.u(v),2,"0")+"m "+B.a.aU(B.o.u(u),2,"0")+"s"
if(v>0)return""+v+"m "+B.a.aU(B.o.u(u),2,"0")+"s"
return""+u+"s"},
aY_(d){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aY_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return A.b(C.TP(),$async$aY_)
case 3:t=p.aXY(o.aXX(f,d),new A.Q(Date.now(),0,!1))
w=4
return A.b(A.ay(),$async$aY_)
case 4:s=f
r=B.a.i(d.toLowerCase())
q=t.b.a4().ab()
u=A.k7(J.q(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aY_,v)},
anU(d){var w=0,v=A.j(x.H),u,t,s,r
var $async$anU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return A.b(C.TP(),$async$anU)
case 3:t=s.aXY(r.aXX(f,d),new A.Q(Date.now(),0,!1))
w=5
return A.b(A.ay(),$async$anU)
case 5:w=4
return A.b(f.ap("Bool","ngmy_helper_3left_"+B.a.i(d.toLowerCase())+"_"+t.b.a4().ab(),!0),$async$anU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$anU,v)},
anV(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$anV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=B.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return A.b(C.TP(),$async$anV)
case 3:s=g
r=Date.now()
q=C.aXY(C.aXX(s,d),new A.Q(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aF(s,t,A.E(["count",r+1,"windowStart",q.b.a4().ab()],x.N,x.K))
w=4
return A.b(C.aXZ(s),$async$anV)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anV,v)},
afe(d,e,a0){var w=0,v=A.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$afe=A.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new A.fa("")
if(!d.d){p=!0
if(!C.h8S(a0))if(!C.h8R(a0)){p=A.ae("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.h8S(a0)?3:4
break
case 3:o=C.hQH(a0)
w=o!=null?5:6
break
case 5:w=7
return A.b(C.bZd(e,o),$async$afe)
case 7:n=a2
p=J.a8(n)
if(p.gci(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.fUo(o)+":\n"
m.a+=l
for(p=p.gai(n);p.C();){m=p.gT(p)
l=h
k="- "+m.gTY()+"\n"
l.a+=k
m=m.f
if(m!=null&&B.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=A.ae("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return A.b(A.QI("text/plain"),$async$afe)
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
case 13:case 9:w=C.h8R(a0)?15:16
break
case 15:p=h
f=C
w=17
return A.b(C.a5J(e),$async$afe)
case 17:m=f.fW2(a2)+"\n"
p.a+=m
case 16:p=A.ae("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return A.b(C.SS(e),$async$afe)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cu(i)){p=h
m=C.fUp(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=B.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afe,v)},
hqm(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.ae("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.ae("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
c8f(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$c8f=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=A.fWI(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.eY("ngmy_local_growth_income_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bE),$async$c8f)
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
q=A.a7(m)
$.al.$1("[local growth income stash] code lookup: "+A.t(q))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$c8f,v)},
aoB(d){var w=0,v=A.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$aoB=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=B.a.i(d)
if(J.ab(k)===0){u=null
w=1
break}t=4
w=7
return A.b(A.eY("ngmy_local_growth_income_stash_v1_"+B.a.i(k),null,!1,B.bE),$async$aoB)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.q(r,"payload")
q=J.k(n==null?"":n)
if(J.ab(q)===0){u=null
w=1
break}n=J.q(r,"ownerEmail")
p=B.a.i(J.k(n==null?"":n))
n=B.c4.c6(0,B.cA.aG(q))
m=J.y(J.q(r,"live"),!0)
u=new A.aDL(m,p,n)
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=A.a7(j)
$.al.$1("[local growth income stash] consume: "+A.t(o))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aoB,v)},
aZ2(d){var w=0,v=A.j(x.bY),u,t,s,r,q
var $async$aZ2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
w=C.hqm(q)?3:4
break
case 3:w=5
return A.b(C.c8f(q),$async$aZ2)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.aoB(t)
w=1
break
case 4:if(B.a.a_(q,"NGMYLOCALSYNC1|")){u=C.aoB(B.a.i(B.a.aY(q,15)))
w=1
break}w=B.a.a_(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return A.b(C.aoB(B.a.i(B.a.aY(q,15))),$async$aZ2)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new A.aDL(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZ2,v)},
fWW(d){var w=d.bK
if(w>=0)return w
return 1},
afp(d,e,f){var w=0,v=A.j(x.H),u,t
var $async$afp=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return A.b(A.aNJ(d,e),$async$afp)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return A.b(A.FE(d,null,null,!1,!0,""),$async$afp)
case 5:w=4
return A.b(t.$1(h),$async$afp)
case 4:case 1:return A.h(u,v)}})
return A.i($async$afp,v)},
hPA(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=B.a.i(a2)
if(a1.length===0)return B.i7
w=a1.toLowerCase()
v=A.ae("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=A.ae("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cA(w)
if(!u&&t==null)return B.i7
s=new A.Q(Date.now(),0,!1)
r=A.de()
q=A.de()
p=C.hFj(w)
if(p!=null){v=p.a
r.b=s.bM(v)
q.b=C.h40(a1,w)
if(J.y(q.b9(),"Wake up")&&B.o.am(v,e)<=180)q.b="Reminder \u2014 "+B.o.am(v,e)+" min"}else{if(t!=null){v=A.ae("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=B.a.e4(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.h41(v[2],v[4],v[3])
o=v[3]
m=A.c7(o==null?"":o,null)
if(m==null)m=0
l=A.bX(A.bx(s),A.bF(s),A.bP(s),0,0,0,0,0)
if(B.a.t(w,d))l=l.bM(a0)
r.b=A.bX(A.bx(l),A.bF(l),A.bP(l),n,m,0,0,0).bM(-36e8)
if(r.b9().cV(s.bM(e)))r.b=J.cd(r.b9(),B.nt)
v=C.hJn(v[1])
k=B.o.G(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+B.a.aU(B.o.u(m),2,"0")+" "+j)}else{l=A.bX(A.bx(s),A.bF(s),A.bP(s),0,0,0,0,0)
v=B.a.t(w,d)
if(v)l=l.bM(a0)
i=A.ae("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cA(w)
if(i!=null){o=i.b
h=C.h41(o[1],o[3],o[2])
o=o[2]
g=A.c7(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=A.bX(A.bx(l),A.bF(l),A.bP(l),h,g,0,0,0)
r.b=f.cV(s.bM(3e7))&&!v?f.bM(a0):f
q.b=C.h40(a1,w)}}v=x.N
return A.a([new A.kf("alarm",A.E(["title",q.b9(),"start",r.b9().ab(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
hFj(d){var w,v,u,t,s,r,q=[A.ae("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.ae("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.ae("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),A.ae("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
for(w=0;w<4;++w){v=q[w].cA(d)
if(v==null)continue
u=v.b
t=u[1]
s=A.c7(t==null?"":t,null)
if(s==null||s<=0)continue
r=u[2]
if(r==null)r="minute"
if(B.a.a_(r,"sec"))return new A.b9(1e6*B.o.D(s,5,86400))
if(B.a.a_(r,"hour")||B.a.a_(r,"hr"))return new A.b9(36e8*B.o.D(s,1,168))
return new A.b9(6e7*B.o.D(s,1,10080))}return null},
hJn(d){var w=d==null?"work":d,v=w.toLowerCase()
if(B.a.t(v,"meeting")||B.a.t(v,"appointment"))return"Meeting"
if(B.a.t(v,"class")||B.a.t(v,"school"))return"Class"
if(B.a.t(v,"shift"))return"Shift"
return"Work"},
h41(d,e,f){var w,v=A.c7(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return B.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
h40(d,e){var w,v,u,t
if(B.a.t(e,"work"))return"Wake up \u2014 Work"
if(B.a.t(e,"school")||B.a.t(e,"class"))return"Wake up \u2014 School"
w=A.ae("\\btimer\\b",!1,!1,!1,!1)
if(w.b.test(e))return"Timer"
v=A.ae("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cA(d)
if(v!=null){w=v.b
u=w[1]
w=u==null?w[2]:u
t=B.a.i(w==null?"":w)
w=t.length
if(w>=3&&w<=60)return t}return"Wake up"},
hqI(d){var w,v,u,t,s=J.a8(d)
if(s.gaj(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.k6(d,80),v=w.$ti,w=new A.bV(w,w.gJ(0),v.k("bV<ai.E>")),v=v.k("ai.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gJ(d)>80?u+("\u2026 and "+(s.gJ(d)-80)+" more\n"):u
return B.a.i(s.charCodeAt(0)==0?s:s)}},D,H,Ab,I,F,Ac,V,G,W,Ad,Ae,X,Af,Ag,Ah,Ai,Y,Z,K,Aj
J=c[1]
A=c[0]
B=c[2]
L=c[31]
Q=c[159]
A_=c[170]
E=c[151]
M=c[161]
A0=c[114]
N=c[95]
A1=c[157]
R=c[34]
O=c[71]
S=c[77]
A2=c[78]
P=c[125]
A3=c[162]
T=c[153]
A4=c[165]
A5=c[163]
A6=c[164]
A7=c[160]
A8=c[156]
A9=c[63]
U=c[141]
Aa=c[142]
C=a.updateHolder(c[5],C)
D=c[150]
H=c[25]
Ab=c[62]
I=c[155]
F=c[94]
Ac=c[166]
V=c[26]
G=c[154]
W=c[106]
Ad=c[152]
Ae=c[169]
X=c[158]
Af=c[171]
Ag=c[101]
Ah=c[168]
Ai=c[98]
Y=c[70]
Z=c[55]
K=c[53]
Aj=c[167]
C.bow.prototype={
o2(d,e){return this.a.$2(d,e)}}
C.Ef.prototype={
S(){return new C.aFO(this.$ti.k("aFO<Ef.T,Ef.S>"))}}
C.aFO.prototype={
Z(){var w,v,u=this
u.a0()
w=u.a
v=w.f
w=new A.hy(B.E0,v,null,null,w.$ti.k("hy<1>"))
u.e=w
u.Uu()},
bq(d){var w,v=this
v.bD(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aK9()
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hy(B.E0,w.b,w.c,w.d,w.$ti)}v.Uu()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&A.c()
return v.mC(d,w)},
q(){this.aK9()
this.a1()},
Uu(){var w,v=this
v.d=v.a.c.l4(new C.ePT(v),new C.ePU(v),new C.ePV(v))
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hy(B.Vi,w.b,w.c,w.d,w.$ti)},
aK9(){var w=this.d
if(w!=null){w.a8(0)
this.d=null}}}
C.att.prototype={
mC(d,e){return this.e.$2(d,e)}}
C.ajb.prototype={
S(){return C.hxe()},
bo(){return this.r.$0()}}
C.qk.prototype={}
C.ay3.prototype={
aaO(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aaO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.fVu(r)
if(r.x==null||r.c4.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.fVw(s),$async$aaO)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aaO,v)},
VR(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aoz(t.a.c),$async$VR)
case 3:if(e!=null&&t.c!=null)t.a.bo()
r=!C.c59(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return A.b(C.anx(t.a.c),$async$VR)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.m(new C.d5l(t,s))
if(!s)t.aaO()
case 1:return A.h(u,v)}})
return A.i($async$VR,v)},
aap(){var w=0,v=A.j(x.H),u,t=this,s
var $async$aap=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.bzx(),$async$aap)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.d5w(t,s))
case 1:return A.h(u,v)}})
return A.i($async$aap,v)},
Z(){var w,v,u=this
u.bpp()
$.rT=$.rT+1
w=u.a
$.bzC=w.c.a
w=w.d.b4
v=A.U(w).k("J<1,a1<n,@>>")
w=A.B(new A.J(w,new C.d5O(),v),v.k("ai.E"))
u.f=w
u.aap()
u.Iy()
u.VR()
u.e=A.dF(B.nq,new C.d5P(u))},
Iy(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Iy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:C.afq(t.a.d.b4)
w=3
return A.b(C.fsG(t.a.d.b4),$async$Iy)
case 3:s=e
if(t.c==null){w=1
break}C.afq(t.a.d.b4)
if(s!=null)t.m(new C.d5E(t,s))
else t.m(new C.d5F(t))
case 1:return A.h(u,v)}})
return A.i($async$Iy,v)},
q(){C.aXJ()
var w=this.e
if(w!=null)w.a8(0)
this.bpo()},
afh(d,e,f){return this.cld(d,e,f)},
cld(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$afh=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(e.toLowerCase())
p=J.q(t.r,q)
o=t.a
n=o.d.b4
o=o.c
s=d.b
C.hJq(n,o.a,o.c,d.a,s,f,e,p)
t.a.bo()
w=3
return A.b(C.afr(t.a.d.b4),$async$afh)
case 3:if(t.c==null){w=1
break}t.m(new C.d5H(t))
r=f===1?"1 game":""+f+" games"
t.c.I(x.q).f.P(A.b2(null,null,null,null,null,B.q,null,A.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$afh,v)},
Hs(d,e){return this.c6R(d,e)},
bWm(d){return this.Hs(d,null)},
c6R(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Hs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&B.a.i(e).length!==0){s=C.tu(t.a.d.b4,B.a.i(e))
if(s!=null&&C.aME(s)<=0){t.c.I(x.q).f.P(D.aKn)
w=1
break}}w=5
return A.b(C.anx(t.a.c),$async$Hs)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return A.b(C.fG4(r,C.fn2(q.c),p),$async$Hs)
case 6:w=1
break
case 4:o=new C.d5z(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
A.hr(r,new C.aAV(p,q.d,q.f,q.r,new C.d5A(o),q.w,C.fn2(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
A.hr(q,new C.aja(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.d5B(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$Hs,v)},
bTV(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.afq(i.a.d.b4)
C.afq(i.f)
w=C.hUc(i.a.c.a,i.f)
v=C.hJp(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return B.bG
if(!u){t=B.d.gK(w)
u=A.m(14)
s=A.I(B.b9,B.r,1)
r=J.a8(t)
q=r.h(t,"fromName")
q=A.t(q==null?r.h(t,"fromEmail"):q)
p=A.t(r.h(t,"gameTitle"))
o=A.aN(r.h(t,g))
o=o==null?h:B.k.N(o)
if(o==null)o=1
r=A.aN(r.h(t,g))
r=r==null?h:B.k.N(r)
r=(r==null?1:r)===1?"":"s"
n=x.p
return A.p(h,A.v(A.a([D.f7Q,A.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,B.oJ,h,h,h),B.P,A.A(A.a([A.D(A.dX(B.I6,new C.d5r(i,t),h),1),B.ab,A.D(A.bM(D.fg9,new C.d5s(i,t),h),1)],n),B.m,h,B.e,B.j,0,h,h)],n),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(B.aD,h,s,u,h,h,B.n),h,h,h,B.e3,B.bm,h,h,1/0)}m=B.d.gK(v)
l=B.d.dH(i.y,new C.d5t(m),new C.d5u(i))
k=C.fM4(m,i.a.c.a,i.r)
j=C.aME(m)
u=A.m(14)
s=A.I(B.b9,B.r,1)
r=j===1?"":"s"
return A.p(h,A.v(A.a([D.f0u,A.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,B.oJ,h,h,h),B.av,A.d(C.hM3(m,i.a.c.a),h,h,h,h,h,h,B.a5j,h,h,h),B.P,A.bM(D.f79,new C.d5v(i,l,m),h)],x.p),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(B.bk,h,s,u,h,h,B.n),h,h,h,B.e3,B.bm,h,h,1/0)},
bKN(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.ewu.t(0,d.a),l=A.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=A.a3e(w[v])
t=B.k.D(u.d*0.58,0.12,0.3)
l.push(new A.wA(u.a,u.b,B.k.D(u.c*0.92,0,0.9),t).iv())}s=B.d.gK(w)
w=A.m(16)
t=A.m(18)
r=A.I(A.X(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1)
q=x.V
p=A.a([new A.ac(0,B.G,A.X(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.jb,12)],q)
o=x.p
o=A.a([new A.a4(100,n,A.au(A.W(d.e,B.c,n,n,n,64),n,n,n),n),A.D(new A.C(B.jm,A.v(A.a([A.A(A.a([A.D(A.d(d.b,n,n,n,n,n,n,B.kS,n,n,n),1)],o),B.m,n,B.e,B.j,0,n,n),B.av,A.d(d.c,n,2,B.a2,n,n,n,B.oG,n,n,n)],o),B.F,n,B.b7,B.j,0,B.p),n),1)],o)
if(m)o.push(A.aG(n,n,n,n,D.bFN,n,n,n,new C.d5n(this,d),n,n,n,n,"Invite player",n))
o.push(new A.C(B.Ky,A.p(n,D.bDY,B.f,n,n,new A.o(A.X(71,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),n,A.I(A.X(B.k.U(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1.6),n,A.a([new A.ac(0,B.G,A.X(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,10)],q),n,B.a6),n,44,n,n,n,n,n,44),n))
return A.aK(!1,w,!0,A.p(n,A.A(o,B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,r,t,p,new A.a5(B.ax,B.aC,B.x,l,n,n),B.n),n,92,n,B.e3,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.d5o(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.M(d).ax.a===B.H,l=A.M(d).ax.a===B.H?B.j_:B.p4,k=m?B.i3.j(0.94):B.c.j(0.94),j=m?B.c:B.M,i=m?B.i3:B.c,h=m?B.c.j(0.08):B.aK,g=m?B.c:B.M,f=m?B.bj:B.bN
if(!o.x)return C.aNb(n,l,A.au(A.mu(n,m?B.c:B.bl,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fn2(o.a.c)
return new C.Mg(o.a.w,w,!0,o.gaOV(),n)}w=A.aI(d,B.e6,x.w).w
v=A.m(12)
u=A.I(h,B.r,1)
t=x.V
s=A.a([],t)
if(!m)s.push(new A.ac(0,B.G,B.w.j(0.04),B.cH,12))
r=x.p
s=A.a([A.p(n,A.A(A.a([A.D(A.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,A.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,B.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new A.tY(new C.d5L(o,f,g),n,$.aOx(),n)],r),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(i,n,u,v,s,n,B.n),n,n,n,n,B.W8,n,n,1/0),B.S,o.bTV()],r)
v=o.y
B.d.v(s,new A.J(v,o.gbKM(),A.U(v).k("J<1,r>")))
w=A.ci(A.v(s,B.m,n,B.e,B.j,0,B.p),B.q,n,B.z,n,new A.N(14,w.r.b+78,14,24),n,n,B.aj)
s=A.m(35)
v=A.a([new A.ac(0,B.G,B.w.j(m?0.28:0.08),B.jb,15)],t)
u=A.I(m?B.c.j(0.1):B.aK,B.r,1)
t=A.aG(n,n,n,n,A.W(B.ez,j,n,n,n,18),n,n,n,o.gaOV(),n,n,n,n,n,n)
q=A.D(A.au(A.d("GAME CENTER",n,n,n,n,n,n,A.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,B.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=A.m(20)
return A.o2(!0,C.aNb(n,l,new A.am(B.X,n,B.a9,B.f,A.a([w,A.an(n,A.bq(!1,new A.C(B.KH,A.p(n,A.A(A.a([t,q,new A.C(B.jm,A.p(n,A.A(A.a([D.bBh,B.e9,C.aoo(new C.d5M(o),B.n4,o.a.c.a)],r),B.m,n,B.e,B.Q,0,n,n),B.f,n,n,new A.o(B.cR,n,n,p,n,n,B.n),n,n,n,n,B.h2,n,n,n),n)],r),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(k,n,u,s,v,n,B.n),n,60,n,n,B.m4,n,n,n),n),!0,!1,B.ah,!0,!0),n,n,0,0,0,n)],r),n)),new C.d5N(o),x.K)},
aOW(){var w,v
this.a.bo()
w=this.d
v=w>0?A.E(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
A.iJ(w,v)}}
C.aAV.prototype={
S(){return new C.bgI()},
hl(d){return this.e.$1(d)},
bo(){return this.f.$0()},
aDR(){return this.r.$0()}}
C.bgI.prototype={
Z(){this.bqp()
this.d=A.Tf(this.a.d.bg)
$.rT=$.rT+1},
q(){C.aXJ()
this.bqo()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&A.c()
return new C.an1(v,new C.dJ5(w),u,new C.dJ6(w),new C.dJ7(w,d),new C.dJ8(w),null)}}
C.aja.prototype={
S(){return new C.ay2(new A.ap(B.as,$.av()))},
hl(d){return this.x.$1(d)},
bo(){return this.y.$0()},
aDR(){return this.z.$0()}}
C.ay2.prototype={
Z(){this.bpn()
this.a.toString
$.rT=$.rT+1},
q(){C.aXJ()
var w=this.d
w.R$=$.av()
w.O$=0
this.bpm()},
a0k(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0k=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.Mm()
w=5
return A.b(C.anx(t.a.c),$async$a0k)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return A.b(C.fG4(s,C.fn2(r.c),q),$async$a0k)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&B.a.i(r).length!==0){p=C.tu(s.d.b4,B.a.i(r))
if(p!=null&&C.aME(p)<=0){t.c.I(x.q).f.P(D.aKn)
w=1
break}}o=A.d3(B.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.I(x.q).f.P(D.eDo)
w=1
break}m=A.JU(t.a.c.a,new C.d5f(t))
if(m+0.001<n){t.c.I(x.q).f.P(A.b2(null,null,null,null,null,B.q,null,A.d("Not enough balance for this bet \u2014 you have $"+A.dy(m)+", the bet is $"+A.dy(n)+".",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aDR()
s=t.a
s.toString
r=B.o.u(1000*Date.now())
q=t.a
s.hl(new A.d1(r,q.c.a,n,B.jz,B.f9,"Game bet: "+q.f,null,null,B.cj,new A.Q(Date.now(),0,!1)))
t.a.bo()
if(D.ewm.t(0,t.a.e)){s=t.c
s.toString
r=t.a
A.hr(s,new C.am4(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
A.hr(s,new C.ajc(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$a0k,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=A.aG(o,o,o,o,B.Fq,o,o,o,new C.d5i(d),o,o,o,o,o,o),k=p.a,j=A.d(k.f,o,o,o,o,o,o,B.cs,o,o,o),i=A.m(12),h=x.p
j=A.eA(A.a([A.p(o,A.au(C.aoo(new C.d5j(p),B.kl,k.c.a),o,o,o),B.f,o,o,new A.o(B.cR,o,o,i,o,o,B.n),o,o,o,D.bir,B.is,o,o,o)],h),o,o,!0,!0,D.Vg,o,1,o,o,o,!1,o,!1,B.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=A.m(16)
i=A.I(B.b9,B.r,1)
k=A.W(D.bsh,D.bcU,o,o,o,28)
w=p.a
v=A.d(w.f,o,o,o,o,o,o,B.oF,o,o,o)
w=A.d(w.r,o,o,o,o,o,o,B.oJ,o,o,o)
u=A.X(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.m(12)
s=x.a3
s=A.B(new A.J(A.a([2,5,10,25],x.t),new C.d5k(p),s),s.k("ai.E"))
s=A.A(s,B.m,o,B.e,B.j,0,o,o)
r=A.X(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.p(o,A.v(A.a([D.fhF,B.S,s,B.P,A.aL(o,B.U,!1,o,!0,B.q,o,A.aM(),p.d,o,o,o,o,o,2,A.bo(o,new A.b4(4,A.m(10),B.Z),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,B.lg,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,B.dK,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,B.dj,!0,B.a5,o,B.am,o,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(u,o,o,t,o,o,B.n),o,o,o,o,B.bT,o,o,1/0)
u=A.m(12)
r=A.I(A.X(102,B.a1p.l()>>>16&255,B.a1p.l()>>>8&255,B.a1p.l()&255),B.r,1)
s=A.X(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
q=A.m(10)
q=A.p(o,A.v(A.a([D.f_S,A.d("+ $"+B.k.a9(n*0.46,2),o,o,o,o,o,o,D.eRG,o,o,o),A.d("(46% return on $"+B.k.a9(p.e,2)+" bet)",o,o,o,o,o,o,B.oG,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(s,o,o,q,o,o,B.n),o,o,o,o,B.cm,o,o,1/0)
s=A.X(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
n=A.m(10)
u=A.p(o,A.v(A.a([D.f85,B.P,q,B.P,A.p(o,A.v(A.a([D.eWf,A.d("$"+B.k.a9(m,2),o,o,o,o,o,o,D.eHB,o,o,o),A.d("8 pairs \xd7 $"+B.k.a9(m,2)+" each",o,o,o,o,o,o,B.oG,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(s,o,o,n,o,o,B.n),o,o,o,o,B.cm,o,o,1/0)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(D.b9u,o,r,u,o,o,B.n),o,o,o,o,B.bT,o,o,1/0)
r=A.fk(o,o,B.bl,o,o,o,o,o,o,B.c,o,B.fH,o,o,o,o,o,o,o,o)
return C.aNb(j,D.Vg,A.ci(A.p(o,A.v(A.a([k,B.av,v,B.bB,w,B.S,t,B.P,u,B.S,new A.a4(1/0,o,A.i8(A.d("Start Game ($"+B.k.a9(p.e,2)+")",o,o,o,o,o,o,B.cb,o,o,o),p.gcoZ(),r),o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,i,l,o,D.bKP,B.n),o,o,o,o,B.eN,o,o,1/0),B.q,o,B.z,o,E.ae6,o,o,B.aj))}}
C.ajc.prototype={
S(){var w=x.s,v=x.t,u=x.S
return new C.ay4(B.cG,new A.ap(B.as,$.av()),A.a([],w),A.a([],x.d4),A.a([],w),A.a([],w),A.a([],v),A.a([],v),A.a([],v),A.b0(u),A.b0(u),A.a([],v),A.a([],v),A.a([],v))},
hl(d){return this.y.$1(d)},
bo(){return this.z.$0()}}
C.ay4.prototype={
ghs(){var w=this.a.Q
return w!=null&&B.a.i(w).length!==0},
qy(d){return this.bJ6(d)},
bJ6(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$qy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.zm()
r=t.Ni()
w=s<=0?3:4
break
case 3:w=5
return A.b(t.a8T(d),$async$qy)
case 5:w=1
break
case 4:q=B.k.D(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return A.b(t.t8(d),$async$qy)
case 9:w=7
break
case 8:w=10
return A.b(t.DA(q,s,r),$async$qy)
case 10:case 7:case 1:return A.h(u,v)}})
return A.i($async$qy,v)},
Ea(d,e,f,g){return this.cmR(d,e,f,g)},
cmR(d,e,f,g){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ea=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return A.b(C.bAD(s,C.bAh(),C.fNX(),d,e,f,g),$async$Ea)
case 3:case 1:return A.h(u,v)}})
return A.i($async$Ea,v)},
zm(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.aZ6(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&A.c()
return u+C.afC(t,s.e.a.a)
case"memory":return s.ghs()&&D.mm.t(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.avs()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bg
case"color":return s.b4
case"reflex":return s.Y
default:u=s.aZ
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
avs(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
Ni(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&A.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.fM8()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.aZ
if(w!=null)return w.b
return 1}},
bq(d){var w,v,u=this
u.bD(d)
if(u.f||u.c4)return
w=u.a
v=C.fn7(w.e,w.d.y2)
if(v!==C.fn7(d.e,d.d.y2)&&u.c!=null)u.m(new C.d77(u,v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.bpr()
w=i.a
w.toString
$.rT=$.rT+1
i.Q=C.fn7(w.e,w.d.y2)
i.b0U()
i.aa9()
if(i.ghs()){i.c4=!0
i.cT="Connecting to match\u2026"
i.cf="Both players enter the room together \u2014 play starts at the same time."
i.NE()
i.a9O()
i.bh=A.dF(B.h0,new C.d7a(i))}if(B.d.t(D.Oz,i.a.e)){w=i.ghs()
v=i.a
if(w){w=v.d.b4
v=v.Q
v.toString
u=C.tu(w,v)
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
m=s.b(t.h(u,h))?A.a_(s.a(t.h(u,h)),o,n):A.T(o,n)
s=p===r
l=s?q:r
if(s){o=m.h(0,"player2Name")
if(o==null)o=m.h(0,"playerOName")
t=o==null?t.h(u,"toName"):o
k=B.a.i(J.k(t==null?"":t))}else{o=m.h(0,"player1Name")
if(o==null)o=m.h(0,"playerXName")
t=o==null?t.h(u,"fromName"):o
k=B.a.i(J.k(t==null?"":t))}w=new C.aXH(!1,w,k.length===0||B.a.t(k,"@")?C.fM4(u,v,null):k,p,l,s)}else{w=w.c
w=C.fG8(w.c,w.a)}w=i.bI=w}else{w=v.c
w=i.bI=C.fG8(w.c,w.a)}v=C.hqP()
v.bju(i.a.e,i.d,w)
i.aZ=v
i.r=v.c
if(i.ghs()){w=i.a
v=w.d.b4
w=w.Q
w.toString
u=C.tu(v,w)
m=u==null?null:J.q(u,h)
if(x.f.b(m)){w=i.aZ
w.toString
w.b5V(i.a.e,A.a_(m,x.N,x.z),i.a.c.a)
w=i.aZ
i.r=w.c
if(w.e){if(w.r)j=D.PX
else j=w.f===!0?D.pC:D.GH
i.zo(j)}}}i.b2=A.dF(B.ns,new C.d7b(i))
if(i.ghs())i.b8=A.dF(B.oa,new C.d7c(i))}if(i.ghs()&&!B.d.t(D.Oz,i.a.e))i.b8=A.dF(B.oa,new C.d7d(i))
i.as=A.dF(B.hc,new C.d7e(i))},
NE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$NE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghs()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tu(s.d.b4,q)
w=p!=null?3:4
break
case 3:w=5
return A.b(C.byC(p,t.a.c.a),$async$NE)
case 5:o=e
if(t.c!=null)t.m(new C.d6n(t,o))
w=1
break
case 4:w=6
return A.b(C.JL(q,t.a.d.b4,!1),$async$NE)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return A.b(C.byC(n,t.a.c.a),$async$NE)
case 7:o=e
if(t.c!=null)t.m(new C.d6o(t,o))
case 1:return A.h(u,v)}})
return A.i($async$NE,v)},
agn(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$agn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghs()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.JL(r,s.d.b4,!1),$async$agn)
case 3:q=e
if(q==null||t.c==null){w=1
break}p=J.q(q,"sessionState")
if(!x.f.b(p)){w=1
break}o=A.a_(p,x.N,x.z)
if(t.a.e==="memory"){s=t.go
r=s.a
n=t.id
m=n.a
l=t.fx
t.aJY(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=B.k.N(j)
else{h=j==null?null:J.k(j)
i=A.c7(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)B.d.bm(t.fy,new C.d6R(t))
if(i!=null&&t.fr.length!==0){s=A.B(t.dy,x.S)
B.d.v(s,t.dy)
r=new A.f5()
r.dU(i)
B.d.fB(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.m(new C.d6S())}case 1:return A.h(u,v)}})
return A.i($async$agn,v)},
a9O(){var w=0,v=A.j(x.H),u=this
var $async$a9O=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.ZG(!0),$async$a9O)
case 2:return A.h(null,v)}})
return A.i($async$a9O,v)},
ZG(d){return this.ccx(d)},
ccw(){return this.ZG(!1)},
ccx(b3){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$ZG=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghs()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
if(q.length===0){w=1
break}p=B.a.i(s.c.a.toLowerCase())
w=3
return A.b(C.JL(q,s.d.b4,b3),$async$ZG)
case 3:o=b5
if(o==null)o=C.tu(t.a.d.b4,q)
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
j=s.b(l)?A.a_(l,r,k):A.T(r,k)
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
d=s.b(e)?A.a_(e,r,k):A.T(r,k)
a0=j.h(0,"readyAt")
a1=s.b(a0)?A.a_(a0,r,k):A.T(r,k)
a2=new A.Q(Date.now(),0,!1).a4()
if(b3){d.n(0,p,!0)
a1.n(0,p,a2.ab())}if(i&&!d.al(0,h))d.n(0,h,!1)
if(f&&!d.al(0,g))d.n(0,g,!1)
s=!1
if(i)if(J.y(d.h(0,h),!0)){s=a1.h(0,h)
s=J.k(s==null?"":s).length===0}if(s)a1.n(0,h,a2.ab())
s=!1
if(f)if(J.y(d.h(0,g),!0)){s=a1.h(0,g)
s=J.k(s==null?"":s).length===0}if(s)a1.n(0,g,a2.ab())
j.n(0,"inGame",d)
j.n(0,"readyAt",a1)
b2.a=null
s=j.h(0,"startAt")
a3=J.k(s==null?"":s)
if(a3.length!==0){s=A.bi(a3)
a4=s==null?null:s.bP()
b2.a=a4
s=a4}else s=null
a5=i&&f&&J.y(d.h(0,h),!0)&&J.y(d.h(0,g),!0)
if(a5&&s==null){if(i){r=a1.h(0,h)
r=A.bi(J.k(r==null?"":r))
a6=r==null?null:r.bP()}else a6=null
if(f){r=a1.h(0,g)
r=A.bi(J.k(r==null?"":r))
a7=r==null?null:r.bP()}else a7=null
if(a6!=null&&a7!=null){a8=(a6.c8(a7)?a6:a7).bM(5e5)
if(!new A.Q(Date.now(),0,!1).cV(a8)){a4=b2.a=a8.bM(4e6)
j.n(0,"startAt",a4.a4().ab())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.n(0,"memorySeed",B.o.G(1000*Date.now(),2147483647))
j.n(0,"memoryMatched",A.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.n(0,"patternSeed",B.o.G(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.hR4(t.a.d.b4,q,j)
t.a.bo()}if(t.c==null){w=1
break}b0=t.bB
if(b0==null)b0="your opponent"
if(!a5){t.m(new C.d6D(b2,t,b0))
w=1
break}if(s==null){t.m(new C.d6E(t))
w=1
break}b1=new A.Q(Date.now(),0,!1)
if(b1.cV(s)){s=s.bx(b1).a
r=B.o.am(s,1e6)
t.m(new C.d6F(b2,t,r+(B.o.G(B.o.am(s,1000),1000)>0?1:0)))
w=1
break}if(t.c4){t.m(new C.d6G(b2,t))
b2=t.a.e
if(b2==="pattern")t.a6L()
else if(b2==="memory"){t.b0T()
if(t.c!=null)t.m(new C.d6H())}}b2=t.bh
if(b2!=null)b2.a8(0)
t.bh=null
case 1:return A.h(u,v)}})
return A.i($async$ZG,v)},
aKS(d){var w,v,u,t,s=this
if(d!=null){w=new A.f5()
w.dU(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e1(v,x.S)
for(t=0;t<v;++t)u[t]=w.aD(9)
s.ry=u
s.x1=0
s.to=-1},
aKR(){return this.aKS(null)},
a6L(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a6L=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ghs()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.ca4()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return A.b(C.JL(q,s.d.b4,!1),$async$a6L)
case 5:r=t.aXU(e)
case 4:if(t.c==null){w=1
break}t.aKS(r)
t.m(new C.d5Q(t))
t.CN()
case 1:return A.h(u,v)}})
return A.i($async$a6L,v)},
aXU(d){var w,v,u,t=null
if(d==null)return t
w=J.q(d,"sessionState")
if(!x.f.b(w))return t
v=J.q(w,"patternSeed")
if(typeof v=="number")return B.k.N(v)
u=v==null?t:J.k(v)
return A.c7(u==null?"":u,t)},
ca4(){var w=this.a,v=w.Q
if(v==null)return null
return this.aXU(C.tu(w.d.b4,v))},
aa9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$aa9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$aa9)
case 3:r=e
q=t.a
p=q.e
q=B.a.i(q.c.a.toLowerCase())
s=A.f0(J.q(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.m(new C.d6m(t,s))
case 1:return A.h(u,v)}})
return A.i($async$aa9,v)},
ov(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n
var $async$ov=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$ov)
case 2:p=e
o=u.a
n=o.e
o=B.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bB5().length
else s=n==="typing"?50:105
if(n==="typing")r=B.o.G(u.at+5,s)
else{q=u.at
r=t?B.o.G(q+6,s):B.o.G(q+1,s)}w=3
return A.b(p.ap("Int","ngmy_game_"+n+"_"+o,r),$async$ov)
case 3:u.at=r
return A.h(null,v)}})
return A.i($async$ov,v)},
a0z(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a0z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghs()||t.aZ==null||t.f||t.aQ){w=1
break}if(t.c4){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.JL(r,s.d.b4,!1),$async$a0z)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.b4
s=s.Q
s.toString
p=C.tu(r,s)
s=p==null
if(!s){r=J.cD(p)
r.a7(p)
r.v(p,q)}r=J.a8(q)
o=r.h(q,"sessionState")
if(!x.f.b(o)){w=1
break}n=A.a_(o,x.N,x.z)
r=r.h(q,"sessionUpdatedAt")
m=A.bi(J.k(r==null?"":r))
s=s?null:J.q(p,"sessionUpdatedAt")
l=A.bi(J.k(s==null?"":s))
if(m!=null&&l!=null&&!m.c8(l)){w=1
break}s=t.aZ
s.toString
r=t.a
s.b5V(r.e,n,r.c.a)
r=t.aZ
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.PX
else k=r.f===!0?D.pC:D.GH
w=7
return A.b(t.zo(k),$async$a0z)
case 7:w=5
break
case 6:if(t.c!=null)t.m(new C.d6T())
case 5:case 1:return A.h(u,v)}})
return A.i($async$a0z,v)},
aei(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$aei=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghs()||q.aZ==null||q.a.Q==null||q.aQ){w=1
break}q.aQ=!0
t=3
o=q.aZ
o.toString
p=o.cDO(q.a.e)
o=q.a
n=o.d.b4
o=o.Q
o.toString
w=6
return A.b(C.aNx(n,o,p),$async$aei)
case 6:q.a.bo()
r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
q.aQ=!1
w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aei,v)},
zo(d){return this.bQ3(d)},
bQ3(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$zo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(t.f||t.aZ==null){w=1
break}s=t.aZ.w
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
return A.b(t.I7(s,s),$async$zo)
case 9:w=4
break
case 6:w=10
return A.b(t.Wc(s,s),$async$zo)
case 10:w=4
break
case 7:w=11
return A.b(t.a8S(s,s),$async$zo)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghs()?12:13
break
case 12:w=14
return A.b(t.GL(),$async$zo)
case 14:case 13:case 1:return A.h(u,v)}})
return A.i($async$zo,v)},
YF(d,e){return this.c4D(d,e)},
c4D(d,e){var w=0,v=A.j(x.H),u,t=this
var $async$YF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=t.ghs()?3:5
break
case 3:w=6
return A.b(t.aei(),$async$YF)
case 6:if(d===D.pB){w=1
break}w=4
break
case 5:if(d===D.pB){w=1
break}case 4:w=7
return A.b(t.zo(d),$async$YF)
case 7:case 1:return A.h(u,v)}})
return A.i($async$YF,v)},
aa3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aa3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghs()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tu(s.d.b4,q)
if(p==null){w=1
break}o=B.a.i(t.a.c.a.toLowerCase())
n=J.q(p,"sessionState")
s=x.f
if(!s.b(n)){w=1
break}r=x.N
m=x.z
l=A.a_(n,r,m)
k=l.h(0,"inGame")
j=s.b(k)?A.a_(k,r,m):A.T(r,m)
j.n(0,o,!1)
l.n(0,"inGame",j)
l.W(0,"startAt")
w=3
return A.b(C.aNx(t.a.d.b4,q,l),$async$aa3)
case 3:t.a.bo()
case 1:return A.h(u,v)}})
return A.i($async$aa3,v)},
GL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$GL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghs()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tu(s.d.b4,q)
if(p==null){w=1
break}o=J.q(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?A.a_(o,s,r):A.T(s,r)
n.n(0,"gameOver",!0)
C.fOm(t.a.d.b4,q,n)
C.hUm(t.a.d.b4,q)
w=3
return A.b(C.afr(t.a.d.b4),$async$GL)
case 3:t.a.bo()
case 1:return A.h(u,v)}})
return A.i($async$GL,v)},
q(){var w,v=this
if(v.ghs()&&!v.f)v.aa3()
else if(!v.f)v.bWn()
C.aXJ();++v.RG
w=v.as
if(w!=null)w.a8(0)
w=v.b2
if(w!=null)w.a8(0)
w=v.cx
if(w!=null)w.a8(0)
w=v.b8
if(w!=null)w.a8(0)
w=v.bh
if(w!=null)w.a8(0)
w=v.e
w.R$=$.av()
w.O$=0
v.bpq()},
cs0(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&A.c()
v=v<=0||w.aZ==null}if(v)return
if(w.c4)return
v=w.aZ
v.toString
w.a.toString
if(v.a>=v.b){w.t8("Goal completed!")
return}v=++w.rx
if(v%5===0)w.m(new C.d71())},
b0U(){var w,v,u,t,s,r=this
r.x=A.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e1(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b0T()
break
case"scramble":r.bg=0
r.b0V()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=B.o.G(r.at,50)
v=J.e1(5,x.N)
for(t=0;t<5;++t)v[t]=D.d17[B.o.G(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bL(0,B.c3)
break
case"math":r.y2=0
r.b0S()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b0W()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e1(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
B.d.fB(v,s)
if(!r.ceU()){w=J.e1(9,w)
for(u=0;u<9;++u)w[u]=u
B.d.fB(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
B.d.a7(w)
w.push(r.d.aD(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.Pa()
break
case"pattern":if(r.ghs()){r.ry=A.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aKR()
w=A.t(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.CN()}break
case"color":r.b4=0
r.b0N()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.Y=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b2_()
break
default:if(B.d.t(D.Oz,w)){w=r.aZ
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
aZ6(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
ceU(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return B.o.G(v,2)===0},
b0W(){var w,v,u,t,s,r=this,q=B.o.G(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e1(o,x.S)
for(w=0;w<o;w=v){v=w+1
n[w]=B.k.N(Math.pow(p,v))}u=B.k.N(Math.pow(p,o))
r.w=B.o.u(u)
r.aw=B.d.aH(n,", ")
q=r.w
t=x.s
s=A.a([B.o.u(u+p),B.o.u(u-p),B.o.u(u+p*2)],t)
t=A.a([q],t)
B.d.v(t,s)
B.d.fB(t,r.d)
r.x=t},
b0S(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bB5().length-6)u.at=0
w=$.bB5()
v=w[B.o.G(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b0V(){var w=this,v=w.w=D.cHi[B.o.G(w.at+w.bg,105)]
w.ax=C.hUD(v)
w.ay=A.c0(v.length,null,!1,x.T)
w.ch=A.a(w.ax.split(""),x.s)
w.e.bL(0,B.c3)},
b2_(){var w=this,v=w.cx
if(v!=null)v.a8(0)
w.y=!1
w.z=null
w.cx=A.cM(A.dA(0,0,0,120+w.d.aD(280),0,0),new C.d6Q(w))},
bQ6(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.qy("Too early \u2014 paid for "+t.Y+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=B.o.am(new A.Q(v,0,!1).bx(u).a,1000)}if(w<520){t.m(new C.d6k(t))
v=t.Y
if(v>=5){t.ov()
t.t8("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b2_()
t.m(new C.d6l())}}else t.qy("Too slow ("+w+"ms) \u2014 paid for "+t.Y+"/5.")},
crh(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=B.d.bi(t.ay,new C.d6X())
if(u<0)return
t.m(new C.d6Y(t,u,v,d))},
cri(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.m(new C.d6Z(u,d,v))},
bAw(){var w,v,u=this
if(u.f)return
if(B.d.ba(u.ay,new C.d5R())){u.c.I(x.q).f.P(D.eDi)
return}w=B.d.fO(u.ay)
v=u.w
v===$&&A.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.m(new C.d5S(u))
if(u.ghs()&&D.mm.t(0,u.a.e))u.ZU()
if(u.bg>=5){u.ov()
if(u.ghs()&&D.mm.t(0,u.a.e))u.mz(!0)
else u.t8("All 5 words unscrambled!")}else{u.b0V()
u.r="Word "+(u.bg+1)+" of 5 \u2014 place letters in order"
u.m(new C.d5T())}}else u.qy("Wrong word \u2014 paid for "+u.bg+"/5.")},
b0N(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=B.o.G(w.at+w.b4*11,4),t=v[w.d.aD(4)]
w.aE=t
w.aC=v[u]
w.aN=[B.dC,B.dv,B.hJ,B.qJ][u]
w.w=t},
aJY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=B.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a7(0)
w=h.id
w.a7(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=A.b0(x.S)
for(s=J.jn(v),s=s.gai(s),r=x.j;s.C();){q=s.gT(s)
p=B.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aV(r.b(o)?o:B.cF),n=p===g;q.C();){m=q.gT(q)
l=typeof m=="number"?B.k.N(m):A.c7(J.k(m),null)
if(l==null)continue
t.L(0,l)
if(n)w.L(0,l)}}f.v(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aV(k);w.C();){m=w.gT(w)
l=typeof m=="number"?B.k.N(m):A.c7(J.k(m),null)
if(l!=null)f.L(0,l)}}h.k2=B.k.bv(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=A.aN(J.q(j,g))
i=f==null?null:B.k.N(f)
if(i!=null)h.fx=i}},
b0T(){var w,v,u,t,s,r,q,p=this
p.fx=p.k2=0
p.go.a7(0)
p.id.a7(0)
p.fy=A.a([],x.t)
p.k1=!1
w=A.B(p.dy,x.S)
B.d.v(w,p.dy)
p.fr=w
if(p.ghs()&&p.a.Q!=null){w=p.a
v=w.d.b4
w=w.Q
w.toString
u=C.tu(v,w)
t=u==null?null:J.q(u,"sessionState")
w=x.N
v=x.z
s=x.f.b(t)?A.a_(t,w,v):A.T(w,v)
r=s.h(0,"memorySeed")
if(typeof r=="number")q=B.k.N(r)
else{w=r==null?null:J.k(r)
q=A.c7(w==null?"":w,null)}w=p.fr
if(q!=null){v=new A.f5()
v.dU(q)
B.d.fB(w,v)}else B.d.fB(w,p.d)
p.aJY(s)}else B.d.fB(p.fr,p.d)},
cbT(d){var w,v,u,t=this
if(t.c4)return
if(t.f||t.k1||t.go.t(0,d)||B.d.t(t.fy,d))return
t.m(new C.d6w(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.m(new C.d6x(t,v,u))
if(t.ghs()&&D.mm.t(0,t.a.e))t.ZU()
if(t.go.a>=t.fr.length){t.ov()
if(t.ghs()&&D.mm.t(0,t.a.e))t.mz(!0)
else t.avv()}return}t.k1=!0
A.bO(D.bho,new C.d6y(t),x.c)},
b0g(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&A.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.m(new C.d6I(u))
if(u.y1>=5){u.ov()
u.t8("All 5 questions correct!")}else{u.b0W()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.m(new C.d6J())}}else u.qy(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.m(new C.d6K(u))
if(u.y2>=6){u.ov()
u.t8("All 6 math questions correct!")}else{u.b0S()
u.r="Question "+(u.y2+1)+" of 6"
u.m(new C.d6L())}}else{u.Ui(u.y2+1)
u.qy(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.m(new C.d6M(u))
if(u.b4>=5){u.ov()
u.t8("All 5 color rounds correct!")}else{u.b0N()
u.r="Round "+(u.b4+1)+" of 5 \u2014 tap the COLOR of the text"
u.m(new C.d6N())}}else u.qy("Wrong color \u2014 paid for "+u.b4+"/5.")
return}if(v){u.ov()
u.avv()}else u.c.I(x.q).f.P(D.eE1)},
crg(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=B.d.cJ(q.k4,0)
v=B.o.am(d,3)
u=B.o.G(d,3)
t=B.o.am(w,3)
s=B.o.G(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.m(new C.d6W(q,d,w))
if(B.d.fO(q.k4)==="123456780"){q.ov()
q.avv()}}},
Pa(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Pa=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.m(new C.d6z(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.d6A(t,q).$0()
t.c.e3()
w=6
return A.b(A.bO(B.kx,null,r),$async$Pa)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.d6B(t).$0()
t.c.e3()
w=7
return A.b(A.bO(B.jl,null,r),$async$Pa)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.m(new C.d6C(t))
case 1:return A.h(u,v)}})
return A.i($async$Pa,v)},
crj(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.qy("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.m(new C.d7_(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.ov()
u.t8("Perfect Simon run!")
return}u.m(new C.d70(u))
u.Pa()}},
CN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$CN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.m(new C.d5U(t))
s=x.H
w=3
return A.b(A.bO(B.jk,null,s),$async$CN)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.d5V(t,o).$0()
t.c.e3()
w=7
return A.b(A.bO(B.VN,null,s),$async$CN)
case 7:if(t.c==null){w=1
break}new C.d5W(t).$0()
t.c.e3()
w=8
return A.b(A.bO(B.io,null,s),$async$CN)
case 8:case 5:r.length===q||(0,A.K)(r),++p
w=4
break
case 6:if(t.c!=null)t.m(new C.d5X(t))
case 1:return A.h(u,v)}})
return A.i($async$CN,v)},
Ui(d){return this.bvn(d)},
bvn(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ui=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return A.b(A.ay(),$async$Ui)
case 3:s=f
r=t.a
q=r.e
r=B.a.i(r.c.a.toLowerCase())
p=$.bB5().length
o=B.o.G(t.at+d,p)
w=4
return A.b(s.ap("Int","ngmy_game_"+q+"_"+r,o),$async$Ui)
case 4:t.at=o
case 1:return A.h(u,v)}})
return A.i($async$Ui,v)},
cre(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.qy("Wrong tile \u2014 paid for "+v.avs()+"/"+C.fM8()+" moves.")
return}v.m(new C.d6U(v,w))
if(v.ghs()&&D.mm.t(0,v.a.e))v.ZU()
if(v.x1>=w)if(v.x2>=7){v.ov()
if(v.ghs()&&D.mm.t(0,v.a.e))v.mz(!0)
else v.t8("All 7 pattern rounds correct!")}else{v.m(new C.d6V(v))
v.CN()}},
I7(d,e){return this.cak(d,e)},
t8(d){return this.I7(null,d)},
avv(){return this.I7(null,null)},
cak(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$I7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a8(0)
s=t.b2
if(s!=null)s.a8(0)
r=t.a.x*1.46
t.m(new C.d6u(t,r))
q=B.o.u(1000*Date.now())
s=t.a
p=new A.d1(q,s.c.a,r,B.fy,B.f9,"Game payout: "+s.f,null,null,B.cj,new A.Q(Date.now(),0,!1))
A.afo(p,!0)
t.a.hl(p)
t.a.bo()
o=e==null?"+$"+B.k.a9(r,2)+" added to your balance!":e
s=t.a
C.u8(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.Ea(d,o,"YOU WIN!",!0),$async$I7)
case 3:w=4
return A.b(C.afg(t.a.f,o),$async$I7)
case 4:case 1:return A.h(u,v)}})
return A.i($async$I7,v)},
E8(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$E8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghs()&&D.mm.t(0,t.a.e)?3:4
break
case 3:w=5
return A.b(t.clV(),$async$E8)
case 5:w=1
break
case 4:s=t.zm()
r=t.Ni()
w=r<=0||s<=0?6:7
break
case 6:w=8
return A.b(t.a8T("Time's up \u2014 no progress to pay."),$async$E8)
case 8:w=1
break
case 7:q=B.k.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return A.b(t.t8("Complete! Max payout earned."),$async$E8)
case 12:w=10
break
case 11:w=13
return A.b(t.DA(q,s,r),$async$E8)
case 13:case 10:case 1:return A.h(u,v)}})
return A.i($async$E8,v)},
Ph(d){return this.ceB(d)},
ZU(){return this.Ph(!1)},
ceB(b1){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$Ph=A.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghs()&&D.mm.t(0,r.a.e))||r.a.Q==null){w=1
break}if(!b1){a1=new A.Q(Date.now(),0,!1)
a2=r.bQ
if(a2!=null&&a1.bx(a2).a<3e6){w=1
break}r.bQ=a1}a2=r.a
a3=a2.Q
a3.toString
q=B.a.i(a3)
if(J.ab(q)===0){w=1
break}t=4
p=B.a.i(a2.c.a.toLowerCase())
a4=C.tu(a2.d.b4,q)
w=a4==null?7:9
break
case 7:w=10
return A.b(C.JL(q,r.a.d.b4,!1),$async$Ph)
case 10:w=8
break
case 9:b3=a4
case 8:o=b3
if(o==null){w=1
break}n=J.q(o,"sessionState")
a2=x.f
a3=x.N
a5=x.z
m=a2.b(n)?A.a_(n,a3,a5):A.T(a3,a5)
l=J.q(m,"scores")
k=a2.b(l)?A.a_(l,a3,a5):A.T(a3,a5)
J.aF(k,p,r.zm())
J.aF(m,"scores",k)
if(r.a.e==="memory"){j=J.q(m,"memoryMatchedBy")
i=a2.b(j)?A.a_(j,a3,a5):A.T(a3,a5)
a6=r.id
a6=A.B(a6,A.a2(a6).k("cn.E"))
B.d.fn(a6)
J.aF(i,p,a6)
J.aF(m,"memoryMatchedBy",i)
h=A.b0(x.S)
for(a6=i,a6=new A.dw(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aV(g);a8.C();){f=a8.gT(a8)
e=typeof f=="number"?B.k.N(f):A.c7(J.k(f),null)
if(e!=null)J.cd(h,e)}}a6=h
a6=A.B(a6,A.a2(a6).k("cn.E"))
B.d.fn(a6)
J.aF(m,"memoryMatched",a6)}d=J.q(m,"wagers")
a0=a2.b(d)?A.a_(d,a3,a5):A.T(a3,a5)
J.aF(a0,p,r.a.x)
J.aF(m,"wagers",a0)
w=11
return A.b(C.aNx(r.a.d.b4,q,m),$async$Ph)
case 11:r.a.bo()
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
return A.i($async$Ph,v)},
mz(d){return this.clW(d)},
clV(){return this.mz(!1)},
clW(b5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$mz=A.e(function(b6,b7){if(b6===1)return A.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghs()||t.a.Q==null?3:4
break
case 3:w=5
return A.b(t.E8(),$async$mz)
case 5:w=1
break
case 4:w=6
return A.b(t.Ph(!0),$async$mz)
case 6:s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=B.a.i(s.c.a.toLowerCase())
w=7
return A.b(C.JL(q,s.d.b4,!0),$async$mz)
case 7:o=b7
n=t.Ni()
w=o==null?8:9
break
case 8:m=B.k.D(t.zm()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return A.b(t.a8T("Time's up \u2014 no progress to pay."),$async$mz)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return A.b(t.t8("Complete! Max payout earned."),$async$mz)
case 17:w=15
break
case 16:w=18
return A.b(t.DA(m,t.zm(),n),$async$mz)
case 18:case 15:case 11:w=19
return A.b(t.GL(),$async$mz)
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
g=s.b(i)?A.a_(i,r,h):A.T(r,h)
f=g.h(0,"scores")
e=s.b(f)?A.a_(f,r,h):A.T(r,h)
d=A.aN(e.h(0,p))
a0=d==null?null:B.k.N(d)
if(a0==null)a0=t.zm()
d=A.aN(e.h(0,j))
a1=d==null?null:B.k.N(d)
if(a1==null)a1=0
a2=B.k.D(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return A.b(t.a8T("Time's up \u2014 no progress to pay."),$async$mz)
case 22:w=23
return A.b(t.GL(),$async$mz)
case 23:w=1
break
case 21:a3=g.h(0,"wagers")
r=A.aN((s.b(a3)?A.a_(a3,r,h):A.T(r,h)).h(0,j))
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
r=t.b2
if(r!=null)r.a8(0)
a8=t.a.x*1.46*a2
a9=a8+a7
t.m(new C.d6O(t,a8,a2))
r=t.a
r.toString
h=B.o.u(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+B.k.a9(a7,2):d+" ("+b1+"/"+b2+")"
r.hl(new A.d1(h,b0,a9,B.fy,B.f9,d,null,null,B.cj,new A.Q(Date.now(),0,!1)))
t.a.bo()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+B.k.a9(a9,2)+" (includes opponent bonus $"+B.k.a9(a7,2)+")":"+$"+B.k.a9(a8,2)+" (your progress payout)"
s=t.a
C.u8(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return A.b(t.Ea(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$mz)
case 24:w=25
return A.b(t.GL(),$async$mz)
case 25:case 1:return A.h(u,v)}})
return A.i($async$mz,v)},
DA(d,e,f){return this.cai(d,e,f)},
cai(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$DA=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a8(0)
s=t.b2
if(s!=null)s.a8(0)
r=t.a.x*1.46*d
t.m(new C.d6s(t,r,d))
s=B.o.u(1000*Date.now())
q=t.a
p=new A.d1(s,q.c.a,r,B.fy,B.f9,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,B.cj,new A.Q(Date.now(),0,!1))
A.afo(p,!0)
t.a.hl(p)
t.a.bo()
if(t.c==null){w=1
break}o=B.k.U(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&A.c()
m=q+C.afC(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?B.d.cG(t.cy,0,new C.d6t()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+B.k.a9(r,2)+" ("+n+"% \u2014 "+A.t(k)+" mistakes/missed)":"+$"+B.k.a9(r,2)+" ("+n+"% of full prize)"
q=t.a
C.u8(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return A.b(t.Ea(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$DA)
case 3:w=4
return A.b(C.afg(t.a.f,j),$async$DA)
case 4:case 1:return A.h(u,v)}})
return A.i($async$DA,v)},
bWn(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.zm()
v=o.Ni()}catch(u){return}if(v<=0||w<=0)return
t=B.k.D(w/v,0,1)
s=A.nF(B.k.a9(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=B.o.u(1000*Date.now())
p=o.a
r.hl(new A.d1(q,p.c.a,s,B.fy,B.f9,"Game partial: "+p.f+" ("+A.t(w)+"/"+A.t(v)+", left early)",n,n,B.cj,new A.Q(Date.now(),0,!1)))
o.a.bo()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.u8(s,n,"Left early \xb7 +$"+B.k.a9(s,2)+" ("+A.t(w)+"/"+A.t(v)+")",q,r,p,n,!0)},
a8S(d,e){return this.bKH(d,e)},
bKH(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a8S=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a8(0)
s=t.b2
if(s!=null)s.a8(0)
r=B.o.u(1000*Date.now())
s=t.a
q=s.c.a
p=s.x
s=s.f
o=Date.now()
t.a.hl(new A.d1(r,q,p,B.fy,B.f9,"Game payout: "+s+" (draw, stake returned)",null,null,B.cj,new A.Q(o,0,!1)))
t.a.bo()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.u8(o,null,"Draw. Your $"+B.k.a9(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.Ea(d,"Nobody won, so your $"+B.k.a9(t.a.x,2)+" stake was returned.","DRAW",!1),$async$a8S)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8S,v)},
Wc(d,e){return this.bKI(d,e)},
a8T(d){return this.Wc(null,d)},
bKI(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Wc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a8(0)
s=t.b2
if(s!=null)s.a8(0)
s=t.a
r=s.c.a
q=s.f
s=s.x
C.u8(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return A.b(t.Ea(d,e,"YOU LOSE",!1),$async$Wc)
case 3:case 1:return A.h(u,v)}})
return A.i($async$Wc,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&A.c()
w=B.o.am(m,60)
m=B.a.aU(B.o.u(B.o.G(m,60)),2,"0")
v=A.aG(n,n,n,n,B.ajx,n,n,n,new C.d72(d),n,n,n,n,n,n)
if(o.ghs()){u=o.bB
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=A.D(A.d(u?t.f+" vs "+A.t(o.bB):t.f,n,2,B.a2,n,n,n,B.fT,n,n,n),1)
r=A.m(10)
q=x.p
r=A.A(A.a([v,s,A.p(n,C.aoo(new C.d73(o),B.r3,t.c.a),B.f,n,n,new A.o(B.cR,n,n,r,n,n,B.n),n,n,n,n,B.fN,n,n,n)],q),B.m,n,B.e,B.j,0,n,n)
t=o.a
s=t.w
v=A.m(10)
s=A.p(n,A.A(A.a([A.D(A.d("Win $"+B.k.a9(t.x*1.46,2)+" \xb7 stake $"+B.k.a9(o.a.x,2)+" \u2022 Progress "+o.zm()+"/"+o.Ni(),n,n,n,n,n,n,D.eMu,n,n,n),1),new C.anz(o.a.c.a,new C.d74(o),n),B.ab,D.bwW,B.d8,A.d(""+w+":"+m,n,n,n,n,n,n,B.nP,n,n,n)],q),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,n,v,n,new A.a5(B.a3,B.a7,B.x,s,n,n),B.n),n,n,n,n,B.h1,n,n,n)
v=o.a.w
m=A.U(v).k("J<1,w>")
m=A.B(new A.J(v,new C.d75(),m),m.k("ai.E"))
w=A.m(14)
v=A.I(B.b9,B.r,1)
p=C.aNb(n,D.b0E,A.bq(!0,new A.C(Ad.Wa,A.v(A.a([r,s,B.P,new A.fi(new C.d76(o),n),B.aq,A.D(A.p(n,o.bKG(),B.f,n,n,new A.o(n,n,v,w,n,new A.a5(B.a3,B.a7,B.x,m,n,n),B.n),n,n,n,n,B.cm,n,n,n),1)],q),B.ai,n,B.e,B.j,0,B.p),n),!0,!1,B.ah,!0,!0))
if(!o.c4)return p
m=A.X(140,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255)
w=A.X(242,B.ik.l()>>>16&255,B.ik.l()>>>8&255,B.ik.l()&255)
v=A.m(18)
u=A.I(B.b9,B.r,1)
return new A.am(B.X,n,B.a9,B.q,A.a([p,A.bZ(0,A.p(B.A,A.e3(A.p(n,A.v(A.a([D.ezt,B.aa,A.d(o.cT,n,n,n,n,n,n,D.eNV,B.L,n,n),B.aq,A.d(o.cf,n,n,n,n,n,n,D.eMd,B.L,n,n)],q),B.m,n,B.e,B.Q,0,B.p),B.f,n,n,new A.o(w,n,u,v,n,n,B.n),n,n,n,B.uE,B.wO,n,n,n),!1,n),B.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
bXl(){var w=this.k3
return A.cl(new C.d6r(this,w,B.k.dE(this.fr.length/w)))},
bKG(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.bXl()
if(m==="scramble"){m=o.r
m===$&&A.c()
w=x.l
return A.v(A.a([A.d(m,n,n,n,n,n,n,B.oG,n,n,n),A.d("Words "+o.bg+"/5",n,n,n,n,n,n,B.Cp,n,n,n),B.aa,A.d("Tap letters below to fill each slot",n,n,n,n,n,n,A.l(n,n,A.X(166,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.S,A.c6(B.fI,A.io(o.ay.length,new C.d69(o),!0,w),B.bx,6,6),B.aN,A.c6(B.fI,A.io(o.ch.length,new C.d6a(o),!0,w),B.bx,8,8),B.aN,new A.a4(1/0,n,A.i8(D.fbh,o.gbAv(),A.fk(n,n,B.aD,n,n,n,n,n,n,B.c,n,n,B.ce,n,n,n,n,n,n,n)),n)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="typing"){m=o.w
m===$&&A.c()
return new C.apO(m,o.e,new C.d6b(o),new C.d6c(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&A.c()
m=A.a([A.d(m,n,n,n,n,n,n,B.oG,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(A.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,B.Cp,n,n,n))
m.push(B.aa)
if(o.a.e==="sequence"){w=o.aw
w===$&&A.c()
w+=", ?"}else w=o.CW
m.push(A.f1(B.A,A.d(w,n,n,n,n,n,n,B.oF,B.L,n,n),B.f,B.ds))
m.push(B.aN)
w=o.x
B.d.v(m,new A.J(w,new C.d6d(o),A.U(w).k("J<1,r>")))
return A.v(m,B.m,n,B.e,B.j,0,B.p)}if(m==="puzzle")return A.cl(new C.d6e(o))
if(m==="simon"){m=o.r
m===$&&A.c()
return A.v(A.a([A.d(m,n,n,n,n,n,n,B.oG,n,n,n),A.d("Progress "+o.p3+"/21",n,n,n,n,n,n,B.Cp,n,n,n),B.P,A.D(A.lN(1,A.io(4,new C.d6f(o),!0,x.l),2,10,10,n,B.dO,!1),1)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="pattern")return A.cl(new C.d6g(o))
if(m==="color"){u=A.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[B.dC,B.dv,B.hJ,B.qJ]
m=o.r
m===$&&A.c()
m=A.d(m,n,n,n,n,n,n,B.oG,n,n,n)
w=A.d("Round "+o.b4+"/5",n,n,n,n,n,n,B.Cp,n,n,n)
v=o.aC
v===$&&A.c()
s=o.aN
s===$&&A.c()
s=A.a([m,w,B.aa,A.d(v,n,n,n,n,n,n,A.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.aN],x.p)
r=J.e1(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=A.fk(n,n,A.X(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,B.c,n,n,B.f2,n,n,n,n,n,n,n)
r[q]=new A.C(B.cM,new A.a4(1/0,n,A.i8(new A.x(u[q],n,B.cs,n,n,n,n,n,n,n,n,n),new C.d6h(o,u,q),m),n),n)}B.d.v(s,r)
return A.v(s,B.m,n,B.e,B.j,0,B.p)}if(m==="reflex"){m=o.y
p=m?B.bl:B.cd
w=o.r
w===$&&A.c()
w=A.d(w,n,n,n,n,n,n,B.a5e,B.L,n,n)
v=A.d("Fast taps "+o.Y+"/5",n,n,n,n,n,n,D.eJL,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=A.d(m,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,n,n,n,Math.min(A.aI(s,B.bR,x.w).w.a.a*0.18,72),n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return A.r5(A.aH(B.c5,A.dh(n,A.v(A.a([w,B.P,v,B.b6,s,B.b6,new A.C(B.Ed,A.d(m,n,n,n,n,n,n,A.l(n,n,A.X(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),B.m,n,B.b7,B.j,0,B.p),p,n,B.bb,n,T.zZ,n,n,n,n,n,n,n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gbQ5(),n,n,n,n,n,n,!1,B.ac))}if(B.d.t(D.Oz,m)&&o.aZ!=null){m=o.a.e
w=o.aZ
w.toString
return C.hK4(m,new C.d6i(o),new C.d6j(o),o.d,w)}m=o.r
m===$&&A.c()
return A.au(A.d(m,n,n,n,n,n,n,B.dj,n,n,n),n,n,n)}}
C.ak2.prototype={
S(){return new C.bdU()},
cJm(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bdU.prototype={
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.a,a0=d.c,a1=d.d
d=A.aI(a2,B.e6,x.w).w
w=x.p
v=A.a([A.bL3(!1,f.a.r,"INVESTMENT PLANS",e),B.d4],w)
u=a0.x
if(u!=null){t=u.d.bP()
s=B.a.aU(B.o.u(A.bF(t)),2,"0")
r=B.a.aY(B.o.u(A.bx(t)+1),2)
q=A.m(18)
p=A.I(F.UX,B.r,2.2)
o=x.V
n=A.a([new A.ac(0,B.G,A.X(89,B.qb.l()>>>16&255,B.qb.l()>>>8&255,B.qb.l()&255),B.eQ,20),new A.ac(0,B.G,A.X(102,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dp,14)],o)
m=A.an(e,A.p(e,e,B.f,e,e,new A.o(A.X(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),e,e,e,e,e,B.a6),e,120,e,e,e,e,e,120),e,e,e,-20,-24,e)
l=A.m(10)
k=A.I(F.UX,B.r,3.4)
o=A.a([new A.ac(0,B.G,A.X(166,B.qb.l()>>>16&255,B.qb.l()>>>8&255,B.qb.l()&255),B.dz,10),new A.ac(0,B.G,A.X(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cH,6)],o)
o=A.A(A.a([A.p(e,e,B.f,e,e,new A.o(e,e,k,l,o,new A.a5(B.ax,B.aC,B.x,D.cRk,D.cu4,e),B.n),e,42,e,e,e,e,e,56),B.b6,f.b2L(a2,!0)],w),B.m,e,B.e,B.j,0,e,e)
l=A.Cx(u.a,1,B.a2,D.eQY)
k=u.b
j=u.c
i=A.Cx("Making $"+A.dy(k*j)+" Daily",1,B.a2,D.eRa)
h=A.Cx(f.aYT(k),1,B.a2,D.eKs)
r=A.A(A.a([A.D(A.v(A.a([D.f4T,A.Cx(a0.c,1,B.a2,D.aMc)],w),B.F,e,B.e,B.j,0,B.p),1),A.v(A.a([D.f4F,A.d(s+"/"+r,e,e,e,e,e,e,D.aMc,e,e,e)],w),B.dG,e,B.e,B.j,0,B.p)],w),B.m,e,B.e,B.j,0,e,e)
s=A.p(e,e,B.f,A.X(89,D.wk.l()>>>16&255,D.wk.l()>>>8&255,D.wk.l()&255),e,e,e,1,e,e,e,e,e,e)
j=A.A(A.a([f.aoH("INVESTED","$"+A.dy(k),!0),f.aoH("DAILY ROI",B.k.a9(j*100,2)+"%",!0),f.aoH("DAYS LEFT",""+(261-u.f)+" d",!0)],w),B.m,e,B.hH,B.j,0,e,e)
k=A.dy(u.e)
u=u.f
g=261-u>0?"ACTIVE":"ENDED"
B.d.v(v,A.a([D.faT,B.tT,A.p(e,new A.am(B.X,e,B.a9,B.q,A.a([m,A.v(A.a([o,B.P,D.f3r,B.bB,l,B.av,i,B.av,h,B.P,r,B.aq,s,B.aq,j,B.av,A.Cx("Earned $"+k+" \u2022 Clocked "+u+"/261 \u2022 "+g,1,B.a2,D.eQm)],w),B.F,e,B.e,B.Q,0,B.p)],w),e),B.f,e,e,new A.o(e,e,p,q,n,D.bLC,B.n),e,e,e,e,B.bA,e,e,1/0),B.a4w],w))}v.push(D.eWU)
v.push(B.tT)
B.d.v(v,new A.J(a1,new C.daF(f,a2),A.U(a1).k("J<1,r>")))
return A.cb(e,B.K,A.bq(!1,A.ci(A.v(v,B.F,e,B.e,B.j,0,B.p),B.q,e,B.z,e,new A.N(20,10,20,124+d.r.d),e,e,B.aj),!0,!1,B.ah,!0,!0),e,!1,!1,e,e)},
b2L(d,e){var w=null,v=A.X(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(8),t=A.I(B.j2,B.r,1)
return A.p(w,A.A(A.a([A.W(B.ahw,B.c,w,w,w,16),B.d8,A.d("TAP",w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eD,w,w,w)},
aYT(d){var w=B.a.aU(B.o.u(B.k.U(d*100)),4,"0")
return"****  ****  ****  "+B.a.aY(w,w.length-4)},
aoH(d,e,f){var w=null,v=A.X(217,D.wk.l()>>>16&255,D.wk.l()>>>8&255,D.wk.l()&255)
v=A.d(d,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.v(A.a([v,B.bB,A.Cx(e,w,w,A.l(w,w,E.zI,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),B.F,w,B.e,B.j,0,B.p)},
ccl(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gcNC(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
w=A.I(B.aO,B.r,2)
p=x.V
o=A.a([new A.ac(0,B.G,A.X(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.Qj,16),new A.ac(0,B.G,A.X(115,B.ak.l()>>>16&255,B.ak.l()>>>8&255,B.ak.l()&255),B.dp,14),new A.ac(0,B.G,A.X(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cH,8)],p)
n=A.an(d,A.p(d,d,B.f,d,d,new A.o(d,d,d,d,d,new A.bS(B.A,0.5,B.x,d,0,A.a([A.X(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),A.X(0,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)],x.O),d,d),B.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=A.m(5)
l=A.I(B.c,B.r,2.2)
k=A.b_(4286436348)
k=A.X(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=A.X(B.k.U(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
i=A.b_(4279150057)
h=x.p
p=A.A(A.a([new A.a4(44,44,new A.am(B.X,d,B.a9,B.f,A.a([A.an(d,A.ey(B.A,0.7853981633974483,A.p(d,d,B.f,d,d,new A.o(d,d,l,m,A.a([new A.ac(0.5,B.G,k,B.J,14),new A.ac(0,B.G,j,B.J,6),new A.ac(0,B.G,A.X(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new A.u(0,2),4)],p),D.bKj,B.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.e_C],h),d),d),B.b6,e.b2L(b2,!0)],h),B.m,d,B.e,B.j,0,d,d)
a6=A.Cx(a6,1,B.a2,D.eHi)
i=A.Cx(e.aYT(a3),1,B.a2,D.eVk)
j=A.A(A.a([e.aYk(B.k.a9(2.86,2)+"%"),B.e9,e.aYk("261d")],h),B.m,d,B.e,B.j,0,d,d)
k=A.D(A.v(A.a([D.eY4,A.Cx("$"+A.dy(a3),1,B.a2,D.eU9)],h),B.F,d,B.e,B.j,0,B.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=A.A(A.a([k,A.d(m,d,d,d,d,d,d,D.eI2,d,d,d)],h),B.dG,d,B.e,B.j,0,d,d)
k=A.p(d,d,B.f,A.X(89,B.bv.l()>>>16&255,B.bv.l()>>>8&255,B.bv.l()&255),d,d,d,1,d,d,d,d,d,d)
l=A.A(A.a([A.D(e.avI("Daily","$"+A.dy(a4)),1),B.e9,A.D(e.avI("Total","$"+A.dy(a4*261)),1),B.e9,A.D(e.avI("Days","261"),1)],h),B.m,d,B.e,B.j,0,d,d)
g=q?d:new C.daE(e,b3,a3,t)
f=B.k.U(127.5)
f=A.fk(d,d,B.bj,A.X(f,B.ak.l()>>>16&255,B.ak.l()>>>8&255,B.ak.l()&255),A.X(f,B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255),d,3,d,d,B.aO,d,d,d,d,new A.b7(A.m(10),D.aSr),d,d,d,d,d)
return A.p(d,new A.am(B.X,d,B.a9,B.f,A.a([n,A.v(A.a([p,B.bB,D.f5y,B.bB,a6,B.d5,i,B.ha,j,B.ha,m,B.ha,k,B.ha,l,B.P,new A.a4(1/0,40,A.i8(A.f1(B.A,A.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.eIs,d,d,d),B.f,B.ec),g,f),d)],h),B.F,d,B.e,B.Q,0,B.p)],h),d),B.f,d,d,new A.o(d,d,w,a0,o,D.bMa,B.n),d,d,d,B.kz,D.bjc,d,d,1/0)},
aYk(d){var w=null,v=A.X(115,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(5),t=A.I(B.cl,B.r,1)
return A.p(w,A.d(d,w,w,w,w,w,w,D.eHG,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.Es,w,w,w)},
avI(d,e){var w=null,v=A.X(97,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(7),t=A.I(B.aK,B.r,1)
return A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,D.eQJ,w,w,w),B.tU,A.f1(B.a3,A.d(e,w,w,w,w,w,w,D.eTf,w,w,w),B.f,B.ds)],x.p),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.m3,w,w,w)}}
C.ago.prototype={
S(){var w=null,v=A.a([],x._),u=$.av()
return new C.avf(v,new A.ap(B.as,u),new A.ap(B.as,u),A.mi(0,w,w),new A.hT(),D.PM,C.afd(),A.a([],x.fw),A.b0(x.N),A.mi(0,w,w))}}
C.avf.prototype={
Z(){var w,v,u,t,s,r=this
r.a0()
w=r.a
w.toString
r.d=0
v=A.yO(0,1)
r.e!==$&&A.aR()
r.e=v
r.ay=w.f.aC
w=r.k3=A.bl(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t].a
if(s.length!==0)u.L(0,s)}r.aae()
r.ND()
r.aoj()
r.coM()
r.cp0()
$.aU.x1$.push(new C.cyy(r))
r.a.toString},
ND(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ND=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ao_(),$async$ND)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cxT(t,s))
case 1:return A.h(u,v)}})
return A.i($async$ND,v)},
gaxh(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gNz())return!0
return!1},
gNz(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaRJ(){var w,v=this.CW
if(v==null)return B.bw
w=v.bx(new A.Q(Date.now(),0,!1))
return w.a<0?B.bw:w},
bwa(){var w=this
if(w.a.c.w)return
if(w.gNz()){if(!w.cx)w.m(new C.cxJ(w))}else if(w.cx)w.m(new C.cxK(w))},
cik(){this.m(new C.cy2(this))},
tf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$tf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.m(new C.cy_(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.m(new C.cy0(t))
w=1
break}w=3
return A.b(C.c5G(o.a,s),$async$tf)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return A.b(C.c5H(t.a.c.a,s),$async$tf)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.m(new C.cy1(t,r,q))
t.cqJ()
t.bwa()
if(r===3)t.Xd(r)}case 1:return A.h(u,v)}})
return A.i($async$tf,v)},
Xd(d){return this.bXc(d)},
bXc(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Xd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return A.b(C.bAJ(q,r,new C.cxV(t),d,s.c.a),$async$Xd)
case 3:case 1:return A.h(u,v)}})
return A.i($async$Xd,v)},
wH(d){return this.bxC(d)},
aoj(){return this.wH(!1)},
bxC(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$wH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return A.b(A.a6m(k,C.h9_(l.d)),$async$wH)
case 3:j=m
w=4
return A.b(C.c65(k),$async$wH)
case 4:s=j.a=f
w=5
return A.b(A.aoO(k),$async$wH)
case 5:r=f
w=!s.a&&J.cu(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.TS(!0,l,q,p)
m.a=s
w=8
return A.b(C.ao1(k,s),$async$wH)
case 8:case 7:w=9
return A.b(C.SS(k),$async$wH)
case 9:o=f
w=10
return A.b(C.a5J(k),$async$wH)
case 10:n=f
if(t.c==null){w=1
break}t.m(new C.cxL(m,t,r,o,n))
case 1:return A.h(u,v)}})
return A.i($async$wH,v)},
OP(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ND(),$async$OP)
case 3:s=t.c
if(s==null){w=1
break}r=A.eu(new C.cxY(t),!1,null,x.H)
w=4
return A.b(A.a6(s,!1).ck(r),$async$OP)
case 4:w=5
return A.b(t.ND(),$async$OP)
case 5:case 1:return A.h(u,v)}})
return A.i($async$OP,v)},
csO(){this.m(new C.cyl(this))},
cp0(){var w=this,v=w.go
if(v!=null)v.a8(0)
if(w.a.c.w)return
w.go=A.dF(B.qp,new C.cyf(w))},
cqJ(){var w=this,v=w.id
if(v!=null)v.a8(0)
w.id=null
if(!w.gNz()||w.CW==null)return
w.id=A.dF(B.hc,new C.cyi(w))},
coM(){var w=this,v=w.fy
if(v!=null)v.a8(0)
w.fy=A.dF(B.j3,new C.cye(w))
w.Ef()},
Ef(){return this.cqI()},
cqI(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Ef=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aC
t=4
w=7
return A.b(A.ay(),$async$Ef)
case 7:q=e
p=A.aT(J.q(q.a,"app_config"))
if(p!=null&&p.length!==0){o=B.R.aF(0,p,null)
if(x.f.b(o)){m=A.Ci(A.a_(o,x.N,x.z)).aC
i.a=m
r.a.f.aC=m}}w=10
return A.b(A.JX(),$async$Ef)
case 10:w=e?8:9
break
case 8:w=11
return A.b(A.aNa(),$async$Ef)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aC=l
w=14
return A.b(q.ap("String","app_config",B.R.an(k.ac(),null)),$async$Ef)
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
break}if(i.a!==r.ay)r.m(new C.cyg(i,r))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ef,v)},
b1H(){B.d.b0(this.f,new C.cyd())},
aae(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$aae=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.LH(t.a.c.a),$async$aae)
case 3:q=e
if(t.c==null){w=1
break}s=A.a([],x._)
if(J.cu(q)){B.d.v(s,q)
B.d.b0(s,new C.cxQ())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(A.E(["role","ai","text",r,"at",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z))}t.m(new C.cxR(t,s))
t.a_R(!0)
A.bO(B.jk,new C.cxS(t),x.H)
case 1:return A.h(u,v)}})
return A.i($async$aae,v)},
adG(){var w=0,v=A.j(x.H),u=this
var $async$adG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.alQ(u.a.c.a,u.f),$async$adG)
case 2:return A.h(null,v)}})
return A.i($async$adG,v)},
bq(d){this.bD(d)},
q(){var w,v=this,u=v.fy
if(u!=null)u.a8(0)
u=v.go
if(u!=null)u.a8(0)
u=v.id
if(u!=null)u.a8(0)
u=v.r
w=$.av()
u.R$=w
u.O$=0
u=v.w
u.R$=w
u.O$=0
v.ok.q()
v.x.q()
u=v.e
u===$&&A.c()
u.q()
v.a1()},
a9e(d){var w,v=this
v.m(new C.cxO(v,d))
w=v.e
w===$&&A.c()
if(w.f.length!==0)w.Ak(d,B.cp,B.kx)
else $.aU.x1$.push(new C.cxP(v,d))
if(d===0)v.a_R(!0)
if(d===1)v.cke(!0)},
a_R(d){$.aU.x1$.push(new C.cy5(this,d))},
awV(){return this.a_R(!1)},
a_a(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_a=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_x(),$async$a_a)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==B.a.i(t.a.f.r))t.m(new C.cxZ(t))
case 1:return A.h(u,v)}})
return A.i($async$a_a,v)},
my(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$my=A.e(function(c8,c9){if(c8===1){s.push(c9)
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
return A.b(C.anV(a9.a,b0),$async$my)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return A.b(q.tf(),$async$my)
case 10:q.m(new C.cy6(q))
w=1
break
case 8:w=11
return A.b(q.tf(),$async$my)
case 11:if(q.c!=null&&q.ch===3)q.Xd(3)
case 6:case 4:q.m(new C.cy7(q,c5))
C.SF(q.a.c.a,"user",c5)
q.awV()
t=13
a8={}
w=16
return A.b(q.a_a(),$async$my)
case 16:b1=B.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return A.b(A.a_x(),$async$my)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.m(new C.cy8(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.byP("",null)
q.m(new C.cy9(q,p))
C.SF(q.a.c.a,"ai",p)
q.awV()
r=[1]
w=14
break}o=A.mP(a9)
a9=q.a
n=""
m=C.h9_(a9.d)
w=C.h8T(c5)?20:21
break
case 20:w=22
return A.b(C.c64(q.a.c.a),$async$my)
case 22:q.db=c9
w=23
return A.b(q.wH(!0),$async$my)
case 23:case 21:w=24
return A.b(A.a6m(q.a.c.a,m),$async$my)
case 24:l=c9
k=C.hqI(l)
a9=k
b2=Date.now()
b3=new A.Q(b2,0,!1).bP()
b2=B.a.aU(B.o.u(A.bF(b3)),2,"0")
b4=B.a.aU(B.o.u(A.bP(b3)),2,"0")
b5=B.a.aU(B.o.u(A.dk(b3)),2,"0")
b6=B.a.aU(B.o.u(A.h_(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+A.bx(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return A.b(C.SS(q.a.c.a),$async$my)
case 25:i=c9
h=C.fUp(i,25)
w=26
return A.b(C.a5J(q.a.c.a),$async$my)
case 26:g=c9
f=C.fW2(g)
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
return A.b(C.afe(a9,q.a.c.a,c5),$async$my)
case 27:a0=c9
a1=""
if(C.h8T(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:B.a.i(b2).length!==0)===!0){b2.toString
b8=B.a.i(b2)}else{a9=a9.c
b8=B.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=A.t(d)
b4=A.t(j)
b5=q.a.c.w?"\n"+C.hMS(m)+"\n":""
b6=J.ab(n)!==0?"\n"+A.t(n)+"\n":""
b9=J.ab(a0)!==0?"\n"+A.t(a0)+"\n":""
c0=A.t(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hl4(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+A.t(c5)
w=28
return A.b(A.qr(o,a2,B.hg,null),$async$my)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.byP(a8.a,a3.a)
a4=c2
a5=A.h8f(a4)
c3=a5.a
a8.b=c3
if(B.d.gaj(c3)){a9=A.B(C.hPA(c5),x.an)
a6=a9
J.fW(a6,C.hPB(c5))
J.fW(a6,C.hPC(c5))
J.fW(a6,A.h7I(c5))
J.fW(a6,C.hPF(c5,q.a.c.w))
a8.b=a6}c3=C.hOO(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return A.b(A.afu(c3,a6,m,q.a.c.a),$async$my)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.m(new C.cya(a8,q,a7))
C.SF(q.a.c.a,"ai",a7)
if(J.cu(a8.b)&&q.c!=null)q.IM(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.m(new C.cyb(q))
C.SF(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.m(new C.cyc(q))
q.awV()
q.adG()
if(!q.a.c.w)q.tf()
w=r.pop()
break
case 15:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$my,v)},
cbl(d){var w=A.T(x.N,x.z)
w.n(0,"type",d.a)
w.v(0,d.b)
return w},
cbm(d){var w,v,u,t,s,r,q,p=J.q(d,"phoneActions")
if(!x.j.b(p))return B.i7
w=A.a([],x.Z)
for(v=J.aV(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gT(v)
if(u.b(r)){q=A.c9b(A.a_(r,t,s))
if(q!=null)w.push(q)}}return w},
IM(d){return this.ciO(d)},
ciO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$IM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J.aV(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gT(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return A.b(C.afp(p,o,new C.cy3(t,p)),$async$IM)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return A.b(A.FE(p,null,o,!1,!0,t.a.c.a),$async$IM)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.I(r).f
p.P(new A.b1(new A.x(m,null,null,null,null,null,null,null,null,null,null,null),B.cd,null,null,null,null,null,null,null,null,null,null,null,B.l1,!1,null,null,null,B.q,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return A.b(A.FE(p,l.f,o,k,n,j),$async$IM)
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
return A.b(C.aW4(p,A.a([new C.qU("out_"+1000*o,new A.Q(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$IM)
case 14:t.aoj()
case 13:p=t.c.I(r).f
p.P(new A.b1(new A.x(m,null,null,null,null,null,null,null,null,null,null,null),B.d1,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null))
w=3
break
case 4:case 1:return A.h(u,v)}})
return A.i($async$IM,v)},
Qw(d){return this.crb(d)},
crb(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Qw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return A.b(C.afp(d,n,new C.cyk(t)),$async$Qw)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return A.b(A.FE(d,null,n,!1,!0,t.a.c.a),$async$Qw)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.I(x.q).f.P(A.b2(null,null,null,B.cd,null,B.q,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.l1,null,null,null,null,null,null,null,null,null,null))
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
return A.b(A.FE(d,q.f,r,p,n,o),$async$Qw)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.I(x.q).f.P(A.b2(null,null,null,B.d1,null,B.q,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Qw,v)},
cke(d){$.aU.x1$.push(new C.cy4(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.M(d).ax.a===B.H,j=k?B.da:B.zP,i=m.d
i===$&&A.c()
w=x.O
w=k?A.a([B.acn,D.b5O],w):A.a([B.aI,B.wf],w)
v=A.m(22)
u=A.a([new A.ac(0,B.G,A.X(71,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),B.cv,16)],x.V)
t=m.a.c.w?m.gc75():l
s=A.X(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
r=A.I(B.bZ,B.r,1.5)
t=A.aH(l,A.p(l,C.fKt(m.a.f.Q,48),B.f,l,l,new A.o(s,l,r,l,l,l,B.a6),l,48,l,l,l,l,l,48),B.z,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,B.ac)
r=A.d("NGMY Helper",l,1,B.a2,l,l,l,B.dP,l,l,l)
s=A.p(l,l,B.f,l,l,D.aUv,l,8,l,l,l,l,l,8)
if(m.gaxh()&&m.d===0)q=m.gNz()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=A.p(l,A.A(A.a([t,B.be,A.D(A.v(A.a([r,B.bB,A.A(A.a([s,B.bp,A.D(A.d(q,l,1,B.a2,l,l,l,A.l(l,l,A.X(B.k.U(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,B.cq,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),1),A.aG(l,l,l,l,B.md,l,l,l,new C.cyq(d),l,l,l,l,l,l)],p),B.m,l,B.e,B.j,0,l,l),B.f,l,l,new A.o(l,l,l,v,u,new A.a5(B.ax,B.aC,B.x,w,l,l),B.n),l,l,l,G.ae5,D.bjT,l,l,l)
v=k?D.rt:B.c
u=A.m(14)
t=A.I(k?B.bH:B.e2,B.r,1)
u=A.p(l,A.A(A.a([m.bAg(),m.cqV(1,B.ly,"Music")],p),B.m,l,B.e,B.j,0,l,l),B.f,l,l,new A.o(v,l,t,u,l,l,B.n),l,l,l,l,B.em,l,l,l)
t=m.e
t===$&&A.c()
if(m.gaxh()){v=A.a([],p)
if(m.gNz()){s=A.X(38,B.d1.l()>>>16&255,B.d1.l()>>>8&255,B.d1.l()&255)
r=A.m(12)
q=A.I(A.X(115,B.d1.l()>>>16&255,B.d1.l()>>>8&255,B.d1.l()&255),B.r,1)
v.push(new A.C(B.KE,A.p(l,A.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hp0(m.gaRJ())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.eSJ,B.L,l,l),B.f,l,l,new A.o(s,l,q,r,l,l,B.n),l,l,l,l,B.eu,l,l,1/0),l))}if(m.cy&&!m.gNz()){s=A.X(31,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
r=A.m(12)
q=A.m(12)
o=A.W(B.t6,k?B.iM:B.fX,l,l,l,16)
v.push(new A.C(B.KE,A.aE(!1,B.a1,!0,r,A.aK(!1,q,!0,new A.C(B.eu,A.A(A.a([o,B.bp,A.d("Back to NGMY Helper AI",l,l,l,l,l,l,A.l(l,l,k?B.iM:B.fX,l,l,l,l,l,l,l,l,12,l,l,B.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),B.m,l,B.b7,B.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcij(),l,l,l,l,l,l,l),B.f,s,0,l,l,l,l,l,B.ad),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcsN():l
v.push(A.D(new C.anY(s,q,new C.cyr(),r,o,l),1))
v=A.v(v,B.m,l,B.e,B.j,0,B.p)}else v=m.bAh(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.fWW(r)
t=A.a([w,B.aa,new A.C(B.hE,u,l),B.P,A.D(A.fXV(A.a([v,new C.ao0(q,o,n,new C.cys(m,d),s,l)],p),B.q,t,B.z,new C.cyt(m),l),1)],p)
if(m.d===0&&!m.gaxh()){w=A.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a09:D.a_x
w.push(new A.a4(l,36,A.hK(l,new C.cyu(m),v.length,l,l,B.aX,new C.cyv(),!1),l))}if(m.ax&&m.f.length<=1)w.push(B.P)
v=m.r
u=A.l(l,l,k?B.c:B.bh,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=A.l(l,l,k?B.aA:B.dx,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?B.w:B.c
r=A.X(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=A.m(22)
o=A.m(22)
n=k?B.b9:B.f6
u=A.D(A.aL(l,B.U,!1,l,!0,B.q,l,A.aM(),v,l,l,l,l,l,2,A.bo(l,new A.b4(4,q,B.Z),l,B.Aa,l,l,l,l,!0,new A.b4(4,o,new A.az(n,1,B.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.z,!0,l,!0,l,!1,l,B.ag,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cyw(m),l,!1,l,l,!1,l,!0,l,B.a8,l,l,l,l,l,l,l,l,l,l,l,u,!0,B.a5,l,B.am,l,B.aLa,l,l),1)
s=m.at
r=s?l:m.gcle()
w.push(A.A(A.a([u,new A.HJ(v,B.aI,l),B.bp,A.aE(!1,B.a1,!0,l,A.aK(!1,l,!0,new A.a4(44,44,s?D.dUm:P.ajp,l),B.cJ,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),B.f,B.aI,0,l,l,B.cJ,l,l,B.ad)],p),B.dG,l,B.e,B.j,0,l,l))
w=A.v(w,B.m,l,B.e,B.Q,0,B.p)
v=k?B.kY:B.c
t.push(A.tv(B.rg,A.p(l,new A.C(B.A5,w,l),B.f,l,l,new A.o(v,l,A.I(k?A.X(41,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.X(18,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.r,1),B.rg,l,l,B.n),l,l,l,l,l,l,l,l),14,!1))}return new A.UL(i,new C.cyx(m),A.cb(l,j,A.bq(!0,A.v(t,B.m,l,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),l,!1,!1,l,l),l)},
bAg(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===0
p=this.c
p.toString
v=A.M(p).ax.a===B.H
if(w)p=A.X(B.k.U(255*(v?0.25:0.12)),B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
else p=B.K
u=A.m(11)
t=w?A.I(A.X(B.k.U(127.5),B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),B.r,1):q
s=A.W(B.t8,w?B.aI:B.cU,q,q,q,17)
if(w)r=v?B.c:B.az
else r=B.cU
return A.D(A.aH(q,A.dh(q,A.A(A.a([s,B.bp,A.d("Chat",q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.b7,B.j,0,q,q),q,q,B.bb,new A.o(p,q,t,u,q,q,B.n),B.eL,q,q,q,B.uw,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cxM(this),q,q,q,q,q,q,!1,B.ac),1)},
cqV(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===d
p=this.c
p.toString
v=A.M(p).ax.a===B.H
if(w)p=A.X(B.k.U(255*(v?0.25:0.12)),B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
else p=B.K
u=A.m(11)
t=w?A.I(A.X(B.k.U(127.5),B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),B.r,1):q
s=A.W(e,w?B.aI:B.cU,q,q,q,17)
if(w)r=v?B.c:B.az
else r=B.cU
r=A.a([s,B.bp,A.d(f,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return A.D(A.aH(q,A.dh(q,A.A(r,B.m,q,B.b7,B.j,0,q,q),q,q,B.bb,new A.o(p,q,t,u,q,q,B.n),B.eL,q,q,q,B.uw,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cyj(this,d),q,q,q,q,q,q,!1,B.ac),1)},
bAh(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.baL:A.X(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
w=A.m(18)
v=A.I(d?B.du:B.aK,B.r,1)
u=q===0?1:q
return A.p(s,A.jY(!0,s,t.ok,new C.cxN(t,e,d),u,s,B.c2,s,s,!1,!1),B.f,s,s,new A.o(r,s,v,w,s,s,B.n),s,s,s,B.hE,s,s,s,s)},
aLr(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a8(d),m=J.y(n.h(d,"role"),"user"),l=m?B.i7:this.cbm(d),k=m?B.mg:B.e,j=x.p,i=A.a([],j),h=!m
if(h)B.d.v(i,A.a([new A.a4(28,28,C.fKt(this.a.f.Q,28),o),B.ab],j))
w=m?B.dG:B.F
j=A.a([],j)
if(h)j.push(D.dUC)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=B.aI
else u=e?B.V6:B.aO
t=m?16:4
s=m?4:16
if(m)r=o
else r=A.I(e?B.bH:B.aK,B.r,1)
q=A.a([new A.ac(0,B.G,A.X(10,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dz,6)],x.V)
if(f)n=A.d("typing\u2026",o,o,o,o,o,o,A.l(o,o,e?B.aA:B.dx,o,o,o,o,o,o,o,o,12,B.cC,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=B.c
else p=e?B.af:B.bj
p=A.d(n,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(A.fGC(m,A.p(o,n,B.f,o,o,new A.o(u,o,r,new A.bv(B.kR,B.kR,new A.aZ(t,t),new A.aZ(s,s)),q,o,B.n),o,o,o,o,Aa.Wd,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(A.h8k(l,e,this.gcra()))
i.push(new A.dl(1,B.ch,A.v(j,w,o,B.e,B.j,0,B.p),o))
if(m)i.push(B.d8)
return new A.C(B.db,A.A(i,B.dG,o,k,B.j,0,o,o),o)},
bAf(d,e){return this.aLr(d,e,!1)}}
C.aId.prototype={
Z(){this.a0()
$.xZ().aL(0,this.gDu())},
q(){$.xZ().a2(0,this.gDu())
this.a1()}}
C.aIe.prototype={
Z(){this.a0()
$.xZ().aL(0,this.gDu())},
q(){$.xZ().a2(0,this.gDu())
this.a1()}}
C.aIf.prototype={
Z(){this.a0()
$.xZ().aL(0,this.gDu())},
q(){$.xZ().a2(0,this.gDu())
this.a1()}}
C.aJb.prototype={
Z(){this.a0()
$.xZ().aL(0,this.gDu())},
q(){$.xZ().a2(0,this.gDu())
this.a1()}}
C.UA.prototype={
a3(){return"NgmySnapshotResolveOutcome."+this.b}}
C.alA.prototype={
S(){return new C.aAa()}}
C.aAa.prototype={
Z(){var w,v=this
v.a0()
w=v.a
v.d=w.d
v.e=A.bl(w.e,!0,x.o)
v.f=v.a.f},
kw(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.P(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
zz(d,e){return this.cw9(d,e)},
cw9(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$zz=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dr9(q,e))
t=3
w=6
return A.b(d.$0(),$async$zz)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.m(new C.dra(q))
w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$zz,v)},
zX(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$zX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=t.d
q===$&&A.c()
w=3
return A.b(A.ub(r,q),$async$zX)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dr0(t,s))
case 1:return A.h(u,v)}})
return A.i($async$zX,v)},
a7N(){var w=0,v=A.j(x.gE),u,t=this,s,r,q,p
var $async$a7N=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.zX(),$async$a7N)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&A.c()
q=t.e
q===$&&A.c()
p=t.f
p===$&&A.c()
u=A.Mu(s,A.IP(A.bVu(r,q,s,p).eF(),null,"  "))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a7N,v)},
VX(){var w=0,v=A.j(x.H),u,t=this,s
var $async$VX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oK(s,t.a.c,!1),$async$VX)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zz(new C.dqZ(t),"Preparing download\u2026"),$async$VX)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VX,v)},
Xo(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Xo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oK(s,t.a.c,!1),$async$Xo)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zz(new C.dr8(t),"Creating QR code\u2026"),$async$Xo)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xo,v)},
Xn(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hHM(r),$async$Xn)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.zz(new C.dqY(t,s),"Looking up code\u2026"),$async$Xn)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xn,v)},
ab3(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$ab3=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wx.c2().KT(B.OS,B.t1,!0),$async$ab3)
case 7:r=e
p=r
q=p==null?null:J.fm(p.a)
if(q==null){u=null
w=1
break}if(q.c!=null){p=q.c
p.toString
p=!B.aG.gaj(p)}else p=!1
if(p){p=q.c
p.toString
p=A.ji(p,0,null)
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
case 6:u=A.FA()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ab3,v)},
zd(d,e,f){return this.bCA(d,e,f)},
aMF(d,e){return this.zd(d,!1,e)},
bCz(d){return this.zd(d,!1,!1)},
bCA(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zd=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(t.zX(),$async$zd)
case 3:if(t.c==null){w=1
break}if(!C.bVz(d,t.a.c,null)){t.kw(C.bVA(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&A.c()
s=!C.hkM(d,s)}if(s){t.kw(y.B)
w=1
break}r=d.as
q=J.ck(r)
s=t.c
s.toString
w=4
return A.b(C.hHZ(s,q,t.a.c,d),$async$zd)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=A.lx(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,B.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&A.c()
r=o}w=5
return A.b(A.qY(s,p,r,!1,null,null,d.ax),$async$zd)
case 5:if(t.c==null){w=1
break}t.m(new C.dqX(t,p,r,d))
t.kw("Restored your local Growth Income. Go back to see it updated.")
case 1:return A.h(u,v)}})
return A.i($async$zd,v)},
ab2(){var w=0,v=A.j(x.H),u=this
var $async$ab2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.zz(new C.dr_(u),"Reading file\u2026"),$async$ab2)
case 2:return A.h(null,v)}})
return A.i($async$ab2,v)},
Vg(d){return this.bDQ(d)},
bDQ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Vg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&A.c()
s=new A.d1("local_qr_dep_"+1000*r,q.a,d,B.fn,B.f9,"Admin deposit ($"+A.dy(d)+")",null,null,B.cj,new A.Q(Date.now(),0,!1))
C.c86(t.d,s)
q=t.e
q===$&&A.c()
r=A.B(q,x.o)
r.push(s)
w=3
return A.b(A.qY(t.a.c,t.d,r,!0,null,null,null),$async$Vg)
case 3:w=4
return A.b(t.zX(),$async$Vg)
case 4:if(t.c==null){w=1
break}t.kw("Deposited $"+A.dy(d)+" to your local wallet.")
case 1:return A.h(u,v)}})
return A.i($async$Vg,v)},
b16(d){var w=null
return A.cg(w,w,!0,w,new C.dr6(),d,w,!0,!0,x.N)},
Uo(d){return this.bw4(d)},
bw4(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Uo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return A.b(t.Vg(d.b),$async$Uo)
case 5:w=1
break
case 4:s=d.c
t.kw(s==null?"Could not apply deposit.":s)
case 1:return A.h(u,v)}})
return A.i($async$Uo,v)},
DP(d){return this.cfZ(d)},
cfZ(d){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o,n
var $async$DP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.zX(),$async$DP)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return A.b(C.aYW(d,t.a.c),$async$DP)
case 4:s=f
if(!s.a){u=!1
w=1
break}if(s.b){t.kw("This deposit code was already used.")
u=!0
w=1
break}if(s.d){t.kw(y.y)
u=!0
w=1
break}if(s.c){t.kw(y.j)
u=!0
w=1
break}r=t.c
if(r==null){u=!0
w=1
break}w=5
return A.b(t.b16(r),$async$DP)
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
return A.b(C.c8_(d,o,n.a,r,p),$async$DP)
case 7:w=6
return A.b(t.Uo(f),$async$DP)
case 6:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DP,v)},
DQ(d){return this.cg_(d)},
cg_(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$DQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.zX(),$async$DQ)
case 3:if(t.c==null){w=1
break}w=4
return A.b(C.c7Z(d,t.a.c),$async$DQ)
case 4:s=f
if(!s.a){t.kw(y.m)
w=1
break}if(s.b){t.kw("This deposit code was already used.")
w=1
break}if(s.d){t.kw(y.y)
w=1
break}if(s.c){t.kw(y.j)
w=1
break}r=t.c
if(r==null){w=1
break}w=5
return A.b(t.b16(r),$async$DQ)
case 5:q=f
if(q==null||B.a.i(q).length===0){w=1
break}r=t.a.c
p=B.a.i(q)
o=t.e
o===$&&A.c()
n=t.d
n===$&&A.c()
w=7
return A.b(C.Uc(o,n.a,d,r,p),$async$DQ)
case 7:w=6
return A.b(t.Uo(f),$async$DQ)
case 6:case 1:return A.h(u,v)}})
return A.i($async$DQ,v)},
NR(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.C_()){t.kw("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).ck(A.eu(new C.dr1(),!0,null,x.N)),$async$NR)
case 3:r=e
if(r==null||B.a.i(r).length===0){w=1
break}w=B.a.a_(B.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return A.b(t.zz(new C.dr2(t,r),"Applying deposit\u2026"),$async$NR)
case 6:w=1
break
case 5:w=7
return A.b(t.zz(new C.dr3(t,r),"Loading\u2026"),$async$NR)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NR,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=n?B.j_:B.p4,l=n?B.c:B.M,k=n?B.aP:B.ak,j=n?B.bH:B.w.j(0.06),i=x.p
j=A.A(A.a([A.aK(!1,o,!0,A.p(B.A,A.W(B.ez,l,o,o,o,16),B.f,o,o,new A.o(j,o,o,o,o,o,B.a6),o,38,o,o,o,o,o,38),B.cJ,!0,o,o,o,o,o,o,o,o,o,o,o,new C.drb(d),o,o,o,o,o,o,o)],i),B.m,o,B.e,B.j,0,o,o)
w=A.d("Backup & Restore",o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,B.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=A.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,B.cq,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=A.D(new C.ZT(D.buj,"Download",E.a0r,u?o:p.gbIW(),o),1)
t=A.A(A.a([t,B.eA,A.D(new C.ZT(B.j9,"Show QR",D.d3Y,u?o:p.gbYO(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r
s=A.D(new C.ZT(D.buk,"Upload",B.a_S,u?o:p.gbYM(),o),1)
s=A.A(A.a([s,B.eA,A.D(new C.ZT(B.iO,"Scan QR",D.cHv,u?o:p.gbYN(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r?o:p.gbYL()
r=n?B.c.j(0.06):B.aT.j(0.08)
q=A.m(16)
q=A.a([A.cL(A.a([j,B.ay,w,B.P,v,B.kj,t,B.ay,s,B.ay,new C.bp1(B.qy,"Enter Code",B.a_d,u,o),B.kj,A.p(o,A.A(A.a([A.W(B.h3,B.aT,o,o,o,18),B.aw,A.D(A.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.F,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(r,o,o,q,o,o,B.n),o,o,o,o,B.j5,o,o,o)],i),o,A9.KT,o,o,B.aj,!1)],i)
if(p.r){j=n?B.i3:B.c
w=p.w
if(w==null)w="Working\u2026"
q.push(A.an(0,A.aE(!1,B.a1,!0,o,new A.C(B.Ae,A.A(A.a([I.aK8,B.be,A.D(A.d(w,o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.m,o,B.e,B.j,0,o,o),o),B.f,j,8,o,o,o,o,o,B.ad),o,o,0,0,o,o))}return A.cb(o,m,A.bq(!1,new A.am(B.X,o,B.a9,B.q,q,o),!0,!1,B.ah,!0,!0),o,!1,!1,o,o)}}
C.ZT.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ac(0,B.G,B.d.gak(s).j(0.35),B.dp,16)],x.V),p=B.c.j(0.22)
return A.aE(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(v,A.v(A.a([A.p(v,A.W(w.c,B.c,v,v,v,30),B.f,v,v,new A.o(p,v,v,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.aa,A.d(w.d,v,v,v,v,v,v,B.r6,v,v,v)],x.p),B.m,v,B.b7,B.j,0,B.p),B.f,v,v,new A.o(v,v,v,r,q,new A.a5(B.ax,B.aC,B.x,s,v,v),B.n),v,140,v,v,B.c2,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ad)}}
C.bp1.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ac(0,B.G,B.d.gak(s).j(0.35),B.dp,16)],x.V),p=B.c.j(0.22)
return A.aE(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(v,A.A(A.a([A.p(v,A.W(w.c,B.c,v,v,v,24),B.f,v,v,new A.o(p,v,v,v,v,v,B.a6),v,44,v,v,v,v,v,44),B.eA,A.d(w.d,v,v,v,v,v,v,B.r6,v,v,v)],x.p),B.m,v,B.b7,B.j,0,v,v),B.f,v,v,new A.o(v,v,v,r,q,new A.a5(B.ax,B.aC,B.x,s,v,v),B.n),v,v,v,v,D.blZ,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ad)}}
C.Yx.prototype={
S(){return new C.bgh()}}
C.bgh.prototype={
gatK(){var w=this.e
return w===$?this.e=this.a.d:w},
Z(){var w=this
w.a0()
w.Pt()
w.f=A.dF(B.nq,new C.drf(w))},
q(){var w=this.f
if(w!=null)w.a8(0)
this.a1()},
Pt(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Pt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return A.b(A.ub(q.e,q.f),$async$Pt)
case 3:q=e.a
s=A.bVu(q[3],q[1],t.a.e,q[4])
w=4
return A.b(A.Mu(t.a.e,A.IP(s.eF(),null,"  ")),$async$Pt)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.m(new C.drc(t,r))
case 1:return A.h(u,v)}})
return A.i($async$Pt,v)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=u?B.j_:B.p4,s=u?B.i3:B.c,r=u?B.c:B.bh,q=A.eA(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,B.aN0,v,v,v,1,v,!0),p=A.m(24),o=A.I(B.aT.j(0.35),B.r,1),n=w.d,m=A.pq(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,B.c),l=A.d("Code: "+w.gatK(),v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=A.m(20),j=B.aT.j(0.12),i=A.m(20),h=x.p
i=A.aK(!1,k,!0,A.p(v,A.A(A.a([A.W(B.fE,B.aT,v,v,v,14),B.bp,A.d("Copy code",v,v,v,v,v,v,A.l(v,v,B.aT,v,v,v,v,v,v,v,v,12,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),B.m,v,B.e,B.Q,0,v,v),B.f,v,v,new A.o(j,v,v,i,v,v,B.n),v,v,v,v,B.m2,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.drd(w,d),v,v,v,v,v,v,v)
return A.cb(q,t,new A.C(B.a8,A.v(A.a([A.D(A.p(v,A.v(A.a([B.P,m,B.bu,l,B.P,i,B.ay,A.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.ak,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v)],h),B.m,v,B.b7,B.j,0,B.p),B.f,v,v,new A.o(s,v,o,p,v,v,B.n),v,v,v,v,B.a8,v,v,1/0),1),B.aN,new A.a4(1/0,v,A.bM(B.yM,new C.dre(d),A.bk(B.aT,v,v,v,v,B.fH,v,v,v,v,v,v)),v)],h),B.m,v,B.e,B.j,0,B.p),v),v,!1,!1,v,v)}}
C.Yy.prototype={
S(){return new C.bgi(A.ys(B.wC,B.nc,B.tp))}}
C.bgi.prototype={
q(){this.d.q()
this.a1()},
B(d){var w=null
return A.cb(A.eA(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fbc,w,w,w,1,w,!0),B.w,A.yr(this.d,B.bQ,new C.drg(this,d)),w,!1,!1,w,w)}}
C.acH.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.M(a0).ax.a===B.H,k=l?B.i3:B.c,j=l?B.c:B.M,i=l?B.aP:B.ak,h=l?B.b9:B.e2,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=A.m(26)
w=A.I(B.aT.j(0.35),B.r,1)
v=A.a([new A.ac(0,B.G,B.aT.j(0.16),B.jR,36)],x.V)
u=A.p(m,D.bAm,B.f,m,m,new A.o(m,m,m,A.m(18),B.a0q,D.bJF,B.n),m,58,m,m,m,m,m,58)
t=A.d("Restore local backup?",m,m,m,m,m,m,A.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,B.u,m,m,!0,m,-0.3,m,m,m,m,m,m),B.L,m,m)
s=A.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,A.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),B.L,m,m)
r=l?B.j_:B.p4
q=A.m(18)
p=A.I(B.aT.j(0.22),B.r,1)
o=x.p
g=A.a([new C.OF("Account",B.a.i(this.d),i,j,m),B.S,new C.OF("Balance","$"+A.dy(g.d),i,j,m)],o)
if(d!=null&&B.a.i(d).length!==0)B.d.v(g,A.a([B.S,new C.OF("Investment",d,i,j,m)],o))
g.push(B.S)
g.push(new C.OF("Saved on",""+A.bF(f)+"/"+A.bP(f)+"/"+A.bx(f),i,j,m))
g.push(B.S)
g.push(new C.OF("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=A.p(m,A.v(g,B.F,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.c2,m,m,1/0)
r=B.aR.j(l?0.14:0.12)
q=A.m(14)
p=A.I(B.aR.j(0.35),B.r,1)
n=A.W(B.xj,l?B.aL:B.dn,m,m,m,16)
return A.eB(m,B.K,new A.cZ(B.To,A.bW(new A.C(B.wS,A.v(A.a([u,B.aN,t,B.P,s,B.bu,g,B.ay,A.p(m,A.A(A.a([n,B.ab,A.D(A.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,A.l(m,m,l?B.bJ:B.il,m,m,m,m,m,m,m,m,11.5,m,m,B.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),B.F,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.eu,m,m,1/0),B.d4,A.A(A.a([A.D(A.dX(B.n5,new C.eJG(a0),A.dd(m,m,m,m,m,m,m,m,m,j,m,m,B.ce,m,new A.b7(A.m(14),B.Z),new A.az(h,1,B.r,-1),m,m,m,m)),1),B.aw,A.D(A.bM(D.eWg,new C.eJH(a0),A.bk(B.aT,m,m,m,m,m,B.ce,m,new A.b7(A.m(14),B.Z),m,m,m)),2)],o),B.m,m,B.e,B.j,0,m,m)],o),B.m,m,B.e,B.Q,0,B.p),m),new A.o(k,m,w,e,v,m,B.n),B.bc),m),m,m,m,B.ey,B.cZ,m,m,m)}}
C.OF.prototype={
B(d){var w=this,v=null
return A.A(A.a([new A.a4(92,v,A.d(w.c,v,v,v,v,v,v,A.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),A.D(A.d(w.d,v,v,v,v,v,v,A.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,B.I,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.F,v,B.e,B.j,0,v,v)}}
C.XE.prototype={
S(){return new C.axr(new A.ap(B.as,$.av()),A.kc(!0,null,!0,!0,null,null,!1))}}
C.axr.prototype={
Z(){this.a0()
$.aU.x1$.push(new C.d0f(this))},
q(){var w=this.d
w.R$=$.av()
w.O$=0
this.e.q()
this.a1()},
bYQ(){var w,v=this.c
v.toString
w=B.a.i(this.d.a.a)
A.a6(v,!1).M(w)
return null},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=u?B.i3:B.c,s=u?B.c:B.M,r=u?B.aP:B.ak,q=u?B.j_:B.p4,p=u?B.b9:B.e2,o=A.m(24),n=A.I(B.aT.j(0.35),B.r,1),m=A.a([new A.ac(0,B.G,B.aT.j(0.18),B.fG,32)],x.V),l=A.p(v,A8.ak7,B.f,v,v,new A.o(v,v,v,A.m(18),B.a0q,D.bMk,B.n),v,56,v,v,v,v,v,56),k=A.d("Enter restore code",v,v,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,B.u,v,v,!0,v,-0.3,v,v,v,v,v,v),B.L,v,v),j=A.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),B.L,v,v),i=A.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,B.I,v,v,!0,v,8,v,v,v,v,v,v),h=A.a([new A.tO(A.ae("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bow(new C.d0c())],x.G),g=A.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,B.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return A.eB(v,B.K,new A.cZ(A1.J_,A.bW(new A.C(B.wS,A.v(A.a([l,B.aN,k,B.P,j,B.e_,A.aL(!1,B.U,!1,v,!0,B.q,v,A.aM(),w.d,v,v,v,v,v,2,A.bo(v,v,v,B.Ek,v,v,"",v,!0,new A.b4(4,A.m(16),new A.az(p,1,B.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new A.b4(4,A.m(16),D.aSp),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.z,!0,v,!1,v,!1,w.e,B.ag,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.d0d(w),v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,i,!0,B.L,v,B.lJ,v,v,v,v),B.e_,A.A(A.a([A.D(A.dX(B.n5,new C.d0e(d),A.dd(v,v,v,v,v,v,v,v,v,s,v,v,B.ce,v,new A.b7(A.m(14),B.Z),new A.az(p,1,B.r,-1),v,v,v,v)),1),B.aw,A.D(A.bM(D.eZH,w.gbYP(),A.bk(B.aT,v,v,v,v,v,B.ce,v,new A.b7(A.m(14),B.Z),v,v,v)),2)],f),B.m,v,B.e,B.j,0,v,v)],f),B.m,v,B.e,B.Q,0,B.p),v),new A.o(t,v,n,o,m,v,B.n),B.bc),v),v,v,v,B.KV,B.cZ,v,v,v)}}
C.am4.prototype={
S(){return new C.bgo(B.cG)},
hl(d){return this.x.$1(d)},
bo(){return this.y.$0()}}
C.bgo.prototype={
Z(){var w,v=this
v.a0()
w=v.a
w.toString
$.rT=$.rT+1
v.r=B.o.N(B.o.D(C.fn7(w.e,w.d.y2),1,600))
w=v.a
if(!J.le(w.d.y2,w.e))v.r=C.hNk(v.a.e)
v.w=A.dF(B.hc,new C.dxB(v))},
q(){var w=this.w
if(w!=null)w.a8(0)
this.cac()
C.aXJ()
this.a1()},
cac(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:B.k.D(r.e/w,0,1)
if(v<=0)return
u=A.nF(B.k.a9(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=B.o.u(1000*Date.now())
s=r.a
w.hl(new A.d1(t,s.c.a,u,B.fy,B.f9,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,B.cj,new A.Q(Date.now(),0,!1)))
r.a.bo()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.u8(u,q,"Left early \xb7 +$"+B.k.a9(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
IU(d,e){return this.clR(d,e)},
b0L(d){return this.IU(!1,d)},
clQ(d){return this.IU(d,"")},
clR(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$IU=A.e(function(f,g){if(f===1)return A.f(g,v)
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
C.u8(s,null,o?"No progress":e,q,p,s,null,!1)
s=t.c
if(s==null){w=1
break}w=5
return A.b(C.bAD(s,C.bAh(),C.fNX(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$IU)
case 5:w=1
break
case 4:n=A.nF(B.k.a9(t.a.w*1.46*r,2))
m=r>=1
t.m(new C.dxs(t,n,r))
s=B.o.u(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new A.d1(s,p,n,B.fy,B.f9,q,null,null,B.cj,new A.Q(Date.now(),0,!1))
A.afo(l,!0)
t.a.hl(l)
t.a.bo()
if(m)k="+$"+B.k.a9(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+B.k.a9(n,2)+" ("+B.k.U(r*100)+"% of the prize)"}q=t.a
C.u8(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return A.b(C.bAD(s,C.bAh(),C.fNX(),""+t.e+"/"+t.f,k,q,!0),$async$IU)
case 6:w=7
return A.b(C.afg(t.a.f,k),$async$IU)
case 7:case 1:return A.h(u,v)}})
return A.i($async$IU,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.r
m===$&&A.c()
w=B.o.am(m,60)
v=B.a.aU(B.o.u(B.o.G(m,60)),2,"0")
u=A.aG(n,n,n,n,B.aka,n,n,n,new C.dxv(d),n,n,n,n,n,n)
t=o.a
s=x.p
t=A.D(A.v(A.a([A.d(t.f,n,1,B.a2,n,n,n,B.kS,n,n,n),A.d("Win $"+B.k.a9(t.w*1.46,2)+" \xb7 stake $"+B.k.a9(o.a.w,2),n,n,n,n,n,n,D.eLW,n,n,n)],s),B.F,n,B.e,B.j,0,B.p),1)
r=o.a.c.a
m=m<=10?B.aE:B.c.j(0.1)
q=A.m(99)
q=A.A(A.a([u,t,new C.anz(r,new C.dxw(o),n),B.bp,A.dh(n,A.A(A.a([D.bEL,B.d8,A.d(""+w+":"+v,n,n,n,n,n,n,B.kl,n,n,n)],s),B.m,n,B.e,B.j,0,n,n),n,n,B.bb,new A.o(m,n,n,q,n,n,B.n),B.a1,n,n,n,B.rV,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
m=o.a
v=m.w
w=v*1.46
r=o.e/o.f
m=A.A(A.a([A.D(A.bu(A.m(99),A.m7(B.bH,n,n,9,n,r,new A.ms(B.d.gK(m.r),x.dw)),B.ao),1),B.aw,A.d(""+o.e+"/"+o.f,n,n,n,n,n,n,D.eUx,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
t=A.m(22)
u=A.a([B.d.gK(o.a.r).j(0.35),G.ach],x.O)
p=o.x
return C.aNb(n,D.bbB,A.bq(!0,A.v(A.a([new A.C(D.bo5,q,n),new C.M8(w*r,w,v,n),new A.C(G.aey,m,n),A.D(new A.C(B.W2,A.bu(t,A.bW(A.e3(V.h6U(o.a.e,new V.yz(new C.dxx(o),new C.dxy(o),new C.dxz(o),o.d)),p,n),new A.o(n,n,n,n,n,new A.a5(B.b1,B.b3,B.x,u,n,n),B.n),B.bc),B.ao),n),1)],s),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0))}}
C.a4Y.prototype={
B(d){var w=null,v=A.m(26),u=A.I(B.aR.j(0.5),B.r,1),t=A.a([new A.ac(0,B.G,B.aR.j(0.22),B.J,26)],x.V)
return A.eB(w,B.K,A.p(w,A.v(A.a([A.p(w,D.byB,B.f,w,w,new A.o(B.aR.j(0.16),w,A.I(B.aR,B.r,2),w,w,w,B.a6),w,68,w,w,w,w,w,68),B.ay,D.f7v,B.P,A.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.P,A.d("The count starts again from zero next month.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.aN,new A.a4(1/0,w,A.bM(D.eWX,new C.c2H(d),A.bk(B.aR,w,w,w,B.w,B.fH,w,w,new A.b7(A.m(14),B.Z),w,w,w)),w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,u,v,t,D.bKh,B.n),w,w,w,w,D.bmp,w,w,w),w,w,w,B.af3,B.cZ,w,w,w)}}
C.alz.prototype={
S(){return new C.bgf(null,null)},
gX(d){return this.e}}
C.bgf.prototype={
Z(){var w,v=this,u=null
v.a0()
w=v.d=A.bj(u,B.zY,u,1,u,v)
w.d5()
w.dM$.L(0,new C.dqM(v))
w=A.bj(u,B.lY,u,1,u,v)
w.cE(0)
v.e=w
w=A.bj(u,B.Kp,u,1,u,v)
w.cE(0)
v.f=w
w.d5()
w.dM$.L(0,new C.dqN(v))
if(v.a.c){v.d.cE(0)
v.e.bV(0)
v.f.bV(0)}},
bq(d){var w,v,u=this
u.bD(d)
w=u.a.c
if(w){v=u.d
v===$&&A.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){w=u.d
w===$&&A.c()
w.cE(0)
w=u.e
w===$&&A.c()
w.bV(0)
w=u.f
w===$&&A.c()
w.bV(0)}else if(!w&&d.c){w=u.d
w===$&&A.c()
w.bV(0)
w=u.d
w.sp(0,w.a)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cE(0)
w=u.f
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cE(0)}},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
w.bpY()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.OT[B.o.G(a9.r,5)]:b4
w=!b3&&b4==null?D.OT[B.o.G(a9.w,5)]:b0
b1=b4!=null
if(b1){b3=A.t(b4)
v=b4>0?"+"+b3:b3}else if(w!=null){b3=A.t(w)
if(w>0)b3="+"+b3
v=b3}else v="?"
if(b1)u=b4>0?B.d1:B.bM
else if(w!=null){b1=(w>0?B.d1:B.bM).j(0.45)
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
b3=A.a([A.e8(B.A,A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,b0,A.a([new A.ac(6+e,B.G,B.aD.j(0.4+q*0.3),B.J,32+q*22),new A.ac(3,B.G,B.b8.j(0.2+p*0.25),B.J,40+p*16)],d),b0,B.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=A.p(b0,b0,B.f,b0,b0,new A.o(A.ar(B.bz,B.aL,B.o.G(a3,3)/2).j(a2),b0,b0,b0,A.a([new A.ac(0,B.G,B.aD.j(0.7),B.J,e)],d),b0,B.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(A.dS(new A.iB(A.vG(a4+a3),b0,B.A,!0,b0,a8,b0),new A.u(a6*a0+a5*b2*0.04,a7*a0)))}B.d.v(f,b3)}b3=b2*0.06
e=x.V
f.push(A.dS(A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,A.m(b2*0.5),A.a([new A.ac(b2*0.02,B.G,B.w.j(0.4+b1),B.J,b2*0.14)],e),b0,B.n),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new A.u(0,n+b3)))
b1=A.dj()
d=b1.a
d.$flags&2&&A.ah(d)
d[11]=0.0025
b1.mk(o)
b1.jj(k,k,k,1)
b1.jA(l)
b1.fm(m)
d=b2*0.2
a1=A.m(d)
if(a9.a.c)a2=D.cMF
else{a2=A.ar(B.c,B.k0,q*0.45)
a2.toString
a2=A.a([a2,B.bN,B.cl],x.O)}a4=A.ar(B.bI,B.aD,q*0.65)
a4.toString
a4=A.I(a4,B.r,3)
e=A.a([new A.ac(0,B.G,B.w.j(0.3),D.dRz,16)],e)
if(!a9.a.c)e.push(new A.ac(p*3,B.G,B.aD.j(0.3+q*0.4),B.J,24+p*16))
e.push(new A.ac(0,B.G,B.c.j(0.9),B.Qj,0))
g=A.a([],g)
if(!a9.a.c)g.push(A.bZ(0,A.bW(b0,new A.o(b0,b0,b0,A.m(d),b0,new A.a5(new A.da(-1+Math.cos(j)*0.8,-1),new A.da(1,1),B.x,A.a([B.c.j(0),B.c.j(0.28+p*0.25),B.c.j(0)],x.O),b0,b0),B.n),B.bc),0,0,0))
g.push(A.an(b0,A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,A.m(6),b0,new A.a5(B.a3,B.a7,B.x,A.a([B.c.j(0.95),B.c.j(0)],x.O),b0,b0),B.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=A.a([new A.cO(B.w.j(0.18),B.dz,5)],x.C)
if(!a9.a.c)d.push(new A.cO(B.aD.j(0.4+q*0.35),B.J,12+p*10))
g.push(A.au(A.wf(A.d(v,b0,b0,b0,b0,b0,b0,A.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,B.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),B.bb,B.jk,b3),b0,b0,b0))
f.push(A.dS(A.fq(B.A,A.p(b0,new A.am(B.X,b0,B.a9,B.q,g,b0),B.f,b0,b0,new A.o(b0,b0,a4,a1,e,new A.a5(B.ax,B.aC,B.x,a2,b0,b0),B.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new A.u(0,n)))
return new A.a4(h,h,new A.am(B.A,b0,B.a9,B.f,f,b0),b0)}}
C.aIL.prototype={
aP(){this.aX()
this.aV()
this.dD()},
q(){var w=this,v=w.b1$
if(v!=null)v.a2(0,w.gdB())
w.b1$=null
w.a1()}}
C.M8.prototype={
B(d){var w=null,v=new C.c4J(),u=v.$3("STAKE","$"+B.k.a9(this.e,2),B.c),t=A.m(18),s=A.I(B.bs.j(0.7),B.r,1.4),r=A.a([new A.ac(0,B.G,B.aT.j(0.35),B.J,14)],x.V),q=x.p
return new A.C(B.KE,A.A(A.a([u,A.p(w,A.v(A.a([D.f6e,A.mI(new C.c4I(),w,B.bb,B.mK,w,new A.bm(w,this.c,x.e7),x.gR)],q),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(w,w,s,t,r,D.akX,B.n),w,w,w,w,B.KQ,w,w,w),v.$3("FULL WIN","$"+B.k.a9(this.d,2),B.bJ)],q),B.m,w,B.e,B.j,0,w,w),w)}}
C.anz.prototype={
B(d){var w=null,v=A.m(99),u=A.I(B.jh.j(0.7),B.r,1)
return A.p(w,A.A(A.a([D.bx3,B.d8,C.aoo(this.d,B.nP,this.c)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(w,w,u,v,w,D.akX,B.n),w,w,w,w,B.L_,w,w,w)},
gdS(){return this.c}}
C.Mg.prototype={
S(){return new C.bgU(null,null)}}
C.bgU.prototype={
Z(){var w,v=this
v.a0()
w=A.bj(null,B.lY,null,1,null,v)
v.d!==$&&A.aR()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bqy()},
aKm(d,e){var w=this.a.d,v=A.U(w).k("J<1,n>"),u=A.B(new A.J(w,C.hTg(),v),v.k("ai.E"))
w=this.d
w===$&&A.c()
return A.c5(w,new C.dQ8(this,u),null)},
B(d){var w=null
if(this.a.e)return A.cb(w,D.abJ,A.bq(!0,this.aKm(0,d),!0,!1,B.ah,!0,!0),w,!1,!1,w,w)
return this.aKm(0,d)},
aul(d,e,f){var w=null,v=f.j(0.16),u=A.m(10)
return A.A(A.a([A.p(w,A.W(d,f,w,w,w,17),B.f,w,w,new A.o(v,w,w,u,w,w,B.n),w,32,w,w,w,w,w,32),B.aw,A.D(A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.aJk.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
C.abx.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=A.aI(d,B.e6,o).w.r.d,m=this.c,l=J.cD(m),k=l.eE(m,new C.dQb()).gJ(0),j=new A.e4(l.dn(m,new C.dQc(),x.cD),x.bG).cG(0,0,new C.dQd())
o=A.aI(d,B.bR,o).w
w=x.p
v=A.a([B.S,A.p(p,p,B.f,p,p,new A.o(B.b9,p,p,A.m(2),p,p,B.n),p,4,p,p,p,p,p,42),new A.C(B.aeM,A.A(A.a([A.p(p,D.bH6,B.f,p,p,new A.o(p,p,p,A.m(14),A.a([new A.ac(0,B.G,B.fd.j(0.45),B.J,14)],x.V),D.akR,B.n),p,44,p,p,p,p,p,44),B.be,D.bqa,A.aG(p,p,p,p,B.l9,p,p,p,new C.dQe(d),p,p,p,p,p,p)],w),B.m,p,B.e,B.j,0,p,p),p)],w)
if(l.gci(m)){u=C.fIY("GAMES",""+l.gJ(m),B.ex)
t=C.fIY("WON",""+k,B.jh)
s=j>=0
r=s?"+":"-"
q=C.bx4(j)
s=s?B.jh:B.f8
v.push(new A.C(D.bkC,A.A(A.a([u,B.ab,t,B.ab,C.fIY("NET",r+q,s)],w),B.m,p,B.e,B.j,0,p,p),p))}if(l.gaj(m))v.push(new A.C(new A.N(24,36,24,24+n),A.v(A.a([A.W(D.bt5,B.c.j(0.35),p,p,p,52),B.aa,A.d("No game receipts yet",p,p,p,p,p,p,A.l(p,p,B.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.aq,A.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,A.l(p,p,B.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),B.L,p,p)],w),B.m,p,B.e,B.j,0,B.p),p))
else v.push(new A.dl(1,B.ch,A.hK(p,new C.dQf(this),l.gJ(m),new A.N(14,2,14,16+n),p,B.aj,new C.dQg(),!1),p))
return A.p(p,A.v(v,B.m,p,B.e,B.Q,0,B.p),B.f,p,new A.aX(0,1/0,0,o.a.b*0.88),D.aV9,p,p,p,p,p,p,p,p)}}
C.abw.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.c,g=h.c
if(g)if(!B.a.t(h.e.toLowerCase(),"%")){w=h.w
w=w!=null&&h.d<w
v=w}else v=!0
else v=!1
u=g&&B.a.a_(h.e.toLowerCase(),"draw")
w=!g
if(w)t="LOST"
else if(u)t="DRAW"
else{s=v?"PARTIAL":"WON"
t=s}if(w)r=B.cx
else if(u)r=B.dy
else{w=v?B.aL:B.bs
r=w}q=h.gbc_()
w=new C.dQa()
s=A.m(14)
p=A.a([r.j(0.13),D.baH],x.O)
o=A.I(r.j(0.4),B.r,1)
n=A.W(g?B.m7:B.cu,r,i,i,i,16)
m=A.D(A.d(h.b,i,1,B.a2,i,i,i,B.u_,i,i,i),1)
l=r.j(0.2)
k=A.m(99)
k=A.p(i,A.d(t,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,B.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),B.f,i,i,new A.o(l,i,i,k,i,i,B.n),i,i,i,i,D.bo0,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bx4(q)}else{l=g?"+":"-"
l+=C.bx4(h.d)}j=x.p
l=A.A(A.a([n,B.bp,m,k,B.bp,A.d(l,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.m,i,B.e,B.j,0,i,i)
k=C.dQ9("STAKE",w.$1(h.w),B.c)
w=A.A(A.a([k,B.d8,C.dQ9("PAID",C.bx4(g?h.d:0),r),B.d8,C.dQ9("BEFORE",w.$1(h.x),B.ex),B.d8,C.dQ9("AFTER",w.$1(h.y),B.dy)],j),B.m,i,B.e,B.j,0,i,i)
n=C.hOS(h.f)
h=B.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return A.p(i,A.v(A.a([l,B.aq,w,B.av,A.d(n+h,i,1,B.a2,i,i,i,A.l(i,i,B.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.ai,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(i,i,o,s,i,new A.a5(B.ax,B.aC,B.x,p,i,i),B.n),i,i,i,i,B.l2,i,i,i)}}
C.ay5.prototype={
S(){return new C.bcD(B.cG,null,null)}}
C.bcD.prototype={
Z(){var w,v,u,t=this
t.a0()
w=A.bj(null,B.lZ,null,1,null,t)
w.cE(0)
t.d=w
v=J.e1(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.abW(40+w.ag()*260,-20+w.ag()*40,1.5+w.ag()*3,w.ag()*3.141592653589793,0.7+w.ag()*0.3,12+w.ag()*16,[X.a1q,B.qJ,B.cR,B.c][w.aD(4)],[B.hX,B.l3,B.dS,B.EI][w.aD(4)])
t.f=v},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bps()},
B(d){var w=null,v=this.d
v===$&&A.c()
return A.au(A.aE(!1,B.a1,!0,w,A.c5(v,new C.d7g(this,d),w),B.f,B.K,0,w,w,w,w,w,B.ad),w,w,w)}}
C.abW.prototype={
gX(d){return this.f}}
C.aIg.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
C.aYw.prototype={
B(d){return new A.tY(new C.c7_(this),null,new A.h1(A.a([$.xZ(),$.a18()],x.U)),null)},
gdS(){return this.c}}
C.LK.prototype={
c4j(){if(this.c!=null)this.m(new C.bWO())}}
C.Hu.prototype={}
C.an1.prototype={
S(){return new C.aAW(B.cG,new A.ap(B.as,$.av()))},
cxI(){return this.d.$0()},
cIT(){return this.f.$0()},
cIH(d,e){return this.r.$2(d,e)},
cJv(d,e,f){return this.w.$3$bonus(d,e,f)},
gdS(){return this.c}}
C.aAW.prototype={
q(){var w=this.e
w.R$=$.av()
w.O$=0
this.a1()},
aqm(){var w=A.d3(B.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
zZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$zZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.aqm()
if(s<2){t.aum("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cxI()<s){t.aum("Insufficient balance.")
w=1
break}if(!t.a.cIH(s,"Dice Roll bet")){t.aum("Could not place bet.")
w=1
break}t.a.toString
t.m(new C.dJb(t))}w=3
return A.b(C.c3U(t.a.e),$async$zZ)
case 3:r=t.a
q=C.hQX(r.e,r.c,t.d)
t.a.cIT()
A.aX6(t.a.e)
t.m(new C.dJc(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return A.b(A.bO(new A.b9(1000*(40+p*6)),null,r),$async$zZ)
case 7:if(t.c==null){w=1
break}new C.dJd(t).$0()
t.c.e3()
case 5:++p
w=4
break
case 6:w=8
return A.b(A.bO(B.jl,null,r),$async$zZ)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.fML(q)
t.m(new C.dJe(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cJv(m,"Dice Roll "+n,o)
t.m(new C.dJf(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+B.k.a9(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.a9(m,2)+" added to your balance"
w=12
return A.b(C.bAD(r,C.bAh(),new C.dJg(t),n,k,"YOU WIN!",!0),$async$zZ)
case 12:w=13
return A.b(C.afg("Dice Roll",l?"+$"+B.k.a9(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.a9(m,2)+" added to your balance"),$async$zZ)
case 13:w=10
break
case 11:w=14
return A.b(C.bAD(r,C.bAh(),new C.dJh(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$zZ)
case 14:C.u8(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return A.h(u,v)}})
return A.i($async$zZ,v)},
aum(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.P(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.aqm(),d=x.w,a0=A.aI(a2,B.e6,d).w,a1=Math.min(A.aI(a2,B.bR,d).w.a.a*0.44,200)
d=A.ha(Q.ajj,D.fcU,new C.dJk(a2),f)
w=A.m(20)
v=g.a
u=v.c
t=x.p
w=A.A(A.a([d,B.b6,A.p(f,A.A(A.a([B.ajg,B.bp,C.aoo(v.d,B.jV,u)],t),B.m,f,B.e,B.Q,0,f,f),B.f,f,f,new A.o(B.cR,f,f,w,f,f,B.n),f,f,f,f,B.lw,f,f,f)],t),B.m,f,B.e,B.j,0,f,f)
u=g.z
v=A.X(140,D.Va.l()>>>16&255,D.Va.l()>>>8&255,D.Va.l()&255)
d=A.m(18)
s=A.I(A.X(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
r=g.x
d=A.D(A.p(f,A.au(new C.alz(r,r?g.w:g.r,a1,f),f,f,f),B.f,f,f,new A.o(v,f,s,d,f,f,B.n),f,f,f,f,f,f,f,1/0),1)
v=A.d("Roll lands on one of:",f,f,f,f,f,f,A.l(f,f,B.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,B.a4,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=A.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.OT[q]
o=C.fML(p)
n=p>0?B.bl:B.aE
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new A.aZ(10,10)
i=m?B.c:n.j(0.7)
h=new A.az(i,m?2.5:1.2,B.r,-1)
n=m?A.a([new A.ac(1,B.G,n.j(0.65),B.J,14)],r):B.a0l
m=m?18:15
s.push(new A.bH(1,B.bo,new A.C(B.jn,A.p(B.A,new A.x(o,f,new A.F(!0,B.c,f,f,f,f,m,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f),B.f,f,f,new A.o(k,f,new A.bY(h,h,h,h),new A.bv(j,j,j,j),n,f,B.n),f,l,f,f,f,f,f,f),f),f))}d=A.a([d,B.aa,v,B.aq,A.A(s,B.m,f,B.e,B.j,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.fML(v)
s=g.r
s.toString
d.push(new A.C(B.kB,A.d("Landed on "+v,f,f,f,f,f,f,A.l(f,f,s>0?B.bf:B.cx,f,f,f,f,f,f,f,f,20,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(B.S)
d.push(new A.bI(B.a3,f,f,A.d("Bet Amount",f,f,f,f,f,f,A.l(f,f,A.X(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,B.I,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(B.aq)
v=x.bL
v=A.B(new A.J(A.a([2,5,10,25],x.n),new C.dJl(g),v),v.k("ai.E"))
s=g.y
r=A.X(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v.push(A.D(new A.C(B.WH,A.aL(f,B.U,!1,f,!0,B.q,f,A.aM(),g.e,f,f,f,f,f,2,A.bo(f,new A.b4(4,A.m(10),B.Z),f,B.jK,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,B.lg,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),B.z,!0,f,!0,!s,!1,f,B.ag,f,f,f,f,f,B.dK,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,B.a8,f,f,f,f,f,f,f,f,f,f,f,B.hj,!0,B.L,f,B.am,f,f,f,f),f),1))
d.push(A.A(v,B.m,f,B.e,B.j,0,f,f))
d.push(B.P)
d.push(new A.bI(B.a7,f,f,A.d("Perfect Score Profit: +$"+B.k.a9(g.aqm()*0.46,2),f,f,f,f,f,f,D.eNU,f,f,f),f))
d.push(B.S)
d=A.D(new A.C(B.hE,A.v(d,B.ai,f,B.e,B.j,0,B.p),f),1)
v=g.x?f:g.gciA()
s=A.fk(f,f,B.aD,f,f,f,f,f,f,B.c,f,f,f,f,new A.b7(A.m(14),B.Z),f,f,f,f,f)
return C.aNb(f,D.Vg,A.bq(!0,A.v(A.a([new A.C(D.bor,w,f),new C.M8(u,e*1.46,e,f),A.D(A.v(A.a([d,new A.C(new A.N(14,4,14,8+a0.r.d),new A.a4(1/0,52,A.i8(A.d("\ud83c\udfb2 ROLL ($"+B.k.a9(e,2)+")",f,f,f,f,f,f,B.kT,f,f,f),v,s),f),f)],t),B.m,f,B.e,B.j,0,B.p),1)],t),B.m,f,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0))}}
C.anF.prototype={
S(){return new C.aBc(B.kf,new A.ap(B.as,$.av()))},
cIz(d){return this.e.$1(d)}}
C.aBc.prototype={
gapa(){var w,v=this.r
if(v===$){w=B.o.u(1e4+B.cG.aD(89999))
this.r!==$&&A.bL()
this.r=w
v=w}return v},
gOW(){var w=this.d,v=this.a
return w===B.kf?B.a.i(v.f.a):B.a.i(v.f.b)},
ga72(){var w=this.gOW(),v=A.ae("^\\$+",!0,!1,!1,!1),u=B.a.i(A.aJ(w,v,""))
return u.length===0?"":"$"+u},
q(){var w=this.e
w.R$=$.av()
w.O$=0
this.a1()},
HR(d,e){return this.bD_(d,e)},
bD_(d,e){var w=0,v=A.j(x.H),u=this,t
var $async$HR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.fG(new A.fz(d)),$async$HR)
case 2:A.eL()
t=u.c
if(t!=null)t.I(x.q).f.P(A.b2(null,null,null,null,null,B.q,null,A.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$HR,v)},
OR(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OR=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gOW().length===0){r.c.I(x.q).f.P(A.b2(null,null,null,null,null,B.q,null,A.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}A.jb()
o=B.k.a9(r.a.d,2)
q=r.d===B.kf?A.ct("https://cash.app/"+r.ga72()+"/"+o,0,null):A.ct("bitcoin:"+r.gOW(),0,null)
t=4
w=7
return A.b(A.iN(q,B.fg,null),$async$OR)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===B.kf?r.ga72():r.gOW()
w=10
return A.b(r.HR(n,r.d===B.kf?"Cash App tag":"Bitcoin address"),$async$OR)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===B.kf?r.ga72():r.gOW()
w=11
return A.b(r.HR(n,r.d===B.kf?"Cash App tag":"Bitcoin address"),$async$OR)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$OR,v)},
ZA(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hT().bcI(B.eE),$async$ZA)
case 3:r=e
if(r==null){w=1
break}w=4
return A.b(r.f8(),$async$ZA)
case 4:s=e
t.m(new C.dQy(t,B.a.c7(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return A.h(u,v)}})
return A.i($async$ZA,v)},
c0L(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===B.kf?C.h8a(s.a):B.a.i(s.a)
if(r.length===0){t=v.d===B.kf?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.I(x.q).f.P(A.b2(u,u,u,u,u,B.q,u,A.d(t,u,u,u,u,u,u,u,u,u,u),u,B.T,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.I(x.q).f.P(A.b2(u,u,u,u,u,B.q,u,A.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,B.T,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new A.Q(Date.now(),0,!1).u(0)
w=v.a
t.cIz(new A.d1(s,w.c.a,w.d,B.fn,v.d,r,v.f,v.gapa(),B.dr,new A.Q(Date.now(),0,!1)))
w=v.c
w.toString
A.iJ(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.eA(o,o,o,!0,!0,B.zt,o,1,!0,o,0,!1,o,!1,B.c,o,A.aG(o,o,o,o,B.Fq,o,o,o,new C.dQz(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.eYs,o,o,o,1,o,!0),m=A.m(26),l=A.I(D.eF.j(0.25),B.r,1),k=x.V,j=A.a([new A.ac(0,B.G,B.aZ.j(0.25),B.eQ,24)],k),i=x.p
j=A.p(o,A.v(A.a([A.d("YOU'RE ADDING",o,o,o,o,o,o,A.l(o,o,B.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,B.I,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),B.aq,A.f1(B.A,A.d("$"+A.dy(p.a.d),o,o,o,o,o,o,D.eIk,o,o,o),B.f,B.ds),B.aq,A.d("to your Growth Income wallet",o,o,o,o,o,o,A.l(o,o,D.eF.j(0.85),o,o,o,o,o,o,o,o,12,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,l,m,j,D.bN6,B.n),o,o,o,o,D.bm2,o,o,o)
m=p.bXD()
l=p.axX(1,"Send the money to NGMY Pay",p.c0J())
w=p.axX(2,"Put this code in the payment note",p.bBB())
v=p.d===B.kf
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=A.l(o,o,B.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.axX(3,u,A.aL(o,B.U,!1,o,!0,B.q,o,A.aM(),p.e,o,o,o,o,o,2,A.bo(o,o,o,o,o,o,o,o,!0,new A.b4(4,A.m(18),new A.az(B.c.j(0.08),1,B.r,-1)),o,o,o,o,o,B.rG,!0,o,o,o,o,new A.b4(4,A.m(18),D.aSk),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.eJJ,t,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,B.r6,!0,B.a5,o,B.am,o,o,o,o))
r=p.f!=null
v=r?8:22
u=A.m(20)
s=r?D.eF:B.c
s=A.I(s.j(r?0.5:0.12),B.r,1.4)
q=r?A.v(A.a([A.bu(A.m(14),new A.cZ(D.aTH,new A.DD(p.f,o),o),B.ao),B.P,D.eut,B.av],i),B.m,o,B.e,B.j,0,B.p):A.v(A.a([A.p(o,D.bGh,B.f,o,o,new A.o(D.eF.j(0.12),o,o,o,o,o,B.a6),o,54,o,o,o,o,o,54),B.S,D.f2n,B.d5,A.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p)
v=p.b29(4,"Screenshot of your payment",A.aH(o,A.p(o,q,B.f,o,o,new A.o(B.rG,o,s,u,o,o,B.n),o,o,o,o,new A.N(v,v,v,v),o,o,o),B.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcc1(),o,o,o,o,o,o,!1,B.ac),!0)
u=A.d(p.a.r,o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,1.4,!0,o,o,o,o,o,o,o,o),B.L,o,o)
s=A.m(18)
k=A.a([new A.ac(0,B.G,B.aZ.j(0.45),B.dp,18)],k)
return A.cb(n,B.zt,A.au(new A.cZ(B.a87,A.cL(A.a([j,B.bu,m,B.bu,l,w,t,v,B.aq,u,B.aN,new A.a4(o,56,A.bW(A.lj(D.bF_,D.fce,p.gc0K(),A.fk(o,o,B.K,o,o,o,o,o,o,B.c,o,o,o,B.K,new A.b7(A.m(18),B.Z),o,o,o,o,o)),new A.o(o,o,o,s,k,D.bLM,B.n),B.bc),o)],i),o,D.blx,o,o,B.aj,!1),o),o,o,o),o,!1,!1,o,o)},
bXD(){var w=null,v=new C.dQu(this),u=A.m(18),t=A.I(B.c.j(0.06),B.r,1)
return A.p(w,A.A(A.a([v.$3(B.kf,B.hV,"Cash App"),B.e9,v.$3(B.a2R,D.aj0,"Bitcoin")],x.p),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(B.rG,w,t,u,w,w,B.n),w,w,w,w,B.m3,w,w,w)},
b29(d,e,f,g){var w,v=null,u=x.p,t=A.a([A.p(B.A,A.d(""+d,v,v,v,v,v,v,D.eOC,v,v,v),B.f,v,v,D.aUq,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(A.D(A.p(v,v,B.f,D.eF.j(0.18),v,v,v,v,v,B.uy,v,v,v,2),1))
t=A.v(t,B.m,v,B.e,B.j,0,B.p)
w=g?12:20
return new A.GN(A.A(A.a([new A.a4(34,v,t,v),B.aw,A.D(new A.C(new A.N(0,0,0,w),A.v(A.a([new A.C(B.W_,A.d(e,v,v,v,v,v,v,A2.RH,v,v,v),v),f],u),B.ai,v,B.e,B.j,0,B.p),v),1)],u),B.ai,v,B.e,B.j,0,v,v),v)},
axX(d,e,f){return this.b29(d,e,f,!1)},
c0J(){var w,v,u,t,s=this,r=null,q=s.d===B.kf?s.ga72():s.gOW(),p=A.m(20),o=A.m(20),n=s.d===B.kf,m=n?D.bKJ:D.bMt,l=A.a([new A.ac(0,B.G,(n?D.abX:D.Uj).j(0.35),B.cv,16)],x.V),k=A.m(12)
n=s.d===B.kf
w=n?B.hV:D.aj0
k=A.p(r,A.W(w,n?D.abX:D.Uj,r,r,r,30),B.f,r,r,new A.o(B.c,r,r,k,r,r,B.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=A.d(n,r,r,r,r,r,r,A.l(r,r,B.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===B.kf
t=u?22:13
v=A.d(v,r,1,B.a2,r,r,r,A.l(r,r,B.c,r,r,r,r,r,r,r,r,t,r,r,B.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=A.D(A.v(A.a([n,B.bB,v,B.av,A.A(A.a([D.bBS,B.d8,A.d(s.d===B.kf?"Tap to pay $"+A.dy(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,B.r5,r,r,r)],u),B.m,r,B.e,B.j,0,r,r)],u),B.F,r,B.e,B.j,0,B.p),1)
return A.aE(!1,B.a1,!0,r,A.aK(!1,p,!0,A.ev(A.A(A.a([k,B.be,v,A.aG(r,r,r,r,D.bAX,r,r,r,w?r:new C.dQx(s,q),r,r,r,r,"Copy",r)],u),B.m,r,B.e,B.j,0,r,r),r,new A.o(r,r,r,o,l,m,B.n),r,B.aes,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gc7p(),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ad)},
bBB(){var w,v,u,t,s,r,q,p,o=null,n=A.m(20),m=A.I(B.b2.j(0.35),B.r,1),l=x.p,k=A.a([],l)
for(w=this.gapa().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new A.aZ(12,12)
q=A.a([B.b2.j(0.28),B.b2.j(0.08)],u)
p=new A.az(B.ex.j(0.4),1,B.r,-1)
k.push(A.p(B.A,new A.x(s,o,B.Cq,o,o,o,o,o,o,o,o,o),B.f,o,o,new A.o(o,o,new A.bY(p,p,p,p),new A.bv(r,r,r,r),o,new A.a5(B.b1,B.b3,B.x,q,o,o),B.n),o,52,o,B.jn,o,o,o,42))}return A.p(o,A.v(A.a([A.A(k,B.m,o,B.b7,B.j,0,o,o),B.aa,A.A(A.a([A.D(A.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,A.l(o,o,B.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.ab,A.ha(B.Zj,D.fdW,new C.dQt(this),A.ft(o,o,o,o,o,o,o,o,o,o,o,B.ex,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),B.m,o,B.e,B.j,0,o,o)],l),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(B.rG,o,m,n,o,o,B.n),o,o,o,o,B.bA,o,o,o)}}
C.qT.prototype={
ac(){var w=this
return A.E(["id",w.a,"title",w.b,"start",w.c.ab(),"end",w.d.ab(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.qU.prototype={
ac(){var w=this
return A.E(["id",w.a,"when",w.b.ab(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gTY(){var w=this,v=A.a([],x.s),u=w.d
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
u=w.c
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
v.push(C.fUo(w.b))
u=w.e
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
return B.d.aH(v," \xb7 ")},
gkp(d){return this.c}}
C.lp.prototype={
ac(){var w,v=this,u=A.T(x.N,x.z)
u.n(0,"type",v.a)
w=v.b
if(w.length!==0)u.n(0,"content",w)
w=v.c
if(w!=null&&w.length!==0)u.n(0,"url",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"label",w)
return u}}
C.id.prototype={
ac(){var w,v=this,u=A.T(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"question",v.b)
w=J.b6(v.c,new C.c5Z(),x.P)
w=A.B(w,w.$ti.k("ai.E"))
u.n(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"thumbnailPath",w)
u.n(0,"printable",v.e)
u.n(0,"sortOrder",v.f)
return u}}
C.hZ.prototype={
aix(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.hZ(v,u,t,s,r,h==null?w.f:h)},
b7t(d){var w=null
return this.aix(w,w,w,w,d,w)},
cBi(d,e,f){return this.aix(d,e,null,null,null,f)},
b7s(d){var w=null
return this.aix(w,w,w,d,w,w)},
cAY(d,e){var w=null
return this.aix(w,w,d,w,e,w)},
ac(){var w=this,v=C.hCF(w.c),u=w.e,t=A.U(u).k("J<1,a1<n,@>>")
u=A.B(new A.J(u,new C.c5X(),t),t.k("ai.E"))
return A.E(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.b6h.prototype={}
C.TQ.prototype={
S(){return new C.aBo(new A.ap(B.as,$.av()),A.mi(0,null,null),A.a([],x.m))},
Sy(d){return this.d.$1(d)}}
C.aBo.prototype={
Z(){var w,v=this
v.a0()
w=J.b6(v.a.c,new C.dUd(),x.i)
w=A.B(w,w.$ti.k("ai.E"))
B.d.b0(w,new C.dUe())
v.d=w
v.I_()},
q(){var w=this.w
w.R$=$.av()
w.O$=0
this.x.q()
this.a1()},
abU(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$abU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.I_()
u.m(new C.dU7(u))
t=u.a
t.toString
s=u.d
s===$&&A.c()
w=2
return A.b(t.Sy(s),$async$abU)
case 2:r=e
if(u.c!=null){u.m(new C.dU8(u))
t=u.c.I(x.q).f
s=A.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.P(A.b2(null,null,null,r?B.d1:B.aE,null,B.q,null,s,null,B.T,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$abU,v)},
a6f(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a6f=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&A.c()
s=new C.hZ(q,"New Category",B.EZ,4284773515,D.atr,p.length)
t.m(new C.dTR(t,s))
t.I_()
p=t.c
if(p==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.dTS(s),p,null,!0,!0,x.i),$async$a6f)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dTT(t,q,r))
case 1:return A.h(u,v)}})
return A.i($async$a6f,v)},
a_y(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a_y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=B.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.m(new C.dU4(t,p))
q.bL(0,B.c3)
q=t.a.e
s=t.d
s===$&&A.c()
w=3
return A.b(C.c5U(p,q,s),$async$a_y)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dU5(t,r))
$.aU.x1$.push(new C.dU6(t))
case 1:return A.h(u,v)}})
return A.i($async$a_y,v)},
a8e(d){return this.bHw(d)},
bHw(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a8e=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&A.c()
t=r[d]
r=u.c
r.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.dTZ(t),r,null,!0,!0,x.i),$async$a8e)
case 2:s=f
if(s!=null)u.m(new C.dU_(u,d,s))
return A.h(null,v)}})
return A.i($async$a8e,v)},
bFo(d){this.m(new C.dTY(this,d))
this.I_()},
I_(){var w,v,u=this.d
u===$&&A.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].b7t(v)},
c4P(d,e){var w={}
w.a=e
this.m(new C.dU3(w,this,d))},
X4(d){return this.bWy(d)},
bWy(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$X4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=A.eu(new C.dU2(u,d),!1,null,x.H)
w=2
return A.b(A.a6(s,!1).ck(t),$async$X4)
case 2:return A.h(null,v)}})
return A.i($async$X4,v)},
bxT(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?A.a([B.fs,B.bj],l):A.a([B.oV,B.er],l)
w=A.m(16)
v=A.I(m?B.d6.j(0.35):B.dy,B.r,1)
u=A.W(B.dS,m?B.dy:B.dW,n,n,n,n)
t=A.D(A.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,A.l(n,n,m?B.aO:B.M,n,n,n,n,n,n,n,n,n,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.XK:A7.Lk
r=x.p
s=A.a([A.aK(!1,n,!0,A.A(A.a([u,B.ab,t,A.W(s,m?B.bI:B.ak,n,n,n,n)],r),B.m,n,B.e,B.j,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dTV(o),n,n,n,n,n,n,n)],r)
if(o.r){u=A.a([B.S],r)
t=o.y
if(t.length!==0){q=(m?D.rt:B.c).j(0.65)
p=A.m(12)
u.push(A.p(n,A.jY(!0,n,o.x,new C.dTW(o,d),t.length,n,n,n,n,!1,!1),B.f,n,B.a82,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.cm,n,n,n))}u.push(B.P)
t=o.w
q=A.l(n,n,m?B.aO:B.M,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=A.l(n,n,m?B.bI:B.ak,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?B.bj:B.aO
q=A.D(A.aL(n,B.U,!1,n,!0,B.q,n,A.aM(),t,n,n,n,n,n,2,A.bo(n,new A.b4(4,A.m(14),B.Z),n,B.eN,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.ag,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.dTX(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,q,!0,B.a5,n,B.am,n,n,n,n),1)
m=o.f?n:o.gciN()
p=A.bk(B.bk,n,n,n,n,n,B.j5,n,n,n,n,n)
u.push(A.A(A.a([q,new A.HJ(t,B.bk,n),B.d8,A.bM(o.f?B.pM:D.aj9,m,p)],r),B.dG,n,B.e,B.j,0,n,n))
B.d.v(s,u)}return A.dh(n,A.v(s,B.ai,n,B.e,B.j,0,B.p),n,n,B.bb,new A.o(n,n,v,w,n,new A.a5(B.a3,B.a7,B.x,l,n,n),B.n),B.io,n,n,B.Eh,B.bA,n,n,n)},
B(d){var w,v=this,u=null,t=A.M(d).ax.a===B.H,s=new C.b6h(t),r=t?B.da:B.bN,q=t?B.da:u,p=t?B.aO:B.M,o=A.d("Help Topics Admin",u,u,u,u,u,u,A.l(u,u,t?B.aO:B.M,u,u,u,u,u,u,u,u,u,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gc0P()
if(n)n=B.Rf
else n=A.W(B.xb,t?B.aO:B.M,u,u,u,u)
w=x.p
o=A.eA(A.a([A.ha(n,A.d("Save",u,u,u,u,u,u,A.l(u,u,t?B.aO:B.M,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=R.aSb(B.aI,u,O.Tz,B.nB,D.faH,v.gbul())
q=v.bxT(s)
n=A.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,A.l(u,u,t?B.bI:B.ak,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&A.c()
return A.cb(o,r,A.v(A.a([q,new A.C(B.Eh,n,u),A.D(H.fYM(!1,new C.dUc(v,s),m.length,v.gc4O(),D.bko,u,!1),1)],w),B.ai,u,B.e,B.j,0,B.p),u,!1,!1,p,u)}}
C.O6.prototype={
S(){return new C.b87()}}
C.b87.prototype={
Z(){var w,v=this
v.a0()
w=v.a.c
v.d=new A.ap(new A.bb(w.b,B.b0,B.aM),$.av())
v.e=w.c
v.f=w.d},
q(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.a1()},
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=r?D.rt:B.c,p=A.d("Edit category",s,s,s,s,s,s,A.l(s,s,r?B.c:B.bh,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&A.c()
o=A.aL(s,B.U,!1,s,!0,B.q,s,A.aM(),o,s,s,s,s,s,2,D.bI0,B.z,!0,s,!0,s,!1,s,B.ag,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,A.l(s,s,r?B.c:B.bh,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,B.a5,s,B.am,s,s,s,s)
w=x.aS
w=A.B(new A.J(D.bNs,new C.cGZ(t),w),w.k("ai.E"))
w=A.c6(B.bF,w,B.bx,8,8)
v=x.gN
v=A.B(new A.J(D.cJX,new C.cH_(t),v),v.k("ai.E"))
u=x.p
v=A.ci(A.v(A.a([o,B.aa,w,B.aa,A.c6(B.bF,v,B.bx,0,8)],u),B.m,s,B.e,B.Q,0,B.p),B.q,s,B.z,s,s,s,s,B.aj)
return A.eq(A.a([A.bJ(!1,B.dd,s,s,!0,s,s,new C.cH0(d),s,s),A.bM(B.oL,new C.cH1(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.Zk.prototype={
S(){return new C.aDj()},
ob(d){return this.d.$1(d)}}
C.aDj.prototype={
Z(){this.a0()
this.d=A.bl(this.a.c.e,!0,x.u)},
auo(){var w=this.a,v=w.c,u=this.d
u===$&&A.c()
return w.ob(v.b7s(u))},
a6h(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a6h=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&A.c()
w=2
return A.b(u.aX8(new C.id("q_"+1000*s,"",D.cIA,null,!1,r.length)),$async$a6h)
case 2:t=e
if(t!=null){u.m(new C.eEL(u,t))
u.auo()}return A.h(null,v)}})
return A.i($async$a6h,v)},
aX8(d){var w,v=this.c
v.toString
w=A.eu(new C.eEM(d),!1,null,x.u)
return A.a6(v,!1).ck(w)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=u?B.da:B.bN,s=u?B.da:v,r=u?B.aO:B.M,q=w.a.c
s=A.eA(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,A.d(q.b+" \u2014 Questions",v,v,v,v,v,v,A.l(v,v,u?B.aO:B.M,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=R.aSb(B.aI,v,O.Tz,B.nB,D.ffY,w.gbuL())
q=w.d
q===$&&A.c()
q=q.length
if(q===0){q=A.au(A.d("No questions yet. Tap + Question.",v,v,v,v,v,v,A.l(v,v,u?B.bI:B.ak,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=A.hK(v,new C.eER(w,new C.b6h(u)),q,D.bkx,v,B.aj,new C.eES(),!1)
return A.cb(s,t,u,v,!1,!1,r,v)}}
C.Zj.prototype={
S(){return new C.aDi()}}
C.aDi.prototype={
Z(){var w,v=this
v.a0()
w=v.a.c
v.d=new A.ap(new A.bb(w.b,B.b0,B.aM),$.av())
w=A.bl(w.c,!0,x.bP)
v.e=w
if(B.d.gaj(w))J.cd(v.e,D.a28)
w=v.a.c
v.f=w.d
v.r=w.e},
q(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.a1()},
abT(){var w=0,v=A.j(x.H),u=this,t
var $async$abT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(Z.FB(78,1920),$async$abT)
case 2:t=e
if(t!=null)u.m(new C.eEH(u,t))
return A.h(null,v)}})
return A.i($async$abT,v)},
acW(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$acW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=A.eu(new C.eEF(u),!1,null,x.dZ)
w=2
return A.b(A.a6(r,!1).ck(t),$async$acW)
case 2:s=e
if(s!=null)u.m(new C.eEG(u,s))
return A.h(null,v)}})
return A.i($async$acW,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.M(a1).ax.a===B.H,g=h?B.da:B.bN,f=h?B.da:i,e=h?B.aO:B.M,d=A.d("Edit Question",i,i,i,i,i,i,A.l(i,i,h?B.aO:B.M,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=A.eA(A.a([A.dp(S.Zs,B.oL,new C.eEJ(j,a1),A.bk(B.aI,i,i,i,B.c,i,i,i,i,i,i,i)),B.aw],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=A.d("Question thumbnail",i,i,i,i,i,i,A.l(i,i,h?B.aO:B.M,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=A.m(14)
w=j.f
v=h?B.bI:B.ak
w=A.aH(i,A.bu(e,K.aNe(A.m(14),B.bQ,140,B.Aw,v,w,1/0),B.ao),B.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gc0O(),i,i,i,i,i,i,!1,B.ac)
e=A.d("Question users will tap",i,i,i,i,i,i,A.l(i,i,h?B.aO:B.M,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?B.bj:B.aO
u=A.m(16)
t=A.I(h?B.aJ:B.aK,B.r,1)
s=j.d
s===$&&A.c()
r=A.l(i,i,h?B.aO:B.M,i,i,i,i,i,i,i,i,15,i,i,B.a4,i,i,!0,i,i,i,i,i,i,i,i)
v=A.p(i,A.A(A.a([A.D(A.aL(i,B.U,!1,i,!0,B.q,i,A.aM(),s,i,i,i,i,i,2,A.bo(i,B.ev,i,B.bm,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,i,i,i,B.cq,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),B.z,!0,i,!0,i,!1,i,B.ag,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,B.a8,i,i,i,i,i,i,i,i,i,i,i,r,!0,B.a5,i,B.am,i,i,i,i),1),new A.HJ(j.d,i,i)],a0),B.m,i,B.e,B.j,0,i,i),B.f,i,i,new A.o(v,i,t,u,i,i,B.n),i,i,i,i,B.em,i,i,i)
u=A.d("Printable document",i,i,i,i,i,i,A.l(i,i,h?B.aO:B.M,i,i,i,i,i,i,i,i,i,i,i,B.a4,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=A.iA(B.aI,i,i,B.ah,i,new C.eEK(j),i,A.d("Shows a printable badge on this answer",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=A.d("Stored answer (not AI)",i,i,i,i,i,i,A.l(i,i,h?B.aO:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=A.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.rt:B.c
q=A.m(16)
p=A.m(16)
o=A.m(16)
n=A.I(B.bk.j(0.45),B.r,1)
m=A.p(i,D.bzJ,B.f,i,i,new A.o(B.bk.j(0.12),i,i,A.m(12),i,i,B.n),i,i,i,i,B.bm,i,i,i)
l=A.d("Open Document Editor",i,i,i,i,i,i,A.l(i,i,h?B.aO:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&A.c()
k=J.ab(k)
l=A.D(A.v(A.a([l,B.av,A.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),B.F,i,B.e,B.j,0,B.p),1)
return A.cb(d,g,A.cL(A.a([f,B.P,w,B.d4,e,B.P,v,B.aN,u,B.P,t,B.av,s,B.aa,A.aE(!1,B.a1,!0,q,A.aK(!1,p,!0,A.p(i,A.A(A.a([m,B.eA,l,A.W(B.AD,h?B.bI:B.ak,i,i,i,16)],a0),B.m,i,B.e,B.j,0,i,i),B.f,i,i,new A.o(i,i,n,o,i,i,B.n),i,i,i,i,B.fv,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gc6n(),i,i,i,i,i,i,i),B.f,r,0,i,i,i,i,i,B.ad)],a0),i,B.c2,i,i,B.aj,!1),i,!1,!1,i,i)}}
C.cYq.prototype={}
C.TR.prototype={
S(){return new C.aBq(A.kc(!0,null,!0,!0,null,null,!1))}}
C.aBq.prototype={
Z(){var w,v,u,t,s,r,q=this
q.a0()
w=J.dG(q.a.c,new C.dUO())
w=A.B(w,w.$ti.k("G.E"))
q.e=w
v=A.a([],x.s)
for(w=J.aV(q.a.c);w.C();){u=w.gT(w)
switch(u.a){case"heading":v.push("## "+u.b)
break
case"text":u=u.b
if(B.a.i(u).length!==0)v.push(u)
break
case"bullets":for(u=u.b.split("\n"),t=u.length,s=0;s<t;++s){r=B.a.i(u[s])
if(r.length!==0)v.push("\u2022 "+r)}break
default:break}}w=B.d.aH(v,"\n\n")
q.d=new A.ap(new A.bb(w,B.b0,B.aM),$.av())},
q(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.f.q()
this.a1()},
aup(d,e){var w,v,u,t,s,r=this.d
r===$&&A.c()
r=r.a
w=r.b
if(!w.gep())return
v=r.a
r=w.a
u=w.b
t=d+B.a.ao(v,r,u)+e
s=B.a.od(v,r,u,t)
this.d.bL(0,new A.bb(s,A.h6(B.bt,r+t.length),B.aM))},
aVl(d){var w,v,u,t,s=this.d
s===$&&A.c()
s=s.a
w=s.a
v=B.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=B.a.od(w,v,v,u)
this.d.bL(0,new A.bb(t,A.h6(B.bt,v+u.length),B.aM))},
a9T(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a9T=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(Z.FB(78,1920),$async$a9T)
case 3:s=e
if(s==null){w=1
break}t.m(new C.dUu(t,s))
case 1:return A.h(u,v)}})
return A.i($async$a9T,v)},
WA(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hT().a3O(B.eE),$async$WA)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return A.b(s.f8(),$async$WA)
case 4:t.m(new r.dUz(t,e))
case 1:return A.h(u,v)}})
return A.i($async$WA,v)},
a9U(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$a9U=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=$.av()
s=new A.ap(B.as,t)
r=new A.ap(new A.bb("https://",B.b0,B.aM),t)
q=u.c
q.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.dUx(s,r),q,null,!0,!0,x.y),$async$a9U)
case 2:if(e===!0)u.m(new C.dUy(u,s,r))
s.R$=t
s.O$=0
r.R$=t
r.O$=0
return A.h(null,v)}})
return A.i($async$a9U,v)},
byO(){var w,v,u,t,s,r=null,q=A.a([],x.a),p=this.d
p===$&&A.c()
p=B.a.fo(p.a.a,A.ae("\\n\\s*\\n",!0,!1,!1,!1))
w=new A.J(p,new C.dUq(),A.U(p).k("J<1,n>")).bX(0,new C.dUr())
for(p=J.aV(w.a),v=new A.hE(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gT(p)
if(B.a.a_(s,"## "))q.push(new C.lp("heading",B.a.i(B.a.aY(s,3)),r,r))
else if(B.a.a_(s,"\u2022 ")||B.a.a_(s,"- "))q.push(new C.lp("bullets",new A.J(A.a(s.split("\n"),u),new C.dUs(),t).bX(0,new C.dUt()).aH(0,"\n"),r,r))
else q.push(new C.lp("text",s,r,r))}p=this.e
p===$&&A.c()
B.d.v(q,p)
if(q.length===0)q.push(D.a28)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.cYq(n),l=n?B.az:B.fA,k=A.d(p.a.d,o,o,o,o,o,o,B.cs,o,o,o),j=x.p
k=A.eA(A.a([A.dp(S.Zs,B.a5L,new C.dUE(p,d),A.bk(B.aI,o,o,o,B.c,o,o,o,o,o,o,o)),B.ab],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?B.cB:B.iH
v=A.c6(B.bF,A.a([p.uX(E.Ll,"Bold",new C.dUF(p),m),p.uX(E.XM,"Italic",new C.dUG(p),m),p.uX(E.agy,"Underline",new C.dUH(p),m),p.uX(Ab.XT,"Heading",new C.dUI(p),m),p.uX(O.Lm,"Bullets",new C.dUJ(p),m),p.uX(E.agx,"Align",new C.dUK(),m),p.uX(B.EJ,"Link",p.gbTM(),m),p.uX(B.pi,"Image",p.gbTL(),m),p.uX(Y.Y4,"Video",p.gbTN(),m),p.uX(M.Z7,"Signature",new C.dUL(p),m),p.uX(Y.Ln,"Divider",new C.dUM(p),m)],j),B.bx,4,4)
w=A.p(o,A.v(A.a([v,B.aq,A.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,A.l(o,o,n?B.dX:B.bn,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),B.ai,o,B.e,B.j,0,B.p),B.f,w,o,o,o,o,o,o,E.afr,o,o,o)
v=n?B.da:B.c
u=A.m(12)
t=A.I(n?B.es:B.e2,B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(n?0.35:0.08),B.cH,16)],x.V)
r=p.d
r===$&&A.c()
q=A.l(o,o,n?B.iK:B.az,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=A.a([w,A.D(new A.C(B.c2,A.p(o,A.aL(o,B.U,!1,o,!0,B.q,o,A.aM(),r,o,o,o,o,o,2,A.bo(o,B.ev,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.dX:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!0,p.f,B.ag,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,q,!0,B.a5,o,B.am,o,o,o,o),B.f,o,o,new A.o(v,o,t,u,s,o,B.n),o,o,o,o,A3.Ag,o,o,o),o),1)],j)
n=p.e
n===$&&A.c()
if(n.length!==0){n=new A.hU(n,A.U(n).k("hU<1>"))
j.push(A.p(o,A.c6(B.bF,n.gdL(n).dn(0,new C.dUN(p,m),x.g5).dA(0),B.bx,0,8),B.f,o,o,o,o,o,o,o,B.KI,o,o,o))}return A.cb(k,l,A.v(j,B.m,o,B.e,B.j,0,B.p),o,!1,!1,o,o)},
uX(d,e,f,g){var w=null,v=g.a,u=v?B.da:B.c,t=A.m(8),s=A.m(8)
return A.hl(A.aE(!1,B.a1,!0,t,A.aK(!1,s,!0,new A.C(B.cm,A.W(d,v?B.iK:B.az,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,w,w,w,B.ad),w,e,w,w)}}
C.dbx.prototype={}
C.ayZ.prototype={
a3(){return"_KbView."+this.b}}
C.anY.prototype={
S(){return new C.aBp(D.aPx)},
cHR(d,e){return this.e.$2$size(d,e)}}
C.aBp.prototype={
gax6(){var w,v
if(this.e==null)return null
for(w=J.aV(this.a.c);w.C();){v=w.gT(w)
if(v.a===this.e)return v}return null},
gckW(){var w,v,u,t,s,r=this.gax6()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
c0Q(d){this.m(new C.dUn(this,d))},
c7x(d){this.m(new C.dUo(this,d))},
bx6(){this.m(new C.dUf(this))},
bx8(){this.m(new C.dUg(this))},
gb1I(){var w=A.bl(this.a.c,!0,x.i)
B.d.b0(w,new C.dUp())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.M(d).ax.a===B.H,f=new C.dbx(g),e=x.O
e=g?A.a([B.M.j(0.9),B.bj.j(0.85)],e):A.a([B.er.j(0.55),B.mB.j(0.45)],e)
w=A.m(22)
v=A.I((g?B.aJ:B.fk).j(0.55),B.r,1)
switch(i.d.a){case 0:g=i.by4(f)
break
case 1:g=i.gax6()
g.toString
g=i.byM(f,g)
break
case 2:u=i.gax6()
u.toString
t=i.gckW()
t.toString
s=A.b_(u.d)
r=A.m(16)
r=A.p(h,A.d(t.b,h,h,h,h,h,h,D.eNJ,h,h,h),B.f,h,h,new A.o(B.aI,h,h,r,h,h,B.n),h,h,h,h,B.bA,h,h,1/0)
q=g?B.az:B.c
p=A.m(16)
o=A.I(g?B.aJ:B.aK,B.r,1)
n=A.a([new A.ac(0,B.G,B.w.j(g?0.28:0.06),B.ei,10)],x.V)
m=g?B.fs:B.oV
l=A.m(8)
k=A.W(B.po,g?B.dy:B.dW,h,h,h,14)
j=x.p
j=A.v(A.a([new C.ayX(f,i.gbx7(),u.c,s,"Answer",h),A.D(A.cL(A.a([r,B.aa,A.p(h,A.v(A.a([A.p(h,A.A(A.a([k,B.e9,A.d("Stored answer",h,h,h,h,h,h,A.l(h,h,g?B.dy:B.dW,h,h,h,h,h,h,h,h,11,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),B.m,h,B.e,B.Q,0,h,h),B.f,h,h,new A.o(m,h,h,l,h,h,B.n),h,h,h,B.e3,B.h1,h,h,h),new C.aY3(t.c,t.e,f,h)],j),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(q,h,o,p,n,h,B.n),h,h,h,h,B.c2,h,h,1/0)],j),h,B.bkg,h,h,B.aj,!1),1)],j),B.ai,h,B.e,B.j,0,B.p)
g=j
break
default:g=h}return A.p(h,g,B.ao,h,h,new A.o(h,h,v,w,h,new A.a5(B.b1,B.b3,B.x,e,h,h),B.n),h,h,h,B.hE,h,h,h,h)},
aT3(d){var w,v,u,t=null,s=d.a,r=s?D.rt:B.c,q=B.aD.j(0.22)
q=A.a([new A.ac(0,B.G,q,B.J,14),new A.ac(0,B.G,B.w.j(s?0.28:0.06),B.J,8)],x.V)
w=A.I(s?B.aJ:B.fk,B.r,2)
v=this.a
u=x.p
q=A.a([A.p(t,A.hQ(v.cHR(v.d,72),B.ao),B.f,t,t,new A.o(r,t,w,t,q,t,B.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)B.d.v(q,A.a([B.aq,A.d("Tap to switch",t,t,t,t,t,t,A.l(t,t,B.d1,t,t,t,t,t,t,t,t,12,t,t,B.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return A.v(q,B.m,t,B.e,B.j,0,B.p)},
by4(d){var w,v,u=this,t=null,s=u.a.r
s=A.au(s!=null?A.aH(t,u.aT3(d),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,B.ac):u.aT3(d),t,t,t)
w=d.a
v=A.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,A.l(t,t,w?B.aO:B.M,t,t,t,t,t,t,t,t,20,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),B.L,t,t)
return A.cL(A.a([s,B.ay,v,B.aq,A.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,A.l(t,t,w?B.bI:B.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),B.L,t,t),B.bu,A.ia(!0,t,t,B.z,G.aKd,new C.dUi(u,d),u.gb1I().length,t,B.dO,B.aj,!0)],x.p),t,D.bky,t,t,B.aj,!1)},
byM(d,e){var w,v,u,t,s=null,r=A.bl(e.e,!0,x.u)
B.d.b0(r,new C.dUk())
w=A.b_(e.d)
v=d.a
u=A.d("Tap a question to read the stored answer.",s,s,s,s,s,s,A.l(s,s,v?B.bI:B.ak,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=A.au(A.d("No questions in this category yet.",s,s,s,s,s,s,A.l(s,s,v?B.bI:B.ak,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=A.hK(s,new C.dUl(this,r,d,e),t,B.uC,s,B.aj,new C.dUm(),!1)
return A.v(A.a([new C.ayX(d,this.gbx5(),e.c,w,e.b,s),new A.C(Ag.uD,u,s),A.D(v,1)],x.p),B.ai,s,B.e,B.j,0,B.p)}}
C.ayX.prototype={
B(d){var w=this,v=null,u=w.c.a,t=A.aG(v,v,v,v,A.W(B.ez,u?B.aO:B.M,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=A.m(12)
q=A.p(v,A.W(w.e,s,v,v,v,22),B.f,v,v,new A.o(r,v,v,q,v,v,B.n),v,v,v,v,B.cm,v,v,v)
return new A.C(D.bnO,A.A(A.a([t,q,B.aw,A.D(A.d(w.r,v,v,v,v,v,v,A.l(v,v,u?B.aO:B.M,v,v,v,v,v,v,v,v,17,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,v,v),v)}}
C.aa4.prototype={
B(d){var w=null,v=this.c,u=A.b_(v.d),t=this.d.a,s=t?D.rt:B.c,r=A.m(14),q=A.m(14),p=A.m(14),o=A.I(t?B.aJ:B.aK,B.r,1),n=A.a([new A.ac(0,B.G,B.w.j(t?0.28:0.06),B.dz,6)],x.V),m=u.j(0.15),l=A.m(12)
l=A.p(w,A.W(v.c,u,w,w,w,22),B.f,w,w,new A.o(m,w,w,l,w,w,B.n),w,40,w,w,w,w,w,40)
return new A.fE(1,A.aE(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(w,A.v(A.a([l,B.aq,A.d(v.b,w,2,B.a2,w,w,w,A.l(w,w,t?B.aO:B.M,w,w,w,w,w,w,w,w,10,w,w,B.I,w,1.1,!0,w,w,w,w,w,w,w,w),B.L,w,w)],x.p),B.m,w,B.b7,B.j,0,B.p),B.f,w,w,new A.o(w,w,o,p,n,w,B.n),w,w,w,w,B.cm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.ad),w)}}
C.aY3.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=A.a([],q)
if(this.d){w=r.a
v=w?B.fs:B.oV
u=A.m(8)
t=A.W(B.tg,w?B.dy:B.dW,s,s,s,14)
p.push(A.p(s,A.A(A.a([t,B.d8,A.d("Printable document",s,s,s,s,s,s,A.l(s,s,w?B.dy:B.dW,s,s,s,s,s,s,s,s,10,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),B.m,s,B.e,B.Q,0,s,s),B.f,s,s,new A.o(v,s,s,u,s,s,B.n),s,s,s,B.cM,B.eD,s,s,s))}B.d.v(p,J.b6(this.c,new C.c5V(r),x.l))
return A.v(p,B.F,s,B.e,B.j,0,B.p)}}
C.a9X.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new A.C(D.bio,A.d(q.b,r,r,r,r,r,r,A.l(r,r,s.d.a?B.aO:B.M,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new A.C(B.hD,A.bu(A.m(12),K.aNe(r,B.bQ,160,B.pi,r,w,1/0),B.ao),r)
case"video":v=q.c
q=v==null?q.b:v
return new A.C(B.hD,new C.ayY(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new A.C(B.uy,A.aK(!1,r,!0,A.d(q,r,r,r,r,r,r,A.l(r,r,s.d.a?B.cw:B.bk,r,B.mo,r,r,r,r,r,r,r,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cAF(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=A.iv(v?B.aJ:B.aK,r,r,r,r,r)
q=A.d(q.b,r,r,r,r,r,r,A.l(r,r,v?B.cl:B.aJ,r,r,r,r,r,r,r,r,r,B.cC,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=A.p(r,r,B.f,v?B.bI:B.ak,r,r,r,1,r,r,r,r,r,120)
return new A.C(B.A0,A.v(A.a([u,q,B.aN,t,B.av,A.d("Signature",r,r,r,r,r,r,A.l(r,r,v?B.bI:B.ak,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r)
case"bullets":v=x.cl
q=A.B(new A.cW(new A.a3(A.a(q.b.split("\n"),x.s),new C.cAG(),x.cc),new C.cAH(s),v),v.k("G.E"))
return new A.C(B.kA,A.v(q,B.F,r,B.e,B.j,0,B.p),r)
case"divider":return new A.C(B.hD,A.iv(s.d.a?B.aJ:B.aK,r,r,r,r,r),r)
default:q=q.b
if(B.a.i(q).length===0)return B.bG
return new A.C(B.ff,C.hwT(q,s.d),r)}}}
C.ayY.prototype={
S(){return new C.be7()}}
C.be7.prototype={
Z(){this.a0()
this.abV()},
abV(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$abV=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=B.a.i(r.a.c)
if(J.ab(n)!==0)p=!J.cY(n,"http")&&!J.cY(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=A.WG(A.ct(n,0,null),null)
w=7
return A.b(J.ag4(q),$async$abV)
case 7:if(r.c==null){w=1
break}r.m(new C.dby(r,q))
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
return A.i($async$abV,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a1()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?B.bj:B.f6
u=A.m(12)
return A.p(B.A,A.W(B.pt,w?B.bI:B.ak,t,t,t,36),B.f,t,t,new A.o(v,t,t,u,t,t,B.n),t,120,t,t,t,t,t,t)}w=A.m(12)
v=s.a
u=J.ag2(v)
return A.bu(w,new A.fE(u,new A.am(B.A,t,B.a9,B.q,A.a([new A.zk(s,t),A.aG(t,t,t,t,A.W(v.f?B.agF:B.Lo,B.c,t,t,t,44),t,t,t,new C.dbA(this,s),t,t,t,t,t,t)],x.p),t),t),B.ao)}}
C.aoL.prototype={
a3(){return"NgmyMusicLane."+this.b}}
C.Hz.prototype={
a3(){return"NgmyMusicRhymeScheme."+this.b}}
C.r_.prototype={}
C.ao0.prototype={
S(){var w=null
return new C.aBr(new A.ap(B.as,$.av()),A.mi(0,w,w),A.a([],x.m),D.BD,D.aC_,w,w)},
gdS(){return this.d}}
C.aBr.prototype={
Z(){var w,v=this
v.a0()
w=A.bj(null,B.mJ,null,1,null,v)
w.f2(0,!0)
v.as!==$&&A.aR()
v.as=w
v.z=B.d.gK(D.a0L).a},
q(){var w=this,v=w.as
v===$&&A.c()
v.q()
v=w.d
v.R$=$.av()
v.O$=0
w.e.q()
w.bqH()},
ganK(){var w,v,u,t,s=this.x
if(s===D.BE)return null
s=s===D.BD
w=s?D.a0L:D.a_Z
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?B.d.gK(w):null},
clH(d){return this.m(new C.dV1(this,d))},
awU(){$.aU.x1$.push(new C.dUT(this))},
HS(d){return this.cl9(d)},
aVm(){return this.HS(null)},
cl9(b0){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$HS=A.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=B.a.i(b0==null?q.d.a.a:b0)
if(J.ab(a8)===0||q.r||q.a.e){w=1
break}w=3
return A.b(q.a.f.$0(),$async$HS)
case 3:e=b2
if(!e){w=1
break}A.jI()
d=a8.toLowerCase()
p=B.a.t(d,"continue")||B.a.t(d,"keep going")||B.a.t(d,"go on")||B.a.t(d,"next verse")||B.a.t(d,"more lyrics")||B.a.t(d,"endelea")||B.a.t(d,"endelea na")||B.a.t(d,"ongeza")||B.a.t(d,"tuendelee")
a0=q.f
a1=B.d.ba(a0,new C.dUV())
o=!p&&!a1
d=a8.toLowerCase()
if(!(B.a.t(d,"fix")||B.a.t(d,"rewrite")||B.a.t(d,"re-write")||B.a.t(d,"rhyme better")||B.a.t(d,"better rhyme")||B.a.t(d,"sound better")||B.a.t(d,"improve")||B.a.t(d,"polish")||B.a.t(d,"make it rhyme")||B.a.t(d,"boresha")||B.a.t(d,"rekebisha")||B.a.t(d,"endeleza mistari")))a2=C.h39(a8)&&a1
else a2=!0
n=a2
a3=a8
d=a3.toLowerCase()
a4=!0
if(!B.a.t(d,"bible"))if(!B.a.t(d,"scripture")){if(!B.a.t(d,"biblia"))if(!B.a.t(d,"andiko"))if(!B.a.t(d,"gospel verse")){a5=A.ae("\\b\\d+\\s*:\\s*\\d+\\b",!0,!1,!1,!1)
if(!a5.b.test(a3)){a3=A.ae("\\b(genesis|exodus|leviticus|numbers|deuteronomy|psalm|proverbs|isaiah|jeremiah|matthew|mark|luke|john|romans|corinthians|galatians|ephesians|philippians|revelation)\\b",!1,!1,!1,!1)
a3=a3.b.test(d)}else a3=a4}else a3=a4
else a3=a4
else a3=a4
a4=a3}m=a4
l=C.h39(a8)&&!p
q.m(new C.dUW(q,a8))
q.awU()
k=B.a.i(q.a.c)
if(J.ab(k)===0){q.m(new C.dUX(q))
q.awU()
w=1
break}t=5
j=A.mP(k)
i=new A.J(a0,new C.dUY(),A.U(a0).k("J<1,n>")).aH(0,"\n\n")
a0=C.hQm(m,p,o,q.x,n,q.y,q.ganK(),l)
a3=J.ab(i)!==0?"--- Conversation so far ---\n"+A.t(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+A.t(a8)
w=8
return A.b(A.qr(j,h,B.hg,null),$async$HS)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=B.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=B.a.i(a0)}else a6=L.byP(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.m(new C.dUZ(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.m(new C.dV_(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.m(new C.dV0(q))
q.awU()
w=r.pop()
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$HS,v)},
bCK(){return this.HS("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=A.M(d).ax.a===B.H,p=q?B.DO:D.b9o,o=x.p
o=A.a([A.v(A.a([A.D(s.ckp(q),1),s.bBY(q)],o),B.m,r,B.e,B.j,0,B.p)],o)
if(s.f.length!==0&&!s.r){w=B.aL.j(0.55)
v=s.r?r:s.gbCJ()
u=A.m(28)
t=A.a([B.aL,B.aR],x.O)
o.push(A.an(78,A.aE(!1,B.a1,!0,r,A.aK(!1,r,!0,A.ev(D.dUF,r,new A.o(r,r,r,u,A.a([new A.ac(0,B.G,B.aL.j(0.45),B.cH,16)],x.V),new A.a5(B.a3,B.a7,B.x,t,r,r),B.n),r,r,r),B.r2,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),B.f,B.K,10,r,w,B.r2,r,r,B.ad),r,r,r,14,r,r))}return A.p(r,new A.am(B.X,r,B.a9,B.q,o,r),B.f,p,r,r,r,r,r,r,r,r,r,r)},
ckp(d){var w,v,u,t=this,s=null
if(t.x===D.BE)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=A.a([A.fHZ(s,!1,B.K,0,0,w,A.fEm(t.cpT(d),B.TT,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=A.W(B.aj1,B.aD.j(0.5),s,s,s,52)
w.push(A.b3y(new A.C(B.ey,A.v(A.a([u,B.ay,A.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,A.l(s,s,d?B.aA:B.dx,s,s,s,s,s,s,s,s,14,s,s,B.a4,s,1.45,!0,s,s,s,s,s,s,s,s),B.L,s,s),B.ay,A.c6(B.fI,A.a([t.ag7("Full bongo love song ABAB",d),t.ag7("Mix: group vs private jet \u2014 which flies?",d),t.ag7("Song from John 3:16 + matching verses",d),t.ag7("Fix my rhyme \u2014 paste your lines",d)],v),B.bx,8,8)],v),B.m,s,B.b7,B.j,0,B.p),s),!1))}else{v=t.r?1:0
w.push(new A.nw(D.bj5,A.W7(new A.o5(new C.dUU(t,d),u+v,!0,!0,!0,0,A.rr(),s)),s))}return A.v_(0,s,B.q,t.e,B.z,s,s,A5.a7Z,s,s,!1,s,B.aj,!1,w)},
cpT(d){var w=this.as
w===$&&A.c()
return A.c5(w,new C.dV8(this,d),null)},
cpV(d){var w,v=this,u=null,t=A.m(14),s=v.r?u:new C.dVa(v),r=B.w.j(d?0.35:0.06),q=A.m(14),p=A.I(B.b8.j(0.35),B.r,1),o=v.ganK()
o=o==null?u:o.c
o=A.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,B.HQ,u,u,u)
w=v.ganK()
w=w==null?u:w.b
if(w==null)w="Style"
w=A.D(A.d(w,u,u,u,u,u,u,A.l(u,u,d?B.c:B.bh,u,u,u,u,u,u,u,u,12,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return A.aE(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(u,A.A(A.a([o,B.ab,w,A.W(v.w?B.LQ:B.qv,B.b8,u,u,u,20)],x.p),B.m,u,B.e,B.j,0,u,u),B.f,u,u,new A.o(r,u,p,q,u,u,B.n),u,u,u,u,B.oc,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ad)},
asP(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=A.a([B.aZ,B.aT],x.O)
break
case 1:w=A.a([B.bk,B.cw],x.O)
break
case 2:w=A.a([B.by,B.aD],x.O)
break
default:w=n}v=m?6:0
u=A.m(14)
t=A.m(14)
s=this.r?n:new C.dUS(this,d)
r=A.m(14)
w=m?new A.a5(B.a3,B.a7,B.x,w,n,n):n
if(m)q=n
else q=B.w.j(g?0.3:0.05)
p=A.d(f,n,n,n,n,n,n,B.HQ,n,n,n)
if(m)o=B.c
else o=g?B.af:B.bh
return A.D(A.aE(!1,B.a1,!0,u,A.aK(!1,t,!0,A.dh(n,A.v(A.a([p,A.d(e,n,n,n,n,n,n,A.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),B.m,n,B.e,B.j,0,B.p),n,n,B.bb,new A.o(q,n,n,r,n,w,B.n),B.a1,n,n,n,B.jK,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),B.f,n,v,n,n,n,n,n,B.ad),1)},
cpW(d,e){var w,v,u,t=this,s=null,r=t.x===D.BD?t.z:t.Q,q=A.m(20)
if(r===d.a)r=B.b8.j(e?0.25:0.15)
else r=B.w.j(e?0.2:0.04)
w=A.m(20)
v=t.r?s:new C.dVb(t,d)
u=A.d(d.c,s,s,s,s,s,s,B.Ry,s,s,s)
return A.aE(!1,B.a1,!0,q,A.aK(!1,w,!0,new A.C(B.fN,A.A(A.a([u,B.d8,A.d(d.b,s,s,s,s,s,s,A.l(s,s,e?B.c:B.bh,s,s,s,s,s,s,s,s,10,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.m,s,B.e,B.Q,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),B.f,r,0,s,s,s,s,s,B.ad)},
ag7(d,e){var w=null,v=A.d(d,w,w,w,w,w,w,E.a5F,w,w,w),u=B.aD.j(e?0.2:0.1)
return A.mr(w,u,v,w,this.r?w:new C.dV2(this,d),w,w,w,w)},
bBY(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=A.m(22),o=d?B.M.j(0.95):B.c,n=A.I(B.aD.j(0.2),B.r,1),m=x.p,l=A.a([],m)
if(q>0)l.push(new A.C(F.afd,A.d("$"+B.k.a9(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,A.l(r,r,B.aL.j(0.85),r,r,r,r,r,r,r,r,9,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=A.l(r,r,d?B.c:B.bh,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.BE?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=A.D(A.aL(r,B.U,!1,r,!0,B.q,r,A.aM(),w,r,r,r,r,r,2,A.bo(r,B.ev,r,B.h2,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.l(r,r,d?B.bZ:B.hB,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),B.z,!0,r,!0,r,!1,r,B.ag,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.dUP(s),r,!1,r,r,!1,r,!0,r,B.a8,r,r,r,r,r,r,r,r,r,r,r,v,!0,B.a5,r,B.am,r,r,r,r),1)
u=s.r
t=u?r:new C.dUQ(s)
l.push(A.A(A.a([v,new A.HJ(w,B.aD,r),A.aE(!1,B.a1,!0,r,A.aK(!1,r,!0,A.ev(u?D.dUP:D.bC0,r,D.aVe,42,r,42),B.cJ,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),B.f,r,0,r,r,B.cJ,r,r,B.ad)],m),B.dG,r,B.e,B.j,0,r,r))
return A.p(r,A.v(l,B.ai,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,n,p,r,r,B.n),r,r,r,B.uA,B.adO,r,r,r)}}
C.aJs.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
C.TS.prototype={
ac(){var w=this
return A.E(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.Y2.prototype={
S(){return new C.ayo(null,null)},
bcf(){return this.f.$0()}}
C.ayo.prototype={
Z(){var w,v=this,u=null
v.a0()
w=A.bj(u,D.bhs,u,1,u,v)
w.cn(0)
v.d!==$&&A.aR()
v.d=w
w=A.bj(u,B.p9,u,1,u,v)
w.f2(0,!0)
v.e!==$&&A.aR()
v.e=w
w=A.bj(u,B.l1,u,1,u,v)
w.cE(0)
v.f!==$&&A.aR()
v.f=w
w=A.bj(u,B.wF,u,1,u,v)
w.cn(0)
v.r!==$&&A.aR()
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
w.bpx()},
c0S(){var w=this.d
w===$&&A.c()
w.en(0).by(new C.d8S(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(A.aI(d,B.bR,x.w).w.a.a-32,360),h=B.w.j(0.82),g=k.gc0R(),f=x.l,e=J.e1(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&A.c()
e[v]=new A.Ce(new C.d8T(k,v,d),j,w,j)}f=A.B(e,f)
w=k.d
w===$&&A.c()
u=A.m(28)
t=A.I(B.c.j(0.22),B.r,1.5)
s=A.a([new A.ac(2,B.G,B.aR.j(0.35),B.J,40),new A.ac(0,B.G,B.aI.j(0.25),B.fG,28)],x.V)
r=k.e
r===$&&A.c()
q=k.r
q===$&&A.c()
q=A.c5(new A.h1(A.a([r,q],x.U)),new C.d8U(k),j)
r=A.nv(B.je,D.fdk,new C.d8V())
p=A.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,A.l(j,j,B.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,B.cq,j,1.45,!0,j,j,j,j,j,j,j,j),B.L,j,j)
o=x.p
n=A.A(A.a([k.aVn(B.k9,"Resets in 24h"),B.ab,k.aVn(B.po,"Help Topics ready")],o),B.m,j,B.b7,B.j,0,j,j)
m=A.a([],o)
k.a.toString
l=B.c.j(0.35)
m.push(A.D(A.dX(D.f8f,new C.d8W(k),A.dd(j,j,j,j,j,j,j,j,j,B.af,j,j,B.m0,j,new A.b7(A.m(14),B.Z),new A.az(l,1,B.r,-1),j,j,j,j)),1))
k.a.toString
m.push(B.aw)
k.a.toString
l=A.m(14)
m.push(A.D(A.bM(D.fdb,g,A.bk(B.aI,j,j,6,B.c,j,B.m0,B.aI.j(0.5),new A.b7(l,B.Z),j,j,j)),1))
f.push(A.au(A.aH(j,A.c5(w,new C.d8X(k),A.p(j,A.v(A.a([q,B.ay,r,B.S,p,B.P,n,B.bu,A.A(m,B.m,j,B.e,B.j,0,j,j)],o),B.m,j,B.e,B.Q,0,B.p),B.f,j,j,new A.o(j,j,t,u,s,D.bJT,B.n),j,j,j,j,A6.af5,j,j,i)),B.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.d8Y(),j,j,j,j,j,j,!1,B.ac),j,j,j))
return A.aE(!1,B.a1,!0,j,A.aH(j,new A.am(B.X,j,B.a9,B.q,f,j),B.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,B.ac),B.f,h,0,j,j,j,j,j,B.ad)},
aVn(d,e){var w=null,v=B.c.j(0.08),u=A.m(20),t=A.I(B.c.j(0.12),B.r,1)
return A.p(w,A.A(A.a([A.W(d,B.aR,w,w,w,13),B.e9,A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.fN,w,w,w)}}
C.aIl.prototype={
aP(){this.aX()
this.aV()
this.dD()},
q(){var w=this,v=w.b1$
if(v!=null)v.a2(0,w.gdB())
w.b1$=null
w.a1()}}
C.Mt.prototype={}
C.ps.prototype={}
C.aoy.prototype={
S(){return new C.aBN(A.a([],x.E),A.a([],x.s))}}
C.aBN.prototype={
gao7(){return B.k.D(A.JU(this.a.c.a,new C.e3R(this)),0,1/0)},
a6p(){var w,v=this,u=v.d,t=v.gao7()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)A.qp(u.a,t,!0,!1)},
Ik(d,e){var w,v,u,t=this,s=t.gao7(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gao7()
if(w<v-0.005)A.h8c(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)A.qp(u.a,w,!0,!1)
A.qp(t.a.c.a,w,!0,!1)
A.A_(!0,!1,w,t.a.c.a)},
Z(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a0()
$.aU.c_$.push(o)
w=$.Hn+1
$.Hn=w
if(w===1){w=$.fVT
if(w!=null)w.$0()}v=$.fGo.h(0,B.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=A.bl(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=A.bl(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=A.lx(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,B.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=A.aMU(u,B.k.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new A.uT(w,u,r,q,s.e,p)}o.d=t}o.NO()
o.a6p()
$.aU.x1$.push(new C.e4x(o))
o.Q=A.dF(B.nr,new C.e4y(o))
o.as=A.dF(B.fL,new C.e4z(o))},
q(){var w=this,v=w.Q
if(v!=null)v.a8(0)
v=w.as
if(v!=null)v.a8(0)
$.aU.hw(w)
C.hoN()
w.a1()},
cs_(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new A.Q(Date.now(),0,!1)
v=p.r
if(!C.a65(v,w)){if(C.fGq(p,q.e)){q.m(new C.e4f(q,p))
q.x7(!1,!0,!0)}else if(q.c!=null)q.m(new C.e4g())
return}if(!C.c8a(v.c?v.bP():v)){q.m(new C.e4h(p))
q.aVv(!1)
return}u=p.gBw()
if(u<=0)return
t=w.cV(A.bX(A.bx(w),A.bF(w),A.bP(w),12,0,0,0,0))
s=C.fGr(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.m(new C.e4i())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(B.d.ba(q.e,new C.e4j(r))){q.m(new C.e4k(p,w,u))
return}q.m(new C.e4l(q,p,u,w))
q.auZ(new A.d1(r,p.a,u,B.fy,B.f9,"Clock-in daily earnings (local)",null,null,B.cj,w))},
iF(d){if(d===B.fp)this.DK()},
NO(){var w,v,u,t,s,r,q,p=this.d
if(p==null)return
w=this.a.c
w.e=p.e
w.f=p.f
w.r=p.r
w.rx=p.rx
w.fr=p.fr
w.fx=p.fx
w.fy=p.fy
w.bh=p.bh
w.c4=A.bl(p.c4,!0,x.N)
w=this.a.c
w.bQ=p.c4.length
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
q=new A.uT(u,t,s,r,v.e,q)
u=q}w.x=u},
Qo(d){return this.cqG(d)},
cqG(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Qo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.NO()
t.Ik(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return A.b(x.r.b(s)?s:A.dP(s,x.H),$async$Qo)
case 3:case 1:return A.h(u,v)}})
return A.i($async$Qo,v)},
DK(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$DK=A.e(function(d,e){if(d===1){s.push(e)
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
return A.b(H.yI(q.w,k,l,j,m,!1,n),$async$DK)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.m(new C.e4a(q,p))
q.Qo(!1)}w=8
return A.b(q.Iw(),$async$DK)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=A.a7(h)
$.al.$1("[growth income] pull wallet: "+A.t(o))
w=9
return A.b(q.Iw(),$async$DK)
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
return A.i($async$DK,v)},
Mg(d){return this.bwi(d)},
bwh(){return this.Mg(null)},
bwi(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$Mg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return A.b(A.ay(),$async$Mg)
case 3:s=f
r=B.a.i(t.a.c.a.toLowerCase())
q=A.d8(t.w,x.N)
r=s.rA("ngmy_gi_credited_txn_ids_"+r)
q.v(0,r==null?A.a([],x.s):r)
j.a=0
p=A.a([],x.s)
o=d==null?null:A.kr(d,A.U(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,A.K)(r),++m){l=r[m]
k=l.a
if(q.t(0,k))continue
if(o!=null&&!o.t(0,k))continue
if(l.d===B.fn&&l.x===B.cj&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.m(new C.e3S(j,t,i))
q.v(0,p)
r=A.B(q,A.a2(q).k("cn.E"))
t.w=r
w=4
return A.b(A.aoA(t.a.c.a,r),$async$Mg)
case 4:t.aux(!1,!0)
r=t.c
if(r!=null)r.I(x.q).f.P(A.b2(null,null,null,null,null,B.q,null,A.d("Balance updated: +$"+A.dy(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Mg,v)},
Iw(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$Iw=A.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=A.U(a2).k("a3<1>")
a4=A.B(new A.a3(a2,new C.e4b(),a3),a3.k("G.E"))
a5=a4
a6=A.a([],x.s)
w=J.ab(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=A.U(a2).k("J<1,n>")
e=A.B(new A.J(a2,new C.e4c(),a3),a3.k("ai.E"))
q=e
w=9
return A.b(A.ld("transactions","id,status",null,null,null,A.E(["id",q],x.N,x.j),null,!0,null,null,!1,B.bE),$async$Iw)
case 9:p=a9
if(r.c==null){w=1
break}o=!1
for(a2=J.aV(p);a2.C();){n=a2.gT(a2)
m=n
a3=J.q(m,"id")
l=J.k(a3==null?"":a3)
a3=A.aN(J.q(m,"status"))
d=a3==null?null:B.k.N(a3)
k=d==null?0:d
if(J.ab(l)===0)continue
j=B.d.bi(r.e,new C.e4d(l))
if(j<0)continue
i=r.e[j].x
if(J.y(k,1))a0=B.cj
else a0=J.y(k,2)?B.jW:B.dr
h=a0
if(!J.y(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===B.dr&&h===B.cj&&a3[j].d===B.fn)J.cd(a6,l)
if(i===B.dr&&h===B.jW&&r.e[j].d===B.eI){g=r.d
if(g!=null){r.Ik(g.d+r.e[j].c,!1)
r.aux(!1,!0)}}}}if(o&&r.c!=null)r.m(new C.e4e())
t=2
w=8
break
case 6:t=5
a7=s.pop()
f=A.a7(a7)
$.al.$1("[growth income] refresh deposit status: "+A.t(f))
w=8
break
case 5:w=2
break
case 8:case 4:w=J.ab(a6)!==0?10:12
break
case 10:w=13
return A.b(r.Mg(a6),$async$Iw)
case 13:w=11
break
case 12:w=14
return A.b(r.bwh(),$async$Iw)
case 14:case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Iw,v)},
On(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$On=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return A.b(A.ub(i.a,i),$async$On)
case 3:h=e
if(t.c==null){w=1
break}t.m(new C.e3W(t,h))
t.NO()
t.a6p()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return A.b(H.yI(s[0],p,q,o,r,!0,i),$async$On)
case 4:i=e.a
n=i[4]
m=A.bl(i[2],!0,x.o)
l=i[5]
t.w=A.bl(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.NO()
t.a6p()
k=C.fGq(n,m)
if(k)t.Ik(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.Y&&s.aw>0
else s=!0
j=A.fWC(n,m,new A.Q(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.NO()
if(t.c==null){w=1
break}t.m(new C.e3X(t,n,m,l))
if(i){t.x7(!1,!0,!0)
if(j==="reset"){A.fVs(t.a.c.a)
i=t.c
if(i!=null)A.fVv(i,null)}else if(j==="warn2"){A.fVt(t.a.c.a)
i=t.c
if(i!=null)C.fVw(i)}}else if(k)t.x7(!1,!0,!0)
else t.Qo(!1)
case 1:return A.h(u,v)}})
return A.i($async$On,v)},
x7(d,e,f){return this.cb2(d,e,f)},
aux(d,e){return this.x7(d,!1,e)},
aVv(d){return this.x7(!1,d,!1)},
cb2(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$x7=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new A.Q(Date.now(),0,!1).a4()
r=t.a.c.a
q=t.e
p=t.f
w=3
return A.b(A.qY(r,o,q,!1,t.w,s,p),$async$x7)
case 3:p=t.a.c.a
q=t.e
r=t.f
A.Hs(t.w,p,q,s,o,r)
if(f)t.Qo(d)
case 1:return A.h(u,v)}})
return A.i($async$x7,v)},
c16(){this.m(new C.e44())
this.aux(!1,!0)},
acz(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===B.cj&&A.rp(d)){w=r.a
w.f.$1(new A.d1(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.c86(q,d)
v=q.d=A.JU(r.a.c.a,new C.e41(r))
r.at=r.a.c.d=v
A.qp(q.a,v,!0,!1)
if(r.c!=null)r.m(new C.e42(r,d))
r.x7(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new A.d1(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===B.dr
if(w&&d.d===B.fn)s=!1
else if(w&&d.d===B.eI){r.Ik(q.d-d.c,!0)
s=!0}else{C.c86(q,d)
w=d.d
s=w===B.eI||w===B.jz
r.Ik(q.d,s)}r.m(new C.e43(r,d))
w=d.d
r.x7(s,e,w===B.eI||w===B.jz||d.x===B.cj||w===B.fy)},
auZ(d){return this.acz(d,!0,!1)},
aWs(d,e){return this.acz(d,!0,e)},
aWr(d,e){return this.acz(d,e,!1)},
c42(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.hSw(u,e,d)){v.lF("This plan is already active.")
return}w=A.h7J(u.a,d,e)
if(C.hOY(u.a,v.e,w)){v.lF("You already own this plan.")
return}if(u.d<g){v.lF("Insufficient balance. Add funds in the Wallet tab first.")
return}v.m(new C.e45(v))
v.m(new C.e46(v,u,new A.uT(d,e,0.0286,new A.Q(Date.now(),0,!1),0,0)))
v.auZ(new A.d1(w,u.a,g,B.jz,B.f9,"Direct investment buy: "+d,null,null,B.cj,new A.Q(Date.now(),0,!1)))
v.m(new C.e47(v))
v.lF("Plan purchased: "+d)},
lF(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.P(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
YM(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hr(s,new C.alA(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$YM)
case 3:w=4
return A.b(t.On(),$async$YM)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YM,v)},
ad2(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ad2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hr(s,new C.ago(r,A.a([r],x.d9),B.OG,t.a.d,t.gaWq(),t.gaVu(),null),!1,null,x.X),$async$ad2)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ad2,v)},
ad0(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ad0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hr(s,new C.ajb(r,t.a.d,t.e,t.gaWq(),t.gaVu(),new C.e49(t),null),!1,"LocalGrowthGameCenter",x.X),$async$ad0)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ad0,v)},
aaD(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aaD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new A.Q(s,0,!1)
w=C.fGq(j,t.e)?3:4
break
case 3:w=5
return A.b(t.aVv(!0),$async$aaD)
case 5:case 4:if(j.x==null){t.lF("Choose an investment plan first, then come back to clock in.")
t.m(new C.e3Y(t))
w=1
break}if(A.mg(r)===6||A.mg(r)===7){t.lF("Clock-in opens Monday through Friday.")
w=1
break}if(!C.fWD(r)){t.lF("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a65(q,r)&&j.fy>0){t.lF("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!A.aNC(q,r))if(!A.aNC(j.fr,r)){q=A.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,A.K)(p),++n){m=p[n]
if(B.a.i(m.b.toLowerCase())===B.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new A.aDD(m.y,l,m.a))}}q=A.h7a(q,r)}else q=p
else q=p}else q=!1
if(q){t.lF("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.lF("You are already clocked in for today.")
w=1
break}k=C.hqe(r)
q=j.a
t.m(new C.e3Z(j,r,k))
t.aWr(new A.d1("local_clockin_manual_"+q+"_"+s,j.a,0,B.fy,B.f9,"Clock-in session started (local)",null,null,B.cj,r),!1)
t.lF("Clock-in started. Keep Growth Income open for today.")
case 1:return A.h(u,v)}})
return A.i($async$aaD,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===B.H?B.j_:B.p4
if(l.d==null)return A.ef(B.ki,j,!0)
w=x.o
v=A.T(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=B.a.i(l.a.c.a.toLowerCase())
u=$.fje
u=u==null?k:u.$0()
u=J.aV(u==null?B.hZ:u)
while(u.C()){t=u.gT(u)
q=t.a
if(q.length===0||v.al(0,q)||A.rp(t))continue
if(B.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(A.dr(o.toLowerCase(),"clock-in",0))continue
v.n(0,q,t)}w=A.B(new A.bc(v,v.$ti.k("bc<2>")),w)
v=l.e
B.d.v(w,new A.a3(v,new C.e4p(),A.U(v).k("a3<1>")))
B.d.b0(w,new C.e4q())
v=l.d
v.toString
u=C.hEK(l.a.c)
t=l.d
t.toString
t=A.ef(new C.ak2(t,l.a.e,l.z,l.gc41(),l.aQB(),D.fpu),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=A.ef(new C.azb(l.aQB(),q,n,o,w,new C.e4r(l),l.gc66(),new C.e4s(l),D.fpv),j,!0)
m=A.aI(d,k,x.w).w
n=l.y
return new A.UL(n,new C.e4t(l),A.aE(!1,B.a1,!0,k,new A.a4(1/0,m.a.b,new A.am(B.X,k,B.a9,B.q,A.a([A.bZ(0,A.ef(k,j,!0),0,0,0),A.bZ(0,A.bq(!1,[new C.aza(v,u,w,l.gbWA(),new C.e4u(l),new C.e4v(l),new C.e4w(d),l.gc6X(),l.gc6T(),D.fpt),t,o][n],!0,!1,B.ah,!0,!0),0,0,0),A.an(0,l.byw(),k,k,0,0,k,k)],x.p),k),k),B.f,j,0,k,k,k,k,k,B.ad),k)},
aQB(){var w=null,v=A.a([D.eF.j(0.24),B.M.j(0.72)],x.O)
return A.hl(A.aK(!1,w,!0,A.p(B.A,D.bGr,B.f,w,w,new A.o(w,w,A.I(D.eF.j(0.38),B.r,1),w,A.a([new A.ac(0,B.G,D.eF.j(0.18),B.J,16)],x.V),new A.a5(B.ax,B.aC,B.x,v,w,w),B.a6),w,40,w,w,w,w,w,40),B.cJ,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e3V(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
byw(){var w=null,v=A.m(27),u=A.I(B.au.j(0.45),B.r,1),t=A.a([new A.ac(0,B.G,B.w.j(0.5),B.eQ,24),new A.ac(-2,B.G,B.au.j(0.12),B.J,18)],x.V)
return new A.C(B.KI,A.bq(!0,A.au(new A.cZ(D.aTA,A.p(w,A.cl(new C.e3T(this)),B.f,w,w,new A.o(w,w,u,v,t,D.bJm,B.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,B.ah,!0,!1),w)},
bYe(d){var w=null,v=this.y===d,u=D.cM8[d],t=u.b,s=u.a,r=""+d,q=x.W
return A.D(A.dq(w,!0,w,A.aH(B.c5,A.r5(A.pT(v?A.W(s,D.a9h,new A.cz("on"+r,q),w,w,21):A.v(A.a([A.W(s,B.c.j(0.62),w,w,w,19),B.bB,A.d(t,w,1,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,new A.cz("off"+r,q),B.b7,B.j,0,B.p),B.io,A.rm(),B.bb,B.bb,A.a04())),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e40(this,d),w,w,w,w,w,w,!1,B.ac),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,B.c0,w),1)}}
C.aza.prototype={
bVq(d){return C.fGr(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.M(d)
w=B.c.j(0.58)
v=f.e
u=A.U(v).k("a3<1>")
u=A.oS(new A.a3(v,new C.ddm(),u),3,u.k("G.E"))
t=A.B(u,A.a2(u).k("G.E"))
v=f.c
s=v.x
r=new A.Q(Date.now(),0,!1)
q=v.f
p=C.a65(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.fWD(r)
m=v.gBw()
l=A.a([D.eF.j(0.24),B.M.j(0.72)],x.O)
k=A.I(D.eF.j(0.38),B.r,1)
j=x.V
i=A.a([new A.ac(0,B.G,D.eF.j(0.18),B.J,16)],j)
l=A.aK(!1,e,!0,A.p(B.A,A.W(B.hV,D.eF,e,e,e,19),B.f,e,e,new A.o(e,e,k,e,i,new A.a5(B.ax,B.aC,B.x,l,e,e),B.a6),e,38,e,e,e,e,e,38),B.cJ,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=A.m(14)
k=A.m(14)
j=A.a([new A.ac(0,B.G,B.b2.j(0.45),B.cH,16)],j)
h=A.m(12)
g=x.p
j=A.bL3(!1,l,"GROWTH INCOME",A.aK(!1,i,!0,new A.a4(44,44,new A.am(B.X,e,B.a9,B.f,A.a([A.p(B.A,A.p(B.A,D.bz8,B.f,e,e,new A.o(B.ik.j(0.78),e,e,h,e,e,B.n),e,36,e,e,e,e,e,36),B.f,e,e,new A.o(e,e,e,k,j,D.bKN,B.n),e,42,e,e,e,e,e,42),A.an(e,A.p(B.A,D.bFx,B.f,e,e,new A.o(B.cr,e,A.I(D.abo,B.r,2),e,e,e,B.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.fZa(B.hc,new C.ddn(),k)
k=A.A(A.a([A.D(C.fZ9(new C.ddo(f,B.q9,n),new A.Q(Date.now(),0,!1),h,k),1),B.nN,A.D(new A.tY(new C.ddp(f,B.q9),e,new A.h1(A.a([$.xZ(),$.a18()],x.U)),e),1)],g),B.m,e,B.e,B.j,0,e,e)
h=f.bYo(B.q9,D.eF)
v=A.D(f.con("Total Profit","$"+A.dy(v.e),B.q9),1)
u=u?e:s.b
return A.ef(A.ci(A.v(A.a([j,B.S,k,B.aa,new C.az9(f.d,m,q,p,n,o,D.eF,f.gbVp(),f.f,e),B.aa,h,B.S,A.A(A.a([v,B.nN,A.D(f.b1D("Total Investment","$"+A.dy(u==null?0:u),B.q9,f.r),1)],g),B.m,e,B.e,B.j,0,e,e),B.S,f.bVm(d,t,D.eF,w)],g),B.ai,e,B.e,B.j,0,B.p),B.q,e,B.z,e,B.WA,e,e,B.aj),D.abo,!0)},
auw(d,e,f,g,h){var w=null,v=A.m(h),u=A.I(B.c.j(0.09),B.r,1),t=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dp,18)],x.V)
return A.p(w,A.bu(A.m(h-1),new A.am(B.X,w,B.a9,B.q,A.a([A.bZ(0,A.bW(w,new A.o(w,w,w,w,w,new A.bS(f,1.15,B.x,w,0,A.a([e.j(0.22),e.j(0)],x.O),w,w),B.n),B.bc),0,0,0),new A.C(g,d,w)],x.p),w),B.ao),B.f,w,w,new A.o(w,w,u,v,t,D.bJM,B.n),w,w,w,w,w,w,w,w)},
aVt(d,e,f,g){return this.auw(d,e,f,B.ah,g)},
b3r(d,e,f,g,h,i,j){var w=null,v=A.an(-14,A.W(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=A.m(30),s=A.I(f.j(0.4),B.r,1),r=x.p,q=this.aVt(new A.a4(w,80,new A.am(B.X,w,B.a9,B.q,A.a([v,new A.C(D.bjz,A.v(A.a([A.p(w,A.A(A.a([A.W(e,f,w,w,w,15),B.e9,A.d(h.toUpperCase(),w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.afi,w,w,w),B.b6,A.f1(B.a3,A.d(i,w,1,w,w,w,w,A.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,B.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.ec)],r),B.F,w,B.e,B.j,0,B.p),w)],r),w),w),f,B.kV,22)
if(g==null)return q
return A.aK(!1,A.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
bYo(d,e){var w,v,u,t,s=null,r=A.I(e.j(0.55),B.r,2),q=e.j(0.12),p=x.p,o=A.a([],p)
for(w=0;w<3;++w){v=new A.aZ(3,3)
o.push(A.p(s,s,B.f,s,s,new A.o(e,s,s,new A.bv(v,v,v,v),s,s,B.n),s,D.cxV[w],s,D.bn3,s,s,s,5))}r=A.p(s,A.A(o,B.dG,s,B.b7,B.j,0,s,s),B.f,s,s,new A.o(q,s,r,s,s,s,B.a6),s,42,s,s,s,s,s,42)
q=A.D(A.v(A.a([D.f9S,B.bB,A.A(A.a([A.p(s,s,B.f,s,s,new A.o(e,s,s,s,A.a([new A.ac(0,B.G,e,B.J,6)],x.V),s,B.a6),s,7,s,s,s,s,s,7),B.bp,new A.dl(1,B.ch,A.d("Live \xb7 real-time statistics",s,1,B.a2,s,s,s,A.l(s,s,B.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),B.m,s,B.e,B.j,0,s,s)],p),B.F,s,B.e,B.j,0,B.p),1)
o=A.m(16)
v=A.m(16)
u=B.w.j(0.3)
t=A.I(e.j(0.45),B.r,1.2)
return this.auw(A.A(A.a([r,D.ezj,q,B.ab,A.aK(!1,o,!0,A.p(s,A.v(A.a([A.W(B.oj,e.j(0.95),s,s,s,21),B.tU,A.d("PLAY",s,s,s,s,s,s,A.l(s,s,B.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,B.I,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),B.m,s,B.b7,B.j,0,B.p),B.f,s,s,new A.o(u,s,t,v,s,s,B.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),B.m,s,B.e,B.j,0,s,s),e,B.a3,B.W6,26)},
b1D(d,e,f,g){var w,v=null,u=B.a.t(d.toLowerCase(),"profit"),t=u?B.cr:B.aY,s=A.p(v,v,B.f,v,v,new A.o(t,v,v,D.aRR,v,v,B.n),v,v,v,B.mL,v,v,v,5),r=x.p
r=A.a([s,B.be,A.D(A.v(A.a([A.A(A.a([A.W(u?B.te:B.xr,t,v,v,v,14),B.e9,new A.dl(1,B.ch,A.d(d,v,1,B.a2,v,v,v,A.l(v,v,B.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),B.m,v,B.e,B.j,0,v,v),B.aq,A.f1(B.a3,A.d(e,v,1,v,v,v,v,D.eIc,v,v,v),B.f,B.ec)],r),B.F,v,B.b7,B.j,0,B.p),1)],r)
s=g==null
if(!s)r.push(new A.C(B.adA,A.W(B.en,B.c.j(0.35),v,v,v,v),v))
w=this.aVt(new A.a4(v,66,A.A(r,B.m,v,B.e,B.j,0,v,v),v),t,B.lk,20)
if(s)return w
return A.aK(!1,A.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
con(d,e,f){return this.b1D(d,e,f,null)},
bVm(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.p(m,m,B.f,m,m,new A.o(f,m,m,m,A.a([new A.ac(0,B.G,f,B.J,8)],x.V),m,B.a6),m,9,m,m,m,m,m,9),k=A.d("LIVE ACTIVITY",m,m,m,m,m,m,A.l(m,m,B.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,B.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=B.c.j(0.07),i=A.m(20),h=x.p
i=A.a([A.A(A.a([l,B.a4s,k,B.b6,A.p(m,A.d(""+e.length,m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.f,m,m,new A.o(j,m,m,i,m,m,B.n),m,m,m,m,B.WO,m,m,m)],h),B.m,m,B.e,B.j,0,m,m),B.P],h)
if(e.length===0)i.push(new A.C(B.VX,A.v(A.a([A.W(B.h3,g,m,m,m,30),B.aq,A.d("Nothing yet",m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.bB,A.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),B.L,m,m)],h),B.m,m,B.e,B.j,0,B.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=A.a([],h)
if(w>0)k.push(new A.m2(1,m,m,m,m,B.c.j(0.07),m))
j=e[w]
v=j.d
u=v===B.eI||v===B.jz
t=u?B.ji:D.eF
g=B.c.j(0.5)
v=new A.aZ(12,12)
s=A.a([t.j(0.28),t.j(0.08)],l)
r=new A.az(t.j(0.35),1,B.r,-1)
v=A.p(B.A,A.W(u?B.te:B.v_,t,m,m,m,18),B.f,m,m,new A.o(m,m,new A.bY(r,r,r,r),new A.bv(v,v,v,v),m,new A.a5(B.ax,B.aC,B.x,s,m,m),B.n),m,38,m,m,m,m,m,38)
s=C.hMQ(j)
q=C.h_Q(j.y)
s=A.v(A.a([new A.x(s,m,B.n4,m,m,m,m,B.a2,m,1,m,m),B.bB,new A.x(q,m,new A.F(!0,g,m,m,m,m,11,B.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.F,m,B.e,B.j,0,B.p)
q=t.j(0.14)
p=new A.aZ(20,20)
o=u?"-":"+"
n=A.dy(j.c)
q=A.p(m,new A.x(o+"$"+n,m,new A.F(!0,t,m,m,m,m,13,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),B.f,m,m,new A.o(q,m,m,new A.bv(p,p,p,p),m,m,B.n),m,m,m,m,B.nw,m,m,m)
j=C.h6N(j)
k.push(new A.C(F.W1,new A.cx(B.aX,B.e,B.j,B.m,m,B.p,m,0,A.a([v,B.be,new A.bH(1,B.bo,s,m),A.v(A.a([q,B.d5,new A.x(j,m,new A.F(!0,g,m,m,m,m,10,B.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.dG,m,B.e,B.j,0,B.p)],h),m),m))
B.d.v(i,k)}return this.auw(A.v(i,B.m,m,B.e,B.j,0,B.p),f,B.b1,D.bjH,26)}}
C.az9.prototype={
S(){return new C.beQ(null,null)},
cHz(d){return this.z.$1(d)},
cIK(){return this.Q.$0()}}
C.beQ.prototype={
Z(){var w,v=this,u=null
v.a0()
w=A.bj(u,B.pc,u,1,u,v)
w.cE(0)
v.d!==$&&A.aR()
v.d=w
w=A.bj(u,D.bhj,u,1,u,v)
w.cE(0)
v.e!==$&&A.aR()
v.e=w
w=A.bj(u,B.uu,u,1,u,v)
v.f!==$&&A.aR()
v.f=w
v.b2z()},
gb59(){var w=new A.Q(Date.now(),0,!1)
if(A.mg(w)===6||A.mg(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
b2z(){var w=this,v=w.a,u=v.e||v.f||w.gb59()
if(u){v=w.f
v===$&&A.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){v=w.f
v===$&&A.c()
v.cE(0)}else{if(!u){v=w.f
v===$&&A.c()
v=v.r
v=v!=null&&v.a!=null}else v=!1
if(v){v=w.f
v===$&&A.c()
v.bV(0)}}},
bq(d){this.bD(d)
this.b2z()},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
w.bpO()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gb59()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=B.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?B.au:g.x
g=g.r?new C.ddf(i):h
v=A.m(32)
s=A.m(32)
r=f?D.d0y:D.d0w
q=A.I((f?D.o_:B.ba).j(0.28),B.r,1.4)
p=x.V
o=A.a([new A.ac(0,B.G,(f?B.au:B.b8).j(0.16),B.fG,28)],p)
n=x.p
m=A.a([],n)
if(f)B.d.v(m,A.a([A.an(h,i.a9c(D.o_,130),h,h,h,-24,-30,h),A.an(-36,i.a9c(B.au,140),h,h,-28,h,h,h)],n))
else B.d.v(m,A.a([A.an(h,i.a9c(B.b8,120),h,h,h,-30,-36,h),A.an(-40,i.a9c(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bZ(0,A.e3(A.bu(l,new A.en(A.c5(k,new C.ddg(i),h),h),B.ao),!0,h),0,0,0))}if(f){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bZ(0,A.e3(A.bu(l,new A.en(A.c5(k,new C.ddh(i),h),h),B.ao),!0,h),0,0,0))}l=A.m(999)
k=B.c.j(0.06)
j=A.I(B.c.j(0.16),B.r,1)
m.push(A.an(h,new A.cZ(D.aTG,A.p(h,A.A(A.a([A.p(h,h,B.f,h,h,new A.o(t,h,h,h,A.a([new A.ac(0,B.G,t.j(0.5),B.J,8)],p),h,B.a6),h,8,h,h,h,h,h,8),B.ab,new A.dl(1,B.ch,A.d(u,h,1,B.a2,h,h,h,D.eNt,h,h,h),h)],n),B.m,h,B.e,B.Q,0,h,h),B.f,h,h,new A.o(k,h,j,l,h,h,B.n),h,h,h,h,B.h2,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.fZa(B.hc,new C.ddi(),l)
m.push(C.fZ9(new C.ddj(i,f,t,e,w),new A.Q(Date.now(),0,!1),j,l))
return A.aK(!1,v,!0,A.dh(h,new A.am(B.X,h,B.a9,B.f,m,h),h,h,B.bb,new A.o(h,h,q,s,o,new A.a5(B.ax,B.aC,B.x,r,h,h),B.n),B.zX,h,392,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
a9c(d,e){var w=null
return A.e3(A.p(w,w,B.f,w,w,new A.o(w,w,w,w,w,new A.bS(B.A,0.5,B.x,w,0,A.a([d.j(0.22),d.j(0)],x.O),w,w),B.a6),w,e,w,w,w,w,w,e),!0,w)}}
C.b8C.prototype={
aVw(d,e,f,g){var w=new A.aP($.V().r,B.ap,null,null,A.a([],x.g)),v=e.a,u=e.b,t=u-f
w.E(new A.b5(v,t))
w.E(new A.cR(v,u,v+f,u))
w.E(new A.cR(v,u,v,u+f))
w.E(new A.cR(v,u,v-f,u))
w.E(new A.cR(v,u,v,t))
w.E(new A.bE())
d.aM(w,g)},
a5(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=a8/2,b0=b3.b,b1=b0/2
for(w=a7.b,v=w*6.283185307179586,u=0;u<16;++u){t=B.k.G(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=B.k.G(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+B.o.G(u,3))+u)+1)/2
$.V()
q=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
q.r=B.c.j(0.1+r*0.5).gp(0)
a7.aVw(b2,new A.u(t*a8,s*b0),2+r*2.2,q)}for(a8=b2.a,b0=w*2,p=a7.e,o=0;o<3;++o){n=B.k.G(b0+o/3,1)
$.V()
m=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
m.b=B.ae
m.c=1.6
m.r=p.j((1-n)*0.38).gp(0)
l=m.H()
a8.drawCircle(a9,b1,138+n*90,l)
l.delete()}for(b0=a7.d,u=0;u<28;++u){k=B.k.G(w*(1+B.o.G(u,2))+u/28,1)
j=u*2.399963+Math.sin(u*1.7)*0.2
i=113.16+k*(70+B.o.G(u,5)*18)
h=a9+Math.cos(j)*i
g=b1+Math.sin(j)*i*0.96
f=B.k.D(Math.sin(k*3.141592653589793),0,1)
switch(B.o.G(u,4)){case 0:e=B.k.D(Math.abs(Math.cos(k*6.283185307179586*3)),0.28,1)
J.bA(a8.save())
a8.translate(h,g)
a8.scale(e,1)
$.V()
d=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
d.r=b0.j(f).gp(0)
l=d.H()
a8.drawCircle(0,0,6.5,l)
l.delete()
h=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
h.b=B.ae
h.c=1.2
h.r=p.j(f).gp(0)
l=h.H()
a8.drawCircle(0,0,6.5,l)
l.delete()
if(e>0.6&&f>0.35){h=$.hcj()
g=h.b
a0=g.c
g=g.a.c
h.a5(b2,new A.u(-a0/2,-g.gbb(g)/2))}a8.restore()
break
case 1:$.V()
a0=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
a0.r=p.j(f*0.95).gp(0)
a7.aVw(b2,new A.u(h,g),3+f*3,a0)
break
case 2:$.V()
a0=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
a0.r=B.c.j(f*0.8).gp(0)
l=a0.H()
a8.drawCircle(h,g,1.6+f*1.8,l)
l.delete()
break
default:a0=Math.cos(j)
a1=Math.sin(j)
a2=7+f*7
$.V()
a3=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
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
$.V()
g=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
g.r=p.j(o*0.85).gp(0)
l=g.H()
a8.drawCircle(a9+w*144,b1+h*144,1.4+o*2.6,l)
l.delete()}w=Math.cos(a5)
h=Math.sin(a5)
$.V()
g=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
g.r=b0.j(0.28).gp(0)
g.z=N.mi
l=g.H()
a8.drawCircle(a9+w*144,b1+h*144,7,l)
l.delete()}},
aq(d){return d.b!==this.b}}
C.b8B.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.V(),a4=A.L()
a4.r=this.d.j(0.075).gp(0)
for(w=a5.a,v=this.b,u=v*6.283185307179586,t=x.g,a3=a3.r,s=0;s<14;++s){r=u+s*6.283185307179586/14
q=A.a([],t)
p=new A.aP(a3,B.ap,e,e,q)
o=r-0.14361566416410484
q.push(new A.b5(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new A.ao(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
o=r+0.14361566416410484
q.push(new A.ao(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
q.push(new A.ao(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new A.bE())
n=a4.H()
q=p.gbH().a.snapshot()
w.drawPath((p.e=new A.cE(q)).a,n)
n.delete()}a0=v*2
a2=B.k.G(a0,1)
J.bA(w.save())
w.translate(a2*(d+240)-120,0)
a5.iV(0,0.35)
a2=-a1
a3=A.L()
a3.sar(new A.a5(B.a3,B.a7,B.x,A.a([B.c.j(0),B.c.j(0.07),B.c.j(0)],x.O),e,e).av(0,D.ete))
a5.aW(new A.a9(-18,a2,18,a2+a1*3),a3)
w.restore()
for(a2=a1+40,s=0;s<34;++s){m=B.k.G(Math.abs(Math.sin(s*91.7)*43758.5453),1)
l=B.k.G(v*(1+B.o.G(s,2))+s/34,1)
a3=l*6.283185307179586
u=Math.sin(a3*2+s)
J.bA(w.save())
w.translate(m*d+u*14,l*a2-20)
w.rotate(a3*(2+B.o.G(s,3))*180/3.141592653589793,0,0)
a3=B.k.D(Math.abs(Math.cos(a3*3+s)),0.3,1)
w.scale(1,a3)
if(l<0.08)a3=l/0.08
else a3=l>0.9?(1-l)/0.1:1
k=B.k.D(a3,0,1)
a3=A.by(D.etL,B.QI)
u=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
u.r=D.aun[B.o.G(s,6)].j(k*0.9).gp(0)
n=u.H()
w.drawRRect(A.et(a3),n)
n.delete()
w.restore()}j=[new A.u(d*0.18,a1*0.2),new A.u(d*0.82,a1*0.26),new A.u(d*0.5,a1*0.07)]
for(i=0;i<3;++i){l=B.k.G(a0+i/3,1)
if(l>0.5)continue
h=l/0.5
g=6+h*44
d=1-h
k=B.k.D(d,0,1)
for(a1=g*0.62,a2=g+5,s=0;s<14;++s){r=s*6.283185307179586/14
a3=Math.cos(r)
v=Math.sin(r)
f=D.aun[B.o.G(s+i,6)].j(k)
u=j[i]
t=u.a
u=u.b
$.V()
q=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
q.c=2
q.d=B.bO
q.r=f.gp(0)
n=q.H()
w.drawLine.apply(w,[t+a3*a1,u+v*a1,t+a3*g,u+v*g,n])
n.delete()
q=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
q.r=f.gp(0)
n=q.H()
w.drawCircle(t+a3*a2,u+v*a2,1.6,n)
n.delete()}a1=j[i]
$.V()
a2=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
a2.r=B.c.j(k).gp(0)
n=a2.H()
w.drawCircle(a1.a,a1.b,5*d,n)
n.delete()}},
aq(d){return d.b!==this.b}}
C.b8A.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a6.a/2,a1=a6.b/2,a2=new A.u(a0,a1),a3=a0-4,a4=a3-22
$.V()
w=A.L()
w.b=B.ae
w.c=14
v=e.d
w.r=(v?e.r:B.ba).j(0.22).gp(0)
a5.ae(a2,a3-7,w)
w=A.L()
w.b=B.ae
w.c=1.7
w.r=(v?e.f:B.c).j(0.28).gp(0)
a5.ae(a2,a3-1,w)
w=A.L()
w.b=B.ae
w.c=1.6
w.r=B.c.j(0.16).gp(0)
a5.ae(a2,a4+8,w)
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
w=$.V().r
t=x.g
p=new A.aP(w,B.ap,d,d,A.a([],t))
p.E(new A.kB(A.bT(a2,a4)))
a5.ty(0,p)
p=A.bT(a2,a4)
o=A.L()
o.sar(D.e0i.av(0,A.bT(a2,a4)))
a5.aW(p,o)
k=B.k.D(e.b,0,1)
if(k>0.004){a1+=a4
j=a1-a4*2*k
i=v?5.2:1.8
t=A.a([],t)
h=new A.aP(w,B.ap,d,d,t)
g=a0-a4
a1+=4
h.E(new A.b5(g,a1))
for(w=a0+a4,p=e.c*3.141592653589793,o=p*2,p*=2.2,n=i*0.42;g<=w;g+=3){m=(g-a0)/a4*3.141592653589793
m=new A.ao(g,j+Math.sin(m*2+o)*i+Math.sin(m*3.1-p)*n)
t.push(m)
f=h.f
if(f!=null)m.bw(f)
m=h.e
if(m!=null)m.a.delete()
h.e=null}h.E(new A.ao(w,a1))
h.E(new A.bE())
$.V()
a0=A.L()
a1=x.O
w=e.e
a1=v?A.a([e.f.j(0.55),w.j(0.78),e.r.j(0.92)],a1):A.a([w.j(0.22),D.eF.j(0.34),B.cY.j(0.62)],a1)
a0.sar(new A.a5(B.b1,B.b3,B.x,a1,d,d).av(0,A.bT(a2,a4)))
a5.aM(h,a0)
a0=A.L()
a0.b=B.ae
a0.c=2
a0.r=B.c.j(v?0.28:0.14).gp(0)
a5.aM(h,a0)}s.restore()},
aq(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.azb.prototype={
S(){var w=$.av()
return new C.azc(new A.ap(B.as,w),new A.ap(B.as,w))},
bc8(d,e){return this.w.$2$cloudRequest(d,e)}}
C.azc.prototype={
q(){var w=this.d,v=$.av()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a1()},
lF(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.P(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
cq4(d){this.a.bc8(d,!0)
this.lF("Deposit submitted. Admin will review your payment proof.")
this.m(new C.ddG())},
coR(){var w,v,u=this,t=A.d3(u.d.a.a)
if(t==null||t<=0){u.lF("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
A.hr(w,new C.anF(v.d,t,u.gcq3(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cwe(){var w,v,u,t,s=this,r=s.d,q=A.d3(r.a.a)
if(q==null||q<=0){s.lF("Enter an amount to withdraw.")
return}if(q<10){s.lF("Minimum withdrawal is $"+A.dy(10)+".")
return}w=s.a.d.d
if(q>w){s.lF("Insufficient balance. You have $"+A.dy(w)+".")
return}w=s.e
v=C.h8a(w.a.a)
if(v.length===0){s.lF("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.bc8(new A.d1("wd_"+1000*Date.now(),s.a.d.a,q,B.eI,B.kf,"Withdrawal to $"+v+" \u2014 Fee: $"+A.dy(u)+" \u2014 You receive: $"+A.dy(q-u),null,null,B.dr,new A.Q(Date.now(),0,!1)),!0)
s.lF("Withdrawal submitted \u2014 waiting for admin approval.")
r.bL(0,B.c3)
w.bL(0,B.c3)
s.m(new C.ddH())},
ctg(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,A.K)(w),++s){r=w[s]
if(r.x!==B.cj||!this.aSn(r)||A.fNQ(r))continue
q=r.d
p=q===B.eI||q===B.jz||q===B.eo
q=r.c
if(p)t+=q
else u+=q}return new A.blI(u,t)},
B(d){var w,v,u,t=this,s=null,r=t.ctg(),q=t.a.r,p=new A.a3(q,new C.ddI(),A.U(q).k("a3<1>")).gJ(0)
q=t.a
w=q.c
q=q.x
v=A.a([D.eF.j(0.24),B.M.j(0.72)],x.O)
u=A.I(D.eF.j(0.38),B.r,1)
q=A.bL3(!1,w,"WALLET",A.hl(A.aK(!1,s,!0,A.p(B.A,A.W(U.ail,D.eF,s,s,s,18),B.f,s,s,new A.o(s,s,u,s,s,new A.a5(B.ax,B.aC,B.x,v,s,s),B.a6),s,40,s,s,s,s,s,40),B.cJ,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),s,"Back up wallet",s,s))
v=t.bxc(r.a,r.b,p)
u=x.p
w=A.A(A.a([t.anH(B.v_,"Deposit",0),t.anH(B.te,"Withdraw",1),t.anH(B.h4,"History",2)],u),B.m,s,B.py,B.j,0,s,s)
return A.ef(A.bq(!1,A.ci(A.v(A.a([q,B.bu,v,B.d4,w,B.d4,A.pT(t.f===2?t.bSz():t.bXT(),B.i5,A.rm(),B.bb,B.bb,A.a04())],u),B.ai,s,B.e,B.j,0,B.p),B.q,s,B.z,s,D.blz,s,s,B.aj),!0,!1,B.ah,!0,!0),B.zt,!0)},
bxc(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.a.i(i.a.e)
if(B.a.t(g,"@")){w=B.a.cJ(g,"@")
v=B.a.ao(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+B.a.aY(g,w)}else v=g
w=A.m(26)
u=A.an(h,i.awE(220,0.1),h,h,h,-60,-70,h)
t=A.an(-90,i.awE(200,0.07),h,h,h,30,h,h)
s=A.an(-60,i.awE(150,0.05),h,h,-40,h,h,h)
r=A.m(26)
r=A.bZ(0,A.bW(h,new A.o(h,h,A.I(B.c.j(0.18),B.r,1),r,h,h,B.n),B.bc),0,0,0)
q=A.m(6)
p=x.p
q=A.A(A.a([A.p(h,A.b3(h,h,h,new C.b82(h),B.at),B.f,h,h,new A.o(h,h,h,q,h,D.bLQ,B.n),h,28,h,h,h,h,h,38),B.b6,D.fhE],p),B.m,h,B.e,B.j,0,h,h)
o=A.d("Available balance",h,h,h,h,h,h,A.l(h,h,B.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,B.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=A.f1(B.a3,C.aoo(new C.dds(i),D.eSD,i.a.d.a),B.f,B.ec)
m=A.a([A.D(i.aLj(B.uO,"In",d),1),A.D(i.aLj(B.x9,"Out",e),1)],p)
if(f>0){l=B.cR.j(0.22)
k=A.m(99)
j=A.I(B.ix.j(0.6),B.r,1)
m.push(A.p(h,A.d(""+f+" pending",h,h,h,h,h,h,D.eOp,h,h,h),B.f,h,h,new A.o(l,h,j,k,h,h,B.n),h,h,h,h,B.nw,h,h,h))}return new A.fE(1.62,A.bu(w,new A.am(B.X,h,B.a9,B.q,A.a([D.e_y,u,t,s,r,new A.C(A4.qr,A.v(A.a([q,B.b6,o,B.bB,n,B.b6,A.A(m,B.m,h,B.e,B.j,0,h,h),B.aq,A.d(v,h,1,B.a2,h,h,h,A.l(h,h,B.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,B.a4,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),B.F,h,B.e,B.j,0,B.p),h)],p),h),B.ao),h)},
awE(d,e){var w=null
return A.p(w,w,B.f,w,w,new A.o(w,w,A.I(B.c.j(e),B.r,22),w,w,w,B.a6),w,d,w,w,w,w,w,d)},
aLj(d,e,f){var w=null,v=B.c.j(0.16)
return A.A(A.a([A.p(w,A.W(d,B.c,w,w,w,13),B.f,w,w,new A.o(v,w,w,w,w,w,B.a6),w,22,w,w,w,w,w,22),B.bp,new A.dl(1,B.ch,A.f1(B.a3,A.d(e+"  $"+A.dy(f),w,w,w,w,w,w,B.r3,w,w,w),B.f,B.ec),w)],x.p),B.m,w,B.e,B.j,0,w,w)},
anH(d,e,f){var w=null,v=this.f===f,u=v?D.bN7:new A.a5(B.a3,B.a7,B.x,A.a([B.c.j(0.08),B.c.j(0.03)],x.O),w,w),t=A.I(v?B.c.j(0.6):D.eF.j(0.25),B.r,1),s=v?A.a([new A.ac(0,B.G,B.au.j(0.45),B.J,18)],x.V):w
u=A.dh(w,A.W(d,v?D.a9h:D.eF,w,w,w,26),w,w,B.cp,new A.o(w,w,t,w,s,u,B.a6),B.E9,w,62,w,w,w,w,62)
return A.aH(B.c5,new A.a4(92,w,A.v(A.a([u,D.eAd,A.d(e,w,w,w,w,w,w,A.l(w,w,v?B.c:B.aP,w,w,w,w,w,w,w,w,12.5,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ddr(this,f),w,w,w,w,w,w,!1,B.ac)},
bXT(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=A.d3(a1.a.a)
if(a2==null)a2=0
w=a0?D.eF:B.cw
v=a2>0
u=new C.ddD(e,w)
t=new C.ddC()
s=e.f
r=A.m(26)
q=x.O
p=A.a([w.j(0.1),B.rG,B.rG],q)
o=A.I(w.j(0.22),B.r,1)
n=x.V
m=A.a([new A.ac(0,B.G,B.w.j(0.35),B.eQ,22)],n)
l=w.j(0.15)
l=A.p(d,A.W(a0?B.v_:B.te,w,d,d,d,18),B.f,d,d,new A.o(l,d,d,d,d,d,B.a6),d,34,d,d,d,d,d,34)
k=A.D(A.d(a0?"Add money":"Take money out",d,d,d,d,d,d,B.fT,d,d,d),1)
j=B.c.j(0.06)
i=A.m(99)
h=x.p
i=A.A(A.a([l,B.aw,k,A.p(d,A.A(A.a([A.W(B.hV,w,d,d,d,14),A.d("Cash App",d,d,d,d,d,d,A.l(d,d,B.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,B.I,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),B.m,d,B.e,B.Q,0,d,d),B.f,d,d,new A.o(j,d,d,i,d,d,B.n),d,d,d,d,B.kC,d,d,d)],h),B.m,d,B.e,B.j,0,d,d)
l=A.d("$",d,d,d,d,d,d,A.l(d,d,v?w:B.bZ,d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=A.a([new A.tO(A.ae("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=A.A(A.a([new A.C(B.ir,l,d),B.d8,A.aTP(new A.cZ(D.aTZ,A.aL(d,B.U,!1,d,!0,B.q,d,A.aM(),a1,w,d,d,d,d,2,A.bo(d,B.ev,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,A.l(d,d,B.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),B.z,!0,d,!0,d,!1,d,B.ag,d,d,k,d,d,B.dR,d,d,d,1,d,d,!1,"\u2022",d,new C.ddB(e),d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,D.eVg,!0,B.L,d,B.am,d,d,d,d),d),d)],h),B.F,d,B.b7,B.j,0,d,d)
a1=v?120:60
a1=A.au(A.dh(d,d,d,d,B.bb,new A.o(d,d,d,A.m(99),d,new A.a5(B.a3,B.a7,B.x,A.a([w.j(0),w,w.j(0)],q),d,d),B.n),B.a1,d,3,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+A.dy(10)+" \xb7 admin sends it to your Cash App."
q=A.d(q,d,d,d,d,d,d,A.l(d,d,B.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,B.a4,d,1.35,!0,d,d,d,d,d,d,d,d),B.L,d,d)
l=A.a([],h)
j=a0?D.bQP:D.c4q
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=A.a([i,B.bu,k,B.aq,a1,B.P,q,B.ay,A.A(l,B.m,d,B.e,B.j,0,d,d)],h)
if(!a0){q=B.c.j(0.04)
l=A.W(B.hV,w,d,d,d,d)
k=A.l(d,d,B.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,B.O,d,d,!0,d,d,d,d,d,d,d,d)
l=A.a([B.ay,A.aL(d,B.U,!1,d,!0,B.q,d,A.aM(),e.e,d,d,d,d,d,2,A.bo(d,d,d,d,d,d,d,d,!0,new A.b4(4,A.m(16),new A.az(B.c.j(0.08),1,B.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new A.b4(4,A.m(16),new A.az(w,1,B.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),B.z,!0,d,!0,d,!1,d,B.ag,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,B.n3,!0,B.a5,d,B.am,d,d,d,d)],h)
if(v){q=B.c.j(0.04)
k=A.m(16)
B.d.v(l,A.a([B.aa,A.p(d,A.v(A.a([t.$2("Amount","$"+A.dy(a2)),t.$3$color("Fee (15%)","\u2212 $"+A.dy(a2*0.15),B.f8),A.iv(B.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+A.dy(a2*0.85),!0,D.eF)],h),B.m,d,B.e,B.j,0,B.p),B.f,d,d,new A.o(q,d,d,k,d,d,B.n),d,d,d,d,B.j4,d,d,d)],h))}B.d.v(a1,l)}a1.push(B.aN)
q=A.m(18)
l=a0?B.P1:P.ap8
n=A.a([new A.ac(0,B.G,(a0?B.aZ:B.dW).j(0.45),B.dp,18)],n)
k=a0?e.gcoQ():e.gcwd()
j=A.W(a0?B.LC:B.l7,d,d,d,d,20)
if(a0)i=v?"Deposit $"+A.dy(a2):"Deposit funds"
else i=v?"Withdraw $"+A.dy(a2):"Request withdrawal"
a1.push(new A.a4(d,54,A.bW(A.lj(j,A.d(i,d,d,d,d,d,d,B.oH,d,d,d),k,A.fk(d,d,B.K,d,d,d,d,d,d,B.c,d,d,d,B.K,new A.b7(A.m(18),B.Z),d,d,d,d,d)),new A.o(d,d,d,q,n,new A.a5(B.a3,B.a7,B.x,l,d,d),B.n),B.bc),d))
return A.p(d,A.v(a1,B.ai,d,B.e,B.j,0,B.p),B.f,d,d,new A.o(d,d,o,r,m,new A.a5(B.b1,B.b3,B.x,p,B.OA,d),B.n),d,d,new A.cz("form"+s,x.W),d,B.wP,d,d,d)},
bSz(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=A.U(a2).k("a3<1>"),a4=A.B(new A.a3(a2,new C.ddv(a0),a3),a3.k("G.E"))
B.d.b0(a4,new C.ddw())
w=B.a.i(a0.a.e.toLowerCase())
a2=A.T(x.N,x.o)
a3=$.fje
a3=a3==null?a1:a3.$0()
a3=J.aV(a3==null?B.hZ:a3)
while(a3.C()){v=a3.gT(a3)
u=v.a
if(u.length!==0&&B.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,A.K)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("bc<2>")
a2=A.B(new A.bc(a2,a3),a3.k("G.E"))
r=C.hNo(a2,A.JU(a0.a.e,new C.ddx(a0)))
a2=A.m(24)
a3=A.I(B.c.j(0.07),B.r,1)
v=A.m(99)
u=A.m(99)
q=x.p
u=A.a([A.A(A.a([D.bq7,A.aK(!1,v,!0,A.p(a1,D.euv,B.f,a1,a1,new A.o(a1,a1,A.I(D.eF.j(0.4),B.r,1),u,a1,a1,B.n),a1,a1,a1,a1,B.m2,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.ddy(a0),a1,a1,a1,a1,a1,a1,a1)],q),B.m,a1,B.e,B.j,0,a1,a1),B.S],q)
if(a4.length===0)u.push(new A.C(D.big,A.v(A.a([A.W(B.EL,B.c.j(0.25),a1,a1,a1,40),B.S,D.fet],q),B.m,a1,B.e,B.j,0,B.p),a1))
else{v=A.a([],q)
for(p=A.d9(a4,0,A.dI(a0.r,"count",x.S),A.U(a4).c),o=p.$ti,p=new A.bV(p,p.gJ(0),o.k("bV<ai.E>")),o=o.k("ai.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===B.eI||k===B.jz||k===B.eo
if(l===B.cj)i=j?B.cx:D.eF
else i=l===B.dr?B.ix:B.fS
h=j?"-":"+"
l=B.c.j(0.06)
k=i.j(0.14)
g=new A.az(i.j(0.4),1,B.r,-1)
k=A.p(a1,A.W(j?B.te:B.v_,i,a1,a1,a1,19),B.f,a1,a1,new A.o(k,a1,new A.bY(g,g,g,g),a1,a1,a1,B.a6),a1,42,a1,a1,a1,a1,a1,42)
f=a0.bMu(n)
e=C.h_Q(n.y)
d=B.c.j(0.5)
f=A.a([new A.x(f,a1,B.jV,a1,a1,a1,a1,a1,a1,a1,a1,a1),B.bB,new A.x(e,a1,new A.F(!0,d,a1,a1,a1,a1,11,B.a4,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1)],q)
e=n.f
if(B.a.i(e==null?"":e).length!==0){e.toString
d=B.c.j(0.4)
f.push(new A.x(e,a1,new A.F(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,B.a2,a1,1,a1,a1))}if(m!=null&&n.x!==B.jW)f.push(new A.C(E.adK,new A.Ex(B.bF,5,4,B.bx,A.a([a0.aKf("Before",m.b),a0.aKf("After",m.a)],q),a1),a1))
m=A.v(f,B.F,a1,B.e,B.j,0,B.p)
f=n.c
f=f===0?"\u2014":h+"$"+A.dy(f)
e=i.j(0.14)
d=new A.aZ(99,99)
n=C.h6N(n)
v.push(A.p(a1,new A.cx(B.aX,B.e,B.j,B.m,a1,B.p,a1,0,A.a([k,B.be,new A.bH(1,B.bo,m,a1),B.ab,A.v(A.a([new A.x(f,a1,new A.F(!0,i,a1,a1,a1,a1,15,B.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.av,A.p(a1,new A.x(n,a1,new A.F(!0,i,a1,a1,a1,a1,9.5,B.I,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.f,a1,a1,new A.o(e,a1,a1,new A.bv(d,d,d,d),a1,a1,B.n),a1,a1,a1,a1,B.Aj,a1,a1,a1)],q),B.dG,a1,B.e,B.j,0,B.p)],q),a1),B.f,a1,a1,new A.o(a1,a1,new A.bY(B.Z,B.Z,new A.az(l,1,B.r,-1),B.Z),a1,a1,a1,B.n),a1,a1,a1,a1,B.uw,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(A.ha(D.bDM,A.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,B.cb,a1,a1,a1),new C.ddz(a0),A.ft(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.eF,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
B.d.v(u,v)}return A.p(a1,A.v(u,B.ai,a1,B.e,B.j,0,B.p),B.f,a1,a1,new A.o(B.rG,a1,a3,a2,a1,a1,B.n),a1,a1,D.fpo,a1,D.bkt,a1,a1,a1)},
aKf(d,e){var w=null,v=B.c.j(0.05),u=A.m(7),t=A.I(B.c.j(0.1),B.r,1),s=A.dn(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=A.dy(e)
return A.p(w,A.Wi(A.dn(A.a([s,A.dn(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.eSN,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.nv,w,w,w)},
aSn(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(B.a.t(w,"clock-in session started"))return!1
v=d.d
if(v===B.eo)return d.c>0
if(A.rp(d))return!1
if(v===B.fn||v===B.eI)return!0
if(v===B.nS||v===B.jz)return!0
if(v===B.jX)return!0
if(v===B.fy)return B.a.t(w,"clock-in")||d.c>0
return!1},
bMu(d){var w,v=d.f
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
C.b82.prototype={
a5(d,e){var w,v,u,t
$.V()
w=A.L()
w.r=D.b2Z.j(0.55).gp(0)
w.c=1
v=e.a
u=v*0.35
t=e.b
d.bz(new A.u(u,0),new A.u(u,t),w)
u=v*0.65
d.bz(new A.u(u,0),new A.u(u,t),w)
t*=0.5
d.bz(new A.u(0,t),new A.u(v,t),w)},
aq(d){return!1}}
C.bso.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null
for(w=a4.b,v=this.b,u=v*6.283185307179586,t=a4.a,s=0+t,r=x.O,q=a3.a,p=0;p<3;++p){o=w*(0.2+0.25*p)+Math.sin(u+p*2)*14-40
n=new A.a9(0,o,s,o+80)
m=[B.b8,B.fV,B.bs][p]
$.V()
o=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
o.sar(new A.a5(B.b1,B.b3,B.x,A.a([m.j(0),m.j(0.1),m.j(0)],r),a2,a2).av(0,n))
l=o.H()
q.drawRect(A.c4(n),l)
l.delete()}for(k=0;k<46;++k){s=k*12.9898
j=Math.sin(s+78.233)*43758.5453
j=(j-Math.floor(j))*t
i=Math.sin(s+156.466)*43758.5453
h=(i-Math.floor(i))*w
g=0.25+0.75*(0.5+0.5*Math.sin(u*(1+B.o.G(k,3))+k))
i=Math.sin(s+234.699)*43758.5453
s=Math.floor(i)
$.V()
r=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
r.r=B.c.j(0.55*g).gp(0)
l=r.H()
q.drawCircle(j,h,0.7+(i-s)*1.5,l)
l.delete()
if(B.o.G(k,9)===0){f=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
f.r=B.o5.j(0.35*g).gp(0)
f.c=1
l=f.H()
q.drawLine.apply(q,[j-4,h,j+4,h,l])
l.delete()
l=f.H()
q.drawLine.apply(q,[j,h-4,j,h+4,l])
l.delete()}}for(u=-t*0.35,s=w*0.2,r=t*0.08,o=-w*0.02,v*=2,k=0;k<2;++k){f=B.k.G(v+k*0.5,1)
if(f>0.35)continue
p=f/0.35
e=t*(0.75-k*0.4)+u*p
d=w*(0.1+k*0.12)+s*p
$.V()
a0=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
a0.r=B.c.j(0.7*(1-p)).gp(0)
a0.c=1.6
a0.d=B.bO
l=a0.H()
q.drawLine.apply(q,[e+r,d+o,e,d,l])
l.delete()}for(u=t*0.62,w*=0.36,k=0;k<4;++k){f=B.k.G(v+k*0.25,1)
t=B.o5.j(0.5*Math.sin(f*3.141592653589793))
a1=new A.kt(new A.ep("z",a2,a2,B.cQ,a2,a2,a2,a2,a2,a2,new A.F(!0,t,a2,a2,a2,a2,12+f*14,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),B.a5,B.ci,new A.jB(1),a2,a2,a2,a2,B.cg,a2)
a1.eP()
a1.a5(a3,new A.u(u+Math.sin(f*6.283185307179586+k)*12+k*8,w-f*90))}},
aq(d){return d.b!==this.b}}
C.aIB.prototype={
aP(){this.aX()
this.aV()
this.dD()},
q(){var w=this,v=w.b1$
if(v!=null)v.a2(0,w.gdB())
w.b1$=null
w.a1()}}
C.buk.prototype={}
C.aXH.prototype={}
C.YR.prototype={
S(){return new C.aBA(new A.ap(B.as,$.av()))},
cJV(d,e){return this.d.$2(d,e)}}
C.aBA.prototype={
q(){var w=this.d
w.R$=$.av()
w.O$=0
this.a1()},
aVA(){var w=this,v=B.a.i(w.d.a.a),u=A.ae("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.m(new C.dZ6(w))
return}u=w.c
u.toString
A.a6(u,!1).M(null)
w.a.cJV(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=A.aI(a0,B.eC,e).w
e=A.aI(a0,B.e6,e).w
w=A.au(A.p(f,f,B.f,f,f,new A.o(B.b9,f,f,A.m(2),f,f,B.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=A.A(A.a([A.p(f,D.bDb,B.f,f,f,new A.o(f,f,f,f,A.a([new A.ac(0,B.G,B.fd.j(0.5),B.J,18)],v),D.akS,B.a6),f,52,f,f,f,f,f,52),B.eA,A.D(A.v(A.a([D.f31,B.bB,A.d(g.a.c,f,1,B.a2,f,f,f,B.oF,f,f,f)],u),B.F,f,B.e,B.j,0,B.p),1),A.aG(f,f,f,f,D.bE_,f,f,f,new C.dZ9(a0),f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,f,f)
s=g.b1m(B.eO,"You",B.cw)
r=B.aL.j(0.15)
q=A.m(99)
q=A.A(A.a([s,new A.C(B.lv,A.p(f,D.f6L,B.f,f,f,new A.o(r,f,A.I(B.aL.j(0.6),B.r,1),q,f,f,B.n),f,f,f,f,B.fN,f,f,f),f),g.b1m(B.uX,"Your friend",B.bY)],u),B.m,f,B.e,B.j,0,f,f)
r=B.c.j(0.06)
s=A.m(16)
p=B.c.j(0.12)
o=A.m(16)
n=g.f
if(n.length===0)n=f
o=A.aL(f,B.U,!0,f,!0,B.q,f,A.aM(),g.d,f,f,f,f,f,2,A.bo(f,f,f,f,f,f,f,f,!0,new A.b4(4,s,new A.az(p,1,B.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new A.b4(4,o,D.aSO),f,f,f,f,f,f,f,f,N.Co,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.bGm,f,f,f,f,f,f,f,f,f,f,f,f),B.z,!0,f,!0,f,!1,f,B.ag,f,f,f,f,f,B.lK,f,f,f,1,f,f,!1,"\u2022",f,new C.dZa(g),f,new C.dZb(g),f,!1,f,f,!1,f,!0,f,B.a8,f,f,f,f,f,f,f,f,f,f,f,B.iC,!0,B.a5,f,B.am,f,f,f,f)
r=A.a([],u)
for(m=0;m<4;++m){l=D.c_u[m]
s=new A.aZ(14,14)
p=g.e===l
n=p?D.akR:f
p=p?f:B.c.j(0.06)
k=new A.az(g.e===l?B.aA:B.bH,1,B.r,-1)
j=""+l
i=l===1?"game":"best of "+j
h=B.c.j(0.7)
s=A.a([new A.bH(1,B.bo,A.aH(f,A.dh(f,A.v(A.a([new A.x(j,f,B.dP,f,f,f,f,f,f,f,f,f),new A.x(i,f,new A.F(!0,h,f,f,f,f,10,B.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,B.p),f,f,B.bb,new A.o(p,f,new A.bY(k,k,k,k),new A.bv(s,s,s,s),f,n,B.n),B.eL,f,f,f,B.f2,f,f,f),B.z,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.dZc(g,l),f,f,f,f,f,f,!1,B.ac),f)],u)
if(l!==7)s.push(B.ab)
B.d.v(r,s)}s=A.A(r,B.m,f,B.e,B.j,0,f,f)
r=A.A(A.a([A.W(B.l5,B.c.j(0.5),f,f,f,15),B.bp,A.D(A.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,A.l(f,f,B.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),B.m,f,B.e,B.j,0,f,f)
p=A.m(18)
v=A.a([new A.ac(0,B.G,B.by.j(0.4),B.cv,18)],v)
n=g.e
j=n===1?"":"s"
return new A.C(new A.N(0,0,0,d.f.d+e.r.d),A.p(f,A.v(A.a([w,B.aN,t,B.bu,q,B.bu,D.fan,B.aq,o,B.aN,D.feh,B.P,s,B.ay,r,B.aN,new A.a4(f,54,A.bW(A.ha(D.aj9,A.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,B.fT,f,f,f),g.gc1r(),f),new A.o(f,f,f,p,v,D.bM_,B.n),B.bc),f)],u),B.ai,f,B.e,B.Q,0,B.p),B.f,f,f,D.aUK,f,f,f,f,D.blM,f,f,f),f)},
b1m(d,e,f){var w=null,v=f.j(0.1),u=A.m(16),t=A.I(f.j(0.45),B.r,1)
return A.D(A.p(w,A.v(A.a([A.W(d,f,w,w,w,24),B.av,A.d(e,w,w,w,w,w,w,B.a5B,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.f2,w,w,w),1)}}
C.oI.prototype={}
C.bno.prototype={
a5(d,e){var w,v,u,t,s,r=null,q=e.a/2,p=new A.u(q,e.b/2),o=q-4
for(q=d.a,w=0;w<37;++w){$.V()
v=new A.aq(B.W,B.V,B.a_,B.a0,B.Y)
if(w===0)u=B.bl
else u=(w&1)===0?B.bM:B.M
v.r=u.gp(0)
u=A.bT(p,o)
t=v.H()
q.drawArc.apply(q,[A.c4(u),(w*2*3.141592653589793/37-1.5707963267948966)*57.29577951308232,9.72972972972973,!0,t])
t.delete()}$.V()
q=A.L()
q.r=B.fj.gp(0)
q.b=B.ae
q.c=8
d.ae(p,o,q)
q=A.L()
q.r=B.aL.gp(0)
d.ae(p,o*0.22,q)
q=this.b
if(q!=null){s=A.ig(r,r,r,r,A.dn(r,r,r,r,r,r,r,r,r,B.aMs,A.t(q)),B.a5,B.ci,r,B.eq,B.cg)
s.eP()
q=s.b
u=q.c
q=q.a.c
s.a5(d,p.aB(0,new A.u(u/2,q.gbb(q)/2)))}},
aq(d){return d.b!=this.b}}
C.DE.prototype={
a3(){return"NgmyProMoveResult."+this.b}}
C.aoU.prototype={
gjC(){var w=this.d
w=w==null?null:w.a
return w!==!1},
bju(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.fG8("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.bTl()
w=s.gjC()
v=s.d
s.c=w?"You ("+v.b+") vs NGMY \u2014 capture all opponent discs":v.b+" vs "+v.c+" \u2014 capture all discs"
break
case"tic_tac_go":s.b=1
s.at=A.c0(9,"",!1,x.N)
s.ax=!0
if(s.gjC())w="You are X vs NGMY (O) \u2014 get 3 in a row"
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
s.dx=e.ag()*3.141592653589793*2
s.c=s.gjC()?"Aim and shoot \u2014 beat NGMY on the snooker table":"Aim and shoot \u2014 pocket balls"
break
case"connect_four_pro":s.b=1
u=J.e1(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=A.c0(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gjC())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.aUe(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aA_.h(0,d)
s.c=w==null?"Play to earn":w}},
b5V(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gjC()
if(o)return
o=x.N
s.x=A.a_(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b6(w,new C.c9E(),o)
v=A.B(v,v.$ti.k("ai.E"))
s.at=v
if(v.length<9){v=A.B(v,o)
B.d.v(v,A.c0(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=B.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===B.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.ctO(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.aoc(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b6(t,new C.c9F(),x.L)
o=A.B(o,o.$ti.k("ai.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)B.d.L(v,A.c0(7,0,!1,o))}if(A.iC(e.h(0,q)))o=A.ea(e.h(0,q))
else{o=A.c7(A.t(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bzl(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.aoc(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b6(t,new C.c9G(),x.L)
o=A.B(o,o.$ti.k("ai.E"))
s.y=o}if(A.iC(e.h(0,p)))o=A.ea(e.h(0,p))
else{o=A.c7(A.t(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bAA(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.aoc(e,f)
break}},
cDO(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=A.a_(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",A.bl(w.at,!0,q))
o.n(0,"turnEmail",w.ayI())
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
p=A.U(q).k("J<1,ak<H>>")
q=A.B(new A.J(q,new C.c9I(),p),p.k("ai.E"))
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
p=A.U(q).k("J<1,ak<H>>")
q=A.B(new A.J(q,new C.c9J(),p),p.k("ai.E"))
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
default:q=A.dU(o,q,p)
q.n(0,v,w.e)
q.n(0,s,w.w)
return q}},
ayI(){var w,v,u,t=this
if(t.gjC()){if(t.ax){w=t.d
w=w==null?null:w.d
if(w==null)w=""}else w="ngmy@system"
return w}w=t.x.h(0,"playerXEmail")
if(w==null){w=t.d
w=w==null?null:w.d}v=B.a.i(J.k(w==null?"":w).toLowerCase())
w=t.x.h(0,"playerOEmail")
if(w==null){w=t.d
w=w==null?null:w.e}u=B.a.i(J.k(w==null?"":w).toLowerCase())
return t.ax?v:u},
aoc(d,e){var w,v=this,u=B.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
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
ctO(d,e){var w,v,u,t,s,r="playerXEmail"
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
bzl(d,e){var w,v,u,t,s
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
bAA(d,e){var w,v,u,t,s,r,q
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
Sg(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gjC())return s
w=B.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return B.a.i(J.k(s==null?u.ayI():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
bTl(){var w,v,u=this,t=J.e1(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=A.io(8,new C.c9B(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
aUe(d){var w=20+d.aD(80),v=w+10+d.aD(50),u=4+d.aD(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bL(0,B.c3)},
cNd(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gjC())w=1
else{v=r.d
v=v==null?null:v.d
w=r.Sg(q,v==null?"":v)?r.z:-1}if(!r.gjC()){v=r.d
v=v==null?null:v.d
v=!r.Sg(q,v==null?"":v)}else v=!1
if(v)return!1
u=r.gjC()?r.z:w
if(!r.gjC()&&u!==r.z)return!1
t=J.q(r.y[d],e)
v=r.Q
if(v==null){if(t===r.z)v=!r.gjC()||t===1
else v=!1
if(v){r.Q=d
r.as=e}return!1}s=r.as
s.toString
if(d===v&&e===s){r.as=r.Q=null
return!1}if(Math.abs(d-v)===1&&Math.abs(e-s)===1&&t===0&&B.o.G(d+e,2)===1){J.aF(r.y[d],e,r.z)
J.aF(r.y[v],s,0)
r.as=r.Q=null
r.z=r.z===1?2:1
if(r.a75(2)){r.a8F(1)
return!0}if(r.a75(1)){r.a8F(2)
return!0}if(r.gjC()&&r.z===2){r.bvs(f)
if(r.a75(2)){r.a8F(1)
return!0}if(r.a75(1)){r.a8F(2)
return!0}}}return!1},
a8F(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
t.e=!0
w=t.f=d===1
if(t.gjC()){if(w){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+s}else v="NGMY wins \u2014 your discs are gone"
v=t.w=v}else{v=t.d
if(w){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+s}t.a=w?1:0
t.c=v
return!0},
bvs(d){var w,v,u,t,s,r,q,p,o,n=this,m=A.a([],x.B)
for(w=x.t,v=0;v<8;++v)for(u=0;u<8;++u){if(J.q(n.y[v],u)!==2)continue
for(t=[A.a([1,-1],w),A.a([1,1],w)],s=0;s<2;++s){r=t[s]
q=v+r[0]
p=u+r[1]
if(q>=0&&q<8&&p>=0&&p<8&&J.q(n.y[q],p)===0&&B.o.G(q+p,2)===1)m.push(A.a([v,u,q,p],w))}}w=m.length
if(w===0)return
o=m[d.aD(w)]
J.aF(n.y[o[2]],o[3],2)
J.aF(n.y[o[0]],o[1],0)
n.z=1},
a75(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)for(t=J.aV(w[u]);t.C();)if(t.gT(t)===d)return!1
return!0},
cNe(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.pB
if(!s.gjC()){w=s.d
w=w!=null&&!s.Sg("tic_tac_go",w.d)}else w=!1
if(w)return D.pB
if(s.gjC())v="X"
else{w=B.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===B.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.agO(v))return s.aPi(v,!0)
if(!B.d.t(s.at,""))return s.aPj()
s.ax=!s.ax
if(!s.gjC()){s.x.n(0,"turnEmail",s.ayI())
s.c=s.aTN()
return D.pB}if(s.gjC()){t=s.ccc(e)
if(t>=0){s.at[t]="O"
if(s.agO("O"))return s.aPi("O",!1)
if(!B.d.t(s.at,""))return s.aPj()
s.ax=!0}}s.c=s.gjC()?"Your turn \u2014 you are X":s.aTN()
return D.pB},
aTN(){var w=this.d
if(w==null)return"Take your turn"
return this.Sg("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aPi(d,e){var w,v,u=this
u.e=!0
u.f=e
u.r=!1
if(u.gjC()){if(e){w=u.d
w=w==null?null:w.b
w=(w==null?"You":w)+" wins with "+d+"!"}else w="NGMY wins with "+d+"!"
w=u.w=w}else{w=u.d
if(e){w=w==null?null:w.b
v=w==null?"You":w}else{w=w==null?null:w.c
v=w==null?"Opponent":w}w=u.w=v+" wins with "+d+"!"}u.c=w
u.a=e?1:0
return e?D.pC:D.GH},
aPj(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.PX},
ccc(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.agO("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.agO("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.cMx[u]
if(v[w].length===0)return w}return-1},
agO(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.cTw[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a1v(d){return B.d.cG(d,0,new C.c9H())},
cxN(d){this.ay.push(1+d.aD(10))
if(this.a1v(this.ay)>21)return!0
return!1},
cxO(d){var w,v,u,t=this
while(t.a1v(t.ch)<17)t.ch.push(1+d.aD(10))
t.CW=!0
w=t.a1v(t.ay)
v=t.a1v(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cDg(d,e){var w,v,u,t=this
if(t.e)return D.pB
if(!t.gjC()){w=t.d
w=w!=null&&!t.Sg("connect_four_pro",w.d)}else w=!1
if(w)return D.pB
if(t.gjC())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.pB
if(!t.adX(d,w))return D.pB
if(t.a6W(t.fx))return t.aPg(t.fx,!0)
if(t.aL3())return t.aPh()
w=t.fx===1?2:1
t.fx=w
if(t.gjC()&&w===2){u=t.cbB(e)
if(u>=0){t.adX(u,2)
if(t.a6W(2))return t.aPg(2,!1)
if(t.aL3())return t.aPh()
t.fx=1}}t.c=t.gjC()?"Your turn \u2014 drop a red disc":t.bzk()
return D.pB},
bzk(){var w=this.d
if(w==null)return"Drop a disc"
return this.Sg("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
adX(d,e){var w
for(w=5;w>=0;--w)if(J.q(this.fr[w],d)===0){J.aF(this.fr[w],d,e)
return!0}return!1},
aL3(){for(var w=0;w<7;++w)if(J.q(this.fr[0],w)===0)return!1
return!0},
aPg(d,e){var w,v,u,t=this
t.e=!0
t.f=e
t.r=!1
w=d===1?"red discs":"gold discs"
if(t.gjC()){if(e){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+" wins with "+w+"!"}else v="NGMY wins with "+w+"!"
v=t.w=v}else{v=t.d
if(e){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+" wins with "+w+"!"}t.c=v
t.a=e?1:0
return e?D.pC:D.GH},
aPh(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.PX},
cbB(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.adX(w,2)
v=r.a6W(2)
r.b3D(w)
if(v)return w}for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.adX(w,1)
u=r.a6W(1)
r.b3D(w)
if(u)return w}t=A.a([],x.t)
for(w=0;w<7;++w)if(J.q(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aD(s)]},
b3D(d){var w
for(w=0;w<6;++w)if(J.q(this.fr[w],d)!==0){J.aF(this.fr[w],d,0)
return}},
a6W(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.q(this.fr[w],v)!==d)continue
if(this.bzm(w,v,d))return!0}return!1},
bzm(d,e,f){var w,v,u,t=new C.c9A(this,d,e,f)
for(w=x.t,w=[A.a([0,1],w),A.a([1,0],w),A.a([1,1],w),A.a([1,-1],w)],v=0;v<4;++v){u=w[v]
if(t.$2(u[0],u[1])+t.$2(-u[0],-u[1])-1>=4)return!0}return!1},
b6Q(d){var w=this
if(B.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.aUe(d)}return w.a>=w.b}}
C.apO.prototype={
S(){return new C.aCl(null,null)},
cIO(d){return this.e.$1(d)}}
C.aCl.prototype={
Z(){var w,v=this
v.a0()
w=A.bj(null,D.bhm,null,1,null,v)
w.f2(0,!0)
v.d=w
v.a.d.aL(0,v.gaW1())
v.auN()},
bq(d){var w
this.bD(d)
w=this.a
if(d.c!==w.c){w.d.bL(0,B.c3)
this.auN()}},
auN(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.afC(t,u)
C.afC(t,u)
w.a.cIO(s)
w.a.toString
w.m(new C.etV())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
q(){var w,v=this
v.a.d.a2(0,v.gaW1())
w=v.d
w===$&&A.c()
w.q()
v.brn()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.afC(j,i),g=C.afC(j,i),f=j.length,e=i.length,d=A.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&A.c()
u=new A.aZ(1,1)
d.push(new A.vJ(new A.cV(v,!1,A.p(l,l,B.f,l,l,new A.o(B.aL,l,l,new A.bv(u,u,u,u),A.a([new A.ac(0,B.G,B.aL.j(0.6),B.J,6)],k),l,B.n),l,22,l,B.KR,l,l,l,3),l),B.Qv,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new A.ep(v,l,l,B.cQ,l,l,l,l,l,l,D.eQ_))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=B.c.j(0.4)
q=B.cq}else if(s===t){r=B.bf
q=B.O}else{r=B.aE
q=B.I}d.push(new A.ep(t,l,l,B.cQ,l,l,l,l,l,l,new A.F(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&A.c()
d.push(new A.vJ(new A.cV(k,!1,A.p(l,l,B.f,B.aL,l,l,l,22,l,l,l,l,l,3),l),B.Qv,l,l))}p=f===0?0:B.k.U(h/f*100)
k=B.w.j(0.35)
v=A.m(12)
u=A.I(B.b9,B.r,1)
o=x.p
v=A.p(l,A.v(A.a([A.A(A.a([m.aW0("Correct",""+h,B.bl),B.ab,m.aW0("Wrong / missed",""+(f-g),B.aE),B.b6,A.d(""+p+"% accuracy",l,l,l,l,l,l,F.a4V,l,l,l)],o),B.m,l,B.e,B.j,0,l,l),B.aq,D.f7P],o),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(k,l,u,v,l,l,B.n),l,l,l,l,B.bm,l,l,l)
u=A.D(A.ci(new A.a88(l,A.dn(d,l,l,l,l,l,l,l,l,l,l),l,l,l),B.q,l,B.z,l,l,l,l,B.aj),1)
k=m.a.d
g=A.l(l,l,B.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.w.j(0.35)
return A.v(A.a([v,B.aa,u,B.S,A.aL(l,B.U,!0,l,!0,B.q,l,A.aM(),k,l,l,l,l,l,2,A.bo(l,new A.b4(4,A.m(12),B.Z),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new A.b4(4,A.m(12),D.aSH),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.z,!0,l,!0,l,!1,l,B.ag,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,B.a8,l,l,l,l,l,l,l,l,l,l,l,D.aMr,!0,B.a5,l,B.am,l,l,l,l)],o),B.ai,l,B.e,B.j,0,B.p)},
aW0(d,e,f){var w=null,v=f.j(0.15),u=A.m(8)
return A.p(w,A.d(d+": "+e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(v,w,w,u,w,w,B.n),w,w,w,w,B.fN,w,w,w)}}
C.aK8.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a2(0,w.gbt())
w.a6$=null
w.a1()},
aP(){this.aX()
this.aV()
this.bu()}}
var z=a.updateTypes(["ax<~>()","~()","H(hZ,hZ)","~([wM?])","R(qk)","qk()","H(qT,qT)","R(qT)","H(qU,qU)","O6(Y)","R(hZ)","cI(abW)","Yy(Y)","XE(Y)","acH(Y)","a4Y(Y)","Mg(Y)","abx(Y,hy<ak<j2>>)","abw(Y,H)","r(qk)","qT(a1<@,@>)","~(DE,aoU)","M8(Y)","a1<n,@>(qT)","qU(a1<@,@>)","a1<n,@>(kf)","a1<n,@>(qU)","R(qU)","a1<n,@>(lp)","lp(@)","a1<n,@>(id)","id(@)","hZ(@)","ax<~>(kf)","a1<n,@>(hZ)","~(H,H)","hZ(hZ)","TQ(Y)","ax<R>(ak<hZ>)","Yx(Y)","~(hZ)","Zj(Y)","TR(Y)","n(hZ)","R(lp)","wp(bt<H,lp>)","aa4(Y,H)","H(id,id)","a9X(lp)","r(r_)","bH(Hz)","Y2(Y)","~(d1{bumpWalletRevision:R,cloudRequest:R})","~(n,O,O,O)","O(Q)","~(d1)","YR(Y)","~(DE)","n(n)","Zk(Y)"])
C.cnw.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.cnx(r,w,s.b,v,s.d)
t=s.e
r.b=A.dF(t,u)
v.r=new C.cnt(r)
v.e=new C.cnu(r,w)
v.f=new C.cnv(r,w,t,u)},
$S:0}
C.cnx.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.lb(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=A.a7(r)
u=A.cc(r)
s=v
q=u
p=A.F8(s,q)
if(p==null)p=new A.j0(s,q==null?A.a1n(s):q)
t=p
o.d.hc(t.a,t.b)
return}o.d.L(0,w)}else{o.e.a(null)
o.d.L(0,null)}},
$S:39}
C.cnt.prototype={
$0(){this.a.b.a8(0)
return $.FK()},
$S:1623}
C.cnu.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.arg.$0()
this.a.b.a8(0)},
$S:0}
C.cnv.prototype={
$0(){var w,v=this,u=v.b,t=A.dA(0,0,u.gb8V(),0,0,0)
u.ka(0)
u=v.c
w=v.a
w.b=A.cM(new A.b9(u.a-t.a),new C.cns(w,u,v.d))},
$S:0}
C.cns.prototype={
$0(){var w=this.c
this.a.b=A.dF(this.b,w)
w.$1(null)},
$S:0}
C.ePT.prototype={
$1(d){var w=this.a
w.m(new C.ePS(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.ePS.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hy(D.acW,this.b,null,null,v.$ti.k("hy<1>"))},
$S:0}
C.ePV.prototype={
$2(d,e){var w=this.a
w.m(new C.ePQ(w,d,e))},
$S:55}
C.ePQ.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hy(D.acW,null,this.b,this.c,v.$ti.k("hy<1>"))},
$S:0}
C.ePU.prototype={
$0(){var w=this.a
w.m(new C.ePR(w))},
$S:0}
C.ePR.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hy(B.zR,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fnb.prototype={
$1(d){return d.a===this.a&&B.a.i(d.b.toLowerCase())===this.b&&d.x===B.cj},
$S:16}
C.fn3.prototype={
$1(d){return d},
$S:13}
C.f7B.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return A.p(B.A,new A.C(new A.N(u,0,u,0),A.d("NGMY",w,1,B.eB,w,!1,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,B.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),B.f,w,w,B.a8e,w,v,w,w,w,w,w,v)},
$S:141}
C.f7y.prototype={
$3(d,e,f){return this.a.$0()},
$S:131}
C.f7z.prototype={
$2(d,e){var w,v=this,u=e.b
if(B.a.i(u==null?"":u).length!==0){u.toString
w=B.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return A.kd(w,B.A,v.d,new C.f7x(v.e),B.fO,v.c,!0,v.b,null,null,v.a)},
$S:1624}
C.f7x.prototype={
$3(d,e,f){return this.a.$0()},
$S:131}
C.f7A.prototype={
$3(d,e,f){return this.a.$0()},
$S:131}
C.d5l.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.d5w.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.d5O.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.d5P.prototype={
$1(d){return this.a.Iy()},
$S:14}
C.d5E.prototype={
$0(){var w=J.b6(this.b,new C.d5D(),x.P)
w=A.B(w,w.$ti.k("ai.E"))
this.a.f=w},
$S:0}
C.d5D.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.d5F.prototype={
$0(){var w=this.a,v=w.a.d.b4,u=A.U(v).k("J<1,a1<n,@>>")
v=A.B(new A.J(v,new C.d5C(),u),u.k("ai.E"))
w.f=v},
$S:0}
C.d5C.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.d5H.prototype={
$0(){var w=this.a,v=w.a.d.b4,u=A.U(v).k("J<1,a1<n,@>>")
v=A.B(new A.J(v,new C.d5G(),u),u.k("ai.E"))
w.f=v},
$S:0}
C.d5G.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.d5z.prototype={
$0(){var w=0,v=A.j(x.c),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.c59(t.a.c)?2:3
break
case 2:w=4
return A.b(C.any(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.m(new C.d5x(t))
case 3:if(t.c!=null)t.m(new C.d5y(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:53}
C.d5x.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d5y.prototype={
$0(){return this.a.d++},
$S:0}
C.d5A.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d5B.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d5r.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.hUo(t.a.d.b4,J.k(J.q(u.b,"id")),"rejected")
t.a.bo()
w=2
return A.b(C.afr(t.a.d.b4),$async$$0)
case 2:w=3
return A.b(t.Iy(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d5s.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a8(s)
C.hJo(t.a.d.b4,J.k(r.h(s,"id")),t.a.c.c)
t.a.bo()
w=2
return A.b(C.afr(t.a.d.b4),$async$$0)
case 2:w=3
return A.b(t.Iy(),$async$$0)
case 3:t.Hs(B.d.dH(t.y,new C.d5p(s),new C.d5q(t)),J.k(r.h(s,"id")))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d5p.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d5q.prototype={
$0(){return B.d.gK(this.a.y)},
$S:z+5}
C.d5t.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d5u.prototype={
$0(){return B.d.gK(this.a.y)},
$S:z+5}
C.d5v.prototype={
$0(){return this.a.Hs(this.b,J.k(J.q(this.c,"id")))},
$S:0}
C.d5o.prototype={
$0(){return this.a.bWm(this.b)},
$S:0}
C.d5n.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.hUQ(u,w.b,new C.d5m(v,w))},
$S:0}
C.d5m.prototype={
$2(d,e){return this.a.afh(this.b,d,e)},
$S:671}
C.d5N.prototype={
$2(d,e){if(d)return
this.a.aOW()},
$S:121}
C.d5L.prototype={
$2(d,e){var w=this.a
return new A.l_(C.aXG(w.a.c.a),new C.d5K(w,this.b,this.c),null,null,x.gH)},
$S:1626}
C.d5K.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=A.m(12)
v=A.m(12)
u=A.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return A.aE(!1,B.a1,!0,w,A.aK(!1,v,!0,new A.C(B.l2,A.bDe(B.cR,A.W(B.h4,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.d5J(this.a,d),t,t,t,t,t,t,t),B.f,this.b,0,t,t,t,t,t,B.ad)},
$S:1627}
C.d5J.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fjt(s.c.a,s.e).eN(new C.d5I())
w=2
return A.b(C.bAC(u.b,t.a.c.a),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d5I.prototype={
$1(d){},
$S:29}
C.d5M.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dJ5.prototype={
$0(){var w=this.a
return A.JU(w.a.c.a,new C.dJ4(w))},
$S:79}
C.dJ4.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dJ6.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&A.c()
u.bg=t.ac()
v.bo()
w.m(new C.dJ3())},
$S:0}
C.dJ3.prototype={
$0(){},
$S:0}
C.dJ7.prototype={
$2(d,e){var w,v=this.a
if(!C.c59(v.a.c)){if($.fG3.t(0,B.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.fG4(this.b,v.x,w)
return!1}C.any(v.a.c.a)}if(A.JU(v.a.c.a,new C.dJ2(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aDR()
w=v.a
w.toString
w.hl(new A.d1(B.o.u(1000*Date.now()),v.a.c.a,d,B.jz,B.f9,e,null,null,B.cj,new A.Q(Date.now(),0,!1)))
v.a.bo()
return!0},
$S:1628}
C.dJ2.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.dJ8.prototype={
$3$bonus(d,e,f){var w,v=null,u=B.o.u(1000*Date.now()),t=this.a,s=t.a
s.hl(new A.d1(u,s.c.a,d,B.fy,B.f9,e,v,v,B.cj,new A.Q(Date.now(),0,!1)))
t.a.bo()
w=f>0?"+$"+B.k.a9(d,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.a9(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.u8(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1629}
C.d5f.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d5i.prototype={
$0(){return A.iJ(this.a,null)},
$S:0}
C.d5j.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d5k.prototype={
$1(d){var w=null,v=this.a,u=A.fk(w,w,v.e===d?B.bl:A.X(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,w,w,w,w,w,w,w,w)
return A.D(new A.C(B.eX,A.i8(A.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.d5h(v,d),u),w),1)},
$S:227}
C.d5h.prototype={
$0(){var w=this.a
return w.m(new C.d5g(w,this.b))},
$S:0}
C.d5g.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d77.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.d7a.prototype={
$1(d){this.a.ccw()
return null},
$S:14}
C.d7b.prototype={
$1(d){return this.a.cs0()},
$S:14}
C.d7c.prototype={
$1(d){this.a.a0z()
return null},
$S:14}
C.d7d.prototype={
$1(d){this.a.agn()
return null},
$S:14}
C.d7e.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c4)return
w=v.Q
w===$&&A.c()
if(w<=0){v.m(new C.d78(v))
w=v.as
if(w!=null)w.a8(0)
v.E8()
return}v.m(new C.d79(v))},
$S:14}
C.d78.prototype={
$0(){return this.a.Q=0},
$S:0}
C.d79.prototype={
$0(){var w=this.a,v=w.Q
v===$&&A.c()
w.Q=v-1
return v},
$S:0}
C.d6n.prototype={
$0(){return this.a.bB=this.b},
$S:0}
C.d6o.prototype={
$0(){return this.a.bB=this.b},
$S:0}
C.d6R.prototype={
$1(d){return this.a.go.t(0,d)},
$S:54}
C.d6S.prototype={
$0(){},
$S:0}
C.d6D.prototype={
$0(){var w=this.b
w.c4=!0
w.cT="Waiting for both players\u2026"
w.cf="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.d6E.prototype={
$0(){var w=this.a
w.c4=!0
w.cT="Both players connected"
w.cf="Starting together in a moment\u2026"},
$S:0}
C.d6F.prototype={
$0(){var w=this.b
w.c4=!0
w.cT="Match starting together\u2026"
w.cf="Both players start in "+B.o.D(this.c,1,99)+"s"},
$S:0}
C.d6G.prototype={
$0(){this.b.c4=!1},
$S:0}
C.d6H.prototype={
$0(){},
$S:0}
C.d5Q.prototype={
$0(){var w=this.a,v=w.x2,u=A.t(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.d6m.prototype={
$0(){var w=this.a
w.at=this.b
w.b0U()},
$S:0}
C.d6T.prototype={
$0(){},
$S:0}
C.d71.prototype={
$0(){},
$S:0}
C.d6Q.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.d6P(w))},
$S:0}
C.d6P.prototype={
$0(){var w=this.a
w.y=!0
w.z=new A.Q(Date.now(),0,!1)},
$S:0}
C.d6k.prototype={
$0(){var w=this.a;++w.Y
w.y=!1
w.z=null},
$S:0}
C.d6l.prototype={
$0(){},
$S:0}
C.d6X.prototype={
$1(d){return d==null},
$S:264}
C.d6Y.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
B.d.cv(v.ch,w.d)},
$S:0}
C.d6Z.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.d5R.prototype={
$1(d){return d==null},
$S:264}
C.d5S.prototype={
$0(){return this.a.bg++},
$S:0}
C.d5T.prototype={
$0(){},
$S:0}
C.d6w.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.d6x.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.L(0,t)
w=this.c
u.L(0,w)
if(v.ghs()&&D.mm.t(0,v.a.e)){u=v.id
u.L(0,t)
u.L(0,w);++v.fx}++v.k2
v.fy=A.a([],x.t)},
$S:0}
C.d6y.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.d6v(w))},
$S:11}
C.d6v.prototype={
$0(){var w=this.a
w.fy=A.a([],x.t)
w.k1=!1},
$S:0}
C.d6I.prototype={
$0(){return this.a.y1++},
$S:0}
C.d6J.prototype={
$0(){},
$S:0}
C.d6K.prototype={
$0(){return this.a.y2++},
$S:0}
C.d6L.prototype={
$0(){},
$S:0}
C.d6M.prototype={
$0(){return this.a.b4++},
$S:0}
C.d6N.prototype={
$0(){},
$S:0}
C.d6W.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.d6z.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d6A.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.d6B.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d6C.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.d7_.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.d70.prototype={
$0(){var w=this.a
w.ok.push(w.d.aD(4))
w.p2=0},
$S:0}
C.d5U.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d5V.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.d5W.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d5X.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.d6U.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.d6V.prototype={
$0(){var w,v=this.a;++v.x2
v.aKR()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+A.t(Math.min(w+2,7))+" tiles"},
$S:0}
C.d6u.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.d6O.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d6s.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d6t.prototype={
$2(d,e){return d+e.length},
$S:204}
C.d72.prototype={
$0(){return A.iJ(this.a,null)},
$S:0}
C.d73.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d74.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.d76.prototype={
$1(d){var w=this.a,v=w.Ni(),u=v<=0?0:B.k.D(w.zm()/v,0,1),t=w.a.x,s=t*1.46
return new C.M8(w.f?s:s*u,s,t,null)},
$S:z+22}
C.d75.prototype={
$1(d){return d.bS(0.85)},
$S:165}
C.d6r.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghs()&&D.mm.t(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return A.v(A.a([A.d(p,w,w,w,w,w,w,B.jV,B.L,w,w),B.aq,A.D(A.au(new A.a4(r*v+u,r*t+s,A.ia(!0,w,w,B.z,new A.hM(v,6,6,1,r),new C.d6q(q,r),q.fr.length,w,B.dO,B.aj,!1),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
$S:143}
C.d6q.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.t(0,e),p=r.ghs()&&D.mm.t(0,r.a.e)&&q&&r.id.t(0,e),o=r.ghs()&&D.mm.t(0,r.a.e)&&q&&!p,n=B.d.t(r.fy,e)||q,m=p?D.akY:D.bJW,l=A.m(10),k=A.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.akY:D.akS
v=o?A.I(B.dy,B.r,2):s
u=A.a([new A.ac(0,B.G,A.X(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.J,4)],x.V)
t=this.b*0.42
return A.aK(!1,l,!0,A.dh(s,A.au(n?A.W(D.ccU[r.fr[e]],B.c,s,s,s,t):A.d("?",s,s,s,s,s,s,A.l(s,s,B.c,s,s,s,s,s,s,s,s,t,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,B.bb,new A.o(s,s,v,k,u,w,B.n),B.eL,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.d6p(r,e),s,s,s,s,s,s,s)},
$S:186}
C.d6p.prototype={
$0(){return this.a.cbT(this.b)},
$S:0}
C.d69.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?A.X(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.X(89,B.bl.l()>>>16&255,B.bl.l()>>>8&255,B.bl.l()&255),r=A.m(10),q=A.m(10),p=A.m(10),o=A.I(A.X(64,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
return A.aE(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(B.A,A.d(t?"":u,w,w,w,w,w,w,D.aLy,w,w,w),B.f,w,w,new A.o(w,w,o,p,w,w,B.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d68(v,d),w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.ad)},
$S:678}
C.d68.prototype={
$0(){return this.a.cri(this.b)},
$S:0}
C.d6a.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=A.X(46,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
return A.aE(!1,B.a1,!0,A.m(10),A.aK(!1,A.m(10),!0,A.p(B.A,A.d(u,w,w,w,w,w,w,D.aLy,w,w,w),B.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d67(v,d),w,w,w,w,w,w,w),B.f,t,0,w,w,w,w,w,B.ad)},
$S:678}
C.d67.prototype={
$0(){return this.a.crh(this.b)},
$S:0}
C.d6b.prototype={
$1(d){return this.a.m(new C.d66())},
$S:27}
C.d66.prototype={
$0(){},
$S:0}
C.d6c.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&A.c()
w=C.afC(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.ov()
if(u.ghs()&&D.mm.t(0,u.a.e)){u.ZU()
u.mz(!0)}else{v=B.d.cG(u.cy,0,new C.d64())
t=u.dx
if(t>=v)u.t8("All 5 sentences perfect \u2014 full payout!")
else u.DA(t/v,t,v)}}else{if(u.ghs()&&D.mm.t(0,u.a.e))u.ZU()
u.m(new C.d65(u))}},
$S:0}
C.d64.prototype={
$2(d,e){return d+e.length},
$S:204}
C.d65.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bL(0,B.c3)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.d6d.prototype={
$1(d){var w=null,v=A.fk(w,w,A.X(38,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,B.ce,w,w,w,w,w,w,w)
return new A.C(B.cM,new A.a4(1/0,w,A.i8(A.d(d,w,w,w,w,w,w,U.aLr,w,w,w),new C.d63(this.a,d),v),w),w)},
$S:133}
C.d63.prototype={
$0(){return this.a.b0g(this.b)},
$S:0}
C.d6e.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&A.c()
w=u*3+8
return A.v(A.a([A.d(s,v,v,v,v,v,v,B.oG,v,v,v),B.P,A.D(A.au(new A.a4(w,w,A.ia(!0,v,v,B.z,new A.hM(3,4,4,1,u),new C.d62(t,u),9,v,B.dO,B.aj,!1),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
$S:143}
C.d62.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.aZ6(e),p=r===0
if(p)w=B.K
else w=q?B.bl:A.X(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v=A.m(10)
s=p?t:new C.d5Z(s,e)
u=A.m(10)
p=p?"":""+r
return A.aE(!1,B.a1,!0,v,A.aK(!1,u,!0,A.au(A.d(p,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),B.f,w,0,t,t,t,t,t,B.ad)},
$S:74}
C.d5Z.prototype={
$0(){return this.a.crg(this.b)},
$S:0}
C.d6f.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.d61(q,d)
p=A.m(16)
if(o)w=D.a03[d]
else{w=D.a03[d]
w=A.X(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=A.m(16)
u=o?A.X(B.k.U(127.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.X(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
u=A.I(u,B.r,o?2:1)
t=x.V
if(o){s=D.a03[d]
t=A.a([new A.ac(0,B.G,A.X(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,16)],t)}else t=A.a([],t)
return A.aK(!1,p,!0,A.dh(r,r,r,r,B.bb,new A.o(w,r,u,v,t,r,B.n),T.zZ,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1633}
C.d61.prototype={
$0(){return this.a.crj(this.b)},
$S:0}
C.d6g.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&A.c()
q=A.d(q,t,t,t,t,t,t,B.oG,t,t,t)
w=A.d("Move "+r.avs()+"/"+C.fM8(),t,t,t,t,t,t,B.Cp,t,t,t)
v=r.x2
u=s*3+12
return A.v(A.a([q,w,A.d("Round "+v+"/7 \xb7 "+A.t(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,A.l(t,t,A.X(153,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.D(A.au(new A.a4(u,u,A.ia(!0,t,t,B.z,new A.hM(3,6,6,1,s),new C.d60(r),9,t,B.dO,B.aj,!1),t),t,t,t),1)],x.p),B.m,t,B.e,B.j,0,B.p)},
$S:143}
C.d60.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=A.m(10),s=A.m(10),r=u?B.bl:D.b4B,q=u?B.ew:D.bcr
return A.aE(!1,B.a1,!0,w,A.aK(!1,t,!0,A.p(w,w,B.f,w,w,new A.o(r,w,A.I(q,B.r,u?2.5:1),s,w,w,B.n),w,w,w,w,w,w,w,w),w,!0,w,w,B.K,w,w,w,w,w,w,w,w,new C.d5Y(v,e),w,w,w,w,B.K,w,w),B.f,B.K,0,w,w,w,w,w,B.ad)},
$S:74}
C.d5Y.prototype={
$0(){return this.a.cre(this.b)},
$S:0}
C.d6h.prototype={
$0(){return this.a.b0g(this.b[this.c])},
$S:0}
C.d6i.prototype={
$0(){return this.a.m(new C.d6_())},
$S:0}
C.d6_.prototype={
$0(){},
$S:0}
C.d6j.prototype={
$2(d,e){this.a.YF(d,e)
return null},
$S:z+21}
C.daF.prototype={
$1(d){return this.a.ccl(this.b,d)},
$S:1634}
C.daE.prototype={
$0(){var w=this
return w.a.a.cJm(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cyy.prototype={
$1(d){var w=this.a
w.a_a()
w.tf()},
$S:8}
C.cxT.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cxJ.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cxK.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cy2.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cy_.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cy0.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cy1.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cxV.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.cxU(w))},
$S:0}
C.cxU.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cxL.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ab(w.c)
v.dy=J.ab(w.d)
v.fr=J.ab(w.e)},
$S:0}
C.cxY.prototype={
$1(d){var w=this.a
return new C.TQ(w.fx,new C.cxX(w),w.a.f.r,null)},
$S:z+37}
C.cxX.prototype={
$1(d){return this.bf4(d)},
bf4(d){var w=0,v=A.j(x.y),u,t=this,s,r
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c63(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.m(new C.cxW(r,d))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+38}
C.cxW.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cyl.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cyf.prototype={
$1(d){this.a.tf()
return null},
$S:14}
C.cyi.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(B.o.am(v.gaRJ().a,1e6)<=0){w=v.id
if(w!=null)w.a8(0)
v.tf()
return}v.m(new C.cyh())},
$S:14}
C.cyh.prototype={
$0(){},
$S:0}
C.cye.prototype={
$1(d){this.a.Ef()
return null},
$S:14}
C.cyg.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cyd.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bi(J.k(v==null?"":v))
if(u==null)u=new A.Q(A.fN(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bi(J.k(v==null?"":v))
return u.aK(0,w==null?new A.Q(A.fN(0,0,!1),0,!1):w)},
$S:43}
C.cxQ.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bi(J.k(v==null?"":v))
if(u==null)u=new A.Q(A.fN(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bi(J.k(v==null?"":v))
return u.aK(0,w==null?new A.Q(A.fN(0,0,!1),0,!1):w)},
$S:43}
C.cxR.prototype={
$0(){var w=this.a,v=w.f
B.d.a7(v)
B.d.v(v,this.b)
w.ax=!0},
$S:0}
C.cxS.prototype={
$0(){var w=this.a
if(w.c!=null)w.a_R(!0)},
$S:11}
C.cxO.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cxP.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
if(w.f.length!==0)w.Sk(this.b)},
$S:8}
C.cy5.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=B.d.gcW(v).Q
v.toString
if(this.b)w.hQ(v)
else w.lJ(v,B.dU,B.kx)},
$S:8}
C.cxZ.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cy6.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cy7.prototype={
$0(){var w=this.a
w.f.push(A.E(["role","user","text",this.b,"at",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z))
w.b1H()
w.r.bL(0,B.c3)
w.at=!0},
$S:0}
C.cy8.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cy9.prototype={
$0(){var w=this.a
w.f.push(A.E(["role","ai","text",this.b,"at",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z))
w.at=!1},
$S:0}
C.cya.prototype={
$0(){var w,v=this.b,u=A.T(x.N,x.z)
J.aF(u,"role","ai")
J.aF(u,"text",this.c)
J.aF(u,"at",new A.Q(Date.now(),0,!1).a4().ab())
w=this.a
if(J.cu(w.b)){w=J.b6(w.b,v.gcbk(),x.P)
w=A.B(w,w.$ti.k("ai.E"))
J.aF(u,"phoneActions",w)}v.f.push(u)
v.b1H()},
$S:0}
C.cyb.prototype={
$0(){this.a.f.push(A.E(["role","ai","text",y.g,"at",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z))},
$S:0}
C.cyc.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cy3.prototype={
$1(d){return this.bf5(d)},
bf5(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
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
l=p.bP()
w=5
return A.b(C.anX(q,new C.qT("cal_"+1000*n,m,l,(o==null?p.bM(36e8):o).bP(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.aoj()
case 4:k.c.I(x.q).f.P(A.b2(null,null,null,B.d1,null,B.q,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:462}
C.cyk.prototype={
$1(d){return this.bf6(d)},
bf6(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.I(x.q).f.P(A.b2(null,null,null,B.d1,null,B.q,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:462}
C.cy4.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=B.d.gcW(v).Q
v.toString
w.hQ(v)},
$S:8}
C.cyx.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
if(v>0)w.a9e(v-1)},
$S:0}
C.cyq.prototype={
$0(){return A.iJ(this.a,null)},
$S:0}
C.cyt.prototype={
$1(d){var w=this.a
w.m(new C.cyn(w,d))
if(d===0)w.a_R(!0)},
$S:27}
C.cyn.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cyr.prototype={
$2$size(d,e){return C.fKt(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:1635}
C.cys.prototype={
$0(){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.fWW(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return A.b(H.aoM(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cyo(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return A.b(C.anV(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return A.b(p.tf(),$async$$0)
case 15:p.m(new C.cyp(p))
p.a9e(0)
case 14:u=!1
w=1
break
case 11:w=16
return A.b(p.tf(),$async$$0)
case 16:case 9:case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:61}
C.cyo.prototype={
$2(d,e){return this.bf7(d,e)},
bf7(d,e){var w=0,v=A.j(x.y),u,t=this,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=A.a0o(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$2,v)},
$S:116}
C.cyp.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cyv.prototype={
$2(d,e){return B.ab},
$S:36}
C.cyu.prototype={
$2(d,e){var w=null,v=this.a,u=A.d((v.a.c.w?D.a09:D.a_x)[e],w,w,w,w,w,w,B.pQ,w,w,w),t=A.X(31,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),s=A.X(89,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255)
v=v.at?w:new C.cym(v,e)
return A.mr(w,t,u,w,v,w,w,new A.az(s,1,B.r,-1),w)},
$S:548}
C.cym.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a09:D.a_x
w.r.saT(0,v[this.b])
w.my()
return null},
$S:0}
C.cyw.prototype={
$1(d){var w=this.a
return w.at?null:w.my()},
$S:2}
C.cxM.prototype={
$0(){return this.a.a9e(0)},
$S:0}
C.cyj.prototype={
$0(){return this.a.a9e(this.b)},
$S:0}
C.cxN.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=A.p(v,D.bEE,B.f,v,v,new A.o(v,v,v,v,v,new A.a5(B.a3,B.a7,B.x,A.a([A.X(51,B.aI.l()>>>16&255,B.aI.l()>>>8&255,B.aI.l()&255),w.b],x.O),v,v),B.a6),v,72,v,v,v,v,v,72)
t=w.c
s=A.d("Start a conversation",v,v,v,v,v,v,A.l(v,v,t?B.c:B.az,v,v,v,v,v,v,v,v,16,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.au(new A.C(B.VY,A.v(A.a([u,B.aa,s,B.aq,A.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,A.l(v,v,t?B.aA:B.aV,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v)],x.p),B.m,v,B.e,B.j,0,B.p),v),v,v,v)}if(e<s)return u.bAf(t[e],w.c)
return u.aLr(A.E(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:42}
C.bVw.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=B.k.N(d)
return new A.Q(A.fN(w>1e11?w:w*1000,0,!0),0,!0).bP()}v=A.bi(J.k(d))
return v==null?null:v.bP()},
$S:291}
C.bVv.prototype={
$1(d){A.aN(d)
return(d==null?0:d)/100},
$S:537}
C.bVy.prototype={
$1(d){var w
if(d==null)w=null
else{w=A.bi(J.k(d))
w=w==null?null:w.bP()}return w},
$S:291}
C.bVx.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null
if(!x.f.b(d))return m
w=A.a_(d,x.N,x.z)
try{v=J.q(w,"id")
v=J.k(v==null?"":v)
u=J.q(w,"userEmail")
u=J.k(u==null?"":u)
t=A.aN(J.q(w,"amount"))
if(t==null)t=0
s=J.q(w,"type")
s=A.a2V(B.a0Q,J.k(s==null?"reimbursement":s))
r=J.q(w,"method")
r=A.a2V(B.a_v,J.k(r==null?"system":r))
q=A.aT(J.q(w,"sourceDetails"))
p=J.q(w,"status")
p=A.a2V(B.FT,J.k(p==null?"approved":p))
o=this.a.$1(J.q(w,"timestamp"))
if(o==null)o=new A.Q(Date.now(),0,!1)
return new A.d1(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:532}
C.dr9.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dra.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dr0.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bl(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dqZ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.a
w=2
return A.b(o.zX(),$async$$0)
case 2:t=o.d
t===$&&A.c()
s=o.e
s===$&&A.c()
r=o.a.c
q=o.f
q===$&&A.c()
w=3
return A.b(C.fF3(t,s,r,q),$async$$0)
case 3:p=e
w=4
return A.b(A.oJ(o.a.c,!1),$async$$0)
case 4:o.kw(p)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dr8.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.a7N(),$async$$0)
case 3:q=e
if(q==null){r.kw("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return A.b(A.a6(s,!1).ck(A.eu(new C.dr7(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return A.b(A.oJ(r.a.c,!1),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dr7.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&A.c()
return new C.Yx(w.b,w.a,u,v,null)},
$S:z+39}
C.dqY.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.hq4(q)?3:4
break
case 3:w=5
return A.b(t.a.DP(B.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return A.b(C.aVh(q,s.a.c),$async$$0)
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
case 9:s.kw(C.bVA(s.a.c))
w=1
break
case 10:s.kw("That code didn't match anything on your account. Double-check it and try again.")
w=1
break
case 11:s.kw(y.B)
w=1
break
case 12:q=r.b
q.toString
w=14
return A.b(s.zd(q,!0,!0),$async$$0)
case 14:w=1
break
case 13:q=r.b
q.toString
w=15
return A.b(s.aMF(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dqX.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=A.bl(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dr_.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.ab3(),$async$$0)
case 3:q=e
if(q==null||B.a.i(q).length===0){w=1
break}s=C.fTR(q)
if(s==null){r.kw("Could not read that backup file.")
w=1
break}if(!C.bVz(s,r.a.c,null)){r.kw(C.bVA(r.a.c))
w=1
break}w=4
return A.b(r.bCz(s),$async$$0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dr6.prototype={
$1(d){var w=null,v=new A.ap(B.as,$.av()),u=A.M(d).ax.a===B.H,t=u?B.i3:B.c,s=x.p,r=A.v(A.a([A.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,A.l(w,w,u?B.af:B.ak,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),B.ay,A.aL(w,B.U,!0,w,!0,B.q,w,A.aM(),v,w,w,w,w,w,2,A.bo(w,new A.b4(4,A.m(14),B.df),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),B.z,!0,w,!0,w,!1,w,B.ag,w,w,w,w,w,B.dK,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.L,w,B.am,w,w,w,w)],s),B.F,w,B.e,B.Q,0,B.p)
return A.eq(A.a([A.bJ(!1,B.dd,w,w,!0,w,w,new C.dr4(d),w,w),A.bM(D.eY6,new C.dr5(d,v),A.bk(B.aT,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.faG,w)},
$S:19}
C.dr4.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.dr5.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a6(this.a,!1).M(w)
return null},
$S:0}
C.dr1.prototype={
$1(d){return D.ftQ},
$S:z+12}
C.dr2.prototype={
$0(){return this.a.DQ(B.a.i(this.b))},
$S:1}
C.dr3.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(C.aVh(t.b,r.a.c),$async$$0)
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
return A.b(r.zd(s,!0,!0),$async$$0)
case 11:w=1
break
case 7:r.kw(C.bVA(r.a.c))
w=1
break
case 8:r.kw("Could not read that QR code for your account.")
w=1
break
case 9:r.kw(y.B)
w=1
break
case 10:s=q.b
s.toString
w=12
return A.b(r.aMF(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.drb.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.drf.prototype={
$1(d){this.a.Pt()
return null},
$S:14}
C.drc.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.drd.prototype={
$0(){var w=null,v=this.a
A.fG(new A.fz(v.gatK()))
this.b.I(x.q).f.P(A.b2(w,w,w,w,w,B.q,w,A.d("Code "+v.gatK()+" copied",w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dre.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.drg.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!(B.a.a_(s,"NGMYSNAP1|")||B.a.a_(s,"NGMYLOCALSYNC1|")||B.a.a_(s,"NGMYLOCALLIVE1|")||B.a.a_(s,"NGMYLOCALDEP1|")))continue
r.e=!0
A.a6(this.b,!1).M(s)
return}},
$S:187}
C.faQ.prototype={
$1(d){return D.fs4},
$S:z+13}
C.fc2.prototype={
$1(d){return new C.acH(this.a,this.b,this.c,null)},
$S:z+14}
C.eJG.prototype={
$0(){A.a6(this.a,!1).M(!1)
return null},
$S:0}
C.eJH.prototype={
$0(){A.a6(this.a,!1).M(!0)
return null},
$S:0}
C.d0f.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fw()},
$S:8}
C.d0c.prototype={
$2(d,e){return e.aiu(e.a.toUpperCase())},
$S:1636}
C.d0d.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=B.a.i(w.d.a.a)
A.a6(v,!1).M(w)
return null},
$S:2}
C.d0e.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.bWh.prototype={
$1(d){var w=J.q(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!B.d.ba(D.d_N,B.a.gkC(v))},
$S:4}
C.fjn.prototype={
$1(d){return d.a===this.a},
$S:1637}
C.fjo.prototype={
$0(){return B.d.gK(B.Be)},
$S:1638}
C.dxB.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.m(new C.dxA(v))
w=v.r
w===$&&A.c()
if(w<=0)v.b0L("Time's up")},
$S:14}
C.dxA.prototype={
$0(){var w=this.a,v=w.r
v===$&&A.c()
w.r=v-1
return v},
$S:0}
C.dxs.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dxx.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.m(new C.dxu(w,d,e))},
$S:139}
C.dxu.prototype={
$0(){var w=this.a,v=this.c
w.e=B.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dxy.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.dxt(w))
w.clQ(!0)},
$S:0}
C.dxt.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dxz.prototype={
$1(d){this.a.b0L(d)
return null},
$S:2}
C.dxv.prototype={
$0(){return A.iJ(this.a,null)},
$S:0}
C.dxw.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.c2I.prototype={
$1(d){return D.djK},
$S:z+15}
C.c2H.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.fcS.prototype={
$5(d,e,f,g,h){var w,v=null,u=J.a8(d),t=A.aN(u.h(d,e)),s=t==null?v:B.k.N(t)
if(s==null)s=0
if(s<=0)return v
t=u.h(d,g)
if(J.k(t==null?"":t)!==h){u.n(d,g,h)
u.n(d,f,0)}t=A.aN(u.h(d,f))
w=t==null?v:B.k.N(t)
if(w==null)w=0
if(w>=s)return v
u.n(d,f,w+1)
u=A.aN(u.h(d,"outcome"))
return u==null?v:B.k.N(u)},
$S:1639}
C.fcT.prototype={
$2(d,e){var w=A.aN(J.q(d,e))
w=w==null?null:B.k.N(w)
return w==null?0:w},
$S:489}
C.fcU.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:204}
C.fqp.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.h47(w,v):C.fKL(w,v)
if(u===3)++w.f
C.ae5(w,this.c,u)
return u},
$S:1640}
C.fqr.prototype={
$0(){return C.h47(this.a,this.b)},
$S:112}
C.fqq.prototype={
$0(){return C.fKL(this.a,this.b)},
$S:112}
C.dqM.prototype={
$0(){var w=this.a
if(w.a.c)w.m(new C.dqL(w))},
$S:0}
C.dqL.prototype={
$0(){this.a.r=1+B.o.G(A.B2(new A.Q(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dqN.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&A.c()
u=u.x
u===$&&A.c()
w=B.k.bv(u*10)
if(w!==v.w)v.m(new C.dqK(v,w))}},
$S:0}
C.dqK.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.c4J.prototype={
$3(d,e,f){var w=null
return A.D(A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,B.I,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.bB,A.f1(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.ds)],x.p),B.m,w,B.e,B.j,0,B.p),1)},
$S:1641}
C.c4I.prototype={
$3(d,e,f){var w=null
return A.d("$"+B.k.a9(e,2),w,w,w,w,w,w,B.oF,w,w,w)},
$S:446}
C.c5a.prototype={
$1(d){return new C.Mg(this.a,this.b,!1,null,null)},
$S:z+16}
C.dQ8.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=A.m(e?0:30)
e=e?g:A.I(B.b2.j(0.5),B.r,1)
w=f.a.e?g:A.a([new A.ac(2,B.G,B.b2.j(0.35),B.J,36),new A.ac(0,B.G,B.by.j(0.175),B.J,24)],x.V)
v=A.m(f.a.e?0:30)
u=x.O
t=A.an(g,A.p(g,g,B.f,g,g,new A.o(g,g,g,g,g,new A.bS(B.A,0.5,B.x,g,0,A.a([B.b8.j(0.22),B.K],u),g,g),B.a6),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=A.an(-50,A.p(g,g,B.f,g,g,new A.o(g,g,g,g,g,new A.bS(B.A,0.5,B.x,g,0,A.a([B.by.j(0.18),B.K],u),g,g),B.a6),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?B.j:B.Q
p=x.p
o=A.a([],p)
if(f.a.e)o.push(B.P)
n=x.V
o.push(A.p(g,D.bAd,B.f,g,g,new A.o(g,g,A.I(B.aL.j(0.8),B.r,2.5),g,A.a([new A.ac(0,B.G,B.b2.j(0.55),B.cv,18)],n),E.tn,B.a6),g,88,g,g,g,g,g,88))
o.push(B.aN)
o.push(A.nv(B.je,D.f8t,new C.dQ4()))
o.push(B.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(A.d(m,g,g,g,g,g,g,A.l(g,g,B.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,B.cq,g,1.45,!0,g,g,g,g,g,g,g,g),B.L,g,g))
m=this.b
if(m.length!==0){l=B.cx.j(0.12)
k=A.m(18)
j=A.I(B.cx.j(0.45),B.r,1)
i=A.a([A.A(A.a([A.W(D.bud,B.cx.j(0.95),g,g,g,20),B.ab,A.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,A.l(g,g,B.cx.j(0.95),g,g,g,g,g,g,g,g,13,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),B.m,g,B.e,B.j,0,g,g),B.S,A.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,A.l(g,g,B.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),B.S],p)
B.d.v(i,new A.J(m,new C.dQ5(),A.U(m).k("J<1,r>")))
B.d.v(o,A.a([B.aN,A.p(g,A.v(i,B.F,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(l,g,j,k,g,g,B.n),g,g,g,g,B.bA,g,g,1/0)],p))}o.push(B.bu)
m=B.w.j(0.35)
l=A.m(18)
k=A.I(B.b2.j(0.35),B.r,1)
o.push(A.p(g,A.v(A.a([f.aul(B.h3,"Unlimited games with an active plan",B.b8),B.P,f.aul(B.k9,"Weekday check-ins grow your balance",B.b2),B.P,f.aul(B.m7,"Compete, bet, and earn points",B.aL)],p),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(m,g,k,l,g,g,B.n),g,g,g,g,B.bA,g,g,1/0))
o.push(B.d4)
l=A.m(16)
n=A.a([new A.ac(0,B.G,B.by.j(0.45),B.cv,16)],n)
o.push(new A.a4(1/0,g,A.bW(A.dp(D.bDq,D.f4i,new C.dQ6(f,a0),A.bk(B.K,g,g,g,B.c,B.HB,g,B.K,new A.b7(A.m(16),B.Z),g,g,g)),new A.o(g,g,g,l,n,E.tn,B.n),B.bc),g))
o.push(B.P)
n=f.a.e?"Back":"Maybe later"
o.push(A.bJ(!1,A.d(n,g,g,g,g,g,g,A.l(g,g,B.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,new C.dQ7(f,a0),g,g))
if(f.a.e)o.push(B.b6)
h=A.p(g,A.bu(v,new A.am(B.X,g,B.a9,B.q,A.a([t,u,new A.C(new A.N(22,r,22,q),A.v(o,B.m,g,B.e,s,0,B.p),g)],p),g),B.ao),B.f,g,g,new A.o(g,g,e,d,w,D.bMB,B.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return A.eB(g,B.K,h,g,g,g,Ac.Ws,B.cZ,g,g,g)},
$S:679}
C.dQ4.prototype={
$1(d){return D.bLB.av(0,d)},
$S:65}
C.dQ5.prototype={
$1(d){var w=null
return new A.C(B.ff,A.A(A.a([A.W(Aj.Yh,B.cx.j(0.85),w,w,w,14),B.ab,A.D(A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$S:133}
C.dQ6.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{A.a6(this.b,!1).M(null)
w.a.c.$0()}},
$S:0}
C.dQ7.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else A.a6(this.b,!1).M(null)},
$S:0}
C.flK.prototype={
$1(d){if(d.gme())this.a.a=d
return d.gme()},
$S:586}
C.flx.prototype={
$1(d){$.aU.x1$.push(new C.flw(this.a))},
$S:8}
C.flw.prototype={
$1(d){return this.a.$0()},
$S:8}
C.f96.prototype={
$1(d){return C.h4d(this.a,this.b+1)},
$S:8}
C.fn6.prototype={
$2(d,e){var w=A.aI(d,B.bR,x.w).w.a
return new A.a4(w.a,w.b,A.cb(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:163}
C.c5o.prototype={
$1(d){return d.r===this.a},
$S:243}
C.c5p.prototype={
$1(d){var w=$.aOx(),v=w.a
w.sp(0,v+1)
return v},
$S:1643}
C.c5q.prototype={
$1(d){},
$S:29}
C.c5n.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:243}
C.c5m.prototype={
$1(d){return d.f.c8(this.a)},
$S:243}
C.f7i.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:70}
C.fyx.prototype={
$1(d){return C.a5D(this.a)},
$S:103}
C.fyy.prototype={
$1(d){var w=$.aOx()
w.sp(0,w.a+1)},
$S:28}
C.fyz.prototype={
$1(d){},
$S:29}
C.fyA.prototype={
$1(d){return new A.k6($.aOx(),new C.fyw(this.a,this.b),null,null,x.am)},
$S:1644}
C.fyw.prototype={
$3(d,e,f){var w=this.b
return new A.l_(C.anE(this.a,!1),new C.fyv(w),w,null,x.gv)},
$S:1645}
C.fyv.prototype={
$2(d,e){var w=e.b
return new C.abx(w==null?this.a:w,null)},
$S:z+17}
C.dQb.prototype={
$1(d){return d.c},
$S:243}
C.dQc.prototype={
$1(d){return d.gbc_()},
$S:1646}
C.dQd.prototype={
$2(d,e){return d+e},
$S:91}
C.dQe.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.dQg.prototype={
$2(d,e){return B.P},
$S:36}
C.dQf.prototype={
$2(d,e){return new C.abw(J.q(this.a.c,e),null)},
$S:z+18}
C.dQa.prototype={
$1(d){return d==null?"\u2026":C.bx4(d)},
$S:1647}
C.fyD.prototype={
$3(d,e,f){var w=this
return A.r5(new C.ay5(w.a,w.b,w.c,w.d,new C.fyB(d,w.e),new C.fyC(d,w.f),null))},
$C:"$3",
$R:3,
$S:89}
C.fyB.prototype={
$0(){A.a6(this.a,!1).M(null)
C.h7b(this.b)},
$S:0}
C.fyC.prototype={
$0(){A.a6(this.a,!1).M(null)
C.h7b(this.b)},
$S:0}
C.d7g.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.a,g=h.f
g===$&&A.c()
w=h.e
v=0
for(;v<28;++v){u=g[v]
t=u.b+u.c
u.b=t
u.d+=0.08
if(t>320){u.b=-10
u.a=40+w.ag()*260
u.c=1.5+w.ag()*3}}g=x.p
w=A.a([],g)
if(h.a.c){t=h.f
B.d.v(w,new A.J(t,new C.d7f(),A.U(t).k("J<1,r>")))}t=h.d
t===$&&A.c()
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,A.aI(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?A.a([B.bl,B.ft,B.ee],r):A.a([B.aE,B.f0,B.eK],r)
p=A.m(26)
o=A.I(B.c.j(0.4),B.r,2)
n=x.V
m=A.a([new A.ac(6,B.G,(h.a.c?B.dv:B.dC).j(0.5),B.J,36)],n)
l=A.a([],g)
if(h.a.c){k=A.dj()
j=k.a
j.$flags&2&&A.ah(j)
j[11]=0.001
k.jA(-0.35)
r=A.a([X.abx,B.rv],r)
l.push(new A.a4(i,100,new A.am(B.A,i,B.a9,B.f,A.a([A.fq(B.A,A.p(i,D.b_n,B.f,i,i,new A.o(i,i,i,i,A.a([new A.ac(4,B.G,B.cR.j(0.6),B.J,24),new A.ac(0,B.G,B.w.j(0.3),B.dp,12)],n),new A.bS(B.A,0.5,B.x,i,0,r,i,i),B.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.bGB)
l.push(B.ay)
l.push(A.d(h.a.d,i,i,i,i,i,i,B.a5y,B.L,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=A.m(18)
k=A.I(B.ft,B.r,4)
B.d.v(l,A.a([B.ay,D.eZK,B.P,A.p(i,A.d(r,i,i,i,i,i,i,D.eQI,B.L,i,i),B.f,i,i,new A.o(B.c,i,k,n,i,i,B.n),i,i,i,i,B.VW,i,i,1/0)],g))}B.d.v(l,A.a([B.aa,A.d(h.a.e,i,i,i,i,i,i,D.eTj,B.L,i,i)],g))
l.push(B.e_)
r=A.D(A.dX(D.eXp,h.a.r,A.dd(i,i,i,i,i,i,i,i,i,B.c,i,i,B.ce,i,i,D.aSm,i,i,i,i)),1)
h=h.a
n=h.w
l.push(A.A(A.a([r,B.aw,A.D(A.bM(G.aMP,n,A.bk(B.c,i,i,i,h.c?B.ft:B.f0,i,B.ce,i,i,i,i,i)),1)],g),B.m,i,B.e,B.j,0,i,i))
w.push(A.e8(B.A,A.p(i,A.v(l,B.m,i,B.e,B.Q,0,B.p),B.f,i,i,new A.o(i,i,o,p,m,new A.a5(B.ax,B.aC,B.x,q,i,i),B.n),i,i,i,B.a8,B.af4,i,i,s),1+t*0.02,i,i))
return new A.am(B.A,i,B.a9,B.f,w,i)},
$S:114}
C.d7f.prototype={
$1(d){var w=null,v=d.a,u=d.b
return A.an(w,A.db(A.ey(B.A,d.d,A.W(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.c7_.prototype={
$2(d,e){var w=null,v=this.a,u=C.hpu(A.JU(v.c,v.d))
return A.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1648}
C.c6Z.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:70}
C.bWO.prototype={
$0(){},
$S:0}
C.f6h.prototype={
$1(d){return B.o.u(d)},
$S:81}
C.dJb.prototype={
$0(){return this.a.y=!0},
$S:0}
C.dJc.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.dJd.prototype={
$0(){var w=this.a
return w.w=D.OT[w.d.aD(5)]},
$S:0}
C.dJe.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.dJf.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.dJg.prototype={
$0(){var w=this.a
return w.m(new C.dJa(w))},
$S:0}
C.dJa.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dJh.prototype={
$0(){var w=this.a
return w.m(new C.dJ9(w))},
$S:0}
C.dJ9.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dJk.prototype={
$0(){return A.iJ(this.a,null)},
$S:0}
C.dJl.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&B.a.i(t.e.a.a).length===0?B.bl:A.X(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),r=A.m(10)
t=t.y?u:new C.dJj(t,d)
w=A.m(10)
v=B.k.a9(d,0)
return A.D(new A.C(B.jn,A.aE(!1,B.a1,!0,r,A.aK(!1,w,!0,new A.a4(u,38,A.au(A.d("$"+v,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),B.f,s,0,u,u,u,u,u,B.ad),u),1)},
$S:1649}
C.dJj.prototype={
$0(){var w=this.a
return w.m(new C.dJi(w,this.b))},
$S:0}
C.dJi.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bL(0,B.c3)},
$S:0}
C.dQy.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+B.cS.gcs().aG(this.c)},
$S:0}
C.dQz.prototype={
$0(){return A.iJ(this.a,null)},
$S:0}
C.dQu.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=A.m(14),s=u?B.c.j(0.1):B.K,r=A.I(u?D.eF.j(0.5):B.K,B.r,1),q=A.W(e,u?D.eF:B.aA,w,w,w,20)
return A.D(A.aH(w,A.dh(w,A.A(A.a([q,B.bp,A.d(f,w,w,w,w,w,w,A.l(w,w,u?B.c:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.b7,B.j,0,w,w),w,w,B.bb,new A.o(s,w,r,t,w,w,B.n),B.a1,w,46,w,w,w,w,w),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dQw(v,d),w,w,w,w,w,w,!1,B.ac),1)},
$S:1650}
C.dQw.prototype={
$0(){var w=this.a
return w.m(new C.dQv(w,this.b))},
$S:0}
C.dQv.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dQx.prototype={
$0(){var w=this.a,v=w.d===B.kf?"Cash App tag":"Bitcoin address"
return w.HR(this.b,v)},
$S:0}
C.dQt.prototype={
$0(){var w=this.a
return w.HR(w.gapa(),"Code")},
$S:0}
C.c5Q.prototype={
$1(d){return C.hlH(A.a_(d,x.N,x.z))},
$S:z+20}
C.c5R.prototype={
$2(d,e){return d.c.aK(0,e.c)},
$S:z+6}
C.c5N.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.c5O.prototype={
$2(d,e){return d.c.aK(0,e.c)},
$S:z+6}
C.c5P.prototype={
$1(d){return d.ac()},
$S:z+23}
C.c5S.prototype={
$1(d){var w=d.c
return!w.cV(this.a.bM(-36e8))&&!w.c8(this.b)},
$S:z+7}
C.bZb.prototype={
$1(d){return C.hlI(A.a_(d,x.N,x.z))},
$S:z+24}
C.bZc.prototype={
$2(d,e){return e.b.aK(0,d.b)},
$S:z+8}
C.bZ9.prototype={
$1(d){return d.ac()},
$S:z+26}
C.bZa.prototype={
$2(d,e){return e.b.aK(0,d.b)},
$S:z+8}
C.bZe.prototype={
$1(d){var w=d.b
return!w.cV(this.a)&&!w.c8(this.b)},
$S:z+27}
C.c5Z.prototype={
$1(d){return d.ac()},
$S:z+28}
C.c5Y.prototype={
$1(d){return C.fW5(A.a_(x.f.a(d),x.N,x.z))},
$S:z+29}
C.c5X.prototype={
$1(d){return d.ac()},
$S:z+30}
C.c5W.prototype={
$1(d){return C.hp8(A.a_(x.f.a(d),x.N,x.z))},
$S:z+31}
C.c60.prototype={
$1(d){return C.hp7(A.a_(x.f.a(d),x.N,x.z))},
$S:z+32}
C.c61.prototype={
$2(d,e){return B.o.aK(d.f,e.f)},
$S:z+2}
C.c62.prototype={
$1(d){return d.ac()},
$S:z+34}
C.dUd.prototype={
$1(d){return d.b7s(A.bl(d.e,!0,x.u))},
$S:z+36}
C.dUe.prototype={
$2(d,e){return B.o.aK(d.f,e.f)},
$S:z+2}
C.dU7.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dU8.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dTR.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.L(w,this.b)},
$S:0}
C.dTS.prototype={
$1(d){return new C.O6(this.a,null)},
$S:z+9}
C.dTT.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=B.d.bi(t,new C.dTQ(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){B.d.cv(u.d,w)
u.I_()}},
$S:0}
C.dTQ.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dU4.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(A.E(["role","admin","text",this.b],w,w))},
$S:0}
C.dU5.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(A.E(["role","ai","text",v],t,t))}else{v=t.d
v===$&&A.c()
t.d=C.hPd(v,w[0],w[3])
t.I_()
t=w[2]
if(t==null)t="Created "+J.ab(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(A.E(["role","ai","text",t],w,w))}},
$S:0}
C.dU6.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=B.d.gcW(v).Q
v.toString
w.hQ(v)}},
$S:8}
C.dTZ.prototype={
$1(d){return new C.O6(this.a,null)},
$S:z+9}
C.dU_.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dTY.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cv(w,this.b)},
$S:0}
C.dU3.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&A.c()
v=B.d.cv(w,s)
B.d.cl(t.d,u.a,v)
t.I_()},
$S:0}
C.dU2.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
return new C.Zk(u[w],new C.dU1(v,w),null)},
$S:z+59}
C.dU1.prototype={
$1(d){var w=this.a
return w.m(new C.dU0(w,this.b,d))},
$S:z+40}
C.dU0.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dTV.prototype={
$0(){var w=this.a
return w.m(new C.dTU(w))},
$S:0}
C.dTU.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dTW.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?B.cl:B.aJ
return new A.C(B.ff,A.d(t+": "+A.t(s),w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?B.a4:B.cq,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:109}
C.dTX.prototype={
$1(d){return this.a.a_y()},
$S:2}
C.dUc.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.rt:B.c
u=A.m(16)
t=A.m(16)
s=l?B.aJ:B.aK
r=w.d
q=A.b_(r).j(0.15)
p=A.m(12)
q=A.p(n,A.W(B.ahC,l?B.bI:B.ak,n,n,n,20),B.f,n,n,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.bT,n,n,n)
p=A.b_(r).j(0.12)
o=A.m(8)
o=A.p(n,A.W(w.c,A.b_(r),n,n,n,18),B.f,n,n,new A.o(p,n,n,o,n,n,B.n),n,n,n,n,B.hr,n,n,n)
r=A.A(A.a([o,B.aw,A.D(A.d(w.b,n,n,n,n,n,n,A.l(n,n,l?B.aO:B.M,n,n,n,n,n,n,n,n,n,n,n,B.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),B.m,n,B.e,B.j,0,n,n)
p=w.e.length
return new A.C(B.db,A.aE(!1,B.a1,!0,u,A.dM(!1,n,n,n,!0,n,n,n,!0,n,new H.asf(q,e,!0,n),n,n,n,n,new C.dU9(m,e),!1,n,n,new A.b7(t,new A.az(s,1,B.r,-1)),n,n,A.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,A.l(n,n,l?B.bI:B.ak,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,A.B1(n,n,n,new C.dUa(),B.J,new C.dUb(m,e),B.cm,n,x.N),n),B.f,v,0,n,n,n,n,n,B.ad),new A.cz(w.a,x.W))},
$S:109}
C.dUb.prototype={
$1(d){var w=this
if(d==="edit")w.a.a8e(w.b)
if(d==="questions")w.a.X4(w.b)
if(d==="delete")w.a.bFo(w.b)},
$S:2}
C.dUa.prototype={
$1(d){return D.cy3},
$S:125}
C.dU9.prototype={
$0(){return this.a.X4(this.b)},
$S:0}
C.cGZ.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q===$&&A.c()
w=d.a===q.a
if(w){q=r.f
q===$&&A.c()
q=A.b_(q).j(0.2)}else q=B.cU.j(0.1)
v=A.m(10)
if(w){u=r.f
u===$&&A.c()
u=A.b_(u)}else u=B.K
u=A.I(u,B.r,1)
t=r.f
t===$&&A.c()
return A.aK(!1,s,!0,A.p(s,A.W(d,A.b_(t),s,s,s,s),B.f,s,s,new A.o(q,s,u,v,s,s,B.n),s,s,s,s,B.cm,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cGY(r,d),s,s,s,s,s,s,s)},
$S:1651}
C.cGY.prototype={
$0(){var w=this.a
return w.m(new C.cGW(w,this.b))},
$S:0}
C.cGW.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cH_.prototype={
$1(d){var w=null,v=this.a,u=A.b_(d),t=v.f
t===$&&A.c()
return A.aH(w,A.hm(u,w,t===d?D.bE6:w,w,14),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cGX(v,d),w,w,w,w,w,w,!1,B.ac)},
$S:414}
C.cGX.prototype={
$0(){var w=this.a
return w.m(new C.cGV(w,this.b))},
$S:0}
C.cGV.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cH0.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.cH1.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=B.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&A.c()
v=v.f
v===$&&A.c()
t=u.cBi(v,w,t)
A.a6(this.b,!1).M(t)
return null},
$S:0}
C.eEL.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return w.push(this.b)},
$S:0}
C.eEM.prototype={
$1(d){return new C.Zj(this.a,null)},
$S:z+41}
C.eES.prototype={
$2(d,e){return B.P},
$S:36}
C.eER.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.rt:B.c
u=A.m(14)
t=A.m(14)
s=l?B.aJ:B.aK
r=w.d
if(r!=null&&r.length!==0){q=A.m(8)
r=A.bu(q,K.aNe(n,B.bQ,36,B.pi,l?B.bI:B.ak,r,48),B.ao)}else r=A.W(D.Y0,A.b_(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=A.d(q,n,2,B.a2,n,n,n,A.l(n,n,l?B.aO:B.M,n,n,n,n,n,n,n,n,n,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ab(w.c)
o=w.e?" \xb7 Printable":""
return A.aE(!1,B.a1,!0,u,A.dM(!1,n,n,n,!0,n,n,n,!0,n,r,n,n,n,n,new C.eEP(m,w,e),!1,n,n,new A.b7(t,new A.az(s,1,B.r,-1)),n,n,A.d(""+p+" block(s)"+o,n,n,n,n,n,n,A.l(n,n,l?B.bI:B.ak,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,A.aG(n,n,n,n,D.bCx,n,n,n,new C.eEQ(m,e),n,n,n,n,n,n),n),B.f,v,0,n,n,n,n,n,B.ad)},
$S:74}
C.eEQ.prototype={
$0(){var w=this.a
w.m(new C.eEN(w,this.b))
w.auo()},
$S:0}
C.eEN.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cv(w,this.b)},
$S:0}
C.eEP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.aX8(u.b),$async$$0)
case 2:s=e
if(s!=null){t.m(new C.eEO(t,u.c,s))
t.auo()}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eEO.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eEH.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eEF.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
return new C.TR(w,"Answer Document",null)},
$S:z+42}
C.eEG.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eEJ.prototype={
$0(){var w,v,u=this.a,t=u.a.c,s=u.d
s===$&&A.c()
s=B.a.i(s.a.a)
w=u.e
w===$&&A.c()
v=u.f
u=u.r
if(v==null)v=t.d
A.a6(this.b,!1).M(new C.id(t.a,s,w,v,u,t.f))
return null},
$S:0}
C.eEK.prototype={
$1(d){var w=this.a
return w.m(new C.eEI(w,d))},
$S:9}
C.eEI.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.c5T.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fnu.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dUO.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.dUu.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.L(w,new C.lp("image","",this.b,null))},
$S:0}
C.dUz.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.L(w,new C.lp("video","","data:video/mp4;base64,"+B.cS.gcs().aG(this.b),null))},
$S:0}
C.dUx.prototype={
$1(d){var w=null,v=x.p,u=A.v(A.a([A.aL(w,B.U,!1,w,!0,B.q,w,A.aM(),this.a,w,w,w,w,w,2,D.bIr,B.z,!0,w,!0,w,!1,w,B.ag,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.am,w,w,w,w),A.aL(w,B.U,!1,w,!0,B.q,w,A.aM(),this.b,w,w,w,w,w,2,D.bIq,B.z,!0,w,!0,w,!1,w,B.ag,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.am,w,w,w,w)],v),B.m,w,B.e,B.Q,0,B.p)
return A.eq(A.a([A.bJ(!1,B.dd,w,w,!0,w,w,new C.dUv(d),w,w),A.bM(D.f8_,new C.dUw(d),w)],v),w,w,w,u,w,w,w,w,D.eWM,w)},
$S:19}
C.dUv.prototype={
$0(){A.a6(this.a,!1).M(!1)
return null},
$S:0}
C.dUw.prototype={
$0(){A.a6(this.a,!1).M(!0)
return null},
$S:0}
C.dUy.prototype={
$0(){var w,v=this.a.e
v===$&&A.c()
w=B.a.i(this.b.a.a)
return B.d.L(v,new C.lp("link","",B.a.i(this.c.a.a),w))},
$S:0}
C.dUq.prototype={
$1(d){return B.a.i(d)},
$S:13}
C.dUr.prototype={
$1(d){return d.length!==0},
$S:3}
C.dUs.prototype={
$1(d){return B.a.i(B.a.e4(d,A.ae("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.dUt.prototype={
$1(d){return d.length!==0},
$S:3}
C.dUE.prototype={
$0(){var w=this.a.byO()
A.a6(this.b,!1).M(w)
return null},
$S:0}
C.dUF.prototype={
$0(){return this.a.aup("**","**")},
$S:0}
C.dUG.prototype={
$0(){return this.a.aup("*","*")},
$S:0}
C.dUH.prototype={
$0(){return this.a.aup("__","__")},
$S:0}
C.dUI.prototype={
$0(){return this.a.aVl("## Section title")},
$S:0}
C.dUJ.prototype={
$0(){return this.a.aVl("\u2022 First point\n\u2022 Second point")},
$S:0}
C.dUK.prototype={
$0(){},
$S:0}
C.dUL.prototype={
$0(){var w=this.a
w.m(new C.dUD(w))},
$S:0}
C.dUD.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.L(w,D.dn5)},
$S:0}
C.dUM.prototype={
$0(){var w=this.a
w.m(new C.dUC(w))},
$S:0}
C.dUC.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.L(w,D.dn6)},
$S:0}
C.dUN.prototype={
$1(d){var w,v,u=null,t=d.b,s=t.a
A:{if("image"===s){w="Image"
break A}if("video"===s){w="Video"
break A}if("link"===s){w=t.d
if(w==null)w="Link"
break A}if("signature"===s){w="Signature"
break A}w=s
break A}v=this.b.a
w=A.d(w,u,u,u,u,u,u,A.l(u,u,v?B.iK:B.az,u,u,u,u,u,u,u,u,11,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
v=v?B.cB:B.iH
return A.Cs(u,v,B.ajP,w,u,new C.dUB(this.a,d),u)},
$S:z+45}
C.dUB.prototype={
$0(){var w=this.a
return w.m(new C.dUA(w,this.b))},
$S:0}
C.dUA.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.cv(w,this.b.a)},
$S:0}
C.dUn.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.aPy},
$S:0}
C.dUo.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.fsW},
$S:0}
C.dUf.prototype={
$0(){var w=this.a
w.d=D.aPx
w.f=w.e=null},
$S:0}
C.dUg.prototype={
$0(){var w=this.a
w.d=D.aPy
w.f=null},
$S:0}
C.dUp.prototype={
$2(d,e){return B.o.aK(d.f,e.f)},
$S:z+2}
C.dUi.prototype={
$2(d,e){var w=this.a,v=w.gb1I()[e]
return new C.aa4(v,this.b,new C.dUh(w,v),null)},
$S:z+46}
C.dUh.prototype={
$0(){return this.a.c0Q(this.b.a)},
$S:0}
C.dUk.prototype={
$2(d,e){return B.o.aK(d.f,e.f)},
$S:z+47}
C.dUm.prototype={
$2(d,e){return B.S},
$S:36}
C.dUl.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.rt:B.c,p=A.m(16),o=A.m(16),n=A.m(16),m=A.I(r?B.aJ:B.aK,B.r,1),l=A.a([new A.ac(0,B.G,B.w.j(r?0.28:0.06),B.dz,8)],x.V),k=A.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=A.m(10)
v=A.m(10)
k.push(A.bu(w,K.aNe(v,B.bQ,52,D.Y0,r?B.bI:B.ak,j,52),B.ao))}else{j=u.d.d
w=A.b_(j).j(0.15)
v=A.m(12)
k.push(A.p(t,A.W(D.Y0,A.b_(j),t,t,t,24),B.f,t,t,new A.o(w,t,t,v,t,t,B.n),t,52,t,t,t,t,t,52))}k.push(B.be)
k.push(A.D(A.d(s.b,t,t,t,t,t,t,A.l(t,t,r?B.aO:B.M,t,t,t,t,t,t,t,t,13,t,t,B.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(A.W(B.en,r?B.bI:B.ak,t,t,t,22))
return A.aE(!1,B.a1,!0,p,A.aK(!1,o,!0,A.p(t,A.A(k,B.m,t,B.e,B.j,0,t,t),B.f,t,t,new A.o(t,t,m,n,l,t,B.n),t,t,t,t,B.bm,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dUj(u.a,s),t,t,t,t,t,t,t),B.f,q,0,t,t,t,t,t,B.ad)},
$S:74}
C.dUj.prototype={
$0(){return this.a.c7x(this.b)},
$S:0}
C.c5V.prototype={
$1(d){return new C.a9X(d,this.a,null)},
$S:z+48}
C.cAF.prototype={
$0(){var w=this.a.c,v=w.c,u=A.o9(v==null?w.b:v)
if(u!=null)A.iN(u,B.fg,null)},
$S:0}
C.cAG.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.cAH.prototype={
$1(d){var w=null,v=this.a.d.a,u=A.d("\u2022  ",w,w,w,w,w,w,A.l(w,w,v?B.cl:B.aJ,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=B.a.i(d)
return new A.C(B.ob,A.A(A.a([u,A.D(A.d(t,w,w,w,w,w,w,A.l(w,w,v?B.cl:B.aJ,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.F,w,B.e,B.j,0,w,w),w)},
$S:133}
C.dby.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dbA.prototype={
$0(){return this.a.m(new C.dbz(this.b))},
$S:0}
C.dbz.prototype={
$0(){var w=this.a
return w.a.f?w.fT(0):w.pg(0)},
$S:0}
C.f61.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.dV1.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.BD)w.z=v
else w.Q=v},
$S:0}
C.dUT.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=B.d.gcW(v).Q
v.toString
w.lJ(v,B.cp,B.eM)},
$S:8}
C.dUV.prototype={
$1(d){return J.q(d,"role")==="ai"},
$S:93}
C.dUW.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.E(["role","user","text",this.b],v,v))
w.d.bL(0,B.c3)
w.r=!0},
$S:0}
C.dUX.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.E(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.dUY.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+A.t(w.h(d,"text"))},
$S:150}
C.dUZ.prototype={
$0(){var w=x.N
return this.a.f.push(A.E(["role","ai","text",this.b],w,w))},
$S:0}
C.dV_.prototype={
$0(){var w=x.N
return this.a.f.push(A.E(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.dV0.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dUU.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=A.mu(l,B.by.j(0.9),l,l,l,l,l,2,l,l)
return new A.C(B.c2,A.A(A.a([new A.a4(22,22,k,l),B.aw,A.d("Writing full song\u2026",l,l,l,l,l,l,A.l(l,l,this.b?B.aA:B.dx,l,l,l,l,l,l,l,l,12,B.cC,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),B.m,l,B.e,B.j,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?B.a7:B.a3
k=k.c
k.toString
k=A.aI(k,B.bR,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new A.a5(B.a3,B.a7,B.x,A.a([B.aD,B.by.j(0.85)],x.O),l,l)
else{q=x.O
q=new A.a5(B.a3,B.a7,B.x,v?A.a([B.bj,B.M],q):A.a([B.c,B.aO],q),l,l)}p=A.a([new A.ac(0,B.G,(u?B.by:B.aD).j(0.22),B.jb,14)],x.V)
o=A.I(B.c.j(u?0.2:0.08),B.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=B.c
else v=v?B.aK:B.bh
n=u?13.5:15
m=u?B.bi:B.cC
return new A.bI(t,l,l,A.p(l,A.d(w,l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?B.a4:B.cq,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,new A.aX(0,k.a.a*0.94,0,1/0),new A.o(l,l,o,new A.bv(B.jT,B.jT,new A.aZ(s,s),new A.aZ(r,r)),p,q,B.n),l,l,l,B.kz,B.j5,l,l,l),l)},
$S:42}
C.dV8.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&A.c()
w=m.x
w===$&&A.c()
v=A.m(22)
u=this.b
t=x.O
s=u?A.a([D.aad,B.M,B.ni],t):A.a([B.qf,B.qa,B.oZ],t)
w=A.a([new A.ac(-4,B.G,B.aD.j(0.35+w*0.25),B.dp,28)],x.V)
r=A.I(B.c.j(u?0.08:0.5),B.r,1)
q=A.dj()
p=q.a
p.$flags&2&&A.ah(p)
p[11]=0.001
m=m.x
m===$&&A.c()
q.fm(m*0.08)
q=A.fq(B.A,A.p(o,D.bzh,B.f,o,o,new A.o(o,o,A.I(B.aL.j(0.6),B.r,2),o,o,D.e0F,B.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=A.nv(B.je,D.fcb,new C.dV5())
p=x.p
m=A.a([A.A(A.a([q,B.be,A.D(A.v(A.a([m,A.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,A.l(o,o,u?B.aP:B.aV,o,o,o,o,o,o,o,o,10,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),B.F,o,B.e,B.j,0,B.p),1)],p),B.m,o,B.e,B.j,0,o,o),B.aa,A.A(A.a([n.asP(D.BD,"Swahili","\ud83c\uddf9\ud83c\uddff",u),B.ab,n.asP(D.aBZ,"English","\ud83c\uddec\ud83c\udde7",u),B.ab,n.asP(D.BE,"Mix","\ud83d\udd25",u)],p),B.m,o,B.e,B.j,0,o,o)],p)
if(n.x!==D.BE){t=A.a([B.P,n.cpV(u)],p)
if(n.w){q=n.x===D.BD?D.a0L:D.a_Z
p=A.U(q).k("J<1,r>")
q=A.B(new A.J(q,new C.dV6(n,u),p),p.k("ai.E"))
t.push(new A.C(B.kB,A.c6(B.bF,q,B.bx,6,6),o))}B.d.v(m,t)}else{t=A.a([B.by.j(0.22),B.aD.j(0.12)],t)
q=A.m(12)
p=A.I(B.by.j(0.45),B.r,1)
m.push(new A.C(B.kB,A.p(o,A.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,A.l(o,o,u?B.ig:B.ku,o,o,o,o,o,o,o,o,10,o,o,B.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),B.f,o,o,new A.o(o,o,p,q,o,new A.a5(B.a3,B.a7,B.x,t,o,o),B.n),o,o,o,o,B.bT,o,o,o),o))}m.push(B.P)
t=x.dc
n=A.B(new A.J(D.cUu,new C.dV7(n,u),t),t.k("ai.E"))
m.push(A.A(n,B.m,o,B.e,B.j,0,o,o))
return A.p(o,A.v(m,B.ai,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,r,v,w,new A.a5(B.ax,B.aC,B.x,s,o,o),B.n),o,o,o,I.ae_,I.aee,o,o,o)},
$S:94}
C.dV5.prototype={
$1(d){return D.bM1.av(0,d)},
$S:65}
C.dV6.prototype={
$1(d){return this.a.cpW(d,this.b)},
$S:z+49}
C.dV7.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aC0?6:0,m=o?5:0,l=A.m(12)
if(o){w=this.b
v=w?B.aD.j(0.45):B.aD.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=B.w.j(w?0.25:0.05)
u=v
v=w
w=u}t=A.m(12)
p=p.r?q:new C.dV4(p,d)
s=C.hqD(d)
if(o)r=B.c
else r=v?B.af:B.bh
r=A.d(s,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.hqE(d)
if(o)v=B.af
else v=v?B.bZ:B.dx
return A.D(new A.C(new A.N(0,0,n,0),A.aE(!1,B.a1,!0,l,A.aK(!1,t,!0,new A.C(F.W1,A.v(A.a([r,A.d(s,q,q,q,q,q,q,A.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.e,B.j,0,B.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,w,m,q,q,q,q,q,B.ad),q),1)},
$S:z+50}
C.dV4.prototype={
$0(){var w=this.a
return w.m(new C.dV3(w,this.b))},
$S:0}
C.dV3.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dVa.prototype={
$0(){var w=this.a
return w.m(new C.dV9(w))},
$S:0}
C.dV9.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dUS.prototype={
$0(){var w=this.a
return w.m(new C.dUR(w,this.b))},
$S:0}
C.dUR.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.BE
if(v===D.aBZ&&w.Q==null)w.Q=B.d.gK(D.a_Z).a},
$S:0}
C.dVb.prototype={
$0(){return this.a.clH(this.b.a)},
$S:0}
C.dV2.prototype={
$0(){return this.a.HS(this.b)},
$S:0}
C.dUP.prototype={
$1(d){return this.a.aVm()},
$S:2}
C.dUQ.prototype={
$0(){return this.a.aVm()},
$S:0}
C.fzn.prototype={
$1(d){var w=this
return new C.Y2(w.a,w.b,w.c,new C.fzm(w.d),null)},
$S:z+51}
C.fzm.prototype={
$0(){return J.lJ(this.a.b9())},
$S:0}
C.d8S.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.bcf()},
$S:28}
C.d8T.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a.f
m===$&&A.c()
m=m.x
m===$&&A.c()
w=this.b
v=m*3.141592653589793*2+w*0.55
m=this.c
u=x.w
t=A.aI(m,B.bR,u).w
s=Math.cos(v)
u=A.aI(m,B.bR,u).w
m=Math.sin(v*1.3)
r=Math.sin(v)
q=(w&1)===0
p=q?B.dS:B.h3
o=B.o.G(w,4)
q=q?B.aR:B.aI
return A.an(n,A.db(A.W(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:313}
C.d8Y.prototype={
$0(){},
$S:0}
C.d8X.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&A.c()
w=t.x
w===$&&A.c()
v=B.lP.au(0,B.k.D(w,0,1))
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793)
w=A.dj()
u=w.a
u.$flags&2&&A.ah(u)
u[11]=0.0028
w.fm(t*0.08)
w.jA(0.12)
return A.e8(B.A,A.fq(B.A,e,null,w,!0),0.5+v*0.5,null,null)},
$S:44}
C.d8U.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=0.55+r*0.45
r=A.p(t,t,B.f,t,t,new A.o(t,t,t,t,A.a([new A.ac(6,B.G,B.aR.j(w*0.5),B.J,36)],x.V),t,B.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new A.am(B.A,t,B.a9,B.q,A.a([r,new A.a4(96,96,A.mu(B.c.j(0.08),B.aR,t,t,t,t,t,6,u/v,t),t),A.d(""+s.a.c,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,38,t,t,B.u,t,t,!0,t,t,t,t,t,A.a([new A.cO(B.aR.j(w),B.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:114}
C.d8V.prototype={
$1(d){return D.bM5.av(0,d)},
$S:65}
C.d8W.prototype={
$0(){var w=this.a
w.a.bcf()
w.a.e.$0()},
$S:0}
C.c7T.prototype={
$1(d){var w=!1
if(B.a.i(d.b.toLowerCase())===this.a)if(d.d===B.fn)if(d.x===B.dr){w=d.w
w=B.a.i(w==null?"":w)===this.b}return w},
$S:16}
C.c85.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e3R.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.e4x.prototype={
$1(d){var w=this.a
if(w.c!=null)w.On()},
$S:8}
C.e4y.prototype={
$1(d){var w=$.aU.p2$
if(w===B.re||w===B.rf)return
this.a.DK()},
$S:14}
C.e4z.prototype={
$1(d){this.a.cs_()},
$S:14}
C.e4f.prototype={
$0(){this.a.Ik(this.b.d,!1)},
$S:0}
C.e4g.prototype={
$0(){},
$S:0}
C.e4h.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.e4i.prototype={
$0(){},
$S:0}
C.e4j.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e4k.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.e4l.prototype={
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
C.e4a.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=A.bl(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=A.bl(v[1],!0,x.N)
w.NO()
w.a6p()},
$S:0}
C.e3S.prototype={
$0(){this.b.Ik(this.c.d+this.a.a,!1)},
$S:0}
C.e4b.prototype={
$1(d){var w=d.d
return(w===B.fn||w===B.eI)&&d.x===B.dr},
$S:16}
C.e4c.prototype={
$1(d){return d.a},
$S:160}
C.e4d.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e4e.prototype={
$0(){},
$S:0}
C.e3W.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bl(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=A.bl(v[0],!0,x.N)},
$S:0}
C.e3X.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.e44.prototype={
$0(){},
$S:0}
C.e41.prototype={
$0(){return this.a.a.c.d},
$S:79}
C.e42.prototype={
$0(){var w=this.a,v=A.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e43.prototype={
$0(){var w=this.a,v=A.B(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e45.prototype={
$0(){return this.a.z=!0},
$S:0}
C.e46.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new A.uT(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.e47.prototype={
$0(){return this.a.z=!1},
$S:0}
C.e49.prototype={
$0(){var w=this.a
return w.m(new C.e48(w))},
$S:0}
C.e48.prototype={
$0(){return this.a.y=1},
$S:0}
C.e3Y.prototype={
$0(){return this.a.y=1},
$S:0}
C.e3Z.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.e4p.prototype={
$1(d){return d.a.length===0},
$S:16}
C.e4q.prototype={
$2(d,e){return e.y.aK(0,d.y)},
$S:71}
C.e4u.prototype={
$0(){var w=this.a
return w.m(new C.e4n(w))},
$S:0}
C.e4n.prototype={
$0(){return this.a.y=1},
$S:0}
C.e4v.prototype={
$0(){var w=this.a
return w.m(new C.e4m(w))},
$S:0}
C.e4m.prototype={
$0(){return this.a.y=2},
$S:0}
C.e4w.prototype={
$0(){return A.iJ(this.a,null)},
$S:0}
C.e4r.prototype={
$2$cloudRequest(d,e){return this.a.aWs(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1653}
C.e4s.prototype={
$0(){return this.a.DK()},
$S:1}
C.e4t.prototype={
$0(){var w=this.a
return w.m(new C.e4o(w))},
$S:0}
C.e4o.prototype={
$0(){var w=this.a
return w.y=B.o.D(w.y-1,0,2)},
$S:0}
C.e3V.prototype={
$0(){A.eL()
var w=this.a
w.m(new C.e3U(w))},
$S:0}
C.e3U.prototype={
$0(){return this.a.y=0},
$S:0}
C.e3T.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=A.bBO(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.c.j(0.55),B.r,1.2),t,A.a([new A.ac(1,B.G,B.au.j(0.55),B.J,18)],x.V),D.bKc,B.a6),t,t,t,t,t,t,t,t),B.et,B.rS,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=A.a([],w)
for(u=0;u<3;++u)v.push(r.bYe(u))
return new A.am(B.X,t,B.a9,B.q,A.a([q,A.A(v,B.m,t,B.e,B.j,0,t,t)],w),t)},
$S:63}
C.e40.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
A.eL()
w.m(new C.e4_(w,v))},
$S:0}
C.e4_.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.ddm.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===B.fn||v===B.eI)return!0
if(d.c!==0)v=B.a.t(w,"clock-in daily earnings")||B.a.t(w,"clock-in earnings")
else v=!1
return v},
$S:16}
C.ddn.prototype={
$1(d){return new A.Q(Date.now(),0,!1)},
$S:682}
C.ddo.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new A.Q(Date.now(),0,!1)
u=A.dy(C.fGr(v.c,u))
w=this.c?new C.ddl(v):null
return v.b3r(this.b,B.ps,D.eF,w,"Today","$"+u,D.eF)},
$S:1655}
C.ddl.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.ddp.prototype={
$2(d,e){var w=this.a
return w.b3r(this.b,B.jM,B.c8,w.w,"Balance","$"+A.dy(A.JU(w.c.a,new C.ddk(w))),B.cw)},
$S:59}
C.ddk.prototype={
$0(){return this.a.c.d},
$S:79}
C.ddf.prototype={
$0(){this.a.a.cIK()
return null},
$S:0}
C.ddg.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(w,w,w,new C.bso(v,w),B.at)},
$S:68}
C.ddh.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b8C(v,!0,B.au,D.o_,w)}else{v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b8B(v,D.o_,w)}return A.b3(w,w,w,v,B.at)},
$S:68}
C.ddi.prototype={
$1(d){return new A.Q(Date.now(),0,!1)},
$S:682}
C.ddj.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new A.Q(Date.now(),0,!1)
w=r.a
v=w.a.cHz(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:B.k.D(v/u,0,1)}u=w.d
u===$&&A.c()
s=w.e
s===$&&A.c()
return A.c5(new A.h1(A.a([u,s],x.U)),new C.dde(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1656}
C.dde.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=A.a([],m),k=o.b
if(k)B.d.v(l,A.io(7,new C.ddd(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&A.c()
v=v.x
v===$&&A.c()
u=o.d
l.push(A.b3(n,n,n,new C.b8A(o.c,v,k,u,D.o_,F.acN,n),D.eyD))
v=A.I(B.c.j(0.1),B.r,1.2)
if(k)t=B.uU
else t=o.e?B.uL:D.bur
t=A.W(t,k?D.o_:B.ba,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=A.d(s,n,n,n,n,n,n,A.l(n,n,B.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,B.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+A.dy(w.f&&w.d>0?w.d:o.f)}q=k?D.o_:B.c
w=A.d(w,n,n,n,n,n,n,A.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,B.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=A.m(999)
p=u.j(0.16)
u=A.I(u.j(0.5),B.r,1)
l.push(A.p(n,A.v(A.a([t,B.aq,s,B.av,w,B.P,A.p(n,A.d(o.r,n,n,n,n,n,n,A.l(n,n,k?D.o_:B.o5,n,n,n,n,n,n,n,n,9,n,n,B.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),B.f,n,n,new A.o(p,n,u,q,n,n,B.n),n,n,n,n,B.kC,n,n,n)],m),B.m,n,B.b7,B.j,0,B.p),B.f,n,n,new A.o(B.K,n,v,n,n,n,B.a6),n,176,n,n,n,n,n,176))
return A.au(new A.a4(276,276,new A.am(B.A,n,B.a9,B.f,l,n),n),n,n,n)},
$S:225}
C.ddd.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=B.k.G(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=B.o.G(d,3)
t=B.o.G(d,2)
return A.an(s,A.e3(A.db(A.p(s,s,B.f,s,s,new A.o(s,s,s,A.m(40),s,new A.bS(B.A,0.5,B.x,s,0,A.a([D.o_.j(0.38),B.c.j(0.08),B.K],x.O),s,s),B.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),!0,s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:212}
C.ddG.prototype={
$0(){},
$S:0}
C.ddH.prototype={
$0(){},
$S:0}
C.ddI.prototype={
$1(d){return d.x===B.dr},
$S:16}
C.dds.prototype={
$0(){return this.a.a.d.d},
$S:79}
C.ddr.prototype={
$0(){var w,v
A.eL()
w=this.a
v=this.b
w.m(new C.ddq(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)A.fc(null,x.H)}},
$S:0}
C.ddq.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ddD.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=A.m(12),q=s?w.b.j(0.18):B.c.j(0.04),p=A.I(s?w.b.j(0.7):B.c.j(0.08),B.r,1)
return A.D(new A.C(B.jn,A.aH(v,A.dh(B.A,A.d("$"+t,v,v,v,v,v,v,A.l(v,v,s?w.b:B.af,v,v,v,v,v,v,v,v,13,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,B.bb,new A.o(q,v,p,r,v,v,B.n),B.hU,v,38,v,v,v,v,v),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.ddF(u,d),v,v,v,v,v,v,!1,B.ac),v),1)},
$S:1658}
C.ddF.prototype={
$0(){A.eL()
var w=this.a
w.m(new C.ddE(w,this.b))},
$S:0}
C.ddE.prototype={
$0(){var w=""+this.b
this.a.d.saT(0,w)
return w},
$S:0}
C.ddC.prototype={
$4$bold$color(d,e,f,g){var w=null,v=A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?B.c:g,t=f?15:13
return new A.C(B.A2,A.A(A.a([v,B.b6,A.d(e,w,w,w,w,w,w,A.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?B.u:B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1659}
C.ddB.prototype={
$1(d){return this.a.m(new C.ddA())},
$S:2}
C.ddA.prototype={
$0(){},
$S:0}
C.ddv.prototype={
$1(d){return this.a.aSn(d)&&!A.fNQ(d)},
$S:16}
C.ddw.prototype={
$2(d,e){return e.y.aK(0,d.y)},
$S:71}
C.ddx.prototype={
$0(){return this.a.a.d.d},
$S:79}
C.ddy.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return A.b(x.r.b(s)?s:A.dP(s,x.H),$async$$0)
case 2:if(t.c!=null)t.m(new C.ddu())
t.lF("Balance refreshed.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ddu.prototype={
$0(){},
$S:0}
C.ddz.prototype={
$0(){var w=this.a
return w.m(new C.ddt(w))},
$S:0}
C.ddt.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fju.prototype={
$2(d,e){return e.y.aK(0,d.y)},
$S:71}
C.fdO.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail"),u=!1
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.y(v,this.b)){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.ftS.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail")
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fdN.prototype={
$1(d){var w,v,u
if(!C.hM4(d,this.a))return!1
w=J.a8(d)
v=w.h(d,"sessionUpdatedAt")
v=A.bi(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=A.bi(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=A.bi(J.k(w==null?"":w))}if(u!=null&&B.o.am(new A.Q(Date.now(),0,!1).bx(u).a,36e8)>72)return!1
return!0},
$S:4}
C.f3z.prototype={
$1(d){var w=this.a
if(B.o.G(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:85}
C.fsH.prototype={
$0(){return $.fLp=null},
$S:11}
C.fsI.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.fqC.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.fqD.prototype={
$0(){var w,v=this.a
$.fLd.W(0,v)
w=C.tu(this.b,v)
if(w!=null)A.Pr(A.a([A.a_(w,x.N,x.z)],x._),v)},
$S:0}
C.fuP.prototype={
$1(d){return new C.YR(this.a,this.b,null)},
$S:z+56}
C.dZ6.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.dZ9.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
C.dZa.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.m(new C.dZ8(w))},
$S:2}
C.dZ8.prototype={
$0(){return this.a.f=""},
$S:0}
C.dZb.prototype={
$1(d){return this.a.aVA()},
$S:2}
C.dZc.prototype={
$0(){var w=this.a
return w.m(new C.dZ7(w,this.b))},
$S:0}
C.dZ7.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fcZ.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+B.a.aY(d,1)},
$S:13}
C.fcY.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+B.a.aY(d,1)},
$S:13}
C.fsY.prototype={
$1(d){var w,v=x.f
if(v.b(d))return A.a_(d,x.N,x.z)
try{v=A.a_(v.a(d.ac()),x.N,x.z)
return v}catch(w){return A.T(x.N,x.z)}},
$S:12}
C.fsZ.prototype={
$1(d){return J.cu(d)},
$S:4}
C.fmS.prototype={
$1(d){return d.a!=="send_email"},
$S:315}
C.fsp.prototype={
$1(d){var w=null,v=B.w.j(0.35),u=A.m(10),t=A.I(B.b9,B.r,1)
return A.p(B.A,A.d(d,w,w,w,w,w,w,B.iU,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,86,w,B.eX,w,w,w,72)},
$S:692}
C.c9E.prototype={
$1(d){return J.k(d)},
$S:17}
C.c9F.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b6(d,new C.c9D(),x.S)
w=A.B(w,w.$ti.k("ai.E"))
return w}return A.c0(7,0,!1,x.S)},
$S:693}
C.c9D.prototype={
$1(d){var w
if(A.iC(d))w=d
else{w=A.c7(J.k(d),null)
if(w==null)w=0}return w},
$S:443}
C.c9G.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b6(d,new C.c9C(),x.S)
w=A.B(w,w.$ti.k("ai.E"))
return w}return A.c0(8,0,!1,x.S)},
$S:693}
C.c9C.prototype={
$1(d){var w
if(A.iC(d))w=d
else{w=A.c7(J.k(d),null)
if(w==null)w=0}return w},
$S:443}
C.c9I.prototype={
$1(d){return A.bl(d,!0,x.S)},
$S:694}
C.c9J.prototype={
$1(d){return A.bl(d,!0,x.S)},
$S:694}
C.c9B.prototype={
$1(d){var w=this.a
if(B.o.G(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:85}
C.c9H.prototype={
$2(d,e){return d+e},
$S:75}
C.c9A.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.q(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:75}
C.fes.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fem.prototype={
$0(){return this.a.$1(D.pC)},
$S:0}
C.fen.prototype={
$0(){return this.a.$1(D.pC)},
$S:0}
C.feo.prototype={
$0(){return this.a.$1(D.pC)},
$S:0}
C.fep.prototype={
$0(){return this.a.$1(D.pC)},
$S:0}
C.feq.prototype={
$0(){return this.a.$1(D.pC)},
$S:0}
C.fer.prototype={
$0(){return this.a.$1(D.pC)},
$S:0}
C.f0U.prototype={
$2(d,e){var w,v,u=this,t=null,s=B.o.am(e,8),r=B.o.G(e,8),q=B.o.G(s+r,2),p=u.a,o=J.q(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.UE:D.b2V
if(o===0)w=t
else{w=x.O
w=o===1?A.a([B.c,B.aK],w):A.a([B.bj,B.w],w)
v=n?B.aL:B.dl
w=A.p(t,t,B.f,t,t,new A.o(t,t,A.I(v,B.r,n?3:1),t,A.a([new A.ac(0,B.G,B.w.j(0.35),B.dz,4)],x.V),new A.bS(B.A,0.5,B.x,t,0,w,t,t),B.a6),t,28,t,t,t,t,t,28)}return A.aH(t,A.p(t,A.au(w,t,t,t),B.f,q,t,t,t,t,t,t,t,t,t,t),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f0T(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,B.ac)},
$S:73}
C.f0T.prototype={
$0(){var w=this,v=w.a,u=v.cNd(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.pC:D.GH
w.f.$1(v)}},
$S:0}
C.fd8.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new A.a4(u,u,A.ia(!0,v,v,B.z,Q.aKc,new C.fd7(w.a,w.b,w.c,w.d,u),9,v,B.dO,B.aj,!1),v)},
$S:163}
C.fd7.prototype={
$2(d,e){var w=this,v=null,u=A.m(12),t=A.m(12),s=w.a,r=s.at[e],q=r==="X"?B.aY:B.aE
return A.aE(!1,B.a1,!0,u,A.aK(!1,t,!0,A.au(A.d(r,v,v,v,v,v,v,A.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fd6(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),B.f,B.fs,0,v,v,v,v,v,B.ad)},
$S:74}
C.fd6.prototype={
$0(){var w=this,v=w.a.cNe(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.f0l.prototype={
$1(d){return new A.C(B.jn,C.fqt(d,!1),null)},
$S:276}
C.f0m.prototype={
$1(d){return C.fqt(d,!1)},
$S:1663}
C.f0n.prototype={
$0(){var w=this,v=w.a
v.cxN(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.f0o.prototype={
$0(){var w=this
w.a.cxO(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.fai.prototype={
$1(d){var w=this,v=null,u=d*6
return A.mr(v,B.bj,A.d(""+u,v,v,v,v,v,v,B.cb,v,v,v),B.dj,new C.fah(w.a,w.b,u,w.c,w.d),v,v,new A.az(B.c.j(0.2),1,B.r,-1),v)},
$S:1664}
C.fah.prototype={
$0(){var w=this,v=w.a,u=w.b.aD(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.fcf.prototype={
$1(d){return D.cY3[d]},
$S:81}
C.fcg.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=A.a([s.aD(6),s.aD(6),s.aD(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.f92.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.f93.prototype={
$0(){var w=this,v=w.a
if(w.b.ag()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.f1m.prototype={
$0(){var w=this,v=w.a.cDg(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.f1l.prototype={
$1(d){var w,v=null,u=J.q(this.a.fr[5-d],this.b)
if(u===0)w=B.lX
else w=u===1?B.dC:B.qJ
return new A.fE(1,A.p(v,v,B.f,v,v,new A.o(w,v,A.I(B.bH,B.r,1),v,v,v,B.a6),v,v,v,B.mN,v,v,v,v),v)},
$S:1665}
C.f9f.prototype={
$1(d){var w=this
if(w.a.b6Q(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.f9g.prototype={
$0(){var w=this
if(w.a.b6Q(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.f0O.prototype={
$0(){var w=this
if(w.a.ag()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fiu.prototype={
$1(d){var w=J.q(d,"email")
return B.a.t(B.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fiv.prototype={
$1(d){var w,v=J.a8(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=B.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+B.a.i(J.k(v==null?"":v))+">"},
$S:51}
C.etV.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aId.prototype
w.bpn=w.Z
w.bpm=w.q
w=C.aIe.prototype
w.bpp=w.Z
w.bpo=w.q
w=C.aIf.prototype
w.bpr=w.Z
w.bpq=w.q
w=C.aJb.prototype
w.bqp=w.Z
w.bqo=w.q
w=C.aIL.prototype
w.bpY=w.q
w=C.aJk.prototype
w.bqy=w.q
w=C.aIg.prototype
w.bps=w.q
w=C.aJs.prototype
w.bqH=w.q
w=C.aIl.prototype
w.bpx=w.q
w=C.aIB.prototype
w.bpO=w.q
w=C.aK8.prototype
w.brn=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.ay3.prototype,"gbKM","bKN",19)
v(q,"gaOV","aOW",1)
v(C.ay2.prototype,"gcoZ","a0k",1)
v(q=C.ay4.prototype,"gbQ5","bQ6",1)
v(q,"gbAv","bAw",1)
v(q=C.avf.prototype,"gcij","cik",1)
v(q,"gc75","OP",0)
v(q,"gcsN","csO",1)
v(q,"gcle","my",0)
w(q,"gcbk","cbl",25)
w(q,"gcra","Qw",33)
v(q=C.aAa.prototype,"gbIW","VX",0)
v(q,"gbYO","Xo",0)
v(q,"gbYL","Xn",0)
v(q,"gbYM","ab2",0)
v(q,"gbYN","NR",0)
v(C.axr.prototype,"gbYP","bYQ",1)
u(C,"hTg","hoQ",58)
t(C,"fNX",0,null,["$1","$0"],["h7v",function(){return C.h7v(null)}],3,0)
t(C,"bAh",0,null,["$1","$0"],["h7u",function(){return C.h7u(null)}],3,0)
v(C.LK.prototype,"gDu","c4j",1)
v(C.aAW.prototype,"gciA","zZ",0)
v(q=C.aBc.prototype,"gc7p","OR",0)
v(q,"gcc1","ZA",0)
v(q,"gc0K","c0L",1)
v(q=C.aBo.prototype,"gc0P","abU",0)
v(q,"gbul","a6f",0)
v(q,"gciN","a_y",0)
s(q,"gc4O","c4P",35)
v(C.aDj.prototype,"gbuL","a6h",1)
v(q=C.aDi.prototype,"gc0O","abT",0)
v(q,"gc6n","acW",0)
v(q=C.aBq.prototype,"gbTL","a9T",0)
v(q,"gbTN","WA",0)
v(q,"gbTM","a9U",0)
v(q=C.aBp.prototype,"gbx5","bx6",1)
v(q,"gbx7","bx8",1)
v(C.aBr.prototype,"gbCJ","bCK",1)
v(C.ayo.prototype,"gc0R","c0S",1)
v(q=C.aBN.prototype,"gaVu","c16",1)
r(q,"gaWq",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["acz","auZ","aWs","aWr"],52,0,0)
r(q,"gc41",0,4,null,["$4"],["c42"],53,0,0)
v(q,"gc66","YM",0)
v(q,"gc6X","ad2",0)
v(q,"gc6T","ad0",0)
v(q,"gbWA","aaD",0)
w(C.aza.prototype,"gbVp","bVq",54)
w(q=C.azc.prototype,"gcq3","cq4",55)
v(q,"gcoQ","coR",1)
v(q,"gcwd","cwe",1)
v(C.aBA.prototype,"gc1r","aVA",1)
v(C.aCl.prototype,"gaW1","auN",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.jp,[C.cnw,C.cnt,C.cnu,C.cnv,C.cns,C.ePS,C.ePQ,C.ePU,C.ePR,C.f7B,C.d5l,C.d5w,C.d5E,C.d5F,C.d5H,C.d5z,C.d5x,C.d5y,C.d5A,C.d5B,C.d5r,C.d5s,C.d5q,C.d5u,C.d5v,C.d5o,C.d5n,C.d5J,C.d5M,C.dJ5,C.dJ4,C.dJ6,C.dJ3,C.dJ2,C.d5f,C.d5i,C.d5j,C.d5h,C.d5g,C.d77,C.d78,C.d79,C.d6n,C.d6o,C.d6S,C.d6D,C.d6E,C.d6F,C.d6G,C.d6H,C.d5Q,C.d6m,C.d6T,C.d71,C.d6Q,C.d6P,C.d6k,C.d6l,C.d6Y,C.d6Z,C.d5S,C.d5T,C.d6w,C.d6x,C.d6y,C.d6v,C.d6I,C.d6J,C.d6K,C.d6L,C.d6M,C.d6N,C.d6W,C.d6z,C.d6A,C.d6B,C.d6C,C.d7_,C.d70,C.d5U,C.d5V,C.d5W,C.d5X,C.d6U,C.d6V,C.d6u,C.d6O,C.d6s,C.d72,C.d73,C.d74,C.d6p,C.d68,C.d67,C.d66,C.d6c,C.d65,C.d63,C.d5Z,C.d61,C.d5Y,C.d6h,C.d6i,C.d6_,C.daE,C.cxT,C.cxJ,C.cxK,C.cy2,C.cy_,C.cy0,C.cy1,C.cxV,C.cxU,C.cxL,C.cxW,C.cyl,C.cyh,C.cyg,C.cxR,C.cxS,C.cxO,C.cxZ,C.cy6,C.cy7,C.cy8,C.cy9,C.cya,C.cyb,C.cyc,C.cyx,C.cyq,C.cyn,C.cys,C.cyp,C.cym,C.cxM,C.cyj,C.dr9,C.dra,C.dr0,C.dqZ,C.dr8,C.dqY,C.dqX,C.dr_,C.dr4,C.dr5,C.dr2,C.dr3,C.drb,C.drc,C.drd,C.dre,C.eJG,C.eJH,C.d0e,C.fjo,C.dxA,C.dxs,C.dxu,C.dxy,C.dxt,C.dxv,C.dxw,C.c2H,C.fqr,C.fqq,C.dqM,C.dqL,C.dqN,C.dqK,C.dQ6,C.dQ7,C.dQe,C.fyB,C.fyC,C.bWO,C.dJb,C.dJc,C.dJd,C.dJe,C.dJf,C.dJg,C.dJa,C.dJh,C.dJ9,C.dJk,C.dJj,C.dJi,C.dQy,C.dQz,C.dQw,C.dQv,C.dQx,C.dQt,C.dU7,C.dU8,C.dTR,C.dTT,C.dU4,C.dU5,C.dU_,C.dTY,C.dU3,C.dU0,C.dTV,C.dTU,C.dU9,C.cGY,C.cGW,C.cGX,C.cGV,C.cH0,C.cH1,C.eEL,C.eEQ,C.eEN,C.eEP,C.eEO,C.eEH,C.eEG,C.eEJ,C.eEI,C.dUu,C.dUz,C.dUv,C.dUw,C.dUy,C.dUE,C.dUF,C.dUG,C.dUH,C.dUI,C.dUJ,C.dUK,C.dUL,C.dUD,C.dUM,C.dUC,C.dUB,C.dUA,C.dUn,C.dUo,C.dUf,C.dUg,C.dUh,C.dUj,C.cAF,C.dby,C.dbA,C.dbz,C.dV1,C.dUW,C.dUX,C.dUZ,C.dV_,C.dV0,C.dV4,C.dV3,C.dVa,C.dV9,C.dUS,C.dUR,C.dVb,C.dV2,C.dUQ,C.fzm,C.d8Y,C.d8W,C.e3R,C.e4f,C.e4g,C.e4h,C.e4i,C.e4k,C.e4l,C.e4a,C.e3S,C.e4e,C.e3W,C.e3X,C.e44,C.e41,C.e42,C.e43,C.e45,C.e46,C.e47,C.e49,C.e48,C.e3Y,C.e3Z,C.e4u,C.e4n,C.e4v,C.e4m,C.e4w,C.e4s,C.e4t,C.e4o,C.e3V,C.e3U,C.e40,C.e4_,C.ddl,C.ddk,C.ddf,C.ddG,C.ddH,C.dds,C.ddr,C.ddq,C.ddF,C.ddE,C.ddA,C.ddx,C.ddy,C.ddu,C.ddz,C.ddt,C.fsH,C.fqD,C.dZ6,C.dZ9,C.dZ8,C.dZc,C.dZ7,C.fem,C.fen,C.feo,C.fep,C.feq,C.fer,C.f0T,C.fd6,C.f0n,C.f0o,C.fah,C.fcg,C.f93,C.f1m,C.f9g,C.f0O,C.etV])
u(A.i6,[C.cnx,C.ePT,C.fnb,C.fn3,C.f7y,C.f7x,C.f7A,C.d5O,C.d5P,C.d5D,C.d5C,C.d5G,C.d5p,C.d5t,C.d5I,C.dJ8,C.d5k,C.d7a,C.d7b,C.d7c,C.d7d,C.d7e,C.d6R,C.d6X,C.d5R,C.d76,C.d75,C.d69,C.d6a,C.d6b,C.d6d,C.d6f,C.daF,C.cyy,C.cxY,C.cxX,C.cyf,C.cyi,C.cye,C.cxP,C.cy5,C.cy3,C.cyk,C.cy4,C.cyt,C.cyr,C.cyw,C.bVw,C.bVv,C.bVy,C.bVx,C.dr7,C.dr6,C.dr1,C.drf,C.drg,C.faQ,C.fc2,C.d0f,C.d0d,C.bWh,C.fjn,C.dxB,C.dxz,C.c2I,C.fcS,C.fqp,C.c4J,C.c4I,C.c5a,C.dQ4,C.dQ5,C.flK,C.flx,C.flw,C.f96,C.c5o,C.c5p,C.c5q,C.c5n,C.c5m,C.f7i,C.fyx,C.fyy,C.fyz,C.fyA,C.fyw,C.dQb,C.dQc,C.dQa,C.fyD,C.d7f,C.c6Z,C.f6h,C.dJl,C.dQu,C.c5Q,C.c5N,C.c5P,C.c5S,C.bZb,C.bZ9,C.bZe,C.c5Z,C.c5Y,C.c5X,C.c5W,C.c60,C.c62,C.dUd,C.dTS,C.dTQ,C.dU6,C.dTZ,C.dU2,C.dU1,C.dTX,C.dUb,C.dUa,C.cGZ,C.cH_,C.eEM,C.eEF,C.eEK,C.c5T,C.fnu,C.dUO,C.dUx,C.dUq,C.dUr,C.dUs,C.dUt,C.dUN,C.c5V,C.cAG,C.cAH,C.f61,C.dUT,C.dUV,C.dUY,C.dV5,C.dV6,C.dV7,C.dUP,C.fzn,C.d8S,C.d8V,C.c7T,C.c85,C.e4x,C.e4y,C.e4z,C.e4j,C.e4b,C.e4c,C.e4d,C.e4p,C.e4r,C.ddm,C.ddn,C.ddi,C.ddd,C.ddI,C.ddD,C.ddC,C.ddB,C.ddv,C.fdO,C.ftS,C.fdN,C.f3z,C.fsI,C.fqC,C.fuP,C.dZa,C.dZb,C.fcZ,C.fcY,C.fsY,C.fsZ,C.fmS,C.fsp,C.c9E,C.c9F,C.c9D,C.c9G,C.c9C,C.c9I,C.c9J,C.c9B,C.fes,C.f0l,C.f0m,C.fai,C.fcf,C.f92,C.f1l,C.f9f,C.fiu,C.fiv])
t(C.bow,A.iM)
u(A.af,[C.Ef,C.ajb,C.aAV,C.aja,C.ajc,C.ak2,C.ago,C.alA,C.Yx,C.Yy,C.XE,C.am4,C.alz,C.Mg,C.ay5,C.an1,C.anF,C.TQ,C.O6,C.Zk,C.Zj,C.TR,C.anY,C.ayY,C.ao0,C.Y2,C.aoy,C.az9,C.azb,C.YR,C.apO])
u(A.ag,[C.aFO,C.aIe,C.aJb,C.aId,C.aIf,C.bdU,C.avf,C.aAa,C.bgh,C.bgi,C.axr,C.bgo,C.aIL,C.aJk,C.aIg,C.aAW,C.aBc,C.aBo,C.b87,C.aDj,C.aDi,C.aBq,C.aBp,C.be7,C.aJs,C.aIl,C.buk,C.aIB,C.azc,C.aBA,C.aK8])
u(A.kC,[C.ePV,C.f7z,C.d5m,C.d5N,C.d5L,C.d5K,C.dJ7,C.d6t,C.d6r,C.d6q,C.d64,C.d6e,C.d62,C.d6g,C.d60,C.d6j,C.cyd,C.cxQ,C.cyo,C.cyv,C.cyu,C.cxN,C.d0c,C.dxx,C.fcT,C.fcU,C.dQ8,C.fn6,C.fyv,C.dQd,C.dQg,C.dQf,C.d7g,C.c7_,C.c5R,C.c5O,C.bZc,C.bZa,C.c61,C.dUe,C.dTW,C.dUc,C.eES,C.eER,C.dUp,C.dUi,C.dUk,C.dUm,C.dUl,C.dUU,C.dV8,C.d8T,C.d8X,C.d8U,C.e4q,C.e3T,C.ddo,C.ddp,C.ddg,C.ddh,C.ddj,C.dde,C.ddw,C.fju,C.c9H,C.c9A,C.f0U,C.fd8,C.fd7])
t(C.att,C.Ef)
u(A.aC,[C.qk,C.abW,C.LK,C.Hu,C.qT,C.qU,C.lp,C.id,C.hZ,C.b6h,C.cYq,C.dbx,C.r_,C.TS,C.Mt,C.ps,C.aXH,C.oI,C.aoU])
t(C.ay3,C.aIe)
t(C.bgI,C.aJb)
t(C.ay2,C.aId)
t(C.ay4,C.aIf)
u(A.ml,[C.UA,C.ayZ,C.aoL,C.Hz,C.DE])
u(A.at,[C.ZT,C.bp1,C.acH,C.OF,C.a4Y,C.M8,C.anz,C.abx,C.abw,C.aYw,C.ayX,C.aa4,C.aY3,C.a9X,C.aza])
t(C.bgf,C.aIL)
t(C.bgU,C.aJk)
t(C.bcD,C.aIg)
t(C.aBr,C.aJs)
t(C.ayo,C.aIl)
t(C.aBN,C.buk)
t(C.beQ,C.aIB)
u(A.nc,[C.b8C,C.b8B,C.b8A,C.b82,C.bso,C.bno])
t(C.aCl,C.aK8)
w(C.aId,C.LK)
w(C.aIe,C.LK)
w(C.aIf,C.LK)
w(C.aJb,C.LK)
w(C.aIL,A.eO)
w(C.aJk,A.c8)
w(C.aIg,A.c8)
w(C.aJs,A.c8)
w(C.aIl,A.eO)
w(C.aIB,A.eO)
v(C.buk,A.er)
w(C.aK8,A.c8)})()
A.ki(b.typeUniverse,JSON.parse('{"bow":{"iM":[]},"Ef":{"af":[],"r":[]},"aFO":{"ag":["Ef<1,2>"]},"att":{"Ef":["1","hy<1>"],"af":[],"r":[],"Ef.T":"1","Ef.S":"hy<1>"},"ajb":{"af":[],"r":[]},"aAV":{"af":[],"r":[]},"aja":{"af":[],"r":[]},"ajc":{"af":[],"r":[]},"ak2":{"af":[],"r":[]},"ago":{"af":[],"r":[]},"ay3":{"ag":["ajb"]},"bgI":{"ag":["aAV"]},"ay2":{"ag":["aja"]},"ay4":{"ag":["ajc"]},"bdU":{"ag":["ak2"]},"avf":{"ag":["ago"]},"alA":{"af":[],"r":[]},"Yx":{"af":[],"r":[]},"Yy":{"af":[],"r":[]},"acH":{"at":[],"r":[]},"XE":{"af":[],"r":[]},"aAa":{"ag":["alA"]},"ZT":{"at":[],"r":[]},"bp1":{"at":[],"r":[]},"bgh":{"ag":["Yx"]},"bgi":{"ag":["Yy"]},"OF":{"at":[],"r":[]},"axr":{"ag":["XE"]},"am4":{"af":[],"r":[]},"bgo":{"ag":["am4"]},"a4Y":{"at":[],"r":[]},"alz":{"af":[],"r":[]},"bgf":{"ag":["alz"]},"M8":{"at":[],"r":[]},"anz":{"at":[],"r":[]},"Mg":{"af":[],"r":[]},"bgU":{"ag":["Mg"]},"abx":{"at":[],"r":[]},"abw":{"at":[],"r":[]},"ay5":{"af":[],"r":[]},"bcD":{"ag":["ay5"]},"aYw":{"at":[],"r":[]},"an1":{"af":[],"r":[]},"aAW":{"ag":["an1"]},"anF":{"af":[],"r":[]},"aBc":{"ag":["anF"]},"TQ":{"af":[],"r":[]},"O6":{"af":[],"r":[]},"Zk":{"af":[],"r":[]},"Zj":{"af":[],"r":[]},"aBo":{"ag":["TQ"]},"b87":{"ag":["O6"]},"aDj":{"ag":["Zk"]},"aDi":{"ag":["Zj"]},"TR":{"af":[],"r":[]},"aBq":{"ag":["TR"]},"anY":{"af":[],"r":[]},"aa4":{"at":[],"r":[]},"a9X":{"at":[],"r":[]},"ayY":{"af":[],"r":[]},"aBp":{"ag":["anY"]},"ayX":{"at":[],"r":[]},"aY3":{"at":[],"r":[]},"be7":{"ag":["ayY"]},"ao0":{"af":[],"r":[]},"aBr":{"ag":["ao0"]},"Y2":{"af":[],"r":[]},"ayo":{"ag":["Y2"]},"aoy":{"af":[],"r":[]},"az9":{"af":[],"r":[]},"azb":{"af":[],"r":[]},"aBN":{"ag":["aoy"],"er":[]},"aza":{"at":[],"r":[]},"beQ":{"ag":["az9"]},"b8C":{"aB":[]},"b8B":{"aB":[]},"b8A":{"aB":[]},"azc":{"ag":["azb"]},"b82":{"aB":[]},"bso":{"aB":[]},"YR":{"af":[],"r":[]},"aBA":{"ag":["YR"]},"bno":{"aB":[]},"apO":{"af":[],"r":[]},"aCl":{"ag":["apO"]}}'))
A.OQ(b.typeUniverse,JSON.parse('{"LK":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=A.aA
return{dw:w("ms<w?>"),gS:w("nN"),o:w("d1"),g5:w("wp"),M:w("eS<n>"),k:w("Q"),gv:w("l_<ak<j2>>"),gh:w("l_<n>"),gH:w("l_<H>"),r:w("ax<~>"),dk:w("a0"),fw:w("P<nN>"),E:w("P<d1>"),V:w("P<ac>"),O:w("P<w>"),A:w("P<a0>"),R:w("P<mX>"),B:w("P<ak<H>>"),m:w("P<a1<n,n>>"),_:w("P<a1<n,@>>"),b:w("P<qT>"),x:w("P<qU>"),gi:w("P<j2>"),a:w("P<lp>"),Y:w("P<hZ>"),v:w("P<id>"),dA:w("P<Hu>"),F:w("P<r_>"),Z:w("P<kf>"),g:w("P<hB>"),gK:w("P<+at,details,id(Q,n,n)>"),C:w("P<cO>"),s:w("P<n>"),G:w("P<iM>"),eO:w("P<ep>"),d9:w("P<eP>"),p:w("P<r>"),n:w("P<O>"),t:w("P<H>"),U:w("P<aB?>"),d4:w("P<n?>"),ck:w("ak<qT>"),e:w("ak<qU>"),ac:w("ak<j2>"),dZ:w("ak<lp>"),I:w("ak<hZ>"),j:w("ak<@>"),L:w("ak<H>"),eq:w("a1<n,n>"),P:w("a1<n,@>"),f:w("a1<@,@>"),cl:w("cW<n,C>"),aS:w("J<a0,rK>"),dc:w("J<Hz,bH>"),dv:w("J<n,n>"),bL:w("J<O,bH>"),a3:w("J<H,bH>"),gN:w("J<H,ph>"),w:w("iH"),b1:w("qT"),Q:w("qU"),bP:w("lp"),i:w("hZ"),u:w("id"),gp:w("TS"),J:w("Mt"),D:w("ps"),an:w("kf"),c:w("cm"),K:w("aC"),d:w("jg<n>"),di:w("+outcome,snapshot(UA,a4k?)"),ee:w("+after,before(O,O)"),et:w("+categories,error,message,replaceId(ak<hZ>,n?,n?,n?)"),cz:w("E3"),bJ:w("dz<n>"),N:w("n"),e7:w("bm<O>"),W:w("cz<n>"),am:w("k6<H>"),cc:w("a3<n>"),aM:w("e4<d1>"),bG:w("e4<O>"),l:w("r"),gm:w("qk"),ec:w("abW"),q:w("mK"),y:w("R"),gR:w("O"),z:w("@"),S:w("H"),eG:w("d1?"),cJ:w("Q?"),gw:w("ak<a1<n,@>>?"),bM:w("ak<@>?"),h:w("a1<n,@>?"),X:w("aC?"),gE:w("+code,qrPayload(n,n)?"),bY:w("+isLive,ownerEmail,snapshotJson(R,n,n)?"),T:w("n?"),cD:w("O?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aRR=new A.bv(B.bD,B.hL,B.bD,B.hL)
D.eF=new A.w(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,B.t)
D.aSk=new A.az(D.eF,1,B.r,-1)
D.aSm=new A.az(B.af,2,B.r,-1)
D.aSp=new A.az(B.aT,2,B.r,-1)
D.aSr=new A.az(B.cl,0.8,B.r,-1)
D.aSH=new A.az(B.aL,2,B.r,-1)
D.aSO=new A.az(B.fd,1.6,B.r,-1)
D.aTA=new A.aX(0,330,0,1/0)
D.aTG=new A.aX(0,176,0,1/0)
D.aTH=new A.aX(0,1/0,0,260)
D.aTZ=new A.aX(90,1/0,0,1/0)
D.aWH=new A.ac(0,B.G,B.dl,B.J,4)
D.cGY=w([D.aWH],x.V)
D.aUc=new A.o(B.c,null,null,null,D.cGY,null,B.a6)
D.cBl=w([D.eF,B.aZ],x.O)
D.bN4=new A.a5(B.a3,B.a7,B.x,D.cBl,null,null)
D.aUq=new A.o(null,null,null,null,null,D.bN4,B.a6)
D.aUv=new A.o(B.bf,null,null,null,null,null,B.a6)
D.b4V=new A.w(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,B.t)
D.cVf=w([P.a9R,D.b4V],x.O)
D.bMb=new A.a5(B.b1,B.b3,B.x,D.cVf,null,null)
D.aUK=new A.o(null,null,null,B.lO,null,D.bMb,B.n)
D.bb5=new A.w(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,B.t)
D.d4p=w([D.bb5,M.abG],x.O)
D.bLp=new A.a5(B.b1,B.b3,B.x,D.d4p,null,null)
D.aV9=new A.o(null,null,null,B.rg,null,D.bLp,B.n)
D.cRu=w([B.aD,B.by],x.O)
D.bLU=new A.a5(B.a3,B.a7,B.x,D.cRu,null,null)
D.aVe=new A.o(null,null,null,null,null,D.bLU,B.a6)
D.eMo=new A.F(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f40=new A.x("\ud83c\udf89",null,D.eMo,null,null,null,null,null,null,null,null,null)
D.b_n=new A.cv(B.A,null,null,D.f40,null)
D.b0E=new A.w(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,B.t)
D.a9h=new A.w(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,B.t)
D.b2V=new A.w(1,0.8431372549019608,0.8,0.7843137254901961,B.t)
D.b2Z=new A.w(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,B.t)
D.o_=new A.w(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,B.t)
D.rt=new A.w(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,B.t)
D.aad=new A.w(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,B.t)
D.b4B=new A.w(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,B.t)
D.Uj=new A.w(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,B.t)
D.wk=new A.w(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,B.t)
D.b5O=new A.w(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,B.t)
D.UE=new A.w(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,B.t)
D.abo=new A.w(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,B.t)
D.b9o=new A.w(1,0.9529411764705882,0.9411764705882353,1,B.t)
D.b9u=new A.w(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,B.t)
D.abJ=new A.w(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,B.t)
D.abX=new A.w(1,0,0.8392156862745098,0.30980392156862746,B.t)
D.baH=new A.w(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,B.t)
D.baL=new A.w(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,B.t)
D.bbB=new A.w(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,B.t)
D.Va=new A.w(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,B.t)
D.bcr=new A.w(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,B.t)
D.bcU=new A.w(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,B.t)
D.Vg=new A.w(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,B.t)
D.acW=new A.a2h(2,"active")
D.bhj=new A.b9(42e5)
D.bhm=new A.b9(53e4)
D.bho=new A.b9(58e4)
D.bhs=new A.b9(82e4)
D.big=new A.N(0,30,0,30)
D.bio=new A.N(0,4,0,8)
D.bir=new A.N(0,8,12,8)
D.bj5=new A.N(12,0,12,88)
D.bjc=new A.N(12,11,12,10)
D.bjz=new A.N(13,10,12,10)
D.bjH=new A.N(14,10,14,2)
D.bjT=new A.N(14,14,10,14)
D.bko=new A.N(16,12,16,96)
D.bkt=new A.N(16,14,16,8)
D.bkx=new A.N(16,16,16,96)
D.bky=new A.N(16,18,16,16)
D.bkC=new A.N(16,4,16,10)
D.blx=new A.N(18,6,18,40)
D.blz=new A.N(18,8,18,130)
D.blM=new A.N(20,10,20,20)
D.blZ=new A.N(20,18,20,18)
D.bm2=new A.N(20,20,20,22)
D.bmp=new A.N(22,22,22,16)
D.bn3=new A.N(2,0,2,10)
D.bnO=new A.N(4,8,12,4)
D.bo0=new A.N(6,1,6,1)
D.bo2=new A.N(6,4,0,0)
D.bo5=new A.N(6,6,12,4)
D.bor=new A.N(8,4,12,8)
D.f7f=new A.x("Activity",null,B.fT,null,null,null,null,null,null,null,null,null)
D.bq7=new A.bH(1,B.bo,D.f7f,null)
D.feT=new A.x("Game Receipts",null,A0.yI,null,null,null,null,null,null,null,null,null)
D.f_p=new A.x("Your last 59 games \xb7 kept for 7 days",null,F.aLV,null,null,null,null,null,null,null,null,null)
D.cxN=w([D.feT,D.f_p],x.p)
D.bev=new A.fo(B.aj,B.e,B.j,B.F,null,B.p,null,0,D.cxN,null)
D.bqa=new A.bH(1,B.bo,D.bev,null)
D.bsh=new A.a0(58607,"MaterialIcons",!1)
D.Y0=new A.a0(62178,"MaterialIcons",!1)
D.bt5=new A.a0(62410,"MaterialIcons",!1)
D.bud=new A.a0(63258,"MaterialIcons",!1)
D.buj=new A.a0(63304,"MaterialIcons",!1)
D.buk=new A.a0(63306,"MaterialIcons",!1)
D.bur=new A.a0(63330,"MaterialIcons",!1)
D.aj0=new A.a0(984777,"MaterialIcons",!1)
D.bwW=new A.ad(B.EP,13,B.af,null,null,null)
D.bx3=new A.ad(B.jq,13,B.p7,null,null,null)
D.aj9=new A.ad(B.l7,null,B.c,null,null,null)
D.byB=new A.ad(B.AN,34,B.aR,null,null,null)
D.bz8=new A.ad(B.ET,19,B.c,null,null,null)
D.bto=new A.a0(62804,"MaterialIcons",!1)
D.bzh=new A.ad(D.bto,24,B.aL,null,null,null)
D.bzJ=new A.ad(B.Ax,28,B.bk,null,null,null)
D.bAd=new A.ad(B.aiI,42,B.c,null,null,null)
D.bAm=new A.ad(B.YT,30,B.c,null,null,null)
D.bAX=new A.ad(B.fE,null,B.c,null,null,null)
D.bBh=new A.ad(B.jq,16,B.c,null,null,null)
D.bBS=new A.ad(B.qx,13,B.c,null,null,null)
D.bC0=new A.ad(B.l7,18,B.c,null,null,null)
D.bCx=new A.ad(B.uK,null,B.dC,null,null,null)
D.bDb=new A.ad(B.oj,28,B.c,null,null,null)
D.bDq=new A.ad(B.mS,22,null,null,null,null)
D.bDM=new A.ad(B.qv,null,null,null,null,null)
D.bDY=new A.ad(B.iN,28,B.c,null,null,null)
D.bE_=new A.ad(B.cu,null,B.aP,null,null,null)
D.bE6=new A.ad(B.XI,14,B.c,null,null,null)
D.bEE=new A.ad(B.M_,36,B.aI,null,null,null)
D.bEL=new A.ad(B.ok,16,B.c,null,null,null)
D.bF_=new A.ad(B.eh,null,null,null,null,null)
D.b5e=new A.w(1,0.23137254901960785,0.16470588235294117,0,B.t)
D.bFx=new A.ad(B.dS,9,D.b5e,null,null,null)
D.bvh=new A.a0(983146,"MaterialIcons",!1)
D.bFN=new A.ad(D.bvh,null,B.aL,null,null,null)
D.bGh=new A.ad(B.uN,28,D.eF,null,null,null)
D.bGm=new A.ad(B.t5,null,B.fd,null,null,null)
D.bGr=new A.ad(B.hV,20,D.eF,null,null,null)
D.bvD=new A.a0(983377,"MaterialIcons",!1)
D.bGB=new A.ad(D.bvD,64,B.c,null,null,null)
D.bH6=new A.ad(B.h4,24,B.c,null,null,null)
D.bI0=new A.dZ(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bIb=new A.dZ(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bIq=new A.dZ(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bIr=new A.dZ(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.b3C=new A.w(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,B.t)
D.b66=new A.w(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,B.t)
D.b5P=new A.w(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,B.t)
D.cVw=w([D.b3C,D.b66,D.b5P],x.O)
D.bJm=new A.a5(B.ax,B.aC,B.x,D.cVw,null,null)
D.cZV=w([B.bl,B.aZ],x.O)
D.bJF=new A.a5(B.ax,B.aC,B.x,D.cZV,null,null)
D.b4P=new A.w(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,B.t)
D.b9U=new A.w(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,B.t)
D.cHo=w([D.b4P,D.b9U],x.O)
D.bJM=new A.a5(B.ax,B.aC,B.x,D.cHo,null,null)
D.cWY=w([B.bj,B.M,B.ee],x.O)
D.bJT=new A.a5(B.ax,B.aC,B.x,D.cWY,null,null)
D.bJW=new A.a5(B.a3,B.a7,B.x,G.aqk,null,null)
D.cGQ=w([B.fd,B.c8],x.O)
D.akR=new A.a5(B.a3,B.a7,B.x,D.cGQ,null,null)
D.cHa=w([B.fd,B.by],x.O)
D.akS=new A.a5(B.a3,B.a7,B.x,D.cHa,null,null)
D.au2=w([D.o_,B.au,B.bU],x.O)
D.bKc=new A.a5(B.ax,B.aC,B.x,D.au2,null,null)
D.b7z=new A.w(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,B.t)
D.cEX=w([D.b7z,E.a9q,B.M],x.O)
D.bKh=new A.a5(B.ax,B.aC,B.x,D.cEX,null,null)
D.aQH=new A.da(-0.8,-1)
D.aQJ=new A.da(1.2,1)
D.cE9=w([B.c,B.er,B.fZ,B.c,B.fk,B.aY,B.mx],x.O)
D.cWp=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.bKj=new A.a5(D.aQH,D.aQJ,B.x,D.cE9,D.cWp,null)
D.b9Q=new A.w(1,0,0.7607843137254902,0.26666666666666666,B.t)
D.b7O=new A.w(1,0,0.6392156862745098,0.22745098039215686,B.t)
D.cVv=w([D.b9Q,D.b7O],x.O)
D.bKJ=new A.a5(B.a3,B.a7,B.x,D.cVv,null,null)
D.bKN=new A.a5(B.ax,B.aC,B.x,B.Or,null,null)
D.cQC=w([E.Vd,B.wn],x.O)
D.bKP=new A.a5(B.a3,B.a7,B.x,D.cQC,null,null)
D.cUq=w([B.h_,B.fr],x.O)
D.akX=new A.a5(B.a3,B.a7,B.x,D.cUq,null,null)
D.cZu=w([B.bf,B.bS],x.O)
D.akY=new A.a5(B.a3,B.a7,B.x,D.cZu,null,null)
D.cph=w([B.dm,B.f4],x.O)
D.bLr=new A.a5(B.ax,B.aC,B.x,D.cph,null,null)
D.cDf=w([B.c,B.b8],x.O)
D.bLB=new A.a5(B.a3,B.a7,B.x,D.cDf,null,null)
D.ab2=new A.w(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,B.t)
D.b2I=new A.w(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,B.t)
D.cNB=w([D.ab2,B.j0,B.qb,B.au,D.b2I],x.O)
D.bNX=w([0,0.28,0.55,0.82,1],x.n)
D.bLC=new A.a5(B.ax,B.aC,B.x,D.cNB,D.bNX,null)
D.bLM=new A.a5(B.a3,B.a7,B.x,B.P1,null,null)
D.bLN=new A.a5(B.a3,B.a7,B.x,G.asG,null,null)
D.bLQ=new A.a5(B.a3,B.a7,B.x,D.au2,null,null)
D.cIq=w([B.by,B.fd],x.O)
D.bM_=new A.a5(B.a3,B.a7,B.x,D.cIq,null,null)
D.d2g=w([B.aD,B.by,B.b8],x.O)
D.bM1=new A.a5(B.a3,B.a7,B.x,D.d2g,null,null)
D.cQL=w([B.aR,B.bJ,B.fz],x.O)
D.bM5=new A.a5(B.a3,B.a7,B.x,D.cQL,null,null)
D.d2_=w([B.bj,B.aJ,B.bI,B.aK,B.aO,B.cl,B.ak],x.O)
D.cLX=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.bMa=new A.a5(B.ax,B.aC,B.x,D.d2_,D.cLX,null)
D.bMk=new A.a5(B.ax,B.aC,B.x,B.a_d,null,null)
D.cRe=w([D.Uj,B.e1],x.O)
D.bMt=new A.a5(B.a3,B.a7,B.x,D.cRe,null,null)
D.cYb=w([D.abJ,D.aad,B.M],x.O)
D.bMB=new A.a5(B.ax,B.aC,B.x,D.cYb,null,null)
D.bbX=new A.w(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,B.t)
D.cDI=w([B.eV,B.h_,D.bbX],x.O)
D.bN6=new A.a5(B.ax,B.aC,B.x,D.cDI,null,null)
D.cIV=w([D.o_,B.au],x.O)
D.bN7=new A.a5(B.ax,B.aC,B.x,D.cIV,null,null)
D.bNs=w([F.AQ,B.oj,B.jq,B.hu,B.kI,B.kJ,B.kH,B.qA,B.ma,B.eO,B.ly,B.xg,B.EZ],x.A)
D.bQP=w([10,50,100,200],x.t)
D.c_u=w([1,3,5,7],x.t)
D.c4q=w([25,50,100,250],x.t)
D.bvc=new A.a0(983104,"MaterialIcons",!1)
D.ccU=w([B.oj,B.lz,B.mS,B.l4,B.h3,B.uU,D.bvc,B.YP],x.A)
D.cic=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cu4=w([0,0.22,0.5,0.78,1],x.n)
D.cxV=w([8,13,19],x.n)
D.a_x=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.f6j=new A.x("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.e_8=new A.jg("questions",48,D.f6j,null,x.d)
D.eXM=new A.x("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.e_d=new A.jg("edit",48,D.eXM,null,x.d)
D.fdw=new A.x("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.e_j=new A.jg("delete",48,D.fdw,null,x.d)
D.cy3=w([D.e_8,D.e_d,D.e_j],A.aA("P<oM<n>>"))
D.cHi=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.cHv=w([B.bL,B.hS],x.O)
D.a28=new C.lp("text","",null,null)
D.cIA=w([D.a28],x.a)
D.cJX=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.ehq=new A.aci(B.m8,"Home")
D.e8W=new A.aci(B.ps,"Growth")
D.edb=new A.aci(B.jq,"Wallet")
D.cM8=w([D.ehq,D.e8W,D.edb],A.aA("P<+icon,label(a0,n)>"))
D.cMx=w([4,0,2,6,8,1,3,5,7],x.t)
D.cMF=w([B.c,B.bN,B.cl],x.O)
D.dqM=new C.r_("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.dqP=new C.r_("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.dqN=new C.r_("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.dqH=new C.r_("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.dqI=new C.r_("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.dqQ=new C.r_("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a_Z=w([D.dqM,D.dqP,D.dqN,D.dqH,D.dqI,D.dqQ],x.F)
D.a03=w([B.aE,B.bl,B.d6,B.aR],x.O)
D.b5m=new A.w(1,1,0.8980392156862745,0.4,B.t)
D.cRk=w([B.U_,D.b5m,B.qb,B.hR,B.j0],x.O)
D.a09=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.Oz=w(["checkers_deluxe","tic_tac_go"],x.s)
D.bNw=w([0,1,2],x.t)
D.cd7=w([3,4,5],x.t)
D.cpQ=w([6,7,8],x.t)
D.bNy=w([0,3,6],x.t)
D.c_z=w([1,4,7],x.t)
D.c6V=w([2,5,8],x.t)
D.bNC=w([0,4,8],x.t)
D.c6S=w([2,4,6],x.t)
D.cTw=w([D.bNw,D.cd7,D.cpQ,D.bNy,D.c_z,D.c6V,D.bNC,D.c6S],x.B)
D.aC_=new C.Hz(0,"abab")
D.dqF=new C.Hz(1,"aaaBbb")
D.aC0=new C.Hz(2,"aabb")
D.cUu=w([D.aC_,D.dqF,D.aC0],A.aA("P<Hz>"))
D.cUK=w([],x.a)
D.atr=w([],x.v)
D.cY3=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.OT=w([1,2,3,-1,-2],x.t)
D.d4e=w([B.j1,B.aD],x.O)
D.fsm=new C.qk("dice","Dice Roll","Roll for cash & prizes!",B.m6,D.d4e)
D.fsj=new C.qk("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",B.qw,B.asd)
D.d_f=w([B.d1,B.bk],x.O)
D.fsh=new C.qk("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",B.YB,D.d_f)
D.d3L=w([B.dM,B.mA],x.O)
D.fsn=new C.qk("memory","Memory Match","Match pairs \u2014 solo or multiplayer",B.YP,D.d3L)
D.c_h=w([B.jE,B.p5],x.O)
D.fsk=new C.qk("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",G.Yn,D.c_h)
D.cY2=w([M.l_,D.UE],x.O)
D.fsi=new C.qk("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",B.F1,D.cY2)
D.fsl=new C.qk("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",B.cu,Ah.mT)
D.cZt=w([D.fsm,D.fsj,D.fsh,D.fsn,D.fsk,D.fsi,D.fsl],A.aA("P<qk>"))
D.d_N=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.b9b=new A.w(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,B.t)
D.b93=new A.w(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,B.t)
D.aco=new A.w(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,B.t)
D.d0w=w([D.b9b,D.b93,D.aco],x.O)
D.bb0=new A.w(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,B.t)
D.d0y=w([B.a9p,D.bb0,D.aco],x.O)
D.d17=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.aun=w([D.o_,B.c,D.eF,B.bY,B.ba,B.au],x.O)
D.dqK=new C.r_("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.dqJ=new C.r_("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.dqG=new C.r_("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.dqO=new C.r_("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.dqR=new C.r_("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.dqL=new C.r_("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a0L=w([D.dqK,D.dqJ,D.dqG,D.dqO,D.dqR,D.dqL],x.F)
D.d3Y=w([B.c8,B.p5],x.O)
D.dPr={checkers_deluxe:0,tic_tac_go:1}
D.aA_=new A.bs(D.dPr,["Checkers Deluxe","Tic Tac Go"],A.aA("bs<n,n>"))
D.dOy={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aAa=new A.bs(D.dOy,[1,2,3,4,5,6,7],A.aA("bs<n,H>"))
D.djK=new C.a4Y(null)
D.dn5=new C.lp("signature","NGMY Support Team",null,null)
D.dn6=new C.lp("divider","",null,null)
D.PM=new C.TS(!1,!1,!1,!1)
D.PO=new C.Mt(!1,!1,!1,!1)
D.do8=new C.Mt(!0,!0,!1,!1)
D.BD=new C.aoL(0,"swahili")
D.aBZ=new C.aoL(1,"english")
D.BE=new C.aoL(2,"mix")
D.cT0=w([B.fj,B.il,B.dn],x.O)
D.bu3=new A.a0(63118,"MaterialIcons",!1)
D.drS=new C.oI(D.cT0,B.fW,B.aR,"BACKGAMMON","\ud83c\udfb2",D.bu3)
D.bw1=new A.a0(983637,"MaterialIcons",!1)
D.drT=new C.oI(Ae.auy,B.bl,B.f0,"EURO WHEEL","\ud83c\udfa1",D.bw1)
D.d04=w([B.M,B.aJ,B.bv],x.O)
D.drU=new C.oI(D.d04,B.aO,B.ak,"ROYALE","\u265f\ufe0f",G.Yn)
D.cGT=w([B.dm,B.bk,B.dW],x.O)
D.drV=new C.oI(D.cGT,B.aE,B.d6,"CONNECT 4","\ud83d\udd34",B.Z1)
D.cWC=w([B.dt,B.f4,B.p5],x.O)
D.drW=new C.oI(D.cWC,B.ui,B.c8,"PUNTO BANCO","\ud83d\udc8e",B.lz)
D.cpj=w([B.nh,B.i2,B.lr],x.O)
D.drX=new C.oI(D.cpj,B.iW,B.jF,"DOMINOES","\ud83c\udc53",B.aiK)
D.d0J=w([B.wu,B.rw,B.hy],x.O)
D.drY=new C.oI(D.d0J,B.zO,B.fU,"WAR","\u2694\ufe0f",N.Yk)
D.drZ=new C.oI(B.aut,B.aL,B.ak,"PREMIUM","\ud83c\udfae",B.m6)
D.cIr=w([B.jg,B.aD,B.dM],x.O)
D.ds_=new C.oI(D.cIr,B.dL,B.fd,"JACKPOT","\ud83c\udfb0",B.m6)
D.cVN=w([B.ku,B.lp,B.by],x.O)
D.ds0=new C.oI(D.cVN,B.qa,B.bY,"LIVE BINGO","\ud83c\udfb1",B.AC)
D.cBj=w([B.il,B.e1,B.aR],x.O)
D.btu=new A.a0(62865,"MaterialIcons",!1)
D.ds1=new C.oI(D.cBj,B.rB,B.aL,"BIG SPIN","\ud83c\udfa1",D.btu)
D.ds2=new C.oI(B.a0K,B.aK,B.bl,"HOLD'EM","\u2660\ufe0f",B.jq)
D.d16=w([B.eV,B.fr,B.aZ],x.O)
D.bsC=new A.a0(61234,"MaterialIcons",!1)
D.ds3=new C.oI(D.d16,B.ls,B.aT,"CRAPS","\ud83c\udfb2",D.bsC)
D.cGc=w([B.hS,B.iG,B.bL],x.O)
D.ds4=new C.oI(D.cGc,B.bJ,B.b8,"PLINKO","\ud83d\udc8e",Ai.M0)
D.bvN=new A.a0(983492,"MaterialIcons",!1)
D.ds5=new C.oI(B.a0K,B.ew,B.bl,"SNOOKER","\ud83c\udfb1",D.bvN)
D.cZQ=w([B.eV,B.fr,B.aT],x.O)
D.ds6=new C.oI(D.cZQ,B.rx,B.bs,"PROFIT LAB","\ud83d\udcb0",B.hV)
D.d_8=w([B.ee,B.ft,B.bl],x.O)
D.bup=new A.a0(63324,"MaterialIcons",!1)
D.ds7=new C.oI(D.d_8,B.zK,B.bf,"KLONDIKE","\ud83c\udccf",D.bup)
D.cTD=w([B.da,B.bj,B.M],x.O)
D.ds8=new C.oI(D.cTD,B.aL,B.aJ,"VEGAS TABLE","\ud83c\udccf",A_.Fe)
D.pB=new C.DE(0,"continueGame")
D.pC=new C.DE(1,"youWin")
D.GH=new C.DE(2,"youLose")
D.PX=new C.DE(3,"draw")
D.aCd=new C.UA(0,"found")
D.dKV=new C.UA(1,"foundLive")
D.a2o=new C.UA(2,"notFound")
D.aCe=new C.UA(3,"wrongAccount")
D.dRz=new A.u(4,12)
D.dUm=new A.C(B.KB,B.rl,null)
D.bnr=new A.N(4,0,0,3)
D.eJR=new A.F(!0,B.aI,null,null,null,null,10,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhJ=new A.x("NGMY Helper",null,D.eJR,null,null,null,null,null,null,null,null,null)
D.dUC=new A.C(D.bnr,D.fhJ,null)
D.buh=new A.a0(63284,"MaterialIcons",!1)
D.bzv=new A.ad(D.buh,18,B.o1,null,null,null)
D.eOh=new A.F(!0,B.o1,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0w=new A.x("Continue",null,D.eOh,null,null,null,null,null,null,null,null,null)
D.cV9=w([D.bzv,B.bp,D.f0w],x.p)
D.ev0=new A.cx(B.aX,B.e,B.Q,B.m,null,B.p,null,0,D.cV9,null)
D.dUF=new A.C(B.j4,D.ev0,null)
D.dUP=new A.C(B.bT,B.rl,null)
D.b8Q=new A.w(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,B.t)
D.cRT=w([B.h_,B.fr,B.cY,D.b8Q],x.O)
D.bMd=new A.a5(B.ax,B.aC,B.x,D.cRT,B.B5,null)
D.aVh=new A.o(null,null,null,null,null,D.bMd,B.n)
D.bfs=new A.kE(D.aVh,B.bc,null,null)
D.e_y=new A.cI(0,0,0,0,null,null,D.bfs,null)
D.bBd=new A.ad(B.uJ,11,B.c,null,null,null)
D.e_C=new A.cI(10,12,null,null,null,null,D.bBd,null)
D.ctX=w([B.fX,B.ee,B.kZ],x.O)
D.e0b=new A.bS(B.IE,1.1,B.x,null,0,D.ctX,null,null)
D.ba6=new A.w(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,B.t)
D.b54=new A.w(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,B.t)
D.b6E=new A.w(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,B.t)
D.cPP=w([D.ba6,D.b54,D.b6E],x.O)
D.e0i=new A.bS(B.a78,1.05,B.x,null,0,D.cPP,null,null)
D.e0F=new A.bS(B.A,0.5,B.x,null,0,W.a_M,null,null)
D.ete=new A.a9(-18,0,18,1)
D.etL=new A.a9(-3,-5,3,5)
D.bzX=new A.ad(B.eh,16,D.eF,null,null,null)
D.aMK=new A.F(!0,D.eF,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffy=new A.x("Screenshot added \xb7 tap to change",null,D.aMK,null,null,null,null,null,null,null,null,null)
D.cEc=w([D.bzX,B.bp,D.ffy],x.p)
D.eut=new A.cx(B.aX,B.b7,B.j,B.m,null,B.p,null,0,D.cEc,null)
D.bDI=new A.ad(B.jN,15,D.eF,null,null,null)
D.fdr=new A.x("Refresh",null,D.aMK,null,null,null,null,null,null,null,null,null)
D.cGl=w([D.bDI,B.d8,D.fdr],x.p)
D.euv=new A.cx(B.aX,B.e,B.Q,B.m,null,B.p,null,0,D.cGl,null)
D.dOZ={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.ewg=new A.eS(D.dOZ,3,x.M)
D.dOJ={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.ewm=new A.eS(D.dOJ,36,x.M)
D.dOM={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.ewu=new A.eS(D.dOM,6,x.M)
D.dPT={memory:0,typing:1,scramble:2,pattern:3}
D.mm=new A.eS(D.dPT,4,x.M)
D.eyD=new A.as(276,276)
D.ezj=new A.a4(13,null,null,null)
D.b00=new A.fg(2.6,null,null,null,null,B.aL,null,null,null,null)
D.ezt=new A.a4(26,26,D.b00,null)
D.eAd=new A.a4(null,7,null,null)
D.eAm=new A.hM(8,0,0,1,null)
D.fgB=new A.x("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aKn=new A.b1(D.fgB,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.eWZ=new A.x("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.eDi=new A.b1(D.eWZ,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.eXX=new A.x("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.eDo=new A.b1(D.eXX,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.fdB=new A.x("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.eE1=new A.b1(D.fdB,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.b9w=new A.w(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,B.t)
D.eNe=new A.F(!0,D.b9w,null,null,null,null,9,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eH2=new A.ep("$",null,null,B.cQ,null,null,null,null,null,null,D.eNe)
D.eHi=new A.F(!0,B.M,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHB=new A.F(!0,B.c,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHG=new A.F(!0,B.bj,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eI2=new A.F(!0,B.M,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIc=new A.F(!0,B.c,null,null,null,null,19,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIk=new A.F(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIs=new A.F(!0,null,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJd=new A.F(!0,B.aL,null,null,null,null,28,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJJ=new A.F(!0,D.eF,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJL=new A.F(!0,B.bJ,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKs=new A.F(!0,E.zI,null,null,null,null,13,B.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLy=new A.F(!0,B.c,null,null,null,null,20,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLW=new A.F(!0,B.bJ,null,null,null,null,11.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMd=new A.F(!0,B.af,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,B.aB,null,null,null,null,null,null,null,null)
D.eMu=new A.F(!0,B.af,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNt=new A.F(!0,B.c,null,null,null,null,11,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNJ=new A.F(!0,B.c,null,null,null,null,14,B.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNU=new A.F(!0,B.bf,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNV=new A.F(!0,B.c,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,B.aB,null,null,null,null,null,null,null,null)
D.eOp=new A.F(!0,B.ix,null,null,null,null,10.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b3T=new A.w(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,B.t)
D.eOC=new A.F(!0,D.b3T,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQ_=new A.F(!0,B.aE,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQm=new A.F(!0,D.ab2,null,null,null,null,9,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aMc=new A.F(!0,E.zI,null,null,null,null,11,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQI=new A.F(!0,B.ft,null,null,null,null,52,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQJ=new A.F(!0,B.bv,null,null,null,null,7,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQY=new A.F(!0,E.zI,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.vz=new A.F(!0,B.c,null,null,null,null,13,B.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b7r=new A.w(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,B.t)
D.eRa=new A.F(!0,D.b7r,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRG=new A.F(!0,B.Ps,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSD=new A.F(!0,B.c,null,null,null,null,38,B.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSJ=new A.F(!0,B.iM,null,null,null,null,11,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSN=new A.F(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aMr=new A.F(!0,B.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTf=new A.F(!0,B.M,null,null,null,null,10,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTj=new A.F(!0,B.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU9=new A.F(!0,B.M,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUx=new A.F(!0,B.af,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUN=new A.F(!0,B.bf,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVg=new A.F(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVk=new A.F(!0,B.M,null,null,null,null,11,B.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWf=new A.x("Value per pair",null,B.hv,null,null,null,null,null,null,null,null,null)
D.eWg=new A.x("Restore now",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eWM=new A.x("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aLZ=new A.F(!0,B.cU,null,null,null,null,12,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWU=new A.x("AVAILABLE PLANS",null,D.aLZ,null,null,null,null,null,null,null,null,null)
D.eWX=new A.x("I understand",null,B.cs,null,null,null,null,null,null,null,null,null)
D.eXp=new A.x("Go Back",null,B.cs,null,null,null,null,null,null,null,null,null)
D.eKj=new A.F(!0,B.bv,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY4=new A.x("PLAN VALUE",null,D.eKj,null,null,null,null,null,null,null,null,null)
D.eY6=new A.x("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.eYs=new A.x("Deposit",null,B.RX,null,null,null,null,null,null,null,null,null)
D.eTx=new A.F(!0,B.dL,null,null,null,null,null,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZo=new A.x("JACKPOT SLOTS",null,D.eTx,null,null,null,null,null,null,null,null,null)
D.eZH=new A.x("Restore",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eKm=new A.F(!0,B.c,null,null,null,null,12,B.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZK=new A.x("YOUR NUMBER",null,D.eKm,null,null,null,null,null,null,null,null,null)
D.eZZ=new A.x("SPIN REELS",null,G.a5a,null,null,null,null,null,null,null,null,null)
D.f_o=new A.x("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.f_S=new A.x("Perfect Score Profit",null,B.hv,null,null,null,null,null,null,null,null,null)
D.f0u=new A.x("Join room",null,B.kl,null,null,null,null,null,null,null,null,null)
D.f2n=new A.x("Add payment screenshot",null,B.jV,null,null,null,null,null,null,null,null,null)
D.f2B=new A.x("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.eSQ=new A.F(!0,B.aL,null,null,null,null,11,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f31=new A.x("INVITE A PLAYER",null,D.eSQ,null,null,null,null,null,null,null,null,null)
D.eS2=new A.F(!0,B.U_,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3r=new A.x("NGMY GOLD LEADER",null,D.eS2,null,null,null,null,null,null,null,null,null)
D.f3W=new A.x("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.f4i=new A.x("Invest & Play",null,B.oH,null,null,null,null,null,null,null,null,null)
D.aLT=new A.F(!0,D.wk,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4F=new A.x("VALID THRU",null,D.aLT,null,null,null,null,null,null,null,null,null)
D.aMt=new A.F(!0,B.aA,null,null,null,null,11,B.I,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4N=new A.x("DEALER",null,D.aMt,null,null,null,null,null,null,null,null,null)
D.f4T=new A.x("CARDHOLDER",null,D.aLT,null,null,null,null,null,null,null,null,null)
D.eRz=new A.F(!0,B.aK,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5y=new A.x("NGMY PLATINUM",null,D.eRz,null,null,null,null,null,null,null,null,null)
D.eUE=new A.F(!0,B.p7,null,null,null,null,10,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6e=new A.x("EARNED SO FAR",null,D.eUE,null,null,null,null,null,null,null,null,null)
D.f6L=new A.x("VS",null,B.aLO,null,null,null,null,null,null,null,null,null)
D.f79=new A.x("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.f7v=new A.x("One day left",null,B.aLw,null,B.L,null,null,null,null,null,null,null)
D.f7P=new A.x("Keep typing \u2014 mistakes are counted in your payout",null,B.Ch,null,null,null,null,null,null,null,null,null)
D.f7Q=new A.x("Multiplayer invite",null,B.kl,null,null,null,null,null,null,null,null,null)
D.f8_=new A.x("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.eJ0=new A.F(!0,B.Ps,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f85=new A.x("\ud83d\udcb0 Partial Payout System",null,D.eJ0,null,null,null,null,null,null,null,null,null)
D.f8f=new A.x("Browse Topics",null,B.eT,null,null,null,null,null,null,null,null,null)
D.eI0=new A.F(!0,B.c,null,null,null,null,22,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8t=new A.x("Investment Required",null,D.eI0,null,B.L,null,null,null,null,null,null,null)
D.eHy=new A.F(!0,B.c,null,null,null,null,16.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9S=new A.x("Network Status",null,D.eHy,null,null,null,null,null,null,null,null,null)
D.fan=new A.x("Their account email",null,F.a4X,null,null,null,null,null,null,null,null,null)
D.faG=new A.x("Verification code",null,B.cs,null,null,null,null,null,null,null,null,null)
D.faH=new A.x("Category",null,null,null,null,null,null,null,null,null,null,null)
D.faT=new A.x("ACTIVE ASSET",null,D.aLZ,null,null,null,null,null,null,null,null,null)
D.fbc=new A.x("Scan QR",null,B.cs,null,null,null,null,null,null,null,null,null)
D.fbh=new A.x("Check word",null,B.cs,null,null,null,null,null,null,null,null,null)
D.fbF=new A.x("YOUR HAND",null,D.aMt,null,null,null,null,null,null,null,null,null)
D.fcb=new A.x("NGMY Music Studio",null,B.kS,null,null,null,null,null,null,null,null,null)
D.fce=new A.x("I sent it \u2014 submit deposit",null,B.oH,null,null,null,null,null,null,null,null,null)
D.fcU=new A.x("Back",null,B.Rx,null,null,null,null,null,null,null,null,null)
D.eVv=new A.F(!0,null,null,null,null,null,null,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd_=new A.x("DEAL / PLAY ROUND",null,D.eVv,null,null,null,null,null,null,null,null,null)
D.fdb=new A.x("Got it \u2014 keep chatting",null,B.cb,null,null,null,null,null,null,null,null,null)
D.fdk=new A.x("3 Messages Left",null,B.aMh,null,null,null,null,null,null,null,null,null)
D.fdO=new A.x("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.fdW=new A.x("Copy",null,B.cs,null,null,null,null,null,null,null,null,null)
D.feh=new A.x("How many games?",null,F.a4X,null,null,null,null,null,null,null,null,null)
D.eR4=new A.F(!0,B.aA,null,null,null,null,null,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fet=new A.x("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.eR4,null,B.L,null,null,null,null,null,null,null)
D.ffY=new A.x("Question",null,null,null,null,null,null,null,null,null,null,null)
D.fg9=new A.x("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.eVU=new A.F(!0,B.c,null,null,null,null,12.5,B.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhE=new A.x("NGMY  WALLET",null,D.eVU,null,null,null,null,null,null,null,null,null)
D.fhF=new A.x("Select Your Bet",null,B.hj,null,null,null,null,null,null,null,null,null)
D.fpo=new A.cz("history",x.W)
D.fpt=new A.cz("ngmy_local_home",x.W)
D.fpu=new A.cz("ngmy_local_invest",x.W)
D.fpv=new A.cz("ngmy_local_wallet",x.W)
D.fs4=new C.XE(null)
D.aPx=new C.ayZ(0,"grid")
D.aPy=new C.ayZ(1,"questions")
D.fsW=new C.ayZ(2,"answer")
D.ftQ=new C.Yy(null)})();(function staticFields(){$.fG3=A.b0(x.N)
$.h4n=A.T(x.N,x.k)
$.fLp=null
$.fLd=A.T(x.N,A.aA("vE"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"i0V","bB5",()=>C.hK2())
w($,"i0H","hcj",()=>{var v=null,u=A.ig(v,v,v,v,D.eH2,B.a5,B.ci,v,B.eq,B.cg)
u.eP()
return u})})()};
(a=>{a["+B/VZrQeHu0g01jdU2ZFqeBkm1k="]=a.current})($__dart_deferred_initializers__);