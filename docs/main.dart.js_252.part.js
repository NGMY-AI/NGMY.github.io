((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,L,Q,A_,E,M,A0,N,A1,R,O,A2,S,A3,P,A4,T,A5,A6,A7,A8,A9,Aa,U,Ab,C={
fVC(d,e,f){var w=null,v=f.k("EN<0>"),u=new A.EN(w,w,w,w,v)
$.a0M()
u.d=new C.cmv(new A.VV(),e,u,f,d)
return new A.hM(u,v.k("hM<1>"))},
cmv:function cmv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cmw:function cmw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cms:function cms(d){this.a=d},
cmt:function cmt(d,e){this.a=d
this.b=e},
cmu:function cmu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cmr:function cmr(d,e,f){this.a=d
this.b=e
this.c=f},
bnP:function bnP(d){this.a=d},
fVB(d,e,f,g){return new C.at0(d,e,f,null,g.k("at0<0>"))},
E5:function E5(){},
aFd:function aFd(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
eN9:function eN9(d){this.a=d},
eN8:function eN8(d,e){this.a=d
this.b=e},
eNb:function eNb(d){this.a=d},
eN6:function eN6(d,e,f){this.a=d
this.b=e
this.c=f},
eNa:function eNa(d){this.a=d},
eN7:function eN7(d){this.a=d},
at0:function at0(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
hKb(d){var w=B.a.i(d)
while(B.a.a_(w,"$"))w=B.a.i(B.a.aY(w,1))
return w},
h4B(d){var w=C.hKb(d)
if(w.length===0)return""
return"$"+w},
fgi(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fgi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:i=B.a.i(d.toLowerCase())
if(i.length===0){w=1
break}t=new A.Q(Date.now(),0,!1).bN(-6048e8)
s=e.length,r=0
case 3:if(!(r<e.length)){w=5
break}q=e[r]
if(B.a.i(q.b.toLowerCase())!==i){w=4
break}p=q.y
o=p.a
if(o>=t.gbo())o=o===t.gbo()&&p.b<t.gcA()
else o=!0
if(o){w=4
break}if(q.x!==B.ci){w=4
break}if(q.d!==B.fw){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!A.dp(m,"game payout:",0))if(!A.dp(m,"game partial:",0)){if(!A.dp(m,"multiplayer payout:",0))o=A.dp(m,"dice",0)&&q.e===B.f7
else o=l
l=o}if(!l){w=4
break}if(A.dp(m,"game payout:",0))k=B.a.i(B.a.aY(n,B.a.cJ(m,"game payout:")+12))
else if(A.dp(m,"game partial:",0)){k=B.a.i(B.a.aY(n,B.a.cJ(m,"game partial:")+13))
j=B.a.cJ(k,"(")
if(j>0)k=B.a.i(B.a.an(k,0,j))}else if(A.dp(m,"multiplayer payout:",0)){k=B.a.i(B.a.aY(n,B.a.cJ(m,"multiplayer payout:")+19))
j=B.a.cJ(k,"(")
if(j>0)k=B.a.i(B.a.an(k,0,j))}else k=A.dp(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return A.b(C.u4(q.c,p,n,d,o,null,q.a,!0),$async$fgi)
case 6:case 4:e.length===s||(0,A.K)(e),++r
w=3
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$fgi,v)},
hOM(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
hLe(d,e,f){return B.d.ba(e,new C.fk1(f,B.a.i(d.toLowerCase())))},
fjT(d){var w
C.fRX(d)
w=d.c4
return A.bj(new A.J(w,new C.fjU(),A.U(w).k("J<1,@>")),!0,x.N)},
hB5(d,e,f){var w,v,u,t,s,r,q=null,p=B.bQ,o=B.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aT.toString
u=$.ed().gi3().b
if(u.a===0)t=1
else{new A.bg(u,A.a2(u).k("bg<2>")).gL(0)
u=$.kR()
s=u.d
t=s==null?u.gfY():s}w=B.k.dE(f*t)
v=new C.f4M(f)
if(J.cX(n,"data:image"))try{u=A.fG(B.cy.aG(B.d.gaj(J.lc(n,","))),B.A,w,new C.f4J(v),B.fM,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.cX(n,"supabase://"))return new A.kX(A.a_C(n),new C.f4K(f,e,p,w,v),q,q,x.gh)
return A.kb(n,B.A,w,new C.f4L(v),B.fM,p,!0,e,q,q,f)},
fH0(d,e){return new A.a4(e,e,A.hP(C.hB5(d,e,e),B.ap),null)},
htB(){var w,v,u=A.a([],x._),t=x.N,s=A.A(D.cWl,x.gm)
for(w=0;w<36;++w){v=B.B1[w]
s.push(new C.qf(v.a,v.b,v.c,v.e,v.f))}return new C.axy(u,A.T(t,t),s)},
fk1:function fk1(d,e){this.a=d
this.b=e},
fjU:function fjU(){},
f4M:function f4M(d){this.a=d},
f4J:function f4J(d){this.a=d},
f4K:function f4K(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f4I:function f4I(d){this.a=d},
f4L:function f4L(d){this.a=d},
aiL:function aiL(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
qf:function qf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
axy:function axy(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
d3y:function d3y(d,e){this.a=d
this.b=e},
d3J:function d3J(d,e){this.a=d
this.b=e},
d40:function d40(){},
d41:function d41(d){this.a=d},
d3R:function d3R(d,e){this.a=d
this.b=e},
d3Q:function d3Q(){},
d3S:function d3S(d){this.a=d},
d3P:function d3P(){},
d3U:function d3U(d){this.a=d},
d3T:function d3T(){},
d3M:function d3M(d){this.a=d},
d3K:function d3K(d){this.a=d},
d3L:function d3L(d){this.a=d},
d3N:function d3N(d){this.a=d},
d3O:function d3O(d){this.a=d},
d3E:function d3E(d,e){this.a=d
this.b=e},
d3F:function d3F(d,e){this.a=d
this.b=e},
d3C:function d3C(d){this.a=d},
d3D:function d3D(d){this.a=d},
d3G:function d3G(d){this.a=d},
d3H:function d3H(d){this.a=d},
d3I:function d3I(d,e,f){this.a=d
this.b=e
this.c=f},
d3B:function d3B(d,e){this.a=d
this.b=e},
d3A:function d3A(d,e){this.a=d
this.b=e},
d3z:function d3z(d,e){this.a=d
this.b=e},
d4_:function d4_(d){this.a=d},
d3Y:function d3Y(d,e,f){this.a=d
this.b=e
this.c=f},
d3X:function d3X(d,e,f){this.a=d
this.b=e
this.c=f},
d3W:function d3W(d,e){this.a=d
this.b=e},
d3V:function d3V(){},
d3Z:function d3Z(d){this.a=d},
aAm:function aAm(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bg2:function bg2(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
dH1:function dH1(d){this.a=d},
dH0:function dH0(d){this.a=d},
dH2:function dH2(d){this.a=d},
dH_:function dH_(){},
dH3:function dH3(d,e){this.a=d
this.b=e},
dGZ:function dGZ(d){this.a=d},
dH4:function dH4(d){this.a=d},
aiK:function aiK(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
axx:function axx(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
d3s:function d3s(d){this.a=d},
d3v:function d3v(d){this.a=d},
d3w:function d3w(d){this.a=d},
d3x:function d3x(d){this.a=d},
d3u:function d3u(d,e){this.a=d
this.b=e},
d3t:function d3t(d,e){this.a=d
this.b=e},
aiM:function aiM(d,e,f,g,h,i,j,k,l,m){var _=this
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
axz:function axz(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.aD=_.aM=_.aB=_.aw=$
_.bH=_.b8=_.aZ=_.b1=null
_.aQ=!1
_.bP=_.bh=null
_.c4=!1
_.cf=_.cT=""
_.c=_.a=_.bB=null},
d5k:function d5k(d,e){this.a=d
this.b=e},
d5n:function d5n(d){this.a=d},
d5o:function d5o(d){this.a=d},
d5p:function d5p(d){this.a=d},
d5q:function d5q(d){this.a=d},
d5r:function d5r(d){this.a=d},
d5l:function d5l(d){this.a=d},
d5m:function d5m(d){this.a=d},
d4A:function d4A(d,e){this.a=d
this.b=e},
d4B:function d4B(d,e){this.a=d
this.b=e},
d53:function d53(d){this.a=d},
d54:function d54(){},
d4Q:function d4Q(d,e,f){this.a=d
this.b=e
this.c=f},
d4R:function d4R(d){this.a=d},
d4S:function d4S(d,e,f){this.a=d
this.b=e
this.c=f},
d4T:function d4T(d,e){this.a=d
this.b=e},
d4U:function d4U(){},
d42:function d42(d){this.a=d},
d4z:function d4z(d,e){this.a=d
this.b=e},
d55:function d55(){},
d5e:function d5e(){},
d52:function d52(d){this.a=d},
d51:function d51(d){this.a=d},
d4x:function d4x(d){this.a=d},
d4y:function d4y(){},
d59:function d59(){},
d5a:function d5a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d5b:function d5b(d,e,f){this.a=d
this.b=e
this.c=f},
d43:function d43(){},
d44:function d44(d){this.a=d},
d45:function d45(){},
d4J:function d4J(d,e){this.a=d
this.b=e},
d4K:function d4K(d,e,f){this.a=d
this.b=e
this.c=f},
d4L:function d4L(d){this.a=d},
d4I:function d4I(d){this.a=d},
d4V:function d4V(d){this.a=d},
d4W:function d4W(){},
d4X:function d4X(d){this.a=d},
d4Y:function d4Y(){},
d4Z:function d4Z(d){this.a=d},
d5_:function d5_(){},
d58:function d58(d,e,f){this.a=d
this.b=e
this.c=f},
d4M:function d4M(d){this.a=d},
d4N:function d4N(d,e){this.a=d
this.b=e},
d4O:function d4O(d){this.a=d},
d4P:function d4P(d){this.a=d},
d5c:function d5c(d){this.a=d},
d5d:function d5d(d){this.a=d},
d46:function d46(d){this.a=d},
d47:function d47(d,e){this.a=d
this.b=e},
d48:function d48(d){this.a=d},
d49:function d49(d){this.a=d},
d56:function d56(d,e){this.a=d
this.b=e},
d57:function d57(d){this.a=d},
d4H:function d4H(d,e){this.a=d
this.b=e},
d50:function d50(d,e,f){this.a=d
this.b=e
this.c=f},
d4F:function d4F(d,e,f){this.a=d
this.b=e
this.c=f},
d4G:function d4G(){},
d5f:function d5f(d){this.a=d},
d5g:function d5g(d){this.a=d},
d5h:function d5h(d){this.a=d},
d5j:function d5j(d){this.a=d},
d5i:function d5i(){},
d4E:function d4E(d,e,f){this.a=d
this.b=e
this.c=f},
d4D:function d4D(d,e){this.a=d
this.b=e},
d4C:function d4C(d,e){this.a=d
this.b=e},
d4m:function d4m(d){this.a=d},
d4l:function d4l(d,e){this.a=d
this.b=e},
d4n:function d4n(d){this.a=d},
d4k:function d4k(d,e){this.a=d
this.b=e},
d4o:function d4o(d){this.a=d},
d4j:function d4j(){},
d4p:function d4p(d){this.a=d},
d4h:function d4h(){},
d4i:function d4i(d){this.a=d},
d4q:function d4q(d){this.a=d},
d4g:function d4g(d,e){this.a=d
this.b=e},
d4r:function d4r(d){this.a=d},
d4f:function d4f(d,e){this.a=d
this.b=e},
d4b:function d4b(d,e){this.a=d
this.b=e},
d4s:function d4s(d){this.a=d},
d4e:function d4e(d,e){this.a=d
this.b=e},
d4t:function d4t(d){this.a=d},
d4d:function d4d(d){this.a=d},
d4a:function d4a(d,e){this.a=d
this.b=e},
d4u:function d4u(d,e,f){this.a=d
this.b=e
this.c=f},
d4v:function d4v(d){this.a=d},
d4c:function d4c(){},
d4w:function d4w(d){this.a=d},
ajD:function ajD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bdd:function bdd(){this.c=this.a=null},
d8C:function d8C(d,e){this.a=d
this.b=e},
d8B:function d8B(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afY:function afY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
auN:function auN(d,e,f,g,h,i,j,k,l,m){var _=this
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
cxx:function cxx(d){this.a=d},
cwS:function cwS(d,e){this.a=d
this.b=e},
cwI:function cwI(d){this.a=d},
cwJ:function cwJ(d){this.a=d},
cx1:function cx1(d){this.a=d},
cwZ:function cwZ(d){this.a=d},
cx_:function cx_(d){this.a=d},
cx0:function cx0(d,e,f){this.a=d
this.b=e
this.c=f},
cwU:function cwU(d){this.a=d},
cwT:function cwT(d){this.a=d},
cwK:function cwK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cwX:function cwX(d){this.a=d},
cwW:function cwW(d){this.a=d},
cwV:function cwV(d,e){this.a=d
this.b=e},
cxk:function cxk(d){this.a=d},
cxe:function cxe(d){this.a=d},
cxh:function cxh(d){this.a=d},
cxg:function cxg(){},
cxd:function cxd(d){this.a=d},
cxf:function cxf(d,e){this.a=d
this.b=e},
cxc:function cxc(){},
cwP:function cwP(){},
cwQ:function cwQ(d,e){this.a=d
this.b=e},
cwR:function cwR(d){this.a=d},
cwN:function cwN(d,e){this.a=d
this.b=e},
cwO:function cwO(d,e){this.a=d
this.b=e},
cx4:function cx4(d,e){this.a=d
this.b=e},
cwY:function cwY(d){this.a=d},
cx5:function cx5(d){this.a=d},
cx6:function cx6(d,e){this.a=d
this.b=e},
cx7:function cx7(d,e){this.a=d
this.b=e},
cx8:function cx8(d,e){this.a=d
this.b=e},
cx9:function cx9(d,e,f){this.a=d
this.b=e
this.c=f},
cxa:function cxa(d){this.a=d},
cxb:function cxb(d){this.a=d},
cx2:function cx2(d,e){this.a=d
this.b=e},
cxj:function cxj(d){this.a=d},
cx3:function cx3(d,e){this.a=d
this.b=e},
cxw:function cxw(d){this.a=d},
cxp:function cxp(d){this.a=d},
cxs:function cxs(d){this.a=d},
cxm:function cxm(d,e){this.a=d
this.b=e},
cxq:function cxq(){},
cxr:function cxr(d,e){this.a=d
this.b=e},
cxn:function cxn(d){this.a=d},
cxo:function cxo(d){this.a=d},
cxu:function cxu(){},
cxt:function cxt(d){this.a=d},
cxl:function cxl(d,e){this.a=d
this.b=e},
cxv:function cxv(d){this.a=d},
cwL:function cwL(d){this.a=d},
cxi:function cxi(d,e){this.a=d
this.b=e},
cwM:function cwM(d,e,f){this.a=d
this.b=e
this.c=f},
aHD:function aHD(){},
aHE:function aHE(){},
aHF:function aHF(){},
aIB:function aIB(){},
bUH(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase())
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
bUI(d){var w=B.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hha(d,e){var w=d.ax
if(w<0)return!1
return w===e},
aUB(d,e){return C.hhb(d,e)},
hhb(d,e){var w=0,v=A.j(x.di),u,t,s,r,q,p
var $async$aUB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aYm(d),$async$aUB)
case 3:p=g
if(p!=null){try{t=B.R.aF(0,p.c,null)
if(x.f.b(t)){s=C.fQi(A.a_(t,x.N,x.z))
if(s==null){u=new A.EI(D.a1O,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bUH(s,e,p.b)){u=new A.EI(D.aB7,null)
w=1
break}r=p.a?D.dHC:D.aB6
u=new A.EI(r,s)
w=1
break}}catch(o){}u=new A.EI(D.a1O,null)
w=1
break}s=C.fQj(d)
if(s==null){u=new A.EI(D.a1O,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bUH(s,e,null)){u=new A.EI(D.aB7,null)
w=1
break}u=new A.EI(D.aB6,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aUB,v)},
fQj(d){var w,v,u,t,s,r
try{w=B.a.i(d)
if(J.cX(w,"\ufeff"))w=J.mm(w,1)
v=!1
if(J.cX(w,"NGMYSNAP1|")){v=!0
w=B.c3.c6(0,B.cy.aG(J.mm(w,10)))}u=B.R.aF(0,w,null)
if(!x.f.b(u))return null
t=A.a_(u,x.N,x.z)
s=v?C.hh9(t):C.fQi(t)
return s}catch(r){return null}},
hh9(d){var w,v,u,t,s,r,q,p,o,n=new C.bUE(),m=new C.bUD(),l=d.h(0,"qi")
if(x.f.b(l)){w=A.a_(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new A.Q(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=A.aM(w.h(0,"d"))
p=new A.uP(v,u,t,s,r,B.k.N(q==null?0:q))}else p=null
v=d.h(0,"qu")
v=J.k(v==null?"User":v)
u=m.$1(d.h(0,"qb"))
t=m.$1(d.h(0,"qp"))
s=J.y(d.h(0,"qc"),!0)
r=n.$1(d.h(0,"qs"))
q=n.$1(d.h(0,"ql"))
n=n.$1(d.h(0,"qe"))
m=m.$1(d.h(0,"qt"))
o=A.aM(d.h(0,"qn"))
if(o==null)o=0
return new A.a4_("","",v,u,t,s,r,q,n,m,o,p,B.hZ,new A.Q(Date.now(),0,!1),-1)},
fQi(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.y(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.bUG()
v=d.h(0,"activeInvestment")
if(x.f.b(v)){u=A.a_(v,x.N,x.z)
t=u.h(0,"name")
t=J.k(t==null?"":t)
s=A.aM(u.h(0,"amount"))
if(s==null)s=0
r=A.aM(u.h(0,"dailyROI"))
if(r==null)r=0
q=w.$1(u.h(0,"purchaseDate"))
if(q==null)q=new A.Q(Date.now(),0,!1)
p=A.aM(u.h(0,"totalEarned"))
if(p==null)p=0
o=A.aM(u.h(0,"daysClockedIn"))
n=new A.uP(t,s,r,q,p,B.k.N(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=A.A(new A.e3(J.b5(m,new C.bUF(w),x.eG),t),t.k("G.E"))}else l=A.a([],x.E)
t=d.h(0,"email")
t=J.k(t==null?"":t)
s=d.h(0,"ownerRealEmail")
s=J.k(s==null?"":s)
r=d.h(0,"username")
r=J.k(r==null?"User":r)
q=A.aM(d.h(0,"accountBalance"))
if(q==null)q=0
p=A.aM(d.h(0,"totalProfit"))
if(p==null)p=0
o=J.y(d.h(0,"isClockedIn"),!0)
k=w.$1(d.h(0,"clockInStartTime"))
j=w.$1(d.h(0,"lastClockInDate"))
i=w.$1(d.h(0,"lastClockInEarningsDate"))
h=A.aM(d.h(0,"todayClockInEarned"))
if(h==null)h=0
g=A.aM(d.h(0,"clockInPenaltyPercent"))
if(g==null)g=0
w=w.$1(d.h(0,"exportedAt"))
if(w==null)w=new A.Q(Date.now(),0,!1)
f=A.aM(d.h(0,"walletStateRevision"))
f=f==null?null:B.k.N(f)
return new A.a4_(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
fBB(d,e,f,g){var w=0,v=A.j(x.N),u,t,s,r
var $async$fBB=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:t=A.bUC(d,e,f,g)
s=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(t.a,s,"_")
u=A.Fd(A.Iy(t.eF(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fBB,v)},
Ui:function Ui(d,e){this.a=d
this.b=e},
bUE:function bUE(){},
bUD:function bUD(){},
bUG:function bUG(){},
bUF:function bUF(d){this.a=d},
hE6(d){return A.ch(null,B.aU,!0,null,new C.f80(),d,null,!0,!0,x.N)},
hEj(d,e,f,g){return A.ch(null,B.aU,!0,null,new C.f9d(g,f,e),d,null,!0,!0,x.y)},
ala:function ala(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
azC:function azC(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dp5:function dp5(d,e){this.a=d
this.b=e},
dp6:function dp6(d){this.a=d},
doX:function doX(d,e){this.a=d
this.b=e},
doV:function doV(d){this.a=d},
dp4:function dp4(d){this.a=d},
dp3:function dp3(d,e){this.a=d
this.b=e},
doU:function doU(d,e){this.a=d
this.b=e},
doT:function doT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
doW:function doW(d){this.a=d},
dp2:function dp2(){},
dp0:function dp0(d){this.a=d},
dp1:function dp1(d,e){this.a=d
this.b=e},
doY:function doY(){},
doZ:function doZ(d,e){this.a=d
this.b=e},
dp_:function dp_(d,e){this.a=d
this.b=e},
dp7:function dp7(d){this.a=d},
ZB:function ZB(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bok:function bok(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Ye:function Ye(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bfC:function bfC(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dpb:function dpb(d){this.a=d},
dp8:function dp8(d,e){this.a=d
this.b=e},
dp9:function dp9(d,e){this.a=d
this.b=e},
dpa:function dpa(d){this.a=d},
Yf:function Yf(d){this.a=d},
bfD:function bfD(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dpc:function dpc(d,e){this.a=d
this.b=e},
f80:function f80(){},
f9d:function f9d(d,e,f){this.a=d
this.b=e
this.c=f},
aci:function aci(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eH4:function eH4(d){this.a=d},
eH5:function eH5(d){this.a=d},
Oo:function Oo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Xm:function Xm(d){this.a=d},
awY:function awY(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cZM:function cZM(d){this.a=d},
cZJ:function cZJ(){},
cZK:function cZK(d){this.a=d},
cZL:function cZL(d){this.a=d},
Sn(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$Sn=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||B.a.i(f).length===0){w=1
break}w=3
return A.b(A.Lr(s),$async$Sn)
case 3:t=h
J.cb(t,A.E(["role",e,"text",B.a.i(f),"at",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.z))
w=4
return A.b(A.alq(s,t),$async$Sn)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Sn,v)},
hht(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=A.U(d).k("a3<1>")
v=A.A(new A.a3(d,new C.bVp(),w),w.k("G.E"))
w=v.length
if(w===0)return""
u=w<=24?v:B.d.fP(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,A.K)(u),++s){r=u[s]
q=J.a8(r)
p=J.y(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+A.t(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
bVp:function bVp(){},
hJB(d){return B.d.dI(B.B1,new C.fgc(d),new C.fgd()).r},
fgc:function fgc(d){this.a=d},
fgd:function fgd(){},
alF:function alF(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bfJ:function bfJ(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dvx:function dvx(d){this.a=d},
dvw:function dvw(d){this.a=d},
dvo:function dvo(d,e,f){this.a=d
this.b=e
this.c=f},
dvt:function dvt(d){this.a=d},
dvq:function dvq(d,e,f){this.a=d
this.b=e
this.c=f},
dvu:function dvu(d){this.a=d},
dvp:function dvp(d){this.a=d},
dvv:function dvv(d){this.a=d},
dvr:function dvr(d){this.a=d},
dvs:function dvs(d){this.a=d},
fRX(d){var w=A.c1L(new A.Q(Date.now(),0,!1)),v=d.bh
if(v===w)return
d.bh=w
d.bP=0
d.c4=A.a([],x.s)},
fRZ(d){return A.ch(null,B.w.j(0.82),!0,null,new C.c1Q(),d,null,!0,!0,x.H)},
a4D:function a4D(d){this.a=d},
c1Q:function c1Q(){},
c1P:function c1P(d){this.a=d},
h3O(){var w=new A.Q(Date.now(),0,!1),v=w.bN(A.dB(4-A.md(w),0,0,0,0,0).a),u=A.bW(A.bw(v),1,4,0,0,0,0,0)
return""+A.bw(v)+"-W"+B.a.aU(B.o.u(1+B.k.by(B.o.al(v.bv(A.bW(A.bw(u),A.bE(u),A.bO(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
f_Q(d,e){var w,v,u,t,s,r,q=A.EU(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.q(t,"email")
r=B.a.i(J.k(s==null?"":s).toLowerCase())
if((B.a.c7(r,"+local.ngmy")?B.a.an(r,0,r.length-11):r)===q)return t}t=A.E(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
hyL(d,e){var w,v,u,t,s,r,q,p=A.EU(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c7(q,"+local.ngmy")?B.a.an(q,0,q.length-11):q)===p){w=A.aM(s.h(t,"winsLeft"))
w=w==null?null:B.k.N(w)
return w==null?0:w}}return 0},
hSC(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=A.EU(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c7(q,"+local.ngmy")?B.a.an(q,0,q.length-11):q)===n){w=A.aM(s.h(t,o))
w=w==null?null:B.k.N(w)
p=(w==null?0:w)-1
s.m(t,o,p<0?0:p)
return}}},
hEZ(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=A.EU(b5),b2=A.c35(),b3=C.h3O()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.a8(s)
q=r.h(s,a2)
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.c7(p,a3)?B.a.an(p,0,p.length-11):p)!==b1)continue
q=A.aM(r.h(s,a4))
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
v=A.aM(w.h(u,a4))
v=v==null?a1:B.k.N(v)
w.m(u,a4,(v==null?1:v)-1)
w=A.aM(w.h(u,"outcome"))
w=w==null?a1:B.k.N(w)
return w==null?1:w}n=new C.fa_()
for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.q(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c7(p,a3)?B.a.an(p,0,p.length-11):p)!==b1)continue
m=n.$5(s,"perDay",a6,a7,b2)
if(m!=null)return m}for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.q(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c7(p,a3)?B.a.an(p,0,p.length-11):p)!==b1)continue
l=n.$5(s,"perWeek",a8,a9,b3)
if(l!=null)return l}k=C.f_Q(b4,b5)
w=J.a8(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?A.a_(v.a(w.h(k,b0)),r,q):A.T(r,q)
w.m(k,b0,j)
for(w=b4.y,w=new A.cR(w,A.a2(w).k("cR<1,2>")).gah(0);w.C();){i=w.d
h=i.b
g=J.a8(h)
f=g.h(h,"perDay")
if(f==null)f=0
e=g.h(h,"perWeek")
if(e==null)e=0
if(f<=0&&e<=0)continue
h=i.a
d=v.b(j.h(0,h))?A.a_(v.a(j.h(0,h)),r,q):A.T(r,q)
j.m(0,h,d)
if(f>0){g=d.h(0,a7)
if(J.k(g==null?"":g)!==b2){d.m(0,a7,b2)
d.m(0,a6,0)}g=A.aM(d.h(0,a6))
a0=g==null?a1:B.k.N(g)
if(a0==null)a0=0
if(a0<f){d.m(0,a6,a0+1)
return A.c5(h,a1)}}if(e>0){g=d.h(0,a9)
if(J.k(g==null?"":g)!==b3){d.m(0,a9,b3)
d.m(0,a8,0)}g=A.aM(d.h(0,a8))
a0=g==null?a1:B.k.N(g)
if(a0==null)a0=0
if(a0<e){d.m(0,a8,a0+1)
return A.c5(h,a1)}}}return a1},
h0z(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[1,2,3],v=d.a,u=0;u<3;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
if(w===0)return 1
t=q[e.aC(w)]
if(t===3&&d.f>=d.e)t=e.he()?1:2
return t},
fHi(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[-1,-2],v=d.a,u=0;u<2;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
return w===0?-1:q[e.aC(w)]},
hF_(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=A.EU(a3),a1=new C.fa0()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.a8(s)
q=r.h(s,"email")
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.c7(p,"+local.ngmy")?B.a.an(p,0,p.length-11):p)!==a0)continue
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
q=new C.fa1(v+r+q>1,l)
k=q.$2(o,"w")
r=k+q.$2(n,"l")
j=a4.aC(r+q.$2(m,"p"))
if(j<k){w.m(u,h,o-1)
w.m(u,d,"w")
w=a2.a
v=w.h(0,"1")
if(v==null)v=10
i=Math.max(1,v)
w=w.h(0,"2")
if(w==null)w=10
return a4.aC(i+Math.max(1,w))<i?1:2}if(j<r){w.m(u,g,n-1)
w.m(u,d,"l")
return C.fHi(a2,a4)}w.m(u,f,m-1)
w.m(u,d,"p")
return 3},
hEY(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=A.aM(i.h(0,"wins")),g=h==null?m:B.k.N(h)
if(g==null)g=0
h=A.aM(i.h(0,"loses"))
w=h==null?m:B.k.N(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.h3O():A.c35()
t=v+"|"+u
s=C.f_Q(d,e)
h=J.a8(s)
r=h.h(s,l)
if(J.k(r==null?"":r)!==t){h.m(s,l,t)
h.m(s,k,0)
h.m(s,j,0)}r=A.aM(h.h(s,k))
q=r==null?m:B.k.N(r)
if(q==null)q=0
r=A.aM(h.h(s,j))
p=r==null?m:B.k.N(r)
if(p==null)p=0
o=Math.max(0,g-q)
r=o+Math.max(0,w-p)
if(r<=0)return m
n=f.aC(r)<o
if(n)h.m(s,k,q+1)
else h.m(s,j,p+1)
return n},
hNc(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
d.bcz()
w=C.hF_(d,e,a0)
if(w!=null){if(w===3)++d.f
C.adH(d,e,w)
return w}v=C.hEZ(d,e)
if(v!=null){if(v===3)++d.f
C.adH(d,e,v)
return v}u=C.hEY(d,e,a0)
if(u!=null)return new C.fnd(d,a0,e).$1(u)
t=C.f_Q(d,e)
s=J.a8(t)
r=A.aM(s.h(t,"winStreak"))
q=r==null?null:B.k.N(r)
if(q==null)q=0
s=A.aM(s.h(t,"loseStreak"))
p=s==null?null:B.k.N(s)
if(p==null)p=0
o=new C.fnf(d,a0)
if(C.hyL(d,e)>0){n=o.$0()
C.hSC(d,e)
C.adH(d,e,n)
return n}if(q>=d.c){n=new C.fne(d,a0).$0()
C.adH(d,e,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.adH(d,e,n)
return n}s=x.t
m=A.a([],s)
l=A.a([],s)
for(s=[1,2,3],r=d.a,k=0;k<3;++k){n=s[k]
j=r.h(0,""+n)
if(j==null)j=10
for(i=0;i<j;++i)m.push(n)}for(s=[-1,-2],k=0;k<2;++k){n=s[k]
j=r.h(0,""+n)
if(j==null)j=10
for(i=0;i<j;++i)l.push(n)}h=B.o.E(d.b,5,95)
g=a0.aC(100)<h
if(g&&m.length!==0){f=m[a0.aC(m.length)]
if(f===3&&d.f>=d.e)f=a0.he()?1:2}else{s=l.length
if(s!==0)f=l[a0.aC(s)]
else f=g?1:-1}if(f===3)++d.f
C.adH(d,e,f)
return f},
c2Y(d){var w=0,v=A.j(x.y),u
var $async$c2Y=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c2X(d),$async$c2Y)
case 3:if(f){u=!0
w=1
break}u=A.c2X(d)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c2Y,v)},
adH(d,e,f){var w,v="winStreak",u="loseStreak",t=C.f_Q(d,e),s=J.a8(t),r=A.aM(s.h(t,v)),q=r==null?null:B.k.N(r)
if(q==null)q=0
r=A.aM(s.h(t,u))
w=r==null?null:B.k.N(r)
if(w==null)w=0
if(f>0){s.m(t,v,q+1)
s.m(t,u,0)}else{s.m(t,u,w+1)
s.m(t,v,0)}},
fa_:function fa_(){},
fa0:function fa0(){},
fa1:function fa1(d,e){this.a=d
this.b=e},
fnd:function fnd(d,e,f){this.a=d
this.b=e
this.c=f},
fnf:function fnf(d,e){this.a=d
this.b=e},
fne:function fne(d,e){this.a=d
this.b=e},
al9:function al9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfA:function bfA(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cP$=d
_.b0$=e
_.c=_.a=null},
doI:function doI(d){this.a=d},
doH:function doH(d){this.a=d},
doJ:function doJ(d){this.a=d},
doG:function doG(d,e){this.a=d
this.b=e},
aIa:function aIa(){},
LS:function LS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c3N:function c3N(){},
c3M:function c3M(){},
an9:function an9(d,e,f){this.c=d
this.d=e
this.a=f},
fCC(d,e,f){return A.ch(null,B.w.j(0.88),!0,null,new C.c4e(f,e),d,null,!0,!0,x.H)},
hle(d){var w,v,u,t,s=B.a.i(d),r=s.split("-")
if(r.length===3){w=A.c5(r[0],null)
v=r[1]
u=A.c5(v,null)
t=A.c5(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?B.i6[u-1]:v)+" "+A.t(t)+", "+A.t(w)}return s},
M_:function M_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c4e:function c4e(d,e){this.a=d
this.b=e},
bge:function bge(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
dO2:function dO2(d,e){this.a=d
this.b=e},
dNZ:function dNZ(){},
dO_:function dO_(){},
dO0:function dO0(d,e){this.a=d
this.b=e},
dO1:function dO1(d,e){this.a=d
this.b=e},
aIK:function aIK(){},
h3K(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.bc8(new C.fiz(w))
w=w.a
return w==null?null:w.c.a},
h3C(d){$.aT.x1$.push(new C.fim(d))},
h3W(d){var w=$.rp().gbb(),v=w!=null
if(!v||w.c==null)return
if(C.h3K(w)==="GamePlayScreen")if(v&&w.c!=null&&w.oP())w.eD()},
h3V(d){C.h0F(d,0)},
h0F(d,e){var w,v
if(e>4)return
w=d==null?$.rp().gbb():d
if(w==null||w.c==null)return
v=C.h3K(w)
if(v==="GameCenterScreen")return
if(D.erB.t(0,v)&&w.oP()){w.eD()
$.aT.x1$.push(new C.f6h(w,e))}},
aMy(d,e,f){return A.ee(A.ck(new C.fjX(e,d,f)),e,!0)},
fiz:function fiz(d){this.a=d},
fim:function fim(d){this.a=d},
fil:function fil(d){this.a=d},
f6h:function f6h(d,e){this.a=d
this.b=e},
fjX:function fjX(d,e,f){this.a=d
this.b=e
this.c=f},
and(d,e){var w=0,v=A.j(x.H),u
var $async$and=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=A.Tr(e)
w=2
return A.b(A.anc(d,u),$async$and)
case 2:A.a5g(d,u)
return A.h(null,v)}})
return A.i($async$and,v)},
u4(d,e,f,g,h,i,j,k){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$u4=A.e(function(l,m){if(l===1)return A.f(m,v)
for(;;)switch(w){case 0:o=A.xB(g)
if(o.length===0){w=1
break}t=e==null?A.JD(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return A.b(A.M0(o),$async$u4)
case 3:q=m
if(j!=null&&j.length!==0&&J.rq(q,new C.c4s(j))){w=1
break}p=e==null?new A.Q(Date.now(),0,!1):e
J.p2(q,0,new A.j_(B.o.u(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return A.b(C.and(o,q),$async$u4)
case 4:if(i==null||r==null||s)C.a5i(o).bz(new C.c4t(),x.S).eN(new C.c4u())
case 1:return A.h(u,v)}})
return A.i($async$u4,v)},
a5i(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a5i=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=$.h4T
m=A.xB(d)
if(n==null||m.length===0){w=1
break}w=3
return A.b(A.M0(m),$async$a5i)
case 3:t=f
s=J.cB(t)
if(!s.ba(t,new C.c4r())){w=1
break}w=4
return A.b(n.$2(m,t),$async$a5i)
case 4:r=f
q=J.a8(r)
if(q.gJ(r)!==s.gJ(t)){w=1
break}for(p=!1,o=0;o<s.gJ(t);++o)if(B.R.am(s.h(t,o).ac(),null)!==B.R.am(q.h(r,o).ac(),null))p=!0
w=p?5:6
break
case 5:w=7
return A.b(C.and(m,r),$async$a5i)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$a5i,v)},
aX_(d){var w=0,v=A.j(x.S),u,t
var $async$aX_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fCF(d,!1),$async$aX_)
case 3:t=J
w=4
return A.b(C.ane(d,!1),$async$aX_)
case 4:u=t.dE(f,new C.c4q(new A.Q(Date.now(),0,!1).bN(-864e8))).gJ(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aX_,v)},
ane(d,e){var w=0,v=A.j(x.ac),u,t,s,r
var $async$ane=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=A.xB(d)
if(r.length===0){u=A.a([],x.gi)
w=1
break}w=3
return A.b(A.M0(r),$async$ane)
case 3:t=g
s=A.Tr(t)
if(s.length!==J.aa(t))C.and(r,s)
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ane,v)},
hL8(d){var w,v,u,t=new A.Q(Date.now(),0,!1),s=t.bv(d).a,r=B.o.al(s,6e7)
if(r<1)return"Just now"
w=B.o.al(s,36e8)
if(w<1)return""+r+"m ago"
if(B.o.al(s,864e8)<1)return""+w+"h ago"
v=B.o.F(A.dj(d),12)===0?12:B.o.F(A.dj(d),12)
s=B.i6[A.bE(d)-1]
r=A.bw(d)===A.bw(t)?"":", "+A.bw(d)
w=B.a.aU(B.o.u(A.fY(d)),2,"0")
u=A.dj(d)<12?"AM":"PM"
return s+" "+A.bO(d)+r+" \xb7 "+v+":"+w+" "+u},
bwl(d){var w=B.k.aa(Math.abs(d),2).split(".")
return"$"+A.og(w[0],A.ae("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.f4t(),null)+"."+w[1]},
bzQ(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$bzQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ane(e,!1),$async$bzQ)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
A.fCF(e,!0).bz(new C.fvm(e),t).bz(new C.fvn(),t).eN(new C.fvo())
w=4
return A.b(A.c1(B.K,null,new C.fvp(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bzQ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$bzQ,v)},
fFu(d,e,f){var w=null,v=B.c.j(0.05),u=A.m(14),t=A.H(f.j(0.35),B.r,1)
return A.D(A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),B.bB,A.f_(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.ds)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.hD,w,w,w),1)},
dO3(d,e,f){var w=null,v=B.w.j(0.22),u=A.m(8),t=A.H(f.j(0.28),B.r,1)
return A.D(A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.f_(B.a3,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.ec)],x.p),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.KC,w,w,w),1)},
c4s:function c4s(d){this.a=d},
c4t:function c4t(){},
c4u:function c4u(){},
c4r:function c4r(){},
c4q:function c4q(d){this.a=d},
f4t:function f4t(){},
fvm:function fvm(d){this.a=d},
fvn:function fvn(){},
fvo:function fvo(){},
fvp:function fvp(d,e){this.a=d
this.b=e},
fvl:function fvl(d,e){this.a=d
this.b=e},
fvk:function fvk(d){this.a=d},
ab8:function ab8(d,e){this.c=d
this.a=e},
dO5:function dO5(){},
dO6:function dO6(){},
dO7:function dO7(){},
dO8:function dO8(d){this.a=d},
dOa:function dOa(){},
dO9:function dO9(d){this.a=d},
ab7:function ab7(d,e){this.c=d
this.a=e},
dO4:function dO4(){},
bzR(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return A.hO(B.aU,!1,w,d,new C.fvs(j,i,h,g,e,f),null,B.eL,!1,x.H)},
fvs:function fvs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fvq:function fvq(d,e){this.a=d
this.b=e},
fvr:function fvr(d,e){this.a=d
this.b=e},
axA:function axA(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bbX:function bbX(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bp$=e
_.a6$=f
_.c=_.a=null},
d5t:function d5t(d,e){this.a=d
this.b=e},
d5s:function d5s(){},
abx:function abx(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aHG:function aHG(){},
anZ(d,e,f){return new C.aXQ(f,d,e,null)},
hlT(d){var w=A.a(B.k.aa(d,2).split("."),x.s),v=A.ae("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=A.og(w[0],v,new C.c62(),null)
return B.d.aH(w,".")},
aX2(){var w=$.rP
if((w>0?$.rP=w-1:w)<=0)$.rP=0},
aeQ(d,e){var w=0,v=A.j(x.H),u
var $async$aeQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=$.fJO
w=u!=null?2:3
break
case 2:w=4
return A.b(u.$2(d,e),$async$aeQ)
case 4:case 3:return A.h(null,v)}})
return A.i($async$aeQ,v)},
aXQ:function aXQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c63:function c63(d){this.a=d},
c62:function c62(){},
Lu:function Lu(){},
bVW:function bVW(){},
fJd(d){if(d>0)return"+"+d
return""+d},
fIB(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fjY(d,e){var w=J.q(e,d)
if(w==null)w=A.fiJ().h(0,d)
return w==null?90:w},
f3r(d,e){var w,v,u=A.b_(x.S)
while(u.a<3){w=e.aC(41)-20
if(w===0)continue
u.K(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.K(0,d+v*7+3)
v=A.a([B.o.u(d)],x.s)
B.d.v(v,new A.jC(u,new C.f3s(),u.$ti.k("jC<cl.E,n>")))
B.d.fA(v,e)
return v},
h_G(d,e,f){var w,v,u,t,s=A.b_(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.K(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.K(0,f[B.o.F(u,5)]+u);++u}t=A.a([d],x.s)
B.d.v(t,A.oL(s,3,s.$ti.k("cl.E")))
B.d.fA(t,e)
return t},
hGm(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=A.a([],x.dA),b2=new A.f3()
b2.dU(42)
for(w=x.s,v=0;v<200;++v){u=B.o.F(v,5)
if(u===0){t=[4,9,16,25,36,49,64,81,121,144,196,256][b2.aC(12)]
s=[2,3,5,6,7,10,11,13][b2.aC(8)]
r=B.k.N(Math.sqrt(t))
q=2+b2.aC(4)
p=B.o.al(q,2)
if((q&1)===0){o=""+r
n=""+s
m=p===1?o+"\u221a"+n:o+"x^"+p+"\u221a"+n}else{o=""+r
n=""+s
m=p===0?o+"\u221a"+n+"x":o+"x^"+p+"\u221a"+n+"x"}o=""+p
n=""+s
l=""+r+"x^"
b1.push(new C.He("Simplify \u221a("+t*s+"x^"+q+")",m,C.h_G(m,b2,A.a([""+(r+1)+"x^"+o+"\u221a"+n,A.t(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aC(35)
j=b2.aC(4)===0?1:2+b2.aC(4)
i=b2.aC(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.He("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.f3r(k,b2)))}else if(u===2){k=2+b2.aC(18)
j=b2.aC(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aC(10)+2
b1.push(new C.He("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.f3r(g,b2)))}else b1.push(new C.He("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.f3r(k,b2)))}else if(u===3){e=b2.aC(11)-5
o=b2.aC(11)
n=b2.aC(11)
d=b2.aC(11)+2
l=b2.he()?1:-1
a0=e+l*(b2.aC(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===B.k.jA(a4)?""+B.k.N(a4):"\u221a"+a3
b1.push(new C.He("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.f3r(a0,b2)))}else{a6=2+b2.aC(10)
a7=a6+2+b2.aC(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.He("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.h_G(m,b2,A.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
hQS(d){var w,v,u=x.s,t=A.a(d.split(""),u)
if(t.length<4)return new A.dy(A.a(d.split(""),u),x.bJ).fN(0)
for(w=0;w<12;++w){B.d.fA(t,B.cE)
v=B.d.fN(t)
if(v!==d)return v}return new A.dy(t,x.bJ).fN(0)},
He:function He(d,e,f){this.a=d
this.b=e
this.c=f},
f3s:function f3s(){},
amC:function amC(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAn:function aAn(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
dH7:function dH7(d){this.a=d},
dH8:function dH8(d){this.a=d},
dH9:function dH9(d){this.a=d},
dHa:function dHa(d,e){this.a=d
this.b=e},
dHb:function dHb(d,e){this.a=d
this.b=e},
dHc:function dHc(d){this.a=d},
dH6:function dH6(d){this.a=d},
dHd:function dHd(d){this.a=d},
dH5:function dH5(d){this.a=d},
dHg:function dHg(d){this.a=d},
dHh:function dHh(d){this.a=d},
dHf:function dHf(d,e){this.a=d
this.b=e},
dHe:function dHe(d,e){this.a=d
this.b=e},
anf:function anf(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAE:function aAE(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
dOs:function dOs(d,e,f){this.a=d
this.b=e
this.c=f},
dOt:function dOt(d){this.a=d},
dOo:function dOo(d){this.a=d},
dOq:function dOq(d,e){this.a=d
this.b=e},
dOp:function dOp(d,e){this.a=d
this.b=e},
dOr:function dOr(d,e){this.a=d
this.b=e},
dOn:function dOn(d){this.a=d},
hi5(d){var w,v,u,t,s,r,q,p=new A.Q(Date.now(),0,!1),o=p.bN(36e8)
try{w=d.h(0,"start")
p=A.mt(J.k(w==null?"":w)).bQ()
w=d.h(0,"end")
o=A.mt(J.k(w==null?"":w)).bQ()}catch(v){}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"title")
u=J.k(u==null?"Event":u)
t=p
s=o
r=d.h(0,"notes")
r=r==null?null:J.k(r)
q=d.h(0,"location")
return new C.qN(w,u,t,s,r,q==null?null:J.k(q))},
a5o(d){var w=0,v=A.j(x.ck),u,t,s,r,q,p,o
var $async$a5o=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.b)
w=1
break}w=3
return A.b(A.ax(),$async$a5o)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aS(J.q(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.b)
w=1
break}try{s=B.R.aF(0,t,null)
if(!x.j.b(s)){p=A.a([],x.b)
u=p
w=1
break}p=J.d5(s,x.f)
p=A.cA(p,new C.c4U(),p.$ti.k("G.E"),x.b1)
p=A.A(p,A.a2(p).k("G.E"))
B.d.b_(p,new C.c4V())
u=p
w=1
break}catch(n){r=A.a6(n)
$.al.$1("[calendar-memory] load: "+A.t(r))
p=A.a([],x.b)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$a5o,v)},
anx(d,e){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$anx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.a5o(d),$async$anx)
case 2:r=g
q=J.cB(r)
q.bm(r,new C.c4R(e))
q.K(r,e)
q.b_(r,new C.c4S())
w=3
return A.b(A.ax(),$async$anx)
case 3:u=g
t=B.a.i(d.toLowerCase())
q=q.k5(r,80)
s=q.$ti.k("J<ai.E,a1<n,@>>")
q=A.A(new A.J(q,new C.c4T(),s),s.k("ai.E"))
w=4
return A.b(u.aq("String","ngmy_helper_calendar_v1_"+t,B.R.am(q,null)),$async$anx)
case 4:return A.h(null,v)}})
return A.i($async$anx,v)},
hlr(d,e){var w=Date.now(),v=new A.Q(w,0,!1).bQ()
w=J.dE(d,new C.c4W(v,v.bN(A.dB(14,0,0,0,0,0).a)))
w=A.A(w,w.$ti.k("G.E"))
return w},
fSv(d){var w,v,u,t,s,r,q,p,o,n,m=C.hlr(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=A.dc(m,0,A.dH(20,"count",x.S),A.U(m).c),v=w.$ti,w=new A.bU(w,w.gJ(0),v.k("bU<ai.E>")),v=v.k("ai.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=B.o.F(A.dj(s),12)===0?12:B.o.F(A.dj(s),12)
q=A.dj(s)>=12?"PM":"AM"
p=B.a.aU(B.o.u(A.fY(s)),2,"0")
o=t.f
if((o==null?null:B.a.i(o).length!==0)===!0){o.toString
n=" @ "+B.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+A.bE(s)+"/"+A.bO(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&B.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return B.a.i(u.charCodeAt(0)==0?u:u)},
qN:function qN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c4U:function c4U(){},
c4V:function c4V(){},
c4R:function c4R(d){this.a=d},
c4S:function c4S(){},
c4T:function c4T(){},
c4W:function c4W(d,e){this.a=d
this.b=e},
hi6(d){var w,v,u,t,s,r,q,p,o=null,n=new A.Q(Date.now(),0,!1)
try{w=d.h(0,"when")
n=A.mt(J.k(w==null?"":w)).bQ()}catch(v){}w=d.h(0,"id")
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
return new C.qO(w,u,t,s,r,q,J.k(p==null?"user":p))},
fQR(d){var w=B.o.F(A.dj(d),12)===0?12:B.o.F(A.dj(d),12),v=A.dj(d)>=12?"PM":"AM"
return""+A.bE(d)+"/"+A.bO(d)+" "+w+":"+B.a.aU(B.o.u(A.fY(d)),2,"0")+" "+v},
SA(d){var w=0,v=A.j(x.e),u,t,s,r,q,p,o
var $async$SA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.x)
w=1
break}w=3
return A.b(A.ax(),$async$SA)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aS(J.q(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.x)
w=1
break}try{s=B.R.aF(0,t,null)
if(!x.j.b(s)){p=A.a([],x.x)
u=p
w=1
break}p=J.d5(s,x.f)
p=A.cA(p,new C.bYj(),p.$ti.k("G.E"),x.Q)
p=A.A(p,A.a2(p).k("G.E"))
B.d.b_(p,new C.bYk())
u=p
w=1
break}catch(n){r=A.a6(n)
$.al.$1("[call-memory] load: "+A.t(r))
p=A.a([],x.x)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$SA,v)},
aVn(d,e){var w=0,v=A.j(x.H),u,t,s,r
var $async$aVn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$aVn)
case 2:u=g
t=A.dc(e,0,A.dH(120,"count",x.S),A.U(e).c).dA(0)
s=B.a.i(d.toLowerCase())
r=A.U(t).k("J<1,a1<n,@>>")
r=A.A(new A.J(t,new C.bYh(),r),r.k("ai.E"))
w=3
return A.b(u.aq("String","ngmy_call_memory_v1_"+s,B.R.am(r,null)),$async$aVn)
case 3:return A.h(null,v)}})
return A.i($async$aVn,v)},
aVo(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$aVo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:p=A.T(x.N,x.Q)
o=J
w=2
return A.b(C.SA(d),$async$aVo)
case 2:u=o.aU(g)
case 3:if(!u.C()){w=4
break}t=u.gT(u)
p.m(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.m(0,r.a,r)}u=p.$ti.k("bg<2>")
q=A.A(new A.bg(p,u),u.k("G.E"))
B.d.b_(q,new C.bYi())
w=5
return A.b(C.aVn(d,q),$async$aVo)
case 5:return A.h(null,v)}})
return A.i($async$aVo,v)},
bYl(d,e){var w=0,v=A.j(x.e),u,t,s
var $async$bYl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.SA(d),$async$bYl)
case 3:t=s.dE(g,new C.bYm(e.bN(-72e8),e.bN(72e8)))
t=A.A(t,t.$ti.k("G.E"))
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bYl,v)},
fQS(d,e){var w,v,u,t,s,r=J.a8(d)
if(r.gai(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.k5(d,e),v=w.$ti,w=new A.bU(w,w.gJ(0),v.k("bU<ai.E>")),v=v.k("ai.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gTC()+"\n"
t=t.f
if(t!=null&&B.a.i(t).length!==0){s=B.a.i(t)
u+="  Voicemail/text: "+(s.length>180?B.a.an(s,0,177)+"\u2026":s)+"\n"}}r=r.gJ(d)>e?u+("\u2026 and "+(r.gJ(d)-e)+" more\n"):u
return B.a.i(r.charCodeAt(0)==0?r:r)},
hMX(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new A.Q(q,0,!1).bQ(),o=d.toLowerCase(),n=A.bW(A.bw(p),A.bE(p),A.bO(p),0,0,0,0,0)
if(B.a.t(o,"yesterday"))n=n.bN(r)
else if(!B.a.t(o,"today")&&B.a.t(o,"last night"))n=n.bN(r)
w=A.ae("\\b(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!0,!1,!1,!1).cz(o)
if(w==null)return null
q=w.b
v=q[1]
u=A.c5(v==null?"":v,null)
if(u==null)u=0
v=q[2]
t=A.c5(v==null?"":v,null)
if(t==null)t=0
s=q[3]
if(s==="pm"&&u<12)u+=12
if(s==="am"&&u===12)u=0
q=s==null
v=!1
if(q)if(u<=7)v=B.a.t(o,"am")||B.a.t(o,"morning")||B.a.t(o,"night")
if(v)if(B.a.t(o,"pm")||B.a.t(o,"afternoon")||B.a.t(o,"evening"))u=u<12?u+12:u
if(q&&B.a.t(o,"pm"))u=u<12?u+12:u
return A.bW(A.bw(n),A.bE(n),A.bO(n),u,t,0,0,0)},
h5i(d){var w=A.ae("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
qO:function qO(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bYj:function bYj(){},
bYk:function bYk(){},
bYh:function bYh(){},
bYi:function bYi(){},
bYm:function bYm(d,e){this.a=d
this.b=e},
fSy(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lm(t,w,v,u==null?null:J.k(u))},
hlx(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b5(v,new C.c51(),x.bP)
v=A.A(v,v.$ti.k("ai.E"))}if(v==null)v=D.cRH
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.y(d.h(0,"printable"),!0)
return new C.ib(r,w,v,u,t,typeof d.h(0,s)=="number"?B.k.N(A.f4(d.h(0,s))):0)},
hlw(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.hyZ(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?B.k.N(A.f4(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?B.k.N(A.f4(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b5(s,new C.c5_(),x.u)
s=A.A(s,s.$ti.k("ai.E"))}return new C.hX(p,w,v,u,s==null?D.asm:s,t)},
hz_(d){var w,v,u,t=A.E([F.AE,"investments",B.oi,"games",B.jK,"loans",B.hs,"withdrawals",B.kG,"deposits",B.kH,"civic",B.kF,"store",B.qz,"jobs",B.m7,"refunds",B.eN,"account",B.lw,"music",B.x7,"help"],x.dk,x.N)
for(w=new A.cR(t,A.a2(t).k("cR<1,2>")).gah(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
hyZ(d){switch(d){case"investments":return F.AE
case"games":return B.oi
case"loans":return B.jK
case"withdrawals":return B.hs
case"deposits":return B.kG
case"civic":return B.kH
case"store":return B.kF
case"jobs":return B.qz
case"refunds":return B.m7
case"account":return B.eN
case"music":return B.lw
default:return B.x7}},
mI(d){var w=A.a([new C.lm("text",d,null,null)],x.a)
return w},
aeN(){var w=null,v=x.v
return A.a([new C.hX("investments","Investments",F.AE,4280468830,A.a([new C.ib("inv1","How do I buy an investment plan?",C.mI("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.ib("inv2","When do I get paid from my plan?",C.mI("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.ib("inv3","Can I have more than one plan?",C.mI("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.hX("games","Games",B.oi,4287323382,A.a([new C.ib("gam1","How do NGMY games work?",C.mI("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.ib("gam2","Why did my game payout change?",C.mI("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.hX("loans","Loans",B.jK,4294538006,A.a([new C.ib("loan1","How do I apply for a loan?",C.mI("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.ib("loan2","What is the repayment period?",C.mI("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.hX("withdrawals","Withdrawals",B.hs,4282090230,A.a([new C.ib("wd1","How do I withdraw money?",C.mI("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.ib("wd2","Why is my withdrawal pending?",C.mI("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.hX("deposits","Deposits",B.kG,4279548070,A.a([new C.ib("dep1","How do I deposit funds?",C.mI("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.ib("dep2","How long until my deposit posts?",C.mI("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.hX("civic","Civic Registry",B.kH,4289170426,A.a([new C.ib("civ1","What is Civic Registry?",C.mI("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.ib("civ2","What does \u201cmissed\u201d mean on my profile?",C.mI("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.hX("store","NGMY Store",B.kF,4293675161,A.a([new C.ib("sto1","How do I buy from NGMY Store?",C.mI("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.ib("sto2","How do I sell in the store?",C.mI("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.hX("jobs","Jobs & Creator",B.qz,4293548044,A.a([new C.ib("job1","How do I find jobs?",C.mI("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.ib("job2","How do I post a job?",C.mI("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.hX("refunds","Refunds",B.m7,4293870660,A.a([new C.ib("ref1","Can I get a refund?",C.mI("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.ib("ref2","How long do refunds take?",C.mI("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.hX("account","Account",B.eN,4281908728,A.a([new C.ib("acc1","How do I update my profile?",C.mI("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.ib("acc2","I forgot my password \u2014 what now?",C.mI("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.hX("music","Music Charts",B.lw,4290807036,A.a([new C.ib("mus1","What are Music Charts?",C.mI("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.ib("mus2","How do I upload music?",C.mI("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.hX("help","Help Center",B.x7,4279080072,A.a([new C.ib("hlp1","Where can I get live help?",C.mI("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.ib("hlp2","How do daily Helper limits work?",C.mI("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
fSz(d){var w,v=J.a8(d),u=v.gai(d)
if(u)return C.aeN()
v=v.di(d,new C.c54(),x.i)
w=A.A(v,v.$ti.k("ai.E"))
B.d.b_(w,new C.c55())
return w.length===0?C.aeN():w},
fSA(d){var w=J.b5(d,new C.c56(),x.P)
w=A.A(w,w.$ti.k("ai.E"))
return A.E(["categories",w,"savedAt",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.z)},
anz(d){return C.hly(d)},
hly(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q,p
var $async$anz=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.ax(),$async$anz)
case 6:s=f
w=7
return A.b(s.aq("String","ngmy_helper_kb_v1",B.R.am(C.fSA(d),null)),$async$anz)
case 7:u=1
w=5
break
case 3:u=2
p=t.pop()
r=A.a6(p)
$.al.$1("[helper kb] local save: "+A.t(r))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$anz,v)},
c53(){var w=0,v=A.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$c53=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ax(),$async$c53)
case 7:r=e
q=A.aS(J.q(r.a,"ngmy_helper_kb_v1"))
if(q==null||B.a.i(q).length===0){l=C.aeN()
u=l
w=1
break}p=B.R.aF(0,q,null)
if(!x.f.b(p)){l=C.aeN()
u=l
w=1
break}o=J.q(p,"categories")
if(!x.j.b(o)){l=C.aeN()
u=l
w=1
break}n=C.fSz(o)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
m=A.a6(j)
$.al.$1("[helper kb] local load: "+A.t(m))
l=C.aeN()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$c53,v)},
aXo(){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$aXo=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.bY(),$async$aXo)
case 7:if(!e){u=null
w=1
break}w=8
return A.b(A.eW("ngmy_helper_kb",null,!1,B.bE),$async$aXo)
case 8:q=e
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a6(o)
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
return A.i($async$aXo,v)},
aXp(d){return C.hlz(d)},
hlz(d){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aXp=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.bY(),$async$aXp)
case 7:if(!f){u=!1
w=1
break}w=8
return A.b(A.hv("ngmy_helper_kb",d,!1,!1,B.cD,null),$async$aXp)
case 8:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a6(o)
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
return A.i($async$aXp,v)},
anA(){var w=0,v=A.j(x.I),u,t,s,r
var $async$anA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c53(),$async$anA)
case 3:s=e
w=4
return A.b(C.aXo(),$async$anA)
case 4:r=e
w=r!=null&&x.j.b(J.q(r,"categories"))?5:6
break
case 5:t=C.fSz(x.j.a(J.q(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return A.b(C.anz(t),$async$anA)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anA,v)},
c57(d){var w=0,v=A.j(x.y),u
var $async$c57=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.anz(d),$async$c57)
case 3:u=C.aXp(C.fSA(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c57,v)},
lm:function lm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ib:function ib(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c52:function c52(){},
c51:function c51(){},
hX:function hX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c50:function c50(){},
c5_:function c5_(){},
c54:function c54(){},
c55:function c55(){},
c56:function c56(){},
b5B:function b5B(d){this.a=d},
Ty:function Ty(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAQ:function aAQ(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
dS7:function dS7(){},
dS8:function dS8(){},
dS1:function dS1(d){this.a=d},
dS2:function dS2(d){this.a=d},
dRL:function dRL(d,e){this.a=d
this.b=e},
dRM:function dRM(d){this.a=d},
dRN:function dRN(d,e,f){this.a=d
this.b=e
this.c=f},
dRK:function dRK(d){this.a=d},
dRZ:function dRZ(d,e){this.a=d
this.b=e},
dS_:function dS_(d,e){this.a=d
this.b=e},
dS0:function dS0(d){this.a=d},
dRT:function dRT(d){this.a=d},
dRU:function dRU(d,e,f){this.a=d
this.b=e
this.c=f},
dRS:function dRS(d,e){this.a=d
this.b=e},
dRY:function dRY(d,e,f){this.a=d
this.b=e
this.c=f},
dRX:function dRX(d,e){this.a=d
this.b=e},
dRW:function dRW(d,e){this.a=d
this.b=e},
dRV:function dRV(d,e,f){this.a=d
this.b=e
this.c=f},
dRP:function dRP(d){this.a=d},
dRO:function dRO(d){this.a=d},
dRQ:function dRQ(d,e){this.a=d
this.b=e},
dRR:function dRR(d){this.a=d},
dS6:function dS6(d,e){this.a=d
this.b=e},
dS5:function dS5(d,e){this.a=d
this.b=e},
dS4:function dS4(){},
dS3:function dS3(d,e){this.a=d
this.b=e},
NR:function NR(d,e){this.c=d
this.a=e},
b7r:function b7r(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cFY:function cFY(d){this.a=d},
cFX:function cFX(d,e){this.a=d
this.b=e},
cFV:function cFV(d,e){this.a=d
this.b=e},
cFZ:function cFZ(d){this.a=d},
cFW:function cFW(d,e){this.a=d
this.b=e},
cFU:function cFU(d,e){this.a=d
this.b=e},
cG_:function cG_(d){this.a=d},
cG0:function cG0(d,e){this.a=d
this.b=e},
Z1:function Z1(d,e,f){this.c=d
this.d=e
this.a=f},
aCJ:function aCJ(){this.d=$
this.c=this.a=null},
eC9:function eC9(d,e){this.a=d
this.b=e},
eCa:function eCa(d){this.a=d},
eCg:function eCg(){},
eCf:function eCf(d,e){this.a=d
this.b=e},
eCe:function eCe(d,e){this.a=d
this.b=e},
eCb:function eCb(d,e){this.a=d
this.b=e},
eCd:function eCd(d,e,f){this.a=d
this.b=e
this.c=f},
eCc:function eCc(d,e,f){this.a=d
this.b=e
this.c=f},
Z0:function Z0(d,e){this.c=d
this.a=e},
aCI:function aCI(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
eC5:function eC5(d,e){this.a=d
this.b=e},
eC3:function eC3(d){this.a=d},
eC4:function eC4(d,e){this.a=d
this.b=e},
eC7:function eC7(d,e){this.a=d
this.b=e},
eC8:function eC8(d){this.a=d},
eC6:function eC6(d,e){this.a=d
this.b=e},
hlu(d){var w=new A.J(d,new C.c4X(),A.U(d).k("J<1,n>")).aH(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
c4Y(d,e,f){return C.hlv(d,e,f)},
hlv(b4,b5,b6){var w=0,v=A.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$c4Y=A.e(function(b8,b9){if(b8===1)return A.f(b9,v)
for(;;)switch(w){case 0:b3=B.a.i(b5)
if(b3.length===0){u=new A.IN([A.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return A.b(A.qm(A.mL(b3),C.hlu(b6)+"\n\nAdmin instruction:\n"+b4,B.he,null),$async$c4Y)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=B.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new A.IN([A.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=B.a.i(a3)
if(J.cX(s,"```"))s=B.a.e1(J.fMz(s,A.ae("^```(?:json)?\\s*",!0,!1,!1,!1),""),A.ae("\\s*```$",!0,!1,!1,!1),"")
r=B.R.aF(0,s,null)
a3=x.f
if(!a3.b(r)){a3=A.a([],x.Y)
u=new A.IN([a3,"AI response was not valid JSON.",null,null])
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
if(!a6.b(n)||J.cj(n)){a3=A.a([],x.Y)
u=new A.IN([a3,"AI did not return any categories.",p,o])
w=1
break}m=A.a([],x.Y)
l=b6.length
for(k=0,a7=x.v,a8=x.a;k<J.aa(n);++k){j=A.a_(a3.a(J.q(n,k)),a4,a5)
i="cat_ai_"+1000*Date.now()+"_"+A.t(k)
h=J.q(j,"questions")
g=A.a([],a7)
if(a6.b(h))for(f=0;f<J.aa(h);++f){e=A.a_(a3.a(J.q(h,f)),a4,a5)
d=J.q(e,"answerBlocks")
a0=A.a([],a8)
if(a6.b(d))for(a9=J.aU(d);a9.C();){a1=a9.gT(a9)
J.cb(a0,C.fSy(A.a_(a3.a(a1),a4,a5)))}if(J.aa(a0)===0){a9=J.q(e,"answer")
J.cb(a0,new C.lm("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=A.t(f)
b1=J.q(e,"question")
J.cb(g,new C.ib("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.y(J.q(e,"printable"),!0),f))}a9=J.q(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.q(j,"iconKey")
b0=C.hlt(J.k(b0==null?"help":b0))
b1=typeof J.q(j,"colorValue")=="number"?B.k.N(A.f4(J.q(j,"colorValue"))):4284773515
J.cb(m,new C.hX(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.aa(a3)!==0)===!0?o:null
u=new A.IN([m,null,p,a3])
w=1
break}catch(b7){a2=A.a6(b7)
a3=A.t(a2)
a4=A.a([],x.Y)
u=new A.IN([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c4Y,v)},
hlt(d){switch(d){case"investments":return F.AE
case"games":return B.oi
case"loans":return B.jK
case"withdrawals":return B.hs
case"deposits":return B.kG
case"civic":return B.kH
case"store":return B.kF
case"jobs":return B.qz
case"refunds":return B.m7
case"account":return B.eN
case"music":return B.lw
default:return B.x7}},
hLu(d,e,f){var w,v,u,t=A.bj(d,!0,x.i)
if(f!=null&&J.aa(e)===1){w=B.d.bi(t,new C.fkk(f))
if(w>=0){t[w]=J.fj(e).cA2(f,t[w].f)
return t}}B.d.v(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].b6S(u)
return t},
c4X:function c4X(){},
fkk:function fkk(d){this.a=d},
cXp:function cXp(d){this.a=d},
Tz:function Tz(d,e,f){this.c=d
this.d=e
this.a=f},
aAS:function aAS(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
dSI:function dSI(){},
dSo:function dSo(d,e){this.a=d
this.b=e},
dSt:function dSt(d,e){this.a=d
this.b=e},
dSr:function dSr(d,e){this.a=d
this.b=e},
dSp:function dSp(d){this.a=d},
dSq:function dSq(d){this.a=d},
dSs:function dSs(d,e,f){this.a=d
this.b=e
this.c=f},
dSk:function dSk(){},
dSl:function dSl(){},
dSm:function dSm(){},
dSn:function dSn(){},
dSy:function dSy(d,e){this.a=d
this.b=e},
dSz:function dSz(d){this.a=d},
dSA:function dSA(d){this.a=d},
dSB:function dSB(d){this.a=d},
dSC:function dSC(d){this.a=d},
dSD:function dSD(d){this.a=d},
dSE:function dSE(){},
dSF:function dSF(d){this.a=d},
dSx:function dSx(d){this.a=d},
dSG:function dSG(d){this.a=d},
dSw:function dSw(d){this.a=d},
dSH:function dSH(d,e){this.a=d
this.b=e},
dSv:function dSv(d,e){this.a=d
this.b=e},
dSu:function dSu(d,e){this.a=d
this.b=e},
htf(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.a([],x.eO)
for(w=A.ae("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kw(0,d),w=new A.Ih(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=B.a.an(d,t,q)
o=u?B.cm:B.aI
m.push(new A.en(p,n,n,B.cS,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?B.cm:B.aI
m.push(new A.en(p,n,n,B.cS,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,B.I,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?B.cm:B.aI
m.push(new A.en(p,n,n,B.cS,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,B.cA,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?B.cm:B.aI
m.push(new A.en(p,n,n,B.cS,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,B.mk,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=B.a.aY(d,t)
m.push(A.dl(n,n,n,n,n,n,n,n,n,A.l(n,n,u?B.cm:B.aI,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return A.rZ(n,n,n,B.ey,n,n,!0,n,A.dl(m,n,n,n,n,n,n,n,n,n,n),B.a5,n,n,B.dd,B.cg)},
d9u:function d9u(d){this.a=d},
ayr:function ayr(d,e){this.a=d
this.b=e},
any:function any(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAR:function aAR(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
dSh:function dSh(d,e){this.a=d
this.b=e},
dSi:function dSi(d,e){this.a=d
this.b=e},
dS9:function dS9(d){this.a=d},
dSa:function dSa(d){this.a=d},
dSj:function dSj(){},
dSc:function dSc(d,e){this.a=d
this.b=e},
dSb:function dSb(d,e){this.a=d
this.b=e},
dSe:function dSe(){},
dSg:function dSg(){},
dSf:function dSf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSd:function dSd(d,e){this.a=d
this.b=e},
ayp:function ayp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a9H:function a9H(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aXn:function aXn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c4Z:function c4Z(d){this.a=d},
a9z:function a9z(d,e,f){this.c=d
this.d=e
this.a=f},
czE:function czE(d){this.a=d},
czF:function czF(){},
czG:function czG(d){this.a=d},
ayq:function ayq(d,e,f){this.c=d
this.d=e
this.a=f},
bdr:function bdr(){this.c=this.a=this.d=null},
d9v:function d9v(d,e){this.a=d
this.b=e},
d9x:function d9x(d,e){this.a=d
this.b=e},
d9w:function d9w(d){this.a=d},
hn_(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
hn0(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
hmZ(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
h_B(d){var w
if(new A.a3(A.a(d.split("\n"),x.s),new C.f3c(),x.cc).gJ(0)<3)w=d.length>100&&B.a.t(d,"\n")
else w=!0
return w},
hMC(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.hmZ(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
aok:function aok(d,e){this.a=d
this.b=e},
Hj:function Hj(d,e){this.a=d
this.b=e},
qU:function qU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3c:function f3c(){},
anB:function anB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAT:function aAT(d,e,f,g,h,i,j){var _=this
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
dSW:function dSW(d,e){this.a=d
this.b=e},
dSN:function dSN(d){this.a=d},
dSP:function dSP(){},
dSQ:function dSQ(d,e){this.a=d
this.b=e},
dSR:function dSR(d){this.a=d},
dSS:function dSS(){},
dST:function dST(d,e){this.a=d
this.b=e},
dSU:function dSU(d){this.a=d},
dSV:function dSV(d){this.a=d},
dSO:function dSO(d,e){this.a=d
this.b=e},
dT2:function dT2(d,e){this.a=d
this.b=e},
dT_:function dT_(){},
dT0:function dT0(d,e){this.a=d
this.b=e},
dT1:function dT1(d,e){this.a=d
this.b=e},
dSZ:function dSZ(d,e){this.a=d
this.b=e},
dSY:function dSY(d,e){this.a=d
this.b=e},
dT4:function dT4(d){this.a=d},
dT3:function dT3(d){this.a=d},
dSM:function dSM(d,e){this.a=d
this.b=e},
dSL:function dSL(d,e){this.a=d
this.b=e},
dT5:function dT5(d,e){this.a=d
this.b=e},
dSX:function dSX(d,e){this.a=d
this.b=e},
dSJ:function dSJ(d){this.a=d},
dSK:function dSK(d){this.a=d},
aIS:function aIS(){},
c59(d){var w=0,v=A.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$c59=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=D.Pq
w=1
break}w=3
return A.b(A.ax(),$async$c59)
case 3:r=f
q=B.a.i(d.toLowerCase())
t=A.aS(J.q(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.Pq
w=1
break}try{q=A.a_(x.f.a(B.R.aF(0,t,null)),x.N,x.z)
p=J.y(q.h(0,"contacts"),!0)
o=J.y(q.h(0,"calendar"),!0)
n=J.y(q.h(0,"calls"),!0)
q=J.y(q.h(0,"allGrantedOnce"),!0)
u=new C.TA(p,o,n,q)
w=1
break}catch(l){s=A.a6(l)
$.al.$1("[helper-perms] load: "+A.t(s))
u=D.Pq
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c59,v)},
anC(d,e){var w=0,v=A.j(x.H),u
var $async$anC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){w=1
break}w=4
return A.b(A.ax(),$async$anC)
case 4:w=3
return A.b(g.aq("String","ngmy_helper_permissions_v1_"+B.a.i(d.toLowerCase()),B.R.am(e.ac(),null)),$async$anC)
case 3:case 1:return A.h(u,v)}})
return A.i($async$anC,v)},
c58(d){var w=0,v=A.j(x.gp),u,t
var $async$c58=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=new C.TA(!0,!0,!0,!0)
w=3
return A.b(C.anC(d,t),$async$c58)
case 3:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c58,v)},
h5j(d){var w=B.a.i(d.toLowerCase()),v=A.ae("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=A.ae("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=A.ae("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=A.ae("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
h5h(d){var w=A.ae("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
TA:function TA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bzX(d,e,f,g,h){var w=0,v=A.j(x.H),u,t,s
var $async$bzX=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return A.b(C.aXj(h),$async$bzX)
case 3:if(j){w=1
break}w=4
return A.b(C.anu(h),$async$bzX)
case 4:if(d.e==null){w=1
break}t=A.q2(d,!0)
t.toString
s=A.dd()
s.b=A.nW(new C.fwc(g,e,f,s),!1,!1)
t.lm(0,s.b9())
case 1:return A.h(u,v)}})
return A.i($async$bzX,v)},
fwc:function fwc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fwb:function fwb(d){this.a=d},
XL:function XL(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
axT:function axT(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cP$=d
_.b0$=e
_.c=_.a=null},
d74:function d74(d){this.a=d},
d75:function d75(d,e,f){this.a=d
this.b=e
this.c=f},
d7a:function d7a(){},
d79:function d79(d){this.a=d},
d76:function d76(d){this.a=d},
d77:function d77(){},
d78:function d78(d){this.a=d},
aHL:function aHL(){},
hms(d){var w=B.a.i(d),v=A.ae("[^A-Z0-9]",!0,!1,!1,!1),u=A.aJ(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
hmr(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.ae("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.ae("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
ao6(d){return C.hmp(d)},
hmp(d){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$ao6=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.eW("ngmy_local_deposit_qr_v1_"+B.a.i(d),null,!1,B.bE),$async$ao6)
case 7:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a6(o)
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
return A.i($async$ao6,v)},
aYd(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aYd=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.hms(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.eW("ngmy_local_deposit_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bE),$async$aYd)
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
q=A.a6(m)
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
return A.i($async$aYd,v)},
fSX(d){var w,v=B.a.i(d)
if(B.a.a_(v,"NGMYLOCALDEP1|")){w=B.a.i(B.a.aY(v,14))
return w.length===0?null:w}return null},
hmq(d,e,f){var w=B.a.i(f)
if(w.length===0)return!1
return B.d.ba(e,new C.c6X(B.a.i(d.toLowerCase()),w))},
fSY(d,e,f,g,h){var w,v,u=J.a8(g),t=u.h(g,"lockedToEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=B.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.po(!1,0,y.u)
if(s!==B.a.i(f.toLowerCase()))return new C.po(!1,0,y.j)
v=B.a.i(h)
if(v.length===0)return new C.po(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.po(!1,0,"Verification code does not match this deposit.")
if(!C.hmq(e,d,w))return new C.po(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
fCU(d,e){var w,v,u="amount",t=J.a8(d),s=t.h(d,"redeemedBy")
if(B.a.i(J.k(s==null?"":s)).length!==0)return D.dkQ
s=t.h(d,"lockedToEmail")
w=B.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=B.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){A.aM(t.h(d,u))
return new C.Mc(!0,!1,!1,!0)}if(w!==B.a.i(e.toLowerCase())){A.aM(t.h(d,u))
return new C.Mc(!0,!1,!0,!1)}A.aM(t.h(d,u))
return new C.Mc(!0,!1,!1,!1)},
c72(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$c72=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=C.fSX(d)
if(s==null){u=D.Ps
w=1
break}w=3
return A.b(C.ao6(s),$async$c72)
case 3:t=g
if(t==null){u=D.Ps
w=1
break}u=C.fCU(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c72,v)},
aYf(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$aYf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aYd(d),$async$aYf)
case 3:s=g
if(s==null||s.length===0){u=D.Ps
w=1
break}w=4
return A.b(C.ao6(s),$async$aYf)
case 4:t=g
if(t==null){u=D.Ps
w=1
break}u=C.fCU(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYf,v)},
c73(d,e,f,g,h){var w=0,v=A.j(x.D),u,t
var $async$c73=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aYd(d),$async$c73)
case 3:t=j
if(t==null||t.length===0){u=new C.po(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.TV(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c73,v)},
TV(d,e,f,g,h){return C.hmt(d,e,f,g,h)},
hmt(a2,a3,a4,a5,a6){var w=0,v=A.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$TV=A.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.fSX(a4)
if(a0==null){u=new C.po(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return A.b(C.ao6(a0),$async$TV)
case 3:k=a8
if(k==null){u=new C.po(!1,0,y.m)
w=1
break}j=C.fCU(k,a5)
if(j.b){u=new C.po(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.po(!1,0,y.u)
w=1
break}if(j.c){u=new C.po(!1,0,y.j)
w=1
break}i=C.fSY(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=A.aM(J.q(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.po(!1,0,"Invalid deposit amount.")
w=1
break}r=new A.Q(Date.now(),0,!1).a5().ab()
q=B.a.i(a5.toLowerCase())
t=5
w=8
return A.b(A.eW("ngmy_local_deposit_qr_v1_"+B.a.i(a0),null,!1,B.bE),$async$TV)
case 8:p=a8
if(p==null){u=new C.po(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.q(p,"redeemedBy")
if(B.a.i(J.k(g==null?"":g)).length!==0){u=new C.po(!1,0,"This deposit code was already used.")
w=1
break}o=C.fSY(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=B.a.i(a0)
f=x.N
e=x.z
n=A.dS(p,f,e)
J.aE(n,"redeemedBy",q)
J.aE(n,"redeemedAt",r)
w=9
return A.b(A.hv("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,B.cD,null),$async$TV)
case 9:n=J.q(p,"shortCode")
m=B.a.i(J.k(n==null?"":n))
w=J.aa(m)!==0?10:11
break
case 10:w=12
return A.b(A.hv("ngmy_local_deposit_code_v1_"+B.a.i(m).toUpperCase(),A.E(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,B.cD,null),$async$TV)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=A.a6(a1)
$.al.$1("[local deposit qr] redeem: "+A.t(l))
u=new C.po(!1,0,"Could not apply deposit. Check connection and try again.")
w=1
break
w=7
break
case 4:w=2
break
case 7:u=new C.po(!0,h,null)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$TV,v)},
Mc:function Mc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
po:function po(d,e,f){this.a=d
this.b=e
this.c=f},
c6X:function c6X(d,e){this.a=d
this.b=e},
c7a(d,e){var w
A.fIP(d,e,!1)
A.qk(d.a,d.d,!0,!1)
w=B.a.i("")
if(w.length!==0)A.zT(!0,!1,d.d,w)},
a5K(d,e){if(d==null)return!1
return A.bw(d)===e.gcd()&&A.bE(d)===e.gcb()&&A.bO(d)===e.gcr()},
hmB(d){var w=A.dj(d)*60+A.fY(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
fT4(d){if(A.dj(d)>=12)return!1
if(A.md(d)===6||A.md(d)===7)return!1
return!0},
c7e(d){var w=d.c?d.bQ():d
return w.cY(A.bW(A.bw(w),A.bE(w),A.bO(w),12,0,0,0,0))},
fCY(d,e){var w,v,u,t=d.gBh()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a5K(d.fx,e)&&d.fy>0.0001)return B.k.E(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bQ()
if(!C.c7e(w))return 0
v=A.bW(e.gcd(),e.gcb(),e.gcr(),12,0,0,0,0)
if(!e.cY(v))return t
if(!e.c8(w))return 0
u=B.o.al(v.bv(w).a,1000)
if(u<=0)return t
return B.k.E(t*(B.o.E(B.o.al(e.bv(w).a,1000),0,u)/u),0,t)},
fCX(d,e){var w,v,u,t,s,r,q,p=new A.Q(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a5K(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bQ():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!B.d.ba(e,new C.c79(s))&&C.c7e(t)){r=d.gBh()
v=r>0
if(v){q=new A.d_(s,d.a,r,B.fw,B.f7,"Clock-in daily earnings (local)",null,null,B.ci,p)
C.c7a(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a5K(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a5K(o,p)&&!C.c7e(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
c79:function c79(d){this.a=d},
hB4(d){var w,v,u=d.k4,t=u==null?null:B.a.i(u)
if(t!=null&&t.length!==0)return t
w=B.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=B.a.i(d.a)
if(B.a.t(v,"@"))return B.d.gL(v.split("@"))
return"Member"},
hRG(d,e,f,g,h,i){return A.ho(d,new C.ao7(f,e,i,g,h,null),!0,null,x.H)},
fXh(d){var w,v,u=d.c?d.bQ():d,t=A.dj(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+A.bE(u)+"/"+A.bO(u)+"/"+A.bw(u)+" \xb7 "+w+":"+B.a.aU(B.o.u(A.fY(u)),2,"0")+" "+v},
h3d(d){var w=d.x
if(w===B.dr)return"Processing"
if(w===B.jU)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
hJ6(d){var w=d.f,v=B.a.i(w==null?"":w),u=v.toLowerCase()
if(B.a.t(u,"clock-in daily earnings")||B.a.t(u,"clock-in earnings"))return"Clock-in completed"
if(B.a.t(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===B.fn)return"Deposit"
if(w===B.eI)return"Withdrawal"
return v.length!==0?v:w.b},
hAK(d){var w=d.d,v=w===B.fn||w===B.nS||w===B.fw||w===B.jV,u=d.x
if(u===B.dr)return w===B.eI?-d.c:0
if(u!==B.ci)return 0
w=d.c
return v?w:-w},
hJF(d,e){var w,v,u,t,s,r,q=A.A(d,x.o)
B.d.b_(q,new C.fgj())
w=A.T(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,A.K)(q),++t,v=r){s=q[t]
r=v-C.hAK(s)
if(r<0)r=0
w.m(0,s.a,new A.bkI(v,r))}return w},
ao7:function ao7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBe:function aBe(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
e1w:function e1w(d){this.a=d},
e2c:function e2c(d){this.a=d},
e2d:function e2d(d){this.a=d},
e2e:function e2e(d){this.a=d},
e1V:function e1V(d,e){this.a=d
this.b=e},
e1W:function e1W(){},
e1X:function e1X(d){this.a=d},
e1Y:function e1Y(){},
e1Z:function e1Z(d){this.a=d},
e2_:function e2_(d,e,f){this.a=d
this.b=e
this.c=f},
e20:function e20(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1Q:function e1Q(d,e){this.a=d
this.b=e},
e1x:function e1x(d,e,f){this.a=d
this.b=e
this.c=f},
e1R:function e1R(){},
e1S:function e1S(){},
e1T:function e1T(d){this.a=d},
e1U:function e1U(){},
e1B:function e1B(d,e){this.a=d
this.b=e},
e1C:function e1C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1K:function e1K(){},
e1H:function e1H(d){this.a=d},
e1I:function e1I(d,e){this.a=d
this.b=e},
e1J:function e1J(d,e){this.a=d
this.b=e},
e1L:function e1L(d){this.a=d},
e1M:function e1M(d,e,f){this.a=d
this.b=e
this.c=f},
e1N:function e1N(d){this.a=d},
e1P:function e1P(d){this.a=d},
e1O:function e1O(d){this.a=d},
e1D:function e1D(d){this.a=d},
e1E:function e1E(d,e,f){this.a=d
this.b=e
this.c=f},
e24:function e24(){},
e25:function e25(){},
e29:function e29(d){this.a=d},
e22:function e22(d){this.a=d},
e2a:function e2a(d){this.a=d},
e21:function e21(d){this.a=d},
e2b:function e2b(d){this.a=d},
e26:function e26(d){this.a=d},
e27:function e27(d){this.a=d},
e28:function e28(d){this.a=d},
e23:function e23(d){this.a=d},
e1A:function e1A(d){this.a=d},
e1z:function e1z(d){this.a=d},
e1y:function e1y(d){this.a=d},
e1G:function e1G(d,e){this.a=d
this.b=e},
e1F:function e1F(d,e){this.a=d
this.b=e},
ayC:function ayC(d,e,f,g,h,i,j,k,l,m){var _=this
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
dbi:function dbi(){},
dbj:function dbj(){},
dbk:function dbk(d,e,f){this.a=d
this.b=e
this.c=f},
dbh:function dbh(d){this.a=d},
dbl:function dbl(d,e){this.a=d
this.b=e},
dbg:function dbg(d){this.a=d},
ayB:function ayB(d,e,f,g,h,i,j,k,l,m){var _=this
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
bea:function bea(d,e){var _=this
_.f=_.e=_.d=$
_.cP$=d
_.b0$=e
_.c=_.a=null},
dbb:function dbb(d){this.a=d},
dbc:function dbc(d){this.a=d},
dbd:function dbd(d){this.a=d},
dbe:function dbe(){},
dbf:function dbf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dba:function dba(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
db9:function db9(d){this.a=d},
b7W:function b7W(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
b7V:function b7V(d,e,f){this.b=d
this.d=e
this.a=f},
b7U:function b7U(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
ayD:function ayD(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
ayE:function ayE(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
dbC:function dbC(){},
dbD:function dbD(){},
dbE:function dbE(){},
dbo:function dbo(d){this.a=d},
dbn:function dbn(d,e){this.a=d
this.b=e},
dbm:function dbm(d,e){this.a=d
this.b=e},
dbz:function dbz(d,e){this.a=d
this.b=e},
dbB:function dbB(d,e){this.a=d
this.b=e},
dbA:function dbA(d,e){this.a=d
this.b=e},
dby:function dby(){},
dbx:function dbx(d){this.a=d},
dbw:function dbw(){},
dbr:function dbr(d){this.a=d},
dbs:function dbs(){},
dbt:function dbt(d){this.a=d},
dbu:function dbu(d){this.a=d},
dbq:function dbq(){},
dbv:function dbv(d){this.a=d},
dbp:function dbp(d){this.a=d},
b7m:function b7m(d){this.a=d},
fgj:function fgj(){},
brF:function brF(d,e){this.b=d
this.a=e},
aI0:function aI0(){},
btB:function btB(){},
hFK(d,e,f,g,h,i,j,k){var w,v=B.a.i(j.toLowerCase())
B.d.bm(d,new C.faW(v,g))
w=A.T(x.N,x.z)
w.m(0,"id",B.o.u(1000*Date.now()))
w.m(0,"fromEmail",B.a.i(e.toLowerCase()))
w.m(0,"fromName",f)
w.m(0,"toEmail",v)
if(k!=null&&B.a.i(k).length!==0)w.m(0,"toName",B.a.i(k))
w.m(0,"gameId",g)
w.m(0,"gameTitle",h)
w.m(0,"status","pending")
w.m(0,"createdAt",new A.Q(Date.now(),0,!1).ab())
w.m(0,"matchesTotal",i)
w.m(0,"matchesPlayed",0)
w.m(0,"seriesStatus","active")
B.d.K(d,w)},
aM0(d){var w,v=J.a8(d),u=A.aM(v.h(d,"matchesTotal")),t=u==null?null:B.k.N(u)
if(t==null)t=1
v=A.aM(v.h(d,"matchesPlayed"))
w=v==null?null:B.k.N(v)
return B.o.E(t-(w==null?0:w),0,t)},
hQs(d,e){var w=A.U(e).k("a3<1>")
w=A.A(new A.a3(e,new C.fqH(B.a.i(d.toLowerCase())),w),w.k("G.E"))
return w},
af_(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
if(C.aM0(u)<=0){t=J.cB(u)
t.m(u,"status","finished")
t.m(u,"seriesStatus","complete")}}},
hIl(d,e){var w,v,u,t=J.a8(d),s=t.h(d,"status")
if(!J.y(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.y(s==null?"":s,"complete"))return!1
if(C.aM0(d)<=0)return!1
w=B.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=B.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=B.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aM0(d)>0},
hIk(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a8(d),h=A.aM(i.h(d,"matchesTotal")),g=h==null?null:B.k.N(h)
if(g==null)g=1
h=A.aM(i.h(d,"matchesPlayed"))
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
hFJ(d,e){var w
C.af_(e)
w=A.U(e).k("a3<1>")
w=A.A(new A.a3(e,new C.faV(B.a.i(d.toLowerCase())),w),w.k("G.E"))
return w},
tq(d,e){var w,v,u
for(w=J.aU(d);w.C();){v=w.gT(w)
u=J.q(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
hCl(d,e,f){var w,v,u,t="fromName",s=J.a8(f),r=s.h(f,"fromEmail"),q=B.a.i(J.k(r==null?"":r).toLowerCase())
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
fIx(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase()),r=J.a8(d),q=r.h(d,"fromEmail"),p=B.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=B.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.hCl(x.f.b(u)?A.a_(u,r,q):A.T(r,q),v,d)
if((t.length===0||B.a.t(t,"@"))&&f!=null){t=J.q(f,v)
if(t==null)t=""}if(t.length===0||B.a.t(t,"@"))return"Opponent"
return t},
byM(){var w=0,v=A.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$byM=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ax(),$async$byM)
case 7:r=e
q=A.aS(J.q(r.a,"all_users"))
if(q==null||q.length===0){k=x.N
u=A.T(k,k)
w=1
break}p=B.R.aF(0,q,null)
if(!x.j.b(p)){k=x.N
u=A.T(k,k)
w=1
break}k=x.N
o=A.T(k,k)
for(k=J.aU(p),j=x.f;k.C();){n=k.gT(k)
if(!j.b(n))continue
i=J.q(n,"email")
m=B.a.i(J.k(i==null?"":i).toLowerCase())
i=J.q(n,"username")
l=B.a.i(J.k(i==null?"":i))
if(J.aa(m)!==0&&J.aa(l)!==0)J.aE(o,m,l)}u=o
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
return A.i($async$byM,v)},
bxS(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bxS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return A.b(C.byM(),$async$bxS)
case 3:u=t.fIx(s,r,g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bxS,v)},
Ju(d,e,f){var w=0,v=A.j(x.h),u,t,s,r,q,p
var $async$Ju=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(d)
p=$.h0P.h(0,q)
if(p!=null){t=new A.Q(Date.now(),0,!1).bv(p)
t=t.a>A.dB(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.h0P.m(0,q,new A.Q(Date.now(),0,!1))
w=5
return A.b(A.P9(B.c6,q),$async$Ju)
case 5:case 4:s=$.h0O.h(0,q)
if(s==null){u=C.tq(e,q)
w=1
break}r=C.tq(A.bxY(e,A.a([s],x._)),q)
if(r!=null)A.fKQ(e,r)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ju,v)},
hQD(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"status",f)
t.m(u,"respondedAt",new A.Q(Date.now(),0,!1).ab())
return}}},
hz6(d,e){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
p=q.h(d,"fromEmail")
w=B.a.i(J.k(p==null?"":p).toLowerCase())
p=q.h(d,"toEmail")
v=B.a.i(J.k(p==null?"":p).toLowerCase())
q=q.h(d,"fromName")
u=J.k(q==null?w:q)
switch(o){case"tic_tac_go":q=x.N
return A.E(["ttt",A.bZ(9,"",!1,q),"turnEmail",w,"playerXEmail",w,"playerXName",u,"playerOEmail",v,"playerOName",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],q,x.z)
case"connect_four_pro":t=J.e_(6,x.L)
for(q=x.S,s=0;s<6;++s)t[s]=A.bZ(7,0,!1,q)
return A.E(["c4",t,"c4Turn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
case"checkers_deluxe":t=J.e_(8,x.L)
for(q=x.S,r=0;r<8;++r)t[r]=A.il(8,new C.f0M(r),!0,q)
return A.E(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return A.E(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
hFI(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"status","active")
t.m(u,"respondedAt",new A.Q(Date.now(),0,!1).ab())
r=C.hz6(u,f)
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
if(w)r.m(0,l,o)
s=n.length!==0
if(s)r.m(0,k,n)
m=A.T(x.N,x.z)
if(w)m.m(0,o,!1)
if(s)m.m(0,n,!1)
r.m(0,"inGame",m)
t.m(u,"sessionState",r)
t.m(u,"sessionUpdatedAt",new A.Q(Date.now(),0,!1).ab())
return}}},
hQB(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)!==e)continue
w=A.aM(t.h(u,i))
w=w==null?null:B.k.N(w)
r=(w==null?0:w)+1
t.m(u,i,r)
w=A.aM(t.h(u,"matchesTotal"))
q=w==null?null:B.k.N(w)
if(r>=(q==null?1:q)){t.m(u,"status","finished")
t.m(u,"seriesStatus","complete")}else{p=t.h(u,h)
if(x.f.b(p)){w=x.N
s=x.z
o=A.a_(p,w,s)
o.m(0,"gameOver",!1)
o.W(0,"startAt")
n=o.h(0,"player1Email")
if(n==null)n=o.h(0,"playerXEmail")
m=B.a.i(J.k(n==null?"":n).toLowerCase())
n=o.h(0,"player2Email")
if(n==null)n=o.h(0,"playerOEmail")
l=B.a.i(J.k(n==null?"":n).toLowerCase())
k=A.T(w,s)
if(m.length!==0)k.m(0,m,!1)
if(l.length!==0)k.m(0,l,!1)
o.m(0,"inGame",k)
w=t.h(u,"gameId")
j=J.k(w==null?"":w)
if(j==="memory"){o.m(0,"memoryMatched",A.a([],x.t))
o.W(0,"memorySeed")}else if(j==="pattern")o.W(0,"patternSeed")
t.m(u,h,o)}}t.m(u,"sessionUpdatedAt",new A.Q(Date.now(),0,!1).ab())
return}},
fKP(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"sessionState",A.a_(f,x.N,x.z))
t.m(u,"sessionUpdatedAt",new A.Q(Date.now(),0,!1).ab())
return}}},
fpv(d){var w=0,v=A.j(x.gw),u,t,s,r,q
var $async$fpv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.af_(d)
t=$.fHX
if(t==null)s=$.fHX=A.P9(B.c6,null).f4(new C.fpw())
else s=t
w=3
return A.b(s,$async$fpv)
case 3:r=f
if(r==null){u=A.bj(new A.J(d,new C.fpx(),A.U(d).k("J<1,@>")),!0,x.P)
w=1
break}q=A.bxY(d,r)
B.d.a7(d)
B.d.v(d,q)
u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fpv,v)},
af0(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$af0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.af_(d)
t=A.U(d).k("J<1,a1<n,@>>")
t=A.A(new A.J(d,new C.fnq(),t),t.k("ai.E"))
w=3
return A.b(A.P9(t,null),$async$af0)
case 3:s=f
if(s==null){u=!1
w=1
break}r=A.bxY(d,s)
B.d.a7(d)
B.d.v(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$af0,v)},
aMU(d,e,f){var w=0,v=A.j(x.y),u,t,s,r
var $async$aMU=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:C.fKP(d,e,f)
t=C.tq(d,e)
if(t==null){u=!1
w=1
break}w=3
return A.b(A.P9(A.a([A.a_(t,x.N,x.z)],x._),e),$async$aMU)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.tq(s,e)
if(r!=null)A.fKQ(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aMU,v)},
hNk(d,e,f){var w
C.fKP(d,e,f)
w=$.fHL.h(0,e)
if(w!=null)w.a9(0)
$.fHL.m(0,e,A.cP(B.lr,new C.fnr(e,d)))},
fCG(d,e){return new C.aX0(!0,d,"NGMY",B.a.i(e.toLowerCase()),null,!0)},
faW:function faW(d,e){this.a=d
this.b=e},
fqH:function fqH(d){this.a=d},
faV:function faV(d){this.a=d},
f0M:function f0M(d){this.a=d},
fpw:function fpw(){},
fpx:function fpx(){},
fnq:function fnq(){},
fnr:function fnr(d,e){this.a=d
this.b=e},
aX0:function aX0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
hR4(d,e,f){return A.c1(B.K,null,new C.frE(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
frE:function frE(d,e){this.a=d
this.b=e},
Yy:function Yy(d,e,f){this.c=d
this.d=e
this.a=f},
aB1:function aB1(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
dX0:function dX0(d){this.a=d},
dX3:function dX3(d){this.a=d},
dX4:function dX4(d){this.a=d},
dX2:function dX2(d){this.a=d},
dX5:function dX5(d){this.a=d},
dX6:function dX6(d,e){this.a=d
this.b=e},
dX1:function dX1(d,e){this.a=d
this.b=e},
hLS(d){var w,v,u,t=B.a.i(d)
if(t.length===0)return B.i7
w=t.toLowerCase()
v=A.ae("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return B.i7
v=Date.now()
u=C.hBG(w,new A.Q(v,0,!1))
v=x.N
return A.a([new A.kd("calendar",A.E(["title",C.hBF(t,w),"start",u.ab(),"end",u.bN(36e8).ab(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
hBF(d,e){var w,v,u,t,s,r=A.ae("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cz(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return B.a.i(w==null?"":w)}u=A.ae("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cz(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.h1A(B.a.i(t))}s=A.ae("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cz(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.h1A(B.a.i(t))}if(B.a.t(e,"meeting"))return"Meeting"
if(B.a.t(e,"appointment"))return"Appointment"
return"NGMY Event"},
h1A(d){var w
if(d.length===0)return d
w=B.a.fo(d,A.ae("\\s+",!0,!1,!1,!1))
return new A.J(w,new C.fa6(),A.U(w).k("J<1,n>")).aH(0," ")},
hBG(d,e){var w,v,u,t,s,r,q,p,o=A.bW(A.bw(e),A.bE(e),A.bO(e),0,0,0,0,0)
if(B.a.t(d,"tomorrow"))o=o.bN(864e8)
else if(!B.a.t(d,"today"))for(w=D.az4.gdH(D.az4),w=w.gah(w);w.C();){v=w.gT(w)
u=v.a
if(A.dp(d,u,0)){t=C.hAJ(o,v.b)
o=t
break}}s=A.ae("\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cz(d)
if(s!=null){w=s.b
v=w[1]
r=A.c5(v==null?"":v,null)
if(r==null)r=9
v=w[2]
q=A.c5(v==null?"":v,null)
if(q==null)q=0
w=w[3]
p=w==null?null:w.toLowerCase()
if(p==="pm"&&r<12)r+=12
if(p==="am"&&r===12)r=0
if(p==null&&r>=1&&r<=7)r+=12}else{r=9
q=0}return A.bW(A.bw(o),A.bE(o),A.bO(o),r,q,0,0,0)},
hAJ(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(A.md(w)===e){u=!0
if(v<=0){t=d.bN(36e8)
s=w.a
if(s>=t.gbo())u=s===t.gbo()&&w.b<t.gcA()}}else u=!1
if(u)return w
w=w.bN(r)}return d.bN(r)},
fa6:function fa6(){},
hLT(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=B.a.i(d)
if(j.length===0)return B.i7
w=j.toLowerCase()
if(B.a.t(w,k))v=k
else v=B.a.t(w,"imessage")||B.a.t(w,"i message")?"sms":l
u=A.ae("(?:saying|say|message|text|tell(?:ing)?)\\s+(.+)$",!1,!1,!1,!1).cz(j)
if(u!=null){t=u.b[1]
s=t==null?l:B.a.i(t)
if(s==null)s=""
t=A.ae("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
s=B.a.i(A.aJ(s,t,""))
t=s.length
r=t>=2&&t<500?s:l}else r=l
q=C.hxX(w,j)
if(q==null||q.length===0)return B.i7
t=A.ae("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=A.ae("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return A.a([new A.kd("call",A.E(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=A.E(["name",q],t,t)
if(r!=null)m.m(0,"body",r)
return A.a([new A.kd(n,m)],x.Z)}if(p){t=x.N
return A.a([new A.kd("call",A.E(["name",q],t,t))],x.Z)}return B.i7},
hxX(d,e){var w,v,u,t,s,r,q=[A.ae("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),A.ae("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),A.ae("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
for(w=0;w<3;++w){v=q[w].cz(d)
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
if(u)return C.hF2(t)}r=A.ae("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cz(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return B.a.i(u==null?"":u)}return null},
hF2(d){var w=B.a.fo(d,A.ae("\\s+",!0,!1,!1,!1))
return new A.J(w,new C.fa5(),A.U(w).k("J<1,n>")).aH(0," ")},
fa5:function fa5(){},
h5q(d){var w=new A.J(d,new C.fpN(),A.U(d).k("J<1,a1<n,@>>")).bZ(0,new C.fpO())
w=A.A(w,w.$ti.k("G.E"))
return w},
fpN:function fpN(){},
fpO:function fpO(){},
hLW(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return B.i7
w=B.a.i(d)
if(w.length===0)return B.i7
v=w.toLowerCase()
if(!(B.a.t(v,"send email")||B.a.t(v,"send an email")||B.a.t(v,"send a message to")||B.a.t(v,"email ")||B.a.t(v,"write an email")||B.a.t(v,"write email")))return B.i7
u=A.ae("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cz(w)
if(u==null)return B.i7
t=u.b[0]
t.toString
s=B.a.i(t)
r=A.ae("(?:subject|title)\\s*[:\\-]\\s*(.+)$",!1,!1,!1,!1).cz(w)
if(r!=null){t=r.b[1]
t.toString
q=B.a.i(t)}else q="Message from NGMY"
p=A.ae("(?:saying|that says|with message|message:|body:|write:|text:)\\s*(.+)$",!1,!1,!1,!1).cz(w)
if(p!=null){t=p.b[1]
t.toString
o=B.a.i(t)}else o=""
t=x.N
t=A.T(t,t)
t.m(0,"to",s)
t.m(0,"subject",q)
if(o.length!==0)t.m(0,"body",o)
return A.a([new A.kd("send_email",t)],x.Z)},
hL4(d,e){var w
if(e)return d
w=J.dE(d,new C.fjI())
w=A.A(w,w.$ti.k("G.E"))
return w},
fjI:function fjI(){},
hNh(d){switch(d){case"blackjack_vegas":return D.doQ
case"roulette_euro":return D.doA
case"slots_jackpot":return D.doH
case"poker_texas":return D.doK
case"chess_royale":return D.doB
case"connect_four_pro":return D.doC
case"domino_block":return D.doE
case"plinko_prizes":return D.doM
case"spin_wheel":return D.doJ
case"baccarat_punto":return D.doD
case"craps_table":return D.doL
case"casino_war":return D.doF
case"bingo_live":return D.doI
case"solitaire_klondike":return D.doP
case"backgammon_pro":return D.doz
case"billiards_snooker":return D.doN
case"profit_solve":return D.doO
default:return D.doG}},
fnh(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=A.m(8)
v=A.H(B.aK,B.r,1.5)
u=A.a([new A.ab(0,B.G,B.w.j(0.35),B.ea,6)],x.V)
return A.p(p,A.au(A.W(B.m3,B.c.j(0.5),p,p,p,23.400000000000002),p,p,p),B.f,p,p,new A.o(p,p,v,w,u,D.bIQ,B.n),p,74,p,p,p,p,p,52)}t=B.o.E(d,1,13)
s=t===1||t>=10||B.o.F(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][B.o.F(t,4)]
q=s?B.bM:B.M
w=A.m(8)
v=A.H(B.aJ,B.r,1)
u=A.a([new A.ab(0,B.G,B.w.j(0.28),B.ea,6)],x.V)
return A.p(p,A.v(A.a([new A.C(D.blM,A.d(D.cfB[t-1]+"\n"+r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,B.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),B.b8,A.au(A.d(r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),B.b8],x.p),B.F,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(B.hP,p,v,w,u,p,B.n),p,74,p,p,p,p,p,52)},
hOl(d,e){var w,v=null,u=A.m(18),t=A.H(B.aK,B.r,3),s=A.a([new A.ab(0,B.G,B.aB.j(0.5),B.J,20)],x.V),r=A.U(e).k("J<1,hc>")
r=A.A(new A.J(e,new C.fpe(),r),r.k("ai.E"))
w=x.p
return A.v(A.a([A.p(v,A.v(A.a([D.eUv,B.ab,A.B(r,B.m,v,B.b7,B.j,0,v,v)],w),B.m,v,B.e,B.j,0,B.p),B.f,v,v,new A.o(v,v,t,u,s,D.bJb,B.n),v,v,v,v,I.adv,v,v,v),B.ay,A.dq(B.aj9,D.eV3,d,A.bk(B.aK,v,v,v,B.dt,v,Ag.W7,v,v,v,v,v))],w),B.m,v,B.e,B.j,0,B.p)},
oB:function oB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bmI:function bmI(d,e){this.b=d
this.a=e},
fpe:function fpe(){},
hnb(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e_(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=A.bZ(8,0,!1,w)
u=A.bZ(9,"",!1,p)
t=x.t
s=A.a([],t)
r=A.a([],t)
t=A.a([0,0,0],t)
q=J.e_(6,o)
for(v=0;v<6;++v)q[v]=A.bZ(7,0,!1,w)
return new C.aot(A.T(p,x.z),n,u,s,r,t,q,new A.ar(B.as,$.av()))},
hGo(d,e,f,g,h){var w=new C.fbq(f,h)
switch(d){case"checkers_deluxe":return C.hwG(h,g,e,w)
case"tic_tac_go":return C.hFd(h,g,e,w)
case"blackjack_vegas":return C.hw1(h,g,e,new C.fbk(w))
case"roulette_euro":return C.hDz(h,g,e,new C.fbl(w))
case"slots_jackpot":return C.hEn(h,g,e,new C.fbm(w))
case"billiards_snooker":return C.hCn(h,g,e,new C.fbn(w))
case"connect_four_pro":return C.hx5(h,g,e,w)
case"profit_solve":return C.hCq(h,g,e,new C.fbo(w))
default:return C.hwD(d,h,g,e,new C.fbp(w))}},
hwG(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vr,B.L,w,w),u=A.m(12),t=A.H(D.Ug,B.r,8),s=A.a([new A.ab(0,B.G,B.w.j(0.4),B.J,16)],x.V)
return A.v(A.a([new A.C(B.fk,v,w),A.D(A.au(new A.fC(1,A.p(w,A.bt(A.m(6),A.i8(!0,w,w,B.z,D.evH,new C.eZ8(d,e,f,g),64,w,B.dM,B.ak,!1),B.ap),B.f,w,w,new A.o(w,w,t,u,s,w,B.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hFd(d,e,f,g){var w=null
return A.v(A.a([new A.C(B.fk,A.d(d.c,w,w,w,w,w,w,D.vr,B.L,w,w),w),A.D(A.au(new A.fC(1,A.ck(new C.fag(d,e,f,g)),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hw1(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.vr,B.L,v,v),t=x.p,s=A.a([],t),r=d.CW,q=d.ch
if(r)B.d.v(s,new A.J(q,new C.eYA(),A.U(q).k("J<1,r>")))
else B.d.v(s,A.a([C.fnh(q[0],!1),B.bq,C.fnh(0,!0)],t))
s=A.B(s,B.m,v,B.b7,B.j,0,v,v)
r=A.d("Total: "+d.a17(d.ay),v,v,v,v,v,v,D.ePX,v,v,v)
q=d.ay
w=A.U(q).k("J<1,r>")
q=A.A(new A.J(q,new C.eYB(),w),w.k("ai.E"))
q=A.c9(B.fH,q,B.by,6,6)
return A.v(A.a([new A.C(B.fk,u,v),D.f_Q,B.ar,s,B.ay,D.f6E,r,B.ar,q,B.b8,A.B(A.a([A.D(A.bL(D.eVt,d.CW?v:new C.eYC(d,e,f,g),v),1),B.aa,A.D(A.bL(D.f8O,new C.eYD(d,e,f,g),v),1)],t),B.m,v,B.e,B.j,0,v,v)],t),B.m,v,B.e,B.j,0,B.p)},
hDz(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vr,B.L,w,w),u=d.cx,t=A.a([new A.ab(0,B.G,B.w.j(0.45),B.ct,16)],x.V)
t=A.a([new A.C(B.fk,v,w),A.p(w,A.b2(w,w,w,new C.bmI(u,w),B.at),B.f,w,w,new A.o(w,w,w,w,t,w,B.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new A.C(B.kz,A.d("Result: "+A.t(v),w,w,w,w,w,w,D.eEt,w,w,w),w))
t.push(B.ab)
t.push(A.c9(B.fH,A.il(6,new C.f7t(d,e,f,g),!0,x.l),B.by,6,6))
return A.v(t,B.m,w,B.e,B.j,0,B.p)},
hEn(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vr,B.L,w,w),u=d.db,t=A.U(u).k("J<1,n>")
u=A.A(new A.J(u,new C.f9n(),t),t.k("ai.E"))
return A.v(A.a([new A.C(B.fk,v,w),C.hOl(new C.f9o(d,e,f,g),u)],x.p),B.m,w,B.e,B.j,0,B.p)},
hCn(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vr,B.L,w,w),u=A.m(20),t=A.H(B.fh,B.r,12),s=x.V,r=A.a([new A.ab(0,B.G,B.w.j(0.45),B.dq,18)],s),q=x.p
return A.v(A.a([new A.C(B.fk,v,w),A.D(A.p(w,new A.am(B.W,w,B.a9,B.q,A.a([A.an(w,A.p(w,w,B.f,w,w,D.aSt,w,18,w,w,w,w,w,18),w,w,24,w,24,w),A.an(28,A.p(w,w,B.f,w,w,B.a7y,w,14,w,w,w,w,w,14),w,w,w,32,w,w),A.au(A.ev(B.A,d.dx,A.p(w,w,B.f,w,w,new A.o(B.aK,w,w,A.m(2),A.a([new A.ab(0,B.G,B.w.j(0.3),B.J,4)],s),w,B.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),B.f,w,w,new A.o(w,w,t,u,r,D.dWP,B.n),w,w,w,B.eV,w,w,w,w),1),A.lQ(B.bl,w,w,1,0,new C.f6d(d,f),d.dy),A.bL(D.eZZ,new C.f6e(d,e,g,f),w)],q),B.m,w,B.e,B.j,0,B.p)},
hx5(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.vr,B.L,v,v),t=x.l,s=J.e_(7,t)
for(w=0;w<7;++w)s[w]=new A.bG(1,B.bp,A.aG(v,A.v(A.il(6,new C.eZA(d,w),!0,t),B.m,v,B.mc,B.j,0,B.p),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eZB(d,w,e,f,g),v,v,v,v,v,v,!1,B.ad),v)
return A.v(A.a([new A.C(B.fk,u,v),A.D(A.au(new A.fC(1.1666666666666667,A.B(s,B.dG,v,B.e,B.j,0,v,v),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
hCq(d,e,f,g){var w=null
return A.v(A.a([new A.C(B.fk,A.d(d.c,w,w,w,w,w,w,D.vr,B.L,w,w),w),A.d(""+d.a+"/"+d.b,w,w,w,w,w,w,B.kk,w,w,w),A.d(d.fy,w,w,w,w,w,w,D.aLh,B.L,w,w),A.aK(w,B.U,!1,w,!0,B.q,w,A.aL(),d.id,w,w,w,w,w,2,D.bFE,B.z,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,B.dO,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.f6q(d,e,g,f),w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,B.dj,!0,B.a5,w,B.am,w,w,w,w),A.bL(D.eYF,new C.f6r(d,e,g,f),w)],x.p),B.m,w,B.e,B.j,0,B.p)},
hwD(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gjB(),k=e.d
k=k==null?n:k.c
w=C.hNh(d)
v=D.ayT.h(0,d)
if(v==null)v=d
m=A.d(m,n,n,n,n,n,n,B.n2,B.L,n,n)
u=A.m(22)
t=w.a
s=w.b
r=A.H(s.j(0.5),B.r,2)
q=A.a([new A.ab(0,B.G,w.c.j(0.35),B.eP,24)],x.V)
p=A.d(w.e,n,n,n,n,n,n,W.Rk,n,n,n)
o=A.d(v,n,n,n,n,n,n,B.oA,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+A.t(k)+" at the table"
k=x.p
q=A.D(A.au(A.p(n,A.v(A.a([p,B.T,o,B.P,A.d(l,n,n,n,n,n,n,A.l(n,n,B.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),B.L,n,n),B.d5,A.W(w.f,s.j(0.85),n,n,n,48)],k),B.m,n,B.b7,B.j,0,B.p),B.f,n,n,new A.o(n,n,r,u,q,new A.a5(B.b0,B.b3,B.x,t,n,n),B.n),n,n,n,B.eV,B.a8,n,n,1/0),n,n,n),1)
return A.v(A.a([m,B.ab,q,B.P,new A.a4(1/0,n,A.bL(D.f8_,new C.eZ2(f,e,g,h),A.bk(s,n,n,n,B.d.gL(t).j3()>0.4?B.w:B.c,n,B.cc,n,n,n,n,n)),n)],k),B.m,n,B.e,B.j,0,B.p)},
Dv:function Dv(d,e){this.a=d
this.b=e},
aot:function aot(d,e,f,g,h,i,j,k){var _=this
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
c8I:function c8I(){},
c8J:function c8J(){},
c8H:function c8H(){},
c8K:function c8K(){},
c8G:function c8G(){},
c8M:function c8M(){},
c8N:function c8N(){},
c8F:function c8F(d){this.a=d},
c8L:function c8L(){},
c8E:function c8E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fbq:function fbq(d,e){this.a=d
this.b=e},
fbk:function fbk(d){this.a=d},
fbl:function fbl(d){this.a=d},
fbm:function fbm(d){this.a=d},
fbn:function fbn(d){this.a=d},
fbo:function fbo(d){this.a=d},
fbp:function fbp(d){this.a=d},
eZ8:function eZ8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZ7:function eZ7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fag:function fag(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
faf:function faf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fae:function fae(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eYA:function eYA(){},
eYB:function eYB(){},
eYC:function eYC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eYD:function eYD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7t:function f7t(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7s:function f7s(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f9n:function f9n(){},
f9o:function f9o(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6d:function f6d(d,e){this.a=d
this.b=e},
f6e:function f6e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZB:function eZB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eZA:function eZA(d,e){this.a=d
this.b=e},
f6q:function f6q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6r:function f6r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZ2:function eZ2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hJ8(d){var w,v=A.U(d).k("a3<1>")
v=A.oL(new A.a3(d,new C.ffj(),v),120,v.k("G.E"))
w=A.cA(v,new C.ffk(),A.a2(v).k("G.E"),x.N).aH(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
ffj:function ffj(){},
ffk:function ffk(){},
afb(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
apm:function apm(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aBN:function aBN(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
erA:function erA(){},
aJy:function aJy(){},
hlb(){var w=$.H8
if(w<=0)return;--w
$.H8=w
if(w===0){w=$.fSo
if(w!=null)w.$0()}},
c4d(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
an8(d){var w=0,v=A.j(x.H),u,t
var $async$an8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.fCB.K(0,t)
w=4
return A.b(A.ax(),$async$an8)
case 4:w=3
return A.b(f.aq("Bool","ngmy_game_free_play_used_"+B.a.i(t.toLowerCase()),!0),$async$an8)
case 3:case 1:return A.h(u,v)}})
return A.i($async$an8,v)},
an7(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$an7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(C.c4d(d)){u=!0
w=1
break}t=B.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.fCB.t(0,t)){u=!1
w=1
break}w=3
return A.b(A.ax(),$async$an7)
case 3:s=f
r=B.a.i(t.toLowerCase())
r=A.k5(J.q(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$an7,v)},
Tx(){var w=0,v=A.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Tx=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ax(),$async$Tx)
case 7:r=e
q=A.aS(J.q(r.a,"ngmy_helper_ai_usage_v1"))
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
return A.i($async$Tx,v)},
aXi(d){return C.hlo(d)},
hlo(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aXi=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.ax(),$async$aXi)
case 6:s=f
w=7
return A.b(s.aq("String","ngmy_helper_ai_usage_v1",B.R.am(d,null)),$async$aXi)
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
return A.i($async$aXi,v)},
aXg(d,e){var w,v,u,t,s=J.q(d,B.a.i(e.toLowerCase()))
if(!x.f.b(s))return new A.abQ(0,new A.Q(Date.now(),0,!1))
w=J.a8(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=A.bh(u==null?"":u)
if(t==null)t=new A.Q(Date.now(),0,!1)
return new A.abQ(typeof v=="number"?B.o.E(B.k.N(v),0,999999):0,t)},
aXh(d,e){if(B.o.al(e.bv(d.b).a,36e8)>=24)return new A.abQ(0,e)
return d},
c4K(d,e){var w=0,v=A.j(x.S),u,t,s
var $async$c4K=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return A.b(C.Tx(),$async$c4K)
case 3:t=g
s=Date.now()
u=B.o.E(e-C.aXh(C.aXg(t,d),new A.Q(s,0,!1)).a,0,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c4K,v)},
c4L(d,e){var w=0,v=A.j(x.cJ),u,t,s,r
var $async$c4L=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return A.b(C.Tx(),$async$c4L)
case 3:t=g
s=Date.now()
r=C.aXh(C.aXg(t,d),new A.Q(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bN(864e8)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c4L,v)},
hlp(d){var w,v,u,t=d.a,s=B.o.al(t,1e6)
if(s<=0)return"0s"
w=B.o.al(t,36e8)
v=B.o.al(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+B.a.aU(B.o.u(v),2,"0")+"m "+B.a.aU(B.o.u(u),2,"0")+"s"
if(v>0)return""+v+"m "+B.a.aU(B.o.u(u),2,"0")+"s"
return""+u+"s"},
aXj(d){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aXj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return A.b(C.Tx(),$async$aXj)
case 3:t=p.aXh(o.aXg(f,d),new A.Q(Date.now(),0,!1))
w=4
return A.b(A.ax(),$async$aXj)
case 4:s=f
r=B.a.i(d.toLowerCase())
q=t.b.a5().ab()
u=A.k5(J.q(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aXj,v)},
anu(d){var w=0,v=A.j(x.H),u,t,s,r
var $async$anu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return A.b(C.Tx(),$async$anu)
case 3:t=s.aXh(r.aXg(f,d),new A.Q(Date.now(),0,!1))
w=5
return A.b(A.ax(),$async$anu)
case 5:w=4
return A.b(f.aq("Bool","ngmy_helper_3left_"+B.a.i(d.toLowerCase())+"_"+t.b.a5().ab(),!0),$async$anu)
case 4:case 1:return A.h(u,v)}})
return A.i($async$anu,v)},
anv(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$anv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=B.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return A.b(C.Tx(),$async$anv)
case 3:s=g
r=Date.now()
q=C.aXh(C.aXg(s,d),new A.Q(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aE(s,t,A.E(["count",r+1,"windowStart",q.b.a5().ab()],x.N,x.K))
w=4
return A.b(C.aXi(s),$async$anv)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anv,v)},
aeO(d,e,a0){var w=0,v=A.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aeO=A.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new A.f8("")
if(!d.d){p=!0
if(!C.h5i(a0))if(!C.h5h(a0)){p=A.ae("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.h5i(a0)?3:4
break
case 3:o=C.hMX(a0)
w=o!=null?5:6
break
case 5:w=7
return A.b(C.bYl(e,o),$async$aeO)
case 7:n=a2
p=J.a8(n)
if(p.gci(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.fQR(o)+":\n"
m.a+=l
for(p=p.gah(n);p.C();){m=p.gT(p)
l=h
k="- "+m.gTC()+"\n"
l.a+=k
m=m.f
if(m!=null&&B.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=A.ae("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return A.b(A.Qq("text/plain"),$async$aeO)
case 14:r=a2
p=r
if(p==null)p=null
else p=B.a.i(p.a)
q=p==null?"":p
if(J.aa(q)!==0){p=h
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
case 13:case 9:w=C.h5h(a0)?15:16
break
case 15:p=h
f=C
w=17
return A.b(C.a5o(e),$async$aeO)
case 17:m=f.fSv(a2)+"\n"
p.a+=m
case 16:p=A.ae("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return A.b(C.SA(e),$async$aeO)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cu(i)){p=h
m=C.fQS(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=B.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeO,v)},
hmJ(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.ae("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.ae("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
c7j(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$c7j=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=A.fT9(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.eW("ngmy_local_growth_income_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bE),$async$c7j)
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
q=A.a6(m)
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
return A.i($async$c7j,v)},
aoa(d){var w=0,v=A.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$aoa=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=B.a.i(d)
if(J.aa(k)===0){u=null
w=1
break}t=4
w=7
return A.b(A.eW("ngmy_local_growth_income_stash_v1_"+B.a.i(k),null,!1,B.bE),$async$aoa)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.q(r,"payload")
q=J.k(n==null?"":n)
if(J.aa(q)===0){u=null
w=1
break}n=J.q(r,"ownerEmail")
p=B.a.i(J.k(n==null?"":n))
n=B.c3.c6(0,B.cy.aG(q))
m=J.y(J.q(r,"live"),!0)
u=new A.aDa(m,p,n)
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=A.a6(j)
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
return A.i($async$aoa,v)},
aYm(d){var w=0,v=A.j(x.bY),u,t,s,r,q
var $async$aYm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
w=C.hmJ(q)?3:4
break
case 3:w=5
return A.b(C.c7j(q),$async$aYm)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.aoa(t)
w=1
break
case 4:if(B.a.a_(q,"NGMYLOCALSYNC1|")){u=C.aoa(B.a.i(B.a.aY(q,15)))
w=1
break}w=B.a.a_(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return A.b(C.aoa(B.a.i(B.a.aY(q,15))),$async$aYm)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new A.aDa(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYm,v)},
fTn(d){var w=d.bK
if(w>=0)return w
return 1},
aeZ(d,e,f){var w=0,v=A.j(x.H),u,t
var $async$aeZ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return A.b(A.aN5(d,e),$async$aeZ)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return A.b(A.Fs(d,null,null,!1,!0,""),$async$aeZ)
case 5:w=4
return A.b(t.$1(h),$async$aeZ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$aeZ,v)},
hLR(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=B.a.i(a2)
if(a1.length===0)return B.i7
w=a1.toLowerCase()
v=A.ae("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=A.ae("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cz(w)
if(!u&&t==null)return B.i7
s=new A.Q(Date.now(),0,!1)
r=A.dd()
q=A.dd()
p=C.hBE(w)
if(p!=null){v=p.a
r.b=s.bN(v)
q.b=C.h0s(a1,w)
if(J.y(q.b9(),"Wake up")&&B.o.al(v,e)<=180)q.b="Reminder \u2014 "+B.o.al(v,e)+" min"}else{if(t!=null){v=A.ae("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=B.a.e1(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.h0t(v[2],v[4],v[3])
o=v[3]
m=A.c5(o==null?"":o,null)
if(m==null)m=0
l=A.bW(A.bw(s),A.bE(s),A.bO(s),0,0,0,0,0)
if(B.a.t(w,d))l=l.bN(a0)
r.b=A.bW(A.bw(l),A.bE(l),A.bO(l),n,m,0,0,0).bN(-36e8)
if(r.b9().cY(s.bN(e)))r.b=J.cb(r.b9(),B.ns)
v=C.hFH(v[1])
k=B.o.F(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+B.a.aU(B.o.u(m),2,"0")+" "+j)}else{l=A.bW(A.bw(s),A.bE(s),A.bO(s),0,0,0,0,0)
v=B.a.t(w,d)
if(v)l=l.bN(a0)
i=A.ae("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cz(w)
if(i!=null){o=i.b
h=C.h0t(o[1],o[3],o[2])
o=o[2]
g=A.c5(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=A.bW(A.bw(l),A.bE(l),A.bO(l),h,g,0,0,0)
r.b=f.cY(s.bN(3e7))&&!v?f.bN(a0):f
q.b=C.h0s(a1,w)}}v=x.N
return A.a([new A.kd("alarm",A.E(["title",q.b9(),"start",r.b9().ab(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
hBE(d){var w,v,u,t,s,r,q=[A.ae("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.ae("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.ae("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),A.ae("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
for(w=0;w<4;++w){v=q[w].cz(d)
if(v==null)continue
u=v.b
t=u[1]
s=A.c5(t==null?"":t,null)
if(s==null||s<=0)continue
r=u[2]
if(r==null)r="minute"
if(B.a.a_(r,"sec"))return new A.b8(1e6*B.o.E(s,5,86400))
if(B.a.a_(r,"hour")||B.a.a_(r,"hr"))return new A.b8(36e8*B.o.E(s,1,168))
return new A.b8(6e7*B.o.E(s,1,10080))}return null},
hFH(d){var w=d==null?"work":d,v=w.toLowerCase()
if(B.a.t(v,"meeting")||B.a.t(v,"appointment"))return"Meeting"
if(B.a.t(v,"class")||B.a.t(v,"school"))return"Class"
if(B.a.t(v,"shift"))return"Shift"
return"Work"},
h0t(d,e,f){var w,v=A.c5(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return B.o.E(w==null&&v>=1&&v<=7?v+12:v,0,23)},
h0s(d,e){var w,v,u,t
if(B.a.t(e,"work"))return"Wake up \u2014 Work"
if(B.a.t(e,"school")||B.a.t(e,"class"))return"Wake up \u2014 School"
w=A.ae("\\btimer\\b",!1,!1,!1,!1)
if(w.b.test(e))return"Timer"
v=A.ae("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cz(d)
if(v!=null){w=v.b
u=w[1]
w=u==null?w[2]:u
t=B.a.i(w==null?"":w)
w=t.length
if(w>=3&&w<=60)return t}return"Wake up"},
hn4(d){var w,v,u,t,s=J.a8(d)
if(s.gai(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.k5(d,80),v=w.$ti,w=new A.bU(w,w.gJ(0),v.k("bU<ai.E>")),v=v.k("ai.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gJ(d)>80?u+("\u2026 and "+(s.gJ(d)-80)+" more\n"):u
return B.a.i(s.charCodeAt(0)==0?s:s)}},D,H,Ac,I,F,Ad,V,G,W,Ae,Af,X,Ag,Ah,Ai,Aj,Y,Z,K,Ak
J=c[1]
A=c[0]
B=c[2]
L=c[31]
Q=c[160]
A_=c[171]
E=c[152]
M=c[162]
A0=c[125]
N=c[93]
A1=c[158]
R=c[34]
O=c[71]
A2=c[78]
S=c[77]
A3=c[79]
P=c[126]
A4=c[163]
T=c[154]
A5=c[166]
A6=c[164]
A7=c[165]
A8=c[161]
A9=c[157]
Aa=c[63]
U=c[142]
Ab=c[143]
C=a.updateHolder(c[5],C)
D=c[151]
H=c[25]
Ac=c[62]
I=c[156]
F=c[92]
Ad=c[167]
V=c[26]
G=c[155]
W=c[107]
Ae=c[153]
Af=c[170]
X=c[159]
Ag=c[172]
Ah=c[102]
Ai=c[169]
Aj=c[99]
Y=c[70]
Z=c[55]
K=c[53]
Ak=c[168]
C.bnP.prototype={
nX(d,e){return this.a.$2(d,e)}}
C.E5.prototype={
S(){return new C.aFd(this.$ti.k("aFd<E5.T,E5.S>"))}}
C.aFd.prototype={
Z(){var w,v,u=this
u.a0()
w=u.a
v=w.f
w=new A.hw(B.DJ,v,null,null,w.$ti.k("hw<1>"))
u.e=w
u.U8()},
bq(d){var w,v=this
v.bD(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aJB()
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hw(B.DJ,w.b,w.c,w.d,w.$ti)}v.U8()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&A.c()
return v.mx(d,w)},
q(){this.aJB()
this.a2()},
U8(){var w,v=this
v.d=v.a.c.l0(new C.eN9(v),new C.eNa(v),new C.eNb(v))
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hw(B.UM,w.b,w.c,w.d,w.$ti)},
aJB(){var w=this.d
if(w!=null){w.a9(0)
this.d=null}}}
C.at0.prototype={
mx(d,e){return this.e.$2(d,e)}}
C.aiL.prototype={
S(){return C.htB()},
bn(){return this.r.$0()}}
C.qf.prototype={}
C.axy.prototype={
aal(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aal=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.fRX(r)
if(r.x==null||r.c4.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.fRZ(s),$async$aal)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aal,v)},
Vu(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ao8(t.a.c),$async$Vu)
case 3:if(e!=null&&t.c!=null)t.a.bn()
r=!C.c4d(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return A.b(C.an7(t.a.c),$async$Vu)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.n(new C.d3y(t,s))
if(!s)t.aal()
case 1:return A.h(u,v)}})
return A.i($async$Vu,v)},
a9X(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a9X=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.byM(),$async$a9X)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d3J(t,s))
case 1:return A.h(u,v)}})
return A.i($async$a9X,v)},
Z(){var w,v,u=this
u.boH()
$.rP=$.rP+1
w=u.a
$.byQ=w.c.a
w=w.d.b4
v=A.U(w).k("J<1,a1<n,@>>")
w=A.A(new A.J(w,new C.d40(),v),v.k("ai.E"))
u.f=w
u.a9X()
u.Id()
u.Vu()
u.e=A.dD(B.np,new C.d41(u))},
Id(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Id=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:C.af_(t.a.d.b4)
w=3
return A.b(C.fpv(t.a.d.b4),$async$Id)
case 3:s=e
if(t.c==null){w=1
break}C.af_(t.a.d.b4)
if(s!=null)t.n(new C.d3R(t,s))
else t.n(new C.d3S(t))
case 1:return A.h(u,v)}})
return A.i($async$Id,v)},
q(){C.aX2()
var w=this.e
if(w!=null)w.a9(0)
this.boG()},
aeP(d,e,f){return this.ckk(d,e,f)},
ckk(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$aeP=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(e.toLowerCase())
p=J.q(t.r,q)
o=t.a
n=o.d.b4
o=o.c
s=d.b
C.hFK(n,o.a,o.c,d.a,s,f,e,p)
t.a.bn()
w=3
return A.b(C.af0(t.a.d.b4),$async$aeP)
case 3:if(t.c==null){w=1
break}t.n(new C.d3U(t))
r=f===1?"1 game":""+f+" games"
t.c.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$aeP,v)},
H8(d,e){return this.c60(d,e)},
bVD(d){return this.H8(d,null)},
c60(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$H8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&B.a.i(e).length!==0){s=C.tq(t.a.d.b4,B.a.i(e))
if(s!=null&&C.aM0(s)<=0){t.c.I(x.q).f.P(D.aJc)
w=1
break}}w=5
return A.b(C.an7(t.a.c),$async$H8)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return A.b(C.fCC(r,C.fjT(q.c),p),$async$H8)
case 6:w=1
break
case 4:o=new C.d3M(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
A.ho(r,new C.aAm(p,q.d,q.f,q.r,new C.d3N(o),q.w,C.fjT(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
A.ho(q,new C.aiK(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.d3O(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$H8,v)},
bTb(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.af_(i.a.d.b4)
C.af_(i.f)
w=C.hQs(i.a.c.a,i.f)
v=C.hFJ(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return B.bF
if(!u){t=B.d.gL(w)
u=A.m(14)
s=A.H(B.ba,B.r,1)
r=J.a8(t)
q=r.h(t,"fromName")
q=A.t(q==null?r.h(t,"fromEmail"):q)
p=A.t(r.h(t,"gameTitle"))
o=A.aM(r.h(t,g))
o=o==null?h:B.k.N(o)
if(o==null)o=1
r=A.aM(r.h(t,g))
r=r==null?h:B.k.N(r)
r=(r==null?1:r)===1?"":"s"
n=x.p
return A.p(h,A.v(A.a([D.f2P,A.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,B.oE,h,h,h),B.P,A.B(A.a([A.D(A.dV(A2.RK,new C.d3E(i,t),h),1),B.aa,A.D(A.bL(D.fb7,new C.d3F(i,t),h),1)],n),B.m,h,B.e,B.j,0,h,h)],n),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(B.aB,h,s,u,h,h,B.n),h,h,h,B.e3,B.bm,h,h,1/0)}m=B.d.gL(v)
l=B.d.dI(i.y,new C.d3G(m),new C.d3H(i))
k=C.fIx(m,i.a.c.a,i.r)
j=C.aM0(m)
u=A.m(14)
s=A.H(B.ba,B.r,1)
r=j===1?"":"s"
return A.p(h,A.v(A.a([D.eWz,A.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,B.oE,h,h,h),B.av,A.d(C.hIk(m,i.a.c.a),h,h,h,h,h,h,B.a4H,h,h,h),B.P,A.bL(D.f28,new C.d3I(i,l,m),h)],x.p),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(B.bk,h,s,u,h,h,B.n),h,h,h,B.e3,B.bm,h,h,1/0)},
bK2(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.erP.t(0,d.a),l=A.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=A.a2V(w[v])
t=B.k.E(u.d*0.58,0.12,0.3)
l.push(new A.wv(u.a,u.b,B.k.E(u.c*0.92,0,0.9),t).iu())}s=B.d.gL(w)
w=A.m(16)
t=A.m(18)
r=A.H(A.X(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1)
q=x.V
p=A.a([new A.ab(0,B.G,A.X(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.ja,12)],q)
o=x.p
o=A.a([new A.a4(100,n,A.au(A.W(d.e,B.c,n,n,n,64),n,n,n),n),A.D(new A.C(B.ky,A.v(A.a([A.B(A.a([A.D(A.d(d.b,n,n,n,n,n,n,B.kQ,n,n,n),1)],o),B.m,n,B.e,B.j,0,n,n),B.av,A.d(d.c,n,2,B.a2,n,n,n,B.nO,n,n,n)],o),B.F,n,B.b7,B.j,0,B.p),n),1)],o)
if(m)o.push(A.aF(n,n,n,n,D.bDj,n,n,n,new C.d3A(this,d),n,n,n,n,"Invite player",n))
o.push(new A.C(B.Kb,A.p(n,D.bBv,B.f,n,n,new A.o(A.X(71,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),n,A.H(A.X(B.k.U(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1.6),n,A.a([new A.ab(0,B.G,A.X(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,10)],q),n,B.a6),n,44,n,n,n,n,n,44),n))
return A.aI(!1,w,!0,A.p(n,A.B(o,B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,r,t,p,new A.a5(B.ax,B.aC,B.x,l,n,n),B.n),n,92,n,B.e3,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.d3B(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.M(d).ax.a===B.H,l=A.M(d).ax.a===B.H?B.j0:B.oZ,k=m?B.hy.j(0.94):B.c.j(0.94),j=m?B.c:B.M,i=m?B.hy:B.c,h=m?B.c.j(0.08):B.aJ,g=m?B.c:B.M,f=m?B.bj:B.bN
if(!o.x)return C.aMy(n,l,A.au(A.mq(n,m?B.c:B.bl,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fjT(o.a.c)
return new C.M_(o.a.w,w,!0,o.gaOl(),n)}w=A.aH(d,B.e6,x.w).w
v=A.m(12)
u=A.H(h,B.r,1)
t=x.V
s=A.a([],t)
if(!m)s.push(new A.ab(0,B.G,B.w.j(0.04),B.cF,12))
r=x.p
s=A.a([A.p(n,A.B(A.a([A.D(A.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,A.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,B.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new A.tU(new C.d3Y(o,f,g),n,$.aNU(),n)],r),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(i,n,u,v,s,n,B.n),n,n,n,n,B.VB,n,n,1/0),B.T,o.bTb()],r)
v=o.y
B.d.v(s,new A.J(v,o.gbK1(),A.U(v).k("J<1,r>")))
w=A.ci(A.v(s,B.m,n,B.e,B.j,0,B.p),B.q,n,B.z,n,new A.N(14,w.r.b+78,14,24),n,n,B.ak)
s=A.m(35)
v=A.a([new A.ab(0,B.G,B.w.j(m?0.28:0.08),B.ja,15)],t)
u=A.H(m?B.c.j(0.1):B.aJ,B.r,1)
t=A.aF(n,n,n,n,A.W(B.ew,j,n,n,n,18),n,n,n,o.gaOl(),n,n,n,n,n,n)
q=A.D(A.au(A.d("GAME CENTER",n,n,n,n,n,n,A.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,B.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=A.m(20)
return A.nX(!0,C.aMy(n,l,new A.am(B.W,n,B.a9,B.f,A.a([w,A.an(n,A.bp(!1,new A.C(B.Km,A.p(n,A.B(A.a([t,q,new A.C(B.ky,A.p(n,A.B(A.a([D.byP,B.et,C.anZ(new C.d3Z(o),B.n2,o.a.c.a)],r),B.m,n,B.e,B.Q,0,n,n),B.f,n,n,new A.o(B.cQ,n,n,p,n,n,B.n),n,n,n,n,B.ha,n,n,n),n)],r),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(k,n,u,s,v,n,B.n),n,60,n,n,B.m1,n,n,n),n),!0,!1,B.ag,!0,!0),n,n,0,0,0,n)],r),n)),new C.d4_(o),x.K)},
aOm(){var w,v
this.a.bn()
w=this.d
v=w>0?A.E(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
A.iG(w,v)}}
C.aAm.prototype={
S(){return new C.bg2()},
hk(d){return this.e.$1(d)},
bn(){return this.f.$0()},
aDk(){return this.r.$0()}}
C.bg2.prototype={
Z(){this.bpH()
this.d=A.SY(this.a.d.bg)
$.rP=$.rP+1},
q(){C.aX2()
this.bpG()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&A.c()
return new C.amC(v,new C.dH1(w),u,new C.dH2(w),new C.dH3(w,d),new C.dH4(w),null)}}
C.aiK.prototype={
S(){return new C.axx(new A.ar(B.as,$.av()))},
hk(d){return this.x.$1(d)},
bn(){return this.y.$0()},
aDk(){return this.z.$0()}}
C.axx.prototype={
Z(){this.boF()
this.a.toString
$.rP=$.rP+1},
q(){C.aX2()
var w=this.d
w.R$=$.av()
w.O$=0
this.boE()},
a_X(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a_X=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.M5()
w=5
return A.b(C.an7(t.a.c),$async$a_X)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return A.b(C.fCC(s,C.fjT(r.c),q),$async$a_X)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&B.a.i(r).length!==0){p=C.tq(s.d.b4,B.a.i(r))
if(p!=null&&C.aM0(p)<=0){t.c.I(x.q).f.P(D.aJc)
w=1
break}}o=A.d9(B.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.I(x.q).f.P(D.eyJ)
w=1
break}m=A.JD(t.a.c.a,new C.d3s(t))
if(m+0.001<n){t.c.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d("Not enough balance for this bet \u2014 you have $"+A.dx(m)+", the bet is $"+A.dx(n)+".",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aDk()
s=t.a
s.toString
r=B.o.u(1000*Date.now())
q=t.a
s.hk(new A.d_(r,q.c.a,n,B.jw,B.f7,"Game bet: "+q.f,null,null,B.ci,new A.Q(Date.now(),0,!1)))
t.a.bn()
if(D.erH.t(0,t.a.e)){s=t.c
s.toString
r=t.a
A.ho(s,new C.alF(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
A.ho(s,new C.aiM(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$a_X,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=A.aF(o,o,o,o,B.Fa,o,o,o,new C.d3v(d),o,o,o,o,o,o),k=p.a,j=A.d(k.f,o,o,o,o,o,o,B.cr,o,o,o),i=A.m(12),h=x.p
j=A.eC(A.a([A.p(o,A.au(C.anZ(new C.d3w(p),B.kk,k.c.a),o,o,o),B.f,o,o,new A.o(B.cQ,o,o,i,o,o,B.n),o,o,o,D.bgc,B.is,o,o,o)],h),o,o,!0,!0,D.UK,o,1,o,o,o,!1,o,!1,B.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=A.m(16)
i=A.H(B.ba,B.r,1)
k=A.W(D.bpQ,D.baJ,o,o,o,28)
w=p.a
v=A.d(w.f,o,o,o,o,o,o,B.oA,o,o,o)
w=A.d(w.r,o,o,o,o,o,o,B.oE,o,o,o)
u=A.X(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.m(12)
s=x.a3
s=A.A(new A.J(A.a([2,5,10,25],x.t),new C.d3x(p),s),s.k("ai.E"))
s=A.B(s,B.m,o,B.e,B.j,0,o,o)
r=A.X(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.p(o,A.v(A.a([D.fcC,B.T,s,B.P,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.d,o,o,o,o,o,2,A.bn(o,new A.b3(4,A.m(10),B.Z),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,B.ld,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dO,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,B.dj,!0,B.a5,o,B.am,o,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(u,o,o,t,o,o,B.n),o,o,o,o,B.bU,o,o,1/0)
u=A.m(12)
r=A.H(A.X(102,B.a0P.l()>>>16&255,B.a0P.l()>>>8&255,B.a0P.l()&255),B.r,1)
s=A.X(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
q=A.m(10)
q=A.p(o,A.v(A.a([D.eVX,A.d("+ $"+B.k.aa(n*0.46,2),o,o,o,o,o,o,D.eMO,o,o,o),A.d("(46% return on $"+B.k.aa(p.e,2)+" bet)",o,o,o,o,o,o,B.nO,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(s,o,o,q,o,o,B.n),o,o,o,o,B.ck,o,o,1/0)
s=A.X(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
n=A.m(10)
u=A.p(o,A.v(A.a([D.f34,B.P,q,B.P,A.p(o,A.v(A.a([D.eRo,A.d("$"+B.k.aa(m,2),o,o,o,o,o,o,D.eCW,o,o,o),A.d("8 pairs \xd7 $"+B.k.aa(m,2)+" each",o,o,o,o,o,o,B.nO,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(s,o,o,n,o,o,B.n),o,o,o,o,B.ck,o,o,1/0)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(D.b7r,o,r,u,o,o,B.n),o,o,o,o,B.bU,o,o,1/0)
r=A.fh(o,o,B.bl,o,o,o,o,o,o,B.c,o,B.fR,o,o,o,o,o,o,o,o)
return C.aMy(j,D.UK,A.ci(A.p(o,A.v(A.a([k,B.av,v,B.bB,w,B.T,t,B.P,u,B.T,new A.a4(1/0,o,A.i6(A.d("Start Game ($"+B.k.aa(p.e,2)+")",o,o,o,o,o,o,B.ce,o,o,o),p.gco5(),r),o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,i,l,o,D.bId,B.n),o,o,o,o,B.eM,o,o,1/0),B.q,o,B.z,o,E.ad6,o,o,B.ak))}}
C.aiM.prototype={
S(){var w=x.s,v=x.t,u=x.S
return new C.axz(B.cE,new A.ar(B.as,$.av()),A.a([],w),A.a([],x.d4),A.a([],w),A.a([],w),A.a([],v),A.a([],v),A.a([],v),A.b_(u),A.b_(u),A.a([],v),A.a([],v),A.a([],v))},
hk(d){return this.y.$1(d)},
bn(){return this.z.$0()}}
C.axz.prototype={
ghr(){var w=this.a.Q
return w!=null&&B.a.i(w).length!==0},
qn(d){return this.bIm(d)},
bIm(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$qn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.z7()
r=t.MX()
w=s<=0?3:4
break
case 3:w=5
return A.b(t.a8q(d),$async$qn)
case 5:w=1
break
case 4:q=B.k.E(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return A.b(t.rX(d),$async$qn)
case 9:w=7
break
case 8:w=10
return A.b(t.Dj(q,s,r),$async$qn)
case 10:case 7:case 1:return A.h(u,v)}})
return A.i($async$qn,v)},
DU(d,e,f,g){return this.clX(d,e,f,g)},
clX(d,e,f,g){var w=0,v=A.j(x.H),u,t=this,s
var $async$DU=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return A.b(C.bzR(s,C.bzv(),C.fKp(),d,e,f,g),$async$DU)
case 3:case 1:return A.h(u,v)}})
return A.i($async$DU,v)},
z7(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.aYx(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&A.c()
return u+C.afb(t,s.e.a.a)
case"memory":return s.ghr()&&D.mi.t(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.auV()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bg
case"color":return s.b4
case"reflex":return s.Y
default:u=s.aZ
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
auV(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
MX(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&A.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.fIB()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.aZ
if(w!=null)return w.b
return 1}},
bq(d){var w,v,u=this
u.bD(d)
if(u.f||u.c4)return
w=u.a
v=C.fjY(w.e,w.d.y2)
if(v!==C.fjY(d.e,d.d.y2)&&u.c!=null)u.n(new C.d5k(u,v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.boJ()
w=i.a
w.toString
$.rP=$.rP+1
i.Q=C.fjY(w.e,w.d.y2)
i.b0k()
i.a9H()
if(i.ghr()){i.c4=!0
i.cT="Connecting to match\u2026"
i.cf="Both players enter the room together \u2014 play starts at the same time."
i.Ni()
i.a9l()
i.bh=A.dD(B.h_,new C.d5n(i))}if(B.d.t(D.Od,i.a.e)){w=i.ghr()
v=i.a
if(w){w=v.d.b4
v=v.Q
v.toString
u=C.tq(w,v)
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
k=B.a.i(J.k(t==null?"":t))}w=new C.aX0(!1,w,k.length===0||B.a.t(k,"@")?C.fIx(u,v,null):k,p,l,s)}else{w=w.c
w=C.fCG(w.c,w.a)}w=i.bH=w}else{w=v.c
w=i.bH=C.fCG(w.c,w.a)}v=C.hnb()
v.biM(i.a.e,i.d,w)
i.aZ=v
i.r=v.c
if(i.ghr()){w=i.a
v=w.d.b4
w=w.Q
w.toString
u=C.tq(v,w)
m=u==null?null:J.q(u,h)
if(x.f.b(m)){w=i.aZ
w.toString
w.b5l(i.a.e,A.a_(m,x.N,x.z),i.a.c.a)
w=i.aZ
i.r=w.c
if(w.e){if(w.r)j=D.PB
else j=w.f===!0?D.pw:D.Gq
i.z9(j)}}}i.b1=A.dD(B.nr,new C.d5o(i))
if(i.ghr())i.b8=A.dD(B.oa,new C.d5p(i))}if(i.ghr()&&!B.d.t(D.Od,i.a.e))i.b8=A.dD(B.oa,new C.d5q(i))
i.as=A.dD(B.h9,new C.d5r(i))},
Ni(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ni=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tq(s.d.b4,q)
w=p!=null?3:4
break
case 3:w=5
return A.b(C.bxS(p,t.a.c.a),$async$Ni)
case 5:o=e
if(t.c!=null)t.n(new C.d4A(t,o))
w=1
break
case 4:w=6
return A.b(C.Ju(q,t.a.d.b4,!1),$async$Ni)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return A.b(C.bxS(n,t.a.c.a),$async$Ni)
case 7:o=e
if(t.c!=null)t.n(new C.d4B(t,o))
case 1:return A.h(u,v)}})
return A.i($async$Ni,v)},
afV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$afV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.Ju(r,s.d.b4,!1),$async$afV)
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
t.aJp(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=B.k.N(j)
else{h=j==null?null:J.k(j)
i=A.c5(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)B.d.bm(t.fy,new C.d53(t))
if(i!=null&&t.fr.length!==0){s=A.A(t.dy,x.S)
B.d.v(s,t.dy)
r=new A.f3()
r.dU(i)
B.d.fA(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.n(new C.d54())}case 1:return A.h(u,v)}})
return A.i($async$afV,v)},
a9l(){var w=0,v=A.j(x.H),u=this
var $async$a9l=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Zi(!0),$async$a9l)
case 2:return A.h(null,v)}})
return A.i($async$a9l,v)},
Zi(d){return this.cbG(d)},
cbF(){return this.Zi(!1)},
cbG(b3){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$Zi=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghr()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
if(q.length===0){w=1
break}p=B.a.i(s.c.a.toLowerCase())
w=3
return A.b(C.Ju(q,s.d.b4,b3),$async$Zi)
case 3:o=b5
if(o==null)o=C.tq(t.a.d.b4,q)
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
if(i)j.m(0,"player1Email",h)
f=g.length!==0
if(f)j.m(0,"player2Email",g)
e=j.h(0,"inGame")
d=s.b(e)?A.a_(e,r,k):A.T(r,k)
a0=j.h(0,"readyAt")
a1=s.b(a0)?A.a_(a0,r,k):A.T(r,k)
a2=new A.Q(Date.now(),0,!1).a5()
if(b3){d.m(0,p,!0)
a1.m(0,p,a2.ab())}if(i&&!d.ak(0,h))d.m(0,h,!1)
if(f&&!d.ak(0,g))d.m(0,g,!1)
s=!1
if(i)if(J.y(d.h(0,h),!0)){s=a1.h(0,h)
s=J.k(s==null?"":s).length===0}if(s)a1.m(0,h,a2.ab())
s=!1
if(f)if(J.y(d.h(0,g),!0)){s=a1.h(0,g)
s=J.k(s==null?"":s).length===0}if(s)a1.m(0,g,a2.ab())
j.m(0,"inGame",d)
j.m(0,"readyAt",a1)
b2.a=null
s=j.h(0,"startAt")
a3=J.k(s==null?"":s)
if(a3.length!==0){s=A.bh(a3)
a4=s==null?null:s.bQ()
b2.a=a4
s=a4}else s=null
a5=i&&f&&J.y(d.h(0,h),!0)&&J.y(d.h(0,g),!0)
if(a5&&s==null){if(i){r=a1.h(0,h)
r=A.bh(J.k(r==null?"":r))
a6=r==null?null:r.bQ()}else a6=null
if(f){r=a1.h(0,g)
r=A.bh(J.k(r==null?"":r))
a7=r==null?null:r.bQ()}else a7=null
if(a6!=null&&a7!=null){a8=(a6.c8(a7)?a6:a7).bN(5e5)
if(!new A.Q(Date.now(),0,!1).cY(a8)){a4=b2.a=a8.bN(4e6)
j.m(0,"startAt",a4.a5().ab())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.m(0,"memorySeed",B.o.F(1000*Date.now(),2147483647))
j.m(0,"memoryMatched",A.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.m(0,"patternSeed",B.o.F(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.hNk(t.a.d.b4,q,j)
t.a.bn()}if(t.c==null){w=1
break}b0=t.bB
if(b0==null)b0="your opponent"
if(!a5){t.n(new C.d4Q(b2,t,b0))
w=1
break}if(s==null){t.n(new C.d4R(t))
w=1
break}b1=new A.Q(Date.now(),0,!1)
if(b1.cY(s)){s=s.bv(b1).a
r=B.o.al(s,1e6)
t.n(new C.d4S(b2,t,r+(B.o.F(B.o.al(s,1000),1000)>0?1:0)))
w=1
break}if(t.c4){t.n(new C.d4T(b2,t))
b2=t.a.e
if(b2==="pattern")t.a6k()
else if(b2==="memory"){t.b0j()
if(t.c!=null)t.n(new C.d4U())}}b2=t.bh
if(b2!=null)b2.a9(0)
t.bh=null
case 1:return A.h(u,v)}})
return A.i($async$Zi,v)},
aKj(d){var w,v,u,t,s=this
if(d!=null){w=new A.f3()
w.dU(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e_(v,x.S)
for(t=0;t<v;++t)u[t]=w.aC(9)
s.ry=u
s.x1=0
s.to=-1},
aKi(){return this.aKj(null)},
a6k(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a6k=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ghr()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.c9d()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return A.b(C.Ju(q,s.d.b4,!1),$async$a6k)
case 5:r=t.aXk(e)
case 4:if(t.c==null){w=1
break}t.aKj(r)
t.n(new C.d42(t))
t.Cy()
case 1:return A.h(u,v)}})
return A.i($async$a6k,v)},
aXk(d){var w,v,u,t=null
if(d==null)return t
w=J.q(d,"sessionState")
if(!x.f.b(w))return t
v=J.q(w,"patternSeed")
if(typeof v=="number")return B.k.N(v)
u=v==null?t:J.k(v)
return A.c5(u==null?"":u,t)},
c9d(){var w=this.a,v=w.Q
if(v==null)return null
return this.aXk(C.tq(w.d.b4,v))},
a9H(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a9H=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$a9H)
case 3:r=e
q=t.a
p=q.e
q=B.a.i(q.c.a.toLowerCase())
s=A.eZ(J.q(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.n(new C.d4z(t,s))
case 1:return A.h(u,v)}})
return A.i($async$a9H,v)},
oo(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n
var $async$oo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$oo)
case 2:p=e
o=u.a
n=o.e
o=B.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bAj().length
else s=n==="typing"?50:105
if(n==="typing")r=B.o.F(u.at+5,s)
else{q=u.at
r=t?B.o.F(q+6,s):B.o.F(q+1,s)}w=3
return A.b(p.aq("Int","ngmy_game_"+n+"_"+o,r),$async$oo)
case 3:u.at=r
return A.h(null,v)}})
return A.i($async$oo,v)},
a0b(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a0b=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.aZ==null||t.f||t.aQ){w=1
break}if(t.c4){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.Ju(r,s.d.b4,!1),$async$a0b)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.b4
s=s.Q
s.toString
p=C.tq(r,s)
s=p==null
if(!s){r=J.cB(p)
r.a7(p)
r.v(p,q)}r=J.a8(q)
o=r.h(q,"sessionState")
if(!x.f.b(o)){w=1
break}n=A.a_(o,x.N,x.z)
r=r.h(q,"sessionUpdatedAt")
m=A.bh(J.k(r==null?"":r))
s=s?null:J.q(p,"sessionUpdatedAt")
l=A.bh(J.k(s==null?"":s))
if(m!=null&&l!=null&&!m.c8(l)){w=1
break}s=t.aZ
s.toString
r=t.a
s.b5l(r.e,n,r.c.a)
r=t.aZ
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.PB
else k=r.f===!0?D.pw:D.Gq
w=7
return A.b(t.z9(k),$async$a0b)
case 7:w=5
break
case 6:if(t.c!=null)t.n(new C.d55())
case 5:case 1:return A.h(u,v)}})
return A.i($async$a0b,v)},
adQ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$adQ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghr()||q.aZ==null||q.a.Q==null||q.aQ){w=1
break}q.aQ=!0
t=3
o=q.aZ
o.toString
p=o.cCT(q.a.e)
o=q.a
n=o.d.b4
o=o.Q
o.toString
w=6
return A.b(C.aMU(n,o,p),$async$adQ)
case 6:q.a.bn()
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
return A.i($async$adQ,v)},
z9(d){return this.bPj(d)},
bPj(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$z9=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(t.HN(s,s),$async$z9)
case 9:w=4
break
case 6:w=10
return A.b(t.VQ(s,s),$async$z9)
case 10:w=4
break
case 7:w=11
return A.b(t.a8p(s,s),$async$z9)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghr()?12:13
break
case 12:w=14
return A.b(t.Gs(),$async$z9)
case 14:case 13:case 1:return A.h(u,v)}})
return A.i($async$z9,v)},
Yh(d,e){return this.c3N(d,e)},
c3N(d,e){var w=0,v=A.j(x.H),u,t=this
var $async$Yh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=t.ghr()?3:5
break
case 3:w=6
return A.b(t.adQ(),$async$Yh)
case 6:if(d===D.pv){w=1
break}w=4
break
case 5:if(d===D.pv){w=1
break}case 4:w=7
return A.b(t.z9(d),$async$Yh)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Yh,v)},
a9B(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$a9B=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tq(s.d.b4,q)
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
j.m(0,o,!1)
l.m(0,"inGame",j)
l.W(0,"startAt")
w=3
return A.b(C.aMU(t.a.d.b4,q,l),$async$a9B)
case 3:t.a.bn()
case 1:return A.h(u,v)}})
return A.i($async$a9B,v)},
Gs(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Gs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tq(s.d.b4,q)
if(p==null){w=1
break}o=J.q(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?A.a_(o,s,r):A.T(s,r)
n.m(0,"gameOver",!0)
C.fKP(t.a.d.b4,q,n)
C.hQB(t.a.d.b4,q)
w=3
return A.b(C.af0(t.a.d.b4),$async$Gs)
case 3:t.a.bn()
case 1:return A.h(u,v)}})
return A.i($async$Gs,v)},
q(){var w,v=this
if(v.ghr()&&!v.f)v.a9B()
else if(!v.f)v.bVE()
C.aX2();++v.RG
w=v.as
if(w!=null)w.a9(0)
w=v.b1
if(w!=null)w.a9(0)
w=v.cx
if(w!=null)w.a9(0)
w=v.b8
if(w!=null)w.a9(0)
w=v.bh
if(w!=null)w.a9(0)
w=v.e
w.R$=$.av()
w.O$=0
v.boI()},
cr5(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&A.c()
v=v<=0||w.aZ==null}if(v)return
if(w.c4)return
v=w.aZ
v.toString
w.a.toString
if(v.a>=v.b){w.rX("Goal completed!")
return}v=++w.rx
if(v%5===0)w.n(new C.d5e())},
b0k(){var w,v,u,t,s,r=this
r.x=A.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e_(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b0j()
break
case"scramble":r.bg=0
r.b0l()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=B.o.F(r.at,50)
v=J.e_(5,x.N)
for(t=0;t<5;++t)v[t]=D.cYZ[B.o.F(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bJ(0,B.c2)
break
case"math":r.y2=0
r.b0i()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b0m()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e_(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
B.d.fA(v,s)
if(!r.ce0()){w=J.e_(9,w)
for(u=0;u<9;++u)w[u]=u
B.d.fA(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
B.d.a7(w)
w.push(r.d.aC(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.OQ()
break
case"pattern":if(r.ghr()){r.ry=A.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aKi()
w=A.t(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Cy()}break
case"color":r.b4=0
r.b0d()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.Y=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b1q()
break
default:if(B.d.t(D.Od,w)){w=r.aZ
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
aYx(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
ce0(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return B.o.F(v,2)===0},
b0m(){var w,v,u,t,s,r=this,q=B.o.F(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e_(o,x.S)
for(w=0;w<o;w=v){v=w+1
n[w]=B.k.N(Math.pow(p,v))}u=B.k.N(Math.pow(p,o))
r.w=B.o.u(u)
r.aw=B.d.aH(n,", ")
q=r.w
t=x.s
s=A.a([B.o.u(u+p),B.o.u(u-p),B.o.u(u+p*2)],t)
t=A.a([q],t)
B.d.v(t,s)
B.d.fA(t,r.d)
r.x=t},
b0i(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bAj().length-6)u.at=0
w=$.bAj()
v=w[B.o.F(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b0l(){var w=this,v=w.w=D.cEu[B.o.F(w.at+w.bg,105)]
w.ax=C.hQS(v)
w.ay=A.bZ(v.length,null,!1,x.T)
w.ch=A.a(w.ax.split(""),x.s)
w.e.bJ(0,B.c2)},
b1q(){var w=this,v=w.cx
if(v!=null)v.a9(0)
w.y=!1
w.z=null
w.cx=A.cP(A.dB(0,0,0,120+w.d.aC(280),0,0),new C.d52(w))},
bPm(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.qn("Too early \u2014 paid for "+t.Y+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=B.o.al(new A.Q(v,0,!1).bv(u).a,1000)}if(w<520){t.n(new C.d4x(t))
v=t.Y
if(v>=5){t.oo()
t.rX("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b1q()
t.n(new C.d4y())}}else t.qn("Too slow ("+w+"ms) \u2014 paid for "+t.Y+"/5.")},
cqo(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=B.d.bi(t.ay,new C.d59())
if(u<0)return
t.n(new C.d5a(t,u,v,d))},
cqp(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.n(new C.d5b(u,d,v))},
bzN(){var w,v,u=this
if(u.f)return
if(B.d.ba(u.ay,new C.d43())){u.c.I(x.q).f.P(D.eyD)
return}w=B.d.fN(u.ay)
v=u.w
v===$&&A.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.n(new C.d44(u))
if(u.ghr()&&D.mi.t(0,u.a.e))u.Zw()
if(u.bg>=5){u.oo()
if(u.ghr()&&D.mi.t(0,u.a.e))u.mu(!0)
else u.rX("All 5 words unscrambled!")}else{u.b0l()
u.r="Word "+(u.bg+1)+" of 5 \u2014 place letters in order"
u.n(new C.d45())}}else u.qn("Wrong word \u2014 paid for "+u.bg+"/5.")},
b0d(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=B.o.F(w.at+w.b4*11,4),t=v[w.d.aC(4)]
w.aD=t
w.aB=v[u]
w.aM=[B.dC,B.du,B.hI,B.qJ][u]
w.w=t},
aJp(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=B.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a7(0)
w=h.id
w.a7(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=A.b_(x.S)
for(s=J.jk(v),s=s.gah(s),r=x.j;s.C();){q=s.gT(s)
p=B.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aU(r.b(o)?o:B.cL),n=p===g;q.C();){m=q.gT(q)
l=typeof m=="number"?B.k.N(m):A.c5(J.k(m),null)
if(l==null)continue
t.K(0,l)
if(n)w.K(0,l)}}f.v(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aU(k);w.C();){m=w.gT(w)
l=typeof m=="number"?B.k.N(m):A.c5(J.k(m),null)
if(l!=null)f.K(0,l)}}h.k2=B.k.by(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=A.aM(J.q(j,g))
i=f==null?null:B.k.N(f)
if(i!=null)h.fx=i}},
b0j(){var w,v,u,t,s,r,q,p=this
p.fx=p.k2=0
p.go.a7(0)
p.id.a7(0)
p.fy=A.a([],x.t)
p.k1=!1
w=A.A(p.dy,x.S)
B.d.v(w,p.dy)
p.fr=w
if(p.ghr()&&p.a.Q!=null){w=p.a
v=w.d.b4
w=w.Q
w.toString
u=C.tq(v,w)
t=u==null?null:J.q(u,"sessionState")
w=x.N
v=x.z
s=x.f.b(t)?A.a_(t,w,v):A.T(w,v)
r=s.h(0,"memorySeed")
if(typeof r=="number")q=B.k.N(r)
else{w=r==null?null:J.k(r)
q=A.c5(w==null?"":w,null)}w=p.fr
if(q!=null){v=new A.f3()
v.dU(q)
B.d.fA(w,v)}else B.d.fA(w,p.d)
p.aJp(s)}else B.d.fA(p.fr,p.d)},
cb1(d){var w,v,u,t=this
if(t.c4)return
if(t.f||t.k1||t.go.t(0,d)||B.d.t(t.fy,d))return
t.n(new C.d4J(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.n(new C.d4K(t,v,u))
if(t.ghr()&&D.mi.t(0,t.a.e))t.Zw()
if(t.go.a>=t.fr.length){t.oo()
if(t.ghr()&&D.mi.t(0,t.a.e))t.mu(!0)
else t.auY()}return}t.k1=!0
A.bN(D.bf9,new C.d4L(t),x.c)},
b_H(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&A.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.n(new C.d4V(u))
if(u.y1>=5){u.oo()
u.rX("All 5 questions correct!")}else{u.b0m()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.n(new C.d4W())}}else u.qn(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.n(new C.d4X(u))
if(u.y2>=6){u.oo()
u.rX("All 6 math questions correct!")}else{u.b0i()
u.r="Question "+(u.y2+1)+" of 6"
u.n(new C.d4Y())}}else{u.TX(u.y2+1)
u.qn(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.n(new C.d4Z(u))
if(u.b4>=5){u.oo()
u.rX("All 5 color rounds correct!")}else{u.b0d()
u.r="Round "+(u.b4+1)+" of 5 \u2014 tap the COLOR of the text"
u.n(new C.d5_())}}else u.qn("Wrong color \u2014 paid for "+u.b4+"/5.")
return}if(v){u.oo()
u.auY()}else u.c.I(x.q).f.P(D.ezm)},
cqn(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=B.d.cJ(q.k4,0)
v=B.o.al(d,3)
u=B.o.F(d,3)
t=B.o.al(w,3)
s=B.o.F(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.n(new C.d58(q,d,w))
if(B.d.fN(q.k4)==="123456780"){q.oo()
q.auY()}}},
OQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$OQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.n(new C.d4M(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.d4N(t,q).$0()
t.c.e3()
w=6
return A.b(A.bN(B.kv,null,r),$async$OQ)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.d4O(t).$0()
t.c.e3()
w=7
return A.b(A.bN(B.jk,null,r),$async$OQ)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.n(new C.d4P(t))
case 1:return A.h(u,v)}})
return A.i($async$OQ,v)},
cqq(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.qn("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.n(new C.d5c(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.oo()
u.rX("Perfect Simon run!")
return}u.n(new C.d5d(u))
u.OQ()}},
Cy(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Cy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.n(new C.d46(t))
s=x.H
w=3
return A.b(A.bN(B.jj,null,s),$async$Cy)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.d47(t,o).$0()
t.c.e3()
w=7
return A.b(A.bN(B.Vg,null,s),$async$Cy)
case 7:if(t.c==null){w=1
break}new C.d48(t).$0()
t.c.e3()
w=8
return A.b(A.bN(B.ip,null,s),$async$Cy)
case 8:case 5:r.length===q||(0,A.K)(r),++p
w=4
break
case 6:if(t.c!=null)t.n(new C.d49(t))
case 1:return A.h(u,v)}})
return A.i($async$Cy,v)},
TX(d){return this.buE(d)},
buE(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$TX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return A.b(A.ax(),$async$TX)
case 3:s=f
r=t.a
q=r.e
r=B.a.i(r.c.a.toLowerCase())
p=$.bAj().length
o=B.o.F(t.at+d,p)
w=4
return A.b(s.aq("Int","ngmy_game_"+q+"_"+r,o),$async$TX)
case 4:t.at=o
case 1:return A.h(u,v)}})
return A.i($async$TX,v)},
cql(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.qn("Wrong tile \u2014 paid for "+v.auV()+"/"+C.fIB()+" moves.")
return}v.n(new C.d56(v,w))
if(v.ghr()&&D.mi.t(0,v.a.e))v.Zw()
if(v.x1>=w)if(v.x2>=7){v.oo()
if(v.ghr()&&D.mi.t(0,v.a.e))v.mu(!0)
else v.rX("All 7 pattern rounds correct!")}else{v.n(new C.d57(v))
v.Cy()}},
HN(d,e){return this.c9t(d,e)},
rX(d){return this.HN(null,d)},
auY(){return this.HN(null,null)},
c9t(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a9(0)
s=t.b1
if(s!=null)s.a9(0)
r=t.a.x*1.46
t.n(new C.d4H(t,r))
q=B.o.u(1000*Date.now())
s=t.a
p=new A.d_(q,s.c.a,r,B.fw,B.f7,"Game payout: "+s.f,null,null,B.ci,new A.Q(Date.now(),0,!1))
A.aeY(p,!0)
t.a.hk(p)
t.a.bn()
o=e==null?"+$"+B.k.aa(r,2)+" added to your balance!":e
s=t.a
C.u4(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.DU(d,o,"YOU WIN!",!0),$async$HN)
case 3:w=4
return A.b(C.aeQ(t.a.f,o),$async$HN)
case 4:case 1:return A.h(u,v)}})
return A.i($async$HN,v)},
DS(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$DS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghr()&&D.mi.t(0,t.a.e)?3:4
break
case 3:w=5
return A.b(t.cl1(),$async$DS)
case 5:w=1
break
case 4:s=t.z7()
r=t.MX()
w=r<=0||s<=0?6:7
break
case 6:w=8
return A.b(t.a8q("Time's up \u2014 no progress to pay."),$async$DS)
case 8:w=1
break
case 7:q=B.k.E(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return A.b(t.rX("Complete! Max payout earned."),$async$DS)
case 12:w=10
break
case 11:w=13
return A.b(t.Dj(q,s,r),$async$DS)
case 13:case 10:case 1:return A.h(u,v)}})
return A.i($async$DS,v)},
OX(d){return this.cdI(d)},
Zw(){return this.OX(!1)},
cdI(b1){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$OX=A.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghr()&&D.mi.t(0,r.a.e))||r.a.Q==null){w=1
break}if(!b1){a1=new A.Q(Date.now(),0,!1)
a2=r.bP
if(a2!=null&&a1.bv(a2).a<3e6){w=1
break}r.bP=a1}a2=r.a
a3=a2.Q
a3.toString
q=B.a.i(a3)
if(J.aa(q)===0){w=1
break}t=4
p=B.a.i(a2.c.a.toLowerCase())
a4=C.tq(a2.d.b4,q)
w=a4==null?7:9
break
case 7:w=10
return A.b(C.Ju(q,r.a.d.b4,!1),$async$OX)
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
J.aE(k,p,r.z7())
J.aE(m,"scores",k)
if(r.a.e==="memory"){j=J.q(m,"memoryMatchedBy")
i=a2.b(j)?A.a_(j,a3,a5):A.T(a3,a5)
a6=r.id
a6=A.A(a6,A.a2(a6).k("cl.E"))
B.d.fn(a6)
J.aE(i,p,a6)
J.aE(m,"memoryMatchedBy",i)
h=A.b_(x.S)
for(a6=i,a6=new A.dv(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aU(g);a8.C();){f=a8.gT(a8)
e=typeof f=="number"?B.k.N(f):A.c5(J.k(f),null)
if(e!=null)J.cb(h,e)}}a6=h
a6=A.A(a6,A.a2(a6).k("cl.E"))
B.d.fn(a6)
J.aE(m,"memoryMatched",a6)}d=J.q(m,"wagers")
a0=a2.b(d)?A.a_(d,a3,a5):A.T(a3,a5)
J.aE(a0,p,r.a.x)
J.aE(m,"wagers",a0)
w=11
return A.b(C.aMU(r.a.d.b4,q,m),$async$OX)
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
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$OX,v)},
mu(d){return this.cl2(d)},
cl1(){return this.mu(!1)},
cl2(b5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$mu=A.e(function(b6,b7){if(b6===1)return A.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghr()||t.a.Q==null?3:4
break
case 3:w=5
return A.b(t.DS(),$async$mu)
case 5:w=1
break
case 4:w=6
return A.b(t.OX(!0),$async$mu)
case 6:s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=B.a.i(s.c.a.toLowerCase())
w=7
return A.b(C.Ju(q,s.d.b4,!0),$async$mu)
case 7:o=b7
n=t.MX()
w=o==null?8:9
break
case 8:m=B.k.E(t.z7()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return A.b(t.a8q("Time's up \u2014 no progress to pay."),$async$mu)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return A.b(t.rX("Complete! Max payout earned."),$async$mu)
case 17:w=15
break
case 16:w=18
return A.b(t.Dj(m,t.z7(),n),$async$mu)
case 18:case 15:case 11:w=19
return A.b(t.Gs(),$async$mu)
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
d=A.aM(e.h(0,p))
a0=d==null?null:B.k.N(d)
if(a0==null)a0=t.z7()
d=A.aM(e.h(0,j))
a1=d==null?null:B.k.N(d)
if(a1==null)a1=0
a2=B.k.E(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return A.b(t.a8q("Time's up \u2014 no progress to pay."),$async$mu)
case 22:w=23
return A.b(t.Gs(),$async$mu)
case 23:w=1
break
case 21:a3=g.h(0,"wagers")
r=A.aM((s.b(a3)?A.a_(a3,r,h):A.T(r,h)).h(0,j))
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
r=t.b1
if(r!=null)r.a9(0)
a8=t.a.x*1.46*a2
a9=a8+a7
t.n(new C.d50(t,a8,a2))
r=t.a
r.toString
h=B.o.u(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+B.k.aa(a7,2):d+" ("+b1+"/"+b2+")"
r.hk(new A.d_(h,b0,a9,B.fw,B.f7,d,null,null,B.ci,new A.Q(Date.now(),0,!1)))
t.a.bn()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+B.k.aa(a9,2)+" (includes opponent bonus $"+B.k.aa(a7,2)+")":"+$"+B.k.aa(a8,2)+" (your progress payout)"
s=t.a
C.u4(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return A.b(t.DU(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$mu)
case 24:w=25
return A.b(t.Gs(),$async$mu)
case 25:case 1:return A.h(u,v)}})
return A.i($async$mu,v)},
Dj(d,e,f){return this.c9r(d,e,f)},
c9r(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Dj=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a9(0)
s=t.b1
if(s!=null)s.a9(0)
r=t.a.x*1.46*d
t.n(new C.d4F(t,r,d))
s=B.o.u(1000*Date.now())
q=t.a
p=new A.d_(s,q.c.a,r,B.fw,B.f7,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,B.ci,new A.Q(Date.now(),0,!1))
A.aeY(p,!0)
t.a.hk(p)
t.a.bn()
if(t.c==null){w=1
break}o=B.k.U(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&A.c()
m=q+C.afb(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?B.d.cG(t.cy,0,new C.d4G()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+B.k.aa(r,2)+" ("+n+"% \u2014 "+A.t(k)+" mistakes/missed)":"+$"+B.k.aa(r,2)+" ("+n+"% of full prize)"
q=t.a
C.u4(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return A.b(t.DU(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$Dj)
case 3:w=4
return A.b(C.aeQ(t.a.f,j),$async$Dj)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Dj,v)},
bVE(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.z7()
v=o.MX()}catch(u){return}if(v<=0||w<=0)return
t=B.k.E(w/v,0,1)
s=A.vY(B.k.aa(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=B.o.u(1000*Date.now())
p=o.a
r.hk(new A.d_(q,p.c.a,s,B.fw,B.f7,"Game partial: "+p.f+" ("+A.t(w)+"/"+A.t(v)+", left early)",n,n,B.ci,new A.Q(Date.now(),0,!1)))
o.a.bn()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.u4(s,n,"Left early \xb7 +$"+B.k.aa(s,2)+" ("+A.t(w)+"/"+A.t(v)+")",q,r,p,n,!0)},
a8p(d,e){return this.bJX(d,e)},
bJX(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a8p=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a9(0)
s=t.b1
if(s!=null)s.a9(0)
r=B.o.u(1000*Date.now())
s=t.a
q=s.c.a
p=s.x
s=s.f
o=Date.now()
t.a.hk(new A.d_(r,q,p,B.fw,B.f7,"Game payout: "+s+" (draw, stake returned)",null,null,B.ci,new A.Q(o,0,!1)))
t.a.bn()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.u4(o,null,"Draw. Your $"+B.k.aa(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.DU(d,"Nobody won, so your $"+B.k.aa(t.a.x,2)+" stake was returned.","DRAW",!1),$async$a8p)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8p,v)},
VQ(d,e){return this.bJY(d,e)},
a8q(d){return this.VQ(null,d)},
bJY(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$VQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a9(0)
s=t.b1
if(s!=null)s.a9(0)
s=t.a
r=s.c.a
q=s.f
s=s.x
C.u4(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return A.b(t.DU(d,e,"YOU LOSE",!1),$async$VQ)
case 3:case 1:return A.h(u,v)}})
return A.i($async$VQ,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&A.c()
w=B.o.al(m,60)
m=B.a.aU(B.o.u(B.o.F(m,60)),2,"0")
v=A.aF(n,n,n,n,B.aiw,n,n,n,new C.d5f(d),n,n,n,n,n,n)
if(o.ghr()){u=o.bB
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=A.D(A.d(u?t.f+" vs "+A.t(o.bB):t.f,n,2,B.a2,n,n,n,B.fS,n,n,n),1)
r=A.m(10)
q=x.p
r=A.B(A.a([v,s,A.p(n,C.anZ(new C.d5g(o),B.r3,t.c.a),B.f,n,n,new A.o(B.cQ,n,n,r,n,n,B.n),n,n,n,n,B.fL,n,n,n)],q),B.m,n,B.e,B.j,0,n,n)
t=o.a
s=t.w
v=A.m(10)
s=A.p(n,A.B(A.a([A.D(A.d("Win $"+B.k.aa(t.x*1.46,2)+" \xb7 stake $"+B.k.aa(o.a.x,2)+" \u2022 Progress "+o.z7()+"/"+o.MX(),n,n,n,n,n,n,D.eHJ,n,n,n),1),new C.an9(o.a.c.a,new C.d5h(o),n),B.aa,D.buu,B.d8,A.d(""+w+":"+m,n,n,n,n,n,n,B.oD,n,n,n)],q),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,n,v,n,new A.a5(B.a3,B.a7,B.x,s,n,n),B.n),n,n,n,n,B.h0,n,n,n)
v=o.a.w
m=A.U(v).k("J<1,w>")
m=A.A(new A.J(v,new C.d5i(),m),m.k("ai.E"))
w=A.m(14)
v=A.H(B.ba,B.r,1)
p=C.aMy(n,D.aZU,A.bp(!0,new A.C(Ae.VD,A.v(A.a([r,s,B.P,new A.fk(new C.d5j(o),n),B.ar,A.D(A.p(n,o.bJW(),B.f,n,n,new A.o(n,n,v,w,n,new A.a5(B.a3,B.a7,B.x,m,n,n),B.n),n,n,n,n,B.ck,n,n,n),1)],q),B.ah,n,B.e,B.j,0,B.p),n),!0,!1,B.ag,!0,!0))
if(!o.c4)return p
m=A.X(140,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255)
w=A.X(242,B.ik.l()>>>16&255,B.ik.l()>>>8&255,B.ik.l()&255)
v=A.m(18)
u=A.H(B.ba,B.r,1)
return new A.am(B.W,n,B.a9,B.q,A.a([p,A.bX(0,A.p(B.A,A.e1(A.p(n,A.v(A.a([D.euO,B.ab,A.d(o.cT,n,n,n,n,n,n,D.eJ7,B.L,n,n),B.ar,A.d(o.cf,n,n,n,n,n,n,D.eHs,B.L,n,n)],q),B.m,n,B.e,B.Q,0,B.p),B.f,n,n,new A.o(w,n,u,v,n,n,B.n),n,n,n,B.uu,B.wF,n,n,n),!1,n),B.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
bWC(){var w=this.k3
return A.ck(new C.d4E(this,w,B.k.dE(this.fr.length/w)))},
bJW(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.bWC()
if(m==="scramble"){m=o.r
m===$&&A.c()
w=x.l
return A.v(A.a([A.d(m,n,n,n,n,n,n,B.nO,n,n,n),A.d("Words "+o.bg+"/5",n,n,n,n,n,n,B.Cd,n,n,n),B.ab,A.d("Tap letters below to fill each slot",n,n,n,n,n,n,A.l(n,n,A.X(166,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.T,A.c9(B.fH,A.il(o.ay.length,new C.d4m(o),!0,w),B.by,6,6),B.aO,A.c9(B.fH,A.il(o.ch.length,new C.d4n(o),!0,w),B.by,8,8),B.aO,new A.a4(1/0,n,A.i6(D.f6g,o.gbzM(),A.fh(n,n,B.aB,n,n,n,n,n,n,B.c,n,n,B.cc,n,n,n,n,n,n,n)),n)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="typing"){m=o.w
m===$&&A.c()
return new C.apm(m,o.e,new C.d4o(o),new C.d4p(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&A.c()
m=A.a([A.d(m,n,n,n,n,n,n,B.nO,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(A.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,B.Cd,n,n,n))
m.push(B.ab)
if(o.a.e==="sequence"){w=o.aw
w===$&&A.c()
w+=", ?"}else w=o.CW
m.push(A.f_(B.A,A.d(w,n,n,n,n,n,n,B.oA,B.L,n,n),B.f,B.ds))
m.push(B.aO)
w=o.x
B.d.v(m,new A.J(w,new C.d4q(o),A.U(w).k("J<1,r>")))
return A.v(m,B.m,n,B.e,B.j,0,B.p)}if(m==="puzzle")return A.ck(new C.d4r(o))
if(m==="simon"){m=o.r
m===$&&A.c()
return A.v(A.a([A.d(m,n,n,n,n,n,n,B.nO,n,n,n),A.d("Progress "+o.p3+"/21",n,n,n,n,n,n,B.Cd,n,n,n),B.P,A.D(A.lJ(1,A.il(4,new C.d4s(o),!0,x.l),2,10,10,n,B.dM,!1),1)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="pattern")return A.ck(new C.d4t(o))
if(m==="color"){u=A.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[B.dC,B.du,B.hI,B.qJ]
m=o.r
m===$&&A.c()
m=A.d(m,n,n,n,n,n,n,B.nO,n,n,n)
w=A.d("Round "+o.b4+"/5",n,n,n,n,n,n,B.Cd,n,n,n)
v=o.aB
v===$&&A.c()
s=o.aM
s===$&&A.c()
s=A.a([m,w,B.ab,A.d(v,n,n,n,n,n,n,A.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.aO],x.p)
r=J.e_(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=A.fh(n,n,A.X(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,B.c,n,n,B.f0,n,n,n,n,n,n,n)
r[q]=new A.C(B.cN,new A.a4(1/0,n,A.i6(new A.x(u[q],n,B.cr,n,n,n,n,n,n,n,n,n),new C.d4u(o,u,q),m),n),n)}B.d.v(s,r)
return A.v(s,B.m,n,B.e,B.j,0,B.p)}if(m==="reflex"){m=o.y
p=m?B.bl:B.cf
w=o.r
w===$&&A.c()
w=A.d(w,n,n,n,n,n,n,B.a4D,B.L,n,n)
v=A.d("Fast taps "+o.Y+"/5",n,n,n,n,n,n,D.eF0,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=A.d(m,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,n,n,n,Math.min(A.aH(s,B.bR,x.w).w.a.a*0.18,72),n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return A.r_(A.aG(B.c5,A.dg(n,A.v(A.a([w,B.P,v,B.b8,s,B.b8,new A.C(B.DW,A.d(m,n,n,n,n,n,n,A.l(n,n,A.X(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),B.m,n,B.b7,B.j,0,B.p),p,n,B.b9,n,T.zN,n,n,n,n,n,n,n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gbPl(),n,n,n,n,n,n,!1,B.ad))}if(B.d.t(D.Od,m)&&o.aZ!=null){m=o.a.e
w=o.aZ
w.toString
return C.hGo(m,new C.d4v(o),new C.d4w(o),o.d,w)}m=o.r
m===$&&A.c()
return A.au(A.d(m,n,n,n,n,n,n,B.dj,n,n,n),n,n,n)}}
C.ajD.prototype={
S(){return new C.bdd()},
cIr(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bdd.prototype={
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.a,a0=d.c,a1=d.d
d=A.aH(a2,B.e6,x.w).w
w=x.p
v=A.a([A.bKh(!1,f.a.r,"INVESTMENT PLANS",e),B.d5],w)
u=a0.x
if(u!=null){t=u.d.bQ()
s=B.a.aU(B.o.u(A.bE(t)),2,"0")
r=B.a.aY(B.o.u(A.bw(t)+1),2)
q=A.m(18)
p=A.H(D.ab2,B.r,2.2)
o=x.V
n=A.a([new A.ab(0,B.G,A.X(89,B.q8.l()>>>16&255,B.q8.l()>>>8&255,B.q8.l()&255),B.eP,20),new A.ab(0,B.G,A.X(102,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dq,14)],o)
m=A.an(e,A.p(e,e,B.f,e,e,new A.o(A.X(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),e,e,e,e,e,B.a6),e,120,e,e,e,e,e,120),e,e,e,-20,-24,e)
l=A.m(10)
k=A.H(D.ab2,B.r,3.4)
o=A.a([new A.ab(0,B.G,A.X(166,B.q8.l()>>>16&255,B.q8.l()>>>8&255,B.q8.l()&255),B.dz,10),new A.ab(0,B.G,A.X(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cF,6)],o)
o=A.B(A.a([A.p(e,e,B.f,e,e,new A.o(e,e,k,l,o,new A.a5(B.ax,B.aC,B.x,D.cOn,D.crp,e),B.n),e,42,e,e,e,e,e,56),B.b8,f.b2b(a2,!0)],w),B.m,e,B.e,B.j,0,e,e)
l=A.Co(u.a,1,B.a2,D.eM6)
k=u.b
j=u.c
i=A.Co("Making $"+A.dx(k*j)+" Daily",1,B.a2,D.eMj)
h=A.Co(f.aYj(k),1,B.a2,D.eFI)
r=A.B(A.a([A.D(A.v(A.a([D.f_W,A.Co(a0.c,1,B.a2,D.aL3)],w),B.F,e,B.e,B.j,0,B.p),1),A.v(A.a([D.f_I,A.d(s+"/"+r,e,e,e,e,e,e,D.aL3,e,e,e)],w),B.dG,e,B.e,B.j,0,B.p)],w),B.m,e,B.e,B.j,0,e,e)
s=A.p(e,e,B.f,A.X(89,D.wa.l()>>>16&255,D.wa.l()>>>8&255,D.wa.l()&255),e,e,e,1,e,e,e,e,e,e)
j=A.B(A.a([f.aoc("INVESTED","$"+A.dx(k),!0),f.aoc("DAILY ROI",B.k.aa(j*100,2)+"%",!0),f.aoc("DAYS LEFT",""+(261-u.f)+" d",!0)],w),B.m,e,B.hG,B.j,0,e,e)
k=A.dx(u.e)
u=u.f
g=261-u>0?"ACTIVE":"ENDED"
B.d.v(v,A.a([D.f5S,B.tO,A.p(e,new A.am(B.W,e,B.a9,B.q,A.a([m,A.v(A.a([o,B.P,D.eZv,B.bB,l,B.av,i,B.av,h,B.P,r,B.ar,s,B.ar,j,B.av,A.Co("Earned $"+k+" \u2022 Clocked "+u+"/261 \u2022 "+g,1,B.a2,D.eLv)],w),B.F,e,B.e,B.Q,0,B.p)],w),e),B.f,e,e,new A.o(e,e,p,q,n,D.bJ0,B.n),e,e,e,e,B.bC,e,e,1/0),B.a3V],w))}v.push(D.eS1)
v.push(B.tO)
B.d.v(v,new A.J(a1,new C.d8C(f,a2),A.U(a1).k("J<1,r>")))
return A.ce(e,B.K,A.bp(!1,A.ci(A.v(v,B.F,e,B.e,B.j,0,B.p),B.q,e,B.z,e,new A.N(20,10,20,124+d.r.d),e,e,B.ak),!0,!1,B.ag,!0,!0),e,!1,!1,e,e)},
b2b(d,e){var w=null,v=A.X(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(8),t=A.H(B.j3,B.r,1)
return A.p(w,A.B(A.a([A.W(B.agv,B.c,w,w,w,16),B.d8,A.d("TAP",w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eC,w,w,w)},
aYj(d){var w=B.a.aU(B.o.u(B.k.U(d*100)),4,"0")
return"****  ****  ****  "+B.a.aY(w,w.length-4)},
aoc(d,e,f){var w=null,v=A.X(217,D.wa.l()>>>16&255,D.wa.l()>>>8&255,D.wa.l()&255)
v=A.d(d,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.v(A.a([v,B.bB,A.Co(e,w,w,A.l(w,w,E.zx,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),B.F,w,B.e,B.j,0,B.p)},
cbu(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gcMG(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
w=A.H(B.aN,B.r,2)
p=x.V
o=A.a([new A.ab(0,B.G,A.X(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.PY,16),new A.ab(0,B.G,A.X(115,B.aj.l()>>>16&255,B.aj.l()>>>8&255,B.aj.l()&255),B.dq,14),new A.ab(0,B.G,A.X(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cF,8)],p)
n=A.an(d,A.p(d,d,B.f,d,d,new A.o(d,d,d,d,d,new A.bR(B.A,0.5,B.x,d,0,A.a([A.X(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),A.X(0,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)],x.O),d,d),B.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=A.m(5)
l=A.H(B.c,B.r,2.2)
k=A.aZ(4286436348)
k=A.X(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=A.X(B.k.U(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
i=A.aZ(4279150057)
h=x.p
p=A.B(A.a([new A.a4(44,44,new A.am(B.W,d,B.a9,B.f,A.a([A.an(d,A.ev(B.A,0.7853981633974483,A.p(d,d,B.f,d,d,new A.o(d,d,l,m,A.a([new A.ab(0.5,B.G,k,B.J,14),new A.ab(0,B.G,j,B.J,6),new A.ab(0,B.G,A.X(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new A.u(0,2),4)],p),D.bHI,B.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.dWf],h),d),d),B.b8,e.b2b(b2,!0)],h),B.m,d,B.e,B.j,0,d,d)
a6=A.Co(a6,1,B.a2,D.eCD)
i=A.Co(e.aYj(a3),1,B.a2,D.eQu)
j=A.B(A.a([e.aXL(B.k.aa(2.86,2)+"%"),B.et,e.aXL("261d")],h),B.m,d,B.e,B.j,0,d,d)
k=A.D(A.v(A.a([D.eTc,A.Co("$"+A.dx(a3),1,B.a2,D.ePj)],h),B.F,d,B.e,B.j,0,B.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=A.B(A.a([k,A.d(m,d,d,d,d,d,d,D.eDn,d,d,d)],h),B.dG,d,B.e,B.j,0,d,d)
k=A.p(d,d,B.f,A.X(89,B.bu.l()>>>16&255,B.bu.l()>>>8&255,B.bu.l()&255),d,d,d,1,d,d,d,d,d,d)
l=A.B(A.a([A.D(e.ava("Daily","$"+A.dx(a4)),1),B.et,A.D(e.ava("Total","$"+A.dx(a4*261)),1),B.et,A.D(e.ava("Days","261"),1)],h),B.m,d,B.e,B.j,0,d,d)
g=q?d:new C.d8B(e,b3,a3,t)
f=B.k.U(127.5)
f=A.fh(d,d,B.bj,A.X(f,B.aj.l()>>>16&255,B.aj.l()>>>8&255,B.aj.l()&255),A.X(f,B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255),d,3,d,d,B.aN,d,d,d,d,new A.b6(A.m(10),D.aQH),d,d,d,d,d)
return A.p(d,new A.am(B.W,d,B.a9,B.f,A.a([n,A.v(A.a([p,B.bB,D.f0B,B.bB,a6,B.d6,i,B.h7,j,B.h7,m,B.h7,k,B.h7,l,B.P,new A.a4(1/0,40,A.i6(A.f_(B.A,A.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.eDL,d,d,d),B.f,B.ec),g,f),d)],h),B.F,d,B.e,B.Q,0,B.p)],h),d),B.f,d,d,new A.o(d,d,w,a0,o,D.bJz,B.n),d,d,d,B.kx,D.bgY,d,d,1/0)},
aXL(d){var w=null,v=A.X(115,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(5),t=A.H(B.cm,B.r,1)
return A.p(w,A.d(d,w,w,w,w,w,w,D.eD0,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.E9,w,w,w)},
ava(d,e){var w=null,v=A.X(97,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(7),t=A.H(B.aJ,B.r,1)
return A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,D.eLS,w,w,w),B.tP,A.f_(B.a3,A.d(e,w,w,w,w,w,w,D.eOo,w,w,w),B.f,B.ds)],x.p),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.m0,w,w,w)}}
C.afY.prototype={
S(){var w=null,v=A.a([],x._),u=$.av()
return new C.auN(v,new A.ar(B.as,u),new A.ar(B.as,u),A.mf(0,w,w),new A.hS(),D.Pq,C.aeN(),A.a([],x.fw),A.b_(x.N),A.mf(0,w,w))}}
C.auN.prototype={
Z(){var w,v,u,t,s,r=this
r.a0()
w=r.a
w.toString
r.d=0
v=A.yJ(0,1)
r.e!==$&&A.aQ()
r.e=v
r.ay=w.f.aB
w=r.k3=A.bj(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t].a
if(s.length!==0)u.K(0,s)}r.a9M()
r.Nh()
r.anP()
r.cnT()
r.co7()
$.aT.x1$.push(new C.cxx(r))
r.a.toString},
Nh(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Nh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.anA(),$async$Nh)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cwS(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Nh,v)},
gawL(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gNd())return!0
return!1},
gNd(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaR9(){var w,v=this.CW
if(v==null)return B.bw
w=v.bv(new A.Q(Date.now(),0,!1))
return w.a<0?B.bw:w},
bvr(){var w=this
if(w.a.c.w)return
if(w.gNd()){if(!w.cx)w.n(new C.cwI(w))}else if(w.cx)w.n(new C.cwJ(w))},
chr(){this.n(new C.cx1(this))},
t3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$t3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.n(new C.cwZ(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.n(new C.cx_(t))
w=1
break}w=3
return A.b(C.c4K(o.a,s),$async$t3)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return A.b(C.c4L(t.a.c.a,s),$async$t3)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.n(new C.cx0(t,r,q))
t.cpQ()
t.bvr()
if(r===3)t.WR(r)}case 1:return A.h(u,v)}})
return A.i($async$t3,v)},
WR(d){return this.bWt(d)},
bWt(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$WR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return A.b(C.bzX(q,r,new C.cwU(t),d,s.c.a),$async$WR)
case 3:case 1:return A.h(u,v)}})
return A.i($async$WR,v)},
wu(d){return this.bwT(d)},
anP(){return this.wu(!1)},
bwT(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$wu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return A.b(A.a60(k,C.h5q(l.d)),$async$wu)
case 3:j=m
w=4
return A.b(C.c59(k),$async$wu)
case 4:s=j.a=f
w=5
return A.b(A.aon(k),$async$wu)
case 5:r=f
w=!s.a&&J.cu(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.TA(!0,l,q,p)
m.a=s
w=8
return A.b(C.anC(k,s),$async$wu)
case 8:case 7:w=9
return A.b(C.SA(k),$async$wu)
case 9:o=f
w=10
return A.b(C.a5o(k),$async$wu)
case 10:n=f
if(t.c==null){w=1
break}t.n(new C.cwK(m,t,r,o,n))
case 1:return A.h(u,v)}})
return A.i($async$wu,v)},
Ou(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ou=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Nh(),$async$Ou)
case 3:s=t.c
if(s==null){w=1
break}r=A.eF(new C.cwX(t),!1,null,x.H)
w=4
return A.b(A.a9(s,!1).cp(r),$async$Ou)
case 4:w=5
return A.b(t.Nh(),$async$Ou)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Ou,v)},
crS(){this.n(new C.cxk(this))},
co7(){var w=this,v=w.go
if(v!=null)v.a9(0)
if(w.a.c.w)return
w.go=A.dD(B.qn,new C.cxe(w))},
cpQ(){var w=this,v=w.id
if(v!=null)v.a9(0)
w.id=null
if(!w.gNd()||w.CW==null)return
w.id=A.dD(B.h9,new C.cxh(w))},
cnT(){var w=this,v=w.fy
if(v!=null)v.a9(0)
w.fy=A.dD(B.j4,new C.cxd(w))
w.DZ()},
DZ(){return this.cpP()},
cpP(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$DZ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aB
t=4
w=7
return A.b(A.ax(),$async$DZ)
case 7:q=e
p=A.aS(J.q(q.a,"app_config"))
if(p!=null&&p.length!==0){o=B.R.aF(0,p,null)
if(x.f.b(o)){m=A.C9(A.a_(o,x.N,x.z)).aB
i.a=m
r.a.f.aB=m}}w=10
return A.b(A.JG(),$async$DZ)
case 10:w=e?8:9
break
case 8:w=11
return A.b(A.aMx(),$async$DZ)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aB=l
w=14
return A.b(q.aq("String","app_config",B.R.am(k.ac(),null)),$async$DZ)
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
break}if(i.a!==r.ay)r.n(new C.cxf(i,r))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DZ,v)},
b17(){B.d.b_(this.f,new C.cxc())},
a9M(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a9M=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Lr(t.a.c.a),$async$a9M)
case 3:q=e
if(t.c==null){w=1
break}s=A.a([],x._)
if(J.cu(q)){B.d.v(s,q)
B.d.b_(s,new C.cwP())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(A.E(["role","ai","text",r,"at",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.z))}t.n(new C.cwQ(t,s))
t.a_t(!0)
A.bN(B.jj,new C.cwR(t),x.H)
case 1:return A.h(u,v)}})
return A.i($async$a9M,v)},
adc(){var w=0,v=A.j(x.H),u=this
var $async$adc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.alq(u.a.c.a,u.f),$async$adc)
case 2:return A.h(null,v)}})
return A.i($async$adc,v)},
bq(d){this.bD(d)},
q(){var w,v=this,u=v.fy
if(u!=null)u.a9(0)
u=v.go
if(u!=null)u.a9(0)
u=v.id
if(u!=null)u.a9(0)
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
v.a2()},
a8M(d){var w,v=this
v.n(new C.cwN(v,d))
w=v.e
w===$&&A.c()
if(w.f.length!==0)w.A6(d,B.cp,B.kv)
else $.aT.x1$.push(new C.cwO(v,d))
if(d===0)v.a_t(!0)
if(d===1)v.cjl(!0)},
a_t(d){$.aT.x1$.push(new C.cx4(this,d))},
awo(){return this.a_t(!1)},
ZN(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_f(),$async$ZN)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==B.a.i(t.a.f.r))t.n(new C.cwY(t))
case 1:return A.h(u,v)}})
return A.i($async$ZN,v)},
mt(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$mt=A.e(function(c8,c9){if(c8===1){s.push(c9)
w=t}for(;;)switch(w){case 0:c5=B.a.i(q.r.a.a)
if(J.aa(c5)===0){w=1
break}a8=q.a
a9=a8.c
w=!a9.w?3:4
break
case 3:b0=a8.f.xr
w=b0>0?5:6
break
case 5:w=9
return A.b(C.anv(a9.a,b0),$async$mt)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return A.b(q.t3(),$async$mt)
case 10:q.n(new C.cx5(q))
w=1
break
case 8:w=11
return A.b(q.t3(),$async$mt)
case 11:if(q.c!=null&&q.ch===3)q.WR(3)
case 6:case 4:q.n(new C.cx6(q,c5))
C.Sn(q.a.c.a,"user",c5)
q.awo()
t=13
a8={}
w=16
return A.b(q.ZN(),$async$mt)
case 16:b1=B.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return A.b(A.a_f(),$async$mt)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.n(new C.cx7(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.by4("",null)
q.n(new C.cx8(q,p))
C.Sn(q.a.c.a,"ai",p)
q.awo()
r=[1]
w=14
break}o=A.mL(a9)
a9=q.a
n=""
m=C.h5q(a9.d)
w=C.h5j(c5)?20:21
break
case 20:w=22
return A.b(C.c58(q.a.c.a),$async$mt)
case 22:q.db=c9
w=23
return A.b(q.wu(!0),$async$mt)
case 23:case 21:w=24
return A.b(A.a60(q.a.c.a,m),$async$mt)
case 24:l=c9
k=C.hn4(l)
a9=k
b2=Date.now()
b3=new A.Q(b2,0,!1).bQ()
b2=B.a.aU(B.o.u(A.bE(b3)),2,"0")
b4=B.a.aU(B.o.u(A.bO(b3)),2,"0")
b5=B.a.aU(B.o.u(A.dj(b3)),2,"0")
b6=B.a.aU(B.o.u(A.fY(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+A.bw(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return A.b(C.SA(q.a.c.a),$async$mt)
case 25:i=c9
h=C.fQS(i,25)
w=26
return A.b(C.a5o(q.a.c.a),$async$mt)
case 26:g=c9
f=C.fSv(g)
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
return A.b(C.aeO(a9,q.a.c.a,c5),$async$mt)
case 27:a0=c9
a1=""
if(C.h5j(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:B.a.i(b2).length!==0)===!0){b2.toString
b8=B.a.i(b2)}else{a9=a9.c
b8=B.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=A.t(d)
b4=A.t(j)
b5=q.a.c.w?"\n"+C.hJ8(m)+"\n":""
b6=J.aa(n)!==0?"\n"+A.t(n)+"\n":""
b9=J.aa(a0)!==0?"\n"+A.t(a0)+"\n":""
c0=A.t(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hht(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+A.t(c5)
w=28
return A.b(A.qm(o,a2,B.he,null),$async$mt)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.by4(a8.a,a3.a)
a4=c2
a5=A.h4G(a4)
c3=a5.a
a8.b=c3
if(B.d.gai(c3)){a9=A.A(C.hLR(c5),x.an)
a6=a9
J.fU(a6,C.hLS(c5))
J.fU(a6,C.hLT(c5))
J.fU(a6,A.h48(c5))
J.fU(a6,C.hLW(c5,q.a.c.w))
a8.b=a6}c3=C.hL4(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return A.b(A.af3(c3,a6,m,q.a.c.a),$async$mt)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.n(new C.cx9(a8,q,a7))
C.Sn(q.a.c.a,"ai",a7)
if(J.cu(a8.b)&&q.c!=null)q.Ir(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.n(new C.cxa(q))
C.Sn(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.n(new C.cxb(q))
q.awo()
q.adc()
if(!q.a.c.w)q.t3()
w=r.pop()
break
case 15:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$mt,v)},
cau(d){var w=A.T(x.N,x.z)
w.m(0,"type",d.a)
w.v(0,d.b)
return w},
cav(d){var w,v,u,t,s,r,q,p=J.q(d,"phoneActions")
if(!x.j.b(p))return B.i7
w=A.a([],x.Z)
for(v=J.aU(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gT(v)
if(u.b(r)){q=A.c8f(A.a_(r,t,s))
if(q!=null)w.push(q)}}return w},
Ir(d){return this.chV(d)},
chV(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ir=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J.aU(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gT(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return A.b(C.aeZ(p,o,new C.cx2(t,p)),$async$Ir)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return A.b(A.Fs(p,null,o,!1,!0,t.a.c.a),$async$Ir)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.I(r).f
p.P(new A.b0(new A.x(m,null,null,null,null,null,null,null,null,null,null,null),B.cf,null,null,null,null,null,null,null,null,null,null,null,B.nt,!1,null,null,null,B.q,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return A.b(A.Fs(p,l.f,o,k,n,j),$async$Ir)
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
return A.b(C.aVo(p,A.a([new C.qO("out_"+1000*o,new A.Q(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$Ir)
case 14:t.anP()
case 13:p=t.c.I(r).f
p.P(new A.b0(new A.x(m,null,null,null,null,null,null,null,null,null,null,null),B.d1,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null))
w=3
break
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ir,v)},
Qb(d){return this.cqi(d)},
cqi(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Qb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return A.b(C.aeZ(d,n,new C.cxj(t)),$async$Qb)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return A.b(A.Fs(d,null,n,!1,!0,t.a.c.a),$async$Qb)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.I(x.q).f.P(A.b1(null,null,null,B.cf,null,B.q,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.nt,null,null,null,null,null,null,null,null,null,null))
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
return A.b(A.Fs(d,q.f,r,p,n,o),$async$Qb)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.I(x.q).f.P(A.b1(null,null,null,B.d1,null,B.q,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Qb,v)},
cjl(d){$.aT.x1$.push(new C.cx3(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.M(d).ax.a===B.H,j=k?B.da:B.zD,i=m.d
i===$&&A.c()
w=x.O
w=k?A.a([B.abr,D.b3U],w):A.a([B.aL,B.rs],w)
v=A.m(22)
u=A.a([new A.ab(0,B.G,A.X(71,B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255),B.ct,16)],x.V)
t=m.a.c.w?m.gc6f():l
s=A.X(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
r=A.H(B.c1,B.r,1.5)
t=A.aG(l,A.p(l,C.fH0(m.a.f.Q,48),B.f,l,l,new A.o(s,l,r,l,l,l,B.a6),l,48,l,l,l,l,l,48),B.z,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,B.ad)
r=A.d("NGMY Helper",l,1,B.a2,l,l,l,B.dP,l,l,l)
s=A.p(l,l,B.f,l,l,D.aSM,l,8,l,l,l,l,l,8)
if(m.gawL()&&m.d===0)q=m.gNd()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=A.p(l,A.B(A.a([t,B.be,A.D(A.v(A.a([r,B.bB,A.B(A.a([s,B.bq,A.D(A.d(q,l,1,B.a2,l,l,l,A.l(l,l,A.X(B.k.U(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,B.cq,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),1),A.aF(l,l,l,l,B.m9,l,l,l,new C.cxp(d),l,l,l,l,l,l)],p),B.m,l,B.e,B.j,0,l,l),B.f,l,l,new A.o(l,l,l,v,u,new A.a5(B.ax,B.aC,B.x,w,l,l),B.n),l,l,l,G.ad5,D.bhF,l,l,l)
v=k?D.rt:B.c
u=A.m(14)
t=A.H(k?B.bG:B.e2,B.r,1)
u=A.p(l,A.B(A.a([m.bzx(),m.cq1(1,B.lw,"Music")],p),B.m,l,B.e,B.j,0,l,l),B.f,l,l,new A.o(v,l,t,u,l,l,B.n),l,l,l,l,B.ej,l,l,l)
t=m.e
t===$&&A.c()
if(m.gawL()){v=A.a([],p)
if(m.gNd()){s=A.X(38,B.d1.l()>>>16&255,B.d1.l()>>>8&255,B.d1.l()&255)
r=A.m(12)
q=A.H(A.X(115,B.d1.l()>>>16&255,B.d1.l()>>>8&255,B.d1.l()&255),B.r,1)
v.push(new A.C(B.Kj,A.p(l,A.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hlp(m.gaR9())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.eNS,B.L,l,l),B.f,l,l,new A.o(s,l,q,r,l,l,B.n),l,l,l,l,B.eq,l,l,1/0),l))}if(m.cy&&!m.gNd()){s=A.X(31,B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255)
r=A.m(12)
q=A.m(12)
o=A.W(B.t3,k?B.iL:B.fW,l,l,l,16)
v.push(new A.C(B.Kj,A.aD(!1,B.a1,!0,r,A.aI(!1,q,!0,new A.C(B.eq,A.B(A.a([o,B.bq,A.d("Back to NGMY Helper AI",l,l,l,l,l,l,A.l(l,l,k?B.iL:B.fW,l,l,l,l,l,l,l,l,12,l,l,B.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),B.m,l,B.b7,B.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gchq(),l,l,l,l,l,l,l),B.f,s,0,l,l,l,l,l,B.ac),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcrR():l
v.push(A.D(new C.any(s,q,new C.cxq(),r,o,l),1))
v=A.v(v,B.m,l,B.e,B.j,0,B.p)}else v=m.bzy(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.fTn(r)
t=A.a([w,B.ab,new A.C(B.it,u,l),B.P,A.D(A.fUm(A.a([v,new C.anB(q,o,n,new C.cxr(m,d),s,l)],p),B.q,t,B.z,new C.cxs(m),l),1)],p)
if(m.d===0&&!m.gawL()){w=A.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a_B:D.a__
w.push(new A.a4(l,36,A.hI(l,new C.cxt(m),v.length,l,l,B.b_,new C.cxu(),!1),l))}if(m.ax&&m.f.length<=1)w.push(B.P)
v=m.r
u=A.l(l,l,k?B.c:B.bh,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=A.l(l,l,k?B.az:B.dx,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?B.w:B.c
r=A.X(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=A.m(22)
o=A.m(22)
n=k?B.ba:B.f5
u=A.D(A.aK(l,B.U,!1,l,!0,B.q,l,A.aL(),v,l,l,l,l,l,2,A.bn(l,new A.b3(4,q,B.Z),l,B.zX,l,l,l,l,!0,new A.b3(4,o,new A.ay(n,1,B.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.z,!0,l,!0,l,!1,l,B.ai,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cxv(m),l,!1,l,l,!1,l,!0,l,B.a8,l,l,l,l,l,l,l,l,l,l,l,u,!0,B.a5,l,B.am,l,B.aK_,l,l),1)
s=m.at
r=s?l:m.gckl()
w.push(A.B(A.a([u,new A.Ht(v,B.aL,l),B.bq,A.aD(!1,B.a1,!0,l,A.aI(!1,l,!0,new A.a4(44,44,s?D.dQ6:P.aio,l),B.cI,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),B.f,B.aL,0,l,l,B.cI,l,l,B.ac)],p),B.dG,l,B.e,B.j,0,l,l))
w=A.v(w,B.m,l,B.e,B.Q,0,B.p)
v=k?B.kW:B.c
t.push(A.tr(B.pY,A.p(l,new A.C(B.DY,w,l),B.f,l,l,new A.o(v,l,A.H(k?A.X(41,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.X(18,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.r,1),B.pY,l,l,B.n),l,l,l,l,l,l,l,l),14,!1))}return new A.Ut(i,new C.cxw(m),A.ce(l,j,A.bp(!0,A.v(t,B.m,l,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),l,!1,!1,l,l),l)},
bzx(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===0
p=this.c
p.toString
v=A.M(p).ax.a===B.H
if(w)p=A.X(B.k.U(255*(v?0.25:0.12)),B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255)
else p=B.K
u=A.m(11)
t=w?A.H(A.X(B.k.U(127.5),B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255),B.r,1):q
s=A.W(B.t5,w?B.aL:B.cU,q,q,q,17)
if(w)r=v?B.c:B.aE
else r=B.cU
return A.D(A.aG(q,A.dg(q,A.B(A.a([s,B.bq,A.d("Chat",q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.b7,B.j,0,q,q),q,q,B.b9,new A.o(p,q,t,u,q,q,B.n),B.eK,q,q,q,B.wx,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cwL(this),q,q,q,q,q,q,!1,B.ad),1)},
cq1(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===d
p=this.c
p.toString
v=A.M(p).ax.a===B.H
if(w)p=A.X(B.k.U(255*(v?0.25:0.12)),B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255)
else p=B.K
u=A.m(11)
t=w?A.H(A.X(B.k.U(127.5),B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255),B.r,1):q
s=A.W(e,w?B.aL:B.cU,q,q,q,17)
if(w)r=v?B.c:B.aE
else r=B.cU
r=A.a([s,B.bq,A.d(f,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return A.D(A.aG(q,A.dg(q,A.B(r,B.m,q,B.b7,B.j,0,q,q),q,q,B.b9,new A.o(p,q,t,u,q,q,B.n),B.eK,q,q,q,B.wx,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cxi(this,d),q,q,q,q,q,q,!1,B.ad),1)},
bzy(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.b8D:A.X(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
w=A.m(18)
v=A.H(d?B.dw:B.aJ,B.r,1)
u=q===0?1:q
return A.p(s,A.jW(!0,s,t.ok,new C.cwM(t,e,d),u,s,B.c4,s,s,!1,!1),B.f,s,s,new A.o(r,s,v,w,s,s,B.n),s,s,s,B.it,s,s,s,s)},
aKT(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a8(d),m=J.y(n.h(d,"role"),"user"),l=m?B.i7:this.cav(d),k=m?B.mc:B.e,j=x.p,i=A.a([],j),h=!m
if(h)B.d.v(i,A.a([new A.a4(28,28,C.fH0(this.a.f.Q,28),o),B.aa],j))
w=m?B.dG:B.F
j=A.a([],j)
if(h)j.push(D.dQm)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=B.aL
else u=e?B.UC:B.aN
t=m?16:4
s=m?4:16
if(m)r=o
else r=A.H(e?B.bG:B.aJ,B.r,1)
q=A.a([new A.ab(0,B.G,A.X(10,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dz,6)],x.V)
if(f)n=A.d("typing\u2026",o,o,o,o,o,o,A.l(o,o,e?B.az:B.dx,o,o,o,o,o,o,o,o,12,B.cA,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=B.c
else p=e?B.af:B.bj
p=A.d(n,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(A.fD8(m,A.p(o,n,B.f,o,o,new A.o(u,o,r,new A.bv(B.kP,B.kP,new A.aY(t,t),new A.aY(s,s)),q,o,B.n),o,o,o,o,Ab.VG,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(A.h4L(l,e,this.gcqh()))
i.push(new A.dm(1,B.cl,A.v(j,w,o,B.e,B.j,0,B.p),o))
if(m)i.push(B.d8)
return new A.C(B.db,A.B(i,B.dG,o,k,B.j,0,o,o),o)},
bzw(d,e){return this.aKT(d,e,!1)}}
C.aHD.prototype={
Z(){this.a0()
$.xU().aK(0,this.gDd())},
q(){$.xU().a1(0,this.gDd())
this.a2()}}
C.aHE.prototype={
Z(){this.a0()
$.xU().aK(0,this.gDd())},
q(){$.xU().a1(0,this.gDd())
this.a2()}}
C.aHF.prototype={
Z(){this.a0()
$.xU().aK(0,this.gDd())},
q(){$.xU().a1(0,this.gDd())
this.a2()}}
C.aIB.prototype={
Z(){this.a0()
$.xU().aK(0,this.gDd())},
q(){$.xU().a1(0,this.gDd())
this.a2()}}
C.Ui.prototype={
a3(){return"NgmySnapshotResolveOutcome."+this.b}}
C.ala.prototype={
S(){return new C.azC()}}
C.azC.prototype={
Z(){var w,v=this
v.a0()
w=v.a
v.d=w.d
v.e=A.bj(w.e,!0,x.o)
v.f=v.a.f},
kt(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.P(A.b1(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
zk(d,e){return this.cve(d,e)},
cve(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$zk=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.n(new C.dp5(q,e))
t=3
w=6
return A.b(d.$0(),$async$zk)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.n(new C.dp6(q))
w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$zk,v)},
zJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$zJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=t.d
q===$&&A.c()
w=3
return A.b(A.u7(r,q),$async$zJ)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.doX(t,s))
case 1:return A.h(u,v)}})
return A.i($async$zJ,v)},
a7k(){var w=0,v=A.j(x.gE),u,t=this,s,r,q,p
var $async$a7k=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.zJ(),$async$a7k)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&A.c()
q=t.e
q===$&&A.c()
p=t.f
p===$&&A.c()
u=A.Md(s,A.Iy(A.bUC(r,q,s,p).eF(),null,"  "))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a7k,v)},
VA(){var w=0,v=A.j(x.H),u,t=this,s
var $async$VA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oD(s,t.a.c,!1),$async$VA)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zk(new C.doV(t),"Preparing download\u2026"),$async$VA)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VA,v)},
X1(){var w=0,v=A.j(x.H),u,t=this,s
var $async$X1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oD(s,t.a.c,!1),$async$X1)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zk(new C.dp4(t),"Creating QR code\u2026"),$async$X1)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X1,v)},
X0(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hE6(r),$async$X0)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.zk(new C.doU(t,s),"Looking up code\u2026"),$async$X0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X0,v)},
aaB(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$aaB=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.ws.c2().Ky(B.Ow,B.rZ,!0),$async$aaB)
case 7:r=e
p=r
q=p==null?null:J.fj(p.a)
if(q==null){u=null
w=1
break}if(q.c!=null){p=q.c
p.toString
p=!B.aG.gai(p)}else p=!1
if(p){p=q.c
p.toString
p=A.jf(p,0,null)
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
case 6:u=A.Fo()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aaB,v)},
yZ(d,e,f){return this.bBR(d,e,f)},
aM6(d,e){return this.yZ(d,!1,e)},
bBQ(d){return this.yZ(d,!1,!1)},
bBR(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$yZ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(t.zJ(),$async$yZ)
case 3:if(t.c==null){w=1
break}if(!C.bUH(d,t.a.c,null)){t.kt(C.bUI(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&A.c()
s=!C.hha(d,s)}if(s){t.kt(y.B)
w=1
break}r=d.as
q=J.cj(r)
s=t.c
s.toString
w=4
return A.b(C.hEj(s,q,t.a.c,d),$async$yZ)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=A.lu(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,B.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&A.c()
r=o}w=5
return A.b(A.qS(s,p,r,!1,null,null,d.ax),$async$yZ)
case 5:if(t.c==null){w=1
break}t.n(new C.doT(t,p,r,d))
t.kt("Restored your local Growth Income. Go back to see it updated.")
case 1:return A.h(u,v)}})
return A.i($async$yZ,v)},
aaA(){var w=0,v=A.j(x.H),u=this
var $async$aaA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.zk(new C.doW(u),"Reading file\u2026"),$async$aaA)
case 2:return A.h(null,v)}})
return A.i($async$aaA,v)},
UV(d){return this.bD6(d)},
bD6(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$UV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&A.c()
s=new A.d_("local_qr_dep_"+1000*r,q.a,d,B.fn,B.f7,"Admin deposit ($"+A.dx(d)+")",null,null,B.ci,new A.Q(Date.now(),0,!1))
C.c7a(t.d,s)
q=t.e
q===$&&A.c()
r=A.A(q,x.o)
r.push(s)
w=3
return A.b(A.qS(t.a.c,t.d,r,!0,null,null,null),$async$UV)
case 3:w=4
return A.b(t.zJ(),$async$UV)
case 4:if(t.c==null){w=1
break}t.kt("Deposited $"+A.dx(d)+" to your local wallet.")
case 1:return A.h(u,v)}})
return A.i($async$UV,v)},
b0x(d){var w=null
return A.ch(w,w,!0,w,new C.dp2(),d,w,!0,!0,x.N)},
U2(d){return this.bvl(d)},
bvl(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$U2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return A.b(t.UV(d.b),$async$U2)
case 5:w=1
break
case 4:s=d.c
t.kt(s==null?"Could not apply deposit.":s)
case 1:return A.h(u,v)}})
return A.i($async$U2,v)},
Dy(d){return this.cf5(d)},
cf5(d){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Dy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.zJ(),$async$Dy)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return A.b(C.aYf(d,t.a.c),$async$Dy)
case 4:s=f
if(!s.a){u=!1
w=1
break}if(s.b){t.kt("This deposit code was already used.")
u=!0
w=1
break}if(s.d){t.kt(y.y)
u=!0
w=1
break}if(s.c){t.kt(y.j)
u=!0
w=1
break}r=t.c
if(r==null){u=!0
w=1
break}w=5
return A.b(t.b0x(r),$async$Dy)
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
return A.b(C.c73(d,o,n.a,r,p),$async$Dy)
case 7:w=6
return A.b(t.U2(f),$async$Dy)
case 6:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Dy,v)},
Dz(d){return this.cf6(d)},
cf6(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Dz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.zJ(),$async$Dz)
case 3:if(t.c==null){w=1
break}w=4
return A.b(C.c72(d,t.a.c),$async$Dz)
case 4:s=f
if(!s.a){t.kt(y.m)
w=1
break}if(s.b){t.kt("This deposit code was already used.")
w=1
break}if(s.d){t.kt(y.y)
w=1
break}if(s.c){t.kt(y.j)
w=1
break}r=t.c
if(r==null){w=1
break}w=5
return A.b(t.b0x(r),$async$Dz)
case 5:q=f
if(q==null||B.a.i(q).length===0){w=1
break}r=t.a.c
p=B.a.i(q)
o=t.e
o===$&&A.c()
n=t.d
n===$&&A.c()
w=7
return A.b(C.TV(o,n.a,d,r,p),$async$Dz)
case 7:w=6
return A.b(t.U2(f),$async$Dz)
case 6:case 1:return A.h(u,v)}})
return A.i($async$Dz,v)},
Nv(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.BR()){t.kt("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a9(s,!1).cp(A.eF(new C.doY(),!0,null,x.N)),$async$Nv)
case 3:r=e
if(r==null||B.a.i(r).length===0){w=1
break}w=B.a.a_(B.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return A.b(t.zk(new C.doZ(t,r),"Applying deposit\u2026"),$async$Nv)
case 6:w=1
break
case 5:w=7
return A.b(t.zk(new C.dp_(t,r),"Loading\u2026"),$async$Nv)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Nv,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=n?B.j0:B.oZ,l=n?B.c:B.M,k=n?B.aQ:B.aj,j=n?B.bG:B.w.j(0.06),i=x.p
j=A.B(A.a([A.aI(!1,o,!0,A.p(B.A,A.W(B.ew,l,o,o,o,16),B.f,o,o,new A.o(j,o,o,o,o,o,B.a6),o,38,o,o,o,o,o,38),B.cI,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dp7(d),o,o,o,o,o,o,o)],i),B.m,o,B.e,B.j,0,o,o)
w=A.d("Backup & Restore",o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,B.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=A.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,B.cq,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=A.D(new C.ZB(D.brT,"Download",E.a_S,u?o:p.gbIb(),o),1)
t=A.B(A.a([t,B.ex,A.D(new C.ZB(B.j8,"Show QR",D.d0N,u?o:p.gbY4(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r
s=A.D(new C.ZB(D.brU,"Upload",B.a_k,u?o:p.gbY2(),o),1)
s=A.B(A.a([s,B.ex,A.D(new C.ZB(B.iP,"Scan QR",D.cEH,u?o:p.gbY3(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r?o:p.gbY1()
r=n?B.c.j(0.06):B.aS.j(0.08)
q=A.m(16)
q=A.a([A.cM(A.a([j,B.ay,w,B.P,v,B.ki,t,B.ay,s,B.ay,new C.bok(B.qx,"Enter Code",B.ZG,u,o),B.ki,A.p(o,A.B(A.a([A.W(B.hq,B.aS,o,o,o,18),B.aw,A.D(A.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.F,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(r,o,o,q,o,o,B.n),o,o,o,o,B.iN,o,o,o)],i),o,Aa.Ky,o,o,B.ak,!1)],i)
if(p.r){j=n?B.hy:B.c
w=p.w
if(w==null)w="Working\u2026"
q.push(A.an(0,A.aD(!1,B.a1,!0,o,new A.C(B.A0,A.B(A.a([I.aIY,B.be,A.D(A.d(w,o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.m,o,B.e,B.j,0,o,o),o),B.f,j,8,o,o,o,o,o,B.ac),o,o,0,0,o,o))}return A.ce(o,m,A.bp(!1,new A.am(B.W,o,B.a9,B.q,q,o),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)}}
C.ZB.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ab(0,B.G,B.d.gaj(s).j(0.35),B.dq,16)],x.V),p=B.c.j(0.22)
return A.aD(!1,B.a1,!0,u,A.aI(!1,t,!0,A.p(v,A.v(A.a([A.p(v,A.W(w.c,B.c,v,v,v,30),B.f,v,v,new A.o(p,v,v,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.ab,A.d(w.d,v,v,v,v,v,v,B.r6,v,v,v)],x.p),B.m,v,B.b7,B.j,0,B.p),B.f,v,v,new A.o(v,v,v,r,q,new A.a5(B.ax,B.aC,B.x,s,v,v),B.n),v,140,v,v,B.c4,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ac)}}
C.bok.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ab(0,B.G,B.d.gaj(s).j(0.35),B.dq,16)],x.V),p=B.c.j(0.22)
return A.aD(!1,B.a1,!0,u,A.aI(!1,t,!0,A.p(v,A.B(A.a([A.p(v,A.W(w.c,B.c,v,v,v,24),B.f,v,v,new A.o(p,v,v,v,v,v,B.a6),v,44,v,v,v,v,v,44),B.ex,A.d(w.d,v,v,v,v,v,v,B.r6,v,v,v)],x.p),B.m,v,B.b7,B.j,0,v,v),B.f,v,v,new A.o(v,v,v,r,q,new A.a5(B.ax,B.aC,B.x,s,v,v),B.n),v,v,v,v,D.bjL,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ac)}}
C.Ye.prototype={
S(){return new C.bfC()}}
C.bfC.prototype={
gate(){var w=this.e
return w===$?this.e=this.a.d:w},
Z(){var w=this
w.a0()
w.P8()
w.f=A.dD(B.np,new C.dpb(w))},
q(){var w=this.f
if(w!=null)w.a9(0)
this.a2()},
P8(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$P8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return A.b(A.u7(q.e,q.f),$async$P8)
case 3:q=e.a
s=A.bUC(q[3],q[1],t.a.e,q[4])
w=4
return A.b(A.Md(t.a.e,A.Iy(s.eF(),null,"  ")),$async$P8)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.n(new C.dp8(t,r))
case 1:return A.h(u,v)}})
return A.i($async$P8,v)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=u?B.j0:B.oZ,s=u?B.hy:B.c,r=u?B.c:B.bh,q=A.eC(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,B.aLP,v,v,v,1,v,!0),p=A.m(24),o=A.H(B.aS.j(0.35),B.r,1),n=w.d,m=A.pm(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,B.c),l=A.d("Code: "+w.gate(),v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=A.m(20),j=B.aS.j(0.12),i=A.m(20),h=x.p
i=A.aI(!1,k,!0,A.p(v,A.B(A.a([A.W(B.fE,B.aS,v,v,v,14),B.bq,A.d("Copy code",v,v,v,v,v,v,A.l(v,v,B.aS,v,v,v,v,v,v,v,v,12,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),B.m,v,B.e,B.Q,0,v,v),B.f,v,v,new A.o(j,v,v,i,v,v,B.n),v,v,v,v,B.m_,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dp9(w,d),v,v,v,v,v,v,v)
return A.ce(q,t,new A.C(B.a8,A.v(A.a([A.D(A.p(v,A.v(A.a([B.P,m,B.bv,l,B.P,i,B.ay,A.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aj,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v)],h),B.m,v,B.b7,B.j,0,B.p),B.f,v,v,new A.o(s,v,o,p,v,v,B.n),v,v,v,v,B.a8,v,v,1/0),1),B.aO,new A.a4(1/0,v,A.bL(B.yD,new C.dpa(d),A.bk(B.aS,v,v,v,v,B.fR,v,v,v,v,v,v)),v)],h),B.m,v,B.e,B.j,0,B.p),v),v,!1,!1,v,v)}}
C.Yf.prototype={
S(){return new C.bfD(A.yn(B.wq,B.nb,B.tj))}}
C.bfD.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.ce(A.eC(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.f6b,w,w,w,1,w,!0),B.w,A.ym(this.d,B.bQ,new C.dpc(this,d)),w,!1,!1,w,w)}}
C.aci.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.M(a0).ax.a===B.H,k=l?B.hy:B.c,j=l?B.c:B.M,i=l?B.aQ:B.aj,h=l?B.ba:B.e2,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=A.m(26)
w=A.H(B.aS.j(0.35),B.r,1)
v=A.a([new A.ab(0,B.G,B.aS.j(0.16),B.jP,36)],x.V)
u=A.p(m,D.bxU,B.f,m,m,new A.o(m,m,m,A.m(18),B.a_R,D.bH3,B.n),m,58,m,m,m,m,m,58)
t=A.d("Restore local backup?",m,m,m,m,m,m,A.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,B.u,m,m,!0,m,-0.3,m,m,m,m,m,m),B.L,m,m)
s=A.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,A.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),B.L,m,m)
r=l?B.j0:B.oZ
q=A.m(18)
p=A.H(B.aS.j(0.22),B.r,1)
o=x.p
g=A.a([new C.Oo("Account",B.a.i(this.d),i,j,m),B.T,new C.Oo("Balance","$"+A.dx(g.d),i,j,m)],o)
if(d!=null&&B.a.i(d).length!==0)B.d.v(g,A.a([B.T,new C.Oo("Investment",d,i,j,m)],o))
g.push(B.T)
g.push(new C.Oo("Saved on",""+A.bE(f)+"/"+A.bO(f)+"/"+A.bw(f),i,j,m))
g.push(B.T)
g.push(new C.Oo("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=A.p(m,A.v(g,B.F,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.c4,m,m,1/0)
r=B.aX.j(l?0.14:0.12)
q=A.m(14)
p=A.H(B.aX.j(0.35),B.r,1)
n=A.W(B.xa,l?B.aK:B.dn,m,m,m,16)
return A.ey(m,B.K,new A.d1(B.T4,A.bV(new A.C(B.wJ,A.v(A.a([u,B.aO,t,B.P,s,B.bv,g,B.ay,A.p(m,A.B(A.a([n,B.aa,A.D(A.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,A.l(m,m,l?B.bJ:B.im,m,m,m,m,m,m,m,m,11.5,m,m,B.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),B.F,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.eq,m,m,1/0),B.d5,A.B(A.a([A.D(A.dV(B.n4,new C.eH4(a0),A.db(m,m,m,m,m,m,m,m,m,j,m,m,B.cc,m,new A.b6(A.m(14),B.Z),new A.ay(h,1,B.r,-1),m,m,m,m)),1),B.aw,A.D(A.bL(D.eRp,new C.eH5(a0),A.bk(B.aS,m,m,m,m,m,B.cc,m,new A.b6(A.m(14),B.Z),m,m,m)),2)],o),B.m,m,B.e,B.j,0,m,m)],o),B.m,m,B.e,B.Q,0,B.p),m),new A.o(k,m,w,e,v,m,B.n),B.bb),m),m,m,m,B.ev,B.cZ,m,m,m)}}
C.Oo.prototype={
B(d){var w=this,v=null
return A.B(A.a([new A.a4(92,v,A.d(w.c,v,v,v,v,v,v,A.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),A.D(A.d(w.d,v,v,v,v,v,v,A.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,B.I,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.F,v,B.e,B.j,0,v,v)}}
C.Xm.prototype={
S(){return new C.awY(new A.ar(B.as,$.av()),A.ka(!0,null,!0,!0,null,null,!1))}}
C.awY.prototype={
Z(){this.a0()
$.aT.x1$.push(new C.cZM(this))},
q(){var w=this.d
w.R$=$.av()
w.O$=0
this.e.q()
this.a2()},
bY6(){var w,v=this.c
v.toString
w=B.a.i(this.d.a.a)
A.a9(v,!1).M(w)
return null},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=u?B.hy:B.c,s=u?B.c:B.M,r=u?B.aQ:B.aj,q=u?B.j0:B.oZ,p=u?B.ba:B.e2,o=A.m(24),n=A.H(B.aS.j(0.35),B.r,1),m=A.a([new A.ab(0,B.G,B.aS.j(0.18),B.fG,32)],x.V),l=A.p(v,A9.aj7,B.f,v,v,new A.o(v,v,v,A.m(18),B.a_R,D.bJJ,B.n),v,56,v,v,v,v,v,56),k=A.d("Enter restore code",v,v,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,B.u,v,v,!0,v,-0.3,v,v,v,v,v,v),B.L,v,v),j=A.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),B.L,v,v),i=A.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,B.I,v,v,!0,v,8,v,v,v,v,v,v),h=A.a([new A.tK(A.ae("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bnP(new C.cZJ())],x.G),g=A.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,B.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return A.ey(v,B.K,new A.d1(A1.IE,A.bV(new A.C(B.wJ,A.v(A.a([l,B.aO,k,B.P,j,B.dX,A.aK(!1,B.U,!1,v,!0,B.q,v,A.aL(),w.d,v,v,v,v,v,2,A.bn(v,v,v,B.E2,v,v,"",v,!0,new A.b3(4,A.m(16),new A.ay(p,1,B.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new A.b3(4,A.m(16),D.aQF),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.z,!0,v,!1,v,!1,w.e,B.ai,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.cZK(w),v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,i,!0,B.L,v,B.lH,v,v,v,v),B.dX,A.B(A.a([A.D(A.dV(B.n4,new C.cZL(d),A.db(v,v,v,v,v,v,v,v,v,s,v,v,B.cc,v,new A.b6(A.m(14),B.Z),new A.ay(p,1,B.r,-1),v,v,v,v)),1),B.aw,A.D(A.bL(D.eUN,w.gbY5(),A.bk(B.aS,v,v,v,v,v,B.cc,v,new A.b6(A.m(14),B.Z),v,v,v)),2)],f),B.m,v,B.e,B.j,0,v,v)],f),B.m,v,B.e,B.Q,0,B.p),v),new A.o(t,v,n,o,m,v,B.n),B.bb),v),v,v,v,B.KA,B.cZ,v,v,v)}}
C.alF.prototype={
S(){return new C.bfJ(B.cE)},
hk(d){return this.x.$1(d)},
bn(){return this.y.$0()}}
C.bfJ.prototype={
Z(){var w,v=this
v.a0()
w=v.a
w.toString
$.rP=$.rP+1
v.r=B.o.N(B.o.E(C.fjY(w.e,w.d.y2),1,600))
w=v.a
if(!J.lb(w.d.y2,w.e))v.r=C.hJB(v.a.e)
v.w=A.dD(B.h9,new C.dvx(v))},
q(){var w=this.w
if(w!=null)w.a9(0)
this.c9l()
C.aX2()
this.a2()},
c9l(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:B.k.E(r.e/w,0,1)
if(v<=0)return
u=A.vY(B.k.aa(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=B.o.u(1000*Date.now())
s=r.a
w.hk(new A.d_(t,s.c.a,u,B.fw,B.f7,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,B.ci,new A.Q(Date.now(),0,!1)))
r.a.bn()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.u4(u,q,"Left early \xb7 +$"+B.k.aa(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
Iz(d,e){return this.ckY(d,e)},
b0b(d){return this.Iz(!1,d)},
ckX(d){return this.Iz(d,"")},
ckY(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Iz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}t.x=!0
s=t.w
if(s!=null)s.a9(0)
if(d)r=1
else{s=t.f
r=s<=0?0:B.k.E(t.e/s,0,1)}w=r<=0?3:4
break
case 3:s=t.a
q=s.c.a
p=s.f
s=s.w
o=e.length===0
C.u4(s,null,o?"No progress":e,q,p,s,null,!1)
s=t.c
if(s==null){w=1
break}w=5
return A.b(C.bzR(s,C.bzv(),C.fKp(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$Iz)
case 5:w=1
break
case 4:n=A.vY(B.k.aa(t.a.w*1.46*r,2))
m=r>=1
t.n(new C.dvo(t,n,r))
s=B.o.u(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new A.d_(s,p,n,B.fw,B.f7,q,null,null,B.ci,new A.Q(Date.now(),0,!1))
A.aeY(l,!0)
t.a.hk(l)
t.a.bn()
if(m)k="+$"+B.k.aa(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+B.k.aa(n,2)+" ("+B.k.U(r*100)+"% of the prize)"}q=t.a
C.u4(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return A.b(C.bzR(s,C.bzv(),C.fKp(),""+t.e+"/"+t.f,k,q,!0),$async$Iz)
case 6:w=7
return A.b(C.aeQ(t.a.f,k),$async$Iz)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Iz,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.r
m===$&&A.c()
w=B.o.al(m,60)
v=B.a.aU(B.o.u(B.o.F(m,60)),2,"0")
u=A.aF(n,n,n,n,B.aja,n,n,n,new C.dvr(d),n,n,n,n,n,n)
t=o.a
s=x.p
t=A.D(A.v(A.a([A.d(t.f,n,1,B.a2,n,n,n,B.kQ,n,n,n),A.d("Win $"+B.k.aa(t.w*1.46,2)+" \xb7 stake $"+B.k.aa(o.a.w,2),n,n,n,n,n,n,D.eHa,n,n,n)],s),B.F,n,B.e,B.j,0,B.p),1)
r=o.a.c.a
m=m<=10?B.aD:B.c.j(0.1)
q=A.m(99)
q=A.B(A.a([u,t,new C.an9(r,new C.dvs(o),n),B.bq,A.dg(n,A.B(A.a([D.bCg,B.d8,A.d(""+w+":"+v,n,n,n,n,n,n,B.kk,n,n,n)],s),B.m,n,B.e,B.j,0,n,n),n,n,B.b9,new A.o(m,n,n,q,n,n,B.n),B.a1,n,n,n,B.wB,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
m=o.a
v=m.w
w=v*1.46
r=o.e/o.f
m=A.B(A.a([A.D(A.bt(A.m(99),A.m4(B.bG,n,n,9,n,r,new A.mo(B.d.gL(m.r),x.dw)),B.ap),1),B.aw,A.d(""+o.e+"/"+o.f,n,n,n,n,n,n,D.ePH,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
t=A.m(22)
u=A.a([B.d.gL(o.a.r).j(0.35),G.abl],x.O)
p=o.x
return C.aMy(n,D.b9q,A.bp(!0,A.v(A.a([new A.C(D.blP,q,n),new C.LS(w*r,w,v,n),new A.C(G.ady,m,n),A.D(new A.C(B.Vw,A.bt(t,A.bV(A.e1(V.h3k(o.a.e,new V.yu(new C.dvt(o),new C.dvu(o),new C.dvv(o),o.d)),p,n),new A.o(n,n,n,n,n,new A.a5(B.b0,B.b3,B.x,u,n,n),B.n),B.bb),B.ap),n),1)],s),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0))}}
C.a4D.prototype={
B(d){var w=null,v=A.m(26),u=A.H(B.aX.j(0.5),B.r,1),t=A.a([new A.ab(0,B.G,B.aX.j(0.22),B.J,26)],x.V)
return A.ey(w,B.K,A.p(w,A.v(A.a([A.p(w,D.bw9,B.f,w,w,new A.o(B.aX.j(0.16),w,A.H(B.aX,B.r,2),w,w,w,B.a6),w,68,w,w,w,w,w,68),B.ay,D.f2u,B.P,A.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.P,A.d("The count starts again from zero next month.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.aO,new A.a4(1/0,w,A.bL(D.eS4,new C.c1P(d),A.bk(B.aX,w,w,w,B.w,B.fR,w,w,new A.b6(A.m(14),B.Z),w,w,w)),w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,u,v,t,D.bHG,B.n),w,w,w,w,D.bka,w,w,w),w,w,w,B.ae4,B.cZ,w,w,w)}}
C.al9.prototype={
S(){return new C.bfA(null,null)},
gX(d){return this.e}}
C.bfA.prototype={
Z(){var w,v=this,u=null
v.a0()
w=v.d=A.bi(u,B.zM,u,1,u,v)
w.d5()
w.dM$.K(0,new C.doI(v))
w=A.bi(u,B.lW,u,1,u,v)
w.cE(0)
v.e=w
w=A.bi(u,B.K2,u,1,u,v)
w.cE(0)
v.f=w
w.d5()
w.dM$.K(0,new C.doJ(v))
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
w.bpf()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.Ox[B.o.F(a9.r,5)]:b4
w=!b3&&b4==null?D.Ox[B.o.F(a9.w,5)]:b0
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
b3=A.a([A.e7(B.A,A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,b0,A.a([new A.ab(6+e,B.G,B.aB.j(0.4+q*0.3),B.J,32+q*22),new A.ab(3,B.G,B.b6.j(0.2+p*0.25),B.J,40+p*16)],d),b0,B.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=A.p(b0,b0,B.f,b0,b0,new A.o(A.aq(B.bA,B.aK,B.o.F(a3,3)/2).j(a2),b0,b0,b0,A.a([new A.ab(0,B.G,B.aB.j(0.7),B.J,e)],d),b0,B.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(A.dP(new A.iy(A.vB(a4+a3),b0,B.A,!0,b0,a8,b0),new A.u(a6*a0+a5*b2*0.04,a7*a0)))}B.d.v(f,b3)}b3=b2*0.06
e=x.V
f.push(A.dP(A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,A.m(b2*0.5),A.a([new A.ab(b2*0.02,B.G,B.w.j(0.4+b1),B.J,b2*0.14)],e),b0,B.n),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new A.u(0,n+b3)))
b1=A.di()
d=b1.a
d.$flags&2&&A.ah(d)
d[11]=0.0025
b1.mf(o)
b1.ji(k,k,k,1)
b1.jz(l)
b1.fm(m)
d=b2*0.2
a1=A.m(d)
if(a9.a.c)a2=D.cJL
else{a2=A.aq(B.c,B.jZ,q*0.45)
a2.toString
a2=A.a([a2,B.bN,B.cm],x.O)}a4=A.aq(B.bH,B.aB,q*0.65)
a4.toString
a4=A.H(a4,B.r,3)
e=A.a([new A.ab(0,B.G,B.w.j(0.3),D.dNj,16)],e)
if(!a9.a.c)e.push(new A.ab(p*3,B.G,B.aB.j(0.3+q*0.4),B.J,24+p*16))
e.push(new A.ab(0,B.G,B.c.j(0.9),B.PY,0))
g=A.a([],g)
if(!a9.a.c)g.push(A.bX(0,A.bV(b0,new A.o(b0,b0,b0,A.m(d),b0,new A.a5(new A.d6(-1+Math.cos(j)*0.8,-1),new A.d6(1,1),B.x,A.a([B.c.j(0),B.c.j(0.28+p*0.25),B.c.j(0)],x.O),b0,b0),B.n),B.bb),0,0,0))
g.push(A.an(b0,A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,A.m(6),b0,new A.a5(B.a3,B.a7,B.x,A.a([B.c.j(0.95),B.c.j(0)],x.O),b0,b0),B.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=A.a([new A.cL(B.w.j(0.18),B.dz,5)],x.C)
if(!a9.a.c)d.push(new A.cL(B.aB.j(0.4+q*0.35),B.J,12+p*10))
g.push(A.au(A.wa(A.d(v,b0,b0,b0,b0,b0,b0,A.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,B.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),B.b9,B.jj,b3),b0,b0,b0))
f.push(A.dP(A.fo(B.A,A.p(b0,new A.am(B.W,b0,B.a9,B.q,g,b0),B.f,b0,b0,new A.o(b0,b0,a4,a1,e,new A.a5(B.ax,B.aC,B.x,a2,b0,b0),B.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new A.u(0,n)))
return new A.a4(h,h,new A.am(B.A,b0,B.a9,B.f,f,b0),b0)}}
C.aIa.prototype={
aP(){this.aX()
this.aV()
this.dD()},
q(){var w=this,v=w.b0$
if(v!=null)v.a1(0,w.gdB())
w.b0$=null
w.a2()}}
C.LS.prototype={
B(d){var w=null,v=new C.c3N(),u=v.$3("STAKE","$"+B.k.aa(this.e,2),B.c),t=A.m(18),s=A.H(B.bs.j(0.7),B.r,1.4),r=A.a([new A.ab(0,B.G,B.aS.j(0.35),B.J,14)],x.V),q=x.p
return new A.C(B.Kj,A.B(A.a([u,A.p(w,A.v(A.a([D.f1e,A.mE(new C.c3M(),w,B.b9,B.mF,w,new A.bl(w,this.c,x.e7),x.gR)],q),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(w,w,s,t,r,D.ajW,B.n),w,w,w,w,B.Kv,w,w,w),v.$3("FULL WIN","$"+B.k.aa(this.d,2),B.bJ)],q),B.m,w,B.e,B.j,0,w,w),w)}}
C.an9.prototype={
B(d){var w=null,v=A.m(99),u=A.H(B.jg.j(0.7),B.r,1)
return A.p(w,A.B(A.a([D.buC,B.d8,C.anZ(this.d,B.oD,this.c)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(w,w,u,v,w,D.ajW,B.n),w,w,w,w,B.KF,w,w,w)},
gdS(){return this.c}}
C.M_.prototype={
S(){return new C.bge(null,null)}}
C.bge.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,B.lW,null,1,null,v)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bpQ()},
aJO(d,e){var w=this.a.d,v=A.U(w).k("J<1,n>"),u=A.A(new A.J(w,C.hPw(),v),v.k("ai.E"))
w=this.d
w===$&&A.c()
return A.c4(w,new C.dO2(this,u),null)},
B(d){var w=null
if(this.a.e)return A.ce(w,D.aaO,A.bp(!0,this.aJO(0,d),!0,!1,B.ag,!0,!0),w,!1,!1,w,w)
return this.aJO(0,d)},
atP(d,e,f){var w=null,v=f.j(0.16),u=A.m(10)
return A.B(A.a([A.p(w,A.W(d,f,w,w,w,17),B.f,w,w,new A.o(v,w,w,u,w,w,B.n),w,32,w,w,w,w,w,32),B.aw,A.D(A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.aIK.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.ab8.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=A.aH(d,B.e6,o).w.r.d,m=this.c,l=J.cB(m),k=l.eE(m,new C.dO5()).gJ(0),j=new A.e3(l.di(m,new C.dO6(),x.cD),x.bG).cG(0,0,new C.dO7())
o=A.aH(d,B.bR,o).w
w=x.p
v=A.a([B.T,A.p(p,p,B.f,p,p,new A.o(B.ba,p,p,A.m(2),p,p,B.n),p,4,p,p,p,p,p,42),new A.C(B.adM,A.B(A.a([A.p(p,D.bEA,B.f,p,p,new A.o(p,p,p,A.m(14),A.a([new A.ab(0,B.G,B.fb.j(0.45),B.J,14)],x.V),D.ajQ,B.n),p,44,p,p,p,p,p,44),B.be,D.bnU,A.aF(p,p,p,p,B.l6,p,p,p,new C.dO8(d),p,p,p,p,p,p)],w),B.m,p,B.e,B.j,0,p,p),p)],w)
if(l.gci(m)){u=C.fFu("GAMES",""+l.gJ(m),B.eB)
t=C.fFu("WON",""+k,B.jg)
s=j>=0
r=s?"+":"-"
q=C.bwl(j)
s=s?B.jg:B.fi
v.push(new A.C(D.bio,A.B(A.a([u,B.aa,t,B.aa,C.fFu("NET",r+q,s)],w),B.m,p,B.e,B.j,0,p,p),p))}if(l.gai(m))v.push(new A.C(new A.N(24,36,24,24+n),A.v(A.a([A.W(D.bqE,B.c.j(0.35),p,p,p,52),B.ab,A.d("No game receipts yet",p,p,p,p,p,p,A.l(p,p,B.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.ar,A.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,A.l(p,p,B.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),B.L,p,p)],w),B.m,p,B.e,B.j,0,B.p),p))
else v.push(new A.dm(1,B.cl,A.hI(p,new C.dO9(this),l.gJ(m),new A.N(14,2,14,16+n),p,B.ak,new C.dOa(),!1),p))
return A.p(p,A.v(v,B.m,p,B.e,B.Q,0,B.p),B.f,p,new A.aW(0,1/0,0,o.a.b*0.88),D.aTq,p,p,p,p,p,p,p,p)}}
C.ab7.prototype={
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
t=s}if(w)r=B.cG
else if(u)r=B.dy
else{w=v?B.aK:B.bs
r=w}q=h.gbbk()
w=new C.dO4()
s=A.m(14)
p=A.a([r.j(0.13),D.b8z],x.O)
o=A.H(r.j(0.4),B.r,1)
n=A.W(g?B.m4:B.cv,r,i,i,i,16)
m=A.D(A.d(h.b,i,1,B.a2,i,i,i,B.vt,i,i,i),1)
l=r.j(0.2)
k=A.m(99)
k=A.p(i,A.d(t,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,B.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),B.f,i,i,new A.o(l,i,i,k,i,i,B.n),i,i,i,i,D.blK,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bwl(q)}else{l=g?"+":"-"
l+=C.bwl(h.d)}j=x.p
l=A.B(A.a([n,B.bq,m,k,B.bq,A.d(l,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.m,i,B.e,B.j,0,i,i)
k=C.dO3("STAKE",w.$1(h.w),B.c)
w=A.B(A.a([k,B.d8,C.dO3("PAID",C.bwl(g?h.d:0),r),B.d8,C.dO3("BEFORE",w.$1(h.x),B.eB),B.d8,C.dO3("AFTER",w.$1(h.y),B.dy)],j),B.m,i,B.e,B.j,0,i,i)
n=C.hL8(h.f)
h=B.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return A.p(i,A.v(A.a([l,B.ar,w,B.av,A.d(n+h,i,1,B.a2,i,i,i,A.l(i,i,B.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.ah,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(i,i,o,s,i,new A.a5(B.ax,B.aC,B.x,p,i,i),B.n),i,i,i,i,B.lt,i,i,i)}}
C.axA.prototype={
S(){return new C.bbX(B.cE,null,null)}}
C.bbX.prototype={
Z(){var w,v,u,t=this
t.a0()
w=A.bi(null,B.lX,null,1,null,t)
w.cE(0)
t.d=w
v=J.e_(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.abx(40+w.af()*260,-20+w.af()*40,1.5+w.af()*3,w.af()*3.141592653589793,0.7+w.af()*0.3,12+w.af()*16,[X.a0Q,B.qJ,B.cQ,B.c][w.aC(4)],[B.hX,B.l1,B.dR,B.Ep][w.aC(4)])
t.f=v},
q(){var w=this.d
w===$&&A.c()
w.q()
this.boK()},
B(d){var w=null,v=this.d
v===$&&A.c()
return A.au(A.aD(!1,B.a1,!0,w,A.c4(v,new C.d5t(this,d),w),B.f,B.K,0,w,w,w,w,w,B.ac),w,w,w)}}
C.abx.prototype={
gX(d){return this.f}}
C.aHG.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.aXQ.prototype={
B(d){return new A.tU(new C.c63(this),null,new A.h5(A.a([$.xU(),$.a0Q()],x.U)),null)},
gdS(){return this.c}}
C.Lu.prototype={
c3t(){if(this.c!=null)this.n(new C.bVW())}}
C.He.prototype={}
C.amC.prototype={
S(){return new C.aAn(B.cE,new A.ar(B.as,$.av()))},
cwN(){return this.d.$0()},
cHY(){return this.f.$0()},
cHM(d,e){return this.r.$2(d,e)},
cIA(d,e,f){return this.w.$3$bonus(d,e,f)},
gdS(){return this.c}}
C.aAn.prototype={
q(){var w=this.e
w.R$=$.av()
w.O$=0
this.a2()},
apR(){var w=A.d9(B.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
zL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$zL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.apR()
if(s<2){t.atQ("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cwN()<s){t.atQ("Insufficient balance.")
w=1
break}if(!t.a.cHM(s,"Dice Roll bet")){t.atQ("Could not place bet.")
w=1
break}t.a.toString
t.n(new C.dH7(t))}w=3
return A.b(C.c2Y(t.a.e),$async$zL)
case 3:r=t.a
q=C.hNc(r.e,r.c,t.d)
t.a.cHY()
A.aWq(t.a.e)
t.n(new C.dH8(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return A.b(A.bN(new A.b8(1000*(40+p*6)),null,r),$async$zL)
case 7:if(t.c==null){w=1
break}new C.dH9(t).$0()
t.c.e3()
case 5:++p
w=4
break
case 6:w=8
return A.b(A.bN(B.jk,null,r),$async$zL)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.fJd(q)
t.n(new C.dHa(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cIA(m,"Dice Roll "+n,o)
t.n(new C.dHb(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+B.k.aa(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(m,2)+" added to your balance"
w=12
return A.b(C.bzR(r,C.bzv(),new C.dHc(t),n,k,"YOU WIN!",!0),$async$zL)
case 12:w=13
return A.b(C.aeQ("Dice Roll",l?"+$"+B.k.aa(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(m,2)+" added to your balance"),$async$zL)
case 13:w=10
break
case 11:w=14
return A.b(C.bzR(r,C.bzv(),new C.dHd(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$zL)
case 14:C.u4(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return A.h(u,v)}})
return A.i($async$zL,v)},
atQ(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.P(A.b1(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.apR(),d=x.w,a0=A.aH(a2,B.e6,d).w,a1=Math.min(A.aH(a2,B.bR,d).w.a.a*0.44,200)
d=A.hi(Q.aii,D.f7U,new C.dHg(a2),f)
w=A.m(20)
v=g.a
u=v.c
t=x.p
w=A.B(A.a([d,B.b8,A.p(f,A.B(A.a([B.aif,B.bq,C.anZ(v.d,B.jT,u)],t),B.m,f,B.e,B.Q,0,f,f),B.f,f,f,new A.o(B.cQ,f,f,w,f,f,B.n),f,f,f,f,B.lu,f,f,f)],t),B.m,f,B.e,B.j,0,f,f)
u=g.z
v=A.X(140,D.UE.l()>>>16&255,D.UE.l()>>>8&255,D.UE.l()&255)
d=A.m(18)
s=A.H(A.X(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
r=g.x
d=A.D(A.p(f,A.au(new C.al9(r,r?g.w:g.r,a1,f),f,f,f),B.f,f,f,new A.o(v,f,s,d,f,f,B.n),f,f,f,f,f,f,f,1/0),1)
v=A.d("Roll lands on one of:",f,f,f,f,f,f,A.l(f,f,B.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,B.a4,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=A.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.Ox[q]
o=C.fJd(p)
n=p>0?B.bl:B.aD
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new A.aY(10,10)
i=m?B.c:n.j(0.7)
h=new A.ay(i,m?2.5:1.2,B.r,-1)
n=m?A.a([new A.ab(1,B.G,n.j(0.65),B.J,14)],r):B.a_N
m=m?18:15
s.push(new A.bG(1,B.bp,new A.C(B.jl,A.p(B.A,new A.x(o,f,new A.F(!0,B.c,f,f,f,f,m,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f),B.f,f,f,new A.o(k,f,new A.c3(h,h,h,h),new A.bv(j,j,j,j),n,f,B.n),f,l,f,f,f,f,f,f),f),f))}d=A.a([d,B.ab,v,B.ar,A.B(s,B.m,f,B.e,B.j,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.fJd(v)
s=g.r
s.toString
d.push(new A.C(B.kz,A.d("Landed on "+v,f,f,f,f,f,f,A.l(f,f,s>0?B.bg:B.cG,f,f,f,f,f,f,f,f,20,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(B.T)
d.push(new A.bI(B.a3,f,f,A.d("Bet Amount",f,f,f,f,f,f,A.l(f,f,A.X(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,B.I,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(B.ar)
v=x.bL
v=A.A(new A.J(A.a([2,5,10,25],x.n),new C.dHh(g),v),v.k("ai.E"))
s=g.y
r=A.X(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v.push(A.D(new A.C(B.Wa,A.aK(f,B.U,!1,f,!0,B.q,f,A.aL(),g.e,f,f,f,f,f,2,A.bn(f,new A.b3(4,A.m(10),B.Z),f,B.jG,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,B.ld,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),B.z,!0,f,!0,!s,!1,f,B.ai,f,f,f,f,f,B.dO,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,B.a8,f,f,f,f,f,f,f,f,f,f,f,B.hh,!0,B.L,f,B.am,f,f,f,f),f),1))
d.push(A.B(v,B.m,f,B.e,B.j,0,f,f))
d.push(B.P)
d.push(new A.bI(B.a7,f,f,A.d("Perfect Score Profit: +$"+B.k.aa(g.apR()*0.46,2),f,f,f,f,f,f,D.eJ6,f,f,f),f))
d.push(B.T)
d=A.D(new A.C(B.it,A.v(d,B.ah,f,B.e,B.j,0,B.p),f),1)
v=g.x?f:g.gchH()
s=A.fh(f,f,B.aB,f,f,f,f,f,f,B.c,f,f,f,f,new A.b6(A.m(14),B.Z),f,f,f,f,f)
return C.aMy(f,D.UK,A.bp(!0,A.v(A.a([new A.C(D.bma,w,f),new C.LS(u,e*1.46,e,f),A.D(A.v(A.a([d,new A.C(new A.N(14,4,14,8+a0.r.d),new A.a4(1/0,52,A.i6(A.d("\ud83c\udfb2 ROLL ($"+B.k.aa(e,2)+")",f,f,f,f,f,f,B.kR,f,f,f),v,s),f),f)],t),B.m,f,B.e,B.j,0,B.p),1)],t),B.m,f,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0))}}
C.anf.prototype={
S(){return new C.aAE(B.ke,new A.ar(B.as,$.av()))},
cHE(d){return this.e.$1(d)}}
C.aAE.prototype={
gaoG(){var w,v=this.r
if(v===$){w=B.o.u(1e4+B.cE.aC(89999))
this.r!==$&&A.bK()
this.r=w
v=w}return v},
gOB(){var w=this.d,v=this.a
return w===B.ke?B.a.i(v.f.a):B.a.i(v.f.b)},
ga6C(){var w=this.gOB(),v=A.ae("^\\$+",!0,!1,!1,!1),u=B.a.i(A.aJ(w,v,""))
return u.length===0?"":"$"+u},
q(){var w=this.e
w.R$=$.av()
w.O$=0
this.a2()},
Hv(d,e){return this.bCg(d,e)},
bCg(d,e){var w=0,v=A.j(x.H),u=this,t
var $async$Hv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.fE(new A.fx(d)),$async$Hv)
case 2:A.eJ()
t=u.c
if(t!=null)t.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$Hv,v)},
Ow(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Ow=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gOB().length===0){r.c.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}A.j8()
o=B.k.aa(r.a.d,2)
q=r.d===B.ke?A.cs("https://cash.app/"+r.ga6C()+"/"+o,0,null):A.cs("bitcoin:"+r.gOB(),0,null)
t=4
w=7
return A.b(A.iK(q,B.fe,null),$async$Ow)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===B.ke?r.ga6C():r.gOB()
w=10
return A.b(r.Hv(n,r.d===B.ke?"Cash App tag":"Bitcoin address"),$async$Ow)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===B.ke?r.ga6C():r.gOB()
w=11
return A.b(r.Hv(n,r.d===B.ke?"Cash App tag":"Bitcoin address"),$async$Ow)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ow,v)},
Zc(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hS().bc2(B.eD),$async$Zc)
case 3:r=e
if(r==null){w=1
break}w=4
return A.b(r.f8(),$async$Zc)
case 4:s=e
t.n(new C.dOs(t,B.a.c7(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return A.h(u,v)}})
return A.i($async$Zc,v)},
c_U(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===B.ke?C.h4B(s.a):B.a.i(s.a)
if(r.length===0){t=v.d===B.ke?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.I(x.q).f.P(A.b1(u,u,u,u,u,B.q,u,A.d(t,u,u,u,u,u,u,u,u,u,u),u,B.S,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.I(x.q).f.P(A.b1(u,u,u,u,u,B.q,u,A.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,B.S,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new A.Q(Date.now(),0,!1).u(0)
w=v.a
t.cHE(new A.d_(s,w.c.a,w.d,B.fn,v.d,r,v.f,v.gaoG(),B.dr,new A.Q(Date.now(),0,!1)))
w=v.c
w.toString
A.iG(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.eC(o,o,o,!0,!0,B.zj,o,1,!0,o,0,!1,o,!1,B.c,o,A.aF(o,o,o,o,B.Fa,o,o,o,new C.dOt(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.eTA,o,o,o,1,o,!0),m=A.m(26),l=A.H(D.eF.j(0.25),B.r,1),k=x.V,j=A.a([new A.ab(0,B.G,B.aW.j(0.25),B.eP,24)],k),i=x.p
j=A.p(o,A.v(A.a([A.d("YOU'RE ADDING",o,o,o,o,o,o,A.l(o,o,B.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,B.I,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),B.ar,A.f_(B.A,A.d("$"+A.dx(p.a.d),o,o,o,o,o,o,D.eDD,o,o,o),B.f,B.ds),B.ar,A.d("to your Growth Income wallet",o,o,o,o,o,o,A.l(o,o,D.eF.j(0.85),o,o,o,o,o,o,o,o,12,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,l,m,j,D.bKv,B.n),o,o,o,o,D.bjP,o,o,o)
m=p.bWU()
l=p.axq(1,"Send the money to NGMY Pay",p.c_S())
w=p.axq(2,"Put this code in the payment note",p.bAS())
v=p.d===B.ke
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=A.l(o,o,B.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.axq(3,u,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.e,o,o,o,o,o,2,A.bn(o,o,o,o,o,o,o,o,!0,new A.b3(4,A.m(18),new A.ay(B.c.j(0.08),1,B.r,-1)),o,o,o,o,o,B.rF,!0,o,o,o,o,new A.b3(4,A.m(18),D.aQA),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.eEZ,t,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,B.r6,!0,B.a5,o,B.am,o,o,o,o))
r=p.f!=null
v=r?8:22
u=A.m(20)
s=r?D.eF:B.c
s=A.H(s.j(r?0.5:0.12),B.r,1.4)
q=r?A.v(A.a([A.bt(A.m(14),new A.d1(D.aRY,new A.Du(p.f,o),o),B.ap),B.P,D.epP,B.av],i),B.m,o,B.e,B.j,0,B.p):A.v(A.a([A.p(o,D.bDO,B.f,o,o,new A.o(D.eF.j(0.12),o,o,o,o,o,B.a6),o,54,o,o,o,o,o,54),B.T,D.eYr,B.d6,A.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p)
v=p.b1A(4,"Screenshot of your payment",A.aG(o,A.p(o,q,B.f,o,o,new A.o(B.rF,o,s,u,o,o,B.n),o,o,o,o,new A.N(v,v,v,v),o,o,o),B.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcba(),o,o,o,o,o,o,!1,B.ad),!0)
u=A.d(p.a.r,o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,1.4,!0,o,o,o,o,o,o,o,o),B.L,o,o)
s=A.m(18)
k=A.a([new A.ab(0,B.G,B.aW.j(0.45),B.dq,18)],k)
return A.ce(n,B.zj,A.au(new A.d1(B.a7m,A.cM(A.a([j,B.bv,m,B.bv,l,w,t,v,B.ar,u,B.aO,new A.a4(o,56,A.bV(A.lg(D.bCv,D.f7d,p.gc_T(),A.fh(o,o,B.K,o,o,o,o,o,o,B.c,o,o,o,B.K,new A.b6(A.m(18),B.Z),o,o,o,o,o)),new A.o(o,o,o,s,k,D.bJa,B.n),B.bb),o)],i),o,D.bjj,o,o,B.ak,!1),o),o,o,o),o,!1,!1,o,o)},
bWU(){var w=null,v=new C.dOo(this),u=A.m(18),t=A.H(B.c.j(0.06),B.r,1)
return A.p(w,A.B(A.a([v.$3(B.ke,B.hU,"Cash App"),B.et,v.$3(B.a2g,D.ai_,"Bitcoin")],x.p),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(B.rF,w,t,u,w,w,B.n),w,w,w,w,B.m0,w,w,w)},
b1A(d,e,f,g){var w,v=null,u=x.p,t=A.a([A.p(B.A,A.d(""+d,v,v,v,v,v,v,D.eJO,v,v,v),B.f,v,v,D.aSH,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(A.D(A.p(v,v,B.f,D.eF.j(0.18),v,v,v,v,v,B.wz,v,v,v,2),1))
t=A.v(t,B.m,v,B.e,B.j,0,B.p)
w=g?12:20
return new A.L2(A.B(A.a([new A.a4(34,v,t,v),B.aw,A.D(new A.C(new A.N(0,0,0,w),A.v(A.a([new A.C(B.Vt,A.d(e,v,v,v,v,v,v,A3.Rl,v,v,v),v),f],u),B.ah,v,B.e,B.j,0,B.p),v),1)],u),B.ah,v,B.e,B.j,0,v,v),v)},
axq(d,e,f){return this.b1A(d,e,f,!1)},
c_S(){var w,v,u,t,s=this,r=null,q=s.d===B.ke?s.ga6C():s.gOB(),p=A.m(20),o=A.m(20),n=s.d===B.ke,m=n?D.bI7:D.bJS,l=A.a([new A.ab(0,B.G,(n?D.ab1:D.TX).j(0.35),B.ct,16)],x.V),k=A.m(12)
n=s.d===B.ke
w=n?B.hU:D.ai_
k=A.p(r,A.W(w,n?D.ab1:D.TX,r,r,r,30),B.f,r,r,new A.o(B.c,r,r,k,r,r,B.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=A.d(n,r,r,r,r,r,r,A.l(r,r,B.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===B.ke
t=u?22:13
v=A.d(v,r,1,B.a2,r,r,r,A.l(r,r,B.c,r,r,r,r,r,r,r,r,t,r,r,B.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=A.D(A.v(A.a([n,B.bB,v,B.av,A.B(A.a([D.bzp,B.d8,A.d(s.d===B.ke?"Tap to pay $"+A.dx(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,B.r5,r,r,r)],u),B.m,r,B.e,B.j,0,r,r)],u),B.F,r,B.e,B.j,0,B.p),1)
return A.aD(!1,B.a1,!0,r,A.aI(!1,p,!0,A.et(A.B(A.a([k,B.be,v,A.aF(r,r,r,r,D.byu,r,r,r,w?r:new C.dOr(s,q),r,r,r,r,"Copy",r)],u),B.m,r,B.e,B.j,0,r,r),r,new A.o(r,r,r,o,l,m,B.n),r,B.ads,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gc6y(),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ac)},
bAS(){var w,v,u,t,s,r,q,p,o=null,n=A.m(20),m=A.H(B.b1.j(0.35),B.r,1),l=x.p,k=A.a([],l)
for(w=this.gaoG().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new A.aY(12,12)
q=A.a([B.b1.j(0.28),B.b1.j(0.08)],u)
p=new A.ay(B.eB.j(0.4),1,B.r,-1)
k.push(A.p(B.A,new A.x(s,o,B.Ce,o,o,o,o,o,o,o,o,o),B.f,o,o,new A.o(o,o,new A.c3(p,p,p,p),new A.bv(r,r,r,r),o,new A.a5(B.b0,B.b3,B.x,q,o,o),B.n),o,52,o,B.jl,o,o,o,42))}return A.p(o,A.v(A.a([A.B(k,B.m,o,B.b7,B.j,0,o,o),B.ab,A.B(A.a([A.D(A.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,A.l(o,o,B.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aa,A.hi(B.YM,D.f8W,new C.dOn(this),A.fr(o,o,o,o,o,o,o,o,o,o,o,B.eB,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),B.m,o,B.e,B.j,0,o,o)],l),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(B.rF,o,m,n,o,o,B.n),o,o,o,o,B.bC,o,o,o)}}
C.qN.prototype={
ac(){var w=this
return A.E(["id",w.a,"title",w.b,"start",w.c.ab(),"end",w.d.ab(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.qO.prototype={
ac(){var w=this
return A.E(["id",w.a,"when",w.b.ab(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gTC(){var w=this,v=A.a([],x.s),u=w.d
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
u=w.c
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
v.push(C.fQR(w.b))
u=w.e
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
return B.d.aH(v," \xb7 ")},
gkl(d){return this.c}}
C.lm.prototype={
ac(){var w,v=this,u=A.T(x.N,x.z)
u.m(0,"type",v.a)
w=v.b
if(w.length!==0)u.m(0,"content",w)
w=v.c
if(w!=null&&w.length!==0)u.m(0,"url",w)
w=v.d
if(w!=null&&w.length!==0)u.m(0,"label",w)
return u}}
C.ib.prototype={
ac(){var w,v=this,u=A.T(x.N,x.z)
u.m(0,"id",v.a)
u.m(0,"question",v.b)
w=J.b5(v.c,new C.c52(),x.P)
w=A.A(w,w.$ti.k("ai.E"))
u.m(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.m(0,"thumbnailPath",w)
u.m(0,"printable",v.e)
u.m(0,"sortOrder",v.f)
return u}}
C.hX.prototype={
ai3(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.hX(v,u,t,s,r,h==null?w.f:h)},
b6S(d){var w=null
return this.ai3(w,w,w,w,d,w)},
cAn(d,e,f){return this.ai3(d,e,null,null,null,f)},
b6R(d){var w=null
return this.ai3(w,w,w,d,w,w)},
cA2(d,e){var w=null
return this.ai3(w,w,d,w,e,w)},
ac(){var w=this,v=C.hz_(w.c),u=w.e,t=A.U(u).k("J<1,a1<n,@>>")
u=A.A(new A.J(u,new C.c50(),t),t.k("ai.E"))
return A.E(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.b5B.prototype={}
C.Ty.prototype={
S(){return new C.aAQ(new A.ar(B.as,$.av()),A.mf(0,null,null),A.a([],x.m))},
Sc(d){return this.d.$1(d)}}
C.aAQ.prototype={
Z(){var w,v=this
v.a0()
w=J.b5(v.a.c,new C.dS7(),x.i)
w=A.A(w,w.$ti.k("ai.E"))
B.d.b_(w,new C.dS8())
v.d=w
v.HF()},
q(){var w=this.w
w.R$=$.av()
w.O$=0
this.x.q()
this.a2()},
abr(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$abr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.HF()
u.n(new C.dS1(u))
t=u.a
t.toString
s=u.d
s===$&&A.c()
w=2
return A.b(t.Sc(s),$async$abr)
case 2:r=e
if(u.c!=null){u.n(new C.dS2(u))
t=u.c.I(x.q).f
s=A.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.P(A.b1(null,null,null,r?B.d1:B.aD,null,B.q,null,s,null,B.S,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$abr,v)},
a5P(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a5P=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&A.c()
s=new C.hX(q,"New Category",B.EI,4284773515,D.asm,p.length)
t.n(new C.dRL(t,s))
t.HF()
p=t.c
if(p==null){w=1
break}w=3
return A.b(A.ch(null,null,!0,null,new C.dRM(s),p,null,!0,!0,x.i),$async$a5P)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.dRN(t,q,r))
case 1:return A.h(u,v)}})
return A.i($async$a5P,v)},
a_a(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a_a=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=B.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.n(new C.dRZ(t,p))
q.bJ(0,B.c2)
q=t.a.e
s=t.d
s===$&&A.c()
w=3
return A.b(C.c4Y(p,q,s),$async$a_a)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.dS_(t,r))
$.aT.x1$.push(new C.dS0(t))
case 1:return A.h(u,v)}})
return A.i($async$a_a,v)},
a7M(d){return this.bGN(d)},
bGN(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a7M=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&A.c()
t=r[d]
r=u.c
r.toString
w=2
return A.b(A.ch(null,null,!0,null,new C.dRT(t),r,null,!0,!0,x.i),$async$a7M)
case 2:s=f
if(s!=null)u.n(new C.dRU(u,d,s))
return A.h(null,v)}})
return A.i($async$a7M,v)},
bEF(d){this.n(new C.dRS(this,d))
this.HF()},
HF(){var w,v,u=this.d
u===$&&A.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].b6S(v)},
c3Z(d,e){var w={}
w.a=e
this.n(new C.dRY(w,this,d))},
WI(d){return this.bVP(d)},
bVP(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$WI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=A.eF(new C.dRX(u,d),!1,null,x.H)
w=2
return A.b(A.a9(s,!1).cp(t),$async$WI)
case 2:return A.h(null,v)}})
return A.i($async$WI,v)},
bx9(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?A.a([B.fx,B.bj],l):A.a([B.oP,B.en],l)
w=A.m(16)
v=A.H(m?B.d3.j(0.35):B.dy,B.r,1)
u=A.W(B.dR,m?B.dy:B.e_,n,n,n,n)
t=A.D(A.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,A.l(n,n,m?B.aN:B.M,n,n,n,n,n,n,n,n,n,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.Xd:A8.L_
r=x.p
s=A.a([A.aI(!1,n,!0,A.B(A.a([u,B.aa,t,A.W(s,m?B.bH:B.aj,n,n,n,n)],r),B.m,n,B.e,B.j,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dRP(o),n,n,n,n,n,n,n)],r)
if(o.r){u=A.a([B.T],r)
t=o.y
if(t.length!==0){q=(m?D.rt:B.c).j(0.65)
p=A.m(12)
u.push(A.p(n,A.jW(!0,n,o.x,new C.dRQ(o,d),t.length,n,n,n,n,!1,!1),B.f,n,B.a7h,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.ck,n,n,n))}u.push(B.P)
t=o.w
q=A.l(n,n,m?B.aN:B.M,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=A.l(n,n,m?B.bH:B.aj,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?B.bj:B.aN
q=A.D(A.aK(n,B.U,!1,n,!0,B.q,n,A.aL(),t,n,n,n,n,n,2,A.bn(n,new A.b3(4,A.m(14),B.Z),n,B.eM,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.dRR(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,q,!0,B.a5,n,B.am,n,n,n,n),1)
m=o.f?n:o.gchU()
p=A.bk(B.bk,n,n,n,n,n,B.iN,n,n,n,n,n)
u.push(A.B(A.a([q,new A.Ht(t,B.bk,n),B.d8,A.bL(o.f?B.pG:D.ai8,m,p)],r),B.dG,n,B.e,B.j,0,n,n))
B.d.v(s,u)}return A.dg(n,A.v(s,B.ah,n,B.e,B.j,0,B.p),n,n,B.b9,new A.o(n,n,v,w,n,new A.a5(B.a3,B.a7,B.x,l,n,n),B.n),B.ip,n,n,B.E_,B.bC,n,n,n)},
B(d){var w,v=this,u=null,t=A.M(d).ax.a===B.H,s=new C.b5B(t),r=t?B.da:B.bN,q=t?B.da:u,p=t?B.aN:B.M,o=A.d("Help Topics Admin",u,u,u,u,u,u,A.l(u,u,t?B.aN:B.M,u,u,u,u,u,u,u,u,u,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gc_Y()
if(n)n=B.QU
else n=A.W(B.x3,t?B.aN:B.M,u,u,u,u)
w=x.p
o=A.eC(A.a([A.hi(n,A.d("Save",u,u,u,u,u,u,A.l(u,u,t?B.aN:B.M,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=R.aRx(B.aL,u,O.Tf,B.nB,D.f5G,v.gbtC())
q=v.bx9(s)
n=A.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,A.l(u,u,t?B.bH:B.aj,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&A.c()
return A.ce(o,r,A.v(A.a([q,new A.C(B.E_,n,u),A.D(H.fVd(!1,new C.dS6(v,s),m.length,v.gc3Y(),D.bi9,u,!1),1)],w),B.ah,u,B.e,B.j,0,B.p),u,!1,!1,p,u)}}
C.NR.prototype={
S(){return new C.b7r()}}
C.b7r.prototype={
Z(){var w,v=this
v.a0()
w=v.a.c
v.d=new A.ar(new A.bc(w.b,B.b2,B.aM),$.av())
v.e=w.c
v.f=w.d},
q(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=r?D.rt:B.c,p=A.d("Edit category",s,s,s,s,s,s,A.l(s,s,r?B.c:B.bh,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&A.c()
o=A.aK(s,B.U,!1,s,!0,B.q,s,A.aL(),o,s,s,s,s,s,2,D.bFu,B.z,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,A.l(s,s,r?B.c:B.bh,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,B.a5,s,B.am,s,s,s,s)
w=x.aS
w=A.A(new A.J(D.bKR,new C.cFY(t),w),w.k("ai.E"))
w=A.c9(B.bI,w,B.by,8,8)
v=x.gN
v=A.A(new A.J(D.cH6,new C.cFZ(t),v),v.k("ai.E"))
u=x.p
v=A.ci(A.v(A.a([o,B.ab,w,B.ab,A.c9(B.bI,v,B.by,0,8)],u),B.m,s,B.e,B.Q,0,B.p),B.q,s,B.z,s,s,s,s,B.ak)
return A.er(A.a([A.bJ(!1,B.dg,s,s,!0,s,s,new C.cG_(d),s,s),A.bL(B.pN,new C.cG0(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.Z1.prototype={
S(){return new C.aCJ()},
o5(d){return this.d.$1(d)}}
C.aCJ.prototype={
Z(){this.a0()
this.d=A.bj(this.a.c.e,!0,x.u)},
atS(){var w=this.a,v=w.c,u=this.d
u===$&&A.c()
return w.o5(v.b6R(u))},
a5R(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a5R=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&A.c()
w=2
return A.b(u.aWz(new C.ib("q_"+1000*s,"",D.cFM,null,!1,r.length)),$async$a5R)
case 2:t=e
if(t!=null){u.n(new C.eC9(u,t))
u.atS()}return A.h(null,v)}})
return A.i($async$a5R,v)},
aWz(d){var w,v=this.c
v.toString
w=A.eF(new C.eCa(d),!1,null,x.u)
return A.a9(v,!1).cp(w)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=u?B.da:B.bN,s=u?B.da:v,r=u?B.aN:B.M,q=w.a.c
s=A.eC(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,A.d(q.b+" \u2014 Questions",v,v,v,v,v,v,A.l(v,v,u?B.aN:B.M,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=R.aRx(B.aL,v,O.Tf,B.nB,D.faW,w.gbu1())
q=w.d
q===$&&A.c()
q=q.length
if(q===0){q=A.au(A.d("No questions yet. Tap + Question.",v,v,v,v,v,v,A.l(v,v,u?B.bH:B.aj,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=A.hI(v,new C.eCf(w,new C.b5B(u)),q,D.bii,v,B.ak,new C.eCg(),!1)
return A.ce(s,t,u,v,!1,!1,r,v)}}
C.Z0.prototype={
S(){return new C.aCI()}}
C.aCI.prototype={
Z(){var w,v=this
v.a0()
w=v.a.c
v.d=new A.ar(new A.bc(w.b,B.b2,B.aM),$.av())
w=A.bj(w.c,!0,x.bP)
v.e=w
if(B.d.gai(w))J.cb(v.e,D.a1y)
w=v.a.c
v.f=w.d
v.r=w.e},
q(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.a2()},
abq(){var w=0,v=A.j(x.H),u=this,t
var $async$abq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(Z.Fp(78,1920),$async$abq)
case 2:t=e
if(t!=null)u.n(new C.eC5(u,t))
return A.h(null,v)}})
return A.i($async$abq,v)},
act(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$act=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=A.eF(new C.eC3(u),!1,null,x.dZ)
w=2
return A.b(A.a9(r,!1).cp(t),$async$act)
case 2:s=e
if(s!=null)u.n(new C.eC4(u,s))
return A.h(null,v)}})
return A.i($async$act,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.M(a1).ax.a===B.H,g=h?B.da:B.bN,f=h?B.da:i,e=h?B.aN:B.M,d=A.d("Edit Question",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=A.eC(A.a([A.dq(S.YV,B.pN,new C.eC7(j,a1),A.bk(B.aL,i,i,i,B.c,i,i,i,i,i,i,i)),B.aw],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=A.d("Question thumbnail",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=A.m(14)
w=j.f
v=h?B.bH:B.aj
w=A.aG(i,A.bt(e,K.aMB(A.m(14),B.bQ,140,B.Aj,v,w,1/0),B.ap),B.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gc_X(),i,i,i,i,i,i,!1,B.ad)
e=A.d("Question users will tap",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?B.bj:B.aN
u=A.m(16)
t=A.H(h?B.aI:B.aJ,B.r,1)
s=j.d
s===$&&A.c()
r=A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,15,i,i,B.a4,i,i,!0,i,i,i,i,i,i,i,i)
v=A.p(i,A.B(A.a([A.D(A.aK(i,B.U,!1,i,!0,B.q,i,A.aL(),s,i,i,i,i,i,2,A.bn(i,B.eA,i,B.bm,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.l(i,i,h?B.bH:B.aj,i,i,i,i,i,i,i,i,i,i,i,B.cq,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),B.z,!0,i,!0,i,!1,i,B.ai,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,B.a8,i,i,i,i,i,i,i,i,i,i,i,r,!0,B.a5,i,B.am,i,i,i,i),1),new A.Ht(j.d,i,i)],a0),B.m,i,B.e,B.j,0,i,i),B.f,i,i,new A.o(v,i,t,u,i,i,B.n),i,i,i,i,B.ej,i,i,i)
u=A.d("Printable document",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,i,i,i,B.a4,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=A.ix(B.aL,i,i,B.ag,i,new C.eC8(j),i,A.d("Shows a printable badge on this answer",i,i,i,i,i,i,A.l(i,i,h?B.bH:B.aj,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=A.d("Stored answer (not AI)",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=A.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,A.l(i,i,h?B.bH:B.aj,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.rt:B.c
q=A.m(16)
p=A.m(16)
o=A.m(16)
n=A.H(B.bk.j(0.45),B.r,1)
m=A.p(i,D.bxh,B.f,i,i,new A.o(B.bk.j(0.12),i,i,A.m(12),i,i,B.n),i,i,i,i,B.bm,i,i,i)
l=A.d("Open Document Editor",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&A.c()
k=J.aa(k)
l=A.D(A.v(A.a([l,B.av,A.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,A.l(i,i,h?B.bH:B.aj,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),B.F,i,B.e,B.j,0,B.p),1)
return A.ce(d,g,A.cM(A.a([f,B.P,w,B.d5,e,B.P,v,B.aO,u,B.P,t,B.av,s,B.ab,A.aD(!1,B.a1,!0,q,A.aI(!1,p,!0,A.p(i,A.B(A.a([m,B.ex,l,A.W(B.Aq,h?B.bH:B.aj,i,i,i,16)],a0),B.m,i,B.e,B.j,0,i,i),B.f,i,i,new A.o(i,i,n,o,i,i,B.n),i,i,i,i,B.fC,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gc5x(),i,i,i,i,i,i,i),B.f,r,0,i,i,i,i,i,B.ac)],a0),i,B.c4,i,i,B.ak,!1),i,!1,!1,i,i)}}
C.cXp.prototype={}
C.Tz.prototype={
S(){return new C.aAS(A.ka(!0,null,!0,!0,null,null,!1))}}
C.aAS.prototype={
Z(){var w,v,u,t,s,r,q=this
q.a0()
w=J.dE(q.a.c,new C.dSI())
w=A.A(w,w.$ti.k("G.E"))
q.e=w
v=A.a([],x.s)
for(w=J.aU(q.a.c);w.C();){u=w.gT(w)
switch(u.a){case"heading":v.push("## "+u.b)
break
case"text":u=u.b
if(B.a.i(u).length!==0)v.push(u)
break
case"bullets":for(u=u.b.split("\n"),t=u.length,s=0;s<t;++s){r=B.a.i(u[s])
if(r.length!==0)v.push("\u2022 "+r)}break
default:break}}w=B.d.aH(v,"\n\n")
q.d=new A.ar(new A.bc(w,B.b2,B.aM),$.av())},
q(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.f.q()
this.a2()},
atT(d,e){var w,v,u,t,s,r=this.d
r===$&&A.c()
r=r.a
w=r.b
if(!w.gep())return
v=r.a
r=w.a
u=w.b
t=d+B.a.an(v,r,u)+e
s=B.a.o7(v,r,u,t)
this.d.bJ(0,new A.bc(s,A.h3(B.bt,r+t.length),B.aM))},
aUL(d){var w,v,u,t,s=this.d
s===$&&A.c()
s=s.a
w=s.a
v=B.o.E(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=B.a.o7(w,v,v,u)
this.d.bJ(0,new A.bc(t,A.h3(B.bt,v+u.length),B.aM))},
a9q(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a9q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(Z.Fp(78,1920),$async$a9q)
case 3:s=e
if(s==null){w=1
break}t.n(new C.dSo(t,s))
case 1:return A.h(u,v)}})
return A.i($async$a9q,v)},
Wd(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hS().a3n(B.eD),$async$Wd)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return A.b(s.f8(),$async$Wd)
case 4:t.n(new r.dSt(t,e))
case 1:return A.h(u,v)}})
return A.i($async$Wd,v)},
a9r(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$a9r=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=$.av()
s=new A.ar(B.as,t)
r=new A.ar(new A.bc("https://",B.b2,B.aM),t)
q=u.c
q.toString
w=2
return A.b(A.ch(null,null,!0,null,new C.dSr(s,r),q,null,!0,!0,x.y),$async$a9r)
case 2:if(e===!0)u.n(new C.dSs(u,s,r))
s.R$=t
s.O$=0
r.R$=t
r.O$=0
return A.h(null,v)}})
return A.i($async$a9r,v)},
by4(){var w,v,u,t,s,r=null,q=A.a([],x.a),p=this.d
p===$&&A.c()
p=B.a.fo(p.a.a,A.ae("\\n\\s*\\n",!0,!1,!1,!1))
w=new A.J(p,new C.dSk(),A.U(p).k("J<1,n>")).bZ(0,new C.dSl())
for(p=J.aU(w.a),v=new A.hL(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gT(p)
if(B.a.a_(s,"## "))q.push(new C.lm("heading",B.a.i(B.a.aY(s,3)),r,r))
else if(B.a.a_(s,"\u2022 ")||B.a.a_(s,"- "))q.push(new C.lm("bullets",new A.J(A.a(s.split("\n"),u),new C.dSm(),t).bZ(0,new C.dSn()).aH(0,"\n"),r,r))
else q.push(new C.lm("text",s,r,r))}p=this.e
p===$&&A.c()
B.d.v(q,p)
if(q.length===0)q.push(D.a1y)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.cXp(n),l=n?B.aE:B.fz,k=A.d(p.a.d,o,o,o,o,o,o,B.cr,o,o,o),j=x.p
k=A.eC(A.a([A.dq(S.YV,B.a57,new C.dSy(p,d),A.bk(B.aL,o,o,o,B.c,o,o,o,o,o,o,o)),B.aa],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?B.cz:B.iH
v=A.c9(B.bI,A.a([p.uM(E.L0,"Bold",new C.dSz(p),m),p.uM(E.Xf,"Italic",new C.dSA(p),m),p.uM(E.afy,"Underline",new C.dSB(p),m),p.uM(Ac.Xm,"Heading",new C.dSC(p),m),p.uM(O.L1,"Bullets",new C.dSD(p),m),p.uM(E.afx,"Align",new C.dSE(),m),p.uM(B.Eq,"Link",p.gbT2(),m),p.uM(B.pd,"Image",p.gbT1(),m),p.uM(Y.Xy,"Video",p.gbT3(),m),p.uM(M.YA,"Signature",new C.dSF(p),m),p.uM(Y.L2,"Divider",new C.dSG(p),m)],j),B.by,4,4)
w=A.p(o,A.v(A.a([v,B.ar,A.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,A.l(o,o,n?B.e0:B.br,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),B.ah,o,B.e,B.j,0,B.p),B.f,w,o,o,o,o,o,o,E.aes,o,o,o)
v=n?B.da:B.c
u=A.m(12)
t=A.H(n?B.eo:B.e2,B.r,1)
s=A.a([new A.ab(0,B.G,B.w.j(n?0.35:0.08),B.cF,16)],x.V)
r=p.d
r===$&&A.c()
q=A.l(o,o,n?B.il:B.aE,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=A.a([w,A.D(new A.C(B.c4,A.p(o,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),r,o,o,o,o,o,2,A.bn(o,B.eA,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.e0:B.br,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!0,p.f,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,q,!0,B.a5,o,B.am,o,o,o,o),B.f,o,o,new A.o(v,o,t,u,s,o,B.n),o,o,o,o,A4.A3,o,o,o),o),1)],j)
n=p.e
n===$&&A.c()
if(n.length!==0){n=new A.hz(n,A.U(n).k("hz<1>"))
j.push(A.p(o,A.c9(B.bI,n.gdH(n).di(0,new C.dSH(p,m),x.g5).dA(0),B.by,0,8),B.f,o,o,o,o,o,o,o,B.Kn,o,o,o))}return A.ce(k,l,A.v(j,B.m,o,B.e,B.j,0,B.p),o,!1,!1,o,o)},
uM(d,e,f,g){var w=null,v=g.a,u=v?B.da:B.c,t=A.m(8),s=A.m(8)
return A.hs(A.aD(!1,B.a1,!0,t,A.aI(!1,s,!0,new A.C(B.ck,A.W(d,v?B.il:B.aE,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,w,w,w,B.ac),w,e,w,w)}}
C.d9u.prototype={}
C.ayr.prototype={
a3(){return"_KbView."+this.b}}
C.any.prototype={
S(){return new C.aAR(D.aNO)},
cGW(d,e){return this.e.$2$size(d,e)}}
C.aAR.prototype={
gawA(){var w,v
if(this.e==null)return null
for(w=J.aU(this.a.c);w.C();){v=w.gT(w)
if(v.a===this.e)return v}return null},
gck2(){var w,v,u,t,s,r=this.gawA()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
c_Z(d){this.n(new C.dSh(this,d))},
c6G(d){this.n(new C.dSi(this,d))},
bwn(){this.n(new C.dS9(this))},
bwp(){this.n(new C.dSa(this))},
gb18(){var w=A.bj(this.a.c,!0,x.i)
B.d.b_(w,new C.dSj())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.M(d).ax.a===B.H,f=new C.d9u(g),e=x.O
e=g?A.a([B.M.j(0.9),B.bj.j(0.85)],e):A.a([B.en.j(0.55),B.lT.j(0.45)],e)
w=A.m(22)
v=A.H((g?B.aI:B.fj).j(0.55),B.r,1)
switch(i.d.a){case 0:g=i.bxl(f)
break
case 1:g=i.gawA()
g.toString
g=i.by2(f,g)
break
case 2:u=i.gawA()
u.toString
t=i.gck2()
t.toString
s=A.aZ(u.d)
r=A.m(16)
r=A.p(h,A.d(t.b,h,h,h,h,h,h,D.eIW,h,h,h),B.f,h,h,new A.o(B.aL,h,h,r,h,h,B.n),h,h,h,h,B.bC,h,h,1/0)
q=g?B.aE:B.c
p=A.m(16)
o=A.H(g?B.aI:B.aJ,B.r,1)
n=A.a([new A.ab(0,B.G,B.w.j(g?0.28:0.06),B.ea,10)],x.V)
m=g?B.fx:B.oP
l=A.m(8)
k=A.W(B.pi,g?B.dy:B.e_,h,h,h,14)
j=x.p
j=A.v(A.a([new C.ayp(f,i.gbwo(),u.c,s,"Answer",h),A.D(A.cM(A.a([r,B.ab,A.p(h,A.v(A.a([A.p(h,A.B(A.a([k,B.et,A.d("Stored answer",h,h,h,h,h,h,A.l(h,h,g?B.dy:B.e_,h,h,h,h,h,h,h,h,11,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),B.m,h,B.e,B.Q,0,h,h),B.f,h,h,new A.o(m,h,h,l,h,h,B.n),h,h,h,B.e3,B.h0,h,h,h),new C.aXn(t.c,t.e,f,h)],j),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(q,h,o,p,n,h,B.n),h,h,h,h,B.c4,h,h,1/0)],j),h,B.bi1,h,h,B.ak,!1),1)],j),B.ah,h,B.e,B.j,0,B.p)
g=j
break
default:g=h}return A.p(h,g,B.ap,h,h,new A.o(h,h,v,w,h,new A.a5(B.b0,B.b3,B.x,e,h,h),B.n),h,h,h,B.it,h,h,h,h)},
aSu(d){var w,v,u,t=null,s=d.a,r=s?D.rt:B.c,q=B.aB.j(0.22)
q=A.a([new A.ab(0,B.G,q,B.J,14),new A.ab(0,B.G,B.w.j(s?0.28:0.06),B.J,8)],x.V)
w=A.H(s?B.aI:B.fj,B.r,2)
v=this.a
u=x.p
q=A.a([A.p(t,A.hP(v.cGW(v.d,72),B.ap),B.f,t,t,new A.o(r,t,w,t,q,t,B.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)B.d.v(q,A.a([B.ar,A.d("Tap to switch",t,t,t,t,t,t,A.l(t,t,B.d1,t,t,t,t,t,t,t,t,12,t,t,B.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return A.v(q,B.m,t,B.e,B.j,0,B.p)},
bxl(d){var w,v,u=this,t=null,s=u.a.r
s=A.au(s!=null?A.aG(t,u.aSu(d),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,B.ad):u.aSu(d),t,t,t)
w=d.a
v=A.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,A.l(t,t,w?B.aN:B.M,t,t,t,t,t,t,t,t,20,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),B.L,t,t)
return A.cM(A.a([s,B.ay,v,B.ar,A.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,A.l(t,t,w?B.bH:B.aj,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),B.L,t,t),B.bv,A.i8(!0,t,t,B.z,G.aJ2,new C.dSc(u,d),u.gb18().length,t,B.dM,B.ak,!0)],x.p),t,D.bik,t,t,B.ak,!1)},
by2(d,e){var w,v,u,t,s=null,r=A.bj(e.e,!0,x.u)
B.d.b_(r,new C.dSe())
w=A.aZ(e.d)
v=d.a
u=A.d("Tap a question to read the stored answer.",s,s,s,s,s,s,A.l(s,s,v?B.bH:B.aj,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=A.au(A.d("No questions in this category yet.",s,s,s,s,s,s,A.l(s,s,v?B.bH:B.aj,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=A.hI(s,new C.dSf(this,r,d,e),t,B.us,s,B.ak,new C.dSg(),!1)
return A.v(A.a([new C.ayp(d,this.gbwm(),e.c,w,e.b,s),new A.C(Ah.ut,u,s),A.D(v,1)],x.p),B.ah,s,B.e,B.j,0,B.p)}}
C.ayp.prototype={
B(d){var w=this,v=null,u=w.c.a,t=A.aF(v,v,v,v,A.W(B.ew,u?B.aN:B.M,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=A.m(12)
q=A.p(v,A.W(w.e,s,v,v,v,22),B.f,v,v,new A.o(r,v,v,q,v,v,B.n),v,v,v,v,B.ck,v,v,v)
return new A.C(D.blx,A.B(A.a([t,q,B.aw,A.D(A.d(w.r,v,v,v,v,v,v,A.l(v,v,u?B.aN:B.M,v,v,v,v,v,v,v,v,17,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,v,v),v)}}
C.a9H.prototype={
B(d){var w=null,v=this.c,u=A.aZ(v.d),t=this.d.a,s=t?D.rt:B.c,r=A.m(14),q=A.m(14),p=A.m(14),o=A.H(t?B.aI:B.aJ,B.r,1),n=A.a([new A.ab(0,B.G,B.w.j(t?0.28:0.06),B.dz,6)],x.V),m=u.j(0.15),l=A.m(12)
l=A.p(w,A.W(v.c,u,w,w,w,22),B.f,w,w,new A.o(m,w,w,l,w,w,B.n),w,40,w,w,w,w,w,40)
return new A.fC(1,A.aD(!1,B.a1,!0,r,A.aI(!1,q,!0,A.p(w,A.v(A.a([l,B.ar,A.d(v.b,w,2,B.a2,w,w,w,A.l(w,w,t?B.aN:B.M,w,w,w,w,w,w,w,w,10,w,w,B.I,w,1.1,!0,w,w,w,w,w,w,w,w),B.L,w,w)],x.p),B.m,w,B.b7,B.j,0,B.p),B.f,w,w,new A.o(w,w,o,p,n,w,B.n),w,w,w,w,B.ck,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.ac),w)}}
C.aXn.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=A.a([],q)
if(this.d){w=r.a
v=w?B.fx:B.oP
u=A.m(8)
t=A.W(B.tc,w?B.dy:B.e_,s,s,s,14)
p.push(A.p(s,A.B(A.a([t,B.d8,A.d("Printable document",s,s,s,s,s,s,A.l(s,s,w?B.dy:B.e_,s,s,s,s,s,s,s,s,10,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),B.m,s,B.e,B.Q,0,s,s),B.f,s,s,new A.o(v,s,s,u,s,s,B.n),s,s,s,B.cN,B.eC,s,s,s))}B.d.v(p,J.b5(this.c,new C.c4Z(r),x.l))
return A.v(p,B.F,s,B.e,B.j,0,B.p)}}
C.a9z.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new A.C(D.bg9,A.d(q.b,r,r,r,r,r,r,A.l(r,r,s.d.a?B.aN:B.M,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new A.C(B.hD,A.bt(A.m(12),K.aMB(r,B.bQ,160,B.pd,r,w,1/0),B.ap),r)
case"video":v=q.c
q=v==null?q.b:v
return new A.C(B.hD,new C.ayq(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new A.C(B.wz,A.aI(!1,r,!0,A.d(q,r,r,r,r,r,r,A.l(r,r,s.d.a?B.cC:B.bk,r,B.mk,r,r,r,r,r,r,r,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.czE(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=A.jn(v?B.aI:B.aJ,r,r,r,r,r)
q=A.d(q.b,r,r,r,r,r,r,A.l(r,r,v?B.cm:B.aI,r,r,r,r,r,r,r,r,r,B.cA,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=A.p(r,r,B.f,v?B.bH:B.aj,r,r,r,1,r,r,r,r,r,120)
return new A.C(B.zP,A.v(A.a([u,q,B.aO,t,B.av,A.d("Signature",r,r,r,r,r,r,A.l(r,r,v?B.bH:B.aj,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r)
case"bullets":v=x.cl
q=A.A(new A.cV(new A.a3(A.a(q.b.split("\n"),x.s),new C.czF(),x.cc),new C.czG(s),v),v.k("G.E"))
return new A.C(B.l0,A.v(q,B.F,r,B.e,B.j,0,B.p),r)
case"divider":return new A.C(B.hD,A.jn(s.d.a?B.aI:B.aJ,r,r,r,r,r),r)
default:q=q.b
if(B.a.i(q).length===0)return B.bF
return new A.C(B.fk,C.htf(q,s.d),r)}}}
C.ayq.prototype={
S(){return new C.bdr()}}
C.bdr.prototype={
Z(){this.a0()
this.abs()},
abs(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$abs=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=B.a.i(r.a.c)
if(J.aa(n)!==0)p=!J.cX(n,"http")&&!J.cX(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=A.Wo(A.cs(n,0,null),null)
w=7
return A.b(J.afE(q),$async$abs)
case 7:if(r.c==null){w=1
break}r.n(new C.d9v(r,q))
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
return A.i($async$abs,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?B.bj:B.f5
u=A.m(12)
return A.p(B.A,A.W(B.pn,w?B.bH:B.aj,t,t,t,36),B.f,t,t,new A.o(v,t,t,u,t,t,B.n),t,120,t,t,t,t,t,t)}w=A.m(12)
v=s.a
u=J.afC(v)
return A.bt(w,new A.fC(u,new A.am(B.A,t,B.a9,B.q,A.a([new A.ze(s,t),A.aF(t,t,t,t,A.W(v.f?B.afF:B.L3,B.c,t,t,t,44),t,t,t,new C.d9x(this,s),t,t,t,t,t,t)],x.p),t),t),B.ap)}}
C.aok.prototype={
a3(){return"NgmyMusicLane."+this.b}}
C.Hj.prototype={
a3(){return"NgmyMusicRhymeScheme."+this.b}}
C.qU.prototype={}
C.anB.prototype={
S(){var w=null
return new C.aAT(new A.ar(B.as,$.av()),A.mf(0,w,w),A.a([],x.m),D.Bq,D.aAT,w,w)},
gdS(){return this.d}}
C.aAT.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,B.mE,null,1,null,v)
w.f2(0,!0)
v.as!==$&&A.aQ()
v.as=w
v.z=B.d.gL(D.a0a).a},
q(){var w=this,v=w.as
v===$&&A.c()
v.q()
v=w.d
v.R$=$.av()
v.O$=0
w.e.q()
w.bpZ()},
ganf(){var w,v,u,t,s=this.x
if(s===D.Br)return null
s=s===D.Bq
w=s?D.a0a:D.a_r
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?B.d.gL(w):null},
ckO(d){return this.n(new C.dSW(this,d))},
awn(){$.aT.x1$.push(new C.dSN(this))},
Hw(d){return this.ckg(d)},
aUM(){return this.Hw(null)},
ckg(b0){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$Hw=A.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=B.a.i(b0==null?q.d.a.a:b0)
if(J.aa(a8)===0||q.r||q.a.e){w=1
break}w=3
return A.b(q.a.f.$0(),$async$Hw)
case 3:e=b2
if(!e){w=1
break}A.jE()
d=a8.toLowerCase()
p=B.a.t(d,"continue")||B.a.t(d,"keep going")||B.a.t(d,"go on")||B.a.t(d,"next verse")||B.a.t(d,"more lyrics")||B.a.t(d,"endelea")||B.a.t(d,"endelea na")||B.a.t(d,"ongeza")||B.a.t(d,"tuendelee")
a0=q.f
a1=B.d.ba(a0,new C.dSP())
o=!p&&!a1
d=a8.toLowerCase()
if(!(B.a.t(d,"fix")||B.a.t(d,"rewrite")||B.a.t(d,"re-write")||B.a.t(d,"rhyme better")||B.a.t(d,"better rhyme")||B.a.t(d,"sound better")||B.a.t(d,"improve")||B.a.t(d,"polish")||B.a.t(d,"make it rhyme")||B.a.t(d,"boresha")||B.a.t(d,"rekebisha")||B.a.t(d,"endeleza mistari")))a2=C.h_B(a8)&&a1
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
l=C.h_B(a8)&&!p
q.n(new C.dSQ(q,a8))
q.awn()
k=B.a.i(q.a.c)
if(J.aa(k)===0){q.n(new C.dSR(q))
q.awn()
w=1
break}t=5
j=A.mL(k)
i=new A.J(a0,new C.dSS(),A.U(a0).k("J<1,n>")).aH(0,"\n\n")
a0=C.hMC(m,p,o,q.x,n,q.y,q.ganf(),l)
a3=J.aa(i)!==0?"--- Conversation so far ---\n"+A.t(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+A.t(a8)
w=8
return A.b(A.qm(j,h,B.he,null),$async$Hw)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=B.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=B.a.i(a0)}else a6=L.by4(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.n(new C.dST(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.n(new C.dSU(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.n(new C.dSV(q))
q.awn()
w=r.pop()
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Hw,v)},
bC0(){return this.Hw("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=A.M(d).ax.a===B.H,p=q?B.Dw:D.b7l,o=x.p
o=A.a([A.v(A.a([A.D(s.cjw(q),1),s.bBe(q)],o),B.m,r,B.e,B.j,0,B.p)],o)
if(s.f.length!==0&&!s.r){w=B.aK.j(0.55)
v=s.r?r:s.gbC_()
u=A.m(28)
t=A.a([B.aK,B.aX],x.O)
o.push(A.an(78,A.aD(!1,B.a1,!0,r,A.aI(!1,r,!0,A.et(D.dQp,r,new A.o(r,r,r,u,A.a([new A.ab(0,B.G,B.aK.j(0.45),B.cF,16)],x.V),new A.a5(B.a3,B.a7,B.x,t,r,r),B.n),r,r,r),B.r2,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),B.f,B.K,10,r,w,B.r2,r,r,B.ac),r,r,r,14,r,r))}return A.p(r,new A.am(B.W,r,B.a9,B.q,o,r),B.f,p,r,r,r,r,r,r,r,r,r,r)},
cjw(d){var w,v,u,t=this,s=null
if(t.x===D.Br)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=A.a([A.fEv(s,!1,B.K,0,0,w,A.fAU(t.cp_(d),B.Tz,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=A.W(B.ai0,B.aB.j(0.5),s,s,s,52)
w.push(A.b2T(new A.C(B.ev,A.v(A.a([u,B.ay,A.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,A.l(s,s,d?B.az:B.dx,s,s,s,s,s,s,s,s,14,s,s,B.a4,s,1.45,!0,s,s,s,s,s,s,s,s),B.L,s,s),B.ay,A.c9(B.fH,A.a([t.afF("Full bongo love song ABAB",d),t.afF("Mix: group vs private jet \u2014 which flies?",d),t.afF("Song from John 3:16 + matching verses",d),t.afF("Fix my rhyme \u2014 paste your lines",d)],v),B.by,8,8)],v),B.m,s,B.b7,B.j,0,B.p),s),!1))}else{v=t.r?1:0
w.push(new A.ns(D.bgR,A.VQ(new A.o_(new C.dSO(t,d),u+v,!0,!0,!0,0,A.rm(),s)),s))}return A.uW(0,s,B.q,t.e,B.z,s,s,A6.a7d,s,s,!1,s,B.ak,!1,w)},
cp_(d){var w=this.as
w===$&&A.c()
return A.c4(w,new C.dT2(this,d),null)},
cp1(d){var w,v=this,u=null,t=A.m(14),s=v.r?u:new C.dT4(v),r=B.w.j(d?0.35:0.06),q=A.m(14),p=A.H(B.b6.j(0.35),B.r,1),o=v.ganf()
o=o==null?u:o.c
o=A.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,B.Hy,u,u,u)
w=v.ganf()
w=w==null?u:w.b
if(w==null)w="Style"
w=A.D(A.d(w,u,u,u,u,u,u,A.l(u,u,d?B.c:B.bh,u,u,u,u,u,u,u,u,12,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return A.aD(!1,B.a1,!0,u,A.aI(!1,t,!0,A.p(u,A.B(A.a([o,B.aa,w,A.W(v.w?B.Lu:B.qt,B.b6,u,u,u,20)],x.p),B.m,u,B.e,B.j,0,u,u),B.f,u,u,new A.o(r,u,p,q,u,u,B.n),u,u,u,u,B.pa,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ac)},
asj(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=A.a([B.aW,B.aS],x.O)
break
case 1:w=A.a([B.bk,B.cC],x.O)
break
case 2:w=A.a([B.bx,B.aB],x.O)
break
default:w=n}v=m?6:0
u=A.m(14)
t=A.m(14)
s=this.r?n:new C.dSM(this,d)
r=A.m(14)
w=m?new A.a5(B.a3,B.a7,B.x,w,n,n):n
if(m)q=n
else q=B.w.j(g?0.3:0.05)
p=A.d(f,n,n,n,n,n,n,B.Hy,n,n,n)
if(m)o=B.c
else o=g?B.af:B.bh
return A.D(A.aD(!1,B.a1,!0,u,A.aI(!1,t,!0,A.dg(n,A.v(A.a([p,A.d(e,n,n,n,n,n,n,A.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),B.m,n,B.e,B.j,0,B.p),n,n,B.b9,new A.o(q,n,n,r,n,w,B.n),B.a1,n,n,n,B.jG,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),B.f,n,v,n,n,n,n,n,B.ac),1)},
cp2(d,e){var w,v,u,t=this,s=null,r=t.x===D.Bq?t.z:t.Q,q=A.m(20)
if(r===d.a)r=B.b6.j(e?0.25:0.15)
else r=B.w.j(e?0.2:0.04)
w=A.m(20)
v=t.r?s:new C.dT5(t,d)
u=A.d(d.c,s,s,s,s,s,s,B.Rc,s,s,s)
return A.aD(!1,B.a1,!0,q,A.aI(!1,w,!0,new A.C(B.fL,A.B(A.a([u,B.d8,A.d(d.b,s,s,s,s,s,s,A.l(s,s,e?B.c:B.bh,s,s,s,s,s,s,s,s,10,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.m,s,B.e,B.Q,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),B.f,r,0,s,s,s,s,s,B.ac)},
afF(d,e){var w=null,v=A.d(d,w,w,w,w,w,w,E.a51,w,w,w),u=B.aB.j(e?0.2:0.1)
return A.mN(w,u,v,w,this.r?w:new C.dSX(this,d),w,w,w,w)},
bBe(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=A.m(22),o=d?B.M.j(0.95):B.c,n=A.H(B.aB.j(0.2),B.r,1),m=x.p,l=A.a([],m)
if(q>0)l.push(new A.C(F.aee,A.d("$"+B.k.aa(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,A.l(r,r,B.aK.j(0.85),r,r,r,r,r,r,r,r,9,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=A.l(r,r,d?B.c:B.bh,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.Br?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=A.D(A.aK(r,B.U,!1,r,!0,B.q,r,A.aL(),w,r,r,r,r,r,2,A.bn(r,B.eA,r,B.ha,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.l(r,r,d?B.c1:B.hB,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),B.z,!0,r,!0,r,!1,r,B.ai,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.dSJ(s),r,!1,r,r,!1,r,!0,r,B.a8,r,r,r,r,r,r,r,r,r,r,r,v,!0,B.a5,r,B.am,r,r,r,r),1)
u=s.r
t=u?r:new C.dSK(s)
l.push(A.B(A.a([v,new A.Ht(w,B.aB,r),A.aD(!1,B.a1,!0,r,A.aI(!1,r,!0,A.et(u?D.dQz:D.bzy,r,D.aTv,42,r,42),B.cI,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),B.f,r,0,r,r,B.cI,r,r,B.ac)],m),B.dG,r,B.e,B.j,0,r,r))
return A.p(r,A.v(l,B.ah,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,n,p,r,r,B.n),r,r,r,B.uq,B.acP,r,r,r)}}
C.aIS.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.TA.prototype={
ac(){var w=this
return A.E(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.XL.prototype={
S(){return new C.axT(null,null)},
bbA(){return this.f.$0()}}
C.axT.prototype={
Z(){var w,v=this,u=null
v.a0()
w=A.bi(u,D.bfd,u,1,u,v)
w.cm(0)
v.d!==$&&A.aQ()
v.d=w
w=A.bi(u,B.p3,u,1,u,v)
w.f2(0,!0)
v.e!==$&&A.aQ()
v.e=w
w=A.bi(u,B.nt,u,1,u,v)
w.cE(0)
v.f!==$&&A.aQ()
v.f=w
w=A.bi(u,B.wt,u,1,u,v)
w.cm(0)
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
w.boP()},
c00(){var w=this.d
w===$&&A.c()
w.en(0).bz(new C.d74(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(A.aH(d,B.bR,x.w).w.a.a-32,360),h=B.w.j(0.82),g=k.gc0_(),f=x.l,e=J.e_(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&A.c()
e[v]=new A.C5(new C.d75(k,v,d),j,w,j)}f=A.A(e,f)
w=k.d
w===$&&A.c()
u=A.m(28)
t=A.H(B.c.j(0.22),B.r,1.5)
s=A.a([new A.ab(2,B.G,B.aX.j(0.35),B.J,40),new A.ab(0,B.G,B.aL.j(0.25),B.fG,28)],x.V)
r=k.e
r===$&&A.c()
q=k.r
q===$&&A.c()
q=A.c4(new A.h5(A.a([r,q],x.U)),new C.d76(k),j)
r=A.nr(B.jd,D.f8k,new C.d77())
p=A.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,A.l(j,j,B.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,B.cq,j,1.45,!0,j,j,j,j,j,j,j,j),B.L,j,j)
o=x.p
n=A.B(A.a([k.aUN(B.k8,"Resets in 24h"),B.aa,k.aUN(B.pi,"Help Topics ready")],o),B.m,j,B.b7,B.j,0,j,j)
m=A.a([],o)
k.a.toString
l=B.c.j(0.35)
m.push(A.D(A.dV(D.f3e,new C.d78(k),A.db(j,j,j,j,j,j,j,j,j,B.af,j,j,B.lZ,j,new A.b6(A.m(14),B.Z),new A.ay(l,1,B.r,-1),j,j,j,j)),1))
k.a.toString
m.push(B.aw)
k.a.toString
l=A.m(14)
m.push(A.D(A.bL(D.f8b,g,A.bk(B.aL,j,j,6,B.c,j,B.lZ,B.aL.j(0.5),new A.b6(l,B.Z),j,j,j)),1))
f.push(A.au(A.aG(j,A.c4(w,new C.d79(k),A.p(j,A.v(A.a([q,B.ay,r,B.T,p,B.P,n,B.bv,A.B(m,B.m,j,B.e,B.j,0,j,j)],o),B.m,j,B.e,B.Q,0,B.p),B.f,j,j,new A.o(j,j,t,u,s,D.bHh,B.n),j,j,j,j,A7.ae6,j,j,i)),B.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.d7a(),j,j,j,j,j,j,!1,B.ad),j,j,j))
return A.aD(!1,B.a1,!0,j,A.aG(j,new A.am(B.W,j,B.a9,B.q,f,j),B.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,B.ad),B.f,h,0,j,j,j,j,j,B.ac)},
aUN(d,e){var w=null,v=B.c.j(0.08),u=A.m(20),t=A.H(B.c.j(0.12),B.r,1)
return A.p(w,A.B(A.a([A.W(d,B.aX,w,w,w,13),B.et,A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.fL,w,w,w)}}
C.aHL.prototype={
aP(){this.aX()
this.aV()
this.dD()},
q(){var w=this,v=w.b0$
if(v!=null)v.a1(0,w.gdB())
w.b0$=null
w.a2()}}
C.Mc.prototype={}
C.po.prototype={}
C.ao7.prototype={
S(){return new C.aBe(A.a([],x.E),A.a([],x.s))}}
C.aBe.prototype={
ganD(){return B.k.E(A.JD(this.a.c.a,new C.e1w(this)),0,1/0)},
a5Z(){var w,v=this,u=v.d,t=v.ganD()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)A.qk(u.a,t,!0,!1)},
I_(d,e){var w,v,u,t=this,s=t.ganD(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.ganD()
if(w<v-0.005)A.h4D(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)A.qk(u.a,w,!0,!1)
A.qk(t.a.c.a,w,!0,!1)
A.zT(!0,!1,w,t.a.c.a)},
Z(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a0()
$.aT.c_$.push(o)
w=$.H8+1
$.H8=w
if(w===1){w=$.fSl
if(w!=null)w.$0()}v=$.fCV.h(0,B.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=A.bj(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=A.bj(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=A.lu(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,B.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=A.aMg(u,B.k.E(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new A.uP(w,u,r,q,s.e,p)}o.d=t}o.Ns()
o.a5Z()
$.aT.x1$.push(new C.e2c(o))
o.Q=A.dD(B.nq,new C.e2d(o))
o.as=A.dD(B.fK,new C.e2e(o))},
q(){var w=this,v=w.Q
if(v!=null)v.a9(0)
v=w.as
if(v!=null)v.a9(0)
$.aT.hv(w)
C.hlb()
w.a2()},
cr4(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new A.Q(Date.now(),0,!1)
v=p.r
if(!C.a5K(v,w)){if(C.fCX(p,q.e)){q.n(new C.e1V(q,p))
q.wS(!1,!0,!0)}else if(q.c!=null)q.n(new C.e1W())
return}if(!C.c7e(v.c?v.bQ():v)){q.n(new C.e1X(p))
q.aUW(!1)
return}u=p.gBh()
if(u<=0)return
t=w.cY(A.bW(A.bw(w),A.bE(w),A.bO(w),12,0,0,0,0))
s=C.fCY(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.n(new C.e1Y())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(B.d.ba(q.e,new C.e1Z(r))){q.n(new C.e2_(p,w,u))
return}q.n(new C.e20(q,p,u,w))
q.aus(new A.d_(r,p.a,u,B.fw,B.f7,"Clock-in daily earnings (local)",null,null,B.ci,w))},
iE(d){if(d===B.fp)this.Dt()},
Ns(){var w,v,u,t,s,r,q,p=this.d
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
w.c4=A.bj(p.c4,!0,x.N)
w=this.a.c
w.bP=p.c4.length
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
q=new A.uP(u,t,s,r,v.e,q)
u=q}w.x=u},
Q3(d){return this.cpN(d)},
cpN(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Q3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.Ns()
t.I_(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return A.b(x.r.b(s)?s:A.dQ(s,x.H),$async$Q3)
case 3:case 1:return A.h(u,v)}})
return A.i($async$Q3,v)},
Dt(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$Dt=A.e(function(d,e){if(d===1){s.push(e)
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
return A.b(H.yD(q.w,k,l,j,m,!1,n),$async$Dt)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.n(new C.e1Q(q,p))
q.Q3(!1)}w=8
return A.b(q.Ib(),$async$Dt)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=A.a6(h)
$.al.$1("[growth income] pull wallet: "+A.t(o))
w=9
return A.b(q.Ib(),$async$Dt)
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
return A.i($async$Dt,v)},
LV(d){return this.bvz(d)},
bvy(){return this.LV(null)},
bvz(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$LV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return A.b(A.ax(),$async$LV)
case 3:s=f
r=B.a.i(t.a.c.a.toLowerCase())
q=A.d7(t.w,x.N)
r=s.rn("ngmy_gi_credited_txn_ids_"+r)
q.v(0,r==null?A.a([],x.s):r)
j.a=0
p=A.a([],x.s)
o=d==null?null:A.kp(d,A.U(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,A.K)(r),++m){l=r[m]
k=l.a
if(q.t(0,k))continue
if(o!=null&&!o.t(0,k))continue
if(l.d===B.fn&&l.x===B.ci&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.n(new C.e1x(j,t,i))
q.v(0,p)
r=A.A(q,A.a2(q).k("cl.E"))
t.w=r
w=4
return A.b(A.ao9(t.a.c.a,r),$async$LV)
case 4:t.au0(!1,!0)
r=t.c
if(r!=null)r.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d("Balance updated: +$"+A.dx(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$LV,v)},
Ib(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$Ib=A.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=A.U(a2).k("a3<1>")
a4=A.A(new A.a3(a2,new C.e1R(),a3),a3.k("G.E"))
a5=a4
a6=A.a([],x.s)
w=J.aa(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=A.U(a2).k("J<1,n>")
e=A.A(new A.J(a2,new C.e1S(),a3),a3.k("ai.E"))
q=e
w=9
return A.b(A.la("transactions","id,status",null,null,null,A.E(["id",q],x.N,x.j),null,!0,null,null,!1,B.bE),$async$Ib)
case 9:p=a9
if(r.c==null){w=1
break}o=!1
for(a2=J.aU(p);a2.C();){n=a2.gT(a2)
m=n
a3=J.q(m,"id")
l=J.k(a3==null?"":a3)
a3=A.aM(J.q(m,"status"))
d=a3==null?null:B.k.N(a3)
k=d==null?0:d
if(J.aa(l)===0)continue
j=B.d.bi(r.e,new C.e1T(l))
if(j<0)continue
i=r.e[j].x
if(J.y(k,1))a0=B.ci
else a0=J.y(k,2)?B.jU:B.dr
h=a0
if(!J.y(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===B.dr&&h===B.ci&&a3[j].d===B.fn)J.cb(a6,l)
if(i===B.dr&&h===B.jU&&r.e[j].d===B.eI){g=r.d
if(g!=null){r.I_(g.d+r.e[j].c,!1)
r.au0(!1,!0)}}}}if(o&&r.c!=null)r.n(new C.e1U())
t=2
w=8
break
case 6:t=5
a7=s.pop()
f=A.a6(a7)
$.al.$1("[growth income] refresh deposit status: "+A.t(f))
w=8
break
case 5:w=2
break
case 8:case 4:w=J.aa(a6)!==0?10:12
break
case 10:w=13
return A.b(r.LV(a6),$async$Ib)
case 13:w=11
break
case 12:w=14
return A.b(r.bvy(),$async$Ib)
case 14:case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ib,v)},
O2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$O2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return A.b(A.u7(i.a,i),$async$O2)
case 3:h=e
if(t.c==null){w=1
break}t.n(new C.e1B(t,h))
t.Ns()
t.a5Z()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return A.b(H.yD(s[0],p,q,o,r,!0,i),$async$O2)
case 4:i=e.a
n=i[4]
m=A.bj(i[2],!0,x.o)
l=i[5]
t.w=A.bj(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.Ns()
t.a5Z()
k=C.fCX(n,m)
if(k)t.I_(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.Y&&s.aw>0
else s=!0
j=A.fT3(n,m,new A.Q(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.Ns()
if(t.c==null){w=1
break}t.n(new C.e1C(t,n,m,l))
if(i){t.wS(!1,!0,!0)
if(j==="reset"){A.fRV(t.a.c.a)
i=t.c
if(i!=null)A.fRY(i,null)}else if(j==="warn2"){A.fRW(t.a.c.a)
i=t.c
if(i!=null)C.fRZ(i)}}else if(k)t.wS(!1,!0,!0)
else t.Q3(!1)
case 1:return A.h(u,v)}})
return A.i($async$O2,v)},
wS(d,e,f){return this.cab(d,e,f)},
au0(d,e){return this.wS(d,!1,e)},
aUW(d){return this.wS(!1,d,!1)},
cab(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$wS=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new A.Q(Date.now(),0,!1).a5()
r=t.a.c.a
q=t.e
p=t.f
w=3
return A.b(A.qS(r,o,q,!1,t.w,s,p),$async$wS)
case 3:p=t.a.c.a
q=t.e
r=t.f
A.Hc(t.w,p,q,s,o,r)
if(f)t.Q3(d)
case 1:return A.h(u,v)}})
return A.i($async$wS,v)},
c0g(){this.n(new C.e1K())
this.au0(!1,!0)},
ac6(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===B.ci&&A.rj(d)){w=r.a
w.f.$1(new A.d_(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.c7a(q,d)
v=q.d=A.JD(r.a.c.a,new C.e1H(r))
r.at=r.a.c.d=v
A.qk(q.a,v,!0,!1)
if(r.c!=null)r.n(new C.e1I(r,d))
r.wS(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new A.d_(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===B.dr
if(w&&d.d===B.fn)s=!1
else if(w&&d.d===B.eI){r.I_(q.d-d.c,!0)
s=!0}else{C.c7a(q,d)
w=d.d
s=w===B.eI||w===B.jw
r.I_(q.d,s)}r.n(new C.e1J(r,d))
w=d.d
r.wS(s,e,w===B.eI||w===B.jw||d.x===B.ci||w===B.fw)},
aus(d){return this.ac6(d,!0,!1)},
aVT(d,e){return this.ac6(d,!0,e)},
aVS(d,e){return this.ac6(d,e,!1)},
c3c(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.hOM(u,e,d)){v.lA("This plan is already active.")
return}w=A.h49(u.a,d,e)
if(C.hLe(u.a,v.e,w)){v.lA("You already own this plan.")
return}if(u.d<g){v.lA("Insufficient balance. Add funds in the Wallet tab first.")
return}v.n(new C.e1L(v))
v.n(new C.e1M(v,u,new A.uP(d,e,0.0286,new A.Q(Date.now(),0,!1),0,0)))
v.aus(new A.d_(w,u.a,g,B.jw,B.f7,"Direct investment buy: "+d,null,null,B.ci,new A.Q(Date.now(),0,!1)))
v.n(new C.e1N(v))
v.lA("Plan purchased: "+d)},
lA(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.P(A.b1(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
Yo(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ho(s,new C.ala(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$Yo)
case 3:w=4
return A.b(t.O2(),$async$Yo)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yo,v)},
acA(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$acA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ho(s,new C.afY(r,A.a([r],x.d9),B.Ok,t.a.d,t.gaVR(),t.gaUV(),null),!1,null,x.X),$async$acA)
case 3:case 1:return A.h(u,v)}})
return A.i($async$acA,v)},
acy(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$acy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ho(s,new C.aiL(r,t.a.d,t.e,t.gaVR(),t.gaUV(),new C.e1P(t),null),!1,"LocalGrowthGameCenter",x.X),$async$acy)
case 3:case 1:return A.h(u,v)}})
return A.i($async$acy,v)},
aaa(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aaa=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new A.Q(s,0,!1)
w=C.fCX(j,t.e)?3:4
break
case 3:w=5
return A.b(t.aUW(!0),$async$aaa)
case 5:case 4:if(j.x==null){t.lA("Choose an investment plan first, then come back to clock in.")
t.n(new C.e1D(t))
w=1
break}if(A.md(r)===6||A.md(r)===7){t.lA("Clock-in opens Monday through Friday.")
w=1
break}if(!C.fT4(r)){t.lA("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a5K(q,r)&&j.fy>0){t.lA("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!A.aMZ(q,r))if(!A.aMZ(j.fr,r)){q=A.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,A.K)(p),++n){m=p[n]
if(B.a.i(m.b.toLowerCase())===B.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new A.aD2(m.y,l,m.a))}}q=A.h3B(q,r)}else q=p
else q=p}else q=!1
if(q){t.lA("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.lA("You are already clocked in for today.")
w=1
break}k=C.hmB(r)
q=j.a
t.n(new C.e1E(j,r,k))
t.aVS(new A.d_("local_clockin_manual_"+q+"_"+s,j.a,0,B.fw,B.f7,"Clock-in session started (local)",null,null,B.ci,r),!1)
t.lA("Clock-in started. Keep Growth Income open for today.")
case 1:return A.h(u,v)}})
return A.i($async$aaa,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===B.H?B.j0:B.oZ
if(l.d==null)return A.ee(B.kh,j,!0)
w=x.o
v=A.T(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.m(0,q,r)}p=B.a.i(l.a.c.a.toLowerCase())
u=$.fg3
u=u==null?k:u.$0()
u=J.aU(u==null?B.hZ:u)
while(u.C()){t=u.gT(u)
q=t.a
if(q.length===0||v.ak(0,q)||A.rj(t))continue
if(B.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(A.dp(o.toLowerCase(),"clock-in",0))continue
v.m(0,q,t)}w=A.A(new A.bg(v,v.$ti.k("bg<2>")),w)
v=l.e
B.d.v(w,new A.a3(v,new C.e24(),A.U(v).k("a3<1>")))
B.d.b_(w,new C.e25())
v=l.d
v.toString
u=C.hB4(l.a.c)
t=l.d
t.toString
t=A.ee(new C.ajD(t,l.a.e,l.z,l.gc3b(),l.aQ1(),D.ffZ),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=A.ee(new C.ayD(l.aQ1(),q,n,o,w,new C.e26(l),l.gc5g(),new C.e27(l),D.fg_),j,!0)
m=A.aH(d,k,x.w).w
n=l.y
return new A.Ut(n,new C.e28(l),A.aD(!1,B.a1,!0,k,new A.a4(1/0,m.a.b,new A.am(B.W,k,B.a9,B.q,A.a([A.bX(0,A.ee(k,j,!0),0,0,0),A.bX(0,A.bp(!1,[new C.ayC(v,u,w,l.gbVR(),new C.e29(l),new C.e2a(l),new C.e2b(d),l.gc66(),l.gc62(),D.ffY),t,o][n],!0,!1,B.ag,!0,!0),0,0,0),A.an(0,l.bxN(),k,k,0,0,k,k)],x.p),k),k),B.f,j,0,k,k,k,k,k,B.ac),k)},
aQ1(){var w=null,v=A.a([D.eF.j(0.24),B.M.j(0.72)],x.O)
return A.hs(A.aI(!1,w,!0,A.p(B.A,D.bDY,B.f,w,w,new A.o(w,w,A.H(D.eF.j(0.38),B.r,1),w,A.a([new A.ab(0,B.G,D.eF.j(0.18),B.J,16)],x.V),new A.a5(B.ax,B.aC,B.x,v,w,w),B.a6),w,40,w,w,w,w,w,40),B.cI,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e1A(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bxN(){var w=null,v=A.m(27),u=A.H(B.au.j(0.45),B.r,1),t=A.a([new A.ab(0,B.G,B.w.j(0.5),B.eP,24),new A.ab(-2,B.G,B.au.j(0.12),B.J,18)],x.V)
return new A.C(B.Kn,A.bp(!0,A.au(new A.d1(D.aRR,A.p(w,A.ck(new C.e1y(this)),B.f,w,w,new A.o(w,w,u,v,t,D.bGL,B.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,B.ag,!0,!1),w)},
bXv(d){var w=null,v=this.y===d,u=D.cJf[d],t=u.b,s=u.a,r=""+d,q=x.W
return A.D(A.dn(w,!0,w,A.aG(B.c5,A.r_(A.pP(v?A.W(s,D.a8v,new A.cw("on"+r,q),w,w,21):A.v(A.a([A.W(s,B.c.j(0.62),w,w,w,19),B.bB,A.d(t,w,1,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,new A.cw("off"+r,q),B.b7,B.j,0,B.p),B.ip,A.rg(),B.b9,B.b9,A.a_N())),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e1G(this,d),w,w,w,w,w,w,!1,B.ad),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,B.c_,w),1)}}
C.ayC.prototype={
bUH(d){return C.fCY(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.M(d)
w=B.c.j(0.58)
v=f.e
u=A.U(v).k("a3<1>")
u=A.oL(new A.a3(v,new C.dbi(),u),3,u.k("G.E"))
t=A.A(u,A.a2(u).k("G.E"))
v=f.c
s=v.x
r=new A.Q(Date.now(),0,!1)
q=v.f
p=C.a5K(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.fT4(r)
m=v.gBh()
l=A.a([D.eF.j(0.24),B.M.j(0.72)],x.O)
k=A.H(D.eF.j(0.38),B.r,1)
j=x.V
i=A.a([new A.ab(0,B.G,D.eF.j(0.18),B.J,16)],j)
l=A.aI(!1,e,!0,A.p(B.A,A.W(B.hU,D.eF,e,e,e,19),B.f,e,e,new A.o(e,e,k,e,i,new A.a5(B.ax,B.aC,B.x,l,e,e),B.a6),e,38,e,e,e,e,e,38),B.cI,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=A.m(14)
k=A.m(14)
j=A.a([new A.ab(0,B.G,B.b1.j(0.45),B.cF,16)],j)
h=A.m(12)
g=x.p
j=A.bKh(!1,l,"GROWTH INCOME",A.aI(!1,i,!0,new A.a4(44,44,new A.am(B.W,e,B.a9,B.f,A.a([A.p(B.A,A.p(B.A,D.bwH,B.f,e,e,new A.o(B.ik.j(0.78),e,e,h,e,e,B.n),e,36,e,e,e,e,e,36),B.f,e,e,new A.o(e,e,e,k,j,D.bIb,B.n),e,42,e,e,e,e,e,42),A.an(e,A.p(B.A,D.bD3,B.f,e,e,new A.o(B.cu,e,A.H(D.aau,B.r,2),e,e,e,B.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.fVC(B.h9,new C.dbj(),k)
k=A.B(A.a([A.D(C.fVB(new C.dbk(f,B.q6,n),new A.Q(Date.now(),0,!1),h,k),1),B.nN,A.D(new A.tU(new C.dbl(f,B.q6),e,new A.h5(A.a([$.xU(),$.a0Q()],x.U)),e),1)],g),B.m,e,B.e,B.j,0,e,e)
h=f.bXF(B.q6,D.eF)
v=A.D(f.cnu("Total Profit","$"+A.dx(v.e),B.q6),1)
u=u?e:s.b
return A.ee(A.ci(A.v(A.a([j,B.T,k,B.ab,new C.ayB(f.d,m,q,p,n,o,D.eF,f.gbUG(),f.f,e),B.ab,h,B.T,A.B(A.a([v,B.nN,A.D(f.b13("Total Investment","$"+A.dx(u==null?0:u),B.q6,f.r),1)],g),B.m,e,B.e,B.j,0,e,e),B.T,f.bUD(d,t,D.eF,w)],g),B.ah,e,B.e,B.j,0,B.p),B.q,e,B.z,e,B.W3,e,e,B.ak),D.aau,!0)},
au_(d,e,f,g,h){var w=null,v=A.m(h),u=A.H(B.c.j(0.09),B.r,1),t=A.a([new A.ab(0,B.G,B.w.j(0.4),B.dq,18)],x.V)
return A.p(w,A.bt(A.m(h-1),new A.am(B.W,w,B.a9,B.q,A.a([A.bX(0,A.bV(w,new A.o(w,w,w,w,w,new A.bR(f,1.15,B.x,w,0,A.a([e.j(0.22),e.j(0)],x.O),w,w),B.n),B.bb),0,0,0),new A.C(g,d,w)],x.p),w),B.ap),B.f,w,w,new A.o(w,w,u,v,t,D.bHa,B.n),w,w,w,w,w,w,w,w)},
aUU(d,e,f,g){return this.au_(d,e,f,B.ag,g)},
b2S(d,e,f,g,h,i,j){var w=null,v=A.an(-14,A.W(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=A.m(30),s=A.H(f.j(0.4),B.r,1),r=x.p,q=this.aUU(new A.a4(w,80,new A.am(B.W,w,B.a9,B.q,A.a([v,new A.C(D.bhk,A.v(A.a([A.p(w,A.B(A.a([A.W(e,f,w,w,w,15),B.et,A.d(h.toUpperCase(),w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.aej,w,w,w),B.b8,A.f_(B.a3,A.d(i,w,1,w,w,w,w,A.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,B.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.ec)],r),B.F,w,B.e,B.j,0,B.p),w)],r),w),w),f,B.kT,22)
if(g==null)return q
return A.aI(!1,A.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
bXF(d,e){var w,v,u,t,s=null,r=A.H(e.j(0.55),B.r,2),q=e.j(0.12),p=x.p,o=A.a([],p)
for(w=0;w<3;++w){v=new A.aY(3,3)
o.push(A.p(s,s,B.f,s,s,new A.o(e,s,s,new A.bv(v,v,v,v),s,s,B.n),s,D.cvf[w],s,D.bkP,s,s,s,5))}r=A.p(s,A.B(o,B.dG,s,B.b7,B.j,0,s,s),B.f,s,s,new A.o(q,s,r,s,s,s,B.a6),s,42,s,s,s,s,s,42)
q=A.D(A.v(A.a([D.f4R,B.bB,A.B(A.a([A.p(s,s,B.f,s,s,new A.o(e,s,s,s,A.a([new A.ab(0,B.G,e,B.J,6)],x.V),s,B.a6),s,7,s,s,s,s,s,7),B.bq,new A.dm(1,B.cl,A.d("Live \xb7 real-time statistics",s,1,B.a2,s,s,s,A.l(s,s,B.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),B.m,s,B.e,B.j,0,s,s)],p),B.F,s,B.e,B.j,0,B.p),1)
o=A.m(16)
v=A.m(16)
u=B.w.j(0.3)
t=A.H(e.j(0.45),B.r,1.2)
return this.au_(A.B(A.a([r,D.euE,q,B.aa,A.aI(!1,o,!0,A.p(s,A.v(A.a([A.W(B.oi,e.j(0.95),s,s,s,21),B.tP,A.d("PLAY",s,s,s,s,s,s,A.l(s,s,B.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,B.I,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),B.m,s,B.b7,B.j,0,B.p),B.f,s,s,new A.o(u,s,t,v,s,s,B.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),B.m,s,B.e,B.j,0,s,s),e,B.a3,B.Vz,26)},
b13(d,e,f,g){var w,v=null,u=B.a.t(d.toLowerCase(),"profit"),t=u?B.cu:B.aY,s=A.p(v,v,B.f,v,v,new A.o(t,v,v,D.aQ6,v,v,B.n),v,v,v,B.mG,v,v,v,5),r=x.p
r=A.a([s,B.be,A.D(A.v(A.a([A.B(A.a([A.W(u?B.ta:B.xh,t,v,v,v,14),B.et,new A.dm(1,B.cl,A.d(d,v,1,B.a2,v,v,v,A.l(v,v,B.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),B.m,v,B.e,B.j,0,v,v),B.ar,A.f_(B.a3,A.d(e,v,1,v,v,v,v,D.eDx,v,v,v),B.f,B.ec)],r),B.F,v,B.b7,B.j,0,B.p),1)],r)
s=g==null
if(!s)r.push(new A.C(B.acB,A.W(B.es,B.c.j(0.35),v,v,v,v),v))
w=this.aUU(new A.a4(v,66,A.B(r,B.m,v,B.e,B.j,0,v,v),v),t,B.lh,20)
if(s)return w
return A.aI(!1,A.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cnu(d,e,f){return this.b13(d,e,f,null)},
bUD(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.p(m,m,B.f,m,m,new A.o(f,m,m,m,A.a([new A.ab(0,B.G,f,B.J,8)],x.V),m,B.a6),m,9,m,m,m,m,m,9),k=A.d("LIVE ACTIVITY",m,m,m,m,m,m,A.l(m,m,B.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,B.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=B.c.j(0.07),i=A.m(20),h=x.p
i=A.a([A.B(A.a([l,B.a3R,k,B.b8,A.p(m,A.d(""+e.length,m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.f,m,m,new A.o(j,m,m,i,m,m,B.n),m,m,m,m,B.Wh,m,m,m)],h),B.m,m,B.e,B.j,0,m,m),B.P],h)
if(e.length===0)i.push(new A.C(B.Vq,A.v(A.a([A.W(B.hq,g,m,m,m,30),B.ar,A.d("Nothing yet",m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.bB,A.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),B.L,m,m)],h),B.m,m,B.e,B.j,0,B.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=A.a([],h)
if(w>0)k.push(new A.m_(1,m,m,m,m,B.c.j(0.07),m))
j=e[w]
v=j.d
u=v===B.eI||v===B.jw
t=u?B.jh:D.eF
g=B.c.j(0.5)
v=new A.aY(12,12)
s=A.a([t.j(0.28),t.j(0.08)],l)
r=new A.ay(t.j(0.35),1,B.r,-1)
v=A.p(B.A,A.W(u?B.ta:B.uR,t,m,m,m,18),B.f,m,m,new A.o(m,m,new A.c3(r,r,r,r),new A.bv(v,v,v,v),m,new A.a5(B.ax,B.aC,B.x,s,m,m),B.n),m,38,m,m,m,m,m,38)
s=C.hJ6(j)
q=C.fXh(j.y)
s=A.v(A.a([new A.x(s,m,B.n2,m,m,m,m,B.a2,m,1,m,m),B.bB,new A.x(q,m,new A.F(!0,g,m,m,m,m,11,B.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.F,m,B.e,B.j,0,B.p)
q=t.j(0.14)
p=new A.aY(20,20)
o=u?"-":"+"
n=A.dx(j.c)
q=A.p(m,new A.x(o+"$"+n,m,new A.F(!0,t,m,m,m,m,13,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),B.f,m,m,new A.o(q,m,m,new A.bv(p,p,p,p),m,m,B.n),m,m,m,m,B.nw,m,m,m)
j=C.h3d(j)
k.push(new A.C(F.Vv,new A.cD(B.b_,B.e,B.j,B.m,m,B.p,m,0,A.a([v,B.be,new A.bG(1,B.bp,s,m),A.v(A.a([q,B.d6,new A.x(j,m,new A.F(!0,g,m,m,m,m,10,B.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.dG,m,B.e,B.j,0,B.p)],h),m),m))
B.d.v(i,k)}return this.au_(A.v(i,B.m,m,B.e,B.j,0,B.p),f,B.b0,D.bht,26)}}
C.ayB.prototype={
S(){return new C.bea(null,null)},
cGE(d){return this.z.$1(d)},
cHP(){return this.Q.$0()}}
C.bea.prototype={
Z(){var w,v=this,u=null
v.a0()
w=A.bi(u,B.p6,u,1,u,v)
w.cE(0)
v.d!==$&&A.aQ()
v.d=w
w=A.bi(u,D.bf4,u,1,u,v)
w.cE(0)
v.e!==$&&A.aQ()
v.e=w
w=A.bi(u,B.um,u,1,u,v)
v.f!==$&&A.aQ()
v.f=w
v.b2_()},
gb4A(){var w=new A.Q(Date.now(),0,!1)
if(A.md(w)===6||A.md(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
b2_(){var w=this,v=w.a,u=v.e||v.f||w.gb4A()
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
this.b2_()},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
w.bp5()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gb4A()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=B.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?B.au:g.x
g=g.r?new C.dbb(i):h
v=A.m(32)
s=A.m(32)
r=f?D.cYp:D.cYn
q=A.H((f?D.o_:B.bd).j(0.28),B.r,1.4)
p=x.V
o=A.a([new A.ab(0,B.G,(f?B.au:B.b6).j(0.16),B.fG,28)],p)
n=x.p
m=A.a([],n)
if(f)B.d.v(m,A.a([A.an(h,i.a8K(D.o_,130),h,h,h,-24,-30,h),A.an(-36,i.a8K(B.au,140),h,h,-28,h,h,h)],n))
else B.d.v(m,A.a([A.an(h,i.a8K(B.b6,120),h,h,h,-30,-36,h),A.an(-40,i.a8K(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bX(0,A.e1(A.bt(l,new A.eq(A.c4(k,new C.dbc(i),h),h),B.ap),!0,h),0,0,0))}if(f){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bX(0,A.e1(A.bt(l,new A.eq(A.c4(k,new C.dbd(i),h),h),B.ap),!0,h),0,0,0))}l=A.m(999)
k=B.c.j(0.06)
j=A.H(B.c.j(0.16),B.r,1)
m.push(A.an(h,new A.d1(D.aRX,A.p(h,A.B(A.a([A.p(h,h,B.f,h,h,new A.o(t,h,h,h,A.a([new A.ab(0,B.G,t.j(0.5),B.J,8)],p),h,B.a6),h,8,h,h,h,h,h,8),B.aa,new A.dm(1,B.cl,A.d(u,h,1,B.a2,h,h,h,D.eIH,h,h,h),h)],n),B.m,h,B.e,B.Q,0,h,h),B.f,h,h,new A.o(k,h,j,l,h,h,B.n),h,h,h,h,B.ha,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.fVC(B.h9,new C.dbe(),l)
m.push(C.fVB(new C.dbf(i,f,t,e,w),new A.Q(Date.now(),0,!1),j,l))
return A.aI(!1,v,!0,A.dg(h,new A.am(B.W,h,B.a9,B.f,m,h),h,h,B.b9,new A.o(h,h,q,s,o,new A.a5(B.ax,B.aC,B.x,r,h,h),B.n),B.zL,h,392,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
a8K(d,e){var w=null
return A.e1(A.p(w,w,B.f,w,w,new A.o(w,w,w,w,w,new A.bR(B.A,0.5,B.x,w,0,A.a([d.j(0.22),d.j(0)],x.O),w,w),B.a6),w,e,w,w,w,w,w,e),!0,w)}}
C.b7W.prototype={
aUX(d,e,f,g){var w=new A.aO($.V().r,B.ao,null,null,A.a([],x.g)),v=e.a,u=e.b,t=u-f
w.D(new A.b4(v,t))
w.D(new A.cO(v,u,v+f,u))
w.D(new A.cO(v,u,v,u+f))
w.D(new A.cO(v,u,v-f,u))
w.D(new A.cO(v,u,v,t))
w.D(new A.bD())
d.aL(w,g)},
a4(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=a8/2,b0=b3.b,b1=b0/2
for(w=a7.b,v=w*6.283185307179586,u=0;u<16;++u){t=B.k.F(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=B.k.F(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+B.o.F(u,3))+u)+1)/2
$.V()
q=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
q.r=B.c.j(0.1+r*0.5).gp(0)
a7.aUX(b2,new A.u(t*a8,s*b0),2+r*2.2,q)}for(a8=b2.a,b0=w*2,p=a7.e,o=0;o<3;++o){n=B.k.F(b0+o/3,1)
$.V()
m=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
m.b=B.ae
m.c=1.6
m.r=p.j((1-n)*0.38).gp(0)
l=m.G()
a8.drawCircle(a9,b1,138+n*90,l)
l.delete()}for(b0=a7.d,u=0;u<28;++u){k=B.k.F(w*(1+B.o.F(u,2))+u/28,1)
j=u*2.399963+Math.sin(u*1.7)*0.2
i=113.16+k*(70+B.o.F(u,5)*18)
h=a9+Math.cos(j)*i
g=b1+Math.sin(j)*i*0.96
f=B.k.E(Math.sin(k*3.141592653589793),0,1)
switch(B.o.F(u,4)){case 0:e=B.k.E(Math.abs(Math.cos(k*6.283185307179586*3)),0.28,1)
J.by(a8.save())
a8.translate(h,g)
a8.scale(e,1)
$.V()
d=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
d.r=b0.j(f).gp(0)
l=d.G()
a8.drawCircle(0,0,6.5,l)
l.delete()
h=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
h.b=B.ae
h.c=1.2
h.r=p.j(f).gp(0)
l=h.G()
a8.drawCircle(0,0,6.5,l)
l.delete()
if(e>0.6&&f>0.35){h=$.h8I()
g=h.b
a0=g.c
g=g.a.c
h.a4(b2,new A.u(-a0/2,-g.gbc(g)/2))}a8.restore()
break
case 1:$.V()
a0=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
a0.r=p.j(f*0.95).gp(0)
a7.aUX(b2,new A.u(h,g),3+f*3,a0)
break
case 2:$.V()
a0=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
a0.r=B.c.j(f*0.8).gp(0)
l=a0.G()
a8.drawCircle(h,g,1.6+f*1.8,l)
l.delete()
break
default:a0=Math.cos(j)
a1=Math.sin(j)
a2=7+f*7
$.V()
a3=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
a3.c=1.8
a3.d=B.bO
a3.r=b0.j(f*0.8).gp(0)
l=a3.G()
a8.drawLine.apply(a8,[h,g,h-a0*a2,g-a1*a2,l])
l.delete()}}for(a4=0;a4<3;++a4){a5=v+a4*6.283185307179586/3
for(a6=0;a6<8;++a6){r=a5-a6*0.09
w=Math.cos(r)
h=Math.sin(r)
o=1-a6/8
$.V()
g=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
g.r=p.j(o*0.85).gp(0)
l=g.G()
a8.drawCircle(a9+w*144,b1+h*144,1.4+o*2.6,l)
l.delete()}w=Math.cos(a5)
h=Math.sin(a5)
$.V()
g=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
g.r=b0.j(0.28).gp(0)
g.z=N.me
l=g.G()
a8.drawCircle(a9+w*144,b1+h*144,7,l)
l.delete()}},
ap(d){return d.b!==this.b}}
C.b7V.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.V(),a4=A.L()
a4.r=this.d.j(0.075).gp(0)
for(w=a5.a,v=this.b,u=v*6.283185307179586,t=x.g,a3=a3.r,s=0;s<14;++s){r=u+s*6.283185307179586/14
q=A.a([],t)
p=new A.aO(a3,B.ao,e,e,q)
o=r-0.14361566416410484
q.push(new A.b4(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new A.ao(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
o=r+0.14361566416410484
q.push(new A.ao(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
q.push(new A.ao(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new A.bD())
n=a4.G()
q=p.gbL().a.snapshot()
w.drawPath((p.e=new A.cE(q)).a,n)
n.delete()}a0=v*2
a2=B.k.F(a0,1)
J.by(w.save())
w.translate(a2*(d+240)-120,0)
a5.iU(0,0.35)
a2=-a1
a3=A.L()
a3.sar(new A.a5(B.a3,B.a7,B.x,A.a([B.c.j(0),B.c.j(0.07),B.c.j(0)],x.O),e,e).av(0,D.eoA))
a5.aW(new A.a7(-18,a2,18,a2+a1*3),a3)
w.restore()
for(a2=a1+40,s=0;s<34;++s){m=B.k.F(Math.abs(Math.sin(s*91.7)*43758.5453),1)
l=B.k.F(v*(1+B.o.F(s,2))+s/34,1)
a3=l*6.283185307179586
u=Math.sin(a3*2+s)
J.by(w.save())
w.translate(m*d+u*14,l*a2-20)
w.rotate(a3*(2+B.o.F(s,3))*180/3.141592653589793,0,0)
a3=B.k.E(Math.abs(Math.cos(a3*3+s)),0.3,1)
w.scale(1,a3)
if(l<0.08)a3=l/0.08
else a3=l>0.9?(1-l)/0.1:1
k=B.k.E(a3,0,1)
a3=A.bx(D.ep6,B.Qm)
u=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
u.r=D.ati[B.o.F(s,6)].j(k*0.9).gp(0)
n=u.G()
w.drawRRect(A.ex(a3),n)
n.delete()
w.restore()}j=[new A.u(d*0.18,a1*0.2),new A.u(d*0.82,a1*0.26),new A.u(d*0.5,a1*0.07)]
for(i=0;i<3;++i){l=B.k.F(a0+i/3,1)
if(l>0.5)continue
h=l/0.5
g=6+h*44
d=1-h
k=B.k.E(d,0,1)
for(a1=g*0.62,a2=g+5,s=0;s<14;++s){r=s*6.283185307179586/14
a3=Math.cos(r)
v=Math.sin(r)
f=D.ati[B.o.F(s+i,6)].j(k)
u=j[i]
t=u.a
u=u.b
$.V()
q=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
q.c=2
q.d=B.bO
q.r=f.gp(0)
n=q.G()
w.drawLine.apply(w,[t+a3*a1,u+v*a1,t+a3*g,u+v*g,n])
n.delete()
q=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
q.r=f.gp(0)
n=q.G()
w.drawCircle(t+a3*a2,u+v*a2,1.6,n)
n.delete()}a1=j[i]
$.V()
a2=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
a2.r=B.c.j(k).gp(0)
n=a2.G()
w.drawCircle(a1.a,a1.b,5*d,n)
n.delete()}},
ap(d){return d.b!==this.b}}
C.b7U.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a6.a/2,a1=a6.b/2,a2=new A.u(a0,a1),a3=a0-4,a4=a3-22
$.V()
w=A.L()
w.b=B.ae
w.c=14
v=e.d
w.r=(v?e.r:B.bd).j(0.22).gp(0)
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
l=u.G()
s.drawLine.apply(s,[a0+p*w,a1+o*w,a0+n*t,a1+m*t,l])
l.delete()}J.by(s.save())
w=$.V().r
t=x.g
p=new A.aO(w,B.ao,d,d,A.a([],t))
p.D(new A.ky(A.bS(a2,a4)))
a5.tl(0,p)
p=A.bS(a2,a4)
o=A.L()
o.sar(D.dWW.av(0,A.bS(a2,a4)))
a5.aW(p,o)
k=B.k.E(e.b,0,1)
if(k>0.004){a1+=a4
j=a1-a4*2*k
i=v?5.2:1.8
t=A.a([],t)
h=new A.aO(w,B.ao,d,d,t)
g=a0-a4
a1+=4
h.D(new A.b4(g,a1))
for(w=a0+a4,p=e.c*3.141592653589793,o=p*2,p*=2.2,n=i*0.42;g<=w;g+=3){m=(g-a0)/a4*3.141592653589793
m=new A.ao(g,j+Math.sin(m*2+o)*i+Math.sin(m*3.1-p)*n)
t.push(m)
f=h.f
if(f!=null)m.bx(f)
m=h.e
if(m!=null)m.a.delete()
h.e=null}h.D(new A.ao(w,a1))
h.D(new A.bD())
$.V()
a0=A.L()
a1=x.O
w=e.e
a1=v?A.a([e.f.j(0.55),w.j(0.78),e.r.j(0.92)],a1):A.a([w.j(0.22),D.eF.j(0.34),B.cY.j(0.62)],a1)
a0.sar(new A.a5(B.b0,B.b3,B.x,a1,d,d).av(0,A.bS(a2,a4)))
a5.aL(h,a0)
a0=A.L()
a0.b=B.ae
a0.c=2
a0.r=B.c.j(v?0.28:0.14).gp(0)
a5.aL(h,a0)}s.restore()},
ap(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.ayD.prototype={
S(){var w=$.av()
return new C.ayE(new A.ar(B.as,w),new A.ar(B.as,w))},
bbt(d,e){return this.w.$2$cloudRequest(d,e)}}
C.ayE.prototype={
q(){var w=this.d,v=$.av()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
lA(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.P(A.b1(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
cpb(d){this.a.bbt(d,!0)
this.lA("Deposit submitted. Admin will review your payment proof.")
this.n(new C.dbC())},
cnY(){var w,v,u=this,t=A.d9(u.d.a.a)
if(t==null||t<=0){u.lA("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
A.ho(w,new C.anf(v.d,t,u.gcpa(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cvj(){var w,v,u,t,s=this,r=s.d,q=A.d9(r.a.a)
if(q==null||q<=0){s.lA("Enter an amount to withdraw.")
return}if(q<10){s.lA("Minimum withdrawal is $"+A.dx(10)+".")
return}w=s.a.d.d
if(q>w){s.lA("Insufficient balance. You have $"+A.dx(w)+".")
return}w=s.e
v=C.h4B(w.a.a)
if(v.length===0){s.lA("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.bbt(new A.d_("wd_"+1000*Date.now(),s.a.d.a,q,B.eI,B.ke,"Withdrawal to $"+v+" \u2014 Fee: $"+A.dx(u)+" \u2014 You receive: $"+A.dx(q-u),null,null,B.dr,new A.Q(Date.now(),0,!1)),!0)
s.lA("Withdrawal submitted \u2014 waiting for admin approval.")
r.bJ(0,B.c2)
w.bJ(0,B.c2)
s.n(new C.dbD())},
csk(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,A.K)(w),++s){r=w[s]
if(r.x!==B.ci||!this.aRO(r)||A.fKi(r))continue
q=r.d
p=q===B.eI||q===B.jw||q===B.ek
q=r.c
if(p)t+=q
else u+=q}return new A.bl2(u,t)},
B(d){var w,v,u,t=this,s=null,r=t.csk(),q=t.a.r,p=new A.a3(q,new C.dbE(),A.U(q).k("a3<1>")).gJ(0)
q=t.a
w=q.c
q=q.x
v=A.a([D.eF.j(0.24),B.M.j(0.72)],x.O)
u=A.H(D.eF.j(0.38),B.r,1)
q=A.bKh(!1,w,"WALLET",A.hs(A.aI(!1,s,!0,A.p(B.A,A.W(U.ahi,D.eF,s,s,s,18),B.f,s,s,new A.o(s,s,u,s,s,new A.a5(B.ax,B.aC,B.x,v,s,s),B.a6),s,40,s,s,s,s,s,40),B.cI,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),s,"Back up wallet",s,s))
v=t.bwt(r.a,r.b,p)
u=x.p
w=A.B(A.a([t.anc(B.uR,"Deposit",0),t.anc(B.ta,"Withdraw",1),t.anc(B.h1,"History",2)],u),B.m,s,B.ps,B.j,0,s,s)
return A.ee(A.bp(!1,A.ci(A.v(A.a([q,B.bv,v,B.d5,w,B.d5,A.pP(t.f===2?t.bRP():t.bX9(),B.i4,A.rg(),B.b9,B.b9,A.a_N())],u),B.ah,s,B.e,B.j,0,B.p),B.q,s,B.z,s,D.bjl,s,s,B.ak),!0,!1,B.ag,!0,!0),B.zj,!0)},
bwt(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.a.i(i.a.e)
if(B.a.t(g,"@")){w=B.a.cJ(g,"@")
v=B.a.an(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+B.a.aY(g,w)}else v=g
w=A.m(26)
u=A.an(h,i.aw7(220,0.1),h,h,h,-60,-70,h)
t=A.an(-90,i.aw7(200,0.07),h,h,h,30,h,h)
s=A.an(-60,i.aw7(150,0.05),h,h,-40,h,h,h)
r=A.m(26)
r=A.bX(0,A.bV(h,new A.o(h,h,A.H(B.c.j(0.18),B.r,1),r,h,h,B.n),B.bb),0,0,0)
q=A.m(6)
p=x.p
q=A.B(A.a([A.p(h,A.b2(h,h,h,new C.b7m(h),B.at),B.f,h,h,new A.o(h,h,h,q,h,D.bJe,B.n),h,28,h,h,h,h,h,38),B.b8,D.fcB],p),B.m,h,B.e,B.j,0,h,h)
o=A.d("Available balance",h,h,h,h,h,h,A.l(h,h,B.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,B.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=A.f_(B.a3,C.anZ(new C.dbo(i),D.eNM,i.a.d.a),B.f,B.ec)
m=A.a([A.D(i.aKL(B.uF,"In",d),1),A.D(i.aKL(B.x0,"Out",e),1)],p)
if(f>0){l=B.cQ.j(0.22)
k=A.m(99)
j=A.H(B.iy.j(0.6),B.r,1)
m.push(A.p(h,A.d(""+f+" pending",h,h,h,h,h,h,D.eJB,h,h,h),B.f,h,h,new A.o(l,h,j,k,h,h,B.n),h,h,h,h,B.nw,h,h,h))}return new A.fC(1.62,A.bt(w,new A.am(B.W,h,B.a9,B.q,A.a([D.dWb,u,t,s,r,new A.C(A5.qp,A.v(A.a([q,B.b8,o,B.bB,n,B.b8,A.B(m,B.m,h,B.e,B.j,0,h,h),B.ar,A.d(v,h,1,B.a2,h,h,h,A.l(h,h,B.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,B.a4,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),B.F,h,B.e,B.j,0,B.p),h)],p),h),B.ap),h)},
aw7(d,e){var w=null
return A.p(w,w,B.f,w,w,new A.o(w,w,A.H(B.c.j(e),B.r,22),w,w,w,B.a6),w,d,w,w,w,w,w,d)},
aKL(d,e,f){var w=null,v=B.c.j(0.16)
return A.B(A.a([A.p(w,A.W(d,B.c,w,w,w,13),B.f,w,w,new A.o(v,w,w,w,w,w,B.a6),w,22,w,w,w,w,w,22),B.bq,new A.dm(1,B.cl,A.f_(B.a3,A.d(e+"  $"+A.dx(f),w,w,w,w,w,w,B.r3,w,w,w),B.f,B.ec),w)],x.p),B.m,w,B.e,B.j,0,w,w)},
anc(d,e,f){var w=null,v=this.f===f,u=v?D.bKw:new A.a5(B.a3,B.a7,B.x,A.a([B.c.j(0.08),B.c.j(0.03)],x.O),w,w),t=A.H(v?B.c.j(0.6):D.eF.j(0.25),B.r,1),s=v?A.a([new A.ab(0,B.G,B.au.j(0.45),B.J,18)],x.V):w
u=A.dg(w,A.W(d,v?D.a8v:D.eF,w,w,w,26),w,w,B.cp,new A.o(w,w,t,w,s,u,B.a6),B.DS,w,62,w,w,w,w,62)
return A.aG(B.c5,new A.a4(92,w,A.v(A.a([u,D.evy,A.d(e,w,w,w,w,w,w,A.l(w,w,v?B.c:B.aQ,w,w,w,w,w,w,w,w,12.5,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dbn(this,f),w,w,w,w,w,w,!1,B.ad)},
bX9(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=A.d9(a1.a.a)
if(a2==null)a2=0
w=a0?D.eF:B.cC
v=a2>0
u=new C.dbz(e,w)
t=new C.dby()
s=e.f
r=A.m(26)
q=x.O
p=A.a([w.j(0.1),B.rF,B.rF],q)
o=A.H(w.j(0.22),B.r,1)
n=x.V
m=A.a([new A.ab(0,B.G,B.w.j(0.35),B.eP,22)],n)
l=w.j(0.15)
l=A.p(d,A.W(a0?B.uR:B.ta,w,d,d,d,18),B.f,d,d,new A.o(l,d,d,d,d,d,B.a6),d,34,d,d,d,d,d,34)
k=A.D(A.d(a0?"Add money":"Take money out",d,d,d,d,d,d,B.fS,d,d,d),1)
j=B.c.j(0.06)
i=A.m(99)
h=x.p
i=A.B(A.a([l,B.aw,k,A.p(d,A.B(A.a([A.W(B.hU,w,d,d,d,14),A.d("Cash App",d,d,d,d,d,d,A.l(d,d,B.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,B.I,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),B.m,d,B.e,B.Q,0,d,d),B.f,d,d,new A.o(j,d,d,i,d,d,B.n),d,d,d,d,B.kA,d,d,d)],h),B.m,d,B.e,B.j,0,d,d)
l=A.d("$",d,d,d,d,d,d,A.l(d,d,v?w:B.c1,d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=A.a([new A.tK(A.ae("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=A.B(A.a([new A.C(B.i5,l,d),B.d8,A.aT8(new A.d1(D.aSf,A.aK(d,B.U,!1,d,!0,B.q,d,A.aL(),a1,w,d,d,d,d,2,A.bn(d,B.eA,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,A.l(d,d,B.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),B.z,!0,d,!0,d,!1,d,B.ai,d,d,k,d,d,B.dY,d,d,d,1,d,d,!1,"\u2022",d,new C.dbx(e),d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,D.eQq,!0,B.L,d,B.am,d,d,d,d),d),d)],h),B.F,d,B.b7,B.j,0,d,d)
a1=v?120:60
a1=A.au(A.dg(d,d,d,d,B.b9,new A.o(d,d,d,A.m(99),d,new A.a5(B.a3,B.a7,B.x,A.a([w.j(0),w,w.j(0)],q),d,d),B.n),B.a1,d,3,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+A.dx(10)+" \xb7 admin sends it to your Cash App."
q=A.d(q,d,d,d,d,d,d,A.l(d,d,B.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,B.a4,d,1.35,!0,d,d,d,d,d,d,d,d),B.L,d,d)
l=A.a([],h)
j=a0?D.bOd:D.c1Q
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=A.a([i,B.bv,k,B.ar,a1,B.P,q,B.ay,A.B(l,B.m,d,B.e,B.j,0,d,d)],h)
if(!a0){q=B.c.j(0.04)
l=A.W(B.hU,w,d,d,d,d)
k=A.l(d,d,B.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,B.O,d,d,!0,d,d,d,d,d,d,d,d)
l=A.a([B.ay,A.aK(d,B.U,!1,d,!0,B.q,d,A.aL(),e.e,d,d,d,d,d,2,A.bn(d,d,d,d,d,d,d,d,!0,new A.b3(4,A.m(16),new A.ay(B.c.j(0.08),1,B.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new A.b3(4,A.m(16),new A.ay(w,1,B.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),B.z,!0,d,!0,d,!1,d,B.ai,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,B.n1,!0,B.a5,d,B.am,d,d,d,d)],h)
if(v){q=B.c.j(0.04)
k=A.m(16)
B.d.v(l,A.a([B.ab,A.p(d,A.v(A.a([t.$2("Amount","$"+A.dx(a2)),t.$3$color("Fee (15%)","\u2212 $"+A.dx(a2*0.15),B.fi),A.jn(B.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+A.dx(a2*0.85),!0,D.eF)],h),B.m,d,B.e,B.j,0,B.p),B.f,d,d,new A.o(q,d,d,k,d,d,B.n),d,d,d,d,B.iM,d,d,d)],h))}B.d.v(a1,l)}a1.push(B.aO)
q=A.m(18)
l=a0?B.OG:P.ao6
n=A.a([new A.ab(0,B.G,(a0?B.aW:B.e_).j(0.45),B.dq,18)],n)
k=a0?e.gcnX():e.gcvi()
j=A.W(a0?B.Lh:B.l4,d,d,d,d,20)
if(a0)i=v?"Deposit $"+A.dx(a2):"Deposit funds"
else i=v?"Withdraw $"+A.dx(a2):"Request withdrawal"
a1.push(new A.a4(d,54,A.bV(A.lg(j,A.d(i,d,d,d,d,d,d,B.oB,d,d,d),k,A.fh(d,d,B.K,d,d,d,d,d,d,B.c,d,d,d,B.K,new A.b6(A.m(18),B.Z),d,d,d,d,d)),new A.o(d,d,d,q,n,new A.a5(B.a3,B.a7,B.x,l,d,d),B.n),B.bb),d))
return A.p(d,A.v(a1,B.ah,d,B.e,B.j,0,B.p),B.f,d,d,new A.o(d,d,o,r,m,new A.a5(B.b0,B.b3,B.x,p,B.Oe,d),B.n),d,d,new A.cw("form"+s,x.W),d,B.wG,d,d,d)},
bRP(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=A.U(a2).k("a3<1>"),a4=A.A(new A.a3(a2,new C.dbr(a0),a3),a3.k("G.E"))
B.d.b_(a4,new C.dbs())
w=B.a.i(a0.a.e.toLowerCase())
a2=A.T(x.N,x.o)
a3=$.fg3
a3=a3==null?a1:a3.$0()
a3=J.aU(a3==null?B.hZ:a3)
while(a3.C()){v=a3.gT(a3)
u=v.a
if(u.length!==0&&B.a.i(v.b.toLowerCase())===w)a2.m(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,A.K)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.m(0,u,s)}a3=a2.$ti.k("bg<2>")
a2=A.A(new A.bg(a2,a3),a3.k("G.E"))
r=C.hJF(a2,A.JD(a0.a.e,new C.dbt(a0)))
a2=A.m(24)
a3=A.H(B.c.j(0.07),B.r,1)
v=A.m(99)
u=A.m(99)
q=x.p
u=A.a([A.B(A.a([D.bnR,A.aI(!1,v,!0,A.p(a1,D.epR,B.f,a1,a1,new A.o(a1,a1,A.H(D.eF.j(0.4),B.r,1),u,a1,a1,B.n),a1,a1,a1,a1,B.m_,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.dbu(a0),a1,a1,a1,a1,a1,a1,a1)],q),B.m,a1,B.e,B.j,0,a1,a1),B.T],q)
if(a4.length===0)u.push(new A.C(D.bg1,A.v(A.a([A.W(B.Es,B.c.j(0.25),a1,a1,a1,40),B.T,D.f9s],q),B.m,a1,B.e,B.j,0,B.p),a1))
else{v=A.a([],q)
for(p=A.dc(a4,0,A.dH(a0.r,"count",x.S),A.U(a4).c),o=p.$ti,p=new A.bU(p,p.gJ(0),o.k("bU<ai.E>")),o=o.k("ai.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===B.eI||k===B.jw||k===B.ek
if(l===B.ci)i=j?B.cG:D.eF
else i=l===B.dr?B.iy:B.fQ
h=j?"-":"+"
l=B.c.j(0.06)
k=i.j(0.14)
g=new A.ay(i.j(0.4),1,B.r,-1)
k=A.p(a1,A.W(j?B.ta:B.uR,i,a1,a1,a1,19),B.f,a1,a1,new A.o(k,a1,new A.c3(g,g,g,g),a1,a1,a1,B.a6),a1,42,a1,a1,a1,a1,a1,42)
f=a0.bLK(n)
e=C.fXh(n.y)
d=B.c.j(0.5)
f=A.a([new A.x(f,a1,B.jT,a1,a1,a1,a1,a1,a1,a1,a1,a1),B.bB,new A.x(e,a1,new A.F(!0,d,a1,a1,a1,a1,11,B.a4,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1)],q)
e=n.f
if(B.a.i(e==null?"":e).length!==0){e.toString
d=B.c.j(0.4)
f.push(new A.x(e,a1,new A.F(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,B.a2,a1,1,a1,a1))}if(m!=null&&n.x!==B.jU)f.push(new A.C(E.acL,new A.Em(B.bI,5,4,B.by,A.a([a0.aJH("Before",m.b),a0.aJH("After",m.a)],q),a1),a1))
m=A.v(f,B.F,a1,B.e,B.j,0,B.p)
f=n.c
f=f===0?"\u2014":h+"$"+A.dx(f)
e=i.j(0.14)
d=new A.aY(99,99)
n=C.h3d(n)
v.push(A.p(a1,new A.cD(B.b_,B.e,B.j,B.m,a1,B.p,a1,0,A.a([k,B.be,new A.bG(1,B.bp,m,a1),B.aa,A.v(A.a([new A.x(f,a1,new A.F(!0,i,a1,a1,a1,a1,15,B.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.av,A.p(a1,new A.x(n,a1,new A.F(!0,i,a1,a1,a1,a1,9.5,B.I,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.f,a1,a1,new A.o(e,a1,a1,new A.bv(d,d,d,d),a1,a1,B.n),a1,a1,a1,a1,B.A6,a1,a1,a1)],q),B.dG,a1,B.e,B.j,0,B.p)],q),a1),B.f,a1,a1,new A.o(a1,a1,new A.c3(B.Z,B.Z,new A.ay(l,1,B.r,-1),B.Z),a1,a1,a1,B.n),a1,a1,a1,a1,B.wx,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(A.hi(D.bBj,A.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,B.ce,a1,a1,a1),new C.dbv(a0),A.fr(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.eF,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
B.d.v(u,v)}return A.p(a1,A.v(u,B.ah,a1,B.e,B.j,0,B.p),B.f,a1,a1,new A.o(B.rF,a1,a3,a2,a1,a1,B.n),a1,a1,D.ffT,a1,D.bie,a1,a1,a1)},
aJH(d,e){var w=null,v=B.c.j(0.05),u=A.m(7),t=A.H(B.c.j(0.1),B.r,1),s=A.dl(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=A.dx(e)
return A.p(w,A.W0(A.dl(A.a([s,A.dl(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.eNW,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.nv,w,w,w)},
aRO(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(B.a.t(w,"clock-in session started"))return!1
v=d.d
if(v===B.ek)return d.c>0
if(A.rj(d))return!1
if(v===B.fn||v===B.eI)return!0
if(v===B.nS||v===B.jw)return!0
if(v===B.jV)return!0
if(v===B.fw)return B.a.t(w,"clock-in")||d.c>0
return!1},
bLK(d){var w,v=d.f
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
C.b7m.prototype={
a4(d,e){var w,v,u,t
$.V()
w=A.L()
w.r=D.b18.j(0.55).gp(0)
w.c=1
v=e.a
u=v*0.35
t=e.b
d.bw(new A.u(u,0),new A.u(u,t),w)
u=v*0.65
d.bw(new A.u(u,0),new A.u(u,t),w)
t*=0.5
d.bw(new A.u(0,t),new A.u(v,t),w)},
ap(d){return!1}}
C.brF.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null
for(w=a4.b,v=this.b,u=v*6.283185307179586,t=a4.a,s=0+t,r=x.O,q=a3.a,p=0;p<3;++p){o=w*(0.2+0.25*p)+Math.sin(u+p*2)*14-40
n=new A.a7(0,o,s,o+80)
m=[B.b6,B.fU,B.bs][p]
$.V()
o=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
o.sar(new A.a5(B.b0,B.b3,B.x,A.a([m.j(0),m.j(0.1),m.j(0)],r),a2,a2).av(0,n))
l=o.G()
q.drawRect(A.c2(n),l)
l.delete()}for(k=0;k<46;++k){s=k*12.9898
j=Math.sin(s+78.233)*43758.5453
j=(j-Math.floor(j))*t
i=Math.sin(s+156.466)*43758.5453
h=(i-Math.floor(i))*w
g=0.25+0.75*(0.5+0.5*Math.sin(u*(1+B.o.F(k,3))+k))
i=Math.sin(s+234.699)*43758.5453
s=Math.floor(i)
$.V()
r=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
r.r=B.c.j(0.55*g).gp(0)
l=r.G()
q.drawCircle(j,h,0.7+(i-s)*1.5,l)
l.delete()
if(B.o.F(k,9)===0){f=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
f.r=B.o5.j(0.35*g).gp(0)
f.c=1
l=f.G()
q.drawLine.apply(q,[j-4,h,j+4,h,l])
l.delete()
l=f.G()
q.drawLine.apply(q,[j,h-4,j,h+4,l])
l.delete()}}for(u=-t*0.35,s=w*0.2,r=t*0.08,o=-w*0.02,v*=2,k=0;k<2;++k){f=B.k.F(v+k*0.5,1)
if(f>0.35)continue
p=f/0.35
e=t*(0.75-k*0.4)+u*p
d=w*(0.1+k*0.12)+s*p
$.V()
a0=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
a0.r=B.c.j(0.7*(1-p)).gp(0)
a0.c=1.6
a0.d=B.bO
l=a0.G()
q.drawLine.apply(q,[e+r,d+o,e,d,l])
l.delete()}for(u=t*0.62,w*=0.36,k=0;k<4;++k){f=B.k.F(v+k*0.25,1)
t=B.o5.j(0.5*Math.sin(f*3.141592653589793))
a1=new A.kM(new A.en("z",a2,a2,B.cS,a2,a2,a2,a2,a2,a2,new A.F(!0,t,a2,a2,a2,a2,12+f*14,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),B.a5,B.ch,new A.jL(1),a2,a2,a2,a2,B.cg,a2)
a1.eU()
a1.a4(a3,new A.u(u+Math.sin(f*6.283185307179586+k)*12+k*8,w-f*90))}},
ap(d){return d.b!==this.b}}
C.aI0.prototype={
aP(){this.aX()
this.aV()
this.dD()},
q(){var w=this,v=w.b0$
if(v!=null)v.a1(0,w.gdB())
w.b0$=null
w.a2()}}
C.btB.prototype={}
C.aX0.prototype={}
C.Yy.prototype={
S(){return new C.aB1(new A.ar(B.as,$.av()))},
cJ_(d,e){return this.d.$2(d,e)}}
C.aB1.prototype={
q(){var w=this.d
w.R$=$.av()
w.O$=0
this.a2()},
aV0(){var w=this,v=B.a.i(w.d.a.a),u=A.ae("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.n(new C.dX0(w))
return}u=w.c
u.toString
A.a9(u,!1).M(null)
w.a.cJ_(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=A.aH(a0,B.ez,e).w
e=A.aH(a0,B.e6,e).w
w=A.au(A.p(f,f,B.f,f,f,new A.o(B.ba,f,f,A.m(2),f,f,B.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=A.B(A.a([A.p(f,D.bAI,B.f,f,f,new A.o(f,f,f,f,A.a([new A.ab(0,B.G,B.fb.j(0.5),B.J,18)],v),D.ajR,B.a6),f,52,f,f,f,f,f,52),B.ex,A.D(A.v(A.a([D.eZ5,B.bB,A.d(g.a.c,f,1,B.a2,f,f,f,B.oA,f,f,f)],u),B.F,f,B.e,B.j,0,B.p),1),A.aF(f,f,f,f,D.bBx,f,f,f,new C.dX3(a0),f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,f,f)
s=g.b0N(B.eN,"You",B.cC)
r=B.aK.j(0.15)
q=A.m(99)
q=A.B(A.a([s,new A.C(B.ls,A.p(f,D.f1K,B.f,f,f,new A.o(r,f,A.H(B.aK.j(0.6),B.r,1),q,f,f,B.n),f,f,f,f,B.fL,f,f,f),f),g.b0N(B.uN,"Your friend",B.bX)],u),B.m,f,B.e,B.j,0,f,f)
r=B.c.j(0.06)
s=A.m(16)
p=B.c.j(0.12)
o=A.m(16)
n=g.f
if(n.length===0)n=f
o=A.aK(f,B.U,!0,f,!0,B.q,f,A.aL(),g.d,f,f,f,f,f,2,A.bn(f,f,f,f,f,f,f,f,!0,new A.b3(4,s,new A.ay(p,1,B.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new A.b3(4,o,D.aR3),f,f,f,f,f,f,f,f,N.Cc,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.bDT,f,f,f,f,f,f,f,f,f,f,f,f),B.z,!0,f,!0,f,!1,f,B.ai,f,f,f,f,f,B.lI,f,f,f,1,f,f,!1,"\u2022",f,new C.dX4(g),f,new C.dX5(g),f,!1,f,f,!1,f,!0,f,B.a8,f,f,f,f,f,f,f,f,f,f,f,B.iC,!0,B.a5,f,B.am,f,f,f,f)
r=A.a([],u)
for(m=0;m<4;++m){l=D.bXT[m]
s=new A.aY(14,14)
p=g.e===l
n=p?D.ajQ:f
p=p?f:B.c.j(0.06)
k=new A.ay(g.e===l?B.az:B.bG,1,B.r,-1)
j=""+l
i=l===1?"game":"best of "+j
h=B.c.j(0.7)
s=A.a([new A.bG(1,B.bp,A.aG(f,A.dg(f,A.v(A.a([new A.x(j,f,B.dP,f,f,f,f,f,f,f,f,f),new A.x(i,f,new A.F(!0,h,f,f,f,f,10,B.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,B.p),f,f,B.b9,new A.o(p,f,new A.c3(k,k,k,k),new A.bv(s,s,s,s),f,n,B.n),B.eK,f,f,f,B.f0,f,f,f),B.z,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.dX6(g,l),f,f,f,f,f,f,!1,B.ad),f)],u)
if(l!==7)s.push(B.aa)
B.d.v(r,s)}s=A.B(r,B.m,f,B.e,B.j,0,f,f)
r=A.B(A.a([A.W(B.l3,B.c.j(0.5),f,f,f,15),B.bq,A.D(A.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,A.l(f,f,B.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),B.m,f,B.e,B.j,0,f,f)
p=A.m(18)
v=A.a([new A.ab(0,B.G,B.bx.j(0.4),B.ct,18)],v)
n=g.e
j=n===1?"":"s"
return new A.C(new A.N(0,0,0,d.f.d+e.r.d),A.p(f,A.v(A.a([w,B.aO,t,B.bv,q,B.bv,D.f5m,B.ar,o,B.aO,D.f9g,B.P,s,B.ay,r,B.aO,new A.a4(f,54,A.bV(A.hi(D.ai8,A.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,B.fS,f,f,f),g.gc0B(),f),new A.o(f,f,f,p,v,D.bJo,B.n),B.bb),f)],u),B.ah,f,B.e,B.Q,0,B.p),B.f,f,f,D.aT1,f,f,f,f,D.bjy,f,f,f),f)},
b0N(d,e,f){var w=null,v=f.j(0.1),u=A.m(16),t=A.H(f.j(0.45),B.r,1)
return A.D(A.p(w,A.v(A.a([A.W(d,f,w,w,w,24),B.av,A.d(e,w,w,w,w,w,w,B.a4Y,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.f0,w,w,w),1)}}
C.oB.prototype={}
C.bmI.prototype={
a4(d,e){var w,v,u,t,s,r=null,q=e.a/2,p=new A.u(q,e.b/2),o=q-4
for(q=d.a,w=0;w<37;++w){$.V()
v=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
if(w===0)u=B.bl
else u=(w&1)===0?B.bM:B.M
v.r=u.gp(0)
u=A.bS(p,o)
t=v.G()
q.drawArc.apply(q,[A.c2(u),(w*2*3.141592653589793/37-1.5707963267948966)*57.29577951308232,9.72972972972973,!0,t])
t.delete()}$.V()
q=A.L()
q.r=B.fh.gp(0)
q.b=B.ae
q.c=8
d.ae(p,o,q)
q=A.L()
q.r=B.aK.gp(0)
d.ae(p,o*0.22,q)
q=this.b
if(q!=null){s=A.id(r,r,r,r,A.dl(r,r,r,r,r,r,r,r,r,B.aLi,A.t(q)),B.a5,B.ch,r,B.em,B.cg)
s.eU()
q=s.b
u=q.c
q=q.a.c
s.a4(d,p.aE(0,new A.u(u/2,q.gbc(q)/2)))}},
ap(d){return d.b!=this.b}}
C.Dv.prototype={
a3(){return"NgmyProMoveResult."+this.b}}
C.aot.prototype={
gjB(){var w=this.d
w=w==null?null:w.a
return w!==!1},
biM(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.fCG("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.bSC()
w=s.gjB()
v=s.d
s.c=w?"You ("+v.b+") vs NGMY \u2014 capture all opponent discs":v.b+" vs "+v.c+" \u2014 capture all discs"
break
case"tic_tac_go":s.b=1
s.at=A.bZ(9,"",!1,x.N)
s.ax=!0
if(s.gjB())w="You are X vs NGMY (O) \u2014 get 3 in a row"
else{w=s.d
w=w.b+" (X) vs "+w.c+" (O)"}s.c=w
break
case"blackjack_vegas":s.b=1
w=x.t
s.ay=A.a([1+e.aC(10),1+e.aC(10)],w)
s.ch=A.a([1+e.aC(10),1+e.aC(10)],w)
s.CW=!1
s.c="Beat the dealer \u2014 don't bust over 21"
break
case"roulette_euro":s.b=1
s.cx=null
s.c="Pick a number \u2014 spin the wheel"
break
case"slots_jackpot":s.b=1
s.db=A.a([e.aC(6),e.aC(6),e.aC(6)],x.t)
s.c="Match 3 symbols for jackpot"
break
case"billiards_snooker":s.b=1
s.dx=e.af()*3.141592653589793*2
s.c=s.gjB()?"Aim and shoot \u2014 beat NGMY on the snooker table":"Aim and shoot \u2014 pocket balls"
break
case"connect_four_pro":s.b=1
u=J.e_(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=A.bZ(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gjB())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.aTF(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.ayT.h(0,d)
s.c=w==null?"Play to earn":w}},
b5l(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gjB()
if(o)return
o=x.N
s.x=A.a_(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b5(w,new C.c8I(),o)
v=A.A(v,v.$ti.k("ai.E"))
s.at=v
if(v.length<9){v=A.A(v,o)
B.d.v(v,A.bZ(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=B.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===B.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.csS(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.anI(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b5(t,new C.c8J(),x.L)
o=A.A(o,o.$ti.k("ai.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)B.d.K(v,A.bZ(7,0,!1,o))}if(A.iz(e.h(0,q)))o=A.e9(e.h(0,q))
else{o=A.c5(A.t(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.byC(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.anI(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b5(t,new C.c8K(),x.L)
o=A.A(o,o.$ti.k("ai.E"))
s.y=o}if(A.iz(e.h(0,p)))o=A.e9(e.h(0,p))
else{o=A.c5(A.t(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bzR(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.anI(e,f)
break}},
cCT(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=A.a_(w.x,q,p)
switch(d){case"tic_tac_go":o.m(0,"ttt",A.bj(w.at,!0,q))
o.m(0,"turnEmail",w.ayb())
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
p=A.U(q).k("J<1,ak<I>>")
q=A.A(new A.J(q,new C.c8M(),p),p.k("ai.E"))
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
p=A.U(q).k("J<1,ak<I>>")
q=A.A(new A.J(q,new C.c8N(),p),p.k("ai.E"))
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
default:q=A.dS(o,q,p)
q.m(0,v,w.e)
q.m(0,s,w.w)
return q}},
ayb(){var w,v,u,t=this
if(t.gjB()){if(t.ax){w=t.d
w=w==null?null:w.d
if(w==null)w=""}else w="ngmy@system"
return w}w=t.x.h(0,"playerXEmail")
if(w==null){w=t.d
w=w==null?null:w.d}v=B.a.i(J.k(w==null?"":w).toLowerCase())
w=t.x.h(0,"playerOEmail")
if(w==null){w=t.d
w=w==null?null:w.e}u=B.a.i(J.k(w==null?"":w).toLowerCase())
return t.ax?v:u},
anI(d,e){var w,v=this,u=B.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
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
csS(d,e){var w,v,u,t,s,r="playerXEmail"
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
byC(d,e){var w,v,u,t,s
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
bzR(d,e){var w,v,u,t,s,r,q
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
RW(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gjB())return s
w=B.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return B.a.i(J.k(s==null?u.ayb():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
bSC(){var w,v,u=this,t=J.e_(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=A.il(8,new C.c8F(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
aTF(d){var w=20+d.aC(80),v=w+10+d.aC(50),u=4+d.aC(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bJ(0,B.c2)},
cMg(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gjB())w=1
else{v=r.d
v=v==null?null:v.d
w=r.RW(q,v==null?"":v)?r.z:-1}if(!r.gjB()){v=r.d
v=v==null?null:v.d
v=!r.RW(q,v==null?"":v)}else v=!1
if(v)return!1
u=r.gjB()?r.z:w
if(!r.gjB()&&u!==r.z)return!1
t=J.q(r.y[d],e)
v=r.Q
if(v==null){if(t===r.z)v=!r.gjB()||t===1
else v=!1
if(v){r.Q=d
r.as=e}return!1}s=r.as
s.toString
if(d===v&&e===s){r.as=r.Q=null
return!1}if(Math.abs(d-v)===1&&Math.abs(e-s)===1&&t===0&&B.o.F(d+e,2)===1){J.aE(r.y[d],e,r.z)
J.aE(r.y[v],s,0)
r.as=r.Q=null
r.z=r.z===1?2:1
if(r.a6F(2)){r.a8c(1)
return!0}if(r.a6F(1)){r.a8c(2)
return!0}if(r.gjB()&&r.z===2){r.buJ(f)
if(r.a6F(2)){r.a8c(1)
return!0}if(r.a6F(1)){r.a8c(2)
return!0}}}return!1},
a8c(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
t.e=!0
w=t.f=d===1
if(t.gjB()){if(w){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+s}else v="NGMY wins \u2014 your discs are gone"
v=t.w=v}else{v=t.d
if(w){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+s}t.a=w?1:0
t.c=v
return!0},
buJ(d){var w,v,u,t,s,r,q,p,o,n=this,m=A.a([],x.B)
for(w=x.t,v=0;v<8;++v)for(u=0;u<8;++u){if(J.q(n.y[v],u)!==2)continue
for(t=[A.a([1,-1],w),A.a([1,1],w)],s=0;s<2;++s){r=t[s]
q=v+r[0]
p=u+r[1]
if(q>=0&&q<8&&p>=0&&p<8&&J.q(n.y[q],p)===0&&B.o.F(q+p,2)===1)m.push(A.a([v,u,q,p],w))}}w=m.length
if(w===0)return
o=m[d.aC(w)]
J.aE(n.y[o[2]],o[3],2)
J.aE(n.y[o[0]],o[1],0)
n.z=1},
a6F(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)for(t=J.aU(w[u]);t.C();)if(t.gT(t)===d)return!1
return!0},
cMh(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.pv
if(!s.gjB()){w=s.d
w=w!=null&&!s.RW("tic_tac_go",w.d)}else w=!1
if(w)return D.pv
if(s.gjB())v="X"
else{w=B.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===B.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.agl(v))return s.aOJ(v,!0)
if(!B.d.t(s.at,""))return s.aOK()
s.ax=!s.ax
if(!s.gjB()){s.x.m(0,"turnEmail",s.ayb())
s.c=s.aTd()
return D.pv}if(s.gjB()){t=s.cbl(e)
if(t>=0){s.at[t]="O"
if(s.agl("O"))return s.aOJ("O",!1)
if(!B.d.t(s.at,""))return s.aOK()
s.ax=!0}}s.c=s.gjB()?"Your turn \u2014 you are X":s.aTd()
return D.pv},
aTd(){var w=this.d
if(w==null)return"Take your turn"
return this.RW("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aOJ(d,e){var w,v,u=this
u.e=!0
u.f=e
u.r=!1
if(u.gjB()){if(e){w=u.d
w=w==null?null:w.b
w=(w==null?"You":w)+" wins with "+d+"!"}else w="NGMY wins with "+d+"!"
w=u.w=w}else{w=u.d
if(e){w=w==null?null:w.b
v=w==null?"You":w}else{w=w==null?null:w.c
v=w==null?"Opponent":w}w=u.w=v+" wins with "+d+"!"}u.c=w
u.a=e?1:0
return e?D.pw:D.Gq},
aOK(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.PB},
cbl(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.agl("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.agl("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.cJD[u]
if(v[w].length===0)return w}return-1},
agl(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.cQw[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a17(d){return B.d.cG(d,0,new C.c8L())},
cwS(d){this.ay.push(1+d.aC(10))
if(this.a17(this.ay)>21)return!0
return!1},
cwT(d){var w,v,u,t=this
while(t.a17(t.ch)<17)t.ch.push(1+d.aC(10))
t.CW=!0
w=t.a17(t.ay)
v=t.a17(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cCl(d,e){var w,v,u,t=this
if(t.e)return D.pv
if(!t.gjB()){w=t.d
w=w!=null&&!t.RW("connect_four_pro",w.d)}else w=!1
if(w)return D.pv
if(t.gjB())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.pv
if(!t.adu(d,w))return D.pv
if(t.a6v(t.fx))return t.aOH(t.fx,!0)
if(t.aKv())return t.aOI()
w=t.fx===1?2:1
t.fx=w
if(t.gjB()&&w===2){u=t.caK(e)
if(u>=0){t.adu(u,2)
if(t.a6v(2))return t.aOH(2,!1)
if(t.aKv())return t.aOI()
t.fx=1}}t.c=t.gjB()?"Your turn \u2014 drop a red disc":t.byB()
return D.pv},
byB(){var w=this.d
if(w==null)return"Drop a disc"
return this.RW("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
adu(d,e){var w
for(w=5;w>=0;--w)if(J.q(this.fr[w],d)===0){J.aE(this.fr[w],d,e)
return!0}return!1},
aKv(){for(var w=0;w<7;++w)if(J.q(this.fr[0],w)===0)return!1
return!0},
aOH(d,e){var w,v,u,t=this
t.e=!0
t.f=e
t.r=!1
w=d===1?"red discs":"gold discs"
if(t.gjB()){if(e){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+" wins with "+w+"!"}else v="NGMY wins with "+w+"!"
v=t.w=v}else{v=t.d
if(e){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+" wins with "+w+"!"}t.c=v
t.a=e?1:0
return e?D.pw:D.Gq},
aOI(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.PB},
caK(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.adu(w,2)
v=r.a6v(2)
r.b33(w)
if(v)return w}for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.adu(w,1)
u=r.a6v(1)
r.b33(w)
if(u)return w}t=A.a([],x.t)
for(w=0;w<7;++w)if(J.q(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aC(s)]},
b33(d){var w
for(w=0;w<6;++w)if(J.q(this.fr[w],d)!==0){J.aE(this.fr[w],d,0)
return}},
a6v(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.q(this.fr[w],v)!==d)continue
if(this.byD(w,v,d))return!0}return!1},
byD(d,e,f){var w,v,u,t=new C.c8E(this,d,e,f)
for(w=x.t,w=[A.a([0,1],w),A.a([1,0],w),A.a([1,1],w),A.a([1,-1],w)],v=0;v<4;++v){u=w[v]
if(t.$2(u[0],u[1])+t.$2(-u[0],-u[1])-1>=4)return!0}return!1},
b6e(d){var w=this
if(B.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.aTF(d)}return w.a>=w.b}}
C.apm.prototype={
S(){return new C.aBN(null,null)},
cHT(d){return this.e.$1(d)}}
C.aBN.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,D.bf7,null,1,null,v)
w.f2(0,!0)
v.d=w
v.a.d.aK(0,v.gaVs())
v.aug()},
bq(d){var w
this.bD(d)
w=this.a
if(d.c!==w.c){w.d.bJ(0,B.c2)
this.aug()}},
aug(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.afb(t,u)
C.afb(t,u)
w.a.cHT(s)
w.a.toString
w.n(new C.erA())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
q(){var w,v=this
v.a.d.a1(0,v.gaVs())
w=v.d
w===$&&A.c()
w.q()
v.bqF()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.afb(j,i),g=C.afb(j,i),f=j.length,e=i.length,d=A.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&A.c()
u=new A.aY(1,1)
d.push(new A.vE(new A.cU(v,!1,A.p(l,l,B.f,l,l,new A.o(B.aK,l,l,new A.bv(u,u,u,u),A.a([new A.ab(0,B.G,B.aK.j(0.6),B.J,6)],k),l,B.n),l,22,l,B.Kw,l,l,l,3),l),B.Q9,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new A.en(v,l,l,B.cS,l,l,l,l,l,l,D.eL8))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=B.c.j(0.4)
q=B.cq}else if(s===t){r=B.bg
q=B.O}else{r=B.aD
q=B.I}d.push(new A.en(t,l,l,B.cS,l,l,l,l,l,l,new A.F(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&A.c()
d.push(new A.vE(new A.cU(k,!1,A.p(l,l,B.f,B.aK,l,l,l,22,l,l,l,l,l,3),l),B.Q9,l,l))}p=f===0?0:B.k.U(h/f*100)
k=B.w.j(0.35)
v=A.m(12)
u=A.H(B.ba,B.r,1)
o=x.p
v=A.p(l,A.v(A.a([A.B(A.a([m.aVr("Correct",""+h,B.bl),B.aa,m.aVr("Wrong / missed",""+(f-g),B.aD),B.b8,A.d(""+p+"% accuracy",l,l,l,l,l,l,F.a4j,l,l,l)],o),B.m,l,B.e,B.j,0,l,l),B.ar,D.f2O],o),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(k,l,u,v,l,l,B.n),l,l,l,l,B.bm,l,l,l)
u=A.D(A.ci(new A.a7L(l,A.dl(d,l,l,l,l,l,l,l,l,l,l),l,l,l),B.q,l,B.z,l,l,l,l,B.ak),1)
k=m.a.d
g=A.l(l,l,B.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.w.j(0.35)
return A.v(A.a([v,B.ab,u,B.T,A.aK(l,B.U,!0,l,!0,B.q,l,A.aL(),k,l,l,l,l,l,2,A.bn(l,new A.b3(4,A.m(12),B.Z),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new A.b3(4,A.m(12),D.aQX),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.z,!0,l,!0,l,!1,l,B.ai,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,B.a8,l,l,l,l,l,l,l,l,l,l,l,D.aLh,!0,B.a5,l,B.am,l,l,l,l)],o),B.ah,l,B.e,B.j,0,B.p)},
aVr(d,e,f){var w=null,v=f.j(0.15),u=A.m(8)
return A.p(w,A.d(d+": "+e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(v,w,w,u,w,w,B.n),w,w,w,w,B.fL,w,w,w)}}
C.aJy.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
var z=a.updateTypes(["aw<~>()","~()","I(hX,hX)","~([wH?])","S(qf)","qf()","I(qN,qN)","S(qN)","I(qO,qO)","NR(Y)","S(hX)","cH(abx)","Yf(Y)","Xm(Y)","aci(Y)","a4D(Y)","M_(Y)","ab8(Y,hw<ak<j_>>)","ab7(Y,I)","r(qf)","qN(a1<@,@>)","~(Dv,aot)","LS(Y)","a1<n,@>(qN)","qO(a1<@,@>)","a1<n,@>(kd)","a1<n,@>(qO)","S(qO)","a1<n,@>(lm)","lm(@)","a1<n,@>(ib)","ib(@)","hX(@)","aw<~>(kd)","a1<n,@>(hX)","~(I,I)","hX(hX)","Ty(Y)","aw<S>(ak<hX>)","Ye(Y)","~(hX)","Z0(Y)","Tz(Y)","n(hX)","S(lm)","wk(bs<I,lm>)","a9H(Y,I)","I(ib,ib)","a9z(lm)","r(qU)","bG(Hj)","XL(Y)","~(d_{bumpWalletRevision:S,cloudRequest:S})","~(n,P,P,P)","P(Q)","~(d_)","Yy(Y)","~(Dv)","n(n)","Z1(Y)"])
C.cmv.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.cmw(r,w,s.b,v,s.d)
t=s.e
r.b=A.dD(t,u)
v.r=new C.cms(r)
v.e=new C.cmt(r,w)
v.f=new C.cmu(r,w,t,u)},
$S:0}
C.cmw.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.l7(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=A.a6(r)
u=A.ca(r)
s=v
q=u
p=A.EX(s,q)
if(p==null)p=new A.iY(s,q==null?A.a14(s):q)
t=p
o.d.hb(t.a,t.b)
return}o.d.K(0,w)}else{o.e.a(null)
o.d.K(0,null)}},
$S:38}
C.cms.prototype={
$0(){this.a.b.a9(0)
return $.Fy()},
$S:1620}
C.cmt.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.aqQ.$0()
this.a.b.a9(0)},
$S:0}
C.cmu.prototype={
$0(){var w,v=this,u=v.b,t=A.dB(0,0,u.gb8f(),0,0,0)
u.ko(0)
u=v.c
w=v.a
w.b=A.cP(new A.b8(u.a-t.a),new C.cmr(w,u,v.d))},
$S:0}
C.cmr.prototype={
$0(){var w=this.c
this.a.b=A.dD(this.b,w)
w.$1(null)},
$S:0}
C.eN9.prototype={
$1(d){var w=this.a
w.n(new C.eN8(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.eN8.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hw(D.abY,this.b,null,null,v.$ti.k("hw<1>"))},
$S:0}
C.eNb.prototype={
$2(d,e){var w=this.a
w.n(new C.eN6(w,d,e))},
$S:54}
C.eN6.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hw(D.abY,null,this.b,this.c,v.$ti.k("hw<1>"))},
$S:0}
C.eNa.prototype={
$0(){var w=this.a
w.n(new C.eN7(w))},
$S:0}
C.eN7.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hw(B.zF,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fk1.prototype={
$1(d){return d.a===this.a&&B.a.i(d.b.toLowerCase())===this.b&&d.x===B.ci},
$S:16}
C.fjU.prototype={
$1(d){return d},
$S:14}
C.f4M.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return A.p(B.A,new A.C(new A.N(u,0,u,0),A.d("NGMY",w,1,B.ey,w,!1,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,B.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),B.f,w,w,B.a7t,w,v,w,w,w,w,w,v)},
$S:144}
C.f4J.prototype={
$3(d,e,f){return this.a.$0()},
$S:129}
C.f4K.prototype={
$2(d,e){var w,v=this,u=e.b
if(B.a.i(u==null?"":u).length!==0){u.toString
w=B.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return A.kb(w,B.A,v.d,new C.f4I(v.e),B.fM,v.c,!0,v.b,null,null,v.a)},
$S:1621}
C.f4I.prototype={
$3(d,e,f){return this.a.$0()},
$S:129}
C.f4L.prototype={
$3(d,e,f){return this.a.$0()},
$S:129}
C.d3y.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.d3J.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.d40.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.d41.prototype={
$1(d){return this.a.Id()},
$S:13}
C.d3R.prototype={
$0(){var w=J.b5(this.b,new C.d3Q(),x.P)
w=A.A(w,w.$ti.k("ai.E"))
this.a.f=w},
$S:0}
C.d3Q.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.d3S.prototype={
$0(){var w=this.a,v=w.a.d.b4,u=A.U(v).k("J<1,a1<n,@>>")
v=A.A(new A.J(v,new C.d3P(),u),u.k("ai.E"))
w.f=v},
$S:0}
C.d3P.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.d3U.prototype={
$0(){var w=this.a,v=w.a.d.b4,u=A.U(v).k("J<1,a1<n,@>>")
v=A.A(new A.J(v,new C.d3T(),u),u.k("ai.E"))
w.f=v},
$S:0}
C.d3T.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.d3M.prototype={
$0(){var w=0,v=A.j(x.c),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.c4d(t.a.c)?2:3
break
case 2:w=4
return A.b(C.an8(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.n(new C.d3K(t))
case 3:if(t.c!=null)t.n(new C.d3L(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:52}
C.d3K.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d3L.prototype={
$0(){return this.a.d++},
$S:0}
C.d3N.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d3O.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d3E.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.hQD(t.a.d.b4,J.k(J.q(u.b,"id")),"rejected")
t.a.bn()
w=2
return A.b(C.af0(t.a.d.b4),$async$$0)
case 2:w=3
return A.b(t.Id(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3F.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a8(s)
C.hFI(t.a.d.b4,J.k(r.h(s,"id")),t.a.c.c)
t.a.bn()
w=2
return A.b(C.af0(t.a.d.b4),$async$$0)
case 2:w=3
return A.b(t.Id(),$async$$0)
case 3:t.H8(B.d.dI(t.y,new C.d3C(s),new C.d3D(t)),J.k(r.h(s,"id")))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3C.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d3D.prototype={
$0(){return B.d.gL(this.a.y)},
$S:z+5}
C.d3G.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d3H.prototype={
$0(){return B.d.gL(this.a.y)},
$S:z+5}
C.d3I.prototype={
$0(){return this.a.H8(this.b,J.k(J.q(this.c,"id")))},
$S:0}
C.d3B.prototype={
$0(){return this.a.bVD(this.b)},
$S:0}
C.d3A.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.hR4(u,w.b,new C.d3z(v,w))},
$S:0}
C.d3z.prototype={
$2(d,e){return this.a.aeP(this.b,d,e)},
$S:690}
C.d4_.prototype={
$2(d,e){if(d)return
this.a.aOm()},
$S:123}
C.d3Y.prototype={
$2(d,e){var w=this.a
return new A.kX(C.aX_(w.a.c.a),new C.d3X(w,this.b,this.c),null,null,x.gH)},
$S:1623}
C.d3X.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=A.m(12)
v=A.m(12)
u=A.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return A.aD(!1,B.a1,!0,w,A.aI(!1,v,!0,new A.C(B.lt,A.bCs(B.cQ,A.W(B.h1,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.d3W(this.a,d),t,t,t,t,t,t,t),B.f,this.b,0,t,t,t,t,t,B.ac)},
$S:1624}
C.d3W.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fgi(s.c.a,s.e).eN(new C.d3V())
w=2
return A.b(C.bzQ(u.b,t.a.c.a),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3V.prototype={
$1(d){},
$S:29}
C.d3Z.prototype={
$0(){return this.a.a.c.d},
$S:78}
C.dH1.prototype={
$0(){var w=this.a
return A.JD(w.a.c.a,new C.dH0(w))},
$S:78}
C.dH0.prototype={
$0(){return this.a.a.c.d},
$S:78}
C.dH2.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&A.c()
u.bg=t.ac()
v.bn()
w.n(new C.dH_())},
$S:0}
C.dH_.prototype={
$0(){},
$S:0}
C.dH3.prototype={
$2(d,e){var w,v=this.a
if(!C.c4d(v.a.c)){if($.fCB.t(0,B.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.fCC(this.b,v.x,w)
return!1}C.an8(v.a.c.a)}if(A.JD(v.a.c.a,new C.dGZ(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aDk()
w=v.a
w.toString
w.hk(new A.d_(B.o.u(1000*Date.now()),v.a.c.a,d,B.jw,B.f7,e,null,null,B.ci,new A.Q(Date.now(),0,!1)))
v.a.bn()
return!0},
$S:1625}
C.dGZ.prototype={
$0(){return this.a.a.c.d},
$S:78}
C.dH4.prototype={
$3$bonus(d,e,f){var w,v=null,u=B.o.u(1000*Date.now()),t=this.a,s=t.a
s.hk(new A.d_(u,s.c.a,d,B.fw,B.f7,e,v,v,B.ci,new A.Q(Date.now(),0,!1)))
t.a.bn()
w=f>0?"+$"+B.k.aa(d,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.u4(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1626}
C.d3s.prototype={
$0(){return this.a.a.c.d},
$S:78}
C.d3v.prototype={
$0(){return A.iG(this.a,null)},
$S:0}
C.d3w.prototype={
$0(){return this.a.a.c.d},
$S:78}
C.d3x.prototype={
$1(d){var w=null,v=this.a,u=A.fh(w,w,v.e===d?B.bl:A.X(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,w,w,w,w,w,w,w,w)
return A.D(new A.C(B.eV,A.i6(A.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.d3u(v,d),u),w),1)},
$S:232}
C.d3u.prototype={
$0(){var w=this.a
return w.n(new C.d3t(w,this.b))},
$S:0}
C.d3t.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d5k.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.d5n.prototype={
$1(d){this.a.cbF()
return null},
$S:13}
C.d5o.prototype={
$1(d){return this.a.cr5()},
$S:13}
C.d5p.prototype={
$1(d){this.a.a0b()
return null},
$S:13}
C.d5q.prototype={
$1(d){this.a.afV()
return null},
$S:13}
C.d5r.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c4)return
w=v.Q
w===$&&A.c()
if(w<=0){v.n(new C.d5l(v))
w=v.as
if(w!=null)w.a9(0)
v.DS()
return}v.n(new C.d5m(v))},
$S:13}
C.d5l.prototype={
$0(){return this.a.Q=0},
$S:0}
C.d5m.prototype={
$0(){var w=this.a,v=w.Q
v===$&&A.c()
w.Q=v-1
return v},
$S:0}
C.d4A.prototype={
$0(){return this.a.bB=this.b},
$S:0}
C.d4B.prototype={
$0(){return this.a.bB=this.b},
$S:0}
C.d53.prototype={
$1(d){return this.a.go.t(0,d)},
$S:59}
C.d54.prototype={
$0(){},
$S:0}
C.d4Q.prototype={
$0(){var w=this.b
w.c4=!0
w.cT="Waiting for both players\u2026"
w.cf="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.d4R.prototype={
$0(){var w=this.a
w.c4=!0
w.cT="Both players connected"
w.cf="Starting together in a moment\u2026"},
$S:0}
C.d4S.prototype={
$0(){var w=this.b
w.c4=!0
w.cT="Match starting together\u2026"
w.cf="Both players start in "+B.o.E(this.c,1,99)+"s"},
$S:0}
C.d4T.prototype={
$0(){this.b.c4=!1},
$S:0}
C.d4U.prototype={
$0(){},
$S:0}
C.d42.prototype={
$0(){var w=this.a,v=w.x2,u=A.t(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.d4z.prototype={
$0(){var w=this.a
w.at=this.b
w.b0k()},
$S:0}
C.d55.prototype={
$0(){},
$S:0}
C.d5e.prototype={
$0(){},
$S:0}
C.d52.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.n(new C.d51(w))},
$S:0}
C.d51.prototype={
$0(){var w=this.a
w.y=!0
w.z=new A.Q(Date.now(),0,!1)},
$S:0}
C.d4x.prototype={
$0(){var w=this.a;++w.Y
w.y=!1
w.z=null},
$S:0}
C.d4y.prototype={
$0(){},
$S:0}
C.d59.prototype={
$1(d){return d==null},
$S:243}
C.d5a.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
B.d.cu(v.ch,w.d)},
$S:0}
C.d5b.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.d43.prototype={
$1(d){return d==null},
$S:243}
C.d44.prototype={
$0(){return this.a.bg++},
$S:0}
C.d45.prototype={
$0(){},
$S:0}
C.d4J.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.d4K.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.K(0,t)
w=this.c
u.K(0,w)
if(v.ghr()&&D.mi.t(0,v.a.e)){u=v.id
u.K(0,t)
u.K(0,w);++v.fx}++v.k2
v.fy=A.a([],x.t)},
$S:0}
C.d4L.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.n(new C.d4I(w))},
$S:11}
C.d4I.prototype={
$0(){var w=this.a
w.fy=A.a([],x.t)
w.k1=!1},
$S:0}
C.d4V.prototype={
$0(){return this.a.y1++},
$S:0}
C.d4W.prototype={
$0(){},
$S:0}
C.d4X.prototype={
$0(){return this.a.y2++},
$S:0}
C.d4Y.prototype={
$0(){},
$S:0}
C.d4Z.prototype={
$0(){return this.a.b4++},
$S:0}
C.d5_.prototype={
$0(){},
$S:0}
C.d58.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.d4M.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d4N.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.d4O.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d4P.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.d5c.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.d5d.prototype={
$0(){var w=this.a
w.ok.push(w.d.aC(4))
w.p2=0},
$S:0}
C.d46.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d47.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.d48.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d49.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.d56.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.d57.prototype={
$0(){var w,v=this.a;++v.x2
v.aKi()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+A.t(Math.min(w+2,7))+" tiles"},
$S:0}
C.d4H.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.d50.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d4F.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d4G.prototype={
$2(d,e){return d+e.length},
$S:225}
C.d5f.prototype={
$0(){return A.iG(this.a,null)},
$S:0}
C.d5g.prototype={
$0(){return this.a.a.c.d},
$S:78}
C.d5h.prototype={
$0(){return this.a.a.c.d},
$S:78}
C.d5j.prototype={
$1(d){var w=this.a,v=w.MX(),u=v<=0?0:B.k.E(w.z7()/v,0,1),t=w.a.x,s=t*1.46
return new C.LS(w.f?s:s*u,s,t,null)},
$S:z+22}
C.d5i.prototype={
$1(d){return d.bS(0.85)},
$S:172}
C.d4E.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghr()&&D.mi.t(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return A.v(A.a([A.d(p,w,w,w,w,w,w,B.jT,B.L,w,w),B.ar,A.D(A.au(new A.a4(r*v+u,r*t+s,A.i8(!0,w,w,B.z,new A.hK(v,6,6,1,r),new C.d4D(q,r),q.fr.length,w,B.dM,B.ak,!1),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
$S:149}
C.d4D.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.t(0,e),p=r.ghr()&&D.mi.t(0,r.a.e)&&q&&r.id.t(0,e),o=r.ghr()&&D.mi.t(0,r.a.e)&&q&&!p,n=B.d.t(r.fy,e)||q,m=p?D.ajX:D.bHk,l=A.m(10),k=A.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.ajX:D.ajR
v=o?A.H(B.dy,B.r,2):s
u=A.a([new A.ab(0,B.G,A.X(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.J,4)],x.V)
t=this.b*0.42
return A.aI(!1,l,!0,A.dg(s,A.au(n?A.W(D.cah[r.fr[e]],B.c,s,s,s,t):A.d("?",s,s,s,s,s,s,A.l(s,s,B.c,s,s,s,s,s,s,s,s,t,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,B.b9,new A.o(s,s,v,k,u,w,B.n),B.eK,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.d4C(r,e),s,s,s,s,s,s,s)},
$S:182}
C.d4C.prototype={
$0(){return this.a.cb1(this.b)},
$S:0}
C.d4m.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?A.X(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.X(89,B.bl.l()>>>16&255,B.bl.l()>>>8&255,B.bl.l()&255),r=A.m(10),q=A.m(10),p=A.m(10),o=A.H(A.X(64,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
return A.aD(!1,B.a1,!0,r,A.aI(!1,q,!0,A.p(B.A,A.d(t?"":u,w,w,w,w,w,w,D.aKo,w,w,w),B.f,w,w,new A.o(w,w,o,p,w,w,B.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d4l(v,d),w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.ac)},
$S:692}
C.d4l.prototype={
$0(){return this.a.cqp(this.b)},
$S:0}
C.d4n.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=A.X(46,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
return A.aD(!1,B.a1,!0,A.m(10),A.aI(!1,A.m(10),!0,A.p(B.A,A.d(u,w,w,w,w,w,w,D.aKo,w,w,w),B.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d4k(v,d),w,w,w,w,w,w,w),B.f,t,0,w,w,w,w,w,B.ac)},
$S:692}
C.d4k.prototype={
$0(){return this.a.cqo(this.b)},
$S:0}
C.d4o.prototype={
$1(d){return this.a.n(new C.d4j())},
$S:27}
C.d4j.prototype={
$0(){},
$S:0}
C.d4p.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&A.c()
w=C.afb(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.oo()
if(u.ghr()&&D.mi.t(0,u.a.e)){u.Zw()
u.mu(!0)}else{v=B.d.cG(u.cy,0,new C.d4h())
t=u.dx
if(t>=v)u.rX("All 5 sentences perfect \u2014 full payout!")
else u.Dj(t/v,t,v)}}else{if(u.ghr()&&D.mi.t(0,u.a.e))u.Zw()
u.n(new C.d4i(u))}},
$S:0}
C.d4h.prototype={
$2(d,e){return d+e.length},
$S:225}
C.d4i.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bJ(0,B.c2)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.d4q.prototype={
$1(d){var w=null,v=A.fh(w,w,A.X(38,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,B.cc,w,w,w,w,w,w,w)
return new A.C(B.cN,new A.a4(1/0,w,A.i6(A.d(d,w,w,w,w,w,w,U.aKh,w,w,w),new C.d4g(this.a,d),v),w),w)},
$S:138}
C.d4g.prototype={
$0(){return this.a.b_H(this.b)},
$S:0}
C.d4r.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&A.c()
w=u*3+8
return A.v(A.a([A.d(s,v,v,v,v,v,v,B.nO,v,v,v),B.P,A.D(A.au(new A.a4(w,w,A.i8(!0,v,v,B.z,new A.hK(3,4,4,1,u),new C.d4f(t,u),9,v,B.dM,B.ak,!1),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
$S:149}
C.d4f.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.aYx(e),p=r===0
if(p)w=B.K
else w=q?B.bl:A.X(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v=A.m(10)
s=p?t:new C.d4b(s,e)
u=A.m(10)
p=p?"":""+r
return A.aD(!1,B.a1,!0,v,A.aI(!1,u,!0,A.au(A.d(p,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),B.f,w,0,t,t,t,t,t,B.ac)},
$S:76}
C.d4b.prototype={
$0(){return this.a.cqn(this.b)},
$S:0}
C.d4s.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.d4e(q,d)
p=A.m(16)
if(o)w=D.a_w[d]
else{w=D.a_w[d]
w=A.X(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=A.m(16)
u=o?A.X(B.k.U(127.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.X(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
u=A.H(u,B.r,o?2:1)
t=x.V
if(o){s=D.a_w[d]
t=A.a([new A.ab(0,B.G,A.X(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,16)],t)}else t=A.a([],t)
return A.aI(!1,p,!0,A.dg(r,r,r,r,B.b9,new A.o(w,r,u,v,t,r,B.n),T.zN,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1630}
C.d4e.prototype={
$0(){return this.a.cqq(this.b)},
$S:0}
C.d4t.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&A.c()
q=A.d(q,t,t,t,t,t,t,B.nO,t,t,t)
w=A.d("Move "+r.auV()+"/"+C.fIB(),t,t,t,t,t,t,B.Cd,t,t,t)
v=r.x2
u=s*3+12
return A.v(A.a([q,w,A.d("Round "+v+"/7 \xb7 "+A.t(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,A.l(t,t,A.X(153,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.D(A.au(new A.a4(u,u,A.i8(!0,t,t,B.z,new A.hK(3,6,6,1,s),new C.d4d(r),9,t,B.dM,B.ak,!1),t),t,t,t),1)],x.p),B.m,t,B.e,B.j,0,B.p)},
$S:149}
C.d4d.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=A.m(10),s=A.m(10),r=u?B.bl:D.b2L,q=u?B.eE:D.bag
return A.aD(!1,B.a1,!0,w,A.aI(!1,t,!0,A.p(w,w,B.f,w,w,new A.o(r,w,A.H(q,B.r,u?2.5:1),s,w,w,B.n),w,w,w,w,w,w,w,w),w,!0,w,w,B.K,w,w,w,w,w,w,w,w,new C.d4a(v,e),w,w,w,w,B.K,w,w),B.f,B.K,0,w,w,w,w,w,B.ac)},
$S:76}
C.d4a.prototype={
$0(){return this.a.cql(this.b)},
$S:0}
C.d4u.prototype={
$0(){return this.a.b_H(this.b[this.c])},
$S:0}
C.d4v.prototype={
$0(){return this.a.n(new C.d4c())},
$S:0}
C.d4c.prototype={
$0(){},
$S:0}
C.d4w.prototype={
$2(d,e){this.a.Yh(d,e)
return null},
$S:z+21}
C.d8C.prototype={
$1(d){return this.a.cbu(this.b,d)},
$S:1631}
C.d8B.prototype={
$0(){var w=this
return w.a.a.cIr(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cxx.prototype={
$1(d){var w=this.a
w.ZN()
w.t3()},
$S:8}
C.cwS.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cwI.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cwJ.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cx1.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cwZ.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cx_.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cx0.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cwU.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new C.cwT(w))},
$S:0}
C.cwT.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cwK.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.aa(w.c)
v.dy=J.aa(w.d)
v.fr=J.aa(w.e)},
$S:0}
C.cwX.prototype={
$1(d){var w=this.a
return new C.Ty(w.fx,new C.cwW(w),w.a.f.r,null)},
$S:z+37}
C.cwW.prototype={
$1(d){return this.bem(d)},
bem(d){var w=0,v=A.j(x.y),u,t=this,s,r
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c57(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.n(new C.cwV(r,d))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+38}
C.cwV.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cxk.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cxe.prototype={
$1(d){this.a.t3()
return null},
$S:13}
C.cxh.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(B.o.al(v.gaR9().a,1e6)<=0){w=v.id
if(w!=null)w.a9(0)
v.t3()
return}v.n(new C.cxg())},
$S:13}
C.cxg.prototype={
$0(){},
$S:0}
C.cxd.prototype={
$1(d){this.a.DZ()
return null},
$S:13}
C.cxf.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cxc.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bh(J.k(v==null?"":v))
if(u==null)u=new A.Q(A.fL(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bh(J.k(v==null?"":v))
return u.aJ(0,w==null?new A.Q(A.fL(0,0,!1),0,!1):w)},
$S:41}
C.cwP.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bh(J.k(v==null?"":v))
if(u==null)u=new A.Q(A.fL(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bh(J.k(v==null?"":v))
return u.aJ(0,w==null?new A.Q(A.fL(0,0,!1),0,!1):w)},
$S:41}
C.cwQ.prototype={
$0(){var w=this.a,v=w.f
B.d.a7(v)
B.d.v(v,this.b)
w.ax=!0},
$S:0}
C.cwR.prototype={
$0(){var w=this.a
if(w.c!=null)w.a_t(!0)},
$S:11}
C.cwN.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cwO.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
if(w.f.length!==0)w.S_(this.b)},
$S:8}
C.cx4.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=B.d.gcV(v).Q
v.toString
if(this.b)w.hP(v)
else w.lE(v,B.dT,B.kv)},
$S:8}
C.cwY.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cx5.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cx6.prototype={
$0(){var w=this.a
w.f.push(A.E(["role","user","text",this.b,"at",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.z))
w.b17()
w.r.bJ(0,B.c2)
w.at=!0},
$S:0}
C.cx7.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cx8.prototype={
$0(){var w=this.a
w.f.push(A.E(["role","ai","text",this.b,"at",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.z))
w.at=!1},
$S:0}
C.cx9.prototype={
$0(){var w,v=this.b,u=A.T(x.N,x.z)
J.aE(u,"role","ai")
J.aE(u,"text",this.c)
J.aE(u,"at",new A.Q(Date.now(),0,!1).a5().ab())
w=this.a
if(J.cu(w.b)){w=J.b5(w.b,v.gcat(),x.P)
w=A.A(w,w.$ti.k("ai.E"))
J.aE(u,"phoneActions",w)}v.f.push(u)
v.b17()},
$S:0}
C.cxa.prototype={
$0(){this.a.f.push(A.E(["role","ai","text",y.g,"at",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.z))},
$S:0}
C.cxb.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cx2.prototype={
$1(d){return this.ben(d)},
ben(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:k=t.a
if(k.c==null||d==null){w=1
break}s=t.b.b
r=J.a8(s)
q=r.h(s,"start")
p=A.bh(q==null?"":q)
q=r.h(s,"end")
o=A.bh(q==null?"":q)
w=p!=null?3:4
break
case 3:q=k.a.c.a
n=Date.now()
m=r.h(s,"title")
m=B.a.i(m==null?"Event":m)
l=p.bQ()
w=5
return A.b(C.anx(q,new C.qN("cal_"+1000*n,m,l,(o==null?p.bN(36e8):o).bQ(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.anP()
case 4:k.c.I(x.q).f.P(A.b1(null,null,null,B.d1,null,B.q,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:371}
C.cxj.prototype={
$1(d){return this.beo(d)},
beo(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.I(x.q).f.P(A.b1(null,null,null,B.d1,null,B.q,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:371}
C.cx3.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=B.d.gcV(v).Q
v.toString
w.hP(v)},
$S:8}
C.cxw.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
if(v>0)w.a8M(v-1)},
$S:0}
C.cxp.prototype={
$0(){return A.iG(this.a,null)},
$S:0}
C.cxs.prototype={
$1(d){var w=this.a
w.n(new C.cxm(w,d))
if(d===0)w.a_t(!0)},
$S:27}
C.cxm.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cxq.prototype={
$2$size(d,e){return C.fH0(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:1632}
C.cxr.prototype={
$0(){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.fTn(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return A.b(H.aol(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cxn(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return A.b(C.anv(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return A.b(p.t3(),$async$$0)
case 15:p.n(new C.cxo(p))
p.a8M(0)
case 14:u=!1
w=1
break
case 11:w=16
return A.b(p.t3(),$async$$0)
case 16:case 9:case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:64}
C.cxn.prototype={
$2(d,e){return this.bep(d,e)},
bep(d,e){var w=0,v=A.j(x.y),u,t=this,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=A.a06(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$2,v)},
$S:122}
C.cxo.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cxu.prototype={
$2(d,e){return B.aa},
$S:36}
C.cxt.prototype={
$2(d,e){var w=null,v=this.a,u=A.d((v.a.c.w?D.a_B:D.a__)[e],w,w,w,w,w,w,B.pL,w,w,w),t=A.X(31,B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255),s=A.X(89,B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255)
v=v.at?w:new C.cxl(v,e)
return A.mN(w,t,u,w,v,w,w,new A.ay(s,1,B.r,-1),w)},
$S:612}
C.cxl.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a_B:D.a__
w.r.saT(0,v[this.b])
w.mt()
return null},
$S:0}
C.cxv.prototype={
$1(d){var w=this.a
return w.at?null:w.mt()},
$S:2}
C.cwL.prototype={
$0(){return this.a.a8M(0)},
$S:0}
C.cxi.prototype={
$0(){return this.a.a8M(this.b)},
$S:0}
C.cwM.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=A.p(v,D.bC9,B.f,v,v,new A.o(v,v,v,v,v,new A.a5(B.a3,B.a7,B.x,A.a([A.X(51,B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255),w.b],x.O),v,v),B.a6),v,72,v,v,v,v,v,72)
t=w.c
s=A.d("Start a conversation",v,v,v,v,v,v,A.l(v,v,t?B.c:B.aE,v,v,v,v,v,v,v,v,16,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.au(new A.C(B.Vr,A.v(A.a([u,B.ab,s,B.ar,A.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,A.l(v,v,t?B.az:B.aU,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v)],x.p),B.m,v,B.e,B.j,0,B.p),v),v,v,v)}if(e<s)return u.bzw(t[e],w.c)
return u.aKT(A.E(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:39}
C.bUE.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=B.k.N(d)
return new A.Q(A.fL(w>1e11?w:w*1000,0,!0),0,!0).bQ()}v=A.bh(J.k(d))
return v==null?null:v.bQ()},
$S:272}
C.bUD.prototype={
$1(d){A.aM(d)
return(d==null?0:d)/100},
$S:512}
C.bUG.prototype={
$1(d){var w
if(d==null)w=null
else{w=A.bh(J.k(d))
w=w==null?null:w.bQ()}return w},
$S:272}
C.bUF.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null
if(!x.f.b(d))return m
w=A.a_(d,x.N,x.z)
try{v=J.q(w,"id")
v=J.k(v==null?"":v)
u=J.q(w,"userEmail")
u=J.k(u==null?"":u)
t=A.aM(J.q(w,"amount"))
if(t==null)t=0
s=J.q(w,"type")
s=A.a2B(B.a0f,J.k(s==null?"reimbursement":s))
r=J.q(w,"method")
r=A.a2B(B.ZY,J.k(r==null?"system":r))
q=A.aS(J.q(w,"sourceDetails"))
p=J.q(w,"status")
p=A.a2B(B.FC,J.k(p==null?"approved":p))
o=this.a.$1(J.q(w,"timestamp"))
if(o==null)o=new A.Q(Date.now(),0,!1)
return new A.d_(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:654}
C.dp5.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dp6.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.doX.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bj(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.doV.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.a
w=2
return A.b(o.zJ(),$async$$0)
case 2:t=o.d
t===$&&A.c()
s=o.e
s===$&&A.c()
r=o.a.c
q=o.f
q===$&&A.c()
w=3
return A.b(C.fBB(t,s,r,q),$async$$0)
case 3:p=e
w=4
return A.b(A.oC(o.a.c,!1),$async$$0)
case 4:o.kt(p)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dp4.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.a7k(),$async$$0)
case 3:q=e
if(q==null){r.kt("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return A.b(A.a9(s,!1).cp(A.eF(new C.dp3(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return A.b(A.oC(r.a.c,!1),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dp3.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&A.c()
return new C.Ye(w.b,w.a,u,v,null)},
$S:z+39}
C.doU.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.hmr(q)?3:4
break
case 3:w=5
return A.b(t.a.Dy(B.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return A.b(C.aUB(q,s.a.c),$async$$0)
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
case 9:s.kt(C.bUI(s.a.c))
w=1
break
case 10:s.kt("That code didn't match anything on your account. Double-check it and try again.")
w=1
break
case 11:s.kt(y.B)
w=1
break
case 12:q=r.b
q.toString
w=14
return A.b(s.yZ(q,!0,!0),$async$$0)
case 14:w=1
break
case 13:q=r.b
q.toString
w=15
return A.b(s.aM6(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.doT.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=A.bj(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.doW.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.aaB(),$async$$0)
case 3:q=e
if(q==null||B.a.i(q).length===0){w=1
break}s=C.fQj(q)
if(s==null){r.kt("Could not read that backup file.")
w=1
break}if(!C.bUH(s,r.a.c,null)){r.kt(C.bUI(r.a.c))
w=1
break}w=4
return A.b(r.bBQ(s),$async$$0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dp2.prototype={
$1(d){var w=null,v=new A.ar(B.as,$.av()),u=A.M(d).ax.a===B.H,t=u?B.hy:B.c,s=x.p,r=A.v(A.a([A.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,A.l(w,w,u?B.af:B.aj,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),B.ay,A.aK(w,B.U,!0,w,!0,B.q,w,A.aL(),v,w,w,w,w,w,2,A.bn(w,new A.b3(4,A.m(14),B.de),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),B.z,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,B.dO,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.L,w,B.am,w,w,w,w)],s),B.F,w,B.e,B.Q,0,B.p)
return A.er(A.a([A.bJ(!1,B.dg,w,w,!0,w,w,new C.dp0(d),w,w),A.bL(D.eTe,new C.dp1(d,v),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.f5F,w)},
$S:21}
C.dp0.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.dp1.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a9(this.a,!1).M(w)
return null},
$S:0}
C.doY.prototype={
$1(d){return D.fk9},
$S:z+12}
C.doZ.prototype={
$0(){return this.a.Dz(B.a.i(this.b))},
$S:1}
C.dp_.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(C.aUB(t.b,r.a.c),$async$$0)
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
return A.b(r.yZ(s,!0,!0),$async$$0)
case 11:w=1
break
case 7:r.kt(C.bUI(r.a.c))
w=1
break
case 8:r.kt("Could not read that QR code for your account.")
w=1
break
case 9:r.kt(y.B)
w=1
break
case 10:s=q.b
s.toString
w=12
return A.b(r.aM6(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dp7.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.dpb.prototype={
$1(d){this.a.P8()
return null},
$S:13}
C.dp8.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dp9.prototype={
$0(){var w=null,v=this.a
A.fE(new A.fx(v.gate()))
this.b.I(x.q).f.P(A.b1(w,w,w,w,w,B.q,w,A.d("Code "+v.gate()+" copied",w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dpa.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.dpc.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!(B.a.a_(s,"NGMYSNAP1|")||B.a.a_(s,"NGMYLOCALSYNC1|")||B.a.a_(s,"NGMYLOCALLIVE1|")||B.a.a_(s,"NGMYLOCALDEP1|")))continue
r.e=!0
A.a9(this.b,!1).M(s)
return}},
$S:178}
C.f80.prototype={
$1(d){return D.fiv},
$S:z+13}
C.f9d.prototype={
$1(d){return new C.aci(this.a,this.b,this.c,null)},
$S:z+14}
C.eH4.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.eH5.prototype={
$0(){A.a9(this.a,!1).M(!0)
return null},
$S:0}
C.cZM.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fw()},
$S:8}
C.cZJ.prototype={
$2(d,e){return e.ai0(e.a.toUpperCase())},
$S:1633}
C.cZK.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=B.a.i(w.d.a.a)
A.a9(v,!1).M(w)
return null},
$S:2}
C.cZL.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.bVp.prototype={
$1(d){var w=J.q(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!B.d.ba(D.cXE,B.a.gkV(v))},
$S:4}
C.fgc.prototype={
$1(d){return d.a===this.a},
$S:1634}
C.fgd.prototype={
$0(){return B.d.gL(B.B1)},
$S:1635}
C.dvx.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.n(new C.dvw(v))
w=v.r
w===$&&A.c()
if(w<=0)v.b0b("Time's up")},
$S:13}
C.dvw.prototype={
$0(){var w=this.a,v=w.r
v===$&&A.c()
w.r=v-1
return v},
$S:0}
C.dvo.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dvt.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.n(new C.dvq(w,d,e))},
$S:128}
C.dvq.prototype={
$0(){var w=this.a,v=this.c
w.e=B.o.E(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dvu.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new C.dvp(w))
w.ckX(!0)},
$S:0}
C.dvp.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dvv.prototype={
$1(d){this.a.b0b(d)
return null},
$S:2}
C.dvr.prototype={
$0(){return A.iG(this.a,null)},
$S:0}
C.dvs.prototype={
$0(){return this.a.a.c.d},
$S:78}
C.c1Q.prototype={
$1(d){return D.dgr},
$S:z+15}
C.c1P.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.fa_.prototype={
$5(d,e,f,g,h){var w,v=null,u=J.a8(d),t=A.aM(u.h(d,e)),s=t==null?v:B.k.N(t)
if(s==null)s=0
if(s<=0)return v
t=u.h(d,g)
if(J.k(t==null?"":t)!==h){u.m(d,g,h)
u.m(d,f,0)}t=A.aM(u.h(d,f))
w=t==null?v:B.k.N(t)
if(w==null)w=0
if(w>=s)return v
u.m(d,f,w+1)
u=A.aM(u.h(d,"outcome"))
return u==null?v:B.k.N(u)},
$S:1636}
C.fa0.prototype={
$2(d,e){var w=A.aM(J.q(d,e))
w=w==null?null:B.k.N(w)
return w==null?0:w},
$S:642}
C.fa1.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:225}
C.fnd.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.h0z(w,v):C.fHi(w,v)
if(u===3)++w.f
C.adH(w,this.c,u)
return u},
$S:1637}
C.fnf.prototype={
$0(){return C.h0z(this.a,this.b)},
$S:113}
C.fne.prototype={
$0(){return C.fHi(this.a,this.b)},
$S:113}
C.doI.prototype={
$0(){var w=this.a
if(w.a.c)w.n(new C.doH(w))},
$S:0}
C.doH.prototype={
$0(){this.a.r=1+B.o.F(A.AV(new A.Q(Date.now(),0,!1))/90|0,5)},
$S:0}
C.doJ.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&A.c()
u=u.x
u===$&&A.c()
w=B.k.by(u*10)
if(w!==v.w)v.n(new C.doG(v,w))}},
$S:0}
C.doG.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.c3N.prototype={
$3(d,e,f){var w=null
return A.D(A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,B.I,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.bB,A.f_(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.ds)],x.p),B.m,w,B.e,B.j,0,B.p),1)},
$S:1638}
C.c3M.prototype={
$3(d,e,f){var w=null
return A.d("$"+B.k.aa(e,2),w,w,w,w,w,w,B.oA,w,w,w)},
$S:451}
C.c4e.prototype={
$1(d){return new C.M_(this.a,this.b,!1,null,null)},
$S:z+16}
C.dO2.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=A.m(e?0:30)
e=e?g:A.H(B.b1.j(0.5),B.r,1)
w=f.a.e?g:A.a([new A.ab(2,B.G,B.b1.j(0.35),B.J,36),new A.ab(0,B.G,B.bx.j(0.175),B.J,24)],x.V)
v=A.m(f.a.e?0:30)
u=x.O
t=A.an(g,A.p(g,g,B.f,g,g,new A.o(g,g,g,g,g,new A.bR(B.A,0.5,B.x,g,0,A.a([B.b6.j(0.22),B.K],u),g,g),B.a6),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=A.an(-50,A.p(g,g,B.f,g,g,new A.o(g,g,g,g,g,new A.bR(B.A,0.5,B.x,g,0,A.a([B.bx.j(0.18),B.K],u),g,g),B.a6),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?B.j:B.Q
p=x.p
o=A.a([],p)
if(f.a.e)o.push(B.P)
n=x.V
o.push(A.p(g,D.bxL,B.f,g,g,new A.o(g,g,A.H(B.aK.j(0.8),B.r,2.5),g,A.a([new A.ab(0,B.G,B.b1.j(0.55),B.ct,18)],n),E.th,B.a6),g,88,g,g,g,g,g,88))
o.push(B.aO)
o.push(A.nr(B.jd,D.f3s,new C.dNZ()))
o.push(B.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(A.d(m,g,g,g,g,g,g,A.l(g,g,B.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,B.cq,g,1.45,!0,g,g,g,g,g,g,g,g),B.L,g,g))
m=this.b
if(m.length!==0){l=B.cG.j(0.12)
k=A.m(18)
j=A.H(B.cG.j(0.45),B.r,1)
i=A.a([A.B(A.a([A.W(D.brN,B.cG.j(0.95),g,g,g,20),B.aa,A.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,A.l(g,g,B.cG.j(0.95),g,g,g,g,g,g,g,g,13,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),B.m,g,B.e,B.j,0,g,g),B.T,A.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,A.l(g,g,B.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),B.T],p)
B.d.v(i,new A.J(m,new C.dO_(),A.U(m).k("J<1,r>")))
B.d.v(o,A.a([B.aO,A.p(g,A.v(i,B.F,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(l,g,j,k,g,g,B.n),g,g,g,g,B.bC,g,g,1/0)],p))}o.push(B.bv)
m=B.w.j(0.35)
l=A.m(18)
k=A.H(B.b1.j(0.35),B.r,1)
o.push(A.p(g,A.v(A.a([f.atP(B.hq,"Unlimited games with an active plan",B.b6),B.P,f.atP(B.k8,"Weekday check-ins grow your balance",B.b1),B.P,f.atP(B.m4,"Compete, bet, and earn points",B.aK)],p),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(m,g,k,l,g,g,B.n),g,g,g,g,B.bC,g,g,1/0))
o.push(B.d5)
l=A.m(16)
n=A.a([new A.ab(0,B.G,B.bx.j(0.45),B.ct,16)],n)
o.push(new A.a4(1/0,g,A.bV(A.dq(D.bAX,D.f_l,new C.dO0(f,a0),A.bk(B.K,g,g,g,B.c,B.Hj,g,B.K,new A.b6(A.m(16),B.Z),g,g,g)),new A.o(g,g,g,l,n,E.th,B.n),B.bb),g))
o.push(B.P)
n=f.a.e?"Back":"Maybe later"
o.push(A.bJ(!1,A.d(n,g,g,g,g,g,g,A.l(g,g,B.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,new C.dO1(f,a0),g,g))
if(f.a.e)o.push(B.b8)
h=A.p(g,A.bt(v,new A.am(B.W,g,B.a9,B.q,A.a([t,u,new A.C(new A.N(22,r,22,q),A.v(o,B.m,g,B.e,s,0,B.p),g)],p),g),B.ap),B.f,g,g,new A.o(g,g,e,d,w,D.bK_,B.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return A.ey(g,B.K,h,g,g,g,Ad.VW,B.cZ,g,g,g)},
$S:693}
C.dNZ.prototype={
$1(d){return D.bJ_.av(0,d)},
$S:65}
C.dO_.prototype={
$1(d){var w=null
return new A.C(B.fk,A.B(A.a([A.W(Ak.XL,B.cG.j(0.85),w,w,w,14),B.aa,A.D(A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$S:138}
C.dO0.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{A.a9(this.b,!1).M(null)
w.a.c.$0()}},
$S:0}
C.dO1.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else A.a9(this.b,!1).M(null)},
$S:0}
C.fiz.prototype={
$1(d){if(d.gma())this.a.a=d
return d.gma()},
$S:591}
C.fim.prototype={
$1(d){$.aT.x1$.push(new C.fil(this.a))},
$S:8}
C.fil.prototype={
$1(d){return this.a.$0()},
$S:8}
C.f6h.prototype={
$1(d){return C.h0F(this.a,this.b+1)},
$S:8}
C.fjX.prototype={
$2(d,e){var w=A.aH(d,B.bR,x.w).w.a
return new A.a4(w.a,w.b,A.ce(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:161}
C.c4s.prototype={
$1(d){return d.r===this.a},
$S:234}
C.c4t.prototype={
$1(d){var w=$.aNU(),v=w.a
w.sp(0,v+1)
return v},
$S:1640}
C.c4u.prototype={
$1(d){},
$S:29}
C.c4r.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:234}
C.c4q.prototype={
$1(d){return d.f.c8(this.a)},
$S:234}
C.f4t.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:67}
C.fvm.prototype={
$1(d){return C.a5i(this.a)},
$S:103}
C.fvn.prototype={
$1(d){var w=$.aNU()
w.sp(0,w.a+1)},
$S:28}
C.fvo.prototype={
$1(d){},
$S:29}
C.fvp.prototype={
$1(d){return new A.k4($.aNU(),new C.fvl(this.a,this.b),null,null,x.am)},
$S:1641}
C.fvl.prototype={
$3(d,e,f){var w=this.b
return new A.kX(C.ane(this.a,!1),new C.fvk(w),w,null,x.gv)},
$S:1642}
C.fvk.prototype={
$2(d,e){var w=e.b
return new C.ab8(w==null?this.a:w,null)},
$S:z+17}
C.dO5.prototype={
$1(d){return d.c},
$S:234}
C.dO6.prototype={
$1(d){return d.gbbk()},
$S:1643}
C.dO7.prototype={
$2(d,e){return d+e},
$S:88}
C.dO8.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.dOa.prototype={
$2(d,e){return B.P},
$S:36}
C.dO9.prototype={
$2(d,e){return new C.ab7(J.q(this.a.c,e),null)},
$S:z+18}
C.dO4.prototype={
$1(d){return d==null?"\u2026":C.bwl(d)},
$S:1644}
C.fvs.prototype={
$3(d,e,f){var w=this
return A.r_(new C.axA(w.a,w.b,w.c,w.d,new C.fvq(d,w.e),new C.fvr(d,w.f),null))},
$C:"$3",
$R:3,
$S:94}
C.fvq.prototype={
$0(){A.a9(this.a,!1).M(null)
C.h3C(this.b)},
$S:0}
C.fvr.prototype={
$0(){A.a9(this.a,!1).M(null)
C.h3C(this.b)},
$S:0}
C.d5t.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.a,g=h.f
g===$&&A.c()
w=h.e
v=0
for(;v<28;++v){u=g[v]
t=u.b+u.c
u.b=t
u.d+=0.08
if(t>320){u.b=-10
u.a=40+w.af()*260
u.c=1.5+w.af()*3}}g=x.p
w=A.a([],g)
if(h.a.c){t=h.f
B.d.v(w,new A.J(t,new C.d5s(),A.U(t).k("J<1,r>")))}t=h.d
t===$&&A.c()
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,A.aH(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?A.a([B.bl,B.fs,B.eu],r):A.a([B.aD,B.f_,B.eZ],r)
p=A.m(26)
o=A.H(B.c.j(0.4),B.r,2)
n=x.V
m=A.a([new A.ab(6,B.G,(h.a.c?B.du:B.dC).j(0.5),B.J,36)],n)
l=A.a([],g)
if(h.a.c){k=A.di()
j=k.a
j.$flags&2&&A.ah(j)
j[11]=0.001
k.jz(-0.35)
r=A.a([X.aaC,B.rv],r)
l.push(new A.a4(i,100,new A.am(B.A,i,B.a9,B.f,A.a([A.fo(B.A,A.p(i,D.aYD,B.f,i,i,new A.o(i,i,i,i,A.a([new A.ab(4,B.G,B.cQ.j(0.6),B.J,24),new A.ab(0,B.G,B.w.j(0.3),B.dq,12)],n),new A.bR(B.A,0.5,B.x,i,0,r,i,i),B.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.bE7)
l.push(B.ay)
l.push(A.d(h.a.d,i,i,i,i,i,i,B.a4V,B.L,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=A.m(18)
k=A.H(B.fs,B.r,4)
B.d.v(l,A.a([B.ay,D.eUQ,B.P,A.p(i,A.d(r,i,i,i,i,i,i,D.eLR,B.L,i,i),B.f,i,i,new A.o(B.c,i,k,n,i,i,B.n),i,i,i,i,B.Vp,i,i,1/0)],g))}B.d.v(l,A.a([B.ab,A.d(h.a.e,i,i,i,i,i,i,D.eOs,B.L,i,i)],g))
l.push(B.dX)
r=A.D(A.dV(D.eSx,h.a.r,A.db(i,i,i,i,i,i,i,i,i,B.c,i,i,B.cc,i,i,D.aQC,i,i,i,i)),1)
h=h.a
n=h.w
l.push(A.B(A.a([r,B.aw,A.D(A.bL(G.aLE,n,A.bk(B.c,i,i,i,h.c?B.fs:B.f_,i,B.cc,i,i,i,i,i)),1)],g),B.m,i,B.e,B.j,0,i,i))
w.push(A.e7(B.A,A.p(i,A.v(l,B.m,i,B.e,B.Q,0,B.p),B.f,i,i,new A.o(i,i,o,p,m,new A.a5(B.ax,B.aC,B.x,q,i,i),B.n),i,i,i,B.a8,B.ae5,i,i,s),1+t*0.02,i,i))
return new A.am(B.A,i,B.a9,B.f,w,i)},
$S:110}
C.d5s.prototype={
$1(d){var w=null,v=d.a,u=d.b
return A.an(w,A.d8(A.ev(B.A,d.d,A.W(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.c63.prototype={
$2(d,e){var w=null,v=this.a,u=C.hlT(A.JD(v.c,v.d))
return A.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1645}
C.c62.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:67}
C.bVW.prototype={
$0(){},
$S:0}
C.f3s.prototype={
$1(d){return B.o.u(d)},
$S:82}
C.dH7.prototype={
$0(){return this.a.y=!0},
$S:0}
C.dH8.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.dH9.prototype={
$0(){var w=this.a
return w.w=D.Ox[w.d.aC(5)]},
$S:0}
C.dHa.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.dHb.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.dHc.prototype={
$0(){var w=this.a
return w.n(new C.dH6(w))},
$S:0}
C.dH6.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dHd.prototype={
$0(){var w=this.a
return w.n(new C.dH5(w))},
$S:0}
C.dH5.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dHg.prototype={
$0(){return A.iG(this.a,null)},
$S:0}
C.dHh.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&B.a.i(t.e.a.a).length===0?B.bl:A.X(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),r=A.m(10)
t=t.y?u:new C.dHf(t,d)
w=A.m(10)
v=B.k.aa(d,0)
return A.D(new A.C(B.jl,A.aD(!1,B.a1,!0,r,A.aI(!1,w,!0,new A.a4(u,38,A.au(A.d("$"+v,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),B.f,s,0,u,u,u,u,u,B.ac),u),1)},
$S:1646}
C.dHf.prototype={
$0(){var w=this.a
return w.n(new C.dHe(w,this.b))},
$S:0}
C.dHe.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bJ(0,B.c2)},
$S:0}
C.dOs.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+B.cR.gcs().aG(this.c)},
$S:0}
C.dOt.prototype={
$0(){return A.iG(this.a,null)},
$S:0}
C.dOo.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=A.m(14),s=u?B.c.j(0.1):B.K,r=A.H(u?D.eF.j(0.5):B.K,B.r,1),q=A.W(e,u?D.eF:B.az,w,w,w,20)
return A.D(A.aG(w,A.dg(w,A.B(A.a([q,B.bq,A.d(f,w,w,w,w,w,w,A.l(w,w,u?B.c:B.az,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.b7,B.j,0,w,w),w,w,B.b9,new A.o(s,w,r,t,w,w,B.n),B.a1,w,46,w,w,w,w,w),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dOq(v,d),w,w,w,w,w,w,!1,B.ad),1)},
$S:1647}
C.dOq.prototype={
$0(){var w=this.a
return w.n(new C.dOp(w,this.b))},
$S:0}
C.dOp.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dOr.prototype={
$0(){var w=this.a,v=w.d===B.ke?"Cash App tag":"Bitcoin address"
return w.Hv(this.b,v)},
$S:0}
C.dOn.prototype={
$0(){var w=this.a
return w.Hv(w.gaoG(),"Code")},
$S:0}
C.c4U.prototype={
$1(d){return C.hi5(A.a_(d,x.N,x.z))},
$S:z+20}
C.c4V.prototype={
$2(d,e){return d.c.aJ(0,e.c)},
$S:z+6}
C.c4R.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.c4S.prototype={
$2(d,e){return d.c.aJ(0,e.c)},
$S:z+6}
C.c4T.prototype={
$1(d){return d.ac()},
$S:z+23}
C.c4W.prototype={
$1(d){var w=d.c
return!w.cY(this.a.bN(-36e8))&&!w.c8(this.b)},
$S:z+7}
C.bYj.prototype={
$1(d){return C.hi6(A.a_(d,x.N,x.z))},
$S:z+24}
C.bYk.prototype={
$2(d,e){return e.b.aJ(0,d.b)},
$S:z+8}
C.bYh.prototype={
$1(d){return d.ac()},
$S:z+26}
C.bYi.prototype={
$2(d,e){return e.b.aJ(0,d.b)},
$S:z+8}
C.bYm.prototype={
$1(d){var w=d.b
return!w.cY(this.a)&&!w.c8(this.b)},
$S:z+27}
C.c52.prototype={
$1(d){return d.ac()},
$S:z+28}
C.c51.prototype={
$1(d){return C.fSy(A.a_(x.f.a(d),x.N,x.z))},
$S:z+29}
C.c50.prototype={
$1(d){return d.ac()},
$S:z+30}
C.c5_.prototype={
$1(d){return C.hlx(A.a_(x.f.a(d),x.N,x.z))},
$S:z+31}
C.c54.prototype={
$1(d){return C.hlw(A.a_(x.f.a(d),x.N,x.z))},
$S:z+32}
C.c55.prototype={
$2(d,e){return B.o.aJ(d.f,e.f)},
$S:z+2}
C.c56.prototype={
$1(d){return d.ac()},
$S:z+34}
C.dS7.prototype={
$1(d){return d.b6R(A.bj(d.e,!0,x.u))},
$S:z+36}
C.dS8.prototype={
$2(d,e){return B.o.aJ(d.f,e.f)},
$S:z+2}
C.dS1.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dS2.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dRL.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.K(w,this.b)},
$S:0}
C.dRM.prototype={
$1(d){return new C.NR(this.a,null)},
$S:z+9}
C.dRN.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=B.d.bi(t,new C.dRK(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){B.d.cu(u.d,w)
u.HF()}},
$S:0}
C.dRK.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dRZ.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(A.E(["role","admin","text",this.b],w,w))},
$S:0}
C.dS_.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(A.E(["role","ai","text",v],t,t))}else{v=t.d
v===$&&A.c()
t.d=C.hLu(v,w[0],w[3])
t.HF()
t=w[2]
if(t==null)t="Created "+J.aa(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(A.E(["role","ai","text",t],w,w))}},
$S:0}
C.dS0.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=B.d.gcV(v).Q
v.toString
w.hP(v)}},
$S:8}
C.dRT.prototype={
$1(d){return new C.NR(this.a,null)},
$S:z+9}
C.dRU.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dRS.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cu(w,this.b)},
$S:0}
C.dRY.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&A.c()
v=B.d.cu(w,s)
B.d.ck(t.d,u.a,v)
t.HF()},
$S:0}
C.dRX.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
return new C.Z1(u[w],new C.dRW(v,w),null)},
$S:z+59}
C.dRW.prototype={
$1(d){var w=this.a
return w.n(new C.dRV(w,this.b,d))},
$S:z+40}
C.dRV.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dRP.prototype={
$0(){var w=this.a
return w.n(new C.dRO(w))},
$S:0}
C.dRO.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dRQ.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?B.cm:B.aI
return new A.C(B.fk,A.d(t+": "+A.t(s),w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?B.a4:B.cq,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:109}
C.dRR.prototype={
$1(d){return this.a.a_a()},
$S:2}
C.dS6.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.rt:B.c
u=A.m(16)
t=A.m(16)
s=l?B.aI:B.aJ
r=w.d
q=A.aZ(r).j(0.15)
p=A.m(12)
q=A.p(n,A.W(B.agB,l?B.bH:B.aj,n,n,n,20),B.f,n,n,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.bU,n,n,n)
p=A.aZ(r).j(0.12)
o=A.m(8)
o=A.p(n,A.W(w.c,A.aZ(r),n,n,n,18),B.f,n,n,new A.o(p,n,n,o,n,n,B.n),n,n,n,n,B.hp,n,n,n)
r=A.B(A.a([o,B.aw,A.D(A.d(w.b,n,n,n,n,n,n,A.l(n,n,l?B.aN:B.M,n,n,n,n,n,n,n,n,n,n,n,B.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),B.m,n,B.e,B.j,0,n,n)
p=w.e.length
return new A.C(B.db,A.aD(!1,B.a1,!0,u,A.dL(!1,n,n,n,!0,n,n,n,!0,n,new H.arP(q,e,!0,n),n,n,n,n,new C.dS3(m,e),!1,n,n,new A.b6(t,new A.ay(s,1,B.r,-1)),n,n,A.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,A.l(n,n,l?B.bH:B.aj,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,A.AU(n,n,n,new C.dS4(),B.J,new C.dS5(m,e),B.ck,n,x.N),n),B.f,v,0,n,n,n,n,n,B.ac),new A.cw(w.a,x.W))},
$S:109}
C.dS5.prototype={
$1(d){var w=this
if(d==="edit")w.a.a7M(w.b)
if(d==="questions")w.a.WI(w.b)
if(d==="delete")w.a.bEF(w.b)},
$S:2}
C.dS4.prototype={
$1(d){return D.cvo},
$S:127}
C.dS3.prototype={
$0(){return this.a.WI(this.b)},
$S:0}
C.cFY.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q===$&&A.c()
w=d.a===q.a
if(w){q=r.f
q===$&&A.c()
q=A.aZ(q).j(0.2)}else q=B.cU.j(0.1)
v=A.m(10)
if(w){u=r.f
u===$&&A.c()
u=A.aZ(u)}else u=B.K
u=A.H(u,B.r,1)
t=r.f
t===$&&A.c()
return A.aI(!1,s,!0,A.p(s,A.W(d,A.aZ(t),s,s,s,s),B.f,s,s,new A.o(q,s,u,v,s,s,B.n),s,s,s,s,B.ck,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cFX(r,d),s,s,s,s,s,s,s)},
$S:1648}
C.cFX.prototype={
$0(){var w=this.a
return w.n(new C.cFV(w,this.b))},
$S:0}
C.cFV.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cFZ.prototype={
$1(d){var w=null,v=this.a,u=A.aZ(d),t=v.f
t===$&&A.c()
return A.aG(w,A.hj(u,w,t===d?D.bBE:w,w,14),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cFW(v,d),w,w,w,w,w,w,!1,B.ad)},
$S:427}
C.cFW.prototype={
$0(){var w=this.a
return w.n(new C.cFU(w,this.b))},
$S:0}
C.cFU.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cG_.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.cG0.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=B.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&A.c()
v=v.f
v===$&&A.c()
t=u.cAn(v,w,t)
A.a9(this.b,!1).M(t)
return null},
$S:0}
C.eC9.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return w.push(this.b)},
$S:0}
C.eCa.prototype={
$1(d){return new C.Z0(this.a,null)},
$S:z+41}
C.eCg.prototype={
$2(d,e){return B.P},
$S:36}
C.eCf.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.rt:B.c
u=A.m(14)
t=A.m(14)
s=l?B.aI:B.aJ
r=w.d
if(r!=null&&r.length!==0){q=A.m(8)
r=A.bt(q,K.aMB(n,B.bQ,36,B.pd,l?B.bH:B.aj,r,48),B.ap)}else r=A.W(D.Xu,A.aZ(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=A.d(q,n,2,B.a2,n,n,n,A.l(n,n,l?B.aN:B.M,n,n,n,n,n,n,n,n,n,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.aa(w.c)
o=w.e?" \xb7 Printable":""
return A.aD(!1,B.a1,!0,u,A.dL(!1,n,n,n,!0,n,n,n,!0,n,r,n,n,n,n,new C.eCd(m,w,e),!1,n,n,new A.b6(t,new A.ay(s,1,B.r,-1)),n,n,A.d(""+p+" block(s)"+o,n,n,n,n,n,n,A.l(n,n,l?B.bH:B.aj,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,A.aF(n,n,n,n,D.bA4,n,n,n,new C.eCe(m,e),n,n,n,n,n,n),n),B.f,v,0,n,n,n,n,n,B.ac)},
$S:76}
C.eCe.prototype={
$0(){var w=this.a
w.n(new C.eCb(w,this.b))
w.atS()},
$S:0}
C.eCb.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cu(w,this.b)},
$S:0}
C.eCd.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.aWz(u.b),$async$$0)
case 2:s=e
if(s!=null){t.n(new C.eCc(t,u.c,s))
t.atS()}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eCc.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eC5.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eC3.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
return new C.Tz(w,"Answer Document",null)},
$S:z+42}
C.eC4.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eC7.prototype={
$0(){var w,v,u=this.a,t=u.a.c,s=u.d
s===$&&A.c()
s=B.a.i(s.a.a)
w=u.e
w===$&&A.c()
v=u.f
u=u.r
if(v==null)v=t.d
A.a9(this.b,!1).M(new C.ib(t.a,s,w,v,u,t.f))
return null},
$S:0}
C.eC8.prototype={
$1(d){var w=this.a
return w.n(new C.eC6(w,d))},
$S:9}
C.eC6.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.c4X.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fkk.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dSI.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.dSo.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.K(w,new C.lm("image","",this.b,null))},
$S:0}
C.dSt.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.K(w,new C.lm("video","","data:video/mp4;base64,"+B.cR.gcs().aG(this.b),null))},
$S:0}
C.dSr.prototype={
$1(d){var w=null,v=x.p,u=A.v(A.a([A.aK(w,B.U,!1,w,!0,B.q,w,A.aL(),this.a,w,w,w,w,w,2,D.bFT,B.z,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.am,w,w,w,w),A.aK(w,B.U,!1,w,!0,B.q,w,A.aL(),this.b,w,w,w,w,w,2,D.bFS,B.z,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.am,w,w,w,w)],v),B.m,w,B.e,B.Q,0,B.p)
return A.er(A.a([A.bJ(!1,B.dg,w,w,!0,w,w,new C.dSp(d),w,w),A.bL(D.f2Z,new C.dSq(d),w)],v),w,w,w,u,w,w,w,w,D.eRU,w)},
$S:21}
C.dSp.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.dSq.prototype={
$0(){A.a9(this.a,!1).M(!0)
return null},
$S:0}
C.dSs.prototype={
$0(){var w,v=this.a.e
v===$&&A.c()
w=B.a.i(this.b.a.a)
return B.d.K(v,new C.lm("link","",B.a.i(this.c.a.a),w))},
$S:0}
C.dSk.prototype={
$1(d){return B.a.i(d)},
$S:14}
C.dSl.prototype={
$1(d){return d.length!==0},
$S:3}
C.dSm.prototype={
$1(d){return B.a.i(B.a.e1(d,A.ae("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:14}
C.dSn.prototype={
$1(d){return d.length!==0},
$S:3}
C.dSy.prototype={
$0(){var w=this.a.by4()
A.a9(this.b,!1).M(w)
return null},
$S:0}
C.dSz.prototype={
$0(){return this.a.atT("**","**")},
$S:0}
C.dSA.prototype={
$0(){return this.a.atT("*","*")},
$S:0}
C.dSB.prototype={
$0(){return this.a.atT("__","__")},
$S:0}
C.dSC.prototype={
$0(){return this.a.aUL("## Section title")},
$S:0}
C.dSD.prototype={
$0(){return this.a.aUL("\u2022 First point\n\u2022 Second point")},
$S:0}
C.dSE.prototype={
$0(){},
$S:0}
C.dSF.prototype={
$0(){var w=this.a
w.n(new C.dSx(w))},
$S:0}
C.dSx.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.K(w,D.djN)},
$S:0}
C.dSG.prototype={
$0(){var w=this.a
w.n(new C.dSw(w))},
$S:0}
C.dSw.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.K(w,D.djO)},
$S:0}
C.dSH.prototype={
$1(d){var w,v,u=null,t=d.b,s=t.a
A:{if("image"===s){w="Image"
break A}if("video"===s){w="Video"
break A}if("link"===s){w=t.d
if(w==null)w="Link"
break A}if("signature"===s){w="Signature"
break A}w=s
break A}v=this.b.a
w=A.d(w,u,u,u,u,u,u,A.l(u,u,v?B.il:B.aE,u,u,u,u,u,u,u,u,11,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
v=v?B.cz:B.iH
return A.Cj(u,v,B.aiO,w,u,new C.dSv(this.a,d),u)},
$S:z+45}
C.dSv.prototype={
$0(){var w=this.a
return w.n(new C.dSu(w,this.b))},
$S:0}
C.dSu.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.cu(w,this.b.a)},
$S:0}
C.dSh.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.aNP},
$S:0}
C.dSi.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.fjl},
$S:0}
C.dS9.prototype={
$0(){var w=this.a
w.d=D.aNO
w.f=w.e=null},
$S:0}
C.dSa.prototype={
$0(){var w=this.a
w.d=D.aNP
w.f=null},
$S:0}
C.dSj.prototype={
$2(d,e){return B.o.aJ(d.f,e.f)},
$S:z+2}
C.dSc.prototype={
$2(d,e){var w=this.a,v=w.gb18()[e]
return new C.a9H(v,this.b,new C.dSb(w,v),null)},
$S:z+46}
C.dSb.prototype={
$0(){return this.a.c_Z(this.b.a)},
$S:0}
C.dSe.prototype={
$2(d,e){return B.o.aJ(d.f,e.f)},
$S:z+47}
C.dSg.prototype={
$2(d,e){return B.T},
$S:36}
C.dSf.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.rt:B.c,p=A.m(16),o=A.m(16),n=A.m(16),m=A.H(r?B.aI:B.aJ,B.r,1),l=A.a([new A.ab(0,B.G,B.w.j(r?0.28:0.06),B.dz,8)],x.V),k=A.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=A.m(10)
v=A.m(10)
k.push(A.bt(w,K.aMB(v,B.bQ,52,D.Xu,r?B.bH:B.aj,j,52),B.ap))}else{j=u.d.d
w=A.aZ(j).j(0.15)
v=A.m(12)
k.push(A.p(t,A.W(D.Xu,A.aZ(j),t,t,t,24),B.f,t,t,new A.o(w,t,t,v,t,t,B.n),t,52,t,t,t,t,t,52))}k.push(B.be)
k.push(A.D(A.d(s.b,t,t,t,t,t,t,A.l(t,t,r?B.aN:B.M,t,t,t,t,t,t,t,t,13,t,t,B.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(A.W(B.es,r?B.bH:B.aj,t,t,t,22))
return A.aD(!1,B.a1,!0,p,A.aI(!1,o,!0,A.p(t,A.B(k,B.m,t,B.e,B.j,0,t,t),B.f,t,t,new A.o(t,t,m,n,l,t,B.n),t,t,t,t,B.bm,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dSd(u.a,s),t,t,t,t,t,t,t),B.f,q,0,t,t,t,t,t,B.ac)},
$S:76}
C.dSd.prototype={
$0(){return this.a.c6G(this.b)},
$S:0}
C.c4Z.prototype={
$1(d){return new C.a9z(d,this.a,null)},
$S:z+48}
C.czE.prototype={
$0(){var w=this.a.c,v=w.c,u=A.o3(v==null?w.b:v)
if(u!=null)A.iK(u,B.fe,null)},
$S:0}
C.czF.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.czG.prototype={
$1(d){var w=null,v=this.a.d.a,u=A.d("\u2022  ",w,w,w,w,w,w,A.l(w,w,v?B.cm:B.aI,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=B.a.i(d)
return new A.C(B.ob,A.B(A.a([u,A.D(A.d(t,w,w,w,w,w,w,A.l(w,w,v?B.cm:B.aI,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.F,w,B.e,B.j,0,w,w),w)},
$S:138}
C.d9v.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d9x.prototype={
$0(){return this.a.n(new C.d9w(this.b))},
$S:0}
C.d9w.prototype={
$0(){var w=this.a
return w.a.f?w.fT(0):w.p7(0)},
$S:0}
C.f3c.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.dSW.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.Bq)w.z=v
else w.Q=v},
$S:0}
C.dSN.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=B.d.gcV(v).Q
v.toString
w.lE(v,B.cp,B.eL)},
$S:8}
C.dSP.prototype={
$1(d){return J.q(d,"role")==="ai"},
$S:90}
C.dSQ.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.E(["role","user","text",this.b],v,v))
w.d.bJ(0,B.c2)
w.r=!0},
$S:0}
C.dSR.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.E(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.dSS.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+A.t(w.h(d,"text"))},
$S:153}
C.dST.prototype={
$0(){var w=x.N
return this.a.f.push(A.E(["role","ai","text",this.b],w,w))},
$S:0}
C.dSU.prototype={
$0(){var w=x.N
return this.a.f.push(A.E(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.dSV.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dSO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=A.mq(l,B.bx.j(0.9),l,l,l,l,l,2,l,l)
return new A.C(B.c4,A.B(A.a([new A.a4(22,22,k,l),B.aw,A.d("Writing full song\u2026",l,l,l,l,l,l,A.l(l,l,this.b?B.az:B.dx,l,l,l,l,l,l,l,l,12,B.cA,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),B.m,l,B.e,B.j,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?B.a7:B.a3
k=k.c
k.toString
k=A.aH(k,B.bR,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new A.a5(B.a3,B.a7,B.x,A.a([B.aB,B.bx.j(0.85)],x.O),l,l)
else{q=x.O
q=new A.a5(B.a3,B.a7,B.x,v?A.a([B.bj,B.M],q):A.a([B.c,B.aN],q),l,l)}p=A.a([new A.ab(0,B.G,(u?B.bx:B.aB).j(0.22),B.ja,14)],x.V)
o=A.H(B.c.j(u?0.2:0.08),B.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=B.c
else v=v?B.aJ:B.bh
n=u?13.5:15
m=u?B.bi:B.cA
return new A.bI(t,l,l,A.p(l,A.d(w,l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?B.a4:B.cq,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,new A.aW(0,k.a.a*0.94,0,1/0),new A.o(l,l,o,new A.bv(B.jR,B.jR,new A.aY(s,s),new A.aY(r,r)),p,q,B.n),l,l,l,B.kx,B.iN,l,l,l),l)},
$S:39}
C.dT2.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&A.c()
w=m.x
w===$&&A.c()
v=A.m(22)
u=this.b
t=x.O
s=u?A.a([D.a9m,B.M,B.nh],t):A.a([B.qd,B.q7,B.oT],t)
w=A.a([new A.ab(-4,B.G,B.aB.j(0.35+w*0.25),B.dq,28)],x.V)
r=A.H(B.c.j(u?0.08:0.5),B.r,1)
q=A.di()
p=q.a
p.$flags&2&&A.ah(p)
p[11]=0.001
m=m.x
m===$&&A.c()
q.fm(m*0.08)
q=A.fo(B.A,A.p(o,D.bwQ,B.f,o,o,new A.o(o,o,A.H(B.aK.j(0.6),B.r,2),o,o,D.dXi,B.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=A.nr(B.jd,D.f7a,new C.dT_())
p=x.p
m=A.a([A.B(A.a([q,B.be,A.D(A.v(A.a([m,A.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,A.l(o,o,u?B.aQ:B.aU,o,o,o,o,o,o,o,o,10,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),B.F,o,B.e,B.j,0,B.p),1)],p),B.m,o,B.e,B.j,0,o,o),B.ab,A.B(A.a([n.asj(D.Bq,"Swahili","\ud83c\uddf9\ud83c\uddff",u),B.aa,n.asj(D.aAS,"English","\ud83c\uddec\ud83c\udde7",u),B.aa,n.asj(D.Br,"Mix","\ud83d\udd25",u)],p),B.m,o,B.e,B.j,0,o,o)],p)
if(n.x!==D.Br){t=A.a([B.P,n.cp1(u)],p)
if(n.w){q=n.x===D.Bq?D.a0a:D.a_r
p=A.U(q).k("J<1,r>")
q=A.A(new A.J(q,new C.dT0(n,u),p),p.k("ai.E"))
t.push(new A.C(B.kz,A.c9(B.bI,q,B.by,6,6),o))}B.d.v(m,t)}else{t=A.a([B.bx.j(0.22),B.aB.j(0.12)],t)
q=A.m(12)
p=A.H(B.bx.j(0.45),B.r,1)
m.push(new A.C(B.kz,A.p(o,A.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,A.l(o,o,u?B.ig:B.kt,o,o,o,o,o,o,o,o,10,o,o,B.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),B.f,o,o,new A.o(o,o,p,q,o,new A.a5(B.a3,B.a7,B.x,t,o,o),B.n),o,o,o,o,B.bU,o,o,o),o))}m.push(B.P)
t=x.dc
n=A.A(new A.J(D.cRr,new C.dT1(n,u),t),t.k("ai.E"))
m.push(A.B(n,B.m,o,B.e,B.j,0,o,o))
return A.p(o,A.v(m,B.ah,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,r,v,w,new A.a5(B.ax,B.aC,B.x,s,o,o),B.n),o,o,o,I.ad0,I.ade,o,o,o)},
$S:95}
C.dT_.prototype={
$1(d){return D.bJq.av(0,d)},
$S:65}
C.dT0.prototype={
$1(d){return this.a.cp2(d,this.b)},
$S:z+49}
C.dT1.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aAU?6:0,m=o?5:0,l=A.m(12)
if(o){w=this.b
v=w?B.aB.j(0.45):B.aB.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=B.w.j(w?0.25:0.05)
u=v
v=w
w=u}t=A.m(12)
p=p.r?q:new C.dSZ(p,d)
s=C.hn_(d)
if(o)r=B.c
else r=v?B.af:B.bh
r=A.d(s,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.hn0(d)
if(o)v=B.af
else v=v?B.c1:B.dx
return A.D(new A.C(new A.N(0,0,n,0),A.aD(!1,B.a1,!0,l,A.aI(!1,t,!0,new A.C(F.Vv,A.v(A.a([r,A.d(s,q,q,q,q,q,q,A.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.e,B.j,0,B.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,w,m,q,q,q,q,q,B.ac),q),1)},
$S:z+50}
C.dSZ.prototype={
$0(){var w=this.a
return w.n(new C.dSY(w,this.b))},
$S:0}
C.dSY.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dT4.prototype={
$0(){var w=this.a
return w.n(new C.dT3(w))},
$S:0}
C.dT3.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dSM.prototype={
$0(){var w=this.a
return w.n(new C.dSL(w,this.b))},
$S:0}
C.dSL.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.Br
if(v===D.aAS&&w.Q==null)w.Q=B.d.gL(D.a_r).a},
$S:0}
C.dT5.prototype={
$0(){return this.a.ckO(this.b.a)},
$S:0}
C.dSX.prototype={
$0(){return this.a.Hw(this.b)},
$S:0}
C.dSJ.prototype={
$1(d){return this.a.aUM()},
$S:2}
C.dSK.prototype={
$0(){return this.a.aUM()},
$S:0}
C.fwc.prototype={
$1(d){var w=this
return new C.XL(w.a,w.b,w.c,new C.fwb(w.d),null)},
$S:z+51}
C.fwb.prototype={
$0(){return J.lF(this.a.b9())},
$S:0}
C.d74.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.bbA()},
$S:28}
C.d75.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a.f
m===$&&A.c()
m=m.x
m===$&&A.c()
w=this.b
v=m*3.141592653589793*2+w*0.55
m=this.c
u=x.w
t=A.aH(m,B.bR,u).w
s=Math.cos(v)
u=A.aH(m,B.bR,u).w
m=Math.sin(v*1.3)
r=Math.sin(v)
q=(w&1)===0
p=q?B.dR:B.hq
o=B.o.F(w,4)
q=q?B.aX:B.aL
return A.an(n,A.d8(A.W(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:289}
C.d7a.prototype={
$0(){},
$S:0}
C.d79.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&A.c()
w=t.x
w===$&&A.c()
v=B.lM.au(0,B.k.E(w,0,1))
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793)
w=A.di()
u=w.a
u.$flags&2&&A.ah(u)
u[11]=0.0028
w.fm(t*0.08)
w.jz(0.12)
return A.e7(B.A,A.fo(B.A,e,null,w,!0),0.5+v*0.5,null,null)},
$S:43}
C.d76.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=0.55+r*0.45
r=A.p(t,t,B.f,t,t,new A.o(t,t,t,t,A.a([new A.ab(6,B.G,B.aX.j(w*0.5),B.J,36)],x.V),t,B.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new A.am(B.A,t,B.a9,B.q,A.a([r,new A.a4(96,96,A.mq(B.c.j(0.08),B.aX,t,t,t,t,t,6,u/v,t),t),A.d(""+s.a.c,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,38,t,t,B.u,t,t,!0,t,t,t,t,t,A.a([new A.cL(B.aX.j(w),B.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:110}
C.d77.prototype={
$1(d){return D.bJu.av(0,d)},
$S:65}
C.d78.prototype={
$0(){var w=this.a
w.a.bbA()
w.a.e.$0()},
$S:0}
C.c6X.prototype={
$1(d){var w=!1
if(B.a.i(d.b.toLowerCase())===this.a)if(d.d===B.fn)if(d.x===B.dr){w=d.w
w=B.a.i(w==null?"":w)===this.b}return w},
$S:16}
C.c79.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e1w.prototype={
$0(){return this.a.a.c.d},
$S:78}
C.e2c.prototype={
$1(d){var w=this.a
if(w.c!=null)w.O2()},
$S:8}
C.e2d.prototype={
$1(d){var w=$.aT.p2$
if(w===B.re||w===B.rf)return
this.a.Dt()},
$S:13}
C.e2e.prototype={
$1(d){this.a.cr4()},
$S:13}
C.e1V.prototype={
$0(){this.a.I_(this.b.d,!1)},
$S:0}
C.e1W.prototype={
$0(){},
$S:0}
C.e1X.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.e1Y.prototype={
$0(){},
$S:0}
C.e1Z.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e2_.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.e20.prototype={
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
C.e1Q.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=A.bj(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=A.bj(v[1],!0,x.N)
w.Ns()
w.a5Z()},
$S:0}
C.e1x.prototype={
$0(){this.b.I_(this.c.d+this.a.a,!1)},
$S:0}
C.e1R.prototype={
$1(d){var w=d.d
return(w===B.fn||w===B.eI)&&d.x===B.dr},
$S:16}
C.e1S.prototype={
$1(d){return d.a},
$S:164}
C.e1T.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e1U.prototype={
$0(){},
$S:0}
C.e1B.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bj(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=A.bj(v[0],!0,x.N)},
$S:0}
C.e1C.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.e1K.prototype={
$0(){},
$S:0}
C.e1H.prototype={
$0(){return this.a.a.c.d},
$S:78}
C.e1I.prototype={
$0(){var w=this.a,v=A.A(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e1J.prototype={
$0(){var w=this.a,v=A.A(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e1L.prototype={
$0(){return this.a.z=!0},
$S:0}
C.e1M.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new A.uP(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.e1N.prototype={
$0(){return this.a.z=!1},
$S:0}
C.e1P.prototype={
$0(){var w=this.a
return w.n(new C.e1O(w))},
$S:0}
C.e1O.prototype={
$0(){return this.a.y=1},
$S:0}
C.e1D.prototype={
$0(){return this.a.y=1},
$S:0}
C.e1E.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.e24.prototype={
$1(d){return d.a.length===0},
$S:16}
C.e25.prototype={
$2(d,e){return e.y.aJ(0,d.y)},
$S:72}
C.e29.prototype={
$0(){var w=this.a
return w.n(new C.e22(w))},
$S:0}
C.e22.prototype={
$0(){return this.a.y=1},
$S:0}
C.e2a.prototype={
$0(){var w=this.a
return w.n(new C.e21(w))},
$S:0}
C.e21.prototype={
$0(){return this.a.y=2},
$S:0}
C.e2b.prototype={
$0(){return A.iG(this.a,null)},
$S:0}
C.e26.prototype={
$2$cloudRequest(d,e){return this.a.aVT(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1650}
C.e27.prototype={
$0(){return this.a.Dt()},
$S:1}
C.e28.prototype={
$0(){var w=this.a
return w.n(new C.e23(w))},
$S:0}
C.e23.prototype={
$0(){var w=this.a
return w.y=B.o.E(w.y-1,0,2)},
$S:0}
C.e1A.prototype={
$0(){A.eJ()
var w=this.a
w.n(new C.e1z(w))},
$S:0}
C.e1z.prototype={
$0(){return this.a.y=0},
$S:0}
C.e1y.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=A.bB1(A.p(t,t,B.f,t,t,new A.o(t,t,A.H(B.c.j(0.55),B.r,1.2),t,A.a([new A.ab(1,B.G,B.au.j(0.55),B.J,18)],x.V),D.bHB,B.a6),t,t,t,t,t,t,t,t),B.ep,B.rR,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=A.a([],w)
for(u=0;u<3;++u)v.push(r.bXv(u))
return new A.am(B.W,t,B.a9,B.q,A.a([q,A.B(v,B.m,t,B.e,B.j,0,t,t)],w),t)},
$S:61}
C.e1G.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
A.eJ()
w.n(new C.e1F(w,v))},
$S:0}
C.e1F.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dbi.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===B.fn||v===B.eI)return!0
if(d.c!==0)v=B.a.t(w,"clock-in daily earnings")||B.a.t(w,"clock-in earnings")
else v=!1
return v},
$S:16}
C.dbj.prototype={
$1(d){return new A.Q(Date.now(),0,!1)},
$S:694}
C.dbk.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new A.Q(Date.now(),0,!1)
u=A.dx(C.fCY(v.c,u))
w=this.c?new C.dbh(v):null
return v.b2S(this.b,B.pm,D.eF,w,"Today","$"+u,D.eF)},
$S:1652}
C.dbh.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.dbl.prototype={
$2(d,e){var w=this.a
return w.b2S(this.b,B.jJ,B.c7,w.w,"Balance","$"+A.dx(A.JD(w.c.a,new C.dbg(w))),B.cC)},
$S:58}
C.dbg.prototype={
$0(){return this.a.c.d},
$S:78}
C.dbb.prototype={
$0(){this.a.a.cHP()
return null},
$S:0}
C.dbc.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b2(w,w,w,new C.brF(v,w),B.at)},
$S:70}
C.dbd.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b7W(v,!0,B.au,D.o_,w)}else{v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b7V(v,D.o_,w)}return A.b2(w,w,w,v,B.at)},
$S:70}
C.dbe.prototype={
$1(d){return new A.Q(Date.now(),0,!1)},
$S:694}
C.dbf.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new A.Q(Date.now(),0,!1)
w=r.a
v=w.a.cGE(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:B.k.E(v/u,0,1)}u=w.d
u===$&&A.c()
s=w.e
s===$&&A.c()
return A.c4(new A.h5(A.a([u,s],x.U)),new C.dba(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1653}
C.dba.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=A.a([],m),k=o.b
if(k)B.d.v(l,A.il(7,new C.db9(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&A.c()
v=v.x
v===$&&A.c()
u=o.d
l.push(A.b2(n,n,n,new C.b7U(o.c,v,k,u,D.o_,D.bbk,n),D.etY))
v=A.H(B.c.j(0.1),B.r,1.2)
if(k)t=B.uK
else t=o.e?B.uC:D.bs0
t=A.W(t,k?D.o_:B.bd,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=A.d(s,n,n,n,n,n,n,A.l(n,n,B.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,B.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+A.dx(w.f&&w.d>0?w.d:o.f)}q=k?D.o_:B.c
w=A.d(w,n,n,n,n,n,n,A.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,B.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=A.m(999)
p=u.j(0.16)
u=A.H(u.j(0.5),B.r,1)
l.push(A.p(n,A.v(A.a([t,B.ar,s,B.av,w,B.P,A.p(n,A.d(o.r,n,n,n,n,n,n,A.l(n,n,k?D.o_:B.o5,n,n,n,n,n,n,n,n,9,n,n,B.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),B.f,n,n,new A.o(p,n,u,q,n,n,B.n),n,n,n,n,B.kA,n,n,n)],m),B.m,n,B.b7,B.j,0,B.p),B.f,n,n,new A.o(B.K,n,v,n,n,n,B.a6),n,176,n,n,n,n,n,176))
return A.au(new A.a4(276,276,new A.am(B.A,n,B.a9,B.f,l,n),n),n,n,n)},
$S:231}
C.db9.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=B.k.F(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=B.o.F(d,3)
t=B.o.F(d,2)
return A.an(s,A.e1(A.d8(A.p(s,s,B.f,s,s,new A.o(s,s,s,A.m(40),s,new A.bR(B.A,0.5,B.x,s,0,A.a([D.o_.j(0.38),B.c.j(0.08),B.K],x.O),s,s),B.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),!0,s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:222}
C.dbC.prototype={
$0(){},
$S:0}
C.dbD.prototype={
$0(){},
$S:0}
C.dbE.prototype={
$1(d){return d.x===B.dr},
$S:16}
C.dbo.prototype={
$0(){return this.a.a.d.d},
$S:78}
C.dbn.prototype={
$0(){var w,v
A.eJ()
w=this.a
v=this.b
w.n(new C.dbm(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)A.fb(null,x.H)}},
$S:0}
C.dbm.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dbz.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=A.m(12),q=s?w.b.j(0.18):B.c.j(0.04),p=A.H(s?w.b.j(0.7):B.c.j(0.08),B.r,1)
return A.D(new A.C(B.jl,A.aG(v,A.dg(B.A,A.d("$"+t,v,v,v,v,v,v,A.l(v,v,s?w.b:B.af,v,v,v,v,v,v,v,v,13,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,B.b9,new A.o(q,v,p,r,v,v,B.n),B.hT,v,38,v,v,v,v,v),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dbB(u,d),v,v,v,v,v,v,!1,B.ad),v),1)},
$S:1655}
C.dbB.prototype={
$0(){A.eJ()
var w=this.a
w.n(new C.dbA(w,this.b))},
$S:0}
C.dbA.prototype={
$0(){var w=""+this.b
this.a.d.saT(0,w)
return w},
$S:0}
C.dby.prototype={
$4$bold$color(d,e,f,g){var w=null,v=A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?B.c:g,t=f?15:13
return new A.C(B.Kd,A.B(A.a([v,B.b8,A.d(e,w,w,w,w,w,w,A.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?B.u:B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1656}
C.dbx.prototype={
$1(d){return this.a.n(new C.dbw())},
$S:2}
C.dbw.prototype={
$0(){},
$S:0}
C.dbr.prototype={
$1(d){return this.a.aRO(d)&&!A.fKi(d)},
$S:16}
C.dbs.prototype={
$2(d,e){return e.y.aJ(0,d.y)},
$S:72}
C.dbt.prototype={
$0(){return this.a.a.d.d},
$S:78}
C.dbu.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return A.b(x.r.b(s)?s:A.dQ(s,x.H),$async$$0)
case 2:if(t.c!=null)t.n(new C.dbq())
t.lA("Balance refreshed.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dbq.prototype={
$0(){},
$S:0}
C.dbv.prototype={
$0(){var w=this.a
return w.n(new C.dbp(w))},
$S:0}
C.dbp.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fgj.prototype={
$2(d,e){return e.y.aJ(0,d.y)},
$S:72}
C.faW.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail"),u=!1
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.y(v,this.b)){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fqH.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail")
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.faV.prototype={
$1(d){var w,v,u
if(!C.hIl(d,this.a))return!1
w=J.a8(d)
v=w.h(d,"sessionUpdatedAt")
v=A.bh(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=A.bh(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=A.bh(J.k(w==null?"":w))}if(u!=null&&B.o.al(new A.Q(Date.now(),0,!1).bv(u).a,36e8)>72)return!1
return!0},
$S:4}
C.f0M.prototype={
$1(d){var w=this.a
if(B.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:84}
C.fpw.prototype={
$0(){return $.fHX=null},
$S:11}
C.fpx.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.fnq.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.fnr.prototype={
$0(){var w,v=this.a
$.fHL.W(0,v)
w=C.tq(this.b,v)
if(w!=null)A.P9(A.a([A.a_(w,x.N,x.z)],x._),v)},
$S:0}
C.frE.prototype={
$1(d){return new C.Yy(this.a,this.b,null)},
$S:z+56}
C.dX0.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.dX3.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.dX4.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.n(new C.dX2(w))},
$S:2}
C.dX2.prototype={
$0(){return this.a.f=""},
$S:0}
C.dX5.prototype={
$1(d){return this.a.aV0()},
$S:2}
C.dX6.prototype={
$0(){var w=this.a
return w.n(new C.dX1(w,this.b))},
$S:0}
C.dX1.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fa6.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+B.a.aY(d,1)},
$S:14}
C.fa5.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+B.a.aY(d,1)},
$S:14}
C.fpN.prototype={
$1(d){var w,v=x.f
if(v.b(d))return A.a_(d,x.N,x.z)
try{v=A.a_(v.a(d.ac()),x.N,x.z)
return v}catch(w){return A.T(x.N,x.z)}},
$S:12}
C.fpO.prototype={
$1(d){return J.cu(d)},
$S:4}
C.fjI.prototype={
$1(d){return d.a!=="send_email"},
$S:291}
C.fpe.prototype={
$1(d){var w=null,v=B.w.j(0.35),u=A.m(10),t=A.H(B.ba,B.r,1)
return A.p(B.A,A.d(d,w,w,w,w,w,w,B.jb,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,86,w,B.eV,w,w,w,72)},
$S:695}
C.c8I.prototype={
$1(d){return J.k(d)},
$S:17}
C.c8J.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b5(d,new C.c8H(),x.S)
w=A.A(w,w.$ti.k("ai.E"))
return w}return A.bZ(7,0,!1,x.S)},
$S:696}
C.c8H.prototype={
$1(d){var w
if(A.iz(d))w=d
else{w=A.c5(J.k(d),null)
if(w==null)w=0}return w},
$S:361}
C.c8K.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b5(d,new C.c8G(),x.S)
w=A.A(w,w.$ti.k("ai.E"))
return w}return A.bZ(8,0,!1,x.S)},
$S:696}
C.c8G.prototype={
$1(d){var w
if(A.iz(d))w=d
else{w=A.c5(J.k(d),null)
if(w==null)w=0}return w},
$S:361}
C.c8M.prototype={
$1(d){return A.bj(d,!0,x.S)},
$S:697}
C.c8N.prototype={
$1(d){return A.bj(d,!0,x.S)},
$S:697}
C.c8F.prototype={
$1(d){var w=this.a
if(B.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:84}
C.c8L.prototype={
$2(d,e){return d+e},
$S:74}
C.c8E.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.q(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:74}
C.fbq.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fbk.prototype={
$0(){return this.a.$1(D.pw)},
$S:0}
C.fbl.prototype={
$0(){return this.a.$1(D.pw)},
$S:0}
C.fbm.prototype={
$0(){return this.a.$1(D.pw)},
$S:0}
C.fbn.prototype={
$0(){return this.a.$1(D.pw)},
$S:0}
C.fbo.prototype={
$0(){return this.a.$1(D.pw)},
$S:0}
C.fbp.prototype={
$0(){return this.a.$1(D.pw)},
$S:0}
C.eZ8.prototype={
$2(d,e){var w,v,u=this,t=null,s=B.o.al(e,8),r=B.o.F(e,8),q=B.o.F(s+r,2),p=u.a,o=J.q(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.Ug:D.b14
if(o===0)w=t
else{w=x.O
w=o===1?A.a([B.c,B.aJ],w):A.a([B.bj,B.w],w)
v=n?B.aK:B.dl
w=A.p(t,t,B.f,t,t,new A.o(t,t,A.H(v,B.r,n?3:1),t,A.a([new A.ab(0,B.G,B.w.j(0.35),B.dz,4)],x.V),new A.bR(B.A,0.5,B.x,t,0,w,t,t),B.a6),t,28,t,t,t,t,t,28)}return A.aG(t,A.p(t,A.au(w,t,t,t),B.f,q,t,t,t,t,t,t,t,t,t,t),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eZ7(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,B.ad)},
$S:71}
C.eZ7.prototype={
$0(){var w=this,v=w.a,u=v.cMg(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.pw:D.Gq
w.f.$1(v)}},
$S:0}
C.fag.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new A.a4(u,u,A.i8(!0,v,v,B.z,Q.aJ1,new C.faf(w.a,w.b,w.c,w.d,u),9,v,B.dM,B.ak,!1),v)},
$S:161}
C.faf.prototype={
$2(d,e){var w=this,v=null,u=A.m(12),t=A.m(12),s=w.a,r=s.at[e],q=r==="X"?B.aY:B.aD
return A.aD(!1,B.a1,!0,u,A.aI(!1,t,!0,A.au(A.d(r,v,v,v,v,v,v,A.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fae(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),B.f,B.fx,0,v,v,v,v,v,B.ac)},
$S:76}
C.fae.prototype={
$0(){var w=this,v=w.a.cMh(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.eYA.prototype={
$1(d){return new A.C(B.jl,C.fnh(d,!1),null)},
$S:320}
C.eYB.prototype={
$1(d){return C.fnh(d,!1)},
$S:1660}
C.eYC.prototype={
$0(){var w=this,v=w.a
v.cwS(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.eYD.prototype={
$0(){var w=this
w.a.cwT(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.f7t.prototype={
$1(d){var w=this,v=null,u=d*6
return A.mN(v,B.bj,A.d(""+u,v,v,v,v,v,v,B.ce,v,v,v),B.dj,new C.f7s(w.a,w.b,u,w.c,w.d),v,v,new A.ay(B.c.j(0.2),1,B.r,-1),v)},
$S:1661}
C.f7s.prototype={
$0(){var w=this,v=w.a,u=w.b.aC(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.f9n.prototype={
$1(d){return D.cUX[d]},
$S:82}
C.f9o.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=A.a([s.aC(6),s.aC(6),s.aC(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.f6d.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.f6e.prototype={
$0(){var w=this,v=w.a
if(w.b.af()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.eZB.prototype={
$0(){var w=this,v=w.a.cCl(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.eZA.prototype={
$1(d){var w,v=null,u=J.q(this.a.fr[5-d],this.b)
if(u===0)w=B.lV
else w=u===1?B.dC:B.qJ
return new A.fC(1,A.p(v,v,B.f,v,v,new A.o(w,v,A.H(B.bG,B.r,1),v,v,v,B.a6),v,v,v,B.mJ,v,v,v,v),v)},
$S:1662}
C.f6q.prototype={
$1(d){var w=this
if(w.a.b6e(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.f6r.prototype={
$0(){var w=this
if(w.a.b6e(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.eZ2.prototype={
$0(){var w=this
if(w.a.af()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.ffj.prototype={
$1(d){var w=J.q(d,"email")
return B.a.t(B.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.ffk.prototype={
$1(d){var w,v=J.a8(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=B.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+B.a.i(J.k(v==null?"":v))+">"},
$S:53}
C.erA.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aHD.prototype
w.boF=w.Z
w.boE=w.q
w=C.aHE.prototype
w.boH=w.Z
w.boG=w.q
w=C.aHF.prototype
w.boJ=w.Z
w.boI=w.q
w=C.aIB.prototype
w.bpH=w.Z
w.bpG=w.q
w=C.aIa.prototype
w.bpf=w.q
w=C.aIK.prototype
w.bpQ=w.q
w=C.aHG.prototype
w.boK=w.q
w=C.aIS.prototype
w.bpZ=w.q
w=C.aHL.prototype
w.boP=w.q
w=C.aI0.prototype
w.bp5=w.q
w=C.aJy.prototype
w.bqF=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.axy.prototype,"gbK1","bK2",19)
v(q,"gaOl","aOm",1)
v(C.axx.prototype,"gco5","a_X",1)
v(q=C.axz.prototype,"gbPl","bPm",1)
v(q,"gbzM","bzN",1)
v(q=C.auN.prototype,"gchq","chr",1)
v(q,"gc6f","Ou",0)
v(q,"gcrR","crS",1)
v(q,"gckl","mt",0)
w(q,"gcat","cau",25)
w(q,"gcqh","Qb",33)
v(q=C.azC.prototype,"gbIb","VA",0)
v(q,"gbY4","X1",0)
v(q,"gbY1","X0",0)
v(q,"gbY2","aaA",0)
v(q,"gbY3","Nv",0)
v(C.awY.prototype,"gbY5","bY6",1)
u(C,"hPw","hle",58)
t(C,"fKp",0,null,["$1","$0"],["h3W",function(){return C.h3W(null)}],3,0)
t(C,"bzv",0,null,["$1","$0"],["h3V",function(){return C.h3V(null)}],3,0)
v(C.Lu.prototype,"gDd","c3t",1)
v(C.aAn.prototype,"gchH","zL",0)
v(q=C.aAE.prototype,"gc6y","Ow",0)
v(q,"gcba","Zc",0)
v(q,"gc_T","c_U",1)
v(q=C.aAQ.prototype,"gc_Y","abr",0)
v(q,"gbtC","a5P",0)
v(q,"gchU","a_a",0)
s(q,"gc3Y","c3Z",35)
v(C.aCJ.prototype,"gbu1","a5R",1)
v(q=C.aCI.prototype,"gc_X","abq",0)
v(q,"gc5x","act",0)
v(q=C.aAS.prototype,"gbT1","a9q",0)
v(q,"gbT3","Wd",0)
v(q,"gbT2","a9r",0)
v(q=C.aAR.prototype,"gbwm","bwn",1)
v(q,"gbwo","bwp",1)
v(C.aAT.prototype,"gbC_","bC0",1)
v(C.axT.prototype,"gc0_","c00",1)
v(q=C.aBe.prototype,"gaUV","c0g",1)
r(q,"gaVR",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["ac6","aus","aVT","aVS"],52,0,0)
r(q,"gc3b",0,4,null,["$4"],["c3c"],53,0,0)
v(q,"gc5g","Yo",0)
v(q,"gc66","acA",0)
v(q,"gc62","acy",0)
v(q,"gbVR","aaa",0)
w(C.ayC.prototype,"gbUG","bUH",54)
w(q=C.ayE.prototype,"gcpa","cpb",55)
v(q,"gcnX","cnY",1)
v(q,"gcvi","cvj",1)
v(C.aB1.prototype,"gc0B","aV0",1)
v(C.aBN.prototype,"gaVs","aug",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.jl,[C.cmv,C.cms,C.cmt,C.cmu,C.cmr,C.eN8,C.eN6,C.eNa,C.eN7,C.f4M,C.d3y,C.d3J,C.d3R,C.d3S,C.d3U,C.d3M,C.d3K,C.d3L,C.d3N,C.d3O,C.d3E,C.d3F,C.d3D,C.d3H,C.d3I,C.d3B,C.d3A,C.d3W,C.d3Z,C.dH1,C.dH0,C.dH2,C.dH_,C.dGZ,C.d3s,C.d3v,C.d3w,C.d3u,C.d3t,C.d5k,C.d5l,C.d5m,C.d4A,C.d4B,C.d54,C.d4Q,C.d4R,C.d4S,C.d4T,C.d4U,C.d42,C.d4z,C.d55,C.d5e,C.d52,C.d51,C.d4x,C.d4y,C.d5a,C.d5b,C.d44,C.d45,C.d4J,C.d4K,C.d4L,C.d4I,C.d4V,C.d4W,C.d4X,C.d4Y,C.d4Z,C.d5_,C.d58,C.d4M,C.d4N,C.d4O,C.d4P,C.d5c,C.d5d,C.d46,C.d47,C.d48,C.d49,C.d56,C.d57,C.d4H,C.d50,C.d4F,C.d5f,C.d5g,C.d5h,C.d4C,C.d4l,C.d4k,C.d4j,C.d4p,C.d4i,C.d4g,C.d4b,C.d4e,C.d4a,C.d4u,C.d4v,C.d4c,C.d8B,C.cwS,C.cwI,C.cwJ,C.cx1,C.cwZ,C.cx_,C.cx0,C.cwU,C.cwT,C.cwK,C.cwV,C.cxk,C.cxg,C.cxf,C.cwQ,C.cwR,C.cwN,C.cwY,C.cx5,C.cx6,C.cx7,C.cx8,C.cx9,C.cxa,C.cxb,C.cxw,C.cxp,C.cxm,C.cxr,C.cxo,C.cxl,C.cwL,C.cxi,C.dp5,C.dp6,C.doX,C.doV,C.dp4,C.doU,C.doT,C.doW,C.dp0,C.dp1,C.doZ,C.dp_,C.dp7,C.dp8,C.dp9,C.dpa,C.eH4,C.eH5,C.cZL,C.fgd,C.dvw,C.dvo,C.dvq,C.dvu,C.dvp,C.dvr,C.dvs,C.c1P,C.fnf,C.fne,C.doI,C.doH,C.doJ,C.doG,C.dO0,C.dO1,C.dO8,C.fvq,C.fvr,C.bVW,C.dH7,C.dH8,C.dH9,C.dHa,C.dHb,C.dHc,C.dH6,C.dHd,C.dH5,C.dHg,C.dHf,C.dHe,C.dOs,C.dOt,C.dOq,C.dOp,C.dOr,C.dOn,C.dS1,C.dS2,C.dRL,C.dRN,C.dRZ,C.dS_,C.dRU,C.dRS,C.dRY,C.dRV,C.dRP,C.dRO,C.dS3,C.cFX,C.cFV,C.cFW,C.cFU,C.cG_,C.cG0,C.eC9,C.eCe,C.eCb,C.eCd,C.eCc,C.eC5,C.eC4,C.eC7,C.eC6,C.dSo,C.dSt,C.dSp,C.dSq,C.dSs,C.dSy,C.dSz,C.dSA,C.dSB,C.dSC,C.dSD,C.dSE,C.dSF,C.dSx,C.dSG,C.dSw,C.dSv,C.dSu,C.dSh,C.dSi,C.dS9,C.dSa,C.dSb,C.dSd,C.czE,C.d9v,C.d9x,C.d9w,C.dSW,C.dSQ,C.dSR,C.dST,C.dSU,C.dSV,C.dSZ,C.dSY,C.dT4,C.dT3,C.dSM,C.dSL,C.dT5,C.dSX,C.dSK,C.fwb,C.d7a,C.d78,C.e1w,C.e1V,C.e1W,C.e1X,C.e1Y,C.e2_,C.e20,C.e1Q,C.e1x,C.e1U,C.e1B,C.e1C,C.e1K,C.e1H,C.e1I,C.e1J,C.e1L,C.e1M,C.e1N,C.e1P,C.e1O,C.e1D,C.e1E,C.e29,C.e22,C.e2a,C.e21,C.e2b,C.e27,C.e28,C.e23,C.e1A,C.e1z,C.e1G,C.e1F,C.dbh,C.dbg,C.dbb,C.dbC,C.dbD,C.dbo,C.dbn,C.dbm,C.dbB,C.dbA,C.dbw,C.dbt,C.dbu,C.dbq,C.dbv,C.dbp,C.fpw,C.fnr,C.dX0,C.dX3,C.dX2,C.dX6,C.dX1,C.fbk,C.fbl,C.fbm,C.fbn,C.fbo,C.fbp,C.eZ7,C.fae,C.eYC,C.eYD,C.f7s,C.f9o,C.f6e,C.eZB,C.f6r,C.eZ2,C.erA])
u(A.i4,[C.cmw,C.eN9,C.fk1,C.fjU,C.f4J,C.f4I,C.f4L,C.d40,C.d41,C.d3Q,C.d3P,C.d3T,C.d3C,C.d3G,C.d3V,C.dH4,C.d3x,C.d5n,C.d5o,C.d5p,C.d5q,C.d5r,C.d53,C.d59,C.d43,C.d5j,C.d5i,C.d4m,C.d4n,C.d4o,C.d4q,C.d4s,C.d8C,C.cxx,C.cwX,C.cwW,C.cxe,C.cxh,C.cxd,C.cwO,C.cx4,C.cx2,C.cxj,C.cx3,C.cxs,C.cxq,C.cxv,C.bUE,C.bUD,C.bUG,C.bUF,C.dp3,C.dp2,C.doY,C.dpb,C.dpc,C.f80,C.f9d,C.cZM,C.cZK,C.bVp,C.fgc,C.dvx,C.dvv,C.c1Q,C.fa_,C.fnd,C.c3N,C.c3M,C.c4e,C.dNZ,C.dO_,C.fiz,C.fim,C.fil,C.f6h,C.c4s,C.c4t,C.c4u,C.c4r,C.c4q,C.f4t,C.fvm,C.fvn,C.fvo,C.fvp,C.fvl,C.dO5,C.dO6,C.dO4,C.fvs,C.d5s,C.c62,C.f3s,C.dHh,C.dOo,C.c4U,C.c4R,C.c4T,C.c4W,C.bYj,C.bYh,C.bYm,C.c52,C.c51,C.c50,C.c5_,C.c54,C.c56,C.dS7,C.dRM,C.dRK,C.dS0,C.dRT,C.dRX,C.dRW,C.dRR,C.dS5,C.dS4,C.cFY,C.cFZ,C.eCa,C.eC3,C.eC8,C.c4X,C.fkk,C.dSI,C.dSr,C.dSk,C.dSl,C.dSm,C.dSn,C.dSH,C.c4Z,C.czF,C.czG,C.f3c,C.dSN,C.dSP,C.dSS,C.dT_,C.dT0,C.dT1,C.dSJ,C.fwc,C.d74,C.d77,C.c6X,C.c79,C.e2c,C.e2d,C.e2e,C.e1Z,C.e1R,C.e1S,C.e1T,C.e24,C.e26,C.dbi,C.dbj,C.dbe,C.db9,C.dbE,C.dbz,C.dby,C.dbx,C.dbr,C.faW,C.fqH,C.faV,C.f0M,C.fpx,C.fnq,C.frE,C.dX4,C.dX5,C.fa6,C.fa5,C.fpN,C.fpO,C.fjI,C.fpe,C.c8I,C.c8J,C.c8H,C.c8K,C.c8G,C.c8M,C.c8N,C.c8F,C.fbq,C.eYA,C.eYB,C.f7t,C.f9n,C.f6d,C.eZA,C.f6q,C.ffj,C.ffk])
t(C.bnP,A.iJ)
u(A.af,[C.E5,C.aiL,C.aAm,C.aiK,C.aiM,C.ajD,C.afY,C.ala,C.Ye,C.Yf,C.Xm,C.alF,C.al9,C.M_,C.axA,C.amC,C.anf,C.Ty,C.NR,C.Z1,C.Z0,C.Tz,C.any,C.ayq,C.anB,C.XL,C.ao7,C.ayB,C.ayD,C.Yy,C.apm])
u(A.ag,[C.aFd,C.aHE,C.aIB,C.aHD,C.aHF,C.bdd,C.auN,C.azC,C.bfC,C.bfD,C.awY,C.bfJ,C.aIa,C.aIK,C.aHG,C.aAn,C.aAE,C.aAQ,C.b7r,C.aCJ,C.aCI,C.aAS,C.aAR,C.bdr,C.aIS,C.aHL,C.btB,C.aI0,C.ayE,C.aB1,C.aJy])
u(A.kz,[C.eNb,C.f4K,C.d3z,C.d4_,C.d3Y,C.d3X,C.dH3,C.d4G,C.d4E,C.d4D,C.d4h,C.d4r,C.d4f,C.d4t,C.d4d,C.d4w,C.cxc,C.cwP,C.cxn,C.cxu,C.cxt,C.cwM,C.cZJ,C.dvt,C.fa0,C.fa1,C.dO2,C.fjX,C.fvk,C.dO7,C.dOa,C.dO9,C.d5t,C.c63,C.c4V,C.c4S,C.bYk,C.bYi,C.c55,C.dS8,C.dRQ,C.dS6,C.eCg,C.eCf,C.dSj,C.dSc,C.dSe,C.dSg,C.dSf,C.dSO,C.dT2,C.d75,C.d79,C.d76,C.e25,C.e1y,C.dbk,C.dbl,C.dbc,C.dbd,C.dbf,C.dba,C.dbs,C.fgj,C.c8L,C.c8E,C.eZ8,C.fag,C.faf])
t(C.at0,C.E5)
u(A.aB,[C.qf,C.abx,C.Lu,C.He,C.qN,C.qO,C.lm,C.ib,C.hX,C.b5B,C.cXp,C.d9u,C.qU,C.TA,C.Mc,C.po,C.aX0,C.oB,C.aot])
t(C.axy,C.aHE)
t(C.bg2,C.aIB)
t(C.axx,C.aHD)
t(C.axz,C.aHF)
u(A.mi,[C.Ui,C.ayr,C.aok,C.Hj,C.Dv])
u(A.at,[C.ZB,C.bok,C.aci,C.Oo,C.a4D,C.LS,C.an9,C.ab8,C.ab7,C.aXQ,C.ayp,C.a9H,C.aXn,C.a9z,C.ayC])
t(C.bfA,C.aIa)
t(C.bge,C.aIK)
t(C.bbX,C.aHG)
t(C.aAT,C.aIS)
t(C.axT,C.aHL)
t(C.aBe,C.btB)
t(C.bea,C.aI0)
u(A.n9,[C.b7W,C.b7V,C.b7U,C.b7m,C.brF,C.bmI])
t(C.aBN,C.aJy)
w(C.aHD,C.Lu)
w(C.aHE,C.Lu)
w(C.aHF,C.Lu)
w(C.aIB,C.Lu)
w(C.aIa,A.eL)
w(C.aIK,A.c7)
w(C.aHG,A.c7)
w(C.aIS,A.c7)
w(C.aHL,A.eL)
w(C.aI0,A.eL)
v(C.btB,A.eo)
w(C.aJy,A.c7)})()
A.kg(b.typeUniverse,JSON.parse('{"bnP":{"iJ":[]},"E5":{"af":[],"r":[]},"aFd":{"ag":["E5<1,2>"]},"at0":{"E5":["1","hw<1>"],"af":[],"r":[],"E5.T":"1","E5.S":"hw<1>"},"aiL":{"af":[],"r":[]},"aAm":{"af":[],"r":[]},"aiK":{"af":[],"r":[]},"aiM":{"af":[],"r":[]},"ajD":{"af":[],"r":[]},"afY":{"af":[],"r":[]},"axy":{"ag":["aiL"]},"bg2":{"ag":["aAm"]},"axx":{"ag":["aiK"]},"axz":{"ag":["aiM"]},"bdd":{"ag":["ajD"]},"auN":{"ag":["afY"]},"ala":{"af":[],"r":[]},"Ye":{"af":[],"r":[]},"Yf":{"af":[],"r":[]},"aci":{"at":[],"r":[]},"Xm":{"af":[],"r":[]},"azC":{"ag":["ala"]},"ZB":{"at":[],"r":[]},"bok":{"at":[],"r":[]},"bfC":{"ag":["Ye"]},"bfD":{"ag":["Yf"]},"Oo":{"at":[],"r":[]},"awY":{"ag":["Xm"]},"alF":{"af":[],"r":[]},"bfJ":{"ag":["alF"]},"a4D":{"at":[],"r":[]},"al9":{"af":[],"r":[]},"bfA":{"ag":["al9"]},"LS":{"at":[],"r":[]},"an9":{"at":[],"r":[]},"M_":{"af":[],"r":[]},"bge":{"ag":["M_"]},"ab8":{"at":[],"r":[]},"ab7":{"at":[],"r":[]},"axA":{"af":[],"r":[]},"bbX":{"ag":["axA"]},"aXQ":{"at":[],"r":[]},"amC":{"af":[],"r":[]},"aAn":{"ag":["amC"]},"anf":{"af":[],"r":[]},"aAE":{"ag":["anf"]},"Ty":{"af":[],"r":[]},"NR":{"af":[],"r":[]},"Z1":{"af":[],"r":[]},"Z0":{"af":[],"r":[]},"aAQ":{"ag":["Ty"]},"b7r":{"ag":["NR"]},"aCJ":{"ag":["Z1"]},"aCI":{"ag":["Z0"]},"Tz":{"af":[],"r":[]},"aAS":{"ag":["Tz"]},"any":{"af":[],"r":[]},"a9H":{"at":[],"r":[]},"a9z":{"at":[],"r":[]},"ayq":{"af":[],"r":[]},"aAR":{"ag":["any"]},"ayp":{"at":[],"r":[]},"aXn":{"at":[],"r":[]},"bdr":{"ag":["ayq"]},"anB":{"af":[],"r":[]},"aAT":{"ag":["anB"]},"XL":{"af":[],"r":[]},"axT":{"ag":["XL"]},"ao7":{"af":[],"r":[]},"ayB":{"af":[],"r":[]},"ayD":{"af":[],"r":[]},"aBe":{"ag":["ao7"],"eo":[]},"ayC":{"at":[],"r":[]},"bea":{"ag":["ayB"]},"b7W":{"aA":[]},"b7V":{"aA":[]},"b7U":{"aA":[]},"ayE":{"ag":["ayD"]},"b7m":{"aA":[]},"brF":{"aA":[]},"Yy":{"af":[],"r":[]},"aB1":{"ag":["Yy"]},"bmI":{"aA":[]},"apm":{"af":[],"r":[]},"aBN":{"ag":["apm"]}}'))
A.Oz(b.typeUniverse,JSON.parse('{"Lu":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=A.az
return{dw:w("mo<w?>"),gS:w("nI"),o:w("d_"),g5:w("wk"),M:w("fa<n>"),k:w("Q"),gv:w("kX<ak<j_>>"),gh:w("kX<n>"),gH:w("kX<I>"),r:w("aw<~>"),dk:w("a0"),fw:w("O<nI>"),E:w("O<d_>"),V:w("O<ab>"),O:w("O<w>"),A:w("O<a0>"),R:w("O<mV>"),B:w("O<ak<I>>"),m:w("O<a1<n,n>>"),_:w("O<a1<n,@>>"),b:w("O<qN>"),x:w("O<qO>"),gi:w("O<j_>"),a:w("O<lm>"),Y:w("O<hX>"),v:w("O<ib>"),dA:w("O<He>"),F:w("O<qU>"),Z:w("O<kd>"),g:w("O<hA>"),gK:w("O<+at,details,id(Q,n,n)>"),C:w("O<cL>"),s:w("O<n>"),G:w("O<iJ>"),eO:w("O<en>"),d9:w("O<eM>"),p:w("O<r>"),n:w("O<P>"),t:w("O<I>"),U:w("O<aA?>"),d4:w("O<n?>"),ck:w("ak<qN>"),e:w("ak<qO>"),ac:w("ak<j_>"),dZ:w("ak<lm>"),I:w("ak<hX>"),j:w("ak<@>"),L:w("ak<I>"),eq:w("a1<n,n>"),P:w("a1<n,@>"),f:w("a1<@,@>"),cl:w("cV<n,C>"),aS:w("J<a0,rG>"),dc:w("J<Hj,bG>"),dv:w("J<n,n>"),bL:w("J<P,bG>"),a3:w("J<I,bG>"),gN:w("J<I,pc>"),w:w("iE"),b1:w("qN"),Q:w("qO"),bP:w("lm"),i:w("hX"),u:w("ib"),gp:w("TA"),J:w("Mc"),D:w("po"),an:w("kd"),c:w("cp"),K:w("aB"),d:w("jd<n>"),di:w("+outcome,snapshot(Ui,a4_?)"),ee:w("+after,before(P,P)"),et:w("+categories,error,message,replaceId(ak<hX>,n?,n?,n?)"),cz:w("DU"),bJ:w("dy<n>"),N:w("n"),e7:w("bl<P>"),W:w("cw<n>"),am:w("k4<I>"),cc:w("a3<n>"),aM:w("e3<d_>"),bG:w("e3<P>"),l:w("r"),gm:w("qf"),ec:w("abx"),q:w("mG"),y:w("S"),gR:w("P"),z:w("@"),S:w("I"),eG:w("d_?"),cJ:w("Q?"),gw:w("ak<a1<n,@>>?"),bM:w("ak<@>?"),h:w("a1<n,@>?"),X:w("aB?"),gE:w("+code,qrPayload(n,n)?"),bY:w("+isLive,ownerEmail,snapshotJson(S,n,n)?"),T:w("n?"),cD:w("P?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aQ6=new A.bv(B.bD,B.hK,B.bD,B.hK)
D.eF=new A.w(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,B.t)
D.aQA=new A.ay(D.eF,1,B.r,-1)
D.aQC=new A.ay(B.af,2,B.r,-1)
D.aQF=new A.ay(B.aS,2,B.r,-1)
D.aQH=new A.ay(B.cm,0.8,B.r,-1)
D.aQX=new A.ay(B.aK,2,B.r,-1)
D.aR3=new A.ay(B.fb,1.6,B.r,-1)
D.aRR=new A.aW(0,330,0,1/0)
D.aRX=new A.aW(0,176,0,1/0)
D.aRY=new A.aW(0,1/0,0,260)
D.aSf=new A.aW(90,1/0,0,1/0)
D.aUZ=new A.ab(0,B.G,B.dl,B.J,4)
D.cE9=w([D.aUZ],x.V)
D.aSt=new A.o(B.c,null,null,null,D.cE9,null,B.a6)
D.cyG=w([D.eF,B.aW],x.O)
D.bKt=new A.a5(B.a3,B.a7,B.x,D.cyG,null,null)
D.aSH=new A.o(null,null,null,null,null,D.bKt,B.a6)
D.aSM=new A.o(B.bg,null,null,null,null,null,B.a6)
D.b31=new A.w(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,B.t)
D.cSb=w([P.a92,D.b31],x.O)
D.bJA=new A.a5(B.b0,B.b3,B.x,D.cSb,null,null)
D.aT1=new A.o(null,null,null,B.mp,null,D.bJA,B.n)
D.b8X=new A.w(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,B.t)
D.d1c=w([D.b8X,M.aaL],x.O)
D.bIO=new A.a5(B.b0,B.b3,B.x,D.d1c,null,null)
D.aTq=new A.o(null,null,null,B.pY,null,D.bIO,B.n)
D.cOx=w([B.aB,B.bx],x.O)
D.bJi=new A.a5(B.a3,B.a7,B.x,D.cOx,null,null)
D.aTv=new A.o(null,null,null,null,null,D.bJi,B.a6)
D.eHD=new A.F(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_3=new A.x("\ud83c\udf89",null,D.eHD,null,null,null,null,null,null,null,null,null)
D.aYD=new A.cy(B.A,null,null,D.f_3,null)
D.aZU=new A.w(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,B.t)
D.a8v=new A.w(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,B.t)
D.b14=new A.w(1,0.8431372549019608,0.8,0.7843137254901961,B.t)
D.b18=new A.w(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,B.t)
D.o_=new A.w(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,B.t)
D.rt=new A.w(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,B.t)
D.a9m=new A.w(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,B.t)
D.b2L=new A.w(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,B.t)
D.TX=new A.w(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,B.t)
D.wa=new A.w(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,B.t)
D.b3U=new A.w(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,B.t)
D.Ug=new A.w(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,B.t)
D.aau=new A.w(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,B.t)
D.b7l=new A.w(1,0.9529411764705882,0.9411764705882353,1,B.t)
D.b7r=new A.w(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,B.t)
D.aaO=new A.w(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,B.t)
D.ab1=new A.w(1,0,0.8392156862745098,0.30980392156862746,B.t)
D.ab2=new A.w(1,1,0.9529411764705882,0.6901960784313725,B.t)
D.b8z=new A.w(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,B.t)
D.b8D=new A.w(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,B.t)
D.b9q=new A.w(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,B.t)
D.UE=new A.w(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,B.t)
D.bag=new A.w(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,B.t)
D.baJ=new A.w(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,B.t)
D.UK=new A.w(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,B.t)
D.bbk=new A.w(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,B.t)
D.abY=new A.a1Z(2,"active")
D.bf4=new A.b8(42e5)
D.bf7=new A.b8(53e4)
D.bf9=new A.b8(58e4)
D.bfd=new A.b8(82e4)
D.bg1=new A.N(0,30,0,30)
D.bg9=new A.N(0,4,0,8)
D.bgc=new A.N(0,8,12,8)
D.bgR=new A.N(12,0,12,88)
D.bgY=new A.N(12,11,12,10)
D.bhk=new A.N(13,10,12,10)
D.bht=new A.N(14,10,14,2)
D.bhF=new A.N(14,14,10,14)
D.bi9=new A.N(16,12,16,96)
D.bie=new A.N(16,14,16,8)
D.bii=new A.N(16,16,16,96)
D.bik=new A.N(16,18,16,16)
D.bio=new A.N(16,4,16,10)
D.bjj=new A.N(18,6,18,40)
D.bjl=new A.N(18,8,18,130)
D.bjy=new A.N(20,10,20,20)
D.bjL=new A.N(20,18,20,18)
D.bjP=new A.N(20,20,20,22)
D.bka=new A.N(22,22,22,16)
D.bkP=new A.N(2,0,2,10)
D.blx=new A.N(4,8,12,4)
D.blK=new A.N(6,1,6,1)
D.blM=new A.N(6,4,0,0)
D.blP=new A.N(6,6,12,4)
D.bma=new A.N(8,4,12,8)
D.f2e=new A.x("Activity",null,B.fS,null,null,null,null,null,null,null,null,null)
D.bnR=new A.bG(1,B.bp,D.f2e,null)
D.f9R=new A.x("Game Receipts",null,A0.C4,null,null,null,null,null,null,null,null,null)
D.eVu=new A.x("Your last 59 games \xb7 kept for 7 days",null,F.aKK,null,null,null,null,null,null,null,null,null)
D.cv7=w([D.f9R,D.eVu],x.p)
D.bcg=new A.fm(B.ak,B.e,B.j,B.F,null,B.p,null,0,D.cv7,null)
D.bnU=new A.bG(1,B.bp,D.bcg,null)
D.bpQ=new A.a0(58607,"MaterialIcons",!1)
D.Xu=new A.a0(62178,"MaterialIcons",!1)
D.bqE=new A.a0(62410,"MaterialIcons",!1)
D.brN=new A.a0(63258,"MaterialIcons",!1)
D.brT=new A.a0(63304,"MaterialIcons",!1)
D.brU=new A.a0(63306,"MaterialIcons",!1)
D.bs0=new A.a0(63330,"MaterialIcons",!1)
D.ai_=new A.a0(984777,"MaterialIcons",!1)
D.buu=new A.ad(B.Ew,13,B.af,null,null,null)
D.buC=new A.ad(B.jK,13,B.p1,null,null,null)
D.ai8=new A.ad(B.l4,null,B.c,null,null,null)
D.bw9=new A.ad(B.AA,34,B.aX,null,null,null)
D.bwH=new A.ad(B.EA,19,B.c,null,null,null)
D.bqX=new A.a0(62804,"MaterialIcons",!1)
D.bwQ=new A.ad(D.bqX,24,B.aK,null,null,null)
D.bxh=new A.ad(B.Ak,28,B.bk,null,null,null)
D.bxL=new A.ad(B.ahH,42,B.c,null,null,null)
D.bxU=new A.ad(B.Ym,30,B.c,null,null,null)
D.byu=new A.ad(B.fE,null,B.c,null,null,null)
D.byP=new A.ad(B.jK,16,B.c,null,null,null)
D.bzp=new A.ad(B.qw,13,B.c,null,null,null)
D.bzy=new A.ad(B.l4,18,B.c,null,null,null)
D.bA4=new A.ad(B.uB,null,B.dC,null,null,null)
D.bAI=new A.ad(B.oi,28,B.c,null,null,null)
D.bAX=new A.ad(B.mQ,22,null,null,null,null)
D.bBj=new A.ad(B.qt,null,null,null,null,null)
D.bBv=new A.ad(B.iO,28,B.c,null,null,null)
D.bBx=new A.ad(B.cv,null,B.aQ,null,null,null)
D.bBE=new A.ad(B.Xb,14,B.c,null,null,null)
D.bC9=new A.ad(B.LE,36,B.aL,null,null,null)
D.bCg=new A.ad(B.oj,16,B.c,null,null,null)
D.bCv=new A.ad(B.er,null,null,null,null,null)
D.b3l=new A.w(1,0.23137254901960785,0.16470588235294117,0,B.t)
D.bD3=new A.ad(B.dR,9,D.b3l,null,null,null)
D.bsQ=new A.a0(983146,"MaterialIcons",!1)
D.bDj=new A.ad(D.bsQ,null,B.aK,null,null,null)
D.bDO=new A.ad(B.uE,28,D.eF,null,null,null)
D.bDT=new A.ad(B.t2,null,B.fb,null,null,null)
D.bDY=new A.ad(B.hU,20,D.eF,null,null,null)
D.btc=new A.a0(983377,"MaterialIcons",!1)
D.bE7=new A.ad(D.btc,64,B.c,null,null,null)
D.bEA=new A.ad(B.h1,24,B.c,null,null,null)
D.bFu=new A.e2(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bFE=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bFS=new A.e2(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bFT=new A.e2(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.b1M=new A.w(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,B.t)
D.b4d=new A.w(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,B.t)
D.b3V=new A.w(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,B.t)
D.cSs=w([D.b1M,D.b4d,D.b3V],x.O)
D.bGL=new A.a5(B.ax,B.aC,B.x,D.cSs,null,null)
D.cWN=w([B.bl,B.aW],x.O)
D.bH3=new A.a5(B.ax,B.aC,B.x,D.cWN,null,null)
D.b2X=new A.w(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,B.t)
D.b7P=new A.w(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,B.t)
D.cEA=w([D.b2X,D.b7P],x.O)
D.bHa=new A.a5(B.ax,B.aC,B.x,D.cEA,null,null)
D.cTR=w([B.bj,B.M,B.eu],x.O)
D.bHh=new A.a5(B.ax,B.aC,B.x,D.cTR,null,null)
D.bHk=new A.a5(B.a3,B.a7,B.x,G.api,null,null)
D.cE2=w([B.fb,B.c7],x.O)
D.ajQ=new A.a5(B.a3,B.a7,B.x,D.cE2,null,null)
D.cEm=w([B.fb,B.bx],x.O)
D.ajR=new A.a5(B.a3,B.a7,B.x,D.cEm,null,null)
D.asY=w([D.o_,B.au,B.bT],x.O)
D.bHB=new A.a5(B.ax,B.aC,B.x,D.asY,null,null)
D.b5C=new A.w(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,B.t)
D.cCc=w([D.b5C,E.a8D,B.M],x.O)
D.bHG=new A.a5(B.ax,B.aC,B.x,D.cCc,null,null)
D.aOX=new A.d6(-0.8,-1)
D.aOZ=new A.d6(1.2,1)
D.cBq=w([B.c,B.en,B.fY,B.c,B.fj,B.aY,B.mt],x.O)
D.cTk=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.bHI=new A.a5(D.aOX,D.aOZ,B.x,D.cBq,D.cTk,null)
D.b7L=new A.w(1,0,0.7607843137254902,0.26666666666666666,B.t)
D.b5R=new A.w(1,0,0.6392156862745098,0.22745098039215686,B.t)
D.cSr=w([D.b7L,D.b5R],x.O)
D.bI7=new A.a5(B.a3,B.a7,B.x,D.cSr,null,null)
D.bIb=new A.a5(B.ax,B.aC,B.x,B.O5,null,null)
D.cNF=w([E.UH,B.wd],x.O)
D.bId=new A.a5(B.a3,B.a7,B.x,D.cNF,null,null)
D.cRn=w([B.fZ,B.fr],x.O)
D.ajW=new A.a5(B.a3,B.a7,B.x,D.cRn,null,null)
D.cWm=w([B.bg,B.bS],x.O)
D.ajX=new A.a5(B.a3,B.a7,B.x,D.cWm,null,null)
D.cmD=w([B.dm,B.f3],x.O)
D.bIQ=new A.a5(B.ax,B.aC,B.x,D.cmD,null,null)
D.cAw=w([B.c,B.b6],x.O)
D.bJ_=new A.a5(B.a3,B.a7,B.x,D.cAw,null,null)
D.aa7=new A.w(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,B.t)
D.b0T=new A.w(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,B.t)
D.cKH=w([D.aa7,B.j1,B.q8,B.au,D.b0T],x.O)
D.bLl=w([0,0.28,0.55,0.82,1],x.n)
D.bJ0=new A.a5(B.ax,B.aC,B.x,D.cKH,D.bLl,null)
D.bJa=new A.a5(B.a3,B.a7,B.x,B.OG,null,null)
D.bJb=new A.a5(B.a3,B.a7,B.x,G.arD,null,null)
D.bJe=new A.a5(B.a3,B.a7,B.x,D.asY,null,null)
D.cFD=w([B.bx,B.fb],x.O)
D.bJo=new A.a5(B.a3,B.a7,B.x,D.cFD,null,null)
D.d_6=w([B.aB,B.bx,B.b6],x.O)
D.bJq=new A.a5(B.a3,B.a7,B.x,D.d_6,null,null)
D.cNO=w([B.aX,B.bJ,B.fy],x.O)
D.bJu=new A.a5(B.a3,B.a7,B.x,D.cNO,null,null)
D.cZQ=w([B.bj,B.aI,B.bH,B.aJ,B.aN,B.cm,B.aj],x.O)
D.cJ3=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.bJz=new A.a5(B.ax,B.aC,B.x,D.cZQ,D.cJ3,null)
D.bJJ=new A.a5(B.ax,B.aC,B.x,B.ZG,null,null)
D.cOh=w([D.TX,B.e1],x.O)
D.bJS=new A.a5(B.a3,B.a7,B.x,D.cOh,null,null)
D.cV4=w([D.aaO,D.a9m,B.M],x.O)
D.bK_=new A.a5(B.ax,B.aC,B.x,D.cV4,null,null)
D.b9M=new A.w(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,B.t)
D.cAZ=w([B.eT,B.fZ,D.b9M],x.O)
D.bKv=new A.a5(B.ax,B.aC,B.x,D.cAZ,null,null)
D.cG6=w([D.o_,B.au],x.O)
D.bKw=new A.a5(B.ax,B.aC,B.x,D.cG6,null,null)
D.bKR=w([F.AE,B.oi,B.jK,B.hs,B.kG,B.kH,B.kF,B.qz,B.m7,B.eN,B.lw,B.x7,B.EI],x.A)
D.bOd=w([10,50,100,200],x.t)
D.bXT=w([1,3,5,7],x.t)
D.c1Q=w([25,50,100,250],x.t)
D.bsL=new A.a0(983104,"MaterialIcons",!1)
D.cah=w([B.oi,B.lx,B.mQ,B.l2,B.hq,B.uK,D.bsL,B.Yi],x.A)
D.cfB=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.crp=w([0,0.22,0.5,0.78,1],x.n)
D.cvf=w([8,13,19],x.n)
D.a__=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.f1j=new A.x("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.dVM=new A.jd("questions",48,D.f1j,null,x.d)
D.eSU=new A.x("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.dVR=new A.jd("edit",48,D.eSU,null,x.d)
D.f8w=new A.x("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.dVX=new A.jd("delete",48,D.f8w,null,x.d)
D.cvo=w([D.dVM,D.dVR,D.dVX],A.az("O<oF<n>>"))
D.cEu=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.cEH=w([B.bL,B.hR],x.O)
D.a1y=new C.lm("text","",null,null)
D.cFM=w([D.a1y],x.a)
D.cH6=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.ecX=new A.abU(B.m5,"Home")
D.e4x=new A.abU(B.pm,"Growth")
D.e8K=new A.abU(B.jK,"Wallet")
D.cJf=w([D.ecX,D.e4x,D.e8K],A.az("O<+icon,label(a0,n)>"))
D.cJD=w([4,0,2,6,8,1,3,5,7],x.t)
D.cJL=w([B.c,B.bN,B.cm],x.O)
D.dnt=new C.qU("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.dnw=new C.qU("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.dnu=new C.qU("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.dno=new C.qU("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.dnp=new C.qU("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.dnx=new C.qU("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a_r=w([D.dnt,D.dnw,D.dnu,D.dno,D.dnp,D.dnx],x.F)
D.a_w=w([B.aD,B.bl,B.d3,B.aX],x.O)
D.b3t=new A.w(1,1,0.8980392156862745,0.4,B.t)
D.cOn=w([B.TG,D.b3t,B.q8,B.hQ,B.j1],x.O)
D.a_B=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.Od=w(["checkers_deluxe","tic_tac_go"],x.s)
D.bKV=w([0,1,2],x.t)
D.cav=w([3,4,5],x.t)
D.cnb=w([6,7,8],x.t)
D.bKX=w([0,3,6],x.t)
D.bXY=w([1,4,7],x.t)
D.c4i=w([2,5,8],x.t)
D.bL0=w([0,4,8],x.t)
D.c4f=w([2,4,6],x.t)
D.cQw=w([D.bKV,D.cav,D.cnb,D.bKX,D.bXY,D.c4i,D.bL0,D.c4f],x.B)
D.aAT=new C.Hj(0,"abab")
D.dnm=new C.Hj(1,"aaaBbb")
D.aAU=new C.Hj(2,"aabb")
D.cRr=w([D.aAT,D.dnm,D.aAU],A.az("O<Hj>"))
D.cRH=w([],x.a)
D.asm=w([],x.v)
D.cUX=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.Ox=w([1,2,3,-1,-2],x.t)
D.d11=w([B.j2,B.aB],x.O)
D.fiN=new C.qf("dice","Dice Roll","Roll for cash & prizes!",B.m3,D.d11)
D.fiK=new C.qf("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",B.qu,B.arb)
D.cX7=w([B.d1,B.bk],x.O)
D.fiI=new C.qf("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",B.Y5,D.cX7)
D.d0A=w([B.dK,B.mw],x.O)
D.fiO=new C.qf("memory","Memory Match","Match pairs \u2014 solo or multiplayer",B.Yi,D.d0A)
D.bXG=w([B.jB,B.p_],x.O)
D.fiL=new C.qf("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",G.XS,D.bXG)
D.cUW=w([M.kY,D.Ug],x.O)
D.fiJ=new C.qf("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",B.EL,D.cUW)
D.fiM=new C.qf("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",B.cv,Ai.mR)
D.cWl=w([D.fiN,D.fiK,D.fiI,D.fiO,D.fiL,D.fiJ,D.fiM],A.az("O<qf>"))
D.cXE=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.b79=new A.w(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,B.t)
D.b71=new A.w(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,B.t)
D.abs=new A.w(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,B.t)
D.cYn=w([D.b79,D.b71,D.abs],x.O)
D.b8T=new A.w(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,B.t)
D.cYp=w([B.a8C,D.b8T,D.abs],x.O)
D.cYZ=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.ati=w([D.o_,B.c,D.eF,B.bX,B.bd,B.au],x.O)
D.dnr=new C.qU("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.dnq=new C.qU("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.dnn=new C.qU("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.dnv=new C.qU("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.dny=new C.qU("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.dns=new C.qU("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a0a=w([D.dnr,D.dnq,D.dnn,D.dnv,D.dny,D.dns],x.F)
D.d0N=w([B.c7,B.p_],x.O)
D.dLf={checkers_deluxe:0,tic_tac_go:1}
D.ayT=new A.br(D.dLf,["Checkers Deluxe","Tic Tac Go"],A.az("br<n,n>"))
D.dKp={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.az4=new A.br(D.dKp,[1,2,3,4,5,6,7],A.az("br<n,I>"))
D.dgr=new C.a4D(null)
D.djN=new C.lm("signature","NGMY Support Team",null,null)
D.djO=new C.lm("divider","",null,null)
D.Pq=new C.TA(!1,!1,!1,!1)
D.Ps=new C.Mc(!1,!1,!1,!1)
D.dkQ=new C.Mc(!0,!0,!1,!1)
D.Bq=new C.aok(0,"swahili")
D.aAS=new C.aok(1,"english")
D.Br=new C.aok(2,"mix")
D.cQ1=w([B.fh,B.im,B.dn],x.O)
D.brC=new A.a0(63118,"MaterialIcons",!1)
D.doz=new C.oB(D.cQ1,B.fV,B.aX,"BACKGAMMON","\ud83c\udfb2",D.brC)
D.btB=new A.a0(983637,"MaterialIcons",!1)
D.doA=new C.oB(Af.ats,B.bl,B.f_,"EURO WHEEL","\ud83c\udfa1",D.btB)
D.cXW=w([B.M,B.aI,B.bu],x.O)
D.doB=new C.oB(D.cXW,B.aN,B.aj,"ROYALE","\u265f\ufe0f",G.XS)
D.cE4=w([B.dm,B.bk,B.e_],x.O)
D.doC=new C.oB(D.cE4,B.aD,B.d3,"CONNECT 4","\ud83d\udd34",B.Yu)
D.cTv=w([B.dt,B.f3,B.p_],x.O)
D.doD=new C.oB(D.cTv,B.ub,B.c7,"PUNTO BANCO","\ud83d\udc8e",B.lx)
D.cmF=w([B.ng,B.i2,B.lp],x.O)
D.doE=new C.oB(D.cmF,B.iX,B.jC,"DOMINOES","\ud83c\udc53",B.ahJ)
D.cYA=w([B.wi,B.rw,B.hx],x.O)
D.doF=new C.oB(D.cYA,B.zC,B.fT,"WAR","\u2694\ufe0f",N.XO)
D.doG=new C.oB(B.atn,B.aK,B.aj,"PREMIUM","\ud83c\udfae",B.m3)
D.cFE=w([B.jf,B.aB,B.dK],x.O)
D.doH=new C.oB(D.cFE,B.dJ,B.fb,"JACKPOT","\ud83c\udfb0",B.m3)
D.cSJ=w([B.kt,B.lm,B.bx],x.O)
D.doI=new C.oB(D.cSJ,B.q7,B.bX,"LIVE BINGO","\ud83c\udfb1",B.Ap)
D.cyE=w([B.im,B.e1,B.aX],x.O)
D.br2=new A.a0(62865,"MaterialIcons",!1)
D.doJ=new C.oB(D.cyE,B.rA,B.aK,"BIG SPIN","\ud83c\udfa1",D.br2)
D.doK=new C.oB(B.a09,B.aJ,B.bl,"HOLD'EM","\u2660\ufe0f",B.jK)
D.cYY=w([B.eT,B.fr,B.aW],x.O)
D.bqa=new A.a0(61234,"MaterialIcons",!1)
D.doL=new C.oB(D.cYY,B.lU,B.aS,"CRAPS","\ud83c\udfb2",D.bqa)
D.cDq=w([B.hR,B.iG,B.bL],x.O)
D.doM=new C.oB(D.cDq,B.bJ,B.b6,"PLINKO","\ud83d\udc8e",Aj.LF)
D.btm=new A.a0(983492,"MaterialIcons",!1)
D.doN=new C.oB(B.a09,B.eE,B.bl,"SNOOKER","\ud83c\udfb1",D.btm)
D.cWI=w([B.eT,B.fr,B.aS],x.O)
D.doO=new C.oB(D.cWI,B.qc,B.bs,"PROFIT LAB","\ud83d\udcb0",B.hU)
D.cX0=w([B.eu,B.fs,B.bl],x.O)
D.brZ=new A.a0(63324,"MaterialIcons",!1)
D.doP=new C.oB(D.cX0,B.zz,B.bg,"KLONDIKE","\ud83c\udccf",D.brZ)
D.cQC=w([B.da,B.bj,B.M],x.O)
D.doQ=new C.oB(D.cQC,B.aK,B.aI,"VEGAS TABLE","\ud83c\udccf",A_.EY)
D.pv=new C.Dv(0,"continueGame")
D.pw=new C.Dv(1,"youWin")
D.Gq=new C.Dv(2,"youLose")
D.PB=new C.Dv(3,"draw")
D.aB6=new C.Ui(0,"found")
D.dHC=new C.Ui(1,"foundLive")
D.a1O=new C.Ui(2,"notFound")
D.aB7=new C.Ui(3,"wrongAccount")
D.dNj=new A.u(4,12)
D.dQ6=new A.C(B.Kf,B.rk,null)
D.blc=new A.N(4,0,0,3)
D.eF6=new A.F(!0,B.aL,null,null,null,null,10,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcG=new A.x("NGMY Helper",null,D.eF6,null,null,null,null,null,null,null,null,null)
D.dQm=new A.C(D.blc,D.fcG,null)
D.brR=new A.a0(63284,"MaterialIcons",!1)
D.bx3=new A.ad(D.brR,18,B.o1,null,null,null)
D.eJt=new A.F(!0,B.o1,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWB=new A.x("Continue",null,D.eJt,null,null,null,null,null,null,null,null,null)
D.cS5=w([D.bx3,B.bq,D.eWB],x.p)
D.eql=new A.cD(B.b_,B.e,B.Q,B.m,null,B.p,null,0,D.cS5,null)
D.dQp=new A.C(B.iM,D.eql,null)
D.dQz=new A.C(B.bU,B.rk,null)
D.b6O=new A.w(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,B.t)
D.cOW=w([B.fZ,B.fr,B.cY,D.b6O],x.O)
D.bJC=new A.a5(B.ax,B.aC,B.x,D.cOW,B.AT,null)
D.aTy=new A.o(null,null,null,null,null,D.bJC,B.n)
D.bdd=new A.kB(D.aTy,B.bb,null,null)
D.dWb=new A.cH(0,0,0,0,null,null,D.bdd,null)
D.byL=new A.ad(B.uA,11,B.c,null,null,null)
D.dWf=new A.cH(10,12,null,null,null,null,D.byL,null)
D.crh=w([B.fW,B.eu,B.kX],x.O)
D.dWP=new A.bR(B.Ij,1.1,B.x,null,0,D.crh,null,null)
D.b80=new A.w(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,B.t)
D.b3b=new A.w(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,B.t)
D.b4L=new A.w(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,B.t)
D.cMT=w([D.b80,D.b3b,D.b4L],x.O)
D.dWW=new A.bR(B.a6o,1.05,B.x,null,0,D.cMT,null,null)
D.dXi=new A.bR(B.A,0.5,B.x,null,0,W.a_e,null,null)
D.eoA=new A.a7(-18,0,18,1)
D.ep6=new A.a7(-3,-5,3,5)
D.bxv=new A.ad(B.er,16,D.eF,null,null,null)
D.aLz=new A.F(!0,D.eF,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faw=new A.x("Screenshot added \xb7 tap to change",null,D.aLz,null,null,null,null,null,null,null,null,null)
D.cBt=w([D.bxv,B.bq,D.faw],x.p)
D.epP=new A.cD(B.b_,B.b7,B.j,B.m,null,B.p,null,0,D.cBt,null)
D.bBf=new A.ad(B.jL,15,D.eF,null,null,null)
D.f8r=new A.x("Refresh",null,D.aLz,null,null,null,null,null,null,null,null,null)
D.cDz=w([D.bBf,B.d8,D.f8r],x.p)
D.epR=new A.cD(B.b_,B.e,B.Q,B.m,null,B.p,null,0,D.cDz,null)
D.dKP={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.erB=new A.fa(D.dKP,3,x.M)
D.dKz={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.erH=new A.fa(D.dKz,36,x.M)
D.dKC={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.erP=new A.fa(D.dKC,6,x.M)
D.dLE={memory:0,typing:1,scramble:2,pattern:3}
D.mi=new A.fa(D.dLE,4,x.M)
D.etY=new A.as(276,276)
D.euE=new A.a4(13,null,null,null)
D.aZg=new A.fe(2.6,null,null,null,null,B.aK,null,null,null,null)
D.euO=new A.a4(26,26,D.aZg,null)
D.evy=new A.a4(null,7,null,null)
D.evH=new A.hK(8,0,0,1,null)
D.fby=new A.x("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aJc=new A.b0(D.fby,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eS6=new A.x("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.eyD=new A.b0(D.eS6,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eT4=new A.x("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.eyJ=new A.b0(D.eT4,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f8B=new A.x("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.ezm=new A.b0(D.f8B,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.b7t=new A.w(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,B.t)
D.eIs=new A.F(!0,D.b7t,null,null,null,null,9,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCn=new A.en("$",null,null,B.cS,null,null,null,null,null,null,D.eIs)
D.eCD=new A.F(!0,B.M,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCW=new A.F(!0,B.c,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eD0=new A.F(!0,B.bj,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDn=new A.F(!0,B.M,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDx=new A.F(!0,B.c,null,null,null,null,19,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDD=new A.F(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDL=new A.F(!0,null,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEt=new A.F(!0,B.aK,null,null,null,null,28,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEZ=new A.F(!0,D.eF,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eF0=new A.F(!0,B.bJ,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFI=new A.F(!0,E.zx,null,null,null,null,13,B.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKo=new A.F(!0,B.c,null,null,null,null,20,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHa=new A.F(!0,B.bJ,null,null,null,null,11.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHs=new A.F(!0,B.af,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,B.aA,null,null,null,null,null,null,null,null)
D.eHJ=new A.F(!0,B.af,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIH=new A.F(!0,B.c,null,null,null,null,11,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIW=new A.F(!0,B.c,null,null,null,null,14,B.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJ6=new A.F(!0,B.bg,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJ7=new A.F(!0,B.c,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,B.aA,null,null,null,null,null,null,null,null)
D.eJB=new A.F(!0,B.iy,null,null,null,null,10.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b22=new A.w(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,B.t)
D.eJO=new A.F(!0,D.b22,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL8=new A.F(!0,B.aD,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLv=new A.F(!0,D.aa7,null,null,null,null,9,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aL3=new A.F(!0,E.zx,null,null,null,null,11,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLR=new A.F(!0,B.fs,null,null,null,null,52,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLS=new A.F(!0,B.bu,null,null,null,null,7,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eM6=new A.F(!0,E.zx,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.vr=new A.F(!0,B.c,null,null,null,null,13,B.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b5u=new A.w(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,B.t)
D.eMj=new A.F(!0,D.b5u,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMO=new A.F(!0,B.P6,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNM=new A.F(!0,B.c,null,null,null,null,38,B.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNS=new A.F(!0,B.iL,null,null,null,null,11,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNW=new A.F(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLh=new A.F(!0,B.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOo=new A.F(!0,B.M,null,null,null,null,10,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOs=new A.F(!0,B.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePj=new A.F(!0,B.M,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePH=new A.F(!0,B.af,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePX=new A.F(!0,B.bg,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQq=new A.F(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQu=new A.F(!0,B.M,null,null,null,null,11,B.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRo=new A.x("Value per pair",null,B.ht,null,null,null,null,null,null,null,null,null)
D.eRp=new A.x("Restore now",null,B.ce,null,null,null,null,null,null,null,null,null)
D.eRU=new A.x("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aKP=new A.F(!0,B.cU,null,null,null,null,12,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eS1=new A.x("AVAILABLE PLANS",null,D.aKP,null,null,null,null,null,null,null,null,null)
D.eS4=new A.x("I understand",null,B.cr,null,null,null,null,null,null,null,null,null)
D.eSx=new A.x("Go Back",null,B.cr,null,null,null,null,null,null,null,null,null)
D.eFz=new A.F(!0,B.bu,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTc=new A.x("PLAN VALUE",null,D.eFz,null,null,null,null,null,null,null,null,null)
D.eTe=new A.x("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.eTA=new A.x("Deposit",null,B.RC,null,null,null,null,null,null,null,null,null)
D.eOH=new A.F(!0,B.dJ,null,null,null,null,null,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUv=new A.x("JACKPOT SLOTS",null,D.eOH,null,null,null,null,null,null,null,null,null)
D.eUN=new A.x("Restore",null,B.ce,null,null,null,null,null,null,null,null,null)
D.eFC=new A.F(!0,B.c,null,null,null,null,12,B.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUQ=new A.x("YOUR NUMBER",null,D.eFC,null,null,null,null,null,null,null,null,null)
D.eV3=new A.x("SPIN REELS",null,G.a4z,null,null,null,null,null,null,null,null,null)
D.eVt=new A.x("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.eVX=new A.x("Perfect Score Profit",null,B.ht,null,null,null,null,null,null,null,null,null)
D.eWz=new A.x("Join room",null,B.kk,null,null,null,null,null,null,null,null,null)
D.eYr=new A.x("Add payment screenshot",null,B.jT,null,null,null,null,null,null,null,null,null)
D.eYF=new A.x("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.eNZ=new A.F(!0,B.aK,null,null,null,null,11,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ5=new A.x("INVITE A PLAYER",null,D.eNZ,null,null,null,null,null,null,null,null,null)
D.eNa=new A.F(!0,B.TG,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZv=new A.x("NGMY GOLD LEADER",null,D.eNa,null,null,null,null,null,null,null,null,null)
D.eZZ=new A.x("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.f_l=new A.x("Invest & Play",null,B.oB,null,null,null,null,null,null,null,null,null)
D.aKI=new A.F(!0,D.wa,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_I=new A.x("VALID THRU",null,D.aKI,null,null,null,null,null,null,null,null,null)
D.aLj=new A.F(!0,B.az,null,null,null,null,11,B.I,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_Q=new A.x("DEALER",null,D.aLj,null,null,null,null,null,null,null,null,null)
D.f_W=new A.x("CARDHOLDER",null,D.aKI,null,null,null,null,null,null,null,null,null)
D.eMI=new A.F(!0,B.aJ,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0B=new A.x("NGMY PLATINUM",null,D.eMI,null,null,null,null,null,null,null,null,null)
D.ePO=new A.F(!0,B.p1,null,null,null,null,10,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1e=new A.x("EARNED SO FAR",null,D.ePO,null,null,null,null,null,null,null,null,null)
D.f1K=new A.x("VS",null,B.aKD,null,null,null,null,null,null,null,null,null)
D.f28=new A.x("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.f2u=new A.x("One day left",null,B.aKm,null,B.L,null,null,null,null,null,null,null)
D.f2O=new A.x("Keep typing \u2014 mistakes are counted in your payout",null,B.C5,null,null,null,null,null,null,null,null,null)
D.f2P=new A.x("Multiplayer invite",null,B.kk,null,null,null,null,null,null,null,null,null)
D.f2Z=new A.x("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.eEh=new A.F(!0,B.P6,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f34=new A.x("\ud83d\udcb0 Partial Payout System",null,D.eEh,null,null,null,null,null,null,null,null,null)
D.f3e=new A.x("Browse Topics",null,B.eR,null,null,null,null,null,null,null,null,null)
D.eDl=new A.F(!0,B.c,null,null,null,null,22,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3s=new A.x("Investment Required",null,D.eDl,null,B.L,null,null,null,null,null,null,null)
D.eCT=new A.F(!0,B.c,null,null,null,null,16.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4R=new A.x("Network Status",null,D.eCT,null,null,null,null,null,null,null,null,null)
D.f5m=new A.x("Their account email",null,F.a4l,null,null,null,null,null,null,null,null,null)
D.f5F=new A.x("Verification code",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f5G=new A.x("Category",null,null,null,null,null,null,null,null,null,null,null)
D.f5S=new A.x("ACTIVE ASSET",null,D.aKP,null,null,null,null,null,null,null,null,null)
D.f6b=new A.x("Scan QR",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f6g=new A.x("Check word",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f6E=new A.x("YOUR HAND",null,D.aLj,null,null,null,null,null,null,null,null,null)
D.f7a=new A.x("NGMY Music Studio",null,B.kQ,null,null,null,null,null,null,null,null,null)
D.f7d=new A.x("I sent it \u2014 submit deposit",null,B.oB,null,null,null,null,null,null,null,null,null)
D.f7U=new A.x("Back",null,B.Rb,null,null,null,null,null,null,null,null,null)
D.eQF=new A.F(!0,null,null,null,null,null,null,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8_=new A.x("DEAL / PLAY ROUND",null,D.eQF,null,null,null,null,null,null,null,null,null)
D.f8b=new A.x("Got it \u2014 keep chatting",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f8k=new A.x("3 Messages Left",null,B.aL7,null,null,null,null,null,null,null,null,null)
D.f8O=new A.x("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.f8W=new A.x("Copy",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f9g=new A.x("How many games?",null,F.a4l,null,null,null,null,null,null,null,null,null)
D.eMd=new A.F(!0,B.az,null,null,null,null,null,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9s=new A.x("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.eMd,null,B.L,null,null,null,null,null,null,null)
D.faW=new A.x("Question",null,null,null,null,null,null,null,null,null,null,null)
D.fb7=new A.x("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.eR2=new A.F(!0,B.c,null,null,null,null,12.5,B.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcB=new A.x("NGMY  WALLET",null,D.eR2,null,null,null,null,null,null,null,null,null)
D.fcC=new A.x("Select Your Bet",null,B.hh,null,null,null,null,null,null,null,null,null)
D.ffT=new A.cw("history",x.W)
D.ffY=new A.cw("ngmy_local_home",x.W)
D.ffZ=new A.cw("ngmy_local_invest",x.W)
D.fg_=new A.cw("ngmy_local_wallet",x.W)
D.fiv=new C.Xm(null)
D.aNO=new C.ayr(0,"grid")
D.aNP=new C.ayr(1,"questions")
D.fjl=new C.ayr(2,"answer")
D.fk9=new C.Yf(null)})();(function staticFields(){$.fCB=A.b_(x.N)
$.h0P=A.T(x.N,x.k)
$.fHX=null
$.fHL=A.T(x.N,A.az("vz"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hY6","bAj",()=>C.hGm())
w($,"hXT","h8I",()=>{var v=null,u=A.id(v,v,v,v,D.eCn,B.a5,B.ch,v,B.em,B.cg)
u.eU()
return u})})()};
(a=>{a["U++mxrFeH9NQyjSsna8ltffOPg8="]=a.current})($__dart_deferred_initializers__);