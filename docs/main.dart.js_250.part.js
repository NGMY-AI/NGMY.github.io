((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,L,Q,A_,E,M,A0,N,A1,R,O,A2,S,A3,P,A4,T,A5,A6,A7,A8,A9,Aa,U,Ab,C={
fUX(d,e,f){var w=null,v=f.k("EI<0>"),u=new A.EI(w,w,w,w,v)
$.a0H()
u.d=new C.cm6(new A.VQ(),e,u,f,d)
return new A.hL(u,v.k("hL<1>"))},
cm6:function cm6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cm7:function cm7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cm3:function cm3(d){this.a=d},
cm4:function cm4(d,e){this.a=d
this.b=e},
cm5:function cm5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cm2:function cm2(d,e,f){this.a=d
this.b=e
this.c=f},
bnC:function bnC(d){this.a=d},
fUW(d,e,f,g){return new C.asV(d,e,f,null,g.k("asV<0>"))},
E0:function E0(){},
aF7:function aF7(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
eMv:function eMv(d){this.a=d},
eMu:function eMu(d,e){this.a=d
this.b=e},
eMx:function eMx(d){this.a=d},
eMs:function eMs(d,e,f){this.a=d
this.b=e
this.c=f},
eMw:function eMw(d){this.a=d},
eMt:function eMt(d){this.a=d},
asV:function asV(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
hJo(d){var w=B.a.i(d)
while(B.a.a_(w,"$"))w=B.a.i(B.a.aX(w,1))
return w},
h3X(d){var w=C.hJo(d)
if(w.length===0)return""
return"$"+w},
ffE(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ffE=A.e(function(f,g){if(f===1)return A.f(g,v)
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
break}if(q.d!==B.fu){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!A.dp(m,"game payout:",0))if(!A.dp(m,"game partial:",0)){if(!A.dp(m,"multiplayer payout:",0))o=A.dp(m,"dice",0)&&q.e===B.f6
else o=l
l=o}if(!l){w=4
break}if(A.dp(m,"game payout:",0))k=B.a.i(B.a.aX(n,B.a.cP(m,"game payout:")+12))
else if(A.dp(m,"game partial:",0)){k=B.a.i(B.a.aX(n,B.a.cP(m,"game partial:")+13))
j=B.a.cP(k,"(")
if(j>0)k=B.a.i(B.a.am(k,0,j))}else if(A.dp(m,"multiplayer payout:",0)){k=B.a.i(B.a.aX(n,B.a.cP(m,"multiplayer payout:")+19))
j=B.a.cP(k,"(")
if(j>0)k=B.a.i(B.a.am(k,0,j))}else k=A.dp(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return A.b(C.u0(q.c,p,n,d,o,null,q.a,!0),$async$ffE)
case 6:case 4:e.length===s||(0,A.K)(e),++r
w=3
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$ffE,v)},
hNZ(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
hKr(d,e,f){return B.d.ba(e,new C.fjn(f,B.a.i(d.toLowerCase())))},
fje(d){var w
C.fRh(d)
w=d.c4
return A.bj(new A.J(w,new C.fjf(),A.U(w).k("J<1,@>")),!0,x.N)},
hAl(d,e,f){var w,v,u,t,s,r,q=null,p=B.bP,o=B.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aT.toString
u=$.eb().gi2().b
if(u.a===0)t=1
else{new A.bg(u,A.a2(u).k("bg<2>")).gL(0)
u=$.kQ()
s=u.d
t=s==null?u.gfY():s}w=B.k.dF(f*t)
v=new C.f48(f)
if(J.cV(n,"data:image"))try{u=A.fF(B.cw.aG(B.d.gaj(J.lc(n,","))),B.A,w,new C.f45(v),B.fL,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.cV(n,"supabase://"))return new A.kW(A.a_x(n),new C.f46(f,e,p,w,v),q,q,x.gh)
return A.ka(n,B.A,w,new C.f47(v),B.fL,p,!0,e,q,q,f)},
fGn(d,e){return new A.a5(e,e,A.hO(C.hAl(d,e,e),B.ao),null)},
hsY(){var w,v,u=A.a([],x._),t=x.N,s=A.z(D.cVV,x.gm)
for(w=0;w<36;++w){v=B.AO[w]
s.push(new C.qc(v.a,v.b,v.c,v.e,v.f))}return new C.axr(u,A.T(t,t),s)},
fjn:function fjn(d,e){this.a=d
this.b=e},
fjf:function fjf(){},
f48:function f48(d){this.a=d},
f45:function f45(d){this.a=d},
f46:function f46(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f44:function f44(d){this.a=d},
f47:function f47(d){this.a=d},
aiF:function aiF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
qc:function qc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
axr:function axr(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
d37:function d37(d,e){this.a=d
this.b=e},
d3i:function d3i(d,e){this.a=d
this.b=e},
d3A:function d3A(){},
d3B:function d3B(d){this.a=d},
d3q:function d3q(d,e){this.a=d
this.b=e},
d3p:function d3p(){},
d3r:function d3r(d){this.a=d},
d3o:function d3o(){},
d3t:function d3t(d){this.a=d},
d3s:function d3s(){},
d3l:function d3l(d){this.a=d},
d3j:function d3j(d){this.a=d},
d3k:function d3k(d){this.a=d},
d3m:function d3m(d){this.a=d},
d3n:function d3n(d){this.a=d},
d3d:function d3d(d,e){this.a=d
this.b=e},
d3e:function d3e(d,e){this.a=d
this.b=e},
d3b:function d3b(d){this.a=d},
d3c:function d3c(d){this.a=d},
d3f:function d3f(d){this.a=d},
d3g:function d3g(d){this.a=d},
d3h:function d3h(d,e,f){this.a=d
this.b=e
this.c=f},
d3a:function d3a(d,e){this.a=d
this.b=e},
d39:function d39(d,e){this.a=d
this.b=e},
d38:function d38(d,e){this.a=d
this.b=e},
d3z:function d3z(d){this.a=d},
d3x:function d3x(d,e,f){this.a=d
this.b=e
this.c=f},
d3w:function d3w(d,e,f){this.a=d
this.b=e
this.c=f},
d3v:function d3v(d,e){this.a=d
this.b=e},
d3u:function d3u(){},
d3y:function d3y(d){this.a=d},
aAf:function aAf(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bfQ:function bfQ(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
dGn:function dGn(d){this.a=d},
dGm:function dGm(d){this.a=d},
dGo:function dGo(d){this.a=d},
dGl:function dGl(){},
dGp:function dGp(d,e){this.a=d
this.b=e},
dGk:function dGk(d){this.a=d},
dGq:function dGq(d){this.a=d},
aiE:function aiE(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
axq:function axq(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
d31:function d31(d){this.a=d},
d34:function d34(d){this.a=d},
d35:function d35(d){this.a=d},
d36:function d36(d){this.a=d},
d33:function d33(d,e){this.a=d
this.b=e},
d32:function d32(d,e){this.a=d
this.b=e},
aiG:function aiG(d,e,f,g,h,i,j,k,l,m){var _=this
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
axs:function axs(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.Y=_.b4=_.bf=_.y2=_.y1=0
_.aC=_.aL=_.aA=_.aw=$
_.bH=_.b8=_.aY=_.b0=null
_.aQ=!1
_.bP=_.bg=null
_.c4=!1
_.cf=_.cT=""
_.c=_.a=_.bA=null},
d4U:function d4U(d,e){this.a=d
this.b=e},
d4X:function d4X(d){this.a=d},
d4Y:function d4Y(d){this.a=d},
d4Z:function d4Z(d){this.a=d},
d5_:function d5_(d){this.a=d},
d50:function d50(d){this.a=d},
d4V:function d4V(d){this.a=d},
d4W:function d4W(d){this.a=d},
d49:function d49(d,e){this.a=d
this.b=e},
d4a:function d4a(d,e){this.a=d
this.b=e},
d4D:function d4D(d){this.a=d},
d4E:function d4E(){},
d4p:function d4p(d,e,f){this.a=d
this.b=e
this.c=f},
d4q:function d4q(d){this.a=d},
d4r:function d4r(d,e,f){this.a=d
this.b=e
this.c=f},
d4s:function d4s(d,e){this.a=d
this.b=e},
d4t:function d4t(){},
d3C:function d3C(d){this.a=d},
d48:function d48(d,e){this.a=d
this.b=e},
d4F:function d4F(){},
d4O:function d4O(){},
d4C:function d4C(d){this.a=d},
d4B:function d4B(d){this.a=d},
d46:function d46(d){this.a=d},
d47:function d47(){},
d4J:function d4J(){},
d4K:function d4K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d4L:function d4L(d,e,f){this.a=d
this.b=e
this.c=f},
d3D:function d3D(){},
d3E:function d3E(d){this.a=d},
d3F:function d3F(){},
d4i:function d4i(d,e){this.a=d
this.b=e},
d4j:function d4j(d,e,f){this.a=d
this.b=e
this.c=f},
d4k:function d4k(d){this.a=d},
d4h:function d4h(d){this.a=d},
d4u:function d4u(d){this.a=d},
d4v:function d4v(){},
d4w:function d4w(d){this.a=d},
d4x:function d4x(){},
d4y:function d4y(d){this.a=d},
d4z:function d4z(){},
d4I:function d4I(d,e,f){this.a=d
this.b=e
this.c=f},
d4l:function d4l(d){this.a=d},
d4m:function d4m(d,e){this.a=d
this.b=e},
d4n:function d4n(d){this.a=d},
d4o:function d4o(d){this.a=d},
d4M:function d4M(d){this.a=d},
d4N:function d4N(d){this.a=d},
d3G:function d3G(d){this.a=d},
d3H:function d3H(d,e){this.a=d
this.b=e},
d3I:function d3I(d){this.a=d},
d3J:function d3J(d){this.a=d},
d4G:function d4G(d,e){this.a=d
this.b=e},
d4H:function d4H(d){this.a=d},
d4g:function d4g(d,e){this.a=d
this.b=e},
d4A:function d4A(d,e,f){this.a=d
this.b=e
this.c=f},
d4e:function d4e(d,e,f){this.a=d
this.b=e
this.c=f},
d4f:function d4f(){},
d4P:function d4P(d){this.a=d},
d4Q:function d4Q(d){this.a=d},
d4R:function d4R(d){this.a=d},
d4T:function d4T(d){this.a=d},
d4S:function d4S(){},
d4d:function d4d(d,e,f){this.a=d
this.b=e
this.c=f},
d4c:function d4c(d,e){this.a=d
this.b=e},
d4b:function d4b(d,e){this.a=d
this.b=e},
d3W:function d3W(d){this.a=d},
d3V:function d3V(d,e){this.a=d
this.b=e},
d3X:function d3X(d){this.a=d},
d3U:function d3U(d,e){this.a=d
this.b=e},
d3Y:function d3Y(d){this.a=d},
d3T:function d3T(){},
d3Z:function d3Z(d){this.a=d},
d3R:function d3R(){},
d3S:function d3S(d){this.a=d},
d4_:function d4_(d){this.a=d},
d3Q:function d3Q(d,e){this.a=d
this.b=e},
d40:function d40(d){this.a=d},
d3P:function d3P(d,e){this.a=d
this.b=e},
d3L:function d3L(d,e){this.a=d
this.b=e},
d41:function d41(d){this.a=d},
d3O:function d3O(d,e){this.a=d
this.b=e},
d42:function d42(d){this.a=d},
d3N:function d3N(d){this.a=d},
d3K:function d3K(d,e){this.a=d
this.b=e},
d43:function d43(d,e,f){this.a=d
this.b=e
this.c=f},
d44:function d44(d){this.a=d},
d3M:function d3M(){},
d45:function d45(d){this.a=d},
ajx:function ajx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bd1:function bd1(){this.c=this.a=null},
d8b:function d8b(d,e){this.a=d
this.b=e},
d8a:function d8a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afS:function afS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
auG:function auG(d,e,f,g,h,i,j,k,l,m){var _=this
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
cx6:function cx6(d){this.a=d},
cwr:function cwr(d,e){this.a=d
this.b=e},
cwh:function cwh(d){this.a=d},
cwi:function cwi(d){this.a=d},
cwB:function cwB(d){this.a=d},
cwy:function cwy(d){this.a=d},
cwz:function cwz(d){this.a=d},
cwA:function cwA(d,e,f){this.a=d
this.b=e
this.c=f},
cwt:function cwt(d){this.a=d},
cws:function cws(d){this.a=d},
cwj:function cwj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cww:function cww(d){this.a=d},
cwv:function cwv(d){this.a=d},
cwu:function cwu(d,e){this.a=d
this.b=e},
cwU:function cwU(d){this.a=d},
cwO:function cwO(d){this.a=d},
cwR:function cwR(d){this.a=d},
cwQ:function cwQ(){},
cwN:function cwN(d){this.a=d},
cwP:function cwP(d,e){this.a=d
this.b=e},
cwM:function cwM(){},
cwo:function cwo(){},
cwp:function cwp(d,e){this.a=d
this.b=e},
cwq:function cwq(d){this.a=d},
cwm:function cwm(d,e){this.a=d
this.b=e},
cwn:function cwn(d,e){this.a=d
this.b=e},
cwE:function cwE(d,e){this.a=d
this.b=e},
cwx:function cwx(d){this.a=d},
cwF:function cwF(d){this.a=d},
cwG:function cwG(d,e){this.a=d
this.b=e},
cwH:function cwH(d,e){this.a=d
this.b=e},
cwI:function cwI(d,e){this.a=d
this.b=e},
cwJ:function cwJ(d,e,f){this.a=d
this.b=e
this.c=f},
cwK:function cwK(d){this.a=d},
cwL:function cwL(d){this.a=d},
cwC:function cwC(d,e){this.a=d
this.b=e},
cwT:function cwT(d){this.a=d},
cwD:function cwD(d,e){this.a=d
this.b=e},
cx5:function cx5(d){this.a=d},
cwZ:function cwZ(d){this.a=d},
cx1:function cx1(d){this.a=d},
cwW:function cwW(d,e){this.a=d
this.b=e},
cx_:function cx_(){},
cx0:function cx0(d,e){this.a=d
this.b=e},
cwX:function cwX(d){this.a=d},
cwY:function cwY(d){this.a=d},
cx3:function cx3(){},
cx2:function cx2(d){this.a=d},
cwV:function cwV(d,e){this.a=d
this.b=e},
cx4:function cx4(d){this.a=d},
cwk:function cwk(d){this.a=d},
cwS:function cwS(d,e){this.a=d
this.b=e},
cwl:function cwl(d,e,f){this.a=d
this.b=e
this.c=f},
aHw:function aHw(){},
aHx:function aHx(){},
aHy:function aHy(){},
aIt:function aIt(){},
bUh(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase())
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
bUi(d){var w=B.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hgx(d,e){var w=d.ax
if(w<0)return!1
return w===e},
aUs(d,e){return C.hgy(d,e)},
hgy(d,e){var w=0,v=A.j(x.di),u,t,s,r,q,p
var $async$aUs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aYd(d),$async$aUs)
case 3:p=g
if(p!=null){try{t=B.R.aE(0,p.c,null)
if(x.f.b(t)){s=C.fPD(A.a_(t,x.N,x.z))
if(s==null){u=new A.ED(D.a1y,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bUh(s,e,p.b)){u=new A.ED(D.aAN,null)
w=1
break}r=p.a?D.dH8:D.aAM
u=new A.ED(r,s)
w=1
break}}catch(o){}u=new A.ED(D.a1y,null)
w=1
break}s=C.fPE(d)
if(s==null){u=new A.ED(D.a1y,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bUh(s,e,null)){u=new A.ED(D.aAN,null)
w=1
break}u=new A.ED(D.aAM,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aUs,v)},
fPE(d){var w,v,u,t,s,r
try{w=B.a.i(d)
if(J.cV(w,"\ufeff"))w=J.mj(w,1)
v=!1
if(J.cV(w,"NGMYSNAP1|")){v=!0
w=B.c1.c6(0,B.cw.aG(J.mj(w,10)))}u=B.R.aE(0,w,null)
if(!x.f.b(u))return null
t=A.a_(u,x.N,x.z)
s=v?C.hgw(t):C.fPD(t)
return s}catch(r){return null}},
hgw(d){var w,v,u,t,s,r,q,p,o,n=new C.bUe(),m=new C.bUd(),l=d.h(0,"qi")
if(x.f.b(l)){w=A.a_(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new A.Q(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=A.aR(w.h(0,"d"))
p=new A.uK(v,u,t,s,r,B.k.N(q==null?0:q))}else p=null
v=d.h(0,"qu")
v=J.k(v==null?"User":v)
u=m.$1(d.h(0,"qb"))
t=m.$1(d.h(0,"qp"))
s=J.y(d.h(0,"qc"),!0)
r=n.$1(d.h(0,"qs"))
q=n.$1(d.h(0,"ql"))
n=n.$1(d.h(0,"qe"))
m=m.$1(d.h(0,"qt"))
o=A.aR(d.h(0,"qn"))
if(o==null)o=0
return new A.a3V("","",v,u,t,s,r,q,n,m,o,p,B.hY,new A.Q(Date.now(),0,!1),-1)},
fPD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.y(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.bUg()
v=d.h(0,"activeInvestment")
if(x.f.b(v)){u=A.a_(v,x.N,x.z)
t=u.h(0,"name")
t=J.k(t==null?"":t)
s=A.aR(u.h(0,"amount"))
if(s==null)s=0
r=A.aR(u.h(0,"dailyROI"))
if(r==null)r=0
q=w.$1(u.h(0,"purchaseDate"))
if(q==null)q=new A.Q(Date.now(),0,!1)
p=A.aR(u.h(0,"totalEarned"))
if(p==null)p=0
o=A.aR(u.h(0,"daysClockedIn"))
n=new A.uK(t,s,r,q,p,B.k.N(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=A.z(new A.e3(J.b4(m,new C.bUf(w),x.eG),t),t.k("G.E"))}else l=A.a([],x.E)
t=d.h(0,"email")
t=J.k(t==null?"":t)
s=d.h(0,"ownerRealEmail")
s=J.k(s==null?"":s)
r=d.h(0,"username")
r=J.k(r==null?"User":r)
q=A.aR(d.h(0,"accountBalance"))
if(q==null)q=0
p=A.aR(d.h(0,"totalProfit"))
if(p==null)p=0
o=J.y(d.h(0,"isClockedIn"),!0)
k=w.$1(d.h(0,"clockInStartTime"))
j=w.$1(d.h(0,"lastClockInDate"))
i=w.$1(d.h(0,"lastClockInEarningsDate"))
h=A.aR(d.h(0,"todayClockInEarned"))
if(h==null)h=0
g=A.aR(d.h(0,"clockInPenaltyPercent"))
if(g==null)g=0
w=w.$1(d.h(0,"exportedAt"))
if(w==null)w=new A.Q(Date.now(),0,!1)
f=A.aR(d.h(0,"walletStateRevision"))
f=f==null?null:B.k.N(f)
return new A.a3V(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
fAY(d,e,f,g){var w=0,v=A.j(x.N),u,t,s,r
var $async$fAY=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:t=A.bUc(d,e,f,g)
s=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(t.a,s,"_")
u=A.F8(A.It(t.eF(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fAY,v)},
Ue:function Ue(d,e){this.a=d
this.b=e},
bUe:function bUe(){},
bUd:function bUd(){},
bUg:function bUg(){},
bUf:function bUf(d){this.a=d},
hDn(d){return A.cg(null,B.aT,!0,null,new C.f7o(),d,null,!0,!0,x.N)},
hDA(d,e,f,g){return A.cg(null,B.aT,!0,null,new C.f8B(g,f,e),d,null,!0,!0,x.y)},
al4:function al4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
azv:function azv(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
doF:function doF(d,e){this.a=d
this.b=e},
doG:function doG(d){this.a=d},
dow:function dow(d,e){this.a=d
this.b=e},
dou:function dou(d){this.a=d},
doE:function doE(d){this.a=d},
doD:function doD(d,e){this.a=d
this.b=e},
dot:function dot(d,e){this.a=d
this.b=e},
dos:function dos(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dov:function dov(d){this.a=d},
doC:function doC(){},
doA:function doA(d){this.a=d},
doB:function doB(d,e){this.a=d
this.b=e},
dox:function dox(){},
doy:function doy(d,e){this.a=d
this.b=e},
doz:function doz(d,e){this.a=d
this.b=e},
doH:function doH(d){this.a=d},
Zw:function Zw(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bo7:function bo7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Y9:function Y9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bfq:function bfq(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
doL:function doL(d){this.a=d},
doI:function doI(d,e){this.a=d
this.b=e},
doJ:function doJ(d,e){this.a=d
this.b=e},
doK:function doK(d){this.a=d},
Ya:function Ya(d){this.a=d},
bfr:function bfr(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
doM:function doM(d,e){this.a=d
this.b=e},
f7o:function f7o(){},
f8B:function f8B(d,e,f){this.a=d
this.b=e
this.c=f},
ace:function ace(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eGq:function eGq(d){this.a=d},
eGr:function eGr(d){this.a=d},
Oj:function Oj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Xh:function Xh(d){this.a=d},
awR:function awR(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cZl:function cZl(d){this.a=d},
cZi:function cZi(){},
cZj:function cZj(d){this.a=d},
cZk:function cZk(d){this.a=d},
Sj(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$Sj=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||B.a.i(f).length===0){w=1
break}w=3
return A.b(A.Lm(s),$async$Sj)
case 3:t=h
J.ch(t,A.E(["role",e,"text",B.a.i(f),"at",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z))
w=4
return A.b(A.alk(s,t),$async$Sj)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Sj,v)},
hgQ(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=A.U(d).k("a4<1>")
v=A.z(new A.a4(d,new C.bV_(),w),w.k("G.E"))
w=v.length
if(w===0)return""
u=w<=24?v:B.d.fP(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,A.K)(u),++s){r=u[s]
q=J.a7(r)
p=J.y(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+A.t(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
bV_:function bV_(){},
hIO(d){return B.d.dI(B.AO,new C.ffy(d),new C.ffz()).r},
ffy:function ffy(d){this.a=d},
ffz:function ffz(){},
alz:function alz(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bfx:function bfx(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dv6:function dv6(d){this.a=d},
dv5:function dv5(d){this.a=d},
duY:function duY(d,e,f){this.a=d
this.b=e
this.c=f},
dv2:function dv2(d){this.a=d},
dv_:function dv_(d,e,f){this.a=d
this.b=e
this.c=f},
dv3:function dv3(d){this.a=d},
duZ:function duZ(d){this.a=d},
dv4:function dv4(d){this.a=d},
dv0:function dv0(d){this.a=d},
dv1:function dv1(d){this.a=d},
fRh(d){var w=A.c1l(new A.Q(Date.now(),0,!1)),v=d.bg
if(v===w)return
d.bg=w
d.bP=0
d.c4=A.a([],x.s)},
fRj(d){return A.cg(null,B.x.j(0.82),!0,null,new C.c1q(),d,null,!0,!0,x.H)},
a4y:function a4y(d){this.a=d},
c1q:function c1q(){},
c1p:function c1p(d){this.a=d},
h39(){var w=new A.Q(Date.now(),0,!1),v=w.bN(A.dB(4-A.m9(w),0,0,0,0,0).a),u=A.bW(A.bw(v),1,4,0,0,0,0,0)
return""+A.bw(v)+"-W"+B.a.aT(B.o.u(1+B.k.bw(B.o.ak(v.bv(A.bW(A.bw(u),A.bC(u),A.bO(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
f_c(d,e){var w,v,u,t,s,r,q=A.EP(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.q(t,"email")
r=B.a.i(J.k(s==null?"":s).toLowerCase())
if((B.a.c7(r,"+local.ngmy")?B.a.am(r,0,r.length-11):r)===q)return t}t=A.E(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
hy4(d,e){var w,v,u,t,s,r,q,p=A.EP(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.a7(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c7(q,"+local.ngmy")?B.a.am(q,0,q.length-11):q)===p){w=A.aR(s.h(t,"winsLeft"))
w=w==null?null:B.k.N(w)
return w==null?0:w}}return 0},
hRN(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=A.EP(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.a7(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c7(q,"+local.ngmy")?B.a.am(q,0,q.length-11):q)===n){w=A.aR(s.h(t,o))
w=w==null?null:B.k.N(w)
p=(w==null?0:w)-1
s.m(t,o,p<0?0:p)
return}}},
hEd(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=A.EP(b5),b2=A.c2G(),b3=C.h39()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.a7(s)
q=r.h(s,a2)
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.c7(p,a3)?B.a.am(p,0,p.length-11):p)!==b1)continue
q=A.aR(r.h(s,a4))
o=q==null?a1:B.k.N(q)
if((o==null?0:o)<=0)continue
if(u!=null){r=r.h(s,a5)
r=J.k(r==null?"":r)
q=J.q(u,a5)
q=J.k(q==null?"":q)
if(r===q)r=0
else r=r<q?-1:1
r=r>=0}else r=!0
if(r)u=s}if(u!=null){w=J.a7(u)
v=A.aR(w.h(u,a4))
v=v==null?a1:B.k.N(v)
w.m(u,a4,(v==null?1:v)-1)
w=A.aR(w.h(u,"outcome"))
w=w==null?a1:B.k.N(w)
return w==null?1:w}n=new C.f9m()
for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.q(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c7(p,a3)?B.a.am(p,0,p.length-11):p)!==b1)continue
m=n.$5(s,"perDay",a6,a7,b2)
if(m!=null)return m}for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.q(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c7(p,a3)?B.a.am(p,0,p.length-11):p)!==b1)continue
l=n.$5(s,"perWeek",a8,a9,b3)
if(l!=null)return l}k=C.f_c(b4,b5)
w=J.a7(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?A.a_(v.a(w.h(k,b0)),r,q):A.T(r,q)
w.m(k,b0,j)
for(w=b4.y,w=new A.cQ(w,A.a2(w).k("cQ<1,2>")).gah(0);w.C();){i=w.d
h=i.b
g=J.a7(h)
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
d.m(0,a6,0)}g=A.aR(d.h(0,a6))
a0=g==null?a1:B.k.N(g)
if(a0==null)a0=0
if(a0<f){d.m(0,a6,a0+1)
return A.c4(h,a1)}}if(e>0){g=d.h(0,a9)
if(J.k(g==null?"":g)!==b3){d.m(0,a9,b3)
d.m(0,a8,0)}g=A.aR(d.h(0,a8))
a0=g==null?a1:B.k.N(g)
if(a0==null)a0=0
if(a0<e){d.m(0,a8,a0+1)
return A.c4(h,a1)}}}return a1},
h_V(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[1,2,3],v=d.a,u=0;u<3;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
if(w===0)return 1
t=q[e.aB(w)]
if(t===3&&d.f>=d.e)t=e.he()?1:2
return t},
fGF(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[-1,-2],v=d.a,u=0;u<2;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
return w===0?-1:q[e.aB(w)]},
hEe(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=A.EP(a3),a1=new C.f9n()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.a7(s)
q=r.h(s,"email")
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.c7(p,"+local.ngmy")?B.a.am(p,0,p.length-11):p)!==a0)continue
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
q=new C.f9o(v+r+q>1,l)
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
return C.fGF(a2,a4)}w.m(u,f,m-1)
w.m(u,d,"p")
return 3},
hEc(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=A.aR(i.h(0,"wins")),g=h==null?m:B.k.N(h)
if(g==null)g=0
h=A.aR(i.h(0,"loses"))
w=h==null?m:B.k.N(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.h39():A.c2G()
t=v+"|"+u
s=C.f_c(d,e)
h=J.a7(s)
r=h.h(s,l)
if(J.k(r==null?"":r)!==t){h.m(s,l,t)
h.m(s,k,0)
h.m(s,j,0)}r=A.aR(h.h(s,k))
q=r==null?m:B.k.N(r)
if(q==null)q=0
r=A.aR(h.h(s,j))
p=r==null?m:B.k.N(r)
if(p==null)p=0
o=Math.max(0,g-q)
r=o+Math.max(0,w-p)
if(r<=0)return m
n=f.aB(r)<o
if(n)h.m(s,k,q+1)
else h.m(s,j,p+1)
return n},
hMp(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
d.bcp()
w=C.hEe(d,e,a0)
if(w!=null){if(w===3)++d.f
C.adC(d,e,w)
return w}v=C.hEd(d,e)
if(v!=null){if(v===3)++d.f
C.adC(d,e,v)
return v}u=C.hEc(d,e,a0)
if(u!=null)return new C.fmz(d,a0,e).$1(u)
t=C.f_c(d,e)
s=J.a7(t)
r=A.aR(s.h(t,"winStreak"))
q=r==null?null:B.k.N(r)
if(q==null)q=0
s=A.aR(s.h(t,"loseStreak"))
p=s==null?null:B.k.N(s)
if(p==null)p=0
o=new C.fmB(d,a0)
if(C.hy4(d,e)>0){n=o.$0()
C.hRN(d,e)
C.adC(d,e,n)
return n}if(q>=d.c){n=new C.fmA(d,a0).$0()
C.adC(d,e,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.adC(d,e,n)
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
C.adC(d,e,f)
return f},
c2y(d){var w=0,v=A.j(x.y),u
var $async$c2y=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c2x(d),$async$c2y)
case 3:if(f){u=!0
w=1
break}u=A.c2x(d)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c2y,v)},
adC(d,e,f){var w,v="winStreak",u="loseStreak",t=C.f_c(d,e),s=J.a7(t),r=A.aR(s.h(t,v)),q=r==null?null:B.k.N(r)
if(q==null)q=0
r=A.aR(s.h(t,u))
w=r==null?null:B.k.N(r)
if(w==null)w=0
if(f>0){s.m(t,v,q+1)
s.m(t,u,0)}else{s.m(t,u,w+1)
s.m(t,v,0)}},
f9m:function f9m(){},
f9n:function f9n(){},
f9o:function f9o(d,e){this.a=d
this.b=e},
fmz:function fmz(d,e,f){this.a=d
this.b=e
this.c=f},
fmB:function fmB(d,e){this.a=d
this.b=e},
fmA:function fmA(d,e){this.a=d
this.b=e},
al3:function al3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfo:function bfo(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cO$=d
_.b_$=e
_.c=_.a=null},
doh:function doh(d){this.a=d},
dog:function dog(d){this.a=d},
doi:function doi(d){this.a=d},
dof:function dof(d,e){this.a=d
this.b=e},
aI3:function aI3(){},
LN:function LN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c3n:function c3n(){},
c3m:function c3m(){},
an3:function an3(d,e,f){this.c=d
this.d=e
this.a=f},
fBZ(d,e,f){return A.cg(null,B.x.j(0.88),!0,null,new C.c3P(f,e),d,null,!0,!0,x.H)},
hkB(d){var w,v,u,t,s=B.a.i(d),r=s.split("-")
if(r.length===3){w=A.c4(r[0],null)
v=r[1]
u=A.c4(v,null)
t=A.c4(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?B.i3[u-1]:v)+" "+A.t(t)+", "+A.t(w)}return s},
LV:function LV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c3P:function c3P(d,e){this.a=d
this.b=e},
bg1:function bg1(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
dNh:function dNh(d,e){this.a=d
this.b=e},
dNd:function dNd(){},
dNe:function dNe(){},
dNf:function dNf(d,e){this.a=d
this.b=e},
dNg:function dNg(d,e){this.a=d
this.b=e},
aIC:function aIC(){},
h35(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.bbZ(new C.fhV(w))
w=w.a
return w==null?null:w.c.a},
h2Y(d){$.aT.x1$.push(new C.fhI(d))},
h3h(d){var w=$.rk().gbb(),v=w!=null
if(!v||w.c==null)return
if(C.h35(w)==="GamePlayScreen")if(v&&w.c!=null&&w.oP())w.eD()},
h3g(d){C.h00(d,0)},
h00(d,e){var w,v
if(e>4)return
w=d==null?$.rk().gbb():d
if(w==null||w.c==null)return
v=C.h35(w)
if(v==="GameCenterScreen")return
if(D.eq8.t(0,v)&&w.oP()){w.eD()
$.aT.x1$.push(new C.f5F(w,e))}},
aMp(d,e,f){return A.ec(A.ck(new C.fji(e,d,f)),e,!0)},
fhV:function fhV(d){this.a=d},
fhI:function fhI(d){this.a=d},
fhH:function fhH(d){this.a=d},
f5F:function f5F(d,e){this.a=d
this.b=e},
fji:function fji(d,e,f){this.a=d
this.b=e
this.c=f},
an7(d,e){var w=0,v=A.j(x.H),u
var $async$an7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=A.Tm(e)
w=2
return A.b(A.an6(d,u),$async$an7)
case 2:A.a5b(d,u)
return A.h(null,v)}})
return A.i($async$an7,v)},
u0(d,e,f,g,h,i,j,k){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$u0=A.e(function(l,m){if(l===1)return A.f(m,v)
for(;;)switch(w){case 0:o=A.xv(g)
if(o.length===0){w=1
break}t=e==null?A.Jy(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return A.b(A.LW(o),$async$u0)
case 3:q=m
if(j!=null&&j.length!==0&&J.rl(q,new C.c42(j))){w=1
break}p=e==null?new A.Q(Date.now(),0,!1):e
J.p1(q,0,new A.j_(B.o.u(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return A.b(C.an7(o,q),$async$u0)
case 4:if(i==null||r==null||s)C.a5d(o).bx(new C.c43(),x.S).eN(new C.c44())
case 1:return A.h(u,v)}})
return A.i($async$u0,v)},
a5d(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a5d=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=$.h4e
m=A.xv(d)
if(n==null||m.length===0){w=1
break}w=3
return A.b(A.LW(m),$async$a5d)
case 3:t=f
s=J.cA(t)
if(!s.ba(t,new C.c41())){w=1
break}w=4
return A.b(n.$2(m,t),$async$a5d)
case 4:r=f
q=J.a7(r)
if(q.gJ(r)!==s.gJ(t)){w=1
break}for(p=!1,o=0;o<s.gJ(t);++o)if(B.R.al(s.h(t,o).ac(),null)!==B.R.al(q.h(r,o).ac(),null))p=!0
w=p?5:6
break
case 5:w=7
return A.b(C.an7(m,r),$async$a5d)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$a5d,v)},
aWR(d){var w=0,v=A.j(x.S),u,t
var $async$aWR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fC1(d,!1),$async$aWR)
case 3:t=J
w=4
return A.b(C.an8(d,!1),$async$aWR)
case 4:u=t.dE(f,new C.c40(new A.Q(Date.now(),0,!1).bN(-864e8))).gJ(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWR,v)},
an8(d,e){var w=0,v=A.j(x.ac),u,t,s,r
var $async$an8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=A.xv(d)
if(r.length===0){u=A.a([],x.gi)
w=1
break}w=3
return A.b(A.LW(r),$async$an8)
case 3:t=g
s=A.Tm(t)
if(s.length!==J.aa(t))C.an7(r,s)
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$an8,v)},
hKl(d){var w,v,u,t=new A.Q(Date.now(),0,!1),s=t.bv(d).a,r=B.o.ak(s,6e7)
if(r<1)return"Just now"
w=B.o.ak(s,36e8)
if(w<1)return""+r+"m ago"
if(B.o.ak(s,864e8)<1)return""+w+"h ago"
v=B.o.G(A.dd(d),12)===0?12:B.o.G(A.dd(d),12)
s=B.i3[A.bC(d)-1]
r=A.bw(d)===A.bw(t)?"":", "+A.bw(d)
w=B.a.aT(B.o.u(A.fM(d)),2,"0")
u=A.dd(d)<12?"AM":"PM"
return s+" "+A.bO(d)+r+" \xb7 "+v+":"+w+" "+u},
bw6(d){var w=B.k.aa(Math.abs(d),2).split(".")
return"$"+A.og(w[0],A.ae("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.f3Q(),null)+"."+w[1]},
bzC(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$bzC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.an8(e,!1),$async$bzC)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
A.fC1(e,!0).bx(new C.fuG(e),t).bx(new C.fuH(),t).eN(new C.fuI())
w=4
return A.b(A.c2(B.K,null,new C.fuJ(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bzC)
case 4:case 1:return A.h(u,v)}})
return A.i($async$bzC,v)},
fER(d,e,f){var w=null,v=B.c.j(0.05),u=A.m(14),t=A.H(f.j(0.35),B.r,1)
return A.D(A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),B.bA,A.eZ(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.h,B.dq)],x.p),B.m,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.hC,w,w,w),1)},
dNi(d,e,f){var w=null,v=B.x.j(0.22),u=A.m(8),t=A.H(f.j(0.28),B.r,1)
return A.D(A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.eZ(B.a3,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.h,B.eb)],x.p),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.Kj,w,w,w),1)},
c42:function c42(d){this.a=d},
c43:function c43(){},
c44:function c44(){},
c41:function c41(){},
c40:function c40(d){this.a=d},
f3Q:function f3Q(){},
fuG:function fuG(d){this.a=d},
fuH:function fuH(){},
fuI:function fuI(){},
fuJ:function fuJ(d,e){this.a=d
this.b=e},
fuF:function fuF(d,e){this.a=d
this.b=e},
fuE:function fuE(d){this.a=d},
ab4:function ab4(d,e){this.c=d
this.a=e},
dNk:function dNk(){},
dNl:function dNl(){},
dNm:function dNm(){},
dNn:function dNn(d){this.a=d},
dNp:function dNp(){},
dNo:function dNo(d){this.a=d},
ab3:function ab3(d,e){this.c=d
this.a=e},
dNj:function dNj(){},
bzD(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return A.hN(B.aT,!1,w,d,new C.fuM(j,i,h,g,e,f),null,B.eL,!1,x.H)},
fuM:function fuM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fuK:function fuK(d,e){this.a=d
this.b=e},
fuL:function fuL(d,e){this.a=d
this.b=e},
axt:function axt(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bbL:function bbL(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bq$=e
_.a6$=f
_.c=_.a=null},
d52:function d52(d,e){this.a=d
this.b=e},
d51:function d51(){},
abt:function abt(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aHz:function aHz(){},
anT(d,e,f){return new C.aXH(f,d,e,null)},
hlf(d){var w=A.a(B.k.aa(d,2).split("."),x.s),v=A.ae("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=A.og(w[0],v,new C.c5D(),null)
return B.d.aF(w,".")},
aWU(){var w=$.rK
if((w>0?$.rK=w-1:w)<=0)$.rK=0},
aeL(d,e){var w=0,v=A.j(x.H),u
var $async$aeL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=$.fJ9
w=u!=null?2:3
break
case 2:w=4
return A.b(u.$2(d,e),$async$aeL)
case 4:case 3:return A.h(null,v)}})
return A.i($async$aeL,v)},
aXH:function aXH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c5E:function c5E(d){this.a=d},
c5D:function c5D(){},
Lp:function Lp(){},
bVw:function bVw(){},
fIz(d){if(d>0)return"+"+d
return""+d},
fHX(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fjj(d,e){var w=J.q(e,d)
if(w==null)w=A.fi4().h(0,d)
return w==null?90:w},
f2O(d,e){var w,v,u=A.aZ(x.S)
while(u.a<3){w=e.aB(41)-20
if(w===0)continue
u.K(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.K(0,d+v*7+3)
v=A.a([B.o.u(d)],x.s)
B.d.v(v,new A.jC(u,new C.f2P(),u.$ti.k("jC<cl.E,n>")))
B.d.fw(v,e)
return v},
h_0(d,e,f){var w,v,u,t,s=A.aZ(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.K(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.K(0,f[B.o.G(u,5)]+u);++u}t=A.a([d],x.s)
B.d.v(t,A.oL(s,3,s.$ti.k("cl.E")))
B.d.fw(t,e)
return t},
hFB(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=A.a([],x.dA),b2=new A.eX()
b2.dQ(42)
for(w=x.s,v=0;v<200;++v){u=B.o.G(v,5)
if(u===0){t=[4,9,16,25,36,49,64,81,121,144,196,256][b2.aB(12)]
s=[2,3,5,6,7,10,11,13][b2.aB(8)]
r=B.k.N(Math.sqrt(t))
q=2+b2.aB(4)
p=B.o.ak(q,2)
if((q&1)===0){o=""+r
n=""+s
m=p===1?o+"\u221a"+n:o+"x^"+p+"\u221a"+n}else{o=""+r
n=""+s
m=p===0?o+"\u221a"+n+"x":o+"x^"+p+"\u221a"+n+"x"}o=""+p
n=""+s
l=""+r+"x^"
b1.push(new C.Ha("Simplify \u221a("+t*s+"x^"+q+")",m,C.h_0(m,b2,A.a([""+(r+1)+"x^"+o+"\u221a"+n,A.t(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aB(35)
j=b2.aB(4)===0?1:2+b2.aB(4)
i=b2.aB(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.Ha("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.f2O(k,b2)))}else if(u===2){k=2+b2.aB(18)
j=b2.aB(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aB(10)+2
b1.push(new C.Ha("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.f2O(g,b2)))}else b1.push(new C.Ha("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.f2O(k,b2)))}else if(u===3){e=b2.aB(11)-5
o=b2.aB(11)
n=b2.aB(11)
d=b2.aB(11)+2
l=b2.he()?1:-1
a0=e+l*(b2.aB(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===B.k.jA(a4)?""+B.k.N(a4):"\u221a"+a3
b1.push(new C.Ha("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.f2O(a0,b2)))}else{a6=2+b2.aB(10)
a7=a6+2+b2.aB(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.Ha("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.h_0(m,b2,A.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
hQ3(d){var w,v,u=x.s,t=A.a(d.split(""),u)
if(t.length<4)return new A.dy(A.a(d.split(""),u),x.bJ).fN(0)
for(w=0;w<12;++w){B.d.fw(t,B.cB)
v=B.d.fN(t)
if(v!==d)return v}return new A.dy(t,x.bJ).fN(0)},
Ha:function Ha(d,e,f){this.a=d
this.b=e
this.c=f},
f2P:function f2P(){},
amw:function amw(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAg:function aAg(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
dGt:function dGt(d){this.a=d},
dGu:function dGu(d){this.a=d},
dGv:function dGv(d){this.a=d},
dGw:function dGw(d,e){this.a=d
this.b=e},
dGx:function dGx(d,e){this.a=d
this.b=e},
dGy:function dGy(d){this.a=d},
dGs:function dGs(d){this.a=d},
dGz:function dGz(d){this.a=d},
dGr:function dGr(d){this.a=d},
dGC:function dGC(d){this.a=d},
dGD:function dGD(d){this.a=d},
dGB:function dGB(d,e){this.a=d
this.b=e},
dGA:function dGA(d,e){this.a=d
this.b=e},
an9:function an9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAx:function aAx(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
dNH:function dNH(d,e,f){this.a=d
this.b=e
this.c=f},
dNI:function dNI(d){this.a=d},
dND:function dND(d){this.a=d},
dNF:function dNF(d,e){this.a=d
this.b=e},
dNE:function dNE(d,e){this.a=d
this.b=e},
dNG:function dNG(d,e){this.a=d
this.b=e},
dNC:function dNC(d){this.a=d},
hhs(d){var w,v,u,t,s,r,q,p=new A.Q(Date.now(),0,!1),o=p.bN(36e8)
try{w=d.h(0,"start")
p=A.mp(J.k(w==null?"":w)).bQ()
w=d.h(0,"end")
o=A.mp(J.k(w==null?"":w)).bQ()}catch(v){}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"title")
u=J.k(u==null?"Event":u)
t=p
s=o
r=d.h(0,"notes")
r=r==null?null:J.k(r)
q=d.h(0,"location")
return new C.qK(w,u,t,s,r,q==null?null:J.k(q))},
a5j(d){var w=0,v=A.j(x.ck),u,t,s,r,q,p,o
var $async$a5j=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.b)
w=1
break}w=3
return A.b(A.ax(),$async$a5j)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aS(J.q(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.b)
w=1
break}try{s=B.R.aE(0,t,null)
if(!x.j.b(s)){p=A.a([],x.b)
u=p
w=1
break}p=J.d5(s,x.f)
p=A.cz(p,new C.c4u(),p.$ti.k("G.E"),x.b1)
p=A.z(p,A.a2(p).k("G.E"))
B.d.aZ(p,new C.c4v())
u=p
w=1
break}catch(n){r=A.a6(n)
$.al.$1("[calendar-memory] load: "+A.t(r))
p=A.a([],x.b)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$a5j,v)},
anr(d,e){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$anr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.a5j(d),$async$anr)
case 2:r=g
q=J.cA(r)
q.bm(r,new C.c4r(e))
q.K(r,e)
q.aZ(r,new C.c4s())
w=3
return A.b(A.ax(),$async$anr)
case 3:u=g
t=B.a.i(d.toLowerCase())
q=q.k5(r,80)
s=q.$ti.k("J<ai.E,a1<n,@>>")
q=A.z(new A.J(q,new C.c4t(),s),s.k("ai.E"))
w=4
return A.b(u.aq("String","ngmy_helper_calendar_v1_"+t,B.R.al(q,null)),$async$anr)
case 4:return A.h(null,v)}})
return A.i($async$anr,v)},
hkO(d,e){var w=Date.now(),v=new A.Q(w,0,!1).bQ()
w=J.dE(d,new C.c4w(v,v.bN(A.dB(14,0,0,0,0,0).a)))
w=A.z(w,w.$ti.k("G.E"))
return w},
fRQ(d){var w,v,u,t,s,r,q,p,o,n,m=C.hkO(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=A.df(m,0,A.dK(20,"count",x.S),A.U(m).c),v=w.$ti,w=new A.bU(w,w.gJ(0),v.k("bU<ai.E>")),v=v.k("ai.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=B.o.G(A.dd(s),12)===0?12:B.o.G(A.dd(s),12)
q=A.dd(s)>=12?"PM":"AM"
p=B.a.aT(B.o.u(A.fM(s)),2,"0")
o=t.f
if((o==null?null:B.a.i(o).length!==0)===!0){o.toString
n=" @ "+B.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+A.bC(s)+"/"+A.bO(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&B.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return B.a.i(u.charCodeAt(0)==0?u:u)},
qK:function qK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c4u:function c4u(){},
c4v:function c4v(){},
c4r:function c4r(d){this.a=d},
c4s:function c4s(){},
c4t:function c4t(){},
c4w:function c4w(d,e){this.a=d
this.b=e},
hht(d){var w,v,u,t,s,r,q,p,o=null,n=new A.Q(Date.now(),0,!1)
try{w=d.h(0,"when")
n=A.mp(J.k(w==null?"":w)).bQ()}catch(v){}w=d.h(0,"id")
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
return new C.qL(w,u,t,s,r,q,J.k(p==null?"user":p))},
fQb(d){var w=B.o.G(A.dd(d),12)===0?12:B.o.G(A.dd(d),12),v=A.dd(d)>=12?"PM":"AM"
return""+A.bC(d)+"/"+A.bO(d)+" "+w+":"+B.a.aT(B.o.u(A.fM(d)),2,"0")+" "+v},
Sw(d){var w=0,v=A.j(x.e),u,t,s,r,q,p,o
var $async$Sw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.x)
w=1
break}w=3
return A.b(A.ax(),$async$Sw)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aS(J.q(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.x)
w=1
break}try{s=B.R.aE(0,t,null)
if(!x.j.b(s)){p=A.a([],x.x)
u=p
w=1
break}p=J.d5(s,x.f)
p=A.cz(p,new C.bXU(),p.$ti.k("G.E"),x.Q)
p=A.z(p,A.a2(p).k("G.E"))
B.d.aZ(p,new C.bXV())
u=p
w=1
break}catch(n){r=A.a6(n)
$.al.$1("[call-memory] load: "+A.t(r))
p=A.a([],x.x)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Sw,v)},
aVe(d,e){var w=0,v=A.j(x.H),u,t,s,r
var $async$aVe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$aVe)
case 2:u=g
t=A.df(e,0,A.dK(120,"count",x.S),A.U(e).c).dA(0)
s=B.a.i(d.toLowerCase())
r=A.U(t).k("J<1,a1<n,@>>")
r=A.z(new A.J(t,new C.bXS(),r),r.k("ai.E"))
w=3
return A.b(u.aq("String","ngmy_call_memory_v1_"+s,B.R.al(r,null)),$async$aVe)
case 3:return A.h(null,v)}})
return A.i($async$aVe,v)},
aVf(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$aVf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:p=A.T(x.N,x.Q)
o=J
w=2
return A.b(C.Sw(d),$async$aVf)
case 2:u=o.aV(g)
case 3:if(!u.C()){w=4
break}t=u.gT(u)
p.m(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.m(0,r.a,r)}u=p.$ti.k("bg<2>")
q=A.z(new A.bg(p,u),u.k("G.E"))
B.d.aZ(q,new C.bXT())
w=5
return A.b(C.aVe(d,q),$async$aVf)
case 5:return A.h(null,v)}})
return A.i($async$aVf,v)},
bXW(d,e){var w=0,v=A.j(x.e),u,t,s
var $async$bXW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Sw(d),$async$bXW)
case 3:t=s.dE(g,new C.bXX(e.bN(-72e8),e.bN(72e8)))
t=A.z(t,t.$ti.k("G.E"))
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bXW,v)},
fQc(d,e){var w,v,u,t,s,r=J.a7(d)
if(r.gai(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.k5(d,e),v=w.$ti,w=new A.bU(w,w.gJ(0),v.k("bU<ai.E>")),v=v.k("ai.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gTy()+"\n"
t=t.f
if(t!=null&&B.a.i(t).length!==0){s=B.a.i(t)
u+="  Voicemail/text: "+(s.length>180?B.a.am(s,0,177)+"\u2026":s)+"\n"}}r=r.gJ(d)>e?u+("\u2026 and "+(r.gJ(d)-e)+" more\n"):u
return B.a.i(r.charCodeAt(0)==0?r:r)},
hM9(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new A.Q(q,0,!1).bQ(),o=d.toLowerCase(),n=A.bW(A.bw(p),A.bC(p),A.bO(p),0,0,0,0,0)
if(B.a.t(o,"yesterday"))n=n.bN(r)
else if(!B.a.t(o,"today")&&B.a.t(o,"last night"))n=n.bN(r)
w=A.ae("\\b(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!0,!1,!1,!1).cz(o)
if(w==null)return null
q=w.b
v=q[1]
u=A.c4(v==null?"":v,null)
if(u==null)u=0
v=q[2]
t=A.c4(v==null?"":v,null)
if(t==null)t=0
s=q[3]
if(s==="pm"&&u<12)u+=12
if(s==="am"&&u===12)u=0
q=s==null
v=!1
if(q)if(u<=7)v=B.a.t(o,"am")||B.a.t(o,"morning")||B.a.t(o,"night")
if(v)if(B.a.t(o,"pm")||B.a.t(o,"afternoon")||B.a.t(o,"evening"))u=u<12?u+12:u
if(q&&B.a.t(o,"pm"))u=u<12?u+12:u
return A.bW(A.bw(n),A.bC(n),A.bO(n),u,t,0,0,0)},
h4E(d){var w=A.ae("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
qL:function qL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bXU:function bXU(){},
bXV:function bXV(){},
bXS:function bXS(){},
bXT:function bXT(){},
bXX:function bXX(d,e){this.a=d
this.b=e},
fRT(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.ln(t,w,v,u==null?null:J.k(u))},
hkU(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b4(v,new C.c4C(),x.bP)
v=A.z(v,v.$ti.k("ai.E"))}if(v==null)v=D.cRh
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.y(d.h(0,"printable"),!0)
return new C.i9(r,w,v,u,t,typeof d.h(0,s)=="number"?B.k.N(A.fc(d.h(0,s))):0)},
hkT(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.hyg(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?B.k.N(A.fc(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?B.k.N(A.fc(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b4(s,new C.c4A(),x.u)
s=A.z(s,s.$ti.k("ai.E"))}return new C.hW(p,w,v,u,s==null?D.as1:s,t)},
hyh(d){var w,v,u,t=A.E([F.Ap,"investments",B.od,"games",B.jL,"loans",B.hq,"withdrawals",B.kE,"deposits",B.kF,"civic",B.kD,"store",B.qt,"jobs",B.m4,"refunds",B.eN,"account",B.lu,"music",B.x1,"help"],x.dk,x.N)
for(w=new A.cQ(t,A.a2(t).k("cQ<1,2>")).gah(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
hyg(d){switch(d){case"investments":return F.Ap
case"games":return B.od
case"loans":return B.jL
case"withdrawals":return B.hq
case"deposits":return B.kE
case"civic":return B.kF
case"store":return B.kD
case"jobs":return B.qt
case"refunds":return B.m4
case"account":return B.eN
case"music":return B.lu
default:return B.x1}},
mG(d){var w=A.a([new C.ln("text",d,null,null)],x.a)
return w},
aeI(){var w=null,v=x.v
return A.a([new C.hW("investments","Investments",F.Ap,4280468830,A.a([new C.i9("inv1","How do I buy an investment plan?",C.mG("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.i9("inv2","When do I get paid from my plan?",C.mG("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.i9("inv3","Can I have more than one plan?",C.mG("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.hW("games","Games",B.od,4287323382,A.a([new C.i9("gam1","How do NGMY games work?",C.mG("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.i9("gam2","Why did my game payout change?",C.mG("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.hW("loans","Loans",B.jL,4294538006,A.a([new C.i9("loan1","How do I apply for a loan?",C.mG("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.i9("loan2","What is the repayment period?",C.mG("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.hW("withdrawals","Withdrawals",B.hq,4282090230,A.a([new C.i9("wd1","How do I withdraw money?",C.mG("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.i9("wd2","Why is my withdrawal pending?",C.mG("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.hW("deposits","Deposits",B.kE,4279548070,A.a([new C.i9("dep1","How do I deposit funds?",C.mG("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.i9("dep2","How long until my deposit posts?",C.mG("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.hW("civic","Civic Registry",B.kF,4289170426,A.a([new C.i9("civ1","What is Civic Registry?",C.mG("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.i9("civ2","What does \u201cmissed\u201d mean on my profile?",C.mG("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.hW("store","NGMY Store",B.kD,4293675161,A.a([new C.i9("sto1","How do I buy from NGMY Store?",C.mG("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.i9("sto2","How do I sell in the store?",C.mG("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.hW("jobs","Jobs & Creator",B.qt,4293548044,A.a([new C.i9("job1","How do I find jobs?",C.mG("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.i9("job2","How do I post a job?",C.mG("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.hW("refunds","Refunds",B.m4,4293870660,A.a([new C.i9("ref1","Can I get a refund?",C.mG("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.i9("ref2","How long do refunds take?",C.mG("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.hW("account","Account",B.eN,4281908728,A.a([new C.i9("acc1","How do I update my profile?",C.mG("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.i9("acc2","I forgot my password \u2014 what now?",C.mG("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.hW("music","Music Charts",B.lu,4290807036,A.a([new C.i9("mus1","What are Music Charts?",C.mG("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.i9("mus2","How do I upload music?",C.mG("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.hW("help","Help Center",B.x1,4279080072,A.a([new C.i9("hlp1","Where can I get live help?",C.mG("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.i9("hlp2","How do daily Helper limits work?",C.mG("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
fRU(d){var w,v=J.a7(d),u=v.gai(d)
if(u)return C.aeI()
v=v.di(d,new C.c4F(),x.i)
w=A.z(v,v.$ti.k("ai.E"))
B.d.aZ(w,new C.c4G())
return w.length===0?C.aeI():w},
fRV(d){var w=J.b4(d,new C.c4H(),x.P)
w=A.z(w,w.$ti.k("ai.E"))
return A.E(["categories",w,"savedAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z)},
ant(d){return C.hkV(d)},
hkV(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q,p
var $async$ant=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.ax(),$async$ant)
case 6:s=f
w=7
return A.b(s.aq("String","ngmy_helper_kb_v1",B.R.al(C.fRV(d),null)),$async$ant)
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
return A.i($async$ant,v)},
c4E(){var w=0,v=A.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$c4E=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ax(),$async$c4E)
case 7:r=e
q=A.aS(J.q(r.a,"ngmy_helper_kb_v1"))
if(q==null||B.a.i(q).length===0){l=C.aeI()
u=l
w=1
break}p=B.R.aE(0,q,null)
if(!x.f.b(p)){l=C.aeI()
u=l
w=1
break}o=J.q(p,"categories")
if(!x.j.b(o)){l=C.aeI()
u=l
w=1
break}n=C.fRU(o)
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
l=C.aeI()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$c4E,v)},
aXf(){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$aXf=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.bY(),$async$aXf)
case 7:if(!e){u=null
w=1
break}w=8
return A.b(A.eU("ngmy_helper_kb",null,!1,B.bE),$async$aXf)
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
return A.i($async$aXf,v)},
aXg(d){return C.hkW(d)},
hkW(d){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aXg=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.bY(),$async$aXg)
case 7:if(!f){u=!1
w=1
break}w=8
return A.b(A.ht("ngmy_helper_kb",d,!1,!1,B.cz,null),$async$aXg)
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
return A.i($async$aXg,v)},
anu(){var w=0,v=A.j(x.I),u,t,s,r
var $async$anu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c4E(),$async$anu)
case 3:s=e
w=4
return A.b(C.aXf(),$async$anu)
case 4:r=e
w=r!=null&&x.j.b(J.q(r,"categories"))?5:6
break
case 5:t=C.fRU(x.j.a(J.q(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return A.b(C.ant(t),$async$anu)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anu,v)},
c4I(d){var w=0,v=A.j(x.y),u
var $async$c4I=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ant(d),$async$c4I)
case 3:u=C.aXg(C.fRV(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c4I,v)},
ln:function ln(d,e,f,g){var _=this
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
c4D:function c4D(){},
c4C:function c4C(){},
hW:function hW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c4B:function c4B(){},
c4A:function c4A(){},
c4F:function c4F(){},
c4G:function c4G(){},
c4H:function c4H(){},
b5r:function b5r(d){this.a=d},
Tt:function Tt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAJ:function aAJ(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
dRm:function dRm(){},
dRn:function dRn(){},
dRg:function dRg(d){this.a=d},
dRh:function dRh(d){this.a=d},
dR_:function dR_(d,e){this.a=d
this.b=e},
dR0:function dR0(d){this.a=d},
dR1:function dR1(d,e,f){this.a=d
this.b=e
this.c=f},
dQZ:function dQZ(d){this.a=d},
dRd:function dRd(d,e){this.a=d
this.b=e},
dRe:function dRe(d,e){this.a=d
this.b=e},
dRf:function dRf(d){this.a=d},
dR7:function dR7(d){this.a=d},
dR8:function dR8(d,e,f){this.a=d
this.b=e
this.c=f},
dR6:function dR6(d,e){this.a=d
this.b=e},
dRc:function dRc(d,e,f){this.a=d
this.b=e
this.c=f},
dRb:function dRb(d,e){this.a=d
this.b=e},
dRa:function dRa(d,e){this.a=d
this.b=e},
dR9:function dR9(d,e,f){this.a=d
this.b=e
this.c=f},
dR3:function dR3(d){this.a=d},
dR2:function dR2(d){this.a=d},
dR4:function dR4(d,e){this.a=d
this.b=e},
dR5:function dR5(d){this.a=d},
dRl:function dRl(d,e){this.a=d
this.b=e},
dRk:function dRk(d,e){this.a=d
this.b=e},
dRj:function dRj(){},
dRi:function dRi(d,e){this.a=d
this.b=e},
NM:function NM(d,e){this.c=d
this.a=e},
b7f:function b7f(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cFx:function cFx(d){this.a=d},
cFw:function cFw(d,e){this.a=d
this.b=e},
cFu:function cFu(d,e){this.a=d
this.b=e},
cFy:function cFy(d){this.a=d},
cFv:function cFv(d,e){this.a=d
this.b=e},
cFt:function cFt(d,e){this.a=d
this.b=e},
cFz:function cFz(d){this.a=d},
cFA:function cFA(d,e){this.a=d
this.b=e},
YX:function YX(d,e,f){this.c=d
this.d=e
this.a=f},
aCC:function aCC(){this.d=$
this.c=this.a=null},
eBv:function eBv(d,e){this.a=d
this.b=e},
eBw:function eBw(d){this.a=d},
eBC:function eBC(){},
eBB:function eBB(d,e){this.a=d
this.b=e},
eBA:function eBA(d,e){this.a=d
this.b=e},
eBx:function eBx(d,e){this.a=d
this.b=e},
eBz:function eBz(d,e,f){this.a=d
this.b=e
this.c=f},
eBy:function eBy(d,e,f){this.a=d
this.b=e
this.c=f},
YW:function YW(d,e){this.c=d
this.a=e},
aCB:function aCB(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
eBr:function eBr(d,e){this.a=d
this.b=e},
eBp:function eBp(d){this.a=d},
eBq:function eBq(d,e){this.a=d
this.b=e},
eBt:function eBt(d,e){this.a=d
this.b=e},
eBu:function eBu(d){this.a=d},
eBs:function eBs(d,e){this.a=d
this.b=e},
hkR(d){var w=new A.J(d,new C.c4x(),A.U(d).k("J<1,n>")).aF(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
c4y(d,e,f){return C.hkS(d,e,f)},
hkS(b4,b5,b6){var w=0,v=A.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$c4y=A.e(function(b8,b9){if(b8===1)return A.f(b9,v)
for(;;)switch(w){case 0:b3=B.a.i(b5)
if(b3.length===0){u=new A.II([A.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return A.b(A.qi(A.mJ(b3),C.hkR(b6)+"\n\nAdmin instruction:\n"+b4,B.hc,null),$async$c4y)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=B.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new A.II([A.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=B.a.i(a3)
if(J.cV(s,"```"))s=B.a.e1(J.fLV(s,A.ae("^```(?:json)?\\s*",!0,!1,!1,!1),""),A.ae("\\s*```$",!0,!1,!1,!1),"")
r=B.R.aE(0,s,null)
a3=x.f
if(!a3.b(r)){a3=A.a([],x.Y)
u=new A.II([a3,"AI response was not valid JSON.",null,null])
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
u=new A.II([a3,"AI did not return any categories.",p,o])
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
if(a6.b(d))for(a9=J.aV(d);a9.C();){a1=a9.gT(a9)
J.ch(a0,C.fRT(A.a_(a3.a(a1),a4,a5)))}if(J.aa(a0)===0){a9=J.q(e,"answer")
J.ch(a0,new C.ln("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=A.t(f)
b1=J.q(e,"question")
J.ch(g,new C.i9("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.y(J.q(e,"printable"),!0),f))}a9=J.q(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.q(j,"iconKey")
b0=C.hkQ(J.k(b0==null?"help":b0))
b1=typeof J.q(j,"colorValue")=="number"?B.k.N(A.fc(J.q(j,"colorValue"))):4284773515
J.ch(m,new C.hW(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.aa(a3)!==0)===!0?o:null
u=new A.II([m,null,p,a3])
w=1
break}catch(b7){a2=A.a6(b7)
a3=A.t(a2)
a4=A.a([],x.Y)
u=new A.II([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c4y,v)},
hkQ(d){switch(d){case"investments":return F.Ap
case"games":return B.od
case"loans":return B.jL
case"withdrawals":return B.hq
case"deposits":return B.kE
case"civic":return B.kF
case"store":return B.kD
case"jobs":return B.qt
case"refunds":return B.m4
case"account":return B.eN
case"music":return B.lu
default:return B.x1}},
hKH(d,e,f){var w,v,u,t=A.bj(d,!0,x.i)
if(f!=null&&J.aa(e)===1){w=B.d.bi(t,new C.fjG(f))
if(w>=0){t[w]=J.fj(e).czL(f,t[w].f)
return t}}B.d.v(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].b6I(u)
return t},
c4x:function c4x(){},
fjG:function fjG(d){this.a=d},
cWZ:function cWZ(d){this.a=d},
Tu:function Tu(d,e,f){this.c=d
this.d=e
this.a=f},
aAL:function aAL(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
dRX:function dRX(){},
dRD:function dRD(d,e){this.a=d
this.b=e},
dRI:function dRI(d,e){this.a=d
this.b=e},
dRG:function dRG(d,e){this.a=d
this.b=e},
dRE:function dRE(d){this.a=d},
dRF:function dRF(d){this.a=d},
dRH:function dRH(d,e,f){this.a=d
this.b=e
this.c=f},
dRz:function dRz(){},
dRA:function dRA(){},
dRB:function dRB(){},
dRC:function dRC(){},
dRN:function dRN(d,e){this.a=d
this.b=e},
dRO:function dRO(d){this.a=d},
dRP:function dRP(d){this.a=d},
dRQ:function dRQ(d){this.a=d},
dRR:function dRR(d){this.a=d},
dRS:function dRS(d){this.a=d},
dRT:function dRT(){},
dRU:function dRU(d){this.a=d},
dRM:function dRM(d){this.a=d},
dRV:function dRV(d){this.a=d},
dRL:function dRL(d){this.a=d},
dRW:function dRW(d,e){this.a=d
this.b=e},
dRK:function dRK(d,e){this.a=d
this.b=e},
dRJ:function dRJ(d,e){this.a=d
this.b=e},
hsC(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.a([],x.eO)
for(w=A.ae("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kx(0,d),w=new A.Ic(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=B.a.am(d,t,q)
o=u?B.cp:B.aI
m.push(new A.es(p,n,n,B.cW,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?B.cp:B.aI
m.push(new A.es(p,n,n,B.cW,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,B.I,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?B.cp:B.aI
m.push(new A.es(p,n,n,B.cW,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,B.cx,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?B.cp:B.aI
m.push(new A.es(p,n,n,B.cW,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,B.mg,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=B.a.aX(d,t)
m.push(A.dl(n,n,n,n,n,n,n,n,n,A.l(n,n,u?B.cp:B.aI,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return A.rT(n,n,n,B.eH,n,n,!0,n,A.dl(m,n,n,n,n,n,n,n,n,n,n),B.a5,n,n,B.dc,B.cj)},
d93:function d93(d){this.a=d},
ayk:function ayk(d,e){this.a=d
this.b=e},
ans:function ans(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAK:function aAK(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
dRw:function dRw(d,e){this.a=d
this.b=e},
dRx:function dRx(d,e){this.a=d
this.b=e},
dRo:function dRo(d){this.a=d},
dRp:function dRp(d){this.a=d},
dRy:function dRy(){},
dRr:function dRr(d,e){this.a=d
this.b=e},
dRq:function dRq(d,e){this.a=d
this.b=e},
dRt:function dRt(){},
dRv:function dRv(){},
dRu:function dRu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRs:function dRs(d,e){this.a=d
this.b=e},
ayi:function ayi(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a9D:function a9D(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aXe:function aXe(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c4z:function c4z(d){this.a=d},
a9v:function a9v(d,e,f){this.c=d
this.d=e
this.a=f},
czd:function czd(d){this.a=d},
cze:function cze(){},
czf:function czf(d){this.a=d},
ayj:function ayj(d,e,f){this.c=d
this.d=e
this.a=f},
bdf:function bdf(){this.c=this.a=this.d=null},
d94:function d94(d,e){this.a=d
this.b=e},
d96:function d96(d,e){this.a=d
this.b=e},
d95:function d95(d){this.a=d},
hmm(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
hmn(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
hml(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
fZW(d){var w
if(new A.a4(A.a(d.split("\n"),x.s),new C.f2z(),x.cc).gJ(0)<3)w=d.length>100&&B.a.t(d,"\n")
else w=!0
return w},
hLP(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.hml(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
aoe:function aoe(d,e){this.a=d
this.b=e},
Hf:function Hf(d,e){this.a=d
this.b=e},
qR:function qR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2z:function f2z(){},
anv:function anv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAM:function aAM(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=!1
_.x=g
_.y=h
_.Q=_.z=null
_.as=$
_.bq$=i
_.a6$=j
_.c=_.a=null},
dSa:function dSa(d,e){this.a=d
this.b=e},
dS1:function dS1(d){this.a=d},
dS3:function dS3(){},
dS4:function dS4(d,e){this.a=d
this.b=e},
dS5:function dS5(d){this.a=d},
dS6:function dS6(){},
dS7:function dS7(d,e){this.a=d
this.b=e},
dS8:function dS8(d){this.a=d},
dS9:function dS9(d){this.a=d},
dS2:function dS2(d,e){this.a=d
this.b=e},
dSh:function dSh(d,e){this.a=d
this.b=e},
dSe:function dSe(){},
dSf:function dSf(d,e){this.a=d
this.b=e},
dSg:function dSg(d,e){this.a=d
this.b=e},
dSd:function dSd(d,e){this.a=d
this.b=e},
dSc:function dSc(d,e){this.a=d
this.b=e},
dSj:function dSj(d){this.a=d},
dSi:function dSi(d){this.a=d},
dS0:function dS0(d,e){this.a=d
this.b=e},
dS_:function dS_(d,e){this.a=d
this.b=e},
dSk:function dSk(d,e){this.a=d
this.b=e},
dSb:function dSb(d,e){this.a=d
this.b=e},
dRY:function dRY(d){this.a=d},
dRZ:function dRZ(d){this.a=d},
aIK:function aIK(){},
c4K(d){var w=0,v=A.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$c4K=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=D.P5
w=1
break}w=3
return A.b(A.ax(),$async$c4K)
case 3:r=f
q=B.a.i(d.toLowerCase())
t=A.aS(J.q(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.P5
w=1
break}try{q=A.a_(x.f.a(B.R.aE(0,t,null)),x.N,x.z)
p=J.y(q.h(0,"contacts"),!0)
o=J.y(q.h(0,"calendar"),!0)
n=J.y(q.h(0,"calls"),!0)
q=J.y(q.h(0,"allGrantedOnce"),!0)
u=new C.Tv(p,o,n,q)
w=1
break}catch(l){s=A.a6(l)
$.al.$1("[helper-perms] load: "+A.t(s))
u=D.P5
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c4K,v)},
anw(d,e){var w=0,v=A.j(x.H),u
var $async$anw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){w=1
break}w=4
return A.b(A.ax(),$async$anw)
case 4:w=3
return A.b(g.aq("String","ngmy_helper_permissions_v1_"+B.a.i(d.toLowerCase()),B.R.al(e.ac(),null)),$async$anw)
case 3:case 1:return A.h(u,v)}})
return A.i($async$anw,v)},
c4J(d){var w=0,v=A.j(x.gp),u,t
var $async$c4J=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=new C.Tv(!0,!0,!0,!0)
w=3
return A.b(C.anw(d,t),$async$c4J)
case 3:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c4J,v)},
h4F(d){var w=B.a.i(d.toLowerCase()),v=A.ae("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=A.ae("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=A.ae("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=A.ae("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
h4D(d){var w=A.ae("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
Tv:function Tv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bzJ(d,e,f,g,h){var w=0,v=A.j(x.H),u,t,s
var $async$bzJ=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return A.b(C.aXa(h),$async$bzJ)
case 3:if(j){w=1
break}w=4
return A.b(C.ano(h),$async$bzJ)
case 4:if(d.e==null){w=1
break}t=A.q_(d,!0)
t.toString
s=A.dc()
s.b=A.nW(new C.fvw(g,e,f,s),!1,!1)
t.lm(0,s.b9())
case 1:return A.h(u,v)}})
return A.i($async$bzJ,v)},
fvw:function fvw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fvv:function fvv(d){this.a=d},
XG:function XG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
axM:function axM(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cO$=d
_.b_$=e
_.c=_.a=null},
d6E:function d6E(d){this.a=d},
d6F:function d6F(d,e,f){this.a=d
this.b=e
this.c=f},
d6K:function d6K(){},
d6J:function d6J(d){this.a=d},
d6G:function d6G(d){this.a=d},
d6H:function d6H(){},
d6I:function d6I(d){this.a=d},
aHE:function aHE(){},
hlP(d){var w=B.a.i(d),v=A.ae("[^A-Z0-9]",!0,!1,!1,!1),u=A.aJ(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
hlO(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.ae("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.ae("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
ao0(d){return C.hlM(d)},
hlM(d){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$ao0=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.eU("ngmy_local_deposit_qr_v1_"+B.a.i(d),null,!1,B.bE),$async$ao0)
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
return A.i($async$ao0,v)},
aY4(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aY4=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.hlP(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.eU("ngmy_local_deposit_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bE),$async$aY4)
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
return A.i($async$aY4,v)},
fSh(d){var w,v=B.a.i(d)
if(B.a.a_(v,"NGMYLOCALDEP1|")){w=B.a.i(B.a.aX(v,14))
return w.length===0?null:w}return null},
hlN(d,e,f){var w=B.a.i(f)
if(w.length===0)return!1
return B.d.ba(e,new C.c6x(B.a.i(d.toLowerCase()),w))},
fSi(d,e,f,g,h){var w,v,u=J.a7(g),t=u.h(g,"lockedToEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=B.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.pn(!1,0,y.u)
if(s!==B.a.i(f.toLowerCase()))return new C.pn(!1,0,y.j)
v=B.a.i(h)
if(v.length===0)return new C.pn(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.pn(!1,0,"Verification code does not match this deposit.")
if(!C.hlN(e,d,w))return new C.pn(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
fCg(d,e){var w,v,u="amount",t=J.a7(d),s=t.h(d,"redeemedBy")
if(B.a.i(J.k(s==null?"":s)).length!==0)return D.dkm
s=t.h(d,"lockedToEmail")
w=B.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=B.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){A.aR(t.h(d,u))
return new C.M7(!0,!1,!1,!0)}if(w!==B.a.i(e.toLowerCase())){A.aR(t.h(d,u))
return new C.M7(!0,!1,!0,!1)}A.aR(t.h(d,u))
return new C.M7(!0,!1,!1,!1)},
c6D(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$c6D=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=C.fSh(d)
if(s==null){u=D.P7
w=1
break}w=3
return A.b(C.ao0(s),$async$c6D)
case 3:t=g
if(t==null){u=D.P7
w=1
break}u=C.fCg(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6D,v)},
aY6(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$aY6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aY4(d),$async$aY6)
case 3:s=g
if(s==null||s.length===0){u=D.P7
w=1
break}w=4
return A.b(C.ao0(s),$async$aY6)
case 4:t=g
if(t==null){u=D.P7
w=1
break}u=C.fCg(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aY6,v)},
c6E(d,e,f,g,h){var w=0,v=A.j(x.D),u,t
var $async$c6E=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aY4(d),$async$c6E)
case 3:t=j
if(t==null||t.length===0){u=new C.pn(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.TQ(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6E,v)},
TQ(d,e,f,g,h){return C.hlQ(d,e,f,g,h)},
hlQ(a2,a3,a4,a5,a6){var w=0,v=A.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$TQ=A.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.fSh(a4)
if(a0==null){u=new C.pn(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return A.b(C.ao0(a0),$async$TQ)
case 3:k=a8
if(k==null){u=new C.pn(!1,0,y.m)
w=1
break}j=C.fCg(k,a5)
if(j.b){u=new C.pn(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.pn(!1,0,y.u)
w=1
break}if(j.c){u=new C.pn(!1,0,y.j)
w=1
break}i=C.fSi(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=A.aR(J.q(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.pn(!1,0,"Invalid deposit amount.")
w=1
break}r=new A.Q(Date.now(),0,!1).a4().ab()
q=B.a.i(a5.toLowerCase())
t=5
w=8
return A.b(A.eU("ngmy_local_deposit_qr_v1_"+B.a.i(a0),null,!1,B.bE),$async$TQ)
case 8:p=a8
if(p==null){u=new C.pn(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.q(p,"redeemedBy")
if(B.a.i(J.k(g==null?"":g)).length!==0){u=new C.pn(!1,0,"This deposit code was already used.")
w=1
break}o=C.fSi(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=B.a.i(a0)
f=x.N
e=x.z
n=A.dS(p,f,e)
J.aE(n,"redeemedBy",q)
J.aE(n,"redeemedAt",r)
w=9
return A.b(A.ht("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,B.cz,null),$async$TQ)
case 9:n=J.q(p,"shortCode")
m=B.a.i(J.k(n==null?"":n))
w=J.aa(m)!==0?10:11
break
case 10:w=12
return A.b(A.ht("ngmy_local_deposit_code_v1_"+B.a.i(m).toUpperCase(),A.E(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,B.cz,null),$async$TQ)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=A.a6(a1)
$.al.$1("[local deposit qr] redeem: "+A.t(l))
u=new C.pn(!1,0,"Could not apply deposit. Check connection and try again.")
w=1
break
w=7
break
case 4:w=2
break
case 7:u=new C.pn(!0,h,null)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$TQ,v)},
M7:function M7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
pn:function pn(d,e,f){this.a=d
this.b=e
this.c=f},
c6x:function c6x(d,e){this.a=d
this.b=e},
c6L(d,e){var w
A.fIa(d,e,!1)
A.qh(d.a,d.d,!0,!1)
w=B.a.i("")
if(w.length!==0)A.zO(!0,!1,d.d,w)},
a5F(d,e){if(d==null)return!1
return A.bw(d)===e.gcd()&&A.bC(d)===e.gcb()&&A.bO(d)===e.gcr()},
hlY(d){var w=A.dd(d)*60+A.fM(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
fSp(d){if(A.dd(d)>=12)return!1
if(A.m9(d)===6||A.m9(d)===7)return!1
return!0},
c6P(d){var w=d.c?d.bQ():d
return w.cY(A.bW(A.bw(w),A.bC(w),A.bO(w),12,0,0,0,0))},
fCk(d,e){var w,v,u,t=d.gBg()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a5F(d.fx,e)&&d.fy>0.0001)return B.k.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bQ()
if(!C.c6P(w))return 0
v=A.bW(e.gcd(),e.gcb(),e.gcr(),12,0,0,0,0)
if(!e.cY(v))return t
if(!e.c8(w))return 0
u=B.o.ak(v.bv(w).a,1000)
if(u<=0)return t
return B.k.D(t*(B.o.D(B.o.ak(e.bv(w).a,1000),0,u)/u),0,t)},
fCj(d,e){var w,v,u,t,s,r,q,p=new A.Q(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a5F(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bQ():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!B.d.ba(e,new C.c6K(s))&&C.c6P(t)){r=d.gBg()
v=r>0
if(v){q=new A.cZ(s,d.a,r,B.fu,B.f6,"Clock-in daily earnings (local)",null,null,B.cf,p)
C.c6L(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a5F(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a5F(o,p)&&!C.c6P(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
c6K:function c6K(d){this.a=d},
hAk(d){var w,v,u=d.k4,t=u==null?null:B.a.i(u)
if(t!=null&&t.length!==0)return t
w=B.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=B.a.i(d.a)
if(B.a.t(v,"@"))return B.d.gL(v.split("@"))
return"Member"},
hQR(d,e,f,g,h,i){return A.hm(d,new C.ao1(f,e,i,g,h,null),!0,null,x.H)},
fWC(d){var w,v,u=d.c?d.bQ():d,t=A.dd(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+A.bC(u)+"/"+A.bO(u)+"/"+A.bw(u)+" \xb7 "+w+":"+B.a.aT(B.o.u(A.fM(u)),2,"0")+" "+v},
h2z(d){var w=d.x
if(w===B.dp)return"Processing"
if(w===B.jV)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
hIj(d){var w=d.f,v=B.a.i(w==null?"":w),u=v.toLowerCase()
if(B.a.t(u,"clock-in daily earnings")||B.a.t(u,"clock-in earnings"))return"Clock-in completed"
if(B.a.t(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===B.fl)return"Deposit"
if(w===B.eI)return"Withdrawal"
return v.length!==0?v:w.b},
hA_(d){var w=d.d,v=w===B.fl||w===B.nP||w===B.fu||w===B.jW,u=d.x
if(u===B.dp)return w===B.eI?-d.c:0
if(u!==B.cf)return 0
w=d.c
return v?w:-w},
hIS(d,e){var w,v,u,t,s,r,q=A.z(d,x.o)
B.d.aZ(q,new C.ffF())
w=A.T(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,A.K)(q),++t,v=r){s=q[t]
r=v-C.hA_(s)
if(r<0)r=0
w.m(0,s.a,new A.bkw(v,r))}return w},
ao1:function ao1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aB7:function aB7(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
e0L:function e0L(d){this.a=d},
e1r:function e1r(d){this.a=d},
e1s:function e1s(d){this.a=d},
e1t:function e1t(d){this.a=d},
e19:function e19(d,e){this.a=d
this.b=e},
e1a:function e1a(){},
e1b:function e1b(d){this.a=d},
e1c:function e1c(){},
e1d:function e1d(d){this.a=d},
e1e:function e1e(d,e,f){this.a=d
this.b=e
this.c=f},
e1f:function e1f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e14:function e14(d,e){this.a=d
this.b=e},
e0M:function e0M(d,e,f){this.a=d
this.b=e
this.c=f},
e15:function e15(){},
e16:function e16(){},
e17:function e17(d){this.a=d},
e18:function e18(){},
e0Q:function e0Q(d,e){this.a=d
this.b=e},
e0R:function e0R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e0Z:function e0Z(){},
e0W:function e0W(d){this.a=d},
e0X:function e0X(d,e){this.a=d
this.b=e},
e0Y:function e0Y(d,e){this.a=d
this.b=e},
e1_:function e1_(d){this.a=d},
e10:function e10(d,e,f){this.a=d
this.b=e
this.c=f},
e11:function e11(d){this.a=d},
e13:function e13(d){this.a=d},
e12:function e12(d){this.a=d},
e0S:function e0S(d){this.a=d},
e0T:function e0T(d,e,f){this.a=d
this.b=e
this.c=f},
e1j:function e1j(){},
e1k:function e1k(){},
e1o:function e1o(d){this.a=d},
e1h:function e1h(d){this.a=d},
e1p:function e1p(d){this.a=d},
e1g:function e1g(d){this.a=d},
e1q:function e1q(d){this.a=d},
e1l:function e1l(d){this.a=d},
e1m:function e1m(d){this.a=d},
e1n:function e1n(d){this.a=d},
e1i:function e1i(d){this.a=d},
e0P:function e0P(d){this.a=d},
e0O:function e0O(d){this.a=d},
e0N:function e0N(d){this.a=d},
e0V:function e0V(d,e){this.a=d
this.b=e},
e0U:function e0U(d,e){this.a=d
this.b=e},
ayv:function ayv(d,e,f,g,h,i,j,k,l,m){var _=this
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
daS:function daS(){},
daT:function daT(){},
daU:function daU(d,e,f){this.a=d
this.b=e
this.c=f},
daR:function daR(d){this.a=d},
daV:function daV(d,e){this.a=d
this.b=e},
daQ:function daQ(d){this.a=d},
ayu:function ayu(d,e,f,g,h,i,j,k,l,m){var _=this
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
bdZ:function bdZ(d,e){var _=this
_.f=_.e=_.d=$
_.cO$=d
_.b_$=e
_.c=_.a=null},
daL:function daL(d){this.a=d},
daM:function daM(d){this.a=d},
daN:function daN(d){this.a=d},
daO:function daO(){},
daP:function daP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
daK:function daK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
daJ:function daJ(d){this.a=d},
b7K:function b7K(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
b7J:function b7J(d,e,f){this.b=d
this.d=e
this.a=f},
b7I:function b7I(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
ayw:function ayw(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
ayx:function ayx(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
dbb:function dbb(){},
dbc:function dbc(){},
dbd:function dbd(){},
daY:function daY(d){this.a=d},
daX:function daX(d,e){this.a=d
this.b=e},
daW:function daW(d,e){this.a=d
this.b=e},
db8:function db8(d,e){this.a=d
this.b=e},
dba:function dba(d,e){this.a=d
this.b=e},
db9:function db9(d,e){this.a=d
this.b=e},
db7:function db7(){},
db6:function db6(d){this.a=d},
db5:function db5(){},
db0:function db0(d){this.a=d},
db1:function db1(){},
db2:function db2(d){this.a=d},
db3:function db3(d){this.a=d},
db_:function db_(){},
db4:function db4(d){this.a=d},
daZ:function daZ(d){this.a=d},
b7a:function b7a(d){this.a=d},
ffF:function ffF(){},
brr:function brr(d,e){this.b=d
this.a=e},
aHU:function aHU(){},
btm:function btm(){},
hEZ(d,e,f,g,h,i,j,k){var w,v=B.a.i(j.toLowerCase())
B.d.bm(d,new C.fai(v,g))
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
aLS(d){var w,v=J.a7(d),u=A.aR(v.h(d,"matchesTotal")),t=u==null?null:B.k.N(u)
if(t==null)t=1
v=A.aR(v.h(d,"matchesPlayed"))
w=v==null?null:B.k.N(v)
return B.o.D(t-(w==null?0:w),0,t)},
hPF(d,e){var w=A.U(e).k("a4<1>")
w=A.z(new A.a4(e,new C.fq2(B.a.i(d.toLowerCase())),w),w.k("G.E"))
return w},
aeV(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
if(C.aLS(u)<=0){t=J.cA(u)
t.m(u,"status","finished")
t.m(u,"seriesStatus","complete")}}},
hHy(d,e){var w,v,u,t=J.a7(d),s=t.h(d,"status")
if(!J.y(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.y(s==null?"":s,"complete"))return!1
if(C.aLS(d)<=0)return!1
w=B.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=B.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=B.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aLS(d)>0},
hHx(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a7(d),h=A.aR(i.h(d,"matchesTotal")),g=h==null?null:B.k.N(h)
if(g==null)g=1
h=A.aR(i.h(d,"matchesPlayed"))
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
hEY(d,e){var w
C.aeV(e)
w=A.U(e).k("a4<1>")
w=A.z(new A.a4(e,new C.fah(B.a.i(d.toLowerCase())),w),w.k("G.E"))
return w},
tl(d,e){var w,v,u
for(w=J.aV(d);w.C();){v=w.gT(w)
u=J.q(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
hBC(d,e,f){var w,v,u,t="fromName",s=J.a7(f),r=s.h(f,"fromEmail"),q=B.a.i(J.k(r==null?"":r).toLowerCase())
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
fHU(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase()),r=J.a7(d),q=r.h(d,"fromEmail"),p=B.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=B.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.hBC(x.f.b(u)?A.a_(u,r,q):A.T(r,q),v,d)
if((t.length===0||B.a.t(t,"@"))&&f!=null){t=J.q(f,v)
if(t==null)t=""}if(t.length===0||B.a.t(t,"@"))return"Opponent"
return t},
byy(){var w=0,v=A.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$byy=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ax(),$async$byy)
case 7:r=e
q=A.aS(J.q(r.a,"all_users"))
if(q==null||q.length===0){k=x.N
u=A.T(k,k)
w=1
break}p=B.R.aE(0,q,null)
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
return A.i($async$byy,v)},
bxE(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bxE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return A.b(C.byy(),$async$bxE)
case 3:u=t.fHU(s,r,g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bxE,v)},
Jp(d,e,f){var w=0,v=A.j(x.h),u,t,s,r,q,p
var $async$Jp=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(d)
p=$.h0a.h(0,q)
if(p!=null){t=new A.Q(Date.now(),0,!1).bv(p)
t=t.a>A.dB(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.h0a.m(0,q,new A.Q(Date.now(),0,!1))
w=5
return A.b(A.P4(B.c6,q),$async$Jp)
case 5:case 4:s=$.h09.h(0,q)
if(s==null){u=C.tl(e,q)
w=1
break}r=C.tl(A.bxK(e,A.a([s],x._)),q)
if(r!=null)A.fKb(e,r)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Jp,v)},
hPQ(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"status",f)
t.m(u,"respondedAt",new A.Q(Date.now(),0,!1).ab())
return}}},
hyo(d,e){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
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
for(q=x.S,r=0;r<8;++r)t[r]=A.ii(8,new C.f08(r),!0,q)
return A.E(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return A.E(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
hEX(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"status","active")
t.m(u,"respondedAt",new A.Q(Date.now(),0,!1).ab())
r=C.hyo(u,f)
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
hPO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)!==e)continue
w=A.aR(t.h(u,i))
w=w==null?null:B.k.N(w)
r=(w==null?0:w)+1
t.m(u,i,r)
w=A.aR(t.h(u,"matchesTotal"))
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
fKa(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"sessionState",A.a_(f,x.N,x.z))
t.m(u,"sessionUpdatedAt",new A.Q(Date.now(),0,!1).ab())
return}}},
foR(d){var w=0,v=A.j(x.gw),u,t,s,r,q
var $async$foR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.aeV(d)
t=$.fHj
if(t==null)s=$.fHj=A.P4(B.c6,null).f3(new C.foS())
else s=t
w=3
return A.b(s,$async$foR)
case 3:r=f
if(r==null){u=A.bj(new A.J(d,new C.foT(),A.U(d).k("J<1,@>")),!0,x.P)
w=1
break}q=A.bxK(d,r)
B.d.a7(d)
B.d.v(d,q)
u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$foR,v)},
aeW(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$aeW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.aeV(d)
t=A.U(d).k("J<1,a1<n,@>>")
t=A.z(new A.J(d,new C.fmM(),t),t.k("ai.E"))
w=3
return A.b(A.P4(t,null),$async$aeW)
case 3:s=f
if(s==null){u=!1
w=1
break}r=A.bxK(d,s)
B.d.a7(d)
B.d.v(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aeW,v)},
aML(d,e,f){var w=0,v=A.j(x.y),u,t,s,r
var $async$aML=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:C.fKa(d,e,f)
t=C.tl(d,e)
if(t==null){u=!1
w=1
break}w=3
return A.b(A.P4(A.a([A.a_(t,x.N,x.z)],x._),e),$async$aML)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.tl(s,e)
if(r!=null)A.fKb(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aML,v)},
hMx(d,e,f){var w
C.fKa(d,e,f)
w=$.fH7.h(0,e)
if(w!=null)w.a9(0)
$.fH7.m(0,e,A.cO(B.ln,new C.fmN(e,d)))},
fC2(d,e){return new C.aWS(!0,d,"NGMY",B.a.i(e.toLowerCase()),null,!0)},
fai:function fai(d,e){this.a=d
this.b=e},
fq2:function fq2(d){this.a=d},
fah:function fah(d){this.a=d},
f08:function f08(d){this.a=d},
foS:function foS(){},
foT:function foT(){},
fmM:function fmM(){},
fmN:function fmN(d,e){this.a=d
this.b=e},
aWS:function aWS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
hQg(d,e,f){return A.c2(B.K,null,new C.fr_(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
fr_:function fr_(d,e){this.a=d
this.b=e},
Yt:function Yt(d,e,f){this.c=d
this.d=e
this.a=f},
aAV:function aAV(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
dWf:function dWf(d){this.a=d},
dWi:function dWi(d){this.a=d},
dWj:function dWj(d){this.a=d},
dWh:function dWh(d){this.a=d},
dWk:function dWk(d){this.a=d},
dWl:function dWl(d,e){this.a=d
this.b=e},
dWg:function dWg(d,e){this.a=d
this.b=e},
hL4(d){var w,v,u,t=B.a.i(d)
if(t.length===0)return B.i4
w=t.toLowerCase()
v=A.ae("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return B.i4
v=Date.now()
u=C.hAW(w,new A.Q(v,0,!1))
v=x.N
return A.a([new A.kc("calendar",A.E(["title",C.hAV(t,w),"start",u.ab(),"end",u.bN(36e8).ab(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
hAV(d,e){var w,v,u,t,s,r=A.ae("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cz(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return B.a.i(w==null?"":w)}u=A.ae("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cz(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.h0W(B.a.i(t))}s=A.ae("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cz(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.h0W(B.a.i(t))}if(B.a.t(e,"meeting"))return"Meeting"
if(B.a.t(e,"appointment"))return"Appointment"
return"NGMY Event"},
h0W(d){var w
if(d.length===0)return d
w=B.a.fm(d,A.ae("\\s+",!0,!1,!1,!1))
return new A.J(w,new C.f9t(),A.U(w).k("J<1,n>")).aF(0," ")},
hAW(d,e){var w,v,u,t,s,r,q,p,o=A.bW(A.bw(e),A.bC(e),A.bO(e),0,0,0,0,0)
if(B.a.t(d,"tomorrow"))o=o.bN(864e8)
else if(!B.a.t(d,"today"))for(w=D.ayK.gdH(D.ayK),w=w.gah(w);w.C();){v=w.gT(w)
u=v.a
if(A.dp(d,u,0)){t=C.hzZ(o,v.b)
o=t
break}}s=A.ae("\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cz(d)
if(s!=null){w=s.b
v=w[1]
r=A.c4(v==null?"":v,null)
if(r==null)r=9
v=w[2]
q=A.c4(v==null?"":v,null)
if(q==null)q=0
w=w[3]
p=w==null?null:w.toLowerCase()
if(p==="pm"&&r<12)r+=12
if(p==="am"&&r===12)r=0
if(p==null&&r>=1&&r<=7)r+=12}else{r=9
q=0}return A.bW(A.bw(o),A.bC(o),A.bO(o),r,q,0,0,0)},
hzZ(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(A.m9(w)===e){u=!0
if(v<=0){t=d.bN(36e8)
s=w.a
if(s>=t.gbo())u=s===t.gbo()&&w.b<t.gcA()}}else u=!1
if(u)return w
w=w.bN(r)}return d.bN(r)},
f9t:function f9t(){},
hL5(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=B.a.i(d)
if(j.length===0)return B.i4
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
q=C.hxh(w,j)
if(q==null||q.length===0)return B.i4
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
return A.a([new A.kc("call",A.E(["name",q],t,t))],x.Z)}return B.i4},
hxh(d,e){var w,v,u,t,s,r,q=[A.ae("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),A.ae("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),A.ae("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
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
if(u)return C.hEh(t)}r=A.ae("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cz(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return B.a.i(u==null?"":u)}return null},
hEh(d){var w=B.a.fm(d,A.ae("\\s+",!0,!1,!1,!1))
return new A.J(w,new C.f9s(),A.U(w).k("J<1,n>")).aF(0," ")},
f9s:function f9s(){},
h4M(d){var w=new A.J(d,new C.fp8(),A.U(d).k("J<1,a1<n,@>>")).bZ(0,new C.fp9())
w=A.z(w,w.$ti.k("G.E"))
return w},
fp8:function fp8(){},
fp9:function fp9(){},
hL8(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return B.i4
w=B.a.i(d)
if(w.length===0)return B.i4
v=w.toLowerCase()
if(!(B.a.t(v,"send email")||B.a.t(v,"send an email")||B.a.t(v,"send a message to")||B.a.t(v,"email ")||B.a.t(v,"write an email")||B.a.t(v,"write email")))return B.i4
u=A.ae("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cz(w)
if(u==null)return B.i4
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
return A.a([new A.kc("send_email",t)],x.Z)},
hKh(d,e){var w
if(e)return d
w=J.dE(d,new C.fj3())
w=A.z(w,w.$ti.k("G.E"))
return w},
fj3:function fj3(){},
hMu(d){switch(d){case"blackjack_vegas":return D.dom
case"roulette_euro":return D.do6
case"slots_jackpot":return D.dod
case"poker_texas":return D.dog
case"chess_royale":return D.do7
case"connect_four_pro":return D.do8
case"domino_block":return D.doa
case"plinko_prizes":return D.doi
case"spin_wheel":return D.dof
case"baccarat_punto":return D.do9
case"craps_table":return D.doh
case"casino_war":return D.dob
case"bingo_live":return D.doe
case"solitaire_klondike":return D.dol
case"backgammon_pro":return D.do5
case"billiards_snooker":return D.doj
case"profit_solve":return D.dok
default:return D.doc}},
fmD(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=A.m(8)
v=A.H(B.aL,B.r,1.5)
u=A.a([new A.ab(0,B.G,B.x.j(0.35),B.e9,6)],x.V)
return A.p(p,A.au(A.V(B.m0,B.c.j(0.5),p,p,p,23.400000000000002),p,p,p),B.h,p,p,new A.o(p,p,v,w,u,D.bI8,B.n),p,74,p,p,p,p,p,52)}t=B.o.D(d,1,13)
s=t===1||t>=10||B.o.G(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][B.o.G(t,4)]
q=s?B.bQ:B.M
w=A.m(8)
v=A.H(B.aJ,B.r,1)
u=A.a([new A.ab(0,B.G,B.x.j(0.28),B.e9,6)],x.V)
return A.p(p,A.v(A.a([new A.C(D.bl4,A.d(D.cf0[t-1]+"\n"+r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,B.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),B.b8,A.au(A.d(r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),B.b8],x.p),B.F,p,B.e,B.j,0,B.p),B.h,p,p,new A.o(B.hO,p,v,w,u,p,B.n),p,74,p,p,p,p,p,52)},
hNy(d,e){var w,v=null,u=A.m(18),t=A.H(B.aL,B.r,3),s=A.a([new A.ab(0,B.G,B.aB.j(0.5),B.J,20)],x.V),r=A.U(e).k("J<1,hb>")
r=A.z(new A.J(e,new C.foA(),r),r.k("ai.E"))
w=x.p
return A.v(A.a([A.p(v,A.v(A.a([D.eSY,B.ab,A.B(r,B.m,v,B.b6,B.j,0,v,v)],w),B.m,v,B.e,B.j,0,B.p),B.h,v,v,new A.o(v,v,t,u,s,D.bIv,B.n),v,v,v,v,I.adc,v,v,v),B.ay,A.dq(B.aiQ,D.eTw,d,A.bk(B.aL,v,v,v,B.ds,v,Ag.VP,v,v,v,v,v))],w),B.m,v,B.e,B.j,0,B.p)},
oB:function oB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bmv:function bmv(d,e){this.b=d
this.a=e},
foA:function foA(){},
hmy(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e_(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=A.bZ(8,0,!1,w)
u=A.bZ(9,"",!1,p)
t=x.t
s=A.a([],t)
r=A.a([],t)
t=A.a([0,0,0],t)
q=J.e_(6,o)
for(v=0;v<6;++v)q[v]=A.bZ(7,0,!1,w)
return new C.aon(A.T(p,x.z),n,u,s,r,t,q,new A.ap(B.as,$.av()))},
hFD(d,e,f,g,h){var w=new C.faN(f,h)
switch(d){case"checkers_deluxe":return C.hw1(h,g,e,w)
case"tic_tac_go":return C.hEs(h,g,e,w)
case"blackjack_vegas":return C.hvp(h,g,e,new C.faH(w))
case"roulette_euro":return C.hCQ(h,g,e,new C.faI(w))
case"slots_jackpot":return C.hDE(h,g,e,new C.faJ(w))
case"billiards_snooker":return C.hBE(h,g,e,new C.faK(w))
case"connect_four_pro":return C.hwq(h,g,e,w)
case"profit_solve":return C.hBH(h,g,e,new C.faL(w))
default:return C.hvZ(d,h,g,e,new C.faM(w))}},
hw1(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vl,B.L,w,w),u=A.m(12),t=A.H(D.TX,B.r,8),s=A.a([new A.ab(0,B.G,B.x.j(0.4),B.J,16)],x.V)
return A.v(A.a([new A.C(B.fq,v,w),A.D(A.au(new A.fD(1,A.p(w,A.bu(A.m(6),A.ih(!0,w,w,B.z,D.eue,new C.eYv(d,e,f,g),64,w,B.dL,B.ak,!1),B.ao),B.h,w,w,new A.o(w,w,t,u,s,w,B.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hEs(d,e,f,g){var w=null
return A.v(A.a([new A.C(B.fq,A.d(d.c,w,w,w,w,w,w,D.vl,B.L,w,w),w),A.D(A.au(new A.fD(1,A.ck(new C.f9D(d,e,f,g)),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hvp(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.vl,B.L,v,v),t=x.p,s=A.a([],t),r=d.CW,q=d.ch
if(r)B.d.v(s,new A.J(q,new C.eXX(),A.U(q).k("J<1,r>")))
else B.d.v(s,A.a([C.fmD(q[0],!1),B.bo,C.fmD(0,!0)],t))
s=A.B(s,B.m,v,B.b6,B.j,0,v,v)
r=A.d("Total: "+d.a12(d.ay),v,v,v,v,v,v,D.eOs,v,v,v)
q=d.ay
w=A.U(q).k("J<1,r>")
q=A.z(new A.J(q,new C.eXY(),w),w.k("ai.E"))
q=A.c8(B.fG,q,B.bx,6,6)
return A.v(A.a([new A.C(B.fq,u,v),D.eZh,B.ar,s,B.ay,D.f54,r,B.ar,q,B.b8,A.B(A.a([A.D(A.bL(D.eTW,d.CW?v:new C.eXZ(d,e,f,g),v),1),B.aa,A.D(A.bL(D.f7e,new C.eY_(d,e,f,g),v),1)],t),B.m,v,B.e,B.j,0,v,v)],t),B.m,v,B.e,B.j,0,B.p)},
hCQ(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vl,B.L,w,w),u=d.cx,t=A.a([new A.ab(0,B.G,B.x.j(0.45),B.cs,16)],x.V)
t=A.a([new A.C(B.fq,v,w),A.p(w,A.b2(w,w,w,new C.bmv(u,w),B.at),B.h,w,w,new A.o(w,w,w,w,t,w,B.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new A.C(B.ky,A.d("Result: "+A.t(v),w,w,w,w,w,w,D.eCW,w,w,w),w))
t.push(B.ab)
t.push(A.c8(B.fG,A.ii(6,new C.f6R(d,e,f,g),!0,x.l),B.bx,6,6))
return A.v(t,B.m,w,B.e,B.j,0,B.p)},
hDE(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vl,B.L,w,w),u=d.db,t=A.U(u).k("J<1,n>")
u=A.z(new A.J(u,new C.f8L(),t),t.k("ai.E"))
return A.v(A.a([new A.C(B.fq,v,w),C.hNy(new C.f8M(d,e,f,g),u)],x.p),B.m,w,B.e,B.j,0,B.p)},
hBE(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vl,B.L,w,w),u=A.m(20),t=A.H(B.h5,B.r,12),s=x.V,r=A.a([new A.ab(0,B.G,B.x.j(0.45),B.dn,18)],s),q=x.p
return A.v(A.a([new A.C(B.fq,v,w),A.D(A.p(w,new A.am(B.W,w,B.a9,B.q,A.a([A.an(w,A.p(w,w,B.h,w,w,D.aS2,w,18,w,w,w,w,w,18),w,w,24,w,24,w),A.an(28,A.p(w,w,B.h,w,w,B.a7j,w,14,w,w,w,w,w,14),w,w,w,32,w,w),A.au(A.et(B.A,d.dx,A.p(w,w,B.h,w,w,new A.o(B.aL,w,w,A.m(2),A.a([new A.ab(0,B.G,B.x.j(0.3),B.J,4)],s),w,B.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),B.h,w,w,new A.o(w,w,t,u,r,D.dVV,B.n),w,w,w,B.eZ,w,w,w,w),1),A.md(B.bm,w,w,1,0,new C.f5B(d,f),d.dy),A.bL(D.eYp,new C.f5C(d,e,g,f),w)],q),B.m,w,B.e,B.j,0,B.p)},
hwq(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.vl,B.L,v,v),t=x.l,s=J.e_(7,t)
for(w=0;w<7;++w)s[w]=new A.bH(1,B.br,A.aH(v,A.v(A.ii(6,new C.eYX(d,w),!0,t),B.m,v,B.m9,B.j,0,B.p),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eYY(d,w,e,f,g),v,v,v,v,v,v,!1,B.ad),v)
return A.v(A.a([new A.C(B.fq,u,v),A.D(A.au(new A.fD(1.1666666666666667,A.B(s,B.dH,v,B.e,B.j,0,v,v),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
hBH(d,e,f,g){var w=null
return A.v(A.a([new A.C(B.fq,A.d(d.c,w,w,w,w,w,w,D.vl,B.L,w,w),w),A.d(""+d.a+"/"+d.b,w,w,w,w,w,w,B.ki,w,w,w),A.d(d.fy,w,w,w,w,w,w,D.aKU,B.L,w,w),A.aK(w,B.U,!1,w,!0,B.q,w,A.aL(),d.id,w,w,w,w,w,2,D.bET,B.z,!0,w,!0,w,!1,w,B.ah,w,w,w,w,w,B.dN,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.f5O(d,e,g,f),w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,B.di,!0,B.a5,w,B.am,w,w,w,w),A.bL(D.eX6,new C.f5P(d,e,g,f),w)],x.p),B.m,w,B.e,B.j,0,B.p)},
hvZ(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gjB(),k=e.d
k=k==null?n:k.c
w=C.hMu(d)
v=D.ayy.h(0,d)
if(v==null)v=d
m=A.d(m,n,n,n,n,n,n,B.mY,B.L,n,n)
u=A.m(22)
t=w.a
s=w.b
r=A.H(s.j(0.5),B.r,2)
q=A.a([new A.ab(0,B.G,w.c.j(0.35),B.eP,24)],x.V)
p=A.d(w.e,n,n,n,n,n,n,W.R_,n,n,n)
o=A.d(v,n,n,n,n,n,n,B.ov,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+A.t(k)+" at the table"
k=x.p
q=A.D(A.au(A.p(n,A.v(A.a([p,B.T,o,B.P,A.d(l,n,n,n,n,n,n,A.l(n,n,B.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),B.L,n,n),B.d3,A.V(w.f,s.j(0.85),n,n,n,48)],k),B.m,n,B.b6,B.j,0,B.p),B.h,n,n,new A.o(n,n,r,u,q,new A.a3(B.aY,B.b1,B.w,t,n,n),B.n),n,n,n,B.eZ,B.a8,n,n,1/0),n,n,n),1)
return A.v(A.a([m,B.ab,q,B.P,new A.a5(1/0,n,A.bL(D.f6q,new C.eYp(f,e,g,h),A.bk(s,n,n,n,B.d.gL(t).j2()>0.4?B.x:B.c,n,B.cc,n,n,n,n,n)),n)],k),B.m,n,B.e,B.j,0,B.p)},
Dr:function Dr(d,e){this.a=d
this.b=e},
aon:function aon(d,e,f,g,h,i,j,k){var _=this
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
c8i:function c8i(){},
c8j:function c8j(){},
c8h:function c8h(){},
c8k:function c8k(){},
c8g:function c8g(){},
c8m:function c8m(){},
c8n:function c8n(){},
c8f:function c8f(d){this.a=d},
c8l:function c8l(){},
c8e:function c8e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
faN:function faN(d,e){this.a=d
this.b=e},
faH:function faH(d){this.a=d},
faI:function faI(d){this.a=d},
faJ:function faJ(d){this.a=d},
faK:function faK(d){this.a=d},
faL:function faL(d){this.a=d},
faM:function faM(d){this.a=d},
eYv:function eYv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eYu:function eYu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f9D:function f9D(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9C:function f9C(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f9B:function f9B(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eXX:function eXX(){},
eXY:function eXY(){},
eXZ:function eXZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eY_:function eY_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6R:function f6R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6Q:function f6Q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f8L:function f8L(){},
f8M:function f8M(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f5B:function f5B(d,e){this.a=d
this.b=e},
f5C:function f5C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eYY:function eYY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eYX:function eYX(d,e){this.a=d
this.b=e},
f5O:function f5O(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f5P:function f5P(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eYp:function eYp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hIl(d){var w,v=A.U(d).k("a4<1>")
v=A.oL(new A.a4(d,new C.feF(),v),120,v.k("G.E"))
w=A.cz(v,new C.feG(),A.a2(v).k("G.E"),x.N).aF(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
feF:function feF(){},
feG:function feG(){},
af6(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
apg:function apg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aBG:function aBG(d,e){var _=this
_.d=$
_.bq$=d
_.a6$=e
_.c=_.a=null},
eqW:function eqW(){},
aJr:function aJr(){},
hky(){var w=$.H4
if(w<=0)return;--w
$.H4=w
if(w===0){w=$.fRJ
if(w!=null)w.$0()}},
c3O(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
an2(d){var w=0,v=A.j(x.H),u,t
var $async$an2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.fBY.K(0,t)
w=4
return A.b(A.ax(),$async$an2)
case 4:w=3
return A.b(f.aq("Bool","ngmy_game_free_play_used_"+B.a.i(t.toLowerCase()),!0),$async$an2)
case 3:case 1:return A.h(u,v)}})
return A.i($async$an2,v)},
an1(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$an1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(C.c3O(d)){u=!0
w=1
break}t=B.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.fBY.t(0,t)){u=!1
w=1
break}w=3
return A.b(A.ax(),$async$an1)
case 3:s=f
r=B.a.i(t.toLowerCase())
r=A.ks(J.q(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$an1,v)},
Ts(){var w=0,v=A.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Ts=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ax(),$async$Ts)
case 7:r=e
q=A.aS(J.q(r.a,"ngmy_helper_ai_usage_v1"))
if(q==null||B.a.i(q).length===0){u=A.T(x.N,x.z)
w=1
break}p=B.R.aE(0,q,null)
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
return A.i($async$Ts,v)},
aX9(d){return C.hkL(d)},
hkL(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aX9=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.ax(),$async$aX9)
case 6:s=f
w=7
return A.b(s.aq("String","ngmy_helper_ai_usage_v1",B.R.al(d,null)),$async$aX9)
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
return A.i($async$aX9,v)},
aX7(d,e){var w,v,u,t,s=J.q(d,B.a.i(e.toLowerCase()))
if(!x.f.b(s))return new A.abM(0,new A.Q(Date.now(),0,!1))
w=J.a7(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=A.bh(u==null?"":u)
if(t==null)t=new A.Q(Date.now(),0,!1)
return new A.abM(typeof v=="number"?B.o.D(B.k.N(v),0,999999):0,t)},
aX8(d,e){if(B.o.ak(e.bv(d.b).a,36e8)>=24)return new A.abM(0,e)
return d},
c4k(d,e){var w=0,v=A.j(x.S),u,t,s
var $async$c4k=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return A.b(C.Ts(),$async$c4k)
case 3:t=g
s=Date.now()
u=B.o.D(e-C.aX8(C.aX7(t,d),new A.Q(s,0,!1)).a,0,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c4k,v)},
c4l(d,e){var w=0,v=A.j(x.cJ),u,t,s,r
var $async$c4l=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return A.b(C.Ts(),$async$c4l)
case 3:t=g
s=Date.now()
r=C.aX8(C.aX7(t,d),new A.Q(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bN(864e8)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c4l,v)},
hkM(d){var w,v,u,t=d.a,s=B.o.ak(t,1e6)
if(s<=0)return"0s"
w=B.o.ak(t,36e8)
v=B.o.ak(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+B.a.aT(B.o.u(v),2,"0")+"m "+B.a.aT(B.o.u(u),2,"0")+"s"
if(v>0)return""+v+"m "+B.a.aT(B.o.u(u),2,"0")+"s"
return""+u+"s"},
aXa(d){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aXa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return A.b(C.Ts(),$async$aXa)
case 3:t=p.aX8(o.aX7(f,d),new A.Q(Date.now(),0,!1))
w=4
return A.b(A.ax(),$async$aXa)
case 4:s=f
r=B.a.i(d.toLowerCase())
q=t.b.a4().ab()
u=A.ks(J.q(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aXa,v)},
ano(d){var w=0,v=A.j(x.H),u,t,s,r
var $async$ano=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return A.b(C.Ts(),$async$ano)
case 3:t=s.aX8(r.aX7(f,d),new A.Q(Date.now(),0,!1))
w=5
return A.b(A.ax(),$async$ano)
case 5:w=4
return A.b(f.aq("Bool","ngmy_helper_3left_"+B.a.i(d.toLowerCase())+"_"+t.b.a4().ab(),!0),$async$ano)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ano,v)},
anp(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$anp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=B.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return A.b(C.Ts(),$async$anp)
case 3:s=g
r=Date.now()
q=C.aX8(C.aX7(s,d),new A.Q(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aE(s,t,A.E(["count",r+1,"windowStart",q.b.a4().ab()],x.N,x.K))
w=4
return A.b(C.aX9(s),$async$anp)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anp,v)},
aeJ(d,e,a0){var w=0,v=A.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aeJ=A.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new A.f5("")
if(!d.d){p=!0
if(!C.h4E(a0))if(!C.h4D(a0)){p=A.ae("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.h4E(a0)?3:4
break
case 3:o=C.hM9(a0)
w=o!=null?5:6
break
case 5:w=7
return A.b(C.bXW(e,o),$async$aeJ)
case 7:n=a2
p=J.a7(n)
if(p.gci(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.fQb(o)+":\n"
m.a+=l
for(p=p.gah(n);p.C();){m=p.gT(p)
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
return A.b(A.Qm("text/plain"),$async$aeJ)
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
case 13:case 9:w=C.h4D(a0)?15:16
break
case 15:p=h
f=C
w=17
return A.b(C.a5j(e),$async$aeJ)
case 17:m=f.fRQ(a2)+"\n"
p.a+=m
case 16:p=A.ae("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return A.b(C.Sw(e),$async$aeJ)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.ct(i)){p=h
m=C.fQc(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=B.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeJ,v)},
hm5(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.ae("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.ae("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
c6U(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$c6U=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=A.fSu(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.eU("ngmy_local_growth_income_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bE),$async$c6U)
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
return A.i($async$c6U,v)},
ao4(d){var w=0,v=A.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$ao4=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=B.a.i(d)
if(J.aa(k)===0){u=null
w=1
break}t=4
w=7
return A.b(A.eU("ngmy_local_growth_income_stash_v1_"+B.a.i(k),null,!1,B.bE),$async$ao4)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.q(r,"payload")
q=J.k(n==null?"":n)
if(J.aa(q)===0){u=null
w=1
break}n=J.q(r,"ownerEmail")
p=B.a.i(J.k(n==null?"":n))
n=B.c1.c6(0,B.cw.aG(q))
m=J.y(J.q(r,"live"),!0)
u=new A.aD3(m,p,n)
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
return A.i($async$ao4,v)},
aYd(d){var w=0,v=A.j(x.bY),u,t,s,r,q
var $async$aYd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
w=C.hm5(q)?3:4
break
case 3:w=5
return A.b(C.c6U(q),$async$aYd)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.ao4(t)
w=1
break
case 4:if(B.a.a_(q,"NGMYLOCALSYNC1|")){u=C.ao4(B.a.i(B.a.aX(q,15)))
w=1
break}w=B.a.a_(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return A.b(C.ao4(B.a.i(B.a.aX(q,15))),$async$aYd)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new A.aD3(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYd,v)},
fSI(d){var w=d.bK
if(w>=0)return w
return 1},
aeU(d,e,f){var w=0,v=A.j(x.H),u,t
var $async$aeU=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return A.b(A.aMX(d,e),$async$aeU)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return A.b(A.Fn(d,null,null,!1,!0,""),$async$aeU)
case 5:w=4
return A.b(t.$1(h),$async$aeU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$aeU,v)},
hL3(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=B.a.i(a2)
if(a1.length===0)return B.i4
w=a1.toLowerCase()
v=A.ae("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=A.ae("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cz(w)
if(!u&&t==null)return B.i4
s=new A.Q(Date.now(),0,!1)
r=A.dc()
q=A.dc()
p=C.hAU(w)
if(p!=null){v=p.a
r.b=s.bN(v)
q.b=C.h_O(a1,w)
if(J.y(q.b9(),"Wake up")&&B.o.ak(v,e)<=180)q.b="Reminder \u2014 "+B.o.ak(v,e)+" min"}else{if(t!=null){v=A.ae("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=B.a.e1(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.h_P(v[2],v[4],v[3])
o=v[3]
m=A.c4(o==null?"":o,null)
if(m==null)m=0
l=A.bW(A.bw(s),A.bC(s),A.bO(s),0,0,0,0,0)
if(B.a.t(w,d))l=l.bN(a0)
r.b=A.bW(A.bw(l),A.bC(l),A.bO(l),n,m,0,0,0).bN(-36e8)
if(r.b9().cY(s.bN(e)))r.b=J.ch(r.b9(),B.nq)
v=C.hEW(v[1])
k=B.o.G(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+B.a.aT(B.o.u(m),2,"0")+" "+j)}else{l=A.bW(A.bw(s),A.bC(s),A.bO(s),0,0,0,0,0)
v=B.a.t(w,d)
if(v)l=l.bN(a0)
i=A.ae("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cz(w)
if(i!=null){o=i.b
h=C.h_P(o[1],o[3],o[2])
o=o[2]
g=A.c4(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=A.bW(A.bw(l),A.bC(l),A.bO(l),h,g,0,0,0)
r.b=f.cY(s.bN(3e7))&&!v?f.bN(a0):f
q.b=C.h_O(a1,w)}}v=x.N
return A.a([new A.kc("alarm",A.E(["title",q.b9(),"start",r.b9().ab(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
hAU(d){var w,v,u,t,s,r,q=[A.ae("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.ae("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.ae("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),A.ae("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
for(w=0;w<4;++w){v=q[w].cz(d)
if(v==null)continue
u=v.b
t=u[1]
s=A.c4(t==null?"":t,null)
if(s==null||s<=0)continue
r=u[2]
if(r==null)r="minute"
if(B.a.a_(r,"sec"))return new A.b8(1e6*B.o.D(s,5,86400))
if(B.a.a_(r,"hour")||B.a.a_(r,"hr"))return new A.b8(36e8*B.o.D(s,1,168))
return new A.b8(6e7*B.o.D(s,1,10080))}return null},
hEW(d){var w=d==null?"work":d,v=w.toLowerCase()
if(B.a.t(v,"meeting")||B.a.t(v,"appointment"))return"Meeting"
if(B.a.t(v,"class")||B.a.t(v,"school"))return"Class"
if(B.a.t(v,"shift"))return"Shift"
return"Work"},
h_P(d,e,f){var w,v=A.c4(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return B.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
h_O(d,e){var w,v,u,t
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
hmr(d){var w,v,u,t,s=J.a7(d)
if(s.gai(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.k5(d,80),v=w.$ti,w=new A.bU(w,w.gJ(0),v.k("bU<ai.E>")),v=v.k("ai.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gJ(d)>80?u+("\u2026 and "+(s.gJ(d)-80)+" more\n"):u
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
C.bnC.prototype={
nX(d,e){return this.a.$2(d,e)}}
C.E0.prototype={
S(){return new C.aF7(this.$ti.k("aF7<E0.T,E0.S>"))}}
C.aF7.prototype={
Z(){var w,v,u=this
u.a0()
w=u.a
v=w.f
w=new A.hu(B.Dy,v,null,null,w.$ti.k("hu<1>"))
u.e=w
u.U4()},
bp(d){var w,v=this
v.bC(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aJt()
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hu(B.Dy,w.b,w.c,w.d,w.$ti)}v.U4()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&A.c()
return v.mx(d,w)},
p(){this.aJt()
this.a2()},
U4(){var w,v=this
v.d=v.a.c.l0(new C.eMv(v),new C.eMw(v),new C.eMx(v))
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hu(B.Ut,w.b,w.c,w.d,w.$ti)},
aJt(){var w=this.d
if(w!=null){w.a9(0)
this.d=null}}}
C.asV.prototype={
mx(d,e){return this.e.$2(d,e)}}
C.aiF.prototype={
S(){return C.hsY()},
bn(){return this.r.$0()}}
C.qc.prototype={}
C.axr.prototype={
aag(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aag=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.fRh(r)
if(r.x==null||r.c4.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.fRj(s),$async$aag)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aag,v)},
Vq(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ao2(t.a.c),$async$Vq)
case 3:if(e!=null&&t.c!=null)t.a.bn()
r=!C.c3O(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return A.b(C.an1(t.a.c),$async$Vq)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.n(new C.d37(t,s))
if(!s)t.aag()
case 1:return A.h(u,v)}})
return A.i($async$Vq,v)},
a9S(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a9S=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.byy(),$async$a9S)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d3i(t,s))
case 1:return A.h(u,v)}})
return A.i($async$a9S,v)},
Z(){var w,v,u=this
u.bow()
$.rK=$.rK+1
w=u.a
$.byC=w.c.a
w=w.d.b4
v=A.U(w).k("J<1,a1<n,@>>")
w=A.z(new A.J(w,new C.d3A(),v),v.k("ai.E"))
u.f=w
u.a9S()
u.Ib()
u.Vq()
u.e=A.dD(B.nm,new C.d3B(u))},
Ib(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ib=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:C.aeV(t.a.d.b4)
w=3
return A.b(C.foR(t.a.d.b4),$async$Ib)
case 3:s=e
if(t.c==null){w=1
break}C.aeV(t.a.d.b4)
if(s!=null)t.n(new C.d3q(t,s))
else t.n(new C.d3r(t))
case 1:return A.h(u,v)}})
return A.i($async$Ib,v)},
p(){C.aWU()
var w=this.e
if(w!=null)w.a9(0)
this.bov()},
aeI(d,e,f){return this.ck1(d,e,f)},
ck1(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$aeI=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(e.toLowerCase())
p=J.q(t.r,q)
o=t.a
n=o.d.b4
o=o.c
s=d.b
C.hEZ(n,o.a,o.c,d.a,s,f,e,p)
t.a.bn()
w=3
return A.b(C.aeW(t.a.d.b4),$async$aeI)
case 3:if(t.c==null){w=1
break}t.n(new C.d3t(t))
r=f===1?"1 game":""+f+" games"
t.c.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$aeI,v)},
H6(d,e){return this.c5K(d,e)},
bVq(d){return this.H6(d,null)},
c5K(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$H6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&B.a.i(e).length!==0){s=C.tl(t.a.d.b4,B.a.i(e))
if(s!=null&&C.aLS(s)<=0){t.c.H(x.q).f.P(D.aIN)
w=1
break}}w=5
return A.b(C.an1(t.a.c),$async$H6)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return A.b(C.fBZ(r,C.fje(q.c),p),$async$H6)
case 6:w=1
break
case 4:o=new C.d3l(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
A.hm(r,new C.aAf(p,q.d,q.f,q.r,new C.d3m(o),q.w,C.fje(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
A.hm(q,new C.aiE(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.d3n(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$H6,v)},
bSZ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.aeV(i.a.d.b4)
C.aeV(i.f)
w=C.hPF(i.a.c.a,i.f)
v=C.hEY(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return B.bF
if(!u){t=B.d.gL(w)
u=A.m(14)
s=A.H(B.ba,B.r,1)
r=J.a7(t)
q=r.h(t,"fromName")
q=A.t(q==null?r.h(t,"fromEmail"):q)
p=A.t(r.h(t,"gameTitle"))
o=A.aR(r.h(t,g))
o=o==null?h:B.k.N(o)
if(o==null)o=1
r=A.aR(r.h(t,g))
r=r==null?h:B.k.N(r)
r=(r==null?1:r)===1?"":"s"
n=x.p
return A.p(h,A.v(A.a([D.f1g,A.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,B.oA,h,h,h),B.P,A.B(A.a([A.D(A.dV(A2.Ro,new C.d3d(i,t),h),1),B.aa,A.D(A.bL(D.f9z,new C.d3e(i,t),h),1)],n),B.m,h,B.e,B.j,0,h,h)],n),B.F,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(B.aB,h,s,u,h,h,B.n),h,h,h,B.e0,B.bl,h,h,1/0)}m=B.d.gL(v)
l=B.d.dI(i.y,new C.d3f(m),new C.d3g(i))
k=C.fHU(m,i.a.c.a,i.r)
j=C.aLS(m)
u=A.m(14)
s=A.H(B.ba,B.r,1)
r=j===1?"":"s"
return A.p(h,A.v(A.a([D.eV1,A.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,B.oA,h,h,h),B.av,A.d(C.hHx(m,i.a.c.a),h,h,h,h,h,h,B.a4r,h,h,h),B.P,A.bL(D.f0A,new C.d3h(i,l,m),h)],x.p),B.F,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(B.bk,h,s,u,h,h,B.n),h,h,h,B.e0,B.bl,h,h,1/0)},
bJQ(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.eqm.t(0,d.a),l=A.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=A.a2Q(w[v])
t=B.k.D(u.d*0.58,0.12,0.3)
l.push(new A.wq(u.a,u.b,B.k.D(u.c*0.92,0,0.9),t).it())}s=B.d.gL(w)
w=A.m(16)
t=A.m(18)
r=A.H(A.W(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1)
q=x.V
p=A.a([new A.ab(0,B.G,A.W(89,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),B.j8,12)],q)
o=x.p
o=A.a([new A.a5(100,n,A.au(A.V(d.e,B.c,n,n,n,64),n,n,n),n),A.D(new A.C(B.kx,A.v(A.a([A.B(A.a([A.D(A.d(d.b,n,n,n,n,n,n,B.l8,n,n,n),1)],o),B.m,n,B.e,B.j,0,n,n),B.av,A.d(d.c,n,2,B.a2,n,n,n,B.nL,n,n,n)],o),B.F,n,B.b6,B.j,0,B.p),n),1)],o)
if(m)o.push(A.aF(n,n,n,n,D.bCy,n,n,n,new C.d39(this,d),n,n,n,n,"Invite player",n))
o.push(new A.C(B.JS,A.p(n,D.bAK,B.h,n,n,new A.o(A.W(71,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),n,A.H(A.W(B.k.U(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1.6),n,A.a([new A.ab(0,B.G,A.W(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,10)],q),n,B.a6),n,44,n,n,n,n,n,44),n))
return A.aI(!1,w,!0,A.p(n,A.B(o,B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(n,n,r,t,p,new A.a3(B.aw,B.aC,B.w,l,n,n),B.n),n,92,n,B.e0,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.d3a(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.M(d).ax.a===B.H,l=A.M(d).ax.a===B.H?B.iZ:B.oU,k=m?B.hx.j(0.94):B.c.j(0.94),j=m?B.c:B.M,i=m?B.hx:B.c,h=m?B.c.j(0.08):B.aJ,g=m?B.c:B.M,f=m?B.bj:B.bM
if(!o.x)return C.aMp(n,l,A.au(A.mm(n,m?B.c:B.bm,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fje(o.a.c)
return new C.LV(o.a.w,w,!0,o.gaOd(),n)}w=A.aG(d,B.e3,x.w).w
v=A.m(12)
u=A.H(h,B.r,1)
t=x.V
s=A.a([],t)
if(!m)s.push(new A.ab(0,B.G,B.x.j(0.04),B.cA,12))
r=x.p
s=A.a([A.p(n,A.B(A.a([A.D(A.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,A.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,B.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new A.tQ(new C.d3x(o,f,g),n,$.aNL(),n)],r),B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(i,n,u,v,s,n,B.n),n,n,n,n,B.Vj,n,n,1/0),B.T,o.bSZ()],r)
v=o.y
B.d.v(s,new A.J(v,o.gbJP(),A.U(v).k("J<1,r>")))
w=A.ci(A.v(s,B.m,n,B.e,B.j,0,B.p),B.q,n,B.z,n,new A.N(14,w.r.b+78,14,24),n,n,B.ak)
s=A.m(35)
v=A.a([new A.ab(0,B.G,B.x.j(m?0.28:0.08),B.j8,15)],t)
u=A.H(m?B.c.j(0.1):B.aJ,B.r,1)
t=A.aF(n,n,n,n,A.V(B.eq,j,n,n,n,18),n,n,n,o.gaOd(),n,n,n,n,n,n)
q=A.D(A.au(A.d("GAME CENTER",n,n,n,n,n,n,A.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,B.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=A.m(20)
return A.nX(!0,C.aMp(n,l,new A.am(B.W,n,B.a9,B.h,A.a([w,A.an(n,A.bq(!1,new A.C(B.K3,A.p(n,A.B(A.a([t,q,new A.C(B.kx,A.p(n,A.B(A.a([D.by3,B.ez,C.anT(new C.d3y(o),B.mY,o.a.c.a)],r),B.m,n,B.e,B.Q,0,n,n),B.h,n,n,new A.o(B.cO,n,n,p,n,n,B.n),n,n,n,n,B.h8,n,n,n),n)],r),B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(k,n,u,s,v,n,B.n),n,60,n,n,B.lZ,n,n,n),n),!0,!1,B.aj,!0,!0),n,n,0,0,0,n)],r),n)),new C.d3z(o),x.K)},
aOe(){var w,v
this.a.bn()
w=this.d
v=w>0?A.E(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
A.iG(w,v)}}
C.aAf.prototype={
S(){return new C.bfQ()},
hk(d){return this.e.$1(d)},
bn(){return this.f.$0()},
aDb(){return this.r.$0()}}
C.bfQ.prototype={
Z(){this.bpv()
this.d=A.ST(this.a.d.bf)
$.rK=$.rK+1},
p(){C.aWU()
this.bpu()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&A.c()
return new C.amw(v,new C.dGn(w),u,new C.dGo(w),new C.dGp(w,d),new C.dGq(w),null)}}
C.aiE.prototype={
S(){return new C.axq(new A.ap(B.as,$.av()))},
hk(d){return this.x.$1(d)},
bn(){return this.y.$0()},
aDb(){return this.z.$0()}}
C.axq.prototype={
Z(){this.bou()
this.a.toString
$.rK=$.rK+1},
p(){C.aWU()
var w=this.d
w.R$=$.av()
w.O$=0
this.bot()},
a_S(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a_S=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.M0()
w=5
return A.b(C.an1(t.a.c),$async$a_S)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return A.b(C.fBZ(s,C.fje(r.c),q),$async$a_S)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&B.a.i(r).length!==0){p=C.tl(s.d.b4,B.a.i(r))
if(p!=null&&C.aLS(p)<=0){t.c.H(x.q).f.P(D.aIN)
w=1
break}}o=A.d9(B.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.H(x.q).f.P(D.exe)
w=1
break}m=A.Jy(t.a.c.a,new C.d31(t))
if(m+0.001<n){t.c.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Not enough balance for this bet \u2014 you have $"+A.dx(m)+", the bet is $"+A.dx(n)+".",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aDb()
s=t.a
s.toString
r=B.o.u(1000*Date.now())
q=t.a
s.hk(new A.cZ(r,q.c.a,n,B.ju,B.f6,"Game bet: "+q.f,null,null,B.cf,new A.Q(Date.now(),0,!1)))
t.a.bn()
if(D.eqe.t(0,t.a.e)){s=t.c
s.toString
r=t.a
A.hm(s,new C.alz(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
A.hm(s,new C.aiG(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$a_S,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=A.aF(o,o,o,o,B.F_,o,o,o,new C.d34(d),o,o,o,o,o,o),k=p.a,j=A.d(k.f,o,o,o,o,o,o,B.cr,o,o,o),i=A.m(12),h=x.p
j=A.eA(A.a([A.p(o,A.au(C.anT(new C.d35(p),B.ki,k.c.a),o,o,o),B.h,o,o,new A.o(B.cO,o,o,i,o,o,B.n),o,o,o,D.bfx,B.is,o,o,o)],h),o,o,!0,!0,D.Ur,o,1,o,o,o,!1,o,!1,B.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=A.m(16)
i=A.H(B.ba,B.r,1)
k=A.V(D.bp5,D.bag,o,o,o,28)
w=p.a
v=A.d(w.f,o,o,o,o,o,o,B.ov,o,o,o)
w=A.d(w.r,o,o,o,o,o,o,B.oA,o,o,o)
u=A.W(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.m(12)
s=x.a3
s=A.z(new A.J(A.a([2,5,10,25],x.t),new C.d36(p),s),s.k("ai.E"))
s=A.B(s,B.m,o,B.e,B.j,0,o,o)
r=A.W(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.p(o,A.v(A.a([D.fb2,B.T,s,B.P,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.d,o,o,o,o,o,2,A.bn(o,new A.b3(4,A.m(10),B.X),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,B.l9,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.ah,o,o,o,o,o,B.dN,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,B.di,!0,B.a5,o,B.am,o,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(u,o,o,t,o,o,B.n),o,o,o,o,B.bS,o,o,1/0)
u=A.m(12)
r=A.H(A.W(102,B.a0z.l()>>>16&255,B.a0z.l()>>>8&255,B.a0z.l()&255),B.r,1)
s=A.W(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
q=A.m(10)
q=A.p(o,A.v(A.a([D.eUp,A.d("+ $"+B.k.aa(n*0.46,2),o,o,o,o,o,o,D.eLi,o,o,o),A.d("(46% return on $"+B.k.aa(p.e,2)+" bet)",o,o,o,o,o,o,B.nL,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(s,o,o,q,o,o,B.n),o,o,o,o,B.ch,o,o,1/0)
s=A.W(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
n=A.m(10)
u=A.p(o,A.v(A.a([D.f1w,B.P,q,B.P,A.p(o,A.v(A.a([D.ePR,A.d("$"+B.k.aa(m,2),o,o,o,o,o,o,D.eBq,o,o,o),A.d("8 pairs \xd7 $"+B.k.aa(m,2)+" each",o,o,o,o,o,o,B.nL,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(s,o,o,n,o,o,B.n),o,o,o,o,B.ch,o,o,1/0)],h),B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(D.b6Z,o,r,u,o,o,B.n),o,o,o,o,B.bS,o,o,1/0)
r=A.fh(o,o,B.bm,o,o,o,o,o,o,B.c,o,B.fQ,o,o,o,o,o,o,o,o)
return C.aMp(j,D.Ur,A.ci(A.p(o,A.v(A.a([k,B.av,v,B.bA,w,B.T,t,B.P,u,B.T,new A.a5(1/0,o,A.i5(A.d("Start Game ($"+B.k.aa(p.e,2)+")",o,o,o,o,o,o,B.ce,o,o,o),p.gcnN(),r),o)],h),B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(o,o,i,l,o,D.bHu,B.n),o,o,o,o,B.eM,o,o,1/0),B.q,o,B.z,o,E.acO,o,o,B.ak))}}
C.aiG.prototype={
S(){var w=x.s,v=x.t,u=x.S
return new C.axs(B.cB,new A.ap(B.as,$.av()),A.a([],w),A.a([],x.d4),A.a([],w),A.a([],w),A.a([],v),A.a([],v),A.a([],v),A.aZ(u),A.aZ(u),A.a([],v),A.a([],v),A.a([],v))},
hk(d){return this.y.$1(d)},
bn(){return this.z.$0()}}
C.axs.prototype={
ghr(){var w=this.a.Q
return w!=null&&B.a.i(w).length!==0},
qn(d){return this.bI9(d)},
bI9(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$qn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.z7()
r=t.MU()
w=s<=0?3:4
break
case 3:w=5
return A.b(t.a8l(d),$async$qn)
case 5:w=1
break
case 4:q=B.k.D(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return A.b(t.rW(d),$async$qn)
case 9:w=7
break
case 8:w=10
return A.b(t.Di(q,s,r),$async$qn)
case 10:case 7:case 1:return A.h(u,v)}})
return A.i($async$qn,v)},
DS(d,e,f,g){return this.clD(d,e,f,g)},
clD(d,e,f,g){var w=0,v=A.j(x.H),u,t=this,s
var $async$DS=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return A.b(C.bzD(s,C.bzh(),C.fJL(),d,e,f,g),$async$DS)
case 3:case 1:return A.h(u,v)}})
return A.i($async$DS,v)},
z7(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.aYp(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&A.c()
return u+C.af6(t,s.e.a.a)
case"memory":return s.ghr()&&D.me.t(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.auK()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bf
case"color":return s.b4
case"reflex":return s.Y
default:u=s.aY
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
auK(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
MU(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&A.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.fHX()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.aY
if(w!=null)return w.b
return 1}},
bp(d){var w,v,u=this
u.bC(d)
if(u.f||u.c4)return
w=u.a
v=C.fjj(w.e,w.d.y2)
if(v!==C.fjj(d.e,d.d.y2)&&u.c!=null)u.n(new C.d4U(u,v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.boy()
w=i.a
w.toString
$.rK=$.rK+1
i.Q=C.fjj(w.e,w.d.y2)
i.b0c()
i.a9C()
if(i.ghr()){i.c4=!0
i.cT="Connecting to match\u2026"
i.cf="Both players enter the room together \u2014 play starts at the same time."
i.Nf()
i.a9g()
i.bg=A.dD(B.fV,new C.d4X(i))}if(B.d.t(D.NT,i.a.e)){w=i.ghr()
v=i.a
if(w){w=v.d.b4
v=v.Q
v.toString
u=C.tl(w,v)
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
m=s.b(t.h(u,h))?A.a_(s.a(t.h(u,h)),o,n):A.T(o,n)
s=p===r
l=s?q:r
if(s){o=m.h(0,"player2Name")
if(o==null)o=m.h(0,"playerOName")
t=o==null?t.h(u,"toName"):o
k=B.a.i(J.k(t==null?"":t))}else{o=m.h(0,"player1Name")
if(o==null)o=m.h(0,"playerXName")
t=o==null?t.h(u,"fromName"):o
k=B.a.i(J.k(t==null?"":t))}w=new C.aWS(!1,w,k.length===0||B.a.t(k,"@")?C.fHU(u,v,null):k,p,l,s)}else{w=w.c
w=C.fC2(w.c,w.a)}w=i.bH=w}else{w=v.c
w=i.bH=C.fC2(w.c,w.a)}v=C.hmy()
v.biC(i.a.e,i.d,w)
i.aY=v
i.r=v.c
if(i.ghr()){w=i.a
v=w.d.b4
w=w.Q
w.toString
u=C.tl(v,w)
m=u==null?null:J.q(u,h)
if(x.f.b(m)){w=i.aY
w.toString
w.b5b(i.a.e,A.a_(m,x.N,x.z),i.a.c.a)
w=i.aY
i.r=w.c
if(w.e){if(w.r)j=D.Pg
else j=w.f===!0?D.po:D.Gf
i.z9(j)}}}i.b0=A.dD(B.np,new C.d4Y(i))
if(i.ghr())i.b8=A.dD(B.o5,new C.d4Z(i))}if(i.ghr()&&!B.d.t(D.NT,i.a.e))i.b8=A.dD(B.o5,new C.d5_(i))
i.as=A.dD(B.h7,new C.d50(i))},
Nf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Nf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tl(s.d.b4,q)
w=p!=null?3:4
break
case 3:w=5
return A.b(C.bxE(p,t.a.c.a),$async$Nf)
case 5:o=e
if(t.c!=null)t.n(new C.d49(t,o))
w=1
break
case 4:w=6
return A.b(C.Jp(q,t.a.d.b4,!1),$async$Nf)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return A.b(C.bxE(n,t.a.c.a),$async$Nf)
case 7:o=e
if(t.c!=null)t.n(new C.d4a(t,o))
case 1:return A.h(u,v)}})
return A.i($async$Nf,v)},
afN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$afN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.Jp(r,s.d.b4,!1),$async$afN)
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
t.aJh(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=B.k.N(j)
else{h=j==null?null:J.k(j)
i=A.c4(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)B.d.bm(t.fy,new C.d4D(t))
if(i!=null&&t.fr.length!==0){s=A.z(t.dy,x.S)
B.d.v(s,t.dy)
r=new A.eX()
r.dQ(i)
B.d.fw(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.n(new C.d4E())}case 1:return A.h(u,v)}})
return A.i($async$afN,v)},
a9g(){var w=0,v=A.j(x.H),u=this
var $async$a9g=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Ze(!0),$async$a9g)
case 2:return A.h(null,v)}})
return A.i($async$a9g,v)},
Ze(d){return this.cbq(d)},
cbp(){return this.Ze(!1)},
cbq(b3){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$Ze=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghr()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
if(q.length===0){w=1
break}p=B.a.i(s.c.a.toLowerCase())
w=3
return A.b(C.Jp(q,s.d.b4,b3),$async$Ze)
case 3:o=b5
if(o==null)o=C.tl(t.a.d.b4,q)
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
a2=new A.Q(Date.now(),0,!1).a4()
if(b3){d.m(0,p,!0)
a1.m(0,p,a2.ab())}if(i&&!d.an(0,h))d.m(0,h,!1)
if(f&&!d.an(0,g))d.m(0,g,!1)
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
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.m(0,"memorySeed",B.o.G(1000*Date.now(),2147483647))
j.m(0,"memoryMatched",A.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.m(0,"patternSeed",B.o.G(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.hMx(t.a.d.b4,q,j)
t.a.bn()}if(t.c==null){w=1
break}b0=t.bA
if(b0==null)b0="your opponent"
if(!a5){t.n(new C.d4p(b2,t,b0))
w=1
break}if(s==null){t.n(new C.d4q(t))
w=1
break}b1=new A.Q(Date.now(),0,!1)
if(b1.cY(s)){s=s.bv(b1).a
r=B.o.ak(s,1e6)
t.n(new C.d4r(b2,t,r+(B.o.G(B.o.ak(s,1000),1000)>0?1:0)))
w=1
break}if(t.c4){t.n(new C.d4s(b2,t))
b2=t.a.e
if(b2==="pattern")t.a6g()
else if(b2==="memory"){t.b0b()
if(t.c!=null)t.n(new C.d4t())}}b2=t.bg
if(b2!=null)b2.a9(0)
t.bg=null
case 1:return A.h(u,v)}})
return A.i($async$Ze,v)},
aKb(d){var w,v,u,t,s=this
if(d!=null){w=new A.eX()
w.dQ(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e_(v,x.S)
for(t=0;t<v;++t)u[t]=w.aB(9)
s.ry=u
s.x1=0
s.to=-1},
aKa(){return this.aKb(null)},
a6g(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a6g=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ghr()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.c8Y()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return A.b(C.Jp(q,s.d.b4,!1),$async$a6g)
case 5:r=t.aXc(e)
case 4:if(t.c==null){w=1
break}t.aKb(r)
t.n(new C.d3C(t))
t.Cx()
case 1:return A.h(u,v)}})
return A.i($async$a6g,v)},
aXc(d){var w,v,u,t=null
if(d==null)return t
w=J.q(d,"sessionState")
if(!x.f.b(w))return t
v=J.q(w,"patternSeed")
if(typeof v=="number")return B.k.N(v)
u=v==null?t:J.k(v)
return A.c4(u==null?"":u,t)},
c8Y(){var w=this.a,v=w.Q
if(v==null)return null
return this.aXc(C.tl(w.d.b4,v))},
a9C(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a9C=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$a9C)
case 3:r=e
q=t.a
p=q.e
q=B.a.i(q.c.a.toLowerCase())
s=A.eY(J.q(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.n(new C.d48(t,s))
case 1:return A.h(u,v)}})
return A.i($async$a9C,v)},
oo(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n
var $async$oo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$oo)
case 2:p=e
o=u.a
n=o.e
o=B.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bA4().length
else s=n==="typing"?50:105
if(n==="typing")r=B.o.G(u.at+5,s)
else{q=u.at
r=t?B.o.G(q+6,s):B.o.G(q+1,s)}w=3
return A.b(p.aq("Int","ngmy_game_"+n+"_"+o,r),$async$oo)
case 3:u.at=r
return A.h(null,v)}})
return A.i($async$oo,v)},
a06(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a06=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.aY==null||t.f||t.aQ){w=1
break}if(t.c4){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.Jp(r,s.d.b4,!1),$async$a06)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.b4
s=s.Q
s.toString
p=C.tl(r,s)
s=p==null
if(!s){r=J.cA(p)
r.a7(p)
r.v(p,q)}r=J.a7(q)
o=r.h(q,"sessionState")
if(!x.f.b(o)){w=1
break}n=A.a_(o,x.N,x.z)
r=r.h(q,"sessionUpdatedAt")
m=A.bh(J.k(r==null?"":r))
s=s?null:J.q(p,"sessionUpdatedAt")
l=A.bh(J.k(s==null?"":s))
if(m!=null&&l!=null&&!m.c8(l)){w=1
break}s=t.aY
s.toString
r=t.a
s.b5b(r.e,n,r.c.a)
r=t.aY
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.Pg
else k=r.f===!0?D.po:D.Gf
w=7
return A.b(t.z9(k),$async$a06)
case 7:w=5
break
case 6:if(t.c!=null)t.n(new C.d4F())
case 5:case 1:return A.h(u,v)}})
return A.i($async$a06,v)},
adJ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$adJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghr()||q.aY==null||q.a.Q==null||q.aQ){w=1
break}q.aQ=!0
t=3
o=q.aY
o.toString
p=o.cCB(q.a.e)
o=q.a
n=o.d.b4
o=o.Q
o.toString
w=6
return A.b(C.aML(n,o,p),$async$adJ)
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
return A.i($async$adJ,v)},
z9(d){return this.bP6(d)},
bP6(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$z9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(t.f||t.aY==null){w=1
break}s=t.aY.w
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
return A.b(t.HL(s,s),$async$z9)
case 9:w=4
break
case 6:w=10
return A.b(t.VM(s,s),$async$z9)
case 10:w=4
break
case 7:w=11
return A.b(t.a8k(s,s),$async$z9)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghr()?12:13
break
case 12:w=14
return A.b(t.Gq(),$async$z9)
case 14:case 13:case 1:return A.h(u,v)}})
return A.i($async$z9,v)},
Yd(d,e){return this.c3x(d,e)},
c3x(d,e){var w=0,v=A.j(x.H),u,t=this
var $async$Yd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=t.ghr()?3:5
break
case 3:w=6
return A.b(t.adJ(),$async$Yd)
case 6:if(d===D.pn){w=1
break}w=4
break
case 5:if(d===D.pn){w=1
break}case 4:w=7
return A.b(t.z9(d),$async$Yd)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Yd,v)},
a9w(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$a9w=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tl(s.d.b4,q)
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
return A.b(C.aML(t.a.d.b4,q,l),$async$a9w)
case 3:t.a.bn()
case 1:return A.h(u,v)}})
return A.i($async$a9w,v)},
Gq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Gq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tl(s.d.b4,q)
if(p==null){w=1
break}o=J.q(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?A.a_(o,s,r):A.T(s,r)
n.m(0,"gameOver",!0)
C.fKa(t.a.d.b4,q,n)
C.hPO(t.a.d.b4,q)
w=3
return A.b(C.aeW(t.a.d.b4),$async$Gq)
case 3:t.a.bn()
case 1:return A.h(u,v)}})
return A.i($async$Gq,v)},
p(){var w,v=this
if(v.ghr()&&!v.f)v.a9w()
else if(!v.f)v.bVr()
C.aWU();++v.RG
w=v.as
if(w!=null)w.a9(0)
w=v.b0
if(w!=null)w.a9(0)
w=v.cx
if(w!=null)w.a9(0)
w=v.b8
if(w!=null)w.a9(0)
w=v.bg
if(w!=null)w.a9(0)
w=v.e
w.R$=$.av()
w.O$=0
v.box()},
cqN(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&A.c()
v=v<=0||w.aY==null}if(v)return
if(w.c4)return
v=w.aY
v.toString
w.a.toString
if(v.a>=v.b){w.rW("Goal completed!")
return}v=++w.rx
if(v%5===0)w.n(new C.d4O())},
b0c(){var w,v,u,t,s,r=this
r.x=A.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e_(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b0b()
break
case"scramble":r.bf=0
r.b0d()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=B.o.G(r.at,50)
v=J.e_(5,x.N)
for(t=0;t<5;++t)v[t]=D.cYw[B.o.G(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bJ(0,B.c0)
break
case"math":r.y2=0
r.b0a()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b0e()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e_(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
B.d.fw(v,s)
if(!r.cdK()){w=J.e_(9,w)
for(u=0;u<9;++u)w[u]=u
B.d.fw(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
B.d.a7(w)
w.push(r.d.aB(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.ON()
break
case"pattern":if(r.ghr()){r.ry=A.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aKa()
w=A.t(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Cx()}break
case"color":r.b4=0
r.b05()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.Y=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b1h()
break
default:if(B.d.t(D.NT,w)){w=r.aY
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
aYp(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
cdK(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return B.o.G(v,2)===0},
b0e(){var w,v,u,t,s,r=this,q=B.o.G(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e_(o,x.S)
for(w=0;w<o;w=v){v=w+1
n[w]=B.k.N(Math.pow(p,v))}u=B.k.N(Math.pow(p,o))
r.w=B.o.u(u)
r.aw=B.d.aF(n,", ")
q=r.w
t=x.s
s=A.a([B.o.u(u+p),B.o.u(u-p),B.o.u(u+p*2)],t)
t=A.a([q],t)
B.d.v(t,s)
B.d.fw(t,r.d)
r.x=t},
b0a(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bA4().length-6)u.at=0
w=$.bA4()
v=w[B.o.G(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b0d(){var w=this,v=w.w=D.cDY[B.o.G(w.at+w.bf,105)]
w.ax=C.hQ3(v)
w.ay=A.bZ(v.length,null,!1,x.T)
w.ch=A.a(w.ax.split(""),x.s)
w.e.bJ(0,B.c0)},
b1h(){var w=this,v=w.cx
if(v!=null)v.a9(0)
w.y=!1
w.z=null
w.cx=A.cO(A.dB(0,0,0,120+w.d.aB(280),0,0),new C.d4C(w))},
bP9(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.qn("Too early \u2014 paid for "+t.Y+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=B.o.ak(new A.Q(v,0,!1).bv(u).a,1000)}if(w<520){t.n(new C.d46(t))
v=t.Y
if(v>=5){t.oo()
t.rW("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b1h()
t.n(new C.d47())}}else t.qn("Too slow ("+w+"ms) \u2014 paid for "+t.Y+"/5.")},
cq5(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=B.d.bi(t.ay,new C.d4J())
if(u<0)return
t.n(new C.d4K(t,u,v,d))},
cq6(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.n(new C.d4L(u,d,v))},
bzB(){var w,v,u=this
if(u.f)return
if(B.d.ba(u.ay,new C.d3D())){u.c.H(x.q).f.P(D.ex8)
return}w=B.d.fN(u.ay)
v=u.w
v===$&&A.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.n(new C.d3E(u))
if(u.ghr()&&D.me.t(0,u.a.e))u.Zs()
if(u.bf>=5){u.oo()
if(u.ghr()&&D.me.t(0,u.a.e))u.mu(!0)
else u.rW("All 5 words unscrambled!")}else{u.b0d()
u.r="Word "+(u.bf+1)+" of 5 \u2014 place letters in order"
u.n(new C.d3F())}}else u.qn("Wrong word \u2014 paid for "+u.bf+"/5.")},
b05(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=B.o.G(w.at+w.b4*11,4),t=v[w.d.aB(4)]
w.aC=t
w.aA=v[u]
w.aL=[B.dC,B.dt,B.hH,B.qE][u]
w.w=t},
aJh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=B.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a7(0)
w=h.id
w.a7(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=A.aZ(x.S)
for(s=J.jk(v),s=s.gah(s),r=x.j;s.C();){q=s.gT(s)
p=B.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aV(r.b(o)?o:B.cR),n=p===g;q.C();){m=q.gT(q)
l=typeof m=="number"?B.k.N(m):A.c4(J.k(m),null)
if(l==null)continue
t.K(0,l)
if(n)w.K(0,l)}}f.v(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aV(k);w.C();){m=w.gT(w)
l=typeof m=="number"?B.k.N(m):A.c4(J.k(m),null)
if(l!=null)f.K(0,l)}}h.k2=B.k.bw(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=A.aR(J.q(j,g))
i=f==null?null:B.k.N(f)
if(i!=null)h.fx=i}},
b0b(){var w,v,u,t,s,r,q,p=this
p.fx=p.k2=0
p.go.a7(0)
p.id.a7(0)
p.fy=A.a([],x.t)
p.k1=!1
w=A.z(p.dy,x.S)
B.d.v(w,p.dy)
p.fr=w
if(p.ghr()&&p.a.Q!=null){w=p.a
v=w.d.b4
w=w.Q
w.toString
u=C.tl(v,w)
t=u==null?null:J.q(u,"sessionState")
w=x.N
v=x.z
s=x.f.b(t)?A.a_(t,w,v):A.T(w,v)
r=s.h(0,"memorySeed")
if(typeof r=="number")q=B.k.N(r)
else{w=r==null?null:J.k(r)
q=A.c4(w==null?"":w,null)}w=p.fr
if(q!=null){v=new A.eX()
v.dQ(q)
B.d.fw(w,v)}else B.d.fw(w,p.d)
p.aJh(s)}else B.d.fw(p.fr,p.d)},
caM(d){var w,v,u,t=this
if(t.c4)return
if(t.f||t.k1||t.go.t(0,d)||B.d.t(t.fy,d))return
t.n(new C.d4i(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.n(new C.d4j(t,v,u))
if(t.ghr()&&D.me.t(0,t.a.e))t.Zs()
if(t.go.a>=t.fr.length){t.oo()
if(t.ghr()&&D.me.t(0,t.a.e))t.mu(!0)
else t.auN()}return}t.k1=!0
A.bN(D.beu,new C.d4k(t),x.c)},
b_z(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&A.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.n(new C.d4u(u))
if(u.y1>=5){u.oo()
u.rW("All 5 questions correct!")}else{u.b0e()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.n(new C.d4v())}}else u.qn(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.n(new C.d4w(u))
if(u.y2>=6){u.oo()
u.rW("All 6 math questions correct!")}else{u.b0a()
u.r="Question "+(u.y2+1)+" of 6"
u.n(new C.d4x())}}else{u.TT(u.y2+1)
u.qn(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.n(new C.d4y(u))
if(u.b4>=5){u.oo()
u.rW("All 5 color rounds correct!")}else{u.b05()
u.r="Round "+(u.b4+1)+" of 5 \u2014 tap the COLOR of the text"
u.n(new C.d4z())}}else u.qn("Wrong color \u2014 paid for "+u.b4+"/5.")
return}if(v){u.oo()
u.auN()}else u.c.H(x.q).f.P(D.exS)},
cq4(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=B.d.cP(q.k4,0)
v=B.o.ak(d,3)
u=B.o.G(d,3)
t=B.o.ak(w,3)
s=B.o.G(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.n(new C.d4I(q,d,w))
if(B.d.fN(q.k4)==="123456780"){q.oo()
q.auN()}}},
ON(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$ON=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.n(new C.d4l(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.d4m(t,q).$0()
t.c.e3()
w=6
return A.b(A.bN(B.kv,null,r),$async$ON)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.d4n(t).$0()
t.c.e3()
w=7
return A.b(A.bN(B.jj,null,r),$async$ON)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.n(new C.d4o(t))
case 1:return A.h(u,v)}})
return A.i($async$ON,v)},
cq7(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.qn("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.n(new C.d4M(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.oo()
u.rW("Perfect Simon run!")
return}u.n(new C.d4N(u))
u.ON()}},
Cx(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Cx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.n(new C.d3G(t))
s=x.H
w=3
return A.b(A.bN(B.ji,null,s),$async$Cx)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.d3H(t,o).$0()
t.c.e3()
w=7
return A.b(A.bN(B.UY,null,s),$async$Cx)
case 7:if(t.c==null){w=1
break}new C.d3I(t).$0()
t.c.e3()
w=8
return A.b(A.bN(B.io,null,s),$async$Cx)
case 8:case 5:r.length===q||(0,A.K)(r),++p
w=4
break
case 6:if(t.c!=null)t.n(new C.d3J(t))
case 1:return A.h(u,v)}})
return A.i($async$Cx,v)},
TT(d){return this.but(d)},
but(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$TT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return A.b(A.ax(),$async$TT)
case 3:s=f
r=t.a
q=r.e
r=B.a.i(r.c.a.toLowerCase())
p=$.bA4().length
o=B.o.G(t.at+d,p)
w=4
return A.b(s.aq("Int","ngmy_game_"+q+"_"+r,o),$async$TT)
case 4:t.at=o
case 1:return A.h(u,v)}})
return A.i($async$TT,v)},
cq2(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.qn("Wrong tile \u2014 paid for "+v.auK()+"/"+C.fHX()+" moves.")
return}v.n(new C.d4G(v,w))
if(v.ghr()&&D.me.t(0,v.a.e))v.Zs()
if(v.x1>=w)if(v.x2>=7){v.oo()
if(v.ghr()&&D.me.t(0,v.a.e))v.mu(!0)
else v.rW("All 7 pattern rounds correct!")}else{v.n(new C.d4H(v))
v.Cx()}},
HL(d,e){return this.c9d(d,e)},
rW(d){return this.HL(null,d)},
auN(){return this.HL(null,null)},
c9d(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a9(0)
s=t.b0
if(s!=null)s.a9(0)
r=t.a.x*1.46
t.n(new C.d4g(t,r))
q=B.o.u(1000*Date.now())
s=t.a
p=new A.cZ(q,s.c.a,r,B.fu,B.f6,"Game payout: "+s.f,null,null,B.cf,new A.Q(Date.now(),0,!1))
A.aeT(p,!0)
t.a.hk(p)
t.a.bn()
o=e==null?"+$"+B.k.aa(r,2)+" added to your balance!":e
s=t.a
C.u0(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.DS(d,o,"YOU WIN!",!0),$async$HL)
case 3:w=4
return A.b(C.aeL(t.a.f,o),$async$HL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$HL,v)},
DQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$DQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghr()&&D.me.t(0,t.a.e)?3:4
break
case 3:w=5
return A.b(t.ckJ(),$async$DQ)
case 5:w=1
break
case 4:s=t.z7()
r=t.MU()
w=r<=0||s<=0?6:7
break
case 6:w=8
return A.b(t.a8l("Time's up \u2014 no progress to pay."),$async$DQ)
case 8:w=1
break
case 7:q=B.k.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return A.b(t.rW("Complete! Max payout earned."),$async$DQ)
case 12:w=10
break
case 11:w=13
return A.b(t.Di(q,s,r),$async$DQ)
case 13:case 10:case 1:return A.h(u,v)}})
return A.i($async$DQ,v)},
OU(d){return this.cdr(d)},
Zs(){return this.OU(!1)},
cdr(b1){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$OU=A.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghr()&&D.me.t(0,r.a.e))||r.a.Q==null){w=1
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
a4=C.tl(a2.d.b4,q)
w=a4==null?7:9
break
case 7:w=10
return A.b(C.Jp(q,r.a.d.b4,!1),$async$OU)
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
a6=A.z(a6,A.a2(a6).k("cl.E"))
B.d.fz(a6)
J.aE(i,p,a6)
J.aE(m,"memoryMatchedBy",i)
h=A.aZ(x.S)
for(a6=i,a6=new A.dv(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aV(g);a8.C();){f=a8.gT(a8)
e=typeof f=="number"?B.k.N(f):A.c4(J.k(f),null)
if(e!=null)J.ch(h,e)}}a6=h
a6=A.z(a6,A.a2(a6).k("cl.E"))
B.d.fz(a6)
J.aE(m,"memoryMatched",a6)}d=J.q(m,"wagers")
a0=a2.b(d)?A.a_(d,a3,a5):A.T(a3,a5)
J.aE(a0,p,r.a.x)
J.aE(m,"wagers",a0)
w=11
return A.b(C.aML(r.a.d.b4,q,m),$async$OU)
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
return A.i($async$OU,v)},
mu(d){return this.ckK(d)},
ckJ(){return this.mu(!1)},
ckK(b5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$mu=A.e(function(b6,b7){if(b6===1)return A.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghr()||t.a.Q==null?3:4
break
case 3:w=5
return A.b(t.DQ(),$async$mu)
case 5:w=1
break
case 4:w=6
return A.b(t.OU(!0),$async$mu)
case 6:s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=B.a.i(s.c.a.toLowerCase())
w=7
return A.b(C.Jp(q,s.d.b4,!0),$async$mu)
case 7:o=b7
n=t.MU()
w=o==null?8:9
break
case 8:m=B.k.D(t.z7()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return A.b(t.a8l("Time's up \u2014 no progress to pay."),$async$mu)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return A.b(t.rW("Complete! Max payout earned."),$async$mu)
case 17:w=15
break
case 16:w=18
return A.b(t.Di(m,t.z7(),n),$async$mu)
case 18:case 15:case 11:w=19
return A.b(t.Gq(),$async$mu)
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
g=s.b(i)?A.a_(i,r,h):A.T(r,h)
f=g.h(0,"scores")
e=s.b(f)?A.a_(f,r,h):A.T(r,h)
d=A.aR(e.h(0,p))
a0=d==null?null:B.k.N(d)
if(a0==null)a0=t.z7()
d=A.aR(e.h(0,j))
a1=d==null?null:B.k.N(d)
if(a1==null)a1=0
a2=B.k.D(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return A.b(t.a8l("Time's up \u2014 no progress to pay."),$async$mu)
case 22:w=23
return A.b(t.Gq(),$async$mu)
case 23:w=1
break
case 21:a3=g.h(0,"wagers")
r=A.aR((s.b(a3)?A.a_(a3,r,h):A.T(r,h)).h(0,j))
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
r=t.b0
if(r!=null)r.a9(0)
a8=t.a.x*1.46*a2
a9=a8+a7
t.n(new C.d4A(t,a8,a2))
r=t.a
r.toString
h=B.o.u(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+B.k.aa(a7,2):d+" ("+b1+"/"+b2+")"
r.hk(new A.cZ(h,b0,a9,B.fu,B.f6,d,null,null,B.cf,new A.Q(Date.now(),0,!1)))
t.a.bn()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+B.k.aa(a9,2)+" (includes opponent bonus $"+B.k.aa(a7,2)+")":"+$"+B.k.aa(a8,2)+" (your progress payout)"
s=t.a
C.u0(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return A.b(t.DS(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$mu)
case 24:w=25
return A.b(t.Gq(),$async$mu)
case 25:case 1:return A.h(u,v)}})
return A.i($async$mu,v)},
Di(d,e,f){return this.c9b(d,e,f)},
c9b(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Di=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a9(0)
s=t.b0
if(s!=null)s.a9(0)
r=t.a.x*1.46*d
t.n(new C.d4e(t,r,d))
s=B.o.u(1000*Date.now())
q=t.a
p=new A.cZ(s,q.c.a,r,B.fu,B.f6,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,B.cf,new A.Q(Date.now(),0,!1))
A.aeT(p,!0)
t.a.hk(p)
t.a.bn()
if(t.c==null){w=1
break}o=B.k.U(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&A.c()
m=q+C.af6(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?B.d.cG(t.cy,0,new C.d4f()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+B.k.aa(r,2)+" ("+n+"% \u2014 "+A.t(k)+" mistakes/missed)":"+$"+B.k.aa(r,2)+" ("+n+"% of full prize)"
q=t.a
C.u0(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return A.b(t.DS(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$Di)
case 3:w=4
return A.b(C.aeL(t.a.f,j),$async$Di)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Di,v)},
bVr(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.z7()
v=o.MU()}catch(u){return}if(v<=0||w<=0)return
t=B.k.D(w/v,0,1)
s=A.Pg(B.k.aa(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=B.o.u(1000*Date.now())
p=o.a
r.hk(new A.cZ(q,p.c.a,s,B.fu,B.f6,"Game partial: "+p.f+" ("+A.t(w)+"/"+A.t(v)+", left early)",n,n,B.cf,new A.Q(Date.now(),0,!1)))
o.a.bn()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.u0(s,n,"Left early \xb7 +$"+B.k.aa(s,2)+" ("+A.t(w)+"/"+A.t(v)+")",q,r,p,n,!0)},
a8k(d,e){return this.bJK(d,e)},
bJK(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a8k=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a9(0)
s=t.b0
if(s!=null)s.a9(0)
r=B.o.u(1000*Date.now())
s=t.a
q=s.c.a
p=s.x
s=s.f
o=Date.now()
t.a.hk(new A.cZ(r,q,p,B.fu,B.f6,"Game payout: "+s+" (draw, stake returned)",null,null,B.cf,new A.Q(o,0,!1)))
t.a.bn()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.u0(o,null,"Draw. Your $"+B.k.aa(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.DS(d,"Nobody won, so your $"+B.k.aa(t.a.x,2)+" stake was returned.","DRAW",!1),$async$a8k)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8k,v)},
VM(d,e){return this.bJL(d,e)},
a8l(d){return this.VM(null,d)},
bJL(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$VM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a9(0)
s=t.b0
if(s!=null)s.a9(0)
s=t.a
r=s.c.a
q=s.f
s=s.x
C.u0(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return A.b(t.DS(d,e,"YOU LOSE",!1),$async$VM)
case 3:case 1:return A.h(u,v)}})
return A.i($async$VM,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&A.c()
w=B.o.ak(m,60)
m=B.a.aT(B.o.u(B.o.G(m,60)),2,"0")
v=A.aF(n,n,n,n,B.aic,n,n,n,new C.d4P(d),n,n,n,n,n,n)
if(o.ghr()){u=o.bA
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=A.D(A.d(u?t.f+" vs "+A.t(o.bA):t.f,n,2,B.a2,n,n,n,B.fR,n,n,n),1)
r=A.m(10)
q=x.p
r=A.B(A.a([v,s,A.p(n,C.anT(new C.d4Q(o),B.qW,t.c.a),B.h,n,n,new A.o(B.cO,n,n,r,n,n,B.n),n,n,n,n,B.fK,n,n,n)],q),B.m,n,B.e,B.j,0,n,n)
t=o.a
s=t.w
v=A.m(10)
s=A.p(n,A.B(A.a([A.D(A.d("Win $"+B.k.aa(t.x*1.46,2)+" \xb7 stake $"+B.k.aa(o.a.x,2)+" \u2022 Progress "+o.z7()+"/"+o.MU(),n,n,n,n,n,n,D.eGd,n,n,n),1),new C.an3(o.a.c.a,new C.d4R(o),n),B.aa,D.btK,B.d5,A.d(""+w+":"+m,n,n,n,n,n,n,B.oy,n,n,n)],q),B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(n,n,n,v,n,new A.a3(B.a3,B.a7,B.w,s,n,n),B.n),n,n,n,n,B.fW,n,n,n)
v=o.a.w
m=A.U(v).k("J<1,x>")
m=A.z(new A.J(v,new C.d4S(),m),m.k("ai.E"))
w=A.m(14)
v=A.H(B.ba,B.r,1)
p=C.aMp(n,D.aZt,A.bq(!0,new A.C(Ae.Vl,A.v(A.a([r,s,B.P,new A.fk(new C.d4T(o),n),B.ar,A.D(A.p(n,o.bJJ(),B.h,n,n,new A.o(n,n,v,w,n,new A.a3(B.a3,B.a7,B.w,m,n,n),B.n),n,n,n,n,B.ch,n,n,n),1)],q),B.ag,n,B.e,B.j,0,B.p),n),!0,!1,B.aj,!0,!0))
if(!o.c4)return p
m=A.W(140,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255)
w=A.W(242,B.ii.l()>>>16&255,B.ii.l()>>>8&255,B.ii.l()&255)
v=A.m(18)
u=A.H(B.ba,B.r,1)
return new A.am(B.W,n,B.a9,B.q,A.a([p,A.bX(0,A.p(B.A,A.e1(A.p(n,A.v(A.a([D.etl,B.ab,A.d(o.cT,n,n,n,n,n,n,D.eHB,B.L,n,n),B.ar,A.d(o.cf,n,n,n,n,n,n,D.eFX,B.L,n,n)],q),B.m,n,B.e,B.Q,0,B.p),B.h,n,n,new A.o(w,n,u,v,n,n,B.n),n,n,n,B.uo,B.wB,n,n,n),!1,n),B.h,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
bWp(){var w=this.k3
return A.ck(new C.d4d(this,w,B.k.dF(this.fr.length/w)))},
bJJ(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.bWp()
if(m==="scramble"){m=o.r
m===$&&A.c()
w=x.l
return A.v(A.a([A.d(m,n,n,n,n,n,n,B.nL,n,n,n),A.d("Words "+o.bf+"/5",n,n,n,n,n,n,B.C2,n,n,n),B.ab,A.d("Tap letters below to fill each slot",n,n,n,n,n,n,A.l(n,n,A.W(166,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.T,A.c8(B.fG,A.ii(o.ay.length,new C.d3W(o),!0,w),B.bx,6,6),B.aO,A.c8(B.fG,A.ii(o.ch.length,new C.d3X(o),!0,w),B.bx,8,8),B.aO,new A.a5(1/0,n,A.i5(D.f4H,o.gbzA(),A.fh(n,n,B.aB,n,n,n,n,n,n,B.c,n,n,B.cc,n,n,n,n,n,n,n)),n)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="typing"){m=o.w
m===$&&A.c()
return new C.apg(m,o.e,new C.d3Y(o),new C.d3Z(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&A.c()
m=A.a([A.d(m,n,n,n,n,n,n,B.nL,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(A.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,B.C2,n,n,n))
m.push(B.ab)
if(o.a.e==="sequence"){w=o.aw
w===$&&A.c()
w+=", ?"}else w=o.CW
m.push(A.eZ(B.A,A.d(w,n,n,n,n,n,n,B.ov,B.L,n,n),B.h,B.dq))
m.push(B.aO)
w=o.x
B.d.v(m,new A.J(w,new C.d4_(o),A.U(w).k("J<1,r>")))
return A.v(m,B.m,n,B.e,B.j,0,B.p)}if(m==="puzzle")return A.ck(new C.d40(o))
if(m==="simon"){m=o.r
m===$&&A.c()
return A.v(A.a([A.d(m,n,n,n,n,n,n,B.nL,n,n,n),A.d("Progress "+o.p3+"/21",n,n,n,n,n,n,B.C2,n,n,n),B.P,A.D(A.lj(1,A.ii(4,new C.d41(o),!0,x.l),2,10,10,n,B.dL,!1),1)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="pattern")return A.ck(new C.d42(o))
if(m==="color"){u=A.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[B.dC,B.dt,B.hH,B.qE]
m=o.r
m===$&&A.c()
m=A.d(m,n,n,n,n,n,n,B.nL,n,n,n)
w=A.d("Round "+o.b4+"/5",n,n,n,n,n,n,B.C2,n,n,n)
v=o.aA
v===$&&A.c()
s=o.aL
s===$&&A.c()
s=A.a([m,w,B.ab,A.d(v,n,n,n,n,n,n,A.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.aO],x.p)
r=J.e_(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=A.fh(n,n,A.W(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,B.c,n,n,B.eY,n,n,n,n,n,n,n)
r[q]=new A.C(B.cL,new A.a5(1/0,n,A.i5(new A.w(u[q],n,B.cr,n,n,n,n,n,n,n,n,n),new C.d43(o,u,q),m),n),n)}B.d.v(s,r)
return A.v(s,B.m,n,B.e,B.j,0,B.p)}if(m==="reflex"){m=o.y
p=m?B.bm:B.ck
w=o.r
w===$&&A.c()
w=A.d(w,n,n,n,n,n,n,B.a4n,B.L,n,n)
v=A.d("Fast taps "+o.Y+"/5",n,n,n,n,n,n,D.eDt,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=A.d(m,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,n,n,n,Math.min(A.aG(s,B.bR,x.w).w.a.a*0.18,72),n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return A.qX(A.aH(B.c5,A.dj(n,A.v(A.a([w,B.P,v,B.b8,s,B.b8,new A.C(B.DK,A.d(m,n,n,n,n,n,n,A.l(n,n,A.W(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),B.m,n,B.b6,B.j,0,B.p),p,n,B.b9,n,T.zz,n,n,n,n,n,n,n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gbP8(),n,n,n,n,n,n,!1,B.ad))}if(B.d.t(D.NT,m)&&o.aY!=null){m=o.a.e
w=o.aY
w.toString
return C.hFD(m,new C.d44(o),new C.d45(o),o.d,w)}m=o.r
m===$&&A.c()
return A.au(A.d(m,n,n,n,n,n,n,B.di,n,n,n),n,n,n)}}
C.ajx.prototype={
S(){return new C.bd1()},
cI9(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bd1.prototype={
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.a,a0=d.c,a1=d.d
d=A.aG(a2,B.e3,x.w).w
w=x.p
v=A.a([A.bJS(!1,f.a.r,"INVESTMENT PLANS",e),B.d3],w)
u=a0.x
if(u!=null){t=u.d.bQ()
s=B.a.aT(B.o.u(A.bC(t)),2,"0")
r=B.a.aX(B.o.u(A.bw(t)+1),2)
q=A.m(18)
p=A.H(D.aaM,B.r,2.2)
o=x.V
n=A.a([new A.ab(0,B.G,A.W(89,B.q_.l()>>>16&255,B.q_.l()>>>8&255,B.q_.l()&255),B.eP,20),new A.ab(0,B.G,A.W(102,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),B.dn,14)],o)
m=A.an(e,A.p(e,e,B.h,e,e,new A.o(A.W(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),e,e,e,e,e,B.a6),e,120,e,e,e,e,e,120),e,e,e,-20,-24,e)
l=A.m(10)
k=A.H(D.aaM,B.r,3.4)
o=A.a([new A.ab(0,B.G,A.W(166,B.q_.l()>>>16&255,B.q_.l()>>>8&255,B.q_.l()&255),B.dE,10),new A.ab(0,B.G,A.W(89,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),B.cA,6)],o)
o=A.B(A.a([A.p(e,e,B.h,e,e,new A.o(e,e,k,l,o,new A.a3(B.aw,B.aC,B.w,D.cNW,D.cqQ,e),B.n),e,42,e,e,e,e,e,56),B.b8,f.b21(a2,!0)],w),B.m,e,B.e,B.j,0,e,e)
l=A.Cl(u.a,1,B.a2,D.eKz)
k=u.b
j=u.c
i=A.Cl("Making $"+A.dx(k*j)+" Daily",1,B.a2,D.eKN)
h=A.Cl(f.aYb(k),1,B.a2,D.eEb)
r=A.B(A.a([A.D(A.v(A.a([D.eZn,A.Cl(a0.c,1,B.a2,D.aKG)],w),B.F,e,B.e,B.j,0,B.p),1),A.v(A.a([D.eZ8,A.d(s+"/"+r,e,e,e,e,e,e,D.aKG,e,e,e)],w),B.dH,e,B.e,B.j,0,B.p)],w),B.m,e,B.e,B.j,0,e,e)
s=A.p(e,e,B.h,A.W(89,D.w5.l()>>>16&255,D.w5.l()>>>8&255,D.w5.l()&255),e,e,e,1,e,e,e,e,e,e)
j=A.B(A.a([f.ao1("INVESTED","$"+A.dx(k),!0),f.ao1("DAILY ROI",B.k.aa(j*100,2)+"%",!0),f.ao1("DAYS LEFT",""+(261-u.f)+" d",!0)],w),B.m,e,B.hF,B.j,0,e,e)
k=A.dx(u.e)
u=u.f
g=261-u>0?"ACTIVE":"ENDED"
B.d.v(v,A.a([D.f4i,B.tH,A.p(e,new A.am(B.W,e,B.a9,B.q,A.a([m,A.v(A.a([o,B.P,D.eXW,B.bA,l,B.av,i,B.av,h,B.P,r,B.ar,s,B.ar,j,B.av,A.Cl("Earned $"+k+" \u2022 Clocked "+u+"/261 \u2022 "+g,1,B.a2,D.eJZ)],w),B.F,e,B.e,B.Q,0,B.p)],w),e),B.h,e,e,new A.o(e,e,p,q,n,D.bIk,B.n),e,e,e,e,B.bB,e,e,1/0),B.a3F],w))}v.push(D.eQu)
v.push(B.tH)
B.d.v(v,new A.J(a1,new C.d8b(f,a2),A.U(a1).k("J<1,r>")))
return A.cd(e,B.K,A.bq(!1,A.ci(A.v(v,B.F,e,B.e,B.j,0,B.p),B.q,e,B.z,e,new A.N(20,10,20,124+d.r.d),e,e,B.ak),!0,!1,B.aj,!0,!0),e,!1,!1,e,e)},
b21(d,e){var w=null,v=A.W(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(8),t=A.H(B.j1,B.r,1)
return A.p(w,A.B(A.a([A.V(B.agb,B.c,w,w,w,16),B.d5,A.d("TAP",w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.ex,w,w,w)},
aYb(d){var w=B.a.aT(B.o.u(B.k.U(d*100)),4,"0")
return"****  ****  ****  "+B.a.aX(w,w.length-4)},
ao1(d,e,f){var w=null,v=A.W(217,D.w5.l()>>>16&255,D.w5.l()>>>8&255,D.w5.l()&255)
v=A.d(d,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.v(A.a([v,B.bA,A.Cl(e,w,w,A.l(w,w,E.zj,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),B.F,w,B.e,B.j,0,B.p)},
cbe(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gcMn(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
o=A.a([new A.ab(0,B.G,A.W(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.PD,16),new A.ab(0,B.G,A.W(115,B.ai.l()>>>16&255,B.ai.l()>>>8&255,B.ai.l()&255),B.dn,14),new A.ab(0,B.G,A.W(51,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),B.cA,8)],p)
n=A.an(d,A.p(d,d,B.h,d,d,new A.o(d,d,d,d,d,new A.bR(B.A,0.5,B.w,d,0,A.a([A.W(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),A.W(0,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)],x.O),d,d),B.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=A.m(5)
l=A.H(B.c,B.r,2.2)
k=A.aY(4286436348)
k=A.W(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=A.W(B.k.U(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
i=A.aY(4279150057)
h=x.p
p=A.B(A.a([new A.a5(44,44,new A.am(B.W,d,B.a9,B.h,A.a([A.an(d,A.et(B.A,0.7853981633974483,A.p(d,d,B.h,d,d,new A.o(d,d,l,m,A.a([new A.ab(0.5,B.G,k,B.J,14),new A.ab(0,B.G,j,B.J,6),new A.ab(0,B.G,A.W(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new A.u(0,2),4)],p),D.bGY,B.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.dVl],h),d),d),B.b8,e.b21(b2,!0)],h),B.m,d,B.e,B.j,0,d,d)
a6=A.Cl(a6,1,B.a2,D.eB7)
i=A.Cl(e.aYb(a3),1,B.a2,D.eOY)
j=A.B(A.a([e.aXD(B.k.aa(2.86,2)+"%"),B.ez,e.aXD("261d")],h),B.m,d,B.e,B.j,0,d,d)
k=A.D(A.v(A.a([D.eRF,A.Cl("$"+A.dx(a3),1,B.a2,D.eNP)],h),B.F,d,B.e,B.j,0,B.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=A.B(A.a([k,A.d(m,d,d,d,d,d,d,D.eBS,d,d,d)],h),B.dH,d,B.e,B.j,0,d,d)
k=A.p(d,d,B.h,A.W(89,B.bt.l()>>>16&255,B.bt.l()>>>8&255,B.bt.l()&255),d,d,d,1,d,d,d,d,d,d)
l=A.B(A.a([A.D(e.av_("Daily","$"+A.dx(a4)),1),B.ez,A.D(e.av_("Total","$"+A.dx(a4*261)),1),B.ez,A.D(e.av_("Days","261"),1)],h),B.m,d,B.e,B.j,0,d,d)
g=q?d:new C.d8a(e,b3,a3,t)
f=B.k.U(127.5)
f=A.fh(d,d,B.bj,A.W(f,B.ai.l()>>>16&255,B.ai.l()>>>8&255,B.ai.l()&255),A.W(f,B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255),d,3,d,d,B.aN,d,d,d,d,new A.b6(A.m(10),D.aQh),d,d,d,d,d)
return A.p(d,new A.am(B.W,d,B.a9,B.h,A.a([n,A.v(A.a([p,B.bA,D.f_3,B.bA,a6,B.d6,i,B.h1,j,B.h1,m,B.h1,k,B.h1,l,B.P,new A.a5(1/0,40,A.i5(A.eZ(B.A,A.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.eCf,d,d,d),B.h,B.eb),g,f),d)],h),B.F,d,B.e,B.Q,0,B.p)],h),d),B.h,d,d,new A.o(d,d,w,a0,o,D.bIW,B.n),d,d,d,B.kw,D.bgh,d,d,1/0)},
aXD(d){var w=null,v=A.W(115,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(5),t=A.H(B.cp,B.r,1)
return A.p(w,A.d(d,w,w,w,w,w,w,D.eBv,w,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.DZ,w,w,w)},
av_(d,e){var w=null,v=A.W(97,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(7),t=A.H(B.aJ,B.r,1)
return A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,D.eKk,w,w,w),B.tI,A.eZ(B.a3,A.d(e,w,w,w,w,w,w,D.eMU,w,w,w),B.h,B.dq)],x.p),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.lY,w,w,w)}}
C.afS.prototype={
S(){var w=null,v=A.a([],x._),u=$.av()
return new C.auG(v,new A.ap(B.as,u),new A.ap(B.as,u),A.mb(0,w,w),new A.hR(),D.P5,C.aeI(),A.a([],x.fw),A.aZ(x.N),A.mb(0,w,w))}}
C.auG.prototype={
Z(){var w,v,u,t,s,r=this
r.a0()
w=r.a
w.toString
r.d=0
v=A.yE(0,1)
r.e!==$&&A.aO()
r.e=v
r.ay=w.f.aA
w=r.k3=A.bj(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t].a
if(s.length!==0)u.K(0,s)}r.a9H()
r.Ne()
r.anE()
r.cnA()
r.cnP()
$.aT.x1$.push(new C.cx6(r))
r.a.toString},
Ne(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ne=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.anu(),$async$Ne)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cwr(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Ne,v)},
gawA(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gNa())return!0
return!1},
gNa(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaR1(){var w,v=this.CW
if(v==null)return B.bw
w=v.bv(new A.Q(Date.now(),0,!1))
return w.a<0?B.bw:w},
bvg(){var w=this
if(w.a.c.w)return
if(w.gNa()){if(!w.cx)w.n(new C.cwh(w))}else if(w.cx)w.n(new C.cwi(w))},
ch9(){this.n(new C.cwB(this))},
t2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$t2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.n(new C.cwy(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.n(new C.cwz(t))
w=1
break}w=3
return A.b(C.c4k(o.a,s),$async$t2)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return A.b(C.c4l(t.a.c.a,s),$async$t2)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.n(new C.cwA(t,r,q))
t.cpx()
t.bvg()
if(r===3)t.WN(r)}case 1:return A.h(u,v)}})
return A.i($async$t2,v)},
WN(d){return this.bWg(d)},
bWg(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$WN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return A.b(C.bzJ(q,r,new C.cwt(t),d,s.c.a),$async$WN)
case 3:case 1:return A.h(u,v)}})
return A.i($async$WN,v)},
wu(d){return this.bwI(d)},
anE(){return this.wu(!1)},
bwI(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$wu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return A.b(A.a5W(k,C.h4M(l.d)),$async$wu)
case 3:j=m
w=4
return A.b(C.c4K(k),$async$wu)
case 4:s=j.a=f
w=5
return A.b(A.aoh(k),$async$wu)
case 5:r=f
w=!s.a&&J.ct(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.Tv(!0,l,q,p)
m.a=s
w=8
return A.b(C.anw(k,s),$async$wu)
case 8:case 7:w=9
return A.b(C.Sw(k),$async$wu)
case 9:o=f
w=10
return A.b(C.a5j(k),$async$wu)
case 10:n=f
if(t.c==null){w=1
break}t.n(new C.cwj(m,t,r,o,n))
case 1:return A.h(u,v)}})
return A.i($async$wu,v)},
Or(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Or=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Ne(),$async$Or)
case 3:s=t.c
if(s==null){w=1
break}r=A.eD(new C.cww(t),!1,null,x.H)
w=4
return A.b(A.a8(s,!1).cp(r),$async$Or)
case 4:w=5
return A.b(t.Ne(),$async$Or)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Or,v)},
crz(){this.n(new C.cwU(this))},
cnP(){var w=this,v=w.go
if(v!=null)v.a9(0)
if(w.a.c.w)return
w.go=A.dD(B.qg,new C.cwO(w))},
cpx(){var w=this,v=w.id
if(v!=null)v.a9(0)
w.id=null
if(!w.gNa()||w.CW==null)return
w.id=A.dD(B.h7,new C.cwR(w))},
cnA(){var w=this,v=w.fy
if(v!=null)v.a9(0)
w.fy=A.dD(B.j2,new C.cwN(w))
w.DX()},
DX(){return this.cpw()},
cpw(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$DX=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aA
t=4
w=7
return A.b(A.ax(),$async$DX)
case 7:q=e
p=A.aS(J.q(q.a,"app_config"))
if(p!=null&&p.length!==0){o=B.R.aE(0,p,null)
if(x.f.b(o)){m=A.C7(A.a_(o,x.N,x.z)).aA
i.a=m
r.a.f.aA=m}}w=10
return A.b(A.JB(),$async$DX)
case 10:w=e?8:9
break
case 8:w=11
return A.b(A.aMo(),$async$DX)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aA=l
w=14
return A.b(q.aq("String","app_config",B.R.al(k.ac(),null)),$async$DX)
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
break}if(i.a!==r.ay)r.n(new C.cwP(i,r))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DX,v)},
b0Z(){B.d.aZ(this.f,new C.cwM())},
a9H(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a9H=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Lm(t.a.c.a),$async$a9H)
case 3:q=e
if(t.c==null){w=1
break}s=A.a([],x._)
if(J.ct(q)){B.d.v(s,q)
B.d.aZ(s,new C.cwo())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(A.E(["role","ai","text",r,"at",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z))}t.n(new C.cwp(t,s))
t.a_o(!0)
A.bN(B.ji,new C.cwq(t),x.H)
case 1:return A.h(u,v)}})
return A.i($async$a9H,v)},
ad5(){var w=0,v=A.j(x.H),u=this
var $async$ad5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.alk(u.a.c.a,u.f),$async$ad5)
case 2:return A.h(null,v)}})
return A.i($async$ad5,v)},
bp(d){this.bC(d)},
p(){var w,v=this,u=v.fy
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
v.ok.p()
v.x.p()
u=v.e
u===$&&A.c()
u.p()
v.a2()},
a8H(d){var w,v=this
v.n(new C.cwm(v,d))
w=v.e
w===$&&A.c()
if(w.f.length!==0)w.A6(d,B.co,B.kv)
else $.aT.x1$.push(new C.cwn(v,d))
if(d===0)v.a_o(!0)
if(d===1)v.cj2(!0)},
a_o(d){$.aT.x1$.push(new C.cwE(this,d))},
awd(){return this.a_o(!1)},
ZJ(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_a(),$async$ZJ)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==B.a.i(t.a.f.r))t.n(new C.cwx(t))
case 1:return A.h(u,v)}})
return A.i($async$ZJ,v)},
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
return A.b(C.anp(a9.a,b0),$async$mt)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return A.b(q.t2(),$async$mt)
case 10:q.n(new C.cwF(q))
w=1
break
case 8:w=11
return A.b(q.t2(),$async$mt)
case 11:if(q.c!=null&&q.ch===3)q.WN(3)
case 6:case 4:q.n(new C.cwG(q,c5))
C.Sj(q.a.c.a,"user",c5)
q.awd()
t=13
a8={}
w=16
return A.b(q.ZJ(),$async$mt)
case 16:b1=B.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return A.b(A.a_a(),$async$mt)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.n(new C.cwH(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.bxR("",null)
q.n(new C.cwI(q,p))
C.Sj(q.a.c.a,"ai",p)
q.awd()
r=[1]
w=14
break}o=A.mJ(a9)
a9=q.a
n=""
m=C.h4M(a9.d)
w=C.h4F(c5)?20:21
break
case 20:w=22
return A.b(C.c4J(q.a.c.a),$async$mt)
case 22:q.db=c9
w=23
return A.b(q.wu(!0),$async$mt)
case 23:case 21:w=24
return A.b(A.a5W(q.a.c.a,m),$async$mt)
case 24:l=c9
k=C.hmr(l)
a9=k
b2=Date.now()
b3=new A.Q(b2,0,!1).bQ()
b2=B.a.aT(B.o.u(A.bC(b3)),2,"0")
b4=B.a.aT(B.o.u(A.bO(b3)),2,"0")
b5=B.a.aT(B.o.u(A.dd(b3)),2,"0")
b6=B.a.aT(B.o.u(A.fM(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+A.bw(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return A.b(C.Sw(q.a.c.a),$async$mt)
case 25:i=c9
h=C.fQc(i,25)
w=26
return A.b(C.a5j(q.a.c.a),$async$mt)
case 26:g=c9
f=C.fRQ(g)
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
return A.b(C.aeJ(a9,q.a.c.a,c5),$async$mt)
case 27:a0=c9
a1=""
if(C.h4F(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:B.a.i(b2).length!==0)===!0){b2.toString
b8=B.a.i(b2)}else{a9=a9.c
b8=B.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=A.t(d)
b4=A.t(j)
b5=q.a.c.w?"\n"+C.hIl(m)+"\n":""
b6=J.aa(n)!==0?"\n"+A.t(n)+"\n":""
b9=J.aa(a0)!==0?"\n"+A.t(a0)+"\n":""
c0=A.t(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hgQ(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+A.t(c5)
w=28
return A.b(A.qi(o,a2,B.hc,null),$async$mt)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.bxR(a8.a,a3.a)
a4=c2
a5=A.h41(a4)
c3=a5.a
a8.b=c3
if(B.d.gai(c3)){a9=A.z(C.hL3(c5),x.an)
a6=a9
J.fU(a6,C.hL4(c5))
J.fU(a6,C.hL5(c5))
J.fU(a6,A.h3u(c5))
J.fU(a6,C.hL8(c5,q.a.c.w))
a8.b=a6}c3=C.hKh(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return A.b(A.aeZ(c3,a6,m,q.a.c.a),$async$mt)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.n(new C.cwJ(a8,q,a7))
C.Sj(q.a.c.a,"ai",a7)
if(J.ct(a8.b)&&q.c!=null)q.Ip(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.n(new C.cwK(q))
C.Sj(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.n(new C.cwL(q))
q.awd()
q.ad5()
if(!q.a.c.w)q.t2()
w=r.pop()
break
case 15:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$mt,v)},
cae(d){var w=A.T(x.N,x.z)
w.m(0,"type",d.a)
w.v(0,d.b)
return w},
caf(d){var w,v,u,t,s,r,q,p=J.q(d,"phoneActions")
if(!x.j.b(p))return B.i4
w=A.a([],x.Z)
for(v=J.aV(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gT(v)
if(u.b(r)){q=A.c7Q(A.a_(r,t,s))
if(q!=null)w.push(q)}}return w},
Ip(d){return this.chD(d)},
chD(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ip=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J.aV(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gT(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return A.b(C.aeU(p,o,new C.cwC(t,p)),$async$Ip)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return A.b(A.Fn(p,null,o,!1,!0,t.a.c.a),$async$Ip)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.H(r).f
p.P(new A.b_(new A.w(m,null,null,null,null,null,null,null,null,null,null,null),B.ck,null,null,null,null,null,null,null,null,null,null,null,B.nr,!1,null,null,null,B.q,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return A.b(A.Fn(p,l.f,o,k,n,j),$async$Ip)
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
return A.b(C.aVf(p,A.a([new C.qL("out_"+1000*o,new A.Q(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$Ip)
case 14:t.anE()
case 13:p=t.c.H(r).f
p.P(new A.b_(new A.w(m,null,null,null,null,null,null,null,null,null,null,null),B.dk,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null))
w=3
break
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ip,v)},
Q7(d){return this.cq_(d)},
cq_(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Q7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return A.b(C.aeU(d,n,new C.cwT(t)),$async$Q7)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return A.b(A.Fn(d,null,n,!1,!0,t.a.c.a),$async$Q7)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.H(x.q).f.P(A.b0(null,null,null,B.ck,null,B.q,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.nr,null,null,null,null,null,null,null,null,null,null))
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
return A.b(A.Fn(d,q.f,r,p,n,o),$async$Q7)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.H(x.q).f.P(A.b0(null,null,null,B.dk,null,B.q,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Q7,v)},
cj2(d){$.aT.x1$.push(new C.cwD(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.M(d).ax.a===B.H,j=k?B.d8:B.zp,i=m.d
i===$&&A.c()
w=x.O
w=k?A.a([B.abb,D.b3s],w):A.a([B.aK,B.ri],w)
v=A.m(22)
u=A.a([new A.ab(0,B.G,A.W(71,B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255),B.cs,16)],x.V)
t=m.a.c.w?m.gc5Z():l
s=A.W(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
r=A.H(B.c2,B.r,1.5)
t=A.aH(l,A.p(l,C.fGn(m.a.f.Q,48),B.h,l,l,new A.o(s,l,r,l,l,l,B.a6),l,48,l,l,l,l,l,48),B.z,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,B.ad)
r=A.d("NGMY Helper",l,1,B.a2,l,l,l,B.dQ,l,l,l)
s=A.p(l,l,B.h,l,l,D.aSm,l,8,l,l,l,l,l,8)
if(m.gawA()&&m.d===0)q=m.gNa()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=A.p(l,A.B(A.a([t,B.bd,A.D(A.v(A.a([r,B.bA,A.B(A.a([s,B.bo,A.D(A.d(q,l,1,B.a2,l,l,l,A.l(l,l,A.W(B.k.U(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,B.cq,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),1),A.aF(l,l,l,l,B.m6,l,l,l,new C.cwZ(d),l,l,l,l,l,l)],p),B.m,l,B.e,B.j,0,l,l),B.h,l,l,new A.o(l,l,l,v,u,new A.a3(B.aw,B.aC,B.w,w,l,l),B.n),l,l,l,G.acN,D.bgX,l,l,l)
v=k?D.rj:B.c
u=A.m(14)
t=A.H(k?B.bG:B.e8,B.r,1)
u=A.p(l,A.B(A.a([m.bzl(),m.cpJ(1,B.lu,"Music")],p),B.m,l,B.e,B.j,0,l,l),B.h,l,l,new A.o(v,l,t,u,l,l,B.n),l,l,l,l,B.eh,l,l,l)
t=m.e
t===$&&A.c()
if(m.gawA()){v=A.a([],p)
if(m.gNa()){s=A.W(38,B.dk.l()>>>16&255,B.dk.l()>>>8&255,B.dk.l()&255)
r=A.m(12)
q=A.H(A.W(115,B.dk.l()>>>16&255,B.dk.l()>>>8&255,B.dk.l()&255),B.r,1)
v.push(new A.C(B.K0,A.p(l,A.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hkM(m.gaR1())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.eMm,B.L,l,l),B.h,l,l,new A.o(s,l,q,r,l,l,B.n),l,l,l,l,B.ek,l,l,1/0),l))}if(m.cy&&!m.gNa()){s=A.W(31,B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255)
r=A.m(12)
q=A.m(12)
o=A.V(B.rV,k?B.im:B.fx,l,l,l,16)
v.push(new A.C(B.K0,A.aD(!1,B.a1,!0,r,A.aI(!1,q,!0,new A.C(B.ek,A.B(A.a([o,B.bo,A.d("Back to NGMY Helper AI",l,l,l,l,l,l,A.l(l,l,k?B.im:B.fx,l,l,l,l,l,l,l,l,12,l,l,B.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),B.m,l,B.b6,B.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gch8(),l,l,l,l,l,l,l),B.h,s,0,l,l,l,l,l,B.ac),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcry():l
v.push(A.D(new C.ans(s,q,new C.cx_(),r,o,l),1))
v=A.v(v,B.m,l,B.e,B.j,0,B.p)}else v=m.bzm(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.fSI(r)
t=A.a([w,B.ab,new A.C(B.it,u,l),B.P,A.D(A.fTH(A.a([v,new C.anv(q,o,n,new C.cx0(m,d),s,l)],p),B.q,t,B.z,new C.cx1(m),l),1)],p)
if(m.d===0&&!m.gawA()){w=A.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a_k:D.ZK
w.push(new A.a5(l,36,A.hH(l,new C.cx2(m),v.length,l,l,B.b0,new C.cx3(),!1),l))}if(m.ax&&m.f.length<=1)w.push(B.P)
v=m.r
u=A.l(l,l,k?B.c:B.bg,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=A.l(l,l,k?B.aA:B.dx,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?B.x:B.c
r=A.W(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=A.m(22)
o=A.m(22)
n=k?B.ba:B.f4
u=A.D(A.aK(l,B.U,!1,l,!0,B.q,l,A.aL(),v,l,l,l,l,l,2,A.bn(l,new A.b3(4,q,B.X),l,B.zJ,l,l,l,l,!0,new A.b3(4,o,new A.ay(n,1,B.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.z,!0,l,!0,l,!1,l,B.ah,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cx4(m),l,!1,l,l,!1,l,!0,l,B.a8,l,l,l,l,l,l,l,l,l,l,l,u,!0,B.a5,l,B.am,l,B.aJA,l,l),1)
s=m.at
r=s?l:m.gck2()
w.push(A.B(A.a([u,new A.Hp(v,B.aK,l),B.bo,A.aD(!1,B.a1,!0,l,A.aI(!1,l,!0,new A.a5(44,44,s?D.dPw:P.ai4,l),B.cH,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),B.h,B.aK,0,l,l,B.cH,l,l,B.ac)],p),B.dH,l,B.e,B.j,0,l,l))
w=A.v(w,B.m,l,B.e,B.Q,0,B.p)
v=k?B.kU:B.c
t.push(A.tm(B.pP,A.p(l,new A.C(B.DM,w,l),B.h,l,l,new A.o(v,l,A.H(k?A.W(41,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.W(18,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),B.r,1),B.pP,l,l,B.n),l,l,l,l,l,l,l,l),14,!1))}return new A.Up(i,new C.cx5(m),A.cd(l,j,A.bq(!0,A.v(t,B.m,l,B.e,B.j,0,B.p),!0,!1,B.aj,!0,!0),l,!1,!1,l,l),l)},
bzl(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===0
p=this.c
p.toString
v=A.M(p).ax.a===B.H
if(w)p=A.W(B.k.U(255*(v?0.25:0.12)),B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255)
else p=B.K
u=A.m(11)
t=w?A.H(A.W(B.k.U(127.5),B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255),B.r,1):q
s=A.V(B.rX,w?B.aK:B.cV,q,q,q,17)
if(w)r=v?B.c:B.aF
else r=B.cV
return A.D(A.aH(q,A.dj(q,A.B(A.a([s,B.bo,A.d("Chat",q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.b6,B.j,0,q,q),q,q,B.b9,new A.o(p,q,t,u,q,q,B.n),B.eK,q,q,q,B.ws,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cwk(this),q,q,q,q,q,q,!1,B.ad),1)},
cpJ(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===d
p=this.c
p.toString
v=A.M(p).ax.a===B.H
if(w)p=A.W(B.k.U(255*(v?0.25:0.12)),B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255)
else p=B.K
u=A.m(11)
t=w?A.H(A.W(B.k.U(127.5),B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255),B.r,1):q
s=A.V(e,w?B.aK:B.cV,q,q,q,17)
if(w)r=v?B.c:B.aF
else r=B.cV
r=A.a([s,B.bo,A.d(f,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return A.D(A.aH(q,A.dj(q,A.B(r,B.m,q,B.b6,B.j,0,q,q),q,q,B.b9,new A.o(p,q,t,u,q,q,B.n),B.eK,q,q,q,B.ws,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cwS(this,d),q,q,q,q,q,q,!1,B.ad),1)},
bzm(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.b8a:A.W(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
w=A.m(18)
v=A.H(d?B.dw:B.aJ,B.r,1)
u=q===0?1:q
return A.p(s,A.jV(!0,s,t.ok,new C.cwl(t,e,d),u,s,B.c3,s,s,!1,!1),B.h,s,s,new A.o(r,s,v,w,s,s,B.n),s,s,s,B.it,s,s,s,s)},
aKL(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a7(d),m=J.y(n.h(d,"role"),"user"),l=m?B.i4:this.caf(d),k=m?B.m9:B.e,j=x.p,i=A.a([],j),h=!m
if(h)B.d.v(i,A.a([new A.a5(28,28,C.fGn(this.a.f.Q,28),o),B.aa],j))
w=m?B.dH:B.F
j=A.a([],j)
if(h)j.push(D.dPM)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=B.aK
else u=e?B.Uj:B.aN
t=m?16:4
s=m?4:16
if(m)r=o
else r=A.H(e?B.bG:B.aJ,B.r,1)
q=A.a([new A.ab(0,B.G,A.W(10,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),B.dE,6)],x.V)
if(f)n=A.d("typing\u2026",o,o,o,o,o,o,A.l(o,o,e?B.aA:B.dx,o,o,o,o,o,o,o,o,12,B.cx,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=B.c
else p=e?B.af:B.bj
p=A.d(n,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(A.fCv(m,A.p(o,n,B.h,o,o,new A.o(u,o,r,new A.bv(B.kN,B.kN,new A.b1(t,t),new A.b1(s,s)),q,o,B.n),o,o,o,o,Ab.Vn,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(A.h46(l,e,this.gcpZ()))
i.push(new A.dm(1,B.ci,A.v(j,w,o,B.e,B.j,0,B.p),o))
if(m)i.push(B.d5)
return new A.C(B.d9,A.B(i,B.dH,o,k,B.j,0,o,o),o)},
bzk(d,e){return this.aKL(d,e,!1)}}
C.aHw.prototype={
Z(){this.a0()
$.xQ().aJ(0,this.gDc())},
p(){$.xQ().a1(0,this.gDc())
this.a2()}}
C.aHx.prototype={
Z(){this.a0()
$.xQ().aJ(0,this.gDc())},
p(){$.xQ().a1(0,this.gDc())
this.a2()}}
C.aHy.prototype={
Z(){this.a0()
$.xQ().aJ(0,this.gDc())},
p(){$.xQ().a1(0,this.gDc())
this.a2()}}
C.aIt.prototype={
Z(){this.a0()
$.xQ().aJ(0,this.gDc())},
p(){$.xQ().a1(0,this.gDc())
this.a2()}}
C.Ue.prototype={
a3(){return"NgmySnapshotResolveOutcome."+this.b}}
C.al4.prototype={
S(){return new C.azv()}}
C.azv.prototype={
Z(){var w,v=this
v.a0()
w=v.a
v.d=w.d
v.e=A.bj(w.e,!0,x.o)
v.f=v.a.f},
ku(d){var w=null,v=this.c
if(v==null)return
v.H(x.q).f.P(A.b0(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
zk(d,e){return this.cuX(d,e)},
cuX(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$zk=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.n(new C.doF(q,e))
t=3
w=6
return A.b(d.$0(),$async$zk)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.n(new C.doG(q))
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
return A.b(A.u3(r,q),$async$zJ)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.dow(t,s))
case 1:return A.h(u,v)}})
return A.i($async$zJ,v)},
a7f(){var w=0,v=A.j(x.gE),u,t=this,s,r,q,p
var $async$a7f=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.zJ(),$async$a7f)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&A.c()
q=t.e
q===$&&A.c()
p=t.f
p===$&&A.c()
u=A.M8(s,A.It(A.bUc(r,q,s,p).eF(),null,"  "))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a7f,v)},
Vw(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Vw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oD(s,t.a.c,!1),$async$Vw)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zk(new C.dou(t),"Preparing download\u2026"),$async$Vw)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vw,v)},
WY(){var w=0,v=A.j(x.H),u,t=this,s
var $async$WY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oD(s,t.a.c,!1),$async$WY)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zk(new C.doE(t),"Creating QR code\u2026"),$async$WY)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WY,v)},
WX(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hDn(r),$async$WX)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.zk(new C.dot(t,s),"Looking up code\u2026"),$async$WX)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WX,v)},
aaw(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$aaw=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wn.c2().Kv(B.Ob,B.rQ,!0),$async$aaw)
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
case 6:u=A.Fj()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aaw,v)},
yZ(d,e,f){return this.bBE(d,e,f)},
aLZ(d,e){return this.yZ(d,!1,e)},
bBD(d){return this.yZ(d,!1,!1)},
bBE(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$yZ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(t.zJ(),$async$yZ)
case 3:if(t.c==null){w=1
break}if(!C.bUh(d,t.a.c,null)){t.ku(C.bUi(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&A.c()
s=!C.hgx(d,s)}if(s){t.ku(y.B)
w=1
break}r=d.as
q=J.cj(r)
s=t.c
s.toString
w=4
return A.b(C.hDA(s,q,t.a.c,d),$async$yZ)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=A.lv(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,B.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&A.c()
r=o}w=5
return A.b(A.qP(s,p,r,!1,null,null,d.ax),$async$yZ)
case 5:if(t.c==null){w=1
break}t.n(new C.dos(t,p,r,d))
t.ku("Restored your local Growth Income. Go back to see it updated.")
case 1:return A.h(u,v)}})
return A.i($async$yZ,v)},
aav(){var w=0,v=A.j(x.H),u=this
var $async$aav=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.zk(new C.dov(u),"Reading file\u2026"),$async$aav)
case 2:return A.h(null,v)}})
return A.i($async$aav,v)},
UR(d){return this.bCU(d)},
bCU(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$UR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&A.c()
s=new A.cZ("local_qr_dep_"+1000*r,q.a,d,B.fl,B.f6,"Admin deposit ($"+A.dx(d)+")",null,null,B.cf,new A.Q(Date.now(),0,!1))
C.c6L(t.d,s)
q=t.e
q===$&&A.c()
r=A.z(q,x.o)
r.push(s)
w=3
return A.b(A.qP(t.a.c,t.d,r,!0,null,null,null),$async$UR)
case 3:w=4
return A.b(t.zJ(),$async$UR)
case 4:if(t.c==null){w=1
break}t.ku("Deposited $"+A.dx(d)+" to your local wallet.")
case 1:return A.h(u,v)}})
return A.i($async$UR,v)},
b0p(d){var w=null
return A.cg(w,w,!0,w,new C.doC(),d,w,!0,!0,x.N)},
TZ(d){return this.bva(d)},
bva(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$TZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return A.b(t.UR(d.b),$async$TZ)
case 5:w=1
break
case 4:s=d.c
t.ku(s==null?"Could not apply deposit.":s)
case 1:return A.h(u,v)}})
return A.i($async$TZ,v)},
Dx(d){return this.ceP(d)},
ceP(d){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Dx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.zJ(),$async$Dx)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return A.b(C.aY6(d,t.a.c),$async$Dx)
case 4:s=f
if(!s.a){u=!1
w=1
break}if(s.b){t.ku("This deposit code was already used.")
u=!0
w=1
break}if(s.d){t.ku(y.y)
u=!0
w=1
break}if(s.c){t.ku(y.j)
u=!0
w=1
break}r=t.c
if(r==null){u=!0
w=1
break}w=5
return A.b(t.b0p(r),$async$Dx)
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
return A.b(C.c6E(d,o,n.a,r,p),$async$Dx)
case 7:w=6
return A.b(t.TZ(f),$async$Dx)
case 6:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Dx,v)},
Dy(d){return this.ceQ(d)},
ceQ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Dy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.zJ(),$async$Dy)
case 3:if(t.c==null){w=1
break}w=4
return A.b(C.c6D(d,t.a.c),$async$Dy)
case 4:s=f
if(!s.a){t.ku(y.m)
w=1
break}if(s.b){t.ku("This deposit code was already used.")
w=1
break}if(s.d){t.ku(y.y)
w=1
break}if(s.c){t.ku(y.j)
w=1
break}r=t.c
if(r==null){w=1
break}w=5
return A.b(t.b0p(r),$async$Dy)
case 5:q=f
if(q==null||B.a.i(q).length===0){w=1
break}r=t.a.c
p=B.a.i(q)
o=t.e
o===$&&A.c()
n=t.d
n===$&&A.c()
w=7
return A.b(C.TQ(o,n.a,d,r,p),$async$Dy)
case 7:w=6
return A.b(t.TZ(f),$async$Dy)
case 6:case 1:return A.h(u,v)}})
return A.i($async$Dy,v)},
Ns(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ns=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.BP()){t.ku("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a8(s,!1).cp(A.eD(new C.dox(),!0,null,x.N)),$async$Ns)
case 3:r=e
if(r==null||B.a.i(r).length===0){w=1
break}w=B.a.a_(B.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return A.b(t.zk(new C.doy(t,r),"Applying deposit\u2026"),$async$Ns)
case 6:w=1
break
case 5:w=7
return A.b(t.zk(new C.doz(t,r),"Loading\u2026"),$async$Ns)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ns,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=n?B.iZ:B.oU,l=n?B.c:B.M,k=n?B.aP:B.ai,j=n?B.bG:B.x.j(0.06),i=x.p
j=A.B(A.a([A.aI(!1,o,!0,A.p(B.A,A.V(B.eq,l,o,o,o,16),B.h,o,o,new A.o(j,o,o,o,o,o,B.a6),o,38,o,o,o,o,o,38),B.cH,!0,o,o,o,o,o,o,o,o,o,o,o,new C.doH(d),o,o,o,o,o,o,o)],i),B.m,o,B.e,B.j,0,o,o)
w=A.d("Backup & Restore",o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,B.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=A.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,B.cq,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=A.D(new C.Zw(D.br8,"Download",E.a_B,u?o:p.gbHZ(),o),1)
t=A.B(A.a([t,B.er,A.D(new C.Zw(B.j6,"Show QR",D.d0l,u?o:p.gbXS(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r
s=A.D(new C.Zw(D.br9,"Upload",B.a_4,u?o:p.gbXQ(),o),1)
s=A.B(A.a([s,B.er,A.D(new C.Zw(B.iN,"Scan QR",D.cEa,u?o:p.gbXR(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r?o:p.gbXP()
r=n?B.c.j(0.06):B.aS.j(0.08)
q=A.m(16)
q=A.a([A.cL(A.a([j,B.ay,w,B.P,v,B.kg,t,B.ay,s,B.ay,new C.bo7(B.qr,"Enter Code",B.Zq,u,o),B.kg,A.p(o,A.B(A.a([A.V(B.ho,B.aS,o,o,o,18),B.ax,A.D(A.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.F,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(r,o,o,q,o,o,B.n),o,o,o,o,B.iL,o,o,o)],i),o,Aa.Kf,o,o,B.ak,!1)],i)
if(p.r){j=n?B.hx:B.c
w=p.w
if(w==null)w="Working\u2026"
q.push(A.an(0,A.aD(!1,B.a1,!0,o,new A.C(B.zM,A.B(A.a([I.aIy,B.bd,A.D(A.d(w,o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.m,o,B.e,B.j,0,o,o),o),B.h,j,8,o,o,o,o,o,B.ac),o,o,0,0,o,o))}return A.cd(o,m,A.bq(!1,new A.am(B.W,o,B.a9,B.q,q,o),!0,!1,B.aj,!0,!0),o,!1,!1,o,o)}}
C.Zw.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ab(0,B.G,B.d.gaj(s).j(0.35),B.dn,16)],x.V),p=B.c.j(0.22)
return A.aD(!1,B.a1,!0,u,A.aI(!1,t,!0,A.p(v,A.v(A.a([A.p(v,A.V(w.c,B.c,v,v,v,30),B.h,v,v,new A.o(p,v,v,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.ab,A.d(w.d,v,v,v,v,v,v,B.qY,v,v,v)],x.p),B.m,v,B.b6,B.j,0,B.p),B.h,v,v,new A.o(v,v,v,r,q,new A.a3(B.aw,B.aC,B.w,s,v,v),B.n),v,140,v,v,B.c3,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.h,B.K,0,v,v,v,v,v,B.ac)}}
C.bo7.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ab(0,B.G,B.d.gaj(s).j(0.35),B.dn,16)],x.V),p=B.c.j(0.22)
return A.aD(!1,B.a1,!0,u,A.aI(!1,t,!0,A.p(v,A.B(A.a([A.p(v,A.V(w.c,B.c,v,v,v,24),B.h,v,v,new A.o(p,v,v,v,v,v,B.a6),v,44,v,v,v,v,v,44),B.er,A.d(w.d,v,v,v,v,v,v,B.qY,v,v,v)],x.p),B.m,v,B.b6,B.j,0,v,v),B.h,v,v,new A.o(v,v,v,r,q,new A.a3(B.aw,B.aC,B.w,s,v,v),B.n),v,v,v,v,D.bj3,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.h,B.K,0,v,v,v,v,v,B.ac)}}
C.Y9.prototype={
S(){return new C.bfq()}}
C.bfq.prototype={
gat3(){var w=this.e
return w===$?this.e=this.a.d:w},
Z(){var w=this
w.a0()
w.P5()
w.f=A.dD(B.nm,new C.doL(w))},
p(){var w=this.f
if(w!=null)w.a9(0)
this.a2()},
P5(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$P5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return A.b(A.u3(q.e,q.f),$async$P5)
case 3:q=e.a
s=A.bUc(q[3],q[1],t.a.e,q[4])
w=4
return A.b(A.M8(t.a.e,A.It(s.eF(),null,"  ")),$async$P5)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.n(new C.doI(t,r))
case 1:return A.h(u,v)}})
return A.i($async$P5,v)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=u?B.iZ:B.oU,s=u?B.hx:B.c,r=u?B.c:B.bg,q=A.eA(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,B.aLr,v,v,v,1,v,!0),p=A.m(24),o=A.H(B.aS.j(0.35),B.r,1),n=w.d,m=A.pl(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,B.c),l=A.d("Code: "+w.gat3(),v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=A.m(20),j=B.aS.j(0.12),i=A.m(20),h=x.p
i=A.aI(!1,k,!0,A.p(v,A.B(A.a([A.V(B.fD,B.aS,v,v,v,14),B.bo,A.d("Copy code",v,v,v,v,v,v,A.l(v,v,B.aS,v,v,v,v,v,v,v,v,12,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),B.m,v,B.e,B.Q,0,v,v),B.h,v,v,new A.o(j,v,v,i,v,v,B.n),v,v,v,v,B.lX,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.doJ(w,d),v,v,v,v,v,v,v)
return A.cd(q,t,new A.C(B.a8,A.v(A.a([A.D(A.p(v,A.v(A.a([B.P,m,B.bu,l,B.P,i,B.ay,A.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.ai,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v)],h),B.m,v,B.b6,B.j,0,B.p),B.h,v,v,new A.o(s,v,o,p,v,v,B.n),v,v,v,v,B.a8,v,v,1/0),1),B.aO,new A.a5(1/0,v,A.bL(B.yr,new C.doK(d),A.bk(B.aS,v,v,v,v,B.fQ,v,v,v,v,v,v)),v)],h),B.m,v,B.e,B.j,0,B.p),v),v,!1,!1,v,v)}}
C.Ya.prototype={
S(){return new C.bfr(A.yi(B.wl,B.n7,B.tb))}}
C.bfr.prototype={
p(){this.d.p()
this.a2()},
B(d){var w=null
return A.cd(A.eA(w,w,w,!0,!0,B.x,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.f4C,w,w,w,1,w,!0),B.x,A.yh(this.d,B.bP,new C.doM(this,d)),w,!1,!1,w,w)}}
C.ace.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.M(a0).ax.a===B.H,k=l?B.hx:B.c,j=l?B.c:B.M,i=l?B.aP:B.ai,h=l?B.ba:B.e8,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=A.m(26)
w=A.H(B.aS.j(0.35),B.r,1)
v=A.a([new A.ab(0,B.G,B.aS.j(0.16),B.jQ,36)],x.V)
u=A.p(m,D.bx8,B.h,m,m,new A.o(m,m,m,A.m(18),B.a_A,D.bGi,B.n),m,58,m,m,m,m,m,58)
t=A.d("Restore local backup?",m,m,m,m,m,m,A.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,B.u,m,m,!0,m,-0.3,m,m,m,m,m,m),B.L,m,m)
s=A.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,A.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),B.L,m,m)
r=l?B.iZ:B.oU
q=A.m(18)
p=A.H(B.aS.j(0.22),B.r,1)
o=x.p
g=A.a([new C.Oj("Account",B.a.i(this.d),i,j,m),B.T,new C.Oj("Balance","$"+A.dx(g.d),i,j,m)],o)
if(d!=null&&B.a.i(d).length!==0)B.d.v(g,A.a([B.T,new C.Oj("Investment",d,i,j,m)],o))
g.push(B.T)
g.push(new C.Oj("Saved on",""+A.bC(f)+"/"+A.bO(f)+"/"+A.bw(f),i,j,m))
g.push(B.T)
g.push(new C.Oj("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=A.p(m,A.v(g,B.F,m,B.e,B.j,0,B.p),B.h,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.c3,m,m,1/0)
r=B.aZ.j(l?0.14:0.12)
q=A.m(14)
p=A.H(B.aZ.j(0.35),B.r,1)
n=A.V(B.x4,l?B.aL:B.dl,m,m,m,16)
return A.ew(m,B.K,new A.d2(B.SJ,A.bT(new A.C(B.wE,A.v(A.a([u,B.aO,t,B.P,s,B.bu,g,B.ay,A.p(m,A.B(A.a([n,B.aa,A.D(A.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,A.l(m,m,l?B.bH:B.j_,m,m,m,m,m,m,m,m,11.5,m,m,B.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),B.F,m,B.e,B.j,0,m,m),B.h,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.ek,m,m,1/0),B.d3,A.B(A.a([A.D(A.dV(B.n_,new C.eGq(a0),A.db(m,m,m,m,m,m,m,m,m,j,m,m,B.cc,m,new A.b6(A.m(14),B.X),new A.ay(h,1,B.r,-1),m,m,m,m)),1),B.ax,A.D(A.bL(D.ePS,new C.eGr(a0),A.bk(B.aS,m,m,m,m,m,B.cc,m,new A.b6(A.m(14),B.X),m,m,m)),2)],o),B.m,m,B.e,B.j,0,m,m)],o),B.m,m,B.e,B.Q,0,B.p),m),new A.o(k,m,w,e,v,m,B.n),B.bb),m),m,m,m,B.ep,B.cZ,m,m,m)}}
C.Oj.prototype={
B(d){var w=this,v=null
return A.B(A.a([new A.a5(92,v,A.d(w.c,v,v,v,v,v,v,A.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),A.D(A.d(w.d,v,v,v,v,v,v,A.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,B.I,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.F,v,B.e,B.j,0,v,v)}}
C.Xh.prototype={
S(){return new C.awR(new A.ap(B.as,$.av()),A.k9(!0,null,!0,!0,null,null,!1))}}
C.awR.prototype={
Z(){this.a0()
$.aT.x1$.push(new C.cZl(this))},
p(){var w=this.d
w.R$=$.av()
w.O$=0
this.e.p()
this.a2()},
bXU(){var w,v=this.c
v.toString
w=B.a.i(this.d.a.a)
A.a8(v,!1).M(w)
return null},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=u?B.hx:B.c,s=u?B.c:B.M,r=u?B.aP:B.ai,q=u?B.iZ:B.oU,p=u?B.ba:B.e8,o=A.m(24),n=A.H(B.aS.j(0.35),B.r,1),m=A.a([new A.ab(0,B.G,B.aS.j(0.18),B.fF,32)],x.V),l=A.p(v,A9.aiO,B.h,v,v,new A.o(v,v,v,A.m(18),B.a_A,D.bJ5,B.n),v,56,v,v,v,v,v,56),k=A.d("Enter restore code",v,v,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,B.u,v,v,!0,v,-0.3,v,v,v,v,v,v),B.L,v,v),j=A.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),B.L,v,v),i=A.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,B.I,v,v,!0,v,8,v,v,v,v,v,v),h=A.a([new A.tG(A.ae("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bnC(new C.cZi())],x.G),g=A.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,B.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return A.ew(v,B.K,new A.d2(A1.Iq,A.bT(new A.C(B.wE,A.v(A.a([l,B.aO,k,B.P,j,B.dW,A.aK(!1,B.U,!1,v,!0,B.q,v,A.aL(),w.d,v,v,v,v,v,2,A.bn(v,v,v,B.DS,v,v,"",v,!0,new A.b3(4,A.m(16),new A.ay(p,1,B.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new A.b3(4,A.m(16),D.aQf),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.z,!0,v,!1,v,!1,w.e,B.ah,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.cZj(w),v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,i,!0,B.L,v,B.lF,v,v,v,v),B.dW,A.B(A.a([A.D(A.dV(B.n_,new C.cZk(d),A.db(v,v,v,v,v,v,v,v,v,s,v,v,B.cc,v,new A.b6(A.m(14),B.X),new A.ay(p,1,B.r,-1),v,v,v,v)),1),B.ax,A.D(A.bL(D.eTf,w.gbXT(),A.bk(B.aS,v,v,v,v,v,B.cc,v,new A.b6(A.m(14),B.X),v,v,v)),2)],f),B.m,v,B.e,B.j,0,v,v)],f),B.m,v,B.e,B.Q,0,B.p),v),new A.o(t,v,n,o,m,v,B.n),B.bb),v),v,v,v,B.Kh,B.cZ,v,v,v)}}
C.alz.prototype={
S(){return new C.bfx(B.cB)},
hk(d){return this.x.$1(d)},
bn(){return this.y.$0()}}
C.bfx.prototype={
Z(){var w,v=this
v.a0()
w=v.a
w.toString
$.rK=$.rK+1
v.r=B.o.N(B.o.D(C.fjj(w.e,w.d.y2),1,600))
w=v.a
if(!J.lb(w.d.y2,w.e))v.r=C.hIO(v.a.e)
v.w=A.dD(B.h7,new C.dv6(v))},
p(){var w=this.w
if(w!=null)w.a9(0)
this.c95()
C.aWU()
this.a2()},
c95(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:B.k.D(r.e/w,0,1)
if(v<=0)return
u=A.Pg(B.k.aa(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=B.o.u(1000*Date.now())
s=r.a
w.hk(new A.cZ(t,s.c.a,u,B.fu,B.f6,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,B.cf,new A.Q(Date.now(),0,!1)))
r.a.bn()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.u0(u,q,"Left early \xb7 +$"+B.k.aa(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
Ix(d,e){return this.ckF(d,e)},
b03(d){return this.Ix(!1,d)},
ckE(d){return this.Ix(d,"")},
ckF(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Ix=A.e(function(f,g){if(f===1)return A.f(g,v)
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
C.u0(s,null,o?"No progress":e,q,p,s,null,!1)
s=t.c
if(s==null){w=1
break}w=5
return A.b(C.bzD(s,C.bzh(),C.fJL(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$Ix)
case 5:w=1
break
case 4:n=A.Pg(B.k.aa(t.a.w*1.46*r,2))
m=r>=1
t.n(new C.duY(t,n,r))
s=B.o.u(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new A.cZ(s,p,n,B.fu,B.f6,q,null,null,B.cf,new A.Q(Date.now(),0,!1))
A.aeT(l,!0)
t.a.hk(l)
t.a.bn()
if(m)k="+$"+B.k.aa(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+B.k.aa(n,2)+" ("+B.k.U(r*100)+"% of the prize)"}q=t.a
C.u0(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return A.b(C.bzD(s,C.bzh(),C.fJL(),""+t.e+"/"+t.f,k,q,!0),$async$Ix)
case 6:w=7
return A.b(C.aeL(t.a.f,k),$async$Ix)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ix,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.r
m===$&&A.c()
w=B.o.ak(m,60)
v=B.a.aT(B.o.u(B.o.G(m,60)),2,"0")
u=A.aF(n,n,n,n,B.aiR,n,n,n,new C.dv0(d),n,n,n,n,n,n)
t=o.a
s=x.p
t=A.D(A.v(A.a([A.d(t.f,n,1,B.a2,n,n,n,B.l8,n,n,n),A.d("Win $"+B.k.aa(t.w*1.46,2)+" \xb7 stake $"+B.k.aa(o.a.w,2),n,n,n,n,n,n,D.eFF,n,n,n)],s),B.F,n,B.e,B.j,0,B.p),1)
r=o.a.c.a
m=m<=10?B.aE:B.c.j(0.1)
q=A.m(99)
q=A.B(A.a([u,t,new C.an3(r,new C.dv1(o),n),B.bo,A.dj(n,A.B(A.a([D.bBu,B.d5,A.d(""+w+":"+v,n,n,n,n,n,n,B.ki,n,n,n)],s),B.m,n,B.e,B.j,0,n,n),n,n,B.b9,new A.o(m,n,n,q,n,n,B.n),B.a1,n,n,n,B.ww,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
m=o.a
v=m.w
w=v*1.46
r=o.e/o.f
m=A.B(A.a([A.D(A.bu(A.m(99),A.mt(B.bG,n,n,9,n,r,new A.mM(B.d.gL(m.r),x.dw)),B.ao),1),B.ax,A.d(""+o.e+"/"+o.f,n,n,n,n,n,n,D.eOc,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
t=A.m(22)
u=A.a([B.d.gL(o.a.r).j(0.35),G.ab5],x.O)
p=o.x
return C.aMp(n,D.b8Y,A.bq(!0,A.v(A.a([new A.C(D.bl7,q,n),new C.LN(w*r,w,v,n),new A.C(G.adf,m,n),A.D(new A.C(B.Vd,A.bu(t,A.bT(A.e1(V.h2G(o.a.e,new V.yp(new C.dv2(o),new C.dv3(o),new C.dv4(o),o.d)),p,n),new A.o(n,n,n,n,n,new A.a3(B.aY,B.b1,B.w,u,n,n),B.n),B.bb),B.ao),n),1)],s),B.m,n,B.e,B.j,0,B.p),!0,!1,B.aj,!0,!0))}}
C.a4y.prototype={
B(d){var w=null,v=A.m(26),u=A.H(B.aZ.j(0.5),B.r,1),t=A.a([new A.ab(0,B.G,B.aZ.j(0.22),B.J,26)],x.V)
return A.ew(w,B.K,A.p(w,A.v(A.a([A.p(w,D.bvo,B.h,w,w,new A.o(B.aZ.j(0.16),w,A.H(B.aZ,B.r,2),w,w,w,B.a6),w,68,w,w,w,w,w,68),B.ay,D.f0W,B.P,A.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.P,A.d("The count starts again from zero next month.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.aO,new A.a5(1/0,w,A.bL(D.eQx,new C.c1p(d),A.bk(B.aZ,w,w,w,B.x,B.fQ,w,w,new A.b6(A.m(14),B.X),w,w,w)),w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.h,w,w,new A.o(w,w,u,v,t,D.bGW,B.n),w,w,w,w,D.bjt,w,w,w),w,w,w,B.adM,B.cZ,w,w,w)}}
C.al3.prototype={
S(){return new C.bfo(null,null)},
gX(d){return this.e}}
C.bfo.prototype={
Z(){var w,v=this,u=null
v.a0()
w=v.d=A.bi(u,B.zy,u,1,u,v)
w.d5()
w.dM$.K(0,new C.doh(v))
w=A.bi(u,B.lU,u,1,u,v)
w.cF(0)
v.e=w
w=A.bi(u,B.JJ,u,1,u,v)
w.cF(0)
v.f=w
w.d5()
w.dM$.K(0,new C.doi(v))
if(v.a.c){v.d.cF(0)
v.e.bU(0)
v.f.bU(0)}},
bp(d){var w,v,u=this
u.bC(d)
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
w.bp4()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.Oc[B.o.G(a9.r,5)]:b4
w=!b3&&b4==null?D.Oc[B.o.G(a9.w,5)]:b0
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
b3=A.a([A.e5(B.A,A.p(b0,b0,B.h,b0,b0,new A.o(b0,b0,b0,b0,A.a([new A.ab(6+e,B.G,B.aB.j(0.4+q*0.3),B.J,32+q*22),new A.ab(3,B.G,B.b7.j(0.2+p*0.25),B.J,40+p*16)],d),b0,B.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=A.p(b0,b0,B.h,b0,b0,new A.o(A.aq(B.bC,B.aL,B.o.G(a3,3)/2).j(a2),b0,b0,b0,A.a([new A.ab(0,B.G,B.aB.j(0.7),B.J,e)],d),b0,B.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(A.dP(new A.iy(A.vx(a4+a3),b0,B.A,!0,b0,a8,b0),new A.u(a6*a0+a5*b2*0.04,a7*a0)))}B.d.v(f,b3)}b3=b2*0.06
e=x.V
f.push(A.dP(A.p(b0,b0,B.h,b0,b0,new A.o(b0,b0,b0,A.m(b2*0.5),A.a([new A.ab(b2*0.02,B.G,B.x.j(0.4+b1),B.J,b2*0.14)],e),b0,B.n),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new A.u(0,n+b3)))
b1=A.di()
d=b1.a
d.$flags&2&&A.ah(d)
d[11]=0.0025
b1.mf(o)
b1.ji(k,k,k,1)
b1.jz(l)
b1.fl(m)
d=b2*0.2
a1=A.m(d)
if(a9.a.c)a2=D.cJg
else{a2=A.aq(B.c,B.kq,q*0.45)
a2.toString
a2=A.a([a2,B.bM,B.cp],x.O)}a4=A.aq(B.bI,B.aB,q*0.65)
a4.toString
a4=A.H(a4,B.r,3)
e=A.a([new A.ab(0,B.G,B.x.j(0.3),D.dMP,16)],e)
if(!a9.a.c)e.push(new A.ab(p*3,B.G,B.aB.j(0.3+q*0.4),B.J,24+p*16))
e.push(new A.ab(0,B.G,B.c.j(0.9),B.PD,0))
g=A.a([],g)
if(!a9.a.c)g.push(A.bX(0,A.bT(b0,new A.o(b0,b0,b0,A.m(d),b0,new A.a3(new A.d6(-1+Math.cos(j)*0.8,-1),new A.d6(1,1),B.w,A.a([B.c.j(0),B.c.j(0.28+p*0.25),B.c.j(0)],x.O),b0,b0),B.n),B.bb),0,0,0))
g.push(A.an(b0,A.p(b0,b0,B.h,b0,b0,new A.o(b0,b0,b0,A.m(6),b0,new A.a3(B.a3,B.a7,B.w,A.a([B.c.j(0.95),B.c.j(0)],x.O),b0,b0),B.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=A.a([new A.cK(B.x.j(0.18),B.dE,5)],x.C)
if(!a9.a.c)d.push(new A.cK(B.aB.j(0.4+q*0.35),B.J,12+p*10))
g.push(A.au(A.w5(A.d(v,b0,b0,b0,b0,b0,b0,A.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,B.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),B.b9,B.ji,b3),b0,b0,b0))
f.push(A.dP(A.fp(B.A,A.p(b0,new A.am(B.W,b0,B.a9,B.q,g,b0),B.h,b0,b0,new A.o(b0,b0,a4,a1,e,new A.a3(B.aw,B.aC,B.w,a2,b0,b0),B.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new A.u(0,n)))
return new A.a5(h,h,new A.am(B.A,b0,B.a9,B.h,f,b0),b0)}}
C.aI3.prototype={
aP(){this.aW()
this.aV()
this.dD()},
p(){var w=this,v=w.b_$
if(v!=null)v.a1(0,w.gdB())
w.b_$=null
w.a2()}}
C.LN.prototype={
B(d){var w=null,v=new C.c3n(),u=v.$3("STAKE","$"+B.k.aa(this.e,2),B.c),t=A.m(18),s=A.H(B.bq.j(0.7),B.r,1.4),r=A.a([new A.ab(0,B.G,B.aS.j(0.35),B.J,14)],x.V),q=x.p
return new A.C(B.K0,A.B(A.a([u,A.p(w,A.v(A.a([D.f_G,A.mC(new C.c3m(),w,B.b9,B.no,w,new A.bl(w,this.c,x.e7),x.gR)],q),B.m,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(w,w,s,t,r,D.ajC,B.n),w,w,w,w,B.Kc,w,w,w),v.$3("FULL WIN","$"+B.k.aa(this.d,2),B.bH)],q),B.m,w,B.e,B.j,0,w,w),w)}}
C.an3.prototype={
B(d){var w=null,v=A.m(99),u=A.H(B.jf.j(0.7),B.r,1)
return A.p(w,A.B(A.a([D.btS,B.d5,C.anT(this.d,B.oy,this.c)],x.p),B.m,w,B.e,B.Q,0,w,w),B.h,w,w,new A.o(w,w,u,v,w,D.ajC,B.n),w,w,w,w,B.Km,w,w,w)},
gdT(){return this.c}}
C.LV.prototype={
S(){return new C.bg1(null,null)}}
C.bg1.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,B.lU,null,1,null,v)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.bpE()},
aJG(d,e){var w=this.a.d,v=A.U(w).k("J<1,n>"),u=A.z(new A.J(w,C.hOJ(),v),v.k("ai.E"))
w=this.d
w===$&&A.c()
return A.c3(w,new C.dNh(this,u),null)},
B(d){var w=null
if(this.a.e)return A.cd(w,D.aaw,A.bq(!0,this.aJG(0,d),!0,!1,B.aj,!0,!0),w,!1,!1,w,w)
return this.aJG(0,d)},
atE(d,e,f){var w=null,v=f.j(0.16),u=A.m(10)
return A.B(A.a([A.p(w,A.V(d,f,w,w,w,17),B.h,w,w,new A.o(v,w,w,u,w,w,B.n),w,32,w,w,w,w,w,32),B.ax,A.D(A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.aIC.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
C.ab4.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=A.aG(d,B.e3,o).w.r.d,m=this.c,l=J.cA(m),k=l.eE(m,new C.dNk()).gJ(0),j=new A.e3(l.di(m,new C.dNl(),x.cD),x.bG).cG(0,0,new C.dNm())
o=A.aG(d,B.bR,o).w
w=x.p
v=A.a([B.T,A.p(p,p,B.h,p,p,new A.o(B.ba,p,p,A.m(2),p,p,B.n),p,4,p,p,p,p,p,42),new A.C(B.adt,A.B(A.a([A.p(p,D.bDP,B.h,p,p,new A.o(p,p,p,A.m(14),A.a([new A.ab(0,B.G,B.fc.j(0.45),B.J,14)],x.V),D.ajw,B.n),p,44,p,p,p,p,p,44),B.bd,D.bn9,A.aF(p,p,p,p,B.l2,p,p,p,new C.dNn(d),p,p,p,p,p,p)],w),B.m,p,B.e,B.j,0,p,p),p)],w)
if(l.gci(m)){u=C.fER("GAMES",""+l.gJ(m),B.ew)
t=C.fER("WON",""+k,B.jf)
s=j>=0
r=s?"+":"-"
q=C.bw6(j)
s=s?B.jf:B.fj
v.push(new A.C(D.bhH,A.B(A.a([u,B.aa,t,B.aa,C.fER("NET",r+q,s)],w),B.m,p,B.e,B.j,0,p,p),p))}if(l.gai(m))v.push(new A.C(new A.N(24,36,24,24+n),A.v(A.a([A.V(D.bpU,B.c.j(0.35),p,p,p,52),B.ab,A.d("No game receipts yet",p,p,p,p,p,p,A.l(p,p,B.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.ar,A.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,A.l(p,p,B.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),B.L,p,p)],w),B.m,p,B.e,B.j,0,B.p),p))
else v.push(new A.dm(1,B.ci,A.hH(p,new C.dNo(this),l.gJ(m),new A.N(14,2,14,16+n),p,B.ak,new C.dNp(),!1),p))
return A.p(p,A.v(v,B.m,p,B.e,B.Q,0,B.p),B.h,p,new A.aX(0,1/0,0,o.a.b*0.88),D.aT0,p,p,p,p,p,p,p,p)}}
C.ab3.prototype={
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
t=s}if(w)r=B.cF
else if(u)r=B.dB
else{w=v?B.aL:B.bq
r=w}q=h.gbba()
w=new C.dNj()
s=A.m(14)
p=A.a([r.j(0.13),D.b86],x.O)
o=A.H(r.j(0.4),B.r,1)
n=A.V(g?B.m1:B.ct,r,i,i,i,16)
m=A.D(A.d(h.b,i,1,B.a2,i,i,i,B.vo,i,i,i),1)
l=r.j(0.2)
k=A.m(99)
k=A.p(i,A.d(t,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,B.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),B.h,i,i,new A.o(l,i,i,k,i,i,B.n),i,i,i,i,D.bl2,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bw6(q)}else{l=g?"+":"-"
l+=C.bw6(h.d)}j=x.p
l=A.B(A.a([n,B.bo,m,k,B.bo,A.d(l,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.m,i,B.e,B.j,0,i,i)
k=C.dNi("STAKE",w.$1(h.w),B.c)
w=A.B(A.a([k,B.d5,C.dNi("PAID",C.bw6(g?h.d:0),r),B.d5,C.dNi("BEFORE",w.$1(h.x),B.ew),B.d5,C.dNi("AFTER",w.$1(h.y),B.dB)],j),B.m,i,B.e,B.j,0,i,i)
n=C.hKl(h.f)
h=B.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return A.p(i,A.v(A.a([l,B.ar,w,B.av,A.d(n+h,i,1,B.a2,i,i,i,A.l(i,i,B.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.ag,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(i,i,o,s,i,new A.a3(B.aw,B.aC,B.w,p,i,i),B.n),i,i,i,i,B.lp,i,i,i)}}
C.axt.prototype={
S(){return new C.bbL(B.cB,null,null)}}
C.bbL.prototype={
Z(){var w,v,u,t=this
t.a0()
w=A.bi(null,B.mz,null,1,null,t)
w.cF(0)
t.d=w
v=J.e_(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.abt(40+w.ae()*260,-20+w.ae()*40,1.5+w.ae()*3,w.ae()*3.141592653589793,0.7+w.ae()*0.3,12+w.ae()*16,[X.a0A,B.qE,B.cO,B.c][w.aB(4)],[B.hW,B.kZ,B.dP,B.Ed][w.aB(4)])
t.f=v},
p(){var w=this.d
w===$&&A.c()
w.p()
this.boz()},
B(d){var w=null,v=this.d
v===$&&A.c()
return A.au(A.aD(!1,B.a1,!0,w,A.c3(v,new C.d52(this,d),w),B.h,B.K,0,w,w,w,w,w,B.ac),w,w,w)}}
C.abt.prototype={
gX(d){return this.f}}
C.aHz.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
C.aXH.prototype={
B(d){return new A.tQ(new C.c5E(this),null,new A.h4(A.a([$.xQ(),$.a0L()],x.U)),null)},
gdT(){return this.c}}
C.Lp.prototype={
c3d(){if(this.c!=null)this.n(new C.bVw())}}
C.Ha.prototype={}
C.amw.prototype={
S(){return new C.aAg(B.cB,new A.ap(B.as,$.av()))},
cwv(){return this.d.$0()},
cHG(){return this.f.$0()},
cHu(d,e){return this.r.$2(d,e)},
cIi(d,e,f){return this.w.$3$bonus(d,e,f)},
gdT(){return this.c}}
C.aAg.prototype={
p(){var w=this.e
w.R$=$.av()
w.O$=0
this.a2()},
apH(){var w=A.d9(B.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
zL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$zL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.apH()
if(s<2){t.atF("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cwv()<s){t.atF("Insufficient balance.")
w=1
break}if(!t.a.cHu(s,"Dice Roll bet")){t.atF("Could not place bet.")
w=1
break}t.a.toString
t.n(new C.dGt(t))}w=3
return A.b(C.c2y(t.a.e),$async$zL)
case 3:r=t.a
q=C.hMp(r.e,r.c,t.d)
t.a.cHG()
A.aWh(t.a.e)
t.n(new C.dGu(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return A.b(A.bN(new A.b8(1000*(40+p*6)),null,r),$async$zL)
case 7:if(t.c==null){w=1
break}new C.dGv(t).$0()
t.c.e3()
case 5:++p
w=4
break
case 6:w=8
return A.b(A.bN(B.jj,null,r),$async$zL)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.fIz(q)
t.n(new C.dGw(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cIi(m,"Dice Roll "+n,o)
t.n(new C.dGx(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+B.k.aa(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(m,2)+" added to your balance"
w=12
return A.b(C.bzD(r,C.bzh(),new C.dGy(t),n,k,"YOU WIN!",!0),$async$zL)
case 12:w=13
return A.b(C.aeL("Dice Roll",l?"+$"+B.k.aa(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(m,2)+" added to your balance"),$async$zL)
case 13:w=10
break
case 11:w=14
return A.b(C.bzD(r,C.bzh(),new C.dGz(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$zL)
case 14:C.u0(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return A.h(u,v)}})
return A.i($async$zL,v)},
atF(d){var w=null,v=this.c
if(v==null)return
v.H(x.q).f.P(A.b0(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.apH(),d=x.w,a0=A.aG(a2,B.e3,d).w,a1=Math.min(A.aG(a2,B.bR,d).w.a.a*0.44,200)
d=A.hh(Q.ahZ,D.f6k,new C.dGC(a2),f)
w=A.m(20)
v=g.a
u=v.c
t=x.p
w=A.B(A.a([d,B.b8,A.p(f,A.B(A.a([B.ahW,B.bo,C.anT(v.d,B.jU,u)],t),B.m,f,B.e,B.Q,0,f,f),B.h,f,f,new A.o(B.cO,f,f,w,f,f,B.n),f,f,f,f,B.lq,f,f,f)],t),B.m,f,B.e,B.j,0,f,f)
u=g.z
v=A.W(140,D.Ul.l()>>>16&255,D.Ul.l()>>>8&255,D.Ul.l()&255)
d=A.m(18)
s=A.H(A.W(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
r=g.x
d=A.D(A.p(f,A.au(new C.al3(r,r?g.w:g.r,a1,f),f,f,f),B.h,f,f,new A.o(v,f,s,d,f,f,B.n),f,f,f,f,f,f,f,1/0),1)
v=A.d("Roll lands on one of:",f,f,f,f,f,f,A.l(f,f,B.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,B.a4,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=A.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.Oc[q]
o=C.fIz(p)
n=p>0?B.bm:B.aE
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new A.b1(10,10)
i=m?B.c:n.j(0.7)
h=new A.ay(i,m?2.5:1.2,B.r,-1)
n=m?A.a([new A.ab(1,B.G,n.j(0.65),B.J,14)],r):B.a_w
m=m?18:15
s.push(new A.bH(1,B.br,new A.C(B.jH,A.p(B.A,new A.w(o,f,new A.F(!0,B.c,f,f,f,f,m,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f),B.h,f,f,new A.o(k,f,new A.c1(h,h,h,h),new A.bv(j,j,j,j),n,f,B.n),f,l,f,f,f,f,f,f),f),f))}d=A.a([d,B.ab,v,B.ar,A.B(s,B.m,f,B.e,B.j,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.fIz(v)
s=g.r
s.toString
d.push(new A.C(B.ky,A.d("Landed on "+v,f,f,f,f,f,f,A.l(f,f,s>0?B.bh:B.cF,f,f,f,f,f,f,f,f,20,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(B.T)
d.push(new A.bI(B.a3,f,f,A.d("Bet Amount",f,f,f,f,f,f,A.l(f,f,A.W(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,B.I,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(B.ar)
v=x.bL
v=A.z(new A.J(A.a([2,5,10,25],x.n),new C.dGD(g),v),v.k("ai.E"))
s=g.y
r=A.W(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v.push(A.D(new A.C(B.VS,A.aK(f,B.U,!1,f,!0,B.q,f,A.aL(),g.e,f,f,f,f,f,2,A.bn(f,new A.b3(4,A.m(10),B.X),f,B.jG,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,B.l9,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),B.z,!0,f,!0,!s,!1,f,B.ah,f,f,f,f,f,B.dN,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,B.a8,f,f,f,f,f,f,f,f,f,f,f,B.hf,!0,B.L,f,B.am,f,f,f,f),f),1))
d.push(A.B(v,B.m,f,B.e,B.j,0,f,f))
d.push(B.P)
d.push(new A.bI(B.a7,f,f,A.d("Perfect Score Profit: +$"+B.k.aa(g.apH()*0.46,2),f,f,f,f,f,f,D.eHA,f,f,f),f))
d.push(B.T)
d=A.D(new A.C(B.it,A.v(d,B.ag,f,B.e,B.j,0,B.p),f),1)
v=g.x?f:g.gchp()
s=A.fh(f,f,B.aB,f,f,f,f,f,f,B.c,f,f,f,f,new A.b6(A.m(14),B.X),f,f,f,f,f)
return C.aMp(f,D.Ur,A.bq(!0,A.v(A.a([new A.C(D.bls,w,f),new C.LN(u,e*1.46,e,f),A.D(A.v(A.a([d,new A.C(new A.N(14,4,14,8+a0.r.d),new A.a5(1/0,52,A.i5(A.d("\ud83c\udfb2 ROLL ($"+B.k.aa(e,2)+")",f,f,f,f,f,f,B.kO,f,f,f),v,s),f),f)],t),B.m,f,B.e,B.j,0,B.p),1)],t),B.m,f,B.e,B.j,0,B.p),!0,!1,B.aj,!0,!0))}}
C.an9.prototype={
S(){return new C.aAx(B.kc,new A.ap(B.as,$.av()))},
cHm(d){return this.e.$1(d)}}
C.aAx.prototype={
gaow(){var w,v=this.r
if(v===$){w=B.o.u(1e4+B.cB.aB(89999))
this.r!==$&&A.bJ()
this.r=w
v=w}return v},
gOy(){var w=this.d,v=this.a
return w===B.kc?B.a.i(v.f.a):B.a.i(v.f.b)},
ga6y(){var w=this.gOy(),v=A.ae("^\\$+",!0,!1,!1,!1),u=B.a.i(A.aJ(w,v,""))
return u.length===0?"":"$"+u},
p(){var w=this.e
w.R$=$.av()
w.O$=0
this.a2()},
Ht(d,e){return this.bC3(d,e)},
bC3(d,e){var w=0,v=A.j(x.H),u=this,t
var $async$Ht=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.fE(new A.fx(d)),$async$Ht)
case 2:A.eH()
t=u.c
if(t!=null)t.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$Ht,v)},
Ot(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Ot=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gOy().length===0){r.c.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}A.j8()
o=B.k.aa(r.a.d,2)
q=r.d===B.kc?A.cr("https://cash.app/"+r.ga6y()+"/"+o,0,null):A.cr("bitcoin:"+r.gOy(),0,null)
t=4
w=7
return A.b(A.iK(q,B.fg,null),$async$Ot)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===B.kc?r.ga6y():r.gOy()
w=10
return A.b(r.Ht(n,r.d===B.kc?"Cash App tag":"Bitcoin address"),$async$Ot)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===B.kc?r.ga6y():r.gOy()
w=11
return A.b(r.Ht(n,r.d===B.kc?"Cash App tag":"Bitcoin address"),$async$Ot)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ot,v)},
Z8(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Z8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hR().bbT(B.ey),$async$Z8)
case 3:r=e
if(r==null){w=1
break}w=4
return A.b(r.f7(),$async$Z8)
case 4:s=e
t.n(new C.dNH(t,B.a.c7(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return A.h(u,v)}})
return A.i($async$Z8,v)},
c_E(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===B.kc?C.h3X(s.a):B.a.i(s.a)
if(r.length===0){t=v.d===B.kc?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.H(x.q).f.P(A.b0(u,u,u,u,u,B.q,u,A.d(t,u,u,u,u,u,u,u,u,u,u),u,B.S,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.H(x.q).f.P(A.b0(u,u,u,u,u,B.q,u,A.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,B.S,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new A.Q(Date.now(),0,!1).u(0)
w=v.a
t.cHm(new A.cZ(s,w.c.a,w.d,B.fl,v.d,r,v.f,v.gaow(),B.dp,new A.Q(Date.now(),0,!1)))
w=v.c
w.toString
A.iG(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.eA(o,o,o,!0,!0,B.z6,o,1,!0,o,0,!1,o,!1,B.c,o,A.aF(o,o,o,o,B.F_,o,o,o,new C.dNI(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.eS2,o,o,o,1,o,!0),m=A.m(26),l=A.H(D.eD.j(0.25),B.r,1),k=x.V,j=A.a([new A.ab(0,B.G,B.aW.j(0.25),B.eP,24)],k),i=x.p
j=A.p(o,A.v(A.a([A.d("YOU'RE ADDING",o,o,o,o,o,o,A.l(o,o,B.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,B.I,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),B.ar,A.eZ(B.A,A.d("$"+A.dx(p.a.d),o,o,o,o,o,o,D.eC7,o,o,o),B.h,B.dq),B.ar,A.d("to your Growth Income wallet",o,o,o,o,o,o,A.l(o,o,D.eD.j(0.85),o,o,o,o,o,o,o,o,12,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(o,o,l,m,j,D.bJU,B.n),o,o,o,o,D.bj7,o,o,o)
m=p.bWH()
l=p.axf(1,"Send the money to NGMY Pay",p.c_C())
w=p.axf(2,"Put this code in the payment note",p.bAG())
v=p.d===B.kc
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=A.l(o,o,B.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.axf(3,u,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.e,o,o,o,o,o,2,A.bn(o,o,o,o,o,o,o,o,!0,new A.b3(4,A.m(18),new A.ay(B.c.j(0.08),1,B.r,-1)),o,o,o,o,o,B.rv,!0,o,o,o,o,new A.b3(4,A.m(18),D.aQa),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.eDr,t,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.ah,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,B.qY,!0,B.a5,o,B.am,o,o,o,o))
r=p.f!=null
v=r?8:22
u=A.m(20)
s=r?D.eD:B.c
s=A.H(s.j(r?0.5:0.12),B.r,1.4)
q=r?A.v(A.a([A.bu(A.m(14),new A.d2(D.aRy,new A.Dq(p.f,o),o),B.ao),B.P,D.eoH,B.av],i),B.m,o,B.e,B.j,0,B.p):A.v(A.a([A.p(o,D.bD2,B.h,o,o,new A.o(D.eD.j(0.12),o,o,o,o,o,B.a6),o,54,o,o,o,o,o,54),B.T,D.eWT,B.d6,A.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p)
v=p.b1q(4,"Screenshot of your payment",A.aH(o,A.p(o,q,B.h,o,o,new A.o(B.rv,o,s,u,o,o,B.n),o,o,o,o,new A.N(v,v,v,v),o,o,o),B.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcaV(),o,o,o,o,o,o,!1,B.ad),!0)
u=A.d(p.a.r,o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,1.4,!0,o,o,o,o,o,o,o,o),B.L,o,o)
s=A.m(18)
k=A.a([new A.ab(0,B.G,B.aW.j(0.45),B.dn,18)],k)
return A.cd(n,B.z6,A.au(new A.d2(B.a77,A.cL(A.a([j,B.bu,m,B.bu,l,w,t,v,B.ar,u,B.aO,new A.a5(o,56,A.bT(A.lg(D.bBK,D.f5E,p.gc_D(),A.fh(o,o,B.K,o,o,o,o,o,o,B.c,o,o,o,B.K,new A.b6(A.m(18),B.X),o,o,o,o,o)),new A.o(o,o,o,s,k,D.bIu,B.n),B.bb),o)],i),o,D.biC,o,o,B.ak,!1),o),o,o,o),o,!1,!1,o,o)},
bWH(){var w=null,v=new C.dND(this),u=A.m(18),t=A.H(B.c.j(0.06),B.r,1)
return A.p(w,A.B(A.a([v.$3(B.kc,B.hT,"Cash App"),B.ez,v.$3(B.a21,D.ahG,"Bitcoin")],x.p),B.m,w,B.e,B.j,0,w,w),B.h,w,w,new A.o(B.rv,w,t,u,w,w,B.n),w,w,w,w,B.lY,w,w,w)},
b1q(d,e,f,g){var w,v=null,u=x.p,t=A.a([A.p(B.A,A.d(""+d,v,v,v,v,v,v,D.eIh,v,v,v),B.h,v,v,D.aSh,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(A.D(A.p(v,v,B.h,D.eD.j(0.18),v,v,v,v,v,B.wu,v,v,v,2),1))
t=A.v(t,B.m,v,B.e,B.j,0,B.p)
w=g?12:20
return new A.KY(A.B(A.a([new A.a5(34,v,t,v),B.ax,A.D(new A.C(new A.N(0,0,0,w),A.v(A.a([new A.C(B.Va,A.d(e,v,v,v,v,v,v,A3.a4k,v,v,v),v),f],u),B.ag,v,B.e,B.j,0,B.p),v),1)],u),B.ag,v,B.e,B.j,0,v,v),v)},
axf(d,e,f){return this.b1q(d,e,f,!1)},
c_C(){var w,v,u,t,s=this,r=null,q=s.d===B.kc?s.ga6y():s.gOy(),p=A.m(20),o=A.m(20),n=s.d===B.kc,m=n?D.bHn:D.bJe,l=A.a([new A.ab(0,B.G,(n?D.aaL:D.TC).j(0.35),B.cs,16)],x.V),k=A.m(12)
n=s.d===B.kc
w=n?B.hT:D.ahG
k=A.p(r,A.V(w,n?D.aaL:D.TC,r,r,r,30),B.h,r,r,new A.o(B.c,r,r,k,r,r,B.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=A.d(n,r,r,r,r,r,r,A.l(r,r,B.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===B.kc
t=u?22:13
v=A.d(v,r,1,B.a2,r,r,r,A.l(r,r,B.c,r,r,r,r,r,r,r,r,t,r,r,B.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=A.D(A.v(A.a([n,B.bA,v,B.av,A.B(A.a([D.byE,B.d5,A.d(s.d===B.kc?"Tap to pay $"+A.dx(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,B.tN,r,r,r)],u),B.m,r,B.e,B.j,0,r,r)],u),B.F,r,B.e,B.j,0,B.p),1)
return A.aD(!1,B.a1,!0,r,A.aI(!1,p,!0,A.eq(A.B(A.a([k,B.bd,v,A.aF(r,r,r,r,D.bxJ,r,r,r,w?r:new C.dNG(s,q),r,r,r,r,"Copy",r)],u),B.m,r,B.e,B.j,0,r,r),r,new A.o(r,r,r,o,l,m,B.n),r,B.ad9,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gc6h(),r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac)},
bAG(){var w,v,u,t,s,r,q,p,o=null,n=A.m(20),m=A.H(B.b3.j(0.35),B.r,1),l=x.p,k=A.a([],l)
for(w=this.gaow().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new A.b1(12,12)
q=A.a([B.b3.j(0.28),B.b3.j(0.08)],u)
p=new A.ay(B.ew.j(0.4),1,B.r,-1)
k.push(A.p(B.A,new A.w(s,o,B.C3,o,o,o,o,o,o,o,o,o),B.h,o,o,new A.o(o,o,new A.c1(p,p,p,p),new A.bv(r,r,r,r),o,new A.a3(B.aY,B.b1,B.w,q,o,o),B.n),o,52,o,B.jH,o,o,o,42))}return A.p(o,A.v(A.a([A.B(k,B.m,o,B.b6,B.j,0,o,o),B.ab,A.B(A.a([A.D(A.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,A.l(o,o,B.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aa,A.hh(B.Yw,D.f7m,new C.dNC(this),A.fo(o,o,o,o,o,o,o,o,o,o,o,B.ew,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),B.m,o,B.e,B.j,0,o,o)],l),B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(B.rv,o,m,n,o,o,B.n),o,o,o,o,B.bB,o,o,o)}}
C.qK.prototype={
ac(){var w=this
return A.E(["id",w.a,"title",w.b,"start",w.c.ab(),"end",w.d.ab(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.qL.prototype={
ac(){var w=this
return A.E(["id",w.a,"when",w.b.ab(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gTy(){var w=this,v=A.a([],x.s),u=w.d
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
u=w.c
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
v.push(C.fQb(w.b))
u=w.e
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
return B.d.aF(v," \xb7 ")},
gkl(d){return this.c}}
C.ln.prototype={
ac(){var w,v=this,u=A.T(x.N,x.z)
u.m(0,"type",v.a)
w=v.b
if(w.length!==0)u.m(0,"content",w)
w=v.c
if(w!=null&&w.length!==0)u.m(0,"url",w)
w=v.d
if(w!=null&&w.length!==0)u.m(0,"label",w)
return u}}
C.i9.prototype={
ac(){var w,v=this,u=A.T(x.N,x.z)
u.m(0,"id",v.a)
u.m(0,"question",v.b)
w=J.b4(v.c,new C.c4D(),x.P)
w=A.z(w,w.$ti.k("ai.E"))
u.m(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.m(0,"thumbnailPath",w)
u.m(0,"printable",v.e)
u.m(0,"sortOrder",v.f)
return u}}
C.hW.prototype={
ahV(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.hW(v,u,t,s,r,h==null?w.f:h)},
b6I(d){var w=null
return this.ahV(w,w,w,w,d,w)},
cA5(d,e,f){return this.ahV(d,e,null,null,null,f)},
b6H(d){var w=null
return this.ahV(w,w,w,d,w,w)},
czL(d,e){var w=null
return this.ahV(w,w,d,w,e,w)},
ac(){var w=this,v=C.hyh(w.c),u=w.e,t=A.U(u).k("J<1,a1<n,@>>")
u=A.z(new A.J(u,new C.c4B(),t),t.k("ai.E"))
return A.E(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.b5r.prototype={}
C.Tt.prototype={
S(){return new C.aAJ(new A.ap(B.as,$.av()),A.mb(0,null,null),A.a([],x.m))},
S8(d){return this.d.$1(d)}}
C.aAJ.prototype={
Z(){var w,v=this
v.a0()
w=J.b4(v.a.c,new C.dRm(),x.i)
w=A.z(w,w.$ti.k("ai.E"))
B.d.aZ(w,new C.dRn())
v.d=w
v.HD()},
p(){var w=this.w
w.R$=$.av()
w.O$=0
this.x.p()
this.a2()},
abk(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$abk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.HD()
u.n(new C.dRg(u))
t=u.a
t.toString
s=u.d
s===$&&A.c()
w=2
return A.b(t.S8(s),$async$abk)
case 2:r=e
if(u.c!=null){u.n(new C.dRh(u))
t=u.c.H(x.q).f
s=A.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.P(A.b0(null,null,null,r?B.dk:B.aE,null,B.q,null,s,null,B.S,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$abk,v)},
a5L(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a5L=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&A.c()
s=new C.hW(q,"New Category",B.Ew,4284773515,D.as1,p.length)
t.n(new C.dR_(t,s))
t.HD()
p=t.c
if(p==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.dR0(s),p,null,!0,!0,x.i),$async$a5L)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.dR1(t,q,r))
case 1:return A.h(u,v)}})
return A.i($async$a5L,v)},
a_5(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a_5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=B.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.n(new C.dRd(t,p))
q.bJ(0,B.c0)
q=t.a.e
s=t.d
s===$&&A.c()
w=3
return A.b(C.c4y(p,q,s),$async$a_5)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.dRe(t,r))
$.aT.x1$.push(new C.dRf(t))
case 1:return A.h(u,v)}})
return A.i($async$a_5,v)},
a7H(d){return this.bGA(d)},
bGA(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a7H=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&A.c()
t=r[d]
r=u.c
r.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.dR7(t),r,null,!0,!0,x.i),$async$a7H)
case 2:s=f
if(s!=null)u.n(new C.dR8(u,d,s))
return A.h(null,v)}})
return A.i($async$a7H,v)},
bEs(d){this.n(new C.dR6(this,d))
this.HD()},
HD(){var w,v,u=this.d
u===$&&A.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].b6I(v)},
c3J(d,e){var w={}
w.a=e
this.n(new C.dRc(w,this,d))},
WE(d){return this.bVC(d)},
bVC(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$WE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=A.eD(new C.dRb(u,d),!1,null,x.H)
w=2
return A.b(A.a8(s,!1).cp(t),$async$WE)
case 2:return A.h(null,v)}})
return A.i($async$WE,v)},
bwZ(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?A.a([B.fw,B.bj],l):A.a([B.pX,B.ev],l)
w=A.m(16)
v=A.H(m?B.da.j(0.35):B.dB,B.r,1)
u=A.V(B.dP,m?B.dB:B.e4,n,n,n,n)
t=A.D(A.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,A.l(n,n,m?B.aN:B.M,n,n,n,n,n,n,n,n,n,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.WW:A8.KH
r=x.p
s=A.a([A.aI(!1,n,!0,A.B(A.a([u,B.aa,t,A.V(s,m?B.bI:B.ai,n,n,n,n)],r),B.m,n,B.e,B.j,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dR3(o),n,n,n,n,n,n,n)],r)
if(o.r){u=A.a([B.T],r)
t=o.y
if(t.length!==0){q=(m?D.rj:B.c).j(0.65)
p=A.m(12)
u.push(A.p(n,A.jV(!0,n,o.x,new C.dR4(o,d),t.length,n,n,n,n,!1,!1),B.h,n,B.a72,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.ch,n,n,n))}u.push(B.P)
t=o.w
q=A.l(n,n,m?B.aN:B.M,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=A.l(n,n,m?B.bI:B.ai,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?B.bj:B.aN
q=A.D(A.aK(n,B.U,!1,n,!0,B.q,n,A.aL(),t,n,n,n,n,n,2,A.bn(n,new A.b3(4,A.m(14),B.X),n,B.eM,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.ah,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.dR5(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,q,!0,B.a5,n,B.am,n,n,n,n),1)
m=o.f?n:o.gchC()
p=A.bk(B.bk,n,n,n,n,n,B.iL,n,n,n,n,n)
u.push(A.B(A.a([q,new A.Hp(t,B.bk,n),B.d5,A.bL(o.f?B.py:D.ahP,m,p)],r),B.dH,n,B.e,B.j,0,n,n))
B.d.v(s,u)}return A.dj(n,A.v(s,B.ag,n,B.e,B.j,0,B.p),n,n,B.b9,new A.o(n,n,v,w,n,new A.a3(B.a3,B.a7,B.w,l,n,n),B.n),B.io,n,n,B.DO,B.bB,n,n,n)},
B(d){var w,v=this,u=null,t=A.M(d).ax.a===B.H,s=new C.b5r(t),r=t?B.d8:B.bM,q=t?B.d8:u,p=t?B.aN:B.M,o=A.d("Help Topics Admin",u,u,u,u,u,u,A.l(u,u,t?B.aN:B.M,u,u,u,u,u,u,u,u,u,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gc_I()
if(n)n=B.Qy
else n=A.V(B.wY,t?B.aN:B.M,u,u,u,u)
w=x.p
o=A.eA(A.a([A.hh(n,A.d("Save",u,u,u,u,u,u,A.l(u,u,t?B.aN:B.M,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=R.aRo(B.aK,u,O.SU,B.nz,D.f46,v.gbtr())
q=v.bwZ(s)
n=A.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,A.l(u,u,t?B.bI:B.ai,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&A.c()
return A.cd(o,r,A.v(A.a([q,new A.C(B.DO,n,u),A.D(H.fUy(!1,new C.dRl(v,s),m.length,v.gc3I(),D.bhs,u,!1),1)],w),B.ag,u,B.e,B.j,0,B.p),u,!1,!1,p,u)}}
C.NM.prototype={
S(){return new C.b7f()}}
C.b7f.prototype={
Z(){var w,v=this
v.a0()
w=v.a.c
v.d=new A.ap(new A.bc(w.b,B.b2,B.aM),$.av())
v.e=w.c
v.f=w.d},
p(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=r?D.rj:B.c,p=A.d("Edit category",s,s,s,s,s,s,A.l(s,s,r?B.c:B.bg,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&A.c()
o=A.aK(s,B.U,!1,s,!0,B.q,s,A.aL(),o,s,s,s,s,s,2,D.bEJ,B.z,!0,s,!0,s,!1,s,B.ah,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,A.l(s,s,r?B.c:B.bg,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,B.a5,s,B.am,s,s,s,s)
w=x.aS
w=A.z(new A.J(D.bKf,new C.cFx(t),w),w.k("ai.E"))
w=A.c8(B.bJ,w,B.bx,8,8)
v=x.gN
v=A.z(new A.J(D.cGB,new C.cFy(t),v),v.k("ai.E"))
u=x.p
v=A.ci(A.v(A.a([o,B.ab,w,B.ab,A.c8(B.bJ,v,B.bx,0,8)],u),B.m,s,B.e,B.Q,0,B.p),B.q,s,B.z,s,s,s,s,B.ak)
return A.eo(A.a([A.bK(!1,B.df,s,s,!0,s,s,new C.cFz(d),s,s),A.bL(B.pE,new C.cFA(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.YX.prototype={
S(){return new C.aCC()},
o5(d){return this.d.$1(d)}}
C.aCC.prototype={
Z(){this.a0()
this.d=A.bj(this.a.c.e,!0,x.u)},
atH(){var w=this.a,v=w.c,u=this.d
u===$&&A.c()
return w.o5(v.b6H(u))},
a5N(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a5N=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&A.c()
w=2
return A.b(u.aWr(new C.i9("q_"+1000*s,"",D.cFf,null,!1,r.length)),$async$a5N)
case 2:t=e
if(t!=null){u.n(new C.eBv(u,t))
u.atH()}return A.h(null,v)}})
return A.i($async$a5N,v)},
aWr(d){var w,v=this.c
v.toString
w=A.eD(new C.eBw(d),!1,null,x.u)
return A.a8(v,!1).cp(w)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=u?B.d8:B.bM,s=u?B.d8:v,r=u?B.aN:B.M,q=w.a.c
s=A.eA(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,A.d(q.b+" \u2014 Questions",v,v,v,v,v,v,A.l(v,v,u?B.aN:B.M,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=R.aRo(B.aK,v,O.SU,B.nz,D.f9m,w.gbtR())
q=w.d
q===$&&A.c()
q=q.length
if(q===0){q=A.au(A.d("No questions yet. Tap + Question.",v,v,v,v,v,v,A.l(v,v,u?B.bI:B.ai,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=A.hH(v,new C.eBB(w,new C.b5r(u)),q,D.bhB,v,B.ak,new C.eBC(),!1)
return A.cd(s,t,u,v,!1,!1,r,v)}}
C.YW.prototype={
S(){return new C.aCB()}}
C.aCB.prototype={
Z(){var w,v=this
v.a0()
w=v.a.c
v.d=new A.ap(new A.bc(w.b,B.b2,B.aM),$.av())
w=A.bj(w.c,!0,x.bP)
v.e=w
if(B.d.gai(w))J.ch(v.e,D.a1i)
w=v.a.c
v.f=w.d
v.r=w.e},
p(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.a2()},
abj(){var w=0,v=A.j(x.H),u=this,t
var $async$abj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(Z.Fk(78,1920),$async$abj)
case 2:t=e
if(t!=null)u.n(new C.eBr(u,t))
return A.h(null,v)}})
return A.i($async$abj,v)},
acm(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$acm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=A.eD(new C.eBp(u),!1,null,x.dZ)
w=2
return A.b(A.a8(r,!1).cp(t),$async$acm)
case 2:s=e
if(s!=null)u.n(new C.eBq(u,s))
return A.h(null,v)}})
return A.i($async$acm,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.M(a1).ax.a===B.H,g=h?B.d8:B.bM,f=h?B.d8:i,e=h?B.aN:B.M,d=A.d("Edit Question",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=A.eA(A.a([A.dq(S.YF,B.pE,new C.eBt(j,a1),A.bk(B.aK,i,i,i,B.c,i,i,i,i,i,i,i)),B.ax],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=A.d("Question thumbnail",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=A.m(14)
w=j.f
v=h?B.bI:B.ai
w=A.aH(i,A.bu(e,K.aMs(A.m(14),B.bP,140,B.A5,v,w,1/0),B.ao),B.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gc_H(),i,i,i,i,i,i,!1,B.ad)
e=A.d("Question users will tap",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?B.bj:B.aN
u=A.m(16)
t=A.H(h?B.aI:B.aJ,B.r,1)
s=j.d
s===$&&A.c()
r=A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,15,i,i,B.a4,i,i,!0,i,i,i,i,i,i,i,i)
v=A.p(i,A.B(A.a([A.D(A.aK(i,B.U,!1,i,!0,B.q,i,A.aL(),s,i,i,i,i,i,2,A.bn(i,B.et,i,B.bl,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ai,i,i,i,i,i,i,i,i,i,i,i,B.cq,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),B.z,!0,i,!0,i,!1,i,B.ah,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,B.a8,i,i,i,i,i,i,i,i,i,i,i,r,!0,B.a5,i,B.am,i,i,i,i),1),new A.Hp(j.d,i,i)],a0),B.m,i,B.e,B.j,0,i,i),B.h,i,i,new A.o(v,i,t,u,i,i,B.n),i,i,i,i,B.eh,i,i,i)
u=A.d("Printable document",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,i,i,i,B.a4,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=A.ix(B.aK,i,i,B.aj,i,new C.eBu(j),i,A.d("Shows a printable badge on this answer",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ai,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=A.d("Stored answer (not AI)",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=A.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ai,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.rj:B.c
q=A.m(16)
p=A.m(16)
o=A.m(16)
n=A.H(B.bk.j(0.45),B.r,1)
m=A.p(i,D.bww,B.h,i,i,new A.o(B.bk.j(0.12),i,i,A.m(12),i,i,B.n),i,i,i,i,B.bl,i,i,i)
l=A.d("Open Document Editor",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&A.c()
k=J.aa(k)
l=A.D(A.v(A.a([l,B.av,A.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.ai,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),B.F,i,B.e,B.j,0,B.p),1)
return A.cd(d,g,A.cL(A.a([f,B.P,w,B.d3,e,B.P,v,B.aO,u,B.P,t,B.av,s,B.ab,A.aD(!1,B.a1,!0,q,A.aI(!1,p,!0,A.p(i,A.B(A.a([m,B.er,l,A.V(B.Ac,h?B.bI:B.ai,i,i,i,16)],a0),B.m,i,B.e,B.j,0,i,i),B.h,i,i,new A.o(i,i,n,o,i,i,B.n),i,i,i,i,B.fB,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gc5g(),i,i,i,i,i,i,i),B.h,r,0,i,i,i,i,i,B.ac)],a0),i,B.c3,i,i,B.ak,!1),i,!1,!1,i,i)}}
C.cWZ.prototype={}
C.Tu.prototype={
S(){return new C.aAL(A.k9(!0,null,!0,!0,null,null,!1))}}
C.aAL.prototype={
Z(){var w,v,u,t,s,r,q=this
q.a0()
w=J.dE(q.a.c,new C.dRX())
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
default:break}}w=B.d.aF(v,"\n\n")
q.d=new A.ap(new A.bc(w,B.b2,B.aM),$.av())},
p(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.f.p()
this.a2()},
atI(d,e){var w,v,u,t,s,r=this.d
r===$&&A.c()
r=r.a
w=r.b
if(!w.gep())return
v=r.a
r=w.a
u=w.b
t=d+B.a.am(v,r,u)+e
s=B.a.o7(v,r,u,t)
this.d.bJ(0,new A.bc(s,A.h2(B.bs,r+t.length),B.aM))},
aUD(d){var w,v,u,t,s=this.d
s===$&&A.c()
s=s.a
w=s.a
v=B.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=B.a.o7(w,v,v,u)
this.d.bJ(0,new A.bc(t,A.h2(B.bs,v+u.length),B.aM))},
a9l(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a9l=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(Z.Fk(78,1920),$async$a9l)
case 3:s=e
if(s==null){w=1
break}t.n(new C.dRD(t,s))
case 1:return A.h(u,v)}})
return A.i($async$a9l,v)},
W9(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$W9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hR().a3j(B.ey),$async$W9)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return A.b(s.f7(),$async$W9)
case 4:t.n(new r.dRI(t,e))
case 1:return A.h(u,v)}})
return A.i($async$W9,v)},
a9m(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$a9m=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=$.av()
s=new A.ap(B.as,t)
r=new A.ap(new A.bc("https://",B.b2,B.aM),t)
q=u.c
q.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.dRG(s,r),q,null,!0,!0,x.y),$async$a9m)
case 2:if(e===!0)u.n(new C.dRH(u,s,r))
s.R$=t
s.O$=0
r.R$=t
r.O$=0
return A.h(null,v)}})
return A.i($async$a9m,v)},
bxU(){var w,v,u,t,s,r=null,q=A.a([],x.a),p=this.d
p===$&&A.c()
p=B.a.fm(p.a.a,A.ae("\\n\\s*\\n",!0,!1,!1,!1))
w=new A.J(p,new C.dRz(),A.U(p).k("J<1,n>")).bZ(0,new C.dRA())
for(p=J.aV(w.a),v=new A.hK(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gT(p)
if(B.a.a_(s,"## "))q.push(new C.ln("heading",B.a.i(B.a.aX(s,3)),r,r))
else if(B.a.a_(s,"\u2022 ")||B.a.a_(s,"- "))q.push(new C.ln("bullets",new A.J(A.a(s.split("\n"),u),new C.dRB(),t).bZ(0,new C.dRC()).aF(0,"\n"),r,r))
else q.push(new C.ln("text",s,r,r))}p=this.e
p===$&&A.c()
B.d.v(q,p)
if(q.length===0)q.push(D.a1i)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.cWZ(n),l=n?B.aF:B.fy,k=A.d(p.a.d,o,o,o,o,o,o,B.cr,o,o,o),j=x.p
k=A.eA(A.a([A.dq(S.YF,B.a4S,new C.dRN(p,d),A.bk(B.aK,o,o,o,B.c,o,o,o,o,o,o,o)),B.aa],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?B.cK:B.iX
v=A.c8(B.bJ,A.a([p.uL(E.KI,"Bold",new C.dRO(p),m),p.uL(E.WY,"Italic",new C.dRP(p),m),p.uL(E.afe,"Underline",new C.dRQ(p),m),p.uL(Ac.X4,"Heading",new C.dRR(p),m),p.uL(O.KJ,"Bullets",new C.dRS(p),m),p.uL(E.afd,"Align",new C.dRT(),m),p.uL(B.Ee,"Link",p.gbSQ(),m),p.uL(B.p6,"Image",p.gbSP(),m),p.uL(Y.Xg,"Video",p.gbSR(),m),p.uL(M.Yk,"Signature",new C.dRU(p),m),p.uL(Y.KK,"Divider",new C.dRV(p),m)],j),B.bx,4,4)
w=A.p(o,A.v(A.a([v,B.ar,A.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,A.l(o,o,n?B.eB:B.bv,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),B.ag,o,B.e,B.j,0,B.p),B.h,w,o,o,o,o,o,o,E.ae9,o,o,o)
v=n?B.d8:B.c
u=A.m(12)
t=A.H(n?B.eC:B.e8,B.r,1)
s=A.a([new A.ab(0,B.G,B.x.j(n?0.35:0.08),B.cA,16)],x.V)
r=p.d
r===$&&A.c()
q=A.l(o,o,n?B.ij:B.aF,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=A.a([w,A.D(new A.C(B.c3,A.p(o,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),r,o,o,o,o,o,2,A.bn(o,B.et,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.eB:B.bv,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!0,p.f,B.ah,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,q,!0,B.a5,o,B.am,o,o,o,o),B.h,o,o,new A.o(v,o,t,u,s,o,B.n),o,o,o,o,A4.zQ,o,o,o),o),1)],j)
n=p.e
n===$&&A.c()
if(n.length!==0){n=new A.hx(n,A.U(n).k("hx<1>"))
j.push(A.p(o,A.c8(B.bJ,n.gdH(n).di(0,new C.dRW(p,m),x.g5).dA(0),B.bx,0,8),B.h,o,o,o,o,o,o,o,B.K4,o,o,o))}return A.cd(k,l,A.v(j,B.m,o,B.e,B.j,0,B.p),o,!1,!1,o,o)},
uL(d,e,f,g){var w=null,v=g.a,u=v?B.d8:B.c,t=A.m(8),s=A.m(8)
return A.hq(A.aD(!1,B.a1,!0,t,A.aI(!1,s,!0,new A.C(B.ch,A.V(d,v?B.ij:B.aF,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.h,u,0,w,w,w,w,w,B.ac),w,e,w,w)}}
C.d93.prototype={}
C.ayk.prototype={
a3(){return"_KbView."+this.b}}
C.ans.prototype={
S(){return new C.aAK(D.aNq)},
cGE(d,e){return this.e.$2$size(d,e)}}
C.aAK.prototype={
gawp(){var w,v
if(this.e==null)return null
for(w=J.aV(this.a.c);w.C();){v=w.gT(w)
if(v.a===this.e)return v}return null},
gcjK(){var w,v,u,t,s,r=this.gawp()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
c_J(d){this.n(new C.dRw(this,d))},
c6q(d){this.n(new C.dRx(this,d))},
bwc(){this.n(new C.dRo(this))},
bwe(){this.n(new C.dRp(this))},
gb1_(){var w=A.bj(this.a.c,!0,x.i)
B.d.aZ(w,new C.dRy())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.M(d).ax.a===B.H,f=new C.d93(g),e=x.O
e=g?A.a([B.M.j(0.9),B.bj.j(0.85)],e):A.a([B.ev.j(0.55),B.lR.j(0.45)],e)
w=A.m(22)
v=A.H((g?B.aI:B.fe).j(0.55),B.r,1)
switch(i.d.a){case 0:g=i.bxa(f)
break
case 1:g=i.gawp()
g.toString
g=i.bxS(f,g)
break
case 2:u=i.gawp()
u.toString
t=i.gcjK()
t.toString
s=A.aY(u.d)
r=A.m(16)
r=A.p(h,A.d(t.b,h,h,h,h,h,h,D.eHp,h,h,h),B.h,h,h,new A.o(B.aK,h,h,r,h,h,B.n),h,h,h,h,B.bB,h,h,1/0)
q=g?B.aF:B.c
p=A.m(16)
o=A.H(g?B.aI:B.aJ,B.r,1)
n=A.a([new A.ab(0,B.G,B.x.j(g?0.28:0.06),B.e9,10)],x.V)
m=g?B.fw:B.pX
l=A.m(8)
k=A.V(B.pb,g?B.dB:B.e4,h,h,h,14)
j=x.p
j=A.v(A.a([new C.ayi(f,i.gbwd(),u.c,s,"Answer",h),A.D(A.cL(A.a([r,B.ab,A.p(h,A.v(A.a([A.p(h,A.B(A.a([k,B.ez,A.d("Stored answer",h,h,h,h,h,h,A.l(h,h,g?B.dB:B.e4,h,h,h,h,h,h,h,h,11,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),B.m,h,B.e,B.Q,0,h,h),B.h,h,h,new A.o(m,h,h,l,h,h,B.n),h,h,h,B.e0,B.fW,h,h,h),new C.aXe(t.c,t.e,f,h)],j),B.F,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(q,h,o,p,n,h,B.n),h,h,h,h,B.c3,h,h,1/0)],j),h,B.bhj,h,h,B.ak,!1),1)],j),B.ag,h,B.e,B.j,0,B.p)
g=j
break
default:g=h}return A.p(h,g,B.ao,h,h,new A.o(h,h,v,w,h,new A.a3(B.aY,B.b1,B.w,e,h,h),B.n),h,h,h,B.it,h,h,h,h)},
aSm(d){var w,v,u,t=null,s=d.a,r=s?D.rj:B.c,q=B.aB.j(0.22)
q=A.a([new A.ab(0,B.G,q,B.J,14),new A.ab(0,B.G,B.x.j(s?0.28:0.06),B.J,8)],x.V)
w=A.H(s?B.aI:B.fe,B.r,2)
v=this.a
u=x.p
q=A.a([A.p(t,A.hO(v.cGE(v.d,72),B.ao),B.h,t,t,new A.o(r,t,w,t,q,t,B.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)B.d.v(q,A.a([B.ar,A.d("Tap to switch",t,t,t,t,t,t,A.l(t,t,B.dk,t,t,t,t,t,t,t,t,12,t,t,B.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return A.v(q,B.m,t,B.e,B.j,0,B.p)},
bxa(d){var w,v,u=this,t=null,s=u.a.r
s=A.au(s!=null?A.aH(t,u.aSm(d),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,B.ad):u.aSm(d),t,t,t)
w=d.a
v=A.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,A.l(t,t,w?B.aN:B.M,t,t,t,t,t,t,t,t,20,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),B.L,t,t)
return A.cL(A.a([s,B.ay,v,B.ar,A.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,A.l(t,t,w?B.bI:B.ai,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),B.L,t,t),B.bu,A.ih(!0,t,t,B.z,G.aID,new C.dRr(u,d),u.gb1_().length,t,B.dL,B.ak,!0)],x.p),t,D.bhD,t,t,B.ak,!1)},
bxS(d,e){var w,v,u,t,s=null,r=A.bj(e.e,!0,x.u)
B.d.aZ(r,new C.dRt())
w=A.aY(e.d)
v=d.a
u=A.d("Tap a question to read the stored answer.",s,s,s,s,s,s,A.l(s,s,v?B.bI:B.ai,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=A.au(A.d("No questions in this category yet.",s,s,s,s,s,s,A.l(s,s,v?B.bI:B.ai,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=A.hH(s,new C.dRu(this,r,d,e),t,B.un,s,B.ak,new C.dRv(),!1)
return A.v(A.a([new C.ayi(d,this.gbwb(),e.c,w,e.b,s),new A.C(Ah.wz,u,s),A.D(v,1)],x.p),B.ag,s,B.e,B.j,0,B.p)}}
C.ayi.prototype={
B(d){var w=this,v=null,u=w.c.a,t=A.aF(v,v,v,v,A.V(B.eq,u?B.aN:B.M,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=A.m(12)
q=A.p(v,A.V(w.e,s,v,v,v,22),B.h,v,v,new A.o(r,v,v,q,v,v,B.n),v,v,v,v,B.ch,v,v,v)
return new A.C(D.bkP,A.B(A.a([t,q,B.ax,A.D(A.d(w.r,v,v,v,v,v,v,A.l(v,v,u?B.aN:B.M,v,v,v,v,v,v,v,v,17,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,v,v),v)}}
C.a9D.prototype={
B(d){var w=null,v=this.c,u=A.aY(v.d),t=this.d.a,s=t?D.rj:B.c,r=A.m(14),q=A.m(14),p=A.m(14),o=A.H(t?B.aI:B.aJ,B.r,1),n=A.a([new A.ab(0,B.G,B.x.j(t?0.28:0.06),B.dE,6)],x.V),m=u.j(0.15),l=A.m(12)
l=A.p(w,A.V(v.c,u,w,w,w,22),B.h,w,w,new A.o(m,w,w,l,w,w,B.n),w,40,w,w,w,w,w,40)
return new A.fD(1,A.aD(!1,B.a1,!0,r,A.aI(!1,q,!0,A.p(w,A.v(A.a([l,B.ar,A.d(v.b,w,2,B.a2,w,w,w,A.l(w,w,t?B.aN:B.M,w,w,w,w,w,w,w,w,10,w,w,B.I,w,1.1,!0,w,w,w,w,w,w,w,w),B.L,w,w)],x.p),B.m,w,B.b6,B.j,0,B.p),B.h,w,w,new A.o(w,w,o,p,n,w,B.n),w,w,w,w,B.ch,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),B.h,s,0,w,w,w,w,w,B.ac),w)}}
C.aXe.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=A.a([],q)
if(this.d){w=r.a
v=w?B.fw:B.pX
u=A.m(8)
t=A.V(B.t3,w?B.dB:B.e4,s,s,s,14)
p.push(A.p(s,A.B(A.a([t,B.d5,A.d("Printable document",s,s,s,s,s,s,A.l(s,s,w?B.dB:B.e4,s,s,s,s,s,s,s,s,10,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),B.m,s,B.e,B.Q,0,s,s),B.h,s,s,new A.o(v,s,s,u,s,s,B.n),s,s,s,B.cL,B.ex,s,s,s))}B.d.v(p,J.b4(this.c,new C.c4z(r),x.l))
return A.v(p,B.F,s,B.e,B.j,0,B.p)}}
C.a9v.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new A.C(D.bfu,A.d(q.b,r,r,r,r,r,r,A.l(r,r,s.d.a?B.aN:B.M,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new A.C(B.hC,A.bu(A.m(12),K.aMs(r,B.bP,160,B.p6,r,w,1/0),B.ao),r)
case"video":v=q.c
q=v==null?q.b:v
return new A.C(B.hC,new C.ayj(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new A.C(B.wu,A.aI(!1,r,!0,A.d(q,r,r,r,r,r,r,A.l(r,r,s.d.a?B.cC:B.bk,r,B.mg,r,r,r,r,r,r,r,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.czd(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=A.jn(v?B.aI:B.aJ,r,r,r,r,r)
q=A.d(q.b,r,r,r,r,r,r,A.l(r,r,v?B.cp:B.aI,r,r,r,r,r,r,r,r,r,B.cx,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=A.p(r,r,B.h,v?B.bI:B.ai,r,r,r,1,r,r,r,r,r,120)
return new A.C(B.zB,A.v(A.a([u,q,B.aO,t,B.av,A.d("Signature",r,r,r,r,r,r,A.l(r,r,v?B.bI:B.ai,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r)
case"bullets":v=x.cl
q=A.z(new A.cT(new A.a4(A.a(q.b.split("\n"),x.s),new C.cze(),x.cc),new C.czf(s),v),v.k("G.E"))
return new A.C(B.kY,A.v(q,B.F,r,B.e,B.j,0,B.p),r)
case"divider":return new A.C(B.hC,A.jn(s.d.a?B.aI:B.aJ,r,r,r,r,r),r)
default:q=q.b
if(B.a.i(q).length===0)return B.bF
return new A.C(B.fq,C.hsC(q,s.d),r)}}}
C.ayj.prototype={
S(){return new C.bdf()}}
C.bdf.prototype={
Z(){this.a0()
this.abl()},
abl(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$abl=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=B.a.i(r.a.c)
if(J.aa(n)!==0)p=!J.cV(n,"http")&&!J.cV(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=A.Wj(A.cr(n,0,null),null)
w=7
return A.b(J.afy(q),$async$abl)
case 7:if(r.c==null){w=1
break}r.n(new C.d94(r,q))
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
return A.i($async$abl,v)},
p(){var w=this.d
if(w!=null)w.p()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?B.bj:B.f4
u=A.m(12)
return A.p(B.A,A.V(B.pg,w?B.bI:B.ai,t,t,t,36),B.h,t,t,new A.o(v,t,t,u,t,t,B.n),t,120,t,t,t,t,t,t)}w=A.m(12)
v=s.a
u=J.afw(v)
return A.bu(w,new A.fD(u,new A.am(B.A,t,B.a9,B.q,A.a([new A.zb(s,t),A.aF(t,t,t,t,A.V(v.f?B.afl:B.KL,B.c,t,t,t,44),t,t,t,new C.d96(this,s),t,t,t,t,t,t)],x.p),t),t),B.ao)}}
C.aoe.prototype={
a3(){return"NgmyMusicLane."+this.b}}
C.Hf.prototype={
a3(){return"NgmyMusicRhymeScheme."+this.b}}
C.qR.prototype={}
C.anv.prototype={
S(){var w=null
return new C.aAM(new A.ap(B.as,$.av()),A.mb(0,w,w),A.a([],x.m),D.Bd,D.aAy,w,w)},
gdT(){return this.d}}
C.aAM.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,B.my,null,1,null,v)
w.f1(0,!0)
v.as!==$&&A.aO()
v.as=w
v.z=B.d.gL(D.a_V).a},
p(){var w=this,v=w.as
v===$&&A.c()
v.p()
v=w.d
v.R$=$.av()
v.O$=0
w.e.p()
w.bpN()},
gan4(){var w,v,u,t,s=this.x
if(s===D.Be)return null
s=s===D.Bd
w=s?D.a_V:D.a_a
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?B.d.gL(w):null},
ckv(d){return this.n(new C.dSa(this,d))},
awc(){$.aT.x1$.push(new C.dS1(this))},
Hu(d){return this.cjY(d)},
aUE(){return this.Hu(null)},
cjY(b0){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$Hu=A.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=B.a.i(b0==null?q.d.a.a:b0)
if(J.aa(a8)===0||q.r||q.a.e){w=1
break}w=3
return A.b(q.a.f.$0(),$async$Hu)
case 3:e=b2
if(!e){w=1
break}A.jE()
d=a8.toLowerCase()
p=B.a.t(d,"continue")||B.a.t(d,"keep going")||B.a.t(d,"go on")||B.a.t(d,"next verse")||B.a.t(d,"more lyrics")||B.a.t(d,"endelea")||B.a.t(d,"endelea na")||B.a.t(d,"ongeza")||B.a.t(d,"tuendelee")
a0=q.f
a1=B.d.ba(a0,new C.dS3())
o=!p&&!a1
d=a8.toLowerCase()
if(!(B.a.t(d,"fix")||B.a.t(d,"rewrite")||B.a.t(d,"re-write")||B.a.t(d,"rhyme better")||B.a.t(d,"better rhyme")||B.a.t(d,"sound better")||B.a.t(d,"improve")||B.a.t(d,"polish")||B.a.t(d,"make it rhyme")||B.a.t(d,"boresha")||B.a.t(d,"rekebisha")||B.a.t(d,"endeleza mistari")))a2=C.fZW(a8)&&a1
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
l=C.fZW(a8)&&!p
q.n(new C.dS4(q,a8))
q.awc()
k=B.a.i(q.a.c)
if(J.aa(k)===0){q.n(new C.dS5(q))
q.awc()
w=1
break}t=5
j=A.mJ(k)
i=new A.J(a0,new C.dS6(),A.U(a0).k("J<1,n>")).aF(0,"\n\n")
a0=C.hLP(m,p,o,q.x,n,q.y,q.gan4(),l)
a3=J.aa(i)!==0?"--- Conversation so far ---\n"+A.t(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+A.t(a8)
w=8
return A.b(A.qi(j,h,B.hc,null),$async$Hu)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=B.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=B.a.i(a0)}else a6=L.bxR(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.n(new C.dS7(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.n(new C.dS8(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.n(new C.dS9(q))
q.awc()
w=r.pop()
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Hu,v)},
bBO(){return this.Hu("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=A.M(d).ax.a===B.H,p=q?B.Dl:D.b6T,o=x.p
o=A.a([A.v(A.a([A.D(s.cjd(q),1),s.bB2(q)],o),B.m,r,B.e,B.j,0,B.p)],o)
if(s.f.length!==0&&!s.r){w=B.aL.j(0.55)
v=s.r?r:s.gbBN()
u=A.m(28)
t=A.a([B.aL,B.aZ],x.O)
o.push(A.an(78,A.aD(!1,B.a1,!0,r,A.aI(!1,r,!0,A.eq(D.dPP,r,new A.o(r,r,r,u,A.a([new A.ab(0,B.G,B.aL.j(0.45),B.cA,16)],x.V),new A.a3(B.a3,B.a7,B.w,t,r,r),B.n),r,r,r),B.qV,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),B.h,B.K,10,r,w,B.qV,r,r,B.ac),r,r,r,14,r,r))}return A.p(r,new A.am(B.W,r,B.a9,B.q,o,r),B.h,p,r,r,r,r,r,r,r,r,r,r)},
cjd(d){var w,v,u,t=this,s=null
if(t.x===D.Be)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=A.a([A.fDS(s,!1,B.K,0,0,w,A.fAg(t.coH(d),B.Td,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=A.V(B.ahH,B.aB.j(0.5),s,s,s,52)
w.push(A.b2K(new A.C(B.ep,A.v(A.a([u,B.ay,A.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,A.l(s,s,d?B.aA:B.dx,s,s,s,s,s,s,s,s,14,s,s,B.a4,s,1.45,!0,s,s,s,s,s,s,s,s),B.L,s,s),B.ay,A.c8(B.fG,A.a([t.afx("Full bongo love song ABAB",d),t.afx("Mix: group vs private jet \u2014 which flies?",d),t.afx("Song from John 3:16 + matching verses",d),t.afx("Fix my rhyme \u2014 paste your lines",d)],v),B.bx,8,8)],v),B.m,s,B.b6,B.j,0,B.p),s),!1))}else{v=t.r?1:0
w.push(new A.nr(D.bga,A.VL(new A.o_(new C.dS2(t,d),u+v,!0,!0,!0,0,A.ri(),s)),s))}return A.uR(0,s,B.q,t.e,B.z,s,s,A6.a6Z,s,s,!1,s,B.ak,!1,w)},
coH(d){var w=this.as
w===$&&A.c()
return A.c3(w,new C.dSh(this,d),null)},
coJ(d){var w,v=this,u=null,t=A.m(14),s=v.r?u:new C.dSj(v),r=B.x.j(d?0.35:0.06),q=A.m(14),p=A.H(B.b7.j(0.35),B.r,1),o=v.gan4()
o=o==null?u:o.c
o=A.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,B.Hm,u,u,u)
w=v.gan4()
w=w==null?u:w.b
if(w==null)w="Style"
w=A.D(A.d(w,u,u,u,u,u,u,A.l(u,u,d?B.c:B.bg,u,u,u,u,u,u,u,u,12,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return A.aD(!1,B.a1,!0,u,A.aI(!1,t,!0,A.p(u,A.B(A.a([o,B.aa,w,A.V(v.w?B.La:B.qn,B.b7,u,u,u,20)],x.p),B.m,u,B.e,B.j,0,u,u),B.h,u,u,new A.o(r,u,p,q,u,u,B.n),u,u,u,u,B.qi,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac)},
as8(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=A.a([B.aW,B.aS],x.O)
break
case 1:w=A.a([B.bk,B.cC],x.O)
break
case 2:w=A.a([B.by,B.aB],x.O)
break
default:w=n}v=m?6:0
u=A.m(14)
t=A.m(14)
s=this.r?n:new C.dS0(this,d)
r=A.m(14)
w=m?new A.a3(B.a3,B.a7,B.w,w,n,n):n
if(m)q=n
else q=B.x.j(g?0.3:0.05)
p=A.d(f,n,n,n,n,n,n,B.Hm,n,n,n)
if(m)o=B.c
else o=g?B.af:B.bg
return A.D(A.aD(!1,B.a1,!0,u,A.aI(!1,t,!0,A.dj(n,A.v(A.a([p,A.d(e,n,n,n,n,n,n,A.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),B.m,n,B.e,B.j,0,B.p),n,n,B.b9,new A.o(q,n,n,r,n,w,B.n),B.a1,n,n,n,B.jG,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),B.h,n,v,n,n,n,n,n,B.ac),1)},
coK(d,e){var w,v,u,t=this,s=null,r=t.x===D.Bd?t.z:t.Q,q=A.m(20)
if(r===d.a)r=B.b7.j(e?0.25:0.15)
else r=B.x.j(e?0.2:0.04)
w=A.m(20)
v=t.r?s:new C.dSk(t,d)
u=A.d(d.c,s,s,s,s,s,s,B.QR,s,s,s)
return A.aD(!1,B.a1,!0,q,A.aI(!1,w,!0,new A.C(B.fK,A.B(A.a([u,B.d5,A.d(d.b,s,s,s,s,s,s,A.l(s,s,e?B.c:B.bg,s,s,s,s,s,s,s,s,10,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.m,s,B.e,B.Q,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),B.h,r,0,s,s,s,s,s,B.ac)},
afx(d,e){var w=null,v=A.d(d,w,w,w,w,w,w,E.a4L,w,w,w),u=B.aB.j(e?0.2:0.1)
return A.mL(w,u,v,w,this.r?w:new C.dSb(this,d),w,w,w,w)},
bB2(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=A.m(22),o=d?B.M.j(0.95):B.c,n=A.H(B.aB.j(0.2),B.r,1),m=x.p,l=A.a([],m)
if(q>0)l.push(new A.C(F.adW,A.d("$"+B.k.aa(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,A.l(r,r,B.aL.j(0.85),r,r,r,r,r,r,r,r,9,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=A.l(r,r,d?B.c:B.bg,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.Be?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=A.D(A.aK(r,B.U,!1,r,!0,B.q,r,A.aL(),w,r,r,r,r,r,2,A.bn(r,B.et,r,B.h8,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.l(r,r,d?B.c2:B.hQ,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),B.z,!0,r,!0,r,!1,r,B.ah,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.dRY(s),r,!1,r,r,!1,r,!0,r,B.a8,r,r,r,r,r,r,r,r,r,r,r,v,!0,B.a5,r,B.am,r,r,r,r),1)
u=s.r
t=u?r:new C.dRZ(s)
l.push(A.B(A.a([v,new A.Hp(w,B.aB,r),A.aD(!1,B.a1,!0,r,A.aI(!1,r,!0,A.eq(u?D.dPZ:D.byN,r,D.aT5,42,r,42),B.cH,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),B.h,r,0,r,r,B.cH,r,r,B.ac)],m),B.dH,r,B.e,B.j,0,r,r))
return A.p(r,A.v(l,B.ag,r,B.e,B.Q,0,B.p),B.h,r,r,new A.o(o,r,n,p,r,r,B.n),r,r,r,B.ul,B.acw,r,r,r)}}
C.aIK.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
C.Tv.prototype={
ac(){var w=this
return A.E(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.XG.prototype={
S(){return new C.axM(null,null)},
bbq(){return this.f.$0()}}
C.axM.prototype={
Z(){var w,v=this,u=null
v.a0()
w=A.bi(u,D.bey,u,1,u,v)
w.cm(0)
v.d!==$&&A.aO()
v.d=w
w=A.bi(u,B.oZ,u,1,u,v)
w.f1(0,!0)
v.e!==$&&A.aO()
v.e=w
w=A.bi(u,B.nr,u,1,u,v)
w.cF(0)
v.f!==$&&A.aO()
v.f=w
w=A.bi(u,B.wo,u,1,u,v)
w.cm(0)
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
w.boE()},
c_L(){var w=this.d
w===$&&A.c()
w.en(0).bx(new C.d6E(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(A.aG(d,B.bR,x.w).w.a.a-32,360),h=B.x.j(0.82),g=k.gc_K(),f=x.l,e=J.e_(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&A.c()
e[v]=new A.C3(new C.d6F(k,v,d),j,w,j)}f=A.z(e,f)
w=k.d
w===$&&A.c()
u=A.m(28)
t=A.H(B.c.j(0.22),B.r,1.5)
s=A.a([new A.ab(2,B.G,B.aZ.j(0.35),B.J,40),new A.ab(0,B.G,B.aK.j(0.25),B.fF,28)],x.V)
r=k.e
r===$&&A.c()
q=k.r
q===$&&A.c()
q=A.c3(new A.h4(A.a([r,q],x.U)),new C.d6G(k),j)
r=A.nq(B.jc,D.f6L,new C.d6H())
p=A.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,A.l(j,j,B.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,B.cq,j,1.45,!0,j,j,j,j,j,j,j,j),B.L,j,j)
o=x.p
n=A.B(A.a([k.aUF(B.k6,"Resets in 24h"),B.aa,k.aUF(B.pb,"Help Topics ready")],o),B.m,j,B.b6,B.j,0,j,j)
m=A.a([],o)
k.a.toString
l=B.c.j(0.35)
m.push(A.D(A.dV(D.f1G,new C.d6I(k),A.db(j,j,j,j,j,j,j,j,j,B.af,j,j,B.lW,j,new A.b6(A.m(14),B.X),new A.ay(l,1,B.r,-1),j,j,j,j)),1))
k.a.toString
m.push(B.ax)
k.a.toString
l=A.m(14)
m.push(A.D(A.bL(D.f6C,g,A.bk(B.aK,j,j,6,B.c,j,B.lW,B.aK.j(0.5),new A.b6(l,B.X),j,j,j)),1))
f.push(A.au(A.aH(j,A.c3(w,new C.d6J(k),A.p(j,A.v(A.a([q,B.ay,r,B.T,p,B.P,n,B.bu,A.B(m,B.m,j,B.e,B.j,0,j,j)],o),B.m,j,B.e,B.Q,0,B.p),B.h,j,j,new A.o(j,j,t,u,s,D.bGv,B.n),j,j,j,j,A7.adO,j,j,i)),B.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.d6K(),j,j,j,j,j,j,!1,B.ad),j,j,j))
return A.aD(!1,B.a1,!0,j,A.aH(j,new A.am(B.W,j,B.a9,B.q,f,j),B.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,B.ad),B.h,h,0,j,j,j,j,j,B.ac)},
aUF(d,e){var w=null,v=B.c.j(0.08),u=A.m(20),t=A.H(B.c.j(0.12),B.r,1)
return A.p(w,A.B(A.a([A.V(d,B.aZ,w,w,w,13),B.ez,A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.fK,w,w,w)}}
C.aHE.prototype={
aP(){this.aW()
this.aV()
this.dD()},
p(){var w=this,v=w.b_$
if(v!=null)v.a1(0,w.gdB())
w.b_$=null
w.a2()}}
C.M7.prototype={}
C.pn.prototype={}
C.ao1.prototype={
S(){return new C.aB7(A.a([],x.E),A.a([],x.s))}}
C.aB7.prototype={
gans(){return B.k.D(A.Jy(this.a.c.a,new C.e0L(this)),0,1/0)},
a5V(){var w,v=this,u=v.d,t=v.gans()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)A.qh(u.a,t,!0,!1)},
HY(d,e){var w,v,u,t=this,s=t.gans(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gans()
if(w<v-0.005)A.h3Z(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)A.qh(u.a,w,!0,!1)
A.qh(t.a.c.a,w,!0,!1)
A.zO(!0,!1,w,t.a.c.a)},
Z(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a0()
$.aT.c_$.push(o)
w=$.H4+1
$.H4=w
if(w===1){w=$.fRG
if(w!=null)w.$0()}v=$.fCh.h(0,B.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=A.bj(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=A.bj(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=A.lv(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,B.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=A.aM7(u,B.k.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new A.uK(w,u,r,q,s.e,p)}o.d=t}o.Np()
o.a5V()
$.aT.x1$.push(new C.e1r(o))
o.Q=A.dD(B.nn,new C.e1s(o))
o.as=A.dD(B.fJ,new C.e1t(o))},
p(){var w=this,v=w.Q
if(v!=null)v.a9(0)
v=w.as
if(v!=null)v.a9(0)
$.aT.hE(w)
C.hky()
w.a2()},
cqM(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new A.Q(Date.now(),0,!1)
v=p.r
if(!C.a5F(v,w)){if(C.fCj(p,q.e)){q.n(new C.e19(q,p))
q.wS(!1,!0,!0)}else if(q.c!=null)q.n(new C.e1a())
return}if(!C.c6P(v.c?v.bQ():v)){q.n(new C.e1b(p))
q.aUO(!1)
return}u=p.gBg()
if(u<=0)return
t=w.cY(A.bW(A.bw(w),A.bC(w),A.bO(w),12,0,0,0,0))
s=C.fCk(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.n(new C.e1c())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(B.d.ba(q.e,new C.e1d(r))){q.n(new C.e1e(p,w,u))
return}q.n(new C.e1f(q,p,u,w))
q.auh(new A.cZ(r,p.a,u,B.fu,B.f6,"Clock-in daily earnings (local)",null,null,B.cf,w))},
iP(d){if(d===B.fv)this.Ds()},
Np(){var w,v,u,t,s,r,q,p=this.d
if(p==null)return
w=this.a.c
w.e=p.e
w.f=p.f
w.r=p.r
w.rx=p.rx
w.fr=p.fr
w.fx=p.fx
w.fy=p.fy
w.bg=p.bg
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
q=new A.uK(u,t,s,r,v.e,q)
u=q}w.x=u},
Q0(d){return this.cpu(d)},
cpu(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Q0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.Np()
t.HY(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return A.b(x.r.b(s)?s:A.dQ(s,x.H),$async$Q0)
case 3:case 1:return A.h(u,v)}})
return A.i($async$Q0,v)},
Ds(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$Ds=A.e(function(d,e){if(d===1){s.push(e)
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
return A.b(H.yy(q.w,k,l,j,m,!1,n),$async$Ds)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.n(new C.e14(q,p))
q.Q0(!1)}w=8
return A.b(q.I9(),$async$Ds)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=A.a6(h)
$.al.$1("[growth income] pull wallet: "+A.t(o))
w=9
return A.b(q.I9(),$async$Ds)
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
return A.i($async$Ds,v)},
LS(d){return this.bvo(d)},
bvn(){return this.LS(null)},
bvo(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$LS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return A.b(A.ax(),$async$LS)
case 3:s=f
r=B.a.i(t.a.c.a.toLowerCase())
q=A.d7(t.w,x.N)
r=s.rn("ngmy_gi_credited_txn_ids_"+r)
q.v(0,r==null?A.a([],x.s):r)
j.a=0
p=A.a([],x.s)
o=d==null?null:A.ko(d,A.U(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,A.K)(r),++m){l=r[m]
k=l.a
if(q.t(0,k))continue
if(o!=null&&!o.t(0,k))continue
if(l.d===B.fl&&l.x===B.cf&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.n(new C.e0M(j,t,i))
q.v(0,p)
r=A.z(q,A.a2(q).k("cl.E"))
t.w=r
w=4
return A.b(A.ao3(t.a.c.a,r),$async$LS)
case 4:t.atQ(!1,!0)
r=t.c
if(r!=null)r.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Balance updated: +$"+A.dx(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$LS,v)},
I9(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$I9=A.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=A.U(a2).k("a4<1>")
a4=A.z(new A.a4(a2,new C.e15(),a3),a3.k("G.E"))
a5=a4
a6=A.a([],x.s)
w=J.aa(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=A.U(a2).k("J<1,n>")
e=A.z(new A.J(a2,new C.e16(),a3),a3.k("ai.E"))
q=e
w=9
return A.b(A.la("transactions","id,status",null,null,null,A.E(["id",q],x.N,x.j),null,!0,null,null,!1,B.bE),$async$I9)
case 9:p=a9
if(r.c==null){w=1
break}o=!1
for(a2=J.aV(p);a2.C();){n=a2.gT(a2)
m=n
a3=J.q(m,"id")
l=J.k(a3==null?"":a3)
a3=A.aR(J.q(m,"status"))
d=a3==null?null:B.k.N(a3)
k=d==null?0:d
if(J.aa(l)===0)continue
j=B.d.bi(r.e,new C.e17(l))
if(j<0)continue
i=r.e[j].x
if(J.y(k,1))a0=B.cf
else a0=J.y(k,2)?B.jV:B.dp
h=a0
if(!J.y(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===B.dp&&h===B.cf&&a3[j].d===B.fl)J.ch(a6,l)
if(i===B.dp&&h===B.jV&&r.e[j].d===B.eI){g=r.d
if(g!=null){r.HY(g.d+r.e[j].c,!1)
r.atQ(!1,!0)}}}}if(o&&r.c!=null)r.n(new C.e18())
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
return A.b(r.LS(a6),$async$I9)
case 13:w=11
break
case 12:w=14
return A.b(r.bvn(),$async$I9)
case 14:case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$I9,v)},
O_(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$O_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return A.b(A.u3(i.a,i),$async$O_)
case 3:h=e
if(t.c==null){w=1
break}t.n(new C.e0Q(t,h))
t.Np()
t.a5V()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return A.b(H.yy(s[0],p,q,o,r,!0,i),$async$O_)
case 4:i=e.a
n=i[4]
m=A.bj(i[2],!0,x.o)
l=i[5]
t.w=A.bj(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.Np()
t.a5V()
k=C.fCj(n,m)
if(k)t.HY(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.Y&&s.aw>0
else s=!0
j=A.fSo(n,m,new A.Q(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.Np()
if(t.c==null){w=1
break}t.n(new C.e0R(t,n,m,l))
if(i){t.wS(!1,!0,!0)
if(j==="reset"){A.fRf(t.a.c.a)
i=t.c
if(i!=null)A.fRi(i,null)}else if(j==="warn2"){A.fRg(t.a.c.a)
i=t.c
if(i!=null)C.fRj(i)}}else if(k)t.wS(!1,!0,!0)
else t.Q0(!1)
case 1:return A.h(u,v)}})
return A.i($async$O_,v)},
wS(d,e,f){return this.c9W(d,e,f)},
atQ(d,e){return this.wS(d,!1,e)},
aUO(d){return this.wS(!1,d,!1)},
c9W(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$wS=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new A.Q(Date.now(),0,!1).a4()
r=t.a.c.a
q=t.e
p=t.f
w=3
return A.b(A.qP(r,o,q,!1,t.w,s,p),$async$wS)
case 3:p=t.a.c.a
q=t.e
r=t.f
A.H8(t.w,p,q,s,o,r)
if(f)t.Q0(d)
case 1:return A.h(u,v)}})
return A.i($async$wS,v)},
c00(){this.n(new C.e0Z())
this.atQ(!1,!0)},
ac_(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===B.cf&&A.rf(d)){w=r.a
w.f.$1(new A.cZ(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.c6L(q,d)
v=q.d=A.Jy(r.a.c.a,new C.e0W(r))
r.at=r.a.c.d=v
A.qh(q.a,v,!0,!1)
if(r.c!=null)r.n(new C.e0X(r,d))
r.wS(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new A.cZ(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===B.dp
if(w&&d.d===B.fl)s=!1
else if(w&&d.d===B.eI){r.HY(q.d-d.c,!0)
s=!0}else{C.c6L(q,d)
w=d.d
s=w===B.eI||w===B.ju
r.HY(q.d,s)}r.n(new C.e0Y(r,d))
w=d.d
r.wS(s,e,w===B.eI||w===B.ju||d.x===B.cf||w===B.fu)},
auh(d){return this.ac_(d,!0,!1)},
aVL(d,e){return this.ac_(d,!0,e)},
aVK(d,e){return this.ac_(d,e,!1)},
c2X(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.hNZ(u,e,d)){v.lA("This plan is already active.")
return}w=A.h3v(u.a,d,e)
if(C.hKr(u.a,v.e,w)){v.lA("You already own this plan.")
return}if(u.d<g){v.lA("Insufficient balance. Add funds in the Wallet tab first.")
return}v.n(new C.e1_(v))
v.n(new C.e10(v,u,new A.uK(d,e,0.0286,new A.Q(Date.now(),0,!1),0,0)))
v.auh(new A.cZ(w,u.a,g,B.ju,B.f6,"Direct investment buy: "+d,null,null,B.cf,new A.Q(Date.now(),0,!1)))
v.n(new C.e11(v))
v.lA("Plan purchased: "+d)},
lA(d){var w=null,v=this.c
if(v==null)return
v.H(x.q).f.P(A.b0(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
Yk(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hm(s,new C.al4(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$Yk)
case 3:w=4
return A.b(t.O_(),$async$Yk)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yk,v)},
act(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$act=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hm(s,new C.afS(r,A.a([r],x.d9),B.O0,t.a.d,t.gaVJ(),t.gaUN(),null),!1,null,x.X),$async$act)
case 3:case 1:return A.h(u,v)}})
return A.i($async$act,v)},
acr(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$acr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hm(s,new C.aiF(r,t.a.d,t.e,t.gaVJ(),t.gaUN(),new C.e13(t),null),!1,"LocalGrowthGameCenter",x.X),$async$acr)
case 3:case 1:return A.h(u,v)}})
return A.i($async$acr,v)},
aa5(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aa5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new A.Q(s,0,!1)
w=C.fCj(j,t.e)?3:4
break
case 3:w=5
return A.b(t.aUO(!0),$async$aa5)
case 5:case 4:if(j.x==null){t.lA("Choose an investment plan first, then come back to clock in.")
t.n(new C.e0S(t))
w=1
break}if(A.m9(r)===6||A.m9(r)===7){t.lA("Clock-in opens Monday through Friday.")
w=1
break}if(!C.fSp(r)){t.lA("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a5F(q,r)&&j.fy>0){t.lA("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!A.aMQ(q,r))if(!A.aMQ(j.fr,r)){q=A.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,A.K)(p),++n){m=p[n]
if(B.a.i(m.b.toLowerCase())===B.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new A.aCW(m.y,l,m.a))}}q=A.h2X(q,r)}else q=p
else q=p}else q=!1
if(q){t.lA("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.lA("You are already clocked in for today.")
w=1
break}k=C.hlY(r)
q=j.a
t.n(new C.e0T(j,r,k))
t.aVK(new A.cZ("local_clockin_manual_"+q+"_"+s,j.a,0,B.fu,B.f6,"Clock-in session started (local)",null,null,B.cf,r),!1)
t.lA("Clock-in started. Keep Growth Income open for today.")
case 1:return A.h(u,v)}})
return A.i($async$aa5,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===B.H?B.iZ:B.oU
if(l.d==null)return A.ec(B.kf,j,!0)
w=x.o
v=A.T(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.m(0,q,r)}p=B.a.i(l.a.c.a.toLowerCase())
u=$.ffp
u=u==null?k:u.$0()
u=J.aV(u==null?B.hY:u)
while(u.C()){t=u.gT(u)
q=t.a
if(q.length===0||v.an(0,q)||A.rf(t))continue
if(B.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(A.dp(o.toLowerCase(),"clock-in",0))continue
v.m(0,q,t)}w=A.z(new A.bg(v,v.$ti.k("bg<2>")),w)
v=l.e
B.d.v(w,new A.a4(v,new C.e1j(),A.U(v).k("a4<1>")))
B.d.aZ(w,new C.e1k())
v=l.d
v.toString
u=C.hAk(l.a.c)
t=l.d
t.toString
t=A.ec(new C.ajx(t,l.a.e,l.z,l.gc2W(),l.aPU(),D.feo),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=A.ec(new C.ayw(l.aPU(),q,n,o,w,new C.e1l(l),l.gc50(),new C.e1m(l),D.fep),j,!0)
m=A.aG(d,k,x.w).w
n=l.y
return new A.Up(n,new C.e1n(l),A.aD(!1,B.a1,!0,k,new A.a5(1/0,m.a.b,new A.am(B.W,k,B.a9,B.q,A.a([A.bX(0,A.ec(k,j,!0),0,0,0),A.bX(0,A.bq(!1,[new C.ayv(v,u,w,l.gbVE(),new C.e1o(l),new C.e1p(l),new C.e1q(d),l.gc5Q(),l.gc5M(),D.fen),t,o][n],!0,!1,B.aj,!0,!0),0,0,0),A.an(0,l.bxC(),k,k,0,0,k,k)],x.p),k),k),B.h,j,0,k,k,k,k,k,B.ac),k)},
aPU(){var w=null,v=A.a([D.eD.j(0.24),B.M.j(0.72)],x.O)
return A.hq(A.aI(!1,w,!0,A.p(B.A,D.bDc,B.h,w,w,new A.o(w,w,A.H(D.eD.j(0.38),B.r,1),w,A.a([new A.ab(0,B.G,D.eD.j(0.18),B.J,16)],x.V),new A.a3(B.aw,B.aC,B.w,v,w,w),B.a6),w,40,w,w,w,w,w,40),B.cH,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e0P(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bxC(){var w=null,v=A.m(27),u=A.H(B.au.j(0.45),B.r,1),t=A.a([new A.ab(0,B.G,B.x.j(0.5),B.eP,24),new A.ab(-2,B.G,B.au.j(0.12),B.J,18)],x.V)
return new A.C(B.K4,A.bq(!0,A.au(new A.d2(D.aRr,A.p(w,A.ck(new C.e0N(this)),B.h,w,w,new A.o(w,w,u,v,t,D.bG_,B.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,B.aj,!0,!1),w)},
bXi(d){var w=null,v=this.y===d,u=D.cIL[d],t=u.b,s=u.a,r=""+d,q=x.W
return A.D(A.dn(w,!0,w,A.aH(B.c5,A.qX(A.qm(v?A.V(s,D.a8f,new A.cx("on"+r,q),w,w,21):A.v(A.a([A.V(s,B.c.j(0.62),w,w,w,19),B.bA,A.d(t,w,1,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,new A.cx("off"+r,q),B.b6,B.j,0,B.p),B.io,A.ti(),B.b9,B.b9,A.a_I())),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e0V(this,d),w,w,w,w,w,w,!1,B.ad),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,B.bZ,w),1)}}
C.ayv.prototype={
bUu(d){return C.fCk(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.M(d)
w=B.c.j(0.58)
v=f.e
u=A.U(v).k("a4<1>")
u=A.oL(new A.a4(v,new C.daS(),u),3,u.k("G.E"))
t=A.z(u,A.a2(u).k("G.E"))
v=f.c
s=v.x
r=new A.Q(Date.now(),0,!1)
q=v.f
p=C.a5F(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.fSp(r)
m=v.gBg()
l=A.a([D.eD.j(0.24),B.M.j(0.72)],x.O)
k=A.H(D.eD.j(0.38),B.r,1)
j=x.V
i=A.a([new A.ab(0,B.G,D.eD.j(0.18),B.J,16)],j)
l=A.aI(!1,e,!0,A.p(B.A,A.V(B.hT,D.eD,e,e,e,19),B.h,e,e,new A.o(e,e,k,e,i,new A.a3(B.aw,B.aC,B.w,l,e,e),B.a6),e,38,e,e,e,e,e,38),B.cH,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=A.m(14)
k=A.m(14)
j=A.a([new A.ab(0,B.G,B.b3.j(0.45),B.cA,16)],j)
h=A.m(12)
g=x.p
j=A.bJS(!1,l,"GROWTH INCOME",A.aI(!1,i,!0,new A.a5(44,44,new A.am(B.W,e,B.a9,B.h,A.a([A.p(B.A,A.p(B.A,D.bvW,B.h,e,e,new A.o(B.ii.j(0.78),e,e,h,e,e,B.n),e,36,e,e,e,e,e,36),B.h,e,e,new A.o(e,e,e,k,j,D.bHs,B.n),e,42,e,e,e,e,e,42),A.an(e,A.p(B.A,D.bCi,B.h,e,e,new A.o(B.cE,e,A.H(D.aac,B.r,2),e,e,e,B.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.fUX(B.h7,new C.daT(),k)
k=A.B(A.a([A.D(C.fUW(new C.daU(f,B.u2,n),new A.Q(Date.now(),0,!1),h,k),1),B.nK,A.D(new A.tQ(new C.daV(f,B.u2),e,new A.h4(A.a([$.xQ(),$.a0L()],x.U)),e),1)],g),B.m,e,B.e,B.j,0,e,e)
h=f.bXs(B.u2,D.eD)
v=A.D(f.cna("Total Profit","$"+A.dx(v.e),B.u2),1)
u=u?e:s.b
return A.ec(A.ci(A.v(A.a([j,B.T,k,B.ab,new C.ayu(f.d,m,q,p,n,o,D.eD,f.gbUt(),f.f,e),B.ab,h,B.T,A.B(A.a([v,B.nK,A.D(f.b0W("Total Investment","$"+A.dx(u==null?0:u),B.u2,f.r),1)],g),B.m,e,B.e,B.j,0,e,e),B.T,f.bUq(d,t,D.eD,w)],g),B.ag,e,B.e,B.j,0,B.p),B.q,e,B.z,e,B.VL,e,e,B.ak),D.aac,!0)},
atP(d,e,f,g,h){var w=null,v=A.m(h),u=A.H(B.c.j(0.09),B.r,1),t=A.a([new A.ab(0,B.G,B.x.j(0.4),B.dn,18)],x.V)
return A.p(w,A.bu(A.m(h-1),new A.am(B.W,w,B.a9,B.q,A.a([A.bX(0,A.bT(w,new A.o(w,w,w,w,w,new A.bR(f,1.15,B.w,w,0,A.a([e.j(0.22),e.j(0)],x.O),w,w),B.n),B.bb),0,0,0),new A.C(g,d,w)],x.p),w),B.ao),B.h,w,w,new A.o(w,w,u,v,t,D.bGo,B.n),w,w,w,w,w,w,w,w)},
aUM(d,e,f,g){return this.atP(d,e,f,B.aj,g)},
b2I(d,e,f,g,h,i,j){var w=null,v=A.an(-14,A.V(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=A.m(30),s=A.H(f.j(0.4),B.r,1),r=x.p,q=this.aUM(new A.a5(w,80,new A.am(B.W,w,B.a9,B.q,A.a([v,new A.C(D.bgD,A.v(A.a([A.p(w,A.B(A.a([A.V(e,f,w,w,w,15),B.ez,A.d(h.toUpperCase(),w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),B.m,w,B.e,B.Q,0,w,w),B.h,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.ae0,w,w,w),B.b8,A.eZ(B.a3,A.d(i,w,1,w,w,w,w,A.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,B.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),B.h,B.eb)],r),B.F,w,B.e,B.j,0,B.p),w)],r),w),w),f,B.kQ,22)
if(g==null)return q
return A.aI(!1,A.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
bXs(d,e){var w,v,u,t,s=null,r=A.H(e.j(0.55),B.r,2),q=e.j(0.12),p=x.p,o=A.a([],p)
for(w=0;w<3;++w){v=new A.b1(3,3)
o.push(A.p(s,s,B.h,s,s,new A.o(e,s,s,new A.bv(v,v,v,v),s,s,B.n),s,D.cuG[w],s,D.bk6,s,s,s,5))}r=A.p(s,A.B(o,B.dH,s,B.b6,B.j,0,s,s),B.h,s,s,new A.o(q,s,r,s,s,s,B.a6),s,42,s,s,s,s,s,42)
q=A.D(A.v(A.a([D.f3h,B.bA,A.B(A.a([A.p(s,s,B.h,s,s,new A.o(e,s,s,s,A.a([new A.ab(0,B.G,e,B.J,6)],x.V),s,B.a6),s,7,s,s,s,s,s,7),B.bo,new A.dm(1,B.ci,A.d("Live \xb7 real-time statistics",s,1,B.a2,s,s,s,A.l(s,s,B.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),B.m,s,B.e,B.j,0,s,s)],p),B.F,s,B.e,B.j,0,B.p),1)
o=A.m(16)
v=A.m(16)
u=B.x.j(0.3)
t=A.H(e.j(0.45),B.r,1.2)
return this.atP(A.B(A.a([r,D.etb,q,B.aa,A.aI(!1,o,!0,A.p(s,A.v(A.a([A.V(B.od,e.j(0.95),s,s,s,21),B.tI,A.d("PLAY",s,s,s,s,s,s,A.l(s,s,B.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,B.I,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),B.m,s,B.b6,B.j,0,B.p),B.h,s,s,new A.o(u,s,t,v,s,s,B.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),B.m,s,B.e,B.j,0,s,s),e,B.a3,B.Vh,26)},
b0W(d,e,f,g){var w,v=null,u=B.a.t(d.toLowerCase(),"profit"),t=u?B.cE:B.aX,s=A.p(v,v,B.h,v,v,new A.o(t,v,v,D.aPI,v,v,B.n),v,v,v,B.mA,v,v,v,5),r=x.p
r=A.a([s,B.bd,A.D(A.v(A.a([A.B(A.a([A.V(u?B.t1:B.xb,t,v,v,v,14),B.ez,new A.dm(1,B.ci,A.d(d,v,1,B.a2,v,v,v,A.l(v,v,B.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),B.m,v,B.e,B.j,0,v,v),B.ar,A.eZ(B.a3,A.d(e,v,1,v,v,v,v,D.eC1,v,v,v),B.h,B.eb)],r),B.F,v,B.b6,B.j,0,B.p),1)],r)
s=g==null
if(!s)r.push(new A.C(B.aci,A.V(B.em,B.c.j(0.35),v,v,v,v),v))
w=this.aUM(new A.a5(v,66,A.B(r,B.m,v,B.e,B.j,0,v,v),v),t,B.ld,20)
if(s)return w
return A.aI(!1,A.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cna(d,e,f){return this.b0W(d,e,f,null)},
bUq(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.p(m,m,B.h,m,m,new A.o(f,m,m,m,A.a([new A.ab(0,B.G,f,B.J,8)],x.V),m,B.a6),m,9,m,m,m,m,m,9),k=A.d("LIVE ACTIVITY",m,m,m,m,m,m,A.l(m,m,B.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,B.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=B.c.j(0.07),i=A.m(20),h=x.p
i=A.a([A.B(A.a([l,B.a3B,k,B.b8,A.p(m,A.d(""+e.length,m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.h,m,m,new A.o(j,m,m,i,m,m,B.n),m,m,m,m,B.VZ,m,m,m)],h),B.m,m,B.e,B.j,0,m,m),B.P],h)
if(e.length===0)i.push(new A.C(B.V7,A.v(A.a([A.V(B.ho,g,m,m,m,30),B.ar,A.d("Nothing yet",m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.bA,A.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),B.L,m,m)],h),B.m,m,B.e,B.j,0,B.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=A.a([],h)
if(w>0)k.push(new A.lY(1,m,m,m,m,B.c.j(0.07),m))
j=e[w]
v=j.d
u=v===B.eI||v===B.ju
t=u?B.jz:D.eD
g=B.c.j(0.5)
v=new A.b1(12,12)
s=A.a([t.j(0.28),t.j(0.08)],l)
r=new A.ay(t.j(0.35),1,B.r,-1)
v=A.p(B.A,A.V(u?B.t1:B.uL,t,m,m,m,18),B.h,m,m,new A.o(m,m,new A.c1(r,r,r,r),new A.bv(v,v,v,v),m,new A.a3(B.aw,B.aC,B.w,s,m,m),B.n),m,38,m,m,m,m,m,38)
s=C.hIj(j)
q=C.fWC(j.y)
s=A.v(A.a([new A.w(s,m,B.mY,m,m,m,m,B.a2,m,1,m,m),B.bA,new A.w(q,m,new A.F(!0,g,m,m,m,m,11,B.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.F,m,B.e,B.j,0,B.p)
q=t.j(0.14)
p=new A.b1(20,20)
o=u?"-":"+"
n=A.dx(j.c)
q=A.p(m,new A.w(o+"$"+n,m,new A.F(!0,t,m,m,m,m,13,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),B.h,m,m,new A.o(q,m,m,new A.bv(p,p,p,p),m,m,B.n),m,m,m,m,B.nu,m,m,m)
j=C.h2z(j)
k.push(new A.C(F.Vc,new A.cC(B.b0,B.e,B.j,B.m,m,B.p,m,0,A.a([v,B.bd,new A.bH(1,B.br,s,m),A.v(A.a([q,B.d6,new A.w(j,m,new A.F(!0,g,m,m,m,m,10,B.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.dH,m,B.e,B.j,0,B.p)],h),m),m))
B.d.v(i,k)}return this.atP(A.v(i,B.m,m,B.e,B.j,0,B.p),f,B.aY,D.bgL,26)}}
C.ayu.prototype={
S(){return new C.bdZ(null,null)},
cGm(d){return this.z.$1(d)},
cHx(){return this.Q.$0()}}
C.bdZ.prototype={
Z(){var w,v=this,u=null
v.a0()
w=A.bi(u,B.p0,u,1,u,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w
w=A.bi(u,D.bep,u,1,u,v)
w.cF(0)
v.e!==$&&A.aO()
v.e=w
w=A.bi(u,B.uh,u,1,u,v)
v.f!==$&&A.aO()
v.f=w
v.b1Q()},
gb4q(){var w=new A.Q(Date.now(),0,!1)
if(A.m9(w)===6||A.m9(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
b1Q(){var w=this,v=w.a,u=v.e||v.f||w.gb4q()
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
bp(d){this.bC(d)
this.b1Q()},
p(){var w=this,v=w.d
v===$&&A.c()
v.p()
v=w.e
v===$&&A.c()
v.p()
v=w.f
v===$&&A.c()
v.p()
w.boV()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gb4q()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=B.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?B.au:g.x
g=g.r?new C.daL(i):h
v=A.m(32)
s=A.m(32)
r=f?D.cXX:D.cXV
q=A.H((f?D.nW:B.be).j(0.28),B.r,1.4)
p=x.V
o=A.a([new A.ab(0,B.G,(f?B.au:B.b7).j(0.16),B.fF,28)],p)
n=x.p
m=A.a([],n)
if(f)B.d.v(m,A.a([A.an(h,i.a8F(D.nW,130),h,h,h,-24,-30,h),A.an(-36,i.a8F(B.au,140),h,h,-28,h,h,h)],n))
else B.d.v(m,A.a([A.an(h,i.a8F(B.b7,120),h,h,h,-30,-36,h),A.an(-40,i.a8F(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bX(0,A.e1(A.bu(l,new A.en(A.c3(k,new C.daM(i),h),h),B.ao),!0,h),0,0,0))}if(f){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bX(0,A.e1(A.bu(l,new A.en(A.c3(k,new C.daN(i),h),h),B.ao),!0,h),0,0,0))}l=A.m(999)
k=B.c.j(0.06)
j=A.H(B.c.j(0.16),B.r,1)
m.push(A.an(h,new A.d2(D.aRx,A.p(h,A.B(A.a([A.p(h,h,B.h,h,h,new A.o(t,h,h,h,A.a([new A.ab(0,B.G,t.j(0.5),B.J,8)],p),h,B.a6),h,8,h,h,h,h,h,8),B.aa,new A.dm(1,B.ci,A.d(u,h,1,B.a2,h,h,h,D.eHa,h,h,h),h)],n),B.m,h,B.e,B.Q,0,h,h),B.h,h,h,new A.o(k,h,j,l,h,h,B.n),h,h,h,h,B.h8,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.fUX(B.h7,new C.daO(),l)
m.push(C.fUW(new C.daP(i,f,t,e,w),new A.Q(Date.now(),0,!1),j,l))
return A.aI(!1,v,!0,A.dj(h,new A.am(B.W,h,B.a9,B.h,m,h),h,h,B.b9,new A.o(h,h,q,s,o,new A.a3(B.aw,B.aC,B.w,r,h,h),B.n),B.zx,h,392,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
a8F(d,e){var w=null
return A.e1(A.p(w,w,B.h,w,w,new A.o(w,w,w,w,w,new A.bR(B.A,0.5,B.w,w,0,A.a([d.j(0.22),d.j(0)],x.O),w,w),B.a6),w,e,w,w,w,w,w,e),!0,w)}}
C.b7K.prototype={
aUP(d,e,f,g){var w=new A.aQ($.Y().r,B.aq,null,null,A.a([],x.g)),v=e.a,u=e.b,t=u-f
w.E(new A.b5(v,t))
w.E(new A.d0(v,u,v+f,u))
w.E(new A.d0(v,u,v,u+f))
w.E(new A.d0(v,u,v-f,u))
w.E(new A.d0(v,u,v,t))
w.E(new A.bE())
d.aO(w,g)},
a5(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=a8/2,b0=b3.b,b1=b0/2
for(w=a7.b,v=w*6.283185307179586,u=0;u<16;++u){t=B.k.G(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=B.k.G(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+B.o.G(u,3))+u)+1)/2
$.Y()
q=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.1+r*0.5).gq(0)
a7.aUP(b2,new A.u(t*a8,s*b0),2+r*2.2,q)}for(a8=b2.a,b0=w*2,p=a7.e,o=0;o<3;++o){n=B.k.G(b0+o/3,1)
$.Y()
m=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
m.b=B.ae
m.c=1.6
m.r=p.j((1-n)*0.38).gq(0)
l=m.I()
a8.drawCircle(a9,b1,138+n*90,l)
l.delete()}for(b0=a7.d,u=0;u<28;++u){k=B.k.G(w*(1+B.o.G(u,2))+u/28,1)
j=u*2.399963+Math.sin(u*1.7)*0.2
i=113.16+k*(70+B.o.G(u,5)*18)
h=a9+Math.cos(j)*i
g=b1+Math.sin(j)*i*0.96
f=B.k.D(Math.sin(k*3.141592653589793),0,1)
switch(B.o.G(u,4)){case 0:e=B.k.D(Math.abs(Math.cos(k*6.283185307179586*3)),0.28,1)
J.bB(a8.save())
a8.translate(h,g)
a8.scale(e,1)
$.Y()
d=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
d.r=b0.j(f).gq(0)
l=d.I()
a8.drawCircle(0,0,6.5,l)
l.delete()
h=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
h.b=B.ae
h.c=1.2
h.r=p.j(f).gq(0)
l=h.I()
a8.drawCircle(0,0,6.5,l)
l.delete()
if(e>0.6&&f>0.35){h=$.h84()
g=h.b
a0=g.c
g=g.a.c
h.a5(b2,new A.u(-a0/2,-g.gbh(g)/2))}a8.restore()
break
case 1:$.Y()
a0=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
a0.r=p.j(f*0.95).gq(0)
a7.aUP(b2,new A.u(h,g),3+f*3,a0)
break
case 2:$.Y()
a0=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
a0.r=B.c.j(f*0.8).gq(0)
l=a0.I()
a8.drawCircle(h,g,1.6+f*1.8,l)
l.delete()
break
default:a0=Math.cos(j)
a1=Math.sin(j)
a2=7+f*7
$.Y()
a3=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
a3.c=1.8
a3.d=B.bN
a3.r=b0.j(f*0.8).gq(0)
l=a3.I()
a8.drawLine.apply(a8,[h,g,h-a0*a2,g-a1*a2,l])
l.delete()}}for(a4=0;a4<3;++a4){a5=v+a4*6.283185307179586/3
for(a6=0;a6<8;++a6){r=a5-a6*0.09
w=Math.cos(r)
h=Math.sin(r)
o=1-a6/8
$.Y()
g=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
g.r=p.j(o*0.85).gq(0)
l=g.I()
a8.drawCircle(a9+w*144,b1+h*144,1.4+o*2.6,l)
l.delete()}w=Math.cos(a5)
h=Math.sin(a5)
$.Y()
g=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
g.r=b0.j(0.28).gq(0)
g.z=N.mQ
l=g.I()
a8.drawCircle(a9+w*144,b1+h*144,7,l)
l.delete()}},
ar(d){return d.b!==this.b}}
C.b7J.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.Y(),a4=A.L()
a4.r=this.d.j(0.075).gq(0)
for(w=a5.a,v=this.b,u=v*6.283185307179586,t=x.g,a3=a3.r,s=0;s<14;++s){r=u+s*6.283185307179586/14
q=A.a([],t)
p=new A.aQ(a3,B.aq,e,e,q)
o=r-0.14361566416410484
q.push(new A.b5(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new A.ao(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
o=r+0.14361566416410484
q.push(new A.ao(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
q.push(new A.ao(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new A.bE())
n=a4.I()
q=p.gbL().a.snapshot()
w.drawPath((p.e=new A.cE(q)).a,n)
n.delete()}a0=v*2
a2=B.k.G(a0,1)
J.bB(w.save())
w.translate(a2*(d+240)-120,0)
a5.iT(0,0.35)
a2=-a1
a3=A.L()
a3.sap(new A.a3(B.a3,B.a7,B.w,A.a([B.c.j(0),B.c.j(0.07),B.c.j(0)],x.O),e,e).au(0,D.enx))
a5.b2(new A.a9(-18,a2,18,a2+a1*3),a3)
w.restore()
for(a2=a1+40,s=0;s<34;++s){m=B.k.G(Math.abs(Math.sin(s*91.7)*43758.5453),1)
l=B.k.G(v*(1+B.o.G(s,2))+s/34,1)
a3=l*6.283185307179586
u=Math.sin(a3*2+s)
J.bB(w.save())
w.translate(m*d+u*14,l*a2-20)
w.rotate(a3*(2+B.o.G(s,3))*180/3.141592653589793,0,0)
a3=B.k.D(Math.abs(Math.cos(a3*3+s)),0.3,1)
w.scale(1,a3)
if(l<0.08)a3=l/0.08
else a3=l>0.9?(1-l)/0.1:1
k=B.k.D(a3,0,1)
a3=A.bF(D.eo_,B.Q1)
u=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
u.r=D.asY[B.o.G(s,6)].j(k*0.9).gq(0)
n=u.I()
w.drawRRect(A.f7(a3),n)
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
f=D.asY[B.o.G(s+i,6)].j(k)
u=j[i]
t=u.a
u=u.b
$.Y()
q=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
q.c=2
q.d=B.bN
q.r=f.gq(0)
n=q.I()
w.drawLine.apply(w,[t+a3*a1,u+v*a1,t+a3*g,u+v*g,n])
n.delete()
q=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
q.r=f.gq(0)
n=q.I()
w.drawCircle(t+a3*a2,u+v*a2,1.6,n)
n.delete()}a1=j[i]
$.Y()
a2=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
a2.r=B.c.j(k).gq(0)
n=a2.I()
w.drawCircle(a1.a,a1.b,5*d,n)
n.delete()}},
ar(d){return d.b!==this.b}}
C.b7I.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a6.a/2,a1=a6.b/2,a2=new A.u(a0,a1),a3=a0-4,a4=a3-22
$.Y()
w=A.L()
w.b=B.ae
w.c=14
v=e.d
w.r=(v?e.r:B.be).j(0.22).gq(0)
a5.af(a2,a3-7,w)
w=A.L()
w.b=B.ae
w.c=1.7
w.r=(v?e.f:B.c).j(0.28).gq(0)
a5.af(a2,a3-1,w)
w=A.L()
w.b=B.ae
w.c=1.6
w.r=B.c.j(0.16).gq(0)
a5.af(a2,a4+8,w)
u=A.L()
u.c=1.5
u.d=B.bN
u.r=(v?e.f:B.c).j(0.22).gq(0)
for(w=a3-3,t=a3+2,s=a5.a,r=0;r<12;++r){q=r/12*3.141592653589793*2-1.5707963267948966
p=Math.cos(q)
o=Math.sin(q)
n=Math.cos(q)
m=Math.sin(q)
l=u.I()
s.drawLine.apply(s,[a0+p*w,a1+o*w,a0+n*t,a1+m*t,l])
l.delete()}J.bB(s.save())
w=$.Y().r
t=x.g
p=new A.aQ(w,B.aq,d,d,A.a([],t))
p.E(new A.ky(A.bV(a2,a4)))
a5.tk(0,p)
p=A.bV(a2,a4)
o=A.L()
o.sap(D.dW1.au(0,A.bV(a2,a4)))
a5.b2(p,o)
k=B.k.D(e.b,0,1)
if(k>0.004){a1+=a4
j=a1-a4*2*k
i=v?5.2:1.8
t=A.a([],t)
h=new A.aQ(w,B.aq,d,d,t)
g=a0-a4
a1+=4
h.E(new A.b5(g,a1))
for(w=a0+a4,p=e.c*3.141592653589793,o=p*2,p*=2.2,n=i*0.42;g<=w;g+=3){m=(g-a0)/a4*3.141592653589793
m=new A.ao(g,j+Math.sin(m*2+o)*i+Math.sin(m*3.1-p)*n)
t.push(m)
f=h.f
if(f!=null)m.by(f)
m=h.e
if(m!=null)m.a.delete()
h.e=null}h.E(new A.ao(w,a1))
h.E(new A.bE())
$.Y()
a0=A.L()
a1=x.O
w=e.e
a1=v?A.a([e.f.j(0.55),w.j(0.78),e.r.j(0.92)],a1):A.a([w.j(0.22),D.eD.j(0.34),B.cY.j(0.62)],a1)
a0.sap(new A.a3(B.aY,B.b1,B.w,a1,d,d).au(0,A.bV(a2,a4)))
a5.aO(h,a0)
a0=A.L()
a0.b=B.ae
a0.c=2
a0.r=B.c.j(v?0.28:0.14).gq(0)
a5.aO(h,a0)}s.restore()},
ar(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.ayw.prototype={
S(){var w=$.av()
return new C.ayx(new A.ap(B.as,w),new A.ap(B.as,w))},
bbj(d,e){return this.w.$2$cloudRequest(d,e)}}
C.ayx.prototype={
p(){var w=this.d,v=$.av()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
lA(d){var w=null,v=this.c
if(v==null)return
v.H(x.q).f.P(A.b0(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
coT(d){this.a.bbj(d,!0)
this.lA("Deposit submitted. Admin will review your payment proof.")
this.n(new C.dbb())},
cnF(){var w,v,u=this,t=A.d9(u.d.a.a)
if(t==null||t<=0){u.lA("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
A.hm(w,new C.an9(v.d,t,u.gcoS(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cv1(){var w,v,u,t,s=this,r=s.d,q=A.d9(r.a.a)
if(q==null||q<=0){s.lA("Enter an amount to withdraw.")
return}if(q<10){s.lA("Minimum withdrawal is $"+A.dx(10)+".")
return}w=s.a.d.d
if(q>w){s.lA("Insufficient balance. You have $"+A.dx(w)+".")
return}w=s.e
v=C.h3X(w.a.a)
if(v.length===0){s.lA("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.bbj(new A.cZ("wd_"+1000*Date.now(),s.a.d.a,q,B.eI,B.kc,"Withdrawal to $"+v+" \u2014 Fee: $"+A.dx(u)+" \u2014 You receive: $"+A.dx(q-u),null,null,B.dp,new A.Q(Date.now(),0,!1)),!0)
s.lA("Withdrawal submitted \u2014 waiting for admin approval.")
r.bJ(0,B.c0)
w.bJ(0,B.c0)
s.n(new C.dbc())},
cs1(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,A.K)(w),++s){r=w[s]
if(r.x!==B.cf||!this.aRG(r)||A.fJE(r))continue
q=r.d
p=q===B.eI||q===B.ju||q===B.ei
q=r.c
if(p)t+=q
else u+=q}return new A.bkQ(u,t)},
B(d){var w,v,u,t=this,s=null,r=t.cs1(),q=t.a.r,p=new A.a4(q,new C.dbd(),A.U(q).k("a4<1>")).gJ(0)
q=t.a
w=q.c
q=q.x
v=A.a([D.eD.j(0.24),B.M.j(0.72)],x.O)
u=A.H(D.eD.j(0.38),B.r,1)
q=A.bJS(!1,w,"WALLET",A.hq(A.aI(!1,s,!0,A.p(B.A,A.V(U.agZ,D.eD,s,s,s,18),B.h,s,s,new A.o(s,s,u,s,s,new A.a3(B.aw,B.aC,B.w,v,s,s),B.a6),s,40,s,s,s,s,s,40),B.cH,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),s,"Back up wallet",s,s))
v=t.bwi(r.a,r.b,p)
u=x.p
w=A.B(A.a([t.an1(B.uL,"Deposit",0),t.an1(B.t1,"Withdraw",1),t.an1(B.fX,"History",2)],u),B.m,s,B.qC,B.j,0,s,s)
return A.ec(A.bq(!1,A.ci(A.v(A.a([q,B.bu,v,B.d3,w,B.d3,A.qm(t.f===2?t.bRC():t.bWX(),B.i2,A.ti(),B.b9,B.b9,A.a_I())],u),B.ag,s,B.e,B.j,0,B.p),B.q,s,B.z,s,D.biE,s,s,B.ak),!0,!1,B.aj,!0,!0),B.z6,!0)},
bwi(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.a.i(i.a.e)
if(B.a.t(g,"@")){w=B.a.cP(g,"@")
v=B.a.am(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+B.a.aX(g,w)}else v=g
w=A.m(26)
u=A.an(h,i.avX(220,0.1),h,h,h,-60,-70,h)
t=A.an(-90,i.avX(200,0.07),h,h,h,30,h,h)
s=A.an(-60,i.avX(150,0.05),h,h,-40,h,h,h)
r=A.m(26)
r=A.bX(0,A.bT(h,new A.o(h,h,A.H(B.c.j(0.18),B.r,1),r,h,h,B.n),B.bb),0,0,0)
q=A.m(6)
p=x.p
q=A.B(A.a([A.p(h,A.b2(h,h,h,new C.b7a(h),B.at),B.h,h,h,new A.o(h,h,h,q,h,D.bIy,B.n),h,28,h,h,h,h,h,38),B.b8,D.fb1],p),B.m,h,B.e,B.j,0,h,h)
o=A.d("Available balance",h,h,h,h,h,h,A.l(h,h,B.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,B.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=A.eZ(B.a3,C.anT(new C.daY(i),D.eMg,i.a.d.a),B.h,B.eb)
m=A.a([A.D(i.aKD(B.uz,"In",d),1),A.D(i.aKD(B.wV,"Out",e),1)],p)
if(f>0){l=B.cO.j(0.22)
k=A.m(99)
j=A.H(B.iy.j(0.6),B.r,1)
m.push(A.p(h,A.d(""+f+" pending",h,h,h,h,h,h,D.eI4,h,h,h),B.h,h,h,new A.o(l,h,j,k,h,h,B.n),h,h,h,h,B.nu,h,h,h))}return new A.fD(1.62,A.bu(w,new A.am(B.W,h,B.a9,B.q,A.a([D.dVh,u,t,s,r,new A.C(A5.qj,A.v(A.a([q,B.b8,o,B.bA,n,B.b8,A.B(m,B.m,h,B.e,B.j,0,h,h),B.ar,A.d(v,h,1,B.a2,h,h,h,A.l(h,h,B.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,B.a4,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),B.F,h,B.e,B.j,0,B.p),h)],p),h),B.ao),h)},
avX(d,e){var w=null
return A.p(w,w,B.h,w,w,new A.o(w,w,A.H(B.c.j(e),B.r,22),w,w,w,B.a6),w,d,w,w,w,w,w,d)},
aKD(d,e,f){var w=null,v=B.c.j(0.16)
return A.B(A.a([A.p(w,A.V(d,B.c,w,w,w,13),B.h,w,w,new A.o(v,w,w,w,w,w,B.a6),w,22,w,w,w,w,w,22),B.bo,new A.dm(1,B.ci,A.eZ(B.a3,A.d(e+"  $"+A.dx(f),w,w,w,w,w,w,B.qW,w,w,w),B.h,B.eb),w)],x.p),B.m,w,B.e,B.j,0,w,w)},
an1(d,e,f){var w=null,v=this.f===f,u=v?D.bJV:new A.a3(B.a3,B.a7,B.w,A.a([B.c.j(0.08),B.c.j(0.03)],x.O),w,w),t=A.H(v?B.c.j(0.6):D.eD.j(0.25),B.r,1),s=v?A.a([new A.ab(0,B.G,B.au.j(0.45),B.J,18)],x.V):w
u=A.dj(w,A.V(d,v?D.a8f:D.eD,w,w,w,26),w,w,B.co,new A.o(w,w,t,w,s,u,B.a6),B.DG,w,62,w,w,w,w,62)
return A.aH(B.c5,new A.a5(92,w,A.v(A.a([u,D.eu5,A.d(e,w,w,w,w,w,w,A.l(w,w,v?B.c:B.aP,w,w,w,w,w,w,w,w,12.5,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.daX(this,f),w,w,w,w,w,w,!1,B.ad)},
bWX(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=A.d9(a1.a.a)
if(a2==null)a2=0
w=a0?D.eD:B.cC
v=a2>0
u=new C.db8(e,w)
t=new C.db7()
s=e.f
r=A.m(26)
q=x.O
p=A.a([w.j(0.1),B.rv,B.rv],q)
o=A.H(w.j(0.22),B.r,1)
n=x.V
m=A.a([new A.ab(0,B.G,B.x.j(0.35),B.eP,22)],n)
l=w.j(0.15)
l=A.p(d,A.V(a0?B.uL:B.t1,w,d,d,d,18),B.h,d,d,new A.o(l,d,d,d,d,d,B.a6),d,34,d,d,d,d,d,34)
k=A.D(A.d(a0?"Add money":"Take money out",d,d,d,d,d,d,B.fR,d,d,d),1)
j=B.c.j(0.06)
i=A.m(99)
h=x.p
i=A.B(A.a([l,B.ax,k,A.p(d,A.B(A.a([A.V(B.hT,w,d,d,d,14),A.d("Cash App",d,d,d,d,d,d,A.l(d,d,B.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,B.I,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),B.m,d,B.e,B.Q,0,d,d),B.h,d,d,new A.o(j,d,d,i,d,d,B.n),d,d,d,d,B.kz,d,d,d)],h),B.m,d,B.e,B.j,0,d,d)
l=A.d("$",d,d,d,d,d,d,A.l(d,d,v?w:B.c2,d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=A.a([new A.tG(A.ae("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=A.B(A.a([new A.C(B.ir,l,d),B.d5,A.aT_(new A.d2(D.aRP,A.aK(d,B.U,!1,d,!0,B.q,d,A.aL(),a1,w,d,d,d,d,2,A.bn(d,B.et,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,A.l(d,d,B.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),B.z,!0,d,!0,d,!1,d,B.ah,d,d,k,d,d,B.dX,d,d,d,1,d,d,!1,"\u2022",d,new C.db6(e),d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,D.eOU,!0,B.L,d,B.am,d,d,d,d),d),d)],h),B.F,d,B.b6,B.j,0,d,d)
a1=v?120:60
a1=A.au(A.dj(d,d,d,d,B.b9,new A.o(d,d,d,A.m(99),d,new A.a3(B.a3,B.a7,B.w,A.a([w.j(0),w,w.j(0)],q),d,d),B.n),B.a1,d,3,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+A.dx(10)+" \xb7 admin sends it to your Cash App."
q=A.d(q,d,d,d,d,d,d,A.l(d,d,B.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,B.a4,d,1.35,!0,d,d,d,d,d,d,d,d),B.L,d,d)
l=A.a([],h)
j=a0?D.bNC:D.c1f
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=A.a([i,B.bu,k,B.ar,a1,B.P,q,B.ay,A.B(l,B.m,d,B.e,B.j,0,d,d)],h)
if(!a0){q=B.c.j(0.04)
l=A.V(B.hT,w,d,d,d,d)
k=A.l(d,d,B.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,B.O,d,d,!0,d,d,d,d,d,d,d,d)
l=A.a([B.ay,A.aK(d,B.U,!1,d,!0,B.q,d,A.aL(),e.e,d,d,d,d,d,2,A.bn(d,d,d,d,d,d,d,d,!0,new A.b3(4,A.m(16),new A.ay(B.c.j(0.08),1,B.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new A.b3(4,A.m(16),new A.ay(w,1,B.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),B.z,!0,d,!0,d,!1,d,B.ah,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,B.mX,!0,B.a5,d,B.am,d,d,d,d)],h)
if(v){q=B.c.j(0.04)
k=A.m(16)
B.d.v(l,A.a([B.ab,A.p(d,A.v(A.a([t.$2("Amount","$"+A.dx(a2)),t.$3$color("Fee (15%)","\u2212 $"+A.dx(a2*0.15),B.fj),A.jn(B.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+A.dx(a2*0.85),!0,D.eD)],h),B.m,d,B.e,B.j,0,B.p),B.h,d,d,new A.o(q,d,d,k,d,d,B.n),d,d,d,d,B.iK,d,d,d)],h))}B.d.v(a1,l)}a1.push(B.aO)
q=A.m(18)
l=a0?B.Ol:P.anN
n=A.a([new A.ab(0,B.G,(a0?B.aW:B.e4).j(0.45),B.dn,18)],n)
k=a0?e.gcnE():e.gcv0()
j=A.V(a0?B.Xk:B.l0,d,d,d,d,20)
if(a0)i=v?"Deposit $"+A.dx(a2):"Deposit funds"
else i=v?"Withdraw $"+A.dx(a2):"Request withdrawal"
a1.push(new A.a5(d,54,A.bT(A.lg(j,A.d(i,d,d,d,d,d,d,B.ow,d,d,d),k,A.fh(d,d,B.K,d,d,d,d,d,d,B.c,d,d,d,B.K,new A.b6(A.m(18),B.X),d,d,d,d,d)),new A.o(d,d,d,q,n,new A.a3(B.a3,B.a7,B.w,l,d,d),B.n),B.bb),d))
return A.p(d,A.v(a1,B.ag,d,B.e,B.j,0,B.p),B.h,d,d,new A.o(d,d,o,r,m,new A.a3(B.aY,B.b1,B.w,p,B.NU,d),B.n),d,d,new A.cx("form"+s,x.W),d,B.zN,d,d,d)},
bRC(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=A.U(a2).k("a4<1>"),a4=A.z(new A.a4(a2,new C.db0(a0),a3),a3.k("G.E"))
B.d.aZ(a4,new C.db1())
w=B.a.i(a0.a.e.toLowerCase())
a2=A.T(x.N,x.o)
a3=$.ffp
a3=a3==null?a1:a3.$0()
a3=J.aV(a3==null?B.hY:a3)
while(a3.C()){v=a3.gT(a3)
u=v.a
if(u.length!==0&&B.a.i(v.b.toLowerCase())===w)a2.m(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,A.K)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.m(0,u,s)}a3=a2.$ti.k("bg<2>")
a2=A.z(new A.bg(a2,a3),a3.k("G.E"))
r=C.hIS(a2,A.Jy(a0.a.e,new C.db2(a0)))
a2=A.m(24)
a3=A.H(B.c.j(0.07),B.r,1)
v=A.m(99)
u=A.m(99)
q=x.p
u=A.a([A.B(A.a([D.bn6,A.aI(!1,v,!0,A.p(a1,D.eoJ,B.h,a1,a1,new A.o(a1,a1,A.H(D.eD.j(0.4),B.r,1),u,a1,a1,B.n),a1,a1,a1,a1,B.lX,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.db3(a0),a1,a1,a1,a1,a1,a1,a1)],q),B.m,a1,B.e,B.j,0,a1,a1),B.T],q)
if(a4.length===0)u.push(new A.C(D.bfm,A.v(A.a([A.V(B.Eg,B.c.j(0.25),a1,a1,a1,40),B.T,D.f7T],q),B.m,a1,B.e,B.j,0,B.p),a1))
else{v=A.a([],q)
for(p=A.df(a4,0,A.dK(a0.r,"count",x.S),A.U(a4).c),o=p.$ti,p=new A.bU(p,p.gJ(0),o.k("bU<ai.E>")),o=o.k("ai.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===B.eI||k===B.ju||k===B.ei
if(l===B.cf)i=j?B.cF:D.eD
else i=l===B.dp?B.iy:B.fP
h=j?"-":"+"
l=B.c.j(0.06)
k=i.j(0.14)
g=new A.ay(i.j(0.4),1,B.r,-1)
k=A.p(a1,A.V(j?B.t1:B.uL,i,a1,a1,a1,19),B.h,a1,a1,new A.o(k,a1,new A.c1(g,g,g,g),a1,a1,a1,B.a6),a1,42,a1,a1,a1,a1,a1,42)
f=a0.bLx(n)
e=C.fWC(n.y)
d=B.c.j(0.5)
f=A.a([new A.w(f,a1,B.jU,a1,a1,a1,a1,a1,a1,a1,a1,a1),B.bA,new A.w(e,a1,new A.F(!0,d,a1,a1,a1,a1,11,B.a4,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1)],q)
e=n.f
if(B.a.i(e==null?"":e).length!==0){e.toString
d=B.c.j(0.4)
f.push(new A.w(e,a1,new A.F(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,B.a2,a1,1,a1,a1))}if(m!=null&&n.x!==B.jV)f.push(new A.C(E.acs,new A.Eh(B.bJ,5,4,B.bx,A.a([a0.aJz("Before",m.b),a0.aJz("After",m.a)],q),a1),a1))
m=A.v(f,B.F,a1,B.e,B.j,0,B.p)
f=n.c
f=f===0?"\u2014":h+"$"+A.dx(f)
e=i.j(0.14)
d=new A.b1(99,99)
n=C.h2z(n)
v.push(A.p(a1,new A.cC(B.b0,B.e,B.j,B.m,a1,B.p,a1,0,A.a([k,B.bd,new A.bH(1,B.br,m,a1),B.aa,A.v(A.a([new A.w(f,a1,new A.F(!0,i,a1,a1,a1,a1,15,B.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.av,A.p(a1,new A.w(n,a1,new A.F(!0,i,a1,a1,a1,a1,9.5,B.I,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.h,a1,a1,new A.o(e,a1,a1,new A.bv(d,d,d,d),a1,a1,B.n),a1,a1,a1,a1,B.zT,a1,a1,a1)],q),B.dH,a1,B.e,B.j,0,B.p)],q),a1),B.h,a1,a1,new A.o(a1,a1,new A.c1(B.X,B.X,new A.ay(l,1,B.r,-1),B.X),a1,a1,a1,B.n),a1,a1,a1,a1,B.ws,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(A.hh(D.bAy,A.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,B.ce,a1,a1,a1),new C.db4(a0),A.fo(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.eD,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
B.d.v(u,v)}return A.p(a1,A.v(u,B.ag,a1,B.e,B.j,0,B.p),B.h,a1,a1,new A.o(B.rv,a1,a3,a2,a1,a1,B.n),a1,a1,D.fei,a1,D.bhx,a1,a1,a1)},
aJz(d,e){var w=null,v=B.c.j(0.05),u=A.m(7),t=A.H(B.c.j(0.1),B.r,1),s=A.dl(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=A.dx(e)
return A.p(w,A.VW(A.dl(A.a([s,A.dl(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.eMq,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.nt,w,w,w)},
aRG(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(B.a.t(w,"clock-in session started"))return!1
v=d.d
if(v===B.ei)return d.c>0
if(A.rf(d))return!1
if(v===B.fl||v===B.eI)return!0
if(v===B.nP||v===B.ju)return!0
if(v===B.jW)return!0
if(v===B.fu)return B.a.t(w,"clock-in")||d.c>0
return!1},
bLx(d){var w,v=d.f
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
C.b7a.prototype={
a5(d,e){var w,v,u,t
$.Y()
w=A.L()
w.r=D.b0H.j(0.55).gq(0)
w.c=1
v=e.a
u=v*0.35
t=e.b
d.bE(new A.u(u,0),new A.u(u,t),w)
u=v*0.65
d.bE(new A.u(u,0),new A.u(u,t),w)
t*=0.5
d.bE(new A.u(0,t),new A.u(v,t),w)},
ar(d){return!1}}
C.brr.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null
for(w=a4.b,v=this.b,u=v*6.283185307179586,t=a4.a,s=0+t,r=x.O,q=a3.a,p=0;p<3;++p){o=w*(0.2+0.25*p)+Math.sin(u+p*2)*14-40
n=new A.a9(0,o,s,o+80)
m=[B.b7,B.h3,B.bq][p]
$.Y()
o=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
o.sap(new A.a3(B.aY,B.b1,B.w,A.a([m.j(0),m.j(0.1),m.j(0)],r),a2,a2).au(0,n))
l=o.I()
q.drawRect(A.c9(n),l)
l.delete()}for(k=0;k<46;++k){s=k*12.9898
j=Math.sin(s+78.233)*43758.5453
j=(j-Math.floor(j))*t
i=Math.sin(s+156.466)*43758.5453
h=(i-Math.floor(i))*w
g=0.25+0.75*(0.5+0.5*Math.sin(u*(1+B.o.G(k,3))+k))
i=Math.sin(s+234.699)*43758.5453
s=Math.floor(i)
$.Y()
r=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.55*g).gq(0)
l=r.I()
q.drawCircle(j,h,0.7+(i-s)*1.5,l)
l.delete()
if(B.o.G(k,9)===0){f=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
f.r=B.o0.j(0.35*g).gq(0)
f.c=1
l=f.I()
q.drawLine.apply(q,[j-4,h,j+4,h,l])
l.delete()
l=f.I()
q.drawLine.apply(q,[j,h-4,j,h+4,l])
l.delete()}}for(u=-t*0.35,s=w*0.2,r=t*0.08,o=-w*0.02,v*=2,k=0;k<2;++k){f=B.k.G(v+k*0.5,1)
if(f>0.35)continue
p=f/0.35
e=t*(0.75-k*0.4)+u*p
d=w*(0.1+k*0.12)+s*p
$.Y()
a0=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
a0.r=B.c.j(0.7*(1-p)).gq(0)
a0.c=1.6
a0.d=B.bN
l=a0.I()
q.drawLine.apply(q,[e+r,d+o,e,d,l])
l.delete()}for(u=t*0.62,w*=0.36,k=0;k<4;++k){f=B.k.G(v+k*0.25,1)
t=B.o0.j(0.5*Math.sin(f*3.141592653589793))
a1=new A.l3(new A.es("z",a2,a2,B.cW,a2,a2,a2,a2,a2,a2,new A.F(!0,t,a2,a2,a2,a2,12+f*14,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),B.a5,B.cm,new A.k4(1),a2,a2,a2,a2,B.cj,a2)
a1.fe()
a1.a5(a3,new A.u(u+Math.sin(f*6.283185307179586+k)*12+k*8,w-f*90))}},
ar(d){return d.b!==this.b}}
C.aHU.prototype={
aP(){this.aW()
this.aV()
this.dD()},
p(){var w=this,v=w.b_$
if(v!=null)v.a1(0,w.gdB())
w.b_$=null
w.a2()}}
C.btm.prototype={}
C.aWS.prototype={}
C.Yt.prototype={
S(){return new C.aAV(new A.ap(B.as,$.av()))},
cII(d,e){return this.d.$2(d,e)}}
C.aAV.prototype={
p(){var w=this.d
w.R$=$.av()
w.O$=0
this.a2()},
aUT(){var w=this,v=B.a.i(w.d.a.a),u=A.ae("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.n(new C.dWf(w))
return}u=w.c
u.toString
A.a8(u,!1).M(null)
w.a.cII(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=A.aG(a0,B.es,e).w
e=A.aG(a0,B.e3,e).w
w=A.au(A.p(f,f,B.h,f,f,new A.o(B.ba,f,f,A.m(2),f,f,B.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=A.B(A.a([A.p(f,D.bzX,B.h,f,f,new A.o(f,f,f,f,A.a([new A.ab(0,B.G,B.fc.j(0.5),B.J,18)],v),D.ajx,B.a6),f,52,f,f,f,f,f,52),B.er,A.D(A.v(A.a([D.eXx,B.bA,A.d(g.a.c,f,1,B.a2,f,f,f,B.ov,f,f,f)],u),B.F,f,B.e,B.j,0,B.p),1),A.aF(f,f,f,f,D.bAM,f,f,f,new C.dWi(a0),f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,f,f)
s=g.b0F(B.eN,"You",B.cC)
r=B.aL.j(0.15)
q=A.m(99)
q=A.B(A.a([s,new A.C(B.lo,A.p(f,D.f0b,B.h,f,f,new A.o(r,f,A.H(B.aL.j(0.6),B.r,1),q,f,f,B.n),f,f,f,f,B.fK,f,f,f),f),g.b0F(B.uH,"Your friend",B.bU)],u),B.m,f,B.e,B.j,0,f,f)
r=B.c.j(0.06)
s=A.m(16)
p=B.c.j(0.12)
o=A.m(16)
n=g.f
if(n.length===0)n=f
o=A.aK(f,B.U,!0,f,!0,B.q,f,A.aL(),g.d,f,f,f,f,f,2,A.bn(f,f,f,f,f,f,f,f,!0,new A.b3(4,s,new A.ay(p,1,B.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new A.b3(4,o,D.aQE),f,f,f,f,f,f,f,f,N.C0,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.bD7,f,f,f,f,f,f,f,f,f,f,f,f),B.z,!0,f,!0,f,!1,f,B.ah,f,f,f,f,f,B.lG,f,f,f,1,f,f,!1,"\u2022",f,new C.dWj(g),f,new C.dWk(g),f,!1,f,f,!1,f,!0,f,B.a8,f,f,f,f,f,f,f,f,f,f,f,B.iC,!0,B.a5,f,B.am,f,f,f,f)
r=A.a([],u)
for(m=0;m<4;++m){l=D.bXi[m]
s=new A.b1(14,14)
p=g.e===l
n=p?D.ajw:f
p=p?f:B.c.j(0.06)
k=new A.ay(g.e===l?B.aA:B.bG,1,B.r,-1)
j=""+l
i=l===1?"game":"best of "+j
h=B.c.j(0.7)
s=A.a([new A.bH(1,B.br,A.aH(f,A.dj(f,A.v(A.a([new A.w(j,f,B.dQ,f,f,f,f,f,f,f,f,f),new A.w(i,f,new A.F(!0,h,f,f,f,f,10,B.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,B.p),f,f,B.b9,new A.o(p,f,new A.c1(k,k,k,k),new A.bv(s,s,s,s),f,n,B.n),B.eK,f,f,f,B.eY,f,f,f),B.z,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.dWl(g,l),f,f,f,f,f,f,!1,B.ad),f)],u)
if(l!==7)s.push(B.aa)
B.d.v(r,s)}s=A.B(r,B.m,f,B.e,B.j,0,f,f)
r=A.B(A.a([A.V(B.l_,B.c.j(0.5),f,f,f,15),B.bo,A.D(A.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,A.l(f,f,B.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),B.m,f,B.e,B.j,0,f,f)
p=A.m(18)
v=A.a([new A.ab(0,B.G,B.by.j(0.4),B.cs,18)],v)
n=g.e
j=n===1?"":"s"
return new A.C(new A.N(0,0,0,d.f.d+e.r.d),A.p(f,A.v(A.a([w,B.aO,t,B.bu,q,B.bu,D.f3N,B.ar,o,B.aO,D.f7H,B.P,s,B.ay,r,B.aO,new A.a5(f,54,A.bT(A.hh(D.ahP,A.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,B.fR,f,f,f),g.gc0l(),f),new A.o(f,f,f,p,v,D.bIL,B.n),B.bb),f)],u),B.ag,f,B.e,B.Q,0,B.p),B.h,f,f,D.aSC,f,f,f,f,D.biR,f,f,f),f)},
b0F(d,e,f){var w=null,v=f.j(0.1),u=A.m(16),t=A.H(f.j(0.45),B.r,1)
return A.D(A.p(w,A.v(A.a([A.V(d,f,w,w,w,24),B.av,A.d(e,w,w,w,w,w,w,B.a4H,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eY,w,w,w),1)}}
C.oB.prototype={}
C.bmv.prototype={
a5(d,e){var w,v,u,t,s,r=null,q=e.a/2,p=new A.u(q,e.b/2),o=q-4
for(q=d.a,w=0;w<37;++w){$.Y()
v=new A.as(B.Y,B.V,B.a_,B.a0,B.Z)
if(w===0)u=B.bm
else u=(w&1)===0?B.bQ:B.M
v.r=u.gq(0)
u=A.bV(p,o)
t=v.I()
q.drawArc.apply(q,[A.c9(u),(w*2*3.141592653589793/37-1.5707963267948966)*57.29577951308232,9.72972972972973,!0,t])
t.delete()}$.Y()
q=A.L()
q.r=B.h5.gq(0)
q.b=B.ae
q.c=8
d.af(p,o,q)
q=A.L()
q.r=B.aL.gq(0)
d.af(p,o*0.22,q)
q=this.b
if(q!=null){s=A.io(r,r,r,r,A.dl(r,r,r,r,r,r,r,r,r,B.aKV,A.t(q)),B.a5,B.cm,r,B.en,B.cj)
s.fe()
q=s.b
u=q.c
q=q.a.c
s.a5(d,p.aD(0,new A.u(u/2,q.gbh(q)/2)))}},
ar(d){return d.b!=this.b}}
C.Dr.prototype={
a3(){return"NgmyProMoveResult."+this.b}}
C.aon.prototype={
gjB(){var w=this.d
w=w==null?null:w.a
return w!==!1},
biC(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.fC2("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.bSp()
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
s.aTx(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.ayy.h(0,d)
s.c=w==null?"Play to earn":w}},
b5b(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gjB()
if(o)return
o=x.N
s.x=A.a_(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b4(w,new C.c8i(),o)
v=A.z(v,v.$ti.k("ai.E"))
s.at=v
if(v.length<9){v=A.z(v,o)
B.d.v(v,A.bZ(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=B.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===B.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.csz(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.anx(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b4(t,new C.c8j(),x.L)
o=A.z(o,o.$ti.k("ai.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)B.d.K(v,A.bZ(7,0,!1,o))}if(A.iz(e.h(0,q)))o=A.e7(e.h(0,q))
else{o=A.c4(A.t(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.byr(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.anx(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b4(t,new C.c8k(),x.L)
o=A.z(o,o.$ti.k("ai.E"))
s.y=o}if(A.iz(e.h(0,p)))o=A.e7(e.h(0,p))
else{o=A.c4(A.t(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bzF(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.anx(e,f)
break}},
cCB(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=A.a_(w.x,q,p)
switch(d){case"tic_tac_go":o.m(0,"ttt",A.bj(w.at,!0,q))
o.m(0,"turnEmail",w.ay1())
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
q=A.z(new A.J(q,new C.c8m(),p),p.k("ai.E"))
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
q=A.z(new A.J(q,new C.c8n(),p),p.k("ai.E"))
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
ay1(){var w,v,u,t=this
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
anx(d,e){var w,v=this,u=B.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
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
csz(d,e){var w,v,u,t,s,r="playerXEmail"
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
byr(d,e){var w,v,u,t,s
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
bzF(d,e){var w,v,u,t,s,r,q
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
RS(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gjB())return s
w=B.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return B.a.i(J.k(s==null?u.ay1():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
bSp(){var w,v,u=this,t=J.e_(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=A.ii(8,new C.c8f(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
aTx(d){var w=20+d.aB(80),v=w+10+d.aB(50),u=4+d.aB(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bJ(0,B.c0)},
cLY(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gjB())w=1
else{v=r.d
v=v==null?null:v.d
w=r.RS(q,v==null?"":v)?r.z:-1}if(!r.gjB()){v=r.d
v=v==null?null:v.d
v=!r.RS(q,v==null?"":v)}else v=!1
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
return!1}if(Math.abs(d-v)===1&&Math.abs(e-s)===1&&t===0&&B.o.G(d+e,2)===1){J.aE(r.y[d],e,r.z)
J.aE(r.y[v],s,0)
r.as=r.Q=null
r.z=r.z===1?2:1
if(r.a6B(2)){r.a87(1)
return!0}if(r.a6B(1)){r.a87(2)
return!0}if(r.gjB()&&r.z===2){r.buy(f)
if(r.a6B(2)){r.a87(1)
return!0}if(r.a6B(1)){r.a87(2)
return!0}}}return!1},
a87(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
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
buy(d){var w,v,u,t,s,r,q,p,o,n=this,m=A.a([],x.B)
for(w=x.t,v=0;v<8;++v)for(u=0;u<8;++u){if(J.q(n.y[v],u)!==2)continue
for(t=[A.a([1,-1],w),A.a([1,1],w)],s=0;s<2;++s){r=t[s]
q=v+r[0]
p=u+r[1]
if(q>=0&&q<8&&p>=0&&p<8&&J.q(n.y[q],p)===0&&B.o.G(q+p,2)===1)m.push(A.a([v,u,q,p],w))}}w=m.length
if(w===0)return
o=m[d.aB(w)]
J.aE(n.y[o[2]],o[3],2)
J.aE(n.y[o[0]],o[1],0)
n.z=1},
a6B(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)for(t=J.aV(w[u]);t.C();)if(t.gT(t)===d)return!1
return!0},
cLZ(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.pn
if(!s.gjB()){w=s.d
w=w!=null&&!s.RS("tic_tac_go",w.d)}else w=!1
if(w)return D.pn
if(s.gjB())v="X"
else{w=B.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===B.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.agd(v))return s.aOB(v,!0)
if(!B.d.t(s.at,""))return s.aOC()
s.ax=!s.ax
if(!s.gjB()){s.x.m(0,"turnEmail",s.ay1())
s.c=s.aT5()
return D.pn}if(s.gjB()){t=s.cb5(e)
if(t>=0){s.at[t]="O"
if(s.agd("O"))return s.aOB("O",!1)
if(!B.d.t(s.at,""))return s.aOC()
s.ax=!0}}s.c=s.gjB()?"Your turn \u2014 you are X":s.aT5()
return D.pn},
aT5(){var w=this.d
if(w==null)return"Take your turn"
return this.RS("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aOB(d,e){var w,v,u=this
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
return e?D.po:D.Gf},
aOC(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.Pg},
cb5(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.agd("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.agd("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.cJ8[u]
if(v[w].length===0)return w}return-1},
agd(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.cQ6[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a12(d){return B.d.cG(d,0,new C.c8l())},
cwA(d){this.ay.push(1+d.aB(10))
if(this.a12(this.ay)>21)return!0
return!1},
cwB(d){var w,v,u,t=this
while(t.a12(t.ch)<17)t.ch.push(1+d.aB(10))
t.CW=!0
w=t.a12(t.ay)
v=t.a12(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cC3(d,e){var w,v,u,t=this
if(t.e)return D.pn
if(!t.gjB()){w=t.d
w=w!=null&&!t.RS("connect_four_pro",w.d)}else w=!1
if(w)return D.pn
if(t.gjB())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.pn
if(!t.adn(d,w))return D.pn
if(t.a6r(t.fx))return t.aOz(t.fx,!0)
if(t.aKn())return t.aOA()
w=t.fx===1?2:1
t.fx=w
if(t.gjB()&&w===2){u=t.cau(e)
if(u>=0){t.adn(u,2)
if(t.a6r(2))return t.aOz(2,!1)
if(t.aKn())return t.aOA()
t.fx=1}}t.c=t.gjB()?"Your turn \u2014 drop a red disc":t.byq()
return D.pn},
byq(){var w=this.d
if(w==null)return"Drop a disc"
return this.RS("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
adn(d,e){var w
for(w=5;w>=0;--w)if(J.q(this.fr[w],d)===0){J.aE(this.fr[w],d,e)
return!0}return!1},
aKn(){for(var w=0;w<7;++w)if(J.q(this.fr[0],w)===0)return!1
return!0},
aOz(d,e){var w,v,u,t=this
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
return e?D.po:D.Gf},
aOA(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.Pg},
cau(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.adn(w,2)
v=r.a6r(2)
r.b2U(w)
if(v)return w}for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.adn(w,1)
u=r.a6r(1)
r.b2U(w)
if(u)return w}t=A.a([],x.t)
for(w=0;w<7;++w)if(J.q(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aB(s)]},
b2U(d){var w
for(w=0;w<6;++w)if(J.q(this.fr[w],d)!==0){J.aE(this.fr[w],d,0)
return}},
a6r(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.q(this.fr[w],v)!==d)continue
if(this.bys(w,v,d))return!0}return!1},
bys(d,e,f){var w,v,u,t=new C.c8e(this,d,e,f)
for(w=x.t,w=[A.a([0,1],w),A.a([1,0],w),A.a([1,1],w),A.a([1,-1],w)],v=0;v<4;++v){u=w[v]
if(t.$2(u[0],u[1])+t.$2(-u[0],-u[1])-1>=4)return!0}return!1},
b64(d){var w=this
if(B.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.aTx(d)}return w.a>=w.b}}
C.apg.prototype={
S(){return new C.aBG(null,null)},
cHB(d){return this.e.$1(d)}}
C.aBG.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,D.bes,null,1,null,v)
w.f1(0,!0)
v.d=w
v.a.d.aJ(0,v.gaVk())
v.au5()},
bp(d){var w
this.bC(d)
w=this.a
if(d.c!==w.c){w.d.bJ(0,B.c0)
this.au5()}},
au5(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.af6(t,u)
C.af6(t,u)
w.a.cHB(s)
w.a.toString
w.n(new C.eqW())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
p(){var w,v=this
v.a.d.a1(0,v.gaVk())
w=v.d
w===$&&A.c()
w.p()
v.bqu()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.af6(j,i),g=C.af6(j,i),f=j.length,e=i.length,d=A.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&A.c()
u=new A.b1(1,1)
d.push(new A.vA(new A.cW(v,!1,A.p(l,l,B.h,l,l,new A.o(B.aL,l,l,new A.bv(u,u,u,u),A.a([new A.ab(0,B.G,B.aL.j(0.6),B.J,6)],k),l,B.n),l,22,l,B.Kd,l,l,l,3),l),B.PP,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new A.es(v,l,l,B.cW,l,l,l,l,l,l,D.eJC))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=B.c.j(0.4)
q=B.cq}else if(s===t){r=B.bh
q=B.O}else{r=B.aE
q=B.I}d.push(new A.es(t,l,l,B.cW,l,l,l,l,l,l,new A.F(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&A.c()
d.push(new A.vA(new A.cW(k,!1,A.p(l,l,B.h,B.aL,l,l,l,22,l,l,l,l,l,3),l),B.PP,l,l))}p=f===0?0:B.k.U(h/f*100)
k=B.x.j(0.35)
v=A.m(12)
u=A.H(B.ba,B.r,1)
o=x.p
v=A.p(l,A.v(A.a([A.B(A.a([m.aVj("Correct",""+h,B.bm),B.aa,m.aVj("Wrong / missed",""+(f-g),B.aE),B.b8,A.d(""+p+"% accuracy",l,l,l,l,l,l,F.a43,l,l,l)],o),B.m,l,B.e,B.j,0,l,l),B.ar,D.f1f],o),B.F,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(k,l,u,v,l,l,B.n),l,l,l,l,B.bl,l,l,l)
u=A.D(A.ci(new A.a7H(l,A.dl(d,l,l,l,l,l,l,l,l,l,l),l,l,l),B.q,l,B.z,l,l,l,l,B.ak),1)
k=m.a.d
g=A.l(l,l,B.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.x.j(0.35)
return A.v(A.a([v,B.ab,u,B.T,A.aK(l,B.U,!0,l,!0,B.q,l,A.aL(),k,l,l,l,l,l,2,A.bn(l,new A.b3(4,A.m(12),B.X),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new A.b3(4,A.m(12),D.aQx),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.z,!0,l,!0,l,!1,l,B.ah,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,B.a8,l,l,l,l,l,l,l,l,l,l,l,D.aKU,!0,B.a5,l,B.am,l,l,l,l)],o),B.ag,l,B.e,B.j,0,B.p)},
aVj(d,e,f){var w=null,v=f.j(0.15),u=A.m(8)
return A.p(w,A.d(d+": "+e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.h,w,w,new A.o(v,w,w,u,w,w,B.n),w,w,w,w,B.fK,w,w,w)}}
C.aJr.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bu()}}
var z=a.updateTypes(["aw<~>()","~()","I(hW,hW)","~([wC?])","S(qc)","qc()","I(qK,qK)","S(qK)","I(qL,qL)","NM(X)","S(hW)","cG(abt)","Ya(X)","Xh(X)","ace(X)","a4y(X)","LV(X)","ab4(X,hu<ak<j_>>)","ab3(X,I)","r(qc)","qK(a1<@,@>)","~(Dr,aon)","LN(X)","a1<n,@>(qK)","qL(a1<@,@>)","a1<n,@>(kc)","a1<n,@>(qL)","S(qL)","a1<n,@>(ln)","ln(@)","a1<n,@>(i9)","i9(@)","hW(@)","aw<~>(kc)","a1<n,@>(hW)","~(I,I)","hW(hW)","Tt(X)","aw<S>(ak<hW>)","Y9(X)","~(hW)","YW(X)","Tu(X)","n(hW)","S(ln)","wf(br<I,ln>)","a9D(X,I)","I(i9,i9)","a9v(ln)","r(qR)","bH(Hf)","XG(X)","~(cZ{bumpWalletRevision:S,cloudRequest:S})","~(n,O,O,O)","O(Q)","~(cZ)","Yt(X)","~(Dr)","n(n)","YX(X)"])
C.cm6.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.cm7(r,w,s.b,v,s.d)
t=s.e
r.b=A.dD(t,u)
v.r=new C.cm3(r)
v.e=new C.cm4(r,w)
v.f=new C.cm5(r,w,t,u)},
$S:0}
C.cm7.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.l7(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=A.a6(r)
u=A.ca(r)
s=v
q=u
p=A.ES(s,q)
if(p==null)p=new A.iY(s,q==null?A.a1_(s):q)
t=p
o.d.hb(t.a,t.b)
return}o.d.K(0,w)}else{o.e.a(null)
o.d.K(0,null)}},
$S:38}
C.cm3.prototype={
$0(){this.a.b.a9(0)
return $.Ft()},
$S:1620}
C.cm4.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.aqK.$0()
this.a.b.a9(0)},
$S:0}
C.cm5.prototype={
$0(){var w,v=this,u=v.b,t=A.dB(0,0,u.gb85(),0,0,0)
u.kp(0)
u=v.c
w=v.a
w.b=A.cO(new A.b8(u.a-t.a),new C.cm2(w,u,v.d))},
$S:0}
C.cm2.prototype={
$0(){var w=this.c
this.a.b=A.dD(this.b,w)
w.$1(null)},
$S:0}
C.eMv.prototype={
$1(d){var w=this.a
w.n(new C.eMu(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.eMu.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hu(D.abH,this.b,null,null,v.$ti.k("hu<1>"))},
$S:0}
C.eMx.prototype={
$2(d,e){var w=this.a
w.n(new C.eMs(w,d,e))},
$S:54}
C.eMs.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hu(D.abH,null,this.b,this.c,v.$ti.k("hu<1>"))},
$S:0}
C.eMw.prototype={
$0(){var w=this.a
w.n(new C.eMt(w))},
$S:0}
C.eMt.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hu(B.zr,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fjn.prototype={
$1(d){return d.a===this.a&&B.a.i(d.b.toLowerCase())===this.b&&d.x===B.cf},
$S:16}
C.fjf.prototype={
$1(d){return d},
$S:14}
C.f48.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return A.p(B.A,new A.C(new A.N(u,0,u,0),A.d("NGMY",w,1,B.eH,w,!1,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,B.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),B.h,w,w,B.a7e,w,v,w,w,w,w,w,v)},
$S:150}
C.f45.prototype={
$3(d,e,f){return this.a.$0()},
$S:140}
C.f46.prototype={
$2(d,e){var w,v=this,u=e.b
if(B.a.i(u==null?"":u).length!==0){u.toString
w=B.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return A.ka(w,B.A,v.d,new C.f44(v.e),B.fL,v.c,!0,v.b,null,null,v.a)},
$S:1621}
C.f44.prototype={
$3(d,e,f){return this.a.$0()},
$S:140}
C.f47.prototype={
$3(d,e,f){return this.a.$0()},
$S:140}
C.d37.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.d3i.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.d3A.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.d3B.prototype={
$1(d){return this.a.Ib()},
$S:13}
C.d3q.prototype={
$0(){var w=J.b4(this.b,new C.d3p(),x.P)
w=A.z(w,w.$ti.k("ai.E"))
this.a.f=w},
$S:0}
C.d3p.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.d3r.prototype={
$0(){var w=this.a,v=w.a.d.b4,u=A.U(v).k("J<1,a1<n,@>>")
v=A.z(new A.J(v,new C.d3o(),u),u.k("ai.E"))
w.f=v},
$S:0}
C.d3o.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.d3t.prototype={
$0(){var w=this.a,v=w.a.d.b4,u=A.U(v).k("J<1,a1<n,@>>")
v=A.z(new A.J(v,new C.d3s(),u),u.k("ai.E"))
w.f=v},
$S:0}
C.d3s.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.d3l.prototype={
$0(){var w=0,v=A.j(x.c),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.c3O(t.a.c)?2:3
break
case 2:w=4
return A.b(C.an2(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.n(new C.d3j(t))
case 3:if(t.c!=null)t.n(new C.d3k(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:53}
C.d3j.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d3k.prototype={
$0(){return this.a.d++},
$S:0}
C.d3m.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d3n.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d3d.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.hPQ(t.a.d.b4,J.k(J.q(u.b,"id")),"rejected")
t.a.bn()
w=2
return A.b(C.aeW(t.a.d.b4),$async$$0)
case 2:w=3
return A.b(t.Ib(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3e.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a7(s)
C.hEX(t.a.d.b4,J.k(r.h(s,"id")),t.a.c.c)
t.a.bn()
w=2
return A.b(C.aeW(t.a.d.b4),$async$$0)
case 2:w=3
return A.b(t.Ib(),$async$$0)
case 3:t.H6(B.d.dI(t.y,new C.d3b(s),new C.d3c(t)),J.k(r.h(s,"id")))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3b.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d3c.prototype={
$0(){return B.d.gL(this.a.y)},
$S:z+5}
C.d3f.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d3g.prototype={
$0(){return B.d.gL(this.a.y)},
$S:z+5}
C.d3h.prototype={
$0(){return this.a.H6(this.b,J.k(J.q(this.c,"id")))},
$S:0}
C.d3a.prototype={
$0(){return this.a.bVq(this.b)},
$S:0}
C.d39.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.hQg(u,w.b,new C.d38(v,w))},
$S:0}
C.d38.prototype={
$2(d,e){return this.a.aeI(this.b,d,e)},
$S:553}
C.d3z.prototype={
$2(d,e){if(d)return
this.a.aOe()},
$S:114}
C.d3x.prototype={
$2(d,e){var w=this.a
return new A.kW(C.aWR(w.a.c.a),new C.d3w(w,this.b,this.c),null,null,x.gH)},
$S:1623}
C.d3w.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=A.m(12)
v=A.m(12)
u=A.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return A.aD(!1,B.a1,!0,w,A.aI(!1,v,!0,new A.C(B.lp,A.bCd(B.cO,A.V(B.fX,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.d3v(this.a,d),t,t,t,t,t,t,t),B.h,this.b,0,t,t,t,t,t,B.ac)},
$S:1624}
C.d3v.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.ffE(s.c.a,s.e).eN(new C.d3u())
w=2
return A.b(C.bzC(u.b,t.a.c.a),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3u.prototype={
$1(d){},
$S:30}
C.d3y.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.dGn.prototype={
$0(){var w=this.a
return A.Jy(w.a.c.a,new C.dGm(w))},
$S:77}
C.dGm.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.dGo.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&A.c()
u.bf=t.ac()
v.bn()
w.n(new C.dGl())},
$S:0}
C.dGl.prototype={
$0(){},
$S:0}
C.dGp.prototype={
$2(d,e){var w,v=this.a
if(!C.c3O(v.a.c)){if($.fBY.t(0,B.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.fBZ(this.b,v.x,w)
return!1}C.an2(v.a.c.a)}if(A.Jy(v.a.c.a,new C.dGk(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aDb()
w=v.a
w.toString
w.hk(new A.cZ(B.o.u(1000*Date.now()),v.a.c.a,d,B.ju,B.f6,e,null,null,B.cf,new A.Q(Date.now(),0,!1)))
v.a.bn()
return!0},
$S:1625}
C.dGk.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.dGq.prototype={
$3$bonus(d,e,f){var w,v=null,u=B.o.u(1000*Date.now()),t=this.a,s=t.a
s.hk(new A.cZ(u,s.c.a,d,B.fu,B.f6,e,v,v,B.cf,new A.Q(Date.now(),0,!1)))
t.a.bn()
w=f>0?"+$"+B.k.aa(d,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.aa(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.u0(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1626}
C.d31.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.d34.prototype={
$0(){return A.iG(this.a,null)},
$S:0}
C.d35.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.d36.prototype={
$1(d){var w=null,v=this.a,u=A.fh(w,w,v.e===d?B.bm:A.W(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,w,w,w,w,w,w,w,w)
return A.D(new A.C(B.eZ,A.i5(A.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.d33(v,d),u),w),1)},
$S:218}
C.d33.prototype={
$0(){var w=this.a
return w.n(new C.d32(w,this.b))},
$S:0}
C.d32.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d4U.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.d4X.prototype={
$1(d){this.a.cbp()
return null},
$S:13}
C.d4Y.prototype={
$1(d){return this.a.cqN()},
$S:13}
C.d4Z.prototype={
$1(d){this.a.a06()
return null},
$S:13}
C.d5_.prototype={
$1(d){this.a.afN()
return null},
$S:13}
C.d50.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c4)return
w=v.Q
w===$&&A.c()
if(w<=0){v.n(new C.d4V(v))
w=v.as
if(w!=null)w.a9(0)
v.DQ()
return}v.n(new C.d4W(v))},
$S:13}
C.d4V.prototype={
$0(){return this.a.Q=0},
$S:0}
C.d4W.prototype={
$0(){var w=this.a,v=w.Q
v===$&&A.c()
w.Q=v-1
return v},
$S:0}
C.d49.prototype={
$0(){return this.a.bA=this.b},
$S:0}
C.d4a.prototype={
$0(){return this.a.bA=this.b},
$S:0}
C.d4D.prototype={
$1(d){return this.a.go.t(0,d)},
$S:58}
C.d4E.prototype={
$0(){},
$S:0}
C.d4p.prototype={
$0(){var w=this.b
w.c4=!0
w.cT="Waiting for both players\u2026"
w.cf="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.d4q.prototype={
$0(){var w=this.a
w.c4=!0
w.cT="Both players connected"
w.cf="Starting together in a moment\u2026"},
$S:0}
C.d4r.prototype={
$0(){var w=this.b
w.c4=!0
w.cT="Match starting together\u2026"
w.cf="Both players start in "+B.o.D(this.c,1,99)+"s"},
$S:0}
C.d4s.prototype={
$0(){this.b.c4=!1},
$S:0}
C.d4t.prototype={
$0(){},
$S:0}
C.d3C.prototype={
$0(){var w=this.a,v=w.x2,u=A.t(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.d48.prototype={
$0(){var w=this.a
w.at=this.b
w.b0c()},
$S:0}
C.d4F.prototype={
$0(){},
$S:0}
C.d4O.prototype={
$0(){},
$S:0}
C.d4C.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.n(new C.d4B(w))},
$S:0}
C.d4B.prototype={
$0(){var w=this.a
w.y=!0
w.z=new A.Q(Date.now(),0,!1)},
$S:0}
C.d46.prototype={
$0(){var w=this.a;++w.Y
w.y=!1
w.z=null},
$S:0}
C.d47.prototype={
$0(){},
$S:0}
C.d4J.prototype={
$1(d){return d==null},
$S:260}
C.d4K.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
B.d.cu(v.ch,w.d)},
$S:0}
C.d4L.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.d3D.prototype={
$1(d){return d==null},
$S:260}
C.d3E.prototype={
$0(){return this.a.bf++},
$S:0}
C.d3F.prototype={
$0(){},
$S:0}
C.d4i.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.d4j.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.K(0,t)
w=this.c
u.K(0,w)
if(v.ghr()&&D.me.t(0,v.a.e)){u=v.id
u.K(0,t)
u.K(0,w);++v.fx}++v.k2
v.fy=A.a([],x.t)},
$S:0}
C.d4k.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.n(new C.d4h(w))},
$S:11}
C.d4h.prototype={
$0(){var w=this.a
w.fy=A.a([],x.t)
w.k1=!1},
$S:0}
C.d4u.prototype={
$0(){return this.a.y1++},
$S:0}
C.d4v.prototype={
$0(){},
$S:0}
C.d4w.prototype={
$0(){return this.a.y2++},
$S:0}
C.d4x.prototype={
$0(){},
$S:0}
C.d4y.prototype={
$0(){return this.a.b4++},
$S:0}
C.d4z.prototype={
$0(){},
$S:0}
C.d4I.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.d4l.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d4m.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.d4n.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d4o.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.d4M.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.d4N.prototype={
$0(){var w=this.a
w.ok.push(w.d.aB(4))
w.p2=0},
$S:0}
C.d3G.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d3H.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.d3I.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d3J.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.d4G.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.d4H.prototype={
$0(){var w,v=this.a;++v.x2
v.aKa()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+A.t(Math.min(w+2,7))+" tiles"},
$S:0}
C.d4g.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.d4A.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d4e.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d4f.prototype={
$2(d,e){return d+e.length},
$S:208}
C.d4P.prototype={
$0(){return A.iG(this.a,null)},
$S:0}
C.d4Q.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.d4R.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.d4T.prototype={
$1(d){var w=this.a,v=w.MU(),u=v<=0?0:B.k.D(w.z7()/v,0,1),t=w.a.x,s=t*1.46
return new C.LN(w.f?s:s*u,s,t,null)},
$S:z+22}
C.d4S.prototype={
$1(d){return d.bS(0.85)},
$S:167}
C.d4d.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghr()&&D.me.t(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return A.v(A.a([A.d(p,w,w,w,w,w,w,B.jU,B.L,w,w),B.ar,A.D(A.au(new A.a5(r*v+u,r*t+s,A.ih(!0,w,w,B.z,new A.hJ(v,6,6,1,r),new C.d4c(q,r),q.fr.length,w,B.dL,B.ak,!1),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
$S:145}
C.d4c.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.t(0,e),p=r.ghr()&&D.me.t(0,r.a.e)&&q&&r.id.t(0,e),o=r.ghr()&&D.me.t(0,r.a.e)&&q&&!p,n=B.d.t(r.fy,e)||q,m=p?D.ajD:D.bGA,l=A.m(10),k=A.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.ajD:D.ajx
v=o?A.H(B.dB,B.r,2):s
u=A.a([new A.ab(0,B.G,A.W(51,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),B.J,4)],x.V)
t=this.b*0.42
return A.aI(!1,l,!0,A.dj(s,A.au(n?A.V(D.c9H[r.fr[e]],B.c,s,s,s,t):A.d("?",s,s,s,s,s,s,A.l(s,s,B.c,s,s,s,s,s,s,s,s,t,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,B.b9,new A.o(s,s,v,k,u,w,B.n),B.eK,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.d4b(r,e),s,s,s,s,s,s,s)},
$S:189}
C.d4b.prototype={
$0(){return this.a.caM(this.b)},
$S:0}
C.d3W.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?A.W(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.W(89,B.bm.l()>>>16&255,B.bm.l()>>>8&255,B.bm.l()&255),r=A.m(10),q=A.m(10),p=A.m(10),o=A.H(A.W(64,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
return A.aD(!1,B.a1,!0,r,A.aI(!1,q,!0,A.p(B.A,A.d(t?"":u,w,w,w,w,w,w,D.aK_,w,w,w),B.h,w,w,new A.o(w,w,o,p,w,w,B.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d3V(v,d),w,w,w,w,w,w,w),B.h,s,0,w,w,w,w,w,B.ac)},
$S:549}
C.d3V.prototype={
$0(){return this.a.cq6(this.b)},
$S:0}
C.d3X.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=A.W(46,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
return A.aD(!1,B.a1,!0,A.m(10),A.aI(!1,A.m(10),!0,A.p(B.A,A.d(u,w,w,w,w,w,w,D.aK_,w,w,w),B.h,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d3U(v,d),w,w,w,w,w,w,w),B.h,t,0,w,w,w,w,w,B.ac)},
$S:549}
C.d3U.prototype={
$0(){return this.a.cq5(this.b)},
$S:0}
C.d3Y.prototype={
$1(d){return this.a.n(new C.d3T())},
$S:27}
C.d3T.prototype={
$0(){},
$S:0}
C.d3Z.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&A.c()
w=C.af6(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.oo()
if(u.ghr()&&D.me.t(0,u.a.e)){u.Zs()
u.mu(!0)}else{v=B.d.cG(u.cy,0,new C.d3R())
t=u.dx
if(t>=v)u.rW("All 5 sentences perfect \u2014 full payout!")
else u.Di(t/v,t,v)}}else{if(u.ghr()&&D.me.t(0,u.a.e))u.Zs()
u.n(new C.d3S(u))}},
$S:0}
C.d3R.prototype={
$2(d,e){return d+e.length},
$S:208}
C.d3S.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bJ(0,B.c0)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.d4_.prototype={
$1(d){var w=null,v=A.fh(w,w,A.W(38,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,B.cc,w,w,w,w,w,w,w)
return new A.C(B.cL,new A.a5(1/0,w,A.i5(A.d(d,w,w,w,w,w,w,U.aJT,w,w,w),new C.d3Q(this.a,d),v),w),w)},
$S:137}
C.d3Q.prototype={
$0(){return this.a.b_z(this.b)},
$S:0}
C.d40.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&A.c()
w=u*3+8
return A.v(A.a([A.d(s,v,v,v,v,v,v,B.nL,v,v,v),B.P,A.D(A.au(new A.a5(w,w,A.ih(!0,v,v,B.z,new A.hJ(3,4,4,1,u),new C.d3P(t,u),9,v,B.dL,B.ak,!1),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
$S:145}
C.d3P.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.aYp(e),p=r===0
if(p)w=B.K
else w=q?B.bm:A.W(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v=A.m(10)
s=p?t:new C.d3L(s,e)
u=A.m(10)
p=p?"":""+r
return A.aD(!1,B.a1,!0,v,A.aI(!1,u,!0,A.au(A.d(p,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),B.h,w,0,t,t,t,t,t,B.ac)},
$S:76}
C.d3L.prototype={
$0(){return this.a.cq4(this.b)},
$S:0}
C.d41.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.d3O(q,d)
p=A.m(16)
if(o)w=D.a_f[d]
else{w=D.a_f[d]
w=A.W(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=A.m(16)
u=o?A.W(B.k.U(127.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.W(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
u=A.H(u,B.r,o?2:1)
t=x.V
if(o){s=D.a_f[d]
t=A.a([new A.ab(0,B.G,A.W(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,16)],t)}else t=A.a([],t)
return A.aI(!1,p,!0,A.dj(r,r,r,r,B.b9,new A.o(w,r,u,v,t,r,B.n),T.zz,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1630}
C.d3O.prototype={
$0(){return this.a.cq7(this.b)},
$S:0}
C.d42.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&A.c()
q=A.d(q,t,t,t,t,t,t,B.nL,t,t,t)
w=A.d("Move "+r.auK()+"/"+C.fHX(),t,t,t,t,t,t,B.C2,t,t,t)
v=r.x2
u=s*3+12
return A.v(A.a([q,w,A.d("Round "+v+"/7 \xb7 "+A.t(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,A.l(t,t,A.W(153,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.D(A.au(new A.a5(u,u,A.ih(!0,t,t,B.z,new A.hJ(3,6,6,1,s),new C.d3N(r),9,t,B.dL,B.ak,!1),t),t,t,t),1)],x.p),B.m,t,B.e,B.j,0,B.p)},
$S:145}
C.d3N.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=A.m(10),s=A.m(10),r=u?B.bm:D.b2i,q=u?B.eu:D.b9O
return A.aD(!1,B.a1,!0,w,A.aI(!1,t,!0,A.p(w,w,B.h,w,w,new A.o(r,w,A.H(q,B.r,u?2.5:1),s,w,w,B.n),w,w,w,w,w,w,w,w),w,!0,w,w,B.K,w,w,w,w,w,w,w,w,new C.d3K(v,e),w,w,w,w,B.K,w,w),B.h,B.K,0,w,w,w,w,w,B.ac)},
$S:76}
C.d3K.prototype={
$0(){return this.a.cq2(this.b)},
$S:0}
C.d43.prototype={
$0(){return this.a.b_z(this.b[this.c])},
$S:0}
C.d44.prototype={
$0(){return this.a.n(new C.d3M())},
$S:0}
C.d3M.prototype={
$0(){},
$S:0}
C.d45.prototype={
$2(d,e){this.a.Yd(d,e)
return null},
$S:z+21}
C.d8b.prototype={
$1(d){return this.a.cbe(this.b,d)},
$S:1631}
C.d8a.prototype={
$0(){var w=this
return w.a.a.cI9(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cx6.prototype={
$1(d){var w=this.a
w.ZJ()
w.t2()},
$S:8}
C.cwr.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cwh.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cwi.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cwB.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cwy.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cwz.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cwA.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cwt.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new C.cws(w))},
$S:0}
C.cws.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cwj.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.aa(w.c)
v.dy=J.aa(w.d)
v.fr=J.aa(w.e)},
$S:0}
C.cww.prototype={
$1(d){var w=this.a
return new C.Tt(w.fx,new C.cwv(w),w.a.f.r,null)},
$S:z+37}
C.cwv.prototype={
$1(d){return this.bec(d)},
bec(d){var w=0,v=A.j(x.y),u,t=this,s,r
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c4I(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.n(new C.cwu(r,d))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+38}
C.cwu.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cwU.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cwO.prototype={
$1(d){this.a.t2()
return null},
$S:13}
C.cwR.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(B.o.ak(v.gaR1().a,1e6)<=0){w=v.id
if(w!=null)w.a9(0)
v.t2()
return}v.n(new C.cwQ())},
$S:13}
C.cwQ.prototype={
$0(){},
$S:0}
C.cwN.prototype={
$1(d){this.a.DX()
return null},
$S:13}
C.cwP.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cwM.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bh(J.k(v==null?"":v))
if(u==null)u=new A.Q(A.fK(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bh(J.k(v==null?"":v))
return u.aI(0,w==null?new A.Q(A.fK(0,0,!1),0,!1):w)},
$S:41}
C.cwo.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bh(J.k(v==null?"":v))
if(u==null)u=new A.Q(A.fK(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bh(J.k(v==null?"":v))
return u.aI(0,w==null?new A.Q(A.fK(0,0,!1),0,!1):w)},
$S:41}
C.cwp.prototype={
$0(){var w=this.a,v=w.f
B.d.a7(v)
B.d.v(v,this.b)
w.ax=!0},
$S:0}
C.cwq.prototype={
$0(){var w=this.a
if(w.c!=null)w.a_o(!0)},
$S:11}
C.cwm.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cwn.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
if(w.f.length!==0)w.RW(this.b)},
$S:8}
C.cwE.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=B.d.gcV(v).Q
v.toString
if(this.b)w.hP(v)
else w.lE(v,B.dS,B.kv)},
$S:8}
C.cwx.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cwF.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cwG.prototype={
$0(){var w=this.a
w.f.push(A.E(["role","user","text",this.b,"at",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z))
w.b0Z()
w.r.bJ(0,B.c0)
w.at=!0},
$S:0}
C.cwH.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cwI.prototype={
$0(){var w=this.a
w.f.push(A.E(["role","ai","text",this.b,"at",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z))
w.at=!1},
$S:0}
C.cwJ.prototype={
$0(){var w,v=this.b,u=A.T(x.N,x.z)
J.aE(u,"role","ai")
J.aE(u,"text",this.c)
J.aE(u,"at",new A.Q(Date.now(),0,!1).a4().ab())
w=this.a
if(J.ct(w.b)){w=J.b4(w.b,v.gcad(),x.P)
w=A.z(w,w.$ti.k("ai.E"))
J.aE(u,"phoneActions",w)}v.f.push(u)
v.b0Z()},
$S:0}
C.cwK.prototype={
$0(){this.a.f.push(A.E(["role","ai","text",y.g,"at",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z))},
$S:0}
C.cwL.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cwC.prototype={
$1(d){return this.bed(d)},
bed(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:k=t.a
if(k.c==null||d==null){w=1
break}s=t.b.b
r=J.a7(s)
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
return A.b(C.anr(q,new C.qK("cal_"+1000*n,m,l,(o==null?p.bN(36e8):o).bQ(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.anE()
case 4:k.c.H(x.q).f.P(A.b0(null,null,null,B.dk,null,B.q,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:425}
C.cwT.prototype={
$1(d){return this.bee(d)},
bee(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.H(x.q).f.P(A.b0(null,null,null,B.dk,null,B.q,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:425}
C.cwD.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=B.d.gcV(v).Q
v.toString
w.hP(v)},
$S:8}
C.cx5.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
if(v>0)w.a8H(v-1)},
$S:0}
C.cwZ.prototype={
$0(){return A.iG(this.a,null)},
$S:0}
C.cx1.prototype={
$1(d){var w=this.a
w.n(new C.cwW(w,d))
if(d===0)w.a_o(!0)},
$S:27}
C.cwW.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cx_.prototype={
$2$size(d,e){return C.fGn(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:1632}
C.cx0.prototype={
$0(){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.fSI(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return A.b(H.aof(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cwX(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return A.b(C.anp(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return A.b(p.t2(),$async$$0)
case 15:p.n(new C.cwY(p))
p.a8H(0)
case 14:u=!1
w=1
break
case 11:w=16
return A.b(p.t2(),$async$$0)
case 16:case 9:case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:62}
C.cwX.prototype={
$2(d,e){return this.bef(d,e)},
bef(d,e){var w=0,v=A.j(x.y),u,t=this,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=A.a01(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$2,v)},
$S:121}
C.cwY.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cx3.prototype={
$2(d,e){return B.aa},
$S:36}
C.cx2.prototype={
$2(d,e){var w=null,v=this.a,u=A.d((v.a.c.w?D.a_k:D.ZK)[e],w,w,w,w,w,w,B.oz,w,w,w),t=A.W(31,B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255),s=A.W(89,B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255)
v=v.at?w:new C.cwV(v,e)
return A.mL(w,t,u,w,v,w,w,new A.ay(s,1,B.r,-1),w)},
$S:648}
C.cwV.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a_k:D.ZK
w.r.saU(0,v[this.b])
w.mt()
return null},
$S:0}
C.cx4.prototype={
$1(d){var w=this.a
return w.at?null:w.mt()},
$S:2}
C.cwk.prototype={
$0(){return this.a.a8H(0)},
$S:0}
C.cwS.prototype={
$0(){return this.a.a8H(this.b)},
$S:0}
C.cwl.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=A.p(v,D.bBn,B.h,v,v,new A.o(v,v,v,v,v,new A.a3(B.a3,B.a7,B.w,A.a([A.W(51,B.aK.l()>>>16&255,B.aK.l()>>>8&255,B.aK.l()&255),w.b],x.O),v,v),B.a6),v,72,v,v,v,v,v,72)
t=w.c
s=A.d("Start a conversation",v,v,v,v,v,v,A.l(v,v,t?B.c:B.aF,v,v,v,v,v,v,v,v,16,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.au(new A.C(B.V8,A.v(A.a([u,B.ab,s,B.ar,A.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,A.l(v,v,t?B.aA:B.aT,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v)],x.p),B.m,v,B.e,B.j,0,B.p),v),v,v,v)}if(e<s)return u.bzk(t[e],w.c)
return u.aKL(A.E(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:40}
C.bUe.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=B.k.N(d)
return new A.Q(A.fK(w>1e11?w:w*1000,0,!0),0,!0).bQ()}v=A.bh(J.k(d))
return v==null?null:v.bQ()},
$S:291}
C.bUd.prototype={
$1(d){A.aR(d)
return(d==null?0:d)/100},
$S:687}
C.bUg.prototype={
$1(d){var w
if(d==null)w=null
else{w=A.bh(J.k(d))
w=w==null?null:w.bQ()}return w},
$S:291}
C.bUf.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null
if(!x.f.b(d))return m
w=A.a_(d,x.N,x.z)
try{v=J.q(w,"id")
v=J.k(v==null?"":v)
u=J.q(w,"userEmail")
u=J.k(u==null?"":u)
t=A.aR(J.q(w,"amount"))
if(t==null)t=0
s=J.q(w,"type")
s=A.a2w(B.a0_,J.k(s==null?"reimbursement":s))
r=J.q(w,"method")
r=A.a2w(B.ZI,J.k(r==null?"system":r))
q=A.aS(J.q(w,"sourceDetails"))
p=J.q(w,"status")
p=A.a2w(B.Fr,J.k(p==null?"approved":p))
o=this.a.$1(J.q(w,"timestamp"))
if(o==null)o=new A.Q(Date.now(),0,!1)
return new A.cZ(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:596}
C.doF.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.doG.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dow.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bj(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dou.prototype={
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
return A.b(C.fAY(t,s,r,q),$async$$0)
case 3:p=e
w=4
return A.b(A.oC(o.a.c,!1),$async$$0)
case 4:o.ku(p)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.doE.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.a7f(),$async$$0)
case 3:q=e
if(q==null){r.ku("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return A.b(A.a8(s,!1).cp(A.eD(new C.doD(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return A.b(A.oC(r.a.c,!1),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.doD.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&A.c()
return new C.Y9(w.b,w.a,u,v,null)},
$S:z+39}
C.dot.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.hlO(q)?3:4
break
case 3:w=5
return A.b(t.a.Dx(B.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return A.b(C.aUs(q,s.a.c),$async$$0)
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
case 9:s.ku(C.bUi(s.a.c))
w=1
break
case 10:s.ku("That code didn't match anything on your account. Double-check it and try again.")
w=1
break
case 11:s.ku(y.B)
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
return A.b(s.aLZ(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dos.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=A.bj(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dov.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.aaw(),$async$$0)
case 3:q=e
if(q==null||B.a.i(q).length===0){w=1
break}s=C.fPE(q)
if(s==null){r.ku("Could not read that backup file.")
w=1
break}if(!C.bUh(s,r.a.c,null)){r.ku(C.bUi(r.a.c))
w=1
break}w=4
return A.b(r.bBD(s),$async$$0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.doC.prototype={
$1(d){var w=null,v=new A.ap(B.as,$.av()),u=A.M(d).ax.a===B.H,t=u?B.hx:B.c,s=x.p,r=A.v(A.a([A.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,A.l(w,w,u?B.af:B.ai,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),B.ay,A.aK(w,B.U,!0,w,!0,B.q,w,A.aL(),v,w,w,w,w,w,2,A.bn(w,new A.b3(4,A.m(14),B.dd),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),B.z,!0,w,!0,w,!1,w,B.ah,w,w,w,w,w,B.dN,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.L,w,B.am,w,w,w,w)],s),B.F,w,B.e,B.Q,0,B.p)
return A.eo(A.a([A.bK(!1,B.df,w,w,!0,w,w,new C.doA(d),w,w),A.bL(D.eRH,new C.doB(d,v),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.f45,w)},
$S:20}
C.doA.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.doB.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a8(this.a,!1).M(w)
return null},
$S:0}
C.dox.prototype={
$1(d){return D.fiv},
$S:z+12}
C.doy.prototype={
$0(){return this.a.Dy(B.a.i(this.b))},
$S:1}
C.doz.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(C.aUs(t.b,r.a.c),$async$$0)
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
case 7:r.ku(C.bUi(r.a.c))
w=1
break
case 8:r.ku("Could not read that QR code for your account.")
w=1
break
case 9:r.ku(y.B)
w=1
break
case 10:s=q.b
s.toString
w=12
return A.b(r.aLZ(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.doH.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.doL.prototype={
$1(d){this.a.P5()
return null},
$S:13}
C.doI.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.doJ.prototype={
$0(){var w=null,v=this.a
A.fE(new A.fx(v.gat3()))
this.b.H(x.q).f.P(A.b0(w,w,w,w,w,B.q,w,A.d("Code "+v.gat3()+" copied",w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.doK.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.doM.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!(B.a.a_(s,"NGMYSNAP1|")||B.a.a_(s,"NGMYLOCALSYNC1|")||B.a.a_(s,"NGMYLOCALLIVE1|")||B.a.a_(s,"NGMYLOCALDEP1|")))continue
r.e=!0
A.a8(this.b,!1).M(s)
return}},
$S:175}
C.f7o.prototype={
$1(d){return D.fgR},
$S:z+13}
C.f8B.prototype={
$1(d){return new C.ace(this.a,this.b,this.c,null)},
$S:z+14}
C.eGq.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.eGr.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.cZl.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fu()},
$S:8}
C.cZi.prototype={
$2(d,e){return e.ahS(e.a.toUpperCase())},
$S:1633}
C.cZj.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=B.a.i(w.d.a.a)
A.a8(v,!1).M(w)
return null},
$S:2}
C.cZk.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.bV_.prototype={
$1(d){var w=J.q(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!B.d.ba(D.cXb,B.a.gkV(v))},
$S:4}
C.ffy.prototype={
$1(d){return d.a===this.a},
$S:1634}
C.ffz.prototype={
$0(){return B.d.gL(B.AO)},
$S:1635}
C.dv6.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.n(new C.dv5(v))
w=v.r
w===$&&A.c()
if(w<=0)v.b03("Time's up")},
$S:13}
C.dv5.prototype={
$0(){var w=this.a,v=w.r
v===$&&A.c()
w.r=v-1
return v},
$S:0}
C.duY.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dv2.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.n(new C.dv_(w,d,e))},
$S:138}
C.dv_.prototype={
$0(){var w=this.a,v=this.c
w.e=B.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dv3.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new C.duZ(w))
w.ckE(!0)},
$S:0}
C.duZ.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dv4.prototype={
$1(d){this.a.b03(d)
return null},
$S:2}
C.dv0.prototype={
$0(){return A.iG(this.a,null)},
$S:0}
C.dv1.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.c1q.prototype={
$1(d){return D.dfY},
$S:z+15}
C.c1p.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.f9m.prototype={
$5(d,e,f,g,h){var w,v=null,u=J.a7(d),t=A.aR(u.h(d,e)),s=t==null?v:B.k.N(t)
if(s==null)s=0
if(s<=0)return v
t=u.h(d,g)
if(J.k(t==null?"":t)!==h){u.m(d,g,h)
u.m(d,f,0)}t=A.aR(u.h(d,f))
w=t==null?v:B.k.N(t)
if(w==null)w=0
if(w>=s)return v
u.m(d,f,w+1)
u=A.aR(u.h(d,"outcome"))
return u==null?v:B.k.N(u)},
$S:1636}
C.f9n.prototype={
$2(d,e){var w=A.aR(J.q(d,e))
w=w==null?null:B.k.N(w)
return w==null?0:w},
$S:611}
C.f9o.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:208}
C.fmz.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.h_V(w,v):C.fGF(w,v)
if(u===3)++w.f
C.adC(w,this.c,u)
return u},
$S:1637}
C.fmB.prototype={
$0(){return C.h_V(this.a,this.b)},
$S:110}
C.fmA.prototype={
$0(){return C.fGF(this.a,this.b)},
$S:110}
C.doh.prototype={
$0(){var w=this.a
if(w.a.c)w.n(new C.dog(w))},
$S:0}
C.dog.prototype={
$0(){this.a.r=1+B.o.G(A.yN(new A.Q(Date.now(),0,!1))/90|0,5)},
$S:0}
C.doi.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&A.c()
u=u.x
u===$&&A.c()
w=B.k.bw(u*10)
if(w!==v.w)v.n(new C.dof(v,w))}},
$S:0}
C.dof.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.c3n.prototype={
$3(d,e,f){var w=null
return A.D(A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,B.I,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.bA,A.eZ(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.h,B.dq)],x.p),B.m,w,B.e,B.j,0,B.p),1)},
$S:1638}
C.c3m.prototype={
$3(d,e,f){var w=null
return A.d("$"+B.k.aa(e,2),w,w,w,w,w,w,B.ov,w,w,w)},
$S:389}
C.c3P.prototype={
$1(d){return new C.LV(this.a,this.b,!1,null,null)},
$S:z+16}
C.dNh.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=A.m(e?0:30)
e=e?g:A.H(B.b3.j(0.5),B.r,1)
w=f.a.e?g:A.a([new A.ab(2,B.G,B.b3.j(0.35),B.J,36),new A.ab(0,B.G,B.by.j(0.175),B.J,24)],x.V)
v=A.m(f.a.e?0:30)
u=x.O
t=A.an(g,A.p(g,g,B.h,g,g,new A.o(g,g,g,g,g,new A.bR(B.A,0.5,B.w,g,0,A.a([B.b7.j(0.22),B.K],u),g,g),B.a6),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=A.an(-50,A.p(g,g,B.h,g,g,new A.o(g,g,g,g,g,new A.bR(B.A,0.5,B.w,g,0,A.a([B.by.j(0.18),B.K],u),g,g),B.a6),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?B.j:B.Q
p=x.p
o=A.a([],p)
if(f.a.e)o.push(B.P)
n=x.V
o.push(A.p(g,D.bx_,B.h,g,g,new A.o(g,g,A.H(B.aL.j(0.8),B.r,2.5),g,A.a([new A.ab(0,B.G,B.b3.j(0.55),B.cs,18)],n),E.t8,B.a6),g,88,g,g,g,g,g,88))
o.push(B.aO)
o.push(A.nq(B.jc,D.f1U,new C.dNd()))
o.push(B.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(A.d(m,g,g,g,g,g,g,A.l(g,g,B.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,B.cq,g,1.45,!0,g,g,g,g,g,g,g,g),B.L,g,g))
m=this.b
if(m.length!==0){l=B.cF.j(0.12)
k=A.m(18)
j=A.H(B.cF.j(0.45),B.r,1)
i=A.a([A.B(A.a([A.V(D.br2,B.cF.j(0.95),g,g,g,20),B.aa,A.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,A.l(g,g,B.cF.j(0.95),g,g,g,g,g,g,g,g,13,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),B.m,g,B.e,B.j,0,g,g),B.T,A.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,A.l(g,g,B.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),B.T],p)
B.d.v(i,new A.J(m,new C.dNe(),A.U(m).k("J<1,r>")))
B.d.v(o,A.a([B.aO,A.p(g,A.v(i,B.F,g,B.e,B.j,0,B.p),B.h,g,g,new A.o(l,g,j,k,g,g,B.n),g,g,g,g,B.bB,g,g,1/0)],p))}o.push(B.bu)
m=B.x.j(0.35)
l=A.m(18)
k=A.H(B.b3.j(0.35),B.r,1)
o.push(A.p(g,A.v(A.a([f.atE(B.ho,"Unlimited games with an active plan",B.b7),B.P,f.atE(B.k6,"Weekday check-ins grow your balance",B.b3),B.P,f.atE(B.m1,"Compete, bet, and earn points",B.aL)],p),B.m,g,B.e,B.j,0,B.p),B.h,g,g,new A.o(m,g,k,l,g,g,B.n),g,g,g,g,B.bB,g,g,1/0))
o.push(B.d3)
l=A.m(16)
n=A.a([new A.ab(0,B.G,B.by.j(0.45),B.cs,16)],n)
o.push(new A.a5(1/0,g,A.bT(A.dq(D.bAb,D.eYM,new C.dNf(f,a0),A.bk(B.K,g,g,g,B.c,B.H8,g,B.K,new A.b6(A.m(16),B.X),g,g,g)),new A.o(g,g,g,l,n,E.t8,B.n),B.bb),g))
o.push(B.P)
n=f.a.e?"Back":"Maybe later"
o.push(A.bK(!1,A.d(n,g,g,g,g,g,g,A.l(g,g,B.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,new C.dNg(f,a0),g,g))
if(f.a.e)o.push(B.b8)
h=A.p(g,A.bu(v,new A.am(B.W,g,B.a9,B.q,A.a([t,u,new A.C(new A.N(22,r,22,q),A.v(o,B.m,g,B.e,s,0,B.p),g)],p),g),B.ao),B.h,g,g,new A.o(g,g,e,d,w,D.bJn,B.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return A.ew(g,B.K,h,g,g,g,Ad.VD,B.cZ,g,g,g)},
$S:548}
C.dNd.prototype={
$1(d){return D.bIj.au(0,d)},
$S:66}
C.dNe.prototype={
$1(d){var w=null
return new A.C(B.fq,A.B(A.a([A.V(Ak.Xu,B.cF.j(0.85),w,w,w,14),B.aa,A.D(A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$S:137}
C.dNf.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{A.a8(this.b,!1).M(null)
w.a.c.$0()}},
$S:0}
C.dNg.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else A.a8(this.b,!1).M(null)},
$S:0}
C.fhV.prototype={
$1(d){if(d.gma())this.a.a=d
return d.gma()},
$S:675}
C.fhI.prototype={
$1(d){$.aT.x1$.push(new C.fhH(this.a))},
$S:8}
C.fhH.prototype={
$1(d){return this.a.$0()},
$S:8}
C.f5F.prototype={
$1(d){return C.h00(this.a,this.b+1)},
$S:8}
C.fji.prototype={
$2(d,e){var w=A.aG(d,B.bR,x.w).w.a
return new A.a5(w.a,w.b,A.cd(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:162}
C.c42.prototype={
$1(d){return d.r===this.a},
$S:243}
C.c43.prototype={
$1(d){var w=$.aNL(),v=w.a
w.sq(0,v+1)
return v},
$S:1640}
C.c44.prototype={
$1(d){},
$S:30}
C.c41.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:243}
C.c40.prototype={
$1(d){return d.f.c8(this.a)},
$S:243}
C.f3Q.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:67}
C.fuG.prototype={
$1(d){return C.a5d(this.a)},
$S:99}
C.fuH.prototype={
$1(d){var w=$.aNL()
w.sq(0,w.a+1)},
$S:28}
C.fuI.prototype={
$1(d){},
$S:30}
C.fuJ.prototype={
$1(d){return new A.k3($.aNL(),new C.fuF(this.a,this.b),null,null,x.am)},
$S:1641}
C.fuF.prototype={
$3(d,e,f){var w=this.b
return new A.kW(C.an8(this.a,!1),new C.fuE(w),w,null,x.gv)},
$S:1642}
C.fuE.prototype={
$2(d,e){var w=e.b
return new C.ab4(w==null?this.a:w,null)},
$S:z+17}
C.dNk.prototype={
$1(d){return d.c},
$S:243}
C.dNl.prototype={
$1(d){return d.gbba()},
$S:1643}
C.dNm.prototype={
$2(d,e){return d+e},
$S:94}
C.dNn.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.dNp.prototype={
$2(d,e){return B.P},
$S:36}
C.dNo.prototype={
$2(d,e){return new C.ab3(J.q(this.a.c,e),null)},
$S:z+18}
C.dNj.prototype={
$1(d){return d==null?"\u2026":C.bw6(d)},
$S:1644}
C.fuM.prototype={
$3(d,e,f){var w=this
return A.qX(new C.axt(w.a,w.b,w.c,w.d,new C.fuK(d,w.e),new C.fuL(d,w.f),null))},
$C:"$3",
$R:3,
$S:93}
C.fuK.prototype={
$0(){A.a8(this.a,!1).M(null)
C.h2Y(this.b)},
$S:0}
C.fuL.prototype={
$0(){A.a8(this.a,!1).M(null)
C.h2Y(this.b)},
$S:0}
C.d52.prototype={
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
B.d.v(w,new A.J(t,new C.d51(),A.U(t).k("J<1,r>")))}t=h.d
t===$&&A.c()
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,A.aG(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?A.a([B.bm,B.fb,B.eA],r):A.a([B.aE,B.f2,B.f1],r)
p=A.m(26)
o=A.H(B.c.j(0.4),B.r,2)
n=x.V
m=A.a([new A.ab(6,B.G,(h.a.c?B.dt:B.dC).j(0.5),B.J,36)],n)
l=A.a([],g)
if(h.a.c){k=A.di()
j=k.a
j.$flags&2&&A.ah(j)
j[11]=0.001
k.jz(-0.35)
r=A.a([X.aak,B.rl],r)
l.push(new A.a5(i,100,new A.am(B.A,i,B.a9,B.h,A.a([A.fp(B.A,A.p(i,D.aYb,B.h,i,i,new A.o(i,i,i,i,A.a([new A.ab(4,B.G,B.cO.j(0.6),B.J,24),new A.ab(0,B.G,B.x.j(0.3),B.dn,12)],n),new A.bR(B.A,0.5,B.w,i,0,r,i,i),B.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.bDm)
l.push(B.ay)
l.push(A.d(h.a.d,i,i,i,i,i,i,B.a4E,B.L,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=A.m(18)
k=A.H(B.fb,B.r,4)
B.d.v(l,A.a([B.ay,D.eTi,B.P,A.p(i,A.d(r,i,i,i,i,i,i,D.eKj,B.L,i,i),B.h,i,i,new A.o(B.c,i,k,n,i,i,B.n),i,i,i,i,B.V6,i,i,1/0)],g))}B.d.v(l,A.a([B.ab,A.d(h.a.e,i,i,i,i,i,i,D.eMY,B.L,i,i)],g))
l.push(B.dW)
r=A.D(A.dV(D.eR_,h.a.r,A.db(i,i,i,i,i,i,i,i,i,B.c,i,i,B.cc,i,i,D.aQc,i,i,i,i)),1)
h=h.a
n=h.w
l.push(A.B(A.a([r,B.ax,A.D(A.bL(G.aLg,n,A.bk(B.c,i,i,i,h.c?B.fb:B.f2,i,B.cc,i,i,i,i,i)),1)],g),B.m,i,B.e,B.j,0,i,i))
w.push(A.e5(B.A,A.p(i,A.v(l,B.m,i,B.e,B.Q,0,B.p),B.h,i,i,new A.o(i,i,o,p,m,new A.a3(B.aw,B.aC,B.w,q,i,i),B.n),i,i,i,B.a8,B.adN,i,i,s),1+t*0.02,i,i))
return new A.am(B.A,i,B.a9,B.h,w,i)},
$S:108}
C.d51.prototype={
$1(d){var w=null,v=d.a,u=d.b
return A.an(w,A.d8(A.et(B.A,d.d,A.V(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.c5E.prototype={
$2(d,e){var w=null,v=this.a,u=C.hlf(A.Jy(v.c,v.d))
return A.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1645}
C.c5D.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:67}
C.bVw.prototype={
$0(){},
$S:0}
C.f2P.prototype={
$1(d){return B.o.u(d)},
$S:82}
C.dGt.prototype={
$0(){return this.a.y=!0},
$S:0}
C.dGu.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.dGv.prototype={
$0(){var w=this.a
return w.w=D.Oc[w.d.aB(5)]},
$S:0}
C.dGw.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.dGx.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.dGy.prototype={
$0(){var w=this.a
return w.n(new C.dGs(w))},
$S:0}
C.dGs.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dGz.prototype={
$0(){var w=this.a
return w.n(new C.dGr(w))},
$S:0}
C.dGr.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dGC.prototype={
$0(){return A.iG(this.a,null)},
$S:0}
C.dGD.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&B.a.i(t.e.a.a).length===0?B.bm:A.W(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),r=A.m(10)
t=t.y?u:new C.dGB(t,d)
w=A.m(10)
v=B.k.aa(d,0)
return A.D(new A.C(B.jH,A.aD(!1,B.a1,!0,r,A.aI(!1,w,!0,new A.a5(u,38,A.au(A.d("$"+v,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),B.h,s,0,u,u,u,u,u,B.ac),u),1)},
$S:1646}
C.dGB.prototype={
$0(){var w=this.a
return w.n(new C.dGA(w,this.b))},
$S:0}
C.dGA.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bJ(0,B.c0)},
$S:0}
C.dNH.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+B.cP.gcs().aG(this.c)},
$S:0}
C.dNI.prototype={
$0(){return A.iG(this.a,null)},
$S:0}
C.dND.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=A.m(14),s=u?B.c.j(0.1):B.K,r=A.H(u?D.eD.j(0.5):B.K,B.r,1),q=A.V(e,u?D.eD:B.aA,w,w,w,20)
return A.D(A.aH(w,A.dj(w,A.B(A.a([q,B.bo,A.d(f,w,w,w,w,w,w,A.l(w,w,u?B.c:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.b6,B.j,0,w,w),w,w,B.b9,new A.o(s,w,r,t,w,w,B.n),B.a1,w,46,w,w,w,w,w),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dNF(v,d),w,w,w,w,w,w,!1,B.ad),1)},
$S:1647}
C.dNF.prototype={
$0(){var w=this.a
return w.n(new C.dNE(w,this.b))},
$S:0}
C.dNE.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dNG.prototype={
$0(){var w=this.a,v=w.d===B.kc?"Cash App tag":"Bitcoin address"
return w.Ht(this.b,v)},
$S:0}
C.dNC.prototype={
$0(){var w=this.a
return w.Ht(w.gaow(),"Code")},
$S:0}
C.c4u.prototype={
$1(d){return C.hhs(A.a_(d,x.N,x.z))},
$S:z+20}
C.c4v.prototype={
$2(d,e){return d.c.aI(0,e.c)},
$S:z+6}
C.c4r.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.c4s.prototype={
$2(d,e){return d.c.aI(0,e.c)},
$S:z+6}
C.c4t.prototype={
$1(d){return d.ac()},
$S:z+23}
C.c4w.prototype={
$1(d){var w=d.c
return!w.cY(this.a.bN(-36e8))&&!w.c8(this.b)},
$S:z+7}
C.bXU.prototype={
$1(d){return C.hht(A.a_(d,x.N,x.z))},
$S:z+24}
C.bXV.prototype={
$2(d,e){return e.b.aI(0,d.b)},
$S:z+8}
C.bXS.prototype={
$1(d){return d.ac()},
$S:z+26}
C.bXT.prototype={
$2(d,e){return e.b.aI(0,d.b)},
$S:z+8}
C.bXX.prototype={
$1(d){var w=d.b
return!w.cY(this.a)&&!w.c8(this.b)},
$S:z+27}
C.c4D.prototype={
$1(d){return d.ac()},
$S:z+28}
C.c4C.prototype={
$1(d){return C.fRT(A.a_(x.f.a(d),x.N,x.z))},
$S:z+29}
C.c4B.prototype={
$1(d){return d.ac()},
$S:z+30}
C.c4A.prototype={
$1(d){return C.hkU(A.a_(x.f.a(d),x.N,x.z))},
$S:z+31}
C.c4F.prototype={
$1(d){return C.hkT(A.a_(x.f.a(d),x.N,x.z))},
$S:z+32}
C.c4G.prototype={
$2(d,e){return B.o.aI(d.f,e.f)},
$S:z+2}
C.c4H.prototype={
$1(d){return d.ac()},
$S:z+34}
C.dRm.prototype={
$1(d){return d.b6H(A.bj(d.e,!0,x.u))},
$S:z+36}
C.dRn.prototype={
$2(d,e){return B.o.aI(d.f,e.f)},
$S:z+2}
C.dRg.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dRh.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dR_.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.K(w,this.b)},
$S:0}
C.dR0.prototype={
$1(d){return new C.NM(this.a,null)},
$S:z+9}
C.dR1.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=B.d.bi(t,new C.dQZ(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){B.d.cu(u.d,w)
u.HD()}},
$S:0}
C.dQZ.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dRd.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(A.E(["role","admin","text",this.b],w,w))},
$S:0}
C.dRe.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(A.E(["role","ai","text",v],t,t))}else{v=t.d
v===$&&A.c()
t.d=C.hKH(v,w[0],w[3])
t.HD()
t=w[2]
if(t==null)t="Created "+J.aa(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(A.E(["role","ai","text",t],w,w))}},
$S:0}
C.dRf.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=B.d.gcV(v).Q
v.toString
w.hP(v)}},
$S:8}
C.dR7.prototype={
$1(d){return new C.NM(this.a,null)},
$S:z+9}
C.dR8.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dR6.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cu(w,this.b)},
$S:0}
C.dRc.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&A.c()
v=B.d.cu(w,s)
B.d.ck(t.d,u.a,v)
t.HD()},
$S:0}
C.dRb.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
return new C.YX(u[w],new C.dRa(v,w),null)},
$S:z+59}
C.dRa.prototype={
$1(d){var w=this.a
return w.n(new C.dR9(w,this.b,d))},
$S:z+40}
C.dR9.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dR3.prototype={
$0(){var w=this.a
return w.n(new C.dR2(w))},
$S:0}
C.dR2.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dR4.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?B.cp:B.aI
return new A.C(B.fq,A.d(t+": "+A.t(s),w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?B.a4:B.cq,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:109}
C.dR5.prototype={
$1(d){return this.a.a_5()},
$S:2}
C.dRl.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.rj:B.c
u=A.m(16)
t=A.m(16)
s=l?B.aI:B.aJ
r=w.d
q=A.aY(r).j(0.15)
p=A.m(12)
q=A.p(n,A.V(B.agh,l?B.bI:B.ai,n,n,n,20),B.h,n,n,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.bS,n,n,n)
p=A.aY(r).j(0.12)
o=A.m(8)
o=A.p(n,A.V(w.c,A.aY(r),n,n,n,18),B.h,n,n,new A.o(p,n,n,o,n,n,B.n),n,n,n,n,B.hn,n,n,n)
r=A.B(A.a([o,B.ax,A.D(A.d(w.b,n,n,n,n,n,n,A.l(n,n,l?B.aN:B.M,n,n,n,n,n,n,n,n,n,n,n,B.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),B.m,n,B.e,B.j,0,n,n)
p=w.e.length
return new A.C(B.d9,A.aD(!1,B.a1,!0,u,A.dL(!1,n,n,n,!0,n,n,n,!0,n,new H.arJ(q,e,!0,n),n,n,n,n,new C.dRi(m,e),!1,n,n,new A.b6(t,new A.ay(s,1,B.r,-1)),n,n,A.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,A.l(n,n,l?B.bI:B.ai,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,A.AR(n,n,n,new C.dRj(),B.J,new C.dRk(m,e),B.ch,n,x.N),n),B.h,v,0,n,n,n,n,n,B.ac),new A.cx(w.a,x.W))},
$S:109}
C.dRk.prototype={
$1(d){var w=this
if(d==="edit")w.a.a7H(w.b)
if(d==="questions")w.a.WE(w.b)
if(d==="delete")w.a.bEs(w.b)},
$S:2}
C.dRj.prototype={
$1(d){return D.cuP},
$S:134}
C.dRi.prototype={
$0(){return this.a.WE(this.b)},
$S:0}
C.cFx.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q===$&&A.c()
w=d.a===q.a
if(w){q=r.f
q===$&&A.c()
q=A.aY(q).j(0.2)}else q=B.cV.j(0.1)
v=A.m(10)
if(w){u=r.f
u===$&&A.c()
u=A.aY(u)}else u=B.K
u=A.H(u,B.r,1)
t=r.f
t===$&&A.c()
return A.aI(!1,s,!0,A.p(s,A.V(d,A.aY(t),s,s,s,s),B.h,s,s,new A.o(q,s,u,v,s,s,B.n),s,s,s,s,B.ch,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cFw(r,d),s,s,s,s,s,s,s)},
$S:1648}
C.cFw.prototype={
$0(){var w=this.a
return w.n(new C.cFu(w,this.b))},
$S:0}
C.cFu.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cFy.prototype={
$1(d){var w=null,v=this.a,u=A.aY(d),t=v.f
t===$&&A.c()
return A.aH(w,A.hi(u,w,t===d?D.bAT:w,w,14),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cFv(v,d),w,w,w,w,w,w,!1,B.ad)},
$S:448}
C.cFv.prototype={
$0(){var w=this.a
return w.n(new C.cFt(w,this.b))},
$S:0}
C.cFt.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cFz.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.cFA.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=B.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&A.c()
v=v.f
v===$&&A.c()
t=u.cA5(v,w,t)
A.a8(this.b,!1).M(t)
return null},
$S:0}
C.eBv.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return w.push(this.b)},
$S:0}
C.eBw.prototype={
$1(d){return new C.YW(this.a,null)},
$S:z+41}
C.eBC.prototype={
$2(d,e){return B.P},
$S:36}
C.eBB.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.rj:B.c
u=A.m(14)
t=A.m(14)
s=l?B.aI:B.aJ
r=w.d
if(r!=null&&r.length!==0){q=A.m(8)
r=A.bu(q,K.aMs(n,B.bP,36,B.p6,l?B.bI:B.ai,r,48),B.ao)}else r=A.V(D.Xc,A.aY(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=A.d(q,n,2,B.a2,n,n,n,A.l(n,n,l?B.aN:B.M,n,n,n,n,n,n,n,n,n,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.aa(w.c)
o=w.e?" \xb7 Printable":""
return A.aD(!1,B.a1,!0,u,A.dL(!1,n,n,n,!0,n,n,n,!0,n,r,n,n,n,n,new C.eBz(m,w,e),!1,n,n,new A.b6(t,new A.ay(s,1,B.r,-1)),n,n,A.d(""+p+" block(s)"+o,n,n,n,n,n,n,A.l(n,n,l?B.bI:B.ai,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,A.aF(n,n,n,n,D.bzj,n,n,n,new C.eBA(m,e),n,n,n,n,n,n),n),B.h,v,0,n,n,n,n,n,B.ac)},
$S:76}
C.eBA.prototype={
$0(){var w=this.a
w.n(new C.eBx(w,this.b))
w.atH()},
$S:0}
C.eBx.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cu(w,this.b)},
$S:0}
C.eBz.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.aWr(u.b),$async$$0)
case 2:s=e
if(s!=null){t.n(new C.eBy(t,u.c,s))
t.atH()}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eBy.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eBr.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eBp.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
return new C.Tu(w,"Answer Document",null)},
$S:z+42}
C.eBq.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eBt.prototype={
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
C.eBu.prototype={
$1(d){var w=this.a
return w.n(new C.eBs(w,d))},
$S:9}
C.eBs.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.c4x.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fjG.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dRX.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.dRD.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.K(w,new C.ln("image","",this.b,null))},
$S:0}
C.dRI.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.K(w,new C.ln("video","","data:video/mp4;base64,"+B.cP.gcs().aG(this.b),null))},
$S:0}
C.dRG.prototype={
$1(d){var w=null,v=x.p,u=A.v(A.a([A.aK(w,B.U,!1,w,!0,B.q,w,A.aL(),this.a,w,w,w,w,w,2,D.bF7,B.z,!0,w,!0,w,!1,w,B.ah,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.am,w,w,w,w),A.aK(w,B.U,!1,w,!0,B.q,w,A.aL(),this.b,w,w,w,w,w,2,D.bF6,B.z,!0,w,!0,w,!1,w,B.ah,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.am,w,w,w,w)],v),B.m,w,B.e,B.Q,0,B.p)
return A.eo(A.a([A.bK(!1,B.df,w,w,!0,w,w,new C.dRE(d),w,w),A.bL(D.f1q,new C.dRF(d),w)],v),w,w,w,u,w,w,w,w,D.eQm,w)},
$S:20}
C.dRE.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dRF.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.dRH.prototype={
$0(){var w,v=this.a.e
v===$&&A.c()
w=B.a.i(this.b.a.a)
return B.d.K(v,new C.ln("link","",B.a.i(this.c.a.a),w))},
$S:0}
C.dRz.prototype={
$1(d){return B.a.i(d)},
$S:14}
C.dRA.prototype={
$1(d){return d.length!==0},
$S:3}
C.dRB.prototype={
$1(d){return B.a.i(B.a.e1(d,A.ae("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:14}
C.dRC.prototype={
$1(d){return d.length!==0},
$S:3}
C.dRN.prototype={
$0(){var w=this.a.bxU()
A.a8(this.b,!1).M(w)
return null},
$S:0}
C.dRO.prototype={
$0(){return this.a.atI("**","**")},
$S:0}
C.dRP.prototype={
$0(){return this.a.atI("*","*")},
$S:0}
C.dRQ.prototype={
$0(){return this.a.atI("__","__")},
$S:0}
C.dRR.prototype={
$0(){return this.a.aUD("## Section title")},
$S:0}
C.dRS.prototype={
$0(){return this.a.aUD("\u2022 First point\n\u2022 Second point")},
$S:0}
C.dRT.prototype={
$0(){},
$S:0}
C.dRU.prototype={
$0(){var w=this.a
w.n(new C.dRM(w))},
$S:0}
C.dRM.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.K(w,D.djj)},
$S:0}
C.dRV.prototype={
$0(){var w=this.a
w.n(new C.dRL(w))},
$S:0}
C.dRL.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.K(w,D.djk)},
$S:0}
C.dRW.prototype={
$1(d){var w,v,u=null,t=d.b,s=t.a
A:{if("image"===s){w="Image"
break A}if("video"===s){w="Video"
break A}if("link"===s){w=t.d
if(w==null)w="Link"
break A}if("signature"===s){w="Signature"
break A}w=s
break A}v=this.b.a
w=A.d(w,u,u,u,u,u,u,A.l(u,u,v?B.ij:B.aF,u,u,u,u,u,u,u,u,11,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
v=v?B.cK:B.iX
return A.Ch(u,v,B.aiu,w,u,new C.dRK(this.a,d),u)},
$S:z+45}
C.dRK.prototype={
$0(){var w=this.a
return w.n(new C.dRJ(w,this.b))},
$S:0}
C.dRJ.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.cu(w,this.b.a)},
$S:0}
C.dRw.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.aNr},
$S:0}
C.dRx.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.fhH},
$S:0}
C.dRo.prototype={
$0(){var w=this.a
w.d=D.aNq
w.f=w.e=null},
$S:0}
C.dRp.prototype={
$0(){var w=this.a
w.d=D.aNr
w.f=null},
$S:0}
C.dRy.prototype={
$2(d,e){return B.o.aI(d.f,e.f)},
$S:z+2}
C.dRr.prototype={
$2(d,e){var w=this.a,v=w.gb1_()[e]
return new C.a9D(v,this.b,new C.dRq(w,v),null)},
$S:z+46}
C.dRq.prototype={
$0(){return this.a.c_J(this.b.a)},
$S:0}
C.dRt.prototype={
$2(d,e){return B.o.aI(d.f,e.f)},
$S:z+47}
C.dRv.prototype={
$2(d,e){return B.T},
$S:36}
C.dRu.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.rj:B.c,p=A.m(16),o=A.m(16),n=A.m(16),m=A.H(r?B.aI:B.aJ,B.r,1),l=A.a([new A.ab(0,B.G,B.x.j(r?0.28:0.06),B.dE,8)],x.V),k=A.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=A.m(10)
v=A.m(10)
k.push(A.bu(w,K.aMs(v,B.bP,52,D.Xc,r?B.bI:B.ai,j,52),B.ao))}else{j=u.d.d
w=A.aY(j).j(0.15)
v=A.m(12)
k.push(A.p(t,A.V(D.Xc,A.aY(j),t,t,t,24),B.h,t,t,new A.o(w,t,t,v,t,t,B.n),t,52,t,t,t,t,t,52))}k.push(B.bd)
k.push(A.D(A.d(s.b,t,t,t,t,t,t,A.l(t,t,r?B.aN:B.M,t,t,t,t,t,t,t,t,13,t,t,B.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(A.V(B.em,r?B.bI:B.ai,t,t,t,22))
return A.aD(!1,B.a1,!0,p,A.aI(!1,o,!0,A.p(t,A.B(k,B.m,t,B.e,B.j,0,t,t),B.h,t,t,new A.o(t,t,m,n,l,t,B.n),t,t,t,t,B.bl,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dRs(u.a,s),t,t,t,t,t,t,t),B.h,q,0,t,t,t,t,t,B.ac)},
$S:76}
C.dRs.prototype={
$0(){return this.a.c6q(this.b)},
$S:0}
C.c4z.prototype={
$1(d){return new C.a9v(d,this.a,null)},
$S:z+48}
C.czd.prototype={
$0(){var w=this.a.c,v=w.c,u=A.o3(v==null?w.b:v)
if(u!=null)A.iK(u,B.fg,null)},
$S:0}
C.cze.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.czf.prototype={
$1(d){var w=null,v=this.a.d.a,u=A.d("\u2022  ",w,w,w,w,w,w,A.l(w,w,v?B.cp:B.aI,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=B.a.i(d)
return new A.C(B.o6,A.B(A.a([u,A.D(A.d(t,w,w,w,w,w,w,A.l(w,w,v?B.cp:B.aI,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.F,w,B.e,B.j,0,w,w),w)},
$S:137}
C.d94.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d96.prototype={
$0(){return this.a.n(new C.d95(this.b))},
$S:0}
C.d95.prototype={
$0(){var w=this.a
return w.a.f?w.fT(0):w.p7(0)},
$S:0}
C.f2z.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.dSa.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.Bd)w.z=v
else w.Q=v},
$S:0}
C.dS1.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=B.d.gcV(v).Q
v.toString
w.lE(v,B.co,B.eL)},
$S:8}
C.dS3.prototype={
$1(d){return J.q(d,"role")==="ai"},
$S:91}
C.dS4.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.E(["role","user","text",this.b],v,v))
w.d.bJ(0,B.c0)
w.r=!0},
$S:0}
C.dS5.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.E(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.dS6.prototype={
$1(d){var w=J.a7(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+A.t(w.h(d,"text"))},
$S:143}
C.dS7.prototype={
$0(){var w=x.N
return this.a.f.push(A.E(["role","ai","text",this.b],w,w))},
$S:0}
C.dS8.prototype={
$0(){var w=x.N
return this.a.f.push(A.E(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.dS9.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dS2.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=A.mm(l,B.by.j(0.9),l,l,l,l,l,2,l,l)
return new A.C(B.c3,A.B(A.a([new A.a5(22,22,k,l),B.ax,A.d("Writing full song\u2026",l,l,l,l,l,l,A.l(l,l,this.b?B.aA:B.dx,l,l,l,l,l,l,l,l,12,B.cx,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),B.m,l,B.e,B.j,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?B.a7:B.a3
k=k.c
k.toString
k=A.aG(k,B.bR,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new A.a3(B.a3,B.a7,B.w,A.a([B.aB,B.by.j(0.85)],x.O),l,l)
else{q=x.O
q=new A.a3(B.a3,B.a7,B.w,v?A.a([B.bj,B.M],q):A.a([B.c,B.aN],q),l,l)}p=A.a([new A.ab(0,B.G,(u?B.by:B.aB).j(0.22),B.j8,14)],x.V)
o=A.H(B.c.j(u?0.2:0.08),B.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=B.c
else v=v?B.aJ:B.bg
n=u?13.5:15
m=u?B.bi:B.cx
return new A.bI(t,l,l,A.p(l,A.d(w,l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?B.a4:B.cq,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),B.h,l,new A.aX(0,k.a.a*0.94,0,1/0),new A.o(l,l,o,new A.bv(B.jS,B.jS,new A.b1(s,s),new A.b1(r,r)),p,q,B.n),l,l,l,B.kw,B.iL,l,l,l),l)},
$S:40}
C.dSh.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&A.c()
w=m.x
w===$&&A.c()
v=A.m(22)
u=this.b
t=x.O
s=u?A.a([D.a95,B.M,B.nd],t):A.a([B.q4,B.pZ,B.oP],t)
w=A.a([new A.ab(-4,B.G,B.aB.j(0.35+w*0.25),B.dn,28)],x.V)
r=A.H(B.c.j(u?0.08:0.5),B.r,1)
q=A.di()
p=q.a
p.$flags&2&&A.ah(p)
p[11]=0.001
m=m.x
m===$&&A.c()
q.fl(m*0.08)
q=A.fp(B.A,A.p(o,D.bw4,B.h,o,o,new A.o(o,o,A.H(B.aL.j(0.6),B.r,2),o,o,D.dWn,B.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=A.nq(B.jc,D.f5B,new C.dSe())
p=x.p
m=A.a([A.B(A.a([q,B.bd,A.D(A.v(A.a([m,A.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,A.l(o,o,u?B.aP:B.aT,o,o,o,o,o,o,o,o,10,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),B.F,o,B.e,B.j,0,B.p),1)],p),B.m,o,B.e,B.j,0,o,o),B.ab,A.B(A.a([n.as8(D.Bd,"Swahili","\ud83c\uddf9\ud83c\uddff",u),B.aa,n.as8(D.aAx,"English","\ud83c\uddec\ud83c\udde7",u),B.aa,n.as8(D.Be,"Mix","\ud83d\udd25",u)],p),B.m,o,B.e,B.j,0,o,o)],p)
if(n.x!==D.Be){t=A.a([B.P,n.coJ(u)],p)
if(n.w){q=n.x===D.Bd?D.a_V:D.a_a
p=A.U(q).k("J<1,r>")
q=A.z(new A.J(q,new C.dSf(n,u),p),p.k("ai.E"))
t.push(new A.C(B.ky,A.c8(B.bJ,q,B.bx,6,6),o))}B.d.v(m,t)}else{t=A.a([B.by.j(0.22),B.aB.j(0.12)],t)
q=A.m(12)
p=A.H(B.by.j(0.45),B.r,1)
m.push(new A.C(B.ky,A.p(o,A.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,A.l(o,o,u?B.id:B.kT,o,o,o,o,o,o,o,o,10,o,o,B.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),B.h,o,o,new A.o(o,o,p,q,o,new A.a3(B.a3,B.a7,B.w,t,o,o),B.n),o,o,o,o,B.bS,o,o,o),o))}m.push(B.P)
t=x.dc
n=A.z(new A.J(D.cR1,new C.dSg(n,u),t),t.k("ai.E"))
m.push(A.B(n,B.m,o,B.e,B.j,0,o,o))
return A.p(o,A.v(m,B.ag,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(o,o,r,v,w,new A.a3(B.aw,B.aC,B.w,s,o,o),B.n),o,o,o,I.acH,I.acW,o,o,o)},
$S:95}
C.dSe.prototype={
$1(d){return D.bIN.au(0,d)},
$S:66}
C.dSf.prototype={
$1(d){return this.a.coK(d,this.b)},
$S:z+49}
C.dSg.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aAz?6:0,m=o?5:0,l=A.m(12)
if(o){w=this.b
v=w?B.aB.j(0.45):B.aB.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=B.x.j(w?0.25:0.05)
u=v
v=w
w=u}t=A.m(12)
p=p.r?q:new C.dSd(p,d)
s=C.hmm(d)
if(o)r=B.c
else r=v?B.af:B.bg
r=A.d(s,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.hmn(d)
if(o)v=B.af
else v=v?B.c2:B.dx
return A.D(new A.C(new A.N(0,0,n,0),A.aD(!1,B.a1,!0,l,A.aI(!1,t,!0,new A.C(F.Vc,A.v(A.a([r,A.d(s,q,q,q,q,q,q,A.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.e,B.j,0,B.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.h,w,m,q,q,q,q,q,B.ac),q),1)},
$S:z+50}
C.dSd.prototype={
$0(){var w=this.a
return w.n(new C.dSc(w,this.b))},
$S:0}
C.dSc.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dSj.prototype={
$0(){var w=this.a
return w.n(new C.dSi(w))},
$S:0}
C.dSi.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dS0.prototype={
$0(){var w=this.a
return w.n(new C.dS_(w,this.b))},
$S:0}
C.dS_.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.Be
if(v===D.aAx&&w.Q==null)w.Q=B.d.gL(D.a_a).a},
$S:0}
C.dSk.prototype={
$0(){return this.a.ckv(this.b.a)},
$S:0}
C.dSb.prototype={
$0(){return this.a.Hu(this.b)},
$S:0}
C.dRY.prototype={
$1(d){return this.a.aUE()},
$S:2}
C.dRZ.prototype={
$0(){return this.a.aUE()},
$S:0}
C.fvw.prototype={
$1(d){var w=this
return new C.XG(w.a,w.b,w.c,new C.fvv(w.d),null)},
$S:z+51}
C.fvv.prototype={
$0(){return J.lG(this.a.b9())},
$S:0}
C.d6E.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.bbq()},
$S:28}
C.d6F.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a.f
m===$&&A.c()
m=m.x
m===$&&A.c()
w=this.b
v=m*3.141592653589793*2+w*0.55
m=this.c
u=x.w
t=A.aG(m,B.bR,u).w
s=Math.cos(v)
u=A.aG(m,B.bR,u).w
m=Math.sin(v*1.3)
r=Math.sin(v)
q=(w&1)===0
p=q?B.dP:B.ho
o=B.o.G(w,4)
q=q?B.aZ:B.aK
return A.an(n,A.d8(A.V(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:307}
C.d6K.prototype={
$0(){},
$S:0}
C.d6J.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&A.c()
w=t.x
w===$&&A.c()
v=B.n5.av(0,B.k.D(w,0,1))
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793)
w=A.di()
u=w.a
u.$flags&2&&A.ah(u)
u[11]=0.0028
w.fl(t*0.08)
w.jz(0.12)
return A.e5(B.A,A.fp(B.A,e,null,w,!0),0.5+v*0.5,null,null)},
$S:44}
C.d6G.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=0.55+r*0.45
r=A.p(t,t,B.h,t,t,new A.o(t,t,t,t,A.a([new A.ab(6,B.G,B.aZ.j(w*0.5),B.J,36)],x.V),t,B.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new A.am(B.A,t,B.a9,B.q,A.a([r,new A.a5(96,96,A.mm(B.c.j(0.08),B.aZ,t,t,t,t,t,6,u/v,t),t),A.d(""+s.a.c,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,38,t,t,B.u,t,t,!0,t,t,t,t,t,A.a([new A.cK(B.aZ.j(w),B.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:108}
C.d6H.prototype={
$1(d){return D.bIR.au(0,d)},
$S:66}
C.d6I.prototype={
$0(){var w=this.a
w.a.bbq()
w.a.e.$0()},
$S:0}
C.c6x.prototype={
$1(d){var w=!1
if(B.a.i(d.b.toLowerCase())===this.a)if(d.d===B.fl)if(d.x===B.dp){w=d.w
w=B.a.i(w==null?"":w)===this.b}return w},
$S:16}
C.c6K.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e0L.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.e1r.prototype={
$1(d){var w=this.a
if(w.c!=null)w.O_()},
$S:8}
C.e1s.prototype={
$1(d){var w=$.aT.p2$
if(w===B.r4||w===B.r5)return
this.a.Ds()},
$S:13}
C.e1t.prototype={
$1(d){this.a.cqM()},
$S:13}
C.e19.prototype={
$0(){this.a.HY(this.b.d,!1)},
$S:0}
C.e1a.prototype={
$0(){},
$S:0}
C.e1b.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.e1c.prototype={
$0(){},
$S:0}
C.e1d.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e1e.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.e1f.prototype={
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
C.e14.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=A.bj(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=A.bj(v[1],!0,x.N)
w.Np()
w.a5V()},
$S:0}
C.e0M.prototype={
$0(){this.b.HY(this.c.d+this.a.a,!1)},
$S:0}
C.e15.prototype={
$1(d){var w=d.d
return(w===B.fl||w===B.eI)&&d.x===B.dp},
$S:16}
C.e16.prototype={
$1(d){return d.a},
$S:165}
C.e17.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e18.prototype={
$0(){},
$S:0}
C.e0Q.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bj(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=A.bj(v[0],!0,x.N)},
$S:0}
C.e0R.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.e0Z.prototype={
$0(){},
$S:0}
C.e0W.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.e0X.prototype={
$0(){var w=this.a,v=A.z(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e0Y.prototype={
$0(){var w=this.a,v=A.z(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e1_.prototype={
$0(){return this.a.z=!0},
$S:0}
C.e10.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new A.uK(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.e11.prototype={
$0(){return this.a.z=!1},
$S:0}
C.e13.prototype={
$0(){var w=this.a
return w.n(new C.e12(w))},
$S:0}
C.e12.prototype={
$0(){return this.a.y=1},
$S:0}
C.e0S.prototype={
$0(){return this.a.y=1},
$S:0}
C.e0T.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.e1j.prototype={
$1(d){return d.a.length===0},
$S:16}
C.e1k.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:70}
C.e1o.prototype={
$0(){var w=this.a
return w.n(new C.e1h(w))},
$S:0}
C.e1h.prototype={
$0(){return this.a.y=1},
$S:0}
C.e1p.prototype={
$0(){var w=this.a
return w.n(new C.e1g(w))},
$S:0}
C.e1g.prototype={
$0(){return this.a.y=2},
$S:0}
C.e1q.prototype={
$0(){return A.iG(this.a,null)},
$S:0}
C.e1l.prototype={
$2$cloudRequest(d,e){return this.a.aVL(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1650}
C.e1m.prototype={
$0(){return this.a.Ds()},
$S:1}
C.e1n.prototype={
$0(){var w=this.a
return w.n(new C.e1i(w))},
$S:0}
C.e1i.prototype={
$0(){var w=this.a
return w.y=B.o.D(w.y-1,0,2)},
$S:0}
C.e0P.prototype={
$0(){A.eH()
var w=this.a
w.n(new C.e0O(w))},
$S:0}
C.e0O.prototype={
$0(){return this.a.y=0},
$S:0}
C.e0N.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=A.bAN(A.p(t,t,B.h,t,t,new A.o(t,t,A.H(B.c.j(0.55),B.r,1.2),t,A.a([new A.ab(1,B.G,B.au.j(0.55),B.J,18)],x.V),D.bGR,B.a6),t,t,t,t,t,t,t,t),B.eE,B.rH,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=A.a([],w)
for(u=0;u<3;++u)v.push(r.bXi(u))
return new A.am(B.W,t,B.a9,B.q,A.a([q,A.B(v,B.m,t,B.e,B.j,0,t,t)],w),t)},
$S:61}
C.e0V.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
A.eH()
w.n(new C.e0U(w,v))},
$S:0}
C.e0U.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.daS.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===B.fl||v===B.eI)return!0
if(d.c!==0)v=B.a.t(w,"clock-in daily earnings")||B.a.t(w,"clock-in earnings")
else v=!1
return v},
$S:16}
C.daT.prototype={
$1(d){return new A.Q(Date.now(),0,!1)},
$S:546}
C.daU.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new A.Q(Date.now(),0,!1)
u=A.dx(C.fCk(v.c,u))
w=this.c?new C.daR(v):null
return v.b2I(this.b,B.pf,D.eD,w,"Today","$"+u,D.eD)},
$S:1652}
C.daR.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.daV.prototype={
$2(d,e){var w=this.a
return w.b2I(this.b,B.jK,B.cb,w.w,"Balance","$"+A.dx(A.Jy(w.c.a,new C.daQ(w))),B.cC)},
$S:57}
C.daQ.prototype={
$0(){return this.a.c.d},
$S:77}
C.daL.prototype={
$0(){this.a.a.cHx()
return null},
$S:0}
C.daM.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b2(w,w,w,new C.brr(v,w),B.at)},
$S:71}
C.daN.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b7K(v,!0,B.au,D.nW,w)}else{v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b7J(v,D.nW,w)}return A.b2(w,w,w,v,B.at)},
$S:71}
C.daO.prototype={
$1(d){return new A.Q(Date.now(),0,!1)},
$S:546}
C.daP.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new A.Q(Date.now(),0,!1)
w=r.a
v=w.a.cGm(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:B.k.D(v/u,0,1)}u=w.d
u===$&&A.c()
s=w.e
s===$&&A.c()
return A.c3(new A.h4(A.a([u,s],x.U)),new C.daK(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1653}
C.daK.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=A.a([],m),k=o.b
if(k)B.d.v(l,A.ii(7,new C.daJ(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&A.c()
v=v.x
v===$&&A.c()
u=o.d
l.push(A.b2(n,n,n,new C.b7I(o.c,v,k,u,D.nW,D.baQ,n),D.esv))
v=A.H(B.c.j(0.1),B.r,1.2)
if(k)t=B.uE
else t=o.e?B.uw:D.brg
t=A.V(t,k?D.nW:B.be,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=A.d(s,n,n,n,n,n,n,A.l(n,n,B.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,B.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+A.dx(w.f&&w.d>0?w.d:o.f)}q=k?D.nW:B.c
w=A.d(w,n,n,n,n,n,n,A.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,B.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=A.m(999)
p=u.j(0.16)
u=A.H(u.j(0.5),B.r,1)
l.push(A.p(n,A.v(A.a([t,B.ar,s,B.av,w,B.P,A.p(n,A.d(o.r,n,n,n,n,n,n,A.l(n,n,k?D.nW:B.o0,n,n,n,n,n,n,n,n,9,n,n,B.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),B.h,n,n,new A.o(p,n,u,q,n,n,B.n),n,n,n,n,B.kz,n,n,n)],m),B.m,n,B.b6,B.j,0,B.p),B.h,n,n,new A.o(B.K,n,v,n,n,n,B.a6),n,176,n,n,n,n,n,176))
return A.au(new A.a5(276,276,new A.am(B.A,n,B.a9,B.h,l,n),n),n,n,n)},
$S:204}
C.daJ.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=B.k.G(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=B.o.G(d,3)
t=B.o.G(d,2)
return A.an(s,A.e1(A.d8(A.p(s,s,B.h,s,s,new A.o(s,s,s,A.m(40),s,new A.bR(B.A,0.5,B.w,s,0,A.a([D.nW.j(0.38),B.c.j(0.08),B.K],x.O),s,s),B.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),!0,s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:209}
C.dbb.prototype={
$0(){},
$S:0}
C.dbc.prototype={
$0(){},
$S:0}
C.dbd.prototype={
$1(d){return d.x===B.dp},
$S:16}
C.daY.prototype={
$0(){return this.a.a.d.d},
$S:77}
C.daX.prototype={
$0(){var w,v
A.eH()
w=this.a
v=this.b
w.n(new C.daW(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)A.f9(null,x.H)}},
$S:0}
C.daW.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.db8.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=A.m(12),q=s?w.b.j(0.18):B.c.j(0.04),p=A.H(s?w.b.j(0.7):B.c.j(0.08),B.r,1)
return A.D(new A.C(B.jH,A.aH(v,A.dj(B.A,A.d("$"+t,v,v,v,v,v,v,A.l(v,v,s?w.b:B.af,v,v,v,v,v,v,v,v,13,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,B.b9,new A.o(q,v,p,r,v,v,B.n),B.hS,v,38,v,v,v,v,v),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dba(u,d),v,v,v,v,v,v,!1,B.ad),v),1)},
$S:1655}
C.dba.prototype={
$0(){A.eH()
var w=this.a
w.n(new C.db9(w,this.b))},
$S:0}
C.db9.prototype={
$0(){var w=""+this.b
this.a.d.saU(0,w)
return w},
$S:0}
C.db7.prototype={
$4$bold$color(d,e,f,g){var w=null,v=A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?B.c:g,t=f?15:13
return new A.C(B.JU,A.B(A.a([v,B.b8,A.d(e,w,w,w,w,w,w,A.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?B.u:B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1656}
C.db6.prototype={
$1(d){return this.a.n(new C.db5())},
$S:2}
C.db5.prototype={
$0(){},
$S:0}
C.db0.prototype={
$1(d){return this.a.aRG(d)&&!A.fJE(d)},
$S:16}
C.db1.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:70}
C.db2.prototype={
$0(){return this.a.a.d.d},
$S:77}
C.db3.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return A.b(x.r.b(s)?s:A.dQ(s,x.H),$async$$0)
case 2:if(t.c!=null)t.n(new C.db_())
t.lA("Balance refreshed.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.db_.prototype={
$0(){},
$S:0}
C.db4.prototype={
$0(){var w=this.a
return w.n(new C.daZ(w))},
$S:0}
C.daZ.prototype={
$0(){return this.a.r+=80},
$S:0}
C.ffF.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:70}
C.fai.prototype={
$1(d){var w=J.a7(d),v=w.h(d,"toEmail"),u=!1
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.y(v,this.b)){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fq2.prototype={
$1(d){var w=J.a7(d),v=w.h(d,"toEmail")
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fah.prototype={
$1(d){var w,v,u
if(!C.hHy(d,this.a))return!1
w=J.a7(d)
v=w.h(d,"sessionUpdatedAt")
v=A.bh(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=A.bh(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=A.bh(J.k(w==null?"":w))}if(u!=null&&B.o.ak(new A.Q(Date.now(),0,!1).bv(u).a,36e8)>72)return!1
return!0},
$S:4}
C.f08.prototype={
$1(d){var w=this.a
if(B.o.G(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:85}
C.foS.prototype={
$0(){return $.fHj=null},
$S:11}
C.foT.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.fmM.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.fmN.prototype={
$0(){var w,v=this.a
$.fH7.W(0,v)
w=C.tl(this.b,v)
if(w!=null)A.P4(A.a([A.a_(w,x.N,x.z)],x._),v)},
$S:0}
C.fr_.prototype={
$1(d){return new C.Yt(this.a,this.b,null)},
$S:z+56}
C.dWf.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.dWi.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.dWj.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.n(new C.dWh(w))},
$S:2}
C.dWh.prototype={
$0(){return this.a.f=""},
$S:0}
C.dWk.prototype={
$1(d){return this.a.aUT()},
$S:2}
C.dWl.prototype={
$0(){var w=this.a
return w.n(new C.dWg(w,this.b))},
$S:0}
C.dWg.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f9t.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+B.a.aX(d,1)},
$S:14}
C.f9s.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+B.a.aX(d,1)},
$S:14}
C.fp8.prototype={
$1(d){var w,v=x.f
if(v.b(d))return A.a_(d,x.N,x.z)
try{v=A.a_(v.a(d.ac()),x.N,x.z)
return v}catch(w){return A.T(x.N,x.z)}},
$S:12}
C.fp9.prototype={
$1(d){return J.ct(d)},
$S:4}
C.fj3.prototype={
$1(d){return d.a!=="send_email"},
$S:274}
C.foA.prototype={
$1(d){var w=null,v=B.x.j(0.35),u=A.m(10),t=A.H(B.ba,B.r,1)
return A.p(B.A,A.d(d,w,w,w,w,w,w,B.ja,w,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,86,w,B.eZ,w,w,w,72)},
$S:543}
C.c8i.prototype={
$1(d){return J.k(d)},
$S:17}
C.c8j.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b4(d,new C.c8h(),x.S)
w=A.z(w,w.$ti.k("ai.E"))
return w}return A.bZ(7,0,!1,x.S)},
$S:541}
C.c8h.prototype={
$1(d){var w
if(A.iz(d))w=d
else{w=A.c4(J.k(d),null)
if(w==null)w=0}return w},
$S:419}
C.c8k.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b4(d,new C.c8g(),x.S)
w=A.z(w,w.$ti.k("ai.E"))
return w}return A.bZ(8,0,!1,x.S)},
$S:541}
C.c8g.prototype={
$1(d){var w
if(A.iz(d))w=d
else{w=A.c4(J.k(d),null)
if(w==null)w=0}return w},
$S:419}
C.c8m.prototype={
$1(d){return A.bj(d,!0,x.S)},
$S:540}
C.c8n.prototype={
$1(d){return A.bj(d,!0,x.S)},
$S:540}
C.c8f.prototype={
$1(d){var w=this.a
if(B.o.G(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:85}
C.c8l.prototype={
$2(d,e){return d+e},
$S:74}
C.c8e.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.q(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:74}
C.faN.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.faH.prototype={
$0(){return this.a.$1(D.po)},
$S:0}
C.faI.prototype={
$0(){return this.a.$1(D.po)},
$S:0}
C.faJ.prototype={
$0(){return this.a.$1(D.po)},
$S:0}
C.faK.prototype={
$0(){return this.a.$1(D.po)},
$S:0}
C.faL.prototype={
$0(){return this.a.$1(D.po)},
$S:0}
C.faM.prototype={
$0(){return this.a.$1(D.po)},
$S:0}
C.eYv.prototype={
$2(d,e){var w,v,u=this,t=null,s=B.o.ak(e,8),r=B.o.G(e,8),q=B.o.G(s+r,2),p=u.a,o=J.q(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.TX:D.b0D
if(o===0)w=t
else{w=x.O
w=o===1?A.a([B.c,B.aJ],w):A.a([B.bj,B.x],w)
v=n?B.aL:B.dr
w=A.p(t,t,B.h,t,t,new A.o(t,t,A.H(v,B.r,n?3:1),t,A.a([new A.ab(0,B.G,B.x.j(0.35),B.dE,4)],x.V),new A.bR(B.A,0.5,B.w,t,0,w,t,t),B.a6),t,28,t,t,t,t,t,28)}return A.aH(t,A.p(t,A.au(w,t,t,t),B.h,q,t,t,t,t,t,t,t,t,t,t),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eYu(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,B.ad)},
$S:75}
C.eYu.prototype={
$0(){var w=this,v=w.a,u=v.cLY(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.po:D.Gf
w.f.$1(v)}},
$S:0}
C.f9D.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new A.a5(u,u,A.ih(!0,v,v,B.z,Q.aIC,new C.f9C(w.a,w.b,w.c,w.d,u),9,v,B.dL,B.ak,!1),v)},
$S:162}
C.f9C.prototype={
$2(d,e){var w=this,v=null,u=A.m(12),t=A.m(12),s=w.a,r=s.at[e],q=r==="X"?B.aX:B.aE
return A.aD(!1,B.a1,!0,u,A.aI(!1,t,!0,A.au(A.d(r,v,v,v,v,v,v,A.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.f9B(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),B.h,B.fw,0,v,v,v,v,v,B.ac)},
$S:76}
C.f9B.prototype={
$0(){var w=this,v=w.a.cLZ(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.eXX.prototype={
$1(d){return new A.C(B.jH,C.fmD(d,!1),null)},
$S:302}
C.eXY.prototype={
$1(d){return C.fmD(d,!1)},
$S:1660}
C.eXZ.prototype={
$0(){var w=this,v=w.a
v.cwA(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.eY_.prototype={
$0(){var w=this
w.a.cwB(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.f6R.prototype={
$1(d){var w=this,v=null,u=d*6
return A.mL(v,B.bj,A.d(""+u,v,v,v,v,v,v,B.ce,v,v,v),B.di,new C.f6Q(w.a,w.b,u,w.c,w.d),v,v,new A.ay(B.c.j(0.2),1,B.r,-1),v)},
$S:1661}
C.f6Q.prototype={
$0(){var w=this,v=w.a,u=w.b.aB(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.f8L.prototype={
$1(d){return D.cUw[d]},
$S:82}
C.f8M.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=A.a([s.aB(6),s.aB(6),s.aB(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.f5B.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.f5C.prototype={
$0(){var w=this,v=w.a
if(w.b.ae()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.eYY.prototype={
$0(){var w=this,v=w.a.cC3(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.eYX.prototype={
$1(d){var w,v=null,u=J.q(this.a.fr[5-d],this.b)
if(u===0)w=B.lT
else w=u===1?B.dC:B.qE
return new A.fD(1,A.p(v,v,B.h,v,v,new A.o(w,v,A.H(B.bG,B.r,1),v,v,v,B.a6),v,v,v,B.mD,v,v,v,v),v)},
$S:1662}
C.f5O.prototype={
$1(d){var w=this
if(w.a.b64(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.f5P.prototype={
$0(){var w=this
if(w.a.b64(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.eYp.prototype={
$0(){var w=this
if(w.a.ae()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.feF.prototype={
$1(d){var w=J.q(d,"email")
return B.a.t(B.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.feG.prototype={
$1(d){var w,v=J.a7(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=B.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+B.a.i(J.k(v==null?"":v))+">"},
$S:49}
C.eqW.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aHw.prototype
w.bou=w.Z
w.bot=w.p
w=C.aHx.prototype
w.bow=w.Z
w.bov=w.p
w=C.aHy.prototype
w.boy=w.Z
w.box=w.p
w=C.aIt.prototype
w.bpv=w.Z
w.bpu=w.p
w=C.aI3.prototype
w.bp4=w.p
w=C.aIC.prototype
w.bpE=w.p
w=C.aHz.prototype
w.boz=w.p
w=C.aIK.prototype
w.bpN=w.p
w=C.aHE.prototype
w.boE=w.p
w=C.aHU.prototype
w.boV=w.p
w=C.aJr.prototype
w.bqu=w.p})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.axr.prototype,"gbJP","bJQ",19)
v(q,"gaOd","aOe",1)
v(C.axq.prototype,"gcnN","a_S",1)
v(q=C.axs.prototype,"gbP8","bP9",1)
v(q,"gbzA","bzB",1)
v(q=C.auG.prototype,"gch8","ch9",1)
v(q,"gc5Z","Or",0)
v(q,"gcry","crz",1)
v(q,"gck2","mt",0)
w(q,"gcad","cae",25)
w(q,"gcpZ","Q7",33)
v(q=C.azv.prototype,"gbHZ","Vw",0)
v(q,"gbXS","WY",0)
v(q,"gbXP","WX",0)
v(q,"gbXQ","aav",0)
v(q,"gbXR","Ns",0)
v(C.awR.prototype,"gbXT","bXU",1)
u(C,"hOJ","hkB",58)
t(C,"fJL",0,null,["$1","$0"],["h3h",function(){return C.h3h(null)}],3,0)
t(C,"bzh",0,null,["$1","$0"],["h3g",function(){return C.h3g(null)}],3,0)
v(C.Lp.prototype,"gDc","c3d",1)
v(C.aAg.prototype,"gchp","zL",0)
v(q=C.aAx.prototype,"gc6h","Ot",0)
v(q,"gcaV","Z8",0)
v(q,"gc_D","c_E",1)
v(q=C.aAJ.prototype,"gc_I","abk",0)
v(q,"gbtr","a5L",0)
v(q,"gchC","a_5",0)
s(q,"gc3I","c3J",35)
v(C.aCC.prototype,"gbtR","a5N",1)
v(q=C.aCB.prototype,"gc_H","abj",0)
v(q,"gc5g","acm",0)
v(q=C.aAL.prototype,"gbSP","a9l",0)
v(q,"gbSR","W9",0)
v(q,"gbSQ","a9m",0)
v(q=C.aAK.prototype,"gbwb","bwc",1)
v(q,"gbwd","bwe",1)
v(C.aAM.prototype,"gbBN","bBO",1)
v(C.axM.prototype,"gc_K","c_L",1)
v(q=C.aB7.prototype,"gaUN","c00",1)
r(q,"gaVJ",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["ac_","auh","aVL","aVK"],52,0,0)
r(q,"gc2W",0,4,null,["$4"],["c2X"],53,0,0)
v(q,"gc50","Yk",0)
v(q,"gc5Q","act",0)
v(q,"gc5M","acr",0)
v(q,"gbVE","aa5",0)
w(C.ayv.prototype,"gbUt","bUu",54)
w(q=C.ayx.prototype,"gcoS","coT",55)
v(q,"gcnE","cnF",1)
v(q,"gcv0","cv1",1)
v(C.aAV.prototype,"gc0l","aUT",1)
v(C.aBG.prototype,"gaVk","au5",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.jl,[C.cm6,C.cm3,C.cm4,C.cm5,C.cm2,C.eMu,C.eMs,C.eMw,C.eMt,C.f48,C.d37,C.d3i,C.d3q,C.d3r,C.d3t,C.d3l,C.d3j,C.d3k,C.d3m,C.d3n,C.d3d,C.d3e,C.d3c,C.d3g,C.d3h,C.d3a,C.d39,C.d3v,C.d3y,C.dGn,C.dGm,C.dGo,C.dGl,C.dGk,C.d31,C.d34,C.d35,C.d33,C.d32,C.d4U,C.d4V,C.d4W,C.d49,C.d4a,C.d4E,C.d4p,C.d4q,C.d4r,C.d4s,C.d4t,C.d3C,C.d48,C.d4F,C.d4O,C.d4C,C.d4B,C.d46,C.d47,C.d4K,C.d4L,C.d3E,C.d3F,C.d4i,C.d4j,C.d4k,C.d4h,C.d4u,C.d4v,C.d4w,C.d4x,C.d4y,C.d4z,C.d4I,C.d4l,C.d4m,C.d4n,C.d4o,C.d4M,C.d4N,C.d3G,C.d3H,C.d3I,C.d3J,C.d4G,C.d4H,C.d4g,C.d4A,C.d4e,C.d4P,C.d4Q,C.d4R,C.d4b,C.d3V,C.d3U,C.d3T,C.d3Z,C.d3S,C.d3Q,C.d3L,C.d3O,C.d3K,C.d43,C.d44,C.d3M,C.d8a,C.cwr,C.cwh,C.cwi,C.cwB,C.cwy,C.cwz,C.cwA,C.cwt,C.cws,C.cwj,C.cwu,C.cwU,C.cwQ,C.cwP,C.cwp,C.cwq,C.cwm,C.cwx,C.cwF,C.cwG,C.cwH,C.cwI,C.cwJ,C.cwK,C.cwL,C.cx5,C.cwZ,C.cwW,C.cx0,C.cwY,C.cwV,C.cwk,C.cwS,C.doF,C.doG,C.dow,C.dou,C.doE,C.dot,C.dos,C.dov,C.doA,C.doB,C.doy,C.doz,C.doH,C.doI,C.doJ,C.doK,C.eGq,C.eGr,C.cZk,C.ffz,C.dv5,C.duY,C.dv_,C.dv3,C.duZ,C.dv0,C.dv1,C.c1p,C.fmB,C.fmA,C.doh,C.dog,C.doi,C.dof,C.dNf,C.dNg,C.dNn,C.fuK,C.fuL,C.bVw,C.dGt,C.dGu,C.dGv,C.dGw,C.dGx,C.dGy,C.dGs,C.dGz,C.dGr,C.dGC,C.dGB,C.dGA,C.dNH,C.dNI,C.dNF,C.dNE,C.dNG,C.dNC,C.dRg,C.dRh,C.dR_,C.dR1,C.dRd,C.dRe,C.dR8,C.dR6,C.dRc,C.dR9,C.dR3,C.dR2,C.dRi,C.cFw,C.cFu,C.cFv,C.cFt,C.cFz,C.cFA,C.eBv,C.eBA,C.eBx,C.eBz,C.eBy,C.eBr,C.eBq,C.eBt,C.eBs,C.dRD,C.dRI,C.dRE,C.dRF,C.dRH,C.dRN,C.dRO,C.dRP,C.dRQ,C.dRR,C.dRS,C.dRT,C.dRU,C.dRM,C.dRV,C.dRL,C.dRK,C.dRJ,C.dRw,C.dRx,C.dRo,C.dRp,C.dRq,C.dRs,C.czd,C.d94,C.d96,C.d95,C.dSa,C.dS4,C.dS5,C.dS7,C.dS8,C.dS9,C.dSd,C.dSc,C.dSj,C.dSi,C.dS0,C.dS_,C.dSk,C.dSb,C.dRZ,C.fvv,C.d6K,C.d6I,C.e0L,C.e19,C.e1a,C.e1b,C.e1c,C.e1e,C.e1f,C.e14,C.e0M,C.e18,C.e0Q,C.e0R,C.e0Z,C.e0W,C.e0X,C.e0Y,C.e1_,C.e10,C.e11,C.e13,C.e12,C.e0S,C.e0T,C.e1o,C.e1h,C.e1p,C.e1g,C.e1q,C.e1m,C.e1n,C.e1i,C.e0P,C.e0O,C.e0V,C.e0U,C.daR,C.daQ,C.daL,C.dbb,C.dbc,C.daY,C.daX,C.daW,C.dba,C.db9,C.db5,C.db2,C.db3,C.db_,C.db4,C.daZ,C.foS,C.fmN,C.dWf,C.dWi,C.dWh,C.dWl,C.dWg,C.faH,C.faI,C.faJ,C.faK,C.faL,C.faM,C.eYu,C.f9B,C.eXZ,C.eY_,C.f6Q,C.f8M,C.f5C,C.eYY,C.f5P,C.eYp,C.eqW])
u(A.i3,[C.cm7,C.eMv,C.fjn,C.fjf,C.f45,C.f44,C.f47,C.d3A,C.d3B,C.d3p,C.d3o,C.d3s,C.d3b,C.d3f,C.d3u,C.dGq,C.d36,C.d4X,C.d4Y,C.d4Z,C.d5_,C.d50,C.d4D,C.d4J,C.d3D,C.d4T,C.d4S,C.d3W,C.d3X,C.d3Y,C.d4_,C.d41,C.d8b,C.cx6,C.cww,C.cwv,C.cwO,C.cwR,C.cwN,C.cwn,C.cwE,C.cwC,C.cwT,C.cwD,C.cx1,C.cx_,C.cx4,C.bUe,C.bUd,C.bUg,C.bUf,C.doD,C.doC,C.dox,C.doL,C.doM,C.f7o,C.f8B,C.cZl,C.cZj,C.bV_,C.ffy,C.dv6,C.dv4,C.c1q,C.f9m,C.fmz,C.c3n,C.c3m,C.c3P,C.dNd,C.dNe,C.fhV,C.fhI,C.fhH,C.f5F,C.c42,C.c43,C.c44,C.c41,C.c40,C.f3Q,C.fuG,C.fuH,C.fuI,C.fuJ,C.fuF,C.dNk,C.dNl,C.dNj,C.fuM,C.d51,C.c5D,C.f2P,C.dGD,C.dND,C.c4u,C.c4r,C.c4t,C.c4w,C.bXU,C.bXS,C.bXX,C.c4D,C.c4C,C.c4B,C.c4A,C.c4F,C.c4H,C.dRm,C.dR0,C.dQZ,C.dRf,C.dR7,C.dRb,C.dRa,C.dR5,C.dRk,C.dRj,C.cFx,C.cFy,C.eBw,C.eBp,C.eBu,C.c4x,C.fjG,C.dRX,C.dRG,C.dRz,C.dRA,C.dRB,C.dRC,C.dRW,C.c4z,C.cze,C.czf,C.f2z,C.dS1,C.dS3,C.dS6,C.dSe,C.dSf,C.dSg,C.dRY,C.fvw,C.d6E,C.d6H,C.c6x,C.c6K,C.e1r,C.e1s,C.e1t,C.e1d,C.e15,C.e16,C.e17,C.e1j,C.e1l,C.daS,C.daT,C.daO,C.daJ,C.dbd,C.db8,C.db7,C.db6,C.db0,C.fai,C.fq2,C.fah,C.f08,C.foT,C.fmM,C.fr_,C.dWj,C.dWk,C.f9t,C.f9s,C.fp8,C.fp9,C.fj3,C.foA,C.c8i,C.c8j,C.c8h,C.c8k,C.c8g,C.c8m,C.c8n,C.c8f,C.faN,C.eXX,C.eXY,C.f6R,C.f8L,C.f5B,C.eYX,C.f5O,C.feF,C.feG])
t(C.bnC,A.iJ)
u(A.af,[C.E0,C.aiF,C.aAf,C.aiE,C.aiG,C.ajx,C.afS,C.al4,C.Y9,C.Ya,C.Xh,C.alz,C.al3,C.LV,C.axt,C.amw,C.an9,C.Tt,C.NM,C.YX,C.YW,C.Tu,C.ans,C.ayj,C.anv,C.XG,C.ao1,C.ayu,C.ayw,C.Yt,C.apg])
u(A.ag,[C.aF7,C.aHx,C.aIt,C.aHw,C.aHy,C.bd1,C.auG,C.azv,C.bfq,C.bfr,C.awR,C.bfx,C.aI3,C.aIC,C.aHz,C.aAg,C.aAx,C.aAJ,C.b7f,C.aCC,C.aCB,C.aAL,C.aAK,C.bdf,C.aIK,C.aHE,C.btm,C.aHU,C.ayx,C.aAV,C.aJr])
u(A.kz,[C.eMx,C.f46,C.d38,C.d3z,C.d3x,C.d3w,C.dGp,C.d4f,C.d4d,C.d4c,C.d3R,C.d40,C.d3P,C.d42,C.d3N,C.d45,C.cwM,C.cwo,C.cwX,C.cx3,C.cx2,C.cwl,C.cZi,C.dv2,C.f9n,C.f9o,C.dNh,C.fji,C.fuE,C.dNm,C.dNp,C.dNo,C.d52,C.c5E,C.c4v,C.c4s,C.bXV,C.bXT,C.c4G,C.dRn,C.dR4,C.dRl,C.eBC,C.eBB,C.dRy,C.dRr,C.dRt,C.dRv,C.dRu,C.dS2,C.dSh,C.d6F,C.d6J,C.d6G,C.e1k,C.e0N,C.daU,C.daV,C.daM,C.daN,C.daP,C.daK,C.db1,C.ffF,C.c8l,C.c8e,C.eYv,C.f9D,C.f9C])
t(C.asV,C.E0)
u(A.aB,[C.qc,C.abt,C.Lp,C.Ha,C.qK,C.qL,C.ln,C.i9,C.hW,C.b5r,C.cWZ,C.d93,C.qR,C.Tv,C.M7,C.pn,C.aWS,C.oB,C.aon])
t(C.axr,C.aHx)
t(C.bfQ,C.aIt)
t(C.axq,C.aHw)
t(C.axs,C.aHy)
u(A.mf,[C.Ue,C.ayk,C.aoe,C.Hf,C.Dr])
u(A.at,[C.Zw,C.bo7,C.ace,C.Oj,C.a4y,C.LN,C.an3,C.ab4,C.ab3,C.aXH,C.ayi,C.a9D,C.aXe,C.a9v,C.ayv])
t(C.bfo,C.aI3)
t(C.bg1,C.aIC)
t(C.bbL,C.aHz)
t(C.aAM,C.aIK)
t(C.axM,C.aHE)
t(C.aB7,C.btm)
t(C.bdZ,C.aHU)
u(A.n7,[C.b7K,C.b7J,C.b7I,C.b7a,C.brr,C.bmv])
t(C.aBG,C.aJr)
w(C.aHw,C.Lp)
w(C.aHx,C.Lp)
w(C.aHy,C.Lp)
w(C.aIt,C.Lp)
w(C.aI3,A.eJ)
w(C.aIC,A.c7)
w(C.aHz,A.c7)
w(C.aIK,A.c7)
w(C.aHE,A.eJ)
w(C.aHU,A.eJ)
v(C.btm,A.ev)
w(C.aJr,A.c7)})()
A.kf(b.typeUniverse,JSON.parse('{"bnC":{"iJ":[]},"E0":{"af":[],"r":[]},"aF7":{"ag":["E0<1,2>"]},"asV":{"E0":["1","hu<1>"],"af":[],"r":[],"E0.T":"1","E0.S":"hu<1>"},"aiF":{"af":[],"r":[]},"aAf":{"af":[],"r":[]},"aiE":{"af":[],"r":[]},"aiG":{"af":[],"r":[]},"ajx":{"af":[],"r":[]},"afS":{"af":[],"r":[]},"axr":{"ag":["aiF"]},"bfQ":{"ag":["aAf"]},"axq":{"ag":["aiE"]},"axs":{"ag":["aiG"]},"bd1":{"ag":["ajx"]},"auG":{"ag":["afS"]},"al4":{"af":[],"r":[]},"Y9":{"af":[],"r":[]},"Ya":{"af":[],"r":[]},"ace":{"at":[],"r":[]},"Xh":{"af":[],"r":[]},"azv":{"ag":["al4"]},"Zw":{"at":[],"r":[]},"bo7":{"at":[],"r":[]},"bfq":{"ag":["Y9"]},"bfr":{"ag":["Ya"]},"Oj":{"at":[],"r":[]},"awR":{"ag":["Xh"]},"alz":{"af":[],"r":[]},"bfx":{"ag":["alz"]},"a4y":{"at":[],"r":[]},"al3":{"af":[],"r":[]},"bfo":{"ag":["al3"]},"LN":{"at":[],"r":[]},"an3":{"at":[],"r":[]},"LV":{"af":[],"r":[]},"bg1":{"ag":["LV"]},"ab4":{"at":[],"r":[]},"ab3":{"at":[],"r":[]},"axt":{"af":[],"r":[]},"bbL":{"ag":["axt"]},"aXH":{"at":[],"r":[]},"amw":{"af":[],"r":[]},"aAg":{"ag":["amw"]},"an9":{"af":[],"r":[]},"aAx":{"ag":["an9"]},"Tt":{"af":[],"r":[]},"NM":{"af":[],"r":[]},"YX":{"af":[],"r":[]},"YW":{"af":[],"r":[]},"aAJ":{"ag":["Tt"]},"b7f":{"ag":["NM"]},"aCC":{"ag":["YX"]},"aCB":{"ag":["YW"]},"Tu":{"af":[],"r":[]},"aAL":{"ag":["Tu"]},"ans":{"af":[],"r":[]},"a9D":{"at":[],"r":[]},"a9v":{"at":[],"r":[]},"ayj":{"af":[],"r":[]},"aAK":{"ag":["ans"]},"ayi":{"at":[],"r":[]},"aXe":{"at":[],"r":[]},"bdf":{"ag":["ayj"]},"anv":{"af":[],"r":[]},"aAM":{"ag":["anv"]},"XG":{"af":[],"r":[]},"axM":{"ag":["XG"]},"ao1":{"af":[],"r":[]},"ayu":{"af":[],"r":[]},"ayw":{"af":[],"r":[]},"aB7":{"ag":["ao1"],"ev":[]},"ayv":{"at":[],"r":[]},"bdZ":{"ag":["ayu"]},"b7K":{"aA":[]},"b7J":{"aA":[]},"b7I":{"aA":[]},"ayx":{"ag":["ayw"]},"b7a":{"aA":[]},"brr":{"aA":[]},"Yt":{"af":[],"r":[]},"aAV":{"ag":["Yt"]},"bmv":{"aA":[]},"apg":{"af":[],"r":[]},"aBG":{"ag":["apg"]}}'))
A.Ou(b.typeUniverse,JSON.parse('{"Lp":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=A.az
return{dw:w("mM<x?>"),gS:w("nI"),o:w("cZ"),g5:w("wf"),M:w("f8<n>"),k:w("Q"),gv:w("kW<ak<j_>>"),gh:w("kW<n>"),gH:w("kW<I>"),r:w("aw<~>"),dk:w("a0"),fw:w("P<nI>"),E:w("P<cZ>"),V:w("P<ab>"),O:w("P<x>"),A:w("P<a0>"),R:w("P<mU>"),B:w("P<ak<I>>"),m:w("P<a1<n,n>>"),_:w("P<a1<n,@>>"),b:w("P<qK>"),x:w("P<qL>"),gi:w("P<j_>"),a:w("P<ln>"),Y:w("P<hW>"),v:w("P<i9>"),dA:w("P<Ha>"),F:w("P<qR>"),Z:w("P<kc>"),g:w("P<hz>"),gK:w("P<+at,details,id(Q,n,n)>"),C:w("P<cK>"),s:w("P<n>"),G:w("P<iJ>"),eO:w("P<es>"),d9:w("P<eK>"),p:w("P<r>"),n:w("P<O>"),t:w("P<I>"),U:w("P<aA?>"),d4:w("P<n?>"),ck:w("ak<qK>"),e:w("ak<qL>"),ac:w("ak<j_>"),dZ:w("ak<ln>"),I:w("ak<hW>"),j:w("ak<@>"),L:w("ak<I>"),eq:w("a1<n,n>"),P:w("a1<n,@>"),f:w("a1<@,@>"),cl:w("cT<n,C>"),aS:w("J<a0,rB>"),dc:w("J<Hf,bH>"),dv:w("J<n,n>"),bL:w("J<O,bH>"),a3:w("J<I,bH>"),gN:w("J<I,pb>"),w:w("iE"),b1:w("qK"),Q:w("qL"),bP:w("ln"),i:w("hW"),u:w("i9"),gp:w("Tv"),J:w("M7"),D:w("pn"),an:w("kc"),c:w("cp"),K:w("aB"),d:w("jd<n>"),di:w("+outcome,snapshot(Ue,a3V?)"),ee:w("+after,before(O,O)"),et:w("+categories,error,message,replaceId(ak<hW>,n?,n?,n?)"),cz:w("DP"),bJ:w("dy<n>"),N:w("n"),e7:w("bl<O>"),W:w("cx<n>"),am:w("k3<I>"),cc:w("a4<n>"),aM:w("e3<cZ>"),bG:w("e3<O>"),l:w("r"),gm:w("qc"),ec:w("abt"),q:w("mE"),y:w("S"),gR:w("O"),z:w("@"),S:w("I"),eG:w("cZ?"),cJ:w("Q?"),gw:w("ak<a1<n,@>>?"),bM:w("ak<@>?"),h:w("a1<n,@>?"),X:w("aB?"),gE:w("+code,qrPayload(n,n)?"),bY:w("+isLive,ownerEmail,snapshotJson(S,n,n)?"),T:w("n?"),cD:w("O?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aPI=new A.bv(B.bD,B.j9,B.bD,B.j9)
D.eD=new A.x(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,B.t)
D.aQa=new A.ay(D.eD,1,B.r,-1)
D.aQc=new A.ay(B.af,2,B.r,-1)
D.aQf=new A.ay(B.aS,2,B.r,-1)
D.aQh=new A.ay(B.cp,0.8,B.r,-1)
D.aQx=new A.ay(B.aL,2,B.r,-1)
D.aQE=new A.ay(B.fc,1.6,B.r,-1)
D.aRr=new A.aX(0,330,0,1/0)
D.aRx=new A.aX(0,176,0,1/0)
D.aRy=new A.aX(0,1/0,0,260)
D.aRP=new A.aX(90,1/0,0,1/0)
D.aUx=new A.ab(0,B.G,B.dr,B.J,4)
D.cDD=w([D.aUx],x.V)
D.aS2=new A.o(B.c,null,null,null,D.cDD,null,B.a6)
D.cy6=w([D.eD,B.aW],x.O)
D.bJS=new A.a3(B.a3,B.a7,B.w,D.cy6,null,null)
D.aSh=new A.o(null,null,null,null,null,D.bJS,B.a6)
D.aSm=new A.o(B.bh,null,null,null,null,null,B.a6)
D.b2z=new A.x(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,B.t)
D.cRM=w([P.a8M,D.b2z],x.O)
D.bIX=new A.a3(B.aY,B.b1,B.w,D.cRM,null,null)
D.aSC=new A.o(null,null,null,B.ml,null,D.bIX,B.n)
D.b8u=new A.x(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,B.t)
D.d0K=w([D.b8u,M.aat],x.O)
D.bI6=new A.a3(B.aY,B.b1,B.w,D.d0K,null,null)
D.aT0=new A.o(null,null,null,B.pP,null,D.bI6,B.n)
D.cO5=w([B.aB,B.by],x.O)
D.bID=new A.a3(B.a3,B.a7,B.w,D.cO5,null,null)
D.aT5=new A.o(null,null,null,null,null,D.bID,B.a6)
D.eG7=new A.F(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYu=new A.w("\ud83c\udf89",null,D.eG7,null,null,null,null,null,null,null,null,null)
D.aYb=new A.cw(B.A,null,null,D.eYu,null)
D.aZt=new A.x(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,B.t)
D.a8f=new A.x(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,B.t)
D.b0D=new A.x(1,0.8431372549019608,0.8,0.7843137254901961,B.t)
D.b0H=new A.x(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,B.t)
D.nW=new A.x(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,B.t)
D.rj=new A.x(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,B.t)
D.a95=new A.x(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,B.t)
D.b2i=new A.x(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,B.t)
D.TC=new A.x(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,B.t)
D.w5=new A.x(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,B.t)
D.b3s=new A.x(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,B.t)
D.TX=new A.x(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,B.t)
D.aac=new A.x(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,B.t)
D.b6T=new A.x(1,0.9529411764705882,0.9411764705882353,1,B.t)
D.b6Z=new A.x(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,B.t)
D.aaw=new A.x(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,B.t)
D.aaL=new A.x(1,0,0.8392156862745098,0.30980392156862746,B.t)
D.aaM=new A.x(1,1,0.9529411764705882,0.6901960784313725,B.t)
D.b86=new A.x(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,B.t)
D.b8a=new A.x(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,B.t)
D.b8Y=new A.x(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,B.t)
D.Ul=new A.x(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,B.t)
D.b9O=new A.x(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,B.t)
D.bag=new A.x(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,B.t)
D.Ur=new A.x(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,B.t)
D.baQ=new A.x(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,B.t)
D.abH=new A.a1U(2,"active")
D.bep=new A.b8(42e5)
D.bes=new A.b8(53e4)
D.beu=new A.b8(58e4)
D.bey=new A.b8(82e4)
D.bfm=new A.N(0,30,0,30)
D.bfu=new A.N(0,4,0,8)
D.bfx=new A.N(0,8,12,8)
D.bga=new A.N(12,0,12,88)
D.bgh=new A.N(12,11,12,10)
D.bgD=new A.N(13,10,12,10)
D.bgL=new A.N(14,10,14,2)
D.bgX=new A.N(14,14,10,14)
D.bhs=new A.N(16,12,16,96)
D.bhx=new A.N(16,14,16,8)
D.bhB=new A.N(16,16,16,96)
D.bhD=new A.N(16,18,16,16)
D.bhH=new A.N(16,4,16,10)
D.biC=new A.N(18,6,18,40)
D.biE=new A.N(18,8,18,130)
D.biR=new A.N(20,10,20,20)
D.bj3=new A.N(20,18,20,18)
D.bj7=new A.N(20,20,20,22)
D.bjt=new A.N(22,22,22,16)
D.bk6=new A.N(2,0,2,10)
D.bkP=new A.N(4,8,12,4)
D.bl2=new A.N(6,1,6,1)
D.bl4=new A.N(6,4,0,0)
D.bl7=new A.N(6,6,12,4)
D.bls=new A.N(8,4,12,8)
D.f0G=new A.w("Activity",null,B.fR,null,null,null,null,null,null,null,null,null)
D.bn6=new A.bH(1,B.br,D.f0G,null)
D.f8h=new A.w("Game Receipts",null,A0.BS,null,null,null,null,null,null,null,null,null)
D.eTX=new A.w("Your last 59 games \xb7 kept for 7 days",null,F.aKl,null,null,null,null,null,null,null,null,null)
D.cuy=w([D.f8h,D.eTX],x.p)
D.bbM=new A.fm(B.ak,B.e,B.j,B.F,null,B.p,null,0,D.cuy,null)
D.bn9=new A.bH(1,B.br,D.bbM,null)
D.bp5=new A.a0(58607,"MaterialIcons",!1)
D.Xc=new A.a0(62178,"MaterialIcons",!1)
D.bpU=new A.a0(62410,"MaterialIcons",!1)
D.br2=new A.a0(63258,"MaterialIcons",!1)
D.br8=new A.a0(63304,"MaterialIcons",!1)
D.br9=new A.a0(63306,"MaterialIcons",!1)
D.brg=new A.a0(63330,"MaterialIcons",!1)
D.ahG=new A.a0(984777,"MaterialIcons",!1)
D.btK=new A.ad(B.Ek,13,B.af,null,null,null)
D.btS=new A.ad(B.jL,13,B.oX,null,null,null)
D.ahP=new A.ad(B.l0,null,B.c,null,null,null)
D.bvo=new A.ad(B.Am,34,B.aZ,null,null,null)
D.bvW=new A.ad(B.Eo,19,B.c,null,null,null)
D.bqc=new A.a0(62804,"MaterialIcons",!1)
D.bw4=new A.ad(D.bqc,24,B.aL,null,null,null)
D.bww=new A.ad(B.A6,28,B.bk,null,null,null)
D.bx_=new A.ad(B.ahn,42,B.c,null,null,null)
D.bx8=new A.ad(B.Y6,30,B.c,null,null,null)
D.bxJ=new A.ad(B.fD,null,B.c,null,null,null)
D.by3=new A.ad(B.jL,16,B.c,null,null,null)
D.byE=new A.ad(B.qq,13,B.c,null,null,null)
D.byN=new A.ad(B.l0,18,B.c,null,null,null)
D.bzj=new A.ad(B.uv,null,B.dC,null,null,null)
D.bzX=new A.ad(B.od,28,B.c,null,null,null)
D.bAb=new A.ad(B.mK,22,null,null,null,null)
D.bAy=new A.ad(B.qn,null,null,null,null,null)
D.bAK=new A.ad(B.iM,28,B.c,null,null,null)
D.bAM=new A.ad(B.ct,null,B.aP,null,null,null)
D.bAT=new A.ad(B.WU,14,B.c,null,null,null)
D.bBn=new A.ad(B.Lk,36,B.aK,null,null,null)
D.bBu=new A.ad(B.oe,16,B.c,null,null,null)
D.bBK=new A.ad(B.el,null,null,null,null,null)
D.b2U=new A.x(1,0.23137254901960785,0.16470588235294117,0,B.t)
D.bCi=new A.ad(B.dP,9,D.b2U,null,null,null)
D.bs5=new A.a0(983146,"MaterialIcons",!1)
D.bCy=new A.ad(D.bs5,null,B.aL,null,null,null)
D.bD2=new A.ad(B.uy,28,D.eD,null,null,null)
D.bD7=new A.ad(B.rU,null,B.fc,null,null,null)
D.bDc=new A.ad(B.hT,20,D.eD,null,null,null)
D.bss=new A.a0(983377,"MaterialIcons",!1)
D.bDm=new A.ad(D.bss,64,B.c,null,null,null)
D.bDP=new A.ad(B.fX,24,B.c,null,null,null)
D.bEJ=new A.e2(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bET=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bF6=new A.e2(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bF7=new A.e2(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.b1k=new A.x(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,B.t)
D.b3L=new A.x(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,B.t)
D.b3t=new A.x(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,B.t)
D.cS2=w([D.b1k,D.b3L,D.b3t],x.O)
D.bG_=new A.a3(B.aw,B.aC,B.w,D.cS2,null,null)
D.cWl=w([B.bm,B.aW],x.O)
D.bGi=new A.a3(B.aw,B.aC,B.w,D.cWl,null,null)
D.b2u=new A.x(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,B.t)
D.b7m=new A.x(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,B.t)
D.cE3=w([D.b2u,D.b7m],x.O)
D.bGo=new A.a3(B.aw,B.aC,B.w,D.cE3,null,null)
D.cTr=w([B.bj,B.M,B.eA],x.O)
D.bGv=new A.a3(B.aw,B.aC,B.w,D.cTr,null,null)
D.bGA=new A.a3(B.a3,B.a7,B.w,G.aoZ,null,null)
D.cDw=w([B.fc,B.cb],x.O)
D.ajw=new A.a3(B.a3,B.a7,B.w,D.cDw,null,null)
D.cDQ=w([B.fc,B.by],x.O)
D.ajx=new A.a3(B.a3,B.a7,B.w,D.cDQ,null,null)
D.asD=w([D.nW,B.au,B.bT],x.O)
D.bGR=new A.a3(B.aw,B.aC,B.w,D.asD,null,null)
D.b5a=new A.x(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,B.t)
D.cBE=w([D.b5a,E.a8n,B.M],x.O)
D.bGW=new A.a3(B.aw,B.aC,B.w,D.cBE,null,null)
D.aOz=new A.d6(-0.8,-1)
D.aOB=new A.d6(1.2,1)
D.cAS=w([B.c,B.ev,B.h6,B.c,B.fe,B.aX,B.mp],x.O)
D.cSW=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.bGY=new A.a3(D.aOz,D.aOB,B.w,D.cAS,D.cSW,null)
D.b7i=new A.x(1,0,0.7607843137254902,0.26666666666666666,B.t)
D.b5o=new A.x(1,0,0.6392156862745098,0.22745098039215686,B.t)
D.cS1=w([D.b7i,D.b5o],x.O)
D.bHn=new A.a3(B.a3,B.a7,B.w,D.cS1,null,null)
D.bHs=new A.a3(B.aw,B.aC,B.w,B.NL,null,null)
D.cNc=w([E.Uo,B.u8],x.O)
D.bHu=new A.a3(B.a3,B.a7,B.w,D.cNc,null,null)
D.cQY=w([B.fU,B.fo],x.O)
D.ajC=new A.a3(B.a3,B.a7,B.w,D.cQY,null,null)
D.cVW=w([B.bh,B.bV],x.O)
D.ajD=new A.a3(B.a3,B.a7,B.w,D.cVW,null,null)
D.cm3=w([B.dv,B.f0],x.O)
D.bI8=new A.a3(B.aw,B.aC,B.w,D.cm3,null,null)
D.czY=w([B.c,B.b7],x.O)
D.bIj=new A.a3(B.a3,B.a7,B.w,D.czY,null,null)
D.a9Q=new A.x(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,B.t)
D.b0r=new A.x(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,B.t)
D.cKd=w([D.a9Q,B.j0,B.q_,B.au,D.b0r],x.O)
D.bKK=w([0,0.28,0.55,0.82,1],x.n)
D.bIk=new A.a3(B.aw,B.aC,B.w,D.cKd,D.bKK,null)
D.bIu=new A.a3(B.a3,B.a7,B.w,B.Ol,null,null)
D.bIv=new A.a3(B.a3,B.a7,B.w,G.ari,null,null)
D.bIy=new A.a3(B.a3,B.a7,B.w,D.asD,null,null)
D.cF6=w([B.by,B.fc],x.O)
D.bIL=new A.a3(B.a3,B.a7,B.w,D.cF6,null,null)
D.cZE=w([B.aB,B.by,B.b7],x.O)
D.bIN=new A.a3(B.a3,B.a7,B.w,D.cZE,null,null)
D.cNl=w([B.aZ,B.bH,B.fT],x.O)
D.bIR=new A.a3(B.a3,B.a7,B.w,D.cNl,null,null)
D.cZn=w([B.bj,B.aI,B.bI,B.aJ,B.aN,B.cp,B.ai],x.O)
D.cIz=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.bIW=new A.a3(B.aw,B.aC,B.w,D.cZn,D.cIz,null)
D.bJ5=new A.a3(B.aw,B.aC,B.w,B.Zq,null,null)
D.cNQ=w([D.TC,B.e_],x.O)
D.bJe=new A.a3(B.a3,B.a7,B.w,D.cNQ,null,null)
D.cUE=w([D.aaw,D.a95,B.M],x.O)
D.bJn=new A.a3(B.aw,B.aC,B.w,D.cUE,null,null)
D.b9j=new A.x(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,B.t)
D.cAq=w([B.eT,B.fU,D.b9j],x.O)
D.bJU=new A.a3(B.aw,B.aC,B.w,D.cAq,null,null)
D.cFB=w([D.nW,B.au],x.O)
D.bJV=new A.a3(B.aw,B.aC,B.w,D.cFB,null,null)
D.bKf=w([F.Ap,B.od,B.jL,B.hq,B.kE,B.kF,B.kD,B.qt,B.m4,B.eN,B.lu,B.x1,B.Ew],x.A)
D.bNC=w([10,50,100,200],x.t)
D.bXi=w([1,3,5,7],x.t)
D.c1f=w([25,50,100,250],x.t)
D.bs0=new A.a0(983104,"MaterialIcons",!1)
D.c9H=w([B.od,B.lv,B.mK,B.lt,B.ho,B.uE,D.bs0,B.Y1],x.A)
D.cf0=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cqQ=w([0,0.22,0.5,0.78,1],x.n)
D.cuG=w([8,13,19],x.n)
D.ZK=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.f_L=new A.w("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.dUS=new A.jd("questions",48,D.f_L,null,x.d)
D.eRm=new A.w("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.dUX=new A.jd("edit",48,D.eRm,null,x.d)
D.f6X=new A.w("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.dV2=new A.jd("delete",48,D.f6X,null,x.d)
D.cuP=w([D.dUS,D.dUX,D.dV2],A.az("P<oF<n>>"))
D.cDY=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.cEa=w([B.bL,B.il],x.O)
D.a1i=new C.ln("text","",null,null)
D.cFf=w([D.a1i],x.a)
D.cGB=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.ebW=new A.abQ(B.m2,"Home")
D.e3y=new A.abQ(B.pf,"Growth")
D.e7J=new A.abQ(B.jL,"Wallet")
D.cIL=w([D.ebW,D.e3y,D.e7J],A.az("P<+icon,label(a0,n)>"))
D.cJ8=w([4,0,2,6,8,1,3,5,7],x.t)
D.cJg=w([B.c,B.bM,B.cp],x.O)
D.dn_=new C.qR("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.dn2=new C.qR("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.dn0=new C.qR("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.dmV=new C.qR("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.dmW=new C.qR("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.dn3=new C.qR("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a_a=w([D.dn_,D.dn2,D.dn0,D.dmV,D.dmW,D.dn3],x.F)
D.a_f=w([B.aE,B.bm,B.da,B.aZ],x.O)
D.b31=new A.x(1,1,0.8980392156862745,0.4,B.t)
D.cNW=w([B.Tl,D.b31,B.q_,B.hP,B.j0],x.O)
D.a_k=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.NT=w(["checkers_deluxe","tic_tac_go"],x.s)
D.bKj=w([0,1,2],x.t)
D.c9V=w([3,4,5],x.t)
D.cmC=w([6,7,8],x.t)
D.bKl=w([0,3,6],x.t)
D.bXn=w([1,4,7],x.t)
D.c3I=w([2,5,8],x.t)
D.bKp=w([0,4,8],x.t)
D.c3F=w([2,4,6],x.t)
D.cQ6=w([D.bKj,D.c9V,D.cmC,D.bKl,D.bXn,D.c3I,D.bKp,D.c3F],x.B)
D.aAy=new C.Hf(0,"abab")
D.dmT=new C.Hf(1,"aaaBbb")
D.aAz=new C.Hf(2,"aabb")
D.cR1=w([D.aAy,D.dmT,D.aAz],A.az("P<Hf>"))
D.cRh=w([],x.a)
D.as1=w([],x.v)
D.cUw=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.Oc=w([1,2,3,-1,-2],x.t)
D.d0A=w([B.jh,B.aB],x.O)
D.fh8=new C.qc("dice","Dice Roll","Roll for cash & prizes!",B.m0,D.d0A)
D.fh5=new C.qc("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",B.qo,B.aqQ)
D.cWF=w([B.dk,B.bk],x.O)
D.fh3=new C.qc("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",B.XP,D.cWF)
D.d08=w([B.dI,B.ms],x.O)
D.fh9=new C.qc("memory","Memory Match","Match pairs \u2014 solo or multiplayer",B.Y1,D.d08)
D.bX5=w([B.jA,B.oV],x.O)
D.fh6=new C.qc("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",G.XB,D.bX5)
D.cUv=w([M.kV,D.TX],x.O)
D.fh4=new C.qc("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",B.Ez,D.cUv)
D.fh7=new C.qc("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",B.ct,Ai.mL)
D.cVV=w([D.fh8,D.fh5,D.fh3,D.fh9,D.fh6,D.fh4,D.fh7],A.az("P<qc>"))
D.cXb=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.b6H=new A.x(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,B.t)
D.b6z=new A.x(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,B.t)
D.abc=new A.x(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,B.t)
D.cXV=w([D.b6H,D.b6z,D.abc],x.O)
D.b8q=new A.x(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,B.t)
D.cXX=w([B.a8m,D.b8q,D.abc],x.O)
D.cYw=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.asY=w([D.nW,B.c,D.eD,B.bU,B.be,B.au],x.O)
D.dmY=new C.qR("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.dmX=new C.qR("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.dmU=new C.qR("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.dn1=new C.qR("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.dn4=new C.qR("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.dmZ=new C.qR("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a_V=w([D.dmY,D.dmX,D.dmU,D.dn1,D.dn4,D.dmZ],x.F)
D.d0l=w([B.cb,B.oV],x.O)
D.dKK={checkers_deluxe:0,tic_tac_go:1}
D.ayy=new A.bs(D.dKK,["Checkers Deluxe","Tic Tac Go"],A.az("bs<n,n>"))
D.dJV={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.ayK=new A.bs(D.dJV,[1,2,3,4,5,6,7],A.az("bs<n,I>"))
D.dfY=new C.a4y(null)
D.djj=new C.ln("signature","NGMY Support Team",null,null)
D.djk=new C.ln("divider","",null,null)
D.P5=new C.Tv(!1,!1,!1,!1)
D.P7=new C.M7(!1,!1,!1,!1)
D.dkm=new C.M7(!0,!0,!1,!1)
D.Bd=new C.aoe(0,"swahili")
D.aAx=new C.aoe(1,"english")
D.Be=new C.aoe(2,"mix")
D.cPC=w([B.h5,B.j_,B.dl],x.O)
D.bqS=new A.a0(63118,"MaterialIcons",!1)
D.do5=new C.oB(D.cPC,B.h4,B.aZ,"BACKGAMMON","\ud83c\udfb2",D.bqS)
D.bsR=new A.a0(983637,"MaterialIcons",!1)
D.do6=new C.oB(Af.at8,B.bm,B.f2,"EURO WHEEL","\ud83c\udfa1",D.bsR)
D.cXt=w([B.M,B.aI,B.bt],x.O)
D.do7=new C.oB(D.cXt,B.aN,B.ai,"ROYALE","\u265f\ufe0f",G.XB)
D.cDy=w([B.dv,B.bk,B.e4],x.O)
D.do8=new C.oB(D.cDy,B.aE,B.da,"CONNECT 4","\ud83d\udd34",B.Ye)
D.cT6=w([B.ds,B.f0,B.oV],x.O)
D.do9=new C.oB(D.cT6,B.u6,B.cb,"PUNTO BANCO","\ud83d\udc8e",B.lv)
D.cm5=w([B.nc,B.i0,B.lk],x.O)
D.doa=new C.oB(D.cm5,B.iV,B.jB,"DOMINOES","\ud83c\udc53",B.ahp)
D.cY7=w([B.wd,B.rm,B.hw],x.O)
D.dob=new C.oB(D.cY7,B.zo,B.hk,"WAR","\u2694\ufe0f",N.Xx)
D.doc=new C.oB(B.at2,B.aL,B.ai,"PREMIUM","\ud83c\udfae",B.m0)
D.cF7=w([B.je,B.aB,B.dI],x.O)
D.dod=new C.oB(D.cF7,B.dZ,B.fc,"JACKPOT","\ud83c\udfb0",B.m0)
D.cSk=w([B.kT,B.lO,B.by],x.O)
D.doe=new C.oB(D.cSk,B.pZ,B.bU,"LIVE BINGO","\ud83c\udfb1",B.Ab)
D.cy4=w([B.j_,B.e_,B.aZ],x.O)
D.bqi=new A.a0(62865,"MaterialIcons",!1)
D.dof=new C.oB(D.cy4,B.rq,B.aL,"BIG SPIN","\ud83c\udfa1",D.bqi)
D.dog=new C.oB(B.a_U,B.aJ,B.bm,"HOLD'EM","\u2660\ufe0f",B.jL)
D.cYv=w([B.eT,B.fo,B.aW],x.O)
D.bpq=new A.a0(61234,"MaterialIcons",!1)
D.doh=new C.oB(D.cYv,B.lS,B.aS,"CRAPS","\ud83c\udfb2",D.bpq)
D.cCS=w([B.il,B.iG,B.bL],x.O)
D.doi=new C.oB(D.cCS,B.bH,B.b7,"PLINKO","\ud83d\udc8e",Aj.Ll)
D.bsC=new A.a0(983492,"MaterialIcons",!1)
D.doj=new C.oB(B.a_U,B.eu,B.bm,"SNOOKER","\ud83c\udfb1",D.bsC)
D.cWg=w([B.eT,B.fo,B.aS],x.O)
D.dok=new C.oB(D.cWg,B.q3,B.bq,"PROFIT LAB","\ud83d\udcb0",B.hT)
D.cWy=w([B.eA,B.fb,B.bm],x.O)
D.bre=new A.a0(63324,"MaterialIcons",!1)
D.dol=new C.oB(D.cWy,B.zl,B.bh,"KLONDIKE","\ud83c\udccf",D.bre)
D.cQc=w([B.d8,B.bj,B.M],x.O)
D.dom=new C.oB(D.cQc,B.aL,B.aI,"VEGAS TABLE","\ud83c\udccf",A_.EN)
D.pn=new C.Dr(0,"continueGame")
D.po=new C.Dr(1,"youWin")
D.Gf=new C.Dr(2,"youLose")
D.Pg=new C.Dr(3,"draw")
D.aAM=new C.Ue(0,"found")
D.dH8=new C.Ue(1,"foundLive")
D.a1y=new C.Ue(2,"notFound")
D.aAN=new C.Ue(3,"wrongAccount")
D.dMP=new A.u(4,12)
D.dPw=new A.C(B.JW,B.ra,null)
D.bku=new A.N(4,0,0,3)
D.eDz=new A.F(!0,B.aK,null,null,null,null,10,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb6=new A.w("NGMY Helper",null,D.eDz,null,null,null,null,null,null,null,null,null)
D.dPM=new A.C(D.bku,D.fb6,null)
D.br6=new A.a0(63284,"MaterialIcons",!1)
D.bwi=new A.ad(D.br6,18,B.nY,null,null,null)
D.eHX=new A.F(!0,B.nY,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV3=new A.w("Continue",null,D.eHX,null,null,null,null,null,null,null,null,null)
D.cRG=w([D.bwi,B.bo,D.eV3],x.p)
D.epe=new A.cC(B.b0,B.e,B.Q,B.m,null,B.p,null,0,D.cRG,null)
D.dPP=new A.C(B.iK,D.epe,null)
D.dPZ=new A.C(B.bS,B.ra,null)
D.b6m=new A.x(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,B.t)
D.cOu=w([B.fU,B.fo,B.cY,D.b6m],x.O)
D.bIZ=new A.a3(B.aw,B.aC,B.w,D.cOu,B.AE,null)
D.aT8=new A.o(null,null,null,null,null,D.bIZ,B.n)
D.bcJ=new A.kB(D.aT8,B.bb,null,null)
D.dVh=new A.cG(0,0,0,0,null,null,D.bcJ,null)
D.by_=new A.ad(B.uu,11,B.c,null,null,null)
D.dVl=new A.cG(10,12,null,null,null,null,D.by_,null)
D.cqI=w([B.fx,B.eA,B.ks],x.O)
D.dVV=new A.bR(B.I5,1.1,B.w,null,0,D.cqI,null,null)
D.b7y=new A.x(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,B.t)
D.b2K=new A.x(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,B.t)
D.b4i=new A.x(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,B.t)
D.cMq=w([D.b7y,D.b2K,D.b4i],x.O)
D.dW1=new A.bR(B.a68,1.05,B.w,null,0,D.cMq,null,null)
D.dWn=new A.bR(B.A,0.5,B.w,null,0,W.ZY,null,null)
D.enx=new A.a9(-18,0,18,1)
D.eo_=new A.a9(-3,-5,3,5)
D.bwK=new A.ad(B.el,16,D.eD,null,null,null)
D.aLb=new A.F(!0,D.eD,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8X=new A.w("Screenshot added \xb7 tap to change",null,D.aLb,null,null,null,null,null,null,null,null,null)
D.cAV=w([D.bwK,B.bo,D.f8X],x.p)
D.eoH=new A.cC(B.b0,B.b6,B.j,B.m,null,B.p,null,0,D.cAV,null)
D.bAu=new A.ad(B.jM,15,D.eD,null,null,null)
D.f6S=new A.w("Refresh",null,D.aLb,null,null,null,null,null,null,null,null,null)
D.cD0=w([D.bAu,B.d5,D.f6S],x.p)
D.eoJ=new A.cC(B.b0,B.e,B.Q,B.m,null,B.p,null,0,D.cD0,null)
D.dKj={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.eq8=new A.f8(D.dKj,3,x.M)
D.dK3={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.eqe=new A.f8(D.dK3,36,x.M)
D.dK6={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.eqm=new A.f8(D.dK6,6,x.M)
D.dL9={memory:0,typing:1,scramble:2,pattern:3}
D.me=new A.f8(D.dL9,4,x.M)
D.esv=new A.ar(276,276)
D.etb=new A.a5(13,null,null,null)
D.aYP=new A.fd(2.6,null,null,null,null,B.aL,null,null,null,null)
D.etl=new A.a5(26,26,D.aYP,null)
D.eu5=new A.a5(null,7,null,null)
D.eue=new A.hJ(8,0,0,1,null)
D.f9Z=new A.w("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aIN=new A.b_(D.f9Z,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eQz=new A.w("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.ex8=new A.b_(D.eQz,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eRx=new A.w("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.exe=new A.b_(D.eRx,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f71=new A.w("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.exS=new A.b_(D.f71,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.b70=new A.x(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,B.t)
D.eGW=new A.F(!0,D.b70,null,null,null,null,9,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAT=new A.es("$",null,null,B.cW,null,null,null,null,null,null,D.eGW)
D.eB7=new A.F(!0,B.M,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBq=new A.F(!0,B.c,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBv=new A.F(!0,B.bj,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBS=new A.F(!0,B.M,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eC1=new A.F(!0,B.c,null,null,null,null,19,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eC7=new A.F(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCf=new A.F(!0,null,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCW=new A.F(!0,B.aL,null,null,null,null,28,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDr=new A.F(!0,D.eD,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDt=new A.F(!0,B.bH,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEb=new A.F(!0,E.zj,null,null,null,null,13,B.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aK_=new A.F(!0,B.c,null,null,null,null,20,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFF=new A.F(!0,B.bH,null,null,null,null,11.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFX=new A.F(!0,B.af,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,B.az,null,null,null,null,null,null,null,null)
D.eGd=new A.F(!0,B.af,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHa=new A.F(!0,B.c,null,null,null,null,11,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHp=new A.F(!0,B.c,null,null,null,null,14,B.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHA=new A.F(!0,B.bh,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHB=new A.F(!0,B.c,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,B.az,null,null,null,null,null,null,null,null)
D.eI4=new A.F(!0,B.iy,null,null,null,null,10.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b1B=new A.x(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,B.t)
D.eIh=new A.F(!0,D.b1B,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJC=new A.F(!0,B.aE,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJZ=new A.F(!0,D.a9Q,null,null,null,null,9,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKG=new A.F(!0,E.zj,null,null,null,null,11,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKj=new A.F(!0,B.fb,null,null,null,null,52,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKk=new A.F(!0,B.bt,null,null,null,null,7,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKz=new A.F(!0,E.zj,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.vl=new A.F(!0,B.c,null,null,null,null,13,B.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b52=new A.x(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,B.t)
D.eKN=new A.F(!0,D.b52,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLi=new A.F(!0,B.OM,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMg=new A.F(!0,B.c,null,null,null,null,38,B.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMm=new A.F(!0,B.im,null,null,null,null,11,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMq=new A.F(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKU=new A.F(!0,B.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMU=new A.F(!0,B.M,null,null,null,null,10,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMY=new A.F(!0,B.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNP=new A.F(!0,B.M,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOc=new A.F(!0,B.af,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOs=new A.F(!0,B.bh,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOU=new A.F(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOY=new A.F(!0,B.M,null,null,null,null,11,B.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePR=new A.w("Value per pair",null,B.hs,null,null,null,null,null,null,null,null,null)
D.ePS=new A.w("Restore now",null,B.ce,null,null,null,null,null,null,null,null,null)
D.eQm=new A.w("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aKq=new A.F(!0,B.cV,null,null,null,null,12,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQu=new A.w("AVAILABLE PLANS",null,D.aKq,null,null,null,null,null,null,null,null,null)
D.eQx=new A.w("I understand",null,B.cr,null,null,null,null,null,null,null,null,null)
D.eR_=new A.w("Go Back",null,B.cr,null,null,null,null,null,null,null,null,null)
D.eE1=new A.F(!0,B.bt,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRF=new A.w("PLAN VALUE",null,D.eE1,null,null,null,null,null,null,null,null,null)
D.eRH=new A.w("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.eS2=new A.w("Deposit",null,B.Rg,null,null,null,null,null,null,null,null,null)
D.eNc=new A.F(!0,B.dZ,null,null,null,null,null,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSY=new A.w("JACKPOT SLOTS",null,D.eNc,null,null,null,null,null,null,null,null,null)
D.eTf=new A.w("Restore",null,B.ce,null,null,null,null,null,null,null,null,null)
D.eE5=new A.F(!0,B.c,null,null,null,null,12,B.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTi=new A.w("YOUR NUMBER",null,D.eE5,null,null,null,null,null,null,null,null,null)
D.eTw=new A.w("SPIN REELS",null,G.a4j,null,null,null,null,null,null,null,null,null)
D.eTW=new A.w("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.eUp=new A.w("Perfect Score Profit",null,B.hs,null,null,null,null,null,null,null,null,null)
D.eV1=new A.w("Join room",null,B.ki,null,null,null,null,null,null,null,null,null)
D.eWT=new A.w("Add payment screenshot",null,B.jU,null,null,null,null,null,null,null,null,null)
D.eX6=new A.w("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.eMt=new A.F(!0,B.aL,null,null,null,null,11,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXx=new A.w("INVITE A PLAYER",null,D.eMt,null,null,null,null,null,null,null,null,null)
D.eLF=new A.F(!0,B.Tl,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXW=new A.w("NGMY GOLD LEADER",null,D.eLF,null,null,null,null,null,null,null,null,null)
D.eYp=new A.w("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.eYM=new A.w("Invest & Play",null,B.ow,null,null,null,null,null,null,null,null,null)
D.aKj=new A.F(!0,D.w5,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ8=new A.w("VALID THRU",null,D.aKj,null,null,null,null,null,null,null,null,null)
D.aKW=new A.F(!0,B.aA,null,null,null,null,11,B.I,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZh=new A.w("DEALER",null,D.aKW,null,null,null,null,null,null,null,null,null)
D.eZn=new A.w("CARDHOLDER",null,D.aKj,null,null,null,null,null,null,null,null,null)
D.eLb=new A.F(!0,B.aJ,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_3=new A.w("NGMY PLATINUM",null,D.eLb,null,null,null,null,null,null,null,null,null)
D.eOj=new A.F(!0,B.oX,null,null,null,null,10,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_G=new A.w("EARNED SO FAR",null,D.eOj,null,null,null,null,null,null,null,null,null)
D.f0b=new A.w("VS",null,B.aKd,null,null,null,null,null,null,null,null,null)
D.f0A=new A.w("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.f0W=new A.w("One day left",null,B.aJY,null,B.L,null,null,null,null,null,null,null)
D.f1f=new A.w("Keep typing \u2014 mistakes are counted in your payout",null,B.BT,null,null,null,null,null,null,null,null,null)
D.f1g=new A.w("Multiplayer invite",null,B.ki,null,null,null,null,null,null,null,null,null)
D.f1q=new A.w("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.eCL=new A.F(!0,B.OM,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1w=new A.w("\ud83d\udcb0 Partial Payout System",null,D.eCL,null,null,null,null,null,null,null,null,null)
D.f1G=new A.w("Browse Topics",null,B.eR,null,null,null,null,null,null,null,null,null)
D.eBQ=new A.F(!0,B.c,null,null,null,null,22,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1U=new A.w("Investment Required",null,D.eBQ,null,B.L,null,null,null,null,null,null,null)
D.eBn=new A.F(!0,B.c,null,null,null,null,16.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3h=new A.w("Network Status",null,D.eBn,null,null,null,null,null,null,null,null,null)
D.f3N=new A.w("Their account email",null,F.a45,null,null,null,null,null,null,null,null,null)
D.f45=new A.w("Verification code",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f46=new A.w("Category",null,null,null,null,null,null,null,null,null,null,null)
D.f4i=new A.w("ACTIVE ASSET",null,D.aKq,null,null,null,null,null,null,null,null,null)
D.f4C=new A.w("Scan QR",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f4H=new A.w("Check word",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f54=new A.w("YOUR HAND",null,D.aKW,null,null,null,null,null,null,null,null,null)
D.f5B=new A.w("NGMY Music Studio",null,B.l8,null,null,null,null,null,null,null,null,null)
D.f5E=new A.w("I sent it \u2014 submit deposit",null,B.ow,null,null,null,null,null,null,null,null,null)
D.f6k=new A.w("Back",null,B.QQ,null,null,null,null,null,null,null,null,null)
D.eP8=new A.F(!0,null,null,null,null,null,null,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6q=new A.w("DEAL / PLAY ROUND",null,D.eP8,null,null,null,null,null,null,null,null,null)
D.f6C=new A.w("Got it \u2014 keep chatting",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f6L=new A.w("3 Messages Left",null,B.aKL,null,null,null,null,null,null,null,null,null)
D.f7e=new A.w("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.f7m=new A.w("Copy",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f7H=new A.w("How many games?",null,F.a45,null,null,null,null,null,null,null,null,null)
D.eKH=new A.F(!0,B.aA,null,null,null,null,null,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7T=new A.w("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.eKH,null,B.L,null,null,null,null,null,null,null)
D.f9m=new A.w("Question",null,null,null,null,null,null,null,null,null,null,null)
D.f9z=new A.w("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.ePw=new A.F(!0,B.c,null,null,null,null,12.5,B.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb1=new A.w("NGMY  WALLET",null,D.ePw,null,null,null,null,null,null,null,null,null)
D.fb2=new A.w("Select Your Bet",null,B.hf,null,null,null,null,null,null,null,null,null)
D.fei=new A.cx("history",x.W)
D.fen=new A.cx("ngmy_local_home",x.W)
D.feo=new A.cx("ngmy_local_invest",x.W)
D.fep=new A.cx("ngmy_local_wallet",x.W)
D.fgR=new C.Xh(null)
D.aNq=new C.ayk(0,"grid")
D.aNr=new C.ayk(1,"questions")
D.fhH=new C.ayk(2,"answer")
D.fiv=new C.Ya(null)})();(function staticFields(){$.fBY=A.aZ(x.N)
$.h0a=A.T(x.N,x.k)
$.fHj=null
$.fH7=A.T(x.N,A.az("vv"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hXh","bA4",()=>C.hFB())
w($,"hX3","h84",()=>{var v=null,u=A.io(v,v,v,v,D.eAT,B.a5,B.cm,v,B.en,B.cj)
u.fe()
return u})})()};
(a=>{a["HImOg7sIdmBmavAqgoJyK//9VpM="]=a.current})($__dart_deferred_initializers__);