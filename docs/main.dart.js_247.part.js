((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,L,Q,A_,E,M,A0,N,A1,R,O,A2,S,A3,P,A4,T,A5,A6,A7,A8,A9,Aa,U,Ab,C={
fUe(d,e,f){var w=null,v=f.k("EB<0>"),u=new A.EB(w,w,w,w,v)
$.a0B()
u.d=new C.clS(new A.VK(),e,u,f,d)
return new A.hL(u,v.k("hL<1>"))},
clS:function clS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
clT:function clT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
clP:function clP(d){this.a=d},
clQ:function clQ(d,e){this.a=d
this.b=e},
clR:function clR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
clO:function clO(d,e,f){this.a=d
this.b=e
this.c=f},
bnu:function bnu(d){this.a=d},
fUd(d,e,f,g){return new C.asQ(d,e,f,null,g.k("asQ<0>"))},
DV:function DV(){},
aF1:function aF1(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
eLZ:function eLZ(d){this.a=d},
eLY:function eLY(d,e){this.a=d
this.b=e},
eM0:function eM0(d){this.a=d},
eLW:function eLW(d,e,f){this.a=d
this.b=e
this.c=f},
eM_:function eM_(d){this.a=d},
eLX:function eLX(d){this.a=d},
asQ:function asQ(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
hIu(d){var w=B.a.i(d)
while(B.a.a_(w,"$"))w=B.a.i(B.a.aW(w,1))
return w},
h3d(d){var w=C.hIu(d)
if(w.length===0)return""
return"$"+w},
feZ(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$feZ=A.e(function(f,g){if(f===1)return A.f(g,v)
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
break}if(q.x!==B.cf){w=4
break}if(q.d!==B.fs){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!A.dm(m,"game payout:",0))if(!A.dm(m,"game partial:",0)){if(!A.dm(m,"multiplayer payout:",0))o=A.dm(m,"dice",0)&&q.e===B.f5
else o=l
l=o}if(!l){w=4
break}if(A.dm(m,"game payout:",0))k=B.a.i(B.a.aW(n,B.a.cP(m,"game payout:")+12))
else if(A.dm(m,"game partial:",0)){k=B.a.i(B.a.aW(n,B.a.cP(m,"game partial:")+13))
j=B.a.cP(k,"(")
if(j>0)k=B.a.i(B.a.an(k,0,j))}else if(A.dm(m,"multiplayer payout:",0)){k=B.a.i(B.a.aW(n,B.a.cP(m,"multiplayer payout:")+19))
j=B.a.cP(k,"(")
if(j>0)k=B.a.i(B.a.an(k,0,j))}else k=A.dm(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return A.b(C.tZ(q.c,p,n,d,o,null,q.a,!0),$async$feZ)
case 6:case 4:e.length===s||(0,A.K)(e),++r
w=3
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$feZ,v)},
hN4(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
hJx(d,e,f){return B.d.bg(e,new C.fiI(f,B.a.i(d.toLowerCase())))},
fiz(d){var w
C.fQz(d)
w=d.c4
return A.bj(new A.J(w,new C.fiA(),A.U(w).k("J<1,@>")),!0,x.N)},
hzw(d,e,f){var w,v,u,t,s,r,q=null,p=B.bO,o=B.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aT.toString
u=$.eb().gi2().b
if(u.a===0)t=1
else{new A.bg(u,A.a2(u).k("bg<2>")).gK(0)
u=$.kQ()
s=u.d
t=s==null?u.gfY():s}w=B.k.dF(f*t)
v=new C.f3u(f)
if(J.cU(n,"data:image"))try{u=A.fD(B.cw.aF(B.d.gai(J.lb(n,","))),B.A,w,new C.f3r(v),B.fK,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.cU(n,"supabase://"))return new A.kW(A.a_r(n),new C.f3s(f,e,p,w,v),q,q,x.gh)
return A.ka(n,B.A,w,new C.f3t(v),B.fK,p,!0,e,q,q,f)},
fFH(d,e){return new A.a3(e,e,A.hO(C.hzw(d,e,e),B.ap),null)},
hsd(){var w,v,u=A.a([],x._),t=x.N,s=A.z(D.cUL,x.gm)
for(w=0;w<36;++w){v=B.AI[w]
s.push(new C.qb(v.a,v.b,v.c,v.e,v.f))}return new C.axm(u,A.S(t,t),s)},
fiI:function fiI(d,e){this.a=d
this.b=e},
fiA:function fiA(){},
f3u:function f3u(d){this.a=d},
f3r:function f3r(d){this.a=d},
f3s:function f3s(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f3q:function f3q(d){this.a=d},
f3t:function f3t(d){this.a=d},
aiA:function aiA(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
qb:function qb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
axm:function axm(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
d2T:function d2T(d,e){this.a=d
this.b=e},
d33:function d33(d,e){this.a=d
this.b=e},
d3l:function d3l(){},
d3m:function d3m(d){this.a=d},
d3b:function d3b(d,e){this.a=d
this.b=e},
d3a:function d3a(){},
d3c:function d3c(d){this.a=d},
d39:function d39(){},
d3e:function d3e(d){this.a=d},
d3d:function d3d(){},
d36:function d36(d){this.a=d},
d34:function d34(d){this.a=d},
d35:function d35(d){this.a=d},
d37:function d37(d){this.a=d},
d38:function d38(d){this.a=d},
d2Z:function d2Z(d,e){this.a=d
this.b=e},
d3_:function d3_(d,e){this.a=d
this.b=e},
d2X:function d2X(d){this.a=d},
d2Y:function d2Y(d){this.a=d},
d30:function d30(d){this.a=d},
d31:function d31(d){this.a=d},
d32:function d32(d,e,f){this.a=d
this.b=e
this.c=f},
d2W:function d2W(d,e){this.a=d
this.b=e},
d2V:function d2V(d,e){this.a=d
this.b=e},
d2U:function d2U(d,e){this.a=d
this.b=e},
d3k:function d3k(d){this.a=d},
d3i:function d3i(d,e,f){this.a=d
this.b=e
this.c=f},
d3h:function d3h(d,e,f){this.a=d
this.b=e
this.c=f},
d3g:function d3g(d,e){this.a=d
this.b=e},
d3f:function d3f(){},
d3j:function d3j(d){this.a=d},
aAa:function aAa(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bfJ:function bfJ(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
dG8:function dG8(d){this.a=d},
dG7:function dG7(d){this.a=d},
dG9:function dG9(d){this.a=d},
dG6:function dG6(){},
dGa:function dGa(d,e){this.a=d
this.b=e},
dG5:function dG5(d){this.a=d},
dGb:function dGb(d){this.a=d},
aiz:function aiz(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
axl:function axl(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
d2N:function d2N(d){this.a=d},
d2Q:function d2Q(d){this.a=d},
d2R:function d2R(d){this.a=d},
d2S:function d2S(d){this.a=d},
d2P:function d2P(d,e){this.a=d
this.b=e},
d2O:function d2O(d,e){this.a=d
this.b=e},
aiB:function aiB(d,e,f,g,h,i,j,k,l,m){var _=this
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
axn:function axn(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.Y=_.b3=_.be=_.y2=_.y1=0
_.aC=_.aK=_.aA=_.au=$
_.bF=_.b7=_.aX=_.b_=null
_.aO=!1
_.bP=_.bf=null
_.c4=!1
_.cf=_.cT=""
_.c=_.a=_.by=null},
d4F:function d4F(d,e){this.a=d
this.b=e},
d4I:function d4I(d){this.a=d},
d4J:function d4J(d){this.a=d},
d4K:function d4K(d){this.a=d},
d4L:function d4L(d){this.a=d},
d4M:function d4M(d){this.a=d},
d4G:function d4G(d){this.a=d},
d4H:function d4H(d){this.a=d},
d3V:function d3V(d,e){this.a=d
this.b=e},
d3W:function d3W(d,e){this.a=d
this.b=e},
d4o:function d4o(d){this.a=d},
d4p:function d4p(){},
d4a:function d4a(d,e,f){this.a=d
this.b=e
this.c=f},
d4b:function d4b(d){this.a=d},
d4c:function d4c(d,e,f){this.a=d
this.b=e
this.c=f},
d4d:function d4d(d,e){this.a=d
this.b=e},
d4e:function d4e(){},
d3n:function d3n(d){this.a=d},
d3U:function d3U(d,e){this.a=d
this.b=e},
d4q:function d4q(){},
d4z:function d4z(){},
d4n:function d4n(d){this.a=d},
d4m:function d4m(d){this.a=d},
d3S:function d3S(d){this.a=d},
d3T:function d3T(){},
d4u:function d4u(){},
d4v:function d4v(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d4w:function d4w(d,e,f){this.a=d
this.b=e
this.c=f},
d3o:function d3o(){},
d3p:function d3p(d){this.a=d},
d3q:function d3q(){},
d43:function d43(d,e){this.a=d
this.b=e},
d44:function d44(d,e,f){this.a=d
this.b=e
this.c=f},
d45:function d45(d){this.a=d},
d42:function d42(d){this.a=d},
d4f:function d4f(d){this.a=d},
d4g:function d4g(){},
d4h:function d4h(d){this.a=d},
d4i:function d4i(){},
d4j:function d4j(d){this.a=d},
d4k:function d4k(){},
d4t:function d4t(d,e,f){this.a=d
this.b=e
this.c=f},
d46:function d46(d){this.a=d},
d47:function d47(d,e){this.a=d
this.b=e},
d48:function d48(d){this.a=d},
d49:function d49(d){this.a=d},
d4x:function d4x(d){this.a=d},
d4y:function d4y(d){this.a=d},
d3r:function d3r(d){this.a=d},
d3s:function d3s(d,e){this.a=d
this.b=e},
d3t:function d3t(d){this.a=d},
d3u:function d3u(d){this.a=d},
d4r:function d4r(d,e){this.a=d
this.b=e},
d4s:function d4s(d){this.a=d},
d41:function d41(d,e){this.a=d
this.b=e},
d4l:function d4l(d,e,f){this.a=d
this.b=e
this.c=f},
d4_:function d4_(d,e,f){this.a=d
this.b=e
this.c=f},
d40:function d40(){},
d4A:function d4A(d){this.a=d},
d4B:function d4B(d){this.a=d},
d4C:function d4C(d){this.a=d},
d4E:function d4E(d){this.a=d},
d4D:function d4D(){},
d3Z:function d3Z(d,e,f){this.a=d
this.b=e
this.c=f},
d3Y:function d3Y(d,e){this.a=d
this.b=e},
d3X:function d3X(d,e){this.a=d
this.b=e},
d3H:function d3H(d){this.a=d},
d3G:function d3G(d,e){this.a=d
this.b=e},
d3I:function d3I(d){this.a=d},
d3F:function d3F(d,e){this.a=d
this.b=e},
d3J:function d3J(d){this.a=d},
d3E:function d3E(){},
d3K:function d3K(d){this.a=d},
d3C:function d3C(){},
d3D:function d3D(d){this.a=d},
d3L:function d3L(d){this.a=d},
d3B:function d3B(d,e){this.a=d
this.b=e},
d3M:function d3M(d){this.a=d},
d3A:function d3A(d,e){this.a=d
this.b=e},
d3w:function d3w(d,e){this.a=d
this.b=e},
d3N:function d3N(d){this.a=d},
d3z:function d3z(d,e){this.a=d
this.b=e},
d3O:function d3O(d){this.a=d},
d3y:function d3y(d){this.a=d},
d3v:function d3v(d,e){this.a=d
this.b=e},
d3P:function d3P(d,e,f){this.a=d
this.b=e
this.c=f},
d3Q:function d3Q(d){this.a=d},
d3x:function d3x(){},
d3R:function d3R(d){this.a=d},
ajs:function ajs(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bcV:function bcV(){this.c=this.a=null},
d7X:function d7X(d,e){this.a=d
this.b=e},
d7W:function d7W(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afN:function afN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
auB:function auB(d,e,f,g,h,i,j,k,l,m){var _=this
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
cwS:function cwS(d){this.a=d},
cwc:function cwc(d,e){this.a=d
this.b=e},
cw2:function cw2(d){this.a=d},
cw3:function cw3(d){this.a=d},
cwm:function cwm(d){this.a=d},
cwj:function cwj(d){this.a=d},
cwk:function cwk(d){this.a=d},
cwl:function cwl(d,e,f){this.a=d
this.b=e
this.c=f},
cwe:function cwe(d){this.a=d},
cwd:function cwd(d){this.a=d},
cw4:function cw4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cwh:function cwh(d){this.a=d},
cwg:function cwg(d){this.a=d},
cwf:function cwf(d,e){this.a=d
this.b=e},
cwF:function cwF(d){this.a=d},
cwz:function cwz(d){this.a=d},
cwC:function cwC(d){this.a=d},
cwB:function cwB(){},
cwy:function cwy(d){this.a=d},
cwA:function cwA(d,e){this.a=d
this.b=e},
cwx:function cwx(){},
cw9:function cw9(){},
cwa:function cwa(d,e){this.a=d
this.b=e},
cwb:function cwb(d){this.a=d},
cw7:function cw7(d,e){this.a=d
this.b=e},
cw8:function cw8(d,e){this.a=d
this.b=e},
cwp:function cwp(d,e){this.a=d
this.b=e},
cwi:function cwi(d){this.a=d},
cwq:function cwq(d){this.a=d},
cwr:function cwr(d,e){this.a=d
this.b=e},
cws:function cws(d,e){this.a=d
this.b=e},
cwt:function cwt(d,e){this.a=d
this.b=e},
cwu:function cwu(d,e,f){this.a=d
this.b=e
this.c=f},
cwv:function cwv(d){this.a=d},
cww:function cww(d){this.a=d},
cwn:function cwn(d,e){this.a=d
this.b=e},
cwE:function cwE(d){this.a=d},
cwo:function cwo(d,e){this.a=d
this.b=e},
cwR:function cwR(d){this.a=d},
cwK:function cwK(d){this.a=d},
cwN:function cwN(d){this.a=d},
cwH:function cwH(d,e){this.a=d
this.b=e},
cwL:function cwL(){},
cwM:function cwM(d,e){this.a=d
this.b=e},
cwI:function cwI(d){this.a=d},
cwJ:function cwJ(d){this.a=d},
cwP:function cwP(){},
cwO:function cwO(d){this.a=d},
cwG:function cwG(d,e){this.a=d
this.b=e},
cwQ:function cwQ(d){this.a=d},
cw5:function cw5(d){this.a=d},
cwD:function cwD(d,e){this.a=d
this.b=e},
cw6:function cw6(d,e,f){this.a=d
this.b=e
this.c=f},
aHq:function aHq(){},
aHr:function aHr(){},
aHs:function aHs(){},
aIn:function aIn(){},
bU2(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase())
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
bU3(d){var w=B.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hfN(d,e){var w=d.ax
if(w<0)return!1
return w===e},
aUl(d,e){return C.hfO(d,e)},
hfO(d,e){var w=0,v=A.j(x.di),u,t,s,r,q,p
var $async$aUl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aY6(d),$async$aUl)
case 3:p=g
if(p!=null){try{t=B.Q.aD(0,p.c,null)
if(x.f.b(t)){s=C.fOV(A.Z(t,x.N,x.z))
if(s==null){u=new A.Ew(D.a1t,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bU2(s,e,p.b)){u=new A.Ew(D.aAz,null)
w=1
break}r=p.a?D.dFO:D.aAy
u=new A.Ew(r,s)
w=1
break}}catch(o){}u=new A.Ew(D.a1t,null)
w=1
break}s=C.fOW(d)
if(s==null){u=new A.Ew(D.a1t,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bU2(s,e,null)){u=new A.Ew(D.aAz,null)
w=1
break}u=new A.Ew(D.aAy,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aUl,v)},
fOW(d){var w,v,u,t,s,r
try{w=B.a.i(d)
if(J.cU(w,"\ufeff"))w=J.mh(w,1)
v=!1
if(J.cU(w,"NGMYSNAP1|")){v=!0
w=B.c0.c6(0,B.cw.aF(J.mh(w,10)))}u=B.Q.aD(0,w,null)
if(!x.f.b(u))return null
t=A.Z(u,x.N,x.z)
s=v?C.hfM(t):C.fOV(t)
return s}catch(r){return null}},
hfM(d){var w,v,u,t,s,r,q,p,o,n=new C.bU_(),m=new C.bTZ(),l=d.h(0,"qi")
if(x.f.b(l)){w=A.Z(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new A.Q(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=A.aQ(w.h(0,"d"))
p=new A.uI(v,u,t,s,r,B.k.N(q==null?0:q))}else p=null
v=d.h(0,"qu")
v=J.k(v==null?"User":v)
u=m.$1(d.h(0,"qb"))
t=m.$1(d.h(0,"qp"))
s=J.y(d.h(0,"qc"),!0)
r=n.$1(d.h(0,"qs"))
q=n.$1(d.h(0,"ql"))
n=n.$1(d.h(0,"qe"))
m=m.$1(d.h(0,"qt"))
o=A.aQ(d.h(0,"qn"))
if(o==null)o=0
return new A.a3Q("","",v,u,t,s,r,q,n,m,o,p,B.hW,new A.Q(Date.now(),0,!1),-1)},
fOV(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.y(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.bU1()
v=d.h(0,"activeInvestment")
if(x.f.b(v)){u=A.Z(v,x.N,x.z)
t=u.h(0,"name")
t=J.k(t==null?"":t)
s=A.aQ(u.h(0,"amount"))
if(s==null)s=0
r=A.aQ(u.h(0,"dailyROI"))
if(r==null)r=0
q=w.$1(u.h(0,"purchaseDate"))
if(q==null)q=new A.Q(Date.now(),0,!1)
p=A.aQ(u.h(0,"totalEarned"))
if(p==null)p=0
o=A.aQ(u.h(0,"daysClockedIn"))
n=new A.uI(t,s,r,q,p,B.k.N(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=A.z(new A.e3(J.b4(m,new C.bU0(w),x.eG),t),t.k("G.E"))}else l=A.a([],x.E)
t=d.h(0,"email")
t=J.k(t==null?"":t)
s=d.h(0,"ownerRealEmail")
s=J.k(s==null?"":s)
r=d.h(0,"username")
r=J.k(r==null?"User":r)
q=A.aQ(d.h(0,"accountBalance"))
if(q==null)q=0
p=A.aQ(d.h(0,"totalProfit"))
if(p==null)p=0
o=J.y(d.h(0,"isClockedIn"),!0)
k=w.$1(d.h(0,"clockInStartTime"))
j=w.$1(d.h(0,"lastClockInDate"))
i=w.$1(d.h(0,"lastClockInEarningsDate"))
h=A.aQ(d.h(0,"todayClockInEarned"))
if(h==null)h=0
g=A.aQ(d.h(0,"clockInPenaltyPercent"))
if(g==null)g=0
w=w.$1(d.h(0,"exportedAt"))
if(w==null)w=new A.Q(Date.now(),0,!1)
f=A.aQ(d.h(0,"walletStateRevision"))
f=f==null?null:B.k.N(f)
return new A.a3Q(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
fAh(d,e,f,g){var w=0,v=A.j(x.N),u,t,s,r
var $async$fAh=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:t=A.bTY(d,e,f,g)
s=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(t.a,s,"_")
u=A.F0(A.In(t.eF(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fAh,v)},
U8:function U8(d,e){this.a=d
this.b=e},
bU_:function bU_(){},
bTZ:function bTZ(){},
bU1:function bU1(){},
bU0:function bU0(d){this.a=d},
hCv(d){return A.cf(null,B.aV,!0,null,new C.f6J(),d,null,!0,!0,x.N)},
hCI(d,e,f,g){return A.cf(null,B.aV,!0,null,new C.f7W(g,f,e),d,null,!0,!0,x.y)},
al_:function al_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
azq:function azq(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
doq:function doq(d,e){this.a=d
this.b=e},
dor:function dor(d){this.a=d},
doh:function doh(d,e){this.a=d
this.b=e},
dof:function dof(d){this.a=d},
dop:function dop(d){this.a=d},
doo:function doo(d,e){this.a=d
this.b=e},
doe:function doe(d,e){this.a=d
this.b=e},
dod:function dod(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dog:function dog(d){this.a=d},
don:function don(){},
dol:function dol(d){this.a=d},
dom:function dom(d,e){this.a=d
this.b=e},
doi:function doi(){},
doj:function doj(d,e){this.a=d
this.b=e},
dok:function dok(d,e){this.a=d
this.b=e},
dos:function dos(d){this.a=d},
Zq:function Zq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bo_:function bo_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Y3:function Y3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bfj:function bfj(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dow:function dow(d){this.a=d},
dot:function dot(d,e){this.a=d
this.b=e},
dou:function dou(d,e){this.a=d
this.b=e},
dov:function dov(d){this.a=d},
Y4:function Y4(d){this.a=d},
bfk:function bfk(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dox:function dox(d,e){this.a=d
this.b=e},
f6J:function f6J(){},
f7W:function f7W(d,e,f){this.a=d
this.b=e
this.c=f},
ac9:function ac9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eFU:function eFU(d){this.a=d},
eFV:function eFV(d){this.a=d},
Of:function Of(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Xb:function Xb(d){this.a=d},
awM:function awM(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cZ6:function cZ6(d){this.a=d},
cZ3:function cZ3(){},
cZ4:function cZ4(d){this.a=d},
cZ5:function cZ5(d){this.a=d},
Se(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$Se=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||B.a.i(f).length===0){w=1
break}w=3
return A.b(A.Lh(s),$async$Se)
case 3:t=h
J.cg(t,A.E(["role",e,"text",B.a.i(f),"at",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z))
w=4
return A.b(A.alf(s,t),$async$Se)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Se,v)},
hg5(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=A.U(d).k("a4<1>")
v=A.z(new A.a4(d,new C.bUL(),w),w.k("G.E"))
w=v.length
if(w===0)return""
u=w<=24?v:B.d.fO(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,A.K)(u),++s){r=u[s]
q=J.a6(r)
p=J.y(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+A.t(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
bUL:function bUL(){},
hHU(d){return B.d.dI(B.AI,new C.feT(d),new C.feU()).r},
feT:function feT(d){this.a=d},
feU:function feU(){},
alu:function alu(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bfq:function bfq(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
duS:function duS(d){this.a=d},
duR:function duR(d){this.a=d},
duJ:function duJ(d,e,f){this.a=d
this.b=e
this.c=f},
duO:function duO(d){this.a=d},
duL:function duL(d,e,f){this.a=d
this.b=e
this.c=f},
duP:function duP(d){this.a=d},
duK:function duK(d){this.a=d},
duQ:function duQ(d){this.a=d},
duM:function duM(d){this.a=d},
duN:function duN(d){this.a=d},
fQz(d){var w=A.c16(new A.Q(Date.now(),0,!1)),v=d.bf
if(v===w)return
d.bf=w
d.bP=0
d.c4=A.a([],x.s)},
fQB(d){return A.cf(null,B.x.j(0.82),!0,null,new C.c1b(),d,null,!0,!0,x.H)},
a4t:function a4t(d){this.a=d},
c1b:function c1b(){},
c1a:function c1a(d){this.a=d},
h2q(){var w=new A.Q(Date.now(),0,!1),v=w.bN(A.dB(4-A.mx(w),0,0,0,0,0).a),u=A.bW(A.bw(v),1,4,0,0,0,0,0)
return""+A.bw(v)+"-W"+B.a.aT(B.o.u(1+B.k.bH(B.o.aj(v.bv(A.bW(A.bw(u),A.bB(u),A.bQ(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
eZE(d,e){var w,v,u,t,s,r,q=A.EI(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.q(t,"email")
r=B.a.i(J.k(s==null?"":s).toLowerCase())
if((B.a.c7(r,"+local.ngmy")?B.a.an(r,0,r.length-11):r)===q)return t}t=A.E(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
hxg(d,e){var w,v,u,t,s,r,q,p=A.EI(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.a6(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c7(q,"+local.ngmy")?B.a.an(q,0,q.length-11):q)===p){w=A.aQ(s.h(t,"winsLeft"))
w=w==null?null:B.k.N(w)
return w==null?0:w}}return 0},
hQS(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=A.EI(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.a6(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c7(q,"+local.ngmy")?B.a.an(q,0,q.length-11):q)===n){w=A.aQ(s.h(t,o))
w=w==null?null:B.k.N(w)
p=(w==null?0:w)-1
s.m(t,o,p<0?0:p)
return}}},
hDl(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=A.EI(b5),b2=A.c2r(),b3=C.h2q()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.a6(s)
q=r.h(s,a2)
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.c7(p,a3)?B.a.an(p,0,p.length-11):p)!==b1)continue
q=A.aQ(r.h(s,a4))
o=q==null?a1:B.k.N(q)
if((o==null?0:o)<=0)continue
if(u!=null){r=r.h(s,a5)
r=J.k(r==null?"":r)
q=J.q(u,a5)
q=J.k(q==null?"":q)
if(r===q)r=0
else r=r<q?-1:1
r=r>=0}else r=!0
if(r)u=s}if(u!=null){w=J.a6(u)
v=A.aQ(w.h(u,a4))
v=v==null?a1:B.k.N(v)
w.m(u,a4,(v==null?1:v)-1)
w=A.aQ(w.h(u,"outcome"))
w=w==null?a1:B.k.N(w)
return w==null?1:w}n=new C.f8H()
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
if(l!=null)return l}k=C.eZE(b4,b5)
w=J.a6(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?A.Z(v.a(w.h(k,b0)),r,q):A.S(r,q)
w.m(k,b0,j)
for(w=b4.y,w=new A.cP(w,A.a2(w).k("cP<1,2>")).gag(0);w.C();){i=w.d
h=i.b
g=J.a6(h)
f=g.h(h,"perDay")
if(f==null)f=0
e=g.h(h,"perWeek")
if(e==null)e=0
if(f<=0&&e<=0)continue
h=i.a
d=v.b(j.h(0,h))?A.Z(v.a(j.h(0,h)),r,q):A.S(r,q)
j.m(0,h,d)
if(f>0){g=d.h(0,a7)
if(J.k(g==null?"":g)!==b2){d.m(0,a7,b2)
d.m(0,a6,0)}g=A.aQ(d.h(0,a6))
a0=g==null?a1:B.k.N(g)
if(a0==null)a0=0
if(a0<f){d.m(0,a6,a0+1)
return A.c3(h,a1)}}if(e>0){g=d.h(0,a9)
if(J.k(g==null?"":g)!==b3){d.m(0,a9,b3)
d.m(0,a8,0)}g=A.aQ(d.h(0,a8))
a0=g==null?a1:B.k.N(g)
if(a0==null)a0=0
if(a0<e){d.m(0,a8,a0+1)
return A.c3(h,a1)}}}return a1},
h_b(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[1,2,3],v=d.a,u=0;u<3;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
if(w===0)return 1
t=q[e.aB(w)]
if(t===3&&d.f>=d.e)t=e.he()?1:2
return t},
fFZ(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[-1,-2],v=d.a,u=0;u<2;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
return w===0?-1:q[e.aB(w)]},
hDm(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=A.EI(a3),a1=new C.f8I()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.a6(s)
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
w=J.a6(u)
v=w.h(u,d)
l=J.k(v==null?"":v)
v=o>0?1:0
r=n>0?1:0
q=m>0?1:0
q=new C.f8J(v+r+q>1,l)
k=q.$2(o,"w")
r=k+q.$2(n,"l")
j=a4.aB(r+q.$2(m,"p"))
if(j<k){w.m(u,h,o-1)
w.m(u,d,"w")
w=a2.a
v=w.h(0,"1")
if(v==null)v=10
i=Math.max(1,v)
w=w.h(0,"2")
if(w==null)w=10
return a4.aB(i+Math.max(1,w))<i?1:2}if(j<r){w.m(u,g,n-1)
w.m(u,d,"l")
return C.fFZ(a2,a4)}w.m(u,f,m-1)
w.m(u,d,"p")
return 3},
hDk(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=A.aQ(i.h(0,"wins")),g=h==null?m:B.k.N(h)
if(g==null)g=0
h=A.aQ(i.h(0,"loses"))
w=h==null?m:B.k.N(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.h2q():A.c2r()
t=v+"|"+u
s=C.eZE(d,e)
h=J.a6(s)
r=h.h(s,l)
if(J.k(r==null?"":r)!==t){h.m(s,l,t)
h.m(s,k,0)
h.m(s,j,0)}r=A.aQ(h.h(s,k))
q=r==null?m:B.k.N(r)
if(q==null)q=0
r=A.aQ(h.h(s,j))
p=r==null?m:B.k.N(r)
if(p==null)p=0
o=Math.max(0,g-q)
r=o+Math.max(0,w-p)
if(r<=0)return m
n=f.aB(r)<o
if(n)h.m(s,k,q+1)
else h.m(s,j,p+1)
return n},
hLv(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
d.bcg()
w=C.hDm(d,e,a0)
if(w!=null){if(w===3)++d.f
C.adx(d,e,w)
return w}v=C.hDl(d,e)
if(v!=null){if(v===3)++d.f
C.adx(d,e,v)
return v}u=C.hDk(d,e,a0)
if(u!=null)return new C.flU(d,a0,e).$1(u)
t=C.eZE(d,e)
s=J.a6(t)
r=A.aQ(s.h(t,"winStreak"))
q=r==null?null:B.k.N(r)
if(q==null)q=0
s=A.aQ(s.h(t,"loseStreak"))
p=s==null?null:B.k.N(s)
if(p==null)p=0
o=new C.flW(d,a0)
if(C.hxg(d,e)>0){n=o.$0()
C.hQS(d,e)
C.adx(d,e,n)
return n}if(q>=d.c){n=new C.flV(d,a0).$0()
C.adx(d,e,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.adx(d,e,n)
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
C.adx(d,e,f)
return f},
c2j(d){var w=0,v=A.j(x.y),u
var $async$c2j=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c2i(d),$async$c2j)
case 3:if(f){u=!0
w=1
break}u=A.c2i(d)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c2j,v)},
adx(d,e,f){var w,v="winStreak",u="loseStreak",t=C.eZE(d,e),s=J.a6(t),r=A.aQ(s.h(t,v)),q=r==null?null:B.k.N(r)
if(q==null)q=0
r=A.aQ(s.h(t,u))
w=r==null?null:B.k.N(r)
if(w==null)w=0
if(f>0){s.m(t,v,q+1)
s.m(t,u,0)}else{s.m(t,u,w+1)
s.m(t,v,0)}},
f8H:function f8H(){},
f8I:function f8I(){},
f8J:function f8J(d,e){this.a=d
this.b=e},
flU:function flU(d,e,f){this.a=d
this.b=e
this.c=f},
flW:function flW(d,e){this.a=d
this.b=e},
flV:function flV(d,e){this.a=d
this.b=e},
akZ:function akZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfh:function bfh(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cO$=d
_.aZ$=e
_.c=_.a=null},
do2:function do2(d){this.a=d},
do1:function do1(d){this.a=d},
do3:function do3(d){this.a=d},
do0:function do0(d,e){this.a=d
this.b=e},
aHY:function aHY(){},
LI:function LI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c38:function c38(){},
c37:function c37(){},
amZ:function amZ(d,e,f){this.c=d
this.d=e
this.a=f},
fBi(d,e,f){return A.cf(null,B.x.j(0.88),!0,null,new C.c3A(f,e),d,null,!0,!0,x.H)},
hjR(d){var w,v,u,t,s=B.a.i(d),r=s.split("-")
if(r.length===3){w=A.c3(r[0],null)
v=r[1]
u=A.c3(v,null)
t=A.c3(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?B.i2[u-1]:v)+" "+A.t(t)+", "+A.t(w)}return s},
LQ:function LQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c3A:function c3A(d,e){this.a=d
this.b=e},
bfV:function bfV(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
dN0:function dN0(d,e){this.a=d
this.b=e},
dMX:function dMX(){},
dMY:function dMY(){},
dMZ:function dMZ(d,e){this.a=d
this.b=e},
dN_:function dN_(d,e){this.a=d
this.b=e},
aIw:function aIw(){},
h2m(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.bbQ(new C.fhf(w))
w=w.a
return w==null?null:w.c.a},
h2e(d){$.aT.x1$.push(new C.fh2(d))},
h2y(d){var w=$.rj().gb9(),v=w!=null
if(!v||w.c==null)return
if(C.h2m(w)==="GamePlayScreen")if(v&&w.c!=null&&w.oP())w.eD()},
h2x(d){C.h_h(d,0)},
h_h(d,e){var w,v
if(e>4)return
w=d==null?$.rj().gb9():d
if(w==null||w.c==null)return
v=C.h2m(w)
if(v==="GameCenterScreen")return
if(D.eoc.t(0,v)&&w.oP()){w.eD()
$.aT.x1$.push(new C.f5_(w,e))}},
aMi(d,e,f){return A.ec(A.cj(new C.fiD(e,d,f)),e,!0)},
fhf:function fhf(d){this.a=d},
fh2:function fh2(d){this.a=d},
fh1:function fh1(d){this.a=d},
f5_:function f5_(d,e){this.a=d
this.b=e},
fiD:function fiD(d,e,f){this.a=d
this.b=e
this.c=f},
an2(d,e){var w=0,v=A.j(x.H),u
var $async$an2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=A.Th(e)
w=2
return A.b(A.an1(d,u),$async$an2)
case 2:A.a56(d,u)
return A.h(null,v)}})
return A.i($async$an2,v)},
tZ(d,e,f,g,h,i,j,k){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$tZ=A.e(function(l,m){if(l===1)return A.f(m,v)
for(;;)switch(w){case 0:o=A.xs(g)
if(o.length===0){w=1
break}t=e==null?A.Jt(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return A.b(A.LR(o),$async$tZ)
case 3:q=m
if(j!=null&&j.length!==0&&J.rk(q,new C.c3O(j))){w=1
break}p=e==null?new A.Q(Date.now(),0,!1):e
J.p0(q,0,new A.iZ(B.o.u(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return A.b(C.an2(o,q),$async$tZ)
case 4:if(i==null||r==null||s)C.a58(o).bw(new C.c3P(),x.S).eN(new C.c3Q())
case 1:return A.h(u,v)}})
return A.i($async$tZ,v)},
a58(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a58=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=$.h3v
m=A.xs(d)
if(n==null||m.length===0){w=1
break}w=3
return A.b(A.LR(m),$async$a58)
case 3:t=f
s=J.cA(t)
if(!s.bg(t,new C.c3N())){w=1
break}w=4
return A.b(n.$2(m,t),$async$a58)
case 4:r=f
q=J.a6(r)
if(q.gI(r)!==s.gI(t)){w=1
break}for(p=!1,o=0;o<s.gI(t);++o)if(B.Q.al(s.h(t,o).ac(),null)!==B.Q.al(q.h(r,o).ac(),null))p=!0
w=p?5:6
break
case 5:w=7
return A.b(C.an2(m,r),$async$a58)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$a58,v)},
aWK(d){var w=0,v=A.j(x.S),u,t
var $async$aWK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fBl(d,!1),$async$aWK)
case 3:t=J
w=4
return A.b(C.an3(d,!1),$async$aWK)
case 4:u=t.dE(f,new C.c3M(new A.Q(Date.now(),0,!1).bN(-864e8))).gI(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWK,v)},
an3(d,e){var w=0,v=A.j(x.ac),u,t,s,r
var $async$an3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=A.xs(d)
if(r.length===0){u=A.a([],x.gi)
w=1
break}w=3
return A.b(A.LR(r),$async$an3)
case 3:t=g
s=A.Th(t)
if(s.length!==J.a9(t))C.an2(r,s)
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$an3,v)},
hJr(d){var w,v,u,t=new A.Q(Date.now(),0,!1),s=t.bv(d).a,r=B.o.aj(s,6e7)
if(r<1)return"Just now"
w=B.o.aj(s,36e8)
if(w<1)return""+r+"m ago"
if(B.o.aj(s,864e8)<1)return""+w+"h ago"
v=B.o.H(A.dk(d),12)===0?12:B.o.H(A.dk(d),12)
s=B.i2[A.bB(d)-1]
r=A.bw(d)===A.bw(t)?"":", "+A.bw(d)
w=B.a.aT(B.o.u(A.hf(d)),2,"0")
u=A.dk(d)<12?"AM":"PM"
return s+" "+A.bQ(d)+r+" \xb7 "+v+":"+w+" "+u},
bvZ(d){var w=B.k.aa(Math.abs(d),2).split(".")
return"$"+A.of(w[0],A.ae("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.f3b(),null)+"."+w[1]},
bzt(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$bzt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.an3(e,!1),$async$bzt)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
A.fBl(e,!0).bw(new C.fu0(e),t).bw(new C.fu1(),t).eN(new C.fu2())
w=4
return A.b(A.c1(B.K,null,new C.fu3(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bzt)
case 4:case 1:return A.h(u,v)}})
return A.i($async$bzt,v)},
fEa(d,e,f){var w=null,v=B.c.j(0.05),u=A.m(14),t=A.H(f.j(0.35),B.r,1)
return A.D(A.p(w,A.u(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),B.bA,A.eX(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.h,B.dp)],x.p),B.m,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.hx,w,w,w),1)},
dN1(d,e,f){var w=null,v=B.x.j(0.22),u=A.m(8),t=A.H(f.j(0.28),B.r,1)
return A.D(A.p(w,A.u(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.eX(B.a3,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.h,B.e8)],x.p),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.Kd,w,w,w),1)},
c3O:function c3O(d){this.a=d},
c3P:function c3P(){},
c3Q:function c3Q(){},
c3N:function c3N(){},
c3M:function c3M(d){this.a=d},
f3b:function f3b(){},
fu0:function fu0(d){this.a=d},
fu1:function fu1(){},
fu2:function fu2(){},
fu3:function fu3(d,e){this.a=d
this.b=e},
fu_:function fu_(d,e){this.a=d
this.b=e},
ftZ:function ftZ(d){this.a=d},
ab_:function ab_(d,e){this.c=d
this.a=e},
dN3:function dN3(){},
dN4:function dN4(){},
dN5:function dN5(){},
dN6:function dN6(d){this.a=d},
dN8:function dN8(){},
dN7:function dN7(d){this.a=d},
aaZ:function aaZ(d,e){this.c=d
this.a=e},
dN2:function dN2(){},
bzu(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return A.hN(B.aV,!1,w,d,new C.fu6(j,i,h,g,e,f),null,B.eS,!1,x.H)},
fu6:function fu6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fu4:function fu4(d,e){this.a=d
this.b=e},
fu5:function fu5(d,e){this.a=d
this.b=e},
axo:function axo(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bbE:function bbE(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bq$=e
_.a5$=f
_.c=_.a=null},
d4O:function d4O(d,e){this.a=d
this.b=e},
d4N:function d4N(){},
abo:function abo(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aHt:function aHt(){},
anO(d,e,f){return new C.aXA(f,d,e,null)},
hkv(d){var w=A.a(B.k.aa(d,2).split("."),x.s),v=A.ae("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=A.of(w[0],v,new C.c5o(),null)
return B.d.aG(w,".")},
aWN(){var w=$.rJ
if((w>0?$.rJ=w-1:w)<=0)$.rJ=0},
aeG(d,e){var w=0,v=A.j(x.H),u
var $async$aeG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=$.fIt
w=u!=null?2:3
break
case 2:w=4
return A.b(u.$2(d,e),$async$aeG)
case 4:case 3:return A.h(null,v)}})
return A.i($async$aeG,v)},
aXA:function aXA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c5p:function c5p(d){this.a=d},
c5o:function c5o(){},
Lk:function Lk(){},
bVh:function bVh(){},
fHT(d){if(d>0)return"+"+d
return""+d},
fHg(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fiE(d,e){var w=J.q(e,d)
if(w==null)w=A.fhp().h(0,d)
return w==null?90:w},
f29(d,e){var w,v,u=A.aZ(x.S)
while(u.a<3){w=e.aB(41)-20
if(w===0)continue
u.J(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.J(0,d+v*7+3)
v=A.a([B.o.u(d)],x.s)
B.d.v(v,new A.jC(u,new C.f2a(),u.$ti.k("jC<ck.E,n>")))
B.d.fw(v,e)
return v},
fZi(d,e,f){var w,v,u,t,s=A.aZ(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.J(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.J(0,f[B.o.H(u,5)]+u);++u}t=A.a([d],x.s)
B.d.v(t,A.oK(s,3,s.$ti.k("ck.E")))
B.d.fw(t,e)
return t},
hEH(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=A.a([],x.dA),b2=new A.f0()
b2.dX(42)
for(w=x.s,v=0;v<200;++v){u=B.o.H(v,5)
if(u===0){t=[4,9,16,25,36,49,64,81,121,144,196,256][b2.aB(12)]
s=[2,3,5,6,7,10,11,13][b2.aB(8)]
r=B.k.N(Math.sqrt(t))
q=2+b2.aB(4)
p=B.o.aj(q,2)
if((q&1)===0){o=""+r
n=""+s
m=p===1?o+"\u221a"+n:o+"x^"+p+"\u221a"+n}else{o=""+r
n=""+s
m=p===0?o+"\u221a"+n+"x":o+"x^"+p+"\u221a"+n+"x"}o=""+p
n=""+s
l=""+r+"x^"
b1.push(new C.H3("Simplify \u221a("+t*s+"x^"+q+")",m,C.fZi(m,b2,A.a([""+(r+1)+"x^"+o+"\u221a"+n,A.t(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aB(35)
j=b2.aB(4)===0?1:2+b2.aB(4)
i=b2.aB(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.H3("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.f29(k,b2)))}else if(u===2){k=2+b2.aB(18)
j=b2.aB(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aB(10)+2
b1.push(new C.H3("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.f29(g,b2)))}else b1.push(new C.H3("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.f29(k,b2)))}else if(u===3){e=b2.aB(11)-5
o=b2.aB(11)
n=b2.aB(11)
d=b2.aB(11)+2
l=b2.he()?1:-1
a0=e+l*(b2.aB(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===B.k.kk(a4)?""+B.k.N(a4):"\u221a"+a3
b1.push(new C.H3("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.f29(a0,b2)))}else{a6=2+b2.aB(10)
a7=a6+2+b2.aB(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.H3("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.fZi(m,b2,A.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
hP9(d){var w,v,u=x.s,t=A.a(d.split(""),u)
if(t.length<4)return new A.dx(A.a(d.split(""),u),x.bJ).fM(0)
for(w=0;w<12;++w){B.d.fw(t,B.cB)
v=B.d.fM(t)
if(v!==d)return v}return new A.dx(t,x.bJ).fM(0)},
H3:function H3(d,e,f){this.a=d
this.b=e
this.c=f},
f2a:function f2a(){},
amr:function amr(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAb:function aAb(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
dGe:function dGe(d){this.a=d},
dGf:function dGf(d){this.a=d},
dGg:function dGg(d){this.a=d},
dGh:function dGh(d,e){this.a=d
this.b=e},
dGi:function dGi(d,e){this.a=d
this.b=e},
dGj:function dGj(d){this.a=d},
dGd:function dGd(d){this.a=d},
dGk:function dGk(d){this.a=d},
dGc:function dGc(d){this.a=d},
dGn:function dGn(d){this.a=d},
dGo:function dGo(d){this.a=d},
dGm:function dGm(d,e){this.a=d
this.b=e},
dGl:function dGl(d,e){this.a=d
this.b=e},
an4:function an4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAs:function aAs(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
dNq:function dNq(d,e,f){this.a=d
this.b=e
this.c=f},
dNr:function dNr(d){this.a=d},
dNm:function dNm(d){this.a=d},
dNo:function dNo(d,e){this.a=d
this.b=e},
dNn:function dNn(d,e){this.a=d
this.b=e},
dNp:function dNp(d,e){this.a=d
this.b=e},
dNl:function dNl(d){this.a=d},
hgI(d){var w,v,u,t,s,r,q,p=new A.Q(Date.now(),0,!1),o=p.bN(36e8)
try{w=d.h(0,"start")
p=A.mn(J.k(w==null?"":w)).bQ()
w=d.h(0,"end")
o=A.mn(J.k(w==null?"":w)).bQ()}catch(v){}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"title")
u=J.k(u==null?"Event":u)
t=p
s=o
r=d.h(0,"notes")
r=r==null?null:J.k(r)
q=d.h(0,"location")
return new C.qJ(w,u,t,s,r,q==null?null:J.k(q))},
a5e(d){var w=0,v=A.j(x.ck),u,t,s,r,q,p,o
var $async$a5e=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.b)
w=1
break}w=3
return A.b(A.ax(),$async$a5e)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aS(J.q(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.b)
w=1
break}try{s=B.Q.aD(0,t,null)
if(!x.j.b(s)){p=A.a([],x.b)
u=p
w=1
break}p=J.d4(s,x.f)
p=A.cz(p,new C.c4f(),p.$ti.k("G.E"),x.b1)
p=A.z(p,A.a2(p).k("G.E"))
B.d.aY(p,new C.c4g())
u=p
w=1
break}catch(n){r=A.a5(n)
$.al.$1("[calendar-memory] load: "+A.t(r))
p=A.a([],x.b)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$a5e,v)},
anm(d,e){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$anm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.a5e(d),$async$anm)
case 2:r=g
q=J.cA(r)
q.bm(r,new C.c4c(e))
q.J(r,e)
q.aY(r,new C.c4d())
w=3
return A.b(A.ax(),$async$anm)
case 3:u=g
t=B.a.i(d.toLowerCase())
q=q.k_(r,80)
s=q.$ti.k("J<ai.E,a1<n,@>>")
q=A.z(new A.J(q,new C.c4e(),s),s.k("ai.E"))
w=4
return A.b(u.ap("String","ngmy_helper_calendar_v1_"+t,B.Q.al(q,null)),$async$anm)
case 4:return A.h(null,v)}})
return A.i($async$anm,v)},
hk3(d,e){var w=Date.now(),v=new A.Q(w,0,!1).bQ()
w=J.dE(d,new C.c4h(v,v.bN(A.dB(14,0,0,0,0,0).a)))
w=A.z(w,w.$ti.k("G.E"))
return w},
fR7(d){var w,v,u,t,s,r,q,p,o,n,m=C.hk3(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=A.de(m,0,A.dJ(20,"count",x.S),A.U(m).c),v=w.$ti,w=new A.bU(w,w.gI(0),v.k("bU<ai.E>")),v=v.k("ai.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=B.o.H(A.dk(s),12)===0?12:B.o.H(A.dk(s),12)
q=A.dk(s)>=12?"PM":"AM"
p=B.a.aT(B.o.u(A.hf(s)),2,"0")
o=t.f
if((o==null?null:B.a.i(o).length!==0)===!0){o.toString
n=" @ "+B.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+A.bB(s)+"/"+A.bQ(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&B.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return B.a.i(u.charCodeAt(0)==0?u:u)},
qJ:function qJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c4f:function c4f(){},
c4g:function c4g(){},
c4c:function c4c(d){this.a=d},
c4d:function c4d(){},
c4e:function c4e(){},
c4h:function c4h(d,e){this.a=d
this.b=e},
hgJ(d){var w,v,u,t,s,r,q,p,o=null,n=new A.Q(Date.now(),0,!1)
try{w=d.h(0,"when")
n=A.mn(J.k(w==null?"":w)).bQ()}catch(v){}w=d.h(0,"id")
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
fPt(d){var w=B.o.H(A.dk(d),12)===0?12:B.o.H(A.dk(d),12),v=A.dk(d)>=12?"PM":"AM"
return""+A.bB(d)+"/"+A.bQ(d)+" "+w+":"+B.a.aT(B.o.u(A.hf(d)),2,"0")+" "+v},
Sr(d){var w=0,v=A.j(x.e),u,t,s,r,q,p,o
var $async$Sr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.x)
w=1
break}w=3
return A.b(A.ax(),$async$Sr)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aS(J.q(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.x)
w=1
break}try{s=B.Q.aD(0,t,null)
if(!x.j.b(s)){p=A.a([],x.x)
u=p
w=1
break}p=J.d4(s,x.f)
p=A.cz(p,new C.bXF(),p.$ti.k("G.E"),x.Q)
p=A.z(p,A.a2(p).k("G.E"))
B.d.aY(p,new C.bXG())
u=p
w=1
break}catch(n){r=A.a5(n)
$.al.$1("[call-memory] load: "+A.t(r))
p=A.a([],x.x)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Sr,v)},
aV7(d,e){var w=0,v=A.j(x.H),u,t,s,r
var $async$aV7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$aV7)
case 2:u=g
t=A.de(e,0,A.dJ(120,"count",x.S),A.U(e).c).dA(0)
s=B.a.i(d.toLowerCase())
r=A.U(t).k("J<1,a1<n,@>>")
r=A.z(new A.J(t,new C.bXD(),r),r.k("ai.E"))
w=3
return A.b(u.ap("String","ngmy_call_memory_v1_"+s,B.Q.al(r,null)),$async$aV7)
case 3:return A.h(null,v)}})
return A.i($async$aV7,v)},
aV8(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$aV8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:p=A.S(x.N,x.Q)
o=J
w=2
return A.b(C.Sr(d),$async$aV8)
case 2:u=o.aV(g)
case 3:if(!u.C()){w=4
break}t=u.gT(u)
p.m(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.m(0,r.a,r)}u=p.$ti.k("bg<2>")
q=A.z(new A.bg(p,u),u.k("G.E"))
B.d.aY(q,new C.bXE())
w=5
return A.b(C.aV7(d,q),$async$aV8)
case 5:return A.h(null,v)}})
return A.i($async$aV8,v)},
bXH(d,e){var w=0,v=A.j(x.e),u,t,s
var $async$bXH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Sr(d),$async$bXH)
case 3:t=s.dE(g,new C.bXI(e.bN(-72e8),e.bN(72e8)))
t=A.z(t,t.$ti.k("G.E"))
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bXH,v)},
fPu(d,e){var w,v,u,t,s,r=J.a6(d)
if(r.gah(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.k_(d,e),v=w.$ti,w=new A.bU(w,w.gI(0),v.k("bU<ai.E>")),v=v.k("ai.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gTy()+"\n"
t=t.f
if(t!=null&&B.a.i(t).length!==0){s=B.a.i(t)
u+="  Voicemail/text: "+(s.length>180?B.a.an(s,0,177)+"\u2026":s)+"\n"}}r=r.gI(d)>e?u+("\u2026 and "+(r.gI(d)-e)+" more\n"):u
return B.a.i(r.charCodeAt(0)==0?r:r)},
hLf(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new A.Q(q,0,!1).bQ(),o=d.toLowerCase(),n=A.bW(A.bw(p),A.bB(p),A.bQ(p),0,0,0,0,0)
if(B.a.t(o,"yesterday"))n=n.bN(r)
else if(!B.a.t(o,"today")&&B.a.t(o,"last night"))n=n.bN(r)
w=A.ae("\\b(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!0,!1,!1,!1).cz(o)
if(w==null)return null
q=w.b
v=q[1]
u=A.c3(v==null?"":v,null)
if(u==null)u=0
v=q[2]
t=A.c3(v==null?"":v,null)
if(t==null)t=0
s=q[3]
if(s==="pm"&&u<12)u+=12
if(s==="am"&&u===12)u=0
q=s==null
v=!1
if(q)if(u<=7)v=B.a.t(o,"am")||B.a.t(o,"morning")||B.a.t(o,"night")
if(v)if(B.a.t(o,"pm")||B.a.t(o,"afternoon")||B.a.t(o,"evening"))u=u<12?u+12:u
if(q&&B.a.t(o,"pm"))u=u<12?u+12:u
return A.bW(A.bw(n),A.bB(n),A.bQ(n),u,t,0,0,0)},
h3V(d){var w=A.ae("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
qK:function qK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bXF:function bXF(){},
bXG:function bXG(){},
bXD:function bXD(){},
bXE:function bXE(){},
bXI:function bXI(d,e){this.a=d
this.b=e},
fRa(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.ll(t,w,v,u==null?null:J.k(u))},
hk9(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b4(v,new C.c4n(),x.bP)
v=A.z(v,v.$ti.k("ai.E"))}if(v==null)v=D.cQ9
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.y(d.h(0,"printable"),!0)
return new C.i9(r,w,v,u,t,typeof d.h(0,s)=="number"?B.k.N(A.fa(d.h(0,s))):0)},
hk8(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.hxs(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?B.k.N(A.fa(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?B.k.N(A.fa(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b4(s,new C.c4l(),x.u)
s=A.z(s,s.$ti.k("ai.E"))}return new C.hW(p,w,v,u,s==null?D.arT:s,t)},
hxt(d){var w,v,u,t=A.E([F.Ak,"investments",B.oc,"games",B.jH,"loans",B.hm,"withdrawals",B.kC,"deposits",B.kD,"civic",B.kB,"store",B.qp,"jobs",B.m4,"refunds",B.eI,"account",B.lu,"music",B.x_,"help"],x.dk,x.N)
for(w=new A.cP(t,A.a2(t).k("cP<1,2>")).gag(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
hxs(d){switch(d){case"investments":return F.Ak
case"games":return B.oc
case"loans":return B.jH
case"withdrawals":return B.hm
case"deposits":return B.kC
case"civic":return B.kD
case"store":return B.kB
case"jobs":return B.qp
case"refunds":return B.m4
case"account":return B.eI
case"music":return B.lu
default:return B.x_}},
mE(d){var w=A.a([new C.ll("text",d,null,null)],x.a)
return w},
aeD(){var w=null,v=x.v
return A.a([new C.hW("investments","Investments",F.Ak,4280468830,A.a([new C.i9("inv1","How do I buy an investment plan?",C.mE("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.i9("inv2","When do I get paid from my plan?",C.mE("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.i9("inv3","Can I have more than one plan?",C.mE("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.hW("games","Games",B.oc,4287323382,A.a([new C.i9("gam1","How do NGMY games work?",C.mE("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.i9("gam2","Why did my game payout change?",C.mE("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.hW("loans","Loans",B.jH,4294538006,A.a([new C.i9("loan1","How do I apply for a loan?",C.mE("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.i9("loan2","What is the repayment period?",C.mE("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.hW("withdrawals","Withdrawals",B.hm,4282090230,A.a([new C.i9("wd1","How do I withdraw money?",C.mE("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.i9("wd2","Why is my withdrawal pending?",C.mE("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.hW("deposits","Deposits",B.kC,4279548070,A.a([new C.i9("dep1","How do I deposit funds?",C.mE("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.i9("dep2","How long until my deposit posts?",C.mE("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.hW("civic","Civic Registry",B.kD,4289170426,A.a([new C.i9("civ1","What is Civic Registry?",C.mE("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.i9("civ2","What does \u201cmissed\u201d mean on my profile?",C.mE("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.hW("store","NGMY Store",B.kB,4293675161,A.a([new C.i9("sto1","How do I buy from NGMY Store?",C.mE("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.i9("sto2","How do I sell in the store?",C.mE("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.hW("jobs","Jobs & Creator",B.qp,4293548044,A.a([new C.i9("job1","How do I find jobs?",C.mE("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.i9("job2","How do I post a job?",C.mE("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.hW("refunds","Refunds",B.m4,4293870660,A.a([new C.i9("ref1","Can I get a refund?",C.mE("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.i9("ref2","How long do refunds take?",C.mE("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.hW("account","Account",B.eI,4281908728,A.a([new C.i9("acc1","How do I update my profile?",C.mE("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.i9("acc2","I forgot my password \u2014 what now?",C.mE("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.hW("music","Music Charts",B.lu,4290807036,A.a([new C.i9("mus1","What are Music Charts?",C.mE("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.i9("mus2","How do I upload music?",C.mE("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.hW("help","Help Center",B.x_,4279080072,A.a([new C.i9("hlp1","Where can I get live help?",C.mE("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.i9("hlp2","How do daily Helper limits work?",C.mE("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
fRb(d){var w,v=J.a6(d),u=v.gah(d)
if(u)return C.aeD()
v=v.di(d,new C.c4q(),x.i)
w=A.z(v,v.$ti.k("ai.E"))
B.d.aY(w,new C.c4r())
return w.length===0?C.aeD():w},
fRc(d){var w=J.b4(d,new C.c4s(),x.P)
w=A.z(w,w.$ti.k("ai.E"))
return A.E(["categories",w,"savedAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z)},
ano(d){return C.hka(d)},
hka(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q,p
var $async$ano=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.ax(),$async$ano)
case 6:s=f
w=7
return A.b(s.ap("String","ngmy_helper_kb_v1",B.Q.al(C.fRc(d),null)),$async$ano)
case 7:u=1
w=5
break
case 3:u=2
p=t.pop()
r=A.a5(p)
$.al.$1("[helper kb] local save: "+A.t(r))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$ano,v)},
c4p(){var w=0,v=A.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$c4p=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ax(),$async$c4p)
case 7:r=e
q=A.aS(J.q(r.a,"ngmy_helper_kb_v1"))
if(q==null||B.a.i(q).length===0){l=C.aeD()
u=l
w=1
break}p=B.Q.aD(0,q,null)
if(!x.f.b(p)){l=C.aeD()
u=l
w=1
break}o=J.q(p,"categories")
if(!x.j.b(o)){l=C.aeD()
u=l
w=1
break}n=C.fRb(o)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
m=A.a5(j)
$.al.$1("[helper kb] local load: "+A.t(m))
l=C.aeD()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$c4p,v)},
aX8(){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$aX8=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.bX(),$async$aX8)
case 7:if(!e){u=null
w=1
break}w=8
return A.b(A.eT("ngmy_helper_kb",null,!1,B.bD),$async$aX8)
case 8:q=e
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a5(o)
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
return A.i($async$aX8,v)},
aX9(d){return C.hkb(d)},
hkb(d){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aX9=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.bX(),$async$aX9)
case 7:if(!f){u=!1
w=1
break}w=8
return A.b(A.hs("ngmy_helper_kb",d,!1,!1,B.cz,null),$async$aX9)
case 8:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a5(o)
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
return A.i($async$aX9,v)},
anp(){var w=0,v=A.j(x.I),u,t,s,r
var $async$anp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c4p(),$async$anp)
case 3:s=e
w=4
return A.b(C.aX8(),$async$anp)
case 4:r=e
w=r!=null&&x.j.b(J.q(r,"categories"))?5:6
break
case 5:t=C.fRb(x.j.a(J.q(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return A.b(C.ano(t),$async$anp)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anp,v)},
c4t(d){var w=0,v=A.j(x.y),u
var $async$c4t=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ano(d),$async$c4t)
case 3:u=C.aX9(C.fRc(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c4t,v)},
ll:function ll(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
i9:function i9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c4o:function c4o(){},
c4n:function c4n(){},
hW:function hW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c4m:function c4m(){},
c4l:function c4l(){},
c4q:function c4q(){},
c4r:function c4r(){},
c4s:function c4s(){},
b5k:function b5k(d){this.a=d},
To:function To(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAE:function aAE(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
dR5:function dR5(){},
dR6:function dR6(){},
dR_:function dR_(d){this.a=d},
dR0:function dR0(d){this.a=d},
dQJ:function dQJ(d,e){this.a=d
this.b=e},
dQK:function dQK(d){this.a=d},
dQL:function dQL(d,e,f){this.a=d
this.b=e
this.c=f},
dQI:function dQI(d){this.a=d},
dQX:function dQX(d,e){this.a=d
this.b=e},
dQY:function dQY(d,e){this.a=d
this.b=e},
dQZ:function dQZ(d){this.a=d},
dQR:function dQR(d){this.a=d},
dQS:function dQS(d,e,f){this.a=d
this.b=e
this.c=f},
dQQ:function dQQ(d,e){this.a=d
this.b=e},
dQW:function dQW(d,e,f){this.a=d
this.b=e
this.c=f},
dQV:function dQV(d,e){this.a=d
this.b=e},
dQU:function dQU(d,e){this.a=d
this.b=e},
dQT:function dQT(d,e,f){this.a=d
this.b=e
this.c=f},
dQN:function dQN(d){this.a=d},
dQM:function dQM(d){this.a=d},
dQO:function dQO(d,e){this.a=d
this.b=e},
dQP:function dQP(d){this.a=d},
dR4:function dR4(d,e){this.a=d
this.b=e},
dR3:function dR3(d,e){this.a=d
this.b=e},
dR2:function dR2(){},
dR1:function dR1(d,e){this.a=d
this.b=e},
NH:function NH(d,e){this.c=d
this.a=e},
b78:function b78(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cFi:function cFi(d){this.a=d},
cFh:function cFh(d,e){this.a=d
this.b=e},
cFf:function cFf(d,e){this.a=d
this.b=e},
cFj:function cFj(d){this.a=d},
cFg:function cFg(d,e){this.a=d
this.b=e},
cFe:function cFe(d,e){this.a=d
this.b=e},
cFk:function cFk(d){this.a=d},
cFl:function cFl(d,e){this.a=d
this.b=e},
YR:function YR(d,e,f){this.c=d
this.d=e
this.a=f},
aCx:function aCx(){this.d=$
this.c=this.a=null},
eAZ:function eAZ(d,e){this.a=d
this.b=e},
eB_:function eB_(d){this.a=d},
eB5:function eB5(){},
eB4:function eB4(d,e){this.a=d
this.b=e},
eB3:function eB3(d,e){this.a=d
this.b=e},
eB0:function eB0(d,e){this.a=d
this.b=e},
eB2:function eB2(d,e,f){this.a=d
this.b=e
this.c=f},
eB1:function eB1(d,e,f){this.a=d
this.b=e
this.c=f},
YQ:function YQ(d,e){this.c=d
this.a=e},
aCw:function aCw(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
eAV:function eAV(d,e){this.a=d
this.b=e},
eAT:function eAT(d){this.a=d},
eAU:function eAU(d,e){this.a=d
this.b=e},
eAX:function eAX(d,e){this.a=d
this.b=e},
eAY:function eAY(d){this.a=d},
eAW:function eAW(d,e){this.a=d
this.b=e},
hk6(d){var w=new A.J(d,new C.c4i(),A.U(d).k("J<1,n>")).aG(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
c4j(d,e,f){return C.hk7(d,e,f)},
hk7(b4,b5,b6){var w=0,v=A.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$c4j=A.e(function(b8,b9){if(b8===1)return A.f(b9,v)
for(;;)switch(w){case 0:b3=B.a.i(b5)
if(b3.length===0){u=new A.IC([A.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return A.b(A.qh(A.mH(b3),C.hk6(b6)+"\n\nAdmin instruction:\n"+b4,B.h8,null),$async$c4j)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=B.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new A.IC([A.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=B.a.i(a3)
if(J.cU(s,"```"))s=B.a.e1(J.fLd(s,A.ae("^```(?:json)?\\s*",!0,!1,!1,!1),""),A.ae("\\s*```$",!0,!1,!1,!1),"")
r=B.Q.aD(0,s,null)
a3=x.f
if(!a3.b(r)){a3=A.a([],x.Y)
u=new A.IC([a3,"AI response was not valid JSON.",null,null])
w=1
break}a4=x.N
a5=x.z
q=A.Z(r,a4,a5)
a6=J.q(q,"message")
p=a6==null?null:J.k(a6)
a6=J.q(q,"replaceCategoryId")
o=a6==null?null:J.k(a6)
n=J.q(q,"categories")
a6=x.j
if(!a6.b(n)||J.ci(n)){a3=A.a([],x.Y)
u=new A.IC([a3,"AI did not return any categories.",p,o])
w=1
break}m=A.a([],x.Y)
l=b6.length
for(k=0,a7=x.v,a8=x.a;k<J.a9(n);++k){j=A.Z(a3.a(J.q(n,k)),a4,a5)
i="cat_ai_"+1000*Date.now()+"_"+A.t(k)
h=J.q(j,"questions")
g=A.a([],a7)
if(a6.b(h))for(f=0;f<J.a9(h);++f){e=A.Z(a3.a(J.q(h,f)),a4,a5)
d=J.q(e,"answerBlocks")
a0=A.a([],a8)
if(a6.b(d))for(a9=J.aV(d);a9.C();){a1=a9.gT(a9)
J.cg(a0,C.fRa(A.Z(a3.a(a1),a4,a5)))}if(J.a9(a0)===0){a9=J.q(e,"answer")
J.cg(a0,new C.ll("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=A.t(f)
b1=J.q(e,"question")
J.cg(g,new C.i9("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.y(J.q(e,"printable"),!0),f))}a9=J.q(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.q(j,"iconKey")
b0=C.hk5(J.k(b0==null?"help":b0))
b1=typeof J.q(j,"colorValue")=="number"?B.k.N(A.fa(J.q(j,"colorValue"))):4284773515
J.cg(m,new C.hW(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.a9(a3)!==0)===!0?o:null
u=new A.IC([m,null,p,a3])
w=1
break}catch(b7){a2=A.a5(b7)
a3=A.t(a2)
a4=A.a([],x.Y)
u=new A.IC([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c4j,v)},
hk5(d){switch(d){case"investments":return F.Ak
case"games":return B.oc
case"loans":return B.jH
case"withdrawals":return B.hm
case"deposits":return B.kC
case"civic":return B.kD
case"store":return B.kB
case"jobs":return B.qp
case"refunds":return B.m4
case"account":return B.eI
case"music":return B.lu
default:return B.x_}},
hJN(d,e,f){var w,v,u,t=A.bj(d,!0,x.i)
if(f!=null&&J.a9(e)===1){w=B.d.bi(t,new C.fj0(f))
if(w>=0){t[w]=J.fh(e).czu(f,t[w].f)
return t}}B.d.v(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].b6A(u)
return t},
c4i:function c4i(){},
fj0:function fj0(d){this.a=d},
cWK:function cWK(d){this.a=d},
Tp:function Tp(d,e,f){this.c=d
this.d=e
this.a=f},
aAG:function aAG(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
dRG:function dRG(){},
dRm:function dRm(d,e){this.a=d
this.b=e},
dRr:function dRr(d,e){this.a=d
this.b=e},
dRp:function dRp(d,e){this.a=d
this.b=e},
dRn:function dRn(d){this.a=d},
dRo:function dRo(d){this.a=d},
dRq:function dRq(d,e,f){this.a=d
this.b=e
this.c=f},
dRi:function dRi(){},
dRj:function dRj(){},
dRk:function dRk(){},
dRl:function dRl(){},
dRw:function dRw(d,e){this.a=d
this.b=e},
dRx:function dRx(d){this.a=d},
dRy:function dRy(d){this.a=d},
dRz:function dRz(d){this.a=d},
dRA:function dRA(d){this.a=d},
dRB:function dRB(d){this.a=d},
dRC:function dRC(){},
dRD:function dRD(d){this.a=d},
dRv:function dRv(d){this.a=d},
dRE:function dRE(d){this.a=d},
dRu:function dRu(d){this.a=d},
dRF:function dRF(d,e){this.a=d
this.b=e},
dRt:function dRt(d,e){this.a=d
this.b=e},
dRs:function dRs(d,e){this.a=d
this.b=e},
hrS(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.a([],x.eO)
for(w=A.ae("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kv(0,d),w=new A.I6(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=B.a.an(d,t,q)
o=u?B.cp:B.aI
m.push(new A.es(p,n,n,B.cU,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?B.cp:B.aI
m.push(new A.es(p,n,n,B.cU,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,B.I,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?B.cp:B.aI
m.push(new A.es(p,n,n,B.cU,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,B.cx,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?B.cp:B.aI
m.push(new A.es(p,n,n,B.cU,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,B.mf,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=B.a.aW(d,t)
m.push(A.dq(n,n,n,n,n,n,n,n,n,A.l(n,n,u?B.cp:B.aI,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return A.rS(n,n,n,B.eB,n,n,!0,n,A.dq(m,n,n,n,n,n,n,n,n,n,n),B.a6,n,n,B.dc,B.cm)},
d8P:function d8P(d){this.a=d},
ayf:function ayf(d,e){this.a=d
this.b=e},
ann:function ann(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAF:function aAF(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
dRf:function dRf(d,e){this.a=d
this.b=e},
dRg:function dRg(d,e){this.a=d
this.b=e},
dR7:function dR7(d){this.a=d},
dR8:function dR8(d){this.a=d},
dRh:function dRh(){},
dRa:function dRa(d,e){this.a=d
this.b=e},
dR9:function dR9(d,e){this.a=d
this.b=e},
dRc:function dRc(){},
dRe:function dRe(){},
dRd:function dRd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRb:function dRb(d,e){this.a=d
this.b=e},
ayd:function ayd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a9y:function a9y(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aX7:function aX7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c4k:function c4k(d){this.a=d},
a9q:function a9q(d,e,f){this.c=d
this.d=e
this.a=f},
cyZ:function cyZ(d){this.a=d},
cz_:function cz_(){},
cz0:function cz0(d){this.a=d},
aye:function aye(d,e,f){this.c=d
this.d=e
this.a=f},
bd8:function bd8(){this.c=this.a=this.d=null},
d8Q:function d8Q(d,e){this.a=d
this.b=e},
d8S:function d8S(d,e){this.a=d
this.b=e},
d8R:function d8R(d){this.a=d},
hlC(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
hlD(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
hlB(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
fZd(d){var w
if(new A.a4(A.a(d.split("\n"),x.s),new C.f1V(),x.cc).gI(0)<3)w=d.length>100&&B.a.t(d,"\n")
else w=!0
return w},
hKV(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.hlB(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
ao9:function ao9(d,e){this.a=d
this.b=e},
H8:function H8(d,e){this.a=d
this.b=e},
qQ:function qQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f1V:function f1V(){},
anq:function anq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAH:function aAH(d,e,f,g,h,i,j){var _=this
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
dRU:function dRU(d,e){this.a=d
this.b=e},
dRL:function dRL(d){this.a=d},
dRN:function dRN(){},
dRO:function dRO(d,e){this.a=d
this.b=e},
dRP:function dRP(d){this.a=d},
dRQ:function dRQ(){},
dRR:function dRR(d,e){this.a=d
this.b=e},
dRS:function dRS(d){this.a=d},
dRT:function dRT(d){this.a=d},
dRM:function dRM(d,e){this.a=d
this.b=e},
dS0:function dS0(d,e){this.a=d
this.b=e},
dRY:function dRY(){},
dRZ:function dRZ(d,e){this.a=d
this.b=e},
dS_:function dS_(d,e){this.a=d
this.b=e},
dRX:function dRX(d,e){this.a=d
this.b=e},
dRW:function dRW(d,e){this.a=d
this.b=e},
dS2:function dS2(d){this.a=d},
dS1:function dS1(d){this.a=d},
dRK:function dRK(d,e){this.a=d
this.b=e},
dRJ:function dRJ(d,e){this.a=d
this.b=e},
dS3:function dS3(d,e){this.a=d
this.b=e},
dRV:function dRV(d,e){this.a=d
this.b=e},
dRH:function dRH(d){this.a=d},
dRI:function dRI(d){this.a=d},
aIE:function aIE(){},
c4v(d){var w=0,v=A.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$c4v=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=D.P_
w=1
break}w=3
return A.b(A.ax(),$async$c4v)
case 3:r=f
q=B.a.i(d.toLowerCase())
t=A.aS(J.q(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.P_
w=1
break}try{q=A.Z(x.f.a(B.Q.aD(0,t,null)),x.N,x.z)
p=J.y(q.h(0,"contacts"),!0)
o=J.y(q.h(0,"calendar"),!0)
n=J.y(q.h(0,"calls"),!0)
q=J.y(q.h(0,"allGrantedOnce"),!0)
u=new C.Tq(p,o,n,q)
w=1
break}catch(l){s=A.a5(l)
$.al.$1("[helper-perms] load: "+A.t(s))
u=D.P_
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c4v,v)},
anr(d,e){var w=0,v=A.j(x.H),u
var $async$anr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){w=1
break}w=4
return A.b(A.ax(),$async$anr)
case 4:w=3
return A.b(g.ap("String","ngmy_helper_permissions_v1_"+B.a.i(d.toLowerCase()),B.Q.al(e.ac(),null)),$async$anr)
case 3:case 1:return A.h(u,v)}})
return A.i($async$anr,v)},
c4u(d){var w=0,v=A.j(x.gp),u,t
var $async$c4u=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=new C.Tq(!0,!0,!0,!0)
w=3
return A.b(C.anr(d,t),$async$c4u)
case 3:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c4u,v)},
h3W(d){var w=B.a.i(d.toLowerCase()),v=A.ae("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=A.ae("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=A.ae("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=A.ae("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
h3U(d){var w=A.ae("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
Tq:function Tq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bzA(d,e,f,g,h){var w=0,v=A.j(x.H),u,t,s
var $async$bzA=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return A.b(C.aX3(h),$async$bzA)
case 3:if(j){w=1
break}w=4
return A.b(C.anj(h),$async$bzA)
case 4:if(d.e==null){w=1
break}t=A.pZ(d,!0)
t.toString
s=A.dc()
s.b=A.nW(new C.fuR(g,e,f,s),!1,!1)
t.lm(0,s.b8())
case 1:return A.h(u,v)}})
return A.i($async$bzA,v)},
fuR:function fuR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fuQ:function fuQ(d){this.a=d},
XA:function XA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
axH:function axH(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cO$=d
_.aZ$=e
_.c=_.a=null},
d6p:function d6p(d){this.a=d},
d6q:function d6q(d,e,f){this.a=d
this.b=e
this.c=f},
d6v:function d6v(){},
d6u:function d6u(d){this.a=d},
d6r:function d6r(d){this.a=d},
d6s:function d6s(){},
d6t:function d6t(d){this.a=d},
aHy:function aHy(){},
hl4(d){var w=B.a.i(d),v=A.ae("[^A-Z0-9]",!0,!1,!1,!1),u=A.aJ(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
hl3(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.ae("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.ae("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
anW(d){return C.hl1(d)},
hl1(d){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$anW=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.eT("ngmy_local_deposit_qr_v1_"+B.a.i(d),null,!1,B.bD),$async$anW)
case 7:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a5(o)
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
return A.i($async$anW,v)},
aXY(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aXY=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.hl4(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.eT("ngmy_local_deposit_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bD),$async$aXY)
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
q=A.a5(m)
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
return A.i($async$aXY,v)},
fRz(d){var w,v=B.a.i(d)
if(B.a.a_(v,"NGMYLOCALDEP1|")){w=B.a.i(B.a.aW(v,14))
return w.length===0?null:w}return null},
hl2(d,e,f){var w=B.a.i(f)
if(w.length===0)return!1
return B.d.bg(e,new C.c6i(B.a.i(d.toLowerCase()),w))},
fRA(d,e,f,g,h){var w,v,u=J.a6(g),t=u.h(g,"lockedToEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=B.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.pm(!1,0,y.u)
if(s!==B.a.i(f.toLowerCase()))return new C.pm(!1,0,y.j)
v=B.a.i(h)
if(v.length===0)return new C.pm(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.pm(!1,0,"Verification code does not match this deposit.")
if(!C.hl2(e,d,w))return new C.pm(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
fBA(d,e){var w,v,u="amount",t=J.a6(d),s=t.h(d,"redeemedBy")
if(B.a.i(J.k(s==null?"":s)).length!==0)return D.dj1
s=t.h(d,"lockedToEmail")
w=B.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=B.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){A.aQ(t.h(d,u))
return new C.M2(!0,!1,!1,!0)}if(w!==B.a.i(e.toLowerCase())){A.aQ(t.h(d,u))
return new C.M2(!0,!1,!0,!1)}A.aQ(t.h(d,u))
return new C.M2(!0,!1,!1,!1)},
c6o(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$c6o=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=C.fRz(d)
if(s==null){u=D.P1
w=1
break}w=3
return A.b(C.anW(s),$async$c6o)
case 3:t=g
if(t==null){u=D.P1
w=1
break}u=C.fBA(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6o,v)},
aY_(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$aY_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aXY(d),$async$aY_)
case 3:s=g
if(s==null||s.length===0){u=D.P1
w=1
break}w=4
return A.b(C.anW(s),$async$aY_)
case 4:t=g
if(t==null){u=D.P1
w=1
break}u=C.fBA(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aY_,v)},
c6p(d,e,f,g,h){var w=0,v=A.j(x.D),u,t
var $async$c6p=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aXY(d),$async$c6p)
case 3:t=j
if(t==null||t.length===0){u=new C.pm(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.TL(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6p,v)},
TL(d,e,f,g,h){return C.hl5(d,e,f,g,h)},
hl5(a2,a3,a4,a5,a6){var w=0,v=A.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$TL=A.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.fRz(a4)
if(a0==null){u=new C.pm(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return A.b(C.anW(a0),$async$TL)
case 3:k=a8
if(k==null){u=new C.pm(!1,0,y.m)
w=1
break}j=C.fBA(k,a5)
if(j.b){u=new C.pm(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.pm(!1,0,y.u)
w=1
break}if(j.c){u=new C.pm(!1,0,y.j)
w=1
break}i=C.fRA(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=A.aQ(J.q(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.pm(!1,0,"Invalid deposit amount.")
w=1
break}r=new A.Q(Date.now(),0,!1).a4().ab()
q=B.a.i(a5.toLowerCase())
t=5
w=8
return A.b(A.eT("ngmy_local_deposit_qr_v1_"+B.a.i(a0),null,!1,B.bD),$async$TL)
case 8:p=a8
if(p==null){u=new C.pm(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.q(p,"redeemedBy")
if(B.a.i(J.k(g==null?"":g)).length!==0){u=new C.pm(!1,0,"This deposit code was already used.")
w=1
break}o=C.fRA(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=B.a.i(a0)
f=x.N
e=x.z
n=A.dS(p,f,e)
J.aE(n,"redeemedBy",q)
J.aE(n,"redeemedAt",r)
w=9
return A.b(A.hs("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,B.cz,null),$async$TL)
case 9:n=J.q(p,"shortCode")
m=B.a.i(J.k(n==null?"":n))
w=J.a9(m)!==0?10:11
break
case 10:w=12
return A.b(A.hs("ngmy_local_deposit_code_v1_"+B.a.i(m).toUpperCase(),A.E(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,B.cz,null),$async$TL)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=A.a5(a1)
$.al.$1("[local deposit qr] redeem: "+A.t(l))
u=new C.pm(!1,0,"Could not apply deposit. Check connection and try again.")
w=1
break
w=7
break
case 4:w=2
break
case 7:u=new C.pm(!0,h,null)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$TL,v)},
M2:function M2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
pm:function pm(d,e,f){this.a=d
this.b=e
this.c=f},
c6i:function c6i(d,e){this.a=d
this.b=e},
c6w(d,e){var w
A.fHu(d,e,!1)
A.qg(d.a,d.d,!0,!1)
w=B.a.i("")
if(w.length!==0)A.zI(!0,!1,d.d,w)},
a5A(d,e){if(d==null)return!1
return A.bw(d)===e.gcd()&&A.bB(d)===e.gcb()&&A.bQ(d)===e.gcq()},
hld(d){var w=A.dk(d)*60+A.hf(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
fRH(d){if(A.dk(d)>=12)return!1
if(A.mx(d)===6||A.mx(d)===7)return!1
return!0},
c6A(d){var w=d.c?d.bQ():d
return w.cY(A.bW(A.bw(w),A.bB(w),A.bQ(w),12,0,0,0,0))},
fBE(d,e){var w,v,u,t=d.gBf()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a5A(d.fx,e)&&d.fy>0.0001)return B.k.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bQ()
if(!C.c6A(w))return 0
v=A.bW(e.gcd(),e.gcb(),e.gcq(),12,0,0,0,0)
if(!e.cY(v))return t
if(!e.c8(w))return 0
u=B.o.aj(v.bv(w).a,1000)
if(u<=0)return t
return B.k.D(t*(B.o.D(B.o.aj(e.bv(w).a,1000),0,u)/u),0,t)},
fBD(d,e){var w,v,u,t,s,r,q,p=new A.Q(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a5A(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bQ():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!B.d.bg(e,new C.c6v(s))&&C.c6A(t)){r=d.gBf()
v=r>0
if(v){q=new A.cX(s,d.a,r,B.fs,B.f5,"Clock-in daily earnings (local)",null,null,B.cf,p)
C.c6w(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a5A(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a5A(o,p)&&!C.c6A(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
c6v:function c6v(d){this.a=d},
hzv(d){var w,v,u=d.k4,t=u==null?null:B.a.i(u)
if(t!=null&&t.length!==0)return t
w=B.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=B.a.i(d.a)
if(B.a.t(v,"@"))return B.d.gK(v.split("@"))
return"Member"},
hPX(d,e,f,g,h,i){return A.hm(d,new C.anX(f,e,i,g,h,null),!0,null,x.H)},
fVU(d){var w,v,u=d.c?d.bQ():d,t=A.dk(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+A.bB(u)+"/"+A.bQ(u)+"/"+A.bw(u)+" \xb7 "+w+":"+B.a.aT(B.o.u(A.hf(u)),2,"0")+" "+v},
h1Q(d){var w=d.x
if(w===B.dn)return"Processing"
if(w===B.jS)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
hHp(d){var w=d.f,v=B.a.i(w==null?"":w),u=v.toLowerCase()
if(B.a.t(u,"clock-in daily earnings")||B.a.t(u,"clock-in earnings"))return"Clock-in completed"
if(B.a.t(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===B.fj)return"Deposit"
if(w===B.eC)return"Withdrawal"
return v.length!==0?v:w.b},
hza(d){var w=d.d,v=w===B.fj||w===B.nL||w===B.fs||w===B.jT,u=d.x
if(u===B.dn)return w===B.eC?-d.c:0
if(u!==B.cf)return 0
w=d.c
return v?w:-w},
hHY(d,e){var w,v,u,t,s,r,q=A.z(d,x.o)
B.d.aY(q,new C.ff_())
w=A.S(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,A.K)(q),++t,v=r){s=q[t]
r=v-C.hza(s)
if(r<0)r=0
w.m(0,s.a,new A.bko(v,r))}return w},
anX:function anX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aB2:function aB2(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
e0u:function e0u(d){this.a=d},
e1a:function e1a(d){this.a=d},
e1b:function e1b(d){this.a=d},
e1c:function e1c(d){this.a=d},
e0T:function e0T(d,e){this.a=d
this.b=e},
e0U:function e0U(){},
e0V:function e0V(d){this.a=d},
e0W:function e0W(){},
e0X:function e0X(d){this.a=d},
e0Y:function e0Y(d,e,f){this.a=d
this.b=e
this.c=f},
e0Z:function e0Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e0O:function e0O(d,e){this.a=d
this.b=e},
e0v:function e0v(d,e,f){this.a=d
this.b=e
this.c=f},
e0P:function e0P(){},
e0Q:function e0Q(){},
e0R:function e0R(d){this.a=d},
e0S:function e0S(){},
e0z:function e0z(d,e){this.a=d
this.b=e},
e0A:function e0A(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e0I:function e0I(){},
e0F:function e0F(d){this.a=d},
e0G:function e0G(d,e){this.a=d
this.b=e},
e0H:function e0H(d,e){this.a=d
this.b=e},
e0J:function e0J(d){this.a=d},
e0K:function e0K(d,e,f){this.a=d
this.b=e
this.c=f},
e0L:function e0L(d){this.a=d},
e0N:function e0N(d){this.a=d},
e0M:function e0M(d){this.a=d},
e0B:function e0B(d){this.a=d},
e0C:function e0C(d,e,f){this.a=d
this.b=e
this.c=f},
e12:function e12(){},
e13:function e13(){},
e17:function e17(d){this.a=d},
e10:function e10(d){this.a=d},
e18:function e18(d){this.a=d},
e1_:function e1_(d){this.a=d},
e19:function e19(d){this.a=d},
e14:function e14(d){this.a=d},
e15:function e15(d){this.a=d},
e16:function e16(d){this.a=d},
e11:function e11(d){this.a=d},
e0y:function e0y(d){this.a=d},
e0x:function e0x(d){this.a=d},
e0w:function e0w(d){this.a=d},
e0E:function e0E(d,e){this.a=d
this.b=e},
e0D:function e0D(d,e){this.a=d
this.b=e},
ayq:function ayq(d,e,f,g,h,i,j,k,l,m){var _=this
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
daD:function daD(){},
daE:function daE(){},
daF:function daF(d,e,f){this.a=d
this.b=e
this.c=f},
daC:function daC(d){this.a=d},
daG:function daG(d,e){this.a=d
this.b=e},
daB:function daB(d){this.a=d},
ayp:function ayp(d,e,f,g,h,i,j,k,l,m){var _=this
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
bdS:function bdS(d,e){var _=this
_.f=_.e=_.d=$
_.cO$=d
_.aZ$=e
_.c=_.a=null},
daw:function daw(d){this.a=d},
dax:function dax(d){this.a=d},
day:function day(d){this.a=d},
daz:function daz(){},
daA:function daA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dav:function dav(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dau:function dau(d){this.a=d},
b7D:function b7D(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
b7C:function b7C(d,e,f){this.b=d
this.d=e
this.a=f},
b7B:function b7B(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
ayr:function ayr(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
ays:function ays(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
daX:function daX(){},
daY:function daY(){},
daZ:function daZ(){},
daJ:function daJ(d){this.a=d},
daI:function daI(d,e){this.a=d
this.b=e},
daH:function daH(d,e){this.a=d
this.b=e},
daU:function daU(d,e){this.a=d
this.b=e},
daW:function daW(d,e){this.a=d
this.b=e},
daV:function daV(d,e){this.a=d
this.b=e},
daT:function daT(){},
daS:function daS(d){this.a=d},
daR:function daR(){},
daM:function daM(d){this.a=d},
daN:function daN(){},
daO:function daO(d){this.a=d},
daP:function daP(d){this.a=d},
daL:function daL(){},
daQ:function daQ(d){this.a=d},
daK:function daK(d){this.a=d},
b73:function b73(d){this.a=d},
ff_:function ff_(){},
brj:function brj(d,e){this.b=d
this.a=e},
aHO:function aHO(){},
bte:function bte(){},
hE4(d,e,f,g,h,i,j,k){var w,v=B.a.i(j.toLowerCase())
B.d.bm(d,new C.f9D(v,g))
w=A.S(x.N,x.z)
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
B.d.J(d,w)},
aLL(d){var w,v=J.a6(d),u=A.aQ(v.h(d,"matchesTotal")),t=u==null?null:B.k.N(u)
if(t==null)t=1
v=A.aQ(v.h(d,"matchesPlayed"))
w=v==null?null:B.k.N(v)
return B.o.D(t-(w==null?0:w),0,t)},
hOL(d,e){var w=A.U(e).k("a4<1>")
w=A.z(new A.a4(e,new C.fpn(B.a.i(d.toLowerCase())),w),w.k("G.E"))
return w},
aeQ(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
if(C.aLL(u)<=0){t=J.cA(u)
t.m(u,"status","finished")
t.m(u,"seriesStatus","complete")}}},
hGE(d,e){var w,v,u,t=J.a6(d),s=t.h(d,"status")
if(!J.y(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.y(s==null?"":s,"complete"))return!1
if(C.aLL(d)<=0)return!1
w=B.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=B.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=B.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aLL(d)>0},
hGD(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a6(d),h=A.aQ(i.h(d,"matchesTotal")),g=h==null?null:B.k.N(h)
if(g==null)g=1
h=A.aQ(i.h(d,"matchesPlayed"))
w=h==null?null:B.k.N(h)
v=(w==null?0:w)+1
u=B.a.i(e.toLowerCase())
t=i.h(d,"sessionState")
h=x.f
if(!h.b(t))return"Game "+v+" of "+g+" \u2014 tap Join room when you are ready"
s=x.N
r=x.z
q=A.Z(t,s,r)
p=q.h(0,"inGame")
o=h.b(p)?A.Z(p,s,r):A.S(s,r)
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
hE3(d,e){var w
C.aeQ(e)
w=A.U(e).k("a4<1>")
w=A.z(new A.a4(e,new C.f9C(B.a.i(d.toLowerCase())),w),w.k("G.E"))
return w},
tk(d,e){var w,v,u
for(w=J.aV(d);w.C();){v=w.gT(w)
u=J.q(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
hAM(d,e,f){var w,v,u,t="fromName",s=J.a6(f),r=s.h(f,"fromEmail"),q=B.a.i(J.k(r==null?"":r).toLowerCase())
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
fHd(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase()),r=J.a6(d),q=r.h(d,"fromEmail"),p=B.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=B.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.hAM(x.f.b(u)?A.Z(u,r,q):A.S(r,q),v,d)
if((t.length===0||B.a.t(t,"@"))&&f!=null){t=J.q(f,v)
if(t==null)t=""}if(t.length===0||B.a.t(t,"@"))return"Opponent"
return t},
byp(){var w=0,v=A.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$byp=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ax(),$async$byp)
case 7:r=e
q=A.aS(J.q(r.a,"all_users"))
if(q==null||q.length===0){k=x.N
u=A.S(k,k)
w=1
break}p=B.Q.aD(0,q,null)
if(!x.j.b(p)){k=x.N
u=A.S(k,k)
w=1
break}k=x.N
o=A.S(k,k)
for(k=J.aV(p),j=x.f;k.C();){n=k.gT(k)
if(!j.b(n))continue
i=J.q(n,"email")
m=B.a.i(J.k(i==null?"":i).toLowerCase())
i=J.q(n,"username")
l=B.a.i(J.k(i==null?"":i))
if(J.a9(m)!==0&&J.a9(l)!==0)J.aE(o,m,l)}u=o
w=1
break
t=2
w=6
break
case 4:t=3
g=s.pop()
k=x.N
u=A.S(k,k)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$byp,v)},
bxv(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bxv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return A.b(C.byp(),$async$bxv)
case 3:u=t.fHd(s,r,g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bxv,v)},
Jk(d,e,f){var w=0,v=A.j(x.h),u,t,s,r,q,p
var $async$Jk=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(d)
p=$.h_r.h(0,q)
if(p!=null){t=new A.Q(Date.now(),0,!1).bv(p)
t=t.a>A.dB(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.h_r.m(0,q,new A.Q(Date.now(),0,!1))
w=5
return A.b(A.P0(B.c6,q),$async$Jk)
case 5:case 4:s=$.h_q.h(0,q)
if(s==null){u=C.tk(e,q)
w=1
break}r=C.tk(A.bxB(e,A.a([s],x._)),q)
if(r!=null)A.fJu(e,r)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Jk,v)},
hOW(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a6(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"status",f)
t.m(u,"respondedAt",new A.Q(Date.now(),0,!1).ab())
return}}},
hxA(d,e){var w,v,u,t,s,r,q=J.a6(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
p=q.h(d,"fromEmail")
w=B.a.i(J.k(p==null?"":p).toLowerCase())
p=q.h(d,"toEmail")
v=B.a.i(J.k(p==null?"":p).toLowerCase())
q=q.h(d,"fromName")
u=J.k(q==null?w:q)
switch(o){case"tic_tac_go":q=x.N
return A.E(["ttt",A.bY(9,"",!1,q),"turnEmail",w,"playerXEmail",w,"playerXName",u,"playerOEmail",v,"playerOName",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],q,x.z)
case"connect_four_pro":t=J.e_(6,x.L)
for(q=x.S,s=0;s<6;++s)t[s]=A.bY(7,0,!1,q)
return A.E(["c4",t,"c4Turn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
case"checkers_deluxe":t=J.e_(8,x.L)
for(q=x.S,r=0;r<8;++r)t[r]=A.ii(8,new C.f_A(r),!0,q)
return A.E(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return A.E(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
hE2(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a6(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"status","active")
t.m(u,"respondedAt",new A.Q(Date.now(),0,!1).ab())
r=C.hxA(u,f)
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
m=A.S(x.N,x.z)
if(w)m.m(0,o,!1)
if(s)m.m(0,n,!1)
r.m(0,"inGame",m)
t.m(u,"sessionState",r)
t.m(u,"sessionUpdatedAt",new A.Q(Date.now(),0,!1).ab())
return}}},
hOU(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a6(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)!==e)continue
w=A.aQ(t.h(u,i))
w=w==null?null:B.k.N(w)
r=(w==null?0:w)+1
t.m(u,i,r)
w=A.aQ(t.h(u,"matchesTotal"))
q=w==null?null:B.k.N(w)
if(r>=(q==null?1:q)){t.m(u,"status","finished")
t.m(u,"seriesStatus","complete")}else{p=t.h(u,h)
if(x.f.b(p)){w=x.N
s=x.z
o=A.Z(p,w,s)
o.m(0,"gameOver",!1)
o.W(0,"startAt")
n=o.h(0,"player1Email")
if(n==null)n=o.h(0,"playerXEmail")
m=B.a.i(J.k(n==null?"":n).toLowerCase())
n=o.h(0,"player2Email")
if(n==null)n=o.h(0,"playerOEmail")
l=B.a.i(J.k(n==null?"":n).toLowerCase())
k=A.S(w,s)
if(m.length!==0)k.m(0,m,!1)
if(l.length!==0)k.m(0,l,!1)
o.m(0,"inGame",k)
w=t.h(u,"gameId")
j=J.k(w==null?"":w)
if(j==="memory"){o.m(0,"memoryMatched",A.a([],x.t))
o.W(0,"memorySeed")}else if(j==="pattern")o.W(0,"patternSeed")
t.m(u,h,o)}}t.m(u,"sessionUpdatedAt",new A.Q(Date.now(),0,!1).ab())
return}},
fJt(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a6(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"sessionState",A.Z(f,x.N,x.z))
t.m(u,"sessionUpdatedAt",new A.Q(Date.now(),0,!1).ab())
return}}},
foa(d){var w=0,v=A.j(x.gw),u,t,s,r,q
var $async$foa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.aeQ(d)
t=$.fGD
if(t==null)s=$.fGD=A.P0(B.c6,null).f3(new C.fob())
else s=t
w=3
return A.b(s,$async$foa)
case 3:r=f
if(r==null){u=A.bj(new A.J(d,new C.foc(),A.U(d).k("J<1,@>")),!0,x.P)
w=1
break}q=A.bxB(d,r)
B.d.a7(d)
B.d.v(d,q)
u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$foa,v)},
aeR(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$aeR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.aeQ(d)
t=A.U(d).k("J<1,a1<n,@>>")
t=A.z(new A.J(d,new C.fm6(),t),t.k("ai.E"))
w=3
return A.b(A.P0(t,null),$async$aeR)
case 3:s=f
if(s==null){u=!1
w=1
break}r=A.bxB(d,s)
B.d.a7(d)
B.d.v(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aeR,v)},
aME(d,e,f){var w=0,v=A.j(x.y),u,t,s,r
var $async$aME=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:C.fJt(d,e,f)
t=C.tk(d,e)
if(t==null){u=!1
w=1
break}w=3
return A.b(A.P0(A.a([A.Z(t,x.N,x.z)],x._),e),$async$aME)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.tk(s,e)
if(r!=null)A.fJu(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aME,v)},
hLD(d,e,f){var w
C.fJt(d,e,f)
w=$.fGr.h(0,e)
if(w!=null)w.a9(0)
$.fGr.m(0,e,A.cN(B.lm,new C.fm7(e,d)))},
fBm(d,e){return new C.aWL(!0,d,"NGMY",B.a.i(e.toLowerCase()),null,!0)},
f9D:function f9D(d,e){this.a=d
this.b=e},
fpn:function fpn(d){this.a=d},
f9C:function f9C(d){this.a=d},
f_A:function f_A(d){this.a=d},
fob:function fob(){},
foc:function foc(){},
fm6:function fm6(){},
fm7:function fm7(d,e){this.a=d
this.b=e},
aWL:function aWL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
hPm(d,e,f){return A.c1(B.K,null,new C.fqk(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
fqk:function fqk(d,e){this.a=d
this.b=e},
Yn:function Yn(d,e,f){this.c=d
this.d=e
this.a=f},
aAQ:function aAQ(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
dVZ:function dVZ(d){this.a=d},
dW1:function dW1(d){this.a=d},
dW2:function dW2(d){this.a=d},
dW0:function dW0(d){this.a=d},
dW3:function dW3(d){this.a=d},
dW4:function dW4(d,e){this.a=d
this.b=e},
dW_:function dW_(d,e){this.a=d
this.b=e},
hKa(d){var w,v,u,t=B.a.i(d)
if(t.length===0)return B.i3
w=t.toLowerCase()
v=A.ae("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return B.i3
v=Date.now()
u=C.hA6(w,new A.Q(v,0,!1))
v=x.N
return A.a([new A.kc("calendar",A.E(["title",C.hA5(t,w),"start",u.ab(),"end",u.bN(36e8).ab(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
hA5(d,e){var w,v,u,t,s,r=A.ae("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cz(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return B.a.i(w==null?"":w)}u=A.ae("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cz(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.h0c(B.a.i(t))}s=A.ae("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cz(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.h0c(B.a.i(t))}if(B.a.t(e,"meeting"))return"Meeting"
if(B.a.t(e,"appointment"))return"Appointment"
return"NGMY Event"},
h0c(d){var w
if(d.length===0)return d
w=B.a.fl(d,A.ae("\\s+",!0,!1,!1,!1))
return new A.J(w,new C.f8O(),A.U(w).k("J<1,n>")).aG(0," ")},
hA6(d,e){var w,v,u,t,s,r,q,p,o=A.bW(A.bw(e),A.bB(e),A.bQ(e),0,0,0,0,0)
if(B.a.t(d,"tomorrow"))o=o.bN(864e8)
else if(!B.a.t(d,"today"))for(w=D.ayw.gdH(D.ayw),w=w.gag(w);w.C();){v=w.gT(w)
u=v.a
if(A.dm(d,u,0)){t=C.hz9(o,v.b)
o=t
break}}s=A.ae("\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cz(d)
if(s!=null){w=s.b
v=w[1]
r=A.c3(v==null?"":v,null)
if(r==null)r=9
v=w[2]
q=A.c3(v==null?"":v,null)
if(q==null)q=0
w=w[3]
p=w==null?null:w.toLowerCase()
if(p==="pm"&&r<12)r+=12
if(p==="am"&&r===12)r=0
if(p==null&&r>=1&&r<=7)r+=12}else{r=9
q=0}return A.bW(A.bw(o),A.bB(o),A.bQ(o),r,q,0,0,0)},
hz9(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(A.mx(w)===e){u=!0
if(v<=0){t=d.bN(36e8)
s=w.a
if(s>=t.gbo())u=s===t.gbo()&&w.b<t.gcA()}}else u=!1
if(u)return w
w=w.bN(r)}return d.bN(r)},
f8O:function f8O(){},
hKb(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=B.a.i(d)
if(j.length===0)return B.i3
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
q=C.hwv(w,j)
if(q==null||q.length===0)return B.i3
t=A.ae("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=A.ae("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return A.a([new A.kc("call",A.E(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=A.E(["name",q],t,t)
if(r!=null)m.m(0,"body",r)
return A.a([new A.kc(n,m)],x.Z)}if(p){t=x.N
return A.a([new A.kc("call",A.E(["name",q],t,t))],x.Z)}return B.i3},
hwv(d,e){var w,v,u,t,s,r,q=[A.ae("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),A.ae("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),A.ae("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
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
if(u)return C.hDp(t)}r=A.ae("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cz(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return B.a.i(u==null?"":u)}return null},
hDp(d){var w=B.a.fl(d,A.ae("\\s+",!0,!1,!1,!1))
return new A.J(w,new C.f8N(),A.U(w).k("J<1,n>")).aG(0," ")},
f8N:function f8N(){},
h42(d){var w=new A.J(d,new C.fot(),A.U(d).k("J<1,a1<n,@>>")).bZ(0,new C.fou())
w=A.z(w,w.$ti.k("G.E"))
return w},
fot:function fot(){},
fou:function fou(){},
hKe(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return B.i3
w=B.a.i(d)
if(w.length===0)return B.i3
v=w.toLowerCase()
if(!(B.a.t(v,"send email")||B.a.t(v,"send an email")||B.a.t(v,"send a message to")||B.a.t(v,"email ")||B.a.t(v,"write an email")||B.a.t(v,"write email")))return B.i3
u=A.ae("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cz(w)
if(u==null)return B.i3
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
t=A.S(t,t)
t.m(0,"to",s)
t.m(0,"subject",q)
if(o.length!==0)t.m(0,"body",o)
return A.a([new A.kc("send_email",t)],x.Z)},
hJn(d,e){var w
if(e)return d
w=J.dE(d,new C.fio())
w=A.z(w,w.$ti.k("G.E"))
return w},
fio:function fio(){},
hLA(d){switch(d){case"blackjack_vegas":return D.dn1
case"roulette_euro":return D.dmM
case"slots_jackpot":return D.dmT
case"poker_texas":return D.dmW
case"chess_royale":return D.dmN
case"connect_four_pro":return D.dmO
case"domino_block":return D.dmQ
case"plinko_prizes":return D.dmY
case"spin_wheel":return D.dmV
case"baccarat_punto":return D.dmP
case"craps_table":return D.dmX
case"casino_war":return D.dmR
case"bingo_live":return D.dmU
case"solitaire_klondike":return D.dn0
case"backgammon_pro":return D.dmL
case"billiards_snooker":return D.dmZ
case"profit_solve":return D.dn_
default:return D.dmS}},
flY(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=A.m(8)
v=A.H(B.aL,B.r,1.5)
u=A.a([new A.aa(0,B.G,B.x.j(0.35),B.e6,6)],x.V)
return A.p(p,A.at(A.V(B.m0,B.c.j(0.5),p,p,p,23.400000000000002),p,p,p),B.h,p,p,new A.o(p,p,v,w,u,D.bHt,B.n),p,74,p,p,p,p,p,52)}t=B.o.D(d,1,13)
s=t===1||t>=10||B.o.H(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][B.o.H(t,4)]
q=s?B.bQ:B.M
w=A.m(8)
v=A.H(B.aJ,B.r,1)
u=A.a([new A.aa(0,B.G,B.x.j(0.28),B.e6,6)],x.V)
return A.p(p,A.u(A.a([new A.C(D.bkw,A.d(D.ceb[t-1]+"\n"+r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,B.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),B.b7,A.at(A.d(r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),B.b7],x.p),B.F,p,B.e,B.j,0,B.p),B.h,p,p,new A.o(B.hL,p,v,w,u,p,B.n),p,74,p,p,p,p,p,52)},
hME(d,e){var w,v=null,u=A.m(18),t=A.H(B.aL,B.r,3),s=A.a([new A.aa(0,B.G,B.aB.j(0.5),B.J,20)],x.V),r=A.U(e).k("J<1,ha>")
r=A.z(new A.J(e,new C.fnU(),r),r.k("ai.E"))
w=x.p
return A.u(A.a([A.p(v,A.u(A.a([D.eQW,B.ab,A.B(r,B.m,v,B.b6,B.j,0,v,v)],w),B.m,v,B.e,B.j,0,B.p),B.h,v,v,new A.o(v,v,t,u,s,D.bHP,B.n),v,v,v,v,I.ad5,v,v,v),B.ay,A.dn(B.aiM,D.eRu,d,A.bk(B.aL,v,v,v,B.dt,v,Ag.VK,v,v,v,v,v))],w),B.m,v,B.e,B.j,0,B.p)},
oA:function oA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bmn:function bmn(d,e){this.b=d
this.a=e},
fnU:function fnU(){},
hlO(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e_(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=A.bY(8,0,!1,w)
u=A.bY(9,"",!1,p)
t=x.t
s=A.a([],t)
r=A.a([],t)
t=A.a([0,0,0],t)
q=J.e_(6,o)
for(v=0;v<6;++v)q[v]=A.bY(7,0,!1,w)
return new C.aoi(A.S(p,x.z),n,u,s,r,t,q,new A.ap(B.as,$.au()))},
hEJ(d,e,f,g,h){var w=new C.fa7(f,h)
switch(d){case"checkers_deluxe":return C.hvg(h,g,e,w)
case"tic_tac_go":return C.hDz(h,g,e,w)
case"blackjack_vegas":return C.huE(h,g,e,new C.fa1(w))
case"roulette_euro":return C.hBZ(h,g,e,new C.fa2(w))
case"slots_jackpot":return C.hCM(h,g,e,new C.fa3(w))
case"billiards_snooker":return C.hAO(h,g,e,new C.fa4(w))
case"connect_four_pro":return C.hvE(h,g,e,w)
case"profit_solve":return C.hAR(h,g,e,new C.fa5(w))
default:return C.hvd(d,h,g,e,new C.fa6(w))}},
hvg(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vi,B.L,w,w),u=A.m(12),t=A.H(D.TU,B.r,8),s=A.a([new A.aa(0,B.G,B.x.j(0.4),B.J,16)],x.V)
return A.u(A.a([new A.C(B.fo,v,w),A.D(A.at(new A.fJ(1,A.p(w,A.bu(A.m(6),A.ih(!0,w,w,B.z,D.esg,new C.eXY(d,e,f,g),64,w,B.dL,B.aj,!1),B.ap),B.h,w,w,new A.o(w,w,t,u,s,w,B.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hDz(d,e,f,g){var w=null
return A.u(A.a([new A.C(B.fo,A.d(d.c,w,w,w,w,w,w,D.vi,B.L,w,w),w),A.D(A.at(new A.fJ(1,A.cj(new C.f8Y(d,e,f,g)),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
huE(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.vi,B.L,v,v),t=x.p,s=A.a([],t),r=d.CW,q=d.ch
if(r)B.d.v(s,new A.J(q,new C.eXp(),A.U(q).k("J<1,r>")))
else B.d.v(s,A.a([C.flY(q[0],!1),B.bq,C.flY(0,!0)],t))
s=A.B(s,B.m,v,B.b6,B.j,0,v,v)
r=A.d("Total: "+d.a10(d.ay),v,v,v,v,v,v,D.eMr,v,v,v)
q=d.ay
w=A.U(q).k("J<1,r>")
q=A.z(new A.J(q,new C.eXq(),w),w.k("ai.E"))
q=A.c8(B.fF,q,B.bx,6,6)
return A.u(A.a([new A.C(B.fo,u,v),D.eXe,B.ar,s,B.ay,D.f31,r,B.ar,q,B.b7,A.B(A.a([A.D(A.bK(D.eRU,d.CW?v:new C.eXr(d,e,f,g),v),1),B.aa,A.D(A.bK(D.f5a,new C.eXs(d,e,f,g),v),1)],t),B.m,v,B.e,B.j,0,v,v)],t),B.m,v,B.e,B.j,0,B.p)},
hBZ(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vi,B.L,w,w),u=d.cx,t=A.a([new A.aa(0,B.G,B.x.j(0.45),B.cs,16)],x.V)
t=A.a([new A.C(B.fo,v,w),A.p(w,A.b1(w,w,w,new C.bmn(u,w),B.at),B.h,w,w,new A.o(w,w,w,w,t,w,B.a5),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new A.C(B.kw,A.d("Result: "+A.t(v),w,w,w,w,w,w,D.eAY,w,w,w),w))
t.push(B.ab)
t.push(A.c8(B.fF,A.ii(6,new C.f6b(d,e,f,g),!0,x.l),B.bx,6,6))
return A.u(t,B.m,w,B.e,B.j,0,B.p)},
hCM(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vi,B.L,w,w),u=d.db,t=A.U(u).k("J<1,n>")
u=A.z(new A.J(u,new C.f85(),t),t.k("ai.E"))
return A.u(A.a([new A.C(B.fo,v,w),C.hME(new C.f86(d,e,f,g),u)],x.p),B.m,w,B.e,B.j,0,B.p)},
hAO(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vi,B.L,w,w),u=A.m(20),t=A.H(B.hK,B.r,12),s=x.V,r=A.a([new A.aa(0,B.G,B.x.j(0.45),B.dm,18)],s),q=x.p
return A.u(A.a([new A.C(B.fo,v,w),A.D(A.p(w,new A.am(B.W,w,B.a9,B.q,A.a([A.an(w,A.p(w,w,B.h,w,w,D.aRF,w,18,w,w,w,w,w,18),w,w,24,w,24,w),A.an(28,A.p(w,w,B.h,w,w,B.a79,w,14,w,w,w,w,w,14),w,w,w,32,w,w),A.at(A.et(B.A,d.dx,A.p(w,w,B.h,w,w,new A.o(B.aL,w,w,A.m(2),A.a([new A.aa(0,B.G,B.x.j(0.3),B.J,4)],s),w,B.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),B.h,w,w,new A.o(w,w,t,u,r,D.dUa,B.n),w,w,w,B.eX,w,w,w,w),1),A.mb(B.bn,w,w,1,0,new C.f4W(d,f),d.dy),A.bK(D.eWn,new C.f4X(d,e,g,f),w)],q),B.m,w,B.e,B.j,0,B.p)},
hvE(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.vi,B.L,v,v),t=x.l,s=J.e_(7,t)
for(w=0;w<7;++w)s[w]=new A.bF(1,B.bp,A.aH(v,A.u(A.ii(6,new C.eYo(d,w),!0,t),B.m,v,B.m8,B.j,0,B.p),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eYp(d,w,e,f,g),v,v,v,v,v,v,!1,B.ae),v)
return A.u(A.a([new A.C(B.fo,u,v),A.D(A.at(new A.fJ(1.1666666666666667,A.B(s,B.dF,v,B.e,B.j,0,v,v),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
hAR(d,e,f,g){var w=null
return A.u(A.a([new A.C(B.fo,A.d(d.c,w,w,w,w,w,w,D.vi,B.L,w,w),w),A.d(""+d.a+"/"+d.b,w,w,w,w,w,w,B.kg,w,w,w),A.d(d.fy,w,w,w,w,w,w,D.aKw,B.L,w,w),A.aK(w,B.U,!1,w,!0,B.q,w,A.aL(),d.id,w,w,w,w,w,2,D.bEh,B.z,!0,w,!0,w,!1,w,B.ag,w,w,w,w,w,B.dN,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.f58(d,e,g,f),w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,B.di,!0,B.a6,w,B.am,w,w,w,w),A.bK(D.eV4,new C.f59(d,e,g,f),w)],x.p),B.m,w,B.e,B.j,0,B.p)},
hvd(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gjy(),k=e.d
k=k==null?n:k.c
w=C.hLA(d)
v=D.aym.h(0,d)
if(v==null)v=d
m=A.d(m,n,n,n,n,n,n,B.mW,B.L,n,n)
u=A.m(22)
t=w.a
s=w.b
r=A.H(s.j(0.5),B.r,2)
q=A.a([new A.aa(0,B.G,w.c.j(0.35),B.eK,24)],x.V)
p=A.d(w.e,n,n,n,n,n,n,W.QV,n,n,n)
o=A.d(v,n,n,n,n,n,n,B.ou,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+A.t(k)+" at the table"
k=x.p
q=A.D(A.at(A.p(n,A.u(A.a([p,B.T,o,B.P,A.d(l,n,n,n,n,n,n,A.l(n,n,B.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),B.L,n,n),B.d3,A.V(w.f,s.j(0.85),n,n,n,48)],k),B.m,n,B.b6,B.j,0,B.p),B.h,n,n,new A.o(n,n,r,u,q,new A.a7(B.b1,B.b5,B.w,t,n,n),B.n),n,n,n,B.eX,B.a8,n,n,1/0),n,n,n),1)
return A.u(A.a([m,B.ab,q,B.P,new A.a3(1/0,n,A.bK(D.f4m,new C.eXS(f,e,g,h),A.bk(s,n,n,n,B.d.gK(t).j0()>0.4?B.x:B.c,n,B.cc,n,n,n,n,n)),n)],k),B.m,n,B.e,B.j,0,B.p)},
Dk:function Dk(d,e){this.a=d
this.b=e},
aoi:function aoi(d,e,f,g,h,i,j,k){var _=this
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
c83:function c83(){},
c84:function c84(){},
c82:function c82(){},
c85:function c85(){},
c81:function c81(){},
c87:function c87(){},
c88:function c88(){},
c80:function c80(d){this.a=d},
c86:function c86(){},
c8_:function c8_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fa7:function fa7(d,e){this.a=d
this.b=e},
fa1:function fa1(d){this.a=d},
fa2:function fa2(d){this.a=d},
fa3:function fa3(d){this.a=d},
fa4:function fa4(d){this.a=d},
fa5:function fa5(d){this.a=d},
fa6:function fa6(d){this.a=d},
eXY:function eXY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eXX:function eXX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f8Y:function f8Y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8X:function f8X(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f8W:function f8W(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eXp:function eXp(){},
eXq:function eXq(){},
eXr:function eXr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eXs:function eXs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6b:function f6b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6a:function f6a(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f85:function f85(){},
f86:function f86(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f4W:function f4W(d,e){this.a=d
this.b=e},
f4X:function f4X(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eYp:function eYp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eYo:function eYo(d,e){this.a=d
this.b=e},
f58:function f58(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f59:function f59(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eXS:function eXS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hHr(d){var w,v=A.U(d).k("a4<1>")
v=A.oK(new A.a4(d,new C.fe_(),v),120,v.k("G.E"))
w=A.cz(v,new C.fe0(),A.a2(v).k("G.E"),x.N).aG(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fe_:function fe_(){},
fe0:function fe0(){},
af1(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
apb:function apb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aBB:function aBB(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
eqp:function eqp(){},
aJk:function aJk(){},
hjO(){var w=$.GY
if(w<=0)return;--w
$.GY=w
if(w===0){w=$.fR0
if(w!=null)w.$0()}},
c3z(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
amY(d){var w=0,v=A.j(x.H),u,t
var $async$amY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.fBh.J(0,t)
w=4
return A.b(A.ax(),$async$amY)
case 4:w=3
return A.b(f.ap("Bool","ngmy_game_free_play_used_"+B.a.i(t.toLowerCase()),!0),$async$amY)
case 3:case 1:return A.h(u,v)}})
return A.i($async$amY,v)},
amX(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$amX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(C.c3z(d)){u=!0
w=1
break}t=B.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.fBh.t(0,t)){u=!1
w=1
break}w=3
return A.b(A.ax(),$async$amX)
case 3:s=f
r=B.a.i(t.toLowerCase())
r=A.ks(J.q(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amX,v)},
Tn(){var w=0,v=A.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Tn=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ax(),$async$Tn)
case 7:r=e
q=A.aS(J.q(r.a,"ngmy_helper_ai_usage_v1"))
if(q==null||B.a.i(q).length===0){u=A.S(x.N,x.z)
w=1
break}p=B.Q.aD(0,q,null)
if(x.f.b(p)){o=A.Z(p,x.N,x.z)
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
case 6:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Tn,v)},
aX2(d){return C.hk0(d)},
hk0(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aX2=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.ax(),$async$aX2)
case 6:s=f
w=7
return A.b(s.ap("String","ngmy_helper_ai_usage_v1",B.Q.al(d,null)),$async$aX2)
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
return A.i($async$aX2,v)},
aX0(d,e){var w,v,u,t,s=J.q(d,B.a.i(e.toLowerCase()))
if(!x.f.b(s))return new A.abH(0,new A.Q(Date.now(),0,!1))
w=J.a6(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=A.bh(u==null?"":u)
if(t==null)t=new A.Q(Date.now(),0,!1)
return new A.abH(typeof v=="number"?B.o.D(B.k.N(v),0,999999):0,t)},
aX1(d,e){if(B.o.aj(e.bv(d.b).a,36e8)>=24)return new A.abH(0,e)
return d},
c45(d,e){var w=0,v=A.j(x.S),u,t,s
var $async$c45=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return A.b(C.Tn(),$async$c45)
case 3:t=g
s=Date.now()
u=B.o.D(e-C.aX1(C.aX0(t,d),new A.Q(s,0,!1)).a,0,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c45,v)},
c46(d,e){var w=0,v=A.j(x.cJ),u,t,s,r
var $async$c46=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return A.b(C.Tn(),$async$c46)
case 3:t=g
s=Date.now()
r=C.aX1(C.aX0(t,d),new A.Q(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bN(864e8)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c46,v)},
hk1(d){var w,v,u,t=d.a,s=B.o.aj(t,1e6)
if(s<=0)return"0s"
w=B.o.aj(t,36e8)
v=B.o.aj(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+B.a.aT(B.o.u(v),2,"0")+"m "+B.a.aT(B.o.u(u),2,"0")+"s"
if(v>0)return""+v+"m "+B.a.aT(B.o.u(u),2,"0")+"s"
return""+u+"s"},
aX3(d){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aX3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return A.b(C.Tn(),$async$aX3)
case 3:t=p.aX1(o.aX0(f,d),new A.Q(Date.now(),0,!1))
w=4
return A.b(A.ax(),$async$aX3)
case 4:s=f
r=B.a.i(d.toLowerCase())
q=t.b.a4().ab()
u=A.ks(J.q(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aX3,v)},
anj(d){var w=0,v=A.j(x.H),u,t,s,r
var $async$anj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return A.b(C.Tn(),$async$anj)
case 3:t=s.aX1(r.aX0(f,d),new A.Q(Date.now(),0,!1))
w=5
return A.b(A.ax(),$async$anj)
case 5:w=4
return A.b(f.ap("Bool","ngmy_helper_3left_"+B.a.i(d.toLowerCase())+"_"+t.b.a4().ab(),!0),$async$anj)
case 4:case 1:return A.h(u,v)}})
return A.i($async$anj,v)},
ank(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$ank=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=B.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return A.b(C.Tn(),$async$ank)
case 3:s=g
r=Date.now()
q=C.aX1(C.aX0(s,d),new A.Q(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aE(s,t,A.E(["count",r+1,"windowStart",q.b.a4().ab()],x.N,x.K))
w=4
return A.b(C.aX2(s),$async$ank)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ank,v)},
aeE(d,e,a0){var w=0,v=A.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aeE=A.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new A.f4("")
if(!d.d){p=!0
if(!C.h3V(a0))if(!C.h3U(a0)){p=A.ae("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.h3V(a0)?3:4
break
case 3:o=C.hLf(a0)
w=o!=null?5:6
break
case 5:w=7
return A.b(C.bXH(e,o),$async$aeE)
case 7:n=a2
p=J.a6(n)
if(p.gci(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.fPt(o)+":\n"
m.a+=l
for(p=p.gag(n);p.C();){m=p.gT(p)
l=h
k="- "+m.gTy()+"\n"
l.a+=k
m=m.f
if(m!=null&&B.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=A.ae("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return A.b(A.Qi("text/plain"),$async$aeE)
case 14:r=a2
p=r
if(p==null)p=null
else p=B.a.i(p.a)
q=p==null?"":p
if(J.a9(q)!==0){p=h
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
case 13:case 9:w=C.h3U(a0)?15:16
break
case 15:p=h
f=C
w=17
return A.b(C.a5e(e),$async$aeE)
case 17:m=f.fR7(a2)+"\n"
p.a+=m
case 16:p=A.ae("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return A.b(C.Sr(e),$async$aeE)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.ct(i)){p=h
m=C.fPu(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=B.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeE,v)},
hll(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.ae("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.ae("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
c6F(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$c6F=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=A.fRM(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.eT("ngmy_local_growth_income_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bD),$async$c6F)
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
q=A.a5(m)
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
return A.i($async$c6F,v)},
ao_(d){var w=0,v=A.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$ao_=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=B.a.i(d)
if(J.a9(k)===0){u=null
w=1
break}t=4
w=7
return A.b(A.eT("ngmy_local_growth_income_stash_v1_"+B.a.i(k),null,!1,B.bD),$async$ao_)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.q(r,"payload")
q=J.k(n==null?"":n)
if(J.a9(q)===0){u=null
w=1
break}n=J.q(r,"ownerEmail")
p=B.a.i(J.k(n==null?"":n))
n=B.c0.c6(0,B.cw.aF(q))
m=J.y(J.q(r,"live"),!0)
u=new A.aCZ(m,p,n)
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=A.a5(j)
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
return A.i($async$ao_,v)},
aY6(d){var w=0,v=A.j(x.bY),u,t,s,r,q
var $async$aY6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
w=C.hll(q)?3:4
break
case 3:w=5
return A.b(C.c6F(q),$async$aY6)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.ao_(t)
w=1
break
case 4:if(B.a.a_(q,"NGMYLOCALSYNC1|")){u=C.ao_(B.a.i(B.a.aW(q,15)))
w=1
break}w=B.a.a_(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return A.b(C.ao_(B.a.i(B.a.aW(q,15))),$async$aY6)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new A.aCZ(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aY6,v)},
fS_(d){var w=d.bJ
if(w>=0)return w
return 1},
aeP(d,e,f){var w=0,v=A.j(x.H),u,t
var $async$aeP=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return A.b(A.aMQ(d,e),$async$aeP)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return A.b(A.Ff(d,null,null,!1,!0,""),$async$aeP)
case 5:w=4
return A.b(t.$1(h),$async$aeP)
case 4:case 1:return A.h(u,v)}})
return A.i($async$aeP,v)},
hK9(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=B.a.i(a2)
if(a1.length===0)return B.i3
w=a1.toLowerCase()
v=A.ae("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=A.ae("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cz(w)
if(!u&&t==null)return B.i3
s=new A.Q(Date.now(),0,!1)
r=A.dc()
q=A.dc()
p=C.hA4(w)
if(p!=null){v=p.a
r.b=s.bN(v)
q.b=C.h_4(a1,w)
if(J.y(q.b8(),"Wake up")&&B.o.aj(v,e)<=180)q.b="Reminder \u2014 "+B.o.aj(v,e)+" min"}else{if(t!=null){v=A.ae("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=B.a.e1(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.h_5(v[2],v[4],v[3])
o=v[3]
m=A.c3(o==null?"":o,null)
if(m==null)m=0
l=A.bW(A.bw(s),A.bB(s),A.bQ(s),0,0,0,0,0)
if(B.a.t(w,d))l=l.bN(a0)
r.b=A.bW(A.bw(l),A.bB(l),A.bQ(l),n,m,0,0,0).bN(-36e8)
if(r.b8().cY(s.bN(e)))r.b=J.cg(r.b8(),B.o4)
v=C.hE1(v[1])
k=B.o.H(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+B.a.aT(B.o.u(m),2,"0")+" "+j)}else{l=A.bW(A.bw(s),A.bB(s),A.bQ(s),0,0,0,0,0)
v=B.a.t(w,d)
if(v)l=l.bN(a0)
i=A.ae("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cz(w)
if(i!=null){o=i.b
h=C.h_5(o[1],o[3],o[2])
o=o[2]
g=A.c3(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=A.bW(A.bw(l),A.bB(l),A.bQ(l),h,g,0,0,0)
r.b=f.cY(s.bN(3e7))&&!v?f.bN(a0):f
q.b=C.h_4(a1,w)}}v=x.N
return A.a([new A.kc("alarm",A.E(["title",q.b8(),"start",r.b8().ab(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
hA4(d){var w,v,u,t,s,r,q=[A.ae("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.ae("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.ae("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),A.ae("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
for(w=0;w<4;++w){v=q[w].cz(d)
if(v==null)continue
u=v.b
t=u[1]
s=A.c3(t==null?"":t,null)
if(s==null||s<=0)continue
r=u[2]
if(r==null)r="minute"
if(B.a.a_(r,"sec"))return new A.b8(1e6*B.o.D(s,5,86400))
if(B.a.a_(r,"hour")||B.a.a_(r,"hr"))return new A.b8(36e8*B.o.D(s,1,168))
return new A.b8(6e7*B.o.D(s,1,10080))}return null},
hE1(d){var w=d==null?"work":d,v=w.toLowerCase()
if(B.a.t(v,"meeting")||B.a.t(v,"appointment"))return"Meeting"
if(B.a.t(v,"class")||B.a.t(v,"school"))return"Class"
if(B.a.t(v,"shift"))return"Shift"
return"Work"},
h_5(d,e,f){var w,v=A.c3(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return B.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
h_4(d,e){var w,v,u,t
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
hlH(d){var w,v,u,t,s=J.a6(d)
if(s.gah(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.k_(d,80),v=w.$ti,w=new A.bU(w,w.gI(0),v.k("bU<ai.E>")),v=v.k("ai.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gI(d)>80?u+("\u2026 and "+(s.gI(d)-80)+" more\n"):u
return B.a.i(s.charCodeAt(0)==0?s:s)}},D,H,Ac,I,F,Ad,V,G,W,Ae,Af,X,Ag,Ah,Ai,Aj,Y,Z,K,Ak
J=c[1]
A=c[0]
B=c[2]
L=c[30]
Q=c[157]
A_=c[168]
E=c[149]
M=c[159]
A0=c[122]
N=c[92]
A1=c[155]
R=c[33]
O=c[70]
A2=c[77]
S=c[76]
A3=c[78]
P=c[123]
A4=c[160]
T=c[151]
A5=c[163]
A6=c[161]
A7=c[162]
A8=c[158]
A9=c[154]
Aa=c[62]
U=c[139]
Ab=c[140]
C=a.updateHolder(c[5],C)
D=c[148]
H=c[25]
Ac=c[61]
I=c[153]
F=c[91]
Ad=c[164]
V=c[26]
G=c[152]
W=c[104]
Ae=c[150]
Af=c[167]
X=c[156]
Ag=c[169]
Ah=c[114]
Ai=c[166]
Aj=c[98]
Y=c[69]
Z=c[54]
K=c[52]
Ak=c[165]
C.bnu.prototype={
nW(d,e){return this.a.$2(d,e)}}
C.DV.prototype={
S(){return new C.aF1(this.$ti.k("aF1<DV.T,DV.S>"))}}
C.aF1.prototype={
Z(){var w,v,u=this
u.a0()
w=u.a
v=w.f
w=new A.ht(B.Dq,v,null,null,w.$ti.k("ht<1>"))
u.e=w
u.U4()},
bp(d){var w,v=this
v.bA(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aJm()
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.ht(B.Dq,w.b,w.c,w.d,w.$ti)}v.U4()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&A.c()
return v.mx(d,w)},
p(){this.aJm()
this.a2()},
U4(){var w,v=this
v.d=v.a.c.l0(new C.eLZ(v),new C.eM_(v),new C.eM0(v))
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.ht(B.Uo,w.b,w.c,w.d,w.$ti)},
aJm(){var w=this.d
if(w!=null){w.a9(0)
this.d=null}}}
C.asQ.prototype={
mx(d,e){return this.e.$2(d,e)}}
C.aiA.prototype={
S(){return C.hsd()},
bn(){return this.r.$0()}}
C.qb.prototype={}
C.axm.prototype={
aae(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aae=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.fQz(r)
if(r.x==null||r.c4.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.fQB(s),$async$aae)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aae,v)},
Vp(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.anY(t.a.c),$async$Vp)
case 3:if(e!=null&&t.c!=null)t.a.bn()
r=!C.c3z(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return A.b(C.amX(t.a.c),$async$Vp)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.n(new C.d2T(t,s))
if(!s)t.aae()
case 1:return A.h(u,v)}})
return A.i($async$Vp,v)},
a9Q(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a9Q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.byp(),$async$a9Q)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d33(t,s))
case 1:return A.h(u,v)}})
return A.i($async$a9Q,v)},
Z(){var w,v,u=this
u.bon()
$.rJ=$.rJ+1
w=u.a
$.byt=w.c.a
w=w.d.b3
v=A.U(w).k("J<1,a1<n,@>>")
w=A.z(new A.J(w,new C.d3l(),v),v.k("ai.E"))
u.f=w
u.a9Q()
u.Ia()
u.Vp()
u.e=A.dD(B.ni,new C.d3m(u))},
Ia(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ia=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:C.aeQ(t.a.d.b3)
w=3
return A.b(C.foa(t.a.d.b3),$async$Ia)
case 3:s=e
if(t.c==null){w=1
break}C.aeQ(t.a.d.b3)
if(s!=null)t.n(new C.d3b(t,s))
else t.n(new C.d3c(t))
case 1:return A.h(u,v)}})
return A.i($async$Ia,v)},
p(){C.aWN()
var w=this.e
if(w!=null)w.a9(0)
this.bom()},
aeD(d,e,f){return this.cjJ(d,e,f)},
cjJ(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$aeD=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(e.toLowerCase())
p=J.q(t.r,q)
o=t.a
n=o.d.b3
o=o.c
s=d.b
C.hE4(n,o.a,o.c,d.a,s,f,e,p)
t.a.bn()
w=3
return A.b(C.aeR(t.a.d.b3),$async$aeD)
case 3:if(t.c==null){w=1
break}t.n(new C.d3e(t))
r=f===1?"1 game":""+f+" games"
t.c.G(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$aeD,v)},
H5(d,e){return this.c5t(d,e)},
bVd(d){return this.H5(d,null)},
c5t(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$H5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&B.a.i(e).length!==0){s=C.tk(t.a.d.b3,B.a.i(e))
if(s!=null&&C.aLL(s)<=0){t.c.G(x.q).f.P(D.aIp)
w=1
break}}w=5
return A.b(C.amX(t.a.c),$async$H5)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return A.b(C.fBi(r,C.fiz(q.c),p),$async$H5)
case 6:w=1
break
case 4:o=new C.d36(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
A.hm(r,new C.aAa(p,q.d,q.f,q.r,new C.d37(o),q.w,C.fiz(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
A.hm(q,new C.aiz(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.d38(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$H5,v)},
bSM(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.aeQ(i.a.d.b3)
C.aeQ(i.f)
w=C.hOL(i.a.c.a,i.f)
v=C.hE3(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return B.bF
if(!u){t=B.d.gK(w)
u=A.m(14)
s=A.H(B.bf,B.r,1)
r=J.a6(t)
q=r.h(t,"fromName")
q=A.t(q==null?r.h(t,"fromEmail"):q)
p=A.t(r.h(t,"gameTitle"))
o=A.aQ(r.h(t,g))
o=o==null?h:B.k.N(o)
if(o==null)o=1
r=A.aQ(r.h(t,g))
r=r==null?h:B.k.N(r)
r=(r==null?1:r)===1?"":"s"
n=x.p
return A.p(h,A.u(A.a([D.f_d,A.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,B.oy,h,h,h),B.P,A.B(A.a([A.D(A.dV(A2.Rj,new C.d2Z(i,t),h),1),B.aa,A.D(A.bK(D.f7u,new C.d3_(i,t),h),1)],n),B.m,h,B.e,B.j,0,h,h)],n),B.F,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(B.aB,h,s,u,h,h,B.n),h,h,h,B.e_,B.bk,h,h,1/0)}m=B.d.gK(v)
l=B.d.dI(i.y,new C.d30(m),new C.d31(i))
k=C.fHd(m,i.a.c.a,i.r)
j=C.aLL(m)
u=A.m(14)
s=A.H(B.bf,B.r,1)
r=j===1?"":"s"
return A.p(h,A.u(A.a([D.eT_,A.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,B.oy,h,h,h),B.av,A.d(C.hGD(m,i.a.c.a),h,h,h,h,h,h,B.a4i,h,h,h),B.P,A.bK(D.eZx,new C.d32(i,l,m),h)],x.p),B.F,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(B.bj,h,s,u,h,h,B.n),h,h,h,B.e_,B.bk,h,h,1/0)},
bJE(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.eoq.t(0,d.a),l=A.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=A.a2L(w[v])
t=B.k.D(u.d*0.58,0.12,0.3)
l.push(new A.wo(u.a,u.b,B.k.D(u.c*0.92,0,0.9),t).iF())}s=B.d.gK(w)
w=A.m(16)
t=A.m(18)
r=A.H(A.W(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1)
q=x.V
p=A.a([new A.aa(0,B.G,A.W(89,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),B.j6,12)],q)
o=x.p
o=A.a([new A.a3(100,n,A.at(A.V(d.e,B.c,n,n,n,64),n,n,n),n),A.D(new A.C(B.kv,A.u(A.a([A.B(A.a([A.D(A.d(d.b,n,n,n,n,n,n,B.l6,n,n,n),1)],o),B.m,n,B.e,B.j,0,n,n),B.av,A.d(d.c,n,2,B.a2,n,n,n,B.nH,n,n,n)],o),B.F,n,B.b6,B.j,0,B.p),n),1)],o)
if(m)o.push(A.aF(n,n,n,n,D.bBX,n,n,n,new C.d2V(this,d),n,n,n,n,"Invite player",n))
o.push(new A.C(B.JN,A.p(n,D.bA9,B.h,n,n,new A.o(A.W(71,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),n,A.H(A.W(B.k.U(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1.6),n,A.a([new A.aa(0,B.G,A.W(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,10)],q),n,B.a5),n,44,n,n,n,n,n,44),n))
return A.aI(!1,w,!0,A.p(n,A.B(o,B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(n,n,r,t,p,new A.a7(B.ax,B.aC,B.w,l,n,n),B.n),n,92,n,B.e_,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.d2W(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.L(d).ax.a===B.H,l=A.L(d).ax.a===B.H?B.iX:B.oR,k=m?B.hr.j(0.94):B.c.j(0.94),j=m?B.c:B.M,i=m?B.hr:B.c,h=m?B.c.j(0.08):B.aJ,g=m?B.c:B.M,f=m?B.bi:B.bM
if(!o.x)return C.aMi(n,l,A.at(A.mk(n,m?B.c:B.bn,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fiz(o.a.c)
return new C.LQ(o.a.w,w,!0,o.gaO6(),n)}w=A.aG(d,B.e2,x.w).w
v=A.m(12)
u=A.H(h,B.r,1)
t=x.V
s=A.a([],t)
if(!m)s.push(new A.aa(0,B.G,B.x.j(0.04),B.cA,12))
r=x.p
s=A.a([A.p(n,A.B(A.a([A.D(A.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,A.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,B.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new A.tO(new C.d3i(o,f,g),n,$.aNE(),n)],r),B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(i,n,u,v,s,n,B.n),n,n,n,n,B.Vd,n,n,1/0),B.T,o.bSM()],r)
v=o.y
B.d.v(s,new A.J(v,o.gbJD(),A.U(v).k("J<1,r>")))
w=A.ch(A.u(s,B.m,n,B.e,B.j,0,B.p),B.q,n,B.z,n,new A.M(14,w.r.b+78,14,24),n,n,B.aj)
s=A.m(35)
v=A.a([new A.aa(0,B.G,B.x.j(m?0.28:0.08),B.j6,15)],t)
u=A.H(m?B.c.j(0.1):B.aJ,B.r,1)
t=A.aF(n,n,n,n,A.V(B.eo,j,n,n,n,18),n,n,n,o.gaO6(),n,n,n,n,n,n)
q=A.D(A.at(A.d("GAME CENTER",n,n,n,n,n,n,A.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,B.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=A.m(20)
return A.nX(!0,C.aMi(n,l,new A.am(B.W,n,B.a9,B.h,A.a([w,A.an(n,A.bq(!1,new A.C(B.JY,A.p(n,A.B(A.a([t,q,new A.C(B.kv,A.p(n,A.B(A.a([D.bxt,B.eA,C.anO(new C.d3j(o),B.mW,o.a.c.a)],r),B.m,n,B.e,B.R,0,n,n),B.h,n,n,new A.o(B.cN,n,n,p,n,n,B.n),n,n,n,n,B.h4,n,n,n),n)],r),B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(k,n,u,s,v,n,B.n),n,60,n,n,B.lZ,n,n,n),n),!0,!1,B.ah,!0,!0),n,n,0,0,0,n)],r),n)),new C.d3k(o),x.K)},
aO7(){var w,v
this.a.bn()
w=this.d
v=w>0?A.E(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
A.iE(w,v)}}
C.aAa.prototype={
S(){return new C.bfJ()},
hk(d){return this.e.$1(d)},
bn(){return this.f.$0()},
aD4(){return this.r.$0()}}
C.bfJ.prototype={
Z(){this.bpm()
this.d=A.SO(this.a.d.be)
$.rJ=$.rJ+1},
p(){C.aWN()
this.bpl()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&A.c()
return new C.amr(v,new C.dG8(w),u,new C.dG9(w),new C.dGa(w,d),new C.dGb(w),null)}}
C.aiz.prototype={
S(){return new C.axl(new A.ap(B.as,$.au()))},
hk(d){return this.x.$1(d)},
bn(){return this.y.$0()},
aD4(){return this.z.$0()}}
C.axl.prototype={
Z(){this.bol()
this.a.toString
$.rJ=$.rJ+1},
p(){C.aWN()
var w=this.d
w.R$=$.au()
w.O$=0
this.bok()},
a_Q(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a_Q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.LW()
w=5
return A.b(C.amX(t.a.c),$async$a_Q)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return A.b(C.fBi(s,C.fiz(r.c),q),$async$a_Q)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&B.a.i(r).length!==0){p=C.tk(s.d.b3,B.a.i(r))
if(p!=null&&C.aLL(p)<=0){t.c.G(x.q).f.P(D.aIp)
w=1
break}}o=A.d8(B.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.G(x.q).f.P(D.evg)
w=1
break}m=A.Jt(t.a.c.a,new C.d2N(t))
if(m+0.001<n){t.c.G(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Not enough balance for this bet \u2014 you have $"+A.dw(m)+", the bet is $"+A.dw(n)+".",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aD4()
s=t.a
s.toString
r=B.o.u(1000*Date.now())
q=t.a
s.hk(new A.cX(r,q.c.a,n,B.js,B.f5,"Game bet: "+q.f,null,null,B.cf,new A.Q(Date.now(),0,!1)))
t.a.bn()
if(D.eoi.t(0,t.a.e)){s=t.c
s.toString
r=t.a
A.hm(s,new C.alu(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
A.hm(s,new C.aiB(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$a_Q,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=A.aF(o,o,o,o,B.EU,o,o,o,new C.d2Q(d),o,o,o,o,o,o),k=p.a,j=A.d(k.f,o,o,o,o,o,o,B.cr,o,o,o),i=A.m(12),h=x.p
j=A.eA(A.a([A.p(o,A.at(C.anO(new C.d2R(p),B.kg,k.c.a),o,o,o),B.h,o,o,new A.o(B.cN,o,o,i,o,o,B.n),o,o,o,D.bf1,B.io,o,o,o)],h),o,o,!0,!0,D.Um,o,1,o,o,o,!1,o,!1,B.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=A.m(16)
i=A.H(B.bf,B.r,1)
k=A.V(D.box,D.b9R,o,o,o,28)
w=p.a
v=A.d(w.f,o,o,o,o,o,o,B.ou,o,o,o)
w=A.d(w.r,o,o,o,o,o,o,B.oy,o,o,o)
u=A.W(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.m(12)
s=x.a3
s=A.z(new A.J(A.a([2,5,10,25],x.t),new C.d2S(p),s),s.k("ai.E"))
s=A.B(s,B.m,o,B.e,B.j,0,o,o)
r=A.W(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.p(o,A.u(A.a([D.f8X,B.T,s,B.P,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.d,o,o,o,o,o,2,A.bm(o,new A.b2(4,A.m(10),B.V),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,B.l7,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,B.dN,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,B.di,!0,B.a6,o,B.am,o,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(u,o,o,t,o,o,B.n),o,o,o,o,B.bR,o,o,1/0)
u=A.m(12)
r=A.H(A.W(102,B.a0u.l()>>>16&255,B.a0u.l()>>>8&255,B.a0u.l()&255),B.r,1)
s=A.W(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
q=A.m(10)
q=A.p(o,A.u(A.a([D.eSn,A.d("+ $"+B.k.aa(n*0.46,2),o,o,o,o,o,o,D.eJi,o,o,o),A.d("(46% return on $"+B.k.aa(p.e,2)+" bet)",o,o,o,o,o,o,B.nH,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(s,o,o,q,o,o,B.n),o,o,o,o,B.ch,o,o,1/0)
s=A.W(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
n=A.m(10)
u=A.p(o,A.u(A.a([D.f_t,B.P,q,B.P,A.p(o,A.u(A.a([D.eNQ,A.d("$"+B.k.aa(m,2),o,o,o,o,o,o,D.ezs,o,o,o),A.d("8 pairs \xd7 $"+B.k.aa(m,2)+" each",o,o,o,o,o,o,B.nH,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(s,o,o,n,o,o,B.n),o,o,o,o,B.ch,o,o,1/0)],h),B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(D.b6z,o,r,u,o,o,B.n),o,o,o,o,B.bR,o,o,1/0)
r=A.ff(o,o,B.bn,o,o,o,o,o,o,B.c,o,B.fP,o,o,o,o,o,o,o,o)
return C.aMi(j,D.Um,A.ch(A.p(o,A.u(A.a([k,B.av,v,B.bA,w,B.T,t,B.P,u,B.T,new A.a3(1/0,o,A.i5(A.d("Start Game ($"+B.k.aa(p.e,2)+")",o,o,o,o,o,o,B.ce,o,o,o),p.gcnu(),r),o)],h),B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(o,o,i,l,o,D.bGQ,B.n),o,o,o,o,B.eH,o,o,1/0),B.q,o,B.z,o,E.acH,o,o,B.aj))}}
C.aiB.prototype={
S(){var w=x.s,v=x.t,u=x.S
return new C.axn(B.cB,new A.ap(B.as,$.au()),A.a([],w),A.a([],x.d4),A.a([],w),A.a([],w),A.a([],v),A.a([],v),A.a([],v),A.aZ(u),A.aZ(u),A.a([],v),A.a([],v),A.a([],v))},
hk(d){return this.y.$1(d)},
bn(){return this.z.$0()}}
C.axn.prototype={
ghr(){var w=this.a.Q
return w!=null&&B.a.i(w).length!==0},
qn(d){return this.bHY(d)},
bHY(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$qn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.z5()
r=t.MS()
w=s<=0?3:4
break
case 3:w=5
return A.b(t.a8j(d),$async$qn)
case 5:w=1
break
case 4:q=B.k.D(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return A.b(t.rV(d),$async$qn)
case 9:w=7
break
case 8:w=10
return A.b(t.Dh(q,s,r),$async$qn)
case 10:case 7:case 1:return A.h(u,v)}})
return A.i($async$qn,v)},
DR(d,e,f,g){return this.clk(d,e,f,g)},
clk(d,e,f,g){var w=0,v=A.j(x.H),u,t=this,s
var $async$DR=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return A.b(C.bzu(s,C.bz8(),C.fJ4(),d,e,f,g),$async$DR)
case 3:case 1:return A.h(u,v)}})
return A.i($async$DR,v)},
z5(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.aYd(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&A.c()
return u+C.af1(t,s.e.a.a)
case"memory":return s.ghr()&&D.md.t(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.auC()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.be
case"color":return s.b3
case"reflex":return s.Y
default:u=s.aX
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
auC(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
MS(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&A.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.fHg()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.aX
if(w!=null)return w.b
return 1}},
bp(d){var w,v,u=this
u.bA(d)
if(u.f||u.c4)return
w=u.a
v=C.fiE(w.e,w.d.y2)
if(v!==C.fiE(d.e,d.d.y2)&&u.c!=null)u.n(new C.d4F(u,v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.bop()
w=i.a
w.toString
$.rJ=$.rJ+1
i.Q=C.fiE(w.e,w.d.y2)
i.b00()
i.a9A()
if(i.ghr()){i.c4=!0
i.cT="Connecting to match\u2026"
i.cf="Both players enter the room together \u2014 play starts at the same time."
i.Nd()
i.a9e()
i.bf=A.dD(B.fU,new C.d4I(i))}if(B.d.t(D.NN,i.a.e)){w=i.ghr()
v=i.a
if(w){w=v.d.b3
v=v.Q
v.toString
u=C.tk(w,v)
w=i.a
if(u!=null){w=w.c
v=w.a
w=w.c
t=J.a6(u)
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
m=s.b(t.h(u,h))?A.Z(s.a(t.h(u,h)),o,n):A.S(o,n)
s=p===r
l=s?q:r
if(s){o=m.h(0,"player2Name")
if(o==null)o=m.h(0,"playerOName")
t=o==null?t.h(u,"toName"):o
k=B.a.i(J.k(t==null?"":t))}else{o=m.h(0,"player1Name")
if(o==null)o=m.h(0,"playerXName")
t=o==null?t.h(u,"fromName"):o
k=B.a.i(J.k(t==null?"":t))}w=new C.aWL(!1,w,k.length===0||B.a.t(k,"@")?C.fHd(u,v,null):k,p,l,s)}else{w=w.c
w=C.fBm(w.c,w.a)}w=i.bF=w}else{w=v.c
w=i.bF=C.fBm(w.c,w.a)}v=C.hlO()
v.bit(i.a.e,i.d,w)
i.aX=v
i.r=v.c
if(i.ghr()){w=i.a
v=w.d.b3
w=w.Q
w.toString
u=C.tk(v,w)
m=u==null?null:J.q(u,h)
if(x.f.b(m)){w=i.aX
w.toString
w.b53(i.a.e,A.Z(m,x.N,x.z),i.a.c.a)
w=i.aX
i.r=w.c
if(w.e){if(w.r)j=D.Pa
else j=w.f===!0?D.pl:D.G9
i.z7(j)}}}i.b_=A.dD(B.nl,new C.d4J(i))
if(i.ghr())i.b7=A.dD(B.o3,new C.d4K(i))}if(i.ghr()&&!B.d.t(D.NN,i.a.e))i.b7=A.dD(B.o3,new C.d4L(i))
i.as=A.dD(B.h3,new C.d4M(i))},
Nd(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Nd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tk(s.d.b3,q)
w=p!=null?3:4
break
case 3:w=5
return A.b(C.bxv(p,t.a.c.a),$async$Nd)
case 5:o=e
if(t.c!=null)t.n(new C.d3V(t,o))
w=1
break
case 4:w=6
return A.b(C.Jk(q,t.a.d.b3,!1),$async$Nd)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return A.b(C.bxv(n,t.a.c.a),$async$Nd)
case 7:o=e
if(t.c!=null)t.n(new C.d3W(t,o))
case 1:return A.h(u,v)}})
return A.i($async$Nd,v)},
afI(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$afI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.Jk(r,s.d.b3,!1),$async$afI)
case 3:q=e
if(q==null||t.c==null){w=1
break}p=J.q(q,"sessionState")
if(!x.f.b(p)){w=1
break}o=A.Z(p,x.N,x.z)
if(t.a.e==="memory"){s=t.go
r=s.a
n=t.id
m=n.a
l=t.fx
t.aJa(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=B.k.N(j)
else{h=j==null?null:J.k(j)
i=A.c3(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)B.d.bm(t.fy,new C.d4o(t))
if(i!=null&&t.fr.length!==0){s=A.z(t.dy,x.S)
B.d.v(s,t.dy)
r=new A.f0()
r.dX(i)
B.d.fw(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.n(new C.d4p())}case 1:return A.h(u,v)}})
return A.i($async$afI,v)},
a9e(){var w=0,v=A.j(x.H),u=this
var $async$a9e=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Zc(!0),$async$a9e)
case 2:return A.h(null,v)}})
return A.i($async$a9e,v)},
Zc(d){return this.cb8(d)},
cb7(){return this.Zc(!1)},
cb8(b3){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$Zc=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghr()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
if(q.length===0){w=1
break}p=B.a.i(s.c.a.toLowerCase())
w=3
return A.b(C.Jk(q,s.d.b3,b3),$async$Zc)
case 3:o=b5
if(o==null)o=C.tk(t.a.d.b3,q)
if(o==null){w=1
break}s=J.a6(o)
r=s.h(o,"fromEmail")
n=B.a.i(J.k(r==null?"":r).toLowerCase())
r=s.h(o,"toEmail")
m=B.a.i(J.k(r==null?"":r).toLowerCase())
l=s.h(o,"sessionState")
s=x.f
r=x.N
k=x.z
j=s.b(l)?A.Z(l,r,k):A.S(r,k)
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
d=s.b(e)?A.Z(e,r,k):A.S(r,k)
a0=j.h(0,"readyAt")
a1=s.b(a0)?A.Z(a0,r,k):A.S(r,k)
a2=new A.Q(Date.now(),0,!1).a4()
if(b3){d.m(0,p,!0)
a1.m(0,p,a2.ab())}if(i&&!d.am(0,h))d.m(0,h,!1)
if(f&&!d.am(0,g))d.m(0,g,!1)
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
j.m(0,"startAt",a4.a4().ab())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.m(0,"memorySeed",B.o.H(1000*Date.now(),2147483647))
j.m(0,"memoryMatched",A.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.m(0,"patternSeed",B.o.H(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.hLD(t.a.d.b3,q,j)
t.a.bn()}if(t.c==null){w=1
break}b0=t.by
if(b0==null)b0="your opponent"
if(!a5){t.n(new C.d4a(b2,t,b0))
w=1
break}if(s==null){t.n(new C.d4b(t))
w=1
break}b1=new A.Q(Date.now(),0,!1)
if(b1.cY(s)){s=s.bv(b1).a
r=B.o.aj(s,1e6)
t.n(new C.d4c(b2,t,r+(B.o.H(B.o.aj(s,1000),1000)>0?1:0)))
w=1
break}if(t.c4){t.n(new C.d4d(b2,t))
b2=t.a.e
if(b2==="pattern")t.a6d()
else if(b2==="memory"){t.b0_()
if(t.c!=null)t.n(new C.d4e())}}b2=t.bf
if(b2!=null)b2.a9(0)
t.bf=null
case 1:return A.h(u,v)}})
return A.i($async$Zc,v)},
aK4(d){var w,v,u,t,s=this
if(d!=null){w=new A.f0()
w.dX(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e_(v,x.S)
for(t=0;t<v;++t)u[t]=w.aB(9)
s.ry=u
s.x1=0
s.to=-1},
aK3(){return this.aK4(null)},
a6d(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a6d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ghr()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.c8G()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return A.b(C.Jk(q,s.d.b3,!1),$async$a6d)
case 5:r=t.aX0(e)
case 4:if(t.c==null){w=1
break}t.aK4(r)
t.n(new C.d3n(t))
t.Cv()
case 1:return A.h(u,v)}})
return A.i($async$a6d,v)},
aX0(d){var w,v,u,t=null
if(d==null)return t
w=J.q(d,"sessionState")
if(!x.f.b(w))return t
v=J.q(w,"patternSeed")
if(typeof v=="number")return B.k.N(v)
u=v==null?t:J.k(v)
return A.c3(u==null?"":u,t)},
c8G(){var w=this.a,v=w.Q
if(v==null)return null
return this.aX0(C.tk(w.d.b3,v))},
a9A(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a9A=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$a9A)
case 3:r=e
q=t.a
p=q.e
q=B.a.i(q.c.a.toLowerCase())
s=A.eW(J.q(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.n(new C.d3U(t,s))
case 1:return A.h(u,v)}})
return A.i($async$a9A,v)},
oo(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n
var $async$oo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$oo)
case 2:p=e
o=u.a
n=o.e
o=B.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bzW().length
else s=n==="typing"?50:105
if(n==="typing")r=B.o.H(u.at+5,s)
else{q=u.at
r=t?B.o.H(q+6,s):B.o.H(q+1,s)}w=3
return A.b(p.ap("Int","ngmy_game_"+n+"_"+o,r),$async$oo)
case 3:u.at=r
return A.h(null,v)}})
return A.i($async$oo,v)},
a04(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a04=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.aX==null||t.f||t.aO){w=1
break}if(t.c4){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.Jk(r,s.d.b3,!1),$async$a04)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.b3
s=s.Q
s.toString
p=C.tk(r,s)
s=p==null
if(!s){r=J.cA(p)
r.a7(p)
r.v(p,q)}r=J.a6(q)
o=r.h(q,"sessionState")
if(!x.f.b(o)){w=1
break}n=A.Z(o,x.N,x.z)
r=r.h(q,"sessionUpdatedAt")
m=A.bh(J.k(r==null?"":r))
s=s?null:J.q(p,"sessionUpdatedAt")
l=A.bh(J.k(s==null?"":s))
if(m!=null&&l!=null&&!m.c8(l)){w=1
break}s=t.aX
s.toString
r=t.a
s.b53(r.e,n,r.c.a)
r=t.aX
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.Pa
else k=r.f===!0?D.pl:D.G9
w=7
return A.b(t.z7(k),$async$a04)
case 7:w=5
break
case 6:if(t.c!=null)t.n(new C.d4q())
case 5:case 1:return A.h(u,v)}})
return A.i($async$a04,v)},
adE(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$adE=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghr()||q.aX==null||q.a.Q==null||q.aO){w=1
break}q.aO=!0
t=3
o=q.aX
o.toString
p=o.cCk(q.a.e)
o=q.a
n=o.d.b3
o=o.Q
o.toString
w=6
return A.b(C.aME(n,o,p),$async$adE)
case 6:q.a.bn()
r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
q.aO=!1
w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adE,v)},
z7(d){return this.bOV(d)},
bOV(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$z7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(t.f||t.aX==null){w=1
break}s=t.aX.w
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
return A.b(t.HK(s,s),$async$z7)
case 9:w=4
break
case 6:w=10
return A.b(t.VL(s,s),$async$z7)
case 10:w=4
break
case 7:w=11
return A.b(t.a8i(s,s),$async$z7)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghr()?12:13
break
case 12:w=14
return A.b(t.Gp(),$async$z7)
case 14:case 13:case 1:return A.h(u,v)}})
return A.i($async$z7,v)},
Yc(d,e){return this.c3h(d,e)},
c3h(d,e){var w=0,v=A.j(x.H),u,t=this
var $async$Yc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=t.ghr()?3:5
break
case 3:w=6
return A.b(t.adE(),$async$Yc)
case 6:if(d===D.pk){w=1
break}w=4
break
case 5:if(d===D.pk){w=1
break}case 4:w=7
return A.b(t.z7(d),$async$Yc)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Yc,v)},
a9u(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$a9u=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tk(s.d.b3,q)
if(p==null){w=1
break}o=B.a.i(t.a.c.a.toLowerCase())
n=J.q(p,"sessionState")
s=x.f
if(!s.b(n)){w=1
break}r=x.N
m=x.z
l=A.Z(n,r,m)
k=l.h(0,"inGame")
j=s.b(k)?A.Z(k,r,m):A.S(r,m)
j.m(0,o,!1)
l.m(0,"inGame",j)
l.W(0,"startAt")
w=3
return A.b(C.aME(t.a.d.b3,q,l),$async$a9u)
case 3:t.a.bn()
case 1:return A.h(u,v)}})
return A.i($async$a9u,v)},
Gp(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Gp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tk(s.d.b3,q)
if(p==null){w=1
break}o=J.q(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?A.Z(o,s,r):A.S(s,r)
n.m(0,"gameOver",!0)
C.fJt(t.a.d.b3,q,n)
C.hOU(t.a.d.b3,q)
w=3
return A.b(C.aeR(t.a.d.b3),$async$Gp)
case 3:t.a.bn()
case 1:return A.h(u,v)}})
return A.i($async$Gp,v)},
p(){var w,v=this
if(v.ghr()&&!v.f)v.a9u()
else if(!v.f)v.bVe()
C.aWN();++v.RG
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
w.R$=$.au()
w.O$=0
v.boo()},
cqx(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&A.c()
v=v<=0||w.aX==null}if(v)return
if(w.c4)return
v=w.aX
v.toString
w.a.toString
if(v.a>=v.b){w.rV("Goal completed!")
return}v=++w.rx
if(v%5===0)w.n(new C.d4z())},
b00(){var w,v,u,t,s,r=this
r.x=A.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e_(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b0_()
break
case"scramble":r.be=0
r.b01()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=B.o.H(r.at,50)
v=J.e_(5,x.N)
for(t=0;t<5;++t)v[t]=D.cXl[B.o.H(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bI(0,B.c_)
break
case"math":r.y2=0
r.b_Z()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b02()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e_(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
B.d.fw(v,s)
if(!r.cds()){w=J.e_(9,w)
for(u=0;u<9;++u)w[u]=u
B.d.fw(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
B.d.a7(w)
w.push(r.d.aB(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.OK()
break
case"pattern":if(r.ghr()){r.ry=A.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aK3()
w=A.t(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Cv()}break
case"color":r.b3=0
r.b_U()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.Y=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b16()
break
default:if(B.d.t(D.NN,w)){w=r.aX
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
aYd(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
cds(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return B.o.H(v,2)===0},
b02(){var w,v,u,t,s,r=this,q=B.o.H(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e_(o,x.S)
for(w=0;w<o;w=v){v=w+1
n[w]=B.k.N(Math.pow(p,v))}u=B.k.N(Math.pow(p,o))
r.w=B.o.u(u)
r.au=B.d.aG(n,", ")
q=r.w
t=x.s
s=A.a([B.o.u(u+p),B.o.u(u-p),B.o.u(u+p*2)],t)
t=A.a([q],t)
B.d.v(t,s)
B.d.fw(t,r.d)
r.x=t},
b_Z(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bzW().length-6)u.at=0
w=$.bzW()
v=w[B.o.H(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b01(){var w=this,v=w.w=D.cD2[B.o.H(w.at+w.be,105)]
w.ax=C.hP9(v)
w.ay=A.bY(v.length,null,!1,x.T)
w.ch=A.a(w.ax.split(""),x.s)
w.e.bI(0,B.c_)},
b16(){var w=this,v=w.cx
if(v!=null)v.a9(0)
w.y=!1
w.z=null
w.cx=A.cN(A.dB(0,0,0,120+w.d.aB(280),0,0),new C.d4n(w))},
bOY(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.qn("Too early \u2014 paid for "+t.Y+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=B.o.aj(new A.Q(v,0,!1).bv(u).a,1000)}if(w<520){t.n(new C.d3S(t))
v=t.Y
if(v>=5){t.oo()
t.rV("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b16()
t.n(new C.d3T())}}else t.qn("Too slow ("+w+"ms) \u2014 paid for "+t.Y+"/5.")},
cpQ(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=B.d.bi(t.ay,new C.d4u())
if(u<0)return
t.n(new C.d4v(t,u,v,d))},
cpR(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.n(new C.d4w(u,d,v))},
bzp(){var w,v,u=this
if(u.f)return
if(B.d.bg(u.ay,new C.d3o())){u.c.G(x.q).f.P(D.eva)
return}w=B.d.fM(u.ay)
v=u.w
v===$&&A.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.n(new C.d3p(u))
if(u.ghr()&&D.md.t(0,u.a.e))u.Zq()
if(u.be>=5){u.oo()
if(u.ghr()&&D.md.t(0,u.a.e))u.mu(!0)
else u.rV("All 5 words unscrambled!")}else{u.b01()
u.r="Word "+(u.be+1)+" of 5 \u2014 place letters in order"
u.n(new C.d3q())}}else u.qn("Wrong word \u2014 paid for "+u.be+"/5.")},
b_U(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=B.o.H(w.at+w.b3*11,4),t=v[w.d.aB(4)]
w.aC=t
w.aA=v[u]
w.aK=[B.dz,B.dr,B.hB,B.qA][u]
w.w=t},
aJa(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=B.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a7(0)
w=h.id
w.a7(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=A.aZ(x.S)
for(s=J.jj(v),s=s.gag(s),r=x.j;s.C();){q=s.gT(s)
p=B.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aV(r.b(o)?o:B.cP),n=p===g;q.C();){m=q.gT(q)
l=typeof m=="number"?B.k.N(m):A.c3(J.k(m),null)
if(l==null)continue
t.J(0,l)
if(n)w.J(0,l)}}f.v(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aV(k);w.C();){m=w.gT(w)
l=typeof m=="number"?B.k.N(m):A.c3(J.k(m),null)
if(l!=null)f.J(0,l)}}h.k2=B.k.bH(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=A.aQ(J.q(j,g))
i=f==null?null:B.k.N(f)
if(i!=null)h.fx=i}},
b0_(){var w,v,u,t,s,r,q,p=this
p.fx=p.k2=0
p.go.a7(0)
p.id.a7(0)
p.fy=A.a([],x.t)
p.k1=!1
w=A.z(p.dy,x.S)
B.d.v(w,p.dy)
p.fr=w
if(p.ghr()&&p.a.Q!=null){w=p.a
v=w.d.b3
w=w.Q
w.toString
u=C.tk(v,w)
t=u==null?null:J.q(u,"sessionState")
w=x.N
v=x.z
s=x.f.b(t)?A.Z(t,w,v):A.S(w,v)
r=s.h(0,"memorySeed")
if(typeof r=="number")q=B.k.N(r)
else{w=r==null?null:J.k(r)
q=A.c3(w==null?"":w,null)}w=p.fr
if(q!=null){v=new A.f0()
v.dX(q)
B.d.fw(w,v)}else B.d.fw(w,p.d)
p.aJa(s)}else B.d.fw(p.fr,p.d)},
cau(d){var w,v,u,t=this
if(t.c4)return
if(t.f||t.k1||t.go.t(0,d)||B.d.t(t.fy,d))return
t.n(new C.d43(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.n(new C.d44(t,v,u))
if(t.ghr()&&D.md.t(0,t.a.e))t.Zq()
if(t.go.a>=t.fr.length){t.oo()
if(t.ghr()&&D.md.t(0,t.a.e))t.mu(!0)
else t.auF()}return}t.k1=!0
A.bM(D.bdZ,new C.d45(t),x.c)},
b_n(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&A.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.n(new C.d4f(u))
if(u.y1>=5){u.oo()
u.rV("All 5 questions correct!")}else{u.b02()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.n(new C.d4g())}}else u.qn(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.n(new C.d4h(u))
if(u.y2>=6){u.oo()
u.rV("All 6 math questions correct!")}else{u.b_Z()
u.r="Question "+(u.y2+1)+" of 6"
u.n(new C.d4i())}}else{u.TT(u.y2+1)
u.qn(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.n(new C.d4j(u))
if(u.b3>=5){u.oo()
u.rV("All 5 color rounds correct!")}else{u.b_U()
u.r="Round "+(u.b3+1)+" of 5 \u2014 tap the COLOR of the text"
u.n(new C.d4k())}}else u.qn("Wrong color \u2014 paid for "+u.b3+"/5.")
return}if(v){u.oo()
u.auF()}else u.c.G(x.q).f.P(D.evU)},
cpP(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=B.d.cP(q.k4,0)
v=B.o.aj(d,3)
u=B.o.H(d,3)
t=B.o.aj(w,3)
s=B.o.H(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.n(new C.d4t(q,d,w))
if(B.d.fM(q.k4)==="123456780"){q.oo()
q.auF()}}},
OK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$OK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.n(new C.d46(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.d47(t,q).$0()
t.c.e3()
w=6
return A.b(A.bM(B.ks,null,r),$async$OK)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.d48(t).$0()
t.c.e3()
w=7
return A.b(A.bM(B.jg,null,r),$async$OK)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.n(new C.d49(t))
case 1:return A.h(u,v)}})
return A.i($async$OK,v)},
cpS(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.qn("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.n(new C.d4x(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.oo()
u.rV("Perfect Simon run!")
return}u.n(new C.d4y(u))
u.OK()}},
Cv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Cv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.n(new C.d3r(t))
s=x.H
w=3
return A.b(A.bM(B.jf,null,s),$async$Cv)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.d3s(t,o).$0()
t.c.e3()
w=7
return A.b(A.bM(B.UT,null,s),$async$Cv)
case 7:if(t.c==null){w=1
break}new C.d3t(t).$0()
t.c.e3()
w=8
return A.b(A.bM(B.ij,null,s),$async$Cv)
case 8:case 5:r.length===q||(0,A.K)(r),++p
w=4
break
case 6:if(t.c!=null)t.n(new C.d3u(t))
case 1:return A.h(u,v)}})
return A.i($async$Cv,v)},
TT(d){return this.buj(d)},
buj(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$TT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return A.b(A.ax(),$async$TT)
case 3:s=f
r=t.a
q=r.e
r=B.a.i(r.c.a.toLowerCase())
p=$.bzW().length
o=B.o.H(t.at+d,p)
w=4
return A.b(s.ap("Int","ngmy_game_"+q+"_"+r,o),$async$TT)
case 4:t.at=o
case 1:return A.h(u,v)}})
return A.i($async$TT,v)},
cpN(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.qn("Wrong tile \u2014 paid for "+v.auC()+"/"+C.fHg()+" moves.")
return}v.n(new C.d4r(v,w))
if(v.ghr()&&D.md.t(0,v.a.e))v.Zq()
if(v.x1>=w)if(v.x2>=7){v.oo()
if(v.ghr()&&D.md.t(0,v.a.e))v.mu(!0)
else v.rV("All 7 pattern rounds correct!")}else{v.n(new C.d4s(v))
v.Cv()}},
HK(d,e){return this.c8W(d,e)},
rV(d){return this.HK(null,d)},
auF(){return this.HK(null,null)},
c8W(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a9(0)
s=t.b_
if(s!=null)s.a9(0)
r=t.a.x*1.46
t.n(new C.d41(t,r))
q=B.o.u(1000*Date.now())
s=t.a
p=new A.cX(q,s.c.a,r,B.fs,B.f5,"Game payout: "+s.f,null,null,B.cf,new A.Q(Date.now(),0,!1))
A.aeO(p,!0)
t.a.hk(p)
t.a.bn()
o=e==null?"+$"+B.k.aa(r,2)+" added to your balance!":e
s=t.a
C.tZ(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.DR(d,o,"YOU WIN!",!0),$async$HK)
case 3:w=4
return A.b(C.aeG(t.a.f,o),$async$HK)
case 4:case 1:return A.h(u,v)}})
return A.i($async$HK,v)},
DP(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$DP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghr()&&D.md.t(0,t.a.e)?3:4
break
case 3:w=5
return A.b(t.ckq(),$async$DP)
case 5:w=1
break
case 4:s=t.z5()
r=t.MS()
w=r<=0||s<=0?6:7
break
case 6:w=8
return A.b(t.a8j("Time's up \u2014 no progress to pay."),$async$DP)
case 8:w=1
break
case 7:q=B.k.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return A.b(t.rV("Complete! Max payout earned."),$async$DP)
case 12:w=10
break
case 11:w=13
return A.b(t.Dh(q,s,r),$async$DP)
case 13:case 10:case 1:return A.h(u,v)}})
return A.i($async$DP,v)},
OR(d){return this.cd9(d)},
Zq(){return this.OR(!1)},
cd9(b1){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$OR=A.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghr()&&D.md.t(0,r.a.e))||r.a.Q==null){w=1
break}if(!b1){a1=new A.Q(Date.now(),0,!1)
a2=r.bP
if(a2!=null&&a1.bv(a2).a<3e6){w=1
break}r.bP=a1}a2=r.a
a3=a2.Q
a3.toString
q=B.a.i(a3)
if(J.a9(q)===0){w=1
break}t=4
p=B.a.i(a2.c.a.toLowerCase())
a4=C.tk(a2.d.b3,q)
w=a4==null?7:9
break
case 7:w=10
return A.b(C.Jk(q,r.a.d.b3,!1),$async$OR)
case 10:w=8
break
case 9:b3=a4
case 8:o=b3
if(o==null){w=1
break}n=J.q(o,"sessionState")
a2=x.f
a3=x.N
a5=x.z
m=a2.b(n)?A.Z(n,a3,a5):A.S(a3,a5)
l=J.q(m,"scores")
k=a2.b(l)?A.Z(l,a3,a5):A.S(a3,a5)
J.aE(k,p,r.z5())
J.aE(m,"scores",k)
if(r.a.e==="memory"){j=J.q(m,"memoryMatchedBy")
i=a2.b(j)?A.Z(j,a3,a5):A.S(a3,a5)
a6=r.id
a6=A.z(a6,A.a2(a6).k("ck.E"))
B.d.fz(a6)
J.aE(i,p,a6)
J.aE(m,"memoryMatchedBy",i)
h=A.aZ(x.S)
for(a6=i,a6=new A.dv(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aV(g);a8.C();){f=a8.gT(a8)
e=typeof f=="number"?B.k.N(f):A.c3(J.k(f),null)
if(e!=null)J.cg(h,e)}}a6=h
a6=A.z(a6,A.a2(a6).k("ck.E"))
B.d.fz(a6)
J.aE(m,"memoryMatched",a6)}d=J.q(m,"wagers")
a0=a2.b(d)?A.Z(d,a3,a5):A.S(a3,a5)
J.aE(a0,p,r.a.x)
J.aE(m,"wagers",a0)
w=11
return A.b(C.aME(r.a.d.b3,q,m),$async$OR)
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
return A.i($async$OR,v)},
mu(d){return this.ckr(d)},
ckq(){return this.mu(!1)},
ckr(b5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$mu=A.e(function(b6,b7){if(b6===1)return A.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghr()||t.a.Q==null?3:4
break
case 3:w=5
return A.b(t.DP(),$async$mu)
case 5:w=1
break
case 4:w=6
return A.b(t.OR(!0),$async$mu)
case 6:s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=B.a.i(s.c.a.toLowerCase())
w=7
return A.b(C.Jk(q,s.d.b3,!0),$async$mu)
case 7:o=b7
n=t.MS()
w=o==null?8:9
break
case 8:m=B.k.D(t.z5()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return A.b(t.a8j("Time's up \u2014 no progress to pay."),$async$mu)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return A.b(t.rV("Complete! Max payout earned."),$async$mu)
case 17:w=15
break
case 16:w=18
return A.b(t.Dh(m,t.z5(),n),$async$mu)
case 18:case 15:case 11:w=19
return A.b(t.Gp(),$async$mu)
case 19:w=1
break
case 9:s=J.a6(o)
r=s.h(o,"fromEmail")
l=B.a.i(J.k(r==null?"":r).toLowerCase())
r=s.h(o,"toEmail")
k=B.a.i(J.k(r==null?"":r).toLowerCase())
j=p===l?k:l
i=s.h(o,"sessionState")
s=x.f
r=x.N
h=x.z
g=s.b(i)?A.Z(i,r,h):A.S(r,h)
f=g.h(0,"scores")
e=s.b(f)?A.Z(f,r,h):A.S(r,h)
d=A.aQ(e.h(0,p))
a0=d==null?null:B.k.N(d)
if(a0==null)a0=t.z5()
d=A.aQ(e.h(0,j))
a1=d==null?null:B.k.N(d)
if(a1==null)a1=0
a2=B.k.D(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return A.b(t.a8j("Time's up \u2014 no progress to pay."),$async$mu)
case 22:w=23
return A.b(t.Gp(),$async$mu)
case 23:w=1
break
case 21:a3=g.h(0,"wagers")
r=A.aQ((s.b(a3)?A.Z(a3,r,h):A.S(r,h)).h(0,j))
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
t.n(new C.d4l(t,a8,a2))
r=t.a
r.toString
h=B.o.u(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+B.k.aa(a7,2):d+" ("+b1+"/"+b2+")"
r.hk(new A.cX(h,b0,a9,B.fs,B.f5,d,null,null,B.cf,new A.Q(Date.now(),0,!1)))
t.a.bn()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+B.k.aa(a9,2)+" (includes opponent bonus $"+B.k.aa(a7,2)+")":"+$"+B.k.aa(a8,2)+" (your progress payout)"
s=t.a
C.tZ(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return A.b(t.DR(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$mu)
case 24:w=25
return A.b(t.Gp(),$async$mu)
case 25:case 1:return A.h(u,v)}})
return A.i($async$mu,v)},
Dh(d,e,f){return this.c8U(d,e,f)},
c8U(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Dh=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a9(0)
s=t.b_
if(s!=null)s.a9(0)
r=t.a.x*1.46*d
t.n(new C.d4_(t,r,d))
s=B.o.u(1000*Date.now())
q=t.a
p=new A.cX(s,q.c.a,r,B.fs,B.f5,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,B.cf,new A.Q(Date.now(),0,!1))
A.aeO(p,!0)
t.a.hk(p)
t.a.bn()
if(t.c==null){w=1
break}o=B.k.U(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&A.c()
m=q+C.af1(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?B.d.cI(t.cy,0,new C.d40()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+B.k.aa(r,2)+" ("+n+"% \u2014 "+A.t(k)+" mistakes/missed)":"+$"+B.k.aa(r,2)+" ("+n+"% of full prize)"
q=t.a
C.tZ(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return A.b(t.DR(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$Dh)
case 3:w=4
return A.b(C.aeG(t.a.f,j),$async$Dh)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Dh,v)},
bVe(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.z5()
v=o.MS()}catch(u){return}if(v<=0||w<=0)return
t=B.k.D(w/v,0,1)
s=A.Pc(B.k.aa(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=B.o.u(1000*Date.now())
p=o.a
r.hk(new A.cX(q,p.c.a,s,B.fs,B.f5,"Game partial: "+p.f+" ("+A.t(w)+"/"+A.t(v)+", left early)",n,n,B.cf,new A.Q(Date.now(),0,!1)))
o.a.bn()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.tZ(s,n,"Left early \xb7 +$"+B.k.aa(s,2)+" ("+A.t(w)+"/"+A.t(v)+")",q,r,p,n,!0)},
a8i(d,e){return this.bJy(d,e)},
bJy(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a8i=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a9(0)
s=t.b_
if(s!=null)s.a9(0)
r=B.o.u(1000*Date.now())
s=t.a
q=s.c.a
p=s.x
s=s.f
o=Date.now()
t.a.hk(new A.cX(r,q,p,B.fs,B.f5,"Game payout: "+s+" (draw, stake returned)",null,null,B.cf,new A.Q(o,0,!1)))
t.a.bn()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.tZ(o,null,"Draw. Your $"+B.k.aa(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.DR(d,"Nobody won, so your $"+B.k.aa(t.a.x,2)+" stake was returned.","DRAW",!1),$async$a8i)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8i,v)},
VL(d,e){return this.bJz(d,e)},
a8j(d){return this.VL(null,d)},
bJz(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$VL=A.e(function(f,g){if(f===1)return A.f(g,v)
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
C.tZ(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return A.b(t.DR(d,e,"YOU LOSE",!1),$async$VL)
case 3:case 1:return A.h(u,v)}})
return A.i($async$VL,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&A.c()
w=B.o.aj(m,60)
m=B.a.aT(B.o.u(B.o.H(m,60)),2,"0")
v=A.aF(n,n,n,n,B.ai8,n,n,n,new C.d4A(d),n,n,n,n,n,n)
if(o.ghr()){u=o.by
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=A.D(A.d(u?t.f+" vs "+A.t(o.by):t.f,n,2,B.a2,n,n,n,B.fQ,n,n,n),1)
r=A.m(10)
q=x.p
r=A.B(A.a([v,s,A.p(n,C.anO(new C.d4B(o),B.qS,t.c.a),B.h,n,n,new A.o(B.cN,n,n,r,n,n,B.n),n,n,n,n,B.fJ,n,n,n)],q),B.m,n,B.e,B.j,0,n,n)
t=o.a
s=t.w
v=A.m(10)
s=A.p(n,A.B(A.a([A.D(A.d("Win $"+B.k.aa(t.x*1.46,2)+" \xb7 stake $"+B.k.aa(o.a.x,2)+" \u2022 Progress "+o.z5()+"/"+o.MS(),n,n,n,n,n,n,D.eEf,n,n,n),1),new C.amZ(o.a.c.a,new C.d4C(o),n),B.aa,D.bt9,B.d6,A.d(""+w+":"+m,n,n,n,n,n,n,B.ox,n,n,n)],q),B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(n,n,n,v,n,new A.a7(B.a3,B.a7,B.w,s,n,n),B.n),n,n,n,n,B.fV,n,n,n)
v=o.a.w
m=A.U(v).k("J<1,w>")
m=A.z(new A.J(v,new C.d4D(),m),m.k("ai.E"))
w=A.m(14)
v=A.H(B.bf,B.r,1)
p=C.aMi(n,D.aZ4,A.bq(!0,new A.C(Ae.Vf,A.u(A.a([r,s,B.P,new A.fi(new C.d4E(o),n),B.ar,A.D(A.p(n,o.bJx(),B.h,n,n,new A.o(n,n,v,w,n,new A.a7(B.a3,B.a7,B.w,m,n,n),B.n),n,n,n,n,B.ch,n,n,n),1)],q),B.af,n,B.e,B.j,0,B.p),n),!0,!1,B.ah,!0,!0))
if(!o.c4)return p
m=A.W(140,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255)
w=A.W(242,B.ig.l()>>>16&255,B.ig.l()>>>8&255,B.ig.l()&255)
v=A.m(18)
u=A.H(B.bf,B.r,1)
return new A.am(B.W,n,B.a9,B.q,A.a([p,A.bZ(0,A.p(B.A,A.e1(A.p(n,A.u(A.a([D.ern,B.ab,A.d(o.cT,n,n,n,n,n,n,D.eFD,B.L,n,n),B.ar,A.d(o.cf,n,n,n,n,n,n,D.eDZ,B.L,n,n)],q),B.m,n,B.e,B.R,0,B.p),B.h,n,n,new A.o(w,n,u,v,n,n,B.n),n,n,n,B.uk,B.wz,n,n,n),!1,n),B.h,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
bWc(){var w=this.k3
return A.cj(new C.d3Z(this,w,B.k.dF(this.fr.length/w)))},
bJx(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.bWc()
if(m==="scramble"){m=o.r
m===$&&A.c()
w=x.l
return A.u(A.a([A.d(m,n,n,n,n,n,n,B.nH,n,n,n),A.d("Words "+o.be+"/5",n,n,n,n,n,n,B.BW,n,n,n),B.ab,A.d("Tap letters below to fill each slot",n,n,n,n,n,n,A.l(n,n,A.W(166,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.T,A.c8(B.fF,A.ii(o.ay.length,new C.d3H(o),!0,w),B.bx,6,6),B.aO,A.c8(B.fF,A.ii(o.ch.length,new C.d3I(o),!0,w),B.bx,8,8),B.aO,new A.a3(1/0,n,A.i5(D.f2E,o.gbzo(),A.ff(n,n,B.aB,n,n,n,n,n,n,B.c,n,n,B.cc,n,n,n,n,n,n,n)),n)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="typing"){m=o.w
m===$&&A.c()
return new C.apb(m,o.e,new C.d3J(o),new C.d3K(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&A.c()
m=A.a([A.d(m,n,n,n,n,n,n,B.nH,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(A.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,B.BW,n,n,n))
m.push(B.ab)
if(o.a.e==="sequence"){w=o.au
w===$&&A.c()
w+=", ?"}else w=o.CW
m.push(A.eX(B.A,A.d(w,n,n,n,n,n,n,B.ou,B.L,n,n),B.h,B.dp))
m.push(B.aO)
w=o.x
B.d.v(m,new A.J(w,new C.d3L(o),A.U(w).k("J<1,r>")))
return A.u(m,B.m,n,B.e,B.j,0,B.p)}if(m==="puzzle")return A.cj(new C.d3M(o))
if(m==="simon"){m=o.r
m===$&&A.c()
return A.u(A.a([A.d(m,n,n,n,n,n,n,B.nH,n,n,n),A.d("Progress "+o.p3+"/21",n,n,n,n,n,n,B.BW,n,n,n),B.P,A.D(A.m_(1,A.ii(4,new C.d3N(o),!0,x.l),2,10,10,n,B.dL,!1),1)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="pattern")return A.cj(new C.d3O(o))
if(m==="color"){u=A.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[B.dz,B.dr,B.hB,B.qA]
m=o.r
m===$&&A.c()
m=A.d(m,n,n,n,n,n,n,B.nH,n,n,n)
w=A.d("Round "+o.b3+"/5",n,n,n,n,n,n,B.BW,n,n,n)
v=o.aA
v===$&&A.c()
s=o.aK
s===$&&A.c()
s=A.a([m,w,B.ab,A.d(v,n,n,n,n,n,n,A.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.aO],x.p)
r=J.e_(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=A.ff(n,n,A.W(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,B.c,n,n,B.eW,n,n,n,n,n,n,n)
r[q]=new A.C(B.cK,new A.a3(1/0,n,A.i5(new A.x(u[q],n,B.cr,n,n,n,n,n,n,n,n,n),new C.d3P(o,u,q),m),n),n)}B.d.v(s,r)
return A.u(s,B.m,n,B.e,B.j,0,B.p)}if(m==="reflex"){m=o.y
p=m?B.bn:B.cl
w=o.r
w===$&&A.c()
w=A.d(w,n,n,n,n,n,n,B.a4e,B.L,n,n)
v=A.d("Fast taps "+o.Y+"/5",n,n,n,n,n,n,D.eBv,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=A.d(m,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,n,n,n,Math.min(A.aG(s,B.bP,x.w).w.a.a*0.18,72),n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return A.qW(A.aH(B.c5,A.di(n,A.u(A.a([w,B.P,v,B.b7,s,B.b7,new A.C(B.DC,A.d(m,n,n,n,n,n,n,A.l(n,n,A.W(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),B.m,n,B.b6,B.j,0,B.p),p,n,B.b8,n,T.zx,n,n,n,n,n,n,n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gbOX(),n,n,n,n,n,n,!1,B.ae))}if(B.d.t(D.NN,m)&&o.aX!=null){m=o.a.e
w=o.aX
w.toString
return C.hEJ(m,new C.d3Q(o),new C.d3R(o),o.d,w)}m=o.r
m===$&&A.c()
return A.at(A.d(m,n,n,n,n,n,n,B.di,n,n,n),n,n,n)}}
C.ajs.prototype={
S(){return new C.bcV()},
cHT(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bcV.prototype={
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.a,a0=d.c,a1=d.d
d=A.aG(a2,B.e2,x.w).w
w=x.p
v=A.a([A.bJD(!1,f.a.r,"INVESTMENT PLANS",e),B.d3],w)
u=a0.x
if(u!=null){t=u.d.bQ()
s=B.a.aT(B.o.u(A.bB(t)),2,"0")
r=B.a.aW(B.o.u(A.bw(t)+1),2)
q=A.m(18)
p=A.H(D.aaC,B.r,2.2)
o=x.V
n=A.a([new A.aa(0,B.G,A.W(89,B.pY.l()>>>16&255,B.pY.l()>>>8&255,B.pY.l()&255),B.eK,20),new A.aa(0,B.G,A.W(102,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),B.dm,14)],o)
m=A.an(e,A.p(e,e,B.h,e,e,new A.o(A.W(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),e,e,e,e,e,B.a5),e,120,e,e,e,e,e,120),e,e,e,-20,-24,e)
l=A.m(10)
k=A.H(D.aaC,B.r,3.4)
o=A.a([new A.aa(0,B.G,A.W(166,B.pY.l()>>>16&255,B.pY.l()>>>8&255,B.pY.l()&255),B.dH,10),new A.aa(0,B.G,A.W(89,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),B.cA,6)],o)
o=A.B(A.a([A.p(e,e,B.h,e,e,new A.o(e,e,k,l,o,new A.a7(B.ax,B.aC,B.w,D.cMR,D.cq_,e),B.n),e,42,e,e,e,e,e,56),B.b7,f.b1U(a2,!0)],w),B.m,e,B.e,B.j,0,e,e)
l=A.Ce(u.a,1,B.a2,D.eIA)
k=u.b
j=u.c
i=A.Ce("Making $"+A.dw(k*j)+" Daily",1,B.a2,D.eIN)
h=A.Ce(f.aY_(k),1,B.a2,D.eCd)
r=A.B(A.a([A.D(A.u(A.a([D.eXk,A.Ce(a0.c,1,B.a2,D.aKh)],w),B.F,e,B.e,B.j,0,B.p),1),A.u(A.a([D.eX6,A.d(s+"/"+r,e,e,e,e,e,e,D.aKh,e,e,e)],w),B.dF,e,B.e,B.j,0,B.p)],w),B.m,e,B.e,B.j,0,e,e)
s=A.p(e,e,B.h,A.W(89,D.w2.l()>>>16&255,D.w2.l()>>>8&255,D.w2.l()&255),e,e,e,1,e,e,e,e,e,e)
j=A.B(A.a([f.anX("INVESTED","$"+A.dw(k),!0),f.anX("DAILY ROI",B.k.aa(j*100,2)+"%",!0),f.anX("DAYS LEFT",""+(261-u.f)+" d",!0)],w),B.m,e,B.hz,B.j,0,e,e)
k=A.dw(u.e)
u=u.f
g=261-u>0?"ACTIVE":"ENDED"
B.d.v(v,A.a([D.f2f,B.tC,A.p(e,new A.am(B.W,e,B.a9,B.q,A.a([m,A.u(A.a([o,B.P,D.eVU,B.bA,l,B.av,i,B.av,h,B.P,r,B.ar,s,B.ar,j,B.av,A.Ce("Earned $"+k+" \u2022 Clocked "+u+"/261 \u2022 "+g,1,B.a2,D.eI_)],w),B.F,e,B.e,B.R,0,B.p)],w),e),B.h,e,e,new A.o(e,e,p,q,n,D.bHF,B.n),e,e,e,e,B.bB,e,e,1/0),B.a3w],w))}v.push(D.eOt)
v.push(B.tC)
B.d.v(v,new A.J(a1,new C.d7X(f,a2),A.U(a1).k("J<1,r>")))
return A.cd(e,B.K,A.bq(!1,A.ch(A.u(v,B.F,e,B.e,B.j,0,B.p),B.q,e,B.z,e,new A.M(20,10,20,124+d.r.d),e,e,B.aj),!0,!1,B.ah,!0,!0),e,!1,!1,e,e)},
b1U(d,e){var w=null,v=A.W(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(8),t=A.H(B.j_,B.r,1)
return A.p(w,A.B(A.a([A.V(B.ag5,B.c,w,w,w,16),B.d6,A.d("TAP",w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.R,0,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.et,w,w,w)},
aY_(d){var w=B.a.aT(B.o.u(B.k.U(d*100)),4,"0")
return"****  ****  ****  "+B.a.aW(w,w.length-4)},
anX(d,e,f){var w=null,v=A.W(217,D.w2.l()>>>16&255,D.w2.l()>>>8&255,D.w2.l()&255)
v=A.d(d,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.u(A.a([v,B.bA,A.Ce(e,w,w,A.l(w,w,E.zh,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),B.F,w,B.e,B.j,0,B.p)},
caX(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gcM6(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
o=A.a([new A.aa(0,B.G,A.W(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.Py,16),new A.aa(0,B.G,A.W(115,B.ai.l()>>>16&255,B.ai.l()>>>8&255,B.ai.l()&255),B.dm,14),new A.aa(0,B.G,A.W(51,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),B.cA,8)],p)
n=A.an(d,A.p(d,d,B.h,d,d,new A.o(d,d,d,d,d,new A.bR(B.A,0.5,B.w,d,0,A.a([A.W(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),A.W(0,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)],x.O),d,d),B.a5),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=A.m(5)
l=A.H(B.c,B.r,2.2)
k=A.aY(4286436348)
k=A.W(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=A.W(B.k.U(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
i=A.aY(4279150057)
h=x.p
p=A.B(A.a([new A.a3(44,44,new A.am(B.W,d,B.a9,B.h,A.a([A.an(d,A.et(B.A,0.7853981633974483,A.p(d,d,B.h,d,d,new A.o(d,d,l,m,A.a([new A.aa(0.5,B.G,k,B.J,14),new A.aa(0,B.G,j,B.J,6),new A.aa(0,B.G,A.W(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new A.v(0,2),4)],p),D.bGk,B.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.dTB],h),d),d),B.b7,e.b1U(b2,!0)],h),B.m,d,B.e,B.j,0,d,d)
a6=A.Ce(a6,1,B.a2,D.ez9)
i=A.Ce(e.aY_(a3),1,B.a2,D.eMX)
j=A.B(A.a([e.aXr(B.k.aa(2.86,2)+"%"),B.eA,e.aXr("261d")],h),B.m,d,B.e,B.j,0,d,d)
k=A.D(A.u(A.a([D.ePD,A.Ce("$"+A.dw(a3),1,B.a2,D.eLO)],h),B.F,d,B.e,B.j,0,B.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=A.B(A.a([k,A.d(m,d,d,d,d,d,d,D.ezU,d,d,d)],h),B.dF,d,B.e,B.j,0,d,d)
k=A.p(d,d,B.h,A.W(89,B.bw.l()>>>16&255,B.bw.l()>>>8&255,B.bw.l()&255),d,d,d,1,d,d,d,d,d,d)
l=A.B(A.a([A.D(e.auS("Daily","$"+A.dw(a4)),1),B.eA,A.D(e.auS("Total","$"+A.dw(a4*261)),1),B.eA,A.D(e.auS("Days","261"),1)],h),B.m,d,B.e,B.j,0,d,d)
g=q?d:new C.d7W(e,b3,a3,t)
f=B.k.U(127.5)
f=A.ff(d,d,B.bi,A.W(f,B.ai.l()>>>16&255,B.ai.l()>>>8&255,B.ai.l()&255),A.W(f,B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255),d,3,d,d,B.aN,d,d,d,d,new A.b5(A.m(10),D.aPU),d,d,d,d,d)
return A.p(d,new A.am(B.W,d,B.a9,B.h,A.a([n,A.u(A.a([p,B.bA,D.eY0,B.bA,a6,B.d5,i,B.h0,j,B.h0,m,B.h0,k,B.h0,l,B.P,new A.a3(1/0,40,A.i5(A.eX(B.A,A.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.eAh,d,d,d),B.h,B.e8),g,f),d)],h),B.F,d,B.e,B.R,0,B.p)],h),d),B.h,d,d,new A.o(d,d,w,a0,o,D.bId,B.n),d,d,d,B.ku,D.bfL,d,d,1/0)},
aXr(d){var w=null,v=A.W(115,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(5),t=A.H(B.cp,B.r,1)
return A.p(w,A.d(d,w,w,w,w,w,w,D.ezx,w,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.DR,w,w,w)},
auS(d,e){var w=null,v=A.W(97,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(7),t=A.H(B.aJ,B.r,1)
return A.p(w,A.u(A.a([A.d(d,w,w,w,w,w,w,D.eIl,w,w,w),B.ve,A.eX(B.a3,A.d(e,w,w,w,w,w,w,D.eKT,w,w,w),B.h,B.dp)],x.p),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.lY,w,w,w)}}
C.afN.prototype={
S(){var w=null,v=A.a([],x._),u=$.au()
return new C.auB(v,new A.ap(B.as,u),new A.ap(B.as,u),A.m9(0,w,w),new A.hR(),D.P_,C.aeD(),A.a([],x.fw),A.aZ(x.N),A.m9(0,w,w))}}
C.auB.prototype={
Z(){var w,v,u,t,s,r=this
r.a0()
w=r.a
w.toString
r.d=0
v=A.yA(0,1)
r.e!==$&&A.aO()
r.e=v
r.ay=w.f.aA
w=r.k3=A.bj(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t].a
if(s.length!==0)u.J(0,s)}r.a9F()
r.Nc()
r.anz()
r.cnh()
r.cnw()
$.aT.x1$.push(new C.cwS(r))
r.a.toString},
Nc(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Nc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.anp(),$async$Nc)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cwc(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Nc,v)},
gaws(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gN8())return!0
return!1},
gN8(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaQV(){var w,v=this.CW
if(v==null)return B.bv
w=v.bv(new A.Q(Date.now(),0,!1))
return w.a<0?B.bv:w},
bv5(){var w=this
if(w.a.c.w)return
if(w.gN8()){if(!w.cx)w.n(new C.cw2(w))}else if(w.cx)w.n(new C.cw3(w))},
cgR(){this.n(new C.cwm(this))},
t1(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$t1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.n(new C.cwj(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.n(new C.cwk(t))
w=1
break}w=3
return A.b(C.c45(o.a,s),$async$t1)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return A.b(C.c46(t.a.c.a,s),$async$t1)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.n(new C.cwl(t,r,q))
t.cpe()
t.bv5()
if(r===3)t.WM(r)}case 1:return A.h(u,v)}})
return A.i($async$t1,v)},
WM(d){return this.bW3(d)},
bW3(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$WM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return A.b(C.bzA(q,r,new C.cwe(t),d,s.c.a),$async$WM)
case 3:case 1:return A.h(u,v)}})
return A.i($async$WM,v)},
wt(d){return this.bww(d)},
anz(){return this.wt(!1)},
bww(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$wt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return A.b(A.a5R(k,C.h42(l.d)),$async$wt)
case 3:j=m
w=4
return A.b(C.c4v(k),$async$wt)
case 4:s=j.a=f
w=5
return A.b(A.aoc(k),$async$wt)
case 5:r=f
w=!s.a&&J.ct(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.Tq(!0,l,q,p)
m.a=s
w=8
return A.b(C.anr(k,s),$async$wt)
case 8:case 7:w=9
return A.b(C.Sr(k),$async$wt)
case 9:o=f
w=10
return A.b(C.a5e(k),$async$wt)
case 10:n=f
if(t.c==null){w=1
break}t.n(new C.cw4(m,t,r,o,n))
case 1:return A.h(u,v)}})
return A.i($async$wt,v)},
Oo(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Oo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Nc(),$async$Oo)
case 3:s=t.c
if(s==null){w=1
break}r=A.eH(new C.cwh(t),!1,null,x.H)
w=4
return A.b(A.a8(s,!1).cr(r),$async$Oo)
case 4:w=5
return A.b(t.Nc(),$async$Oo)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Oo,v)},
crj(){this.n(new C.cwF(this))},
cnw(){var w=this,v=w.go
if(v!=null)v.a9(0)
if(w.a.c.w)return
w.go=A.dD(B.qc,new C.cwz(w))},
cpe(){var w=this,v=w.id
if(v!=null)v.a9(0)
w.id=null
if(!w.gN8()||w.CW==null)return
w.id=A.dD(B.h3,new C.cwC(w))},
cnh(){var w=this,v=w.fy
if(v!=null)v.a9(0)
w.fy=A.dD(B.j1,new C.cwy(w))
w.DW()},
DW(){return this.cpd()},
cpd(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$DW=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aA
t=4
w=7
return A.b(A.ax(),$async$DW)
case 7:q=e
p=A.aS(J.q(q.a,"app_config"))
if(p!=null&&p.length!==0){o=B.Q.aD(0,p,null)
if(x.f.b(o)){m=A.C0(A.Z(o,x.N,x.z)).aA
i.a=m
r.a.f.aA=m}}w=10
return A.b(A.Jw(),$async$DW)
case 10:w=e?8:9
break
case 8:w=11
return A.b(A.aMh(),$async$DW)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aA=l
w=14
return A.b(q.ap("String","app_config",B.Q.al(k.ac(),null)),$async$DW)
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
break}if(i.a!==r.ay)r.n(new C.cwA(i,r))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DW,v)},
b0N(){B.d.aY(this.f,new C.cwx())},
a9F(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a9F=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Lh(t.a.c.a),$async$a9F)
case 3:q=e
if(t.c==null){w=1
break}s=A.a([],x._)
if(J.ct(q)){B.d.v(s,q)
B.d.aY(s,new C.cw9())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(A.E(["role","ai","text",r,"at",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z))}t.n(new C.cwa(t,s))
t.a_m(!0)
A.bM(B.jf,new C.cwb(t),x.H)
case 1:return A.h(u,v)}})
return A.i($async$a9F,v)},
ad0(){var w=0,v=A.j(x.H),u=this
var $async$ad0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.alf(u.a.c.a,u.f),$async$ad0)
case 2:return A.h(null,v)}})
return A.i($async$ad0,v)},
bp(d){this.bA(d)},
p(){var w,v=this,u=v.fy
if(u!=null)u.a9(0)
u=v.go
if(u!=null)u.a9(0)
u=v.id
if(u!=null)u.a9(0)
u=v.r
w=$.au()
u.R$=w
u.O$=0
u=v.w
u.R$=w
u.O$=0
v.ok.p()
v.x.p()
u=v.e
u===$&&A.c()
u.p()
v.a2()},
a8F(d){var w,v=this
v.n(new C.cw7(v,d))
w=v.e
w===$&&A.c()
if(w.f.length!==0)w.A4(d,B.co,B.ks)
else $.aT.x1$.push(new C.cw8(v,d))
if(d===0)v.a_m(!0)
if(d===1)v.ciK(!0)},
a_m(d){$.aT.x1$.push(new C.cwp(this,d))},
aw5(){return this.a_m(!1)},
ZH(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_4(),$async$ZH)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==B.a.i(t.a.f.r))t.n(new C.cwi(t))
case 1:return A.h(u,v)}})
return A.i($async$ZH,v)},
mt(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$mt=A.e(function(c8,c9){if(c8===1){s.push(c9)
w=t}for(;;)switch(w){case 0:c5=B.a.i(q.r.a.a)
if(J.a9(c5)===0){w=1
break}a8=q.a
a9=a8.c
w=!a9.w?3:4
break
case 3:b0=a8.f.xr
w=b0>0?5:6
break
case 5:w=9
return A.b(C.ank(a9.a,b0),$async$mt)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return A.b(q.t1(),$async$mt)
case 10:q.n(new C.cwq(q))
w=1
break
case 8:w=11
return A.b(q.t1(),$async$mt)
case 11:if(q.c!=null&&q.ch===3)q.WM(3)
case 6:case 4:q.n(new C.cwr(q,c5))
C.Se(q.a.c.a,"user",c5)
q.aw5()
t=13
a8={}
w=16
return A.b(q.ZH(),$async$mt)
case 16:b1=B.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return A.b(A.a_4(),$async$mt)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.n(new C.cws(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.bxI("",null)
q.n(new C.cwt(q,p))
C.Se(q.a.c.a,"ai",p)
q.aw5()
r=[1]
w=14
break}o=A.mH(a9)
a9=q.a
n=""
m=C.h42(a9.d)
w=C.h3W(c5)?20:21
break
case 20:w=22
return A.b(C.c4u(q.a.c.a),$async$mt)
case 22:q.db=c9
w=23
return A.b(q.wt(!0),$async$mt)
case 23:case 21:w=24
return A.b(A.a5R(q.a.c.a,m),$async$mt)
case 24:l=c9
k=C.hlH(l)
a9=k
b2=Date.now()
b3=new A.Q(b2,0,!1).bQ()
b2=B.a.aT(B.o.u(A.bB(b3)),2,"0")
b4=B.a.aT(B.o.u(A.bQ(b3)),2,"0")
b5=B.a.aT(B.o.u(A.dk(b3)),2,"0")
b6=B.a.aT(B.o.u(A.hf(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+A.bw(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return A.b(C.Sr(q.a.c.a),$async$mt)
case 25:i=c9
h=C.fPu(i,25)
w=26
return A.b(C.a5e(q.a.c.a),$async$mt)
case 26:g=c9
f=C.fR7(g)
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
return A.b(C.aeE(a9,q.a.c.a,c5),$async$mt)
case 27:a0=c9
a1=""
if(C.h3W(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:B.a.i(b2).length!==0)===!0){b2.toString
b8=B.a.i(b2)}else{a9=a9.c
b8=B.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=A.t(d)
b4=A.t(j)
b5=q.a.c.w?"\n"+C.hHr(m)+"\n":""
b6=J.a9(n)!==0?"\n"+A.t(n)+"\n":""
b9=J.a9(a0)!==0?"\n"+A.t(a0)+"\n":""
c0=A.t(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hg5(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+A.t(c5)
w=28
return A.b(A.qh(o,a2,B.h8,null),$async$mt)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.bxI(a8.a,a3.a)
a4=c2
a5=A.h3i(a4)
c3=a5.a
a8.b=c3
if(B.d.gah(c3)){a9=A.z(C.hK9(c5),x.an)
a6=a9
J.fT(a6,C.hKa(c5))
J.fT(a6,C.hKb(c5))
J.fT(a6,A.h2L(c5))
J.fT(a6,C.hKe(c5,q.a.c.w))
a8.b=a6}c3=C.hJn(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return A.b(A.aeU(c3,a6,m,q.a.c.a),$async$mt)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.n(new C.cwu(a8,q,a7))
C.Se(q.a.c.a,"ai",a7)
if(J.ct(a8.b)&&q.c!=null)q.Io(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.n(new C.cwv(q))
C.Se(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.n(new C.cww(q))
q.aw5()
q.ad0()
if(!q.a.c.w)q.t1()
w=r.pop()
break
case 15:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$mt,v)},
c9X(d){var w=A.S(x.N,x.z)
w.m(0,"type",d.a)
w.v(0,d.b)
return w},
c9Y(d){var w,v,u,t,s,r,q,p=J.q(d,"phoneActions")
if(!x.j.b(p))return B.i3
w=A.a([],x.Z)
for(v=J.aV(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gT(v)
if(u.b(r)){q=A.c7B(A.Z(r,t,s))
if(q!=null)w.push(q)}}return w},
Io(d){return this.chk(d)},
chk(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Io=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J.aV(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gT(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return A.b(C.aeP(p,o,new C.cwn(t,p)),$async$Io)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return A.b(A.Ff(p,null,o,!1,!0,t.a.c.a),$async$Io)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.G(r).f
p.P(new A.b_(new A.x(m,null,null,null,null,null,null,null,null,null,null,null),B.cl,null,null,null,null,null,null,null,null,null,null,null,B.nm,!1,null,null,null,B.q,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return A.b(A.Ff(p,l.f,o,k,n,j),$async$Io)
case 11:m=f
if(t.c==null||m==null){w=3
break}w=i?12:13
break
case 12:p=p.b
o=J.a6(p)
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
return A.b(C.aV8(p,A.a([new C.qK("out_"+1000*o,new A.Q(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$Io)
case 14:t.anz()
case 13:p=t.c.G(r).f
p.P(new A.b_(new A.x(m,null,null,null,null,null,null,null,null,null,null,null),B.dk,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null))
w=3
break
case 4:case 1:return A.h(u,v)}})
return A.i($async$Io,v)},
Q5(d){return this.cpK(d)},
cpK(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Q5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return A.b(C.aeP(d,n,new C.cwE(t)),$async$Q5)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return A.b(A.Ff(d,null,n,!1,!0,t.a.c.a),$async$Q5)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.G(x.q).f.P(A.b0(null,null,null,B.cl,null,B.q,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.nm,null,null,null,null,null,null,null,null,null,null))
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
return A.b(A.Ff(d,q.f,r,p,n,o),$async$Q5)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.G(x.q).f.P(A.b0(null,null,null,B.dk,null,B.q,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Q5,v)},
ciK(d){$.aT.x1$.push(new C.cwo(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.L(d).ax.a===B.H,j=k?B.da:B.zn,i=m.d
i===$&&A.c()
w=x.O
w=k?A.a([B.ab3,D.b33],w):A.a([B.aK,B.rd],w)
v=A.m(22)
u=A.a([new A.aa(0,B.G,A.W(71,B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255),B.cs,16)],x.V)
t=m.a.c.w?m.gc5I():l
s=A.W(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
r=A.H(B.c1,B.r,1.5)
t=A.aH(l,A.p(l,C.fFH(m.a.f.Q,48),B.h,l,l,new A.o(s,l,r,l,l,l,B.a5),l,48,l,l,l,l,l,48),B.z,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,B.ae)
r=A.d("NGMY Helper",l,1,B.a2,l,l,l,B.dQ,l,l,l)
s=A.p(l,l,B.h,l,l,D.aRZ,l,8,l,l,l,l,l,8)
if(m.gaws()&&m.d===0)q=m.gN8()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=A.p(l,A.B(A.a([t,B.bc,A.D(A.u(A.a([r,B.bA,A.B(A.a([s,B.bq,A.D(A.d(q,l,1,B.a2,l,l,l,A.l(l,l,A.W(B.k.U(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,B.cq,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),1),A.aF(l,l,l,l,B.mJ,l,l,l,new C.cwK(d),l,l,l,l,l,l)],p),B.m,l,B.e,B.j,0,l,l),B.h,l,l,new A.o(l,l,l,v,u,new A.a7(B.ax,B.aC,B.w,w,l,l),B.n),l,l,l,G.acG,D.bgq,l,l,l)
v=k?D.re:B.c
u=A.m(14)
t=A.H(k?B.bG:B.em,B.r,1)
u=A.p(l,A.B(A.a([m.bz9(),m.cpt(1,B.lu,"Music")],p),B.m,l,B.e,B.j,0,l,l),B.h,l,l,new A.o(v,l,t,u,l,l,B.n),l,l,l,l,B.ef,l,l,l)
t=m.e
t===$&&A.c()
if(m.gaws()){v=A.a([],p)
if(m.gN8()){s=A.W(38,B.dk.l()>>>16&255,B.dk.l()>>>8&255,B.dk.l()&255)
r=A.m(12)
q=A.H(A.W(115,B.dk.l()>>>16&255,B.dk.l()>>>8&255,B.dk.l()&255),B.r,1)
v.push(new A.C(B.JV,A.p(l,A.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hk1(m.gaQV())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.eKm,B.L,l,l),B.h,l,l,new A.o(s,l,q,r,l,l,B.n),l,l,l,l,B.ei,l,l,1/0),l))}if(m.cy&&!m.gN8()){s=A.W(31,B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255)
r=A.m(12)
q=A.m(12)
o=A.V(B.rQ,k?B.iG:B.hh,l,l,l,16)
v.push(new A.C(B.JV,A.aD(!1,B.Y,!0,r,A.aI(!1,q,!0,new A.C(B.ei,A.B(A.a([o,B.bq,A.d("Back to NGMY Helper AI",l,l,l,l,l,l,A.l(l,l,k?B.iG:B.hh,l,l,l,l,l,l,l,l,12,l,l,B.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),B.m,l,B.b6,B.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcgQ(),l,l,l,l,l,l,l),B.h,s,0,l,l,l,l,l,B.ac),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcri():l
v.push(A.D(new C.ann(s,q,new C.cwL(),r,o,l),1))
v=A.u(v,B.m,l,B.e,B.j,0,B.p)}else v=m.bza(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.fS_(r)
t=A.a([w,B.ab,new A.C(B.iH,u,l),B.P,A.D(A.fSZ(A.a([v,new C.anq(q,o,n,new C.cwM(m,d),s,l)],p),B.q,t,B.z,new C.cwN(m),l),1)],p)
if(m.d===0&&!m.gaws()){w=A.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a_g:D.ZF
w.push(new A.a3(l,36,A.hG(l,new C.cwO(m),v.length,l,l,B.aZ,new C.cwP(),!1),l))}if(m.ax&&m.f.length<=1)w.push(B.P)
v=m.r
u=A.l(l,l,k?B.c:B.bh,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=A.l(l,l,k?B.aA:B.dw,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?B.x:B.c
r=A.W(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=A.m(22)
o=A.m(22)
n=k?B.bf:B.f2
u=A.D(A.aK(l,B.U,!1,l,!0,B.q,l,A.aL(),v,l,l,l,l,l,2,A.bm(l,new A.b2(4,q,B.V),l,B.zH,l,l,l,l,!0,new A.b2(4,o,new A.ay(n,1,B.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.z,!0,l,!0,l,!1,l,B.ag,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cwQ(m),l,!1,l,l,!1,l,!0,l,B.a8,l,l,l,l,l,l,l,l,l,l,l,u,!0,B.a6,l,B.am,l,B.aJc,l,l),1)
s=m.at
r=s?l:m.gcjK()
w.push(A.B(A.a([u,new A.Hj(v,B.aK,l),B.bq,A.aD(!1,B.Y,!0,l,A.aI(!1,l,!0,new A.a3(44,44,s?D.dNW:P.ai0,l),B.cE,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),B.h,B.aK,0,l,l,B.cE,l,l,B.ac)],p),B.dF,l,B.e,B.j,0,l,l))
w=A.u(w,B.m,l,B.e,B.R,0,B.p)
v=k?B.kS:B.c
t.push(A.tl(B.pN,A.p(l,new A.C(B.DE,w,l),B.h,l,l,new A.o(v,l,A.H(k?A.W(41,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.W(18,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),B.r,1),B.pN,l,l,B.n),l,l,l,l,l,l,l,l),14,!1))}return new A.Uj(i,new C.cwR(m),A.cd(l,j,A.bq(!0,A.u(t,B.m,l,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),l,!1,!1,l,l),l)},
bz9(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===0
p=this.c
p.toString
v=A.L(p).ax.a===B.H
if(w)p=A.W(B.k.U(255*(v?0.25:0.12)),B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255)
else p=B.K
u=A.m(11)
t=w?A.H(A.W(B.k.U(127.5),B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255),B.r,1):q
s=A.V(B.rS,w?B.aK:B.cT,q,q,q,17)
if(w)r=v?B.c:B.aG
else r=B.cT
return A.D(A.aH(q,A.di(q,A.B(A.a([s,B.bq,A.d("Chat",q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.b6,B.j,0,q,q),q,q,B.b8,new A.o(p,q,t,u,q,q,B.n),B.eG,q,q,q,B.wq,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cw5(this),q,q,q,q,q,q,!1,B.ae),1)},
cpt(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===d
p=this.c
p.toString
v=A.L(p).ax.a===B.H
if(w)p=A.W(B.k.U(255*(v?0.25:0.12)),B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255)
else p=B.K
u=A.m(11)
t=w?A.H(A.W(B.k.U(127.5),B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255),B.r,1):q
s=A.V(e,w?B.aK:B.cT,q,q,q,17)
if(w)r=v?B.c:B.aG
else r=B.cT
r=A.a([s,B.bq,A.d(f,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return A.D(A.aH(q,A.di(q,A.B(r,B.m,q,B.b6,B.j,0,q,q),q,q,B.b8,new A.o(p,q,t,u,q,q,B.n),B.eG,q,q,q,B.wq,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cwD(this,d),q,q,q,q,q,q,!1,B.ae),1)},
bza(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.b7L:A.W(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
w=A.m(18)
v=A.H(d?B.dv:B.aJ,B.r,1)
u=q===0?1:q
return A.p(s,A.jV(!0,s,t.ok,new C.cw6(t,e,d),u,s,B.c2,s,s,!1,!1),B.h,s,s,new A.o(r,s,v,w,s,s,B.n),s,s,s,B.iH,s,s,s,s)},
aKE(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a6(d),m=J.y(n.h(d,"role"),"user"),l=m?B.i3:this.c9Y(d),k=m?B.m8:B.e,j=x.p,i=A.a([],j),h=!m
if(h)B.d.v(i,A.a([new A.a3(28,28,C.fFH(this.a.f.Q,28),o),B.aa],j))
w=m?B.dF:B.F
j=A.a([],j)
if(h)j.push(D.dOb)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=B.aK
else u=e?B.Ue:B.aN
t=m?16:4
s=m?4:16
if(m)r=o
else r=A.H(e?B.bG:B.aJ,B.r,1)
q=A.a([new A.aa(0,B.G,A.W(10,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),B.dH,6)],x.V)
if(f)n=A.d("typing\u2026",o,o,o,o,o,o,A.l(o,o,e?B.aA:B.dw,o,o,o,o,o,o,o,o,12,B.cx,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=B.c
else p=e?B.al:B.bi
p=A.d(n,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(A.fBP(m,A.p(o,n,B.h,o,o,new A.o(u,o,r,new A.bv(B.kL,B.kL,new A.b3(t,t),new A.b3(s,s)),q,o,B.n),o,o,o,o,Ab.Vi,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(A.h3n(l,e,this.gcpJ()))
i.push(new A.dp(1,B.cj,A.u(j,w,o,B.e,B.j,0,B.p),o))
if(m)i.push(B.d6)
return new A.C(B.d8,A.B(i,B.dF,o,k,B.j,0,o,o),o)},
bz8(d,e){return this.aKE(d,e,!1)}}
C.aHq.prototype={
Z(){this.a0()
$.xL().aJ(0,this.gDb())},
p(){$.xL().a1(0,this.gDb())
this.a2()}}
C.aHr.prototype={
Z(){this.a0()
$.xL().aJ(0,this.gDb())},
p(){$.xL().a1(0,this.gDb())
this.a2()}}
C.aHs.prototype={
Z(){this.a0()
$.xL().aJ(0,this.gDb())},
p(){$.xL().a1(0,this.gDb())
this.a2()}}
C.aIn.prototype={
Z(){this.a0()
$.xL().aJ(0,this.gDb())},
p(){$.xL().a1(0,this.gDb())
this.a2()}}
C.U8.prototype={
a3(){return"NgmySnapshotResolveOutcome."+this.b}}
C.al_.prototype={
S(){return new C.azq()}}
C.azq.prototype={
Z(){var w,v=this
v.a0()
w=v.a
v.d=w.d
v.e=A.bj(w.e,!0,x.o)
v.f=v.a.f},
ks(d){var w=null,v=this.c
if(v==null)return
v.G(x.q).f.P(A.b0(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
zi(d,e){return this.cuG(d,e)},
cuG(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$zi=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.n(new C.doq(q,e))
t=3
w=6
return A.b(d.$0(),$async$zi)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.n(new C.dor(q))
w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$zi,v)},
zH(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$zH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=t.d
q===$&&A.c()
w=3
return A.b(A.u1(r,q),$async$zH)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.doh(t,s))
case 1:return A.h(u,v)}})
return A.i($async$zH,v)},
a7d(){var w=0,v=A.j(x.gE),u,t=this,s,r,q,p
var $async$a7d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.zH(),$async$a7d)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&A.c()
q=t.e
q===$&&A.c()
p=t.f
p===$&&A.c()
u=A.M3(s,A.In(A.bTY(r,q,s,p).eF(),null,"  "))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a7d,v)},
Vv(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Vv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oC(s,t.a.c,!1),$async$Vv)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zi(new C.dof(t),"Preparing download\u2026"),$async$Vv)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vv,v)},
WX(){var w=0,v=A.j(x.H),u,t=this,s
var $async$WX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oC(s,t.a.c,!1),$async$WX)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zi(new C.dop(t),"Creating QR code\u2026"),$async$WX)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WX,v)},
WW(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hCv(r),$async$WW)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.zi(new C.doe(t,s),"Looking up code\u2026"),$async$WW)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WW,v)},
aau(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$aau=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wl.c2().Ku(B.O5,B.rL,!0),$async$aau)
case 7:r=e
p=r
q=p==null?null:J.fh(p.a)
if(q==null){u=null
w=1
break}if(q.c!=null){p=q.c
p.toString
p=!B.aE.gah(p)}else p=!1
if(p){p=q.c
p.toString
p=A.je(p,0,null)
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
case 6:u=A.Fb()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aau,v)},
yX(d,e,f){return this.bBs(d,e,f)},
aLS(d,e){return this.yX(d,!1,e)},
bBr(d){return this.yX(d,!1,!1)},
bBs(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$yX=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(t.zH(),$async$yX)
case 3:if(t.c==null){w=1
break}if(!C.bU2(d,t.a.c,null)){t.ks(C.bU3(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&A.c()
s=!C.hfN(d,s)}if(s){t.ks(y.B)
w=1
break}r=d.as
q=J.ci(r)
s=t.c
s.toString
w=4
return A.b(C.hCI(s,q,t.a.c,d),$async$yX)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=A.lt(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,B.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&A.c()
r=o}w=5
return A.b(A.qO(s,p,r,!1,null,null,d.ax),$async$yX)
case 5:if(t.c==null){w=1
break}t.n(new C.dod(t,p,r,d))
t.ks("Restored your local Growth Income. Go back to see it updated.")
case 1:return A.h(u,v)}})
return A.i($async$yX,v)},
aat(){var w=0,v=A.j(x.H),u=this
var $async$aat=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.zi(new C.dog(u),"Reading file\u2026"),$async$aat)
case 2:return A.h(null,v)}})
return A.i($async$aat,v)},
UQ(d){return this.bCI(d)},
bCI(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$UQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&A.c()
s=new A.cX("local_qr_dep_"+1000*r,q.a,d,B.fj,B.f5,"Admin deposit ($"+A.dw(d)+")",null,null,B.cf,new A.Q(Date.now(),0,!1))
C.c6w(t.d,s)
q=t.e
q===$&&A.c()
r=A.z(q,x.o)
r.push(s)
w=3
return A.b(A.qO(t.a.c,t.d,r,!0,null,null,null),$async$UQ)
case 3:w=4
return A.b(t.zH(),$async$UQ)
case 4:if(t.c==null){w=1
break}t.ks("Deposited $"+A.dw(d)+" to your local wallet.")
case 1:return A.h(u,v)}})
return A.i($async$UQ,v)},
b0d(d){var w=null
return A.cf(w,w,!0,w,new C.don(),d,w,!0,!0,x.N)},
TZ(d){return this.bv_(d)},
bv_(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$TZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return A.b(t.UQ(d.b),$async$TZ)
case 5:w=1
break
case 4:s=d.c
t.ks(s==null?"Could not apply deposit.":s)
case 1:return A.h(u,v)}})
return A.i($async$TZ,v)},
Dw(d){return this.cex(d)},
cex(d){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Dw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.zH(),$async$Dw)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return A.b(C.aY_(d,t.a.c),$async$Dw)
case 4:s=f
if(!s.a){u=!1
w=1
break}if(s.b){t.ks("This deposit code was already used.")
u=!0
w=1
break}if(s.d){t.ks(y.y)
u=!0
w=1
break}if(s.c){t.ks(y.j)
u=!0
w=1
break}r=t.c
if(r==null){u=!0
w=1
break}w=5
return A.b(t.b0d(r),$async$Dw)
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
return A.b(C.c6p(d,o,n.a,r,p),$async$Dw)
case 7:w=6
return A.b(t.TZ(f),$async$Dw)
case 6:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Dw,v)},
Dx(d){return this.cey(d)},
cey(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Dx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.zH(),$async$Dx)
case 3:if(t.c==null){w=1
break}w=4
return A.b(C.c6o(d,t.a.c),$async$Dx)
case 4:s=f
if(!s.a){t.ks(y.m)
w=1
break}if(s.b){t.ks("This deposit code was already used.")
w=1
break}if(s.d){t.ks(y.y)
w=1
break}if(s.c){t.ks(y.j)
w=1
break}r=t.c
if(r==null){w=1
break}w=5
return A.b(t.b0d(r),$async$Dx)
case 5:q=f
if(q==null||B.a.i(q).length===0){w=1
break}r=t.a.c
p=B.a.i(q)
o=t.e
o===$&&A.c()
n=t.d
n===$&&A.c()
w=7
return A.b(C.TL(o,n.a,d,r,p),$async$Dx)
case 7:w=6
return A.b(t.TZ(f),$async$Dx)
case 6:case 1:return A.h(u,v)}})
return A.i($async$Dx,v)},
Nq(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.BH()){t.ks("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a8(s,!1).cr(A.eH(new C.doi(),!0,null,x.N)),$async$Nq)
case 3:r=e
if(r==null||B.a.i(r).length===0){w=1
break}w=B.a.a_(B.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return A.b(t.zi(new C.doj(t,r),"Applying deposit\u2026"),$async$Nq)
case 6:w=1
break
case 5:w=7
return A.b(t.zi(new C.dok(t,r),"Loading\u2026"),$async$Nq)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Nq,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.L(d).ax.a===B.H,m=n?B.iX:B.oR,l=n?B.c:B.M,k=n?B.aQ:B.ai,j=n?B.bG:B.x.j(0.06),i=x.p
j=A.B(A.a([A.aI(!1,o,!0,A.p(B.A,A.V(B.eo,l,o,o,o,16),B.h,o,o,new A.o(j,o,o,o,o,o,B.a5),o,38,o,o,o,o,o,38),B.cE,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dos(d),o,o,o,o,o,o,o)],i),B.m,o,B.e,B.j,0,o,o)
w=A.d("Backup & Restore",o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,B.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=A.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,B.cq,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=A.D(new C.Zq(D.bqA,"Download",E.a_x,u?o:p.gbHN(),o),1)
t=A.B(A.a([t,B.ep,A.D(new C.Zq(B.j5,"Show QR",D.d_7,u?o:p.gbXF(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r
s=A.D(new C.Zq(D.bqB,"Upload",B.a__,u?o:p.gbXD(),o),1)
s=A.B(A.a([s,B.ep,A.D(new C.Zq(B.iL,"Scan QR",D.cDf,u?o:p.gbXE(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r?o:p.gbXC()
r=n?B.c.j(0.06):B.aS.j(0.08)
q=A.m(16)
q=A.a([A.cL(A.a([j,B.ay,w,B.P,v,B.ke,t,B.ay,s,B.ay,new C.bo_(B.qn,"Enter Code",B.Zl,u,o),B.ke,A.p(o,A.B(A.a([A.V(B.hk,B.aS,o,o,o,18),B.aw,A.D(A.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.F,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(r,o,o,q,o,o,B.n),o,o,o,o,B.iJ,o,o,o)],i),o,Aa.K9,o,o,B.aj,!1)],i)
if(p.r){j=n?B.hr:B.c
w=p.w
if(w==null)w="Working\u2026"
q.push(A.an(0,A.aD(!1,B.Y,!0,o,new A.C(B.zK,A.B(A.a([I.aIa,B.bc,A.D(A.d(w,o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.m,o,B.e,B.j,0,o,o),o),B.h,j,8,o,o,o,o,o,B.ac),o,o,0,0,o,o))}return A.cd(o,m,A.bq(!1,new A.am(B.W,o,B.a9,B.q,q,o),!0,!1,B.ah,!0,!0),o,!1,!1,o,o)}}
C.Zq.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.aa(0,B.G,B.d.gai(s).j(0.35),B.dm,16)],x.V),p=B.c.j(0.22)
return A.aD(!1,B.Y,!0,u,A.aI(!1,t,!0,A.p(v,A.u(A.a([A.p(v,A.V(w.c,B.c,v,v,v,30),B.h,v,v,new A.o(p,v,v,v,v,v,B.a5),v,56,v,v,v,v,v,56),B.ab,A.d(w.d,v,v,v,v,v,v,B.qU,v,v,v)],x.p),B.m,v,B.b6,B.j,0,B.p),B.h,v,v,new A.o(v,v,v,r,q,new A.a7(B.ax,B.aC,B.w,s,v,v),B.n),v,140,v,v,B.c2,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.h,B.K,0,v,v,v,v,v,B.ac)}}
C.bo_.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.aa(0,B.G,B.d.gai(s).j(0.35),B.dm,16)],x.V),p=B.c.j(0.22)
return A.aD(!1,B.Y,!0,u,A.aI(!1,t,!0,A.p(v,A.B(A.a([A.p(v,A.V(w.c,B.c,v,v,v,24),B.h,v,v,new A.o(p,v,v,v,v,v,B.a5),v,44,v,v,v,v,v,44),B.ep,A.d(w.d,v,v,v,v,v,v,B.qU,v,v,v)],x.p),B.m,v,B.b6,B.j,0,v,v),B.h,v,v,new A.o(v,v,v,r,q,new A.a7(B.ax,B.aC,B.w,s,v,v),B.n),v,v,v,v,D.biw,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.h,B.K,0,v,v,v,v,v,B.ac)}}
C.Y3.prototype={
S(){return new C.bfj()}}
C.bfj.prototype={
gasZ(){var w=this.e
return w===$?this.e=this.a.d:w},
Z(){var w=this
w.a0()
w.P2()
w.f=A.dD(B.ni,new C.dow(w))},
p(){var w=this.f
if(w!=null)w.a9(0)
this.a2()},
P2(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$P2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return A.b(A.u1(q.e,q.f),$async$P2)
case 3:q=e.a
s=A.bTY(q[3],q[1],t.a.e,q[4])
w=4
return A.b(A.M3(t.a.e,A.In(s.eF(),null,"  ")),$async$P2)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.n(new C.dot(t,r))
case 1:return A.h(u,v)}})
return A.i($async$P2,v)},
B(d){var w=this,v=null,u=A.L(d).ax.a===B.H,t=u?B.iX:B.oR,s=u?B.hr:B.c,r=u?B.c:B.bh,q=A.eA(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,B.aL3,v,v,v,1,v,!0),p=A.m(24),o=A.H(B.aS.j(0.35),B.r,1),n=w.d,m=A.pk(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,B.c),l=A.d("Code: "+w.gasZ(),v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=A.m(20),j=B.aS.j(0.12),i=A.m(20),h=x.p
i=A.aI(!1,k,!0,A.p(v,A.B(A.a([A.V(B.fC,B.aS,v,v,v,14),B.bq,A.d("Copy code",v,v,v,v,v,v,A.l(v,v,B.aS,v,v,v,v,v,v,v,v,12,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),B.m,v,B.e,B.R,0,v,v),B.h,v,v,new A.o(j,v,v,i,v,v,B.n),v,v,v,v,B.lX,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dou(w,d),v,v,v,v,v,v,v)
return A.cd(q,t,new A.C(B.a8,A.u(A.a([A.D(A.p(v,A.u(A.a([B.P,m,B.bt,l,B.P,i,B.ay,A.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.ai,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v)],h),B.m,v,B.b6,B.j,0,B.p),B.h,v,v,new A.o(s,v,o,p,v,v,B.n),v,v,v,v,B.a8,v,v,1/0),1),B.aO,new A.a3(1/0,v,A.bK(B.yq,new C.dov(d),A.bk(B.aS,v,v,v,v,B.fP,v,v,v,v,v,v)),v)],h),B.m,v,B.e,B.j,0,B.p),v),v,!1,!1,v,v)}}
C.Y4.prototype={
S(){return new C.bfk(A.ye(B.wj,B.n4,B.t5))}}
C.bfk.prototype={
p(){this.d.p()
this.a2()},
B(d){var w=null
return A.cd(A.eA(w,w,w,!0,!0,B.x,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.f2z,w,w,w,1,w,!0),B.x,A.yd(this.d,B.bO,new C.dox(this,d)),w,!1,!1,w,w)}}
C.ac9.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.L(a0).ax.a===B.H,k=l?B.hr:B.c,j=l?B.c:B.M,i=l?B.aQ:B.ai,h=l?B.bf:B.em,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=A.m(26)
w=A.H(B.aS.j(0.35),B.r,1)
v=A.a([new A.aa(0,B.G,B.aS.j(0.16),B.jN,36)],x.V)
u=A.p(m,D.bwy,B.h,m,m,new A.o(m,m,m,A.m(18),B.a_w,D.bFH,B.n),m,58,m,m,m,m,m,58)
t=A.d("Restore local backup?",m,m,m,m,m,m,A.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,B.u,m,m,!0,m,-0.3,m,m,m,m,m,m),B.L,m,m)
s=A.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,A.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),B.L,m,m)
r=l?B.iX:B.oR
q=A.m(18)
p=A.H(B.aS.j(0.22),B.r,1)
o=x.p
g=A.a([new C.Of("Account",B.a.i(this.d),i,j,m),B.T,new C.Of("Balance","$"+A.dw(g.d),i,j,m)],o)
if(d!=null&&B.a.i(d).length!==0)B.d.v(g,A.a([B.T,new C.Of("Investment",d,i,j,m)],o))
g.push(B.T)
g.push(new C.Of("Saved on",""+A.bB(f)+"/"+A.bQ(f)+"/"+A.bw(f),i,j,m))
g.push(B.T)
g.push(new C.Of("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=A.p(m,A.u(g,B.F,m,B.e,B.j,0,B.p),B.h,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.c2,m,m,1/0)
r=B.aX.j(l?0.14:0.12)
q=A.m(14)
p=A.H(B.aX.j(0.35),B.r,1)
n=A.V(B.x2,l?B.aL:B.du,m,m,m,16)
return A.ew(m,B.K,new A.d1(B.SE,A.bT(new A.C(B.wC,A.u(A.a([u,B.aO,t,B.P,s,B.bt,g,B.ay,A.p(m,A.B(A.a([n,B.aa,A.D(A.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,A.l(m,m,l?B.bI:B.iY,m,m,m,m,m,m,m,m,11.5,m,m,B.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),B.F,m,B.e,B.j,0,m,m),B.h,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.ei,m,m,1/0),B.d3,A.B(A.a([A.D(A.dV(B.mY,new C.eFU(a0),A.db(m,m,m,m,m,m,m,m,m,j,m,m,B.cc,m,new A.b5(A.m(14),B.V),new A.ay(h,1,B.r,-1),m,m,m,m)),1),B.aw,A.D(A.bK(D.eNR,new C.eFV(a0),A.bk(B.aS,m,m,m,m,m,B.cc,m,new A.b5(A.m(14),B.V),m,m,m)),2)],o),B.m,m,B.e,B.j,0,m,m)],o),B.m,m,B.e,B.R,0,B.p),m),new A.o(k,m,w,e,v,m,B.n),B.ba),m),m,m,m,B.en,B.cZ,m,m,m)}}
C.Of.prototype={
B(d){var w=this,v=null
return A.B(A.a([new A.a3(92,v,A.d(w.c,v,v,v,v,v,v,A.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),A.D(A.d(w.d,v,v,v,v,v,v,A.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,B.I,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.F,v,B.e,B.j,0,v,v)}}
C.Xb.prototype={
S(){return new C.awM(new A.ap(B.as,$.au()),A.k9(!0,null,!0,!0,null,null,!1))}}
C.awM.prototype={
Z(){this.a0()
$.aT.x1$.push(new C.cZ6(this))},
p(){var w=this.d
w.R$=$.au()
w.O$=0
this.e.p()
this.a2()},
bXH(){var w,v=this.c
v.toString
w=B.a.i(this.d.a.a)
A.a8(v,!1).M(w)
return null},
B(d){var w=this,v=null,u=A.L(d).ax.a===B.H,t=u?B.hr:B.c,s=u?B.c:B.M,r=u?B.aQ:B.ai,q=u?B.iX:B.oR,p=u?B.bf:B.em,o=A.m(24),n=A.H(B.aS.j(0.35),B.r,1),m=A.a([new A.aa(0,B.G,B.aS.j(0.18),B.fE,32)],x.V),l=A.p(v,A9.aiK,B.h,v,v,new A.o(v,v,v,A.m(18),B.a_w,D.bIn,B.n),v,56,v,v,v,v,v,56),k=A.d("Enter restore code",v,v,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,B.u,v,v,!0,v,-0.3,v,v,v,v,v,v),B.L,v,v),j=A.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),B.L,v,v),i=A.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,B.I,v,v,!0,v,8,v,v,v,v,v,v),h=A.a([new A.tE(A.ae("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bnu(new C.cZ3())],x.G),g=A.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,B.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return A.ew(v,B.K,new A.d1(A1.Il,A.bT(new A.C(B.wC,A.u(A.a([l,B.aO,k,B.P,j,B.dW,A.aK(!1,B.U,!1,v,!0,B.q,v,A.aL(),w.d,v,v,v,v,v,2,A.bm(v,v,v,B.DK,v,v,"",v,!0,new A.b2(4,A.m(16),new A.ay(p,1,B.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new A.b2(4,A.m(16),D.aPS),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.z,!0,v,!1,v,!1,w.e,B.ag,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.cZ4(w),v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,i,!0,B.L,v,B.lF,v,v,v,v),B.dW,A.B(A.a([A.D(A.dV(B.mY,new C.cZ5(d),A.db(v,v,v,v,v,v,v,v,v,s,v,v,B.cc,v,new A.b5(A.m(14),B.V),new A.ay(p,1,B.r,-1),v,v,v,v)),1),B.aw,A.D(A.bK(D.eRd,w.gbXG(),A.bk(B.aS,v,v,v,v,v,B.cc,v,new A.b5(A.m(14),B.V),v,v,v)),2)],f),B.m,v,B.e,B.j,0,v,v)],f),B.m,v,B.e,B.R,0,B.p),v),new A.o(t,v,n,o,m,v,B.n),B.ba),v),v,v,v,B.Kb,B.cZ,v,v,v)}}
C.alu.prototype={
S(){return new C.bfq(B.cB)},
hk(d){return this.x.$1(d)},
bn(){return this.y.$0()}}
C.bfq.prototype={
Z(){var w,v=this
v.a0()
w=v.a
w.toString
$.rJ=$.rJ+1
v.r=B.o.N(B.o.D(C.fiE(w.e,w.d.y2),1,600))
w=v.a
if(!J.la(w.d.y2,w.e))v.r=C.hHU(v.a.e)
v.w=A.dD(B.h3,new C.duS(v))},
p(){var w=this.w
if(w!=null)w.a9(0)
this.c8O()
C.aWN()
this.a2()},
c8O(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:B.k.D(r.e/w,0,1)
if(v<=0)return
u=A.Pc(B.k.aa(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=B.o.u(1000*Date.now())
s=r.a
w.hk(new A.cX(t,s.c.a,u,B.fs,B.f5,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,B.cf,new A.Q(Date.now(),0,!1)))
r.a.bn()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.tZ(u,q,"Left early \xb7 +$"+B.k.aa(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
Iw(d,e){return this.ckm(d,e)},
b_S(d){return this.Iw(!1,d)},
ckl(d){return this.Iw(d,"")},
ckm(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Iw=A.e(function(f,g){if(f===1)return A.f(g,v)
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
C.tZ(s,null,o?"No progress":e,q,p,s,null,!1)
s=t.c
if(s==null){w=1
break}w=5
return A.b(C.bzu(s,C.bz8(),C.fJ4(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$Iw)
case 5:w=1
break
case 4:n=A.Pc(B.k.aa(t.a.w*1.46*r,2))
m=r>=1
t.n(new C.duJ(t,n,r))
s=B.o.u(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new A.cX(s,p,n,B.fs,B.f5,q,null,null,B.cf,new A.Q(Date.now(),0,!1))
A.aeO(l,!0)
t.a.hk(l)
t.a.bn()
if(m)k="+$"+B.k.aa(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+B.k.aa(n,2)+" ("+B.k.U(r*100)+"% of the prize)"}q=t.a
C.tZ(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return A.b(C.bzu(s,C.bz8(),C.fJ4(),""+t.e+"/"+t.f,k,q,!0),$async$Iw)
case 6:w=7
return A.b(C.aeG(t.a.f,k),$async$Iw)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Iw,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.r
m===$&&A.c()
w=B.o.aj(m,60)
v=B.a.aT(B.o.u(B.o.H(m,60)),2,"0")
u=A.aF(n,n,n,n,B.aiN,n,n,n,new C.duM(d),n,n,n,n,n,n)
t=o.a
s=x.p
t=A.D(A.u(A.a([A.d(t.f,n,1,B.a2,n,n,n,B.l6,n,n,n),A.d("Win $"+B.k.aa(t.w*1.46,2)+" \xb7 stake $"+B.k.aa(o.a.w,2),n,n,n,n,n,n,D.eDH,n,n,n)],s),B.F,n,B.e,B.j,0,B.p),1)
r=o.a.c.a
m=m<=10?B.aF:B.c.j(0.1)
q=A.m(99)
q=A.B(A.a([u,t,new C.amZ(r,new C.duN(o),n),B.bq,A.di(n,A.B(A.a([D.bAU,B.d6,A.d(""+w+":"+v,n,n,n,n,n,n,B.kg,n,n,n)],s),B.m,n,B.e,B.j,0,n,n),n,n,B.b8,new A.o(m,n,n,q,n,n,B.n),B.Y,n,n,n,B.wu,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
m=o.a
v=m.w
w=v*1.46
r=o.e/o.f
m=A.B(A.a([A.D(A.bu(A.m(99),A.mq(B.bG,n,n,9,n,r,new A.mK(B.d.gK(m.r),x.dw)),B.ap),1),B.aw,A.d(""+o.e+"/"+o.f,n,n,n,n,n,n,D.eMb,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
t=A.m(22)
u=A.a([B.d.gK(o.a.r).j(0.35),G.aaY],x.O)
p=o.x
return C.aMi(n,D.b8y,A.bq(!0,A.u(A.a([new A.C(D.bkz,q,n),new C.LI(w*r,w,v,n),new A.C(G.ad8,m,n),A.D(new A.C(B.V8,A.bu(t,A.bT(A.e1(V.h1X(o.a.e,new V.yl(new C.duO(o),new C.duP(o),new C.duQ(o),o.d)),p,n),new A.o(n,n,n,n,n,new A.a7(B.b1,B.b5,B.w,u,n,n),B.n),B.ba),B.ap),n),1)],s),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0))}}
C.a4t.prototype={
B(d){var w=null,v=A.m(26),u=A.H(B.aX.j(0.5),B.r,1),t=A.a([new A.aa(0,B.G,B.aX.j(0.22),B.J,26)],x.V)
return A.ew(w,B.K,A.p(w,A.u(A.a([A.p(w,D.buO,B.h,w,w,new A.o(B.aX.j(0.16),w,A.H(B.aX,B.r,2),w,w,w,B.a5),w,68,w,w,w,w,w,68),B.ay,D.eZT,B.P,A.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.P,A.d("The count starts again from zero next month.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.aO,new A.a3(1/0,w,A.bK(D.eOw,new C.c1a(d),A.bk(B.aX,w,w,w,B.x,B.fP,w,w,new A.b5(A.m(14),B.V),w,w,w)),w)],x.p),B.m,w,B.e,B.R,0,B.p),B.h,w,w,new A.o(w,w,u,v,t,D.bGi,B.n),w,w,w,w,D.biW,w,w,w),w,w,w,B.adF,B.cZ,w,w,w)}}
C.akZ.prototype={
S(){return new C.bfh(null,null)},
gX(d){return this.e}}
C.bfh.prototype={
Z(){var w,v=this,u=null
v.a0()
w=v.d=A.bi(u,B.zw,u,1,u,v)
w.d5()
w.dM$.J(0,new C.do2(v))
w=A.bi(u,B.lU,u,1,u,v)
w.cF(0)
v.e=w
w=A.bi(u,B.JE,u,1,u,v)
w.cF(0)
v.f=w
w.d5()
w.dM$.J(0,new C.do3(v))
if(v.a.c){v.d.cF(0)
v.e.bU(0)
v.f.bU(0)}},
bp(d){var w,v,u=this
u.bA(d)
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
w.bU(0)
w=u.f
w===$&&A.c()
w.bU(0)}else if(!w&&d.c){w=u.d
w===$&&A.c()
w.bU(0)
w=u.d
w.sq(0,w.a)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cF(0)
w=u.f
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cF(0)}},
p(){var w=this,v=w.d
v===$&&A.c()
v.p()
v=w.e
v===$&&A.c()
v.p()
v=w.f
v===$&&A.c()
v.p()
w.boW()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.O6[B.o.H(a9.r,5)]:b4
w=!b3&&b4==null?D.O6[B.o.H(a9.w,5)]:b0
b1=b4!=null
if(b1){b3=A.t(b4)
v=b4>0?"+"+b3:b3}else if(w!=null){b3=A.t(w)
if(w>0)b3="+"+b3
v=b3}else v="?"
if(b1)u=b4>0?B.dk:B.bQ
else if(w!=null){b1=(w>0?B.dk:B.bQ).j(0.45)
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
b3=A.a([A.e5(B.A,A.p(b0,b0,B.h,b0,b0,new A.o(b0,b0,b0,b0,A.a([new A.aa(6+e,B.G,B.aB.j(0.4+q*0.3),B.J,32+q*22),new A.aa(3,B.G,B.b9.j(0.2+p*0.25),B.J,40+p*16)],d),b0,B.a5),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=A.p(b0,b0,B.h,b0,b0,new A.o(A.aq(B.bE,B.aL,B.o.H(a3,3)/2).j(a2),b0,b0,b0,A.a([new A.aa(0,B.G,B.aB.j(0.7),B.J,e)],d),b0,B.a5),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(A.dP(new A.iw(A.vv(a4+a3),b0,B.A,!0,b0,a8,b0),new A.v(a6*a0+a5*b2*0.04,a7*a0)))}B.d.v(f,b3)}b3=b2*0.06
e=x.V
f.push(A.dP(A.p(b0,b0,B.h,b0,b0,new A.o(b0,b0,b0,A.m(b2*0.5),A.a([new A.aa(b2*0.02,B.G,B.x.j(0.4+b1),B.J,b2*0.14)],e),b0,B.n),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new A.v(0,n+b3)))
b1=A.dh()
d=b1.a
d.$flags&2&&A.ah(d)
d[11]=0.0025
b1.mf(o)
b1.jg(k,k,k,1)
b1.jx(l)
b1.fk(m)
d=b2*0.2
a1=A.m(d)
if(a9.a.c)a2=D.cIh
else{a2=A.aq(B.c,B.kQ,q*0.45)
a2.toString
a2=A.a([a2,B.bM,B.cp],x.O)}a4=A.aq(B.bK,B.aB,q*0.65)
a4.toString
a4=A.H(a4,B.r,3)
e=A.a([new A.aa(0,B.G,B.x.j(0.3),D.dLm,16)],e)
if(!a9.a.c)e.push(new A.aa(p*3,B.G,B.aB.j(0.3+q*0.4),B.J,24+p*16))
e.push(new A.aa(0,B.G,B.c.j(0.9),B.Py,0))
g=A.a([],g)
if(!a9.a.c)g.push(A.bZ(0,A.bT(b0,new A.o(b0,b0,b0,A.m(d),b0,new A.a7(new A.d5(-1+Math.cos(j)*0.8,-1),new A.d5(1,1),B.w,A.a([B.c.j(0),B.c.j(0.28+p*0.25),B.c.j(0)],x.O),b0,b0),B.n),B.ba),0,0,0))
g.push(A.an(b0,A.p(b0,b0,B.h,b0,b0,new A.o(b0,b0,b0,A.m(6),b0,new A.a7(B.a3,B.a7,B.w,A.a([B.c.j(0.95),B.c.j(0)],x.O),b0,b0),B.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=A.a([new A.cJ(B.x.j(0.18),B.dH,5)],x.C)
if(!a9.a.c)d.push(new A.cJ(B.aB.j(0.4+q*0.35),B.J,12+p*10))
g.push(A.at(A.w3(A.d(v,b0,b0,b0,b0,b0,b0,A.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,B.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),B.b8,B.jf,b3),b0,b0,b0))
f.push(A.dP(A.fn(B.A,A.p(b0,new A.am(B.W,b0,B.a9,B.q,g,b0),B.h,b0,b0,new A.o(b0,b0,a4,a1,e,new A.a7(B.ax,B.aC,B.w,a2,b0,b0),B.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new A.v(0,n)))
return new A.a3(h,h,new A.am(B.A,b0,B.a9,B.h,f,b0),b0)}}
C.aHY.prototype={
aN(){this.aV()
this.aU()
this.dD()},
p(){var w=this,v=w.aZ$
if(v!=null)v.a1(0,w.gdB())
w.aZ$=null
w.a2()}}
C.LI.prototype={
B(d){var w=null,v=new C.c38(),u=v.$3("STAKE","$"+B.k.aa(this.e,2),B.c),t=A.m(18),s=A.H(B.bs.j(0.7),B.r,1.4),r=A.a([new A.aa(0,B.G,B.aS.j(0.35),B.J,14)],x.V),q=x.p
return new A.C(B.JV,A.B(A.a([u,A.p(w,A.u(A.a([D.eYD,A.mA(new C.c37(),w,B.b8,B.nk,w,new A.bl(w,this.c,x.e7),x.gR)],q),B.m,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(w,w,s,t,r,D.ajy,B.n),w,w,w,w,B.K6,w,w,w),v.$3("FULL WIN","$"+B.k.aa(this.d,2),B.bI)],q),B.m,w,B.e,B.j,0,w,w),w)}}
C.amZ.prototype={
B(d){var w=null,v=A.m(99),u=A.H(B.jc.j(0.7),B.r,1)
return A.p(w,A.B(A.a([D.bth,B.d6,C.anO(this.d,B.ox,this.c)],x.p),B.m,w,B.e,B.R,0,w,w),B.h,w,w,new A.o(w,w,u,v,w,D.ajy,B.n),w,w,w,w,B.Kg,w,w,w)},
gdS(){return this.c}}
C.LQ.prototype={
S(){return new C.bfV(null,null)}}
C.bfV.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,B.lU,null,1,null,v)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.bpv()},
aJz(d,e){var w=this.a.d,v=A.U(w).k("J<1,n>"),u=A.z(new A.J(w,C.hNP(),v),v.k("ai.E"))
w=this.d
w===$&&A.c()
return A.c4(w,new C.dN0(this,u),null)},
B(d){var w=null
if(this.a.e)return A.cd(w,D.aam,A.bq(!0,this.aJz(0,d),!0,!1,B.ah,!0,!0),w,!1,!1,w,w)
return this.aJz(0,d)},
atz(d,e,f){var w=null,v=f.j(0.16),u=A.m(10)
return A.B(A.a([A.p(w,A.V(d,f,w,w,w,17),B.h,w,w,new A.o(v,w,w,u,w,w,B.n),w,32,w,w,w,w,w,32),B.aw,A.D(A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.aIw.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
C.ab_.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=A.aG(d,B.e2,o).w.r.d,m=this.c,l=J.cA(m),k=l.eE(m,new C.dN3()).gI(0),j=new A.e3(l.di(m,new C.dN4(),x.cD),x.bG).cI(0,0,new C.dN5())
o=A.aG(d,B.bP,o).w
w=x.p
v=A.a([B.T,A.p(p,p,B.h,p,p,new A.o(B.bf,p,p,A.m(2),p,p,B.n),p,4,p,p,p,p,p,42),new A.C(B.adm,A.B(A.a([A.p(p,D.bDd,B.h,p,p,new A.o(p,p,p,A.m(14),A.a([new A.aa(0,B.G,B.f9.j(0.45),B.J,14)],x.V),D.ajs,B.n),p,44,p,p,p,p,p,44),B.bc,D.bmB,A.aF(p,p,p,p,B.l0,p,p,p,new C.dN6(d),p,p,p,p,p,p)],w),B.m,p,B.e,B.j,0,p,p),p)],w)
if(l.gci(m)){u=C.fEa("GAMES",""+l.gI(m),B.ev)
t=C.fEa("WON",""+k,B.jc)
s=j>=0
r=s?"+":"-"
q=C.bvZ(j)
s=s?B.jc:B.fg
v.push(new A.C(D.bh9,A.B(A.a([u,B.aa,t,B.aa,C.fEa("NET",r+q,s)],w),B.m,p,B.e,B.j,0,p,p),p))}if(l.gah(m))v.push(new A.C(new A.M(24,36,24,24+n),A.u(A.a([A.V(D.bpl,B.c.j(0.35),p,p,p,52),B.ab,A.d("No game receipts yet",p,p,p,p,p,p,A.l(p,p,B.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.ar,A.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,A.l(p,p,B.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),B.L,p,p)],w),B.m,p,B.e,B.j,0,B.p),p))
else v.push(new A.dp(1,B.cj,A.hG(p,new C.dN7(this),l.gI(m),new A.M(14,2,14,16+n),p,B.aj,new C.dN8(),!1),p))
return A.p(p,A.u(v,B.m,p,B.e,B.R,0,B.p),B.h,p,new A.aX(0,1/0,0,o.a.b*0.88),D.aSC,p,p,p,p,p,p,p,p)}}
C.aaZ.prototype={
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
t=s}if(w)r=B.cH
else if(u)r=B.dE
else{w=v?B.aL:B.bs
r=w}q=h.gbb1()
w=new C.dN2()
s=A.m(14)
p=A.a([r.j(0.13),D.b7H],x.O)
o=A.H(r.j(0.4),B.r,1)
n=A.V(g?B.m1:B.ct,r,i,i,i,16)
m=A.D(A.d(h.b,i,1,B.a2,i,i,i,B.yp,i,i,i),1)
l=r.j(0.2)
k=A.m(99)
k=A.p(i,A.d(t,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,B.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),B.h,i,i,new A.o(l,i,i,k,i,i,B.n),i,i,i,i,D.bku,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bvZ(q)}else{l=g?"+":"-"
l+=C.bvZ(h.d)}j=x.p
l=A.B(A.a([n,B.bq,m,k,B.bq,A.d(l,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.m,i,B.e,B.j,0,i,i)
k=C.dN1("STAKE",w.$1(h.w),B.c)
w=A.B(A.a([k,B.d6,C.dN1("PAID",C.bvZ(g?h.d:0),r),B.d6,C.dN1("BEFORE",w.$1(h.x),B.ev),B.d6,C.dN1("AFTER",w.$1(h.y),B.dE)],j),B.m,i,B.e,B.j,0,i,i)
n=C.hJr(h.f)
h=B.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return A.p(i,A.u(A.a([l,B.ar,w,B.av,A.d(n+h,i,1,B.a2,i,i,i,A.l(i,i,B.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.af,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(i,i,o,s,i,new A.a7(B.ax,B.aC,B.w,p,i,i),B.n),i,i,i,i,B.lp,i,i,i)}}
C.axo.prototype={
S(){return new C.bbE(B.cB,null,null)}}
C.bbE.prototype={
Z(){var w,v,u,t=this
t.a0()
w=A.bi(null,B.my,null,1,null,t)
w.cF(0)
t.d=w
v=J.e_(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.abo(40+w.ae()*260,-20+w.ae()*40,1.5+w.ae()*3,w.ae()*3.141592653589793,0.7+w.ae()*0.3,12+w.ae()*16,[X.a0v,B.qA,B.cN,B.c][w.aB(4)],[B.hU,B.kX,B.dP,B.E5][w.aB(4)])
t.f=v},
p(){var w=this.d
w===$&&A.c()
w.p()
this.boq()},
B(d){var w=null,v=this.d
v===$&&A.c()
return A.at(A.aD(!1,B.Y,!0,w,A.c4(v,new C.d4O(this,d),w),B.h,B.K,0,w,w,w,w,w,B.ac),w,w,w)}}
C.abo.prototype={
gX(d){return this.f}}
C.aHt.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
C.aXA.prototype={
B(d){return new A.tO(new C.c5p(this),null,new A.h3(A.a([$.xL(),$.a0F()],x.U)),null)},
gdS(){return this.c}}
C.Lk.prototype={
c2Y(){if(this.c!=null)this.n(new C.bVh())}}
C.H3.prototype={}
C.amr.prototype={
S(){return new C.aAb(B.cB,new A.ap(B.as,$.au()))},
cwe(){return this.d.$0()},
cHp(){return this.f.$0()},
cHd(d,e){return this.r.$2(d,e)},
cI1(d,e,f){return this.w.$3$bonus(d,e,f)},
gdS(){return this.c}}
C.aAb.prototype={
p(){var w=this.e
w.R$=$.au()
w.O$=0
this.a2()},
apB(){var w=A.d8(B.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
zJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$zJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.apB()
if(s<2){t.atA("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cwe()<s){t.atA("Insufficient balance.")
w=1
break}if(!t.a.cHd(s,"Dice Roll bet")){t.atA("Could not place bet.")
w=1
break}t.a.toString
t.n(new C.dGe(t))}w=3
return A.b(C.c2j(t.a.e),$async$zJ)
case 3:r=t.a
q=C.hLv(r.e,r.c,t.d)
t.a.cHp()
A.aWa(t.a.e)
t.n(new C.dGf(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return A.b(A.bM(new A.b8(1000*(40+p*6)),null,r),$async$zJ)
case 7:if(t.c==null){w=1
break}new C.dGg(t).$0()
t.c.e3()
case 5:++p
w=4
break
case 6:w=8
return A.b(A.bM(B.jg,null,r),$async$zJ)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.fHT(q)
t.n(new C.dGh(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cI1(m,"Dice Roll "+n,o)
t.n(new C.dGi(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+B.k.aa(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(m,2)+" added to your balance"
w=12
return A.b(C.bzu(r,C.bz8(),new C.dGj(t),n,k,"YOU WIN!",!0),$async$zJ)
case 12:w=13
return A.b(C.aeG("Dice Roll",l?"+$"+B.k.aa(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(m,2)+" added to your balance"),$async$zJ)
case 13:w=10
break
case 11:w=14
return A.b(C.bzu(r,C.bz8(),new C.dGk(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$zJ)
case 14:C.tZ(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return A.h(u,v)}})
return A.i($async$zJ,v)},
atA(d){var w=null,v=this.c
if(v==null)return
v.G(x.q).f.P(A.b0(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.apB(),d=x.w,a0=A.aG(a2,B.e2,d).w,a1=Math.min(A.aG(a2,B.bP,d).w.a.a*0.44,200)
d=A.hh(Q.ahV,D.f4g,new C.dGn(a2),f)
w=A.m(20)
v=g.a
u=v.c
t=x.p
w=A.B(A.a([d,B.b7,A.p(f,A.B(A.a([B.ahS,B.bq,C.anO(v.d,B.jR,u)],t),B.m,f,B.e,B.R,0,f,f),B.h,f,f,new A.o(B.cN,f,f,w,f,f,B.n),f,f,f,f,B.lq,f,f,f)],t),B.m,f,B.e,B.j,0,f,f)
u=g.z
v=A.W(140,D.Ug.l()>>>16&255,D.Ug.l()>>>8&255,D.Ug.l()&255)
d=A.m(18)
s=A.H(A.W(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
r=g.x
d=A.D(A.p(f,A.at(new C.akZ(r,r?g.w:g.r,a1,f),f,f,f),B.h,f,f,new A.o(v,f,s,d,f,f,B.n),f,f,f,f,f,f,f,1/0),1)
v=A.d("Roll lands on one of:",f,f,f,f,f,f,A.l(f,f,B.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,B.a4,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=A.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.O6[q]
o=C.fHT(p)
n=p>0?B.bn:B.aF
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new A.b3(10,10)
i=m?B.c:n.j(0.7)
h=new A.ay(i,m?2.5:1.2,B.r,-1)
n=m?A.a([new A.aa(1,B.G,n.j(0.65),B.J,14)],r):B.a_s
m=m?18:15
s.push(new A.bF(1,B.bp,new A.C(B.k2,A.p(B.A,new A.x(o,f,new A.F(!0,B.c,f,f,f,f,m,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f),B.h,f,f,new A.o(k,f,new A.c2(h,h,h,h),new A.bv(j,j,j,j),n,f,B.n),f,l,f,f,f,f,f,f),f),f))}d=A.a([d,B.ab,v,B.ar,A.B(s,B.m,f,B.e,B.j,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.fHT(v)
s=g.r
s.toString
d.push(new A.C(B.kw,A.d("Landed on "+v,f,f,f,f,f,f,A.l(f,f,s>0?B.bl:B.cH,f,f,f,f,f,f,f,f,20,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(B.T)
d.push(new A.bG(B.a3,f,f,A.d("Bet Amount",f,f,f,f,f,f,A.l(f,f,A.W(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,B.I,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(B.ar)
v=x.bL
v=A.z(new A.J(A.a([2,5,10,25],x.n),new C.dGo(g),v),v.k("ai.E"))
s=g.y
r=A.W(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v.push(A.D(new A.C(B.VN,A.aK(f,B.U,!1,f,!0,B.q,f,A.aL(),g.e,f,f,f,f,f,2,A.bm(f,new A.b2(4,A.m(10),B.V),f,B.jD,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,B.l7,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),B.z,!0,f,!0,!s,!1,f,B.ag,f,f,f,f,f,B.dN,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,B.a8,f,f,f,f,f,f,f,f,f,f,f,B.hb,!0,B.L,f,B.am,f,f,f,f),f),1))
d.push(A.B(v,B.m,f,B.e,B.j,0,f,f))
d.push(B.P)
d.push(new A.bG(B.a7,f,f,A.d("Perfect Score Profit: +$"+B.k.aa(g.apB()*0.46,2),f,f,f,f,f,f,D.eFC,f,f,f),f))
d.push(B.T)
d=A.D(new A.C(B.iH,A.u(d,B.af,f,B.e,B.j,0,B.p),f),1)
v=g.x?f:g.gch6()
s=A.ff(f,f,B.aB,f,f,f,f,f,f,B.c,f,f,f,f,new A.b5(A.m(14),B.V),f,f,f,f,f)
return C.aMi(f,D.Um,A.bq(!0,A.u(A.a([new A.C(D.bkU,w,f),new C.LI(u,e*1.46,e,f),A.D(A.u(A.a([d,new A.C(new A.M(14,4,14,8+a0.r.d),new A.a3(1/0,52,A.i5(A.d("\ud83c\udfb2 ROLL ($"+B.k.aa(e,2)+")",f,f,f,f,f,f,B.kM,f,f,f),v,s),f),f)],t),B.m,f,B.e,B.j,0,B.p),1)],t),B.m,f,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0))}}
C.an4.prototype={
S(){return new C.aAs(B.ka,new A.ap(B.as,$.au()))},
cH5(d){return this.e.$1(d)}}
C.aAs.prototype={
gaoq(){var w,v=this.r
if(v===$){w=B.o.u(1e4+B.cB.aB(89999))
this.r!==$&&A.bJ()
this.r=w
v=w}return v},
gOv(){var w=this.d,v=this.a
return w===B.ka?B.a.i(v.f.a):B.a.i(v.f.b)},
ga6v(){var w=this.gOv(),v=A.ae("^\\$+",!0,!1,!1,!1),u=B.a.i(A.aJ(w,v,""))
return u.length===0?"":"$"+u},
p(){var w=this.e
w.R$=$.au()
w.O$=0
this.a2()},
Hs(d,e){return this.bBS(d,e)},
bBS(d,e){var w=0,v=A.j(x.H),u=this,t
var $async$Hs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.fC(new A.fw(d)),$async$Hs)
case 2:A.eG()
t=u.c
if(t!=null)t.G(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$Hs,v)},
Oq(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Oq=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gOv().length===0){r.c.G(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}A.j7()
o=B.k.aa(r.a.d,2)
q=r.d===B.ka?A.cr("https://cash.app/"+r.ga6v()+"/"+o,0,null):A.cr("bitcoin:"+r.gOv(),0,null)
t=4
w=7
return A.b(A.iI(q,B.fc,null),$async$Oq)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===B.ka?r.ga6v():r.gOv()
w=10
return A.b(r.Hs(n,r.d===B.ka?"Cash App tag":"Bitcoin address"),$async$Oq)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===B.ka?r.ga6v():r.gOv()
w=11
return A.b(r.Hs(n,r.d===B.ka?"Cash App tag":"Bitcoin address"),$async$Oq)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Oq,v)},
Z6(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Z6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hR().bbK(B.eu),$async$Z6)
case 3:r=e
if(r==null){w=1
break}w=4
return A.b(r.f7(),$async$Z6)
case 4:s=e
t.n(new C.dNq(t,B.a.c7(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return A.h(u,v)}})
return A.i($async$Z6,v)},
c_r(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===B.ka?C.h3d(s.a):B.a.i(s.a)
if(r.length===0){t=v.d===B.ka?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.G(x.q).f.P(A.b0(u,u,u,u,u,B.q,u,A.d(t,u,u,u,u,u,u,u,u,u,u),u,B.S,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.G(x.q).f.P(A.b0(u,u,u,u,u,B.q,u,A.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,B.S,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new A.Q(Date.now(),0,!1).u(0)
w=v.a
t.cH5(new A.cX(s,w.c.a,w.d,B.fj,v.d,r,v.f,v.gaoq(),B.dn,new A.Q(Date.now(),0,!1)))
w=v.c
w.toString
A.iE(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.eA(o,o,o,!0,!0,B.z5,o,1,!0,o,0,!1,o,!1,B.c,o,A.aF(o,o,o,o,B.EU,o,o,o,new C.dNr(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.eQ0,o,o,o,1,o,!0),m=A.m(26),l=A.H(D.ew.j(0.25),B.r,1),k=x.V,j=A.a([new A.aa(0,B.G,B.aW.j(0.25),B.eK,24)],k),i=x.p
j=A.p(o,A.u(A.a([A.d("YOU'RE ADDING",o,o,o,o,o,o,A.l(o,o,B.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,B.I,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),B.ar,A.eX(B.A,A.d("$"+A.dw(p.a.d),o,o,o,o,o,o,D.eA9,o,o,o),B.h,B.dp),B.ar,A.d("to your Growth Income wallet",o,o,o,o,o,o,A.l(o,o,D.ew.j(0.85),o,o,o,o,o,o,o,o,12,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(o,o,l,m,j,D.bJ7,B.n),o,o,o,o,D.biA,o,o,o)
m=p.bWu()
l=p.ax6(1,"Send the money to NGMY Pay",p.c_p())
w=p.ax6(2,"Put this code in the payment note",p.bAu())
v=p.d===B.ka
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=A.l(o,o,B.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.ax6(3,u,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.e,o,o,o,o,o,2,A.bm(o,o,o,o,o,o,o,o,!0,new A.b2(4,A.m(18),new A.ay(B.c.j(0.08),1,B.r,-1)),o,o,o,o,o,B.rq,!0,o,o,o,o,new A.b2(4,A.m(18),D.aPN),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.eBt,t,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,B.qU,!0,B.a6,o,B.am,o,o,o,o))
r=p.f!=null
v=r?8:22
u=A.m(20)
s=r?D.ew:B.c
s=A.H(s.j(r?0.5:0.12),B.r,1.4)
q=r?A.u(A.a([A.bu(A.m(14),new A.d1(D.aRa,new A.Dj(p.f,o),o),B.ap),B.P,D.emM,B.av],i),B.m,o,B.e,B.j,0,B.p):A.u(A.a([A.p(o,D.bCr,B.h,o,o,new A.o(D.ew.j(0.12),o,o,o,o,o,B.a5),o,54,o,o,o,o,o,54),B.T,D.eUR,B.d5,A.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p)
v=p.b1f(4,"Screenshot of your payment",A.aH(o,A.p(o,q,B.h,o,o,new A.o(B.rq,o,s,u,o,o,B.n),o,o,o,o,new A.M(v,v,v,v),o,o,o),B.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcaD(),o,o,o,o,o,o,!1,B.ae),!0)
u=A.d(p.a.r,o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,1.4,!0,o,o,o,o,o,o,o,o),B.L,o,o)
s=A.m(18)
k=A.a([new A.aa(0,B.G,B.aW.j(0.45),B.dm,18)],k)
return A.cd(n,B.z5,A.at(new A.d1(B.a6Y,A.cL(A.a([j,B.bt,m,B.bt,l,w,t,v,B.ar,u,B.aO,new A.a3(o,56,A.bT(A.lf(D.bB8,D.f3A,p.gc_q(),A.ff(o,o,B.K,o,o,o,o,o,o,B.c,o,o,o,B.K,new A.b5(A.m(18),B.V),o,o,o,o,o)),new A.o(o,o,o,s,k,D.bHO,B.n),B.ba),o)],i),o,D.bi4,o,o,B.aj,!1),o),o,o,o),o,!1,!1,o,o)},
bWu(){var w=null,v=new C.dNm(this),u=A.m(18),t=A.H(B.c.j(0.06),B.r,1)
return A.p(w,A.B(A.a([v.$3(B.ka,B.hR,"Cash App"),B.eA,v.$3(B.a1V,D.ahC,"Bitcoin")],x.p),B.m,w,B.e,B.j,0,w,w),B.h,w,w,new A.o(B.rq,w,t,u,w,w,B.n),w,w,w,w,B.lY,w,w,w)},
b1f(d,e,f,g){var w,v=null,u=x.p,t=A.a([A.p(B.A,A.d(""+d,v,v,v,v,v,v,D.eGj,v,v,v),B.h,v,v,D.aRU,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(A.D(A.p(v,v,B.h,D.ew.j(0.18),v,v,v,v,v,B.ws,v,v,v,2),1))
t=A.u(t,B.m,v,B.e,B.j,0,B.p)
w=g?12:20
return new A.KT(A.B(A.a([new A.a3(34,v,t,v),B.aw,A.D(new A.C(new A.M(0,0,0,w),A.u(A.a([new A.C(B.V5,A.d(e,v,v,v,v,v,v,A3.a4b,v,v,v),v),f],u),B.af,v,B.e,B.j,0,B.p),v),1)],u),B.af,v,B.e,B.j,0,v,v),v)},
ax6(d,e,f){return this.b1f(d,e,f,!1)},
c_p(){var w,v,u,t,s=this,r=null,q=s.d===B.ka?s.ga6v():s.gOv(),p=A.m(20),o=A.m(20),n=s.d===B.ka,m=n?D.bGK:D.bIw,l=A.a([new A.aa(0,B.G,(n?D.aaB:D.Tx).j(0.35),B.cs,16)],x.V),k=A.m(12)
n=s.d===B.ka
w=n?B.hR:D.ahC
k=A.p(r,A.V(w,n?D.aaB:D.Tx,r,r,r,30),B.h,r,r,new A.o(B.c,r,r,k,r,r,B.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=A.d(n,r,r,r,r,r,r,A.l(r,r,B.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===B.ka
t=u?22:13
v=A.d(v,r,1,B.a2,r,r,r,A.l(r,r,B.c,r,r,r,r,r,r,r,r,t,r,r,B.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=A.D(A.u(A.a([n,B.bA,v,B.av,A.B(A.a([D.by3,B.d6,A.d(s.d===B.ka?"Tap to pay $"+A.dw(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,B.vl,r,r,r)],u),B.m,r,B.e,B.j,0,r,r)],u),B.F,r,B.e,B.j,0,B.p),1)
return A.aD(!1,B.Y,!0,r,A.aI(!1,p,!0,A.eq(A.B(A.a([k,B.bc,v,A.aF(r,r,r,r,D.bx8,r,r,r,w?r:new C.dNp(s,q),r,r,r,r,"Copy",r)],u),B.m,r,B.e,B.j,0,r,r),r,new A.o(r,r,r,o,l,m,B.n),r,B.ad2,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gc60(),r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac)},
bAu(){var w,v,u,t,s,r,q,p,o=null,n=A.m(20),m=A.H(B.b2.j(0.35),B.r,1),l=x.p,k=A.a([],l)
for(w=this.gaoq().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new A.b3(12,12)
q=A.a([B.b2.j(0.28),B.b2.j(0.08)],u)
p=new A.ay(B.ev.j(0.4),1,B.r,-1)
k.push(A.p(B.A,new A.x(s,o,B.BX,o,o,o,o,o,o,o,o,o),B.h,o,o,new A.o(o,o,new A.c2(p,p,p,p),new A.bv(r,r,r,r),o,new A.a7(B.b1,B.b5,B.w,q,o,o),B.n),o,52,o,B.k2,o,o,o,42))}return A.p(o,A.u(A.a([A.B(k,B.m,o,B.b6,B.j,0,o,o),B.ab,A.B(A.a([A.D(A.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,A.l(o,o,B.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aa,A.hh(B.Yr,D.f5i,new C.dNl(this),A.fm(o,o,o,o,o,o,o,o,o,o,o,B.ev,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),B.m,o,B.e,B.j,0,o,o)],l),B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(B.rq,o,m,n,o,o,B.n),o,o,o,o,B.bB,o,o,o)}}
C.qJ.prototype={
ac(){var w=this
return A.E(["id",w.a,"title",w.b,"start",w.c.ab(),"end",w.d.ab(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.qK.prototype={
ac(){var w=this
return A.E(["id",w.a,"when",w.b.ab(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gTy(){var w=this,v=A.a([],x.s),u=w.d
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
u=w.c
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
v.push(C.fPt(w.b))
u=w.e
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
return B.d.aG(v," \xb7 ")},
gkj(d){return this.c}}
C.ll.prototype={
ac(){var w,v=this,u=A.S(x.N,x.z)
u.m(0,"type",v.a)
w=v.b
if(w.length!==0)u.m(0,"content",w)
w=v.c
if(w!=null&&w.length!==0)u.m(0,"url",w)
w=v.d
if(w!=null&&w.length!==0)u.m(0,"label",w)
return u}}
C.i9.prototype={
ac(){var w,v=this,u=A.S(x.N,x.z)
u.m(0,"id",v.a)
u.m(0,"question",v.b)
w=J.b4(v.c,new C.c4o(),x.P)
w=A.z(w,w.$ti.k("ai.E"))
u.m(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.m(0,"thumbnailPath",w)
u.m(0,"printable",v.e)
u.m(0,"sortOrder",v.f)
return u}}
C.hW.prototype={
ahR(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.hW(v,u,t,s,r,h==null?w.f:h)},
b6A(d){var w=null
return this.ahR(w,w,w,w,d,w)},
czP(d,e,f){return this.ahR(d,e,null,null,null,f)},
b6z(d){var w=null
return this.ahR(w,w,w,d,w,w)},
czu(d,e){var w=null
return this.ahR(w,w,d,w,e,w)},
ac(){var w=this,v=C.hxt(w.c),u=w.e,t=A.U(u).k("J<1,a1<n,@>>")
u=A.z(new A.J(u,new C.c4m(),t),t.k("ai.E"))
return A.E(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.b5k.prototype={}
C.To.prototype={
S(){return new C.aAE(new A.ap(B.as,$.au()),A.m9(0,null,null),A.a([],x.m))},
S6(d){return this.d.$1(d)}}
C.aAE.prototype={
Z(){var w,v=this
v.a0()
w=J.b4(v.a.c,new C.dR5(),x.i)
w=A.z(w,w.$ti.k("ai.E"))
B.d.aY(w,new C.dR6())
v.d=w
v.HC()},
p(){var w=this.w
w.R$=$.au()
w.O$=0
this.x.p()
this.a2()},
abi(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$abi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.HC()
u.n(new C.dR_(u))
t=u.a
t.toString
s=u.d
s===$&&A.c()
w=2
return A.b(t.S6(s),$async$abi)
case 2:r=e
if(u.c!=null){u.n(new C.dR0(u))
t=u.c.G(x.q).f
s=A.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.P(A.b0(null,null,null,r?B.dk:B.aF,null,B.q,null,s,null,B.S,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$abi,v)},
a5I(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a5I=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&A.c()
s=new C.hW(q,"New Category",B.Eq,4284773515,D.arT,p.length)
t.n(new C.dQJ(t,s))
t.HC()
p=t.c
if(p==null){w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.dQK(s),p,null,!0,!0,x.i),$async$a5I)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.dQL(t,q,r))
case 1:return A.h(u,v)}})
return A.i($async$a5I,v)},
a_3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a_3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=B.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.n(new C.dQX(t,p))
q.bI(0,B.c_)
q=t.a.e
s=t.d
s===$&&A.c()
w=3
return A.b(C.c4j(p,q,s),$async$a_3)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.dQY(t,r))
$.aT.x1$.push(new C.dQZ(t))
case 1:return A.h(u,v)}})
return A.i($async$a_3,v)},
a7F(d){return this.bGo(d)},
bGo(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a7F=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&A.c()
t=r[d]
r=u.c
r.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.dQR(t),r,null,!0,!0,x.i),$async$a7F)
case 2:s=f
if(s!=null)u.n(new C.dQS(u,d,s))
return A.h(null,v)}})
return A.i($async$a7F,v)},
bEg(d){this.n(new C.dQQ(this,d))
this.HC()},
HC(){var w,v,u=this.d
u===$&&A.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].b6A(v)},
c3t(d,e){var w={}
w.a=e
this.n(new C.dQW(w,this,d))},
WD(d){return this.bVp(d)},
bVp(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$WD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=A.eH(new C.dQV(u,d),!1,null,x.H)
w=2
return A.b(A.a8(s,!1).cr(t),$async$WD)
case 2:return A.h(null,v)}})
return A.i($async$WD,v)},
bwN(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?A.a([B.fu,B.bi],l):A.a([B.pV,B.es],l)
w=A.m(16)
v=A.H(m?B.d9.j(0.35):B.dE,B.r,1)
u=A.V(B.dP,m?B.dE:B.e9,n,n,n,n)
t=A.D(A.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,A.l(n,n,m?B.aN:B.M,n,n,n,n,n,n,n,n,n,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.WQ:A8.KB
r=x.p
s=A.a([A.aI(!1,n,!0,A.B(A.a([u,B.aa,t,A.V(s,m?B.bK:B.ai,n,n,n,n)],r),B.m,n,B.e,B.j,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dQN(o),n,n,n,n,n,n,n)],r)
if(o.r){u=A.a([B.T],r)
t=o.y
if(t.length!==0){q=(m?D.re:B.c).j(0.65)
p=A.m(12)
u.push(A.p(n,A.jV(!0,n,o.x,new C.dQO(o,d),t.length,n,n,n,n,!1,!1),B.h,n,B.a6T,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.ch,n,n,n))}u.push(B.P)
t=o.w
q=A.l(n,n,m?B.aN:B.M,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=A.l(n,n,m?B.bK:B.ai,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?B.bi:B.aN
q=A.D(A.aK(n,B.U,!1,n,!0,B.q,n,A.aL(),t,n,n,n,n,n,2,A.bm(n,new A.b2(4,A.m(14),B.V),n,B.eH,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.ag,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.dQP(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,q,!0,B.a6,n,B.am,n,n,n,n),1)
m=o.f?n:o.gchj()
p=A.bk(B.bj,n,n,n,n,n,B.iJ,n,n,n,n,n)
u.push(A.B(A.a([q,new A.Hj(t,B.bj,n),B.d6,A.bK(o.f?B.pv:D.ahL,m,p)],r),B.dF,n,B.e,B.j,0,n,n))
B.d.v(s,u)}return A.di(n,A.u(s,B.af,n,B.e,B.j,0,B.p),n,n,B.b8,new A.o(n,n,v,w,n,new A.a7(B.a3,B.a7,B.w,l,n,n),B.n),B.ij,n,n,B.DG,B.bB,n,n,n)},
B(d){var w,v=this,u=null,t=A.L(d).ax.a===B.H,s=new C.b5k(t),r=t?B.da:B.bM,q=t?B.da:u,p=t?B.aN:B.M,o=A.d("Help Topics Admin",u,u,u,u,u,u,A.l(u,u,t?B.aN:B.M,u,u,u,u,u,u,u,u,u,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gc_v()
if(n)n=B.Qu
else n=A.V(B.wW,t?B.aN:B.M,u,u,u,u)
w=x.p
o=A.eA(A.a([A.hh(n,A.d("Save",u,u,u,u,u,u,A.l(u,u,t?B.aN:B.M,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=R.aRh(B.aK,u,O.SP,B.nv,D.f23,v.gbth())
q=v.bwN(s)
n=A.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,A.l(u,u,t?B.bK:B.ai,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&A.c()
return A.cd(o,r,A.u(A.a([q,new A.C(B.DG,n,u),A.D(H.fTQ(!1,new C.dR4(v,s),m.length,v.gc3s(),D.bgV,u,!1),1)],w),B.af,u,B.e,B.j,0,B.p),u,!1,!1,p,u)}}
C.NH.prototype={
S(){return new C.b78()}}
C.b78.prototype={
Z(){var w,v=this
v.a0()
w=v.a.c
v.d=new A.ap(new A.bc(w.b,B.b0,B.aM),$.au())
v.e=w.c
v.f=w.d},
p(){var w=this.d
w===$&&A.c()
w.R$=$.au()
w.O$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.L(d).ax.a===B.H,q=r?D.re:B.c,p=A.d("Edit category",s,s,s,s,s,s,A.l(s,s,r?B.c:B.bh,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&A.c()
o=A.aK(s,B.U,!1,s,!0,B.q,s,A.aL(),o,s,s,s,s,s,2,D.bE7,B.z,!0,s,!0,s,!1,s,B.ag,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,A.l(s,s,r?B.c:B.bh,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,B.a6,s,B.am,s,s,s,s)
w=x.aS
w=A.z(new A.J(D.bJt,new C.cFi(t),w),w.k("ai.E"))
w=A.c8(B.bH,w,B.bx,8,8)
v=x.gN
v=A.z(new A.J(D.cFE,new C.cFj(t),v),v.k("ai.E"))
u=x.p
v=A.ch(A.u(A.a([o,B.ab,w,B.ab,A.c8(B.bH,v,B.bx,0,8)],u),B.m,s,B.e,B.R,0,B.p),B.q,s,B.z,s,s,s,s,B.aj)
return A.eo(A.a([A.bI(!1,B.df,s,s,!0,s,s,new C.cFk(d),s,s),A.bK(B.pC,new C.cFl(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.YR.prototype={
S(){return new C.aCx()},
o5(d){return this.d.$1(d)}}
C.aCx.prototype={
Z(){this.a0()
this.d=A.bj(this.a.c.e,!0,x.u)},
atC(){var w=this.a,v=w.c,u=this.d
u===$&&A.c()
return w.o5(v.b6z(u))},
a5K(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a5K=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&A.c()
w=2
return A.b(u.aWf(new C.i9("q_"+1000*s,"",D.cEi,null,!1,r.length)),$async$a5K)
case 2:t=e
if(t!=null){u.n(new C.eAZ(u,t))
u.atC()}return A.h(null,v)}})
return A.i($async$a5K,v)},
aWf(d){var w,v=this.c
v.toString
w=A.eH(new C.eB_(d),!1,null,x.u)
return A.a8(v,!1).cr(w)},
B(d){var w=this,v=null,u=A.L(d).ax.a===B.H,t=u?B.da:B.bM,s=u?B.da:v,r=u?B.aN:B.M,q=w.a.c
s=A.eA(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,A.d(q.b+" \u2014 Questions",v,v,v,v,v,v,A.l(v,v,u?B.aN:B.M,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=R.aRh(B.aK,v,O.SP,B.nv,D.f7i,w.gbtH())
q=w.d
q===$&&A.c()
q=q.length
if(q===0){q=A.at(A.d("No questions yet. Tap + Question.",v,v,v,v,v,v,A.l(v,v,u?B.bK:B.ai,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=A.hG(v,new C.eB4(w,new C.b5k(u)),q,D.bh3,v,B.aj,new C.eB5(),!1)
return A.cd(s,t,u,v,!1,!1,r,v)}}
C.YQ.prototype={
S(){return new C.aCw()}}
C.aCw.prototype={
Z(){var w,v=this
v.a0()
w=v.a.c
v.d=new A.ap(new A.bc(w.b,B.b0,B.aM),$.au())
w=A.bj(w.c,!0,x.bP)
v.e=w
if(B.d.gah(w))J.cg(v.e,D.a1d)
w=v.a.c
v.f=w.d
v.r=w.e},
p(){var w=this.d
w===$&&A.c()
w.R$=$.au()
w.O$=0
this.a2()},
abh(){var w=0,v=A.j(x.H),u=this,t
var $async$abh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(Z.Fc(78,1920),$async$abh)
case 2:t=e
if(t!=null)u.n(new C.eAV(u,t))
return A.h(null,v)}})
return A.i($async$abh,v)},
ach(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ach=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=A.eH(new C.eAT(u),!1,null,x.dZ)
w=2
return A.b(A.a8(r,!1).cr(t),$async$ach)
case 2:s=e
if(s!=null)u.n(new C.eAU(u,s))
return A.h(null,v)}})
return A.i($async$ach,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.L(a1).ax.a===B.H,g=h?B.da:B.bM,f=h?B.da:i,e=h?B.aN:B.M,d=A.d("Edit Question",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=A.eA(A.a([A.dn(S.YA,B.pC,new C.eAX(j,a1),A.bk(B.aK,i,i,i,B.c,i,i,i,i,i,i,i)),B.aw],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=A.d("Question thumbnail",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=A.m(14)
w=j.f
v=h?B.bK:B.ai
w=A.aH(i,A.bu(e,K.aMl(A.m(14),B.bO,140,B.A3,v,w,1/0),B.ap),B.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gc_u(),i,i,i,i,i,i,!1,B.ae)
e=A.d("Question users will tap",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?B.bi:B.aN
u=A.m(16)
t=A.H(h?B.aI:B.aJ,B.r,1)
s=j.d
s===$&&A.c()
r=A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,15,i,i,B.a4,i,i,!0,i,i,i,i,i,i,i,i)
v=A.p(i,A.B(A.a([A.D(A.aK(i,B.U,!1,i,!0,B.q,i,A.aL(),s,i,i,i,i,i,2,A.bm(i,B.er,i,B.bk,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.l(i,i,h?B.bK:B.ai,i,i,i,i,i,i,i,i,i,i,i,B.cq,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),B.z,!0,i,!0,i,!1,i,B.ag,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,B.a8,i,i,i,i,i,i,i,i,i,i,i,r,!0,B.a6,i,B.am,i,i,i,i),1),new A.Hj(j.d,i,i)],a0),B.m,i,B.e,B.j,0,i,i),B.h,i,i,new A.o(v,i,t,u,i,i,B.n),i,i,i,i,B.ef,i,i,i)
u=A.d("Printable document",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,i,i,i,B.a4,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=A.iv(B.aK,i,i,B.ah,i,new C.eAY(j),i,A.d("Shows a printable badge on this answer",i,i,i,i,i,i,A.l(i,i,h?B.bK:B.ai,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=A.d("Stored answer (not AI)",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=A.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,A.l(i,i,h?B.bK:B.ai,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.re:B.c
q=A.m(16)
p=A.m(16)
o=A.m(16)
n=A.H(B.bj.j(0.45),B.r,1)
m=A.p(i,D.bvW,B.h,i,i,new A.o(B.bj.j(0.12),i,i,A.m(12),i,i,B.n),i,i,i,i,B.bk,i,i,i)
l=A.d("Open Document Editor",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&A.c()
k=J.a9(k)
l=A.D(A.u(A.a([l,B.av,A.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,A.l(i,i,h?B.bK:B.ai,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),B.F,i,B.e,B.j,0,B.p),1)
return A.cd(d,g,A.cL(A.a([f,B.P,w,B.d3,e,B.P,v,B.aO,u,B.P,t,B.av,s,B.ab,A.aD(!1,B.Y,!0,q,A.aI(!1,p,!0,A.p(i,A.B(A.a([m,B.ep,l,A.V(B.A9,h?B.bK:B.ai,i,i,i,16)],a0),B.m,i,B.e,B.j,0,i,i),B.h,i,i,new A.o(i,i,n,o,i,i,B.n),i,i,i,i,B.fA,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gc5_(),i,i,i,i,i,i,i),B.h,r,0,i,i,i,i,i,B.ac)],a0),i,B.c2,i,i,B.aj,!1),i,!1,!1,i,i)}}
C.cWK.prototype={}
C.Tp.prototype={
S(){return new C.aAG(A.k9(!0,null,!0,!0,null,null,!1))}}
C.aAG.prototype={
Z(){var w,v,u,t,s,r,q=this
q.a0()
w=J.dE(q.a.c,new C.dRG())
w=A.z(w,w.$ti.k("G.E"))
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
default:break}}w=B.d.aG(v,"\n\n")
q.d=new A.ap(new A.bc(w,B.b0,B.aM),$.au())},
p(){var w=this.d
w===$&&A.c()
w.R$=$.au()
w.O$=0
this.f.p()
this.a2()},
atD(d,e){var w,v,u,t,s,r=this.d
r===$&&A.c()
r=r.a
w=r.b
if(!w.gep())return
v=r.a
r=w.a
u=w.b
t=d+B.a.an(v,r,u)+e
s=B.a.o7(v,r,u,t)
this.d.bI(0,new A.bc(s,A.h1(B.br,r+t.length),B.aM))},
aUv(d){var w,v,u,t,s=this.d
s===$&&A.c()
s=s.a
w=s.a
v=B.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=B.a.o7(w,v,v,u)
this.d.bI(0,new A.bc(t,A.h1(B.br,v+u.length),B.aM))},
a9j(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a9j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(Z.Fc(78,1920),$async$a9j)
case 3:s=e
if(s==null){w=1
break}t.n(new C.dRm(t,s))
case 1:return A.h(u,v)}})
return A.i($async$a9j,v)},
W8(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$W8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hR().a3g(B.eu),$async$W8)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return A.b(s.f7(),$async$W8)
case 4:t.n(new r.dRr(t,e))
case 1:return A.h(u,v)}})
return A.i($async$W8,v)},
a9k(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$a9k=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=$.au()
s=new A.ap(B.as,t)
r=new A.ap(new A.bc("https://",B.b0,B.aM),t)
q=u.c
q.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.dRp(s,r),q,null,!0,!0,x.y),$async$a9k)
case 2:if(e===!0)u.n(new C.dRq(u,s,r))
s.R$=t
s.O$=0
r.R$=t
r.O$=0
return A.h(null,v)}})
return A.i($async$a9k,v)},
bxI(){var w,v,u,t,s,r=null,q=A.a([],x.a),p=this.d
p===$&&A.c()
p=B.a.fl(p.a.a,A.ae("\\n\\s*\\n",!0,!1,!1,!1))
w=new A.J(p,new C.dRi(),A.U(p).k("J<1,n>")).bZ(0,new C.dRj())
for(p=J.aV(w.a),v=new A.hK(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gT(p)
if(B.a.a_(s,"## "))q.push(new C.ll("heading",B.a.i(B.a.aW(s,3)),r,r))
else if(B.a.a_(s,"\u2022 ")||B.a.a_(s,"- "))q.push(new C.ll("bullets",new A.J(A.a(s.split("\n"),u),new C.dRk(),t).bZ(0,new C.dRl()).aG(0,"\n"),r,r))
else q.push(new C.ll("text",s,r,r))}p=this.e
p===$&&A.c()
B.d.v(q,p)
if(q.length===0)q.push(D.a1d)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.L(d).ax.a===B.H,m=new C.cWK(n),l=n?B.aG:B.fw,k=A.d(p.a.d,o,o,o,o,o,o,B.cr,o,o,o),j=x.p
k=A.eA(A.a([A.dn(S.YA,B.a4I,new C.dRw(p,d),A.bk(B.aK,o,o,o,B.c,o,o,o,o,o,o,o)),B.aa],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?B.cV:B.iV
v=A.c8(B.bH,A.a([p.uK(E.KC,"Bold",new C.dRx(p),m),p.uK(E.WS,"Italic",new C.dRy(p),m),p.uK(E.af8,"Underline",new C.dRz(p),m),p.uK(Ac.WZ,"Heading",new C.dRA(p),m),p.uK(O.KD,"Bullets",new C.dRB(p),m),p.uK(E.af7,"Align",new C.dRC(),m),p.uK(B.E6,"Link",p.gbSD(),m),p.uK(B.p2,"Image",p.gbSC(),m),p.uK(Y.Xa,"Video",p.gbSE(),m),p.uK(M.Yf,"Signature",new C.dRD(p),m),p.uK(Y.KE,"Divider",new C.dRE(p),m)],j),B.bx,4,4)
w=A.p(o,A.u(A.a([v,B.ar,A.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,A.l(o,o,n?B.eP:B.bu,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),B.af,o,B.e,B.j,0,B.p),B.h,w,o,o,o,o,o,o,E.ae3,o,o,o)
v=n?B.da:B.c
u=A.m(12)
t=A.H(n?B.f4:B.em,B.r,1)
s=A.a([new A.aa(0,B.G,B.x.j(n?0.35:0.08),B.cA,16)],x.V)
r=p.d
r===$&&A.c()
q=A.l(o,o,n?B.ih:B.aG,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=A.a([w,A.D(new A.C(B.c2,A.p(o,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),r,o,o,o,o,o,2,A.bm(o,B.er,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.eP:B.bu,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!0,p.f,B.ag,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,q,!0,B.a6,o,B.am,o,o,o,o),B.h,o,o,new A.o(v,o,t,u,s,o,B.n),o,o,o,o,A4.zO,o,o,o),o),1)],j)
n=p.e
n===$&&A.c()
if(n.length!==0){n=new A.hw(n,A.U(n).k("hw<1>"))
j.push(A.p(o,A.c8(B.bH,n.gdH(n).di(0,new C.dRF(p,m),x.g5).dA(0),B.bx,0,8),B.h,o,o,o,o,o,o,o,B.JZ,o,o,o))}return A.cd(k,l,A.u(j,B.m,o,B.e,B.j,0,B.p),o,!1,!1,o,o)},
uK(d,e,f,g){var w=null,v=g.a,u=v?B.da:B.c,t=A.m(8),s=A.m(8)
return A.hA(A.aD(!1,B.Y,!0,t,A.aI(!1,s,!0,new A.C(B.ch,A.V(d,v?B.ih:B.aG,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.h,u,0,w,w,w,w,w,B.ac),w,e,w,w)}}
C.d8P.prototype={}
C.ayf.prototype={
a3(){return"_KbView."+this.b}}
C.ann.prototype={
S(){return new C.aAF(D.aN2)},
cGn(d,e){return this.e.$2$size(d,e)}}
C.aAF.prototype={
gawh(){var w,v
if(this.e==null)return null
for(w=J.aV(this.a.c);w.C();){v=w.gT(w)
if(v.a===this.e)return v}return null},
gcjr(){var w,v,u,t,s,r=this.gawh()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
c_w(d){this.n(new C.dRf(this,d))},
c68(d){this.n(new C.dRg(this,d))},
bw0(){this.n(new C.dR7(this))},
bw2(){this.n(new C.dR8(this))},
gb0O(){var w=A.bj(this.a.c,!0,x.i)
B.d.aY(w,new C.dRh())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.L(d).ax.a===B.H,f=new C.d8P(g),e=x.O
e=g?A.a([B.M.j(0.9),B.bi.j(0.85)],e):A.a([B.es.j(0.55),B.lR.j(0.45)],e)
w=A.m(22)
v=A.H((g?B.aI:B.fx).j(0.55),B.r,1)
switch(i.d.a){case 0:g=i.bwZ(f)
break
case 1:g=i.gawh()
g.toString
g=i.bxG(f,g)
break
case 2:u=i.gawh()
u.toString
t=i.gcjr()
t.toString
s=A.aY(u.d)
r=A.m(16)
r=A.p(h,A.d(t.b,h,h,h,h,h,h,D.eFr,h,h,h),B.h,h,h,new A.o(B.aK,h,h,r,h,h,B.n),h,h,h,h,B.bB,h,h,1/0)
q=g?B.aG:B.c
p=A.m(16)
o=A.H(g?B.aI:B.aJ,B.r,1)
n=A.a([new A.aa(0,B.G,B.x.j(g?0.28:0.06),B.e6,10)],x.V)
m=g?B.fu:B.pV
l=A.m(8)
k=A.V(B.p7,g?B.dE:B.e9,h,h,h,14)
j=x.p
j=A.u(A.a([new C.ayd(f,i.gbw1(),u.c,s,"Answer",h),A.D(A.cL(A.a([r,B.ab,A.p(h,A.u(A.a([A.p(h,A.B(A.a([k,B.eA,A.d("Stored answer",h,h,h,h,h,h,A.l(h,h,g?B.dE:B.e9,h,h,h,h,h,h,h,h,11,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),B.m,h,B.e,B.R,0,h,h),B.h,h,h,new A.o(m,h,h,l,h,h,B.n),h,h,h,B.e_,B.fV,h,h,h),new C.aX7(t.c,t.e,f,h)],j),B.F,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(q,h,o,p,n,h,B.n),h,h,h,h,B.c2,h,h,1/0)],j),h,B.bgN,h,h,B.aj,!1),1)],j),B.af,h,B.e,B.j,0,B.p)
g=j
break
default:g=h}return A.p(h,g,B.ap,h,h,new A.o(h,h,v,w,h,new A.a7(B.b1,B.b5,B.w,e,h,h),B.n),h,h,h,B.iH,h,h,h,h)},
aSe(d){var w,v,u,t=null,s=d.a,r=s?D.re:B.c,q=B.aB.j(0.22)
q=A.a([new A.aa(0,B.G,q,B.J,14),new A.aa(0,B.G,B.x.j(s?0.28:0.06),B.J,8)],x.V)
w=A.H(s?B.aI:B.fx,B.r,2)
v=this.a
u=x.p
q=A.a([A.p(t,A.hO(v.cGn(v.d,72),B.ap),B.h,t,t,new A.o(r,t,w,t,q,t,B.a5),t,72,t,t,t,t,t,72)],u)
if(this.a.f)B.d.v(q,A.a([B.ar,A.d("Tap to switch",t,t,t,t,t,t,A.l(t,t,B.dk,t,t,t,t,t,t,t,t,12,t,t,B.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return A.u(q,B.m,t,B.e,B.j,0,B.p)},
bwZ(d){var w,v,u=this,t=null,s=u.a.r
s=A.at(s!=null?A.aH(t,u.aSe(d),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,B.ae):u.aSe(d),t,t,t)
w=d.a
v=A.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,A.l(t,t,w?B.aN:B.M,t,t,t,t,t,t,t,t,20,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),B.L,t,t)
return A.cL(A.a([s,B.ay,v,B.ar,A.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,A.l(t,t,w?B.bK:B.ai,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),B.L,t,t),B.bt,A.ih(!0,t,t,B.z,G.aIf,new C.dRa(u,d),u.gb0O().length,t,B.dL,B.aj,!0)],x.p),t,D.bh5,t,t,B.aj,!1)},
bxG(d,e){var w,v,u,t,s=null,r=A.bj(e.e,!0,x.u)
B.d.aY(r,new C.dRc())
w=A.aY(e.d)
v=d.a
u=A.d("Tap a question to read the stored answer.",s,s,s,s,s,s,A.l(s,s,v?B.bK:B.ai,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=A.at(A.d("No questions in this category yet.",s,s,s,s,s,s,A.l(s,s,v?B.bK:B.ai,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=A.hG(s,new C.dRd(this,r,d,e),t,B.uj,s,B.aj,new C.dRe(),!1)
return A.u(A.a([new C.ayd(d,this.gbw_(),e.c,w,e.b,s),new A.C(Ah.wx,u,s),A.D(v,1)],x.p),B.af,s,B.e,B.j,0,B.p)}}
C.ayd.prototype={
B(d){var w=this,v=null,u=w.c.a,t=A.aF(v,v,v,v,A.V(B.eo,u?B.aN:B.M,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=A.m(12)
q=A.p(v,A.V(w.e,s,v,v,v,22),B.h,v,v,new A.o(r,v,v,q,v,v,B.n),v,v,v,v,B.ch,v,v,v)
return new A.C(D.bkh,A.B(A.a([t,q,B.aw,A.D(A.d(w.r,v,v,v,v,v,v,A.l(v,v,u?B.aN:B.M,v,v,v,v,v,v,v,v,17,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,v,v),v)}}
C.a9y.prototype={
B(d){var w=null,v=this.c,u=A.aY(v.d),t=this.d.a,s=t?D.re:B.c,r=A.m(14),q=A.m(14),p=A.m(14),o=A.H(t?B.aI:B.aJ,B.r,1),n=A.a([new A.aa(0,B.G,B.x.j(t?0.28:0.06),B.dH,6)],x.V),m=u.j(0.15),l=A.m(12)
l=A.p(w,A.V(v.c,u,w,w,w,22),B.h,w,w,new A.o(m,w,w,l,w,w,B.n),w,40,w,w,w,w,w,40)
return new A.fJ(1,A.aD(!1,B.Y,!0,r,A.aI(!1,q,!0,A.p(w,A.u(A.a([l,B.ar,A.d(v.b,w,2,B.a2,w,w,w,A.l(w,w,t?B.aN:B.M,w,w,w,w,w,w,w,w,10,w,w,B.I,w,1.1,!0,w,w,w,w,w,w,w,w),B.L,w,w)],x.p),B.m,w,B.b6,B.j,0,B.p),B.h,w,w,new A.o(w,w,o,p,n,w,B.n),w,w,w,w,B.ch,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),B.h,s,0,w,w,w,w,w,B.ac),w)}}
C.aX7.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=A.a([],q)
if(this.d){w=r.a
v=w?B.fu:B.pV
u=A.m(8)
t=A.V(B.rZ,w?B.dE:B.e9,s,s,s,14)
p.push(A.p(s,A.B(A.a([t,B.d6,A.d("Printable document",s,s,s,s,s,s,A.l(s,s,w?B.dE:B.e9,s,s,s,s,s,s,s,s,10,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),B.m,s,B.e,B.R,0,s,s),B.h,s,s,new A.o(v,s,s,u,s,s,B.n),s,s,s,B.cK,B.et,s,s,s))}B.d.v(p,J.b4(this.c,new C.c4k(r),x.l))
return A.u(p,B.F,s,B.e,B.j,0,B.p)}}
C.a9q.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new A.C(D.beZ,A.d(q.b,r,r,r,r,r,r,A.l(r,r,s.d.a?B.aN:B.M,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new A.C(B.hx,A.bu(A.m(12),K.aMl(r,B.bO,160,B.p2,r,w,1/0),B.ap),r)
case"video":v=q.c
q=v==null?q.b:v
return new A.C(B.hx,new C.aye(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new A.C(B.ws,A.aI(!1,r,!0,A.d(q,r,r,r,r,r,r,A.l(r,r,s.d.a?B.cF:B.bj,r,B.mf,r,r,r,r,r,r,r,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cyZ(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=A.jm(v?B.aI:B.aJ,r,r,r,r,r)
q=A.d(q.b,r,r,r,r,r,r,A.l(r,r,v?B.cp:B.aI,r,r,r,r,r,r,r,r,r,B.cx,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=A.p(r,r,B.h,v?B.bK:B.ai,r,r,r,1,r,r,r,r,r,120)
return new A.C(B.zz,A.u(A.a([u,q,B.aO,t,B.av,A.d("Signature",r,r,r,r,r,r,A.l(r,r,v?B.bK:B.ai,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r)
case"bullets":v=x.cl
q=A.z(new A.cS(new A.a4(A.a(q.b.split("\n"),x.s),new C.cz_(),x.cc),new C.cz0(s),v),v.k("G.E"))
return new A.C(B.ln,A.u(q,B.F,r,B.e,B.j,0,B.p),r)
case"divider":return new A.C(B.hx,A.jm(s.d.a?B.aI:B.aJ,r,r,r,r,r),r)
default:q=q.b
if(B.a.i(q).length===0)return B.bF
return new A.C(B.fo,C.hrS(q,s.d),r)}}}
C.aye.prototype={
S(){return new C.bd8()}}
C.bd8.prototype={
Z(){this.a0()
this.abj()},
abj(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$abj=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=B.a.i(r.a.c)
if(J.a9(n)!==0)p=!J.cU(n,"http")&&!J.cU(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=A.Wd(A.cr(n,0,null),null)
w=7
return A.b(J.aft(q),$async$abj)
case 7:if(r.c==null){w=1
break}r.n(new C.d8Q(r,q))
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
return A.i($async$abj,v)},
p(){var w=this.d
if(w!=null)w.p()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?B.bi:B.f2
u=A.m(12)
return A.p(B.A,A.V(B.pc,w?B.bK:B.ai,t,t,t,36),B.h,t,t,new A.o(v,t,t,u,t,t,B.n),t,120,t,t,t,t,t,t)}w=A.m(12)
v=s.a
u=J.afr(v)
return A.bu(w,new A.fJ(u,new A.am(B.A,t,B.a9,B.q,A.a([new A.z5(s,t),A.aF(t,t,t,t,A.V(v.f?B.aff:B.KF,B.c,t,t,t,44),t,t,t,new C.d8S(this,s),t,t,t,t,t,t)],x.p),t),t),B.ap)}}
C.ao9.prototype={
a3(){return"NgmyMusicLane."+this.b}}
C.H8.prototype={
a3(){return"NgmyMusicRhymeScheme."+this.b}}
C.qQ.prototype={}
C.anq.prototype={
S(){var w=null
return new C.aAH(new A.ap(B.as,$.au()),A.m9(0,w,w),A.a([],x.m),D.B7,D.aAk,w,w)},
gdS(){return this.d}}
C.aAH.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,B.mx,null,1,null,v)
w.f1(0,!0)
v.as!==$&&A.aO()
v.as=w
v.z=B.d.gK(D.a_Q).a},
p(){var w=this,v=w.as
v===$&&A.c()
v.p()
v=w.d
v.R$=$.au()
v.O$=0
w.e.p()
w.bpE()},
gan0(){var w,v,u,t,s=this.x
if(s===D.B8)return null
s=s===D.B7
w=s?D.a_Q:D.a_6
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?B.d.gK(w):null},
ckc(d){return this.n(new C.dRU(this,d))},
aw4(){$.aT.x1$.push(new C.dRL(this))},
Ht(d){return this.cjF(d)},
aUw(){return this.Ht(null)},
cjF(b0){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$Ht=A.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=B.a.i(b0==null?q.d.a.a:b0)
if(J.a9(a8)===0||q.r||q.a.e){w=1
break}w=3
return A.b(q.a.f.$0(),$async$Ht)
case 3:e=b2
if(!e){w=1
break}A.jE()
d=a8.toLowerCase()
p=B.a.t(d,"continue")||B.a.t(d,"keep going")||B.a.t(d,"go on")||B.a.t(d,"next verse")||B.a.t(d,"more lyrics")||B.a.t(d,"endelea")||B.a.t(d,"endelea na")||B.a.t(d,"ongeza")||B.a.t(d,"tuendelee")
a0=q.f
a1=B.d.bg(a0,new C.dRN())
o=!p&&!a1
d=a8.toLowerCase()
if(!(B.a.t(d,"fix")||B.a.t(d,"rewrite")||B.a.t(d,"re-write")||B.a.t(d,"rhyme better")||B.a.t(d,"better rhyme")||B.a.t(d,"sound better")||B.a.t(d,"improve")||B.a.t(d,"polish")||B.a.t(d,"make it rhyme")||B.a.t(d,"boresha")||B.a.t(d,"rekebisha")||B.a.t(d,"endeleza mistari")))a2=C.fZd(a8)&&a1
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
l=C.fZd(a8)&&!p
q.n(new C.dRO(q,a8))
q.aw4()
k=B.a.i(q.a.c)
if(J.a9(k)===0){q.n(new C.dRP(q))
q.aw4()
w=1
break}t=5
j=A.mH(k)
i=new A.J(a0,new C.dRQ(),A.U(a0).k("J<1,n>")).aG(0,"\n\n")
a0=C.hKV(m,p,o,q.x,n,q.y,q.gan0(),l)
a3=J.a9(i)!==0?"--- Conversation so far ---\n"+A.t(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+A.t(a8)
w=8
return A.b(A.qh(j,h,B.h8,null),$async$Ht)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=B.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=B.a.i(a0)}else a6=L.bxI(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.n(new C.dRR(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.n(new C.dRS(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.n(new C.dRT(q))
q.aw4()
w=r.pop()
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ht,v)},
bBC(){return this.Ht("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=A.L(d).ax.a===B.H,p=q?B.Dd:D.b6t,o=x.p
o=A.a([A.u(A.a([A.D(s.ciV(q),1),s.bAR(q)],o),B.m,r,B.e,B.j,0,B.p)],o)
if(s.f.length!==0&&!s.r){w=B.aL.j(0.55)
v=s.r?r:s.gbBB()
u=A.m(28)
t=A.a([B.aL,B.aX],x.O)
o.push(A.an(78,A.aD(!1,B.Y,!0,r,A.aI(!1,r,!0,A.eq(D.dOe,r,new A.o(r,r,r,u,A.a([new A.aa(0,B.G,B.aL.j(0.45),B.cA,16)],x.V),new A.a7(B.a3,B.a7,B.w,t,r,r),B.n),r,r,r),B.qR,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),B.h,B.K,10,r,w,B.qR,r,r,B.ac),r,r,r,14,r,r))}return A.p(r,new A.am(B.W,r,B.a9,B.q,o,r),B.h,p,r,r,r,r,r,r,r,r,r,r)},
ciV(d){var w,v,u,t=this,s=null
if(t.x===D.B8)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=A.a([A.fDb(s,!1,B.K,0,0,w,A.fzA(t.coo(d),B.T8,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=A.V(B.ahD,B.aB.j(0.5),s,s,s,52)
w.push(A.b2D(new A.C(B.en,A.u(A.a([u,B.ay,A.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,A.l(s,s,d?B.aA:B.dw,s,s,s,s,s,s,s,s,14,s,s,B.a4,s,1.45,!0,s,s,s,s,s,s,s,s),B.L,s,s),B.ay,A.c8(B.fF,A.a([t.afs("Full bongo love song ABAB",d),t.afs("Mix: group vs private jet \u2014 which flies?",d),t.afs("Song from John 3:16 + matching verses",d),t.afs("Fix my rhyme \u2014 paste your lines",d)],v),B.bx,8,8)],v),B.m,s,B.b6,B.j,0,B.p),s),!1))}else{v=t.r?1:0
w.push(new A.nq(D.bfE,A.VF(new A.o_(new C.dRM(t,d),u+v,!0,!0,!0,0,A.rh(),s)),s))}return A.uP(0,s,B.q,t.e,B.z,s,s,A6.a6P,s,s,!1,s,B.aj,!1,w)},
coo(d){var w=this.as
w===$&&A.c()
return A.c4(w,new C.dS0(this,d),null)},
coq(d){var w,v=this,u=null,t=A.m(14),s=v.r?u:new C.dS2(v),r=B.x.j(d?0.35:0.06),q=A.m(14),p=A.H(B.b9.j(0.35),B.r,1),o=v.gan0()
o=o==null?u:o.c
o=A.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,B.Hh,u,u,u)
w=v.gan0()
w=w==null?u:w.b
if(w==null)w="Style"
w=A.D(A.d(w,u,u,u,u,u,u,A.l(u,u,d?B.c:B.bh,u,u,u,u,u,u,u,u,12,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return A.aD(!1,B.Y,!0,u,A.aI(!1,t,!0,A.p(u,A.B(A.a([o,B.aa,w,A.V(v.w?B.L4:B.qj,B.b9,u,u,u,20)],x.p),B.m,u,B.e,B.j,0,u,u),B.h,u,u,new A.o(r,u,p,q,u,u,B.n),u,u,u,u,B.qe,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac)},
as3(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=A.a([B.aW,B.aS],x.O)
break
case 1:w=A.a([B.bj,B.cF],x.O)
break
case 2:w=A.a([B.bz,B.aB],x.O)
break
default:w=n}v=m?6:0
u=A.m(14)
t=A.m(14)
s=this.r?n:new C.dRK(this,d)
r=A.m(14)
w=m?new A.a7(B.a3,B.a7,B.w,w,n,n):n
if(m)q=n
else q=B.x.j(g?0.3:0.05)
p=A.d(f,n,n,n,n,n,n,B.Hh,n,n,n)
if(m)o=B.c
else o=g?B.al:B.bh
return A.D(A.aD(!1,B.Y,!0,u,A.aI(!1,t,!0,A.di(n,A.u(A.a([p,A.d(e,n,n,n,n,n,n,A.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),B.m,n,B.e,B.j,0,B.p),n,n,B.b8,new A.o(q,n,n,r,n,w,B.n),B.Y,n,n,n,B.jD,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),B.h,n,v,n,n,n,n,n,B.ac),1)},
cor(d,e){var w,v,u,t=this,s=null,r=t.x===D.B7?t.z:t.Q,q=A.m(20)
if(r===d.a)r=B.b9.j(e?0.25:0.15)
else r=B.x.j(e?0.2:0.04)
w=A.m(20)
v=t.r?s:new C.dS3(t,d)
u=A.d(d.c,s,s,s,s,s,s,B.QM,s,s,s)
return A.aD(!1,B.Y,!0,q,A.aI(!1,w,!0,new A.C(B.fJ,A.B(A.a([u,B.d6,A.d(d.b,s,s,s,s,s,s,A.l(s,s,e?B.c:B.bh,s,s,s,s,s,s,s,s,10,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.m,s,B.e,B.R,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),B.h,r,0,s,s,s,s,s,B.ac)},
afs(d,e){var w=null,v=A.d(d,w,w,w,w,w,w,E.a4B,w,w,w),u=B.aB.j(e?0.2:0.1)
return A.mJ(w,u,v,w,this.r?w:new C.dRV(this,d),w,w,w,w)},
bAR(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=A.m(22),o=d?B.M.j(0.95):B.c,n=A.H(B.aB.j(0.2),B.r,1),m=x.p,l=A.a([],m)
if(q>0)l.push(new A.C(F.adP,A.d("$"+B.k.aa(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,A.l(r,r,B.aL.j(0.85),r,r,r,r,r,r,r,r,9,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=A.l(r,r,d?B.c:B.bh,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.B8?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=A.D(A.aK(r,B.U,!1,r,!0,B.q,r,A.aL(),w,r,r,r,r,r,2,A.bm(r,B.er,r,B.h4,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.l(r,r,d?B.c1:B.hN,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),B.z,!0,r,!0,r,!1,r,B.ag,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.dRH(s),r,!1,r,r,!1,r,!0,r,B.a8,r,r,r,r,r,r,r,r,r,r,r,v,!0,B.a6,r,B.am,r,r,r,r),1)
u=s.r
t=u?r:new C.dRI(s)
l.push(A.B(A.a([v,new A.Hj(w,B.aB,r),A.aD(!1,B.Y,!0,r,A.aI(!1,r,!0,A.eq(u?D.dOo:D.byc,r,D.aSH,42,r,42),B.cE,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),B.h,r,0,r,r,B.cE,r,r,B.ac)],m),B.dF,r,B.e,B.j,0,r,r))
return A.p(r,A.u(l,B.af,r,B.e,B.R,0,B.p),B.h,r,r,new A.o(o,r,n,p,r,r,B.n),r,r,r,B.uh,B.aco,r,r,r)}}
C.aIE.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
C.Tq.prototype={
ac(){var w=this
return A.E(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.XA.prototype={
S(){return new C.axH(null,null)},
bbh(){return this.f.$0()}}
C.axH.prototype={
Z(){var w,v=this,u=null
v.a0()
w=A.bi(u,D.be2,u,1,u,v)
w.cn(0)
v.d!==$&&A.aO()
v.d=w
w=A.bi(u,B.oV,u,1,u,v)
w.f1(0,!0)
v.e!==$&&A.aO()
v.e=w
w=A.bi(u,B.nm,u,1,u,v)
w.cF(0)
v.f!==$&&A.aO()
v.f=w
w=A.bi(u,B.wm,u,1,u,v)
w.cn(0)
v.r!==$&&A.aO()
v.r=w},
p(){var w=this,v=w.d
v===$&&A.c()
v.p()
v=w.e
v===$&&A.c()
v.p()
v=w.f
v===$&&A.c()
v.p()
v=w.r
v===$&&A.c()
v.p()
w.bov()},
c_y(){var w=this.d
w===$&&A.c()
w.en(0).bw(new C.d6p(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(A.aG(d,B.bP,x.w).w.a.a-32,360),h=B.x.j(0.82),g=k.gc_x(),f=x.l,e=J.e_(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&A.c()
e[v]=new A.BX(new C.d6q(k,v,d),j,w,j)}f=A.z(e,f)
w=k.d
w===$&&A.c()
u=A.m(28)
t=A.H(B.c.j(0.22),B.r,1.5)
s=A.a([new A.aa(2,B.G,B.aX.j(0.35),B.J,40),new A.aa(0,B.G,B.aK.j(0.25),B.fE,28)],x.V)
r=k.e
r===$&&A.c()
q=k.r
q===$&&A.c()
q=A.c4(new A.h3(A.a([r,q],x.U)),new C.d6r(k),j)
r=A.np(B.ja,D.f4H,new C.d6s())
p=A.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,A.l(j,j,B.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,B.cq,j,1.45,!0,j,j,j,j,j,j,j,j),B.L,j,j)
o=x.p
n=A.B(A.a([k.aUx(B.k4,"Resets in 24h"),B.aa,k.aUx(B.p7,"Help Topics ready")],o),B.m,j,B.b6,B.j,0,j,j)
m=A.a([],o)
k.a.toString
l=B.c.j(0.35)
m.push(A.D(A.dV(D.f_D,new C.d6t(k),A.db(j,j,j,j,j,j,j,j,j,B.al,j,j,B.lW,j,new A.b5(A.m(14),B.V),new A.ay(l,1,B.r,-1),j,j,j,j)),1))
k.a.toString
m.push(B.aw)
k.a.toString
l=A.m(14)
m.push(A.D(A.bK(D.f4y,g,A.bk(B.aK,j,j,6,B.c,j,B.lW,B.aK.j(0.5),new A.b5(l,B.V),j,j,j)),1))
f.push(A.at(A.aH(j,A.c4(w,new C.d6u(k),A.p(j,A.u(A.a([q,B.ay,r,B.T,p,B.P,n,B.bt,A.B(m,B.m,j,B.e,B.j,0,j,j)],o),B.m,j,B.e,B.R,0,B.p),B.h,j,j,new A.o(j,j,t,u,s,D.bFU,B.n),j,j,j,j,A7.adH,j,j,i)),B.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.d6v(),j,j,j,j,j,j,!1,B.ae),j,j,j))
return A.aD(!1,B.Y,!0,j,A.aH(j,new A.am(B.W,j,B.a9,B.q,f,j),B.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,B.ae),B.h,h,0,j,j,j,j,j,B.ac)},
aUx(d,e){var w=null,v=B.c.j(0.08),u=A.m(20),t=A.H(B.c.j(0.12),B.r,1)
return A.p(w,A.B(A.a([A.V(d,B.aX,w,w,w,13),B.eA,A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.R,0,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.fJ,w,w,w)}}
C.aHy.prototype={
aN(){this.aV()
this.aU()
this.dD()},
p(){var w=this,v=w.aZ$
if(v!=null)v.a1(0,w.gdB())
w.aZ$=null
w.a2()}}
C.M2.prototype={}
C.pm.prototype={}
C.anX.prototype={
S(){return new C.aB2(A.a([],x.E),A.a([],x.s))}}
C.aB2.prototype={
gano(){return B.k.D(A.Jt(this.a.c.a,new C.e0u(this)),0,1/0)},
a5S(){var w,v=this,u=v.d,t=v.gano()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)A.qg(u.a,t,!0,!1)},
HX(d,e){var w,v,u,t=this,s=t.gano(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gano()
if(w<v-0.005)A.h3f(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)A.qg(u.a,w,!0,!1)
A.qg(t.a.c.a,w,!0,!1)
A.zI(!0,!1,w,t.a.c.a)},
Z(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a0()
$.aT.c_$.push(o)
w=$.GY+1
$.GY=w
if(w===1){w=$.fQY
if(w!=null)w.$0()}v=$.fBB.h(0,B.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=A.bj(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=A.bj(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=A.lt(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,B.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=A.aM0(u,B.k.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new A.uI(w,u,r,q,s.e,p)}o.d=t}o.Nn()
o.a5S()
$.aT.x1$.push(new C.e1a(o))
o.Q=A.dD(B.nj,new C.e1b(o))
o.as=A.dD(B.fI,new C.e1c(o))},
p(){var w=this,v=w.Q
if(v!=null)v.a9(0)
v=w.as
if(v!=null)v.a9(0)
$.aT.hE(w)
C.hjO()
w.a2()},
cqw(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new A.Q(Date.now(),0,!1)
v=p.r
if(!C.a5A(v,w)){if(C.fBD(p,q.e)){q.n(new C.e0T(q,p))
q.wR(!1,!0,!0)}else if(q.c!=null)q.n(new C.e0U())
return}if(!C.c6A(v.c?v.bQ():v)){q.n(new C.e0V(p))
q.aUG(!1)
return}u=p.gBf()
if(u<=0)return
t=w.cY(A.bW(A.bw(w),A.bB(w),A.bQ(w),12,0,0,0,0))
s=C.fBE(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.n(new C.e0W())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(B.d.bg(q.e,new C.e0X(r))){q.n(new C.e0Y(p,w,u))
return}q.n(new C.e0Z(q,p,u,w))
q.au9(new A.cX(r,p.a,u,B.fs,B.f5,"Clock-in daily earnings (local)",null,null,B.cf,w))},
iP(d){if(d===B.ft)this.Dr()},
Nn(){var w,v,u,t,s,r,q,p=this.d
if(p==null)return
w=this.a.c
w.e=p.e
w.f=p.f
w.r=p.r
w.rx=p.rx
w.fr=p.fr
w.fx=p.fx
w.fy=p.fy
w.bf=p.bf
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
q=new A.uI(u,t,s,r,v.e,q)
u=q}w.x=u},
PY(d){return this.cpb(d)},
cpb(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$PY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.Nn()
t.HX(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return A.b(x.r.b(s)?s:A.dQ(s,x.H),$async$PY)
case 3:case 1:return A.h(u,v)}})
return A.i($async$PY,v)},
Dr(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$Dr=A.e(function(d,e){if(d===1){s.push(e)
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
return A.b(H.yu(q.w,k,l,j,m,!1,n),$async$Dr)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.n(new C.e0O(q,p))
q.PY(!1)}w=8
return A.b(q.I8(),$async$Dr)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=A.a5(h)
$.al.$1("[growth income] pull wallet: "+A.t(o))
w=9
return A.b(q.I8(),$async$Dr)
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
return A.i($async$Dr,v)},
LQ(d){return this.bvd(d)},
bvc(){return this.LQ(null)},
bvd(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$LQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return A.b(A.ax(),$async$LQ)
case 3:s=f
r=B.a.i(t.a.c.a.toLowerCase())
q=A.d6(t.w,x.N)
r=s.rn("ngmy_gi_credited_txn_ids_"+r)
q.v(0,r==null?A.a([],x.s):r)
j.a=0
p=A.a([],x.s)
o=d==null?null:A.ko(d,A.U(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,A.K)(r),++m){l=r[m]
k=l.a
if(q.t(0,k))continue
if(o!=null&&!o.t(0,k))continue
if(l.d===B.fj&&l.x===B.cf&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.n(new C.e0v(j,t,i))
q.v(0,p)
r=A.z(q,A.a2(q).k("ck.E"))
t.w=r
w=4
return A.b(A.anZ(t.a.c.a,r),$async$LQ)
case 4:t.atL(!1,!0)
r=t.c
if(r!=null)r.G(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Balance updated: +$"+A.dw(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$LQ,v)},
I8(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$I8=A.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=A.U(a2).k("a4<1>")
a4=A.z(new A.a4(a2,new C.e0P(),a3),a3.k("G.E"))
a5=a4
a6=A.a([],x.s)
w=J.a9(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=A.U(a2).k("J<1,n>")
e=A.z(new A.J(a2,new C.e0Q(),a3),a3.k("ai.E"))
q=e
w=9
return A.b(A.l9("transactions","id,status",null,null,null,A.E(["id",q],x.N,x.j),null,!0,null,null,!1,B.bD),$async$I8)
case 9:p=a9
if(r.c==null){w=1
break}o=!1
for(a2=J.aV(p);a2.C();){n=a2.gT(a2)
m=n
a3=J.q(m,"id")
l=J.k(a3==null?"":a3)
a3=A.aQ(J.q(m,"status"))
d=a3==null?null:B.k.N(a3)
k=d==null?0:d
if(J.a9(l)===0)continue
j=B.d.bi(r.e,new C.e0R(l))
if(j<0)continue
i=r.e[j].x
if(J.y(k,1))a0=B.cf
else a0=J.y(k,2)?B.jS:B.dn
h=a0
if(!J.y(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===B.dn&&h===B.cf&&a3[j].d===B.fj)J.cg(a6,l)
if(i===B.dn&&h===B.jS&&r.e[j].d===B.eC){g=r.d
if(g!=null){r.HX(g.d+r.e[j].c,!1)
r.atL(!1,!0)}}}}if(o&&r.c!=null)r.n(new C.e0S())
t=2
w=8
break
case 6:t=5
a7=s.pop()
f=A.a5(a7)
$.al.$1("[growth income] refresh deposit status: "+A.t(f))
w=8
break
case 5:w=2
break
case 8:case 4:w=J.a9(a6)!==0?10:12
break
case 10:w=13
return A.b(r.LQ(a6),$async$I8)
case 13:w=11
break
case 12:w=14
return A.b(r.bvc(),$async$I8)
case 14:case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$I8,v)},
NY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$NY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return A.b(A.u1(i.a,i),$async$NY)
case 3:h=e
if(t.c==null){w=1
break}t.n(new C.e0z(t,h))
t.Nn()
t.a5S()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return A.b(H.yu(s[0],p,q,o,r,!0,i),$async$NY)
case 4:i=e.a
n=i[4]
m=A.bj(i[2],!0,x.o)
l=i[5]
t.w=A.bj(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.Nn()
t.a5S()
k=C.fBD(n,m)
if(k)t.HX(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.Y&&s.au>0
else s=!0
j=A.fRG(n,m,new A.Q(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.Nn()
if(t.c==null){w=1
break}t.n(new C.e0A(t,n,m,l))
if(i){t.wR(!1,!0,!0)
if(j==="reset"){A.fQx(t.a.c.a)
i=t.c
if(i!=null)A.fQA(i,null)}else if(j==="warn2"){A.fQy(t.a.c.a)
i=t.c
if(i!=null)C.fQB(i)}}else if(k)t.wR(!1,!0,!0)
else t.PY(!1)
case 1:return A.h(u,v)}})
return A.i($async$NY,v)},
wR(d,e,f){return this.c9E(d,e,f)},
atL(d,e){return this.wR(d,!1,e)},
aUG(d){return this.wR(!1,d,!1)},
c9E(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$wR=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new A.Q(Date.now(),0,!1).a4()
r=t.a.c.a
q=t.e
p=t.f
w=3
return A.b(A.qO(r,o,q,!1,t.w,s,p),$async$wR)
case 3:p=t.a.c.a
q=t.e
r=t.f
A.H1(t.w,p,q,s,o,r)
if(f)t.PY(d)
case 1:return A.h(u,v)}})
return A.i($async$wR,v)},
c_O(){this.n(new C.e0I())
this.atL(!1,!0)},
abW(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===B.cf&&A.re(d)){w=r.a
w.f.$1(new A.cX(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.c6w(q,d)
v=q.d=A.Jt(r.a.c.a,new C.e0F(r))
r.at=r.a.c.d=v
A.qg(q.a,v,!0,!1)
if(r.c!=null)r.n(new C.e0G(r,d))
r.wR(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new A.cX(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===B.dn
if(w&&d.d===B.fj)s=!1
else if(w&&d.d===B.eC){r.HX(q.d-d.c,!0)
s=!0}else{C.c6w(q,d)
w=d.d
s=w===B.eC||w===B.js
r.HX(q.d,s)}r.n(new C.e0H(r,d))
w=d.d
r.wR(s,e,w===B.eC||w===B.js||d.x===B.cf||w===B.fs)},
au9(d){return this.abW(d,!0,!1)},
aVA(d,e){return this.abW(d,!0,e)},
aVz(d,e){return this.abW(d,e,!1)},
c2H(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.hN4(u,e,d)){v.lA("This plan is already active.")
return}w=A.h2M(u.a,d,e)
if(C.hJx(u.a,v.e,w)){v.lA("You already own this plan.")
return}if(u.d<g){v.lA("Insufficient balance. Add funds in the Wallet tab first.")
return}v.n(new C.e0J(v))
v.n(new C.e0K(v,u,new A.uI(d,e,0.0286,new A.Q(Date.now(),0,!1),0,0)))
v.au9(new A.cX(w,u.a,g,B.js,B.f5,"Direct investment buy: "+d,null,null,B.cf,new A.Q(Date.now(),0,!1)))
v.n(new C.e0L(v))
v.lA("Plan purchased: "+d)},
lA(d){var w=null,v=this.c
if(v==null)return
v.G(x.q).f.P(A.b0(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
Yj(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hm(s,new C.al_(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$Yj)
case 3:w=4
return A.b(t.NY(),$async$Yj)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yj,v)},
aco(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aco=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hm(s,new C.afN(r,A.a([r],x.d9),B.NU,t.a.d,t.gaVy(),t.gaUF(),null),!1,null,x.X),$async$aco)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aco,v)},
acm(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$acm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hm(s,new C.aiA(r,t.a.d,t.e,t.gaVy(),t.gaUF(),new C.e0N(t),null),!1,"LocalGrowthGameCenter",x.X),$async$acm)
case 3:case 1:return A.h(u,v)}})
return A.i($async$acm,v)},
aa3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aa3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new A.Q(s,0,!1)
w=C.fBD(j,t.e)?3:4
break
case 3:w=5
return A.b(t.aUG(!0),$async$aa3)
case 5:case 4:if(j.x==null){t.lA("Choose an investment plan first, then come back to clock in.")
t.n(new C.e0B(t))
w=1
break}if(A.mx(r)===6||A.mx(r)===7){t.lA("Clock-in opens Monday through Friday.")
w=1
break}if(!C.fRH(r)){t.lA("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a5A(q,r)&&j.fy>0){t.lA("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!A.aMJ(q,r))if(!A.aMJ(j.fr,r)){q=A.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,A.K)(p),++n){m=p[n]
if(B.a.i(m.b.toLowerCase())===B.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new A.aCR(m.y,l,m.a))}}q=A.h2d(q,r)}else q=p
else q=p}else q=!1
if(q){t.lA("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.lA("You are already clocked in for today.")
w=1
break}k=C.hld(r)
q=j.a
t.n(new C.e0C(j,r,k))
t.aVz(new A.cX("local_clockin_manual_"+q+"_"+s,j.a,0,B.fs,B.f5,"Clock-in session started (local)",null,null,B.cf,r),!1)
t.lA("Clock-in started. Keep Growth Income open for today.")
case 1:return A.h(u,v)}})
return A.i($async$aa3,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.L(d).ax.a===B.H?B.iX:B.oR
if(l.d==null)return A.ec(B.kd,j,!0)
w=x.o
v=A.S(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.m(0,q,r)}p=B.a.i(l.a.c.a.toLowerCase())
u=$.feK
u=u==null?k:u.$0()
u=J.aV(u==null?B.hW:u)
while(u.C()){t=u.gT(u)
q=t.a
if(q.length===0||v.am(0,q)||A.re(t))continue
if(B.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(A.dm(o.toLowerCase(),"clock-in",0))continue
v.m(0,q,t)}w=A.z(new A.bg(v,v.$ti.k("bg<2>")),w)
v=l.e
B.d.v(w,new A.a4(v,new C.e12(),A.U(v).k("a4<1>")))
B.d.aY(w,new C.e13())
v=l.d
v.toString
u=C.hzv(l.a.c)
t=l.d
t.toString
t=A.ec(new C.ajs(t,l.a.e,l.z,l.gc2G(),l.aPN(),D.fci),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=A.ec(new C.ayr(l.aPN(),q,n,o,w,new C.e14(l),l.gc4K(),new C.e15(l),D.fcj),j,!0)
m=A.aG(d,k,x.w).w
n=l.y
return new A.Uj(n,new C.e16(l),A.aD(!1,B.Y,!0,k,new A.a3(1/0,m.a.b,new A.am(B.W,k,B.a9,B.q,A.a([A.bZ(0,A.ec(k,j,!0),0,0,0),A.bZ(0,A.bq(!1,[new C.ayq(v,u,w,l.gbVr(),new C.e17(l),new C.e18(l),new C.e19(d),l.gc5z(),l.gc5v(),D.fch),t,o][n],!0,!1,B.ah,!0,!0),0,0,0),A.an(0,l.bxq(),k,k,0,0,k,k)],x.p),k),k),B.h,j,0,k,k,k,k,k,B.ac),k)},
aPN(){var w=null,v=A.a([D.ew.j(0.24),B.M.j(0.72)],x.O)
return A.hA(A.aI(!1,w,!0,A.p(B.A,D.bCB,B.h,w,w,new A.o(w,w,A.H(D.ew.j(0.38),B.r,1),w,A.a([new A.aa(0,B.G,D.ew.j(0.18),B.J,16)],x.V),new A.a7(B.ax,B.aC,B.w,v,w,w),B.a5),w,40,w,w,w,w,w,40),B.cE,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e0y(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bxq(){var w=null,v=A.m(27),u=A.H(B.au.j(0.45),B.r,1),t=A.a([new A.aa(0,B.G,B.x.j(0.5),B.eK,24),new A.aa(-2,B.G,B.au.j(0.12),B.J,18)],x.V)
return new A.C(B.JZ,A.bq(!0,A.at(new A.d1(D.aR3,A.p(w,A.cj(new C.e0w(this)),B.h,w,w,new A.o(w,w,u,v,t,D.bFo,B.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,B.ah,!0,!1),w)},
bX5(d){var w=null,v=this.y===d,u=D.cHM[d],t=u.b,s=u.a,r=""+d,q=x.W
return A.D(A.dl(w,!0,w,A.aH(B.c5,A.qW(A.ql(v?A.V(s,D.a85,new A.cx("on"+r,q),w,w,21):A.u(A.a([A.V(s,B.c.j(0.62),w,w,w,19),B.bA,A.d(t,w,1,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,new A.cx("off"+r,q),B.b6,B.j,0,B.p),B.ij,A.th(),B.b8,B.b8,A.a_C())),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e0E(this,d),w,w,w,w,w,w,!1,B.ae),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,B.bY,w),1)}}
C.ayq.prototype={
bUh(d){return C.fBE(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.L(d)
w=B.c.j(0.58)
v=f.e
u=A.U(v).k("a4<1>")
u=A.oK(new A.a4(v,new C.daD(),u),3,u.k("G.E"))
t=A.z(u,A.a2(u).k("G.E"))
v=f.c
s=v.x
r=new A.Q(Date.now(),0,!1)
q=v.f
p=C.a5A(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.fRH(r)
m=v.gBf()
l=A.a([D.ew.j(0.24),B.M.j(0.72)],x.O)
k=A.H(D.ew.j(0.38),B.r,1)
j=x.V
i=A.a([new A.aa(0,B.G,D.ew.j(0.18),B.J,16)],j)
l=A.aI(!1,e,!0,A.p(B.A,A.V(B.hR,D.ew,e,e,e,19),B.h,e,e,new A.o(e,e,k,e,i,new A.a7(B.ax,B.aC,B.w,l,e,e),B.a5),e,38,e,e,e,e,e,38),B.cE,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=A.m(14)
k=A.m(14)
j=A.a([new A.aa(0,B.G,B.b2.j(0.45),B.cA,16)],j)
h=A.m(12)
g=x.p
j=A.bJD(!1,l,"GROWTH INCOME",A.aI(!1,i,!0,new A.a3(44,44,new A.am(B.W,e,B.a9,B.h,A.a([A.p(B.A,A.p(B.A,D.bvl,B.h,e,e,new A.o(B.ig.j(0.78),e,e,h,e,e,B.n),e,36,e,e,e,e,e,36),B.h,e,e,new A.o(e,e,e,k,j,D.bGO,B.n),e,42,e,e,e,e,e,42),A.an(e,A.p(B.A,D.bBH,B.h,e,e,new A.o(B.cJ,e,A.H(D.aa2,B.r,2),e,e,e,B.a5),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.fUe(B.h3,new C.daE(),k)
k=A.B(A.a([A.D(C.fUd(new C.daF(f,B.tX,n),new A.Q(Date.now(),0,!1),h,k),1),B.nG,A.D(new A.tO(new C.daG(f,B.tX),e,new A.h3(A.a([$.xL(),$.a0F()],x.U)),e),1)],g),B.m,e,B.e,B.j,0,e,e)
h=f.bXf(B.tX,D.ew)
v=A.D(f.cmS("Total Profit","$"+A.dw(v.e),B.tX),1)
u=u?e:s.b
return A.ec(A.ch(A.u(A.a([j,B.T,k,B.ab,new C.ayp(f.d,m,q,p,n,o,D.ew,f.gbUg(),f.f,e),B.ab,h,B.T,A.B(A.a([v,B.nG,A.D(f.b0K("Total Investment","$"+A.dw(u==null?0:u),B.tX,f.r),1)],g),B.m,e,B.e,B.j,0,e,e),B.T,f.bUd(d,t,D.ew,w)],g),B.af,e,B.e,B.j,0,B.p),B.q,e,B.z,e,B.VG,e,e,B.aj),D.aa2,!0)},
atK(d,e,f,g,h){var w=null,v=A.m(h),u=A.H(B.c.j(0.09),B.r,1),t=A.a([new A.aa(0,B.G,B.x.j(0.4),B.dm,18)],x.V)
return A.p(w,A.bu(A.m(h-1),new A.am(B.W,w,B.a9,B.q,A.a([A.bZ(0,A.bT(w,new A.o(w,w,w,w,w,new A.bR(f,1.15,B.w,w,0,A.a([e.j(0.22),e.j(0)],x.O),w,w),B.n),B.ba),0,0,0),new A.C(g,d,w)],x.p),w),B.ap),B.h,w,w,new A.o(w,w,u,v,t,D.bFN,B.n),w,w,w,w,w,w,w,w)},
aUE(d,e,f,g){return this.atK(d,e,f,B.ah,g)},
b2A(d,e,f,g,h,i,j){var w=null,v=A.an(-14,A.V(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=A.m(30),s=A.H(f.j(0.4),B.r,1),r=x.p,q=this.aUE(new A.a3(w,80,new A.am(B.W,w,B.a9,B.q,A.a([v,new A.C(D.bg6,A.u(A.a([A.p(w,A.B(A.a([A.V(e,f,w,w,w,15),B.eA,A.d(h.toUpperCase(),w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),B.m,w,B.e,B.R,0,w,w),B.h,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.adU,w,w,w),B.b7,A.eX(B.a3,A.d(i,w,1,w,w,w,w,A.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,B.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),B.h,B.e8)],r),B.F,w,B.e,B.j,0,B.p),w)],r),w),w),f,B.kO,22)
if(g==null)return q
return A.aI(!1,A.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
bXf(d,e){var w,v,u,t,s=null,r=A.H(e.j(0.55),B.r,2),q=e.j(0.12),p=x.p,o=A.a([],p)
for(w=0;w<3;++w){v=new A.b3(3,3)
o.push(A.p(s,s,B.h,s,s,new A.o(e,s,s,new A.bv(v,v,v,v),s,s,B.n),s,D.ctQ[w],s,D.bjz,s,s,s,5))}r=A.p(s,A.B(o,B.dF,s,B.b6,B.j,0,s,s),B.h,s,s,new A.o(q,s,r,s,s,s,B.a5),s,42,s,s,s,s,s,42)
q=A.D(A.u(A.a([D.f1e,B.bA,A.B(A.a([A.p(s,s,B.h,s,s,new A.o(e,s,s,s,A.a([new A.aa(0,B.G,e,B.J,6)],x.V),s,B.a5),s,7,s,s,s,s,s,7),B.bq,new A.dp(1,B.cj,A.d("Live \xb7 real-time statistics",s,1,B.a2,s,s,s,A.l(s,s,B.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),B.m,s,B.e,B.j,0,s,s)],p),B.F,s,B.e,B.j,0,B.p),1)
o=A.m(16)
v=A.m(16)
u=B.x.j(0.3)
t=A.H(e.j(0.45),B.r,1.2)
return this.atK(A.B(A.a([r,D.erd,q,B.aa,A.aI(!1,o,!0,A.p(s,A.u(A.a([A.V(B.oc,e.j(0.95),s,s,s,21),B.ve,A.d("PLAY",s,s,s,s,s,s,A.l(s,s,B.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,B.I,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),B.m,s,B.b6,B.j,0,B.p),B.h,s,s,new A.o(u,s,t,v,s,s,B.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),B.m,s,B.e,B.j,0,s,s),e,B.a3,B.Vb,26)},
b0K(d,e,f,g){var w,v=null,u=B.a.t(d.toLowerCase(),"profit"),t=u?B.cJ:B.b_,s=A.p(v,v,B.h,v,v,new A.o(t,v,v,D.aPk,v,v,B.n),v,v,v,B.mz,v,v,v,5),r=x.p
r=A.a([s,B.bc,A.D(A.u(A.a([A.B(A.a([A.V(u?B.rX:B.x9,t,v,v,v,14),B.eA,new A.dp(1,B.cj,A.d(d,v,1,B.a2,v,v,v,A.l(v,v,B.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),B.m,v,B.e,B.j,0,v,v),B.ar,A.eX(B.a3,A.d(e,v,1,v,v,v,v,D.eA3,v,v,v),B.h,B.e8)],r),B.F,v,B.b6,B.j,0,B.p),1)],r)
s=g==null
if(!s)r.push(new A.C(B.aca,A.V(B.ek,B.c.j(0.35),v,v,v,v),v))
w=this.aUE(new A.a3(v,66,A.B(r,B.m,v,B.e,B.j,0,v,v),v),t,B.lb,20)
if(s)return w
return A.aI(!1,A.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cmS(d,e,f){return this.b0K(d,e,f,null)},
bUd(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.p(m,m,B.h,m,m,new A.o(f,m,m,m,A.a([new A.aa(0,B.G,f,B.J,8)],x.V),m,B.a5),m,9,m,m,m,m,m,9),k=A.d("LIVE ACTIVITY",m,m,m,m,m,m,A.l(m,m,B.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,B.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=B.c.j(0.07),i=A.m(20),h=x.p
i=A.a([A.B(A.a([l,B.a3s,k,B.b7,A.p(m,A.d(""+e.length,m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.h,m,m,new A.o(j,m,m,i,m,m,B.n),m,m,m,m,B.VT,m,m,m)],h),B.m,m,B.e,B.j,0,m,m),B.P],h)
if(e.length===0)i.push(new A.C(B.V2,A.u(A.a([A.V(B.hk,g,m,m,m,30),B.ar,A.d("Nothing yet",m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.bA,A.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),B.L,m,m)],h),B.m,m,B.e,B.j,0,B.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=A.a([],h)
if(w>0)k.push(new A.lX(1,m,m,m,m,B.c.j(0.07),m))
j=e[w]
v=j.d
u=v===B.eC||v===B.js
t=u?B.kp:D.ew
g=B.c.j(0.5)
v=new A.b3(12,12)
s=A.a([t.j(0.28),t.j(0.08)],l)
r=new A.ay(t.j(0.35),1,B.r,-1)
v=A.p(B.A,A.V(u?B.rX:B.uI,t,m,m,m,18),B.h,m,m,new A.o(m,m,new A.c2(r,r,r,r),new A.bv(v,v,v,v),m,new A.a7(B.ax,B.aC,B.w,s,m,m),B.n),m,38,m,m,m,m,m,38)
s=C.hHp(j)
q=C.fVU(j.y)
s=A.u(A.a([new A.x(s,m,B.mW,m,m,m,m,B.a2,m,1,m,m),B.bA,new A.x(q,m,new A.F(!0,g,m,m,m,m,11,B.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.F,m,B.e,B.j,0,B.p)
q=t.j(0.14)
p=new A.b3(20,20)
o=u?"-":"+"
n=A.dw(j.c)
q=A.p(m,new A.x(o+"$"+n,m,new A.F(!0,t,m,m,m,m,13,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),B.h,m,m,new A.o(q,m,m,new A.bv(p,p,p,p),m,m,B.n),m,m,m,m,B.nq,m,m,m)
j=C.h1Q(j)
k.push(new A.C(F.V7,new A.cC(B.aZ,B.e,B.j,B.m,m,B.p,m,0,A.a([v,B.bc,new A.bF(1,B.bp,s,m),A.u(A.a([q,B.d5,new A.x(j,m,new A.F(!0,g,m,m,m,m,10,B.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.dF,m,B.e,B.j,0,B.p)],h),m),m))
B.d.v(i,k)}return this.atK(A.u(i,B.m,m,B.e,B.j,0,B.p),f,B.b1,D.bge,26)}}
C.ayp.prototype={
S(){return new C.bdS(null,null)},
cG5(d){return this.z.$1(d)},
cHg(){return this.Q.$0()}}
C.bdS.prototype={
Z(){var w,v=this,u=null
v.a0()
w=A.bi(u,B.oX,u,1,u,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w
w=A.bi(u,D.bdU,u,1,u,v)
w.cF(0)
v.e!==$&&A.aO()
v.e=w
w=A.bi(u,B.ud,u,1,u,v)
v.f!==$&&A.aO()
v.f=w
v.b1F()},
gb4i(){var w=new A.Q(Date.now(),0,!1)
if(A.mx(w)===6||A.mx(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
b1F(){var w=this,v=w.a,u=v.e||v.f||w.gb4i()
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
v.bU(0)}}},
bp(d){this.bA(d)
this.b1F()},
p(){var w=this,v=w.d
v===$&&A.c()
v.p()
v=w.e
v===$&&A.c()
v.p()
v=w.f
v===$&&A.c()
v.p()
w.boM()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gb4i()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=B.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?B.au:g.x
g=g.r?new C.daw(i):h
v=A.m(32)
s=A.m(32)
r=f?D.cWN:D.cWL
q=A.H((f?D.nT:B.bd).j(0.28),B.r,1.4)
p=x.V
o=A.a([new A.aa(0,B.G,(f?B.au:B.b9).j(0.16),B.fE,28)],p)
n=x.p
m=A.a([],n)
if(f)B.d.v(m,A.a([A.an(h,i.a8D(D.nT,130),h,h,h,-24,-30,h),A.an(-36,i.a8D(B.au,140),h,h,-28,h,h,h)],n))
else B.d.v(m,A.a([A.an(h,i.a8D(B.b9,120),h,h,h,-30,-36,h),A.an(-40,i.a8D(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bZ(0,A.e1(A.bu(l,new A.en(A.c4(k,new C.dax(i),h),h),B.ap),!0,h),0,0,0))}if(f){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bZ(0,A.e1(A.bu(l,new A.en(A.c4(k,new C.day(i),h),h),B.ap),!0,h),0,0,0))}l=A.m(999)
k=B.c.j(0.06)
j=A.H(B.c.j(0.16),B.r,1)
m.push(A.an(h,new A.d1(D.aR9,A.p(h,A.B(A.a([A.p(h,h,B.h,h,h,new A.o(t,h,h,h,A.a([new A.aa(0,B.G,t.j(0.5),B.J,8)],p),h,B.a5),h,8,h,h,h,h,h,8),B.aa,new A.dp(1,B.cj,A.d(u,h,1,B.a2,h,h,h,D.eFc,h,h,h),h)],n),B.m,h,B.e,B.R,0,h,h),B.h,h,h,new A.o(k,h,j,l,h,h,B.n),h,h,h,h,B.h4,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.fUe(B.h3,new C.daz(),l)
m.push(C.fUd(new C.daA(i,f,t,e,w),new A.Q(Date.now(),0,!1),j,l))
return A.aI(!1,v,!0,A.di(h,new A.am(B.W,h,B.a9,B.h,m,h),h,h,B.b8,new A.o(h,h,q,s,o,new A.a7(B.ax,B.aC,B.w,r,h,h),B.n),B.zv,h,392,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
a8D(d,e){var w=null
return A.e1(A.p(w,w,B.h,w,w,new A.o(w,w,w,w,w,new A.bR(B.A,0.5,B.w,w,0,A.a([d.j(0.22),d.j(0)],x.O),w,w),B.a5),w,e,w,w,w,w,w,e),!0,w)}}
C.b7D.prototype={
aUH(d,e,f,g){var w=new A.aR($.a_().r,B.aq,null,null,A.a([],x.g)),v=e.a,u=e.b,t=u-f
w.E(new A.b7(v,t))
w.E(new A.d_(v,u,v+f,u))
w.E(new A.d_(v,u,v,u+f))
w.E(new A.d_(v,u,v-f,u))
w.E(new A.d_(v,u,v,t))
w.E(new A.bE())
d.aQ(w,g)},
a6(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=a8/2,b0=b3.b,b1=b0/2
for(w=a7.b,v=w*6.283185307179586,u=0;u<16;++u){t=B.k.H(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=B.k.H(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+B.o.H(u,3))+u)+1)/2
$.a_()
q=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.r=B.c.j(0.1+r*0.5).gq(0)
a7.aUH(b2,new A.v(t*a8,s*b0),2+r*2.2,q)}for(a8=b2.a,b0=w*2,p=a7.e,o=0;o<3;++o){n=B.k.H(b0+o/3,1)
$.a_()
m=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
m.b=B.ad
m.c=1.6
m.r=p.j((1-n)*0.38).gq(0)
l=m.L()
a8.drawCircle(a9,b1,138+n*90,l)
l.delete()}for(b0=a7.d,u=0;u<28;++u){k=B.k.H(w*(1+B.o.H(u,2))+u/28,1)
j=u*2.399963+Math.sin(u*1.7)*0.2
i=113.16+k*(70+B.o.H(u,5)*18)
h=a9+Math.cos(j)*i
g=b1+Math.sin(j)*i*0.96
f=B.k.D(Math.sin(k*3.141592653589793),0,1)
switch(B.o.H(u,4)){case 0:e=B.k.D(Math.abs(Math.cos(k*6.283185307179586*3)),0.28,1)
J.bH(a8.save())
a8.translate(h,g)
a8.scale(e,1)
$.a_()
d=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
d.r=b0.j(f).gq(0)
l=d.L()
a8.drawCircle(0,0,6.5,l)
l.delete()
h=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
h.b=B.ad
h.c=1.2
h.r=p.j(f).gq(0)
l=h.L()
a8.drawCircle(0,0,6.5,l)
l.delete()
if(e>0.6&&f>0.35){h=$.h7k()
g=h.b
a0=g.c
g=g.a.c
h.a6(b2,new A.v(-a0/2,-g.gbh(g)/2))}a8.restore()
break
case 1:$.a_()
a0=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
a0.r=p.j(f*0.95).gq(0)
a7.aUH(b2,new A.v(h,g),3+f*3,a0)
break
case 2:$.a_()
a0=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
a0.r=B.c.j(f*0.8).gq(0)
l=a0.L()
a8.drawCircle(h,g,1.6+f*1.8,l)
l.delete()
break
default:a0=Math.cos(j)
a1=Math.sin(j)
a2=7+f*7
$.a_()
a3=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
a3.c=1.8
a3.d=B.bV
a3.r=b0.j(f*0.8).gq(0)
l=a3.L()
a8.drawLine.apply(a8,[h,g,h-a0*a2,g-a1*a2,l])
l.delete()}}for(a4=0;a4<3;++a4){a5=v+a4*6.283185307179586/3
for(a6=0;a6<8;++a6){r=a5-a6*0.09
w=Math.cos(r)
h=Math.sin(r)
o=1-a6/8
$.a_()
g=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
g.r=p.j(o*0.85).gq(0)
l=g.L()
a8.drawCircle(a9+w*144,b1+h*144,1.4+o*2.6,l)
l.delete()}w=Math.cos(a5)
h=Math.sin(a5)
$.a_()
g=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
g.r=b0.j(0.28).gq(0)
g.z=N.om
l=g.L()
a8.drawCircle(a9+w*144,b1+h*144,7,l)
l.delete()}},
aq(d){return d.b!==this.b}}
C.b7C.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.a_(),a4=A.N()
a4.r=this.d.j(0.075).gq(0)
for(w=a5.a,v=this.b,u=v*6.283185307179586,t=x.g,a3=a3.r,s=0;s<14;++s){r=u+s*6.283185307179586/14
q=A.a([],t)
p=new A.aR(a3,B.aq,e,e,q)
o=r-0.14361566416410484
q.push(new A.b7(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new A.ao(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
o=r+0.14361566416410484
q.push(new A.ao(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
q.push(new A.ao(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new A.bE())
n=a4.L()
q=p.gbM().a.snapshot()
w.drawPath((p.e=new A.cG(q)).a,n)
n.delete()}a0=v*2
a2=B.k.H(a0,1)
J.bH(w.save())
w.translate(a2*(d+240)-120,0)
a5.kG(0,0.35)
a2=-a1
a3=A.N()
a3.sar(new A.a7(B.a3,B.a7,B.w,A.a([B.c.j(0),B.c.j(0.07),B.c.j(0)],x.O),e,e).az(0,D.elC))
a5.bd(new A.ac(-18,a2,18,a2+a1*3),a3)
w.restore()
for(a2=a1+40,s=0;s<34;++s){m=B.k.H(Math.abs(Math.sin(s*91.7)*43758.5453),1)
l=B.k.H(v*(1+B.o.H(s,2))+s/34,1)
a3=l*6.283185307179586
u=Math.sin(a3*2+s)
J.bH(w.save())
w.translate(m*d+u*14,l*a2-20)
w.rotate(a3*(2+B.o.H(s,3))*180/3.141592653589793,0,0)
a3=B.k.D(Math.abs(Math.cos(a3*3+s)),0.3,1)
w.scale(1,a3)
if(l<0.08)a3=l/0.08
else a3=l>0.9?(1-l)/0.1:1
k=B.k.D(a3,0,1)
a3=A.bN(D.em3,B.PX)
u=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
u.r=D.asN[B.o.H(s,6)].j(k*0.9).gq(0)
n=u.L()
w.drawRRect(A.fs(a3),n)
n.delete()
w.restore()}j=[new A.v(d*0.18,a1*0.2),new A.v(d*0.82,a1*0.26),new A.v(d*0.5,a1*0.07)]
for(i=0;i<3;++i){l=B.k.H(a0+i/3,1)
if(l>0.5)continue
h=l/0.5
g=6+h*44
d=1-h
k=B.k.D(d,0,1)
for(a1=g*0.62,a2=g+5,s=0;s<14;++s){r=s*6.283185307179586/14
a3=Math.cos(r)
v=Math.sin(r)
f=D.asN[B.o.H(s+i,6)].j(k)
u=j[i]
t=u.a
u=u.b
$.a_()
q=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.c=2
q.d=B.bV
q.r=f.gq(0)
n=q.L()
w.drawLine.apply(w,[t+a3*a1,u+v*a1,t+a3*g,u+v*g,n])
n.delete()
q=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.r=f.gq(0)
n=q.L()
w.drawCircle(t+a3*a2,u+v*a2,1.6,n)
n.delete()}a1=j[i]
$.a_()
a2=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
a2.r=B.c.j(k).gq(0)
n=a2.L()
w.drawCircle(a1.a,a1.b,5*d,n)
n.delete()}},
aq(d){return d.b!==this.b}}
C.b7B.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a6.a/2,a1=a6.b/2,a2=new A.v(a0,a1),a3=a0-4,a4=a3-22
$.a_()
w=A.N()
w.b=B.ad
w.c=14
v=e.d
w.r=(v?e.r:B.bd).j(0.22).gq(0)
a5.ak(a2,a3-7,w)
w=A.N()
w.b=B.ad
w.c=1.7
w.r=(v?e.f:B.c).j(0.28).gq(0)
a5.ak(a2,a3-1,w)
w=A.N()
w.b=B.ad
w.c=1.6
w.r=B.c.j(0.16).gq(0)
a5.ak(a2,a4+8,w)
u=A.N()
u.c=1.5
u.d=B.bV
u.r=(v?e.f:B.c).j(0.22).gq(0)
for(w=a3-3,t=a3+2,s=a5.a,r=0;r<12;++r){q=r/12*3.141592653589793*2-1.5707963267948966
p=Math.cos(q)
o=Math.sin(q)
n=Math.cos(q)
m=Math.sin(q)
l=u.L()
s.drawLine.apply(s,[a0+p*w,a1+o*w,a0+n*t,a1+m*t,l])
l.delete()}J.bH(s.save())
w=$.a_().r
t=x.g
p=new A.aR(w,B.aq,d,d,A.a([],t))
p.E(new A.ky(A.bV(a2,a4)))
a5.tj(0,p)
p=A.bV(a2,a4)
o=A.N()
o.sar(D.dUh.az(0,A.bV(a2,a4)))
a5.bd(p,o)
k=B.k.D(e.b,0,1)
if(k>0.004){a1+=a4
j=a1-a4*2*k
i=v?5.2:1.8
t=A.a([],t)
h=new A.aR(w,B.aq,d,d,t)
g=a0-a4
a1+=4
h.E(new A.b7(g,a1))
for(w=a0+a4,p=e.c*3.141592653589793,o=p*2,p*=2.2,n=i*0.42;g<=w;g+=3){m=(g-a0)/a4*3.141592653589793
m=new A.ao(g,j+Math.sin(m*2+o)*i+Math.sin(m*3.1-p)*n)
t.push(m)
f=h.f
if(f!=null)m.bC(f)
m=h.e
if(m!=null)m.a.delete()
h.e=null}h.E(new A.ao(w,a1))
h.E(new A.bE())
$.a_()
a0=A.N()
a1=x.O
w=e.e
a1=v?A.a([e.f.j(0.55),w.j(0.78),e.r.j(0.92)],a1):A.a([w.j(0.22),D.ew.j(0.34),B.cY.j(0.62)],a1)
a0.sar(new A.a7(B.b1,B.b5,B.w,a1,d,d).az(0,A.bV(a2,a4)))
a5.aQ(h,a0)
a0=A.N()
a0.b=B.ad
a0.c=2
a0.r=B.c.j(v?0.28:0.14).gq(0)
a5.aQ(h,a0)}s.restore()},
aq(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.ayr.prototype={
S(){var w=$.au()
return new C.ays(new A.ap(B.as,w),new A.ap(B.as,w))},
bba(d,e){return this.w.$2$cloudRequest(d,e)}}
C.ays.prototype={
p(){var w=this.d,v=$.au()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
lA(d){var w=null,v=this.c
if(v==null)return
v.G(x.q).f.P(A.b0(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
coA(d){this.a.bba(d,!0)
this.lA("Deposit submitted. Admin will review your payment proof.")
this.n(new C.daX())},
cnm(){var w,v,u=this,t=A.d8(u.d.a.a)
if(t==null||t<=0){u.lA("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
A.hm(w,new C.an4(v.d,t,u.gcoz(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cuL(){var w,v,u,t,s=this,r=s.d,q=A.d8(r.a.a)
if(q==null||q<=0){s.lA("Enter an amount to withdraw.")
return}if(q<10){s.lA("Minimum withdrawal is $"+A.dw(10)+".")
return}w=s.a.d.d
if(q>w){s.lA("Insufficient balance. You have $"+A.dw(w)+".")
return}w=s.e
v=C.h3d(w.a.a)
if(v.length===0){s.lA("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.bba(new A.cX("wd_"+1000*Date.now(),s.a.d.a,q,B.eC,B.ka,"Withdrawal to $"+v+" \u2014 Fee: $"+A.dw(u)+" \u2014 You receive: $"+A.dw(q-u),null,null,B.dn,new A.Q(Date.now(),0,!1)),!0)
s.lA("Withdrawal submitted \u2014 waiting for admin approval.")
r.bI(0,B.c_)
w.bI(0,B.c_)
s.n(new C.daY())},
crM(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,A.K)(w),++s){r=w[s]
if(r.x!==B.cf||!this.aRy(r)||A.fIY(r))continue
q=r.d
p=q===B.eC||q===B.js||q===B.eg
q=r.c
if(p)t+=q
else u+=q}return new A.bkI(u,t)},
B(d){var w,v,u,t=this,s=null,r=t.crM(),q=t.a.r,p=new A.a4(q,new C.daZ(),A.U(q).k("a4<1>")).gI(0)
q=t.a
w=q.c
q=q.x
v=A.a([D.ew.j(0.24),B.M.j(0.72)],x.O)
u=A.H(D.ew.j(0.38),B.r,1)
q=A.bJD(!1,w,"WALLET",A.hA(A.aI(!1,s,!0,A.p(B.A,A.V(U.agT,D.ew,s,s,s,18),B.h,s,s,new A.o(s,s,u,s,s,new A.a7(B.ax,B.aC,B.w,v,s,s),B.a5),s,40,s,s,s,s,s,40),B.cE,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),s,"Back up wallet",s,s))
v=t.bw6(r.a,r.b,p)
u=x.p
w=A.B(A.a([t.amY(B.uI,"Deposit",0),t.amY(B.rX,"Withdraw",1),t.amY(B.fW,"History",2)],u),B.m,s,B.qy,B.j,0,s,s)
return A.ec(A.bq(!1,A.ch(A.u(A.a([q,B.bt,v,B.d3,w,B.d3,A.ql(t.f===2?t.bRq():t.bWK(),B.i1,A.th(),B.b8,B.b8,A.a_C())],u),B.af,s,B.e,B.j,0,B.p),B.q,s,B.z,s,D.bi6,s,s,B.aj),!0,!1,B.ah,!0,!0),B.z5,!0)},
bw6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.a.i(i.a.e)
if(B.a.t(g,"@")){w=B.a.cP(g,"@")
v=B.a.an(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+B.a.aW(g,w)}else v=g
w=A.m(26)
u=A.an(h,i.avP(220,0.1),h,h,h,-60,-70,h)
t=A.an(-90,i.avP(200,0.07),h,h,h,30,h,h)
s=A.an(-60,i.avP(150,0.05),h,h,-40,h,h,h)
r=A.m(26)
r=A.bZ(0,A.bT(h,new A.o(h,h,A.H(B.c.j(0.18),B.r,1),r,h,h,B.n),B.ba),0,0,0)
q=A.m(6)
p=x.p
q=A.B(A.a([A.p(h,A.b1(h,h,h,new C.b73(h),B.at),B.h,h,h,new A.o(h,h,h,q,h,D.bHS,B.n),h,28,h,h,h,h,h,38),B.b7,D.f8W],p),B.m,h,B.e,B.j,0,h,h)
o=A.d("Available balance",h,h,h,h,h,h,A.l(h,h,B.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,B.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=A.eX(B.a3,C.anO(new C.daJ(i),D.eKg,i.a.d.a),B.h,B.e8)
m=A.a([A.D(i.aKw(B.uw,"In",d),1),A.D(i.aKw(B.wT,"Out",e),1)],p)
if(f>0){l=B.cN.j(0.22)
k=A.m(99)
j=A.H(B.it.j(0.6),B.r,1)
m.push(A.p(h,A.d(""+f+" pending",h,h,h,h,h,h,D.eG6,h,h,h),B.h,h,h,new A.o(l,h,j,k,h,h,B.n),h,h,h,h,B.nq,h,h,h))}return new A.fJ(1.62,A.bu(w,new A.am(B.W,h,B.a9,B.q,A.a([D.dTx,u,t,s,r,new A.C(A5.qf,A.u(A.a([q,B.b7,o,B.bA,n,B.b7,A.B(m,B.m,h,B.e,B.j,0,h,h),B.ar,A.d(v,h,1,B.a2,h,h,h,A.l(h,h,B.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,B.a4,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),B.F,h,B.e,B.j,0,B.p),h)],p),h),B.ap),h)},
avP(d,e){var w=null
return A.p(w,w,B.h,w,w,new A.o(w,w,A.H(B.c.j(e),B.r,22),w,w,w,B.a5),w,d,w,w,w,w,w,d)},
aKw(d,e,f){var w=null,v=B.c.j(0.16)
return A.B(A.a([A.p(w,A.V(d,B.c,w,w,w,13),B.h,w,w,new A.o(v,w,w,w,w,w,B.a5),w,22,w,w,w,w,w,22),B.bq,new A.dp(1,B.cj,A.eX(B.a3,A.d(e+"  $"+A.dw(f),w,w,w,w,w,w,B.qS,w,w,w),B.h,B.e8),w)],x.p),B.m,w,B.e,B.j,0,w,w)},
amY(d,e,f){var w=null,v=this.f===f,u=v?D.bJ8:new A.a7(B.a3,B.a7,B.w,A.a([B.c.j(0.08),B.c.j(0.03)],x.O),w,w),t=A.H(v?B.c.j(0.6):D.ew.j(0.25),B.r,1),s=v?A.a([new A.aa(0,B.G,B.au.j(0.45),B.J,18)],x.V):w
u=A.di(w,A.V(d,v?D.a85:D.ew,w,w,w,26),w,w,B.co,new A.o(w,w,t,w,s,u,B.a5),B.Dy,w,62,w,w,w,w,62)
return A.aH(B.c5,new A.a3(92,w,A.u(A.a([u,D.es7,A.d(e,w,w,w,w,w,w,A.l(w,w,v?B.c:B.aQ,w,w,w,w,w,w,w,w,12.5,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.daI(this,f),w,w,w,w,w,w,!1,B.ae)},
bWK(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=A.d8(a1.a.a)
if(a2==null)a2=0
w=a0?D.ew:B.cF
v=a2>0
u=new C.daU(e,w)
t=new C.daT()
s=e.f
r=A.m(26)
q=x.O
p=A.a([w.j(0.1),B.rq,B.rq],q)
o=A.H(w.j(0.22),B.r,1)
n=x.V
m=A.a([new A.aa(0,B.G,B.x.j(0.35),B.eK,22)],n)
l=w.j(0.15)
l=A.p(d,A.V(a0?B.uI:B.rX,w,d,d,d,18),B.h,d,d,new A.o(l,d,d,d,d,d,B.a5),d,34,d,d,d,d,d,34)
k=A.D(A.d(a0?"Add money":"Take money out",d,d,d,d,d,d,B.fQ,d,d,d),1)
j=B.c.j(0.06)
i=A.m(99)
h=x.p
i=A.B(A.a([l,B.aw,k,A.p(d,A.B(A.a([A.V(B.hR,w,d,d,d,14),A.d("Cash App",d,d,d,d,d,d,A.l(d,d,B.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,B.I,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),B.m,d,B.e,B.R,0,d,d),B.h,d,d,new A.o(j,d,d,i,d,d,B.n),d,d,d,d,B.kx,d,d,d)],h),B.m,d,B.e,B.j,0,d,d)
l=A.d("$",d,d,d,d,d,d,A.l(d,d,v?w:B.c1,d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=A.a([new A.tE(A.ae("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=A.B(A.a([new A.C(B.im,l,d),B.d6,A.aST(new A.d1(D.aRr,A.aK(d,B.U,!1,d,!0,B.q,d,A.aL(),a1,w,d,d,d,d,2,A.bm(d,B.er,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,A.l(d,d,B.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),B.z,!0,d,!0,d,!1,d,B.ag,d,d,k,d,d,B.dX,d,d,d,1,d,d,!1,"\u2022",d,new C.daS(e),d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,D.eMT,!0,B.L,d,B.am,d,d,d,d),d),d)],h),B.F,d,B.b6,B.j,0,d,d)
a1=v?120:60
a1=A.at(A.di(d,d,d,d,B.b8,new A.o(d,d,d,A.m(99),d,new A.a7(B.a3,B.a7,B.w,A.a([w.j(0),w,w.j(0)],q),d,d),B.n),B.Y,d,3,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+A.dw(10)+" \xb7 admin sends it to your Cash App."
q=A.d(q,d,d,d,d,d,d,A.l(d,d,B.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,B.a4,d,1.35,!0,d,d,d,d,d,d,d,d),B.L,d,d)
l=A.a([],h)
j=a0?D.bMQ:D.c0s
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=A.a([i,B.bt,k,B.ar,a1,B.P,q,B.ay,A.B(l,B.m,d,B.e,B.j,0,d,d)],h)
if(!a0){q=B.c.j(0.04)
l=A.V(B.hR,w,d,d,d,d)
k=A.l(d,d,B.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,B.O,d,d,!0,d,d,d,d,d,d,d,d)
l=A.a([B.ay,A.aK(d,B.U,!1,d,!0,B.q,d,A.aL(),e.e,d,d,d,d,d,2,A.bm(d,d,d,d,d,d,d,d,!0,new A.b2(4,A.m(16),new A.ay(B.c.j(0.08),1,B.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new A.b2(4,A.m(16),new A.ay(w,1,B.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),B.z,!0,d,!0,d,!1,d,B.ag,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,B.mV,!0,B.a6,d,B.am,d,d,d,d)],h)
if(v){q=B.c.j(0.04)
k=A.m(16)
B.d.v(l,A.a([B.ab,A.p(d,A.u(A.a([t.$2("Amount","$"+A.dw(a2)),t.$3$color("Fee (15%)","\u2212 $"+A.dw(a2*0.15),B.fg),A.jm(B.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+A.dw(a2*0.85),!0,D.ew)],h),B.m,d,B.e,B.j,0,B.p),B.h,d,d,new A.o(q,d,d,k,d,d,B.n),d,d,d,d,B.iI,d,d,d)],h))}B.d.v(a1,l)}a1.push(B.aO)
q=A.m(18)
l=a0?B.Of:P.anI
n=A.a([new A.aa(0,B.G,(a0?B.aW:B.e9).j(0.45),B.dm,18)],n)
k=a0?e.gcnl():e.gcuK()
j=A.V(a0?B.Xe:B.kZ,d,d,d,d,20)
if(a0)i=v?"Deposit $"+A.dw(a2):"Deposit funds"
else i=v?"Withdraw $"+A.dw(a2):"Request withdrawal"
a1.push(new A.a3(d,54,A.bT(A.lf(j,A.d(i,d,d,d,d,d,d,B.ov,d,d,d),k,A.ff(d,d,B.K,d,d,d,d,d,d,B.c,d,d,d,B.K,new A.b5(A.m(18),B.V),d,d,d,d,d)),new A.o(d,d,d,q,n,new A.a7(B.a3,B.a7,B.w,l,d,d),B.n),B.ba),d))
return A.p(d,A.u(a1,B.af,d,B.e,B.j,0,B.p),B.h,d,d,new A.o(d,d,o,r,m,new A.a7(B.b1,B.b5,B.w,p,B.NO,d),B.n),d,d,new A.cx("form"+s,x.W),d,B.zL,d,d,d)},
bRq(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=A.U(a2).k("a4<1>"),a4=A.z(new A.a4(a2,new C.daM(a0),a3),a3.k("G.E"))
B.d.aY(a4,new C.daN())
w=B.a.i(a0.a.e.toLowerCase())
a2=A.S(x.N,x.o)
a3=$.feK
a3=a3==null?a1:a3.$0()
a3=J.aV(a3==null?B.hW:a3)
while(a3.C()){v=a3.gT(a3)
u=v.a
if(u.length!==0&&B.a.i(v.b.toLowerCase())===w)a2.m(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,A.K)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.m(0,u,s)}a3=a2.$ti.k("bg<2>")
a2=A.z(new A.bg(a2,a3),a3.k("G.E"))
r=C.hHY(a2,A.Jt(a0.a.e,new C.daO(a0)))
a2=A.m(24)
a3=A.H(B.c.j(0.07),B.r,1)
v=A.m(99)
u=A.m(99)
q=x.p
u=A.a([A.B(A.a([D.bmy,A.aI(!1,v,!0,A.p(a1,D.emO,B.h,a1,a1,new A.o(a1,a1,A.H(D.ew.j(0.4),B.r,1),u,a1,a1,B.n),a1,a1,a1,a1,B.lX,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.daP(a0),a1,a1,a1,a1,a1,a1,a1)],q),B.m,a1,B.e,B.j,0,a1,a1),B.T],q)
if(a4.length===0)u.push(new A.C(D.beR,A.u(A.a([A.V(B.E8,B.c.j(0.25),a1,a1,a1,40),B.T,D.f5P],q),B.m,a1,B.e,B.j,0,B.p),a1))
else{v=A.a([],q)
for(p=A.de(a4,0,A.dJ(a0.r,"count",x.S),A.U(a4).c),o=p.$ti,p=new A.bU(p,p.gI(0),o.k("bU<ai.E>")),o=o.k("ai.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===B.eC||k===B.js||k===B.eg
if(l===B.cf)i=j?B.cH:D.ew
else i=l===B.dn?B.it:B.fO
h=j?"-":"+"
l=B.c.j(0.06)
k=i.j(0.14)
g=new A.ay(i.j(0.4),1,B.r,-1)
k=A.p(a1,A.V(j?B.rX:B.uI,i,a1,a1,a1,19),B.h,a1,a1,new A.o(k,a1,new A.c2(g,g,g,g),a1,a1,a1,B.a5),a1,42,a1,a1,a1,a1,a1,42)
f=a0.bLl(n)
e=C.fVU(n.y)
d=B.c.j(0.5)
f=A.a([new A.x(f,a1,B.jR,a1,a1,a1,a1,a1,a1,a1,a1,a1),B.bA,new A.x(e,a1,new A.F(!0,d,a1,a1,a1,a1,11,B.a4,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1)],q)
e=n.f
if(B.a.i(e==null?"":e).length!==0){e.toString
d=B.c.j(0.4)
f.push(new A.x(e,a1,new A.F(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,B.a2,a1,1,a1,a1))}if(m!=null&&n.x!==B.jS)f.push(new A.C(E.ack,new A.Eb(B.bH,5,4,B.bx,A.a([a0.aJs("Before",m.b),a0.aJs("After",m.a)],q),a1),a1))
m=A.u(f,B.F,a1,B.e,B.j,0,B.p)
f=n.c
f=f===0?"\u2014":h+"$"+A.dw(f)
e=i.j(0.14)
d=new A.b3(99,99)
n=C.h1Q(n)
v.push(A.p(a1,new A.cC(B.aZ,B.e,B.j,B.m,a1,B.p,a1,0,A.a([k,B.bc,new A.bF(1,B.bp,m,a1),B.aa,A.u(A.a([new A.x(f,a1,new A.F(!0,i,a1,a1,a1,a1,15,B.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.av,A.p(a1,new A.x(n,a1,new A.F(!0,i,a1,a1,a1,a1,9.5,B.I,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.h,a1,a1,new A.o(e,a1,a1,new A.bv(d,d,d,d),a1,a1,B.n),a1,a1,a1,a1,B.zR,a1,a1,a1)],q),B.dF,a1,B.e,B.j,0,B.p)],q),a1),B.h,a1,a1,new A.o(a1,a1,new A.c2(B.V,B.V,new A.ay(l,1,B.r,-1),B.V),a1,a1,a1,B.n),a1,a1,a1,a1,B.wq,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(A.hh(D.bzY,A.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,B.ce,a1,a1,a1),new C.daQ(a0),A.fm(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.ew,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
B.d.v(u,v)}return A.p(a1,A.u(u,B.af,a1,B.e,B.j,0,B.p),B.h,a1,a1,new A.o(B.rq,a1,a3,a2,a1,a1,B.n),a1,a1,D.fcc,a1,D.bh_,a1,a1,a1)},
aJs(d,e){var w=null,v=B.c.j(0.05),u=A.m(7),t=A.H(B.c.j(0.1),B.r,1),s=A.dq(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=A.dw(e)
return A.p(w,A.VQ(A.dq(A.a([s,A.dq(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.eKq,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.np,w,w,w)},
aRy(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(B.a.t(w,"clock-in session started"))return!1
v=d.d
if(v===B.eg)return d.c>0
if(A.re(d))return!1
if(v===B.fj||v===B.eC)return!0
if(v===B.nL||v===B.js)return!0
if(v===B.jT)return!0
if(v===B.fs)return B.a.t(w,"clock-in")||d.c>0
return!1},
bLl(d){var w,v=d.f
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
C.b73.prototype={
a6(d,e){var w,v,u,t
$.a_()
w=A.N()
w.r=D.b0i.j(0.55).gq(0)
w.c=1
v=e.a
u=v*0.35
t=e.b
d.bK(new A.v(u,0),new A.v(u,t),w)
u=v*0.65
d.bK(new A.v(u,0),new A.v(u,t),w)
t*=0.5
d.bK(new A.v(0,t),new A.v(v,t),w)},
aq(d){return!1}}
C.brj.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null
for(w=a4.b,v=this.b,u=v*6.283185307179586,t=a4.a,s=0+t,r=x.O,q=a3.a,p=0;p<3;++p){o=w*(0.2+0.25*p)+Math.sin(u+p*2)*14-40
n=new A.ac(0,o,s,o+80)
m=[B.b9,B.h2,B.bs][p]
$.a_()
o=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
o.sar(new A.a7(B.b1,B.b5,B.w,A.a([m.j(0),m.j(0.1),m.j(0)],r),a2,a2).az(0,n))
l=o.L()
q.drawRect(A.cp(n),l)
l.delete()}for(k=0;k<46;++k){s=k*12.9898
j=Math.sin(s+78.233)*43758.5453
j=(j-Math.floor(j))*t
i=Math.sin(s+156.466)*43758.5453
h=(i-Math.floor(i))*w
g=0.25+0.75*(0.5+0.5*Math.sin(u*(1+B.o.H(k,3))+k))
i=Math.sin(s+234.699)*43758.5453
s=Math.floor(i)
$.a_()
r=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
r.r=B.c.j(0.55*g).gq(0)
l=r.L()
q.drawCircle(j,h,0.7+(i-s)*1.5,l)
l.delete()
if(B.o.H(k,9)===0){f=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
f.r=B.nY.j(0.35*g).gq(0)
f.c=1
l=f.L()
q.drawLine.apply(q,[j-4,h,j+4,h,l])
l.delete()
l=f.L()
q.drawLine.apply(q,[j,h-4,j,h+4,l])
l.delete()}}for(u=-t*0.35,s=w*0.2,r=t*0.08,o=-w*0.02,v*=2,k=0;k<2;++k){f=B.k.H(v+k*0.5,1)
if(f>0.35)continue
p=f/0.35
e=t*(0.75-k*0.4)+u*p
d=w*(0.1+k*0.12)+s*p
$.a_()
a0=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
a0.r=B.c.j(0.7*(1-p)).gq(0)
a0.c=1.6
a0.d=B.bV
l=a0.L()
q.drawLine.apply(q,[e+r,d+o,e,d,l])
l.delete()}for(u=t*0.62,w*=0.36,k=0;k<4;++k){f=B.k.H(v+k*0.25,1)
t=B.nY.j(0.5*Math.sin(f*3.141592653589793))
a1=new A.lP(new A.es("z",a2,a2,B.cU,a2,a2,a2,a2,a2,a2,new A.F(!0,t,a2,a2,a2,a2,12+f*14,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),B.a6,B.cn,new A.k4(1),a2,a2,a2,a2,B.cm,a2)
a1.fq()
a1.a6(a3,new A.v(u+Math.sin(f*6.283185307179586+k)*12+k*8,w-f*90))}},
aq(d){return d.b!==this.b}}
C.aHO.prototype={
aN(){this.aV()
this.aU()
this.dD()},
p(){var w=this,v=w.aZ$
if(v!=null)v.a1(0,w.gdB())
w.aZ$=null
w.a2()}}
C.bte.prototype={}
C.aWL.prototype={}
C.Yn.prototype={
S(){return new C.aAQ(new A.ap(B.as,$.au()))},
cIr(d,e){return this.d.$2(d,e)}}
C.aAQ.prototype={
p(){var w=this.d
w.R$=$.au()
w.O$=0
this.a2()},
aUL(){var w=this,v=B.a.i(w.d.a.a),u=A.ae("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.n(new C.dVZ(w))
return}u=w.c
u.toString
A.a8(u,!1).M(null)
w.a.cIr(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=A.aG(a0,B.eq,e).w
e=A.aG(a0,B.e2,e).w
w=A.at(A.p(f,f,B.h,f,f,new A.o(B.bf,f,f,A.m(2),f,f,B.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=A.B(A.a([A.p(f,D.bzm,B.h,f,f,new A.o(f,f,f,f,A.a([new A.aa(0,B.G,B.f9.j(0.5),B.J,18)],v),D.ajt,B.a5),f,52,f,f,f,f,f,52),B.ep,A.D(A.u(A.a([D.eVv,B.bA,A.d(g.a.c,f,1,B.a2,f,f,f,B.ou,f,f,f)],u),B.F,f,B.e,B.j,0,B.p),1),A.aF(f,f,f,f,D.bAb,f,f,f,new C.dW1(a0),f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,f,f)
s=g.b0t(B.eI,"You",B.cF)
r=B.aL.j(0.15)
q=A.m(99)
q=A.B(A.a([s,new A.C(B.lo,A.p(f,D.eZ8,B.h,f,f,new A.o(r,f,A.H(B.aL.j(0.6),B.r,1),q,f,f,B.n),f,f,f,f,B.fJ,f,f,f),f),g.b0t(B.uE,"Your friend",B.c3)],u),B.m,f,B.e,B.j,0,f,f)
r=B.c.j(0.06)
s=A.m(16)
p=B.c.j(0.12)
o=A.m(16)
n=g.f
if(n.length===0)n=f
o=A.aK(f,B.U,!0,f,!0,B.q,f,A.aL(),g.d,f,f,f,f,f,2,A.bm(f,f,f,f,f,f,f,f,!0,new A.b2(4,s,new A.ay(p,1,B.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new A.b2(4,o,D.aQg),f,f,f,f,f,f,f,f,N.BU,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.bCw,f,f,f,f,f,f,f,f,f,f,f,f),B.z,!0,f,!0,f,!1,f,B.ag,f,f,f,f,f,B.lG,f,f,f,1,f,f,!1,"\u2022",f,new C.dW2(g),f,new C.dW3(g),f,!1,f,f,!1,f,!0,f,B.a8,f,f,f,f,f,f,f,f,f,f,f,B.ix,!0,B.a6,f,B.am,f,f,f,f)
r=A.a([],u)
for(m=0;m<4;++m){l=D.bWv[m]
s=new A.b3(14,14)
p=g.e===l
n=p?D.ajs:f
p=p?f:B.c.j(0.06)
k=new A.ay(g.e===l?B.aA:B.bG,1,B.r,-1)
j=""+l
i=l===1?"game":"best of "+j
h=B.c.j(0.7)
s=A.a([new A.bF(1,B.bp,A.aH(f,A.di(f,A.u(A.a([new A.x(j,f,B.dQ,f,f,f,f,f,f,f,f,f),new A.x(i,f,new A.F(!0,h,f,f,f,f,10,B.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,B.p),f,f,B.b8,new A.o(p,f,new A.c2(k,k,k,k),new A.bv(s,s,s,s),f,n,B.n),B.eG,f,f,f,B.eW,f,f,f),B.z,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.dW4(g,l),f,f,f,f,f,f,!1,B.ae),f)],u)
if(l!==7)s.push(B.aa)
B.d.v(r,s)}s=A.B(r,B.m,f,B.e,B.j,0,f,f)
r=A.B(A.a([A.V(B.kY,B.c.j(0.5),f,f,f,15),B.bq,A.D(A.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,A.l(f,f,B.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),B.m,f,B.e,B.j,0,f,f)
p=A.m(18)
v=A.a([new A.aa(0,B.G,B.bz.j(0.4),B.cs,18)],v)
n=g.e
j=n===1?"":"s"
return new A.C(new A.M(0,0,0,d.f.d+e.r.d),A.p(f,A.u(A.a([w,B.aO,t,B.bt,q,B.bt,D.f1K,B.ar,o,B.aO,D.f5D,B.P,s,B.ay,r,B.aO,new A.a3(f,54,A.bT(A.hh(D.ahL,A.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,B.fQ,f,f,f),g.gc08(),f),new A.o(f,f,f,p,v,D.bI2,B.n),B.ba),f)],u),B.af,f,B.e,B.R,0,B.p),B.h,f,f,D.aSe,f,f,f,f,D.bij,f,f,f),f)},
b0t(d,e,f){var w=null,v=f.j(0.1),u=A.m(16),t=A.H(f.j(0.45),B.r,1)
return A.D(A.p(w,A.u(A.a([A.V(d,f,w,w,w,24),B.av,A.d(e,w,w,w,w,w,w,B.a4x,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eW,w,w,w),1)}}
C.oA.prototype={}
C.bmn.prototype={
a6(d,e){var w,v,u,t,s,r=null,q=e.a/2,p=new A.v(q,e.b/2),o=q-4
for(q=d.a,w=0;w<37;++w){$.a_()
v=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
if(w===0)u=B.bn
else u=(w&1)===0?B.bQ:B.M
v.r=u.gq(0)
u=A.bV(p,o)
t=v.L()
q.drawArc.apply(q,[A.cp(u),(w*2*3.141592653589793/37-1.5707963267948966)*57.29577951308232,9.72972972972973,!0,t])
t.delete()}$.a_()
q=A.N()
q.r=B.hK.gq(0)
q.b=B.ad
q.c=8
d.ak(p,o,q)
q=A.N()
q.r=B.aL.gq(0)
d.ak(p,o*0.22,q)
q=this.b
if(q!=null){s=A.iS(r,r,r,r,A.dq(r,r,r,r,r,r,r,r,r,B.aKx,A.t(q)),B.a6,B.cn,r,B.eE,B.cm)
s.fq()
q=s.b
u=q.c
q=q.a.c
s.a6(d,p.aE(0,new A.v(u/2,q.gbh(q)/2)))}},
aq(d){return d.b!=this.b}}
C.Dk.prototype={
a3(){return"NgmyProMoveResult."+this.b}}
C.aoi.prototype={
gjy(){var w=this.d
w=w==null?null:w.a
return w!==!1},
bit(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.fBm("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.bSc()
w=s.gjy()
v=s.d
s.c=w?"You ("+v.b+") vs NGMY \u2014 capture all opponent discs":v.b+" vs "+v.c+" \u2014 capture all discs"
break
case"tic_tac_go":s.b=1
s.at=A.bY(9,"",!1,x.N)
s.ax=!0
if(s.gjy())w="You are X vs NGMY (O) \u2014 get 3 in a row"
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
s.dx=e.ae()*3.141592653589793*2
s.c=s.gjy()?"Aim and shoot \u2014 beat NGMY on the snooker table":"Aim and shoot \u2014 pocket balls"
break
case"connect_four_pro":s.b=1
u=J.e_(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=A.bY(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gjy())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.aTp(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aym.h(0,d)
s.c=w==null?"Play to earn":w}},
b53(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gjy()
if(o)return
o=x.N
s.x=A.Z(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b4(w,new C.c83(),o)
v=A.z(v,v.$ti.k("ai.E"))
s.at=v
if(v.length<9){v=A.z(v,o)
B.d.v(v,A.bY(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=B.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===B.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.csh(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.ant(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b4(t,new C.c84(),x.L)
o=A.z(o,o.$ti.k("ai.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)B.d.J(v,A.bY(7,0,!1,o))}if(A.ix(e.h(0,q)))o=A.e7(e.h(0,q))
else{o=A.c3(A.t(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.byf(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.ant(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b4(t,new C.c85(),x.L)
o=A.z(o,o.$ti.k("ai.E"))
s.y=o}if(A.ix(e.h(0,p)))o=A.e7(e.h(0,p))
else{o=A.c3(A.t(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bzt(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.ant(e,f)
break}},
cCk(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=A.Z(w.x,q,p)
switch(d){case"tic_tac_go":o.m(0,"ttt",A.bj(w.at,!0,q))
o.m(0,"turnEmail",w.axV())
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
q=A.z(new A.J(q,new C.c87(),p),p.k("ai.E"))
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
q=A.z(new A.J(q,new C.c88(),p),p.k("ai.E"))
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
axV(){var w,v,u,t=this
if(t.gjy()){if(t.ax){w=t.d
w=w==null?null:w.d
if(w==null)w=""}else w="ngmy@system"
return w}w=t.x.h(0,"playerXEmail")
if(w==null){w=t.d
w=w==null?null:w.d}v=B.a.i(J.k(w==null?"":w).toLowerCase())
w=t.x.h(0,"playerOEmail")
if(w==null){w=t.d
w=w==null?null:w.e}u=B.a.i(J.k(w==null?"":w).toLowerCase())
return t.ax?v:u},
ant(d,e){var w,v=this,u=B.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
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
csh(d,e){var w,v,u,t,s,r="playerXEmail"
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
byf(d,e){var w,v,u,t,s
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
bzt(d,e){var w,v,u,t,s,r,q
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
RQ(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gjy())return s
w=B.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return B.a.i(J.k(s==null?u.axV():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
bSc(){var w,v,u=this,t=J.e_(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=A.ii(8,new C.c80(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
aTp(d){var w=20+d.aB(80),v=w+10+d.aB(50),u=4+d.aB(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bI(0,B.c_)},
cLH(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gjy())w=1
else{v=r.d
v=v==null?null:v.d
w=r.RQ(q,v==null?"":v)?r.z:-1}if(!r.gjy()){v=r.d
v=v==null?null:v.d
v=!r.RQ(q,v==null?"":v)}else v=!1
if(v)return!1
u=r.gjy()?r.z:w
if(!r.gjy()&&u!==r.z)return!1
t=J.q(r.y[d],e)
v=r.Q
if(v==null){if(t===r.z)v=!r.gjy()||t===1
else v=!1
if(v){r.Q=d
r.as=e}return!1}s=r.as
s.toString
if(d===v&&e===s){r.as=r.Q=null
return!1}if(Math.abs(d-v)===1&&Math.abs(e-s)===1&&t===0&&B.o.H(d+e,2)===1){J.aE(r.y[d],e,r.z)
J.aE(r.y[v],s,0)
r.as=r.Q=null
r.z=r.z===1?2:1
if(r.a6y(2)){r.a85(1)
return!0}if(r.a6y(1)){r.a85(2)
return!0}if(r.gjy()&&r.z===2){r.buo(f)
if(r.a6y(2)){r.a85(1)
return!0}if(r.a6y(1)){r.a85(2)
return!0}}}return!1},
a85(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
t.e=!0
w=t.f=d===1
if(t.gjy()){if(w){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+s}else v="NGMY wins \u2014 your discs are gone"
v=t.w=v}else{v=t.d
if(w){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+s}t.a=w?1:0
t.c=v
return!0},
buo(d){var w,v,u,t,s,r,q,p,o,n=this,m=A.a([],x.B)
for(w=x.t,v=0;v<8;++v)for(u=0;u<8;++u){if(J.q(n.y[v],u)!==2)continue
for(t=[A.a([1,-1],w),A.a([1,1],w)],s=0;s<2;++s){r=t[s]
q=v+r[0]
p=u+r[1]
if(q>=0&&q<8&&p>=0&&p<8&&J.q(n.y[q],p)===0&&B.o.H(q+p,2)===1)m.push(A.a([v,u,q,p],w))}}w=m.length
if(w===0)return
o=m[d.aB(w)]
J.aE(n.y[o[2]],o[3],2)
J.aE(n.y[o[0]],o[1],0)
n.z=1},
a6y(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)for(t=J.aV(w[u]);t.C();)if(t.gT(t)===d)return!1
return!0},
cLI(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.pk
if(!s.gjy()){w=s.d
w=w!=null&&!s.RQ("tic_tac_go",w.d)}else w=!1
if(w)return D.pk
if(s.gjy())v="X"
else{w=B.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===B.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.ag9(v))return s.aOu(v,!0)
if(!B.d.t(s.at,""))return s.aOv()
s.ax=!s.ax
if(!s.gjy()){s.x.m(0,"turnEmail",s.axV())
s.c=s.aSY()
return D.pk}if(s.gjy()){t=s.caO(e)
if(t>=0){s.at[t]="O"
if(s.ag9("O"))return s.aOu("O",!1)
if(!B.d.t(s.at,""))return s.aOv()
s.ax=!0}}s.c=s.gjy()?"Your turn \u2014 you are X":s.aSY()
return D.pk},
aSY(){var w=this.d
if(w==null)return"Take your turn"
return this.RQ("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aOu(d,e){var w,v,u=this
u.e=!0
u.f=e
u.r=!1
if(u.gjy()){if(e){w=u.d
w=w==null?null:w.b
w=(w==null?"You":w)+" wins with "+d+"!"}else w="NGMY wins with "+d+"!"
w=u.w=w}else{w=u.d
if(e){w=w==null?null:w.b
v=w==null?"You":w}else{w=w==null?null:w.c
v=w==null?"Opponent":w}w=u.w=v+" wins with "+d+"!"}u.c=w
u.a=e?1:0
return e?D.pl:D.G9},
aOv(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.Pa},
caO(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.ag9("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.ag9("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.cI9[u]
if(v[w].length===0)return w}return-1},
ag9(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.cOZ[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a10(d){return B.d.cI(d,0,new C.c86())},
cwj(d){this.ay.push(1+d.aB(10))
if(this.a10(this.ay)>21)return!0
return!1},
cwk(d){var w,v,u,t=this
while(t.a10(t.ch)<17)t.ch.push(1+d.aB(10))
t.CW=!0
w=t.a10(t.ay)
v=t.a10(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cBN(d,e){var w,v,u,t=this
if(t.e)return D.pk
if(!t.gjy()){w=t.d
w=w!=null&&!t.RQ("connect_four_pro",w.d)}else w=!1
if(w)return D.pk
if(t.gjy())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.pk
if(!t.adi(d,w))return D.pk
if(t.a6o(t.fx))return t.aOs(t.fx,!0)
if(t.aKg())return t.aOt()
w=t.fx===1?2:1
t.fx=w
if(t.gjy()&&w===2){u=t.cac(e)
if(u>=0){t.adi(u,2)
if(t.a6o(2))return t.aOs(2,!1)
if(t.aKg())return t.aOt()
t.fx=1}}t.c=t.gjy()?"Your turn \u2014 drop a red disc":t.bye()
return D.pk},
bye(){var w=this.d
if(w==null)return"Drop a disc"
return this.RQ("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
adi(d,e){var w
for(w=5;w>=0;--w)if(J.q(this.fr[w],d)===0){J.aE(this.fr[w],d,e)
return!0}return!1},
aKg(){for(var w=0;w<7;++w)if(J.q(this.fr[0],w)===0)return!1
return!0},
aOs(d,e){var w,v,u,t=this
t.e=!0
t.f=e
t.r=!1
w=d===1?"red discs":"gold discs"
if(t.gjy()){if(e){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+" wins with "+w+"!"}else v="NGMY wins with "+w+"!"
v=t.w=v}else{v=t.d
if(e){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+" wins with "+w+"!"}t.c=v
t.a=e?1:0
return e?D.pl:D.G9},
aOt(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.Pa},
cac(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.adi(w,2)
v=r.a6o(2)
r.b2M(w)
if(v)return w}for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.adi(w,1)
u=r.a6o(1)
r.b2M(w)
if(u)return w}t=A.a([],x.t)
for(w=0;w<7;++w)if(J.q(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aB(s)]},
b2M(d){var w
for(w=0;w<6;++w)if(J.q(this.fr[w],d)!==0){J.aE(this.fr[w],d,0)
return}},
a6o(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.q(this.fr[w],v)!==d)continue
if(this.byg(w,v,d))return!0}return!1},
byg(d,e,f){var w,v,u,t=new C.c8_(this,d,e,f)
for(w=x.t,w=[A.a([0,1],w),A.a([1,0],w),A.a([1,1],w),A.a([1,-1],w)],v=0;v<4;++v){u=w[v]
if(t.$2(u[0],u[1])+t.$2(-u[0],-u[1])-1>=4)return!0}return!1},
b5X(d){var w=this
if(B.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.aTp(d)}return w.a>=w.b}}
C.apb.prototype={
S(){return new C.aBB(null,null)},
cHk(d){return this.e.$1(d)}}
C.aBB.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,D.bdX,null,1,null,v)
w.f1(0,!0)
v.d=w
v.a.d.aJ(0,v.gaV9())
v.atY()},
bp(d){var w
this.bA(d)
w=this.a
if(d.c!==w.c){w.d.bI(0,B.c_)
this.atY()}},
atY(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.af1(t,u)
C.af1(t,u)
w.a.cHk(s)
w.a.toString
w.n(new C.eqp())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
p(){var w,v=this
v.a.d.a1(0,v.gaV9())
w=v.d
w===$&&A.c()
w.p()
v.bqk()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.af1(j,i),g=C.af1(j,i),f=j.length,e=i.length,d=A.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&A.c()
u=new A.b3(1,1)
d.push(new A.vy(new A.cZ(v,!1,A.p(l,l,B.h,l,l,new A.o(B.aL,l,l,new A.bv(u,u,u,u),A.a([new A.aa(0,B.G,B.aL.j(0.6),B.J,6)],k),l,B.n),l,22,l,B.K7,l,l,l,3),l),B.PK,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new A.es(v,l,l,B.cU,l,l,l,l,l,l,D.eHE))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=B.c.j(0.4)
q=B.cq}else if(s===t){r=B.bl
q=B.O}else{r=B.aF
q=B.I}d.push(new A.es(t,l,l,B.cU,l,l,l,l,l,l,new A.F(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&A.c()
d.push(new A.vy(new A.cZ(k,!1,A.p(l,l,B.h,B.aL,l,l,l,22,l,l,l,l,l,3),l),B.PK,l,l))}p=f===0?0:B.k.U(h/f*100)
k=B.x.j(0.35)
v=A.m(12)
u=A.H(B.bf,B.r,1)
o=x.p
v=A.p(l,A.u(A.a([A.B(A.a([m.aV8("Correct",""+h,B.bn),B.aa,m.aV8("Wrong / missed",""+(f-g),B.aF),B.b7,A.d(""+p+"% accuracy",l,l,l,l,l,l,F.a3V,l,l,l)],o),B.m,l,B.e,B.j,0,l,l),B.ar,D.f_c],o),B.F,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(k,l,u,v,l,l,B.n),l,l,l,l,B.bk,l,l,l)
u=A.D(A.ch(new A.a7C(l,A.dq(d,l,l,l,l,l,l,l,l,l,l),l,l,l),B.q,l,B.z,l,l,l,l,B.aj),1)
k=m.a.d
g=A.l(l,l,B.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.x.j(0.35)
return A.u(A.a([v,B.ab,u,B.T,A.aK(l,B.U,!0,l,!0,B.q,l,A.aL(),k,l,l,l,l,l,2,A.bm(l,new A.b2(4,A.m(12),B.V),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new A.b2(4,A.m(12),D.aQ9),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.z,!0,l,!0,l,!1,l,B.ag,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,B.a8,l,l,l,l,l,l,l,l,l,l,l,D.aKw,!0,B.a6,l,B.am,l,l,l,l)],o),B.af,l,B.e,B.j,0,B.p)},
aV8(d,e,f){var w=null,v=f.j(0.15),u=A.m(8)
return A.p(w,A.d(d+": "+e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.h,w,w,new A.o(v,w,w,u,w,w,B.n),w,w,w,w,B.fJ,w,w,w)}}
C.aJk.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
var z=a.updateTypes(["aw<~>()","~()","I(hW,hW)","~([wA?])","T(qb)","qb()","I(qJ,qJ)","T(qJ)","I(qK,qK)","NH(X)","T(hW)","cF(abo)","Y4(X)","Xb(X)","ac9(X)","a4t(X)","LQ(X)","ab_(X,ht<ak<iZ>>)","aaZ(X,I)","r(qb)","qJ(a1<@,@>)","~(Dk,aoi)","LI(X)","a1<n,@>(qJ)","qK(a1<@,@>)","a1<n,@>(kc)","a1<n,@>(qK)","T(qK)","a1<n,@>(ll)","ll(@)","a1<n,@>(i9)","i9(@)","hW(@)","aw<~>(kc)","a1<n,@>(hW)","~(I,I)","hW(hW)","To(X)","aw<T>(ak<hW>)","Y3(X)","~(hW)","YQ(X)","Tp(X)","n(hW)","T(ll)","wd(br<I,ll>)","a9y(X,I)","I(i9,i9)","a9q(ll)","r(qQ)","bF(H8)","XA(X)","~(cX{bumpWalletRevision:T,cloudRequest:T})","~(n,P,P,P)","P(Q)","~(cX)","Yn(X)","~(Dk)","n(n)","YR(X)"])
C.clS.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.clT(r,w,s.b,v,s.d)
t=s.e
r.b=A.dD(t,u)
v.r=new C.clP(r)
v.e=new C.clQ(r,w)
v.f=new C.clR(r,w,t,u)},
$S:0}
C.clT.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.l7(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=A.a5(r)
u=A.c9(r)
s=v
q=u
p=A.EL(s,q)
if(p==null)p=new A.iX(s,q==null?A.a0U(s):q)
t=p
o.d.hb(t.a,t.b)
return}o.d.J(0,w)}else{o.e.a(null)
o.d.J(0,null)}},
$S:38}
C.clP.prototype={
$0(){this.a.b.a9(0)
return $.Fl()},
$S:1620}
C.clQ.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.aqF.$0()
this.a.b.a9(0)},
$S:0}
C.clR.prototype={
$0(){var w,v=this,u=v.b,t=A.dB(0,0,u.gb7Y(),0,0,0)
u.kn(0)
u=v.c
w=v.a
w.b=A.cN(new A.b8(u.a-t.a),new C.clO(w,u,v.d))},
$S:0}
C.clO.prototype={
$0(){var w=this.c
this.a.b=A.dD(this.b,w)
w.$1(null)},
$S:0}
C.eLZ.prototype={
$1(d){var w=this.a
w.n(new C.eLY(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.eLY.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.ht(D.abz,this.b,null,null,v.$ti.k("ht<1>"))},
$S:0}
C.eM0.prototype={
$2(d,e){var w=this.a
w.n(new C.eLW(w,d,e))},
$S:54}
C.eLW.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.ht(D.abz,null,this.b,this.c,v.$ti.k("ht<1>"))},
$S:0}
C.eM_.prototype={
$0(){var w=this.a
w.n(new C.eLX(w))},
$S:0}
C.eLX.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.ht(B.zp,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fiI.prototype={
$1(d){return d.a===this.a&&B.a.i(d.b.toLowerCase())===this.b&&d.x===B.cf},
$S:16}
C.fiA.prototype={
$1(d){return d},
$S:13}
C.f3u.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return A.p(B.A,new A.C(new A.M(u,0,u,0),A.d("NGMY",w,1,B.eB,w,!1,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,B.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),B.h,w,w,B.a74,w,v,w,w,w,w,w,v)},
$S:153}
C.f3r.prototype={
$3(d,e,f){return this.a.$0()},
$S:140}
C.f3s.prototype={
$2(d,e){var w,v=this,u=e.b
if(B.a.i(u==null?"":u).length!==0){u.toString
w=B.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return A.ka(w,B.A,v.d,new C.f3q(v.e),B.fK,v.c,!0,v.b,null,null,v.a)},
$S:1621}
C.f3q.prototype={
$3(d,e,f){return this.a.$0()},
$S:140}
C.f3t.prototype={
$3(d,e,f){return this.a.$0()},
$S:140}
C.d2T.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.d33.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.d3l.prototype={
$1(d){return A.Z(d,x.N,x.z)},
$S:7}
C.d3m.prototype={
$1(d){return this.a.Ia()},
$S:14}
C.d3b.prototype={
$0(){var w=J.b4(this.b,new C.d3a(),x.P)
w=A.z(w,w.$ti.k("ai.E"))
this.a.f=w},
$S:0}
C.d3a.prototype={
$1(d){return A.Z(d,x.N,x.z)},
$S:7}
C.d3c.prototype={
$0(){var w=this.a,v=w.a.d.b3,u=A.U(v).k("J<1,a1<n,@>>")
v=A.z(new A.J(v,new C.d39(),u),u.k("ai.E"))
w.f=v},
$S:0}
C.d39.prototype={
$1(d){return A.Z(d,x.N,x.z)},
$S:7}
C.d3e.prototype={
$0(){var w=this.a,v=w.a.d.b3,u=A.U(v).k("J<1,a1<n,@>>")
v=A.z(new A.J(v,new C.d3d(),u),u.k("ai.E"))
w.f=v},
$S:0}
C.d3d.prototype={
$1(d){return A.Z(d,x.N,x.z)},
$S:7}
C.d36.prototype={
$0(){var w=0,v=A.j(x.c),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.c3z(t.a.c)?2:3
break
case 2:w=4
return A.b(C.amY(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.n(new C.d34(t))
case 3:if(t.c!=null)t.n(new C.d35(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:52}
C.d34.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d35.prototype={
$0(){return this.a.d++},
$S:0}
C.d37.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d38.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d2Z.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.hOW(t.a.d.b3,J.k(J.q(u.b,"id")),"rejected")
t.a.bn()
w=2
return A.b(C.aeR(t.a.d.b3),$async$$0)
case 2:w=3
return A.b(t.Ia(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3_.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a6(s)
C.hE2(t.a.d.b3,J.k(r.h(s,"id")),t.a.c.c)
t.a.bn()
w=2
return A.b(C.aeR(t.a.d.b3),$async$$0)
case 2:w=3
return A.b(t.Ia(),$async$$0)
case 3:t.H5(B.d.dI(t.y,new C.d2X(s),new C.d2Y(t)),J.k(r.h(s,"id")))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d2X.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d2Y.prototype={
$0(){return B.d.gK(this.a.y)},
$S:z+5}
C.d30.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d31.prototype={
$0(){return B.d.gK(this.a.y)},
$S:z+5}
C.d32.prototype={
$0(){return this.a.H5(this.b,J.k(J.q(this.c,"id")))},
$S:0}
C.d2W.prototype={
$0(){return this.a.bVd(this.b)},
$S:0}
C.d2V.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.hPm(u,w.b,new C.d2U(v,w))},
$S:0}
C.d2U.prototype={
$2(d,e){return this.a.aeD(this.b,d,e)},
$S:652}
C.d3k.prototype={
$2(d,e){if(d)return
this.a.aO7()},
$S:118}
C.d3i.prototype={
$2(d,e){var w=this.a
return new A.kW(C.aWK(w.a.c.a),new C.d3h(w,this.b,this.c),null,null,x.gH)},
$S:1623}
C.d3h.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=A.m(12)
v=A.m(12)
u=A.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return A.aD(!1,B.Y,!0,w,A.aI(!1,v,!0,new A.C(B.lp,A.bC4(B.cN,A.V(B.fW,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.d3g(this.a,d),t,t,t,t,t,t,t),B.h,this.b,0,t,t,t,t,t,B.ac)},
$S:1624}
C.d3g.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.feZ(s.c.a,s.e).eN(new C.d3f())
w=2
return A.b(C.bzt(u.b,t.a.c.a),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3f.prototype={
$1(d){},
$S:29}
C.d3j.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.dG8.prototype={
$0(){var w=this.a
return A.Jt(w.a.c.a,new C.dG7(w))},
$S:77}
C.dG7.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.dG9.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&A.c()
u.be=t.ac()
v.bn()
w.n(new C.dG6())},
$S:0}
C.dG6.prototype={
$0(){},
$S:0}
C.dGa.prototype={
$2(d,e){var w,v=this.a
if(!C.c3z(v.a.c)){if($.fBh.t(0,B.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.fBi(this.b,v.x,w)
return!1}C.amY(v.a.c.a)}if(A.Jt(v.a.c.a,new C.dG5(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aD4()
w=v.a
w.toString
w.hk(new A.cX(B.o.u(1000*Date.now()),v.a.c.a,d,B.js,B.f5,e,null,null,B.cf,new A.Q(Date.now(),0,!1)))
v.a.bn()
return!0},
$S:1625}
C.dG5.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.dGb.prototype={
$3$bonus(d,e,f){var w,v=null,u=B.o.u(1000*Date.now()),t=this.a,s=t.a
s.hk(new A.cX(u,s.c.a,d,B.fs,B.f5,e,v,v,B.cf,new A.Q(Date.now(),0,!1)))
t.a.bn()
w=f>0?"+$"+B.k.aa(d,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.tZ(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1626}
C.d2N.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.d2Q.prototype={
$0(){return A.iE(this.a,null)},
$S:0}
C.d2R.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.d2S.prototype={
$1(d){var w=null,v=this.a,u=A.ff(w,w,v.e===d?B.bn:A.W(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,w,w,w,w,w,w,w,w)
return A.D(new A.C(B.eX,A.i5(A.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.d2P(v,d),u),w),1)},
$S:208}
C.d2P.prototype={
$0(){var w=this.a
return w.n(new C.d2O(w,this.b))},
$S:0}
C.d2O.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d4F.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.d4I.prototype={
$1(d){this.a.cb7()
return null},
$S:14}
C.d4J.prototype={
$1(d){return this.a.cqx()},
$S:14}
C.d4K.prototype={
$1(d){this.a.a04()
return null},
$S:14}
C.d4L.prototype={
$1(d){this.a.afI()
return null},
$S:14}
C.d4M.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c4)return
w=v.Q
w===$&&A.c()
if(w<=0){v.n(new C.d4G(v))
w=v.as
if(w!=null)w.a9(0)
v.DP()
return}v.n(new C.d4H(v))},
$S:14}
C.d4G.prototype={
$0(){return this.a.Q=0},
$S:0}
C.d4H.prototype={
$0(){var w=this.a,v=w.Q
v===$&&A.c()
w.Q=v-1
return v},
$S:0}
C.d3V.prototype={
$0(){return this.a.by=this.b},
$S:0}
C.d3W.prototype={
$0(){return this.a.by=this.b},
$S:0}
C.d4o.prototype={
$1(d){return this.a.go.t(0,d)},
$S:60}
C.d4p.prototype={
$0(){},
$S:0}
C.d4a.prototype={
$0(){var w=this.b
w.c4=!0
w.cT="Waiting for both players\u2026"
w.cf="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.d4b.prototype={
$0(){var w=this.a
w.c4=!0
w.cT="Both players connected"
w.cf="Starting together in a moment\u2026"},
$S:0}
C.d4c.prototype={
$0(){var w=this.b
w.c4=!0
w.cT="Match starting together\u2026"
w.cf="Both players start in "+B.o.D(this.c,1,99)+"s"},
$S:0}
C.d4d.prototype={
$0(){this.b.c4=!1},
$S:0}
C.d4e.prototype={
$0(){},
$S:0}
C.d3n.prototype={
$0(){var w=this.a,v=w.x2,u=A.t(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.d3U.prototype={
$0(){var w=this.a
w.at=this.b
w.b00()},
$S:0}
C.d4q.prototype={
$0(){},
$S:0}
C.d4z.prototype={
$0(){},
$S:0}
C.d4n.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.n(new C.d4m(w))},
$S:0}
C.d4m.prototype={
$0(){var w=this.a
w.y=!0
w.z=new A.Q(Date.now(),0,!1)},
$S:0}
C.d3S.prototype={
$0(){var w=this.a;++w.Y
w.y=!1
w.z=null},
$S:0}
C.d3T.prototype={
$0(){},
$S:0}
C.d4u.prototype={
$1(d){return d==null},
$S:248}
C.d4v.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
B.d.cu(v.ch,w.d)},
$S:0}
C.d4w.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.d3o.prototype={
$1(d){return d==null},
$S:248}
C.d3p.prototype={
$0(){return this.a.be++},
$S:0}
C.d3q.prototype={
$0(){},
$S:0}
C.d43.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.d44.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.J(0,t)
w=this.c
u.J(0,w)
if(v.ghr()&&D.md.t(0,v.a.e)){u=v.id
u.J(0,t)
u.J(0,w);++v.fx}++v.k2
v.fy=A.a([],x.t)},
$S:0}
C.d45.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.n(new C.d42(w))},
$S:11}
C.d42.prototype={
$0(){var w=this.a
w.fy=A.a([],x.t)
w.k1=!1},
$S:0}
C.d4f.prototype={
$0(){return this.a.y1++},
$S:0}
C.d4g.prototype={
$0(){},
$S:0}
C.d4h.prototype={
$0(){return this.a.y2++},
$S:0}
C.d4i.prototype={
$0(){},
$S:0}
C.d4j.prototype={
$0(){return this.a.b3++},
$S:0}
C.d4k.prototype={
$0(){},
$S:0}
C.d4t.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.d46.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d47.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.d48.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d49.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.d4x.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.d4y.prototype={
$0(){var w=this.a
w.ok.push(w.d.aB(4))
w.p2=0},
$S:0}
C.d3r.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d3s.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.d3t.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d3u.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.d4r.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.d4s.prototype={
$0(){var w,v=this.a;++v.x2
v.aK3()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+A.t(Math.min(w+2,7))+" tiles"},
$S:0}
C.d41.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.d4l.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d4_.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d40.prototype={
$2(d,e){return d+e.length},
$S:219}
C.d4A.prototype={
$0(){return A.iE(this.a,null)},
$S:0}
C.d4B.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.d4C.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.d4E.prototype={
$1(d){var w=this.a,v=w.MS(),u=v<=0?0:B.k.D(w.z5()/v,0,1),t=w.a.x,s=t*1.46
return new C.LI(w.f?s:s*u,s,t,null)},
$S:z+22}
C.d4D.prototype={
$1(d){return d.bS(0.85)},
$S:156}
C.d3Z.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghr()&&D.md.t(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return A.u(A.a([A.d(p,w,w,w,w,w,w,B.jR,B.L,w,w),B.ar,A.D(A.at(new A.a3(r*v+u,r*t+s,A.ih(!0,w,w,B.z,new A.hJ(v,6,6,1,r),new C.d3Y(q,r),q.fr.length,w,B.dL,B.aj,!1),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
$S:149}
C.d3Y.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.t(0,e),p=r.ghr()&&D.md.t(0,r.a.e)&&q&&r.id.t(0,e),o=r.ghr()&&D.md.t(0,r.a.e)&&q&&!p,n=B.d.t(r.fy,e)||q,m=p?D.ajz:D.bFX,l=A.m(10),k=A.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.ajz:D.ajt
v=o?A.H(B.dE,B.r,2):s
u=A.a([new A.aa(0,B.G,A.W(51,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),B.J,4)],x.V)
t=this.b*0.42
return A.aI(!1,l,!0,A.di(s,A.at(n?A.V(D.c8S[r.fr[e]],B.c,s,s,s,t):A.d("?",s,s,s,s,s,s,A.l(s,s,B.c,s,s,s,s,s,s,s,s,t,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,B.b8,new A.o(s,s,v,k,u,w,B.n),B.eG,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.d3X(r,e),s,s,s,s,s,s,s)},
$S:194}
C.d3X.prototype={
$0(){return this.a.cau(this.b)},
$S:0}
C.d3H.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?A.W(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.W(89,B.bn.l()>>>16&255,B.bn.l()>>>8&255,B.bn.l()&255),r=A.m(10),q=A.m(10),p=A.m(10),o=A.H(A.W(64,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
return A.aD(!1,B.Y,!0,r,A.aI(!1,q,!0,A.p(B.A,A.d(t?"":u,w,w,w,w,w,w,D.aJB,w,w,w),B.h,w,w,new A.o(w,w,o,p,w,w,B.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d3G(v,d),w,w,w,w,w,w,w),B.h,s,0,w,w,w,w,w,B.ac)},
$S:655}
C.d3G.prototype={
$0(){return this.a.cpR(this.b)},
$S:0}
C.d3I.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=A.W(46,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
return A.aD(!1,B.Y,!0,A.m(10),A.aI(!1,A.m(10),!0,A.p(B.A,A.d(u,w,w,w,w,w,w,D.aJB,w,w,w),B.h,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d3F(v,d),w,w,w,w,w,w,w),B.h,t,0,w,w,w,w,w,B.ac)},
$S:655}
C.d3F.prototype={
$0(){return this.a.cpQ(this.b)},
$S:0}
C.d3J.prototype={
$1(d){return this.a.n(new C.d3E())},
$S:27}
C.d3E.prototype={
$0(){},
$S:0}
C.d3K.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&A.c()
w=C.af1(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.oo()
if(u.ghr()&&D.md.t(0,u.a.e)){u.Zq()
u.mu(!0)}else{v=B.d.cI(u.cy,0,new C.d3C())
t=u.dx
if(t>=v)u.rV("All 5 sentences perfect \u2014 full payout!")
else u.Dh(t/v,t,v)}}else{if(u.ghr()&&D.md.t(0,u.a.e))u.Zq()
u.n(new C.d3D(u))}},
$S:0}
C.d3C.prototype={
$2(d,e){return d+e.length},
$S:219}
C.d3D.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bI(0,B.c_)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.d3L.prototype={
$1(d){var w=null,v=A.ff(w,w,A.W(38,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,B.cc,w,w,w,w,w,w,w)
return new A.C(B.cK,new A.a3(1/0,w,A.i5(A.d(d,w,w,w,w,w,w,U.aJu,w,w,w),new C.d3B(this.a,d),v),w),w)},
$S:128}
C.d3B.prototype={
$0(){return this.a.b_n(this.b)},
$S:0}
C.d3M.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&A.c()
w=u*3+8
return A.u(A.a([A.d(s,v,v,v,v,v,v,B.nH,v,v,v),B.P,A.D(A.at(new A.a3(w,w,A.ih(!0,v,v,B.z,new A.hJ(3,4,4,1,u),new C.d3A(t,u),9,v,B.dL,B.aj,!1),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
$S:149}
C.d3A.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.aYd(e),p=r===0
if(p)w=B.K
else w=q?B.bn:A.W(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v=A.m(10)
s=p?t:new C.d3w(s,e)
u=A.m(10)
p=p?"":""+r
return A.aD(!1,B.Y,!0,v,A.aI(!1,u,!0,A.at(A.d(p,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),B.h,w,0,t,t,t,t,t,B.ac)},
$S:74}
C.d3w.prototype={
$0(){return this.a.cpP(this.b)},
$S:0}
C.d3N.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.d3z(q,d)
p=A.m(16)
if(o)w=D.a_b[d]
else{w=D.a_b[d]
w=A.W(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=A.m(16)
u=o?A.W(B.k.U(127.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.W(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
u=A.H(u,B.r,o?2:1)
t=x.V
if(o){s=D.a_b[d]
t=A.a([new A.aa(0,B.G,A.W(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,16)],t)}else t=A.a([],t)
return A.aI(!1,p,!0,A.di(r,r,r,r,B.b8,new A.o(w,r,u,v,t,r,B.n),T.zx,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1630}
C.d3z.prototype={
$0(){return this.a.cpS(this.b)},
$S:0}
C.d3O.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&A.c()
q=A.d(q,t,t,t,t,t,t,B.nH,t,t,t)
w=A.d("Move "+r.auC()+"/"+C.fHg(),t,t,t,t,t,t,B.BW,t,t,t)
v=r.x2
u=s*3+12
return A.u(A.a([q,w,A.d("Round "+v+"/7 \xb7 "+A.t(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,A.l(t,t,A.W(153,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.D(A.at(new A.a3(u,u,A.ih(!0,t,t,B.z,new A.hJ(3,6,6,1,s),new C.d3y(r),9,t,B.dL,B.aj,!1),t),t,t,t),1)],x.p),B.m,t,B.e,B.j,0,B.p)},
$S:149}
C.d3y.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=A.m(10),s=A.m(10),r=u?B.bn:D.b1U,q=u?B.eO:D.b9o
return A.aD(!1,B.Y,!0,w,A.aI(!1,t,!0,A.p(w,w,B.h,w,w,new A.o(r,w,A.H(q,B.r,u?2.5:1),s,w,w,B.n),w,w,w,w,w,w,w,w),w,!0,w,w,B.K,w,w,w,w,w,w,w,w,new C.d3v(v,e),w,w,w,w,B.K,w,w),B.h,B.K,0,w,w,w,w,w,B.ac)},
$S:74}
C.d3v.prototype={
$0(){return this.a.cpN(this.b)},
$S:0}
C.d3P.prototype={
$0(){return this.a.b_n(this.b[this.c])},
$S:0}
C.d3Q.prototype={
$0(){return this.a.n(new C.d3x())},
$S:0}
C.d3x.prototype={
$0(){},
$S:0}
C.d3R.prototype={
$2(d,e){this.a.Yc(d,e)
return null},
$S:z+21}
C.d7X.prototype={
$1(d){return this.a.caX(this.b,d)},
$S:1631}
C.d7W.prototype={
$0(){var w=this
return w.a.a.cHT(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cwS.prototype={
$1(d){var w=this.a
w.ZH()
w.t1()},
$S:8}
C.cwc.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cw2.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cw3.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cwm.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cwj.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cwk.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cwl.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cwe.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new C.cwd(w))},
$S:0}
C.cwd.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cw4.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.a9(w.c)
v.dy=J.a9(w.d)
v.fr=J.a9(w.e)},
$S:0}
C.cwh.prototype={
$1(d){var w=this.a
return new C.To(w.fx,new C.cwg(w),w.a.f.r,null)},
$S:z+37}
C.cwg.prototype={
$1(d){return this.be3(d)},
be3(d){var w=0,v=A.j(x.y),u,t=this,s,r
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c4t(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.n(new C.cwf(r,d))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+38}
C.cwf.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cwF.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cwz.prototype={
$1(d){this.a.t1()
return null},
$S:14}
C.cwC.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(B.o.aj(v.gaQV().a,1e6)<=0){w=v.id
if(w!=null)w.a9(0)
v.t1()
return}v.n(new C.cwB())},
$S:14}
C.cwB.prototype={
$0(){},
$S:0}
C.cwy.prototype={
$1(d){this.a.DW()
return null},
$S:14}
C.cwA.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cwx.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bh(J.k(v==null?"":v))
if(u==null)u=new A.Q(A.fK(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bh(J.k(v==null?"":v))
return u.aI(0,w==null?new A.Q(A.fK(0,0,!1),0,!1):w)},
$S:39}
C.cw9.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bh(J.k(v==null?"":v))
if(u==null)u=new A.Q(A.fK(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bh(J.k(v==null?"":v))
return u.aI(0,w==null?new A.Q(A.fK(0,0,!1),0,!1):w)},
$S:39}
C.cwa.prototype={
$0(){var w=this.a,v=w.f
B.d.a7(v)
B.d.v(v,this.b)
w.ax=!0},
$S:0}
C.cwb.prototype={
$0(){var w=this.a
if(w.c!=null)w.a_m(!0)},
$S:11}
C.cw7.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cw8.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
if(w.f.length!==0)w.RU(this.b)},
$S:8}
C.cwp.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=B.d.gcV(v).Q
v.toString
if(this.b)w.hP(v)
else w.lE(v,B.dU,B.ks)},
$S:8}
C.cwi.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cwq.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cwr.prototype={
$0(){var w=this.a
w.f.push(A.E(["role","user","text",this.b,"at",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z))
w.b0N()
w.r.bI(0,B.c_)
w.at=!0},
$S:0}
C.cws.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cwt.prototype={
$0(){var w=this.a
w.f.push(A.E(["role","ai","text",this.b,"at",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z))
w.at=!1},
$S:0}
C.cwu.prototype={
$0(){var w,v=this.b,u=A.S(x.N,x.z)
J.aE(u,"role","ai")
J.aE(u,"text",this.c)
J.aE(u,"at",new A.Q(Date.now(),0,!1).a4().ab())
w=this.a
if(J.ct(w.b)){w=J.b4(w.b,v.gc9W(),x.P)
w=A.z(w,w.$ti.k("ai.E"))
J.aE(u,"phoneActions",w)}v.f.push(u)
v.b0N()},
$S:0}
C.cwv.prototype={
$0(){this.a.f.push(A.E(["role","ai","text",y.g,"at",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z))},
$S:0}
C.cww.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cwn.prototype={
$1(d){return this.be4(d)},
be4(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:k=t.a
if(k.c==null||d==null){w=1
break}s=t.b.b
r=J.a6(s)
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
return A.b(C.anm(q,new C.qJ("cal_"+1000*n,m,l,(o==null?p.bN(36e8):o).bQ(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.anz()
case 4:k.c.G(x.q).f.P(A.b0(null,null,null,B.dk,null,B.q,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:408}
C.cwE.prototype={
$1(d){return this.be5(d)},
be5(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.G(x.q).f.P(A.b0(null,null,null,B.dk,null,B.q,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:408}
C.cwo.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=B.d.gcV(v).Q
v.toString
w.hP(v)},
$S:8}
C.cwR.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
if(v>0)w.a8F(v-1)},
$S:0}
C.cwK.prototype={
$0(){return A.iE(this.a,null)},
$S:0}
C.cwN.prototype={
$1(d){var w=this.a
w.n(new C.cwH(w,d))
if(d===0)w.a_m(!0)},
$S:27}
C.cwH.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cwL.prototype={
$2$size(d,e){return C.fFH(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:1632}
C.cwM.prototype={
$0(){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.fS_(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return A.b(H.aoa(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cwI(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return A.b(C.ank(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return A.b(p.t1(),$async$$0)
case 15:p.n(new C.cwJ(p))
p.a8F(0)
case 14:u=!1
w=1
break
case 11:w=16
return A.b(p.t1(),$async$$0)
case 16:case 9:case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:63}
C.cwI.prototype={
$2(d,e){return this.be6(d,e)},
be6(d,e){var w=0,v=A.j(x.y),u,t=this,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=A.a_W(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$2,v)},
$S:119}
C.cwJ.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cwP.prototype={
$2(d,e){return B.aa},
$S:35}
C.cwO.prototype={
$2(d,e){var w=null,v=this.a,u=A.d((v.a.c.w?D.a_g:D.ZF)[e],w,w,w,w,w,w,B.pA,w,w,w),t=A.W(31,B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255),s=A.W(89,B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255)
v=v.at?w:new C.cwG(v,e)
return A.mJ(w,t,u,w,v,w,w,new A.ay(s,1,B.r,-1),w)},
$S:504}
C.cwG.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a_g:D.ZF
w.r.saS(0,v[this.b])
w.mt()
return null},
$S:0}
C.cwQ.prototype={
$1(d){var w=this.a
return w.at?null:w.mt()},
$S:2}
C.cw5.prototype={
$0(){return this.a.a8F(0)},
$S:0}
C.cwD.prototype={
$0(){return this.a.a8F(this.b)},
$S:0}
C.cw6.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=A.p(v,D.bAN,B.h,v,v,new A.o(v,v,v,v,v,new A.a7(B.a3,B.a7,B.w,A.a([A.W(51,B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255),w.b],x.O),v,v),B.a5),v,72,v,v,v,v,v,72)
t=w.c
s=A.d("Start a conversation",v,v,v,v,v,v,A.l(v,v,t?B.c:B.aG,v,v,v,v,v,v,v,v,16,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.at(new A.C(B.V3,A.u(A.a([u,B.ab,s,B.ar,A.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,A.l(v,v,t?B.aA:B.aV,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v)],x.p),B.m,v,B.e,B.j,0,B.p),v),v,v,v)}if(e<s)return u.bz8(t[e],w.c)
return u.aKE(A.E(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:42}
C.bU_.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=B.k.N(d)
return new A.Q(A.fK(w>1e11?w:w*1000,0,!0),0,!0).bQ()}v=A.bh(J.k(d))
return v==null?null:v.bQ()},
$S:333}
C.bTZ.prototype={
$1(d){A.aQ(d)
return(d==null?0:d)/100},
$S:665}
C.bU1.prototype={
$1(d){var w
if(d==null)w=null
else{w=A.bh(J.k(d))
w=w==null?null:w.bQ()}return w},
$S:333}
C.bU0.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null
if(!x.f.b(d))return m
w=A.Z(d,x.N,x.z)
try{v=J.q(w,"id")
v=J.k(v==null?"":v)
u=J.q(w,"userEmail")
u=J.k(u==null?"":u)
t=A.aQ(J.q(w,"amount"))
if(t==null)t=0
s=J.q(w,"type")
s=A.a2r(B.a_V,J.k(s==null?"reimbursement":s))
r=J.q(w,"method")
r=A.a2r(B.ZD,J.k(r==null?"system":r))
q=A.aS(J.q(w,"sourceDetails"))
p=J.q(w,"status")
p=A.a2r(B.Fl,J.k(p==null?"approved":p))
o=this.a.$1(J.q(w,"timestamp"))
if(o==null)o=new A.Q(Date.now(),0,!1)
return new A.cX(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:594}
C.doq.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dor.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.doh.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bj(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dof.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.a
w=2
return A.b(o.zH(),$async$$0)
case 2:t=o.d
t===$&&A.c()
s=o.e
s===$&&A.c()
r=o.a.c
q=o.f
q===$&&A.c()
w=3
return A.b(C.fAh(t,s,r,q),$async$$0)
case 3:p=e
w=4
return A.b(A.oB(o.a.c,!1),$async$$0)
case 4:o.ks(p)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dop.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.a7d(),$async$$0)
case 3:q=e
if(q==null){r.ks("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return A.b(A.a8(s,!1).cr(A.eH(new C.doo(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return A.b(A.oB(r.a.c,!1),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.doo.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&A.c()
return new C.Y3(w.b,w.a,u,v,null)},
$S:z+39}
C.doe.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.hl3(q)?3:4
break
case 3:w=5
return A.b(t.a.Dw(B.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return A.b(C.aUl(q,s.a.c),$async$$0)
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
case 9:s.ks(C.bU3(s.a.c))
w=1
break
case 10:s.ks("That code didn't match anything on your account. Double-check it and try again.")
w=1
break
case 11:s.ks(y.B)
w=1
break
case 12:q=r.b
q.toString
w=14
return A.b(s.yX(q,!0,!0),$async$$0)
case 14:w=1
break
case 13:q=r.b
q.toString
w=15
return A.b(s.aLS(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dod.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=A.bj(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dog.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.aau(),$async$$0)
case 3:q=e
if(q==null||B.a.i(q).length===0){w=1
break}s=C.fOW(q)
if(s==null){r.ks("Could not read that backup file.")
w=1
break}if(!C.bU2(s,r.a.c,null)){r.ks(C.bU3(r.a.c))
w=1
break}w=4
return A.b(r.bBr(s),$async$$0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.don.prototype={
$1(d){var w=null,v=new A.ap(B.as,$.au()),u=A.L(d).ax.a===B.H,t=u?B.hr:B.c,s=x.p,r=A.u(A.a([A.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,A.l(w,w,u?B.al:B.ai,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),B.ay,A.aK(w,B.U,!0,w,!0,B.q,w,A.aL(),v,w,w,w,w,w,2,A.bm(w,new A.b2(4,A.m(14),B.dd),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),B.z,!0,w,!0,w,!1,w,B.ag,w,w,w,w,w,B.dN,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.L,w,B.am,w,w,w,w)],s),B.F,w,B.e,B.R,0,B.p)
return A.eo(A.a([A.bI(!1,B.df,w,w,!0,w,w,new C.dol(d),w,w),A.bK(D.ePF,new C.dom(d,v),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.f22,w)},
$S:20}
C.dol.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.dom.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a8(this.a,!1).M(w)
return null},
$S:0}
C.doi.prototype={
$1(d){return D.fgh},
$S:z+12}
C.doj.prototype={
$0(){return this.a.Dx(B.a.i(this.b))},
$S:1}
C.dok.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(C.aUl(t.b,r.a.c),$async$$0)
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
return A.b(r.yX(s,!0,!0),$async$$0)
case 11:w=1
break
case 7:r.ks(C.bU3(r.a.c))
w=1
break
case 8:r.ks("Could not read that QR code for your account.")
w=1
break
case 9:r.ks(y.B)
w=1
break
case 10:s=q.b
s.toString
w=12
return A.b(r.aLS(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dos.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.dow.prototype={
$1(d){this.a.P2()
return null},
$S:14}
C.dot.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dou.prototype={
$0(){var w=null,v=this.a
A.fC(new A.fw(v.gasZ()))
this.b.G(x.q).f.P(A.b0(w,w,w,w,w,B.q,w,A.d("Code "+v.gasZ()+" copied",w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dov.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.dox.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!(B.a.a_(s,"NGMYSNAP1|")||B.a.a_(s,"NGMYLOCALSYNC1|")||B.a.a_(s,"NGMYLOCALLIVE1|")||B.a.a_(s,"NGMYLOCALDEP1|")))continue
r.e=!0
A.a8(this.b,!1).M(s)
return}},
$S:176}
C.f6J.prototype={
$1(d){return D.feD},
$S:z+13}
C.f7W.prototype={
$1(d){return new C.ac9(this.a,this.b,this.c,null)},
$S:z+14}
C.eFU.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.eFV.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.cZ6.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fu()},
$S:8}
C.cZ3.prototype={
$2(d,e){return e.ahO(e.a.toUpperCase())},
$S:1633}
C.cZ4.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=B.a.i(w.d.a.a)
A.a8(v,!1).M(w)
return null},
$S:2}
C.cZ5.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.bUL.prototype={
$1(d){var w=J.q(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!B.d.bg(D.cW2,B.a.gkV(v))},
$S:4}
C.feT.prototype={
$1(d){return d.a===this.a},
$S:1634}
C.feU.prototype={
$0(){return B.d.gK(B.AI)},
$S:1635}
C.duS.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.n(new C.duR(v))
w=v.r
w===$&&A.c()
if(w<=0)v.b_S("Time's up")},
$S:14}
C.duR.prototype={
$0(){var w=this.a,v=w.r
v===$&&A.c()
w.r=v-1
return v},
$S:0}
C.duJ.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.duO.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.n(new C.duL(w,d,e))},
$S:132}
C.duL.prototype={
$0(){var w=this.a,v=this.c
w.e=B.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.duP.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new C.duK(w))
w.ckl(!0)},
$S:0}
C.duK.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.duQ.prototype={
$1(d){this.a.b_S(d)
return null},
$S:2}
C.duM.prototype={
$0(){return A.iE(this.a,null)},
$S:0}
C.duN.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.c1b.prototype={
$1(d){return D.deC},
$S:z+15}
C.c1a.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.f8H.prototype={
$5(d,e,f,g,h){var w,v=null,u=J.a6(d),t=A.aQ(u.h(d,e)),s=t==null?v:B.k.N(t)
if(s==null)s=0
if(s<=0)return v
t=u.h(d,g)
if(J.k(t==null?"":t)!==h){u.m(d,g,h)
u.m(d,f,0)}t=A.aQ(u.h(d,f))
w=t==null?v:B.k.N(t)
if(w==null)w=0
if(w>=s)return v
u.m(d,f,w+1)
u=A.aQ(u.h(d,"outcome"))
return u==null?v:B.k.N(u)},
$S:1636}
C.f8I.prototype={
$2(d,e){var w=A.aQ(J.q(d,e))
w=w==null?null:B.k.N(w)
return w==null?0:w},
$S:566}
C.f8J.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:219}
C.flU.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.h_b(w,v):C.fFZ(w,v)
if(u===3)++w.f
C.adx(w,this.c,u)
return u},
$S:1637}
C.flW.prototype={
$0(){return C.h_b(this.a,this.b)},
$S:113}
C.flV.prototype={
$0(){return C.fFZ(this.a,this.b)},
$S:113}
C.do2.prototype={
$0(){var w=this.a
if(w.a.c)w.n(new C.do1(w))},
$S:0}
C.do1.prototype={
$0(){this.a.r=1+B.o.H(A.AL(new A.Q(Date.now(),0,!1))/90|0,5)},
$S:0}
C.do3.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&A.c()
u=u.x
u===$&&A.c()
w=B.k.bH(u*10)
if(w!==v.w)v.n(new C.do0(v,w))}},
$S:0}
C.do0.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.c38.prototype={
$3(d,e,f){var w=null
return A.D(A.u(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,B.I,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.bA,A.eX(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.h,B.dp)],x.p),B.m,w,B.e,B.j,0,B.p),1)},
$S:1638}
C.c37.prototype={
$3(d,e,f){var w=null
return A.d("$"+B.k.aa(e,2),w,w,w,w,w,w,B.ou,w,w,w)},
$S:359}
C.c3A.prototype={
$1(d){return new C.LQ(this.a,this.b,!1,null,null)},
$S:z+16}
C.dN0.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=A.m(e?0:30)
e=e?g:A.H(B.b2.j(0.5),B.r,1)
w=f.a.e?g:A.a([new A.aa(2,B.G,B.b2.j(0.35),B.J,36),new A.aa(0,B.G,B.bz.j(0.175),B.J,24)],x.V)
v=A.m(f.a.e?0:30)
u=x.O
t=A.an(g,A.p(g,g,B.h,g,g,new A.o(g,g,g,g,g,new A.bR(B.A,0.5,B.w,g,0,A.a([B.b9.j(0.22),B.K],u),g,g),B.a5),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=A.an(-50,A.p(g,g,B.h,g,g,new A.o(g,g,g,g,g,new A.bR(B.A,0.5,B.w,g,0,A.a([B.bz.j(0.18),B.K],u),g,g),B.a5),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?B.j:B.R
p=x.p
o=A.a([],p)
if(f.a.e)o.push(B.P)
n=x.V
o.push(A.p(g,D.bwp,B.h,g,g,new A.o(g,g,A.H(B.aL.j(0.8),B.r,2.5),g,A.a([new A.aa(0,B.G,B.b2.j(0.55),B.cs,18)],n),E.t3,B.a5),g,88,g,g,g,g,g,88))
o.push(B.aO)
o.push(A.np(B.ja,D.f_R,new C.dMX()))
o.push(B.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(A.d(m,g,g,g,g,g,g,A.l(g,g,B.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,B.cq,g,1.45,!0,g,g,g,g,g,g,g,g),B.L,g,g))
m=this.b
if(m.length!==0){l=B.cH.j(0.12)
k=A.m(18)
j=A.H(B.cH.j(0.45),B.r,1)
i=A.a([A.B(A.a([A.V(D.bqu,B.cH.j(0.95),g,g,g,20),B.aa,A.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,A.l(g,g,B.cH.j(0.95),g,g,g,g,g,g,g,g,13,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),B.m,g,B.e,B.j,0,g,g),B.T,A.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,A.l(g,g,B.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),B.T],p)
B.d.v(i,new A.J(m,new C.dMY(),A.U(m).k("J<1,r>")))
B.d.v(o,A.a([B.aO,A.p(g,A.u(i,B.F,g,B.e,B.j,0,B.p),B.h,g,g,new A.o(l,g,j,k,g,g,B.n),g,g,g,g,B.bB,g,g,1/0)],p))}o.push(B.bt)
m=B.x.j(0.35)
l=A.m(18)
k=A.H(B.b2.j(0.35),B.r,1)
o.push(A.p(g,A.u(A.a([f.atz(B.hk,"Unlimited games with an active plan",B.b9),B.P,f.atz(B.k4,"Weekday check-ins grow your balance",B.b2),B.P,f.atz(B.m1,"Compete, bet, and earn points",B.aL)],p),B.m,g,B.e,B.j,0,B.p),B.h,g,g,new A.o(m,g,k,l,g,g,B.n),g,g,g,g,B.bB,g,g,1/0))
o.push(B.d3)
l=A.m(16)
n=A.a([new A.aa(0,B.G,B.bz.j(0.45),B.cs,16)],n)
o.push(new A.a3(1/0,g,A.bT(A.dn(D.bzB,D.eWK,new C.dMZ(f,a0),A.bk(B.K,g,g,g,B.c,B.H1,g,B.K,new A.b5(A.m(16),B.V),g,g,g)),new A.o(g,g,g,l,n,E.t3,B.n),B.ba),g))
o.push(B.P)
n=f.a.e?"Back":"Maybe later"
o.push(A.bI(!1,A.d(n,g,g,g,g,g,g,A.l(g,g,B.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,new C.dN_(f,a0),g,g))
if(f.a.e)o.push(B.b7)
h=A.p(g,A.bu(v,new A.am(B.W,g,B.a9,B.q,A.a([t,u,new A.C(new A.M(22,r,22,q),A.u(o,B.m,g,B.e,s,0,B.p),g)],p),g),B.ap),B.h,g,g,new A.o(g,g,e,d,w,D.bIE,B.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return A.ew(g,B.K,h,g,g,g,Ad.Vy,B.cZ,g,g,g)},
$S:656}
C.dMX.prototype={
$1(d){return D.bHE.az(0,d)},
$S:65}
C.dMY.prototype={
$1(d){var w=null
return new A.C(B.fo,A.B(A.a([A.V(Ak.Xo,B.cH.j(0.85),w,w,w,14),B.aa,A.D(A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$S:128}
C.dMZ.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{A.a8(this.b,!1).M(null)
w.a.c.$0()}},
$S:0}
C.dN_.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else A.a8(this.b,!1).M(null)},
$S:0}
C.fhf.prototype={
$1(d){if(d.gma())this.a.a=d
return d.gma()},
$S:745}
C.fh2.prototype={
$1(d){$.aT.x1$.push(new C.fh1(this.a))},
$S:8}
C.fh1.prototype={
$1(d){return this.a.$0()},
$S:8}
C.f5_.prototype={
$1(d){return C.h_h(this.a,this.b+1)},
$S:8}
C.fiD.prototype={
$2(d,e){var w=A.aG(d,B.bP,x.w).w.a
return new A.a3(w.a,w.b,A.cd(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:164}
C.c3O.prototype={
$1(d){return d.r===this.a},
$S:243}
C.c3P.prototype={
$1(d){var w=$.aNE(),v=w.a
w.sq(0,v+1)
return v},
$S:1640}
C.c3Q.prototype={
$1(d){},
$S:29}
C.c3N.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:243}
C.c3M.prototype={
$1(d){return d.f.c8(this.a)},
$S:243}
C.f3b.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.fu0.prototype={
$1(d){return C.a58(this.a)},
$S:99}
C.fu1.prototype={
$1(d){var w=$.aNE()
w.sq(0,w.a+1)},
$S:28}
C.fu2.prototype={
$1(d){},
$S:29}
C.fu3.prototype={
$1(d){return new A.k3($.aNE(),new C.fu_(this.a,this.b),null,null,x.am)},
$S:1641}
C.fu_.prototype={
$3(d,e,f){var w=this.b
return new A.kW(C.an3(this.a,!1),new C.ftZ(w),w,null,x.gv)},
$S:1642}
C.ftZ.prototype={
$2(d,e){var w=e.b
return new C.ab_(w==null?this.a:w,null)},
$S:z+17}
C.dN3.prototype={
$1(d){return d.c},
$S:243}
C.dN4.prototype={
$1(d){return d.gbb1()},
$S:1643}
C.dN5.prototype={
$2(d,e){return d+e},
$S:93}
C.dN6.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.dN8.prototype={
$2(d,e){return B.P},
$S:35}
C.dN7.prototype={
$2(d,e){return new C.aaZ(J.q(this.a.c,e),null)},
$S:z+18}
C.dN2.prototype={
$1(d){return d==null?"\u2026":C.bvZ(d)},
$S:1644}
C.fu6.prototype={
$3(d,e,f){var w=this
return A.qW(new C.axo(w.a,w.b,w.c,w.d,new C.fu4(d,w.e),new C.fu5(d,w.f),null))},
$C:"$3",
$R:3,
$S:92}
C.fu4.prototype={
$0(){A.a8(this.a,!1).M(null)
C.h2e(this.b)},
$S:0}
C.fu5.prototype={
$0(){A.a8(this.a,!1).M(null)
C.h2e(this.b)},
$S:0}
C.d4O.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.a,g=h.f
g===$&&A.c()
w=h.e
v=0
for(;v<28;++v){u=g[v]
t=u.b+u.c
u.b=t
u.d+=0.08
if(t>320){u.b=-10
u.a=40+w.ae()*260
u.c=1.5+w.ae()*3}}g=x.p
w=A.a([],g)
if(h.a.c){t=h.f
B.d.v(w,new A.J(t,new C.d4N(),A.U(t).k("J<1,r>")))}t=h.d
t===$&&A.c()
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,A.aG(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?A.a([B.bn,B.fv,B.eF],r):A.a([B.aF,B.f0,B.eZ],r)
p=A.m(26)
o=A.H(B.c.j(0.4),B.r,2)
n=x.V
m=A.a([new A.aa(6,B.G,(h.a.c?B.dr:B.dz).j(0.5),B.J,36)],n)
l=A.a([],g)
if(h.a.c){k=A.dh()
j=k.a
j.$flags&2&&A.ah(j)
j[11]=0.001
k.jx(-0.35)
r=A.a([X.aaa,B.rg],r)
l.push(new A.a3(i,100,new A.am(B.A,i,B.a9,B.h,A.a([A.fn(B.A,A.p(i,D.aXN,B.h,i,i,new A.o(i,i,i,i,A.a([new A.aa(4,B.G,B.cN.j(0.6),B.J,24),new A.aa(0,B.G,B.x.j(0.3),B.dm,12)],n),new A.bR(B.A,0.5,B.w,i,0,r,i,i),B.a5),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.bCL)
l.push(B.ay)
l.push(A.d(h.a.d,i,i,i,i,i,i,B.a4u,B.L,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=A.m(18)
k=A.H(B.fv,B.r,4)
B.d.v(l,A.a([B.ay,D.eRg,B.P,A.p(i,A.d(r,i,i,i,i,i,i,D.eIk,B.L,i,i),B.h,i,i,new A.o(B.c,i,k,n,i,i,B.n),i,i,i,i,B.V1,i,i,1/0)],g))}B.d.v(l,A.a([B.ab,A.d(h.a.e,i,i,i,i,i,i,D.eKX,B.L,i,i)],g))
l.push(B.dW)
r=A.D(A.dV(D.eOZ,h.a.r,A.db(i,i,i,i,i,i,i,i,i,B.c,i,i,B.cc,i,i,D.aPP,i,i,i,i)),1)
h=h.a
n=h.w
l.push(A.B(A.a([r,B.aw,A.D(A.bK(G.aKT,n,A.bk(B.c,i,i,i,h.c?B.fv:B.f0,i,B.cc,i,i,i,i,i)),1)],g),B.m,i,B.e,B.j,0,i,i))
w.push(A.e5(B.A,A.p(i,A.u(l,B.m,i,B.e,B.R,0,B.p),B.h,i,i,new A.o(i,i,o,p,m,new A.a7(B.ax,B.aC,B.w,q,i,i),B.n),i,i,i,B.a8,B.adG,i,i,s),1+t*0.02,i,i))
return new A.am(B.A,i,B.a9,B.h,w,i)},
$S:108}
C.d4N.prototype={
$1(d){var w=null,v=d.a,u=d.b
return A.an(w,A.d7(A.et(B.A,d.d,A.V(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.c5p.prototype={
$2(d,e){var w=null,v=this.a,u=C.hkv(A.Jt(v.c,v.d))
return A.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1645}
C.c5o.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.bVh.prototype={
$0(){},
$S:0}
C.f2a.prototype={
$1(d){return B.o.u(d)},
$S:83}
C.dGe.prototype={
$0(){return this.a.y=!0},
$S:0}
C.dGf.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.dGg.prototype={
$0(){var w=this.a
return w.w=D.O6[w.d.aB(5)]},
$S:0}
C.dGh.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.dGi.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.dGj.prototype={
$0(){var w=this.a
return w.n(new C.dGd(w))},
$S:0}
C.dGd.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dGk.prototype={
$0(){var w=this.a
return w.n(new C.dGc(w))},
$S:0}
C.dGc.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dGn.prototype={
$0(){return A.iE(this.a,null)},
$S:0}
C.dGo.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&B.a.i(t.e.a.a).length===0?B.bn:A.W(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),r=A.m(10)
t=t.y?u:new C.dGm(t,d)
w=A.m(10)
v=B.k.aa(d,0)
return A.D(new A.C(B.k2,A.aD(!1,B.Y,!0,r,A.aI(!1,w,!0,new A.a3(u,38,A.at(A.d("$"+v,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),B.h,s,0,u,u,u,u,u,B.ac),u),1)},
$S:1646}
C.dGm.prototype={
$0(){var w=this.a
return w.n(new C.dGl(w,this.b))},
$S:0}
C.dGl.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bI(0,B.c_)},
$S:0}
C.dNq.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+B.cO.gcs().aF(this.c)},
$S:0}
C.dNr.prototype={
$0(){return A.iE(this.a,null)},
$S:0}
C.dNm.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=A.m(14),s=u?B.c.j(0.1):B.K,r=A.H(u?D.ew.j(0.5):B.K,B.r,1),q=A.V(e,u?D.ew:B.aA,w,w,w,20)
return A.D(A.aH(w,A.di(w,A.B(A.a([q,B.bq,A.d(f,w,w,w,w,w,w,A.l(w,w,u?B.c:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.b6,B.j,0,w,w),w,w,B.b8,new A.o(s,w,r,t,w,w,B.n),B.Y,w,46,w,w,w,w,w),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dNo(v,d),w,w,w,w,w,w,!1,B.ae),1)},
$S:1647}
C.dNo.prototype={
$0(){var w=this.a
return w.n(new C.dNn(w,this.b))},
$S:0}
C.dNn.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dNp.prototype={
$0(){var w=this.a,v=w.d===B.ka?"Cash App tag":"Bitcoin address"
return w.Hs(this.b,v)},
$S:0}
C.dNl.prototype={
$0(){var w=this.a
return w.Hs(w.gaoq(),"Code")},
$S:0}
C.c4f.prototype={
$1(d){return C.hgI(A.Z(d,x.N,x.z))},
$S:z+20}
C.c4g.prototype={
$2(d,e){return d.c.aI(0,e.c)},
$S:z+6}
C.c4c.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.c4d.prototype={
$2(d,e){return d.c.aI(0,e.c)},
$S:z+6}
C.c4e.prototype={
$1(d){return d.ac()},
$S:z+23}
C.c4h.prototype={
$1(d){var w=d.c
return!w.cY(this.a.bN(-36e8))&&!w.c8(this.b)},
$S:z+7}
C.bXF.prototype={
$1(d){return C.hgJ(A.Z(d,x.N,x.z))},
$S:z+24}
C.bXG.prototype={
$2(d,e){return e.b.aI(0,d.b)},
$S:z+8}
C.bXD.prototype={
$1(d){return d.ac()},
$S:z+26}
C.bXE.prototype={
$2(d,e){return e.b.aI(0,d.b)},
$S:z+8}
C.bXI.prototype={
$1(d){var w=d.b
return!w.cY(this.a)&&!w.c8(this.b)},
$S:z+27}
C.c4o.prototype={
$1(d){return d.ac()},
$S:z+28}
C.c4n.prototype={
$1(d){return C.fRa(A.Z(x.f.a(d),x.N,x.z))},
$S:z+29}
C.c4m.prototype={
$1(d){return d.ac()},
$S:z+30}
C.c4l.prototype={
$1(d){return C.hk9(A.Z(x.f.a(d),x.N,x.z))},
$S:z+31}
C.c4q.prototype={
$1(d){return C.hk8(A.Z(x.f.a(d),x.N,x.z))},
$S:z+32}
C.c4r.prototype={
$2(d,e){return B.o.aI(d.f,e.f)},
$S:z+2}
C.c4s.prototype={
$1(d){return d.ac()},
$S:z+34}
C.dR5.prototype={
$1(d){return d.b6z(A.bj(d.e,!0,x.u))},
$S:z+36}
C.dR6.prototype={
$2(d,e){return B.o.aI(d.f,e.f)},
$S:z+2}
C.dR_.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dR0.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dQJ.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.J(w,this.b)},
$S:0}
C.dQK.prototype={
$1(d){return new C.NH(this.a,null)},
$S:z+9}
C.dQL.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=B.d.bi(t,new C.dQI(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){B.d.cu(u.d,w)
u.HC()}},
$S:0}
C.dQI.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dQX.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(A.E(["role","admin","text",this.b],w,w))},
$S:0}
C.dQY.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(A.E(["role","ai","text",v],t,t))}else{v=t.d
v===$&&A.c()
t.d=C.hJN(v,w[0],w[3])
t.HC()
t=w[2]
if(t==null)t="Created "+J.a9(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(A.E(["role","ai","text",t],w,w))}},
$S:0}
C.dQZ.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=B.d.gcV(v).Q
v.toString
w.hP(v)}},
$S:8}
C.dQR.prototype={
$1(d){return new C.NH(this.a,null)},
$S:z+9}
C.dQS.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dQQ.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cu(w,this.b)},
$S:0}
C.dQW.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&A.c()
v=B.d.cu(w,s)
B.d.ck(t.d,u.a,v)
t.HC()},
$S:0}
C.dQV.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
return new C.YR(u[w],new C.dQU(v,w),null)},
$S:z+59}
C.dQU.prototype={
$1(d){var w=this.a
return w.n(new C.dQT(w,this.b,d))},
$S:z+40}
C.dQT.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dQN.prototype={
$0(){var w=this.a
return w.n(new C.dQM(w))},
$S:0}
C.dQM.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dQO.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?B.cp:B.aI
return new A.C(B.fo,A.d(t+": "+A.t(s),w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?B.a4:B.cq,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:110}
C.dQP.prototype={
$1(d){return this.a.a_3()},
$S:2}
C.dR4.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.re:B.c
u=A.m(16)
t=A.m(16)
s=l?B.aI:B.aJ
r=w.d
q=A.aY(r).j(0.15)
p=A.m(12)
q=A.p(n,A.V(B.agb,l?B.bK:B.ai,n,n,n,20),B.h,n,n,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.bR,n,n,n)
p=A.aY(r).j(0.12)
o=A.m(8)
o=A.p(n,A.V(w.c,A.aY(r),n,n,n,18),B.h,n,n,new A.o(p,n,n,o,n,n,B.n),n,n,n,n,B.hj,n,n,n)
r=A.B(A.a([o,B.aw,A.D(A.d(w.b,n,n,n,n,n,n,A.l(n,n,l?B.aN:B.M,n,n,n,n,n,n,n,n,n,n,n,B.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),B.m,n,B.e,B.j,0,n,n)
p=w.e.length
return new A.C(B.d8,A.aD(!1,B.Y,!0,u,A.dK(!1,n,n,n,!0,n,n,n,!0,n,new H.arE(q,e,!0,n),n,n,n,n,new C.dR1(m,e),!1,n,n,new A.b5(t,new A.ay(s,1,B.r,-1)),n,n,A.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,A.l(n,n,l?B.bK:B.ai,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,A.AK(n,n,n,new C.dR2(),B.J,new C.dR3(m,e),B.ch,n,x.N),n),B.h,v,0,n,n,n,n,n,B.ac),new A.cx(w.a,x.W))},
$S:110}
C.dR3.prototype={
$1(d){var w=this
if(d==="edit")w.a.a7F(w.b)
if(d==="questions")w.a.WD(w.b)
if(d==="delete")w.a.bEg(w.b)},
$S:2}
C.dR2.prototype={
$1(d){return D.ctZ},
$S:127}
C.dR1.prototype={
$0(){return this.a.WD(this.b)},
$S:0}
C.cFi.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q===$&&A.c()
w=d.a===q.a
if(w){q=r.f
q===$&&A.c()
q=A.aY(q).j(0.2)}else q=B.cT.j(0.1)
v=A.m(10)
if(w){u=r.f
u===$&&A.c()
u=A.aY(u)}else u=B.K
u=A.H(u,B.r,1)
t=r.f
t===$&&A.c()
return A.aI(!1,s,!0,A.p(s,A.V(d,A.aY(t),s,s,s,s),B.h,s,s,new A.o(q,s,u,v,s,s,B.n),s,s,s,s,B.ch,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cFh(r,d),s,s,s,s,s,s,s)},
$S:1648}
C.cFh.prototype={
$0(){var w=this.a
return w.n(new C.cFf(w,this.b))},
$S:0}
C.cFf.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cFj.prototype={
$1(d){var w=null,v=this.a,u=A.aY(d),t=v.f
t===$&&A.c()
return A.aH(w,A.hi(u,w,t===d?D.bAi:w,w,14),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cFg(v,d),w,w,w,w,w,w,!1,B.ae)},
$S:441}
C.cFg.prototype={
$0(){var w=this.a
return w.n(new C.cFe(w,this.b))},
$S:0}
C.cFe.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cFk.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.cFl.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=B.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&A.c()
v=v.f
v===$&&A.c()
t=u.czP(v,w,t)
A.a8(this.b,!1).M(t)
return null},
$S:0}
C.eAZ.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return w.push(this.b)},
$S:0}
C.eB_.prototype={
$1(d){return new C.YQ(this.a,null)},
$S:z+41}
C.eB5.prototype={
$2(d,e){return B.P},
$S:35}
C.eB4.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.re:B.c
u=A.m(14)
t=A.m(14)
s=l?B.aI:B.aJ
r=w.d
if(r!=null&&r.length!==0){q=A.m(8)
r=A.bu(q,K.aMl(n,B.bO,36,B.p2,l?B.bK:B.ai,r,48),B.ap)}else r=A.V(D.X6,A.aY(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=A.d(q,n,2,B.a2,n,n,n,A.l(n,n,l?B.aN:B.M,n,n,n,n,n,n,n,n,n,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.a9(w.c)
o=w.e?" \xb7 Printable":""
return A.aD(!1,B.Y,!0,u,A.dK(!1,n,n,n,!0,n,n,n,!0,n,r,n,n,n,n,new C.eB2(m,w,e),!1,n,n,new A.b5(t,new A.ay(s,1,B.r,-1)),n,n,A.d(""+p+" block(s)"+o,n,n,n,n,n,n,A.l(n,n,l?B.bK:B.ai,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,A.aF(n,n,n,n,D.byJ,n,n,n,new C.eB3(m,e),n,n,n,n,n,n),n),B.h,v,0,n,n,n,n,n,B.ac)},
$S:74}
C.eB3.prototype={
$0(){var w=this.a
w.n(new C.eB0(w,this.b))
w.atC()},
$S:0}
C.eB0.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cu(w,this.b)},
$S:0}
C.eB2.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.aWf(u.b),$async$$0)
case 2:s=e
if(s!=null){t.n(new C.eB1(t,u.c,s))
t.atC()}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eB1.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eAV.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eAT.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
return new C.Tp(w,"Answer Document",null)},
$S:z+42}
C.eAU.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eAX.prototype={
$0(){var w,v,u=this.a,t=u.a.c,s=u.d
s===$&&A.c()
s=B.a.i(s.a.a)
w=u.e
w===$&&A.c()
v=u.f
u=u.r
if(v==null)v=t.d
A.a8(this.b,!1).M(new C.i9(t.a,s,w,v,u,t.f))
return null},
$S:0}
C.eAY.prototype={
$1(d){var w=this.a
return w.n(new C.eAW(w,d))},
$S:9}
C.eAW.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.c4i.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fj0.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dRG.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.dRm.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,new C.ll("image","",this.b,null))},
$S:0}
C.dRr.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,new C.ll("video","","data:video/mp4;base64,"+B.cO.gcs().aF(this.b),null))},
$S:0}
C.dRp.prototype={
$1(d){var w=null,v=x.p,u=A.u(A.a([A.aK(w,B.U,!1,w,!0,B.q,w,A.aL(),this.a,w,w,w,w,w,2,D.bEw,B.z,!0,w,!0,w,!1,w,B.ag,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a6,w,B.am,w,w,w,w),A.aK(w,B.U,!1,w,!0,B.q,w,A.aL(),this.b,w,w,w,w,w,2,D.bEv,B.z,!0,w,!0,w,!1,w,B.ag,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a6,w,B.am,w,w,w,w)],v),B.m,w,B.e,B.R,0,B.p)
return A.eo(A.a([A.bI(!1,B.df,w,w,!0,w,w,new C.dRn(d),w,w),A.bK(D.f_n,new C.dRo(d),w)],v),w,w,w,u,w,w,w,w,D.eOl,w)},
$S:20}
C.dRn.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dRo.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.dRq.prototype={
$0(){var w,v=this.a.e
v===$&&A.c()
w=B.a.i(this.b.a.a)
return B.d.J(v,new C.ll("link","",B.a.i(this.c.a.a),w))},
$S:0}
C.dRi.prototype={
$1(d){return B.a.i(d)},
$S:13}
C.dRj.prototype={
$1(d){return d.length!==0},
$S:3}
C.dRk.prototype={
$1(d){return B.a.i(B.a.e1(d,A.ae("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.dRl.prototype={
$1(d){return d.length!==0},
$S:3}
C.dRw.prototype={
$0(){var w=this.a.bxI()
A.a8(this.b,!1).M(w)
return null},
$S:0}
C.dRx.prototype={
$0(){return this.a.atD("**","**")},
$S:0}
C.dRy.prototype={
$0(){return this.a.atD("*","*")},
$S:0}
C.dRz.prototype={
$0(){return this.a.atD("__","__")},
$S:0}
C.dRA.prototype={
$0(){return this.a.aUv("## Section title")},
$S:0}
C.dRB.prototype={
$0(){return this.a.aUv("\u2022 First point\n\u2022 Second point")},
$S:0}
C.dRC.prototype={
$0(){},
$S:0}
C.dRD.prototype={
$0(){var w=this.a
w.n(new C.dRv(w))},
$S:0}
C.dRv.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,D.dhY)},
$S:0}
C.dRE.prototype={
$0(){var w=this.a
w.n(new C.dRu(w))},
$S:0}
C.dRu.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,D.dhZ)},
$S:0}
C.dRF.prototype={
$1(d){var w,v,u=null,t=d.b,s=t.a
A:{if("image"===s){w="Image"
break A}if("video"===s){w="Video"
break A}if("link"===s){w=t.d
if(w==null)w="Link"
break A}if("signature"===s){w="Signature"
break A}w=s
break A}v=this.b.a
w=A.d(w,u,u,u,u,u,u,A.l(u,u,v?B.ih:B.aG,u,u,u,u,u,u,u,u,11,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
v=v?B.cV:B.iV
return A.Ca(u,v,B.aiq,w,u,new C.dRt(this.a,d),u)},
$S:z+45}
C.dRt.prototype={
$0(){var w=this.a
return w.n(new C.dRs(w,this.b))},
$S:0}
C.dRs.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.cu(w,this.b.a)},
$S:0}
C.dRf.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.aN3},
$S:0}
C.dRg.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.fft},
$S:0}
C.dR7.prototype={
$0(){var w=this.a
w.d=D.aN2
w.f=w.e=null},
$S:0}
C.dR8.prototype={
$0(){var w=this.a
w.d=D.aN3
w.f=null},
$S:0}
C.dRh.prototype={
$2(d,e){return B.o.aI(d.f,e.f)},
$S:z+2}
C.dRa.prototype={
$2(d,e){var w=this.a,v=w.gb0O()[e]
return new C.a9y(v,this.b,new C.dR9(w,v),null)},
$S:z+46}
C.dR9.prototype={
$0(){return this.a.c_w(this.b.a)},
$S:0}
C.dRc.prototype={
$2(d,e){return B.o.aI(d.f,e.f)},
$S:z+47}
C.dRe.prototype={
$2(d,e){return B.T},
$S:35}
C.dRd.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.re:B.c,p=A.m(16),o=A.m(16),n=A.m(16),m=A.H(r?B.aI:B.aJ,B.r,1),l=A.a([new A.aa(0,B.G,B.x.j(r?0.28:0.06),B.dH,8)],x.V),k=A.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=A.m(10)
v=A.m(10)
k.push(A.bu(w,K.aMl(v,B.bO,52,D.X6,r?B.bK:B.ai,j,52),B.ap))}else{j=u.d.d
w=A.aY(j).j(0.15)
v=A.m(12)
k.push(A.p(t,A.V(D.X6,A.aY(j),t,t,t,24),B.h,t,t,new A.o(w,t,t,v,t,t,B.n),t,52,t,t,t,t,t,52))}k.push(B.bc)
k.push(A.D(A.d(s.b,t,t,t,t,t,t,A.l(t,t,r?B.aN:B.M,t,t,t,t,t,t,t,t,13,t,t,B.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(A.V(B.ek,r?B.bK:B.ai,t,t,t,22))
return A.aD(!1,B.Y,!0,p,A.aI(!1,o,!0,A.p(t,A.B(k,B.m,t,B.e,B.j,0,t,t),B.h,t,t,new A.o(t,t,m,n,l,t,B.n),t,t,t,t,B.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dRb(u.a,s),t,t,t,t,t,t,t),B.h,q,0,t,t,t,t,t,B.ac)},
$S:74}
C.dRb.prototype={
$0(){return this.a.c68(this.b)},
$S:0}
C.c4k.prototype={
$1(d){return new C.a9q(d,this.a,null)},
$S:z+48}
C.cyZ.prototype={
$0(){var w=this.a.c,v=w.c,u=A.o3(v==null?w.b:v)
if(u!=null)A.iI(u,B.fc,null)},
$S:0}
C.cz_.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.cz0.prototype={
$1(d){var w=null,v=this.a.d.a,u=A.d("\u2022  ",w,w,w,w,w,w,A.l(w,w,v?B.cp:B.aI,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=B.a.i(d)
return new A.C(B.o5,A.B(A.a([u,A.D(A.d(t,w,w,w,w,w,w,A.l(w,w,v?B.cp:B.aI,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.F,w,B.e,B.j,0,w,w),w)},
$S:128}
C.d8Q.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d8S.prototype={
$0(){return this.a.n(new C.d8R(this.b))},
$S:0}
C.d8R.prototype={
$0(){var w=this.a
return w.a.f?w.fT(0):w.p7(0)},
$S:0}
C.f1V.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.dRU.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.B7)w.z=v
else w.Q=v},
$S:0}
C.dRL.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=B.d.gcV(v).Q
v.toString
w.lE(v,B.co,B.eS)},
$S:8}
C.dRN.prototype={
$1(d){return J.q(d,"role")==="ai"},
$S:89}
C.dRO.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.E(["role","user","text",this.b],v,v))
w.d.bI(0,B.c_)
w.r=!0},
$S:0}
C.dRP.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.E(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.dRQ.prototype={
$1(d){var w=J.a6(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+A.t(w.h(d,"text"))},
$S:151}
C.dRR.prototype={
$0(){var w=x.N
return this.a.f.push(A.E(["role","ai","text",this.b],w,w))},
$S:0}
C.dRS.prototype={
$0(){var w=x.N
return this.a.f.push(A.E(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.dRT.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dRM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=A.mk(l,B.bz.j(0.9),l,l,l,l,l,2,l,l)
return new A.C(B.c2,A.B(A.a([new A.a3(22,22,k,l),B.aw,A.d("Writing full song\u2026",l,l,l,l,l,l,A.l(l,l,this.b?B.aA:B.dw,l,l,l,l,l,l,l,l,12,B.cx,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),B.m,l,B.e,B.j,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?B.a7:B.a3
k=k.c
k.toString
k=A.aG(k,B.bP,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new A.a7(B.a3,B.a7,B.w,A.a([B.aB,B.bz.j(0.85)],x.O),l,l)
else{q=x.O
q=new A.a7(B.a3,B.a7,B.w,v?A.a([B.bi,B.M],q):A.a([B.c,B.aN],q),l,l)}p=A.a([new A.aa(0,B.G,(u?B.bz:B.aB).j(0.22),B.j6,14)],x.V)
o=A.H(B.c.j(u?0.2:0.08),B.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=B.c
else v=v?B.aJ:B.bh
n=u?13.5:15
m=u?B.bg:B.cx
return new A.bG(t,l,l,A.p(l,A.d(w,l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?B.a4:B.cq,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),B.h,l,new A.aX(0,k.a.a*0.94,0,1/0),new A.o(l,l,o,new A.bv(B.jP,B.jP,new A.b3(s,s),new A.b3(r,r)),p,q,B.n),l,l,l,B.ku,B.iJ,l,l,l),l)},
$S:42}
C.dS0.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&A.c()
w=m.x
w===$&&A.c()
v=A.m(22)
u=this.b
t=x.O
s=u?A.a([D.a8W,B.M,B.na],t):A.a([B.q2,B.pX,B.oN],t)
w=A.a([new A.aa(-4,B.G,B.aB.j(0.35+w*0.25),B.dm,28)],x.V)
r=A.H(B.c.j(u?0.08:0.5),B.r,1)
q=A.dh()
p=q.a
p.$flags&2&&A.ah(p)
p[11]=0.001
m=m.x
m===$&&A.c()
q.fk(m*0.08)
q=A.fn(B.A,A.p(o,D.bvu,B.h,o,o,new A.o(o,o,A.H(B.aL.j(0.6),B.r,2),o,o,D.dUD,B.a5),o,44,o,o,o,o,o,44),o,q,!0)
m=A.np(B.ja,D.f3x,new C.dRY())
p=x.p
m=A.a([A.B(A.a([q,B.bc,A.D(A.u(A.a([m,A.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,A.l(o,o,u?B.aQ:B.aV,o,o,o,o,o,o,o,o,10,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),B.F,o,B.e,B.j,0,B.p),1)],p),B.m,o,B.e,B.j,0,o,o),B.ab,A.B(A.a([n.as3(D.B7,"Swahili","\ud83c\uddf9\ud83c\uddff",u),B.aa,n.as3(D.aAj,"English","\ud83c\uddec\ud83c\udde7",u),B.aa,n.as3(D.B8,"Mix","\ud83d\udd25",u)],p),B.m,o,B.e,B.j,0,o,o)],p)
if(n.x!==D.B8){t=A.a([B.P,n.coq(u)],p)
if(n.w){q=n.x===D.B7?D.a_Q:D.a_6
p=A.U(q).k("J<1,r>")
q=A.z(new A.J(q,new C.dRZ(n,u),p),p.k("ai.E"))
t.push(new A.C(B.kw,A.c8(B.bH,q,B.bx,6,6),o))}B.d.v(m,t)}else{t=A.a([B.bz.j(0.22),B.aB.j(0.12)],t)
q=A.m(12)
p=A.H(B.bz.j(0.45),B.r,1)
m.push(new A.C(B.kw,A.p(o,A.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,A.l(o,o,u?B.ib:B.lg,o,o,o,o,o,o,o,o,10,o,o,B.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),B.h,o,o,new A.o(o,o,p,q,o,new A.a7(B.a3,B.a7,B.w,t,o,o),B.n),o,o,o,o,B.bR,o,o,o),o))}m.push(B.P)
t=x.dc
n=A.z(new A.J(D.cPU,new C.dS_(n,u),t),t.k("ai.E"))
m.push(A.B(n,B.m,o,B.e,B.j,0,o,o))
return A.p(o,A.u(m,B.af,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(o,o,r,v,w,new A.a7(B.ax,B.aC,B.w,s,o,o),B.n),o,o,o,I.acA,I.acP,o,o,o)},
$S:90}
C.dRY.prototype={
$1(d){return D.bI4.az(0,d)},
$S:65}
C.dRZ.prototype={
$1(d){return this.a.cor(d,this.b)},
$S:z+49}
C.dS_.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aAl?6:0,m=o?5:0,l=A.m(12)
if(o){w=this.b
v=w?B.aB.j(0.45):B.aB.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=B.x.j(w?0.25:0.05)
u=v
v=w
w=u}t=A.m(12)
p=p.r?q:new C.dRX(p,d)
s=C.hlC(d)
if(o)r=B.c
else r=v?B.al:B.bh
r=A.d(s,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.hlD(d)
if(o)v=B.al
else v=v?B.c1:B.dw
return A.D(new A.C(new A.M(0,0,n,0),A.aD(!1,B.Y,!0,l,A.aI(!1,t,!0,new A.C(F.V7,A.u(A.a([r,A.d(s,q,q,q,q,q,q,A.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.e,B.j,0,B.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.h,w,m,q,q,q,q,q,B.ac),q),1)},
$S:z+50}
C.dRX.prototype={
$0(){var w=this.a
return w.n(new C.dRW(w,this.b))},
$S:0}
C.dRW.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dS2.prototype={
$0(){var w=this.a
return w.n(new C.dS1(w))},
$S:0}
C.dS1.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dRK.prototype={
$0(){var w=this.a
return w.n(new C.dRJ(w,this.b))},
$S:0}
C.dRJ.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.B8
if(v===D.aAj&&w.Q==null)w.Q=B.d.gK(D.a_6).a},
$S:0}
C.dS3.prototype={
$0(){return this.a.ckc(this.b.a)},
$S:0}
C.dRV.prototype={
$0(){return this.a.Ht(this.b)},
$S:0}
C.dRH.prototype={
$1(d){return this.a.aUw()},
$S:2}
C.dRI.prototype={
$0(){return this.a.aUw()},
$S:0}
C.fuR.prototype={
$1(d){var w=this
return new C.XA(w.a,w.b,w.c,new C.fuQ(w.d),null)},
$S:z+51}
C.fuQ.prototype={
$0(){return J.lE(this.a.b8())},
$S:0}
C.d6p.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.bbh()},
$S:28}
C.d6q.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a.f
m===$&&A.c()
m=m.x
m===$&&A.c()
w=this.b
v=m*3.141592653589793*2+w*0.55
m=this.c
u=x.w
t=A.aG(m,B.bP,u).w
s=Math.cos(v)
u=A.aG(m,B.bP,u).w
m=Math.sin(v*1.3)
r=Math.sin(v)
q=(w&1)===0
p=q?B.dP:B.hk
o=B.o.H(w,4)
q=q?B.aX:B.aK
return A.an(n,A.d7(A.V(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:331}
C.d6v.prototype={
$0(){},
$S:0}
C.d6u.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&A.c()
w=t.x
w===$&&A.c()
v=B.nO.av(0,B.k.D(w,0,1))
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793)
w=A.dh()
u=w.a
u.$flags&2&&A.ah(u)
u[11]=0.0028
w.fk(t*0.08)
w.jx(0.12)
return A.e5(B.A,A.fn(B.A,e,null,w,!0),0.5+v*0.5,null,null)},
$S:44}
C.d6r.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=0.55+r*0.45
r=A.p(t,t,B.h,t,t,new A.o(t,t,t,t,A.a([new A.aa(6,B.G,B.aX.j(w*0.5),B.J,36)],x.V),t,B.a5),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new A.am(B.A,t,B.a9,B.q,A.a([r,new A.a3(96,96,A.mk(B.c.j(0.08),B.aX,t,t,t,t,t,6,u/v,t),t),A.d(""+s.a.c,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,38,t,t,B.u,t,t,!0,t,t,t,t,t,A.a([new A.cJ(B.aX.j(w),B.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:108}
C.d6s.prototype={
$1(d){return D.bI8.az(0,d)},
$S:65}
C.d6t.prototype={
$0(){var w=this.a
w.a.bbh()
w.a.e.$0()},
$S:0}
C.c6i.prototype={
$1(d){var w=!1
if(B.a.i(d.b.toLowerCase())===this.a)if(d.d===B.fj)if(d.x===B.dn){w=d.w
w=B.a.i(w==null?"":w)===this.b}return w},
$S:16}
C.c6v.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e0u.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.e1a.prototype={
$1(d){var w=this.a
if(w.c!=null)w.NY()},
$S:8}
C.e1b.prototype={
$1(d){var w=$.aT.p2$
if(w===B.r0||w===B.r1)return
this.a.Dr()},
$S:14}
C.e1c.prototype={
$1(d){this.a.cqw()},
$S:14}
C.e0T.prototype={
$0(){this.a.HX(this.b.d,!1)},
$S:0}
C.e0U.prototype={
$0(){},
$S:0}
C.e0V.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.e0W.prototype={
$0(){},
$S:0}
C.e0X.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e0Y.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.e0Z.prototype={
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
C.e0O.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=A.bj(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=A.bj(v[1],!0,x.N)
w.Nn()
w.a5S()},
$S:0}
C.e0v.prototype={
$0(){this.b.HX(this.c.d+this.a.a,!1)},
$S:0}
C.e0P.prototype={
$1(d){var w=d.d
return(w===B.fj||w===B.eC)&&d.x===B.dn},
$S:16}
C.e0Q.prototype={
$1(d){return d.a},
$S:155}
C.e0R.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e0S.prototype={
$0(){},
$S:0}
C.e0z.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bj(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=A.bj(v[0],!0,x.N)},
$S:0}
C.e0A.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.e0I.prototype={
$0(){},
$S:0}
C.e0F.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.e0G.prototype={
$0(){var w=this.a,v=A.z(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e0H.prototype={
$0(){var w=this.a,v=A.z(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e0J.prototype={
$0(){return this.a.z=!0},
$S:0}
C.e0K.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new A.uI(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.e0L.prototype={
$0(){return this.a.z=!1},
$S:0}
C.e0N.prototype={
$0(){var w=this.a
return w.n(new C.e0M(w))},
$S:0}
C.e0M.prototype={
$0(){return this.a.y=1},
$S:0}
C.e0B.prototype={
$0(){return this.a.y=1},
$S:0}
C.e0C.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.e12.prototype={
$1(d){return d.a.length===0},
$S:16}
C.e13.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:71}
C.e17.prototype={
$0(){var w=this.a
return w.n(new C.e10(w))},
$S:0}
C.e10.prototype={
$0(){return this.a.y=1},
$S:0}
C.e18.prototype={
$0(){var w=this.a
return w.n(new C.e1_(w))},
$S:0}
C.e1_.prototype={
$0(){return this.a.y=2},
$S:0}
C.e19.prototype={
$0(){return A.iE(this.a,null)},
$S:0}
C.e14.prototype={
$2$cloudRequest(d,e){return this.a.aVA(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1650}
C.e15.prototype={
$0(){return this.a.Dr()},
$S:1}
C.e16.prototype={
$0(){var w=this.a
return w.n(new C.e11(w))},
$S:0}
C.e11.prototype={
$0(){var w=this.a
return w.y=B.o.D(w.y-1,0,2)},
$S:0}
C.e0y.prototype={
$0(){A.eG()
var w=this.a
w.n(new C.e0x(w))},
$S:0}
C.e0x.prototype={
$0(){return this.a.y=0},
$S:0}
C.e0w.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=A.bAE(A.p(t,t,B.h,t,t,new A.o(t,t,A.H(B.c.j(0.55),B.r,1.2),t,A.a([new A.aa(1,B.G,B.au.j(0.55),B.J,18)],x.V),D.bGd,B.a5),t,t,t,t,t,t,t,t),B.ex,B.rD,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=A.a([],w)
for(u=0;u<3;++u)v.push(r.bX5(u))
return new A.am(B.W,t,B.a9,B.q,A.a([q,A.B(v,B.m,t,B.e,B.j,0,t,t)],w),t)},
$S:61}
C.e0E.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
A.eG()
w.n(new C.e0D(w,v))},
$S:0}
C.e0D.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.daD.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===B.fj||v===B.eC)return!0
if(d.c!==0)v=B.a.t(w,"clock-in daily earnings")||B.a.t(w,"clock-in earnings")
else v=!1
return v},
$S:16}
C.daE.prototype={
$1(d){return new A.Q(Date.now(),0,!1)},
$S:658}
C.daF.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new A.Q(Date.now(),0,!1)
u=A.dw(C.fBE(v.c,u))
w=this.c?new C.daC(v):null
return v.b2A(this.b,B.pb,D.ew,w,"Today","$"+u,D.ew)},
$S:1652}
C.daC.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.daG.prototype={
$2(d,e){var w=this.a
return w.b2A(this.b,B.jG,B.cb,w.w,"Balance","$"+A.dw(A.Jt(w.c.a,new C.daB(w))),B.cF)},
$S:59}
C.daB.prototype={
$0(){return this.a.c.d},
$S:77}
C.daw.prototype={
$0(){this.a.a.cHg()
return null},
$S:0}
C.dax.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b1(w,w,w,new C.brj(v,w),B.at)},
$S:70}
C.day.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b7D(v,!0,B.au,D.nT,w)}else{v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b7C(v,D.nT,w)}return A.b1(w,w,w,v,B.at)},
$S:70}
C.daz.prototype={
$1(d){return new A.Q(Date.now(),0,!1)},
$S:658}
C.daA.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new A.Q(Date.now(),0,!1)
w=r.a
v=w.a.cG5(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:B.k.D(v/u,0,1)}u=w.d
u===$&&A.c()
s=w.e
s===$&&A.c()
return A.c4(new A.h3(A.a([u,s],x.U)),new C.dav(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1653}
C.dav.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=A.a([],m),k=o.b
if(k)B.d.v(l,A.ii(7,new C.dau(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&A.c()
v=v.x
v===$&&A.c()
u=o.d
l.push(A.b1(n,n,n,new C.b7B(o.c,v,k,u,D.nT,D.baq,n),D.eqy))
v=A.H(B.c.j(0.1),B.r,1.2)
if(k)t=B.uB
else t=o.e?B.ut:D.bqI
t=A.V(t,k?D.nT:B.bd,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=A.d(s,n,n,n,n,n,n,A.l(n,n,B.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,B.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+A.dw(w.f&&w.d>0?w.d:o.f)}q=k?D.nT:B.c
w=A.d(w,n,n,n,n,n,n,A.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,B.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=A.m(999)
p=u.j(0.16)
u=A.H(u.j(0.5),B.r,1)
l.push(A.p(n,A.u(A.a([t,B.ar,s,B.av,w,B.P,A.p(n,A.d(o.r,n,n,n,n,n,n,A.l(n,n,k?D.nT:B.nY,n,n,n,n,n,n,n,n,9,n,n,B.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),B.h,n,n,new A.o(p,n,u,q,n,n,B.n),n,n,n,n,B.kx,n,n,n)],m),B.m,n,B.b6,B.j,0,B.p),B.h,n,n,new A.o(B.K,n,v,n,n,n,B.a5),n,176,n,n,n,n,n,176))
return A.at(new A.a3(276,276,new A.am(B.A,n,B.a9,B.h,l,n),n),n,n,n)},
$S:202}
C.dau.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=B.k.H(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=B.o.H(d,3)
t=B.o.H(d,2)
return A.an(s,A.e1(A.d7(A.p(s,s,B.h,s,s,new A.o(s,s,s,A.m(40),s,new A.bR(B.A,0.5,B.w,s,0,A.a([D.nT.j(0.38),B.c.j(0.08),B.K],x.O),s,s),B.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),!0,s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:228}
C.daX.prototype={
$0(){},
$S:0}
C.daY.prototype={
$0(){},
$S:0}
C.daZ.prototype={
$1(d){return d.x===B.dn},
$S:16}
C.daJ.prototype={
$0(){return this.a.a.d.d},
$S:77}
C.daI.prototype={
$0(){var w,v
A.eG()
w=this.a
v=this.b
w.n(new C.daH(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)A.f7(null,x.H)}},
$S:0}
C.daH.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.daU.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=A.m(12),q=s?w.b.j(0.18):B.c.j(0.04),p=A.H(s?w.b.j(0.7):B.c.j(0.08),B.r,1)
return A.D(new A.C(B.k2,A.aH(v,A.di(B.A,A.d("$"+t,v,v,v,v,v,v,A.l(v,v,s?w.b:B.al,v,v,v,v,v,v,v,v,13,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,B.b8,new A.o(q,v,p,r,v,v,B.n),B.hP,v,38,v,v,v,v,v),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.daW(u,d),v,v,v,v,v,v,!1,B.ae),v),1)},
$S:1655}
C.daW.prototype={
$0(){A.eG()
var w=this.a
w.n(new C.daV(w,this.b))},
$S:0}
C.daV.prototype={
$0(){var w=""+this.b
this.a.d.saS(0,w)
return w},
$S:0}
C.daT.prototype={
$4$bold$color(d,e,f,g){var w=null,v=A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?B.c:g,t=f?15:13
return new A.C(B.JP,A.B(A.a([v,B.b7,A.d(e,w,w,w,w,w,w,A.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?B.u:B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1656}
C.daS.prototype={
$1(d){return this.a.n(new C.daR())},
$S:2}
C.daR.prototype={
$0(){},
$S:0}
C.daM.prototype={
$1(d){return this.a.aRy(d)&&!A.fIY(d)},
$S:16}
C.daN.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:71}
C.daO.prototype={
$0(){return this.a.a.d.d},
$S:77}
C.daP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return A.b(x.r.b(s)?s:A.dQ(s,x.H),$async$$0)
case 2:if(t.c!=null)t.n(new C.daL())
t.lA("Balance refreshed.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.daL.prototype={
$0(){},
$S:0}
C.daQ.prototype={
$0(){var w=this.a
return w.n(new C.daK(w))},
$S:0}
C.daK.prototype={
$0(){return this.a.r+=80},
$S:0}
C.ff_.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:71}
C.f9D.prototype={
$1(d){var w=J.a6(d),v=w.h(d,"toEmail"),u=!1
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.y(v,this.b)){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fpn.prototype={
$1(d){var w=J.a6(d),v=w.h(d,"toEmail")
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.f9C.prototype={
$1(d){var w,v,u
if(!C.hGE(d,this.a))return!1
w=J.a6(d)
v=w.h(d,"sessionUpdatedAt")
v=A.bh(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=A.bh(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=A.bh(J.k(w==null?"":w))}if(u!=null&&B.o.aj(new A.Q(Date.now(),0,!1).bv(u).a,36e8)>72)return!1
return!0},
$S:4}
C.f_A.prototype={
$1(d){var w=this.a
if(B.o.H(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:86}
C.fob.prototype={
$0(){return $.fGD=null},
$S:11}
C.foc.prototype={
$1(d){return A.Z(d,x.N,x.z)},
$S:7}
C.fm6.prototype={
$1(d){return A.Z(d,x.N,x.z)},
$S:7}
C.fm7.prototype={
$0(){var w,v=this.a
$.fGr.W(0,v)
w=C.tk(this.b,v)
if(w!=null)A.P0(A.a([A.Z(w,x.N,x.z)],x._),v)},
$S:0}
C.fqk.prototype={
$1(d){return new C.Yn(this.a,this.b,null)},
$S:z+56}
C.dVZ.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.dW1.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.dW2.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.n(new C.dW0(w))},
$S:2}
C.dW0.prototype={
$0(){return this.a.f=""},
$S:0}
C.dW3.prototype={
$1(d){return this.a.aUL()},
$S:2}
C.dW4.prototype={
$0(){var w=this.a
return w.n(new C.dW_(w,this.b))},
$S:0}
C.dW_.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f8O.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+B.a.aW(d,1)},
$S:13}
C.f8N.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+B.a.aW(d,1)},
$S:13}
C.fot.prototype={
$1(d){var w,v=x.f
if(v.b(d))return A.Z(d,x.N,x.z)
try{v=A.Z(v.a(d.ac()),x.N,x.z)
return v}catch(w){return A.S(x.N,x.z)}},
$S:12}
C.fou.prototype={
$1(d){return J.ct(d)},
$S:4}
C.fio.prototype={
$1(d){return d.a!=="send_email"},
$S:289}
C.fnU.prototype={
$1(d){var w=null,v=B.x.j(0.35),u=A.m(10),t=A.H(B.bf,B.r,1)
return A.p(B.A,A.d(d,w,w,w,w,w,w,B.j8,w,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,86,w,B.eX,w,w,w,72)},
$S:660}
C.c83.prototype={
$1(d){return J.k(d)},
$S:17}
C.c84.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b4(d,new C.c82(),x.S)
w=A.z(w,w.$ti.k("ai.E"))
return w}return A.bY(7,0,!1,x.S)},
$S:661}
C.c82.prototype={
$1(d){var w
if(A.ix(d))w=d
else{w=A.c3(J.k(d),null)
if(w==null)w=0}return w},
$S:401}
C.c85.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b4(d,new C.c81(),x.S)
w=A.z(w,w.$ti.k("ai.E"))
return w}return A.bY(8,0,!1,x.S)},
$S:661}
C.c81.prototype={
$1(d){var w
if(A.ix(d))w=d
else{w=A.c3(J.k(d),null)
if(w==null)w=0}return w},
$S:401}
C.c87.prototype={
$1(d){return A.bj(d,!0,x.S)},
$S:662}
C.c88.prototype={
$1(d){return A.bj(d,!0,x.S)},
$S:662}
C.c80.prototype={
$1(d){var w=this.a
if(B.o.H(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:86}
C.c86.prototype={
$2(d,e){return d+e},
$S:75}
C.c8_.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.q(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:75}
C.fa7.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fa1.prototype={
$0(){return this.a.$1(D.pl)},
$S:0}
C.fa2.prototype={
$0(){return this.a.$1(D.pl)},
$S:0}
C.fa3.prototype={
$0(){return this.a.$1(D.pl)},
$S:0}
C.fa4.prototype={
$0(){return this.a.$1(D.pl)},
$S:0}
C.fa5.prototype={
$0(){return this.a.$1(D.pl)},
$S:0}
C.fa6.prototype={
$0(){return this.a.$1(D.pl)},
$S:0}
C.eXY.prototype={
$2(d,e){var w,v,u=this,t=null,s=B.o.aj(e,8),r=B.o.H(e,8),q=B.o.H(s+r,2),p=u.a,o=J.q(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.TU:D.b0e
if(o===0)w=t
else{w=x.O
w=o===1?A.a([B.c,B.aJ],w):A.a([B.bi,B.x],w)
v=n?B.aL:B.dq
w=A.p(t,t,B.h,t,t,new A.o(t,t,A.H(v,B.r,n?3:1),t,A.a([new A.aa(0,B.G,B.x.j(0.35),B.dH,4)],x.V),new A.bR(B.A,0.5,B.w,t,0,w,t,t),B.a5),t,28,t,t,t,t,t,28)}return A.aH(t,A.p(t,A.at(w,t,t,t),B.h,q,t,t,t,t,t,t,t,t,t,t),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eXX(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,B.ae)},
$S:76}
C.eXX.prototype={
$0(){var w=this,v=w.a,u=v.cLH(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.pl:D.G9
w.f.$1(v)}},
$S:0}
C.f8Y.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new A.a3(u,u,A.ih(!0,v,v,B.z,Q.aIe,new C.f8X(w.a,w.b,w.c,w.d,u),9,v,B.dL,B.aj,!1),v)},
$S:164}
C.f8X.prototype={
$2(d,e){var w=this,v=null,u=A.m(12),t=A.m(12),s=w.a,r=s.at[e],q=r==="X"?B.b_:B.aF
return A.aD(!1,B.Y,!0,u,A.aI(!1,t,!0,A.at(A.d(r,v,v,v,v,v,v,A.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.f8W(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),B.h,B.fu,0,v,v,v,v,v,B.ac)},
$S:74}
C.f8W.prototype={
$0(){var w=this,v=w.a.cLI(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.eXp.prototype={
$1(d){return new A.C(B.k2,C.flY(d,!1),null)},
$S:302}
C.eXq.prototype={
$1(d){return C.flY(d,!1)},
$S:1660}
C.eXr.prototype={
$0(){var w=this,v=w.a
v.cwj(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.eXs.prototype={
$0(){var w=this
w.a.cwk(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.f6b.prototype={
$1(d){var w=this,v=null,u=d*6
return A.mJ(v,B.bi,A.d(""+u,v,v,v,v,v,v,B.ce,v,v,v),B.di,new C.f6a(w.a,w.b,u,w.c,w.d),v,v,new A.ay(B.c.j(0.2),1,B.r,-1),v)},
$S:1661}
C.f6a.prototype={
$0(){var w=this,v=w.a,u=w.b.aB(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.f85.prototype={
$1(d){return D.cTm[d]},
$S:83}
C.f86.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=A.a([s.aB(6),s.aB(6),s.aB(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.f4W.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.f4X.prototype={
$0(){var w=this,v=w.a
if(w.b.ae()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.eYp.prototype={
$0(){var w=this,v=w.a.cBN(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.eYo.prototype={
$1(d){var w,v=null,u=J.q(this.a.fr[5-d],this.b)
if(u===0)w=B.lT
else w=u===1?B.dz:B.qA
return new A.fJ(1,A.p(v,v,B.h,v,v,new A.o(w,v,A.H(B.bG,B.r,1),v,v,v,B.a5),v,v,v,B.mB,v,v,v,v),v)},
$S:1662}
C.f58.prototype={
$1(d){var w=this
if(w.a.b5X(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.f59.prototype={
$0(){var w=this
if(w.a.b5X(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.eXS.prototype={
$0(){var w=this
if(w.a.ae()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fe_.prototype={
$1(d){var w=J.q(d,"email")
return B.a.t(B.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fe0.prototype={
$1(d){var w,v=J.a6(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=B.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+B.a.i(J.k(v==null?"":v))+">"},
$S:50}
C.eqp.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aHq.prototype
w.bol=w.Z
w.bok=w.p
w=C.aHr.prototype
w.bon=w.Z
w.bom=w.p
w=C.aHs.prototype
w.bop=w.Z
w.boo=w.p
w=C.aIn.prototype
w.bpm=w.Z
w.bpl=w.p
w=C.aHY.prototype
w.boW=w.p
w=C.aIw.prototype
w.bpv=w.p
w=C.aHt.prototype
w.boq=w.p
w=C.aIE.prototype
w.bpE=w.p
w=C.aHy.prototype
w.bov=w.p
w=C.aHO.prototype
w.boM=w.p
w=C.aJk.prototype
w.bqk=w.p})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.axm.prototype,"gbJD","bJE",19)
v(q,"gaO6","aO7",1)
v(C.axl.prototype,"gcnu","a_Q",1)
v(q=C.axn.prototype,"gbOX","bOY",1)
v(q,"gbzo","bzp",1)
v(q=C.auB.prototype,"gcgQ","cgR",1)
v(q,"gc5I","Oo",0)
v(q,"gcri","crj",1)
v(q,"gcjK","mt",0)
w(q,"gc9W","c9X",25)
w(q,"gcpJ","Q5",33)
v(q=C.azq.prototype,"gbHN","Vv",0)
v(q,"gbXF","WX",0)
v(q,"gbXC","WW",0)
v(q,"gbXD","aat",0)
v(q,"gbXE","Nq",0)
v(C.awM.prototype,"gbXG","bXH",1)
u(C,"hNP","hjR",58)
t(C,"fJ4",0,null,["$1","$0"],["h2y",function(){return C.h2y(null)}],3,0)
t(C,"bz8",0,null,["$1","$0"],["h2x",function(){return C.h2x(null)}],3,0)
v(C.Lk.prototype,"gDb","c2Y",1)
v(C.aAb.prototype,"gch6","zJ",0)
v(q=C.aAs.prototype,"gc60","Oq",0)
v(q,"gcaD","Z6",0)
v(q,"gc_q","c_r",1)
v(q=C.aAE.prototype,"gc_v","abi",0)
v(q,"gbth","a5I",0)
v(q,"gchj","a_3",0)
s(q,"gc3s","c3t",35)
v(C.aCx.prototype,"gbtH","a5K",1)
v(q=C.aCw.prototype,"gc_u","abh",0)
v(q,"gc5_","ach",0)
v(q=C.aAG.prototype,"gbSC","a9j",0)
v(q,"gbSE","W8",0)
v(q,"gbSD","a9k",0)
v(q=C.aAF.prototype,"gbw_","bw0",1)
v(q,"gbw1","bw2",1)
v(C.aAH.prototype,"gbBB","bBC",1)
v(C.axH.prototype,"gc_x","c_y",1)
v(q=C.aB2.prototype,"gaUF","c_O",1)
r(q,"gaVy",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["abW","au9","aVA","aVz"],52,0,0)
r(q,"gc2G",0,4,null,["$4"],["c2H"],53,0,0)
v(q,"gc4K","Yj",0)
v(q,"gc5z","aco",0)
v(q,"gc5v","acm",0)
v(q,"gbVr","aa3",0)
w(C.ayq.prototype,"gbUg","bUh",54)
w(q=C.ays.prototype,"gcoz","coA",55)
v(q,"gcnl","cnm",1)
v(q,"gcuK","cuL",1)
v(C.aAQ.prototype,"gc08","aUL",1)
v(C.aBB.prototype,"gaV9","atY",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.jk,[C.clS,C.clP,C.clQ,C.clR,C.clO,C.eLY,C.eLW,C.eM_,C.eLX,C.f3u,C.d2T,C.d33,C.d3b,C.d3c,C.d3e,C.d36,C.d34,C.d35,C.d37,C.d38,C.d2Z,C.d3_,C.d2Y,C.d31,C.d32,C.d2W,C.d2V,C.d3g,C.d3j,C.dG8,C.dG7,C.dG9,C.dG6,C.dG5,C.d2N,C.d2Q,C.d2R,C.d2P,C.d2O,C.d4F,C.d4G,C.d4H,C.d3V,C.d3W,C.d4p,C.d4a,C.d4b,C.d4c,C.d4d,C.d4e,C.d3n,C.d3U,C.d4q,C.d4z,C.d4n,C.d4m,C.d3S,C.d3T,C.d4v,C.d4w,C.d3p,C.d3q,C.d43,C.d44,C.d45,C.d42,C.d4f,C.d4g,C.d4h,C.d4i,C.d4j,C.d4k,C.d4t,C.d46,C.d47,C.d48,C.d49,C.d4x,C.d4y,C.d3r,C.d3s,C.d3t,C.d3u,C.d4r,C.d4s,C.d41,C.d4l,C.d4_,C.d4A,C.d4B,C.d4C,C.d3X,C.d3G,C.d3F,C.d3E,C.d3K,C.d3D,C.d3B,C.d3w,C.d3z,C.d3v,C.d3P,C.d3Q,C.d3x,C.d7W,C.cwc,C.cw2,C.cw3,C.cwm,C.cwj,C.cwk,C.cwl,C.cwe,C.cwd,C.cw4,C.cwf,C.cwF,C.cwB,C.cwA,C.cwa,C.cwb,C.cw7,C.cwi,C.cwq,C.cwr,C.cws,C.cwt,C.cwu,C.cwv,C.cww,C.cwR,C.cwK,C.cwH,C.cwM,C.cwJ,C.cwG,C.cw5,C.cwD,C.doq,C.dor,C.doh,C.dof,C.dop,C.doe,C.dod,C.dog,C.dol,C.dom,C.doj,C.dok,C.dos,C.dot,C.dou,C.dov,C.eFU,C.eFV,C.cZ5,C.feU,C.duR,C.duJ,C.duL,C.duP,C.duK,C.duM,C.duN,C.c1a,C.flW,C.flV,C.do2,C.do1,C.do3,C.do0,C.dMZ,C.dN_,C.dN6,C.fu4,C.fu5,C.bVh,C.dGe,C.dGf,C.dGg,C.dGh,C.dGi,C.dGj,C.dGd,C.dGk,C.dGc,C.dGn,C.dGm,C.dGl,C.dNq,C.dNr,C.dNo,C.dNn,C.dNp,C.dNl,C.dR_,C.dR0,C.dQJ,C.dQL,C.dQX,C.dQY,C.dQS,C.dQQ,C.dQW,C.dQT,C.dQN,C.dQM,C.dR1,C.cFh,C.cFf,C.cFg,C.cFe,C.cFk,C.cFl,C.eAZ,C.eB3,C.eB0,C.eB2,C.eB1,C.eAV,C.eAU,C.eAX,C.eAW,C.dRm,C.dRr,C.dRn,C.dRo,C.dRq,C.dRw,C.dRx,C.dRy,C.dRz,C.dRA,C.dRB,C.dRC,C.dRD,C.dRv,C.dRE,C.dRu,C.dRt,C.dRs,C.dRf,C.dRg,C.dR7,C.dR8,C.dR9,C.dRb,C.cyZ,C.d8Q,C.d8S,C.d8R,C.dRU,C.dRO,C.dRP,C.dRR,C.dRS,C.dRT,C.dRX,C.dRW,C.dS2,C.dS1,C.dRK,C.dRJ,C.dS3,C.dRV,C.dRI,C.fuQ,C.d6v,C.d6t,C.e0u,C.e0T,C.e0U,C.e0V,C.e0W,C.e0Y,C.e0Z,C.e0O,C.e0v,C.e0S,C.e0z,C.e0A,C.e0I,C.e0F,C.e0G,C.e0H,C.e0J,C.e0K,C.e0L,C.e0N,C.e0M,C.e0B,C.e0C,C.e17,C.e10,C.e18,C.e1_,C.e19,C.e15,C.e16,C.e11,C.e0y,C.e0x,C.e0E,C.e0D,C.daC,C.daB,C.daw,C.daX,C.daY,C.daJ,C.daI,C.daH,C.daW,C.daV,C.daR,C.daO,C.daP,C.daL,C.daQ,C.daK,C.fob,C.fm7,C.dVZ,C.dW1,C.dW0,C.dW4,C.dW_,C.fa1,C.fa2,C.fa3,C.fa4,C.fa5,C.fa6,C.eXX,C.f8W,C.eXr,C.eXs,C.f6a,C.f86,C.f4X,C.eYp,C.f59,C.eXS,C.eqp])
u(A.i3,[C.clT,C.eLZ,C.fiI,C.fiA,C.f3r,C.f3q,C.f3t,C.d3l,C.d3m,C.d3a,C.d39,C.d3d,C.d2X,C.d30,C.d3f,C.dGb,C.d2S,C.d4I,C.d4J,C.d4K,C.d4L,C.d4M,C.d4o,C.d4u,C.d3o,C.d4E,C.d4D,C.d3H,C.d3I,C.d3J,C.d3L,C.d3N,C.d7X,C.cwS,C.cwh,C.cwg,C.cwz,C.cwC,C.cwy,C.cw8,C.cwp,C.cwn,C.cwE,C.cwo,C.cwN,C.cwL,C.cwQ,C.bU_,C.bTZ,C.bU1,C.bU0,C.doo,C.don,C.doi,C.dow,C.dox,C.f6J,C.f7W,C.cZ6,C.cZ4,C.bUL,C.feT,C.duS,C.duQ,C.c1b,C.f8H,C.flU,C.c38,C.c37,C.c3A,C.dMX,C.dMY,C.fhf,C.fh2,C.fh1,C.f5_,C.c3O,C.c3P,C.c3Q,C.c3N,C.c3M,C.f3b,C.fu0,C.fu1,C.fu2,C.fu3,C.fu_,C.dN3,C.dN4,C.dN2,C.fu6,C.d4N,C.c5o,C.f2a,C.dGo,C.dNm,C.c4f,C.c4c,C.c4e,C.c4h,C.bXF,C.bXD,C.bXI,C.c4o,C.c4n,C.c4m,C.c4l,C.c4q,C.c4s,C.dR5,C.dQK,C.dQI,C.dQZ,C.dQR,C.dQV,C.dQU,C.dQP,C.dR3,C.dR2,C.cFi,C.cFj,C.eB_,C.eAT,C.eAY,C.c4i,C.fj0,C.dRG,C.dRp,C.dRi,C.dRj,C.dRk,C.dRl,C.dRF,C.c4k,C.cz_,C.cz0,C.f1V,C.dRL,C.dRN,C.dRQ,C.dRY,C.dRZ,C.dS_,C.dRH,C.fuR,C.d6p,C.d6s,C.c6i,C.c6v,C.e1a,C.e1b,C.e1c,C.e0X,C.e0P,C.e0Q,C.e0R,C.e12,C.e14,C.daD,C.daE,C.daz,C.dau,C.daZ,C.daU,C.daT,C.daS,C.daM,C.f9D,C.fpn,C.f9C,C.f_A,C.foc,C.fm6,C.fqk,C.dW2,C.dW3,C.f8O,C.f8N,C.fot,C.fou,C.fio,C.fnU,C.c83,C.c84,C.c82,C.c85,C.c81,C.c87,C.c88,C.c80,C.fa7,C.eXp,C.eXq,C.f6b,C.f85,C.f4W,C.eYo,C.f58,C.fe_,C.fe0])
t(C.bnu,A.iH)
u(A.af,[C.DV,C.aiA,C.aAa,C.aiz,C.aiB,C.ajs,C.afN,C.al_,C.Y3,C.Y4,C.Xb,C.alu,C.akZ,C.LQ,C.axo,C.amr,C.an4,C.To,C.NH,C.YR,C.YQ,C.Tp,C.ann,C.aye,C.anq,C.XA,C.anX,C.ayp,C.ayr,C.Yn,C.apb])
u(A.ag,[C.aF1,C.aHr,C.aIn,C.aHq,C.aHs,C.bcV,C.auB,C.azq,C.bfj,C.bfk,C.awM,C.bfq,C.aHY,C.aIw,C.aHt,C.aAb,C.aAs,C.aAE,C.b78,C.aCx,C.aCw,C.aAG,C.aAF,C.bd8,C.aIE,C.aHy,C.bte,C.aHO,C.ays,C.aAQ,C.aJk])
u(A.kz,[C.eM0,C.f3s,C.d2U,C.d3k,C.d3i,C.d3h,C.dGa,C.d40,C.d3Z,C.d3Y,C.d3C,C.d3M,C.d3A,C.d3O,C.d3y,C.d3R,C.cwx,C.cw9,C.cwI,C.cwP,C.cwO,C.cw6,C.cZ3,C.duO,C.f8I,C.f8J,C.dN0,C.fiD,C.ftZ,C.dN5,C.dN8,C.dN7,C.d4O,C.c5p,C.c4g,C.c4d,C.bXG,C.bXE,C.c4r,C.dR6,C.dQO,C.dR4,C.eB5,C.eB4,C.dRh,C.dRa,C.dRc,C.dRe,C.dRd,C.dRM,C.dS0,C.d6q,C.d6u,C.d6r,C.e13,C.e0w,C.daF,C.daG,C.dax,C.day,C.daA,C.dav,C.daN,C.ff_,C.c86,C.c8_,C.eXY,C.f8Y,C.f8X])
t(C.asQ,C.DV)
u(A.aB,[C.qb,C.abo,C.Lk,C.H3,C.qJ,C.qK,C.ll,C.i9,C.hW,C.b5k,C.cWK,C.d8P,C.qQ,C.Tq,C.M2,C.pm,C.aWL,C.oA,C.aoi])
t(C.axm,C.aHr)
t(C.bfJ,C.aIn)
t(C.axl,C.aHq)
t(C.axn,C.aHs)
u(A.md,[C.U8,C.ayf,C.ao9,C.H8,C.Dk])
u(A.as,[C.Zq,C.bo_,C.ac9,C.Of,C.a4t,C.LI,C.amZ,C.ab_,C.aaZ,C.aXA,C.ayd,C.a9y,C.aX7,C.a9q,C.ayq])
t(C.bfh,C.aHY)
t(C.bfV,C.aIw)
t(C.bbE,C.aHt)
t(C.aAH,C.aIE)
t(C.axH,C.aHy)
t(C.aB2,C.bte)
t(C.bdS,C.aHO)
u(A.n6,[C.b7D,C.b7C,C.b7B,C.b73,C.brj,C.bmn])
t(C.aBB,C.aJk)
w(C.aHq,C.Lk)
w(C.aHr,C.Lk)
w(C.aHs,C.Lk)
w(C.aIn,C.Lk)
w(C.aHY,A.eJ)
w(C.aIw,A.c7)
w(C.aHt,A.c7)
w(C.aIE,A.c7)
w(C.aHy,A.eJ)
w(C.aHO,A.eJ)
v(C.bte,A.ev)
w(C.aJk,A.c7)})()
A.kf(b.typeUniverse,JSON.parse('{"bnu":{"iH":[]},"DV":{"af":[],"r":[]},"aF1":{"ag":["DV<1,2>"]},"asQ":{"DV":["1","ht<1>"],"af":[],"r":[],"DV.T":"1","DV.S":"ht<1>"},"aiA":{"af":[],"r":[]},"aAa":{"af":[],"r":[]},"aiz":{"af":[],"r":[]},"aiB":{"af":[],"r":[]},"ajs":{"af":[],"r":[]},"afN":{"af":[],"r":[]},"axm":{"ag":["aiA"]},"bfJ":{"ag":["aAa"]},"axl":{"ag":["aiz"]},"axn":{"ag":["aiB"]},"bcV":{"ag":["ajs"]},"auB":{"ag":["afN"]},"al_":{"af":[],"r":[]},"Y3":{"af":[],"r":[]},"Y4":{"af":[],"r":[]},"ac9":{"as":[],"r":[]},"Xb":{"af":[],"r":[]},"azq":{"ag":["al_"]},"Zq":{"as":[],"r":[]},"bo_":{"as":[],"r":[]},"bfj":{"ag":["Y3"]},"bfk":{"ag":["Y4"]},"Of":{"as":[],"r":[]},"awM":{"ag":["Xb"]},"alu":{"af":[],"r":[]},"bfq":{"ag":["alu"]},"a4t":{"as":[],"r":[]},"akZ":{"af":[],"r":[]},"bfh":{"ag":["akZ"]},"LI":{"as":[],"r":[]},"amZ":{"as":[],"r":[]},"LQ":{"af":[],"r":[]},"bfV":{"ag":["LQ"]},"ab_":{"as":[],"r":[]},"aaZ":{"as":[],"r":[]},"axo":{"af":[],"r":[]},"bbE":{"ag":["axo"]},"aXA":{"as":[],"r":[]},"amr":{"af":[],"r":[]},"aAb":{"ag":["amr"]},"an4":{"af":[],"r":[]},"aAs":{"ag":["an4"]},"To":{"af":[],"r":[]},"NH":{"af":[],"r":[]},"YR":{"af":[],"r":[]},"YQ":{"af":[],"r":[]},"aAE":{"ag":["To"]},"b78":{"ag":["NH"]},"aCx":{"ag":["YR"]},"aCw":{"ag":["YQ"]},"Tp":{"af":[],"r":[]},"aAG":{"ag":["Tp"]},"ann":{"af":[],"r":[]},"a9y":{"as":[],"r":[]},"a9q":{"as":[],"r":[]},"aye":{"af":[],"r":[]},"aAF":{"ag":["ann"]},"ayd":{"as":[],"r":[]},"aX7":{"as":[],"r":[]},"bd8":{"ag":["aye"]},"anq":{"af":[],"r":[]},"aAH":{"ag":["anq"]},"XA":{"af":[],"r":[]},"axH":{"ag":["XA"]},"anX":{"af":[],"r":[]},"ayp":{"af":[],"r":[]},"ayr":{"af":[],"r":[]},"aB2":{"ag":["anX"],"ev":[]},"ayq":{"as":[],"r":[]},"bdS":{"ag":["ayp"]},"b7D":{"aA":[]},"b7C":{"aA":[]},"b7B":{"aA":[]},"ays":{"ag":["ayr"]},"b73":{"aA":[]},"brj":{"aA":[]},"Yn":{"af":[],"r":[]},"aAQ":{"ag":["Yn"]},"bmn":{"aA":[]},"apb":{"af":[],"r":[]},"aBB":{"ag":["apb"]}}'))
A.Oq(b.typeUniverse,JSON.parse('{"Lk":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=A.az
return{dw:w("mK<w?>"),gS:w("nH"),o:w("cX"),g5:w("wd"),M:w("f6<n>"),k:w("Q"),gv:w("kW<ak<iZ>>"),gh:w("kW<n>"),gH:w("kW<I>"),r:w("aw<~>"),dk:w("a0"),fw:w("O<nH>"),E:w("O<cX>"),V:w("O<aa>"),O:w("O<w>"),A:w("O<a0>"),R:w("O<mT>"),B:w("O<ak<I>>"),m:w("O<a1<n,n>>"),_:w("O<a1<n,@>>"),b:w("O<qJ>"),x:w("O<qK>"),gi:w("O<iZ>"),a:w("O<ll>"),Y:w("O<hW>"),v:w("O<i9>"),dA:w("O<H3>"),F:w("O<qQ>"),Z:w("O<kc>"),g:w("O<hx>"),gK:w("O<+at,details,id(Q,n,n)>"),C:w("O<cJ>"),s:w("O<n>"),G:w("O<iH>"),eO:w("O<es>"),d9:w("O<eK>"),p:w("O<r>"),n:w("O<P>"),t:w("O<I>"),U:w("O<aA?>"),d4:w("O<n?>"),ck:w("ak<qJ>"),e:w("ak<qK>"),ac:w("ak<iZ>"),dZ:w("ak<ll>"),I:w("ak<hW>"),j:w("ak<@>"),L:w("ak<I>"),eq:w("a1<n,n>"),P:w("a1<n,@>"),f:w("a1<@,@>"),cl:w("cS<n,C>"),aS:w("J<a0,rA>"),dc:w("J<H8,bF>"),dv:w("J<n,n>"),bL:w("J<P,bF>"),a3:w("J<I,bF>"),gN:w("J<I,pa>"),w:w("iC"),b1:w("qJ"),Q:w("qK"),bP:w("ll"),i:w("hW"),u:w("i9"),gp:w("Tq"),J:w("M2"),D:w("pm"),an:w("kc"),c:w("co"),K:w("aB"),d:w("jc<n>"),di:w("+outcome,snapshot(U8,a3Q?)"),ee:w("+after,before(P,P)"),et:w("+categories,error,message,replaceId(ak<hW>,n?,n?,n?)"),cz:w("DJ"),bJ:w("dx<n>"),N:w("n"),e7:w("bl<P>"),W:w("cx<n>"),am:w("k3<I>"),cc:w("a4<n>"),aM:w("e3<cX>"),bG:w("e3<P>"),l:w("r"),gm:w("qb"),ec:w("abo"),q:w("mC"),y:w("T"),gR:w("P"),z:w("@"),S:w("I"),eG:w("cX?"),cJ:w("Q?"),gw:w("ak<a1<n,@>>?"),bM:w("ak<@>?"),h:w("a1<n,@>?"),X:w("aB?"),gE:w("+code,qrPayload(n,n)?"),bY:w("+isLive,ownerEmail,snapshotJson(T,n,n)?"),T:w("n?"),cD:w("P?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aPk=new A.bv(B.bC,B.j7,B.bC,B.j7)
D.ew=new A.w(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,B.t)
D.aPN=new A.ay(D.ew,1,B.r,-1)
D.aPP=new A.ay(B.al,2,B.r,-1)
D.aPS=new A.ay(B.aS,2,B.r,-1)
D.aPU=new A.ay(B.cp,0.8,B.r,-1)
D.aQ9=new A.ay(B.aL,2,B.r,-1)
D.aQg=new A.ay(B.f9,1.6,B.r,-1)
D.aR3=new A.aX(0,330,0,1/0)
D.aR9=new A.aX(0,176,0,1/0)
D.aRa=new A.aX(0,1/0,0,260)
D.aRr=new A.aX(90,1/0,0,1/0)
D.aU8=new A.aa(0,B.G,B.dq,B.J,4)
D.cCI=w([D.aU8],x.V)
D.aRF=new A.o(B.c,null,null,null,D.cCI,null,B.a5)
D.cxg=w([D.ew,B.aW],x.O)
D.bJ5=new A.a7(B.a3,B.a7,B.w,D.cxg,null,null)
D.aRU=new A.o(null,null,null,null,null,D.bJ5,B.a5)
D.aRZ=new A.o(B.bl,null,null,null,null,null,B.a5)
D.b2a=new A.w(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,B.t)
D.cQE=w([P.a8C,D.b2a],x.O)
D.bIe=new A.a7(B.b1,B.b5,B.w,D.cQE,null,null)
D.aSe=new A.o(null,null,null,B.mk,null,D.bIe,B.n)
D.b84=new A.w(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,B.t)
D.d_w=w([D.b84,M.aaj],x.O)
D.bHr=new A.a7(B.b1,B.b5,B.w,D.d_w,null,null)
D.aSC=new A.o(null,null,null,B.pN,null,D.bHr,B.n)
D.cN0=w([B.aB,B.bz],x.O)
D.bHW=new A.a7(B.a3,B.a7,B.w,D.cN0,null,null)
D.aSH=new A.o(null,null,null,null,null,D.bHW,B.a5)
D.eE9=new A.F(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWs=new A.x("\ud83c\udf89",null,D.eE9,null,null,null,null,null,null,null,null,null)
D.aXN=new A.cw(B.A,null,null,D.eWs,null)
D.aZ4=new A.w(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,B.t)
D.a85=new A.w(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,B.t)
D.b0e=new A.w(1,0.8431372549019608,0.8,0.7843137254901961,B.t)
D.b0i=new A.w(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,B.t)
D.nT=new A.w(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,B.t)
D.re=new A.w(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,B.t)
D.a8W=new A.w(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,B.t)
D.b1U=new A.w(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,B.t)
D.Tx=new A.w(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,B.t)
D.w2=new A.w(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,B.t)
D.b33=new A.w(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,B.t)
D.TU=new A.w(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,B.t)
D.aa2=new A.w(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,B.t)
D.b6t=new A.w(1,0.9529411764705882,0.9411764705882353,1,B.t)
D.b6z=new A.w(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,B.t)
D.aam=new A.w(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,B.t)
D.aaB=new A.w(1,0,0.8392156862745098,0.30980392156862746,B.t)
D.aaC=new A.w(1,1,0.9529411764705882,0.6901960784313725,B.t)
D.b7H=new A.w(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,B.t)
D.b7L=new A.w(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,B.t)
D.b8y=new A.w(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,B.t)
D.Ug=new A.w(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,B.t)
D.b9o=new A.w(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,B.t)
D.b9R=new A.w(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,B.t)
D.Um=new A.w(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,B.t)
D.baq=new A.w(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,B.t)
D.abz=new A.a1O(2,"active")
D.bdU=new A.b8(42e5)
D.bdX=new A.b8(53e4)
D.bdZ=new A.b8(58e4)
D.be2=new A.b8(82e4)
D.beR=new A.M(0,30,0,30)
D.beZ=new A.M(0,4,0,8)
D.bf1=new A.M(0,8,12,8)
D.bfE=new A.M(12,0,12,88)
D.bfL=new A.M(12,11,12,10)
D.bg6=new A.M(13,10,12,10)
D.bge=new A.M(14,10,14,2)
D.bgq=new A.M(14,14,10,14)
D.bgV=new A.M(16,12,16,96)
D.bh_=new A.M(16,14,16,8)
D.bh3=new A.M(16,16,16,96)
D.bh5=new A.M(16,18,16,16)
D.bh9=new A.M(16,4,16,10)
D.bi4=new A.M(18,6,18,40)
D.bi6=new A.M(18,8,18,130)
D.bij=new A.M(20,10,20,20)
D.biw=new A.M(20,18,20,18)
D.biA=new A.M(20,20,20,22)
D.biW=new A.M(22,22,22,16)
D.bjz=new A.M(2,0,2,10)
D.bkh=new A.M(4,8,12,4)
D.bku=new A.M(6,1,6,1)
D.bkw=new A.M(6,4,0,0)
D.bkz=new A.M(6,6,12,4)
D.bkU=new A.M(8,4,12,8)
D.eZD=new A.x("Activity",null,B.fQ,null,null,null,null,null,null,null,null,null)
D.bmy=new A.bF(1,B.bp,D.eZD,null)
D.f6d=new A.x("Game Receipts",null,A0.BM,null,null,null,null,null,null,null,null,null)
D.eRV=new A.x("Your last 59 games \xb7 kept for 7 days",null,F.aJX,null,null,null,null,null,null,null,null,null)
D.ctI=w([D.f6d,D.eRV],x.p)
D.bbm=new A.fk(B.aj,B.e,B.j,B.F,null,B.p,null,0,D.ctI,null)
D.bmB=new A.bF(1,B.bp,D.bbm,null)
D.box=new A.a0(58607,"MaterialIcons",!1)
D.X6=new A.a0(62178,"MaterialIcons",!1)
D.bpl=new A.a0(62410,"MaterialIcons",!1)
D.bqu=new A.a0(63258,"MaterialIcons",!1)
D.bqA=new A.a0(63304,"MaterialIcons",!1)
D.bqB=new A.a0(63306,"MaterialIcons",!1)
D.bqI=new A.a0(63330,"MaterialIcons",!1)
D.ahC=new A.a0(984777,"MaterialIcons",!1)
D.bt9=new A.ad(B.Ec,13,B.al,null,null,null)
D.bth=new A.ad(B.jH,13,B.oT,null,null,null)
D.ahL=new A.ad(B.kZ,null,B.c,null,null,null)
D.buO=new A.ad(B.Ai,34,B.aX,null,null,null)
D.bvl=new A.ad(B.Ei,19,B.c,null,null,null)
D.bpE=new A.a0(62804,"MaterialIcons",!1)
D.bvu=new A.ad(D.bpE,24,B.aL,null,null,null)
D.bvW=new A.ad(B.A4,28,B.bj,null,null,null)
D.bwp=new A.ad(B.ahj,42,B.c,null,null,null)
D.bwy=new A.ad(B.Y1,30,B.c,null,null,null)
D.bx8=new A.ad(B.fC,null,B.c,null,null,null)
D.bxt=new A.ad(B.jH,16,B.c,null,null,null)
D.by3=new A.ad(B.qm,13,B.c,null,null,null)
D.byc=new A.ad(B.kZ,18,B.c,null,null,null)
D.byJ=new A.ad(B.us,null,B.dz,null,null,null)
D.bzm=new A.ad(B.oc,28,B.c,null,null,null)
D.bzB=new A.ad(B.mI,22,null,null,null,null)
D.bzY=new A.ad(B.qj,null,null,null,null,null)
D.bA9=new A.ad(B.iK,28,B.c,null,null,null)
D.bAb=new A.ad(B.ct,null,B.aQ,null,null,null)
D.bAi=new A.ad(B.WO,14,B.c,null,null,null)
D.bAN=new A.ad(B.Le,36,B.aK,null,null,null)
D.bAU=new A.ad(B.od,16,B.c,null,null,null)
D.bB8=new A.ad(B.ej,null,null,null,null,null)
D.b2v=new A.w(1,0.23137254901960785,0.16470588235294117,0,B.t)
D.bBH=new A.ad(B.dP,9,D.b2v,null,null,null)
D.brx=new A.a0(983146,"MaterialIcons",!1)
D.bBX=new A.ad(D.brx,null,B.aL,null,null,null)
D.bCr=new A.ad(B.uv,28,D.ew,null,null,null)
D.bCw=new A.ad(B.rP,null,B.f9,null,null,null)
D.bCB=new A.ad(B.hR,20,D.ew,null,null,null)
D.brU=new A.a0(983377,"MaterialIcons",!1)
D.bCL=new A.ad(D.brU,64,B.c,null,null,null)
D.bDd=new A.ad(B.fW,24,B.c,null,null,null)
D.bE7=new A.e2(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bEh=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bEv=new A.e2(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bEw=new A.e2(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.b0W=new A.w(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,B.t)
D.b3m=new A.w(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,B.t)
D.b34=new A.w(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,B.t)
D.cQV=w([D.b0W,D.b3m,D.b34],x.O)
D.bFo=new A.a7(B.ax,B.aC,B.w,D.cQV,null,null)
D.cVc=w([B.bn,B.aW],x.O)
D.bFH=new A.a7(B.ax,B.aC,B.w,D.cVc,null,null)
D.b25=new A.w(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,B.t)
D.b6X=new A.w(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,B.t)
D.cD8=w([D.b25,D.b6X],x.O)
D.bFN=new A.a7(B.ax,B.aC,B.w,D.cD8,null,null)
D.cSh=w([B.bi,B.M,B.eF],x.O)
D.bFU=new A.a7(B.ax,B.aC,B.w,D.cSh,null,null)
D.bFX=new A.a7(B.a3,B.a7,B.w,G.aoU,null,null)
D.cCB=w([B.f9,B.cb],x.O)
D.ajs=new A.a7(B.a3,B.a7,B.w,D.cCB,null,null)
D.cCV=w([B.f9,B.bz],x.O)
D.ajt=new A.a7(B.a3,B.a7,B.w,D.cCV,null,null)
D.ass=w([D.nT,B.au,B.bS],x.O)
D.bGd=new A.a7(B.ax,B.aC,B.w,D.ass,null,null)
D.b4M=new A.w(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,B.t)
D.cAL=w([D.b4M,E.a8d,B.M],x.O)
D.bGi=new A.a7(B.ax,B.aC,B.w,D.cAL,null,null)
D.aOb=new A.d5(-0.8,-1)
D.aOd=new A.d5(1.2,1)
D.czZ=w([B.c,B.es,B.hv,B.c,B.fx,B.b_,B.mo],x.O)
D.cRN=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.bGk=new A.a7(D.aOb,D.aOd,B.w,D.czZ,D.cRN,null)
D.b6T=new A.w(1,0,0.7607843137254902,0.26666666666666666,B.t)
D.b5_=new A.w(1,0,0.6392156862745098,0.22745098039215686,B.t)
D.cQU=w([D.b6T,D.b5_],x.O)
D.bGK=new A.a7(B.a3,B.a7,B.w,D.cQU,null,null)
D.bGO=new A.a7(B.ax,B.aC,B.w,B.NF,null,null)
D.cM8=w([E.Uj,B.w5],x.O)
D.bGQ=new A.a7(B.a3,B.a7,B.w,D.cM8,null,null)
D.cPQ=w([B.fT,B.fm],x.O)
D.ajy=new A.a7(B.a3,B.a7,B.w,D.cPQ,null,null)
D.cUM=w([B.bl,B.bT],x.O)
D.ajz=new A.a7(B.a3,B.a7,B.w,D.cUM,null,null)
D.cld=w([B.dD,B.fe],x.O)
D.bHt=new A.a7(B.ax,B.aC,B.w,D.cld,null,null)
D.cz4=w([B.c,B.b9],x.O)
D.bHE=new A.a7(B.a3,B.a7,B.w,D.cz4,null,null)
D.a9G=new A.w(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,B.t)
D.b02=new A.w(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,B.t)
D.cJd=w([D.a9G,B.iZ,B.pY,B.au,D.b02],x.O)
D.bJY=w([0,0.28,0.55,0.82,1],x.n)
D.bHF=new A.a7(B.ax,B.aC,B.w,D.cJd,D.bJY,null)
D.bHO=new A.a7(B.a3,B.a7,B.w,B.Of,null,null)
D.bHP=new A.a7(B.a3,B.a7,B.w,G.ara,null,null)
D.bHS=new A.a7(B.a3,B.a7,B.w,D.ass,null,null)
D.cE9=w([B.bz,B.f9],x.O)
D.bI2=new A.a7(B.a3,B.a7,B.w,D.cE9,null,null)
D.cYs=w([B.aB,B.bz,B.b9],x.O)
D.bI4=new A.a7(B.a3,B.a7,B.w,D.cYs,null,null)
D.cMh=w([B.aX,B.bI,B.fS],x.O)
D.bI8=new A.a7(B.a3,B.a7,B.w,D.cMh,null,null)
D.cYb=w([B.bi,B.aI,B.bK,B.aJ,B.aN,B.cp,B.ai],x.O)
D.cHA=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.bId=new A.a7(B.ax,B.aC,B.w,D.cYb,D.cHA,null)
D.bIn=new A.a7(B.ax,B.aC,B.w,B.Zl,null,null)
D.cML=w([D.Tx,B.dZ],x.O)
D.bIw=new A.a7(B.a3,B.a7,B.w,D.cML,null,null)
D.cTu=w([D.aam,D.a8W,B.M],x.O)
D.bIE=new A.a7(B.ax,B.aC,B.w,D.cTu,null,null)
D.b8U=new A.w(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,B.t)
D.czx=w([B.eQ,B.fT,D.b8U],x.O)
D.bJ7=new A.a7(B.ax,B.aC,B.w,D.czx,null,null)
D.cEE=w([D.nT,B.au],x.O)
D.bJ8=new A.a7(B.ax,B.aC,B.w,D.cEE,null,null)
D.bJt=w([F.Ak,B.oc,B.jH,B.hm,B.kC,B.kD,B.kB,B.qp,B.m4,B.eI,B.lu,B.x_,B.Eq],x.A)
D.bMQ=w([10,50,100,200],x.t)
D.bWv=w([1,3,5,7],x.t)
D.c0s=w([25,50,100,250],x.t)
D.brs=new A.a0(983104,"MaterialIcons",!1)
D.c8S=w([B.oc,B.lv,B.mI,B.lt,B.hk,B.uB,D.brs,B.XX],x.A)
D.ceb=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cq_=w([0,0.22,0.5,0.78,1],x.n)
D.ctQ=w([8,13,19],x.n)
D.ZF=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.eYI=new A.x("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.dT7=new A.jc("questions",48,D.eYI,null,x.d)
D.ePl=new A.x("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.dTc=new A.jc("edit",48,D.ePl,null,x.d)
D.f4T=new A.x("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.dTi=new A.jc("delete",48,D.f4T,null,x.d)
D.ctZ=w([D.dT7,D.dTc,D.dTi],A.az("O<oE<n>>"))
D.cD2=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.cDf=w([B.bL,B.j0],x.O)
D.a1d=new C.ll("text","",null,null)
D.cEi=w([D.a1d],x.a)
D.cFE=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.ea8=new A.abL(B.m2,"Home")
D.e1L=new A.abL(B.pb,"Growth")
D.e5W=new A.abL(B.jH,"Wallet")
D.cHM=w([D.ea8,D.e1L,D.e5W],A.az("O<+icon,label(a0,n)>"))
D.cI9=w([4,0,2,6,8,1,3,5,7],x.t)
D.cIh=w([B.c,B.bM,B.cp],x.O)
D.dlF=new C.qQ("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.dlI=new C.qQ("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.dlG=new C.qQ("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.dlA=new C.qQ("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.dlB=new C.qQ("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.dlJ=new C.qQ("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a_6=w([D.dlF,D.dlI,D.dlG,D.dlA,D.dlB,D.dlJ],x.F)
D.a_b=w([B.aF,B.bn,B.d9,B.aX],x.O)
D.b2D=new A.w(1,1,0.8980392156862745,0.4,B.t)
D.cMR=w([B.Tg,D.b2D,B.pY,B.hM,B.iZ],x.O)
D.a_g=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.NN=w(["checkers_deluxe","tic_tac_go"],x.s)
D.bJx=w([0,1,2],x.t)
D.c95=w([3,4,5],x.t)
D.clM=w([6,7,8],x.t)
D.bJz=w([0,3,6],x.t)
D.bWA=w([1,4,7],x.t)
D.c2U=w([2,5,8],x.t)
D.bJD=w([0,4,8],x.t)
D.c2R=w([2,4,6],x.t)
D.cOZ=w([D.bJx,D.c95,D.clM,D.bJz,D.bWA,D.c2U,D.bJD,D.c2R],x.B)
D.aAk=new C.H8(0,"abab")
D.dly=new C.H8(1,"aaaBbb")
D.aAl=new C.H8(2,"aabb")
D.cPU=w([D.aAk,D.dly,D.aAl],A.az("O<H8>"))
D.cQ9=w([],x.a)
D.arT=w([],x.v)
D.cTm=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.O6=w([1,2,3,-1,-2],x.t)
D.d_m=w([B.je,B.aB],x.O)
D.feV=new C.qb("dice","Dice Roll","Roll for cash & prizes!",B.m0,D.d_m)
D.feS=new C.qb("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",B.qk,B.aqJ)
D.cVw=w([B.dk,B.bj],x.O)
D.feQ=new C.qb("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",B.XJ,D.cVw)
D.cZV=w([B.dJ,B.mr],x.O)
D.feW=new C.qb("memory","Memory Match","Match pairs \u2014 solo or multiplayer",B.XX,D.cZV)
D.bWi=w([B.jy,B.q6],x.O)
D.feT=new C.qb("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",G.Xv,D.bWi)
D.cTl=w([M.kU,D.TU],x.O)
D.feR=new C.qb("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",B.Et,D.cTl)
D.feU=new C.qb("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",B.ct,Ai.mK)
D.cUL=w([D.feV,D.feS,D.feQ,D.feW,D.feT,D.feR,D.feU],A.az("O<qb>"))
D.cW2=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.b6h=new A.w(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,B.t)
D.b69=new A.w(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,B.t)
D.ab4=new A.w(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,B.t)
D.cWL=w([D.b6h,D.b69,D.ab4],x.O)
D.b80=new A.w(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,B.t)
D.cWN=w([B.a8c,D.b80,D.ab4],x.O)
D.cXl=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.asN=w([D.nT,B.c,D.ew,B.c3,B.bd,B.au],x.O)
D.dlD=new C.qQ("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.dlC=new C.qQ("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.dlz=new C.qQ("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.dlH=new C.qQ("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.dlK=new C.qQ("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.dlE=new C.qQ("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a_Q=w([D.dlD,D.dlC,D.dlz,D.dlH,D.dlK,D.dlE],x.F)
D.d_7=w([B.cb,B.q6],x.O)
D.dJl={checkers_deluxe:0,tic_tac_go:1}
D.aym=new A.bs(D.dJl,["Checkers Deluxe","Tic Tac Go"],A.az("bs<n,n>"))
D.dIw={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.ayw=new A.bs(D.dIw,[1,2,3,4,5,6,7],A.az("bs<n,I>"))
D.deC=new C.a4t(null)
D.dhY=new C.ll("signature","NGMY Support Team",null,null)
D.dhZ=new C.ll("divider","",null,null)
D.P_=new C.Tq(!1,!1,!1,!1)
D.P1=new C.M2(!1,!1,!1,!1)
D.dj1=new C.M2(!0,!0,!1,!1)
D.B7=new C.ao9(0,"swahili")
D.aAj=new C.ao9(1,"english")
D.B8=new C.ao9(2,"mix")
D.cOu=w([B.hK,B.iY,B.du],x.O)
D.bqj=new A.a0(63118,"MaterialIcons",!1)
D.dmL=new C.oA(D.cOu,B.hg,B.aX,"BACKGAMMON","\ud83c\udfb2",D.bqj)
D.bsg=new A.a0(983637,"MaterialIcons",!1)
D.dmM=new C.oA(Af.asX,B.bn,B.f0,"EURO WHEEL","\ud83c\udfa1",D.bsg)
D.cWk=w([B.M,B.aI,B.bw],x.O)
D.dmN=new C.oA(D.cWk,B.aN,B.ai,"ROYALE","\u265f\ufe0f",G.Xv)
D.cCD=w([B.dD,B.bj,B.e9],x.O)
D.dmO=new C.oA(D.cCD,B.aF,B.d9,"CONNECT 4","\ud83d\udd34",B.Y9)
D.cRY=w([B.dt,B.fe,B.q6],x.O)
D.dmP=new C.oA(D.cRY,B.u0,B.cb,"PUNTO BANCO","\ud83d\udc8e",B.lv)
D.cle=w([B.n9,B.i_,B.lj],x.O)
D.dmQ=new C.oA(D.cle,B.iT,B.jz,"DOMINOES","\ud83c\udc53",B.ahl)
D.cWY=w([B.wb,B.u1,B.hq],x.O)
D.dmR=new C.oA(D.cWY,B.zm,B.hp,"WAR","\u2694\ufe0f",N.Xr)
D.dmS=new C.oA(B.asS,B.aL,B.ai,"PREMIUM","\ud83c\udfae",B.m0)
D.cEa=w([B.jw,B.aB,B.dJ],x.O)
D.dmT=new C.oA(D.cEa,B.f_,B.f9,"JACKPOT","\ud83c\udfb0",B.m0)
D.cRb=w([B.lg,B.lO,B.bz],x.O)
D.dmU=new C.oA(D.cRb,B.pX,B.c3,"LIVE BINGO","\ud83c\udfb1",B.Ee)
D.cxe=w([B.iY,B.dZ,B.aX],x.O)
D.bpK=new A.a0(62865,"MaterialIcons",!1)
D.dmV=new C.oA(D.cxe,B.rl,B.aL,"BIG SPIN","\ud83c\udfa1",D.bpK)
D.dmW=new C.oA(B.a_P,B.aJ,B.bn,"HOLD'EM","\u2660\ufe0f",B.jH)
D.cXk=w([B.eQ,B.fm,B.aW],x.O)
D.boS=new A.a0(61234,"MaterialIcons",!1)
D.dmX=new C.oA(D.cXk,B.lS,B.aS,"CRAPS","\ud83c\udfb2",D.boS)
D.cC_=w([B.j0,B.iC,B.bL],x.O)
D.dmY=new C.oA(D.cC_,B.bI,B.b9,"PLINKO","\ud83d\udc8e",Aj.Lf)
D.bs1=new A.a0(983492,"MaterialIcons",!1)
D.dmZ=new C.oA(B.a_P,B.eO,B.bn,"SNOOKER","\ud83c\udfb1",D.bs1)
D.cV7=w([B.eQ,B.fm,B.aS],x.O)
D.dn_=new C.oA(D.cV7,B.q1,B.bs,"PROFIT LAB","\ud83d\udcb0",B.hR)
D.cVp=w([B.eF,B.fv,B.bn],x.O)
D.bqG=new A.a0(63324,"MaterialIcons",!1)
D.dn0=new C.oA(D.cVp,B.zj,B.bl,"KLONDIKE","\ud83c\udccf",D.bqG)
D.cP4=w([B.da,B.bi,B.M],x.O)
D.dn1=new C.oA(D.cP4,B.aL,B.aI,"VEGAS TABLE","\ud83c\udccf",A_.EH)
D.pk=new C.Dk(0,"continueGame")
D.pl=new C.Dk(1,"youWin")
D.G9=new C.Dk(2,"youLose")
D.Pa=new C.Dk(3,"draw")
D.aAy=new C.U8(0,"found")
D.dFO=new C.U8(1,"foundLive")
D.a1t=new C.U8(2,"notFound")
D.aAz=new C.U8(3,"wrongAccount")
D.dLm=new A.v(4,12)
D.dNW=new A.C(B.JR,B.r6,null)
D.bjX=new A.M(4,0,0,3)
D.eBB=new A.F(!0,B.aK,null,null,null,null,10,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f90=new A.x("NGMY Helper",null,D.eBB,null,null,null,null,null,null,null,null,null)
D.dOb=new A.C(D.bjX,D.f90,null)
D.bqy=new A.a0(63284,"MaterialIcons",!1)
D.bvI=new A.ad(D.bqy,18,B.nV,null,null,null)
D.eFZ=new A.F(!0,B.nV,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eT1=new A.x("Continue",null,D.eFZ,null,null,null,null,null,null,null,null,null)
D.cQy=w([D.bvI,B.bq,D.eT1],x.p)
D.eni=new A.cC(B.aZ,B.e,B.R,B.m,null,B.p,null,0,D.cQy,null)
D.dOe=new A.C(B.iI,D.eni,null)
D.dOo=new A.C(B.bR,B.r6,null)
D.b5X=new A.w(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,B.t)
D.cNp=w([B.fT,B.fm,B.cY,D.b5X],x.O)
D.bIg=new A.a7(B.ax,B.aC,B.w,D.cNp,B.Az,null)
D.aSK=new A.o(null,null,null,null,null,D.bIg,B.n)
D.bcj=new A.kB(D.aSK,B.ba,null,null)
D.dTx=new A.cF(0,0,0,0,null,null,D.bcj,null)
D.bxp=new A.ad(B.ur,11,B.c,null,null,null)
D.dTB=new A.cF(10,12,null,null,null,null,D.bxp,null)
D.cpS=w([B.hh,B.eF,B.kT],x.O)
D.dUa=new A.bR(B.I0,1.1,B.w,null,0,D.cpS,null,null)
D.b78=new A.w(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,B.t)
D.b2l=new A.w(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,B.t)
D.b3U=new A.w(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,B.t)
D.cLm=w([D.b78,D.b2l,D.b3U],x.O)
D.dUh=new A.bR(B.a5Z,1.05,B.w,null,0,D.cLm,null,null)
D.dUD=new A.bR(B.A,0.5,B.w,null,0,W.ZT,null,null)
D.elC=new A.ac(-18,0,18,1)
D.em3=new A.ac(-3,-5,3,5)
D.bw9=new A.ad(B.ej,16,D.ew,null,null,null)
D.aKO=new A.F(!0,D.ew,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6T=new A.x("Screenshot added \xb7 tap to change",null,D.aKO,null,null,null,null,null,null,null,null,null)
D.cA1=w([D.bw9,B.bq,D.f6T],x.p)
D.emM=new A.cC(B.aZ,B.b6,B.j,B.m,null,B.p,null,0,D.cA1,null)
D.bzU=new A.ad(B.jI,15,D.ew,null,null,null)
D.f4O=new A.x("Refresh",null,D.aKO,null,null,null,null,null,null,null,null,null)
D.cC8=w([D.bzU,B.d6,D.f4O],x.p)
D.emO=new A.cC(B.aZ,B.e,B.R,B.m,null,B.p,null,0,D.cC8,null)
D.dIW={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.eoc=new A.f6(D.dIW,3,x.M)
D.dIG={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.eoi=new A.f6(D.dIG,36,x.M)
D.dIJ={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.eoq=new A.f6(D.dIJ,6,x.M)
D.dJL={memory:0,typing:1,scramble:2,pattern:3}
D.md=new A.f6(D.dJL,4,x.M)
D.eqy=new A.ar(276,276)
D.erd=new A.a3(13,null,null,null)
D.aYq=new A.fb(2.6,null,null,null,null,B.aL,null,null,null,null)
D.ern=new A.a3(26,26,D.aYq,null)
D.es7=new A.a3(null,7,null,null)
D.esg=new A.hJ(8,0,0,1,null)
D.f7U=new A.x("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aIp=new A.b_(D.f7U,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eOy=new A.x("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.eva=new A.b_(D.eOy,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.ePw=new A.x("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.evg=new A.b_(D.ePw,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f4Y=new A.x("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.evU=new A.b_(D.f4Y,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.b6B=new A.w(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,B.t)
D.eEY=new A.F(!0,D.b6B,null,null,null,null,9,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyV=new A.es("$",null,null,B.cU,null,null,null,null,null,null,D.eEY)
D.ez9=new A.F(!0,B.M,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezs=new A.F(!0,B.c,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezx=new A.F(!0,B.bi,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezU=new A.F(!0,B.M,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eA3=new A.F(!0,B.c,null,null,null,null,19,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eA9=new A.F(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAh=new A.F(!0,null,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAY=new A.F(!0,B.aL,null,null,null,null,28,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBt=new A.F(!0,D.ew,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBv=new A.F(!0,B.bI,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCd=new A.F(!0,E.zh,null,null,null,null,13,B.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJB=new A.F(!0,B.c,null,null,null,null,20,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDH=new A.F(!0,B.bI,null,null,null,null,11.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDZ=new A.F(!0,B.al,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,B.az,null,null,null,null,null,null,null,null)
D.eEf=new A.F(!0,B.al,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFc=new A.F(!0,B.c,null,null,null,null,11,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFr=new A.F(!0,B.c,null,null,null,null,14,B.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFC=new A.F(!0,B.bl,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFD=new A.F(!0,B.c,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,B.az,null,null,null,null,null,null,null,null)
D.eG6=new A.F(!0,B.it,null,null,null,null,10.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b1c=new A.w(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,B.t)
D.eGj=new A.F(!0,D.b1c,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHE=new A.F(!0,B.aF,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eI_=new A.F(!0,D.a9G,null,null,null,null,9,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKh=new A.F(!0,E.zh,null,null,null,null,11,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIk=new A.F(!0,B.fv,null,null,null,null,52,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIl=new A.F(!0,B.bw,null,null,null,null,7,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIA=new A.F(!0,E.zh,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.vi=new A.F(!0,B.c,null,null,null,null,13,B.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b4E=new A.w(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,B.t)
D.eIN=new A.F(!0,D.b4E,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJi=new A.F(!0,B.OG,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKg=new A.F(!0,B.c,null,null,null,null,38,B.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKm=new A.F(!0,B.iG,null,null,null,null,11,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKq=new A.F(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKw=new A.F(!0,B.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKT=new A.F(!0,B.M,null,null,null,null,10,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKX=new A.F(!0,B.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLO=new A.F(!0,B.M,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMb=new A.F(!0,B.al,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMr=new A.F(!0,B.bl,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMT=new A.F(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMX=new A.F(!0,B.M,null,null,null,null,11,B.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNQ=new A.x("Value per pair",null,B.hn,null,null,null,null,null,null,null,null,null)
D.eNR=new A.x("Restore now",null,B.ce,null,null,null,null,null,null,null,null,null)
D.eOl=new A.x("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aK1=new A.F(!0,B.cT,null,null,null,null,12,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOt=new A.x("AVAILABLE PLANS",null,D.aK1,null,null,null,null,null,null,null,null,null)
D.eOw=new A.x("I understand",null,B.cr,null,null,null,null,null,null,null,null,null)
D.eOZ=new A.x("Go Back",null,B.cr,null,null,null,null,null,null,null,null,null)
D.eC3=new A.F(!0,B.bw,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePD=new A.x("PLAN VALUE",null,D.eC3,null,null,null,null,null,null,null,null,null)
D.ePF=new A.x("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.eQ0=new A.x("Deposit",null,B.Rb,null,null,null,null,null,null,null,null,null)
D.eLb=new A.F(!0,B.f_,null,null,null,null,null,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQW=new A.x("JACKPOT SLOTS",null,D.eLb,null,null,null,null,null,null,null,null,null)
D.eRd=new A.x("Restore",null,B.ce,null,null,null,null,null,null,null,null,null)
D.eC7=new A.F(!0,B.c,null,null,null,null,12,B.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRg=new A.x("YOUR NUMBER",null,D.eC7,null,null,null,null,null,null,null,null,null)
D.eRu=new A.x("SPIN REELS",null,G.a4a,null,null,null,null,null,null,null,null,null)
D.eRU=new A.x("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.eSn=new A.x("Perfect Score Profit",null,B.hn,null,null,null,null,null,null,null,null,null)
D.eT_=new A.x("Join room",null,B.kg,null,null,null,null,null,null,null,null,null)
D.eUR=new A.x("Add payment screenshot",null,B.jR,null,null,null,null,null,null,null,null,null)
D.eV4=new A.x("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.eKt=new A.F(!0,B.aL,null,null,null,null,11,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVv=new A.x("INVITE A PLAYER",null,D.eKt,null,null,null,null,null,null,null,null,null)
D.eJF=new A.F(!0,B.Tg,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVU=new A.x("NGMY GOLD LEADER",null,D.eJF,null,null,null,null,null,null,null,null,null)
D.eWn=new A.x("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.eWK=new A.x("Invest & Play",null,B.ov,null,null,null,null,null,null,null,null,null)
D.aJV=new A.F(!0,D.w2,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eX6=new A.x("VALID THRU",null,D.aJV,null,null,null,null,null,null,null,null,null)
D.aKy=new A.F(!0,B.aA,null,null,null,null,11,B.I,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXe=new A.x("DEALER",null,D.aKy,null,null,null,null,null,null,null,null,null)
D.eXk=new A.x("CARDHOLDER",null,D.aJV,null,null,null,null,null,null,null,null,null)
D.eJb=new A.F(!0,B.aJ,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY0=new A.x("NGMY PLATINUM",null,D.eJb,null,null,null,null,null,null,null,null,null)
D.eMi=new A.F(!0,B.oT,null,null,null,null,10,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYD=new A.x("EARNED SO FAR",null,D.eMi,null,null,null,null,null,null,null,null,null)
D.eZ8=new A.x("VS",null,B.aJP,null,null,null,null,null,null,null,null,null)
D.eZx=new A.x("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.eZT=new A.x("One day left",null,B.aJz,null,B.L,null,null,null,null,null,null,null)
D.f_c=new A.x("Keep typing \u2014 mistakes are counted in your payout",null,B.BN,null,null,null,null,null,null,null,null,null)
D.f_d=new A.x("Multiplayer invite",null,B.kg,null,null,null,null,null,null,null,null,null)
D.f_n=new A.x("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.eAN=new A.F(!0,B.OG,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_t=new A.x("\ud83d\udcb0 Partial Payout System",null,D.eAN,null,null,null,null,null,null,null,null,null)
D.f_D=new A.x("Browse Topics",null,B.eM,null,null,null,null,null,null,null,null,null)
D.ezS=new A.F(!0,B.c,null,null,null,null,22,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_R=new A.x("Investment Required",null,D.ezS,null,B.L,null,null,null,null,null,null,null)
D.ezp=new A.F(!0,B.c,null,null,null,null,16.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1e=new A.x("Network Status",null,D.ezp,null,null,null,null,null,null,null,null,null)
D.f1K=new A.x("Their account email",null,F.a3X,null,null,null,null,null,null,null,null,null)
D.f22=new A.x("Verification code",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f23=new A.x("Category",null,null,null,null,null,null,null,null,null,null,null)
D.f2f=new A.x("ACTIVE ASSET",null,D.aK1,null,null,null,null,null,null,null,null,null)
D.f2z=new A.x("Scan QR",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f2E=new A.x("Check word",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f31=new A.x("YOUR HAND",null,D.aKy,null,null,null,null,null,null,null,null,null)
D.f3x=new A.x("NGMY Music Studio",null,B.l6,null,null,null,null,null,null,null,null,null)
D.f3A=new A.x("I sent it \u2014 submit deposit",null,B.ov,null,null,null,null,null,null,null,null,null)
D.f4g=new A.x("Back",null,B.QL,null,null,null,null,null,null,null,null,null)
D.eN7=new A.F(!0,null,null,null,null,null,null,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4m=new A.x("DEAL / PLAY ROUND",null,D.eN7,null,null,null,null,null,null,null,null,null)
D.f4y=new A.x("Got it \u2014 keep chatting",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f4H=new A.x("3 Messages Left",null,B.aKm,null,null,null,null,null,null,null,null,null)
D.f5a=new A.x("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.f5i=new A.x("Copy",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f5D=new A.x("How many games?",null,F.a3X,null,null,null,null,null,null,null,null,null)
D.eIH=new A.F(!0,B.aA,null,null,null,null,null,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5P=new A.x("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.eIH,null,B.L,null,null,null,null,null,null,null)
D.f7i=new A.x("Question",null,null,null,null,null,null,null,null,null,null,null)
D.f7u=new A.x("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.eNv=new A.F(!0,B.c,null,null,null,null,12.5,B.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8W=new A.x("NGMY  WALLET",null,D.eNv,null,null,null,null,null,null,null,null,null)
D.f8X=new A.x("Select Your Bet",null,B.hb,null,null,null,null,null,null,null,null,null)
D.fcc=new A.cx("history",x.W)
D.fch=new A.cx("ngmy_local_home",x.W)
D.fci=new A.cx("ngmy_local_invest",x.W)
D.fcj=new A.cx("ngmy_local_wallet",x.W)
D.feD=new C.Xb(null)
D.aN2=new C.ayf(0,"grid")
D.aN3=new C.ayf(1,"questions")
D.fft=new C.ayf(2,"answer")
D.fgh=new C.Y4(null)})();(function staticFields(){$.fBh=A.aZ(x.N)
$.h_r=A.S(x.N,x.k)
$.fGD=null
$.fGr=A.S(x.N,A.az("vt"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hWm","bzW",()=>C.hEH())
w($,"hW8","h7k",()=>{var v=null,u=A.iS(v,v,v,v,D.eyV,B.a6,B.cn,v,B.eE,B.cm)
u.fq()
return u})})()};
(a=>{a["oQ6sdyxb1F2VrDeBEpUng70/bvw="]=a.current})($__dart_deferred_initializers__);