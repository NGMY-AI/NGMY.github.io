((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,L,P,A2,E,M,A3,A4,Q,A5,R,N,A6,A7,S,A8,A9,T,Aa,U,Ab,Ac,Ad,V,Ae,G,W,Af,C={
htz(d,e,f){var w=null,v=f.k("GU<0>"),u=new A.GU(w,w,w,w,v)
$.vY()
u.d=new C.cAO(new A.vv(),e,u,f,d)
return new A.hZ(u,v.k("hZ<1>"))},
cAO:function cAO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cAP:function cAP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cAL:function cAL(d){this.a=d},
cAM:function cAM(d,e){this.a=d
this.b=e},
cAN:function cAN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cAK:function cAK(d,e,f){this.a=d
this.b=e
this.c=f},
bu9:function bu9(d){this.a=d},
hty(d,e,f,g){return new C.axu(d,e,f,null,g.k("axu<0>"))},
G5:function G5(){},
aK_:function aK_(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
fcB:function fcB(d){this.a=d},
fcA:function fcA(d,e){this.a=d
this.b=e},
fcD:function fcD(d){this.a=d},
fcy:function fcy(d,e,f){this.a=d
this.b=e
this.c=f},
fcC:function fcC(d){this.a=d},
fcz:function fcz(d){this.a=d},
axu:function axu(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
ilh(d){var w=B.a.i(d)
while(B.a.a_(w,"$"))w=B.a.i(B.a.b2(w,1))
return w},
hEd(d){var w=C.ilh(d)
if(w.length===0)return""
return"$"+w},
fM6(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fM6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:i=B.a.i(d.toLowerCase())
if(i.length===0){w=1
break}t=new A.V(Date.now(),0,!1).bR(-6048e8)
s=e.length,r=0
case 3:if(!(r<e.length)){w=5
break}q=e[r]
if(B.a.i(q.b.toLowerCase())!==i){w=4
break}p=q.y
o=p.a
if(o>=t.gbq())o=o===t.gbq()&&p.b<t.gcA()
else o=!0
if(o){w=4
break}if(q.x!==B.cu){w=4
break}if(q.d!==B.h2){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!A.cS(m,"game payout:",0))if(!A.cS(m,"game partial:",0)){if(!A.cS(m,"multiplayer payout:",0))o=A.cS(m,"dice",0)&&q.e===B.fv
else o=l
l=o}if(!l){w=4
break}if(A.cS(m,"game payout:",0))k=B.a.i(B.a.b2(n,B.a.co(m,"game payout:")+12))
else if(A.cS(m,"game partial:",0)){k=B.a.i(B.a.b2(n,B.a.co(m,"game partial:")+13))
j=B.a.co(k,"(")
if(j>0)k=B.a.i(B.a.aB(k,0,j))}else if(A.cS(m,"multiplayer payout:",0)){k=B.a.i(B.a.b2(n,B.a.co(m,"multiplayer payout:")+19))
j=B.a.co(k,"(")
if(j>0)k=B.a.i(B.a.aB(k,0,j))}else k=A.cS(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return A.b(C.ve(q.c,p,n,d,o,null,q.a,!0),$async$fM6)
case 6:case 4:e.length===s||(0,A.J)(e),++r
w=3
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$fM6,v)},
iq1(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
imk(d,e,f){return B.d.aV(e,new C.fPP(f,B.a.i(d.toLowerCase())))},
fPG(d){var w
C.hpJ(d)
w=d.c8
return A.bq(new A.N(w,new C.fPH(),A.U(w).k("N<1,@>")),!0,x.N)},
ibH(d,e,f){var w,v,u,t,s,r,q=null,p=B.c_,o=B.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aW.toString
u=$.ej().giL().b
if(u.a===0)t=1
else{new A.b7(u,A.a4(u).k("b7<2>")).gH(0)
u=$.lI()
s=u.d
t=s==null?u.ghC():s}w=B.i.cD(f*t)
v=new C.fw4(f)
if(J.d5(n,"data:image"))try{u=A.fR(B.cM.aN(B.d.gan(J.lM(n,","))),B.A,w,new C.fw1(v),B.hh,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.d5(n,"supabase://"))return new A.l9(A.a2U(n),new C.fw2(f,e,p,w,v),q,q,x.gh)
return A.kE(n,B.A,w,new C.fw3(v),B.hh,p,!0,e,q,q,f)},
hdP(d,e){return new A.a5(e,e,A.hV(C.ibH(d,e,e),B.aq),null)},
i3p(){var w,v,u=A.a([],x._),t=x.N,s=A.C(D.dsB,x.gm)
for(w=0;w<36;++w){v=B.Dx[w]
s.push(new C.ra(v.a,v.b,v.c,v.e,v.f))}return new C.aCd(u,A.T(t,t),s)},
fPP:function fPP(d,e){this.a=d
this.b=e},
fPH:function fPH(){},
fw4:function fw4(d){this.a=d},
fw1:function fw1(d){this.a=d},
fw2:function fw2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fw0:function fw0(d){this.a=d},
fw3:function fw3(d){this.a=d},
amJ:function amJ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ra:function ra(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
aCd:function aCd(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
dku:function dku(d,e){this.a=d
this.b=e},
dkF:function dkF(d,e){this.a=d
this.b=e},
dkX:function dkX(){},
dkY:function dkY(d){this.a=d},
dkN:function dkN(d,e){this.a=d
this.b=e},
dkM:function dkM(){},
dkO:function dkO(d){this.a=d},
dkL:function dkL(){},
dkQ:function dkQ(d){this.a=d},
dkP:function dkP(){},
dkI:function dkI(d){this.a=d},
dkG:function dkG(d){this.a=d},
dkH:function dkH(d){this.a=d},
dkJ:function dkJ(d){this.a=d},
dkK:function dkK(d){this.a=d},
dkA:function dkA(d,e){this.a=d
this.b=e},
dkB:function dkB(d,e){this.a=d
this.b=e},
dky:function dky(d){this.a=d},
dkz:function dkz(d){this.a=d},
dkC:function dkC(d){this.a=d},
dkD:function dkD(d){this.a=d},
dkE:function dkE(d,e,f){this.a=d
this.b=e
this.c=f},
dkx:function dkx(d,e){this.a=d
this.b=e},
dkw:function dkw(d,e){this.a=d
this.b=e},
dkv:function dkv(d,e){this.a=d
this.b=e},
dkW:function dkW(d){this.a=d},
dkU:function dkU(d,e,f){this.a=d
this.b=e
this.c=f},
dkT:function dkT(d,e,f){this.a=d
this.b=e
this.c=f},
dkS:function dkS(d,e){this.a=d
this.b=e},
dkR:function dkR(){},
dkV:function dkV(d){this.a=d},
aF2:function aF2(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
blZ:function blZ(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
dYT:function dYT(d){this.a=d},
dYS:function dYS(d){this.a=d},
dYU:function dYU(d){this.a=d},
dYR:function dYR(){},
dYV:function dYV(d,e){this.a=d
this.b=e},
dYQ:function dYQ(d){this.a=d},
dYW:function dYW(d){this.a=d},
amI:function amI(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aCc:function aCc(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
dko:function dko(d){this.a=d},
dkr:function dkr(d){this.a=d},
dks:function dks(d){this.a=d},
dkt:function dkt(d){this.a=d},
dkq:function dkq(d,e){this.a=d
this.b=e},
dkp:function dkp(d,e){this.a=d
this.b=e},
amK:function amK(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCe:function aCe(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.a0=_.bb=_.bn=_.y2=_.y1=0
_.aH=_.aR=_.aL=_.aG=$
_.bK=_.bf=_.b6=_.b8=null
_.aP=!1
_.bH=_.bm=null
_.c8=!1
_.cj=_.cP=""
_.c=_.a=_.bF=null},
dmg:function dmg(d,e){this.a=d
this.b=e},
dmj:function dmj(d){this.a=d},
dmk:function dmk(d){this.a=d},
dml:function dml(d){this.a=d},
dmm:function dmm(d){this.a=d},
dmn:function dmn(d){this.a=d},
dmh:function dmh(d){this.a=d},
dmi:function dmi(d){this.a=d},
dlw:function dlw(d,e){this.a=d
this.b=e},
dlx:function dlx(d,e){this.a=d
this.b=e},
dm_:function dm_(d){this.a=d},
dm0:function dm0(){},
dlM:function dlM(d,e,f){this.a=d
this.b=e
this.c=f},
dlN:function dlN(d){this.a=d},
dlO:function dlO(d,e,f){this.a=d
this.b=e
this.c=f},
dlP:function dlP(d,e){this.a=d
this.b=e},
dlQ:function dlQ(){},
dkZ:function dkZ(d){this.a=d},
dlv:function dlv(d,e){this.a=d
this.b=e},
dm1:function dm1(){},
dma:function dma(){},
dlZ:function dlZ(d){this.a=d},
dlY:function dlY(d){this.a=d},
dlt:function dlt(d){this.a=d},
dlu:function dlu(){},
dm5:function dm5(){},
dm6:function dm6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dm7:function dm7(d,e,f){this.a=d
this.b=e
this.c=f},
dl_:function dl_(){},
dl0:function dl0(d){this.a=d},
dl1:function dl1(){},
dlF:function dlF(d,e){this.a=d
this.b=e},
dlG:function dlG(d,e,f){this.a=d
this.b=e
this.c=f},
dlH:function dlH(d){this.a=d},
dlE:function dlE(d){this.a=d},
dlR:function dlR(d){this.a=d},
dlS:function dlS(){},
dlT:function dlT(d){this.a=d},
dlU:function dlU(){},
dlV:function dlV(d){this.a=d},
dlW:function dlW(){},
dm4:function dm4(d,e,f){this.a=d
this.b=e
this.c=f},
dlI:function dlI(d){this.a=d},
dlJ:function dlJ(d,e){this.a=d
this.b=e},
dlK:function dlK(d){this.a=d},
dlL:function dlL(d){this.a=d},
dm8:function dm8(d){this.a=d},
dm9:function dm9(d){this.a=d},
dl2:function dl2(d){this.a=d},
dl3:function dl3(d,e){this.a=d
this.b=e},
dl4:function dl4(d){this.a=d},
dl5:function dl5(d){this.a=d},
dm2:function dm2(d,e){this.a=d
this.b=e},
dm3:function dm3(d){this.a=d},
dlD:function dlD(d,e){this.a=d
this.b=e},
dlX:function dlX(d,e,f){this.a=d
this.b=e
this.c=f},
dlB:function dlB(d,e,f){this.a=d
this.b=e
this.c=f},
dlC:function dlC(){},
dmb:function dmb(d){this.a=d},
dmc:function dmc(d){this.a=d},
dmd:function dmd(d){this.a=d},
dmf:function dmf(d){this.a=d},
dme:function dme(){},
dlA:function dlA(d,e,f){this.a=d
this.b=e
this.c=f},
dlz:function dlz(d,e){this.a=d
this.b=e},
dly:function dly(d,e){this.a=d
this.b=e},
dli:function dli(d){this.a=d},
dlh:function dlh(d,e){this.a=d
this.b=e},
dlj:function dlj(d){this.a=d},
dlg:function dlg(d,e){this.a=d
this.b=e},
dlk:function dlk(d){this.a=d},
dlf:function dlf(){},
dll:function dll(d){this.a=d},
dld:function dld(){},
dle:function dle(d){this.a=d},
dlm:function dlm(d){this.a=d},
dlc:function dlc(d,e){this.a=d
this.b=e},
dln:function dln(d){this.a=d},
dlb:function dlb(d,e){this.a=d
this.b=e},
dl7:function dl7(d,e){this.a=d
this.b=e},
dlo:function dlo(d){this.a=d},
dla:function dla(d,e){this.a=d
this.b=e},
dlp:function dlp(d){this.a=d},
dl9:function dl9(d){this.a=d},
dl6:function dl6(d,e){this.a=d
this.b=e},
dlq:function dlq(d,e,f){this.a=d
this.b=e
this.c=f},
dlr:function dlr(d){this.a=d},
dl8:function dl8(){},
dls:function dls(d){this.a=d},
anw:function anw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bj1:function bj1(){this.c=this.a=null},
dpR:function dpR(d,e){this.a=d
this.b=e},
dpQ:function dpQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ajE:function ajE(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
azi:function azi(d,e,f,g,h,i,j,k,l,m){var _=this
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
cMQ:function cMQ(d){this.a=d},
cMa:function cMa(d,e){this.a=d
this.b=e},
cM0:function cM0(d){this.a=d},
cM1:function cM1(d){this.a=d},
cMk:function cMk(d){this.a=d},
cMh:function cMh(d){this.a=d},
cMi:function cMi(d){this.a=d},
cMj:function cMj(d,e,f){this.a=d
this.b=e
this.c=f},
cMc:function cMc(d){this.a=d},
cMb:function cMb(d){this.a=d},
cM2:function cM2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cMf:function cMf(d){this.a=d},
cMe:function cMe(d){this.a=d},
cMd:function cMd(d,e){this.a=d
this.b=e},
cMD:function cMD(d){this.a=d},
cMx:function cMx(d){this.a=d},
cMA:function cMA(d){this.a=d},
cMz:function cMz(){},
cMw:function cMw(d){this.a=d},
cMy:function cMy(d,e){this.a=d
this.b=e},
cMv:function cMv(){},
cM7:function cM7(){},
cM8:function cM8(d,e){this.a=d
this.b=e},
cM9:function cM9(d){this.a=d},
cM5:function cM5(d,e){this.a=d
this.b=e},
cM6:function cM6(d,e){this.a=d
this.b=e},
cMn:function cMn(d,e){this.a=d
this.b=e},
cMg:function cMg(d){this.a=d},
cMo:function cMo(d){this.a=d},
cMp:function cMp(d,e){this.a=d
this.b=e},
cMq:function cMq(d,e){this.a=d
this.b=e},
cMr:function cMr(d,e){this.a=d
this.b=e},
cMs:function cMs(d,e,f){this.a=d
this.b=e
this.c=f},
cMt:function cMt(d){this.a=d},
cMu:function cMu(d){this.a=d},
cMl:function cMl(d,e){this.a=d
this.b=e},
cMC:function cMC(d){this.a=d},
cMm:function cMm(d,e){this.a=d
this.b=e},
cMP:function cMP(d){this.a=d},
cMI:function cMI(d){this.a=d},
cML:function cML(d){this.a=d},
cMF:function cMF(d,e){this.a=d
this.b=e},
cMJ:function cMJ(){},
cMK:function cMK(d,e){this.a=d
this.b=e},
cMG:function cMG(d){this.a=d},
cMH:function cMH(d){this.a=d},
cMN:function cMN(){},
cMM:function cMM(d){this.a=d},
cME:function cME(d,e){this.a=d
this.b=e},
cMO:function cMO(d){this.a=d},
cM3:function cM3(d){this.a=d},
cMB:function cMB(d,e){this.a=d
this.b=e},
cM4:function cM4(d,e,f){this.a=d
this.b=e
this.c=f},
aMv:function aMv(){},
aMw:function aMw(){},
aMx:function aMx(){},
aNu:function aNu(){},
c3C(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase())
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
c3D(d){var w=B.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hRI(d,e){var w=d.ax
if(w<0)return!1
return w===e},
b_1(d,e){return C.hRJ(d,e)},
hRJ(d,e){var w=0,v=A.j(x.di),u,t,s,r,q,p
var $async$b_1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.b2P(d),$async$b_1)
case 3:p=g
if(p!=null){try{t=B.X.aQ(0,p.c,null)
if(x.f.b(t)){s=C.ho2(A.a2(t,x.N,x.z))
if(s==null){u=new A.GP(D.a8f,null)
w=1
break}if(B.a.i(e).length!==0&&!C.c3C(s,e,p.b)){u=new A.GP(D.aLa,null)
w=1
break}r=p.a?D.egi:D.aL9
u=new A.GP(r,s)
w=1
break}}catch(o){}u=new A.GP(D.a8f,null)
w=1
break}s=C.ho3(d)
if(s==null){u=new A.GP(D.a8f,null)
w=1
break}if(B.a.i(e).length!==0&&!C.c3C(s,e,null)){u=new A.GP(D.aLa,null)
w=1
break}u=new A.GP(D.aL9,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_1,v)},
ho3(d){var w,v,u,t,s,r
try{w=B.a.i(d)
if(J.d5(w,"\ufeff"))w=J.nq(w,1)
v=!1
if(J.d5(w,"NGMYSNAP1|")){v=!0
w=B.ca.cJ(0,B.cM.aN(J.nq(w,10)))}u=B.X.aQ(0,w,null)
if(!x.f.b(u))return null
t=A.a2(u,x.N,x.z)
s=v?C.hRH(t):C.ho2(t)
return s}catch(r){return null}},
hRH(d){var w,v,u,t,s,r,q,p,o,n=new C.c3z(),m=new C.c3y(),l=d.h(0,"qi")
if(x.f.b(l)){w=A.a2(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new A.V(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=A.aJ(w.h(0,"d"))
p=new A.w2(v,u,t,s,r,B.i.M(q==null?0:q))}else p=null
v=d.h(0,"qu")
v=J.k(v==null?"User":v)
u=m.$1(d.h(0,"qb"))
t=m.$1(d.h(0,"qp"))
s=J.z(d.h(0,"qc"),!0)
r=n.$1(d.h(0,"qs"))
q=n.$1(d.h(0,"ql"))
n=n.$1(d.h(0,"qe"))
m=m.$1(d.h(0,"qt"))
o=A.aJ(d.h(0,"qn"))
if(o==null)o=0
return new A.a7b("","",v,u,t,s,r,q,n,m,o,p,B.iC,new A.V(Date.now(),0,!1),-1)},
ho2(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.z(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.c3B()
v=d.h(0,"activeInvestment")
if(x.f.b(v)){u=A.a2(v,x.N,x.z)
t=u.h(0,"name")
t=J.k(t==null?"":t)
s=A.aJ(u.h(0,"amount"))
if(s==null)s=0
r=A.aJ(u.h(0,"dailyROI"))
if(r==null)r=0
q=w.$1(u.h(0,"purchaseDate"))
if(q==null)q=new A.V(Date.now(),0,!1)
p=A.aJ(u.h(0,"totalEarned"))
if(p==null)p=0
o=A.aJ(u.h(0,"daysClockedIn"))
n=new A.w2(t,s,r,q,p,B.i.M(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=A.C(new A.ea(J.b8(m,new C.c3A(w),x.eG),t),t.k("M.E"))}else l=A.a([],x.E)
t=d.h(0,"email")
t=J.k(t==null?"":t)
s=d.h(0,"ownerRealEmail")
s=J.k(s==null?"":s)
r=d.h(0,"username")
r=J.k(r==null?"User":r)
q=A.aJ(d.h(0,"accountBalance"))
if(q==null)q=0
p=A.aJ(d.h(0,"totalProfit"))
if(p==null)p=0
o=J.z(d.h(0,"isClockedIn"),!0)
k=w.$1(d.h(0,"clockInStartTime"))
j=w.$1(d.h(0,"lastClockInDate"))
i=w.$1(d.h(0,"lastClockInEarningsDate"))
h=A.aJ(d.h(0,"todayClockInEarned"))
if(h==null)h=0
g=A.aJ(d.h(0,"clockInPenaltyPercent"))
if(g==null)g=0
w=w.$1(d.h(0,"exportedAt"))
if(w==null)w=new A.V(Date.now(),0,!1)
f=A.aJ(d.h(0,"walletStateRevision"))
f=f==null?null:B.i.M(f)
return new A.a7b(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
h84(d,e,f,g){var w=0,v=A.j(x.N),u,t,s,r
var $async$h84=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:t=A.c3x(d,e,f,g)
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(t.a,s,"_")
u=A.Hk(A.KW(t.f3(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h84,v)},
Xn:function Xn(d,e){this.a=d
this.b=e},
c3z:function c3z(){},
c3y:function c3y(){},
c3B:function c3B(){},
c3A:function c3A(d){this.a=d},
ieN(d){return A.cg(null,B.b6,!0,null,new C.fAF(),d,null,!0,!0,x.N)},
if_(d,e,f,g){return A.cg(null,B.b6,!0,null,new C.fBS(g,f,e),d,null,!0,!0,x.y)},
ap3:function ap3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEj:function aEj(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dGm:function dGm(d,e){this.a=d
this.b=e},
dGn:function dGn(d){this.a=d},
dGd:function dGd(d,e){this.a=d
this.b=e},
dGb:function dGb(d){this.a=d},
dGl:function dGl(d){this.a=d},
dGk:function dGk(d,e){this.a=d
this.b=e},
dGa:function dGa(d,e){this.a=d
this.b=e},
dG9:function dG9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dGc:function dGc(d){this.a=d},
dGj:function dGj(){},
dGh:function dGh(d){this.a=d},
dGi:function dGi(d,e){this.a=d
this.b=e},
dGe:function dGe(){},
dGf:function dGf(d,e){this.a=d
this.b=e},
dGg:function dGg(d,e){this.a=d
this.b=e},
dGo:function dGo(d){this.a=d},
a1O:function a1O(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
buG:function buG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0r:function a0r(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blt:function blt(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dGs:function dGs(d){this.a=d},
dGp:function dGp(d,e){this.a=d
this.b=e},
dGq:function dGq(d,e){this.a=d
this.b=e},
dGr:function dGr(d){this.a=d},
a0s:function a0s(d){this.a=d},
blu:function blu(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dGt:function dGt(d,e){this.a=d
this.b=e},
fAF:function fAF(){},
fBS:function fBS(d,e,f){this.a=d
this.b=e
this.c=f},
afN:function afN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f66:function f66(d){this.a=d},
f67:function f67(d){this.a=d},
R9:function R9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_z:function a_z(d){this.a=d},
aBw:function aBw(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dfm:function dfm(d){this.a=d},
dfj:function dfj(){},
dfk:function dfk(d){this.a=d},
dfl:function dfl(d){this.a=d},
Vv(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$Vv=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||B.a.i(f).length===0){w=1
break}w=3
return A.b(A.NU(s),$async$Vv)
case 3:t=h
J.c7(t,A.I(["role",e,"text",B.a.i(f),"at",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w=4
return A.b(A.apj(s,t),$async$Vv)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vv,v)},
hS0(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=A.U(d).k("Y<1>")
v=A.C(new A.Y(d,new C.c4k(),w),w.k("M.E"))
w=v.length
if(w===0)return""
u=w<=24?v:B.d.fO(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,A.J)(u),++s){r=u[s]
q=J.a7(r)
p=J.z(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+A.w(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
c4k:function c4k(){},
ikF(d){return B.d.dP(B.Dx,new C.fM0(d),new C.fM1()).r},
fM0:function fM0(d){this.a=d},
fM1:function fM1(){},
apz:function apz(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
blB:function blB(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dMQ:function dMQ(d){this.a=d},
dMP:function dMP(d){this.a=d},
dMH:function dMH(d,e,f){this.a=d
this.b=e
this.c=f},
dMM:function dMM(d){this.a=d},
dMJ:function dMJ(d,e,f){this.a=d
this.b=e
this.c=f},
dMN:function dMN(d){this.a=d},
dMI:function dMI(d){this.a=d},
dMO:function dMO(d){this.a=d},
dMK:function dMK(d){this.a=d},
dML:function dML(d){this.a=d},
hpJ(d){var w=A.cct(new A.V(Date.now(),0,!1)),v=d.bm
if(v===w)return
d.bm=w
d.bH=0
d.c8=A.a([],x.s)},
hpL(d){return A.cg(null,B.w.j(0.82),!0,null,new C.ccy(),d,null,!0,!0,x.H)},
a7Q:function a7Q(d){this.a=d},
ccy:function ccy(){},
ccx:function ccx(d){this.a=d},
hDo(){var w=new A.V(Date.now(),0,!1),v=w.bR(A.dw(4-A.mw(w),0,0,0,0,0).a),u=A.c2(A.bD(v),1,4,0,0,0,0,0)
return""+A.bD(v)+"-W"+B.a.b_(B.o.u(1+B.i.bh(B.o.aq(v.bD(A.c2(A.bD(u),A.bM(u),A.bV(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
fr7(d,e){var w,v,u,t,s,r,q=A.H1(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s=J.t(t,"email")
r=B.a.i(J.k(s==null?"":s).toLowerCase())
if((B.a.c7(r,"+local.ngmy")?B.a.aB(r,0,r.length-11):r)===q)return t}t=A.I(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
i9f(d,e){var w,v,u,t,s,r,q,p=A.H1(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s=J.a7(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c7(q,"+local.ngmy")?B.a.aB(q,0,q.length-11):q)===p){w=A.aJ(s.h(t,"winsLeft"))
w=w==null?null:B.i.M(w)
return w==null?0:w}}return 0},
iuL(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=A.H1(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s=J.a7(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c7(q,"+local.ngmy")?B.a.aB(q,0,q.length-11):q)===n){w=A.aJ(s.h(t,o))
w=w==null?null:B.i.M(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
ifM(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=A.H1(b5),b2=A.cdP(),b3=C.hDo()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
r=J.a7(s)
q=r.h(s,a2)
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.c7(p,a3)?B.a.aB(p,0,p.length-11):p)!==b1)continue
q=A.aJ(r.h(s,a4))
o=q==null?a1:B.i.M(q)
if((o==null?0:o)<=0)continue
if(u!=null){r=r.h(s,a5)
r=J.k(r==null?"":r)
q=J.t(u,a5)
q=J.k(q==null?"":q)
if(r===q)r=0
else r=r<q?-1:1
r=r>=0}else r=!0
if(r)u=s}if(u!=null){w=J.a7(u)
v=A.aJ(w.h(u,a4))
v=v==null?a1:B.i.M(v)
w.n(u,a4,(v==null?1:v)-1)
w=A.aJ(w.h(u,"outcome"))
w=w==null?a1:B.i.M(w)
return w==null?1:w}n=new C.fCJ()
for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
r=J.t(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c7(p,a3)?B.a.aB(p,0,p.length-11):p)!==b1)continue
m=n.$5(s,"perDay",a6,a7,b2)
if(m!=null)return m}for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
r=J.t(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c7(p,a3)?B.a.aB(p,0,p.length-11):p)!==b1)continue
l=n.$5(s,"perWeek",a8,a9,b3)
if(l!=null)return l}k=C.fr7(b4,b5)
w=J.a7(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?A.a2(v.a(w.h(k,b0)),r,q):A.T(r,q)
w.n(k,b0,j)
for(w=b4.y,w=new A.cb(w,A.a4(w).k("cb<1,2>")).gae(0);w.C();){i=w.d
h=i.b
g=J.a7(h)
f=g.h(h,"perDay")
if(f==null)f=0
e=g.h(h,"perWeek")
if(e==null)e=0
if(f<=0&&e<=0)continue
h=i.a
d=v.b(j.h(0,h))?A.a2(v.a(j.h(0,h)),r,q):A.T(r,q)
j.n(0,h,d)
if(f>0){g=d.h(0,a7)
if(J.k(g==null?"":g)!==b2){d.n(0,a7,b2)
d.n(0,a6,0)}g=A.aJ(d.h(0,a6))
a0=g==null?a1:B.i.M(g)
if(a0==null)a0=0
if(a0<f){d.n(0,a6,a0+1)
return A.ca(h,a1)}}if(e>0){g=d.h(0,a9)
if(J.k(g==null?"":g)!==b3){d.n(0,a9,b3)
d.n(0,a8,0)}g=A.aJ(d.h(0,a8))
a0=g==null?a1:B.i.M(g)
if(a0==null)a0=0
if(a0<e){d.n(0,a8,a0+1)
return A.ca(h,a1)}}}return a1},
hzK(d,e){var w,v,u,t,s,r,q,p=A.a([],x.t)
for(w=[1,2,3],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
if(w===0)return 1
s=p[e.az(w)]
if(s===3&&d.f>=d.e)s=e.h2()?1:2
return s},
he9(d,e){var w,v,u,t,s,r,q,p=A.a([],x.t)
for(w=[-1,-2],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
return w===0?-1:p[e.az(w)]},
ifN(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=A.H1(a3),a1=new C.fCK()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
r=J.a7(s)
q=r.h(s,"email")
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.c7(p,"+local.ngmy")?B.a.aB(p,0,p.length-11):p)!==a0)continue
if(a1.$2(s,h)+a1.$2(s,g)+a1.$2(s,f)<=0)continue
if(u!=null){r=r.h(s,e)
r=J.k(r==null?"":r)
q=J.t(u,e)
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
q=new C.fCL(v+r+q>1,l)
k=q.$2(o,"w")
r=k+q.$2(n,"l")
j=a4.az(r+q.$2(m,"p"))
if(j<k){w.n(u,h,o-1)
w.n(u,d,"w")
w=a2.a
v=w.h(0,"1")
if(v==null)v=10
i=Math.max(1,v)
w=w.h(0,"2")
if(w==null)w=10
return a4.az(i+Math.max(1,w))<i?1:2}if(j<r){w.n(u,g,n-1)
w.n(u,d,"l")
return C.he9(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
ifL(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=A.aJ(i.h(0,"wins")),g=h==null?m:B.i.M(h)
if(g==null)g=0
h=A.aJ(i.h(0,"loses"))
w=h==null?m:B.i.M(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.hDo():A.cdP()
t=v+"|"+u
s=C.fr7(d,e)
h=J.a7(s)
r=h.h(s,l)
if(J.k(r==null?"":r)!==t){h.n(s,l,t)
h.n(s,k,0)
h.n(s,j,0)}r=A.aJ(h.h(s,k))
q=r==null?m:B.i.M(r)
if(q==null)q=0
r=A.aJ(h.h(s,j))
p=r==null?m:B.i.M(r)
if(p==null)p=0
o=Math.max(0,g-q)
r=o+Math.max(0,w-p)
if(r<=0)return m
n=f.az(r)<o
if(n)h.n(s,k,q+1)
else h.n(s,j,p+1)
return n},
ioq(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
d.bl5()
w=C.ifN(d,a0,a1)
if(w!=null){if(w===3)++d.f
C.ahh(d,a0,w)
return w}v=C.ifM(d,a0)
if(v!=null){if(v===3)++d.f
C.ahh(d,a0,v)
return v}u=C.ifL(d,a0,a1)
if(u!=null)return new C.fT5(d,a1,a0).$1(u)
t=C.fr7(d,a0)
s=J.a7(t)
r=A.aJ(s.h(t,"winStreak"))
q=r==null?null:B.i.M(r)
if(q==null)q=0
s=A.aJ(s.h(t,"loseStreak"))
p=s==null?null:B.i.M(s)
if(p==null)p=0
o=new C.fT7(d,a1)
if(C.i9f(d,a0)>0){n=o.$0()
C.iuL(d,a0)
C.ahh(d,a0,n)
return n}if(q>=d.c){n=new C.fT6(d,a1).$0()
C.ahh(d,a0,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.ahh(d,a0,n)
return n}s=x.t
m=A.a([],s)
l=A.a([],s)
for(s=[1,2,3],r=s.length,k=d.a,j=0;j<r;++j){n=s[j]
i=k.h(0,""+n)
if(i==null)i=10
for(h=0;h<i;++h)m.push(n)}for(s=[-1,-2],r=s.length,j=0;j<r;++j){n=s[j]
i=k.h(0,""+n)
if(i==null)i=10
for(h=0;h<i;++h)l.push(n)}g=B.o.D(d.b,5,95)
f=a1.az(100)<g
if(f&&m.length!==0){e=m[a1.az(m.length)]
if(e===3&&d.f>=d.e)e=a1.h2()?1:2}else{s=l.length
if(s!==0)e=l[a1.az(s)]
else e=f?1:-1}if(e===3)++d.f
C.ahh(d,a0,e)
return e},
cdH(d){var w=0,v=A.j(x.y),u
var $async$cdH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.cdG(d),$async$cdH)
case 3:if(f){u=!0
w=1
break}u=A.cdG(d)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cdH,v)},
ahh(d,e,f){var w,v="winStreak",u="loseStreak",t=C.fr7(d,e),s=J.a7(t),r=A.aJ(s.h(t,v)),q=r==null?null:B.i.M(r)
if(q==null)q=0
r=A.aJ(s.h(t,u))
w=r==null?null:B.i.M(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
fCJ:function fCJ(){},
fCK:function fCK(){},
fCL:function fCL(d,e){this.a=d
this.b=e},
fT5:function fT5(d,e,f){this.a=d
this.b=e
this.c=f},
fT7:function fT7(d,e){this.a=d
this.b=e},
fT6:function fT6(d,e){this.a=d
this.b=e},
ap2:function ap2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
blr:function blr(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cQ$=d
_.b7$=e
_.c=_.a=null},
dFZ:function dFZ(d){this.a=d},
dFY:function dFY(d){this.a=d},
dG_:function dG_(d){this.a=d},
dFX:function dFX(d,e){this.a=d
this.b=e},
aN2:function aN2(){},
Ol:function Ol(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ceZ:function ceZ(){},
ceY:function ceY(){},
ark:function ark(d,e,f){this.c=d
this.d=e
this.a=f},
h94(d,e,f){return A.cg(null,B.w.j(0.88),!0,null,new C.cfq(f,e),d,null,!0,!0,x.H)},
hVP(d){var w,v,u,t,s=B.a.i(d),r=s.split("-")
if(r.length===3){w=A.ca(r[0],null)
v=r[1]
u=A.ca(v,null)
t=A.ca(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?B.iT[u-1]:v)+" "+A.w(t)+", "+A.w(w)}return s},
Ot:function Ot(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cfq:function cfq(d,e){this.a=d
this.b=e},
bmc:function bmc(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
e5t:function e5t(d,e){this.a=d
this.b=e},
e5p:function e5p(){},
e5q:function e5q(){},
e5r:function e5r(d,e){this.a=d
this.b=e},
e5s:function e5s(d,e){this.a=d
this.b=e},
aNE:function aNE(){},
hDk(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.bkD(new C.fOn(w))
w=w.a
return w==null?null:w.c.a},
hDc(d){$.aW.x1$.push(new C.fOa(d))},
hDw(d){var w=$.tt().gbk(),v=w!=null
if(!v||w.c==null)return
if(C.hDk(w)==="GamePlayScreen")if(v&&w.c!=null&&w.pZ())w.eA()},
hDv(d){C.hzR(d,0)},
hzR(d,e){var w,v
if(e>4)return
w=d==null?$.tt().gbk():d
if(w==null||w.c==null)return
v=C.hDk(w)
if(v==="GameCenterScreen")return
if(D.fbT.q(0,v)&&w.pZ()){w.eA()
$.aW.x1$.push(new C.fyZ(w,e))}},
aRE(d,e,f){return A.e9(A.cq(new C.fPK(e,d,f)),e,!0)},
fOn:function fOn(d){this.a=d},
fOa:function fOa(d){this.a=d},
fO9:function fO9(d){this.a=d},
fyZ:function fyZ(d,e){this.a=d
this.b=e},
fPK:function fPK(d,e,f){this.a=d
this.b=e
this.c=f},
aro(d,e){var w=0,v=A.j(x.H),u
var $async$aro=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=A.WA(e)
w=2
return A.b(A.arn(d,u),$async$aro)
case 2:A.a8s(d,u)
return A.h(null,v)}})
return A.i($async$aro,v)},
ve(d,e,f,g,h,i,j,k){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$ve=A.e(function(l,m){if(l===1)return A.f(m,v)
for(;;)switch(w){case 0:o=A.z0(g)
if(o.length===0){w=1
break}t=e==null?A.M0(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return A.b(A.Ou(o),$async$ve)
case 3:q=m
if(j!=null&&j.length!==0&&J.rl(q,new C.cfE(j))){w=1
break}p=e==null?new A.V(Date.now(),0,!1):e
J.n2(q,0,new A.jq(B.o.u(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return A.b(C.aro(o,q),$async$ve)
case 4:if(i==null||r==null||s)C.a8u(o).bG(new C.cfF(),x.S).eB(new C.cfG())
case 1:return A.h(u,v)}})
return A.i($async$ve,v)},
a8u(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a8u=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=$.hEv
m=A.z0(d)
if(n==null||m.length===0){w=1
break}w=3
return A.b(A.Ou(m),$async$a8u)
case 3:t=f
s=J.cC(t)
if(!s.aV(t,new C.cfD())){w=1
break}w=4
return A.b(n.$2(m,t),$async$a8u)
case 4:r=f
q=J.a7(r)
if(q.gI(r)!==s.gI(t)){w=1
break}for(p=!1,o=0;o<s.gI(t);++o)if(B.X.aw(s.h(t,o).aj(),null)!==B.X.aw(q.h(r,o).aj(),null))p=!0
w=p?5:6
break
case 5:w=7
return A.b(C.aro(m,r),$async$a8u)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$a8u,v)},
b1s(d){var w=0,v=A.j(x.S),u,t
var $async$b1s=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.h97(d,!1),$async$b1s)
case 3:t=J
w=4
return A.b(C.arp(d,!1),$async$b1s)
case 4:u=t.dI(f,new C.cfC(new A.V(Date.now(),0,!1).bR(-864e8))).gI(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1s,v)},
arp(d,e){var w=0,v=A.j(x.ac),u,t,s,r
var $async$arp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=A.z0(d)
if(r.length===0){u=A.a([],x.gi)
w=1
break}w=3
return A.b(A.Ou(r),$async$arp)
case 3:t=g
s=A.WA(t)
if(s.length!==J.ad(t))C.aro(r,s)
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arp,v)},
ime(d){var w,v,u,t=new A.V(Date.now(),0,!1),s=t.bD(d).a,r=B.o.aq(s,6e7)
if(r<1)return"Just now"
w=B.o.aq(s,36e8)
if(w<1)return""+r+"m ago"
if(B.o.aq(s,864e8)<1)return""+w+"h ago"
v=B.o.F(A.dg(d),12)===0?12:B.o.F(A.dg(d),12)
s=B.iT[A.bM(d)-1]
r=A.bD(d)===A.bD(t)?"":", "+A.bD(d)
w=B.a.b_(B.o.u(A.fP(d)),2,"0")
u=A.dg(d)<12?"AM":"PM"
return s+" "+A.bV(d)+r+" \xb7 "+v+":"+w+" "+u},
bCN(d){var w=B.i.ad(Math.abs(d),2).split(".")
return"$"+A.p7(w[0],A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fvI(),null)+"."+w[1]},
bGm(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$bGm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.arp(e,!1),$async$bGm)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
A.h97(e,!0).bG(new C.h0T(e),t).bG(new C.h0U(),t).eB(new C.h0V())
w=4
return A.b(A.bU(B.L,null,new C.h0W(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bGm)
case 4:case 1:return A.h(u,v)}})
return A.i($async$bGm,v)},
hc8(d,e,f){var w=null,v=B.c.j(0.05),u=A.m(14),t=A.L(f.j(0.35),B.r,1)
return A.E(A.q(w,A.x(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),B.bG,A.ev(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.dE)],x.p),B.l,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.hJ,w,w,w),1)},
e5u(d,e,f){var w=null,v=B.w.j(0.22),u=A.m(8),t=A.L(f.j(0.28),B.r,1)
return A.E(A.q(w,A.x(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.ev(B.a7,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.e7)],x.p),B.E,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.Ol,w,w,w),1)},
cfE:function cfE(d){this.a=d},
cfF:function cfF(){},
cfG:function cfG(){},
cfD:function cfD(){},
cfC:function cfC(d){this.a=d},
fvI:function fvI(){},
h0T:function h0T(d){this.a=d},
h0U:function h0U(){},
h0V:function h0V(){},
h0W:function h0W(d,e){this.a=d
this.b=e},
h0S:function h0S(d,e){this.a=d
this.b=e},
h0R:function h0R(d){this.a=d},
aeE:function aeE(d,e){this.c=d
this.a=e},
e5w:function e5w(){},
e5x:function e5x(){},
e5y:function e5y(){},
e5z:function e5z(d){this.a=d},
e5B:function e5B(){},
e5A:function e5A(d){this.a=d},
aeD:function aeD(d,e){this.c=d
this.a=e},
e5v:function e5v(){},
bGn(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return A.hK(B.b6,!1,w,d,new C.h0Z(j,i,h,g,e,f),null,B.eT,!1,x.H)},
h0Z:function h0Z(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h0X:function h0X(d,e){this.a=d
this.b=e},
h0Y:function h0Y(d,e){this.a=d
this.b=e},
aCf:function aCf(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bhI:function bhI(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bw$=e
_.a9$=f
_.c=_.a=null},
dmp:function dmp(d,e){this.a=d
this.b=e},
dmo:function dmo(){},
af1:function af1(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aMy:function aMy(){},
as6(d,e,f){return new C.b2i(f,d,e,null)},
hWu(d){var w=A.a(B.i.ad(d,2).split("."),x.s),v=A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=A.p7(w[0],v,new C.chi(),null)
return B.d.aO(w,".")},
b1v(){var w=$.tW
if((w>0?$.tW=w-1:w)<=0)$.tW=0},
aio(d,e){var w=0,v=A.j(x.H),u
var $async$aio=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=$.hh1
w=u!=null?2:3
break
case 2:w=4
return A.b(u.$2(d,e),$async$aio)
case 4:case 3:return A.h(null,v)}})
return A.i($async$aio,v)},
b2i:function b2i(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
chj:function chj(d){this.a=d},
chi:function chi(){},
NX:function NX(){},
c4R:function c4R(){},
hgq(d){if(d>0)return"+"+d
return""+d},
hfL(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fPL(d,e){var w=J.t(e,d)
if(w==null)w=A.fOx().h(0,d)
return w==null?90:w},
fuF(d,e){var w,v,u=A.aR(x.S)
while(u.a<3){w=e.az(41)-20
if(w===0)continue
u.J(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.J(0,d+v*7+3)
v=A.a([B.o.u(d)],x.s)
B.d.v(v,new A.k9(u,new C.fuG(),u.$ti.k("k9<ch.E,n>")))
B.d.e0(v,e)
return v},
hyQ(d,e,f){var w,v,u,t,s=A.aR(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.J(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.J(0,f[B.o.F(u,5)]+u);++u}t=A.a([d],x.s)
B.d.v(t,A.pJ(s,3,s.$ti.k("ch.E")))
B.d.e0(t,e)
return t},
ihe(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=A.a([],x.dA),b2=new A.e2()
b2.cY(42)
for(w=x.s,v=0;v<200;++v){u=B.o.F(v,5)
if(u===0){t=[4,9,16,25,36,49,64,81,121,144,196,256][b2.az(12)]
s=[2,3,5,6,7,10,11,13][b2.az(8)]
r=B.i.M(Math.sqrt(t))
q=2+b2.az(4)
p=B.o.aq(q,2)
if((q&1)===0){o=""+r
n=""+s
m=p===1?o+"\u221a"+n:o+"x^"+p+"\u221a"+n}else{o=""+r
n=""+s
m=p===0?o+"\u221a"+n+"x":o+"x^"+p+"\u221a"+n+"x"}o=""+p
n=""+s
l=""+r+"x^"
b1.push(new C.JD("Simplify \u221a("+t*s+"x^"+q+")",m,C.hyQ(m,b2,A.a([""+(r+1)+"x^"+o+"\u221a"+n,A.w(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.az(35)
j=b2.az(4)===0?1:2+b2.az(4)
i=b2.az(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.JD("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.fuF(k,b2)))}else if(u===2){k=2+b2.az(18)
j=b2.az(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.az(10)+2
b1.push(new C.JD("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.fuF(g,b2)))}else b1.push(new C.JD("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.fuF(k,b2)))}else if(u===3){e=b2.az(11)-5
o=b2.az(11)
n=b2.az(11)
d=b2.az(11)+2
l=b2.h2()?1:-1
a0=e+l*(b2.az(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===B.i.iH(a4)?""+B.i.M(a4):"\u221a"+a3
b1.push(new C.JD("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.fuF(a0,b2)))}else{a6=2+b2.az(10)
a7=a6+2+b2.az(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.JD("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.hyQ(m,b2,A.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
isQ(d){var w,v,u=x.s,t=A.a(d.split(""),u)
if(t.length<4)return new A.ds(A.a(d.split(""),u),x.bJ).he(0)
for(w=0;w<12;++w){B.d.e0(t,B.cQ)
v=B.d.he(t)
if(v!==d)return v}return new A.ds(t,x.bJ).he(0)},
JD:function JD(d,e,f){this.a=d
this.b=e
this.c=f},
fuG:function fuG(){},
aqI:function aqI(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aF3:function aF3(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
dYZ:function dYZ(d){this.a=d},
dZ_:function dZ_(d){this.a=d},
dZ0:function dZ0(d){this.a=d},
dZ1:function dZ1(d,e){this.a=d
this.b=e},
dZ2:function dZ2(d,e){this.a=d
this.b=e},
dZ3:function dZ3(d){this.a=d},
dYY:function dYY(d){this.a=d},
dZ4:function dZ4(d){this.a=d},
dYX:function dYX(d){this.a=d},
dZ7:function dZ7(d){this.a=d},
dZ8:function dZ8(d){this.a=d},
dZ6:function dZ6(d,e){this.a=d
this.b=e},
dZ5:function dZ5(d,e){this.a=d
this.b=e},
arq:function arq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFj:function aFj(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
e5H:function e5H(d,e,f){this.a=d
this.b=e
this.c=f},
e5I:function e5I(d){this.a=d},
e5D:function e5D(d){this.a=d},
e5F:function e5F(d,e){this.a=d
this.b=e},
e5E:function e5E(d,e){this.a=d
this.b=e},
e5G:function e5G(d,e){this.a=d
this.b=e},
e5C:function e5C(d){this.a=d},
hSF(d){var w,v,u,t,s,r,q,p=new A.V(Date.now(),0,!1),o=p.bR(36e8)
try{w=d.h(0,"start")
p=A.n7(J.k(w==null?"":w)).bT()
w=d.h(0,"end")
o=A.n7(J.k(w==null?"":w)).bT()}catch(v){}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"title")
u=J.k(u==null?"Event":u)
t=p
s=o
r=d.h(0,"notes")
r=r==null?null:J.k(r)
q=d.h(0,"location")
return new C.rR(w,u,t,s,r,q==null?null:J.k(q))},
a8C(d){var w=0,v=A.j(x.ck),u,t,s,r,q,p,o
var $async$a8C=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.b)
w=1
break}w=3
return A.b(A.aA(),$async$a8C)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aV(J.t(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.b)
w=1
break}try{s=B.X.aQ(0,t,null)
if(!x.j.b(s)){p=A.a([],x.b)
u=p
w=1
break}p=J.dd(s,x.f)
p=A.cF(p,new C.cg9(),p.$ti.k("M.E"),x.b1)
p=A.C(p,A.a4(p).k("M.E"))
B.d.aZ(p,new C.cga())
u=p
w=1
break}catch(n){r=A.ac(n)
$.am.$1("[calendar-memory] load: "+A.w(r))
p=A.a([],x.b)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$a8C,v)},
arG(d,e){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$arG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.a8C(d),$async$arG)
case 2:r=g
q=J.cC(r)
q.br(r,new C.cg6(e))
q.J(r,e)
q.aZ(r,new C.cg7())
w=3
return A.b(A.aA(),$async$arG)
case 3:u=g
t=B.a.i(d.toLowerCase())
q=q.ko(r,80)
s=q.$ti.k("N<ak.E,a9<n,@>>")
q=A.C(new A.N(q,new C.cg8(),s),s.k("ak.E"))
w=4
return A.b(u.aC("String","ngmy_helper_calendar_v1_"+t,B.X.aw(q,null)),$async$arG)
case 4:return A.h(null,v)}})
return A.i($async$arG,v)},
hW1(d,e){var w=Date.now(),v=new A.V(w,0,!1).bT()
w=J.dI(d,new C.cgb(v,v.bR(A.dw(14,0,0,0,0,0).a)))
w=A.C(w,w.$ti.k("M.E"))
return w},
hqk(d){var w,v,u,t,s,r,q,p,o,n,m=C.hW1(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=A.cW(m,0,A.dB(20,"count",x.S),A.U(m).c),v=w.$ti,w=new A.bR(w,w.gI(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=B.o.F(A.dg(s),12)===0?12:B.o.F(A.dg(s),12)
q=A.dg(s)>=12?"PM":"AM"
p=B.a.b_(B.o.u(A.fP(s)),2,"0")
o=t.f
if((o==null?null:B.a.i(o).length!==0)===!0){o.toString
n=" @ "+B.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+A.bM(s)+"/"+A.bV(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&B.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return B.a.i(u.charCodeAt(0)==0?u:u)},
rR:function rR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cg9:function cg9(){},
cga:function cga(){},
cg6:function cg6(d){this.a=d},
cg7:function cg7(){},
cg8:function cg8(){},
cgb:function cgb(d,e){this.a=d
this.b=e},
hSG(d){var w,v,u,t,s,r,q,p,o=null,n=new A.V(Date.now(),0,!1)
try{w=d.h(0,"when")
n=A.n7(J.k(w==null?"":w)).bT()}catch(v){}w=d.h(0,"id")
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
return new C.rS(w,u,t,s,r,q,J.k(p==null?"user":p))},
hoC(d){var w=B.o.F(A.dg(d),12)===0?12:B.o.F(A.dg(d),12),v=A.dg(d)>=12?"PM":"AM"
return""+A.bM(d)+"/"+A.bV(d)+" "+w+":"+B.a.b_(B.o.u(A.fP(d)),2,"0")+" "+v},
VJ(d){var w=0,v=A.j(x.e),u,t,s,r,q,p,o
var $async$VJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.x)
w=1
break}w=3
return A.b(A.aA(),$async$VJ)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aV(J.t(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.x)
w=1
break}try{s=B.X.aQ(0,t,null)
if(!x.j.b(s)){p=A.a([],x.x)
u=p
w=1
break}p=J.dd(s,x.f)
p=A.cF(p,new C.c7Z(),p.$ti.k("M.E"),x.Q)
p=A.C(p,A.a4(p).k("M.E"))
B.d.aZ(p,new C.c8_())
u=p
w=1
break}catch(n){r=A.ac(n)
$.am.$1("[call-memory] load: "+A.w(r))
p=A.a([],x.x)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$VJ,v)},
b_O(d,e){var w=0,v=A.j(x.H),u,t,s,r
var $async$b_O=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$b_O)
case 2:u=g
t=A.cW(e,0,A.dB(120,"count",x.S),A.U(e).c).dn(0)
s=B.a.i(d.toLowerCase())
r=A.U(t).k("N<1,a9<n,@>>")
r=A.C(new A.N(t,new C.c7X(),r),r.k("ak.E"))
w=3
return A.b(u.aC("String","ngmy_call_memory_v1_"+s,B.X.aw(r,null)),$async$b_O)
case 3:return A.h(null,v)}})
return A.i($async$b_O,v)},
b_P(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$b_P=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:p=A.T(x.N,x.Q)
o=J
w=2
return A.b(C.VJ(d),$async$b_P)
case 2:u=o.aT(g)
case 3:if(!u.C()){w=4
break}t=u.gR(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("b7<2>")
q=A.C(new A.b7(p,u),u.k("M.E"))
B.d.aZ(q,new C.c7Y())
w=5
return A.b(C.b_O(d,q),$async$b_P)
case 5:return A.h(null,v)}})
return A.i($async$b_P,v)},
c80(d,e){var w=0,v=A.j(x.e),u,t,s
var $async$c80=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.VJ(d),$async$c80)
case 3:t=s.dI(g,new C.c81(e.bR(-72e8),e.bR(72e8)))
t=A.C(t,t.$ti.k("M.E"))
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c80,v)},
hoD(d,e){var w,v,u,t,s,r=J.a7(d)
if(r.gau(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.ko(d,e),v=w.$ti,w=new A.bR(w,w.gI(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gWl()+"\n"
t=t.f
if(t!=null&&B.a.i(t).length!==0){s=B.a.i(t)
u+="  Voicemail/text: "+(s.length>180?B.a.aB(s,0,177)+"\u2026":s)+"\n"}}r=r.gI(d)>e?u+("\u2026 and "+(r.gI(d)-e)+" more\n"):u
return B.a.i(r.charCodeAt(0)==0?r:r)},
ioa(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new A.V(q,0,!1).bT(),o=d.toLowerCase(),n=A.c2(A.bD(p),A.bM(p),A.bV(p),0,0,0,0,0)
if(B.a.q(o,"yesterday"))n=n.bR(r)
else if(!B.a.q(o,"today")&&B.a.q(o,"last night"))n=n.bR(r)
w=A.ag("\\b(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!0,!1,!1,!1).cF(o)
if(w==null)return null
q=w.b
v=q[1]
u=A.ca(v==null?"":v,null)
if(u==null)u=0
v=q[2]
t=A.ca(v==null?"":v,null)
if(t==null)t=0
s=q[3]
if(s==="pm"&&u<12)u+=12
if(s==="am"&&u===12)u=0
q=s==null
v=!1
if(q)if(u<=7)v=B.a.q(o,"am")||B.a.q(o,"morning")||B.a.q(o,"night")
if(v)if(B.a.q(o,"pm")||B.a.q(o,"afternoon")||B.a.q(o,"evening"))u=u<12?u+12:u
if(q&&B.a.q(o,"pm"))u=u<12?u+12:u
return A.c2(A.bD(n),A.bM(n),A.bV(n),u,t,0,0,0)},
hEV(d){var w=A.ag("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
rS:function rS(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c7Z:function c7Z(){},
c8_:function c8_(){},
c7X:function c7X(){},
c7Y:function c7Y(){},
c81:function c81(d,e){this.a=d
this.b=e},
hqn(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lY(t,w,v,u==null?null:J.k(u))},
hW7(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b8(v,new C.cgh(),x.bP)
v=A.C(v,v.$ti.k("ak.E"))}if(v==null)v=D.dmF
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.z(d.h(0,"printable"),!0)
return new C.is(r,w,v,u,t,typeof d.h(0,s)=="number"?B.i.M(A.dD(d.h(0,s))):0)},
hW6(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.i9t(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?B.i.M(A.dD(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?B.i.M(A.dD(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b8(s,new C.cgf(),x.u)
s=A.C(s,s.$ti.k("ak.E"))}return new C.id(p,w,v,u,s==null?D.aBY:s,t)},
i9u(d){var w,v,u,t=A.I([G.D3,"investments",B.oC,"games",B.jG,"loans",B.i3,"withdrawals",B.jL,"deposits",B.ln,"civic",B.kX,"store",B.tb,"jobs",B.oB,"refunds",B.f0,"account",B.ll,"music",B.zh,"help"],x.dk,x.N)
for(w=new A.cb(t,A.a4(t).k("cb<1,2>")).gae(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
i9t(d){switch(d){case"investments":return G.D3
case"games":return B.oC
case"loans":return B.jG
case"withdrawals":return B.i3
case"deposits":return B.jL
case"civic":return B.ln
case"store":return B.kX
case"jobs":return B.tb
case"refunds":return B.oB
case"account":return B.f0
case"music":return B.ll
default:return B.zh}},
nj(d){var w=A.a([new C.lY("text",d,null,null)],x.a)
return w},
ail(){var w=null,v=x.v
return A.a([new C.id("investments","Investments",G.D3,4280468830,A.a([new C.is("inv1","How do I buy an investment plan?",C.nj("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.is("inv2","When do I get paid from my plan?",C.nj("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.is("inv3","Can I have more than one plan?",C.nj("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.id("games","Games",B.oC,4287323382,A.a([new C.is("gam1","How do NGMY games work?",C.nj("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.is("gam2","Why did my game payout change?",C.nj("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.id("loans","Loans",B.jG,4294538006,A.a([new C.is("loan1","How do I apply for a loan?",C.nj("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.is("loan2","What is the repayment period?",C.nj("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.id("withdrawals","Withdrawals",B.i3,4282090230,A.a([new C.is("wd1","How do I withdraw money?",C.nj("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.is("wd2","Why is my withdrawal pending?",C.nj("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.id("deposits","Deposits",B.jL,4279548070,A.a([new C.is("dep1","How do I deposit funds?",C.nj("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.is("dep2","How long until my deposit posts?",C.nj("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.id("civic","Civic Registry",B.ln,4289170426,A.a([new C.is("civ1","What is Civic Registry?",C.nj("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.is("civ2","What does \u201cmissed\u201d mean on my profile?",C.nj("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.id("store","NGMY Store",B.kX,4293675161,A.a([new C.is("sto1","How do I buy from NGMY Store?",C.nj("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.is("sto2","How do I sell in the store?",C.nj("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.id("jobs","Jobs & Creator",B.tb,4293548044,A.a([new C.is("job1","How do I find jobs?",C.nj("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.is("job2","How do I post a job?",C.nj("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.id("refunds","Refunds",B.oB,4293870660,A.a([new C.is("ref1","Can I get a refund?",C.nj("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.is("ref2","How long do refunds take?",C.nj("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.id("account","Account",B.f0,4281908728,A.a([new C.is("acc1","How do I update my profile?",C.nj("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.is("acc2","I forgot my password \u2014 what now?",C.nj("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.id("music","Music Charts",B.ll,4290807036,A.a([new C.is("mus1","What are Music Charts?",C.nj("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.is("mus2","How do I upload music?",C.nj("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.id("help","Help Center",B.zh,4279080072,A.a([new C.is("hlp1","Where can I get live help?",C.nj("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.is("hlp2","How do daily Helper limits work?",C.nj("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
hqo(d){var w,v=J.a7(d),u=v.gau(d)
if(u)return C.ail()
v=v.dM(d,new C.cgk(),x.i)
w=A.C(v,v.$ti.k("ak.E"))
B.d.aZ(w,new C.cgl())
return w.length===0?C.ail():w},
hqp(d){var w=J.b8(d,new C.cgm(),x.P)
w=A.C(w,w.$ti.k("ak.E"))
return A.I(["categories",w,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z)},
arI(d){return C.hW8(d)},
hW8(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q,p
var $async$arI=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.aA(),$async$arI)
case 6:s=f
w=7
return A.b(s.aC("String","ngmy_helper_kb_v1",B.X.aw(C.hqp(d),null)),$async$arI)
case 7:u=1
w=5
break
case 3:u=2
p=t.pop()
r=A.ac(p)
$.am.$1("[helper kb] local save: "+A.w(r))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$arI,v)},
cgj(){var w=0,v=A.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$cgj=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$cgj)
case 7:r=e
q=A.aV(J.t(r.a,"ngmy_helper_kb_v1"))
if(q==null||B.a.i(q).length===0){l=C.ail()
u=l
w=1
break}p=B.X.aQ(0,q,null)
if(!x.f.b(p)){l=C.ail()
u=l
w=1
break}o=J.t(p,"categories")
if(!x.j.b(o)){l=C.ail()
u=l
w=1
break}n=C.hqo(o)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
m=A.ac(j)
$.am.$1("[helper kb] local load: "+A.w(m))
l=C.ail()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$cgj,v)},
b1Q(){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$b1Q=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c9(),$async$b1Q)
case 7:if(!e){u=null
w=1
break}w=8
return A.b(A.f4("ngmy_helper_kb",null,!1,B.bO),$async$b1Q)
case 8:q=e
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.ac(o)
$.am.$1("[helper kb] cloud fetch: "+A.w(r))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b1Q,v)},
b1R(d){return C.hW9(d)},
hW9(d){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$b1R=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c9(),$async$b1R)
case 7:if(!f){u=!1
w=1
break}w=8
return A.b(A.hJ("ngmy_helper_kb",d,!1,!1,B.cP,null),$async$b1R)
case 8:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.ac(o)
$.am.$1("[helper kb] cloud upsert: "+A.w(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b1R,v)},
arJ(){var w=0,v=A.j(x.I),u,t,s,r
var $async$arJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cgj(),$async$arJ)
case 3:s=e
w=4
return A.b(C.b1Q(),$async$arJ)
case 4:r=e
w=r!=null&&x.j.b(J.t(r,"categories"))?5:6
break
case 5:t=C.hqo(x.j.a(J.t(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return A.b(C.arI(t),$async$arJ)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arJ,v)},
cgn(d){var w=0,v=A.j(x.y),u
var $async$cgn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.arI(d),$async$cgn)
case 3:u=C.b1R(C.hqp(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cgn,v)},
lY:function lY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
is:function is(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cgi:function cgi(){},
cgh:function cgh(){},
id:function id(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cgg:function cgg(){},
cgf:function cgf(){},
cgk:function cgk(){},
cgl:function cgl(){},
cgm:function cgm(){},
bbb:function bbb(d){this.a=d},
WH:function WH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFv:function aFv(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
e9M:function e9M(){},
e9N:function e9N(){},
e9G:function e9G(d){this.a=d},
e9H:function e9H(d){this.a=d},
e9p:function e9p(d,e){this.a=d
this.b=e},
e9q:function e9q(d){this.a=d},
e9r:function e9r(d,e,f){this.a=d
this.b=e
this.c=f},
e9o:function e9o(d){this.a=d},
e9D:function e9D(d,e){this.a=d
this.b=e},
e9E:function e9E(d,e){this.a=d
this.b=e},
e9F:function e9F(d){this.a=d},
e9x:function e9x(d){this.a=d},
e9y:function e9y(d,e,f){this.a=d
this.b=e
this.c=f},
e9w:function e9w(d,e){this.a=d
this.b=e},
e9C:function e9C(d,e,f){this.a=d
this.b=e
this.c=f},
e9B:function e9B(d,e){this.a=d
this.b=e},
e9A:function e9A(d,e){this.a=d
this.b=e},
e9z:function e9z(d,e,f){this.a=d
this.b=e
this.c=f},
e9t:function e9t(d){this.a=d},
e9s:function e9s(d){this.a=d},
e9u:function e9u(d,e){this.a=d
this.b=e},
e9v:function e9v(d){this.a=d},
e9L:function e9L(d,e){this.a=d
this.b=e},
e9K:function e9K(d,e){this.a=d
this.b=e},
e9J:function e9J(){},
e9I:function e9I(d,e){this.a=d
this.b=e},
Qw:function Qw(d,e){this.c=d
this.a=e},
bd6:function bd6(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cVv:function cVv(d){this.a=d},
cVu:function cVu(d,e){this.a=d
this.b=e},
cVs:function cVs(d,e){this.a=d
this.b=e},
cVw:function cVw(d){this.a=d},
cVt:function cVt(d,e){this.a=d
this.b=e},
cVr:function cVr(d,e){this.a=d
this.b=e},
cVx:function cVx(d){this.a=d},
cVy:function cVy(d,e){this.a=d
this.b=e},
a1d:function a1d(d,e,f){this.c=d
this.d=e
this.a=f},
aHs:function aHs(){this.d=$
this.c=this.a=null},
f10:function f10(d,e){this.a=d
this.b=e},
f11:function f11(d){this.a=d},
f17:function f17(){},
f16:function f16(d,e){this.a=d
this.b=e},
f15:function f15(d,e){this.a=d
this.b=e},
f12:function f12(d,e){this.a=d
this.b=e},
f14:function f14(d,e,f){this.a=d
this.b=e
this.c=f},
f13:function f13(d,e,f){this.a=d
this.b=e
this.c=f},
a1c:function a1c(d,e){this.c=d
this.a=e},
aHr:function aHr(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
f0X:function f0X(d,e){this.a=d
this.b=e},
f0V:function f0V(d){this.a=d},
f0W:function f0W(d,e){this.a=d
this.b=e},
f0Z:function f0Z(d,e){this.a=d
this.b=e},
f1_:function f1_(d){this.a=d},
f0Y:function f0Y(d,e){this.a=d
this.b=e},
hW4(d){var w=new A.N(d,new C.cgc(),A.U(d).k("N<1,n>")).aO(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
cgd(d,e,f){return C.hW5(d,e,f)},
hW5(b4,b5,b6){var w=0,v=A.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$cgd=A.e(function(b8,b9){if(b8===1)return A.f(b9,v)
for(;;)switch(w){case 0:b3=B.a.i(b5)
if(b3.length===0){u=new A.La([A.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return A.b(A.rh(A.nm(b3),C.hW4(b6)+"\n\nAdmin instruction:\n"+b4,B.i4,null,null),$async$cgd)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=B.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new A.La([A.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=B.a.i(a3)
if(J.d5(s,"```"))s=B.a.en(J.hjZ(s,A.ag("^```(?:json)?\\s*",!0,!1,!1,!1),""),A.ag("\\s*```$",!0,!1,!1,!1),"")
r=B.X.aQ(0,s,null)
a3=x.f
if(!a3.b(r)){a3=A.a([],x.Y)
u=new A.La([a3,"AI response was not valid JSON.",null,null])
w=1
break}a4=x.N
a5=x.z
q=A.a2(r,a4,a5)
a6=J.t(q,"message")
p=a6==null?null:J.k(a6)
a6=J.t(q,"replaceCategoryId")
o=a6==null?null:J.k(a6)
n=J.t(q,"categories")
a6=x.j
if(!a6.b(n)||J.cs(n)){a3=A.a([],x.Y)
u=new A.La([a3,"AI did not return any categories.",p,o])
w=1
break}m=A.a([],x.Y)
l=b6.length
for(k=0,a7=x.v,a8=x.a;k<J.ad(n);++k){j=A.a2(a3.a(J.t(n,k)),a4,a5)
i="cat_ai_"+1000*Date.now()+"_"+A.w(k)
h=J.t(j,"questions")
g=A.a([],a7)
if(a6.b(h))for(f=0;f<J.ad(h);++f){e=A.a2(a3.a(J.t(h,f)),a4,a5)
d=J.t(e,"answerBlocks")
a0=A.a([],a8)
if(a6.b(d))for(a9=J.aT(d);a9.C();){a1=a9.gR(a9)
J.c7(a0,C.hqn(A.a2(a3.a(a1),a4,a5)))}if(J.ad(a0)===0){a9=J.t(e,"answer")
J.c7(a0,new C.lY("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=A.w(f)
b1=J.t(e,"question")
J.c7(g,new C.is("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.z(J.t(e,"printable"),!0),f))}a9=J.t(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.t(j,"iconKey")
b0=C.hW3(J.k(b0==null?"help":b0))
b1=typeof J.t(j,"colorValue")=="number"?B.i.M(A.dD(J.t(j,"colorValue"))):4284773515
J.c7(m,new C.id(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ad(a3)!==0)===!0?o:null
u=new A.La([m,null,p,a3])
w=1
break}catch(b7){a2=A.ac(b7)
a3=A.w(a2)
a4=A.a([],x.Y)
u=new A.La([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$cgd,v)},
hW3(d){switch(d){case"investments":return G.D3
case"games":return B.oC
case"loans":return B.jG
case"withdrawals":return B.i3
case"deposits":return B.jL
case"civic":return B.ln
case"store":return B.kX
case"jobs":return B.tb
case"refunds":return B.oB
case"account":return B.f0
case"music":return B.ll
default:return B.zh}},
imA(d,e,f){var w,v,u,t=A.bq(d,!0,x.i)
if(f!=null&&J.ad(e)===1){w=B.d.bj(t,new C.fQ7(f))
if(w>=0){t[w]=J.fs(e).cP_(f,t[w].f)
return t}}B.d.v(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].bf9(u)
return t},
cgc:function cgc(){},
fQ7:function fQ7(d){this.a=d},
dch:function dch(d){this.a=d},
WI:function WI(d,e,f){this.c=d
this.d=e
this.a=f},
aFx:function aFx(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
eam:function eam(){},
ea2:function ea2(d,e){this.a=d
this.b=e},
ea7:function ea7(d,e){this.a=d
this.b=e},
ea5:function ea5(d,e){this.a=d
this.b=e},
ea3:function ea3(d){this.a=d},
ea4:function ea4(d){this.a=d},
ea6:function ea6(d,e,f){this.a=d
this.b=e
this.c=f},
e9Z:function e9Z(){},
ea_:function ea_(){},
ea0:function ea0(){},
ea1:function ea1(){},
eac:function eac(d,e){this.a=d
this.b=e},
ead:function ead(d){this.a=d},
eae:function eae(d){this.a=d},
eaf:function eaf(d){this.a=d},
eag:function eag(d){this.a=d},
eah:function eah(d){this.a=d},
eai:function eai(){},
eaj:function eaj(d){this.a=d},
eab:function eab(d){this.a=d},
eak:function eak(d){this.a=d},
eaa:function eaa(d){this.a=d},
eal:function eal(d,e){this.a=d
this.b=e},
ea9:function ea9(d,e){this.a=d
this.b=e},
ea8:function ea8(d,e){this.a=d
this.b=e},
i33(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.a([],x.eO)
for(w=A.ag("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kZ(0,d),w=new A.Gs(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=B.a.aB(d,t,q)
o=u?B.cx:B.aM
m.push(new A.eo(p,n,n,B.cN,n,n,n,n,n,n,new A.G(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?B.cx:B.aM
m.push(new A.eo(p,n,n,B.cN,n,n,n,n,n,n,new A.G(!0,o,n,n,n,n,13,B.I,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?B.cx:B.aM
m.push(new A.eo(p,n,n,B.cN,n,n,n,n,n,n,new A.G(!0,o,n,n,n,n,13,n,B.cK,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?B.cx:B.aM
m.push(new A.eo(p,n,n,B.cN,n,n,n,n,n,n,new A.G(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,B.nd,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=B.a.b2(d,t)
m.push(A.cQ(n,n,n,n,n,n,n,n,n,A.l(n,n,u?B.cx:B.aM,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return A.u6(B.cs,n,n,n,B.eR,n,n,!0,n,A.cQ(m,n,n,n,n,n,n,n,n,n,n),B.a5,n,n,B.du,B.bY)},
dqJ:function dqJ(d){this.a=d},
aD8:function aD8(d,e){this.a=d
this.b=e},
arH:function arH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFw:function aFw(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
e9W:function e9W(d,e){this.a=d
this.b=e},
e9X:function e9X(d,e){this.a=d
this.b=e},
e9O:function e9O(d){this.a=d},
e9P:function e9P(d){this.a=d},
e9Y:function e9Y(){},
e9R:function e9R(d,e){this.a=d
this.b=e},
e9Q:function e9Q(d,e){this.a=d
this.b=e},
e9T:function e9T(){},
e9V:function e9V(){},
e9U:function e9U(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9S:function e9S(d,e){this.a=d
this.b=e},
aD6:function aD6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ad8:function ad8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b1P:function b1P(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cge:function cge(d){this.a=d},
ad0:function ad0(d,e,f){this.c=d
this.d=e
this.a=f},
cP0:function cP0(d){this.a=d},
cP1:function cP1(){},
cP2:function cP2(d){this.a=d},
aD7:function aD7(d,e,f){this.c=d
this.d=e
this.a=f},
bjf:function bjf(){this.c=this.a=this.d=null},
dqK:function dqK(d,e){this.a=d
this.b=e},
dqM:function dqM(d,e){this.a=d
this.b=e},
dqL:function dqL(d){this.a=d},
hXD(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
hXE(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
hXC(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
hyL(d){var w
if(new A.Y(A.a(d.split("\n"),x.s),new C.fuo(),x.cc).gI(0)<3)w=d.length>100&&B.a.q(d,"\n")
else w=!0
return w},
inO(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.hXC(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
asu:function asu(d,e){this.a=d
this.b=e},
JI:function JI(d,e){this.a=d
this.b=e},
rY:function rY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fuo:function fuo(){},
arK:function arK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFy:function aFy(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=!1
_.x=g
_.y=h
_.Q=_.z=null
_.as=$
_.bw$=i
_.a9$=j
_.c=_.a=null},
eaA:function eaA(d,e){this.a=d
this.b=e},
ear:function ear(d){this.a=d},
eat:function eat(){},
eau:function eau(d,e){this.a=d
this.b=e},
eav:function eav(d){this.a=d},
eaw:function eaw(){},
eax:function eax(d,e){this.a=d
this.b=e},
eay:function eay(d){this.a=d},
eaz:function eaz(d){this.a=d},
eas:function eas(d,e){this.a=d
this.b=e},
eaH:function eaH(d,e){this.a=d
this.b=e},
eaE:function eaE(){},
eaF:function eaF(d,e){this.a=d
this.b=e},
eaG:function eaG(d,e){this.a=d
this.b=e},
eaD:function eaD(d,e){this.a=d
this.b=e},
eaC:function eaC(d,e){this.a=d
this.b=e},
eaJ:function eaJ(d){this.a=d},
eaI:function eaI(d){this.a=d},
eaq:function eaq(d,e){this.a=d
this.b=e},
eap:function eap(d,e){this.a=d
this.b=e},
eaK:function eaK(d,e){this.a=d
this.b=e},
eaB:function eaB(d,e){this.a=d
this.b=e},
ean:function ean(d){this.a=d},
eao:function eao(d){this.a=d},
aNM:function aNM(){},
cgp(d){var w=0,v=A.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$cgp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=D.Tv
w=1
break}w=3
return A.b(A.aA(),$async$cgp)
case 3:r=f
q=B.a.i(d.toLowerCase())
t=A.aV(J.t(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.Tv
w=1
break}try{q=A.a2(x.f.a(B.X.aQ(0,t,null)),x.N,x.z)
p=J.z(q.h(0,"contacts"),!0)
o=J.z(q.h(0,"calendar"),!0)
n=J.z(q.h(0,"calls"),!0)
q=J.z(q.h(0,"allGrantedOnce"),!0)
u=new C.WJ(p,o,n,q)
w=1
break}catch(l){s=A.ac(l)
$.am.$1("[helper-perms] load: "+A.w(s))
u=D.Tv
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$cgp,v)},
arL(d,e){var w=0,v=A.j(x.H),u
var $async$arL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){w=1
break}w=4
return A.b(A.aA(),$async$arL)
case 4:w=3
return A.b(g.aC("String","ngmy_helper_permissions_v1_"+B.a.i(d.toLowerCase()),B.X.aw(e.aj(),null)),$async$arL)
case 3:case 1:return A.h(u,v)}})
return A.i($async$arL,v)},
cgo(d){var w=0,v=A.j(x.gp),u,t
var $async$cgo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=new C.WJ(!0,!0,!0,!0)
w=3
return A.b(C.arL(d,t),$async$cgo)
case 3:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cgo,v)},
hEW(d){var w=B.a.i(d.toLowerCase()),v=A.ag("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=A.ag("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=A.ag("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=A.ag("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
hEU(d){var w=A.ag("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
WJ:function WJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bGt(d,e,f,g,h){var w=0,v=A.j(x.H),u,t,s
var $async$bGt=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return A.b(C.b1L(h),$async$bGt)
case 3:if(j){w=1
break}w=4
return A.b(C.arD(h),$async$bGt)
case 4:if(d.e==null){w=1
break}t=A.qU(d,!0)
t.toString
s=A.dk()
s.b=A.pz(new C.h1J(g,e,f,s),!1,!1)
t.m9(0,s.bl())
case 1:return A.h(u,v)}})
return A.i($async$bGt,v)},
h1J:function h1J(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h1I:function h1I(d){this.a=d},
a_Y:function a_Y(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCy:function aCy(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cQ$=d
_.b7$=e
_.c=_.a=null},
do3:function do3(d){this.a=d},
do4:function do4(d,e,f){this.a=d
this.b=e
this.c=f},
do9:function do9(){},
do8:function do8(d){this.a=d},
do5:function do5(d){this.a=d},
do6:function do6(){},
do7:function do7(d){this.a=d},
aMD:function aMD(){},
hX5(d){var w=B.a.i(d),v=A.ag("[^A-Z0-9]",!0,!1,!1,!1),u=A.aL(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
hX4(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.q(w,"|")||B.a.q(w,":")||B.a.q(w,"/")||B.a.q(w,".")||B.a.q(w," "))return!1
v=A.ag("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
asf(d){return C.hX2(d)},
hX2(d){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$asf=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.f4("ngmy_local_deposit_qr_v1_"+B.a.i(d),null,!1,B.bO),$async$asf)
case 7:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.ac(o)
$.am.$1("[local deposit qr] load: "+A.w(r))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$asf,v)},
b2G(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$b2G=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.hX5(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.f4("ngmy_local_deposit_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bO),$async$b2G)
case 7:r=f
if(r==null){u=null
w=1
break}if(J.z(J.t(r,"redeemed"),!0)){u=null
w=1
break}p=J.t(r,"token")
p=B.a.i(J.k(p==null?"":p))
u=p
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
q=A.ac(m)
$.am.$1("[local deposit qr] code lookup: "+A.w(q))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b2G,v)},
hqQ(d){var w,v=B.a.i(d)
if(B.a.a_(v,"NGMYLOCALDEP1|")){w=B.a.i(B.a.b2(v,14))
return w.length===0?null:w}return null},
hX3(d,e,f){var w=B.a.i(f)
if(w.length===0)return!1
return B.d.aV(e,new C.cic(B.a.i(d.toLowerCase()),w))},
hqR(d,e,f,g,h){var w,v,u=J.a7(g),t=u.h(g,"lockedToEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=B.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.qe(!1,0,y.u)
if(s!==B.a.i(f.toLowerCase()))return new C.qe(!1,0,y.j)
v=B.a.i(h)
if(v.length===0)return new C.qe(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.qe(!1,0,"Verification code does not match this deposit.")
if(!C.hX3(e,d,w))return new C.qe(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
h9n(d,e){var w,v,u="amount",t=J.a7(d),s=t.h(d,"redeemedBy")
if(B.a.i(J.k(s==null?"":s)).length!==0)return D.dUw
s=t.h(d,"lockedToEmail")
w=B.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=B.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){A.aJ(t.h(d,u))
return new C.OK(!0,!1,!1,!0)}if(w!==B.a.i(e.toLowerCase())){A.aJ(t.h(d,u))
return new C.OK(!0,!1,!0,!1)}A.aJ(t.h(d,u))
return new C.OK(!0,!1,!1,!1)},
cii(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$cii=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=C.hqQ(d)
if(s==null){u=D.Tx
w=1
break}w=3
return A.b(C.asf(s),$async$cii)
case 3:t=g
if(t==null){u=D.Tx
w=1
break}u=C.h9n(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cii,v)},
b2I(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$b2I=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.b2G(d),$async$b2I)
case 3:s=g
if(s==null||s.length===0){u=D.Tx
w=1
break}w=4
return A.b(C.asf(s),$async$b2I)
case 4:t=g
if(t==null){u=D.Tx
w=1
break}u=C.h9n(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2I,v)},
cij(d,e,f,g,h){var w=0,v=A.j(x.D),u,t
var $async$cij=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.b2G(d),$async$cij)
case 3:t=j
if(t==null||t.length===0){u=new C.qe(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.X1(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cij,v)},
X1(d,e,f,g,h){return C.hX6(d,e,f,g,h)},
hX6(a2,a3,a4,a5,a6){var w=0,v=A.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$X1=A.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.hqQ(a4)
if(a0==null){u=new C.qe(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return A.b(C.asf(a0),$async$X1)
case 3:k=a8
if(k==null){u=new C.qe(!1,0,y.m)
w=1
break}j=C.h9n(k,a5)
if(j.b){u=new C.qe(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.qe(!1,0,y.u)
w=1
break}if(j.c){u=new C.qe(!1,0,y.j)
w=1
break}i=C.hqR(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=A.aJ(J.t(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.qe(!1,0,"Invalid deposit amount.")
w=1
break}r=new A.V(Date.now(),0,!1).aa().ag()
q=B.a.i(a5.toLowerCase())
t=5
w=8
return A.b(A.f4("ngmy_local_deposit_qr_v1_"+B.a.i(a0),null,!1,B.bO),$async$X1)
case 8:p=a8
if(p==null){u=new C.qe(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.t(p,"redeemedBy")
if(B.a.i(J.k(g==null?"":g)).length!==0){u=new C.qe(!1,0,"This deposit code was already used.")
w=1
break}o=C.hqR(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=B.a.i(a0)
f=x.N
e=x.z
n=A.dO(p,f,e)
J.aK(n,"redeemedBy",q)
J.aK(n,"redeemedAt",r)
w=9
return A.b(A.hJ("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,B.cP,null),$async$X1)
case 9:n=J.t(p,"shortCode")
m=B.a.i(J.k(n==null?"":n))
w=J.ad(m)!==0?10:11
break
case 10:w=12
return A.b(A.hJ("ngmy_local_deposit_code_v1_"+B.a.i(m).toUpperCase(),A.I(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,B.cP,null),$async$X1)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=A.ac(a1)
$.am.$1("[local deposit qr] redeem: "+A.w(l))
u=new C.qe(!1,0,"Could not apply deposit. Check connection and try again.")
w=1
break
w=7
break
case 4:w=2
break
case 7:u=new C.qe(!0,h,null)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$X1,v)},
OK:function OK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
qe:function qe(d,e,f){this.a=d
this.b=e
this.c=f},
cic:function cic(d,e){this.a=d
this.b=e},
ciq(d,e){var w
A.hg1(d,e,!1)
A.rf(d.a,d.d,!0,!1)
w=B.a.i("")
if(w.length!==0)A.Bw(!0,!1,d.d,w)},
a9_(d,e){if(d==null)return!1
return A.bD(d)===e.gcl()&&A.bM(d)===e.gcg()&&A.bV(d)===e.gcz()},
hXe(d){var w=A.dg(d)*60+A.fP(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
hqY(d){if(A.dg(d)>=12)return!1
if(A.mw(d)===6||A.mw(d)===7)return!1
return!0},
ciu(d){var w=d.c?d.bT():d
return w.d3(A.c2(A.bD(w),A.bM(w),A.bV(w),12,0,0,0,0))},
h9r(d,e){var w,v,u,t=d.gCX()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a9_(d.fx,e)&&d.fy>0.0001)return B.i.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bT()
if(!C.ciu(w))return 0
v=A.c2(e.gcl(),e.gcg(),e.gcz(),12,0,0,0,0)
if(!e.d3(v))return t
if(!e.ca(w))return 0
u=B.o.aq(v.bD(w).a,1000)
if(u<=0)return t
return B.i.D(t*(B.o.D(B.o.aq(e.bD(w).a,1000),0,u)/u),0,t)},
h9q(d,e){var w,v,u,t,s,r,q,p=new A.V(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a9_(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bT():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!B.d.aV(e,new C.cip(s))&&C.ciu(t)){r=d.gCX()
v=r>0
if(v){q=new A.d7(s,d.a,r,B.h2,B.fv,"Clock-in daily earnings (local)",null,null,B.cu,p)
C.ciq(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a9_(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a9_(o,p)&&!C.ciu(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
cip:function cip(d){this.a=d},
ibG(d){var w,v,u=d.k4,t=u==null?null:B.a.i(u)
if(t!=null&&t.length!==0)return t
w=B.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=B.a.i(d.a)
if(B.a.q(v,"@"))return B.d.gH(v.split("@"))
return"Member"},
itI(d,e,f,g,h,i){return A.hy(d,new C.asg(f,e,i,g,h,null),!0,null,x.H)},
hvb(d){var w,v,u=d.c?d.bT():d,t=A.dg(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+A.bM(u)+"/"+A.bV(u)+"/"+A.bD(u)+" \xb7 "+w+":"+B.a.b_(B.o.u(A.fP(u)),2,"0")+" "+v},
hCO(d){var w=d.x
if(w===B.dI)return"Processing"
if(w===B.kH)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
ika(d){var w=d.f,v=B.a.i(w==null?"":w),u=v.toLowerCase()
if(B.a.q(u,"clock-in daily earnings")||B.a.q(u,"clock-in earnings"))return"Clock-in completed"
if(B.a.q(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===B.fS)return"Deposit"
if(w===B.f2)return"Withdrawal"
return v.length!==0?v:w.b},
ibl(d){var w=d.d,v=w===B.fS||w===B.p2||w===B.h2||w===B.kI,u=d.x
if(u===B.dI)return w===B.f2?-d.c:0
if(u!==B.cu)return 0
w=d.c
return v?w:-w},
ikJ(d,e){var w,v,u,t,s,r,q=A.C(d,x.o)
B.d.aZ(q,new C.fM7())
w=A.T(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,A.J)(q),++t,v=r){s=q[t]
r=v-C.ibl(s)
if(r<0)r=0
w.n(0,s.a,new A.bqQ(v,r))}return w},
asg:function asg(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFU:function aFU(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
eoX:function eoX(d){this.a=d},
epD:function epD(d){this.a=d},
epE:function epE(d){this.a=d},
epF:function epF(d){this.a=d},
epl:function epl(d,e){this.a=d
this.b=e},
epm:function epm(){},
epn:function epn(d){this.a=d},
epo:function epo(){},
epp:function epp(d){this.a=d},
epq:function epq(d,e,f){this.a=d
this.b=e
this.c=f},
epr:function epr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epg:function epg(d,e){this.a=d
this.b=e},
eoY:function eoY(d,e,f){this.a=d
this.b=e
this.c=f},
eph:function eph(){},
epi:function epi(){},
epj:function epj(d){this.a=d},
epk:function epk(){},
ep1:function ep1(d,e){this.a=d
this.b=e},
ep2:function ep2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epa:function epa(){},
ep7:function ep7(d){this.a=d},
ep8:function ep8(d,e){this.a=d
this.b=e},
ep9:function ep9(d,e){this.a=d
this.b=e},
epb:function epb(d){this.a=d},
epc:function epc(d,e,f){this.a=d
this.b=e
this.c=f},
epd:function epd(d){this.a=d},
epf:function epf(d){this.a=d},
epe:function epe(d){this.a=d},
ep3:function ep3(d){this.a=d},
ep4:function ep4(d,e,f){this.a=d
this.b=e
this.c=f},
epv:function epv(){},
epw:function epw(){},
epA:function epA(d){this.a=d},
ept:function ept(d){this.a=d},
epB:function epB(d){this.a=d},
eps:function eps(d){this.a=d},
epC:function epC(d){this.a=d},
epx:function epx(d){this.a=d},
epy:function epy(d){this.a=d},
epz:function epz(d){this.a=d},
epu:function epu(d){this.a=d},
ep0:function ep0(d){this.a=d},
ep_:function ep_(d){this.a=d},
eoZ:function eoZ(d){this.a=d},
ep6:function ep6(d,e){this.a=d
this.b=e},
ep5:function ep5(d,e){this.a=d
this.b=e},
aDk:function aDk(d,e,f,g,h,i,j,k,l,m){var _=this
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
dsu:function dsu(){},
dsv:function dsv(){},
dsw:function dsw(d,e,f){this.a=d
this.b=e
this.c=f},
dst:function dst(d){this.a=d},
dsx:function dsx(d,e){this.a=d
this.b=e},
dss:function dss(d){this.a=d},
aDj:function aDj(d,e,f,g,h,i,j,k,l,m){var _=this
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
bjZ:function bjZ(d,e){var _=this
_.f=_.e=_.d=$
_.cQ$=d
_.b7$=e
_.c=_.a=null},
dsn:function dsn(d){this.a=d},
dso:function dso(d){this.a=d},
dsp:function dsp(d){this.a=d},
dsq:function dsq(){},
dsr:function dsr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dsm:function dsm(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dsl:function dsl(d){this.a=d},
bdC:function bdC(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
bdB:function bdB(d,e,f){this.b=d
this.d=e
this.a=f},
bdA:function bdA(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aDl:function aDl(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aDm:function aDm(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
dsO:function dsO(){},
dsP:function dsP(){},
dsQ:function dsQ(){},
dsA:function dsA(d){this.a=d},
dsz:function dsz(d,e){this.a=d
this.b=e},
dsy:function dsy(d,e){this.a=d
this.b=e},
dsL:function dsL(d,e){this.a=d
this.b=e},
dsN:function dsN(d,e){this.a=d
this.b=e},
dsM:function dsM(d,e){this.a=d
this.b=e},
dsK:function dsK(){},
dsJ:function dsJ(d){this.a=d},
dsI:function dsI(){},
dsD:function dsD(d){this.a=d},
dsE:function dsE(){},
dsF:function dsF(d){this.a=d},
dsG:function dsG(d){this.a=d},
dsC:function dsC(){},
dsH:function dsH(d){this.a=d},
dsB:function dsB(d){this.a=d},
bd_:function bd_(d){this.a=d},
fM7:function fM7(){},
by6:function by6(d,e){this.b=d
this.a=e},
aMT:function aMT(){},
bA5:function bA5(){},
igI(d,e,f,g,h,i,j,k){var w,v=B.a.i(j.toLowerCase())
B.d.br(d,new C.fDT(v,g))
w=A.T(x.N,x.z)
w.n(0,"id",B.o.u(1000*Date.now()))
w.n(0,"fromEmail",B.a.i(e.toLowerCase()))
w.n(0,"fromName",f)
w.n(0,"toEmail",v)
if(k!=null&&B.a.i(k).length!==0)w.n(0,"toName",B.a.i(k))
w.n(0,"gameId",g)
w.n(0,"gameTitle",h)
w.n(0,"status","pending")
w.n(0,"createdAt",new A.V(Date.now(),0,!1).ag())
w.n(0,"matchesTotal",i)
w.n(0,"matchesPlayed",0)
w.n(0,"seriesStatus","active")
B.d.J(d,w)},
aR5(d){var w,v=J.a7(d),u=A.aJ(v.h(d,"matchesTotal")),t=u==null?null:B.i.M(u)
if(t==null)t=1
v=A.aJ(v.h(d,"matchesPlayed"))
w=v==null?null:B.i.M(v)
return B.o.D(t-(w==null?0:w),0,t)},
ism(d,e){var w=A.U(e).k("Y<1>")
w=A.C(new A.Y(e,new C.fWR(B.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
aiz(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.J)(d),++v){u=d[v]
if(C.aR5(u)<=0){t=J.cC(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
ijo(d,e){var w,v,u,t=J.a7(d),s=t.h(d,"status")
if(!J.z(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.z(s==null?"":s,"complete"))return!1
if(C.aR5(d)<=0)return!1
w=B.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=B.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=B.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aR5(d)>0},
ijn(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a7(d),h=A.aJ(i.h(d,"matchesTotal")),g=h==null?null:B.i.M(h)
if(g==null)g=1
h=A.aJ(i.h(d,"matchesPlayed"))
w=h==null?null:B.i.M(h)
v=(w==null?0:w)+1
u=B.a.i(e.toLowerCase())
t=i.h(d,"sessionState")
h=x.f
if(!h.b(t))return"Game "+v+" of "+g+" \u2014 tap Join room when you are ready"
s=x.N
r=x.z
q=A.a2(t,s,r)
p=q.h(0,"inGame")
o=h.b(p)?A.a2(p,s,r):A.T(s,r)
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
k=J.z(o.h(0,u),!0)
j=l!=null&&J.z(o.h(0,l),!0)
if(k&&!j)return"Game "+v+" of "+g+" \u2014 waiting for opponent to join the room"
i=!k
if(i&&j)return"Game "+v+" of "+g+" \u2014 your opponent is in the room. Join now"
if(i&&!j)return"Game "+v+" of "+g+" \u2014 both players tap Join room to start"
return"Game "+v+" of "+g+" \u2014 match in progress"},
igH(d,e){var w
C.aiz(e)
w=A.U(e).k("Y<1>")
w=A.C(new A.Y(e,new C.fDS(B.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
uz(d,e){var w,v,u
for(w=J.aT(d);w.C();){v=w.gR(w)
u=J.t(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
id3(d,e,f){var w,v,u,t="fromName",s=J.a7(f),r=s.h(f,"fromEmail"),q=B.a.i(J.k(r==null?"":r).toLowerCase())
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
hfH(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase()),r=J.a7(d),q=r.h(d,"fromEmail"),p=B.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=B.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.id3(x.f.b(u)?A.a2(u,r,q):A.T(r,q),v,d)
if((t.length===0||B.a.q(t,"@"))&&f!=null){t=J.t(f,v)
if(t==null)t=""}if(t.length===0||B.a.q(t,"@"))return"Opponent"
return t},
bFi(){var w=0,v=A.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bFi=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bFi)
case 7:r=e
q=A.aV(J.t(r.a,"all_users"))
if(q==null||q.length===0){k=x.N
u=A.T(k,k)
w=1
break}p=B.X.aQ(0,q,null)
if(!x.j.b(p)){k=x.N
u=A.T(k,k)
w=1
break}k=x.N
o=A.T(k,k)
for(k=J.aT(p),j=x.f;k.C();){n=k.gR(k)
if(!j.b(n))continue
i=J.t(n,"email")
m=B.a.i(J.k(i==null?"":i).toLowerCase())
i=J.t(n,"username")
l=B.a.i(J.k(i==null?"":i))
if(J.ad(m)!==0&&J.ad(l)!==0)J.aK(o,m,l)}u=o
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
return A.i($async$bFi,v)},
bEm(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bEm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return A.b(C.bFi(),$async$bEm)
case 3:u=t.hfH(s,r,g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEm,v)},
LS(d,e,f){var w=0,v=A.j(x.h),u,t,s,r,q,p
var $async$LS=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(d)
p=$.hA0.h(0,q)
if(p!=null){t=new A.V(Date.now(),0,!1).bD(p)
t=t.a>A.dw(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.hA0.n(0,q,new A.V(Date.now(),0,!1))
w=5
return A.b(A.RW(B.ce,q),$async$LS)
case 5:case 4:s=$.hA_.h(0,q)
if(s==null){u=C.uz(e,q)
w=1
break}r=C.uz(A.bEt(e,A.a([s],x._)),q)
if(r!=null)A.hie(e,r)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$LS,v)},
isB(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.J)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new A.V(Date.now(),0,!1).ag())
return}}},
i9A(d,e){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
p=q.h(d,"fromEmail")
w=B.a.i(J.k(p==null?"":p).toLowerCase())
p=q.h(d,"toEmail")
v=B.a.i(J.k(p==null?"":p).toLowerCase())
q=q.h(d,"fromName")
u=J.k(q==null?w:q)
switch(o){case"tic_tac_go":q=x.N
return A.I(["ttt",A.c0(9,"",!1,q),"turnEmail",w,"playerXEmail",w,"playerXName",u,"playerOEmail",v,"playerOName",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],q,x.z)
case"connect_four_pro":t=J.e4(6,x.L)
for(q=x.S,s=0;s<6;++s)t[s]=A.c0(7,0,!1,q)
return A.I(["c4",t,"c4Turn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
case"checkers_deluxe":t=J.e4(8,x.L)
for(q=x.S,r=0;r<8;++r)t[r]=A.ir(8,new C.fs7(r),!0,q)
return A.I(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return A.I(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
igG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.J)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new A.V(Date.now(),0,!1).ag())
r=C.i9A(u,f)
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
t.n(u,"sessionUpdatedAt",new A.V(Date.now(),0,!1).ag())
return}}},
isz(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.J)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)!==e)continue
w=A.aJ(t.h(u,i))
w=w==null?null:B.i.M(w)
r=(w==null?0:w)+1
t.n(u,i,r)
w=A.aJ(t.h(u,"matchesTotal"))
q=w==null?null:B.i.M(w)
if(r>=(q==null?1:q)){t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}else{p=t.h(u,h)
if(x.f.b(p)){w=x.N
s=x.z
o=A.a2(p,w,s)
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
t.n(u,h,o)}}t.n(u,"sessionUpdatedAt",new A.V(Date.now(),0,!1).ag())
return}},
hid(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.J)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",A.a2(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new A.V(Date.now(),0,!1).ag())
return}}},
fVo(d){var w=0,v=A.j(x.gw),u,t,s,r,q
var $async$fVo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.aiz(d)
t=$.heU
if(t==null)s=$.heU=A.RW(B.ce,null).fv(new C.fVp())
else s=t
w=3
return A.b(s,$async$fVo)
case 3:r=f
if(r==null){u=A.bq(new A.N(d,new C.fVq(),A.U(d).k("N<1,@>")),!0,x.P)
w=1
break}q=A.bEt(d,r)
B.d.a8(d)
B.d.v(d,q)
u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fVo,v)},
aiA(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$aiA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.aiz(d)
t=A.U(d).k("N<1,a9<n,@>>")
t=A.C(new A.N(d,new C.fTi(),t),t.k("ak.E"))
w=3
return A.b(A.RW(t,null),$async$aiA)
case 3:s=f
if(s==null){u=!1
w=1
break}r=A.bEt(d,s)
B.d.a8(d)
B.d.v(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aiA,v)},
aRZ(d,e,f){var w=0,v=A.j(x.y),u,t,s,r
var $async$aRZ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:C.hid(d,e,f)
t=C.uz(d,e)
if(t==null){u=!1
w=1
break}w=3
return A.b(A.RW(A.a([A.a2(t,x.N,x.z)],x._),e),$async$aRZ)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.uz(s,e)
if(r!=null)A.hie(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aRZ,v)},
ioy(d,e,f){var w
C.hid(d,e,f)
w=$.heF.h(0,e)
if(w!=null)w.a1(0)
$.heF.n(0,e,A.cy(B.lH,new C.fTj(e,d)))},
h98(d,e){return new C.b1t(!0,d,"NGMY",B.a.i(e.toLowerCase()),null,!0)},
fDT:function fDT(d,e){this.a=d
this.b=e},
fWR:function fWR(d){this.a=d},
fDS:function fDS(d){this.a=d},
fs7:function fs7(d){this.a=d},
fVp:function fVp(){},
fVq:function fVq(){},
fTi:function fTi(){},
fTj:function fTj(d,e){this.a=d
this.b=e},
b1t:function b1t(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
it4(d,e,f){return A.bU(B.L,null,new C.fY2(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
fY2:function fY2(d,e){this.a=d
this.b=e},
a0L:function a0L(d,e,f){this.c=d
this.d=e
this.a=f},
aFI:function aFI(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
ejE:function ejE(d){this.a=d},
ejH:function ejH(d){this.a=d},
ejI:function ejI(d){this.a=d},
ejG:function ejG(d){this.a=d},
ejJ:function ejJ(d){this.a=d},
ejK:function ejK(d,e){this.a=d
this.b=e},
ejF:function ejF(d,e){this.a=d
this.b=e},
imY(d){var w,v,u,t=B.a.i(d)
if(t.length===0)return B.iV
w=t.toLowerCase()
v=A.ag("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return B.iV
v=Date.now()
u=C.icn(w,new A.V(v,0,!1))
v=x.N
return A.a([new A.kG("calendar",A.I(["title",C.icm(t,w),"start",u.ag(),"end",u.bR(36e8).ag(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
icm(d,e){var w,v,u,t,s,r=A.ag("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return B.a.i(w==null?"":w)}u=A.ag("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hAN(B.a.i(t))}s=A.ag("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hAN(B.a.i(t))}if(B.a.q(e,"meeting"))return"Meeting"
if(B.a.q(e,"appointment"))return"Appointment"
return"NGMY Event"},
hAN(d){var w
if(d.length===0)return d
w=B.a.fw(d,A.ag("\\s+",!0,!1,!1,!1))
return new A.N(w,new C.fCR(),A.U(w).k("N<1,n>")).aO(0," ")},
icn(d,e){var w,v,u,t,s,r,q,p,o=A.c2(A.bD(e),A.bM(e),A.bV(e),0,0,0,0,0)
if(B.a.q(d,"tomorrow"))o=o.bR(864e8)
else if(!B.a.q(d,"today"))for(w=D.aJ7.gdO(D.aJ7),w=w.gae(w);w.C();){v=w.gR(w)
u=v.a
if(A.cS(d,u,0)){t=C.ibk(o,v.b)
o=t
break}}s=A.ag("\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(d)
if(s!=null){w=s.b
v=w[1]
r=A.ca(v==null?"":v,null)
if(r==null)r=9
v=w[2]
q=A.ca(v==null?"":v,null)
if(q==null)q=0
w=w[3]
p=w==null?null:w.toLowerCase()
if(p==="pm"&&r<12)r+=12
if(p==="am"&&r===12)r=0
if(p==null&&r>=1&&r<=7)r+=12}else{r=9
q=0}return A.c2(A.bD(o),A.bM(o),A.bV(o),r,q,0,0,0)},
ibk(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(A.mw(w)===e){u=!0
if(v<=0){t=d.bR(36e8)
s=w.a
if(s>=t.gbq())u=s===t.gbq()&&w.b<t.gcA()}}else u=!1
if(u)return w
w=w.bR(r)}return d.bR(r)},
fCR:function fCR(){},
imZ(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=B.a.i(d)
if(j.length===0)return B.iV
w=j.toLowerCase()
if(B.a.q(w,k))v=k
else v=B.a.q(w,"imessage")||B.a.q(w,"i message")?"sms":l
u=A.ag("(?:saying|say|message|text|tell(?:ing)?)\\s+(.+)$",!1,!1,!1,!1).cF(j)
if(u!=null){t=u.b[1]
s=t==null?l:B.a.i(t)
if(s==null)s=""
t=A.ag("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
s=B.a.i(A.aL(s,t,""))
t=s.length
r=t>=2&&t<500?s:l}else r=l
q=C.i8j(w,j)
if(q==null||q.length===0)return B.iV
t=A.ag("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=A.ag("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return A.a([new A.kG("call",A.I(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=A.I(["name",q],t,t)
if(r!=null)m.n(0,"body",r)
return A.a([new A.kG(n,m)],x.Z)}if(p){t=x.N
return A.a([new A.kG("call",A.I(["name",q],t,t))],x.Z)}return B.iV},
i8j(d,e){var w,v,u,t,s,r,q=[A.ag("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),A.ag("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),A.ag("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
for(w=0;w<3;++w){v=q[w].cF(d)
if(v==null)continue
u=v.b[1]
t=u==null?null:B.a.i(u)
if(t==null)t=""
u=A.ag("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
t=B.a.i(A.aL(t,u,""))
u=A.ag("\\s+saying\\s+.+$",!1,!1,!1,!1)
t=B.a.i(A.aL(t,u,""))
u=t.length
s=!1
if(u>=2)if(u<=50){u=A.ag("^\\d+$",!0,!1,!1,!1)
s=A.ag("\\s",!0,!1,!1,!1)
s=A.aL(t,s,"")
u=!u.b.test(s)}else u=s
else u=s
if(u)return C.ifT(t)}r=A.ag("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return B.a.i(u==null?"":u)}return null},
ifT(d){var w=B.a.fw(d,A.ag("\\s+",!0,!1,!1,!1))
return new A.N(w,new C.fCQ(),A.U(w).k("N<1,n>")).aO(0," ")},
fCQ:function fCQ(){},
hF2(d){var w=new A.N(d,new C.fVG(),A.U(d).k("N<1,a9<n,@>>")).bY(0,new C.fVH())
w=A.C(w,w.$ti.k("M.E"))
return w},
fVG:function fVG(){},
fVH:function fVH(){},
in1(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return B.iV
w=B.a.i(d)
if(w.length===0)return B.iV
v=w.toLowerCase()
if(!(B.a.q(v,"send email")||B.a.q(v,"send an email")||B.a.q(v,"send a message to")||B.a.q(v,"email ")||B.a.q(v,"write an email")||B.a.q(v,"write email")))return B.iV
u=A.ag("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cF(w)
if(u==null)return B.iV
t=u.b[0]
t.toString
s=B.a.i(t)
r=A.ag("(?:subject|title)\\s*[:\\-]\\s*(.+)$",!1,!1,!1,!1).cF(w)
if(r!=null){t=r.b[1]
t.toString
q=B.a.i(t)}else q="Message from NGMY"
p=A.ag("(?:saying|that says|with message|message:|body:|write:|text:)\\s*(.+)$",!1,!1,!1,!1).cF(w)
if(p!=null){t=p.b[1]
t.toString
o=B.a.i(t)}else o=""
t=x.N
t=A.T(t,t)
t.n(0,"to",s)
t.n(0,"subject",q)
if(o.length!==0)t.n(0,"body",o)
return A.a([new A.kG("send_email",t)],x.Z)},
ima(d,e){var w
if(e)return d
w=J.dI(d,new C.fPv())
w=A.C(w,w.$ti.k("M.E"))
return w},
fPv:function fPv(){},
iov(d){switch(d){case"blackjack_vegas":return D.dYv
case"roulette_euro":return D.dYf
case"slots_jackpot":return D.dYm
case"poker_texas":return D.dYp
case"chess_royale":return D.dYg
case"connect_four_pro":return D.dYh
case"domino_block":return D.dYj
case"plinko_prizes":return D.dYr
case"spin_wheel":return D.dYo
case"baccarat_punto":return D.dYi
case"craps_table":return D.dYq
case"casino_war":return D.dYk
case"bingo_live":return D.dYn
case"solitaire_klondike":return D.dYu
case"backgammon_pro":return D.dYe
case"billiards_snooker":return D.dYs
case"profit_solve":return D.dYt
default:return D.dYl}},
fT9(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=A.m(8)
v=A.L(B.aQ,B.r,1.5)
u=A.a([new A.ab(0,B.G,B.w.j(0.35),B.ev,6)],x.V)
return A.q(p,A.as(A.X(B.ox,B.c.j(0.5),p,p,p,23.400000000000002),p,p,p),B.f,p,p,new A.p(p,p,v,w,u,D.c8O,B.n),p,74,p,p,p,p,p,52)}t=B.o.D(d,1,13)
s=t===1||t>=10||B.o.F(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][B.o.F(t,4)]
q=s?B.bD:B.a_
w=A.m(8)
v=A.L(B.bl,B.r,1)
u=A.a([new A.ab(0,B.G,B.w.j(0.28),B.ev,6)],x.V)
return A.q(p,A.x(A.a([new A.D(D.bHE,A.d(D.cHg[t-1]+"\n"+r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,B.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),B.b3,A.as(A.d(r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),B.b3],x.p),B.E,p,B.e,B.j,0,B.p),B.f,p,p,new A.p(B.hG,p,v,w,u,p,B.n),p,74,p,p,p,p,p,52)},
ipB(d,e){var w,v=null,u=A.m(18),t=A.L(B.aQ,B.r,3),s=A.a([new A.ab(0,B.G,B.aE.j(0.5),B.J,20)],x.V),r=A.U(e).k("N<1,h2>")
r=A.C(new A.N(e,new C.fV7(),r),r.k("ak.E"))
w=x.p
return A.x(A.a([A.q(v,A.x(A.a([D.fI7,B.ae,A.A(r,B.l,v,B.ba,B.j,0,v,v)],w),B.l,v,B.e,B.j,0,B.p),B.f,v,v,new A.p(v,v,t,u,s,D.c96,B.n),v,v,v,v,I.amb,v,v,v),B.aB,A.dh(B.asl,D.fIK,d,A.bp(B.aQ,v,v,v,B.dB,v,An.a0Q,v,v,v,v,v))],w),B.l,v,B.e,B.j,0,B.p)},
pw:function pw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bsW:function bsW(d,e){this.b=d
this.a=e},
fV7:function fV7(){},
hXP(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e4(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=A.c0(8,0,!1,w)
u=A.c0(9,"",!1,p)
t=x.t
s=A.a([],t)
r=A.a([],t)
t=A.a([0,0,0],t)
q=J.e4(6,o)
for(v=0;v<6;++v)q[v]=A.c0(7,0,!1,w)
return new C.asH(A.T(p,x.z),n,u,s,r,t,q,new A.au(B.ax,$.ax()))},
ihg(d,e,f,g,h){var w=new C.fFE(f,h)
switch(d){case"checkers_deluxe":return C.i6L(h,g,e,w)
case"tic_tac_go":return C.ig6(h,g,e,w)
case"blackjack_vegas":return C.i60(h,g,e,new C.fFy(w))
case"roulette_euro":return C.ief(h,g,e,new C.fFz(w))
case"slots_jackpot":return C.if4(h,g,e,new C.fFA(w))
case"billiards_snooker":return C.id6(h,g,e,new C.fFB(w))
case"connect_four_pro":return C.i7a(h,g,e,w)
case"profit_solve":return C.id9(h,g,e,new C.fFC(w))
default:return C.i6I(d,h,g,e,new C.fFD(w))}},
i6L(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.xl,B.K,w,w),u=A.m(12),t=A.L(D.Zg,B.r,8),s=A.a([new A.ab(0,B.G,B.w.j(0.4),B.J,16)],x.V)
return A.x(A.a([new A.D(B.eO,v,w),A.E(A.as(new A.fH(1,A.q(w,A.bw(A.m(6),A.ip(!0,w,w,B.y,D.fgL,new C.fpg(d,e,f,g),64,w,B.dZ,B.ah,!1),B.aq),B.f,w,w,new A.p(w,w,t,u,s,w,B.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),B.l,w,B.e,B.j,0,B.p)},
ig6(d,e,f,g){var w=null
return A.x(A.a([new A.D(B.eO,A.d(d.c,w,w,w,w,w,w,D.xl,B.K,w,w),w),A.E(A.as(new A.fH(1,A.cq(new C.fDa(d,e,f,g)),w),w,w,w),1)],x.p),B.l,w,B.e,B.j,0,B.p)},
i60(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.xl,B.K,v,v),t=x.p,s=A.a([],t),r=d.CW,q=d.ch
if(r)B.d.v(s,new A.N(q,new C.foA(),A.U(q).k("N<1,v>")))
else B.d.v(s,A.a([C.fT9(q[0],!1),B.bo,C.fT9(0,!0)],t))
s=A.A(s,B.l,v,B.ba,B.j,0,v,v)
r=A.d("Total: "+d.a4p(d.ay),v,v,v,v,v,v,D.fD6,v,v,v)
q=d.ay
w=A.U(q).k("N<1,v>")
q=A.C(new A.N(q,new C.foB(),w),w.k("ak.E"))
q=A.bW(B.fU,q,B.bs,v,6,6)
return A.x(A.a([new A.D(B.eO,u,v),D.fPg,B.am,s,B.aB,D.fWY,r,B.am,q,B.b3,A.A(A.a([A.E(A.bJ(D.fJd,v,d.CW?v:new C.foC(d,e,f,g),v),1),B.af,A.E(A.bJ(D.fZs,v,new C.foD(d,e,f,g),v),1)],t),B.l,v,B.e,B.j,0,v,v)],t),B.l,v,B.e,B.j,0,B.p)},
ief(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.xl,B.K,w,w),u=d.cx,t=A.a([new A.ab(0,B.G,B.w.j(0.45),B.cC,16)],x.V)
t=A.a([new A.D(B.eO,v,w),A.q(w,A.b2(w,w,w,new C.bsW(u,w),B.az),B.f,w,w,new A.p(w,w,w,w,t,w,B.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new A.D(B.jF,A.d("Result: "+A.w(v),w,w,w,w,w,w,D.fq5,w,w,w),w))
t.push(B.ae)
t.push(A.bW(B.fU,A.ir(6,new C.fA5(d,e,f,g),!0,x.l),B.bs,w,6,6))
return A.x(t,B.l,w,B.e,B.j,0,B.p)},
if4(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.xl,B.K,w,w),u=d.db,t=A.U(u).k("N<1,n>")
u=A.C(new A.N(u,new C.fC1(),t),t.k("ak.E"))
return A.x(A.a([new A.D(B.eO,v,w),C.ipB(new C.fC2(d,e,f,g),u)],x.p),B.l,w,B.e,B.j,0,B.p)},
id6(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.xl,B.K,w,w),u=A.m(20),t=A.L(B.hc,B.r,12),s=x.V,r=A.a([new A.ab(0,B.G,B.w.j(0.45),B.dp,18)],s),q=x.p
return A.x(A.a([new A.D(B.eO,v,w),A.E(A.q(w,new A.an(B.a0,w,B.ac,B.t,A.a([A.ap(w,A.q(w,w,B.f,w,w,D.b72,w,18,w,w,w,w,w,18),w,w,24,w,24,w),A.ap(28,A.q(w,w,B.f,w,w,B.aeG,w,14,w,w,w,w,w,14),w,w,w,32,w,w),A.as(A.eG(B.A,d.dx,A.q(w,w,B.f,w,w,new A.p(B.aQ,w,w,A.m(2),A.a([new A.ab(0,B.G,B.w.j(0.3),B.J,4)],s),w,B.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),B.f,w,w,new A.p(w,w,t,u,r,D.eA_,B.n),w,w,w,B.f6,w,w,w,w),1),A.kX(B.bd,w,w,1,0,new C.fyV(d,f),d.dy),A.bJ(D.fOg,w,new C.fyW(d,e,g,f),w)],q),B.l,w,B.e,B.j,0,B.p)},
i7a(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.xl,B.K,v,v),t=x.l,s=J.e4(7,t)
for(w=0;w<7;++w)s[w]=new A.by(1,B.bb,A.az(v,A.x(A.ir(6,new C.fpI(d,w),!0,t),B.l,v,B.mq,B.j,0,B.p),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.fpJ(d,w,e,f,g),v,v,v,v,v,v,!1,B.a4),v)
return A.x(A.a([new A.D(B.eO,u,v),A.E(A.as(new A.fH(1.1666666666666667,A.A(s,B.dP,v,B.e,B.j,0,v,v),v),v,v,v),1)],x.p),B.l,v,B.e,B.j,0,B.p)},
id9(d,e,f,g){var w=null
return A.x(A.a([new A.D(B.eO,A.d(d.c,w,w,w,w,w,w,D.xl,B.K,w,w),w),A.d(""+d.a+"/"+d.b,w,w,w,w,w,w,B.iF,w,w,w),A.d(d.fy,w,w,w,w,w,w,D.aWv,B.K,w,w),A.aM(w,B.Z,!1,w,!0,B.t,w,A.aO(),d.id,w,w,w,w,w,2,D.c4v,B.y,!0,w,!0,w,!1,w,B.ak,w,w,w,w,w,B.e5,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.fz6(d,e,g,f),w,!1,w,w,!1,w,!0,w,B.ad,w,w,w,w,w,w,w,w,w,w,w,B.dk,!0,B.a5,w,B.ao,w,w,w,w),A.bJ(D.fMP,w,new C.fz7(d,e,g,f),w)],x.p),B.l,w,B.e,B.j,0,B.p)},
i6I(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gkr(),k=e.d
k=k==null?n:k.c
w=C.iov(d)
v=D.aIW.h(0,d)
if(v==null)v=d
m=A.d(m,n,n,n,n,n,n,B.l6,B.K,n,n)
u=A.m(22)
t=w.a
s=w.b
r=A.L(s.j(0.5),B.r,2)
q=A.a([new A.ab(0,B.G,w.c.j(0.35),B.eQ,24)],x.V)
p=A.d(w.e,n,n,n,n,n,n,Al.KH,n,n,n)
o=A.d(v,n,n,n,n,n,n,B.ne,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+A.w(k)+" at the table"
k=x.p
q=A.E(A.as(A.q(n,A.x(A.a([p,B.W,o,B.T,A.d(l,n,n,n,n,n,n,A.l(n,n,B.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),B.K,n,n),B.dc,A.X(w.f,s.j(0.85),n,n,n,48)],k),B.l,n,B.ba,B.j,0,B.p),B.f,n,n,new A.p(n,n,r,u,q,new A.a8(B.b1,B.b7,B.x,t,n,n),B.n),n,n,n,B.f6,B.ad,n,n,1/0),n,n,n),1)
return A.x(A.a([m,B.ae,q,B.T,new A.a5(1/0,n,A.bJ(D.fYy,n,new C.fpa(f,e,g,h),A.bp(s,n,n,n,B.d.gH(t).iV()>0.4?B.w:B.c,n,B.cq,n,n,n,n,n)),n)],k),B.l,n,B.e,B.j,0,B.p)},
Ft:function Ft(d,e){this.a=d
this.b=e},
asH:function asH(d,e,f,g,h,i,j,k){var _=this
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
ck5:function ck5(){},
ck6:function ck6(){},
ck4:function ck4(){},
ck7:function ck7(){},
ck3:function ck3(){},
ck9:function ck9(){},
cka:function cka(){},
ck2:function ck2(d){this.a=d},
ck8:function ck8(){},
ck1:function ck1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fFE:function fFE(d,e){this.a=d
this.b=e},
fFy:function fFy(d){this.a=d},
fFz:function fFz(d){this.a=d},
fFA:function fFA(d){this.a=d},
fFB:function fFB(d){this.a=d},
fFC:function fFC(d){this.a=d},
fFD:function fFD(d){this.a=d},
fpg:function fpg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpf:function fpf(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fDa:function fDa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fD9:function fD9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fD8:function fD8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
foA:function foA(){},
foB:function foB(){},
foC:function foC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
foD:function foD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fA5:function fA5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fA4:function fA4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fC1:function fC1(){},
fC2:function fC2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fyV:function fyV(d,e){this.a=d
this.b=e},
fyW:function fyW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpJ:function fpJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fpI:function fpI(d,e){this.a=d
this.b=e},
fz6:function fz6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fz7:function fz7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpa:function fpa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ikc(d){var w,v=A.U(d).k("Y<1>")
v=A.pJ(new A.Y(d,new C.fLa(),v),120,v.k("M.E"))
w=A.cF(v,new C.fLb(),A.a4(v).k("M.E"),x.N).aO(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fLa:function fLa(){},
fLb:function fLb(){},
aiL(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
atC:function atC(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aGu:function aGu(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
eQL:function eQL(){},
aOn:function aOn(){},
hVM(){var w=$.Jv
if(w<=0)return;--w
$.Jv=w
if(w===0){w=$.hqa
if(w!=null)w.$0()}},
cfp(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
arj(d){var w=0,v=A.j(x.H),u,t
var $async$arj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.h93.J(0,t)
w=4
return A.b(A.aA(),$async$arj)
case 4:w=3
return A.b(f.aC("Bool","ngmy_game_free_play_used_"+B.a.i(t.toLowerCase()),!0),$async$arj)
case 3:case 1:return A.h(u,v)}})
return A.i($async$arj,v)},
ari(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$ari=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(C.cfp(d)){u=!0
w=1
break}t=B.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.h93.q(0,t)){u=!1
w=1
break}w=3
return A.b(A.aA(),$async$ari)
case 3:s=f
r=B.a.i(t.toLowerCase())
r=A.k5(J.t(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ari,v)},
WG(){var w=0,v=A.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$WG=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$WG)
case 7:r=e
q=A.aV(J.t(r.a,"ngmy_helper_ai_usage_v1"))
if(q==null||B.a.i(q).length===0){u=A.T(x.N,x.z)
w=1
break}p=B.X.aQ(0,q,null)
if(x.f.b(p)){o=A.a2(p,x.N,x.z)
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
return A.i($async$WG,v)},
b1K(d){return C.hVZ(d)},
hVZ(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$b1K=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.aA(),$async$b1K)
case 6:s=f
w=7
return A.b(s.aC("String","ngmy_helper_ai_usage_v1",B.X.aw(d,null)),$async$b1K)
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
return A.i($async$b1K,v)},
b1I(d,e){var w,v,u,t,s=J.t(d,B.a.i(e.toLowerCase()))
if(!x.f.b(s))return new A.afk(0,new A.V(Date.now(),0,!1))
w=J.a7(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=A.bh(u==null?"":u)
if(t==null)t=new A.V(Date.now(),0,!1)
return new A.afk(typeof v=="number"?B.o.D(B.i.M(v),0,999999):0,t)},
b1J(d,e){if(B.o.aq(e.bD(d.b).a,36e8)>=24)return new A.afk(0,e)
return d},
cg_(d,e){var w=0,v=A.j(x.S),u,t,s
var $async$cg_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return A.b(C.WG(),$async$cg_)
case 3:t=g
s=Date.now()
u=B.o.D(e-C.b1J(C.b1I(t,d),new A.V(s,0,!1)).a,0,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cg_,v)},
cg0(d,e){var w=0,v=A.j(x.cJ),u,t,s,r
var $async$cg0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return A.b(C.WG(),$async$cg0)
case 3:t=g
s=Date.now()
r=C.b1J(C.b1I(t,d),new A.V(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bR(864e8)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cg0,v)},
hW_(d){var w,v,u,t=d.a,s=B.o.aq(t,1e6)
if(s<=0)return"0s"
w=B.o.aq(t,36e8)
v=B.o.aq(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+B.a.b_(B.o.u(v),2,"0")+"m "+B.a.b_(B.o.u(u),2,"0")+"s"
if(v>0)return""+v+"m "+B.a.b_(B.o.u(u),2,"0")+"s"
return""+u+"s"},
b1L(d){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$b1L=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return A.b(C.WG(),$async$b1L)
case 3:t=p.b1J(o.b1I(f,d),new A.V(Date.now(),0,!1))
w=4
return A.b(A.aA(),$async$b1L)
case 4:s=f
r=B.a.i(d.toLowerCase())
q=t.b.aa().ag()
u=A.k5(J.t(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1L,v)},
arD(d){var w=0,v=A.j(x.H),u,t,s,r
var $async$arD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return A.b(C.WG(),$async$arD)
case 3:t=s.b1J(r.b1I(f,d),new A.V(Date.now(),0,!1))
w=5
return A.b(A.aA(),$async$arD)
case 5:w=4
return A.b(f.aC("Bool","ngmy_helper_3left_"+B.a.i(d.toLowerCase())+"_"+t.b.aa().ag(),!0),$async$arD)
case 4:case 1:return A.h(u,v)}})
return A.i($async$arD,v)},
arE(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$arE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=B.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return A.b(C.WG(),$async$arE)
case 3:s=g
r=Date.now()
q=C.b1J(C.b1I(s,d),new A.V(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aK(s,t,A.I(["count",r+1,"windowStart",q.b.aa().ag()],x.N,x.K))
w=4
return A.b(C.b1K(s),$async$arE)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arE,v)},
aim(d,e,a0){var w=0,v=A.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aim=A.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new A.fd("")
if(!d.d){p=!0
if(!C.hEV(a0))if(!C.hEU(a0)){p=A.ag("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.hEV(a0)?3:4
break
case 3:o=C.ioa(a0)
w=o!=null?5:6
break
case 5:w=7
return A.b(C.c80(e,o),$async$aim)
case 7:n=a2
p=J.a7(n)
if(p.gcm(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.hoC(o)+":\n"
m.a+=l
for(p=p.gae(n);p.C();){m=p.gR(p)
l=h
k="- "+m.gWl()+"\n"
l.a+=k
m=m.f
if(m!=null&&B.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=A.ag("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return A.b(A.ML("text/plain"),$async$aim)
case 14:r=a2
p=r
if(p==null)p=null
else p=B.a.i(p.a)
q=p==null?"":p
if(J.ad(q)!==0){p=h
m="CLIPBOARD CONTENT (user asked):\n"+A.w(q)+"\n\n"
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
case 13:case 9:w=C.hEU(a0)?15:16
break
case 15:p=h
f=C
w=17
return A.b(C.a8C(e),$async$aim)
case 17:m=f.hqk(a2)+"\n"
p.a+=m
case 16:p=A.ag("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return A.b(C.VJ(e),$async$aim)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cJ(i)){p=h
m=C.hoD(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=B.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aim,v)},
hXm(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.q(w,"|")||B.a.q(w,":")||B.a.q(w,"/")||B.a.q(w,".")||B.a.q(w," "))return!1
v=A.ag("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
ciz(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ciz=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=A.hr2(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.f4("ngmy_local_growth_income_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bO),$async$ciz)
case 7:r=f
if(r!=null){p=J.t(r,"token")
p=B.a.i(J.k(p==null?"":p))
u=p
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
q=A.ac(m)
$.am.$1("[local growth income stash] code lookup: "+A.w(q))
w=6
break
case 3:w=2
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ciz,v)},
asj(d){var w=0,v=A.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$asj=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=B.a.i(d)
if(J.ad(k)===0){u=null
w=1
break}t=4
w=7
return A.b(A.f4("ngmy_local_growth_income_stash_v1_"+B.a.i(k),null,!1,B.bO),$async$asj)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.t(r,"payload")
q=J.k(n==null?"":n)
if(J.ad(q)===0){u=null
w=1
break}n=J.t(r,"ownerEmail")
p=B.a.i(J.k(n==null?"":n))
n=B.ca.cJ(0,B.cM.aN(q))
m=J.z(J.t(r,"live"),!0)
u=new A.aHV(m,p,n)
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=A.ac(j)
$.am.$1("[local growth income stash] consume: "+A.w(o))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$asj,v)},
b2P(d){var w=0,v=A.j(x.bY),u,t,s,r,q
var $async$b2P=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
w=C.hXm(q)?3:4
break
case 3:w=5
return A.b(C.ciz(q),$async$b2P)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.asj(t)
w=1
break
case 4:if(B.a.a_(q,"NGMYLOCALSYNC1|")){u=C.asj(B.a.i(B.a.b2(q,15)))
w=1
break}w=B.a.a_(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return A.b(C.asj(B.a.i(B.a.b2(q,15))),$async$b2P)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new A.aHV(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2P,v)},
hri(d){var w=d.bL
if(w>=0)return w
return 1},
aiy(d,e,f){var w=0,v=A.j(x.H),u,t
var $async$aiy=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return A.b(A.aS9(d,e),$async$aiy)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return A.b(A.HB(d,null,null,!1,!0,""),$async$aiy)
case 5:w=4
return A.b(t.$1(h),$async$aiy)
case 4:case 1:return A.h(u,v)}})
return A.i($async$aiy,v)},
imX(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=B.a.i(a2)
if(a1.length===0)return B.iV
w=a1.toLowerCase()
v=A.ag("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=A.ag("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(!u&&t==null)return B.iV
s=new A.V(Date.now(),0,!1)
r=A.dk()
q=A.dk()
p=C.icl(w)
if(p!=null){v=p.a
r.b=s.bR(v)
q.b=C.hzE(a1,w)
if(J.z(q.bl(),"Wake up")&&B.o.aq(v,e)<=180)q.b="Reminder \u2014 "+B.o.aq(v,e)+" min"}else{if(t!=null){v=A.ag("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=B.a.en(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.hzF(v[2],v[4],v[3])
o=v[3]
m=A.ca(o==null?"":o,null)
if(m==null)m=0
l=A.c2(A.bD(s),A.bM(s),A.bV(s),0,0,0,0,0)
if(B.a.q(w,d))l=l.bR(a0)
r.b=A.c2(A.bD(l),A.bM(l),A.bV(l),n,m,0,0,0).bR(-36e8)
if(r.bl().d3(s.bR(e)))r.b=J.c7(r.bl(),B.oq)
v=C.igE(v[1])
k=B.o.F(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+B.a.b_(B.o.u(m),2,"0")+" "+j)}else{l=A.c2(A.bD(s),A.bM(s),A.bV(s),0,0,0,0,0)
v=B.a.q(w,d)
if(v)l=l.bR(a0)
i=A.ag("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(i!=null){o=i.b
h=C.hzF(o[1],o[3],o[2])
o=o[2]
g=A.ca(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=A.c2(A.bD(l),A.bM(l),A.bV(l),h,g,0,0,0)
r.b=f.d3(s.bR(3e7))&&!v?f.bR(a0):f
q.b=C.hzE(a1,w)}}v=x.N
return A.a([new A.kG("alarm",A.I(["title",q.bl(),"start",r.bl().ag(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
icl(d){var w,v,u,t,s,r,q=[A.ag("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.ag("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.ag("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),A.ag("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
for(w=0;w<4;++w){v=q[w].cF(d)
if(v==null)continue
u=v.b
t=u[1]
s=A.ca(t==null?"":t,null)
if(s==null||s<=0)continue
r=u[2]
if(r==null)r="minute"
if(B.a.a_(r,"sec"))return new A.bd(1e6*B.o.D(s,5,86400))
if(B.a.a_(r,"hour")||B.a.a_(r,"hr"))return new A.bd(36e8*B.o.D(s,1,168))
return new A.bd(6e7*B.o.D(s,1,10080))}return null},
igE(d){var w=d==null?"work":d,v=w.toLowerCase()
if(B.a.q(v,"meeting")||B.a.q(v,"appointment"))return"Meeting"
if(B.a.q(v,"class")||B.a.q(v,"school"))return"Class"
if(B.a.q(v,"shift"))return"Shift"
return"Work"},
hzF(d,e,f){var w,v=A.ca(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return B.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
hzE(d,e){var w,v,u,t
if(B.a.q(e,"work"))return"Wake up \u2014 Work"
if(B.a.q(e,"school")||B.a.q(e,"class"))return"Wake up \u2014 School"
w=A.ag("\\btimer\\b",!1,!1,!1,!1)
if(w.b.test(e))return"Timer"
v=A.ag("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(d)
if(v!=null){w=v.b
u=w[1]
w=u==null?w[2]:u
t=B.a.i(w==null?"":w)
w=t.length
if(w>=3&&w<=60)return t}return"Wake up"},
hXI(d){var w,v,u,t,s=J.a7(d)
if(s.gau(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.ko(d,80),v=w.$ti,w=new A.bR(w,w.gI(0),v.k("bR<ak.E>")),v=v.k("ak.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gI(d)>80?u+("\u2026 and "+(s.gI(d)-80)+" more\n"):u
return B.a.i(s.charCodeAt(0)==0?s:s)}},D,H,Ag,I,X,Ah,Y,F,Ai,O,Aj,Ak,Al,Am,Z,An,Ao,Ap,Aq,A_,A0,K
J=c[1]
A=c[0]
B=c[2]
A1=c[210]
L=c[36]
P=c[202]
A2=c[215]
E=c[196]
M=c[204]
A3=c[126]
A4=c[121]
Q=c[146]
A5=c[200]
R=c[40]
N=c[82]
A6=c[162]
A7=c[205]
S=c[195]
A8=c[208]
A9=c[206]
T=c[87]
Aa=c[88]
U=c[171]
Ab=c[207]
Ac=c[203]
Ad=c[199]
V=c[138]
Ae=c[118]
G=c[211]
W=c[186]
Af=c[122]
C=a.updateHolder(c[6],C)
D=c[193]
H=c[30]
Ag=c[73]
I=c[198]
X=c[117]
Ah=c[209]
Y=c[31]
F=c[197]
Ai=c[160]
O=c[102]
Aj=c[158]
Ak=c[194]
Al=c[159]
Am=c[213]
Z=c[201]
An=c[216]
Ao=c[152]
Ap=c[212]
Aq=c[214]
A_=c[81]
A0=c[64]
K=c[61]
C.bu9.prototype={
p_(d,e){return this.a.$2(d,e)}}
C.G5.prototype={
S(){return new C.aK_(this.$ti.k("aK_<G5.T,G5.S>"))}}
C.aK_.prototype={
Y(){var w,v,u=this
u.a4()
w=u.a
v=w.f
w=new A.hr(B.Gw,v,null,null,w.$ti.k("hr<1>"))
u.e=w
u.WU()},
bz(d){var w,v=this
v.bJ(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aPY()
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hr(B.Gw,w.b,w.c,w.d,w.$ti)}v.WU()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&A.c()
return v.mt(d,w)},
t(){this.aPY()
this.a3()},
WU(){var w,v=this
v.d=v.a.c.lM(new C.fcB(v),new C.fcC(v),new C.fcD(v))
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hr(B.a_k,w.b,w.c,w.d,w.$ti)},
aPY(){var w=this.d
if(w!=null){w.a1(0)
this.d=null}}}
C.axu.prototype={
mt(d,e){return this.e.$2(d,e)}}
C.amJ.prototype={
S(){return C.i3p()},
bv(){return this.r.$0()}}
C.ra.prototype={}
C.aCd.prototype={
ae6(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ae6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.hpJ(r)
if(r.x==null||r.c8.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.hpL(s),$async$ae6)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ae6,v)},
Yl(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ash(t.a.c),$async$Yl)
case 3:if(e!=null&&t.c!=null)t.a.bv()
r=!C.cfp(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return A.b(C.ari(t.a.c),$async$Yl)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.m(new C.dku(t,s))
if(!s)t.ae6()
case 1:return A.h(u,v)}})
return A.i($async$Yl,v)},
adH(){var w=0,v=A.j(x.H),u,t=this,s
var $async$adH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.bFi(),$async$adH)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dkF(t,s))
case 1:return A.h(u,v)}})
return A.i($async$adH,v)},
Y(){var w,v,u=this
u.byd()
$.tW=$.tW+1
w=u.a
$.bFn=w.c.a
w=w.d.bb
v=A.U(w).k("N<1,a9<n,@>>")
w=A.C(new A.N(w,new C.dkX(),v),v.k("ak.E"))
u.f=w
u.adH()
u.Kg()
u.Yl()
u.e=A.df(B.on,new C.dkY(u))},
Kg(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Kg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:C.aiz(t.a.d.bb)
w=3
return A.b(C.fVo(t.a.d.bb),$async$Kg)
case 3:s=e
if(t.c==null){w=1
break}C.aiz(t.a.d.bb)
if(s!=null)t.m(new C.dkN(t,s))
else t.m(new C.dkO(t))
case 1:return A.h(u,v)}})
return A.i($async$Kg,v)},
t(){C.b1v()
var w=this.e
if(w!=null)w.a1(0)
this.byc()},
aiV(d,e,f){return this.cxW(d,e,f)},
cxW(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$aiV=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(e.toLowerCase())
p=J.t(t.r,q)
o=t.a
n=o.d.bb
o=o.c
s=d.b
C.igI(n,o.a,o.c,d.a,s,f,e,p)
t.a.bv()
w=3
return A.b(C.aiA(t.a.d.bb),$async$aiV)
case 3:if(t.c==null){w=1
break}t.m(new C.dkQ(t))
r=f===1?"1 game":""+f+" games"
t.c.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$aiV,v)},
J4(d,e){return this.ciZ(d,e)},
c62(d){return this.J4(d,null)},
ciZ(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$J4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&B.a.i(e).length!==0){s=C.uz(t.a.d.bb,B.a.i(e))
if(s!=null&&C.aR5(s)<=0){t.c.L(x.q).f.T(D.aU8)
w=1
break}}w=5
return A.b(C.ari(t.a.c),$async$J4)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return A.b(C.h94(r,C.fPG(q.c),p),$async$J4)
case 6:w=1
break
case 4:o=new C.dkI(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
A.hy(r,new C.aF2(p,q.d,q.f,q.r,new C.dkJ(o),q.w,C.fPG(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
A.hy(q,new C.amI(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.dkK(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$J4,v)},
c3h(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.aiz(i.a.d.bb)
C.aiz(i.f)
w=C.ism(i.a.c.a,i.f)
v=C.igH(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return B.bM
if(!u){t=B.d.gH(w)
u=A.m(14)
s=A.L(B.aT,B.r,1)
r=J.a7(t)
q=r.h(t,"fromName")
q=A.w(q==null?r.h(t,"fromEmail"):q)
p=A.w(r.h(t,"gameTitle"))
o=A.aJ(r.h(t,g))
o=o==null?h:B.i.M(o)
if(o==null)o=1
r=A.aJ(r.h(t,g))
r=r==null?h:B.i.M(r)
r=(r==null?1:r)===1?"":"s"
n=x.p
return A.q(h,A.x(A.a([D.fSA,A.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,B.p_,h,h,h),B.T,A.A(A.a([A.E(A.dU(B.L_,new C.dkA(i,t),h),1),B.af,A.E(A.bJ(D.h0V,h,new C.dkB(i,t),h),1)],n),B.l,h,B.e,B.j,0,h,h)],n),B.E,h,B.e,B.j,0,B.p),B.f,h,h,new A.p(B.aE,h,s,u,h,h,B.n),h,h,h,B.en,B.bh,h,h,1/0)}m=B.d.gH(v)
l=B.d.dP(i.y,new C.dkC(m),new C.dkD(i))
k=C.hfH(m,i.a.c.a,i.r)
j=C.aR5(m)
u=A.m(14)
s=A.L(B.aT,B.r,1)
r=j===1?"":"s"
return A.q(h,A.x(A.a([D.fKn,A.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,B.p_,h,h,h),B.aw,A.d(C.ijn(m,i.a.c.a),h,h,h,h,h,h,B.VB,h,h,h),B.T,A.bJ(D.fRR,h,new C.dkE(i,l,m),h)],x.p),B.E,h,B.e,B.j,0,B.p),B.f,h,h,new A.p(B.bn,h,s,u,h,h,B.n),h,h,h,B.en,B.bh,h,h,1/0)},
bUX(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.fcj.q(0,d.a),l=A.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=A.EE(w[v])
t=B.i.D(u.d*0.58,0.12,0.3)
l.push(new A.rC(u.a,u.b,B.i.D(u.c*0.92,0,0.9),t).jd())}s=B.d.gH(w)
w=A.m(16)
t=A.m(18)
r=A.L(A.a_(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1)
q=x.V
p=A.a([new A.ab(0,B.G,A.a_(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.ip,12)],q)
o=x.p
o=A.a([new A.a5(100,n,A.as(A.X(d.e,B.c,n,n,n,64),n,n,n),n),A.E(new A.D(B.iP,A.x(A.a([A.A(A.a([A.E(A.d(d.b,n,n,n,n,n,n,B.jP,n,n,n),1)],o),B.l,n,B.e,B.j,0,n,n),B.aw,A.d(d.c,n,2,B.a2,n,n,n,B.pT,n,n,n)],o),B.E,n,B.ba,B.j,0,B.p),n),1)],o)
if(m)o.push(A.aI(n,n,n,n,D.c2_,n,n,n,new C.dkw(this,d),n,n,n,n,"Invite player",n))
o.push(new A.D(B.NW,A.q(n,D.c01,B.f,n,n,new A.p(A.a_(71,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),n,A.L(A.a_(B.i.V(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1.6),n,A.a([new A.ab(0,B.G,A.a_(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,10)],q),n,B.a6),n,44,n,n,n,n,n,44),n))
return A.aP(!1,w,!0,A.q(n,A.A(o,B.l,n,B.e,B.j,0,n,n),B.f,n,n,new A.p(n,n,r,t,p,new A.a8(B.aA,B.aF,B.x,l,n,n),B.n),n,92,n,B.en,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dkx(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.H,l=A.P(d).ax.a===B.H?B.nA:B.qm,k=m?B.iI.j(0.94):B.c.j(0.94),j=m?B.c:B.a_,i=m?B.iI:B.c,h=m?B.c.j(0.08):B.bl,g=m?B.c:B.a_,f=m?B.br:B.cd
if(!o.x)return C.aRE(n,l,A.as(A.n5(n,m?B.c:B.bd,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fPG(o.a.c)
return new C.Ot(o.a.w,w,!0,o.gaV0(),n)}w=A.aF(d,B.dS,x.w).w
v=A.m(12)
u=A.L(h,B.r,1)
t=x.V
s=A.a([],t)
if(!m)s.push(new A.ab(0,B.G,B.w.j(0.04),B.cL,12))
r=x.p
s=A.a([A.q(n,A.A(A.a([A.E(A.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,A.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,B.U,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new A.wl(new C.dkU(o,f,g),n,$.aT3(),n)],r),B.l,n,B.e,B.j,0,n,n),B.f,n,n,new A.p(i,n,u,v,s,n,B.n),n,n,n,n,B.a0j,n,n,1/0),B.W,o.c3h()],r)
v=o.y
B.d.v(s,new A.N(v,o.gbUW(),A.U(v).k("N<1,v>")))
w=A.ce(A.x(s,B.l,n,B.e,B.j,0,B.p),B.t,n,B.y,n,new A.R(14,w.r.b+78,14,24),n,n,B.ah)
s=A.m(35)
v=A.a([new A.ab(0,B.G,B.w.j(m?0.28:0.08),B.ip,15)],t)
u=A.L(m?B.c.j(0.1):B.bl,B.r,1)
t=A.aI(n,n,n,n,A.X(B.eM,j,n,n,n,18),n,n,n,o.gaV0(),n,n,n,n,n,n)
q=A.E(A.as(A.d("GAME CENTER",n,n,n,n,n,n,A.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,B.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=A.m(20)
return A.oO(!0,C.aRE(n,l,new A.an(B.a0,n,B.ac,B.f,A.a([w,A.ap(n,A.bm(!1,new A.D(B.O7,A.q(n,A.A(A.a([t,q,new A.D(B.iP,A.q(n,A.A(A.a([D.bY7,B.e8,C.as6(new C.dkV(o),B.l6,o.a.c.a)],r),B.l,n,B.e,B.P,0,n,n),B.f,n,n,new A.p(B.d1,n,n,p,n,n,B.n),n,n,n,n,B.h5,n,n,n),n)],r),B.l,n,B.e,B.j,0,n,n),B.f,n,n,new A.p(k,n,u,s,v,n,B.n),n,60,n,n,B.mZ,n,n,n),n),!0,!1,B.ag,!0,!0),n,n,0,0,0,n)],r),n)),new C.dkW(o),x.K)},
aV1(){var w,v
this.a.bv()
w=this.d
v=w>0?A.I(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
A.j1(w,v)}}
C.aF2.prototype={
S(){return new C.blZ()},
hH(d){return this.e.$1(d)},
bv(){return this.f.$0()},
aJi(){return this.r.$0()}}
C.blZ.prototype={
Y(){this.bze()
this.d=A.W7(this.a.d.bn)
$.tW=$.tW+1},
t(){C.b1v()
this.bzd()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&A.c()
return new C.aqI(v,new C.dYT(w),u,new C.dYU(w),new C.dYV(w,d),new C.dYW(w),null)}}
C.amI.prototype={
S(){return new C.aCc(new A.au(B.ax,$.ax()))},
hH(d){return this.x.$1(d)},
bv(){return this.y.$0()},
aJi(){return this.z.$0()}}
C.aCc.prototype={
Y(){this.byb()
this.a.toString
$.tW=$.tW+1},
t(){C.b1v()
var w=this.d
w.U$=$.ax()
w.P$=0
this.bya()},
a3b(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a3b=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.OD()
w=5
return A.b(C.ari(t.a.c),$async$a3b)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return A.b(C.h94(s,C.fPG(r.c),q),$async$a3b)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&B.a.i(r).length!==0){p=C.uz(s.d.bb,B.a.i(r))
if(p!=null&&C.aR5(p)<=0){t.c.L(x.q).f.T(D.aU8)
w=1
break}}o=A.cX(B.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.L(x.q).f.T(D.fjS)
w=1
break}m=A.M0(t.a.c.a,new C.dko(t))
if(m+0.001<n){t.c.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d("Not enough balance for this bet \u2014 you have $"+A.dF(m)+", the bet is $"+A.dF(n)+".",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aJi()
s=t.a
s.toString
r=B.o.u(1000*Date.now())
q=t.a
s.hH(new A.d7(r,q.c.a,n,B.kk,B.fv,"Game bet: "+q.f,null,null,B.cu,new A.V(Date.now(),0,!1)))
t.a.bv()
if(D.fc5.q(0,t.a.e)){s=t.c
s.toString
r=t.a
A.hy(s,new C.apz(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
A.hy(s,new C.amK(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$a3b,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=A.aI(o,o,o,o,B.HY,o,o,o,new C.dkr(d),o,o,o,o,o,o),k=p.a,j=A.d(k.f,o,o,o,o,o,o,B.cG,o,o,o),i=A.m(12),h=x.p
j=A.eJ(A.a([A.q(o,A.as(C.as6(new C.dks(p),B.iF,k.c.a),o,o,o),B.f,o,o,new A.p(B.d1,o,o,i,o,o,B.n),o,o,o,D.bBP,B.f5,o,o,o)],h),o,o,!0,!0,D.a_g,o,1,o,o,o,!1,o,!1,B.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=A.m(16)
i=A.L(B.aT,B.r,1)
k=A.X(D.bP2,D.bvu,o,o,o,28)
w=p.a
v=A.d(w.f,o,o,o,o,o,o,B.ne,o,o,o)
w=A.d(w.r,o,o,o,o,o,o,B.p_,o,o,o)
u=A.a_(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.m(12)
s=x.a3
s=A.C(new A.N(A.a([2,5,10,25],x.t),new C.dkt(p),s),s.k("ak.E"))
s=A.A(s,B.l,o,B.e,B.j,0,o,o)
r=A.a_(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.q(o,A.x(A.a([D.h2A,B.W,s,B.T,A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.d,o,o,o,o,o,2,A.bz(o,new A.b6(4,A.m(10),B.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,B.lV,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.e5,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,B.dk,!0,B.a5,o,B.ao,o,o,o,o)],h),B.l,o,B.e,B.j,0,B.p),B.f,o,o,new A.p(u,o,o,t,o,o,B.n),o,o,o,o,B.bV,o,o,1/0)
u=A.m(12)
r=A.L(A.a_(102,B.a7f.l()>>>16&255,B.a7f.l()>>>8&255,B.a7f.l()&255),B.r,1)
s=A.a_(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
q=A.m(10)
q=A.q(o,A.x(A.a([D.fJL,A.d("+ $"+B.i.ad(n*0.46,2),o,o,o,o,o,o,D.fzC,o,o,o),A.d("(46% return on $"+B.i.ad(p.e,2)+" bet)",o,o,o,o,o,o,B.pT,o,o,o)],h),B.l,o,B.e,B.j,0,B.p),B.f,o,o,new A.p(s,o,o,q,o,o,B.n),o,o,o,o,B.cn,o,o,1/0)
s=A.a_(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
n=A.m(10)
u=A.q(o,A.x(A.a([D.fSS,B.T,q,B.T,A.q(o,A.x(A.a([D.fED,A.d("$"+B.i.ad(m,2),o,o,o,o,o,o,D.foi,o,o,o),A.d("8 pairs \xd7 $"+B.i.ad(m,2)+" each",o,o,o,o,o,o,B.pT,o,o,o)],h),B.l,o,B.e,B.j,0,B.p),B.f,o,o,new A.p(s,o,o,n,o,o,B.n),o,o,o,o,B.cn,o,o,1/0)],h),B.l,o,B.e,B.j,0,B.p),B.f,o,o,new A.p(D.br0,o,r,u,o,o,B.n),o,o,o,o,B.bV,o,o,1/0)
r=A.ft(o,o,B.bd,o,o,o,o,o,o,B.c,o,B.h8,o,o,o,o,o,o,o,o)
return C.aRE(j,D.a_g,A.ce(A.q(o,A.x(A.a([k,B.aw,v,B.bG,w,B.W,t,B.T,u,B.W,new A.a5(1/0,o,A.io(A.d("Start Game ($"+B.i.ad(p.e,2)+")",o,o,o,o,o,o,B.ci,o,o,o),p.gcBT(),r),o)],h),B.l,o,B.e,B.j,0,B.p),B.f,o,o,new A.p(o,o,i,l,o,D.c8a,B.n),o,o,o,o,B.f_,o,o,1/0),B.t,o,B.y,o,A3.a0n,o,o,B.ah))}}
C.amK.prototype={
S(){var w=x.s,v=x.t,u=x.S
return new C.aCe(B.cQ,new A.au(B.ax,$.ax()),A.a([],w),A.a([],x.d4),A.a([],w),A.a([],w),A.a([],v),A.a([],v),A.a([],v),A.aR(u),A.aR(u),A.a([],v),A.a([],v),A.a([],v))},
hH(d){return this.y.$1(d)},
bv(){return this.z.$0()}}
C.aCe.prototype={
ghO(){var w=this.a.Q
return w!=null&&B.a.i(w).length!==0},
rO(d){return this.bT4(d)},
bT4(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$rO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.AI()
r=t.Pc()
w=s<=0?3:4
break
case 3:w=5
return A.b(t.ac6(d),$async$rO)
case 5:w=1
break
case 4:q=B.i.D(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return A.b(t.uw(d),$async$rO)
case 9:w=7
break
case 8:w=10
return A.b(t.F5(q,s,r),$async$rO)
case 10:case 7:case 1:return A.h(u,v)}})
return A.i($async$rO,v)},
FH(d,e,f,g){return this.czB(d,e,f,g)},
czB(d,e,f,g){var w=0,v=A.j(x.H),u,t=this,s
var $async$FH=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return A.b(C.bGn(s,C.bG3(),C.hhE(),d,e,f,g),$async$FH)
case 3:case 1:return A.h(u,v)}})
return A.i($async$FH,v)},
AI(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.b5f(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&A.c()
return u+C.aiL(t,s.e.a.a)
case"memory":return s.ghO()&&D.nb.q(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.aAn()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bn
case"color":return s.bb
case"reflex":return s.a0
default:u=s.b6
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
aAn(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
Pc(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&A.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.hfL()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.b6
if(w!=null)return w.b
return 1}},
bz(d){var w,v,u=this
u.bJ(d)
if(u.f||u.c8)return
w=u.a
v=C.fPL(w.e,w.d.y2)
if(v!==C.fPL(d.e,d.d.y2)&&u.c!=null)u.m(new C.dmg(u,v))},
Y(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.byf()
w=i.a
w.toString
$.tW=$.tW+1
i.Q=C.fPL(w.e,w.d.y2)
i.b85()
i.adr()
if(i.ghO()){i.c8=!0
i.cP="Connecting to match\u2026"
i.cj="Both players enter the room together \u2014 play starts at the same time."
i.Py()
i.ad3()
i.bm=A.df(B.h_,new C.dmj(i))}if(B.d.q(D.Se,i.a.e)){w=i.ghO()
v=i.a
if(w){w=v.d.bb
v=v.Q
v.toString
u=C.uz(w,v)
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
m=s.b(t.h(u,h))?A.a2(s.a(t.h(u,h)),o,n):A.T(o,n)
s=p===r
l=s?q:r
if(s){o=m.h(0,"player2Name")
if(o==null)o=m.h(0,"playerOName")
t=o==null?t.h(u,"toName"):o
k=B.a.i(J.k(t==null?"":t))}else{o=m.h(0,"player1Name")
if(o==null)o=m.h(0,"playerXName")
t=o==null?t.h(u,"fromName"):o
k=B.a.i(J.k(t==null?"":t))}w=new C.b1t(!1,w,k.length===0||B.a.q(k,"@")?C.hfH(u,v,null):k,p,l,s)}else{w=w.c
w=C.h98(w.c,w.a)}w=i.bK=w}else{w=v.c
w=i.bK=C.h98(w.c,w.a)}v=C.hXP()
v.brU(i.a.e,i.d,w)
i.b6=v
i.r=v.c
if(i.ghO()){w=i.a
v=w.d.bb
w=w.Q
w.toString
u=C.uz(v,w)
m=u==null?null:J.t(u,h)
if(x.f.b(m)){w=i.b6
w.toString
w.bdw(i.a.e,A.a2(m,x.N,x.z),i.a.c.a)
w=i.b6
i.r=w.c
if(w.e){if(w.r)j=D.TG
else j=w.f===!0?D.r_:D.Jh
i.AK(j)}}}i.b8=A.df(B.mW,new C.dmk(i))
if(i.ghO())i.bf=A.df(B.mV,new C.dml(i))}if(i.ghO()&&!B.d.q(D.Se,i.a.e))i.bf=A.df(B.mV,new C.dmm(i))
i.as=A.df(B.fJ,new C.dmn(i))},
Py(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Py=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghO()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.uz(s.d.bb,q)
w=p!=null?3:4
break
case 3:w=5
return A.b(C.bEm(p,t.a.c.a),$async$Py)
case 5:o=e
if(t.c!=null)t.m(new C.dlw(t,o))
w=1
break
case 4:w=6
return A.b(C.LS(q,t.a.d.bb,!1),$async$Py)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return A.b(C.bEm(n,t.a.c.a),$async$Py)
case 7:o=e
if(t.c!=null)t.m(new C.dlx(t,o))
case 1:return A.h(u,v)}})
return A.i($async$Py,v)},
ak_(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$ak_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghO()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.LS(r,s.d.bb,!1),$async$ak_)
case 3:q=e
if(q==null||t.c==null){w=1
break}p=J.t(q,"sessionState")
if(!x.f.b(p)){w=1
break}o=A.a2(p,x.N,x.z)
if(t.a.e==="memory"){s=t.go
r=s.a
n=t.id
m=n.a
l=t.fx
t.aPK(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=B.i.M(j)
else{h=j==null?null:J.k(j)
i=A.ca(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)B.d.br(t.fy,new C.dm_(t))
if(i!=null&&t.fr.length!==0){s=A.C(t.dy,x.S)
B.d.v(s,t.dy)
r=new A.e2()
r.cY(i)
B.d.e0(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.m(new C.dm0())}case 1:return A.h(u,v)}})
return A.i($async$ak_,v)},
ad3(){var w=0,v=A.j(x.H),u=this
var $async$ad3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.a1t(!0),$async$ad3)
case 2:return A.h(null,v)}})
return A.i($async$ad3,v)},
a1t(d){return this.coT(d)},
coS(){return this.a1t(!1)},
coT(b3){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$a1t=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghO()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
if(q.length===0){w=1
break}p=B.a.i(s.c.a.toLowerCase())
w=3
return A.b(C.LS(q,s.d.bb,b3),$async$a1t)
case 3:o=b5
if(o==null)o=C.uz(t.a.d.bb,q)
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
j=s.b(l)?A.a2(l,r,k):A.T(r,k)
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
d=s.b(e)?A.a2(e,r,k):A.T(r,k)
a0=j.h(0,"readyAt")
a1=s.b(a0)?A.a2(a0,r,k):A.T(r,k)
a2=new A.V(Date.now(),0,!1).aa()
if(b3){d.n(0,p,!0)
a1.n(0,p,a2.ag())}if(i&&!d.al(0,h))d.n(0,h,!1)
if(f&&!d.al(0,g))d.n(0,g,!1)
s=!1
if(i)if(J.z(d.h(0,h),!0)){s=a1.h(0,h)
s=J.k(s==null?"":s).length===0}if(s)a1.n(0,h,a2.ag())
s=!1
if(f)if(J.z(d.h(0,g),!0)){s=a1.h(0,g)
s=J.k(s==null?"":s).length===0}if(s)a1.n(0,g,a2.ag())
j.n(0,"inGame",d)
j.n(0,"readyAt",a1)
b2.a=null
s=j.h(0,"startAt")
a3=J.k(s==null?"":s)
if(a3.length!==0){s=A.bh(a3)
a4=s==null?null:s.bT()
b2.a=a4
s=a4}else s=null
a5=i&&f&&J.z(d.h(0,h),!0)&&J.z(d.h(0,g),!0)
if(a5&&s==null){if(i){r=a1.h(0,h)
r=A.bh(J.k(r==null?"":r))
a6=r==null?null:r.bT()}else a6=null
if(f){r=a1.h(0,g)
r=A.bh(J.k(r==null?"":r))
a7=r==null?null:r.bT()}else a7=null
if(a6!=null&&a7!=null){a8=(a6.ca(a7)?a6:a7).bR(5e5)
if(!new A.V(Date.now(),0,!1).d3(a8)){a4=b2.a=a8.bR(4e6)
j.n(0,"startAt",a4.aa().ag())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.n(0,"memorySeed",B.o.F(1000*Date.now(),2147483647))
j.n(0,"memoryMatched",A.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.n(0,"patternSeed",B.o.F(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.ioy(t.a.d.bb,q,j)
t.a.bv()}if(t.c==null){w=1
break}b0=t.bF
if(b0==null)b0="your opponent"
if(!a5){t.m(new C.dlM(b2,t,b0))
w=1
break}if(s==null){t.m(new C.dlN(t))
w=1
break}b1=new A.V(Date.now(),0,!1)
if(b1.d3(s)){s=s.bD(b1).a
r=B.o.aq(s,1e6)
t.m(new C.dlO(b2,t,r+(B.o.F(B.o.aq(s,1000),1000)>0?1:0)))
w=1
break}if(t.c8){t.m(new C.dlP(b2,t))
b2=t.a.e
if(b2==="pattern")t.a9U()
else if(b2==="memory"){t.b84()
if(t.c!=null)t.m(new C.dlQ())}}b2=t.bm
if(b2!=null)b2.a1(0)
t.bm=null
case 1:return A.h(u,v)}})
return A.i($async$a1t,v)},
aQH(d){var w,v,u,t,s=this
if(d!=null){w=new A.e2()
w.cY(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e4(v,x.S)
for(t=0;t<v;++t)u[t]=w.az(9)
s.ry=u
s.x1=0
s.to=-1},
aQG(){return this.aQH(null)},
a9U(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a9U=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ghO()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.cml()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return A.b(C.LS(q,s.d.bb,!1),$async$a9U)
case 5:r=t.b41(e)
case 4:if(t.c==null){w=1
break}t.aQH(r)
t.m(new C.dkZ(t))
t.Ei()
case 1:return A.h(u,v)}})
return A.i($async$a9U,v)},
b41(d){var w,v,u,t=null
if(d==null)return t
w=J.t(d,"sessionState")
if(!x.f.b(w))return t
v=J.t(w,"patternSeed")
if(typeof v=="number")return B.i.M(v)
u=v==null?t:J.k(v)
return A.ca(u==null?"":u,t)},
cml(){var w=this.a,v=w.Q
if(v==null)return null
return this.b41(C.uz(w.d.bb,v))},
adr(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$adr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$adr)
case 3:r=e
q=t.a
p=q.e
q=B.a.i(q.c.a.toLowerCase())
s=A.el(J.t(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.m(new C.dlv(t,s))
case 1:return A.h(u,v)}})
return A.i($async$adr,v)},
pu(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n
var $async$pu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$pu)
case 2:p=e
o=u.a
n=o.e
o=B.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bGR().length
else s=n==="typing"?50:105
if(n==="typing")r=B.o.F(u.at+5,s)
else{q=u.at
r=t?B.o.F(q+6,s):B.o.F(q+1,s)}w=3
return A.b(p.aC("Int","ngmy_game_"+n+"_"+o,r),$async$pu)
case 3:u.at=r
return A.h(null,v)}})
return A.i($async$pu,v)},
a3t(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a3t=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghO()||t.b6==null||t.f||t.aP){w=1
break}if(t.c8){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.LS(r,s.d.bb,!1),$async$a3t)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.bb
s=s.Q
s.toString
p=C.uz(r,s)
s=p==null
if(!s){r=J.cC(p)
r.a8(p)
r.v(p,q)}r=J.a7(q)
o=r.h(q,"sessionState")
if(!x.f.b(o)){w=1
break}n=A.a2(o,x.N,x.z)
r=r.h(q,"sessionUpdatedAt")
m=A.bh(J.k(r==null?"":r))
s=s?null:J.t(p,"sessionUpdatedAt")
l=A.bh(J.k(s==null?"":s))
if(m!=null&&l!=null&&!m.ca(l)){w=1
break}s=t.b6
s.toString
r=t.a
s.bdw(r.e,n,r.c.a)
r=t.b6
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.TG
else k=r.f===!0?D.r_:D.Jh
w=7
return A.b(t.AK(k),$async$a3t)
case 7:w=5
break
case 6:if(t.c!=null)t.m(new C.dm1())
case 5:case 1:return A.h(u,v)}})
return A.i($async$a3t,v)},
ahS(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$ahS=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghO()||q.b6==null||q.a.Q==null||q.aP){w=1
break}q.aP=!0
t=3
o=q.b6
o.toString
p=o.cS6(q.a.e)
o=q.a
n=o.d.bb
o=o.Q
o.toString
w=6
return A.b(C.aRZ(n,o,p),$async$ahS)
case 6:q.a.bv()
r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
q.aP=!1
w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahS,v)},
AK(d){return this.c_q(d)},
c_q(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$AK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(t.f||t.b6==null){w=1
break}s=t.b6.w
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
return A.b(t.JQ(s,s),$async$AK)
case 9:w=4
break
case 6:w=10
return A.b(t.YH(s,s),$async$AK)
case 10:w=4
break
case 7:w=11
return A.b(t.ac5(s,s),$async$AK)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghO()?12:13
break
case 12:w=14
return A.b(t.Il(),$async$AK)
case 14:case 13:case 1:return A.h(u,v)}})
return A.i($async$AK,v)},
a0r(d,e){return this.cgI(d,e)},
cgI(d,e){var w=0,v=A.j(x.H),u,t=this
var $async$a0r=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=t.ghO()?3:5
break
case 3:w=6
return A.b(t.ahS(),$async$a0r)
case 6:if(d===D.qZ){w=1
break}w=4
break
case 5:if(d===D.qZ){w=1
break}case 4:w=7
return A.b(t.AK(d),$async$a0r)
case 7:case 1:return A.h(u,v)}})
return A.i($async$a0r,v)},
adk(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$adk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghO()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.uz(s.d.bb,q)
if(p==null){w=1
break}o=B.a.i(t.a.c.a.toLowerCase())
n=J.t(p,"sessionState")
s=x.f
if(!s.b(n)){w=1
break}r=x.N
m=x.z
l=A.a2(n,r,m)
k=l.h(0,"inGame")
j=s.b(k)?A.a2(k,r,m):A.T(r,m)
j.n(0,o,!1)
l.n(0,"inGame",j)
l.W(0,"startAt")
w=3
return A.b(C.aRZ(t.a.d.bb,q,l),$async$adk)
case 3:t.a.bv()
case 1:return A.h(u,v)}})
return A.i($async$adk,v)},
Il(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Il=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghO()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.uz(s.d.bb,q)
if(p==null){w=1
break}o=J.t(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?A.a2(o,s,r):A.T(s,r)
n.n(0,"gameOver",!0)
C.hid(t.a.d.bb,q,n)
C.isz(t.a.d.bb,q)
w=3
return A.b(C.aiA(t.a.d.bb),$async$Il)
case 3:t.a.bv()
case 1:return A.h(u,v)}})
return A.i($async$Il,v)},
t(){var w,v=this
if(v.ghO()&&!v.f)v.adk()
else if(!v.f)v.c63()
C.b1v();++v.RG
w=v.as
if(w!=null)w.a1(0)
w=v.b8
if(w!=null)w.a1(0)
w=v.cx
if(w!=null)w.a1(0)
w=v.bf
if(w!=null)w.a1(0)
w=v.bm
if(w!=null)w.a1(0)
w=v.e
w.U$=$.ax()
w.P$=0
v.bye()},
cF9(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&A.c()
v=v<=0||w.b6==null}if(v)return
if(w.c8)return
v=w.b6
v.toString
w.a.toString
if(v.a>=v.b){w.uw("Goal completed!")
return}v=++w.rx
if(v%5===0)w.m(new C.dma())},
b85(){var w,v,u,t,s,r=this
r.x=A.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e4(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b84()
break
case"scramble":r.bn=0
r.b86()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=B.o.F(r.at,50)
v=J.e4(5,x.N)
for(t=0;t<5;++t)v[t]=D.dvC[B.o.F(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bP(0,B.cf)
break
case"math":r.y2=0
r.b83()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b87()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e4(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
B.d.e0(v,s)
if(!r.cri()){w=J.e4(9,w)
for(u=0;u<9;++u)w[u]=u
B.d.e0(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
B.d.a8(w)
w.push(r.d.az(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.Rl()
break
case"pattern":if(r.ghO()){r.ry=A.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aQG()
w=A.w(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Ei()}break
case"color":r.bb=0
r.b7Z()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.a0=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b9k()
break
default:if(B.d.q(D.Se,w)){w=r.b6
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
b5f(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
cri(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return B.o.F(v,2)===0},
b87(){var w,v,u,t,s,r=this,q=B.o.F(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e4(o,x.S)
for(w=0;w<o;w=v){v=w+1
n[w]=B.i.M(Math.pow(p,v))}u=B.i.M(Math.pow(p,o))
r.w=B.o.u(u)
r.aG=B.d.aO(n,", ")
q=r.w
t=x.s
s=A.a([B.o.u(u+p),B.o.u(u-p),B.o.u(u+p*2)],t)
t=A.a([q],t)
B.d.v(t,s)
B.d.e0(t,r.d)
r.x=t},
b83(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bGR().length-6)u.at=0
w=$.bGR()
v=w[B.o.F(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b86(){var w=this,v=w.w=D.d70[B.o.F(w.at+w.bn,105)]
w.ax=C.isQ(v)
w.ay=A.c0(v.length,null,!1,x.T)
w.ch=A.a(w.ax.split(""),x.s)
w.e.bP(0,B.cf)},
b9k(){var w=this,v=w.cx
if(v!=null)v.a1(0)
w.y=!1
w.z=null
w.cx=A.cy(A.dw(0,0,0,120+w.d.az(280),0,0),new C.dlZ(w))},
c_t(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.rO("Too early \u2014 paid for "+t.a0+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=B.o.aq(new A.V(v,0,!1).bD(u).a,1000)}if(w<520){t.m(new C.dlt(t))
v=t.a0
if(v>=5){t.pu()
t.uw("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b9k()
t.m(new C.dlu())}}else t.rO("Too slow ("+w+"ms) \u2014 paid for "+t.a0+"/5.")},
cEo(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=B.d.bj(t.ay,new C.dm5())
if(u<0)return
t.m(new C.dm6(t,u,v,d))},
cEp(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.m(new C.dm7(u,d,v))},
bJU(){var w,v,u=this
if(u.f)return
if(B.d.aV(u.ay,new C.dl_())){u.c.L(x.q).f.T(D.fjM)
return}w=B.d.he(u.ay)
v=u.w
v===$&&A.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.m(new C.dl0(u))
if(u.ghO()&&D.nb.q(0,u.a.e))u.a1I()
if(u.bn>=5){u.pu()
if(u.ghO()&&D.nb.q(0,u.a.e))u.ni(!0)
else u.uw("All 5 words unscrambled!")}else{u.b86()
u.r="Word "+(u.bn+1)+" of 5 \u2014 place letters in order"
u.m(new C.dl1())}}else u.rO("Wrong word \u2014 paid for "+u.bn+"/5.")},
b7Z(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=B.o.F(w.at+w.bb*11,4),t=v[w.d.az(4)]
w.aH=t
w.aL=v[u]
w.aR=[B.dQ,B.dL,B.im,B.tk][u]
w.w=t},
aPK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=B.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a8(0)
w=h.id
w.a8(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=A.aR(x.S)
for(s=J.i1(v),s=s.gae(s),r=x.j;s.C();){q=s.gR(s)
p=B.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aT(r.b(o)?o:B.cr),n=p===g;q.C();){m=q.gR(q)
l=typeof m=="number"?B.i.M(m):A.ca(J.k(m),null)
if(l==null)continue
t.J(0,l)
if(n)w.J(0,l)}}f.v(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aT(k);w.C();){m=w.gR(w)
l=typeof m=="number"?B.i.M(m):A.ca(J.k(m),null)
if(l!=null)f.J(0,l)}}h.k2=B.i.bh(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=A.aJ(J.t(j,g))
i=f==null?null:B.i.M(f)
if(i!=null)h.fx=i}},
b84(){var w,v,u,t,s,r,q,p=this
p.fx=p.k2=0
p.go.a8(0)
p.id.a8(0)
p.fy=A.a([],x.t)
p.k1=!1
w=A.C(p.dy,x.S)
B.d.v(w,p.dy)
p.fr=w
if(p.ghO()&&p.a.Q!=null){w=p.a
v=w.d.bb
w=w.Q
w.toString
u=C.uz(v,w)
t=u==null?null:J.t(u,"sessionState")
w=x.N
v=x.z
s=x.f.b(t)?A.a2(t,w,v):A.T(w,v)
r=s.h(0,"memorySeed")
if(typeof r=="number")q=B.i.M(r)
else{w=r==null?null:J.k(r)
q=A.ca(w==null?"":w,null)}w=p.fr
if(q!=null){v=new A.e2()
v.cY(q)
B.d.e0(w,v)}else B.d.e0(w,p.d)
p.aPK(s)}else B.d.e0(p.fr,p.d)},
coc(d){var w,v,u,t=this
if(t.c8)return
if(t.f||t.k1||t.go.q(0,d)||B.d.q(t.fy,d))return
t.m(new C.dlF(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.m(new C.dlG(t,v,u))
if(t.ghO()&&D.nb.q(0,t.a.e))t.a1I()
if(t.go.a>=t.fr.length){t.pu()
if(t.ghO()&&D.nb.q(0,t.a.e))t.ni(!0)
else t.aAq()}return}t.k1=!0
A.bQ(D.bAN,new C.dlH(t),x.c)},
b7s(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&A.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.m(new C.dlR(u))
if(u.y1>=5){u.pu()
u.uw("All 5 questions correct!")}else{u.b87()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.m(new C.dlS())}}else u.rO(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.m(new C.dlT(u))
if(u.y2>=6){u.pu()
u.uw("All 6 math questions correct!")}else{u.b83()
u.r="Question "+(u.y2+1)+" of 6"
u.m(new C.dlU())}}else{u.WG(u.y2+1)
u.rO(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.m(new C.dlV(u))
if(u.bb>=5){u.pu()
u.uw("All 5 color rounds correct!")}else{u.b7Z()
u.r="Round "+(u.bb+1)+" of 5 \u2014 tap the COLOR of the text"
u.m(new C.dlW())}}else u.rO("Wrong color \u2014 paid for "+u.bb+"/5.")
return}if(v){u.pu()
u.aAq()}else u.c.L(x.q).f.T(D.fkw)},
cEn(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=B.d.co(q.k4,0)
v=B.o.aq(d,3)
u=B.o.F(d,3)
t=B.o.aq(w,3)
s=B.o.F(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.m(new C.dm4(q,d,w))
if(B.d.he(q.k4)==="123456780"){q.pu()
q.aAq()}}},
Rl(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Rl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.m(new C.dlI(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.dlJ(t,q).$0()
t.c.eo()
w=6
return A.b(A.bQ(B.kT,null,r),$async$Rl)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.dlK(t).$0()
t.c.eo()
w=7
return A.b(A.bQ(B.k0,null,r),$async$Rl)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.m(new C.dlL(t))
case 1:return A.h(u,v)}})
return A.i($async$Rl,v)},
cEq(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.rO("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.m(new C.dm8(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.pu()
u.uw("Perfect Simon run!")
return}u.m(new C.dm9(u))
u.Rl()}},
Ei(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ei=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.m(new C.dl2(t))
s=x.H
w=3
return A.b(A.bQ(B.jo,null,s),$async$Ei)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.dl3(t,o).$0()
t.c.eo()
w=7
return A.b(A.bQ(B.a_Z,null,s),$async$Ei)
case 7:if(t.c==null){w=1
break}new C.dl4(t).$0()
t.c.eo()
w=8
return A.b(A.bQ(B.iN,null,s),$async$Ei)
case 8:case 5:r.length===q||(0,A.J)(r),++p
w=4
break
case 6:if(t.c!=null)t.m(new C.dl5(t))
case 1:return A.h(u,v)}})
return A.i($async$Ei,v)},
WG(d){return this.bEv(d)},
bEv(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$WG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return A.b(A.aA(),$async$WG)
case 3:s=f
r=t.a
q=r.e
r=B.a.i(r.c.a.toLowerCase())
p=$.bGR().length
o=B.o.F(t.at+d,p)
w=4
return A.b(s.aC("Int","ngmy_game_"+q+"_"+r,o),$async$WG)
case 4:t.at=o
case 1:return A.h(u,v)}})
return A.i($async$WG,v)},
cEl(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.rO("Wrong tile \u2014 paid for "+v.aAn()+"/"+C.hfL()+" moves.")
return}v.m(new C.dm2(v,w))
if(v.ghO()&&D.nb.q(0,v.a.e))v.a1I()
if(v.x1>=w)if(v.x2>=7){v.pu()
if(v.ghO()&&D.nb.q(0,v.a.e))v.ni(!0)
else v.uw("All 7 pattern rounds correct!")}else{v.m(new C.dm3(v))
v.Ei()}},
JQ(d,e){return this.cmC(d,e)},
uw(d){return this.JQ(null,d)},
aAq(){return this.JQ(null,null)},
cmC(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$JQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a1(0)
s=t.b8
if(s!=null)s.a1(0)
r=t.a.x*1.46
t.m(new C.dlD(t,r))
q=B.o.u(1000*Date.now())
s=t.a
p=new A.d7(q,s.c.a,r,B.h2,B.fv,"Game payout: "+s.f,null,null,B.cu,new A.V(Date.now(),0,!1))
A.aiw(p,!0)
t.a.hH(p)
t.a.bv()
o=e==null?"+$"+B.i.ad(r,2)+" added to your balance!":e
s=t.a
C.ve(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.FH(d,o,"YOU WIN!",!0),$async$JQ)
case 3:w=4
return A.b(C.aio(t.a.f,o),$async$JQ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$JQ,v)},
FF(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$FF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghO()&&D.nb.q(0,t.a.e)?3:4
break
case 3:w=5
return A.b(t.cyF(),$async$FF)
case 5:w=1
break
case 4:s=t.AI()
r=t.Pc()
w=r<=0||s<=0?6:7
break
case 6:w=8
return A.b(t.ac6("Time's up \u2014 no progress to pay."),$async$FF)
case 8:w=1
break
case 7:q=B.i.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return A.b(t.uw("Complete! Max payout earned."),$async$FF)
case 12:w=10
break
case 11:w=13
return A.b(t.F5(q,s,r),$async$FF)
case 13:case 10:case 1:return A.h(u,v)}})
return A.i($async$FF,v)},
Rs(d){return this.cqY(d)},
a1I(){return this.Rs(!1)},
cqY(b1){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$Rs=A.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghO()&&D.nb.q(0,r.a.e))||r.a.Q==null){w=1
break}if(!b1){a1=new A.V(Date.now(),0,!1)
a2=r.bH
if(a2!=null&&a1.bD(a2).a<3e6){w=1
break}r.bH=a1}a2=r.a
a3=a2.Q
a3.toString
q=B.a.i(a3)
if(J.ad(q)===0){w=1
break}t=4
p=B.a.i(a2.c.a.toLowerCase())
a4=C.uz(a2.d.bb,q)
w=a4==null?7:9
break
case 7:w=10
return A.b(C.LS(q,r.a.d.bb,!1),$async$Rs)
case 10:w=8
break
case 9:b3=a4
case 8:o=b3
if(o==null){w=1
break}n=J.t(o,"sessionState")
a2=x.f
a3=x.N
a5=x.z
m=a2.b(n)?A.a2(n,a3,a5):A.T(a3,a5)
l=J.t(m,"scores")
k=a2.b(l)?A.a2(l,a3,a5):A.T(a3,a5)
J.aK(k,p,r.AI())
J.aK(m,"scores",k)
if(r.a.e==="memory"){j=J.t(m,"memoryMatchedBy")
i=a2.b(j)?A.a2(j,a3,a5):A.T(a3,a5)
a6=r.id
a6=A.C(a6,A.a4(a6).k("ch.E"))
B.d.ff(a6)
J.aK(i,p,a6)
J.aK(m,"memoryMatchedBy",i)
h=A.aR(x.S)
for(a6=i,a6=new A.dq(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aT(g);a8.C();){f=a8.gR(a8)
e=typeof f=="number"?B.i.M(f):A.ca(J.k(f),null)
if(e!=null)J.c7(h,e)}}a6=h
a6=A.C(a6,A.a4(a6).k("ch.E"))
B.d.ff(a6)
J.aK(m,"memoryMatched",a6)}d=J.t(m,"wagers")
a0=a2.b(d)?A.a2(d,a3,a5):A.T(a3,a5)
J.aK(a0,p,r.a.x)
J.aK(m,"wagers",a0)
w=11
return A.b(C.aRZ(r.a.d.bb,q,m),$async$Rs)
case 11:r.a.bv()
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
return A.i($async$Rs,v)},
ni(d){return this.cyG(d)},
cyF(){return this.ni(!1)},
cyG(b5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$ni=A.e(function(b6,b7){if(b6===1)return A.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghO()||t.a.Q==null?3:4
break
case 3:w=5
return A.b(t.FF(),$async$ni)
case 5:w=1
break
case 4:w=6
return A.b(t.Rs(!0),$async$ni)
case 6:s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=B.a.i(s.c.a.toLowerCase())
w=7
return A.b(C.LS(q,s.d.bb,!0),$async$ni)
case 7:o=b7
n=t.Pc()
w=o==null?8:9
break
case 8:m=B.i.D(t.AI()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return A.b(t.ac6("Time's up \u2014 no progress to pay."),$async$ni)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return A.b(t.uw("Complete! Max payout earned."),$async$ni)
case 17:w=15
break
case 16:w=18
return A.b(t.F5(m,t.AI(),n),$async$ni)
case 18:case 15:case 11:w=19
return A.b(t.Il(),$async$ni)
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
g=s.b(i)?A.a2(i,r,h):A.T(r,h)
f=g.h(0,"scores")
e=s.b(f)?A.a2(f,r,h):A.T(r,h)
d=A.aJ(e.h(0,p))
a0=d==null?null:B.i.M(d)
if(a0==null)a0=t.AI()
d=A.aJ(e.h(0,j))
a1=d==null?null:B.i.M(d)
if(a1==null)a1=0
a2=B.i.D(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return A.b(t.ac6("Time's up \u2014 no progress to pay."),$async$ni)
case 22:w=23
return A.b(t.Il(),$async$ni)
case 23:w=1
break
case 21:a3=g.h(0,"wagers")
r=A.aJ((s.b(a3)?A.a2(a3,r,h):A.T(r,h)).h(0,j))
a4=r==null?null:r
if(a4==null)a4=0
if(a0===a1)a5=""
else a5=a0>a1?p:j
a6=a0>=n?1:a2
s=a5===p
a7=s&&a4>0?a4*a6:0
t.f=!0;++t.RG
r=t.as
if(r!=null)r.a1(0)
r=t.b8
if(r!=null)r.a1(0)
a8=t.a.x*1.46*a2
a9=a8+a7
t.m(new C.dlX(t,a8,a2))
r=t.a
r.toString
h=B.o.u(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+B.i.ad(a7,2):d+" ("+b1+"/"+b2+")"
r.hH(new A.d7(h,b0,a9,B.h2,B.fv,d,null,null,B.cu,new A.V(Date.now(),0,!1)))
t.a.bv()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+B.i.ad(a9,2)+" (includes opponent bonus $"+B.i.ad(a7,2)+")":"+$"+B.i.ad(a8,2)+" (your progress payout)"
s=t.a
C.ve(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return A.b(t.FH(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$ni)
case 24:w=25
return A.b(t.Il(),$async$ni)
case 25:case 1:return A.h(u,v)}})
return A.i($async$ni,v)},
F5(d,e,f){return this.cmA(d,e,f)},
cmA(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$F5=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a1(0)
s=t.b8
if(s!=null)s.a1(0)
r=t.a.x*1.46*d
t.m(new C.dlB(t,r,d))
s=B.o.u(1000*Date.now())
q=t.a
p=new A.d7(s,q.c.a,r,B.h2,B.fv,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,B.cu,new A.V(Date.now(),0,!1))
A.aiw(p,!0)
t.a.hH(p)
t.a.bv()
if(t.c==null){w=1
break}o=B.i.V(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&A.c()
m=q+C.aiL(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?B.d.cG(t.cy,0,new C.dlC()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+B.i.ad(r,2)+" ("+n+"% \u2014 "+A.w(k)+" mistakes/missed)":"+$"+B.i.ad(r,2)+" ("+n+"% of full prize)"
q=t.a
C.ve(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return A.b(t.FH(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$F5)
case 3:w=4
return A.b(C.aio(t.a.f,j),$async$F5)
case 4:case 1:return A.h(u,v)}})
return A.i($async$F5,v)},
c63(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.AI()
v=o.Pc()}catch(u){return}if(v<=0||w<=0)return
t=B.i.D(w/v,0,1)
s=A.oo(B.i.ad(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=B.o.u(1000*Date.now())
p=o.a
r.hH(new A.d7(q,p.c.a,s,B.h2,B.fv,"Game partial: "+p.f+" ("+A.w(w)+"/"+A.w(v)+", left early)",n,n,B.cu,new A.V(Date.now(),0,!1)))
o.a.bv()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.ve(s,n,"Left early \xb7 +$"+B.i.ad(s,2)+" ("+A.w(w)+"/"+A.w(v)+")",q,r,p,n,!0)},
ac5(d,e){return this.bUR(d,e)},
bUR(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ac5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a1(0)
s=t.b8
if(s!=null)s.a1(0)
r=B.o.u(1000*Date.now())
s=t.a
q=s.c.a
p=s.x
s=s.f
o=Date.now()
t.a.hH(new A.d7(r,q,p,B.h2,B.fv,"Game payout: "+s+" (draw, stake returned)",null,null,B.cu,new A.V(o,0,!1)))
t.a.bv()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.ve(o,null,"Draw. Your $"+B.i.ad(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.FH(d,"Nobody won, so your $"+B.i.ad(t.a.x,2)+" stake was returned.","DRAW",!1),$async$ac5)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ac5,v)},
YH(d,e){return this.bUS(d,e)},
ac6(d){return this.YH(null,d)},
bUS(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$YH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a1(0)
s=t.b8
if(s!=null)s.a1(0)
s=t.a
r=s.c.a
q=s.f
s=s.x
C.ve(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return A.b(t.FH(d,e,"YOU LOSE",!1),$async$YH)
case 3:case 1:return A.h(u,v)}})
return A.i($async$YH,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&A.c()
w=B.o.aq(m,60)
m=B.a.b_(B.o.u(B.o.F(m,60)),2,"0")
v=A.aI(n,n,n,n,B.arJ,n,n,n,new C.dmb(d),n,n,n,n,n,n)
if(o.ghO()){u=o.bF
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=A.E(A.d(u?t.f+" vs "+A.w(o.bF):t.f,n,2,B.a2,n,n,n,B.fE,n,n,n),1)
r=A.m(10)
q=x.p
r=A.A(A.a([v,s,A.q(n,C.as6(new C.dmc(o),B.nY,t.c.a),B.f,n,n,new A.p(B.d1,n,n,r,n,n,B.n),n,n,n,n,B.hg,n,n,n)],q),B.l,n,B.e,B.j,0,n,n)
t=o.a
s=t.w
v=A.m(10)
s=A.q(n,A.A(A.a([A.E(A.d("Win $"+B.i.ad(t.x*1.46,2)+" \xb7 stake $"+B.i.ad(o.a.x,2)+" \u2022 Progress "+o.AI()+"/"+o.Pc(),n,n,n,n,n,n,D.ftR,n,n,n),1),new C.ark(o.a.c.a,new C.dmd(o),n),B.af,D.bTE,B.dh,A.d(""+w+":"+m,n,n,n,n,n,n,B.o_,n,n,n)],q),B.l,n,B.e,B.j,0,n,n),B.f,n,n,new A.p(n,n,n,v,n,new A.a8(B.a7,B.aa,B.x,s,n,n),B.n),n,n,n,n,B.hf,n,n,n)
v=o.a.w
m=A.U(v).k("N<1,u>")
m=A.C(new A.N(v,new C.dme(),m),m.k("ak.E"))
w=A.m(14)
v=A.L(B.aT,B.r,1)
p=C.aRE(n,D.bfl,A.bm(!0,new A.D(Ak.a0k,A.x(A.a([r,s,B.T,new A.ff(new C.dmf(o),n),B.am,A.E(A.q(n,o.bUQ(),B.f,n,n,new A.p(n,n,v,w,n,new A.a8(B.a7,B.aa,B.x,m,n,n),B.n),n,n,n,n,B.cn,n,n,n),1)],q),B.al,n,B.e,B.j,0,B.p),n),!0,!1,B.ag,!0,!0))
if(!o.c8)return p
m=A.a_(140,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255)
w=A.a_(242,B.iL.l()>>>16&255,B.iL.l()>>>8&255,B.iL.l()&255)
v=A.m(18)
u=A.L(B.aT,B.r,1)
return new A.an(B.a0,n,B.ac,B.t,A.a([p,A.bS(0,A.q(B.A,new A.du(!1,A.q(n,A.x(A.a([D.ffR,B.ae,A.d(o.cP,n,n,n,n,n,n,D.fvp,B.K,n,n),B.am,A.d(o.cj,n,n,n,n,n,n,D.ftx,B.K,n,n)],q),B.l,n,B.e,B.P,0,B.p),B.f,n,n,new A.p(w,n,u,v,n,n,B.n),n,n,n,B.rY,B.yN,n,n,n),n),B.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
c72(){var w=this.k3
return A.cq(new C.dlA(this,w,B.i.cD(this.fr.length/w)))},
bUQ(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.c72()
if(m==="scramble"){m=o.r
m===$&&A.c()
w=x.l
return A.x(A.a([A.d(m,n,n,n,n,n,n,B.pT,n,n,n),A.d("Words "+o.bn+"/5",n,n,n,n,n,n,B.EQ,n,n,n),B.ae,A.d("Tap letters below to fill each slot",n,n,n,n,n,n,A.l(n,n,A.a_(166,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.W,A.bW(B.fU,A.ir(o.ay.length,new C.dli(o),!0,w),B.bs,n,6,6),B.aO,A.bW(B.fU,A.ir(o.ch.length,new C.dlj(o),!0,w),B.bs,n,8,8),B.aO,new A.a5(1/0,n,A.io(D.fWx,o.gbJT(),A.ft(n,n,B.aE,n,n,n,n,n,n,B.c,n,n,B.cq,n,n,n,n,n,n,n)),n)],x.p),B.l,n,B.e,B.j,0,B.p)}if(m==="typing"){m=o.w
m===$&&A.c()
return new C.atC(m,o.e,new C.dlk(o),new C.dll(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&A.c()
m=A.a([A.d(m,n,n,n,n,n,n,B.pT,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(A.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,B.EQ,n,n,n))
m.push(B.ae)
if(o.a.e==="sequence"){w=o.aG
w===$&&A.c()
w+=", ?"}else w=o.CW
m.push(A.ev(B.A,A.d(w,n,n,n,n,n,n,B.ne,B.K,n,n),B.f,B.dE))
m.push(B.aO)
w=o.x
B.d.v(m,new A.N(w,new C.dlm(o),A.U(w).k("N<1,v>")))
return A.x(m,B.l,n,B.e,B.j,0,B.p)}if(m==="puzzle")return A.cq(new C.dln(o))
if(m==="simon"){m=o.r
m===$&&A.c()
return A.x(A.a([A.d(m,n,n,n,n,n,n,B.pT,n,n,n),A.d("Progress "+o.p3+"/21",n,n,n,n,n,n,B.EQ,n,n,n),B.T,A.E(A.kW(1,A.ir(4,new C.dlo(o),!0,x.l),2,10,10,n,B.dZ,!1),1)],x.p),B.l,n,B.e,B.j,0,B.p)}if(m==="pattern")return A.cq(new C.dlp(o))
if(m==="color"){u=A.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[B.dQ,B.dL,B.im,B.tk]
m=o.r
m===$&&A.c()
m=A.d(m,n,n,n,n,n,n,B.pT,n,n,n)
w=A.d("Round "+o.bb+"/5",n,n,n,n,n,n,B.EQ,n,n,n)
v=o.aL
v===$&&A.c()
s=o.aR
s===$&&A.c()
s=A.a([m,w,B.ae,A.d(v,n,n,n,n,n,n,A.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.aO],x.p)
r=J.e4(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=A.ft(n,n,A.a_(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,B.c,n,n,B.fm,n,n,n,n,n,n,n)
r[q]=new A.D(B.cy,new A.a5(1/0,n,A.io(A.d(u[q],n,n,n,n,n,n,B.cG,n,n,n),new C.dlq(o,u,q),m),n),n)}B.d.v(s,r)
return A.x(s,B.l,n,B.e,B.j,0,B.p)}if(m==="reflex"){m=o.y
p=m?B.bd:B.c6
w=o.r
w===$&&A.c()
w=A.d(w,n,n,n,n,n,n,B.abd,B.K,n,n)
v=A.d("Fast taps "+o.a0+"/5",n,n,n,n,n,n,D.fqJ,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=A.d(m,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,n,n,n,Math.min(A.aF(s,B.c1,x.w).w.a.a*0.18,72),n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return A.r3(A.az(B.c2,A.cT(n,A.x(A.a([w,B.T,v,B.b3,s,B.b3,new A.D(B.GI,A.d(m,n,n,n,n,n,n,A.l(n,n,A.a_(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),B.l,n,B.ba,B.j,0,B.p),p,n,B.b_,n,S.Cd,n,n,n,n,n,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc_s(),n,n,n,n,n,n,!1,B.a4))}if(B.d.q(D.Se,m)&&o.b6!=null){m=o.a.e
w=o.b6
w.toString
return C.ihg(m,new C.dlr(o),new C.dls(o),o.d,w)}m=o.r
m===$&&A.c()
return A.as(A.d(m,n,n,n,n,n,n,B.dk,n,n,n),n,n,n)}}
C.anw.prototype={
S(){return new C.bj1()},
cXV(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bj1.prototype={
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a0.d
a0=x.w
w=A.aF(a3,B.dS,a0).w
a0=A.aF(a3,B.dS,a0).w
v=x.p
u=A.a([A.bTo(!1,e.a.r,"INVESTMENT PLANS",d),B.dc],v)
t=a1.x
if(t!=null){s=t.d.bT()
r=B.a.b_(B.o.u(A.bM(s)),2,"0")
q=B.a.b2(B.o.u(A.bD(s)+1),2)
p=A.m(18)
o=A.L(V.Ge,B.r,2.2)
n=x.V
m=A.a([new A.ab(0,B.G,A.a_(89,B.ry.l()>>>16&255,B.ry.l()>>>8&255,B.ry.l()&255),B.eQ,20),new A.ab(0,B.G,A.a_(102,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dp,14)],n)
l=A.ap(d,A.q(d,d,B.f,d,d,new A.p(A.a_(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),d,d,d,d,d,B.a6),d,120,d,d,d,d,d,120),d,d,d,-20,-24,d)
k=A.m(10)
j=A.L(V.Ge,B.r,3.4)
n=A.a([new A.ab(0,B.G,A.a_(166,B.ry.l()>>>16&255,B.ry.l()>>>8&255,B.ry.l()&255),B.dM,10),new A.ab(0,B.G,A.a_(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cL,6)],n)
n=A.A(A.a([A.q(d,d,B.f,d,d,new A.p(d,d,j,k,n,new A.a8(B.aA,B.aF,B.x,D.diG,D.cTC,d),B.n),d,42,d,d,d,d,d,56),B.b3,e.bae(a3,!0)],v),B.l,d,B.e,B.j,0,d,d)
k=A.Ef(t.a,1,B.a2,D.fyM)
j=t.b
i=t.c
h=A.Ef("Making $"+A.dF(j*i)+" Daily",1,B.a2,D.fz0)
g=A.Ef(e.b51(j),1,B.a2,D.frA)
q=A.A(A.a([A.E(A.x(A.a([D.fPn,A.Ef(a1.c,1,B.a2,D.aWa)],v),B.E,d,B.e,B.j,0,B.p),1),A.x(A.a([D.fP8,A.d(r+"/"+q,d,d,d,d,d,d,D.aWa,d,d,d)],v),B.dP,d,B.e,B.j,0,B.p)],v),B.l,d,B.e,B.j,0,d,d)
r=A.q(d,d,B.f,A.a_(89,D.ya.l()>>>16&255,D.ya.l()>>>8&255,D.ya.l()&255),d,d,d,1,d,d,d,d,d,d)
i=A.A(A.a([e.atf("INVESTED","$"+A.dF(j),!0),e.atf("DAILY ROI",B.i.ad(i*100,2)+"%",!0),e.atf("DAYS LEFT",""+(261-t.f)+" d",!0)],v),B.l,d,B.iW,B.j,0,d,d)
j=A.dF(t.e)
t=t.f
f=261-t>0?"ACTIVE":"ENDED"
B.d.v(u,A.a([D.fW4,B.vC,A.q(d,new A.an(B.a0,d,B.ac,B.t,A.a([l,A.x(A.a([n,B.T,D.fNK,B.bG,k,B.aw,h,B.aw,g,B.T,q,B.am,r,B.am,i,B.aw,A.Ef("Earned $"+j+" \u2022 Clocked "+t+"/261 \u2022 "+f,1,B.a2,D.fy7)],v),B.E,d,B.e,B.P,0,B.p)],v),d),B.f,d,d,new A.p(d,d,o,p,m,D.c8Z,B.n),d,d,d,d,B.bI,d,d,1/0),B.aaA],v))}u.push(D.fFm)
u.push(B.vC)
B.d.v(u,new A.N(a2,new C.dpR(e,a3),A.U(a2).k("N<1,v>")))
return A.c4(d,B.L,A.bm(!1,A.ce(A.x(u,B.E,d,B.e,B.j,0,B.p),B.t,d,B.y,d,new A.R(20,a0.r.b+10,20,124+w.r.d),d,d,B.ah),!0,!1,B.ag,!0,!1),d,!1,!1,d,d)},
bae(d,e){var w=null,v=A.a_(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(8),t=A.L(B.jZ,B.r,1)
return A.q(w,A.A(A.a([A.X(B.apB,B.c,w,w,w,16),B.dh,A.d("TAP",w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.eL,w,w,w)},
b51(d){var w=B.a.b_(B.o.u(B.i.V(d*100)),4,"0")
return"****  ****  ****  "+B.a.b2(w,w.length-4)},
atf(d,e,f){var w=null,v=A.a_(217,D.ya.l()>>>16&255,D.ya.l()>>>8&255,D.ya.l()&255)
v=A.d(d,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.x(A.a([v,B.bG,A.Ef(e,w,w,A.l(w,w,E.BX,w,w,w,w,w,w,w,w,11,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w))],x.p),B.E,w,B.e,B.j,0,B.p)},
coH(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gd1L(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
w=A.L(B.aS,B.r,2)
p=x.V
o=A.a([new A.ab(0,B.G,A.a_(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.U0,16),new A.ab(0,B.G,A.a_(115,B.an.l()>>>16&255,B.an.l()>>>8&255,B.an.l()&255),B.dp,14),new A.ab(0,B.G,A.a_(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cL,8)],p)
n=A.ap(d,A.q(d,d,B.f,d,d,new A.p(d,d,d,d,d,new A.bY(B.A,0.5,B.x,d,0,A.a([A.a_(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),A.a_(0,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)],x.O),d,d),B.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=A.m(5)
l=A.L(B.c,B.r,2.2)
k=A.b0(4286436348)
k=A.a_(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=A.a_(B.i.V(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
i=A.b0(4279150057)
h=x.p
p=A.A(A.a([new A.a5(44,44,new A.an(B.a0,d,B.ac,B.f,A.a([A.ap(d,A.eG(B.A,0.7853981633974483,A.q(d,d,B.f,d,d,new A.p(d,d,l,m,A.a([new A.ab(0.5,B.G,k,B.J,14),new A.ab(0,B.G,j,B.J,6),new A.ab(0,B.G,A.a_(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new A.o(0,2),4)],p),D.c7C,B.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.ezo],h),d),d),B.b3,e.bae(b2,!0)],h),B.l,d,B.e,B.j,0,d,d)
a6=A.Ef(a6,1,B.a2,D.fo_)
i=A.Ef(e.b51(a3),1,B.a2,D.fDF)
j=A.A(A.a([e.b4s(B.i.ad(2.86,2)+"%"),B.e8,e.b4s("261d")],h),B.l,d,B.e,B.j,0,d,d)
k=A.E(A.x(A.a([D.fGI,A.Ef("$"+A.dF(a3),1,B.a2,D.fCq)],h),B.E,d,B.e,B.j,0,B.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=A.A(A.a([k,A.d(m,d,d,d,d,d,d,D.foQ,d,d,d)],h),B.dP,d,B.e,B.j,0,d,d)
k=A.q(d,d,B.f,A.a_(89,B.bw.l()>>>16&255,B.bw.l()>>>8&255,B.bw.l()&255),d,d,d,1,d,d,d,d,d,d)
l=A.A(A.a([A.E(e.aAF("Daily","$"+A.dF(a4)),1),B.e8,A.E(e.aAF("Total","$"+A.dF(a4*261)),1),B.e8,A.E(e.aAF("Days","261"),1)],h),B.l,d,B.e,B.j,0,d,d)
g=q?d:new C.dpQ(e,b3,a3,t)
f=B.i.V(127.5)
f=A.ft(d,d,B.br,A.a_(f,B.an.l()>>>16&255,B.an.l()>>>8&255,B.an.l()&255),A.a_(f,B.bl.l()>>>16&255,B.bl.l()>>>8&255,B.bl.l()&255),d,3,d,d,B.aS,d,d,d,d,new A.b9(A.m(10),D.b5f),d,d,d,d,d)
return A.q(d,new A.an(B.a0,d,B.ac,B.f,A.a([n,A.x(A.a([p,B.bG,D.fQ6,B.bG,a6,B.cS,i,B.fD,j,B.fD,m,B.fD,k,B.fD,l,B.T,new A.a5(1/0,40,A.io(A.ev(B.A,A.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.fpk,d,d,d),B.f,B.e7),g,f),d)],h),B.E,d,B.e,B.P,0,B.p)],h),d),B.f,d,d,new A.p(d,d,w,a0,o,D.c9y,B.n),d,d,d,B.kw,D.bCB,d,d,1/0)},
b4s(d){var w=null,v=A.a_(115,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(5),t=A.L(B.cx,B.r,1)
return A.q(w,A.d(d,w,w,w,w,w,w,D.foo,w,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.Cu,w,w,w)},
aAF(d,e){var w=null,v=A.a_(97,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(7),t=A.L(B.bl,B.r,1)
return A.q(w,A.x(A.a([A.d(d,w,w,w,w,w,w,D.fyt,w,w,w),B.vD,A.ev(B.a7,A.d(e,w,w,w,w,w,w,D.fBo,w,w,w),B.f,B.dE)],x.p),B.E,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.me,w,w,w)}}
C.ajE.prototype={
S(){var w=null,v=A.a([],x._),u=$.ax()
return new C.azi(v,new A.au(B.ax,u),new A.au(B.ax,u),A.mZ(0,w,w),new A.hX(),D.Tv,C.ail(),A.a([],x.fw),A.aR(x.N),A.mZ(0,w,w))}}
C.azi.prototype={
Y(){var w,v,u,t,s,r=this
r.a4()
w=r.a
w.toString
r.d=0
v=A.Ai(0,1)
r.e!==$&&A.aQ()
r.e=v
r.ay=w.f.aL
w=r.k3=A.bq(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t].a
if(s.length!==0)u.J(0,s)}r.adw()
r.Px()
r.asR()
r.cBF()
r.cBV()
$.aW.x1$.push(new C.cMQ(r))
r.a.toString},
Px(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Px=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.arJ(),$async$Px)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cMa(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Px,v)},
gaCi(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gPs())return!0
return!1},
gPs(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaY0(){var w,v=this.CW
if(v==null)return B.bF
w=v.bD(new A.V(Date.now(),0,!1))
return w.a<0?B.bF:w},
bFi(){var w=this
if(w.a.c.w)return
if(w.gPs()){if(!w.cx)w.m(new C.cM0(w))}else if(w.cx)w.m(new C.cM1(w))},
cuU(){this.m(new C.cMk(this))},
uF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$uF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.m(new C.cMh(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.m(new C.cMi(t))
w=1
break}w=3
return A.b(C.cg_(o.a,s),$async$uF)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return A.b(C.cg0(t.a.c.a,s),$async$uF)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.m(new C.cMj(t,r,q))
t.cDO()
t.bFi()
if(r===3)t.ZN(r)}case 1:return A.h(u,v)}})
return A.i($async$uF,v)},
ZN(d){return this.c6U(d)},
c6U(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return A.b(C.bGt(q,r,new C.cMc(t),d,s.c.a),$async$ZN)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ZN,v)},
ya(d){return this.bGP(d)},
asR(){return this.ya(!1)},
bGP(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$ya=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return A.b(A.a9g(k,C.hF2(l.d)),$async$ya)
case 3:j=m
w=4
return A.b(C.cgp(k),$async$ya)
case 4:s=j.a=f
w=5
return A.b(A.asy(k),$async$ya)
case 5:r=f
w=!s.a&&J.cJ(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.WJ(!0,l,q,p)
m.a=s
w=8
return A.b(C.arL(k,s),$async$ya)
case 8:case 7:w=9
return A.b(C.VJ(k),$async$ya)
case 9:o=f
w=10
return A.b(C.a8C(k),$async$ya)
case 10:n=f
if(t.c==null){w=1
break}t.m(new C.cM2(m,t,r,o,n))
case 1:return A.h(u,v)}})
return A.i($async$ya,v)},
QY(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$QY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Px(),$async$QY)
case 3:s=t.c
if(s==null){w=1
break}r=A.ec(new C.cMf(t),!1,null,x.H)
w=4
return A.b(A.a6(s,!1).ce(r),$async$QY)
case 4:w=5
return A.b(t.Px(),$async$QY)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QY,v)},
cFZ(){this.m(new C.cMD(this))},
cBV(){var w=this,v=w.go
if(v!=null)v.a1(0)
if(w.a.c.w)return
w.go=A.df(B.rV,new C.cMx(w))},
cDO(){var w=this,v=w.id
if(v!=null)v.a1(0)
w.id=null
if(!w.gPs()||w.CW==null)return
w.id=A.df(B.fJ,new C.cMA(w))},
cBF(){var w=this,v=w.fy
if(v!=null)v.a1(0)
w.fy=A.df(B.jE,new C.cMw(w))
w.FN()},
FN(){return this.cDN()},
cDN(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$FN=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aL
t=4
w=7
return A.b(A.aA(),$async$FN)
case 7:q=e
p=A.aV(J.t(q.a,"app_config"))
if(p!=null&&p.length!==0){o=B.X.aQ(0,p,null)
if(x.f.b(o)){m=A.DX(A.a2(o,x.N,x.z)).aL
i.a=m
r.a.f.aL=m}}w=10
return A.b(A.M3(),$async$FN)
case 10:w=e?8:9
break
case 8:w=11
return A.b(A.aRD(),$async$FN)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aL=l
w=14
return A.b(q.aC("String","app_config",B.X.aw(k.aj(),null)),$async$FN)
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
break}if(i.a!==r.ay)r.m(new C.cMy(i,r))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FN,v)},
b8X(){B.d.aZ(this.f,new C.cMv())},
adw(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$adw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.NU(t.a.c.a),$async$adw)
case 3:q=e
if(t.c==null){w=1
break}s=A.a([],x._)
if(J.cJ(q)){B.d.v(s,q)
B.d.aZ(s,new C.cM7())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(A.I(["role","ai","text",r,"at",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z))}t.m(new C.cM8(t,s))
t.a2F(!0)
A.bQ(B.jo,new C.cM9(t),x.H)
case 1:return A.h(u,v)}})
return A.i($async$adw,v)},
ahg(){var w=0,v=A.j(x.H),u=this
var $async$ahg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.apj(u.a.c.a,u.f),$async$ahg)
case 2:return A.h(null,v)}})
return A.i($async$ahg,v)},
bz(d){this.bJ(d)},
t(){var w,v=this,u=v.fy
if(u!=null)u.a1(0)
u=v.go
if(u!=null)u.a1(0)
u=v.id
if(u!=null)u.a1(0)
u=v.r
w=$.ax()
u.U$=w
u.P$=0
u=v.w
u.U$=w
u.P$=0
v.ok.t()
v.x.t()
u=v.e
u===$&&A.c()
u.t()
v.a3()},
act(d){var w,v=this
v.m(new C.cM5(v,d))
w=v.e
w===$&&A.c()
if(w.f.length!==0)w.BK(d,B.cw,B.kT)
else $.aW.x1$.push(new C.cM6(v,d))
if(d===0)v.a2F(!0)
if(d===1)v.cwX(!0)},
a2F(d){$.aW.x1$.push(new C.cMn(this,d))},
aBW(){return this.a2F(!1)},
a1Y(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a1Y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2x(),$async$a1Y)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==B.a.i(t.a.f.r))t.m(new C.cMg(t))
case 1:return A.h(u,v)}})
return A.i($async$a1Y,v)},
nh(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$nh=A.e(function(c8,c9){if(c8===1){s.push(c9)
w=t}for(;;)switch(w){case 0:c5=B.a.i(q.r.a.a)
if(J.ad(c5)===0){w=1
break}a8=q.a
a9=a8.c
w=!a9.w?3:4
break
case 3:b0=a8.f.xr
w=b0>0?5:6
break
case 5:w=9
return A.b(C.arE(a9.a,b0),$async$nh)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return A.b(q.uF(),$async$nh)
case 10:q.m(new C.cMo(q))
w=1
break
case 8:w=11
return A.b(q.uF(),$async$nh)
case 11:if(q.c!=null&&q.ch===3)q.ZN(3)
case 6:case 4:q.m(new C.cMp(q,c5))
C.Vv(q.a.c.a,"user",c5)
q.aBW()
t=13
a8={}
w=16
return A.b(q.a1Y(),$async$nh)
case 16:b1=B.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return A.b(A.a2x(),$async$nh)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.m(new C.cMq(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.bEA("",null)
q.m(new C.cMr(q,p))
C.Vv(q.a.c.a,"ai",p)
q.aBW()
r=[1]
w=14
break}o=A.nm(a9)
a9=q.a
n=""
m=C.hF2(a9.d)
w=C.hEW(c5)?20:21
break
case 20:w=22
return A.b(C.cgo(q.a.c.a),$async$nh)
case 22:q.db=c9
w=23
return A.b(q.ya(!0),$async$nh)
case 23:case 21:w=24
return A.b(A.a9g(q.a.c.a,m),$async$nh)
case 24:l=c9
k=C.hXI(l)
a9=k
b2=Date.now()
b3=new A.V(b2,0,!1).bT()
b2=B.a.b_(B.o.u(A.bM(b3)),2,"0")
b4=B.a.b_(B.o.u(A.bV(b3)),2,"0")
b5=B.a.b_(B.o.u(A.dg(b3)),2,"0")
b6=B.a.b_(B.o.u(A.fP(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+A.bD(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return A.b(C.VJ(q.a.c.a),$async$nh)
case 25:i=c9
h=C.hoD(i,25)
w=26
return A.b(C.a8C(q.a.c.a),$async$nh)
case 26:g=c9
f=C.hqk(g)
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
return A.b(C.aim(a9,q.a.c.a,c5),$async$nh)
case 27:a0=c9
a1=""
if(C.hEW(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:B.a.i(b2).length!==0)===!0){b2.toString
b8=B.a.i(b2)}else{a9=a9.c
b8=B.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=A.w(d)
b4=A.w(j)
b5=q.a.c.w?"\n"+C.ikc(m)+"\n":""
b6=J.ad(n)!==0?"\n"+A.w(n)+"\n":""
b9=J.ad(a0)!==0?"\n"+A.w(a0)+"\n":""
c0=A.w(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hS0(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+A.w(c5)
w=28
return A.b(A.rh(o,a2,B.i4,null,null),$async$nh)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.bEA(a8.a,a3.a)
a4=c2
a5=A.hEi(a4)
c3=a5.a
a8.b=c3
if(B.d.gau(c3)){a9=A.C(C.imX(c5),x.an)
a6=a9
J.fW(a6,C.imY(c5))
J.fW(a6,C.imZ(c5))
J.fW(a6,A.hDJ(c5))
J.fW(a6,C.in1(c5,q.a.c.w))
a8.b=a6}c3=C.ima(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return A.b(A.aiD(c3,a6,m,q.a.c.a),$async$nh)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.m(new C.cMs(a8,q,a7))
C.Vv(q.a.c.a,"ai",a7)
if(J.cJ(a8.b)&&q.c!=null)q.Kw(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.m(new C.cMt(q))
C.Vv(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.m(new C.cMu(q))
q.aBW()
q.ahg()
if(!q.a.c.w)q.uF()
w=r.pop()
break
case 15:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$nh,v)},
cnD(d){var w=A.T(x.N,x.z)
w.n(0,"type",d.a)
w.v(0,d.b)
return w},
cnE(d){var w,v,u,t,s,r,q,p=J.t(d,"phoneActions")
if(!x.j.b(p))return B.iV
w=A.a([],x.Z)
for(v=J.aT(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gR(v)
if(u.b(r)){q=A.cjw(A.a2(r,t,s))
if(q!=null)w.push(q)}}return w},
Kw(d){return this.cvr(d)},
cvr(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Kw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J.aT(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gR(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return A.b(C.aiy(p,o,new C.cMl(t,p)),$async$Kw)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return A.b(A.HB(p,null,o,!1,!0,t.a.c.a),$async$Kw)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.L(r).f
o=A.d(m,null,null,null,null,null,null,null,null,null,null)
p.T(new A.b1(o,B.c6,null,null,null,null,null,null,null,null,null,null,null,B.lI,!1,null,null,null,B.t,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return A.b(A.HB(p,l.f,o,k,n,j),$async$Kw)
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
return A.b(C.b_P(p,A.a([new C.rS("out_"+1000*o,new A.V(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$Kw)
case 14:t.asR()
case 13:p=t.c.L(r).f
o=A.d(m,null,null,null,null,null,null,null,null,null,null)
p.T(new A.b1(o,B.d0,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null))
w=3
break
case 4:case 1:return A.h(u,v)}})
return A.i($async$Kw,v)},
SK(d){return this.cEg(d)},
cEg(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$SK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return A.b(C.aiy(d,n,new C.cMC(t)),$async$SK)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return A.b(A.HB(d,null,n,!1,!0,t.a.c.a),$async$SK)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.L(x.q).f.T(A.b3(null,null,null,B.c6,null,B.t,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.lI,null,null,null,null,null,null,null,null,null,null))
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
return A.b(A.HB(d,q.f,r,p,n,o),$async$SK)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.L(x.q).f.T(A.b3(null,null,null,B.d0,null,B.t,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$SK,v)},
cwX(d){$.aW.x1$.push(new C.cMm(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.P(d).ax.a===B.H,j=k?B.bB:B.C3,i=m.d
i===$&&A.c()
w=x.O
w=k?A.a([B.ajT,D.bmj],w):A.a([B.aN,B.y5],w)
v=A.m(22)
u=A.a([new A.ab(0,B.G,A.a_(71,B.aN.l()>>>16&255,B.aN.l()>>>8&255,B.aN.l()&255),B.cC,16)],x.V)
t=m.a.c.w?m.gcje():l
s=A.a_(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
r=A.L(B.bW,B.r,1.5)
t=A.az(l,A.q(l,C.hdP(m.a.f.Q,48),B.f,l,l,new A.p(s,l,r,l,l,l,B.a6),l,48,l,l,l,l,l,48),B.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,B.a4)
r=A.d("NGMY Helper",l,1,B.a2,l,l,l,B.dq,l,l,l)
s=A.q(l,l,B.f,l,l,D.b7l,l,8,l,l,l,l,l,8)
if(m.gaCi()&&m.d===0)q=m.gPs()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=A.q(l,A.A(A.a([t,B.bc,A.E(A.x(A.a([r,B.bG,A.A(A.a([s,B.bo,A.E(A.d(q,l,1,B.a2,l,l,l,A.l(l,l,A.a_(B.i.V(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,B.cE,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),B.l,l,B.e,B.j,0,l,l)],p),B.E,l,B.e,B.j,0,B.p),1),A.aI(l,l,l,l,B.n3,l,l,l,new C.cMI(d),l,l,l,l,l,l)],p),B.l,l,B.e,B.j,0,l,l),B.f,l,l,new A.p(l,l,l,v,u,new A.a8(B.aA,B.aF,B.x,w,l,l),B.n),l,l,l,F.alM,D.bDn,l,l,l)
v=k?D.u6:B.c
u=A.m(14)
t=A.L(k?B.bA:B.e1,B.r,1)
u=A.q(l,A.A(A.a([m.bJE(),m.cE_(1,B.ll,"Music")],p),B.l,l,B.e,B.j,0,l,l),B.f,l,l,new A.p(v,l,t,u,l,l,B.n),l,l,l,l,B.eA,l,l,l)
t=m.e
t===$&&A.c()
if(m.gaCi()){v=A.a([],p)
if(m.gPs()){s=A.a_(38,B.d0.l()>>>16&255,B.d0.l()>>>8&255,B.d0.l()&255)
r=A.m(12)
q=A.L(A.a_(115,B.d0.l()>>>16&255,B.d0.l()>>>8&255,B.d0.l()&255),B.r,1)
v.push(new A.D(B.O4,A.q(l,A.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hW_(m.gaY0())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.fAP,B.K,l,l),B.f,l,l,new A.p(s,l,q,r,l,l,B.n),l,l,l,l,B.eH,l,l,1/0),l))}if(m.cy&&!m.gPs()){s=A.a_(31,B.aN.l()>>>16&255,B.aN.l()>>>8&255,B.aN.l()&255)
r=A.m(12)
q=A.m(12)
o=A.X(B.k6,k?B.id:B.hu,l,l,l,16)
v.push(new A.D(B.O4,A.aH(!1,B.a3,!0,r,A.aP(!1,q,!0,new A.D(B.eH,A.A(A.a([o,B.bo,A.d("Back to NGMY Helper AI",l,l,l,l,l,l,A.l(l,l,k?B.id:B.hu,l,l,l,l,l,l,l,l,12,l,l,B.U,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),B.l,l,B.ba,B.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcuT(),l,l,l,l,l,l,l),B.f,s,0,l,l,l,l,l,B.aj),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcFY():l
v.push(A.E(new C.arH(s,q,new C.cMJ(),r,o,l),1))
v=A.x(v,B.l,l,B.e,B.j,0,B.p)}else v=m.bJF(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.hri(r)
t=A.a([w,B.ae,new A.D(B.i1,u,l),B.T,A.E(A.hsf(A.a([v,new C.arK(q,o,n,new C.cMK(m,d),s,l)],p),B.t,t,B.y,new C.cML(m),l),1)],p)
if(m.d===0&&!m.gaCi()){w=A.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a5Q:D.a57
w.push(new A.a5(l,36,A.hP(l,new C.cMM(m),v.length,l,l,B.aL,new C.cMN(),!1),l))}if(m.ax&&m.f.length<=1)w.push(B.T)
v=m.r
u=A.l(l,l,k?B.c:B.bq,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=A.l(l,l,k?B.aD:B.e_,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?B.w:B.c
r=A.a_(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=A.m(22)
o=A.m(22)
n=k?B.aT:B.fr
u=A.E(A.aM(l,B.Z,!1,l,!0,B.t,l,A.aO(),v,l,l,l,l,l,2,A.bz(l,new A.b6(4,q,B.a1),l,B.Cm,l,l,l,l,!0,new A.b6(4,o,new A.ay(n,1,B.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.y,!0,l,!0,l,!1,l,B.ak,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cMO(m),l,!1,l,l,!1,l,!0,l,B.ad,l,l,l,l,l,l,l,l,l,l,l,u,!0,B.a5,l,B.ao,l,B.aUW,l,l),1)
s=m.at
r=s?l:m.gcxX()
w.push(A.A(A.a([u,new A.JS(v,B.aN,l),B.bo,A.aH(!1,B.a3,!0,l,A.aP(!1,l,!0,new A.a5(44,44,s?D.esc:U.arB,l),B.cV,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),B.f,B.aN,0,l,l,B.cV,l,l,B.aj)],p),B.dP,l,B.e,B.j,0,l,l))
w=A.x(w,B.l,l,B.e,B.P,0,B.p)
v=k?B.lE:B.c
t.push(A.uA(B.tW,A.q(l,new A.D(B.GL,w,l),B.f,l,l,new A.p(v,l,A.L(k?A.a_(41,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.a_(18,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.r,1),B.tW,l,l,B.n),l,l,l,l,l,l,l,l),14,!1))}return new A.Xx(i,new C.cMP(m),A.c4(l,j,A.bm(!0,A.x(t,B.l,l,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),l,!1,!1,l,l),l)},
bJE(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===0
p=this.c
p.toString
v=A.P(p).ax.a===B.H
if(w)p=A.a_(B.i.V(255*(v?0.25:0.12)),B.aN.l()>>>16&255,B.aN.l()>>>8&255,B.aN.l()&255)
else p=B.L
u=A.m(11)
t=w?A.L(A.a_(B.i.V(127.5),B.aN.l()>>>16&255,B.aN.l()>>>8&255,B.aN.l()&255),B.r,1):q
s=A.X(B.uM,w?B.aN:B.cz,q,q,q,17)
if(w)r=v?B.c:B.as
else r=B.cz
return A.E(A.az(q,A.cT(q,A.A(A.a([s,B.bo,A.d("Chat",q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.l,q,B.ba,B.j,0,q,q),q,q,B.b_,new A.p(p,q,t,u,q,q,B.n),B.eG,q,q,q,q,B.qC,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cM3(this),q,q,q,q,q,q,!1,B.a4),1)},
cE_(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===d
p=this.c
p.toString
v=A.P(p).ax.a===B.H
if(w)p=A.a_(B.i.V(255*(v?0.25:0.12)),B.aN.l()>>>16&255,B.aN.l()>>>8&255,B.aN.l()&255)
else p=B.L
u=A.m(11)
t=w?A.L(A.a_(B.i.V(127.5),B.aN.l()>>>16&255,B.aN.l()>>>8&255,B.aN.l()&255),B.r,1):q
s=A.X(e,w?B.aN:B.cz,q,q,q,17)
if(w)r=v?B.c:B.as
else r=B.cz
r=A.a([s,B.bo,A.d(f,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return A.E(A.az(q,A.cT(q,A.A(r,B.l,q,B.ba,B.j,0,q,q),q,q,B.b_,new A.p(p,q,t,u,q,q,B.n),B.eG,q,q,q,q,B.qC,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cMB(this,d),q,q,q,q,q,q,!1,B.a4),1)},
bJF(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.bsD:A.a_(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
w=A.m(18)
v=A.L(d?B.dr:B.bl,B.r,1)
u=q===0?1:q
return A.q(s,A.kr(!0,s,t.ok,new C.cM4(t,e,d),u,s,B.bS,s,s,!1,!1),B.f,s,s,new A.p(r,s,v,w,s,s,B.n),s,s,s,B.i1,s,s,s,s)},
aRj(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a7(d),m=J.z(n.h(d,"role"),"user"),l=m?B.iV:this.cnE(d),k=m?B.mq:B.e,j=x.p,i=A.a([],j),h=!m
if(h)B.d.v(i,A.a([new A.a5(28,28,C.hdP(this.a.f.Q,28),o),B.af],j))
w=m?B.dP:B.E
j=A.a([],j)
if(h)j.push(D.est)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=B.aN
else u=e?B.ZV:B.aS
t=m?16:4
s=m?4:16
if(m)r=o
else r=A.L(e?B.bA:B.bl,B.r,1)
q=A.a([new A.ab(0,B.G,A.a_(10,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dM,6)],x.V)
if(f)n=A.d("typing\u2026",o,o,o,o,o,o,A.l(o,o,e?B.aD:B.e_,o,o,o,o,o,o,o,o,12,B.cK,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=B.c
else p=e?B.ab:B.br
p=A.d(n,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(A.h9C(m,A.q(o,n,B.f,o,o,new A.p(u,o,r,new A.be(B.jN,B.jN,new A.aN(t,t),new A.aN(s,s)),q,o,B.n),o,o,o,o,Af.wo,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(A.hEn(l,e,this.gcEf()))
i.push(new A.dm(1,B.co,A.x(j,w,o,B.e,B.j,0,B.p),o))
if(m)i.push(B.dh)
return new A.D(B.d9,A.A(i,B.dP,o,k,B.j,0,o,o),o)},
bJD(d,e){return this.aRj(d,e,!1)}}
C.aMv.prototype={
Y(){this.a4()
$.zl().aW(0,this.gF_())},
t(){$.zl().a6(0,this.gF_())
this.a3()}}
C.aMw.prototype={
Y(){this.a4()
$.zl().aW(0,this.gF_())},
t(){$.zl().a6(0,this.gF_())
this.a3()}}
C.aMx.prototype={
Y(){this.a4()
$.zl().aW(0,this.gF_())},
t(){$.zl().a6(0,this.gF_())
this.a3()}}
C.aNu.prototype={
Y(){this.a4()
$.zl().aW(0,this.gF_())},
t(){$.zl().a6(0,this.gF_())
this.a3()}}
C.Xn.prototype={
a7(){return"NgmySnapshotResolveOutcome."+this.b}}
C.ap3.prototype={
S(){return new C.aEj()}}
C.aEj.prototype={
Y(){var w,v=this
v.a4()
w=v.a
v.d=w.d
v.e=A.bq(w.e,!0,x.o)
v.f=v.a.f},
lg(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
AV(d,e){return this.cJI(d,e)},
cJI(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$AV=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dGm(q,e))
t=3
w=6
return A.b(d.$0(),$async$AV)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.m(new C.dGn(q))
w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$AV,v)},
Bl(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Bl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=t.d
q===$&&A.c()
w=3
return A.b(A.vh(r,q),$async$Bl)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dGd(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Bl,v)},
aaW(){var w=0,v=A.j(x.gE),u,t=this,s,r,q,p
var $async$aaW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Bl(),$async$aaW)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&A.c()
q=t.e
q===$&&A.c()
p=t.f
p===$&&A.c()
u=A.OL(s,A.KW(A.c3x(r,q,s,p).f3(),null,"  "))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aaW,v)},
Yq(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Yq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.py(s,t.a.c,!1),$async$Yq)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.AV(new C.dGb(t),"Preparing download\u2026"),$async$Yq)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yq,v)},
ZZ(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.py(s,t.a.c,!1),$async$ZZ)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.AV(new C.dGl(t),"Creating QR code\u2026"),$async$ZZ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZZ,v)},
ZY(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.ieN(r),$async$ZY)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.AV(new C.dGa(t,s),"Looking up code\u2026"),$async$ZY)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZY,v)},
aep(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$aep=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xQ.cq().MI(B.Sy,B.uG,!0),$async$aep)
case 7:r=e
p=r
q=p==null?null:J.fs(p.a)
if(q==null){u=null
w=1
break}if(q.c!=null){p=q.c
p.toString
p=!B.aI.gau(p)}else p=!1
if(p){p=q.c
p.toString
p=A.jK(p,0,null)
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
case 6:u=A.Hx()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aep,v)},
Az(d,e,f){return this.bLX(d,e,f)},
aSD(d,e){return this.Az(d,!1,e)},
bLW(d){return this.Az(d,!1,!1)},
bLX(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Az=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Bl(),$async$Az)
case 3:if(t.c==null){w=1
break}if(!C.c3C(d,t.a.c,null)){t.lg(C.c3D(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&A.c()
s=!C.hRI(d,s)}if(s){t.lg(y.B)
w=1
break}r=d.as
q=J.cs(r)
s=t.c
s.toString
w=4
return A.b(C.if_(s,q,t.a.c,d),$async$Az)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=A.m5(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,B.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&A.c()
r=o}w=5
return A.b(A.rW(s,p,r,!1,null,null,d.ax),$async$Az)
case 5:if(t.c==null){w=1
break}t.m(new C.dG9(t,p,r,d))
t.lg("Restored your local Growth Income. Go back to see it updated.")
case 1:return A.h(u,v)}})
return A.i($async$Az,v)},
aeo(){var w=0,v=A.j(x.H),u=this
var $async$aeo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.AV(new C.dGc(u),"Reading file\u2026"),$async$aeo)
case 2:return A.h(null,v)}})
return A.i($async$aeo,v)},
XJ(d){return this.bNf(d)},
bNf(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$XJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&A.c()
s=new A.d7("local_qr_dep_"+1000*r,q.a,d,B.fS,B.fv,"Admin deposit ($"+A.dF(d)+")",null,null,B.cu,new A.V(Date.now(),0,!1))
C.ciq(t.d,s)
q=t.e
q===$&&A.c()
r=A.C(q,x.o)
r.push(s)
w=3
return A.b(A.rW(t.a.c,t.d,r,!0,null,null,null),$async$XJ)
case 3:w=4
return A.b(t.Bl(),$async$XJ)
case 4:if(t.c==null){w=1
break}t.lg("Deposited $"+A.dF(d)+" to your local wallet.")
case 1:return A.h(u,v)}})
return A.i($async$XJ,v)},
b8k(d){var w=null
return A.cg(w,w,!0,w,new C.dGj(),d,w,!0,!0,x.N)},
WN(d){return this.bFc(d)},
bFc(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$WN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return A.b(t.XJ(d.b),$async$WN)
case 5:w=1
break
case 4:s=d.c
t.lg(s==null?"Could not apply deposit.":s)
case 1:return A.h(u,v)}})
return A.i($async$WN,v)},
Fk(d){return this.csw(d)},
csw(d){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Fk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Bl(),$async$Fk)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return A.b(C.b2I(d,t.a.c),$async$Fk)
case 4:s=f
if(!s.a){u=!1
w=1
break}if(s.b){t.lg("This deposit code was already used.")
u=!0
w=1
break}if(s.d){t.lg(y.y)
u=!0
w=1
break}if(s.c){t.lg(y.j)
u=!0
w=1
break}r=t.c
if(r==null){u=!0
w=1
break}w=5
return A.b(t.b8k(r),$async$Fk)
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
return A.b(C.cij(d,o,n.a,r,p),$async$Fk)
case 7:w=6
return A.b(t.WN(f),$async$Fk)
case 6:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Fk,v)},
Fl(d){return this.csx(d)},
csx(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Fl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Bl(),$async$Fl)
case 3:if(t.c==null){w=1
break}w=4
return A.b(C.cii(d,t.a.c),$async$Fl)
case 4:s=f
if(!s.a){t.lg(y.m)
w=1
break}if(s.b){t.lg("This deposit code was already used.")
w=1
break}if(s.d){t.lg(y.y)
w=1
break}if(s.c){t.lg(y.j)
w=1
break}r=t.c
if(r==null){w=1
break}w=5
return A.b(t.b8k(r),$async$Fl)
case 5:q=f
if(q==null||B.a.i(q).length===0){w=1
break}r=t.a.c
p=B.a.i(q)
o=t.e
o===$&&A.c()
n=t.d
n===$&&A.c()
w=7
return A.b(C.X1(o,n.a,d,r,p),$async$Fl)
case 7:w=6
return A.b(t.WN(f),$async$Fl)
case 6:case 1:return A.h(u,v)}})
return A.i($async$Fl,v)},
PM(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$PM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DE()){t.lg("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).ce(A.ec(new C.dGe(),!0,null,x.N)),$async$PM)
case 3:r=e
if(r==null||B.a.i(r).length===0){w=1
break}w=B.a.a_(B.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return A.b(t.AV(new C.dGf(t,r),"Applying deposit\u2026"),$async$PM)
case 6:w=1
break
case 5:w=7
return A.b(t.AV(new C.dGg(t,r),"Loading\u2026"),$async$PM)
case 7:case 1:return A.h(u,v)}})
return A.i($async$PM,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.H,m=n?B.nA:B.qm,l=n?B.c:B.a_,k=n?B.aR:B.an,j=A.aF(d,B.dS,x.w).w,i=n?B.bA:B.w.j(0.06),h=x.p
i=A.A(A.a([A.aP(!1,o,!0,A.q(B.A,A.X(B.eM,l,o,o,o,16),B.f,o,o,new A.p(i,o,o,o,o,o,B.a6),o,38,o,o,o,o,o,38),B.cV,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dGo(d),o,o,o,o,o,o,o)],h),B.l,o,B.e,B.j,0,o,o)
w=A.d("Backup & Restore",o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,B.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=A.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,B.cE,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=A.E(new C.a1O(D.bR5,"Download",E.a64,u?o:p.gbSS(),o),1)
t=A.A(A.a([t,B.ew,A.E(new C.a1O(B.jK,"Show QR",D.dzc,u?o:p.gc8E(),o),1)],h),B.l,o,B.e,B.j,0,o,o)
u=p.r
s=A.E(new C.a1O(D.bR6,"Upload",B.a5u,u?o:p.gc8C(),o),1)
s=A.A(A.a([s,B.ew,A.E(new C.a1O(B.jr,"Scan QR",D.d7f,u?o:p.gc8D(),o),1)],h),B.l,o,B.e,B.j,0,o,o)
u=p.r?o:p.gc8B()
r=n?B.c.j(0.06):B.aV.j(0.08)
q=A.m(16)
j=A.a([A.cl(A.a([i,B.aB,w,B.T,v,B.l4,t,B.aB,s,B.aB,new C.buG(B.t8,"Enter Code",B.a4O,u,o),B.l4,A.q(o,A.A(A.a([A.X(B.hz,B.aV,o,o,o,18),B.au,A.E(A.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),B.E,o,B.e,B.j,0,o,o),B.f,o,o,new A.p(r,o,o,q,o,o,B.n),o,o,o,o,B.jp,o,o,o)],h),o,o,new A.R(20,j.r.b+8,20,32),o,o,B.ah,!1)],h)
if(p.r){i=n?B.iI:B.c
w=p.w
if(w==null)w="Working\u2026"
j.push(A.ap(0,A.aH(!1,B.a3,!0,o,new A.D(B.Cq,A.A(A.a([I.aTV,B.bc,A.E(A.d(w,o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],h),B.l,o,B.e,B.j,0,o,o),o),B.f,i,8,o,o,o,o,o,B.aj),o,o,0,0,o,o))}return A.c4(o,m,A.bm(!1,new A.an(B.a0,o,B.ac,B.t,j,o),!0,!1,B.ag,!0,!1),o,!1,!1,o,o)}}
C.a1O.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ab(0,B.G,B.d.gan(s).j(0.35),B.dp,16)],x.V),p=B.c.j(0.22)
return A.aH(!1,B.a3,!0,u,A.aP(!1,t,!0,A.q(v,A.x(A.a([A.q(v,A.X(w.c,B.c,v,v,v,30),B.f,v,v,new A.p(p,v,v,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.ae,A.d(w.d,v,v,v,v,v,v,B.tO,v,v,v)],x.p),B.l,v,B.ba,B.j,0,B.p),B.f,v,v,new A.p(v,v,v,r,q,new A.a8(B.aA,B.aF,B.x,s,v,v),B.n),v,140,v,v,B.bS,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.buG.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ab(0,B.G,B.d.gan(s).j(0.35),B.dp,16)],x.V),p=B.c.j(0.22)
return A.aH(!1,B.a3,!0,u,A.aP(!1,t,!0,A.q(v,A.A(A.a([A.q(v,A.X(w.c,B.c,v,v,v,24),B.f,v,v,new A.p(p,v,v,v,v,v,B.a6),v,44,v,v,v,v,v,44),B.ew,A.d(w.d,v,v,v,v,v,v,B.tO,v,v,v)],x.p),B.l,v,B.ba,B.j,0,v,v),B.f,v,v,new A.p(v,v,v,r,q,new A.a8(B.aA,B.aF,B.x,s,v,v),B.n),v,v,v,v,D.bFz,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.a0r.prototype={
S(){return new C.blt()}}
C.blt.prototype={
gayq(){var w=this.e
return w===$?this.e=this.a.d:w},
Y(){var w=this
w.a4()
w.RE()
w.f=A.df(B.on,new C.dGs(w))},
t(){var w=this.f
if(w!=null)w.a1(0)
this.a3()},
RE(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$RE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return A.b(A.vh(q.e,q.f),$async$RE)
case 3:q=e.a
s=A.c3x(q[3],q[1],t.a.e,q[4])
w=4
return A.b(A.OL(t.a.e,A.KW(s.f3(),null,"  ")),$async$RE)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.m(new C.dGp(t,r))
case 1:return A.h(u,v)}})
return A.i($async$RE,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.H,t=u?B.nA:B.qm,s=u?B.iI:B.c,r=u?B.c:B.bq,q=A.eJ(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,B.aX5,v,v,v,1,v,!0),p=A.m(24),o=A.L(B.aV.j(0.35),B.r,1),n=w.d,m=A.qc(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,B.c),l=A.d("Code: "+w.gayq(),v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=A.m(20),j=B.aV.j(0.12),i=A.m(20),h=x.p
i=A.aP(!1,k,!0,A.q(v,A.A(A.a([A.X(B.fM,B.aV,v,v,v,14),B.bo,A.d("Copy code",v,v,v,v,v,v,A.l(v,v,B.aV,v,v,v,v,v,v,v,v,12,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),B.l,v,B.e,B.P,0,v,v),B.f,v,v,new A.p(j,v,v,i,v,v,B.n),v,v,v,v,B.mc,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dGq(w,d),v,v,v,v,v,v,v)
return A.c4(q,t,new A.D(B.ad,A.x(A.a([A.E(A.q(v,A.x(A.a([B.T,m,B.bz,l,B.T,i,B.aB,A.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,A.l(v,v,u?B.aR:B.an,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v)],h),B.l,v,B.ba,B.j,0,B.p),B.f,v,v,new A.p(s,v,o,p,v,v,B.n),v,v,v,v,B.ad,v,v,1/0),1),B.aO,new A.a5(1/0,v,A.bJ(B.AX,v,new C.dGr(d),A.bp(B.aV,v,v,v,v,B.h8,v,v,v,v,v,v)),v)],h),B.l,v,B.e,B.j,0,B.p),v),v,!1,!1,v,v)}}
C.a0s.prototype={
S(){return new C.blu(A.zY(B.yv,B.o6,B.v9))}}
C.blu.prototype={
t(){this.d.t()
this.a3()},
B(d){var w=null
return A.c4(A.eJ(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fWs,w,w,w,1,w,!0),B.w,A.zX(this.d,B.c_,new C.dGt(this,d)),w,!1,!1,w,w)}}
C.afN.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.P(a0).ax.a===B.H,k=l?B.iI:B.c,j=l?B.c:B.a_,i=l?B.aR:B.an,h=l?B.aT:B.e1,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=A.m(26)
w=A.L(B.aV.j(0.35),B.r,1)
v=A.a([new A.ab(0,B.G,B.aV.j(0.16),B.kE,36)],x.V)
u=A.q(m,D.bX8,B.f,m,m,new A.p(m,m,m,A.m(18),B.a63,D.c6W,B.n),m,58,m,m,m,m,m,58)
t=A.d("Restore local backup?",m,m,m,m,m,m,A.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,B.u,m,m,!0,m,-0.3,m,m,m,m,m,m),B.K,m,m)
s=A.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,A.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),B.K,m,m)
r=l?B.nA:B.qm
q=A.m(18)
p=A.L(B.aV.j(0.22),B.r,1)
o=x.p
g=A.a([new C.R9("Account",B.a.i(this.d),i,j,m),B.W,new C.R9("Balance","$"+A.dF(g.d),i,j,m)],o)
if(d!=null&&B.a.i(d).length!==0)B.d.v(g,A.a([B.W,new C.R9("Investment",d,i,j,m)],o))
g.push(B.W)
g.push(new C.R9("Saved on",""+A.bM(f)+"/"+A.bV(f)+"/"+A.bD(f),i,j,m))
g.push(B.W)
g.push(new C.R9("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=A.q(m,A.x(g,B.E,m,B.e,B.j,0,B.p),B.f,m,m,new A.p(r,m,p,q,m,m,B.n),m,m,m,m,B.bS,m,m,1/0)
r=B.av.j(l?0.14:0.12)
q=A.m(14)
p=A.L(B.av.j(0.35),B.r,1)
n=A.X(B.uU,l?B.aQ:B.d3,m,m,m,16)
return A.eP(m,B.L,new A.cP(B.XD,new A.bN(new A.p(k,m,w,e,v,m,B.n),B.bj,new A.D(B.yQ,A.x(A.a([u,B.aO,t,B.T,s,B.bz,g,B.aB,A.q(m,A.A(A.a([n,B.af,A.E(A.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,A.l(m,m,l?B.bL:B.ic,m,m,m,m,m,m,m,m,11.5,m,m,B.U,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),B.E,m,B.e,B.j,0,m,m),B.f,m,m,new A.p(r,m,p,q,m,m,B.n),m,m,m,m,B.eH,m,m,1/0),B.dc,A.A(A.a([A.E(A.dU(B.o0,new C.f66(a0),A.di(m,m,m,m,m,m,m,m,m,j,m,m,B.cq,m,new A.b9(A.m(14),B.a1),new A.ay(h,1,B.r,-1),m,m,m,m)),1),B.au,A.E(A.bJ(D.fEF,m,new C.f67(a0),A.bp(B.aV,m,m,m,m,m,B.cq,m,new A.b9(A.m(14),B.a1),m,m,m)),2)],o),B.l,m,B.e,B.j,0,m,m)],o),B.l,m,B.e,B.P,0,B.p),m),m),m),m,m,m,B.ey,B.db,m,m,m)}}
C.R9.prototype={
B(d){var w=this,v=null
return A.A(A.a([new A.a5(92,v,A.d(w.c,v,v,v,v,v,v,A.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,B.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),A.E(A.d(w.d,v,v,v,v,v,v,A.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,B.I,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.E,v,B.e,B.j,0,v,v)}}
C.a_z.prototype={
S(){return new C.aBw(new A.au(B.ax,$.ax()),A.ka(!0,null,!0,!0,null,null,!1))}}
C.aBw.prototype={
Y(){this.a4()
$.aW.x1$.push(new C.dfm(this))},
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.e.t()
this.a3()},
c8G(){var w,v=this.c
v.toString
w=B.a.i(this.d.a.a)
A.a6(v,!1).O(w)
return null},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.H,t=u?B.iI:B.c,s=u?B.c:B.a_,r=u?B.aR:B.an,q=u?B.nA:B.qm,p=u?B.aT:B.e1,o=A.m(24),n=A.L(B.aV.j(0.35),B.r,1),m=A.a([new A.ab(0,B.G,B.aV.j(0.18),B.h7,32)],x.V),l=A.q(v,Ad.asj,B.f,v,v,new A.p(v,v,v,A.m(18),B.a63,D.c9I,B.n),v,56,v,v,v,v,v,56),k=A.d("Enter restore code",v,v,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,B.u,v,v,!0,v,-0.3,v,v,v,v,v,v),B.K,v,v),j=A.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),B.K,v,v),i=A.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,B.I,v,v,!0,v,8,v,v,v,v,v,v),h=A.a([new A.uX(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bu9(new C.dfj())],x.G),g=A.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,B.U,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return A.eP(v,B.L,new A.cP(A5.LU,new A.bN(new A.p(t,v,n,o,m,v,B.n),B.bj,new A.D(B.yQ,A.x(A.a([l,B.aO,k,B.T,j,B.e3,A.aM(!1,B.Z,!1,v,!0,B.t,v,A.aO(),w.d,v,v,v,v,v,2,A.bz(v,v,v,B.Cp,v,v,"",v,!0,new A.b6(4,A.m(16),new A.ay(p,1,B.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new A.b6(4,A.m(16),D.b5d),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!1,v,!1,w.e,B.ak,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.dfk(w),v,!1,v,v,!1,v,!0,v,B.ad,v,v,v,v,v,v,v,v,v,v,v,i,!0,B.K,v,B.my,v,v,v,v),B.e3,A.A(A.a([A.E(A.dU(B.o0,new C.dfl(d),A.di(v,v,v,v,v,v,v,v,v,s,v,v,B.cq,v,new A.b9(A.m(14),B.a1),new A.ay(p,1,B.r,-1),v,v,v,v)),1),B.au,A.E(A.bJ(D.fIq,v,w.gc8F(),A.bp(B.aV,v,v,v,v,v,B.cq,v,new A.b9(A.m(14),B.a1),v,v,v)),2)],f),B.l,v,B.e,B.j,0,v,v)],f),B.l,v,B.e,B.P,0,B.p),v),v),v),v,v,v,B.Ok,B.db,v,v,v)}}
C.apz.prototype={
S(){return new C.blB(B.cQ)},
hH(d){return this.x.$1(d)},
bv(){return this.y.$0()}}
C.blB.prototype={
Y(){var w,v=this
v.a4()
w=v.a
w.toString
$.tW=$.tW+1
v.r=B.o.M(B.o.D(C.fPL(w.e,w.d.y2),1,600))
w=v.a
if(!J.lJ(w.d.y2,w.e))v.r=C.ikF(v.a.e)
v.w=A.df(B.fJ,new C.dMQ(v))},
t(){var w=this.w
if(w!=null)w.a1(0)
this.cmu()
C.b1v()
this.a3()},
cmu(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:B.i.D(r.e/w,0,1)
if(v<=0)return
u=A.oo(B.i.ad(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=B.o.u(1000*Date.now())
s=r.a
w.hH(new A.d7(t,s.c.a,u,B.h2,B.fv,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,B.cu,new A.V(Date.now(),0,!1)))
r.a.bv()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.ve(u,q,"Left early \xb7 +$"+B.i.ad(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
KG(d,e){return this.cyB(d,e)},
b7Y(d){return this.KG(!1,d)},
cyA(d){return this.KG(d,"")},
cyB(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$KG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}t.x=!0
s=t.w
if(s!=null)s.a1(0)
if(d)r=1
else{s=t.f
r=s<=0?0:B.i.D(t.e/s,0,1)}w=r<=0?3:4
break
case 3:s=t.a
q=s.c.a
p=s.f
s=s.w
o=e.length===0
C.ve(s,null,o?"No progress":e,q,p,s,null,!1)
s=t.c
if(s==null){w=1
break}w=5
return A.b(C.bGn(s,C.bG3(),C.hhE(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$KG)
case 5:w=1
break
case 4:n=A.oo(B.i.ad(t.a.w*1.46*r,2))
m=r>=1
t.m(new C.dMH(t,n,r))
s=B.o.u(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new A.d7(s,p,n,B.h2,B.fv,q,null,null,B.cu,new A.V(Date.now(),0,!1))
A.aiw(l,!0)
t.a.hH(l)
t.a.bv()
if(m)k="+$"+B.i.ad(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+B.i.ad(n,2)+" ("+B.i.V(r*100)+"% of the prize)"}q=t.a
C.ve(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return A.b(C.bGn(s,C.bG3(),C.hhE(),""+t.e+"/"+t.f,k,q,!0),$async$KG)
case 6:w=7
return A.b(C.aio(t.a.f,k),$async$KG)
case 7:case 1:return A.h(u,v)}})
return A.i($async$KG,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.r
n===$&&A.c()
w=B.o.aq(n,60)
v=B.a.b_(B.o.u(B.o.F(n,60)),2,"0")
u=A.aI(o,o,o,o,B.Q_,o,o,o,new C.dMK(d),o,o,o,o,o,o)
t=p.a
s=x.p
t=A.E(A.x(A.a([A.d(t.f,o,1,B.a2,o,o,o,B.jP,o,o,o),A.d("Win $"+B.i.ad(t.w*1.46,2)+" \xb7 stake $"+B.i.ad(p.a.w,2),o,o,o,o,o,o,D.ftc,o,o,o)],s),B.E,o,B.e,B.j,0,B.p),1)
r=p.a.c.a
n=n<=10?B.ay:B.c.j(0.1)
q=A.m(99)
q=A.A(A.a([u,t,new C.ark(r,new C.dML(p),o),B.bo,A.cT(o,A.A(A.a([D.c0U,B.dh,A.d(""+w+":"+v,o,o,o,o,o,o,B.iF,o,o,o)],s),B.l,o,B.e,B.j,0,o,o),o,o,B.b_,new A.p(n,o,o,q,o,o,B.n),B.a3,o,o,o,o,B.pn,o,o,o)],s),B.l,o,B.e,B.j,0,o,o)
n=p.a
v=n.w
w=v*1.46
r=p.e/p.f
return C.aRE(o,D.btL,A.bm(!0,A.x(A.a([new A.D(D.bHK,q,o),new C.Ol(w*r,w,v,o),new A.D(F.ame,A.A(A.a([A.E(A.bw(A.m(99),A.kq(B.bA,o,o,9,o,r,new A.lN(B.d.gH(n.r),x.dw)),B.aq),1),B.au,A.d(""+p.e+"/"+p.f,o,o,o,o,o,o,D.fCQ,o,o,o)],s),B.l,o,B.e,B.j,0,o,o),o),A.E(new A.D(B.yD,A.bw(A.m(22),new A.bN(new A.p(o,o,o,o,o,new A.a8(B.b1,B.b7,B.x,A.a([B.d.gH(p.a.r).j(0.35),F.ajL],x.O),o,o),B.n),B.bj,new A.du(p.x,Y.hCV(p.a.e,new Y.A4(new C.dMM(p),new C.dMN(p),new C.dMO(p),p.d)),o),o),B.aq),o),1)],s),B.l,o,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0))}}
C.a7Q.prototype={
B(d){var w=null,v=A.m(26),u=A.L(B.av.j(0.5),B.r,1),t=A.a([new A.ab(0,B.G,B.av.j(0.22),B.J,26)],x.V)
return A.eP(w,B.L,A.q(w,A.x(A.a([A.q(w,D.bVl,B.f,w,w,new A.p(B.av.j(0.16),w,A.L(B.av,B.r,2),w,w,w,B.a6),w,68,w,w,w,w,w,68),B.aB,D.fSd,B.T,A.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w),B.T,A.d("The count starts again from zero next month.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),B.aO,new A.a5(1/0,w,A.bJ(D.fFo,w,new C.ccx(d),A.bp(B.av,w,w,w,B.w,B.h8,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w)],x.p),B.l,w,B.e,B.P,0,B.p),B.f,w,w,new A.p(w,w,u,v,t,D.c7A,B.n),w,w,w,w,D.bFZ,w,w,w),w,w,w,B.amP,B.db,w,w,w)}}
C.ap2.prototype={
S(){return new C.blr(null,null)},
gZ(d){return this.e}}
C.blr.prototype={
Y(){var w,v=this,u=null
v.a4()
w=v.d=A.bl(u,B.Cc,u,1,u,v)
w.dl()
w.dV$.J(0,new C.dFZ(v))
w=A.bl(u,B.m9,u,1,u,v)
w.cL(0)
v.e=w
w=A.bl(u,B.NM,u,1,u,v)
w.cL(0)
v.f=w
w.dl()
w.dV$.J(0,new C.dG_(v))
if(v.a.c){v.d.cL(0)
v.e.bQ(0)
v.f.bQ(0)}},
bz(d){var w,v,u=this
u.bJ(d)
w=u.a.c
if(w){v=u.d
v===$&&A.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){w=u.d
w===$&&A.c()
w.cL(0)
w=u.e
w===$&&A.c()
w.bQ(0)
w=u.f
w===$&&A.c()
w.bQ(0)}else if(!w&&d.c){w=u.d
w===$&&A.c()
w.bQ(0)
w=u.d
w.sp(0,w.a)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cL(0)
w=u.f
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cL(0)}},
t(){var w=this,v=w.d
v===$&&A.c()
v.t()
v=w.e
v===$&&A.c()
v.t()
v=w.f
v===$&&A.c()
v.t()
w.byM()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.Sz[B.o.F(a9.r,5)]:b4
w=!b3&&b4==null?D.Sz[B.o.F(a9.w,5)]:b0
b1=b4!=null
if(b1){b3=A.w(b4)
v=b4>0?"+"+b3:b3}else if(w!=null){b3=A.w(w)
if(w>0)b3="+"+b3
v=b3}else v="?"
if(b1)u=b4>0?B.d0:B.bD
else if(w!=null){b1=(w>0?B.d0:B.bD).j(0.45)
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
b3=A.a([A.e1(B.A,A.q(b0,b0,B.f,b0,b0,new A.p(b0,b0,b0,b0,A.a([new A.ab(6+e,B.G,B.aE.j(0.4+q*0.3),B.J,32+q*22),new A.ab(3,B.G,B.b9.j(0.2+p*0.25),B.J,40+p*16)],d),b0,B.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=A.q(b0,b0,B.f,b0,b0,new A.p(A.ar(B.bg,B.aQ,B.o.F(a3,3)/2).j(a2),b0,b0,b0,A.a([new A.ab(0,B.G,B.aE.j(0.7),B.J,e)],d),b0,B.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(A.dN(new A.iR(A.wR(a4+a3),b0,B.A,!0,b0,a8,b0),new A.o(a6*a0+a5*b2*0.04,a7*a0)))}B.d.v(f,b3)}b3=b2*0.06
e=x.V
f.push(A.dN(A.q(b0,b0,B.f,b0,b0,new A.p(b0,b0,b0,A.m(b2*0.5),A.a([new A.ab(b2*0.02,B.G,B.w.j(0.4+b1),B.J,b2*0.14)],e),b0,B.n),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new A.o(0,n+b3)))
b1=A.dr()
d=b1.a
d.$flags&2&&A.aj(d)
d[11]=0.0025
b1.n2(o)
b1.k5(k,k,k,1)
b1.kn(l)
b1.fL(m)
d=b2*0.2
a1=A.m(d)
if(a9.a.c)a2=D.dda
else{a2=A.ar(B.c,B.kN,q*0.45)
a2.toString
a2=A.a([a2,B.cd,B.cx],x.O)}a4=A.ar(B.bN,B.aE,q*0.65)
a4.toString
a4=A.L(a4,B.r,3)
e=A.a([new A.ab(0,B.G,B.w.j(0.3),D.eoE,16)],e)
if(!a9.a.c)e.push(new A.ab(p*3,B.G,B.aE.j(0.3+q*0.4),B.J,24+p*16))
e.push(new A.ab(0,B.G,B.c.j(0.9),B.U0,0))
g=A.a([],g)
if(!a9.a.c)g.push(A.bS(0,new A.bN(new A.p(b0,b0,b0,A.m(d),b0,new A.a8(new A.da(-1+Math.cos(j)*0.8,-1),new A.da(1,1),B.x,A.a([B.c.j(0),B.c.j(0.28+p*0.25),B.c.j(0)],x.O),b0,b0),B.n),B.bj,b0,b0),0,0,0))
g.push(A.ap(b0,A.q(b0,b0,B.f,b0,b0,new A.p(b0,b0,b0,A.m(6),b0,new A.a8(B.a7,B.aa,B.x,A.a([B.c.j(0.95),B.c.j(0)],x.O),b0,b0),B.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=A.a([new A.cU(B.w.j(0.18),B.dM,5)],x.C)
if(!a9.a.c)d.push(new A.cU(B.aE.j(0.4+q*0.35),B.J,12+p*10))
g.push(A.as(A.uJ(A.d(v,b0,b0,b0,b0,b0,b0,A.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,B.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),B.b_,B.jo,b3),b0,b0,b0))
f.push(A.dN(A.fz(B.A,A.q(b0,new A.an(B.a0,b0,B.ac,B.t,g,b0),B.f,b0,b0,new A.p(b0,b0,a4,a1,e,new A.a8(B.aA,B.aF,B.x,a2,b0,b0),B.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new A.o(0,n)))
return new A.a5(h,h,new A.an(B.A,b0,B.ac,B.f,f,b0),b0)}}
C.aN2.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.Ol.prototype={
B(d){var w=null,v=new C.ceZ(),u=v.$3("STAKE","$"+B.i.ad(this.e,2),B.c),t=A.m(18),s=A.L(B.bx.j(0.7),B.r,1.4),r=A.a([new A.ab(0,B.G,B.aV.j(0.35),B.J,14)],x.V),q=x.p
return new A.D(B.O4,A.A(A.a([u,A.q(w,A.x(A.a([D.fQS,A.lB(new C.ceY(),w,B.b_,B.mU,w,w,new A.br(w,this.c,x.e7),x.gR)],q),B.l,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(w,w,s,t,r,D.at9,B.n),w,w,w,w,B.Og,w,w,w),v.$3("FULL WIN","$"+B.i.ad(this.d,2),B.bL)],q),B.l,w,B.e,B.j,0,w,w),w)}}
C.ark.prototype={
B(d){var w=null,v=A.m(99),u=A.L(B.jV.j(0.7),B.r,1)
return A.q(w,A.A(A.a([D.bTM,B.dh,C.as6(this.d,B.o_,this.c)],x.p),B.l,w,B.e,B.P,0,w,w),B.f,w,w,new A.p(w,w,u,v,w,D.at9,B.n),w,w,w,w,B.Op,w,w,w)},
ge3(){return this.c}}
C.Ot.prototype={
S(){return new C.bmc(null,null)}}
C.bmc.prototype={
Y(){var w,v=this
v.a4()
w=A.bl(null,B.m9,null,1,null,v)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bzo()},
aQa(d,e){var w=this.a.d,v=A.U(w).k("N<1,n>"),u=A.C(new A.N(w,C.irk(),v),v.k("ak.E"))
w=this.d
w===$&&A.c()
return A.c5(w,new C.e5t(this,u),null)},
B(d){var w=null
if(this.a.e)return A.c4(w,D.aj3,A.bm(!0,this.aQa(0,d),!0,!1,B.ag,!0,!0),w,!1,!1,w,w)
return this.aQa(0,d)},
aze(d,e,f){var w=null,v=f.j(0.16),u=A.m(10)
return A.A(A.a([A.q(w,A.X(d,f,w,w,w,17),B.f,w,w,new A.p(v,w,w,u,w,w,B.n),w,32,w,w,w,w,w,32),B.au,A.E(A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.l,w,B.e,B.j,0,w,w)}}
C.aNE.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aeE.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=A.aF(d,B.dS,o).w.r.d,m=this.c,l=J.cC(m),k=l.eP(m,new C.e5w()).gI(0),j=new A.ea(l.dM(m,new C.e5x(),x.cD),x.bG).cG(0,0,new C.e5y())
o=A.aF(d,B.c1,o).w
w=x.p
v=A.a([B.W,A.q(p,p,B.f,p,p,new A.p(B.aT,p,p,A.m(2),p,p,B.n),p,4,p,p,p,p,p,42),new A.D(B.amv,A.A(A.a([A.q(p,D.c3o,B.f,p,p,new A.p(p,p,p,A.m(14),A.a([new A.ab(0,B.G,B.fe.j(0.45),B.J,14)],x.V),D.at3,B.n),p,44,p,p,p,p,p,44),B.bc,D.bKa,A.aI(p,p,p,p,B.lp,p,p,p,new C.e5z(d),p,p,p,p,p,p)],w),B.l,p,B.e,B.j,0,p,p),p)],w)
if(l.gcm(m)){u=C.hc8("GAMES",""+l.gI(m),B.eK)
t=C.hc8("WON",""+k,B.jV)
s=j>=0
r=s?"+":"-"
q=C.bCN(j)
s=s?B.jV:B.eW
v.push(new A.D(D.bEa,A.A(A.a([u,B.af,t,B.af,C.hc8("NET",r+q,s)],w),B.l,p,B.e,B.j,0,p,p),p))}if(l.gau(m))v.push(new A.D(new A.R(24,36,24,24+n),A.x(A.a([A.X(D.bPT,B.c.j(0.35),p,p,p,52),B.ae,A.d("No game receipts yet",p,p,p,p,p,p,A.l(p,p,B.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.am,A.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,A.l(p,p,B.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),B.K,p,p)],w),B.l,p,B.e,B.j,0,B.p),p))
else v.push(new A.dm(1,B.co,A.hP(p,new C.e5A(this),l.gI(m),new A.R(14,2,14,16+n),p,B.ah,new C.e5B(),!1),p))
return A.q(p,A.x(v,B.l,p,B.e,B.P,0,B.p),B.f,p,new A.aY(0,1/0,0,o.a.b*0.88),D.b82,p,p,p,p,p,p,p,p)}}
C.aeD.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.c,g=h.c
if(g)if(!B.a.q(h.e.toLowerCase(),"%")){w=h.w
w=w!=null&&h.d<w
v=w}else v=!0
else v=!1
u=g&&B.a.a_(h.e.toLowerCase(),"draw")
w=!g
if(w)t="LOST"
else if(u)t="DRAW"
else{s=v?"PARTIAL":"WON"
t=s}if(w)r=B.c0
else if(u)r=B.dn
else{w=v?B.aQ:B.bx
r=w}q=h.gbjK()
w=new C.e5v()
s=A.m(14)
p=A.a([r.j(0.13),D.bsw],x.O)
o=A.L(r.j(0.4),B.r,1)
n=A.X(g?B.n0:B.cB,r,i,i,i,16)
m=A.E(A.d(h.b,i,1,B.a2,i,i,i,B.tN,i,i,i),1)
l=r.j(0.2)
k=A.m(99)
k=A.q(i,A.d(t,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,B.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),B.f,i,i,new A.p(l,i,i,k,i,i,B.n),i,i,i,i,D.bHC,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bCN(q)}else{l=g?"+":"-"
l+=C.bCN(h.d)}j=x.p
l=A.A(A.a([n,B.bo,m,k,B.bo,A.d(l,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.l,i,B.e,B.j,0,i,i)
k=C.e5u("STAKE",w.$1(h.w),B.c)
w=A.A(A.a([k,B.dh,C.e5u("PAID",C.bCN(g?h.d:0),r),B.dh,C.e5u("BEFORE",w.$1(h.x),B.eK),B.dh,C.e5u("AFTER",w.$1(h.y),B.dn)],j),B.l,i,B.e,B.j,0,i,i)
n=C.ime(h.f)
h=B.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return A.q(i,A.x(A.a([l,B.am,w,B.aw,A.d(n+h,i,1,B.a2,i,i,i,A.l(i,i,B.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.al,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(i,i,o,s,i,new A.a8(B.aA,B.aF,B.x,p,i,i),B.n),i,i,i,i,B.k3,i,i,i)}}
C.aCf.prototype={
S(){return new C.bhI(B.cQ,null,null)}}
C.bhI.prototype={
Y(){var w,v,u,t=this
t.a4()
w=A.bl(null,B.ma,null,1,null,t)
w.cL(0)
t.d=w
v=J.e4(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.af1(40+w.ai()*260,-20+w.ai()*40,1.5+w.ai()*3,w.ai()*3.141592653589793,0.7+w.ai()*0.3,12+w.ai()*16,[Z.a7g,B.tk,B.d1,B.c][w.az(4)],[B.ij,B.k7,B.ed,B.Hd][w.az(4)])
t.f=v},
t(){var w=this.d
w===$&&A.c()
w.t()
this.byg()},
B(d){var w=null,v=this.d
v===$&&A.c()
return A.as(A.aH(!1,B.a3,!0,w,A.c5(v,new C.dmp(this,d),w),B.f,B.L,0,w,w,w,w,w,B.aj),w,w,w)}}
C.af1.prototype={
gZ(d){return this.f}}
C.aMy.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.b2i.prototype={
B(d){return new A.wl(new C.chj(this),null,new A.h7(A.a([$.zl(),$.a48()],x.U)),null)},
ge3(){return this.c}}
C.NX.prototype={
cgo(){if(this.c!=null)this.m(new C.c4R())}}
C.JD.prototype={}
C.aqI.prototype={
S(){return new C.aF3(B.cQ,new A.au(B.ax,$.ax()))},
cLu(){return this.d.$0()},
cXr(){return this.f.$0()},
cXf(d,e){return this.r.$2(d,e)},
cY2(d,e,f){return this.w.$3$bonus(d,e,f)},
ge3(){return this.c}}
C.aF3.prototype={
t(){var w=this.e
w.U$=$.ax()
w.P$=0
this.a3()},
auW(){var w=A.cX(B.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
Bo(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Bo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.auW()
if(s<2){t.azf("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cLu()<s){t.azf("Insufficient balance.")
w=1
break}if(!t.a.cXf(s,"Dice Roll bet")){t.azf("Could not place bet.")
w=1
break}t.a.toString
t.m(new C.dYZ(t))}w=3
return A.b(C.cdH(t.a.e),$async$Bo)
case 3:r=t.a
q=C.ioq(r.e,r.c,t.d)
t.a.cXr()
A.b0T(t.a.e)
t.m(new C.dZ_(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return A.b(A.bQ(new A.bd(1000*(40+p*6)),null,r),$async$Bo)
case 7:if(t.c==null){w=1
break}new C.dZ0(t).$0()
t.c.eo()
case 5:++p
w=4
break
case 6:w=8
return A.b(A.bQ(B.k0,null,r),$async$Bo)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.hgq(q)
t.m(new C.dZ1(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cY2(m,"Dice Roll "+n,o)
t.m(new C.dZ2(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+B.i.ad(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.i.ad(m,2)+" added to your balance"
w=12
return A.b(C.bGn(r,C.bG3(),new C.dZ3(t),n,k,"YOU WIN!",!0),$async$Bo)
case 12:w=13
return A.b(C.aio("Dice Roll",l?"+$"+B.i.ad(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.i.ad(m,2)+" added to your balance"),$async$Bo)
case 13:w=10
break
case 11:w=14
return A.b(C.bGn(r,C.bG3(),new C.dZ4(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$Bo)
case 14:C.ve(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return A.h(u,v)}})
return A.i($async$Bo,v)},
azf(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.auW(),d=x.w,a0=A.aF(a2,B.dS,d).w,a1=Math.min(A.aF(a2,B.c1,d).w.a.a*0.44,200)
d=A.hp(P.arv,D.fYq,new C.dZ7(a2),f)
w=A.m(20)
v=g.a
u=v.c
t=x.p
w=A.A(A.a([d,B.b3,A.q(f,A.A(A.a([B.arq,B.bo,C.as6(v.d,B.jd,u)],t),B.l,f,B.e,B.P,0,f,f),B.f,f,f,new A.p(B.d1,f,f,w,f,f,B.n),f,f,f,f,B.lK,f,f,f)],t),B.l,f,B.e,B.j,0,f,f)
u=g.z
v=A.a_(140,D.a_1.l()>>>16&255,D.a_1.l()>>>8&255,D.a_1.l()&255)
d=A.m(18)
s=A.L(A.a_(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
r=g.x
d=A.E(A.q(f,A.as(new C.ap2(r,r?g.w:g.r,a1,f),f,f,f),B.f,f,f,new A.p(v,f,s,d,f,f,B.n),f,f,f,f,f,f,f,1/0),1)
v=A.d("Roll lands on one of:",f,f,f,f,f,f,A.l(f,f,B.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,B.a8,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=A.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.Sz[q]
o=C.hgq(p)
n=p>0?B.bd:B.ay
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new A.aN(10,10)
i=m?B.c:n.j(0.7)
h=new A.ay(i,m?2.5:1.2,B.r,-1)
n=m?A.a([new A.ab(1,B.G,n.j(0.65),B.J,14)],r):B.Sl
m=m?18:15
s.push(new A.by(1,B.bb,new A.D(B.jq,A.q(B.A,A.d(o,f,f,f,f,f,f,new A.G(!0,B.c,f,f,f,f,m,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),B.f,f,f,new A.p(k,f,new A.bH(h,h,h,h),new A.be(j,j,j,j),n,f,B.n),f,l,f,f,f,f,f,f),f),f))}d=A.a([d,B.ae,v,B.am,A.A(s,B.l,f,B.e,B.j,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.hgq(v)
s=g.r
s.toString
d.push(new A.D(B.jF,A.d("Landed on "+v,f,f,f,f,f,f,A.l(f,f,s>0?B.b4:B.c0,f,f,f,f,f,f,f,f,20,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(B.W)
d.push(new A.bL(B.a7,f,f,A.d("Bet Amount",f,f,f,f,f,f,A.l(f,f,A.a_(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,B.I,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(B.am)
v=x.bL
v=A.C(new A.N(A.a([2,5,10,25],x.n),new C.dZ8(g),v),v.k("ak.E"))
s=g.y
r=A.a_(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v.push(A.E(new A.D(B.a0T,A.aM(f,B.Z,!1,f,!0,B.t,f,A.aO(),g.e,f,f,f,f,f,2,A.bz(f,new A.b6(4,A.m(10),B.a1),f,B.k2,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,B.lV,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,!s,!1,f,B.ak,f,f,f,f,f,B.e5,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,B.ad,f,f,f,f,f,f,f,f,f,f,f,B.h1,!0,B.K,f,B.ao,f,f,f,f),f),1))
d.push(A.A(v,B.l,f,B.e,B.j,0,f,f))
d.push(B.T)
d.push(new A.bL(B.aa,f,f,A.d("Perfect Score Profit: +$"+B.i.ad(g.auW()*0.46,2),f,f,f,f,f,f,X.aVL,f,f,f),f))
d.push(B.W)
d=A.E(new A.D(B.i1,A.x(d,B.al,f,B.e,B.j,0,B.p),f),1)
v=g.x?f:g.gcva()
s=A.ft(f,f,B.aE,f,f,f,f,f,f,B.c,f,f,f,f,new A.b9(A.m(14),B.a1),f,f,f,f,f)
return C.aRE(f,D.a_g,A.bm(!0,A.x(A.a([new A.D(D.bI6,w,f),new C.Ol(u,e*1.46,e,f),A.E(A.x(A.a([d,new A.D(new A.R(14,4,14,8+a0.r.d),new A.a5(1/0,52,A.io(A.d("\ud83c\udfb2 ROLL ($"+B.i.ad(e,2)+")",f,f,f,f,f,f,B.lw,f,f,f),v,s),f),f)],t),B.l,f,B.e,B.j,0,B.p),1)],t),B.l,f,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0))}}
C.arq.prototype={
S(){return new C.aFj(B.l1,new A.au(B.ax,$.ax()))},
cX7(d){return this.e.$1(d)}}
C.aFj.prototype={
gatK(){var w,v=this.r
if(v===$){w=B.o.u(1e4+B.cQ.az(89999))
this.r!==$&&A.bE()
this.r=w
v=w}return v},
gR4(){var w=this.d,v=this.a
return w===B.l1?B.a.i(v.f.a):B.a.i(v.f.b)},
gaac(){var w=this.gR4(),v=A.ag("^\\$+",!0,!1,!1,!1),u=B.a.i(A.aL(w,v,""))
return u.length===0?"":"$"+u},
t(){var w=this.e
w.U$=$.ax()
w.P$=0
this.a3()},
Jy(d,e){return this.bMo(d,e)},
bMo(d,e){var w=0,v=A.j(x.H),u=this,t
var $async$Jy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.fF(new A.fx(d)),$async$Jy)
case 2:A.eY()
t=u.c
if(t!=null)t.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$Jy,v)},
R_(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$R_=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gR4().length===0){r.c.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}A.jY()
o=B.i.ad(r.a.d,2)
q=r.d===B.l1?A.cD("https://cash.app/"+r.gaac()+"/"+o,0,null):A.cD("bitcoin:"+r.gR4(),0,null)
t=4
w=7
return A.b(A.iY(q,B.fu,null),$async$R_)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===B.l1?r.gaac():r.gR4()
w=10
return A.b(r.Jy(n,r.d===B.l1?"Cash App tag":"Bitcoin address"),$async$R_)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===B.l1?r.gaac():r.gR4()
w=11
return A.b(r.Jy(n,r.d===B.l1?"Cash App tag":"Bitcoin address"),$async$R_)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$R_,v)},
a1n(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1n=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hX().bkw(B.eP),$async$a1n)
case 3:r=e
if(r==null){w=1
break}w=4
return A.b(r.fq(),$async$a1n)
case 4:s=e
t.m(new C.e5H(t,B.a.c7(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return A.h(u,v)}})
return A.i($async$a1n,v)},
ccE(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===B.l1?C.hEd(s.a):B.a.i(s.a)
if(r.length===0){t=v.d===B.l1?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.L(x.q).f.T(A.b3(u,u,u,u,u,B.t,u,A.d(t,u,u,u,u,u,u,u,u,u,u),u,B.Y,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.L(x.q).f.T(A.b3(u,u,u,u,u,B.t,u,A.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,B.Y,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new A.V(Date.now(),0,!1).u(0)
w=v.a
t.cX7(new A.d7(s,w.c.a,w.d,B.fS,v.d,r,v.f,v.gatK(),B.dI,new A.V(Date.now(),0,!1)))
w=v.c
w.toString
A.j1(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.eJ(o,o,o,!0,!0,B.BK,o,1,!0,o,0,!1,o,!1,B.c,o,A.aI(o,o,o,o,B.HY,o,o,o,new C.e5I(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.fH7,o,o,o,1,o,!0),m=A.m(26),l=A.L(D.eY.j(0.25),B.r,1),k=x.V,j=A.a([new A.ab(0,B.G,B.b2.j(0.25),B.eQ,24)],k),i=x.p
j=A.q(o,A.x(A.a([A.d("YOU'RE ADDING",o,o,o,o,o,o,A.l(o,o,B.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,B.I,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),B.am,A.ev(B.A,A.d("$"+A.dF(p.a.d),o,o,o,o,o,o,D.fp9,o,o,o),B.f,B.dE),B.am,A.d("to your Growth Income wallet",o,o,o,o,o,o,A.l(o,o,D.eY.j(0.85),o,o,o,o,o,o,o,o,12,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.l,o,B.e,B.j,0,B.p),B.f,o,o,new A.p(o,o,l,m,j,D.cau,B.n),o,o,o,o,B.amI,o,o,o)
m=p.c7k()
l=p.aCY(1,"Send the money to NGMY Pay",p.ccC())
w=p.aCY(2,"Put this code in the payment note",p.bL_())
v=p.d===B.l1
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=A.l(o,o,B.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o)
t=p.aCY(3,u,A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.e,o,o,o,o,o,2,A.bz(o,o,o,o,o,o,o,o,!0,new A.b6(4,A.m(18),new A.ay(B.c.j(0.08),1,B.r,-1)),o,o,o,o,o,B.uo,!0,o,o,o,o,new A.b6(4,A.m(18),D.b58),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.fqH,t,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,B.tO,!0,B.a5,o,B.ao,o,o,o,o))
r=p.f!=null
v=r?8:22
u=A.m(20)
s=r?D.eY:B.c
s=A.L(s.j(r?0.5:0.12),B.r,1.4)
q=r?A.x(A.a([A.bw(A.m(14),new A.cP(D.b6y,new A.Fs(p.f,o),o),B.aq),B.T,D.f9D,B.aw],i),B.l,o,B.e,B.j,0,B.p):A.x(A.a([A.q(o,D.c2y,B.f,o,o,new A.p(D.eY.j(0.12),o,o,o,o,o,B.a6),o,54,o,o,o,o,o,54),B.W,D.fMz,B.cS,A.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.l,o,B.e,B.j,0,B.p)
return A.c4(n,B.BK,A.as(new A.cP(B.aeq,A.cl(A.a([j,B.bz,m,B.bz,l,w,t,p.b9y(4,"Screenshot of your payment",A.az(o,A.q(o,q,B.f,o,o,new A.p(B.uo,o,s,u,o,o,B.n),o,o,o,o,new A.R(v,v,v,v),o,o,o),B.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcol(),o,o,o,o,o,o,!1,B.a4),!0),B.am,A.d(p.a.r,o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a8,o,1.4,!0,o,o,o,o,o,o,o,o),B.K,o,o),B.aO,new A.a5(o,56,new A.bN(new A.p(o,o,o,A.m(18),A.a([new A.ab(0,B.G,B.b2.j(0.45),B.dp,18)],k),D.c95,B.n),B.bj,A.lS(D.c19,D.fXB,p.gccD(),A.ft(o,o,B.L,o,o,o,o,o,o,B.c,o,o,o,B.L,new A.b9(A.m(18),B.a1),o,o,o,o,o)),o),o)],i),o,o,D.bF7,o,o,B.ah,!1),o),o,o,o),o,!1,!1,o,o)},
c7k(){var w=null,v=new C.e5D(this),u=A.m(18),t=A.L(B.c.j(0.06),B.r,1)
return A.q(w,A.A(A.a([v.$3(B.l1,B.hM,"Cash App"),B.e8,v.$3(B.a8Q,D.ar5,"Bitcoin")],x.p),B.l,w,B.e,B.j,0,w,w),B.f,w,w,new A.p(B.uo,w,t,u,w,w,B.n),w,w,w,w,B.me,w,w,w)},
b9y(d,e,f,g){var w,v=null,u=x.p,t=A.a([A.q(B.A,A.d(""+d,v,v,v,v,v,v,D.fwe,v,v,v),B.f,v,v,D.b7g,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(A.E(A.q(v,v,B.f,D.eY.j(0.18),v,v,v,v,v,B.wm,v,v,v,2),1))
t=A.x(t,B.l,v,B.e,B.j,0,B.p)
w=g?12:20
return new A.EP(A.A(A.a([new A.a5(34,v,t,v),B.au,A.E(new A.D(new A.R(0,0,0,w),A.x(A.a([new A.D(B.a0a,A.d(e,v,v,v,v,v,v,Aa.KJ,v,v,v),v),f],u),B.al,v,B.e,B.j,0,B.p),v),1)],u),B.al,v,B.e,B.j,0,v,v),v)},
aCY(d,e,f){return this.b9y(d,e,f,!1)},
ccC(){var w,v,u,t,s=this,r=null,q=s.d===B.l1?s.gaac():s.gR4(),p=A.m(20),o=A.m(20),n=s.d===B.l1,m=n?D.c82:D.c9R,l=A.a([new A.ab(0,B.G,(n?D.ajn:D.YP).j(0.35),B.cC,16)],x.V),k=A.m(12)
n=s.d===B.l1
w=n?B.hM:D.ar5
k=A.q(r,A.X(w,n?D.ajn:D.YP,r,r,r,30),B.f,r,r,new A.p(B.c,r,r,k,r,r,B.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=A.d(n,r,r,r,r,r,r,A.l(r,r,B.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===B.l1
t=u?22:13
v=A.d(v,r,1,B.a2,r,r,r,A.l(r,r,B.c,r,r,r,r,r,r,r,r,t,r,r,B.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=A.E(A.x(A.a([n,B.bG,v,B.aw,A.A(A.a([D.bYO,B.dh,A.d(s.d===B.l1?"Tap to pay $"+A.dF(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,B.rc,r,r,r)],u),B.l,r,B.e,B.j,0,r,r)],u),B.E,r,B.e,B.j,0,B.p),1)
return A.aH(!1,B.a3,!0,r,A.aP(!1,p,!0,A.ez(A.A(A.a([k,B.bc,v,A.aI(r,r,r,r,D.bXN,r,r,r,w?r:new C.e5G(s,q),r,r,r,r,"Copy",r)],u),B.l,r,B.e,B.j,0,r,r),r,new A.p(r,r,r,o,l,m,B.n),r,B.am8,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gcjy(),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
bL_(){var w,v,u,t,s,r,q,p,o=null,n=A.m(20),m=A.L(B.b8.j(0.35),B.r,1),l=x.p,k=A.a([],l)
for(w=this.gatK().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new A.aN(12,12)
q=A.a([B.b8.j(0.28),B.b8.j(0.08)],u)
p=new A.ay(B.eK.j(0.4),1,B.r,-1)
k.push(A.q(B.A,A.d(s,o,o,o,o,o,o,B.pY,o,o,o),B.f,o,o,new A.p(o,o,new A.bH(p,p,p,p),new A.be(r,r,r,r),o,new A.a8(B.b1,B.b7,B.x,q,o,o),B.n),o,52,o,B.jq,o,o,o,42))}return A.q(o,A.x(A.a([A.A(k,B.l,o,B.ba,B.j,0,o,o),B.ae,A.A(A.a([A.E(A.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,A.l(o,o,B.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.af,A.hp(B.a3M,D.fZB,new C.e5C(this),A.fv(o,o,o,o,o,o,o,o,o,o,o,B.eK,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),B.l,o,B.e,B.j,0,o,o)],l),B.l,o,B.e,B.j,0,B.p),B.f,o,o,new A.p(B.uo,o,m,n,o,o,B.n),o,o,o,o,B.bI,o,o,o)}}
C.rR.prototype={
aj(){var w=this
return A.I(["id",w.a,"title",w.b,"start",w.c.ag(),"end",w.d.ag(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.rS.prototype={
aj(){var w=this
return A.I(["id",w.a,"when",w.b.ag(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gWl(){var w=this,v=A.a([],x.s),u=w.d
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
u=w.c
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
v.push(C.hoC(w.b))
u=w.e
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
return B.d.aO(v," \xb7 ")},
giF(d){return this.c}}
C.lY.prototype={
aj(){var w,v=this,u=A.T(x.N,x.z)
u.n(0,"type",v.a)
w=v.b
if(w.length!==0)u.n(0,"content",w)
w=v.c
if(w!=null&&w.length!==0)u.n(0,"url",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"label",w)
return u}}
C.is.prototype={
aj(){var w,v=this,u=A.T(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"question",v.b)
w=J.b8(v.c,new C.cgi(),x.P)
w=A.C(w,w.$ti.k("ak.E"))
u.n(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"thumbnailPath",w)
u.n(0,"printable",v.e)
u.n(0,"sortOrder",v.f)
return u}}
C.id.prototype={
amk(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.id(v,u,t,s,r,h==null?w.f:h)},
bf9(d){var w=null
return this.amk(w,w,w,w,d,w)},
cPl(d,e,f){return this.amk(d,e,null,null,null,f)},
bf8(d){var w=null
return this.amk(w,w,w,d,w,w)},
cP_(d,e){var w=null
return this.amk(w,w,d,w,e,w)},
aj(){var w=this,v=C.i9u(w.c),u=w.e,t=A.U(u).k("N<1,a9<n,@>>")
u=A.C(new A.N(u,new C.cgg(),t),t.k("ak.E"))
return A.I(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.bbb.prototype={}
C.WH.prototype={
S(){return new C.aFv(new A.au(B.ax,$.ax()),A.mZ(0,null,null),A.a([],x.m))},
UU(d){return this.d.$1(d)}}
C.aFv.prototype={
Y(){var w,v=this
v.a4()
w=J.b8(v.a.c,new C.e9M(),x.i)
w=A.C(w,w.$ti.k("ak.E"))
B.d.aZ(w,new C.e9N())
v.d=w
v.JI()},
t(){var w=this.w
w.U$=$.ax()
w.P$=0
this.x.t()
this.a3()},
afp(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$afp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.JI()
u.m(new C.e9G(u))
t=u.a
t.toString
s=u.d
s===$&&A.c()
w=2
return A.b(t.UU(s),$async$afp)
case 2:r=e
if(u.c!=null){u.m(new C.e9H(u))
t=u.c.L(x.q).f
s=A.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.T(A.b3(null,null,null,r?B.d0:B.ay,null,B.t,null,s,null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$afp,v)},
a9q(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a9q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&A.c()
s=new C.id(q,"New Category",B.Hx,4284773515,D.aBY,p.length)
t.m(new C.e9p(t,s))
t.JI()
p=t.c
if(p==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.e9q(s),p,null,!0,!0,x.i),$async$a9q)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.e9r(t,q,r))
case 1:return A.h(u,v)}})
return A.i($async$a9q,v)},
a2k(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a2k=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=B.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.m(new C.e9D(t,p))
q.bP(0,B.cf)
q=t.a.e
s=t.d
s===$&&A.c()
w=3
return A.b(C.cgd(p,q,s),$async$a2k)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.e9E(t,r))
$.aW.x1$.push(new C.e9F(t))
case 1:return A.h(u,v)}})
return A.i($async$a2k,v)},
abr(d){return this.bRc(d)},
bRc(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$abr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&A.c()
t=r[d]
r=u.c
r.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.e9x(t),r,null,!0,!0,x.i),$async$abr)
case 2:s=f
if(s!=null)u.m(new C.e9y(u,d,s))
return A.h(null,v)}})
return A.i($async$abr,v)},
bOR(d){this.m(new C.e9w(this,d))
this.JI()},
JI(){var w,v,u=this.d
u===$&&A.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].bf9(v)},
cgU(d,e){var w={}
w.a=e
this.m(new C.e9C(w,this,d))},
ZE(d){return this.c6f(d)},
c6f(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$ZE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=A.ec(new C.e9B(u,d),!1,null,x.H)
w=2
return A.b(A.a6(s,!1).ce(t),$async$ZE)
case 2:return A.h(null,v)}})
return A.i($async$ZE,v)},
bH9(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?A.a([B.fY,B.br],l):A.a([B.nn,B.eF],l)
w=A.m(16)
v=A.L(m?B.d7.j(0.35):B.dn,B.r,1)
u=A.X(B.ed,m?B.dn:B.dN,n,n,n,n)
t=A.E(A.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,A.l(n,n,m?B.aS:B.a_,n,n,n,n,n,n,n,n,n,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.a23:Ac.OS
r=x.p
s=A.a([A.aP(!1,n,!0,A.A(A.a([u,B.af,t,A.X(s,m?B.bN:B.an,n,n,n,n)],r),B.l,n,B.e,B.j,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.e9t(o),n,n,n,n,n,n,n)],r)
if(o.r){u=A.a([B.W],r)
t=o.y
if(t.length!==0){q=(m?D.u6:B.c).j(0.65)
p=A.m(12)
u.push(A.q(n,A.kr(!0,n,o.x,new C.e9u(o,d),t.length,n,n,n,n,!1,!1),B.f,n,B.ael,new A.p(q,n,n,p,n,n,B.n),n,n,n,n,B.cn,n,n,n))}u.push(B.T)
t=o.w
q=A.l(n,n,m?B.aS:B.a_,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=A.l(n,n,m?B.bN:B.an,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?B.br:B.aS
q=A.E(A.aM(n,B.Z,!1,n,!0,B.t,n,A.aO(),t,n,n,n,n,n,2,A.bz(n,new A.b6(4,A.m(14),B.a1),n,B.f_,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.e9v(o),n,!1,n,n,!1,n,!0,n,B.ad,n,n,n,n,n,n,n,n,n,n,n,q,!0,B.a5,n,B.ao,n,n,n,n),1)
m=o.f?n:o.gcvq()
p=A.bp(B.bn,n,n,n,n,n,B.jp,n,n,n,n,n)
u.push(A.A(A.a([q,new A.JS(t,B.bn,n),B.dh,A.bJ(o.f?B.r9:D.arh,n,m,p)],r),B.dP,n,B.e,B.j,0,n,n))
B.d.v(s,u)}return A.cT(n,A.x(s,B.al,n,B.e,B.j,0,B.p),n,n,B.b_,new A.p(n,n,v,w,n,new A.a8(B.a7,B.aa,B.x,l,n,n),B.n),B.iN,n,n,n,B.GN,B.bI,n,n,n)},
B(d){var w,v=this,u=null,t=A.P(d).ax.a===B.H,s=new C.bbb(t),r=t?B.bB:B.cd,q=t?B.bB:u,p=t?B.aS:B.a_,o=A.d("Help Topics Admin",u,u,u,u,u,u,A.l(u,u,t?B.aS:B.a_,u,u,u,u,u,u,u,u,u,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gccI()
if(n)n=B.V2
else n=A.X(B.ze,t?B.aS:B.a_,u,u,u,u)
w=x.p
o=A.eJ(A.a([A.hp(n,A.d("Save",u,u,u,u,u,u,A.l(u,u,t?B.aS:B.a_,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=R.aWQ(B.aN,u,N.XR,B.oH,D.fVP,v.gbDq())
q=v.bH9(s)
n=A.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,A.l(u,u,t?B.bN:B.an,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&A.c()
return A.c4(o,r,A.x(A.a([q,new A.D(B.GN,n,u),A.E(H.ht6(!1,new C.e9L(v,s),m.length,v.gcgT(),D.bDW,u,!1),1)],w),B.al,u,B.e,B.j,0,B.p),u,!1,!1,p,u)}}
C.Qw.prototype={
S(){return new C.bd6()}}
C.bd6.prototype={
Y(){var w,v=this
v.a4()
w=v.a.c
v.d=new A.au(new A.ba(w.b,B.b5,B.aP),$.ax())
v.e=w.c
v.f=w.d},
t(){var w=this.d
w===$&&A.c()
w.U$=$.ax()
w.P$=0
this.a3()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.H,q=r?D.u6:B.c,p=A.d("Edit category",s,s,s,s,s,s,A.l(s,s,r?B.c:B.bq,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,B.Z,!1,s,!0,B.t,s,A.aO(),o,s,s,s,s,s,2,D.c4k,B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.ad,s,s,s,s,s,s,s,s,s,s,s,A.l(s,s,r?B.c:B.bq,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,B.a5,s,B.ao,s,s,s,s)
w=x.aS
w=A.C(new A.N(D.caY,new C.cVv(t),w),w.k("ak.E"))
w=A.bW(B.bH,w,B.bs,s,8,8)
v=x.gN
v=A.C(new A.N(D.d9Y,new C.cVw(t),v),v.k("ak.E"))
u=x.p
v=A.ce(A.x(A.a([o,B.ae,w,B.ae,A.bW(B.bH,v,B.bs,s,0,8)],u),B.l,s,B.e,B.P,0,B.p),B.t,s,B.y,s,s,s,s,B.ah)
return A.eg(A.a([A.bO(!1,B.dt,s,s,!0,s,s,s,new C.cVx(d),s,s),A.bJ(B.rd,s,new C.cVy(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.a1d.prototype={
S(){return new C.aHs()},
pc(d){return this.d.$1(d)}}
C.aHs.prototype={
Y(){this.a4()
this.d=A.bq(this.a.c.e,!0,x.u)},
azh(){var w=this.a,v=w.c,u=this.d
u===$&&A.c()
return w.pc(v.bf8(u))},
a9s(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a9s=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&A.c()
w=2
return A.b(u.b3g(new C.is("q_"+1000*s,"",D.d8v,null,!1,r.length)),$async$a9s)
case 2:t=e
if(t!=null){u.m(new C.f10(u,t))
u.azh()}return A.h(null,v)}})
return A.i($async$a9s,v)},
b3g(d){var w,v=this.c
v.toString
w=A.ec(new C.f11(d),!1,null,x.u)
return A.a6(v,!1).ce(w)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.H,t=u?B.bB:B.cd,s=u?B.bB:v,r=u?B.aS:B.a_,q=w.a.c
s=A.eJ(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,A.d(q.b+" \u2014 Questions",v,v,v,v,v,v,A.l(v,v,u?B.aS:B.a_,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=R.aWQ(B.aN,v,N.XR,B.oH,D.h0G,w.gbDS())
q=w.d
q===$&&A.c()
q=q.length
if(q===0){q=A.as(A.d("No questions yet. Tap + Question.",v,v,v,v,v,v,A.l(v,v,u?B.bN:B.an,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=A.hP(v,new C.f16(w,new C.bbb(u)),q,D.bE5,v,B.ah,new C.f17(),!1)
return A.c4(s,t,u,v,!1,!1,r,v)}}
C.a1c.prototype={
S(){return new C.aHr()}}
C.aHr.prototype={
Y(){var w,v=this
v.a4()
w=v.a.c
v.d=new A.au(new A.ba(w.b,B.b5,B.aP),$.ax())
w=A.bq(w.c,!0,x.bP)
v.e=w
if(B.d.gau(w))J.c7(v.e,D.a7Z)
w=v.a.c
v.f=w.d
v.r=w.e},
t(){var w=this.d
w===$&&A.c()
w.U$=$.ax()
w.P$=0
this.a3()},
afo(){var w=0,v=A.j(x.H),u=this,t
var $async$afo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A0.Hy(78,1920),$async$afo)
case 2:t=e
if(t!=null)u.m(new C.f0X(u,t))
return A.h(null,v)}})
return A.i($async$afo,v)},
agx(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$agx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=A.ec(new C.f0V(u),!1,null,x.dZ)
w=2
return A.b(A.a6(r,!1).ce(t),$async$agx)
case 2:s=e
if(s!=null)u.m(new C.f0W(u,s))
return A.h(null,v)}})
return A.i($async$agx,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.P(a1).ax.a===B.H,g=h?B.bB:B.cd,f=h?B.bB:i,e=h?B.aS:B.a_,d=A.d("Edit Question",i,i,i,i,i,i,A.l(i,i,h?B.aS:B.a_,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=A.eJ(A.a([A.dh(T.a3V,B.rd,new C.f0Z(j,a1),A.bp(B.aN,i,i,i,B.c,i,i,i,i,i,i,i)),B.au],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=A.d("Question thumbnail",i,i,i,i,i,i,A.l(i,i,h?B.aS:B.a_,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=A.m(14)
w=j.f
v=h?B.bN:B.an
w=A.az(i,A.bw(e,K.aRH(A.m(14),B.c_,140,B.CF,v,w,1/0),B.aq),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gccH(),i,i,i,i,i,i,!1,B.a4)
e=A.d("Question users will tap",i,i,i,i,i,i,A.l(i,i,h?B.aS:B.a_,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?B.br:B.aS
u=A.m(16)
t=A.L(h?B.aM:B.bl,B.r,1)
s=j.d
s===$&&A.c()
r=A.l(i,i,h?B.aS:B.a_,i,i,i,i,i,i,i,i,15,i,i,B.a8,i,i,!0,i,i,i,i,i,i,i,i)
v=A.q(i,A.A(A.a([A.E(A.aM(i,B.Z,!1,i,!0,B.t,i,A.aO(),s,i,i,i,i,i,2,A.bz(i,B.eN,i,B.bh,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.l(i,i,h?B.bN:B.an,i,i,i,i,i,i,i,i,i,i,i,B.cE,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),B.y,!0,i,!0,i,!1,i,B.ak,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,B.ad,i,i,i,i,i,i,i,i,i,i,i,r,!0,B.a5,i,B.ao,i,i,i,i),1),new A.JS(j.d,i,i)],a0),B.l,i,B.e,B.j,0,i,i),B.f,i,i,new A.p(v,i,t,u,i,i,B.n),i,i,i,i,B.eA,i,i,i)
u=A.d("Printable document",i,i,i,i,i,i,A.l(i,i,h?B.aS:B.a_,i,i,i,i,i,i,i,i,i,i,i,B.a8,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=A.iQ(B.aN,i,i,B.ag,i,new C.f1_(j),i,A.d("Shows a printable badge on this answer",i,i,i,i,i,i,A.l(i,i,h?B.bN:B.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=A.d("Stored answer (not AI)",i,i,i,i,i,i,A.l(i,i,h?B.aS:B.a_,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=A.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,A.l(i,i,h?B.bN:B.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.u6:B.c
q=A.m(16)
p=A.m(16)
o=A.m(16)
n=A.L(B.bn.j(0.45),B.r,1)
m=A.q(i,D.bWu,B.f,i,i,new A.p(B.bn.j(0.12),i,i,A.m(12),i,i,B.n),i,i,i,i,B.bh,i,i,i)
l=A.d("Open Document Editor",i,i,i,i,i,i,A.l(i,i,h?B.aS:B.a_,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&A.c()
k=J.ad(k)
l=A.E(A.x(A.a([l,B.aw,A.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,A.l(i,i,h?B.bN:B.an,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),B.E,i,B.e,B.j,0,B.p),1)
return A.c4(d,g,A.cl(A.a([f,B.T,w,B.dc,e,B.T,v,B.aO,u,B.T,t,B.aw,s,B.ae,A.aH(!1,B.a3,!0,q,A.aP(!1,p,!0,A.q(i,A.A(A.a([m,B.ew,l,A.X(B.zc,h?B.bN:B.an,i,i,i,16)],a0),B.l,i,B.e,B.j,0,i,i),B.f,i,i,new A.p(i,i,n,o,i,i,B.n),i,i,i,i,B.ft,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gciv(),i,i,i,i,i,i,i),B.f,r,0,i,i,i,i,i,B.aj)],a0),i,i,B.bS,i,i,B.ah,!1),i,!1,!1,i,i)}}
C.dch.prototype={}
C.WI.prototype={
S(){return new C.aFx(A.ka(!0,null,!0,!0,null,null,!1))}}
C.aFx.prototype={
Y(){var w,v,u,t,s,r,q=this
q.a4()
w=J.dI(q.a.c,new C.eam())
w=A.C(w,w.$ti.k("M.E"))
q.e=w
v=A.a([],x.s)
for(w=J.aT(q.a.c);w.C();){u=w.gR(w)
switch(u.a){case"heading":v.push("## "+u.b)
break
case"text":u=u.b
if(B.a.i(u).length!==0)v.push(u)
break
case"bullets":for(u=u.b.split("\n"),t=u.length,s=0;s<t;++s){r=B.a.i(u[s])
if(r.length!==0)v.push("\u2022 "+r)}break
default:break}}w=B.d.aO(v,"\n\n")
q.d=new A.au(new A.ba(w,B.b5,B.aP),$.ax())},
t(){var w=this.d
w===$&&A.c()
w.U$=$.ax()
w.P$=0
this.f.t()
this.a3()},
azi(d,e){var w,v,u,t,s,r=this.d
r===$&&A.c()
r=r.a
w=r.b
if(!w.geE())return
v=r.a
r=w.a
u=w.b
t=d+B.a.aB(v,r,u)+e
s=B.a.oc(v,r,u,t)
this.d.bP(0,new A.ba(s,A.hh(B.bC,r+t.length),B.aP))},
b1l(d){var w,v,u,t,s=this.d
s===$&&A.c()
s=s.a
w=s.a
v=B.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=B.a.oc(w,v,v,u)
this.d.bP(0,new A.ba(t,A.hh(B.bC,v+u.length),B.aP))},
ad8(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ad8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A0.Hy(78,1920),$async$ad8)
case 3:s=e
if(s==null){w=1
break}t.m(new C.ea2(t,s))
case 1:return A.h(u,v)}})
return A.i($async$ad8,v)},
Z7(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Z7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hX().a6P(B.eP),$async$Z7)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return A.b(s.fq(),$async$Z7)
case 4:t.m(new r.ea7(t,e))
case 1:return A.h(u,v)}})
return A.i($async$Z7,v)},
ad9(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$ad9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=$.ax()
s=new A.au(B.ax,t)
r=new A.au(new A.ba("https://",B.b5,B.aP),t)
q=u.c
q.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.ea5(s,r),q,null,!0,!0,x.y),$async$ad9)
case 2:if(e===!0)u.m(new C.ea6(u,s,r))
s.U$=t
s.P$=0
r.U$=t
r.P$=0
return A.h(null,v)}})
return A.i($async$ad9,v)},
bI6(){var w,v,u,t,s,r=null,q=A.a([],x.a),p=this.d
p===$&&A.c()
p=B.a.fw(p.a.a,A.ag("\\n\\s*\\n",!0,!1,!1,!1))
w=new A.N(p,new C.e9Z(),A.U(p).k("N<1,n>")).bY(0,new C.ea_())
for(p=J.aT(w.a),v=new A.eH(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gR(p)
if(B.a.a_(s,"## "))q.push(new C.lY("heading",B.a.i(B.a.b2(s,3)),r,r))
else if(B.a.a_(s,"\u2022 ")||B.a.a_(s,"- "))q.push(new C.lY("bullets",new A.N(A.a(s.split("\n"),u),new C.ea0(),t).bY(0,new C.ea1()).aO(0,"\n"),r,r))
else q.push(new C.lY("text",s,r,r))}p=this.e
p===$&&A.c()
B.d.v(q,p)
if(q.length===0)q.push(D.a7Z)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.H,m=new C.dch(n),l=n?B.as:B.hd,k=A.d(p.a.d,o,o,o,o,o,o,B.cG,o,o,o),j=x.p
k=A.eJ(A.a([A.dh(T.a3V,B.abH,new C.eac(p,d),A.bp(B.aN,o,o,o,B.c,o,o,o,o,o,o,o)),B.af],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?B.cl:B.hZ
v=A.bW(B.bH,A.a([p.wg(E.OT,"Bold",new C.ead(p),m),p.wg(E.a25,"Italic",new C.eae(p),m),p.wg(E.aoE,"Underline",new C.eaf(p),m),p.wg(Ag.a2c,"Heading",new C.eag(p),m),p.wg(N.OU,"Bullets",new C.eah(p),m),p.wg(E.aoD,"Align",new C.eai(),m),p.wg(B.He,"Link",p.gc37(),m),p.wg(B.qI,"Image",p.gc36(),m),p.wg(A_.a2q,"Video",p.gc38(),m),p.wg(M.a3z,"Signature",new C.eaj(p),m),p.wg(A_.OV,"Divider",new C.eak(p),m)],j),B.bs,o,4,4)
w=A.q(o,A.x(A.a([v,B.am,A.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,A.l(o,o,n?B.d2:B.bi,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),B.al,o,B.e,B.j,0,B.p),B.f,w,o,o,o,o,o,o,E.anf,o,o,o)
v=n?B.bB:B.c
u=A.m(12)
t=A.L(n?B.cX:B.e1,B.r,1)
s=A.a([new A.ab(0,B.G,B.w.j(n?0.35:0.08),B.cL,16)],x.V)
r=p.d
r===$&&A.c()
q=A.l(o,o,n?B.j3:B.as,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=A.a([w,A.E(new A.D(B.bS,A.q(o,A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),r,o,o,o,o,o,2,A.bz(o,B.eN,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.d2:B.bi,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,p.f,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,q,!0,B.a5,o,B.ao,o,o,o,o),B.f,o,o,new A.p(v,o,t,u,s,o,B.n),o,o,o,o,A7.Cs,o,o,o),o),1)],j)
n=p.e
n===$&&A.c()
if(n.length!==0){n=new A.i3(n,A.U(n).k("i3<1>"))
j.push(A.q(o,A.bW(B.bH,n.gdO(n).dM(0,new C.eal(p,m),x.g5).dn(0),B.bs,o,0,8),B.f,o,o,o,o,o,o,o,B.O8,o,o,o))}return A.c4(k,l,A.x(j,B.l,o,B.e,B.j,0,B.p),o,!1,!1,o,o)},
wg(d,e,f,g){var w=null,v=g.a,u=v?B.bB:B.c,t=A.m(8),s=A.m(8)
return A.h6(A.aH(!1,B.a3,!0,t,A.aP(!1,s,!0,new A.D(B.cn,A.X(d,v?B.j3:B.as,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,w,w,w,B.aj),w,e,w,w)}}
C.dqJ.prototype={}
C.aD8.prototype={
a7(){return"_KbView."+this.b}}
C.arH.prototype={
S(){return new C.aFw(D.b0D)},
cWi(d,e){return this.e.$2$size(d,e)}}
C.aFw.prototype={
gaC8(){var w,v
if(this.e==null)return null
for(w=J.aT(this.a.c);w.C();){v=w.gR(w)
if(v.a===this.e)return v}return null},
gcxE(){var w,v,u,t,s,r=this.gaC8()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
ccJ(d){this.m(new C.e9W(this,d))},
cjH(d){this.m(new C.e9X(this,d))},
bGe(){this.m(new C.e9O(this))},
bGg(){this.m(new C.e9P(this))},
gb8Y(){var w=A.bq(this.a.c,!0,x.i)
B.d.aZ(w,new C.e9Y())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.H,f=new C.dqJ(g),e=x.O
e=g?A.a([B.a_.j(0.9),B.br.j(0.85)],e):A.a([B.eF.j(0.55),B.nw.j(0.45)],e)
w=A.m(22)
v=A.L((g?B.aM:B.fI).j(0.55),B.r,1)
switch(i.d.a){case 0:g=i.bHm(f)
break
case 1:g=i.gaC8()
g.toString
g=i.bI4(f,g)
break
case 2:u=i.gaC8()
u.toString
t=i.gcxE()
t.toString
s=A.b0(u.d)
r=A.m(16)
r=A.q(h,A.d(t.b,h,h,h,h,h,h,D.fvd,h,h,h),B.f,h,h,new A.p(B.aN,h,h,r,h,h,B.n),h,h,h,h,B.bI,h,h,1/0)
q=g?B.as:B.c
p=A.m(16)
o=A.L(g?B.aM:B.bl,B.r,1)
n=A.a([new A.ab(0,B.G,B.w.j(g?0.28:0.06),B.ev,10)],x.V)
m=g?B.fY:B.nn
l=A.m(8)
k=A.X(B.oy,g?B.dn:B.dN,h,h,h,14)
j=x.p
j=A.x(A.a([new C.aD6(f,i.gbGf(),u.c,s,"Answer",h),A.E(A.cl(A.a([r,B.ae,A.q(h,A.x(A.a([A.q(h,A.A(A.a([k,B.e8,A.d("Stored answer",h,h,h,h,h,h,A.l(h,h,g?B.dn:B.dN,h,h,h,h,h,h,h,h,11,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),B.l,h,B.e,B.P,0,h,h),B.f,h,h,new A.p(m,h,h,l,h,h,B.n),h,h,h,B.en,B.hf,h,h,h),new C.b1P(t.c,t.e,f,h)],j),B.E,h,B.e,B.j,0,B.p),B.f,h,h,new A.p(q,h,o,p,n,h,B.n),h,h,h,h,B.bS,h,h,1/0)],j),h,h,B.am1,h,h,B.ah,!1),1)],j),B.al,h,B.e,B.j,0,B.p)
g=j
break
default:g=h}return A.q(h,g,B.aq,h,h,new A.p(h,h,v,w,h,new A.a8(B.b1,B.b7,B.x,e,h,h),B.n),h,h,h,B.i1,h,h,h,h)},
aZz(d){var w,v,u,t=null,s=d.a,r=s?D.u6:B.c,q=B.aE.j(0.22)
q=A.a([new A.ab(0,B.G,q,B.J,14),new A.ab(0,B.G,B.w.j(s?0.28:0.06),B.J,8)],x.V)
w=A.L(s?B.aM:B.fI,B.r,2)
v=this.a
u=x.p
q=A.a([A.q(t,A.hV(v.cWi(v.d,72),B.aq),B.f,t,t,new A.p(r,t,w,t,q,t,B.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)B.d.v(q,A.a([B.am,A.d("Tap to switch",t,t,t,t,t,t,A.l(t,t,B.d0,t,t,t,t,t,t,t,t,12,t,t,B.U,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return A.x(q,B.l,t,B.e,B.j,0,B.p)},
bHm(d){var w,v,u=this,t=null,s=u.a.r
s=A.as(s!=null?A.az(t,u.aZz(d),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,B.a4):u.aZz(d),t,t,t)
w=d.a
v=A.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,A.l(t,t,w?B.aS:B.a_,t,t,t,t,t,t,t,t,20,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),B.K,t,t)
return A.cl(A.a([s,B.aB,v,B.am,A.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,A.l(t,t,w?B.bN:B.an,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),B.K,t,t),B.bz,A.ip(!0,t,t,B.y,F.aU_,new C.e9R(u,d),u.gb8Y().length,t,B.dZ,B.ah,!0)],x.p),t,t,D.bE6,t,t,B.ah,!1)},
bI4(d,e){var w,v,u,t,s=null,r=A.bq(e.e,!0,x.u)
B.d.aZ(r,new C.e9T())
w=A.b0(e.d)
v=d.a
u=A.d("Tap a question to read the stored answer.",s,s,s,s,s,s,A.l(s,s,v?B.bN:B.an,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=A.as(A.d("No questions in this category yet.",s,s,s,s,s,s,A.l(s,s,v?B.bN:B.an,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=A.hP(s,new C.e9U(this,r,d,e),t,B.wn,s,B.ah,new C.e9V(),!1)
return A.x(A.a([new C.aD6(d,this.gbGd(),e.c,w,e.b,s),new A.D(Ao.wp,u,s),A.E(v,1)],x.p),B.al,s,B.e,B.j,0,B.p)}}
C.aD6.prototype={
B(d){var w=this,v=null,u=w.c.a,t=A.aI(v,v,v,v,A.X(B.eM,u?B.aS:B.a_,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=A.m(12)
q=A.q(v,A.X(w.e,s,v,v,v,22),B.f,v,v,new A.p(r,v,v,q,v,v,B.n),v,v,v,v,B.cn,v,v,v)
return new A.D(D.bHo,A.A(A.a([t,q,B.au,A.E(A.d(w.r,v,v,v,v,v,v,A.l(v,v,u?B.aS:B.a_,v,v,v,v,v,v,v,v,17,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.l,v,B.e,B.j,0,v,v),v)}}
C.ad8.prototype={
B(d){var w=null,v=this.c,u=A.b0(v.d),t=this.d.a,s=t?D.u6:B.c,r=A.m(14),q=A.m(14),p=A.m(14),o=A.L(t?B.aM:B.bl,B.r,1),n=A.a([new A.ab(0,B.G,B.w.j(t?0.28:0.06),B.dM,6)],x.V),m=u.j(0.15),l=A.m(12)
l=A.q(w,A.X(v.c,u,w,w,w,22),B.f,w,w,new A.p(m,w,w,l,w,w,B.n),w,40,w,w,w,w,w,40)
return new A.fH(1,A.aH(!1,B.a3,!0,r,A.aP(!1,q,!0,A.q(w,A.x(A.a([l,B.am,A.d(v.b,w,2,B.a2,w,w,w,A.l(w,w,t?B.aS:B.a_,w,w,w,w,w,w,w,w,10,w,w,B.I,w,1.1,!0,w,w,w,w,w,w,w,w),B.K,w,w)],x.p),B.l,w,B.ba,B.j,0,B.p),B.f,w,w,new A.p(w,w,o,p,n,w,B.n),w,w,w,w,B.cn,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.aj),w)}}
C.b1P.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=A.a([],q)
if(this.d){w=r.a
v=w?B.fY:B.nn
u=A.m(8)
t=A.X(B.uX,w?B.dn:B.dN,s,s,s,14)
p.push(A.q(s,A.A(A.a([t,B.dh,A.d("Printable document",s,s,s,s,s,s,A.l(s,s,w?B.dn:B.dN,s,s,s,s,s,s,s,s,10,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),B.l,s,B.e,B.P,0,s,s),B.f,s,s,new A.p(v,s,s,u,s,s,B.n),s,s,s,B.cy,B.eL,s,s,s))}B.d.v(p,J.b8(this.c,new C.cge(r),x.l))
return A.x(p,B.E,s,B.e,B.j,0,B.p)}}
C.ad0.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new A.D(D.bBL,A.d(q.b,r,r,r,r,r,r,A.l(r,r,s.d.a?B.aS:B.a_,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new A.D(B.hJ,A.bw(A.m(12),K.aRH(r,B.c_,160,B.qI,r,w,1/0),B.aq),r)
case"video":v=q.c
q=v==null?q.b:v
return new A.D(B.hJ,new C.aD7(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new A.D(B.wm,A.aP(!1,r,!0,A.d(q,r,r,r,r,r,r,A.l(r,r,s.d.a?B.cv:B.bn,r,B.nd,r,r,r,r,r,r,r,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cP0(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=A.iK(v?B.aM:B.bl,r,r,r,r,r)
q=A.d(q.b,r,r,r,r,r,r,A.l(r,r,v?B.cx:B.aM,r,r,r,r,r,r,r,r,r,B.cK,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=A.q(r,r,B.f,v?B.bN:B.an,r,r,r,1,r,r,r,r,r,120)
return new A.D(B.Cf,A.x(A.a([u,q,B.aO,t,B.aw,A.d("Signature",r,r,r,r,r,r,A.l(r,r,v?B.bN:B.an,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.j,0,B.p),r)
case"bullets":v=x.cl
q=A.C(new A.cM(new A.Y(A.a(q.b.split("\n"),x.s),new C.cP1(),x.cc),new C.cP2(s),v),v.k("M.E"))
return new A.D(B.kx,A.x(q,B.E,r,B.e,B.j,0,B.p),r)
case"divider":return new A.D(B.hJ,A.iK(s.d.a?B.aM:B.bl,r,r,r,r,r),r)
default:q=q.b
if(B.a.i(q).length===0)return B.bM
return new A.D(B.eO,C.i33(q,s.d),r)}}}
C.aD7.prototype={
S(){return new C.bjf()}}
C.bjf.prototype={
Y(){this.a4()
this.afq()},
afq(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$afq=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=B.a.i(r.a.c)
if(J.ad(n)!==0)p=!J.d5(n,"http")&&!J.d5(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=A.ZC(A.cD(n,0,null),null)
w=7
return A.b(J.a4b(q),$async$afq)
case 7:if(r.c==null){w=1
break}r.m(new C.dqK(r,q))
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
return A.i($async$afq,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a3()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?B.br:B.fr
u=A.m(12)
return A.q(B.A,A.X(B.qS,w?B.bN:B.an,t,t,t,36),B.f,t,t,new A.p(v,t,t,u,t,t,B.n),t,120,t,t,t,t,t,t)}w=A.m(12)
v=s.a
u=J.ajh(v)
return A.bw(w,new A.fH(u,new A.an(B.A,t,B.ac,B.t,A.a([new A.AO(s,t),A.aI(t,t,t,t,A.X(v.f?B.aoL:B.OW,B.c,t,t,t,44),t,t,t,new C.dqM(this,s),t,t,t,t,t,t)],x.p),t),t),B.aq)}}
C.asu.prototype={
a7(){return"NgmyMusicLane."+this.b}}
C.JI.prototype={
a7(){return"NgmyMusicRhymeScheme."+this.b}}
C.rY.prototype={}
C.arK.prototype={
S(){var w=null
return new C.aFy(new A.au(B.ax,$.ax()),A.mZ(0,w,w),A.a([],x.m),D.DY,D.aKW,w,w)},
ge3(){return this.d}}
C.aFy.prototype={
Y(){var w,v=this
v.a4()
w=A.bl(null,B.nE,null,1,null,v)
w.f2(0,!0)
v.as!==$&&A.aQ()
v.as=w
v.z=B.d.gH(D.a6z).a},
t(){var w=this,v=w.as
v===$&&A.c()
v.t()
v=w.d
v.U$=$.ax()
v.P$=0
w.e.t()
w.bzx()},
gasf(){var w,v,u,t,s=this.x
if(s===D.DZ)return null
s=s===D.DY
w=s?D.a6z:D.a5E
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?B.d.gH(w):null},
cyq(d){return this.m(new C.eaA(this,d))},
aBV(){$.aW.x1$.push(new C.ear(this))},
Jz(d){return this.cxS(d)},
b1m(){return this.Jz(null)},
cxS(b0){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$Jz=A.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=B.a.i(b0==null?q.d.a.a:b0)
if(J.ad(a8)===0||q.r||q.a.e){w=1
break}w=3
return A.b(q.a.f.$0(),$async$Jz)
case 3:e=b2
if(!e){w=1
break}A.jX()
d=a8.toLowerCase()
p=B.a.q(d,"continue")||B.a.q(d,"keep going")||B.a.q(d,"go on")||B.a.q(d,"next verse")||B.a.q(d,"more lyrics")||B.a.q(d,"endelea")||B.a.q(d,"endelea na")||B.a.q(d,"ongeza")||B.a.q(d,"tuendelee")
a0=q.f
a1=B.d.aV(a0,new C.eat())
o=!p&&!a1
d=a8.toLowerCase()
if(!(B.a.q(d,"fix")||B.a.q(d,"rewrite")||B.a.q(d,"re-write")||B.a.q(d,"rhyme better")||B.a.q(d,"better rhyme")||B.a.q(d,"sound better")||B.a.q(d,"improve")||B.a.q(d,"polish")||B.a.q(d,"make it rhyme")||B.a.q(d,"boresha")||B.a.q(d,"rekebisha")||B.a.q(d,"endeleza mistari")))a2=C.hyL(a8)&&a1
else a2=!0
n=a2
a3=a8
d=a3.toLowerCase()
a4=!0
if(!B.a.q(d,"bible"))if(!B.a.q(d,"scripture")){if(!B.a.q(d,"biblia"))if(!B.a.q(d,"andiko"))if(!B.a.q(d,"gospel verse")){a5=A.ag("\\b\\d+\\s*:\\s*\\d+\\b",!0,!1,!1,!1)
if(!a5.b.test(a3)){a3=A.ag("\\b(genesis|exodus|leviticus|numbers|deuteronomy|psalm|proverbs|isaiah|jeremiah|matthew|mark|luke|john|romans|corinthians|galatians|ephesians|philippians|revelation)\\b",!1,!1,!1,!1)
a3=a3.b.test(d)}else a3=a4}else a3=a4
else a3=a4
else a3=a4
a4=a3}m=a4
l=C.hyL(a8)&&!p
q.m(new C.eau(q,a8))
q.aBV()
k=B.a.i(q.a.c)
if(J.ad(k)===0){q.m(new C.eav(q))
q.aBV()
w=1
break}t=5
j=A.nm(k)
i=new A.N(a0,new C.eaw(),A.U(a0).k("N<1,n>")).aO(0,"\n\n")
a0=C.inO(m,p,o,q.x,n,q.y,q.gasf(),l)
a3=J.ad(i)!==0?"--- Conversation so far ---\n"+A.w(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+A.w(a8)
w=8
return A.b(A.rh(j,h,B.i4,null,null),$async$Jz)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=B.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=B.a.i(a0)}else a6=L.bEA(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.m(new C.eax(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.m(new C.eay(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.m(new C.eaz(q))
q.aBV()
w=r.pop()
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Jz,v)},
bM7(){return this.Jz("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=A.P(d).ax.a===B.H,p=q?B.Gk:D.bqS,o=x.p
o=A.a([A.x(A.a([A.E(s.cx7(q),1),s.bLk(q)],o),B.l,r,B.e,B.j,0,B.p)],o)
if(s.f.length!==0&&!s.r){w=B.aQ.j(0.55)
v=s.r?r:s.gbM6()
u=A.m(28)
t=A.a([B.aQ,B.av],x.O)
o.push(A.ap(78,A.aH(!1,B.a3,!0,r,A.aP(!1,r,!0,A.ez(D.esw,r,new A.p(r,r,r,u,A.a([new A.ab(0,B.G,B.aQ.j(0.45),B.cL,16)],x.V),new A.a8(B.a7,B.aa,B.x,t,r,r),B.n),r,r,r),B.tH,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),B.f,B.L,10,r,w,B.tH,r,r,B.aj),r,r,r,14,r,r))}return A.q(r,new A.an(B.a0,r,B.ac,B.t,o,r),B.f,p,r,r,r,r,r,r,r,r,r,r)},
cx7(d){var w,v,u,t=this,s=null
if(t.x===D.DZ)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=A.a([A.hb6(s,!1,B.L,0,0,w,A.h7m(t.cCY(d),B.Yb,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=A.X(B.ar6,B.aE.j(0.5),s,s,s,52)
w.push(A.b8m(new A.D(B.ey,A.x(A.a([u,B.aB,A.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,A.l(s,s,d?B.aD:B.e_,s,s,s,s,s,s,s,s,14,s,s,B.a8,s,1.45,!0,s,s,s,s,s,s,s,s),B.K,s,s),B.aB,A.bW(B.fU,A.a([t.ajK("Full bongo love song ABAB",d),t.ajK("Mix: group vs private jet \u2014 which flies?",d),t.ajK("Song from John 3:16 + matching verses",d),t.ajK("Fix my rhyme \u2014 paste your lines",d)],v),B.bs,s,8,8)],v),B.l,s,B.ba,B.j,0,B.p),s),!1))}else{v=t.r?1:0
w.push(new A.nI(D.bCt,A.Z0(new A.oR(new C.eas(t,d),u+v,!0,!0,!0,0,A.tr(),s)),s))}return A.w7(0,s,B.t,t.e,B.y,s,s,A9.aeh,s,s,!1,s,B.ah,!1,w)},
cCY(d){var w=this.as
w===$&&A.c()
return A.c5(w,new C.eaH(this,d),null)},
cD_(d){var w,v=this,u=null,t=A.m(14),s=v.r?u:new C.eaJ(v),r=B.w.j(d?0.35:0.06),q=A.m(14),p=A.L(B.b9.j(0.35),B.r,1),o=v.gasf()
o=o==null?u:o.c
o=A.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,B.EK,u,u,u)
w=v.gasf()
w=w==null?u:w.b
if(w==null)w="Style"
w=A.E(A.d(w,u,u,u,u,u,u,A.l(u,u,d?B.c:B.bq,u,u,u,u,u,u,u,u,12,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return A.aH(!1,B.a3,!0,u,A.aP(!1,t,!0,A.q(u,A.A(A.a([o,B.af,w,A.X(v.w?B.Pm:B.t5,B.b9,u,u,u,20)],x.p),B.l,u,B.e,B.j,0,u,u),B.f,u,u,new A.p(r,u,p,q,u,u,B.n),u,u,u,u,B.nG,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj)},
axr(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=A.a([B.b2,B.aV],x.O)
break
case 1:w=A.a([B.bn,B.cv],x.O)
break
case 2:w=A.a([B.bE,B.aE],x.O)
break
default:w=n}v=m?6:0
u=A.m(14)
t=A.m(14)
s=this.r?n:new C.eaq(this,d)
r=A.m(14)
w=m?new A.a8(B.a7,B.aa,B.x,w,n,n):n
if(m)q=n
else q=B.w.j(g?0.3:0.05)
p=A.d(f,n,n,n,n,n,n,B.EK,n,n,n)
if(m)o=B.c
else o=g?B.ab:B.bq
return A.E(A.aH(!1,B.a3,!0,u,A.aP(!1,t,!0,A.cT(n,A.x(A.a([p,A.d(e,n,n,n,n,n,n,A.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),B.l,n,B.e,B.j,0,B.p),n,n,B.b_,new A.p(q,n,n,r,n,w,B.n),B.a3,n,n,n,n,B.k2,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),B.f,n,v,n,n,n,n,n,B.aj),1)},
cD0(d,e){var w,v,u,t=this,s=null,r=t.x===D.DY?t.z:t.Q,q=A.m(20)
if(r===d.a)r=B.b9.j(e?0.25:0.15)
else r=B.w.j(e?0.2:0.04)
w=A.m(20)
v=t.r?s:new C.eaK(t,d)
u=A.d(d.c,s,s,s,s,s,s,B.Vm,s,s,s)
return A.aH(!1,B.a3,!0,q,A.aP(!1,w,!0,new A.D(B.hg,A.A(A.a([u,B.dh,A.d(d.b,s,s,s,s,s,s,A.l(s,s,e?B.c:B.bq,s,s,s,s,s,s,s,s,10,s,s,B.U,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.l,s,B.e,B.P,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),B.f,r,0,s,s,s,s,s,B.aj)},
ajK(d,e){var w=null,v=A.d(d,w,w,w,w,w,w,E.abz,w,w,w),u=B.aE.j(e?0.2:0.1)
return A.n3(w,u,v,w,this.r?w:new C.eaB(this,d),w,w,w,w)},
bLk(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=A.m(22),o=d?B.a_.j(0.95):B.c,n=A.L(B.aE.j(0.2),B.r,1),m=x.p,l=A.a([],m)
if(q>0)l.push(new A.D(Aj.an0,A.d("$"+B.i.ad(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,A.l(r,r,B.aQ.j(0.85),r,r,r,r,r,r,r,r,9,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=A.l(r,r,d?B.c:B.bq,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.DZ?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=A.E(A.aM(r,B.Z,!1,r,!0,B.t,r,A.aO(),w,r,r,r,r,r,2,A.bz(r,B.eN,r,B.h5,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.l(r,r,d?B.bW:B.hH,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),B.y,!0,r,!0,r,!1,r,B.ak,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.ean(s),r,!1,r,r,!1,r,!0,r,B.ad,r,r,r,r,r,r,r,r,r,r,r,v,!0,B.a5,r,B.ao,r,r,r,r),1)
u=s.r
t=u?r:new C.eao(s)
l.push(A.A(A.a([v,new A.JS(w,B.aE,r),A.aH(!1,B.a3,!0,r,A.aP(!1,r,!0,A.ez(u?D.esM:D.bYX,r,D.b88,42,r,42),B.cV,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),B.f,r,0,r,r,B.cV,r,r,B.aj)],m),B.dP,r,B.e,B.j,0,r,r))
return A.q(r,A.x(l,B.al,r,B.e,B.P,0,B.p),B.f,r,r,new A.p(o,r,n,p,r,r,B.n),r,r,r,B.uy,B.a0e,r,r,r)}}
C.aNM.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.WJ.prototype={
aj(){var w=this
return A.I(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.a_Y.prototype={
S(){return new C.aCy(null,null)},
bk1(){return this.f.$0()}}
C.aCy.prototype={
Y(){var w,v=this,u=null
v.a4()
w=A.bl(u,D.bAR,u,1,u,v)
w.cr(0)
v.d!==$&&A.aQ()
v.d=w
w=A.bl(u,B.oo,u,1,u,v)
w.f2(0,!0)
v.e!==$&&A.aQ()
v.e=w
w=A.bl(u,B.lI,u,1,u,v)
w.cL(0)
v.f!==$&&A.aQ()
v.f=w
w=A.bl(u,B.yx,u,1,u,v)
w.cr(0)
v.r!==$&&A.aQ()
v.r=w},
t(){var w=this,v=w.d
v===$&&A.c()
v.t()
v=w.e
v===$&&A.c()
v.t()
v=w.f
v===$&&A.c()
v.t()
v=w.r
v===$&&A.c()
v.t()
w.byl()},
ccL(){var w=this.d
w===$&&A.c()
w.eK(0).bG(new C.do3(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(A.aF(d,B.c1,x.w).w.a.a-32,360),h=B.w.j(0.82),g=k.gccK(),f=x.l,e=J.e4(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&A.c()
e[v]=new A.DV(new C.do4(k,v,d),j,w,j)}f=A.C(e,f)
w=k.d
w===$&&A.c()
u=A.m(28)
t=A.L(B.c.j(0.22),B.r,1.5)
s=A.a([new A.ab(2,B.G,B.av.j(0.35),B.J,40),new A.ab(0,B.G,B.aN.j(0.25),B.h7,28)],x.V)
r=k.e
r===$&&A.c()
q=k.r
q===$&&A.c()
q=A.c5(new A.h7(A.a([r,q],x.U)),new C.do5(k),j)
r=A.of(B.jT,D.fYV,new C.do6())
p=A.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,A.l(j,j,B.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,B.cE,j,1.45,!0,j,j,j,j,j,j,j,j),B.K,j,j)
o=x.p
n=A.A(A.a([k.b1n(B.k9,"Resets in 24h"),B.af,k.b1n(B.oy,"Help Topics ready")],o),B.l,j,B.ba,B.j,0,j,j)
m=A.a([],o)
k.a.toString
l=B.c.j(0.35)
m.push(A.E(A.dU(D.fT2,new C.do7(k),A.di(j,j,j,j,j,j,j,j,j,B.ab,j,j,B.lJ,j,new A.b9(A.m(14),B.a1),new A.ay(l,1,B.r,-1),j,j,j,j)),1))
k.a.toString
m.push(B.au)
k.a.toString
l=A.m(14)
m.push(A.E(A.bJ(D.fYL,j,g,A.bp(B.aN,j,j,6,B.c,j,B.lJ,B.aN.j(0.5),new A.b9(l,B.a1),j,j,j)),1))
f.push(A.as(A.az(j,A.c5(w,new C.do8(k),A.q(j,A.x(A.a([q,B.aB,r,B.W,p,B.T,n,B.bz,A.A(m,B.l,j,B.e,B.j,0,j,j)],o),B.l,j,B.e,B.P,0,B.p),B.f,j,j,new A.p(j,j,t,u,s,D.c79,B.n),j,j,j,j,Ab.amR,j,j,i)),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.do9(),j,j,j,j,j,j,!1,B.a4),j,j,j))
return A.aH(!1,B.a3,!0,j,A.az(j,new A.an(B.a0,j,B.ac,B.t,f,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,B.a4),B.f,h,0,j,j,j,j,j,B.aj)},
b1n(d,e){var w=null,v=B.c.j(0.08),u=A.m(20),t=A.L(B.c.j(0.12),B.r,1)
return A.q(w,A.A(A.a([A.X(d,B.av,w,w,w,13),B.e8,A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.hg,w,w,w)}}
C.aMD.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.OK.prototype={}
C.qe.prototype={}
C.asg.prototype={
S(){return new C.aFU(A.a([],x.E),A.a([],x.s))}}
C.aFU.prototype={
gasE(){return B.i.D(A.M0(this.a.c.a,new C.eoX(this)),0,1/0)},
a9y(){var w,v=this,u=v.d,t=v.gasE()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)A.rf(u.a,t,!0,!1)},
K2(d,e){var w,v,u,t=this,s=t.gasE(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gasE()
if(w<v-0.005)A.hEf(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)A.rf(u.a,w,!0,!1)
A.rf(t.a.c.a,w,!0,!1)
A.Bw(!0,!1,w,t.a.c.a)},
Y(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a4()
$.aW.c1$.push(o)
w=$.Jv+1
$.Jv=w
if(w===1){w=$.hq7
if(w!=null)w.$0()}v=$.h9o.h(0,B.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=A.bq(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=A.bq(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=A.m5(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,B.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=A.aRm(u,B.i.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new A.w2(w,u,r,q,s.e,p)}o.d=t}o.PI()
o.a9y()
$.aW.x1$.push(new C.epD(o))
o.Q=A.df(B.op,new C.epE(o))
o.as=A.df(B.h4,new C.epF(o))},
t(){var w=this,v=w.Q
if(v!=null)v.a1(0)
v=w.as
if(v!=null)v.a1(0)
$.aW.hV(w)
C.hVM()
w.a3()},
cF8(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new A.V(Date.now(),0,!1)
v=p.r
if(!C.a9_(v,w)){if(C.h9q(p,q.e)){q.m(new C.epl(q,p))
q.yB(!1,!0,!0)}else if(q.c!=null)q.m(new C.epm())
return}if(!C.ciu(v.c?v.bT():v)){q.m(new C.epn(p))
q.b1w(!1)
return}u=p.gCX()
if(u<=0)return
t=w.d3(A.c2(A.bD(w),A.bM(w),A.bV(w),12,0,0,0,0))
s=C.h9r(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.m(new C.epo())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(B.d.aV(q.e,new C.epp(r))){q.m(new C.epq(p,w,u))
return}q.m(new C.epr(q,p,u,w))
q.azW(new A.d7(r,p.a,u,B.h2,B.fv,"Clock-in daily earnings (local)",null,null,B.cu,w))},
jm(d){if(d===B.fW)this.Ff()},
PI(){var w,v,u,t,s,r,q,p=this.d
if(p==null)return
w=this.a.c
w.e=p.e
w.f=p.f
w.r=p.r
w.rx=p.rx
w.fr=p.fr
w.fx=p.fx
w.fy=p.fy
w.bm=p.bm
w.c8=A.bq(p.c8,!0,x.N)
w=this.a.c
w.bH=p.c8.length
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
q=new A.w2(u,t,s,r,v.e,q)
u=q}w.x=u},
SC(d){return this.cDL(d)},
cDL(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$SC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.PI()
t.K2(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return A.b(x.r.b(s)?s:A.dL(s,x.H),$async$SC)
case 3:case 1:return A.h(u,v)}})
return A.i($async$SC,v)},
Ff(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$Ff=A.e(function(d,e){if(d===1){s.push(e)
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
return A.b(H.Ad(q.w,k,l,j,m,!1,n),$async$Ff)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.m(new C.epg(q,p))
q.SC(!1)}w=8
return A.b(q.Ke(),$async$Ff)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=A.ac(h)
$.am.$1("[growth income] pull wallet: "+A.w(o))
w=9
return A.b(q.Ke(),$async$Ff)
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
return A.i($async$Ff,v)},
O8(d){return this.bFq(d)},
bFp(){return this.O8(null)},
bFq(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$O8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return A.b(A.aA(),$async$O8)
case 3:s=f
r=B.a.i(t.a.c.a.toLowerCase())
q=A.d2(t.w,x.N)
r=s.tU("ngmy_gi_credited_txn_ids_"+r)
q.v(0,r==null?A.a([],x.s):r)
j.a=0
p=A.a([],x.s)
o=d==null?null:A.jB(d,A.U(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,A.J)(r),++m){l=r[m]
k=l.a
if(q.q(0,k))continue
if(o!=null&&!o.q(0,k))continue
if(l.d===B.fS&&l.x===B.cu&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.m(new C.eoY(j,t,i))
q.v(0,p)
r=A.C(q,A.a4(q).k("ch.E"))
t.w=r
w=4
return A.b(A.asi(t.a.c.a,r),$async$O8)
case 4:t.azq(!1,!0)
r=t.c
if(r!=null)r.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.d("Balance updated: +$"+A.dF(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$O8,v)},
Ke(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$Ke=A.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=A.U(a2).k("Y<1>")
a4=A.C(new A.Y(a2,new C.eph(),a3),a3.k("M.E"))
a5=a4
a6=A.a([],x.s)
w=J.ad(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=A.U(a2).k("N<1,n>")
e=A.C(new A.N(a2,new C.epi(),a3),a3.k("ak.E"))
q=e
w=9
return A.b(A.lH("transactions","id,status",null,null,null,A.I(["id",q],x.N,x.j),null,!0,null,null,!1,B.bO),$async$Ke)
case 9:p=a9
if(r.c==null){w=1
break}o=!1
for(a2=J.aT(p);a2.C();){n=a2.gR(a2)
m=n
a3=J.t(m,"id")
l=J.k(a3==null?"":a3)
a3=A.aJ(J.t(m,"status"))
d=a3==null?null:B.i.M(a3)
k=d==null?0:d
if(J.ad(l)===0)continue
j=B.d.bj(r.e,new C.epj(l))
if(j<0)continue
i=r.e[j].x
if(J.z(k,1))a0=B.cu
else a0=J.z(k,2)?B.kH:B.dI
h=a0
if(!J.z(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===B.dI&&h===B.cu&&a3[j].d===B.fS)J.c7(a6,l)
if(i===B.dI&&h===B.kH&&r.e[j].d===B.f2){g=r.d
if(g!=null){r.K2(g.d+r.e[j].c,!1)
r.azq(!1,!0)}}}}if(o&&r.c!=null)r.m(new C.epk())
t=2
w=8
break
case 6:t=5
a7=s.pop()
f=A.ac(a7)
$.am.$1("[growth income] refresh deposit status: "+A.w(f))
w=8
break
case 5:w=2
break
case 8:case 4:w=J.ad(a6)!==0?10:12
break
case 10:w=13
return A.b(r.O8(a6),$async$Ke)
case 13:w=11
break
case 12:w=14
return A.b(r.bFp(),$async$Ke)
case 14:case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ke,v)},
Qv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$Qv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return A.b(A.vh(i.a,i),$async$Qv)
case 3:h=e
if(t.c==null){w=1
break}t.m(new C.ep1(t,h))
t.PI()
t.a9y()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return A.b(H.Ad(s[0],p,q,o,r,!0,i),$async$Qv)
case 4:i=e.a
n=i[4]
m=A.bq(i[2],!0,x.o)
l=i[5]
t.w=A.bq(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.PI()
t.a9y()
k=C.h9q(n,m)
if(k)t.K2(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.a0&&s.aG>0
else s=!0
j=A.hqX(n,m,new A.V(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.PI()
if(t.c==null){w=1
break}t.m(new C.ep2(t,n,m,l))
if(i){t.yB(!1,!0,!0)
if(j==="reset"){A.hpH(t.a.c.a)
i=t.c
if(i!=null)A.hpK(i,null)}else if(j==="warn2"){A.hpI(t.a.c.a)
i=t.c
if(i!=null)C.hpL(i)}}else if(k)t.yB(!1,!0,!0)
else t.SC(!1)
case 1:return A.h(u,v)}})
return A.i($async$Qv,v)},
yB(d,e,f){return this.cnk(d,e,f)},
azq(d,e){return this.yB(d,!1,e)},
b1w(d){return this.yB(!1,d,!1)},
cnk(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$yB=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new A.V(Date.now(),0,!1).aa()
r=t.a.c.a
q=t.e
p=t.f
w=3
return A.b(A.rW(r,o,q,!1,t.w,s,p),$async$yB)
case 3:p=t.a.c.a
q=t.e
r=t.f
A.JB(t.w,p,q,s,o,r)
if(f)t.SC(d)
case 1:return A.h(u,v)}})
return A.i($async$yB,v)},
cd1(){this.m(new C.epa())
this.azq(!1,!0)},
aga(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===B.cu&&A.to(d)){w=r.a
w.f.$1(new A.d7(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.ciq(q,d)
v=q.d=A.M0(r.a.c.a,new C.ep7(r))
r.at=r.a.c.d=v
A.rf(q.a,v,!0,!1)
if(r.c!=null)r.m(new C.ep8(r,d))
r.yB(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new A.d7(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===B.dI
if(w&&d.d===B.fS)s=!1
else if(w&&d.d===B.f2){r.K2(q.d-d.c,!0)
s=!0}else{C.ciq(q,d)
w=d.d
s=w===B.f2||w===B.kk
r.K2(q.d,s)}r.m(new C.ep9(r,d))
w=d.d
r.yB(s,e,w===B.f2||w===B.kk||d.x===B.cu||w===B.h2)},
azW(d){return this.aga(d,!0,!1)},
b2z(d,e){return this.aga(d,!0,e)},
b2y(d,e){return this.aga(d,e,!1)},
cg7(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.iq1(u,e,d)){v.mo("This plan is already active.")
return}w=A.hDK(u.a,d,e)
if(C.imk(u.a,v.e,w)){v.mo("You already own this plan.")
return}if(u.d<g){v.mo("Insufficient balance. Add funds in the Wallet tab first.")
return}v.m(new C.epb(v))
v.m(new C.epc(v,u,new A.w2(d,e,0.0286,new A.V(Date.now(),0,!1),0,0)))
v.azW(new A.d7(w,u.a,g,B.kk,B.fv,"Direct investment buy: "+d,null,null,B.cu,new A.V(Date.now(),0,!1)))
v.m(new C.epd(v))
v.mo("Plan purchased: "+d)},
mo(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
a0y(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hy(s,new C.ap3(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$a0y)
case 3:w=4
return A.b(t.Qv(),$async$a0y)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0y,v)},
agE(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$agE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hy(s,new C.ajE(r,A.a([r],x.d9),B.Sm,t.a.d,t.gb2x(),t.gb1v(),null),!1,null,x.X),$async$agE)
case 3:case 1:return A.h(u,v)}})
return A.i($async$agE,v)},
agC(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$agC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hy(s,new C.amJ(r,t.a.d,t.e,t.gb2x(),t.gb1v(),new C.epf(t),null),!1,"LocalGrowthGameCenter",x.X),$async$agC)
case 3:case 1:return A.h(u,v)}})
return A.i($async$agC,v)},
adV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$adV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new A.V(s,0,!1)
w=C.h9q(j,t.e)?3:4
break
case 3:w=5
return A.b(t.b1w(!0),$async$adV)
case 5:case 4:if(j.x==null){t.mo("Choose an investment plan first, then come back to clock in.")
t.m(new C.ep3(t))
w=1
break}if(A.mw(r)===6||A.mw(r)===7){t.mo("Clock-in opens Monday through Friday.")
w=1
break}if(!C.hqY(r)){t.mo("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a9_(q,r)&&j.fy>0){t.mo("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!A.aS3(q,r))if(!A.aS3(j.fr,r)){q=A.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,A.J)(p),++n){m=p[n]
if(B.a.i(m.b.toLowerCase())===B.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new A.aHN(m.y,l,m.a))}}q=A.hDb(q,r)}else q=p
else q=p}else q=!1
if(q){t.mo("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.mo("You are already clocked in for today.")
w=1
break}k=C.hXe(r)
q=j.a
t.m(new C.ep4(j,r,k))
t.b2y(new A.d7("local_clockin_manual_"+q+"_"+s,j.a,0,B.h2,B.fv,"Clock-in session started (local)",null,null,B.cu,r),!1)
t.mo("Clock-in started. Keep Growth Income open for today.")
case 1:return A.h(u,v)}})
return A.i($async$adV,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.H?B.nA:B.qm
if(l.d==null)return A.e9(B.l3,j,!0)
w=x.o
v=A.T(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,A.J)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=B.a.i(l.a.c.a.toLowerCase())
u=$.fLS
u=u==null?k:u.$0()
u=J.aT(u==null?B.iC:u)
while(u.C()){t=u.gR(u)
q=t.a
if(q.length===0||v.al(0,q)||A.to(t))continue
if(B.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(A.cS(o.toLowerCase(),"clock-in",0))continue
v.n(0,q,t)}w=A.C(new A.b7(v,v.$ti.k("b7<2>")),w)
v=l.e
B.d.v(w,new A.Y(v,new C.epv(),A.U(v).k("Y<1>")))
B.d.aZ(w,new C.epw())
v=l.d
v.toString
u=C.ibG(l.a.c)
t=l.d
t.toString
t=A.e9(new C.anw(t,l.a.e,l.z,l.gcg6(),l.aWO(),D.hrN),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=A.e9(new C.aDl(l.aWO(),q,n,o,w,new C.epx(l),l.gcid(),new C.epy(l),D.hrO),j,!0)
m=A.aF(d,k,x.w).w
n=l.y
return new A.Xx(n,new C.epz(l),A.aH(!1,B.a3,!0,k,new A.a5(1/0,m.a.b,new A.an(B.a0,k,B.ac,B.t,A.a([A.bS(0,A.e9(k,j,!0),0,0,0),A.bS(0,A.bm(!1,[new C.aDk(v,u,w,l.gc6h(),new C.epA(l),new C.epB(l),new C.epC(d),l.gcj5(),l.gcj0(),D.hrM),t,o][n],!0,!1,B.ag,!0,!0),0,0,0),A.ap(0,l.bHO(),k,k,0,0,k,k)],x.p),k),k),B.f,j,0,k,k,k,k,k,B.aj),k)},
aWO(){var w=null,v=A.a([D.eY.j(0.24),B.a_.j(0.72)],x.O)
return A.h6(A.aP(!1,w,!0,A.q(B.A,D.c2I,B.f,w,w,new A.p(w,w,A.L(D.eY.j(0.38),B.r,1),w,A.a([new A.ab(0,B.G,D.eY.j(0.18),B.J,16)],x.V),new A.a8(B.aA,B.aF,B.x,v,w,w),B.a6),w,40,w,w,w,w,w,40),B.cV,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ep0(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bHO(){var w=null,v=A.m(27),u=A.L(B.aC.j(0.45),B.r,1),t=A.a([new A.ab(0,B.G,B.w.j(0.5),B.eQ,24),new A.ab(-2,B.G,B.aC.j(0.12),B.J,18)],x.V)
return new A.D(B.O8,A.bm(!0,A.as(new A.cP(D.b6r,A.q(w,A.cq(new C.eoZ(this)),B.f,w,w,new A.p(w,w,u,v,t,D.c6A,B.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,B.ag,!0,!1),w)},
c7Y(d){var w=null,v=this.y===d,u=D.dcC[d],t=u.b,s=u.a,r=""+d,q=x.W
return A.E(A.dv(w,!0,w,A.az(B.c2,A.r3(A.oy(v?A.X(s,D.afF,new A.bA("on"+r,q),w,w,21):A.x(A.a([A.X(s,B.c.j(0.62),w,w,w,19),B.bG,A.d(t,w,1,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,new A.bA("off"+r,q),B.ba,B.j,0,B.p),B.iN,A.pU(),B.b_,B.b_,A.LI())),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ep6(this,d),w,w,w,w,w,w,!1,B.a4),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,B.cb,w),1)}}
C.aDk.prototype={
c4Y(d){return C.h9r(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.P(d)
w=B.c.j(0.58)
v=f.e
u=A.U(v).k("Y<1>")
u=A.pJ(new A.Y(v,new C.dsu(),u),3,u.k("M.E"))
t=A.C(u,A.a4(u).k("M.E"))
v=f.c
s=v.x
r=new A.V(Date.now(),0,!1)
q=v.f
p=C.a9_(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.hqY(r)
m=v.gCX()
l=A.a([D.eY.j(0.24),B.a_.j(0.72)],x.O)
k=A.L(D.eY.j(0.38),B.r,1)
j=x.V
i=A.a([new A.ab(0,B.G,D.eY.j(0.18),B.J,16)],j)
l=A.aP(!1,e,!0,A.q(B.A,A.X(B.hM,D.eY,e,e,e,19),B.f,e,e,new A.p(e,e,k,e,i,new A.a8(B.aA,B.aF,B.x,l,e,e),B.a6),e,38,e,e,e,e,e,38),B.cV,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=A.m(14)
k=A.m(14)
j=A.a([new A.ab(0,B.G,B.b8.j(0.45),B.cL,16)],j)
h=A.m(12)
g=x.p
j=A.bTo(!1,l,"GROWTH INCOME",A.aP(!1,i,!0,new A.a5(44,44,new A.an(B.a0,e,B.ac,B.f,A.a([A.q(B.A,A.q(B.A,D.bVS,B.f,e,e,new A.p(B.iL.j(0.78),e,e,h,e,e,B.n),e,36,e,e,e,e,e,36),B.f,e,e,new A.p(e,e,e,k,j,D.c88,B.n),e,42,e,e,e,e,e,42),A.ap(e,A.q(B.A,D.c1J,B.f,e,e,new A.p(B.bk,e,A.L(D.aiA,B.r,2),e,e,e,B.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.htz(B.fJ,new C.dsv(),k)
k=A.A(A.a([A.E(C.hty(new C.dsw(f,B.rx,n),new A.V(Date.now(),0,!1),h,k),1),B.oX,A.E(new A.wl(new C.dsx(f,B.rx),e,new A.h7(A.a([$.zl(),$.a48()],x.U)),e),1)],g),B.l,e,B.e,B.j,0,e,e)
h=f.c8a(B.rx,D.eY)
v=A.E(f.cBf("Total Profit","$"+A.dF(v.e),B.rx),1)
u=u?e:s.b
return A.e9(A.ce(A.x(A.a([j,B.W,k,B.ae,new C.aDj(f.d,m,q,p,n,o,D.eY,f.gc4X(),f.f,e),B.ae,h,B.W,A.A(A.a([v,B.oX,A.E(f.b8T("Total Investment","$"+A.dF(u==null?0:u),B.rx,f.r),1)],g),B.l,e,B.e,B.j,0,e,e),B.W,f.c4U(d,t,D.eY,w)],g),B.al,e,B.e,B.j,0,B.p),B.t,e,B.y,e,B.a0N,e,e,B.ah),D.aiA,!0)},
azp(d,e,f,g,h){var w=null,v=A.m(h),u=A.L(B.c.j(0.09),B.r,1),t=A.a([new A.ab(0,B.G,B.w.j(0.4),B.dp,18)],x.V)
return A.q(w,A.bw(A.m(h-1),new A.an(B.a0,w,B.ac,B.t,A.a([A.bS(0,new A.bN(new A.p(w,w,w,w,w,new A.bY(f,1.15,B.x,w,0,A.a([e.j(0.22),e.j(0)],x.O),w,w),B.n),B.bj,w,w),0,0,0),new A.D(g,d,w)],x.p),w),B.aq),B.f,w,w,new A.p(w,w,u,v,t,D.c73,B.n),w,w,w,w,w,w,w,w)},
b1u(d,e,f,g){return this.azp(d,e,f,B.ag,g)},
bb_(d,e,f,g,h,i,j){var w=null,v=A.ap(-14,A.X(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=A.m(30),s=A.L(f.j(0.4),B.r,1),r=x.p,q=this.b1u(new A.a5(w,80,new A.an(B.a0,w,B.ac,B.t,A.a([v,new A.D(D.bD0,A.x(A.a([A.q(w,A.A(A.a([A.X(e,f,w,w,w,15),B.e8,A.d(h.toUpperCase(),w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),B.l,w,B.e,B.P,0,w,w),B.f,w,w,new A.p(u,w,s,t,w,w,B.n),w,w,w,w,B.an5,w,w,w),B.b3,A.ev(B.a7,A.d(i,w,1,w,w,w,w,A.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,B.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.e7)],r),B.E,w,B.e,B.j,0,B.p),w)],r),w),w),f,B.ly,22)
if(g==null)return q
return A.aP(!1,A.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
c8a(d,e){var w,v,u,t,s=null,r=A.L(e.j(0.55),B.r,2),q=e.j(0.12),p=x.p,o=A.a([],p)
for(w=0;w<3;++w){v=new A.aN(3,3)
o.push(A.q(s,s,B.f,s,s,new A.p(e,s,s,new A.be(v,v,v,v),s,s,B.n),s,D.cXw[w],s,D.bGE,s,s,s,5))}r=A.q(s,A.A(o,B.dP,s,B.ba,B.j,0,s,s),B.f,s,s,new A.p(q,s,r,s,s,s,B.a6),s,42,s,s,s,s,s,42)
q=A.E(A.x(A.a([D.fUS,B.bG,A.A(A.a([A.q(s,s,B.f,s,s,new A.p(e,s,s,s,A.a([new A.ab(0,B.G,e,B.J,6)],x.V),s,B.a6),s,7,s,s,s,s,s,7),B.bo,new A.dm(1,B.co,A.d("Live \xb7 real-time statistics",s,1,B.a2,s,s,s,A.l(s,s,B.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),B.l,s,B.e,B.j,0,s,s)],p),B.E,s,B.e,B.j,0,B.p),1)
o=A.m(16)
v=A.m(16)
u=B.w.j(0.3)
t=A.L(e.j(0.45),B.r,1.2)
return this.azp(A.A(A.a([r,D.ffF,q,B.af,A.aP(!1,o,!0,A.q(s,A.x(A.a([A.X(B.oC,e.j(0.95),s,s,s,21),B.vD,A.d("PLAY",s,s,s,s,s,s,A.l(s,s,B.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,B.I,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),B.l,s,B.ba,B.j,0,B.p),B.f,s,s,new A.p(u,s,t,v,s,s,B.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),B.l,s,B.e,B.j,0,s,s),e,B.a7,B.a0h,26)},
b8T(d,e,f,g){var w,v=null,u=B.a.q(d.toLowerCase(),"profit"),t=u?B.bk:B.aG,s=A.q(v,v,B.f,v,v,new A.p(t,v,v,D.b4C,v,v,B.n),v,v,v,B.nF,v,v,v,5),r=x.p
r=A.a([s,B.bc,A.E(A.x(A.a([A.A(A.a([A.X(u?B.uV:B.zp,t,v,v,v,14),B.e8,new A.dm(1,B.co,A.d(d,v,1,B.a2,v,v,v,A.l(v,v,B.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),B.l,v,B.e,B.j,0,v,v),B.am,A.ev(B.a7,A.d(e,v,1,v,v,v,v,D.fp1,v,v,v),B.f,B.e7)],r),B.E,v,B.ba,B.j,0,B.p),1)],r)
s=g==null
if(!s)r.push(new A.D(Ae.NV,A.X(B.eI,B.c.j(0.35),v,v,v,v),v))
w=this.b1u(new A.a5(v,66,A.A(r,B.l,v,B.e,B.j,0,v,v),v),t,B.lz,20)
if(s)return w
return A.aP(!1,A.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cBf(d,e,f){return this.b8T(d,e,f,null)},
c4U(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.q(m,m,B.f,m,m,new A.p(f,m,m,m,A.a([new A.ab(0,B.G,f,B.J,8)],x.V),m,B.a6),m,9,m,m,m,m,m,9),k=A.d("LIVE ACTIVITY",m,m,m,m,m,m,A.l(m,m,B.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,B.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=B.c.j(0.07),i=A.m(20),h=x.p
i=A.a([A.A(A.a([l,B.V1,k,B.b3,A.q(m,A.d(""+e.length,m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.f,m,m,new A.p(j,m,m,i,m,m,B.n),m,m,m,m,B.a1_,m,m,m)],h),B.l,m,B.e,B.j,0,m,m),B.T],h)
if(e.length===0)i.push(new A.D(B.a07,A.x(A.a([A.X(B.hz,g,m,m,m,30),B.am,A.d("Nothing yet",m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.bG,A.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),B.K,m,m)],h),B.l,m,B.e,B.j,0,B.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=A.a([],h)
if(w>0)k.push(new A.mK(1,m,m,m,m,B.c.j(0.07),m))
j=e[w]
v=j.d
u=v===B.f2||v===B.kk
t=u?B.i_:D.eY
g=B.c.j(0.5)
v=new A.aN(12,12)
s=A.a([t.j(0.28),t.j(0.08)],l)
r=new A.ay(t.j(0.35),1,B.r,-1)
v=A.q(B.A,A.X(u?B.uV:B.wN,t,m,m,m,18),B.f,m,m,new A.p(m,m,new A.bH(r,r,r,r),new A.be(v,v,v,v),m,new A.a8(B.aA,B.aF,B.x,s,m,m),B.n),m,38,m,m,m,m,m,38)
s=A.d(C.ika(j),m,1,B.a2,m,m,m,B.l6,m,m,m)
q=C.hvb(j.y)
s=A.x(A.a([s,B.bG,A.d(q,m,m,m,m,m,m,new A.G(!0,g,m,m,m,m,11,B.a8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),B.E,m,B.e,B.j,0,B.p)
q=t.j(0.14)
p=new A.aN(20,20)
o=u?"-":"+"
n=A.dF(j.c)
q=A.q(m,A.d(o+"$"+n,m,m,m,m,m,m,new A.G(!0,t,m,m,m,m,13,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),B.f,m,m,new A.p(q,m,m,new A.be(p,p,p,p),m,m,B.n),m,m,m,m,B.po,m,m,m)
j=C.hCO(j)
k.push(new A.D(O.O_,new A.c8(B.aL,B.e,B.j,B.l,m,B.p,m,0,A.a([v,B.bc,new A.by(1,B.bb,s,m),A.x(A.a([q,B.cS,A.d(j,m,m,m,m,m,m,new A.G(!0,g,m,m,m,m,10,B.U,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),B.dP,m,B.e,B.j,0,B.p)],h),m),m))
B.d.v(i,k)}return this.azp(A.x(i,B.l,m,B.e,B.j,0,B.p),f,B.b1,D.bDb,26)}}
C.aDj.prototype={
S(){return new C.bjZ(null,null)},
cVY(d){return this.z.$1(d)},
cXi(){return this.Q.$0()}}
C.bjZ.prototype={
Y(){var w,v=this,u=null
v.a4()
w=A.bl(u,B.qy,u,1,u,v)
w.cL(0)
v.d!==$&&A.aQ()
v.d=w
w=A.bl(u,D.bAH,u,1,u,v)
w.cL(0)
v.e!==$&&A.aQ()
v.e=w
w=A.bl(u,B.qB,u,1,u,v)
v.f!==$&&A.aQ()
v.f=w
v.ba1()},
gbcI(){var w=new A.V(Date.now(),0,!1)
if(A.mw(w)===6||A.mw(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
ba1(){var w=this,v=w.a,u=v.e||v.f||w.gbcI()
if(u){v=w.f
v===$&&A.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){v=w.f
v===$&&A.c()
v.cL(0)}else{if(!u){v=w.f
v===$&&A.c()
v=v.r
v=v!=null&&v.a!=null}else v=!1
if(v){v=w.f
v===$&&A.c()
v.bQ(0)}}},
bz(d){this.bJ(d)
this.ba1()},
t(){var w=this,v=w.d
v===$&&A.c()
v.t()
v=w.e
v===$&&A.c()
v.t()
v=w.f
v===$&&A.c()
v.t()
w.byC()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gbcI()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=B.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?B.aC:g.x
g=g.r?new C.dsn(i):h
v=A.m(32)
s=A.m(32)
r=f?D.duX:D.duV
q=A.L((f?D.pc:B.aZ).j(0.28),B.r,1.4)
p=x.V
o=A.a([new A.ab(0,B.G,(f?B.aC:B.b9).j(0.16),B.h7,28)],p)
n=x.p
m=A.a([],n)
if(f)B.d.v(m,A.a([A.ap(h,i.acq(D.pc,130),h,h,h,-24,-30,h),A.ap(-36,i.acq(B.aC,140),h,h,-28,h,h,h)],n))
else B.d.v(m,A.a([A.ap(h,i.acq(B.b9,120),h,h,h,-30,-36,h),A.ap(-40,i.acq(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bS(0,new A.du(!0,A.bw(l,new A.en(A.c5(k,new C.dso(i),h),h),B.aq),h),0,0,0))}if(f){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bS(0,new A.du(!0,A.bw(l,new A.en(A.c5(k,new C.dsp(i),h),h),B.aq),h),0,0,0))}l=A.m(999)
k=B.c.j(0.06)
j=A.L(B.c.j(0.16),B.r,1)
m.push(A.ap(h,new A.cP(D.b6x,A.q(h,A.A(A.a([A.q(h,h,B.f,h,h,new A.p(t,h,h,h,A.a([new A.ab(0,B.G,t.j(0.5),B.J,8)],p),h,B.a6),h,8,h,h,h,h,h,8),B.af,new A.dm(1,B.co,A.d(u,h,1,B.a2,h,h,h,D.fuZ,h,h,h),h)],n),B.l,h,B.e,B.P,0,h,h),B.f,h,h,new A.p(k,h,j,l,h,h,B.n),h,h,h,h,B.h5,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.htz(B.fJ,new C.dsq(),l)
m.push(C.hty(new C.dsr(i,f,t,e,w),new A.V(Date.now(),0,!1),j,l))
return A.aP(!1,v,!0,A.cT(h,new A.an(B.a0,h,B.ac,B.f,m,h),h,h,B.b_,new A.p(h,h,q,s,o,new A.a8(B.aA,B.aF,B.x,r,h,h),B.n),B.Cb,h,392,h,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
acq(d,e){var w=null
return new A.du(!0,A.q(w,w,B.f,w,w,new A.p(w,w,w,w,w,new A.bY(B.A,0.5,B.x,w,0,A.a([d.j(0.22),d.j(0)],x.O),w,w),B.a6),w,e,w,w,w,w,w,e),w)}}
C.bdC.prototype={
b1x(d,e,f,g){var w=new A.aG($.S().r,B.ai,null,null,A.a([],x.g)),v=e.a,u=e.b,t=u-f
w.E(new A.aZ(v,t))
w.E(new A.c6(v,u,v+f,u))
w.E(new A.c6(v,u,v,u+f))
w.E(new A.c6(v,u,v-f,u))
w.E(new A.c6(v,u,v,t))
w.E(new A.bt())
d.af(w,g)},
a5(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=b3.a,a8=a7/2,a9=b3.b,b0=a9/2,b1=new A.o(a8,b0)
for(w=a6.b,v=w*6.283185307179586,u=0;u<16;++u){t=B.i.F(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=B.i.F(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+B.o.F(u,3))+u)+1)/2
$.S()
q=new A.ao(B.O,B.M,B.R,B.S,B.Q)
q.r=B.c.j(0.1+r*0.5).gp(0)
a6.b1x(b2,new A.o(t*a7,s*a9),2+r*2.2,q)}for(a7=w*2,a9=a6.e,p=0;p<3;++p){o=B.i.F(a7+p/3,1)
$.S()
n=new A.ao(B.O,B.M,B.R,B.S,B.Q)
n.b=B.a9
n.c=1.6
n.r=a9.j((1-o)*0.38).gp(0)
b2.N(b1,138+o*90,n)}for(a7=a6.d,m=b2.c,u=0;u<28;++u){l=B.i.F(w*(1+B.o.F(u,2))+u/28,1)
k=u*2.399963+Math.sin(u*1.7)*0.2
j=113.16+l*(70+B.o.F(u,5)*18)
i=a8+Math.cos(k)*j
h=b0+Math.sin(k)*j*0.96
o=new A.o(i,h)
g=B.i.D(Math.sin(l*3.141592653589793),0,1)
switch(B.o.F(u,4)){case 0:f=B.i.D(Math.abs(Math.cos(l*6.283185307179586*3)),0.28,1)
J.bo(m.save())
m.translate(i,h)
m.scale(f,1)
$.S()
e=new A.ao(B.O,B.M,B.R,B.S,B.Q)
e.r=a7.j(g).gp(0)
b2.N(B.J,6.5,e)
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.b=B.a9
i.c=1.2
i.r=a9.j(g).gp(0)
b2.N(B.J,6.5,i)
if(f>0.6&&g>0.35){i=$.hIG()
h=i.b
d=h.c
h=h.a.c
i.a5(b2,new A.o(-d/2,-h.gba(h)/2))}m.restore()
break
case 1:$.S()
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.r=a9.j(g*0.95).gp(0)
a6.b1x(b2,o,3+g*3,i)
break
case 2:$.S()
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.r=B.c.j(g*0.8).gp(0)
b2.N(o,1.6+g*1.8,i)
break
default:d=Math.cos(k)
a0=Math.sin(k)
a1=7+g*7
$.S()
a2=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a2.c=1.8
a2.d=B.bu
a2.r=a7.j(g*0.8).gp(0)
b2.ah(o,new A.o(i-d*a1,h-a0*a1),a2)}}for(a3=0;a3<3;++a3){a4=v+a3*6.283185307179586/3
for(a5=0;a5<8;++a5){r=a4-a5*0.09
w=Math.cos(r)
m=Math.sin(r)
p=1-a5/8
$.S()
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.r=a9.j(p*0.85).gp(0)
b2.N(new A.o(a8+w*144,b0+m*144),1.4+p*2.6,i)}w=Math.cos(a4)
m=Math.sin(a4)
$.S()
i=new A.ao(B.O,B.M,B.R,B.S,B.Q)
i.r=a7.j(0.28).gp(0)
i.y=Q.os
b2.N(new A.o(a8+w*144,b0+m*144),7,i)}},
aD(d){return d.b!==this.b}}
C.bdB.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.S(),a4=A.K()
a4.r=this.d.j(0.075).gp(0)
for(w=this.b,v=w*6.283185307179586,u=x.g,a3=a3.r,t=0;t<14;++t){s=v+t*6.283185307179586/14
r=A.a([],u)
q=new A.aG(a3,B.ai,e,e,r)
p=s-0.14361566416410484
r.push(new A.aZ(a0+Math.cos(p)*130,a2+Math.sin(p)*130))
q.ab()
p=new A.aq(a0+Math.cos(p)*330,a2+Math.sin(p)*330)
r.push(p)
o=q.f
if(o!=null)p.ak(o)
q.ab()
p=s+0.14361566416410484
o=new A.aq(a0+Math.cos(p)*330,a2+Math.sin(p)*330)
r.push(o)
n=q.f
if(n!=null)o.ak(n)
q.ab()
p=new A.aq(a0+Math.cos(p)*130,a2+Math.sin(p)*130)
r.push(p)
o=q.f
if(o!=null)p.ak(o)
q.ab()
p=new A.bt()
r.push(p)
r=q.f
if(r!=null)p.ak(r)
q.ab()
a5.af(q,a4)}a0=w*2
a2=B.i.F(a0,1)
a3=a5.c
J.bo(a3.save())
a3.translate(a2*(d+240)-120,0)
a5.hW(0,0.35)
a2=-a1
v=A.K()
v.sav(new A.a8(B.a7,B.aa,B.x,A.a([B.c.j(0),B.c.j(0.07),B.c.j(0)],x.O),e,e).aK(0,D.f89))
a5.ar(new A.a1(-18,a2,18,a2+a1*3),v)
a3.restore()
for(a2=a1+40,t=0;t<34;++t){m=B.i.F(Math.abs(Math.sin(t*91.7)*43758.5453),1)
l=B.i.F(w*(1+B.o.F(t,2))+t/34,1)
v=l*6.283185307179586
u=Math.sin(v*2+t)
J.bo(a3.save())
a3.translate(m*d+u*14,l*a2-20)
a3.rotate(v*(2+B.o.F(t,3))*180/3.141592653589793,0,0)
v=B.i.D(Math.abs(Math.cos(v*3+t)),0.3,1)
a3.scale(1,v)
if(l<0.08)v=l/0.08
else v=l>0.9?(1-l)/0.1:1
k=B.i.D(v,0,1)
v=A.bn(D.f8I,B.Uu)
u=new A.ao(B.O,B.M,B.R,B.S,B.Q)
u.r=D.aD8[B.o.F(t,6)].j(k*0.9).gp(0)
a5.am(v,u)
a3.restore()}j=[new A.o(d*0.18,a1*0.2),new A.o(d*0.82,a1*0.26),new A.o(d*0.5,a1*0.07)]
for(i=0;i<3;++i){l=B.i.F(a0+i/3,1)
if(l>0.5)continue
h=l/0.5
g=6+h*44
d=1-h
k=B.i.D(d,0,1)
for(a1=g*0.62,a2=g+5,t=0;t<14;++t){s=t*6.283185307179586/14
a3=Math.cos(s)
w=Math.sin(s)
f=D.aD8[B.o.F(t+i,6)].j(k)
v=j[i]
u=v.a
v=v.b
$.S()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.c=2
r.d=B.bu
r.r=f.gp(0)
a5.ah(new A.o(u+a3*a1,v+w*a1),new A.o(u+a3*g,v+w*g),r)
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=f.gp(0)
a5.N(new A.o(u+a3*a2,v+w*a2),1.6,r)}a1=j[i]
$.S()
a2=new A.ao(B.O,B.M,B.R,B.S,B.Q)
a2.r=B.c.j(k).gp(0)
a5.N(a1,5*d,a2)}},
aD(d){return d.b!==this.b}}
C.bdA.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=a5.a/2,a0=a5.b/2,a1=new A.o(d,a0),a2=d-4,a3=a2-22
$.S()
w=A.K()
w.b=B.a9
w.c=14
v=f.d
w.r=(v?f.r:B.aZ).j(0.22).gp(0)
a4.N(a1,a2-7,w)
w=A.K()
w.b=B.a9
w.c=1.7
w.r=(v?f.f:B.c).j(0.28).gp(0)
a4.N(a1,a2-1,w)
w=A.K()
w.b=B.a9
w.c=1.6
w.r=B.c.j(0.16).gp(0)
a4.N(a1,a3+8,w)
u=A.K()
u.c=1.5
u.d=B.bu
u.r=(v?f.f:B.c).j(0.22).gp(0)
for(w=a2-3,t=a2+2,s=0;s<12;++s){r=s/12*3.141592653589793*2-1.5707963267948966
a4.ah(new A.o(d+Math.cos(r)*w,a0+Math.sin(r)*w),new A.o(d+Math.cos(r)*t,a0+Math.sin(r)*t),u)}w=a4.c
J.bo(w.save())
t=$.S().r
q=x.g
p=new A.aG(t,B.ai,e,e,A.a([],q))
p.E(new A.jS(A.bZ(a1,a3)))
a4.mT(0,p)
p=A.bZ(a1,a3)
o=A.K()
o.sav(D.eA7.aK(0,A.bZ(a1,a3)))
a4.ar(p,o)
n=B.i.D(f.b,0,1)
if(n>0.004){a0+=a3
m=a0-a3*2*n
l=v?5.2:1.8
q=A.a([],q)
k=new A.aG(t,B.ai,e,e,q)
j=d-a3
a0+=4
k.E(new A.aZ(j,a0))
for(t=d+a3,p=f.c*3.141592653589793,o=p*2,p*=2.2,i=l*0.42;j<=t;j+=3){h=(j-d)/a3*3.141592653589793
h=new A.aq(j,m+Math.sin(h*2+o)*l+Math.sin(h*3.1-p)*i)
q.push(h)
g=k.f
if(g!=null)h.ak(g)
k.ab()}k.E(new A.aq(t,a0))
k.E(new A.bt())
$.S()
d=A.K()
a0=x.O
t=f.e
a0=v?A.a([f.f.j(0.55),t.j(0.78),f.r.j(0.92)],a0):A.a([t.j(0.22),D.eY.j(0.34),B.cJ.j(0.62)],a0)
d.sav(new A.a8(B.b1,B.b7,B.x,a0,e,e).aK(0,A.bZ(a1,a3)))
a4.af(k,d)
d=A.K()
d.b=B.a9
d.c=2
d.r=B.c.j(v?0.28:0.14).gp(0)
a4.af(k,d)}w.restore()},
aD(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.aDl.prototype={
S(){var w=$.ax()
return new C.aDm(new A.au(B.ax,w),new A.au(B.ax,w))},
bjV(d,e){return this.w.$2$cloudRequest(d,e)}}
C.aDm.prototype={
t(){var w=this.d,v=$.ax()
w.U$=v
w.P$=0
w=this.e
w.U$=v
w.P$=0
this.a3()},
mo(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
cD9(d){this.a.bjV(d,!0)
this.mo("Deposit submitted. Admin will review your payment proof.")
this.m(new C.dsO())},
cBK(){var w,v,u=this,t=A.cX(u.d.a.a)
if(t==null||t<=0){u.mo("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
A.hy(w,new C.arq(v.d,t,u.gcD8(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cJN(){var w,v,u,t,s=this,r=s.d,q=A.cX(r.a.a)
if(q==null||q<=0){s.mo("Enter an amount to withdraw.")
return}if(q<10){s.mo("Minimum withdrawal is $"+A.dF(10)+".")
return}w=s.a.d.d
if(q>w){s.mo("Insufficient balance. You have $"+A.dF(w)+".")
return}w=s.e
v=C.hEd(w.a.a)
if(v.length===0){s.mo("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.bjV(new A.d7("wd_"+1000*Date.now(),s.a.d.a,q,B.f2,B.l1,"Withdrawal to $"+v+" \u2014 Fee: $"+A.dF(u)+" \u2014 You receive: $"+A.dF(q-u),null,null,B.dI,new A.V(Date.now(),0,!1)),!0)
s.mo("Withdrawal submitted \u2014 waiting for admin approval.")
r.bP(0,B.cf)
w.bP(0,B.cf)
s.m(new C.dsP())},
cGp(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,A.J)(w),++s){r=w[s]
if(r.x!==B.cu||!this.aYO(r)||A.hhw(r))continue
q=r.d
p=q===B.f2||q===B.kk||q===B.eD
q=r.c
if(p)t+=q
else u+=q}return new A.br9(u,t)},
B(d){var w,v,u,t,s=this,r=null,q=s.cGp(),p=s.a.r,o=new A.Y(p,new C.dsQ(),A.U(p).k("Y<1>")).gI(0)
p=A.aF(d,B.dS,x.w).w
w=s.a
v=w.c
w=w.x
u=A.a([D.eY.j(0.24),B.a_.j(0.72)],x.O)
t=A.L(D.eY.j(0.38),B.r,1)
w=A.bTo(!1,v,"WALLET",A.h6(A.aP(!1,r,!0,A.q(B.A,A.X(W.aqr,D.eY,r,r,r,18),B.f,r,r,new A.p(r,r,t,r,r,new A.a8(B.aA,B.aF,B.x,u,r,r),B.a6),r,40,r,r,r,r,r,40),B.cV,!0,r,r,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,r),r,"Back up wallet",r,r))
u=s.bGk(q.a,q.b,o)
t=x.p
v=A.A(A.a([s.asc(B.wN,"Deposit",0),s.asc(B.uV,"Withdraw",1),s.asc(B.hj,"History",2)],t),B.l,r,B.qW,B.j,0,r,r)
return A.e9(A.bm(!1,A.ce(A.x(A.a([w,B.bz,u,B.dc,v,B.dc,A.oy(s.f===2?s.c1Q():s.c7C(),B.iy,A.pU(),B.b_,B.b_,A.LI())],t),B.al,r,B.e,B.j,0,B.p),B.t,r,B.y,r,new A.R(18,p.r.b+8,18,130),r,r,B.ah),!0,!1,B.ag,!0,!1),B.BK,!0)},
bGk(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.a.i(i.a.e)
if(B.a.q(g,"@")){w=B.a.co(g,"@")
v=B.a.aB(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+B.a.b2(g,w)}else v=g
w=A.m(26)
u=A.ap(h,i.aBG(220,0.1),h,h,h,-60,-70,h)
t=A.ap(-90,i.aBG(200,0.07),h,h,h,30,h,h)
s=A.ap(-60,i.aBG(150,0.05),h,h,-40,h,h,h)
r=A.m(26)
r=A.bS(0,new A.bN(new A.p(h,h,A.L(B.c.j(0.18),B.r,1),r,h,h,B.n),B.bj,h,h),0,0,0)
q=A.m(6)
p=x.p
q=A.A(A.a([A.q(h,A.b2(h,h,h,new C.bd_(h),B.az),B.f,h,h,new A.p(h,h,h,q,h,D.c9a,B.n),h,28,h,h,h,h,h,38),B.b3,D.h2z],p),B.l,h,B.e,B.j,0,h,h)
o=A.d("Available balance",h,h,h,h,h,h,A.l(h,h,B.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,B.U,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=A.ev(B.a7,C.as6(new C.dsA(i),D.fAI,i.a.d.a),B.f,B.e7)
m=A.a([A.E(i.aRa(B.qJ,"In",d),1),A.E(i.aRa(B.t2,"Out",e),1)],p)
if(f>0){l=B.d1.j(0.22)
k=A.m(99)
j=A.L(B.ja.j(0.6),B.r,1)
m.push(A.q(h,A.d(""+f+" pending",h,h,h,h,h,h,D.fvW,h,h,h),B.f,h,h,new A.p(l,h,j,k,h,h,B.n),h,h,h,h,B.po,h,h,h))}return new A.fH(1.62,A.bw(w,new A.an(B.a0,h,B.ac,B.t,A.a([D.ezk,u,t,s,r,new A.D(A8.rZ,A.x(A.a([q,B.b3,o,B.bG,n,B.b3,A.A(m,B.l,h,B.e,B.j,0,h,h),B.am,A.d(v,h,1,B.a2,h,h,h,A.l(h,h,B.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,B.a8,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),B.E,h,B.e,B.j,0,B.p),h)],p),h),B.aq),h)},
aBG(d,e){var w=null
return A.q(w,w,B.f,w,w,new A.p(w,w,A.L(B.c.j(e),B.r,22),w,w,w,B.a6),w,d,w,w,w,w,w,d)},
aRa(d,e,f){var w=null,v=B.c.j(0.16)
return A.A(A.a([A.q(w,A.X(d,B.c,w,w,w,13),B.f,w,w,new A.p(v,w,w,w,w,w,B.a6),w,22,w,w,w,w,w,22),B.bo,new A.dm(1,B.co,A.ev(B.a7,A.d(e+"  $"+A.dF(f),w,w,w,w,w,w,B.nY,w,w,w),B.f,B.e7),w)],x.p),B.l,w,B.e,B.j,0,w,w)},
asc(d,e,f){var w=null,v=this.f===f,u=v?D.caw:new A.a8(B.a7,B.aa,B.x,A.a([B.c.j(0.08),B.c.j(0.03)],x.O),w,w),t=A.L(v?B.c.j(0.6):D.eY.j(0.25),B.r,1),s=v?A.a([new A.ab(0,B.G,B.aC.j(0.45),B.J,18)],x.V):w
u=A.cT(w,A.X(d,v?D.afF:D.eY,w,w,w,26),w,w,B.cw,new A.p(w,w,t,w,s,u,B.a6),B.GF,w,62,w,w,w,w,w,62)
return A.az(B.c2,new A.a5(92,w,A.x(A.a([u,B.aTY,A.d(e,w,w,w,w,w,w,A.l(w,w,v?B.c:B.aR,w,w,w,w,w,w,w,w,12.5,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.j,0,B.p),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dsz(this,f),w,w,w,w,w,w,!1,B.a4)},
c7C(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=A.cX(a1.a.a)
if(a2==null)a2=0
w=a0?D.eY:B.cv
v=a2>0
u=new C.dsL(e,w)
t=new C.dsK()
s=e.f
r=A.m(26)
q=x.O
p=A.a([w.j(0.1),B.uo,B.uo],q)
o=A.L(w.j(0.22),B.r,1)
n=x.V
m=A.a([new A.ab(0,B.G,B.w.j(0.35),B.eQ,22)],n)
l=w.j(0.15)
l=A.q(d,A.X(a0?B.wN:B.uV,w,d,d,d,18),B.f,d,d,new A.p(l,d,d,d,d,d,B.a6),d,34,d,d,d,d,d,34)
k=A.E(A.d(a0?"Add money":"Take money out",d,d,d,d,d,d,B.fE,d,d,d),1)
j=B.c.j(0.06)
i=A.m(99)
h=x.p
i=A.A(A.a([l,B.au,k,A.q(d,A.A(A.a([A.X(B.hM,w,d,d,d,14),A.d("Cash App",d,d,d,d,d,d,A.l(d,d,B.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,B.I,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),B.l,d,B.e,B.P,0,d,d),B.f,d,d,new A.p(j,d,d,i,d,d,B.n),d,d,d,d,B.lj,d,d,d)],h),B.l,d,B.e,B.j,0,d,d)
l=A.d("$",d,d,d,d,d,d,A.l(d,d,v?w:B.bW,d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=A.a([new A.uX(A.ag("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=A.A(A.a([new A.D(B.i0,l,d),B.dh,A.aYy(new A.cP(D.b6Q,A.aM(d,B.Z,!1,d,!0,B.t,d,A.aO(),a1,w,d,d,d,d,2,A.bz(d,B.eN,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,A.l(d,d,B.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.ak,d,d,k,d,d,B.ec,d,d,d,1,d,d,!1,"\u2022",d,new C.dsJ(e),d,d,d,!1,d,d,!1,d,!0,d,B.ad,d,d,d,d,d,d,d,d,d,d,d,D.fDB,!0,B.K,d,B.ao,d,d,d,d),d),d)],h),B.E,d,B.ba,B.j,0,d,d)
a1=v?120:60
a1=A.as(A.cT(d,d,d,d,B.b_,new A.p(d,d,d,A.m(99),d,new A.a8(B.a7,B.aa,B.x,A.a([w.j(0),w,w.j(0)],q),d,d),B.n),B.a3,d,3,d,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+A.dF(10)+" \xb7 admin sends it to your Cash App."
q=A.d(q,d,d,d,d,d,d,A.l(d,d,B.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,B.a8,d,1.35,!0,d,d,d,d,d,d,d,d),B.K,d,d)
l=A.a([],h)
j=a0?D.cep:D.ct9
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=A.a([i,B.bz,k,B.am,a1,B.T,q,B.aB,A.A(l,B.l,d,B.e,B.j,0,d,d)],h)
if(!a0){q=B.c.j(0.04)
l=A.X(B.hM,w,d,d,d,d)
k=A.l(d,d,B.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,B.U,d,d,!0,d,d,d,d,d,d,d,d)
l=A.a([B.aB,A.aM(d,B.Z,!1,d,!0,B.t,d,A.aO(),e.e,d,d,d,d,d,2,A.bz(d,d,d,d,d,d,d,d,!0,new A.b6(4,A.m(16),new A.ay(B.c.j(0.08),1,B.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new A.b6(4,A.m(16),new A.ay(w,1,B.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.ak,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.ad,d,d,d,d,d,d,d,d,d,d,d,B.ng,!0,B.a5,d,B.ao,d,d,d,d)],h)
if(v){q=B.c.j(0.04)
k=A.m(16)
B.d.v(l,A.a([B.ae,A.q(d,A.x(A.a([t.$2("Amount","$"+A.dF(a2)),t.$3$color("Fee (15%)","\u2212 $"+A.dF(a2*0.15),B.eW),A.iK(B.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+A.dF(a2*0.85),!0,D.eY)],h),B.l,d,B.e,B.j,0,B.p),B.f,d,d,new A.p(q,d,d,k,d,d,B.n),d,d,d,d,B.hK,d,d,d)],h))}B.d.v(a1,l)}a1.push(B.aO)
q=A.m(18)
l=a0?B.SL:B.a4y
n=A.a([new A.ab(0,B.G,(a0?B.b2:B.dN).j(0.45),B.dp,18)],n)
k=a0?e.gcBJ():e.gcJM()
j=A.X(a0?B.a2u:B.lP,d,d,d,d,20)
if(a0)i=v?"Deposit $"+A.dF(a2):"Deposit funds"
else i=v?"Withdraw $"+A.dF(a2):"Request withdrawal"
a1.push(new A.a5(d,54,new A.bN(new A.p(d,d,d,q,n,new A.a8(B.a7,B.aa,B.x,l,d,d),B.n),B.bj,A.lS(j,A.d(i,d,d,d,d,d,d,B.nf,d,d,d),k,A.ft(d,d,B.L,d,d,d,d,d,d,B.c,d,d,d,B.L,new A.b9(A.m(18),B.a1),d,d,d,d,d)),d),d))
return A.q(d,A.x(a1,B.al,d,B.e,B.j,0,B.p),B.f,d,d,new A.p(d,d,o,r,m,new A.a8(B.b1,B.b7,B.x,p,B.Dy,d),B.n),d,d,new A.bA("form"+s,x.W),d,B.yO,d,d,d)},
c1Q(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=A.U(a2).k("Y<1>"),a4=A.C(new A.Y(a2,new C.dsD(a0),a3),a3.k("M.E"))
B.d.aZ(a4,new C.dsE())
w=B.a.i(a0.a.e.toLowerCase())
a2=A.T(x.N,x.o)
a3=$.fLS
a3=a3==null?a1:a3.$0()
a3=J.aT(a3==null?B.iC:a3)
while(a3.C()){v=a3.gR(a3)
u=v.a
if(u.length!==0&&B.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,A.J)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("b7<2>")
a2=A.C(new A.b7(a2,a3),a3.k("M.E"))
r=C.ikJ(a2,A.M0(a0.a.e,new C.dsF(a0)))
a2=A.m(24)
a3=A.L(B.c.j(0.07),B.r,1)
v=A.m(99)
u=A.m(99)
q=x.p
u=A.a([A.A(A.a([D.bK7,A.aP(!1,v,!0,A.q(a1,D.f9F,B.f,a1,a1,new A.p(a1,a1,A.L(D.eY.j(0.4),B.r,1),u,a1,a1,B.n),a1,a1,a1,a1,B.mc,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.dsG(a0),a1,a1,a1,a1,a1,a1,a1)],q),B.l,a1,B.e,B.j,0,a1,a1),B.W],q)
if(a4.length===0)u.push(new A.D(D.bBD,A.x(A.a([A.X(B.Hg,B.c.j(0.25),a1,a1,a1,40),B.W,D.h_9],q),B.l,a1,B.e,B.j,0,B.p),a1))
else{v=A.a([],q)
for(p=A.cW(a4,0,A.dB(a0.r,"count",x.S),A.U(a4).c),o=p.$ti,p=new A.bR(p,p.gI(0),o.k("bR<ak.E>")),o=o.k("ak.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===B.f2||k===B.kk||k===B.eD
if(l===B.cu)i=j?B.c0:D.eY
else i=l===B.dI?B.ja:B.fh
h=j?"-":"+"
l=B.c.j(0.06)
k=i.j(0.14)
g=new A.ay(i.j(0.4),1,B.r,-1)
k=A.q(a1,A.X(j?B.uV:B.wN,i,a1,a1,a1,19),B.f,a1,a1,new A.p(k,a1,new A.bH(g,g,g,g),a1,a1,a1,B.a6),a1,42,a1,a1,a1,a1,a1,42)
f=A.d(a0.bWO(n),a1,a1,a1,a1,a1,a1,B.jd,a1,a1,a1)
e=C.hvb(n.y)
d=B.c.j(0.5)
f=A.a([f,B.bG,A.d(e,a1,a1,a1,a1,a1,a1,new A.G(!0,d,a1,a1,a1,a1,11,B.a8,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],q)
e=n.f
if(B.a.i(e==null?"":e).length!==0){e.toString
d=B.c.j(0.4)
f.push(A.d(e,a1,1,B.a2,a1,a1,a1,new A.G(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))}if(m!=null&&n.x!==B.kH)f.push(new A.D(E.als,new A.D1(B.bH,5,4,B.bs,A.a([a0.aQ3("Before",m.b),a0.aQ3("After",m.a)],q),a1),a1))
m=A.x(f,B.E,a1,B.e,B.j,0,B.p)
f=n.c
f=f===0?"\u2014":h+"$"+A.dF(f)
f=A.d(f,a1,a1,a1,a1,a1,a1,new A.G(!0,i,a1,a1,a1,a1,15,B.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
e=i.j(0.14)
d=new A.aN(99,99)
n=C.hCO(n)
v.push(A.q(a1,new A.c8(B.aL,B.e,B.j,B.l,a1,B.p,a1,0,A.a([k,B.bc,new A.by(1,B.bb,m,a1),B.af,A.x(A.a([f,B.aw,A.q(a1,A.d(n,a1,a1,a1,a1,a1,a1,new A.G(!0,i,a1,a1,a1,a1,9.5,B.I,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.f,a1,a1,new A.p(e,a1,a1,new A.be(d,d,d,d),a1,a1,B.n),a1,a1,a1,a1,B.yS,a1,a1,a1)],q),B.dP,a1,B.e,B.j,0,B.p)],q),a1),B.f,a1,a1,new A.p(a1,a1,new A.bH(B.a1,B.a1,new A.ay(l,1,B.r,-1),B.a1),a1,a1,a1,B.n),a1,a1,a1,a1,B.qC,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(A.hp(D.c_Q,A.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,B.ci,a1,a1,a1),new C.dsH(a0),A.fv(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.eY,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
B.d.v(u,v)}return A.q(a1,A.x(u,B.al,a1,B.e,B.j,0,B.p),B.f,a1,a1,new A.p(B.uo,a1,a3,a2,a1,a1,B.n),a1,a1,D.hrv,a1,D.bE0,a1,a1,a1)},
aQ3(d,e){var w=null,v=B.c.j(0.05),u=A.m(7),t=A.L(B.c.j(0.1),B.r,1),s=A.cQ(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=A.dF(e)
return A.q(w,A.Za(A.cQ(A.a([s,A.cQ(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.fAT,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.n_,w,w,w)},
aYO(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(B.a.q(w,"clock-in session started"))return!1
v=d.d
if(v===B.eD)return d.c>0
if(A.to(d))return!1
if(v===B.fS||v===B.f2)return!0
if(v===B.p2||v===B.kk)return!0
if(v===B.kI)return!0
if(v===B.h2)return B.a.q(w,"clock-in")||d.c>0
return!1},
bWO(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(B.a.q(w,"clock-in"))return"Clock-in earnings"
if(B.a.q(w,"crown daily reward"))return B.a.q(w,"queen")?"Queen crown reward":"King crown reward"
if(B.a.q(w,"investment"))return"Investment"
switch(d.d.a){case 0:return"Deposit"
case 1:return"Withdrawal"
case 2:return"Added"
case 3:return"Spent"
case 6:return"Claim"
case 4:return"Earnings"
case 5:return"Contribution"}}}
C.bd_.prototype={
a5(d,e){var w,v,u,t
$.S()
w=A.K()
w.r=D.bij.j(0.55).gp(0)
w.c=1
v=e.a
u=v*0.35
t=e.b
d.ah(new A.o(u,0),new A.o(u,t),w)
u=v*0.65
d.ah(new A.o(u,0),new A.o(u,t),w)
t*=0.5
d.ah(new A.o(0,t),new A.o(v,t),w)},
aD(d){return!1}}
C.by6.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null
for(w=a2.b,v=this.b,u=v*6.283185307179586,t=a2.a,s=0+t,r=x.O,q=0;q<3;++q){p=w*(0.2+0.25*q)+Math.sin(u+q*2)*14-40
o=new A.a1(0,p,s,p+80)
n=[B.b9,B.ht,B.bx][q]
$.S()
p=new A.ao(B.O,B.M,B.R,B.S,B.Q)
p.sav(new A.a8(B.b1,B.b7,B.x,A.a([n.j(0),n.j(0.1),n.j(0)],r),a0,a0).aK(0,o))
a1.ar(o,p)}for(m=0;m<46;++m){s=m*12.9898
l=Math.sin(s+78.233)*43758.5453
l=(l-Math.floor(l))*t
k=Math.sin(s+156.466)*43758.5453
j=(k-Math.floor(k))*w
i=0.25+0.75*(0.5+0.5*Math.sin(u*(1+B.o.F(m,3))+m))
k=Math.sin(s+234.699)*43758.5453
s=Math.floor(k)
$.S()
r=new A.ao(B.O,B.M,B.R,B.S,B.Q)
r.r=B.c.j(0.55*i).gp(0)
a1.N(new A.o(l,j),0.7+(k-s)*1.5,r)
if(B.o.F(m,9)===0){h=new A.ao(B.O,B.M,B.R,B.S,B.Q)
h.r=B.ph.j(0.35*i).gp(0)
h.c=1
a1.ah(new A.o(l-4,j),new A.o(l+4,j),h)
a1.ah(new A.o(l,j-4),new A.o(l,j+4),h)}}for(u=-t*0.35,s=w*0.2,r=t*0.08,p=-w*0.02,v*=2,m=0;m<2;++m){h=B.i.F(v+m*0.5,1)
if(h>0.35)continue
q=h/0.35
g=t*(0.75-m*0.4)+u*q
f=w*(0.1+m*0.12)+s*q
$.S()
e=new A.ao(B.O,B.M,B.R,B.S,B.Q)
e.r=B.c.j(0.7*(1-q)).gp(0)
e.c=1.6
e.d=B.bu
a1.ah(new A.o(g+r,f+p),new A.o(g,f),e)}for(u=t*0.62,w*=0.36,m=0;m<4;++m){h=B.i.F(v+m*0.25,1)
t=B.ph.j(0.5*Math.sin(h*3.141592653589793))
d=new A.iH(new A.eo("z",a0,a0,B.cN,a0,a0,a0,a0,a0,a0,new A.G(!0,t,a0,a0,a0,a0,12+h*14,B.u,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)),B.a5,B.bX,new A.jh(1),a0,a0,a0,a0,B.bY,a0,B.cs)
d.e5()
d.a5(a1,new A.o(u+Math.sin(h*6.283185307179586+m)*12+m*8,w-h*90))}},
aD(d){return d.b!==this.b}}
C.aMT.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.bA5.prototype={}
C.b1t.prototype={}
C.a0L.prototype={
S(){return new C.aFI(new A.au(B.ax,$.ax()))},
cYt(d,e){return this.d.$2(d,e)}}
C.aFI.prototype={
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.a3()},
b1C(){var w=this,v=B.a.i(w.d.a.a),u=A.ag("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.m(new C.ejE(w))
return}u=w.c
u.toString
A.a6(u,!1).O(null)
w.a.cYt(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=A.aF(a0,B.eS,e).w
e=A.aF(a0,B.dS,e).w
w=A.as(A.q(f,f,B.f,f,f,new A.p(B.aT,f,f,A.m(2),f,f,B.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=A.A(A.a([A.q(f,D.c_b,B.f,f,f,new A.p(f,f,f,f,A.a([new A.ab(0,B.G,B.fe.j(0.5),B.J,18)],v),D.at4,B.a6),f,52,f,f,f,f,f,52),B.ew,A.E(A.x(A.a([D.fNg,B.bG,A.d(g.a.c,f,1,B.a2,f,f,f,B.ne,f,f,f)],u),B.E,f,B.e,B.j,0,B.p),1),A.aI(f,f,f,f,D.c04,f,f,f,new C.ejH(a0),f,f,f,f,f,f)],u),B.l,f,B.e,B.j,0,f,f)
s=g.b8B(B.f0,"You",B.cv)
r=B.aQ.j(0.15)
q=A.m(99)
q=A.A(A.a([s,new A.D(B.ky,A.q(f,D.fRr,B.f,f,f,new A.p(r,f,A.L(B.aQ.j(0.6),B.r,1),q,f,f,B.n),f,f,f,f,B.hg,f,f,f),f),g.b8B(B.wJ,"Your friend",B.bT)],u),B.l,f,B.e,B.j,0,f,f)
r=B.c.j(0.06)
s=A.m(16)
p=B.c.j(0.12)
o=A.m(16)
n=g.f
if(n.length===0)n=f
o=A.aM(f,B.Z,!0,f,!0,B.t,f,A.aO(),g.d,f,f,f,f,f,2,A.bz(f,f,f,f,f,f,f,f,!0,new A.b6(4,s,new A.ay(p,1,B.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new A.b6(4,o,D.b5C),f,f,f,f,f,f,f,f,Q.EO,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.c2D,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,f,!1,f,B.ak,f,f,f,f,f,B.mz,f,f,f,1,f,f,!1,"\u2022",f,new C.ejI(g),f,new C.ejJ(g),f,!1,f,f,!1,f,!0,f,B.ad,f,f,f,f,f,f,f,f,f,f,f,B.jx,!0,B.a5,f,B.ao,f,f,f,f)
r=A.a([],u)
for(m=0;m<4;++m){l=D.coa[m]
s=new A.aN(14,14)
p=g.e===l
n=p?D.at3:f
p=p?f:B.c.j(0.06)
k=new A.ay(g.e===l?B.aD:B.bA,1,B.r,-1)
j=""+l
i=A.d(j,f,f,f,f,f,f,B.dq,f,f,f)
j=l===1?"game":"best of "+j
h=B.c.j(0.7)
s=A.a([new A.by(1,B.bb,A.az(f,A.cT(f,A.x(A.a([i,A.d(j,f,f,f,f,f,f,new A.G(!0,h,f,f,f,f,10,B.U,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)],u),B.l,f,B.e,B.j,0,B.p),f,f,B.b_,new A.p(p,f,new A.bH(k,k,k,k),new A.be(s,s,s,s),f,n,B.n),B.eG,f,f,f,f,B.fm,f,f,f),B.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.ejK(g,l),f,f,f,f,f,f,!1,B.a4),f)],u)
if(l!==7)s.push(B.af)
B.d.v(r,s)}s=A.A(r,B.l,f,B.e,B.j,0,f,f)
r=A.A(A.a([A.X(B.lO,B.c.j(0.5),f,f,f,15),B.bo,A.E(A.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,A.l(f,f,B.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),B.l,f,B.e,B.j,0,f,f)
p=A.m(18)
v=A.a([new A.ab(0,B.G,B.bE.j(0.4),B.cC,18)],v)
n=g.e
j=n===1?"":"s"
return new A.D(new A.R(0,0,0,d.f.d+e.r.d),A.q(f,A.x(A.a([w,B.aO,t,B.bz,q,B.bz,D.fVu,B.am,o,B.aO,D.fZY,B.T,s,B.aB,r,B.aO,new A.a5(f,54,new A.bN(new A.p(f,f,f,p,v,D.c9o,B.n),B.bj,A.hp(D.arh,A.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,B.fE,f,f,f),g.gcdn(),f),f),f)],u),B.al,f,B.e,B.P,0,B.p),B.f,f,f,D.b7C,f,f,f,f,D.bFk,f,f,f),f)},
b8B(d,e,f){var w=null,v=f.j(0.1),u=A.m(16),t=A.L(f.j(0.45),B.r,1)
return A.E(A.q(w,A.x(A.a([A.X(d,f,w,w,w,24),B.aw,A.d(e,w,w,w,w,w,w,B.KU,w,w,w)],x.p),B.l,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.fm,w,w,w),1)}}
C.pw.prototype={}
C.bsW.prototype={
a5(d,e){var w,v,u,t,s=null,r=e.a/2,q=new A.o(r,e.b/2),p=r-4
for(w=0;w<37;++w){$.S()
v=new A.ao(B.O,B.M,B.R,B.S,B.Q)
if(w===0)r=B.bd
else r=(w&1)===0?B.bD:B.a_
v.r=r.gp(0)
d.cC(A.bZ(q,p),w*2*3.141592653589793/37-1.5707963267948966,0.16981581911296179,!0,v)}$.S()
r=A.K()
r.r=B.hc.gp(0)
r.b=B.a9
r.c=8
d.N(q,p,r)
r=A.K()
r.r=B.aQ.gp(0)
d.N(q,p*0.22,r)
r=this.b
if(r!=null){u=A.fq(s,B.cs,s,s,s,A.cQ(s,s,s,s,s,s,s,s,s,B.aWw,A.w(r)),B.a5,B.bX,s,B.dD,B.bY)
u.e5()
r=u.b
t=r.c
r=r.a.c
u.a5(d,q.aJ(0,new A.o(t/2,r.gba(r)/2)))}},
aD(d){return d.b!=this.b}}
C.Ft.prototype={
a7(){return"NgmyProMoveResult."+this.b}}
C.asH.prototype={
gkr(){var w=this.d
w=w==null?null:w.a
return w!==!1},
brU(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.h98("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.c2G()
w=s.gkr()
v=s.d
s.c=w?"You ("+v.b+") vs NGMY \u2014 capture all opponent discs":v.b+" vs "+v.c+" \u2014 capture all discs"
break
case"tic_tac_go":s.b=1
s.at=A.c0(9,"",!1,x.N)
s.ax=!0
if(s.gkr())w="You are X vs NGMY (O) \u2014 get 3 in a row"
else{w=s.d
w=w.b+" (X) vs "+w.c+" (O)"}s.c=w
break
case"blackjack_vegas":s.b=1
w=x.t
s.ay=A.a([1+e.az(10),1+e.az(10)],w)
s.ch=A.a([1+e.az(10),1+e.az(10)],w)
s.CW=!1
s.c="Beat the dealer \u2014 don't bust over 21"
break
case"roulette_euro":s.b=1
s.cx=null
s.c="Pick a number \u2014 spin the wheel"
break
case"slots_jackpot":s.b=1
s.db=A.a([e.az(6),e.az(6),e.az(6)],x.t)
s.c="Match 3 symbols for jackpot"
break
case"billiards_snooker":s.b=1
s.dx=e.ai()*3.141592653589793*2
s.c=s.gkr()?"Aim and shoot \u2014 beat NGMY on the snooker table":"Aim and shoot \u2014 pocket balls"
break
case"connect_four_pro":s.b=1
u=J.e4(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=A.c0(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gkr())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.b_Q(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aIW.h(0,d)
s.c=w==null?"Play to earn":w}},
bdw(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gkr()
if(o)return
o=x.N
s.x=A.a2(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b8(w,new C.ck5(),o)
v=A.C(v,v.$ti.k("ak.E"))
s.at=v
if(v.length<9){v=A.C(v,o)
B.d.v(v,A.c0(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=B.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===B.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cH2(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.asJ(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b8(t,new C.ck6(),x.L)
o=A.C(o,o.$ti.k("ak.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)B.d.J(v,A.c0(7,0,!1,o))}if(A.iU(e.h(0,q)))o=A.ee(e.h(0,q))
else{o=A.ca(A.w(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bIG(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.asJ(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b8(t,new C.ck7(),x.L)
o=A.C(o,o.$ti.k("ak.E"))
s.y=o}if(A.iU(e.h(0,p)))o=A.ee(e.h(0,p))
else{o=A.ca(A.w(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bJZ(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.asJ(e,f)
break}},
cS6(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=A.a2(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",A.bq(w.at,!0,q))
o.n(0,"turnEmail",w.aDO())
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
p=A.U(q).k("N<1,ai<H>>")
q=A.C(new A.N(q,new C.ck9(),p),p.k("ak.E"))
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
p=A.U(q).k("N<1,ai<H>>")
q=A.C(new A.N(q,new C.cka(),p),p.k("ak.E"))
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
default:q=A.dO(o,q,p)
q.n(0,v,w.e)
q.n(0,s,w.w)
return q}},
aDO(){var w,v,u,t=this
if(t.gkr()){if(t.ax){w=t.d
w=w==null?null:w.d
if(w==null)w=""}else w="ngmy@system"
return w}w=t.x.h(0,"playerXEmail")
if(w==null){w=t.d
w=w==null?null:w.d}v=B.a.i(J.k(w==null?"":w).toLowerCase())
w=t.x.h(0,"playerOEmail")
if(w==null){w=t.d
w=w==null?null:w.e}u=B.a.i(J.k(w==null?"":w).toLowerCase())
return t.ax?v:u},
asJ(d,e){var w,v=this,u=B.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
v.r=J.z(d.h(0,"isDraw"),!0)
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
cH2(d,e){var w,v,u,t,s,r="playerXEmail"
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
bIG(d,e){var w,v,u,t,s
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
bJZ(d,e){var w,v,u,t,s,r,q
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
UB(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gkr())return s
w=B.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return B.a.i(J.k(s==null?u.aDO():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
c2G(){var w,v,u=this,t=J.e4(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=A.ir(8,new C.ck2(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
b_Q(d){var w=20+d.az(80),v=w+10+d.az(50),u=4+d.az(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bP(0,B.cf)},
d1e(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gkr())w=1
else{v=r.d
v=v==null?null:v.d
w=r.UB(q,v==null?"":v)?r.z:-1}if(!r.gkr()){v=r.d
v=v==null?null:v.d
v=!r.UB(q,v==null?"":v)}else v=!1
if(v)return!1
u=r.gkr()?r.z:w
if(!r.gkr()&&u!==r.z)return!1
t=J.t(r.y[d],e)
v=r.Q
if(v==null){if(t===r.z)v=!r.gkr()||t===1
else v=!1
if(v){r.Q=d
r.as=e}return!1}s=r.as
s.toString
if(d===v&&e===s){r.as=r.Q=null
return!1}if(Math.abs(d-v)===1&&Math.abs(e-s)===1&&t===0&&B.o.F(d+e,2)===1){J.aK(r.y[d],e,r.z)
J.aK(r.y[v],s,0)
r.as=r.Q=null
r.z=r.z===1?2:1
if(r.aag(2)){r.abR(1)
return!0}if(r.aag(1)){r.abR(2)
return!0}if(r.gkr()&&r.z===2){r.bEA(f)
if(r.aag(2)){r.abR(1)
return!0}if(r.aag(1)){r.abR(2)
return!0}}}return!1},
abR(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
t.e=!0
w=t.f=d===1
if(t.gkr()){if(w){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+s}else v="NGMY wins \u2014 your discs are gone"
v=t.w=v}else{v=t.d
if(w){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+s}t.a=w?1:0
t.c=v
return!0},
bEA(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=A.a([],x.B)
for(w=x.t,v=0;v<8;++v)for(u=0;u<8;++u){if(J.t(m.y[v],u)!==2)continue
for(t=[A.a([1,-1],w),A.a([1,1],w)],s=t.length,r=0;r<s;++r){q=t[r]
p=v+q[0]
o=u+q[1]
if(p>=0&&p<8&&o>=0&&o<8&&J.t(m.y[p],o)===0&&B.o.F(p+o,2)===1)l.push(A.a([v,u,p,o],w))}}w=l.length
if(w===0)return
n=l[d.az(w)]
J.aK(m.y[n[2]],n[3],2)
J.aK(m.y[n[0]],n[1],0)
m.z=1},
aag(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)for(t=J.aT(w[u]);t.C();)if(t.gR(t)===d)return!1
return!0},
d1g(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.qZ
if(!s.gkr()){w=s.d
w=w!=null&&!s.UB("tic_tac_go",w.d)}else w=!1
if(w)return D.qZ
if(s.gkr())v="X"
else{w=B.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===B.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.akr(v))return s.aVp(v,!0)
if(!B.d.q(s.at,""))return s.aVq()
s.ax=!s.ax
if(!s.gkr()){s.x.n(0,"turnEmail",s.aDO())
s.c=s.b_j()
return D.qZ}if(s.gkr()){t=s.cow(e)
if(t>=0){s.at[t]="O"
if(s.akr("O"))return s.aVp("O",!1)
if(!B.d.q(s.at,""))return s.aVq()
s.ax=!0}}s.c=s.gkr()?"Your turn \u2014 you are X":s.b_j()
return D.qZ},
b_j(){var w=this.d
if(w==null)return"Take your turn"
return this.UB("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aVp(d,e){var w,v,u=this
u.e=!0
u.f=e
u.r=!1
if(u.gkr()){if(e){w=u.d
w=w==null?null:w.b
w=(w==null?"You":w)+" wins with "+d+"!"}else w="NGMY wins with "+d+"!"
w=u.w=w}else{w=u.d
if(e){w=w==null?null:w.b
v=w==null?"You":w}else{w=w==null?null:w.c
v=w==null?"Opponent":w}w=u.w=v+" wins with "+d+"!"}u.c=w
u.a=e?1:0
return e?D.r_:D.Jh},
aVq(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.TG},
cow(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.akr("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.akr("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.dd2[u]
if(v[w].length===0)return w}return-1},
akr(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.dlh[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a4p(d){return B.d.cG(d,0,new C.ck8())},
cLC(d){this.ay.push(1+d.az(10))
if(this.a4p(this.ay)>21)return!0
return!1},
cLD(d){var w,v,u,t=this
while(t.a4p(t.ch)<17)t.ch.push(1+d.az(10))
t.CW=!0
w=t.a4p(t.ay)
v=t.a4p(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cRt(d,e){var w,v,u,t=this
if(t.e)return D.qZ
if(!t.gkr()){w=t.d
w=w!=null&&!t.UB("connect_four_pro",w.d)}else w=!1
if(w)return D.qZ
if(t.gkr())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.qZ
if(!t.ahx(d,w))return D.qZ
if(t.aa4(t.fx))return t.aVn(t.fx,!0)
if(t.aQU())return t.aVo()
w=t.fx===1?2:1
t.fx=w
if(t.gkr()&&w===2){u=t.cnU(e)
if(u>=0){t.ahx(u,2)
if(t.aa4(2))return t.aVn(2,!1)
if(t.aQU())return t.aVo()
t.fx=1}}t.c=t.gkr()?"Your turn \u2014 drop a red disc":t.bIF()
return D.qZ},
bIF(){var w=this.d
if(w==null)return"Drop a disc"
return this.UB("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
ahx(d,e){var w
for(w=5;w>=0;--w)if(J.t(this.fr[w],d)===0){J.aK(this.fr[w],d,e)
return!0}return!1},
aQU(){for(var w=0;w<7;++w)if(J.t(this.fr[0],w)===0)return!1
return!0},
aVn(d,e){var w,v,u,t=this
t.e=!0
t.f=e
t.r=!1
w=d===1?"red discs":"gold discs"
if(t.gkr()){if(e){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+" wins with "+w+"!"}else v="NGMY wins with "+w+"!"
v=t.w=v}else{v=t.d
if(e){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+" wins with "+w+"!"}t.c=v
t.a=e?1:0
return e?D.r_:D.Jh},
aVo(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.TG},
cnU(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.t(r.fr[0],w)!==0)continue
r.ahx(w,2)
v=r.aa4(2)
r.bbb(w)
if(v)return w}for(w=0;w<7;++w){if(J.t(r.fr[0],w)!==0)continue
r.ahx(w,1)
u=r.aa4(1)
r.bbb(w)
if(u)return w}t=A.a([],x.t)
for(w=0;w<7;++w)if(J.t(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.az(s)]},
bbb(d){var w
for(w=0;w<6;++w)if(J.t(this.fr[w],d)!==0){J.aK(this.fr[w],d,0)
return}},
aa4(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.t(this.fr[w],v)!==d)continue
if(this.bIH(w,v,d))return!0}return!1},
bIH(d,e,f){var w,v,u,t,s=new C.ck1(this,d,e,f)
for(w=x.t,w=[A.a([0,1],w),A.a([1,0],w),A.a([1,1],w),A.a([1,-1],w)],v=w.length,u=0;u<v;++u){t=w[u]
if(s.$2(t[0],t[1])+s.$2(-t[0],-t[1])-1>=4)return!0}return!1},
bet(d){var w=this
if(B.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.b_Q(d)}return w.a>=w.b}}
C.atC.prototype={
S(){return new C.aGu(null,null)},
cXm(d){return this.e.$1(d)}}
C.aGu.prototype={
Y(){var w,v=this
v.a4()
w=A.bl(null,D.bAK,null,1,null,v)
w.f2(0,!0)
v.d=w
v.a.d.aW(0,v.gb23())
v.azH()},
bz(d){var w
this.bJ(d)
w=this.a
if(d.c!==w.c){w.d.bP(0,B.cf)
this.azH()}},
azH(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.aiL(t,u)
C.aiL(t,u)
w.a.cXm(s)
w.a.toString
w.m(new C.eQL())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
t(){var w,v=this
v.a.d.a6(0,v.gb23())
w=v.d
w===$&&A.c()
w.t()
v.bA8()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.aiL(j,i),g=C.aiL(j,i),f=j.length,e=i.length,d=A.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&A.c()
u=new A.aN(1,1)
d.push(new A.wV(new A.d1(v,!1,A.q(l,l,B.f,l,l,new A.p(B.aQ,l,l,new A.be(u,u,u,u),A.a([new A.ab(0,B.G,B.aQ.j(0.6),B.J,6)],k),l,B.n),l,22,l,B.a0H,l,l,l,3),l),B.Ue,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new A.eo(v,l,l,B.cN,l,l,l,l,l,l,D.fxJ))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=B.c.j(0.4)
q=B.cE}else if(s===t){r=B.b4
q=B.U}else{r=B.ay
q=B.I}d.push(new A.eo(t,l,l,B.cN,l,l,l,l,l,l,new A.G(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&A.c()
d.push(new A.wV(new A.d1(k,!1,A.q(l,l,B.f,B.aQ,l,l,l,22,l,l,l,l,l,3),l),B.Ue,l,l))}p=f===0?0:B.i.V(h/f*100)
k=B.w.j(0.35)
v=A.m(12)
u=A.L(B.aT,B.r,1)
o=x.p
v=A.q(l,A.x(A.a([A.A(A.a([m.b22("Correct",""+h,B.bd),B.af,m.b22("Wrong / missed",""+(f-g),B.ay),B.b3,A.d(""+p+"% accuracy",l,l,l,l,l,l,D.fpi,l,l,l)],o),B.l,l,B.e,B.j,0,l,l),B.am,D.fSz],o),B.E,l,B.e,B.j,0,B.p),B.f,l,l,new A.p(k,l,u,v,l,l,B.n),l,l,l,l,B.bh,l,l,l)
u=A.E(A.ce(new A.ab9(l,A.cQ(d,l,l,l,l,l,l,l,l,l,l),l,l,l),B.t,l,B.y,l,l,l,l,B.ah),1)
k=m.a.d
g=A.l(l,l,B.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.w.j(0.35)
return A.x(A.a([v,B.ae,u,B.W,A.aM(l,B.Z,!0,l,!0,B.t,l,A.aO(),k,l,l,l,l,l,2,A.bz(l,new A.b6(4,A.m(12),B.a1),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new A.b6(4,A.m(12),D.b5v),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.y,!0,l,!0,l,!1,l,B.ak,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,B.ad,l,l,l,l,l,l,l,l,l,l,l,D.aWv,!0,B.a5,l,B.ao,l,l,l,l)],o),B.al,l,B.e,B.j,0,B.p)},
b22(d,e,f){var w=null,v=f.j(0.15),u=A.m(8)
return A.q(w,A.d(d+": "+e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.p(v,w,w,u,w,w,B.n),w,w,w,w,B.hg,w,w,w)}}
C.aOn.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
var z=a.updateTypes(["aB<~>()","~()","H(id,id)","~([y5?])","Q(ra)","ra()","H(rR,rR)","Q(rR)","H(rS,rS)","Qw(Z)","Q(id)","cK(af1)","a0s(Z)","a_z(Z)","afN(Z)","a7Q(Z)","Ot(Z)","aeE(Z,hr<ai<jq>>)","aeD(Z,H)","v(ra)","rR(a9<@,@>)","~(Ft,asH)","Ol(Z)","a9<n,@>(rR)","rS(a9<@,@>)","a9<n,@>(kG)","a9<n,@>(rS)","Q(rS)","a9<n,@>(lY)","lY(@)","a9<n,@>(is)","is(@)","id(@)","aB<~>(kG)","a9<n,@>(id)","~(H,H)","id(id)","WH(Z)","aB<Q>(ai<id>)","a0r(Z)","~(id)","a1c(Z)","WI(Z)","n(id)","Q(lY)","xG(bB<H,lY>)","ad8(Z,H)","H(is,is)","ad0(lY)","v(rY)","by(JI)","a_Y(Z)","~(d7{bumpWalletRevision:Q,cloudRequest:Q})","~(n,F,F,F)","F(V)","~(d7)","a0L(Z)","~(Ft)","n(n)","a1d(Z)"])
C.cAO.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.cAP(r,w,s.b,v,s.d)
t=s.e
r.b=A.df(t,u)
v.r=new C.cAL(r)
v.e=new C.cAM(r,w)
v.f=new C.cAN(r,w,t,u)},
$S:0}
C.cAP.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.ir(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=A.ac(r)
u=A.cr(r)
s=v
q=u
p=A.H4(s,q)
if(p==null)p=new A.jT(s,q==null?A.HV(s):q)
t=p
o.d.hA(t.a,t.b)
return}o.d.J(0,w)}else{o.e.a(null)
o.d.J(0,null)}},
$S:42}
C.cAL.prototype={
$0(){this.a.b.a1(0)
return $.HJ()},
$S:1650}
C.cAM.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.aas.$0()
this.a.b.a1(0)},
$S:0}
C.cAN.prototype={
$0(){var w,v=this,u=v.b,t=A.dw(0,0,u.gbgC(),0,0,0)
u.fX(0)
u=v.c
w=v.a
w.b=A.cy(new A.bd(u.a-t.a),new C.cAK(w,u,v.d))},
$S:0}
C.cAK.prototype={
$0(){var w=this.c
this.a.b=A.df(this.b,w)
w.$1(null)},
$S:0}
C.fcB.prototype={
$1(d){var w=this.a
w.m(new C.fcA(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.fcA.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hr(D.akB,this.b,null,null,v.$ti.k("hr<1>"))},
$S:0}
C.fcD.prototype={
$2(d,e){var w=this.a
w.m(new C.fcy(w,d,e))},
$S:55}
C.fcy.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hr(D.akB,null,this.b,this.c,v.$ti.k("hr<1>"))},
$S:0}
C.fcC.prototype={
$0(){var w=this.a
w.m(new C.fcz(w))},
$S:0}
C.fcz.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hr(B.yr,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fPP.prototype={
$1(d){return d.a===this.a&&B.a.i(d.b.toLowerCase())===this.b&&d.x===B.cu},
$S:15}
C.fPH.prototype={
$1(d){return d},
$S:14}
C.fw4.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return A.q(B.A,new A.D(new A.R(u,0,u,0),A.d("NGMY",w,1,B.eR,w,!1,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,B.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),B.f,w,w,B.aeB,w,v,w,w,w,w,w,v)},
$S:151}
C.fw1.prototype={
$3(d,e,f){return this.a.$0()},
$S:141}
C.fw2.prototype={
$2(d,e){var w,v=this,u=e.b
if(B.a.i(u==null?"":u).length!==0){u.toString
w=B.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return A.kE(w,B.A,v.d,new C.fw0(v.e),B.hh,v.c,!0,v.b,null,null,v.a)},
$S:1651}
C.fw0.prototype={
$3(d,e,f){return this.a.$0()},
$S:141}
C.fw3.prototype={
$3(d,e,f){return this.a.$0()},
$S:141}
C.dku.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.dkF.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dkX.prototype={
$1(d){return A.a2(d,x.N,x.z)},
$S:7}
C.dkY.prototype={
$1(d){return this.a.Kg()},
$S:11}
C.dkN.prototype={
$0(){var w=J.b8(this.b,new C.dkM(),x.P)
w=A.C(w,w.$ti.k("ak.E"))
this.a.f=w},
$S:0}
C.dkM.prototype={
$1(d){return A.a2(d,x.N,x.z)},
$S:7}
C.dkO.prototype={
$0(){var w=this.a,v=w.a.d.bb,u=A.U(v).k("N<1,a9<n,@>>")
v=A.C(new A.N(v,new C.dkL(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dkL.prototype={
$1(d){return A.a2(d,x.N,x.z)},
$S:7}
C.dkQ.prototype={
$0(){var w=this.a,v=w.a.d.bb,u=A.U(v).k("N<1,a9<n,@>>")
v=A.C(new A.N(v,new C.dkP(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dkP.prototype={
$1(d){return A.a2(d,x.N,x.z)},
$S:7}
C.dkI.prototype={
$0(){var w=0,v=A.j(x.c),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.cfp(t.a.c)?2:3
break
case 2:w=4
return A.b(C.arj(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.m(new C.dkG(t))
case 3:if(t.c!=null)t.m(new C.dkH(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:51}
C.dkG.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dkH.prototype={
$0(){return this.a.d++},
$S:0}
C.dkJ.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dkK.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dkA.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.isB(t.a.d.bb,J.k(J.t(u.b,"id")),"rejected")
t.a.bv()
w=2
return A.b(C.aiA(t.a.d.bb),$async$$0)
case 2:w=3
return A.b(t.Kg(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dkB.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a7(s)
C.igG(t.a.d.bb,J.k(r.h(s,"id")),t.a.c.c)
t.a.bv()
w=2
return A.b(C.aiA(t.a.d.bb),$async$$0)
case 2:w=3
return A.b(t.Kg(),$async$$0)
case 3:t.J4(B.d.dP(t.y,new C.dky(s),new C.dkz(t)),J.k(r.h(s,"id")))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dky.prototype={
$1(d){return d.a===J.t(this.a,"gameId")},
$S:z+4}
C.dkz.prototype={
$0(){return B.d.gH(this.a.y)},
$S:z+5}
C.dkC.prototype={
$1(d){return d.a===J.t(this.a,"gameId")},
$S:z+4}
C.dkD.prototype={
$0(){return B.d.gH(this.a.y)},
$S:z+5}
C.dkE.prototype={
$0(){return this.a.J4(this.b,J.k(J.t(this.c,"id")))},
$S:0}
C.dkx.prototype={
$0(){return this.a.c62(this.b)},
$S:0}
C.dkw.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.it4(u,w.b,new C.dkv(v,w))},
$S:0}
C.dkv.prototype={
$2(d,e){return this.a.aiV(this.b,d,e)},
$S:666}
C.dkW.prototype={
$2(d,e){if(d)return
this.a.aV1()},
$S:129}
C.dkU.prototype={
$2(d,e){var w=this.a
return new A.l9(C.b1s(w.a.c.a),new C.dkT(w,this.b,this.c),null,null,x.gH)},
$S:1653}
C.dkT.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=A.m(12)
v=A.m(12)
u=A.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return A.aH(!1,B.a3,!0,w,A.aP(!1,v,!0,new A.D(B.k3,A.bJ2(B.d1,A.X(B.hj,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dkS(this.a,d),t,t,t,t,t,t,t),B.f,this.b,0,t,t,t,t,t,B.aj)},
$S:1654}
C.dkS.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fM6(s.c.a,s.e).eB(new C.dkR())
w=2
return A.b(C.bGm(u.b,t.a.c.a),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dkR.prototype={
$1(d){},
$S:28}
C.dkV.prototype={
$0(){return this.a.a.c.d},
$S:81}
C.dYT.prototype={
$0(){var w=this.a
return A.M0(w.a.c.a,new C.dYS(w))},
$S:81}
C.dYS.prototype={
$0(){return this.a.a.c.d},
$S:81}
C.dYU.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&A.c()
u.bn=t.aj()
v.bv()
w.m(new C.dYR())},
$S:0}
C.dYR.prototype={
$0(){},
$S:0}
C.dYV.prototype={
$2(d,e){var w,v=this.a
if(!C.cfp(v.a.c)){if($.h93.q(0,B.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.h94(this.b,v.x,w)
return!1}C.arj(v.a.c.a)}if(A.M0(v.a.c.a,new C.dYQ(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aJi()
w=v.a
w.toString
w.hH(new A.d7(B.o.u(1000*Date.now()),v.a.c.a,d,B.kk,B.fv,e,null,null,B.cu,new A.V(Date.now(),0,!1)))
v.a.bv()
return!0},
$S:1655}
C.dYQ.prototype={
$0(){return this.a.a.c.d},
$S:81}
C.dYW.prototype={
$3$bonus(d,e,f){var w,v=null,u=B.o.u(1000*Date.now()),t=this.a,s=t.a
s.hH(new A.d7(u,s.c.a,d,B.h2,B.fv,e,v,v,B.cu,new A.V(Date.now(),0,!1)))
t.a.bv()
w=f>0?"+$"+B.i.ad(d,2)+" total (includes $3 bonus for +3!)":"+$"+B.i.ad(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.ve(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1656}
C.dko.prototype={
$0(){return this.a.a.c.d},
$S:81}
C.dkr.prototype={
$0(){return A.j1(this.a,null)},
$S:0}
C.dks.prototype={
$0(){return this.a.a.c.d},
$S:81}
C.dkt.prototype={
$1(d){var w=null,v=this.a,u=A.ft(w,w,v.e===d?B.bd:A.a_(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,w,w,w,w,w,w,w,w)
return A.E(new A.D(B.f6,A.io(A.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.dkq(v,d),u),w),1)},
$S:220}
C.dkq.prototype={
$0(){var w=this.a
return w.m(new C.dkp(w,this.b))},
$S:0}
C.dkp.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dmg.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dmj.prototype={
$1(d){this.a.coS()
return null},
$S:11}
C.dmk.prototype={
$1(d){return this.a.cF9()},
$S:11}
C.dml.prototype={
$1(d){this.a.a3t()
return null},
$S:11}
C.dmm.prototype={
$1(d){this.a.ak_()
return null},
$S:11}
C.dmn.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c8)return
w=v.Q
w===$&&A.c()
if(w<=0){v.m(new C.dmh(v))
w=v.as
if(w!=null)w.a1(0)
v.FF()
return}v.m(new C.dmi(v))},
$S:11}
C.dmh.prototype={
$0(){return this.a.Q=0},
$S:0}
C.dmi.prototype={
$0(){var w=this.a,v=w.Q
v===$&&A.c()
w.Q=v-1
return v},
$S:0}
C.dlw.prototype={
$0(){return this.a.bF=this.b},
$S:0}
C.dlx.prototype={
$0(){return this.a.bF=this.b},
$S:0}
C.dm_.prototype={
$1(d){return this.a.go.q(0,d)},
$S:33}
C.dm0.prototype={
$0(){},
$S:0}
C.dlM.prototype={
$0(){var w=this.b
w.c8=!0
w.cP="Waiting for both players\u2026"
w.cj="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.dlN.prototype={
$0(){var w=this.a
w.c8=!0
w.cP="Both players connected"
w.cj="Starting together in a moment\u2026"},
$S:0}
C.dlO.prototype={
$0(){var w=this.b
w.c8=!0
w.cP="Match starting together\u2026"
w.cj="Both players start in "+B.o.D(this.c,1,99)+"s"},
$S:0}
C.dlP.prototype={
$0(){this.b.c8=!1},
$S:0}
C.dlQ.prototype={
$0(){},
$S:0}
C.dkZ.prototype={
$0(){var w=this.a,v=w.x2,u=A.w(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.dlv.prototype={
$0(){var w=this.a
w.at=this.b
w.b85()},
$S:0}
C.dm1.prototype={
$0(){},
$S:0}
C.dma.prototype={
$0(){},
$S:0}
C.dlZ.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.dlY(w))},
$S:0}
C.dlY.prototype={
$0(){var w=this.a
w.y=!0
w.z=new A.V(Date.now(),0,!1)},
$S:0}
C.dlt.prototype={
$0(){var w=this.a;++w.a0
w.y=!1
w.z=null},
$S:0}
C.dlu.prototype={
$0(){},
$S:0}
C.dm5.prototype={
$1(d){return d==null},
$S:249}
C.dm6.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
B.d.cH(v.ch,w.d)},
$S:0}
C.dm7.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.dl_.prototype={
$1(d){return d==null},
$S:249}
C.dl0.prototype={
$0(){return this.a.bn++},
$S:0}
C.dl1.prototype={
$0(){},
$S:0}
C.dlF.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.dlG.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.J(0,t)
w=this.c
u.J(0,w)
if(v.ghO()&&D.nb.q(0,v.a.e)){u=v.id
u.J(0,t)
u.J(0,w);++v.fx}++v.k2
v.fy=A.a([],x.t)},
$S:0}
C.dlH.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.dlE(w))},
$S:12}
C.dlE.prototype={
$0(){var w=this.a
w.fy=A.a([],x.t)
w.k1=!1},
$S:0}
C.dlR.prototype={
$0(){return this.a.y1++},
$S:0}
C.dlS.prototype={
$0(){},
$S:0}
C.dlT.prototype={
$0(){return this.a.y2++},
$S:0}
C.dlU.prototype={
$0(){},
$S:0}
C.dlV.prototype={
$0(){return this.a.bb++},
$S:0}
C.dlW.prototype={
$0(){},
$S:0}
C.dm4.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.dlI.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dlJ.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.dlK.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dlL.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.dm8.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.dm9.prototype={
$0(){var w=this.a
w.ok.push(w.d.az(4))
w.p2=0},
$S:0}
C.dl2.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dl3.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.dl4.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dl5.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.dm2.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.dm3.prototype={
$0(){var w,v=this.a;++v.x2
v.aQG()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+A.w(Math.min(w+2,7))+" tiles"},
$S:0}
C.dlD.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.dlX.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dlB.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dlC.prototype={
$2(d,e){return d+e.length},
$S:216}
C.dmb.prototype={
$0(){return A.j1(this.a,null)},
$S:0}
C.dmc.prototype={
$0(){return this.a.a.c.d},
$S:81}
C.dmd.prototype={
$0(){return this.a.a.c.d},
$S:81}
C.dmf.prototype={
$1(d){var w=this.a,v=w.Pc(),u=v<=0?0:B.i.D(w.AI()/v,0,1),t=w.a.x,s=t*1.46
return new C.Ol(w.f?s:s*u,s,t,null)},
$S:z+22}
C.dme.prototype={
$1(d){return d.bV(0.85)},
$S:176}
C.dlA.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghO()&&D.nb.q(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return A.x(A.a([A.d(p,w,w,w,w,w,w,B.jd,B.K,w,w),B.am,A.E(A.as(new A.a5(r*v+u,r*t+s,A.ip(!0,w,w,B.y,new A.hG(v,6,6,1,r),new C.dlz(q,r),q.fr.length,w,B.dZ,B.ah,!1),w),w,w,w),1)],x.p),B.l,w,B.e,B.j,0,B.p)},
$S:155}
C.dlz.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.q(0,e),p=r.ghO()&&D.nb.q(0,r.a.e)&&q&&r.id.q(0,e),o=r.ghO()&&D.nb.q(0,r.a.e)&&q&&!p,n=B.d.q(r.fy,e)||q,m=p?D.ata:D.c7b,l=A.m(10),k=A.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.ata:D.at4
v=o?A.L(B.dn,B.r,2):s
u=A.a([new A.ab(0,B.G,A.a_(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.J,4)],x.V)
t=this.b*0.42
return A.aP(!1,l,!0,A.cT(s,A.as(n?A.X(D.cBQ[r.fr[e]],B.c,s,s,s,t):A.d("?",s,s,s,s,s,s,A.l(s,s,B.c,s,s,s,s,s,s,s,s,t,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,B.b_,new A.p(s,s,v,k,u,w,B.n),B.eG,s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dly(r,e),s,s,s,s,s,s,s)},
$S:186}
C.dly.prototype={
$0(){return this.a.coc(this.b)},
$S:0}
C.dli.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?A.a_(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.a_(89,B.bd.l()>>>16&255,B.bd.l()>>>8&255,B.bd.l()&255),r=A.m(10),q=A.m(10),p=A.m(10),o=A.L(A.a_(64,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
return A.aH(!1,B.a3,!0,r,A.aP(!1,q,!0,A.q(B.A,A.d(t?"":u,w,w,w,w,w,w,D.aVr,w,w,w),B.f,w,w,new A.p(w,w,o,p,w,w,B.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dlh(v,d),w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.aj)},
$S:669}
C.dlh.prototype={
$0(){return this.a.cEp(this.b)},
$S:0}
C.dlj.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=A.a_(46,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
return A.aH(!1,B.a3,!0,A.m(10),A.aP(!1,A.m(10),!0,A.q(B.A,A.d(u,w,w,w,w,w,w,D.aVr,w,w,w),B.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dlg(v,d),w,w,w,w,w,w,w),B.f,t,0,w,w,w,w,w,B.aj)},
$S:669}
C.dlg.prototype={
$0(){return this.a.cEo(this.b)},
$S:0}
C.dlk.prototype={
$1(d){return this.a.m(new C.dlf())},
$S:32}
C.dlf.prototype={
$0(){},
$S:0}
C.dll.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&A.c()
w=C.aiL(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.pu()
if(u.ghO()&&D.nb.q(0,u.a.e)){u.a1I()
u.ni(!0)}else{v=B.d.cG(u.cy,0,new C.dld())
t=u.dx
if(t>=v)u.uw("All 5 sentences perfect \u2014 full payout!")
else u.F5(t/v,t,v)}}else{if(u.ghO()&&D.nb.q(0,u.a.e))u.a1I()
u.m(new C.dle(u))}},
$S:0}
C.dld.prototype={
$2(d,e){return d+e.length},
$S:216}
C.dle.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bP(0,B.cf)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.dlm.prototype={
$1(d){var w=null,v=A.ft(w,w,A.a_(38,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,B.cq,w,w,w,w,w,w,w)
return new A.D(B.cy,new A.a5(1/0,w,A.io(A.d(d,w,w,w,w,w,w,W.aVk,w,w,w),new C.dlc(this.a,d),v),w),w)},
$S:145}
C.dlc.prototype={
$0(){return this.a.b7s(this.b)},
$S:0}
C.dln.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&A.c()
w=u*3+8
return A.x(A.a([A.d(s,v,v,v,v,v,v,B.pT,v,v,v),B.T,A.E(A.as(new A.a5(w,w,A.ip(!0,v,v,B.y,new A.hG(3,4,4,1,u),new C.dlb(t,u),9,v,B.dZ,B.ah,!1),v),v,v,v),1)],x.p),B.l,v,B.e,B.j,0,B.p)},
$S:155}
C.dlb.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.b5f(e),p=r===0
if(p)w=B.L
else w=q?B.bd:A.a_(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v=A.m(10)
s=p?t:new C.dl7(s,e)
u=A.m(10)
p=p?"":""+r
return A.aH(!1,B.a3,!0,v,A.aP(!1,u,!0,A.as(A.d(p,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),B.f,w,0,t,t,t,t,t,B.aj)},
$S:80}
C.dl7.prototype={
$0(){return this.a.cEn(this.b)},
$S:0}
C.dlo.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.dla(q,d)
p=A.m(16)
if(o)w=D.a5J[d]
else{w=D.a5J[d]
w=A.a_(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=A.m(16)
u=o?A.a_(B.i.V(127.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.a_(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
u=A.L(u,B.r,o?2:1)
t=x.V
if(o){s=D.a5J[d]
t=A.a([new A.ab(0,B.G,A.a_(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,16)],t)}else t=A.a([],t)
return A.aP(!1,p,!0,A.cT(r,r,r,r,B.b_,new A.p(w,r,u,v,t,r,B.n),S.Cd,r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1660}
C.dla.prototype={
$0(){return this.a.cEq(this.b)},
$S:0}
C.dlp.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&A.c()
q=A.d(q,t,t,t,t,t,t,B.pT,t,t,t)
w=A.d("Move "+r.aAn()+"/"+C.hfL(),t,t,t,t,t,t,B.EQ,t,t,t)
v=r.x2
u=s*3+12
return A.x(A.a([q,w,A.d("Round "+v+"/7 \xb7 "+A.w(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,A.l(t,t,A.a_(153,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.E(A.as(new A.a5(u,u,A.ip(!0,t,t,B.y,new A.hG(3,6,6,1,s),new C.dl9(r),9,t,B.dZ,B.ah,!1),t),t,t,t),1)],x.p),B.l,t,B.e,B.j,0,B.p)},
$S:155}
C.dl9.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=A.m(10),s=A.m(10),r=u?B.bd:D.bkF,q=u?B.es:D.buU
return A.aH(!1,B.a3,!0,w,A.aP(!1,t,!0,A.q(w,w,B.f,w,w,new A.p(r,w,A.L(q,B.r,u?2.5:1),s,w,w,B.n),w,w,w,w,w,w,w,w),w,!0,w,w,B.L,w,w,w,w,w,w,w,w,new C.dl6(v,e),w,w,w,w,B.L,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)},
$S:80}
C.dl6.prototype={
$0(){return this.a.cEl(this.b)},
$S:0}
C.dlq.prototype={
$0(){return this.a.b7s(this.b[this.c])},
$S:0}
C.dlr.prototype={
$0(){return this.a.m(new C.dl8())},
$S:0}
C.dl8.prototype={
$0(){},
$S:0}
C.dls.prototype={
$2(d,e){this.a.a0r(d,e)
return null},
$S:z+21}
C.dpR.prototype={
$1(d){return this.a.coH(this.b,d)},
$S:1661}
C.dpQ.prototype={
$0(){var w=this
return w.a.a.cXV(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cMQ.prototype={
$1(d){var w=this.a
w.a1Y()
w.uF()},
$S:8}
C.cMa.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cM0.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cM1.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cMk.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cMh.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cMi.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cMj.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cMc.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.cMb(w))},
$S:0}
C.cMb.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cM2.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ad(w.c)
v.dy=J.ad(w.d)
v.fr=J.ad(w.e)},
$S:0}
C.cMf.prototype={
$1(d){var w=this.a
return new C.WH(w.fx,new C.cMe(w),w.a.f.r,null)},
$S:z+37}
C.cMe.prototype={
$1(d){return this.bna(d)},
bna(d){var w=0,v=A.j(x.y),u,t=this,s,r
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cgn(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.m(new C.cMd(r,d))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+38}
C.cMd.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cMD.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cMx.prototype={
$1(d){this.a.uF()
return null},
$S:11}
C.cMA.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(B.o.aq(v.gaY0().a,1e6)<=0){w=v.id
if(w!=null)w.a1(0)
v.uF()
return}v.m(new C.cMz())},
$S:11}
C.cMz.prototype={
$0(){},
$S:0}
C.cMw.prototype={
$1(d){this.a.FN()
return null},
$S:11}
C.cMy.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cMv.prototype={
$2(d,e){var w,v=J.t(d,"at"),u=A.bh(J.k(v==null?"":v))
if(u==null)u=new A.V(A.fX(0,0),0,!1)
v=J.t(e,"at")
w=A.bh(J.k(v==null?"":v))
return u.aS(0,w==null?new A.V(A.fX(0,0),0,!1):w)},
$S:43}
C.cM7.prototype={
$2(d,e){var w,v=J.t(d,"at"),u=A.bh(J.k(v==null?"":v))
if(u==null)u=new A.V(A.fX(0,0),0,!1)
v=J.t(e,"at")
w=A.bh(J.k(v==null?"":v))
return u.aS(0,w==null?new A.V(A.fX(0,0),0,!1):w)},
$S:43}
C.cM8.prototype={
$0(){var w=this.a,v=w.f
B.d.a8(v)
B.d.v(v,this.b)
w.ax=!0},
$S:0}
C.cM9.prototype={
$0(){var w=this.a
if(w.c!=null)w.a2F(!0)},
$S:12}
C.cM5.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cM6.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
if(w.f.length!==0)w.UF(this.b)},
$S:8}
C.cMn.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=B.d.gd5(v).Q
v.toString
if(this.b)w.iq(v)
else w.ms(v,B.dK,B.kT)},
$S:8}
C.cMg.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cMo.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cMp.prototype={
$0(){var w=this.a
w.f.push(A.I(["role","user","text",this.b,"at",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.b8X()
w.r.bP(0,B.cf)
w.at=!0},
$S:0}
C.cMq.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cMr.prototype={
$0(){var w=this.a
w.f.push(A.I(["role","ai","text",this.b,"at",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.at=!1},
$S:0}
C.cMs.prototype={
$0(){var w,v=this.b,u=A.T(x.N,x.z)
J.aK(u,"role","ai")
J.aK(u,"text",this.c)
J.aK(u,"at",new A.V(Date.now(),0,!1).aa().ag())
w=this.a
if(J.cJ(w.b)){w=J.b8(w.b,v.gcnC(),x.P)
w=A.C(w,w.$ti.k("ak.E"))
J.aK(u,"phoneActions",w)}v.f.push(u)
v.b8X()},
$S:0}
C.cMt.prototype={
$0(){this.a.f.push(A.I(["role","ai","text",y.g,"at",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z))},
$S:0}
C.cMu.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cMl.prototype={
$1(d){return this.bnb(d)},
bnb(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
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
l=p.bT()
w=5
return A.b(C.arG(q,new C.rR("cal_"+1000*n,m,l,(o==null?p.bR(36e8):o).bT(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.asR()
case 4:k.c.L(x.q).f.T(A.b3(null,null,null,B.d0,null,B.t,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:419}
C.cMC.prototype={
$1(d){return this.bnc(d)},
bnc(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.L(x.q).f.T(A.b3(null,null,null,B.d0,null,B.t,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:419}
C.cMm.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=B.d.gd5(v).Q
v.toString
w.iq(v)},
$S:8}
C.cMP.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
if(v>0)w.act(v-1)},
$S:0}
C.cMI.prototype={
$0(){return A.j1(this.a,null)},
$S:0}
C.cML.prototype={
$1(d){var w=this.a
w.m(new C.cMF(w,d))
if(d===0)w.a2F(!0)},
$S:32}
C.cMF.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cMJ.prototype={
$2$size(d,e){return C.hdP(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:1662}
C.cMK.prototype={
$0(){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.hri(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return A.b(H.asv(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cMG(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return A.b(C.arE(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return A.b(p.uF(),$async$$0)
case 15:p.m(new C.cMH(p))
p.act(0)
case 14:u=!1
w=1
break
case 11:w=16
return A.b(p.uF(),$async$$0)
case 16:case 9:case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:61}
C.cMG.prototype={
$2(d,e){return this.bnd(d,e)},
bnd(d,e){var w=0,v=A.j(x.y),u,t=this,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=A.a3n(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$2,v)},
$S:123}
C.cMH.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cMN.prototype={
$2(d,e){return B.af},
$S:37}
C.cMM.prototype={
$2(d,e){var w=null,v=this.a,u=A.d((v.a.c.w?D.a5Q:D.a57)[e],w,w,w,w,w,w,B.pW,w,w,w),t=A.a_(31,B.aN.l()>>>16&255,B.aN.l()>>>8&255,B.aN.l()&255),s=A.a_(89,B.aN.l()>>>16&255,B.aN.l()>>>8&255,B.aN.l()&255)
v=v.at?w:new C.cME(v,e)
return A.n3(w,t,u,w,v,w,w,new A.ay(s,1,B.r,-1),w)},
$S:512}
C.cME.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a5Q:D.a57
w.r.sb1(0,v[this.b])
w.nh()
return null},
$S:0}
C.cMO.prototype={
$1(d){var w=this.a
return w.at?null:w.nh()},
$S:2}
C.cM3.prototype={
$0(){return this.a.act(0)},
$S:0}
C.cMB.prototype={
$0(){return this.a.act(this.b)},
$S:0}
C.cM4.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=A.q(v,D.c0N,B.f,v,v,new A.p(v,v,v,v,v,new A.a8(B.a7,B.aa,B.x,A.a([A.a_(51,B.aN.l()>>>16&255,B.aN.l()>>>8&255,B.aN.l()&255),w.b],x.O),v,v),B.a6),v,72,v,v,v,v,v,72)
t=w.c
s=A.d("Start a conversation",v,v,v,v,v,v,A.l(v,v,t?B.c:B.as,v,v,v,v,v,v,v,v,16,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.as(new A.D(B.a08,A.x(A.a([u,B.ae,s,B.am,A.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,A.l(v,v,t?B.aD:B.b6,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.K,v,v)],x.p),B.l,v,B.e,B.j,0,B.p),v),v,v,v)}if(e<s)return u.bJD(t[e],w.c)
return u.aRj(A.I(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:41}
C.c3z.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=B.i.M(d)
return new A.V(A.fX(w>1e11?w:w*1000,0),0,!0).bT()}v=A.bh(J.k(d))
return v==null?null:v.bT()},
$S:304}
C.c3y.prototype={
$1(d){A.aJ(d)
return(d==null?0:d)/100},
$S:526}
C.c3B.prototype={
$1(d){var w
if(d==null)w=null
else{w=A.bh(J.k(d))
w=w==null?null:w.bT()}return w},
$S:304}
C.c3A.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null
if(!x.f.b(d))return m
w=A.a2(d,x.N,x.z)
try{v=J.t(w,"id")
v=J.k(v==null?"":v)
u=J.t(w,"userEmail")
u=J.k(u==null?"":u)
t=A.aJ(J.t(w,"amount"))
if(t==null)t=0
s=J.t(w,"type")
s=A.a5L(B.a6E,J.k(s==null?"reimbursement":s))
r=J.t(w,"method")
r=A.a5L(B.a55,J.k(r==null?"system":r))
q=A.aV(J.t(w,"sourceDetails"))
p=J.t(w,"status")
p=A.a5L(B.Ir,J.k(p==null?"approved":p))
o=this.a.$1(J.t(w,"timestamp"))
if(o==null)o=new A.V(Date.now(),0,!1)
return new A.d7(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:605}
C.dGm.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dGn.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dGd.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bq(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dGb.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.a
w=2
return A.b(o.Bl(),$async$$0)
case 2:t=o.d
t===$&&A.c()
s=o.e
s===$&&A.c()
r=o.a.c
q=o.f
q===$&&A.c()
w=3
return A.b(C.h84(t,s,r,q),$async$$0)
case 3:p=e
w=4
return A.b(A.px(o.a.c,!1),$async$$0)
case 4:o.lg(p)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dGl.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.aaW(),$async$$0)
case 3:q=e
if(q==null){r.lg("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return A.b(A.a6(s,!1).ce(A.ec(new C.dGk(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return A.b(A.px(r.a.c,!1),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dGk.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&A.c()
return new C.a0r(w.b,w.a,u,v,null)},
$S:z+39}
C.dGa.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.hX4(q)?3:4
break
case 3:w=5
return A.b(t.a.Fk(B.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return A.b(C.b_1(q,s.a.c),$async$$0)
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
case 9:s.lg(C.c3D(s.a.c))
w=1
break
case 10:s.lg("That code didn't match anything on your account. Double-check it and try again.")
w=1
break
case 11:s.lg(y.B)
w=1
break
case 12:q=r.b
q.toString
w=14
return A.b(s.Az(q,!0,!0),$async$$0)
case 14:w=1
break
case 13:q=r.b
q.toString
w=15
return A.b(s.aSD(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dG9.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=A.bq(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dGc.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.aep(),$async$$0)
case 3:q=e
if(q==null||B.a.i(q).length===0){w=1
break}s=C.ho3(q)
if(s==null){r.lg("Could not read that backup file.")
w=1
break}if(!C.c3C(s,r.a.c,null)){r.lg(C.c3D(r.a.c))
w=1
break}w=4
return A.b(r.bLW(s),$async$$0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dGj.prototype={
$1(d){var w=null,v=new A.au(B.ax,$.ax()),u=A.P(d).ax.a===B.H,t=u?B.iI:B.c,s=x.p,r=A.x(A.a([A.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,A.l(w,w,u?B.ab:B.an,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),B.aB,A.aM(w,B.Z,!0,w,!0,B.t,w,A.aO(),v,w,w,w,w,w,2,A.bz(w,new A.b6(4,A.m(14),B.dv),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),B.y,!0,w,!0,w,!1,w,B.ak,w,w,w,w,w,B.e5,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.K,w,B.ao,w,w,w,w)],s),B.E,w,B.e,B.P,0,B.p)
return A.eg(A.a([A.bO(!1,B.dt,w,w,!0,w,w,w,new C.dGh(d),w,w),A.bJ(D.fGL,w,new C.dGi(d,v),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.fVO,w)},
$S:18}
C.dGh.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dGi.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a6(this.a,!1).O(w)
return null},
$S:0}
C.dGe.prototype={
$1(d){return D.hyQ},
$S:z+12}
C.dGf.prototype={
$0(){return this.a.Fl(B.a.i(this.b))},
$S:1}
C.dGg.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(C.b_1(t.b,r.a.c),$async$$0)
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
return A.b(r.Az(s,!0,!0),$async$$0)
case 11:w=1
break
case 7:r.lg(C.c3D(r.a.c))
w=1
break
case 8:r.lg("Could not read that QR code for your account.")
w=1
break
case 9:r.lg(y.B)
w=1
break
case 10:s=q.b
s.toString
w=12
return A.b(r.aSD(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dGo.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dGs.prototype={
$1(d){this.a.RE()
return null},
$S:11}
C.dGp.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dGq.prototype={
$0(){var w=null,v=this.a
A.fF(new A.fx(v.gayq()))
this.b.L(x.q).f.T(A.b3(w,w,w,w,w,B.t,w,A.d("Code "+v.gayq()+" copied",w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dGr.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dGt.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!(B.a.a_(s,"NGMYSNAP1|")||B.a.a_(s,"NGMYLOCALSYNC1|")||B.a.a_(s,"NGMYLOCALLIVE1|")||B.a.a_(s,"NGMYLOCALDEP1|")))continue
r.e=!0
A.a6(this.b,!1).O(s)
return}},
$S:191}
C.fAF.prototype={
$1(d){return D.hve},
$S:z+13}
C.fBS.prototype={
$1(d){return new C.afN(this.a,this.b,this.c,null)},
$S:z+14}
C.f66.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.f67.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dfm.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fW()},
$S:8}
C.dfj.prototype={
$2(d,e){return e.amg(e.a.toUpperCase())},
$S:1663}
C.dfk.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=B.a.i(w.d.a.a)
A.a6(v,!1).O(w)
return null},
$S:2}
C.dfl.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.c4k.prototype={
$1(d){var w=J.t(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!B.d.aV(D.du6,B.a.gke(v))},
$S:4}
C.fM0.prototype={
$1(d){return d.a===this.a},
$S:1664}
C.fM1.prototype={
$0(){return B.d.gH(B.Dx)},
$S:1665}
C.dMQ.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.m(new C.dMP(v))
w=v.r
w===$&&A.c()
if(w<=0)v.b7Y("Time's up")},
$S:11}
C.dMP.prototype={
$0(){var w=this.a,v=w.r
v===$&&A.c()
w.r=v-1
return v},
$S:0}
C.dMH.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dMM.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.m(new C.dMJ(w,d,e))},
$S:217}
C.dMJ.prototype={
$0(){var w=this.a,v=this.c
w.e=B.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dMN.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.dMI(w))
w.cyA(!0)},
$S:0}
C.dMI.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dMO.prototype={
$1(d){this.a.b7Y(d)
return null},
$S:2}
C.dMK.prototype={
$0(){return A.j1(this.a,null)},
$S:0}
C.dML.prototype={
$0(){return this.a.a.c.d},
$S:81}
C.ccy.prototype={
$1(d){return D.dPW},
$S:z+15}
C.ccx.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fCJ.prototype={
$5(d,e,f,g,h){var w,v=null,u=J.a7(d),t=A.aJ(u.h(d,e)),s=t==null?v:B.i.M(t)
if(s==null)s=0
if(s<=0)return v
t=u.h(d,g)
if(J.k(t==null?"":t)!==h){u.n(d,g,h)
u.n(d,f,0)}t=A.aJ(u.h(d,f))
w=t==null?v:B.i.M(t)
if(w==null)w=0
if(w>=s)return v
u.n(d,f,w+1)
u=A.aJ(u.h(d,"outcome"))
return u==null?v:B.i.M(u)},
$S:1666}
C.fCK.prototype={
$2(d,e){var w=A.aJ(J.t(d,e))
w=w==null?null:B.i.M(w)
return w==null?0:w},
$S:576}
C.fCL.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:216}
C.fT5.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.hzK(w,v):C.he9(w,v)
if(u===3)++w.f
C.ahh(w,this.c,u)
return u},
$S:1667}
C.fT7.prototype={
$0(){return C.hzK(this.a,this.b)},
$S:87}
C.fT6.prototype={
$0(){return C.he9(this.a,this.b)},
$S:87}
C.dFZ.prototype={
$0(){var w=this.a
if(w.a.c)w.m(new C.dFY(w))},
$S:0}
C.dFY.prototype={
$0(){this.a.r=1+B.o.F(A.FN(new A.V(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dG_.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&A.c()
u=u.x
u===$&&A.c()
w=B.i.bh(u*10)
if(w!==v.w)v.m(new C.dFX(v,w))}},
$S:0}
C.dFX.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ceZ.prototype={
$3(d,e,f){var w=null
return A.E(A.x(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,B.I,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.bG,A.ev(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.dE)],x.p),B.l,w,B.e,B.j,0,B.p),1)},
$S:1668}
C.ceY.prototype={
$3(d,e,f){var w=null
return A.d("$"+B.i.ad(e,2),w,w,w,w,w,w,B.ne,w,w,w)},
$S:369}
C.cfq.prototype={
$1(d){return new C.Ot(this.a,this.b,!1,null,null)},
$S:z+16}
C.e5t.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=A.m(e?0:30)
e=e?g:A.L(B.b8.j(0.5),B.r,1)
w=f.a.e?g:A.a([new A.ab(2,B.G,B.b8.j(0.35),B.J,36),new A.ab(0,B.G,B.bE.j(0.175),B.J,24)],x.V)
v=A.m(f.a.e?0:30)
u=x.O
t=A.ap(g,A.q(g,g,B.f,g,g,new A.p(g,g,g,g,g,new A.bY(B.A,0.5,B.x,g,0,A.a([B.b9.j(0.22),B.L],u),g,g),B.a6),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=A.ap(-50,A.q(g,g,B.f,g,g,new A.p(g,g,g,g,g,new A.bY(B.A,0.5,B.x,g,0,A.a([B.bE.j(0.18),B.L],u),g,g),B.a6),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?B.j:B.P
p=x.p
o=A.a([],p)
if(f.a.e)o.push(B.T)
n=x.V
o.push(A.q(g,D.bWZ,B.f,g,g,new A.p(g,g,A.L(B.aQ.j(0.8),B.r,2.5),g,A.a([new A.ab(0,B.G,B.b8.j(0.55),B.cC,18)],n),E.v5,B.a6),g,88,g,g,g,g,g,88))
o.push(B.aO)
o.push(A.of(B.jT,D.fTj,new C.e5p()))
o.push(B.T)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(A.d(m,g,g,g,g,g,g,A.l(g,g,B.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,B.cE,g,1.45,!0,g,g,g,g,g,g,g,g),B.K,g,g))
m=this.b
if(m.length!==0){l=B.c0.j(0.12)
k=A.m(18)
j=A.L(B.c0.j(0.45),B.r,1)
i=A.a([A.A(A.a([A.X(D.bR0,B.c0.j(0.95),g,g,g,20),B.af,A.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,A.l(g,g,B.c0.j(0.95),g,g,g,g,g,g,g,g,13,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),B.l,g,B.e,B.j,0,g,g),B.W,A.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,A.l(g,g,B.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),B.W],p)
B.d.v(i,new A.N(m,new C.e5q(),A.U(m).k("N<1,v>")))
B.d.v(o,A.a([B.aO,A.q(g,A.x(i,B.E,g,B.e,B.j,0,B.p),B.f,g,g,new A.p(l,g,j,k,g,g,B.n),g,g,g,g,B.bI,g,g,1/0)],p))}o.push(B.bz)
m=B.w.j(0.35)
l=A.m(18)
k=A.L(B.b8.j(0.35),B.r,1)
o.push(A.q(g,A.x(A.a([f.aze(B.hz,"Unlimited games with an active plan",B.b9),B.T,f.aze(B.k9,"Weekday check-ins grow your balance",B.b8),B.T,f.aze(B.n0,"Compete, bet, and earn points",B.aQ)],p),B.l,g,B.e,B.j,0,B.p),B.f,g,g,new A.p(m,g,k,l,g,g,B.n),g,g,g,g,B.bI,g,g,1/0))
o.push(B.dc)
o.push(new A.a5(1/0,g,new A.bN(new A.p(g,g,g,A.m(16),A.a([new A.ab(0,B.G,B.bE.j(0.45),B.cC,16)],n),E.v5,B.n),B.bj,A.dh(D.c_r,D.fOH,new C.e5r(f,a0),A.bp(B.L,g,g,g,B.c,B.Ko,g,B.L,new A.b9(A.m(16),B.a1),g,g,g)),g),g))
o.push(B.T)
n=f.a.e?"Back":"Maybe later"
o.push(A.bO(!1,A.d(n,g,g,g,g,g,g,A.l(g,g,B.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,B.U,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,g,new C.e5s(f,a0),g,g))
if(f.a.e)o.push(B.b3)
h=A.q(g,A.bw(v,new A.an(B.a0,g,B.ac,B.t,A.a([t,u,new A.D(new A.R(22,r,22,q),A.x(o,B.l,g,B.e,s,0,B.p),g)],p),g),B.aq),B.f,g,g,new A.p(g,g,e,d,w,D.ca_,B.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return A.eP(g,B.L,h,g,g,g,Ah.a0D,B.db,g,g,g)},
$S:670}
C.e5p.prototype={
$1(d){return D.c8Y.aK(0,d)},
$S:71}
C.e5q.prototype={
$1(d){var w=null
return new A.D(B.eO,A.A(A.a([A.X(A1.a2D,B.c0.j(0.85),w,w,w,14),B.af,A.E(A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.l,w,B.e,B.j,0,w,w),w)},
$S:145}
C.e5r.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{A.a6(this.b,!1).O(null)
w.a.c.$0()}},
$S:0}
C.e5s.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else A.a6(this.b,!1).O(null)},
$S:0}
C.fOn.prototype={
$1(d){if(d.gmY())this.a.a=d
return d.gmY()},
$S:751}
C.fOa.prototype={
$1(d){$.aW.x1$.push(new C.fO9(this.a))},
$S:8}
C.fO9.prototype={
$1(d){return this.a.$0()},
$S:8}
C.fyZ.prototype={
$1(d){return C.hzR(this.a,this.b+1)},
$S:8}
C.fPK.prototype={
$2(d,e){var w=A.aF(d,B.c1,x.w).w.a
return new A.a5(w.a,w.b,A.c4(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:160}
C.cfE.prototype={
$1(d){return d.r===this.a},
$S:256}
C.cfF.prototype={
$1(d){var w=$.aT3(),v=w.a
w.sp(0,v+1)
return v},
$S:1670}
C.cfG.prototype={
$1(d){},
$S:28}
C.cfD.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:256}
C.cfC.prototype={
$1(d){return d.f.ca(this.a)},
$S:256}
C.fvI.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:60}
C.h0T.prototype={
$1(d){return C.a8u(this.a)},
$S:106}
C.h0U.prototype={
$1(d){var w=$.aT3()
w.sp(0,w.a+1)},
$S:29}
C.h0V.prototype={
$1(d){},
$S:28}
C.h0W.prototype={
$1(d){return new A.k4($.aT3(),new C.h0S(this.a,this.b),null,null,x.am)},
$S:1671}
C.h0S.prototype={
$3(d,e,f){var w=this.b
return new A.l9(C.arp(this.a,!1),new C.h0R(w),w,null,x.gv)},
$S:1672}
C.h0R.prototype={
$2(d,e){var w=e.b
return new C.aeE(w==null?this.a:w,null)},
$S:z+17}
C.e5w.prototype={
$1(d){return d.c},
$S:256}
C.e5x.prototype={
$1(d){return d.gbjK()},
$S:1673}
C.e5y.prototype={
$2(d,e){return d+e},
$S:79}
C.e5z.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e5B.prototype={
$2(d,e){return B.T},
$S:37}
C.e5A.prototype={
$2(d,e){return new C.aeD(J.t(this.a.c,e),null)},
$S:z+18}
C.e5v.prototype={
$1(d){return d==null?"\u2026":C.bCN(d)},
$S:1674}
C.h0Z.prototype={
$3(d,e,f){var w=this
return A.r3(new C.aCf(w.a,w.b,w.c,w.d,new C.h0X(d,w.e),new C.h0Y(d,w.f),null))},
$C:"$3",
$R:3,
$S:86}
C.h0X.prototype={
$0(){A.a6(this.a,!1).O(null)
C.hDc(this.b)},
$S:0}
C.h0Y.prototype={
$0(){A.a6(this.a,!1).O(null)
C.hDc(this.b)},
$S:0}
C.dmp.prototype={
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
B.d.v(w,new A.N(t,new C.dmo(),A.U(t).k("N<1,v>")))}t=h.d
t===$&&A.c()
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,A.aF(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?A.a([B.bd,B.er,B.ea],r):A.a([B.ay,B.et,B.el],r)
p=A.m(26)
o=A.L(B.c.j(0.4),B.r,2)
n=x.V
m=A.a([new A.ab(6,B.G,(h.a.c?B.dL:B.dQ).j(0.5),B.J,36)],n)
l=A.a([],g)
if(h.a.c){k=A.dr()
j=k.a
j.$flags&2&&A.aj(j)
j[11]=0.001
k.kn(-0.35)
r=A.a([Z.aiM,B.ub],r)
l.push(new A.a5(i,100,new A.an(B.A,i,B.ac,B.f,A.a([A.fz(B.A,A.q(i,D.bdV,B.f,i,i,new A.p(i,i,i,i,A.a([new A.ab(4,B.G,B.d1.j(0.6),B.J,24),new A.ab(0,B.G,B.w.j(0.3),B.dp,12)],n),new A.bY(B.A,0.5,B.x,i,0,r,i,i),B.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.c2S)
l.push(B.aB)
l.push(A.d(h.a.d,i,i,i,i,i,i,B.KT,B.K,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=A.m(18)
k=A.L(B.er,B.r,4)
B.d.v(l,A.a([B.aB,D.fIu,B.T,A.q(i,A.d(r,i,i,i,i,i,i,D.fys,B.K,i,i),B.f,i,i,new A.p(B.c,i,k,n,i,i,B.n),i,i,i,i,B.NZ,i,i,1/0)],g))}B.d.v(l,A.a([B.ae,A.d(h.a.e,i,i,i,i,i,i,D.fBt,B.K,i,i)],g))
l.push(B.e3)
r=A.E(A.dU(D.fG_,h.a.r,A.di(i,i,i,i,i,i,i,i,i,B.c,i,i,B.cq,i,i,D.b5a,i,i,i,i)),1)
h=h.a
n=h.w
l.push(A.A(A.a([r,B.au,A.E(A.bJ(F.aWS,i,n,A.bp(B.c,i,i,i,h.c?B.er:B.et,i,B.cq,i,i,i,i,i)),1)],g),B.l,i,B.e,B.j,0,i,i))
w.push(A.e1(B.A,A.q(i,A.x(l,B.l,i,B.e,B.P,0,B.p),B.f,i,i,new A.p(i,i,o,p,m,new A.a8(B.aA,B.aF,B.x,q,i,i),B.n),i,i,i,B.ad,B.amQ,i,i,s),1+t*0.02,i,i))
return new A.an(B.A,i,B.ac,B.f,w,i)},
$S:119}
C.dmo.prototype={
$1(d){var w=null,v=d.a,u=d.b
return A.ap(w,A.d3(A.eG(B.A,d.d,A.X(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.chj.prototype={
$2(d,e){var w=null,v=this.a,u=C.hWu(A.M0(v.c,v.d))
return A.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1675}
C.chi.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:60}
C.c4R.prototype={
$0(){},
$S:0}
C.fuG.prototype={
$1(d){return B.o.u(d)},
$S:76}
C.dYZ.prototype={
$0(){return this.a.y=!0},
$S:0}
C.dZ_.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.dZ0.prototype={
$0(){var w=this.a
return w.w=D.Sz[w.d.az(5)]},
$S:0}
C.dZ1.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.dZ2.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.dZ3.prototype={
$0(){var w=this.a
return w.m(new C.dYY(w))},
$S:0}
C.dYY.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dZ4.prototype={
$0(){var w=this.a
return w.m(new C.dYX(w))},
$S:0}
C.dYX.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dZ7.prototype={
$0(){return A.j1(this.a,null)},
$S:0}
C.dZ8.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&B.a.i(t.e.a.a).length===0?B.bd:A.a_(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),r=A.m(10)
t=t.y?u:new C.dZ6(t,d)
w=A.m(10)
v=B.i.ad(d,0)
return A.E(new A.D(B.jq,A.aH(!1,B.a3,!0,r,A.aP(!1,w,!0,new A.a5(u,38,A.as(A.d("$"+v,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),B.f,s,0,u,u,u,u,u,B.aj),u),1)},
$S:1676}
C.dZ6.prototype={
$0(){var w=this.a
return w.m(new C.dZ5(w,this.b))},
$S:0}
C.dZ5.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bP(0,B.cf)},
$S:0}
C.e5H.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+B.cT.gcu().aN(this.c)},
$S:0}
C.e5I.prototype={
$0(){return A.j1(this.a,null)},
$S:0}
C.e5D.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=A.m(14),s=u?B.c.j(0.1):B.L,r=A.L(u?D.eY.j(0.5):B.L,B.r,1),q=A.X(e,u?D.eY:B.aD,w,w,w,20)
return A.E(A.az(w,A.cT(w,A.A(A.a([q,B.bo,A.d(f,w,w,w,w,w,w,A.l(w,w,u?B.c:B.aD,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.ba,B.j,0,w,w),w,w,B.b_,new A.p(s,w,r,t,w,w,B.n),B.a3,w,46,w,w,w,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e5F(v,d),w,w,w,w,w,w,!1,B.a4),1)},
$S:1677}
C.e5F.prototype={
$0(){var w=this.a
return w.m(new C.e5E(w,this.b))},
$S:0}
C.e5E.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5G.prototype={
$0(){var w=this.a,v=w.d===B.l1?"Cash App tag":"Bitcoin address"
return w.Jy(this.b,v)},
$S:0}
C.e5C.prototype={
$0(){var w=this.a
return w.Jy(w.gatK(),"Code")},
$S:0}
C.cg9.prototype={
$1(d){return C.hSF(A.a2(d,x.N,x.z))},
$S:z+20}
C.cga.prototype={
$2(d,e){return d.c.aS(0,e.c)},
$S:z+6}
C.cg6.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.cg7.prototype={
$2(d,e){return d.c.aS(0,e.c)},
$S:z+6}
C.cg8.prototype={
$1(d){return d.aj()},
$S:z+23}
C.cgb.prototype={
$1(d){var w=d.c
return!w.d3(this.a.bR(-36e8))&&!w.ca(this.b)},
$S:z+7}
C.c7Z.prototype={
$1(d){return C.hSG(A.a2(d,x.N,x.z))},
$S:z+24}
C.c8_.prototype={
$2(d,e){return e.b.aS(0,d.b)},
$S:z+8}
C.c7X.prototype={
$1(d){return d.aj()},
$S:z+26}
C.c7Y.prototype={
$2(d,e){return e.b.aS(0,d.b)},
$S:z+8}
C.c81.prototype={
$1(d){var w=d.b
return!w.d3(this.a)&&!w.ca(this.b)},
$S:z+27}
C.cgi.prototype={
$1(d){return d.aj()},
$S:z+28}
C.cgh.prototype={
$1(d){return C.hqn(A.a2(x.f.a(d),x.N,x.z))},
$S:z+29}
C.cgg.prototype={
$1(d){return d.aj()},
$S:z+30}
C.cgf.prototype={
$1(d){return C.hW7(A.a2(x.f.a(d),x.N,x.z))},
$S:z+31}
C.cgk.prototype={
$1(d){return C.hW6(A.a2(x.f.a(d),x.N,x.z))},
$S:z+32}
C.cgl.prototype={
$2(d,e){return B.o.aS(d.f,e.f)},
$S:z+2}
C.cgm.prototype={
$1(d){return d.aj()},
$S:z+34}
C.e9M.prototype={
$1(d){return d.bf8(A.bq(d.e,!0,x.u))},
$S:z+36}
C.e9N.prototype={
$2(d,e){return B.o.aS(d.f,e.f)},
$S:z+2}
C.e9G.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e9H.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e9p.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.J(w,this.b)},
$S:0}
C.e9q.prototype={
$1(d){return new C.Qw(this.a,null)},
$S:z+9}
C.e9r.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=B.d.bj(t,new C.e9o(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){B.d.cH(u.d,w)
u.JI()}},
$S:0}
C.e9o.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.e9D.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(A.I(["role","admin","text",this.b],w,w))},
$S:0}
C.e9E.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(A.I(["role","ai","text",v],t,t))}else{v=t.d
v===$&&A.c()
t.d=C.imA(v,w[0],w[3])
t.JI()
t=w[2]
if(t==null)t="Created "+J.ad(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(A.I(["role","ai","text",t],w,w))}},
$S:0}
C.e9F.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=B.d.gd5(v).Q
v.toString
w.iq(v)}},
$S:8}
C.e9x.prototype={
$1(d){return new C.Qw(this.a,null)},
$S:z+9}
C.e9y.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.e9w.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cH(w,this.b)},
$S:0}
C.e9C.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&A.c()
v=B.d.cH(w,s)
B.d.c9(t.d,u.a,v)
t.JI()},
$S:0}
C.e9B.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
return new C.a1d(u[w],new C.e9A(v,w),null)},
$S:z+59}
C.e9A.prototype={
$1(d){var w=this.a
return w.m(new C.e9z(w,this.b,d))},
$S:z+40}
C.e9z.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.e9t.prototype={
$0(){var w=this.a
return w.m(new C.e9s(w))},
$S:0}
C.e9s.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.e9u.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?B.cx:B.aM
return new A.D(B.eO,A.d(t+": "+A.w(s),w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?B.a8:B.cE,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:117}
C.e9v.prototype={
$1(d){return this.a.a2k()},
$S:2}
C.e9L.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.u6:B.c
u=A.m(16)
t=A.m(16)
s=l?B.aM:B.bl
r=w.d
q=A.b0(r).j(0.15)
p=A.m(12)
q=A.q(n,A.X(B.apG,l?B.bN:B.an,n,n,n,20),B.f,n,n,new A.p(q,n,n,p,n,n,B.n),n,n,n,n,B.bV,n,n,n)
p=A.b0(r).j(0.12)
o=A.m(8)
o=A.q(n,A.X(w.c,A.b0(r),n,n,n,18),B.f,n,n,new A.p(p,n,n,o,n,n,B.n),n,n,n,n,B.hL,n,n,n)
r=A.A(A.a([o,B.au,A.E(A.d(w.b,n,n,n,n,n,n,A.l(n,n,l?B.aS:B.a_,n,n,n,n,n,n,n,n,n,n,n,B.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),B.l,n,B.e,B.j,0,n,n)
p=w.e.length
return new A.D(B.d9,A.aH(!1,B.a3,!0,u,A.dG(!1,n,n,n,!0,n,n,n,!0,n,n,new H.awb(q,e,!0,n),n,n,n,n,new C.e9I(m,e),!1,n,n,new A.b9(t,new A.ay(s,1,B.r,-1)),n,n,A.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,A.l(n,n,l?B.bN:B.an,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,A.CE(n,n,n,new C.e9J(),B.J,new C.e9K(m,e),B.cn,n,x.N),n),B.f,v,0,n,n,n,n,n,B.aj),new A.bA(w.a,x.W))},
$S:117}
C.e9K.prototype={
$1(d){var w=this
if(d==="edit")w.a.abr(w.b)
if(d==="questions")w.a.ZE(w.b)
if(d==="delete")w.a.bOR(w.b)},
$S:2}
C.e9J.prototype={
$1(d){return D.cXG},
$S:135}
C.e9I.prototype={
$0(){return this.a.ZE(this.b)},
$S:0}
C.cVv.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q===$&&A.c()
w=d.a===q.a
if(w){q=r.f
q===$&&A.c()
q=A.b0(q).j(0.2)}else q=B.cz.j(0.1)
v=A.m(10)
if(w){u=r.f
u===$&&A.c()
u=A.b0(u)}else u=B.L
u=A.L(u,B.r,1)
t=r.f
t===$&&A.c()
return A.aP(!1,s,!0,A.q(s,A.X(d,A.b0(t),s,s,s,s),B.f,s,s,new A.p(q,s,u,v,s,s,B.n),s,s,s,s,B.cn,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cVu(r,d),s,s,s,s,s,s,s)},
$S:1678}
C.cVu.prototype={
$0(){var w=this.a
return w.m(new C.cVs(w,this.b))},
$S:0}
C.cVs.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cVw.prototype={
$1(d){var w=null,v=this.a,u=A.b0(d),t=v.f
t===$&&A.c()
return A.az(w,A.ha(u,w,t===d?D.c0d:w,w,14),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cVt(v,d),w,w,w,w,w,w,!1,B.a4)},
$S:453}
C.cVt.prototype={
$0(){var w=this.a
return w.m(new C.cVr(w,this.b))},
$S:0}
C.cVr.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cVx.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cVy.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=B.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&A.c()
v=v.f
v===$&&A.c()
t=u.cPl(v,w,t)
A.a6(this.b,!1).O(t)
return null},
$S:0}
C.f10.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return w.push(this.b)},
$S:0}
C.f11.prototype={
$1(d){return new C.a1c(this.a,null)},
$S:z+41}
C.f17.prototype={
$2(d,e){return B.T},
$S:37}
C.f16.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.u6:B.c
u=A.m(14)
t=A.m(14)
s=l?B.aM:B.bl
r=w.d
if(r!=null&&r.length!==0){q=A.m(8)
r=A.bw(q,K.aRH(n,B.c_,36,B.qI,l?B.bN:B.an,r,48),B.aq)}else r=A.X(D.a2l,A.b0(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=A.d(q,n,2,B.a2,n,n,n,A.l(n,n,l?B.aS:B.a_,n,n,n,n,n,n,n,n,n,n,n,B.U,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ad(w.c)
o=w.e?" \xb7 Printable":""
return A.aH(!1,B.a3,!0,u,A.dG(!1,n,n,n,!0,n,n,n,!0,n,n,r,n,n,n,n,new C.f14(m,w,e),!1,n,n,new A.b9(t,new A.ay(s,1,B.r,-1)),n,n,A.d(""+p+" block(s)"+o,n,n,n,n,n,n,A.l(n,n,l?B.bN:B.an,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,A.aI(n,n,n,n,D.bZv,n,n,n,new C.f15(m,e),n,n,n,n,n,n),n),B.f,v,0,n,n,n,n,n,B.aj)},
$S:80}
C.f15.prototype={
$0(){var w=this.a
w.m(new C.f12(w,this.b))
w.azh()},
$S:0}
C.f12.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cH(w,this.b)},
$S:0}
C.f14.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.b3g(u.b),$async$$0)
case 2:s=e
if(s!=null){t.m(new C.f13(t,u.c,s))
t.azh()}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f13.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.f0X.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f0V.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
return new C.WI(w,"Answer Document",null)},
$S:z+42}
C.f0W.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f0Z.prototype={
$0(){var w,v,u=this.a,t=u.a.c,s=u.d
s===$&&A.c()
s=B.a.i(s.a.a)
w=u.e
w===$&&A.c()
v=u.f
u=u.r
if(v==null)v=t.d
A.a6(this.b,!1).O(new C.is(t.a,s,w,v,u,t.f))
return null},
$S:0}
C.f1_.prototype={
$1(d){var w=this.a
return w.m(new C.f0Y(w,d))},
$S:9}
C.f0Y.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cgc.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fQ7.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.eam.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.ea2.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,new C.lY("image","",this.b,null))},
$S:0}
C.ea7.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,new C.lY("video","","data:video/mp4;base64,"+B.cT.gcu().aN(this.b),null))},
$S:0}
C.ea5.prototype={
$1(d){var w=null,v=x.p,u=A.x(A.a([A.aM(w,B.Z,!1,w,!0,B.t,w,A.aO(),this.a,w,w,w,w,w,2,D.c4L,B.y,!0,w,!0,w,!1,w,B.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.ao,w,w,w,w),A.aM(w,B.Z,!1,w,!0,B.t,w,A.aO(),this.b,w,w,w,w,w,2,D.c4K,B.y,!0,w,!0,w,!1,w,B.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.ao,w,w,w,w)],v),B.l,w,B.e,B.P,0,B.p)
return A.eg(A.a([A.bO(!1,B.dt,w,w,!0,w,w,w,new C.ea3(d),w,w),A.bJ(D.fSM,w,new C.ea4(d),w)],v),w,w,w,u,w,w,w,w,D.fFd,w)},
$S:18}
C.ea3.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.ea4.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.ea6.prototype={
$0(){var w,v=this.a.e
v===$&&A.c()
w=B.a.i(this.b.a.a)
return B.d.J(v,new C.lY("link","",B.a.i(this.c.a.a),w))},
$S:0}
C.e9Z.prototype={
$1(d){return B.a.i(d)},
$S:14}
C.ea_.prototype={
$1(d){return d.length!==0},
$S:3}
C.ea0.prototype={
$1(d){return B.a.i(B.a.en(d,A.ag("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:14}
C.ea1.prototype={
$1(d){return d.length!==0},
$S:3}
C.eac.prototype={
$0(){var w=this.a.bI6()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.ead.prototype={
$0(){return this.a.azi("**","**")},
$S:0}
C.eae.prototype={
$0(){return this.a.azi("*","*")},
$S:0}
C.eaf.prototype={
$0(){return this.a.azi("__","__")},
$S:0}
C.eag.prototype={
$0(){return this.a.b1l("## Section title")},
$S:0}
C.eah.prototype={
$0(){return this.a.b1l("\u2022 First point\n\u2022 Second point")},
$S:0}
C.eai.prototype={
$0(){},
$S:0}
C.eaj.prototype={
$0(){var w=this.a
w.m(new C.eab(w))},
$S:0}
C.eab.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,D.dTn)},
$S:0}
C.eak.prototype={
$0(){var w=this.a
w.m(new C.eaa(w))},
$S:0}
C.eaa.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,D.dTo)},
$S:0}
C.eal.prototype={
$1(d){var w,v=null,u=d.b,t=u.a
switch(t){case"image":t="Image"
break
case"video":t="Video"
break
case"link":t=u.d
if(t==null)t="Link"
break
case"signature":t="Signature"
break
default:break}w=this.b.a
t=A.d(t,v,v,v,v,v,v,A.l(v,v,w?B.j3:B.as,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
w=w?B.cl:B.hZ
return A.E7(v,w,B.as_,t,v,new C.ea9(this.a,d),v)},
$S:z+45}
C.ea9.prototype={
$0(){var w=this.a
return w.m(new C.ea8(w,this.b))},
$S:0}
C.ea8.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.cH(w,this.b.a)},
$S:0}
C.e9W.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.b0E},
$S:0}
C.e9X.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.hwR},
$S:0}
C.e9O.prototype={
$0(){var w=this.a
w.d=D.b0D
w.f=w.e=null},
$S:0}
C.e9P.prototype={
$0(){var w=this.a
w.d=D.b0E
w.f=null},
$S:0}
C.e9Y.prototype={
$2(d,e){return B.o.aS(d.f,e.f)},
$S:z+2}
C.e9R.prototype={
$2(d,e){var w=this.a,v=w.gb8Y()[e]
return new C.ad8(v,this.b,new C.e9Q(w,v),null)},
$S:z+46}
C.e9Q.prototype={
$0(){return this.a.ccJ(this.b.a)},
$S:0}
C.e9T.prototype={
$2(d,e){return B.o.aS(d.f,e.f)},
$S:z+47}
C.e9V.prototype={
$2(d,e){return B.W},
$S:37}
C.e9U.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.u6:B.c,p=A.m(16),o=A.m(16),n=A.m(16),m=A.L(r?B.aM:B.bl,B.r,1),l=A.a([new A.ab(0,B.G,B.w.j(r?0.28:0.06),B.dM,8)],x.V),k=A.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=A.m(10)
v=A.m(10)
k.push(A.bw(w,K.aRH(v,B.c_,52,D.a2l,r?B.bN:B.an,j,52),B.aq))}else{j=u.d.d
w=A.b0(j).j(0.15)
v=A.m(12)
k.push(A.q(t,A.X(D.a2l,A.b0(j),t,t,t,24),B.f,t,t,new A.p(w,t,t,v,t,t,B.n),t,52,t,t,t,t,t,52))}k.push(B.bc)
k.push(A.E(A.d(s.b,t,t,t,t,t,t,A.l(t,t,r?B.aS:B.a_,t,t,t,t,t,t,t,t,13,t,t,B.U,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(A.X(B.eI,r?B.bN:B.an,t,t,t,22))
return A.aH(!1,B.a3,!0,p,A.aP(!1,o,!0,A.q(t,A.A(k,B.l,t,B.e,B.j,0,t,t),B.f,t,t,new A.p(t,t,m,n,l,t,B.n),t,t,t,t,B.bh,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.e9S(u.a,s),t,t,t,t,t,t,t),B.f,q,0,t,t,t,t,t,B.aj)},
$S:80}
C.e9S.prototype={
$0(){return this.a.cjH(this.b)},
$S:0}
C.cge.prototype={
$1(d){return new C.ad0(d,this.a,null)},
$S:z+48}
C.cP0.prototype={
$0(){var w=this.a.c,v=w.c,u=A.oi(v==null?w.b:v)
if(u!=null)A.iY(u,B.fu,null)},
$S:0}
C.cP1.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.cP2.prototype={
$1(d){var w=null,v=this.a.d.a,u=A.d("\u2022  ",w,w,w,w,w,w,A.l(w,w,v?B.cx:B.aM,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=B.a.i(d)
return new A.D(B.mY,A.A(A.a([u,A.E(A.d(t,w,w,w,w,w,w,A.l(w,w,v?B.cx:B.aM,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.E,w,B.e,B.j,0,w,w),w)},
$S:145}
C.dqK.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dqM.prototype={
$0(){return this.a.m(new C.dqL(this.b))},
$S:0}
C.dqL.prototype={
$0(){var w=this.a
return w.a.f?w.hg(0):w.qr(0)},
$S:0}
C.fuo.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.eaA.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.DY)w.z=v
else w.Q=v},
$S:0}
C.ear.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=B.d.gd5(v).Q
v.toString
w.ms(v,B.cw,B.eT)},
$S:8}
C.eat.prototype={
$1(d){return J.t(d,"role")==="ai"},
$S:98}
C.eau.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.I(["role","user","text",this.b],v,v))
w.d.bP(0,B.cf)
w.r=!0},
$S:0}
C.eav.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.I(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.eaw.prototype={
$1(d){var w=J.a7(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+A.w(w.h(d,"text"))},
$S:159}
C.eax.prototype={
$0(){var w=x.N
return this.a.f.push(A.I(["role","ai","text",this.b],w,w))},
$S:0}
C.eay.prototype={
$0(){var w=x.N
return this.a.f.push(A.I(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.eaz.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eas.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=A.n5(l,B.bE.j(0.9),l,l,l,l,l,2,l,l)
return new A.D(B.bS,A.A(A.a([new A.a5(22,22,k,l),B.au,A.d("Writing full song\u2026",l,l,l,l,l,l,A.l(l,l,this.b?B.aD:B.e_,l,l,l,l,l,l,l,l,12,B.cK,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),B.l,l,B.e,B.j,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?B.aa:B.a7
k=k.c
k.toString
k=A.aF(k,B.c1,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new A.a8(B.a7,B.aa,B.x,A.a([B.aE,B.bE.j(0.85)],x.O),l,l)
else{q=x.O
q=new A.a8(B.a7,B.aa,B.x,v?A.a([B.br,B.a_],q):A.a([B.c,B.aS],q),l,l)}p=A.a([new A.ab(0,B.G,(u?B.bE:B.aE).j(0.22),B.ip,14)],x.V)
o=A.L(B.c.j(u?0.2:0.08),B.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=B.c
else v=v?B.bl:B.bq
n=u?13.5:15
m=u?B.bt:B.cK
return new A.bL(t,l,l,A.q(l,A.d(w,l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?B.a8:B.cE,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,new A.aY(0,k.a.a*0.94,0,1/0),new A.p(l,l,o,new A.be(B.iq,B.iq,new A.aN(s,s),new A.aN(r,r)),p,q,B.n),l,l,l,B.kw,B.jp,l,l,l),l)},
$S:41}
C.eaH.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&A.c()
w=m.x
w===$&&A.c()
v=A.m(22)
u=this.b
t=x.O
s=u?A.a([D.agX,B.a_,B.of],t):A.a([B.qf,B.qb,B.qd],t)
w=A.a([new A.ab(-4,B.G,B.aE.j(0.35+w*0.25),B.dp,28)],x.V)
r=A.L(B.c.j(u?0.08:0.5),B.r,1)
q=A.dr()
p=q.a
p.$flags&2&&A.aj(p)
p[11]=0.001
m=m.x
m===$&&A.c()
q.fL(m*0.08)
q=A.fz(B.A,A.q(o,D.bW1,B.f,o,o,new A.p(o,o,A.L(B.aQ.j(0.6),B.r,2),o,o,D.eAt,B.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=A.of(B.jT,D.fXy,new C.eaE())
p=x.p
m=A.a([A.A(A.a([q,B.bc,A.E(A.x(A.a([m,A.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,A.l(o,o,u?B.aR:B.b6,o,o,o,o,o,o,o,o,10,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),B.E,o,B.e,B.j,0,B.p),1)],p),B.l,o,B.e,B.j,0,o,o),B.ae,A.A(A.a([n.axr(D.DY,"Swahili","\ud83c\uddf9\ud83c\uddff",u),B.af,n.axr(D.aKV,"English","\ud83c\uddec\ud83c\udde7",u),B.af,n.axr(D.DZ,"Mix","\ud83d\udd25",u)],p),B.l,o,B.e,B.j,0,o,o)],p)
if(n.x!==D.DZ){t=A.a([B.T,n.cD_(u)],p)
if(n.w){q=n.x===D.DY?D.a6z:D.a5E
p=A.U(q).k("N<1,v>")
q=A.C(new A.N(q,new C.eaF(n,u),p),p.k("ak.E"))
t.push(new A.D(B.jF,A.bW(B.bH,q,B.bs,o,6,6),o))}B.d.v(m,t)}else{t=A.a([B.bE.j(0.22),B.aE.j(0.12)],t)
q=A.m(12)
p=A.L(B.bE.j(0.45),B.r,1)
m.push(new A.D(B.jF,A.q(o,A.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,A.l(o,o,u?B.iv:B.ko,o,o,o,o,o,o,o,o,10,o,o,B.U,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),B.f,o,o,new A.p(o,o,p,q,o,new A.a8(B.a7,B.aa,B.x,t,o,o),B.n),o,o,o,o,B.bV,o,o,o),o))}m.push(B.T)
t=x.dc
n=A.C(new A.N(D.dmn,new C.eaG(n,u),t),t.k("ak.E"))
m.push(A.A(n,B.l,o,B.e,B.j,0,o,o))
return A.q(o,A.x(m,B.al,o,B.e,B.j,0,B.p),B.f,o,o,new A.p(o,o,r,v,w,new A.a8(B.aA,B.aF,B.x,s,o,o),B.n),o,o,o,I.alI,I.alT,o,o,o)},
$S:90}
C.eaE.prototype={
$1(d){return D.c9q.aK(0,d)},
$S:71}
C.eaF.prototype={
$1(d){return this.a.cD0(d,this.b)},
$S:z+49}
C.eaG.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aKX?6:0,m=o?5:0,l=A.m(12)
if(o){w=this.b
v=w?B.aE.j(0.45):B.aE.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=B.w.j(w?0.25:0.05)
u=v
v=w
w=u}t=A.m(12)
p=p.r?q:new C.eaD(p,d)
s=C.hXD(d)
if(o)r=B.c
else r=v?B.ab:B.bq
r=A.d(s,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.hXE(d)
if(o)v=B.ab
else v=v?B.bW:B.e_
return A.E(new A.D(new A.R(0,0,n,0),A.aH(!1,B.a3,!0,l,A.aP(!1,t,!0,new A.D(O.O_,A.x(A.a([r,A.d(s,q,q,q,q,q,q,A.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.l,q,B.e,B.j,0,B.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,w,m,q,q,q,q,q,B.aj),q),1)},
$S:z+50}
C.eaD.prototype={
$0(){var w=this.a
return w.m(new C.eaC(w,this.b))},
$S:0}
C.eaC.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eaJ.prototype={
$0(){var w=this.a
return w.m(new C.eaI(w))},
$S:0}
C.eaI.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.eaq.prototype={
$0(){var w=this.a
return w.m(new C.eap(w,this.b))},
$S:0}
C.eap.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.DZ
if(v===D.aKV&&w.Q==null)w.Q=B.d.gH(D.a5E).a},
$S:0}
C.eaK.prototype={
$0(){return this.a.cyq(this.b.a)},
$S:0}
C.eaB.prototype={
$0(){return this.a.Jz(this.b)},
$S:0}
C.ean.prototype={
$1(d){return this.a.b1m()},
$S:2}
C.eao.prototype={
$0(){return this.a.b1m()},
$S:0}
C.h1J.prototype={
$1(d){var w=this
return new C.a_Y(w.a,w.b,w.c,new C.h1I(w.d),null)},
$S:z+51}
C.h1I.prototype={
$0(){return J.lL(this.a.bl())},
$S:0}
C.do3.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.bk1()},
$S:29}
C.do4.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a.f
m===$&&A.c()
m=m.x
m===$&&A.c()
w=this.b
v=m*3.141592653589793*2+w*0.55
m=this.c
u=x.w
t=A.aF(m,B.c1,u).w
s=Math.cos(v)
u=A.aF(m,B.c1,u).w
m=Math.sin(v*1.3)
r=Math.sin(v)
q=(w&1)===0
p=q?B.ed:B.hz
o=B.o.F(w,4)
q=q?B.av:B.aN
return A.ap(n,A.d3(A.X(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:319}
C.do9.prototype={
$0(){},
$S:0}
C.do8.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&A.c()
w=t.x
w===$&&A.c()
v=B.lb.aA(0,B.i.D(w,0,1))
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793)
w=A.dr()
u=w.a
u.$flags&2&&A.aj(u)
u[11]=0.0028
w.fL(t*0.08)
w.kn(0.12)
return A.e1(B.A,A.fz(B.A,e,null,w,!0),0.5+v*0.5,null,null)},
$S:45}
C.do5.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=0.55+r*0.45
r=A.q(t,t,B.f,t,t,new A.p(t,t,t,t,A.a([new A.ab(6,B.G,B.av.j(w*0.5),B.J,36)],x.V),t,B.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new A.an(B.A,t,B.ac,B.t,A.a([r,new A.a5(96,96,A.n5(B.c.j(0.08),B.av,t,t,t,t,t,6,u/v,t),t),A.d(""+s.a.c,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,38,t,t,B.u,t,t,!0,t,t,t,t,t,A.a([new A.cU(B.av.j(w),B.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:119}
C.do6.prototype={
$1(d){return D.c9u.aK(0,d)},
$S:71}
C.do7.prototype={
$0(){var w=this.a
w.a.bk1()
w.a.e.$0()},
$S:0}
C.cic.prototype={
$1(d){var w=!1
if(B.a.i(d.b.toLowerCase())===this.a)if(d.d===B.fS)if(d.x===B.dI){w=d.w
w=B.a.i(w==null?"":w)===this.b}return w},
$S:15}
C.cip.prototype={
$1(d){return d.a===this.a},
$S:15}
C.eoX.prototype={
$0(){return this.a.a.c.d},
$S:81}
C.epD.prototype={
$1(d){var w=this.a
if(w.c!=null)w.Qv()},
$S:8}
C.epE.prototype={
$1(d){var w=$.aW.p2$
if(w===B.tU||w===B.tV)return
this.a.Ff()},
$S:11}
C.epF.prototype={
$1(d){this.a.cF8()},
$S:11}
C.epl.prototype={
$0(){this.a.K2(this.b.d,!1)},
$S:0}
C.epm.prototype={
$0(){},
$S:0}
C.epn.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.epo.prototype={
$0(){},
$S:0}
C.epp.prototype={
$1(d){return d.a===this.a},
$S:15}
C.epq.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.epr.prototype={
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
C.epg.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=A.bq(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=A.bq(v[1],!0,x.N)
w.PI()
w.a9y()},
$S:0}
C.eoY.prototype={
$0(){this.b.K2(this.c.d+this.a.a,!1)},
$S:0}
C.eph.prototype={
$1(d){var w=d.d
return(w===B.fS||w===B.f2)&&d.x===B.dI},
$S:15}
C.epi.prototype={
$1(d){return d.a},
$S:175}
C.epj.prototype={
$1(d){return d.a===this.a},
$S:15}
C.epk.prototype={
$0(){},
$S:0}
C.ep1.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bq(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=A.bq(v[0],!0,x.N)},
$S:0}
C.ep2.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.epa.prototype={
$0(){},
$S:0}
C.ep7.prototype={
$0(){return this.a.a.c.d},
$S:81}
C.ep8.prototype={
$0(){var w=this.a,v=A.C(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.ep9.prototype={
$0(){var w=this.a,v=A.C(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.epb.prototype={
$0(){return this.a.z=!0},
$S:0}
C.epc.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new A.w2(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.epd.prototype={
$0(){return this.a.z=!1},
$S:0}
C.epf.prototype={
$0(){var w=this.a
return w.m(new C.epe(w))},
$S:0}
C.epe.prototype={
$0(){return this.a.y=1},
$S:0}
C.ep3.prototype={
$0(){return this.a.y=1},
$S:0}
C.ep4.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.epv.prototype={
$1(d){return d.a.length===0},
$S:15}
C.epw.prototype={
$2(d,e){return e.y.aS(0,d.y)},
$S:78}
C.epA.prototype={
$0(){var w=this.a
return w.m(new C.ept(w))},
$S:0}
C.ept.prototype={
$0(){return this.a.y=1},
$S:0}
C.epB.prototype={
$0(){var w=this.a
return w.m(new C.eps(w))},
$S:0}
C.eps.prototype={
$0(){return this.a.y=2},
$S:0}
C.epC.prototype={
$0(){return A.j1(this.a,null)},
$S:0}
C.epx.prototype={
$2$cloudRequest(d,e){return this.a.b2z(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1680}
C.epy.prototype={
$0(){return this.a.Ff()},
$S:1}
C.epz.prototype={
$0(){var w=this.a
return w.m(new C.epu(w))},
$S:0}
C.epu.prototype={
$0(){var w=this.a
return w.y=B.o.D(w.y-1,0,2)},
$S:0}
C.ep0.prototype={
$0(){A.eY()
var w=this.a
w.m(new C.ep_(w))},
$S:0}
C.ep_.prototype={
$0(){return this.a.y=0},
$S:0}
C.eoZ.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=A.bHB(A.q(t,t,B.f,t,t,new A.p(t,t,A.L(B.c.j(0.55),B.r,1.2),t,A.a([new A.ab(1,B.G,B.aC.j(0.55),B.J,18)],x.V),D.c7v,B.a6),t,t,t,t,t,t,t,t),B.e2,B.rU,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=A.a([],w)
for(u=0;u<3;++u)v.push(r.c7Y(u))
return new A.an(B.a0,t,B.ac,B.t,A.a([q,A.A(v,B.l,t,B.e,B.j,0,t,t)],w),t)},
$S:67}
C.ep6.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
A.eY()
w.m(new C.ep5(w,v))},
$S:0}
C.ep5.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dsu.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===B.fS||v===B.f2)return!0
if(d.c!==0)v=B.a.q(w,"clock-in daily earnings")||B.a.q(w,"clock-in earnings")
else v=!1
return v},
$S:15}
C.dsv.prototype={
$1(d){return new A.V(Date.now(),0,!1)},
$S:672}
C.dsw.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new A.V(Date.now(),0,!1)
u=A.dF(C.h9r(v.c,u))
w=this.c?new C.dst(v):null
return v.bb_(this.b,B.qR,D.eY,w,"Today","$"+u,D.eY)},
$S:1682}
C.dst.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.dsx.prototype={
$2(d,e){var w=this.a
return w.bb_(this.b,B.kz,B.ch,w.w,"Balance","$"+A.dF(A.M0(w.c.a,new C.dss(w))),B.cv)},
$S:69}
C.dss.prototype={
$0(){return this.a.c.d},
$S:81}
C.dsn.prototype={
$0(){this.a.a.cXi()
return null},
$S:0}
C.dso.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b2(w,w,w,new C.by6(v,w),B.az)},
$S:56}
C.dsp.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.bdC(v,!0,B.aC,D.pc,w)}else{v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.bdB(v,D.pc,w)}return A.b2(w,w,w,v,B.az)},
$S:56}
C.dsq.prototype={
$1(d){return new A.V(Date.now(),0,!1)},
$S:672}
C.dsr.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new A.V(Date.now(),0,!1)
w=r.a
v=w.a.cVY(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:B.i.D(v/u,0,1)}u=w.d
u===$&&A.c()
s=w.e
s===$&&A.c()
return A.c5(new A.h7(A.a([u,s],x.U)),new C.dsm(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1683}
C.dsm.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=A.a([],m),k=o.b
if(k)B.d.v(l,A.ir(7,new C.dsl(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&A.c()
v=v.x
v===$&&A.c()
u=o.d
l.push(A.b2(n,n,n,new C.bdA(o.c,v,k,u,D.pc,D.bwl,n),D.feX))
v=A.L(B.c.j(0.1),B.r,1.2)
if(k)t=B.wG
else t=o.e?B.wB:D.bRc
t=A.X(t,k?D.pc:B.aZ,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=A.d(s,n,n,n,n,n,n,A.l(n,n,B.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,B.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+A.dF(w.f&&w.d>0?w.d:o.f)}q=k?D.pc:B.c
w=A.d(w,n,n,n,n,n,n,A.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,B.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=A.m(999)
p=u.j(0.16)
u=A.L(u.j(0.5),B.r,1)
l.push(A.q(n,A.x(A.a([t,B.am,s,B.aw,w,B.T,A.q(n,A.d(o.r,n,n,n,n,n,n,A.l(n,n,k?D.pc:B.ph,n,n,n,n,n,n,n,n,9,n,n,B.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),B.f,n,n,new A.p(p,n,u,q,n,n,B.n),n,n,n,n,B.lj,n,n,n)],m),B.l,n,B.ba,B.j,0,B.p),B.f,n,n,new A.p(B.L,n,v,n,n,n,B.a6),n,176,n,n,n,n,n,176))
return A.as(new A.a5(276,276,new A.an(B.A,n,B.ac,B.f,l,n),n),n,n,n)},
$S:222}
C.dsl.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=B.i.F(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=B.o.F(d,3)
t=B.o.F(d,2)
return A.ap(s,new A.du(!0,A.d3(A.q(s,s,B.f,s,s,new A.p(s,s,s,A.m(40),s,new A.bY(B.A,0.5,B.x,s,0,A.a([D.pc.j(0.38),B.c.j(0.08),B.L],x.O),s,s),B.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:236}
C.dsO.prototype={
$0(){},
$S:0}
C.dsP.prototype={
$0(){},
$S:0}
C.dsQ.prototype={
$1(d){return d.x===B.dI},
$S:15}
C.dsA.prototype={
$0(){return this.a.a.d.d},
$S:81}
C.dsz.prototype={
$0(){var w,v
A.eY()
w=this.a
v=this.b
w.m(new C.dsy(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)A.f3(null,x.H)}},
$S:0}
C.dsy.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dsL.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=A.m(12),q=s?w.b.j(0.18):B.c.j(0.04),p=A.L(s?w.b.j(0.7):B.c.j(0.08),B.r,1)
return A.E(new A.D(B.jq,A.az(v,A.cT(B.A,A.d("$"+t,v,v,v,v,v,v,A.l(v,v,s?w.b:B.ab,v,v,v,v,v,v,v,v,13,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,B.b_,new A.p(q,v,p,r,v,v,B.n),B.h3,v,38,v,v,v,v,v,v),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dsN(u,d),v,v,v,v,v,v,!1,B.a4),v),1)},
$S:1685}
C.dsN.prototype={
$0(){A.eY()
var w=this.a
w.m(new C.dsM(w,this.b))},
$S:0}
C.dsM.prototype={
$0(){var w=""+this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.dsK.prototype={
$4$bold$color(d,e,f,g){var w=null,v=A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?B.c:g,t=f?15:13
return new A.D(B.wl,A.A(A.a([v,B.b3,A.d(e,w,w,w,w,w,w,A.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?B.u:B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.j,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1686}
C.dsJ.prototype={
$1(d){return this.a.m(new C.dsI())},
$S:2}
C.dsI.prototype={
$0(){},
$S:0}
C.dsD.prototype={
$1(d){return this.a.aYO(d)&&!A.hhw(d)},
$S:15}
C.dsE.prototype={
$2(d,e){return e.y.aS(0,d.y)},
$S:78}
C.dsF.prototype={
$0(){return this.a.a.d.d},
$S:81}
C.dsG.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return A.b(x.r.b(s)?s:A.dL(s,x.H),$async$$0)
case 2:if(t.c!=null)t.m(new C.dsC())
t.mo("Balance refreshed.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dsC.prototype={
$0(){},
$S:0}
C.dsH.prototype={
$0(){var w=this.a
return w.m(new C.dsB(w))},
$S:0}
C.dsB.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fM7.prototype={
$2(d,e){return e.y.aS(0,d.y)},
$S:78}
C.fDT.prototype={
$1(d){var w=J.a7(d),v=w.h(d,"toEmail"),u=!1
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.z(v,this.b)){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fWR.prototype={
$1(d){var w=J.a7(d),v=w.h(d,"toEmail")
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fDS.prototype={
$1(d){var w,v,u
if(!C.ijo(d,this.a))return!1
w=J.a7(d)
v=w.h(d,"sessionUpdatedAt")
v=A.bh(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=A.bh(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=A.bh(J.k(w==null?"":w))}if(u!=null&&B.o.aq(new A.V(Date.now(),0,!1).bD(u).a,36e8)>72)return!1
return!0},
$S:4}
C.fs7.prototype={
$1(d){var w=this.a
if(B.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:72}
C.fVp.prototype={
$0(){return $.heU=null},
$S:12}
C.fVq.prototype={
$1(d){return A.a2(d,x.N,x.z)},
$S:7}
C.fTi.prototype={
$1(d){return A.a2(d,x.N,x.z)},
$S:7}
C.fTj.prototype={
$0(){var w,v=this.a
$.heF.W(0,v)
w=C.uz(this.b,v)
if(w!=null)A.RW(A.a([A.a2(w,x.N,x.z)],x._),v)},
$S:0}
C.fY2.prototype={
$1(d){return new C.a0L(this.a,this.b,null)},
$S:z+56}
C.ejE.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.ejH.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.ejI.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.m(new C.ejG(w))},
$S:2}
C.ejG.prototype={
$0(){return this.a.f=""},
$S:0}
C.ejJ.prototype={
$1(d){return this.a.b1C()},
$S:2}
C.ejK.prototype={
$0(){var w=this.a
return w.m(new C.ejF(w,this.b))},
$S:0}
C.ejF.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fCR.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+B.a.b2(d,1)},
$S:14}
C.fCQ.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+B.a.b2(d,1)},
$S:14}
C.fVG.prototype={
$1(d){var w,v=x.f
if(v.b(d))return A.a2(d,x.N,x.z)
try{v=A.a2(v.a(d.aj()),x.N,x.z)
return v}catch(w){return A.T(x.N,x.z)}},
$S:13}
C.fVH.prototype={
$1(d){return J.cJ(d)},
$S:4}
C.fPv.prototype={
$1(d){return d.a!=="send_email"},
$S:291}
C.fV7.prototype={
$1(d){var w=null,v=B.w.j(0.35),u=A.m(10),t=A.L(B.aT,B.r,1)
return A.q(B.A,A.d(d,w,w,w,w,w,w,B.hq,w,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,86,w,B.f6,w,w,w,72)},
$S:674}
C.ck5.prototype={
$1(d){return J.k(d)},
$S:17}
C.ck6.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b8(d,new C.ck4(),x.S)
w=A.C(w,w.$ti.k("ak.E"))
return w}return A.c0(7,0,!1,x.S)},
$S:675}
C.ck4.prototype={
$1(d){var w
if(A.iU(d))w=d
else{w=A.ca(J.k(d),null)
if(w==null)w=0}return w},
$S:411}
C.ck7.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b8(d,new C.ck3(),x.S)
w=A.C(w,w.$ti.k("ak.E"))
return w}return A.c0(8,0,!1,x.S)},
$S:675}
C.ck3.prototype={
$1(d){var w
if(A.iU(d))w=d
else{w=A.ca(J.k(d),null)
if(w==null)w=0}return w},
$S:411}
C.ck9.prototype={
$1(d){return A.bq(d,!0,x.S)},
$S:676}
C.cka.prototype={
$1(d){return A.bq(d,!0,x.S)},
$S:676}
C.ck2.prototype={
$1(d){var w=this.a
if(B.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:72}
C.ck8.prototype={
$2(d,e){return d+e},
$S:62}
C.ck1.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.t(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:62}
C.fFE.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fFy.prototype={
$0(){return this.a.$1(D.r_)},
$S:0}
C.fFz.prototype={
$0(){return this.a.$1(D.r_)},
$S:0}
C.fFA.prototype={
$0(){return this.a.$1(D.r_)},
$S:0}
C.fFB.prototype={
$0(){return this.a.$1(D.r_)},
$S:0}
C.fFC.prototype={
$0(){return this.a.$1(D.r_)},
$S:0}
C.fFD.prototype={
$0(){return this.a.$1(D.r_)},
$S:0}
C.fpg.prototype={
$2(d,e){var w,v,u=this,t=null,s=B.o.aq(e,8),r=B.o.F(e,8),q=B.o.F(s+r,2),p=u.a,o=J.t(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.Zg:D.bif
if(o===0)w=t
else{w=x.O
w=o===1?A.a([B.c,B.bl],w):A.a([B.br,B.w],w)
v=n?B.aQ:B.dx
w=A.q(t,t,B.f,t,t,new A.p(t,t,A.L(v,B.r,n?3:1),t,A.a([new A.ab(0,B.G,B.w.j(0.35),B.dM,4)],x.V),new A.bY(B.A,0.5,B.x,t,0,w,t,t),B.a6),t,28,t,t,t,t,t,28)}return A.az(t,A.q(t,A.as(w,t,t,t),B.f,q,t,t,t,t,t,t,t,t,t,t),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.fpf(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,B.a4)},
$S:82}
C.fpf.prototype={
$0(){var w=this,v=w.a,u=v.d1e(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.r_:D.Jh
w.f.$1(v)}},
$S:0}
C.fDa.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new A.a5(u,u,A.ip(!0,v,v,B.y,P.aTZ,new C.fD9(w.a,w.b,w.c,w.d,u),9,v,B.dZ,B.ah,!1),v)},
$S:160}
C.fD9.prototype={
$2(d,e){var w=this,v=null,u=A.m(12),t=A.m(12),s=w.a,r=s.at[e],q=r==="X"?B.aG:B.ay
return A.aH(!1,B.a3,!0,u,A.aP(!1,t,!0,A.as(A.d(r,v,v,v,v,v,v,A.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fD8(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),B.f,B.fY,0,v,v,v,v,v,B.aj)},
$S:80}
C.fD8.prototype={
$0(){var w=this,v=w.a.d1g(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.foA.prototype={
$1(d){return new A.D(B.jq,C.fT9(d,!1),null)},
$S:309}
C.foB.prototype={
$1(d){return C.fT9(d,!1)},
$S:1690}
C.foC.prototype={
$0(){var w=this,v=w.a
v.cLC(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.foD.prototype={
$0(){var w=this
w.a.cLD(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.fA5.prototype={
$1(d){var w=this,v=null,u=d*6
return A.n3(v,B.br,A.d(""+u,v,v,v,v,v,v,B.ci,v,v,v),B.dk,new C.fA4(w.a,w.b,u,w.c,w.d),v,v,new A.ay(B.c.j(0.2),1,B.r,-1),v)},
$S:1691}
C.fA4.prototype={
$0(){var w=this,v=w.a,u=w.b.az(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.fC1.prototype={
$1(d){return D.dqC[d]},
$S:76}
C.fC2.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=A.a([s.az(6),s.az(6),s.az(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.fyV.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.fyW.prototype={
$0(){var w=this,v=w.a
if(w.b.ai()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.fpJ.prototype={
$0(){var w=this,v=w.a.cRt(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.fpI.prototype={
$1(d){var w,v=null,u=J.t(this.a.fr[5-d],this.b)
if(u===0)w=B.mR
else w=u===1?B.dQ:B.tk
return new A.fH(1,A.q(v,v,B.f,v,v,new A.p(w,v,A.L(B.bA,B.r,1),v,v,v,B.a6),v,v,v,B.nI,v,v,v,v),v)},
$S:1692}
C.fz6.prototype={
$1(d){var w=this
if(w.a.bet(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.fz7.prototype={
$0(){var w=this
if(w.a.bet(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.fpa.prototype={
$0(){var w=this
if(w.a.ai()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fLa.prototype={
$1(d){var w=J.t(d,"email")
return B.a.q(B.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fLb.prototype={
$1(d){var w,v=J.a7(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=B.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+B.a.i(J.k(v==null?"":v))+">"},
$S:52}
C.eQL.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aMv.prototype
w.byb=w.Y
w.bya=w.t
w=C.aMw.prototype
w.byd=w.Y
w.byc=w.t
w=C.aMx.prototype
w.byf=w.Y
w.bye=w.t
w=C.aNu.prototype
w.bze=w.Y
w.bzd=w.t
w=C.aN2.prototype
w.byM=w.t
w=C.aNE.prototype
w.bzo=w.t
w=C.aMy.prototype
w.byg=w.t
w=C.aNM.prototype
w.bzx=w.t
w=C.aMD.prototype
w.byl=w.t
w=C.aMT.prototype
w.byC=w.t
w=C.aOn.prototype
w.bA8=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.aCd.prototype,"gbUW","bUX",19)
v(q,"gaV0","aV1",1)
v(C.aCc.prototype,"gcBT","a3b",1)
v(q=C.aCe.prototype,"gc_s","c_t",1)
v(q,"gbJT","bJU",1)
v(q=C.azi.prototype,"gcuT","cuU",1)
v(q,"gcje","QY",0)
v(q,"gcFY","cFZ",1)
v(q,"gcxX","nh",0)
w(q,"gcnC","cnD",25)
w(q,"gcEf","SK",33)
v(q=C.aEj.prototype,"gbSS","Yq",0)
v(q,"gc8E","ZZ",0)
v(q,"gc8B","ZY",0)
v(q,"gc8C","aeo",0)
v(q,"gc8D","PM",0)
v(C.aBw.prototype,"gc8F","c8G",1)
u(C,"irk","hVP",58)
t(C,"hhE",0,null,["$1","$0"],["hDw",function(){return C.hDw(null)}],3,0)
t(C,"bG3",0,null,["$1","$0"],["hDv",function(){return C.hDv(null)}],3,0)
v(C.NX.prototype,"gF_","cgo",1)
v(C.aF3.prototype,"gcva","Bo",0)
v(q=C.aFj.prototype,"gcjy","R_",0)
v(q,"gcol","a1n",0)
v(q,"gccD","ccE",1)
v(q=C.aFv.prototype,"gccI","afp",0)
v(q,"gbDq","a9q",0)
v(q,"gcvq","a2k",0)
s(q,"gcgT","cgU",35)
v(C.aHs.prototype,"gbDS","a9s",1)
v(q=C.aHr.prototype,"gccH","afo",0)
v(q,"gciv","agx",0)
v(q=C.aFx.prototype,"gc36","ad8",0)
v(q,"gc38","Z7",0)
v(q,"gc37","ad9",0)
v(q=C.aFw.prototype,"gbGd","bGe",1)
v(q,"gbGf","bGg",1)
v(C.aFy.prototype,"gbM6","bM7",1)
v(C.aCy.prototype,"gccK","ccL",1)
v(q=C.aFU.prototype,"gb1v","cd1",1)
r(q,"gb2x",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["aga","azW","b2z","b2y"],52,0,0)
r(q,"gcg6",0,4,null,["$4"],["cg7"],53,0,0)
v(q,"gcid","a0y",0)
v(q,"gcj5","agE",0)
v(q,"gcj0","agC",0)
v(q,"gc6h","adV",0)
w(C.aDk.prototype,"gc4X","c4Y",54)
w(q=C.aDm.prototype,"gcD8","cD9",55)
v(q,"gcBJ","cBK",1)
v(q,"gcJM","cJN",1)
v(C.aFI.prototype,"gcdn","b1C",1)
v(C.aGu.prototype,"gb23","azH",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.iJ,[C.cAO,C.cAL,C.cAM,C.cAN,C.cAK,C.fcA,C.fcy,C.fcC,C.fcz,C.fw4,C.dku,C.dkF,C.dkN,C.dkO,C.dkQ,C.dkI,C.dkG,C.dkH,C.dkJ,C.dkK,C.dkA,C.dkB,C.dkz,C.dkD,C.dkE,C.dkx,C.dkw,C.dkS,C.dkV,C.dYT,C.dYS,C.dYU,C.dYR,C.dYQ,C.dko,C.dkr,C.dks,C.dkq,C.dkp,C.dmg,C.dmh,C.dmi,C.dlw,C.dlx,C.dm0,C.dlM,C.dlN,C.dlO,C.dlP,C.dlQ,C.dkZ,C.dlv,C.dm1,C.dma,C.dlZ,C.dlY,C.dlt,C.dlu,C.dm6,C.dm7,C.dl0,C.dl1,C.dlF,C.dlG,C.dlH,C.dlE,C.dlR,C.dlS,C.dlT,C.dlU,C.dlV,C.dlW,C.dm4,C.dlI,C.dlJ,C.dlK,C.dlL,C.dm8,C.dm9,C.dl2,C.dl3,C.dl4,C.dl5,C.dm2,C.dm3,C.dlD,C.dlX,C.dlB,C.dmb,C.dmc,C.dmd,C.dly,C.dlh,C.dlg,C.dlf,C.dll,C.dle,C.dlc,C.dl7,C.dla,C.dl6,C.dlq,C.dlr,C.dl8,C.dpQ,C.cMa,C.cM0,C.cM1,C.cMk,C.cMh,C.cMi,C.cMj,C.cMc,C.cMb,C.cM2,C.cMd,C.cMD,C.cMz,C.cMy,C.cM8,C.cM9,C.cM5,C.cMg,C.cMo,C.cMp,C.cMq,C.cMr,C.cMs,C.cMt,C.cMu,C.cMP,C.cMI,C.cMF,C.cMK,C.cMH,C.cME,C.cM3,C.cMB,C.dGm,C.dGn,C.dGd,C.dGb,C.dGl,C.dGa,C.dG9,C.dGc,C.dGh,C.dGi,C.dGf,C.dGg,C.dGo,C.dGp,C.dGq,C.dGr,C.f66,C.f67,C.dfl,C.fM1,C.dMP,C.dMH,C.dMJ,C.dMN,C.dMI,C.dMK,C.dML,C.ccx,C.fT7,C.fT6,C.dFZ,C.dFY,C.dG_,C.dFX,C.e5r,C.e5s,C.e5z,C.h0X,C.h0Y,C.c4R,C.dYZ,C.dZ_,C.dZ0,C.dZ1,C.dZ2,C.dZ3,C.dYY,C.dZ4,C.dYX,C.dZ7,C.dZ6,C.dZ5,C.e5H,C.e5I,C.e5F,C.e5E,C.e5G,C.e5C,C.e9G,C.e9H,C.e9p,C.e9r,C.e9D,C.e9E,C.e9y,C.e9w,C.e9C,C.e9z,C.e9t,C.e9s,C.e9I,C.cVu,C.cVs,C.cVt,C.cVr,C.cVx,C.cVy,C.f10,C.f15,C.f12,C.f14,C.f13,C.f0X,C.f0W,C.f0Z,C.f0Y,C.ea2,C.ea7,C.ea3,C.ea4,C.ea6,C.eac,C.ead,C.eae,C.eaf,C.eag,C.eah,C.eai,C.eaj,C.eab,C.eak,C.eaa,C.ea9,C.ea8,C.e9W,C.e9X,C.e9O,C.e9P,C.e9Q,C.e9S,C.cP0,C.dqK,C.dqM,C.dqL,C.eaA,C.eau,C.eav,C.eax,C.eay,C.eaz,C.eaD,C.eaC,C.eaJ,C.eaI,C.eaq,C.eap,C.eaK,C.eaB,C.eao,C.h1I,C.do9,C.do7,C.eoX,C.epl,C.epm,C.epn,C.epo,C.epq,C.epr,C.epg,C.eoY,C.epk,C.ep1,C.ep2,C.epa,C.ep7,C.ep8,C.ep9,C.epb,C.epc,C.epd,C.epf,C.epe,C.ep3,C.ep4,C.epA,C.ept,C.epB,C.eps,C.epC,C.epy,C.epz,C.epu,C.ep0,C.ep_,C.ep6,C.ep5,C.dst,C.dss,C.dsn,C.dsO,C.dsP,C.dsA,C.dsz,C.dsy,C.dsN,C.dsM,C.dsI,C.dsF,C.dsG,C.dsC,C.dsH,C.dsB,C.fVp,C.fTj,C.ejE,C.ejH,C.ejG,C.ejK,C.ejF,C.fFy,C.fFz,C.fFA,C.fFB,C.fFC,C.fFD,C.fpf,C.fD8,C.foC,C.foD,C.fA4,C.fC2,C.fyW,C.fpJ,C.fz7,C.fpa,C.eQL])
u(A.hu,[C.cAP,C.fcB,C.fPP,C.fPH,C.fw1,C.fw0,C.fw3,C.dkX,C.dkY,C.dkM,C.dkL,C.dkP,C.dky,C.dkC,C.dkR,C.dYW,C.dkt,C.dmj,C.dmk,C.dml,C.dmm,C.dmn,C.dm_,C.dm5,C.dl_,C.dmf,C.dme,C.dli,C.dlj,C.dlk,C.dlm,C.dlo,C.dpR,C.cMQ,C.cMf,C.cMe,C.cMx,C.cMA,C.cMw,C.cM6,C.cMn,C.cMl,C.cMC,C.cMm,C.cML,C.cMJ,C.cMO,C.c3z,C.c3y,C.c3B,C.c3A,C.dGk,C.dGj,C.dGe,C.dGs,C.dGt,C.fAF,C.fBS,C.dfm,C.dfk,C.c4k,C.fM0,C.dMQ,C.dMO,C.ccy,C.fCJ,C.fT5,C.ceZ,C.ceY,C.cfq,C.e5p,C.e5q,C.fOn,C.fOa,C.fO9,C.fyZ,C.cfE,C.cfF,C.cfG,C.cfD,C.cfC,C.fvI,C.h0T,C.h0U,C.h0V,C.h0W,C.h0S,C.e5w,C.e5x,C.e5v,C.h0Z,C.dmo,C.chi,C.fuG,C.dZ8,C.e5D,C.cg9,C.cg6,C.cg8,C.cgb,C.c7Z,C.c7X,C.c81,C.cgi,C.cgh,C.cgg,C.cgf,C.cgk,C.cgm,C.e9M,C.e9q,C.e9o,C.e9F,C.e9x,C.e9B,C.e9A,C.e9v,C.e9K,C.e9J,C.cVv,C.cVw,C.f11,C.f0V,C.f1_,C.cgc,C.fQ7,C.eam,C.ea5,C.e9Z,C.ea_,C.ea0,C.ea1,C.eal,C.cge,C.cP1,C.cP2,C.fuo,C.ear,C.eat,C.eaw,C.eaE,C.eaF,C.eaG,C.ean,C.h1J,C.do3,C.do6,C.cic,C.cip,C.epD,C.epE,C.epF,C.epp,C.eph,C.epi,C.epj,C.epv,C.epx,C.dsu,C.dsv,C.dsq,C.dsl,C.dsQ,C.dsL,C.dsK,C.dsJ,C.dsD,C.fDT,C.fWR,C.fDS,C.fs7,C.fVq,C.fTi,C.fY2,C.ejI,C.ejJ,C.fCR,C.fCQ,C.fVG,C.fVH,C.fPv,C.fV7,C.ck5,C.ck6,C.ck4,C.ck7,C.ck3,C.ck9,C.cka,C.ck2,C.fFE,C.foA,C.foB,C.fA5,C.fC1,C.fyV,C.fpI,C.fz6,C.fLa,C.fLb])
t(C.bu9,A.j4)
u(A.af,[C.G5,C.amJ,C.aF2,C.amI,C.amK,C.anw,C.ajE,C.ap3,C.a0r,C.a0s,C.a_z,C.apz,C.ap2,C.Ot,C.aCf,C.aqI,C.arq,C.WH,C.Qw,C.a1d,C.a1c,C.WI,C.arH,C.aD7,C.arK,C.a_Y,C.asg,C.aDj,C.aDl,C.a0L,C.atC])
u(A.ah,[C.aK_,C.aMw,C.aNu,C.aMv,C.aMx,C.bj1,C.azi,C.aEj,C.blt,C.blu,C.aBw,C.blB,C.aN2,C.aNE,C.aMy,C.aF3,C.aFj,C.aFv,C.bd6,C.aHs,C.aHr,C.aFx,C.aFw,C.bjf,C.aNM,C.aMD,C.bA5,C.aMT,C.aDm,C.aFI,C.aOn])
u(A.jy,[C.fcD,C.fw2,C.dkv,C.dkW,C.dkU,C.dkT,C.dYV,C.dlC,C.dlA,C.dlz,C.dld,C.dln,C.dlb,C.dlp,C.dl9,C.dls,C.cMv,C.cM7,C.cMG,C.cMN,C.cMM,C.cM4,C.dfj,C.dMM,C.fCK,C.fCL,C.e5t,C.fPK,C.h0R,C.e5y,C.e5B,C.e5A,C.dmp,C.chj,C.cga,C.cg7,C.c8_,C.c7Y,C.cgl,C.e9N,C.e9u,C.e9L,C.f17,C.f16,C.e9Y,C.e9R,C.e9T,C.e9V,C.e9U,C.eas,C.eaH,C.do4,C.do8,C.do5,C.epw,C.eoZ,C.dsw,C.dsx,C.dso,C.dsp,C.dsr,C.dsm,C.dsE,C.fM7,C.ck8,C.ck1,C.fpg,C.fDa,C.fD9])
t(C.axu,C.G5)
u(A.aE,[C.ra,C.af1,C.NX,C.JD,C.rR,C.rS,C.lY,C.is,C.id,C.bbb,C.dch,C.dqJ,C.rY,C.WJ,C.OK,C.qe,C.b1t,C.pw,C.asH])
t(C.aCd,C.aMw)
t(C.blZ,C.aNu)
t(C.aCc,C.aMv)
t(C.aCe,C.aMx)
u(A.lD,[C.Xn,C.aD8,C.asu,C.JI,C.Ft])
u(A.aw,[C.a1O,C.buG,C.afN,C.R9,C.a7Q,C.Ol,C.ark,C.aeE,C.aeD,C.b2i,C.aD6,C.ad8,C.b1P,C.ad0,C.aDk])
t(C.blr,C.aN2)
t(C.bmc,C.aNE)
t(C.bhI,C.aMy)
t(C.aFy,C.aNM)
t(C.aCy,C.aMD)
t(C.aFU,C.bA5)
t(C.bjZ,C.aMT)
u(A.mn,[C.bdC,C.bdB,C.bdA,C.bd_,C.by6,C.bsW])
t(C.aGu,C.aOn)
w(C.aMv,C.NX)
w(C.aMw,C.NX)
w(C.aMx,C.NX)
w(C.aNu,C.NX)
w(C.aN2,A.eN)
w(C.aNE,A.cc)
w(C.aMy,A.cc)
w(C.aNM,A.cc)
w(C.aMD,A.eN)
w(C.aMT,A.eN)
v(C.bA5,A.eC)
w(C.aOn,A.cc)})()
A.iT(b.typeUniverse,JSON.parse('{"bu9":{"j4":[]},"G5":{"af":[],"v":[]},"aK_":{"ah":["G5<1,2>"]},"axu":{"G5":["1","hr<1>"],"af":[],"v":[],"G5.T":"1","G5.S":"hr<1>"},"amJ":{"af":[],"v":[]},"aF2":{"af":[],"v":[]},"amI":{"af":[],"v":[]},"amK":{"af":[],"v":[]},"anw":{"af":[],"v":[]},"ajE":{"af":[],"v":[]},"aCd":{"ah":["amJ"]},"blZ":{"ah":["aF2"]},"aCc":{"ah":["amI"]},"aCe":{"ah":["amK"]},"bj1":{"ah":["anw"]},"azi":{"ah":["ajE"]},"ap3":{"af":[],"v":[]},"a0r":{"af":[],"v":[]},"a0s":{"af":[],"v":[]},"afN":{"aw":[],"v":[]},"a_z":{"af":[],"v":[]},"aEj":{"ah":["ap3"]},"a1O":{"aw":[],"v":[]},"buG":{"aw":[],"v":[]},"blt":{"ah":["a0r"]},"blu":{"ah":["a0s"]},"R9":{"aw":[],"v":[]},"aBw":{"ah":["a_z"]},"apz":{"af":[],"v":[]},"blB":{"ah":["apz"]},"a7Q":{"aw":[],"v":[]},"ap2":{"af":[],"v":[]},"blr":{"ah":["ap2"]},"Ol":{"aw":[],"v":[]},"ark":{"aw":[],"v":[]},"Ot":{"af":[],"v":[]},"bmc":{"ah":["Ot"]},"aeE":{"aw":[],"v":[]},"aeD":{"aw":[],"v":[]},"aCf":{"af":[],"v":[]},"bhI":{"ah":["aCf"]},"b2i":{"aw":[],"v":[]},"aqI":{"af":[],"v":[]},"aF3":{"ah":["aqI"]},"arq":{"af":[],"v":[]},"aFj":{"ah":["arq"]},"WH":{"af":[],"v":[]},"Qw":{"af":[],"v":[]},"a1d":{"af":[],"v":[]},"a1c":{"af":[],"v":[]},"aFv":{"ah":["WH"]},"bd6":{"ah":["Qw"]},"aHs":{"ah":["a1d"]},"aHr":{"ah":["a1c"]},"WI":{"af":[],"v":[]},"aFx":{"ah":["WI"]},"arH":{"af":[],"v":[]},"ad8":{"aw":[],"v":[]},"ad0":{"aw":[],"v":[]},"aD7":{"af":[],"v":[]},"aFw":{"ah":["arH"]},"aD6":{"aw":[],"v":[]},"b1P":{"aw":[],"v":[]},"bjf":{"ah":["aD7"]},"arK":{"af":[],"v":[]},"aFy":{"ah":["arK"]},"a_Y":{"af":[],"v":[]},"aCy":{"ah":["a_Y"]},"asg":{"af":[],"v":[]},"aDj":{"af":[],"v":[]},"aDl":{"af":[],"v":[]},"aFU":{"ah":["asg"],"eC":[]},"aDk":{"aw":[],"v":[]},"bjZ":{"ah":["aDj"]},"bdC":{"aC":[]},"bdB":{"aC":[]},"bdA":{"aC":[]},"aDm":{"ah":["aDl"]},"bd_":{"aC":[]},"by6":{"aC":[]},"a0L":{"af":[],"v":[]},"aFI":{"ah":["a0L"]},"bsW":{"aC":[]},"atC":{"af":[],"v":[]},"aGu":{"ah":["atC"]}}'))
A.Dl(b.typeUniverse,JSON.parse('{"NX":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=A.at
return{dw:w("lN<u?>"),gS:w("oz"),o:w("d7"),g5:w("xG"),M:w("de<n>"),k:w("V"),gv:w("l9<ai<jq>>"),gh:w("l9<n>"),gH:w("l9<H>"),r:w("aB<~>"),dk:w("a0"),fw:w("O<oz>"),E:w("O<d7>"),V:w("O<ab>"),O:w("O<u>"),A:w("O<a0>"),R:w("O<nz>"),B:w("O<ai<H>>"),m:w("O<a9<n,n>>"),_:w("O<a9<n,@>>"),b:w("O<rR>"),x:w("O<rS>"),gi:w("O<jq>"),a:w("O<lY>"),Y:w("O<id>"),v:w("O<is>"),dA:w("O<JD>"),F:w("O<rY>"),Z:w("O<kG>"),g:w("O<fT>"),gK:w("O<+at,details,id(V,n,n)>"),C:w("O<cU>"),s:w("O<n>"),G:w("O<j4>"),eO:w("O<eo>"),d9:w("O<eZ>"),p:w("O<v>"),n:w("O<F>"),t:w("O<H>"),U:w("O<aC?>"),d4:w("O<n?>"),ck:w("ai<rR>"),e:w("ai<rS>"),ac:w("ai<jq>"),dZ:w("ai<lY>"),I:w("ai<id>"),j:w("ai<@>"),L:w("ai<H>"),eq:w("a9<n,n>"),P:w("a9<n,@>"),f:w("a9<@,@>"),cl:w("cM<n,D>"),aS:w("N<a0,tN>"),dc:w("N<JI,by>"),dv:w("N<n,n>"),bL:w("N<F,by>"),a3:w("N<H,by>"),gN:w("N<H,q5>"),w:w("iC"),b1:w("rR"),Q:w("rS"),bP:w("lY"),i:w("id"),u:w("is"),gp:w("WJ"),J:w("OK"),D:w("qe"),an:w("kG"),c:w("ct"),K:w("aE"),d:w("jG<n>"),di:w("+outcome,snapshot(Xn,a7b?)"),ee:w("+after,before(F,F)"),et:w("+categories,error,message,replaceId(ai<id>,n?,n?,n?)"),cz:w("FU"),bJ:w("ds<n>"),N:w("n"),e7:w("br<F>"),W:w("bA<n>"),am:w("k4<H>"),cc:w("Y<n>"),aM:w("ea<d7>"),bG:w("ea<F>"),l:w("v"),gm:w("ra"),ec:w("af1"),q:w("mC"),y:w("Q"),gR:w("F"),z:w("@"),S:w("H"),eG:w("d7?"),cJ:w("V?"),gw:w("ai<a9<n,@>>?"),bM:w("ai<@>?"),h:w("a9<n,@>?"),X:w("aE?"),gE:w("+code,qrPayload(n,n)?"),bY:w("+isLive,ownerEmail,snapshotJson(Q,n,n)?"),T:w("n?"),cD:w("F?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b4C=new A.be(B.bJ,B.iE,B.bJ,B.iE)
D.eY=new A.u(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,B.q)
D.b58=new A.ay(D.eY,1,B.r,-1)
D.b5a=new A.ay(B.ab,2,B.r,-1)
D.b5d=new A.ay(B.aV,2,B.r,-1)
D.b5f=new A.ay(B.cx,0.8,B.r,-1)
D.b5v=new A.ay(B.aQ,2,B.r,-1)
D.b5C=new A.ay(B.fe,1.6,B.r,-1)
D.b6r=new A.aY(0,330,0,1/0)
D.b6x=new A.aY(0,176,0,1/0)
D.b6y=new A.aY(0,1/0,0,260)
D.b6Q=new A.aY(90,1/0,0,1/0)
D.b9P=new A.ab(0,B.G,B.dx,B.J,4)
D.d6w=w([D.b9P],x.V)
D.b72=new A.p(B.c,null,null,null,D.d6w,null,B.a6)
D.d00=w([D.eY,B.b2],x.O)
D.cas=new A.a8(B.a7,B.aa,B.x,D.d00,null,null)
D.b7g=new A.p(null,null,null,null,null,D.cas,B.a6)
D.b7l=new A.p(B.b4,null,null,null,null,null,B.a6)
D.bl1=new A.u(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,B.q)
D.dni=w([U.agy,D.bl1],x.O)
D.c9z=new A.a8(B.b1,B.b7,B.x,D.dni,null,null)
D.b7C=new A.p(null,null,null,B.mE,null,D.c9z,B.n)
D.bt2=new A.u(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,B.q)
D.dzM=w([D.bt2,M.aj_],x.O)
D.c8M=new A.a8(B.b1,B.b7,B.x,D.dzM,null,null)
D.b82=new A.p(null,null,null,B.tW,null,D.c8M,B.n)
D.diU=w([B.aE,B.bE],x.O)
D.c9i=new A.a8(B.a7,B.aa,B.x,D.diU,null,null)
D.b88=new A.p(null,null,null,null,null,D.c9i,B.a6)
D.ftL=new A.G(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOm=new A.B("\ud83c\udf89",null,D.ftL,null,null,null,null,null,null,null,null,null)
D.bdV=new A.ci(B.A,null,null,D.fOm,null)
D.bfl=new A.u(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,B.q)
D.afF=new A.u(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,B.q)
D.bif=new A.u(1,0.8431372549019608,0.8,0.7843137254901961,B.q)
D.bij=new A.u(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,B.q)
D.pc=new A.u(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,B.q)
D.u6=new A.u(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,B.q)
D.agX=new A.u(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,B.q)
D.bkF=new A.u(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,B.q)
D.YP=new A.u(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,B.q)
D.ya=new A.u(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,B.q)
D.bmj=new A.u(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,B.q)
D.Zg=new A.u(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,B.q)
D.aiA=new A.u(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,B.q)
D.bqS=new A.u(1,0.9529411764705882,0.9411764705882353,1,B.q)
D.br0=new A.u(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,B.q)
D.aj3=new A.u(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,B.q)
D.ajn=new A.u(1,0,0.8392156862745098,0.30980392156862746,B.q)
D.bsw=new A.u(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,B.q)
D.bsD=new A.u(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,B.q)
D.btL=new A.u(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,B.q)
D.a_1=new A.u(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,B.q)
D.buU=new A.u(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,B.q)
D.bvu=new A.u(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,B.q)
D.a_g=new A.u(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,B.q)
D.bwl=new A.u(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,B.q)
D.akB=new A.a53(2,"active")
D.bAH=new A.bd(42e5)
D.bAK=new A.bd(53e4)
D.bAN=new A.bd(58e4)
D.bAR=new A.bd(82e4)
D.bBD=new A.R(0,30,0,30)
D.bBL=new A.R(0,4,0,8)
D.bBP=new A.R(0,8,12,8)
D.bCt=new A.R(12,0,12,88)
D.bCB=new A.R(12,11,12,10)
D.bD0=new A.R(13,10,12,10)
D.bDb=new A.R(14,10,14,2)
D.bDn=new A.R(14,14,10,14)
D.bDW=new A.R(16,12,16,96)
D.bE0=new A.R(16,14,16,8)
D.bE5=new A.R(16,16,16,96)
D.bE6=new A.R(16,18,16,16)
D.bEa=new A.R(16,4,16,10)
D.bF7=new A.R(18,6,18,40)
D.bFk=new A.R(20,10,20,20)
D.bFz=new A.R(20,18,20,18)
D.bFZ=new A.R(22,22,22,16)
D.bGE=new A.R(2,0,2,10)
D.bHo=new A.R(4,8,12,4)
D.bHC=new A.R(6,1,6,1)
D.bHE=new A.R(6,4,0,0)
D.bHK=new A.R(6,6,12,4)
D.bI6=new A.R(8,4,12,8)
D.fRX=new A.B("Activity",null,B.fE,null,null,null,null,null,null,null,null,null)
D.bK7=new A.by(1,B.bb,D.fRX,null)
D.h_B=new A.B("Game Receipts",null,A4.vE,null,null,null,null,null,null,null,null,null)
D.fJe=new A.B("Your last 59 games \xb7 kept for 7 days",null,O.abe,null,null,null,null,null,null,null,null,null)
D.cXm=w([D.h_B,D.fJe],x.p)
D.bxs=new A.fk(B.ah,B.e,B.j,B.E,null,B.p,null,0,D.cXm,null)
D.bKa=new A.by(1,B.bb,D.bxs,null)
D.bP2=new A.a0(58607,"MaterialIcons",!1)
D.a2l=new A.a0(62178,"MaterialIcons",!1)
D.bPT=new A.a0(62410,"MaterialIcons",!1)
D.bR0=new A.a0(63258,"MaterialIcons",!1)
D.bR5=new A.a0(63304,"MaterialIcons",!1)
D.bR6=new A.a0(63306,"MaterialIcons",!1)
D.bRc=new A.a0(63330,"MaterialIcons",!1)
D.ar5=new A.a0(984777,"MaterialIcons",!1)
D.bTE=new A.ae(B.Hk,13,B.ab,null,null,null)
D.bTM=new A.ae(B.jG,13,B.qq,null,null,null)
D.arh=new A.ae(B.lP,null,B.c,null,null,null)
D.bVl=new A.ae(B.CZ,34,B.av,null,null,null)
D.bVS=new A.ae(B.Hr,19,B.c,null,null,null)
D.bW1=new A.ae(B.apm,24,B.aQ,null,null,null)
D.bWu=new A.ae(B.CG,28,B.bn,null,null,null)
D.bWZ=new A.ae(B.aqK,42,B.c,null,null,null)
D.bX8=new A.ae(B.a3i,30,B.c,null,null,null)
D.bXN=new A.ae(B.fM,null,B.c,null,null,null)
D.bY7=new A.ae(B.jG,16,B.c,null,null,null)
D.bYO=new A.ae(B.t7,13,B.c,null,null,null)
D.bYX=new A.ae(B.lP,18,B.c,null,null,null)
D.bZv=new A.ae(B.wA,null,B.dQ,null,null,null)
D.c_b=new A.ae(B.oC,28,B.c,null,null,null)
D.c_r=new A.ae(B.oF,22,null,null,null,null)
D.c_Q=new A.ae(B.t5,null,null,null,null,null)
D.c01=new A.ae(B.hi,28,B.c,null,null,null)
D.c04=new A.ae(B.cB,null,B.aR,null,null,null)
D.c0d=new A.ae(B.a21,14,B.c,null,null,null)
D.c0N=new A.ae(B.Pv,36,B.aN,null,null,null)
D.c0U=new A.ae(B.oD,16,B.c,null,null,null)
D.c19=new A.ae(B.ee,null,null,null,null,null)
D.bls=new A.u(1,0.23137254901960785,0.16470588235294117,0,B.q)
D.c1J=new A.ae(B.ed,9,D.bls,null,null,null)
D.bS4=new A.a0(983146,"MaterialIcons",!1)
D.c2_=new A.ae(D.bS4,null,B.aQ,null,null,null)
D.c2y=new A.ae(B.uK,28,D.eY,null,null,null)
D.c2D=new A.ae(B.t1,null,B.fe,null,null,null)
D.c2I=new A.ae(B.hM,20,D.eY,null,null,null)
D.bSo=new A.a0(983377,"MaterialIcons",!1)
D.c2S=new A.ae(D.bSo,64,B.c,null,null,null)
D.c3o=new A.ae(B.hj,24,B.c,null,null,null)
D.c4k=new A.e6(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c4v=new A.e6(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c4K=new A.e6(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c4L=new A.e6(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bj8=new A.u(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,B.q)
D.bmJ=new A.u(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,B.q)
D.bmk=new A.u(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,B.q)
D.dnC=w([D.bj8,D.bmJ,D.bmk],x.O)
D.c6A=new A.a8(B.aA,B.aF,B.x,D.dnC,null,null)
D.dt5=w([B.bd,B.b2],x.O)
D.c6W=new A.a8(B.aA,B.aF,B.x,D.dt5,null,null)
D.bkV=new A.u(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,B.q)
D.brD=new A.u(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,B.q)
D.d77=w([D.bkV,D.brD],x.O)
D.c73=new A.a8(B.aA,B.aF,B.x,D.d77,null,null)
D.dph=w([B.br,B.a_,B.ea],x.O)
D.c79=new A.a8(B.aA,B.aF,B.x,D.dph,null,null)
D.c7b=new A.a8(B.a7,B.aa,B.x,F.ayA,null,null)
D.d6m=w([B.fe,B.ch],x.O)
D.at3=new A.a8(B.a7,B.aa,B.x,D.d6m,null,null)
D.d6O=w([B.fe,B.bE],x.O)
D.at4=new A.a8(B.a7,B.aa,B.x,D.d6O,null,null)
D.aCM=w([D.pc,B.aC,B.c4],x.O)
D.c7v=new A.a8(B.aA,B.aF,B.x,D.aCM,null,null)
D.boB=new A.u(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,B.q)
D.d4b=w([D.boB,E.afV,B.a_],x.O)
D.c7A=new A.a8(B.aA,B.aF,B.x,D.d4b,null,null)
D.b2A=new A.da(-0.8,-1)
D.b2C=new A.da(1.2,1)
D.d3h=w([B.c,B.eF,B.hx,B.c,B.fI,B.aG,B.oe],x.O)
D.doD=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.c7C=new A.a8(D.b2A,D.b2C,B.x,D.d3h,D.doD,null)
D.brv=new A.u(1,0,0.7607843137254902,0.26666666666666666,B.q)
D.boR=new A.u(1,0,0.6392156862745098,0.22745098039215686,B.q)
D.dnB=w([D.brv,D.boR],x.O)
D.c82=new A.a8(B.a7,B.aa,B.x,D.dnB,null,null)
D.c88=new A.a8(B.aA,B.aF,B.x,B.S5,null,null)
D.dhO=w([E.a_5,B.yd],x.O)
D.c8a=new A.a8(B.a7,B.aa,B.x,D.dhO,null,null)
D.dmi=w([B.he,B.fX],x.O)
D.at9=new A.a8(B.a7,B.aa,B.x,D.dmi,null,null)
D.dsC=w([B.b4,B.bQ],x.O)
D.ata=new A.a8(B.a7,B.aa,B.x,D.dsC,null,null)
D.cOB=w([B.da,B.fo],x.O)
D.c8O=new A.a8(B.aA,B.aF,B.x,D.cOB,null,null)
D.d2d=w([B.c,B.b9],x.O)
D.c8Y=new A.a8(B.a7,B.aa,B.x,D.d2d,null,null)
D.ai3=new A.u(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,B.q)
D.bi_=new A.u(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,B.q)
D.deh=w([D.ai3,B.jC,B.ry,B.aC,D.bi_],x.O)
D.cbv=w([0,0.28,0.55,0.82,1],x.n)
D.c8Z=new A.a8(B.aA,B.aF,B.x,D.deh,D.cbv,null)
D.c95=new A.a8(B.a7,B.aa,B.x,B.SL,null,null)
D.c96=new A.a8(B.a7,B.aa,B.x,F.aB5,null,null)
D.c9a=new A.a8(B.a7,B.aa,B.x,D.aCM,null,null)
D.d8j=w([B.bE,B.fe],x.O)
D.c9o=new A.a8(B.a7,B.aa,B.x,D.d8j,null,null)
D.dx_=w([B.aE,B.bE,B.b9],x.O)
D.c9q=new A.a8(B.a7,B.aa,B.x,D.dx_,null,null)
D.dhZ=w([B.av,B.bL,B.fq],x.O)
D.c9u=new A.a8(B.a7,B.aa,B.x,D.dhZ,null,null)
D.dwJ=w([B.br,B.aM,B.bN,B.bl,B.aS,B.cx,B.an],x.O)
D.dcl=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.c9y=new A.a8(B.aA,B.aF,B.x,D.dwJ,D.dcl,null)
D.c9I=new A.a8(B.aA,B.aF,B.x,B.a4O,null,null)
D.diA=w([D.YP,B.e0],x.O)
D.c9R=new A.a8(B.a7,B.aa,B.x,D.diA,null,null)
D.dqK=w([D.aj3,D.agX,B.a_],x.O)
D.ca_=new A.a8(B.aA,B.aF,B.x,D.dqK,null,null)
D.buf=new A.u(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,B.q)
D.d2N=w([B.eX,B.he,D.buf],x.O)
D.cau=new A.a8(B.aA,B.aF,B.x,D.d2N,null,null)
D.d8S=w([D.pc,B.aC],x.O)
D.caw=new A.a8(B.aA,B.aF,B.x,D.d8S,null,null)
D.caY=w([G.D3,B.oC,B.jG,B.i3,B.jL,B.ln,B.kX,B.tb,B.oB,B.f0,B.ll,B.zh,B.Hx],x.A)
D.cep=w([10,50,100,200],x.t)
D.coa=w([1,3,5,7],x.t)
D.ct9=w([25,50,100,250],x.t)
D.bS_=new A.a0(983104,"MaterialIcons",!1)
D.cBQ=w([B.oC,B.ml,B.oF,B.lM,B.hz,B.wG,D.bS_,B.a3d],x.A)
D.cHg=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cTC=w([0,0.22,0.5,0.78,1],x.n)
D.cXw=w([8,13,19],x.n)
D.a57=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.fQX=new A.B("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.eyU=new A.jG("questions",48,D.fQX,null,x.d)
D.fGp=new A.B("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.eyZ=new A.jG("edit",48,D.fGp,null,x.d)
D.fZ8=new A.B("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.ez4=new A.jG("delete",48,D.fZ8,null,x.d)
D.cXG=w([D.eyU,D.eyZ,D.ez4],A.at("O<pD<n>>"))
D.d70=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.d7f=w([B.bU,B.eZ],x.O)
D.a7Z=new C.lY("text","",null,null)
D.d8v=w([D.a7Z],x.a)
D.d9Y=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.eTT=new A.afo(B.lN,"Home")
D.eKr=new A.afo(B.qR,"Growth")
D.ePc=new A.afo(B.jG,"Wallet")
D.dcC=w([D.eTT,D.eKr,D.ePc],A.at("O<+icon,label(a0,n)>"))
D.dd2=w([4,0,2,6,8,1,3,5,7],x.t)
D.dda=w([B.c,B.cd,B.cx],x.O)
D.dX8=new C.rY("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.dXb=new C.rY("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.dX9=new C.rY("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.dX3=new C.rY("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.dX4=new C.rY("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.dXc=new C.rY("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a5E=w([D.dX8,D.dXb,D.dX9,D.dX3,D.dX4,D.dXc],x.F)
D.a5J=w([B.ay,B.bd,B.d7,B.av],x.O)
D.blG=new A.u(1,1,0.8980392156862745,0.4,B.q)
D.diG=w([B.Yn,D.blG,B.ry,B.iw,B.jC],x.O)
D.a5Q=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.Se=w(["checkers_deluxe","tic_tac_go"],x.s)
D.cC5=w([3,4,5],x.t)
D.cPd=w([6,7,8],x.t)
D.cb2=w([0,3,6],x.t)
D.cof=w([1,4,7],x.t)
D.cvF=w([2,5,8],x.t)
D.cb7=w([0,4,8],x.t)
D.cvC=w([2,4,6],x.t)
D.dlh=w([X.atz,D.cC5,D.cPd,D.cb2,D.cof,D.cvF,D.cb7,D.cvC],x.B)
D.aKW=new C.JI(0,"abab")
D.dX1=new C.JI(1,"aaaBbb")
D.aKX=new C.JI(2,"aabb")
D.dmn=w([D.aKW,D.dX1,D.aKX],A.at("O<JI>"))
D.dmF=w([],x.a)
D.aBY=w([],x.v)
D.dqC=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.Sz=w([1,2,3,-1,-2],x.t)
D.dzx=w([B.j4,B.aE],x.O)
D.hvw=new C.ra("dice","Dice Roll","Roll for cash & prizes!",B.ox,D.dzx)
D.hvt=new C.ra("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",B.uR,B.aAD)
D.dtu=w([B.d0,B.bn],x.O)
D.hvr=new C.ra("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",B.a2Z,D.dtu)
D.dyY=w([B.dO,B.nu],x.O)
D.hvx=new C.ra("memory","Memory Match","Match pairs \u2014 solo or multiplayer",B.a3d,D.dyY)
D.cnV=w([B.jX,B.qn],x.O)
D.hvu=new C.ra("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",F.a2M,D.cnV)
D.dqB=w([M.lF,D.Zg],x.O)
D.hvs=new C.ra("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",B.HA,D.dqB)
D.hvv=new C.ra("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",B.cB,Ap.nM)
D.dsB=w([D.hvw,D.hvt,D.hvr,D.hvx,D.hvu,D.hvs,D.hvv],A.at("O<ra>"))
D.du6=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.bqB=new A.u(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,B.q)
D.bqs=new A.u(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,B.q)
D.ajV=new A.u(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,B.q)
D.duV=w([D.bqB,D.bqs,D.ajV],x.O)
D.bsY=new A.u(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,B.q)
D.duX=w([B.afU,D.bsY,D.ajV],x.O)
D.dvC=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.aD8=w([D.pc,B.c,D.eY,B.bT,B.aZ,B.aC],x.O)
D.dX6=new C.rY("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.dX5=new C.rY("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.dX2=new C.rY("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.dXa=new C.rY("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.dXd=new C.rY("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.dX7=new C.rY("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a6z=w([D.dX6,D.dX5,D.dX2,D.dXa,D.dXd,D.dX7],x.F)
D.dzc=w([B.ch,B.qn],x.O)
D.eli={checkers_deluxe:0,tic_tac_go:1}
D.aIW=new A.bu(D.eli,["Checkers Deluxe","Tic Tac Go"],A.at("bu<n,n>"))
D.ekj={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aJ7=new A.bu(D.ekj,[1,2,3,4,5,6,7],A.at("bu<n,H>"))
D.dPW=new C.a7Q(null)
D.dTn=new C.lY("signature","NGMY Support Team",null,null)
D.dTo=new C.lY("divider","",null,null)
D.Tv=new C.WJ(!1,!1,!1,!1)
D.Tx=new C.OK(!1,!1,!1,!1)
D.dUw=new C.OK(!0,!0,!1,!1)
D.DY=new C.asu(0,"swahili")
D.aKV=new C.asu(1,"english")
D.DZ=new C.asu(2,"mix")
D.dkG=w([B.hc,B.ic,B.d3],x.O)
D.bQN=new A.a0(63118,"MaterialIcons",!1)
D.dYe=new C.pw(D.dkG,B.fz,B.av,"BACKGAMMON","\ud83c\udfb2",D.bQN)
D.bSM=new A.a0(983637,"MaterialIcons",!1)
D.dYf=new C.pw(Am.aDo,B.bd,B.et,"EURO WHEEL","\ud83c\udfa1",D.bSM)
D.duq=w([B.a_,B.aM,B.bw],x.O)
D.dYg=new C.pw(D.duq,B.aS,B.an,"ROYALE","\u265f\ufe0f",F.a2M)
D.d6r=w([B.da,B.bn,B.dN],x.O)
D.dYh=new C.pw(D.d6r,B.ay,B.d7,"CONNECT 4","\ud83d\udd34",B.a3s)
D.doV=w([B.dB,B.fo,B.qn],x.O)
D.dYi=new C.pw(D.doV,B.w6,B.ch,"PUNTO BANCO","\ud83d\udc8e",B.ml)
D.cOD=w([B.od,B.iH,B.m5],x.O)
D.dYj=new C.pw(D.cOD,B.jz,B.ks,"DOMINOES","\ud83c\udc53",B.aqL)
D.dv9=w([B.yk,B.rD,B.hF],x.O)
D.dYk=new C.pw(D.dv9,B.C1,B.hr,"WAR","\u2694\ufe0f",A6.a2H)
D.dYl=new C.pw(B.aDi,B.aQ,B.an,"PREMIUM","\ud83c\udfae",B.ox)
D.d8k=w([B.kp,B.aE,B.dO],x.O)
D.dYm=new C.pw(D.d8k,B.dC,B.fe,"JACKPOT","\ud83c\udfb0",B.ox)
D.dnU=w([B.ko,B.kM,B.bE],x.O)
D.dYn=new C.pw(D.dnU,B.qb,B.bT,"LIVE BINGO","\ud83c\udfb1",B.zb)
D.d_Z=w([B.ic,B.e0,B.av],x.O)
D.bQe=new A.a0(62865,"MaterialIcons",!1)
D.dYo=new C.pw(D.d_Z,B.uj,B.aQ,"BIG SPIN","\ud83c\udfa1",D.bQe)
D.dYp=new C.pw(B.a6v,B.bl,B.bd,"HOLD'EM","\u2660\ufe0f",B.jG)
D.dvB=w([B.eX,B.fX,B.b2],x.O)
D.bPn=new A.a0(61234,"MaterialIcons",!1)
D.dYq=new C.pw(D.dvB,B.m6,B.aV,"CRAPS","\ud83c\udfb2",D.bPn)
D.d5G=w([B.eZ,B.jj,B.bU],x.O)
D.dYr=new C.pw(D.d5G,B.bL,B.b9,"PLINKO","\ud83d\udc8e",Aq.Pw)
D.bSw=new A.a0(983492,"MaterialIcons",!1)
D.dYs=new C.pw(B.a6v,B.es,B.bd,"SNOOKER","\ud83c\udfb1",D.bSw)
D.dt_=w([B.eX,B.fX,B.aV],x.O)
D.dYt=new C.pw(D.dt_,B.uc,B.bx,"PROFIT LAB","\ud83d\udcb0",B.hM)
D.dtm=w([B.ea,B.er,B.bd],x.O)
D.bRb=new A.a0(63324,"MaterialIcons",!1)
D.dYu=new C.pw(D.dtm,B.wa,B.b4,"KLONDIKE","\ud83c\udccf",D.bRb)
D.dlq=w([B.bB,B.br,B.a_],x.O)
D.dYv=new C.pw(D.dlq,B.aQ,B.aM,"VEGAS TABLE","\ud83c\udccf",A2.HO)
D.qZ=new C.Ft(0,"continueGame")
D.r_=new C.Ft(1,"youWin")
D.Jh=new C.Ft(2,"youLose")
D.TG=new C.Ft(3,"draw")
D.aL9=new C.Xn(0,"found")
D.egi=new C.Xn(1,"foundLive")
D.a8f=new C.Xn(2,"notFound")
D.aLa=new C.Xn(3,"wrongAccount")
D.eoE=new A.o(4,12)
D.esc=new A.D(B.yF,B.tZ,null)
D.bH2=new A.R(4,0,0,3)
D.fqS=new A.G(!0,B.aN,null,null,null,null,10,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2H=new A.B("NGMY Helper",null,D.fqS,null,null,null,null,null,null,null,null,null)
D.est=new A.D(D.bH2,D.h2H,null)
D.bR4=new A.a0(63284,"MaterialIcons",!1)
D.bWh=new A.ae(D.bR4,18,B.pe,null,null,null)
D.fvO=new A.G(!0,B.pe,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKp=new A.B("Continue",null,D.fvO,null,null,null,null,null,null,null,null,null)
D.dnc=w([D.bWh,B.bo,D.fKp],x.p)
D.fah=new A.c8(B.aL,B.e,B.P,B.l,null,B.p,null,0,D.dnc,null)
D.esw=new A.D(B.hK,D.fah,null)
D.esM=new A.D(B.bV,B.tZ,null)
D.bqa=new A.u(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,B.q)
D.djn=w([B.he,B.fX,B.cJ,D.bqa],x.O)
D.c9B=new A.a8(B.aA,B.aF,B.x,D.djn,B.In,null)
D.b8b=new A.p(null,null,null,null,null,D.c9B,B.n)
D.byI=new A.bN(D.b8b,B.bj,null,null)
D.ezk=new A.cK(0,0,0,0,null,null,D.byI,null)
D.bY3=new A.ae(B.wz,11,B.c,null,null,null)
D.ezo=new A.cK(10,12,null,null,null,null,D.bY3,null)
D.cTs=w([B.hu,B.ea,B.lg],x.O)
D.eA_=new A.bY(B.Ff,1.1,B.x,null,0,D.cTs,null,null)
D.brQ=new A.u(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,B.q)
D.blc=new A.u(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,B.q)
D.bnk=new A.u(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,B.q)
D.dgN=w([D.brQ,D.blc,D.bnk],x.O)
D.eA7=new A.bY(B.ads,1.05,B.x,null,0,D.dgN,null,null)
D.eAt=new A.bY(B.A,0.5,B.x,null,0,Ai.a5n,null,null)
D.f89=new A.a1(-18,0,18,1)
D.f8I=new A.a1(-3,-5,3,5)
D.bWI=new A.ae(B.ee,16,D.eY,null,null,null)
D.aWL=new A.G(!0,D.eY,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0e=new A.B("Screenshot added \xb7 tap to change",null,D.aWL,null,null,null,null,null,null,null,null,null)
D.d3k=w([D.bWI,B.bo,D.h0e],x.p)
D.f9D=new A.c8(B.aL,B.ba,B.j,B.l,null,B.p,null,0,D.d3k,null)
D.c_M=new A.ae(B.oA,15,D.eY,null,null,null)
D.fZ2=new A.B("Refresh",null,D.aWL,null,null,null,null,null,null,null,null,null)
D.d5Q=w([D.c_M,B.dh,D.fZ2],x.p)
D.f9F=new A.c8(B.aL,B.e,B.P,B.l,null,B.p,null,0,D.d5Q,null)
D.ekF={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.fbT=new A.de(D.ekF,3,x.M)
D.ekt={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.fc5=new A.de(D.ekt,36,x.M)
D.ekw={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.fcj=new A.de(D.ekw,6,x.M)
D.em2={memory:0,typing:1,scramble:2,pattern:3}
D.nb=new A.de(D.em2,4,x.M)
D.feX=new A.av(276,276)
D.ffF=new A.a5(13,null,null,null)
D.beB=new A.fj(2.6,null,null,null,null,B.aQ,null,null,null,null)
D.ffR=new A.a5(26,26,D.beB,null)
D.fgL=new A.hG(8,0,0,1,null)
D.h1p=new A.B("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aU8=new A.b1(D.h1p,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fFq=new A.B("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.fjM=new A.b1(D.fFq,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fGB=new A.B("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.fjS=new A.b1(D.fGB,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fZd=new A.B("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.fkw=new A.b1(D.fZd,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.br2=new A.u(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,B.q)
D.fuH=new A.G(!0,D.br2,null,null,null,null,9,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnK=new A.eo("$",null,null,B.cN,null,null,null,null,null,null,D.fuH)
D.fo_=new A.G(!0,B.a_,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foi=new A.G(!0,B.c,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foo=new A.G(!0,B.br,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foQ=new A.G(!0,B.a_,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp1=new A.G(!0,B.c,null,null,null,null,19,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp9=new A.G(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpi=new A.G(!0,B.aQ,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpk=new A.G(!0,null,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq5=new A.G(!0,B.aQ,null,null,null,null,28,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqH=new A.G(!0,D.eY,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqJ=new A.G(!0,B.bL,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frA=new A.G(!0,E.BX,null,null,null,null,13,B.U,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVr=new A.G(!0,B.c,null,null,null,null,20,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftc=new A.G(!0,B.bL,null,null,null,null,11.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftx=new A.G(!0,B.ab,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,B.aH,null,null,null,null,null,null,null,null)
D.ftR=new A.G(!0,B.ab,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuZ=new A.G(!0,B.c,null,null,null,null,11,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvd=new A.G(!0,B.c,null,null,null,null,14,B.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvp=new A.G(!0,B.c,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,B.aH,null,null,null,null,null,null,null,null)
D.fvW=new A.G(!0,B.ja,null,null,null,null,10.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bjy=new A.u(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,B.q)
D.fwe=new A.G(!0,D.bjy,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxJ=new A.G(!0,B.ay,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy7=new A.G(!0,D.ai3,null,null,null,null,9,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWa=new A.G(!0,E.BX,null,null,null,null,11,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fys=new A.G(!0,B.er,null,null,null,null,52,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyt=new A.G(!0,B.bw,null,null,null,null,7,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyM=new A.G(!0,E.BX,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.xl=new A.G(!0,B.c,null,null,null,null,13,B.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bom=new A.u(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,B.q)
D.fz0=new A.G(!0,D.bom,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzC=new A.G(!0,B.Ta,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAI=new A.G(!0,B.c,null,null,null,null,38,B.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAP=new A.G(!0,B.id,null,null,null,null,11,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAT=new A.G(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWv=new A.G(!0,B.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBo=new A.G(!0,B.a_,null,null,null,null,10,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBt=new A.G(!0,B.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCq=new A.G(!0,B.a_,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCQ=new A.G(!0,B.ab,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD6=new A.G(!0,B.b4,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDB=new A.G(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDF=new A.G(!0,B.a_,null,null,null,null,11,B.U,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fED=new A.B("Value per pair",null,B.ho,null,null,null,null,null,null,null,null,null)
D.fEF=new A.B("Restore now",null,B.ci,null,null,null,null,null,null,null,null,null)
D.fFd=new A.B("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aVV=new A.G(!0,B.cz,null,null,null,null,12,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFm=new A.B("AVAILABLE PLANS",null,D.aVV,null,null,null,null,null,null,null,null,null)
D.fFo=new A.B("I understand",null,B.cG,null,null,null,null,null,null,null,null,null)
D.fG_=new A.B("Go Back",null,B.cG,null,null,null,null,null,null,null,null,null)
D.frp=new A.G(!0,B.bw,null,null,null,null,8,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGI=new A.B("PLAN VALUE",null,D.frp,null,null,null,null,null,null,null,null,null)
D.fGL=new A.B("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.fH7=new A.B("Deposit",null,B.VT,null,null,null,null,null,null,null,null,null)
D.fBL=new A.G(!0,B.dC,null,null,null,null,null,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI7=new A.B("JACKPOT SLOTS",null,D.fBL,null,null,null,null,null,null,null,null,null)
D.fIq=new A.B("Restore",null,B.ci,null,null,null,null,null,null,null,null,null)
D.frv=new A.G(!0,B.c,null,null,null,null,12,B.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIu=new A.B("YOUR NUMBER",null,D.frv,null,null,null,null,null,null,null,null,null)
D.fIK=new A.B("SPIN REELS",null,F.ab8,null,null,null,null,null,null,null,null,null)
D.fJd=new A.B("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.fJL=new A.B("Perfect Score Profit",null,B.ho,null,null,null,null,null,null,null,null,null)
D.fKn=new A.B("Join room",null,B.iF,null,null,null,null,null,null,null,null,null)
D.fMz=new A.B("Add payment screenshot",null,B.jd,null,null,null,null,null,null,null,null,null)
D.fMP=new A.B("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.fAX=new A.G(!0,B.aQ,null,null,null,null,11,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNg=new A.B("INVITE A PLAYER",null,D.fAX,null,null,null,null,null,null,null,null,null)
D.fA0=new A.G(!0,B.Yn,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNK=new A.B("NGMY GOLD LEADER",null,D.fA0,null,null,null,null,null,null,null,null,null)
D.fOg=new A.B("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.fOH=new A.B("Invest & Play",null,B.nf,null,null,null,null,null,null,null,null,null)
D.aVP=new A.G(!0,D.ya,null,null,null,null,8,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fP8=new A.B("VALID THRU",null,D.aVP,null,null,null,null,null,null,null,null,null)
D.aWx=new A.G(!0,B.aD,null,null,null,null,11,B.I,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPg=new A.B("DEALER",null,D.aWx,null,null,null,null,null,null,null,null,null)
D.fPn=new A.B("CARDHOLDER",null,D.aVP,null,null,null,null,null,null,null,null,null)
D.fzt=new A.G(!0,B.bl,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQ6=new A.B("NGMY PLATINUM",null,D.fzt,null,null,null,null,null,null,null,null,null)
D.fCX=new A.G(!0,B.qq,null,null,null,null,10,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQS=new A.B("EARNED SO FAR",null,D.fCX,null,null,null,null,null,null,null,null,null)
D.fRr=new A.B("VS",null,B.aVJ,null,null,null,null,null,null,null,null,null)
D.fRR=new A.B("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.fSd=new A.B("One day left",null,B.ab0,null,B.K,null,null,null,null,null,null,null)
D.fSz=new A.B("Keep typing \u2014 mistakes are counted in your payout",null,B.EF,null,null,null,null,null,null,null,null,null)
D.fSA=new A.B("Multiplayer invite",null,B.iF,null,null,null,null,null,null,null,null,null)
D.fSM=new A.B("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.fpS=new A.G(!0,B.Ta,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSS=new A.B("\ud83d\udcb0 Partial Payout System",null,D.fpS,null,null,null,null,null,null,null,null,null)
D.fT2=new A.B("Browse Topics",null,B.fb,null,null,null,null,null,null,null,null,null)
D.foN=new A.G(!0,B.c,null,null,null,null,22,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTj=new A.B("Investment Required",null,D.foN,null,B.K,null,null,null,null,null,null,null)
D.fUS=new A.B("Network Status",null,B.aV4,null,null,null,null,null,null,null,null,null)
D.aVb=new A.G(!0,B.ab,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVu=new A.B("Their account email",null,D.aVb,null,null,null,null,null,null,null,null,null)
D.fVO=new A.B("Verification code",null,B.cG,null,null,null,null,null,null,null,null,null)
D.fVP=new A.B("Category",null,null,null,null,null,null,null,null,null,null,null)
D.fW4=new A.B("ACTIVE ASSET",null,D.aVV,null,null,null,null,null,null,null,null,null)
D.fWs=new A.B("Scan QR",null,B.cG,null,null,null,null,null,null,null,null,null)
D.fWx=new A.B("Check word",null,B.cG,null,null,null,null,null,null,null,null,null)
D.fWY=new A.B("YOUR HAND",null,D.aWx,null,null,null,null,null,null,null,null,null)
D.fXy=new A.B("NGMY Music Studio",null,B.jP,null,null,null,null,null,null,null,null,null)
D.fXB=new A.B("I sent it \u2014 submit deposit",null,B.nf,null,null,null,null,null,null,null,null,null)
D.fYq=new A.B("Back",null,B.AL,null,null,null,null,null,null,null,null,null)
D.fDR=new A.G(!0,null,null,null,null,null,null,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYy=new A.B("DEAL / PLAY ROUND",null,D.fDR,null,null,null,null,null,null,null,null,null)
D.fYL=new A.B("Got it \u2014 keep chatting",null,B.ci,null,null,null,null,null,null,null,null,null)
D.fYV=new A.B("3 Messages Left",null,B.aWm,null,null,null,null,null,null,null,null,null)
D.fZs=new A.B("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.fZB=new A.B("Copy",null,B.cG,null,null,null,null,null,null,null,null,null)
D.fZY=new A.B("How many games?",null,D.aVb,null,null,null,null,null,null,null,null,null)
D.fyU=new A.G(!0,B.aD,null,null,null,null,null,B.U,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_9=new A.B("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.fyU,null,B.K,null,null,null,null,null,null,null)
D.h0G=new A.B("Question",null,null,null,null,null,null,null,null,null,null,null)
D.h0V=new A.B("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.fEg=new A.G(!0,B.c,null,null,null,null,12.5,B.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2z=new A.B("NGMY  WALLET",null,D.fEg,null,null,null,null,null,null,null,null,null)
D.h2A=new A.B("Select Your Bet",null,B.h1,null,null,null,null,null,null,null,null,null)
D.hrv=new A.bA("history",x.W)
D.hrM=new A.bA("ngmy_local_home",x.W)
D.hrN=new A.bA("ngmy_local_invest",x.W)
D.hrO=new A.bA("ngmy_local_wallet",x.W)
D.hve=new C.a_z(null)
D.b0D=new C.aD8(0,"grid")
D.b0E=new C.aD8(1,"questions")
D.hwR=new C.aD8(2,"answer")
D.hyQ=new C.a0s(null)})();(function staticFields(){$.h93=A.aR(x.N)
$.hA0=A.T(x.N,x.k)
$.heU=null
$.heF=A.T(x.N,A.at("Gi"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iAp","bGR",()=>C.ihe())
w($,"iAb","hIG",()=>{var v=null,u=A.fq(v,B.cs,v,v,v,D.fnK,B.a5,B.bX,v,B.dD,B.bY)
u.e5()
return u})})()};
(a=>{a["pt82mw3PSJtEgHdhKAVyS1yCW0Y="]=a.current})($__dart_deferred_initializers__);