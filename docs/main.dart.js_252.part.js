((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,L,Q,A_,E,M,A0,N,A1,R,O,A2,S,A3,P,A4,T,A5,A6,A7,A8,A9,Aa,U,Ab,C={
fVf(d,e,f){var w=null,v=f.k("EK<0>"),u=new A.EK(w,w,w,w,v)
$.a0J()
u.d=new C.cmd(new A.VS(),e,u,f,d)
return new A.hL(u,v.k("hL<1>"))},
cmd:function cmd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cme:function cme(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cma:function cma(d){this.a=d},
cmb:function cmb(d,e){this.a=d
this.b=e},
cmc:function cmc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cm9:function cm9(d,e,f){this.a=d
this.b=e
this.c=f},
bnK:function bnK(d){this.a=d},
fVe(d,e,f,g){return new C.asX(d,e,f,null,g.k("asX<0>"))},
E2:function E2(){},
aFa:function aFa(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
eMM:function eMM(d){this.a=d},
eML:function eML(d,e){this.a=d
this.b=e},
eMO:function eMO(d){this.a=d},
eMJ:function eMJ(d,e,f){this.a=d
this.b=e
this.c=f},
eMN:function eMN(d){this.a=d},
eMK:function eMK(d){this.a=d},
asX:function asX(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
hJO(d){var w=B.a.i(d)
while(B.a.a_(w,"$"))w=B.a.i(B.a.aY(w,1))
return w},
h4f(d){var w=C.hJO(d)
if(w.length===0)return""
return"$"+w},
ffX(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ffX=A.e(function(f,g){if(f===1)return A.f(g,v)
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
break}if(q.x!==B.ch){w=4
break}if(q.d!==B.fv){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!A.dp(m,"game payout:",0))if(!A.dp(m,"game partial:",0)){if(!A.dp(m,"multiplayer payout:",0))o=A.dp(m,"dice",0)&&q.e===B.f7
else o=l
l=o}if(!l){w=4
break}if(A.dp(m,"game payout:",0))k=B.a.i(B.a.aY(n,B.a.cP(m,"game payout:")+12))
else if(A.dp(m,"game partial:",0)){k=B.a.i(B.a.aY(n,B.a.cP(m,"game partial:")+13))
j=B.a.cP(k,"(")
if(j>0)k=B.a.i(B.a.am(k,0,j))}else if(A.dp(m,"multiplayer payout:",0)){k=B.a.i(B.a.aY(n,B.a.cP(m,"multiplayer payout:")+19))
j=B.a.cP(k,"(")
if(j>0)k=B.a.i(B.a.am(k,0,j))}else k=A.dp(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return A.b(C.u4(q.c,p,n,d,o,null,q.a,!0),$async$ffX)
case 6:case 4:e.length===s||(0,A.K)(e),++r
w=3
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$ffX,v)},
hOo(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
hKR(d,e,f){return B.d.ba(e,new C.fjG(f,B.a.i(d.toLowerCase())))},
fjx(d){var w
C.fRA(d)
w=d.c4
return A.bj(new A.J(w,new C.fjy(),A.U(w).k("J<1,@>")),!0,x.N)},
hAI(d,e,f){var w,v,u,t,s,r,q=null,p=B.bQ,o=B.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aT.toString
u=$.ec().gi2().b
if(u.a===0)t=1
else{new A.bg(u,A.a2(u).k("bg<2>")).gL(0)
u=$.kS()
s=u.d
t=s==null?u.gfY():s}w=B.k.dE(f*t)
v=new C.f4p(f)
if(J.cW(n,"data:image"))try{u=A.fF(B.cw.aG(B.d.gaj(J.ld(n,","))),B.A,w,new C.f4m(v),B.fM,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.cW(n,"supabase://"))return new A.kY(A.a_z(n),new C.f4n(f,e,p,w,v),q,q,x.gh)
return A.kc(n,B.A,w,new C.f4o(v),B.fM,p,!0,e,q,q,f)},
fGG(d,e){return new A.a5(e,e,A.hO(C.hAI(d,e,e),B.ao),null)},
htg(){var w,v,u=A.a([],x._),t=x.N,s=A.z(D.cVV,x.gm)
for(w=0;w<36;++w){v=B.AQ[w]
s.push(new C.qc(v.a,v.b,v.c,v.e,v.f))}return new C.axu(u,A.T(t,t),s)},
fjG:function fjG(d,e){this.a=d
this.b=e},
fjy:function fjy(){},
f4p:function f4p(d){this.a=d},
f4m:function f4m(d){this.a=d},
f4n:function f4n(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f4l:function f4l(d){this.a=d},
f4o:function f4o(d){this.a=d},
aiH:function aiH(d,e,f,g,h,i,j){var _=this
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
axu:function axu(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
d3g:function d3g(d,e){this.a=d
this.b=e},
d3r:function d3r(d,e){this.a=d
this.b=e},
d3J:function d3J(){},
d3K:function d3K(d){this.a=d},
d3z:function d3z(d,e){this.a=d
this.b=e},
d3y:function d3y(){},
d3A:function d3A(d){this.a=d},
d3x:function d3x(){},
d3C:function d3C(d){this.a=d},
d3B:function d3B(){},
d3u:function d3u(d){this.a=d},
d3s:function d3s(d){this.a=d},
d3t:function d3t(d){this.a=d},
d3v:function d3v(d){this.a=d},
d3w:function d3w(d){this.a=d},
d3m:function d3m(d,e){this.a=d
this.b=e},
d3n:function d3n(d,e){this.a=d
this.b=e},
d3k:function d3k(d){this.a=d},
d3l:function d3l(d){this.a=d},
d3o:function d3o(d){this.a=d},
d3p:function d3p(d){this.a=d},
d3q:function d3q(d,e,f){this.a=d
this.b=e
this.c=f},
d3j:function d3j(d,e){this.a=d
this.b=e},
d3i:function d3i(d,e){this.a=d
this.b=e},
d3h:function d3h(d,e){this.a=d
this.b=e},
d3I:function d3I(d){this.a=d},
d3G:function d3G(d,e,f){this.a=d
this.b=e
this.c=f},
d3F:function d3F(d,e,f){this.a=d
this.b=e
this.c=f},
d3E:function d3E(d,e){this.a=d
this.b=e},
d3D:function d3D(){},
d3H:function d3H(d){this.a=d},
aAi:function aAi(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bfX:function bfX(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
dGw:function dGw(d){this.a=d},
dGv:function dGv(d){this.a=d},
dGx:function dGx(d){this.a=d},
dGu:function dGu(){},
dGy:function dGy(d,e){this.a=d
this.b=e},
dGt:function dGt(d){this.a=d},
dGz:function dGz(d){this.a=d},
aiG:function aiG(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
axt:function axt(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
d3a:function d3a(d){this.a=d},
d3d:function d3d(d){this.a=d},
d3e:function d3e(d){this.a=d},
d3f:function d3f(d){this.a=d},
d3c:function d3c(d,e){this.a=d
this.b=e},
d3b:function d3b(d,e){this.a=d
this.b=e},
aiI:function aiI(d,e,f,g,h,i,j,k,l,m){var _=this
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
axv:function axv(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.bH=_.b8=_.aZ=_.b1=null
_.aQ=!1
_.bP=_.bg=null
_.c4=!1
_.cf=_.cT=""
_.c=_.a=_.bA=null},
d52:function d52(d,e){this.a=d
this.b=e},
d55:function d55(d){this.a=d},
d56:function d56(d){this.a=d},
d57:function d57(d){this.a=d},
d58:function d58(d){this.a=d},
d59:function d59(d){this.a=d},
d53:function d53(d){this.a=d},
d54:function d54(d){this.a=d},
d4i:function d4i(d,e){this.a=d
this.b=e},
d4j:function d4j(d,e){this.a=d
this.b=e},
d4M:function d4M(d){this.a=d},
d4N:function d4N(){},
d4y:function d4y(d,e,f){this.a=d
this.b=e
this.c=f},
d4z:function d4z(d){this.a=d},
d4A:function d4A(d,e,f){this.a=d
this.b=e
this.c=f},
d4B:function d4B(d,e){this.a=d
this.b=e},
d4C:function d4C(){},
d3L:function d3L(d){this.a=d},
d4h:function d4h(d,e){this.a=d
this.b=e},
d4O:function d4O(){},
d4X:function d4X(){},
d4L:function d4L(d){this.a=d},
d4K:function d4K(d){this.a=d},
d4f:function d4f(d){this.a=d},
d4g:function d4g(){},
d4S:function d4S(){},
d4T:function d4T(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d4U:function d4U(d,e,f){this.a=d
this.b=e
this.c=f},
d3M:function d3M(){},
d3N:function d3N(d){this.a=d},
d3O:function d3O(){},
d4r:function d4r(d,e){this.a=d
this.b=e},
d4s:function d4s(d,e,f){this.a=d
this.b=e
this.c=f},
d4t:function d4t(d){this.a=d},
d4q:function d4q(d){this.a=d},
d4D:function d4D(d){this.a=d},
d4E:function d4E(){},
d4F:function d4F(d){this.a=d},
d4G:function d4G(){},
d4H:function d4H(d){this.a=d},
d4I:function d4I(){},
d4R:function d4R(d,e,f){this.a=d
this.b=e
this.c=f},
d4u:function d4u(d){this.a=d},
d4v:function d4v(d,e){this.a=d
this.b=e},
d4w:function d4w(d){this.a=d},
d4x:function d4x(d){this.a=d},
d4V:function d4V(d){this.a=d},
d4W:function d4W(d){this.a=d},
d3P:function d3P(d){this.a=d},
d3Q:function d3Q(d,e){this.a=d
this.b=e},
d3R:function d3R(d){this.a=d},
d3S:function d3S(d){this.a=d},
d4P:function d4P(d,e){this.a=d
this.b=e},
d4Q:function d4Q(d){this.a=d},
d4p:function d4p(d,e){this.a=d
this.b=e},
d4J:function d4J(d,e,f){this.a=d
this.b=e
this.c=f},
d4n:function d4n(d,e,f){this.a=d
this.b=e
this.c=f},
d4o:function d4o(){},
d4Y:function d4Y(d){this.a=d},
d4Z:function d4Z(d){this.a=d},
d5_:function d5_(d){this.a=d},
d51:function d51(d){this.a=d},
d50:function d50(){},
d4m:function d4m(d,e,f){this.a=d
this.b=e
this.c=f},
d4l:function d4l(d,e){this.a=d
this.b=e},
d4k:function d4k(d,e){this.a=d
this.b=e},
d44:function d44(d){this.a=d},
d43:function d43(d,e){this.a=d
this.b=e},
d45:function d45(d){this.a=d},
d42:function d42(d,e){this.a=d
this.b=e},
d46:function d46(d){this.a=d},
d41:function d41(){},
d47:function d47(d){this.a=d},
d4_:function d4_(){},
d40:function d40(d){this.a=d},
d48:function d48(d){this.a=d},
d3Z:function d3Z(d,e){this.a=d
this.b=e},
d49:function d49(d){this.a=d},
d3Y:function d3Y(d,e){this.a=d
this.b=e},
d3U:function d3U(d,e){this.a=d
this.b=e},
d4a:function d4a(d){this.a=d},
d3X:function d3X(d,e){this.a=d
this.b=e},
d4b:function d4b(d){this.a=d},
d3W:function d3W(d){this.a=d},
d3T:function d3T(d,e){this.a=d
this.b=e},
d4c:function d4c(d,e,f){this.a=d
this.b=e
this.c=f},
d4d:function d4d(d){this.a=d},
d3V:function d3V(){},
d4e:function d4e(d){this.a=d},
ajz:function ajz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bd8:function bd8(){this.c=this.a=null},
d8k:function d8k(d,e){this.a=d
this.b=e},
d8j:function d8j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afU:function afU(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
auJ:function auJ(d,e,f,g,h,i,j,k,l,m){var _=this
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
cxf:function cxf(d){this.a=d},
cwA:function cwA(d,e){this.a=d
this.b=e},
cwq:function cwq(d){this.a=d},
cwr:function cwr(d){this.a=d},
cwK:function cwK(d){this.a=d},
cwH:function cwH(d){this.a=d},
cwI:function cwI(d){this.a=d},
cwJ:function cwJ(d,e,f){this.a=d
this.b=e
this.c=f},
cwC:function cwC(d){this.a=d},
cwB:function cwB(d){this.a=d},
cws:function cws(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cwF:function cwF(d){this.a=d},
cwE:function cwE(d){this.a=d},
cwD:function cwD(d,e){this.a=d
this.b=e},
cx2:function cx2(d){this.a=d},
cwX:function cwX(d){this.a=d},
cx_:function cx_(d){this.a=d},
cwZ:function cwZ(){},
cwW:function cwW(d){this.a=d},
cwY:function cwY(d,e){this.a=d
this.b=e},
cwV:function cwV(){},
cwx:function cwx(){},
cwy:function cwy(d,e){this.a=d
this.b=e},
cwz:function cwz(d){this.a=d},
cwv:function cwv(d,e){this.a=d
this.b=e},
cww:function cww(d,e){this.a=d
this.b=e},
cwN:function cwN(d,e){this.a=d
this.b=e},
cwG:function cwG(d){this.a=d},
cwO:function cwO(d){this.a=d},
cwP:function cwP(d,e){this.a=d
this.b=e},
cwQ:function cwQ(d,e){this.a=d
this.b=e},
cwR:function cwR(d,e){this.a=d
this.b=e},
cwS:function cwS(d,e,f){this.a=d
this.b=e
this.c=f},
cwT:function cwT(d){this.a=d},
cwU:function cwU(d){this.a=d},
cwL:function cwL(d,e){this.a=d
this.b=e},
cx1:function cx1(d){this.a=d},
cwM:function cwM(d,e){this.a=d
this.b=e},
cxe:function cxe(d){this.a=d},
cx7:function cx7(d){this.a=d},
cxa:function cxa(d){this.a=d},
cx4:function cx4(d,e){this.a=d
this.b=e},
cx8:function cx8(){},
cx9:function cx9(d,e){this.a=d
this.b=e},
cx5:function cx5(d){this.a=d},
cx6:function cx6(d){this.a=d},
cxc:function cxc(){},
cxb:function cxb(d){this.a=d},
cx3:function cx3(d,e){this.a=d
this.b=e},
cxd:function cxd(d){this.a=d},
cwt:function cwt(d){this.a=d},
cx0:function cx0(d,e){this.a=d
this.b=e},
cwu:function cwu(d,e,f){this.a=d
this.b=e
this.c=f},
aHA:function aHA(){},
aHB:function aHB(){},
aHC:function aHC(){},
aIx:function aIx(){},
bUp(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase())
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
bUq(d){var w=B.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hgQ(d,e){var w=d.ax
if(w<0)return!1
return w===e},
aUw(d,e){return C.hgR(d,e)},
hgR(d,e){var w=0,v=A.j(x.di),u,t,s,r,q,p
var $async$aUw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aYh(d),$async$aUw)
case 3:p=g
if(p!=null){try{t=B.Q.aD(0,p.c,null)
if(x.f.b(t)){s=C.fPW(A.a_(t,x.N,x.z))
if(s==null){u=new A.EF(D.a1A,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bUp(s,e,p.b)){u=new A.EF(D.aAO,null)
w=1
break}r=p.a?D.dHi:D.aAN
u=new A.EF(r,s)
w=1
break}}catch(o){}u=new A.EF(D.a1A,null)
w=1
break}s=C.fPX(d)
if(s==null){u=new A.EF(D.a1A,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bUp(s,e,null)){u=new A.EF(D.aAO,null)
w=1
break}u=new A.EF(D.aAN,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aUw,v)},
fPX(d){var w,v,u,t,s,r
try{w=B.a.i(d)
if(J.cW(w,"\ufeff"))w=J.mm(w,1)
v=!1
if(J.cW(w,"NGMYSNAP1|")){v=!0
w=B.c1.c6(0,B.cw.aG(J.mm(w,10)))}u=B.Q.aD(0,w,null)
if(!x.f.b(u))return null
t=A.a_(u,x.N,x.z)
s=v?C.hgP(t):C.fPW(t)
return s}catch(r){return null}},
hgP(d){var w,v,u,t,s,r,q,p,o,n=new C.bUm(),m=new C.bUl(),l=d.h(0,"qi")
if(x.f.b(l)){w=A.a_(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new A.Q(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=A.aN(w.h(0,"d"))
p=new A.uO(v,u,t,s,r,B.k.N(q==null?0:q))}else p=null
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
return new A.a3X("","",v,u,t,s,r,q,n,m,o,p,B.hY,new A.Q(Date.now(),0,!1),-1)},
fPW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.y(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.bUo()
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
n=new A.uO(t,s,r,q,p,B.k.N(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=A.z(new A.e3(J.b5(m,new C.bUn(w),x.eG),t),t.k("G.E"))}else l=A.a([],x.E)
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
return new A.a3X(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
fBg(d,e,f,g){var w=0,v=A.j(x.N),u,t,s,r
var $async$fBg=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:t=A.bUk(d,e,f,g)
s=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(t.a,s,"_")
u=A.Fa(A.Iv(t.eF(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fBg,v)},
Uf:function Uf(d,e){this.a=d
this.b=e},
bUm:function bUm(){},
bUl:function bUl(){},
bUo:function bUo(){},
bUn:function bUn(d){this.a=d},
hDK(d){return A.ch(null,B.aT,!0,null,new C.f7F(),d,null,!0,!0,x.N)},
hDX(d,e,f,g){return A.ch(null,B.aT,!0,null,new C.f8S(g,f,e),d,null,!0,!0,x.y)},
al6:function al6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
azy:function azy(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
doO:function doO(d,e){this.a=d
this.b=e},
doP:function doP(d){this.a=d},
doF:function doF(d,e){this.a=d
this.b=e},
doD:function doD(d){this.a=d},
doN:function doN(d){this.a=d},
doM:function doM(d,e){this.a=d
this.b=e},
doC:function doC(d,e){this.a=d
this.b=e},
doB:function doB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
doE:function doE(d){this.a=d},
doL:function doL(){},
doJ:function doJ(d){this.a=d},
doK:function doK(d,e){this.a=d
this.b=e},
doG:function doG(){},
doH:function doH(d,e){this.a=d
this.b=e},
doI:function doI(d,e){this.a=d
this.b=e},
doQ:function doQ(d){this.a=d},
Zy:function Zy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bof:function bof(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Yb:function Yb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bfx:function bfx(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
doU:function doU(d){this.a=d},
doR:function doR(d,e){this.a=d
this.b=e},
doS:function doS(d,e){this.a=d
this.b=e},
doT:function doT(d){this.a=d},
Yc:function Yc(d){this.a=d},
bfy:function bfy(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
doV:function doV(d,e){this.a=d
this.b=e},
f7F:function f7F(){},
f8S:function f8S(d,e,f){this.a=d
this.b=e
this.c=f},
acf:function acf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eGH:function eGH(d){this.a=d},
eGI:function eGI(d){this.a=d},
Om:function Om(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Xj:function Xj(d){this.a=d},
awU:function awU(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cZu:function cZu(d){this.a=d},
cZr:function cZr(){},
cZs:function cZs(d){this.a=d},
cZt:function cZt(d){this.a=d},
Sk(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$Sk=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||B.a.i(f).length===0){w=1
break}w=3
return A.b(A.Lp(s),$async$Sk)
case 3:t=h
J.cb(t,A.E(["role",e,"text",B.a.i(f),"at",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.z))
w=4
return A.b(A.alm(s,t),$async$Sk)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Sk,v)},
hh8(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=A.U(d).k("a4<1>")
v=A.z(new A.a4(d,new C.bV7(),w),w.k("G.E"))
w=v.length
if(w===0)return""
u=w<=24?v:B.d.fP(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,A.K)(u),++s){r=u[s]
q=J.a8(r)
p=J.y(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+A.t(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
bV7:function bV7(){},
hJd(d){return B.d.dI(B.AQ,new C.ffR(d),new C.ffS()).r},
ffR:function ffR(d){this.a=d},
ffS:function ffS(){},
alB:function alB(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bfE:function bfE(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dvf:function dvf(d){this.a=d},
dve:function dve(d){this.a=d},
dv6:function dv6(d,e,f){this.a=d
this.b=e
this.c=f},
dvb:function dvb(d){this.a=d},
dv8:function dv8(d,e,f){this.a=d
this.b=e
this.c=f},
dvc:function dvc(d){this.a=d},
dv7:function dv7(d){this.a=d},
dvd:function dvd(d){this.a=d},
dv9:function dv9(d){this.a=d},
dva:function dva(d){this.a=d},
fRA(d){var w=A.c1t(new A.Q(Date.now(),0,!1)),v=d.bg
if(v===w)return
d.bg=w
d.bP=0
d.c4=A.a([],x.s)},
fRC(d){return A.ch(null,B.x.j(0.82),!0,null,new C.c1y(),d,null,!0,!0,x.H)},
a4A:function a4A(d){this.a=d},
c1y:function c1y(){},
c1x:function c1x(d){this.a=d},
h3s(){var w=new A.Q(Date.now(),0,!1),v=w.bN(A.dB(4-A.lP(w),0,0,0,0,0).a),u=A.bW(A.bw(v),1,4,0,0,0,0,0)
return""+A.bw(v)+"-W"+B.a.aS(B.o.u(1+B.k.bt(B.o.ak(v.bw(A.bW(A.bw(u),A.bB(u),A.bO(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
f_t(d,e){var w,v,u,t,s,r,q=A.ER(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.q(t,"email")
r=B.a.i(J.k(s==null?"":s).toLowerCase())
if((B.a.c7(r,"+local.ngmy")?B.a.am(r,0,r.length-11):r)===q)return t}t=A.E(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
hyq(d,e){var w,v,u,t,s,r,q,p=A.ER(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c7(q,"+local.ngmy")?B.a.am(q,0,q.length-11):q)===p){w=A.aN(s.h(t,"winsLeft"))
w=w==null?null:B.k.N(w)
return w==null?0:w}}return 0},
hSe(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=A.ER(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.a8(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c7(q,"+local.ngmy")?B.a.am(q,0,q.length-11):q)===n){w=A.aN(s.h(t,o))
w=w==null?null:B.k.N(w)
p=(w==null?0:w)-1
s.m(t,o,p<0?0:p)
return}}},
hEC(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=A.ER(b5),b2=A.c2O(),b3=C.h3s()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.a8(s)
q=r.h(s,a2)
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.c7(p,a3)?B.a.am(p,0,p.length-11):p)!==b1)continue
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
w.m(u,a4,(v==null?1:v)-1)
w=A.aN(w.h(u,"outcome"))
w=w==null?a1:B.k.N(w)
return w==null?1:w}n=new C.f9E()
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
if(l!=null)return l}k=C.f_t(b4,b5)
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
d.m(0,a6,0)}g=A.aN(d.h(0,a6))
a0=g==null?a1:B.k.N(g)
if(a0==null)a0=0
if(a0<f){d.m(0,a6,a0+1)
return A.c4(h,a1)}}if(e>0){g=d.h(0,a9)
if(J.k(g==null?"":g)!==b3){d.m(0,a9,b3)
d.m(0,a8,0)}g=A.aN(d.h(0,a8))
a0=g==null?a1:B.k.N(g)
if(a0==null)a0=0
if(a0<e){d.m(0,a8,a0+1)
return A.c4(h,a1)}}}return a1},
h0d(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[1,2,3],v=d.a,u=0;u<3;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
if(w===0)return 1
t=q[e.aB(w)]
if(t===3&&d.f>=d.e)t=e.he()?1:2
return t},
fGY(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[-1,-2],v=d.a,u=0;u<2;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
return w===0?-1:q[e.aB(w)]},
hED(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=A.ER(a3),a1=new C.f9F()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.a8(s)
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
w=J.a8(u)
v=w.h(u,d)
l=J.k(v==null?"":v)
v=o>0?1:0
r=n>0?1:0
q=m>0?1:0
q=new C.f9G(v+r+q>1,l)
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
return C.fGY(a2,a4)}w.m(u,f,m-1)
w.m(u,d,"p")
return 3},
hEB(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=A.aN(i.h(0,"wins")),g=h==null?m:B.k.N(h)
if(g==null)g=0
h=A.aN(i.h(0,"loses"))
w=h==null?m:B.k.N(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.h3s():A.c2O()
t=v+"|"+u
s=C.f_t(d,e)
h=J.a8(s)
r=h.h(s,l)
if(J.k(r==null?"":r)!==t){h.m(s,l,t)
h.m(s,k,0)
h.m(s,j,0)}r=A.aN(h.h(s,k))
q=r==null?m:B.k.N(r)
if(q==null)q=0
r=A.aN(h.h(s,j))
p=r==null?m:B.k.N(r)
if(p==null)p=0
o=Math.max(0,g-q)
r=o+Math.max(0,w-p)
if(r<=0)return m
n=f.aB(r)<o
if(n)h.m(s,k,q+1)
else h.m(s,j,p+1)
return n},
hMP(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
d.bcx()
w=C.hED(d,e,a0)
if(w!=null){if(w===3)++d.f
C.adD(d,e,w)
return w}v=C.hEC(d,e)
if(v!=null){if(v===3)++d.f
C.adD(d,e,v)
return v}u=C.hEB(d,e,a0)
if(u!=null)return new C.fmS(d,a0,e).$1(u)
t=C.f_t(d,e)
s=J.a8(t)
r=A.aN(s.h(t,"winStreak"))
q=r==null?null:B.k.N(r)
if(q==null)q=0
s=A.aN(s.h(t,"loseStreak"))
p=s==null?null:B.k.N(s)
if(p==null)p=0
o=new C.fmU(d,a0)
if(C.hyq(d,e)>0){n=o.$0()
C.hSe(d,e)
C.adD(d,e,n)
return n}if(q>=d.c){n=new C.fmT(d,a0).$0()
C.adD(d,e,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.adD(d,e,n)
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
g=a0.aB(100)<h
if(g&&m.length!==0){f=m[a0.aB(m.length)]
if(f===3&&d.f>=d.e)f=a0.he()?1:2}else{s=l.length
if(s!==0)f=l[a0.aB(s)]
else f=g?1:-1}if(f===3)++d.f
C.adD(d,e,f)
return f},
c2G(d){var w=0,v=A.j(x.y),u
var $async$c2G=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c2F(d),$async$c2G)
case 3:if(f){u=!0
w=1
break}u=A.c2F(d)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c2G,v)},
adD(d,e,f){var w,v="winStreak",u="loseStreak",t=C.f_t(d,e),s=J.a8(t),r=A.aN(s.h(t,v)),q=r==null?null:B.k.N(r)
if(q==null)q=0
r=A.aN(s.h(t,u))
w=r==null?null:B.k.N(r)
if(w==null)w=0
if(f>0){s.m(t,v,q+1)
s.m(t,u,0)}else{s.m(t,u,w+1)
s.m(t,v,0)}},
f9E:function f9E(){},
f9F:function f9F(){},
f9G:function f9G(d,e){this.a=d
this.b=e},
fmS:function fmS(d,e,f){this.a=d
this.b=e
this.c=f},
fmU:function fmU(d,e){this.a=d
this.b=e},
fmT:function fmT(d,e){this.a=d
this.b=e},
al5:function al5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfv:function bfv(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cO$=d
_.b0$=e
_.c=_.a=null},
doq:function doq(d){this.a=d},
dop:function dop(d){this.a=d},
dor:function dor(d){this.a=d},
doo:function doo(d,e){this.a=d
this.b=e},
aI7:function aI7(){},
LQ:function LQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c3v:function c3v(){},
c3u:function c3u(){},
an5:function an5(d,e,f){this.c=d
this.d=e
this.a=f},
fCh(d,e,f){return A.ch(null,B.x.j(0.88),!0,null,new C.c3X(f,e),d,null,!0,!0,x.H)},
hkU(d){var w,v,u,t,s=B.a.i(d),r=s.split("-")
if(r.length===3){w=A.c4(r[0],null)
v=r[1]
u=A.c4(v,null)
t=A.c4(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?B.i5[u-1]:v)+" "+A.t(t)+", "+A.t(w)}return s},
LY:function LY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c3X:function c3X(d,e){this.a=d
this.b=e},
bg8:function bg8(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
dNx:function dNx(d,e){this.a=d
this.b=e},
dNt:function dNt(){},
dNu:function dNu(){},
dNv:function dNv(d,e){this.a=d
this.b=e},
dNw:function dNw(d,e){this.a=d
this.b=e},
aIG:function aIG(){},
h3o(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.bc6(new C.fid(w))
w=w.a
return w==null?null:w.c.a},
h3g(d){$.aT.x1$.push(new C.fi0(d))},
h3A(d){var w=$.rl().gbb(),v=w!=null
if(!v||w.c==null)return
if(C.h3o(w)==="GamePlayScreen")if(v&&w.c!=null&&w.oP())w.eD()},
h3z(d){C.h0j(d,0)},
h0j(d,e){var w,v
if(e>4)return
w=d==null?$.rl().gbb():d
if(w==null||w.c==null)return
v=C.h3o(w)
if(v==="GameCenterScreen")return
if(D.eqk.t(0,v)&&w.oP()){w.eD()
$.aT.x1$.push(new C.f5W(w,e))}},
aMt(d,e,f){return A.ed(A.ck(new C.fjB(e,d,f)),e,!0)},
fid:function fid(d){this.a=d},
fi0:function fi0(d){this.a=d},
fi_:function fi_(d){this.a=d},
f5W:function f5W(d,e){this.a=d
this.b=e},
fjB:function fjB(d,e,f){this.a=d
this.b=e
this.c=f},
an9(d,e){var w=0,v=A.j(x.H),u
var $async$an9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=A.Tn(e)
w=2
return A.b(A.an8(d,u),$async$an9)
case 2:A.a5d(d,u)
return A.h(null,v)}})
return A.i($async$an9,v)},
u4(d,e,f,g,h,i,j,k){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$u4=A.e(function(l,m){if(l===1)return A.f(m,v)
for(;;)switch(w){case 0:o=A.xx(g)
if(o.length===0){w=1
break}t=e==null?A.JA(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return A.b(A.LZ(o),$async$u4)
case 3:q=m
if(j!=null&&j.length!==0&&J.rm(q,new C.c4a(j))){w=1
break}p=e==null?new A.Q(Date.now(),0,!1):e
J.p1(q,0,new A.j_(B.o.u(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return A.b(C.an9(o,q),$async$u4)
case 4:if(i==null||r==null||s)C.a5f(o).by(new C.c4b(),x.S).eN(new C.c4c())
case 1:return A.h(u,v)}})
return A.i($async$u4,v)},
a5f(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a5f=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=$.h4x
m=A.xx(d)
if(n==null||m.length===0){w=1
break}w=3
return A.b(A.LZ(m),$async$a5f)
case 3:t=f
s=J.cA(t)
if(!s.ba(t,new C.c49())){w=1
break}w=4
return A.b(n.$2(m,t),$async$a5f)
case 4:r=f
q=J.a8(r)
if(q.gJ(r)!==s.gJ(t)){w=1
break}for(p=!1,o=0;o<s.gJ(t);++o)if(B.Q.al(s.h(t,o).ac(),null)!==B.Q.al(q.h(r,o).ac(),null))p=!0
w=p?5:6
break
case 5:w=7
return A.b(C.an9(m,r),$async$a5f)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$a5f,v)},
aWV(d){var w=0,v=A.j(x.S),u,t
var $async$aWV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fCk(d,!1),$async$aWV)
case 3:t=J
w=4
return A.b(C.ana(d,!1),$async$aWV)
case 4:u=t.dE(f,new C.c48(new A.Q(Date.now(),0,!1).bN(-864e8))).gJ(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWV,v)},
ana(d,e){var w=0,v=A.j(x.ac),u,t,s,r
var $async$ana=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=A.xx(d)
if(r.length===0){u=A.a([],x.gi)
w=1
break}w=3
return A.b(A.LZ(r),$async$ana)
case 3:t=g
s=A.Tn(t)
if(s.length!==J.aa(t))C.an9(r,s)
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ana,v)},
hKL(d){var w,v,u,t=new A.Q(Date.now(),0,!1),s=t.bw(d).a,r=B.o.ak(s,6e7)
if(r<1)return"Just now"
w=B.o.ak(s,36e8)
if(w<1)return""+r+"m ago"
if(B.o.ak(s,864e8)<1)return""+w+"h ago"
v=B.o.F(A.dd(d),12)===0?12:B.o.F(A.dd(d),12)
s=B.i5[A.bB(d)-1]
r=A.bw(d)===A.bw(t)?"":", "+A.bw(d)
w=B.a.aS(B.o.u(A.fM(d)),2,"0")
u=A.dd(d)<12?"AM":"PM"
return s+" "+A.bO(d)+r+" \xb7 "+v+":"+w+" "+u},
bwf(d){var w=B.k.a9(Math.abs(d),2).split(".")
return"$"+A.og(w[0],A.ae("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.f46(),null)+"."+w[1]},
bzK(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$bzK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ana(e,!1),$async$bzK)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
A.fCk(e,!0).by(new C.fuZ(e),t).by(new C.fv_(),t).eN(new C.fv0())
w=4
return A.b(A.c2(B.K,null,new C.fv1(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bzK)
case 4:case 1:return A.h(u,v)}})
return A.i($async$bzK,v)},
fF9(d,e,f){var w=null,v=B.c.j(0.05),u=A.m(14),t=A.H(f.j(0.35),B.r,1)
return A.D(A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),B.bA,A.f_(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.h,B.dq)],x.p),B.m,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.hC,w,w,w),1)},
dNy(d,e,f){var w=null,v=B.x.j(0.22),u=A.m(8),t=A.H(f.j(0.28),B.r,1)
return A.D(A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.f_(B.a4,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.h,B.eb)],x.p),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.Kl,w,w,w),1)},
c4a:function c4a(d){this.a=d},
c4b:function c4b(){},
c4c:function c4c(){},
c49:function c49(){},
c48:function c48(d){this.a=d},
f46:function f46(){},
fuZ:function fuZ(d){this.a=d},
fv_:function fv_(){},
fv0:function fv0(){},
fv1:function fv1(d,e){this.a=d
this.b=e},
fuY:function fuY(d,e){this.a=d
this.b=e},
fuX:function fuX(d){this.a=d},
ab5:function ab5(d,e){this.c=d
this.a=e},
dNA:function dNA(){},
dNB:function dNB(){},
dNC:function dNC(){},
dND:function dND(d){this.a=d},
dNF:function dNF(){},
dNE:function dNE(d){this.a=d},
ab4:function ab4(d,e){this.c=d
this.a=e},
dNz:function dNz(){},
bzL(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return A.hN(B.aT,!1,w,d,new C.fv4(j,i,h,g,e,f),null,B.eM,!1,x.H)},
fv4:function fv4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fv2:function fv2(d,e){this.a=d
this.b=e},
fv3:function fv3(d,e){this.a=d
this.b=e},
axw:function axw(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bbS:function bbS(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bp$=e
_.a6$=f
_.c=_.a=null},
d5b:function d5b(d,e){this.a=d
this.b=e},
d5a:function d5a(){},
abu:function abu(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aHD:function aHD(){},
anV(d,e,f){return new C.aXL(f,d,e,null)},
hly(d){var w=A.a(B.k.a9(d,2).split("."),x.s),v=A.ae("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=A.og(w[0],v,new C.c5L(),null)
return B.d.aF(w,".")},
aWY(){var w=$.rL
if((w>0?$.rL=w-1:w)<=0)$.rL=0},
aeM(d,e){var w=0,v=A.j(x.H),u
var $async$aeM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=$.fJs
w=u!=null?2:3
break
case 2:w=4
return A.b(u.$2(d,e),$async$aeM)
case 4:case 3:return A.h(null,v)}})
return A.i($async$aeM,v)},
aXL:function aXL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c5M:function c5M(d){this.a=d},
c5L:function c5L(){},
Ls:function Ls(){},
bVE:function bVE(){},
fIS(d){if(d>0)return"+"+d
return""+d},
fIf(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fjC(d,e){var w=J.q(e,d)
if(w==null)w=A.fin().h(0,d)
return w==null?90:w},
f34(d,e){var w,v,u=A.aZ(x.S)
while(u.a<3){w=e.aB(41)-20
if(w===0)continue
u.K(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.K(0,d+v*7+3)
v=A.a([B.o.u(d)],x.s)
B.d.v(v,new A.jD(u,new C.f35(),u.$ti.k("jD<cl.E,n>")))
B.d.fA(v,e)
return v},
h_j(d,e,f){var w,v,u,t,s=A.aZ(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.K(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.K(0,f[B.o.F(u,5)]+u);++u}t=A.a([d],x.s)
B.d.v(t,A.oL(s,3,s.$ti.k("cl.E")))
B.d.fA(t,e)
return t},
hG_(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=A.a([],x.dA),b2=new A.eU()
b2.dM(42)
for(w=x.s,v=0;v<200;++v){u=B.o.F(v,5)
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
b1.push(new C.Hc("Simplify \u221a("+t*s+"x^"+q+")",m,C.h_j(m,b2,A.a([""+(r+1)+"x^"+o+"\u221a"+n,A.t(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aB(35)
j=b2.aB(4)===0?1:2+b2.aB(4)
i=b2.aB(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.Hc("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.f34(k,b2)))}else if(u===2){k=2+b2.aB(18)
j=b2.aB(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aB(10)+2
b1.push(new C.Hc("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.f34(g,b2)))}else b1.push(new C.Hc("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.f34(k,b2)))}else if(u===3){e=b2.aB(11)-5
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
b1.push(new C.Hc("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.f34(a0,b2)))}else{a6=2+b2.aB(10)
a7=a6+2+b2.aB(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.Hc("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.h_j(m,b2,A.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
hQu(d){var w,v,u=x.s,t=A.a(d.split(""),u)
if(t.length<4)return new A.dy(A.a(d.split(""),u),x.bJ).fN(0)
for(w=0;w<12;++w){B.d.fA(t,B.cB)
v=B.d.fN(t)
if(v!==d)return v}return new A.dy(t,x.bJ).fN(0)},
Hc:function Hc(d,e,f){this.a=d
this.b=e
this.c=f},
f35:function f35(){},
amy:function amy(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAj:function aAj(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
dGC:function dGC(d){this.a=d},
dGD:function dGD(d){this.a=d},
dGE:function dGE(d){this.a=d},
dGF:function dGF(d,e){this.a=d
this.b=e},
dGG:function dGG(d,e){this.a=d
this.b=e},
dGH:function dGH(d){this.a=d},
dGB:function dGB(d){this.a=d},
dGI:function dGI(d){this.a=d},
dGA:function dGA(d){this.a=d},
dGL:function dGL(d){this.a=d},
dGM:function dGM(d){this.a=d},
dGK:function dGK(d,e){this.a=d
this.b=e},
dGJ:function dGJ(d,e){this.a=d
this.b=e},
anb:function anb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAA:function aAA(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
dNX:function dNX(d,e,f){this.a=d
this.b=e
this.c=f},
dNY:function dNY(d){this.a=d},
dNT:function dNT(d){this.a=d},
dNV:function dNV(d,e){this.a=d
this.b=e},
dNU:function dNU(d,e){this.a=d
this.b=e},
dNW:function dNW(d,e){this.a=d
this.b=e},
dNS:function dNS(d){this.a=d},
hhL(d){var w,v,u,t,s,r,q,p=new A.Q(Date.now(),0,!1),o=p.bN(36e8)
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
return new C.qL(w,u,t,s,r,q==null?null:J.k(q))},
a5l(d){var w=0,v=A.j(x.ck),u,t,s,r,q,p,o
var $async$a5l=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.b)
w=1
break}w=3
return A.b(A.ax(),$async$a5l)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aS(J.q(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.b)
w=1
break}try{s=B.Q.aD(0,t,null)
if(!x.j.b(s)){p=A.a([],x.b)
u=p
w=1
break}p=J.d5(s,x.f)
p=A.cz(p,new C.c4C(),p.$ti.k("G.E"),x.b1)
p=A.z(p,A.a2(p).k("G.E"))
B.d.b_(p,new C.c4D())
u=p
w=1
break}catch(n){r=A.a6(n)
$.al.$1("[calendar-memory] load: "+A.t(r))
p=A.a([],x.b)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$a5l,v)},
ant(d,e){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$ant=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.a5l(d),$async$ant)
case 2:r=g
q=J.cA(r)
q.bm(r,new C.c4z(e))
q.K(r,e)
q.b_(r,new C.c4A())
w=3
return A.b(A.ax(),$async$ant)
case 3:u=g
t=B.a.i(d.toLowerCase())
q=q.k5(r,80)
s=q.$ti.k("J<ai.E,a1<n,@>>")
q=A.z(new A.J(q,new C.c4B(),s),s.k("ai.E"))
w=4
return A.b(u.aq("String","ngmy_helper_calendar_v1_"+t,B.Q.al(q,null)),$async$ant)
case 4:return A.h(null,v)}})
return A.i($async$ant,v)},
hl6(d,e){var w=Date.now(),v=new A.Q(w,0,!1).bQ()
w=J.dE(d,new C.c4E(v,v.bN(A.dB(14,0,0,0,0,0).a)))
w=A.z(w,w.$ti.k("G.E"))
return w},
fS8(d){var w,v,u,t,s,r,q,p,o,n,m=C.hl6(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=A.df(m,0,A.dK(20,"count",x.S),A.U(m).c),v=w.$ti,w=new A.bV(w,w.gJ(0),v.k("bV<ai.E>")),v=v.k("ai.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=B.o.F(A.dd(s),12)===0?12:B.o.F(A.dd(s),12)
q=A.dd(s)>=12?"PM":"AM"
p=B.a.aS(B.o.u(A.fM(s)),2,"0")
o=t.f
if((o==null?null:B.a.i(o).length!==0)===!0){o.toString
n=" @ "+B.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+A.bB(s)+"/"+A.bO(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&B.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return B.a.i(u.charCodeAt(0)==0?u:u)},
qL:function qL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c4C:function c4C(){},
c4D:function c4D(){},
c4z:function c4z(d){this.a=d},
c4A:function c4A(){},
c4B:function c4B(){},
c4E:function c4E(d,e){this.a=d
this.b=e},
hhM(d){var w,v,u,t,s,r,q,p,o=null,n=new A.Q(Date.now(),0,!1)
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
return new C.qM(w,u,t,s,r,q,J.k(p==null?"user":p))},
fQu(d){var w=B.o.F(A.dd(d),12)===0?12:B.o.F(A.dd(d),12),v=A.dd(d)>=12?"PM":"AM"
return""+A.bB(d)+"/"+A.bO(d)+" "+w+":"+B.a.aS(B.o.u(A.fM(d)),2,"0")+" "+v},
Sx(d){var w=0,v=A.j(x.e),u,t,s,r,q,p,o
var $async$Sx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.x)
w=1
break}w=3
return A.b(A.ax(),$async$Sx)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aS(J.q(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.x)
w=1
break}try{s=B.Q.aD(0,t,null)
if(!x.j.b(s)){p=A.a([],x.x)
u=p
w=1
break}p=J.d5(s,x.f)
p=A.cz(p,new C.bY1(),p.$ti.k("G.E"),x.Q)
p=A.z(p,A.a2(p).k("G.E"))
B.d.b_(p,new C.bY2())
u=p
w=1
break}catch(n){r=A.a6(n)
$.al.$1("[call-memory] load: "+A.t(r))
p=A.a([],x.x)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Sx,v)},
aVi(d,e){var w=0,v=A.j(x.H),u,t,s,r
var $async$aVi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$aVi)
case 2:u=g
t=A.df(e,0,A.dK(120,"count",x.S),A.U(e).c).dA(0)
s=B.a.i(d.toLowerCase())
r=A.U(t).k("J<1,a1<n,@>>")
r=A.z(new A.J(t,new C.bY_(),r),r.k("ai.E"))
w=3
return A.b(u.aq("String","ngmy_call_memory_v1_"+s,B.Q.al(r,null)),$async$aVi)
case 3:return A.h(null,v)}})
return A.i($async$aVi,v)},
aVj(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$aVj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:p=A.T(x.N,x.Q)
o=J
w=2
return A.b(C.Sx(d),$async$aVj)
case 2:u=o.aU(g)
case 3:if(!u.C()){w=4
break}t=u.gT(u)
p.m(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.m(0,r.a,r)}u=p.$ti.k("bg<2>")
q=A.z(new A.bg(p,u),u.k("G.E"))
B.d.b_(q,new C.bY0())
w=5
return A.b(C.aVi(d,q),$async$aVj)
case 5:return A.h(null,v)}})
return A.i($async$aVj,v)},
bY3(d,e){var w=0,v=A.j(x.e),u,t,s
var $async$bY3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Sx(d),$async$bY3)
case 3:t=s.dE(g,new C.bY4(e.bN(-72e8),e.bN(72e8)))
t=A.z(t,t.$ti.k("G.E"))
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bY3,v)},
fQv(d,e){var w,v,u,t,s,r=J.a8(d)
if(r.gai(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.k5(d,e),v=w.$ti,w=new A.bV(w,w.gJ(0),v.k("bV<ai.E>")),v=v.k("ai.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gTB()+"\n"
t=t.f
if(t!=null&&B.a.i(t).length!==0){s=B.a.i(t)
u+="  Voicemail/text: "+(s.length>180?B.a.am(s,0,177)+"\u2026":s)+"\n"}}r=r.gJ(d)>e?u+("\u2026 and "+(r.gJ(d)-e)+" more\n"):u
return B.a.i(r.charCodeAt(0)==0?r:r)},
hMz(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new A.Q(q,0,!1).bQ(),o=d.toLowerCase(),n=A.bW(A.bw(p),A.bB(p),A.bO(p),0,0,0,0,0)
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
return A.bW(A.bw(n),A.bB(n),A.bO(n),u,t,0,0,0)},
h4X(d){var w=A.ae("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
qM:function qM(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bY1:function bY1(){},
bY2:function bY2(){},
bY_:function bY_(){},
bY0:function bY0(){},
bY4:function bY4(d,e){this.a=d
this.b=e},
fSb(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.ln(t,w,v,u==null?null:J.k(u))},
hlc(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b5(v,new C.c4K(),x.bP)
v=A.z(v,v.$ti.k("ai.E"))}if(v==null)v=D.cRh
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.y(d.h(0,"printable"),!0)
return new C.ia(r,w,v,u,t,typeof d.h(0,s)=="number"?B.k.N(A.f3(d.h(0,s))):0)},
hlb(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.hyC(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?B.k.N(A.f3(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?B.k.N(A.f3(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b5(s,new C.c4I(),x.u)
s=A.z(s,s.$ti.k("ai.E"))}return new C.hW(p,w,v,u,s==null?D.as2:s,t)},
hyD(d){var w,v,u,t=A.E([F.Ar,"investments",B.oe,"games",B.jL,"loans",B.hr,"withdrawals",B.kE,"deposits",B.kF,"civic",B.kD,"store",B.qt,"jobs",B.m5,"refunds",B.eO,"account",B.lt,"music",B.x2,"help"],x.dk,x.N)
for(w=new A.cR(t,A.a2(t).k("cR<1,2>")).gah(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
hyC(d){switch(d){case"investments":return F.Ar
case"games":return B.oe
case"loans":return B.jL
case"withdrawals":return B.hr
case"deposits":return B.kE
case"civic":return B.kF
case"store":return B.kD
case"jobs":return B.qt
case"refunds":return B.m5
case"account":return B.eO
case"music":return B.lt
default:return B.x2}},
mI(d){var w=A.a([new C.ln("text",d,null,null)],x.a)
return w},
aeJ(){var w=null,v=x.v
return A.a([new C.hW("investments","Investments",F.Ar,4280468830,A.a([new C.ia("inv1","How do I buy an investment plan?",C.mI("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.ia("inv2","When do I get paid from my plan?",C.mI("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.ia("inv3","Can I have more than one plan?",C.mI("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.hW("games","Games",B.oe,4287323382,A.a([new C.ia("gam1","How do NGMY games work?",C.mI("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.ia("gam2","Why did my game payout change?",C.mI("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.hW("loans","Loans",B.jL,4294538006,A.a([new C.ia("loan1","How do I apply for a loan?",C.mI("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.ia("loan2","What is the repayment period?",C.mI("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.hW("withdrawals","Withdrawals",B.hr,4282090230,A.a([new C.ia("wd1","How do I withdraw money?",C.mI("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.ia("wd2","Why is my withdrawal pending?",C.mI("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.hW("deposits","Deposits",B.kE,4279548070,A.a([new C.ia("dep1","How do I deposit funds?",C.mI("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.ia("dep2","How long until my deposit posts?",C.mI("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.hW("civic","Civic Registry",B.kF,4289170426,A.a([new C.ia("civ1","What is Civic Registry?",C.mI("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.ia("civ2","What does \u201cmissed\u201d mean on my profile?",C.mI("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.hW("store","NGMY Store",B.kD,4293675161,A.a([new C.ia("sto1","How do I buy from NGMY Store?",C.mI("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.ia("sto2","How do I sell in the store?",C.mI("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.hW("jobs","Jobs & Creator",B.qt,4293548044,A.a([new C.ia("job1","How do I find jobs?",C.mI("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.ia("job2","How do I post a job?",C.mI("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.hW("refunds","Refunds",B.m5,4293870660,A.a([new C.ia("ref1","Can I get a refund?",C.mI("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.ia("ref2","How long do refunds take?",C.mI("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.hW("account","Account",B.eO,4281908728,A.a([new C.ia("acc1","How do I update my profile?",C.mI("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.ia("acc2","I forgot my password \u2014 what now?",C.mI("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.hW("music","Music Charts",B.lt,4290807036,A.a([new C.ia("mus1","What are Music Charts?",C.mI("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.ia("mus2","How do I upload music?",C.mI("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.hW("help","Help Center",B.x2,4279080072,A.a([new C.ia("hlp1","Where can I get live help?",C.mI("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.ia("hlp2","How do daily Helper limits work?",C.mI("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
fSc(d){var w,v=J.a8(d),u=v.gai(d)
if(u)return C.aeJ()
v=v.di(d,new C.c4N(),x.i)
w=A.z(v,v.$ti.k("ai.E"))
B.d.b_(w,new C.c4O())
return w.length===0?C.aeJ():w},
fSd(d){var w=J.b5(d,new C.c4P(),x.P)
w=A.z(w,w.$ti.k("ai.E"))
return A.E(["categories",w,"savedAt",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.z)},
anv(d){return C.hld(d)},
hld(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q,p
var $async$anv=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.ax(),$async$anv)
case 6:s=f
w=7
return A.b(s.aq("String","ngmy_helper_kb_v1",B.Q.al(C.fSd(d),null)),$async$anv)
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
return A.i($async$anv,v)},
c4M(){var w=0,v=A.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$c4M=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ax(),$async$c4M)
case 7:r=e
q=A.aS(J.q(r.a,"ngmy_helper_kb_v1"))
if(q==null||B.a.i(q).length===0){l=C.aeJ()
u=l
w=1
break}p=B.Q.aD(0,q,null)
if(!x.f.b(p)){l=C.aeJ()
u=l
w=1
break}o=J.q(p,"categories")
if(!x.j.b(o)){l=C.aeJ()
u=l
w=1
break}n=C.fSc(o)
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
l=C.aeJ()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$c4M,v)},
aXj(){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$aXj=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.bX(),$async$aXj)
case 7:if(!e){u=null
w=1
break}w=8
return A.b(A.eV("ngmy_helper_kb",null,!1,B.bE),$async$aXj)
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
return A.i($async$aXj,v)},
aXk(d){return C.hle(d)},
hle(d){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aXk=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.bX(),$async$aXk)
case 7:if(!f){u=!1
w=1
break}w=8
return A.b(A.ht("ngmy_helper_kb",d,!1,!1,B.cA,null),$async$aXk)
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
return A.i($async$aXk,v)},
anw(){var w=0,v=A.j(x.I),u,t,s,r
var $async$anw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c4M(),$async$anw)
case 3:s=e
w=4
return A.b(C.aXj(),$async$anw)
case 4:r=e
w=r!=null&&x.j.b(J.q(r,"categories"))?5:6
break
case 5:t=C.fSc(x.j.a(J.q(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return A.b(C.anv(t),$async$anw)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anw,v)},
c4Q(d){var w=0,v=A.j(x.y),u
var $async$c4Q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.anv(d),$async$c4Q)
case 3:u=C.aXk(C.fSd(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c4Q,v)},
ln:function ln(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ia:function ia(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c4L:function c4L(){},
c4K:function c4K(){},
hW:function hW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c4J:function c4J(){},
c4I:function c4I(){},
c4N:function c4N(){},
c4O:function c4O(){},
c4P:function c4P(){},
b5w:function b5w(d){this.a=d},
Tu:function Tu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAM:function aAM(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
dRC:function dRC(){},
dRD:function dRD(){},
dRw:function dRw(d){this.a=d},
dRx:function dRx(d){this.a=d},
dRf:function dRf(d,e){this.a=d
this.b=e},
dRg:function dRg(d){this.a=d},
dRh:function dRh(d,e,f){this.a=d
this.b=e
this.c=f},
dRe:function dRe(d){this.a=d},
dRt:function dRt(d,e){this.a=d
this.b=e},
dRu:function dRu(d,e){this.a=d
this.b=e},
dRv:function dRv(d){this.a=d},
dRn:function dRn(d){this.a=d},
dRo:function dRo(d,e,f){this.a=d
this.b=e
this.c=f},
dRm:function dRm(d,e){this.a=d
this.b=e},
dRs:function dRs(d,e,f){this.a=d
this.b=e
this.c=f},
dRr:function dRr(d,e){this.a=d
this.b=e},
dRq:function dRq(d,e){this.a=d
this.b=e},
dRp:function dRp(d,e,f){this.a=d
this.b=e
this.c=f},
dRj:function dRj(d){this.a=d},
dRi:function dRi(d){this.a=d},
dRk:function dRk(d,e){this.a=d
this.b=e},
dRl:function dRl(d){this.a=d},
dRB:function dRB(d,e){this.a=d
this.b=e},
dRA:function dRA(d,e){this.a=d
this.b=e},
dRz:function dRz(){},
dRy:function dRy(d,e){this.a=d
this.b=e},
NP:function NP(d,e){this.c=d
this.a=e},
b7m:function b7m(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cFG:function cFG(d){this.a=d},
cFF:function cFF(d,e){this.a=d
this.b=e},
cFD:function cFD(d,e){this.a=d
this.b=e},
cFH:function cFH(d){this.a=d},
cFE:function cFE(d,e){this.a=d
this.b=e},
cFC:function cFC(d,e){this.a=d
this.b=e},
cFI:function cFI(d){this.a=d},
cFJ:function cFJ(d,e){this.a=d
this.b=e},
YZ:function YZ(d,e,f){this.c=d
this.d=e
this.a=f},
aCF:function aCF(){this.d=$
this.c=this.a=null},
eBM:function eBM(d,e){this.a=d
this.b=e},
eBN:function eBN(d){this.a=d},
eBT:function eBT(){},
eBS:function eBS(d,e){this.a=d
this.b=e},
eBR:function eBR(d,e){this.a=d
this.b=e},
eBO:function eBO(d,e){this.a=d
this.b=e},
eBQ:function eBQ(d,e,f){this.a=d
this.b=e
this.c=f},
eBP:function eBP(d,e,f){this.a=d
this.b=e
this.c=f},
YY:function YY(d,e){this.c=d
this.a=e},
aCE:function aCE(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
eBI:function eBI(d,e){this.a=d
this.b=e},
eBG:function eBG(d){this.a=d},
eBH:function eBH(d,e){this.a=d
this.b=e},
eBK:function eBK(d,e){this.a=d
this.b=e},
eBL:function eBL(d){this.a=d},
eBJ:function eBJ(d,e){this.a=d
this.b=e},
hl9(d){var w=new A.J(d,new C.c4F(),A.U(d).k("J<1,n>")).aF(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
c4G(d,e,f){return C.hla(d,e,f)},
hla(b4,b5,b6){var w=0,v=A.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$c4G=A.e(function(b8,b9){if(b8===1)return A.f(b9,v)
for(;;)switch(w){case 0:b3=B.a.i(b5)
if(b3.length===0){u=new A.IK([A.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return A.b(A.qi(A.mL(b3),C.hl9(b6)+"\n\nAdmin instruction:\n"+b4,B.hc,null),$async$c4G)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=B.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new A.IK([A.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=B.a.i(a3)
if(J.cW(s,"```"))s=B.a.e1(J.fMd(s,A.ae("^```(?:json)?\\s*",!0,!1,!1,!1),""),A.ae("\\s*```$",!0,!1,!1,!1),"")
r=B.Q.aD(0,s,null)
a3=x.f
if(!a3.b(r)){a3=A.a([],x.Y)
u=new A.IK([a3,"AI response was not valid JSON.",null,null])
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
u=new A.IK([a3,"AI did not return any categories.",p,o])
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
J.cb(a0,C.fSb(A.a_(a3.a(a1),a4,a5)))}if(J.aa(a0)===0){a9=J.q(e,"answer")
J.cb(a0,new C.ln("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=A.t(f)
b1=J.q(e,"question")
J.cb(g,new C.ia("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.y(J.q(e,"printable"),!0),f))}a9=J.q(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.q(j,"iconKey")
b0=C.hl8(J.k(b0==null?"help":b0))
b1=typeof J.q(j,"colorValue")=="number"?B.k.N(A.f3(J.q(j,"colorValue"))):4284773515
J.cb(m,new C.hW(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.aa(a3)!==0)===!0?o:null
u=new A.IK([m,null,p,a3])
w=1
break}catch(b7){a2=A.a6(b7)
a3=A.t(a2)
a4=A.a([],x.Y)
u=new A.IK([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c4G,v)},
hl8(d){switch(d){case"investments":return F.Ar
case"games":return B.oe
case"loans":return B.jL
case"withdrawals":return B.hr
case"deposits":return B.kE
case"civic":return B.kF
case"store":return B.kD
case"jobs":return B.qt
case"refunds":return B.m5
case"account":return B.eO
case"music":return B.lt
default:return B.x2}},
hL6(d,e,f){var w,v,u,t=A.bj(d,!0,x.i)
if(f!=null&&J.aa(e)===1){w=B.d.bi(t,new C.fjZ(f))
if(w>=0){t[w]=J.fj(e).czW(f,t[w].f)
return t}}B.d.v(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].b6Q(u)
return t},
c4F:function c4F(){},
fjZ:function fjZ(d){this.a=d},
cX7:function cX7(d){this.a=d},
Tv:function Tv(d,e,f){this.c=d
this.d=e
this.a=f},
aAO:function aAO(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
dSc:function dSc(){},
dRT:function dRT(d,e){this.a=d
this.b=e},
dRY:function dRY(d,e){this.a=d
this.b=e},
dRW:function dRW(d,e){this.a=d
this.b=e},
dRU:function dRU(d){this.a=d},
dRV:function dRV(d){this.a=d},
dRX:function dRX(d,e,f){this.a=d
this.b=e
this.c=f},
dRP:function dRP(){},
dRQ:function dRQ(){},
dRR:function dRR(){},
dRS:function dRS(){},
dS2:function dS2(d,e){this.a=d
this.b=e},
dS3:function dS3(d){this.a=d},
dS4:function dS4(d){this.a=d},
dS5:function dS5(d){this.a=d},
dS6:function dS6(d){this.a=d},
dS7:function dS7(d){this.a=d},
dS8:function dS8(){},
dS9:function dS9(d){this.a=d},
dS1:function dS1(d){this.a=d},
dSa:function dSa(d){this.a=d},
dS0:function dS0(d){this.a=d},
dSb:function dSb(d,e){this.a=d
this.b=e},
dS_:function dS_(d,e){this.a=d
this.b=e},
dRZ:function dRZ(d,e){this.a=d
this.b=e},
hsV(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.a([],x.eO)
for(w=A.ae("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kx(0,d),w=new A.Ie(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=B.a.am(d,t,q)
o=u?B.cp:B.aI
m.push(new A.em(p,n,n,B.cS,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?B.cp:B.aI
m.push(new A.em(p,n,n,B.cS,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,B.I,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?B.cp:B.aI
m.push(new A.em(p,n,n,B.cS,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,B.cx,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?B.cp:B.aI
m.push(new A.em(p,n,n,B.cS,n,n,n,n,n,n,new A.F(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,B.mi,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=B.a.aY(d,t)
m.push(A.dl(n,n,n,n,n,n,n,n,n,A.l(n,n,u?B.cp:B.aI,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return A.rV(n,n,n,B.eH,n,n,!0,n,A.dl(m,n,n,n,n,n,n,n,n,n,n),B.a5,n,n,B.dc,B.cf)},
d9c:function d9c(d){this.a=d},
ayn:function ayn(d,e){this.a=d
this.b=e},
anu:function anu(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAN:function aAN(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
dRM:function dRM(d,e){this.a=d
this.b=e},
dRN:function dRN(d,e){this.a=d
this.b=e},
dRE:function dRE(d){this.a=d},
dRF:function dRF(d){this.a=d},
dRO:function dRO(){},
dRH:function dRH(d,e){this.a=d
this.b=e},
dRG:function dRG(d,e){this.a=d
this.b=e},
dRJ:function dRJ(){},
dRL:function dRL(){},
dRK:function dRK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRI:function dRI(d,e){this.a=d
this.b=e},
ayl:function ayl(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a9E:function a9E(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aXi:function aXi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c4H:function c4H(d){this.a=d},
a9w:function a9w(d,e,f){this.c=d
this.d=e
this.a=f},
czm:function czm(d){this.a=d},
czn:function czn(){},
czo:function czo(d){this.a=d},
aym:function aym(d,e,f){this.c=d
this.d=e
this.a=f},
bdm:function bdm(){this.c=this.a=this.d=null},
d9d:function d9d(d,e){this.a=d
this.b=e},
d9f:function d9f(d,e){this.a=d
this.b=e},
d9e:function d9e(d){this.a=d},
hmF(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
hmG(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
hmE(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
h_e(d){var w
if(new A.a4(A.a(d.split("\n"),x.s),new C.f2Q(),x.cc).gJ(0)<3)w=d.length>100&&B.a.t(d,"\n")
else w=!0
return w},
hMe(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.hmE(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
aog:function aog(d,e){this.a=d
this.b=e},
Hh:function Hh(d,e){this.a=d
this.b=e},
qS:function qS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2Q:function f2Q(){},
anx:function anx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAP:function aAP(d,e,f,g,h,i,j){var _=this
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
dSq:function dSq(d,e){this.a=d
this.b=e},
dSh:function dSh(d){this.a=d},
dSj:function dSj(){},
dSk:function dSk(d,e){this.a=d
this.b=e},
dSl:function dSl(d){this.a=d},
dSm:function dSm(){},
dSn:function dSn(d,e){this.a=d
this.b=e},
dSo:function dSo(d){this.a=d},
dSp:function dSp(d){this.a=d},
dSi:function dSi(d,e){this.a=d
this.b=e},
dSx:function dSx(d,e){this.a=d
this.b=e},
dSu:function dSu(){},
dSv:function dSv(d,e){this.a=d
this.b=e},
dSw:function dSw(d,e){this.a=d
this.b=e},
dSt:function dSt(d,e){this.a=d
this.b=e},
dSs:function dSs(d,e){this.a=d
this.b=e},
dSz:function dSz(d){this.a=d},
dSy:function dSy(d){this.a=d},
dSg:function dSg(d,e){this.a=d
this.b=e},
dSf:function dSf(d,e){this.a=d
this.b=e},
dSA:function dSA(d,e){this.a=d
this.b=e},
dSr:function dSr(d,e){this.a=d
this.b=e},
dSd:function dSd(d){this.a=d},
dSe:function dSe(d){this.a=d},
aIO:function aIO(){},
c4S(d){var w=0,v=A.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$c4S=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=D.P8
w=1
break}w=3
return A.b(A.ax(),$async$c4S)
case 3:r=f
q=B.a.i(d.toLowerCase())
t=A.aS(J.q(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.P8
w=1
break}try{q=A.a_(x.f.a(B.Q.aD(0,t,null)),x.N,x.z)
p=J.y(q.h(0,"contacts"),!0)
o=J.y(q.h(0,"calendar"),!0)
n=J.y(q.h(0,"calls"),!0)
q=J.y(q.h(0,"allGrantedOnce"),!0)
u=new C.Tw(p,o,n,q)
w=1
break}catch(l){s=A.a6(l)
$.al.$1("[helper-perms] load: "+A.t(s))
u=D.P8
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c4S,v)},
any(d,e){var w=0,v=A.j(x.H),u
var $async$any=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){w=1
break}w=4
return A.b(A.ax(),$async$any)
case 4:w=3
return A.b(g.aq("String","ngmy_helper_permissions_v1_"+B.a.i(d.toLowerCase()),B.Q.al(e.ac(),null)),$async$any)
case 3:case 1:return A.h(u,v)}})
return A.i($async$any,v)},
c4R(d){var w=0,v=A.j(x.gp),u,t
var $async$c4R=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=new C.Tw(!0,!0,!0,!0)
w=3
return A.b(C.any(d,t),$async$c4R)
case 3:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c4R,v)},
h4Y(d){var w=B.a.i(d.toLowerCase()),v=A.ae("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=A.ae("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=A.ae("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=A.ae("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
h4W(d){var w=A.ae("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
Tw:function Tw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bzR(d,e,f,g,h){var w=0,v=A.j(x.H),u,t,s
var $async$bzR=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return A.b(C.aXe(h),$async$bzR)
case 3:if(j){w=1
break}w=4
return A.b(C.anq(h),$async$bzR)
case 4:if(d.e==null){w=1
break}t=A.q_(d,!0)
t.toString
s=A.dc()
s.b=A.nW(new C.fvP(g,e,f,s),!1,!1)
t.lm(0,s.b9())
case 1:return A.h(u,v)}})
return A.i($async$bzR,v)},
fvP:function fvP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fvO:function fvO(d){this.a=d},
XI:function XI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
axP:function axP(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cO$=d
_.b0$=e
_.c=_.a=null},
d6N:function d6N(d){this.a=d},
d6O:function d6O(d,e,f){this.a=d
this.b=e
this.c=f},
d6T:function d6T(){},
d6S:function d6S(d){this.a=d},
d6P:function d6P(d){this.a=d},
d6Q:function d6Q(){},
d6R:function d6R(d){this.a=d},
aHI:function aHI(){},
hm7(d){var w=B.a.i(d),v=A.ae("[^A-Z0-9]",!0,!1,!1,!1),u=A.aJ(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
hm6(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.ae("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.ae("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
ao2(d){return C.hm4(d)},
hm4(d){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$ao2=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.eV("ngmy_local_deposit_qr_v1_"+B.a.i(d),null,!1,B.bE),$async$ao2)
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
return A.i($async$ao2,v)},
aY8(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aY8=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.hm7(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.eV("ngmy_local_deposit_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bE),$async$aY8)
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
return A.i($async$aY8,v)},
fSA(d){var w,v=B.a.i(d)
if(B.a.a_(v,"NGMYLOCALDEP1|")){w=B.a.i(B.a.aY(v,14))
return w.length===0?null:w}return null},
hm5(d,e,f){var w=B.a.i(f)
if(w.length===0)return!1
return B.d.ba(e,new C.c6F(B.a.i(d.toLowerCase()),w))},
fSB(d,e,f,g,h){var w,v,u=J.a8(g),t=u.h(g,"lockedToEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=B.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.pn(!1,0,y.u)
if(s!==B.a.i(f.toLowerCase()))return new C.pn(!1,0,y.j)
v=B.a.i(h)
if(v.length===0)return new C.pn(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.pn(!1,0,"Verification code does not match this deposit.")
if(!C.hm5(e,d,w))return new C.pn(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
fCz(d,e){var w,v,u="amount",t=J.a8(d),s=t.h(d,"redeemedBy")
if(B.a.i(J.k(s==null?"":s)).length!==0)return D.dkw
s=t.h(d,"lockedToEmail")
w=B.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=B.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){A.aN(t.h(d,u))
return new C.Ma(!0,!1,!1,!0)}if(w!==B.a.i(e.toLowerCase())){A.aN(t.h(d,u))
return new C.Ma(!0,!1,!0,!1)}A.aN(t.h(d,u))
return new C.Ma(!0,!1,!1,!1)},
c6L(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$c6L=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=C.fSA(d)
if(s==null){u=D.Pa
w=1
break}w=3
return A.b(C.ao2(s),$async$c6L)
case 3:t=g
if(t==null){u=D.Pa
w=1
break}u=C.fCz(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6L,v)},
aYa(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$aYa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aY8(d),$async$aYa)
case 3:s=g
if(s==null||s.length===0){u=D.Pa
w=1
break}w=4
return A.b(C.ao2(s),$async$aYa)
case 4:t=g
if(t==null){u=D.Pa
w=1
break}u=C.fCz(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYa,v)},
c6M(d,e,f,g,h){var w=0,v=A.j(x.D),u,t
var $async$c6M=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aY8(d),$async$c6M)
case 3:t=j
if(t==null||t.length===0){u=new C.pn(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.TR(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6M,v)},
TR(d,e,f,g,h){return C.hm8(d,e,f,g,h)},
hm8(a2,a3,a4,a5,a6){var w=0,v=A.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$TR=A.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.fSA(a4)
if(a0==null){u=new C.pn(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return A.b(C.ao2(a0),$async$TR)
case 3:k=a8
if(k==null){u=new C.pn(!1,0,y.m)
w=1
break}j=C.fCz(k,a5)
if(j.b){u=new C.pn(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.pn(!1,0,y.u)
w=1
break}if(j.c){u=new C.pn(!1,0,y.j)
w=1
break}i=C.fSB(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=A.aN(J.q(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.pn(!1,0,"Invalid deposit amount.")
w=1
break}r=new A.Q(Date.now(),0,!1).a5().ab()
q=B.a.i(a5.toLowerCase())
t=5
w=8
return A.b(A.eV("ngmy_local_deposit_qr_v1_"+B.a.i(a0),null,!1,B.bE),$async$TR)
case 8:p=a8
if(p==null){u=new C.pn(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.q(p,"redeemedBy")
if(B.a.i(J.k(g==null?"":g)).length!==0){u=new C.pn(!1,0,"This deposit code was already used.")
w=1
break}o=C.fSB(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=B.a.i(a0)
f=x.N
e=x.z
n=A.dS(p,f,e)
J.aE(n,"redeemedBy",q)
J.aE(n,"redeemedAt",r)
w=9
return A.b(A.ht("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,B.cA,null),$async$TR)
case 9:n=J.q(p,"shortCode")
m=B.a.i(J.k(n==null?"":n))
w=J.aa(m)!==0?10:11
break
case 10:w=12
return A.b(A.ht("ngmy_local_deposit_code_v1_"+B.a.i(m).toUpperCase(),A.E(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,B.cA,null),$async$TR)
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
return A.i($async$TR,v)},
Ma:function Ma(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
pn:function pn(d,e,f){this.a=d
this.b=e
this.c=f},
c6F:function c6F(d,e){this.a=d
this.b=e},
c6T(d,e){var w
A.fIt(d,e,!1)
A.qh(d.a,d.d,!0,!1)
w=B.a.i("")
if(w.length!==0)A.zQ(!0,!1,d.d,w)},
a5H(d,e){if(d==null)return!1
return A.bw(d)===e.gcd()&&A.bB(d)===e.gcb()&&A.bO(d)===e.gcr()},
hmg(d){var w=A.dd(d)*60+A.fM(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
fSI(d){if(A.dd(d)>=12)return!1
if(A.lP(d)===6||A.lP(d)===7)return!1
return!0},
c6X(d){var w=d.c?d.bQ():d
return w.cY(A.bW(A.bw(w),A.bB(w),A.bO(w),12,0,0,0,0))},
fCD(d,e){var w,v,u,t=d.gBh()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a5H(d.fx,e)&&d.fy>0.0001)return B.k.E(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bQ()
if(!C.c6X(w))return 0
v=A.bW(e.gcd(),e.gcb(),e.gcr(),12,0,0,0,0)
if(!e.cY(v))return t
if(!e.c8(w))return 0
u=B.o.ak(v.bw(w).a,1000)
if(u<=0)return t
return B.k.E(t*(B.o.E(B.o.ak(e.bw(w).a,1000),0,u)/u),0,t)},
fCC(d,e){var w,v,u,t,s,r,q,p=new A.Q(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a5H(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bQ():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!B.d.ba(e,new C.c6S(s))&&C.c6X(t)){r=d.gBh()
v=r>0
if(v){q=new A.d_(s,d.a,r,B.fv,B.f7,"Clock-in daily earnings (local)",null,null,B.ch,p)
C.c6T(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a5H(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a5H(o,p)&&!C.c6X(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
c6S:function c6S(d){this.a=d},
hAH(d){var w,v,u=d.k4,t=u==null?null:B.a.i(u)
if(t!=null&&t.length!==0)return t
w=B.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=B.a.i(d.a)
if(B.a.t(v,"@"))return B.d.gL(v.split("@"))
return"Member"},
hRh(d,e,f,g,h,i){return A.hm(d,new C.ao3(f,e,i,g,h,null),!0,null,x.H)},
fWV(d){var w,v,u=d.c?d.bQ():d,t=A.dd(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+A.bB(u)+"/"+A.bO(u)+"/"+A.bw(u)+" \xb7 "+w+":"+B.a.aS(B.o.u(A.fM(u)),2,"0")+" "+v},
h2S(d){var w=d.x
if(w===B.dp)return"Processing"
if(w===B.jV)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
hIJ(d){var w=d.f,v=B.a.i(w==null?"":w),u=v.toLowerCase()
if(B.a.t(u,"clock-in daily earnings")||B.a.t(u,"clock-in earnings"))return"Clock-in completed"
if(B.a.t(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===B.fm)return"Deposit"
if(w===B.eI)return"Withdrawal"
return v.length!==0?v:w.b},
hAm(d){var w=d.d,v=w===B.fm||w===B.nQ||w===B.fv||w===B.jW,u=d.x
if(u===B.dp)return w===B.eI?-d.c:0
if(u!==B.ch)return 0
w=d.c
return v?w:-w},
hJh(d,e){var w,v,u,t,s,r,q=A.z(d,x.o)
B.d.b_(q,new C.ffY())
w=A.T(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,A.K)(q),++t,v=r){s=q[t]
r=v-C.hAm(s)
if(r<0)r=0
w.m(0,s.a,new A.bkD(v,r))}return w},
ao3:function ao3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBa:function aBa(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
e10:function e10(d){this.a=d},
e1H:function e1H(d){this.a=d},
e1I:function e1I(d){this.a=d},
e1J:function e1J(d){this.a=d},
e1p:function e1p(d,e){this.a=d
this.b=e},
e1q:function e1q(){},
e1r:function e1r(d){this.a=d},
e1s:function e1s(){},
e1t:function e1t(d){this.a=d},
e1u:function e1u(d,e,f){this.a=d
this.b=e
this.c=f},
e1v:function e1v(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1k:function e1k(d,e){this.a=d
this.b=e},
e11:function e11(d,e,f){this.a=d
this.b=e
this.c=f},
e1l:function e1l(){},
e1m:function e1m(){},
e1n:function e1n(d){this.a=d},
e1o:function e1o(){},
e15:function e15(d,e){this.a=d
this.b=e},
e16:function e16(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1e:function e1e(){},
e1b:function e1b(d){this.a=d},
e1c:function e1c(d,e){this.a=d
this.b=e},
e1d:function e1d(d,e){this.a=d
this.b=e},
e1f:function e1f(d){this.a=d},
e1g:function e1g(d,e,f){this.a=d
this.b=e
this.c=f},
e1h:function e1h(d){this.a=d},
e1j:function e1j(d){this.a=d},
e1i:function e1i(d){this.a=d},
e17:function e17(d){this.a=d},
e18:function e18(d,e,f){this.a=d
this.b=e
this.c=f},
e1z:function e1z(){},
e1A:function e1A(){},
e1E:function e1E(d){this.a=d},
e1x:function e1x(d){this.a=d},
e1F:function e1F(d){this.a=d},
e1w:function e1w(d){this.a=d},
e1G:function e1G(d){this.a=d},
e1B:function e1B(d){this.a=d},
e1C:function e1C(d){this.a=d},
e1D:function e1D(d){this.a=d},
e1y:function e1y(d){this.a=d},
e14:function e14(d){this.a=d},
e13:function e13(d){this.a=d},
e12:function e12(d){this.a=d},
e1a:function e1a(d,e){this.a=d
this.b=e},
e19:function e19(d,e){this.a=d
this.b=e},
ayy:function ayy(d,e,f,g,h,i,j,k,l,m){var _=this
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
db0:function db0(){},
db1:function db1(){},
db2:function db2(d,e,f){this.a=d
this.b=e
this.c=f},
db_:function db_(d){this.a=d},
db3:function db3(d,e){this.a=d
this.b=e},
daZ:function daZ(d){this.a=d},
ayx:function ayx(d,e,f,g,h,i,j,k,l,m){var _=this
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
be5:function be5(d,e){var _=this
_.f=_.e=_.d=$
_.cO$=d
_.b0$=e
_.c=_.a=null},
daU:function daU(d){this.a=d},
daV:function daV(d){this.a=d},
daW:function daW(d){this.a=d},
daX:function daX(){},
daY:function daY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
daT:function daT(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
daS:function daS(d){this.a=d},
b7R:function b7R(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
b7Q:function b7Q(d,e,f){this.b=d
this.d=e
this.a=f},
b7P:function b7P(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
ayz:function ayz(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
ayA:function ayA(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
dbk:function dbk(){},
dbl:function dbl(){},
dbm:function dbm(){},
db6:function db6(d){this.a=d},
db5:function db5(d,e){this.a=d
this.b=e},
db4:function db4(d,e){this.a=d
this.b=e},
dbh:function dbh(d,e){this.a=d
this.b=e},
dbj:function dbj(d,e){this.a=d
this.b=e},
dbi:function dbi(d,e){this.a=d
this.b=e},
dbg:function dbg(){},
dbf:function dbf(d){this.a=d},
dbe:function dbe(){},
db9:function db9(d){this.a=d},
dba:function dba(){},
dbb:function dbb(d){this.a=d},
dbc:function dbc(d){this.a=d},
db8:function db8(){},
dbd:function dbd(d){this.a=d},
db7:function db7(d){this.a=d},
b7h:function b7h(d){this.a=d},
ffY:function ffY(){},
brz:function brz(d,e){this.b=d
this.a=e},
aHY:function aHY(){},
btv:function btv(){},
hFn(d,e,f,g,h,i,j,k){var w,v=B.a.i(j.toLowerCase())
B.d.bm(d,new C.faA(v,g))
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
aLW(d){var w,v=J.a8(d),u=A.aN(v.h(d,"matchesTotal")),t=u==null?null:B.k.N(u)
if(t==null)t=1
v=A.aN(v.h(d,"matchesPlayed"))
w=v==null?null:B.k.N(v)
return B.o.E(t-(w==null?0:w),0,t)},
hQ4(d,e){var w=A.U(e).k("a4<1>")
w=A.z(new A.a4(e,new C.fql(B.a.i(d.toLowerCase())),w),w.k("G.E"))
return w},
aeW(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
if(C.aLW(u)<=0){t=J.cA(u)
t.m(u,"status","finished")
t.m(u,"seriesStatus","complete")}}},
hHY(d,e){var w,v,u,t=J.a8(d),s=t.h(d,"status")
if(!J.y(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.y(s==null?"":s,"complete"))return!1
if(C.aLW(d)<=0)return!1
w=B.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=B.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=B.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aLW(d)>0},
hHX(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a8(d),h=A.aN(i.h(d,"matchesTotal")),g=h==null?null:B.k.N(h)
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
hFm(d,e){var w
C.aeW(e)
w=A.U(e).k("a4<1>")
w=A.z(new A.a4(e,new C.faz(B.a.i(d.toLowerCase())),w),w.k("G.E"))
return w},
tn(d,e){var w,v,u
for(w=J.aU(d);w.C();){v=w.gT(w)
u=J.q(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
hBZ(d,e,f){var w,v,u,t="fromName",s=J.a8(f),r=s.h(f,"fromEmail"),q=B.a.i(J.k(r==null?"":r).toLowerCase())
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
fIc(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase()),r=J.a8(d),q=r.h(d,"fromEmail"),p=B.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=B.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.hBZ(x.f.b(u)?A.a_(u,r,q):A.T(r,q),v,d)
if((t.length===0||B.a.t(t,"@"))&&f!=null){t=J.q(f,v)
if(t==null)t=""}if(t.length===0||B.a.t(t,"@"))return"Opponent"
return t},
byG(){var w=0,v=A.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$byG=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ax(),$async$byG)
case 7:r=e
q=A.aS(J.q(r.a,"all_users"))
if(q==null||q.length===0){k=x.N
u=A.T(k,k)
w=1
break}p=B.Q.aD(0,q,null)
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
return A.i($async$byG,v)},
bxM(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bxM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return A.b(C.byG(),$async$bxM)
case 3:u=t.fIc(s,r,g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bxM,v)},
Jr(d,e,f){var w=0,v=A.j(x.h),u,t,s,r,q,p
var $async$Jr=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(d)
p=$.h0t.h(0,q)
if(p!=null){t=new A.Q(Date.now(),0,!1).bw(p)
t=t.a>A.dB(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.h0t.m(0,q,new A.Q(Date.now(),0,!1))
w=5
return A.b(A.P7(B.c6,q),$async$Jr)
case 5:case 4:s=$.h0s.h(0,q)
if(s==null){u=C.tn(e,q)
w=1
break}r=C.tn(A.bxS(e,A.a([s],x._)),q)
if(r!=null)A.fKu(e,r)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Jr,v)},
hQf(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"status",f)
t.m(u,"respondedAt",new A.Q(Date.now(),0,!1).ab())
return}}},
hyK(d,e){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
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
for(q=x.S,r=0;r<8;++r)t[r]=A.ij(8,new C.f0p(r),!0,q)
return A.E(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return A.E(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
hFl(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"status","active")
t.m(u,"respondedAt",new A.Q(Date.now(),0,!1).ab())
r=C.hyK(u,f)
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
hQd(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)!==e)continue
w=A.aN(t.h(u,i))
w=w==null?null:B.k.N(w)
r=(w==null?0:w)+1
t.m(u,i,r)
w=A.aN(t.h(u,"matchesTotal"))
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
fKt(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a8(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.m(u,"sessionState",A.a_(f,x.N,x.z))
t.m(u,"sessionUpdatedAt",new A.Q(Date.now(),0,!1).ab())
return}}},
fp9(d){var w=0,v=A.j(x.gw),u,t,s,r,q
var $async$fp9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.aeW(d)
t=$.fHC
if(t==null)s=$.fHC=A.P7(B.c6,null).f4(new C.fpa())
else s=t
w=3
return A.b(s,$async$fp9)
case 3:r=f
if(r==null){u=A.bj(new A.J(d,new C.fpb(),A.U(d).k("J<1,@>")),!0,x.P)
w=1
break}q=A.bxS(d,r)
B.d.a7(d)
B.d.v(d,q)
u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fp9,v)},
aeX(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$aeX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.aeW(d)
t=A.U(d).k("J<1,a1<n,@>>")
t=A.z(new A.J(d,new C.fn4(),t),t.k("ai.E"))
w=3
return A.b(A.P7(t,null),$async$aeX)
case 3:s=f
if(s==null){u=!1
w=1
break}r=A.bxS(d,s)
B.d.a7(d)
B.d.v(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aeX,v)},
aMP(d,e,f){var w=0,v=A.j(x.y),u,t,s,r
var $async$aMP=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:C.fKt(d,e,f)
t=C.tn(d,e)
if(t==null){u=!1
w=1
break}w=3
return A.b(A.P7(A.a([A.a_(t,x.N,x.z)],x._),e),$async$aMP)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.tn(s,e)
if(r!=null)A.fKu(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aMP,v)},
hMX(d,e,f){var w
C.fKt(d,e,f)
w=$.fHq.h(0,e)
if(w!=null)w.aa(0)
$.fHq.m(0,e,A.cP(B.lp,new C.fn5(e,d)))},
fCl(d,e){return new C.aWW(!0,d,"NGMY",B.a.i(e.toLowerCase()),null,!0)},
faA:function faA(d,e){this.a=d
this.b=e},
fql:function fql(d){this.a=d},
faz:function faz(d){this.a=d},
f0p:function f0p(d){this.a=d},
fpa:function fpa(){},
fpb:function fpb(){},
fn4:function fn4(){},
fn5:function fn5(d,e){this.a=d
this.b=e},
aWW:function aWW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
hQH(d,e,f){return A.c2(B.K,null,new C.fri(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
fri:function fri(d,e){this.a=d
this.b=e},
Yv:function Yv(d,e,f){this.c=d
this.d=e
this.a=f},
aAY:function aAY(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
dWv:function dWv(d){this.a=d},
dWy:function dWy(d){this.a=d},
dWz:function dWz(d){this.a=d},
dWx:function dWx(d){this.a=d},
dWA:function dWA(d){this.a=d},
dWB:function dWB(d,e){this.a=d
this.b=e},
dWw:function dWw(d,e){this.a=d
this.b=e},
hLu(d){var w,v,u,t=B.a.i(d)
if(t.length===0)return B.i6
w=t.toLowerCase()
v=A.ae("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return B.i6
v=Date.now()
u=C.hBi(w,new A.Q(v,0,!1))
v=x.N
return A.a([new A.ke("calendar",A.E(["title",C.hBh(t,w),"start",u.ab(),"end",u.bN(36e8).ab(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
hBh(d,e){var w,v,u,t,s,r=A.ae("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cz(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return B.a.i(w==null?"":w)}u=A.ae("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cz(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.h1e(B.a.i(t))}s=A.ae("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cz(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.h1e(B.a.i(t))}if(B.a.t(e,"meeting"))return"Meeting"
if(B.a.t(e,"appointment"))return"Appointment"
return"NGMY Event"},
h1e(d){var w
if(d.length===0)return d
w=B.a.fn(d,A.ae("\\s+",!0,!1,!1,!1))
return new A.J(w,new C.f9L(),A.U(w).k("J<1,n>")).aF(0," ")},
hBi(d,e){var w,v,u,t,s,r,q,p,o=A.bW(A.bw(e),A.bB(e),A.bO(e),0,0,0,0,0)
if(B.a.t(d,"tomorrow"))o=o.bN(864e8)
else if(!B.a.t(d,"today"))for(w=D.ayL.gdH(D.ayL),w=w.gah(w);w.C();){v=w.gT(w)
u=v.a
if(A.dp(d,u,0)){t=C.hAl(o,v.b)
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
q=0}return A.bW(A.bw(o),A.bB(o),A.bO(o),r,q,0,0,0)},
hAl(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(A.lP(w)===e){u=!0
if(v<=0){t=d.bN(36e8)
s=w.a
if(s>=t.gbo())u=s===t.gbo()&&w.b<t.gcA()}}else u=!1
if(u)return w
w=w.bN(r)}return d.bN(r)},
f9L:function f9L(){},
hLv(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=B.a.i(d)
if(j.length===0)return B.i6
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
q=C.hxD(w,j)
if(q==null||q.length===0)return B.i6
t=A.ae("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=A.ae("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return A.a([new A.ke("call",A.E(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=A.E(["name",q],t,t)
if(r!=null)m.m(0,"body",r)
return A.a([new A.ke(n,m)],x.Z)}if(p){t=x.N
return A.a([new A.ke("call",A.E(["name",q],t,t))],x.Z)}return B.i6},
hxD(d,e){var w,v,u,t,s,r,q=[A.ae("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),A.ae("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),A.ae("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
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
if(u)return C.hEG(t)}r=A.ae("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cz(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return B.a.i(u==null?"":u)}return null},
hEG(d){var w=B.a.fn(d,A.ae("\\s+",!0,!1,!1,!1))
return new A.J(w,new C.f9K(),A.U(w).k("J<1,n>")).aF(0," ")},
f9K:function f9K(){},
h54(d){var w=new A.J(d,new C.fpr(),A.U(d).k("J<1,a1<n,@>>")).bZ(0,new C.fps())
w=A.z(w,w.$ti.k("G.E"))
return w},
fpr:function fpr(){},
fps:function fps(){},
hLy(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return B.i6
w=B.a.i(d)
if(w.length===0)return B.i6
v=w.toLowerCase()
if(!(B.a.t(v,"send email")||B.a.t(v,"send an email")||B.a.t(v,"send a message to")||B.a.t(v,"email ")||B.a.t(v,"write an email")||B.a.t(v,"write email")))return B.i6
u=A.ae("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cz(w)
if(u==null)return B.i6
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
return A.a([new A.ke("send_email",t)],x.Z)},
hKH(d,e){var w
if(e)return d
w=J.dE(d,new C.fjm())
w=A.z(w,w.$ti.k("G.E"))
return w},
fjm:function fjm(){},
hMU(d){switch(d){case"blackjack_vegas":return D.dow
case"roulette_euro":return D.dog
case"slots_jackpot":return D.don
case"poker_texas":return D.doq
case"chess_royale":return D.doh
case"connect_four_pro":return D.doi
case"domino_block":return D.dok
case"plinko_prizes":return D.dos
case"spin_wheel":return D.dop
case"baccarat_punto":return D.doj
case"craps_table":return D.dor
case"casino_war":return D.dol
case"bingo_live":return D.doo
case"solitaire_klondike":return D.dov
case"backgammon_pro":return D.dof
case"billiards_snooker":return D.dot
case"profit_solve":return D.dou
default:return D.dom}},
fmW(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=A.m(8)
v=A.H(B.aK,B.r,1.5)
u=A.a([new A.ab(0,B.G,B.x.j(0.35),B.e9,6)],x.V)
return A.p(p,A.au(A.V(B.m1,B.c.j(0.5),p,p,p,23.400000000000002),p,p,p),B.h,p,p,new A.o(p,p,v,w,u,D.bI8,B.n),p,74,p,p,p,p,p,52)}t=B.o.E(d,1,13)
s=t===1||t>=10||B.o.F(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][B.o.F(t,4)]
q=s?B.bO:B.M
w=A.m(8)
v=A.H(B.aJ,B.r,1)
u=A.a([new A.ab(0,B.G,B.x.j(0.28),B.e9,6)],x.V)
return A.p(p,A.v(A.a([new A.C(D.bl5,A.d(D.ceZ[t-1]+"\n"+r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,B.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),B.b8,A.au(A.d(r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),B.b8],x.p),B.F,p,B.e,B.j,0,B.p),B.h,p,p,new A.o(B.hO,p,v,w,u,p,B.n),p,74,p,p,p,p,p,52)},
hNY(d,e){var w,v=null,u=A.m(18),t=A.H(B.aK,B.r,3),s=A.a([new A.ab(0,B.G,B.aB.j(0.5),B.J,20)],x.V),r=A.U(e).k("J<1,hb>")
r=A.z(new A.J(e,new C.foT(),r),r.k("ai.E"))
w=x.p
return A.v(A.a([A.p(v,A.v(A.a([D.eTe,B.ab,A.B(r,B.m,v,B.b7,B.j,0,v,v)],w),B.m,v,B.e,B.j,0,B.p),B.h,v,v,new A.o(v,v,t,u,s,D.bIv,B.n),v,v,v,v,I.adb,v,v,v),B.ay,A.dq(B.aiP,D.eTN,d,A.bk(B.aK,v,v,v,B.du,v,Ag.VR,v,v,v,v,v))],w),B.m,v,B.e,B.j,0,B.p)},
oB:function oB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bmD:function bmD(d,e){this.b=d
this.a=e},
foT:function foT(){},
hmR(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e_(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=A.bY(8,0,!1,w)
u=A.bY(9,"",!1,p)
t=x.t
s=A.a([],t)
r=A.a([],t)
t=A.a([0,0,0],t)
q=J.e_(6,o)
for(v=0;v<6;++v)q[v]=A.bY(7,0,!1,w)
return new C.aop(A.T(p,x.z),n,u,s,r,t,q,new A.ap(B.as,$.av()))},
hG1(d,e,f,g,h){var w=new C.fb4(f,h)
switch(d){case"checkers_deluxe":return C.hwn(h,g,e,w)
case"tic_tac_go":return C.hER(h,g,e,w)
case"blackjack_vegas":return C.hvI(h,g,e,new C.faZ(w))
case"roulette_euro":return C.hDc(h,g,e,new C.fb_(w))
case"slots_jackpot":return C.hE0(h,g,e,new C.fb0(w))
case"billiards_snooker":return C.hC0(h,g,e,new C.fb1(w))
case"connect_four_pro":return C.hwM(h,g,e,w)
case"profit_solve":return C.hC3(h,g,e,new C.fb2(w))
default:return C.hwk(d,h,g,e,new C.fb3(w))}},
hwn(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vj,B.L,w,w),u=A.m(12),t=A.H(D.U_,B.r,8),s=A.a([new A.ab(0,B.G,B.x.j(0.4),B.J,16)],x.V)
return A.v(A.a([new A.C(B.fk,v,w),A.D(A.au(new A.fD(1,A.p(w,A.bu(A.m(6),A.i7(!0,w,w,B.z,D.euq,new C.eYM(d,e,f,g),64,w,B.dL,B.ak,!1),B.ao),B.h,w,w,new A.o(w,w,t,u,s,w,B.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hER(d,e,f,g){var w=null
return A.v(A.a([new A.C(B.fk,A.d(d.c,w,w,w,w,w,w,D.vj,B.L,w,w),w),A.D(A.au(new A.fD(1,A.ck(new C.f9V(d,e,f,g)),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hvI(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.vj,B.L,v,v),t=x.p,s=A.a([],t),r=d.CW,q=d.ch
if(r)B.d.v(s,new A.J(q,new C.eYd(),A.U(q).k("J<1,r>")))
else B.d.v(s,A.a([C.fmW(q[0],!1),B.bp,C.fmW(0,!0)],t))
s=A.B(s,B.m,v,B.b7,B.j,0,v,v)
r=A.d("Total: "+d.a15(d.ay),v,v,v,v,v,v,D.eOI,v,v,v)
q=d.ay
w=A.U(q).k("J<1,r>")
q=A.z(new A.J(q,new C.eYe(),w),w.k("ai.E"))
q=A.c9(B.fG,q,B.bx,6,6)
return A.v(A.a([new A.C(B.fk,u,v),D.eZx,B.ar,s,B.ay,D.f5l,r,B.ar,q,B.b8,A.B(A.a([A.D(A.bL(D.eUc,d.CW?v:new C.eYf(d,e,f,g),v),1),B.aa,A.D(A.bL(D.f7v,new C.eYg(d,e,f,g),v),1)],t),B.m,v,B.e,B.j,0,v,v)],t),B.m,v,B.e,B.j,0,B.p)},
hDc(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vj,B.L,w,w),u=d.cx,t=A.a([new A.ab(0,B.G,B.x.j(0.45),B.cs,16)],x.V)
t=A.a([new A.C(B.fk,v,w),A.p(w,A.b2(w,w,w,new C.bmD(u,w),B.at),B.h,w,w,new A.o(w,w,w,w,t,w,B.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new A.C(B.ky,A.d("Result: "+A.t(v),w,w,w,w,w,w,D.eDc,w,w,w),w))
t.push(B.ab)
t.push(A.c9(B.fG,A.ij(6,new C.f77(d,e,f,g),!0,x.l),B.bx,6,6))
return A.v(t,B.m,w,B.e,B.j,0,B.p)},
hE0(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vj,B.L,w,w),u=d.db,t=A.U(u).k("J<1,n>")
u=A.z(new A.J(u,new C.f91(),t),t.k("ai.E"))
return A.v(A.a([new A.C(B.fk,v,w),C.hNY(new C.f92(d,e,f,g),u)],x.p),B.m,w,B.e,B.j,0,B.p)},
hC0(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.vj,B.L,w,w),u=A.m(20),t=A.H(B.h6,B.r,12),s=x.V,r=A.a([new A.ab(0,B.G,B.x.j(0.45),B.dn,18)],s),q=x.p
return A.v(A.a([new A.C(B.fk,v,w),A.D(A.p(w,new A.am(B.W,w,B.a9,B.q,A.a([A.an(w,A.p(w,w,B.h,w,w,D.aS3,w,18,w,w,w,w,w,18),w,w,24,w,24,w),A.an(28,A.p(w,w,B.h,w,w,B.a7j,w,14,w,w,w,w,w,14),w,w,w,32,w,w),A.au(A.eu(B.A,d.dx,A.p(w,w,B.h,w,w,new A.o(B.aK,w,w,A.m(2),A.a([new A.ab(0,B.G,B.x.j(0.3),B.J,4)],s),w,B.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),B.h,w,w,new A.o(w,w,t,u,r,D.dW6,B.n),w,w,w,B.eV,w,w,w,w),1),A.mg(B.bm,w,w,1,0,new C.f5S(d,f),d.dy),A.bL(D.eYG,new C.f5T(d,e,g,f),w)],q),B.m,w,B.e,B.j,0,B.p)},
hwM(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.vj,B.L,v,v),t=x.l,s=J.e_(7,t)
for(w=0;w<7;++w)s[w]=new A.bH(1,B.bo,A.aH(v,A.v(A.ij(6,new C.eZd(d,w),!0,t),B.m,v,B.ma,B.j,0,B.p),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eZe(d,w,e,f,g),v,v,v,v,v,v,!1,B.ae),v)
return A.v(A.a([new A.C(B.fk,u,v),A.D(A.au(new A.fD(1.1666666666666667,A.B(s,B.dH,v,B.e,B.j,0,v,v),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
hC3(d,e,f,g){var w=null
return A.v(A.a([new A.C(B.fk,A.d(d.c,w,w,w,w,w,w,D.vj,B.L,w,w),w),A.d(""+d.a+"/"+d.b,w,w,w,w,w,w,B.kk,w,w,w),A.d(d.fy,w,w,w,w,w,w,D.aKT,B.L,w,w),A.aK(w,B.U,!1,w,!0,B.q,w,A.aL(),d.id,w,w,w,w,w,2,D.bET,B.z,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,B.dN,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.f64(d,e,g,f),w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,B.di,!0,B.a5,w,B.am,w,w,w,w),A.bL(D.eXn,new C.f65(d,e,g,f),w)],x.p),B.m,w,B.e,B.j,0,B.p)},
hwk(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gjB(),k=e.d
k=k==null?n:k.c
w=C.hMU(d)
v=D.ayz.h(0,d)
if(v==null)v=d
m=A.d(m,n,n,n,n,n,n,B.mY,B.L,n,n)
u=A.m(22)
t=w.a
s=w.b
r=A.H(s.j(0.5),B.r,2)
q=A.a([new A.ab(0,B.G,w.c.j(0.35),B.eQ,24)],x.V)
p=A.d(w.e,n,n,n,n,n,n,W.R2,n,n,n)
o=A.d(v,n,n,n,n,n,n,B.ov,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+A.t(k)+" at the table"
k=x.p
q=A.D(A.au(A.p(n,A.v(A.a([p,B.T,o,B.P,A.d(l,n,n,n,n,n,n,A.l(n,n,B.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),B.L,n,n),B.d3,A.V(w.f,s.j(0.85),n,n,n,48)],k),B.m,n,B.b7,B.j,0,B.p),B.h,n,n,new A.o(n,n,r,u,q,new A.a3(B.aX,B.b1,B.w,t,n,n),B.n),n,n,n,B.eV,B.a8,n,n,1/0),n,n,n),1)
return A.v(A.a([m,B.ab,q,B.P,new A.a5(1/0,n,A.bL(D.f6H,new C.eYG(f,e,g,h),A.bk(s,n,n,n,B.d.gL(t).j2()>0.4?B.x:B.c,n,B.cc,n,n,n,n,n)),n)],k),B.m,n,B.e,B.j,0,B.p)},
Dt:function Dt(d,e){this.a=d
this.b=e},
aop:function aop(d,e,f,g,h,i,j,k){var _=this
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
c8q:function c8q(){},
c8r:function c8r(){},
c8p:function c8p(){},
c8s:function c8s(){},
c8o:function c8o(){},
c8u:function c8u(){},
c8v:function c8v(){},
c8n:function c8n(d){this.a=d},
c8t:function c8t(){},
c8m:function c8m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fb4:function fb4(d,e){this.a=d
this.b=e},
faZ:function faZ(d){this.a=d},
fb_:function fb_(d){this.a=d},
fb0:function fb0(d){this.a=d},
fb1:function fb1(d){this.a=d},
fb2:function fb2(d){this.a=d},
fb3:function fb3(d){this.a=d},
eYM:function eYM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eYL:function eYL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f9V:function f9V(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9U:function f9U(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f9T:function f9T(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eYd:function eYd(){},
eYe:function eYe(){},
eYf:function eYf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eYg:function eYg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f77:function f77(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f76:function f76(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f91:function f91(){},
f92:function f92(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f5S:function f5S(d,e){this.a=d
this.b=e},
f5T:function f5T(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZe:function eZe(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eZd:function eZd(d,e){this.a=d
this.b=e},
f64:function f64(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f65:function f65(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eYG:function eYG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hIL(d){var w,v=A.U(d).k("a4<1>")
v=A.oL(new A.a4(d,new C.feY(),v),120,v.k("G.E"))
w=A.cz(v,new C.feZ(),A.a2(v).k("G.E"),x.N).aF(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
feY:function feY(){},
feZ:function feZ(){},
af7(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
api:function api(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aBJ:function aBJ(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
erc:function erc(){},
aJv:function aJv(){},
hkR(){var w=$.H6
if(w<=0)return;--w
$.H6=w
if(w===0){w=$.fS1
if(w!=null)w.$0()}},
c3W(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
an4(d){var w=0,v=A.j(x.H),u,t
var $async$an4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.fCg.K(0,t)
w=4
return A.b(A.ax(),$async$an4)
case 4:w=3
return A.b(f.aq("Bool","ngmy_game_free_play_used_"+B.a.i(t.toLowerCase()),!0),$async$an4)
case 3:case 1:return A.h(u,v)}})
return A.i($async$an4,v)},
an3(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$an3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(C.c3W(d)){u=!0
w=1
break}t=B.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.fCg.t(0,t)){u=!1
w=1
break}w=3
return A.b(A.ax(),$async$an3)
case 3:s=f
r=B.a.i(t.toLowerCase())
r=A.k6(J.q(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$an3,v)},
Tt(){var w=0,v=A.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Tt=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ax(),$async$Tt)
case 7:r=e
q=A.aS(J.q(r.a,"ngmy_helper_ai_usage_v1"))
if(q==null||B.a.i(q).length===0){u=A.T(x.N,x.z)
w=1
break}p=B.Q.aD(0,q,null)
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
return A.i($async$Tt,v)},
aXd(d){return C.hl3(d)},
hl3(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aXd=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.ax(),$async$aXd)
case 6:s=f
w=7
return A.b(s.aq("String","ngmy_helper_ai_usage_v1",B.Q.al(d,null)),$async$aXd)
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
return A.i($async$aXd,v)},
aXb(d,e){var w,v,u,t,s=J.q(d,B.a.i(e.toLowerCase()))
if(!x.f.b(s))return new A.abN(0,new A.Q(Date.now(),0,!1))
w=J.a8(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=A.bh(u==null?"":u)
if(t==null)t=new A.Q(Date.now(),0,!1)
return new A.abN(typeof v=="number"?B.o.E(B.k.N(v),0,999999):0,t)},
aXc(d,e){if(B.o.ak(e.bw(d.b).a,36e8)>=24)return new A.abN(0,e)
return d},
c4s(d,e){var w=0,v=A.j(x.S),u,t,s
var $async$c4s=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return A.b(C.Tt(),$async$c4s)
case 3:t=g
s=Date.now()
u=B.o.E(e-C.aXc(C.aXb(t,d),new A.Q(s,0,!1)).a,0,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c4s,v)},
c4t(d,e){var w=0,v=A.j(x.cJ),u,t,s,r
var $async$c4t=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return A.b(C.Tt(),$async$c4t)
case 3:t=g
s=Date.now()
r=C.aXc(C.aXb(t,d),new A.Q(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bN(864e8)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c4t,v)},
hl4(d){var w,v,u,t=d.a,s=B.o.ak(t,1e6)
if(s<=0)return"0s"
w=B.o.ak(t,36e8)
v=B.o.ak(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+B.a.aS(B.o.u(v),2,"0")+"m "+B.a.aS(B.o.u(u),2,"0")+"s"
if(v>0)return""+v+"m "+B.a.aS(B.o.u(u),2,"0")+"s"
return""+u+"s"},
aXe(d){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aXe=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return A.b(C.Tt(),$async$aXe)
case 3:t=p.aXc(o.aXb(f,d),new A.Q(Date.now(),0,!1))
w=4
return A.b(A.ax(),$async$aXe)
case 4:s=f
r=B.a.i(d.toLowerCase())
q=t.b.a5().ab()
u=A.k6(J.q(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aXe,v)},
anq(d){var w=0,v=A.j(x.H),u,t,s,r
var $async$anq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return A.b(C.Tt(),$async$anq)
case 3:t=s.aXc(r.aXb(f,d),new A.Q(Date.now(),0,!1))
w=5
return A.b(A.ax(),$async$anq)
case 5:w=4
return A.b(f.aq("Bool","ngmy_helper_3left_"+B.a.i(d.toLowerCase())+"_"+t.b.a5().ab(),!0),$async$anq)
case 4:case 1:return A.h(u,v)}})
return A.i($async$anq,v)},
anr(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$anr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=B.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return A.b(C.Tt(),$async$anr)
case 3:s=g
r=Date.now()
q=C.aXc(C.aXb(s,d),new A.Q(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aE(s,t,A.E(["count",r+1,"windowStart",q.b.a5().ab()],x.N,x.K))
w=4
return A.b(C.aXd(s),$async$anr)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anr,v)},
aeK(d,e,a0){var w=0,v=A.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aeK=A.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new A.f7("")
if(!d.d){p=!0
if(!C.h4X(a0))if(!C.h4W(a0)){p=A.ae("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.h4X(a0)?3:4
break
case 3:o=C.hMz(a0)
w=o!=null?5:6
break
case 5:w=7
return A.b(C.bY3(e,o),$async$aeK)
case 7:n=a2
p=J.a8(n)
if(p.gci(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.fQu(o)+":\n"
m.a+=l
for(p=p.gah(n);p.C();){m=p.gT(p)
l=h
k="- "+m.gTB()+"\n"
l.a+=k
m=m.f
if(m!=null&&B.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=A.ae("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return A.b(A.Qo("text/plain"),$async$aeK)
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
case 13:case 9:w=C.h4W(a0)?15:16
break
case 15:p=h
f=C
w=17
return A.b(C.a5l(e),$async$aeK)
case 17:m=f.fS8(a2)+"\n"
p.a+=m
case 16:p=A.ae("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return A.b(C.Sx(e),$async$aeK)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.ct(i)){p=h
m=C.fQv(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=B.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeK,v)},
hmo(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.ae("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.ae("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
c71(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$c71=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=A.fSN(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.eV("ngmy_local_growth_income_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bE),$async$c71)
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
return A.i($async$c71,v)},
ao6(d){var w=0,v=A.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$ao6=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=B.a.i(d)
if(J.aa(k)===0){u=null
w=1
break}t=4
w=7
return A.b(A.eV("ngmy_local_growth_income_stash_v1_"+B.a.i(k),null,!1,B.bE),$async$ao6)
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
u=new A.aD6(m,p,n)
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
return A.i($async$ao6,v)},
aYh(d){var w=0,v=A.j(x.bY),u,t,s,r,q
var $async$aYh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
w=C.hmo(q)?3:4
break
case 3:w=5
return A.b(C.c71(q),$async$aYh)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.ao6(t)
w=1
break
case 4:if(B.a.a_(q,"NGMYLOCALSYNC1|")){u=C.ao6(B.a.i(B.a.aY(q,15)))
w=1
break}w=B.a.a_(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return A.b(C.ao6(B.a.i(B.a.aY(q,15))),$async$aYh)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new A.aD6(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYh,v)},
fT0(d){var w=d.bK
if(w>=0)return w
return 1},
aeV(d,e,f){var w=0,v=A.j(x.H),u,t
var $async$aeV=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return A.b(A.aN0(d,e),$async$aeV)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return A.b(A.Fp(d,null,null,!1,!0,""),$async$aeV)
case 5:w=4
return A.b(t.$1(h),$async$aeV)
case 4:case 1:return A.h(u,v)}})
return A.i($async$aeV,v)},
hLt(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=B.a.i(a2)
if(a1.length===0)return B.i6
w=a1.toLowerCase()
v=A.ae("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=A.ae("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cz(w)
if(!u&&t==null)return B.i6
s=new A.Q(Date.now(),0,!1)
r=A.dc()
q=A.dc()
p=C.hBg(w)
if(p!=null){v=p.a
r.b=s.bN(v)
q.b=C.h06(a1,w)
if(J.y(q.b9(),"Wake up")&&B.o.ak(v,e)<=180)q.b="Reminder \u2014 "+B.o.ak(v,e)+" min"}else{if(t!=null){v=A.ae("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=B.a.e1(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.h07(v[2],v[4],v[3])
o=v[3]
m=A.c4(o==null?"":o,null)
if(m==null)m=0
l=A.bW(A.bw(s),A.bB(s),A.bO(s),0,0,0,0,0)
if(B.a.t(w,d))l=l.bN(a0)
r.b=A.bW(A.bw(l),A.bB(l),A.bO(l),n,m,0,0,0).bN(-36e8)
if(r.b9().cY(s.bN(e)))r.b=J.cb(r.b9(),B.nq)
v=C.hFk(v[1])
k=B.o.F(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+B.a.aS(B.o.u(m),2,"0")+" "+j)}else{l=A.bW(A.bw(s),A.bB(s),A.bO(s),0,0,0,0,0)
v=B.a.t(w,d)
if(v)l=l.bN(a0)
i=A.ae("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cz(w)
if(i!=null){o=i.b
h=C.h07(o[1],o[3],o[2])
o=o[2]
g=A.c4(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=A.bW(A.bw(l),A.bB(l),A.bO(l),h,g,0,0,0)
r.b=f.cY(s.bN(3e7))&&!v?f.bN(a0):f
q.b=C.h06(a1,w)}}v=x.N
return A.a([new A.ke("alarm",A.E(["title",q.b9(),"start",r.b9().ab(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
hBg(d){var w,v,u,t,s,r,q=[A.ae("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.ae("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.ae("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),A.ae("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
for(w=0;w<4;++w){v=q[w].cz(d)
if(v==null)continue
u=v.b
t=u[1]
s=A.c4(t==null?"":t,null)
if(s==null||s<=0)continue
r=u[2]
if(r==null)r="minute"
if(B.a.a_(r,"sec"))return new A.b8(1e6*B.o.E(s,5,86400))
if(B.a.a_(r,"hour")||B.a.a_(r,"hr"))return new A.b8(36e8*B.o.E(s,1,168))
return new A.b8(6e7*B.o.E(s,1,10080))}return null},
hFk(d){var w=d==null?"work":d,v=w.toLowerCase()
if(B.a.t(v,"meeting")||B.a.t(v,"appointment"))return"Meeting"
if(B.a.t(v,"class")||B.a.t(v,"school"))return"Class"
if(B.a.t(v,"shift"))return"Shift"
return"Work"},
h07(d,e,f){var w,v=A.c4(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return B.o.E(w==null&&v>=1&&v<=7?v+12:v,0,23)},
h06(d,e){var w,v,u,t
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
hmK(d){var w,v,u,t,s=J.a8(d)
if(s.gai(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.k5(d,80),v=w.$ti,w=new A.bV(w,w.gJ(0),v.k("bV<ai.E>")),v=v.k("ai.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gJ(d)>80?u+("\u2026 and "+(s.gJ(d)-80)+" more\n"):u
return B.a.i(s.charCodeAt(0)==0?s:s)}},D,H,Ac,I,F,Ad,V,G,W,Ae,Af,X,Ag,Ah,Ai,Aj,Y,Z,K,Ak
J=c[1]
A=c[0]
B=c[2]
L=c[31]
Q=c[159]
A_=c[170]
E=c[151]
M=c[161]
A0=c[124]
N=c[93]
A1=c[157]
R=c[34]
O=c[71]
A2=c[78]
S=c[77]
A3=c[79]
P=c[125]
A4=c[162]
T=c[153]
A5=c[165]
A6=c[163]
A7=c[164]
A8=c[160]
A9=c[156]
Aa=c[63]
U=c[141]
Ab=c[142]
C=a.updateHolder(c[5],C)
D=c[150]
H=c[25]
Ac=c[62]
I=c[155]
F=c[92]
Ad=c[166]
V=c[26]
G=c[154]
W=c[104]
Ae=c[152]
Af=c[169]
X=c[158]
Ag=c[171]
Ah=c[116]
Ai=c[168]
Aj=c[99]
Y=c[70]
Z=c[55]
K=c[53]
Ak=c[167]
C.bnK.prototype={
nX(d,e){return this.a.$2(d,e)}}
C.E2.prototype={
S(){return new C.aFa(this.$ti.k("aFa<E2.T,E2.S>"))}}
C.aFa.prototype={
Z(){var w,v,u=this
u.a0()
w=u.a
v=w.f
w=new A.hu(B.DA,v,null,null,w.$ti.k("hu<1>"))
u.e=w
u.U7()},
bq(d){var w,v=this
v.bC(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aJz()
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hu(B.DA,w.b,w.c,w.d,w.$ti)}v.U7()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&A.c()
return v.mx(d,w)},
p(){this.aJz()
this.a2()},
U7(){var w,v=this
v.d=v.a.c.l0(new C.eMM(v),new C.eMN(v),new C.eMO(v))
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hu(B.Uw,w.b,w.c,w.d,w.$ti)},
aJz(){var w=this.d
if(w!=null){w.aa(0)
this.d=null}}}
C.asX.prototype={
mx(d,e){return this.e.$2(d,e)}}
C.aiH.prototype={
S(){return C.htg()},
bn(){return this.r.$0()}}
C.qc.prototype={}
C.axu.prototype={
aai(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aai=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.fRA(r)
if(r.x==null||r.c4.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.fRC(s),$async$aai)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aai,v)},
Vt(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ao4(t.a.c),$async$Vt)
case 3:if(e!=null&&t.c!=null)t.a.bn()
r=!C.c3W(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return A.b(C.an3(t.a.c),$async$Vt)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.n(new C.d3g(t,s))
if(!s)t.aai()
case 1:return A.h(u,v)}})
return A.i($async$Vt,v)},
a9U(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a9U=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.byG(),$async$a9U)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.d3r(t,s))
case 1:return A.h(u,v)}})
return A.i($async$a9U,v)},
Z(){var w,v,u=this
u.boF()
$.rL=$.rL+1
w=u.a
$.byK=w.c.a
w=w.d.b4
v=A.U(w).k("J<1,a1<n,@>>")
w=A.z(new A.J(w,new C.d3J(),v),v.k("ai.E"))
u.f=w
u.a9U()
u.Ie()
u.Vt()
u.e=A.dD(B.nm,new C.d3K(u))},
Ie(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ie=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:C.aeW(t.a.d.b4)
w=3
return A.b(C.fp9(t.a.d.b4),$async$Ie)
case 3:s=e
if(t.c==null){w=1
break}C.aeW(t.a.d.b4)
if(s!=null)t.n(new C.d3z(t,s))
else t.n(new C.d3A(t))
case 1:return A.h(u,v)}})
return A.i($async$Ie,v)},
p(){C.aWY()
var w=this.e
if(w!=null)w.aa(0)
this.boE()},
aeM(d,e,f){return this.ckc(d,e,f)},
ckc(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$aeM=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(e.toLowerCase())
p=J.q(t.r,q)
o=t.a
n=o.d.b4
o=o.c
s=d.b
C.hFn(n,o.a,o.c,d.a,s,f,e,p)
t.a.bn()
w=3
return A.b(C.aeX(t.a.d.b4),$async$aeM)
case 3:if(t.c==null){w=1
break}t.n(new C.d3C(t))
r=f===1?"1 game":""+f+" games"
t.c.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$aeM,v)},
H9(d,e){return this.c5V(d,e)},
bVA(d){return this.H9(d,null)},
c5V(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$H9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&B.a.i(e).length!==0){s=C.tn(t.a.d.b4,B.a.i(e))
if(s!=null&&C.aLW(s)<=0){t.c.H(x.q).f.P(D.aIO)
w=1
break}}w=5
return A.b(C.an3(t.a.c),$async$H9)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return A.b(C.fCh(r,C.fjx(q.c),p),$async$H9)
case 6:w=1
break
case 4:o=new C.d3u(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
A.hm(r,new C.aAi(p,q.d,q.f,q.r,new C.d3v(o),q.w,C.fjx(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
A.hm(q,new C.aiG(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.d3w(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$H9,v)},
bT8(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.aeW(i.a.d.b4)
C.aeW(i.f)
w=C.hQ4(i.a.c.a,i.f)
v=C.hFm(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return B.bF
if(!u){t=B.d.gL(w)
u=A.m(14)
s=A.H(B.b9,B.r,1)
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
return A.p(h,A.v(A.a([D.f1w,A.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,B.oA,h,h,h),B.P,A.B(A.a([A.D(A.dV(A2.Rt,new C.d3m(i,t),h),1),B.aa,A.D(A.bL(D.f9Q,new C.d3n(i,t),h),1)],n),B.m,h,B.e,B.j,0,h,h)],n),B.F,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(B.aB,h,s,u,h,h,B.n),h,h,h,B.e0,B.bl,h,h,1/0)}m=B.d.gL(v)
l=B.d.dI(i.y,new C.d3o(m),new C.d3p(i))
k=C.fIc(m,i.a.c.a,i.r)
j=C.aLW(m)
u=A.m(14)
s=A.H(B.b9,B.r,1)
r=j===1?"":"s"
return A.p(h,A.v(A.a([D.eVi,A.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,B.oA,h,h,h),B.av,A.d(C.hHX(m,i.a.c.a),h,h,h,h,h,h,B.a4s,h,h,h),B.P,A.bL(D.f0Q,new C.d3q(i,l,m),h)],x.p),B.F,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(B.bk,h,s,u,h,h,B.n),h,h,h,B.e0,B.bl,h,h,1/0)},
bK_(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.eqy.t(0,d.a),l=A.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=A.a2S(w[v])
t=B.k.E(u.d*0.58,0.12,0.3)
l.push(new A.ws(u.a,u.b,B.k.E(u.c*0.92,0,0.9),t).iu())}s=B.d.gL(w)
w=A.m(16)
t=A.m(18)
r=A.H(A.X(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1)
q=x.V
p=A.a([new A.ab(0,B.G,A.X(89,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),B.j8,12)],q)
o=x.p
o=A.a([new A.a5(100,n,A.au(A.V(d.e,B.c,n,n,n,64),n,n,n),n),A.D(new A.C(B.kx,A.v(A.a([A.B(A.a([A.D(A.d(d.b,n,n,n,n,n,n,B.la,n,n,n),1)],o),B.m,n,B.e,B.j,0,n,n),B.av,A.d(d.c,n,2,B.a2,n,n,n,B.nM,n,n,n)],o),B.F,n,B.b7,B.j,0,B.p),n),1)],o)
if(m)o.push(A.aF(n,n,n,n,D.bCy,n,n,n,new C.d3i(this,d),n,n,n,n,"Invite player",n))
o.push(new A.C(B.JU,A.p(n,D.bAL,B.h,n,n,new A.o(A.X(71,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),n,A.H(A.X(B.k.U(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1.6),n,A.a([new A.ab(0,B.G,A.X(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,10)],q),n,B.a6),n,44,n,n,n,n,n,44),n))
return A.aI(!1,w,!0,A.p(n,A.B(o,B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(n,n,r,t,p,new A.a3(B.ax,B.aC,B.w,l,n,n),B.n),n,92,n,B.e0,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.d3j(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.M(d).ax.a===B.H,l=A.M(d).ax.a===B.H?B.iZ:B.oU,k=m?B.hx.j(0.94):B.c.j(0.94),j=m?B.c:B.M,i=m?B.hx:B.c,h=m?B.c.j(0.08):B.aJ,g=m?B.c:B.M,f=m?B.bj:B.bN
if(!o.x)return C.aMt(n,l,A.au(A.mq(n,m?B.c:B.bm,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fjx(o.a.c)
return new C.LY(o.a.w,w,!0,o.gaOj(),n)}w=A.aG(d,B.e3,x.w).w
v=A.m(12)
u=A.H(h,B.r,1)
t=x.V
s=A.a([],t)
if(!m)s.push(new A.ab(0,B.G,B.x.j(0.04),B.cF,12))
r=x.p
s=A.a([A.p(n,A.B(A.a([A.D(A.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,A.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,B.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new A.tU(new C.d3G(o,f,g),n,$.aNP(),n)],r),B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(i,n,u,v,s,n,B.n),n,n,n,n,B.Vl,n,n,1/0),B.T,o.bT8()],r)
v=o.y
B.d.v(s,new A.J(v,o.gbJZ(),A.U(v).k("J<1,r>")))
w=A.ci(A.v(s,B.m,n,B.e,B.j,0,B.p),B.q,n,B.z,n,new A.N(14,w.r.b+78,14,24),n,n,B.ak)
s=A.m(35)
v=A.a([new A.ab(0,B.G,B.x.j(m?0.28:0.08),B.j8,15)],t)
u=A.H(m?B.c.j(0.1):B.aJ,B.r,1)
t=A.aF(n,n,n,n,A.V(B.er,j,n,n,n,18),n,n,n,o.gaOj(),n,n,n,n,n,n)
q=A.D(A.au(A.d("GAME CENTER",n,n,n,n,n,n,A.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,B.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=A.m(20)
return A.nX(!0,C.aMt(n,l,new A.am(B.W,n,B.a9,B.h,A.a([w,A.an(n,A.bq(!1,new A.C(B.K5,A.p(n,A.B(A.a([t,q,new A.C(B.kx,A.p(n,A.B(A.a([D.by4,B.eA,C.anV(new C.d3H(o),B.mY,o.a.c.a)],r),B.m,n,B.e,B.R,0,n,n),B.h,n,n,new A.o(B.cQ,n,n,p,n,n,B.n),n,n,n,n,B.h8,n,n,n),n)],r),B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(k,n,u,s,v,n,B.n),n,60,n,n,B.m_,n,n,n),n),!0,!1,B.ah,!0,!0),n,n,0,0,0,n)],r),n)),new C.d3I(o),x.K)},
aOk(){var w,v
this.a.bn()
w=this.d
v=w>0?A.E(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
A.iG(w,v)}}
C.aAi.prototype={
S(){return new C.bfX()},
hk(d){return this.e.$1(d)},
bn(){return this.f.$0()},
aDi(){return this.r.$0()}}
C.bfX.prototype={
Z(){this.bpE()
this.d=A.SU(this.a.d.bf)
$.rL=$.rL+1},
p(){C.aWY()
this.bpD()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&A.c()
return new C.amy(v,new C.dGw(w),u,new C.dGx(w),new C.dGy(w,d),new C.dGz(w),null)}}
C.aiG.prototype={
S(){return new C.axt(new A.ap(B.as,$.av()))},
hk(d){return this.x.$1(d)},
bn(){return this.y.$0()},
aDi(){return this.z.$0()}}
C.axt.prototype={
Z(){this.boD()
this.a.toString
$.rL=$.rL+1},
p(){C.aWY()
var w=this.d
w.R$=$.av()
w.O$=0
this.boC()},
a_V(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a_V=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.M3()
w=5
return A.b(C.an3(t.a.c),$async$a_V)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return A.b(C.fCh(s,C.fjx(r.c),q),$async$a_V)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&B.a.i(r).length!==0){p=C.tn(s.d.b4,B.a.i(r))
if(p!=null&&C.aLW(p)<=0){t.c.H(x.q).f.P(D.aIO)
w=1
break}}o=A.d9(B.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.H(x.q).f.P(D.exs)
w=1
break}m=A.JA(t.a.c.a,new C.d3a(t))
if(m+0.001<n){t.c.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Not enough balance for this bet \u2014 you have $"+A.dx(m)+", the bet is $"+A.dx(n)+".",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aDi()
s=t.a
s.toString
r=B.o.u(1000*Date.now())
q=t.a
s.hk(new A.d_(r,q.c.a,n,B.ju,B.f7,"Game bet: "+q.f,null,null,B.ch,new A.Q(Date.now(),0,!1)))
t.a.bn()
if(D.eqq.t(0,t.a.e)){s=t.c
s.toString
r=t.a
A.hm(s,new C.alB(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
A.hm(s,new C.aiI(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$a_V,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=A.aF(o,o,o,o,B.F0,o,o,o,new C.d3d(d),o,o,o,o,o,o),k=p.a,j=A.d(k.f,o,o,o,o,o,o,B.cr,o,o,o),i=A.m(12),h=x.p
j=A.eA(A.a([A.p(o,A.au(C.anV(new C.d3e(p),B.kk,k.c.a),o,o,o),B.h,o,o,new A.o(B.cQ,o,o,i,o,o,B.n),o,o,o,D.bfy,B.ir,o,o,o)],h),o,o,!0,!0,D.Uu,o,1,o,o,o,!1,o,!1,B.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=A.m(16)
i=A.H(B.b9,B.r,1)
k=A.V(D.bp6,D.bag,o,o,o,28)
w=p.a
v=A.d(w.f,o,o,o,o,o,o,B.ov,o,o,o)
w=A.d(w.r,o,o,o,o,o,o,B.oA,o,o,o)
u=A.X(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.m(12)
s=x.a3
s=A.z(new A.J(A.a([2,5,10,25],x.t),new C.d3f(p),s),s.k("ai.E"))
s=A.B(s,B.m,o,B.e,B.j,0,o,o)
r=A.X(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.p(o,A.v(A.a([D.fbj,B.T,s,B.P,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.d,o,o,o,o,o,2,A.bn(o,new A.b3(4,A.m(10),B.X),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,B.lb,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dN,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,B.di,!0,B.a5,o,B.am,o,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(u,o,o,t,o,o,B.n),o,o,o,o,B.bS,o,o,1/0)
u=A.m(12)
r=A.H(A.X(102,B.a0B.l()>>>16&255,B.a0B.l()>>>8&255,B.a0B.l()&255),B.r,1)
s=A.X(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
q=A.m(10)
q=A.p(o,A.v(A.a([D.eUG,A.d("+ $"+B.k.a9(n*0.46,2),o,o,o,o,o,o,D.eLy,o,o,o),A.d("(46% return on $"+B.k.a9(p.e,2)+" bet)",o,o,o,o,o,o,B.nM,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(s,o,o,q,o,o,B.n),o,o,o,o,B.ck,o,o,1/0)
s=A.X(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
n=A.m(10)
u=A.p(o,A.v(A.a([D.f1M,B.P,q,B.P,A.p(o,A.v(A.a([D.eQ7,A.d("$"+B.k.a9(m,2),o,o,o,o,o,o,D.eBG,o,o,o),A.d("8 pairs \xd7 $"+B.k.a9(m,2)+" each",o,o,o,o,o,o,B.nM,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(s,o,o,n,o,o,B.n),o,o,o,o,B.ck,o,o,1/0)],h),B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(D.b6Z,o,r,u,o,o,B.n),o,o,o,o,B.bS,o,o,1/0)
r=A.fh(o,o,B.bm,o,o,o,o,o,o,B.c,o,B.fR,o,o,o,o,o,o,o,o)
return C.aMt(j,D.Uu,A.ci(A.p(o,A.v(A.a([k,B.av,v,B.bA,w,B.T,t,B.P,u,B.T,new A.a5(1/0,o,A.i5(A.d("Start Game ($"+B.k.a9(p.e,2)+")",o,o,o,o,o,o,B.ce,o,o,o),p.gcnY(),r),o)],h),B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(o,o,i,l,o,D.bHv,B.n),o,o,o,o,B.eN,o,o,1/0),B.q,o,B.z,o,E.acN,o,o,B.ak))}}
C.aiI.prototype={
S(){var w=x.s,v=x.t,u=x.S
return new C.axv(B.cB,new A.ap(B.as,$.av()),A.a([],w),A.a([],x.d4),A.a([],w),A.a([],w),A.a([],v),A.a([],v),A.a([],v),A.aZ(u),A.aZ(u),A.a([],v),A.a([],v),A.a([],v))},
hk(d){return this.y.$1(d)},
bn(){return this.z.$0()}}
C.axv.prototype={
ghr(){var w=this.a.Q
return w!=null&&B.a.i(w).length!==0},
qn(d){return this.bIj(d)},
bIj(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$qn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.z8()
r=t.MX()
w=s<=0?3:4
break
case 3:w=5
return A.b(t.a8n(d),$async$qn)
case 5:w=1
break
case 4:q=B.k.E(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return A.b(t.rW(d),$async$qn)
case 9:w=7
break
case 8:w=10
return A.b(t.Dj(q,s,r),$async$qn)
case 10:case 7:case 1:return A.h(u,v)}})
return A.i($async$qn,v)},
DU(d,e,f,g){return this.clP(d,e,f,g)},
clP(d,e,f,g){var w=0,v=A.j(x.H),u,t=this,s
var $async$DU=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return A.b(C.bzL(s,C.bzp(),C.fK3(),d,e,f,g),$async$DU)
case 3:case 1:return A.h(u,v)}})
return A.i($async$DU,v)},
z8(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.aYw(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&A.c()
return u+C.af7(t,s.e.a.a)
case"memory":return s.ghr()&&D.mg.t(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.auS()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bf
case"color":return s.b4
case"reflex":return s.Y
default:u=s.aZ
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
auS(){var w,v,u=this.x1
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
case"pattern":return C.fIf()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.aZ
if(w!=null)return w.b
return 1}},
bq(d){var w,v,u=this
u.bC(d)
if(u.f||u.c4)return
w=u.a
v=C.fjC(w.e,w.d.y2)
if(v!==C.fjC(d.e,d.d.y2)&&u.c!=null)u.n(new C.d52(u,v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.boH()
w=i.a
w.toString
$.rL=$.rL+1
i.Q=C.fjC(w.e,w.d.y2)
i.b0j()
i.a9E()
if(i.ghr()){i.c4=!0
i.cT="Connecting to match\u2026"
i.cf="Both players enter the room together \u2014 play starts at the same time."
i.Ni()
i.a9i()
i.bg=A.dD(B.fW,new C.d55(i))}if(B.d.t(D.NW,i.a.e)){w=i.ghr()
v=i.a
if(w){w=v.d.b4
v=v.Q
v.toString
u=C.tn(w,v)
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
k=B.a.i(J.k(t==null?"":t))}w=new C.aWW(!1,w,k.length===0||B.a.t(k,"@")?C.fIc(u,v,null):k,p,l,s)}else{w=w.c
w=C.fCl(w.c,w.a)}w=i.bH=w}else{w=v.c
w=i.bH=C.fCl(w.c,w.a)}v=C.hmR()
v.biK(i.a.e,i.d,w)
i.aZ=v
i.r=v.c
if(i.ghr()){w=i.a
v=w.d.b4
w=w.Q
w.toString
u=C.tn(v,w)
m=u==null?null:J.q(u,h)
if(x.f.b(m)){w=i.aZ
w.toString
w.b5j(i.a.e,A.a_(m,x.N,x.z),i.a.c.a)
w=i.aZ
i.r=w.c
if(w.e){if(w.r)j=D.Pj
else j=w.f===!0?D.pp:D.Gf
i.za(j)}}}i.b1=A.dD(B.np,new C.d56(i))
if(i.ghr())i.b8=A.dD(B.o6,new C.d57(i))}if(i.ghr()&&!B.d.t(D.NW,i.a.e))i.b8=A.dD(B.o6,new C.d58(i))
i.as=A.dD(B.h7,new C.d59(i))},
Ni(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ni=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tn(s.d.b4,q)
w=p!=null?3:4
break
case 3:w=5
return A.b(C.bxM(p,t.a.c.a),$async$Ni)
case 5:o=e
if(t.c!=null)t.n(new C.d4i(t,o))
w=1
break
case 4:w=6
return A.b(C.Jr(q,t.a.d.b4,!1),$async$Ni)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return A.b(C.bxM(n,t.a.c.a),$async$Ni)
case 7:o=e
if(t.c!=null)t.n(new C.d4j(t,o))
case 1:return A.h(u,v)}})
return A.i($async$Ni,v)},
afS(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$afS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.Jr(r,s.d.b4,!1),$async$afS)
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
t.aJn(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=B.k.N(j)
else{h=j==null?null:J.k(j)
i=A.c4(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)B.d.bm(t.fy,new C.d4M(t))
if(i!=null&&t.fr.length!==0){s=A.z(t.dy,x.S)
B.d.v(s,t.dy)
r=new A.eU()
r.dM(i)
B.d.fA(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.n(new C.d4N())}case 1:return A.h(u,v)}})
return A.i($async$afS,v)},
a9i(){var w=0,v=A.j(x.H),u=this
var $async$a9i=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Zh(!0),$async$a9i)
case 2:return A.h(null,v)}})
return A.i($async$a9i,v)},
Zh(d){return this.cbB(d)},
cbA(){return this.Zh(!1)},
cbB(b3){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$Zh=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghr()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
if(q.length===0){w=1
break}p=B.a.i(s.c.a.toLowerCase())
w=3
return A.b(C.Jr(q,s.d.b4,b3),$async$Zh)
case 3:o=b5
if(o==null)o=C.tn(t.a.d.b4,q)
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
j.m(0,"startAt",a4.a5().ab())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.m(0,"memorySeed",B.o.F(1000*Date.now(),2147483647))
j.m(0,"memoryMatched",A.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.m(0,"patternSeed",B.o.F(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.hMX(t.a.d.b4,q,j)
t.a.bn()}if(t.c==null){w=1
break}b0=t.bA
if(b0==null)b0="your opponent"
if(!a5){t.n(new C.d4y(b2,t,b0))
w=1
break}if(s==null){t.n(new C.d4z(t))
w=1
break}b1=new A.Q(Date.now(),0,!1)
if(b1.cY(s)){s=s.bw(b1).a
r=B.o.ak(s,1e6)
t.n(new C.d4A(b2,t,r+(B.o.F(B.o.ak(s,1000),1000)>0?1:0)))
w=1
break}if(t.c4){t.n(new C.d4B(b2,t))
b2=t.a.e
if(b2==="pattern")t.a6i()
else if(b2==="memory"){t.b0i()
if(t.c!=null)t.n(new C.d4C())}}b2=t.bg
if(b2!=null)b2.aa(0)
t.bg=null
case 1:return A.h(u,v)}})
return A.i($async$Zh,v)},
aKh(d){var w,v,u,t,s=this
if(d!=null){w=new A.eU()
w.dM(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e_(v,x.S)
for(t=0;t<v;++t)u[t]=w.aB(9)
s.ry=u
s.x1=0
s.to=-1},
aKg(){return this.aKh(null)},
a6i(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a6i=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ghr()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.c98()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return A.b(C.Jr(q,s.d.b4,!1),$async$a6i)
case 5:r=t.aXj(e)
case 4:if(t.c==null){w=1
break}t.aKh(r)
t.n(new C.d3L(t))
t.Cy()
case 1:return A.h(u,v)}})
return A.i($async$a6i,v)},
aXj(d){var w,v,u,t=null
if(d==null)return t
w=J.q(d,"sessionState")
if(!x.f.b(w))return t
v=J.q(w,"patternSeed")
if(typeof v=="number")return B.k.N(v)
u=v==null?t:J.k(v)
return A.c4(u==null?"":u,t)},
c98(){var w=this.a,v=w.Q
if(v==null)return null
return this.aXj(C.tn(w.d.b4,v))},
a9E(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a9E=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$a9E)
case 3:r=e
q=t.a
p=q.e
q=B.a.i(q.c.a.toLowerCase())
s=A.eY(J.q(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.n(new C.d4h(t,s))
case 1:return A.h(u,v)}})
return A.i($async$a9E,v)},
oo(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n
var $async$oo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$oo)
case 2:p=e
o=u.a
n=o.e
o=B.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bAd().length
else s=n==="typing"?50:105
if(n==="typing")r=B.o.F(u.at+5,s)
else{q=u.at
r=t?B.o.F(q+6,s):B.o.F(q+1,s)}w=3
return A.b(p.aq("Int","ngmy_game_"+n+"_"+o,r),$async$oo)
case 3:u.at=r
return A.h(null,v)}})
return A.i($async$oo,v)},
a09(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a09=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.aZ==null||t.f||t.aQ){w=1
break}if(t.c4){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.Jr(r,s.d.b4,!1),$async$a09)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.b4
s=s.Q
s.toString
p=C.tn(r,s)
s=p==null
if(!s){r=J.cA(p)
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
s.b5j(r.e,n,r.c.a)
r=t.aZ
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.Pj
else k=r.f===!0?D.pp:D.Gf
w=7
return A.b(t.za(k),$async$a09)
case 7:w=5
break
case 6:if(t.c!=null)t.n(new C.d4O())
case 5:case 1:return A.h(u,v)}})
return A.i($async$a09,v)},
adN(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$adN=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghr()||q.aZ==null||q.a.Q==null||q.aQ){w=1
break}q.aQ=!0
t=3
o=q.aZ
o.toString
p=o.cCM(q.a.e)
o=q.a
n=o.d.b4
o=o.Q
o.toString
w=6
return A.b(C.aMP(n,o,p),$async$adN)
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
return A.i($async$adN,v)},
za(d){return this.bPg(d)},
bPg(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$za=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(t.HO(s,s),$async$za)
case 9:w=4
break
case 6:w=10
return A.b(t.VP(s,s),$async$za)
case 10:w=4
break
case 7:w=11
return A.b(t.a8m(s,s),$async$za)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghr()?12:13
break
case 12:w=14
return A.b(t.Gt(),$async$za)
case 14:case 13:case 1:return A.h(u,v)}})
return A.i($async$za,v)},
Yg(d,e){return this.c3I(d,e)},
c3I(d,e){var w=0,v=A.j(x.H),u,t=this
var $async$Yg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=t.ghr()?3:5
break
case 3:w=6
return A.b(t.adN(),$async$Yg)
case 6:if(d===D.po){w=1
break}w=4
break
case 5:if(d===D.po){w=1
break}case 4:w=7
return A.b(t.za(d),$async$Yg)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Yg,v)},
a9y(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$a9y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tn(s.d.b4,q)
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
return A.b(C.aMP(t.a.d.b4,q,l),$async$a9y)
case 3:t.a.bn()
case 1:return A.h(u,v)}})
return A.i($async$a9y,v)},
Gt(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Gt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghr()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tn(s.d.b4,q)
if(p==null){w=1
break}o=J.q(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?A.a_(o,s,r):A.T(s,r)
n.m(0,"gameOver",!0)
C.fKt(t.a.d.b4,q,n)
C.hQd(t.a.d.b4,q)
w=3
return A.b(C.aeX(t.a.d.b4),$async$Gt)
case 3:t.a.bn()
case 1:return A.h(u,v)}})
return A.i($async$Gt,v)},
p(){var w,v=this
if(v.ghr()&&!v.f)v.a9y()
else if(!v.f)v.bVB()
C.aWY();++v.RG
w=v.as
if(w!=null)w.aa(0)
w=v.b1
if(w!=null)w.aa(0)
w=v.cx
if(w!=null)w.aa(0)
w=v.b8
if(w!=null)w.aa(0)
w=v.bg
if(w!=null)w.aa(0)
w=v.e
w.R$=$.av()
w.O$=0
v.boG()},
cqY(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&A.c()
v=v<=0||w.aZ==null}if(v)return
if(w.c4)return
v=w.aZ
v.toString
w.a.toString
if(v.a>=v.b){w.rW("Goal completed!")
return}v=++w.rx
if(v%5===0)w.n(new C.d4X())},
b0j(){var w,v,u,t,s,r=this
r.x=A.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e_(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b0i()
break
case"scramble":r.bf=0
r.b0k()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=B.o.F(r.at,50)
v=J.e_(5,x.N)
for(t=0;t<5;++t)v[t]=D.cYx[B.o.F(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bJ(0,B.c0)
break
case"math":r.y2=0
r.b0h()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b0l()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e_(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
B.d.fA(v,s)
if(!r.cdV()){w=J.e_(9,w)
for(u=0;u<9;++u)w[u]=u
B.d.fA(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
B.d.a7(w)
w.push(r.d.aB(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.OQ()
break
case"pattern":if(r.ghr()){r.ry=A.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aKg()
w=A.t(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Cy()}break
case"color":r.b4=0
r.b0c()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.Y=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b1p()
break
default:if(B.d.t(D.NW,w)){w=r.aZ
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
aYw(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
cdV(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return B.o.F(v,2)===0},
b0l(){var w,v,u,t,s,r=this,q=B.o.F(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e_(o,x.S)
for(w=0;w<o;w=v){v=w+1
n[w]=B.k.N(Math.pow(p,v))}u=B.k.N(Math.pow(p,o))
r.w=B.o.u(u)
r.aw=B.d.aF(n,", ")
q=r.w
t=x.s
s=A.a([B.o.u(u+p),B.o.u(u-p),B.o.u(u+p*2)],t)
t=A.a([q],t)
B.d.v(t,s)
B.d.fA(t,r.d)
r.x=t},
b0h(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bAd().length-6)u.at=0
w=$.bAd()
v=w[B.o.F(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b0k(){var w=this,v=w.w=D.cDY[B.o.F(w.at+w.bf,105)]
w.ax=C.hQu(v)
w.ay=A.bY(v.length,null,!1,x.T)
w.ch=A.a(w.ax.split(""),x.s)
w.e.bJ(0,B.c0)},
b1p(){var w=this,v=w.cx
if(v!=null)v.aa(0)
w.y=!1
w.z=null
w.cx=A.cP(A.dB(0,0,0,120+w.d.aB(280),0,0),new C.d4L(w))},
bPj(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.qn("Too early \u2014 paid for "+t.Y+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=B.o.ak(new A.Q(v,0,!1).bw(u).a,1000)}if(w<520){t.n(new C.d4f(t))
v=t.Y
if(v>=5){t.oo()
t.rW("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b1p()
t.n(new C.d4g())}}else t.qn("Too slow ("+w+"ms) \u2014 paid for "+t.Y+"/5.")},
cqg(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=B.d.bi(t.ay,new C.d4S())
if(u<0)return
t.n(new C.d4T(t,u,v,d))},
cqh(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.n(new C.d4U(u,d,v))},
bzL(){var w,v,u=this
if(u.f)return
if(B.d.ba(u.ay,new C.d3M())){u.c.H(x.q).f.P(D.exm)
return}w=B.d.fN(u.ay)
v=u.w
v===$&&A.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.n(new C.d3N(u))
if(u.ghr()&&D.mg.t(0,u.a.e))u.Zv()
if(u.bf>=5){u.oo()
if(u.ghr()&&D.mg.t(0,u.a.e))u.mu(!0)
else u.rW("All 5 words unscrambled!")}else{u.b0k()
u.r="Word "+(u.bf+1)+" of 5 \u2014 place letters in order"
u.n(new C.d3O())}}else u.qn("Wrong word \u2014 paid for "+u.bf+"/5.")},
b0c(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=B.o.F(w.at+w.b4*11,4),t=v[w.d.aB(4)]
w.aC=t
w.aA=v[u]
w.aL=[B.dC,B.ds,B.hH,B.qE][u]
w.w=t},
aJn(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=B.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a7(0)
w=h.id
w.a7(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=A.aZ(x.S)
for(s=J.jl(v),s=s.gah(s),r=x.j;s.C();){q=s.gT(s)
p=B.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aU(r.b(o)?o:B.cL),n=p===g;q.C();){m=q.gT(q)
l=typeof m=="number"?B.k.N(m):A.c4(J.k(m),null)
if(l==null)continue
t.K(0,l)
if(n)w.K(0,l)}}f.v(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aU(k);w.C();){m=w.gT(w)
l=typeof m=="number"?B.k.N(m):A.c4(J.k(m),null)
if(l!=null)f.K(0,l)}}h.k2=B.k.bt(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=A.aN(J.q(j,g))
i=f==null?null:B.k.N(f)
if(i!=null)h.fx=i}},
b0i(){var w,v,u,t,s,r,q,p=this
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
u=C.tn(v,w)
t=u==null?null:J.q(u,"sessionState")
w=x.N
v=x.z
s=x.f.b(t)?A.a_(t,w,v):A.T(w,v)
r=s.h(0,"memorySeed")
if(typeof r=="number")q=B.k.N(r)
else{w=r==null?null:J.k(r)
q=A.c4(w==null?"":w,null)}w=p.fr
if(q!=null){v=new A.eU()
v.dM(q)
B.d.fA(w,v)}else B.d.fA(w,p.d)
p.aJn(s)}else B.d.fA(p.fr,p.d)},
caX(d){var w,v,u,t=this
if(t.c4)return
if(t.f||t.k1||t.go.t(0,d)||B.d.t(t.fy,d))return
t.n(new C.d4r(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.n(new C.d4s(t,v,u))
if(t.ghr()&&D.mg.t(0,t.a.e))t.Zv()
if(t.go.a>=t.fr.length){t.oo()
if(t.ghr()&&D.mg.t(0,t.a.e))t.mu(!0)
else t.auV()}return}t.k1=!0
A.bN(D.bev,new C.d4t(t),x.c)},
b_G(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&A.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.n(new C.d4D(u))
if(u.y1>=5){u.oo()
u.rW("All 5 questions correct!")}else{u.b0l()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.n(new C.d4E())}}else u.qn(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.n(new C.d4F(u))
if(u.y2>=6){u.oo()
u.rW("All 6 math questions correct!")}else{u.b0h()
u.r="Question "+(u.y2+1)+" of 6"
u.n(new C.d4G())}}else{u.TW(u.y2+1)
u.qn(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.n(new C.d4H(u))
if(u.b4>=5){u.oo()
u.rW("All 5 color rounds correct!")}else{u.b0c()
u.r="Round "+(u.b4+1)+" of 5 \u2014 tap the COLOR of the text"
u.n(new C.d4I())}}else u.qn("Wrong color \u2014 paid for "+u.b4+"/5.")
return}if(v){u.oo()
u.auV()}else u.c.H(x.q).f.P(D.ey5)},
cqf(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=B.d.cP(q.k4,0)
v=B.o.ak(d,3)
u=B.o.F(d,3)
t=B.o.ak(w,3)
s=B.o.F(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.n(new C.d4R(q,d,w))
if(B.d.fN(q.k4)==="123456780"){q.oo()
q.auV()}}},
OQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$OQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.n(new C.d4u(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.d4v(t,q).$0()
t.c.e3()
w=6
return A.b(A.bN(B.kv,null,r),$async$OQ)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.d4w(t).$0()
t.c.e3()
w=7
return A.b(A.bN(B.jj,null,r),$async$OQ)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.n(new C.d4x(t))
case 1:return A.h(u,v)}})
return A.i($async$OQ,v)},
cqi(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.qn("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.n(new C.d4V(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.oo()
u.rW("Perfect Simon run!")
return}u.n(new C.d4W(u))
u.OQ()}},
Cy(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Cy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.n(new C.d3P(t))
s=x.H
w=3
return A.b(A.bN(B.ji,null,s),$async$Cy)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.d3Q(t,o).$0()
t.c.e3()
w=7
return A.b(A.bN(B.V0,null,s),$async$Cy)
case 7:if(t.c==null){w=1
break}new C.d3R(t).$0()
t.c.e3()
w=8
return A.b(A.bN(B.io,null,s),$async$Cy)
case 8:case 5:r.length===q||(0,A.K)(r),++p
w=4
break
case 6:if(t.c!=null)t.n(new C.d3S(t))
case 1:return A.h(u,v)}})
return A.i($async$Cy,v)},
TW(d){return this.buC(d)},
buC(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$TW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return A.b(A.ax(),$async$TW)
case 3:s=f
r=t.a
q=r.e
r=B.a.i(r.c.a.toLowerCase())
p=$.bAd().length
o=B.o.F(t.at+d,p)
w=4
return A.b(s.aq("Int","ngmy_game_"+q+"_"+r,o),$async$TW)
case 4:t.at=o
case 1:return A.h(u,v)}})
return A.i($async$TW,v)},
cqd(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.qn("Wrong tile \u2014 paid for "+v.auS()+"/"+C.fIf()+" moves.")
return}v.n(new C.d4P(v,w))
if(v.ghr()&&D.mg.t(0,v.a.e))v.Zv()
if(v.x1>=w)if(v.x2>=7){v.oo()
if(v.ghr()&&D.mg.t(0,v.a.e))v.mu(!0)
else v.rW("All 7 pattern rounds correct!")}else{v.n(new C.d4Q(v))
v.Cy()}},
HO(d,e){return this.c9o(d,e)},
rW(d){return this.HO(null,d)},
auV(){return this.HO(null,null)},
c9o(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.aa(0)
s=t.b1
if(s!=null)s.aa(0)
r=t.a.x*1.46
t.n(new C.d4p(t,r))
q=B.o.u(1000*Date.now())
s=t.a
p=new A.d_(q,s.c.a,r,B.fv,B.f7,"Game payout: "+s.f,null,null,B.ch,new A.Q(Date.now(),0,!1))
A.aeU(p,!0)
t.a.hk(p)
t.a.bn()
o=e==null?"+$"+B.k.a9(r,2)+" added to your balance!":e
s=t.a
C.u4(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.DU(d,o,"YOU WIN!",!0),$async$HO)
case 3:w=4
return A.b(C.aeM(t.a.f,o),$async$HO)
case 4:case 1:return A.h(u,v)}})
return A.i($async$HO,v)},
DS(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$DS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghr()&&D.mg.t(0,t.a.e)?3:4
break
case 3:w=5
return A.b(t.ckU(),$async$DS)
case 5:w=1
break
case 4:s=t.z8()
r=t.MX()
w=r<=0||s<=0?6:7
break
case 6:w=8
return A.b(t.a8n("Time's up \u2014 no progress to pay."),$async$DS)
case 8:w=1
break
case 7:q=B.k.E(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return A.b(t.rW("Complete! Max payout earned."),$async$DS)
case 12:w=10
break
case 11:w=13
return A.b(t.Dj(q,s,r),$async$DS)
case 13:case 10:case 1:return A.h(u,v)}})
return A.i($async$DS,v)},
OX(d){return this.cdC(d)},
Zv(){return this.OX(!1)},
cdC(b1){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$OX=A.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghr()&&D.mg.t(0,r.a.e))||r.a.Q==null){w=1
break}if(!b1){a1=new A.Q(Date.now(),0,!1)
a2=r.bP
if(a2!=null&&a1.bw(a2).a<3e6){w=1
break}r.bP=a1}a2=r.a
a3=a2.Q
a3.toString
q=B.a.i(a3)
if(J.aa(q)===0){w=1
break}t=4
p=B.a.i(a2.c.a.toLowerCase())
a4=C.tn(a2.d.b4,q)
w=a4==null?7:9
break
case 7:w=10
return A.b(C.Jr(q,r.a.d.b4,!1),$async$OX)
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
J.aE(k,p,r.z8())
J.aE(m,"scores",k)
if(r.a.e==="memory"){j=J.q(m,"memoryMatchedBy")
i=a2.b(j)?A.a_(j,a3,a5):A.T(a3,a5)
a6=r.id
a6=A.z(a6,A.a2(a6).k("cl.E"))
B.d.fm(a6)
J.aE(i,p,a6)
J.aE(m,"memoryMatchedBy",i)
h=A.aZ(x.S)
for(a6=i,a6=new A.dv(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aU(g);a8.C();){f=a8.gT(a8)
e=typeof f=="number"?B.k.N(f):A.c4(J.k(f),null)
if(e!=null)J.cb(h,e)}}a6=h
a6=A.z(a6,A.a2(a6).k("cl.E"))
B.d.fm(a6)
J.aE(m,"memoryMatched",a6)}d=J.q(m,"wagers")
a0=a2.b(d)?A.a_(d,a3,a5):A.T(a3,a5)
J.aE(a0,p,r.a.x)
J.aE(m,"wagers",a0)
w=11
return A.b(C.aMP(r.a.d.b4,q,m),$async$OX)
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
mu(d){return this.ckV(d)},
ckU(){return this.mu(!1)},
ckV(b5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
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
return A.b(C.Jr(q,s.d.b4,!0),$async$mu)
case 7:o=b7
n=t.MX()
w=o==null?8:9
break
case 8:m=B.k.E(t.z8()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return A.b(t.a8n("Time's up \u2014 no progress to pay."),$async$mu)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return A.b(t.rW("Complete! Max payout earned."),$async$mu)
case 17:w=15
break
case 16:w=18
return A.b(t.Dj(m,t.z8(),n),$async$mu)
case 18:case 15:case 11:w=19
return A.b(t.Gt(),$async$mu)
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
if(a0==null)a0=t.z8()
d=A.aN(e.h(0,j))
a1=d==null?null:B.k.N(d)
if(a1==null)a1=0
a2=B.k.E(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return A.b(t.a8n("Time's up \u2014 no progress to pay."),$async$mu)
case 22:w=23
return A.b(t.Gt(),$async$mu)
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
if(r!=null)r.aa(0)
r=t.b1
if(r!=null)r.aa(0)
a8=t.a.x*1.46*a2
a9=a8+a7
t.n(new C.d4J(t,a8,a2))
r=t.a
r.toString
h=B.o.u(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+B.k.a9(a7,2):d+" ("+b1+"/"+b2+")"
r.hk(new A.d_(h,b0,a9,B.fv,B.f7,d,null,null,B.ch,new A.Q(Date.now(),0,!1)))
t.a.bn()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+B.k.a9(a9,2)+" (includes opponent bonus $"+B.k.a9(a7,2)+")":"+$"+B.k.a9(a8,2)+" (your progress payout)"
s=t.a
C.u4(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return A.b(t.DU(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$mu)
case 24:w=25
return A.b(t.Gt(),$async$mu)
case 25:case 1:return A.h(u,v)}})
return A.i($async$mu,v)},
Dj(d,e,f){return this.c9m(d,e,f)},
c9m(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Dj=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.aa(0)
s=t.b1
if(s!=null)s.aa(0)
r=t.a.x*1.46*d
t.n(new C.d4n(t,r,d))
s=B.o.u(1000*Date.now())
q=t.a
p=new A.d_(s,q.c.a,r,B.fv,B.f7,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,B.ch,new A.Q(Date.now(),0,!1))
A.aeU(p,!0)
t.a.hk(p)
t.a.bn()
if(t.c==null){w=1
break}o=B.k.U(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&A.c()
m=q+C.af7(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?B.d.cG(t.cy,0,new C.d4o()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+B.k.a9(r,2)+" ("+n+"% \u2014 "+A.t(k)+" mistakes/missed)":"+$"+B.k.a9(r,2)+" ("+n+"% of full prize)"
q=t.a
C.u4(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return A.b(t.DU(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$Dj)
case 3:w=4
return A.b(C.aeM(t.a.f,j),$async$Dj)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Dj,v)},
bVB(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.z8()
v=o.MX()}catch(u){return}if(v<=0||w<=0)return
t=B.k.E(w/v,0,1)
s=A.xH(B.k.a9(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=B.o.u(1000*Date.now())
p=o.a
r.hk(new A.d_(q,p.c.a,s,B.fv,B.f7,"Game partial: "+p.f+" ("+A.t(w)+"/"+A.t(v)+", left early)",n,n,B.ch,new A.Q(Date.now(),0,!1)))
o.a.bn()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.u4(s,n,"Left early \xb7 +$"+B.k.a9(s,2)+" ("+A.t(w)+"/"+A.t(v)+")",q,r,p,n,!0)},
a8m(d,e){return this.bJU(d,e)},
bJU(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a8m=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.aa(0)
s=t.b1
if(s!=null)s.aa(0)
r=B.o.u(1000*Date.now())
s=t.a
q=s.c.a
p=s.x
s=s.f
o=Date.now()
t.a.hk(new A.d_(r,q,p,B.fv,B.f7,"Game payout: "+s+" (draw, stake returned)",null,null,B.ch,new A.Q(o,0,!1)))
t.a.bn()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.u4(o,null,"Draw. Your $"+B.k.a9(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.DU(d,"Nobody won, so your $"+B.k.a9(t.a.x,2)+" stake was returned.","DRAW",!1),$async$a8m)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8m,v)},
VP(d,e){return this.bJV(d,e)},
a8n(d){return this.VP(null,d)},
bJV(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$VP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.aa(0)
s=t.b1
if(s!=null)s.aa(0)
s=t.a
r=s.c.a
q=s.f
s=s.x
C.u4(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return A.b(t.DU(d,e,"YOU LOSE",!1),$async$VP)
case 3:case 1:return A.h(u,v)}})
return A.i($async$VP,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&A.c()
w=B.o.ak(m,60)
m=B.a.aS(B.o.u(B.o.F(m,60)),2,"0")
v=A.aF(n,n,n,n,B.aib,n,n,n,new C.d4Y(d),n,n,n,n,n,n)
if(o.ghr()){u=o.bA
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=A.D(A.d(u?t.f+" vs "+A.t(o.bA):t.f,n,2,B.a2,n,n,n,B.fS,n,n,n),1)
r=A.m(10)
q=x.p
r=A.B(A.a([v,s,A.p(n,C.anV(new C.d4Z(o),B.qY,t.c.a),B.h,n,n,new A.o(B.cQ,n,n,r,n,n,B.n),n,n,n,n,B.fL,n,n,n)],q),B.m,n,B.e,B.j,0,n,n)
t=o.a
s=t.w
v=A.m(10)
s=A.p(n,A.B(A.a([A.D(A.d("Win $"+B.k.a9(t.x*1.46,2)+" \xb7 stake $"+B.k.a9(o.a.x,2)+" \u2022 Progress "+o.z8()+"/"+o.MX(),n,n,n,n,n,n,D.eGt,n,n,n),1),new C.an5(o.a.c.a,new C.d5_(o),n),B.aa,D.btL,B.d7,A.d(""+w+":"+m,n,n,n,n,n,n,B.oy,n,n,n)],q),B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(n,n,n,v,n,new A.a3(B.a4,B.a7,B.w,s,n,n),B.n),n,n,n,n,B.fX,n,n,n)
v=o.a.w
m=A.U(v).k("J<1,x>")
m=A.z(new A.J(v,new C.d50(),m),m.k("ai.E"))
w=A.m(14)
v=A.H(B.b9,B.r,1)
p=C.aMt(n,D.aZt,A.bq(!0,new A.C(Ae.Vn,A.v(A.a([r,s,B.P,new A.fk(new C.d51(o),n),B.ar,A.D(A.p(n,o.bJT(),B.h,n,n,new A.o(n,n,v,w,n,new A.a3(B.a4,B.a7,B.w,m,n,n),B.n),n,n,n,n,B.ck,n,n,n),1)],q),B.ag,n,B.e,B.j,0,B.p),n),!0,!1,B.ah,!0,!0))
if(!o.c4)return p
m=A.X(140,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255)
w=A.X(242,B.ij.l()>>>16&255,B.ij.l()>>>8&255,B.ij.l()&255)
v=A.m(18)
u=A.H(B.b9,B.r,1)
return new A.am(B.W,n,B.a9,B.q,A.a([p,A.bZ(0,A.p(B.A,A.e1(A.p(n,A.v(A.a([D.etx,B.ab,A.d(o.cT,n,n,n,n,n,n,D.eHR,B.L,n,n),B.ar,A.d(o.cf,n,n,n,n,n,n,D.eGc,B.L,n,n)],q),B.m,n,B.e,B.R,0,B.p),B.h,n,n,new A.o(w,n,u,v,n,n,B.n),n,n,n,B.um,B.wB,n,n,n),!1,n),B.h,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
bWz(){var w=this.k3
return A.ck(new C.d4m(this,w,B.k.dE(this.fr.length/w)))},
bJT(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.bWz()
if(m==="scramble"){m=o.r
m===$&&A.c()
w=x.l
return A.v(A.a([A.d(m,n,n,n,n,n,n,B.nM,n,n,n),A.d("Words "+o.bf+"/5",n,n,n,n,n,n,B.C3,n,n,n),B.ab,A.d("Tap letters below to fill each slot",n,n,n,n,n,n,A.l(n,n,A.X(166,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.T,A.c9(B.fG,A.ij(o.ay.length,new C.d44(o),!0,w),B.bx,6,6),B.aO,A.c9(B.fG,A.ij(o.ch.length,new C.d45(o),!0,w),B.bx,8,8),B.aO,new A.a5(1/0,n,A.i5(D.f4Y,o.gbzK(),A.fh(n,n,B.aB,n,n,n,n,n,n,B.c,n,n,B.cc,n,n,n,n,n,n,n)),n)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="typing"){m=o.w
m===$&&A.c()
return new C.api(m,o.e,new C.d46(o),new C.d47(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&A.c()
m=A.a([A.d(m,n,n,n,n,n,n,B.nM,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(A.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,B.C3,n,n,n))
m.push(B.ab)
if(o.a.e==="sequence"){w=o.aw
w===$&&A.c()
w+=", ?"}else w=o.CW
m.push(A.f_(B.A,A.d(w,n,n,n,n,n,n,B.ov,B.L,n,n),B.h,B.dq))
m.push(B.aO)
w=o.x
B.d.v(m,new A.J(w,new C.d48(o),A.U(w).k("J<1,r>")))
return A.v(m,B.m,n,B.e,B.j,0,B.p)}if(m==="puzzle")return A.ck(new C.d49(o))
if(m==="simon"){m=o.r
m===$&&A.c()
return A.v(A.a([A.d(m,n,n,n,n,n,n,B.nM,n,n,n),A.d("Progress "+o.p3+"/21",n,n,n,n,n,n,B.C3,n,n,n),B.P,A.D(A.lK(1,A.ij(4,new C.d4a(o),!0,x.l),2,10,10,n,B.dL,!1),1)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="pattern")return A.ck(new C.d4b(o))
if(m==="color"){u=A.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[B.dC,B.ds,B.hH,B.qE]
m=o.r
m===$&&A.c()
m=A.d(m,n,n,n,n,n,n,B.nM,n,n,n)
w=A.d("Round "+o.b4+"/5",n,n,n,n,n,n,B.C3,n,n,n)
v=o.aA
v===$&&A.c()
s=o.aL
s===$&&A.c()
s=A.a([m,w,B.ab,A.d(v,n,n,n,n,n,n,A.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.aO],x.p)
r=J.e_(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=A.fh(n,n,A.X(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,B.c,n,n,B.f0,n,n,n,n,n,n,n)
r[q]=new A.C(B.cM,new A.a5(1/0,n,A.i5(new A.w(u[q],n,B.cr,n,n,n,n,n,n,n,n,n),new C.d4c(o,u,q),m),n),n)}B.d.v(s,r)
return A.v(s,B.m,n,B.e,B.j,0,B.p)}if(m==="reflex"){m=o.y
p=m?B.bm:B.cj
w=o.r
w===$&&A.c()
w=A.d(w,n,n,n,n,n,n,B.a4o,B.L,n,n)
v=A.d("Fast taps "+o.Y+"/5",n,n,n,n,n,n,D.eDK,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=A.d(m,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,n,n,n,Math.min(A.aG(s,B.bR,x.w).w.a.a*0.18,72),n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return A.qY(A.aH(B.c5,A.dj(n,A.v(A.a([w,B.P,v,B.b8,s,B.b8,new A.C(B.DM,A.d(m,n,n,n,n,n,n,A.l(n,n,A.X(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,B.a3,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),B.m,n,B.b7,B.j,0,B.p),p,n,B.ba,n,T.zA,n,n,n,n,n,n,n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gbPi(),n,n,n,n,n,n,!1,B.ae))}if(B.d.t(D.NW,m)&&o.aZ!=null){m=o.a.e
w=o.aZ
w.toString
return C.hG1(m,new C.d4d(o),new C.d4e(o),o.d,w)}m=o.r
m===$&&A.c()
return A.au(A.d(m,n,n,n,n,n,n,B.di,n,n,n),n,n,n)}}
C.ajz.prototype={
S(){return new C.bd8()},
cIk(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bd8.prototype={
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.a,a0=d.c,a1=d.d
d=A.aG(a2,B.e3,x.w).w
w=x.p
v=A.a([A.bK_(!1,f.a.r,"INVESTMENT PLANS",e),B.d3],w)
u=a0.x
if(u!=null){t=u.d.bQ()
s=B.a.aS(B.o.u(A.bB(t)),2,"0")
r=B.a.aY(B.o.u(A.bw(t)+1),2)
q=A.m(18)
p=A.H(D.aaL,B.r,2.2)
o=x.V
n=A.a([new A.ab(0,B.G,A.X(89,B.q0.l()>>>16&255,B.q0.l()>>>8&255,B.q0.l()&255),B.eQ,20),new A.ab(0,B.G,A.X(102,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),B.dn,14)],o)
m=A.an(e,A.p(e,e,B.h,e,e,new A.o(A.X(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),e,e,e,e,e,B.a6),e,120,e,e,e,e,e,120),e,e,e,-20,-24,e)
l=A.m(10)
k=A.H(D.aaL,B.r,3.4)
o=A.a([new A.ab(0,B.G,A.X(166,B.q0.l()>>>16&255,B.q0.l()>>>8&255,B.q0.l()&255),B.dE,10),new A.ab(0,B.G,A.X(89,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),B.cF,6)],o)
o=A.B(A.a([A.p(e,e,B.h,e,e,new A.o(e,e,k,l,o,new A.a3(B.ax,B.aC,B.w,D.cNW,D.cqP,e),B.n),e,42,e,e,e,e,e,56),B.b8,f.b29(a2,!0)],w),B.m,e,B.e,B.j,0,e,e)
l=A.Cn(u.a,1,B.a2,D.eKQ)
k=u.b
j=u.c
i=A.Cn("Making $"+A.dx(k*j)+" Daily",1,B.a2,D.eL3)
h=A.Cn(f.aYi(k),1,B.a2,D.eEr)
r=A.B(A.a([A.D(A.v(A.a([D.eZD,A.Cn(a0.c,1,B.a2,D.aKF)],w),B.F,e,B.e,B.j,0,B.p),1),A.v(A.a([D.eZp,A.d(s+"/"+r,e,e,e,e,e,e,D.aKF,e,e,e)],w),B.dH,e,B.e,B.j,0,B.p)],w),B.m,e,B.e,B.j,0,e,e)
s=A.p(e,e,B.h,A.X(89,D.w5.l()>>>16&255,D.w5.l()>>>8&255,D.w5.l()&255),e,e,e,1,e,e,e,e,e,e)
j=A.B(A.a([f.ao9("INVESTED","$"+A.dx(k),!0),f.ao9("DAILY ROI",B.k.a9(j*100,2)+"%",!0),f.ao9("DAYS LEFT",""+(261-u.f)+" d",!0)],w),B.m,e,B.hF,B.j,0,e,e)
k=A.dx(u.e)
u=u.f
g=261-u>0?"ACTIVE":"ENDED"
B.d.v(v,A.a([D.f4z,B.tH,A.p(e,new A.am(B.W,e,B.a9,B.q,A.a([m,A.v(A.a([o,B.P,D.eYc,B.bA,l,B.av,i,B.av,h,B.P,r,B.ar,s,B.ar,j,B.av,A.Cn("Earned $"+k+" \u2022 Clocked "+u+"/261 \u2022 "+g,1,B.a2,D.eKe)],w),B.F,e,B.e,B.R,0,B.p)],w),e),B.h,e,e,new A.o(e,e,p,q,n,D.bIk,B.n),e,e,e,e,B.bC,e,e,1/0),B.a3H],w))}v.push(D.eQL)
v.push(B.tH)
B.d.v(v,new A.J(a1,new C.d8k(f,a2),A.U(a1).k("J<1,r>")))
return A.ce(e,B.K,A.bq(!1,A.ci(A.v(v,B.F,e,B.e,B.j,0,B.p),B.q,e,B.z,e,new A.N(20,10,20,124+d.r.d),e,e,B.ak),!0,!1,B.ah,!0,!0),e,!1,!1,e,e)},
b29(d,e){var w=null,v=A.X(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(8),t=A.H(B.j1,B.r,1)
return A.p(w,A.B(A.a([A.V(B.aga,B.c,w,w,w,16),B.d7,A.d("TAP",w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.R,0,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.ey,w,w,w)},
aYi(d){var w=B.a.aS(B.o.u(B.k.U(d*100)),4,"0")
return"****  ****  ****  "+B.a.aY(w,w.length-4)},
ao9(d,e,f){var w=null,v=A.X(217,D.w5.l()>>>16&255,D.w5.l()>>>8&255,D.w5.l()&255)
v=A.d(d,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.v(A.a([v,B.bA,A.Cn(e,w,w,A.l(w,w,E.zk,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),B.F,w,B.e,B.j,0,B.p)},
cbp(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gcMz(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
o=A.a([new A.ab(0,B.G,A.X(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.PG,16),new A.ab(0,B.G,A.X(115,B.aj.l()>>>16&255,B.aj.l()>>>8&255,B.aj.l()&255),B.dn,14),new A.ab(0,B.G,A.X(51,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),B.cF,8)],p)
n=A.an(d,A.p(d,d,B.h,d,d,new A.o(d,d,d,d,d,new A.bR(B.A,0.5,B.w,d,0,A.a([A.X(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),A.X(0,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)],x.O),d,d),B.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=A.m(5)
l=A.H(B.c,B.r,2.2)
k=A.aY(4286436348)
k=A.X(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=A.X(B.k.U(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
i=A.aY(4279150057)
h=x.p
p=A.B(A.a([new A.a5(44,44,new A.am(B.W,d,B.a9,B.h,A.a([A.an(d,A.eu(B.A,0.7853981633974483,A.p(d,d,B.h,d,d,new A.o(d,d,l,m,A.a([new A.ab(0.5,B.G,k,B.J,14),new A.ab(0,B.G,j,B.J,6),new A.ab(0,B.G,A.X(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new A.u(0,2),4)],p),D.bGZ,B.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.dVx],h),d),d),B.b8,e.b29(b2,!0)],h),B.m,d,B.e,B.j,0,d,d)
a6=A.Cn(a6,1,B.a2,D.eBm)
i=A.Cn(e.aYi(a3),1,B.a2,D.ePe)
j=A.B(A.a([e.aXK(B.k.a9(2.86,2)+"%"),B.eA,e.aXK("261d")],h),B.m,d,B.e,B.j,0,d,d)
k=A.D(A.v(A.a([D.eRW,A.Cn("$"+A.dx(a3),1,B.a2,D.eO4)],h),B.F,d,B.e,B.j,0,B.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=A.B(A.a([k,A.d(m,d,d,d,d,d,d,D.eC7,d,d,d)],h),B.dH,d,B.e,B.j,0,d,d)
k=A.p(d,d,B.h,A.X(89,B.bt.l()>>>16&255,B.bt.l()>>>8&255,B.bt.l()&255),d,d,d,1,d,d,d,d,d,d)
l=A.B(A.a([A.D(e.av7("Daily","$"+A.dx(a4)),1),B.eA,A.D(e.av7("Total","$"+A.dx(a4*261)),1),B.eA,A.D(e.av7("Days","261"),1)],h),B.m,d,B.e,B.j,0,d,d)
g=q?d:new C.d8j(e,b3,a3,t)
f=B.k.U(127.5)
f=A.fh(d,d,B.bj,A.X(f,B.aj.l()>>>16&255,B.aj.l()>>>8&255,B.aj.l()&255),A.X(f,B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255),d,3,d,d,B.aN,d,d,d,d,new A.b6(A.m(10),D.aQh),d,d,d,d,d)
return A.p(d,new A.am(B.W,d,B.a9,B.h,A.a([n,A.v(A.a([p,B.bA,D.f_i,B.bA,a6,B.d4,i,B.h2,j,B.h2,m,B.h2,k,B.h2,l,B.P,new A.a5(1/0,40,A.i5(A.f_(B.A,A.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.eCv,d,d,d),B.h,B.eb),g,f),d)],h),B.F,d,B.e,B.R,0,B.p)],h),d),B.h,d,d,new A.o(d,d,w,a0,o,D.bIV,B.n),d,d,d,B.kw,D.bgi,d,d,1/0)},
aXK(d){var w=null,v=A.X(115,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(5),t=A.H(B.cp,B.r,1)
return A.p(w,A.d(d,w,w,w,w,w,w,D.eBL,w,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.E_,w,w,w)},
av7(d,e){var w=null,v=A.X(97,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(7),t=A.H(B.aJ,B.r,1)
return A.p(w,A.v(A.a([A.d(d,w,w,w,w,w,w,D.eKB,w,w,w),B.tI,A.f_(B.a4,A.d(e,w,w,w,w,w,w,D.eN9,w,w,w),B.h,B.dq)],x.p),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.lZ,w,w,w)}}
C.afU.prototype={
S(){var w=null,v=A.a([],x._),u=$.av()
return new C.auJ(v,new A.ap(B.as,u),new A.ap(B.as,u),A.me(0,w,w),new A.hR(),D.P8,C.aeJ(),A.a([],x.fw),A.aZ(x.N),A.me(0,w,w))}}
C.auJ.prototype={
Z(){var w,v,u,t,s,r=this
r.a0()
w=r.a
w.toString
r.d=0
v=A.yG(0,1)
r.e!==$&&A.aQ()
r.e=v
r.ay=w.f.aA
w=r.k3=A.bj(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t].a
if(s.length!==0)u.K(0,s)}r.a9J()
r.Nh()
r.anM()
r.cnL()
r.co_()
$.aT.x1$.push(new C.cxf(r))
r.a.toString},
Nh(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Nh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.anw(),$async$Nh)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cwA(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Nh,v)},
gawI(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gNd())return!0
return!1},
gNd(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaR7(){var w,v=this.CW
if(v==null)return B.bw
w=v.bw(new A.Q(Date.now(),0,!1))
return w.a<0?B.bw:w},
bvp(){var w=this
if(w.a.c.w)return
if(w.gNd()){if(!w.cx)w.n(new C.cwq(w))}else if(w.cx)w.n(new C.cwr(w))},
chk(){this.n(new C.cwK(this))},
t2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$t2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.n(new C.cwH(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.n(new C.cwI(t))
w=1
break}w=3
return A.b(C.c4s(o.a,s),$async$t2)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return A.b(C.c4t(t.a.c.a,s),$async$t2)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.n(new C.cwJ(t,r,q))
t.cpI()
t.bvp()
if(r===3)t.WQ(r)}case 1:return A.h(u,v)}})
return A.i($async$t2,v)},
WQ(d){return this.bWq(d)},
bWq(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$WQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return A.b(C.bzR(q,r,new C.cwC(t),d,s.c.a),$async$WQ)
case 3:case 1:return A.h(u,v)}})
return A.i($async$WQ,v)},
wu(d){return this.bwR(d)},
anM(){return this.wu(!1)},
bwR(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$wu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return A.b(A.a5Y(k,C.h54(l.d)),$async$wu)
case 3:j=m
w=4
return A.b(C.c4S(k),$async$wu)
case 4:s=j.a=f
w=5
return A.b(A.aoj(k),$async$wu)
case 5:r=f
w=!s.a&&J.ct(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.Tw(!0,l,q,p)
m.a=s
w=8
return A.b(C.any(k,s),$async$wu)
case 8:case 7:w=9
return A.b(C.Sx(k),$async$wu)
case 9:o=f
w=10
return A.b(C.a5l(k),$async$wu)
case 10:n=f
if(t.c==null){w=1
break}t.n(new C.cws(m,t,r,o,n))
case 1:return A.h(u,v)}})
return A.i($async$wu,v)},
Ou(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ou=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Nh(),$async$Ou)
case 3:s=t.c
if(s==null){w=1
break}r=A.eD(new C.cwF(t),!1,null,x.H)
w=4
return A.b(A.a9(s,!1).cp(r),$async$Ou)
case 4:w=5
return A.b(t.Nh(),$async$Ou)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Ou,v)},
crK(){this.n(new C.cx2(this))},
co_(){var w=this,v=w.go
if(v!=null)v.aa(0)
if(w.a.c.w)return
w.go=A.dD(B.qh,new C.cwX(w))},
cpI(){var w=this,v=w.id
if(v!=null)v.aa(0)
w.id=null
if(!w.gNd()||w.CW==null)return
w.id=A.dD(B.h7,new C.cx_(w))},
cnL(){var w=this,v=w.fy
if(v!=null)v.aa(0)
w.fy=A.dD(B.j2,new C.cwW(w))
w.DZ()},
DZ(){return this.cpH()},
cpH(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$DZ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aA
t=4
w=7
return A.b(A.ax(),$async$DZ)
case 7:q=e
p=A.aS(J.q(q.a,"app_config"))
if(p!=null&&p.length!==0){o=B.Q.aD(0,p,null)
if(x.f.b(o)){m=A.C9(A.a_(o,x.N,x.z)).aA
i.a=m
r.a.f.aA=m}}w=10
return A.b(A.JD(),$async$DZ)
case 10:w=e?8:9
break
case 8:w=11
return A.b(A.aMs(),$async$DZ)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aA=l
w=14
return A.b(q.aq("String","app_config",B.Q.al(k.ac(),null)),$async$DZ)
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
break}if(i.a!==r.ay)r.n(new C.cwY(i,r))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DZ,v)},
b16(){B.d.b_(this.f,new C.cwV())},
a9J(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a9J=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Lp(t.a.c.a),$async$a9J)
case 3:q=e
if(t.c==null){w=1
break}s=A.a([],x._)
if(J.ct(q)){B.d.v(s,q)
B.d.b_(s,new C.cwx())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(A.E(["role","ai","text",r,"at",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.z))}t.n(new C.cwy(t,s))
t.a_r(!0)
A.bN(B.ji,new C.cwz(t),x.H)
case 1:return A.h(u,v)}})
return A.i($async$a9J,v)},
ad9(){var w=0,v=A.j(x.H),u=this
var $async$ad9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.alm(u.a.c.a,u.f),$async$ad9)
case 2:return A.h(null,v)}})
return A.i($async$ad9,v)},
bq(d){this.bC(d)},
p(){var w,v=this,u=v.fy
if(u!=null)u.aa(0)
u=v.go
if(u!=null)u.aa(0)
u=v.id
if(u!=null)u.aa(0)
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
a8J(d){var w,v=this
v.n(new C.cwv(v,d))
w=v.e
w===$&&A.c()
if(w.f.length!==0)w.A7(d,B.co,B.kv)
else $.aT.x1$.push(new C.cww(v,d))
if(d===0)v.a_r(!0)
if(d===1)v.cjd(!0)},
a_r(d){$.aT.x1$.push(new C.cwN(this,d))},
awl(){return this.a_r(!1)},
ZM(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_c(),$async$ZM)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==B.a.i(t.a.f.r))t.n(new C.cwG(t))
case 1:return A.h(u,v)}})
return A.i($async$ZM,v)},
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
return A.b(C.anr(a9.a,b0),$async$mt)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return A.b(q.t2(),$async$mt)
case 10:q.n(new C.cwO(q))
w=1
break
case 8:w=11
return A.b(q.t2(),$async$mt)
case 11:if(q.c!=null&&q.ch===3)q.WQ(3)
case 6:case 4:q.n(new C.cwP(q,c5))
C.Sk(q.a.c.a,"user",c5)
q.awl()
t=13
a8={}
w=16
return A.b(q.ZM(),$async$mt)
case 16:b1=B.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return A.b(A.a_c(),$async$mt)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.n(new C.cwQ(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.bxZ("",null)
q.n(new C.cwR(q,p))
C.Sk(q.a.c.a,"ai",p)
q.awl()
r=[1]
w=14
break}o=A.mL(a9)
a9=q.a
n=""
m=C.h54(a9.d)
w=C.h4Y(c5)?20:21
break
case 20:w=22
return A.b(C.c4R(q.a.c.a),$async$mt)
case 22:q.db=c9
w=23
return A.b(q.wu(!0),$async$mt)
case 23:case 21:w=24
return A.b(A.a5Y(q.a.c.a,m),$async$mt)
case 24:l=c9
k=C.hmK(l)
a9=k
b2=Date.now()
b3=new A.Q(b2,0,!1).bQ()
b2=B.a.aS(B.o.u(A.bB(b3)),2,"0")
b4=B.a.aS(B.o.u(A.bO(b3)),2,"0")
b5=B.a.aS(B.o.u(A.dd(b3)),2,"0")
b6=B.a.aS(B.o.u(A.fM(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+A.bw(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return A.b(C.Sx(q.a.c.a),$async$mt)
case 25:i=c9
h=C.fQv(i,25)
w=26
return A.b(C.a5l(q.a.c.a),$async$mt)
case 26:g=c9
f=C.fS8(g)
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
return A.b(C.aeK(a9,q.a.c.a,c5),$async$mt)
case 27:a0=c9
a1=""
if(C.h4Y(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:B.a.i(b2).length!==0)===!0){b2.toString
b8=B.a.i(b2)}else{a9=a9.c
b8=B.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=A.t(d)
b4=A.t(j)
b5=q.a.c.w?"\n"+C.hIL(m)+"\n":""
b6=J.aa(n)!==0?"\n"+A.t(n)+"\n":""
b9=J.aa(a0)!==0?"\n"+A.t(a0)+"\n":""
c0=A.t(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hh8(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+A.t(c5)
w=28
return A.b(A.qi(o,a2,B.hc,null),$async$mt)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.bxZ(a8.a,a3.a)
a4=c2
a5=A.h4k(a4)
c3=a5.a
a8.b=c3
if(B.d.gai(c3)){a9=A.z(C.hLt(c5),x.an)
a6=a9
J.fU(a6,C.hLu(c5))
J.fU(a6,C.hLv(c5))
J.fU(a6,A.h3N(c5))
J.fU(a6,C.hLy(c5,q.a.c.w))
a8.b=a6}c3=C.hKH(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return A.b(A.af_(c3,a6,m,q.a.c.a),$async$mt)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.n(new C.cwS(a8,q,a7))
C.Sk(q.a.c.a,"ai",a7)
if(J.ct(a8.b)&&q.c!=null)q.Is(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.n(new C.cwT(q))
C.Sk(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.n(new C.cwU(q))
q.awl()
q.ad9()
if(!q.a.c.w)q.t2()
w=r.pop()
break
case 15:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$mt,v)},
cap(d){var w=A.T(x.N,x.z)
w.m(0,"type",d.a)
w.v(0,d.b)
return w},
caq(d){var w,v,u,t,s,r,q,p=J.q(d,"phoneActions")
if(!x.j.b(p))return B.i6
w=A.a([],x.Z)
for(v=J.aU(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gT(v)
if(u.b(r)){q=A.c7Y(A.a_(r,t,s))
if(q!=null)w.push(q)}}return w},
Is(d){return this.chO(d)},
chO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Is=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J.aU(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gT(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return A.b(C.aeV(p,o,new C.cwL(t,p)),$async$Is)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return A.b(A.Fp(p,null,o,!1,!0,t.a.c.a),$async$Is)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.H(r).f
p.P(new A.b_(new A.w(m,null,null,null,null,null,null,null,null,null,null,null),B.cj,null,null,null,null,null,null,null,null,null,null,null,B.nr,!1,null,null,null,B.q,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return A.b(A.Fp(p,l.f,o,k,n,j),$async$Is)
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
return A.b(C.aVj(p,A.a([new C.qM("out_"+1000*o,new A.Q(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$Is)
case 14:t.anM()
case 13:p=t.c.H(r).f
p.P(new A.b_(new A.w(m,null,null,null,null,null,null,null,null,null,null,null),B.dk,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null))
w=3
break
case 4:case 1:return A.h(u,v)}})
return A.i($async$Is,v)},
Qa(d){return this.cqa(d)},
cqa(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Qa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return A.b(C.aeV(d,n,new C.cx1(t)),$async$Qa)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return A.b(A.Fp(d,null,n,!1,!0,t.a.c.a),$async$Qa)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.H(x.q).f.P(A.b0(null,null,null,B.cj,null,B.q,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.nr,null,null,null,null,null,null,null,null,null,null))
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
return A.b(A.Fp(d,q.f,r,p,n,o),$async$Qa)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.H(x.q).f.P(A.b0(null,null,null,B.dk,null,B.q,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Qa,v)},
cjd(d){$.aT.x1$.push(new C.cwM(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.M(d).ax.a===B.H,j=k?B.d9:B.zq,i=m.d
i===$&&A.c()
w=x.O
w=k?A.a([B.aba,D.b3s],w):A.a([B.aL,B.rl],w)
v=A.m(22)
u=A.a([new A.ab(0,B.G,A.X(71,B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255),B.cs,16)],x.V)
t=m.a.c.w?m.gc69():l
s=A.X(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
r=A.H(B.c2,B.r,1.5)
t=A.aH(l,A.p(l,C.fGG(m.a.f.Q,48),B.h,l,l,new A.o(s,l,r,l,l,l,B.a6),l,48,l,l,l,l,l,48),B.z,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,B.ae)
r=A.d("NGMY Helper",l,1,B.a2,l,l,l,B.dO,l,l,l)
s=A.p(l,l,B.h,l,l,D.aSn,l,8,l,l,l,l,l,8)
if(m.gawI()&&m.d===0)q=m.gNd()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=A.p(l,A.B(A.a([t,B.bd,A.D(A.v(A.a([r,B.bA,A.B(A.a([s,B.bp,A.D(A.d(q,l,1,B.a2,l,l,l,A.l(l,l,A.X(B.k.U(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,B.cq,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),1),A.aF(l,l,l,l,B.m7,l,l,l,new C.cx7(d),l,l,l,l,l,l)],p),B.m,l,B.e,B.j,0,l,l),B.h,l,l,new A.o(l,l,l,v,u,new A.a3(B.ax,B.aC,B.w,w,l,l),B.n),l,l,l,G.acM,D.bgZ,l,l,l)
v=k?D.rm:B.c
u=A.m(14)
t=A.H(k?B.bG:B.e5,B.r,1)
u=A.p(l,A.B(A.a([m.bzv(),m.cpU(1,B.lt,"Music")],p),B.m,l,B.e,B.j,0,l,l),B.h,l,l,new A.o(v,l,t,u,l,l,B.n),l,l,l,l,B.eh,l,l,l)
t=m.e
t===$&&A.c()
if(m.gawI()){v=A.a([],p)
if(m.gNd()){s=A.X(38,B.dk.l()>>>16&255,B.dk.l()>>>8&255,B.dk.l()&255)
r=A.m(12)
q=A.H(A.X(115,B.dk.l()>>>16&255,B.dk.l()>>>8&255,B.dk.l()&255),B.r,1)
v.push(new A.C(B.K2,A.p(l,A.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hl4(m.gaR7())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.eMC,B.L,l,l),B.h,l,l,new A.o(s,l,q,r,l,l,B.n),l,l,l,l,B.em,l,l,1/0),l))}if(m.cy&&!m.gNd()){s=A.X(31,B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255)
r=A.m(12)
q=A.m(12)
o=A.V(B.rX,k?B.i1:B.fx,l,l,l,16)
v.push(new A.C(B.K2,A.aD(!1,B.a1,!0,r,A.aI(!1,q,!0,new A.C(B.em,A.B(A.a([o,B.bp,A.d("Back to NGMY Helper AI",l,l,l,l,l,l,A.l(l,l,k?B.i1:B.fx,l,l,l,l,l,l,l,l,12,l,l,B.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),B.m,l,B.b7,B.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gchj(),l,l,l,l,l,l,l),B.h,s,0,l,l,l,l,l,B.ad),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcrJ():l
v.push(A.D(new C.anu(s,q,new C.cx8(),r,o,l),1))
v=A.v(v,B.m,l,B.e,B.j,0,B.p)}else v=m.bzw(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.fT0(r)
t=A.a([w,B.ab,new A.C(B.is,u,l),B.P,A.D(A.fU_(A.a([v,new C.anx(q,o,n,new C.cx9(m,d),s,l)],p),B.q,t,B.z,new C.cxa(m),l),1)],p)
if(m.d===0&&!m.gawI()){w=A.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a_m:D.ZM
w.push(new A.a5(l,36,A.hH(l,new C.cxb(m),v.length,l,l,B.b0,new C.cxc(),!1),l))}if(m.ax&&m.f.length<=1)w.push(B.P)
v=m.r
u=A.l(l,l,k?B.c:B.bg,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=A.l(l,l,k?B.az:B.dy,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?B.x:B.c
r=A.X(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=A.m(22)
o=A.m(22)
n=k?B.b9:B.f5
u=A.D(A.aK(l,B.U,!1,l,!0,B.q,l,A.aL(),v,l,l,l,l,l,2,A.bn(l,new A.b3(4,q,B.X),l,B.zK,l,l,l,l,!0,new A.b3(4,o,new A.ay(n,1,B.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.z,!0,l,!0,l,!1,l,B.ai,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cxd(m),l,!1,l,l,!1,l,!0,l,B.a8,l,l,l,l,l,l,l,l,l,l,l,u,!0,B.a5,l,B.am,l,B.aJB,l,l),1)
s=m.at
r=s?l:m.gckd()
w.push(A.B(A.a([u,new A.Hr(v,B.aL,l),B.bp,A.aD(!1,B.a1,!0,l,A.aI(!1,l,!0,new A.a5(44,44,s?D.dPI:P.ai3,l),B.cH,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),B.h,B.aL,0,l,l,B.cH,l,l,B.ad)],p),B.dH,l,B.e,B.j,0,l,l))
w=A.v(w,B.m,l,B.e,B.R,0,B.p)
v=k?B.kU:B.c
t.push(A.to(B.pQ,A.p(l,new A.C(B.DO,w,l),B.h,l,l,new A.o(v,l,A.H(k?A.X(41,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.X(18,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),B.r,1),B.pQ,l,l,B.n),l,l,l,l,l,l,l,l),14,!1))}return new A.Uq(i,new C.cxe(m),A.ce(l,j,A.bq(!0,A.v(t,B.m,l,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),l,!1,!1,l,l),l)},
bzv(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===0
p=this.c
p.toString
v=A.M(p).ax.a===B.H
if(w)p=A.X(B.k.U(255*(v?0.25:0.12)),B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255)
else p=B.K
u=A.m(11)
t=w?A.H(A.X(B.k.U(127.5),B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255),B.r,1):q
s=A.V(B.rZ,w?B.aL:B.cW,q,q,q,17)
if(w)r=v?B.c:B.aF
else r=B.cW
return A.D(A.aH(q,A.dj(q,A.B(A.a([s,B.bp,A.d("Chat",q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.b7,B.j,0,q,q),q,q,B.ba,new A.o(p,q,t,u,q,q,B.n),B.eL,q,q,q,B.ws,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cwt(this),q,q,q,q,q,q,!1,B.ae),1)},
cpU(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===d
p=this.c
p.toString
v=A.M(p).ax.a===B.H
if(w)p=A.X(B.k.U(255*(v?0.25:0.12)),B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255)
else p=B.K
u=A.m(11)
t=w?A.H(A.X(B.k.U(127.5),B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255),B.r,1):q
s=A.V(e,w?B.aL:B.cW,q,q,q,17)
if(w)r=v?B.c:B.aF
else r=B.cW
r=A.a([s,B.bp,A.d(f,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return A.D(A.aH(q,A.dj(q,A.B(r,B.m,q,B.b7,B.j,0,q,q),q,q,B.ba,new A.o(p,q,t,u,q,q,B.n),B.eL,q,q,q,B.ws,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cx0(this,d),q,q,q,q,q,q,!1,B.ae),1)},
bzw(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.b8a:A.X(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
w=A.m(18)
v=A.H(d?B.dv:B.aJ,B.r,1)
u=q===0?1:q
return A.p(s,A.jX(!0,s,t.ok,new C.cwu(t,e,d),u,s,B.c4,s,s,!1,!1),B.h,s,s,new A.o(r,s,v,w,s,s,B.n),s,s,s,B.is,s,s,s,s)},
aKR(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a8(d),m=J.y(n.h(d,"role"),"user"),l=m?B.i6:this.caq(d),k=m?B.ma:B.e,j=x.p,i=A.a([],j),h=!m
if(h)B.d.v(i,A.a([new A.a5(28,28,C.fGG(this.a.f.Q,28),o),B.aa],j))
w=m?B.dH:B.F
j=A.a([],j)
if(h)j.push(D.dPY)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=B.aL
else u=e?B.Um:B.aN
t=m?16:4
s=m?4:16
if(m)r=o
else r=A.H(e?B.bG:B.aJ,B.r,1)
q=A.a([new A.ab(0,B.G,A.X(10,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),B.dE,6)],x.V)
if(f)n=A.d("typing\u2026",o,o,o,o,o,o,A.l(o,o,e?B.az:B.dy,o,o,o,o,o,o,o,o,12,B.cx,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=B.c
else p=e?B.af:B.bj
p=A.d(n,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(A.fCO(m,A.p(o,n,B.h,o,o,new A.o(u,o,r,new A.bv(B.kN,B.kN,new A.b1(t,t),new A.b1(s,s)),q,o,B.n),o,o,o,o,Ab.Vp,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(A.h4p(l,e,this.gcq9()))
i.push(new A.dm(1,B.cl,A.v(j,w,o,B.e,B.j,0,B.p),o))
if(m)i.push(B.d7)
return new A.C(B.da,A.B(i,B.dH,o,k,B.j,0,o,o),o)},
bzu(d,e){return this.aKR(d,e,!1)}}
C.aHA.prototype={
Z(){this.a0()
$.xS().aK(0,this.gDd())},
p(){$.xS().a1(0,this.gDd())
this.a2()}}
C.aHB.prototype={
Z(){this.a0()
$.xS().aK(0,this.gDd())},
p(){$.xS().a1(0,this.gDd())
this.a2()}}
C.aHC.prototype={
Z(){this.a0()
$.xS().aK(0,this.gDd())},
p(){$.xS().a1(0,this.gDd())
this.a2()}}
C.aIx.prototype={
Z(){this.a0()
$.xS().aK(0,this.gDd())},
p(){$.xS().a1(0,this.gDd())
this.a2()}}
C.Uf.prototype={
a3(){return"NgmySnapshotResolveOutcome."+this.b}}
C.al6.prototype={
S(){return new C.azy()}}
C.azy.prototype={
Z(){var w,v=this
v.a0()
w=v.a
v.d=w.d
v.e=A.bj(w.e,!0,x.o)
v.f=v.a.f},
ku(d){var w=null,v=this.c
if(v==null)return
v.H(x.q).f.P(A.b0(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
zl(d,e){return this.cv7(d,e)},
cv7(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$zl=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.n(new C.doO(q,e))
t=3
w=6
return A.b(d.$0(),$async$zl)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.n(new C.doP(q))
w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$zl,v)},
zK(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$zK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=t.d
q===$&&A.c()
w=3
return A.b(A.u7(r,q),$async$zK)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.doF(t,s))
case 1:return A.h(u,v)}})
return A.i($async$zK,v)},
a7h(){var w=0,v=A.j(x.gE),u,t=this,s,r,q,p
var $async$a7h=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.zK(),$async$a7h)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&A.c()
q=t.e
q===$&&A.c()
p=t.f
p===$&&A.c()
u=A.Mb(s,A.Iv(A.bUk(r,q,s,p).eF(),null,"  "))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a7h,v)},
Vz(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Vz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oD(s,t.a.c,!1),$async$Vz)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zl(new C.doD(t),"Preparing download\u2026"),$async$Vz)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vz,v)},
X0(){var w=0,v=A.j(x.H),u,t=this,s
var $async$X0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.oD(s,t.a.c,!1),$async$X0)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.zl(new C.doN(t),"Creating QR code\u2026"),$async$X0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X0,v)},
X_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hDK(r),$async$X_)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.zl(new C.doC(t,s),"Looking up code\u2026"),$async$X_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X_,v)},
aay(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$aay=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wp.c2().Kz(B.Oe,B.rS,!0),$async$aay)
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
case 6:u=A.Fl()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aay,v)},
z_(d,e,f){return this.bBO(d,e,f)},
aM4(d,e){return this.z_(d,!1,e)},
bBN(d){return this.z_(d,!1,!1)},
bBO(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$z_=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(t.zK(),$async$z_)
case 3:if(t.c==null){w=1
break}if(!C.bUp(d,t.a.c,null)){t.ku(C.bUq(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&A.c()
s=!C.hgQ(d,s)}if(s){t.ku(y.B)
w=1
break}r=d.as
q=J.cj(r)
s=t.c
s.toString
w=4
return A.b(C.hDX(s,q,t.a.c,d),$async$z_)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=A.lv(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,B.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&A.c()
r=o}w=5
return A.b(A.qQ(s,p,r,!1,null,null,d.ax),$async$z_)
case 5:if(t.c==null){w=1
break}t.n(new C.doB(t,p,r,d))
t.ku("Restored your local Growth Income. Go back to see it updated.")
case 1:return A.h(u,v)}})
return A.i($async$z_,v)},
aax(){var w=0,v=A.j(x.H),u=this
var $async$aax=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.zl(new C.doE(u),"Reading file\u2026"),$async$aax)
case 2:return A.h(null,v)}})
return A.i($async$aax,v)},
UU(d){return this.bD3(d)},
bD3(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$UU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&A.c()
s=new A.d_("local_qr_dep_"+1000*r,q.a,d,B.fm,B.f7,"Admin deposit ($"+A.dx(d)+")",null,null,B.ch,new A.Q(Date.now(),0,!1))
C.c6T(t.d,s)
q=t.e
q===$&&A.c()
r=A.z(q,x.o)
r.push(s)
w=3
return A.b(A.qQ(t.a.c,t.d,r,!0,null,null,null),$async$UU)
case 3:w=4
return A.b(t.zK(),$async$UU)
case 4:if(t.c==null){w=1
break}t.ku("Deposited $"+A.dx(d)+" to your local wallet.")
case 1:return A.h(u,v)}})
return A.i($async$UU,v)},
b0w(d){var w=null
return A.ch(w,w,!0,w,new C.doL(),d,w,!0,!0,x.N)},
U1(d){return this.bvj(d)},
bvj(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$U1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return A.b(t.UU(d.b),$async$U1)
case 5:w=1
break
case 4:s=d.c
t.ku(s==null?"Could not apply deposit.":s)
case 1:return A.h(u,v)}})
return A.i($async$U1,v)},
Dy(d){return this.cf_(d)},
cf_(d){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Dy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.zK(),$async$Dy)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return A.b(C.aYa(d,t.a.c),$async$Dy)
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
return A.b(t.b0w(r),$async$Dy)
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
return A.b(C.c6M(d,o,n.a,r,p),$async$Dy)
case 7:w=6
return A.b(t.U1(f),$async$Dy)
case 6:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Dy,v)},
Dz(d){return this.cf0(d)},
cf0(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Dz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.zK(),$async$Dz)
case 3:if(t.c==null){w=1
break}w=4
return A.b(C.c6L(d,t.a.c),$async$Dz)
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
return A.b(t.b0w(r),$async$Dz)
case 5:q=f
if(q==null||B.a.i(q).length===0){w=1
break}r=t.a.c
p=B.a.i(q)
o=t.e
o===$&&A.c()
n=t.d
n===$&&A.c()
w=7
return A.b(C.TR(o,n.a,d,r,p),$async$Dz)
case 7:w=6
return A.b(t.U1(f),$async$Dz)
case 6:case 1:return A.h(u,v)}})
return A.i($async$Dz,v)},
Nv(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.BR()){t.ku("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a9(s,!1).cp(A.eD(new C.doG(),!0,null,x.N)),$async$Nv)
case 3:r=e
if(r==null||B.a.i(r).length===0){w=1
break}w=B.a.a_(B.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return A.b(t.zl(new C.doH(t,r),"Applying deposit\u2026"),$async$Nv)
case 6:w=1
break
case 5:w=7
return A.b(t.zl(new C.doI(t,r),"Loading\u2026"),$async$Nv)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Nv,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=n?B.iZ:B.oU,l=n?B.c:B.M,k=n?B.aQ:B.aj,j=n?B.bG:B.x.j(0.06),i=x.p
j=A.B(A.a([A.aI(!1,o,!0,A.p(B.A,A.V(B.er,l,o,o,o,16),B.h,o,o,new A.o(j,o,o,o,o,o,B.a6),o,38,o,o,o,o,o,38),B.cH,!0,o,o,o,o,o,o,o,o,o,o,o,new C.doQ(d),o,o,o,o,o,o,o)],i),B.m,o,B.e,B.j,0,o,o)
w=A.d("Backup & Restore",o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,B.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=A.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,B.cq,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=A.D(new C.Zy(D.br9,"Download",E.a_D,u?o:p.gbI8(),o),1)
t=A.B(A.a([t,B.es,A.D(new C.Zy(B.j6,"Show QR",D.d0p,u?o:p.gbY1(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r
s=A.D(new C.Zy(D.bra,"Upload",B.a_6,u?o:p.gbY_(),o),1)
s=A.B(A.a([s,B.es,A.D(new C.Zy(B.iN,"Scan QR",D.cEa,u?o:p.gbY0(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r?o:p.gbXZ()
r=n?B.c.j(0.06):B.aS.j(0.08)
q=A.m(16)
q=A.a([A.cM(A.a([j,B.ay,w,B.P,v,B.ki,t,B.ay,s,B.ay,new C.bof(B.qr,"Enter Code",B.Zs,u,o),B.ki,A.p(o,A.B(A.a([A.V(B.hp,B.aS,o,o,o,18),B.aw,A.D(A.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,B.a3,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.F,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(r,o,o,q,o,o,B.n),o,o,o,o,B.iL,o,o,o)],i),o,Aa.Kh,o,o,B.ak,!1)],i)
if(p.r){j=n?B.hx:B.c
w=p.w
if(w==null)w="Working\u2026"
q.push(A.an(0,A.aD(!1,B.a1,!0,o,new A.C(B.zO,A.B(A.a([I.aIz,B.bd,A.D(A.d(w,o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.m,o,B.e,B.j,0,o,o),o),B.h,j,8,o,o,o,o,o,B.ad),o,o,0,0,o,o))}return A.ce(o,m,A.bq(!1,new A.am(B.W,o,B.a9,B.q,q,o),!0,!1,B.ah,!0,!0),o,!1,!1,o,o)}}
C.Zy.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ab(0,B.G,B.d.gaj(s).j(0.35),B.dn,16)],x.V),p=B.c.j(0.22)
return A.aD(!1,B.a1,!0,u,A.aI(!1,t,!0,A.p(v,A.v(A.a([A.p(v,A.V(w.c,B.c,v,v,v,30),B.h,v,v,new A.o(p,v,v,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.ab,A.d(w.d,v,v,v,v,v,v,B.r_,v,v,v)],x.p),B.m,v,B.b7,B.j,0,B.p),B.h,v,v,new A.o(v,v,v,r,q,new A.a3(B.ax,B.aC,B.w,s,v,v),B.n),v,140,v,v,B.c4,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.h,B.K,0,v,v,v,v,v,B.ad)}}
C.bof.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ab(0,B.G,B.d.gaj(s).j(0.35),B.dn,16)],x.V),p=B.c.j(0.22)
return A.aD(!1,B.a1,!0,u,A.aI(!1,t,!0,A.p(v,A.B(A.a([A.p(v,A.V(w.c,B.c,v,v,v,24),B.h,v,v,new A.o(p,v,v,v,v,v,B.a6),v,44,v,v,v,v,v,44),B.es,A.d(w.d,v,v,v,v,v,v,B.r_,v,v,v)],x.p),B.m,v,B.b7,B.j,0,v,v),B.h,v,v,new A.o(v,v,v,r,q,new A.a3(B.ax,B.aC,B.w,s,v,v),B.n),v,v,v,v,D.bj4,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.h,B.K,0,v,v,v,v,v,B.ad)}}
C.Yb.prototype={
S(){return new C.bfx()}}
C.bfx.prototype={
gatb(){var w=this.e
return w===$?this.e=this.a.d:w},
Z(){var w=this
w.a0()
w.P8()
w.f=A.dD(B.nm,new C.doU(w))},
p(){var w=this.f
if(w!=null)w.aa(0)
this.a2()},
P8(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$P8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return A.b(A.u7(q.e,q.f),$async$P8)
case 3:q=e.a
s=A.bUk(q[3],q[1],t.a.e,q[4])
w=4
return A.b(A.Mb(t.a.e,A.Iv(s.eF(),null,"  ")),$async$P8)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.n(new C.doR(t,r))
case 1:return A.h(u,v)}})
return A.i($async$P8,v)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=u?B.iZ:B.oU,s=u?B.hx:B.c,r=u?B.c:B.bg,q=A.eA(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,B.aLq,v,v,v,1,v,!0),p=A.m(24),o=A.H(B.aS.j(0.35),B.r,1),n=w.d,m=A.pl(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,B.c),l=A.d("Code: "+w.gatb(),v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=A.m(20),j=B.aS.j(0.12),i=A.m(20),h=x.p
i=A.aI(!1,k,!0,A.p(v,A.B(A.a([A.V(B.fD,B.aS,v,v,v,14),B.bp,A.d("Copy code",v,v,v,v,v,v,A.l(v,v,B.aS,v,v,v,v,v,v,v,v,12,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),B.m,v,B.e,B.R,0,v,v),B.h,v,v,new A.o(j,v,v,i,v,v,B.n),v,v,v,v,B.lY,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.doS(w,d),v,v,v,v,v,v,v)
return A.ce(q,t,new A.C(B.a8,A.v(A.a([A.D(A.p(v,A.v(A.a([B.P,m,B.bu,l,B.P,i,B.ay,A.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aj,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v)],h),B.m,v,B.b7,B.j,0,B.p),B.h,v,v,new A.o(s,v,o,p,v,v,B.n),v,v,v,v,B.a8,v,v,1/0),1),B.aO,new A.a5(1/0,v,A.bL(B.yt,new C.doT(d),A.bk(B.aS,v,v,v,v,B.fR,v,v,v,v,v,v)),v)],h),B.m,v,B.e,B.j,0,B.p),v),v,!1,!1,v,v)}}
C.Yc.prototype={
S(){return new C.bfy(A.yk(B.wl,B.n7,B.td))}}
C.bfy.prototype={
p(){this.d.p()
this.a2()},
B(d){var w=null
return A.ce(A.eA(w,w,w,!0,!0,B.x,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.f4T,w,w,w,1,w,!0),B.x,A.yj(this.d,B.bQ,new C.doV(this,d)),w,!1,!1,w,w)}}
C.acf.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.M(a0).ax.a===B.H,k=l?B.hx:B.c,j=l?B.c:B.M,i=l?B.aQ:B.aj,h=l?B.b9:B.e5,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=A.m(26)
w=A.H(B.aS.j(0.35),B.r,1)
v=A.a([new A.ab(0,B.G,B.aS.j(0.16),B.jQ,36)],x.V)
u=A.p(m,D.bx9,B.h,m,m,new A.o(m,m,m,A.m(18),B.a_C,D.bGi,B.n),m,58,m,m,m,m,m,58)
t=A.d("Restore local backup?",m,m,m,m,m,m,A.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,B.u,m,m,!0,m,-0.3,m,m,m,m,m,m),B.L,m,m)
s=A.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,A.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),B.L,m,m)
r=l?B.iZ:B.oU
q=A.m(18)
p=A.H(B.aS.j(0.22),B.r,1)
o=x.p
g=A.a([new C.Om("Account",B.a.i(this.d),i,j,m),B.T,new C.Om("Balance","$"+A.dx(g.d),i,j,m)],o)
if(d!=null&&B.a.i(d).length!==0)B.d.v(g,A.a([B.T,new C.Om("Investment",d,i,j,m)],o))
g.push(B.T)
g.push(new C.Om("Saved on",""+A.bB(f)+"/"+A.bO(f)+"/"+A.bw(f),i,j,m))
g.push(B.T)
g.push(new C.Om("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=A.p(m,A.v(g,B.F,m,B.e,B.j,0,B.p),B.h,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.c4,m,m,1/0)
r=B.aZ.j(l?0.14:0.12)
q=A.m(14)
p=A.H(B.aZ.j(0.35),B.r,1)
n=A.V(B.x5,l?B.aK:B.dl,m,m,m,16)
return A.ew(m,B.K,new A.d1(B.SO,A.bU(new A.C(B.wE,A.v(A.a([u,B.aO,t,B.P,s,B.bu,g,B.ay,A.p(m,A.B(A.a([n,B.aa,A.D(A.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,A.l(m,m,l?B.bH:B.j_,m,m,m,m,m,m,m,m,11.5,m,m,B.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),B.F,m,B.e,B.j,0,m,m),B.h,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.em,m,m,1/0),B.d3,A.B(A.a([A.D(A.dV(B.n_,new C.eGH(a0),A.db(m,m,m,m,m,m,m,m,m,j,m,m,B.cc,m,new A.b6(A.m(14),B.X),new A.ay(h,1,B.r,-1),m,m,m,m)),1),B.aw,A.D(A.bL(D.eQ8,new C.eGI(a0),A.bk(B.aS,m,m,m,m,m,B.cc,m,new A.b6(A.m(14),B.X),m,m,m)),2)],o),B.m,m,B.e,B.j,0,m,m)],o),B.m,m,B.e,B.R,0,B.p),m),new A.o(k,m,w,e,v,m,B.n),B.bb),m),m,m,m,B.eq,B.cZ,m,m,m)}}
C.Om.prototype={
B(d){var w=this,v=null
return A.B(A.a([new A.a5(92,v,A.d(w.c,v,v,v,v,v,v,A.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),A.D(A.d(w.d,v,v,v,v,v,v,A.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,B.I,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.F,v,B.e,B.j,0,v,v)}}
C.Xj.prototype={
S(){return new C.awU(new A.ap(B.as,$.av()),A.kb(!0,null,!0,!0,null,null,!1))}}
C.awU.prototype={
Z(){this.a0()
$.aT.x1$.push(new C.cZu(this))},
p(){var w=this.d
w.R$=$.av()
w.O$=0
this.e.p()
this.a2()},
bY3(){var w,v=this.c
v.toString
w=B.a.i(this.d.a.a)
A.a9(v,!1).M(w)
return null},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=u?B.hx:B.c,s=u?B.c:B.M,r=u?B.aQ:B.aj,q=u?B.iZ:B.oU,p=u?B.b9:B.e5,o=A.m(24),n=A.H(B.aS.j(0.35),B.r,1),m=A.a([new A.ab(0,B.G,B.aS.j(0.18),B.fF,32)],x.V),l=A.p(v,A9.aiN,B.h,v,v,new A.o(v,v,v,A.m(18),B.a_C,D.bJ4,B.n),v,56,v,v,v,v,v,56),k=A.d("Enter restore code",v,v,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,B.u,v,v,!0,v,-0.3,v,v,v,v,v,v),B.L,v,v),j=A.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),B.L,v,v),i=A.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,B.I,v,v,!0,v,8,v,v,v,v,v,v),h=A.a([new A.tK(A.ae("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bnK(new C.cZr())],x.G),g=A.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,B.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return A.ew(v,B.K,new A.d1(A1.Iq,A.bU(new A.C(B.wE,A.v(A.a([l,B.aO,k,B.P,j,B.dX,A.aK(!1,B.U,!1,v,!0,B.q,v,A.aL(),w.d,v,v,v,v,v,2,A.bn(v,v,v,B.DT,v,v,"",v,!0,new A.b3(4,A.m(16),new A.ay(p,1,B.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new A.b3(4,A.m(16),D.aQf),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.z,!0,v,!1,v,!1,w.e,B.ai,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.cZs(w),v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,i,!0,B.L,v,B.lE,v,v,v,v),B.dX,A.B(A.a([A.D(A.dV(B.n_,new C.cZt(d),A.db(v,v,v,v,v,v,v,v,v,s,v,v,B.cc,v,new A.b6(A.m(14),B.X),new A.ay(p,1,B.r,-1),v,v,v,v)),1),B.aw,A.D(A.bL(D.eTw,w.gbY2(),A.bk(B.aS,v,v,v,v,v,B.cc,v,new A.b6(A.m(14),B.X),v,v,v)),2)],f),B.m,v,B.e,B.j,0,v,v)],f),B.m,v,B.e,B.R,0,B.p),v),new A.o(t,v,n,o,m,v,B.n),B.bb),v),v,v,v,B.Kj,B.cZ,v,v,v)}}
C.alB.prototype={
S(){return new C.bfE(B.cB)},
hk(d){return this.x.$1(d)},
bn(){return this.y.$0()}}
C.bfE.prototype={
Z(){var w,v=this
v.a0()
w=v.a
w.toString
$.rL=$.rL+1
v.r=B.o.N(B.o.E(C.fjC(w.e,w.d.y2),1,600))
w=v.a
if(!J.lc(w.d.y2,w.e))v.r=C.hJd(v.a.e)
v.w=A.dD(B.h7,new C.dvf(v))},
p(){var w=this.w
if(w!=null)w.aa(0)
this.c9g()
C.aWY()
this.a2()},
c9g(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:B.k.E(r.e/w,0,1)
if(v<=0)return
u=A.xH(B.k.a9(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=B.o.u(1000*Date.now())
s=r.a
w.hk(new A.d_(t,s.c.a,u,B.fv,B.f7,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,B.ch,new A.Q(Date.now(),0,!1)))
r.a.bn()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.u4(u,q,"Left early \xb7 +$"+B.k.a9(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
IA(d,e){return this.ckQ(d,e)},
b0a(d){return this.IA(!1,d)},
ckP(d){return this.IA(d,"")},
ckQ(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$IA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}t.x=!0
s=t.w
if(s!=null)s.aa(0)
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
return A.b(C.bzL(s,C.bzp(),C.fK3(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$IA)
case 5:w=1
break
case 4:n=A.xH(B.k.a9(t.a.w*1.46*r,2))
m=r>=1
t.n(new C.dv6(t,n,r))
s=B.o.u(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new A.d_(s,p,n,B.fv,B.f7,q,null,null,B.ch,new A.Q(Date.now(),0,!1))
A.aeU(l,!0)
t.a.hk(l)
t.a.bn()
if(m)k="+$"+B.k.a9(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+B.k.a9(n,2)+" ("+B.k.U(r*100)+"% of the prize)"}q=t.a
C.u4(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return A.b(C.bzL(s,C.bzp(),C.fK3(),""+t.e+"/"+t.f,k,q,!0),$async$IA)
case 6:w=7
return A.b(C.aeM(t.a.f,k),$async$IA)
case 7:case 1:return A.h(u,v)}})
return A.i($async$IA,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.r
m===$&&A.c()
w=B.o.ak(m,60)
v=B.a.aS(B.o.u(B.o.F(m,60)),2,"0")
u=A.aF(n,n,n,n,B.aiQ,n,n,n,new C.dv9(d),n,n,n,n,n,n)
t=o.a
s=x.p
t=A.D(A.v(A.a([A.d(t.f,n,1,B.a2,n,n,n,B.la,n,n,n),A.d("Win $"+B.k.a9(t.w*1.46,2)+" \xb7 stake $"+B.k.a9(o.a.w,2),n,n,n,n,n,n,D.eFV,n,n,n)],s),B.F,n,B.e,B.j,0,B.p),1)
r=o.a.c.a
m=m<=10?B.aD:B.c.j(0.1)
q=A.m(99)
q=A.B(A.a([u,t,new C.an5(r,new C.dva(o),n),B.bp,A.dj(n,A.B(A.a([D.bBv,B.d7,A.d(""+w+":"+v,n,n,n,n,n,n,B.kk,n,n,n)],s),B.m,n,B.e,B.j,0,n,n),n,n,B.ba,new A.o(m,n,n,q,n,n,B.n),B.a1,n,n,n,B.ww,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
m=o.a
v=m.w
w=v*1.46
r=o.e/o.f
m=A.B(A.a([A.D(A.bu(A.m(99),A.m4(B.bG,n,n,9,n,r,new A.mo(B.d.gL(m.r),x.dw)),B.ao),1),B.aw,A.d(""+o.e+"/"+o.f,n,n,n,n,n,n,D.eOs,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
t=A.m(22)
u=A.a([B.d.gL(o.a.r).j(0.35),G.ab4],x.O)
p=o.x
return C.aMt(n,D.b8Y,A.bq(!0,A.v(A.a([new A.C(D.bl8,q,n),new C.LQ(w*r,w,v,n),new A.C(G.ade,m,n),A.D(new A.C(B.Vg,A.bu(t,A.bU(A.e1(V.h2Z(o.a.e,new V.yr(new C.dvb(o),new C.dvc(o),new C.dvd(o),o.d)),p,n),new A.o(n,n,n,n,n,new A.a3(B.aX,B.b1,B.w,u,n,n),B.n),B.bb),B.ao),n),1)],s),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0))}}
C.a4A.prototype={
B(d){var w=null,v=A.m(26),u=A.H(B.aZ.j(0.5),B.r,1),t=A.a([new A.ab(0,B.G,B.aZ.j(0.22),B.J,26)],x.V)
return A.ew(w,B.K,A.p(w,A.v(A.a([A.p(w,D.bvp,B.h,w,w,new A.o(B.aZ.j(0.16),w,A.H(B.aZ,B.r,2),w,w,w,B.a6),w,68,w,w,w,w,w,68),B.ay,D.f1b,B.P,A.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.P,A.d("The count starts again from zero next month.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.aO,new A.a5(1/0,w,A.bL(D.eQO,new C.c1x(d),A.bk(B.aZ,w,w,w,B.x,B.fR,w,w,new A.b6(A.m(14),B.X),w,w,w)),w)],x.p),B.m,w,B.e,B.R,0,B.p),B.h,w,w,new A.o(w,w,u,v,t,D.bGX,B.n),w,w,w,w,D.bju,w,w,w),w,w,w,B.adL,B.cZ,w,w,w)}}
C.al5.prototype={
S(){return new C.bfv(null,null)},
gX(d){return this.e}}
C.bfv.prototype={
Z(){var w,v=this,u=null
v.a0()
w=v.d=A.bi(u,B.zz,u,1,u,v)
w.d5()
w.dN$.K(0,new C.doq(v))
w=A.bi(u,B.lT,u,1,u,v)
w.cD(0)
v.e=w
w=A.bi(u,B.JL,u,1,u,v)
w.cD(0)
v.f=w
w.d5()
w.dN$.K(0,new C.dor(v))
if(v.a.c){v.d.cD(0)
v.e.bU(0)
v.f.bU(0)}},
bq(d){var w,v,u=this
u.bC(d)
w=u.a.c
if(w){v=u.d
v===$&&A.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){w=u.d
w===$&&A.c()
w.cD(0)
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
if(!(v!=null&&v.a!=null))w.cD(0)
w=u.f
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cD(0)}},
p(){var w=this,v=w.d
v===$&&A.c()
v.p()
v=w.e
v===$&&A.c()
v.p()
v=w.f
v===$&&A.c()
v.p()
w.bpd()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.Of[B.o.F(a9.r,5)]:b4
w=!b3&&b4==null?D.Of[B.o.F(a9.w,5)]:b0
b1=b4!=null
if(b1){b3=A.t(b4)
v=b4>0?"+"+b3:b3}else if(w!=null){b3=A.t(w)
if(w>0)b3="+"+b3
v=b3}else v="?"
if(b1)u=b4>0?B.dk:B.bO
else if(w!=null){b1=(w>0?B.dk:B.bO).j(0.45)
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
b3=A.a([A.e5(B.A,A.p(b0,b0,B.h,b0,b0,new A.o(b0,b0,b0,b0,A.a([new A.ab(6+e,B.G,B.aB.j(0.4+q*0.3),B.J,32+q*22),new A.ab(3,B.G,B.b6.j(0.2+p*0.25),B.J,40+p*16)],d),b0,B.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=A.p(b0,b0,B.h,b0,b0,new A.o(A.aq(B.bB,B.aK,B.o.F(a3,3)/2).j(a2),b0,b0,b0,A.a([new A.ab(0,B.G,B.aB.j(0.7),B.J,e)],d),b0,B.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(A.dP(new A.iy(A.vA(a4+a3),b0,B.A,!0,b0,a8,b0),new A.u(a6*a0+a5*b2*0.04,a7*a0)))}B.d.v(f,b3)}b3=b2*0.06
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
else{a2=A.aq(B.c,B.k_,q*0.45)
a2.toString
a2=A.a([a2,B.bN,B.cp],x.O)}a4=A.aq(B.bI,B.aB,q*0.65)
a4.toString
a4=A.H(a4,B.r,3)
e=A.a([new A.ab(0,B.G,B.x.j(0.3),D.dMZ,16)],e)
if(!a9.a.c)e.push(new A.ab(p*3,B.G,B.aB.j(0.3+q*0.4),B.J,24+p*16))
e.push(new A.ab(0,B.G,B.c.j(0.9),B.PG,0))
g=A.a([],g)
if(!a9.a.c)g.push(A.bZ(0,A.bU(b0,new A.o(b0,b0,b0,A.m(d),b0,new A.a3(new A.d6(-1+Math.cos(j)*0.8,-1),new A.d6(1,1),B.w,A.a([B.c.j(0),B.c.j(0.28+p*0.25),B.c.j(0)],x.O),b0,b0),B.n),B.bb),0,0,0))
g.push(A.an(b0,A.p(b0,b0,B.h,b0,b0,new A.o(b0,b0,b0,A.m(6),b0,new A.a3(B.a4,B.a7,B.w,A.a([B.c.j(0.95),B.c.j(0)],x.O),b0,b0),B.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=A.a([new A.cL(B.x.j(0.18),B.dE,5)],x.C)
if(!a9.a.c)d.push(new A.cL(B.aB.j(0.4+q*0.35),B.J,12+p*10))
g.push(A.au(A.w8(A.d(v,b0,b0,b0,b0,b0,b0,A.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,B.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),B.ba,B.ji,b3),b0,b0,b0))
f.push(A.dP(A.fo(B.A,A.p(b0,new A.am(B.W,b0,B.a9,B.q,g,b0),B.h,b0,b0,new A.o(b0,b0,a4,a1,e,new A.a3(B.ax,B.aC,B.w,a2,b0,b0),B.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new A.u(0,n)))
return new A.a5(h,h,new A.am(B.A,b0,B.a9,B.h,f,b0),b0)}}
C.aI7.prototype={
aP(){this.aW()
this.aV()
this.dD()},
p(){var w=this,v=w.b0$
if(v!=null)v.a1(0,w.gdB())
w.b0$=null
w.a2()}}
C.LQ.prototype={
B(d){var w=null,v=new C.c3v(),u=v.$3("STAKE","$"+B.k.a9(this.e,2),B.c),t=A.m(18),s=A.H(B.br.j(0.7),B.r,1.4),r=A.a([new A.ab(0,B.G,B.aS.j(0.35),B.J,14)],x.V),q=x.p
return new A.C(B.K2,A.B(A.a([u,A.p(w,A.v(A.a([D.f_W,A.mE(new C.c3u(),w,B.ba,B.no,w,new A.bl(w,this.c,x.e7),x.gR)],q),B.m,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(w,w,s,t,r,D.ajB,B.n),w,w,w,w,B.Ke,w,w,w),v.$3("FULL WIN","$"+B.k.a9(this.d,2),B.bH)],q),B.m,w,B.e,B.j,0,w,w),w)}}
C.an5.prototype={
B(d){var w=null,v=A.m(99),u=A.H(B.jf.j(0.7),B.r,1)
return A.p(w,A.B(A.a([D.btT,B.d7,C.anV(this.d,B.oy,this.c)],x.p),B.m,w,B.e,B.R,0,w,w),B.h,w,w,new A.o(w,w,u,v,w,D.ajB,B.n),w,w,w,w,B.Ko,w,w,w)},
gdT(){return this.c}}
C.LY.prototype={
S(){return new C.bg8(null,null)}}
C.bg8.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,B.lT,null,1,null,v)
v.d!==$&&A.aQ()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.bpN()},
aJM(d,e){var w=this.a.d,v=A.U(w).k("J<1,n>"),u=A.z(new A.J(w,C.hP8(),v),v.k("ai.E"))
w=this.d
w===$&&A.c()
return A.c3(w,new C.dNx(this,u),null)},
B(d){var w=null
if(this.a.e)return A.ce(w,D.aaw,A.bq(!0,this.aJM(0,d),!0,!1,B.ah,!0,!0),w,!1,!1,w,w)
return this.aJM(0,d)},
atM(d,e,f){var w=null,v=f.j(0.16),u=A.m(10)
return A.B(A.a([A.p(w,A.V(d,f,w,w,w,17),B.h,w,w,new A.o(v,w,w,u,w,w,B.n),w,32,w,w,w,w,w,32),B.aw,A.D(A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,B.a3,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.aIG.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.ab5.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=A.aG(d,B.e3,o).w.r.d,m=this.c,l=J.cA(m),k=l.eE(m,new C.dNA()).gJ(0),j=new A.e3(l.di(m,new C.dNB(),x.cD),x.bG).cG(0,0,new C.dNC())
o=A.aG(d,B.bR,o).w
w=x.p
v=A.a([B.T,A.p(p,p,B.h,p,p,new A.o(B.b9,p,p,A.m(2),p,p,B.n),p,4,p,p,p,p,p,42),new A.C(B.ads,A.B(A.a([A.p(p,D.bDP,B.h,p,p,new A.o(p,p,p,A.m(14),A.a([new A.ab(0,B.G,B.fc.j(0.45),B.J,14)],x.V),D.ajv,B.n),p,44,p,p,p,p,p,44),B.bd,D.bna,A.aF(p,p,p,p,B.l4,p,p,p,new C.dND(d),p,p,p,p,p,p)],w),B.m,p,B.e,B.j,0,p,p),p)],w)
if(l.gci(m)){u=C.fF9("GAMES",""+l.gJ(m),B.ex)
t=C.fF9("WON",""+k,B.jf)
s=j>=0
r=s?"+":"-"
q=C.bwf(j)
s=s?B.jf:B.fj
v.push(new A.C(D.bhI,A.B(A.a([u,B.aa,t,B.aa,C.fF9("NET",r+q,s)],w),B.m,p,B.e,B.j,0,p,p),p))}if(l.gai(m))v.push(new A.C(new A.N(24,36,24,24+n),A.v(A.a([A.V(D.bpV,B.c.j(0.35),p,p,p,52),B.ab,A.d("No game receipts yet",p,p,p,p,p,p,A.l(p,p,B.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.ar,A.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,A.l(p,p,B.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),B.L,p,p)],w),B.m,p,B.e,B.j,0,B.p),p))
else v.push(new A.dm(1,B.cl,A.hH(p,new C.dNE(this),l.gJ(m),new A.N(14,2,14,16+n),p,B.ak,new C.dNF(),!1),p))
return A.p(p,A.v(v,B.m,p,B.e,B.R,0,B.p),B.h,p,new A.aW(0,1/0,0,o.a.b*0.88),D.aT1,p,p,p,p,p,p,p,p)}}
C.ab4.prototype={
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
t=s}if(w)r=B.cD
else if(u)r=B.dB
else{w=v?B.aK:B.br
r=w}q=h.gbbi()
w=new C.dNz()
s=A.m(14)
p=A.a([r.j(0.13),D.b86],x.O)
o=A.H(r.j(0.4),B.r,1)
n=A.V(g?B.m2:B.ct,r,i,i,i,16)
m=A.D(A.d(h.b,i,1,B.a2,i,i,i,B.vm,i,i,i),1)
l=r.j(0.2)
k=A.m(99)
k=A.p(i,A.d(t,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,B.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),B.h,i,i,new A.o(l,i,i,k,i,i,B.n),i,i,i,i,D.bl3,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bwf(q)}else{l=g?"+":"-"
l+=C.bwf(h.d)}j=x.p
l=A.B(A.a([n,B.bp,m,k,B.bp,A.d(l,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.m,i,B.e,B.j,0,i,i)
k=C.dNy("STAKE",w.$1(h.w),B.c)
w=A.B(A.a([k,B.d7,C.dNy("PAID",C.bwf(g?h.d:0),r),B.d7,C.dNy("BEFORE",w.$1(h.x),B.ex),B.d7,C.dNy("AFTER",w.$1(h.y),B.dB)],j),B.m,i,B.e,B.j,0,i,i)
n=C.hKL(h.f)
h=B.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return A.p(i,A.v(A.a([l,B.ar,w,B.av,A.d(n+h,i,1,B.a2,i,i,i,A.l(i,i,B.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.ag,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(i,i,o,s,i,new A.a3(B.ax,B.aC,B.w,p,i,i),B.n),i,i,i,i,B.lq,i,i,i)}}
C.axw.prototype={
S(){return new C.bbS(B.cB,null,null)}}
C.bbS.prototype={
Z(){var w,v,u,t=this
t.a0()
w=A.bi(null,B.lU,null,1,null,t)
w.cD(0)
t.d=w
v=J.e_(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.abu(40+w.af()*260,-20+w.af()*40,1.5+w.af()*3,w.af()*3.141592653589793,0.7+w.af()*0.3,12+w.af()*16,[X.a0C,B.qE,B.cQ,B.c][w.aB(4)],[B.hW,B.l_,B.dQ,B.Ee][w.aB(4)])
t.f=v},
p(){var w=this.d
w===$&&A.c()
w.p()
this.boI()},
B(d){var w=null,v=this.d
v===$&&A.c()
return A.au(A.aD(!1,B.a1,!0,w,A.c3(v,new C.d5b(this,d),w),B.h,B.K,0,w,w,w,w,w,B.ad),w,w,w)}}
C.abu.prototype={
gX(d){return this.f}}
C.aHD.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.aXL.prototype={
B(d){return new A.tU(new C.c5M(this),null,new A.h4(A.a([$.xS(),$.a0N()],x.U)),null)},
gdT(){return this.c}}
C.Ls.prototype={
c3o(){if(this.c!=null)this.n(new C.bVE())}}
C.Hc.prototype={}
C.amy.prototype={
S(){return new C.aAj(B.cB,new A.ap(B.as,$.av()))},
cwG(){return this.d.$0()},
cHR(){return this.f.$0()},
cHF(d,e){return this.r.$2(d,e)},
cIt(d,e,f){return this.w.$3$bonus(d,e,f)},
gdT(){return this.c}}
C.aAj.prototype={
p(){var w=this.e
w.R$=$.av()
w.O$=0
this.a2()},
apP(){var w=A.d9(B.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
zM(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$zM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.apP()
if(s<2){t.atN("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cwG()<s){t.atN("Insufficient balance.")
w=1
break}if(!t.a.cHF(s,"Dice Roll bet")){t.atN("Could not place bet.")
w=1
break}t.a.toString
t.n(new C.dGC(t))}w=3
return A.b(C.c2G(t.a.e),$async$zM)
case 3:r=t.a
q=C.hMP(r.e,r.c,t.d)
t.a.cHR()
A.aWl(t.a.e)
t.n(new C.dGD(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return A.b(A.bN(new A.b8(1000*(40+p*6)),null,r),$async$zM)
case 7:if(t.c==null){w=1
break}new C.dGE(t).$0()
t.c.e3()
case 5:++p
w=4
break
case 6:w=8
return A.b(A.bN(B.jj,null,r),$async$zM)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.fIS(q)
t.n(new C.dGF(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cIt(m,"Dice Roll "+n,o)
t.n(new C.dGG(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+B.k.a9(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.a9(m,2)+" added to your balance"
w=12
return A.b(C.bzL(r,C.bzp(),new C.dGH(t),n,k,"YOU WIN!",!0),$async$zM)
case 12:w=13
return A.b(C.aeM("Dice Roll",l?"+$"+B.k.a9(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.a9(m,2)+" added to your balance"),$async$zM)
case 13:w=10
break
case 11:w=14
return A.b(C.bzL(r,C.bzp(),new C.dGI(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$zM)
case 14:C.u4(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return A.h(u,v)}})
return A.i($async$zM,v)},
atN(d){var w=null,v=this.c
if(v==null)return
v.H(x.q).f.P(A.b0(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.apP(),d=x.w,a0=A.aG(a2,B.e3,d).w,a1=Math.min(A.aG(a2,B.bR,d).w.a.a*0.44,200)
d=A.hh(Q.ahY,D.f6B,new C.dGL(a2),f)
w=A.m(20)
v=g.a
u=v.c
t=x.p
w=A.B(A.a([d,B.b8,A.p(f,A.B(A.a([B.ahV,B.bp,C.anV(v.d,B.jU,u)],t),B.m,f,B.e,B.R,0,f,f),B.h,f,f,new A.o(B.cQ,f,f,w,f,f,B.n),f,f,f,f,B.lr,f,f,f)],t),B.m,f,B.e,B.j,0,f,f)
u=g.z
v=A.X(140,D.Uo.l()>>>16&255,D.Uo.l()>>>8&255,D.Uo.l()&255)
d=A.m(18)
s=A.H(A.X(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
r=g.x
d=A.D(A.p(f,A.au(new C.al5(r,r?g.w:g.r,a1,f),f,f,f),B.h,f,f,new A.o(v,f,s,d,f,f,B.n),f,f,f,f,f,f,f,1/0),1)
v=A.d("Roll lands on one of:",f,f,f,f,f,f,A.l(f,f,B.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,B.a3,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=A.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.Of[q]
o=C.fIS(p)
n=p>0?B.bm:B.aD
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new A.b1(10,10)
i=m?B.c:n.j(0.7)
h=new A.ay(i,m?2.5:1.2,B.r,-1)
n=m?A.a([new A.ab(1,B.G,n.j(0.65),B.J,14)],r):B.a_y
m=m?18:15
s.push(new A.bH(1,B.bo,new A.C(B.jH,A.p(B.A,new A.w(o,f,new A.F(!0,B.c,f,f,f,f,m,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f),B.h,f,f,new A.o(k,f,new A.c1(h,h,h,h),new A.bv(j,j,j,j),n,f,B.n),f,l,f,f,f,f,f,f),f),f))}d=A.a([d,B.ab,v,B.ar,A.B(s,B.m,f,B.e,B.j,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.fIS(v)
s=g.r
s.toString
d.push(new A.C(B.ky,A.d("Landed on "+v,f,f,f,f,f,f,A.l(f,f,s>0?B.bh:B.cD,f,f,f,f,f,f,f,f,20,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(B.T)
d.push(new A.bI(B.a4,f,f,A.d("Bet Amount",f,f,f,f,f,f,A.l(f,f,A.X(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,B.I,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(B.ar)
v=x.bL
v=A.z(new A.J(A.a([2,5,10,25],x.n),new C.dGM(g),v),v.k("ai.E"))
s=g.y
r=A.X(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v.push(A.D(new A.C(B.VU,A.aK(f,B.U,!1,f,!0,B.q,f,A.aL(),g.e,f,f,f,f,f,2,A.bn(f,new A.b3(4,A.m(10),B.X),f,B.jG,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,B.lb,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),B.z,!0,f,!0,!s,!1,f,B.ai,f,f,f,f,f,B.dN,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,B.a8,f,f,f,f,f,f,f,f,f,f,f,B.hg,!0,B.L,f,B.am,f,f,f,f),f),1))
d.push(A.B(v,B.m,f,B.e,B.j,0,f,f))
d.push(B.P)
d.push(new A.bI(B.a7,f,f,A.d("Perfect Score Profit: +$"+B.k.a9(g.apP()*0.46,2),f,f,f,f,f,f,D.eHQ,f,f,f),f))
d.push(B.T)
d=A.D(new A.C(B.is,A.v(d,B.ag,f,B.e,B.j,0,B.p),f),1)
v=g.x?f:g.gchA()
s=A.fh(f,f,B.aB,f,f,f,f,f,f,B.c,f,f,f,f,new A.b6(A.m(14),B.X),f,f,f,f,f)
return C.aMt(f,D.Uu,A.bq(!0,A.v(A.a([new A.C(D.blt,w,f),new C.LQ(u,e*1.46,e,f),A.D(A.v(A.a([d,new A.C(new A.N(14,4,14,8+a0.r.d),new A.a5(1/0,52,A.i5(A.d("\ud83c\udfb2 ROLL ($"+B.k.a9(e,2)+")",f,f,f,f,f,f,B.kO,f,f,f),v,s),f),f)],t),B.m,f,B.e,B.j,0,B.p),1)],t),B.m,f,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0))}}
C.anb.prototype={
S(){return new C.aAA(B.ke,new A.ap(B.as,$.av()))},
cHx(d){return this.e.$1(d)}}
C.aAA.prototype={
gaoE(){var w,v=this.r
if(v===$){w=B.o.u(1e4+B.cB.aB(89999))
this.r!==$&&A.bJ()
this.r=w
v=w}return v},
gOB(){var w=this.d,v=this.a
return w===B.ke?B.a.i(v.f.a):B.a.i(v.f.b)},
ga6A(){var w=this.gOB(),v=A.ae("^\\$+",!0,!1,!1,!1),u=B.a.i(A.aJ(w,v,""))
return u.length===0?"":"$"+u},
p(){var w=this.e
w.R$=$.av()
w.O$=0
this.a2()},
Hw(d,e){return this.bCd(d,e)},
bCd(d,e){var w=0,v=A.j(x.H),u=this,t
var $async$Hw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.fE(new A.fx(d)),$async$Hw)
case 2:A.eH()
t=u.c
if(t!=null)t.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$Hw,v)},
Ow(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Ow=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gOB().length===0){r.c.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}A.j8()
o=B.k.a9(r.a.d,2)
q=r.d===B.ke?A.cr("https://cash.app/"+r.ga6A()+"/"+o,0,null):A.cr("bitcoin:"+r.gOB(),0,null)
t=4
w=7
return A.b(A.iK(q,B.fg,null),$async$Ow)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===B.ke?r.ga6A():r.gOB()
w=10
return A.b(r.Hw(n,r.d===B.ke?"Cash App tag":"Bitcoin address"),$async$Ow)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===B.ke?r.ga6A():r.gOB()
w=11
return A.b(r.Hw(n,r.d===B.ke?"Cash App tag":"Bitcoin address"),$async$Ow)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ow,v)},
Zb(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hR().bc0(B.ez),$async$Zb)
case 3:r=e
if(r==null){w=1
break}w=4
return A.b(r.f8(),$async$Zb)
case 4:s=e
t.n(new C.dNX(t,B.a.c7(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return A.h(u,v)}})
return A.i($async$Zb,v)},
c_P(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===B.ke?C.h4f(s.a):B.a.i(s.a)
if(r.length===0){t=v.d===B.ke?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.H(x.q).f.P(A.b0(u,u,u,u,u,B.q,u,A.d(t,u,u,u,u,u,u,u,u,u,u),u,B.S,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.H(x.q).f.P(A.b0(u,u,u,u,u,B.q,u,A.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,B.S,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new A.Q(Date.now(),0,!1).u(0)
w=v.a
t.cHx(new A.d_(s,w.c.a,w.d,B.fm,v.d,r,v.f,v.gaoE(),B.dp,new A.Q(Date.now(),0,!1)))
w=v.c
w.toString
A.iG(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.eA(o,o,o,!0,!0,B.z8,o,1,!0,o,0,!1,o,!1,B.c,o,A.aF(o,o,o,o,B.F0,o,o,o,new C.dNY(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.eSj,o,o,o,1,o,!0),m=A.m(26),l=A.H(D.eD.j(0.25),B.r,1),k=x.V,j=A.a([new A.ab(0,B.G,B.aW.j(0.25),B.eQ,24)],k),i=x.p
j=A.p(o,A.v(A.a([A.d("YOU'RE ADDING",o,o,o,o,o,o,A.l(o,o,B.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,B.I,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),B.ar,A.f_(B.A,A.d("$"+A.dx(p.a.d),o,o,o,o,o,o,D.eCn,o,o,o),B.h,B.dq),B.ar,A.d("to your Growth Income wallet",o,o,o,o,o,o,A.l(o,o,D.eD.j(0.85),o,o,o,o,o,o,o,o,12,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(o,o,l,m,j,D.bJT,B.n),o,o,o,o,D.bj8,o,o,o)
m=p.bWR()
l=p.axn(1,"Send the money to NGMY Pay",p.c_N())
w=p.axn(2,"Put this code in the payment note",p.bAQ())
v=p.d===B.ke
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=A.l(o,o,B.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.axn(3,u,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.e,o,o,o,o,o,2,A.bn(o,o,o,o,o,o,o,o,!0,new A.b3(4,A.m(18),new A.ay(B.c.j(0.08),1,B.r,-1)),o,o,o,o,o,B.ry,!0,o,o,o,o,new A.b3(4,A.m(18),D.aQa),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.eDI,t,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,B.r_,!0,B.a5,o,B.am,o,o,o,o))
r=p.f!=null
v=r?8:22
u=A.m(20)
s=r?D.eD:B.c
s=A.H(s.j(r?0.5:0.12),B.r,1.4)
q=r?A.v(A.a([A.bu(A.m(14),new A.d1(D.aRy,new A.Ds(p.f,o),o),B.ao),B.P,D.eoU,B.av],i),B.m,o,B.e,B.j,0,B.p):A.v(A.a([A.p(o,D.bD2,B.h,o,o,new A.o(D.eD.j(0.12),o,o,o,o,o,B.a6),o,54,o,o,o,o,o,54),B.T,D.eX9,B.d4,A.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a3,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p)
v=p.b1y(4,"Screenshot of your payment",A.aH(o,A.p(o,q,B.h,o,o,new A.o(B.ry,o,s,u,o,o,B.n),o,o,o,o,new A.N(v,v,v,v),o,o,o),B.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcb5(),o,o,o,o,o,o,!1,B.ae),!0)
u=A.d(p.a.r,o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a3,o,1.4,!0,o,o,o,o,o,o,o,o),B.L,o,o)
s=A.m(18)
k=A.a([new A.ab(0,B.G,B.aW.j(0.45),B.dn,18)],k)
return A.ce(n,B.z8,A.au(new A.d1(B.a77,A.cM(A.a([j,B.bu,m,B.bu,l,w,t,v,B.ar,u,B.aO,new A.a5(o,56,A.bU(A.lh(D.bBK,D.f5V,p.gc_O(),A.fh(o,o,B.K,o,o,o,o,o,o,B.c,o,o,o,B.K,new A.b6(A.m(18),B.X),o,o,o,o,o)),new A.o(o,o,o,s,k,D.bIu,B.n),B.bb),o)],i),o,D.biD,o,o,B.ak,!1),o),o,o,o),o,!1,!1,o,o)},
bWR(){var w=null,v=new C.dNT(this),u=A.m(18),t=A.H(B.c.j(0.06),B.r,1)
return A.p(w,A.B(A.a([v.$3(B.ke,B.hT,"Cash App"),B.eA,v.$3(B.a23,D.ahF,"Bitcoin")],x.p),B.m,w,B.e,B.j,0,w,w),B.h,w,w,new A.o(B.ry,w,t,u,w,w,B.n),w,w,w,w,B.lZ,w,w,w)},
b1y(d,e,f,g){var w,v=null,u=x.p,t=A.a([A.p(B.A,A.d(""+d,v,v,v,v,v,v,D.eIx,v,v,v),B.h,v,v,D.aSi,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(A.D(A.p(v,v,B.h,D.eD.j(0.18),v,v,v,v,v,B.wu,v,v,v,2),1))
t=A.v(t,B.m,v,B.e,B.j,0,B.p)
w=g?12:20
return new A.L0(A.B(A.a([new A.a5(34,v,t,v),B.aw,A.D(new A.C(new A.N(0,0,0,w),A.v(A.a([new A.C(B.Vd,A.d(e,v,v,v,v,v,v,A3.R3,v,v,v),v),f],u),B.ag,v,B.e,B.j,0,B.p),v),1)],u),B.ag,v,B.e,B.j,0,v,v),v)},
axn(d,e,f){return this.b1y(d,e,f,!1)},
c_N(){var w,v,u,t,s=this,r=null,q=s.d===B.ke?s.ga6A():s.gOB(),p=A.m(20),o=A.m(20),n=s.d===B.ke,m=n?D.bHo:D.bJd,l=A.a([new A.ab(0,B.G,(n?D.aaK:D.TG).j(0.35),B.cs,16)],x.V),k=A.m(12)
n=s.d===B.ke
w=n?B.hT:D.ahF
k=A.p(r,A.V(w,n?D.aaK:D.TG,r,r,r,30),B.h,r,r,new A.o(B.c,r,r,k,r,r,B.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=A.d(n,r,r,r,r,r,r,A.l(r,r,B.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===B.ke
t=u?22:13
v=A.d(v,r,1,B.a2,r,r,r,A.l(r,r,B.c,r,r,r,r,r,r,r,r,t,r,r,B.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=A.D(A.v(A.a([n,B.bA,v,B.av,A.B(A.a([D.byF,B.d7,A.d(s.d===B.ke?"Tap to pay $"+A.dx(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,B.vn,r,r,r)],u),B.m,r,B.e,B.j,0,r,r)],u),B.F,r,B.e,B.j,0,B.p),1)
return A.aD(!1,B.a1,!0,r,A.aI(!1,p,!0,A.es(A.B(A.a([k,B.bd,v,A.aF(r,r,r,r,D.bxK,r,r,r,w?r:new C.dNW(s,q),r,r,r,r,"Copy",r)],u),B.m,r,B.e,B.j,0,r,r),r,new A.o(r,r,r,o,l,m,B.n),r,B.ad8,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gc6s(),r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ad)},
bAQ(){var w,v,u,t,s,r,q,p,o=null,n=A.m(20),m=A.H(B.b3.j(0.35),B.r,1),l=x.p,k=A.a([],l)
for(w=this.gaoE().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new A.b1(12,12)
q=A.a([B.b3.j(0.28),B.b3.j(0.08)],u)
p=new A.ay(B.ex.j(0.4),1,B.r,-1)
k.push(A.p(B.A,new A.w(s,o,B.C4,o,o,o,o,o,o,o,o,o),B.h,o,o,new A.o(o,o,new A.c1(p,p,p,p),new A.bv(r,r,r,r),o,new A.a3(B.aX,B.b1,B.w,q,o,o),B.n),o,52,o,B.jH,o,o,o,42))}return A.p(o,A.v(A.a([A.B(k,B.m,o,B.b7,B.j,0,o,o),B.ab,A.B(A.a([A.D(A.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,A.l(o,o,B.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,B.a3,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aa,A.hh(B.Yy,D.f7D,new C.dNS(this),A.fr(o,o,o,o,o,o,o,o,o,o,o,B.ex,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),B.m,o,B.e,B.j,0,o,o)],l),B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(B.ry,o,m,n,o,o,B.n),o,o,o,o,B.bC,o,o,o)}}
C.qL.prototype={
ac(){var w=this
return A.E(["id",w.a,"title",w.b,"start",w.c.ab(),"end",w.d.ab(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.qM.prototype={
ac(){var w=this
return A.E(["id",w.a,"when",w.b.ab(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gTB(){var w=this,v=A.a([],x.s),u=w.d
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
u=w.c
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
v.push(C.fQu(w.b))
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
C.ia.prototype={
ac(){var w,v=this,u=A.T(x.N,x.z)
u.m(0,"id",v.a)
u.m(0,"question",v.b)
w=J.b5(v.c,new C.c4L(),x.P)
w=A.z(w,w.$ti.k("ai.E"))
u.m(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.m(0,"thumbnailPath",w)
u.m(0,"printable",v.e)
u.m(0,"sortOrder",v.f)
return u}}
C.hW.prototype={
ai0(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.hW(v,u,t,s,r,h==null?w.f:h)},
b6Q(d){var w=null
return this.ai0(w,w,w,w,d,w)},
cAg(d,e,f){return this.ai0(d,e,null,null,null,f)},
b6P(d){var w=null
return this.ai0(w,w,w,d,w,w)},
czW(d,e){var w=null
return this.ai0(w,w,d,w,e,w)},
ac(){var w=this,v=C.hyD(w.c),u=w.e,t=A.U(u).k("J<1,a1<n,@>>")
u=A.z(new A.J(u,new C.c4J(),t),t.k("ai.E"))
return A.E(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.b5w.prototype={}
C.Tu.prototype={
S(){return new C.aAM(new A.ap(B.as,$.av()),A.me(0,null,null),A.a([],x.m))},
Sb(d){return this.d.$1(d)}}
C.aAM.prototype={
Z(){var w,v=this
v.a0()
w=J.b5(v.a.c,new C.dRC(),x.i)
w=A.z(w,w.$ti.k("ai.E"))
B.d.b_(w,new C.dRD())
v.d=w
v.HG()},
p(){var w=this.w
w.R$=$.av()
w.O$=0
this.x.p()
this.a2()},
abo(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$abo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.HG()
u.n(new C.dRw(u))
t=u.a
t.toString
s=u.d
s===$&&A.c()
w=2
return A.b(t.Sb(s),$async$abo)
case 2:r=e
if(u.c!=null){u.n(new C.dRx(u))
t=u.c.H(x.q).f
s=A.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.P(A.b0(null,null,null,r?B.dk:B.aD,null,B.q,null,s,null,B.S,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$abo,v)},
a5N(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a5N=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&A.c()
s=new C.hW(q,"New Category",B.Ex,4284773515,D.as2,p.length)
t.n(new C.dRf(t,s))
t.HG()
p=t.c
if(p==null){w=1
break}w=3
return A.b(A.ch(null,null,!0,null,new C.dRg(s),p,null,!0,!0,x.i),$async$a5N)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.dRh(t,q,r))
case 1:return A.h(u,v)}})
return A.i($async$a5N,v)},
a_8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a_8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=B.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.n(new C.dRt(t,p))
q.bJ(0,B.c0)
q=t.a.e
s=t.d
s===$&&A.c()
w=3
return A.b(C.c4G(p,q,s),$async$a_8)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.dRu(t,r))
$.aT.x1$.push(new C.dRv(t))
case 1:return A.h(u,v)}})
return A.i($async$a_8,v)},
a7J(d){return this.bGK(d)},
bGK(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a7J=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&A.c()
t=r[d]
r=u.c
r.toString
w=2
return A.b(A.ch(null,null,!0,null,new C.dRn(t),r,null,!0,!0,x.i),$async$a7J)
case 2:s=f
if(s!=null)u.n(new C.dRo(u,d,s))
return A.h(null,v)}})
return A.i($async$a7J,v)},
bEC(d){this.n(new C.dRm(this,d))
this.HG()},
HG(){var w,v,u=this.d
u===$&&A.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].b6Q(v)},
c3U(d,e){var w={}
w.a=e
this.n(new C.dRs(w,this,d))},
WH(d){return this.bVM(d)},
bVM(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$WH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=A.eD(new C.dRr(u,d),!1,null,x.H)
w=2
return A.b(A.a9(s,!1).cp(t),$async$WH)
case 2:return A.h(null,v)}})
return A.i($async$WH,v)},
bx7(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?A.a([B.fw,B.bj],l):A.a([B.pY,B.ev],l)
w=A.m(16)
v=A.H(m?B.d6.j(0.35):B.dB,B.r,1)
u=A.V(B.dQ,m?B.dB:B.e4,n,n,n,n)
t=A.D(A.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,A.l(n,n,m?B.aN:B.M,n,n,n,n,n,n,n,n,n,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.WY:A8.KJ
r=x.p
s=A.a([A.aI(!1,n,!0,A.B(A.a([u,B.aa,t,A.V(s,m?B.bI:B.aj,n,n,n,n)],r),B.m,n,B.e,B.j,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dRj(o),n,n,n,n,n,n,n)],r)
if(o.r){u=A.a([B.T],r)
t=o.y
if(t.length!==0){q=(m?D.rm:B.c).j(0.65)
p=A.m(12)
u.push(A.p(n,A.jX(!0,n,o.x,new C.dRk(o,d),t.length,n,n,n,n,!1,!1),B.h,n,B.a72,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.ck,n,n,n))}u.push(B.P)
t=o.w
q=A.l(n,n,m?B.aN:B.M,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=A.l(n,n,m?B.bI:B.aj,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?B.bj:B.aN
q=A.D(A.aK(n,B.U,!1,n,!0,B.q,n,A.aL(),t,n,n,n,n,n,2,A.bn(n,new A.b3(4,A.m(14),B.X),n,B.eN,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.dRl(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,q,!0,B.a5,n,B.am,n,n,n,n),1)
m=o.f?n:o.gchN()
p=A.bk(B.bk,n,n,n,n,n,B.iL,n,n,n,n,n)
u.push(A.B(A.a([q,new A.Hr(t,B.bk,n),B.d7,A.bL(o.f?B.pz:D.ahO,m,p)],r),B.dH,n,B.e,B.j,0,n,n))
B.d.v(s,u)}return A.dj(n,A.v(s,B.ag,n,B.e,B.j,0,B.p),n,n,B.ba,new A.o(n,n,v,w,n,new A.a3(B.a4,B.a7,B.w,l,n,n),B.n),B.io,n,n,B.DQ,B.bC,n,n,n)},
B(d){var w,v=this,u=null,t=A.M(d).ax.a===B.H,s=new C.b5w(t),r=t?B.d9:B.bN,q=t?B.d9:u,p=t?B.aN:B.M,o=A.d("Help Topics Admin",u,u,u,u,u,u,A.l(u,u,t?B.aN:B.M,u,u,u,u,u,u,u,u,u,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gc_T()
if(n)n=B.QB
else n=A.V(B.wZ,t?B.aN:B.M,u,u,u,u)
w=x.p
o=A.eA(A.a([A.hh(n,A.d("Save",u,u,u,u,u,u,A.l(u,u,t?B.aN:B.M,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=R.aRs(B.aL,u,O.SZ,B.nz,D.f4n,v.gbtA())
q=v.bx7(s)
n=A.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,A.l(u,u,t?B.bI:B.aj,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&A.c()
return A.ce(o,r,A.v(A.a([q,new A.C(B.DQ,n,u),A.D(H.fUR(!1,new C.dRB(v,s),m.length,v.gc3T(),D.bht,u,!1),1)],w),B.ag,u,B.e,B.j,0,B.p),u,!1,!1,p,u)}}
C.NP.prototype={
S(){return new C.b7m()}}
C.b7m.prototype={
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
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=r?D.rm:B.c,p=A.d("Edit category",s,s,s,s,s,s,A.l(s,s,r?B.c:B.bg,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&A.c()
o=A.aK(s,B.U,!1,s,!0,B.q,s,A.aL(),o,s,s,s,s,s,2,D.bEJ,B.z,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,A.l(s,s,r?B.c:B.bg,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,B.a5,s,B.am,s,s,s,s)
w=x.aS
w=A.z(new A.J(D.bKe,new C.cFG(t),w),w.k("ai.E"))
w=A.c9(B.bJ,w,B.bx,8,8)
v=x.gN
v=A.z(new A.J(D.cGA,new C.cFH(t),v),v.k("ai.E"))
u=x.p
v=A.ci(A.v(A.a([o,B.ab,w,B.ab,A.c9(B.bJ,v,B.bx,0,8)],u),B.m,s,B.e,B.R,0,B.p),B.q,s,B.z,s,s,s,s,B.ak)
return A.eq(A.a([A.bK(!1,B.df,s,s,!0,s,s,new C.cFI(d),s,s),A.bL(B.pF,new C.cFJ(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.YZ.prototype={
S(){return new C.aCF()},
o5(d){return this.d.$1(d)}}
C.aCF.prototype={
Z(){this.a0()
this.d=A.bj(this.a.c.e,!0,x.u)},
atP(){var w=this.a,v=w.c,u=this.d
u===$&&A.c()
return w.o5(v.b6P(u))},
a5P(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a5P=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&A.c()
w=2
return A.b(u.aWy(new C.ia("q_"+1000*s,"",D.cFf,null,!1,r.length)),$async$a5P)
case 2:t=e
if(t!=null){u.n(new C.eBM(u,t))
u.atP()}return A.h(null,v)}})
return A.i($async$a5P,v)},
aWy(d){var w,v=this.c
v.toString
w=A.eD(new C.eBN(d),!1,null,x.u)
return A.a9(v,!1).cp(w)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=u?B.d9:B.bN,s=u?B.d9:v,r=u?B.aN:B.M,q=w.a.c
s=A.eA(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,A.d(q.b+" \u2014 Questions",v,v,v,v,v,v,A.l(v,v,u?B.aN:B.M,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=R.aRs(B.aL,v,O.SZ,B.nz,D.f9D,w.gbu_())
q=w.d
q===$&&A.c()
q=q.length
if(q===0){q=A.au(A.d("No questions yet. Tap + Question.",v,v,v,v,v,v,A.l(v,v,u?B.bI:B.aj,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=A.hH(v,new C.eBS(w,new C.b5w(u)),q,D.bhC,v,B.ak,new C.eBT(),!1)
return A.ce(s,t,u,v,!1,!1,r,v)}}
C.YY.prototype={
S(){return new C.aCE()}}
C.aCE.prototype={
Z(){var w,v=this
v.a0()
w=v.a.c
v.d=new A.ap(new A.bc(w.b,B.b2,B.aM),$.av())
w=A.bj(w.c,!0,x.bP)
v.e=w
if(B.d.gai(w))J.cb(v.e,D.a1k)
w=v.a.c
v.f=w.d
v.r=w.e},
p(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.a2()},
abn(){var w=0,v=A.j(x.H),u=this,t
var $async$abn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(Z.Fm(78,1920),$async$abn)
case 2:t=e
if(t!=null)u.n(new C.eBI(u,t))
return A.h(null,v)}})
return A.i($async$abn,v)},
acq(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$acq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=A.eD(new C.eBG(u),!1,null,x.dZ)
w=2
return A.b(A.a9(r,!1).cp(t),$async$acq)
case 2:s=e
if(s!=null)u.n(new C.eBH(u,s))
return A.h(null,v)}})
return A.i($async$acq,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.M(a1).ax.a===B.H,g=h?B.d9:B.bN,f=h?B.d9:i,e=h?B.aN:B.M,d=A.d("Edit Question",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=A.eA(A.a([A.dq(S.YH,B.pF,new C.eBK(j,a1),A.bk(B.aL,i,i,i,B.c,i,i,i,i,i,i,i)),B.aw],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=A.d("Question thumbnail",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=A.m(14)
w=j.f
v=h?B.bI:B.aj
w=A.aH(i,A.bu(e,K.aMw(A.m(14),B.bQ,140,B.A7,v,w,1/0),B.ao),B.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gc_S(),i,i,i,i,i,i,!1,B.ae)
e=A.d("Question users will tap",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?B.bj:B.aN
u=A.m(16)
t=A.H(h?B.aI:B.aJ,B.r,1)
s=j.d
s===$&&A.c()
r=A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,15,i,i,B.a3,i,i,!0,i,i,i,i,i,i,i,i)
v=A.p(i,A.B(A.a([A.D(A.aK(i,B.U,!1,i,!0,B.q,i,A.aL(),s,i,i,i,i,i,2,A.bn(i,B.eu,i,B.bl,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.l(i,i,h?B.bI:B.aj,i,i,i,i,i,i,i,i,i,i,i,B.cq,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),B.z,!0,i,!0,i,!1,i,B.ai,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,B.a8,i,i,i,i,i,i,i,i,i,i,i,r,!0,B.a5,i,B.am,i,i,i,i),1),new A.Hr(j.d,i,i)],a0),B.m,i,B.e,B.j,0,i,i),B.h,i,i,new A.o(v,i,t,u,i,i,B.n),i,i,i,i,B.eh,i,i,i)
u=A.d("Printable document",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,i,i,i,B.a3,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=A.ix(B.aL,i,i,B.ah,i,new C.eBL(j),i,A.d("Shows a printable badge on this answer",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.aj,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=A.d("Stored answer (not AI)",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=A.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.aj,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.rm:B.c
q=A.m(16)
p=A.m(16)
o=A.m(16)
n=A.H(B.bk.j(0.45),B.r,1)
m=A.p(i,D.bwx,B.h,i,i,new A.o(B.bk.j(0.12),i,i,A.m(12),i,i,B.n),i,i,i,i,B.bl,i,i,i)
l=A.d("Open Document Editor",i,i,i,i,i,i,A.l(i,i,h?B.aN:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&A.c()
k=J.aa(k)
l=A.D(A.v(A.a([l,B.av,A.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,A.l(i,i,h?B.bI:B.aj,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),B.F,i,B.e,B.j,0,B.p),1)
return A.ce(d,g,A.cM(A.a([f,B.P,w,B.d3,e,B.P,v,B.aO,u,B.P,t,B.av,s,B.ab,A.aD(!1,B.a1,!0,q,A.aI(!1,p,!0,A.p(i,A.B(A.a([m,B.es,l,A.V(B.Ae,h?B.bI:B.aj,i,i,i,16)],a0),B.m,i,B.e,B.j,0,i,i),B.h,i,i,new A.o(i,i,n,o,i,i,B.n),i,i,i,i,B.fB,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gc5r(),i,i,i,i,i,i,i),B.h,r,0,i,i,i,i,i,B.ad)],a0),i,B.c4,i,i,B.ak,!1),i,!1,!1,i,i)}}
C.cX7.prototype={}
C.Tv.prototype={
S(){return new C.aAO(A.kb(!0,null,!0,!0,null,null,!1))}}
C.aAO.prototype={
Z(){var w,v,u,t,s,r,q=this
q.a0()
w=J.dE(q.a.c,new C.dSc())
w=A.z(w,w.$ti.k("G.E"))
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
default:break}}w=B.d.aF(v,"\n\n")
q.d=new A.ap(new A.bc(w,B.b2,B.aM),$.av())},
p(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.f.p()
this.a2()},
atQ(d,e){var w,v,u,t,s,r=this.d
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
aUK(d){var w,v,u,t,s=this.d
s===$&&A.c()
s=s.a
w=s.a
v=B.o.E(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=B.a.o7(w,v,v,u)
this.d.bJ(0,new A.bc(t,A.h2(B.bs,v+u.length),B.aM))},
a9n(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a9n=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(Z.Fm(78,1920),$async$a9n)
case 3:s=e
if(s==null){w=1
break}t.n(new C.dRT(t,s))
case 1:return A.h(u,v)}})
return A.i($async$a9n,v)},
Wc(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hR().a3l(B.ez),$async$Wc)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return A.b(s.f8(),$async$Wc)
case 4:t.n(new r.dRY(t,e))
case 1:return A.h(u,v)}})
return A.i($async$Wc,v)},
a9o(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$a9o=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=$.av()
s=new A.ap(B.as,t)
r=new A.ap(new A.bc("https://",B.b2,B.aM),t)
q=u.c
q.toString
w=2
return A.b(A.ch(null,null,!0,null,new C.dRW(s,r),q,null,!0,!0,x.y),$async$a9o)
case 2:if(e===!0)u.n(new C.dRX(u,s,r))
s.R$=t
s.O$=0
r.R$=t
r.O$=0
return A.h(null,v)}})
return A.i($async$a9o,v)},
by2(){var w,v,u,t,s,r=null,q=A.a([],x.a),p=this.d
p===$&&A.c()
p=B.a.fn(p.a.a,A.ae("\\n\\s*\\n",!0,!1,!1,!1))
w=new A.J(p,new C.dRP(),A.U(p).k("J<1,n>")).bZ(0,new C.dRQ())
for(p=J.aU(w.a),v=new A.hK(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gT(p)
if(B.a.a_(s,"## "))q.push(new C.ln("heading",B.a.i(B.a.aY(s,3)),r,r))
else if(B.a.a_(s,"\u2022 ")||B.a.a_(s,"- "))q.push(new C.ln("bullets",new A.J(A.a(s.split("\n"),u),new C.dRR(),t).bZ(0,new C.dRS()).aF(0,"\n"),r,r))
else q.push(new C.ln("text",s,r,r))}p=this.e
p===$&&A.c()
B.d.v(q,p)
if(q.length===0)q.push(D.a1k)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.cX7(n),l=n?B.aF:B.fy,k=A.d(p.a.d,o,o,o,o,o,o,B.cr,o,o,o),j=x.p
k=A.eA(A.a([A.dq(S.YH,B.a4T,new C.dS2(p,d),A.bk(B.aL,o,o,o,B.c,o,o,o,o,o,o,o)),B.aa],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?B.cJ:B.iX
v=A.c9(B.bJ,A.a([p.uL(E.KK,"Bold",new C.dS3(p),m),p.uL(E.X_,"Italic",new C.dS4(p),m),p.uL(E.afd,"Underline",new C.dS5(p),m),p.uL(Ac.X6,"Heading",new C.dS6(p),m),p.uL(O.KL,"Bullets",new C.dS7(p),m),p.uL(E.afc,"Align",new C.dS8(),m),p.uL(B.Ef,"Link",p.gbT_(),m),p.uL(B.p7,"Image",p.gbSZ(),m),p.uL(Y.Xi,"Video",p.gbT0(),m),p.uL(M.Ym,"Signature",new C.dS9(p),m),p.uL(Y.KM,"Divider",new C.dSa(p),m)],j),B.bx,4,4)
w=A.p(o,A.v(A.a([v,B.ar,A.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,A.l(o,o,n?B.eC:B.bv,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),B.ag,o,B.e,B.j,0,B.p),B.h,w,o,o,o,o,o,o,E.ae8,o,o,o)
v=n?B.d9:B.c
u=A.m(12)
t=A.H(n?B.ew:B.e5,B.r,1)
s=A.a([new A.ab(0,B.G,B.x.j(n?0.35:0.08),B.cF,16)],x.V)
r=p.d
r===$&&A.c()
q=A.l(o,o,n?B.ik:B.aF,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=A.a([w,A.D(new A.C(B.c4,A.p(o,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),r,o,o,o,o,o,2,A.bn(o,B.eu,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.eC:B.bv,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!0,p.f,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,q,!0,B.a5,o,B.am,o,o,o,o),B.h,o,o,new A.o(v,o,t,u,s,o,B.n),o,o,o,o,A4.zS,o,o,o),o),1)],j)
n=p.e
n===$&&A.c()
if(n.length!==0){n=new A.hx(n,A.U(n).k("hx<1>"))
j.push(A.p(o,A.c9(B.bJ,n.gdH(n).di(0,new C.dSb(p,m),x.g5).dA(0),B.bx,0,8),B.h,o,o,o,o,o,o,o,B.K6,o,o,o))}return A.ce(k,l,A.v(j,B.m,o,B.e,B.j,0,B.p),o,!1,!1,o,o)},
uL(d,e,f,g){var w=null,v=g.a,u=v?B.d9:B.c,t=A.m(8),s=A.m(8)
return A.hq(A.aD(!1,B.a1,!0,t,A.aI(!1,s,!0,new A.C(B.ck,A.V(d,v?B.ik:B.aF,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.h,u,0,w,w,w,w,w,B.ad),w,e,w,w)}}
C.d9c.prototype={}
C.ayn.prototype={
a3(){return"_KbView."+this.b}}
C.anu.prototype={
S(){return new C.aAN(D.aNp)},
cGP(d,e){return this.e.$2$size(d,e)}}
C.aAN.prototype={
gawx(){var w,v
if(this.e==null)return null
for(w=J.aU(this.a.c);w.C();){v=w.gT(w)
if(v.a===this.e)return v}return null},
gcjV(){var w,v,u,t,s,r=this.gawx()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
c_U(d){this.n(new C.dRM(this,d))},
c6B(d){this.n(new C.dRN(this,d))},
bwl(){this.n(new C.dRE(this))},
bwn(){this.n(new C.dRF(this))},
gb17(){var w=A.bj(this.a.c,!0,x.i)
B.d.b_(w,new C.dRO())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.M(d).ax.a===B.H,f=new C.d9c(g),e=x.O
e=g?A.a([B.M.j(0.9),B.bj.j(0.85)],e):A.a([B.ev.j(0.55),B.lQ.j(0.45)],e)
w=A.m(22)
v=A.H((g?B.aI:B.fe).j(0.55),B.r,1)
switch(i.d.a){case 0:g=i.bxj(f)
break
case 1:g=i.gawx()
g.toString
g=i.by0(f,g)
break
case 2:u=i.gawx()
u.toString
t=i.gcjV()
t.toString
s=A.aY(u.d)
r=A.m(16)
r=A.p(h,A.d(t.b,h,h,h,h,h,h,D.eHF,h,h,h),B.h,h,h,new A.o(B.aL,h,h,r,h,h,B.n),h,h,h,h,B.bC,h,h,1/0)
q=g?B.aF:B.c
p=A.m(16)
o=A.H(g?B.aI:B.aJ,B.r,1)
n=A.a([new A.ab(0,B.G,B.x.j(g?0.28:0.06),B.e9,10)],x.V)
m=g?B.fw:B.pY
l=A.m(8)
k=A.V(B.pc,g?B.dB:B.e4,h,h,h,14)
j=x.p
j=A.v(A.a([new C.ayl(f,i.gbwm(),u.c,s,"Answer",h),A.D(A.cM(A.a([r,B.ab,A.p(h,A.v(A.a([A.p(h,A.B(A.a([k,B.eA,A.d("Stored answer",h,h,h,h,h,h,A.l(h,h,g?B.dB:B.e4,h,h,h,h,h,h,h,h,11,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),B.m,h,B.e,B.R,0,h,h),B.h,h,h,new A.o(m,h,h,l,h,h,B.n),h,h,h,B.e0,B.fX,h,h,h),new C.aXi(t.c,t.e,f,h)],j),B.F,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(q,h,o,p,n,h,B.n),h,h,h,h,B.c4,h,h,1/0)],j),h,B.bhl,h,h,B.ak,!1),1)],j),B.ag,h,B.e,B.j,0,B.p)
g=j
break
default:g=h}return A.p(h,g,B.ao,h,h,new A.o(h,h,v,w,h,new A.a3(B.aX,B.b1,B.w,e,h,h),B.n),h,h,h,B.is,h,h,h,h)},
aSs(d){var w,v,u,t=null,s=d.a,r=s?D.rm:B.c,q=B.aB.j(0.22)
q=A.a([new A.ab(0,B.G,q,B.J,14),new A.ab(0,B.G,B.x.j(s?0.28:0.06),B.J,8)],x.V)
w=A.H(s?B.aI:B.fe,B.r,2)
v=this.a
u=x.p
q=A.a([A.p(t,A.hO(v.cGP(v.d,72),B.ao),B.h,t,t,new A.o(r,t,w,t,q,t,B.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)B.d.v(q,A.a([B.ar,A.d("Tap to switch",t,t,t,t,t,t,A.l(t,t,B.dk,t,t,t,t,t,t,t,t,12,t,t,B.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return A.v(q,B.m,t,B.e,B.j,0,B.p)},
bxj(d){var w,v,u=this,t=null,s=u.a.r
s=A.au(s!=null?A.aH(t,u.aSs(d),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,B.ae):u.aSs(d),t,t,t)
w=d.a
v=A.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,A.l(t,t,w?B.aN:B.M,t,t,t,t,t,t,t,t,20,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),B.L,t,t)
return A.cM(A.a([s,B.ay,v,B.ar,A.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,A.l(t,t,w?B.bI:B.aj,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),B.L,t,t),B.bu,A.i7(!0,t,t,B.z,G.aIE,new C.dRH(u,d),u.gb17().length,t,B.dL,B.ak,!0)],x.p),t,D.bhE,t,t,B.ak,!1)},
by0(d,e){var w,v,u,t,s=null,r=A.bj(e.e,!0,x.u)
B.d.b_(r,new C.dRJ())
w=A.aY(e.d)
v=d.a
u=A.d("Tap a question to read the stored answer.",s,s,s,s,s,s,A.l(s,s,v?B.bI:B.aj,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=A.au(A.d("No questions in this category yet.",s,s,s,s,s,s,A.l(s,s,v?B.bI:B.aj,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=A.hH(s,new C.dRK(this,r,d,e),t,B.ul,s,B.ak,new C.dRL(),!1)
return A.v(A.a([new C.ayl(d,this.gbwk(),e.c,w,e.b,s),new A.C(Ah.wz,u,s),A.D(v,1)],x.p),B.ag,s,B.e,B.j,0,B.p)}}
C.ayl.prototype={
B(d){var w=this,v=null,u=w.c.a,t=A.aF(v,v,v,v,A.V(B.er,u?B.aN:B.M,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=A.m(12)
q=A.p(v,A.V(w.e,s,v,v,v,22),B.h,v,v,new A.o(r,v,v,q,v,v,B.n),v,v,v,v,B.ck,v,v,v)
return new A.C(D.bkQ,A.B(A.a([t,q,B.aw,A.D(A.d(w.r,v,v,v,v,v,v,A.l(v,v,u?B.aN:B.M,v,v,v,v,v,v,v,v,17,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,v,v),v)}}
C.a9E.prototype={
B(d){var w=null,v=this.c,u=A.aY(v.d),t=this.d.a,s=t?D.rm:B.c,r=A.m(14),q=A.m(14),p=A.m(14),o=A.H(t?B.aI:B.aJ,B.r,1),n=A.a([new A.ab(0,B.G,B.x.j(t?0.28:0.06),B.dE,6)],x.V),m=u.j(0.15),l=A.m(12)
l=A.p(w,A.V(v.c,u,w,w,w,22),B.h,w,w,new A.o(m,w,w,l,w,w,B.n),w,40,w,w,w,w,w,40)
return new A.fD(1,A.aD(!1,B.a1,!0,r,A.aI(!1,q,!0,A.p(w,A.v(A.a([l,B.ar,A.d(v.b,w,2,B.a2,w,w,w,A.l(w,w,t?B.aN:B.M,w,w,w,w,w,w,w,w,10,w,w,B.I,w,1.1,!0,w,w,w,w,w,w,w,w),B.L,w,w)],x.p),B.m,w,B.b7,B.j,0,B.p),B.h,w,w,new A.o(w,w,o,p,n,w,B.n),w,w,w,w,B.ck,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),B.h,s,0,w,w,w,w,w,B.ad),w)}}
C.aXi.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=A.a([],q)
if(this.d){w=r.a
v=w?B.fw:B.pY
u=A.m(8)
t=A.V(B.t5,w?B.dB:B.e4,s,s,s,14)
p.push(A.p(s,A.B(A.a([t,B.d7,A.d("Printable document",s,s,s,s,s,s,A.l(s,s,w?B.dB:B.e4,s,s,s,s,s,s,s,s,10,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),B.m,s,B.e,B.R,0,s,s),B.h,s,s,new A.o(v,s,s,u,s,s,B.n),s,s,s,B.cM,B.ey,s,s,s))}B.d.v(p,J.b5(this.c,new C.c4H(r),x.l))
return A.v(p,B.F,s,B.e,B.j,0,B.p)}}
C.a9w.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new A.C(D.bfv,A.d(q.b,r,r,r,r,r,r,A.l(r,r,s.d.a?B.aN:B.M,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new A.C(B.hC,A.bu(A.m(12),K.aMw(r,B.bQ,160,B.p7,r,w,1/0),B.ao),r)
case"video":v=q.c
q=v==null?q.b:v
return new A.C(B.hC,new C.aym(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new A.C(B.wu,A.aI(!1,r,!0,A.d(q,r,r,r,r,r,r,A.l(r,r,s.d.a?B.cC:B.bk,r,B.mi,r,r,r,r,r,r,r,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.czm(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=A.jo(v?B.aI:B.aJ,r,r,r,r,r)
q=A.d(q.b,r,r,r,r,r,r,A.l(r,r,v?B.cp:B.aI,r,r,r,r,r,r,r,r,r,B.cx,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=A.p(r,r,B.h,v?B.bI:B.aj,r,r,r,1,r,r,r,r,r,120)
return new A.C(B.zC,A.v(A.a([u,q,B.aO,t,B.av,A.d("Signature",r,r,r,r,r,r,A.l(r,r,v?B.bI:B.aj,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r)
case"bullets":v=x.cl
q=A.z(new A.cU(new A.a4(A.a(q.b.split("\n"),x.s),new C.czn(),x.cc),new C.czo(s),v),v.k("G.E"))
return new A.C(B.kY,A.v(q,B.F,r,B.e,B.j,0,B.p),r)
case"divider":return new A.C(B.hC,A.jo(s.d.a?B.aI:B.aJ,r,r,r,r,r),r)
default:q=q.b
if(B.a.i(q).length===0)return B.bF
return new A.C(B.fk,C.hsV(q,s.d),r)}}}
C.aym.prototype={
S(){return new C.bdm()}}
C.bdm.prototype={
Z(){this.a0()
this.abp()},
abp(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$abp=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=B.a.i(r.a.c)
if(J.aa(n)!==0)p=!J.cW(n,"http")&&!J.cW(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=A.Wl(A.cr(n,0,null),null)
w=7
return A.b(J.afA(q),$async$abp)
case 7:if(r.c==null){w=1
break}r.n(new C.d9d(r,q))
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
return A.i($async$abp,v)},
p(){var w=this.d
if(w!=null)w.p()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?B.bj:B.f5
u=A.m(12)
return A.p(B.A,A.V(B.ph,w?B.bI:B.aj,t,t,t,36),B.h,t,t,new A.o(v,t,t,u,t,t,B.n),t,120,t,t,t,t,t,t)}w=A.m(12)
v=s.a
u=J.afy(v)
return A.bu(w,new A.fD(u,new A.am(B.A,t,B.a9,B.q,A.a([new A.zd(s,t),A.aF(t,t,t,t,A.V(v.f?B.afk:B.KN,B.c,t,t,t,44),t,t,t,new C.d9f(this,s),t,t,t,t,t,t)],x.p),t),t),B.ao)}}
C.aog.prototype={
a3(){return"NgmyMusicLane."+this.b}}
C.Hh.prototype={
a3(){return"NgmyMusicRhymeScheme."+this.b}}
C.qS.prototype={}
C.anx.prototype={
S(){var w=null
return new C.aAP(new A.ap(B.as,$.av()),A.me(0,w,w),A.a([],x.m),D.Bf,D.aAz,w,w)},
gdT(){return this.d}}
C.aAP.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,B.mA,null,1,null,v)
w.f2(0,!0)
v.as!==$&&A.aQ()
v.as=w
v.z=B.d.gL(D.a_X).a},
p(){var w=this,v=w.as
v===$&&A.c()
v.p()
v=w.d
v.R$=$.av()
v.O$=0
w.e.p()
w.bpW()},
ganc(){var w,v,u,t,s=this.x
if(s===D.Bg)return null
s=s===D.Bf
w=s?D.a_X:D.a_c
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?B.d.gL(w):null},
ckG(d){return this.n(new C.dSq(this,d))},
awk(){$.aT.x1$.push(new C.dSh(this))},
Hx(d){return this.ck8(d)},
aUL(){return this.Hx(null)},
ck8(b0){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$Hx=A.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=B.a.i(b0==null?q.d.a.a:b0)
if(J.aa(a8)===0||q.r||q.a.e){w=1
break}w=3
return A.b(q.a.f.$0(),$async$Hx)
case 3:e=b2
if(!e){w=1
break}A.jF()
d=a8.toLowerCase()
p=B.a.t(d,"continue")||B.a.t(d,"keep going")||B.a.t(d,"go on")||B.a.t(d,"next verse")||B.a.t(d,"more lyrics")||B.a.t(d,"endelea")||B.a.t(d,"endelea na")||B.a.t(d,"ongeza")||B.a.t(d,"tuendelee")
a0=q.f
a1=B.d.ba(a0,new C.dSj())
o=!p&&!a1
d=a8.toLowerCase()
if(!(B.a.t(d,"fix")||B.a.t(d,"rewrite")||B.a.t(d,"re-write")||B.a.t(d,"rhyme better")||B.a.t(d,"better rhyme")||B.a.t(d,"sound better")||B.a.t(d,"improve")||B.a.t(d,"polish")||B.a.t(d,"make it rhyme")||B.a.t(d,"boresha")||B.a.t(d,"rekebisha")||B.a.t(d,"endeleza mistari")))a2=C.h_e(a8)&&a1
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
l=C.h_e(a8)&&!p
q.n(new C.dSk(q,a8))
q.awk()
k=B.a.i(q.a.c)
if(J.aa(k)===0){q.n(new C.dSl(q))
q.awk()
w=1
break}t=5
j=A.mL(k)
i=new A.J(a0,new C.dSm(),A.U(a0).k("J<1,n>")).aF(0,"\n\n")
a0=C.hMe(m,p,o,q.x,n,q.y,q.ganc(),l)
a3=J.aa(i)!==0?"--- Conversation so far ---\n"+A.t(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+A.t(a8)
w=8
return A.b(A.qi(j,h,B.hc,null),$async$Hx)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=B.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=B.a.i(a0)}else a6=L.bxZ(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.n(new C.dSn(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.n(new C.dSo(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.n(new C.dSp(q))
q.awk()
w=r.pop()
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Hx,v)},
bBY(){return this.Hx("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=A.M(d).ax.a===B.H,p=q?B.Dn:D.b6T,o=x.p
o=A.a([A.v(A.a([A.D(s.cjo(q),1),s.bBc(q)],o),B.m,r,B.e,B.j,0,B.p)],o)
if(s.f.length!==0&&!s.r){w=B.aK.j(0.55)
v=s.r?r:s.gbBX()
u=A.m(28)
t=A.a([B.aK,B.aZ],x.O)
o.push(A.an(78,A.aD(!1,B.a1,!0,r,A.aI(!1,r,!0,A.es(D.dQ0,r,new A.o(r,r,r,u,A.a([new A.ab(0,B.G,B.aK.j(0.45),B.cF,16)],x.V),new A.a3(B.a4,B.a7,B.w,t,r,r),B.n),r,r,r),B.qX,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),B.h,B.K,10,r,w,B.qX,r,r,B.ad),r,r,r,14,r,r))}return A.p(r,new A.am(B.W,r,B.a9,B.q,o,r),B.h,p,r,r,r,r,r,r,r,r,r,r)},
cjo(d){var w,v,u,t=this,s=null
if(t.x===D.Bg)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=A.a([A.fEa(s,!1,B.K,0,0,w,A.fAz(t.coS(d),B.Ti,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=A.V(B.ahG,B.aB.j(0.5),s,s,s,52)
w.push(A.b2O(new A.C(B.eq,A.v(A.a([u,B.ay,A.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,A.l(s,s,d?B.az:B.dy,s,s,s,s,s,s,s,s,14,s,s,B.a3,s,1.45,!0,s,s,s,s,s,s,s,s),B.L,s,s),B.ay,A.c9(B.fG,A.a([t.afC("Full bongo love song ABAB",d),t.afC("Mix: group vs private jet \u2014 which flies?",d),t.afC("Song from John 3:16 + matching verses",d),t.afC("Fix my rhyme \u2014 paste your lines",d)],v),B.bx,8,8)],v),B.m,s,B.b7,B.j,0,B.p),s),!1))}else{v=t.r?1:0
w.push(new A.ns(D.bgb,A.VN(new A.o_(new C.dSi(t,d),u+v,!0,!0,!0,0,A.rj(),s)),s))}return A.uV(0,s,B.q,t.e,B.z,s,s,A6.a6Z,s,s,!1,s,B.ak,!1,w)},
coS(d){var w=this.as
w===$&&A.c()
return A.c3(w,new C.dSx(this,d),null)},
coU(d){var w,v=this,u=null,t=A.m(14),s=v.r?u:new C.dSz(v),r=B.x.j(d?0.35:0.06),q=A.m(14),p=A.H(B.b6.j(0.35),B.r,1),o=v.ganc()
o=o==null?u:o.c
o=A.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,B.Hl,u,u,u)
w=v.ganc()
w=w==null?u:w.b
if(w==null)w="Style"
w=A.D(A.d(w,u,u,u,u,u,u,A.l(u,u,d?B.c:B.bg,u,u,u,u,u,u,u,u,12,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return A.aD(!1,B.a1,!0,u,A.aI(!1,t,!0,A.p(u,A.B(A.a([o,B.aa,w,A.V(v.w?B.Lc:B.qn,B.b6,u,u,u,20)],x.p),B.m,u,B.e,B.j,0,u,u),B.h,u,u,new A.o(r,u,p,q,u,u,B.n),u,u,u,u,B.p4,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ad)},
asg(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=A.a([B.aW,B.aS],x.O)
break
case 1:w=A.a([B.bk,B.cC],x.O)
break
case 2:w=A.a([B.by,B.aB],x.O)
break
default:w=n}v=m?6:0
u=A.m(14)
t=A.m(14)
s=this.r?n:new C.dSg(this,d)
r=A.m(14)
w=m?new A.a3(B.a4,B.a7,B.w,w,n,n):n
if(m)q=n
else q=B.x.j(g?0.3:0.05)
p=A.d(f,n,n,n,n,n,n,B.Hl,n,n,n)
if(m)o=B.c
else o=g?B.af:B.bg
return A.D(A.aD(!1,B.a1,!0,u,A.aI(!1,t,!0,A.dj(n,A.v(A.a([p,A.d(e,n,n,n,n,n,n,A.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),B.m,n,B.e,B.j,0,B.p),n,n,B.ba,new A.o(q,n,n,r,n,w,B.n),B.a1,n,n,n,B.jG,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),B.h,n,v,n,n,n,n,n,B.ad),1)},
coV(d,e){var w,v,u,t=this,s=null,r=t.x===D.Bf?t.z:t.Q,q=A.m(20)
if(r===d.a)r=B.b6.j(e?0.25:0.15)
else r=B.x.j(e?0.2:0.04)
w=A.m(20)
v=t.r?s:new C.dSA(t,d)
u=A.d(d.c,s,s,s,s,s,s,B.QU,s,s,s)
return A.aD(!1,B.a1,!0,q,A.aI(!1,w,!0,new A.C(B.fL,A.B(A.a([u,B.d7,A.d(d.b,s,s,s,s,s,s,A.l(s,s,e?B.c:B.bg,s,s,s,s,s,s,s,s,10,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.m,s,B.e,B.R,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),B.h,r,0,s,s,s,s,s,B.ad)},
afC(d,e){var w=null,v=A.d(d,w,w,w,w,w,w,E.a4N,w,w,w),u=B.aB.j(e?0.2:0.1)
return A.mN(w,u,v,w,this.r?w:new C.dSr(this,d),w,w,w,w)},
bBc(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=A.m(22),o=d?B.M.j(0.95):B.c,n=A.H(B.aB.j(0.2),B.r,1),m=x.p,l=A.a([],m)
if(q>0)l.push(new A.C(F.adV,A.d("$"+B.k.a9(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,A.l(r,r,B.aK.j(0.85),r,r,r,r,r,r,r,r,9,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=A.l(r,r,d?B.c:B.bg,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.Bg?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=A.D(A.aK(r,B.U,!1,r,!0,B.q,r,A.aL(),w,r,r,r,r,r,2,A.bn(r,B.eu,r,B.h8,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.l(r,r,d?B.c2:B.hQ,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),B.z,!0,r,!0,r,!1,r,B.ai,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.dSd(s),r,!1,r,r,!1,r,!0,r,B.a8,r,r,r,r,r,r,r,r,r,r,r,v,!0,B.a5,r,B.am,r,r,r,r),1)
u=s.r
t=u?r:new C.dSe(s)
l.push(A.B(A.a([v,new A.Hr(w,B.aB,r),A.aD(!1,B.a1,!0,r,A.aI(!1,r,!0,A.es(u?D.dQa:D.byO,r,D.aT6,42,r,42),B.cH,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),B.h,r,0,r,r,B.cH,r,r,B.ad)],m),B.dH,r,B.e,B.j,0,r,r))
return A.p(r,A.v(l,B.ag,r,B.e,B.R,0,B.p),B.h,r,r,new A.o(o,r,n,p,r,r,B.n),r,r,r,B.uj,B.acv,r,r,r)}}
C.aIO.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
C.Tw.prototype={
ac(){var w=this
return A.E(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.XI.prototype={
S(){return new C.axP(null,null)},
bby(){return this.f.$0()}}
C.axP.prototype={
Z(){var w,v=this,u=null
v.a0()
w=A.bi(u,D.bez,u,1,u,v)
w.cm(0)
v.d!==$&&A.aQ()
v.d=w
w=A.bi(u,B.oZ,u,1,u,v)
w.f2(0,!0)
v.e!==$&&A.aQ()
v.e=w
w=A.bi(u,B.nr,u,1,u,v)
w.cD(0)
v.f!==$&&A.aQ()
v.f=w
w=A.bi(u,B.wo,u,1,u,v)
w.cm(0)
v.r!==$&&A.aQ()
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
w.boN()},
c_W(){var w=this.d
w===$&&A.c()
w.en(0).by(new C.d6N(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(A.aG(d,B.bR,x.w).w.a.a-32,360),h=B.x.j(0.82),g=k.gc_V(),f=x.l,e=J.e_(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&A.c()
e[v]=new A.C5(new C.d6O(k,v,d),j,w,j)}f=A.z(e,f)
w=k.d
w===$&&A.c()
u=A.m(28)
t=A.H(B.c.j(0.22),B.r,1.5)
s=A.a([new A.ab(2,B.G,B.aZ.j(0.35),B.J,40),new A.ab(0,B.G,B.aL.j(0.25),B.fF,28)],x.V)
r=k.e
r===$&&A.c()
q=k.r
q===$&&A.c()
q=A.c3(new A.h4(A.a([r,q],x.U)),new C.d6P(k),j)
r=A.nr(B.jc,D.f71,new C.d6Q())
p=A.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,A.l(j,j,B.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,B.cq,j,1.45,!0,j,j,j,j,j,j,j,j),B.L,j,j)
o=x.p
n=A.B(A.a([k.aUM(B.k8,"Resets in 24h"),B.aa,k.aUM(B.pc,"Help Topics ready")],o),B.m,j,B.b7,B.j,0,j,j)
m=A.a([],o)
k.a.toString
l=B.c.j(0.35)
m.push(A.D(A.dV(D.f1W,new C.d6R(k),A.db(j,j,j,j,j,j,j,j,j,B.af,j,j,B.lW,j,new A.b6(A.m(14),B.X),new A.ay(l,1,B.r,-1),j,j,j,j)),1))
k.a.toString
m.push(B.aw)
k.a.toString
l=A.m(14)
m.push(A.D(A.bL(D.f6T,g,A.bk(B.aL,j,j,6,B.c,j,B.lW,B.aL.j(0.5),new A.b6(l,B.X),j,j,j)),1))
f.push(A.au(A.aH(j,A.c3(w,new C.d6S(k),A.p(j,A.v(A.a([q,B.ay,r,B.T,p,B.P,n,B.bu,A.B(m,B.m,j,B.e,B.j,0,j,j)],o),B.m,j,B.e,B.R,0,B.p),B.h,j,j,new A.o(j,j,t,u,s,D.bGw,B.n),j,j,j,j,A7.adN,j,j,i)),B.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.d6T(),j,j,j,j,j,j,!1,B.ae),j,j,j))
return A.aD(!1,B.a1,!0,j,A.aH(j,new A.am(B.W,j,B.a9,B.q,f,j),B.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,B.ae),B.h,h,0,j,j,j,j,j,B.ad)},
aUM(d,e){var w=null,v=B.c.j(0.08),u=A.m(20),t=A.H(B.c.j(0.12),B.r,1)
return A.p(w,A.B(A.a([A.V(d,B.aZ,w,w,w,13),B.eA,A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.R,0,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.fL,w,w,w)}}
C.aHI.prototype={
aP(){this.aW()
this.aV()
this.dD()},
p(){var w=this,v=w.b0$
if(v!=null)v.a1(0,w.gdB())
w.b0$=null
w.a2()}}
C.Ma.prototype={}
C.pn.prototype={}
C.ao3.prototype={
S(){return new C.aBa(A.a([],x.E),A.a([],x.s))}}
C.aBa.prototype={
ganA(){return B.k.E(A.JA(this.a.c.a,new C.e10(this)),0,1/0)},
a5X(){var w,v=this,u=v.d,t=v.ganA()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)A.qh(u.a,t,!0,!1)},
I0(d,e){var w,v,u,t=this,s=t.ganA(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.ganA()
if(w<v-0.005)A.h4h(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)A.qh(u.a,w,!0,!1)
A.qh(t.a.c.a,w,!0,!1)
A.zQ(!0,!1,w,t.a.c.a)},
Z(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a0()
$.aT.c_$.push(o)
w=$.H6+1
$.H6=w
if(w===1){w=$.fRZ
if(w!=null)w.$0()}v=$.fCA.h(0,B.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=A.bj(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=A.bj(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=A.lv(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,B.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=A.aMb(u,B.k.E(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new A.uO(w,u,r,q,s.e,p)}o.d=t}o.Ns()
o.a5X()
$.aT.x1$.push(new C.e1H(o))
o.Q=A.dD(B.nn,new C.e1I(o))
o.as=A.dD(B.fK,new C.e1J(o))},
p(){var w=this,v=w.Q
if(v!=null)v.aa(0)
v=w.as
if(v!=null)v.aa(0)
$.aT.hv(w)
C.hkR()
w.a2()},
cqX(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new A.Q(Date.now(),0,!1)
v=p.r
if(!C.a5H(v,w)){if(C.fCC(p,q.e)){q.n(new C.e1p(q,p))
q.wS(!1,!0,!0)}else if(q.c!=null)q.n(new C.e1q())
return}if(!C.c6X(v.c?v.bQ():v)){q.n(new C.e1r(p))
q.aUV(!1)
return}u=p.gBh()
if(u<=0)return
t=w.cY(A.bW(A.bw(w),A.bB(w),A.bO(w),12,0,0,0,0))
s=C.fCD(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.n(new C.e1s())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(B.d.ba(q.e,new C.e1t(r))){q.n(new C.e1u(p,w,u))
return}q.n(new C.e1v(q,p,u,w))
q.aup(new A.d_(r,p.a,u,B.fv,B.f7,"Clock-in daily earnings (local)",null,null,B.ch,w))},
iE(d){if(d===B.fo)this.Dt()},
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
q=new A.uO(u,t,s,r,v.e,q)
u=q}w.x=u},
Q3(d){return this.cpF(d)},
cpF(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Q3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.Ns()
t.I0(r.d,d)
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
return A.b(H.yA(q.w,k,l,j,m,!1,n),$async$Dt)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.n(new C.e1k(q,p))
q.Q3(!1)}w=8
return A.b(q.Ic(),$async$Dt)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=A.a6(h)
$.al.$1("[growth income] pull wallet: "+A.t(o))
w=9
return A.b(q.Ic(),$async$Dt)
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
LV(d){return this.bvx(d)},
bvw(){return this.LV(null)},
bvx(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
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
o=d==null?null:A.kq(d,A.U(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,A.K)(r),++m){l=r[m]
k=l.a
if(q.t(0,k))continue
if(o!=null&&!o.t(0,k))continue
if(l.d===B.fm&&l.x===B.ch&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.n(new C.e11(j,t,i))
q.v(0,p)
r=A.z(q,A.a2(q).k("cl.E"))
t.w=r
w=4
return A.b(A.ao5(t.a.c.a,r),$async$LV)
case 4:t.atY(!1,!0)
r=t.c
if(r!=null)r.H(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Balance updated: +$"+A.dx(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$LV,v)},
Ic(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$Ic=A.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=A.U(a2).k("a4<1>")
a4=A.z(new A.a4(a2,new C.e1l(),a3),a3.k("G.E"))
a5=a4
a6=A.a([],x.s)
w=J.aa(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=A.U(a2).k("J<1,n>")
e=A.z(new A.J(a2,new C.e1m(),a3),a3.k("ai.E"))
q=e
w=9
return A.b(A.lb("transactions","id,status",null,null,null,A.E(["id",q],x.N,x.j),null,!0,null,null,!1,B.bE),$async$Ic)
case 9:p=a9
if(r.c==null){w=1
break}o=!1
for(a2=J.aU(p);a2.C();){n=a2.gT(a2)
m=n
a3=J.q(m,"id")
l=J.k(a3==null?"":a3)
a3=A.aN(J.q(m,"status"))
d=a3==null?null:B.k.N(a3)
k=d==null?0:d
if(J.aa(l)===0)continue
j=B.d.bi(r.e,new C.e1n(l))
if(j<0)continue
i=r.e[j].x
if(J.y(k,1))a0=B.ch
else a0=J.y(k,2)?B.jV:B.dp
h=a0
if(!J.y(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===B.dp&&h===B.ch&&a3[j].d===B.fm)J.cb(a6,l)
if(i===B.dp&&h===B.jV&&r.e[j].d===B.eI){g=r.d
if(g!=null){r.I0(g.d+r.e[j].c,!1)
r.atY(!1,!0)}}}}if(o&&r.c!=null)r.n(new C.e1o())
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
return A.b(r.LV(a6),$async$Ic)
case 13:w=11
break
case 12:w=14
return A.b(r.bvw(),$async$Ic)
case 14:case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ic,v)},
O2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$O2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return A.b(A.u7(i.a,i),$async$O2)
case 3:h=e
if(t.c==null){w=1
break}t.n(new C.e15(t,h))
t.Ns()
t.a5X()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return A.b(H.yA(s[0],p,q,o,r,!0,i),$async$O2)
case 4:i=e.a
n=i[4]
m=A.bj(i[2],!0,x.o)
l=i[5]
t.w=A.bj(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.Ns()
t.a5X()
k=C.fCC(n,m)
if(k)t.I0(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.Y&&s.aw>0
else s=!0
j=A.fSH(n,m,new A.Q(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.Ns()
if(t.c==null){w=1
break}t.n(new C.e16(t,n,m,l))
if(i){t.wS(!1,!0,!0)
if(j==="reset"){A.fRy(t.a.c.a)
i=t.c
if(i!=null)A.fRB(i,null)}else if(j==="warn2"){A.fRz(t.a.c.a)
i=t.c
if(i!=null)C.fRC(i)}}else if(k)t.wS(!1,!0,!0)
else t.Q3(!1)
case 1:return A.h(u,v)}})
return A.i($async$O2,v)},
wS(d,e,f){return this.ca6(d,e,f)},
atY(d,e){return this.wS(d,!1,e)},
aUV(d){return this.wS(!1,d,!1)},
ca6(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$wS=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new A.Q(Date.now(),0,!1).a5()
r=t.a.c.a
q=t.e
p=t.f
w=3
return A.b(A.qQ(r,o,q,!1,t.w,s,p),$async$wS)
case 3:p=t.a.c.a
q=t.e
r=t.f
A.Ha(t.w,p,q,s,o,r)
if(f)t.Q3(d)
case 1:return A.h(u,v)}})
return A.i($async$wS,v)},
c0b(){this.n(new C.e1e())
this.atY(!1,!0)},
ac3(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===B.ch&&A.rg(d)){w=r.a
w.f.$1(new A.d_(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.c6T(q,d)
v=q.d=A.JA(r.a.c.a,new C.e1b(r))
r.at=r.a.c.d=v
A.qh(q.a,v,!0,!1)
if(r.c!=null)r.n(new C.e1c(r,d))
r.wS(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new A.d_(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===B.dp
if(w&&d.d===B.fm)s=!1
else if(w&&d.d===B.eI){r.I0(q.d-d.c,!0)
s=!0}else{C.c6T(q,d)
w=d.d
s=w===B.eI||w===B.ju
r.I0(q.d,s)}r.n(new C.e1d(r,d))
w=d.d
r.wS(s,e,w===B.eI||w===B.ju||d.x===B.ch||w===B.fv)},
aup(d){return this.ac3(d,!0,!1)},
aVS(d,e){return this.ac3(d,!0,e)},
aVR(d,e){return this.ac3(d,e,!1)},
c37(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.hOo(u,e,d)){v.lA("This plan is already active.")
return}w=A.h3O(u.a,d,e)
if(C.hKR(u.a,v.e,w)){v.lA("You already own this plan.")
return}if(u.d<g){v.lA("Insufficient balance. Add funds in the Wallet tab first.")
return}v.n(new C.e1f(v))
v.n(new C.e1g(v,u,new A.uO(d,e,0.0286,new A.Q(Date.now(),0,!1),0,0)))
v.aup(new A.d_(w,u.a,g,B.ju,B.f7,"Direct investment buy: "+d,null,null,B.ch,new A.Q(Date.now(),0,!1)))
v.n(new C.e1h(v))
v.lA("Plan purchased: "+d)},
lA(d){var w=null,v=this.c
if(v==null)return
v.H(x.q).f.P(A.b0(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
Yn(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hm(s,new C.al6(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$Yn)
case 3:w=4
return A.b(t.O2(),$async$Yn)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yn,v)},
acx(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$acx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hm(s,new C.afU(r,A.a([r],x.d9),B.O3,t.a.d,t.gaVQ(),t.gaUU(),null),!1,null,x.X),$async$acx)
case 3:case 1:return A.h(u,v)}})
return A.i($async$acx,v)},
acv(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$acv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hm(s,new C.aiH(r,t.a.d,t.e,t.gaVQ(),t.gaUU(),new C.e1j(t),null),!1,"LocalGrowthGameCenter",x.X),$async$acv)
case 3:case 1:return A.h(u,v)}})
return A.i($async$acv,v)},
aa7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$aa7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new A.Q(s,0,!1)
w=C.fCC(j,t.e)?3:4
break
case 3:w=5
return A.b(t.aUV(!0),$async$aa7)
case 5:case 4:if(j.x==null){t.lA("Choose an investment plan first, then come back to clock in.")
t.n(new C.e17(t))
w=1
break}if(A.lP(r)===6||A.lP(r)===7){t.lA("Clock-in opens Monday through Friday.")
w=1
break}if(!C.fSI(r)){t.lA("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a5H(q,r)&&j.fy>0){t.lA("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!A.aMU(q,r))if(!A.aMU(j.fr,r)){q=A.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,A.K)(p),++n){m=p[n]
if(B.a.i(m.b.toLowerCase())===B.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new A.aCZ(m.y,l,m.a))}}q=A.h3f(q,r)}else q=p
else q=p}else q=!1
if(q){t.lA("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.lA("You are already clocked in for today.")
w=1
break}k=C.hmg(r)
q=j.a
t.n(new C.e18(j,r,k))
t.aVR(new A.d_("local_clockin_manual_"+q+"_"+s,j.a,0,B.fv,B.f7,"Clock-in session started (local)",null,null,B.ch,r),!1)
t.lA("Clock-in started. Keep Growth Income open for today.")
case 1:return A.h(u,v)}})
return A.i($async$aa7,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===B.H?B.iZ:B.oU
if(l.d==null)return A.ed(B.kh,j,!0)
w=x.o
v=A.T(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.m(0,q,r)}p=B.a.i(l.a.c.a.toLowerCase())
u=$.ffI
u=u==null?k:u.$0()
u=J.aU(u==null?B.hY:u)
while(u.C()){t=u.gT(u)
q=t.a
if(q.length===0||v.an(0,q)||A.rg(t))continue
if(B.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(A.dp(o.toLowerCase(),"clock-in",0))continue
v.m(0,q,t)}w=A.z(new A.bg(v,v.$ti.k("bg<2>")),w)
v=l.e
B.d.v(w,new A.a4(v,new C.e1z(),A.U(v).k("a4<1>")))
B.d.b_(w,new C.e1A())
v=l.d
v.toString
u=C.hAH(l.a.c)
t=l.d
t.toString
t=A.ed(new C.ajz(t,l.a.e,l.z,l.gc36(),l.aQ_(),D.feF),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=A.ed(new C.ayz(l.aQ_(),q,n,o,w,new C.e1B(l),l.gc5b(),new C.e1C(l),D.feG),j,!0)
m=A.aG(d,k,x.w).w
n=l.y
return new A.Uq(n,new C.e1D(l),A.aD(!1,B.a1,!0,k,new A.a5(1/0,m.a.b,new A.am(B.W,k,B.a9,B.q,A.a([A.bZ(0,A.ed(k,j,!0),0,0,0),A.bZ(0,A.bq(!1,[new C.ayy(v,u,w,l.gbVO(),new C.e1E(l),new C.e1F(l),new C.e1G(d),l.gc60(),l.gc5X(),D.feE),t,o][n],!0,!1,B.ah,!0,!0),0,0,0),A.an(0,l.bxL(),k,k,0,0,k,k)],x.p),k),k),B.h,j,0,k,k,k,k,k,B.ad),k)},
aQ_(){var w=null,v=A.a([D.eD.j(0.24),B.M.j(0.72)],x.O)
return A.hq(A.aI(!1,w,!0,A.p(B.A,D.bDc,B.h,w,w,new A.o(w,w,A.H(D.eD.j(0.38),B.r,1),w,A.a([new A.ab(0,B.G,D.eD.j(0.18),B.J,16)],x.V),new A.a3(B.ax,B.aC,B.w,v,w,w),B.a6),w,40,w,w,w,w,w,40),B.cH,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e14(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bxL(){var w=null,v=A.m(27),u=A.H(B.au.j(0.45),B.r,1),t=A.a([new A.ab(0,B.G,B.x.j(0.5),B.eQ,24),new A.ab(-2,B.G,B.au.j(0.12),B.J,18)],x.V)
return new A.C(B.K6,A.bq(!0,A.au(new A.d1(D.aRr,A.p(w,A.ck(new C.e12(this)),B.h,w,w,new A.o(w,w,u,v,t,D.bG_,B.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,B.ah,!0,!1),w)},
bXs(d){var w=null,v=this.y===d,u=D.cIL[d],t=u.b,s=u.a,r=""+d,q=x.W
return A.D(A.dn(w,!0,w,A.aH(B.c5,A.qY(A.qm(v?A.V(s,D.a8f,new A.cx("on"+r,q),w,w,21):A.v(A.a([A.V(s,B.c.j(0.62),w,w,w,19),B.bA,A.d(t,w,1,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,new A.cx("off"+r,q),B.b7,B.j,0,B.p),B.io,A.tk(),B.ba,B.ba,A.a_K())),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e1a(this,d),w,w,w,w,w,w,!1,B.ae),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,B.bZ,w),1)}}
C.ayy.prototype={
bUE(d){return C.fCD(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.M(d)
w=B.c.j(0.58)
v=f.e
u=A.U(v).k("a4<1>")
u=A.oL(new A.a4(v,new C.db0(),u),3,u.k("G.E"))
t=A.z(u,A.a2(u).k("G.E"))
v=f.c
s=v.x
r=new A.Q(Date.now(),0,!1)
q=v.f
p=C.a5H(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.fSI(r)
m=v.gBh()
l=A.a([D.eD.j(0.24),B.M.j(0.72)],x.O)
k=A.H(D.eD.j(0.38),B.r,1)
j=x.V
i=A.a([new A.ab(0,B.G,D.eD.j(0.18),B.J,16)],j)
l=A.aI(!1,e,!0,A.p(B.A,A.V(B.hT,D.eD,e,e,e,19),B.h,e,e,new A.o(e,e,k,e,i,new A.a3(B.ax,B.aC,B.w,l,e,e),B.a6),e,38,e,e,e,e,e,38),B.cH,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=A.m(14)
k=A.m(14)
j=A.a([new A.ab(0,B.G,B.b3.j(0.45),B.cF,16)],j)
h=A.m(12)
g=x.p
j=A.bK_(!1,l,"GROWTH INCOME",A.aI(!1,i,!0,new A.a5(44,44,new A.am(B.W,e,B.a9,B.h,A.a([A.p(B.A,A.p(B.A,D.bvX,B.h,e,e,new A.o(B.ij.j(0.78),e,e,h,e,e,B.n),e,36,e,e,e,e,e,36),B.h,e,e,new A.o(e,e,e,k,j,D.bHt,B.n),e,42,e,e,e,e,e,42),A.an(e,A.p(B.A,D.bCi,B.h,e,e,new A.o(B.cz,e,A.H(D.aac,B.r,2),e,e,e,B.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.fVf(B.h7,new C.db1(),k)
k=A.B(A.a([A.D(C.fVe(new C.db2(f,B.u0,n),new A.Q(Date.now(),0,!1),h,k),1),B.nL,A.D(new A.tU(new C.db3(f,B.u0),e,new A.h4(A.a([$.xS(),$.a0N()],x.U)),e),1)],g),B.m,e,B.e,B.j,0,e,e)
h=f.bXC(B.u0,D.eD)
v=A.D(f.cnm("Total Profit","$"+A.dx(v.e),B.u0),1)
u=u?e:s.b
return A.ed(A.ci(A.v(A.a([j,B.T,k,B.ab,new C.ayx(f.d,m,q,p,n,o,D.eD,f.gbUD(),f.f,e),B.ab,h,B.T,A.B(A.a([v,B.nL,A.D(f.b12("Total Investment","$"+A.dx(u==null?0:u),B.u0,f.r),1)],g),B.m,e,B.e,B.j,0,e,e),B.T,f.bUA(d,t,D.eD,w)],g),B.ag,e,B.e,B.j,0,B.p),B.q,e,B.z,e,B.VN,e,e,B.ak),D.aac,!0)},
atX(d,e,f,g,h){var w=null,v=A.m(h),u=A.H(B.c.j(0.09),B.r,1),t=A.a([new A.ab(0,B.G,B.x.j(0.4),B.dn,18)],x.V)
return A.p(w,A.bu(A.m(h-1),new A.am(B.W,w,B.a9,B.q,A.a([A.bZ(0,A.bU(w,new A.o(w,w,w,w,w,new A.bR(f,1.15,B.w,w,0,A.a([e.j(0.22),e.j(0)],x.O),w,w),B.n),B.bb),0,0,0),new A.C(g,d,w)],x.p),w),B.ao),B.h,w,w,new A.o(w,w,u,v,t,D.bGp,B.n),w,w,w,w,w,w,w,w)},
aUT(d,e,f,g){return this.atX(d,e,f,B.ah,g)},
b2Q(d,e,f,g,h,i,j){var w=null,v=A.an(-14,A.V(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=A.m(30),s=A.H(f.j(0.4),B.r,1),r=x.p,q=this.aUT(new A.a5(w,80,new A.am(B.W,w,B.a9,B.q,A.a([v,new A.C(D.bgF,A.v(A.a([A.p(w,A.B(A.a([A.V(e,f,w,w,w,15),B.eA,A.d(h.toUpperCase(),w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),B.m,w,B.e,B.R,0,w,w),B.h,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.ae_,w,w,w),B.b8,A.f_(B.a4,A.d(i,w,1,w,w,w,w,A.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,B.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),B.h,B.eb)],r),B.F,w,B.e,B.j,0,B.p),w)],r),w),w),f,B.kQ,22)
if(g==null)return q
return A.aI(!1,A.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
bXC(d,e){var w,v,u,t,s=null,r=A.H(e.j(0.55),B.r,2),q=e.j(0.12),p=x.p,o=A.a([],p)
for(w=0;w<3;++w){v=new A.b1(3,3)
o.push(A.p(s,s,B.h,s,s,new A.o(e,s,s,new A.bv(v,v,v,v),s,s,B.n),s,D.cuF[w],s,D.bk7,s,s,s,5))}r=A.p(s,A.B(o,B.dH,s,B.b7,B.j,0,s,s),B.h,s,s,new A.o(q,s,r,s,s,s,B.a6),s,42,s,s,s,s,s,42)
q=A.D(A.v(A.a([D.f3y,B.bA,A.B(A.a([A.p(s,s,B.h,s,s,new A.o(e,s,s,s,A.a([new A.ab(0,B.G,e,B.J,6)],x.V),s,B.a6),s,7,s,s,s,s,s,7),B.bp,new A.dm(1,B.cl,A.d("Live \xb7 real-time statistics",s,1,B.a2,s,s,s,A.l(s,s,B.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,B.a3,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),B.m,s,B.e,B.j,0,s,s)],p),B.F,s,B.e,B.j,0,B.p),1)
o=A.m(16)
v=A.m(16)
u=B.x.j(0.3)
t=A.H(e.j(0.45),B.r,1.2)
return this.atX(A.B(A.a([r,D.etn,q,B.aa,A.aI(!1,o,!0,A.p(s,A.v(A.a([A.V(B.oe,e.j(0.95),s,s,s,21),B.tI,A.d("PLAY",s,s,s,s,s,s,A.l(s,s,B.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,B.I,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),B.m,s,B.b7,B.j,0,B.p),B.h,s,s,new A.o(u,s,t,v,s,s,B.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),B.m,s,B.e,B.j,0,s,s),e,B.a4,B.Vj,26)},
b12(d,e,f,g){var w,v=null,u=B.a.t(d.toLowerCase(),"profit"),t=u?B.cz:B.aY,s=A.p(v,v,B.h,v,v,new A.o(t,v,v,D.aPH,v,v,B.n),v,v,v,B.mB,v,v,v,5),r=x.p
r=A.a([s,B.bd,A.D(A.v(A.a([A.B(A.a([A.V(u?B.t3:B.xc,t,v,v,v,14),B.eA,new A.dm(1,B.cl,A.d(d,v,1,B.a2,v,v,v,A.l(v,v,B.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),B.m,v,B.e,B.j,0,v,v),B.ar,A.f_(B.a4,A.d(e,v,1,v,v,v,v,D.eCh,v,v,v),B.h,B.eb)],r),B.F,v,B.b7,B.j,0,B.p),1)],r)
s=g==null
if(!s)r.push(new A.C(B.ach,A.V(B.eo,B.c.j(0.35),v,v,v,v),v))
w=this.aUT(new A.a5(v,66,A.B(r,B.m,v,B.e,B.j,0,v,v),v),t,B.lf,20)
if(s)return w
return A.aI(!1,A.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cnm(d,e,f){return this.b12(d,e,f,null)},
bUA(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.p(m,m,B.h,m,m,new A.o(f,m,m,m,A.a([new A.ab(0,B.G,f,B.J,8)],x.V),m,B.a6),m,9,m,m,m,m,m,9),k=A.d("LIVE ACTIVITY",m,m,m,m,m,m,A.l(m,m,B.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,B.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=B.c.j(0.07),i=A.m(20),h=x.p
i=A.a([A.B(A.a([l,B.a3D,k,B.b8,A.p(m,A.d(""+e.length,m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.h,m,m,new A.o(j,m,m,i,m,m,B.n),m,m,m,m,B.W0,m,m,m)],h),B.m,m,B.e,B.j,0,m,m),B.P],h)
if(e.length===0)i.push(new A.C(B.Va,A.v(A.a([A.V(B.hp,g,m,m,m,30),B.ar,A.d("Nothing yet",m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.bA,A.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,B.a3,m,m,!0,m,m,m,m,m,m,m,m),B.L,m,m)],h),B.m,m,B.e,B.j,0,B.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=A.a([],h)
if(w>0)k.push(new A.m_(1,m,m,m,m,B.c.j(0.07),m))
j=e[w]
v=j.d
u=v===B.eI||v===B.ju
t=u?B.jz:D.eD
g=B.c.j(0.5)
v=new A.b1(12,12)
s=A.a([t.j(0.28),t.j(0.08)],l)
r=new A.ay(t.j(0.35),1,B.r,-1)
v=A.p(B.A,A.V(u?B.t3:B.uJ,t,m,m,m,18),B.h,m,m,new A.o(m,m,new A.c1(r,r,r,r),new A.bv(v,v,v,v),m,new A.a3(B.ax,B.aC,B.w,s,m,m),B.n),m,38,m,m,m,m,m,38)
s=C.hIJ(j)
q=C.fWV(j.y)
s=A.v(A.a([new A.w(s,m,B.mY,m,m,m,m,B.a2,m,1,m,m),B.bA,new A.w(q,m,new A.F(!0,g,m,m,m,m,11,B.a3,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.F,m,B.e,B.j,0,B.p)
q=t.j(0.14)
p=new A.b1(20,20)
o=u?"-":"+"
n=A.dx(j.c)
q=A.p(m,new A.w(o+"$"+n,m,new A.F(!0,t,m,m,m,m,13,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),B.h,m,m,new A.o(q,m,m,new A.bv(p,p,p,p),m,m,B.n),m,m,m,m,B.nu,m,m,m)
j=C.h2S(j)
k.push(new A.C(F.Vf,new A.cC(B.b0,B.e,B.j,B.m,m,B.p,m,0,A.a([v,B.bd,new A.bH(1,B.bo,s,m),A.v(A.a([q,B.d4,new A.w(j,m,new A.F(!0,g,m,m,m,m,10,B.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.dH,m,B.e,B.j,0,B.p)],h),m),m))
B.d.v(i,k)}return this.atX(A.v(i,B.m,m,B.e,B.j,0,B.p),f,B.aX,D.bgN,26)}}
C.ayx.prototype={
S(){return new C.be5(null,null)},
cGx(d){return this.z.$1(d)},
cHI(){return this.Q.$0()}}
C.be5.prototype={
Z(){var w,v=this,u=null
v.a0()
w=A.bi(u,B.p0,u,1,u,v)
w.cD(0)
v.d!==$&&A.aQ()
v.d=w
w=A.bi(u,D.beq,u,1,u,v)
w.cD(0)
v.e!==$&&A.aQ()
v.e=w
w=A.bi(u,B.uf,u,1,u,v)
v.f!==$&&A.aQ()
v.f=w
v.b1Y()},
gb4y(){var w=new A.Q(Date.now(),0,!1)
if(A.lP(w)===6||A.lP(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
b1Y(){var w=this,v=w.a,u=v.e||v.f||w.gb4y()
if(u){v=w.f
v===$&&A.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){v=w.f
v===$&&A.c()
v.cD(0)}else{if(!u){v=w.f
v===$&&A.c()
v=v.r
v=v!=null&&v.a!=null}else v=!1
if(v){v=w.f
v===$&&A.c()
v.bU(0)}}},
bq(d){this.bC(d)
this.b1Y()},
p(){var w=this,v=w.d
v===$&&A.c()
v.p()
v=w.e
v===$&&A.c()
v.p()
v=w.f
v===$&&A.c()
v.p()
w.bp3()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gb4y()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=B.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?B.au:g.x
g=g.r?new C.daU(i):h
v=A.m(32)
s=A.m(32)
r=f?D.cXY:D.cXW
q=A.H((f?D.nX:B.be).j(0.28),B.r,1.4)
p=x.V
o=A.a([new A.ab(0,B.G,(f?B.au:B.b6).j(0.16),B.fF,28)],p)
n=x.p
m=A.a([],n)
if(f)B.d.v(m,A.a([A.an(h,i.a8H(D.nX,130),h,h,h,-24,-30,h),A.an(-36,i.a8H(B.au,140),h,h,-28,h,h,h)],n))
else B.d.v(m,A.a([A.an(h,i.a8H(B.b6,120),h,h,h,-30,-36,h),A.an(-40,i.a8H(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bZ(0,A.e1(A.bu(l,new A.ep(A.c3(k,new C.daV(i),h),h),B.ao),!0,h),0,0,0))}if(f){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bZ(0,A.e1(A.bu(l,new A.ep(A.c3(k,new C.daW(i),h),h),B.ao),!0,h),0,0,0))}l=A.m(999)
k=B.c.j(0.06)
j=A.H(B.c.j(0.16),B.r,1)
m.push(A.an(h,new A.d1(D.aRx,A.p(h,A.B(A.a([A.p(h,h,B.h,h,h,new A.o(t,h,h,h,A.a([new A.ab(0,B.G,t.j(0.5),B.J,8)],p),h,B.a6),h,8,h,h,h,h,h,8),B.aa,new A.dm(1,B.cl,A.d(u,h,1,B.a2,h,h,h,D.eHq,h,h,h),h)],n),B.m,h,B.e,B.R,0,h,h),B.h,h,h,new A.o(k,h,j,l,h,h,B.n),h,h,h,h,B.h8,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.fVf(B.h7,new C.daX(),l)
m.push(C.fVe(new C.daY(i,f,t,e,w),new A.Q(Date.now(),0,!1),j,l))
return A.aI(!1,v,!0,A.dj(h,new A.am(B.W,h,B.a9,B.h,m,h),h,h,B.ba,new A.o(h,h,q,s,o,new A.a3(B.ax,B.aC,B.w,r,h,h),B.n),B.zy,h,392,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
a8H(d,e){var w=null
return A.e1(A.p(w,w,B.h,w,w,new A.o(w,w,w,w,w,new A.bR(B.A,0.5,B.w,w,0,A.a([d.j(0.22),d.j(0)],x.O),w,w),B.a6),w,e,w,w,w,w,w,e),!0,w)}}
C.b7R.prototype={
aUW(d,e,f,g){var w=new A.aO($.W().r,B.ap,null,null,A.a([],x.g)),v=e.a,u=e.b,t=u-f
w.D(new A.b4(v,t))
w.D(new A.cO(v,u,v+f,u))
w.D(new A.cO(v,u,v,u+f))
w.D(new A.cO(v,u,v-f,u))
w.D(new A.cO(v,u,v,t))
w.D(new A.bE())
d.aM(w,g)},
a4(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=a8/2,b0=b3.b,b1=b0/2
for(w=a7.b,v=w*6.283185307179586,u=0;u<16;++u){t=B.k.F(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=B.k.F(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+B.o.F(u,3))+u)+1)/2
$.W()
q=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.1+r*0.5).gq(0)
a7.aUW(b2,new A.u(t*a8,s*b0),2+r*2.2,q)}for(a8=b2.a,b0=w*2,p=a7.e,o=0;o<3;++o){n=B.k.F(b0+o/3,1)
$.W()
m=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
m.b=B.ac
m.c=1.6
m.r=p.j((1-n)*0.38).gq(0)
l=m.I()
a8.drawCircle(a9,b1,138+n*90,l)
l.delete()}for(b0=a7.d,u=0;u<28;++u){k=B.k.F(w*(1+B.o.F(u,2))+u/28,1)
j=u*2.399963+Math.sin(u*1.7)*0.2
i=113.16+k*(70+B.o.F(u,5)*18)
h=a9+Math.cos(j)*i
g=b1+Math.sin(j)*i*0.96
f=B.k.E(Math.sin(k*3.141592653589793),0,1)
switch(B.o.F(u,4)){case 0:e=B.k.E(Math.abs(Math.cos(k*6.283185307179586*3)),0.28,1)
J.bD(a8.save())
a8.translate(h,g)
a8.scale(e,1)
$.W()
d=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
d.r=b0.j(f).gq(0)
l=d.I()
a8.drawCircle(0,0,6.5,l)
l.delete()
h=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
h.b=B.ac
h.c=1.2
h.r=p.j(f).gq(0)
l=h.I()
a8.drawCircle(0,0,6.5,l)
l.delete()
if(e>0.6&&f>0.35){h=$.h8n()
g=h.b
a0=g.c
g=g.a.c
h.a4(b2,new A.u(-a0/2,-g.gbh(g)/2))}a8.restore()
break
case 1:$.W()
a0=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
a0.r=p.j(f*0.95).gq(0)
a7.aUW(b2,new A.u(h,g),3+f*3,a0)
break
case 2:$.W()
a0=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
a0.r=B.c.j(f*0.8).gq(0)
l=a0.I()
a8.drawCircle(h,g,1.6+f*1.8,l)
l.delete()
break
default:a0=Math.cos(j)
a1=Math.sin(j)
a2=7+f*7
$.W()
a3=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
a3.c=1.8
a3.d=B.bL
a3.r=b0.j(f*0.8).gq(0)
l=a3.I()
a8.drawLine.apply(a8,[h,g,h-a0*a2,g-a1*a2,l])
l.delete()}}for(a4=0;a4<3;++a4){a5=v+a4*6.283185307179586/3
for(a6=0;a6<8;++a6){r=a5-a6*0.09
w=Math.cos(r)
h=Math.sin(r)
o=1-a6/8
$.W()
g=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
g.r=p.j(o*0.85).gq(0)
l=g.I()
a8.drawCircle(a9+w*144,b1+h*144,1.4+o*2.6,l)
l.delete()}w=Math.cos(a5)
h=Math.sin(a5)
$.W()
g=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
g.r=b0.j(0.28).gq(0)
g.z=N.mc
l=g.I()
a8.drawCircle(a9+w*144,b1+h*144,7,l)
l.delete()}},
ar(d){return d.b!==this.b}}
C.b7Q.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.W(),a4=A.L()
a4.r=this.d.j(0.075).gq(0)
for(w=a5.a,v=this.b,u=v*6.283185307179586,t=x.g,a3=a3.r,s=0;s<14;++s){r=u+s*6.283185307179586/14
q=A.a([],t)
p=new A.aO(a3,B.ap,e,e,q)
o=r-0.14361566416410484
q.push(new A.b4(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new A.ao(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
o=r+0.14361566416410484
q.push(new A.ao(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
q.push(new A.ao(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new A.bE())
n=a4.I()
q=p.gbL().a.snapshot()
w.drawPath((p.e=new A.cD(q)).a,n)
n.delete()}a0=v*2
a2=B.k.F(a0,1)
J.bD(w.save())
w.translate(a2*(d+240)-120,0)
a5.iU(0,0.35)
a2=-a1
a3=A.L()
a3.sap(new A.a3(B.a4,B.a7,B.w,A.a([B.c.j(0),B.c.j(0.07),B.c.j(0)],x.O),e,e).au(0,D.enK))
a5.aX(new A.a7(-18,a2,18,a2+a1*3),a3)
w.restore()
for(a2=a1+40,s=0;s<34;++s){m=B.k.F(Math.abs(Math.sin(s*91.7)*43758.5453),1)
l=B.k.F(v*(1+B.o.F(s,2))+s/34,1)
a3=l*6.283185307179586
u=Math.sin(a3*2+s)
J.bD(w.save())
w.translate(m*d+u*14,l*a2-20)
w.rotate(a3*(2+B.o.F(s,3))*180/3.141592653589793,0,0)
a3=B.k.E(Math.abs(Math.cos(a3*3+s)),0.3,1)
w.scale(1,a3)
if(l<0.08)a3=l/0.08
else a3=l>0.9?(1-l)/0.1:1
k=B.k.E(a3,0,1)
a3=A.bC(D.eoc,B.Q4)
u=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
u.r=D.asZ[B.o.F(s,6)].j(k*0.9).gq(0)
n=u.I()
w.drawRRect(A.eZ(a3),n)
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
f=D.asZ[B.o.F(s+i,6)].j(k)
u=j[i]
t=u.a
u=u.b
$.W()
q=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
q.c=2
q.d=B.bL
q.r=f.gq(0)
n=q.I()
w.drawLine.apply(w,[t+a3*a1,u+v*a1,t+a3*g,u+v*g,n])
n.delete()
q=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
q.r=f.gq(0)
n=q.I()
w.drawCircle(t+a3*a2,u+v*a2,1.6,n)
n.delete()}a1=j[i]
$.W()
a2=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
a2.r=B.c.j(k).gq(0)
n=a2.I()
w.drawCircle(a1.a,a1.b,5*d,n)
n.delete()}},
ar(d){return d.b!==this.b}}
C.b7P.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a6.a/2,a1=a6.b/2,a2=new A.u(a0,a1),a3=a0-4,a4=a3-22
$.W()
w=A.L()
w.b=B.ac
w.c=14
v=e.d
w.r=(v?e.r:B.be).j(0.22).gq(0)
a5.ae(a2,a3-7,w)
w=A.L()
w.b=B.ac
w.c=1.7
w.r=(v?e.f:B.c).j(0.28).gq(0)
a5.ae(a2,a3-1,w)
w=A.L()
w.b=B.ac
w.c=1.6
w.r=B.c.j(0.16).gq(0)
a5.ae(a2,a4+8,w)
u=A.L()
u.c=1.5
u.d=B.bL
u.r=(v?e.f:B.c).j(0.22).gq(0)
for(w=a3-3,t=a3+2,s=a5.a,r=0;r<12;++r){q=r/12*3.141592653589793*2-1.5707963267948966
p=Math.cos(q)
o=Math.sin(q)
n=Math.cos(q)
m=Math.sin(q)
l=u.I()
s.drawLine.apply(s,[a0+p*w,a1+o*w,a0+n*t,a1+m*t,l])
l.delete()}J.bD(s.save())
w=$.W().r
t=x.g
p=new A.aO(w,B.ap,d,d,A.a([],t))
p.D(new A.kz(A.bT(a2,a4)))
a5.tk(0,p)
p=A.bT(a2,a4)
o=A.L()
o.sap(D.dWd.au(0,A.bT(a2,a4)))
a5.aX(p,o)
k=B.k.E(e.b,0,1)
if(k>0.004){a1+=a4
j=a1-a4*2*k
i=v?5.2:1.8
t=A.a([],t)
h=new A.aO(w,B.ap,d,d,t)
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
h.D(new A.bE())
$.W()
a0=A.L()
a1=x.O
w=e.e
a1=v?A.a([e.f.j(0.55),w.j(0.78),e.r.j(0.92)],a1):A.a([w.j(0.22),D.eD.j(0.34),B.cY.j(0.62)],a1)
a0.sap(new A.a3(B.aX,B.b1,B.w,a1,d,d).au(0,A.bT(a2,a4)))
a5.aM(h,a0)
a0=A.L()
a0.b=B.ac
a0.c=2
a0.r=B.c.j(v?0.28:0.14).gq(0)
a5.aM(h,a0)}s.restore()},
ar(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.ayz.prototype={
S(){var w=$.av()
return new C.ayA(new A.ap(B.as,w),new A.ap(B.as,w))},
bbr(d,e){return this.w.$2$cloudRequest(d,e)}}
C.ayA.prototype={
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
cp3(d){this.a.bbr(d,!0)
this.lA("Deposit submitted. Admin will review your payment proof.")
this.n(new C.dbk())},
cnQ(){var w,v,u=this,t=A.d9(u.d.a.a)
if(t==null||t<=0){u.lA("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
A.hm(w,new C.anb(v.d,t,u.gcp2(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cvc(){var w,v,u,t,s=this,r=s.d,q=A.d9(r.a.a)
if(q==null||q<=0){s.lA("Enter an amount to withdraw.")
return}if(q<10){s.lA("Minimum withdrawal is $"+A.dx(10)+".")
return}w=s.a.d.d
if(q>w){s.lA("Insufficient balance. You have $"+A.dx(w)+".")
return}w=s.e
v=C.h4f(w.a.a)
if(v.length===0){s.lA("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.bbr(new A.d_("wd_"+1000*Date.now(),s.a.d.a,q,B.eI,B.ke,"Withdrawal to $"+v+" \u2014 Fee: $"+A.dx(u)+" \u2014 You receive: $"+A.dx(q-u),null,null,B.dp,new A.Q(Date.now(),0,!1)),!0)
s.lA("Withdrawal submitted \u2014 waiting for admin approval.")
r.bJ(0,B.c0)
w.bJ(0,B.c0)
s.n(new C.dbl())},
csc(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,A.K)(w),++s){r=w[s]
if(r.x!==B.ch||!this.aRM(r)||A.fJX(r))continue
q=r.d
p=q===B.eI||q===B.ju||q===B.ei
q=r.c
if(p)t+=q
else u+=q}return new A.bkY(u,t)},
B(d){var w,v,u,t=this,s=null,r=t.csc(),q=t.a.r,p=new A.a4(q,new C.dbm(),A.U(q).k("a4<1>")).gJ(0)
q=t.a
w=q.c
q=q.x
v=A.a([D.eD.j(0.24),B.M.j(0.72)],x.O)
u=A.H(D.eD.j(0.38),B.r,1)
q=A.bK_(!1,w,"WALLET",A.hq(A.aI(!1,s,!0,A.p(B.A,A.V(U.agY,D.eD,s,s,s,18),B.h,s,s,new A.o(s,s,u,s,s,new A.a3(B.ax,B.aC,B.w,v,s,s),B.a6),s,40,s,s,s,s,s,40),B.cH,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),s,"Back up wallet",s,s))
v=t.bwr(r.a,r.b,p)
u=x.p
w=A.B(A.a([t.an9(B.uJ,"Deposit",0),t.an9(B.t3,"Withdraw",1),t.an9(B.fY,"History",2)],u),B.m,s,B.qC,B.j,0,s,s)
return A.ed(A.bq(!1,A.ci(A.v(A.a([q,B.bu,v,B.d3,w,B.d3,A.qm(t.f===2?t.bRM():t.bX6(),B.i3,A.tk(),B.ba,B.ba,A.a_K())],u),B.ag,s,B.e,B.j,0,B.p),B.q,s,B.z,s,D.biF,s,s,B.ak),!0,!1,B.ah,!0,!0),B.z8,!0)},
bwr(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.a.i(i.a.e)
if(B.a.t(g,"@")){w=B.a.cP(g,"@")
v=B.a.am(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+B.a.aY(g,w)}else v=g
w=A.m(26)
u=A.an(h,i.aw4(220,0.1),h,h,h,-60,-70,h)
t=A.an(-90,i.aw4(200,0.07),h,h,h,30,h,h)
s=A.an(-60,i.aw4(150,0.05),h,h,-40,h,h,h)
r=A.m(26)
r=A.bZ(0,A.bU(h,new A.o(h,h,A.H(B.c.j(0.18),B.r,1),r,h,h,B.n),B.bb),0,0,0)
q=A.m(6)
p=x.p
q=A.B(A.a([A.p(h,A.b2(h,h,h,new C.b7h(h),B.at),B.h,h,h,new A.o(h,h,h,q,h,D.bIy,B.n),h,28,h,h,h,h,h,38),B.b8,D.fbi],p),B.m,h,B.e,B.j,0,h,h)
o=A.d("Available balance",h,h,h,h,h,h,A.l(h,h,B.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,B.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=A.f_(B.a4,C.anV(new C.db6(i),D.eMw,i.a.d.a),B.h,B.eb)
m=A.a([A.D(i.aKJ(B.ux,"In",d),1),A.D(i.aKJ(B.wW,"Out",e),1)],p)
if(f>0){l=B.cQ.j(0.22)
k=A.m(99)
j=A.H(B.ix.j(0.6),B.r,1)
m.push(A.p(h,A.d(""+f+" pending",h,h,h,h,h,h,D.eIk,h,h,h),B.h,h,h,new A.o(l,h,j,k,h,h,B.n),h,h,h,h,B.nu,h,h,h))}return new A.fD(1.62,A.bu(w,new A.am(B.W,h,B.a9,B.q,A.a([D.dVt,u,t,s,r,new A.C(A5.qj,A.v(A.a([q,B.b8,o,B.bA,n,B.b8,A.B(m,B.m,h,B.e,B.j,0,h,h),B.ar,A.d(v,h,1,B.a2,h,h,h,A.l(h,h,B.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,B.a3,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),B.F,h,B.e,B.j,0,B.p),h)],p),h),B.ao),h)},
aw4(d,e){var w=null
return A.p(w,w,B.h,w,w,new A.o(w,w,A.H(B.c.j(e),B.r,22),w,w,w,B.a6),w,d,w,w,w,w,w,d)},
aKJ(d,e,f){var w=null,v=B.c.j(0.16)
return A.B(A.a([A.p(w,A.V(d,B.c,w,w,w,13),B.h,w,w,new A.o(v,w,w,w,w,w,B.a6),w,22,w,w,w,w,w,22),B.bp,new A.dm(1,B.cl,A.f_(B.a4,A.d(e+"  $"+A.dx(f),w,w,w,w,w,w,B.qY,w,w,w),B.h,B.eb),w)],x.p),B.m,w,B.e,B.j,0,w,w)},
an9(d,e,f){var w=null,v=this.f===f,u=v?D.bJU:new A.a3(B.a4,B.a7,B.w,A.a([B.c.j(0.08),B.c.j(0.03)],x.O),w,w),t=A.H(v?B.c.j(0.6):D.eD.j(0.25),B.r,1),s=v?A.a([new A.ab(0,B.G,B.au.j(0.45),B.J,18)],x.V):w
u=A.dj(w,A.V(d,v?D.a8f:D.eD,w,w,w,26),w,w,B.co,new A.o(w,w,t,w,s,u,B.a6),B.DI,w,62,w,w,w,w,62)
return A.aH(B.c5,new A.a5(92,w,A.v(A.a([u,D.euh,A.d(e,w,w,w,w,w,w,A.l(w,w,v?B.c:B.aQ,w,w,w,w,w,w,w,w,12.5,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.db5(this,f),w,w,w,w,w,w,!1,B.ae)},
bX6(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=A.d9(a1.a.a)
if(a2==null)a2=0
w=a0?D.eD:B.cC
v=a2>0
u=new C.dbh(e,w)
t=new C.dbg()
s=e.f
r=A.m(26)
q=x.O
p=A.a([w.j(0.1),B.ry,B.ry],q)
o=A.H(w.j(0.22),B.r,1)
n=x.V
m=A.a([new A.ab(0,B.G,B.x.j(0.35),B.eQ,22)],n)
l=w.j(0.15)
l=A.p(d,A.V(a0?B.uJ:B.t3,w,d,d,d,18),B.h,d,d,new A.o(l,d,d,d,d,d,B.a6),d,34,d,d,d,d,d,34)
k=A.D(A.d(a0?"Add money":"Take money out",d,d,d,d,d,d,B.fS,d,d,d),1)
j=B.c.j(0.06)
i=A.m(99)
h=x.p
i=A.B(A.a([l,B.aw,k,A.p(d,A.B(A.a([A.V(B.hT,w,d,d,d,14),A.d("Cash App",d,d,d,d,d,d,A.l(d,d,B.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,B.I,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),B.m,d,B.e,B.R,0,d,d),B.h,d,d,new A.o(j,d,d,i,d,d,B.n),d,d,d,d,B.kz,d,d,d)],h),B.m,d,B.e,B.j,0,d,d)
l=A.d("$",d,d,d,d,d,d,A.l(d,d,v?w:B.c2,d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=A.a([new A.tK(A.ae("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=A.B(A.a([new A.C(B.i4,l,d),B.d7,A.aT3(new A.d1(D.aRQ,A.aK(d,B.U,!1,d,!0,B.q,d,A.aL(),a1,w,d,d,d,d,2,A.bn(d,B.eu,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,A.l(d,d,B.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),B.z,!0,d,!0,d,!1,d,B.ai,d,d,k,d,d,B.dY,d,d,d,1,d,d,!1,"\u2022",d,new C.dbf(e),d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,D.ePa,!0,B.L,d,B.am,d,d,d,d),d),d)],h),B.F,d,B.b7,B.j,0,d,d)
a1=v?120:60
a1=A.au(A.dj(d,d,d,d,B.ba,new A.o(d,d,d,A.m(99),d,new A.a3(B.a4,B.a7,B.w,A.a([w.j(0),w,w.j(0)],q),d,d),B.n),B.a1,d,3,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+A.dx(10)+" \xb7 admin sends it to your Cash App."
q=A.d(q,d,d,d,d,d,d,A.l(d,d,B.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,B.a3,d,1.35,!0,d,d,d,d,d,d,d,d),B.L,d,d)
l=A.a([],h)
j=a0?D.bNB:D.c1d
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=A.a([i,B.bu,k,B.ar,a1,B.P,q,B.ay,A.B(l,B.m,d,B.e,B.j,0,d,d)],h)
if(!a0){q=B.c.j(0.04)
l=A.V(B.hT,w,d,d,d,d)
k=A.l(d,d,B.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,B.O,d,d,!0,d,d,d,d,d,d,d,d)
l=A.a([B.ay,A.aK(d,B.U,!1,d,!0,B.q,d,A.aL(),e.e,d,d,d,d,d,2,A.bn(d,d,d,d,d,d,d,d,!0,new A.b3(4,A.m(16),new A.ay(B.c.j(0.08),1,B.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new A.b3(4,A.m(16),new A.ay(w,1,B.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),B.z,!0,d,!0,d,!1,d,B.ai,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,B.mX,!0,B.a5,d,B.am,d,d,d,d)],h)
if(v){q=B.c.j(0.04)
k=A.m(16)
B.d.v(l,A.a([B.ab,A.p(d,A.v(A.a([t.$2("Amount","$"+A.dx(a2)),t.$3$color("Fee (15%)","\u2212 $"+A.dx(a2*0.15),B.fj),A.jo(B.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+A.dx(a2*0.85),!0,D.eD)],h),B.m,d,B.e,B.j,0,B.p),B.h,d,d,new A.o(q,d,d,k,d,d,B.n),d,d,d,d,B.iK,d,d,d)],h))}B.d.v(a1,l)}a1.push(B.aO)
q=A.m(18)
l=a0?B.Oo:P.anO
n=A.a([new A.ab(0,B.G,(a0?B.aW:B.e4).j(0.45),B.dn,18)],n)
k=a0?e.gcnP():e.gcvb()
j=A.V(a0?B.Xm:B.l2,d,d,d,d,20)
if(a0)i=v?"Deposit $"+A.dx(a2):"Deposit funds"
else i=v?"Withdraw $"+A.dx(a2):"Request withdrawal"
a1.push(new A.a5(d,54,A.bU(A.lh(j,A.d(i,d,d,d,d,d,d,B.ow,d,d,d),k,A.fh(d,d,B.K,d,d,d,d,d,d,B.c,d,d,d,B.K,new A.b6(A.m(18),B.X),d,d,d,d,d)),new A.o(d,d,d,q,n,new A.a3(B.a4,B.a7,B.w,l,d,d),B.n),B.bb),d))
return A.p(d,A.v(a1,B.ag,d,B.e,B.j,0,B.p),B.h,d,d,new A.o(d,d,o,r,m,new A.a3(B.aX,B.b1,B.w,p,B.NX,d),B.n),d,d,new A.cx("form"+s,x.W),d,B.zP,d,d,d)},
bRM(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=A.U(a2).k("a4<1>"),a4=A.z(new A.a4(a2,new C.db9(a0),a3),a3.k("G.E"))
B.d.b_(a4,new C.dba())
w=B.a.i(a0.a.e.toLowerCase())
a2=A.T(x.N,x.o)
a3=$.ffI
a3=a3==null?a1:a3.$0()
a3=J.aU(a3==null?B.hY:a3)
while(a3.C()){v=a3.gT(a3)
u=v.a
if(u.length!==0&&B.a.i(v.b.toLowerCase())===w)a2.m(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,A.K)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.m(0,u,s)}a3=a2.$ti.k("bg<2>")
a2=A.z(new A.bg(a2,a3),a3.k("G.E"))
r=C.hJh(a2,A.JA(a0.a.e,new C.dbb(a0)))
a2=A.m(24)
a3=A.H(B.c.j(0.07),B.r,1)
v=A.m(99)
u=A.m(99)
q=x.p
u=A.a([A.B(A.a([D.bn7,A.aI(!1,v,!0,A.p(a1,D.eoW,B.h,a1,a1,new A.o(a1,a1,A.H(D.eD.j(0.4),B.r,1),u,a1,a1,B.n),a1,a1,a1,a1,B.lY,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.dbc(a0),a1,a1,a1,a1,a1,a1,a1)],q),B.m,a1,B.e,B.j,0,a1,a1),B.T],q)
if(a4.length===0)u.push(new A.C(D.bfn,A.v(A.a([A.V(B.Eh,B.c.j(0.25),a1,a1,a1,40),B.T,D.f89],q),B.m,a1,B.e,B.j,0,B.p),a1))
else{v=A.a([],q)
for(p=A.df(a4,0,A.dK(a0.r,"count",x.S),A.U(a4).c),o=p.$ti,p=new A.bV(p,p.gJ(0),o.k("bV<ai.E>")),o=o.k("ai.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===B.eI||k===B.ju||k===B.ei
if(l===B.ch)i=j?B.cD:D.eD
else i=l===B.dp?B.ix:B.fQ
h=j?"-":"+"
l=B.c.j(0.06)
k=i.j(0.14)
g=new A.ay(i.j(0.4),1,B.r,-1)
k=A.p(a1,A.V(j?B.t3:B.uJ,i,a1,a1,a1,19),B.h,a1,a1,new A.o(k,a1,new A.c1(g,g,g,g),a1,a1,a1,B.a6),a1,42,a1,a1,a1,a1,a1,42)
f=a0.bLH(n)
e=C.fWV(n.y)
d=B.c.j(0.5)
f=A.a([new A.w(f,a1,B.jU,a1,a1,a1,a1,a1,a1,a1,a1,a1),B.bA,new A.w(e,a1,new A.F(!0,d,a1,a1,a1,a1,11,B.a3,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1)],q)
e=n.f
if(B.a.i(e==null?"":e).length!==0){e.toString
d=B.c.j(0.4)
f.push(new A.w(e,a1,new A.F(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,B.a2,a1,1,a1,a1))}if(m!=null&&n.x!==B.jV)f.push(new A.C(E.acr,new A.Ej(B.bJ,5,4,B.bx,A.a([a0.aJF("Before",m.b),a0.aJF("After",m.a)],q),a1),a1))
m=A.v(f,B.F,a1,B.e,B.j,0,B.p)
f=n.c
f=f===0?"\u2014":h+"$"+A.dx(f)
e=i.j(0.14)
d=new A.b1(99,99)
n=C.h2S(n)
v.push(A.p(a1,new A.cC(B.b0,B.e,B.j,B.m,a1,B.p,a1,0,A.a([k,B.bd,new A.bH(1,B.bo,m,a1),B.aa,A.v(A.a([new A.w(f,a1,new A.F(!0,i,a1,a1,a1,a1,15,B.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.av,A.p(a1,new A.w(n,a1,new A.F(!0,i,a1,a1,a1,a1,9.5,B.I,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.h,a1,a1,new A.o(e,a1,a1,new A.bv(d,d,d,d),a1,a1,B.n),a1,a1,a1,a1,B.zV,a1,a1,a1)],q),B.dH,a1,B.e,B.j,0,B.p)],q),a1),B.h,a1,a1,new A.o(a1,a1,new A.c1(B.X,B.X,new A.ay(l,1,B.r,-1),B.X),a1,a1,a1,B.n),a1,a1,a1,a1,B.ws,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(A.hh(D.bAz,A.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,B.ce,a1,a1,a1),new C.dbd(a0),A.fr(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.eD,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
B.d.v(u,v)}return A.p(a1,A.v(u,B.ag,a1,B.e,B.j,0,B.p),B.h,a1,a1,new A.o(B.ry,a1,a3,a2,a1,a1,B.n),a1,a1,D.fez,a1,D.bhy,a1,a1,a1)},
aJF(d,e){var w=null,v=B.c.j(0.05),u=A.m(7),t=A.H(B.c.j(0.1),B.r,1),s=A.dl(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=A.dx(e)
return A.p(w,A.VY(A.dl(A.a([s,A.dl(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.eMG,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.nt,w,w,w)},
aRM(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(B.a.t(w,"clock-in session started"))return!1
v=d.d
if(v===B.ei)return d.c>0
if(A.rg(d))return!1
if(v===B.fm||v===B.eI)return!0
if(v===B.nQ||v===B.ju)return!0
if(v===B.jW)return!0
if(v===B.fv)return B.a.t(w,"clock-in")||d.c>0
return!1},
bLH(d){var w,v=d.f
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
C.b7h.prototype={
a4(d,e){var w,v,u,t
$.W()
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
C.brz.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null
for(w=a4.b,v=this.b,u=v*6.283185307179586,t=a4.a,s=0+t,r=x.O,q=a3.a,p=0;p<3;++p){o=w*(0.2+0.25*p)+Math.sin(u+p*2)*14-40
n=new A.a7(0,o,s,o+80)
m=[B.b6,B.h4,B.br][p]
$.W()
o=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
o.sap(new A.a3(B.aX,B.b1,B.w,A.a([m.j(0),m.j(0.1),m.j(0)],r),a2,a2).au(0,n))
l=o.I()
q.drawRect(A.c8(n),l)
l.delete()}for(k=0;k<46;++k){s=k*12.9898
j=Math.sin(s+78.233)*43758.5453
j=(j-Math.floor(j))*t
i=Math.sin(s+156.466)*43758.5453
h=(i-Math.floor(i))*w
g=0.25+0.75*(0.5+0.5*Math.sin(u*(1+B.o.F(k,3))+k))
i=Math.sin(s+234.699)*43758.5453
s=Math.floor(i)
$.W()
r=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.55*g).gq(0)
l=r.I()
q.drawCircle(j,h,0.7+(i-s)*1.5,l)
l.delete()
if(B.o.F(k,9)===0){f=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
f.r=B.o1.j(0.35*g).gq(0)
f.c=1
l=f.I()
q.drawLine.apply(q,[j-4,h,j+4,h,l])
l.delete()
l=f.I()
q.drawLine.apply(q,[j,h-4,j,h+4,l])
l.delete()}}for(u=-t*0.35,s=w*0.2,r=t*0.08,o=-w*0.02,v*=2,k=0;k<2;++k){f=B.k.F(v+k*0.5,1)
if(f>0.35)continue
p=f/0.35
e=t*(0.75-k*0.4)+u*p
d=w*(0.1+k*0.12)+s*p
$.W()
a0=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
a0.r=B.c.j(0.7*(1-p)).gq(0)
a0.c=1.6
a0.d=B.bL
l=a0.I()
q.drawLine.apply(q,[e+r,d+o,e,d,l])
l.delete()}for(u=t*0.62,w*=0.36,k=0;k<4;++k){f=B.k.F(v+k*0.25,1)
t=B.o1.j(0.5*Math.sin(f*3.141592653589793))
a1=new A.kN(new A.em("z",a2,a2,B.cS,a2,a2,a2,a2,a2,a2,new A.F(!0,t,a2,a2,a2,a2,12+f*14,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),B.a5,B.cg,new A.jM(1),a2,a2,a2,a2,B.cf,a2)
a1.f_()
a1.a4(a3,new A.u(u+Math.sin(f*6.283185307179586+k)*12+k*8,w-f*90))}},
ar(d){return d.b!==this.b}}
C.aHY.prototype={
aP(){this.aW()
this.aV()
this.dD()},
p(){var w=this,v=w.b0$
if(v!=null)v.a1(0,w.gdB())
w.b0$=null
w.a2()}}
C.btv.prototype={}
C.aWW.prototype={}
C.Yv.prototype={
S(){return new C.aAY(new A.ap(B.as,$.av()))},
cIT(d,e){return this.d.$2(d,e)}}
C.aAY.prototype={
p(){var w=this.d
w.R$=$.av()
w.O$=0
this.a2()},
aV_(){var w=this,v=B.a.i(w.d.a.a),u=A.ae("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.n(new C.dWv(w))
return}u=w.c
u.toString
A.a9(u,!1).M(null)
w.a.cIT(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=A.aG(a0,B.et,e).w
e=A.aG(a0,B.e3,e).w
w=A.au(A.p(f,f,B.h,f,f,new A.o(B.b9,f,f,A.m(2),f,f,B.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=A.B(A.a([A.p(f,D.bzY,B.h,f,f,new A.o(f,f,f,f,A.a([new A.ab(0,B.G,B.fc.j(0.5),B.J,18)],v),D.ajw,B.a6),f,52,f,f,f,f,f,52),B.es,A.D(A.v(A.a([D.eXO,B.bA,A.d(g.a.c,f,1,B.a2,f,f,f,B.ov,f,f,f)],u),B.F,f,B.e,B.j,0,B.p),1),A.aF(f,f,f,f,D.bAN,f,f,f,new C.dWy(a0),f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,f,f)
s=g.b0M(B.eO,"You",B.cC)
r=B.aK.j(0.15)
q=A.m(99)
q=A.B(A.a([s,new A.C(B.lX,A.p(f,D.f0r,B.h,f,f,new A.o(r,f,A.H(B.aK.j(0.6),B.r,1),q,f,f,B.n),f,f,f,f,B.fL,f,f,f),f),g.b0M(B.uF,"Your friend",B.bU)],u),B.m,f,B.e,B.j,0,f,f)
r=B.c.j(0.06)
s=A.m(16)
p=B.c.j(0.12)
o=A.m(16)
n=g.f
if(n.length===0)n=f
o=A.aK(f,B.U,!0,f,!0,B.q,f,A.aL(),g.d,f,f,f,f,f,2,A.bn(f,f,f,f,f,f,f,f,!0,new A.b3(4,s,new A.ay(p,1,B.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new A.b3(4,o,D.aQE),f,f,f,f,f,f,f,f,N.C2,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.bD7,f,f,f,f,f,f,f,f,f,f,f,f),B.z,!0,f,!0,f,!1,f,B.ai,f,f,f,f,f,B.lF,f,f,f,1,f,f,!1,"\u2022",f,new C.dWz(g),f,new C.dWA(g),f,!1,f,f,!1,f,!0,f,B.a8,f,f,f,f,f,f,f,f,f,f,f,B.iB,!0,B.a5,f,B.am,f,f,f,f)
r=A.a([],u)
for(m=0;m<4;++m){l=D.bXg[m]
s=new A.b1(14,14)
p=g.e===l
n=p?D.ajv:f
p=p?f:B.c.j(0.06)
k=new A.ay(g.e===l?B.az:B.bG,1,B.r,-1)
j=""+l
i=l===1?"game":"best of "+j
h=B.c.j(0.7)
s=A.a([new A.bH(1,B.bo,A.aH(f,A.dj(f,A.v(A.a([new A.w(j,f,B.dO,f,f,f,f,f,f,f,f,f),new A.w(i,f,new A.F(!0,h,f,f,f,f,10,B.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,B.p),f,f,B.ba,new A.o(p,f,new A.c1(k,k,k,k),new A.bv(s,s,s,s),f,n,B.n),B.eL,f,f,f,B.f0,f,f,f),B.z,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.dWB(g,l),f,f,f,f,f,f,!1,B.ae),f)],u)
if(l!==7)s.push(B.aa)
B.d.v(r,s)}s=A.B(r,B.m,f,B.e,B.j,0,f,f)
r=A.B(A.a([A.V(B.l1,B.c.j(0.5),f,f,f,15),B.bp,A.D(A.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,A.l(f,f,B.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),B.m,f,B.e,B.j,0,f,f)
p=A.m(18)
v=A.a([new A.ab(0,B.G,B.by.j(0.4),B.cs,18)],v)
n=g.e
j=n===1?"":"s"
return new A.C(new A.N(0,0,0,d.f.d+e.r.d),A.p(f,A.v(A.a([w,B.aO,t,B.bu,q,B.bu,D.f43,B.ar,o,B.aO,D.f7Y,B.P,s,B.ay,r,B.aO,new A.a5(f,54,A.bU(A.hh(D.ahO,A.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,B.fS,f,f,f),g.gc0w(),f),new A.o(f,f,f,p,v,D.bIK,B.n),B.bb),f)],u),B.ag,f,B.e,B.R,0,B.p),B.h,f,f,D.aSD,f,f,f,f,D.biS,f,f,f),f)},
b0M(d,e,f){var w=null,v=f.j(0.1),u=A.m(16),t=A.H(f.j(0.45),B.r,1)
return A.D(A.p(w,A.v(A.a([A.V(d,f,w,w,w,24),B.av,A.d(e,w,w,w,w,w,w,B.a4J,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.f0,w,w,w),1)}}
C.oB.prototype={}
C.bmD.prototype={
a4(d,e){var w,v,u,t,s,r=null,q=e.a/2,p=new A.u(q,e.b/2),o=q-4
for(q=d.a,w=0;w<37;++w){$.W()
v=new A.ar(B.Y,B.V,B.a_,B.a0,B.Z)
if(w===0)u=B.bm
else u=(w&1)===0?B.bO:B.M
v.r=u.gq(0)
u=A.bT(p,o)
t=v.I()
q.drawArc.apply(q,[A.c8(u),(w*2*3.141592653589793/37-1.5707963267948966)*57.29577951308232,9.72972972972973,!0,t])
t.delete()}$.W()
q=A.L()
q.r=B.h6.gq(0)
q.b=B.ac
q.c=8
d.ae(p,o,q)
q=A.L()
q.r=B.aK.gq(0)
d.ae(p,o*0.22,q)
q=this.b
if(q!=null){s=A.ib(r,r,r,r,A.dl(r,r,r,r,r,r,r,r,r,B.aKU,A.t(q)),B.a5,B.cg,r,B.ek,B.cf)
s.f_()
q=s.b
u=q.c
q=q.a.c
s.a4(d,p.aE(0,new A.u(u/2,q.gbh(q)/2)))}},
ar(d){return d.b!=this.b}}
C.Dt.prototype={
a3(){return"NgmyProMoveResult."+this.b}}
C.aop.prototype={
gjB(){var w=this.d
w=w==null?null:w.a
return w!==!1},
biK(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.fCl("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.bSz()
w=s.gjB()
v=s.d
s.c=w?"You ("+v.b+") vs NGMY \u2014 capture all opponent discs":v.b+" vs "+v.c+" \u2014 capture all discs"
break
case"tic_tac_go":s.b=1
s.at=A.bY(9,"",!1,x.N)
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
s.dx=e.af()*3.141592653589793*2
s.c=s.gjB()?"Aim and shoot \u2014 beat NGMY on the snooker table":"Aim and shoot \u2014 pocket balls"
break
case"connect_four_pro":s.b=1
u=J.e_(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=A.bY(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gjB())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.aTD(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.ayz.h(0,d)
s.c=w==null?"Play to earn":w}},
b5j(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gjB()
if(o)return
o=x.N
s.x=A.a_(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b5(w,new C.c8q(),o)
v=A.z(v,v.$ti.k("ai.E"))
s.at=v
if(v.length<9){v=A.z(v,o)
B.d.v(v,A.bY(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=B.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===B.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.csK(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.anF(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b5(t,new C.c8r(),x.L)
o=A.z(o,o.$ti.k("ai.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)B.d.K(v,A.bY(7,0,!1,o))}if(A.iz(e.h(0,q)))o=A.e7(e.h(0,q))
else{o=A.c4(A.t(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.byA(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.anF(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b5(t,new C.c8s(),x.L)
o=A.z(o,o.$ti.k("ai.E"))
s.y=o}if(A.iz(e.h(0,p)))o=A.e7(e.h(0,p))
else{o=A.c4(A.t(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bzP(e,f)
o=J.y(e.h(0,r),!0)
s.e=o
if(o)s.anF(e,f)
break}},
cCM(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=A.a_(w.x,q,p)
switch(d){case"tic_tac_go":o.m(0,"ttt",A.bj(w.at,!0,q))
o.m(0,"turnEmail",w.ay9())
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
q=A.z(new A.J(q,new C.c8u(),p),p.k("ai.E"))
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
q=A.z(new A.J(q,new C.c8v(),p),p.k("ai.E"))
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
ay9(){var w,v,u,t=this
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
anF(d,e){var w,v=this,u=B.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
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
csK(d,e){var w,v,u,t,s,r="playerXEmail"
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
byA(d,e){var w,v,u,t,s
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
bzP(d,e){var w,v,u,t,s,r,q
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
RV(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gjB())return s
w=B.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return B.a.i(J.k(s==null?u.ay9():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
bSz(){var w,v,u=this,t=J.e_(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=A.ij(8,new C.c8n(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
aTD(d){var w=20+d.aB(80),v=w+10+d.aB(50),u=4+d.aB(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bJ(0,B.c0)},
cM9(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gjB())w=1
else{v=r.d
v=v==null?null:v.d
w=r.RV(q,v==null?"":v)?r.z:-1}if(!r.gjB()){v=r.d
v=v==null?null:v.d
v=!r.RV(q,v==null?"":v)}else v=!1
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
if(r.a6D(2)){r.a89(1)
return!0}if(r.a6D(1)){r.a89(2)
return!0}if(r.gjB()&&r.z===2){r.buH(f)
if(r.a6D(2)){r.a89(1)
return!0}if(r.a6D(1)){r.a89(2)
return!0}}}return!1},
a89(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
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
buH(d){var w,v,u,t,s,r,q,p,o,n=this,m=A.a([],x.B)
for(w=x.t,v=0;v<8;++v)for(u=0;u<8;++u){if(J.q(n.y[v],u)!==2)continue
for(t=[A.a([1,-1],w),A.a([1,1],w)],s=0;s<2;++s){r=t[s]
q=v+r[0]
p=u+r[1]
if(q>=0&&q<8&&p>=0&&p<8&&J.q(n.y[q],p)===0&&B.o.F(q+p,2)===1)m.push(A.a([v,u,q,p],w))}}w=m.length
if(w===0)return
o=m[d.aB(w)]
J.aE(n.y[o[2]],o[3],2)
J.aE(n.y[o[0]],o[1],0)
n.z=1},
a6D(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)for(t=J.aU(w[u]);t.C();)if(t.gT(t)===d)return!1
return!0},
cMa(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.po
if(!s.gjB()){w=s.d
w=w!=null&&!s.RV("tic_tac_go",w.d)}else w=!1
if(w)return D.po
if(s.gjB())v="X"
else{w=B.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===B.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.agi(v))return s.aOH(v,!0)
if(!B.d.t(s.at,""))return s.aOI()
s.ax=!s.ax
if(!s.gjB()){s.x.m(0,"turnEmail",s.ay9())
s.c=s.aTb()
return D.po}if(s.gjB()){t=s.cbg(e)
if(t>=0){s.at[t]="O"
if(s.agi("O"))return s.aOH("O",!1)
if(!B.d.t(s.at,""))return s.aOI()
s.ax=!0}}s.c=s.gjB()?"Your turn \u2014 you are X":s.aTb()
return D.po},
aTb(){var w=this.d
if(w==null)return"Take your turn"
return this.RV("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aOH(d,e){var w,v,u=this
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
return e?D.pp:D.Gf},
aOI(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.Pj},
cbg(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.agi("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.agi("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.cJ8[u]
if(v[w].length===0)return w}return-1},
agi(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.cQ6[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a15(d){return B.d.cG(d,0,new C.c8t())},
cwL(d){this.ay.push(1+d.aB(10))
if(this.a15(this.ay)>21)return!0
return!1},
cwM(d){var w,v,u,t=this
while(t.a15(t.ch)<17)t.ch.push(1+d.aB(10))
t.CW=!0
w=t.a15(t.ay)
v=t.a15(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cCe(d,e){var w,v,u,t=this
if(t.e)return D.po
if(!t.gjB()){w=t.d
w=w!=null&&!t.RV("connect_four_pro",w.d)}else w=!1
if(w)return D.po
if(t.gjB())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.po
if(!t.adr(d,w))return D.po
if(t.a6t(t.fx))return t.aOF(t.fx,!0)
if(t.aKt())return t.aOG()
w=t.fx===1?2:1
t.fx=w
if(t.gjB()&&w===2){u=t.caF(e)
if(u>=0){t.adr(u,2)
if(t.a6t(2))return t.aOF(2,!1)
if(t.aKt())return t.aOG()
t.fx=1}}t.c=t.gjB()?"Your turn \u2014 drop a red disc":t.byz()
return D.po},
byz(){var w=this.d
if(w==null)return"Drop a disc"
return this.RV("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
adr(d,e){var w
for(w=5;w>=0;--w)if(J.q(this.fr[w],d)===0){J.aE(this.fr[w],d,e)
return!0}return!1},
aKt(){for(var w=0;w<7;++w)if(J.q(this.fr[0],w)===0)return!1
return!0},
aOF(d,e){var w,v,u,t=this
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
return e?D.pp:D.Gf},
aOG(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.Pj},
caF(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.adr(w,2)
v=r.a6t(2)
r.b31(w)
if(v)return w}for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.adr(w,1)
u=r.a6t(1)
r.b31(w)
if(u)return w}t=A.a([],x.t)
for(w=0;w<7;++w)if(J.q(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aB(s)]},
b31(d){var w
for(w=0;w<6;++w)if(J.q(this.fr[w],d)!==0){J.aE(this.fr[w],d,0)
return}},
a6t(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.q(this.fr[w],v)!==d)continue
if(this.byB(w,v,d))return!0}return!1},
byB(d,e,f){var w,v,u,t=new C.c8m(this,d,e,f)
for(w=x.t,w=[A.a([0,1],w),A.a([1,0],w),A.a([1,1],w),A.a([1,-1],w)],v=0;v<4;++v){u=w[v]
if(t.$2(u[0],u[1])+t.$2(-u[0],-u[1])-1>=4)return!0}return!1},
b6c(d){var w=this
if(B.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.aTD(d)}return w.a>=w.b}}
C.api.prototype={
S(){return new C.aBJ(null,null)},
cHM(d){return this.e.$1(d)}}
C.aBJ.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,D.bet,null,1,null,v)
w.f2(0,!0)
v.d=w
v.a.d.aK(0,v.gaVr())
v.aud()},
bq(d){var w
this.bC(d)
w=this.a
if(d.c!==w.c){w.d.bJ(0,B.c0)
this.aud()}},
aud(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.af7(t,u)
C.af7(t,u)
w.a.cHM(s)
w.a.toString
w.n(new C.erc())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
p(){var w,v=this
v.a.d.a1(0,v.gaVr())
w=v.d
w===$&&A.c()
w.p()
v.bqD()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.af7(j,i),g=C.af7(j,i),f=j.length,e=i.length,d=A.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&A.c()
u=new A.b1(1,1)
d.push(new A.vD(new A.cX(v,!1,A.p(l,l,B.h,l,l,new A.o(B.aK,l,l,new A.bv(u,u,u,u),A.a([new A.ab(0,B.G,B.aK.j(0.6),B.J,6)],k),l,B.n),l,22,l,B.Kf,l,l,l,3),l),B.PS,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new A.em(v,l,l,B.cS,l,l,l,l,l,l,D.eJS))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=B.c.j(0.4)
q=B.cq}else if(s===t){r=B.bh
q=B.O}else{r=B.aD
q=B.I}d.push(new A.em(t,l,l,B.cS,l,l,l,l,l,l,new A.F(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&A.c()
d.push(new A.vD(new A.cX(k,!1,A.p(l,l,B.h,B.aK,l,l,l,22,l,l,l,l,l,3),l),B.PS,l,l))}p=f===0?0:B.k.U(h/f*100)
k=B.x.j(0.35)
v=A.m(12)
u=A.H(B.b9,B.r,1)
o=x.p
v=A.p(l,A.v(A.a([A.B(A.a([m.aVq("Correct",""+h,B.bm),B.aa,m.aVq("Wrong / missed",""+(f-g),B.aD),B.b8,A.d(""+p+"% accuracy",l,l,l,l,l,l,F.a45,l,l,l)],o),B.m,l,B.e,B.j,0,l,l),B.ar,D.f1v],o),B.F,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(k,l,u,v,l,l,B.n),l,l,l,l,B.bl,l,l,l)
u=A.D(A.ci(new A.a7I(l,A.dl(d,l,l,l,l,l,l,l,l,l,l),l,l,l),B.q,l,B.z,l,l,l,l,B.ak),1)
k=m.a.d
g=A.l(l,l,B.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.x.j(0.35)
return A.v(A.a([v,B.ab,u,B.T,A.aK(l,B.U,!0,l,!0,B.q,l,A.aL(),k,l,l,l,l,l,2,A.bn(l,new A.b3(4,A.m(12),B.X),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new A.b3(4,A.m(12),D.aQx),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.z,!0,l,!0,l,!1,l,B.ai,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,B.a8,l,l,l,l,l,l,l,l,l,l,l,D.aKT,!0,B.a5,l,B.am,l,l,l,l)],o),B.ag,l,B.e,B.j,0,B.p)},
aVq(d,e,f){var w=null,v=f.j(0.15),u=A.m(8)
return A.p(w,A.d(d+": "+e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.h,w,w,new A.o(v,w,w,u,w,w,B.n),w,w,w,w,B.fL,w,w,w)}}
C.aJv.prototype={
p(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbu())
w.a6$=null
w.a2()},
aP(){this.aW()
this.aV()
this.bv()}}
var z=a.updateTypes(["aw<~>()","~()","I(hW,hW)","~([wE?])","S(qc)","qc()","I(qL,qL)","S(qL)","I(qM,qM)","NP(Y)","S(hW)","cG(abu)","Yc(Y)","Xj(Y)","acf(Y)","a4A(Y)","LY(Y)","ab5(Y,hu<ak<j_>>)","ab4(Y,I)","r(qc)","qL(a1<@,@>)","~(Dt,aop)","LQ(Y)","a1<n,@>(qL)","qM(a1<@,@>)","a1<n,@>(ke)","a1<n,@>(qM)","S(qM)","a1<n,@>(ln)","ln(@)","a1<n,@>(ia)","ia(@)","hW(@)","aw<~>(ke)","a1<n,@>(hW)","~(I,I)","hW(hW)","Tu(Y)","aw<S>(ak<hW>)","Yb(Y)","~(hW)","YY(Y)","Tv(Y)","n(hW)","S(ln)","wi(br<I,ln>)","a9E(Y,I)","I(ia,ia)","a9w(ln)","r(qS)","bH(Hh)","XI(Y)","~(d_{bumpWalletRevision:S,cloudRequest:S})","~(n,O,O,O)","O(Q)","~(d_)","Yv(Y)","~(Dt)","n(n)","YZ(Y)"])
C.cmd.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.cme(r,w,s.b,v,s.d)
t=s.e
r.b=A.dD(t,u)
v.r=new C.cma(r)
v.e=new C.cmb(r,w)
v.f=new C.cmc(r,w,t,u)},
$S:0}
C.cme.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.l7(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=A.a6(r)
u=A.ca(r)
s=v
q=u
p=A.EU(s,q)
if(p==null)p=new A.iY(s,q==null?A.a11(s):q)
t=p
o.d.hb(t.a,t.b)
return}o.d.K(0,w)}else{o.e.a(null)
o.d.K(0,null)}},
$S:38}
C.cma.prototype={
$0(){this.a.b.aa(0)
return $.Fv()},
$S:1620}
C.cmb.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.aqM.$0()
this.a.b.aa(0)},
$S:0}
C.cmc.prototype={
$0(){var w,v=this,u=v.b,t=A.dB(0,0,u.gb8d(),0,0,0)
u.kp(0)
u=v.c
w=v.a
w.b=A.cP(new A.b8(u.a-t.a),new C.cm9(w,u,v.d))},
$S:0}
C.cm9.prototype={
$0(){var w=this.c
this.a.b=A.dD(this.b,w)
w.$1(null)},
$S:0}
C.eMM.prototype={
$1(d){var w=this.a
w.n(new C.eML(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.eML.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hu(D.abG,this.b,null,null,v.$ti.k("hu<1>"))},
$S:0}
C.eMO.prototype={
$2(d,e){var w=this.a
w.n(new C.eMJ(w,d,e))},
$S:54}
C.eMJ.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hu(D.abG,null,this.b,this.c,v.$ti.k("hu<1>"))},
$S:0}
C.eMN.prototype={
$0(){var w=this.a
w.n(new C.eMK(w))},
$S:0}
C.eMK.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hu(B.zs,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fjG.prototype={
$1(d){return d.a===this.a&&B.a.i(d.b.toLowerCase())===this.b&&d.x===B.ch},
$S:16}
C.fjy.prototype={
$1(d){return d},
$S:13}
C.f4p.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return A.p(B.A,new A.C(new A.N(u,0,u,0),A.d("NGMY",w,1,B.eH,w,!1,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,B.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),B.h,w,w,B.a7e,w,v,w,w,w,w,w,v)},
$S:153}
C.f4m.prototype={
$3(d,e,f){return this.a.$0()},
$S:140}
C.f4n.prototype={
$2(d,e){var w,v=this,u=e.b
if(B.a.i(u==null?"":u).length!==0){u.toString
w=B.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return A.kc(w,B.A,v.d,new C.f4l(v.e),B.fM,v.c,!0,v.b,null,null,v.a)},
$S:1621}
C.f4l.prototype={
$3(d,e,f){return this.a.$0()},
$S:140}
C.f4o.prototype={
$3(d,e,f){return this.a.$0()},
$S:140}
C.d3g.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.d3r.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.d3J.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.d3K.prototype={
$1(d){return this.a.Ie()},
$S:14}
C.d3z.prototype={
$0(){var w=J.b5(this.b,new C.d3y(),x.P)
w=A.z(w,w.$ti.k("ai.E"))
this.a.f=w},
$S:0}
C.d3y.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.d3A.prototype={
$0(){var w=this.a,v=w.a.d.b4,u=A.U(v).k("J<1,a1<n,@>>")
v=A.z(new A.J(v,new C.d3x(),u),u.k("ai.E"))
w.f=v},
$S:0}
C.d3x.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.d3C.prototype={
$0(){var w=this.a,v=w.a.d.b4,u=A.U(v).k("J<1,a1<n,@>>")
v=A.z(new A.J(v,new C.d3B(),u),u.k("ai.E"))
w.f=v},
$S:0}
C.d3B.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.d3u.prototype={
$0(){var w=0,v=A.j(x.c),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.c3W(t.a.c)?2:3
break
case 2:w=4
return A.b(C.an4(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.n(new C.d3s(t))
case 3:if(t.c!=null)t.n(new C.d3t(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:52}
C.d3s.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d3t.prototype={
$0(){return this.a.d++},
$S:0}
C.d3v.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d3w.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d3m.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.hQf(t.a.d.b4,J.k(J.q(u.b,"id")),"rejected")
t.a.bn()
w=2
return A.b(C.aeX(t.a.d.b4),$async$$0)
case 2:w=3
return A.b(t.Ie(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3n.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a8(s)
C.hFl(t.a.d.b4,J.k(r.h(s,"id")),t.a.c.c)
t.a.bn()
w=2
return A.b(C.aeX(t.a.d.b4),$async$$0)
case 2:w=3
return A.b(t.Ie(),$async$$0)
case 3:t.H9(B.d.dI(t.y,new C.d3k(s),new C.d3l(t)),J.k(r.h(s,"id")))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3k.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d3l.prototype={
$0(){return B.d.gL(this.a.y)},
$S:z+5}
C.d3o.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d3p.prototype={
$0(){return B.d.gL(this.a.y)},
$S:z+5}
C.d3q.prototype={
$0(){return this.a.H9(this.b,J.k(J.q(this.c,"id")))},
$S:0}
C.d3j.prototype={
$0(){return this.a.bVA(this.b)},
$S:0}
C.d3i.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.hQH(u,w.b,new C.d3h(v,w))},
$S:0}
C.d3h.prototype={
$2(d,e){return this.a.aeM(this.b,d,e)},
$S:652}
C.d3I.prototype={
$2(d,e){if(d)return
this.a.aOk()},
$S:118}
C.d3G.prototype={
$2(d,e){var w=this.a
return new A.kY(C.aWV(w.a.c.a),new C.d3F(w,this.b,this.c),null,null,x.gH)},
$S:1623}
C.d3F.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=A.m(12)
v=A.m(12)
u=A.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return A.aD(!1,B.a1,!0,w,A.aI(!1,v,!0,new A.C(B.lq,A.bCl(B.cQ,A.V(B.fY,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.d3E(this.a,d),t,t,t,t,t,t,t),B.h,this.b,0,t,t,t,t,t,B.ad)},
$S:1624}
C.d3E.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.ffX(s.c.a,s.e).eN(new C.d3D())
w=2
return A.b(C.bzK(u.b,t.a.c.a),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3D.prototype={
$1(d){},
$S:29}
C.d3H.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.dGw.prototype={
$0(){var w=this.a
return A.JA(w.a.c.a,new C.dGv(w))},
$S:77}
C.dGv.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.dGx.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&A.c()
u.bf=t.ac()
v.bn()
w.n(new C.dGu())},
$S:0}
C.dGu.prototype={
$0(){},
$S:0}
C.dGy.prototype={
$2(d,e){var w,v=this.a
if(!C.c3W(v.a.c)){if($.fCg.t(0,B.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.fCh(this.b,v.x,w)
return!1}C.an4(v.a.c.a)}if(A.JA(v.a.c.a,new C.dGt(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aDi()
w=v.a
w.toString
w.hk(new A.d_(B.o.u(1000*Date.now()),v.a.c.a,d,B.ju,B.f7,e,null,null,B.ch,new A.Q(Date.now(),0,!1)))
v.a.bn()
return!0},
$S:1625}
C.dGt.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.dGz.prototype={
$3$bonus(d,e,f){var w,v=null,u=B.o.u(1000*Date.now()),t=this.a,s=t.a
s.hk(new A.d_(u,s.c.a,d,B.fv,B.f7,e,v,v,B.ch,new A.Q(Date.now(),0,!1)))
t.a.bn()
w=f>0?"+$"+B.k.a9(d,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.a9(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.u4(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1626}
C.d3a.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.d3d.prototype={
$0(){return A.iG(this.a,null)},
$S:0}
C.d3e.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.d3f.prototype={
$1(d){var w=null,v=this.a,u=A.fh(w,w,v.e===d?B.bm:A.X(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,w,w,w,w,w,w,w,w)
return A.D(new A.C(B.eV,A.i5(A.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.d3c(v,d),u),w),1)},
$S:208}
C.d3c.prototype={
$0(){var w=this.a
return w.n(new C.d3b(w,this.b))},
$S:0}
C.d3b.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d52.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.d55.prototype={
$1(d){this.a.cbA()
return null},
$S:14}
C.d56.prototype={
$1(d){return this.a.cqY()},
$S:14}
C.d57.prototype={
$1(d){this.a.a09()
return null},
$S:14}
C.d58.prototype={
$1(d){this.a.afS()
return null},
$S:14}
C.d59.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c4)return
w=v.Q
w===$&&A.c()
if(w<=0){v.n(new C.d53(v))
w=v.as
if(w!=null)w.aa(0)
v.DS()
return}v.n(new C.d54(v))},
$S:14}
C.d53.prototype={
$0(){return this.a.Q=0},
$S:0}
C.d54.prototype={
$0(){var w=this.a,v=w.Q
v===$&&A.c()
w.Q=v-1
return v},
$S:0}
C.d4i.prototype={
$0(){return this.a.bA=this.b},
$S:0}
C.d4j.prototype={
$0(){return this.a.bA=this.b},
$S:0}
C.d4M.prototype={
$1(d){return this.a.go.t(0,d)},
$S:60}
C.d4N.prototype={
$0(){},
$S:0}
C.d4y.prototype={
$0(){var w=this.b
w.c4=!0
w.cT="Waiting for both players\u2026"
w.cf="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.d4z.prototype={
$0(){var w=this.a
w.c4=!0
w.cT="Both players connected"
w.cf="Starting together in a moment\u2026"},
$S:0}
C.d4A.prototype={
$0(){var w=this.b
w.c4=!0
w.cT="Match starting together\u2026"
w.cf="Both players start in "+B.o.E(this.c,1,99)+"s"},
$S:0}
C.d4B.prototype={
$0(){this.b.c4=!1},
$S:0}
C.d4C.prototype={
$0(){},
$S:0}
C.d3L.prototype={
$0(){var w=this.a,v=w.x2,u=A.t(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.d4h.prototype={
$0(){var w=this.a
w.at=this.b
w.b0j()},
$S:0}
C.d4O.prototype={
$0(){},
$S:0}
C.d4X.prototype={
$0(){},
$S:0}
C.d4L.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.n(new C.d4K(w))},
$S:0}
C.d4K.prototype={
$0(){var w=this.a
w.y=!0
w.z=new A.Q(Date.now(),0,!1)},
$S:0}
C.d4f.prototype={
$0(){var w=this.a;++w.Y
w.y=!1
w.z=null},
$S:0}
C.d4g.prototype={
$0(){},
$S:0}
C.d4S.prototype={
$1(d){return d==null},
$S:248}
C.d4T.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
B.d.cu(v.ch,w.d)},
$S:0}
C.d4U.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.d3M.prototype={
$1(d){return d==null},
$S:248}
C.d3N.prototype={
$0(){return this.a.bf++},
$S:0}
C.d3O.prototype={
$0(){},
$S:0}
C.d4r.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.d4s.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.K(0,t)
w=this.c
u.K(0,w)
if(v.ghr()&&D.mg.t(0,v.a.e)){u=v.id
u.K(0,t)
u.K(0,w);++v.fx}++v.k2
v.fy=A.a([],x.t)},
$S:0}
C.d4t.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.n(new C.d4q(w))},
$S:11}
C.d4q.prototype={
$0(){var w=this.a
w.fy=A.a([],x.t)
w.k1=!1},
$S:0}
C.d4D.prototype={
$0(){return this.a.y1++},
$S:0}
C.d4E.prototype={
$0(){},
$S:0}
C.d4F.prototype={
$0(){return this.a.y2++},
$S:0}
C.d4G.prototype={
$0(){},
$S:0}
C.d4H.prototype={
$0(){return this.a.b4++},
$S:0}
C.d4I.prototype={
$0(){},
$S:0}
C.d4R.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.d4u.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d4v.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.d4w.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.d4x.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.d4V.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.d4W.prototype={
$0(){var w=this.a
w.ok.push(w.d.aB(4))
w.p2=0},
$S:0}
C.d3P.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d3Q.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.d3R.prototype={
$0(){return this.a.to=-1},
$S:0}
C.d3S.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.d4P.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.d4Q.prototype={
$0(){var w,v=this.a;++v.x2
v.aKg()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+A.t(Math.min(w+2,7))+" tiles"},
$S:0}
C.d4p.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.d4J.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d4n.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.d4o.prototype={
$2(d,e){return d+e.length},
$S:219}
C.d4Y.prototype={
$0(){return A.iG(this.a,null)},
$S:0}
C.d4Z.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.d5_.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.d51.prototype={
$1(d){var w=this.a,v=w.MX(),u=v<=0?0:B.k.E(w.z8()/v,0,1),t=w.a.x,s=t*1.46
return new C.LQ(w.f?s:s*u,s,t,null)},
$S:z+22}
C.d50.prototype={
$1(d){return d.bS(0.85)},
$S:156}
C.d4m.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghr()&&D.mg.t(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return A.v(A.a([A.d(p,w,w,w,w,w,w,B.jU,B.L,w,w),B.ar,A.D(A.au(new A.a5(r*v+u,r*t+s,A.i7(!0,w,w,B.z,new A.hJ(v,6,6,1,r),new C.d4l(q,r),q.fr.length,w,B.dL,B.ak,!1),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
$S:149}
C.d4l.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.t(0,e),p=r.ghr()&&D.mg.t(0,r.a.e)&&q&&r.id.t(0,e),o=r.ghr()&&D.mg.t(0,r.a.e)&&q&&!p,n=B.d.t(r.fy,e)||q,m=p?D.ajC:D.bGB,l=A.m(10),k=A.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.ajC:D.ajw
v=o?A.H(B.dB,B.r,2):s
u=A.a([new A.ab(0,B.G,A.X(51,B.x.l()>>>16&255,B.x.l()>>>8&255,B.x.l()&255),B.J,4)],x.V)
t=this.b*0.42
return A.aI(!1,l,!0,A.dj(s,A.au(n?A.V(D.c9F[r.fr[e]],B.c,s,s,s,t):A.d("?",s,s,s,s,s,s,A.l(s,s,B.c,s,s,s,s,s,s,s,s,t,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,B.ba,new A.o(s,s,v,k,u,w,B.n),B.eL,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.d4k(r,e),s,s,s,s,s,s,s)},
$S:194}
C.d4k.prototype={
$0(){return this.a.caX(this.b)},
$S:0}
C.d44.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?A.X(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.X(89,B.bm.l()>>>16&255,B.bm.l()>>>8&255,B.bm.l()&255),r=A.m(10),q=A.m(10),p=A.m(10),o=A.H(A.X(64,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
return A.aD(!1,B.a1,!0,r,A.aI(!1,q,!0,A.p(B.A,A.d(t?"":u,w,w,w,w,w,w,D.aK_,w,w,w),B.h,w,w,new A.o(w,w,o,p,w,w,B.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d43(v,d),w,w,w,w,w,w,w),B.h,s,0,w,w,w,w,w,B.ad)},
$S:655}
C.d43.prototype={
$0(){return this.a.cqh(this.b)},
$S:0}
C.d45.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=A.X(46,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
return A.aD(!1,B.a1,!0,A.m(10),A.aI(!1,A.m(10),!0,A.p(B.A,A.d(u,w,w,w,w,w,w,D.aK_,w,w,w),B.h,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d42(v,d),w,w,w,w,w,w,w),B.h,t,0,w,w,w,w,w,B.ad)},
$S:655}
C.d42.prototype={
$0(){return this.a.cqg(this.b)},
$S:0}
C.d46.prototype={
$1(d){return this.a.n(new C.d41())},
$S:27}
C.d41.prototype={
$0(){},
$S:0}
C.d47.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&A.c()
w=C.af7(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.oo()
if(u.ghr()&&D.mg.t(0,u.a.e)){u.Zv()
u.mu(!0)}else{v=B.d.cG(u.cy,0,new C.d4_())
t=u.dx
if(t>=v)u.rW("All 5 sentences perfect \u2014 full payout!")
else u.Dj(t/v,t,v)}}else{if(u.ghr()&&D.mg.t(0,u.a.e))u.Zv()
u.n(new C.d40(u))}},
$S:0}
C.d4_.prototype={
$2(d,e){return d+e.length},
$S:219}
C.d40.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bJ(0,B.c0)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.d48.prototype={
$1(d){var w=null,v=A.fh(w,w,A.X(38,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,B.cc,w,w,w,w,w,w,w)
return new A.C(B.cM,new A.a5(1/0,w,A.i5(A.d(d,w,w,w,w,w,w,U.aJT,w,w,w),new C.d3Z(this.a,d),v),w),w)},
$S:128}
C.d3Z.prototype={
$0(){return this.a.b_G(this.b)},
$S:0}
C.d49.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&A.c()
w=u*3+8
return A.v(A.a([A.d(s,v,v,v,v,v,v,B.nM,v,v,v),B.P,A.D(A.au(new A.a5(w,w,A.i7(!0,v,v,B.z,new A.hJ(3,4,4,1,u),new C.d3Y(t,u),9,v,B.dL,B.ak,!1),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
$S:149}
C.d3Y.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.aYw(e),p=r===0
if(p)w=B.K
else w=q?B.bm:A.X(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v=A.m(10)
s=p?t:new C.d3U(s,e)
u=A.m(10)
p=p?"":""+r
return A.aD(!1,B.a1,!0,v,A.aI(!1,u,!0,A.au(A.d(p,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),B.h,w,0,t,t,t,t,t,B.ad)},
$S:75}
C.d3U.prototype={
$0(){return this.a.cqf(this.b)},
$S:0}
C.d4a.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.d3X(q,d)
p=A.m(16)
if(o)w=D.a_h[d]
else{w=D.a_h[d]
w=A.X(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=A.m(16)
u=o?A.X(B.k.U(127.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.X(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
u=A.H(u,B.r,o?2:1)
t=x.V
if(o){s=D.a_h[d]
t=A.a([new A.ab(0,B.G,A.X(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,16)],t)}else t=A.a([],t)
return A.aI(!1,p,!0,A.dj(r,r,r,r,B.ba,new A.o(w,r,u,v,t,r,B.n),T.zA,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1630}
C.d3X.prototype={
$0(){return this.a.cqi(this.b)},
$S:0}
C.d4b.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&A.c()
q=A.d(q,t,t,t,t,t,t,B.nM,t,t,t)
w=A.d("Move "+r.auS()+"/"+C.fIf(),t,t,t,t,t,t,B.C3,t,t,t)
v=r.x2
u=s*3+12
return A.v(A.a([q,w,A.d("Round "+v+"/7 \xb7 "+A.t(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,A.l(t,t,A.X(153,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.D(A.au(new A.a5(u,u,A.i7(!0,t,t,B.z,new A.hJ(3,6,6,1,s),new C.d3W(r),9,t,B.dL,B.ak,!1),t),t,t,t),1)],x.p),B.m,t,B.e,B.j,0,B.p)},
$S:149}
C.d3W.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=A.m(10),s=A.m(10),r=u?B.bm:D.b2i,q=u?B.el:D.b9O
return A.aD(!1,B.a1,!0,w,A.aI(!1,t,!0,A.p(w,w,B.h,w,w,new A.o(r,w,A.H(q,B.r,u?2.5:1),s,w,w,B.n),w,w,w,w,w,w,w,w),w,!0,w,w,B.K,w,w,w,w,w,w,w,w,new C.d3T(v,e),w,w,w,w,B.K,w,w),B.h,B.K,0,w,w,w,w,w,B.ad)},
$S:75}
C.d3T.prototype={
$0(){return this.a.cqd(this.b)},
$S:0}
C.d4c.prototype={
$0(){return this.a.b_G(this.b[this.c])},
$S:0}
C.d4d.prototype={
$0(){return this.a.n(new C.d3V())},
$S:0}
C.d3V.prototype={
$0(){},
$S:0}
C.d4e.prototype={
$2(d,e){this.a.Yg(d,e)
return null},
$S:z+21}
C.d8k.prototype={
$1(d){return this.a.cbp(this.b,d)},
$S:1631}
C.d8j.prototype={
$0(){var w=this
return w.a.a.cIk(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cxf.prototype={
$1(d){var w=this.a
w.ZM()
w.t2()},
$S:8}
C.cwA.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cwq.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cwr.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cwK.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cwH.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cwI.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cwJ.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cwC.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new C.cwB(w))},
$S:0}
C.cwB.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cws.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.aa(w.c)
v.dy=J.aa(w.d)
v.fr=J.aa(w.e)},
$S:0}
C.cwF.prototype={
$1(d){var w=this.a
return new C.Tu(w.fx,new C.cwE(w),w.a.f.r,null)},
$S:z+37}
C.cwE.prototype={
$1(d){return this.bek(d)},
bek(d){var w=0,v=A.j(x.y),u,t=this,s,r
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c4Q(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.n(new C.cwD(r,d))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+38}
C.cwD.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cx2.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cwX.prototype={
$1(d){this.a.t2()
return null},
$S:14}
C.cx_.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(B.o.ak(v.gaR7().a,1e6)<=0){w=v.id
if(w!=null)w.aa(0)
v.t2()
return}v.n(new C.cwZ())},
$S:14}
C.cwZ.prototype={
$0(){},
$S:0}
C.cwW.prototype={
$1(d){this.a.DZ()
return null},
$S:14}
C.cwY.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cwV.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bh(J.k(v==null?"":v))
if(u==null)u=new A.Q(A.fK(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bh(J.k(v==null?"":v))
return u.aI(0,w==null?new A.Q(A.fK(0,0,!1),0,!1):w)},
$S:39}
C.cwx.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bh(J.k(v==null?"":v))
if(u==null)u=new A.Q(A.fK(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bh(J.k(v==null?"":v))
return u.aI(0,w==null?new A.Q(A.fK(0,0,!1),0,!1):w)},
$S:39}
C.cwy.prototype={
$0(){var w=this.a,v=w.f
B.d.a7(v)
B.d.v(v,this.b)
w.ax=!0},
$S:0}
C.cwz.prototype={
$0(){var w=this.a
if(w.c!=null)w.a_r(!0)},
$S:11}
C.cwv.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cww.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
if(w.f.length!==0)w.RZ(this.b)},
$S:8}
C.cwN.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=B.d.gcV(v).Q
v.toString
if(this.b)w.hP(v)
else w.lE(v,B.dS,B.kv)},
$S:8}
C.cwG.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cwO.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cwP.prototype={
$0(){var w=this.a
w.f.push(A.E(["role","user","text",this.b,"at",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.z))
w.b16()
w.r.bJ(0,B.c0)
w.at=!0},
$S:0}
C.cwQ.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cwR.prototype={
$0(){var w=this.a
w.f.push(A.E(["role","ai","text",this.b,"at",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.z))
w.at=!1},
$S:0}
C.cwS.prototype={
$0(){var w,v=this.b,u=A.T(x.N,x.z)
J.aE(u,"role","ai")
J.aE(u,"text",this.c)
J.aE(u,"at",new A.Q(Date.now(),0,!1).a5().ab())
w=this.a
if(J.ct(w.b)){w=J.b5(w.b,v.gcao(),x.P)
w=A.z(w,w.$ti.k("ai.E"))
J.aE(u,"phoneActions",w)}v.f.push(u)
v.b16()},
$S:0}
C.cwT.prototype={
$0(){this.a.f.push(A.E(["role","ai","text",y.g,"at",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.z))},
$S:0}
C.cwU.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cwL.prototype={
$1(d){return this.bel(d)},
bel(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
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
return A.b(C.ant(q,new C.qL("cal_"+1000*n,m,l,(o==null?p.bN(36e8):o).bQ(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.anM()
case 4:k.c.H(x.q).f.P(A.b0(null,null,null,B.dk,null,B.q,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:408}
C.cx1.prototype={
$1(d){return this.bem(d)},
bem(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.H(x.q).f.P(A.b0(null,null,null,B.dk,null,B.q,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:408}
C.cwM.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=B.d.gcV(v).Q
v.toString
w.hP(v)},
$S:8}
C.cxe.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
if(v>0)w.a8J(v-1)},
$S:0}
C.cx7.prototype={
$0(){return A.iG(this.a,null)},
$S:0}
C.cxa.prototype={
$1(d){var w=this.a
w.n(new C.cx4(w,d))
if(d===0)w.a_r(!0)},
$S:27}
C.cx4.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cx8.prototype={
$2$size(d,e){return C.fGG(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:1632}
C.cx9.prototype={
$0(){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.fT0(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return A.b(H.aoh(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cx5(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return A.b(C.anr(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return A.b(p.t2(),$async$$0)
case 15:p.n(new C.cx6(p))
p.a8J(0)
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
$S:63}
C.cx5.prototype={
$2(d,e){return this.ben(d,e)},
ben(d,e){var w=0,v=A.j(x.y),u,t=this,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=A.a03(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$2,v)},
$S:119}
C.cx6.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cxc.prototype={
$2(d,e){return B.aa},
$S:35}
C.cxb.prototype={
$2(d,e){var w=null,v=this.a,u=A.d((v.a.c.w?D.a_m:D.ZM)[e],w,w,w,w,w,w,B.oz,w,w,w),t=A.X(31,B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255),s=A.X(89,B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255)
v=v.at?w:new C.cx3(v,e)
return A.mN(w,t,u,w,v,w,w,new A.ay(s,1,B.r,-1),w)},
$S:504}
C.cx3.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a_m:D.ZM
w.r.saU(0,v[this.b])
w.mt()
return null},
$S:0}
C.cxd.prototype={
$1(d){var w=this.a
return w.at?null:w.mt()},
$S:2}
C.cwt.prototype={
$0(){return this.a.a8J(0)},
$S:0}
C.cx0.prototype={
$0(){return this.a.a8J(this.b)},
$S:0}
C.cwu.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=A.p(v,D.bBo,B.h,v,v,new A.o(v,v,v,v,v,new A.a3(B.a4,B.a7,B.w,A.a([A.X(51,B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255),w.b],x.O),v,v),B.a6),v,72,v,v,v,v,v,72)
t=w.c
s=A.d("Start a conversation",v,v,v,v,v,v,A.l(v,v,t?B.c:B.aF,v,v,v,v,v,v,v,v,16,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.au(new A.C(B.Vb,A.v(A.a([u,B.ab,s,B.ar,A.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,A.l(v,v,t?B.az:B.aT,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v)],x.p),B.m,v,B.e,B.j,0,B.p),v),v,v,v)}if(e<s)return u.bzu(t[e],w.c)
return u.aKR(A.E(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:42}
C.bUm.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=B.k.N(d)
return new A.Q(A.fK(w>1e11?w:w*1000,0,!0),0,!0).bQ()}v=A.bh(J.k(d))
return v==null?null:v.bQ()},
$S:333}
C.bUl.prototype={
$1(d){A.aN(d)
return(d==null?0:d)/100},
$S:665}
C.bUo.prototype={
$1(d){var w
if(d==null)w=null
else{w=A.bh(J.k(d))
w=w==null?null:w.bQ()}return w},
$S:333}
C.bUn.prototype={
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
s=A.a2y(B.a01,J.k(s==null?"reimbursement":s))
r=J.q(w,"method")
r=A.a2y(B.ZK,J.k(r==null?"system":r))
q=A.aS(J.q(w,"sourceDetails"))
p=J.q(w,"status")
p=A.a2y(B.Fs,J.k(p==null?"approved":p))
o=this.a.$1(J.q(w,"timestamp"))
if(o==null)o=new A.Q(Date.now(),0,!1)
return new A.d_(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:594}
C.doO.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.doP.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.doF.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bj(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.doD.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.a
w=2
return A.b(o.zK(),$async$$0)
case 2:t=o.d
t===$&&A.c()
s=o.e
s===$&&A.c()
r=o.a.c
q=o.f
q===$&&A.c()
w=3
return A.b(C.fBg(t,s,r,q),$async$$0)
case 3:p=e
w=4
return A.b(A.oC(o.a.c,!1),$async$$0)
case 4:o.ku(p)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.doN.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.a7h(),$async$$0)
case 3:q=e
if(q==null){r.ku("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return A.b(A.a9(s,!1).cp(A.eD(new C.doM(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return A.b(A.oC(r.a.c,!1),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.doM.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&A.c()
return new C.Yb(w.b,w.a,u,v,null)},
$S:z+39}
C.doC.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.hm6(q)?3:4
break
case 3:w=5
return A.b(t.a.Dy(B.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return A.b(C.aUw(q,s.a.c),$async$$0)
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
case 9:s.ku(C.bUq(s.a.c))
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
return A.b(s.z_(q,!0,!0),$async$$0)
case 14:w=1
break
case 13:q=r.b
q.toString
w=15
return A.b(s.aM4(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.doB.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=A.bj(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.doE.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.aay(),$async$$0)
case 3:q=e
if(q==null||B.a.i(q).length===0){w=1
break}s=C.fPX(q)
if(s==null){r.ku("Could not read that backup file.")
w=1
break}if(!C.bUp(s,r.a.c,null)){r.ku(C.bUq(r.a.c))
w=1
break}w=4
return A.b(r.bBN(s),$async$$0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.doL.prototype={
$1(d){var w=null,v=new A.ap(B.as,$.av()),u=A.M(d).ax.a===B.H,t=u?B.hx:B.c,s=x.p,r=A.v(A.a([A.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,A.l(w,w,u?B.af:B.aj,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),B.ay,A.aK(w,B.U,!0,w,!0,B.q,w,A.aL(),v,w,w,w,w,w,2,A.bn(w,new A.b3(4,A.m(14),B.dd),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),B.z,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,B.dN,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.L,w,B.am,w,w,w,w)],s),B.F,w,B.e,B.R,0,B.p)
return A.eq(A.a([A.bK(!1,B.df,w,w,!0,w,w,new C.doJ(d),w,w),A.bL(D.eRY,new C.doK(d,v),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.f4m,w)},
$S:21}
C.doJ.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.doK.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a9(this.a,!1).M(w)
return null},
$S:0}
C.doG.prototype={
$1(d){return D.fiM},
$S:z+12}
C.doH.prototype={
$0(){return this.a.Dz(B.a.i(this.b))},
$S:1}
C.doI.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(C.aUw(t.b,r.a.c),$async$$0)
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
return A.b(r.z_(s,!0,!0),$async$$0)
case 11:w=1
break
case 7:r.ku(C.bUq(r.a.c))
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
return A.b(r.aM4(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.doQ.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.doU.prototype={
$1(d){this.a.P8()
return null},
$S:14}
C.doR.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.doS.prototype={
$0(){var w=null,v=this.a
A.fE(new A.fx(v.gatb()))
this.b.H(x.q).f.P(A.b0(w,w,w,w,w,B.q,w,A.d("Code "+v.gatb()+" copied",w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.doT.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.doV.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!(B.a.a_(s,"NGMYSNAP1|")||B.a.a_(s,"NGMYLOCALSYNC1|")||B.a.a_(s,"NGMYLOCALLIVE1|")||B.a.a_(s,"NGMYLOCALDEP1|")))continue
r.e=!0
A.a9(this.b,!1).M(s)
return}},
$S:176}
C.f7F.prototype={
$1(d){return D.fh7},
$S:z+13}
C.f8S.prototype={
$1(d){return new C.acf(this.a,this.b,this.c,null)},
$S:z+14}
C.eGH.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.eGI.prototype={
$0(){A.a9(this.a,!1).M(!0)
return null},
$S:0}
C.cZu.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fw()},
$S:8}
C.cZr.prototype={
$2(d,e){return e.ahY(e.a.toUpperCase())},
$S:1633}
C.cZs.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=B.a.i(w.d.a.a)
A.a9(v,!1).M(w)
return null},
$S:2}
C.cZt.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.bV7.prototype={
$1(d){var w=J.q(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!B.d.ba(D.cXb,B.a.gkV(v))},
$S:4}
C.ffR.prototype={
$1(d){return d.a===this.a},
$S:1634}
C.ffS.prototype={
$0(){return B.d.gL(B.AQ)},
$S:1635}
C.dvf.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.n(new C.dve(v))
w=v.r
w===$&&A.c()
if(w<=0)v.b0a("Time's up")},
$S:14}
C.dve.prototype={
$0(){var w=this.a,v=w.r
v===$&&A.c()
w.r=v-1
return v},
$S:0}
C.dv6.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dvb.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.n(new C.dv8(w,d,e))},
$S:131}
C.dv8.prototype={
$0(){var w=this.a,v=this.c
w.e=B.o.E(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dvc.prototype={
$0(){var w=this.a
if(w.c==null)return
w.n(new C.dv7(w))
w.ckP(!0)},
$S:0}
C.dv7.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dvd.prototype={
$1(d){this.a.b0a(d)
return null},
$S:2}
C.dv9.prototype={
$0(){return A.iG(this.a,null)},
$S:0}
C.dva.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.c1y.prototype={
$1(d){return D.dg7},
$S:z+15}
C.c1x.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.f9E.prototype={
$5(d,e,f,g,h){var w,v=null,u=J.a8(d),t=A.aN(u.h(d,e)),s=t==null?v:B.k.N(t)
if(s==null)s=0
if(s<=0)return v
t=u.h(d,g)
if(J.k(t==null?"":t)!==h){u.m(d,g,h)
u.m(d,f,0)}t=A.aN(u.h(d,f))
w=t==null?v:B.k.N(t)
if(w==null)w=0
if(w>=s)return v
u.m(d,f,w+1)
u=A.aN(u.h(d,"outcome"))
return u==null?v:B.k.N(u)},
$S:1636}
C.f9F.prototype={
$2(d,e){var w=A.aN(J.q(d,e))
w=w==null?null:B.k.N(w)
return w==null?0:w},
$S:566}
C.f9G.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:219}
C.fmS.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.h0d(w,v):C.fGY(w,v)
if(u===3)++w.f
C.adD(w,this.c,u)
return u},
$S:1637}
C.fmU.prototype={
$0(){return C.h0d(this.a,this.b)},
$S:114}
C.fmT.prototype={
$0(){return C.fGY(this.a,this.b)},
$S:114}
C.doq.prototype={
$0(){var w=this.a
if(w.a.c)w.n(new C.dop(w))},
$S:0}
C.dop.prototype={
$0(){this.a.r=1+B.o.F(A.yP(new A.Q(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dor.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&A.c()
u=u.x
u===$&&A.c()
w=B.k.bt(u*10)
if(w!==v.w)v.n(new C.doo(v,w))}},
$S:0}
C.doo.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.c3v.prototype={
$3(d,e,f){var w=null
return A.D(A.v(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,B.I,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.bA,A.f_(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.h,B.dq)],x.p),B.m,w,B.e,B.j,0,B.p),1)},
$S:1638}
C.c3u.prototype={
$3(d,e,f){var w=null
return A.d("$"+B.k.a9(e,2),w,w,w,w,w,w,B.ov,w,w,w)},
$S:359}
C.c3X.prototype={
$1(d){return new C.LY(this.a,this.b,!1,null,null)},
$S:z+16}
C.dNx.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=A.m(e?0:30)
e=e?g:A.H(B.b3.j(0.5),B.r,1)
w=f.a.e?g:A.a([new A.ab(2,B.G,B.b3.j(0.35),B.J,36),new A.ab(0,B.G,B.by.j(0.175),B.J,24)],x.V)
v=A.m(f.a.e?0:30)
u=x.O
t=A.an(g,A.p(g,g,B.h,g,g,new A.o(g,g,g,g,g,new A.bR(B.A,0.5,B.w,g,0,A.a([B.b6.j(0.22),B.K],u),g,g),B.a6),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=A.an(-50,A.p(g,g,B.h,g,g,new A.o(g,g,g,g,g,new A.bR(B.A,0.5,B.w,g,0,A.a([B.by.j(0.18),B.K],u),g,g),B.a6),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?B.j:B.R
p=x.p
o=A.a([],p)
if(f.a.e)o.push(B.P)
n=x.V
o.push(A.p(g,D.bx0,B.h,g,g,new A.o(g,g,A.H(B.aK.j(0.8),B.r,2.5),g,A.a([new A.ab(0,B.G,B.b3.j(0.55),B.cs,18)],n),E.ta,B.a6),g,88,g,g,g,g,g,88))
o.push(B.aO)
o.push(A.nr(B.jc,D.f29,new C.dNt()))
o.push(B.P)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(A.d(m,g,g,g,g,g,g,A.l(g,g,B.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,B.cq,g,1.45,!0,g,g,g,g,g,g,g,g),B.L,g,g))
m=this.b
if(m.length!==0){l=B.cD.j(0.12)
k=A.m(18)
j=A.H(B.cD.j(0.45),B.r,1)
i=A.a([A.B(A.a([A.V(D.br3,B.cD.j(0.95),g,g,g,20),B.aa,A.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,A.l(g,g,B.cD.j(0.95),g,g,g,g,g,g,g,g,13,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),B.m,g,B.e,B.j,0,g,g),B.T,A.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,A.l(g,g,B.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),B.T],p)
B.d.v(i,new A.J(m,new C.dNu(),A.U(m).k("J<1,r>")))
B.d.v(o,A.a([B.aO,A.p(g,A.v(i,B.F,g,B.e,B.j,0,B.p),B.h,g,g,new A.o(l,g,j,k,g,g,B.n),g,g,g,g,B.bC,g,g,1/0)],p))}o.push(B.bu)
m=B.x.j(0.35)
l=A.m(18)
k=A.H(B.b3.j(0.35),B.r,1)
o.push(A.p(g,A.v(A.a([f.atM(B.hp,"Unlimited games with an active plan",B.b6),B.P,f.atM(B.k8,"Weekday check-ins grow your balance",B.b3),B.P,f.atM(B.m2,"Compete, bet, and earn points",B.aK)],p),B.m,g,B.e,B.j,0,B.p),B.h,g,g,new A.o(m,g,k,l,g,g,B.n),g,g,g,g,B.bC,g,g,1/0))
o.push(B.d3)
l=A.m(16)
n=A.a([new A.ab(0,B.G,B.by.j(0.45),B.cs,16)],n)
o.push(new A.a5(1/0,g,A.bU(A.dq(D.bAc,D.eZ2,new C.dNv(f,a0),A.bk(B.K,g,g,g,B.c,B.H7,g,B.K,new A.b6(A.m(16),B.X),g,g,g)),new A.o(g,g,g,l,n,E.ta,B.n),B.bb),g))
o.push(B.P)
n=f.a.e?"Back":"Maybe later"
o.push(A.bK(!1,A.d(n,g,g,g,g,g,g,A.l(g,g,B.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,new C.dNw(f,a0),g,g))
if(f.a.e)o.push(B.b8)
h=A.p(g,A.bu(v,new A.am(B.W,g,B.a9,B.q,A.a([t,u,new A.C(new A.N(22,r,22,q),A.v(o,B.m,g,B.e,s,0,B.p),g)],p),g),B.ao),B.h,g,g,new A.o(g,g,e,d,w,D.bJm,B.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return A.ew(g,B.K,h,g,g,g,Ad.VF,B.cZ,g,g,g)},
$S:656}
C.dNt.prototype={
$1(d){return D.bIj.au(0,d)},
$S:65}
C.dNu.prototype={
$1(d){var w=null
return new A.C(B.fk,A.B(A.a([A.V(Ak.Xw,B.cD.j(0.85),w,w,w,14),B.aa,A.D(A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$S:128}
C.dNv.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{A.a9(this.b,!1).M(null)
w.a.c.$0()}},
$S:0}
C.dNw.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else A.a9(this.b,!1).M(null)},
$S:0}
C.fid.prototype={
$1(d){if(d.gma())this.a.a=d
return d.gma()},
$S:746}
C.fi0.prototype={
$1(d){$.aT.x1$.push(new C.fi_(this.a))},
$S:8}
C.fi_.prototype={
$1(d){return this.a.$0()},
$S:8}
C.f5W.prototype={
$1(d){return C.h0j(this.a,this.b+1)},
$S:8}
C.fjB.prototype={
$2(d,e){var w=A.aG(d,B.bR,x.w).w.a
return new A.a5(w.a,w.b,A.ce(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:164}
C.c4a.prototype={
$1(d){return d.r===this.a},
$S:243}
C.c4b.prototype={
$1(d){var w=$.aNP(),v=w.a
w.sq(0,v+1)
return v},
$S:1640}
C.c4c.prototype={
$1(d){},
$S:29}
C.c49.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:243}
C.c48.prototype={
$1(d){return d.f.c8(this.a)},
$S:243}
C.f46.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:70}
C.fuZ.prototype={
$1(d){return C.a5f(this.a)},
$S:99}
C.fv_.prototype={
$1(d){var w=$.aNP()
w.sq(0,w.a+1)},
$S:28}
C.fv0.prototype={
$1(d){},
$S:29}
C.fv1.prototype={
$1(d){return new A.k5($.aNP(),new C.fuY(this.a,this.b),null,null,x.am)},
$S:1641}
C.fuY.prototype={
$3(d,e,f){var w=this.b
return new A.kY(C.ana(this.a,!1),new C.fuX(w),w,null,x.gv)},
$S:1642}
C.fuX.prototype={
$2(d,e){var w=e.b
return new C.ab5(w==null?this.a:w,null)},
$S:z+17}
C.dNA.prototype={
$1(d){return d.c},
$S:243}
C.dNB.prototype={
$1(d){return d.gbbi()},
$S:1643}
C.dNC.prototype={
$2(d,e){return d+e},
$S:93}
C.dND.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.dNF.prototype={
$2(d,e){return B.P},
$S:35}
C.dNE.prototype={
$2(d,e){return new C.ab4(J.q(this.a.c,e),null)},
$S:z+18}
C.dNz.prototype={
$1(d){return d==null?"\u2026":C.bwf(d)},
$S:1644}
C.fv4.prototype={
$3(d,e,f){var w=this
return A.qY(new C.axw(w.a,w.b,w.c,w.d,new C.fv2(d,w.e),new C.fv3(d,w.f),null))},
$C:"$3",
$R:3,
$S:92}
C.fv2.prototype={
$0(){A.a9(this.a,!1).M(null)
C.h3g(this.b)},
$S:0}
C.fv3.prototype={
$0(){A.a9(this.a,!1).M(null)
C.h3g(this.b)},
$S:0}
C.d5b.prototype={
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
B.d.v(w,new A.J(t,new C.d5a(),A.U(t).k("J<1,r>")))}t=h.d
t===$&&A.c()
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,A.aG(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?A.a([B.bm,B.f2,B.eB],r):A.a([B.aD,B.f3,B.f_],r)
p=A.m(26)
o=A.H(B.c.j(0.4),B.r,2)
n=x.V
m=A.a([new A.ab(6,B.G,(h.a.c?B.ds:B.dC).j(0.5),B.J,36)],n)
l=A.a([],g)
if(h.a.c){k=A.di()
j=k.a
j.$flags&2&&A.ah(j)
j[11]=0.001
k.jz(-0.35)
r=A.a([X.aak,B.ro],r)
l.push(new A.a5(i,100,new A.am(B.A,i,B.a9,B.h,A.a([A.fo(B.A,A.p(i,D.aYb,B.h,i,i,new A.o(i,i,i,i,A.a([new A.ab(4,B.G,B.cQ.j(0.6),B.J,24),new A.ab(0,B.G,B.x.j(0.3),B.dn,12)],n),new A.bR(B.A,0.5,B.w,i,0,r,i,i),B.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.bDm)
l.push(B.ay)
l.push(A.d(h.a.d,i,i,i,i,i,i,B.a4G,B.L,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=A.m(18)
k=A.H(B.f2,B.r,4)
B.d.v(l,A.a([B.ay,D.eTz,B.P,A.p(i,A.d(r,i,i,i,i,i,i,D.eKA,B.L,i,i),B.h,i,i,new A.o(B.c,i,k,n,i,i,B.n),i,i,i,i,B.V9,i,i,1/0)],g))}B.d.v(l,A.a([B.ab,A.d(h.a.e,i,i,i,i,i,i,D.eNd,B.L,i,i)],g))
l.push(B.dX)
r=A.D(A.dV(D.eRg,h.a.r,A.db(i,i,i,i,i,i,i,i,i,B.c,i,i,B.cc,i,i,D.aQc,i,i,i,i)),1)
h=h.a
n=h.w
l.push(A.B(A.a([r,B.aw,A.D(A.bL(G.aLf,n,A.bk(B.c,i,i,i,h.c?B.f2:B.f3,i,B.cc,i,i,i,i,i)),1)],g),B.m,i,B.e,B.j,0,i,i))
w.push(A.e5(B.A,A.p(i,A.v(l,B.m,i,B.e,B.R,0,B.p),B.h,i,i,new A.o(i,i,o,p,m,new A.a3(B.ax,B.aC,B.w,q,i,i),B.n),i,i,i,B.a8,B.adM,i,i,s),1+t*0.02,i,i))
return new A.am(B.A,i,B.a9,B.h,w,i)},
$S:108}
C.d5a.prototype={
$1(d){var w=null,v=d.a,u=d.b
return A.an(w,A.d8(A.eu(B.A,d.d,A.V(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.c5M.prototype={
$2(d,e){var w=null,v=this.a,u=C.hly(A.JA(v.c,v.d))
return A.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1645}
C.c5L.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:70}
C.bVE.prototype={
$0(){},
$S:0}
C.f35.prototype={
$1(d){return B.o.u(d)},
$S:83}
C.dGC.prototype={
$0(){return this.a.y=!0},
$S:0}
C.dGD.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.dGE.prototype={
$0(){var w=this.a
return w.w=D.Of[w.d.aB(5)]},
$S:0}
C.dGF.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.dGG.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.dGH.prototype={
$0(){var w=this.a
return w.n(new C.dGB(w))},
$S:0}
C.dGB.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dGI.prototype={
$0(){var w=this.a
return w.n(new C.dGA(w))},
$S:0}
C.dGA.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dGL.prototype={
$0(){return A.iG(this.a,null)},
$S:0}
C.dGM.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&B.a.i(t.e.a.a).length===0?B.bm:A.X(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),r=A.m(10)
t=t.y?u:new C.dGK(t,d)
w=A.m(10)
v=B.k.a9(d,0)
return A.D(new A.C(B.jH,A.aD(!1,B.a1,!0,r,A.aI(!1,w,!0,new A.a5(u,38,A.au(A.d("$"+v,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),B.h,s,0,u,u,u,u,u,B.ad),u),1)},
$S:1646}
C.dGK.prototype={
$0(){var w=this.a
return w.n(new C.dGJ(w,this.b))},
$S:0}
C.dGJ.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bJ(0,B.c0)},
$S:0}
C.dNX.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+B.cR.gcs().aG(this.c)},
$S:0}
C.dNY.prototype={
$0(){return A.iG(this.a,null)},
$S:0}
C.dNT.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=A.m(14),s=u?B.c.j(0.1):B.K,r=A.H(u?D.eD.j(0.5):B.K,B.r,1),q=A.V(e,u?D.eD:B.az,w,w,w,20)
return A.D(A.aH(w,A.dj(w,A.B(A.a([q,B.bp,A.d(f,w,w,w,w,w,w,A.l(w,w,u?B.c:B.az,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.b7,B.j,0,w,w),w,w,B.ba,new A.o(s,w,r,t,w,w,B.n),B.a1,w,46,w,w,w,w,w),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dNV(v,d),w,w,w,w,w,w,!1,B.ae),1)},
$S:1647}
C.dNV.prototype={
$0(){var w=this.a
return w.n(new C.dNU(w,this.b))},
$S:0}
C.dNU.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dNW.prototype={
$0(){var w=this.a,v=w.d===B.ke?"Cash App tag":"Bitcoin address"
return w.Hw(this.b,v)},
$S:0}
C.dNS.prototype={
$0(){var w=this.a
return w.Hw(w.gaoE(),"Code")},
$S:0}
C.c4C.prototype={
$1(d){return C.hhL(A.a_(d,x.N,x.z))},
$S:z+20}
C.c4D.prototype={
$2(d,e){return d.c.aI(0,e.c)},
$S:z+6}
C.c4z.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.c4A.prototype={
$2(d,e){return d.c.aI(0,e.c)},
$S:z+6}
C.c4B.prototype={
$1(d){return d.ac()},
$S:z+23}
C.c4E.prototype={
$1(d){var w=d.c
return!w.cY(this.a.bN(-36e8))&&!w.c8(this.b)},
$S:z+7}
C.bY1.prototype={
$1(d){return C.hhM(A.a_(d,x.N,x.z))},
$S:z+24}
C.bY2.prototype={
$2(d,e){return e.b.aI(0,d.b)},
$S:z+8}
C.bY_.prototype={
$1(d){return d.ac()},
$S:z+26}
C.bY0.prototype={
$2(d,e){return e.b.aI(0,d.b)},
$S:z+8}
C.bY4.prototype={
$1(d){var w=d.b
return!w.cY(this.a)&&!w.c8(this.b)},
$S:z+27}
C.c4L.prototype={
$1(d){return d.ac()},
$S:z+28}
C.c4K.prototype={
$1(d){return C.fSb(A.a_(x.f.a(d),x.N,x.z))},
$S:z+29}
C.c4J.prototype={
$1(d){return d.ac()},
$S:z+30}
C.c4I.prototype={
$1(d){return C.hlc(A.a_(x.f.a(d),x.N,x.z))},
$S:z+31}
C.c4N.prototype={
$1(d){return C.hlb(A.a_(x.f.a(d),x.N,x.z))},
$S:z+32}
C.c4O.prototype={
$2(d,e){return B.o.aI(d.f,e.f)},
$S:z+2}
C.c4P.prototype={
$1(d){return d.ac()},
$S:z+34}
C.dRC.prototype={
$1(d){return d.b6P(A.bj(d.e,!0,x.u))},
$S:z+36}
C.dRD.prototype={
$2(d,e){return B.o.aI(d.f,e.f)},
$S:z+2}
C.dRw.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dRx.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dRf.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.K(w,this.b)},
$S:0}
C.dRg.prototype={
$1(d){return new C.NP(this.a,null)},
$S:z+9}
C.dRh.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=B.d.bi(t,new C.dRe(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){B.d.cu(u.d,w)
u.HG()}},
$S:0}
C.dRe.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dRt.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(A.E(["role","admin","text",this.b],w,w))},
$S:0}
C.dRu.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(A.E(["role","ai","text",v],t,t))}else{v=t.d
v===$&&A.c()
t.d=C.hL6(v,w[0],w[3])
t.HG()
t=w[2]
if(t==null)t="Created "+J.aa(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(A.E(["role","ai","text",t],w,w))}},
$S:0}
C.dRv.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=B.d.gcV(v).Q
v.toString
w.hP(v)}},
$S:8}
C.dRn.prototype={
$1(d){return new C.NP(this.a,null)},
$S:z+9}
C.dRo.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dRm.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cu(w,this.b)},
$S:0}
C.dRs.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&A.c()
v=B.d.cu(w,s)
B.d.ck(t.d,u.a,v)
t.HG()},
$S:0}
C.dRr.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
return new C.YZ(u[w],new C.dRq(v,w),null)},
$S:z+59}
C.dRq.prototype={
$1(d){var w=this.a
return w.n(new C.dRp(w,this.b,d))},
$S:z+40}
C.dRp.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dRj.prototype={
$0(){var w=this.a
return w.n(new C.dRi(w))},
$S:0}
C.dRi.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dRk.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?B.cp:B.aI
return new A.C(B.fk,A.d(t+": "+A.t(s),w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?B.a3:B.cq,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:111}
C.dRl.prototype={
$1(d){return this.a.a_8()},
$S:2}
C.dRB.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.rm:B.c
u=A.m(16)
t=A.m(16)
s=l?B.aI:B.aJ
r=w.d
q=A.aY(r).j(0.15)
p=A.m(12)
q=A.p(n,A.V(B.agg,l?B.bI:B.aj,n,n,n,20),B.h,n,n,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.bS,n,n,n)
p=A.aY(r).j(0.12)
o=A.m(8)
o=A.p(n,A.V(w.c,A.aY(r),n,n,n,18),B.h,n,n,new A.o(p,n,n,o,n,n,B.n),n,n,n,n,B.ho,n,n,n)
r=A.B(A.a([o,B.aw,A.D(A.d(w.b,n,n,n,n,n,n,A.l(n,n,l?B.aN:B.M,n,n,n,n,n,n,n,n,n,n,n,B.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),B.m,n,B.e,B.j,0,n,n)
p=w.e.length
return new A.C(B.da,A.aD(!1,B.a1,!0,u,A.dL(!1,n,n,n,!0,n,n,n,!0,n,new H.arL(q,e,!0,n),n,n,n,n,new C.dRy(m,e),!1,n,n,new A.b6(t,new A.ay(s,1,B.r,-1)),n,n,A.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,A.l(n,n,l?B.bI:B.aj,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,A.AS(n,n,n,new C.dRz(),B.J,new C.dRA(m,e),B.ck,n,x.N),n),B.h,v,0,n,n,n,n,n,B.ad),new A.cx(w.a,x.W))},
$S:111}
C.dRA.prototype={
$1(d){var w=this
if(d==="edit")w.a.a7J(w.b)
if(d==="questions")w.a.WH(w.b)
if(d==="delete")w.a.bEC(w.b)},
$S:2}
C.dRz.prototype={
$1(d){return D.cuO},
$S:126}
C.dRy.prototype={
$0(){return this.a.WH(this.b)},
$S:0}
C.cFG.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q===$&&A.c()
w=d.a===q.a
if(w){q=r.f
q===$&&A.c()
q=A.aY(q).j(0.2)}else q=B.cW.j(0.1)
v=A.m(10)
if(w){u=r.f
u===$&&A.c()
u=A.aY(u)}else u=B.K
u=A.H(u,B.r,1)
t=r.f
t===$&&A.c()
return A.aI(!1,s,!0,A.p(s,A.V(d,A.aY(t),s,s,s,s),B.h,s,s,new A.o(q,s,u,v,s,s,B.n),s,s,s,s,B.ck,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cFF(r,d),s,s,s,s,s,s,s)},
$S:1648}
C.cFF.prototype={
$0(){var w=this.a
return w.n(new C.cFD(w,this.b))},
$S:0}
C.cFD.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cFH.prototype={
$1(d){var w=null,v=this.a,u=A.aY(d),t=v.f
t===$&&A.c()
return A.aH(w,A.hi(u,w,t===d?D.bAU:w,w,14),B.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cFE(v,d),w,w,w,w,w,w,!1,B.ae)},
$S:441}
C.cFE.prototype={
$0(){var w=this.a
return w.n(new C.cFC(w,this.b))},
$S:0}
C.cFC.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cFI.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.cFJ.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=B.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&A.c()
v=v.f
v===$&&A.c()
t=u.cAg(v,w,t)
A.a9(this.b,!1).M(t)
return null},
$S:0}
C.eBM.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return w.push(this.b)},
$S:0}
C.eBN.prototype={
$1(d){return new C.YY(this.a,null)},
$S:z+41}
C.eBT.prototype={
$2(d,e){return B.P},
$S:35}
C.eBS.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.rm:B.c
u=A.m(14)
t=A.m(14)
s=l?B.aI:B.aJ
r=w.d
if(r!=null&&r.length!==0){q=A.m(8)
r=A.bu(q,K.aMw(n,B.bQ,36,B.p7,l?B.bI:B.aj,r,48),B.ao)}else r=A.V(D.Xe,A.aY(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=A.d(q,n,2,B.a2,n,n,n,A.l(n,n,l?B.aN:B.M,n,n,n,n,n,n,n,n,n,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.aa(w.c)
o=w.e?" \xb7 Printable":""
return A.aD(!1,B.a1,!0,u,A.dL(!1,n,n,n,!0,n,n,n,!0,n,r,n,n,n,n,new C.eBQ(m,w,e),!1,n,n,new A.b6(t,new A.ay(s,1,B.r,-1)),n,n,A.d(""+p+" block(s)"+o,n,n,n,n,n,n,A.l(n,n,l?B.bI:B.aj,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,A.aF(n,n,n,n,D.bzk,n,n,n,new C.eBR(m,e),n,n,n,n,n,n),n),B.h,v,0,n,n,n,n,n,B.ad)},
$S:75}
C.eBR.prototype={
$0(){var w=this.a
w.n(new C.eBO(w,this.b))
w.atP()},
$S:0}
C.eBO.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cu(w,this.b)},
$S:0}
C.eBQ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.aWy(u.b),$async$$0)
case 2:s=e
if(s!=null){t.n(new C.eBP(t,u.c,s))
t.atP()}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eBP.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eBI.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eBG.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
return new C.Tv(w,"Answer Document",null)},
$S:z+42}
C.eBH.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eBK.prototype={
$0(){var w,v,u=this.a,t=u.a.c,s=u.d
s===$&&A.c()
s=B.a.i(s.a.a)
w=u.e
w===$&&A.c()
v=u.f
u=u.r
if(v==null)v=t.d
A.a9(this.b,!1).M(new C.ia(t.a,s,w,v,u,t.f))
return null},
$S:0}
C.eBL.prototype={
$1(d){var w=this.a
return w.n(new C.eBJ(w,d))},
$S:9}
C.eBJ.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.c4F.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fjZ.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dSc.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.dRT.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.K(w,new C.ln("image","",this.b,null))},
$S:0}
C.dRY.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.K(w,new C.ln("video","","data:video/mp4;base64,"+B.cR.gcs().aG(this.b),null))},
$S:0}
C.dRW.prototype={
$1(d){var w=null,v=x.p,u=A.v(A.a([A.aK(w,B.U,!1,w,!0,B.q,w,A.aL(),this.a,w,w,w,w,w,2,D.bF7,B.z,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.am,w,w,w,w),A.aK(w,B.U,!1,w,!0,B.q,w,A.aL(),this.b,w,w,w,w,w,2,D.bF6,B.z,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.am,w,w,w,w)],v),B.m,w,B.e,B.R,0,B.p)
return A.eq(A.a([A.bK(!1,B.df,w,w,!0,w,w,new C.dRU(d),w,w),A.bL(D.f1G,new C.dRV(d),w)],v),w,w,w,u,w,w,w,w,D.eQD,w)},
$S:21}
C.dRU.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.dRV.prototype={
$0(){A.a9(this.a,!1).M(!0)
return null},
$S:0}
C.dRX.prototype={
$0(){var w,v=this.a.e
v===$&&A.c()
w=B.a.i(this.b.a.a)
return B.d.K(v,new C.ln("link","",B.a.i(this.c.a.a),w))},
$S:0}
C.dRP.prototype={
$1(d){return B.a.i(d)},
$S:13}
C.dRQ.prototype={
$1(d){return d.length!==0},
$S:3}
C.dRR.prototype={
$1(d){return B.a.i(B.a.e1(d,A.ae("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:13}
C.dRS.prototype={
$1(d){return d.length!==0},
$S:3}
C.dS2.prototype={
$0(){var w=this.a.by2()
A.a9(this.b,!1).M(w)
return null},
$S:0}
C.dS3.prototype={
$0(){return this.a.atQ("**","**")},
$S:0}
C.dS4.prototype={
$0(){return this.a.atQ("*","*")},
$S:0}
C.dS5.prototype={
$0(){return this.a.atQ("__","__")},
$S:0}
C.dS6.prototype={
$0(){return this.a.aUK("## Section title")},
$S:0}
C.dS7.prototype={
$0(){return this.a.aUK("\u2022 First point\n\u2022 Second point")},
$S:0}
C.dS8.prototype={
$0(){},
$S:0}
C.dS9.prototype={
$0(){var w=this.a
w.n(new C.dS1(w))},
$S:0}
C.dS1.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.K(w,D.djt)},
$S:0}
C.dSa.prototype={
$0(){var w=this.a
w.n(new C.dS0(w))},
$S:0}
C.dS0.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.K(w,D.dju)},
$S:0}
C.dSb.prototype={
$1(d){var w,v,u=null,t=d.b,s=t.a
A:{if("image"===s){w="Image"
break A}if("video"===s){w="Video"
break A}if("link"===s){w=t.d
if(w==null)w="Link"
break A}if("signature"===s){w="Signature"
break A}w=s
break A}v=this.b.a
w=A.d(w,u,u,u,u,u,u,A.l(u,u,v?B.ik:B.aF,u,u,u,u,u,u,u,u,11,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
v=v?B.cJ:B.iX
return A.Cj(u,v,B.ait,w,u,new C.dS_(this.a,d),u)},
$S:z+45}
C.dS_.prototype={
$0(){var w=this.a
return w.n(new C.dRZ(w,this.b))},
$S:0}
C.dRZ.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.cu(w,this.b.a)},
$S:0}
C.dRM.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.aNq},
$S:0}
C.dRN.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.fhY},
$S:0}
C.dRE.prototype={
$0(){var w=this.a
w.d=D.aNp
w.f=w.e=null},
$S:0}
C.dRF.prototype={
$0(){var w=this.a
w.d=D.aNq
w.f=null},
$S:0}
C.dRO.prototype={
$2(d,e){return B.o.aI(d.f,e.f)},
$S:z+2}
C.dRH.prototype={
$2(d,e){var w=this.a,v=w.gb17()[e]
return new C.a9E(v,this.b,new C.dRG(w,v),null)},
$S:z+46}
C.dRG.prototype={
$0(){return this.a.c_U(this.b.a)},
$S:0}
C.dRJ.prototype={
$2(d,e){return B.o.aI(d.f,e.f)},
$S:z+47}
C.dRL.prototype={
$2(d,e){return B.T},
$S:35}
C.dRK.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.rm:B.c,p=A.m(16),o=A.m(16),n=A.m(16),m=A.H(r?B.aI:B.aJ,B.r,1),l=A.a([new A.ab(0,B.G,B.x.j(r?0.28:0.06),B.dE,8)],x.V),k=A.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=A.m(10)
v=A.m(10)
k.push(A.bu(w,K.aMw(v,B.bQ,52,D.Xe,r?B.bI:B.aj,j,52),B.ao))}else{j=u.d.d
w=A.aY(j).j(0.15)
v=A.m(12)
k.push(A.p(t,A.V(D.Xe,A.aY(j),t,t,t,24),B.h,t,t,new A.o(w,t,t,v,t,t,B.n),t,52,t,t,t,t,t,52))}k.push(B.bd)
k.push(A.D(A.d(s.b,t,t,t,t,t,t,A.l(t,t,r?B.aN:B.M,t,t,t,t,t,t,t,t,13,t,t,B.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(A.V(B.eo,r?B.bI:B.aj,t,t,t,22))
return A.aD(!1,B.a1,!0,p,A.aI(!1,o,!0,A.p(t,A.B(k,B.m,t,B.e,B.j,0,t,t),B.h,t,t,new A.o(t,t,m,n,l,t,B.n),t,t,t,t,B.bl,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dRI(u.a,s),t,t,t,t,t,t,t),B.h,q,0,t,t,t,t,t,B.ad)},
$S:75}
C.dRI.prototype={
$0(){return this.a.c6B(this.b)},
$S:0}
C.c4H.prototype={
$1(d){return new C.a9w(d,this.a,null)},
$S:z+48}
C.czm.prototype={
$0(){var w=this.a.c,v=w.c,u=A.o3(v==null?w.b:v)
if(u!=null)A.iK(u,B.fg,null)},
$S:0}
C.czn.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.czo.prototype={
$1(d){var w=null,v=this.a.d.a,u=A.d("\u2022  ",w,w,w,w,w,w,A.l(w,w,v?B.cp:B.aI,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=B.a.i(d)
return new A.C(B.o7,A.B(A.a([u,A.D(A.d(t,w,w,w,w,w,w,A.l(w,w,v?B.cp:B.aI,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.F,w,B.e,B.j,0,w,w),w)},
$S:128}
C.d9d.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.d9f.prototype={
$0(){return this.a.n(new C.d9e(this.b))},
$S:0}
C.d9e.prototype={
$0(){var w=this.a
return w.a.f?w.fT(0):w.p7(0)},
$S:0}
C.f2Q.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.dSq.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.Bf)w.z=v
else w.Q=v},
$S:0}
C.dSh.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=B.d.gcV(v).Q
v.toString
w.lE(v,B.co,B.eM)},
$S:8}
C.dSj.prototype={
$1(d){return J.q(d,"role")==="ai"},
$S:89}
C.dSk.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.E(["role","user","text",this.b],v,v))
w.d.bJ(0,B.c0)
w.r=!0},
$S:0}
C.dSl.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.E(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.dSm.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+A.t(w.h(d,"text"))},
$S:151}
C.dSn.prototype={
$0(){var w=x.N
return this.a.f.push(A.E(["role","ai","text",this.b],w,w))},
$S:0}
C.dSo.prototype={
$0(){var w=x.N
return this.a.f.push(A.E(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.dSp.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dSi.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=A.mq(l,B.by.j(0.9),l,l,l,l,l,2,l,l)
return new A.C(B.c4,A.B(A.a([new A.a5(22,22,k,l),B.aw,A.d("Writing full song\u2026",l,l,l,l,l,l,A.l(l,l,this.b?B.az:B.dy,l,l,l,l,l,l,l,l,12,B.cx,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),B.m,l,B.e,B.j,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?B.a7:B.a4
k=k.c
k.toString
k=A.aG(k,B.bR,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new A.a3(B.a4,B.a7,B.w,A.a([B.aB,B.by.j(0.85)],x.O),l,l)
else{q=x.O
q=new A.a3(B.a4,B.a7,B.w,v?A.a([B.bj,B.M],q):A.a([B.c,B.aN],q),l,l)}p=A.a([new A.ab(0,B.G,(u?B.by:B.aB).j(0.22),B.j8,14)],x.V)
o=A.H(B.c.j(u?0.2:0.08),B.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=B.c
else v=v?B.aJ:B.bg
n=u?13.5:15
m=u?B.bi:B.cx
return new A.bI(t,l,l,A.p(l,A.d(w,l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?B.a3:B.cq,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),B.h,l,new A.aW(0,k.a.a*0.94,0,1/0),new A.o(l,l,o,new A.bv(B.jS,B.jS,new A.b1(s,s),new A.b1(r,r)),p,q,B.n),l,l,l,B.kw,B.iL,l,l,l),l)},
$S:42}
C.dSx.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&A.c()
w=m.x
w===$&&A.c()
v=A.m(22)
u=this.b
t=x.O
s=u?A.a([D.a95,B.M,B.nd],t):A.a([B.q5,B.q_,B.oP],t)
w=A.a([new A.ab(-4,B.G,B.aB.j(0.35+w*0.25),B.dn,28)],x.V)
r=A.H(B.c.j(u?0.08:0.5),B.r,1)
q=A.di()
p=q.a
p.$flags&2&&A.ah(p)
p[11]=0.001
m=m.x
m===$&&A.c()
q.fl(m*0.08)
q=A.fo(B.A,A.p(o,D.bw5,B.h,o,o,new A.o(o,o,A.H(B.aK.j(0.6),B.r,2),o,o,D.dWA,B.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=A.nr(B.jc,D.f5S,new C.dSu())
p=x.p
m=A.a([A.B(A.a([q,B.bd,A.D(A.v(A.a([m,A.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,A.l(o,o,u?B.aQ:B.aT,o,o,o,o,o,o,o,o,10,o,o,B.a3,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),B.F,o,B.e,B.j,0,B.p),1)],p),B.m,o,B.e,B.j,0,o,o),B.ab,A.B(A.a([n.asg(D.Bf,"Swahili","\ud83c\uddf9\ud83c\uddff",u),B.aa,n.asg(D.aAy,"English","\ud83c\uddec\ud83c\udde7",u),B.aa,n.asg(D.Bg,"Mix","\ud83d\udd25",u)],p),B.m,o,B.e,B.j,0,o,o)],p)
if(n.x!==D.Bg){t=A.a([B.P,n.coU(u)],p)
if(n.w){q=n.x===D.Bf?D.a_X:D.a_c
p=A.U(q).k("J<1,r>")
q=A.z(new A.J(q,new C.dSv(n,u),p),p.k("ai.E"))
t.push(new A.C(B.ky,A.c9(B.bJ,q,B.bx,6,6),o))}B.d.v(m,t)}else{t=A.a([B.by.j(0.22),B.aB.j(0.12)],t)
q=A.m(12)
p=A.H(B.by.j(0.45),B.r,1)
m.push(new A.C(B.ky,A.p(o,A.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,A.l(o,o,u?B.ie:B.kT,o,o,o,o,o,o,o,o,10,o,o,B.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),B.h,o,o,new A.o(o,o,p,q,o,new A.a3(B.a4,B.a7,B.w,t,o,o),B.n),o,o,o,o,B.bS,o,o,o),o))}m.push(B.P)
t=x.dc
n=A.z(new A.J(D.cR1,new C.dSw(n,u),t),t.k("ai.E"))
m.push(A.B(n,B.m,o,B.e,B.j,0,o,o))
return A.p(o,A.v(m,B.ag,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(o,o,r,v,w,new A.a3(B.ax,B.aC,B.w,s,o,o),B.n),o,o,o,I.acH,I.acV,o,o,o)},
$S:90}
C.dSu.prototype={
$1(d){return D.bIM.au(0,d)},
$S:65}
C.dSv.prototype={
$1(d){return this.a.coV(d,this.b)},
$S:z+49}
C.dSw.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aAA?6:0,m=o?5:0,l=A.m(12)
if(o){w=this.b
v=w?B.aB.j(0.45):B.aB.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=B.x.j(w?0.25:0.05)
u=v
v=w
w=u}t=A.m(12)
p=p.r?q:new C.dSt(p,d)
s=C.hmF(d)
if(o)r=B.c
else r=v?B.af:B.bg
r=A.d(s,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.hmG(d)
if(o)v=B.af
else v=v?B.c2:B.dy
return A.D(new A.C(new A.N(0,0,n,0),A.aD(!1,B.a1,!0,l,A.aI(!1,t,!0,new A.C(F.Vf,A.v(A.a([r,A.d(s,q,q,q,q,q,q,A.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.e,B.j,0,B.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.h,w,m,q,q,q,q,q,B.ad),q),1)},
$S:z+50}
C.dSt.prototype={
$0(){var w=this.a
return w.n(new C.dSs(w,this.b))},
$S:0}
C.dSs.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dSz.prototype={
$0(){var w=this.a
return w.n(new C.dSy(w))},
$S:0}
C.dSy.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dSg.prototype={
$0(){var w=this.a
return w.n(new C.dSf(w,this.b))},
$S:0}
C.dSf.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.Bg
if(v===D.aAy&&w.Q==null)w.Q=B.d.gL(D.a_c).a},
$S:0}
C.dSA.prototype={
$0(){return this.a.ckG(this.b.a)},
$S:0}
C.dSr.prototype={
$0(){return this.a.Hx(this.b)},
$S:0}
C.dSd.prototype={
$1(d){return this.a.aUL()},
$S:2}
C.dSe.prototype={
$0(){return this.a.aUL()},
$S:0}
C.fvP.prototype={
$1(d){var w=this
return new C.XI(w.a,w.b,w.c,new C.fvO(w.d),null)},
$S:z+51}
C.fvO.prototype={
$0(){return J.lG(this.a.b9())},
$S:0}
C.d6N.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.bby()},
$S:28}
C.d6O.prototype={
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
p=q?B.dQ:B.hp
o=B.o.F(w,4)
q=q?B.aZ:B.aL
return A.an(n,A.d8(A.V(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:331}
C.d6T.prototype={
$0(){},
$S:0}
C.d6S.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&A.c()
w=t.x
w===$&&A.c()
v=B.n5.av(0,B.k.E(w,0,1))
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793)
w=A.di()
u=w.a
u.$flags&2&&A.ah(u)
u[11]=0.0028
w.fl(t*0.08)
w.jz(0.12)
return A.e5(B.A,A.fo(B.A,e,null,w,!0),0.5+v*0.5,null,null)},
$S:44}
C.d6P.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=0.55+r*0.45
r=A.p(t,t,B.h,t,t,new A.o(t,t,t,t,A.a([new A.ab(6,B.G,B.aZ.j(w*0.5),B.J,36)],x.V),t,B.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new A.am(B.A,t,B.a9,B.q,A.a([r,new A.a5(96,96,A.mq(B.c.j(0.08),B.aZ,t,t,t,t,t,6,u/v,t),t),A.d(""+s.a.c,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,38,t,t,B.u,t,t,!0,t,t,t,t,t,A.a([new A.cL(B.aZ.j(w),B.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:108}
C.d6Q.prototype={
$1(d){return D.bIQ.au(0,d)},
$S:65}
C.d6R.prototype={
$0(){var w=this.a
w.a.bby()
w.a.e.$0()},
$S:0}
C.c6F.prototype={
$1(d){var w=!1
if(B.a.i(d.b.toLowerCase())===this.a)if(d.d===B.fm)if(d.x===B.dp){w=d.w
w=B.a.i(w==null?"":w)===this.b}return w},
$S:16}
C.c6S.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e10.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.e1H.prototype={
$1(d){var w=this.a
if(w.c!=null)w.O2()},
$S:8}
C.e1I.prototype={
$1(d){var w=$.aT.p2$
if(w===B.r7||w===B.r8)return
this.a.Dt()},
$S:14}
C.e1J.prototype={
$1(d){this.a.cqX()},
$S:14}
C.e1p.prototype={
$0(){this.a.I0(this.b.d,!1)},
$S:0}
C.e1q.prototype={
$0(){},
$S:0}
C.e1r.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.e1s.prototype={
$0(){},
$S:0}
C.e1t.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e1u.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.e1v.prototype={
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
C.e1k.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=A.bj(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=A.bj(v[1],!0,x.N)
w.Ns()
w.a5X()},
$S:0}
C.e11.prototype={
$0(){this.b.I0(this.c.d+this.a.a,!1)},
$S:0}
C.e1l.prototype={
$1(d){var w=d.d
return(w===B.fm||w===B.eI)&&d.x===B.dp},
$S:16}
C.e1m.prototype={
$1(d){return d.a},
$S:155}
C.e1n.prototype={
$1(d){return d.a===this.a},
$S:16}
C.e1o.prototype={
$0(){},
$S:0}
C.e15.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bj(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=A.bj(v[0],!0,x.N)},
$S:0}
C.e16.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.e1e.prototype={
$0(){},
$S:0}
C.e1b.prototype={
$0(){return this.a.a.c.d},
$S:77}
C.e1c.prototype={
$0(){var w=this.a,v=A.z(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e1d.prototype={
$0(){var w=this.a,v=A.z(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.e1f.prototype={
$0(){return this.a.z=!0},
$S:0}
C.e1g.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new A.uO(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.e1h.prototype={
$0(){return this.a.z=!1},
$S:0}
C.e1j.prototype={
$0(){var w=this.a
return w.n(new C.e1i(w))},
$S:0}
C.e1i.prototype={
$0(){return this.a.y=1},
$S:0}
C.e17.prototype={
$0(){return this.a.y=1},
$S:0}
C.e18.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.e1z.prototype={
$1(d){return d.a.length===0},
$S:16}
C.e1A.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:71}
C.e1E.prototype={
$0(){var w=this.a
return w.n(new C.e1x(w))},
$S:0}
C.e1x.prototype={
$0(){return this.a.y=1},
$S:0}
C.e1F.prototype={
$0(){var w=this.a
return w.n(new C.e1w(w))},
$S:0}
C.e1w.prototype={
$0(){return this.a.y=2},
$S:0}
C.e1G.prototype={
$0(){return A.iG(this.a,null)},
$S:0}
C.e1B.prototype={
$2$cloudRequest(d,e){return this.a.aVS(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1650}
C.e1C.prototype={
$0(){return this.a.Dt()},
$S:1}
C.e1D.prototype={
$0(){var w=this.a
return w.n(new C.e1y(w))},
$S:0}
C.e1y.prototype={
$0(){var w=this.a
return w.y=B.o.E(w.y-1,0,2)},
$S:0}
C.e14.prototype={
$0(){A.eH()
var w=this.a
w.n(new C.e13(w))},
$S:0}
C.e13.prototype={
$0(){return this.a.y=0},
$S:0}
C.e12.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=A.bAV(A.p(t,t,B.h,t,t,new A.o(t,t,A.H(B.c.j(0.55),B.r,1.2),t,A.a([new A.ab(1,B.G,B.au.j(0.55),B.J,18)],x.V),D.bGS,B.a6),t,t,t,t,t,t,t,t),B.eE,B.rK,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=A.a([],w)
for(u=0;u<3;++u)v.push(r.bXs(u))
return new A.am(B.W,t,B.a9,B.q,A.a([q,A.B(v,B.m,t,B.e,B.j,0,t,t)],w),t)},
$S:61}
C.e1a.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
A.eH()
w.n(new C.e19(w,v))},
$S:0}
C.e19.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.db0.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===B.fm||v===B.eI)return!0
if(d.c!==0)v=B.a.t(w,"clock-in daily earnings")||B.a.t(w,"clock-in earnings")
else v=!1
return v},
$S:16}
C.db1.prototype={
$1(d){return new A.Q(Date.now(),0,!1)},
$S:658}
C.db2.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new A.Q(Date.now(),0,!1)
u=A.dx(C.fCD(v.c,u))
w=this.c?new C.db_(v):null
return v.b2Q(this.b,B.pg,D.eD,w,"Today","$"+u,D.eD)},
$S:1652}
C.db_.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.db3.prototype={
$2(d,e){var w=this.a
return w.b2Q(this.b,B.jK,B.cb,w.w,"Balance","$"+A.dx(A.JA(w.c.a,new C.daZ(w))),B.cC)},
$S:56}
C.daZ.prototype={
$0(){return this.a.c.d},
$S:77}
C.daU.prototype={
$0(){this.a.a.cHI()
return null},
$S:0}
C.daV.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b2(w,w,w,new C.brz(v,w),B.at)},
$S:68}
C.daW.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b7R(v,!0,B.au,D.nX,w)}else{v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.b7Q(v,D.nX,w)}return A.b2(w,w,w,v,B.at)},
$S:68}
C.daX.prototype={
$1(d){return new A.Q(Date.now(),0,!1)},
$S:658}
C.daY.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new A.Q(Date.now(),0,!1)
w=r.a
v=w.a.cGx(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:B.k.E(v/u,0,1)}u=w.d
u===$&&A.c()
s=w.e
s===$&&A.c()
return A.c3(new A.h4(A.a([u,s],x.U)),new C.daT(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1653}
C.daT.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=A.a([],m),k=o.b
if(k)B.d.v(l,A.ij(7,new C.daS(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&A.c()
v=v.x
v===$&&A.c()
u=o.d
l.push(A.b2(n,n,n,new C.b7P(o.c,v,k,u,D.nX,D.baR,n),D.esH))
v=A.H(B.c.j(0.1),B.r,1.2)
if(k)t=B.uC
else t=o.e?B.uu:D.brh
t=A.V(t,k?D.nX:B.be,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=A.d(s,n,n,n,n,n,n,A.l(n,n,B.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,B.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+A.dx(w.f&&w.d>0?w.d:o.f)}q=k?D.nX:B.c
w=A.d(w,n,n,n,n,n,n,A.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,B.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=A.m(999)
p=u.j(0.16)
u=A.H(u.j(0.5),B.r,1)
l.push(A.p(n,A.v(A.a([t,B.ar,s,B.av,w,B.P,A.p(n,A.d(o.r,n,n,n,n,n,n,A.l(n,n,k?D.nX:B.o1,n,n,n,n,n,n,n,n,9,n,n,B.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),B.h,n,n,new A.o(p,n,u,q,n,n,B.n),n,n,n,n,B.kz,n,n,n)],m),B.m,n,B.b7,B.j,0,B.p),B.h,n,n,new A.o(B.K,n,v,n,n,n,B.a6),n,176,n,n,n,n,n,176))
return A.au(new A.a5(276,276,new A.am(B.A,n,B.a9,B.h,l,n),n),n,n,n)},
$S:202}
C.daS.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=B.k.F(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=B.o.F(d,3)
t=B.o.F(d,2)
return A.an(s,A.e1(A.d8(A.p(s,s,B.h,s,s,new A.o(s,s,s,A.m(40),s,new A.bR(B.A,0.5,B.w,s,0,A.a([D.nX.j(0.38),B.c.j(0.08),B.K],x.O),s,s),B.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),!0,s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:228}
C.dbk.prototype={
$0(){},
$S:0}
C.dbl.prototype={
$0(){},
$S:0}
C.dbm.prototype={
$1(d){return d.x===B.dp},
$S:16}
C.db6.prototype={
$0(){return this.a.a.d.d},
$S:77}
C.db5.prototype={
$0(){var w,v
A.eH()
w=this.a
v=this.b
w.n(new C.db4(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)A.fa(null,x.H)}},
$S:0}
C.db4.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dbh.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=A.m(12),q=s?w.b.j(0.18):B.c.j(0.04),p=A.H(s?w.b.j(0.7):B.c.j(0.08),B.r,1)
return A.D(new A.C(B.jH,A.aH(v,A.dj(B.A,A.d("$"+t,v,v,v,v,v,v,A.l(v,v,s?w.b:B.af,v,v,v,v,v,v,v,v,13,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,B.ba,new A.o(q,v,p,r,v,v,B.n),B.hS,v,38,v,v,v,v,v),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dbj(u,d),v,v,v,v,v,v,!1,B.ae),v),1)},
$S:1655}
C.dbj.prototype={
$0(){A.eH()
var w=this.a
w.n(new C.dbi(w,this.b))},
$S:0}
C.dbi.prototype={
$0(){var w=""+this.b
this.a.d.saU(0,w)
return w},
$S:0}
C.dbg.prototype={
$4$bold$color(d,e,f,g){var w=null,v=A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,B.a3,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?B.c:g,t=f?15:13
return new A.C(B.JW,A.B(A.a([v,B.b8,A.d(e,w,w,w,w,w,w,A.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?B.u:B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1656}
C.dbf.prototype={
$1(d){return this.a.n(new C.dbe())},
$S:2}
C.dbe.prototype={
$0(){},
$S:0}
C.db9.prototype={
$1(d){return this.a.aRM(d)&&!A.fJX(d)},
$S:16}
C.dba.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:71}
C.dbb.prototype={
$0(){return this.a.a.d.d},
$S:77}
C.dbc.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return A.b(x.r.b(s)?s:A.dQ(s,x.H),$async$$0)
case 2:if(t.c!=null)t.n(new C.db8())
t.lA("Balance refreshed.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.db8.prototype={
$0(){},
$S:0}
C.dbd.prototype={
$0(){var w=this.a
return w.n(new C.db7(w))},
$S:0}
C.db7.prototype={
$0(){return this.a.r+=80},
$S:0}
C.ffY.prototype={
$2(d,e){return e.y.aI(0,d.y)},
$S:71}
C.faA.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail"),u=!1
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.y(v,this.b)){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fql.prototype={
$1(d){var w=J.a8(d),v=w.h(d,"toEmail")
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.y(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.faz.prototype={
$1(d){var w,v,u
if(!C.hHY(d,this.a))return!1
w=J.a8(d)
v=w.h(d,"sessionUpdatedAt")
v=A.bh(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=A.bh(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=A.bh(J.k(w==null?"":w))}if(u!=null&&B.o.ak(new A.Q(Date.now(),0,!1).bw(u).a,36e8)>72)return!1
return!0},
$S:4}
C.f0p.prototype={
$1(d){var w=this.a
if(B.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:86}
C.fpa.prototype={
$0(){return $.fHC=null},
$S:11}
C.fpb.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.fn4.prototype={
$1(d){return A.a_(d,x.N,x.z)},
$S:7}
C.fn5.prototype={
$0(){var w,v=this.a
$.fHq.W(0,v)
w=C.tn(this.b,v)
if(w!=null)A.P7(A.a([A.a_(w,x.N,x.z)],x._),v)},
$S:0}
C.fri.prototype={
$1(d){return new C.Yv(this.a,this.b,null)},
$S:z+56}
C.dWv.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.dWy.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.dWz.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.n(new C.dWx(w))},
$S:2}
C.dWx.prototype={
$0(){return this.a.f=""},
$S:0}
C.dWA.prototype={
$1(d){return this.a.aV_()},
$S:2}
C.dWB.prototype={
$0(){var w=this.a
return w.n(new C.dWw(w,this.b))},
$S:0}
C.dWw.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f9L.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+B.a.aY(d,1)},
$S:13}
C.f9K.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+B.a.aY(d,1)},
$S:13}
C.fpr.prototype={
$1(d){var w,v=x.f
if(v.b(d))return A.a_(d,x.N,x.z)
try{v=A.a_(v.a(d.ac()),x.N,x.z)
return v}catch(w){return A.T(x.N,x.z)}},
$S:12}
C.fps.prototype={
$1(d){return J.ct(d)},
$S:4}
C.fjm.prototype={
$1(d){return d.a!=="send_email"},
$S:289}
C.foT.prototype={
$1(d){var w=null,v=B.x.j(0.35),u=A.m(10),t=A.H(B.b9,B.r,1)
return A.p(B.A,A.d(d,w,w,w,w,w,w,B.ja,w,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,86,w,B.eV,w,w,w,72)},
$S:660}
C.c8q.prototype={
$1(d){return J.k(d)},
$S:17}
C.c8r.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b5(d,new C.c8p(),x.S)
w=A.z(w,w.$ti.k("ai.E"))
return w}return A.bY(7,0,!1,x.S)},
$S:661}
C.c8p.prototype={
$1(d){var w
if(A.iz(d))w=d
else{w=A.c4(J.k(d),null)
if(w==null)w=0}return w},
$S:401}
C.c8s.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b5(d,new C.c8o(),x.S)
w=A.z(w,w.$ti.k("ai.E"))
return w}return A.bY(8,0,!1,x.S)},
$S:661}
C.c8o.prototype={
$1(d){var w
if(A.iz(d))w=d
else{w=A.c4(J.k(d),null)
if(w==null)w=0}return w},
$S:401}
C.c8u.prototype={
$1(d){return A.bj(d,!0,x.S)},
$S:662}
C.c8v.prototype={
$1(d){return A.bj(d,!0,x.S)},
$S:662}
C.c8n.prototype={
$1(d){var w=this.a
if(B.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:86}
C.c8t.prototype={
$2(d,e){return d+e},
$S:76}
C.c8m.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.q(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:76}
C.fb4.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.faZ.prototype={
$0(){return this.a.$1(D.pp)},
$S:0}
C.fb_.prototype={
$0(){return this.a.$1(D.pp)},
$S:0}
C.fb0.prototype={
$0(){return this.a.$1(D.pp)},
$S:0}
C.fb1.prototype={
$0(){return this.a.$1(D.pp)},
$S:0}
C.fb2.prototype={
$0(){return this.a.$1(D.pp)},
$S:0}
C.fb3.prototype={
$0(){return this.a.$1(D.pp)},
$S:0}
C.eYM.prototype={
$2(d,e){var w,v,u=this,t=null,s=B.o.ak(e,8),r=B.o.F(e,8),q=B.o.F(s+r,2),p=u.a,o=J.q(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.U_:D.b0D
if(o===0)w=t
else{w=x.O
w=o===1?A.a([B.c,B.aJ],w):A.a([B.bj,B.x],w)
v=n?B.aK:B.dr
w=A.p(t,t,B.h,t,t,new A.o(t,t,A.H(v,B.r,n?3:1),t,A.a([new A.ab(0,B.G,B.x.j(0.35),B.dE,4)],x.V),new A.bR(B.A,0.5,B.w,t,0,w,t,t),B.a6),t,28,t,t,t,t,t,28)}return A.aH(t,A.p(t,A.au(w,t,t,t),B.h,q,t,t,t,t,t,t,t,t,t,t),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eYL(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,B.ae)},
$S:73}
C.eYL.prototype={
$0(){var w=this,v=w.a,u=v.cM9(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.pp:D.Gf
w.f.$1(v)}},
$S:0}
C.f9V.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new A.a5(u,u,A.i7(!0,v,v,B.z,Q.aID,new C.f9U(w.a,w.b,w.c,w.d,u),9,v,B.dL,B.ak,!1),v)},
$S:164}
C.f9U.prototype={
$2(d,e){var w=this,v=null,u=A.m(12),t=A.m(12),s=w.a,r=s.at[e],q=r==="X"?B.aY:B.aD
return A.aD(!1,B.a1,!0,u,A.aI(!1,t,!0,A.au(A.d(r,v,v,v,v,v,v,A.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.f9T(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),B.h,B.fw,0,v,v,v,v,v,B.ad)},
$S:75}
C.f9T.prototype={
$0(){var w=this,v=w.a.cMa(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.eYd.prototype={
$1(d){return new A.C(B.jH,C.fmW(d,!1),null)},
$S:302}
C.eYe.prototype={
$1(d){return C.fmW(d,!1)},
$S:1660}
C.eYf.prototype={
$0(){var w=this,v=w.a
v.cwL(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.eYg.prototype={
$0(){var w=this
w.a.cwM(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.f77.prototype={
$1(d){var w=this,v=null,u=d*6
return A.mN(v,B.bj,A.d(""+u,v,v,v,v,v,v,B.ce,v,v,v),B.di,new C.f76(w.a,w.b,u,w.c,w.d),v,v,new A.ay(B.c.j(0.2),1,B.r,-1),v)},
$S:1661}
C.f76.prototype={
$0(){var w=this,v=w.a,u=w.b.aB(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.f91.prototype={
$1(d){return D.cUw[d]},
$S:83}
C.f92.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=A.a([s.aB(6),s.aB(6),s.aB(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.f5S.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.f5T.prototype={
$0(){var w=this,v=w.a
if(w.b.af()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.eZe.prototype={
$0(){var w=this,v=w.a.cCe(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.eZd.prototype={
$1(d){var w,v=null,u=J.q(this.a.fr[5-d],this.b)
if(u===0)w=B.lS
else w=u===1?B.dC:B.qE
return new A.fD(1,A.p(v,v,B.h,v,v,new A.o(w,v,A.H(B.bG,B.r,1),v,v,v,B.a6),v,v,v,B.mE,v,v,v,v),v)},
$S:1662}
C.f64.prototype={
$1(d){var w=this
if(w.a.b6c(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.f65.prototype={
$0(){var w=this
if(w.a.b6c(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.eYG.prototype={
$0(){var w=this
if(w.a.af()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.feY.prototype={
$1(d){var w=J.q(d,"email")
return B.a.t(B.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.feZ.prototype={
$1(d){var w,v=J.a8(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=B.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+B.a.i(J.k(v==null?"":v))+">"},
$S:50}
C.erc.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aHA.prototype
w.boD=w.Z
w.boC=w.p
w=C.aHB.prototype
w.boF=w.Z
w.boE=w.p
w=C.aHC.prototype
w.boH=w.Z
w.boG=w.p
w=C.aIx.prototype
w.bpE=w.Z
w.bpD=w.p
w=C.aI7.prototype
w.bpd=w.p
w=C.aIG.prototype
w.bpN=w.p
w=C.aHD.prototype
w.boI=w.p
w=C.aIO.prototype
w.bpW=w.p
w=C.aHI.prototype
w.boN=w.p
w=C.aHY.prototype
w.bp3=w.p
w=C.aJv.prototype
w.bqD=w.p})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.axu.prototype,"gbJZ","bK_",19)
v(q,"gaOj","aOk",1)
v(C.axt.prototype,"gcnY","a_V",1)
v(q=C.axv.prototype,"gbPi","bPj",1)
v(q,"gbzK","bzL",1)
v(q=C.auJ.prototype,"gchj","chk",1)
v(q,"gc69","Ou",0)
v(q,"gcrJ","crK",1)
v(q,"gckd","mt",0)
w(q,"gcao","cap",25)
w(q,"gcq9","Qa",33)
v(q=C.azy.prototype,"gbI8","Vz",0)
v(q,"gbY1","X0",0)
v(q,"gbXZ","X_",0)
v(q,"gbY_","aax",0)
v(q,"gbY0","Nv",0)
v(C.awU.prototype,"gbY2","bY3",1)
u(C,"hP8","hkU",58)
t(C,"fK3",0,null,["$1","$0"],["h3A",function(){return C.h3A(null)}],3,0)
t(C,"bzp",0,null,["$1","$0"],["h3z",function(){return C.h3z(null)}],3,0)
v(C.Ls.prototype,"gDd","c3o",1)
v(C.aAj.prototype,"gchA","zM",0)
v(q=C.aAA.prototype,"gc6s","Ow",0)
v(q,"gcb5","Zb",0)
v(q,"gc_O","c_P",1)
v(q=C.aAM.prototype,"gc_T","abo",0)
v(q,"gbtA","a5N",0)
v(q,"gchN","a_8",0)
s(q,"gc3T","c3U",35)
v(C.aCF.prototype,"gbu_","a5P",1)
v(q=C.aCE.prototype,"gc_S","abn",0)
v(q,"gc5r","acq",0)
v(q=C.aAO.prototype,"gbSZ","a9n",0)
v(q,"gbT0","Wc",0)
v(q,"gbT_","a9o",0)
v(q=C.aAN.prototype,"gbwk","bwl",1)
v(q,"gbwm","bwn",1)
v(C.aAP.prototype,"gbBX","bBY",1)
v(C.axP.prototype,"gc_V","c_W",1)
v(q=C.aBa.prototype,"gaUU","c0b",1)
r(q,"gaVQ",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["ac3","aup","aVS","aVR"],52,0,0)
r(q,"gc36",0,4,null,["$4"],["c37"],53,0,0)
v(q,"gc5b","Yn",0)
v(q,"gc60","acx",0)
v(q,"gc5X","acv",0)
v(q,"gbVO","aa7",0)
w(C.ayy.prototype,"gbUD","bUE",54)
w(q=C.ayA.prototype,"gcp2","cp3",55)
v(q,"gcnP","cnQ",1)
v(q,"gcvb","cvc",1)
v(C.aAY.prototype,"gc0w","aV_",1)
v(C.aBJ.prototype,"gaVr","aud",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.jm,[C.cmd,C.cma,C.cmb,C.cmc,C.cm9,C.eML,C.eMJ,C.eMN,C.eMK,C.f4p,C.d3g,C.d3r,C.d3z,C.d3A,C.d3C,C.d3u,C.d3s,C.d3t,C.d3v,C.d3w,C.d3m,C.d3n,C.d3l,C.d3p,C.d3q,C.d3j,C.d3i,C.d3E,C.d3H,C.dGw,C.dGv,C.dGx,C.dGu,C.dGt,C.d3a,C.d3d,C.d3e,C.d3c,C.d3b,C.d52,C.d53,C.d54,C.d4i,C.d4j,C.d4N,C.d4y,C.d4z,C.d4A,C.d4B,C.d4C,C.d3L,C.d4h,C.d4O,C.d4X,C.d4L,C.d4K,C.d4f,C.d4g,C.d4T,C.d4U,C.d3N,C.d3O,C.d4r,C.d4s,C.d4t,C.d4q,C.d4D,C.d4E,C.d4F,C.d4G,C.d4H,C.d4I,C.d4R,C.d4u,C.d4v,C.d4w,C.d4x,C.d4V,C.d4W,C.d3P,C.d3Q,C.d3R,C.d3S,C.d4P,C.d4Q,C.d4p,C.d4J,C.d4n,C.d4Y,C.d4Z,C.d5_,C.d4k,C.d43,C.d42,C.d41,C.d47,C.d40,C.d3Z,C.d3U,C.d3X,C.d3T,C.d4c,C.d4d,C.d3V,C.d8j,C.cwA,C.cwq,C.cwr,C.cwK,C.cwH,C.cwI,C.cwJ,C.cwC,C.cwB,C.cws,C.cwD,C.cx2,C.cwZ,C.cwY,C.cwy,C.cwz,C.cwv,C.cwG,C.cwO,C.cwP,C.cwQ,C.cwR,C.cwS,C.cwT,C.cwU,C.cxe,C.cx7,C.cx4,C.cx9,C.cx6,C.cx3,C.cwt,C.cx0,C.doO,C.doP,C.doF,C.doD,C.doN,C.doC,C.doB,C.doE,C.doJ,C.doK,C.doH,C.doI,C.doQ,C.doR,C.doS,C.doT,C.eGH,C.eGI,C.cZt,C.ffS,C.dve,C.dv6,C.dv8,C.dvc,C.dv7,C.dv9,C.dva,C.c1x,C.fmU,C.fmT,C.doq,C.dop,C.dor,C.doo,C.dNv,C.dNw,C.dND,C.fv2,C.fv3,C.bVE,C.dGC,C.dGD,C.dGE,C.dGF,C.dGG,C.dGH,C.dGB,C.dGI,C.dGA,C.dGL,C.dGK,C.dGJ,C.dNX,C.dNY,C.dNV,C.dNU,C.dNW,C.dNS,C.dRw,C.dRx,C.dRf,C.dRh,C.dRt,C.dRu,C.dRo,C.dRm,C.dRs,C.dRp,C.dRj,C.dRi,C.dRy,C.cFF,C.cFD,C.cFE,C.cFC,C.cFI,C.cFJ,C.eBM,C.eBR,C.eBO,C.eBQ,C.eBP,C.eBI,C.eBH,C.eBK,C.eBJ,C.dRT,C.dRY,C.dRU,C.dRV,C.dRX,C.dS2,C.dS3,C.dS4,C.dS5,C.dS6,C.dS7,C.dS8,C.dS9,C.dS1,C.dSa,C.dS0,C.dS_,C.dRZ,C.dRM,C.dRN,C.dRE,C.dRF,C.dRG,C.dRI,C.czm,C.d9d,C.d9f,C.d9e,C.dSq,C.dSk,C.dSl,C.dSn,C.dSo,C.dSp,C.dSt,C.dSs,C.dSz,C.dSy,C.dSg,C.dSf,C.dSA,C.dSr,C.dSe,C.fvO,C.d6T,C.d6R,C.e10,C.e1p,C.e1q,C.e1r,C.e1s,C.e1u,C.e1v,C.e1k,C.e11,C.e1o,C.e15,C.e16,C.e1e,C.e1b,C.e1c,C.e1d,C.e1f,C.e1g,C.e1h,C.e1j,C.e1i,C.e17,C.e18,C.e1E,C.e1x,C.e1F,C.e1w,C.e1G,C.e1C,C.e1D,C.e1y,C.e14,C.e13,C.e1a,C.e19,C.db_,C.daZ,C.daU,C.dbk,C.dbl,C.db6,C.db5,C.db4,C.dbj,C.dbi,C.dbe,C.dbb,C.dbc,C.db8,C.dbd,C.db7,C.fpa,C.fn5,C.dWv,C.dWy,C.dWx,C.dWB,C.dWw,C.faZ,C.fb_,C.fb0,C.fb1,C.fb2,C.fb3,C.eYL,C.f9T,C.eYf,C.eYg,C.f76,C.f92,C.f5T,C.eZe,C.f65,C.eYG,C.erc])
u(A.i3,[C.cme,C.eMM,C.fjG,C.fjy,C.f4m,C.f4l,C.f4o,C.d3J,C.d3K,C.d3y,C.d3x,C.d3B,C.d3k,C.d3o,C.d3D,C.dGz,C.d3f,C.d55,C.d56,C.d57,C.d58,C.d59,C.d4M,C.d4S,C.d3M,C.d51,C.d50,C.d44,C.d45,C.d46,C.d48,C.d4a,C.d8k,C.cxf,C.cwF,C.cwE,C.cwX,C.cx_,C.cwW,C.cww,C.cwN,C.cwL,C.cx1,C.cwM,C.cxa,C.cx8,C.cxd,C.bUm,C.bUl,C.bUo,C.bUn,C.doM,C.doL,C.doG,C.doU,C.doV,C.f7F,C.f8S,C.cZu,C.cZs,C.bV7,C.ffR,C.dvf,C.dvd,C.c1y,C.f9E,C.fmS,C.c3v,C.c3u,C.c3X,C.dNt,C.dNu,C.fid,C.fi0,C.fi_,C.f5W,C.c4a,C.c4b,C.c4c,C.c49,C.c48,C.f46,C.fuZ,C.fv_,C.fv0,C.fv1,C.fuY,C.dNA,C.dNB,C.dNz,C.fv4,C.d5a,C.c5L,C.f35,C.dGM,C.dNT,C.c4C,C.c4z,C.c4B,C.c4E,C.bY1,C.bY_,C.bY4,C.c4L,C.c4K,C.c4J,C.c4I,C.c4N,C.c4P,C.dRC,C.dRg,C.dRe,C.dRv,C.dRn,C.dRr,C.dRq,C.dRl,C.dRA,C.dRz,C.cFG,C.cFH,C.eBN,C.eBG,C.eBL,C.c4F,C.fjZ,C.dSc,C.dRW,C.dRP,C.dRQ,C.dRR,C.dRS,C.dSb,C.c4H,C.czn,C.czo,C.f2Q,C.dSh,C.dSj,C.dSm,C.dSu,C.dSv,C.dSw,C.dSd,C.fvP,C.d6N,C.d6Q,C.c6F,C.c6S,C.e1H,C.e1I,C.e1J,C.e1t,C.e1l,C.e1m,C.e1n,C.e1z,C.e1B,C.db0,C.db1,C.daX,C.daS,C.dbm,C.dbh,C.dbg,C.dbf,C.db9,C.faA,C.fql,C.faz,C.f0p,C.fpb,C.fn4,C.fri,C.dWz,C.dWA,C.f9L,C.f9K,C.fpr,C.fps,C.fjm,C.foT,C.c8q,C.c8r,C.c8p,C.c8s,C.c8o,C.c8u,C.c8v,C.c8n,C.fb4,C.eYd,C.eYe,C.f77,C.f91,C.f5S,C.eZd,C.f64,C.feY,C.feZ])
t(C.bnK,A.iJ)
u(A.af,[C.E2,C.aiH,C.aAi,C.aiG,C.aiI,C.ajz,C.afU,C.al6,C.Yb,C.Yc,C.Xj,C.alB,C.al5,C.LY,C.axw,C.amy,C.anb,C.Tu,C.NP,C.YZ,C.YY,C.Tv,C.anu,C.aym,C.anx,C.XI,C.ao3,C.ayx,C.ayz,C.Yv,C.api])
u(A.ag,[C.aFa,C.aHB,C.aIx,C.aHA,C.aHC,C.bd8,C.auJ,C.azy,C.bfx,C.bfy,C.awU,C.bfE,C.aI7,C.aIG,C.aHD,C.aAj,C.aAA,C.aAM,C.b7m,C.aCF,C.aCE,C.aAO,C.aAN,C.bdm,C.aIO,C.aHI,C.btv,C.aHY,C.ayA,C.aAY,C.aJv])
u(A.kA,[C.eMO,C.f4n,C.d3h,C.d3I,C.d3G,C.d3F,C.dGy,C.d4o,C.d4m,C.d4l,C.d4_,C.d49,C.d3Y,C.d4b,C.d3W,C.d4e,C.cwV,C.cwx,C.cx5,C.cxc,C.cxb,C.cwu,C.cZr,C.dvb,C.f9F,C.f9G,C.dNx,C.fjB,C.fuX,C.dNC,C.dNF,C.dNE,C.d5b,C.c5M,C.c4D,C.c4A,C.bY2,C.bY0,C.c4O,C.dRD,C.dRk,C.dRB,C.eBT,C.eBS,C.dRO,C.dRH,C.dRJ,C.dRL,C.dRK,C.dSi,C.dSx,C.d6O,C.d6S,C.d6P,C.e1A,C.e12,C.db2,C.db3,C.daV,C.daW,C.daY,C.daT,C.dba,C.ffY,C.c8t,C.c8m,C.eYM,C.f9V,C.f9U])
t(C.asX,C.E2)
u(A.aB,[C.qc,C.abu,C.Ls,C.Hc,C.qL,C.qM,C.ln,C.ia,C.hW,C.b5w,C.cX7,C.d9c,C.qS,C.Tw,C.Ma,C.pn,C.aWW,C.oB,C.aop])
t(C.axu,C.aHB)
t(C.bfX,C.aIx)
t(C.axt,C.aHA)
t(C.axv,C.aHC)
u(A.mi,[C.Uf,C.ayn,C.aog,C.Hh,C.Dt])
u(A.at,[C.Zy,C.bof,C.acf,C.Om,C.a4A,C.LQ,C.an5,C.ab5,C.ab4,C.aXL,C.ayl,C.a9E,C.aXi,C.a9w,C.ayy])
t(C.bfv,C.aI7)
t(C.bg8,C.aIG)
t(C.bbS,C.aHD)
t(C.aAP,C.aIO)
t(C.axP,C.aHI)
t(C.aBa,C.btv)
t(C.be5,C.aHY)
u(A.n8,[C.b7R,C.b7Q,C.b7P,C.b7h,C.brz,C.bmD])
t(C.aBJ,C.aJv)
w(C.aHA,C.Ls)
w(C.aHB,C.Ls)
w(C.aHC,C.Ls)
w(C.aIx,C.Ls)
w(C.aI7,A.eJ)
w(C.aIG,A.c6)
w(C.aHD,A.c6)
w(C.aIO,A.c6)
w(C.aHI,A.eJ)
w(C.aHY,A.eJ)
v(C.btv,A.en)
w(C.aJv,A.c6)})()
A.kh(b.typeUniverse,JSON.parse('{"bnK":{"iJ":[]},"E2":{"af":[],"r":[]},"aFa":{"ag":["E2<1,2>"]},"asX":{"E2":["1","hu<1>"],"af":[],"r":[],"E2.T":"1","E2.S":"hu<1>"},"aiH":{"af":[],"r":[]},"aAi":{"af":[],"r":[]},"aiG":{"af":[],"r":[]},"aiI":{"af":[],"r":[]},"ajz":{"af":[],"r":[]},"afU":{"af":[],"r":[]},"axu":{"ag":["aiH"]},"bfX":{"ag":["aAi"]},"axt":{"ag":["aiG"]},"axv":{"ag":["aiI"]},"bd8":{"ag":["ajz"]},"auJ":{"ag":["afU"]},"al6":{"af":[],"r":[]},"Yb":{"af":[],"r":[]},"Yc":{"af":[],"r":[]},"acf":{"at":[],"r":[]},"Xj":{"af":[],"r":[]},"azy":{"ag":["al6"]},"Zy":{"at":[],"r":[]},"bof":{"at":[],"r":[]},"bfx":{"ag":["Yb"]},"bfy":{"ag":["Yc"]},"Om":{"at":[],"r":[]},"awU":{"ag":["Xj"]},"alB":{"af":[],"r":[]},"bfE":{"ag":["alB"]},"a4A":{"at":[],"r":[]},"al5":{"af":[],"r":[]},"bfv":{"ag":["al5"]},"LQ":{"at":[],"r":[]},"an5":{"at":[],"r":[]},"LY":{"af":[],"r":[]},"bg8":{"ag":["LY"]},"ab5":{"at":[],"r":[]},"ab4":{"at":[],"r":[]},"axw":{"af":[],"r":[]},"bbS":{"ag":["axw"]},"aXL":{"at":[],"r":[]},"amy":{"af":[],"r":[]},"aAj":{"ag":["amy"]},"anb":{"af":[],"r":[]},"aAA":{"ag":["anb"]},"Tu":{"af":[],"r":[]},"NP":{"af":[],"r":[]},"YZ":{"af":[],"r":[]},"YY":{"af":[],"r":[]},"aAM":{"ag":["Tu"]},"b7m":{"ag":["NP"]},"aCF":{"ag":["YZ"]},"aCE":{"ag":["YY"]},"Tv":{"af":[],"r":[]},"aAO":{"ag":["Tv"]},"anu":{"af":[],"r":[]},"a9E":{"at":[],"r":[]},"a9w":{"at":[],"r":[]},"aym":{"af":[],"r":[]},"aAN":{"ag":["anu"]},"ayl":{"at":[],"r":[]},"aXi":{"at":[],"r":[]},"bdm":{"ag":["aym"]},"anx":{"af":[],"r":[]},"aAP":{"ag":["anx"]},"XI":{"af":[],"r":[]},"axP":{"ag":["XI"]},"ao3":{"af":[],"r":[]},"ayx":{"af":[],"r":[]},"ayz":{"af":[],"r":[]},"aBa":{"ag":["ao3"],"en":[]},"ayy":{"at":[],"r":[]},"be5":{"ag":["ayx"]},"b7R":{"aA":[]},"b7Q":{"aA":[]},"b7P":{"aA":[]},"ayA":{"ag":["ayz"]},"b7h":{"aA":[]},"brz":{"aA":[]},"Yv":{"af":[],"r":[]},"aAY":{"ag":["Yv"]},"bmD":{"aA":[]},"api":{"af":[],"r":[]},"aBJ":{"ag":["api"]}}'))
A.Ox(b.typeUniverse,JSON.parse('{"Ls":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=A.az
return{dw:w("mo<x?>"),gS:w("nI"),o:w("d_"),g5:w("wi"),M:w("f9<n>"),k:w("Q"),gv:w("kY<ak<j_>>"),gh:w("kY<n>"),gH:w("kY<I>"),r:w("aw<~>"),dk:w("a0"),fw:w("P<nI>"),E:w("P<d_>"),V:w("P<ab>"),O:w("P<x>"),A:w("P<a0>"),R:w("P<mV>"),B:w("P<ak<I>>"),m:w("P<a1<n,n>>"),_:w("P<a1<n,@>>"),b:w("P<qL>"),x:w("P<qM>"),gi:w("P<j_>"),a:w("P<ln>"),Y:w("P<hW>"),v:w("P<ia>"),dA:w("P<Hc>"),F:w("P<qS>"),Z:w("P<ke>"),g:w("P<hz>"),gK:w("P<+at,details,id(Q,n,n)>"),C:w("P<cL>"),s:w("P<n>"),G:w("P<iJ>"),eO:w("P<em>"),d9:w("P<eK>"),p:w("P<r>"),n:w("P<O>"),t:w("P<I>"),U:w("P<aA?>"),d4:w("P<n?>"),ck:w("ak<qL>"),e:w("ak<qM>"),ac:w("ak<j_>"),dZ:w("ak<ln>"),I:w("ak<hW>"),j:w("ak<@>"),L:w("ak<I>"),eq:w("a1<n,n>"),P:w("a1<n,@>"),f:w("a1<@,@>"),cl:w("cU<n,C>"),aS:w("J<a0,rC>"),dc:w("J<Hh,bH>"),dv:w("J<n,n>"),bL:w("J<O,bH>"),a3:w("J<I,bH>"),gN:w("J<I,pb>"),w:w("iE"),b1:w("qL"),Q:w("qM"),bP:w("ln"),i:w("hW"),u:w("ia"),gp:w("Tw"),J:w("Ma"),D:w("pn"),an:w("ke"),c:w("cp"),K:w("aB"),d:w("jd<n>"),di:w("+outcome,snapshot(Uf,a3X?)"),ee:w("+after,before(O,O)"),et:w("+categories,error,message,replaceId(ak<hW>,n?,n?,n?)"),cz:w("DR"),bJ:w("dy<n>"),N:w("n"),e7:w("bl<O>"),W:w("cx<n>"),am:w("k5<I>"),cc:w("a4<n>"),aM:w("e3<d_>"),bG:w("e3<O>"),l:w("r"),gm:w("qc"),ec:w("abu"),q:w("mG"),y:w("S"),gR:w("O"),z:w("@"),S:w("I"),eG:w("d_?"),cJ:w("Q?"),gw:w("ak<a1<n,@>>?"),bM:w("ak<@>?"),h:w("a1<n,@>?"),X:w("aB?"),gE:w("+code,qrPayload(n,n)?"),bY:w("+isLive,ownerEmail,snapshotJson(S,n,n)?"),T:w("n?"),cD:w("O?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aPH=new A.bv(B.bD,B.j9,B.bD,B.j9)
D.eD=new A.x(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,B.t)
D.aQa=new A.ay(D.eD,1,B.r,-1)
D.aQc=new A.ay(B.af,2,B.r,-1)
D.aQf=new A.ay(B.aS,2,B.r,-1)
D.aQh=new A.ay(B.cp,0.8,B.r,-1)
D.aQx=new A.ay(B.aK,2,B.r,-1)
D.aQE=new A.ay(B.fc,1.6,B.r,-1)
D.aRr=new A.aW(0,330,0,1/0)
D.aRx=new A.aW(0,176,0,1/0)
D.aRy=new A.aW(0,1/0,0,260)
D.aRQ=new A.aW(90,1/0,0,1/0)
D.aUy=new A.ab(0,B.G,B.dr,B.J,4)
D.cDD=w([D.aUy],x.V)
D.aS3=new A.o(B.c,null,null,null,D.cDD,null,B.a6)
D.cy5=w([D.eD,B.aW],x.O)
D.bJR=new A.a3(B.a4,B.a7,B.w,D.cy5,null,null)
D.aSi=new A.o(null,null,null,null,null,D.bJR,B.a6)
D.aSn=new A.o(B.bh,null,null,null,null,null,B.a6)
D.b2z=new A.x(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,B.t)
D.cRM=w([P.a8M,D.b2z],x.O)
D.bIW=new A.a3(B.aX,B.b1,B.w,D.cRM,null,null)
D.aSD=new A.o(null,null,null,B.mn,null,D.bIW,B.n)
D.b8u=new A.x(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,B.t)
D.d0O=w([D.b8u,M.aat],x.O)
D.bI6=new A.a3(B.aX,B.b1,B.w,D.d0O,null,null)
D.aT1=new A.o(null,null,null,B.pQ,null,D.bI6,B.n)
D.cO5=w([B.aB,B.by],x.O)
D.bID=new A.a3(B.a4,B.a7,B.w,D.cO5,null,null)
D.aT6=new A.o(null,null,null,null,null,D.bID,B.a6)
D.eGn=new A.F(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYL=new A.w("\ud83c\udf89",null,D.eGn,null,null,null,null,null,null,null,null,null)
D.aYb=new A.cw(B.A,null,null,D.eYL,null)
D.aZt=new A.x(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,B.t)
D.a8f=new A.x(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,B.t)
D.b0D=new A.x(1,0.8431372549019608,0.8,0.7843137254901961,B.t)
D.b0H=new A.x(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,B.t)
D.nX=new A.x(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,B.t)
D.rm=new A.x(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,B.t)
D.a95=new A.x(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,B.t)
D.b2i=new A.x(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,B.t)
D.TG=new A.x(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,B.t)
D.w5=new A.x(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,B.t)
D.b3s=new A.x(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,B.t)
D.U_=new A.x(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,B.t)
D.aac=new A.x(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,B.t)
D.b6T=new A.x(1,0.9529411764705882,0.9411764705882353,1,B.t)
D.b6Z=new A.x(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,B.t)
D.aaw=new A.x(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,B.t)
D.aaK=new A.x(1,0,0.8392156862745098,0.30980392156862746,B.t)
D.aaL=new A.x(1,1,0.9529411764705882,0.6901960784313725,B.t)
D.b86=new A.x(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,B.t)
D.b8a=new A.x(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,B.t)
D.b8Y=new A.x(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,B.t)
D.Uo=new A.x(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,B.t)
D.b9O=new A.x(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,B.t)
D.bag=new A.x(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,B.t)
D.Uu=new A.x(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,B.t)
D.baR=new A.x(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,B.t)
D.abG=new A.a1W(2,"active")
D.beq=new A.b8(42e5)
D.bet=new A.b8(53e4)
D.bev=new A.b8(58e4)
D.bez=new A.b8(82e4)
D.bfn=new A.N(0,30,0,30)
D.bfv=new A.N(0,4,0,8)
D.bfy=new A.N(0,8,12,8)
D.bgb=new A.N(12,0,12,88)
D.bgi=new A.N(12,11,12,10)
D.bgF=new A.N(13,10,12,10)
D.bgN=new A.N(14,10,14,2)
D.bgZ=new A.N(14,14,10,14)
D.bht=new A.N(16,12,16,96)
D.bhy=new A.N(16,14,16,8)
D.bhC=new A.N(16,16,16,96)
D.bhE=new A.N(16,18,16,16)
D.bhI=new A.N(16,4,16,10)
D.biD=new A.N(18,6,18,40)
D.biF=new A.N(18,8,18,130)
D.biS=new A.N(20,10,20,20)
D.bj4=new A.N(20,18,20,18)
D.bj8=new A.N(20,20,20,22)
D.bju=new A.N(22,22,22,16)
D.bk7=new A.N(2,0,2,10)
D.bkQ=new A.N(4,8,12,4)
D.bl3=new A.N(6,1,6,1)
D.bl5=new A.N(6,4,0,0)
D.bl8=new A.N(6,6,12,4)
D.blt=new A.N(8,4,12,8)
D.f0W=new A.w("Activity",null,B.fS,null,null,null,null,null,null,null,null,null)
D.bn7=new A.bH(1,B.bo,D.f0W,null)
D.f8y=new A.w("Game Receipts",null,A0.BV,null,null,null,null,null,null,null,null,null)
D.eUd=new A.w("Your last 59 games \xb7 kept for 7 days",null,F.aKl,null,null,null,null,null,null,null,null,null)
D.cux=w([D.f8y,D.eUd],x.p)
D.bbN=new A.fm(B.ak,B.e,B.j,B.F,null,B.p,null,0,D.cux,null)
D.bna=new A.bH(1,B.bo,D.bbN,null)
D.bp6=new A.a0(58607,"MaterialIcons",!1)
D.Xe=new A.a0(62178,"MaterialIcons",!1)
D.bpV=new A.a0(62410,"MaterialIcons",!1)
D.br3=new A.a0(63258,"MaterialIcons",!1)
D.br9=new A.a0(63304,"MaterialIcons",!1)
D.bra=new A.a0(63306,"MaterialIcons",!1)
D.brh=new A.a0(63330,"MaterialIcons",!1)
D.ahF=new A.a0(984777,"MaterialIcons",!1)
D.btL=new A.ad(B.El,13,B.af,null,null,null)
D.btT=new A.ad(B.jL,13,B.oX,null,null,null)
D.ahO=new A.ad(B.l2,null,B.c,null,null,null)
D.bvp=new A.ad(B.Ao,34,B.aZ,null,null,null)
D.bvX=new A.ad(B.Ep,19,B.c,null,null,null)
D.bqd=new A.a0(62804,"MaterialIcons",!1)
D.bw5=new A.ad(D.bqd,24,B.aK,null,null,null)
D.bwx=new A.ad(B.A8,28,B.bk,null,null,null)
D.bx0=new A.ad(B.ahm,42,B.c,null,null,null)
D.bx9=new A.ad(B.Y8,30,B.c,null,null,null)
D.bxK=new A.ad(B.fD,null,B.c,null,null,null)
D.by4=new A.ad(B.jL,16,B.c,null,null,null)
D.byF=new A.ad(B.qq,13,B.c,null,null,null)
D.byO=new A.ad(B.l2,18,B.c,null,null,null)
D.bzk=new A.ad(B.ut,null,B.dC,null,null,null)
D.bzY=new A.ad(B.oe,28,B.c,null,null,null)
D.bAc=new A.ad(B.mL,22,null,null,null,null)
D.bAz=new A.ad(B.qn,null,null,null,null,null)
D.bAL=new A.ad(B.iM,28,B.c,null,null,null)
D.bAN=new A.ad(B.ct,null,B.aQ,null,null,null)
D.bAU=new A.ad(B.WW,14,B.c,null,null,null)
D.bBo=new A.ad(B.Lm,36,B.aL,null,null,null)
D.bBv=new A.ad(B.of,16,B.c,null,null,null)
D.bBK=new A.ad(B.en,null,null,null,null,null)
D.b2U=new A.x(1,0.23137254901960785,0.16470588235294117,0,B.t)
D.bCi=new A.ad(B.dQ,9,D.b2U,null,null,null)
D.bs6=new A.a0(983146,"MaterialIcons",!1)
D.bCy=new A.ad(D.bs6,null,B.aK,null,null,null)
D.bD2=new A.ad(B.uw,28,D.eD,null,null,null)
D.bD7=new A.ad(B.rW,null,B.fc,null,null,null)
D.bDc=new A.ad(B.hT,20,D.eD,null,null,null)
D.bst=new A.a0(983377,"MaterialIcons",!1)
D.bDm=new A.ad(D.bst,64,B.c,null,null,null)
D.bDP=new A.ad(B.fY,24,B.c,null,null,null)
D.bEJ=new A.e2(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bET=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bF6=new A.e2(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bF7=new A.e2(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.b1k=new A.x(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,B.t)
D.b3L=new A.x(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,B.t)
D.b3t=new A.x(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,B.t)
D.cS2=w([D.b1k,D.b3L,D.b3t],x.O)
D.bG_=new A.a3(B.ax,B.aC,B.w,D.cS2,null,null)
D.cWl=w([B.bm,B.aW],x.O)
D.bGi=new A.a3(B.ax,B.aC,B.w,D.cWl,null,null)
D.b2u=new A.x(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,B.t)
D.b7m=new A.x(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,B.t)
D.cE3=w([D.b2u,D.b7m],x.O)
D.bGp=new A.a3(B.ax,B.aC,B.w,D.cE3,null,null)
D.cTr=w([B.bj,B.M,B.eB],x.O)
D.bGw=new A.a3(B.ax,B.aC,B.w,D.cTr,null,null)
D.bGB=new A.a3(B.a4,B.a7,B.w,G.ap_,null,null)
D.cDw=w([B.fc,B.cb],x.O)
D.ajv=new A.a3(B.a4,B.a7,B.w,D.cDw,null,null)
D.cDQ=w([B.fc,B.by],x.O)
D.ajw=new A.a3(B.a4,B.a7,B.w,D.cDQ,null,null)
D.asE=w([D.nX,B.au,B.bT],x.O)
D.bGS=new A.a3(B.ax,B.aC,B.w,D.asE,null,null)
D.b5a=new A.x(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,B.t)
D.cBE=w([D.b5a,E.a8n,B.M],x.O)
D.bGX=new A.a3(B.ax,B.aC,B.w,D.cBE,null,null)
D.aOy=new A.d6(-0.8,-1)
D.aOA=new A.d6(1.2,1)
D.cAS=w([B.c,B.ev,B.fJ,B.c,B.fe,B.aY,B.mr],x.O)
D.cSW=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.bGZ=new A.a3(D.aOy,D.aOA,B.w,D.cAS,D.cSW,null)
D.b7i=new A.x(1,0,0.7607843137254902,0.26666666666666666,B.t)
D.b5o=new A.x(1,0,0.6392156862745098,0.22745098039215686,B.t)
D.cS1=w([D.b7i,D.b5o],x.O)
D.bHo=new A.a3(B.a4,B.a7,B.w,D.cS1,null,null)
D.bHt=new A.a3(B.ax,B.aC,B.w,B.NO,null,null)
D.cNc=w([E.Ur,B.u6],x.O)
D.bHv=new A.a3(B.a4,B.a7,B.w,D.cNc,null,null)
D.cQY=w([B.fV,B.fq],x.O)
D.ajB=new A.a3(B.a4,B.a7,B.w,D.cQY,null,null)
D.cVW=w([B.bh,B.bV],x.O)
D.ajC=new A.a3(B.a4,B.a7,B.w,D.cVW,null,null)
D.cm1=w([B.dx,B.eZ],x.O)
D.bI8=new A.a3(B.ax,B.aC,B.w,D.cm1,null,null)
D.czY=w([B.c,B.b6],x.O)
D.bIj=new A.a3(B.a4,B.a7,B.w,D.czY,null,null)
D.a9Q=new A.x(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,B.t)
D.b0r=new A.x(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,B.t)
D.cKe=w([D.a9Q,B.j0,B.q0,B.au,D.b0r],x.O)
D.bKJ=w([0,0.28,0.55,0.82,1],x.n)
D.bIk=new A.a3(B.ax,B.aC,B.w,D.cKe,D.bKJ,null)
D.bIu=new A.a3(B.a4,B.a7,B.w,B.Oo,null,null)
D.bIv=new A.a3(B.a4,B.a7,B.w,G.arj,null,null)
D.bIy=new A.a3(B.a4,B.a7,B.w,D.asE,null,null)
D.cF6=w([B.by,B.fc],x.O)
D.bIK=new A.a3(B.a4,B.a7,B.w,D.cF6,null,null)
D.cZF=w([B.aB,B.by,B.b6],x.O)
D.bIM=new A.a3(B.a4,B.a7,B.w,D.cZF,null,null)
D.cNl=w([B.aZ,B.bH,B.fU],x.O)
D.bIQ=new A.a3(B.a4,B.a7,B.w,D.cNl,null,null)
D.cZo=w([B.bj,B.aI,B.bI,B.aJ,B.aN,B.cp,B.aj],x.O)
D.cIz=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.bIV=new A.a3(B.ax,B.aC,B.w,D.cZo,D.cIz,null)
D.bJ4=new A.a3(B.ax,B.aC,B.w,B.Zs,null,null)
D.cNQ=w([D.TG,B.e_],x.O)
D.bJd=new A.a3(B.a4,B.a7,B.w,D.cNQ,null,null)
D.cUE=w([D.aaw,D.a95,B.M],x.O)
D.bJm=new A.a3(B.ax,B.aC,B.w,D.cUE,null,null)
D.b9j=new A.x(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,B.t)
D.cAq=w([B.eK,B.fV,D.b9j],x.O)
D.bJT=new A.a3(B.ax,B.aC,B.w,D.cAq,null,null)
D.cFA=w([D.nX,B.au],x.O)
D.bJU=new A.a3(B.ax,B.aC,B.w,D.cFA,null,null)
D.bKe=w([F.Ar,B.oe,B.jL,B.hr,B.kE,B.kF,B.kD,B.qt,B.m5,B.eO,B.lt,B.x2,B.Ex],x.A)
D.bNB=w([10,50,100,200],x.t)
D.bXg=w([1,3,5,7],x.t)
D.c1d=w([25,50,100,250],x.t)
D.bs1=new A.a0(983104,"MaterialIcons",!1)
D.c9F=w([B.oe,B.lu,B.mL,B.l0,B.hp,B.uC,D.bs1,B.Y3],x.A)
D.ceZ=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cqP=w([0,0.22,0.5,0.78,1],x.n)
D.cuF=w([8,13,19],x.n)
D.ZM=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.f00=new A.w("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.dV3=new A.jd("questions",48,D.f00,null,x.d)
D.eRD=new A.w("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.dV8=new A.jd("edit",48,D.eRD,null,x.d)
D.f7d=new A.w("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.dVe=new A.jd("delete",48,D.f7d,null,x.d)
D.cuO=w([D.dV3,D.dV8,D.dVe],A.az("P<oF<n>>"))
D.cDY=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.cEa=w([B.bM,B.im],x.O)
D.a1k=new C.ln("text","",null,null)
D.cFf=w([D.a1k],x.a)
D.cGA=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.ec8=new A.abR(B.m3,"Home")
D.e3L=new A.abR(B.pg,"Growth")
D.e7W=new A.abR(B.jL,"Wallet")
D.cIL=w([D.ec8,D.e3L,D.e7W],A.az("P<+icon,label(a0,n)>"))
D.cJ8=w([4,0,2,6,8,1,3,5,7],x.t)
D.cJg=w([B.c,B.bN,B.cp],x.O)
D.dn9=new C.qS("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.dnc=new C.qS("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.dna=new C.qS("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.dn4=new C.qS("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.dn5=new C.qS("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.dnd=new C.qS("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a_c=w([D.dn9,D.dnc,D.dna,D.dn4,D.dn5,D.dnd],x.F)
D.a_h=w([B.aD,B.bm,B.d6,B.aZ],x.O)
D.b31=new A.x(1,1,0.8980392156862745,0.4,B.t)
D.cNW=w([B.Tp,D.b31,B.q0,B.hP,B.j0],x.O)
D.a_m=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.NW=w(["checkers_deluxe","tic_tac_go"],x.s)
D.bKi=w([0,1,2],x.t)
D.c9T=w([3,4,5],x.t)
D.cmA=w([6,7,8],x.t)
D.bKk=w([0,3,6],x.t)
D.bXl=w([1,4,7],x.t)
D.c3G=w([2,5,8],x.t)
D.bKo=w([0,4,8],x.t)
D.c3D=w([2,4,6],x.t)
D.cQ6=w([D.bKi,D.c9T,D.cmA,D.bKk,D.bXl,D.c3G,D.bKo,D.c3D],x.B)
D.aAz=new C.Hh(0,"abab")
D.dn2=new C.Hh(1,"aaaBbb")
D.aAA=new C.Hh(2,"aabb")
D.cR1=w([D.aAz,D.dn2,D.aAA],A.az("P<Hh>"))
D.cRh=w([],x.a)
D.as2=w([],x.v)
D.cUw=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.Of=w([1,2,3,-1,-2],x.t)
D.d0E=w([B.jh,B.aB],x.O)
D.fhp=new C.qc("dice","Dice Roll","Roll for cash & prizes!",B.m1,D.d0E)
D.fhm=new C.qc("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",B.qo,B.aqR)
D.cWF=w([B.dk,B.bk],x.O)
D.fhk=new C.qc("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",B.XR,D.cWF)
D.d0c=w([B.dI,B.mu],x.O)
D.fhq=new C.qc("memory","Memory Match","Match pairs \u2014 solo or multiplayer",B.Y3,D.d0c)
D.bX3=w([B.jA,B.oV],x.O)
D.fhn=new C.qc("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",G.XD,D.bX3)
D.cUv=w([M.kV,D.U_],x.O)
D.fhl=new C.qc("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",B.EA,D.cUv)
D.fho=new C.qc("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",B.ct,Ai.mM)
D.cVV=w([D.fhp,D.fhm,D.fhk,D.fhq,D.fhn,D.fhl,D.fho],A.az("P<qc>"))
D.cXb=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.b6H=new A.x(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,B.t)
D.b6z=new A.x(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,B.t)
D.abb=new A.x(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,B.t)
D.cXW=w([D.b6H,D.b6z,D.abb],x.O)
D.b8q=new A.x(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,B.t)
D.cXY=w([B.a8m,D.b8q,D.abb],x.O)
D.cYx=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.asZ=w([D.nX,B.c,D.eD,B.bU,B.be,B.au],x.O)
D.dn7=new C.qS("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.dn6=new C.qS("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.dn3=new C.qS("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.dnb=new C.qS("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.dne=new C.qS("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.dn8=new C.qS("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a_X=w([D.dn7,D.dn6,D.dn3,D.dnb,D.dne,D.dn8],x.F)
D.d0p=w([B.cb,B.oV],x.O)
D.dKU={checkers_deluxe:0,tic_tac_go:1}
D.ayz=new A.bs(D.dKU,["Checkers Deluxe","Tic Tac Go"],A.az("bs<n,n>"))
D.dK4={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.ayL=new A.bs(D.dK4,[1,2,3,4,5,6,7],A.az("bs<n,I>"))
D.dg7=new C.a4A(null)
D.djt=new C.ln("signature","NGMY Support Team",null,null)
D.dju=new C.ln("divider","",null,null)
D.P8=new C.Tw(!1,!1,!1,!1)
D.Pa=new C.Ma(!1,!1,!1,!1)
D.dkw=new C.Ma(!0,!0,!1,!1)
D.Bf=new C.aog(0,"swahili")
D.aAy=new C.aog(1,"english")
D.Bg=new C.aog(2,"mix")
D.cPC=w([B.h6,B.j_,B.dl],x.O)
D.bqT=new A.a0(63118,"MaterialIcons",!1)
D.dof=new C.oB(D.cPC,B.h5,B.aZ,"BACKGAMMON","\ud83c\udfb2",D.bqT)
D.bsS=new A.a0(983637,"MaterialIcons",!1)
D.dog=new C.oB(Af.at9,B.bm,B.f3,"EURO WHEEL","\ud83c\udfa1",D.bsS)
D.cXt=w([B.M,B.aI,B.bt],x.O)
D.doh=new C.oB(D.cXt,B.aN,B.aj,"ROYALE","\u265f\ufe0f",G.XD)
D.cDy=w([B.dx,B.bk,B.e4],x.O)
D.doi=new C.oB(D.cDy,B.aD,B.d6,"CONNECT 4","\ud83d\udd34",B.Yg)
D.cT6=w([B.du,B.eZ,B.oV],x.O)
D.doj=new C.oB(D.cT6,B.u4,B.cb,"PUNTO BANCO","\ud83d\udc8e",B.lu)
D.cm3=w([B.nc,B.i0,B.lm],x.O)
D.dok=new C.oB(D.cm3,B.iV,B.jB,"DOMINOES","\ud83c\udc53",B.aho)
D.cY8=w([B.wd,B.rp,B.hw],x.O)
D.dol=new C.oB(D.cY8,B.zp,B.hl,"WAR","\u2694\ufe0f",N.Xz)
D.dom=new C.oB(B.at3,B.aK,B.aj,"PREMIUM","\ud83c\udfae",B.m1)
D.cF7=w([B.je,B.aB,B.dI],x.O)
D.don=new C.oB(D.cF7,B.dU,B.fc,"JACKPOT","\ud83c\udfb0",B.m1)
D.cSk=w([B.kT,B.lN,B.by],x.O)
D.doo=new C.oB(D.cSk,B.q_,B.bU,"LIVE BINGO","\ud83c\udfb1",B.Ad)
D.cy3=w([B.j_,B.e_,B.aZ],x.O)
D.bqj=new A.a0(62865,"MaterialIcons",!1)
D.dop=new C.oB(D.cy3,B.rt,B.aK,"BIG SPIN","\ud83c\udfa1",D.bqj)
D.doq=new C.oB(B.a_W,B.aJ,B.bm,"HOLD'EM","\u2660\ufe0f",B.jL)
D.cYw=w([B.eK,B.fq,B.aW],x.O)
D.bpr=new A.a0(61234,"MaterialIcons",!1)
D.dor=new C.oB(D.cYw,B.lR,B.aS,"CRAPS","\ud83c\udfb2",D.bpr)
D.cCS=w([B.im,B.iG,B.bM],x.O)
D.dos=new C.oB(D.cCS,B.bH,B.b6,"PLINKO","\ud83d\udc8e",Aj.Ln)
D.bsD=new A.a0(983492,"MaterialIcons",!1)
D.dot=new C.oB(B.a_W,B.el,B.bm,"SNOOKER","\ud83c\udfb1",D.bsD)
D.cWg=w([B.eK,B.fq,B.aS],x.O)
D.dou=new C.oB(D.cWg,B.q4,B.br,"PROFIT LAB","\ud83d\udcb0",B.hT)
D.cWy=w([B.eB,B.f2,B.bm],x.O)
D.brf=new A.a0(63324,"MaterialIcons",!1)
D.dov=new C.oB(D.cWy,B.zm,B.bh,"KLONDIKE","\ud83c\udccf",D.brf)
D.cQc=w([B.d9,B.bj,B.M],x.O)
D.dow=new C.oB(D.cQc,B.aK,B.aI,"VEGAS TABLE","\ud83c\udccf",A_.EO)
D.po=new C.Dt(0,"continueGame")
D.pp=new C.Dt(1,"youWin")
D.Gf=new C.Dt(2,"youLose")
D.Pj=new C.Dt(3,"draw")
D.aAN=new C.Uf(0,"found")
D.dHi=new C.Uf(1,"foundLive")
D.a1A=new C.Uf(2,"notFound")
D.aAO=new C.Uf(3,"wrongAccount")
D.dMZ=new A.u(4,12)
D.dPI=new A.C(B.JY,B.rd,null)
D.bkv=new A.N(4,0,0,3)
D.eDQ=new A.F(!0,B.aL,null,null,null,null,10,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbn=new A.w("NGMY Helper",null,D.eDQ,null,null,null,null,null,null,null,null,null)
D.dPY=new A.C(D.bkv,D.fbn,null)
D.br7=new A.a0(63284,"MaterialIcons",!1)
D.bwj=new A.ad(D.br7,18,B.nZ,null,null,null)
D.eIc=new A.F(!0,B.nZ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVk=new A.w("Continue",null,D.eIc,null,null,null,null,null,null,null,null,null)
D.cRG=w([D.bwj,B.bp,D.eVk],x.p)
D.epq=new A.cC(B.b0,B.e,B.R,B.m,null,B.p,null,0,D.cRG,null)
D.dQ0=new A.C(B.iK,D.epq,null)
D.dQa=new A.C(B.bS,B.rd,null)
D.b6m=new A.x(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,B.t)
D.cOu=w([B.fV,B.fq,B.cY,D.b6m],x.O)
D.bIY=new A.a3(B.ax,B.aC,B.w,D.cOu,B.AG,null)
D.aT9=new A.o(null,null,null,null,null,D.bIY,B.n)
D.bcK=new A.kC(D.aT9,B.bb,null,null)
D.dVt=new A.cG(0,0,0,0,null,null,D.bcK,null)
D.by0=new A.ad(B.us,11,B.c,null,null,null)
D.dVx=new A.cG(10,12,null,null,null,null,D.by0,null)
D.cqH=w([B.fx,B.eB,B.k2],x.O)
D.dW6=new A.bR(B.I5,1.1,B.w,null,0,D.cqH,null,null)
D.b7y=new A.x(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,B.t)
D.b2K=new A.x(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,B.t)
D.b4i=new A.x(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,B.t)
D.cMq=w([D.b7y,D.b2K,D.b4i],x.O)
D.dWd=new A.bR(B.a69,1.05,B.w,null,0,D.cMq,null,null)
D.dWA=new A.bR(B.A,0.5,B.w,null,0,W.a_0,null,null)
D.enK=new A.a7(-18,0,18,1)
D.eoc=new A.a7(-3,-5,3,5)
D.bwL=new A.ad(B.en,16,D.eD,null,null,null)
D.aLa=new A.F(!0,D.eD,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9d=new A.w("Screenshot added \xb7 tap to change",null,D.aLa,null,null,null,null,null,null,null,null,null)
D.cAV=w([D.bwL,B.bp,D.f9d],x.p)
D.eoU=new A.cC(B.b0,B.b7,B.j,B.m,null,B.p,null,0,D.cAV,null)
D.bAv=new A.ad(B.jM,15,D.eD,null,null,null)
D.f78=new A.w("Refresh",null,D.aLa,null,null,null,null,null,null,null,null,null)
D.cD0=w([D.bAv,B.d7,D.f78],x.p)
D.eoW=new A.cC(B.b0,B.e,B.R,B.m,null,B.p,null,0,D.cD0,null)
D.dKt={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.eqk=new A.f9(D.dKt,3,x.M)
D.dKd={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.eqq=new A.f9(D.dKd,36,x.M)
D.dKg={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.eqy=new A.f9(D.dKg,6,x.M)
D.dLj={memory:0,typing:1,scramble:2,pattern:3}
D.mg=new A.f9(D.dLj,4,x.M)
D.esH=new A.as(276,276)
D.etn=new A.a5(13,null,null,null)
D.aYP=new A.fd(2.6,null,null,null,null,B.aK,null,null,null,null)
D.etx=new A.a5(26,26,D.aYP,null)
D.euh=new A.a5(null,7,null,null)
D.euq=new A.hJ(8,0,0,1,null)
D.faf=new A.w("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aIO=new A.b_(D.faf,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eQQ=new A.w("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.exm=new A.b_(D.eQQ,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eRO=new A.w("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.exs=new A.b_(D.eRO,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f7i=new A.w("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.ey5=new A.b_(D.f7i,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.b70=new A.x(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,B.t)
D.eHb=new A.F(!0,D.b70,null,null,null,null,9,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eB6=new A.em("$",null,null,B.cS,null,null,null,null,null,null,D.eHb)
D.eBm=new A.F(!0,B.M,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBG=new A.F(!0,B.c,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBL=new A.F(!0,B.bj,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eC7=new A.F(!0,B.M,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCh=new A.F(!0,B.c,null,null,null,null,19,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCn=new A.F(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCv=new A.F(!0,null,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDc=new A.F(!0,B.aK,null,null,null,null,28,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDI=new A.F(!0,D.eD,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDK=new A.F(!0,B.bH,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEr=new A.F(!0,E.zk,null,null,null,null,13,B.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aK_=new A.F(!0,B.c,null,null,null,null,20,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFV=new A.F(!0,B.bH,null,null,null,null,11.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGc=new A.F(!0,B.af,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,B.aA,null,null,null,null,null,null,null,null)
D.eGt=new A.F(!0,B.af,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHq=new A.F(!0,B.c,null,null,null,null,11,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHF=new A.F(!0,B.c,null,null,null,null,14,B.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHQ=new A.F(!0,B.bh,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHR=new A.F(!0,B.c,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,B.aA,null,null,null,null,null,null,null,null)
D.eIk=new A.F(!0,B.ix,null,null,null,null,10.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b1B=new A.x(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,B.t)
D.eIx=new A.F(!0,D.b1B,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJS=new A.F(!0,B.aD,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKe=new A.F(!0,D.a9Q,null,null,null,null,9,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKF=new A.F(!0,E.zk,null,null,null,null,11,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKA=new A.F(!0,B.f2,null,null,null,null,52,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKB=new A.F(!0,B.bt,null,null,null,null,7,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKQ=new A.F(!0,E.zk,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.vj=new A.F(!0,B.c,null,null,null,null,13,B.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b52=new A.x(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,B.t)
D.eL3=new A.F(!0,D.b52,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLy=new A.F(!0,B.OP,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMw=new A.F(!0,B.c,null,null,null,null,38,B.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMC=new A.F(!0,B.i1,null,null,null,null,11,B.a3,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMG=new A.F(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKT=new A.F(!0,B.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eN9=new A.F(!0,B.M,null,null,null,null,10,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNd=new A.F(!0,B.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eO4=new A.F(!0,B.M,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOs=new A.F(!0,B.af,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOI=new A.F(!0,B.bh,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePa=new A.F(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePe=new A.F(!0,B.M,null,null,null,null,11,B.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQ7=new A.w("Value per pair",null,B.hs,null,null,null,null,null,null,null,null,null)
D.eQ8=new A.w("Restore now",null,B.ce,null,null,null,null,null,null,null,null,null)
D.eQD=new A.w("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aKq=new A.F(!0,B.cW,null,null,null,null,12,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQL=new A.w("AVAILABLE PLANS",null,D.aKq,null,null,null,null,null,null,null,null,null)
D.eQO=new A.w("I understand",null,B.cr,null,null,null,null,null,null,null,null,null)
D.eRg=new A.w("Go Back",null,B.cr,null,null,null,null,null,null,null,null,null)
D.eEi=new A.F(!0,B.bt,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRW=new A.w("PLAN VALUE",null,D.eEi,null,null,null,null,null,null,null,null,null)
D.eRY=new A.w("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.eSj=new A.w("Deposit",null,B.Rl,null,null,null,null,null,null,null,null,null)
D.eNs=new A.F(!0,B.dU,null,null,null,null,null,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTe=new A.w("JACKPOT SLOTS",null,D.eNs,null,null,null,null,null,null,null,null,null)
D.eTw=new A.w("Restore",null,B.ce,null,null,null,null,null,null,null,null,null)
D.eEl=new A.F(!0,B.c,null,null,null,null,12,B.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTz=new A.w("YOUR NUMBER",null,D.eEl,null,null,null,null,null,null,null,null,null)
D.eTN=new A.w("SPIN REELS",null,G.a4l,null,null,null,null,null,null,null,null,null)
D.eUc=new A.w("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.eUG=new A.w("Perfect Score Profit",null,B.hs,null,null,null,null,null,null,null,null,null)
D.eVi=new A.w("Join room",null,B.kk,null,null,null,null,null,null,null,null,null)
D.eX9=new A.w("Add payment screenshot",null,B.jU,null,null,null,null,null,null,null,null,null)
D.eXn=new A.w("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.eMJ=new A.F(!0,B.aK,null,null,null,null,11,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXO=new A.w("INVITE A PLAYER",null,D.eMJ,null,null,null,null,null,null,null,null,null)
D.eLV=new A.F(!0,B.Tp,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYc=new A.w("NGMY GOLD LEADER",null,D.eLV,null,null,null,null,null,null,null,null,null)
D.eYG=new A.w("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.eZ2=new A.w("Invest & Play",null,B.ow,null,null,null,null,null,null,null,null,null)
D.aKj=new A.F(!0,D.w5,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZp=new A.w("VALID THRU",null,D.aKj,null,null,null,null,null,null,null,null,null)
D.aKV=new A.F(!0,B.az,null,null,null,null,11,B.I,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZx=new A.w("DEALER",null,D.aKV,null,null,null,null,null,null,null,null,null)
D.eZD=new A.w("CARDHOLDER",null,D.aKj,null,null,null,null,null,null,null,null,null)
D.eLs=new A.F(!0,B.aJ,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_i=new A.w("NGMY PLATINUM",null,D.eLs,null,null,null,null,null,null,null,null,null)
D.eOz=new A.F(!0,B.oX,null,null,null,null,10,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_W=new A.w("EARNED SO FAR",null,D.eOz,null,null,null,null,null,null,null,null,null)
D.f0r=new A.w("VS",null,B.aKd,null,null,null,null,null,null,null,null,null)
D.f0Q=new A.w("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.f1b=new A.w("One day left",null,B.aJY,null,B.L,null,null,null,null,null,null,null)
D.f1v=new A.w("Keep typing \u2014 mistakes are counted in your payout",null,B.BW,null,null,null,null,null,null,null,null,null)
D.f1w=new A.w("Multiplayer invite",null,B.kk,null,null,null,null,null,null,null,null,null)
D.f1G=new A.w("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.eD0=new A.F(!0,B.OP,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1M=new A.w("\ud83d\udcb0 Partial Payout System",null,D.eD0,null,null,null,null,null,null,null,null,null)
D.f1W=new A.w("Browse Topics",null,B.eS,null,null,null,null,null,null,null,null,null)
D.eC5=new A.F(!0,B.c,null,null,null,null,22,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f29=new A.w("Investment Required",null,D.eC5,null,B.L,null,null,null,null,null,null,null)
D.eBD=new A.F(!0,B.c,null,null,null,null,16.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3y=new A.w("Network Status",null,D.eBD,null,null,null,null,null,null,null,null,null)
D.f43=new A.w("Their account email",null,F.a47,null,null,null,null,null,null,null,null,null)
D.f4m=new A.w("Verification code",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f4n=new A.w("Category",null,null,null,null,null,null,null,null,null,null,null)
D.f4z=new A.w("ACTIVE ASSET",null,D.aKq,null,null,null,null,null,null,null,null,null)
D.f4T=new A.w("Scan QR",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f4Y=new A.w("Check word",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f5l=new A.w("YOUR HAND",null,D.aKV,null,null,null,null,null,null,null,null,null)
D.f5S=new A.w("NGMY Music Studio",null,B.la,null,null,null,null,null,null,null,null,null)
D.f5V=new A.w("I sent it \u2014 submit deposit",null,B.ow,null,null,null,null,null,null,null,null,null)
D.f6B=new A.w("Back",null,B.QT,null,null,null,null,null,null,null,null,null)
D.ePp=new A.F(!0,null,null,null,null,null,null,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6H=new A.w("DEAL / PLAY ROUND",null,D.ePp,null,null,null,null,null,null,null,null,null)
D.f6T=new A.w("Got it \u2014 keep chatting",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f71=new A.w("3 Messages Left",null,B.aKJ,null,null,null,null,null,null,null,null,null)
D.f7v=new A.w("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.f7D=new A.w("Copy",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f7Y=new A.w("How many games?",null,F.a47,null,null,null,null,null,null,null,null,null)
D.eKY=new A.F(!0,B.az,null,null,null,null,null,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f89=new A.w("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.eKY,null,B.L,null,null,null,null,null,null,null)
D.f9D=new A.w("Question",null,null,null,null,null,null,null,null,null,null,null)
D.f9Q=new A.w("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.ePN=new A.F(!0,B.c,null,null,null,null,12.5,B.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbi=new A.w("NGMY  WALLET",null,D.ePN,null,null,null,null,null,null,null,null,null)
D.fbj=new A.w("Select Your Bet",null,B.hg,null,null,null,null,null,null,null,null,null)
D.fez=new A.cx("history",x.W)
D.feE=new A.cx("ngmy_local_home",x.W)
D.feF=new A.cx("ngmy_local_invest",x.W)
D.feG=new A.cx("ngmy_local_wallet",x.W)
D.fh7=new C.Xj(null)
D.aNp=new C.ayn(0,"grid")
D.aNq=new C.ayn(1,"questions")
D.fhY=new C.ayn(2,"answer")
D.fiM=new C.Yc(null)})();(function staticFields(){$.fCg=A.aZ(x.N)
$.h0t=A.T(x.N,x.k)
$.fHC=null
$.fHq=A.T(x.N,A.az("vy"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hXJ","bAd",()=>C.hG_())
w($,"hXv","h8n",()=>{var v=null,u=A.ib(v,v,v,v,D.eB6,B.a5,B.cg,v,B.ek,B.cf)
u.f_()
return u})})()};
(a=>{a["WO9KP3T7ctaMHOD1ntmqRfk3vU4="]=a.current})($__dart_deferred_initializers__);