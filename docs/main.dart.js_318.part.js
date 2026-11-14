((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,K,A1,L,P,A2,E,M,A3,A4,Q,A5,R,N,A6,A7,S,A8,A9,T,Aa,U,Ab,Ac,Ad,Ae,V,G,W,Af,C={
hsG(d,e,f){var w=null,v=f.k("GP<0>"),u=new A.GP(w,w,w,w,v)
$.vU()
u.d=new C.cAm(new A.vr(),e,u,f,d)
return new A.hY(u,v.k("hY<1>"))},
cAm:function cAm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cAn:function cAn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cAj:function cAj(d){this.a=d},
cAk:function cAk(d,e){this.a=d
this.b=e},
cAl:function cAl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cAi:function cAi(d,e,f){this.a=d
this.b=e
this.c=f},
btS:function btS(d){this.a=d},
hsF(d,e,f,g){return new C.axl(d,e,f,null,g.k("axl<0>"))},
G0:function G0(){},
aJP:function aJP(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
fbZ:function fbZ(d){this.a=d},
fbY:function fbY(d,e){this.a=d
this.b=e},
fc0:function fc0(d){this.a=d},
fbW:function fbW(d,e,f){this.a=d
this.b=e
this.c=f},
fc_:function fc_(d){this.a=d},
fbX:function fbX(d){this.a=d},
axl:function axl(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
ikj(d){var w=B.a.i(d)
while(B.a.a0(w,"$"))w=B.a.i(B.a.b2(w,1))
return w},
hDh(d){var w=C.ikj(d)
if(w.length===0)return""
return"$"+w},
fLm(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fLm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:i=B.a.i(d.toLowerCase())
if(i.length===0){w=1
break}t=new A.V(Date.now(),0,!1).bR(-6048e8)
s=e.length,r=0
case 3:if(!(r<e.length)){w=5
break}q=e[r]
if(B.a.i(q.b.toLowerCase())!==i){w=4
break}p=q.y
o=p.a
if(o>=t.gbq())o=o===t.gbq()&&p.b<t.gcC()
else o=!0
if(o){w=4
break}if(q.x!==B.cv){w=4
break}if(q.d!==B.h0){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!A.cS(m,"game payout:",0))if(!A.cS(m,"game partial:",0)){if(!A.cS(m,"multiplayer payout:",0))o=A.cS(m,"dice",0)&&q.e===B.fu
else o=l
l=o}if(!l){w=4
break}if(A.cS(m,"game payout:",0))k=B.a.i(B.a.b2(n,B.a.co(m,"game payout:")+12))
else if(A.cS(m,"game partial:",0)){k=B.a.i(B.a.b2(n,B.a.co(m,"game partial:")+13))
j=B.a.co(k,"(")
if(j>0)k=B.a.i(B.a.aC(k,0,j))}else if(A.cS(m,"multiplayer payout:",0)){k=B.a.i(B.a.b2(n,B.a.co(m,"multiplayer payout:")+19))
j=B.a.co(k,"(")
if(j>0)k=B.a.i(B.a.aC(k,0,j))}else k=A.cS(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return A.b(C.va(q.c,p,n,d,o,null,q.a,!0),$async$fLm)
case 6:case 4:e.length===s||(0,A.J)(e),++r
w=3
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$fLm,v)},
ip0(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
ilm(d,e,f){return B.d.aV(e,new C.fP4(f,B.a.i(d.toLowerCase())))},
fOW(d){var w
C.hoT(d)
w=d.c9
return A.bq(new A.N(w,new C.fOX(),A.U(w).k("N<1,@>")),!0,x.N)},
iaJ(d,e,f){var w,v,u,t,s,r,q=null,p=B.c_,o=B.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aW.toString
u=$.ej().giK().b
if(u.a===0)t=1
else{new A.b8(u,A.a4(u).k("b8<2>")).gH(0)
u=$.lJ()
s=u.d
t=s==null?u.ghD():s}w=B.j.cL(f*t)
v=new C.fvs(f)
if(J.d4(n,"data:image"))try{u=A.fR(B.cI.aN(B.d.gan(J.lM(n,","))),B.A,w,new C.fvp(v),B.hf,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.d4(n,"supabase://"))return new A.l8(A.a2L(n),new C.fvq(f,e,p,w,v),q,q,x.gh)
return A.kD(n,B.A,w,new C.fvr(v),B.hf,p,!0,e,q,q,f)},
hd0(d,e){return new A.a5(e,e,A.hU(C.iaJ(d,e,e),B.aq),null)},
i2r(){var w,v,u=A.a([],x._),t=x.N,s=A.C(D.drC,x.gm)
for(w=0;w<36;++w){v=B.Du[w]
s.push(new C.r9(v.a,v.b,v.c,v.e,v.f))}return new C.aC3(u,A.T(t,t),s)},
fP4:function fP4(d,e){this.a=d
this.b=e},
fOX:function fOX(){},
fvs:function fvs(d){this.a=d},
fvp:function fvp(d){this.a=d},
fvq:function fvq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fvo:function fvo(d){this.a=d},
fvr:function fvr(d){this.a=d},
amx:function amx(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
r9:function r9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
aC3:function aC3(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
djX:function djX(d,e){this.a=d
this.b=e},
dk7:function dk7(d,e){this.a=d
this.b=e},
dkp:function dkp(){},
dkq:function dkq(d){this.a=d},
dkf:function dkf(d,e){this.a=d
this.b=e},
dke:function dke(){},
dkg:function dkg(d){this.a=d},
dkd:function dkd(){},
dki:function dki(d){this.a=d},
dkh:function dkh(){},
dka:function dka(d){this.a=d},
dk8:function dk8(d){this.a=d},
dk9:function dk9(d){this.a=d},
dkb:function dkb(d){this.a=d},
dkc:function dkc(d){this.a=d},
dk2:function dk2(d,e){this.a=d
this.b=e},
dk3:function dk3(d,e){this.a=d
this.b=e},
dk0:function dk0(d){this.a=d},
dk1:function dk1(d){this.a=d},
dk4:function dk4(d){this.a=d},
dk5:function dk5(d){this.a=d},
dk6:function dk6(d,e,f){this.a=d
this.b=e
this.c=f},
dk_:function dk_(d,e){this.a=d
this.b=e},
djZ:function djZ(d,e){this.a=d
this.b=e},
djY:function djY(d,e){this.a=d
this.b=e},
dko:function dko(d){this.a=d},
dkm:function dkm(d,e,f){this.a=d
this.b=e
this.c=f},
dkl:function dkl(d,e,f){this.a=d
this.b=e
this.c=f},
dkk:function dkk(d,e){this.a=d
this.b=e},
dkj:function dkj(){},
dkn:function dkn(d){this.a=d},
aET:function aET(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
blH:function blH(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
dYi:function dYi(d){this.a=d},
dYh:function dYh(d){this.a=d},
dYj:function dYj(d){this.a=d},
dYg:function dYg(){},
dYk:function dYk(d,e){this.a=d
this.b=e},
dYf:function dYf(d){this.a=d},
dYl:function dYl(d){this.a=d},
amw:function amw(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aC2:function aC2(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
djR:function djR(d){this.a=d},
djU:function djU(d){this.a=d},
djV:function djV(d){this.a=d},
djW:function djW(d){this.a=d},
djT:function djT(d,e){this.a=d
this.b=e},
djS:function djS(d,e){this.a=d
this.b=e},
amy:function amy(d,e,f,g,h,i,j,k,l,m){var _=this
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
aC4:function aC4(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.a_=_.bb=_.bn=_.y2=_.y1=0
_.aH=_.aR=_.aL=_.aG=$
_.bK=_.bf=_.b6=_.b8=null
_.aP=!1
_.bH=_.bm=null
_.c9=!1
_.cj=_.cP=""
_.c=_.a=_.bF=null},
dlJ:function dlJ(d,e){this.a=d
this.b=e},
dlM:function dlM(d){this.a=d},
dlN:function dlN(d){this.a=d},
dlO:function dlO(d){this.a=d},
dlP:function dlP(d){this.a=d},
dlQ:function dlQ(d){this.a=d},
dlK:function dlK(d){this.a=d},
dlL:function dlL(d){this.a=d},
dkZ:function dkZ(d,e){this.a=d
this.b=e},
dl_:function dl_(d,e){this.a=d
this.b=e},
dls:function dls(d){this.a=d},
dlt:function dlt(){},
dle:function dle(d,e,f){this.a=d
this.b=e
this.c=f},
dlf:function dlf(d){this.a=d},
dlg:function dlg(d,e,f){this.a=d
this.b=e
this.c=f},
dlh:function dlh(d,e){this.a=d
this.b=e},
dli:function dli(){},
dkr:function dkr(d){this.a=d},
dkY:function dkY(d,e){this.a=d
this.b=e},
dlu:function dlu(){},
dlD:function dlD(){},
dlr:function dlr(d){this.a=d},
dlq:function dlq(d){this.a=d},
dkW:function dkW(d){this.a=d},
dkX:function dkX(){},
dly:function dly(){},
dlz:function dlz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dlA:function dlA(d,e,f){this.a=d
this.b=e
this.c=f},
dks:function dks(){},
dkt:function dkt(d){this.a=d},
dku:function dku(){},
dl7:function dl7(d,e){this.a=d
this.b=e},
dl8:function dl8(d,e,f){this.a=d
this.b=e
this.c=f},
dl9:function dl9(d){this.a=d},
dl6:function dl6(d){this.a=d},
dlj:function dlj(d){this.a=d},
dlk:function dlk(){},
dll:function dll(d){this.a=d},
dlm:function dlm(){},
dln:function dln(d){this.a=d},
dlo:function dlo(){},
dlx:function dlx(d,e,f){this.a=d
this.b=e
this.c=f},
dla:function dla(d){this.a=d},
dlb:function dlb(d,e){this.a=d
this.b=e},
dlc:function dlc(d){this.a=d},
dld:function dld(d){this.a=d},
dlB:function dlB(d){this.a=d},
dlC:function dlC(d){this.a=d},
dkv:function dkv(d){this.a=d},
dkw:function dkw(d,e){this.a=d
this.b=e},
dkx:function dkx(d){this.a=d},
dky:function dky(d){this.a=d},
dlv:function dlv(d,e){this.a=d
this.b=e},
dlw:function dlw(d){this.a=d},
dl5:function dl5(d,e){this.a=d
this.b=e},
dlp:function dlp(d,e,f){this.a=d
this.b=e
this.c=f},
dl3:function dl3(d,e,f){this.a=d
this.b=e
this.c=f},
dl4:function dl4(){},
dlE:function dlE(d){this.a=d},
dlF:function dlF(d){this.a=d},
dlG:function dlG(d){this.a=d},
dlI:function dlI(d){this.a=d},
dlH:function dlH(){},
dl2:function dl2(d,e,f){this.a=d
this.b=e
this.c=f},
dl1:function dl1(d,e){this.a=d
this.b=e},
dl0:function dl0(d,e){this.a=d
this.b=e},
dkL:function dkL(d){this.a=d},
dkK:function dkK(d,e){this.a=d
this.b=e},
dkM:function dkM(d){this.a=d},
dkJ:function dkJ(d,e){this.a=d
this.b=e},
dkN:function dkN(d){this.a=d},
dkI:function dkI(){},
dkO:function dkO(d){this.a=d},
dkG:function dkG(){},
dkH:function dkH(d){this.a=d},
dkP:function dkP(d){this.a=d},
dkF:function dkF(d,e){this.a=d
this.b=e},
dkQ:function dkQ(d){this.a=d},
dkE:function dkE(d,e){this.a=d
this.b=e},
dkA:function dkA(d,e){this.a=d
this.b=e},
dkR:function dkR(d){this.a=d},
dkD:function dkD(d,e){this.a=d
this.b=e},
dkS:function dkS(d){this.a=d},
dkC:function dkC(d){this.a=d},
dkz:function dkz(d,e){this.a=d
this.b=e},
dkT:function dkT(d,e,f){this.a=d
this.b=e
this.c=f},
dkU:function dkU(d){this.a=d},
dkB:function dkB(){},
dkV:function dkV(d){this.a=d},
ank:function ank(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
biM:function biM(){this.c=this.a=null},
dpj:function dpj(d,e){this.a=d
this.b=e},
dpi:function dpi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ajr:function ajr(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
az9:function az9(d,e,f,g,h,i,j,k,l,m){var _=this
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
cMn:function cMn(d){this.a=d},
cLI:function cLI(d,e){this.a=d
this.b=e},
cLy:function cLy(d){this.a=d},
cLz:function cLz(d){this.a=d},
cLS:function cLS(d){this.a=d},
cLP:function cLP(d){this.a=d},
cLQ:function cLQ(d){this.a=d},
cLR:function cLR(d,e,f){this.a=d
this.b=e
this.c=f},
cLK:function cLK(d){this.a=d},
cLJ:function cLJ(d){this.a=d},
cLA:function cLA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cLN:function cLN(d){this.a=d},
cLM:function cLM(d){this.a=d},
cLL:function cLL(d,e){this.a=d
this.b=e},
cMa:function cMa(d){this.a=d},
cM4:function cM4(d){this.a=d},
cM7:function cM7(d){this.a=d},
cM6:function cM6(){},
cM3:function cM3(d){this.a=d},
cM5:function cM5(d,e){this.a=d
this.b=e},
cM2:function cM2(){},
cLF:function cLF(){},
cLG:function cLG(d,e){this.a=d
this.b=e},
cLH:function cLH(d){this.a=d},
cLD:function cLD(d,e){this.a=d
this.b=e},
cLE:function cLE(d,e){this.a=d
this.b=e},
cLV:function cLV(d,e){this.a=d
this.b=e},
cLO:function cLO(d){this.a=d},
cLW:function cLW(d){this.a=d},
cLX:function cLX(d,e){this.a=d
this.b=e},
cLY:function cLY(d,e){this.a=d
this.b=e},
cLZ:function cLZ(d,e){this.a=d
this.b=e},
cM_:function cM_(d,e,f){this.a=d
this.b=e
this.c=f},
cM0:function cM0(d){this.a=d},
cM1:function cM1(d){this.a=d},
cLT:function cLT(d,e){this.a=d
this.b=e},
cM9:function cM9(d){this.a=d},
cLU:function cLU(d,e){this.a=d
this.b=e},
cMm:function cMm(d){this.a=d},
cMf:function cMf(d){this.a=d},
cMi:function cMi(d){this.a=d},
cMc:function cMc(d,e){this.a=d
this.b=e},
cMg:function cMg(){},
cMh:function cMh(d,e){this.a=d
this.b=e},
cMd:function cMd(d){this.a=d},
cMe:function cMe(d){this.a=d},
cMk:function cMk(){},
cMj:function cMj(d){this.a=d},
cMb:function cMb(d,e){this.a=d
this.b=e},
cMl:function cMl(d){this.a=d},
cLB:function cLB(d){this.a=d},
cM8:function cM8(d,e){this.a=d
this.b=e},
cLC:function cLC(d,e,f){this.a=d
this.b=e
this.c=f},
aMk:function aMk(){},
aMl:function aMl(){},
aMm:function aMm(){},
aNi:function aNi(){},
c3i(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase())
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
c3j(d){var w=B.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hQL(d,e){var w=d.ax
if(w<0)return!1
return w===e},
aZM(d,e){return C.hQM(d,e)},
hQM(d,e){var w=0,v=A.j(x.di),u,t,s,r,q,p
var $async$aZM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.b2z(d),$async$aZM)
case 3:p=g
if(p!=null){try{t=B.Y.aQ(0,p.c,null)
if(x.f.b(t)){s=C.hnd(A.a3(t,x.N,x.z))
if(s==null){u=new A.GK(D.a84,null)
w=1
break}if(B.a.i(e).length!==0&&!C.c3i(s,e,p.b)){u=new A.GK(D.aKS,null)
w=1
break}r=p.a?D.ef8:D.aKR
u=new A.GK(r,s)
w=1
break}}catch(o){}u=new A.GK(D.a84,null)
w=1
break}s=C.hne(d)
if(s==null){u=new A.GK(D.a84,null)
w=1
break}if(B.a.i(e).length!==0&&!C.c3i(s,e,null)){u=new A.GK(D.aKS,null)
w=1
break}u=new A.GK(D.aKR,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZM,v)},
hne(d){var w,v,u,t,s,r
try{w=B.a.i(d)
if(J.d4(w,"\ufeff"))w=J.nq(w,1)
v=!1
if(J.d4(w,"NGMYSNAP1|")){v=!0
w=B.ca.cH(0,B.cI.aN(J.nq(w,10)))}u=B.Y.aQ(0,w,null)
if(!x.f.b(u))return null
t=A.a3(u,x.N,x.z)
s=v?C.hQK(t):C.hnd(t)
return s}catch(r){return null}},
hQK(d){var w,v,u,t,s,r,q,p,o,n=new C.c3f(),m=new C.c3e(),l=d.h(0,"qi")
if(x.f.b(l)){w=A.a3(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new A.V(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=A.aJ(w.h(0,"d"))
p=new A.vZ(v,u,t,s,r,B.j.M(q==null?0:q))}else p=null
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
return new A.a70("","",v,u,t,s,r,q,n,m,o,p,B.iy,new A.V(Date.now(),0,!1),-1)},
hnd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.z(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.c3h()
v=d.h(0,"activeInvestment")
if(x.f.b(v)){u=A.a3(v,x.N,x.z)
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
n=new A.vZ(t,s,r,q,p,B.j.M(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=A.C(new A.ea(J.b7(m,new C.c3g(w),x.eG),t),t.k("M.E"))}else l=A.a([],x.E)
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
f=f==null?null:B.j.M(f)
return new A.a70(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
h7h(d,e,f,g){var w=0,v=A.j(x.N),u,t,s,r
var $async$h7h=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:t=A.c3d(d,e,f,g)
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(t.a,s,"_")
u=A.Hf(A.KP(t.f2(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h7h,v)},
Xb:function Xb(d,e){this.a=d
this.b=e},
c3f:function c3f(){},
c3e:function c3e(){},
c3h:function c3h(){},
c3g:function c3g(d){this.a=d},
idQ(d){return A.cf(null,B.aV,!0,null,new C.fzZ(),d,null,!0,!0,x.N)},
ie2(d,e,f,g){return A.cf(null,B.aV,!0,null,new C.fBb(g,f,e),d,null,!0,!0,x.y)},
aoT:function aoT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aE9:function aE9(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dFP:function dFP(d,e){this.a=d
this.b=e},
dFQ:function dFQ(d){this.a=d},
dFG:function dFG(d,e){this.a=d
this.b=e},
dFE:function dFE(d){this.a=d},
dFO:function dFO(d){this.a=d},
dFN:function dFN(d,e){this.a=d
this.b=e},
dFD:function dFD(d,e){this.a=d
this.b=e},
dFC:function dFC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dFF:function dFF(d){this.a=d},
dFM:function dFM(){},
dFK:function dFK(d){this.a=d},
dFL:function dFL(d,e){this.a=d
this.b=e},
dFH:function dFH(){},
dFI:function dFI(d,e){this.a=d
this.b=e},
dFJ:function dFJ(d,e){this.a=d
this.b=e},
dFR:function dFR(d){this.a=d},
a1F:function a1F(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
buo:function buo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0g:function a0g(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bld:function bld(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dFV:function dFV(d){this.a=d},
dFS:function dFS(d,e){this.a=d
this.b=e},
dFT:function dFT(d,e){this.a=d
this.b=e},
dFU:function dFU(d){this.a=d},
a0h:function a0h(d){this.a=d},
ble:function ble(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dFW:function dFW(d,e){this.a=d
this.b=e},
fzZ:function fzZ(){},
fBb:function fBb(d,e,f){this.a=d
this.b=e
this.c=f},
afv:function afv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f5u:function f5u(d){this.a=d},
f5v:function f5v(d){this.a=d},
R0:function R0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_o:function a_o(d){this.a=d},
aBm:function aBm(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
deP:function deP(d){this.a=d},
deM:function deM(){},
deN:function deN(d){this.a=d},
deO:function deO(d){this.a=d},
Vm(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$Vm=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||B.a.i(f).length===0){w=1
break}w=3
return A.b(A.NP(s),$async$Vm)
case 3:t=h
J.c7(t,A.I(["role",e,"text",B.a.i(f),"at",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w=4
return A.b(A.ap8(s,t),$async$Vm)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vm,v)},
hR3(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=A.U(d).k("Y<1>")
v=A.C(new A.Y(d,new C.c40(),w),w.k("M.E"))
w=v.length
if(w===0)return""
u=w<=24?v:B.d.fO(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,A.J)(u),++s){r=u[s]
q=J.a7(r)
p=J.z(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+A.w(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
c40:function c40(){},
ijI(d){return B.d.dP(B.Du,new C.fLg(d),new C.fLh()).r},
fLg:function fLg(d){this.a=d},
fLh:function fLh(){},
apo:function apo(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bll:function bll(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dMi:function dMi(d){this.a=d},
dMh:function dMh(d){this.a=d},
dM9:function dM9(d,e,f){this.a=d
this.b=e
this.c=f},
dMe:function dMe(d){this.a=d},
dMb:function dMb(d,e,f){this.a=d
this.b=e
this.c=f},
dMf:function dMf(d){this.a=d},
dMa:function dMa(d){this.a=d},
dMg:function dMg(d){this.a=d},
dMc:function dMc(d){this.a=d},
dMd:function dMd(d){this.a=d},
hoT(d){var w=A.cc6(new A.V(Date.now(),0,!1)),v=d.bm
if(v===w)return
d.bm=w
d.bH=0
d.c9=A.a([],x.s)},
hoV(d){return A.cf(null,B.w.j(0.82),!0,null,new C.ccb(),d,null,!0,!0,x.H)},
a7D:function a7D(d){this.a=d},
ccb:function ccb(){},
cca:function cca(d){this.a=d},
hCt(){var w=new A.V(Date.now(),0,!1),v=w.bR(A.dv(4-A.ms(w),0,0,0,0,0).a),u=A.c1(A.bC(v),1,4,0,0,0,0,0)
return""+A.bC(v)+"-W"+B.a.b0(B.o.u(1+B.j.bh(B.o.aq(v.bD(A.c1(A.bC(u),A.bL(u),A.bW(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
fqu(d,e){var w,v,u,t,s,r,q=A.GX(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s=J.t(t,"email")
r=B.a.i(J.k(s==null?"":s).toLowerCase())
if((B.a.c8(r,"+local.ngmy")?B.a.aC(r,0,r.length-11):r)===q)return t}t=A.I(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
i8h(d,e){var w,v,u,t,s,r,q,p=A.GX(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s=J.a7(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c8(q,"+local.ngmy")?B.a.aC(q,0,q.length-11):q)===p){w=A.aJ(s.h(t,"winsLeft"))
w=w==null?null:B.j.M(w)
return w==null?0:w}}return 0},
itJ(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=A.GX(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s=J.a7(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c8(q,"+local.ngmy")?B.a.aC(q,0,q.length-11):q)===n){w=A.aJ(s.h(t,o))
w=w==null?null:B.j.M(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
ieP(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=A.GX(b5),b2=A.cds(),b3=C.hCt()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
r=J.a7(s)
q=r.h(s,a2)
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.c8(p,a3)?B.a.aC(p,0,p.length-11):p)!==b1)continue
q=A.aJ(r.h(s,a4))
o=q==null?a1:B.j.M(q)
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
v=v==null?a1:B.j.M(v)
w.n(u,a4,(v==null?1:v)-1)
w=A.aJ(w.h(u,"outcome"))
w=w==null?a1:B.j.M(w)
return w==null?1:w}n=new C.fC2()
for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
r=J.t(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c8(p,a3)?B.a.aC(p,0,p.length-11):p)!==b1)continue
m=n.$5(s,"perDay",a6,a7,b2)
if(m!=null)return m}for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
r=J.t(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.c8(p,a3)?B.a.aC(p,0,p.length-11):p)!==b1)continue
l=n.$5(s,"perWeek",a8,a9,b3)
if(l!=null)return l}k=C.fqu(b4,b5)
w=J.a7(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?A.a3(v.a(w.h(k,b0)),r,q):A.T(r,q)
w.n(k,b0,j)
for(w=b4.y,w=new A.ck(w,A.a4(w).k("ck<1,2>")).gae(0);w.C();){i=w.d
h=i.b
g=J.a7(h)
f=g.h(h,"perDay")
if(f==null)f=0
e=g.h(h,"perWeek")
if(e==null)e=0
if(f<=0&&e<=0)continue
h=i.a
d=v.b(j.h(0,h))?A.a3(v.a(j.h(0,h)),r,q):A.T(r,q)
j.n(0,h,d)
if(f>0){g=d.h(0,a7)
if(J.k(g==null?"":g)!==b2){d.n(0,a7,b2)
d.n(0,a6,0)}g=A.aJ(d.h(0,a6))
a0=g==null?a1:B.j.M(g)
if(a0==null)a0=0
if(a0<f){d.n(0,a6,a0+1)
return A.ca(h,a1)}}if(e>0){g=d.h(0,a9)
if(J.k(g==null?"":g)!==b3){d.n(0,a9,b3)
d.n(0,a8,0)}g=A.aJ(d.h(0,a8))
a0=g==null?a1:B.j.M(g)
if(a0==null)a0=0
if(a0<e){d.n(0,a8,a0+1)
return A.ca(h,a1)}}}return a1},
hyP(d,e){var w,v,u,t,s,r,q,p=A.a([],x.t)
for(w=[1,2,3],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
if(w===0)return 1
s=p[e.aw(w)]
if(s===3&&d.f>=d.e)s=e.h8()?1:2
return s},
hdk(d,e){var w,v,u,t,s,r,q,p=A.a([],x.t)
for(w=[-1,-2],v=w.length,u=d.a,t=0;t<v;++t){s=w[t]
r=u.h(0,""+s)
if(r==null)r=10
for(q=0;q<r;++q)p.push(s)}w=p.length
return w===0?-1:p[e.aw(w)]},
ieQ(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=A.GX(a3),a1=new C.fC3()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
r=J.a7(s)
q=r.h(s,"email")
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.c8(p,"+local.ngmy")?B.a.aC(p,0,p.length-11):p)!==a0)continue
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
q=new C.fC4(v+r+q>1,l)
k=q.$2(o,"w")
r=k+q.$2(n,"l")
j=a4.aw(r+q.$2(m,"p"))
if(j<k){w.n(u,h,o-1)
w.n(u,d,"w")
w=a2.a
v=w.h(0,"1")
if(v==null)v=10
i=Math.max(1,v)
w=w.h(0,"2")
if(w==null)w=10
return a4.aw(i+Math.max(1,w))<i?1:2}if(j<r){w.n(u,g,n-1)
w.n(u,d,"l")
return C.hdk(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
ieO(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=A.aJ(i.h(0,"wins")),g=h==null?m:B.j.M(h)
if(g==null)g=0
h=A.aJ(i.h(0,"loses"))
w=h==null?m:B.j.M(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.hCt():A.cds()
t=v+"|"+u
s=C.fqu(d,e)
h=J.a7(s)
r=h.h(s,l)
if(J.k(r==null?"":r)!==t){h.n(s,l,t)
h.n(s,k,0)
h.n(s,j,0)}r=A.aJ(h.h(s,k))
q=r==null?m:B.j.M(r)
if(q==null)q=0
r=A.aJ(h.h(s,j))
p=r==null?m:B.j.M(r)
if(p==null)p=0
o=Math.max(0,g-q)
r=o+Math.max(0,w-p)
if(r<=0)return m
n=f.aw(r)<o
if(n)h.n(s,k,q+1)
else h.n(s,j,p+1)
return n},
inp(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
d.bl1()
w=C.ieQ(d,a0,a1)
if(w!=null){if(w===3)++d.f
C.ah_(d,a0,w)
return w}v=C.ieP(d,a0)
if(v!=null){if(v===3)++d.f
C.ah_(d,a0,v)
return v}u=C.ieO(d,a0,a1)
if(u!=null)return new C.fSk(d,a1,a0).$1(u)
t=C.fqu(d,a0)
s=J.a7(t)
r=A.aJ(s.h(t,"winStreak"))
q=r==null?null:B.j.M(r)
if(q==null)q=0
s=A.aJ(s.h(t,"loseStreak"))
p=s==null?null:B.j.M(s)
if(p==null)p=0
o=new C.fSm(d,a1)
if(C.i8h(d,a0)>0){n=o.$0()
C.itJ(d,a0)
C.ah_(d,a0,n)
return n}if(q>=d.c){n=new C.fSl(d,a1).$0()
C.ah_(d,a0,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.ah_(d,a0,n)
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
f=a1.aw(100)<g
if(f&&m.length!==0){e=m[a1.aw(m.length)]
if(e===3&&d.f>=d.e)e=a1.h8()?1:2}else{s=l.length
if(s!==0)e=l[a1.aw(s)]
else e=f?1:-1}if(e===3)++d.f
C.ah_(d,a0,e)
return e},
cdk(d){var w=0,v=A.j(x.y),u
var $async$cdk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.cdj(d),$async$cdk)
case 3:if(f){u=!0
w=1
break}u=A.cdj(d)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cdk,v)},
ah_(d,e,f){var w,v="winStreak",u="loseStreak",t=C.fqu(d,e),s=J.a7(t),r=A.aJ(s.h(t,v)),q=r==null?null:B.j.M(r)
if(q==null)q=0
r=A.aJ(s.h(t,u))
w=r==null?null:B.j.M(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
fC2:function fC2(){},
fC3:function fC3(){},
fC4:function fC4(d,e){this.a=d
this.b=e},
fSk:function fSk(d,e,f){this.a=d
this.b=e
this.c=f},
fSm:function fSm(d,e){this.a=d
this.b=e},
fSl:function fSl(d,e){this.a=d
this.b=e},
aoS:function aoS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
blb:function blb(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cQ$=d
_.b7$=e
_.c=_.a=null},
dFr:function dFr(d){this.a=d},
dFq:function dFq(d){this.a=d},
dFs:function dFs(d){this.a=d},
dFp:function dFp(d,e){this.a=d
this.b=e},
aMS:function aMS(){},
Og:function Og(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ceC:function ceC(){},
ceB:function ceB(){},
ar7:function ar7(d,e,f){this.c=d
this.d=e
this.a=f},
h8i(d,e,f){return A.cf(null,B.w.j(0.88),!0,null,new C.cf3(f,e),d,null,!0,!0,x.H)},
hUS(d){var w,v,u,t,s=B.a.i(d),r=s.split("-")
if(r.length===3){w=A.ca(r[0],null)
v=r[1]
u=A.ca(v,null)
t=A.ca(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?B.iP[u-1]:v)+" "+A.w(t)+", "+A.w(w)}return s},
Oo:function Oo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cf3:function cf3(d,e){this.a=d
this.b=e},
blV:function blV(d,e){var _=this
_.d=$
_.by$=d
_.a9$=e
_.c=_.a=null},
e4T:function e4T(d,e){this.a=d
this.b=e},
e4P:function e4P(){},
e4Q:function e4Q(){},
e4R:function e4R(d,e){this.a=d
this.b=e},
e4S:function e4S(d,e){this.a=d
this.b=e},
aNs:function aNs(){},
hCp(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.bkz(new C.fND(w))
w=w.a
return w==null?null:w.c.a},
hCh(d){$.aW.x1$.push(new C.fNq(d))},
hCB(d){var w=$.ts().gbk(),v=w!=null
if(!v||w.c==null)return
if(C.hCp(w)==="GamePlayScreen")if(v&&w.c!=null&&w.pX())w.eE()},
hCA(d){C.hyW(d,0)},
hyW(d,e){var w,v
if(e>4)return
w=d==null?$.ts().gbk():d
if(w==null||w.c==null)return
v=C.hCp(w)
if(v==="GameCenterScreen")return
if(D.faH.q(0,v)&&w.pX()){w.eE()
$.aW.x1$.push(new C.fyj(w,e))}},
aRo(d,e,f){return A.e9(A.cs(new C.fP_(e,d,f)),e,!0)},
fND:function fND(d){this.a=d},
fNq:function fNq(d){this.a=d},
fNp:function fNp(d){this.a=d},
fyj:function fyj(d,e){this.a=d
this.b=e},
fP_:function fP_(d,e,f){this.a=d
this.b=e
this.c=f},
arb(d,e){var w=0,v=A.j(x.H),u
var $async$arb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=A.Wp(e)
w=2
return A.b(A.ara(d,u),$async$arb)
case 2:A.a8f(d,u)
return A.h(null,v)}})
return A.i($async$arb,v)},
va(d,e,f,g,h,i,j,k){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$va=A.e(function(l,m){if(l===1)return A.f(m,v)
for(;;)switch(w){case 0:o=A.yY(g)
if(o.length===0){w=1
break}t=e==null?A.LU(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return A.b(A.Op(o),$async$va)
case 3:q=m
if(j!=null&&j.length!==0&&J.rj(q,new C.cfh(j))){w=1
break}p=e==null?new A.V(Date.now(),0,!1):e
J.pY(q,0,new A.jo(B.o.u(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return A.b(C.arb(o,q),$async$va)
case 4:if(i==null||r==null||s)C.a8h(o).bG(new C.cfi(),x.S).eN(new C.cfj())
case 1:return A.h(u,v)}})
return A.i($async$va,v)},
a8h(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a8h=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=$.hDz
m=A.yY(d)
if(n==null||m.length===0){w=1
break}w=3
return A.b(A.Op(m),$async$a8h)
case 3:t=f
s=J.cC(t)
if(!s.aV(t,new C.cfg())){w=1
break}w=4
return A.b(n.$2(m,t),$async$a8h)
case 4:r=f
q=J.a7(r)
if(q.gI(r)!==s.gI(t)){w=1
break}for(p=!1,o=0;o<s.gI(t);++o)if(B.Y.az(s.h(t,o).aj(),null)!==B.Y.az(q.h(r,o).aj(),null))p=!0
w=p?5:6
break
case 5:w=7
return A.b(C.arb(m,r),$async$a8h)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$a8h,v)},
b1c(d){var w=0,v=A.j(x.S),u,t
var $async$b1c=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.h8l(d,!1),$async$b1c)
case 3:t=J
w=4
return A.b(C.arc(d,!1),$async$b1c)
case 4:u=t.dI(f,new C.cff(new A.V(Date.now(),0,!1).bR(-864e8))).gI(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1c,v)},
arc(d,e){var w=0,v=A.j(x.ac),u,t,s,r
var $async$arc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=A.yY(d)
if(r.length===0){u=A.a([],x.gi)
w=1
break}w=3
return A.b(A.Op(r),$async$arc)
case 3:t=g
s=A.Wp(t)
if(s.length!==J.ad(t))C.arb(r,s)
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arc,v)},
ilg(d){var w,v,u,t=new A.V(Date.now(),0,!1),s=t.bD(d).a,r=B.o.aq(s,6e7)
if(r<1)return"Just now"
w=B.o.aq(s,36e8)
if(w<1)return""+r+"m ago"
if(B.o.aq(s,864e8)<1)return""+w+"h ago"
v=B.o.F(A.dg(d),12)===0?12:B.o.F(A.dg(d),12)
s=B.iP[A.bL(d)-1]
r=A.bC(d)===A.bC(t)?"":", "+A.bC(d)
w=B.a.b0(B.o.u(A.fP(d)),2,"0")
u=A.dg(d)<12?"AM":"PM"
return s+" "+A.bW(d)+r+" \xb7 "+v+":"+w+" "+u},
bCv(d){var w=B.j.ad(Math.abs(d),2).split(".")
return"$"+A.p5(w[0],A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fv5(),null)+"."+w[1]},
bG3(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$bG3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.arc(e,!1),$async$bG3)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
A.h8l(e,!0).bG(new C.h04(e),t).bG(new C.h05(),t).eN(new C.h06())
w=4
return A.b(A.bT(B.L,null,new C.h07(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bG3)
case 4:case 1:return A.h(u,v)}})
return A.i($async$bG3,v)},
hbl(d,e,f){var w=null,v=B.c.j(0.05),u=A.m(14),t=A.L(f.j(0.35),B.r,1)
return A.E(A.q(w,A.x(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),B.bH,A.ev(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.dB)],x.p),B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.hH,w,w,w),1)},
e4U(d,e,f){var w=null,v=B.w.j(0.22),u=A.m(8),t=A.L(f.j(0.28),B.r,1)
return A.E(A.q(w,A.x(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.ev(B.a6,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.e2)],x.p),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.Oj,w,w,w),1)},
cfh:function cfh(d){this.a=d},
cfi:function cfi(){},
cfj:function cfj(){},
cfg:function cfg(){},
cff:function cff(d){this.a=d},
fv5:function fv5(){},
h04:function h04(d){this.a=d},
h05:function h05(){},
h06:function h06(){},
h07:function h07(d,e){this.a=d
this.b=e},
h03:function h03(d,e){this.a=d
this.b=e},
h02:function h02(d){this.a=d},
aen:function aen(d,e){this.c=d
this.a=e},
e4W:function e4W(){},
e4X:function e4X(){},
e4Y:function e4Y(){},
e4Z:function e4Z(d){this.a=d},
e50:function e50(){},
e5_:function e5_(d){this.a=d},
aem:function aem(d,e){this.c=d
this.a=e},
e4V:function e4V(){},
bG4(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return A.hS(B.aV,!1,w,d,new C.h0a(j,i,h,g,e,f),null,B.eR,!1,x.H)},
h0a:function h0a(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h08:function h08(d,e){this.a=d
this.b=e},
h09:function h09(d,e){this.a=d
this.b=e},
aC5:function aC5(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bhs:function bhs(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.by$=e
_.a9$=f
_.c=_.a=null},
dlS:function dlS(d,e){this.a=d
this.b=e},
dlR:function dlR(){},
aeL:function aeL(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aMn:function aMn(){},
arY(d,e,f){return new C.b22(f,d,e,null)},
hVw(d){var w=A.a(B.j.ad(d,2).split("."),x.s),v=A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=A.p5(w[0],v,new C.cgR(),null)
return B.d.aO(w,".")},
b1f(){var w=$.tU
if((w>0?$.tU=w-1:w)<=0)$.tU=0},
aib(d,e){var w=0,v=A.j(x.H),u
var $async$aib=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=$.hgc
w=u!=null?2:3
break
case 2:w=4
return A.b(u.$2(d,e),$async$aib)
case 4:case 3:return A.h(null,v)}})
return A.i($async$aib,v)},
b22:function b22(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cgS:function cgS(d){this.a=d},
cgR:function cgR(){},
NS:function NS(){},
c4x:function c4x(){},
hfB(d){if(d>0)return"+"+d
return""+d},
heW(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fP0(d,e){var w=J.t(e,d)
if(w==null)w=A.fNN().h(0,d)
return w==null?90:w},
fu2(d,e){var w,v,u=A.aR(x.S)
while(u.a<3){w=e.aw(41)-20
if(w===0)continue
u.J(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.J(0,d+v*7+3)
v=A.a([B.o.u(d)],x.s)
B.d.v(v,new A.k8(u,new C.fu3(),u.$ti.k("k8<ch.E,n>")))
B.d.e0(v,e)
return v},
hxX(d,e,f){var w,v,u,t,s=A.aR(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.J(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.J(0,f[B.o.F(u,5)]+u);++u}t=A.a([d],x.s)
B.d.v(t,A.pG(s,3,s.$ti.k("ch.E")))
B.d.e0(t,e)
return t},
igh(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=A.a([],x.dA),b2=new A.e4()
b2.d_(42)
for(w=x.s,v=0;v<200;++v){u=B.o.F(v,5)
if(u===0){t=[4,9,16,25,36,49,64,81,121,144,196,256][b2.aw(12)]
s=[2,3,5,6,7,10,11,13][b2.aw(8)]
r=B.j.M(Math.sqrt(t))
q=2+b2.aw(4)
p=B.o.aq(q,2)
if((q&1)===0){o=""+r
n=""+s
m=p===1?o+"\u221a"+n:o+"x^"+p+"\u221a"+n}else{o=""+r
n=""+s
m=p===0?o+"\u221a"+n+"x":o+"x^"+p+"\u221a"+n+"x"}o=""+p
n=""+s
l=""+r+"x^"
b1.push(new C.Jw("Simplify \u221a("+t*s+"x^"+q+")",m,C.hxX(m,b2,A.a([""+(r+1)+"x^"+o+"\u221a"+n,A.w(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aw(35)
j=b2.aw(4)===0?1:2+b2.aw(4)
i=b2.aw(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.Jw("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.fu2(k,b2)))}else if(u===2){k=2+b2.aw(18)
j=b2.aw(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aw(10)+2
b1.push(new C.Jw("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.fu2(g,b2)))}else b1.push(new C.Jw("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.fu2(k,b2)))}else if(u===3){e=b2.aw(11)-5
o=b2.aw(11)
n=b2.aw(11)
d=b2.aw(11)+2
l=b2.h8()?1:-1
a0=e+l*(b2.aw(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===B.j.iY(a4)?""+B.j.M(a4):"\u221a"+a3
b1.push(new C.Jw("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.fu2(a0,b2)))}else{a6=2+b2.aw(10)
a7=a6+2+b2.aw(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.Jw("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.hxX(m,b2,A.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
irP(d){var w,v,u=x.s,t=A.a(d.split(""),u)
if(t.length<4)return new A.ds(A.a(d.split(""),u),x.bJ).he(0)
for(w=0;w<12;++w){B.d.e0(t,B.cN)
v=B.d.he(t)
if(v!==d)return v}return new A.ds(t,x.bJ).he(0)},
Jw:function Jw(d,e,f){this.a=d
this.b=e
this.c=f},
fu3:function fu3(){},
aqv:function aqv(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEU:function aEU(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
dYo:function dYo(d){this.a=d},
dYp:function dYp(d){this.a=d},
dYq:function dYq(d){this.a=d},
dYr:function dYr(d,e){this.a=d
this.b=e},
dYs:function dYs(d,e){this.a=d
this.b=e},
dYt:function dYt(d){this.a=d},
dYn:function dYn(d){this.a=d},
dYu:function dYu(d){this.a=d},
dYm:function dYm(d){this.a=d},
dYx:function dYx(d){this.a=d},
dYy:function dYy(d){this.a=d},
dYw:function dYw(d,e){this.a=d
this.b=e},
dYv:function dYv(d,e){this.a=d
this.b=e},
ard:function ard(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aF9:function aF9(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
e56:function e56(d,e,f){this.a=d
this.b=e
this.c=f},
e57:function e57(d){this.a=d},
e52:function e52(d){this.a=d},
e54:function e54(d,e){this.a=d
this.b=e},
e53:function e53(d,e){this.a=d
this.b=e},
e55:function e55(d,e){this.a=d
this.b=e},
e51:function e51(d){this.a=d},
hRI(d){var w,v,u,t,s,r,q,p=new A.V(Date.now(),0,!1),o=p.bR(36e8)
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
return new C.rO(w,u,t,s,r,q==null?null:J.k(q))},
a8n(d){var w=0,v=A.j(x.ck),u,t,s,r,q,p,o
var $async$a8n=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.b)
w=1
break}w=3
return A.b(A.az(),$async$a8n)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aT(J.t(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.b)
w=1
break}try{s=B.Y.aQ(0,t,null)
if(!x.j.b(s)){p=A.a([],x.b)
u=p
w=1
break}p=J.dd(s,x.f)
p=A.cF(p,new C.cfJ(),p.$ti.k("M.E"),x.b1)
p=A.C(p,A.a4(p).k("M.E"))
B.d.aZ(p,new C.cfK())
u=p
w=1
break}catch(n){r=A.ab(n)
$.am.$1("[calendar-memory] load: "+A.w(r))
p=A.a([],x.b)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$a8n,v)},
arx(d,e){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$arx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.a8n(d),$async$arx)
case 2:r=g
q=J.cC(r)
q.bt(r,new C.cfG(e))
q.J(r,e)
q.aZ(r,new C.cfH())
w=3
return A.b(A.az(),$async$arx)
case 3:u=g
t=B.a.i(d.toLowerCase())
q=q.kn(r,80)
s=q.$ti.k("N<ak.E,a8<n,@>>")
q=A.C(new A.N(q,new C.cfI(),s),s.k("ak.E"))
w=4
return A.b(u.aB("String","ngmy_helper_calendar_v1_"+t,B.Y.az(q,null)),$async$arx)
case 4:return A.h(null,v)}})
return A.i($async$arx,v)},
hV3(d,e){var w=Date.now(),v=new A.V(w,0,!1).bT()
w=J.dI(d,new C.cfL(v,v.bR(A.dv(14,0,0,0,0,0).a)))
w=A.C(w,w.$ti.k("M.E"))
return w},
hps(d){var w,v,u,t,s,r,q,p,o,n,m=C.hV3(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=A.cW(m,0,A.dA(20,"count",x.S),A.U(m).c),v=w.$ti,w=new A.bQ(w,w.gI(0),v.k("bQ<ak.E>")),v=v.k("ak.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=B.o.F(A.dg(s),12)===0?12:B.o.F(A.dg(s),12)
q=A.dg(s)>=12?"PM":"AM"
p=B.a.b0(B.o.u(A.fP(s)),2,"0")
o=t.f
if((o==null?null:B.a.i(o).length!==0)===!0){o.toString
n=" @ "+B.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+A.bL(s)+"/"+A.bW(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&B.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return B.a.i(u.charCodeAt(0)==0?u:u)},
rO:function rO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cfJ:function cfJ(){},
cfK:function cfK(){},
cfG:function cfG(d){this.a=d},
cfH:function cfH(){},
cfI:function cfI(){},
cfL:function cfL(d,e){this.a=d
this.b=e},
hRJ(d){var w,v,u,t,s,r,q,p,o=null,n=new A.V(Date.now(),0,!1)
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
return new C.rP(w,u,t,s,r,q,J.k(p==null?"user":p))},
hnN(d){var w=B.o.F(A.dg(d),12)===0?12:B.o.F(A.dg(d),12),v=A.dg(d)>=12?"PM":"AM"
return""+A.bL(d)+"/"+A.bW(d)+" "+w+":"+B.a.b0(B.o.u(A.fP(d)),2,"0")+" "+v},
VA(d){var w=0,v=A.j(x.e),u,t,s,r,q,p,o
var $async$VA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.x)
w=1
break}w=3
return A.b(A.az(),$async$VA)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aT(J.t(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.x)
w=1
break}try{s=B.Y.aQ(0,t,null)
if(!x.j.b(s)){p=A.a([],x.x)
u=p
w=1
break}p=J.dd(s,x.f)
p=A.cF(p,new C.c7F(),p.$ti.k("M.E"),x.Q)
p=A.C(p,A.a4(p).k("M.E"))
B.d.aZ(p,new C.c7G())
u=p
w=1
break}catch(n){r=A.ab(n)
$.am.$1("[call-memory] load: "+A.w(r))
p=A.a([],x.x)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$VA,v)},
b_y(d,e){var w=0,v=A.j(x.H),u,t,s,r
var $async$b_y=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$b_y)
case 2:u=g
t=A.cW(e,0,A.dA(120,"count",x.S),A.U(e).c).dn(0)
s=B.a.i(d.toLowerCase())
r=A.U(t).k("N<1,a8<n,@>>")
r=A.C(new A.N(t,new C.c7D(),r),r.k("ak.E"))
w=3
return A.b(u.aB("String","ngmy_call_memory_v1_"+s,B.Y.az(r,null)),$async$b_y)
case 3:return A.h(null,v)}})
return A.i($async$b_y,v)},
b_z(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$b_z=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:p=A.T(x.N,x.Q)
o=J
w=2
return A.b(C.VA(d),$async$b_z)
case 2:u=o.aU(g)
case 3:if(!u.C()){w=4
break}t=u.gR(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("b8<2>")
q=A.C(new A.b8(p,u),u.k("M.E"))
B.d.aZ(q,new C.c7E())
w=5
return A.b(C.b_y(d,q),$async$b_z)
case 5:return A.h(null,v)}})
return A.i($async$b_z,v)},
c7H(d,e){var w=0,v=A.j(x.e),u,t,s
var $async$c7H=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.VA(d),$async$c7H)
case 3:t=s.dI(g,new C.c7I(e.bR(-72e8),e.bR(72e8)))
t=A.C(t,t.$ti.k("M.E"))
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c7H,v)},
hnO(d,e){var w,v,u,t,s,r=J.a7(d)
if(r.gau(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.kn(d,e),v=w.$ti,w=new A.bQ(w,w.gI(0),v.k("bQ<ak.E>")),v=v.k("ak.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gWj()+"\n"
t=t.f
if(t!=null&&B.a.i(t).length!==0){s=B.a.i(t)
u+="  Voicemail/text: "+(s.length>180?B.a.aC(s,0,177)+"\u2026":s)+"\n"}}r=r.gI(d)>e?u+("\u2026 and "+(r.gI(d)-e)+" more\n"):u
return B.a.i(r.charCodeAt(0)==0?r:r)},
in9(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new A.V(q,0,!1).bT(),o=d.toLowerCase(),n=A.c1(A.bC(p),A.bL(p),A.bW(p),0,0,0,0,0)
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
return A.c1(A.bC(n),A.bL(n),A.bW(n),u,t,0,0,0)},
hDZ(d){var w=A.ag("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
rP:function rP(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c7F:function c7F(){},
c7G:function c7G(){},
c7D:function c7D(){},
c7E:function c7E(){},
c7I:function c7I(d,e){this.a=d
this.b=e},
hpv(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lY(t,w,v,u==null?null:J.k(u))},
hV9(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b7(v,new C.cfR(),x.bP)
v=A.C(v,v.$ti.k("ak.E"))}if(v==null)v=D.dlG
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.z(d.h(0,"printable"),!0)
return new C.is(r,w,v,u,t,typeof d.h(0,s)=="number"?B.j.M(A.dC(d.h(0,s))):0)},
hV8(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.i8v(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?B.j.M(A.dC(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?B.j.M(A.dC(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b7(s,new C.cfP(),x.u)
s=A.C(s,s.$ti.k("ak.E"))}return new C.id(p,w,v,u,s==null?D.aBE:s,t)},
i8w(d){var w,v,u,t=A.I([G.CZ,"investments",B.oB,"games",B.jF,"loans",B.i_,"withdrawals",B.jK,"deposits",B.ln,"civic",B.ll,"store",B.t7,"jobs",B.oA,"refunds",B.f5,"account",B.lj,"music",B.zd,"help"],x.dk,x.N)
for(w=new A.ck(t,A.a4(t).k("ck<1,2>")).gae(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
i8v(d){switch(d){case"investments":return G.CZ
case"games":return B.oB
case"loans":return B.jF
case"withdrawals":return B.i_
case"deposits":return B.jK
case"civic":return B.ln
case"store":return B.ll
case"jobs":return B.t7
case"refunds":return B.oA
case"account":return B.f5
case"music":return B.lj
default:return B.zd}},
nj(d){var w=A.a([new C.lY("text",d,null,null)],x.a)
return w},
ai8(){var w=null,v=x.v
return A.a([new C.id("investments","Investments",G.CZ,4280468830,A.a([new C.is("inv1","How do I buy an investment plan?",C.nj("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.is("inv2","When do I get paid from my plan?",C.nj("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.is("inv3","Can I have more than one plan?",C.nj("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.id("games","Games",B.oB,4287323382,A.a([new C.is("gam1","How do NGMY games work?",C.nj("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.is("gam2","Why did my game payout change?",C.nj("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.id("loans","Loans",B.jF,4294538006,A.a([new C.is("loan1","How do I apply for a loan?",C.nj("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.is("loan2","What is the repayment period?",C.nj("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.id("withdrawals","Withdrawals",B.i_,4282090230,A.a([new C.is("wd1","How do I withdraw money?",C.nj("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.is("wd2","Why is my withdrawal pending?",C.nj("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.id("deposits","Deposits",B.jK,4279548070,A.a([new C.is("dep1","How do I deposit funds?",C.nj("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.is("dep2","How long until my deposit posts?",C.nj("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.id("civic","Civic Registry",B.ln,4289170426,A.a([new C.is("civ1","What is Civic Registry?",C.nj("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.is("civ2","What does \u201cmissed\u201d mean on my profile?",C.nj("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.id("store","NGMY Store",B.ll,4293675161,A.a([new C.is("sto1","How do I buy from NGMY Store?",C.nj("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.is("sto2","How do I sell in the store?",C.nj("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.id("jobs","Jobs & Creator",B.t7,4293548044,A.a([new C.is("job1","How do I find jobs?",C.nj("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.is("job2","How do I post a job?",C.nj("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.id("refunds","Refunds",B.oA,4293870660,A.a([new C.is("ref1","Can I get a refund?",C.nj("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.is("ref2","How long do refunds take?",C.nj("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.id("account","Account",B.f5,4281908728,A.a([new C.is("acc1","How do I update my profile?",C.nj("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.is("acc2","I forgot my password \u2014 what now?",C.nj("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.id("music","Music Charts",B.lj,4290807036,A.a([new C.is("mus1","What are Music Charts?",C.nj("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.is("mus2","How do I upload music?",C.nj("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.id("help","Help Center",B.zd,4279080072,A.a([new C.is("hlp1","Where can I get live help?",C.nj("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.is("hlp2","How do daily Helper limits work?",C.nj("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
hpw(d){var w,v=J.a7(d),u=v.gau(d)
if(u)return C.ai8()
v=v.dM(d,new C.cfU(),x.i)
w=A.C(v,v.$ti.k("ak.E"))
B.d.aZ(w,new C.cfV())
return w.length===0?C.ai8():w},
hpx(d){var w=J.b7(d,new C.cfW(),x.P)
w=A.C(w,w.$ti.k("ak.E"))
return A.I(["categories",w,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z)},
arz(d){return C.hVa(d)},
hVa(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q,p
var $async$arz=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.az(),$async$arz)
case 6:s=f
w=7
return A.b(s.aB("String","ngmy_helper_kb_v1",B.Y.az(C.hpx(d),null)),$async$arz)
case 7:u=1
w=5
break
case 3:u=2
p=t.pop()
r=A.ab(p)
$.am.$1("[helper kb] local save: "+A.w(r))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$arz,v)},
cfT(){var w=0,v=A.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$cfT=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$cfT)
case 7:r=e
q=A.aT(J.t(r.a,"ngmy_helper_kb_v1"))
if(q==null||B.a.i(q).length===0){l=C.ai8()
u=l
w=1
break}p=B.Y.aQ(0,q,null)
if(!x.f.b(p)){l=C.ai8()
u=l
w=1
break}o=J.t(p,"categories")
if(!x.j.b(o)){l=C.ai8()
u=l
w=1
break}n=C.hpw(o)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
m=A.ab(j)
$.am.$1("[helper kb] local load: "+A.w(m))
l=C.ai8()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$cfT,v)},
b1A(){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$b1A=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c9(),$async$b1A)
case 7:if(!e){u=null
w=1
break}w=8
return A.b(A.f4("ngmy_helper_kb",null,!1,B.bN),$async$b1A)
case 8:q=e
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.ab(o)
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
return A.i($async$b1A,v)},
b1B(d){return C.hVb(d)},
hVb(d){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$b1B=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c9(),$async$b1B)
case 7:if(!f){u=!1
w=1
break}w=8
return A.b(A.hJ("ngmy_helper_kb",d,!1,!1,B.cM,null),$async$b1B)
case 8:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.ab(o)
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
return A.i($async$b1B,v)},
arA(){var w=0,v=A.j(x.I),u,t,s,r
var $async$arA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cfT(),$async$arA)
case 3:s=e
w=4
return A.b(C.b1A(),$async$arA)
case 4:r=e
w=r!=null&&x.j.b(J.t(r,"categories"))?5:6
break
case 5:t=C.hpw(x.j.a(J.t(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return A.b(C.arz(t),$async$arA)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arA,v)},
cfX(d){var w=0,v=A.j(x.y),u
var $async$cfX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.arz(d),$async$cfX)
case 3:u=C.b1B(C.hpx(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfX,v)},
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
cfS:function cfS(){},
cfR:function cfR(){},
id:function id(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cfQ:function cfQ(){},
cfP:function cfP(){},
cfU:function cfU(){},
cfV:function cfV(){},
cfW:function cfW(){},
baW:function baW(d){this.a=d},
Wv:function Wv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFl:function aFl(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
e9b:function e9b(){},
e9c:function e9c(){},
e95:function e95(d){this.a=d},
e96:function e96(d){this.a=d},
e8P:function e8P(d,e){this.a=d
this.b=e},
e8Q:function e8Q(d){this.a=d},
e8R:function e8R(d,e,f){this.a=d
this.b=e
this.c=f},
e8O:function e8O(d){this.a=d},
e92:function e92(d,e){this.a=d
this.b=e},
e93:function e93(d,e){this.a=d
this.b=e},
e94:function e94(d){this.a=d},
e8X:function e8X(d){this.a=d},
e8Y:function e8Y(d,e,f){this.a=d
this.b=e
this.c=f},
e8W:function e8W(d,e){this.a=d
this.b=e},
e91:function e91(d,e,f){this.a=d
this.b=e
this.c=f},
e90:function e90(d,e){this.a=d
this.b=e},
e9_:function e9_(d,e){this.a=d
this.b=e},
e8Z:function e8Z(d,e,f){this.a=d
this.b=e
this.c=f},
e8T:function e8T(d){this.a=d},
e8S:function e8S(d){this.a=d},
e8U:function e8U(d,e){this.a=d
this.b=e},
e8V:function e8V(d){this.a=d},
e9a:function e9a(d,e){this.a=d
this.b=e},
e99:function e99(d,e){this.a=d
this.b=e},
e98:function e98(){},
e97:function e97(d,e){this.a=d
this.b=e},
Qo:function Qo(d,e){this.c=d
this.a=e},
bcR:function bcR(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cV2:function cV2(d){this.a=d},
cV1:function cV1(d,e){this.a=d
this.b=e},
cV_:function cV_(d,e){this.a=d
this.b=e},
cV3:function cV3(d){this.a=d},
cV0:function cV0(d,e){this.a=d
this.b=e},
cUZ:function cUZ(d,e){this.a=d
this.b=e},
cV4:function cV4(d){this.a=d},
cV5:function cV5(d,e){this.a=d
this.b=e},
a13:function a13(d,e,f){this.c=d
this.d=e
this.a=f},
aHi:function aHi(){this.d=$
this.c=this.a=null},
f0o:function f0o(d,e){this.a=d
this.b=e},
f0p:function f0p(d){this.a=d},
f0v:function f0v(){},
f0u:function f0u(d,e){this.a=d
this.b=e},
f0t:function f0t(d,e){this.a=d
this.b=e},
f0q:function f0q(d,e){this.a=d
this.b=e},
f0s:function f0s(d,e,f){this.a=d
this.b=e
this.c=f},
f0r:function f0r(d,e,f){this.a=d
this.b=e
this.c=f},
a12:function a12(d,e){this.c=d
this.a=e},
aHh:function aHh(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
f0k:function f0k(d,e){this.a=d
this.b=e},
f0i:function f0i(d){this.a=d},
f0j:function f0j(d,e){this.a=d
this.b=e},
f0m:function f0m(d,e){this.a=d
this.b=e},
f0n:function f0n(d){this.a=d},
f0l:function f0l(d,e){this.a=d
this.b=e},
hV6(d){var w=new A.N(d,new C.cfM(),A.U(d).k("N<1,n>")).aO(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
cfN(d,e,f){return C.hV7(d,e,f)},
hV7(b4,b5,b6){var w=0,v=A.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$cfN=A.e(function(b8,b9){if(b8===1)return A.f(b9,v)
for(;;)switch(w){case 0:b3=B.a.i(b5)
if(b3.length===0){u=new A.L3([A.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return A.b(A.rg(A.nm(b3),C.hV6(b6)+"\n\nAdmin instruction:\n"+b4,B.i0,null,null),$async$cfN)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=B.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new A.L3([A.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=B.a.i(a3)
if(J.d4(s,"```"))s=B.a.en(J.hj9(s,A.ag("^```(?:json)?\\s*",!0,!1,!1,!1),""),A.ag("\\s*```$",!0,!1,!1,!1),"")
r=B.Y.aQ(0,s,null)
a3=x.f
if(!a3.b(r)){a3=A.a([],x.Y)
u=new A.L3([a3,"AI response was not valid JSON.",null,null])
w=1
break}a4=x.N
a5=x.z
q=A.a3(r,a4,a5)
a6=J.t(q,"message")
p=a6==null?null:J.k(a6)
a6=J.t(q,"replaceCategoryId")
o=a6==null?null:J.k(a6)
n=J.t(q,"categories")
a6=x.j
if(!a6.b(n)||J.cr(n)){a3=A.a([],x.Y)
u=new A.L3([a3,"AI did not return any categories.",p,o])
w=1
break}m=A.a([],x.Y)
l=b6.length
for(k=0,a7=x.v,a8=x.a;k<J.ad(n);++k){j=A.a3(a3.a(J.t(n,k)),a4,a5)
i="cat_ai_"+1000*Date.now()+"_"+A.w(k)
h=J.t(j,"questions")
g=A.a([],a7)
if(a6.b(h))for(f=0;f<J.ad(h);++f){e=A.a3(a3.a(J.t(h,f)),a4,a5)
d=J.t(e,"answerBlocks")
a0=A.a([],a8)
if(a6.b(d))for(a9=J.aU(d);a9.C();){a1=a9.gR(a9)
J.c7(a0,C.hpv(A.a3(a3.a(a1),a4,a5)))}if(J.ad(a0)===0){a9=J.t(e,"answer")
J.c7(a0,new C.lY("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=A.w(f)
b1=J.t(e,"question")
J.c7(g,new C.is("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.z(J.t(e,"printable"),!0),f))}a9=J.t(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.t(j,"iconKey")
b0=C.hV5(J.k(b0==null?"help":b0))
b1=typeof J.t(j,"colorValue")=="number"?B.j.M(A.dC(J.t(j,"colorValue"))):4284773515
J.c7(m,new C.id(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ad(a3)!==0)===!0?o:null
u=new A.L3([m,null,p,a3])
w=1
break}catch(b7){a2=A.ab(b7)
a3=A.w(a2)
a4=A.a([],x.Y)
u=new A.L3([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$cfN,v)},
hV5(d){switch(d){case"investments":return G.CZ
case"games":return B.oB
case"loans":return B.jF
case"withdrawals":return B.i_
case"deposits":return B.jK
case"civic":return B.ln
case"store":return B.ll
case"jobs":return B.t7
case"refunds":return B.oA
case"account":return B.f5
case"music":return B.lj
default:return B.zd}},
ilC(d,e,f){var w,v,u,t=A.bq(d,!0,x.i)
if(f!=null&&J.ad(e)===1){w=B.d.bj(t,new C.fPn(f))
if(w>=0){t[w]=J.fs(e).cOU(f,t[w].f)
return t}}B.d.v(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].bf5(u)
return t},
cfM:function cfM(){},
fPn:function fPn(d){this.a=d},
dbK:function dbK(d){this.a=d},
Ww:function Ww(d,e,f){this.c=d
this.d=e
this.a=f},
aFn:function aFn(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
e9M:function e9M(){},
e9s:function e9s(d,e){this.a=d
this.b=e},
e9x:function e9x(d,e){this.a=d
this.b=e},
e9v:function e9v(d,e){this.a=d
this.b=e},
e9t:function e9t(d){this.a=d},
e9u:function e9u(d){this.a=d},
e9w:function e9w(d,e,f){this.a=d
this.b=e
this.c=f},
e9o:function e9o(){},
e9p:function e9p(){},
e9q:function e9q(){},
e9r:function e9r(){},
e9C:function e9C(d,e){this.a=d
this.b=e},
e9D:function e9D(d){this.a=d},
e9E:function e9E(d){this.a=d},
e9F:function e9F(d){this.a=d},
e9G:function e9G(d){this.a=d},
e9H:function e9H(d){this.a=d},
e9I:function e9I(){},
e9J:function e9J(d){this.a=d},
e9B:function e9B(d){this.a=d},
e9K:function e9K(d){this.a=d},
e9A:function e9A(d){this.a=d},
e9L:function e9L(d,e){this.a=d
this.b=e},
e9z:function e9z(d,e){this.a=d
this.b=e},
e9y:function e9y(d,e){this.a=d
this.b=e},
i25(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.a([],x.eO)
for(w=A.ag("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kY(0,d),w=new A.Gn(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=B.a.aC(d,t,q)
o=u?B.cu:B.aM
m.push(new A.en(p,n,n,B.cJ,n,n,n,n,n,n,new A.G(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?B.cu:B.aM
m.push(new A.en(p,n,n,B.cJ,n,n,n,n,n,n,new A.G(!0,o,n,n,n,n,13,B.I,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?B.cu:B.aM
m.push(new A.en(p,n,n,B.cJ,n,n,n,n,n,n,new A.G(!0,o,n,n,n,n,13,n,B.cH,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?B.cu:B.aM
m.push(new A.en(p,n,n,B.cJ,n,n,n,n,n,n,new A.G(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,B.nd,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=B.a.b2(d,t)
m.push(A.cP(n,n,n,n,n,n,n,n,n,A.l(n,n,u?B.cu:B.aM,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return A.u4(B.cs,n,n,n,B.eP,n,n,!0,n,A.cP(m,n,n,n,n,n,n,n,n,n,n),B.a5,n,n,B.dp,B.bY)},
dqb:function dqb(d){this.a=d},
aCZ:function aCZ(d,e){this.a=d
this.b=e},
ary:function ary(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFm:function aFm(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
e9l:function e9l(d,e){this.a=d
this.b=e},
e9m:function e9m(d,e){this.a=d
this.b=e},
e9d:function e9d(d){this.a=d},
e9e:function e9e(d){this.a=d},
e9n:function e9n(){},
e9g:function e9g(d,e){this.a=d
this.b=e},
e9f:function e9f(d,e){this.a=d
this.b=e},
e9i:function e9i(){},
e9k:function e9k(){},
e9j:function e9j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9h:function e9h(d,e){this.a=d
this.b=e},
aCX:function aCX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
acT:function acT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b1z:function b1z(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cfO:function cfO(d){this.a=d},
acL:function acL(d,e,f){this.c=d
this.d=e
this.a=f},
cOy:function cOy(d){this.a=d},
cOz:function cOz(){},
cOA:function cOA(d){this.a=d},
aCY:function aCY(d,e,f){this.c=d
this.d=e
this.a=f},
bj0:function bj0(){this.c=this.a=this.d=null},
dqc:function dqc(d,e){this.a=d
this.b=e},
dqe:function dqe(d,e){this.a=d
this.b=e},
dqd:function dqd(d){this.a=d},
hWF(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
hWG(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
hWE(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
hxS(d){var w
if(new A.Y(A.a(d.split("\n"),x.s),new C.ftM(),x.cc).gI(0)<3)w=d.length>100&&B.a.q(d,"\n")
else w=!0
return w},
imN(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.hWE(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
asl:function asl(d,e){this.a=d
this.b=e},
JB:function JB(d,e){this.a=d
this.b=e},
rV:function rV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ftM:function ftM(){},
arB:function arB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFo:function aFo(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=!1
_.x=g
_.y=h
_.Q=_.z=null
_.as=$
_.by$=i
_.a9$=j
_.c=_.a=null},
ea_:function ea_(d,e){this.a=d
this.b=e},
e9R:function e9R(d){this.a=d},
e9T:function e9T(){},
e9U:function e9U(d,e){this.a=d
this.b=e},
e9V:function e9V(d){this.a=d},
e9W:function e9W(){},
e9X:function e9X(d,e){this.a=d
this.b=e},
e9Y:function e9Y(d){this.a=d},
e9Z:function e9Z(d){this.a=d},
e9S:function e9S(d,e){this.a=d
this.b=e},
ea6:function ea6(d,e){this.a=d
this.b=e},
ea3:function ea3(){},
ea4:function ea4(d,e){this.a=d
this.b=e},
ea5:function ea5(d,e){this.a=d
this.b=e},
ea2:function ea2(d,e){this.a=d
this.b=e},
ea1:function ea1(d,e){this.a=d
this.b=e},
ea8:function ea8(d){this.a=d},
ea7:function ea7(d){this.a=d},
e9Q:function e9Q(d,e){this.a=d
this.b=e},
e9P:function e9P(d,e){this.a=d
this.b=e},
ea9:function ea9(d,e){this.a=d
this.b=e},
ea0:function ea0(d,e){this.a=d
this.b=e},
e9N:function e9N(d){this.a=d},
e9O:function e9O(d){this.a=d},
aNA:function aNA(){},
cfZ(d){var w=0,v=A.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$cfZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=D.Tu
w=1
break}w=3
return A.b(A.az(),$async$cfZ)
case 3:r=f
q=B.a.i(d.toLowerCase())
t=A.aT(J.t(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.Tu
w=1
break}try{q=A.a3(x.f.a(B.Y.aQ(0,t,null)),x.N,x.z)
p=J.z(q.h(0,"contacts"),!0)
o=J.z(q.h(0,"calendar"),!0)
n=J.z(q.h(0,"calls"),!0)
q=J.z(q.h(0,"allGrantedOnce"),!0)
u=new C.Wx(p,o,n,q)
w=1
break}catch(l){s=A.ab(l)
$.am.$1("[helper-perms] load: "+A.w(s))
u=D.Tu
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$cfZ,v)},
arC(d,e){var w=0,v=A.j(x.H),u
var $async$arC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){w=1
break}w=4
return A.b(A.az(),$async$arC)
case 4:w=3
return A.b(g.aB("String","ngmy_helper_permissions_v1_"+B.a.i(d.toLowerCase()),B.Y.az(e.aj(),null)),$async$arC)
case 3:case 1:return A.h(u,v)}})
return A.i($async$arC,v)},
cfY(d){var w=0,v=A.j(x.gp),u,t
var $async$cfY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=new C.Wx(!0,!0,!0,!0)
w=3
return A.b(C.arC(d,t),$async$cfY)
case 3:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfY,v)},
hE_(d){var w=B.a.i(d.toLowerCase()),v=A.ag("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=A.ag("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=A.ag("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=A.ag("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
hDY(d){var w=A.ag("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
Wx:function Wx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bGa(d,e,f,g,h){var w=0,v=A.j(x.H),u,t,s
var $async$bGa=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return A.b(C.b1v(h),$async$bGa)
case 3:if(j){w=1
break}w=4
return A.b(C.aru(h),$async$bGa)
case 4:if(d.e==null){w=1
break}t=A.qT(d,!0)
t.toString
s=A.dj()
s.b=A.pw(new C.h0V(g,e,f,s),!1,!1)
t.m7(0,s.bl())
case 1:return A.h(u,v)}})
return A.i($async$bGa,v)},
h0V:function h0V(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h0U:function h0U(d){this.a=d},
a_N:function a_N(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCo:function aCo(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cQ$=d
_.b7$=e
_.c=_.a=null},
dnw:function dnw(d){this.a=d},
dnx:function dnx(d,e,f){this.a=d
this.b=e
this.c=f},
dnC:function dnC(){},
dnB:function dnB(d){this.a=d},
dny:function dny(d){this.a=d},
dnz:function dnz(){},
dnA:function dnA(d){this.a=d},
aMs:function aMs(){},
hW7(d){var w=B.a.i(d),v=A.ag("[^A-Z0-9]",!0,!1,!1,!1),u=A.aL(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
hW6(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.q(w,"|")||B.a.q(w,":")||B.a.q(w,"/")||B.a.q(w,".")||B.a.q(w," "))return!1
v=A.ag("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
as6(d){return C.hW4(d)},
hW4(d){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$as6=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.f4("ngmy_local_deposit_qr_v1_"+B.a.i(d),null,!1,B.bN),$async$as6)
case 7:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.ab(o)
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
return A.i($async$as6,v)},
b2q(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$b2q=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.hW7(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.f4("ngmy_local_deposit_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bN),$async$b2q)
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
q=A.ab(m)
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
return A.i($async$b2q,v)},
hpW(d){var w,v=B.a.i(d)
if(B.a.a0(v,"NGMYLOCALDEP1|")){w=B.a.i(B.a.b2(v,14))
return w.length===0?null:w}return null},
hW5(d,e,f){var w=B.a.i(f)
if(w.length===0)return!1
return B.d.aV(e,new C.chL(B.a.i(d.toLowerCase()),w))},
hpX(d,e,f,g,h){var w,v,u=J.a7(g),t=u.h(g,"lockedToEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=B.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.qe(!1,0,y.u)
if(s!==B.a.i(f.toLowerCase()))return new C.qe(!1,0,y.j)
v=B.a.i(h)
if(v.length===0)return new C.qe(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.qe(!1,0,"Verification code does not match this deposit.")
if(!C.hW5(e,d,w))return new C.qe(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
h8B(d,e){var w,v,u="amount",t=J.a7(d),s=t.h(d,"redeemedBy")
if(B.a.i(J.k(s==null?"":s)).length!==0)return D.dTm
s=t.h(d,"lockedToEmail")
w=B.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=B.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){A.aJ(t.h(d,u))
return new C.OD(!0,!1,!1,!0)}if(w!==B.a.i(e.toLowerCase())){A.aJ(t.h(d,u))
return new C.OD(!0,!1,!0,!1)}A.aJ(t.h(d,u))
return new C.OD(!0,!1,!1,!1)},
chR(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$chR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=C.hpW(d)
if(s==null){u=D.Tw
w=1
break}w=3
return A.b(C.as6(s),$async$chR)
case 3:t=g
if(t==null){u=D.Tw
w=1
break}u=C.h8B(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$chR,v)},
b2s(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$b2s=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.b2q(d),$async$b2s)
case 3:s=g
if(s==null||s.length===0){u=D.Tw
w=1
break}w=4
return A.b(C.as6(s),$async$b2s)
case 4:t=g
if(t==null){u=D.Tw
w=1
break}u=C.h8B(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2s,v)},
chS(d,e,f,g,h){var w=0,v=A.j(x.D),u,t
var $async$chS=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.b2q(d),$async$chS)
case 3:t=j
if(t==null||t.length===0){u=new C.qe(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.WQ(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$chS,v)},
WQ(d,e,f,g,h){return C.hW8(d,e,f,g,h)},
hW8(a2,a3,a4,a5,a6){var w=0,v=A.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$WQ=A.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.hpW(a4)
if(a0==null){u=new C.qe(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return A.b(C.as6(a0),$async$WQ)
case 3:k=a8
if(k==null){u=new C.qe(!1,0,y.m)
w=1
break}j=C.h8B(k,a5)
if(j.b){u=new C.qe(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.qe(!1,0,y.u)
w=1
break}if(j.c){u=new C.qe(!1,0,y.j)
w=1
break}i=C.hpX(a2,a3,a5,k,a6)
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
return A.b(A.f4("ngmy_local_deposit_qr_v1_"+B.a.i(a0),null,!1,B.bN),$async$WQ)
case 8:p=a8
if(p==null){u=new C.qe(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.t(p,"redeemedBy")
if(B.a.i(J.k(g==null?"":g)).length!==0){u=new C.qe(!1,0,"This deposit code was already used.")
w=1
break}o=C.hpX(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=B.a.i(a0)
f=x.N
e=x.z
n=A.dN(p,f,e)
J.aK(n,"redeemedBy",q)
J.aK(n,"redeemedAt",r)
w=9
return A.b(A.hJ("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,B.cM,null),$async$WQ)
case 9:n=J.t(p,"shortCode")
m=B.a.i(J.k(n==null?"":n))
w=J.ad(m)!==0?10:11
break
case 10:w=12
return A.b(A.hJ("ngmy_local_deposit_code_v1_"+B.a.i(m).toUpperCase(),A.I(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,B.cM,null),$async$WQ)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=A.ab(a1)
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
return A.i($async$WQ,v)},
OD:function OD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
qe:function qe(d,e,f){this.a=d
this.b=e
this.c=f},
chL:function chL(d,e){this.a=d
this.b=e},
chZ(d,e){var w
A.hfc(d,e,!1)
A.re(d.a,d.d,!0,!1)
w=B.a.i("")
if(w.length!==0)A.Bu(!0,!1,d.d,w)},
a8K(d,e){if(d==null)return!1
return A.bC(d)===e.gcl()&&A.bL(d)===e.gcg()&&A.bW(d)===e.gcz()},
hWg(d){var w=A.dg(d)*60+A.fP(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
hq3(d){if(A.dg(d)>=12)return!1
if(A.ms(d)===6||A.ms(d)===7)return!1
return!0},
ci2(d){var w=d.c?d.bT():d
return w.d3(A.c1(A.bC(w),A.bL(w),A.bW(w),12,0,0,0,0))},
h8F(d,e){var w,v,u,t=d.gCS()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a8K(d.fx,e)&&d.fy>0.0001)return B.j.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bT()
if(!C.ci2(w))return 0
v=A.c1(e.gcl(),e.gcg(),e.gcz(),12,0,0,0,0)
if(!e.d3(v))return t
if(!e.cf(w))return 0
u=B.o.aq(v.bD(w).a,1000)
if(u<=0)return t
return B.j.D(t*(B.o.D(B.o.aq(e.bD(w).a,1000),0,u)/u),0,t)},
h8E(d,e){var w,v,u,t,s,r,q,p=new A.V(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a8K(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bT():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!B.d.aV(e,new C.chY(s))&&C.ci2(t)){r=d.gCS()
v=r>0
if(v){q=new A.d7(s,d.a,r,B.h0,B.fu,"Clock-in daily earnings (local)",null,null,B.cv,p)
C.chZ(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a8K(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a8K(o,p)&&!C.ci2(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
chY:function chY(d){this.a=d},
iaI(d){var w,v,u=d.k4,t=u==null?null:B.a.i(u)
if(t!=null&&t.length!==0)return t
w=B.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=B.a.i(d.a)
if(B.a.q(v,"@"))return B.d.gH(v.split("@"))
return"Member"},
isG(d,e,f,g,h,i){return A.hy(d,new C.as7(f,e,i,g,h,null),!0,null,x.H)},
hui(d){var w,v,u=d.c?d.bT():d,t=A.dg(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+A.bL(u)+"/"+A.bW(u)+"/"+A.bC(u)+" \xb7 "+w+":"+B.a.b0(B.o.u(A.fP(u)),2,"0")+" "+v},
hBT(d){var w=d.x
if(w===B.dE)return"Processing"
if(w===B.kE)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
ijd(d){var w=d.f,v=B.a.i(w==null?"":w),u=v.toLowerCase()
if(B.a.q(u,"clock-in daily earnings")||B.a.q(u,"clock-in earnings"))return"Clock-in completed"
if(B.a.q(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===B.fP)return"Deposit"
if(w===B.f0)return"Withdrawal"
return v.length!==0?v:w.b},
ian(d){var w=d.d,v=w===B.fP||w===B.p3||w===B.h0||w===B.kF,u=d.x
if(u===B.dE)return w===B.f0?-d.c:0
if(u!==B.cv)return 0
w=d.c
return v?w:-w},
ijM(d,e){var w,v,u,t,s,r,q=A.C(d,x.o)
B.d.aZ(q,new C.fLn())
w=A.T(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,A.J)(q),++t,v=r){s=q[t]
r=v-C.ian(s)
if(r<0)r=0
w.n(0,s.a,new A.bqy(v,r))}return w},
as7:function as7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFK:function aFK(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
eol:function eol(d){this.a=d},
ep1:function ep1(d){this.a=d},
ep2:function ep2(d){this.a=d},
ep3:function ep3(d){this.a=d},
eoK:function eoK(d,e){this.a=d
this.b=e},
eoL:function eoL(){},
eoM:function eoM(d){this.a=d},
eoN:function eoN(){},
eoO:function eoO(d){this.a=d},
eoP:function eoP(d,e,f){this.a=d
this.b=e
this.c=f},
eoQ:function eoQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eoF:function eoF(d,e){this.a=d
this.b=e},
eom:function eom(d,e,f){this.a=d
this.b=e
this.c=f},
eoG:function eoG(){},
eoH:function eoH(){},
eoI:function eoI(d){this.a=d},
eoJ:function eoJ(){},
eoq:function eoq(d,e){this.a=d
this.b=e},
eor:function eor(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eoz:function eoz(){},
eow:function eow(d){this.a=d},
eox:function eox(d,e){this.a=d
this.b=e},
eoy:function eoy(d,e){this.a=d
this.b=e},
eoA:function eoA(d){this.a=d},
eoB:function eoB(d,e,f){this.a=d
this.b=e
this.c=f},
eoC:function eoC(d){this.a=d},
eoE:function eoE(d){this.a=d},
eoD:function eoD(d){this.a=d},
eos:function eos(d){this.a=d},
eot:function eot(d,e,f){this.a=d
this.b=e
this.c=f},
eoU:function eoU(){},
eoV:function eoV(){},
eoZ:function eoZ(d){this.a=d},
eoS:function eoS(d){this.a=d},
ep_:function ep_(d){this.a=d},
eoR:function eoR(d){this.a=d},
ep0:function ep0(d){this.a=d},
eoW:function eoW(d){this.a=d},
eoX:function eoX(d){this.a=d},
eoY:function eoY(d){this.a=d},
eoT:function eoT(d){this.a=d},
eop:function eop(d){this.a=d},
eoo:function eoo(d){this.a=d},
eon:function eon(d){this.a=d},
eov:function eov(d,e){this.a=d
this.b=e},
eou:function eou(d,e){this.a=d
this.b=e},
aDa:function aDa(d,e,f,g,h,i,j,k,l,m){var _=this
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
drX:function drX(){},
drY:function drY(){},
drZ:function drZ(d,e,f){this.a=d
this.b=e
this.c=f},
drW:function drW(d){this.a=d},
ds_:function ds_(d,e){this.a=d
this.b=e},
drV:function drV(d){this.a=d},
aD9:function aD9(d,e,f,g,h,i,j,k,l,m){var _=this
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
bjK:function bjK(d,e){var _=this
_.f=_.e=_.d=$
_.cQ$=d
_.b7$=e
_.c=_.a=null},
drQ:function drQ(d){this.a=d},
drR:function drR(d){this.a=d},
drS:function drS(d){this.a=d},
drT:function drT(){},
drU:function drU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
drP:function drP(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
drO:function drO(d){this.a=d},
bdm:function bdm(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
bdl:function bdl(d,e,f){this.b=d
this.d=e
this.a=f},
bdk:function bdk(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aDb:function aDb(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aDc:function aDc(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
dsg:function dsg(){},
dsh:function dsh(){},
dsi:function dsi(){},
ds2:function ds2(d){this.a=d},
ds1:function ds1(d,e){this.a=d
this.b=e},
ds0:function ds0(d,e){this.a=d
this.b=e},
dsd:function dsd(d,e){this.a=d
this.b=e},
dsf:function dsf(d,e){this.a=d
this.b=e},
dse:function dse(d,e){this.a=d
this.b=e},
dsc:function dsc(){},
dsb:function dsb(d){this.a=d},
dsa:function dsa(){},
ds5:function ds5(d){this.a=d},
ds6:function ds6(){},
ds7:function ds7(d){this.a=d},
ds8:function ds8(d){this.a=d},
ds4:function ds4(){},
ds9:function ds9(d){this.a=d},
ds3:function ds3(d){this.a=d},
bcK:function bcK(d){this.a=d},
fLn:function fLn(){},
bxP:function bxP(d,e){this.b=d
this.a=e},
aMI:function aMI(){},
bzO:function bzO(){},
ifL(d,e,f,g,h,i,j,k){var w,v=B.a.i(j.toLowerCase())
B.d.bt(d,new C.fDc(v,g))
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
aQQ(d){var w,v=J.a7(d),u=A.aJ(v.h(d,"matchesTotal")),t=u==null?null:B.j.M(u)
if(t==null)t=1
v=A.aJ(v.h(d,"matchesPlayed"))
w=v==null?null:B.j.M(v)
return B.o.D(t-(w==null?0:w),0,t)},
irl(d,e){var w=A.U(e).k("Y<1>")
w=A.C(new A.Y(e,new C.fW5(B.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
aim(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.J)(d),++v){u=d[v]
if(C.aQQ(u)<=0){t=J.cC(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
iir(d,e){var w,v,u,t=J.a7(d),s=t.h(d,"status")
if(!J.z(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.z(s==null?"":s,"complete"))return!1
if(C.aQQ(d)<=0)return!1
w=B.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=B.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=B.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aQQ(d)>0},
iiq(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a7(d),h=A.aJ(i.h(d,"matchesTotal")),g=h==null?null:B.j.M(h)
if(g==null)g=1
h=A.aJ(i.h(d,"matchesPlayed"))
w=h==null?null:B.j.M(h)
v=(w==null?0:w)+1
u=B.a.i(e.toLowerCase())
t=i.h(d,"sessionState")
h=x.f
if(!h.b(t))return"Game "+v+" of "+g+" \u2014 tap Join room when you are ready"
s=x.N
r=x.z
q=A.a3(t,s,r)
p=q.h(0,"inGame")
o=h.b(p)?A.a3(p,s,r):A.T(s,r)
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
ifK(d,e){var w
C.aim(e)
w=A.U(e).k("Y<1>")
w=A.C(new A.Y(e,new C.fDb(B.a.i(d.toLowerCase())),w),w.k("M.E"))
return w},
uw(d,e){var w,v,u
for(w=J.aU(d);w.C();){v=w.gR(w)
u=J.t(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
ic5(d,e,f){var w,v,u,t="fromName",s=J.a7(f),r=s.h(f,"fromEmail"),q=B.a.i(J.k(r==null?"":r).toLowerCase())
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
heS(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase()),r=J.a7(d),q=r.h(d,"fromEmail"),p=B.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=B.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.ic5(x.f.b(u)?A.a3(u,r,q):A.T(r,q),v,d)
if((t.length===0||B.a.q(t,"@"))&&f!=null){t=J.t(f,v)
if(t==null)t=""}if(t.length===0||B.a.q(t,"@"))return"Opponent"
return t},
bF0(){var w=0,v=A.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bF0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bF0)
case 7:r=e
q=A.aT(J.t(r.a,"all_users"))
if(q==null||q.length===0){k=x.N
u=A.T(k,k)
w=1
break}p=B.Y.aQ(0,q,null)
if(!x.j.b(p)){k=x.N
u=A.T(k,k)
w=1
break}k=x.N
o=A.T(k,k)
for(k=J.aU(p),j=x.f;k.C();){n=k.gR(k)
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
return A.i($async$bF0,v)},
bE4(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bE4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return A.b(C.bF0(),$async$bE4)
case 3:u=t.heS(s,r,g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bE4,v)},
LL(d,e,f){var w=0,v=A.j(x.h),u,t,s,r,q,p
var $async$LL=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(d)
p=$.hz5.h(0,q)
if(p!=null){t=new A.V(Date.now(),0,!1).bD(p)
t=t.a>A.dv(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.hz5.n(0,q,new A.V(Date.now(),0,!1))
w=5
return A.b(A.RN(B.cd,q),$async$LL)
case 5:case 4:s=$.hz4.h(0,q)
if(s==null){u=C.uw(e,q)
w=1
break}r=C.uw(A.bEb(e,A.a([s],x._)),q)
if(r!=null)A.hhp(e,r)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$LL,v)},
irA(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.J)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new A.V(Date.now(),0,!1).ag())
return}}},
i8C(d,e){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
p=q.h(d,"fromEmail")
w=B.a.i(J.k(p==null?"":p).toLowerCase())
p=q.h(d,"toEmail")
v=B.a.i(J.k(p==null?"":p).toLowerCase())
q=q.h(d,"fromName")
u=J.k(q==null?w:q)
switch(o){case"tic_tac_go":q=x.N
return A.I(["ttt",A.c_(9,"",!1,q),"turnEmail",w,"playerXEmail",w,"playerXName",u,"playerOEmail",v,"playerOName",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],q,x.z)
case"connect_four_pro":t=J.e2(6,x.L)
for(q=x.S,s=0;s<6;++s)t[s]=A.c_(7,0,!1,q)
return A.I(["c4",t,"c4Turn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
case"checkers_deluxe":t=J.e2(8,x.L)
for(q=x.S,r=0;r<8;++r)t[r]=A.ir(8,new C.fru(r),!0,q)
return A.I(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return A.I(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
ifJ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.J)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new A.V(Date.now(),0,!1).ag())
r=C.i8C(u,f)
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
iry(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.J)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)!==e)continue
w=A.aJ(t.h(u,i))
w=w==null?null:B.j.M(w)
r=(w==null?0:w)+1
t.n(u,i,r)
w=A.aJ(t.h(u,"matchesTotal"))
q=w==null?null:B.j.M(w)
if(r>=(q==null?1:q)){t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}else{p=t.h(u,h)
if(x.f.b(p)){w=x.N
s=x.z
o=A.a3(p,w,s)
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
hho(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.J)(d),++v){u=d[v]
t=J.a7(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",A.a3(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new A.V(Date.now(),0,!1).ag())
return}}},
fUD(d){var w=0,v=A.j(x.gw),u,t,s,r,q
var $async$fUD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.aim(d)
t=$.he4
if(t==null)s=$.he4=A.RN(B.cd,null).fv(new C.fUE())
else s=t
w=3
return A.b(s,$async$fUD)
case 3:r=f
if(r==null){u=A.bq(new A.N(d,new C.fUF(),A.U(d).k("N<1,@>")),!0,x.P)
w=1
break}q=A.bEb(d,r)
B.d.a8(d)
B.d.v(d,q)
u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fUD,v)},
ain(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$ain=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.aim(d)
t=A.U(d).k("N<1,a8<n,@>>")
t=A.C(new A.N(d,new C.fSx(),t),t.k("ak.E"))
w=3
return A.b(A.RN(t,null),$async$ain)
case 3:s=f
if(s==null){u=!1
w=1
break}r=A.bEb(d,s)
B.d.a8(d)
B.d.v(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ain,v)},
aRJ(d,e,f){var w=0,v=A.j(x.y),u,t,s,r
var $async$aRJ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:C.hho(d,e,f)
t=C.uw(d,e)
if(t==null){u=!1
w=1
break}w=3
return A.b(A.RN(A.a([A.a3(t,x.N,x.z)],x._),e),$async$aRJ)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.uw(s,e)
if(r!=null)A.hhp(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aRJ,v)},
inx(d,e,f){var w
C.hho(d,e,f)
w=$.hdQ.h(0,e)
if(w!=null)w.a1(0)
$.hdQ.n(0,e,A.cy(B.lH,new C.fSy(e,d)))},
h8m(d,e){return new C.b1d(!0,d,"NGMY",B.a.i(e.toLowerCase()),null,!0)},
fDc:function fDc(d,e){this.a=d
this.b=e},
fW5:function fW5(d){this.a=d},
fDb:function fDb(d){this.a=d},
fru:function fru(d){this.a=d},
fUE:function fUE(){},
fUF:function fUF(){},
fSx:function fSx(){},
fSy:function fSy(d,e){this.a=d
this.b=e},
b1d:function b1d(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
is3(d,e,f){return A.bT(B.L,null,new C.fXh(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
fXh:function fXh(d,e){this.a=d
this.b=e},
a0A:function a0A(d,e,f){this.c=d
this.d=e
this.a=f},
aFy:function aFy(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
ej3:function ej3(d){this.a=d},
ej6:function ej6(d){this.a=d},
ej7:function ej7(d){this.a=d},
ej5:function ej5(d){this.a=d},
ej8:function ej8(d){this.a=d},
ej9:function ej9(d,e){this.a=d
this.b=e},
ej4:function ej4(d,e){this.a=d
this.b=e},
im_(d){var w,v,u,t=B.a.i(d)
if(t.length===0)return B.iR
w=t.toLowerCase()
v=A.ag("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return B.iR
v=Date.now()
u=C.ibp(w,new A.V(v,0,!1))
v=x.N
return A.a([new A.kF("calendar",A.I(["title",C.ibo(t,w),"start",u.ag(),"end",u.bR(36e8).ag(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
ibo(d,e){var w,v,u,t,s,r=A.ag("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return B.a.i(w==null?"":w)}u=A.ag("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hzS(B.a.i(t))}s=A.ag("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hzS(B.a.i(t))}if(B.a.q(e,"meeting"))return"Meeting"
if(B.a.q(e,"appointment"))return"Appointment"
return"NGMY Event"},
hzS(d){var w
if(d.length===0)return d
w=B.a.fw(d,A.ag("\\s+",!0,!1,!1,!1))
return new A.N(w,new C.fCa(),A.U(w).k("N<1,n>")).aO(0," ")},
ibp(d,e){var w,v,u,t,s,r,q,p,o=A.c1(A.bC(e),A.bL(e),A.bW(e),0,0,0,0,0)
if(B.a.q(d,"tomorrow"))o=o.bR(864e8)
else if(!B.a.q(d,"today"))for(w=D.aIP.gdO(D.aIP),w=w.gae(w);w.C();){v=w.gR(w)
u=v.a
if(A.cS(d,u,0)){t=C.iam(o,v.b)
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
q=0}return A.c1(A.bC(o),A.bL(o),A.bW(o),r,q,0,0,0)},
iam(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(A.ms(w)===e){u=!0
if(v<=0){t=d.bR(36e8)
s=w.a
if(s>=t.gbq())u=s===t.gbq()&&w.b<t.gcC()}}else u=!1
if(u)return w
w=w.bR(r)}return d.bR(r)},
fCa:function fCa(){},
im0(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=B.a.i(d)
if(j.length===0)return B.iR
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
q=C.i7l(w,j)
if(q==null||q.length===0)return B.iR
t=A.ag("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=A.ag("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return A.a([new A.kF("call",A.I(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=A.I(["name",q],t,t)
if(r!=null)m.n(0,"body",r)
return A.a([new A.kF(n,m)],x.Z)}if(p){t=x.N
return A.a([new A.kF("call",A.I(["name",q],t,t))],x.Z)}return B.iR},
i7l(d,e){var w,v,u,t,s,r,q=[A.ag("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),A.ag("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),A.ag("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
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
if(u)return C.ieW(t)}r=A.ag("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return B.a.i(u==null?"":u)}return null},
ieW(d){var w=B.a.fw(d,A.ag("\\s+",!0,!1,!1,!1))
return new A.N(w,new C.fC9(),A.U(w).k("N<1,n>")).aO(0," ")},
fC9:function fC9(){},
hE6(d){var w=new A.N(d,new C.fUV(),A.U(d).k("N<1,a8<n,@>>")).bY(0,new C.fUW())
w=A.C(w,w.$ti.k("M.E"))
return w},
fUV:function fUV(){},
fUW:function fUW(){},
im3(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return B.iR
w=B.a.i(d)
if(w.length===0)return B.iR
v=w.toLowerCase()
if(!(B.a.q(v,"send email")||B.a.q(v,"send an email")||B.a.q(v,"send a message to")||B.a.q(v,"email ")||B.a.q(v,"write an email")||B.a.q(v,"write email")))return B.iR
u=A.ag("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cF(w)
if(u==null)return B.iR
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
return A.a([new A.kF("send_email",t)],x.Z)},
ilc(d,e){var w
if(e)return d
w=J.dI(d,new C.fOL())
w=A.C(w,w.$ti.k("M.E"))
return w},
fOL:function fOL(){},
inu(d){switch(d){case"blackjack_vegas":return D.dXl
case"roulette_euro":return D.dX5
case"slots_jackpot":return D.dXc
case"poker_texas":return D.dXf
case"chess_royale":return D.dX6
case"connect_four_pro":return D.dX7
case"domino_block":return D.dX9
case"plinko_prizes":return D.dXh
case"spin_wheel":return D.dXe
case"baccarat_punto":return D.dX8
case"craps_table":return D.dXg
case"casino_war":return D.dXa
case"bingo_live":return D.dXd
case"solitaire_klondike":return D.dXk
case"backgammon_pro":return D.dX4
case"billiards_snooker":return D.dXi
case"profit_solve":return D.dXj
default:return D.dXb}},
fSo(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=A.m(8)
v=A.L(B.aS,B.r,1.5)
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.eu,6)],x.V)
return A.q(p,A.at(A.X(B.ow,B.c.j(0.5),p,p,p,23.400000000000002),p,p,p),B.f,p,p,new A.p(p,p,v,w,u,D.c7W,B.n),p,74,p,p,p,p,p,52)}t=B.o.D(d,1,13)
s=t===1||t>=10||B.o.F(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][B.o.F(t,4)]
q=s?B.bC:B.T
w=A.m(8)
v=A.L(B.aO,B.r,1)
u=A.a([new A.ac(0,B.G,B.w.j(0.28),B.eu,6)],x.V)
return A.q(p,A.x(A.a([new A.D(D.bGV,A.d(D.cGp[t-1]+"\n"+r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,B.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),B.b5,A.at(A.d(r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),B.b5],x.p),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(B.hF,p,v,w,u,p,B.n),p,74,p,p,p,p,p,52)},
ioA(d,e){var w,v=null,u=A.m(18),t=A.L(B.aS,B.r,3),s=A.a([new A.ac(0,B.G,B.aF.j(0.5),B.H,20)],x.V),r=A.U(e).k("N<1,h2>")
r=A.C(new A.N(e,new C.fUm(),r),r.k("ak.E"))
w=x.p
return A.x(A.a([A.q(v,A.x(A.a([D.fGH,B.af,A.A(r,B.l,v,B.bb,B.i,0,v,v)],w),B.l,v,B.e,B.i,0,B.p),B.f,v,v,new A.p(v,v,t,u,s,D.c8f,B.n),v,v,v,v,I.alZ,v,v,v),B.aB,A.dh(B.as2,D.fHi,d,A.bp(B.aS,v,v,v,B.dx,v,An.a0G,v,v,v,v,v))],w),B.l,v,B.e,B.i,0,B.p)},
pt:function pt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bsF:function bsF(d,e){this.b=d
this.a=e},
fUm:function fUm(){},
hWR(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e2(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=A.c_(8,0,!1,w)
u=A.c_(9,"",!1,p)
t=x.t
s=A.a([],t)
r=A.a([],t)
t=A.a([0,0,0],t)
q=J.e2(6,o)
for(v=0;v<6;++v)q[v]=A.c_(7,0,!1,w)
return new C.asy(A.T(p,x.z),n,u,s,r,t,q,new A.au(B.aw,$.aw()))},
igj(d,e,f,g,h){var w=new C.fEU(f,h)
switch(d){case"checkers_deluxe":return C.i5N(h,g,e,w)
case"tic_tac_go":return C.if9(h,g,e,w)
case"blackjack_vegas":return C.i52(h,g,e,new C.fEO(w))
case"roulette_euro":return C.idh(h,g,e,new C.fEP(w))
case"slots_jackpot":return C.ie7(h,g,e,new C.fEQ(w))
case"billiards_snooker":return C.ic8(h,g,e,new C.fER(w))
case"connect_four_pro":return C.i6c(h,g,e,w)
case"profit_solve":return C.icb(h,g,e,new C.fES(w))
default:return C.i5K(d,h,g,e,new C.fET(w))}},
i5N(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.xj,B.K,w,w),u=A.m(12),t=A.L(D.Z8,B.r,8),s=A.a([new A.ac(0,B.G,B.w.j(0.4),B.H,16)],x.V)
return A.x(A.a([new A.D(B.eM,v,w),A.E(A.at(new A.fH(1,A.q(w,A.by(A.m(6),A.ip(!0,w,w,B.y,D.ffy,new C.foD(d,e,f,g),64,w,B.dW,B.ah,!1),B.aq),B.f,w,w,new A.p(w,w,t,u,s,w,B.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),B.l,w,B.e,B.i,0,B.p)},
if9(d,e,f,g){var w=null
return A.x(A.a([new A.D(B.eM,A.d(d.c,w,w,w,w,w,w,D.xj,B.K,w,w),w),A.E(A.at(new A.fH(1,A.cs(new C.fCu(d,e,f,g)),w),w,w,w),1)],x.p),B.l,w,B.e,B.i,0,B.p)},
i52(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.xj,B.K,v,v),t=x.p,s=A.a([],t),r=d.CW,q=d.ch
if(r)B.d.v(s,new A.N(q,new C.fnW(),A.U(q).k("N<1,v>")))
else B.d.v(s,A.a([C.fSo(q[0],!1),B.bm,C.fSo(0,!0)],t))
s=A.A(s,B.l,v,B.bb,B.i,0,v,v)
r=A.d("Total: "+d.a4l(d.ay),v,v,v,v,v,v,D.fBF,v,v,v)
q=d.ay
w=A.U(q).k("N<1,v>")
q=A.C(new A.N(q,new C.fnX(),w),w.k("ak.E"))
q=A.bU(B.fQ,q,B.bs,v,6,6)
return A.x(A.a([new A.D(B.eM,u,v),D.fNR,B.an,s,B.aB,D.fVz,r,B.an,q,B.b5,A.A(A.a([A.E(A.bI(D.fHM,v,d.CW?v:new C.fnY(d,e,f,g),v),1),B.ae,A.E(A.bI(D.fY4,v,new C.fnZ(d,e,f,g),v),1)],t),B.l,v,B.e,B.i,0,v,v)],t),B.l,v,B.e,B.i,0,B.p)},
idh(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.xj,B.K,w,w),u=d.cx,t=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cA,16)],x.V)
t=A.a([new A.D(B.eM,v,w),A.q(w,A.b4(w,w,w,new C.bsF(u,w),B.az),B.f,w,w,new A.p(w,w,w,w,t,w,B.a7),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new A.D(B.jE,A.d("Result: "+A.w(v),w,w,w,w,w,w,D.foR,w,w,w),w))
t.push(B.af)
t.push(A.bU(B.fQ,A.ir(6,new C.fzq(d,e,f,g),!0,x.l),B.bs,w,6,6))
return A.x(t,B.l,w,B.e,B.i,0,B.p)},
ie7(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.xj,B.K,w,w),u=d.db,t=A.U(u).k("N<1,n>")
u=A.C(new A.N(u,new C.fBl(),t),t.k("ak.E"))
return A.x(A.a([new A.D(B.eM,v,w),C.ioA(new C.fBm(d,e,f,g),u)],x.p),B.l,w,B.e,B.i,0,B.p)},
ic8(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.xj,B.K,w,w),u=A.m(20),t=A.L(B.ha,B.r,12),s=x.V,r=A.a([new A.ac(0,B.G,B.w.j(0.45),B.dv,18)],s),q=x.p
return A.x(A.a([new A.D(B.eM,v,w),A.E(A.q(w,new A.an(B.a0,w,B.ad,B.t,A.a([A.ap(w,A.q(w,w,B.f,w,w,D.b6C,w,18,w,w,w,w,w,18),w,w,24,w,24,w),A.ap(28,A.q(w,w,B.f,w,w,B.aeu,w,14,w,w,w,w,w,14),w,w,w,32,w,w),A.at(A.eN(B.A,d.dx,A.q(w,w,B.f,w,w,new A.p(B.aS,w,w,A.m(2),A.a([new A.ac(0,B.G,B.w.j(0.3),B.H,4)],s),w,B.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),B.f,w,w,new A.p(w,w,t,u,r,D.eyR,B.n),w,w,w,B.f4,w,w,w,w),1),A.kV(B.be,w,w,1,0,new C.fyf(d,f),d.dy),A.bI(D.fMR,w,new C.fyg(d,e,g,f),w)],q),B.l,w,B.e,B.i,0,B.p)},
i6c(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.xj,B.K,v,v),t=x.l,s=J.e2(7,t)
for(w=0;w<7;++w)s[w]=new A.bz(1,B.bc,A.aA(v,A.x(A.ir(6,new C.fp4(d,w),!0,t),B.l,v,B.mr,B.i,0,B.p),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.fp5(d,w,e,f,g),v,v,v,v,v,v,!1,B.a4),v)
return A.x(A.a([new A.D(B.eM,u,v),A.E(A.at(new A.fH(1.1666666666666667,A.A(s,B.dL,v,B.e,B.i,0,v,v),v),v,v,v),1)],x.p),B.l,v,B.e,B.i,0,B.p)},
icb(d,e,f,g){var w=null
return A.x(A.a([new A.D(B.eM,A.d(d.c,w,w,w,w,w,w,D.xj,B.K,w,w),w),A.d(""+d.a+"/"+d.b,w,w,w,w,w,w,B.iA,w,w,w),A.d(d.fy,w,w,w,w,w,w,D.aW9,B.K,w,w),A.aM(w,B.Z,!1,w,!0,B.t,w,A.aO(),d.id,w,w,w,w,w,2,D.c3H,B.y,!0,w,!0,w,!1,w,B.ak,w,w,w,w,w,B.e0,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.fyr(d,e,g,f),w,!1,w,w,!1,w,!0,w,B.ac,w,w,w,w,w,w,w,w,w,w,w,B.dg,!0,B.a5,w,B.ao,w,w,w,w),A.bI(D.fLq,w,new C.fys(d,e,g,f),w)],x.p),B.l,w,B.e,B.i,0,B.p)},
i5K(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gkq(),k=e.d
k=k==null?n:k.c
w=C.inu(d)
v=D.aID.h(0,d)
if(v==null)v=d
m=A.d(m,n,n,n,n,n,n,B.l4,B.K,n,n)
u=A.m(22)
t=w.a
s=w.b
r=A.L(s.j(0.5),B.r,2)
q=A.a([new A.ac(0,B.G,w.c.j(0.35),B.f_,24)],x.V)
p=A.d(w.e,n,n,n,n,n,n,Al.KD,n,n,n)
o=A.d(v,n,n,n,n,n,n,B.ne,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+A.w(k)+" at the table"
k=x.p
q=A.E(A.at(A.q(n,A.x(A.a([p,B.X,o,B.U,A.d(l,n,n,n,n,n,n,A.l(n,n,B.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),B.K,n,n),B.d8,A.X(w.f,s.j(0.85),n,n,n,48)],k),B.l,n,B.bb,B.i,0,B.p),B.f,n,n,new A.p(n,n,r,u,q,new A.a9(B.b7,B.b8,B.x,t,n,n),B.n),n,n,n,B.f4,B.ac,n,n,1/0),n,n,n),1)
return A.x(A.a([m,B.af,q,B.U,new A.a5(1/0,n,A.bI(D.fXa,n,new C.fox(f,e,g,h),A.bp(s,n,n,n,B.d.gH(t).iU()>0.4?B.w:B.c,n,B.cp,n,n,n,n,n)),n)],k),B.l,n,B.e,B.i,0,B.p)},
Fo:function Fo(d,e){this.a=d
this.b=e},
asy:function asy(d,e,f,g,h,i,j,k){var _=this
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
cjE:function cjE(){},
cjF:function cjF(){},
cjD:function cjD(){},
cjG:function cjG(){},
cjC:function cjC(){},
cjI:function cjI(){},
cjJ:function cjJ(){},
cjB:function cjB(d){this.a=d},
cjH:function cjH(){},
cjA:function cjA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fEU:function fEU(d,e){this.a=d
this.b=e},
fEO:function fEO(d){this.a=d},
fEP:function fEP(d){this.a=d},
fEQ:function fEQ(d){this.a=d},
fER:function fER(d){this.a=d},
fES:function fES(d){this.a=d},
fET:function fET(d){this.a=d},
foD:function foD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
foC:function foC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fCu:function fCu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCt:function fCt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fCs:function fCs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fnW:function fnW(){},
fnX:function fnX(){},
fnY:function fnY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fnZ:function fnZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fzq:function fzq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fzp:function fzp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fBl:function fBl(){},
fBm:function fBm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fyf:function fyf(d,e){this.a=d
this.b=e},
fyg:function fyg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fp5:function fp5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fp4:function fp4(d,e){this.a=d
this.b=e},
fyr:function fyr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fys:function fys(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fox:function fox(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ijf(d){var w,v=A.U(d).k("Y<1>")
v=A.pG(new A.Y(d,new C.fKq(),v),120,v.k("M.E"))
w=A.cF(v,new C.fKr(),A.a4(v).k("M.E"),x.N).aO(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fKq:function fKq(){},
fKr:function fKr(){},
aiz(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
att:function att(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aGk:function aGk(d,e){var _=this
_.d=$
_.by$=d
_.a9$=e
_.c=_.a=null},
eQ8:function eQ8(){},
aOb:function aOb(){},
hUP(){var w=$.Jo
if(w<=0)return;--w
$.Jo=w
if(w===0){w=$.hpk
if(w!=null)w.$0()}},
cf2(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
ar6(d){var w=0,v=A.j(x.H),u,t
var $async$ar6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.h8h.J(0,t)
w=4
return A.b(A.az(),$async$ar6)
case 4:w=3
return A.b(f.aB("Bool","ngmy_game_free_play_used_"+B.a.i(t.toLowerCase()),!0),$async$ar6)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ar6,v)},
ar5(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$ar5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(C.cf2(d)){u=!0
w=1
break}t=B.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.h8h.q(0,t)){u=!1
w=1
break}w=3
return A.b(A.az(),$async$ar5)
case 3:s=f
r=B.a.i(t.toLowerCase())
r=A.k4(J.t(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ar5,v)},
Wu(){var w=0,v=A.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Wu=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Wu)
case 7:r=e
q=A.aT(J.t(r.a,"ngmy_helper_ai_usage_v1"))
if(q==null||B.a.i(q).length===0){u=A.T(x.N,x.z)
w=1
break}p=B.Y.aQ(0,q,null)
if(x.f.b(p)){o=A.a3(p,x.N,x.z)
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
return A.i($async$Wu,v)},
b1u(d){return C.hV0(d)},
hV0(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$b1u=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.az(),$async$b1u)
case 6:s=f
w=7
return A.b(s.aB("String","ngmy_helper_ai_usage_v1",B.Y.az(d,null)),$async$b1u)
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
return A.i($async$b1u,v)},
b1s(d,e){var w,v,u,t,s=J.t(d,B.a.i(e.toLowerCase()))
if(!x.f.b(s))return new A.af2(0,new A.V(Date.now(),0,!1))
w=J.a7(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=A.bj(u==null?"":u)
if(t==null)t=new A.V(Date.now(),0,!1)
return new A.af2(typeof v=="number"?B.o.D(B.j.M(v),0,999999):0,t)},
b1t(d,e){if(B.o.aq(e.bD(d.b).a,36e8)>=24)return new A.af2(0,e)
return d},
cfz(d,e){var w=0,v=A.j(x.S),u,t,s
var $async$cfz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return A.b(C.Wu(),$async$cfz)
case 3:t=g
s=Date.now()
u=B.o.D(e-C.b1t(C.b1s(t,d),new A.V(s,0,!1)).a,0,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfz,v)},
cfA(d,e){var w=0,v=A.j(x.cJ),u,t,s,r
var $async$cfA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return A.b(C.Wu(),$async$cfA)
case 3:t=g
s=Date.now()
r=C.b1t(C.b1s(t,d),new A.V(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bR(864e8)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfA,v)},
hV1(d){var w,v,u,t=d.a,s=B.o.aq(t,1e6)
if(s<=0)return"0s"
w=B.o.aq(t,36e8)
v=B.o.aq(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+B.a.b0(B.o.u(v),2,"0")+"m "+B.a.b0(B.o.u(u),2,"0")+"s"
if(v>0)return""+v+"m "+B.a.b0(B.o.u(u),2,"0")+"s"
return""+u+"s"},
b1v(d){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$b1v=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return A.b(C.Wu(),$async$b1v)
case 3:t=p.b1t(o.b1s(f,d),new A.V(Date.now(),0,!1))
w=4
return A.b(A.az(),$async$b1v)
case 4:s=f
r=B.a.i(d.toLowerCase())
q=t.b.aa().ag()
u=A.k4(J.t(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1v,v)},
aru(d){var w=0,v=A.j(x.H),u,t,s,r
var $async$aru=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return A.b(C.Wu(),$async$aru)
case 3:t=s.b1t(r.b1s(f,d),new A.V(Date.now(),0,!1))
w=5
return A.b(A.az(),$async$aru)
case 5:w=4
return A.b(f.aB("Bool","ngmy_helper_3left_"+B.a.i(d.toLowerCase())+"_"+t.b.aa().ag(),!0),$async$aru)
case 4:case 1:return A.h(u,v)}})
return A.i($async$aru,v)},
arv(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$arv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=B.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return A.b(C.Wu(),$async$arv)
case 3:s=g
r=Date.now()
q=C.b1t(C.b1s(s,d),new A.V(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aK(s,t,A.I(["count",r+1,"windowStart",q.b.aa().ag()],x.N,x.K))
w=4
return A.b(C.b1u(s),$async$arv)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arv,v)},
ai9(d,e,a0){var w=0,v=A.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ai9=A.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new A.fd("")
if(!d.d){p=!0
if(!C.hDZ(a0))if(!C.hDY(a0)){p=A.ag("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.hDZ(a0)?3:4
break
case 3:o=C.in9(a0)
w=o!=null?5:6
break
case 5:w=7
return A.b(C.c7H(e,o),$async$ai9)
case 7:n=a2
p=J.a7(n)
if(p.gcm(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.hnN(o)+":\n"
m.a+=l
for(p=p.gae(n);p.C();){m=p.gR(p)
l=h
k="- "+m.gWj()+"\n"
l.a+=k
m=m.f
if(m!=null&&B.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=A.ag("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return A.b(A.MG("text/plain"),$async$ai9)
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
case 13:case 9:w=C.hDY(a0)?15:16
break
case 15:p=h
f=C
w=17
return A.b(C.a8n(e),$async$ai9)
case 17:m=f.hps(a2)+"\n"
p.a+=m
case 16:p=A.ag("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return A.b(C.VA(e),$async$ai9)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cJ(i)){p=h
m=C.hnO(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=B.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ai9,v)},
hWo(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.q(w,"|")||B.a.q(w,":")||B.a.q(w,"/")||B.a.q(w,".")||B.a.q(w," "))return!1
v=A.ag("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
ci7(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ci7=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=A.hq8(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.f4("ngmy_local_growth_income_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bN),$async$ci7)
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
q=A.ab(m)
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
return A.i($async$ci7,v)},
asa(d){var w=0,v=A.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$asa=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=B.a.i(d)
if(J.ad(k)===0){u=null
w=1
break}t=4
w=7
return A.b(A.f4("ngmy_local_growth_income_stash_v1_"+B.a.i(k),null,!1,B.bN),$async$asa)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.t(r,"payload")
q=J.k(n==null?"":n)
if(J.ad(q)===0){u=null
w=1
break}n=J.t(r,"ownerEmail")
p=B.a.i(J.k(n==null?"":n))
n=B.ca.cH(0,B.cI.aN(q))
m=J.z(J.t(r,"live"),!0)
u=new A.aHL(m,p,n)
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=A.ab(j)
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
return A.i($async$asa,v)},
b2z(d){var w=0,v=A.j(x.bY),u,t,s,r,q
var $async$b2z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
w=C.hWo(q)?3:4
break
case 3:w=5
return A.b(C.ci7(q),$async$b2z)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.asa(t)
w=1
break
case 4:if(B.a.a0(q,"NGMYLOCALSYNC1|")){u=C.asa(B.a.i(B.a.b2(q,15)))
w=1
break}w=B.a.a0(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return A.b(C.asa(B.a.i(B.a.b2(q,15))),$async$b2z)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new A.aHL(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2z,v)},
hqo(d){var w=d.bL
if(w>=0)return w
return 1},
ail(d,e,f){var w=0,v=A.j(x.H),u,t
var $async$ail=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return A.b(A.aRU(d,e),$async$ail)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return A.b(A.Hw(d,null,null,!1,!0,""),$async$ail)
case 5:w=4
return A.b(t.$1(h),$async$ail)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ail,v)},
ilZ(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=B.a.i(a2)
if(a1.length===0)return B.iR
w=a1.toLowerCase()
v=A.ag("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=A.ag("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(!u&&t==null)return B.iR
s=new A.V(Date.now(),0,!1)
r=A.dj()
q=A.dj()
p=C.ibn(w)
if(p!=null){v=p.a
r.b=s.bR(v)
q.b=C.hyJ(a1,w)
if(J.z(q.bl(),"Wake up")&&B.o.aq(v,e)<=180)q.b="Reminder \u2014 "+B.o.aq(v,e)+" min"}else{if(t!=null){v=A.ag("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=B.a.en(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.hyK(v[2],v[4],v[3])
o=v[3]
m=A.ca(o==null?"":o,null)
if(m==null)m=0
l=A.c1(A.bC(s),A.bL(s),A.bW(s),0,0,0,0,0)
if(B.a.q(w,d))l=l.bR(a0)
r.b=A.c1(A.bC(l),A.bL(l),A.bW(l),n,m,0,0,0).bR(-36e8)
if(r.bl().d3(s.bR(e)))r.b=J.c7(r.bl(),B.op)
v=C.ifH(v[1])
k=B.o.F(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+B.a.b0(B.o.u(m),2,"0")+" "+j)}else{l=A.c1(A.bC(s),A.bL(s),A.bW(s),0,0,0,0,0)
v=B.a.q(w,d)
if(v)l=l.bR(a0)
i=A.ag("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(i!=null){o=i.b
h=C.hyK(o[1],o[3],o[2])
o=o[2]
g=A.ca(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=A.c1(A.bC(l),A.bL(l),A.bW(l),h,g,0,0,0)
r.b=f.d3(s.bR(3e7))&&!v?f.bR(a0):f
q.b=C.hyJ(a1,w)}}v=x.N
return A.a([new A.kF("alarm",A.I(["title",q.bl(),"start",r.bl().ag(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
ibn(d){var w,v,u,t,s,r,q=[A.ag("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.ag("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.ag("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),A.ag("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
for(w=0;w<4;++w){v=q[w].cF(d)
if(v==null)continue
u=v.b
t=u[1]
s=A.ca(t==null?"":t,null)
if(s==null||s<=0)continue
r=u[2]
if(r==null)r="minute"
if(B.a.a0(r,"sec"))return new A.bd(1e6*B.o.D(s,5,86400))
if(B.a.a0(r,"hour")||B.a.a0(r,"hr"))return new A.bd(36e8*B.o.D(s,1,168))
return new A.bd(6e7*B.o.D(s,1,10080))}return null},
ifH(d){var w=d==null?"work":d,v=w.toLowerCase()
if(B.a.q(v,"meeting")||B.a.q(v,"appointment"))return"Meeting"
if(B.a.q(v,"class")||B.a.q(v,"school"))return"Class"
if(B.a.q(v,"shift"))return"Shift"
return"Work"},
hyK(d,e,f){var w,v=A.ca(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return B.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
hyJ(d,e){var w,v,u,t
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
hWK(d){var w,v,u,t,s=J.a7(d)
if(s.gau(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.kn(d,80),v=w.$ti,w=new A.bQ(w,w.gI(0),v.k("bQ<ak.E>")),v=v.k("ak.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gI(d)>80?u+("\u2026 and "+(s.gI(d)-80)+" more\n"):u
return B.a.i(s.charCodeAt(0)==0?s:s)}},D,H,Ag,I,X,Ah,Y,F,Ai,O,Aj,Ak,Al,Am,Z,An,Ao,Ap,Aq,A_,A0
J=c[1]
A=c[0]
B=c[2]
K=c[61]
A1=c[207]
L=c[36]
P=c[199]
A2=c[212]
E=c[193]
M=c[201]
A3=c[124]
A4=c[119]
Q=c[144]
A5=c[197]
R=c[40]
N=c[81]
A6=c[160]
A7=c[202]
S=c[192]
A8=c[205]
A9=c[203]
T=c[86]
Aa=c[87]
U=c[168]
Ab=c[204]
Ac=c[200]
Ad=c[196]
Ae=c[73]
V=c[136]
G=c[208]
W=c[183]
Af=c[120]
C=a.updateHolder(c[6],C)
D=c[190]
H=c[30]
Ag=c[72]
I=c[195]
X=c[116]
Ah=c[206]
Y=c[31]
F=c[194]
Ai=c[153]
O=c[101]
Aj=c[156]
Ak=c[191]
Al=c[158]
Am=c[210]
Z=c[198]
An=c[213]
Ao=c[149]
Ap=c[209]
Aq=c[211]
A_=c[80]
A0=c[64]
C.btS.prototype={
oY(d,e){return this.a.$2(d,e)}}
C.G0.prototype={
S(){return new C.aJP(this.$ti.k("aJP<G0.T,G0.S>"))}}
C.aJP.prototype={
Y(){var w,v,u=this
u.a4()
w=u.a
v=w.f
w=new A.hq(B.Gu,v,null,null,w.$ti.k("hq<1>"))
u.e=w
u.WS()},
bz(d){var w,v=this
v.bJ(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aPV()
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hq(B.Gu,w.b,w.c,w.d,w.$ti)}v.WS()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&A.c()
return v.mq(d,w)},
t(){this.aPV()
this.a3()},
WS(){var w,v=this
v.d=v.a.c.lK(new C.fbZ(v),new C.fc_(v),new C.fc0(v))
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hq(B.a_9,w.b,w.c,w.d,w.$ti)},
aPV(){var w=this.d
if(w!=null){w.a1(0)
this.d=null}}}
C.axl.prototype={
mq(d,e){return this.e.$2(d,e)}}
C.amx.prototype={
S(){return C.i2r()},
bv(){return this.r.$0()}}
C.r9.prototype={}
C.aC3.prototype={
ae3(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ae3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.hoT(r)
if(r.x==null||r.c9.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.hoV(s),$async$ae3)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ae3,v)},
Yj(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.as8(t.a.c),$async$Yj)
case 3:if(e!=null&&t.c!=null)t.a.bv()
r=!C.cf2(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return A.b(C.ar5(t.a.c),$async$Yj)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.m(new C.djX(t,s))
if(!s)t.ae3()
case 1:return A.h(u,v)}})
return A.i($async$Yj,v)},
adE(){var w=0,v=A.j(x.H),u,t=this,s
var $async$adE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.bF0(),$async$adE)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dk7(t,s))
case 1:return A.h(u,v)}})
return A.i($async$adE,v)},
Y(){var w,v,u=this
u.by9()
$.tU=$.tU+1
w=u.a
$.bF5=w.c.a
w=w.d.bb
v=A.U(w).k("N<1,a8<n,@>>")
w=A.C(new A.N(w,new C.dkp(),v),v.k("ak.E"))
u.f=w
u.adE()
u.Kc()
u.Yj()
u.e=A.df(B.om,new C.dkq(u))},
Kc(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Kc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:C.aim(t.a.d.bb)
w=3
return A.b(C.fUD(t.a.d.bb),$async$Kc)
case 3:s=e
if(t.c==null){w=1
break}C.aim(t.a.d.bb)
if(s!=null)t.m(new C.dkf(t,s))
else t.m(new C.dkg(t))
case 1:return A.h(u,v)}})
return A.i($async$Kc,v)},
t(){C.b1f()
var w=this.e
if(w!=null)w.a1(0)
this.by8()},
aiS(d,e,f){return this.cxQ(d,e,f)},
cxQ(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$aiS=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(e.toLowerCase())
p=J.t(t.r,q)
o=t.a
n=o.d.bb
o=o.c
s=d.b
C.ifL(n,o.a,o.c,d.a,s,f,e,p)
t.a.bv()
w=3
return A.b(C.ain(t.a.d.bb),$async$aiS)
case 3:if(t.c==null){w=1
break}t.m(new C.dki(t))
r=f===1?"1 game":""+f+" games"
t.c.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$aiS,v)},
J0(d,e){return this.ciT(d,e)},
c5W(d){return this.J0(d,null)},
ciT(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$J0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&B.a.i(e).length!==0){s=C.uw(t.a.d.bb,B.a.i(e))
if(s!=null&&C.aQQ(s)<=0){t.c.L(x.q).f.U(D.aTP)
w=1
break}}w=5
return A.b(C.ar5(t.a.c),$async$J0)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return A.b(C.h8i(r,C.fOW(q.c),p),$async$J0)
case 6:w=1
break
case 4:o=new C.dka(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
A.hy(r,new C.aET(p,q.d,q.f,q.r,new C.dkb(o),q.w,C.fOW(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
A.hy(q,new C.amw(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.dkc(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$J0,v)},
c3b(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.aim(i.a.d.bb)
C.aim(i.f)
w=C.irl(i.a.c.a,i.f)
v=C.ifK(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return B.bM
if(!u){t=B.d.gH(w)
u=A.m(14)
s=A.L(B.aU,B.r,1)
r=J.a7(t)
q=r.h(t,"fromName")
q=A.w(q==null?r.h(t,"fromEmail"):q)
p=A.w(r.h(t,"gameTitle"))
o=A.aJ(r.h(t,g))
o=o==null?h:B.j.M(o)
if(o==null)o=1
r=A.aJ(r.h(t,g))
r=r==null?h:B.j.M(r)
r=(r==null?1:r)===1?"":"s"
n=x.p
return A.q(h,A.x(A.a([D.fRa,A.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,B.p_,h,h,h),B.U,A.A(A.a([A.E(A.dU(B.KX,new C.dk2(i,t),h),1),B.ae,A.E(A.bI(D.h_y,h,new C.dk3(i,t),h),1)],n),B.l,h,B.e,B.i,0,h,h)],n),B.E,h,B.e,B.i,0,B.p),B.f,h,h,new A.p(B.aF,h,s,u,h,h,B.n),h,h,h,B.el,B.bh,h,h,1/0)}m=B.d.gH(v)
l=B.d.dP(i.y,new C.dk4(m),new C.dk5(i))
k=C.heS(m,i.a.c.a,i.r)
j=C.aQQ(m)
u=A.m(14)
s=A.L(B.aU,B.r,1)
r=j===1?"":"s"
return A.q(h,A.x(A.a([D.fIX,A.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,B.p_,h,h,h),B.ax,A.d(C.iiq(m,i.a.c.a),h,h,h,h,h,h,B.VA,h,h,h),B.U,A.bI(D.fQr,h,new C.dk6(i,l,m),h)],x.p),B.E,h,B.e,B.i,0,B.p),B.f,h,h,new A.p(B.bl,h,s,u,h,h,B.n),h,h,h,B.el,B.bh,h,h,1/0)},
bUR(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.fb7.q(0,d.a),l=A.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=A.Ue(w[v])
t=B.j.D(u.d*0.58,0.12,0.3)
l.push(new A.we(u.a,u.b,B.j.D(u.c*0.92,0,0.9),t).k_())}s=B.d.gH(w)
w=A.m(16)
t=A.m(18)
r=A.L(A.a_(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1)
q=x.V
p=A.a([new A.ac(0,B.G,A.a_(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.j7,12)],q)
o=x.p
o=A.a([new A.a5(100,n,A.at(A.X(d.e,B.c,n,n,n,64),n,n,n),n),A.E(new A.D(B.iM,A.x(A.a([A.A(A.a([A.E(A.d(d.b,n,n,n,n,n,n,B.jP,n,n,n),1)],o),B.l,n,B.e,B.i,0,n,n),B.ax,A.d(d.c,n,2,B.a2,n,n,n,B.pR,n,n,n)],o),B.E,n,B.bb,B.i,0,B.p),n),1)],o)
if(m)o.push(A.aG(n,n,n,n,D.c1d,n,n,n,new C.djZ(this,d),n,n,n,n,"Invite player",n))
o.push(new A.D(B.NT,A.q(n,D.c_h,B.f,n,n,new A.p(A.a_(71,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),n,A.L(A.a_(B.j.V(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.r,1.6),n,A.a([new A.ac(0,B.G,A.a_(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.H,10)],q),n,B.a7),n,44,n,n,n,n,n,44),n))
return A.aP(!1,w,!0,A.q(n,A.A(o,B.l,n,B.e,B.i,0,n,n),B.f,n,n,new A.p(n,n,r,t,p,new A.a9(B.aA,B.aE,B.x,l,n,n),B.n),n,92,n,B.el,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dk_(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.S(d).ax.a===B.J,l=A.S(d).ax.a===B.J?B.jA:B.qk,k=m?B.iD.j(0.94):B.c.j(0.94),j=m?B.c:B.T,i=m?B.iD:B.c,h=m?B.c.j(0.08):B.aO,g=m?B.c:B.T,f=m?B.bq:B.bO
if(!o.x)return C.aRo(n,l,A.at(A.n5(n,m?B.c:B.be,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fOW(o.a.c)
return new C.Oo(o.a.w,w,!0,o.gaUX(),n)}w=A.aH(d,B.eo,x.w).w
v=A.m(12)
u=A.L(h,B.r,1)
t=x.V
s=A.a([],t)
if(!m)s.push(new A.ac(0,B.G,B.w.j(0.04),B.cL,12))
r=x.p
s=A.a([A.q(n,A.A(A.a([A.E(A.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,A.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,B.V,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new A.wj(new C.dkm(o,f,g),n,$.aSP(),n)],r),B.l,n,B.e,B.i,0,n,n),B.f,n,n,new A.p(i,n,u,v,s,n,B.n),n,n,n,n,B.a09,n,n,1/0),B.X,o.c3b()],r)
v=o.y
B.d.v(s,new A.N(v,o.gbUQ(),A.U(v).k("N<1,v>")))
w=A.cc(A.x(s,B.l,n,B.e,B.i,0,B.p),B.t,n,B.y,n,new A.R(14,w.r.b+78,14,24),n,n,B.ah)
s=A.m(35)
v=A.a([new A.ac(0,B.G,B.w.j(m?0.28:0.08),B.j7,15)],t)
u=A.L(m?B.c.j(0.1):B.aO,B.r,1)
t=A.aG(n,n,n,n,A.X(B.eN,j,n,n,n,18),n,n,n,o.gaUX(),n,n,n,n,n,n)
q=A.E(A.at(A.d("GAME CENTER",n,n,n,n,n,n,A.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,B.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=A.m(20)
return A.oM(!0,C.aRo(n,l,new A.an(B.a0,n,B.ad,B.f,A.a([w,A.ap(n,A.bn(!1,new A.D(B.O4,A.q(n,A.A(A.a([t,q,new A.D(B.iM,A.q(n,A.A(A.a([D.bXp,B.e4,C.arY(new C.dkn(o),B.l4,o.a.c.a)],r),B.l,n,B.e,B.Q,0,n,n),B.f,n,n,new A.p(B.cY,n,n,p,n,n,B.n),n,n,n,n,B.he,n,n,n),n)],r),B.l,n,B.e,B.i,0,n,n),B.f,n,n,new A.p(k,n,u,s,v,n,B.n),n,60,n,n,B.n_,n,n,n),n),!0,!1,B.ag,!0,!0),n,n,0,0,0,n)],r),n)),new C.dko(o),x.K)},
aUY(){var w,v
this.a.bv()
w=this.d
v=w>0?A.I(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
A.j0(w,v)}}
C.aET.prototype={
S(){return new C.blH()},
hI(d){return this.e.$1(d)},
bv(){return this.f.$0()},
aJe(){return this.r.$0()}}
C.blH.prototype={
Y(){this.bz9()
this.d=A.VX(this.a.d.bn)
$.tU=$.tU+1},
t(){C.b1f()
this.bz8()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&A.c()
return new C.aqv(v,new C.dYi(w),u,new C.dYj(w),new C.dYk(w,d),new C.dYl(w),null)}}
C.amw.prototype={
S(){return new C.aC2(new A.au(B.aw,$.aw()))},
hI(d){return this.x.$1(d)},
bv(){return this.y.$0()},
aJe(){return this.z.$0()}}
C.aC2.prototype={
Y(){this.by7()
this.a.toString
$.tU=$.tU+1},
t(){C.b1f()
var w=this.d
w.T$=$.aw()
w.P$=0
this.by6()},
a37(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a37=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.Ow()
w=5
return A.b(C.ar5(t.a.c),$async$a37)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return A.b(C.h8i(s,C.fOW(r.c),q),$async$a37)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&B.a.i(r).length!==0){p=C.uw(s.d.bb,B.a.i(r))
if(p!=null&&C.aQQ(p)<=0){t.c.L(x.q).f.U(D.aTP)
w=1
break}}o=A.d2(B.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.L(x.q).f.U(D.fiF)
w=1
break}m=A.LU(t.a.c.a,new C.djR(t))
if(m+0.001<n){t.c.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Not enough balance for this bet \u2014 you have $"+A.dF(m)+", the bet is $"+A.dF(n)+".",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aJe()
s=t.a
s.toString
r=B.o.u(1000*Date.now())
q=t.a
s.hI(new A.d7(r,q.c.a,n,B.ki,B.fu,"Game bet: "+q.f,null,null,B.cv,new A.V(Date.now(),0,!1)))
t.a.bv()
if(D.faU.q(0,t.a.e)){s=t.c
s.toString
r=t.a
A.hy(s,new C.apo(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
A.hy(s,new C.amy(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$a37,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=A.aG(o,o,o,o,B.HZ,o,o,o,new C.djU(d),o,o,o,o,o,o),k=p.a,j=A.d(k.f,o,o,o,o,o,o,B.cC,o,o,o),i=A.m(12),h=x.p
j=A.eH(A.a([A.q(o,A.at(C.arY(new C.djV(p),B.iA,k.c.a),o,o,o),B.f,o,o,new A.p(B.cY,o,o,i,o,o,B.n),o,o,o,D.bB4,B.f3,o,o,o)],h),o,o,!0,!0,D.a_6,o,1,o,o,o,!1,o,!1,B.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=A.m(16)
i=A.L(B.aU,B.r,1)
k=A.X(D.bOh,D.buK,o,o,o,28)
w=p.a
v=A.d(w.f,o,o,o,o,o,o,B.ne,o,o,o)
w=A.d(w.r,o,o,o,o,o,o,B.p_,o,o,o)
u=A.a_(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.m(12)
s=x.a3
s=A.C(new A.N(A.a([2,5,10,25],x.t),new C.djW(p),s),s.k("ak.E"))
s=A.A(s,B.l,o,B.e,B.i,0,o,o)
r=A.a_(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.q(o,A.x(A.a([D.h1e,B.X,s,B.U,A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.d,o,o,o,o,o,2,A.bt(o,new A.b6(4,A.m(10),B.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,B.lV,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.e0,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,B.dg,!0,B.a5,o,B.ao,o,o,o,o)],h),B.l,o,B.e,B.i,0,B.p),B.f,o,o,new A.p(u,o,o,t,o,o,B.n),o,o,o,o,B.bV,o,o,1/0)
u=A.m(12)
r=A.L(A.a_(102,B.a74.l()>>>16&255,B.a74.l()>>>8&255,B.a74.l()&255),B.r,1)
s=A.a_(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
q=A.m(10)
q=A.q(o,A.x(A.a([D.fIk,A.d("+ $"+B.j.ad(n*0.46,2),o,o,o,o,o,o,D.fyd,o,o,o),A.d("(46% return on $"+B.j.ad(p.e,2)+" bet)",o,o,o,o,o,o,B.pR,o,o,o)],h),B.l,o,B.e,B.i,0,B.p),B.f,o,o,new A.p(s,o,o,q,o,o,B.n),o,o,o,o,B.cl,o,o,1/0)
s=A.a_(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
n=A.m(10)
u=A.q(o,A.x(A.a([D.fRs,B.U,q,B.U,A.q(o,A.x(A.a([D.fDc,A.d("$"+B.j.ad(m,2),o,o,o,o,o,o,D.fn3,o,o,o),A.d("8 pairs \xd7 $"+B.j.ad(m,2)+" each",o,o,o,o,o,o,B.pR,o,o,o)],h),B.l,o,B.e,B.i,0,B.p),B.f,o,o,new A.p(s,o,o,n,o,o,B.n),o,o,o,o,B.cl,o,o,1/0)],h),B.l,o,B.e,B.i,0,B.p),B.f,o,o,new A.p(D.bqm,o,r,u,o,o,B.n),o,o,o,o,B.bV,o,o,1/0)
r=A.ft(o,o,B.be,o,o,o,o,o,o,B.c,o,B.h6,o,o,o,o,o,o,o,o)
return C.aRo(j,D.a_6,A.cc(A.q(o,A.x(A.a([k,B.ax,v,B.bH,w,B.X,t,B.U,u,B.X,new A.a5(1/0,o,A.io(A.d("Start Game ($"+B.j.ad(p.e,2)+")",o,o,o,o,o,o,B.cg,o,o,o),p.gcBN(),r),o)],h),B.l,o,B.e,B.i,0,B.p),B.f,o,o,new A.p(o,o,i,l,o,D.c7i,B.n),o,o,o,o,B.eY,o,o,1/0),B.t,o,B.y,o,A3.a0d,o,o,B.ah))}}
C.amy.prototype={
S(){var w=x.s,v=x.t,u=x.S
return new C.aC4(B.cN,new A.au(B.aw,$.aw()),A.a([],w),A.a([],x.d4),A.a([],w),A.a([],w),A.a([],v),A.a([],v),A.a([],v),A.aR(u),A.aR(u),A.a([],v),A.a([],v),A.a([],v))},
hI(d){return this.y.$1(d)},
bv(){return this.z.$0()}}
C.aC4.prototype={
ghP(){var w=this.a.Q
return w!=null&&B.a.i(w).length!==0},
rM(d){return this.bSZ(d)},
bSZ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$rM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.AE()
r=t.Pa()
w=s<=0?3:4
break
case 3:w=5
return A.b(t.ac2(d),$async$rM)
case 5:w=1
break
case 4:q=B.j.D(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return A.b(t.us(d),$async$rM)
case 9:w=7
break
case 8:w=10
return A.b(t.F3(q,s,r),$async$rM)
case 10:case 7:case 1:return A.h(u,v)}})
return A.i($async$rM,v)},
FF(d,e,f,g){return this.czv(d,e,f,g)},
czv(d,e,f,g){var w=0,v=A.j(x.H),u,t=this,s
var $async$FF=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return A.b(C.bG4(s,C.bFM(),C.hgP(),d,e,f,g),$async$FF)
case 3:case 1:return A.h(u,v)}})
return A.i($async$FF,v)},
AE(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.b5b(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&A.c()
return u+C.aiz(t,s.e.a.a)
case"memory":return s.ghP()&&D.nb.q(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.aAi()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bn
case"color":return s.bb
case"reflex":return s.a_
default:u=s.b6
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
aAi(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
Pa(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&A.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.heW()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.b6
if(w!=null)return w.b
return 1}},
bz(d){var w,v,u=this
u.bJ(d)
if(u.f||u.c9)return
w=u.a
v=C.fP0(w.e,w.d.y2)
if(v!==C.fP0(d.e,d.d.y2)&&u.c!=null)u.m(new C.dlJ(u,v))},
Y(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.byb()
w=i.a
w.toString
$.tU=$.tU+1
i.Q=C.fP0(w.e,w.d.y2)
i.b81()
i.ado()
if(i.ghP()){i.c9=!0
i.cP="Connecting to match\u2026"
i.cj="Both players enter the room together \u2014 play starts at the same time."
i.Pw()
i.ad0()
i.bm=A.df(B.fX,new C.dlM(i))}if(B.d.q(D.Sd,i.a.e)){w=i.ghP()
v=i.a
if(w){w=v.d.bb
v=v.Q
v.toString
u=C.uw(w,v)
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
m=s.b(t.h(u,h))?A.a3(s.a(t.h(u,h)),o,n):A.T(o,n)
s=p===r
l=s?q:r
if(s){o=m.h(0,"player2Name")
if(o==null)o=m.h(0,"playerOName")
t=o==null?t.h(u,"toName"):o
k=B.a.i(J.k(t==null?"":t))}else{o=m.h(0,"player1Name")
if(o==null)o=m.h(0,"playerXName")
t=o==null?t.h(u,"fromName"):o
k=B.a.i(J.k(t==null?"":t))}w=new C.b1d(!1,w,k.length===0||B.a.q(k,"@")?C.heS(u,v,null):k,p,l,s)}else{w=w.c
w=C.h8m(w.c,w.a)}w=i.bK=w}else{w=v.c
w=i.bK=C.h8m(w.c,w.a)}v=C.hWR()
v.brQ(i.a.e,i.d,w)
i.b6=v
i.r=v.c
if(i.ghP()){w=i.a
v=w.d.bb
w=w.Q
w.toString
u=C.uw(v,w)
m=u==null?null:J.t(u,h)
if(x.f.b(m)){w=i.b6
w.toString
w.bds(i.a.e,A.a3(m,x.N,x.z),i.a.c.a)
w=i.b6
i.r=w.c
if(w.e){if(w.r)j=D.TF
else j=w.f===!0?D.qY:D.Jd
i.AG(j)}}}i.b8=A.df(B.mX,new C.dlN(i))
if(i.ghP())i.bf=A.df(B.mW,new C.dlO(i))}if(i.ghP()&&!B.d.q(D.Sd,i.a.e))i.bf=A.df(B.mW,new C.dlP(i))
i.as=A.df(B.fH,new C.dlQ(i))},
Pw(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Pw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghP()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.uw(s.d.bb,q)
w=p!=null?3:4
break
case 3:w=5
return A.b(C.bE4(p,t.a.c.a),$async$Pw)
case 5:o=e
if(t.c!=null)t.m(new C.dkZ(t,o))
w=1
break
case 4:w=6
return A.b(C.LL(q,t.a.d.bb,!1),$async$Pw)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return A.b(C.bE4(n,t.a.c.a),$async$Pw)
case 7:o=e
if(t.c!=null)t.m(new C.dl_(t,o))
case 1:return A.h(u,v)}})
return A.i($async$Pw,v)},
ajX(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$ajX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghP()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.LL(r,s.d.bb,!1),$async$ajX)
case 3:q=e
if(q==null||t.c==null){w=1
break}p=J.t(q,"sessionState")
if(!x.f.b(p)){w=1
break}o=A.a3(p,x.N,x.z)
if(t.a.e==="memory"){s=t.go
r=s.a
n=t.id
m=n.a
l=t.fx
t.aPH(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=B.j.M(j)
else{h=j==null?null:J.k(j)
i=A.ca(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)B.d.bt(t.fy,new C.dls(t))
if(i!=null&&t.fr.length!==0){s=A.C(t.dy,x.S)
B.d.v(s,t.dy)
r=new A.e4()
r.d_(i)
B.d.e0(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.m(new C.dlt())}case 1:return A.h(u,v)}})
return A.i($async$ajX,v)},
ad0(){var w=0,v=A.j(x.H),u=this
var $async$ad0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.a1p(!0),$async$ad0)
case 2:return A.h(null,v)}})
return A.i($async$ad0,v)},
a1p(d){return this.coN(d)},
coM(){return this.a1p(!1)},
coN(b3){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$a1p=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghP()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
if(q.length===0){w=1
break}p=B.a.i(s.c.a.toLowerCase())
w=3
return A.b(C.LL(q,s.d.bb,b3),$async$a1p)
case 3:o=b5
if(o==null)o=C.uw(t.a.d.bb,q)
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
j=s.b(l)?A.a3(l,r,k):A.T(r,k)
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
d=s.b(e)?A.a3(e,r,k):A.T(r,k)
a0=j.h(0,"readyAt")
a1=s.b(a0)?A.a3(a0,r,k):A.T(r,k)
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
if(a3.length!==0){s=A.bj(a3)
a4=s==null?null:s.bT()
b2.a=a4
s=a4}else s=null
a5=i&&f&&J.z(d.h(0,h),!0)&&J.z(d.h(0,g),!0)
if(a5&&s==null){if(i){r=a1.h(0,h)
r=A.bj(J.k(r==null?"":r))
a6=r==null?null:r.bT()}else a6=null
if(f){r=a1.h(0,g)
r=A.bj(J.k(r==null?"":r))
a7=r==null?null:r.bT()}else a7=null
if(a6!=null&&a7!=null){a8=(a6.cf(a7)?a6:a7).bR(5e5)
if(!new A.V(Date.now(),0,!1).d3(a8)){a4=b2.a=a8.bR(4e6)
j.n(0,"startAt",a4.aa().ag())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.n(0,"memorySeed",B.o.F(1000*Date.now(),2147483647))
j.n(0,"memoryMatched",A.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.n(0,"patternSeed",B.o.F(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.inx(t.a.d.bb,q,j)
t.a.bv()}if(t.c==null){w=1
break}b0=t.bF
if(b0==null)b0="your opponent"
if(!a5){t.m(new C.dle(b2,t,b0))
w=1
break}if(s==null){t.m(new C.dlf(t))
w=1
break}b1=new A.V(Date.now(),0,!1)
if(b1.d3(s)){s=s.bD(b1).a
r=B.o.aq(s,1e6)
t.m(new C.dlg(b2,t,r+(B.o.F(B.o.aq(s,1000),1000)>0?1:0)))
w=1
break}if(t.c9){t.m(new C.dlh(b2,t))
b2=t.a.e
if(b2==="pattern")t.a9Q()
else if(b2==="memory"){t.b80()
if(t.c!=null)t.m(new C.dli())}}b2=t.bm
if(b2!=null)b2.a1(0)
t.bm=null
case 1:return A.h(u,v)}})
return A.i($async$a1p,v)},
aQE(d){var w,v,u,t,s=this
if(d!=null){w=new A.e4()
w.d_(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e2(v,x.S)
for(t=0;t<v;++t)u[t]=w.aw(9)
s.ry=u
s.x1=0
s.to=-1},
aQD(){return this.aQE(null)},
a9Q(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a9Q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ghP()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.cmf()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return A.b(C.LL(q,s.d.bb,!1),$async$a9Q)
case 5:r=t.b3Y(e)
case 4:if(t.c==null){w=1
break}t.aQE(r)
t.m(new C.dkr(t))
t.Ef()
case 1:return A.h(u,v)}})
return A.i($async$a9Q,v)},
b3Y(d){var w,v,u,t=null
if(d==null)return t
w=J.t(d,"sessionState")
if(!x.f.b(w))return t
v=J.t(w,"patternSeed")
if(typeof v=="number")return B.j.M(v)
u=v==null?t:J.k(v)
return A.ca(u==null?"":u,t)},
cmf(){var w=this.a,v=w.Q
if(v==null)return null
return this.b3Y(C.uw(w.d.bb,v))},
ado(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$ado=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$ado)
case 3:r=e
q=t.a
p=q.e
q=B.a.i(q.c.a.toLowerCase())
s=A.eo(J.t(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.m(new C.dkY(t,s))
case 1:return A.h(u,v)}})
return A.i($async$ado,v)},
ps(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n
var $async$ps=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$ps)
case 2:p=e
o=u.a
n=o.e
o=B.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bGy().length
else s=n==="typing"?50:105
if(n==="typing")r=B.o.F(u.at+5,s)
else{q=u.at
r=t?B.o.F(q+6,s):B.o.F(q+1,s)}w=3
return A.b(p.aB("Int","ngmy_game_"+n+"_"+o,r),$async$ps)
case 3:u.at=r
return A.h(null,v)}})
return A.i($async$ps,v)},
a3p(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a3p=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghP()||t.b6==null||t.f||t.aP){w=1
break}if(t.c9){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.LL(r,s.d.bb,!1),$async$a3p)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.bb
s=s.Q
s.toString
p=C.uw(r,s)
s=p==null
if(!s){r=J.cC(p)
r.a8(p)
r.v(p,q)}r=J.a7(q)
o=r.h(q,"sessionState")
if(!x.f.b(o)){w=1
break}n=A.a3(o,x.N,x.z)
r=r.h(q,"sessionUpdatedAt")
m=A.bj(J.k(r==null?"":r))
s=s?null:J.t(p,"sessionUpdatedAt")
l=A.bj(J.k(s==null?"":s))
if(m!=null&&l!=null&&!m.cf(l)){w=1
break}s=t.b6
s.toString
r=t.a
s.bds(r.e,n,r.c.a)
r=t.b6
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.TF
else k=r.f===!0?D.qY:D.Jd
w=7
return A.b(t.AG(k),$async$a3p)
case 7:w=5
break
case 6:if(t.c!=null)t.m(new C.dlu())
case 5:case 1:return A.h(u,v)}})
return A.i($async$a3p,v)},
ahP(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$ahP=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghP()||q.b6==null||q.a.Q==null||q.aP){w=1
break}q.aP=!0
t=3
o=q.b6
o.toString
p=o.cS0(q.a.e)
o=q.a
n=o.d.bb
o=o.Q
o.toString
w=6
return A.b(C.aRJ(n,o,p),$async$ahP)
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
return A.i($async$ahP,v)},
AG(d){return this.c_k(d)},
c_k(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$AG=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(t.JM(s,s),$async$AG)
case 9:w=4
break
case 6:w=10
return A.b(t.YE(s,s),$async$AG)
case 10:w=4
break
case 7:w=11
return A.b(t.ac1(s,s),$async$AG)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghP()?12:13
break
case 12:w=14
return A.b(t.Ii(),$async$AG)
case 14:case 13:case 1:return A.h(u,v)}})
return A.i($async$AG,v)},
a0n(d,e){return this.cgC(d,e)},
cgC(d,e){var w=0,v=A.j(x.H),u,t=this
var $async$a0n=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=t.ghP()?3:5
break
case 3:w=6
return A.b(t.ahP(),$async$a0n)
case 6:if(d===D.qX){w=1
break}w=4
break
case 5:if(d===D.qX){w=1
break}case 4:w=7
return A.b(t.AG(d),$async$a0n)
case 7:case 1:return A.h(u,v)}})
return A.i($async$a0n,v)},
adh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$adh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghP()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.uw(s.d.bb,q)
if(p==null){w=1
break}o=B.a.i(t.a.c.a.toLowerCase())
n=J.t(p,"sessionState")
s=x.f
if(!s.b(n)){w=1
break}r=x.N
m=x.z
l=A.a3(n,r,m)
k=l.h(0,"inGame")
j=s.b(k)?A.a3(k,r,m):A.T(r,m)
j.n(0,o,!1)
l.n(0,"inGame",j)
l.W(0,"startAt")
w=3
return A.b(C.aRJ(t.a.d.bb,q,l),$async$adh)
case 3:t.a.bv()
case 1:return A.h(u,v)}})
return A.i($async$adh,v)},
Ii(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ii=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghP()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.uw(s.d.bb,q)
if(p==null){w=1
break}o=J.t(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?A.a3(o,s,r):A.T(s,r)
n.n(0,"gameOver",!0)
C.hho(t.a.d.bb,q,n)
C.iry(t.a.d.bb,q)
w=3
return A.b(C.ain(t.a.d.bb),$async$Ii)
case 3:t.a.bv()
case 1:return A.h(u,v)}})
return A.i($async$Ii,v)},
t(){var w,v=this
if(v.ghP()&&!v.f)v.adh()
else if(!v.f)v.c5X()
C.b1f();++v.RG
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
w.T$=$.aw()
w.P$=0
v.bya()},
cF3(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&A.c()
v=v<=0||w.b6==null}if(v)return
if(w.c9)return
v=w.b6
v.toString
w.a.toString
if(v.a>=v.b){w.us("Goal completed!")
return}v=++w.rx
if(v%5===0)w.m(new C.dlD())},
b81(){var w,v,u,t,s,r=this
r.x=A.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e2(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b80()
break
case"scramble":r.bn=0
r.b82()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=B.o.F(r.at,50)
v=J.e2(5,x.N)
for(t=0;t<5;++t)v[t]=D.duA[B.o.F(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bP(0,B.ce)
break
case"math":r.y2=0
r.b8_()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b83()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e2(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
B.d.e0(v,s)
if(!r.crc()){w=J.e2(9,w)
for(u=0;u<9;++u)w[u]=u
B.d.e0(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
B.d.a8(w)
w.push(r.d.aw(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.Rj()
break
case"pattern":if(r.ghP()){r.ry=A.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aQD()
w=A.w(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.Ef()}break
case"color":r.bb=0
r.b7V()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.a_=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b9g()
break
default:if(B.d.q(D.Sd,w)){w=r.b6
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
b5b(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
crc(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return B.o.F(v,2)===0},
b83(){var w,v,u,t,s,r=this,q=B.o.F(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e2(o,x.S)
for(w=0;w<o;w=v){v=w+1
n[w]=B.j.M(Math.pow(p,v))}u=B.j.M(Math.pow(p,o))
r.w=B.o.u(u)
r.aG=B.d.aO(n,", ")
q=r.w
t=x.s
s=A.a([B.o.u(u+p),B.o.u(u-p),B.o.u(u+p*2)],t)
t=A.a([q],t)
B.d.v(t,s)
B.d.e0(t,r.d)
r.x=t},
b8_(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bGy().length-6)u.at=0
w=$.bGy()
v=w[B.o.F(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b82(){var w=this,v=w.w=D.d65[B.o.F(w.at+w.bn,105)]
w.ax=C.irP(v)
w.ay=A.c_(v.length,null,!1,x.T)
w.ch=A.a(w.ax.split(""),x.s)
w.e.bP(0,B.ce)},
b9g(){var w=this,v=w.cx
if(v!=null)v.a1(0)
w.y=!1
w.z=null
w.cx=A.cy(A.dv(0,0,0,120+w.d.aw(280),0,0),new C.dlr(w))},
c_n(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.rM("Too early \u2014 paid for "+t.a_+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=B.o.aq(new A.V(v,0,!1).bD(u).a,1000)}if(w<520){t.m(new C.dkW(t))
v=t.a_
if(v>=5){t.ps()
t.us("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b9g()
t.m(new C.dkX())}}else t.rM("Too slow ("+w+"ms) \u2014 paid for "+t.a_+"/5.")},
cEi(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=B.d.bj(t.ay,new C.dly())
if(u<0)return
t.m(new C.dlz(t,u,v,d))},
cEj(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.m(new C.dlA(u,d,v))},
bJO(){var w,v,u=this
if(u.f)return
if(B.d.aV(u.ay,new C.dks())){u.c.L(x.q).f.U(D.fiz)
return}w=B.d.he(u.ay)
v=u.w
v===$&&A.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.m(new C.dkt(u))
if(u.ghP()&&D.nb.q(0,u.a.e))u.a1E()
if(u.bn>=5){u.ps()
if(u.ghP()&&D.nb.q(0,u.a.e))u.ng(!0)
else u.us("All 5 words unscrambled!")}else{u.b82()
u.r="Word "+(u.bn+1)+" of 5 \u2014 place letters in order"
u.m(new C.dku())}}else u.rM("Wrong word \u2014 paid for "+u.bn+"/5.")},
b7V(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=B.o.F(w.at+w.bb*11,4),t=v[w.d.aw(4)]
w.aH=t
w.aL=v[u]
w.aR=[B.dM,B.dI,B.ii,B.tg][u]
w.w=t},
aPH(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=B.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a8(0)
w=h.id
w.a8(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=A.aR(x.S)
for(s=J.i8(v),s=s.gae(s),r=x.j;s.C();){q=s.gR(s)
p=B.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aU(r.b(o)?o:B.cq),n=p===g;q.C();){m=q.gR(q)
l=typeof m=="number"?B.j.M(m):A.ca(J.k(m),null)
if(l==null)continue
t.J(0,l)
if(n)w.J(0,l)}}f.v(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aU(k);w.C();){m=w.gR(w)
l=typeof m=="number"?B.j.M(m):A.ca(J.k(m),null)
if(l!=null)f.J(0,l)}}h.k2=B.j.bh(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=A.aJ(J.t(j,g))
i=f==null?null:B.j.M(f)
if(i!=null)h.fx=i}},
b80(){var w,v,u,t,s,r,q,p=this
p.fx=p.k2=0
p.go.a8(0)
p.id.a8(0)
p.fy=A.a([],x.t)
p.k1=!1
w=A.C(p.dy,x.S)
B.d.v(w,p.dy)
p.fr=w
if(p.ghP()&&p.a.Q!=null){w=p.a
v=w.d.bb
w=w.Q
w.toString
u=C.uw(v,w)
t=u==null?null:J.t(u,"sessionState")
w=x.N
v=x.z
s=x.f.b(t)?A.a3(t,w,v):A.T(w,v)
r=s.h(0,"memorySeed")
if(typeof r=="number")q=B.j.M(r)
else{w=r==null?null:J.k(r)
q=A.ca(w==null?"":w,null)}w=p.fr
if(q!=null){v=new A.e4()
v.d_(q)
B.d.e0(w,v)}else B.d.e0(w,p.d)
p.aPH(s)}else B.d.e0(p.fr,p.d)},
co6(d){var w,v,u,t=this
if(t.c9)return
if(t.f||t.k1||t.go.q(0,d)||B.d.q(t.fy,d))return
t.m(new C.dl7(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.m(new C.dl8(t,v,u))
if(t.ghP()&&D.nb.q(0,t.a.e))t.a1E()
if(t.go.a>=t.fr.length){t.ps()
if(t.ghP()&&D.nb.q(0,t.a.e))t.ng(!0)
else t.aAl()}return}t.k1=!0
A.bP(D.bA2,new C.dl9(t),x.c)},
b7o(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&A.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.m(new C.dlj(u))
if(u.y1>=5){u.ps()
u.us("All 5 questions correct!")}else{u.b83()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.m(new C.dlk())}}else u.rM(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.m(new C.dll(u))
if(u.y2>=6){u.ps()
u.us("All 6 math questions correct!")}else{u.b8_()
u.r="Question "+(u.y2+1)+" of 6"
u.m(new C.dlm())}}else{u.WE(u.y2+1)
u.rM(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.m(new C.dln(u))
if(u.bb>=5){u.ps()
u.us("All 5 color rounds correct!")}else{u.b7V()
u.r="Round "+(u.bb+1)+" of 5 \u2014 tap the COLOR of the text"
u.m(new C.dlo())}}else u.rM("Wrong color \u2014 paid for "+u.bb+"/5.")
return}if(v){u.ps()
u.aAl()}else u.c.L(x.q).f.U(D.fji)},
cEh(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=B.d.co(q.k4,0)
v=B.o.aq(d,3)
u=B.o.F(d,3)
t=B.o.aq(w,3)
s=B.o.F(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.m(new C.dlx(q,d,w))
if(B.d.he(q.k4)==="123456780"){q.ps()
q.aAl()}}},
Rj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Rj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.m(new C.dla(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.dlb(t,q).$0()
t.c.eo()
w=6
return A.b(A.bP(B.kR,null,r),$async$Rj)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.dlc(t).$0()
t.c.eo()
w=7
return A.b(A.bP(B.k0,null,r),$async$Rj)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.m(new C.dld(t))
case 1:return A.h(u,v)}})
return A.i($async$Rj,v)},
cEk(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.rM("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.m(new C.dlB(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.ps()
u.us("Perfect Simon run!")
return}u.m(new C.dlC(u))
u.Rj()}},
Ef(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ef=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.m(new C.dkv(t))
s=x.H
w=3
return A.b(A.bP(B.jm,null,s),$async$Ef)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.dkw(t,o).$0()
t.c.eo()
w=7
return A.b(A.bP(B.a_O,null,s),$async$Ef)
case 7:if(t.c==null){w=1
break}new C.dkx(t).$0()
t.c.eo()
w=8
return A.b(A.bP(B.iJ,null,s),$async$Ef)
case 8:case 5:r.length===q||(0,A.J)(r),++p
w=4
break
case 6:if(t.c!=null)t.m(new C.dky(t))
case 1:return A.h(u,v)}})
return A.i($async$Ef,v)},
WE(d){return this.bEq(d)},
bEq(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$WE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return A.b(A.az(),$async$WE)
case 3:s=f
r=t.a
q=r.e
r=B.a.i(r.c.a.toLowerCase())
p=$.bGy().length
o=B.o.F(t.at+d,p)
w=4
return A.b(s.aB("Int","ngmy_game_"+q+"_"+r,o),$async$WE)
case 4:t.at=o
case 1:return A.h(u,v)}})
return A.i($async$WE,v)},
cEf(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.rM("Wrong tile \u2014 paid for "+v.aAi()+"/"+C.heW()+" moves.")
return}v.m(new C.dlv(v,w))
if(v.ghP()&&D.nb.q(0,v.a.e))v.a1E()
if(v.x1>=w)if(v.x2>=7){v.ps()
if(v.ghP()&&D.nb.q(0,v.a.e))v.ng(!0)
else v.us("All 7 pattern rounds correct!")}else{v.m(new C.dlw(v))
v.Ef()}},
JM(d,e){return this.cmw(d,e)},
us(d){return this.JM(null,d)},
aAl(){return this.JM(null,null)},
cmw(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$JM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a1(0)
s=t.b8
if(s!=null)s.a1(0)
r=t.a.x*1.46
t.m(new C.dl5(t,r))
q=B.o.u(1000*Date.now())
s=t.a
p=new A.d7(q,s.c.a,r,B.h0,B.fu,"Game payout: "+s.f,null,null,B.cv,new A.V(Date.now(),0,!1))
A.aij(p,!0)
t.a.hI(p)
t.a.bv()
o=e==null?"+$"+B.j.ad(r,2)+" added to your balance!":e
s=t.a
C.va(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.FF(d,o,"YOU WIN!",!0),$async$JM)
case 3:w=4
return A.b(C.aib(t.a.f,o),$async$JM)
case 4:case 1:return A.h(u,v)}})
return A.i($async$JM,v)},
FD(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$FD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghP()&&D.nb.q(0,t.a.e)?3:4
break
case 3:w=5
return A.b(t.cyz(),$async$FD)
case 5:w=1
break
case 4:s=t.AE()
r=t.Pa()
w=r<=0||s<=0?6:7
break
case 6:w=8
return A.b(t.ac2("Time's up \u2014 no progress to pay."),$async$FD)
case 8:w=1
break
case 7:q=B.j.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return A.b(t.us("Complete! Max payout earned."),$async$FD)
case 12:w=10
break
case 11:w=13
return A.b(t.F3(q,s,r),$async$FD)
case 13:case 10:case 1:return A.h(u,v)}})
return A.i($async$FD,v)},
Rq(d){return this.cqS(d)},
a1E(){return this.Rq(!1)},
cqS(b1){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$Rq=A.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghP()&&D.nb.q(0,r.a.e))||r.a.Q==null){w=1
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
a4=C.uw(a2.d.bb,q)
w=a4==null?7:9
break
case 7:w=10
return A.b(C.LL(q,r.a.d.bb,!1),$async$Rq)
case 10:w=8
break
case 9:b3=a4
case 8:o=b3
if(o==null){w=1
break}n=J.t(o,"sessionState")
a2=x.f
a3=x.N
a5=x.z
m=a2.b(n)?A.a3(n,a3,a5):A.T(a3,a5)
l=J.t(m,"scores")
k=a2.b(l)?A.a3(l,a3,a5):A.T(a3,a5)
J.aK(k,p,r.AE())
J.aK(m,"scores",k)
if(r.a.e==="memory"){j=J.t(m,"memoryMatchedBy")
i=a2.b(j)?A.a3(j,a3,a5):A.T(a3,a5)
a6=r.id
a6=A.C(a6,A.a4(a6).k("ch.E"))
B.d.fi(a6)
J.aK(i,p,a6)
J.aK(m,"memoryMatchedBy",i)
h=A.aR(x.S)
for(a6=i,a6=new A.dq(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aU(g);a8.C();){f=a8.gR(a8)
e=typeof f=="number"?B.j.M(f):A.ca(J.k(f),null)
if(e!=null)J.c7(h,e)}}a6=h
a6=A.C(a6,A.a4(a6).k("ch.E"))
B.d.fi(a6)
J.aK(m,"memoryMatched",a6)}d=J.t(m,"wagers")
a0=a2.b(d)?A.a3(d,a3,a5):A.T(a3,a5)
J.aK(a0,p,r.a.x)
J.aK(m,"wagers",a0)
w=11
return A.b(C.aRJ(r.a.d.bb,q,m),$async$Rq)
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
return A.i($async$Rq,v)},
ng(d){return this.cyA(d)},
cyz(){return this.ng(!1)},
cyA(b5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$ng=A.e(function(b6,b7){if(b6===1)return A.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghP()||t.a.Q==null?3:4
break
case 3:w=5
return A.b(t.FD(),$async$ng)
case 5:w=1
break
case 4:w=6
return A.b(t.Rq(!0),$async$ng)
case 6:s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=B.a.i(s.c.a.toLowerCase())
w=7
return A.b(C.LL(q,s.d.bb,!0),$async$ng)
case 7:o=b7
n=t.Pa()
w=o==null?8:9
break
case 8:m=B.j.D(t.AE()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return A.b(t.ac2("Time's up \u2014 no progress to pay."),$async$ng)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return A.b(t.us("Complete! Max payout earned."),$async$ng)
case 17:w=15
break
case 16:w=18
return A.b(t.F3(m,t.AE(),n),$async$ng)
case 18:case 15:case 11:w=19
return A.b(t.Ii(),$async$ng)
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
g=s.b(i)?A.a3(i,r,h):A.T(r,h)
f=g.h(0,"scores")
e=s.b(f)?A.a3(f,r,h):A.T(r,h)
d=A.aJ(e.h(0,p))
a0=d==null?null:B.j.M(d)
if(a0==null)a0=t.AE()
d=A.aJ(e.h(0,j))
a1=d==null?null:B.j.M(d)
if(a1==null)a1=0
a2=B.j.D(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return A.b(t.ac2("Time's up \u2014 no progress to pay."),$async$ng)
case 22:w=23
return A.b(t.Ii(),$async$ng)
case 23:w=1
break
case 21:a3=g.h(0,"wagers")
r=A.aJ((s.b(a3)?A.a3(a3,r,h):A.T(r,h)).h(0,j))
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
t.m(new C.dlp(t,a8,a2))
r=t.a
r.toString
h=B.o.u(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+B.j.ad(a7,2):d+" ("+b1+"/"+b2+")"
r.hI(new A.d7(h,b0,a9,B.h0,B.fu,d,null,null,B.cv,new A.V(Date.now(),0,!1)))
t.a.bv()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+B.j.ad(a9,2)+" (includes opponent bonus $"+B.j.ad(a7,2)+")":"+$"+B.j.ad(a8,2)+" (your progress payout)"
s=t.a
C.va(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return A.b(t.FF(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$ng)
case 24:w=25
return A.b(t.Ii(),$async$ng)
case 25:case 1:return A.h(u,v)}})
return A.i($async$ng,v)},
F3(d,e,f){return this.cmu(d,e,f)},
cmu(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$F3=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a1(0)
s=t.b8
if(s!=null)s.a1(0)
r=t.a.x*1.46*d
t.m(new C.dl3(t,r,d))
s=B.o.u(1000*Date.now())
q=t.a
p=new A.d7(s,q.c.a,r,B.h0,B.fu,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,B.cv,new A.V(Date.now(),0,!1))
A.aij(p,!0)
t.a.hI(p)
t.a.bv()
if(t.c==null){w=1
break}o=B.j.V(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&A.c()
m=q+C.aiz(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?B.d.cJ(t.cy,0,new C.dl4()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+B.j.ad(r,2)+" ("+n+"% \u2014 "+A.w(k)+" mistakes/missed)":"+$"+B.j.ad(r,2)+" ("+n+"% of full prize)"
q=t.a
C.va(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return A.b(t.FF(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$F3)
case 3:w=4
return A.b(C.aib(t.a.f,j),$async$F3)
case 4:case 1:return A.h(u,v)}})
return A.i($async$F3,v)},
c5X(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.AE()
v=o.Pa()}catch(u){return}if(v<=0||w<=0)return
t=B.j.D(w/v,0,1)
s=A.oo(B.j.ad(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=B.o.u(1000*Date.now())
p=o.a
r.hI(new A.d7(q,p.c.a,s,B.h0,B.fu,"Game partial: "+p.f+" ("+A.w(w)+"/"+A.w(v)+", left early)",n,n,B.cv,new A.V(Date.now(),0,!1)))
o.a.bv()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.va(s,n,"Left early \xb7 +$"+B.j.ad(s,2)+" ("+A.w(w)+"/"+A.w(v)+")",q,r,p,n,!0)},
ac1(d,e){return this.bUL(d,e)},
bUL(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ac1=A.e(function(f,g){if(f===1)return A.f(g,v)
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
t.a.hI(new A.d7(r,q,p,B.h0,B.fu,"Game payout: "+s+" (draw, stake returned)",null,null,B.cv,new A.V(o,0,!1)))
t.a.bv()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.va(o,null,"Draw. Your $"+B.j.ad(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.FF(d,"Nobody won, so your $"+B.j.ad(t.a.x,2)+" stake was returned.","DRAW",!1),$async$ac1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ac1,v)},
YE(d,e){return this.bUM(d,e)},
ac2(d){return this.YE(null,d)},
bUM(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$YE=A.e(function(f,g){if(f===1)return A.f(g,v)
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
C.va(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return A.b(t.FF(d,e,"YOU LOSE",!1),$async$YE)
case 3:case 1:return A.h(u,v)}})
return A.i($async$YE,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&A.c()
w=B.o.aq(m,60)
m=B.a.b0(B.o.u(B.o.F(m,60)),2,"0")
v=A.aG(n,n,n,n,B.arq,n,n,n,new C.dlE(d),n,n,n,n,n,n)
if(o.ghP()){u=o.bF
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=A.E(A.d(u?t.f+" vs "+A.w(o.bF):t.f,n,2,B.a2,n,n,n,B.fD,n,n,n),1)
r=A.m(10)
q=x.p
r=A.A(A.a([v,s,A.q(n,C.arY(new C.dlF(o),B.oY,t.c.a),B.f,n,n,new A.p(B.cY,n,n,r,n,n,B.n),n,n,n,n,B.hd,n,n,n)],q),B.l,n,B.e,B.i,0,n,n)
t=o.a
s=t.w
v=A.m(10)
s=A.q(n,A.A(A.a([A.E(A.d("Win $"+B.j.ad(t.x*1.46,2)+" \xb7 stake $"+B.j.ad(o.a.x,2)+" \u2022 Progress "+o.AE()+"/"+o.Pa(),n,n,n,n,n,n,D.fsx,n,n,n),1),new C.ar7(o.a.c.a,new C.dlG(o),n),B.ae,D.bSW,B.de,A.d(""+w+":"+m,n,n,n,n,n,n,B.nY,n,n,n)],q),B.l,n,B.e,B.i,0,n,n),B.f,n,n,new A.p(n,n,n,v,n,new A.a9(B.a6,B.aa,B.x,s,n,n),B.n),n,n,n,n,B.hc,n,n,n)
v=o.a.w
m=A.U(v).k("N<1,u>")
m=A.C(new A.N(v,new C.dlH(),m),m.k("ak.E"))
w=A.m(14)
v=A.L(B.aU,B.r,1)
p=C.aRo(n,D.beK,A.bn(!0,new A.D(Ak.a0a,A.x(A.a([r,s,B.U,new A.ff(new C.dlI(o),n),B.an,A.E(A.q(n,o.bUK(),B.f,n,n,new A.p(n,n,v,w,n,new A.a9(B.a6,B.aa,B.x,m,n,n),B.n),n,n,n,n,B.cl,n,n,n),1)],q),B.al,n,B.e,B.i,0,B.p),n),!0,!1,B.ag,!0,!0))
if(!o.c9)return p
m=A.a_(140,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255)
w=A.a_(242,B.iH.l()>>>16&255,B.iH.l()>>>8&255,B.iH.l()&255)
v=A.m(18)
u=A.L(B.aU,B.r,1)
return new A.an(B.a0,n,B.ad,B.t,A.a([p,A.bR(0,A.q(B.A,new A.dw(!1,A.q(n,A.x(A.a([D.feE,B.af,A.d(o.cP,n,n,n,n,n,n,D.fu5,B.K,n,n),B.an,A.d(o.cj,n,n,n,n,n,n,D.fse,B.K,n,n)],q),B.l,n,B.e,B.Q,0,B.p),B.f,n,n,new A.p(w,n,u,v,n,n,B.n),n,n,n,B.rV,B.yM,n,n,n),n),B.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
c6W(){var w=this.k3
return A.cs(new C.dl2(this,w,B.j.cL(this.fr.length/w)))},
bUK(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.c6W()
if(m==="scramble"){m=o.r
m===$&&A.c()
w=x.l
return A.x(A.a([A.d(m,n,n,n,n,n,n,B.pR,n,n,n),A.d("Words "+o.bn+"/5",n,n,n,n,n,n,B.EN,n,n,n),B.af,A.d("Tap letters below to fill each slot",n,n,n,n,n,n,A.l(n,n,A.a_(166,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.X,A.bU(B.fQ,A.ir(o.ay.length,new C.dkL(o),!0,w),B.bs,n,6,6),B.aQ,A.bU(B.fQ,A.ir(o.ch.length,new C.dkM(o),!0,w),B.bs,n,8,8),B.aQ,new A.a5(1/0,n,A.io(D.fV8,o.gbJN(),A.ft(n,n,B.aF,n,n,n,n,n,n,B.c,n,n,B.cp,n,n,n,n,n,n,n)),n)],x.p),B.l,n,B.e,B.i,0,B.p)}if(m==="typing"){m=o.w
m===$&&A.c()
return new C.att(m,o.e,new C.dkN(o),new C.dkO(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&A.c()
m=A.a([A.d(m,n,n,n,n,n,n,B.pR,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(A.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,B.EN,n,n,n))
m.push(B.af)
if(o.a.e==="sequence"){w=o.aG
w===$&&A.c()
w+=", ?"}else w=o.CW
m.push(A.ev(B.A,A.d(w,n,n,n,n,n,n,B.ne,B.K,n,n),B.f,B.dB))
m.push(B.aQ)
w=o.x
B.d.v(m,new A.N(w,new C.dkP(o),A.U(w).k("N<1,v>")))
return A.x(m,B.l,n,B.e,B.i,0,B.p)}if(m==="puzzle")return A.cs(new C.dkQ(o))
if(m==="simon"){m=o.r
m===$&&A.c()
return A.x(A.a([A.d(m,n,n,n,n,n,n,B.pR,n,n,n),A.d("Progress "+o.p3+"/21",n,n,n,n,n,n,B.EN,n,n,n),B.U,A.E(A.kU(1,A.ir(4,new C.dkR(o),!0,x.l),2,10,10,n,B.dW,!1),1)],x.p),B.l,n,B.e,B.i,0,B.p)}if(m==="pattern")return A.cs(new C.dkS(o))
if(m==="color"){u=A.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[B.dM,B.dI,B.ii,B.tg]
m=o.r
m===$&&A.c()
m=A.d(m,n,n,n,n,n,n,B.pR,n,n,n)
w=A.d("Round "+o.bb+"/5",n,n,n,n,n,n,B.EN,n,n,n)
v=o.aL
v===$&&A.c()
s=o.aR
s===$&&A.c()
s=A.a([m,w,B.af,A.d(v,n,n,n,n,n,n,A.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.aQ],x.p)
r=J.e2(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=A.ft(n,n,A.a_(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,B.c,n,n,B.fg,n,n,n,n,n,n,n)
r[q]=new A.D(B.cx,new A.a5(1/0,n,A.io(A.d(u[q],n,n,n,n,n,n,B.cC,n,n,n),new C.dkT(o,u,q),m),n),n)}B.d.v(s,r)
return A.x(s,B.l,n,B.e,B.i,0,B.p)}if(m==="reflex"){m=o.y
p=m?B.be:B.c8
w=o.r
w===$&&A.c()
w=A.d(w,n,n,n,n,n,n,B.ab2,B.K,n,n)
v=A.d("Fast taps "+o.a_+"/5",n,n,n,n,n,n,D.fpu,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=A.d(m,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,n,n,n,Math.min(A.aH(s,B.c1,x.w).w.a.a*0.18,72),n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return A.t2(A.aA(B.c5,A.cT(n,A.x(A.a([w,B.U,v,B.b5,s,B.b5,new A.D(B.GG,A.d(m,n,n,n,n,n,n,A.l(n,n,A.a_(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),B.l,n,B.bb,B.i,0,B.p),p,n,B.b1,n,S.C8,n,n,n,n,n,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc_m(),n,n,n,n,n,n,!1,B.a4))}if(B.d.q(D.Sd,m)&&o.b6!=null){m=o.a.e
w=o.b6
w.toString
return C.igj(m,new C.dkU(o),new C.dkV(o),o.d,w)}m=o.r
m===$&&A.c()
return A.at(A.d(m,n,n,n,n,n,n,B.dg,n,n,n),n,n,n)}}
C.ank.prototype={
S(){return new C.biM()},
cXP(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.biM.prototype={
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.a,a0=d.c,a1=d.d
d=A.aH(a2,B.eo,x.w).w
w=x.p
v=A.a([A.bT4(!1,f.a.r,"INVESTMENT PLANS",e),B.d8],w)
u=a0.x
if(u!=null){t=u.d.bT()
s=B.a.b0(B.o.u(A.bL(t)),2,"0")
r=B.a.b2(B.o.u(A.bC(t)+1),2)
q=A.m(18)
p=A.L(V.Gc,B.r,2.2)
o=x.V
n=A.a([new A.ac(0,B.G,A.a_(89,B.rw.l()>>>16&255,B.rw.l()>>>8&255,B.rw.l()&255),B.f_,20),new A.ac(0,B.G,A.a_(102,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dv,14)],o)
m=A.ap(e,A.q(e,e,B.f,e,e,new A.p(A.a_(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),e,e,e,e,e,B.a7),e,120,e,e,e,e,e,120),e,e,e,-20,-24,e)
l=A.m(10)
k=A.L(V.Gc,B.r,3.4)
o=A.a([new A.ac(0,B.G,A.a_(166,B.rw.l()>>>16&255,B.rw.l()>>>8&255,B.rw.l()&255),B.dG,10),new A.ac(0,B.G,A.a_(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cL,6)],o)
o=A.A(A.a([A.q(e,e,B.f,e,e,new A.p(e,e,k,l,o,new A.a9(B.aA,B.aE,B.x,D.dhJ,D.cSK,e),B.n),e,42,e,e,e,e,e,56),B.b5,f.baa(a2,!0)],w),B.l,e,B.e,B.i,0,e,e)
l=A.Eb(u.a,1,B.a2,D.fxn)
k=u.b
j=u.c
i=A.Eb("Making $"+A.dF(k*j)+" Daily",1,B.a2,D.fxC)
h=A.Eb(f.b4Y(k),1,B.a2,D.fql)
r=A.A(A.a([A.E(A.x(A.a([D.fNY,A.Eb(a0.c,1,B.a2,D.aVQ)],w),B.E,e,B.e,B.i,0,B.p),1),A.x(A.a([D.fNJ,A.d(s+"/"+r,e,e,e,e,e,e,D.aVQ,e,e,e)],w),B.dL,e,B.e,B.i,0,B.p)],w),B.l,e,B.e,B.i,0,e,e)
s=A.q(e,e,B.f,A.a_(89,D.y7.l()>>>16&255,D.y7.l()>>>8&255,D.y7.l()&255),e,e,e,1,e,e,e,e,e,e)
j=A.A(A.a([f.ata("INVESTED","$"+A.dF(k),!0),f.ata("DAILY ROI",B.j.ad(j*100,2)+"%",!0),f.ata("DAYS LEFT",""+(261-u.f)+" d",!0)],w),B.l,e,B.iS,B.i,0,e,e)
k=A.dF(u.e)
u=u.f
g=261-u>0?"ACTIVE":"ENDED"
B.d.v(v,A.a([D.fUH,B.vv,A.q(e,new A.an(B.a0,e,B.ad,B.t,A.a([m,A.x(A.a([o,B.U,D.fMj,B.bH,l,B.ax,i,B.ax,h,B.U,r,B.an,s,B.an,j,B.ax,A.Eb("Earned $"+k+" \u2022 Clocked "+u+"/261 \u2022 "+g,1,B.a2,D.fwJ)],w),B.E,e,B.e,B.Q,0,B.p)],w),e),B.f,e,e,new A.p(e,e,p,q,n,D.c86,B.n),e,e,e,e,B.bF,e,e,1/0),B.aap],w))}v.push(D.fDX)
v.push(B.vv)
B.d.v(v,new A.N(a1,new C.dpj(f,a2),A.U(a1).k("N<1,v>")))
return A.c4(e,B.L,A.bn(!1,A.cc(A.x(v,B.E,e,B.e,B.i,0,B.p),B.t,e,B.y,e,new A.R(20,10,20,124+d.r.d),e,e,B.ah),!0,!1,B.ag,!0,!0),e,!1,!1,e,e)},
baa(d,e){var w=null,v=A.a_(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(8),t=A.L(B.jZ,B.r,1)
return A.q(w,A.A(A.a([A.X(B.apk,B.c,w,w,w,16),B.de,A.d("TAP",w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.Q,0,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.eI,w,w,w)},
b4Y(d){var w=B.a.b0(B.o.u(B.j.V(d*100)),4,"0")
return"****  ****  ****  "+B.a.b2(w,w.length-4)},
ata(d,e,f){var w=null,v=A.a_(217,D.y7.l()>>>16&255,D.y7.l()>>>8&255,D.y7.l()&255)
v=A.d(d,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.x(A.a([v,B.bH,A.Eb(e,w,w,A.l(w,w,E.BS,w,w,w,w,w,w,w,w,11,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w))],x.p),B.E,w,B.e,B.i,0,B.p)},
coB(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gd1F(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
w=A.L(B.aP,B.r,2)
p=x.V
o=A.a([new A.ac(0,B.G,A.a_(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.U_,16),new A.ac(0,B.G,A.a_(115,B.am.l()>>>16&255,B.am.l()>>>8&255,B.am.l()&255),B.dv,14),new A.ac(0,B.G,A.a_(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cL,8)],p)
n=A.ap(d,A.q(d,d,B.f,d,d,new A.p(d,d,d,d,d,new A.bY(B.A,0.5,B.x,d,0,A.a([A.a_(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),A.a_(0,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)],x.O),d,d),B.a7),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=A.m(5)
l=A.L(B.c,B.r,2.2)
k=A.b0(4286436348)
k=A.a_(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=A.a_(B.j.V(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
i=A.b0(4279150057)
h=x.p
p=A.A(A.a([new A.a5(44,44,new A.an(B.a0,d,B.ad,B.f,A.a([A.ap(d,A.eN(B.A,0.7853981633974483,A.q(d,d,B.f,d,d,new A.p(d,d,l,m,A.a([new A.ac(0.5,B.G,k,B.H,14),new A.ac(0,B.G,j,B.H,6),new A.ac(0,B.G,A.a_(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new A.o(0,2),4)],p),D.c6J,B.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.eyf],h),d),d),B.b5,e.baa(b2,!0)],h),B.l,d,B.e,B.i,0,d,d)
a6=A.Eb(a6,1,B.a2,D.fmK)
i=A.Eb(e.b4Y(a3),1,B.a2,D.fCd)
j=A.A(A.a([e.b4o(B.j.ad(2.86,2)+"%"),B.e4,e.b4o("261d")],h),B.l,d,B.e,B.i,0,d,d)
k=A.E(A.x(A.a([D.fFh,A.Eb("$"+A.dF(a3),1,B.a2,D.fB_)],h),B.E,d,B.e,B.i,0,B.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=A.A(A.a([k,A.d(m,d,d,d,d,d,d,D.fnA,d,d,d)],h),B.dL,d,B.e,B.i,0,d,d)
k=A.q(d,d,B.f,A.a_(89,B.bw.l()>>>16&255,B.bw.l()>>>8&255,B.bw.l()&255),d,d,d,1,d,d,d,d,d,d)
l=A.A(A.a([A.E(e.aAA("Daily","$"+A.dF(a4)),1),B.e4,A.E(e.aAA("Total","$"+A.dF(a4*261)),1),B.e4,A.E(e.aAA("Days","261"),1)],h),B.l,d,B.e,B.i,0,d,d)
g=q?d:new C.dpi(e,b3,a3,t)
f=B.j.V(127.5)
f=A.ft(d,d,B.bq,A.a_(f,B.am.l()>>>16&255,B.am.l()>>>8&255,B.am.l()&255),A.a_(f,B.aO.l()>>>16&255,B.aO.l()>>>8&255,B.aO.l()&255),d,3,d,d,B.aP,d,d,d,d,new A.b9(A.m(10),D.b4O),d,d,d,d,d)
return A.q(d,new A.an(B.a0,d,B.ad,B.f,A.a([n,A.x(A.a([p,B.bH,D.fOH,B.bH,a6,B.cU,i,B.fO,j,B.fO,m,B.fO,k,B.fO,l,B.U,new A.a5(1/0,40,A.io(A.ev(B.A,A.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.fo3,d,d,d),B.f,B.e2),g,f),d)],h),B.E,d,B.e,B.Q,0,B.p)],h),d),B.f,d,d,new A.p(d,d,w,a0,o,D.c8G,B.n),d,d,d,B.kS,D.bBR,d,d,1/0)},
b4o(d){var w=null,v=A.a_(115,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(5),t=A.L(B.cu,B.r,1)
return A.q(w,A.d(d,w,w,w,w,w,w,D.fn9,w,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.Cn,w,w,w)},
aAA(d,e){var w=null,v=A.a_(97,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(7),t=A.L(B.aO,B.r,1)
return A.q(w,A.x(A.a([A.d(d,w,w,w,w,w,w,D.fx5,w,w,w),B.vw,A.ev(B.a6,A.d(e,w,w,w,w,w,w,D.fzZ,w,w,w),B.f,B.dB)],x.p),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.me,w,w,w)}}
C.ajr.prototype={
S(){var w=null,v=A.a([],x._),u=$.aw()
return new C.az9(v,new A.au(B.aw,u),new A.au(B.aw,u),A.mY(0,w,w),new A.hW(),D.Tu,C.ai8(),A.a([],x.fw),A.aR(x.N),A.mY(0,w,w))}}
C.az9.prototype={
Y(){var w,v,u,t,s,r=this
r.a4()
w=r.a
w.toString
r.d=0
v=A.Ah(0,1)
r.e!==$&&A.aQ()
r.e=v
r.ay=w.f.aL
w=r.k3=A.bq(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t].a
if(s.length!==0)u.J(0,s)}r.adt()
r.Pv()
r.asM()
r.cBz()
r.cBP()
$.aW.x1$.push(new C.cMn(r))
r.a.toString},
Pv(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Pv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.arA(),$async$Pv)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cLI(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Pv,v)},
gaCd(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gPq())return!0
return!1},
gPq(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaXX(){var w,v=this.CW
if(v==null)return B.bE
w=v.bD(new A.V(Date.now(),0,!1))
return w.a<0?B.bE:w},
bFd(){var w=this
if(w.a.c.w)return
if(w.gPq()){if(!w.cx)w.m(new C.cLy(w))}else if(w.cx)w.m(new C.cLz(w))},
cuO(){this.m(new C.cLS(this))},
uB(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$uB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.m(new C.cLP(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.m(new C.cLQ(t))
w=1
break}w=3
return A.b(C.cfz(o.a,s),$async$uB)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return A.b(C.cfA(t.a.c.a,s),$async$uB)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.m(new C.cLR(t,r,q))
t.cDI()
t.bFd()
if(r===3)t.ZI(r)}case 1:return A.h(u,v)}})
return A.i($async$uB,v)},
ZI(d){return this.c6N(d)},
c6N(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return A.b(C.bGa(q,r,new C.cLK(t),d,s.c.a),$async$ZI)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ZI,v)},
y5(d){return this.bGK(d)},
asM(){return this.y5(!1)},
bGK(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$y5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return A.b(A.a90(k,C.hE6(l.d)),$async$y5)
case 3:j=m
w=4
return A.b(C.cfZ(k),$async$y5)
case 4:s=j.a=f
w=5
return A.b(A.asp(k),$async$y5)
case 5:r=f
w=!s.a&&J.cJ(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.Wx(!0,l,q,p)
m.a=s
w=8
return A.b(C.arC(k,s),$async$y5)
case 8:case 7:w=9
return A.b(C.VA(k),$async$y5)
case 9:o=f
w=10
return A.b(C.a8n(k),$async$y5)
case 10:n=f
if(t.c==null){w=1
break}t.m(new C.cLA(m,t,r,o,n))
case 1:return A.h(u,v)}})
return A.i($async$y5,v)},
QW(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$QW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Pv(),$async$QW)
case 3:s=t.c
if(s==null){w=1
break}r=A.ec(new C.cLN(t),!1,null,x.H)
w=4
return A.b(A.a6(s,!1).cd(r),$async$QW)
case 4:w=5
return A.b(t.Pv(),$async$QW)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QW,v)},
cFT(){this.m(new C.cMa(this))},
cBP(){var w=this,v=w.go
if(v!=null)v.a1(0)
if(w.a.c.w)return
w.go=A.df(B.rS,new C.cM4(w))},
cDI(){var w=this,v=w.id
if(v!=null)v.a1(0)
w.id=null
if(!w.gPq()||w.CW==null)return
w.id=A.df(B.fH,new C.cM7(w))},
cBz(){var w=this,v=w.fy
if(v!=null)v.a1(0)
w.fy=A.df(B.jD,new C.cM3(w))
w.FL()},
FL(){return this.cDH()},
cDH(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$FL=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aL
t=4
w=7
return A.b(A.az(),$async$FL)
case 7:q=e
p=A.aT(J.t(q.a,"app_config"))
if(p!=null&&p.length!==0){o=B.Y.aQ(0,p,null)
if(x.f.b(o)){m=A.DT(A.a3(o,x.N,x.z)).aL
i.a=m
r.a.f.aL=m}}w=10
return A.b(A.LX(),$async$FL)
case 10:w=e?8:9
break
case 8:w=11
return A.b(A.aRn(),$async$FL)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aL=l
w=14
return A.b(q.aB("String","app_config",B.Y.az(k.aj(),null)),$async$FL)
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
break}if(i.a!==r.ay)r.m(new C.cM5(i,r))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FL,v)},
b8T(){B.d.aZ(this.f,new C.cM2())},
adt(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$adt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.NP(t.a.c.a),$async$adt)
case 3:q=e
if(t.c==null){w=1
break}s=A.a([],x._)
if(J.cJ(q)){B.d.v(s,q)
B.d.aZ(s,new C.cLF())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(A.I(["role","ai","text",r,"at",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z))}t.m(new C.cLG(t,s))
t.a2B(!0)
A.bP(B.jm,new C.cLH(t),x.H)
case 1:return A.h(u,v)}})
return A.i($async$adt,v)},
ahd(){var w=0,v=A.j(x.H),u=this
var $async$ahd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ap8(u.a.c.a,u.f),$async$ahd)
case 2:return A.h(null,v)}})
return A.i($async$ahd,v)},
bz(d){this.bJ(d)},
t(){var w,v=this,u=v.fy
if(u!=null)u.a1(0)
u=v.go
if(u!=null)u.a1(0)
u=v.id
if(u!=null)u.a1(0)
u=v.r
w=$.aw()
u.T$=w
u.P$=0
u=v.w
u.T$=w
u.P$=0
v.ok.t()
v.x.t()
u=v.e
u===$&&A.c()
u.t()
v.a3()},
acp(d){var w,v=this
v.m(new C.cLD(v,d))
w=v.e
w===$&&A.c()
if(w.f.length!==0)w.BG(d,B.cw,B.kR)
else $.aW.x1$.push(new C.cLE(v,d))
if(d===0)v.a2B(!0)
if(d===1)v.cwR(!0)},
a2B(d){$.aW.x1$.push(new C.cLV(this,d))},
aBR(){return this.a2B(!1)},
a1U(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a1U=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2o(),$async$a1U)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==B.a.i(t.a.f.r))t.m(new C.cLO(t))
case 1:return A.h(u,v)}})
return A.i($async$a1U,v)},
nf(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$nf=A.e(function(c8,c9){if(c8===1){s.push(c9)
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
return A.b(C.arv(a9.a,b0),$async$nf)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return A.b(q.uB(),$async$nf)
case 10:q.m(new C.cLW(q))
w=1
break
case 8:w=11
return A.b(q.uB(),$async$nf)
case 11:if(q.c!=null&&q.ch===3)q.ZI(3)
case 6:case 4:q.m(new C.cLX(q,c5))
C.Vm(q.a.c.a,"user",c5)
q.aBR()
t=13
a8={}
w=16
return A.b(q.a1U(),$async$nf)
case 16:b1=B.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return A.b(A.a2o(),$async$nf)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.m(new C.cLY(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.bEi("",null)
q.m(new C.cLZ(q,p))
C.Vm(q.a.c.a,"ai",p)
q.aBR()
r=[1]
w=14
break}o=A.nm(a9)
a9=q.a
n=""
m=C.hE6(a9.d)
w=C.hE_(c5)?20:21
break
case 20:w=22
return A.b(C.cfY(q.a.c.a),$async$nf)
case 22:q.db=c9
w=23
return A.b(q.y5(!0),$async$nf)
case 23:case 21:w=24
return A.b(A.a90(q.a.c.a,m),$async$nf)
case 24:l=c9
k=C.hWK(l)
a9=k
b2=Date.now()
b3=new A.V(b2,0,!1).bT()
b2=B.a.b0(B.o.u(A.bL(b3)),2,"0")
b4=B.a.b0(B.o.u(A.bW(b3)),2,"0")
b5=B.a.b0(B.o.u(A.dg(b3)),2,"0")
b6=B.a.b0(B.o.u(A.fP(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+A.bC(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return A.b(C.VA(q.a.c.a),$async$nf)
case 25:i=c9
h=C.hnO(i,25)
w=26
return A.b(C.a8n(q.a.c.a),$async$nf)
case 26:g=c9
f=C.hps(g)
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
return A.b(C.ai9(a9,q.a.c.a,c5),$async$nf)
case 27:a0=c9
a1=""
if(C.hE_(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:B.a.i(b2).length!==0)===!0){b2.toString
b8=B.a.i(b2)}else{a9=a9.c
b8=B.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=A.w(d)
b4=A.w(j)
b5=q.a.c.w?"\n"+C.ijf(m)+"\n":""
b6=J.ad(n)!==0?"\n"+A.w(n)+"\n":""
b9=J.ad(a0)!==0?"\n"+A.w(a0)+"\n":""
c0=A.w(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hR3(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+A.w(c5)
w=28
return A.b(A.rg(o,a2,B.i0,null,null),$async$nf)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.bEi(a8.a,a3.a)
a4=c2
a5=A.hDm(a4)
c3=a5.a
a8.b=c3
if(B.d.gau(c3)){a9=A.C(C.ilZ(c5),x.an)
a6=a9
J.fW(a6,C.im_(c5))
J.fW(a6,C.im0(c5))
J.fW(a6,A.hCO(c5))
J.fW(a6,C.im3(c5,q.a.c.w))
a8.b=a6}c3=C.ilc(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return A.b(A.aiq(c3,a6,m,q.a.c.a),$async$nf)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.m(new C.cM_(a8,q,a7))
C.Vm(q.a.c.a,"ai",a7)
if(J.cJ(a8.b)&&q.c!=null)q.Ks(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.m(new C.cM0(q))
C.Vm(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.m(new C.cM1(q))
q.aBR()
q.ahd()
if(!q.a.c.w)q.uB()
w=r.pop()
break
case 15:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$nf,v)},
cnx(d){var w=A.T(x.N,x.z)
w.n(0,"type",d.a)
w.v(0,d.b)
return w},
cny(d){var w,v,u,t,s,r,q,p=J.t(d,"phoneActions")
if(!x.j.b(p))return B.iR
w=A.a([],x.Z)
for(v=J.aU(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gR(v)
if(u.b(r)){q=A.cj4(A.a3(r,t,s))
if(q!=null)w.push(q)}}return w},
Ks(d){return this.cvm(d)},
cvm(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ks=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J.aU(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gR(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return A.b(C.ail(p,o,new C.cLT(t,p)),$async$Ks)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return A.b(A.Hw(p,null,o,!1,!0,t.a.c.a),$async$Ks)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.L(r).f
o=A.d(m,null,null,null,null,null,null,null,null,null,null)
p.U(new A.b1(o,B.c8,null,null,null,null,null,null,null,null,null,null,null,B.lI,!1,null,null,null,B.t,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return A.b(A.Hw(p,l.f,o,k,n,j),$async$Ks)
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
return A.b(C.b_z(p,A.a([new C.rP("out_"+1000*o,new A.V(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$Ks)
case 14:t.asM()
case 13:p=t.c.L(r).f
o=A.d(m,null,null,null,null,null,null,null,null,null,null)
p.U(new A.b1(o,B.cX,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null))
w=3
break
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ks,v)},
SI(d){return this.cEa(d)},
cEa(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$SI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return A.b(C.ail(d,n,new C.cM9(t)),$async$SI)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return A.b(A.Hw(d,null,n,!1,!0,t.a.c.a),$async$SI)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.L(x.q).f.U(A.b3(null,null,null,B.c8,null,B.t,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.lI,null,null,null,null,null,null,null,null,null,null))
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
return A.b(A.Hw(d,q.f,r,p,n,o),$async$SI)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.L(x.q).f.U(A.b3(null,null,null,B.cX,null,B.t,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$SI,v)},
cwR(d){$.aW.x1$.push(new C.cLU(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.S(d).ax.a===B.J,j=k?B.dh:B.BZ,i=m.d
i===$&&A.c()
w=x.O
w=k?A.a([B.ajF,D.blF],w):A.a([B.aN,B.y2],w)
v=A.m(22)
u=A.a([new A.ac(0,B.G,A.a_(71,B.aN.l()>>>16&255,B.aN.l()>>>8&255,B.aN.l()&255),B.cA,16)],x.V)
t=m.a.c.w?m.gcj8():l
s=A.a_(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
r=A.L(B.bW,B.r,1.5)
t=A.aA(l,A.q(l,C.hd0(m.a.f.Q,48),B.f,l,l,new A.p(s,l,r,l,l,l,B.a7),l,48,l,l,l,l,l,48),B.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,B.a4)
r=A.d("NGMY Helper",l,1,B.a2,l,l,l,B.di,l,l,l)
s=A.q(l,l,B.f,l,l,D.b6V,l,8,l,l,l,l,l,8)
if(m.gaCd()&&m.d===0)q=m.gPq()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=A.q(l,A.A(A.a([t,B.bd,A.E(A.x(A.a([r,B.bH,A.A(A.a([s,B.bm,A.E(A.d(q,l,1,B.a2,l,l,l,A.l(l,l,A.a_(B.j.V(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,B.cD,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),B.l,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),1),A.aG(l,l,l,l,B.n5,l,l,l,new C.cMf(d),l,l,l,l,l,l)],p),B.l,l,B.e,B.i,0,l,l),B.f,l,l,new A.p(l,l,l,v,u,new A.a9(B.aA,B.aE,B.x,w,l,l),B.n),l,l,l,F.alA,D.bCB,l,l,l)
v=k?D.u2:B.c
u=A.m(14)
t=A.L(k?B.bA:B.ea,B.r,1)
u=A.q(l,A.A(A.a([m.bJy(),m.cDU(1,B.lj,"Music")],p),B.l,l,B.e,B.i,0,l,l),B.f,l,l,new A.p(v,l,t,u,l,l,B.n),l,l,l,l,B.eA,l,l,l)
t=m.e
t===$&&A.c()
if(m.gaCd()){v=A.a([],p)
if(m.gPq()){s=A.a_(38,B.cX.l()>>>16&255,B.cX.l()>>>8&255,B.cX.l()&255)
r=A.m(12)
q=A.L(A.a_(115,B.cX.l()>>>16&255,B.cX.l()>>>8&255,B.cX.l()&255),B.r,1)
v.push(new A.D(B.O1,A.q(l,A.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hV1(m.gaXX())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.fzq,B.K,l,l),B.f,l,l,new A.p(s,l,q,r,l,l,B.n),l,l,l,l,B.ey,l,l,1/0),l))}if(m.cy&&!m.gPq()){s=A.a_(31,B.aN.l()>>>16&255,B.aN.l()>>>8&255,B.aN.l()&255)
r=A.m(12)
q=A.m(12)
o=A.X(B.k6,k?B.i9:B.hq,l,l,l,16)
v.push(new A.D(B.O1,A.aI(!1,B.a3,!0,r,A.aP(!1,q,!0,new A.D(B.ey,A.A(A.a([o,B.bm,A.d("Back to NGMY Helper AI",l,l,l,l,l,l,A.l(l,l,k?B.i9:B.hq,l,l,l,l,l,l,l,l,12,l,l,B.V,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),B.l,l,B.bb,B.i,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcuN(),l,l,l,l,l,l,l),B.f,s,0,l,l,l,l,l,B.aj),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gcFS():l
v.push(A.E(new C.ary(s,q,new C.cMg(),r,o,l),1))
v=A.x(v,B.l,l,B.e,B.i,0,B.p)}else v=m.bJz(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.hqo(r)
t=A.a([w,B.af,new A.D(B.hX,u,l),B.U,A.E(A.hrl(A.a([v,new C.arB(q,o,n,new C.cMh(m,d),s,l)],p),B.t,t,B.y,new C.cMi(m),l),1)],p)
if(m.d===0&&!m.gaCd()){w=A.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a5F:D.a4X
w.push(new A.a5(l,36,A.hO(l,new C.cMj(m),v.length,l,l,B.aL,new C.cMk(),!1),l))}if(m.ax&&m.f.length<=1)w.push(B.U)
v=m.r
u=A.l(l,l,k?B.c:B.bo,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=A.l(l,l,k?B.aD:B.dO,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?B.w:B.c
r=A.a_(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=A.m(22)
o=A.m(22)
n=k?B.aU:B.fq
u=A.E(A.aM(l,B.Z,!1,l,!0,B.t,l,A.aO(),v,l,l,l,l,l,2,A.bt(l,new A.b6(4,q,B.a1),l,B.Cg,l,l,l,l,!0,new A.b6(4,o,new A.ay(n,1,B.r,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.y,!0,l,!0,l,!1,l,B.ak,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cMl(m),l,!1,l,l,!1,l,!0,l,B.ac,l,l,l,l,l,l,l,l,l,l,l,u,!0,B.a5,l,B.ao,l,B.aUC,l,l),1)
s=m.at
r=s?l:m.gcxR()
w.push(A.A(A.a([u,new A.JL(v,B.aN,l),B.bm,A.aI(!1,B.a3,!0,l,A.aP(!1,l,!0,new A.a5(44,44,s?D.er2:U.ari,l),B.cR,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),B.f,B.aN,0,l,l,B.cR,l,l,B.aj)],p),B.dL,l,B.e,B.i,0,l,l))
w=A.x(w,B.l,l,B.e,B.Q,0,B.p)
v=k?B.lE:B.c
t.push(A.ux(B.tS,A.q(l,new A.D(B.GJ,w,l),B.f,l,l,new A.p(v,l,A.L(k?A.a_(41,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.a_(18,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.r,1),B.tS,l,l,B.n),l,l,l,l,l,l,l,l),14,!1))}return new A.Xl(i,new C.cMm(m),A.c4(l,j,A.bn(!0,A.x(t,B.l,l,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),l,!1,!1,l,l),l)},
bJy(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===0
p=this.c
p.toString
v=A.S(p).ax.a===B.J
if(w)p=A.a_(B.j.V(255*(v?0.25:0.12)),B.aN.l()>>>16&255,B.aN.l()>>>8&255,B.aN.l()&255)
else p=B.L
u=A.m(11)
t=w?A.L(A.a_(B.j.V(127.5),B.aN.l()>>>16&255,B.aN.l()>>>8&255,B.aN.l()&255),B.r,1):q
s=A.X(B.uH,w?B.aN:B.d0,q,q,q,17)
if(w)r=v?B.c:B.as
else r=B.d0
return A.E(A.aA(q,A.cT(q,A.A(A.a([s,B.bm,A.d("Chat",q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.l,q,B.bb,B.i,0,q,q),q,q,B.b1,new A.p(p,q,t,u,q,q,B.n),B.eH,q,q,q,q,B.qA,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cLB(this),q,q,q,q,q,q,!1,B.a4),1)},
cDU(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===d
p=this.c
p.toString
v=A.S(p).ax.a===B.J
if(w)p=A.a_(B.j.V(255*(v?0.25:0.12)),B.aN.l()>>>16&255,B.aN.l()>>>8&255,B.aN.l()&255)
else p=B.L
u=A.m(11)
t=w?A.L(A.a_(B.j.V(127.5),B.aN.l()>>>16&255,B.aN.l()>>>8&255,B.aN.l()&255),B.r,1):q
s=A.X(e,w?B.aN:B.d0,q,q,q,17)
if(w)r=v?B.c:B.as
else r=B.d0
r=A.a([s,B.bm,A.d(f,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return A.E(A.aA(q,A.cT(q,A.A(r,B.l,q,B.bb,B.i,0,q,q),q,q,B.b1,new A.p(p,q,t,u,q,q,B.n),B.eH,q,q,q,q,B.qA,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cM8(this,d),q,q,q,q,q,q,!1,B.a4),1)},
bJz(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.brY:A.a_(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
w=A.m(18)
v=A.L(d?B.dl:B.aO,B.r,1)
u=q===0?1:q
return A.q(s,A.kq(!0,s,t.ok,new C.cLC(t,e,d),u,s,B.bQ,s,s,!1,!1),B.f,s,s,new A.p(r,s,v,w,s,s,B.n),s,s,s,B.hX,s,s,s,s)},
aRg(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a7(d),m=J.z(n.h(d,"role"),"user"),l=m?B.iR:this.cny(d),k=m?B.mr:B.e,j=x.p,i=A.a([],j),h=!m
if(h)B.d.v(i,A.a([new A.a5(28,28,C.hd0(this.a.f.Q,28),o),B.ae],j))
w=m?B.dL:B.E
j=A.a([],j)
if(h)j.push(D.erk)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=B.aN
else u=e?B.ZL:B.aP
t=m?16:4
s=m?4:16
if(m)r=o
else r=A.L(e?B.bA:B.aO,B.r,1)
q=A.a([new A.ac(0,B.G,A.a_(10,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dG,6)],x.V)
if(f)n=A.d("typing\u2026",o,o,o,o,o,o,A.l(o,o,e?B.aD:B.dO,o,o,o,o,o,o,o,o,12,B.cH,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=B.c
else p=e?B.ab:B.bq
p=A.d(n,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(A.h8Q(m,A.q(o,n,B.f,o,o,new A.p(u,o,r,new A.be(B.jN,B.jN,new A.aN(t,t),new A.aN(s,s)),q,o,B.n),o,o,o,o,Af.wk,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(A.hDr(l,e,this.gcE9()))
i.push(new A.dl(1,B.cm,A.x(j,w,o,B.e,B.i,0,B.p),o))
if(m)i.push(B.de)
return new A.D(B.d3,A.A(i,B.dL,o,k,B.i,0,o,o),o)},
bJx(d,e){return this.aRg(d,e,!1)}}
C.aMk.prototype={
Y(){this.a4()
$.zj().aW(0,this.gEY())},
t(){$.zj().a6(0,this.gEY())
this.a3()}}
C.aMl.prototype={
Y(){this.a4()
$.zj().aW(0,this.gEY())},
t(){$.zj().a6(0,this.gEY())
this.a3()}}
C.aMm.prototype={
Y(){this.a4()
$.zj().aW(0,this.gEY())},
t(){$.zj().a6(0,this.gEY())
this.a3()}}
C.aNi.prototype={
Y(){this.a4()
$.zj().aW(0,this.gEY())},
t(){$.zj().a6(0,this.gEY())
this.a3()}}
C.Xb.prototype={
a7(){return"NgmySnapshotResolveOutcome."+this.b}}
C.aoT.prototype={
S(){return new C.aE9()}}
C.aE9.prototype={
Y(){var w,v=this
v.a4()
w=v.a
v.d=w.d
v.e=A.bq(w.e,!0,x.o)
v.f=v.a.f},
lf(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
AR(d,e){return this.cJC(d,e)},
cJC(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$AR=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dFP(q,e))
t=3
w=6
return A.b(d.$0(),$async$AR)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.m(new C.dFQ(q))
w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$AR,v)},
Bh(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Bh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=t.d
q===$&&A.c()
w=3
return A.b(A.vd(r,q),$async$Bh)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dFG(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Bh,v)},
aaS(){var w=0,v=A.j(x.gE),u,t=this,s,r,q,p
var $async$aaS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Bh(),$async$aaS)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&A.c()
q=t.e
q===$&&A.c()
p=t.f
p===$&&A.c()
u=A.OE(s,A.KP(A.c3d(r,q,s,p).f2(),null,"  "))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aaS,v)},
Yo(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Yo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.pv(s,t.a.c,!1),$async$Yo)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.AR(new C.dFE(t),"Preparing download\u2026"),$async$Yo)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yo,v)},
ZU(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.pv(s,t.a.c,!1),$async$ZU)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.AR(new C.dFO(t),"Creating QR code\u2026"),$async$ZU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZU,v)},
ZT(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.idQ(r),$async$ZT)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.AR(new C.dFD(t,s),"Looking up code\u2026"),$async$ZT)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZT,v)},
aem(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$aem=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xO.cq().MG(B.Sx,B.uB,!0),$async$aem)
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
p=A.jJ(p,0,null)
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
case 6:u=A.Hs()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aem,v)},
Av(d,e,f){return this.bLR(d,e,f)},
aSz(d,e){return this.Av(d,!1,e)},
bLQ(d){return this.Av(d,!1,!1)},
bLR(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Av=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Bh(),$async$Av)
case 3:if(t.c==null){w=1
break}if(!C.c3i(d,t.a.c,null)){t.lf(C.c3j(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&A.c()
s=!C.hQL(d,s)}if(s){t.lf(y.B)
w=1
break}r=d.as
q=J.cr(r)
s=t.c
s.toString
w=4
return A.b(C.ie2(s,q,t.a.c,d),$async$Av)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=A.m4(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,B.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&A.c()
r=o}w=5
return A.b(A.rT(s,p,r,!1,null,null,d.ax),$async$Av)
case 5:if(t.c==null){w=1
break}t.m(new C.dFC(t,p,r,d))
t.lf("Restored your local Growth Income. Go back to see it updated.")
case 1:return A.h(u,v)}})
return A.i($async$Av,v)},
ael(){var w=0,v=A.j(x.H),u=this
var $async$ael=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.AR(new C.dFF(u),"Reading file\u2026"),$async$ael)
case 2:return A.h(null,v)}})
return A.i($async$ael,v)},
XH(d){return this.bN9(d)},
bN9(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$XH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&A.c()
s=new A.d7("local_qr_dep_"+1000*r,q.a,d,B.fP,B.fu,"Admin deposit ($"+A.dF(d)+")",null,null,B.cv,new A.V(Date.now(),0,!1))
C.chZ(t.d,s)
q=t.e
q===$&&A.c()
r=A.C(q,x.o)
r.push(s)
w=3
return A.b(A.rT(t.a.c,t.d,r,!0,null,null,null),$async$XH)
case 3:w=4
return A.b(t.Bh(),$async$XH)
case 4:if(t.c==null){w=1
break}t.lf("Deposited $"+A.dF(d)+" to your local wallet.")
case 1:return A.h(u,v)}})
return A.i($async$XH,v)},
b8g(d){var w=null
return A.cf(w,w,!0,w,new C.dFM(),d,w,!0,!0,x.N)},
WL(d){return this.bF7(d)},
bF7(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$WL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return A.b(t.XH(d.b),$async$WL)
case 5:w=1
break
case 4:s=d.c
t.lf(s==null?"Could not apply deposit.":s)
case 1:return A.h(u,v)}})
return A.i($async$WL,v)},
Fi(d){return this.csq(d)},
csq(d){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o,n
var $async$Fi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Bh(),$async$Fi)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return A.b(C.b2s(d,t.a.c),$async$Fi)
case 4:s=f
if(!s.a){u=!1
w=1
break}if(s.b){t.lf("This deposit code was already used.")
u=!0
w=1
break}if(s.d){t.lf(y.y)
u=!0
w=1
break}if(s.c){t.lf(y.j)
u=!0
w=1
break}r=t.c
if(r==null){u=!0
w=1
break}w=5
return A.b(t.b8g(r),$async$Fi)
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
return A.b(C.chS(d,o,n.a,r,p),$async$Fi)
case 7:w=6
return A.b(t.WL(f),$async$Fi)
case 6:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Fi,v)},
Fj(d){return this.csr(d)},
csr(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Fj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.Bh(),$async$Fj)
case 3:if(t.c==null){w=1
break}w=4
return A.b(C.chR(d,t.a.c),$async$Fj)
case 4:s=f
if(!s.a){t.lf(y.m)
w=1
break}if(s.b){t.lf("This deposit code was already used.")
w=1
break}if(s.d){t.lf(y.y)
w=1
break}if(s.c){t.lf(y.j)
w=1
break}r=t.c
if(r==null){w=1
break}w=5
return A.b(t.b8g(r),$async$Fj)
case 5:q=f
if(q==null||B.a.i(q).length===0){w=1
break}r=t.a.c
p=B.a.i(q)
o=t.e
o===$&&A.c()
n=t.d
n===$&&A.c()
w=7
return A.b(C.WQ(o,n.a,d,r,p),$async$Fj)
case 7:w=6
return A.b(t.WL(f),$async$Fj)
case 6:case 1:return A.h(u,v)}})
return A.i($async$Fj,v)},
PK(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$PK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DA()){t.lf("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).cd(A.ec(new C.dFH(),!0,null,x.N)),$async$PK)
case 3:r=e
if(r==null||B.a.i(r).length===0){w=1
break}w=B.a.a0(B.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return A.b(t.AR(new C.dFI(t,r),"Applying deposit\u2026"),$async$PK)
case 6:w=1
break
case 5:w=7
return A.b(t.AR(new C.dFJ(t,r),"Loading\u2026"),$async$PK)
case 7:case 1:return A.h(u,v)}})
return A.i($async$PK,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.S(d).ax.a===B.J,m=n?B.jA:B.qk,l=n?B.c:B.T,k=n?B.aT:B.am,j=n?B.bA:B.w.j(0.06),i=x.p
j=A.A(A.a([A.aP(!1,o,!0,A.q(B.A,A.X(B.eN,l,o,o,o,16),B.f,o,o,new A.p(j,o,o,o,o,o,B.a7),o,38,o,o,o,o,o,38),B.cR,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dFR(d),o,o,o,o,o,o,o)],i),B.l,o,B.e,B.i,0,o,o)
w=A.d("Backup & Restore",o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,B.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=A.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,B.cD,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=A.E(new C.a1F(D.bQl,"Download",E.a5U,u?o:p.gbSM(),o),1)
t=A.A(A.a([t,B.ex,A.E(new C.a1F(B.jJ,"Show QR",D.dy7,u?o:p.gc8y(),o),1)],i),B.l,o,B.e,B.i,0,o,o)
u=p.r
s=A.E(new C.a1F(D.bQm,"Upload",B.a5j,u?o:p.gc8w(),o),1)
s=A.A(A.a([s,B.ex,A.E(new C.a1F(B.jp,"Scan QR",D.d6k,u?o:p.gc8x(),o),1)],i),B.l,o,B.e,B.i,0,o,o)
u=p.r?o:p.gc8v()
r=n?B.c.j(0.06):B.aY.j(0.08)
q=A.m(16)
q=A.a([A.cl(A.a([j,B.aB,w,B.U,v,B.l2,t,B.aB,s,B.aB,new C.buo(B.t4,"Enter Code",B.a4D,u,o),B.l2,A.q(o,A.A(A.a([A.X(B.hw,B.aY,o,o,o,18),B.au,A.E(A.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.E,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(r,o,o,q,o,o,B.n),o,o,o,o,B.jn,o,o,o)],i),o,o,Ae.Of,o,o,B.ah,!1)],i)
if(p.r){j=n?B.iD:B.c
w=p.w
if(w==null)w="Working\u2026"
q.push(A.ap(0,A.aI(!1,B.a3,!0,o,new A.D(B.Cj,A.A(A.a([I.aTB,B.bd,A.E(A.d(w,o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,B.V,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.l,o,B.e,B.i,0,o,o),o),B.f,j,8,o,o,o,o,o,B.aj),o,o,0,0,o,o))}return A.c4(o,m,A.bn(!1,new A.an(B.a0,o,B.ad,B.t,q,o),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)}}
C.a1F.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ac(0,B.G,B.d.gan(s).j(0.35),B.dv,16)],x.V),p=B.c.j(0.22)
return A.aI(!1,B.a3,!0,u,A.aP(!1,t,!0,A.q(v,A.x(A.a([A.q(v,A.X(w.c,B.c,v,v,v,30),B.f,v,v,new A.p(p,v,v,v,v,v,B.a7),v,56,v,v,v,v,v,56),B.af,A.d(w.d,v,v,v,v,v,v,B.tJ,v,v,v)],x.p),B.l,v,B.bb,B.i,0,B.p),B.f,v,v,new A.p(v,v,v,r,q,new A.a9(B.aA,B.aE,B.x,s,v,v),B.n),v,140,v,v,B.bQ,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.buo.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ac(0,B.G,B.d.gan(s).j(0.35),B.dv,16)],x.V),p=B.c.j(0.22)
return A.aI(!1,B.a3,!0,u,A.aP(!1,t,!0,A.q(v,A.A(A.a([A.q(v,A.X(w.c,B.c,v,v,v,24),B.f,v,v,new A.p(p,v,v,v,v,v,B.a7),v,44,v,v,v,v,v,44),B.ex,A.d(w.d,v,v,v,v,v,v,B.tJ,v,v,v)],x.p),B.l,v,B.bb,B.i,0,v,v),B.f,v,v,new A.p(v,v,v,r,q,new A.a9(B.aA,B.aE,B.x,s,v,v),B.n),v,v,v,v,D.bEP,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.a0g.prototype={
S(){return new C.bld()}}
C.bld.prototype={
gayl(){var w=this.e
return w===$?this.e=this.a.d:w},
Y(){var w=this
w.a4()
w.RC()
w.f=A.df(B.om,new C.dFV(w))},
t(){var w=this.f
if(w!=null)w.a1(0)
this.a3()},
RC(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$RC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return A.b(A.vd(q.e,q.f),$async$RC)
case 3:q=e.a
s=A.c3d(q[3],q[1],t.a.e,q[4])
w=4
return A.b(A.OE(t.a.e,A.KP(s.f2(),null,"  ")),$async$RC)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.m(new C.dFS(t,r))
case 1:return A.h(u,v)}})
return A.i($async$RC,v)},
B(d){var w=this,v=null,u=A.S(d).ax.a===B.J,t=u?B.jA:B.qk,s=u?B.iD:B.c,r=u?B.c:B.bo,q=A.eH(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,B.aWK,v,v,v,1,v,!0),p=A.m(24),o=A.L(B.aY.j(0.35),B.r,1),n=w.d,m=A.qc(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,B.c),l=A.d("Code: "+w.gayl(),v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=A.m(20),j=B.aY.j(0.12),i=A.m(20),h=x.p
i=A.aP(!1,k,!0,A.q(v,A.A(A.a([A.X(B.fJ,B.aY,v,v,v,14),B.bm,A.d("Copy code",v,v,v,v,v,v,A.l(v,v,B.aY,v,v,v,v,v,v,v,v,12,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),B.l,v,B.e,B.Q,0,v,v),B.f,v,v,new A.p(j,v,v,i,v,v,B.n),v,v,v,v,B.mc,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dFT(w,d),v,v,v,v,v,v,v)
return A.c4(q,t,new A.D(B.ac,A.x(A.a([A.E(A.q(v,A.x(A.a([B.U,m,B.bz,l,B.U,i,B.aB,A.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,A.l(v,v,u?B.aT:B.am,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v)],h),B.l,v,B.bb,B.i,0,B.p),B.f,v,v,new A.p(s,v,o,p,v,v,B.n),v,v,v,v,B.ac,v,v,1/0),1),B.aQ,new A.a5(1/0,v,A.bI(B.AS,v,new C.dFU(d),A.bp(B.aY,v,v,v,v,B.h6,v,v,v,v,v,v)),v)],h),B.l,v,B.e,B.i,0,B.p),v),v,!1,!1,v,v)}}
C.a0h.prototype={
S(){return new C.ble(A.zW(B.yu,B.o4,B.v2))}}
C.ble.prototype={
t(){this.d.t()
this.a3()},
B(d){var w=null
return A.c4(A.eH(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fV3,w,w,w,1,w,!0),B.w,A.zV(this.d,B.c_,new C.dFW(this,d)),w,!1,!1,w,w)}}
C.afv.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.S(a0).ax.a===B.J,k=l?B.iD:B.c,j=l?B.c:B.T,i=l?B.aT:B.am,h=l?B.aU:B.ea,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=A.m(26)
w=A.L(B.aY.j(0.35),B.r,1)
v=A.a([new A.ac(0,B.G,B.aY.j(0.16),B.kB,36)],x.V)
u=A.q(m,D.bWq,B.f,m,m,new A.p(m,m,m,A.m(18),B.a5T,D.c65,B.n),m,58,m,m,m,m,m,58)
t=A.d("Restore local backup?",m,m,m,m,m,m,A.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,B.u,m,m,!0,m,-0.3,m,m,m,m,m,m),B.K,m,m)
s=A.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,A.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),B.K,m,m)
r=l?B.jA:B.qk
q=A.m(18)
p=A.L(B.aY.j(0.22),B.r,1)
o=x.p
g=A.a([new C.R0("Account",B.a.i(this.d),i,j,m),B.X,new C.R0("Balance","$"+A.dF(g.d),i,j,m)],o)
if(d!=null&&B.a.i(d).length!==0)B.d.v(g,A.a([B.X,new C.R0("Investment",d,i,j,m)],o))
g.push(B.X)
g.push(new C.R0("Saved on",""+A.bL(f)+"/"+A.bW(f)+"/"+A.bC(f),i,j,m))
g.push(B.X)
g.push(new C.R0("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=A.q(m,A.x(g,B.E,m,B.e,B.i,0,B.p),B.f,m,m,new A.p(r,m,p,q,m,m,B.n),m,m,m,m,B.bQ,m,m,1/0)
r=B.av.j(l?0.14:0.12)
q=A.m(14)
p=A.L(B.av.j(0.35),B.r,1)
n=A.X(B.wG,l?B.aS:B.cZ,m,m,m,16)
return A.eP(m,B.L,new A.cQ(B.Xy,A.c2(new A.D(B.yP,A.x(A.a([u,B.aQ,t,B.U,s,B.bz,g,B.aB,A.q(m,A.A(A.a([n,B.ae,A.E(A.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,A.l(m,m,l?B.bL:B.i8,m,m,m,m,m,m,m,m,11.5,m,m,B.V,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),B.E,m,B.e,B.i,0,m,m),B.f,m,m,new A.p(r,m,p,q,m,m,B.n),m,m,m,m,B.ey,m,m,1/0),B.d8,A.A(A.a([A.E(A.dU(B.nZ,new C.f5u(a0),A.di(m,m,m,m,m,m,m,m,m,j,m,m,B.cp,m,new A.b9(A.m(14),B.a1),new A.ay(h,1,B.r,-1),m,m,m,m)),1),B.au,A.E(A.bI(D.fDe,m,new C.f5v(a0),A.bp(B.aY,m,m,m,m,m,B.cp,m,new A.b9(A.m(14),B.a1),m,m,m)),2)],o),B.l,m,B.e,B.i,0,m,m)],o),B.l,m,B.e,B.Q,0,B.p),m),new A.p(k,m,w,e,v,m,B.n),B.bj),m),m,m,m,B.ez,B.d7,m,m,m)}}
C.R0.prototype={
B(d){var w=this,v=null
return A.A(A.a([new A.a5(92,v,A.d(w.c,v,v,v,v,v,v,A.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,B.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),A.E(A.d(w.d,v,v,v,v,v,v,A.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,B.I,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.E,v,B.e,B.i,0,v,v)}}
C.a_o.prototype={
S(){return new C.aBm(new A.au(B.aw,$.aw()),A.k9(!0,null,!0,!0,null,null,!1))}}
C.aBm.prototype={
Y(){this.a4()
$.aW.x1$.push(new C.deP(this))},
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.e.t()
this.a3()},
c8A(){var w,v=this.c
v.toString
w=B.a.i(this.d.a.a)
A.a6(v,!1).O(w)
return null},
B(d){var w=this,v=null,u=A.S(d).ax.a===B.J,t=u?B.iD:B.c,s=u?B.c:B.T,r=u?B.aT:B.am,q=u?B.jA:B.qk,p=u?B.aU:B.ea,o=A.m(24),n=A.L(B.aY.j(0.35),B.r,1),m=A.a([new A.ac(0,B.G,B.aY.j(0.18),B.h5,32)],x.V),l=A.q(v,Ad.as0,B.f,v,v,new A.p(v,v,v,A.m(18),B.a5T,D.c8Q,B.n),v,56,v,v,v,v,v,56),k=A.d("Enter restore code",v,v,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,B.u,v,v,!0,v,-0.3,v,v,v,v,v,v),B.K,v,v),j=A.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),B.K,v,v),i=A.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,B.I,v,v,!0,v,8,v,v,v,v,v,v),h=A.a([new A.uU(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.btS(new C.deM())],x.G),g=A.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,B.V,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return A.eP(v,B.L,new A.cQ(A5.LR,A.c2(new A.D(B.yP,A.x(A.a([l,B.aQ,k,B.U,j,B.dY,A.aM(!1,B.Z,!1,v,!0,B.t,v,A.aO(),w.d,v,v,v,v,v,2,A.bt(v,v,v,B.GQ,v,v,"",v,!0,new A.b6(4,A.m(16),new A.ay(p,1,B.r,-1)),v,v,v,v,v,q,!0,v,v,v,v,new A.b6(4,A.m(16),D.b4M),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!1,v,!1,w.e,B.ak,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.deN(w),v,!1,v,v,!1,v,!0,v,B.ac,v,v,v,v,v,v,v,v,v,v,v,i,!0,B.K,v,B.mz,v,v,v,v),B.dY,A.A(A.a([A.E(A.dU(B.nZ,new C.deO(d),A.di(v,v,v,v,v,v,v,v,v,s,v,v,B.cp,v,new A.b9(A.m(14),B.a1),new A.ay(p,1,B.r,-1),v,v,v,v)),1),B.au,A.E(A.bI(D.fGZ,v,w.gc8z(),A.bp(B.aY,v,v,v,v,v,B.cp,v,new A.b9(A.m(14),B.a1),v,v,v)),2)],f),B.l,v,B.e,B.i,0,v,v)],f),B.l,v,B.e,B.Q,0,B.p),v),new A.p(t,v,n,o,m,v,B.n),B.bj),v),v,v,v,B.Oi,B.d7,v,v,v)}}
C.apo.prototype={
S(){return new C.bll(B.cN)},
hI(d){return this.x.$1(d)},
bv(){return this.y.$0()}}
C.bll.prototype={
Y(){var w,v=this
v.a4()
w=v.a
w.toString
$.tU=$.tU+1
v.r=B.o.M(B.o.D(C.fP0(w.e,w.d.y2),1,600))
w=v.a
if(!J.lK(w.d.y2,w.e))v.r=C.ijI(v.a.e)
v.w=A.df(B.fH,new C.dMi(v))},
t(){var w=this.w
if(w!=null)w.a1(0)
this.cmn()
C.b1f()
this.a3()},
cmn(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:B.j.D(r.e/w,0,1)
if(v<=0)return
u=A.oo(B.j.ad(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=B.o.u(1000*Date.now())
s=r.a
w.hI(new A.d7(t,s.c.a,u,B.h0,B.fu,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,B.cv,new A.V(Date.now(),0,!1)))
r.a.bv()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.va(u,q,"Left early \xb7 +$"+B.j.ad(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
KC(d,e){return this.cyv(d,e)},
b7U(d){return this.KC(!1,d)},
cyu(d){return this.KC(d,"")},
cyv(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$KC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}t.x=!0
s=t.w
if(s!=null)s.a1(0)
if(d)r=1
else{s=t.f
r=s<=0?0:B.j.D(t.e/s,0,1)}w=r<=0?3:4
break
case 3:s=t.a
q=s.c.a
p=s.f
s=s.w
o=e.length===0
C.va(s,null,o?"No progress":e,q,p,s,null,!1)
s=t.c
if(s==null){w=1
break}w=5
return A.b(C.bG4(s,C.bFM(),C.hgP(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$KC)
case 5:w=1
break
case 4:n=A.oo(B.j.ad(t.a.w*1.46*r,2))
m=r>=1
t.m(new C.dM9(t,n,r))
s=B.o.u(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new A.d7(s,p,n,B.h0,B.fu,q,null,null,B.cv,new A.V(Date.now(),0,!1))
A.aij(l,!0)
t.a.hI(l)
t.a.bv()
if(m)k="+$"+B.j.ad(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+B.j.ad(n,2)+" ("+B.j.V(r*100)+"% of the prize)"}q=t.a
C.va(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return A.b(C.bG4(s,C.bFM(),C.hgP(),""+t.e+"/"+t.f,k,q,!0),$async$KC)
case 6:w=7
return A.b(C.aib(t.a.f,k),$async$KC)
case 7:case 1:return A.h(u,v)}})
return A.i($async$KC,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.r
n===$&&A.c()
w=B.o.aq(n,60)
v=B.a.b0(B.o.u(B.o.F(n,60)),2,"0")
u=A.aG(o,o,o,o,B.PW,o,o,o,new C.dMc(d),o,o,o,o,o,o)
t=p.a
s=x.p
t=A.E(A.x(A.a([A.d(t.f,o,1,B.a2,o,o,o,B.jP,o,o,o),A.d("Win $"+B.j.ad(t.w*1.46,2)+" \xb7 stake $"+B.j.ad(p.a.w,2),o,o,o,o,o,o,D.frV,o,o,o)],s),B.E,o,B.e,B.i,0,B.p),1)
r=p.a.c.a
n=n<=10?B.ay:B.c.j(0.1)
q=A.m(99)
q=A.A(A.a([u,t,new C.ar7(r,new C.dMd(p),o),B.bm,A.cT(o,A.A(A.a([D.c08,B.de,A.d(""+w+":"+v,o,o,o,o,o,o,B.iA,o,o,o)],s),B.l,o,B.e,B.i,0,o,o),o,o,B.b1,new A.p(n,o,o,q,o,o,B.n),B.a3,o,o,o,o,B.pl,o,o,o)],s),B.l,o,B.e,B.i,0,o,o)
n=p.a
v=n.w
w=v*1.46
r=p.e/p.f
n=A.A(A.a([A.E(A.by(A.m(99),A.kp(B.bA,o,o,9,o,r,new A.lN(B.d.gH(n.r),x.dw)),B.aq),1),B.au,A.d(""+p.e+"/"+p.f,o,o,o,o,o,o,D.fBo,o,o,o)],s),B.l,o,B.e,B.i,0,o,o)
t=A.m(22)
u=A.a([B.d.gH(p.a.r).j(0.35),F.ajx],x.O)
return C.aRo(o,D.bt3,A.bn(!0,A.x(A.a([new A.D(D.bH0,q,o),new C.Og(w*r,w,v,o),new A.D(F.am1,n,o),A.E(new A.D(B.yC,A.by(t,A.c2(new A.dw(p.x,Y.hC_(p.a.e,new Y.A2(new C.dMe(p),new C.dMf(p),new C.dMg(p),p.d)),o),new A.p(o,o,o,o,o,new A.a9(B.b7,B.b8,B.x,u,o,o),B.n),B.bj),B.aq),o),1)],s),B.l,o,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0))}}
C.a7D.prototype={
B(d){var w=null,v=A.m(26),u=A.L(B.av.j(0.5),B.r,1),t=A.a([new A.ac(0,B.G,B.av.j(0.22),B.H,26)],x.V)
return A.eP(w,B.L,A.q(w,A.x(A.a([A.q(w,D.bUC,B.f,w,w,new A.p(B.av.j(0.16),w,A.L(B.av,B.r,2),w,w,w,B.a7),w,68,w,w,w,w,w,68),B.aB,D.fQO,B.U,A.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w),B.U,A.d("The count starts again from zero next month.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),B.aQ,new A.a5(1/0,w,A.bI(D.fDZ,w,new C.cca(d),A.bp(B.av,w,w,w,B.w,B.h6,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w)],x.p),B.l,w,B.e,B.Q,0,B.p),B.f,w,w,new A.p(w,w,u,v,t,D.c6H,B.n),w,w,w,w,D.bFf,w,w,w),w,w,w,B.amz,B.d7,w,w,w)}}
C.aoS.prototype={
S(){return new C.blb(null,null)},
gZ(d){return this.e}}
C.blb.prototype={
Y(){var w,v=this,u=null
v.a4()
w=v.d=A.bl(u,B.C7,u,1,u,v)
w.dl()
w.dV$.J(0,new C.dFr(v))
w=A.bl(u,B.m9,u,1,u,v)
w.cO(0)
v.e=w
w=A.bl(u,B.NK,u,1,u,v)
w.cO(0)
v.f=w
w.dl()
w.dV$.J(0,new C.dFs(v))
if(v.a.c){v.d.cO(0)
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
w.cO(0)
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
if(!(v!=null&&v.a!=null))w.cO(0)
w=u.f
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cO(0)}},
t(){var w=this,v=w.d
v===$&&A.c()
v.t()
v=w.e
v===$&&A.c()
v.t()
v=w.f
v===$&&A.c()
v.t()
w.byI()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.Sy[B.o.F(a9.r,5)]:b4
w=!b3&&b4==null?D.Sy[B.o.F(a9.w,5)]:b0
b1=b4!=null
if(b1){b3=A.w(b4)
v=b4>0?"+"+b3:b3}else if(w!=null){b3=A.w(w)
if(w>0)b3="+"+b3
v=b3}else v="?"
if(b1)u=b4>0?B.cX:B.bC
else if(w!=null){b1=(w>0?B.cX:B.bC).j(0.45)
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
b3=A.a([A.e6(B.A,A.q(b0,b0,B.f,b0,b0,new A.p(b0,b0,b0,b0,A.a([new A.ac(6+e,B.G,B.aF.j(0.4+q*0.3),B.H,32+q*22),new A.ac(3,B.G,B.ba.j(0.2+p*0.25),B.H,40+p*16)],d),b0,B.a7),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=A.q(b0,b0,B.f,b0,b0,new A.p(A.ar(B.bp,B.aS,B.o.F(a3,3)/2).j(a2),b0,b0,b0,A.a([new A.ac(0,B.G,B.aF.j(0.7),B.H,e)],d),b0,B.a7),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(A.dM(new A.iR(A.wP(a4+a3),b0,B.A,!0,b0,a8,b0),new A.o(a6*a0+a5*b2*0.04,a7*a0)))}B.d.v(f,b3)}b3=b2*0.06
e=x.V
f.push(A.dM(A.q(b0,b0,B.f,b0,b0,new A.p(b0,b0,b0,A.m(b2*0.5),A.a([new A.ac(b2*0.02,B.G,B.w.j(0.4+b1),B.H,b2*0.14)],e),b0,B.n),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new A.o(0,n+b3)))
b1=A.dr()
d=b1.a
d.$flags&2&&A.aj(d)
d[11]=0.0025
b1.n_(o)
b1.k5(k,k,k,1)
b1.km(l)
b1.fL(m)
d=b2*0.2
a1=A.m(d)
if(a9.a.c)a2=D.dcf
else{a2=A.ar(B.c,B.kK,q*0.45)
a2.toString
a2=A.a([a2,B.bO,B.cu],x.O)}a4=A.ar(B.bK,B.aF,q*0.65)
a4.toString
a4=A.L(a4,B.r,3)
e=A.a([new A.ac(0,B.G,B.w.j(0.3),D.enu,16)],e)
if(!a9.a.c)e.push(new A.ac(p*3,B.G,B.aF.j(0.3+q*0.4),B.H,24+p*16))
e.push(new A.ac(0,B.G,B.c.j(0.9),B.U_,0))
g=A.a([],g)
if(!a9.a.c)g.push(A.bR(0,A.c2(b0,new A.p(b0,b0,b0,A.m(d),b0,new A.a9(new A.da(-1+Math.cos(j)*0.8,-1),new A.da(1,1),B.x,A.a([B.c.j(0),B.c.j(0.28+p*0.25),B.c.j(0)],x.O),b0,b0),B.n),B.bj),0,0,0))
g.push(A.ap(b0,A.q(b0,b0,B.f,b0,b0,new A.p(b0,b0,b0,A.m(6),b0,new A.a9(B.a6,B.aa,B.x,A.a([B.c.j(0.95),B.c.j(0)],x.O),b0,b0),B.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=A.a([new A.cU(B.w.j(0.18),B.dG,5)],x.C)
if(!a9.a.c)d.push(new A.cU(B.aF.j(0.4+q*0.35),B.H,12+p*10))
g.push(A.at(A.uG(A.d(v,b0,b0,b0,b0,b0,b0,A.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,B.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),B.b1,B.jm,b3),b0,b0,b0))
f.push(A.dM(A.fz(B.A,A.q(b0,new A.an(B.a0,b0,B.ad,B.t,g,b0),B.f,b0,b0,new A.p(b0,b0,a4,a1,e,new A.a9(B.aA,B.aE,B.x,a2,b0,b0),B.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new A.o(0,n)))
return new A.a5(h,h,new A.an(B.A,b0,B.ad,B.f,f,b0),b0)}}
C.aMS.prototype={
aY(){this.b5()
this.b4()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.Og.prototype={
B(d){var w=null,v=new C.ceC(),u=v.$3("STAKE","$"+B.j.ad(this.e,2),B.c),t=A.m(18),s=A.L(B.bx.j(0.7),B.r,1.4),r=A.a([new A.ac(0,B.G,B.aY.j(0.35),B.H,14)],x.V),q=x.p
return new A.D(B.O1,A.A(A.a([u,A.q(w,A.x(A.a([D.fPs,A.lC(new C.ceB(),w,B.b1,B.mV,w,w,new A.br(w,this.c,x.e7),x.gR)],q),B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(w,w,s,t,r,D.asR,B.n),w,w,w,w,B.Od,w,w,w),v.$3("FULL WIN","$"+B.j.ad(this.d,2),B.bL)],q),B.l,w,B.e,B.i,0,w,w),w)}}
C.ar7.prototype={
B(d){var w=null,v=A.m(99),u=A.L(B.jV.j(0.7),B.r,1)
return A.q(w,A.A(A.a([D.bT3,B.de,C.arY(this.d,B.nY,this.c)],x.p),B.l,w,B.e,B.Q,0,w,w),B.f,w,w,new A.p(w,w,u,v,w,D.asR,B.n),w,w,w,w,B.On,w,w,w)},
ge3(){return this.c}}
C.Oo.prototype={
S(){return new C.blV(null,null)}}
C.blV.prototype={
Y(){var w,v=this
v.a4()
w=A.bl(null,B.m9,null,1,null,v)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bzj()},
aQ7(d,e){var w=this.a.d,v=A.U(w).k("N<1,n>"),u=A.C(new A.N(w,C.iqj(),v),v.k("ak.E"))
w=this.d
w===$&&A.c()
return A.c8(w,new C.e4T(this,u),null)},
B(d){var w=null
if(this.a.e)return A.c4(w,D.aiQ,A.bn(!0,this.aQ7(0,d),!0,!1,B.ag,!0,!0),w,!1,!1,w,w)
return this.aQ7(0,d)},
az9(d,e,f){var w=null,v=f.j(0.16),u=A.m(10)
return A.A(A.a([A.q(w,A.X(d,f,w,w,w,17),B.f,w,w,new A.p(v,w,w,u,w,w,B.n),w,32,w,w,w,w,w,32),B.au,A.E(A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)}}
C.aNs.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aen.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=A.aH(d,B.eo,o).w.r.d,m=this.c,l=J.cC(m),k=l.eP(m,new C.e4W()).gI(0),j=new A.ea(l.dM(m,new C.e4X(),x.cD),x.bG).cJ(0,0,new C.e4Y())
o=A.aH(d,B.c1,o).w
w=x.p
v=A.a([B.X,A.q(p,p,B.f,p,p,new A.p(B.aU,p,p,A.m(2),p,p,B.n),p,4,p,p,p,p,p,42),new A.D(B.amg,A.A(A.a([A.q(p,D.c2A,B.f,p,p,new A.p(p,p,p,A.m(14),A.a([new A.ac(0,B.G,B.fd.j(0.45),B.H,14)],x.V),D.asL,B.n),p,44,p,p,p,p,p,44),B.bd,D.bJq,A.aG(p,p,p,p,B.lp,p,p,p,new C.e4Z(d),p,p,p,p,p,p)],w),B.l,p,B.e,B.i,0,p,p),p)],w)
if(l.gcm(m)){u=C.hbl("GAMES",""+l.gI(m),B.eL)
t=C.hbl("WON",""+k,B.jV)
s=j>=0
r=s?"+":"-"
q=C.bCv(j)
s=s?B.jV:B.eU
v.push(new A.D(D.bDo,A.A(A.a([u,B.ae,t,B.ae,C.hbl("NET",r+q,s)],w),B.l,p,B.e,B.i,0,p,p),p))}if(l.gau(m))v.push(new A.D(new A.R(24,36,24,24+n),A.x(A.a([A.X(D.bP7,B.c.j(0.35),p,p,p,52),B.af,A.d("No game receipts yet",p,p,p,p,p,p,A.l(p,p,B.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.an,A.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,A.l(p,p,B.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),B.K,p,p)],w),B.l,p,B.e,B.i,0,B.p),p))
else v.push(new A.dl(1,B.cm,A.hO(p,new C.e5_(this),l.gI(m),new A.R(14,2,14,16+n),p,B.ah,new C.e50(),!1),p))
return A.q(p,A.x(v,B.l,p,B.e,B.Q,0,B.p),B.f,p,new A.aY(0,1/0,0,o.a.b*0.88),D.b7C,p,p,p,p,p,p,p,p)}}
C.aem.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.c,g=h.c
if(g)if(!B.a.q(h.e.toLowerCase(),"%")){w=h.w
w=w!=null&&h.d<w
v=w}else v=!0
else v=!1
u=g&&B.a.a0(h.e.toLowerCase(),"draw")
w=!g
if(w)t="LOST"
else if(u)t="DRAW"
else{s=v?"PARTIAL":"WON"
t=s}if(w)r=B.c0
else if(u)r=B.dk
else{w=v?B.aS:B.bx
r=w}q=h.gbjG()
w=new C.e4V()
s=A.m(14)
p=A.a([r.j(0.13),D.brR],x.O)
o=A.L(r.j(0.4),B.r,1)
n=A.X(g?B.n2:B.cz,r,i,i,i,16)
m=A.E(A.d(h.b,i,1,B.a2,i,i,i,B.tI,i,i,i),1)
l=r.j(0.2)
k=A.m(99)
k=A.q(i,A.d(t,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,B.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),B.f,i,i,new A.p(l,i,i,k,i,i,B.n),i,i,i,i,D.bGT,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bCv(q)}else{l=g?"+":"-"
l+=C.bCv(h.d)}j=x.p
l=A.A(A.a([n,B.bm,m,k,B.bm,A.d(l,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.l,i,B.e,B.i,0,i,i)
k=C.e4U("STAKE",w.$1(h.w),B.c)
w=A.A(A.a([k,B.de,C.e4U("PAID",C.bCv(g?h.d:0),r),B.de,C.e4U("BEFORE",w.$1(h.x),B.eL),B.de,C.e4U("AFTER",w.$1(h.y),B.dk)],j),B.l,i,B.e,B.i,0,i,i)
n=C.ilg(h.f)
h=B.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return A.q(i,A.x(A.a([l,B.an,w,B.ax,A.d(n+h,i,1,B.a2,i,i,i,A.l(i,i,B.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.al,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(i,i,o,s,i,new A.a9(B.aA,B.aE,B.x,p,i,i),B.n),i,i,i,i,B.k3,i,i,i)}}
C.aC5.prototype={
S(){return new C.bhs(B.cN,null,null)}}
C.bhs.prototype={
Y(){var w,v,u,t=this
t.a4()
w=A.bl(null,B.ma,null,1,null,t)
w.cO(0)
t.d=w
v=J.e2(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.aeL(40+w.ai()*260,-20+w.ai()*40,1.5+w.ai()*3,w.ai()*3.141592653589793,0.7+w.ai()*0.3,12+w.ai()*16,[Z.a75,B.tg,B.cY,B.c][w.aw(4)],[B.ie,B.kv,B.ee,B.Hf][w.aw(4)])
t.f=v},
t(){var w=this.d
w===$&&A.c()
w.t()
this.byc()},
B(d){var w=null,v=this.d
v===$&&A.c()
return A.at(A.aI(!1,B.a3,!0,w,A.c8(v,new C.dlS(this,d),w),B.f,B.L,0,w,w,w,w,w,B.aj),w,w,w)}}
C.aeL.prototype={
gZ(d){return this.f}}
C.aMn.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.b22.prototype={
B(d){return new A.wj(new C.cgS(this),null,new A.h6(A.a([$.zj(),$.a3Y()],x.U)),null)},
ge3(){return this.c}}
C.NS.prototype={
cgi(){if(this.c!=null)this.m(new C.c4x())}}
C.Jw.prototype={}
C.aqv.prototype={
S(){return new C.aEU(B.cN,new A.au(B.aw,$.aw()))},
cLo(){return this.d.$0()},
cXl(){return this.f.$0()},
cX9(d,e){return this.r.$2(d,e)},
cXX(d,e,f){return this.w.$3$bonus(d,e,f)},
ge3(){return this.c}}
C.aEU.prototype={
t(){var w=this.e
w.T$=$.aw()
w.P$=0
this.a3()},
auR(){var w=A.d2(B.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
Bk(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Bk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.auR()
if(s<2){t.aza("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cLo()<s){t.aza("Insufficient balance.")
w=1
break}if(!t.a.cX9(s,"Dice Roll bet")){t.aza("Could not place bet.")
w=1
break}t.a.toString
t.m(new C.dYo(t))}w=3
return A.b(C.cdk(t.a.e),$async$Bk)
case 3:r=t.a
q=C.inp(r.e,r.c,t.d)
t.a.cXl()
A.b0D(t.a.e)
t.m(new C.dYp(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return A.b(A.bP(new A.bd(1000*(40+p*6)),null,r),$async$Bk)
case 7:if(t.c==null){w=1
break}new C.dYq(t).$0()
t.c.eo()
case 5:++p
w=4
break
case 6:w=8
return A.b(A.bP(B.k0,null,r),$async$Bk)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.hfB(q)
t.m(new C.dYr(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cXX(m,"Dice Roll "+n,o)
t.m(new C.dYs(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+B.j.ad(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.j.ad(m,2)+" added to your balance"
w=12
return A.b(C.bG4(r,C.bFM(),new C.dYt(t),n,k,"YOU WIN!",!0),$async$Bk)
case 12:w=13
return A.b(C.aib("Dice Roll",l?"+$"+B.j.ad(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.j.ad(m,2)+" added to your balance"),$async$Bk)
case 13:w=10
break
case 11:w=14
return A.b(C.bG4(r,C.bFM(),new C.dYu(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$Bk)
case 14:C.va(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return A.h(u,v)}})
return A.i($async$Bk,v)},
aza(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.auR(),d=x.w,a0=A.aH(a2,B.eo,d).w,a1=Math.min(A.aH(a2,B.c1,d).w.a.a*0.44,200)
d=A.ho(P.ard,D.fX2,new C.dYx(a2),f)
w=A.m(20)
v=g.a
u=v.c
t=x.p
w=A.A(A.a([d,B.b5,A.q(f,A.A(A.a([B.ar8,B.bm,C.arY(v.d,B.ja,u)],t),B.l,f,B.e,B.Q,0,f,f),B.f,f,f,new A.p(B.cY,f,f,w,f,f,B.n),f,f,f,f,B.lK,f,f,f)],t),B.l,f,B.e,B.i,0,f,f)
u=g.z
v=A.a_(140,D.ZS.l()>>>16&255,D.ZS.l()>>>8&255,D.ZS.l()&255)
d=A.m(18)
s=A.L(A.a_(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
r=g.x
d=A.E(A.q(f,A.at(new C.aoS(r,r?g.w:g.r,a1,f),f,f,f),B.f,f,f,new A.p(v,f,s,d,f,f,B.n),f,f,f,f,f,f,f,1/0),1)
v=A.d("Roll lands on one of:",f,f,f,f,f,f,A.l(f,f,B.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,B.a8,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=A.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.Sy[q]
o=C.hfB(p)
n=p>0?B.be:B.ay
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new A.aN(10,10)
i=m?B.c:n.j(0.7)
h=new A.ay(i,m?2.5:1.2,B.r,-1)
n=m?A.a([new A.ac(1,B.G,n.j(0.65),B.H,14)],r):B.Sk
m=m?18:15
s.push(new A.bz(1,B.bc,new A.D(B.jo,A.q(B.A,A.d(o,f,f,f,f,f,f,new A.G(!0,B.c,f,f,f,f,m,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f),B.f,f,f,new A.p(k,f,new A.bG(h,h,h,h),new A.be(j,j,j,j),n,f,B.n),f,l,f,f,f,f,f,f),f),f))}d=A.a([d,B.af,v,B.an,A.A(s,B.l,f,B.e,B.i,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.hfB(v)
s=g.r
s.toString
d.push(new A.D(B.jE,A.d("Landed on "+v,f,f,f,f,f,f,A.l(f,f,s>0?B.b4:B.c0,f,f,f,f,f,f,f,f,20,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(B.X)
d.push(new A.bM(B.a6,f,f,A.d("Bet Amount",f,f,f,f,f,f,A.l(f,f,A.a_(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,B.I,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(B.an)
v=x.bL
v=A.C(new A.N(A.a([2,5,10,25],x.n),new C.dYy(g),v),v.k("ak.E"))
s=g.y
r=A.a_(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v.push(A.E(new A.D(B.a0J,A.aM(f,B.Z,!1,f,!0,B.t,f,A.aO(),g.e,f,f,f,f,f,2,A.bt(f,new A.b6(4,A.m(10),B.a1),f,B.k2,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,B.lV,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,!s,!1,f,B.ak,f,f,f,f,f,B.e0,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,B.ac,f,f,f,f,f,f,f,f,f,f,f,B.h_,!0,B.K,f,B.ao,f,f,f,f),f),1))
d.push(A.A(v,B.l,f,B.e,B.i,0,f,f))
d.push(B.U)
d.push(new A.bM(B.aa,f,f,A.d("Perfect Score Profit: +$"+B.j.ad(g.auR()*0.46,2),f,f,f,f,f,f,X.aVr,f,f,f),f))
d.push(B.X)
d=A.E(new A.D(B.hX,A.x(d,B.al,f,B.e,B.i,0,B.p),f),1)
v=g.x?f:g.gcv5()
s=A.ft(f,f,B.aF,f,f,f,f,f,f,B.c,f,f,f,f,new A.b9(A.m(14),B.a1),f,f,f,f,f)
return C.aRo(f,D.a_6,A.bn(!0,A.x(A.a([new A.D(D.bHn,w,f),new C.Og(u,e*1.46,e,f),A.E(A.x(A.a([d,new A.D(new A.R(14,4,14,8+a0.r.d),new A.a5(1/0,52,A.io(A.d("\ud83c\udfb2 ROLL ($"+B.j.ad(e,2)+")",f,f,f,f,f,f,B.lw,f,f,f),v,s),f),f)],t),B.l,f,B.e,B.i,0,B.p),1)],t),B.l,f,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0))}}
C.ard.prototype={
S(){return new C.aF9(B.l_,new A.au(B.aw,$.aw()))},
cX1(d){return this.e.$1(d)}}
C.aF9.prototype={
gatF(){var w,v=this.r
if(v===$){w=B.o.u(1e4+B.cN.aw(89999))
this.r!==$&&A.bD()
this.r=w
v=w}return v},
gR2(){var w=this.d,v=this.a
return w===B.l_?B.a.i(v.f.a):B.a.i(v.f.b)},
gaa8(){var w=this.gR2(),v=A.ag("^\\$+",!0,!1,!1,!1),u=B.a.i(A.aL(w,v,""))
return u.length===0?"":"$"+u},
t(){var w=this.e
w.T$=$.aw()
w.P$=0
this.a3()},
Ju(d,e){return this.bMi(d,e)},
bMi(d,e){var w=0,v=A.j(x.H),u=this,t
var $async$Ju=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.fF(new A.fw(d)),$async$Ju)
case 2:A.eY()
t=u.c
if(t!=null)t.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$Ju,v)},
QY(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QY=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gR2().length===0){r.c.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break}A.jX()
o=B.j.ad(r.a.d,2)
q=r.d===B.l_?A.cD("https://cash.app/"+r.gaa8()+"/"+o,0,null):A.cD("bitcoin:"+r.gR2(),0,null)
t=4
w=7
return A.b(A.iY(q,B.ft,null),$async$QY)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===B.l_?r.gaa8():r.gR2()
w=10
return A.b(r.Ju(n,r.d===B.l_?"Cash App tag":"Bitcoin address"),$async$QY)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===B.l_?r.gaa8():r.gR2()
w=11
return A.b(r.Ju(n,r.d===B.l_?"Cash App tag":"Bitcoin address"),$async$QY)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$QY,v)},
a1j(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hW().bks(B.eO),$async$a1j)
case 3:r=e
if(r==null){w=1
break}w=4
return A.b(r.fp(),$async$a1j)
case 4:s=e
t.m(new C.e56(t,B.a.c8(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return A.h(u,v)}})
return A.i($async$a1j,v)},
ccy(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===B.l_?C.hDh(s.a):B.a.i(s.a)
if(r.length===0){t=v.d===B.l_?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.L(x.q).f.U(A.b3(u,u,u,u,u,B.t,u,A.d(t,u,u,u,u,u,u,u,u,u,u),u,B.a_,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.L(x.q).f.U(A.b3(u,u,u,u,u,B.t,u,A.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,B.a_,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new A.V(Date.now(),0,!1).u(0)
w=v.a
t.cX1(new A.d7(s,w.c.a,w.d,B.fP,v.d,r,v.f,v.gatF(),B.dE,new A.V(Date.now(),0,!1)))
w=v.c
w.toString
A.j0(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.eH(o,o,o,!0,!0,B.BE,o,1,!0,o,0,!1,o,!1,B.c,o,A.aG(o,o,o,o,B.HZ,o,o,o,new C.e57(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.fFH,o,o,o,1,o,!0),m=A.m(26),l=A.L(D.eW.j(0.25),B.r,1),k=x.V,j=A.a([new A.ac(0,B.G,B.b2.j(0.25),B.f_,24)],k),i=x.p
j=A.q(o,A.x(A.a([A.d("YOU'RE ADDING",o,o,o,o,o,o,A.l(o,o,B.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,B.I,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),B.an,A.ev(B.A,A.d("$"+A.dF(p.a.d),o,o,o,o,o,o,D.fnU,o,o,o),B.f,B.dB),B.an,A.d("to your Growth Income wallet",o,o,o,o,o,o,A.l(o,o,D.eW.j(0.85),o,o,o,o,o,o,o,o,12,o,o,B.V,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.l,o,B.e,B.i,0,B.p),B.f,o,o,new A.p(o,o,l,m,j,D.c9D,B.n),o,o,o,o,D.bET,o,o,o)
m=p.c7d()
l=p.aCT(1,"Send the money to NGMY Pay",p.ccw())
w=p.aCT(2,"Put this code in the payment note",p.bKU())
v=p.d===B.l_
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=A.l(o,o,B.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,B.V,o,o,!0,o,o,o,o,o,o,o,o)
t=p.aCT(3,u,A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.e,o,o,o,o,o,2,A.bt(o,o,o,o,o,o,o,o,!0,new A.b6(4,A.m(18),new A.ay(B.c.j(0.08),1,B.r,-1)),o,o,o,o,o,B.uj,!0,o,o,o,o,new A.b6(4,A.m(18),D.b4H),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.fps,t,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,B.tJ,!0,B.a5,o,B.ao,o,o,o,o))
r=p.f!=null
v=r?8:22
u=A.m(20)
s=r?D.eW:B.c
s=A.L(s.j(r?0.5:0.12),B.r,1.4)
q=r?A.x(A.a([A.by(A.m(14),new A.cQ(D.b66,new A.Fn(p.f,o),o),B.aq),B.U,D.f8r,B.ax],i),B.l,o,B.e,B.i,0,B.p):A.x(A.a([A.q(o,D.c1K,B.f,o,o,new A.p(D.eW.j(0.12),o,o,o,o,o,B.a7),o,54,o,o,o,o,o,54),B.X,D.fLa,B.cU,A.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.l,o,B.e,B.i,0,B.p)
v=p.b9u(4,"Screenshot of your payment",A.aA(o,A.q(o,q,B.f,o,o,new A.p(B.uj,o,s,u,o,o,B.n),o,o,o,o,new A.R(v,v,v,v),o,o,o),B.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcof(),o,o,o,o,o,o,!1,B.a4),!0)
u=A.d(p.a.r,o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a8,o,1.4,!0,o,o,o,o,o,o,o,o),B.K,o,o)
s=A.m(18)
k=A.a([new A.ac(0,B.G,B.b2.j(0.45),B.dv,18)],k)
return A.c4(n,B.BE,A.at(new A.cQ(B.aef,A.cl(A.a([j,B.bz,m,B.bz,l,w,t,v,B.an,u,B.aQ,new A.a5(o,56,A.c2(A.lS(D.c0o,D.fWc,p.gccx(),A.ft(o,o,B.L,o,o,o,o,o,o,B.c,o,o,o,B.L,new A.b9(A.m(18),B.a1),o,o,o,o,o)),new A.p(o,o,o,s,k,D.c8e,B.n),B.bj),o)],i),o,o,D.bEn,o,o,B.ah,!1),o),o,o,o),o,!1,!1,o,o)},
c7d(){var w=null,v=new C.e52(this),u=A.m(18),t=A.L(B.c.j(0.06),B.r,1)
return A.q(w,A.A(A.a([v.$3(B.l_,B.hZ,"Cash App"),B.e4,v.$3(B.a8F,D.aqO,"Bitcoin")],x.p),B.l,w,B.e,B.i,0,w,w),B.f,w,w,new A.p(B.uj,w,t,u,w,w,B.n),w,w,w,w,B.me,w,w,w)},
b9u(d,e,f,g){var w,v=null,u=x.p,t=A.a([A.q(B.A,A.d(""+d,v,v,v,v,v,v,D.fuU,v,v,v),B.f,v,v,D.b6Q,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(A.E(A.q(v,v,B.f,D.eW.j(0.18),v,v,v,v,v,B.wg,v,v,v,2),1))
t=A.x(t,B.l,v,B.e,B.i,0,B.p)
w=g?12:20
return new A.EK(A.A(A.a([new A.a5(34,v,t,v),B.au,A.E(new A.D(new A.R(0,0,0,w),A.x(A.a([new A.D(B.a00,A.d(e,v,v,v,v,v,v,Aa.KF,v,v,v),v),f],u),B.al,v,B.e,B.i,0,B.p),v),1)],u),B.al,v,B.e,B.i,0,v,v),v)},
aCT(d,e,f){return this.b9u(d,e,f,!1)},
ccw(){var w,v,u,t,s=this,r=null,q=s.d===B.l_?s.gaa8():s.gR2(),p=A.m(20),o=A.m(20),n=s.d===B.l_,m=n?D.c7a:D.c8Z,l=A.a([new A.ac(0,B.G,(n?D.aj9:D.YH).j(0.35),B.cA,16)],x.V),k=A.m(12)
n=s.d===B.l_
w=n?B.hZ:D.aqO
k=A.q(r,A.X(w,n?D.aj9:D.YH,r,r,r,30),B.f,r,r,new A.p(B.c,r,r,k,r,r,B.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=A.d(n,r,r,r,r,r,r,A.l(r,r,B.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===B.l_
t=u?22:13
v=A.d(v,r,1,B.a2,r,r,r,A.l(r,r,B.c,r,r,r,r,r,r,r,r,t,r,r,B.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=A.E(A.x(A.a([n,B.bH,v,B.ax,A.A(A.a([D.bY4,B.de,A.d(s.d===B.l_?"Tap to pay $"+A.dF(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,B.ra,r,r,r)],u),B.l,r,B.e,B.i,0,r,r)],u),B.E,r,B.e,B.i,0,B.p),1)
return A.aI(!1,B.a3,!0,r,A.aP(!1,p,!0,A.eJ(A.A(A.a([k,B.bd,v,A.aG(r,r,r,r,D.bX4,r,r,r,w?r:new C.e55(s,q),r,r,r,r,"Copy",r)],u),B.l,r,B.e,B.i,0,r,r),r,new A.p(r,r,r,o,l,m,B.n),r,B.alW,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gcjs(),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
bKU(){var w,v,u,t,s,r,q,p,o=null,n=A.m(20),m=A.L(B.b9.j(0.35),B.r,1),l=x.p,k=A.a([],l)
for(w=this.gatF().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new A.aN(12,12)
q=A.a([B.b9.j(0.28),B.b9.j(0.08)],u)
p=new A.ay(B.eL.j(0.4),1,B.r,-1)
k.push(A.q(B.A,A.d(s,o,o,o,o,o,o,B.pW,o,o,o),B.f,o,o,new A.p(o,o,new A.bG(p,p,p,p),new A.be(r,r,r,r),o,new A.a9(B.b7,B.b8,B.x,q,o,o),B.n),o,52,o,B.jo,o,o,o,42))}return A.q(o,A.x(A.a([A.A(k,B.l,o,B.bb,B.i,0,o,o),B.af,A.A(A.a([A.E(A.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,A.l(o,o,B.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.ae,A.ho(B.a3C,D.fYd,new C.e51(this),A.fu(o,o,o,o,o,o,o,o,o,o,o,B.eL,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),B.l,o,B.e,B.i,0,o,o)],l),B.l,o,B.e,B.i,0,B.p),B.f,o,o,new A.p(B.uj,o,m,n,o,o,B.n),o,o,o,o,B.bF,o,o,o)}}
C.rO.prototype={
aj(){var w=this
return A.I(["id",w.a,"title",w.b,"start",w.c.ag(),"end",w.d.ag(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.rP.prototype={
aj(){var w=this
return A.I(["id",w.a,"when",w.b.ag(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gWj(){var w=this,v=A.a([],x.s),u=w.d
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
u=w.c
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
v.push(C.hnN(w.b))
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
w=J.b7(v.c,new C.cfS(),x.P)
w=A.C(w,w.$ti.k("ak.E"))
u.n(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"thumbnailPath",w)
u.n(0,"printable",v.e)
u.n(0,"sortOrder",v.f)
return u}}
C.id.prototype={
amg(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.id(v,u,t,s,r,h==null?w.f:h)},
bf5(d){var w=null
return this.amg(w,w,w,w,d,w)},
cPf(d,e,f){return this.amg(d,e,null,null,null,f)},
bf4(d){var w=null
return this.amg(w,w,w,d,w,w)},
cOU(d,e){var w=null
return this.amg(w,w,d,w,e,w)},
aj(){var w=this,v=C.i8w(w.c),u=w.e,t=A.U(u).k("N<1,a8<n,@>>")
u=A.C(new A.N(u,new C.cfQ(),t),t.k("ak.E"))
return A.I(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.baW.prototype={}
C.Wv.prototype={
S(){return new C.aFl(new A.au(B.aw,$.aw()),A.mY(0,null,null),A.a([],x.m))},
US(d){return this.d.$1(d)}}
C.aFl.prototype={
Y(){var w,v=this
v.a4()
w=J.b7(v.a.c,new C.e9b(),x.i)
w=A.C(w,w.$ti.k("ak.E"))
B.d.aZ(w,new C.e9c())
v.d=w
v.JE()},
t(){var w=this.w
w.T$=$.aw()
w.P$=0
this.x.t()
this.a3()},
afm(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$afm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.JE()
u.m(new C.e95(u))
t=u.a
t.toString
s=u.d
s===$&&A.c()
w=2
return A.b(t.US(s),$async$afm)
case 2:r=e
if(u.c!=null){u.m(new C.e96(u))
t=u.c.L(x.q).f
s=A.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.U(A.b3(null,null,null,r?B.cX:B.ay,null,B.t,null,s,null,B.a_,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$afm,v)},
a9m(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a9m=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&A.c()
s=new C.id(q,"New Category",B.Hy,4284773515,D.aBE,p.length)
t.m(new C.e8P(t,s))
t.JE()
p=t.c
if(p==null){w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.e8Q(s),p,null,!0,!0,x.i),$async$a9m)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.e8R(t,q,r))
case 1:return A.h(u,v)}})
return A.i($async$a9m,v)},
a2g(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a2g=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=B.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.m(new C.e92(t,p))
q.bP(0,B.ce)
q=t.a.e
s=t.d
s===$&&A.c()
w=3
return A.b(C.cfN(p,q,s),$async$a2g)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.e93(t,r))
$.aW.x1$.push(new C.e94(t))
case 1:return A.h(u,v)}})
return A.i($async$a2g,v)},
abn(d){return this.bR6(d)},
bR6(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$abn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&A.c()
t=r[d]
r=u.c
r.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.e8X(t),r,null,!0,!0,x.i),$async$abn)
case 2:s=f
if(s!=null)u.m(new C.e8Y(u,d,s))
return A.h(null,v)}})
return A.i($async$abn,v)},
bOL(d){this.m(new C.e8W(this,d))
this.JE()},
JE(){var w,v,u=this.d
u===$&&A.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].bf5(v)},
cgO(d,e){var w={}
w.a=e
this.m(new C.e91(w,this,d))},
Zz(d){return this.c68(d)},
c68(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Zz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=A.ec(new C.e90(u,d),!1,null,x.H)
w=2
return A.b(A.a6(s,!1).cd(t),$async$Zz)
case 2:return A.h(null,v)}})
return A.i($async$Zz,v)},
bH4(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?A.a([B.fU,B.bq],l):A.a([B.nm,B.eF],l)
w=A.m(16)
v=A.L(m?B.d5.j(0.35):B.dk,B.r,1)
u=A.X(B.ee,m?B.dk:B.dJ,n,n,n,n)
t=A.E(A.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.T,n,n,n,n,n,n,n,n,n,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.a1V:Ac.OP
r=x.p
s=A.a([A.aP(!1,n,!0,A.A(A.a([u,B.ae,t,A.X(s,m?B.bK:B.am,n,n,n,n)],r),B.l,n,B.e,B.i,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.e8T(o),n,n,n,n,n,n,n)],r)
if(o.r){u=A.a([B.X],r)
t=o.y
if(t.length!==0){q=(m?D.u2:B.c).j(0.65)
p=A.m(12)
u.push(A.q(n,A.kq(!0,n,o.x,new C.e8U(o,d),t.length,n,n,n,n,!1,!1),B.f,n,B.aea,new A.p(q,n,n,p,n,n,B.n),n,n,n,n,B.cl,n,n,n))}u.push(B.U)
t=o.w
q=A.l(n,n,m?B.aP:B.T,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=A.l(n,n,m?B.bK:B.am,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?B.bq:B.aP
q=A.E(A.aM(n,B.Z,!1,n,!0,B.t,n,A.aO(),t,n,n,n,n,n,2,A.bt(n,new A.b6(4,A.m(14),B.a1),n,B.eY,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.e8V(o),n,!1,n,n,!1,n,!0,n,B.ac,n,n,n,n,n,n,n,n,n,n,n,q,!0,B.a5,n,B.ao,n,n,n,n),1)
m=o.f?n:o.gcvl()
p=A.bp(B.bl,n,n,n,n,n,B.jn,n,n,n,n,n)
u.push(A.A(A.a([q,new A.JL(t,B.bl,n),B.de,A.bI(o.f?B.r7:D.ar_,n,m,p)],r),B.dL,n,B.e,B.i,0,n,n))
B.d.v(s,u)}return A.cT(n,A.x(s,B.al,n,B.e,B.i,0,B.p),n,n,B.b1,new A.p(n,n,v,w,n,new A.a9(B.a6,B.aa,B.x,l,n,n),B.n),B.iJ,n,n,n,B.GM,B.bF,n,n,n)},
B(d){var w,v=this,u=null,t=A.S(d).ax.a===B.J,s=new C.baW(t),r=t?B.dh:B.bO,q=t?B.dh:u,p=t?B.aP:B.T,o=A.d("Help Topics Admin",u,u,u,u,u,u,A.l(u,u,t?B.aP:B.T,u,u,u,u,u,u,u,u,u,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gccC()
if(n)n=B.V1
else n=A.X(B.zb,t?B.aP:B.T,u,u,u,u)
w=x.p
o=A.eH(A.a([A.ho(n,A.d("Save",u,u,u,u,u,u,A.l(u,u,t?B.aP:B.T,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=R.aWB(B.aN,u,N.XK,B.oG,D.fUr,v.gbDl())
q=v.bH4(s)
n=A.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,A.l(u,u,t?B.bK:B.am,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&A.c()
return A.c4(o,r,A.x(A.a([q,new A.D(B.GM,n,u),A.E(H.hsd(!1,new C.e9a(v,s),m.length,v.gcgN(),D.bD9,u,!1),1)],w),B.al,u,B.e,B.i,0,B.p),u,!1,!1,p,u)}}
C.Qo.prototype={
S(){return new C.bcR()}}
C.bcR.prototype={
Y(){var w,v=this
v.a4()
w=v.a.c
v.d=new A.au(new A.ba(w.b,B.b6,B.aR),$.aw())
v.e=w.c
v.f=w.d},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a3()},
B(d){var w,v,u,t=this,s=null,r=A.S(d).ax.a===B.J,q=r?D.u2:B.c,p=A.d("Edit category",s,s,s,s,s,s,A.l(s,s,r?B.c:B.bo,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,B.Z,!1,s,!0,B.t,s,A.aO(),o,s,s,s,s,s,2,D.c3w,B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.ac,s,s,s,s,s,s,s,s,s,s,s,A.l(s,s,r?B.c:B.bo,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,B.a5,s,B.ao,s,s,s,s)
w=x.aS
w=A.C(new A.N(D.ca6,new C.cV2(t),w),w.k("ak.E"))
w=A.bU(B.bG,w,B.bs,s,8,8)
v=x.gN
v=A.C(new A.N(D.d92,new C.cV3(t),v),v.k("ak.E"))
u=x.p
v=A.cc(A.x(A.a([o,B.af,w,B.af,A.bU(B.bG,v,B.bs,s,0,8)],u),B.l,s,B.e,B.Q,0,B.p),B.t,s,B.y,s,s,s,s,B.ah)
return A.eg(A.a([A.bN(!1,B.dn,s,s,!0,s,s,s,new C.cV4(d),s,s),A.bI(B.rb,s,new C.cV5(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.a13.prototype={
S(){return new C.aHi()},
pa(d){return this.d.$1(d)}}
C.aHi.prototype={
Y(){this.a4()
this.d=A.bq(this.a.c.e,!0,x.u)},
azc(){var w=this.a,v=w.c,u=this.d
u===$&&A.c()
return w.pa(v.bf4(u))},
a9o(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a9o=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&A.c()
w=2
return A.b(u.b3c(new C.is("q_"+1000*s,"",D.d7z,null,!1,r.length)),$async$a9o)
case 2:t=e
if(t!=null){u.m(new C.f0o(u,t))
u.azc()}return A.h(null,v)}})
return A.i($async$a9o,v)},
b3c(d){var w,v=this.c
v.toString
w=A.ec(new C.f0p(d),!1,null,x.u)
return A.a6(v,!1).cd(w)},
B(d){var w=this,v=null,u=A.S(d).ax.a===B.J,t=u?B.dh:B.bO,s=u?B.dh:v,r=u?B.aP:B.T,q=w.a.c
s=A.eH(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,A.d(q.b+" \u2014 Questions",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.T,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=R.aWB(B.aN,v,N.XK,B.oG,D.h_k,w.gbDN())
q=w.d
q===$&&A.c()
q=q.length
if(q===0){q=A.at(A.d("No questions yet. Tap + Question.",v,v,v,v,v,v,A.l(v,v,u?B.bK:B.am,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=A.hO(v,new C.f0u(w,new C.baW(u)),q,D.bDj,v,B.ah,new C.f0v(),!1)
return A.c4(s,t,u,v,!1,!1,r,v)}}
C.a12.prototype={
S(){return new C.aHh()}}
C.aHh.prototype={
Y(){var w,v=this
v.a4()
w=v.a.c
v.d=new A.au(new A.ba(w.b,B.b6,B.aR),$.aw())
w=A.bq(w.c,!0,x.bP)
v.e=w
if(B.d.gau(w))J.c7(v.e,D.a7O)
w=v.a.c
v.f=w.d
v.r=w.e},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a3()},
afl(){var w=0,v=A.j(x.H),u=this,t
var $async$afl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A0.Ht(78,1920),$async$afl)
case 2:t=e
if(t!=null)u.m(new C.f0k(u,t))
return A.h(null,v)}})
return A.i($async$afl,v)},
agu(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$agu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=A.ec(new C.f0i(u),!1,null,x.dZ)
w=2
return A.b(A.a6(r,!1).cd(t),$async$agu)
case 2:s=e
if(s!=null)u.m(new C.f0j(u,s))
return A.h(null,v)}})
return A.i($async$agu,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.S(a1).ax.a===B.J,g=h?B.dh:B.bO,f=h?B.dh:i,e=h?B.aP:B.T,d=A.d("Edit Question",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.T,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=A.eH(A.a([A.dh(T.a3L,B.rb,new C.f0m(j,a1),A.bp(B.aN,i,i,i,B.c,i,i,i,i,i,i,i)),B.au],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=A.d("Question thumbnail",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.T,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=A.m(14)
w=j.f
v=h?B.bK:B.am
w=A.aA(i,A.by(e,K.aRr(A.m(14),B.c_,140,B.Cx,v,w,1/0),B.aq),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gccB(),i,i,i,i,i,i,!1,B.a4)
e=A.d("Question users will tap",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.T,i,i,i,i,i,i,i,i,13,i,i,B.I,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?B.bq:B.aP
u=A.m(16)
t=A.L(h?B.aM:B.aO,B.r,1)
s=j.d
s===$&&A.c()
r=A.l(i,i,h?B.aP:B.T,i,i,i,i,i,i,i,i,15,i,i,B.a8,i,i,!0,i,i,i,i,i,i,i,i)
v=A.q(i,A.A(A.a([A.E(A.aM(i,B.Z,!1,i,!0,B.t,i,A.aO(),s,i,i,i,i,i,2,A.bt(i,B.eK,i,B.bh,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.l(i,i,h?B.bK:B.am,i,i,i,i,i,i,i,i,i,i,i,B.cD,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),B.y,!0,i,!0,i,!1,i,B.ak,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,B.ac,i,i,i,i,i,i,i,i,i,i,i,r,!0,B.a5,i,B.ao,i,i,i,i),1),new A.JL(j.d,i,i)],a0),B.l,i,B.e,B.i,0,i,i),B.f,i,i,new A.p(v,i,t,u,i,i,B.n),i,i,i,i,B.eA,i,i,i)
u=A.d("Printable document",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.T,i,i,i,i,i,i,i,i,i,i,i,B.a8,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=A.iQ(B.aN,i,i,B.ag,i,new C.f0n(j),i,A.d("Shows a printable badge on this answer",i,i,i,i,i,i,A.l(i,i,h?B.bK:B.am,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=A.d("Stored answer (not AI)",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.T,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=A.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,A.l(i,i,h?B.bK:B.am,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.u2:B.c
q=A.m(16)
p=A.m(16)
o=A.m(16)
n=A.L(B.bl.j(0.45),B.r,1)
m=A.q(i,D.bVM,B.f,i,i,new A.p(B.bl.j(0.12),i,i,A.m(12),i,i,B.n),i,i,i,i,B.bh,i,i,i)
l=A.d("Open Document Editor",i,i,i,i,i,i,A.l(i,i,h?B.aP:B.T,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&A.c()
k=J.ad(k)
l=A.E(A.x(A.a([l,B.ax,A.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,A.l(i,i,h?B.bK:B.am,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),B.E,i,B.e,B.i,0,B.p),1)
return A.c4(d,g,A.cl(A.a([f,B.U,w,B.d8,e,B.U,v,B.aQ,u,B.U,t,B.ax,s,B.af,A.aI(!1,B.a3,!0,q,A.aP(!1,p,!0,A.q(i,A.A(A.a([m,B.ex,l,A.X(B.za,h?B.bK:B.am,i,i,i,16)],a0),B.l,i,B.e,B.i,0,i,i),B.f,i,i,new A.p(i,i,n,o,i,i,B.n),i,i,i,i,B.fs,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gcip(),i,i,i,i,i,i,i),B.f,r,0,i,i,i,i,i,B.aj)],a0),i,i,B.bQ,i,i,B.ah,!1),i,!1,!1,i,i)}}
C.dbK.prototype={}
C.Ww.prototype={
S(){return new C.aFn(A.k9(!0,null,!0,!0,null,null,!1))}}
C.aFn.prototype={
Y(){var w,v,u,t,s,r,q=this
q.a4()
w=J.dI(q.a.c,new C.e9M())
w=A.C(w,w.$ti.k("M.E"))
q.e=w
v=A.a([],x.s)
for(w=J.aU(q.a.c);w.C();){u=w.gR(w)
switch(u.a){case"heading":v.push("## "+u.b)
break
case"text":u=u.b
if(B.a.i(u).length!==0)v.push(u)
break
case"bullets":for(u=u.b.split("\n"),t=u.length,s=0;s<t;++s){r=B.a.i(u[s])
if(r.length!==0)v.push("\u2022 "+r)}break
default:break}}w=B.d.aO(v,"\n\n")
q.d=new A.au(new A.ba(w,B.b6,B.aR),$.aw())},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.f.t()
this.a3()},
azd(d,e){var w,v,u,t,s,r=this.d
r===$&&A.c()
r=r.a
w=r.b
if(!w.geC())return
v=r.a
r=w.a
u=w.b
t=d+B.a.aC(v,r,u)+e
s=B.a.oa(v,r,u,t)
this.d.bP(0,new A.ba(s,A.hg(B.bB,r+t.length),B.aR))},
b1h(d){var w,v,u,t,s=this.d
s===$&&A.c()
s=s.a
w=s.a
v=B.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=B.a.oa(w,v,v,u)
this.d.bP(0,new A.ba(t,A.hg(B.bB,v+u.length),B.aR))},
ad5(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ad5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A0.Ht(78,1920),$async$ad5)
case 3:s=e
if(s==null){w=1
break}t.m(new C.e9s(t,s))
case 1:return A.h(u,v)}})
return A.i($async$ad5,v)},
Z3(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Z3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hW().a6L(B.eO),$async$Z3)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return A.b(s.fp(),$async$Z3)
case 4:t.m(new r.e9x(t,e))
case 1:return A.h(u,v)}})
return A.i($async$Z3,v)},
ad6(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$ad6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=$.aw()
s=new A.au(B.aw,t)
r=new A.au(new A.ba("https://",B.b6,B.aR),t)
q=u.c
q.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.e9v(s,r),q,null,!0,!0,x.y),$async$ad6)
case 2:if(e===!0)u.m(new C.e9w(u,s,r))
s.T$=t
s.P$=0
r.T$=t
r.P$=0
return A.h(null,v)}})
return A.i($async$ad6,v)},
bI1(){var w,v,u,t,s,r=null,q=A.a([],x.a),p=this.d
p===$&&A.c()
p=B.a.fw(p.a.a,A.ag("\\n\\s*\\n",!0,!1,!1,!1))
w=new A.N(p,new C.e9o(),A.U(p).k("N<1,n>")).bY(0,new C.e9p())
for(p=J.aU(w.a),v=new A.eF(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gR(p)
if(B.a.a0(s,"## "))q.push(new C.lY("heading",B.a.i(B.a.b2(s,3)),r,r))
else if(B.a.a0(s,"\u2022 ")||B.a.a0(s,"- "))q.push(new C.lY("bullets",new A.N(A.a(s.split("\n"),u),new C.e9q(),t).bY(0,new C.e9r()).aO(0,"\n"),r,r))
else q.push(new C.lY("text",s,r,r))}p=this.e
p===$&&A.c()
B.d.v(q,p)
if(q.length===0)q.push(D.a7O)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.S(d).ax.a===B.J,m=new C.dbK(n),l=n?B.as:B.h1,k=A.d(p.a.d,o,o,o,o,o,o,B.cC,o,o,o),j=x.p
k=A.eH(A.a([A.dh(T.a3L,B.aby,new C.e9C(p,d),A.bp(B.aN,o,o,o,B.c,o,o,o,o,o,o,o)),B.ae],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?B.cr:B.iE
v=A.bU(B.bG,A.a([p.wb(E.OQ,"Bold",new C.e9D(p),m),p.wb(E.a1X,"Italic",new C.e9E(p),m),p.wb(E.aom,"Underline",new C.e9F(p),m),p.wb(Ag.a23,"Heading",new C.e9G(p),m),p.wb(N.OR,"Bullets",new C.e9H(p),m),p.wb(E.aol,"Align",new C.e9I(),m),p.wb(B.Hg,"Link",p.gc31(),m),p.wb(B.qG,"Image",p.gc30(),m),p.wb(A_.a2f,"Video",p.gc32(),m),p.wb(M.a3p,"Signature",new C.e9J(p),m),p.wb(A_.OS,"Divider",new C.e9K(p),m)],j),B.bs,o,4,4)
w=A.q(o,A.x(A.a([v,B.an,A.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,A.l(o,o,n?B.db:B.br,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),B.al,o,B.e,B.i,0,B.p),B.f,w,o,o,o,o,o,o,E.amY,o,o,o)
v=n?B.dh:B.c
u=A.m(12)
t=A.L(n?B.e7:B.ea,B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(n?0.35:0.08),B.cL,16)],x.V)
r=p.d
r===$&&A.c()
q=A.l(o,o,n?B.jj:B.as,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=A.a([w,A.E(new A.D(B.bQ,A.q(o,A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),r,o,o,o,o,o,2,A.bt(o,B.eK,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.db:B.br,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,p.f,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,q,!0,B.a5,o,B.ao,o,o,o,o),B.f,o,o,new A.p(v,o,t,u,s,o,B.n),o,o,o,o,A7.Cl,o,o,o),o),1)],j)
n=p.e
n===$&&A.c()
if(n.length!==0){n=new A.i1(n,A.U(n).k("i1<1>"))
j.push(A.q(o,A.bU(B.bG,n.gdO(n).dM(0,new C.e9L(p,m),x.g5).dn(0),B.bs,o,0,8),B.f,o,o,o,o,o,o,o,B.O5,o,o,o))}return A.c4(k,l,A.x(j,B.l,o,B.e,B.i,0,B.p),o,!1,!1,o,o)},
wb(d,e,f,g){var w=null,v=g.a,u=v?B.dh:B.c,t=A.m(8),s=A.m(8)
return A.hb(A.aI(!1,B.a3,!0,t,A.aP(!1,s,!0,new A.D(B.cl,A.X(d,v?B.jj:B.as,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,w,w,w,B.aj),w,e,w,w)}}
C.dqb.prototype={}
C.aCZ.prototype={
a7(){return"_KbView."+this.b}}
C.ary.prototype={
S(){return new C.aFm(D.b08)},
cWc(d,e){return this.e.$2$size(d,e)}}
C.aFm.prototype={
gaC3(){var w,v
if(this.e==null)return null
for(w=J.aU(this.a.c);w.C();){v=w.gR(w)
if(v.a===this.e)return v}return null},
gcxy(){var w,v,u,t,s,r=this.gaC3()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
ccD(d){this.m(new C.e9l(this,d))},
cjB(d){this.m(new C.e9m(this,d))},
bG9(){this.m(new C.e9d(this))},
bGb(){this.m(new C.e9e(this))},
gb8U(){var w=A.bq(this.a.c,!0,x.i)
B.d.aZ(w,new C.e9n())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.S(d).ax.a===B.J,f=new C.dqb(g),e=x.O
e=g?A.a([B.T.j(0.9),B.bq.j(0.85)],e):A.a([B.eF.j(0.55),B.nv.j(0.45)],e)
w=A.m(22)
v=A.L((g?B.aM:B.fG).j(0.55),B.r,1)
switch(i.d.a){case 0:g=i.bHh(f)
break
case 1:g=i.gaC3()
g.toString
g=i.bI_(f,g)
break
case 2:u=i.gaC3()
u.toString
t=i.gcxy()
t.toString
s=A.b0(u.d)
r=A.m(16)
r=A.q(h,A.d(t.b,h,h,h,h,h,h,D.ftV,h,h,h),B.f,h,h,new A.p(B.aN,h,h,r,h,h,B.n),h,h,h,h,B.bF,h,h,1/0)
q=g?B.as:B.c
p=A.m(16)
o=A.L(g?B.aM:B.aO,B.r,1)
n=A.a([new A.ac(0,B.G,B.w.j(g?0.28:0.06),B.eu,10)],x.V)
m=g?B.fU:B.nm
l=A.m(8)
k=A.X(B.ox,g?B.dk:B.dJ,h,h,h,14)
j=x.p
j=A.x(A.a([new C.aCX(f,i.gbGa(),u.c,s,"Answer",h),A.E(A.cl(A.a([r,B.af,A.q(h,A.x(A.a([A.q(h,A.A(A.a([k,B.e4,A.d("Stored answer",h,h,h,h,h,h,A.l(h,h,g?B.dk:B.dJ,h,h,h,h,h,h,h,h,11,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),B.l,h,B.e,B.Q,0,h,h),B.f,h,h,new A.p(m,h,h,l,h,h,B.n),h,h,h,B.el,B.hc,h,h,h),new C.b1z(t.c,t.e,f,h)],j),B.E,h,B.e,B.i,0,B.p),B.f,h,h,new A.p(q,h,o,p,n,h,B.n),h,h,h,h,B.bQ,h,h,1/0)],j),h,h,B.alQ,h,h,B.ah,!1),1)],j),B.al,h,B.e,B.i,0,B.p)
g=j
break
default:g=h}return A.q(h,g,B.aq,h,h,new A.p(h,h,v,w,h,new A.a9(B.b7,B.b8,B.x,e,h,h),B.n),h,h,h,B.hX,h,h,h,h)},
aZv(d){var w,v,u,t=null,s=d.a,r=s?D.u2:B.c,q=B.aF.j(0.22)
q=A.a([new A.ac(0,B.G,q,B.H,14),new A.ac(0,B.G,B.w.j(s?0.28:0.06),B.H,8)],x.V)
w=A.L(s?B.aM:B.fG,B.r,2)
v=this.a
u=x.p
q=A.a([A.q(t,A.hU(v.cWc(v.d,72),B.aq),B.f,t,t,new A.p(r,t,w,t,q,t,B.a7),t,72,t,t,t,t,t,72)],u)
if(this.a.f)B.d.v(q,A.a([B.an,A.d("Tap to switch",t,t,t,t,t,t,A.l(t,t,B.cX,t,t,t,t,t,t,t,t,12,t,t,B.V,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return A.x(q,B.l,t,B.e,B.i,0,B.p)},
bHh(d){var w,v,u=this,t=null,s=u.a.r
s=A.at(s!=null?A.aA(t,u.aZv(d),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,B.a4):u.aZv(d),t,t,t)
w=d.a
v=A.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,A.l(t,t,w?B.aP:B.T,t,t,t,t,t,t,t,t,20,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),B.K,t,t)
return A.cl(A.a([s,B.aB,v,B.an,A.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,A.l(t,t,w?B.bK:B.am,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),B.K,t,t),B.bz,A.ip(!0,t,t,B.y,F.aTG,new C.e9g(u,d),u.gb8U().length,t,B.dW,B.ah,!0)],x.p),t,t,D.bDk,t,t,B.ah,!1)},
bI_(d,e){var w,v,u,t,s=null,r=A.bq(e.e,!0,x.u)
B.d.aZ(r,new C.e9i())
w=A.b0(e.d)
v=d.a
u=A.d("Tap a question to read the stored answer.",s,s,s,s,s,s,A.l(s,s,v?B.bK:B.am,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=A.at(A.d("No questions in this category yet.",s,s,s,s,s,s,A.l(s,s,v?B.bK:B.am,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=A.hO(s,new C.e9j(this,r,d,e),t,B.wj,s,B.ah,new C.e9k(),!1)
return A.x(A.a([new C.aCX(d,this.gbG8(),e.c,w,e.b,s),new A.D(Ao.wl,u,s),A.E(v,1)],x.p),B.al,s,B.e,B.i,0,B.p)}}
C.aCX.prototype={
B(d){var w=this,v=null,u=w.c.a,t=A.aG(v,v,v,v,A.X(B.eN,u?B.aP:B.T,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=A.m(12)
q=A.q(v,A.X(w.e,s,v,v,v,22),B.f,v,v,new A.p(r,v,v,q,v,v,B.n),v,v,v,v,B.cl,v,v,v)
return new A.D(D.bGF,A.A(A.a([t,q,B.au,A.E(A.d(w.r,v,v,v,v,v,v,A.l(v,v,u?B.aP:B.T,v,v,v,v,v,v,v,v,17,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.l,v,B.e,B.i,0,v,v),v)}}
C.acT.prototype={
B(d){var w=null,v=this.c,u=A.b0(v.d),t=this.d.a,s=t?D.u2:B.c,r=A.m(14),q=A.m(14),p=A.m(14),o=A.L(t?B.aM:B.aO,B.r,1),n=A.a([new A.ac(0,B.G,B.w.j(t?0.28:0.06),B.dG,6)],x.V),m=u.j(0.15),l=A.m(12)
l=A.q(w,A.X(v.c,u,w,w,w,22),B.f,w,w,new A.p(m,w,w,l,w,w,B.n),w,40,w,w,w,w,w,40)
return new A.fH(1,A.aI(!1,B.a3,!0,r,A.aP(!1,q,!0,A.q(w,A.x(A.a([l,B.an,A.d(v.b,w,2,B.a2,w,w,w,A.l(w,w,t?B.aP:B.T,w,w,w,w,w,w,w,w,10,w,w,B.I,w,1.1,!0,w,w,w,w,w,w,w,w),B.K,w,w)],x.p),B.l,w,B.bb,B.i,0,B.p),B.f,w,w,new A.p(w,w,o,p,n,w,B.n),w,w,w,w,B.cl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.aj),w)}}
C.b1z.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=A.a([],q)
if(this.d){w=r.a
v=w?B.fU:B.nm
u=A.m(8)
t=A.X(B.uR,w?B.dk:B.dJ,s,s,s,14)
p.push(A.q(s,A.A(A.a([t,B.de,A.d("Printable document",s,s,s,s,s,s,A.l(s,s,w?B.dk:B.dJ,s,s,s,s,s,s,s,s,10,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),B.l,s,B.e,B.Q,0,s,s),B.f,s,s,new A.p(v,s,s,u,s,s,B.n),s,s,s,B.cx,B.eI,s,s,s))}B.d.v(p,J.b7(this.c,new C.cfO(r),x.l))
return A.x(p,B.E,s,B.e,B.i,0,B.p)}}
C.acL.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new A.D(D.bB0,A.d(q.b,r,r,r,r,r,r,A.l(r,r,s.d.a?B.aP:B.T,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new A.D(B.hH,A.by(A.m(12),K.aRr(r,B.c_,160,B.qG,r,w,1/0),B.aq),r)
case"video":v=q.c
q=v==null?q.b:v
return new A.D(B.hH,new C.aCY(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new A.D(B.wg,A.aP(!1,r,!0,A.d(q,r,r,r,r,r,r,A.l(r,r,s.d.a?B.co:B.bl,r,B.nd,r,r,r,r,r,r,r,r,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cOy(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=A.iK(v?B.aM:B.aO,r,r,r,r,r)
q=A.d(q.b,r,r,r,r,r,r,A.l(r,r,v?B.cu:B.aM,r,r,r,r,r,r,r,r,r,B.cH,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=A.q(r,r,B.f,v?B.bK:B.am,r,r,r,1,r,r,r,r,r,120)
return new A.D(B.Ca,A.x(A.a([u,q,B.aQ,t,B.ax,A.d("Signature",r,r,r,r,r,r,A.l(r,r,v?B.bK:B.am,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r)
case"bullets":v=x.cl
q=A.C(new A.cM(new A.Y(A.a(q.b.split("\n"),x.s),new C.cOz(),x.cc),new C.cOA(s),v),v.k("M.E"))
return new A.D(B.kT,A.x(q,B.E,r,B.e,B.i,0,B.p),r)
case"divider":return new A.D(B.hH,A.iK(s.d.a?B.aM:B.aO,r,r,r,r,r),r)
default:q=q.b
if(B.a.i(q).length===0)return B.bM
return new A.D(B.eM,C.i25(q,s.d),r)}}}
C.aCY.prototype={
S(){return new C.bj0()}}
C.bj0.prototype={
Y(){this.a4()
this.afn()},
afn(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$afn=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=B.a.i(r.a.c)
if(J.ad(n)!==0)p=!J.d4(n,"http")&&!J.d4(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=A.Zr(A.cD(n,0,null),null)
w=7
return A.b(J.a40(q),$async$afn)
case 7:if(r.c==null){w=1
break}r.m(new C.dqc(r,q))
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
return A.i($async$afn,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a3()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?B.bq:B.fq
u=A.m(12)
return A.q(B.A,A.X(B.qQ,w?B.bK:B.am,t,t,t,36),B.f,t,t,new A.p(v,t,t,u,t,t,B.n),t,120,t,t,t,t,t,t)}w=A.m(12)
v=s.a
u=J.aj5(v)
return A.by(w,new A.fH(u,new A.an(B.A,t,B.ad,B.t,A.a([new A.AN(s,t),A.aG(t,t,t,t,A.X(v.f?B.aot:B.OT,B.c,t,t,t,44),t,t,t,new C.dqe(this,s),t,t,t,t,t,t)],x.p),t),t),B.aq)}}
C.asl.prototype={
a7(){return"NgmyMusicLane."+this.b}}
C.JB.prototype={
a7(){return"NgmyMusicRhymeScheme."+this.b}}
C.rV.prototype={}
C.arB.prototype={
S(){var w=null
return new C.aFo(new A.au(B.aw,$.aw()),A.mY(0,w,w),A.a([],x.m),D.DV,D.aKD,w,w)},
ge3(){return this.d}}
C.aFo.prototype={
Y(){var w,v=this
v.a4()
w=A.bl(null,B.nC,null,1,null,v)
w.fs(0,!0)
v.as!==$&&A.aQ()
v.as=w
v.z=B.d.gH(D.a6o).a},
t(){var w=this,v=w.as
v===$&&A.c()
v.t()
v=w.d
v.T$=$.aw()
v.P$=0
w.e.t()
w.bzs()},
gasa(){var w,v,u,t,s=this.x
if(s===D.DW)return null
s=s===D.DV
w=s?D.a6o:D.a5t
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?B.d.gH(w):null},
cyk(d){return this.m(new C.ea_(this,d))},
aBQ(){$.aW.x1$.push(new C.e9R(this))},
Jv(d){return this.cxM(d)},
b1i(){return this.Jv(null)},
cxM(b0){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$Jv=A.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=B.a.i(b0==null?q.d.a.a:b0)
if(J.ad(a8)===0||q.r||q.a.e){w=1
break}w=3
return A.b(q.a.f.$0(),$async$Jv)
case 3:e=b2
if(!e){w=1
break}A.jW()
d=a8.toLowerCase()
p=B.a.q(d,"continue")||B.a.q(d,"keep going")||B.a.q(d,"go on")||B.a.q(d,"next verse")||B.a.q(d,"more lyrics")||B.a.q(d,"endelea")||B.a.q(d,"endelea na")||B.a.q(d,"ongeza")||B.a.q(d,"tuendelee")
a0=q.f
a1=B.d.aV(a0,new C.e9T())
o=!p&&!a1
d=a8.toLowerCase()
if(!(B.a.q(d,"fix")||B.a.q(d,"rewrite")||B.a.q(d,"re-write")||B.a.q(d,"rhyme better")||B.a.q(d,"better rhyme")||B.a.q(d,"sound better")||B.a.q(d,"improve")||B.a.q(d,"polish")||B.a.q(d,"make it rhyme")||B.a.q(d,"boresha")||B.a.q(d,"rekebisha")||B.a.q(d,"endeleza mistari")))a2=C.hxS(a8)&&a1
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
l=C.hxS(a8)&&!p
q.m(new C.e9U(q,a8))
q.aBQ()
k=B.a.i(q.a.c)
if(J.ad(k)===0){q.m(new C.e9V(q))
q.aBQ()
w=1
break}t=5
j=A.nm(k)
i=new A.N(a0,new C.e9W(),A.U(a0).k("N<1,n>")).aO(0,"\n\n")
a0=C.imN(m,p,o,q.x,n,q.y,q.gasa(),l)
a3=J.ad(i)!==0?"--- Conversation so far ---\n"+A.w(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+A.w(a8)
w=8
return A.b(A.rg(j,h,B.i0,null,null),$async$Jv)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=B.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=B.a.i(a0)}else a6=L.bEi(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.m(new C.e9X(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.m(new C.e9Y(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.m(new C.e9Z(q))
q.aBQ()
w=r.pop()
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Jv,v)},
bM1(){return this.Jv("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=A.S(d).ax.a===B.J,p=q?B.Gi:D.bqd,o=x.p
o=A.a([A.x(A.a([A.E(s.cx1(q),1),s.bLe(q)],o),B.l,r,B.e,B.i,0,B.p)],o)
if(s.f.length!==0&&!s.r){w=B.aS.j(0.55)
v=s.r?r:s.gbM0()
u=A.m(28)
t=A.a([B.aS,B.av],x.O)
o.push(A.ap(78,A.aI(!1,B.a3,!0,r,A.aP(!1,r,!0,A.eJ(D.ern,r,new A.p(r,r,r,u,A.a([new A.ac(0,B.G,B.aS.j(0.45),B.cL,16)],x.V),new A.a9(B.a6,B.aa,B.x,t,r,r),B.n),r,r,r),B.tC,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),B.f,B.L,10,r,w,B.tC,r,r,B.aj),r,r,r,14,r,r))}return A.q(r,new A.an(B.a0,r,B.ad,B.t,o,r),B.f,p,r,r,r,r,r,r,r,r,r,r)},
cx1(d){var w,v,u,t=this,s=null
if(t.x===D.DW)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=A.a([A.haj(s,!1,B.L,0,0,w,A.h6z(t.cCS(d),B.Y4,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=A.X(B.aqP,B.aF.j(0.5),s,s,s,52)
w.push(A.b86(new A.D(B.ez,A.x(A.a([u,B.aB,A.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,A.l(s,s,d?B.aD:B.dO,s,s,s,s,s,s,s,s,14,s,s,B.a8,s,1.45,!0,s,s,s,s,s,s,s,s),B.K,s,s),B.aB,A.bU(B.fQ,A.a([t.ajH("Full bongo love song ABAB",d),t.ajH("Mix: group vs private jet \u2014 which flies?",d),t.ajH("Song from John 3:16 + matching verses",d),t.ajH("Fix my rhyme \u2014 paste your lines",d)],v),B.bs,s,8,8)],v),B.l,s,B.bb,B.i,0,B.p),s),!1))}else{v=t.r?1:0
w.push(new A.of(D.bBJ,A.YQ(new A.oP(new C.e9S(t,d),u+v,!0,!0,!0,0,A.tq(),s)),s))}return A.w4(0,s,B.t,t.e,B.y,s,s,A9.ae6,s,s,!1,s,B.ah,!1,w)},
cCS(d){var w=this.as
w===$&&A.c()
return A.c8(w,new C.ea6(this,d),null)},
cCU(d){var w,v=this,u=null,t=A.m(14),s=v.r?u:new C.ea8(v),r=B.w.j(d?0.35:0.06),q=A.m(14),p=A.L(B.ba.j(0.35),B.r,1),o=v.gasa()
o=o==null?u:o.c
o=A.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,B.EH,u,u,u)
w=v.gasa()
w=w==null?u:w.b
if(w==null)w="Style"
w=A.E(A.d(w,u,u,u,u,u,u,A.l(u,u,d?B.c:B.bo,u,u,u,u,u,u,u,u,12,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return A.aI(!1,B.a3,!0,u,A.aP(!1,t,!0,A.q(u,A.A(A.a([o,B.ae,w,A.X(v.w?B.Pi:B.t1,B.ba,u,u,u,20)],x.p),B.l,u,B.e,B.i,0,u,u),B.f,u,u,new A.p(r,u,p,q,u,u,B.n),u,u,u,u,B.nE,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj)},
axm(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=A.a([B.b2,B.aY],x.O)
break
case 1:w=A.a([B.bl,B.co],x.O)
break
case 2:w=A.a([B.bD,B.aF],x.O)
break
default:w=n}v=m?6:0
u=A.m(14)
t=A.m(14)
s=this.r?n:new C.e9Q(this,d)
r=A.m(14)
w=m?new A.a9(B.a6,B.aa,B.x,w,n,n):n
if(m)q=n
else q=B.w.j(g?0.3:0.05)
p=A.d(f,n,n,n,n,n,n,B.EH,n,n,n)
if(m)o=B.c
else o=g?B.ab:B.bo
return A.E(A.aI(!1,B.a3,!0,u,A.aP(!1,t,!0,A.cT(n,A.x(A.a([p,A.d(e,n,n,n,n,n,n,A.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),B.l,n,B.e,B.i,0,B.p),n,n,B.b1,new A.p(q,n,n,r,n,w,B.n),B.a3,n,n,n,n,B.k2,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),B.f,n,v,n,n,n,n,n,B.aj),1)},
cCV(d,e){var w,v,u,t=this,s=null,r=t.x===D.DV?t.z:t.Q,q=A.m(20)
if(r===d.a)r=B.ba.j(e?0.25:0.15)
else r=B.w.j(e?0.2:0.04)
w=A.m(20)
v=t.r?s:new C.ea9(t,d)
u=A.d(d.c,s,s,s,s,s,s,B.Vl,s,s,s)
return A.aI(!1,B.a3,!0,q,A.aP(!1,w,!0,new A.D(B.hd,A.A(A.a([u,B.de,A.d(d.b,s,s,s,s,s,s,A.l(s,s,e?B.c:B.bo,s,s,s,s,s,s,s,s,10,s,s,B.V,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.l,s,B.e,B.Q,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),B.f,r,0,s,s,s,s,s,B.aj)},
ajH(d,e){var w=null,v=A.d(d,w,w,w,w,w,w,E.abq,w,w,w),u=B.aF.j(e?0.2:0.1)
return A.n3(w,u,v,w,this.r?w:new C.ea0(this,d),w,w,w,w)},
bLe(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=A.m(22),o=d?B.T.j(0.95):B.c,n=A.L(B.aF.j(0.2),B.r,1),m=x.p,l=A.a([],m)
if(q>0)l.push(new A.D(Aj.amJ,A.d("$"+B.j.ad(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,A.l(r,r,B.aS.j(0.85),r,r,r,r,r,r,r,r,9,r,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=A.l(r,r,d?B.c:B.bo,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.DW?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=A.E(A.aM(r,B.Z,!1,r,!0,B.t,r,A.aO(),w,r,r,r,r,r,2,A.bt(r,B.eK,r,B.he,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.l(r,r,d?B.bW:B.hu,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),B.y,!0,r,!0,r,!1,r,B.ak,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.e9N(s),r,!1,r,r,!1,r,!0,r,B.ac,r,r,r,r,r,r,r,r,r,r,r,v,!0,B.a5,r,B.ao,r,r,r,r),1)
u=s.r
t=u?r:new C.e9O(s)
l.push(A.A(A.a([v,new A.JL(w,B.aF,r),A.aI(!1,B.a3,!0,r,A.aP(!1,r,!0,A.eJ(u?D.erD:D.bYd,r,D.b7J,42,r,42),B.cR,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),B.f,r,0,r,r,B.cR,r,r,B.aj)],m),B.dL,r,B.e,B.i,0,r,r))
return A.q(r,A.x(l,B.al,r,B.e,B.Q,0,B.p),B.f,r,r,new A.p(o,r,n,p,r,r,B.n),r,r,r,B.uu,B.a04,r,r,r)}}
C.aNA.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.Wx.prototype={
aj(){var w=this
return A.I(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.a_N.prototype={
S(){return new C.aCo(null,null)},
bjY(){return this.f.$0()}}
C.aCo.prototype={
Y(){var w,v=this,u=null
v.a4()
w=A.bl(u,D.bA6,u,1,u,v)
w.cr(0)
v.d!==$&&A.aQ()
v.d=w
w=A.bl(u,B.on,u,1,u,v)
w.fs(0,!0)
v.e!==$&&A.aQ()
v.e=w
w=A.bl(u,B.lI,u,1,u,v)
w.cO(0)
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
w.byh()},
ccF(){var w=this.d
w===$&&A.c()
w.eJ(0).bG(new C.dnw(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(A.aH(d,B.c1,x.w).w.a.a-32,360),h=B.w.j(0.82),g=k.gccE(),f=x.l,e=J.e2(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&A.c()
e[v]=new A.DR(new C.dnx(k,v,d),j,w,j)}f=A.C(e,f)
w=k.d
w===$&&A.c()
u=A.m(28)
t=A.L(B.c.j(0.22),B.r,1.5)
s=A.a([new A.ac(2,B.G,B.av.j(0.35),B.H,40),new A.ac(0,B.G,B.aN.j(0.25),B.h5,28)],x.V)
r=k.e
r===$&&A.c()
q=k.r
q===$&&A.c()
q=A.c8(new A.h6(A.a([r,q],x.U)),new C.dny(k),j)
r=A.oe(B.jT,D.fXx,new C.dnz())
p=A.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,A.l(j,j,B.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,B.cD,j,1.45,!0,j,j,j,j,j,j,j,j),B.K,j,j)
o=x.p
n=A.A(A.a([k.b1j(B.k8,"Resets in 24h"),B.ae,k.b1j(B.ox,"Help Topics ready")],o),B.l,j,B.bb,B.i,0,j,j)
m=A.a([],o)
k.a.toString
l=B.c.j(0.35)
m.push(A.E(A.dU(D.fRD,new C.dnA(k),A.di(j,j,j,j,j,j,j,j,j,B.ab,j,j,B.lJ,j,new A.b9(A.m(14),B.a1),new A.ay(l,1,B.r,-1),j,j,j,j)),1))
k.a.toString
m.push(B.au)
k.a.toString
l=A.m(14)
m.push(A.E(A.bI(D.fXn,j,g,A.bp(B.aN,j,j,6,B.c,j,B.lJ,B.aN.j(0.5),new A.b9(l,B.a1),j,j,j)),1))
f.push(A.at(A.aA(j,A.c8(w,new C.dnB(k),A.q(j,A.x(A.a([q,B.aB,r,B.X,p,B.U,n,B.bz,A.A(m,B.l,j,B.e,B.i,0,j,j)],o),B.l,j,B.e,B.Q,0,B.p),B.f,j,j,new A.p(j,j,t,u,s,D.c6i,B.n),j,j,j,j,Ab.amB,j,j,i)),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.dnC(),j,j,j,j,j,j,!1,B.a4),j,j,j))
return A.aI(!1,B.a3,!0,j,A.aA(j,new A.an(B.a0,j,B.ad,B.t,f,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,B.a4),B.f,h,0,j,j,j,j,j,B.aj)},
b1j(d,e){var w=null,v=B.c.j(0.08),u=A.m(20),t=A.L(B.c.j(0.12),B.r,1)
return A.q(w,A.A(A.a([A.X(d,B.av,w,w,w,13),B.e4,A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.Q,0,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.hd,w,w,w)}}
C.aMs.prototype={
aY(){this.b5()
this.b4()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.OD.prototype={}
C.qe.prototype={}
C.as7.prototype={
S(){return new C.aFK(A.a([],x.E),A.a([],x.s))}}
C.aFK.prototype={
gasz(){return B.j.D(A.LU(this.a.c.a,new C.eol(this)),0,1/0)},
a9u(){var w,v=this,u=v.d,t=v.gasz()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)A.re(u.a,t,!0,!1)},
JZ(d,e){var w,v,u,t=this,s=t.gasz(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gasz()
if(w<v-0.005)A.hDj(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)A.re(u.a,w,!0,!1)
A.re(t.a.c.a,w,!0,!1)
A.Bu(!0,!1,w,t.a.c.a)},
Y(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a4()
$.aW.c1$.push(o)
w=$.Jo+1
$.Jo=w
if(w===1){w=$.hph
if(w!=null)w.$0()}v=$.h8C.h(0,B.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=A.bq(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=A.bq(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=A.m4(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,B.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=A.aR6(u,B.j.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new A.vZ(w,u,r,q,s.e,p)}o.d=t}o.PG()
o.a9u()
$.aW.x1$.push(new C.ep1(o))
o.Q=A.df(B.oo,new C.ep2(o))
o.as=A.df(B.h3,new C.ep3(o))},
t(){var w=this,v=w.Q
if(v!=null)v.a1(0)
v=w.as
if(v!=null)v.a1(0)
$.aW.hV(w)
C.hUP()
w.a3()},
cF2(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new A.V(Date.now(),0,!1)
v=p.r
if(!C.a8K(v,w)){if(C.h8E(p,q.e)){q.m(new C.eoK(q,p))
q.yw(!1,!0,!0)}else if(q.c!=null)q.m(new C.eoL())
return}if(!C.ci2(v.c?v.bT():v)){q.m(new C.eoM(p))
q.b1s(!1)
return}u=p.gCS()
if(u<=0)return
t=w.d3(A.c1(A.bC(w),A.bL(w),A.bW(w),12,0,0,0,0))
s=C.h8F(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.m(new C.eoN())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(B.d.aV(q.e,new C.eoO(r))){q.m(new C.eoP(p,w,u))
return}q.m(new C.eoQ(q,p,u,w))
q.azR(new A.d7(r,p.a,u,B.h0,B.fu,"Clock-in daily earnings (local)",null,null,B.cv,w))},
jl(d){if(d===B.fS)this.Fd()},
PG(){var w,v,u,t,s,r,q,p=this.d
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
w.c9=A.bq(p.c9,!0,x.N)
w=this.a.c
w.bH=p.c9.length
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
q=new A.vZ(u,t,s,r,v.e,q)
u=q}w.x=u},
SA(d){return this.cDF(d)},
cDF(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$SA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.PG()
t.JZ(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return A.b(x.r.b(s)?s:A.dQ(s,x.H),$async$SA)
case 3:case 1:return A.h(u,v)}})
return A.i($async$SA,v)},
Fd(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$Fd=A.e(function(d,e){if(d===1){s.push(e)
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
return A.b(H.Ac(q.w,k,l,j,m,!1,n),$async$Fd)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.m(new C.eoF(q,p))
q.SA(!1)}w=8
return A.b(q.Ka(),$async$Fd)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=A.ab(h)
$.am.$1("[growth income] pull wallet: "+A.w(o))
w=9
return A.b(q.Ka(),$async$Fd)
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
return A.i($async$Fd,v)},
O6(d){return this.bFl(d)},
bFk(){return this.O6(null)},
bFl(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$O6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return A.b(A.az(),$async$O6)
case 3:s=f
r=B.a.i(t.a.c.a.toLowerCase())
q=A.d1(t.w,x.N)
r=s.tS("ngmy_gi_credited_txn_ids_"+r)
q.v(0,r==null?A.a([],x.s):r)
j.a=0
p=A.a([],x.s)
o=d==null?null:A.jz(d,A.U(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,A.J)(r),++m){l=r[m]
k=l.a
if(q.q(0,k))continue
if(o!=null&&!o.q(0,k))continue
if(l.d===B.fP&&l.x===B.cv&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.m(new C.eom(j,t,i))
q.v(0,p)
r=A.C(q,A.a4(q).k("ch.E"))
t.w=r
w=4
return A.b(A.as9(t.a.c.a,r),$async$O6)
case 4:t.azl(!1,!0)
r=t.c
if(r!=null)r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Balance updated: +$"+A.dF(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$O6,v)},
Ka(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$Ka=A.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=A.U(a2).k("Y<1>")
a4=A.C(new A.Y(a2,new C.eoG(),a3),a3.k("M.E"))
a5=a4
a6=A.a([],x.s)
w=J.ad(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=A.U(a2).k("N<1,n>")
e=A.C(new A.N(a2,new C.eoH(),a3),a3.k("ak.E"))
q=e
w=9
return A.b(A.lI("transactions","id,status",null,null,null,A.I(["id",q],x.N,x.j),null,!0,null,null,!1,B.bN),$async$Ka)
case 9:p=a9
if(r.c==null){w=1
break}o=!1
for(a2=J.aU(p);a2.C();){n=a2.gR(a2)
m=n
a3=J.t(m,"id")
l=J.k(a3==null?"":a3)
a3=A.aJ(J.t(m,"status"))
d=a3==null?null:B.j.M(a3)
k=d==null?0:d
if(J.ad(l)===0)continue
j=B.d.bj(r.e,new C.eoI(l))
if(j<0)continue
i=r.e[j].x
if(J.z(k,1))a0=B.cv
else a0=J.z(k,2)?B.kE:B.dE
h=a0
if(!J.z(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===B.dE&&h===B.cv&&a3[j].d===B.fP)J.c7(a6,l)
if(i===B.dE&&h===B.kE&&r.e[j].d===B.f0){g=r.d
if(g!=null){r.JZ(g.d+r.e[j].c,!1)
r.azl(!1,!0)}}}}if(o&&r.c!=null)r.m(new C.eoJ())
t=2
w=8
break
case 6:t=5
a7=s.pop()
f=A.ab(a7)
$.am.$1("[growth income] refresh deposit status: "+A.w(f))
w=8
break
case 5:w=2
break
case 8:case 4:w=J.ad(a6)!==0?10:12
break
case 10:w=13
return A.b(r.O6(a6),$async$Ka)
case 13:w=11
break
case 12:w=14
return A.b(r.bFk(),$async$Ka)
case 14:case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ka,v)},
Qt(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$Qt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return A.b(A.vd(i.a,i),$async$Qt)
case 3:h=e
if(t.c==null){w=1
break}t.m(new C.eoq(t,h))
t.PG()
t.a9u()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return A.b(H.Ac(s[0],p,q,o,r,!0,i),$async$Qt)
case 4:i=e.a
n=i[4]
m=A.bq(i[2],!0,x.o)
l=i[5]
t.w=A.bq(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.PG()
t.a9u()
k=C.h8E(n,m)
if(k)t.JZ(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.a_&&s.aG>0
else s=!0
j=A.hq2(n,m,new A.V(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.PG()
if(t.c==null){w=1
break}t.m(new C.eor(t,n,m,l))
if(i){t.yw(!1,!0,!0)
if(j==="reset"){A.hoR(t.a.c.a)
i=t.c
if(i!=null)A.hoU(i,null)}else if(j==="warn2"){A.hoS(t.a.c.a)
i=t.c
if(i!=null)C.hoV(i)}}else if(k)t.yw(!1,!0,!0)
else t.SA(!1)
case 1:return A.h(u,v)}})
return A.i($async$Qt,v)},
yw(d,e,f){return this.cne(d,e,f)},
azl(d,e){return this.yw(d,!1,e)},
b1s(d){return this.yw(!1,d,!1)},
cne(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$yw=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new A.V(Date.now(),0,!1).aa()
r=t.a.c.a
q=t.e
p=t.f
w=3
return A.b(A.rT(r,o,q,!1,t.w,s,p),$async$yw)
case 3:p=t.a.c.a
q=t.e
r=t.f
A.Ju(t.w,p,q,s,o,r)
if(f)t.SA(d)
case 1:return A.h(u,v)}})
return A.i($async$yw,v)},
ccW(){this.m(new C.eoz())
this.azl(!1,!0)},
ag7(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===B.cv&&A.tn(d)){w=r.a
w.f.$1(new A.d7(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.chZ(q,d)
v=q.d=A.LU(r.a.c.a,new C.eow(r))
r.at=r.a.c.d=v
A.re(q.a,v,!0,!1)
if(r.c!=null)r.m(new C.eox(r,d))
r.yw(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new A.d7(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===B.dE
if(w&&d.d===B.fP)s=!1
else if(w&&d.d===B.f0){r.JZ(q.d-d.c,!0)
s=!0}else{C.chZ(q,d)
w=d.d
s=w===B.f0||w===B.ki
r.JZ(q.d,s)}r.m(new C.eoy(r,d))
w=d.d
r.yw(s,e,w===B.f0||w===B.ki||d.x===B.cv||w===B.h0)},
azR(d){return this.ag7(d,!0,!1)},
b2v(d,e){return this.ag7(d,!0,e)},
b2u(d,e){return this.ag7(d,e,!1)},
cg1(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.ip0(u,e,d)){v.ml("This plan is already active.")
return}w=A.hCP(u.a,d,e)
if(C.ilm(u.a,v.e,w)){v.ml("You already own this plan.")
return}if(u.d<g){v.ml("Insufficient balance. Add funds in the Wallet tab first.")
return}v.m(new C.eoA(v))
v.m(new C.eoB(v,u,new A.vZ(d,e,0.0286,new A.V(Date.now(),0,!1),0,0)))
v.azR(new A.d7(w,u.a,g,B.ki,B.fu,"Direct investment buy: "+d,null,null,B.cv,new A.V(Date.now(),0,!1)))
v.m(new C.eoC(v))
v.ml("Plan purchased: "+d)},
ml(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
a0u(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0u=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hy(s,new C.aoT(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$a0u)
case 3:w=4
return A.b(t.Qt(),$async$a0u)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0u,v)},
agB(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$agB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hy(s,new C.ajr(r,A.a([r],x.d9),B.Sl,t.a.d,t.gb2t(),t.gb1r(),null),!1,null,x.X),$async$agB)
case 3:case 1:return A.h(u,v)}})
return A.i($async$agB,v)},
agz(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$agz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hy(s,new C.amx(r,t.a.d,t.e,t.gb2t(),t.gb1r(),new C.eoE(t),null),!1,"LocalGrowthGameCenter",x.X),$async$agz)
case 3:case 1:return A.h(u,v)}})
return A.i($async$agz,v)},
adS(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$adS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new A.V(s,0,!1)
w=C.h8E(j,t.e)?3:4
break
case 3:w=5
return A.b(t.b1s(!0),$async$adS)
case 5:case 4:if(j.x==null){t.ml("Choose an investment plan first, then come back to clock in.")
t.m(new C.eos(t))
w=1
break}if(A.ms(r)===6||A.ms(r)===7){t.ml("Clock-in opens Monday through Friday.")
w=1
break}if(!C.hq3(r)){t.ml("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a8K(q,r)&&j.fy>0){t.ml("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!A.aRO(q,r))if(!A.aRO(j.fr,r)){q=A.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,A.J)(p),++n){m=p[n]
if(B.a.i(m.b.toLowerCase())===B.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new A.aHD(m.y,l,m.a))}}q=A.hCg(q,r)}else q=p
else q=p}else q=!1
if(q){t.ml("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.ml("You are already clocked in for today.")
w=1
break}k=C.hWg(r)
q=j.a
t.m(new C.eot(j,r,k))
t.b2u(new A.d7("local_clockin_manual_"+q+"_"+s,j.a,0,B.h0,B.fu,"Clock-in session started (local)",null,null,B.cv,r),!1)
t.ml("Clock-in started. Keep Growth Income open for today.")
case 1:return A.h(u,v)}})
return A.i($async$adS,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.S(d).ax.a===B.J?B.jA:B.qk
if(l.d==null)return A.e9(B.l1,j,!0)
w=x.o
v=A.T(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,A.J)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=B.a.i(l.a.c.a.toLowerCase())
u=$.fL7
u=u==null?k:u.$0()
u=J.aU(u==null?B.iy:u)
while(u.C()){t=u.gR(u)
q=t.a
if(q.length===0||v.al(0,q)||A.tn(t))continue
if(B.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(A.cS(o.toLowerCase(),"clock-in",0))continue
v.n(0,q,t)}w=A.C(new A.b8(v,v.$ti.k("b8<2>")),w)
v=l.e
B.d.v(w,new A.Y(v,new C.eoU(),A.U(v).k("Y<1>")))
B.d.aZ(w,new C.eoV())
v=l.d
v.toString
u=C.iaI(l.a.c)
t=l.d
t.toString
t=A.e9(new C.ank(t,l.a.e,l.z,l.gcg0(),l.aWK(),D.hqj),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=A.e9(new C.aDb(l.aWK(),q,n,o,w,new C.eoW(l),l.gci7(),new C.eoX(l),D.hqk),j,!0)
m=A.aH(d,k,x.w).w
n=l.y
return new A.Xl(n,new C.eoY(l),A.aI(!1,B.a3,!0,k,new A.a5(1/0,m.a.b,new A.an(B.a0,k,B.ad,B.t,A.a([A.bR(0,A.e9(k,j,!0),0,0,0),A.bR(0,A.bn(!1,[new C.aDa(v,u,w,l.gc6a(),new C.eoZ(l),new C.ep_(l),new C.ep0(d),l.gcj_(),l.gciV(),D.hqi),t,o][n],!0,!1,B.ag,!0,!0),0,0,0),A.ap(0,l.bHJ(),k,k,0,0,k,k)],x.p),k),k),B.f,j,0,k,k,k,k,k,B.aj),k)},
aWK(){var w=null,v=A.a([D.eW.j(0.24),B.T.j(0.72)],x.O)
return A.hb(A.aP(!1,w,!0,A.q(B.A,D.c1U,B.f,w,w,new A.p(w,w,A.L(D.eW.j(0.38),B.r,1),w,A.a([new A.ac(0,B.G,D.eW.j(0.18),B.H,16)],x.V),new A.a9(B.aA,B.aE,B.x,v,w,w),B.a7),w,40,w,w,w,w,w,40),B.cR,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eop(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bHJ(){var w=null,v=A.m(27),u=A.L(B.aC.j(0.45),B.r,1),t=A.a([new A.ac(0,B.G,B.w.j(0.5),B.f_,24),new A.ac(-2,B.G,B.aC.j(0.12),B.H,18)],x.V)
return new A.D(B.O5,A.bn(!0,A.at(new A.cQ(D.b6_,A.q(w,A.cs(new C.eon(this)),B.f,w,w,new A.p(w,w,u,v,t,D.c5M,B.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,B.ag,!0,!1),w)},
c7R(d){var w=null,v=this.y===d,u=D.dbH[d],t=u.b,s=u.a,r=""+d,q=x.W
return A.E(A.du(w,!0,w,A.aA(B.c5,A.t2(A.ow(v?A.X(s,D.afs,new A.bJ("on"+r,q),w,w,21):A.x(A.a([A.X(s,B.c.j(0.62),w,w,w,19),B.bH,A.d(t,w,1,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,new A.bJ("off"+r,q),B.bb,B.i,0,B.p),B.iJ,A.pR(),B.b1,B.b1,A.LB())),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eov(this,d),w,w,w,w,w,w,!1,B.a4),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,B.cb,w),1)}}
C.aDa.prototype={
c4S(d){return C.h8F(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.S(d)
w=B.c.j(0.58)
v=f.e
u=A.U(v).k("Y<1>")
u=A.pG(new A.Y(v,new C.drX(),u),3,u.k("M.E"))
t=A.C(u,A.a4(u).k("M.E"))
v=f.c
s=v.x
r=new A.V(Date.now(),0,!1)
q=v.f
p=C.a8K(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.hq3(r)
m=v.gCS()
l=A.a([D.eW.j(0.24),B.T.j(0.72)],x.O)
k=A.L(D.eW.j(0.38),B.r,1)
j=x.V
i=A.a([new A.ac(0,B.G,D.eW.j(0.18),B.H,16)],j)
l=A.aP(!1,e,!0,A.q(B.A,A.X(B.hZ,D.eW,e,e,e,19),B.f,e,e,new A.p(e,e,k,e,i,new A.a9(B.aA,B.aE,B.x,l,e,e),B.a7),e,38,e,e,e,e,e,38),B.cR,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=A.m(14)
k=A.m(14)
j=A.a([new A.ac(0,B.G,B.b9.j(0.45),B.cL,16)],j)
h=A.m(12)
g=x.p
j=A.bT4(!1,l,"GROWTH INCOME",A.aP(!1,i,!0,new A.a5(44,44,new A.an(B.a0,e,B.ad,B.f,A.a([A.q(B.A,A.q(B.A,D.bV9,B.f,e,e,new A.p(B.iH.j(0.78),e,e,h,e,e,B.n),e,36,e,e,e,e,e,36),B.f,e,e,new A.p(e,e,e,k,j,D.c7g,B.n),e,42,e,e,e,e,e,42),A.ap(e,A.q(B.A,D.c0Y,B.f,e,e,new A.p(B.bi,e,A.L(D.aim,B.r,2),e,e,e,B.a7),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.hsG(B.fH,new C.drY(),k)
k=A.A(A.a([A.E(C.hsF(new C.drZ(f,B.rv,n),new A.V(Date.now(),0,!1),h,k),1),B.oW,A.E(new A.wj(new C.ds_(f,B.rv),e,new A.h6(A.a([$.zj(),$.a3Y()],x.U)),e),1)],g),B.l,e,B.e,B.i,0,e,e)
h=f.c83(B.rv,D.eW)
v=A.E(f.cB9("Total Profit","$"+A.dF(v.e),B.rv),1)
u=u?e:s.b
return A.e9(A.cc(A.x(A.a([j,B.X,k,B.af,new C.aD9(f.d,m,q,p,n,o,D.eW,f.gc4R(),f.f,e),B.af,h,B.X,A.A(A.a([v,B.oW,A.E(f.b8P("Total Investment","$"+A.dF(u==null?0:u),B.rv,f.r),1)],g),B.l,e,B.e,B.i,0,e,e),B.X,f.c4O(d,t,D.eW,w)],g),B.al,e,B.e,B.i,0,B.p),B.t,e,B.y,e,B.a0D,e,e,B.ah),D.aim,!0)},
azk(d,e,f,g,h){var w=null,v=A.m(h),u=A.L(B.c.j(0.09),B.r,1),t=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dv,18)],x.V)
return A.q(w,A.by(A.m(h-1),new A.an(B.a0,w,B.ad,B.t,A.a([A.bR(0,A.c2(w,new A.p(w,w,w,w,w,new A.bY(f,1.15,B.x,w,0,A.a([e.j(0.22),e.j(0)],x.O),w,w),B.n),B.bj),0,0,0),new A.D(g,d,w)],x.p),w),B.aq),B.f,w,w,new A.p(w,w,u,v,t,D.c6c,B.n),w,w,w,w,w,w,w,w)},
b1q(d,e,f,g){return this.azk(d,e,f,B.ag,g)},
baW(d,e,f,g,h,i,j){var w=null,v=A.ap(-14,A.X(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=A.m(30),s=A.L(f.j(0.4),B.r,1),r=x.p,q=this.b1q(new A.a5(w,80,new A.an(B.a0,w,B.ad,B.t,A.a([v,new A.D(D.bCe,A.x(A.a([A.q(w,A.A(A.a([A.X(e,f,w,w,w,15),B.e4,A.d(h.toUpperCase(),w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),B.l,w,B.e,B.Q,0,w,w),B.f,w,w,new A.p(u,w,s,t,w,w,B.n),w,w,w,w,B.amO,w,w,w),B.b5,A.ev(B.a6,A.d(i,w,1,w,w,w,w,A.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,B.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.e2)],r),B.E,w,B.e,B.i,0,B.p),w)],r),w),w),f,B.ly,22)
if(g==null)return q
return A.aP(!1,A.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
c83(d,e){var w,v,u,t,s=null,r=A.L(e.j(0.55),B.r,2),q=e.j(0.12),p=x.p,o=A.a([],p)
for(w=0;w<3;++w){v=new A.aN(3,3)
o.push(A.q(s,s,B.f,s,s,new A.p(e,s,s,new A.be(v,v,v,v),s,s,B.n),s,D.cWE[w],s,D.bFW,s,s,s,5))}r=A.q(s,A.A(o,B.dL,s,B.bb,B.i,0,s,s),B.f,s,s,new A.p(q,s,r,s,s,s,B.a7),s,42,s,s,s,s,s,42)
q=A.E(A.x(A.a([D.fTu,B.bH,A.A(A.a([A.q(s,s,B.f,s,s,new A.p(e,s,s,s,A.a([new A.ac(0,B.G,e,B.H,6)],x.V),s,B.a7),s,7,s,s,s,s,s,7),B.bm,new A.dl(1,B.cm,A.d("Live \xb7 real-time statistics",s,1,B.a2,s,s,s,A.l(s,s,B.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),B.l,s,B.e,B.i,0,s,s)],p),B.E,s,B.e,B.i,0,B.p),1)
o=A.m(16)
v=A.m(16)
u=B.w.j(0.3)
t=A.L(e.j(0.45),B.r,1.2)
return this.azk(A.A(A.a([r,D.fes,q,B.ae,A.aP(!1,o,!0,A.q(s,A.x(A.a([A.X(B.oB,e.j(0.95),s,s,s,21),B.vw,A.d("PLAY",s,s,s,s,s,s,A.l(s,s,B.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,B.I,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),B.l,s,B.bb,B.i,0,B.p),B.f,s,s,new A.p(u,s,t,v,s,s,B.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),B.l,s,B.e,B.i,0,s,s),e,B.a6,B.a07,26)},
b8P(d,e,f,g){var w,v=null,u=B.a.q(d.toLowerCase(),"profit"),t=u?B.bi:B.aH,s=A.q(v,v,B.f,v,v,new A.p(t,v,v,D.b4a,v,v,B.n),v,v,v,B.nD,v,v,v,5),r=x.p
r=A.a([s,B.bd,A.E(A.x(A.a([A.A(A.a([A.X(u?B.uP:B.zl,t,v,v,v,14),B.e4,new A.dl(1,B.cm,A.d(d,v,1,B.a2,v,v,v,A.l(v,v,B.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),B.l,v,B.e,B.i,0,v,v),B.an,A.ev(B.a6,A.d(e,v,1,v,v,v,v,D.fnM,v,v,v),B.f,B.e2)],r),B.E,v,B.bb,B.i,0,B.p),1)],r)
s=g==null
if(!s)r.push(new A.D(B.GH,A.X(B.eJ,B.c.j(0.35),v,v,v,v),v))
w=this.b1q(new A.a5(v,66,A.A(r,B.l,v,B.e,B.i,0,v,v),v),t,B.lz,20)
if(s)return w
return A.aP(!1,A.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cB9(d,e,f){return this.b8P(d,e,f,null)},
c4O(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.q(m,m,B.f,m,m,new A.p(f,m,m,m,A.a([new A.ac(0,B.G,f,B.H,8)],x.V),m,B.a7),m,9,m,m,m,m,m,9),k=A.d("LIVE ACTIVITY",m,m,m,m,m,m,A.l(m,m,B.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,B.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=B.c.j(0.07),i=A.m(20),h=x.p
i=A.a([A.A(A.a([l,B.V0,k,B.b5,A.q(m,A.d(""+e.length,m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.f,m,m,new A.p(j,m,m,i,m,m,B.n),m,m,m,m,B.a0R,m,m,m)],h),B.l,m,B.e,B.i,0,m,m),B.U],h)
if(e.length===0)i.push(new A.D(B.a_X,A.x(A.a([A.X(B.hw,g,m,m,m,30),B.an,A.d("Nothing yet",m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.bH,A.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),B.K,m,m)],h),B.l,m,B.e,B.i,0,B.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=A.a([],h)
if(w>0)k.push(new A.mH(1,m,m,m,m,B.c.j(0.07),m))
j=e[w]
v=j.d
u=v===B.f0||v===B.ki
t=u?B.hV:D.eW
g=B.c.j(0.5)
v=new A.aN(12,12)
s=A.a([t.j(0.28),t.j(0.08)],l)
r=new A.ay(t.j(0.35),1,B.r,-1)
v=A.q(B.A,A.X(u?B.uP:B.wM,t,m,m,m,18),B.f,m,m,new A.p(m,m,new A.bG(r,r,r,r),new A.be(v,v,v,v),m,new A.a9(B.aA,B.aE,B.x,s,m,m),B.n),m,38,m,m,m,m,m,38)
s=A.d(C.ijd(j),m,1,B.a2,m,m,m,B.l4,m,m,m)
q=C.hui(j.y)
s=A.x(A.a([s,B.bH,A.d(q,m,m,m,m,m,m,new A.G(!0,g,m,m,m,m,11,B.a8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),B.E,m,B.e,B.i,0,B.p)
q=t.j(0.14)
p=new A.aN(20,20)
o=u?"-":"+"
n=A.dF(j.c)
q=A.q(m,A.d(o+"$"+n,m,m,m,m,m,m,new A.G(!0,t,m,m,m,m,13,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),B.f,m,m,new A.p(q,m,m,new A.be(p,p,p,p),m,m,B.n),m,m,m,m,B.or,m,m,m)
j=C.hBT(j)
k.push(new A.D(O.NX,new A.c6(B.aL,B.e,B.i,B.l,m,B.p,m,0,A.a([v,B.bd,new A.bz(1,B.bc,s,m),A.x(A.a([q,B.cU,A.d(j,m,m,m,m,m,m,new A.G(!0,g,m,m,m,m,10,B.V,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],h),B.dL,m,B.e,B.i,0,B.p)],h),m),m))
B.d.v(i,k)}return this.azk(A.x(i,B.l,m,B.e,B.i,0,B.p),f,B.b7,D.bCp,26)}}
C.aD9.prototype={
S(){return new C.bjK(null,null)},
cVS(d){return this.z.$1(d)},
cXc(){return this.Q.$0()}}
C.bjK.prototype={
Y(){var w,v=this,u=null
v.a4()
w=A.bl(u,B.qw,u,1,u,v)
w.cO(0)
v.d!==$&&A.aQ()
v.d=w
w=A.bl(u,D.bzX,u,1,u,v)
w.cO(0)
v.e!==$&&A.aQ()
v.e=w
w=A.bl(u,B.rT,u,1,u,v)
v.f!==$&&A.aQ()
v.f=w
v.b9Y()},
gbcE(){var w=new A.V(Date.now(),0,!1)
if(A.ms(w)===6||A.ms(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
b9Y(){var w=this,v=w.a,u=v.e||v.f||w.gbcE()
if(u){v=w.f
v===$&&A.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){v=w.f
v===$&&A.c()
v.cO(0)}else{if(!u){v=w.f
v===$&&A.c()
v=v.r
v=v!=null&&v.a!=null}else v=!1
if(v){v=w.f
v===$&&A.c()
v.bQ(0)}}},
bz(d){this.bJ(d)
this.b9Y()},
t(){var w=this,v=w.d
v===$&&A.c()
v.t()
v=w.e
v===$&&A.c()
v.t()
v=w.f
v===$&&A.c()
v.t()
w.byy()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gbcE()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=B.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?B.aC:g.x
g=g.r?new C.drQ(i):h
v=A.m(32)
s=A.m(32)
r=f?D.dtV:D.dtT
q=A.L((f?D.pb:B.b0).j(0.28),B.r,1.4)
p=x.V
o=A.a([new A.ac(0,B.G,(f?B.aC:B.ba).j(0.16),B.h5,28)],p)
n=x.p
m=A.a([],n)
if(f)B.d.v(m,A.a([A.ap(h,i.acm(D.pb,130),h,h,h,-24,-30,h),A.ap(-36,i.acm(B.aC,140),h,h,-28,h,h,h)],n))
else B.d.v(m,A.a([A.ap(h,i.acm(B.ba,120),h,h,h,-30,-36,h),A.ap(-40,i.acm(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bR(0,new A.dw(!0,A.by(l,new A.em(A.c8(k,new C.drR(i),h),h),B.aq),h),0,0,0))}if(f){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bR(0,new A.dw(!0,A.by(l,new A.em(A.c8(k,new C.drS(i),h),h),B.aq),h),0,0,0))}l=A.m(999)
k=B.c.j(0.06)
j=A.L(B.c.j(0.16),B.r,1)
m.push(A.ap(h,new A.cQ(D.b65,A.q(h,A.A(A.a([A.q(h,h,B.f,h,h,new A.p(t,h,h,h,A.a([new A.ac(0,B.G,t.j(0.5),B.H,8)],p),h,B.a7),h,8,h,h,h,h,h,8),B.ae,new A.dl(1,B.cm,A.d(u,h,1,B.a2,h,h,h,D.ftG,h,h,h),h)],n),B.l,h,B.e,B.Q,0,h,h),B.f,h,h,new A.p(k,h,j,l,h,h,B.n),h,h,h,h,B.he,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.hsG(B.fH,new C.drT(),l)
m.push(C.hsF(new C.drU(i,f,t,e,w),new A.V(Date.now(),0,!1),j,l))
return A.aP(!1,v,!0,A.cT(h,new A.an(B.a0,h,B.ad,B.f,m,h),h,h,B.b1,new A.p(h,h,q,s,o,new A.a9(B.aA,B.aE,B.x,r,h,h),B.n),B.C6,h,392,h,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
acm(d,e){var w=null
return new A.dw(!0,A.q(w,w,B.f,w,w,new A.p(w,w,w,w,w,new A.bY(B.A,0.5,B.x,w,0,A.a([d.j(0.22),d.j(0)],x.O),w,w),B.a7),w,e,w,w,w,w,w,e),w)}}
C.bdm.prototype={
b1t(d,e,f,g){var w=new A.aF($.Q().r,B.ai,null,null,A.a([],x.g)),v=e.a,u=e.b,t=u-f
w.E(new A.aZ(v,t))
w.E(new A.c5(v,u,v+f,u))
w.E(new A.c5(v,u,v,u+f))
w.E(new A.c5(v,u,v-f,u))
w.E(new A.c5(v,u,v,t))
w.E(new A.bv())
d.af(w,g)},
a5(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=b3.a,a8=a7/2,a9=b3.b,b0=a9/2,b1=new A.o(a8,b0)
for(w=a6.b,v=w*6.283185307179586,u=0;u<16;++u){t=B.j.F(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=B.j.F(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+B.o.F(u,3))+u)+1)/2
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.r=B.c.j(0.1+r*0.5).gp(0)
a6.b1t(b2,new A.o(t*a7,s*a9),2+r*2.2,q)}for(a7=w*2,a9=a6.e,p=0;p<3;++p){o=B.j.F(a7+p/3,1)
$.Q()
n=new A.ao(B.O,B.M,B.R,B.S,B.P)
n.b=B.a9
n.c=1.6
n.r=a9.j((1-o)*0.38).gp(0)
b2.N(b1,138+o*90,n)}for(a7=a6.d,m=b2.c,u=0;u<28;++u){l=B.j.F(w*(1+B.o.F(u,2))+u/28,1)
k=u*2.399963+Math.sin(u*1.7)*0.2
j=113.16+l*(70+B.o.F(u,5)*18)
i=a8+Math.cos(k)*j
h=b0+Math.sin(k)*j*0.96
o=new A.o(i,h)
g=B.j.D(Math.sin(l*3.141592653589793),0,1)
switch(B.o.F(u,4)){case 0:f=B.j.D(Math.abs(Math.cos(l*6.283185307179586*3)),0.28,1)
J.bo(m.save())
m.translate(i,h)
m.scale(f,1)
$.Q()
e=new A.ao(B.O,B.M,B.R,B.S,B.P)
e.r=a7.j(g).gp(0)
b2.N(B.H,6.5,e)
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.b=B.a9
i.c=1.2
i.r=a9.j(g).gp(0)
b2.N(B.H,6.5,i)
if(f>0.6&&g>0.35){i=$.hHK()
h=i.b
d=h.c
h=h.a.c
i.a5(b2,new A.o(-d/2,-h.gba(h)/2))}m.restore()
break
case 1:$.Q()
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.r=a9.j(g*0.95).gp(0)
a6.b1t(b2,o,3+g*3,i)
break
case 2:$.Q()
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.r=B.c.j(g*0.8).gp(0)
b2.N(o,1.6+g*1.8,i)
break
default:d=Math.cos(k)
a0=Math.sin(k)
a1=7+g*7
$.Q()
a2=new A.ao(B.O,B.M,B.R,B.S,B.P)
a2.c=1.8
a2.d=B.bu
a2.r=a7.j(g*0.8).gp(0)
b2.ah(o,new A.o(i-d*a1,h-a0*a1),a2)}}for(a3=0;a3<3;++a3){a4=v+a3*6.283185307179586/3
for(a5=0;a5<8;++a5){r=a4-a5*0.09
w=Math.cos(r)
m=Math.sin(r)
p=1-a5/8
$.Q()
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.r=a9.j(p*0.85).gp(0)
b2.N(new A.o(a8+w*144,b0+m*144),1.4+p*2.6,i)}w=Math.cos(a4)
m=Math.sin(a4)
$.Q()
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.r=a7.j(0.28).gp(0)
i.y=Q.os
b2.N(new A.o(a8+w*144,b0+m*144),7,i)}},
aD(d){return d.b!==this.b}}
C.bdl.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.Q(),a4=A.K()
a4.r=this.d.j(0.075).gp(0)
for(w=this.b,v=w*6.283185307179586,u=x.g,a3=a3.r,t=0;t<14;++t){s=v+t*6.283185307179586/14
r=A.a([],u)
q=new A.aF(a3,B.ai,e,e,r)
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
p=new A.bv()
r.push(p)
r=q.f
if(r!=null)p.ak(r)
q.ab()
a5.af(q,a4)}a0=w*2
a2=B.j.F(a0,1)
a3=a5.c
J.bo(a3.save())
a3.translate(a2*(d+240)-120,0)
a5.hW(0,0.35)
a2=-a1
v=A.K()
v.sav(new A.a9(B.a6,B.aa,B.x,A.a([B.c.j(0),B.c.j(0.07),B.c.j(0)],x.O),e,e).aK(0,D.f6Y))
a5.ar(new A.a1(-18,a2,18,a2+a1*3),v)
a3.restore()
for(a2=a1+40,t=0;t<34;++t){m=B.j.F(Math.abs(Math.sin(t*91.7)*43758.5453),1)
l=B.j.F(w*(1+B.o.F(t,2))+t/34,1)
v=l*6.283185307179586
u=Math.sin(v*2+t)
J.bo(a3.save())
a3.translate(m*d+u*14,l*a2-20)
a3.rotate(v*(2+B.o.F(t,3))*180/3.141592653589793,0,0)
v=B.j.D(Math.abs(Math.cos(v*3+t)),0.3,1)
a3.scale(1,v)
if(l<0.08)v=l/0.08
else v=l>0.9?(1-l)/0.1:1
k=B.j.D(v,0,1)
v=A.bm(D.f7w,B.Ut)
u=new A.ao(B.O,B.M,B.R,B.S,B.P)
u.r=D.aCQ[B.o.F(t,6)].j(k*0.9).gp(0)
a5.am(v,u)
a3.restore()}j=[new A.o(d*0.18,a1*0.2),new A.o(d*0.82,a1*0.26),new A.o(d*0.5,a1*0.07)]
for(i=0;i<3;++i){l=B.j.F(a0+i/3,1)
if(l>0.5)continue
h=l/0.5
g=6+h*44
d=1-h
k=B.j.D(d,0,1)
for(a1=g*0.62,a2=g+5,t=0;t<14;++t){s=t*6.283185307179586/14
a3=Math.cos(s)
w=Math.sin(s)
f=D.aCQ[B.o.F(t+i,6)].j(k)
v=j[i]
u=v.a
v=v.b
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.c=2
r.d=B.bu
r.r=f.gp(0)
a5.ah(new A.o(u+a3*a1,v+w*a1),new A.o(u+a3*g,v+w*g),r)
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.r=f.gp(0)
a5.N(new A.o(u+a3*a2,v+w*a2),1.6,r)}a1=j[i]
$.Q()
a2=new A.ao(B.O,B.M,B.R,B.S,B.P)
a2.r=B.c.j(k).gp(0)
a5.N(a1,5*d,a2)}},
aD(d){return d.b!==this.b}}
C.bdk.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=a5.a/2,a0=a5.b/2,a1=new A.o(d,a0),a2=d-4,a3=a2-22
$.Q()
w=A.K()
w.b=B.a9
w.c=14
v=f.d
w.r=(v?f.r:B.b0).j(0.22).gp(0)
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
t=$.Q().r
q=x.g
p=new A.aF(t,B.ai,e,e,A.a([],q))
p.E(new A.jR(A.bX(a1,a3)))
a4.mQ(0,p)
p=A.bX(a1,a3)
o=A.K()
o.sav(D.eyY.aK(0,A.bX(a1,a3)))
a4.ar(p,o)
n=B.j.D(f.b,0,1)
if(n>0.004){a0+=a3
m=a0-a3*2*n
l=v?5.2:1.8
q=A.a([],q)
k=new A.aF(t,B.ai,e,e,q)
j=d-a3
a0+=4
k.E(new A.aZ(j,a0))
for(t=d+a3,p=f.c*3.141592653589793,o=p*2,p*=2.2,i=l*0.42;j<=t;j+=3){h=(j-d)/a3*3.141592653589793
h=new A.aq(j,m+Math.sin(h*2+o)*l+Math.sin(h*3.1-p)*i)
q.push(h)
g=k.f
if(g!=null)h.ak(g)
k.ab()}k.E(new A.aq(t,a0))
k.E(new A.bv())
$.Q()
d=A.K()
a0=x.O
t=f.e
a0=v?A.a([f.f.j(0.55),t.j(0.78),f.r.j(0.92)],a0):A.a([t.j(0.22),D.eW.j(0.34),B.cG.j(0.62)],a0)
d.sav(new A.a9(B.b7,B.b8,B.x,a0,e,e).aK(0,A.bX(a1,a3)))
a4.af(k,d)
d=A.K()
d.b=B.a9
d.c=2
d.r=B.c.j(v?0.28:0.14).gp(0)
a4.af(k,d)}w.restore()},
aD(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.aDb.prototype={
S(){var w=$.aw()
return new C.aDc(new A.au(B.aw,w),new A.au(B.aw,w))},
bjR(d,e){return this.w.$2$cloudRequest(d,e)}}
C.aDc.prototype={
t(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a3()},
ml(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
cD3(d){this.a.bjR(d,!0)
this.ml("Deposit submitted. Admin will review your payment proof.")
this.m(new C.dsg())},
cBE(){var w,v,u=this,t=A.d2(u.d.a.a)
if(t==null||t<=0){u.ml("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
A.hy(w,new C.ard(v.d,t,u.gcD2(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cJH(){var w,v,u,t,s=this,r=s.d,q=A.d2(r.a.a)
if(q==null||q<=0){s.ml("Enter an amount to withdraw.")
return}if(q<10){s.ml("Minimum withdrawal is $"+A.dF(10)+".")
return}w=s.a.d.d
if(q>w){s.ml("Insufficient balance. You have $"+A.dF(w)+".")
return}w=s.e
v=C.hDh(w.a.a)
if(v.length===0){s.ml("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.bjR(new A.d7("wd_"+1000*Date.now(),s.a.d.a,q,B.f0,B.l_,"Withdrawal to $"+v+" \u2014 Fee: $"+A.dF(u)+" \u2014 You receive: $"+A.dF(q-u),null,null,B.dE,new A.V(Date.now(),0,!1)),!0)
s.ml("Withdrawal submitted \u2014 waiting for admin approval.")
r.bP(0,B.ce)
w.bP(0,B.ce)
s.m(new C.dsh())},
cGj(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,A.J)(w),++s){r=w[s]
if(r.x!==B.cv||!this.aYK(r)||A.hgH(r))continue
q=r.d
p=q===B.f0||q===B.ki||q===B.eD
q=r.c
if(p)t+=q
else u+=q}return new A.bqS(u,t)},
B(d){var w,v,u,t=this,s=null,r=t.cGj(),q=t.a.r,p=new A.Y(q,new C.dsi(),A.U(q).k("Y<1>")).gI(0)
q=t.a
w=q.c
q=q.x
v=A.a([D.eW.j(0.24),B.T.j(0.72)],x.O)
u=A.L(D.eW.j(0.38),B.r,1)
q=A.bT4(!1,w,"WALLET",A.hb(A.aP(!1,s,!0,A.q(B.A,A.X(W.aqb,D.eW,s,s,s,18),B.f,s,s,new A.p(s,s,u,s,s,new A.a9(B.aA,B.aE,B.x,v,s,s),B.a7),s,40,s,s,s,s,s,40),B.cR,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),s,"Back up wallet",s,s))
v=t.bGf(r.a,r.b,p)
u=x.p
w=A.A(A.a([t.as7(B.wM,"Deposit",0),t.as7(B.uP,"Withdraw",1),t.as7(B.hy,"History",2)],u),B.l,s,B.qU,B.i,0,s,s)
return A.e9(A.bn(!1,A.cc(A.x(A.a([q,B.bz,v,B.d8,w,B.d8,A.ow(t.f===2?t.c1K():t.c7v(),B.iu,A.pR(),B.b1,B.b1,A.LB())],u),B.al,s,B.e,B.i,0,B.p),B.t,s,B.y,s,D.bEo,s,s,B.ah),!0,!1,B.ag,!0,!0),B.BE,!0)},
bGf(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.a.i(i.a.e)
if(B.a.q(g,"@")){w=B.a.co(g,"@")
v=B.a.aC(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+B.a.b2(g,w)}else v=g
w=A.m(26)
u=A.ap(h,i.aBB(220,0.1),h,h,h,-60,-70,h)
t=A.ap(-90,i.aBB(200,0.07),h,h,h,30,h,h)
s=A.ap(-60,i.aBB(150,0.05),h,h,-40,h,h,h)
r=A.m(26)
r=A.bR(0,A.c2(h,new A.p(h,h,A.L(B.c.j(0.18),B.r,1),r,h,h,B.n),B.bj),0,0,0)
q=A.m(6)
p=x.p
q=A.A(A.a([A.q(h,A.b4(h,h,h,new C.bcK(h),B.az),B.f,h,h,new A.p(h,h,h,q,h,D.c8j,B.n),h,28,h,h,h,h,h,38),B.b5,D.h1d],p),B.l,h,B.e,B.i,0,h,h)
o=A.d("Available balance",h,h,h,h,h,h,A.l(h,h,B.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,B.V,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=A.ev(B.a6,C.arY(new C.ds2(i),D.fzj,i.a.d.a),B.f,B.e2)
m=A.a([A.E(i.aR7(B.qH,"In",d),1),A.E(i.aR7(B.rZ,"Out",e),1)],p)
if(f>0){l=B.cY.j(0.22)
k=A.m(99)
j=A.L(B.j5.j(0.6),B.r,1)
m.push(A.q(h,A.d(""+f+" pending",h,h,h,h,h,h,D.fuC,h,h,h),B.f,h,h,new A.p(l,h,j,k,h,h,B.n),h,h,h,h,B.or,h,h,h))}return new A.fH(1.62,A.by(w,new A.an(B.a0,h,B.ad,B.t,A.a([D.eyb,u,t,s,r,new A.D(A8.rW,A.x(A.a([q,B.b5,o,B.bH,n,B.b5,A.A(m,B.l,h,B.e,B.i,0,h,h),B.an,A.d(v,h,1,B.a2,h,h,h,A.l(h,h,B.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,B.a8,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),B.E,h,B.e,B.i,0,B.p),h)],p),h),B.aq),h)},
aBB(d,e){var w=null
return A.q(w,w,B.f,w,w,new A.p(w,w,A.L(B.c.j(e),B.r,22),w,w,w,B.a7),w,d,w,w,w,w,w,d)},
aR7(d,e,f){var w=null,v=B.c.j(0.16)
return A.A(A.a([A.q(w,A.X(d,B.c,w,w,w,13),B.f,w,w,new A.p(v,w,w,w,w,w,B.a7),w,22,w,w,w,w,w,22),B.bm,new A.dl(1,B.cm,A.ev(B.a6,A.d(e+"  $"+A.dF(f),w,w,w,w,w,w,B.oY,w,w,w),B.f,B.e2),w)],x.p),B.l,w,B.e,B.i,0,w,w)},
as7(d,e,f){var w=null,v=this.f===f,u=v?D.c9F:new A.a9(B.a6,B.aa,B.x,A.a([B.c.j(0.08),B.c.j(0.03)],x.O),w,w),t=A.L(v?B.c.j(0.6):D.eW.j(0.25),B.r,1),s=v?A.a([new A.ac(0,B.G,B.aC.j(0.45),B.H,18)],x.V):w
u=A.cT(w,A.X(d,v?D.afs:D.eW,w,w,w,26),w,w,B.cw,new A.p(w,w,t,w,s,u,B.a7),B.GD,w,62,w,w,w,w,w,62)
return A.aA(B.c5,new A.a5(92,w,A.x(A.a([u,B.aTE,A.d(e,w,w,w,w,w,w,A.l(w,w,v?B.c:B.aT,w,w,w,w,w,w,w,w,12.5,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,B.p),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ds1(this,f),w,w,w,w,w,w,!1,B.a4)},
c7v(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=A.d2(a1.a.a)
if(a2==null)a2=0
w=a0?D.eW:B.co
v=a2>0
u=new C.dsd(e,w)
t=new C.dsc()
s=e.f
r=A.m(26)
q=x.O
p=A.a([w.j(0.1),B.uj,B.uj],q)
o=A.L(w.j(0.22),B.r,1)
n=x.V
m=A.a([new A.ac(0,B.G,B.w.j(0.35),B.f_,22)],n)
l=w.j(0.15)
l=A.q(d,A.X(a0?B.wM:B.uP,w,d,d,d,18),B.f,d,d,new A.p(l,d,d,d,d,d,B.a7),d,34,d,d,d,d,d,34)
k=A.E(A.d(a0?"Add money":"Take money out",d,d,d,d,d,d,B.fD,d,d,d),1)
j=B.c.j(0.06)
i=A.m(99)
h=x.p
i=A.A(A.a([l,B.au,k,A.q(d,A.A(A.a([A.X(B.hZ,w,d,d,d,14),A.d("Cash App",d,d,d,d,d,d,A.l(d,d,B.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,B.I,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),B.l,d,B.e,B.Q,0,d,d),B.f,d,d,new A.p(j,d,d,i,d,d,B.n),d,d,d,d,B.lh,d,d,d)],h),B.l,d,B.e,B.i,0,d,d)
l=A.d("$",d,d,d,d,d,d,A.l(d,d,v?w:B.bW,d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=A.a([new A.uU(A.ag("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=A.A(A.a([new A.D(B.hW,l,d),B.de,A.aYj(new A.cQ(D.b6o,A.aM(d,B.Z,!1,d,!0,B.t,d,A.aO(),a1,w,d,d,d,d,2,A.bt(d,B.eK,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,A.l(d,d,B.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.ak,d,d,k,d,d,B.e9,d,d,d,1,d,d,!1,"\u2022",d,new C.dsb(e),d,d,d,!1,d,d,!1,d,!0,d,B.ac,d,d,d,d,d,d,d,d,d,d,d,D.fC9,!0,B.K,d,B.ao,d,d,d,d),d),d)],h),B.E,d,B.bb,B.i,0,d,d)
a1=v?120:60
a1=A.at(A.cT(d,d,d,d,B.b1,new A.p(d,d,d,A.m(99),d,new A.a9(B.a6,B.aa,B.x,A.a([w.j(0),w,w.j(0)],q),d,d),B.n),B.a3,d,3,d,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+A.dF(10)+" \xb7 admin sends it to your Cash App."
q=A.d(q,d,d,d,d,d,d,A.l(d,d,B.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,B.a8,d,1.35,!0,d,d,d,d,d,d,d,d),B.K,d,d)
l=A.a([],h)
j=a0?D.cdy:D.csi
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=A.a([i,B.bz,k,B.an,a1,B.U,q,B.aB,A.A(l,B.l,d,B.e,B.i,0,d,d)],h)
if(!a0){q=B.c.j(0.04)
l=A.X(B.hZ,w,d,d,d,d)
k=A.l(d,d,B.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,B.V,d,d,!0,d,d,d,d,d,d,d,d)
l=A.a([B.aB,A.aM(d,B.Z,!1,d,!0,B.t,d,A.aO(),e.e,d,d,d,d,d,2,A.bt(d,d,d,d,d,d,d,d,!0,new A.b6(4,A.m(16),new A.ay(B.c.j(0.08),1,B.r,-1)),d,d,d,d,d,q,!0,d,d,d,d,new A.b6(4,A.m(16),new A.ay(w,1,B.r,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.ak,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.ac,d,d,d,d,d,d,d,d,d,d,d,B.ng,!0,B.a5,d,B.ao,d,d,d,d)],h)
if(v){q=B.c.j(0.04)
k=A.m(16)
B.d.v(l,A.a([B.af,A.q(d,A.x(A.a([t.$2("Amount","$"+A.dF(a2)),t.$3$color("Fee (15%)","\u2212 $"+A.dF(a2*0.15),B.eU),A.iK(B.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+A.dF(a2*0.85),!0,D.eW)],h),B.l,d,B.e,B.i,0,B.p),B.f,d,d,new A.p(q,d,d,k,d,d,B.n),d,d,d,d,B.iv,d,d,d)],h))}B.d.v(a1,l)}a1.push(B.aQ)
q=A.m(18)
l=a0?B.SK:B.a4n
n=A.a([new A.ac(0,B.G,(a0?B.b2:B.dJ).j(0.45),B.dv,18)],n)
k=a0?e.gcBD():e.gcJG()
j=A.X(a0?B.a2k:B.lP,d,d,d,d,20)
if(a0)i=v?"Deposit $"+A.dF(a2):"Deposit funds"
else i=v?"Withdraw $"+A.dF(a2):"Request withdrawal"
a1.push(new A.a5(d,54,A.c2(A.lS(j,A.d(i,d,d,d,d,d,d,B.nf,d,d,d),k,A.ft(d,d,B.L,d,d,d,d,d,d,B.c,d,d,d,B.L,new A.b9(A.m(18),B.a1),d,d,d,d,d)),new A.p(d,d,d,q,n,new A.a9(B.a6,B.aa,B.x,l,d,d),B.n),B.bj),d))
return A.q(d,A.x(a1,B.al,d,B.e,B.i,0,B.p),B.f,d,d,new A.p(d,d,o,r,m,new A.a9(B.b7,B.b8,B.x,p,B.Dv,d),B.n),d,d,new A.bJ("form"+s,x.W),d,B.yN,d,d,d)},
c1K(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=A.U(a2).k("Y<1>"),a4=A.C(new A.Y(a2,new C.ds5(a0),a3),a3.k("M.E"))
B.d.aZ(a4,new C.ds6())
w=B.a.i(a0.a.e.toLowerCase())
a2=A.T(x.N,x.o)
a3=$.fL7
a3=a3==null?a1:a3.$0()
a3=J.aU(a3==null?B.iy:a3)
while(a3.C()){v=a3.gR(a3)
u=v.a
if(u.length!==0&&B.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,A.J)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("b8<2>")
a2=A.C(new A.b8(a2,a3),a3.k("M.E"))
r=C.ijM(a2,A.LU(a0.a.e,new C.ds7(a0)))
a2=A.m(24)
a3=A.L(B.c.j(0.07),B.r,1)
v=A.m(99)
u=A.m(99)
q=x.p
u=A.a([A.A(A.a([D.bJn,A.aP(!1,v,!0,A.q(a1,D.f8t,B.f,a1,a1,new A.p(a1,a1,A.L(D.eW.j(0.4),B.r,1),u,a1,a1,B.n),a1,a1,a1,a1,B.mc,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.ds8(a0),a1,a1,a1,a1,a1,a1,a1)],q),B.l,a1,B.e,B.i,0,a1,a1),B.X],q)
if(a4.length===0)u.push(new A.D(D.bAT,A.x(A.a([A.X(B.Hi,B.c.j(0.25),a1,a1,a1,40),B.X,D.fYM],q),B.l,a1,B.e,B.i,0,B.p),a1))
else{v=A.a([],q)
for(p=A.cW(a4,0,A.dA(a0.r,"count",x.S),A.U(a4).c),o=p.$ti,p=new A.bQ(p,p.gI(0),o.k("bQ<ak.E>")),o=o.k("ak.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===B.f0||k===B.ki||k===B.eD
if(l===B.cv)i=j?B.c0:D.eW
else i=l===B.dE?B.j5:B.fh
h=j?"-":"+"
l=B.c.j(0.06)
k=i.j(0.14)
g=new A.ay(i.j(0.4),1,B.r,-1)
k=A.q(a1,A.X(j?B.uP:B.wM,i,a1,a1,a1,19),B.f,a1,a1,new A.p(k,a1,new A.bG(g,g,g,g),a1,a1,a1,B.a7),a1,42,a1,a1,a1,a1,a1,42)
f=A.d(a0.bWI(n),a1,a1,a1,a1,a1,a1,B.ja,a1,a1,a1)
e=C.hui(n.y)
d=B.c.j(0.5)
f=A.a([f,B.bH,A.d(e,a1,a1,a1,a1,a1,a1,new A.G(!0,d,a1,a1,a1,a1,11,B.a8,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)],q)
e=n.f
if(B.a.i(e==null?"":e).length!==0){e.toString
d=B.c.j(0.4)
f.push(A.d(e,a1,1,B.a2,a1,a1,a1,new A.G(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))}if(m!=null&&n.x!==B.kE)f.push(new A.D(E.alf,new A.CY(B.bG,5,4,B.bs,A.a([a0.aQ0("Before",m.b),a0.aQ0("After",m.a)],q),a1),a1))
m=A.x(f,B.E,a1,B.e,B.i,0,B.p)
f=n.c
f=f===0?"\u2014":h+"$"+A.dF(f)
f=A.d(f,a1,a1,a1,a1,a1,a1,new A.G(!0,i,a1,a1,a1,a1,15,B.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
e=i.j(0.14)
d=new A.aN(99,99)
n=C.hBT(n)
v.push(A.q(a1,new A.c6(B.aL,B.e,B.i,B.l,a1,B.p,a1,0,A.a([k,B.bd,new A.bz(1,B.bc,m,a1),B.ae,A.x(A.a([f,B.ax,A.q(a1,A.d(n,a1,a1,a1,a1,a1,a1,new A.G(!0,i,a1,a1,a1,a1,9.5,B.I,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.f,a1,a1,new A.p(e,a1,a1,new A.be(d,d,d,d),a1,a1,B.n),a1,a1,a1,a1,B.yR,a1,a1,a1)],q),B.dL,a1,B.e,B.i,0,B.p)],q),a1),B.f,a1,a1,new A.p(a1,a1,new A.bG(B.a1,B.a1,new A.ay(l,1,B.r,-1),B.a1),a1,a1,a1,B.n),a1,a1,a1,a1,B.qA,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(A.ho(D.c_5,A.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,B.cg,a1,a1,a1),new C.ds9(a0),A.fu(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.eW,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
B.d.v(u,v)}return A.q(a1,A.x(u,B.al,a1,B.e,B.i,0,B.p),B.f,a1,a1,new A.p(B.uj,a1,a3,a2,a1,a1,B.n),a1,a1,D.hq4,a1,D.bDf,a1,a1,a1)},
aQ0(d,e){var w=null,v=B.c.j(0.05),u=A.m(7),t=A.L(B.c.j(0.1),B.r,1),s=A.cP(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=A.dF(e)
return A.q(w,A.Z_(A.cP(A.a([s,A.cP(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.fzu,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.n0,w,w,w)},
aYK(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(B.a.q(w,"clock-in session started"))return!1
v=d.d
if(v===B.eD)return d.c>0
if(A.tn(d))return!1
if(v===B.fP||v===B.f0)return!0
if(v===B.p3||v===B.ki)return!0
if(v===B.kF)return!0
if(v===B.h0)return B.a.q(w,"clock-in")||d.c>0
return!1},
bWI(d){var w,v=d.f
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
C.bcK.prototype={
a5(d,e){var w,v,u,t
$.Q()
w=A.K()
w.r=D.bhK.j(0.55).gp(0)
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
C.bxP.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null
for(w=a2.b,v=this.b,u=v*6.283185307179586,t=a2.a,s=0+t,r=x.O,q=0;q<3;++q){p=w*(0.2+0.25*q)+Math.sin(u+q*2)*14-40
o=new A.a1(0,p,s,p+80)
n=[B.ba,B.hp,B.bx][q]
$.Q()
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.sav(new A.a9(B.b7,B.b8,B.x,A.a([n.j(0),n.j(0.1),n.j(0)],r),a0,a0).aK(0,o))
a1.ar(o,p)}for(m=0;m<46;++m){s=m*12.9898
l=Math.sin(s+78.233)*43758.5453
l=(l-Math.floor(l))*t
k=Math.sin(s+156.466)*43758.5453
j=(k-Math.floor(k))*w
i=0.25+0.75*(0.5+0.5*Math.sin(u*(1+B.o.F(m,3))+m))
k=Math.sin(s+234.699)*43758.5453
s=Math.floor(k)
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.r=B.c.j(0.55*i).gp(0)
a1.N(new A.o(l,j),0.7+(k-s)*1.5,r)
if(B.o.F(m,9)===0){h=new A.ao(B.O,B.M,B.R,B.S,B.P)
h.r=B.pg.j(0.35*i).gp(0)
h.c=1
a1.ah(new A.o(l-4,j),new A.o(l+4,j),h)
a1.ah(new A.o(l,j-4),new A.o(l,j+4),h)}}for(u=-t*0.35,s=w*0.2,r=t*0.08,p=-w*0.02,v*=2,m=0;m<2;++m){h=B.j.F(v+m*0.5,1)
if(h>0.35)continue
q=h/0.35
g=t*(0.75-m*0.4)+u*q
f=w*(0.1+m*0.12)+s*q
$.Q()
e=new A.ao(B.O,B.M,B.R,B.S,B.P)
e.r=B.c.j(0.7*(1-q)).gp(0)
e.c=1.6
e.d=B.bu
a1.ah(new A.o(g+r,f+p),new A.o(g,f),e)}for(u=t*0.62,w*=0.36,m=0;m<4;++m){h=B.j.F(v+m*0.25,1)
t=B.pg.j(0.5*Math.sin(h*3.141592653589793))
d=new A.iH(new A.en("z",a0,a0,B.cJ,a0,a0,a0,a0,a0,a0,new A.G(!0,t,a0,a0,a0,a0,12+h*14,B.u,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)),B.a5,B.bX,new A.jg(1),a0,a0,a0,a0,B.bY,a0,B.cs)
d.e5()
d.a5(a1,new A.o(u+Math.sin(h*6.283185307179586+m)*12+m*8,w-h*90))}},
aD(d){return d.b!==this.b}}
C.aMI.prototype={
aY(){this.b5()
this.b4()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.bzO.prototype={}
C.b1d.prototype={}
C.a0A.prototype={
S(){return new C.aFy(new A.au(B.aw,$.aw()))},
cYn(d,e){return this.d.$2(d,e)}}
C.aFy.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a3()},
b1y(){var w=this,v=B.a.i(w.d.a.a),u=A.ag("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.m(new C.ej3(w))
return}u=w.c
u.toString
A.a6(u,!1).O(null)
w.a.cYn(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=A.aH(a0,B.eQ,e).w
e=A.aH(a0,B.eo,e).w
w=A.at(A.q(f,f,B.f,f,f,new A.p(B.aU,f,f,A.m(2),f,f,B.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=A.A(A.a([A.q(f,D.bZr,B.f,f,f,new A.p(f,f,f,f,A.a([new A.ac(0,B.G,B.fd.j(0.5),B.H,18)],v),D.asM,B.a7),f,52,f,f,f,f,f,52),B.ex,A.E(A.x(A.a([D.fLR,B.bH,A.d(g.a.c,f,1,B.a2,f,f,f,B.ne,f,f,f)],u),B.E,f,B.e,B.i,0,B.p),1),A.aG(f,f,f,f,D.c_k,f,f,f,new C.ej6(a0),f,f,f,f,f,f)],u),B.l,f,B.e,B.i,0,f,f)
s=g.b8x(B.f5,"You",B.co)
r=B.aS.j(0.15)
q=A.m(99)
q=A.A(A.a([s,new A.D(B.kt,A.q(f,D.fQ1,B.f,f,f,new A.p(r,f,A.L(B.aS.j(0.6),B.r,1),q,f,f,B.n),f,f,f,f,B.hd,f,f,f),f),g.b8x(B.wH,"Your friend",B.bT)],u),B.l,f,B.e,B.i,0,f,f)
r=B.c.j(0.06)
s=A.m(16)
p=B.c.j(0.12)
o=A.m(16)
n=g.f
if(n.length===0)n=f
o=A.aM(f,B.Z,!0,f,!0,B.t,f,A.aO(),g.d,f,f,f,f,f,2,A.bt(f,f,f,f,f,f,f,f,!0,new A.b6(4,s,new A.ay(p,1,B.r,-1)),f,f,f,f,n,r,!0,f,f,f,f,new A.b6(4,o,D.b5a),f,f,f,f,f,f,f,f,Q.EL,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.c1P,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,f,!1,f,B.ak,f,f,f,f,f,B.mA,f,f,f,1,f,f,!1,"\u2022",f,new C.ej7(g),f,new C.ej8(g),f,!1,f,f,!1,f,!0,f,B.ac,f,f,f,f,f,f,f,f,f,f,f,B.jv,!0,B.a5,f,B.ao,f,f,f,f)
r=A.a([],u)
for(m=0;m<4;++m){l=D.cnj[m]
s=new A.aN(14,14)
p=g.e===l
n=p?D.asL:f
p=p?f:B.c.j(0.06)
k=new A.ay(g.e===l?B.aD:B.bA,1,B.r,-1)
j=""+l
i=A.d(j,f,f,f,f,f,f,B.di,f,f,f)
j=l===1?"game":"best of "+j
h=B.c.j(0.7)
s=A.a([new A.bz(1,B.bc,A.aA(f,A.cT(f,A.x(A.a([i,A.d(j,f,f,f,f,f,f,new A.G(!0,h,f,f,f,f,10,B.V,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f)],u),B.l,f,B.e,B.i,0,B.p),f,f,B.b1,new A.p(p,f,new A.bG(k,k,k,k),new A.be(s,s,s,s),f,n,B.n),B.eH,f,f,f,f,B.fg,f,f,f),B.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.ej9(g,l),f,f,f,f,f,f,!1,B.a4),f)],u)
if(l!==7)s.push(B.ae)
B.d.v(r,s)}s=A.A(r,B.l,f,B.e,B.i,0,f,f)
r=A.A(A.a([A.X(B.lO,B.c.j(0.5),f,f,f,15),B.bm,A.E(A.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,A.l(f,f,B.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),B.l,f,B.e,B.i,0,f,f)
p=A.m(18)
v=A.a([new A.ac(0,B.G,B.bD.j(0.4),B.cA,18)],v)
n=g.e
j=n===1?"":"s"
return new A.D(new A.R(0,0,0,d.f.d+e.r.d),A.q(f,A.x(A.a([w,B.aQ,t,B.bz,q,B.bz,D.fU6,B.an,o,B.aQ,D.fYA,B.U,s,B.aB,r,B.aQ,new A.a5(f,54,A.c2(A.ho(D.ar_,A.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,B.fD,f,f,f),g.gcdh(),f),new A.p(f,f,f,p,v,D.c8v,B.n),B.bj),f)],u),B.al,f,B.e,B.Q,0,B.p),B.f,f,f,D.b7b,f,f,f,f,D.bEB,f,f,f),f)},
b8x(d,e,f){var w=null,v=f.j(0.1),u=A.m(16),t=A.L(f.j(0.45),B.r,1)
return A.E(A.q(w,A.x(A.a([A.X(d,f,w,w,w,24),B.ax,A.d(e,w,w,w,w,w,w,B.KR,w,w,w)],x.p),B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.fg,w,w,w),1)}}
C.pt.prototype={}
C.bsF.prototype={
a5(d,e){var w,v,u,t,s=null,r=e.a/2,q=new A.o(r,e.b/2),p=r-4
for(w=0;w<37;++w){$.Q()
v=new A.ao(B.O,B.M,B.R,B.S,B.P)
if(w===0)r=B.be
else r=(w&1)===0?B.bC:B.T
v.r=r.gp(0)
d.cB(A.bX(q,p),w*2*3.141592653589793/37-1.5707963267948966,0.16981581911296179,!0,v)}$.Q()
r=A.K()
r.r=B.ha.gp(0)
r.b=B.a9
r.c=8
d.N(q,p,r)
r=A.K()
r.r=B.aS.gp(0)
d.N(q,p*0.22,r)
r=this.b
if(r!=null){u=A.fq(s,B.cs,s,s,s,A.cP(s,s,s,s,s,s,s,s,s,B.aWa,A.w(r)),B.a5,B.bX,s,B.dz,B.bY)
u.e5()
r=u.b
t=r.c
r=r.a.c
u.a5(d,q.aJ(0,new A.o(t/2,r.gba(r)/2)))}},
aD(d){return d.b!=this.b}}
C.Fo.prototype={
a7(){return"NgmyProMoveResult."+this.b}}
C.asy.prototype={
gkq(){var w=this.d
w=w==null?null:w.a
return w!==!1},
brQ(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.h8m("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.c2A()
w=s.gkq()
v=s.d
s.c=w?"You ("+v.b+") vs NGMY \u2014 capture all opponent discs":v.b+" vs "+v.c+" \u2014 capture all discs"
break
case"tic_tac_go":s.b=1
s.at=A.c_(9,"",!1,x.N)
s.ax=!0
if(s.gkq())w="You are X vs NGMY (O) \u2014 get 3 in a row"
else{w=s.d
w=w.b+" (X) vs "+w.c+" (O)"}s.c=w
break
case"blackjack_vegas":s.b=1
w=x.t
s.ay=A.a([1+e.aw(10),1+e.aw(10)],w)
s.ch=A.a([1+e.aw(10),1+e.aw(10)],w)
s.CW=!1
s.c="Beat the dealer \u2014 don't bust over 21"
break
case"roulette_euro":s.b=1
s.cx=null
s.c="Pick a number \u2014 spin the wheel"
break
case"slots_jackpot":s.b=1
s.db=A.a([e.aw(6),e.aw(6),e.aw(6)],x.t)
s.c="Match 3 symbols for jackpot"
break
case"billiards_snooker":s.b=1
s.dx=e.ai()*3.141592653589793*2
s.c=s.gkq()?"Aim and shoot \u2014 beat NGMY on the snooker table":"Aim and shoot \u2014 pocket balls"
break
case"connect_four_pro":s.b=1
u=J.e2(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=A.c_(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gkq())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.b_M(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aID.h(0,d)
s.c=w==null?"Play to earn":w}},
bds(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gkq()
if(o)return
o=x.N
s.x=A.a3(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b7(w,new C.cjE(),o)
v=A.C(v,v.$ti.k("ak.E"))
s.at=v
if(v.length<9){v=A.C(v,o)
B.d.v(v,A.c_(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=B.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===B.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cGX(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.asE(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b7(t,new C.cjF(),x.L)
o=A.C(o,o.$ti.k("ak.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)B.d.J(v,A.c_(7,0,!1,o))}if(A.iU(e.h(0,q)))o=A.ee(e.h(0,q))
else{o=A.ca(A.w(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bIB(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.asE(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b7(t,new C.cjG(),x.L)
o=A.C(o,o.$ti.k("ak.E"))
s.y=o}if(A.iU(e.h(0,p)))o=A.ee(e.h(0,p))
else{o=A.ca(A.w(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bJT(e,f)
o=J.z(e.h(0,r),!0)
s.e=o
if(o)s.asE(e,f)
break}},
cS0(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=A.a3(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",A.bq(w.at,!0,q))
o.n(0,"turnEmail",w.aDJ())
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
q=A.C(new A.N(q,new C.cjI(),p),p.k("ak.E"))
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
q=A.C(new A.N(q,new C.cjJ(),p),p.k("ak.E"))
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
default:q=A.dN(o,q,p)
q.n(0,v,w.e)
q.n(0,s,w.w)
return q}},
aDJ(){var w,v,u,t=this
if(t.gkq()){if(t.ax){w=t.d
w=w==null?null:w.d
if(w==null)w=""}else w="ngmy@system"
return w}w=t.x.h(0,"playerXEmail")
if(w==null){w=t.d
w=w==null?null:w.d}v=B.a.i(J.k(w==null?"":w).toLowerCase())
w=t.x.h(0,"playerOEmail")
if(w==null){w=t.d
w=w==null?null:w.e}u=B.a.i(J.k(w==null?"":w).toLowerCase())
return t.ax?v:u},
asE(d,e){var w,v=this,u=B.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
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
cGX(d,e){var w,v,u,t,s,r="playerXEmail"
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
bIB(d,e){var w,v,u,t,s
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
bJT(d,e){var w,v,u,t,s,r,q
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
Uz(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gkq())return s
w=B.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return B.a.i(J.k(s==null?u.aDJ():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
c2A(){var w,v,u=this,t=J.e2(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=A.ir(8,new C.cjB(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
b_M(d){var w=20+d.aw(80),v=w+10+d.aw(50),u=4+d.aw(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bP(0,B.ce)},
d18(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gkq())w=1
else{v=r.d
v=v==null?null:v.d
w=r.Uz(q,v==null?"":v)?r.z:-1}if(!r.gkq()){v=r.d
v=v==null?null:v.d
v=!r.Uz(q,v==null?"":v)}else v=!1
if(v)return!1
u=r.gkq()?r.z:w
if(!r.gkq()&&u!==r.z)return!1
t=J.t(r.y[d],e)
v=r.Q
if(v==null){if(t===r.z)v=!r.gkq()||t===1
else v=!1
if(v){r.Q=d
r.as=e}return!1}s=r.as
s.toString
if(d===v&&e===s){r.as=r.Q=null
return!1}if(Math.abs(d-v)===1&&Math.abs(e-s)===1&&t===0&&B.o.F(d+e,2)===1){J.aK(r.y[d],e,r.z)
J.aK(r.y[v],s,0)
r.as=r.Q=null
r.z=r.z===1?2:1
if(r.aac(2)){r.abN(1)
return!0}if(r.aac(1)){r.abN(2)
return!0}if(r.gkq()&&r.z===2){r.bEv(f)
if(r.aac(2)){r.abN(1)
return!0}if(r.aac(1)){r.abN(2)
return!0}}}return!1},
abN(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
t.e=!0
w=t.f=d===1
if(t.gkq()){if(w){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+s}else v="NGMY wins \u2014 your discs are gone"
v=t.w=v}else{v=t.d
if(w){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+s}t.a=w?1:0
t.c=v
return!0},
bEv(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=A.a([],x.B)
for(w=x.t,v=0;v<8;++v)for(u=0;u<8;++u){if(J.t(m.y[v],u)!==2)continue
for(t=[A.a([1,-1],w),A.a([1,1],w)],s=t.length,r=0;r<s;++r){q=t[r]
p=v+q[0]
o=u+q[1]
if(p>=0&&p<8&&o>=0&&o<8&&J.t(m.y[p],o)===0&&B.o.F(p+o,2)===1)l.push(A.a([v,u,p,o],w))}}w=l.length
if(w===0)return
n=l[d.aw(w)]
J.aK(m.y[n[2]],n[3],2)
J.aK(m.y[n[0]],n[1],0)
m.z=1},
aac(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)for(t=J.aU(w[u]);t.C();)if(t.gR(t)===d)return!1
return!0},
d1a(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.qX
if(!s.gkq()){w=s.d
w=w!=null&&!s.Uz("tic_tac_go",w.d)}else w=!1
if(w)return D.qX
if(s.gkq())v="X"
else{w=B.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===B.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.ako(v))return s.aVl(v,!0)
if(!B.d.q(s.at,""))return s.aVm()
s.ax=!s.ax
if(!s.gkq()){s.x.n(0,"turnEmail",s.aDJ())
s.c=s.b_f()
return D.qX}if(s.gkq()){t=s.coq(e)
if(t>=0){s.at[t]="O"
if(s.ako("O"))return s.aVl("O",!1)
if(!B.d.q(s.at,""))return s.aVm()
s.ax=!0}}s.c=s.gkq()?"Your turn \u2014 you are X":s.b_f()
return D.qX},
b_f(){var w=this.d
if(w==null)return"Take your turn"
return this.Uz("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aVl(d,e){var w,v,u=this
u.e=!0
u.f=e
u.r=!1
if(u.gkq()){if(e){w=u.d
w=w==null?null:w.b
w=(w==null?"You":w)+" wins with "+d+"!"}else w="NGMY wins with "+d+"!"
w=u.w=w}else{w=u.d
if(e){w=w==null?null:w.b
v=w==null?"You":w}else{w=w==null?null:w.c
v=w==null?"Opponent":w}w=u.w=v+" wins with "+d+"!"}u.c=w
u.a=e?1:0
return e?D.qY:D.Jd},
aVm(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.TF},
coq(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.ako("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.ako("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.dc7[u]
if(v[w].length===0)return w}return-1},
ako(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.dki[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a4l(d){return B.d.cJ(d,0,new C.cjH())},
cLw(d){this.ay.push(1+d.aw(10))
if(this.a4l(this.ay)>21)return!0
return!1},
cLx(d){var w,v,u,t=this
while(t.a4l(t.ch)<17)t.ch.push(1+d.aw(10))
t.CW=!0
w=t.a4l(t.ay)
v=t.a4l(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cRn(d,e){var w,v,u,t=this
if(t.e)return D.qX
if(!t.gkq()){w=t.d
w=w!=null&&!t.Uz("connect_four_pro",w.d)}else w=!1
if(w)return D.qX
if(t.gkq())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.qX
if(!t.ahu(d,w))return D.qX
if(t.aa0(t.fx))return t.aVj(t.fx,!0)
if(t.aQR())return t.aVk()
w=t.fx===1?2:1
t.fx=w
if(t.gkq()&&w===2){u=t.cnO(e)
if(u>=0){t.ahu(u,2)
if(t.aa0(2))return t.aVj(2,!1)
if(t.aQR())return t.aVk()
t.fx=1}}t.c=t.gkq()?"Your turn \u2014 drop a red disc":t.bIA()
return D.qX},
bIA(){var w=this.d
if(w==null)return"Drop a disc"
return this.Uz("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
ahu(d,e){var w
for(w=5;w>=0;--w)if(J.t(this.fr[w],d)===0){J.aK(this.fr[w],d,e)
return!0}return!1},
aQR(){for(var w=0;w<7;++w)if(J.t(this.fr[0],w)===0)return!1
return!0},
aVj(d,e){var w,v,u,t=this
t.e=!0
t.f=e
t.r=!1
w=d===1?"red discs":"gold discs"
if(t.gkq()){if(e){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+" wins with "+w+"!"}else v="NGMY wins with "+w+"!"
v=t.w=v}else{v=t.d
if(e){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+" wins with "+w+"!"}t.c=v
t.a=e?1:0
return e?D.qY:D.Jd},
aVk(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.TF},
cnO(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.t(r.fr[0],w)!==0)continue
r.ahu(w,2)
v=r.aa0(2)
r.bb7(w)
if(v)return w}for(w=0;w<7;++w){if(J.t(r.fr[0],w)!==0)continue
r.ahu(w,1)
u=r.aa0(1)
r.bb7(w)
if(u)return w}t=A.a([],x.t)
for(w=0;w<7;++w)if(J.t(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aw(s)]},
bb7(d){var w
for(w=0;w<6;++w)if(J.t(this.fr[w],d)!==0){J.aK(this.fr[w],d,0)
return}},
aa0(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.t(this.fr[w],v)!==d)continue
if(this.bIC(w,v,d))return!0}return!1},
bIC(d,e,f){var w,v,u,t,s=new C.cjA(this,d,e,f)
for(w=x.t,w=[A.a([0,1],w),A.a([1,0],w),A.a([1,1],w),A.a([1,-1],w)],v=w.length,u=0;u<v;++u){t=w[u]
if(s.$2(t[0],t[1])+s.$2(-t[0],-t[1])-1>=4)return!0}return!1},
bep(d){var w=this
if(B.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.b_M(d)}return w.a>=w.b}}
C.att.prototype={
S(){return new C.aGk(null,null)},
cXg(d){return this.e.$1(d)}}
C.aGk.prototype={
Y(){var w,v=this
v.a4()
w=A.bl(null,D.bA_,null,1,null,v)
w.fs(0,!0)
v.d=w
v.a.d.aW(0,v.gb2_())
v.azC()},
bz(d){var w
this.bJ(d)
w=this.a
if(d.c!==w.c){w.d.bP(0,B.ce)
this.azC()}},
azC(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.aiz(t,u)
C.aiz(t,u)
w.a.cXg(s)
w.a.toString
w.m(new C.eQ8())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
t(){var w,v=this
v.a.d.a6(0,v.gb2_())
w=v.d
w===$&&A.c()
w.t()
v.bA3()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.aiz(j,i),g=C.aiz(j,i),f=j.length,e=i.length,d=A.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&A.c()
u=new A.aN(1,1)
d.push(new A.wT(new A.d0(v,!1,A.q(l,l,B.f,l,l,new A.p(B.aS,l,l,new A.be(u,u,u,u),A.a([new A.ac(0,B.G,B.aS.j(0.6),B.H,6)],k),l,B.n),l,22,l,B.a0x,l,l,l,3),l),B.Ud,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new A.en(v,l,l,B.cJ,l,l,l,l,l,l,D.fwm))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=B.c.j(0.4)
q=B.cD}else if(s===t){r=B.b4
q=B.V}else{r=B.ay
q=B.I}d.push(new A.en(t,l,l,B.cJ,l,l,l,l,l,l,new A.G(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&A.c()
d.push(new A.wT(new A.d0(k,!1,A.q(l,l,B.f,B.aS,l,l,l,22,l,l,l,l,l,3),l),B.Ud,l,l))}p=f===0?0:B.j.V(h/f*100)
k=B.w.j(0.35)
v=A.m(12)
u=A.L(B.aU,B.r,1)
o=x.p
v=A.q(l,A.x(A.a([A.A(A.a([m.b1Z("Correct",""+h,B.be),B.ae,m.b1Z("Wrong / missed",""+(f-g),B.ay),B.b5,A.d(""+p+"% accuracy",l,l,l,l,l,l,D.fo2,l,l,l)],o),B.l,l,B.e,B.i,0,l,l),B.an,D.fR9],o),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.p(k,l,u,v,l,l,B.n),l,l,l,l,B.bh,l,l,l)
u=A.E(A.cc(new A.aaU(l,A.cP(d,l,l,l,l,l,l,l,l,l,l),l,l,l),B.t,l,B.y,l,l,l,l,B.ah),1)
k=m.a.d
g=A.l(l,l,B.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.w.j(0.35)
return A.x(A.a([v,B.af,u,B.X,A.aM(l,B.Z,!0,l,!0,B.t,l,A.aO(),k,l,l,l,l,l,2,A.bt(l,new A.b6(4,A.m(12),B.a1),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new A.b6(4,A.m(12),D.b53),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.y,!0,l,!0,l,!1,l,B.ak,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,B.ac,l,l,l,l,l,l,l,l,l,l,l,D.aW9,!0,B.a5,l,B.ao,l,l,l,l)],o),B.al,l,B.e,B.i,0,B.p)},
b1Z(d,e,f){var w=null,v=f.j(0.15),u=A.m(8)
return A.q(w,A.d(d+": "+e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.p(v,w,w,u,w,w,B.n),w,w,w,w,B.hd,w,w,w)}}
C.aOb.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
var z=a.updateTypes(["aB<~>()","~()","H(id,id)","~([y3?])","P(r9)","r9()","H(rO,rO)","P(rO)","H(rP,rP)","Qo(Z)","P(id)","cL(aeL)","a0h(Z)","a_o(Z)","afv(Z)","a7D(Z)","Oo(Z)","aen(Z,hq<ai<jo>>)","aem(Z,H)","v(r9)","rO(a8<@,@>)","~(Fo,asy)","Og(Z)","a8<n,@>(rO)","rP(a8<@,@>)","a8<n,@>(kF)","a8<n,@>(rP)","P(rP)","a8<n,@>(lY)","lY(@)","a8<n,@>(is)","is(@)","id(@)","aB<~>(kF)","a8<n,@>(id)","~(H,H)","id(id)","Wv(Z)","aB<P>(ai<id>)","a0g(Z)","~(id)","a12(Z)","Ww(Z)","n(id)","P(lY)","xE(bB<H,lY>)","acT(Z,H)","H(is,is)","acL(lY)","v(rV)","bz(JB)","a_N(Z)","~(d7{bumpWalletRevision:P,cloudRequest:P})","~(n,F,F,F)","F(V)","~(d7)","a0A(Z)","~(Fo)","n(n)","a13(Z)"])
C.cAm.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.cAn(r,w,s.b,v,s.d)
t=s.e
r.b=A.df(t,u)
v.r=new C.cAj(r)
v.e=new C.cAk(r,w)
v.f=new C.cAl(r,w,t,u)},
$S:0}
C.cAn.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.ir(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=A.ab(r)
u=A.cq(r)
s=v
q=u
p=A.H_(s,q)
if(p==null)p=new A.jS(s,q==null?A.HO(s):q)
t=p
o.d.hB(t.a,t.b)
return}o.d.J(0,w)}else{o.e.a(null)
o.d.J(0,null)}},
$S:43}
C.cAj.prototype={
$0(){this.a.b.a1(0)
return $.HD()},
$S:1647}
C.cAk.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.aac.$0()
this.a.b.a1(0)},
$S:0}
C.cAl.prototype={
$0(){var w,v=this,u=v.b,t=A.dv(0,0,u.gbgy(),0,0,0)
u.fX(0)
u=v.c
w=v.a
w.b=A.cy(new A.bd(u.a-t.a),new C.cAi(w,u,v.d))},
$S:0}
C.cAi.prototype={
$0(){var w=this.c
this.a.b=A.df(this.b,w)
w.$1(null)},
$S:0}
C.fbZ.prototype={
$1(d){var w=this.a
w.m(new C.fbY(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.fbY.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hq(D.ako,this.b,null,null,v.$ti.k("hq<1>"))},
$S:0}
C.fc0.prototype={
$2(d,e){var w=this.a
w.m(new C.fbW(w,d,e))},
$S:55}
C.fbW.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hq(D.ako,null,this.b,this.c,v.$ti.k("hq<1>"))},
$S:0}
C.fc_.prototype={
$0(){var w=this.a
w.m(new C.fbX(w))},
$S:0}
C.fbX.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hq(B.yp,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fP4.prototype={
$1(d){return d.a===this.a&&B.a.i(d.b.toLowerCase())===this.b&&d.x===B.cv},
$S:15}
C.fOX.prototype={
$1(d){return d},
$S:14}
C.fvs.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return A.q(B.A,new A.D(new A.R(u,0,u,0),A.d("NGMY",w,1,B.eP,w,!1,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,B.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),B.f,w,w,B.aep,w,v,w,w,w,w,w,v)},
$S:153}
C.fvp.prototype={
$3(d,e,f){return this.a.$0()},
$S:133}
C.fvq.prototype={
$2(d,e){var w,v=this,u=e.b
if(B.a.i(u==null?"":u).length!==0){u.toString
w=B.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return A.kD(w,B.A,v.d,new C.fvo(v.e),B.hf,v.c,!0,v.b,null,null,v.a)},
$S:1648}
C.fvo.prototype={
$3(d,e,f){return this.a.$0()},
$S:133}
C.fvr.prototype={
$3(d,e,f){return this.a.$0()},
$S:133}
C.djX.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.dk7.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dkp.prototype={
$1(d){return A.a3(d,x.N,x.z)},
$S:8}
C.dkq.prototype={
$1(d){return this.a.Kc()},
$S:11}
C.dkf.prototype={
$0(){var w=J.b7(this.b,new C.dke(),x.P)
w=A.C(w,w.$ti.k("ak.E"))
this.a.f=w},
$S:0}
C.dke.prototype={
$1(d){return A.a3(d,x.N,x.z)},
$S:8}
C.dkg.prototype={
$0(){var w=this.a,v=w.a.d.bb,u=A.U(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.dkd(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dkd.prototype={
$1(d){return A.a3(d,x.N,x.z)},
$S:8}
C.dki.prototype={
$0(){var w=this.a,v=w.a.d.bb,u=A.U(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.dkh(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dkh.prototype={
$1(d){return A.a3(d,x.N,x.z)},
$S:8}
C.dka.prototype={
$0(){var w=0,v=A.j(x.c),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.cf2(t.a.c)?2:3
break
case 2:w=4
return A.b(C.ar6(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.m(new C.dk8(t))
case 3:if(t.c!=null)t.m(new C.dk9(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:51}
C.dk8.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dk9.prototype={
$0(){return this.a.d++},
$S:0}
C.dkb.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dkc.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.dk2.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.irA(t.a.d.bb,J.k(J.t(u.b,"id")),"rejected")
t.a.bv()
w=2
return A.b(C.ain(t.a.d.bb),$async$$0)
case 2:w=3
return A.b(t.Kc(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dk3.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a7(s)
C.ifJ(t.a.d.bb,J.k(r.h(s,"id")),t.a.c.c)
t.a.bv()
w=2
return A.b(C.ain(t.a.d.bb),$async$$0)
case 2:w=3
return A.b(t.Kc(),$async$$0)
case 3:t.J0(B.d.dP(t.y,new C.dk0(s),new C.dk1(t)),J.k(r.h(s,"id")))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dk0.prototype={
$1(d){return d.a===J.t(this.a,"gameId")},
$S:z+4}
C.dk1.prototype={
$0(){return B.d.gH(this.a.y)},
$S:z+5}
C.dk4.prototype={
$1(d){return d.a===J.t(this.a,"gameId")},
$S:z+4}
C.dk5.prototype={
$0(){return B.d.gH(this.a.y)},
$S:z+5}
C.dk6.prototype={
$0(){return this.a.J0(this.b,J.k(J.t(this.c,"id")))},
$S:0}
C.dk_.prototype={
$0(){return this.a.c5W(this.b)},
$S:0}
C.djZ.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.is3(u,w.b,new C.djY(v,w))},
$S:0}
C.djY.prototype={
$2(d,e){return this.a.aiS(this.b,d,e)},
$S:579}
C.dko.prototype={
$2(d,e){if(d)return
this.a.aUY()},
$S:128}
C.dkm.prototype={
$2(d,e){var w=this.a
return new A.l8(C.b1c(w.a.c.a),new C.dkl(w,this.b,this.c),null,null,x.gH)},
$S:1650}
C.dkl.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=A.m(12)
v=A.m(12)
u=A.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return A.aI(!1,B.a3,!0,w,A.aP(!1,v,!0,new A.D(B.k3,A.bIJ(B.cY,A.X(B.hy,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dkk(this.a,d),t,t,t,t,t,t,t),B.f,this.b,0,t,t,t,t,t,B.aj)},
$S:1651}
C.dkk.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fLm(s.c.a,s.e).eN(new C.dkj())
w=2
return A.b(C.bG3(u.b,t.a.c.a),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dkj.prototype={
$1(d){},
$S:29}
C.dkn.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dYi.prototype={
$0(){var w=this.a
return A.LU(w.a.c.a,new C.dYh(w))},
$S:80}
C.dYh.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dYj.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&A.c()
u.bn=t.aj()
v.bv()
w.m(new C.dYg())},
$S:0}
C.dYg.prototype={
$0(){},
$S:0}
C.dYk.prototype={
$2(d,e){var w,v=this.a
if(!C.cf2(v.a.c)){if($.h8h.q(0,B.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.h8i(this.b,v.x,w)
return!1}C.ar6(v.a.c.a)}if(A.LU(v.a.c.a,new C.dYf(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aJe()
w=v.a
w.toString
w.hI(new A.d7(B.o.u(1000*Date.now()),v.a.c.a,d,B.ki,B.fu,e,null,null,B.cv,new A.V(Date.now(),0,!1)))
v.a.bv()
return!0},
$S:1652}
C.dYf.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dYl.prototype={
$3$bonus(d,e,f){var w,v=null,u=B.o.u(1000*Date.now()),t=this.a,s=t.a
s.hI(new A.d7(u,s.c.a,d,B.h0,B.fu,e,v,v,B.cv,new A.V(Date.now(),0,!1)))
t.a.bv()
w=f>0?"+$"+B.j.ad(d,2)+" total (includes $3 bonus for +3!)":"+$"+B.j.ad(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.va(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1653}
C.djR.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.djU.prototype={
$0(){return A.j0(this.a,null)},
$S:0}
C.djV.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.djW.prototype={
$1(d){var w=null,v=this.a,u=A.ft(w,w,v.e===d?B.be:A.a_(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,w,w,w,w,w,w,w,w)
return A.E(new A.D(B.f4,A.io(A.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.djT(v,d),u),w),1)},
$S:210}
C.djT.prototype={
$0(){var w=this.a
return w.m(new C.djS(w,this.b))},
$S:0}
C.djS.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dlJ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dlM.prototype={
$1(d){this.a.coM()
return null},
$S:11}
C.dlN.prototype={
$1(d){return this.a.cF3()},
$S:11}
C.dlO.prototype={
$1(d){this.a.a3p()
return null},
$S:11}
C.dlP.prototype={
$1(d){this.a.ajX()
return null},
$S:11}
C.dlQ.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c9)return
w=v.Q
w===$&&A.c()
if(w<=0){v.m(new C.dlK(v))
w=v.as
if(w!=null)w.a1(0)
v.FD()
return}v.m(new C.dlL(v))},
$S:11}
C.dlK.prototype={
$0(){return this.a.Q=0},
$S:0}
C.dlL.prototype={
$0(){var w=this.a,v=w.Q
v===$&&A.c()
w.Q=v-1
return v},
$S:0}
C.dkZ.prototype={
$0(){return this.a.bF=this.b},
$S:0}
C.dl_.prototype={
$0(){return this.a.bF=this.b},
$S:0}
C.dls.prototype={
$1(d){return this.a.go.q(0,d)},
$S:33}
C.dlt.prototype={
$0(){},
$S:0}
C.dle.prototype={
$0(){var w=this.b
w.c9=!0
w.cP="Waiting for both players\u2026"
w.cj="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.dlf.prototype={
$0(){var w=this.a
w.c9=!0
w.cP="Both players connected"
w.cj="Starting together in a moment\u2026"},
$S:0}
C.dlg.prototype={
$0(){var w=this.b
w.c9=!0
w.cP="Match starting together\u2026"
w.cj="Both players start in "+B.o.D(this.c,1,99)+"s"},
$S:0}
C.dlh.prototype={
$0(){this.b.c9=!1},
$S:0}
C.dli.prototype={
$0(){},
$S:0}
C.dkr.prototype={
$0(){var w=this.a,v=w.x2,u=A.w(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.dkY.prototype={
$0(){var w=this.a
w.at=this.b
w.b81()},
$S:0}
C.dlu.prototype={
$0(){},
$S:0}
C.dlD.prototype={
$0(){},
$S:0}
C.dlr.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.dlq(w))},
$S:0}
C.dlq.prototype={
$0(){var w=this.a
w.y=!0
w.z=new A.V(Date.now(),0,!1)},
$S:0}
C.dkW.prototype={
$0(){var w=this.a;++w.a_
w.y=!1
w.z=null},
$S:0}
C.dkX.prototype={
$0(){},
$S:0}
C.dly.prototype={
$1(d){return d==null},
$S:261}
C.dlz.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
B.d.cD(v.ch,w.d)},
$S:0}
C.dlA.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.dks.prototype={
$1(d){return d==null},
$S:261}
C.dkt.prototype={
$0(){return this.a.bn++},
$S:0}
C.dku.prototype={
$0(){},
$S:0}
C.dl7.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.dl8.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.J(0,t)
w=this.c
u.J(0,w)
if(v.ghP()&&D.nb.q(0,v.a.e)){u=v.id
u.J(0,t)
u.J(0,w);++v.fx}++v.k2
v.fy=A.a([],x.t)},
$S:0}
C.dl9.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.dl6(w))},
$S:12}
C.dl6.prototype={
$0(){var w=this.a
w.fy=A.a([],x.t)
w.k1=!1},
$S:0}
C.dlj.prototype={
$0(){return this.a.y1++},
$S:0}
C.dlk.prototype={
$0(){},
$S:0}
C.dll.prototype={
$0(){return this.a.y2++},
$S:0}
C.dlm.prototype={
$0(){},
$S:0}
C.dln.prototype={
$0(){return this.a.bb++},
$S:0}
C.dlo.prototype={
$0(){},
$S:0}
C.dlx.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.dla.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dlb.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.dlc.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.dld.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.dlB.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.dlC.prototype={
$0(){var w=this.a
w.ok.push(w.d.aw(4))
w.p2=0},
$S:0}
C.dkv.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dkw.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.dkx.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dky.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.dlv.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.dlw.prototype={
$0(){var w,v=this.a;++v.x2
v.aQD()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+A.w(Math.min(w+2,7))+" tiles"},
$S:0}
C.dl5.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.dlp.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dl3.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.dl4.prototype={
$2(d,e){return d+e.length},
$S:225}
C.dlE.prototype={
$0(){return A.j0(this.a,null)},
$S:0}
C.dlF.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dlG.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.dlI.prototype={
$1(d){var w=this.a,v=w.Pa(),u=v<=0?0:B.j.D(w.AE()/v,0,1),t=w.a.x,s=t*1.46
return new C.Og(w.f?s:s*u,s,t,null)},
$S:z+22}
C.dlH.prototype={
$1(d){return d.bV(0.85)},
$S:176}
C.dl2.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghP()&&D.nb.q(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return A.x(A.a([A.d(p,w,w,w,w,w,w,B.ja,B.K,w,w),B.an,A.E(A.at(new A.a5(r*v+u,r*t+s,A.ip(!0,w,w,B.y,new A.hG(v,6,6,1,r),new C.dl1(q,r),q.fr.length,w,B.dW,B.ah,!1),w),w,w,w),1)],x.p),B.l,w,B.e,B.i,0,B.p)},
$S:151}
C.dl1.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.q(0,e),p=r.ghP()&&D.nb.q(0,r.a.e)&&q&&r.id.q(0,e),o=r.ghP()&&D.nb.q(0,r.a.e)&&q&&!p,n=B.d.q(r.fy,e)||q,m=p?D.asS:D.c6k,l=A.m(10),k=A.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.asS:D.asM
v=o?A.L(B.dk,B.r,2):s
u=A.a([new A.ac(0,B.G,A.a_(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.H,4)],x.V)
t=this.b*0.42
return A.aP(!1,l,!0,A.cT(s,A.at(n?A.X(D.cB_[r.fr[e]],B.c,s,s,s,t):A.d("?",s,s,s,s,s,s,A.l(s,s,B.c,s,s,s,s,s,s,s,s,t,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,B.b1,new A.p(s,s,v,k,u,w,B.n),B.eH,s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dl0(r,e),s,s,s,s,s,s,s)},
$S:192}
C.dl0.prototype={
$0(){return this.a.co6(this.b)},
$S:0}
C.dkL.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?A.a_(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.a_(89,B.be.l()>>>16&255,B.be.l()>>>8&255,B.be.l()&255),r=A.m(10),q=A.m(10),p=A.m(10),o=A.L(A.a_(64,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.r,1)
return A.aI(!1,B.a3,!0,r,A.aP(!1,q,!0,A.q(B.A,A.d(t?"":u,w,w,w,w,w,w,D.aV6,w,w,w),B.f,w,w,new A.p(w,w,o,p,w,w,B.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dkK(v,d),w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.aj)},
$S:577}
C.dkK.prototype={
$0(){return this.a.cEj(this.b)},
$S:0}
C.dkM.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=A.a_(46,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
return A.aI(!1,B.a3,!0,A.m(10),A.aP(!1,A.m(10),!0,A.q(B.A,A.d(u,w,w,w,w,w,w,D.aV6,w,w,w),B.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dkJ(v,d),w,w,w,w,w,w,w),B.f,t,0,w,w,w,w,w,B.aj)},
$S:577}
C.dkJ.prototype={
$0(){return this.a.cEi(this.b)},
$S:0}
C.dkN.prototype={
$1(d){return this.a.m(new C.dkI())},
$S:31}
C.dkI.prototype={
$0(){},
$S:0}
C.dkO.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&A.c()
w=C.aiz(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.ps()
if(u.ghP()&&D.nb.q(0,u.a.e)){u.a1E()
u.ng(!0)}else{v=B.d.cJ(u.cy,0,new C.dkG())
t=u.dx
if(t>=v)u.us("All 5 sentences perfect \u2014 full payout!")
else u.F3(t/v,t,v)}}else{if(u.ghP()&&D.nb.q(0,u.a.e))u.a1E()
u.m(new C.dkH(u))}},
$S:0}
C.dkG.prototype={
$2(d,e){return d+e.length},
$S:225}
C.dkH.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bP(0,B.ce)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.dkP.prototype={
$1(d){var w=null,v=A.ft(w,w,A.a_(38,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,B.cp,w,w,w,w,w,w,w)
return new A.D(B.cx,new A.a5(1/0,w,A.io(A.d(d,w,w,w,w,w,w,W.aV_,w,w,w),new C.dkF(this.a,d),v),w),w)},
$S:136}
C.dkF.prototype={
$0(){return this.a.b7o(this.b)},
$S:0}
C.dkQ.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&A.c()
w=u*3+8
return A.x(A.a([A.d(s,v,v,v,v,v,v,B.pR,v,v,v),B.U,A.E(A.at(new A.a5(w,w,A.ip(!0,v,v,B.y,new A.hG(3,4,4,1,u),new C.dkE(t,u),9,v,B.dW,B.ah,!1),v),v,v,v),1)],x.p),B.l,v,B.e,B.i,0,B.p)},
$S:151}
C.dkE.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.b5b(e),p=r===0
if(p)w=B.L
else w=q?B.be:A.a_(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v=A.m(10)
s=p?t:new C.dkA(s,e)
u=A.m(10)
p=p?"":""+r
return A.aI(!1,B.a3,!0,v,A.aP(!1,u,!0,A.at(A.d(p,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),B.f,w,0,t,t,t,t,t,B.aj)},
$S:81}
C.dkA.prototype={
$0(){return this.a.cEh(this.b)},
$S:0}
C.dkR.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.dkD(q,d)
p=A.m(16)
if(o)w=D.a5y[d]
else{w=D.a5y[d]
w=A.a_(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=A.m(16)
u=o?A.a_(B.j.V(127.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.a_(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
u=A.L(u,B.r,o?2:1)
t=x.V
if(o){s=D.a5y[d]
t=A.a([new A.ac(0,B.G,A.a_(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.H,16)],t)}else t=A.a([],t)
return A.aP(!1,p,!0,A.cT(r,r,r,r,B.b1,new A.p(w,r,u,v,t,r,B.n),S.C8,r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1657}
C.dkD.prototype={
$0(){return this.a.cEk(this.b)},
$S:0}
C.dkS.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&A.c()
q=A.d(q,t,t,t,t,t,t,B.pR,t,t,t)
w=A.d("Move "+r.aAi()+"/"+C.heW(),t,t,t,t,t,t,B.EN,t,t,t)
v=r.x2
u=s*3+12
return A.x(A.a([q,w,A.d("Round "+v+"/7 \xb7 "+A.w(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,A.l(t,t,A.a_(153,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.E(A.at(new A.a5(u,u,A.ip(!0,t,t,B.y,new A.hG(3,6,6,1,s),new C.dkC(r),9,t,B.dW,B.ah,!1),t),t,t,t),1)],x.p),B.l,t,B.e,B.i,0,B.p)},
$S:151}
C.dkC.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=A.m(10),s=A.m(10),r=u?B.be:D.bk2,q=u?B.er:D.bu9
return A.aI(!1,B.a3,!0,w,A.aP(!1,t,!0,A.q(w,w,B.f,w,w,new A.p(r,w,A.L(q,B.r,u?2.5:1),s,w,w,B.n),w,w,w,w,w,w,w,w),w,!0,w,w,B.L,w,w,w,w,w,w,w,w,new C.dkz(v,e),w,w,w,w,B.L,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)},
$S:81}
C.dkz.prototype={
$0(){return this.a.cEf(this.b)},
$S:0}
C.dkT.prototype={
$0(){return this.a.b7o(this.b[this.c])},
$S:0}
C.dkU.prototype={
$0(){return this.a.m(new C.dkB())},
$S:0}
C.dkB.prototype={
$0(){},
$S:0}
C.dkV.prototype={
$2(d,e){this.a.a0n(d,e)
return null},
$S:z+21}
C.dpj.prototype={
$1(d){return this.a.coB(this.b,d)},
$S:1658}
C.dpi.prototype={
$0(){var w=this
return w.a.a.cXP(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cMn.prototype={
$1(d){var w=this.a
w.a1U()
w.uB()},
$S:7}
C.cLI.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cLy.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cLz.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cLS.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cLP.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cLQ.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cLR.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cLK.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.cLJ(w))},
$S:0}
C.cLJ.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cLA.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ad(w.c)
v.dy=J.ad(w.d)
v.fr=J.ad(w.e)},
$S:0}
C.cLN.prototype={
$1(d){var w=this.a
return new C.Wv(w.fx,new C.cLM(w),w.a.f.r,null)},
$S:z+37}
C.cLM.prototype={
$1(d){return this.bn6(d)},
bn6(d){var w=0,v=A.j(x.y),u,t=this,s,r
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cfX(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.m(new C.cLL(r,d))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+38}
C.cLL.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cMa.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cM4.prototype={
$1(d){this.a.uB()
return null},
$S:11}
C.cM7.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(B.o.aq(v.gaXX().a,1e6)<=0){w=v.id
if(w!=null)w.a1(0)
v.uB()
return}v.m(new C.cM6())},
$S:11}
C.cM6.prototype={
$0(){},
$S:0}
C.cM3.prototype={
$1(d){this.a.FL()
return null},
$S:11}
C.cM5.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cM2.prototype={
$2(d,e){var w,v=J.t(d,"at"),u=A.bj(J.k(v==null?"":v))
if(u==null)u=new A.V(A.fX(0,0),0,!1)
v=J.t(e,"at")
w=A.bj(J.k(v==null?"":v))
return u.aS(0,w==null?new A.V(A.fX(0,0),0,!1):w)},
$S:42}
C.cLF.prototype={
$2(d,e){var w,v=J.t(d,"at"),u=A.bj(J.k(v==null?"":v))
if(u==null)u=new A.V(A.fX(0,0),0,!1)
v=J.t(e,"at")
w=A.bj(J.k(v==null?"":v))
return u.aS(0,w==null?new A.V(A.fX(0,0),0,!1):w)},
$S:42}
C.cLG.prototype={
$0(){var w=this.a,v=w.f
B.d.a8(v)
B.d.v(v,this.b)
w.ax=!0},
$S:0}
C.cLH.prototype={
$0(){var w=this.a
if(w.c!=null)w.a2B(!0)},
$S:12}
C.cLD.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cLE.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
if(w.f.length!==0)w.UD(this.b)},
$S:7}
C.cLV.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=B.d.gd5(v).Q
v.toString
if(this.b)w.iq(v)
else w.mp(v,B.dH,B.kR)},
$S:7}
C.cLO.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cLW.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cLX.prototype={
$0(){var w=this.a
w.f.push(A.I(["role","user","text",this.b,"at",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.b8T()
w.r.bP(0,B.ce)
w.at=!0},
$S:0}
C.cLY.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cLZ.prototype={
$0(){var w=this.a
w.f.push(A.I(["role","ai","text",this.b,"at",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z))
w.at=!1},
$S:0}
C.cM_.prototype={
$0(){var w,v=this.b,u=A.T(x.N,x.z)
J.aK(u,"role","ai")
J.aK(u,"text",this.c)
J.aK(u,"at",new A.V(Date.now(),0,!1).aa().ag())
w=this.a
if(J.cJ(w.b)){w=J.b7(w.b,v.gcnw(),x.P)
w=A.C(w,w.$ti.k("ak.E"))
J.aK(u,"phoneActions",w)}v.f.push(u)
v.b8T()},
$S:0}
C.cM0.prototype={
$0(){this.a.f.push(A.I(["role","ai","text",y.g,"at",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z))},
$S:0}
C.cM1.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cLT.prototype={
$1(d){return this.bn7(d)},
bn7(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:k=t.a
if(k.c==null||d==null){w=1
break}s=t.b.b
r=J.a7(s)
q=r.h(s,"start")
p=A.bj(q==null?"":q)
q=r.h(s,"end")
o=A.bj(q==null?"":q)
w=p!=null?3:4
break
case 3:q=k.a.c.a
n=Date.now()
m=r.h(s,"title")
m=B.a.i(m==null?"Event":m)
l=p.bT()
w=5
return A.b(C.arx(q,new C.rO("cal_"+1000*n,m,l,(o==null?p.bR(36e8):o).bT(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.asM()
case 4:k.c.L(x.q).f.U(A.b3(null,null,null,B.cX,null,B.t,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:435}
C.cM9.prototype={
$1(d){return this.bn8(d)},
bn8(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.L(x.q).f.U(A.b3(null,null,null,B.cX,null,B.t,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:435}
C.cLU.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=B.d.gd5(v).Q
v.toString
w.iq(v)},
$S:7}
C.cMm.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
if(v>0)w.acp(v-1)},
$S:0}
C.cMf.prototype={
$0(){return A.j0(this.a,null)},
$S:0}
C.cMi.prototype={
$1(d){var w=this.a
w.m(new C.cMc(w,d))
if(d===0)w.a2B(!0)},
$S:31}
C.cMc.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cMg.prototype={
$2$size(d,e){return C.hd0(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:1659}
C.cMh.prototype={
$0(){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.hqo(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return A.b(H.asm(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cMd(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return A.b(C.arv(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return A.b(p.uB(),$async$$0)
case 15:p.m(new C.cMe(p))
p.acp(0)
case 14:u=!1
w=1
break
case 11:w=16
return A.b(p.uB(),$async$$0)
case 16:case 9:case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:64}
C.cMd.prototype={
$2(d,e){return this.bn9(d,e)},
bn9(d,e){var w=0,v=A.j(x.y),u,t=this,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=A.a3e(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$2,v)},
$S:125}
C.cMe.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cMk.prototype={
$2(d,e){return B.ae},
$S:36}
C.cMj.prototype={
$2(d,e){var w=null,v=this.a,u=A.d((v.a.c.w?D.a5F:D.a4X)[e],w,w,w,w,w,w,B.pU,w,w,w),t=A.a_(31,B.aN.l()>>>16&255,B.aN.l()>>>8&255,B.aN.l()&255),s=A.a_(89,B.aN.l()>>>16&255,B.aN.l()>>>8&255,B.aN.l()&255)
v=v.at?w:new C.cMb(v,e)
return A.n3(w,t,u,w,v,w,w,new A.ay(s,1,B.r,-1),w)},
$S:684}
C.cMb.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a5F:D.a4X
w.r.sb1(0,v[this.b])
w.nf()
return null},
$S:0}
C.cMl.prototype={
$1(d){var w=this.a
return w.at?null:w.nf()},
$S:2}
C.cLB.prototype={
$0(){return this.a.acp(0)},
$S:0}
C.cM8.prototype={
$0(){return this.a.acp(this.b)},
$S:0}
C.cLC.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=A.q(v,D.c01,B.f,v,v,new A.p(v,v,v,v,v,new A.a9(B.a6,B.aa,B.x,A.a([A.a_(51,B.aN.l()>>>16&255,B.aN.l()>>>8&255,B.aN.l()&255),w.b],x.O),v,v),B.a7),v,72,v,v,v,v,v,72)
t=w.c
s=A.d("Start a conversation",v,v,v,v,v,v,A.l(v,v,t?B.c:B.as,v,v,v,v,v,v,v,v,16,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.at(new A.D(B.a_Y,A.x(A.a([u,B.af,s,B.an,A.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,A.l(v,v,t?B.aD:B.aV,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.K,v,v)],x.p),B.l,v,B.e,B.i,0,B.p),v),v,v,v)}if(e<s)return u.bJx(t[e],w.c)
return u.aRg(A.I(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:41}
C.c3f.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=B.j.M(d)
return new A.V(A.fX(w>1e11?w:w*1000,0),0,!0).bT()}v=A.bj(J.k(d))
return v==null?null:v.bT()},
$S:291}
C.c3e.prototype={
$1(d){A.aJ(d)
return(d==null?0:d)/100},
$S:692}
C.c3h.prototype={
$1(d){var w
if(d==null)w=null
else{w=A.bj(J.k(d))
w=w==null?null:w.bT()}return w},
$S:291}
C.c3g.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null
if(!x.f.b(d))return m
w=A.a3(d,x.N,x.z)
try{v=J.t(w,"id")
v=J.k(v==null?"":v)
u=J.t(w,"userEmail")
u=J.k(u==null?"":u)
t=A.aJ(J.t(w,"amount"))
if(t==null)t=0
s=J.t(w,"type")
s=A.a5A(B.a6t,J.k(s==null?"reimbursement":s))
r=J.t(w,"method")
r=A.a5A(B.a4V,J.k(r==null?"system":r))
q=A.aT(J.t(w,"sourceDetails"))
p=J.t(w,"status")
p=A.a5A(B.Iq,J.k(p==null?"approved":p))
o=this.a.$1(J.t(w,"timestamp"))
if(o==null)o=new A.V(Date.now(),0,!1)
return new A.d7(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:628}
C.dFP.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dFQ.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dFG.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bq(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dFE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.a
w=2
return A.b(o.Bh(),$async$$0)
case 2:t=o.d
t===$&&A.c()
s=o.e
s===$&&A.c()
r=o.a.c
q=o.f
q===$&&A.c()
w=3
return A.b(C.h7h(t,s,r,q),$async$$0)
case 3:p=e
w=4
return A.b(A.pu(o.a.c,!1),$async$$0)
case 4:o.lf(p)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFO.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.aaS(),$async$$0)
case 3:q=e
if(q==null){r.lf("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return A.b(A.a6(s,!1).cd(A.ec(new C.dFN(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return A.b(A.pu(r.a.c,!1),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFN.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&A.c()
return new C.a0g(w.b,w.a,u,v,null)},
$S:z+39}
C.dFD.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.hW6(q)?3:4
break
case 3:w=5
return A.b(t.a.Fi(B.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return A.b(C.aZM(q,s.a.c),$async$$0)
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
case 9:s.lf(C.c3j(s.a.c))
w=1
break
case 10:s.lf("That code didn't match anything on your account. Double-check it and try again.")
w=1
break
case 11:s.lf(y.B)
w=1
break
case 12:q=r.b
q.toString
w=14
return A.b(s.Av(q,!0,!0),$async$$0)
case 14:w=1
break
case 13:q=r.b
q.toString
w=15
return A.b(s.aSz(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFC.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=A.bq(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dFF.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.aem(),$async$$0)
case 3:q=e
if(q==null||B.a.i(q).length===0){w=1
break}s=C.hne(q)
if(s==null){r.lf("Could not read that backup file.")
w=1
break}if(!C.c3i(s,r.a.c,null)){r.lf(C.c3j(r.a.c))
w=1
break}w=4
return A.b(r.bLQ(s),$async$$0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFM.prototype={
$1(d){var w=null,v=new A.au(B.aw,$.aw()),u=A.S(d).ax.a===B.J,t=u?B.iD:B.c,s=x.p,r=A.x(A.a([A.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,A.l(w,w,u?B.ab:B.am,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),B.aB,A.aM(w,B.Z,!0,w,!0,B.t,w,A.aO(),v,w,w,w,w,w,2,A.bt(w,new A.b6(4,A.m(14),B.dq),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),B.y,!0,w,!0,w,!1,w,B.ak,w,w,w,w,w,B.e0,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.K,w,B.ao,w,w,w,w)],s),B.E,w,B.e,B.Q,0,B.p)
return A.eg(A.a([A.bN(!1,B.dn,w,w,!0,w,w,w,new C.dFK(d),w,w),A.bI(D.fFk,w,new C.dFL(d,v),A.bp(B.aY,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.fUq,w)},
$S:18}
C.dFK.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dFL.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a6(this.a,!1).O(w)
return null},
$S:0}
C.dFH.prototype={
$1(d){return D.hxf},
$S:z+12}
C.dFI.prototype={
$0(){return this.a.Fj(B.a.i(this.b))},
$S:1}
C.dFJ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(C.aZM(t.b,r.a.c),$async$$0)
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
return A.b(r.Av(s,!0,!0),$async$$0)
case 11:w=1
break
case 7:r.lf(C.c3j(r.a.c))
w=1
break
case 8:r.lf("Could not read that QR code for your account.")
w=1
break
case 9:r.lf(y.B)
w=1
break
case 10:s=q.b
s.toString
w=12
return A.b(r.aSz(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFR.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dFV.prototype={
$1(d){this.a.RC()
return null},
$S:11}
C.dFS.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dFT.prototype={
$0(){var w=null,v=this.a
A.fF(new A.fw(v.gayl()))
this.b.L(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d("Code "+v.gayl()+" copied",w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dFU.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dFW.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!(B.a.a0(s,"NGMYSNAP1|")||B.a.a0(s,"NGMYLOCALSYNC1|")||B.a.a0(s,"NGMYLOCALLIVE1|")||B.a.a0(s,"NGMYLOCALDEP1|")))continue
r.e=!0
A.a6(this.b,!1).O(s)
return}},
$S:189}
C.fzZ.prototype={
$1(d){return D.htE},
$S:z+13}
C.fBb.prototype={
$1(d){return new C.afv(this.a,this.b,this.c,null)},
$S:z+14}
C.f5u.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.f5v.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.deP.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fW()},
$S:7}
C.deM.prototype={
$2(d,e){return e.amc(e.a.toUpperCase())},
$S:1660}
C.deN.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=B.a.i(w.d.a.a)
A.a6(v,!1).O(w)
return null},
$S:2}
C.deO.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.c40.prototype={
$1(d){var w=J.t(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!B.d.aV(D.dt4,B.a.gkd(v))},
$S:4}
C.fLg.prototype={
$1(d){return d.a===this.a},
$S:1661}
C.fLh.prototype={
$0(){return B.d.gH(B.Du)},
$S:1662}
C.dMi.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.m(new C.dMh(v))
w=v.r
w===$&&A.c()
if(w<=0)v.b7U("Time's up")},
$S:11}
C.dMh.prototype={
$0(){var w=this.a,v=w.r
v===$&&A.c()
w.r=v-1
return v},
$S:0}
C.dM9.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dMe.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.m(new C.dMb(w,d,e))},
$S:242}
C.dMb.prototype={
$0(){var w=this.a,v=this.c
w.e=B.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dMf.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.dMa(w))
w.cyu(!0)},
$S:0}
C.dMa.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dMg.prototype={
$1(d){this.a.b7U(d)
return null},
$S:2}
C.dMc.prototype={
$0(){return A.j0(this.a,null)},
$S:0}
C.dMd.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.ccb.prototype={
$1(d){return D.dOQ},
$S:z+15}
C.cca.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fC2.prototype={
$5(d,e,f,g,h){var w,v=null,u=J.a7(d),t=A.aJ(u.h(d,e)),s=t==null?v:B.j.M(t)
if(s==null)s=0
if(s<=0)return v
t=u.h(d,g)
if(J.k(t==null?"":t)!==h){u.n(d,g,h)
u.n(d,f,0)}t=A.aJ(u.h(d,f))
w=t==null?v:B.j.M(t)
if(w==null)w=0
if(w>=s)return v
u.n(d,f,w+1)
u=A.aJ(u.h(d,"outcome"))
return u==null?v:B.j.M(u)},
$S:1663}
C.fC3.prototype={
$2(d,e){var w=A.aJ(J.t(d,e))
w=w==null?null:B.j.M(w)
return w==null?0:w},
$S:648}
C.fC4.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:225}
C.fSk.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.hyP(w,v):C.hdk(w,v)
if(u===3)++w.f
C.ah_(w,this.c,u)
return u},
$S:1664}
C.fSm.prototype={
$0(){return C.hyP(this.a,this.b)},
$S:88}
C.fSl.prototype={
$0(){return C.hdk(this.a,this.b)},
$S:88}
C.dFr.prototype={
$0(){var w=this.a
if(w.a.c)w.m(new C.dFq(w))},
$S:0}
C.dFq.prototype={
$0(){this.a.r=1+B.o.F(A.FI(new A.V(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dFs.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&A.c()
u=u.x
u===$&&A.c()
w=B.j.bh(u*10)
if(w!==v.w)v.m(new C.dFp(v,w))}},
$S:0}
C.dFp.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ceC.prototype={
$3(d,e,f){var w=null
return A.E(A.x(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,B.I,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.bH,A.ev(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.dB)],x.p),B.l,w,B.e,B.i,0,B.p),1)},
$S:1665}
C.ceB.prototype={
$3(d,e,f){var w=null
return A.d("$"+B.j.ad(e,2),w,w,w,w,w,w,B.ne,w,w,w)},
$S:397}
C.cf3.prototype={
$1(d){return new C.Oo(this.a,this.b,!1,null,null)},
$S:z+16}
C.e4T.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=A.m(e?0:30)
e=e?g:A.L(B.b9.j(0.5),B.r,1)
w=f.a.e?g:A.a([new A.ac(2,B.G,B.b9.j(0.35),B.H,36),new A.ac(0,B.G,B.bD.j(0.175),B.H,24)],x.V)
v=A.m(f.a.e?0:30)
u=x.O
t=A.ap(g,A.q(g,g,B.f,g,g,new A.p(g,g,g,g,g,new A.bY(B.A,0.5,B.x,g,0,A.a([B.ba.j(0.22),B.L],u),g,g),B.a7),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=A.ap(-50,A.q(g,g,B.f,g,g,new A.p(g,g,g,g,g,new A.bY(B.A,0.5,B.x,g,0,A.a([B.bD.j(0.18),B.L],u),g,g),B.a7),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?B.i:B.Q
p=x.p
o=A.a([],p)
if(f.a.e)o.push(B.U)
n=x.V
o.push(A.q(g,D.bWg,B.f,g,g,new A.p(g,g,A.L(B.aS.j(0.8),B.r,2.5),g,A.a([new A.ac(0,B.G,B.b9.j(0.55),B.cA,18)],n),E.uZ,B.a7),g,88,g,g,g,g,g,88))
o.push(B.aQ)
o.push(A.oe(B.jT,D.fRU,new C.e4P()))
o.push(B.U)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(A.d(m,g,g,g,g,g,g,A.l(g,g,B.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,B.cD,g,1.45,!0,g,g,g,g,g,g,g,g),B.K,g,g))
m=this.b
if(m.length!==0){l=B.c0.j(0.12)
k=A.m(18)
j=A.L(B.c0.j(0.45),B.r,1)
i=A.a([A.A(A.a([A.X(D.bQg,B.c0.j(0.95),g,g,g,20),B.ae,A.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,A.l(g,g,B.c0.j(0.95),g,g,g,g,g,g,g,g,13,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),B.l,g,B.e,B.i,0,g,g),B.X,A.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,A.l(g,g,B.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),B.X],p)
B.d.v(i,new A.N(m,new C.e4Q(),A.U(m).k("N<1,v>")))
B.d.v(o,A.a([B.aQ,A.q(g,A.x(i,B.E,g,B.e,B.i,0,B.p),B.f,g,g,new A.p(l,g,j,k,g,g,B.n),g,g,g,g,B.bF,g,g,1/0)],p))}o.push(B.bz)
m=B.w.j(0.35)
l=A.m(18)
k=A.L(B.b9.j(0.35),B.r,1)
o.push(A.q(g,A.x(A.a([f.az9(B.hw,"Unlimited games with an active plan",B.ba),B.U,f.az9(B.k8,"Weekday check-ins grow your balance",B.b9),B.U,f.az9(B.n2,"Compete, bet, and earn points",B.aS)],p),B.l,g,B.e,B.i,0,B.p),B.f,g,g,new A.p(m,g,k,l,g,g,B.n),g,g,g,g,B.bF,g,g,1/0))
o.push(B.d8)
l=A.m(16)
n=A.a([new A.ac(0,B.G,B.bD.j(0.45),B.cA,16)],n)
o.push(new A.a5(1/0,g,A.c2(A.dh(D.bZH,D.fNh,new C.e4R(f,a0),A.bp(B.L,g,g,g,B.c,B.Kk,g,B.L,new A.b9(A.m(16),B.a1),g,g,g)),new A.p(g,g,g,l,n,E.uZ,B.n),B.bj),g))
o.push(B.U)
n=f.a.e?"Back":"Maybe later"
o.push(A.bN(!1,A.d(n,g,g,g,g,g,g,A.l(g,g,B.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,B.V,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,g,new C.e4S(f,a0),g,g))
if(f.a.e)o.push(B.b5)
h=A.q(g,A.by(v,new A.an(B.a0,g,B.ad,B.t,A.a([t,u,new A.D(new A.R(22,r,22,q),A.x(o,B.l,g,B.e,s,0,B.p),g)],p),g),B.aq),B.f,g,g,new A.p(g,g,e,d,w,D.c97,B.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return A.eP(g,B.L,h,g,g,g,Ah.a0t,B.d7,g,g,g)},
$S:575}
C.e4P.prototype={
$1(d){return D.c85.aK(0,d)},
$S:73}
C.e4Q.prototype={
$1(d){var w=null
return new A.D(B.eM,A.A(A.a([A.X(A1.a2u,B.c0.j(0.85),w,w,w,14),B.ae,A.E(A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w),w)},
$S:136}
C.e4R.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{A.a6(this.b,!1).O(null)
w.a.c.$0()}},
$S:0}
C.e4S.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else A.a6(this.b,!1).O(null)},
$S:0}
C.fND.prototype={
$1(d){if(d.gmV())this.a.a=d
return d.gmV()},
$S:703}
C.fNq.prototype={
$1(d){$.aW.x1$.push(new C.fNp(this.a))},
$S:7}
C.fNp.prototype={
$1(d){return this.a.$0()},
$S:7}
C.fyj.prototype={
$1(d){return C.hyW(this.a,this.b+1)},
$S:7}
C.fP_.prototype={
$2(d,e){var w=A.aH(d,B.c1,x.w).w.a
return new A.a5(w.a,w.b,A.c4(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:154}
C.cfh.prototype={
$1(d){return d.r===this.a},
$S:246}
C.cfi.prototype={
$1(d){var w=$.aSP(),v=w.a
w.sp(0,v+1)
return v},
$S:1667}
C.cfj.prototype={
$1(d){},
$S:29}
C.cfg.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:246}
C.cff.prototype={
$1(d){return d.f.cf(this.a)},
$S:246}
C.fv5.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:59}
C.h04.prototype={
$1(d){return C.a8h(this.a)},
$S:105}
C.h05.prototype={
$1(d){var w=$.aSP()
w.sp(0,w.a+1)},
$S:32}
C.h06.prototype={
$1(d){},
$S:29}
C.h07.prototype={
$1(d){return new A.k3($.aSP(),new C.h03(this.a,this.b),null,null,x.am)},
$S:1668}
C.h03.prototype={
$3(d,e,f){var w=this.b
return new A.l8(C.arc(this.a,!1),new C.h02(w),w,null,x.gv)},
$S:1669}
C.h02.prototype={
$2(d,e){var w=e.b
return new C.aen(w==null?this.a:w,null)},
$S:z+17}
C.e4W.prototype={
$1(d){return d.c},
$S:246}
C.e4X.prototype={
$1(d){return d.gbjG()},
$S:1670}
C.e4Y.prototype={
$2(d,e){return d+e},
$S:79}
C.e4Z.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e50.prototype={
$2(d,e){return B.U},
$S:36}
C.e5_.prototype={
$2(d,e){return new C.aem(J.t(this.a.c,e),null)},
$S:z+18}
C.e4V.prototype={
$1(d){return d==null?"\u2026":C.bCv(d)},
$S:1671}
C.h0a.prototype={
$3(d,e,f){var w=this
return A.t2(new C.aC5(w.a,w.b,w.c,w.d,new C.h08(d,w.e),new C.h09(d,w.f),null))},
$C:"$3",
$R:3,
$S:92}
C.h08.prototype={
$0(){A.a6(this.a,!1).O(null)
C.hCh(this.b)},
$S:0}
C.h09.prototype={
$0(){A.a6(this.a,!1).O(null)
C.hCh(this.b)},
$S:0}
C.dlS.prototype={
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
B.d.v(w,new A.N(t,new C.dlR(),A.U(t).k("N<1,v>")))}t=h.d
t===$&&A.c()
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,A.aH(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?A.a([B.be,B.eq,B.e6],r):A.a([B.ay,B.es,B.ej],r)
p=A.m(26)
o=A.L(B.c.j(0.4),B.r,2)
n=x.V
m=A.a([new A.ac(6,B.G,(h.a.c?B.dI:B.dM).j(0.5),B.H,36)],n)
l=A.a([],g)
if(h.a.c){k=A.dr()
j=k.a
j.$flags&2&&A.aj(j)
j[11]=0.001
k.km(-0.35)
r=A.a([Z.aix,B.u7],r)
l.push(new A.a5(i,100,new A.an(B.A,i,B.ad,B.f,A.a([A.fz(B.A,A.q(i,D.bdj,B.f,i,i,new A.p(i,i,i,i,A.a([new A.ac(4,B.G,B.cY.j(0.6),B.H,24),new A.ac(0,B.G,B.w.j(0.3),B.dv,12)],n),new A.bY(B.A,0.5,B.x,i,0,r,i,i),B.a7),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.c23)
l.push(B.aB)
l.push(A.d(h.a.d,i,i,i,i,i,i,B.KQ,B.K,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=A.m(18)
k=A.L(B.eq,B.r,4)
B.d.v(l,A.a([B.aB,D.fH2,B.U,A.q(i,A.d(r,i,i,i,i,i,i,D.fx4,B.K,i,i),B.f,i,i,new A.p(B.c,i,k,n,i,i,B.n),i,i,i,i,B.NW,i,i,1/0)],g))}B.d.v(l,A.a([B.af,A.d(h.a.e,i,i,i,i,i,i,D.fA3,B.K,i,i)],g))
l.push(B.dY)
r=A.E(A.dU(D.fEz,h.a.r,A.di(i,i,i,i,i,i,i,i,i,B.c,i,i,B.cp,i,i,D.b4J,i,i,i,i)),1)
h=h.a
n=h.w
l.push(A.A(A.a([r,B.au,A.E(A.bI(F.aWw,i,n,A.bp(B.c,i,i,i,h.c?B.eq:B.es,i,B.cp,i,i,i,i,i)),1)],g),B.l,i,B.e,B.i,0,i,i))
w.push(A.e6(B.A,A.q(i,A.x(l,B.l,i,B.e,B.Q,0,B.p),B.f,i,i,new A.p(i,i,o,p,m,new A.a9(B.aA,B.aE,B.x,q,i,i),B.n),i,i,i,B.ac,B.amA,i,i,s),1+t*0.02,i,i))
return new A.an(B.A,i,B.ad,B.f,w,i)},
$S:116}
C.dlR.prototype={
$1(d){var w=null,v=d.a,u=d.b
return A.ap(w,A.d6(A.eN(B.A,d.d,A.X(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.cgS.prototype={
$2(d,e){var w=null,v=this.a,u=C.hVw(A.LU(v.c,v.d))
return A.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1672}
C.cgR.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:59}
C.c4x.prototype={
$0(){},
$S:0}
C.fu3.prototype={
$1(d){return B.o.u(d)},
$S:78}
C.dYo.prototype={
$0(){return this.a.y=!0},
$S:0}
C.dYp.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.dYq.prototype={
$0(){var w=this.a
return w.w=D.Sy[w.d.aw(5)]},
$S:0}
C.dYr.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.dYs.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.dYt.prototype={
$0(){var w=this.a
return w.m(new C.dYn(w))},
$S:0}
C.dYn.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dYu.prototype={
$0(){var w=this.a
return w.m(new C.dYm(w))},
$S:0}
C.dYm.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dYx.prototype={
$0(){return A.j0(this.a,null)},
$S:0}
C.dYy.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&B.a.i(t.e.a.a).length===0?B.be:A.a_(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),r=A.m(10)
t=t.y?u:new C.dYw(t,d)
w=A.m(10)
v=B.j.ad(d,0)
return A.E(new A.D(B.jo,A.aI(!1,B.a3,!0,r,A.aP(!1,w,!0,new A.a5(u,38,A.at(A.d("$"+v,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),B.f,s,0,u,u,u,u,u,B.aj),u),1)},
$S:1673}
C.dYw.prototype={
$0(){var w=this.a
return w.m(new C.dYv(w,this.b))},
$S:0}
C.dYv.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bP(0,B.ce)},
$S:0}
C.e56.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+B.cP.gcu().aN(this.c)},
$S:0}
C.e57.prototype={
$0(){return A.j0(this.a,null)},
$S:0}
C.e52.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=A.m(14),s=u?B.c.j(0.1):B.L,r=A.L(u?D.eW.j(0.5):B.L,B.r,1),q=A.X(e,u?D.eW:B.aD,w,w,w,20)
return A.E(A.aA(w,A.cT(w,A.A(A.a([q,B.bm,A.d(f,w,w,w,w,w,w,A.l(w,w,u?B.c:B.aD,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.bb,B.i,0,w,w),w,w,B.b1,new A.p(s,w,r,t,w,w,B.n),B.a3,w,46,w,w,w,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e54(v,d),w,w,w,w,w,w,!1,B.a4),1)},
$S:1674}
C.e54.prototype={
$0(){var w=this.a
return w.m(new C.e53(w,this.b))},
$S:0}
C.e53.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e55.prototype={
$0(){var w=this.a,v=w.d===B.l_?"Cash App tag":"Bitcoin address"
return w.Ju(this.b,v)},
$S:0}
C.e51.prototype={
$0(){var w=this.a
return w.Ju(w.gatF(),"Code")},
$S:0}
C.cfJ.prototype={
$1(d){return C.hRI(A.a3(d,x.N,x.z))},
$S:z+20}
C.cfK.prototype={
$2(d,e){return d.c.aS(0,e.c)},
$S:z+6}
C.cfG.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.cfH.prototype={
$2(d,e){return d.c.aS(0,e.c)},
$S:z+6}
C.cfI.prototype={
$1(d){return d.aj()},
$S:z+23}
C.cfL.prototype={
$1(d){var w=d.c
return!w.d3(this.a.bR(-36e8))&&!w.cf(this.b)},
$S:z+7}
C.c7F.prototype={
$1(d){return C.hRJ(A.a3(d,x.N,x.z))},
$S:z+24}
C.c7G.prototype={
$2(d,e){return e.b.aS(0,d.b)},
$S:z+8}
C.c7D.prototype={
$1(d){return d.aj()},
$S:z+26}
C.c7E.prototype={
$2(d,e){return e.b.aS(0,d.b)},
$S:z+8}
C.c7I.prototype={
$1(d){var w=d.b
return!w.d3(this.a)&&!w.cf(this.b)},
$S:z+27}
C.cfS.prototype={
$1(d){return d.aj()},
$S:z+28}
C.cfR.prototype={
$1(d){return C.hpv(A.a3(x.f.a(d),x.N,x.z))},
$S:z+29}
C.cfQ.prototype={
$1(d){return d.aj()},
$S:z+30}
C.cfP.prototype={
$1(d){return C.hV9(A.a3(x.f.a(d),x.N,x.z))},
$S:z+31}
C.cfU.prototype={
$1(d){return C.hV8(A.a3(x.f.a(d),x.N,x.z))},
$S:z+32}
C.cfV.prototype={
$2(d,e){return B.o.aS(d.f,e.f)},
$S:z+2}
C.cfW.prototype={
$1(d){return d.aj()},
$S:z+34}
C.e9b.prototype={
$1(d){return d.bf4(A.bq(d.e,!0,x.u))},
$S:z+36}
C.e9c.prototype={
$2(d,e){return B.o.aS(d.f,e.f)},
$S:z+2}
C.e95.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e96.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e8P.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.J(w,this.b)},
$S:0}
C.e8Q.prototype={
$1(d){return new C.Qo(this.a,null)},
$S:z+9}
C.e8R.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=B.d.bj(t,new C.e8O(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){B.d.cD(u.d,w)
u.JE()}},
$S:0}
C.e8O.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.e92.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(A.I(["role","admin","text",this.b],w,w))},
$S:0}
C.e93.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(A.I(["role","ai","text",v],t,t))}else{v=t.d
v===$&&A.c()
t.d=C.ilC(v,w[0],w[3])
t.JE()
t=w[2]
if(t==null)t="Created "+J.ad(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(A.I(["role","ai","text",t],w,w))}},
$S:0}
C.e94.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=B.d.gd5(v).Q
v.toString
w.iq(v)}},
$S:7}
C.e8X.prototype={
$1(d){return new C.Qo(this.a,null)},
$S:z+9}
C.e8Y.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.e8W.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cD(w,this.b)},
$S:0}
C.e91.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&A.c()
v=B.d.cD(w,s)
B.d.c4(t.d,u.a,v)
t.JE()},
$S:0}
C.e90.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
return new C.a13(u[w],new C.e9_(v,w),null)},
$S:z+59}
C.e9_.prototype={
$1(d){var w=this.a
return w.m(new C.e8Z(w,this.b,d))},
$S:z+40}
C.e8Z.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.e8T.prototype={
$0(){var w=this.a
return w.m(new C.e8S(w))},
$S:0}
C.e8S.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.e8U.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?B.cu:B.aM
return new A.D(B.eM,A.d(t+": "+A.w(s),w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?B.a8:B.cD,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:118}
C.e8V.prototype={
$1(d){return this.a.a2g()},
$S:2}
C.e9a.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.u2:B.c
u=A.m(16)
t=A.m(16)
s=l?B.aM:B.aO
r=w.d
q=A.b0(r).j(0.15)
p=A.m(12)
q=A.q(n,A.X(B.app,l?B.bK:B.am,n,n,n,20),B.f,n,n,new A.p(q,n,n,p,n,n,B.n),n,n,n,n,B.bV,n,n,n)
p=A.b0(r).j(0.12)
o=A.m(8)
o=A.q(n,A.X(w.c,A.b0(r),n,n,n,18),B.f,n,n,new A.p(p,n,n,o,n,n,B.n),n,n,n,n,B.hI,n,n,n)
r=A.A(A.a([o,B.au,A.E(A.d(w.b,n,n,n,n,n,n,A.l(n,n,l?B.aP:B.T,n,n,n,n,n,n,n,n,n,n,n,B.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),B.l,n,B.e,B.i,0,n,n)
p=w.e.length
return new A.D(B.d3,A.aI(!1,B.a3,!0,u,A.dG(!1,n,n,n,!0,n,n,n,!0,n,n,new H.aw2(q,e,!0,n),n,n,n,n,new C.e97(m,e),!1,n,n,new A.b9(t,new A.ay(s,1,B.r,-1)),n,n,A.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,A.l(n,n,l?B.bK:B.am,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,A.CA(n,n,n,new C.e98(),B.H,new C.e99(m,e),B.cl,n,x.N),n),B.f,v,0,n,n,n,n,n,B.aj),new A.bJ(w.a,x.W))},
$S:118}
C.e99.prototype={
$1(d){var w=this
if(d==="edit")w.a.abn(w.b)
if(d==="questions")w.a.Zz(w.b)
if(d==="delete")w.a.bOL(w.b)},
$S:2}
C.e98.prototype={
$1(d){return D.cWO},
$S:145}
C.e97.prototype={
$0(){return this.a.Zz(this.b)},
$S:0}
C.cV2.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q===$&&A.c()
w=d.a===q.a
if(w){q=r.f
q===$&&A.c()
q=A.b0(q).j(0.2)}else q=B.d0.j(0.1)
v=A.m(10)
if(w){u=r.f
u===$&&A.c()
u=A.b0(u)}else u=B.L
u=A.L(u,B.r,1)
t=r.f
t===$&&A.c()
return A.aP(!1,s,!0,A.q(s,A.X(d,A.b0(t),s,s,s,s),B.f,s,s,new A.p(q,s,u,v,s,s,B.n),s,s,s,s,B.cl,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cV1(r,d),s,s,s,s,s,s,s)},
$S:1675}
C.cV1.prototype={
$0(){var w=this.a
return w.m(new C.cV_(w,this.b))},
$S:0}
C.cV_.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cV3.prototype={
$1(d){var w=null,v=this.a,u=A.b0(d),t=v.f
t===$&&A.c()
return A.aA(w,A.h8(u,w,t===d?D.c_t:w,w,14),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cV0(v,d),w,w,w,w,w,w,!1,B.a4)},
$S:459}
C.cV0.prototype={
$0(){var w=this.a
return w.m(new C.cUZ(w,this.b))},
$S:0}
C.cUZ.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cV4.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cV5.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=B.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&A.c()
v=v.f
v===$&&A.c()
t=u.cPf(v,w,t)
A.a6(this.b,!1).O(t)
return null},
$S:0}
C.f0o.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return w.push(this.b)},
$S:0}
C.f0p.prototype={
$1(d){return new C.a12(this.a,null)},
$S:z+41}
C.f0v.prototype={
$2(d,e){return B.U},
$S:36}
C.f0u.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.u2:B.c
u=A.m(14)
t=A.m(14)
s=l?B.aM:B.aO
r=w.d
if(r!=null&&r.length!==0){q=A.m(8)
r=A.by(q,K.aRr(n,B.c_,36,B.qG,l?B.bK:B.am,r,48),B.aq)}else r=A.X(D.a2b,A.b0(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=A.d(q,n,2,B.a2,n,n,n,A.l(n,n,l?B.aP:B.T,n,n,n,n,n,n,n,n,n,n,n,B.V,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ad(w.c)
o=w.e?" \xb7 Printable":""
return A.aI(!1,B.a3,!0,u,A.dG(!1,n,n,n,!0,n,n,n,!0,n,n,r,n,n,n,n,new C.f0s(m,w,e),!1,n,n,new A.b9(t,new A.ay(s,1,B.r,-1)),n,n,A.d(""+p+" block(s)"+o,n,n,n,n,n,n,A.l(n,n,l?B.bK:B.am,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,A.aG(n,n,n,n,D.bYM,n,n,n,new C.f0t(m,e),n,n,n,n,n,n),n),B.f,v,0,n,n,n,n,n,B.aj)},
$S:81}
C.f0t.prototype={
$0(){var w=this.a
w.m(new C.f0q(w,this.b))
w.azc()},
$S:0}
C.f0q.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cD(w,this.b)},
$S:0}
C.f0s.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.b3c(u.b),$async$$0)
case 2:s=e
if(s!=null){t.m(new C.f0r(t,u.c,s))
t.azc()}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f0r.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.f0k.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f0i.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
return new C.Ww(w,"Answer Document",null)},
$S:z+42}
C.f0j.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f0m.prototype={
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
C.f0n.prototype={
$1(d){var w=this.a
return w.m(new C.f0l(w,d))},
$S:9}
C.f0l.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cfM.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fPn.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.e9M.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.e9s.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,new C.lY("image","",this.b,null))},
$S:0}
C.e9x.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,new C.lY("video","","data:video/mp4;base64,"+B.cP.gcu().aN(this.b),null))},
$S:0}
C.e9v.prototype={
$1(d){var w=null,v=x.p,u=A.x(A.a([A.aM(w,B.Z,!1,w,!0,B.t,w,A.aO(),this.a,w,w,w,w,w,2,D.c3X,B.y,!0,w,!0,w,!1,w,B.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.ao,w,w,w,w),A.aM(w,B.Z,!1,w,!0,B.t,w,A.aO(),this.b,w,w,w,w,w,2,D.c3W,B.y,!0,w,!0,w,!1,w,B.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a5,w,B.ao,w,w,w,w)],v),B.l,w,B.e,B.Q,0,B.p)
return A.eg(A.a([A.bN(!1,B.dn,w,w,!0,w,w,w,new C.e9t(d),w,w),A.bI(D.fRm,w,new C.e9u(d),w)],v),w,w,w,u,w,w,w,w,D.fDO,w)},
$S:18}
C.e9t.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e9u.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e9w.prototype={
$0(){var w,v=this.a.e
v===$&&A.c()
w=B.a.i(this.b.a.a)
return B.d.J(v,new C.lY("link","",B.a.i(this.c.a.a),w))},
$S:0}
C.e9o.prototype={
$1(d){return B.a.i(d)},
$S:14}
C.e9p.prototype={
$1(d){return d.length!==0},
$S:3}
C.e9q.prototype={
$1(d){return B.a.i(B.a.en(d,A.ag("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:14}
C.e9r.prototype={
$1(d){return d.length!==0},
$S:3}
C.e9C.prototype={
$0(){var w=this.a.bI1()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.e9D.prototype={
$0(){return this.a.azd("**","**")},
$S:0}
C.e9E.prototype={
$0(){return this.a.azd("*","*")},
$S:0}
C.e9F.prototype={
$0(){return this.a.azd("__","__")},
$S:0}
C.e9G.prototype={
$0(){return this.a.b1h("## Section title")},
$S:0}
C.e9H.prototype={
$0(){return this.a.b1h("\u2022 First point\n\u2022 Second point")},
$S:0}
C.e9I.prototype={
$0(){},
$S:0}
C.e9J.prototype={
$0(){var w=this.a
w.m(new C.e9B(w))},
$S:0}
C.e9B.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,D.dSd)},
$S:0}
C.e9K.prototype={
$0(){var w=this.a
w.m(new C.e9A(w))},
$S:0}
C.e9A.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.J(w,D.dSe)},
$S:0}
C.e9L.prototype={
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
t=A.d(t,v,v,v,v,v,v,A.l(v,v,w?B.jj:B.as,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
w=w?B.cr:B.iE
return A.E3(v,w,B.arH,t,v,new C.e9z(this.a,d),v)},
$S:z+45}
C.e9z.prototype={
$0(){var w=this.a
return w.m(new C.e9y(w,this.b))},
$S:0}
C.e9y.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.cD(w,this.b.a)},
$S:0}
C.e9l.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.b09},
$S:0}
C.e9m.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.hvg},
$S:0}
C.e9d.prototype={
$0(){var w=this.a
w.d=D.b08
w.f=w.e=null},
$S:0}
C.e9e.prototype={
$0(){var w=this.a
w.d=D.b09
w.f=null},
$S:0}
C.e9n.prototype={
$2(d,e){return B.o.aS(d.f,e.f)},
$S:z+2}
C.e9g.prototype={
$2(d,e){var w=this.a,v=w.gb8U()[e]
return new C.acT(v,this.b,new C.e9f(w,v),null)},
$S:z+46}
C.e9f.prototype={
$0(){return this.a.ccD(this.b.a)},
$S:0}
C.e9i.prototype={
$2(d,e){return B.o.aS(d.f,e.f)},
$S:z+47}
C.e9k.prototype={
$2(d,e){return B.X},
$S:36}
C.e9j.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.u2:B.c,p=A.m(16),o=A.m(16),n=A.m(16),m=A.L(r?B.aM:B.aO,B.r,1),l=A.a([new A.ac(0,B.G,B.w.j(r?0.28:0.06),B.dG,8)],x.V),k=A.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=A.m(10)
v=A.m(10)
k.push(A.by(w,K.aRr(v,B.c_,52,D.a2b,r?B.bK:B.am,j,52),B.aq))}else{j=u.d.d
w=A.b0(j).j(0.15)
v=A.m(12)
k.push(A.q(t,A.X(D.a2b,A.b0(j),t,t,t,24),B.f,t,t,new A.p(w,t,t,v,t,t,B.n),t,52,t,t,t,t,t,52))}k.push(B.bd)
k.push(A.E(A.d(s.b,t,t,t,t,t,t,A.l(t,t,r?B.aP:B.T,t,t,t,t,t,t,t,t,13,t,t,B.V,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(A.X(B.eJ,r?B.bK:B.am,t,t,t,22))
return A.aI(!1,B.a3,!0,p,A.aP(!1,o,!0,A.q(t,A.A(k,B.l,t,B.e,B.i,0,t,t),B.f,t,t,new A.p(t,t,m,n,l,t,B.n),t,t,t,t,B.bh,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.e9h(u.a,s),t,t,t,t,t,t,t),B.f,q,0,t,t,t,t,t,B.aj)},
$S:81}
C.e9h.prototype={
$0(){return this.a.cjB(this.b)},
$S:0}
C.cfO.prototype={
$1(d){return new C.acL(d,this.a,null)},
$S:z+48}
C.cOy.prototype={
$0(){var w=this.a.c,v=w.c,u=A.oi(v==null?w.b:v)
if(u!=null)A.iY(u,B.ft,null)},
$S:0}
C.cOz.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.cOA.prototype={
$1(d){var w=null,v=this.a.d.a,u=A.d("\u2022  ",w,w,w,w,w,w,A.l(w,w,v?B.cu:B.aM,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=B.a.i(d)
return new A.D(B.mZ,A.A(A.a([u,A.E(A.d(t,w,w,w,w,w,w,A.l(w,w,v?B.cu:B.aM,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.E,w,B.e,B.i,0,w,w),w)},
$S:136}
C.dqc.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dqe.prototype={
$0(){return this.a.m(new C.dqd(this.b))},
$S:0}
C.dqd.prototype={
$0(){var w=this.a
return w.a.f?w.hg(0):w.qp(0)},
$S:0}
C.ftM.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.ea_.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.DV)w.z=v
else w.Q=v},
$S:0}
C.e9R.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=B.d.gd5(v).Q
v.toString
w.mp(v,B.cw,B.eR)},
$S:7}
C.e9T.prototype={
$1(d){return J.t(d,"role")==="ai"},
$S:95}
C.e9U.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.I(["role","user","text",this.b],v,v))
w.d.bP(0,B.ce)
w.r=!0},
$S:0}
C.e9V.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.I(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.e9W.prototype={
$1(d){var w=J.a7(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+A.w(w.h(d,"text"))},
$S:157}
C.e9X.prototype={
$0(){var w=x.N
return this.a.f.push(A.I(["role","ai","text",this.b],w,w))},
$S:0}
C.e9Y.prototype={
$0(){var w=x.N
return this.a.f.push(A.I(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.e9Z.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e9S.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=A.n5(l,B.bD.j(0.9),l,l,l,l,l,2,l,l)
return new A.D(B.bQ,A.A(A.a([new A.a5(22,22,k,l),B.au,A.d("Writing full song\u2026",l,l,l,l,l,l,A.l(l,l,this.b?B.aD:B.dO,l,l,l,l,l,l,l,l,12,B.cH,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),B.l,l,B.e,B.i,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?B.aa:B.a6
k=k.c
k.toString
k=A.aH(k,B.c1,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new A.a9(B.a6,B.aa,B.x,A.a([B.aF,B.bD.j(0.85)],x.O),l,l)
else{q=x.O
q=new A.a9(B.a6,B.aa,B.x,v?A.a([B.bq,B.T],q):A.a([B.c,B.aP],q),l,l)}p=A.a([new A.ac(0,B.G,(u?B.bD:B.aF).j(0.22),B.j7,14)],x.V)
o=A.L(B.c.j(u?0.2:0.08),B.r,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=B.c
else v=v?B.aO:B.bo
n=u?13.5:15
m=u?B.bt:B.cH
return new A.bM(t,l,l,A.q(l,A.d(w,l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?B.a8:B.cD,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,new A.aY(0,k.a.a*0.94,0,1/0),new A.p(l,l,o,new A.be(B.il,B.il,new A.aN(s,s),new A.aN(r,r)),p,q,B.n),l,l,l,B.kS,B.jn,l,l,l),l)},
$S:41}
C.ea6.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&A.c()
w=m.x
w===$&&A.c()
v=A.m(22)
u=this.b
t=x.O
s=u?A.a([D.agJ,B.T,B.od],t):A.a([B.qd,B.qa,B.qc],t)
w=A.a([new A.ac(-4,B.G,B.aF.j(0.35+w*0.25),B.dv,28)],x.V)
r=A.L(B.c.j(u?0.08:0.5),B.r,1)
q=A.dr()
p=q.a
p.$flags&2&&A.aj(p)
p[11]=0.001
m=m.x
m===$&&A.c()
q.fL(m*0.08)
q=A.fz(B.A,A.q(o,D.bVj,B.f,o,o,new A.p(o,o,A.L(B.aS.j(0.6),B.r,2),o,o,D.ezl,B.a7),o,44,o,o,o,o,o,44),o,q,!0)
m=A.oe(B.jT,D.fW9,new C.ea3())
p=x.p
m=A.a([A.A(A.a([q,B.bd,A.E(A.x(A.a([m,A.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,A.l(o,o,u?B.aT:B.aV,o,o,o,o,o,o,o,o,10,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),B.E,o,B.e,B.i,0,B.p),1)],p),B.l,o,B.e,B.i,0,o,o),B.af,A.A(A.a([n.axm(D.DV,"Swahili","\ud83c\uddf9\ud83c\uddff",u),B.ae,n.axm(D.aKC,"English","\ud83c\uddec\ud83c\udde7",u),B.ae,n.axm(D.DW,"Mix","\ud83d\udd25",u)],p),B.l,o,B.e,B.i,0,o,o)],p)
if(n.x!==D.DW){t=A.a([B.U,n.cCU(u)],p)
if(n.w){q=n.x===D.DV?D.a6o:D.a5t
p=A.U(q).k("N<1,v>")
q=A.C(new A.N(q,new C.ea4(n,u),p),p.k("ak.E"))
t.push(new A.D(B.jE,A.bU(B.bG,q,B.bs,o,6,6),o))}B.d.v(m,t)}else{t=A.a([B.bD.j(0.22),B.aF.j(0.12)],t)
q=A.m(12)
p=A.L(B.bD.j(0.45),B.r,1)
m.push(new A.D(B.jE,A.q(o,A.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,A.l(o,o,u?B.ir:B.km,o,o,o,o,o,o,o,o,10,o,o,B.V,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),B.f,o,o,new A.p(o,o,p,q,o,new A.a9(B.a6,B.aa,B.x,t,o,o),B.n),o,o,o,o,B.bV,o,o,o),o))}m.push(B.U)
t=x.dc
n=A.C(new A.N(D.dlo,new C.ea5(n,u),t),t.k("ak.E"))
m.push(A.A(n,B.l,o,B.e,B.i,0,o,o))
return A.q(o,A.x(m,B.al,o,B.e,B.i,0,B.p),B.f,o,o,new A.p(o,o,r,v,w,new A.a9(B.aA,B.aE,B.x,s,o,o),B.n),o,o,o,I.alw,I.alH,o,o,o)},
$S:91}
C.ea3.prototype={
$1(d){return D.c8x.aK(0,d)},
$S:73}
C.ea4.prototype={
$1(d){return this.a.cCV(d,this.b)},
$S:z+49}
C.ea5.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aKE?6:0,m=o?5:0,l=A.m(12)
if(o){w=this.b
v=w?B.aF.j(0.45):B.aF.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=B.w.j(w?0.25:0.05)
u=v
v=w
w=u}t=A.m(12)
p=p.r?q:new C.ea2(p,d)
s=C.hWF(d)
if(o)r=B.c
else r=v?B.ab:B.bo
r=A.d(s,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.hWG(d)
if(o)v=B.ab
else v=v?B.bW:B.dO
return A.E(new A.D(new A.R(0,0,n,0),A.aI(!1,B.a3,!0,l,A.aP(!1,t,!0,new A.D(O.NX,A.x(A.a([r,A.d(s,q,q,q,q,q,q,A.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.l,q,B.e,B.i,0,B.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,w,m,q,q,q,q,q,B.aj),q),1)},
$S:z+50}
C.ea2.prototype={
$0(){var w=this.a
return w.m(new C.ea1(w,this.b))},
$S:0}
C.ea1.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.ea8.prototype={
$0(){var w=this.a
return w.m(new C.ea7(w))},
$S:0}
C.ea7.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e9Q.prototype={
$0(){var w=this.a
return w.m(new C.e9P(w,this.b))},
$S:0}
C.e9P.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.DW
if(v===D.aKC&&w.Q==null)w.Q=B.d.gH(D.a5t).a},
$S:0}
C.ea9.prototype={
$0(){return this.a.cyk(this.b.a)},
$S:0}
C.ea0.prototype={
$0(){return this.a.Jv(this.b)},
$S:0}
C.e9N.prototype={
$1(d){return this.a.b1i()},
$S:2}
C.e9O.prototype={
$0(){return this.a.b1i()},
$S:0}
C.h0V.prototype={
$1(d){var w=this
return new C.a_N(w.a,w.b,w.c,new C.h0U(w.d),null)},
$S:z+51}
C.h0U.prototype={
$0(){return J.lL(this.a.bl())},
$S:0}
C.dnw.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.bjY()},
$S:32}
C.dnx.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a.f
m===$&&A.c()
m=m.x
m===$&&A.c()
w=this.b
v=m*3.141592653589793*2+w*0.55
m=this.c
u=x.w
t=A.aH(m,B.c1,u).w
s=Math.cos(v)
u=A.aH(m,B.c1,u).w
m=Math.sin(v*1.3)
r=Math.sin(v)
q=(w&1)===0
p=q?B.ee:B.hw
o=B.o.F(w,4)
q=q?B.av:B.aN
return A.ap(n,A.d6(A.X(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:283}
C.dnC.prototype={
$0(){},
$S:0}
C.dnB.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&A.c()
w=t.x
w===$&&A.c()
v=B.l9.aA(0,B.j.D(w,0,1))
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793)
w=A.dr()
u=w.a
u.$flags&2&&A.aj(u)
u[11]=0.0028
w.fL(t*0.08)
w.km(0.12)
return A.e6(B.A,A.fz(B.A,e,null,w,!0),0.5+v*0.5,null,null)},
$S:45}
C.dny.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=0.55+r*0.45
r=A.q(t,t,B.f,t,t,new A.p(t,t,t,t,A.a([new A.ac(6,B.G,B.av.j(w*0.5),B.H,36)],x.V),t,B.a7),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new A.an(B.A,t,B.ad,B.t,A.a([r,new A.a5(96,96,A.n5(B.c.j(0.08),B.av,t,t,t,t,t,6,u/v,t),t),A.d(""+s.a.c,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,38,t,t,B.u,t,t,!0,t,t,t,t,t,A.a([new A.cU(B.av.j(w),B.H,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:116}
C.dnz.prototype={
$1(d){return D.c8B.aK(0,d)},
$S:73}
C.dnA.prototype={
$0(){var w=this.a
w.a.bjY()
w.a.e.$0()},
$S:0}
C.chL.prototype={
$1(d){var w=!1
if(B.a.i(d.b.toLowerCase())===this.a)if(d.d===B.fP)if(d.x===B.dE){w=d.w
w=B.a.i(w==null?"":w)===this.b}return w},
$S:15}
C.chY.prototype={
$1(d){return d.a===this.a},
$S:15}
C.eol.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.ep1.prototype={
$1(d){var w=this.a
if(w.c!=null)w.Qt()},
$S:7}
C.ep2.prototype={
$1(d){var w=$.aW.p2$
if(w===B.tQ||w===B.tR)return
this.a.Fd()},
$S:11}
C.ep3.prototype={
$1(d){this.a.cF2()},
$S:11}
C.eoK.prototype={
$0(){this.a.JZ(this.b.d,!1)},
$S:0}
C.eoL.prototype={
$0(){},
$S:0}
C.eoM.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.eoN.prototype={
$0(){},
$S:0}
C.eoO.prototype={
$1(d){return d.a===this.a},
$S:15}
C.eoP.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.eoQ.prototype={
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
C.eoF.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=A.bq(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=A.bq(v[1],!0,x.N)
w.PG()
w.a9u()},
$S:0}
C.eom.prototype={
$0(){this.b.JZ(this.c.d+this.a.a,!1)},
$S:0}
C.eoG.prototype={
$1(d){var w=d.d
return(w===B.fP||w===B.f0)&&d.x===B.dE},
$S:15}
C.eoH.prototype={
$1(d){return d.a},
$S:163}
C.eoI.prototype={
$1(d){return d.a===this.a},
$S:15}
C.eoJ.prototype={
$0(){},
$S:0}
C.eoq.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bq(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=A.bq(v[0],!0,x.N)},
$S:0}
C.eor.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.eoz.prototype={
$0(){},
$S:0}
C.eow.prototype={
$0(){return this.a.a.c.d},
$S:80}
C.eox.prototype={
$0(){var w=this.a,v=A.C(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.eoy.prototype={
$0(){var w=this.a,v=A.C(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.eoA.prototype={
$0(){return this.a.z=!0},
$S:0}
C.eoB.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new A.vZ(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.eoC.prototype={
$0(){return this.a.z=!1},
$S:0}
C.eoE.prototype={
$0(){var w=this.a
return w.m(new C.eoD(w))},
$S:0}
C.eoD.prototype={
$0(){return this.a.y=1},
$S:0}
C.eos.prototype={
$0(){return this.a.y=1},
$S:0}
C.eot.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.eoU.prototype={
$1(d){return d.a.length===0},
$S:15}
C.eoV.prototype={
$2(d,e){return e.y.aS(0,d.y)},
$S:76}
C.eoZ.prototype={
$0(){var w=this.a
return w.m(new C.eoS(w))},
$S:0}
C.eoS.prototype={
$0(){return this.a.y=1},
$S:0}
C.ep_.prototype={
$0(){var w=this.a
return w.m(new C.eoR(w))},
$S:0}
C.eoR.prototype={
$0(){return this.a.y=2},
$S:0}
C.ep0.prototype={
$0(){return A.j0(this.a,null)},
$S:0}
C.eoW.prototype={
$2$cloudRequest(d,e){return this.a.b2v(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1677}
C.eoX.prototype={
$0(){return this.a.Fd()},
$S:1}
C.eoY.prototype={
$0(){var w=this.a
return w.m(new C.eoT(w))},
$S:0}
C.eoT.prototype={
$0(){var w=this.a
return w.y=B.o.D(w.y-1,0,2)},
$S:0}
C.eop.prototype={
$0(){A.eY()
var w=this.a
w.m(new C.eoo(w))},
$S:0}
C.eoo.prototype={
$0(){return this.a.y=0},
$S:0}
C.eon.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=A.bHh(A.q(t,t,B.f,t,t,new A.p(t,t,A.L(B.c.j(0.55),B.r,1.2),t,A.a([new A.ac(1,B.G,B.aC.j(0.55),B.H,18)],x.V),D.c6C,B.a7),t,t,t,t,t,t,t,t),B.e3,B.rR,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=A.a([],w)
for(u=0;u<3;++u)v.push(r.c7R(u))
return new A.an(B.a0,t,B.ad,B.t,A.a([q,A.A(v,B.l,t,B.e,B.i,0,t,t)],w),t)},
$S:67}
C.eov.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
A.eY()
w.m(new C.eou(w,v))},
$S:0}
C.eou.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.drX.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===B.fP||v===B.f0)return!0
if(d.c!==0)v=B.a.q(w,"clock-in daily earnings")||B.a.q(w,"clock-in earnings")
else v=!1
return v},
$S:15}
C.drY.prototype={
$1(d){return new A.V(Date.now(),0,!1)},
$S:574}
C.drZ.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new A.V(Date.now(),0,!1)
u=A.dF(C.h8F(v.c,u))
w=this.c?new C.drW(v):null
return v.baW(this.b,B.qP,D.eW,w,"Today","$"+u,D.eW)},
$S:1679}
C.drW.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.ds_.prototype={
$2(d,e){var w=this.a
return w.baW(this.b,B.ku,B.ch,w.w,"Balance","$"+A.dF(A.LU(w.c.a,new C.drV(w))),B.co)},
$S:69}
C.drV.prototype={
$0(){return this.a.c.d},
$S:80}
C.drQ.prototype={
$0(){this.a.a.cXc()
return null},
$S:0}
C.drR.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(w,w,w,new C.bxP(v,w),B.az)},
$S:56}
C.drS.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.bdm(v,!0,B.aC,D.pb,w)}else{v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.bdl(v,D.pb,w)}return A.b4(w,w,w,v,B.az)},
$S:56}
C.drT.prototype={
$1(d){return new A.V(Date.now(),0,!1)},
$S:574}
C.drU.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new A.V(Date.now(),0,!1)
w=r.a
v=w.a.cVS(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:B.j.D(v/u,0,1)}u=w.d
u===$&&A.c()
s=w.e
s===$&&A.c()
return A.c8(new A.h6(A.a([u,s],x.U)),new C.drP(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1680}
C.drP.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=A.a([],m),k=o.b
if(k)B.d.v(l,A.ir(7,new C.drO(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&A.c()
v=v.x
v===$&&A.c()
u=o.d
l.push(A.b4(n,n,n,new C.bdk(o.c,v,k,u,D.pb,D.bvB,n),D.fdK))
v=A.L(B.c.j(0.1),B.r,1.2)
if(k)t=B.wD
else t=o.e?B.wx:D.bQs
t=A.X(t,k?D.pb:B.b0,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=A.d(s,n,n,n,n,n,n,A.l(n,n,B.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,B.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+A.dF(w.f&&w.d>0?w.d:o.f)}q=k?D.pb:B.c
w=A.d(w,n,n,n,n,n,n,A.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,B.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=A.m(999)
p=u.j(0.16)
u=A.L(u.j(0.5),B.r,1)
l.push(A.q(n,A.x(A.a([t,B.an,s,B.ax,w,B.U,A.q(n,A.d(o.r,n,n,n,n,n,n,A.l(n,n,k?D.pb:B.pg,n,n,n,n,n,n,n,n,9,n,n,B.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),B.f,n,n,new A.p(p,n,u,q,n,n,B.n),n,n,n,n,B.lh,n,n,n)],m),B.l,n,B.bb,B.i,0,B.p),B.f,n,n,new A.p(B.L,n,v,n,n,n,B.a7),n,176,n,n,n,n,n,176))
return A.at(new A.a5(276,276,new A.an(B.A,n,B.ad,B.f,l,n),n),n,n,n)},
$S:233}
C.drO.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=B.j.F(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=B.o.F(d,3)
t=B.o.F(d,2)
return A.ap(s,new A.dw(!0,A.d6(A.q(s,s,B.f,s,s,new A.p(s,s,s,A.m(40),s,new A.bY(B.A,0.5,B.x,s,0,A.a([D.pb.j(0.38),B.c.j(0.08),B.L],x.O),s,s),B.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:241}
C.dsg.prototype={
$0(){},
$S:0}
C.dsh.prototype={
$0(){},
$S:0}
C.dsi.prototype={
$1(d){return d.x===B.dE},
$S:15}
C.ds2.prototype={
$0(){return this.a.a.d.d},
$S:80}
C.ds1.prototype={
$0(){var w,v
A.eY()
w=this.a
v=this.b
w.m(new C.ds0(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)A.f3(null,x.H)}},
$S:0}
C.ds0.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dsd.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=A.m(12),q=s?w.b.j(0.18):B.c.j(0.04),p=A.L(s?w.b.j(0.7):B.c.j(0.08),B.r,1)
return A.E(new A.D(B.jo,A.aA(v,A.cT(B.A,A.d("$"+t,v,v,v,v,v,v,A.l(v,v,s?w.b:B.ab,v,v,v,v,v,v,v,v,13,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,B.b1,new A.p(q,v,p,r,v,v,B.n),B.h2,v,38,v,v,v,v,v,v),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dsf(u,d),v,v,v,v,v,v,!1,B.a4),v),1)},
$S:1682}
C.dsf.prototype={
$0(){A.eY()
var w=this.a
w.m(new C.dse(w,this.b))},
$S:0}
C.dse.prototype={
$0(){var w=""+this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.dsc.prototype={
$4$bold$color(d,e,f,g){var w=null,v=A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?B.c:g,t=f?15:13
return new A.D(B.wf,A.A(A.a([v,B.b5,A.d(e,w,w,w,w,w,w,A.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?B.u:B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1683}
C.dsb.prototype={
$1(d){return this.a.m(new C.dsa())},
$S:2}
C.dsa.prototype={
$0(){},
$S:0}
C.ds5.prototype={
$1(d){return this.a.aYK(d)&&!A.hgH(d)},
$S:15}
C.ds6.prototype={
$2(d,e){return e.y.aS(0,d.y)},
$S:76}
C.ds7.prototype={
$0(){return this.a.a.d.d},
$S:80}
C.ds8.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return A.b(x.r.b(s)?s:A.dQ(s,x.H),$async$$0)
case 2:if(t.c!=null)t.m(new C.ds4())
t.ml("Balance refreshed.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ds4.prototype={
$0(){},
$S:0}
C.ds9.prototype={
$0(){var w=this.a
return w.m(new C.ds3(w))},
$S:0}
C.ds3.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fLn.prototype={
$2(d,e){return e.y.aS(0,d.y)},
$S:76}
C.fDc.prototype={
$1(d){var w=J.a7(d),v=w.h(d,"toEmail"),u=!1
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.z(v,this.b)){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fW5.prototype={
$1(d){var w=J.a7(d),v=w.h(d,"toEmail")
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.z(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fDb.prototype={
$1(d){var w,v,u
if(!C.iir(d,this.a))return!1
w=J.a7(d)
v=w.h(d,"sessionUpdatedAt")
v=A.bj(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=A.bj(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=A.bj(J.k(w==null?"":w))}if(u!=null&&B.o.aq(new A.V(Date.now(),0,!1).bD(u).a,36e8)>72)return!1
return!0},
$S:4}
C.fru.prototype={
$1(d){var w=this.a
if(B.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:72}
C.fUE.prototype={
$0(){return $.he4=null},
$S:12}
C.fUF.prototype={
$1(d){return A.a3(d,x.N,x.z)},
$S:8}
C.fSx.prototype={
$1(d){return A.a3(d,x.N,x.z)},
$S:8}
C.fSy.prototype={
$0(){var w,v=this.a
$.hdQ.W(0,v)
w=C.uw(this.b,v)
if(w!=null)A.RN(A.a([A.a3(w,x.N,x.z)],x._),v)},
$S:0}
C.fXh.prototype={
$1(d){return new C.a0A(this.a,this.b,null)},
$S:z+56}
C.ej3.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.ej6.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.ej7.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.m(new C.ej5(w))},
$S:2}
C.ej5.prototype={
$0(){return this.a.f=""},
$S:0}
C.ej8.prototype={
$1(d){return this.a.b1y()},
$S:2}
C.ej9.prototype={
$0(){var w=this.a
return w.m(new C.ej4(w,this.b))},
$S:0}
C.ej4.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fCa.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+B.a.b2(d,1)},
$S:14}
C.fC9.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+B.a.b2(d,1)},
$S:14}
C.fUV.prototype={
$1(d){var w,v=x.f
if(v.b(d))return A.a3(d,x.N,x.z)
try{v=A.a3(v.a(d.aj()),x.N,x.z)
return v}catch(w){return A.T(x.N,x.z)}},
$S:13}
C.fUW.prototype={
$1(d){return J.cJ(d)},
$S:4}
C.fOL.prototype={
$1(d){return d.a!=="send_email"},
$S:299}
C.fUm.prototype={
$1(d){var w=null,v=B.w.j(0.35),u=A.m(10),t=A.L(B.aU,B.r,1)
return A.q(B.A,A.d(d,w,w,w,w,w,w,B.hl,w,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,86,w,B.f4,w,w,w,72)},
$S:573}
C.cjE.prototype={
$1(d){return J.k(d)},
$S:17}
C.cjF.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b7(d,new C.cjD(),x.S)
w=A.C(w,w.$ti.k("ak.E"))
return w}return A.c_(7,0,!1,x.S)},
$S:572}
C.cjD.prototype={
$1(d){var w
if(A.iU(d))w=d
else{w=A.ca(J.k(d),null)
if(w==null)w=0}return w},
$S:427}
C.cjG.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b7(d,new C.cjC(),x.S)
w=A.C(w,w.$ti.k("ak.E"))
return w}return A.c_(8,0,!1,x.S)},
$S:572}
C.cjC.prototype={
$1(d){var w
if(A.iU(d))w=d
else{w=A.ca(J.k(d),null)
if(w==null)w=0}return w},
$S:427}
C.cjI.prototype={
$1(d){return A.bq(d,!0,x.S)},
$S:571}
C.cjJ.prototype={
$1(d){return A.bq(d,!0,x.S)},
$S:571}
C.cjB.prototype={
$1(d){var w=this.a
if(B.o.F(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:72}
C.cjH.prototype={
$2(d,e){return d+e},
$S:61}
C.cjA.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.t(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:61}
C.fEU.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.fEO.prototype={
$0(){return this.a.$1(D.qY)},
$S:0}
C.fEP.prototype={
$0(){return this.a.$1(D.qY)},
$S:0}
C.fEQ.prototype={
$0(){return this.a.$1(D.qY)},
$S:0}
C.fER.prototype={
$0(){return this.a.$1(D.qY)},
$S:0}
C.fES.prototype={
$0(){return this.a.$1(D.qY)},
$S:0}
C.fET.prototype={
$0(){return this.a.$1(D.qY)},
$S:0}
C.foD.prototype={
$2(d,e){var w,v,u=this,t=null,s=B.o.aq(e,8),r=B.o.F(e,8),q=B.o.F(s+r,2),p=u.a,o=J.t(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.Z8:D.bhG
if(o===0)w=t
else{w=x.O
w=o===1?A.a([B.c,B.aO],w):A.a([B.bq,B.w],w)
v=n?B.aS:B.ds
w=A.q(t,t,B.f,t,t,new A.p(t,t,A.L(v,B.r,n?3:1),t,A.a([new A.ac(0,B.G,B.w.j(0.35),B.dG,4)],x.V),new A.bY(B.A,0.5,B.x,t,0,w,t,t),B.a7),t,28,t,t,t,t,t,28)}return A.aA(t,A.q(t,A.at(w,t,t,t),B.f,q,t,t,t,t,t,t,t,t,t,t),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.foC(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,B.a4)},
$S:82}
C.foC.prototype={
$0(){var w=this,v=w.a,u=v.d18(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.qY:D.Jd
w.f.$1(v)}},
$S:0}
C.fCu.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new A.a5(u,u,A.ip(!0,v,v,B.y,P.aTF,new C.fCt(w.a,w.b,w.c,w.d,u),9,v,B.dW,B.ah,!1),v)},
$S:154}
C.fCt.prototype={
$2(d,e){var w=this,v=null,u=A.m(12),t=A.m(12),s=w.a,r=s.at[e],q=r==="X"?B.aH:B.ay
return A.aI(!1,B.a3,!0,u,A.aP(!1,t,!0,A.at(A.d(r,v,v,v,v,v,v,A.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fCs(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),B.f,B.fU,0,v,v,v,v,v,B.aj)},
$S:81}
C.fCs.prototype={
$0(){var w=this,v=w.a.d1a(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.fnW.prototype={
$1(d){return new A.D(B.jo,C.fSo(d,!1),null)},
$S:309}
C.fnX.prototype={
$1(d){return C.fSo(d,!1)},
$S:1687}
C.fnY.prototype={
$0(){var w=this,v=w.a
v.cLw(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.fnZ.prototype={
$0(){var w=this
w.a.cLx(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.fzq.prototype={
$1(d){var w=this,v=null,u=d*6
return A.n3(v,B.bq,A.d(""+u,v,v,v,v,v,v,B.cg,v,v,v),B.dg,new C.fzp(w.a,w.b,u,w.c,w.d),v,v,new A.ay(B.c.j(0.2),1,B.r,-1),v)},
$S:1688}
C.fzp.prototype={
$0(){var w=this,v=w.a,u=w.b.aw(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.fBl.prototype={
$1(d){return D.dpC[d]},
$S:78}
C.fBm.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=A.a([s.aw(6),s.aw(6),s.aw(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.fyf.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.fyg.prototype={
$0(){var w=this,v=w.a
if(w.b.ai()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.fp5.prototype={
$0(){var w=this,v=w.a.cRn(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.fp4.prototype={
$1(d){var w,v=null,u=J.t(this.a.fr[5-d],this.b)
if(u===0)w=B.mS
else w=u===1?B.dM:B.tg
return new A.fH(1,A.q(v,v,B.f,v,v,new A.p(w,v,A.L(B.bA,B.r,1),v,v,v,B.a7),v,v,v,B.nG,v,v,v,v),v)},
$S:1689}
C.fyr.prototype={
$1(d){var w=this
if(w.a.bep(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.fys.prototype={
$0(){var w=this
if(w.a.bep(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.fox.prototype={
$0(){var w=this
if(w.a.ai()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fKq.prototype={
$1(d){var w=J.t(d,"email")
return B.a.q(B.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fKr.prototype={
$1(d){var w,v=J.a7(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=B.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+B.a.i(J.k(v==null?"":v))+">"},
$S:53}
C.eQ8.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aMk.prototype
w.by7=w.Y
w.by6=w.t
w=C.aMl.prototype
w.by9=w.Y
w.by8=w.t
w=C.aMm.prototype
w.byb=w.Y
w.bya=w.t
w=C.aNi.prototype
w.bz9=w.Y
w.bz8=w.t
w=C.aMS.prototype
w.byI=w.t
w=C.aNs.prototype
w.bzj=w.t
w=C.aMn.prototype
w.byc=w.t
w=C.aNA.prototype
w.bzs=w.t
w=C.aMs.prototype
w.byh=w.t
w=C.aMI.prototype
w.byy=w.t
w=C.aOb.prototype
w.bA3=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.aC3.prototype,"gbUQ","bUR",19)
v(q,"gaUX","aUY",1)
v(C.aC2.prototype,"gcBN","a37",1)
v(q=C.aC4.prototype,"gc_m","c_n",1)
v(q,"gbJN","bJO",1)
v(q=C.az9.prototype,"gcuN","cuO",1)
v(q,"gcj8","QW",0)
v(q,"gcFS","cFT",1)
v(q,"gcxR","nf",0)
w(q,"gcnw","cnx",25)
w(q,"gcE9","SI",33)
v(q=C.aE9.prototype,"gbSM","Yo",0)
v(q,"gc8y","ZU",0)
v(q,"gc8v","ZT",0)
v(q,"gc8w","ael",0)
v(q,"gc8x","PK",0)
v(C.aBm.prototype,"gc8z","c8A",1)
u(C,"iqj","hUS",58)
t(C,"hgP",0,null,["$1","$0"],["hCB",function(){return C.hCB(null)}],3,0)
t(C,"bFM",0,null,["$1","$0"],["hCA",function(){return C.hCA(null)}],3,0)
v(C.NS.prototype,"gEY","cgi",1)
v(C.aEU.prototype,"gcv5","Bk",0)
v(q=C.aF9.prototype,"gcjs","QY",0)
v(q,"gcof","a1j",0)
v(q,"gccx","ccy",1)
v(q=C.aFl.prototype,"gccC","afm",0)
v(q,"gbDl","a9m",0)
v(q,"gcvl","a2g",0)
s(q,"gcgN","cgO",35)
v(C.aHi.prototype,"gbDN","a9o",1)
v(q=C.aHh.prototype,"gccB","afl",0)
v(q,"gcip","agu",0)
v(q=C.aFn.prototype,"gc30","ad5",0)
v(q,"gc32","Z3",0)
v(q,"gc31","ad6",0)
v(q=C.aFm.prototype,"gbG8","bG9",1)
v(q,"gbGa","bGb",1)
v(C.aFo.prototype,"gbM0","bM1",1)
v(C.aCo.prototype,"gccE","ccF",1)
v(q=C.aFK.prototype,"gb1r","ccW",1)
r(q,"gb2t",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["ag7","azR","b2v","b2u"],52,0,0)
r(q,"gcg0",0,4,null,["$4"],["cg1"],53,0,0)
v(q,"gci7","a0u",0)
v(q,"gcj_","agB",0)
v(q,"gciV","agz",0)
v(q,"gc6a","adS",0)
w(C.aDa.prototype,"gc4R","c4S",54)
w(q=C.aDc.prototype,"gcD2","cD3",55)
v(q,"gcBD","cBE",1)
v(q,"gcJG","cJH",1)
v(C.aFy.prototype,"gcdh","b1y",1)
v(C.aGk.prototype,"gb2_","azC",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.iJ,[C.cAm,C.cAj,C.cAk,C.cAl,C.cAi,C.fbY,C.fbW,C.fc_,C.fbX,C.fvs,C.djX,C.dk7,C.dkf,C.dkg,C.dki,C.dka,C.dk8,C.dk9,C.dkb,C.dkc,C.dk2,C.dk3,C.dk1,C.dk5,C.dk6,C.dk_,C.djZ,C.dkk,C.dkn,C.dYi,C.dYh,C.dYj,C.dYg,C.dYf,C.djR,C.djU,C.djV,C.djT,C.djS,C.dlJ,C.dlK,C.dlL,C.dkZ,C.dl_,C.dlt,C.dle,C.dlf,C.dlg,C.dlh,C.dli,C.dkr,C.dkY,C.dlu,C.dlD,C.dlr,C.dlq,C.dkW,C.dkX,C.dlz,C.dlA,C.dkt,C.dku,C.dl7,C.dl8,C.dl9,C.dl6,C.dlj,C.dlk,C.dll,C.dlm,C.dln,C.dlo,C.dlx,C.dla,C.dlb,C.dlc,C.dld,C.dlB,C.dlC,C.dkv,C.dkw,C.dkx,C.dky,C.dlv,C.dlw,C.dl5,C.dlp,C.dl3,C.dlE,C.dlF,C.dlG,C.dl0,C.dkK,C.dkJ,C.dkI,C.dkO,C.dkH,C.dkF,C.dkA,C.dkD,C.dkz,C.dkT,C.dkU,C.dkB,C.dpi,C.cLI,C.cLy,C.cLz,C.cLS,C.cLP,C.cLQ,C.cLR,C.cLK,C.cLJ,C.cLA,C.cLL,C.cMa,C.cM6,C.cM5,C.cLG,C.cLH,C.cLD,C.cLO,C.cLW,C.cLX,C.cLY,C.cLZ,C.cM_,C.cM0,C.cM1,C.cMm,C.cMf,C.cMc,C.cMh,C.cMe,C.cMb,C.cLB,C.cM8,C.dFP,C.dFQ,C.dFG,C.dFE,C.dFO,C.dFD,C.dFC,C.dFF,C.dFK,C.dFL,C.dFI,C.dFJ,C.dFR,C.dFS,C.dFT,C.dFU,C.f5u,C.f5v,C.deO,C.fLh,C.dMh,C.dM9,C.dMb,C.dMf,C.dMa,C.dMc,C.dMd,C.cca,C.fSm,C.fSl,C.dFr,C.dFq,C.dFs,C.dFp,C.e4R,C.e4S,C.e4Z,C.h08,C.h09,C.c4x,C.dYo,C.dYp,C.dYq,C.dYr,C.dYs,C.dYt,C.dYn,C.dYu,C.dYm,C.dYx,C.dYw,C.dYv,C.e56,C.e57,C.e54,C.e53,C.e55,C.e51,C.e95,C.e96,C.e8P,C.e8R,C.e92,C.e93,C.e8Y,C.e8W,C.e91,C.e8Z,C.e8T,C.e8S,C.e97,C.cV1,C.cV_,C.cV0,C.cUZ,C.cV4,C.cV5,C.f0o,C.f0t,C.f0q,C.f0s,C.f0r,C.f0k,C.f0j,C.f0m,C.f0l,C.e9s,C.e9x,C.e9t,C.e9u,C.e9w,C.e9C,C.e9D,C.e9E,C.e9F,C.e9G,C.e9H,C.e9I,C.e9J,C.e9B,C.e9K,C.e9A,C.e9z,C.e9y,C.e9l,C.e9m,C.e9d,C.e9e,C.e9f,C.e9h,C.cOy,C.dqc,C.dqe,C.dqd,C.ea_,C.e9U,C.e9V,C.e9X,C.e9Y,C.e9Z,C.ea2,C.ea1,C.ea8,C.ea7,C.e9Q,C.e9P,C.ea9,C.ea0,C.e9O,C.h0U,C.dnC,C.dnA,C.eol,C.eoK,C.eoL,C.eoM,C.eoN,C.eoP,C.eoQ,C.eoF,C.eom,C.eoJ,C.eoq,C.eor,C.eoz,C.eow,C.eox,C.eoy,C.eoA,C.eoB,C.eoC,C.eoE,C.eoD,C.eos,C.eot,C.eoZ,C.eoS,C.ep_,C.eoR,C.ep0,C.eoX,C.eoY,C.eoT,C.eop,C.eoo,C.eov,C.eou,C.drW,C.drV,C.drQ,C.dsg,C.dsh,C.ds2,C.ds1,C.ds0,C.dsf,C.dse,C.dsa,C.ds7,C.ds8,C.ds4,C.ds9,C.ds3,C.fUE,C.fSy,C.ej3,C.ej6,C.ej5,C.ej9,C.ej4,C.fEO,C.fEP,C.fEQ,C.fER,C.fES,C.fET,C.foC,C.fCs,C.fnY,C.fnZ,C.fzp,C.fBm,C.fyg,C.fp5,C.fys,C.fox,C.eQ8])
u(A.ht,[C.cAn,C.fbZ,C.fP4,C.fOX,C.fvp,C.fvo,C.fvr,C.dkp,C.dkq,C.dke,C.dkd,C.dkh,C.dk0,C.dk4,C.dkj,C.dYl,C.djW,C.dlM,C.dlN,C.dlO,C.dlP,C.dlQ,C.dls,C.dly,C.dks,C.dlI,C.dlH,C.dkL,C.dkM,C.dkN,C.dkP,C.dkR,C.dpj,C.cMn,C.cLN,C.cLM,C.cM4,C.cM7,C.cM3,C.cLE,C.cLV,C.cLT,C.cM9,C.cLU,C.cMi,C.cMg,C.cMl,C.c3f,C.c3e,C.c3h,C.c3g,C.dFN,C.dFM,C.dFH,C.dFV,C.dFW,C.fzZ,C.fBb,C.deP,C.deN,C.c40,C.fLg,C.dMi,C.dMg,C.ccb,C.fC2,C.fSk,C.ceC,C.ceB,C.cf3,C.e4P,C.e4Q,C.fND,C.fNq,C.fNp,C.fyj,C.cfh,C.cfi,C.cfj,C.cfg,C.cff,C.fv5,C.h04,C.h05,C.h06,C.h07,C.h03,C.e4W,C.e4X,C.e4V,C.h0a,C.dlR,C.cgR,C.fu3,C.dYy,C.e52,C.cfJ,C.cfG,C.cfI,C.cfL,C.c7F,C.c7D,C.c7I,C.cfS,C.cfR,C.cfQ,C.cfP,C.cfU,C.cfW,C.e9b,C.e8Q,C.e8O,C.e94,C.e8X,C.e90,C.e9_,C.e8V,C.e99,C.e98,C.cV2,C.cV3,C.f0p,C.f0i,C.f0n,C.cfM,C.fPn,C.e9M,C.e9v,C.e9o,C.e9p,C.e9q,C.e9r,C.e9L,C.cfO,C.cOz,C.cOA,C.ftM,C.e9R,C.e9T,C.e9W,C.ea3,C.ea4,C.ea5,C.e9N,C.h0V,C.dnw,C.dnz,C.chL,C.chY,C.ep1,C.ep2,C.ep3,C.eoO,C.eoG,C.eoH,C.eoI,C.eoU,C.eoW,C.drX,C.drY,C.drT,C.drO,C.dsi,C.dsd,C.dsc,C.dsb,C.ds5,C.fDc,C.fW5,C.fDb,C.fru,C.fUF,C.fSx,C.fXh,C.ej7,C.ej8,C.fCa,C.fC9,C.fUV,C.fUW,C.fOL,C.fUm,C.cjE,C.cjF,C.cjD,C.cjG,C.cjC,C.cjI,C.cjJ,C.cjB,C.fEU,C.fnW,C.fnX,C.fzq,C.fBl,C.fyf,C.fp4,C.fyr,C.fKq,C.fKr])
t(C.btS,A.j3)
u(A.af,[C.G0,C.amx,C.aET,C.amw,C.amy,C.ank,C.ajr,C.aoT,C.a0g,C.a0h,C.a_o,C.apo,C.aoS,C.Oo,C.aC5,C.aqv,C.ard,C.Wv,C.Qo,C.a13,C.a12,C.Ww,C.ary,C.aCY,C.arB,C.a_N,C.as7,C.aD9,C.aDb,C.a0A,C.att])
u(A.ah,[C.aJP,C.aMl,C.aNi,C.aMk,C.aMm,C.biM,C.az9,C.aE9,C.bld,C.ble,C.aBm,C.bll,C.aMS,C.aNs,C.aMn,C.aEU,C.aF9,C.aFl,C.bcR,C.aHi,C.aHh,C.aFn,C.aFm,C.bj0,C.aNA,C.aMs,C.bzO,C.aMI,C.aDc,C.aFy,C.aOb])
u(A.jw,[C.fc0,C.fvq,C.djY,C.dko,C.dkm,C.dkl,C.dYk,C.dl4,C.dl2,C.dl1,C.dkG,C.dkQ,C.dkE,C.dkS,C.dkC,C.dkV,C.cM2,C.cLF,C.cMd,C.cMk,C.cMj,C.cLC,C.deM,C.dMe,C.fC3,C.fC4,C.e4T,C.fP_,C.h02,C.e4Y,C.e50,C.e5_,C.dlS,C.cgS,C.cfK,C.cfH,C.c7G,C.c7E,C.cfV,C.e9c,C.e8U,C.e9a,C.f0v,C.f0u,C.e9n,C.e9g,C.e9i,C.e9k,C.e9j,C.e9S,C.ea6,C.dnx,C.dnB,C.dny,C.eoV,C.eon,C.drZ,C.ds_,C.drR,C.drS,C.drU,C.drP,C.ds6,C.fLn,C.cjH,C.cjA,C.foD,C.fCu,C.fCt])
t(C.axl,C.G0)
u(A.aE,[C.r9,C.aeL,C.NS,C.Jw,C.rO,C.rP,C.lY,C.is,C.id,C.baW,C.dbK,C.dqb,C.rV,C.Wx,C.OD,C.qe,C.b1d,C.pt,C.asy])
t(C.aC3,C.aMl)
t(C.blH,C.aNi)
t(C.aC2,C.aMk)
t(C.aC4,C.aMm)
u(A.lE,[C.Xb,C.aCZ,C.asl,C.JB,C.Fo])
u(A.ax,[C.a1F,C.buo,C.afv,C.R0,C.a7D,C.Og,C.ar7,C.aen,C.aem,C.b22,C.aCX,C.acT,C.b1z,C.acL,C.aDa])
t(C.blb,C.aMS)
t(C.blV,C.aNs)
t(C.bhs,C.aMn)
t(C.aFo,C.aNA)
t(C.aCo,C.aMs)
t(C.aFK,C.bzO)
t(C.bjK,C.aMI)
u(A.mk,[C.bdm,C.bdl,C.bdk,C.bcK,C.bxP,C.bsF])
t(C.aGk,C.aOb)
w(C.aMk,C.NS)
w(C.aMl,C.NS)
w(C.aMm,C.NS)
w(C.aNi,C.NS)
w(C.aMS,A.eM)
w(C.aNs,A.cd)
w(C.aMn,A.cd)
w(C.aNA,A.cd)
w(C.aMs,A.eM)
w(C.aMI,A.eM)
v(C.bzO,A.eB)
w(C.aOb,A.cd)})()
A.iT(b.typeUniverse,JSON.parse('{"btS":{"j3":[]},"G0":{"af":[],"v":[]},"aJP":{"ah":["G0<1,2>"]},"axl":{"G0":["1","hq<1>"],"af":[],"v":[],"G0.T":"1","G0.S":"hq<1>"},"amx":{"af":[],"v":[]},"aET":{"af":[],"v":[]},"amw":{"af":[],"v":[]},"amy":{"af":[],"v":[]},"ank":{"af":[],"v":[]},"ajr":{"af":[],"v":[]},"aC3":{"ah":["amx"]},"blH":{"ah":["aET"]},"aC2":{"ah":["amw"]},"aC4":{"ah":["amy"]},"biM":{"ah":["ank"]},"az9":{"ah":["ajr"]},"aoT":{"af":[],"v":[]},"a0g":{"af":[],"v":[]},"a0h":{"af":[],"v":[]},"afv":{"ax":[],"v":[]},"a_o":{"af":[],"v":[]},"aE9":{"ah":["aoT"]},"a1F":{"ax":[],"v":[]},"buo":{"ax":[],"v":[]},"bld":{"ah":["a0g"]},"ble":{"ah":["a0h"]},"R0":{"ax":[],"v":[]},"aBm":{"ah":["a_o"]},"apo":{"af":[],"v":[]},"bll":{"ah":["apo"]},"a7D":{"ax":[],"v":[]},"aoS":{"af":[],"v":[]},"blb":{"ah":["aoS"]},"Og":{"ax":[],"v":[]},"ar7":{"ax":[],"v":[]},"Oo":{"af":[],"v":[]},"blV":{"ah":["Oo"]},"aen":{"ax":[],"v":[]},"aem":{"ax":[],"v":[]},"aC5":{"af":[],"v":[]},"bhs":{"ah":["aC5"]},"b22":{"ax":[],"v":[]},"aqv":{"af":[],"v":[]},"aEU":{"ah":["aqv"]},"ard":{"af":[],"v":[]},"aF9":{"ah":["ard"]},"Wv":{"af":[],"v":[]},"Qo":{"af":[],"v":[]},"a13":{"af":[],"v":[]},"a12":{"af":[],"v":[]},"aFl":{"ah":["Wv"]},"bcR":{"ah":["Qo"]},"aHi":{"ah":["a13"]},"aHh":{"ah":["a12"]},"Ww":{"af":[],"v":[]},"aFn":{"ah":["Ww"]},"ary":{"af":[],"v":[]},"acT":{"ax":[],"v":[]},"acL":{"ax":[],"v":[]},"aCY":{"af":[],"v":[]},"aFm":{"ah":["ary"]},"aCX":{"ax":[],"v":[]},"b1z":{"ax":[],"v":[]},"bj0":{"ah":["aCY"]},"arB":{"af":[],"v":[]},"aFo":{"ah":["arB"]},"a_N":{"af":[],"v":[]},"aCo":{"ah":["a_N"]},"as7":{"af":[],"v":[]},"aD9":{"af":[],"v":[]},"aDb":{"af":[],"v":[]},"aFK":{"ah":["as7"],"eB":[]},"aDa":{"ax":[],"v":[]},"bjK":{"ah":["aD9"]},"bdm":{"aC":[]},"bdl":{"aC":[]},"bdk":{"aC":[]},"aDc":{"ah":["aDb"]},"bcK":{"aC":[]},"bxP":{"aC":[]},"a0A":{"af":[],"v":[]},"aFy":{"ah":["a0A"]},"bsF":{"aC":[]},"att":{"af":[],"v":[]},"aGk":{"ah":["att"]}}'))
A.Dh(b.typeUniverse,JSON.parse('{"NS":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=A.as
return{dw:w("lN<u?>"),gS:w("ox"),o:w("d7"),g5:w("xE"),M:w("de<n>"),k:w("V"),gv:w("l8<ai<jo>>"),gh:w("l8<n>"),gH:w("l8<H>"),r:w("aB<~>"),dk:w("a0"),fw:w("O<ox>"),E:w("O<d7>"),V:w("O<ac>"),O:w("O<u>"),A:w("O<a0>"),R:w("O<nz>"),B:w("O<ai<H>>"),m:w("O<a8<n,n>>"),_:w("O<a8<n,@>>"),b:w("O<rO>"),x:w("O<rP>"),gi:w("O<jo>"),a:w("O<lY>"),Y:w("O<id>"),v:w("O<is>"),dA:w("O<Jw>"),F:w("O<rV>"),Z:w("O<kF>"),g:w("O<fT>"),gK:w("O<+at,details,id(V,n,n)>"),C:w("O<cU>"),s:w("O<n>"),G:w("O<j3>"),eO:w("O<en>"),d9:w("O<eZ>"),p:w("O<v>"),n:w("O<F>"),t:w("O<H>"),U:w("O<aC?>"),d4:w("O<n?>"),ck:w("ai<rO>"),e:w("ai<rP>"),ac:w("ai<jo>"),dZ:w("ai<lY>"),I:w("ai<id>"),j:w("ai<@>"),L:w("ai<H>"),eq:w("a8<n,n>"),P:w("a8<n,@>"),f:w("a8<@,@>"),cl:w("cM<n,D>"),aS:w("N<a0,tL>"),dc:w("N<JB,bz>"),dv:w("N<n,n>"),bL:w("N<F,bz>"),a3:w("N<H,bz>"),gN:w("N<H,q5>"),w:w("iC"),b1:w("rO"),Q:w("rP"),bP:w("lY"),i:w("id"),u:w("is"),gp:w("Wx"),J:w("OD"),D:w("qe"),an:w("kF"),c:w("ct"),K:w("aE"),d:w("jF<n>"),di:w("+outcome,snapshot(Xb,a70?)"),ee:w("+after,before(F,F)"),et:w("+categories,error,message,replaceId(ai<id>,n?,n?,n?)"),cz:w("FP"),bJ:w("ds<n>"),N:w("n"),e7:w("br<F>"),W:w("bJ<n>"),am:w("k3<H>"),cc:w("Y<n>"),aM:w("ea<d7>"),bG:w("ea<F>"),l:w("v"),gm:w("r9"),ec:w("aeL"),q:w("mz"),y:w("P"),gR:w("F"),z:w("@"),S:w("H"),eG:w("d7?"),cJ:w("V?"),gw:w("ai<a8<n,@>>?"),bM:w("ai<@>?"),h:w("a8<n,@>?"),X:w("aE?"),gE:w("+code,qrPayload(n,n)?"),bY:w("+isLive,ownerEmail,snapshotJson(P,n,n)?"),T:w("n?"),cD:w("F?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b4a=new A.be(B.bI,B.iz,B.bI,B.iz)
D.eW=new A.u(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,B.q)
D.b4H=new A.ay(D.eW,1,B.r,-1)
D.b4J=new A.ay(B.ab,2,B.r,-1)
D.b4M=new A.ay(B.aY,2,B.r,-1)
D.b4O=new A.ay(B.cu,0.8,B.r,-1)
D.b53=new A.ay(B.aS,2,B.r,-1)
D.b5a=new A.ay(B.fd,1.6,B.r,-1)
D.b6_=new A.aY(0,330,0,1/0)
D.b65=new A.aY(0,176,0,1/0)
D.b66=new A.aY(0,1/0,0,260)
D.b6o=new A.aY(90,1/0,0,1/0)
D.b9g=new A.ac(0,B.G,B.ds,B.H,4)
D.d5C=w([D.b9g],x.V)
D.b6C=new A.p(B.c,null,null,null,D.d5C,null,B.a7)
D.d_8=w([D.eW,B.b2],x.O)
D.c9B=new A.a9(B.a6,B.aa,B.x,D.d_8,null,null)
D.b6Q=new A.p(null,null,null,null,null,D.c9B,B.a7)
D.b6V=new A.p(B.b4,null,null,null,null,null,B.a7)
D.bkp=new A.u(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,B.q)
D.dmj=w([U.agk,D.bkp],x.O)
D.c8H=new A.a9(B.b7,B.b8,B.x,D.dmj,null,null)
D.b7b=new A.p(null,null,null,B.mF,null,D.c8H,B.n)
D.bsn=new A.u(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,B.q)
D.dyH=w([D.bsn,M.aiM],x.O)
D.c7U=new A.a9(B.b7,B.b8,B.x,D.dyH,null,null)
D.b7C=new A.p(null,null,null,B.tS,null,D.c7U,B.n)
D.dhX=w([B.aF,B.bD],x.O)
D.c8p=new A.a9(B.a6,B.aa,B.x,D.dhX,null,null)
D.b7J=new A.p(null,null,null,null,null,D.c8p,B.a7)
D.fsr=new A.G(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMX=new A.B("\ud83c\udf89",null,D.fsr,null,null,null,null,null,null,null,null,null)
D.bdj=new A.cg(B.A,null,null,D.fMX,null)
D.beK=new A.u(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,B.q)
D.afs=new A.u(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,B.q)
D.bhG=new A.u(1,0.8431372549019608,0.8,0.7843137254901961,B.q)
D.bhK=new A.u(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,B.q)
D.pb=new A.u(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,B.q)
D.u2=new A.u(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,B.q)
D.agJ=new A.u(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,B.q)
D.bk2=new A.u(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,B.q)
D.YH=new A.u(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,B.q)
D.y7=new A.u(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,B.q)
D.blF=new A.u(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,B.q)
D.Z8=new A.u(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,B.q)
D.aim=new A.u(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,B.q)
D.bqd=new A.u(1,0.9529411764705882,0.9411764705882353,1,B.q)
D.bqm=new A.u(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,B.q)
D.aiQ=new A.u(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,B.q)
D.aj9=new A.u(1,0,0.8392156862745098,0.30980392156862746,B.q)
D.brR=new A.u(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,B.q)
D.brY=new A.u(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,B.q)
D.bt3=new A.u(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,B.q)
D.ZS=new A.u(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,B.q)
D.bu9=new A.u(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,B.q)
D.buK=new A.u(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,B.q)
D.a_6=new A.u(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,B.q)
D.bvB=new A.u(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,B.q)
D.ako=new A.a4T(2,"active")
D.bzX=new A.bd(42e5)
D.bA_=new A.bd(53e4)
D.bA2=new A.bd(58e4)
D.bA6=new A.bd(82e4)
D.bAT=new A.R(0,30,0,30)
D.bB0=new A.R(0,4,0,8)
D.bB4=new A.R(0,8,12,8)
D.bBJ=new A.R(12,0,12,88)
D.bBR=new A.R(12,11,12,10)
D.bCe=new A.R(13,10,12,10)
D.bCp=new A.R(14,10,14,2)
D.bCB=new A.R(14,14,10,14)
D.bD9=new A.R(16,12,16,96)
D.bDf=new A.R(16,14,16,8)
D.bDj=new A.R(16,16,16,96)
D.bDk=new A.R(16,18,16,16)
D.bDo=new A.R(16,4,16,10)
D.bEn=new A.R(18,6,18,40)
D.bEo=new A.R(18,8,18,130)
D.bEB=new A.R(20,10,20,20)
D.bEP=new A.R(20,18,20,18)
D.bET=new A.R(20,20,20,22)
D.bFf=new A.R(22,22,22,16)
D.bFW=new A.R(2,0,2,10)
D.bGF=new A.R(4,8,12,4)
D.bGT=new A.R(6,1,6,1)
D.bGV=new A.R(6,4,0,0)
D.bH0=new A.R(6,6,12,4)
D.bHn=new A.R(8,4,12,8)
D.fQx=new A.B("Activity",null,B.fD,null,null,null,null,null,null,null,null,null)
D.bJn=new A.bz(1,B.bc,D.fQx,null)
D.fZd=new A.B("Game Receipts",null,A4.vx,null,null,null,null,null,null,null,null,null)
D.fHN=new A.B("Your last 59 games \xb7 kept for 7 days",null,O.ab3,null,null,null,null,null,null,null,null,null)
D.cWu=w([D.fZd,D.fHN],x.p)
D.bwJ=new A.fj(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.cWu,null)
D.bJq=new A.bz(1,B.bc,D.bwJ,null)
D.bOh=new A.a0(58607,"MaterialIcons",!1)
D.a2b=new A.a0(62178,"MaterialIcons",!1)
D.bP7=new A.a0(62410,"MaterialIcons",!1)
D.bQg=new A.a0(63258,"MaterialIcons",!1)
D.bQl=new A.a0(63304,"MaterialIcons",!1)
D.bQm=new A.a0(63306,"MaterialIcons",!1)
D.bQs=new A.a0(63330,"MaterialIcons",!1)
D.aqO=new A.a0(984777,"MaterialIcons",!1)
D.bSW=new A.ae(B.Hm,13,B.ab,null,null,null)
D.bT3=new A.ae(B.jF,13,B.qo,null,null,null)
D.ar_=new A.ae(B.lP,null,B.c,null,null,null)
D.bUC=new A.ae(B.CU,34,B.av,null,null,null)
D.bV9=new A.ae(B.Hs,19,B.c,null,null,null)
D.bVj=new A.ae(B.ap5,24,B.aS,null,null,null)
D.bVM=new A.ae(B.Cy,28,B.bl,null,null,null)
D.bWg=new A.ae(B.aqu,42,B.c,null,null,null)
D.bWq=new A.ae(B.a38,30,B.c,null,null,null)
D.bX4=new A.ae(B.fJ,null,B.c,null,null,null)
D.bXp=new A.ae(B.jF,16,B.c,null,null,null)
D.bY4=new A.ae(B.t3,13,B.c,null,null,null)
D.bYd=new A.ae(B.lP,18,B.c,null,null,null)
D.bYM=new A.ae(B.ww,null,B.dM,null,null,null)
D.bZr=new A.ae(B.oB,28,B.c,null,null,null)
D.bZH=new A.ae(B.oE,22,null,null,null,null)
D.c_5=new A.ae(B.t1,null,null,null,null,null)
D.c_h=new A.ae(B.hx,28,B.c,null,null,null)
D.c_k=new A.ae(B.cz,null,B.aT,null,null,null)
D.c_t=new A.ae(B.a1T,14,B.c,null,null,null)
D.c01=new A.ae(B.Pr,36,B.aN,null,null,null)
D.c08=new A.ae(B.oC,16,B.c,null,null,null)
D.c0o=new A.ae(B.eb,null,null,null,null,null)
D.bkP=new A.u(1,0.23137254901960785,0.16470588235294117,0,B.q)
D.c0Y=new A.ae(B.ee,9,D.bkP,null,null,null)
D.bRk=new A.a0(983146,"MaterialIcons",!1)
D.c1d=new A.ae(D.bRk,null,B.aS,null,null,null)
D.c1K=new A.ae(B.uE,28,D.eW,null,null,null)
D.c1P=new A.ae(B.uF,null,B.fd,null,null,null)
D.c1U=new A.ae(B.hZ,20,D.eW,null,null,null)
D.bRE=new A.a0(983377,"MaterialIcons",!1)
D.c23=new A.ae(D.bRE,64,B.c,null,null,null)
D.c2A=new A.ae(B.hy,24,B.c,null,null,null)
D.c3w=new A.e5(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c3H=new A.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c3W=new A.e5(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c3X=new A.e5(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.biz=new A.u(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,B.q)
D.bm4=new A.u(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,B.q)
D.blG=new A.u(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,B.q)
D.dmD=w([D.biz,D.bm4,D.blG],x.O)
D.c5M=new A.a9(B.aA,B.aE,B.x,D.dmD,null,null)
D.ds5=w([B.be,B.b2],x.O)
D.c65=new A.a9(B.aA,B.aE,B.x,D.ds5,null,null)
D.bki=new A.u(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,B.q)
D.bqZ=new A.u(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,B.q)
D.d6c=w([D.bki,D.bqZ],x.O)
D.c6c=new A.a9(B.aA,B.aE,B.x,D.d6c,null,null)
D.doi=w([B.bq,B.T,B.e6],x.O)
D.c6i=new A.a9(B.aA,B.aE,B.x,D.doi,null,null)
D.c6k=new A.a9(B.a6,B.aa,B.x,F.ayi,null,null)
D.d5s=w([B.fd,B.ch],x.O)
D.asL=new A.a9(B.a6,B.aa,B.x,D.d5s,null,null)
D.d5U=w([B.fd,B.bD],x.O)
D.asM=new A.a9(B.a6,B.aa,B.x,D.d5U,null,null)
D.aCs=w([D.pb,B.aC,B.c4],x.O)
D.c6C=new A.a9(B.aA,B.aE,B.x,D.aCs,null,null)
D.bnY=new A.u(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,B.q)
D.d3g=w([D.bnY,E.afI,B.T],x.O)
D.c6H=new A.a9(B.aA,B.aE,B.x,D.d3g,null,null)
D.b27=new A.da(-0.8,-1)
D.b29=new A.da(1.2,1)
D.d2n=w([B.c,B.eF,B.ht,B.c,B.fG,B.aH,B.np],x.O)
D.dnE=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.c6J=new A.a9(D.b27,D.b29,B.x,D.d2n,D.dnE,null)
D.bqR=new A.u(1,0,0.7607843137254902,0.26666666666666666,B.q)
D.bod=new A.u(1,0,0.6392156862745098,0.22745098039215686,B.q)
D.dmC=w([D.bqR,D.bod],x.O)
D.c7a=new A.a9(B.a6,B.aa,B.x,D.dmC,null,null)
D.c7g=new A.a9(B.aA,B.aE,B.x,B.S4,null,null)
D.dgR=w([E.ZW,B.yb],x.O)
D.c7i=new A.a9(B.a6,B.aa,B.x,D.dgR,null,null)
D.dlj=w([B.hb,B.fT],x.O)
D.asR=new A.a9(B.a6,B.aa,B.x,D.dlj,null,null)
D.drD=w([B.b4,B.bR],x.O)
D.asS=new A.a9(B.a6,B.aa,B.x,D.drD,null,null)
D.cNL=w([B.d6,B.fn],x.O)
D.c7W=new A.a9(B.aA,B.aE,B.x,D.cNL,null,null)
D.d1k=w([B.c,B.ba],x.O)
D.c85=new A.a9(B.a6,B.aa,B.x,D.d1k,null,null)
D.ahQ=new A.u(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,B.q)
D.bhp=new A.u(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,B.q)
D.ddl=w([D.ahQ,B.jB,B.rw,B.aC,D.bhp],x.O)
D.caE=w([0,0.28,0.55,0.82,1],x.n)
D.c86=new A.a9(B.aA,B.aE,B.x,D.ddl,D.caE,null)
D.c8e=new A.a9(B.a6,B.aa,B.x,B.SK,null,null)
D.c8f=new A.a9(B.a6,B.aa,B.x,F.aAM,null,null)
D.c8j=new A.a9(B.a6,B.aa,B.x,D.aCs,null,null)
D.d7n=w([B.bD,B.fd],x.O)
D.c8v=new A.a9(B.a6,B.aa,B.x,D.d7n,null,null)
D.dvY=w([B.aF,B.bD,B.ba],x.O)
D.c8x=new A.a9(B.a6,B.aa,B.x,D.dvY,null,null)
D.dh1=w([B.av,B.bL,B.fp],x.O)
D.c8B=new A.a9(B.a6,B.aa,B.x,D.dh1,null,null)
D.dvH=w([B.bq,B.aM,B.bK,B.aO,B.aP,B.cu,B.am],x.O)
D.dbq=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.c8G=new A.a9(B.aA,B.aE,B.x,D.dvH,D.dbq,null)
D.c8Q=new A.a9(B.aA,B.aE,B.x,B.a4D,null,null)
D.dhD=w([D.YH,B.dX],x.O)
D.c8Z=new A.a9(B.a6,B.aa,B.x,D.dhD,null,null)
D.dpL=w([D.aiQ,D.agJ,B.T],x.O)
D.c97=new A.a9(B.aA,B.aE,B.x,D.dpL,null,null)
D.btv=new A.u(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,B.q)
D.d1T=w([B.eV,B.hb,D.btv],x.O)
D.c9D=new A.a9(B.aA,B.aE,B.x,D.d1T,null,null)
D.d7W=w([D.pb,B.aC],x.O)
D.c9F=new A.a9(B.aA,B.aE,B.x,D.d7W,null,null)
D.ca6=w([G.CZ,B.oB,B.jF,B.i_,B.jK,B.ln,B.ll,B.t7,B.oA,B.f5,B.lj,B.zd,B.Hy],x.A)
D.cdy=w([10,50,100,200],x.t)
D.cnj=w([1,3,5,7],x.t)
D.csi=w([25,50,100,250],x.t)
D.bRf=new A.a0(983104,"MaterialIcons",!1)
D.cB_=w([B.oB,B.mk,B.oE,B.lM,B.hw,B.wD,D.bRf,B.a33],x.A)
D.cGp=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cSK=w([0,0.22,0.5,0.78,1],x.n)
D.cWE=w([8,13,19],x.n)
D.a4X=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.fPx=new A.B("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.exM=new A.jF("questions",48,D.fPx,null,x.d)
D.fEZ=new A.B("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.exR=new A.jF("edit",48,D.fEZ,null,x.d)
D.fXL=new A.B("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.exX=new A.jF("delete",48,D.fXL,null,x.d)
D.cWO=w([D.exM,D.exR,D.exX],A.as("O<pA<n>>"))
D.d65=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.d6k=w([B.bU,B.eX],x.O)
D.a7O=new C.lY("text","",null,null)
D.d7z=w([D.a7O],x.a)
D.d92=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.eSL=new A.af6(B.lN,"Home")
D.eJj=new A.af6(B.qP,"Growth")
D.eO4=new A.af6(B.jF,"Wallet")
D.dbH=w([D.eSL,D.eJj,D.eO4],A.as("O<+icon,label(a0,n)>"))
D.dc7=w([4,0,2,6,8,1,3,5,7],x.t)
D.dcf=w([B.c,B.bO,B.cu],x.O)
D.dVZ=new C.rV("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.dW1=new C.rV("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.dW_=new C.rV("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.dVU=new C.rV("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.dVV=new C.rV("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.dW2=new C.rV("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a5t=w([D.dVZ,D.dW1,D.dW_,D.dVU,D.dVV,D.dW2],x.F)
D.a5y=w([B.ay,B.be,B.d5,B.av],x.O)
D.bl2=new A.u(1,1,0.8980392156862745,0.4,B.q)
D.dhJ=w([B.Yg,D.bl2,B.rw,B.is,B.jB],x.O)
D.a5F=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.Sd=w(["checkers_deluxe","tic_tac_go"],x.s)
D.cBe=w([3,4,5],x.t)
D.cOm=w([6,7,8],x.t)
D.cab=w([0,3,6],x.t)
D.cno=w([1,4,7],x.t)
D.cuP=w([2,5,8],x.t)
D.cag=w([0,4,8],x.t)
D.cuM=w([2,4,6],x.t)
D.dki=w([X.ath,D.cBe,D.cOm,D.cab,D.cno,D.cuP,D.cag,D.cuM],x.B)
D.aKD=new C.JB(0,"abab")
D.dVS=new C.JB(1,"aaaBbb")
D.aKE=new C.JB(2,"aabb")
D.dlo=w([D.aKD,D.dVS,D.aKE],A.as("O<JB>"))
D.dlG=w([],x.a)
D.aBE=w([],x.v)
D.dpC=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.Sy=w([1,2,3,-1,-2],x.t)
D.dys=w([B.j_,B.aF],x.O)
D.htW=new C.r9("dice","Dice Roll","Roll for cash & prizes!",B.ow,D.dys)
D.htT=new C.r9("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",B.uM,B.aAj)
D.dsu=w([B.cX,B.bl],x.O)
D.htR=new C.r9("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",B.a2P,D.dsu)
D.dxT=w([B.dK,B.nu],x.O)
D.htX=new C.r9("memory","Memory Match","Match pairs \u2014 solo or multiplayer",B.a33,D.dxT)
D.cn3=w([B.jX,B.ql],x.O)
D.htU=new C.r9("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",F.a2C,D.cn3)
D.dpB=w([M.lF,D.Z8],x.O)
D.htS=new C.r9("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",B.HB,D.dpB)
D.htV=new C.r9("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",B.cz,Ap.nL)
D.drC=w([D.htW,D.htT,D.htR,D.htX,D.htU,D.htS,D.htV],A.as("O<r9>"))
D.dt4=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.bpX=new A.u(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,B.q)
D.bpO=new A.u(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,B.q)
D.ajH=new A.u(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,B.q)
D.dtT=w([D.bpX,D.bpO,D.ajH],x.O)
D.bsi=new A.u(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,B.q)
D.dtV=w([B.afH,D.bsi,D.ajH],x.O)
D.duA=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.aCQ=w([D.pb,B.c,D.eW,B.bT,B.b0,B.aC],x.O)
D.dVX=new C.rV("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.dVW=new C.rV("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.dVT=new C.rV("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.dW0=new C.rV("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.dW3=new C.rV("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.dVY=new C.rV("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a6o=w([D.dVX,D.dVW,D.dVT,D.dW0,D.dW3,D.dVY],x.F)
D.dy7=w([B.ch,B.ql],x.O)
D.ek8={checkers_deluxe:0,tic_tac_go:1}
D.aID=new A.bu(D.ek8,["Checkers Deluxe","Tic Tac Go"],A.as("bu<n,n>"))
D.ej9={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aIP=new A.bu(D.ej9,[1,2,3,4,5,6,7],A.as("bu<n,H>"))
D.dOQ=new C.a7D(null)
D.dSd=new C.lY("signature","NGMY Support Team",null,null)
D.dSe=new C.lY("divider","",null,null)
D.Tu=new C.Wx(!1,!1,!1,!1)
D.Tw=new C.OD(!1,!1,!1,!1)
D.dTm=new C.OD(!0,!0,!1,!1)
D.DV=new C.asl(0,"swahili")
D.aKC=new C.asl(1,"english")
D.DW=new C.asl(2,"mix")
D.djH=w([B.ha,B.i8,B.cZ],x.O)
D.bQ2=new A.a0(63118,"MaterialIcons",!1)
D.dX4=new C.pt(D.djH,B.fy,B.av,"BACKGAMMON","\ud83c\udfb2",D.bQ2)
D.bS1=new A.a0(983637,"MaterialIcons",!1)
D.dX5=new C.pt(Am.aD5,B.be,B.es,"EURO WHEEL","\ud83c\udfa1",D.bS1)
D.dto=w([B.T,B.aM,B.bw],x.O)
D.dX6=new C.pt(D.dto,B.aP,B.am,"ROYALE","\u265f\ufe0f",F.a2C)
D.d5x=w([B.d6,B.bl,B.dJ],x.O)
D.dX7=new C.pt(D.d5x,B.ay,B.d5,"CONNECT 4","\ud83d\udd34",B.a3i)
D.dnW=w([B.dx,B.fn,B.ql],x.O)
D.dX8=new C.pt(D.dnW,B.w0,B.ch,"PUNTO BANCO","\ud83d\udc8e",B.mk)
D.cNN=w([B.oc,B.iC,B.m5],x.O)
D.dX9=new C.pt(D.cNN,B.jx,B.kp,"DOMINOES","\ud83c\udc53",B.aqv)
D.du7=w([B.yi,B.rA,B.hE],x.O)
D.dXa=new C.pt(D.du7,B.BX,B.hn,"WAR","\u2694\ufe0f",A6.a2y)
D.dXb=new C.pt(B.aD_,B.aS,B.am,"PREMIUM","\ud83c\udfae",B.ow)
D.d7o=w([B.kn,B.aF,B.dK],x.O)
D.dXc=new C.pt(D.d7o,B.dy,B.fd,"JACKPOT","\ud83c\udfb0",B.ow)
D.dmV=w([B.km,B.kJ,B.bD],x.O)
D.dXd=new C.pt(D.dmV,B.qa,B.bT,"LIVE BINGO","\ud83c\udfb1",B.z9)
D.d_6=w([B.i8,B.dX,B.av],x.O)
D.bPu=new A.a0(62865,"MaterialIcons",!1)
D.dXe=new C.pt(D.d_6,B.ue,B.aS,"BIG SPIN","\ud83c\udfa1",D.bPu)
D.dXf=new C.pt(B.a6k,B.aO,B.be,"HOLD'EM","\u2660\ufe0f",B.jF)
D.duz=w([B.eV,B.fT,B.b2],x.O)
D.bOC=new A.a0(61234,"MaterialIcons",!1)
D.dXg=new C.pt(D.duz,B.m6,B.aY,"CRAPS","\ud83c\udfb2",D.bOC)
D.d4M=w([B.eX,B.jg,B.bU],x.O)
D.dXh=new C.pt(D.d4M,B.bL,B.ba,"PLINKO","\ud83d\udc8e",Aq.Ps)
D.bRM=new A.a0(983492,"MaterialIcons",!1)
D.dXi=new C.pt(B.a6k,B.er,B.be,"SNOOKER","\ud83c\udfb1",D.bRM)
D.ds_=w([B.eV,B.fT,B.aY],x.O)
D.dXj=new C.pt(D.ds_,B.u8,B.bx,"PROFIT LAB","\ud83d\udcb0",B.hZ)
D.dsm=w([B.e6,B.eq,B.be],x.O)
D.bQr=new A.a0(63324,"MaterialIcons",!1)
D.dXk=new C.pt(D.dsm,B.w6,B.b4,"KLONDIKE","\ud83c\udccf",D.bQr)
D.dkr=w([B.dh,B.bq,B.T],x.O)
D.dXl=new C.pt(D.dkr,B.aS,B.aM,"VEGAS TABLE","\ud83c\udccf",A2.HP)
D.qX=new C.Fo(0,"continueGame")
D.qY=new C.Fo(1,"youWin")
D.Jd=new C.Fo(2,"youLose")
D.TF=new C.Fo(3,"draw")
D.aKR=new C.Xb(0,"found")
D.ef8=new C.Xb(1,"foundLive")
D.a84=new C.Xb(2,"notFound")
D.aKS=new C.Xb(3,"wrongAccount")
D.enu=new A.o(4,12)
D.er2=new A.D(B.yE,B.tV,null)
D.bGj=new A.R(4,0,0,3)
D.fpD=new A.G(!0,B.aN,null,null,null,null,10,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1l=new A.B("NGMY Helper",null,D.fpD,null,null,null,null,null,null,null,null,null)
D.erk=new A.D(D.bGj,D.h1l,null)
D.bQk=new A.a0(63284,"MaterialIcons",!1)
D.bVz=new A.ae(D.bQk,18,B.pd,null,null,null)
D.fuu=new A.G(!0,B.pd,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIZ=new A.B("Continue",null,D.fuu,null,null,null,null,null,null,null,null,null)
D.dmd=w([D.bVz,B.bm,D.fIZ],x.p)
D.f95=new A.c6(B.aL,B.e,B.Q,B.l,null,B.p,null,0,D.dmd,null)
D.ern=new A.D(B.iv,D.f95,null)
D.erD=new A.D(B.bV,B.tV,null)
D.bpv=new A.u(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,B.q)
D.dip=w([B.hb,B.fT,B.cG,D.bpv],x.O)
D.c8J=new A.a9(B.aA,B.aE,B.x,D.dip,B.Dj,null)
D.b7M=new A.p(null,null,null,null,null,D.c8J,B.n)
D.bxY=new A.l5(D.b7M,B.bj,null,null)
D.eyb=new A.cL(0,0,0,0,null,null,D.bxY,null)
D.bXl=new A.ae(B.wv,11,B.c,null,null,null)
D.eyf=new A.cL(10,12,null,null,null,null,D.bXl,null)
D.cSA=w([B.hq,B.e6,B.lf],x.O)
D.eyR=new A.bY(B.Fd,1.1,B.x,null,0,D.cSA,null,null)
D.brb=new A.u(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,B.q)
D.bkA=new A.u(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,B.q)
D.bmG=new A.u(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,B.q)
D.dfQ=w([D.brb,D.bkA,D.bmG],x.O)
D.eyY=new A.bY(B.adg,1.05,B.x,null,0,D.dfQ,null,null)
D.ezl=new A.bY(B.A,0.5,B.x,null,0,Ai.a5c,null,null)
D.f6Y=new A.a1(-18,0,18,1)
D.f7w=new A.a1(-3,-5,3,5)
D.bW_=new A.ae(B.eb,16,D.eW,null,null,null)
D.aWp=new A.G(!0,D.eW,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZT=new A.B("Screenshot added \xb7 tap to change",null,D.aWp,null,null,null,null,null,null,null,null,null)
D.d2q=w([D.bW_,B.bm,D.fZT],x.p)
D.f8r=new A.c6(B.aL,B.bb,B.i,B.l,null,B.p,null,0,D.d2q,null)
D.c_1=new A.ae(B.oz,15,D.eW,null,null,null)
D.fXF=new A.B("Refresh",null,D.aWp,null,null,null,null,null,null,null,null,null)
D.d4W=w([D.c_1,B.de,D.fXF],x.p)
D.f8t=new A.c6(B.aL,B.e,B.Q,B.l,null,B.p,null,0,D.d4W,null)
D.ejv={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.faH=new A.de(D.ejv,3,x.M)
D.ejj={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.faU=new A.de(D.ejj,36,x.M)
D.ejm={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.fb7=new A.de(D.ejm,6,x.M)
D.ekT={memory:0,typing:1,scramble:2,pattern:3}
D.nb=new A.de(D.ekT,4,x.M)
D.fdK=new A.av(276,276)
D.fes=new A.a5(13,null,null,null)
D.be_=new A.fk(2.6,null,null,null,null,B.aS,null,null,null,null)
D.feE=new A.a5(26,26,D.be_,null)
D.ffy=new A.hG(8,0,0,1,null)
D.h02=new A.B("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aTP=new A.b1(D.h02,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fE0=new A.B("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.fiz=new A.b1(D.fE0,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fFa=new A.B("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.fiF=new A.b1(D.fFa,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fXQ=new A.B("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.fji=new A.b1(D.fXQ,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.bqo=new A.u(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,B.q)
D.fto=new A.G(!0,D.bqo,null,null,null,null,9,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmu=new A.en("$",null,null,B.cJ,null,null,null,null,null,null,D.fto)
D.fmK=new A.G(!0,B.T,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn3=new A.G(!0,B.c,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn9=new A.G(!0,B.bq,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnA=new A.G(!0,B.T,null,null,null,null,9,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnM=new A.G(!0,B.c,null,null,null,null,19,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnU=new A.G(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo2=new A.G(!0,B.aS,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo3=new A.G(!0,null,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foR=new A.G(!0,B.aS,null,null,null,null,28,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fps=new A.G(!0,D.eW,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpu=new A.G(!0,B.bL,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fql=new A.G(!0,E.BS,null,null,null,null,13,B.V,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aV6=new A.G(!0,B.c,null,null,null,null,20,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frV=new A.G(!0,B.bL,null,null,null,null,11.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fse=new A.G(!0,B.ab,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,B.aG,null,null,null,null,null,null,null,null)
D.fsx=new A.G(!0,B.ab,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftG=new A.G(!0,B.c,null,null,null,null,11,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftV=new A.G(!0,B.c,null,null,null,null,14,B.V,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu5=new A.G(!0,B.c,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,B.aG,null,null,null,null,null,null,null,null)
D.fuC=new A.G(!0,B.j5,null,null,null,null,10.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.biY=new A.u(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,B.q)
D.fuU=new A.G(!0,D.biY,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwm=new A.G(!0,B.ay,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwJ=new A.G(!0,D.ahQ,null,null,null,null,9,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVQ=new A.G(!0,E.BS,null,null,null,null,11,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx4=new A.G(!0,B.eq,null,null,null,null,52,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx5=new A.G(!0,B.bw,null,null,null,null,7,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxn=new A.G(!0,E.BS,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.xj=new A.G(!0,B.c,null,null,null,null,13,B.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bnJ=new A.u(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,B.q)
D.fxC=new A.G(!0,D.bnJ,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyd=new A.G(!0,B.T9,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzj=new A.G(!0,B.c,null,null,null,null,38,B.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzq=new A.G(!0,B.i9,null,null,null,null,11,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzu=new A.G(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW9=new A.G(!0,B.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzZ=new A.G(!0,B.T,null,null,null,null,10,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA3=new A.G(!0,B.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB_=new A.G(!0,B.T,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBo=new A.G(!0,B.ab,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBF=new A.G(!0,B.b4,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC9=new A.G(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCd=new A.G(!0,B.T,null,null,null,null,11,B.V,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDc=new A.B("Value per pair",null,B.hj,null,null,null,null,null,null,null,null,null)
D.fDe=new A.B("Restore now",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fDO=new A.B("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aVB=new A.G(!0,B.d0,null,null,null,null,12,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDX=new A.B("AVAILABLE PLANS",null,D.aVB,null,null,null,null,null,null,null,null,null)
D.fDZ=new A.B("I understand",null,B.cC,null,null,null,null,null,null,null,null,null)
D.fEz=new A.B("Go Back",null,B.cC,null,null,null,null,null,null,null,null,null)
D.fqa=new A.G(!0,B.bw,null,null,null,null,8,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFh=new A.B("PLAN VALUE",null,D.fqa,null,null,null,null,null,null,null,null,null)
D.fFk=new A.B("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.fFH=new A.B("Deposit",null,B.VR,null,null,null,null,null,null,null,null,null)
D.fAk=new A.G(!0,B.dy,null,null,null,null,null,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGH=new A.B("JACKPOT SLOTS",null,D.fAk,null,null,null,null,null,null,null,null,null)
D.fGZ=new A.B("Restore",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fqg=new A.G(!0,B.c,null,null,null,null,12,B.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH2=new A.B("YOUR NUMBER",null,D.fqg,null,null,null,null,null,null,null,null,null)
D.fHi=new A.B("SPIN REELS",null,F.aaY,null,null,null,null,null,null,null,null,null)
D.fHM=new A.B("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.fIk=new A.B("Perfect Score Profit",null,B.hj,null,null,null,null,null,null,null,null,null)
D.fIX=new A.B("Join room",null,B.iA,null,null,null,null,null,null,null,null,null)
D.fLa=new A.B("Add payment screenshot",null,B.ja,null,null,null,null,null,null,null,null,null)
D.fLq=new A.B("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.fzx=new A.G(!0,B.aS,null,null,null,null,11,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLR=new A.B("INVITE A PLAYER",null,D.fzx,null,null,null,null,null,null,null,null,null)
D.fyC=new A.G(!0,B.Yg,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMj=new A.B("NGMY GOLD LEADER",null,D.fyC,null,null,null,null,null,null,null,null,null)
D.fMR=new A.B("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.fNh=new A.B("Invest & Play",null,B.nf,null,null,null,null,null,null,null,null,null)
D.aVv=new A.G(!0,D.y7,null,null,null,null,8,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNJ=new A.B("VALID THRU",null,D.aVv,null,null,null,null,null,null,null,null,null)
D.aWb=new A.G(!0,B.aD,null,null,null,null,11,B.I,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNR=new A.B("DEALER",null,D.aWb,null,null,null,null,null,null,null,null,null)
D.fNY=new A.B("CARDHOLDER",null,D.aVv,null,null,null,null,null,null,null,null,null)
D.fy4=new A.G(!0,B.aO,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOH=new A.B("NGMY PLATINUM",null,D.fy4,null,null,null,null,null,null,null,null,null)
D.fBv=new A.G(!0,B.qo,null,null,null,null,10,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPs=new A.B("EARNED SO FAR",null,D.fBv,null,null,null,null,null,null,null,null,null)
D.fQ1=new A.B("VS",null,B.aVp,null,null,null,null,null,null,null,null,null)
D.fQr=new A.B("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.fQO=new A.B("One day left",null,B.aaQ,null,B.K,null,null,null,null,null,null,null)
D.fR9=new A.B("Keep typing \u2014 mistakes are counted in your payout",null,B.EC,null,null,null,null,null,null,null,null,null)
D.fRa=new A.B("Multiplayer invite",null,B.iA,null,null,null,null,null,null,null,null,null)
D.fRm=new A.B("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.foD=new A.G(!0,B.T9,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRs=new A.B("\ud83d\udcb0 Partial Payout System",null,D.foD,null,null,null,null,null,null,null,null,null)
D.fRD=new A.B("Browse Topics",null,B.fa,null,null,null,null,null,null,null,null,null)
D.fnx=new A.G(!0,B.c,null,null,null,null,22,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRU=new A.B("Investment Required",null,D.fnx,null,B.K,null,null,null,null,null,null,null)
D.fTu=new A.B("Network Status",null,B.aUK,null,null,null,null,null,null,null,null,null)
D.aUR=new A.G(!0,B.ab,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fU6=new A.B("Their account email",null,D.aUR,null,null,null,null,null,null,null,null,null)
D.fUq=new A.B("Verification code",null,B.cC,null,null,null,null,null,null,null,null,null)
D.fUr=new A.B("Category",null,null,null,null,null,null,null,null,null,null,null)
D.fUH=new A.B("ACTIVE ASSET",null,D.aVB,null,null,null,null,null,null,null,null,null)
D.fV3=new A.B("Scan QR",null,B.cC,null,null,null,null,null,null,null,null,null)
D.fV8=new A.B("Check word",null,B.cC,null,null,null,null,null,null,null,null,null)
D.fVz=new A.B("YOUR HAND",null,D.aWb,null,null,null,null,null,null,null,null,null)
D.fW9=new A.B("NGMY Music Studio",null,B.jP,null,null,null,null,null,null,null,null,null)
D.fWc=new A.B("I sent it \u2014 submit deposit",null,B.nf,null,null,null,null,null,null,null,null,null)
D.fX2=new A.B("Back",null,B.AI,null,null,null,null,null,null,null,null,null)
D.fCp=new A.G(!0,null,null,null,null,null,null,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXa=new A.B("DEAL / PLAY ROUND",null,D.fCp,null,null,null,null,null,null,null,null,null)
D.fXn=new A.B("Got it \u2014 keep chatting",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fXx=new A.B("3 Messages Left",null,B.aW0,null,null,null,null,null,null,null,null,null)
D.fY4=new A.B("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.fYd=new A.B("Copy",null,B.cC,null,null,null,null,null,null,null,null,null)
D.fYA=new A.B("How many games?",null,D.aUR,null,null,null,null,null,null,null,null,null)
D.fxv=new A.G(!0,B.aD,null,null,null,null,null,B.V,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYM=new A.B("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.fxv,null,B.K,null,null,null,null,null,null,null)
D.h_k=new A.B("Question",null,null,null,null,null,null,null,null,null,null,null)
D.h_y=new A.B("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.fCQ=new A.G(!0,B.c,null,null,null,null,12.5,B.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1d=new A.B("NGMY  WALLET",null,D.fCQ,null,null,null,null,null,null,null,null,null)
D.h1e=new A.B("Select Your Bet",null,B.h_,null,null,null,null,null,null,null,null,null)
D.hq4=new A.bJ("history",x.W)
D.hqi=new A.bJ("ngmy_local_home",x.W)
D.hqj=new A.bJ("ngmy_local_invest",x.W)
D.hqk=new A.bJ("ngmy_local_wallet",x.W)
D.htE=new C.a_o(null)
D.b08=new C.aCZ(0,"grid")
D.b09=new C.aCZ(1,"questions")
D.hvg=new C.aCZ(2,"answer")
D.hxf=new C.a0h(null)})();(function staticFields(){$.h8h=A.aR(x.N)
$.hz5=A.T(x.N,x.k)
$.he4=null
$.hdQ=A.T(x.N,A.as("Gd"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"izn","bGy",()=>C.igh())
w($,"iz9","hHK",()=>{var v=null,u=A.fq(v,B.cs,v,v,v,D.fmu,B.a5,B.bX,v,B.dz,B.bY)
u.e5()
return u})})()};
(a=>{a["sQeNyCXPbVfEpxSvQSs0RulRAB8="]=a.current})($__dart_deferred_initializers__);