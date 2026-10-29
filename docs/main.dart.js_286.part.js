((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,L,R,A2,E,M,A3,N,A4,S,O,T,A5,P,A6,U,A7,A8,A9,Aa,Ab,Ac,V,Ad,C={
hdb(d,e,f){var w=null,v=f.k("FS<0>"),u=new A.FS(w,w,w,w,v)
$.AQ()
u.d=new C.crs(new A.zM(),e,u,f,d)
return new A.hS(u,v.k("hS<1>"))},
crs:function crs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
crt:function crt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
crp:function crp(d){this.a=d},
crq:function crq(d,e){this.a=d
this.b=e},
crr:function crr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cro:function cro(d,e,f){this.a=d
this.b=e
this.c=f},
bqN:function bqN(d){this.a=d},
hda(d,e,f,g){return new C.av7(d,e,f,null,g.k("av7<0>"))},
F6:function F6(){},
aHw:function aHw(d){var _=this
_.d=null
_.e=$
_.c=_.a=null
_.$ti=d},
f0T:function f0T(d){this.a=d},
f0S:function f0S(d,e){this.a=d
this.b=e},
f0V:function f0V(d){this.a=d},
f0Q:function f0Q(d,e,f){this.a=d
this.b=e
this.c=f},
f0U:function f0U(d){this.a=d},
f0R:function f0R(d){this.a=d},
av7:function av7(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.c=f
_.a=g
_.$ti=h},
i2y(d){var w=B.a.i(d)
while(B.a.a0(w,"$"))w=B.a.i(B.a.b3(w,1))
return w},
hnp(d){var w=C.i2y(d)
if(w.length===0)return""
return"$"+w},
fxw(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$fxw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:i=B.a.i(d.toLowerCase())
if(i.length===0){w=1
break}t=new A.S(Date.now(),0,!1).bR(-6048e8)
s=e.length,r=0
case 3:if(!(r<e.length)){w=5
break}q=e[r]
if(B.a.i(q.b.toLowerCase())!==i){w=4
break}p=q.y
o=p.a
if(o>=t.gbr())o=o===t.gbr()&&p.b<t.gcB()
else o=!0
if(o){w=4
break}if(q.x!==B.cq){w=4
break}if(q.d!==B.fH){w=4
break}n=q.f
if(n==null)n=""
m=n.toLowerCase()
l=!0
if(!A.cS(m,"game payout:",0))if(!A.cS(m,"game partial:",0)){if(!A.cS(m,"multiplayer payout:",0))o=A.cS(m,"dice",0)&&q.e===B.fh
else o=l
l=o}if(!l){w=4
break}if(A.cS(m,"game payout:",0))k=B.a.i(B.a.b3(n,B.a.cH(m,"game payout:")+12))
else if(A.cS(m,"game partial:",0)){k=B.a.i(B.a.b3(n,B.a.cH(m,"game partial:")+13))
j=B.a.cH(k,"(")
if(j>0)k=B.a.i(B.a.ap(k,0,j))}else if(A.cS(m,"multiplayer payout:",0)){k=B.a.i(B.a.b3(n,B.a.cH(m,"multiplayer payout:")+19))
j=B.a.cH(k,"(")
if(j>0)k=B.a.i(B.a.ap(k,0,j))}else k=A.cS(m,"dice",0)?"Dice Roll":"Game"
o=k.length===0?"Game":k
w=6
return A.b(C.uz(q.c,p,n,d,o,null,q.a,!0),$async$fxw)
case 6:case 4:e.length===s||(0,A.K)(e),++r
w=3
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$fxw,v)},
i79(d,e,f){var w=d.x
if(w==null||261-w.f<=0)return!1
return w.a===f&&Math.abs(w.b-e)<0.0001},
i3B(d,e,f){return B.d.b4(e,new C.fBe(f,B.a.i(d.toLowerCase())))},
fB5(d){var w
C.h9s(d)
w=d.c3
return A.bo(new A.M(w,new C.fB6(),A.U(w).k("M<1,@>")),!0,x.N)},
hUe(d,e,f){var w,v,u,t,s,r,q=null,p=B.bU,o=B.a.i(d),n=o.length!==0?o:"https://i.ibb.co/LhbMvz9/ngmy-logo.png"
$.aW.toString
u=$.ej().gio().b
if(u.a===0)t=1
else{new A.bc(u,A.a3(u).k("bc<2>")).gI(0)
u=$.l3()
s=u.d
t=s==null?u.ghb():s}w=B.k.dA(f*t)
v=new C.fjF(f)
if(J.d0(n,"data:image"))try{u=A.fO(B.cI.aJ(B.d.gal(J.lq(n,","))),B.A,w,new C.fjC(v),B.fX,p,!0,e,!1,q,f)
return u}catch(r){u=v.$0()
return u}if(J.d0(n,"supabase://"))return new A.l9(A.a1e(n),new C.fjD(f,e,p,w,v),q,q,x.gh)
return A.kn(n,B.A,w,new C.fjE(v),B.fX,p,!0,e,q,q,f)},
fZa(d,e){return new A.a7(e,e,A.hV(C.hUe(d,e,e),B.aq),null)},
hMF(){var w,v,u=A.a([],x._),t=x.N,s=A.C(D.dbS,x.gm)
for(w=0;w<36;++w){v=B.Cd[w]
s.push(new C.qI(v.a,v.b,v.c,v.e,v.f))}return new C.azI(u,A.T(t,t),s)},
fBe:function fBe(d,e){this.a=d
this.b=e},
fB6:function fB6(){},
fjF:function fjF(d){this.a=d},
fjC:function fjC(d){this.a=d},
fjD:function fjD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fjB:function fjB(d){this.a=d},
fjE:function fjE(d){this.a=d},
akL:function akL(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
qI:function qI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
azI:function azI(d,e,f){var _=this
_.d=0
_.e=null
_.f=d
_.r=e
_.x=_.w=!1
_.y=f
_.c=_.a=null},
d9S:function d9S(d,e){this.a=d
this.b=e},
da2:function da2(d,e){this.a=d
this.b=e},
dak:function dak(){},
dal:function dal(d){this.a=d},
daa:function daa(d,e){this.a=d
this.b=e},
da9:function da9(){},
dab:function dab(d){this.a=d},
da8:function da8(){},
dad:function dad(d){this.a=d},
dac:function dac(){},
da5:function da5(d){this.a=d},
da3:function da3(d){this.a=d},
da4:function da4(d){this.a=d},
da6:function da6(d){this.a=d},
da7:function da7(d){this.a=d},
d9Y:function d9Y(d,e){this.a=d
this.b=e},
d9Z:function d9Z(d,e){this.a=d
this.b=e},
d9W:function d9W(d){this.a=d},
d9X:function d9X(d){this.a=d},
da_:function da_(d){this.a=d},
da0:function da0(d){this.a=d},
da1:function da1(d,e,f){this.a=d
this.b=e
this.c=f},
d9V:function d9V(d,e){this.a=d
this.b=e},
d9U:function d9U(d,e){this.a=d
this.b=e},
d9T:function d9T(d,e){this.a=d
this.b=e},
daj:function daj(d){this.a=d},
dah:function dah(d,e,f){this.a=d
this.b=e
this.c=f},
dag:function dag(d,e,f){this.a=d
this.b=e
this.c=f},
daf:function daf(d,e){this.a=d
this.b=e},
dae:function dae(){},
dai:function dai(d){this.a=d},
aCy:function aCy(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
biR:function biR(){var _=this
_.d=$
_.e=0
_.c=_.a=null},
dOh:function dOh(d){this.a=d},
dOg:function dOg(d){this.a=d},
dOi:function dOi(d){this.a=d},
dOf:function dOf(){},
dOj:function dOj(d,e){this.a=d
this.b=e},
dOe:function dOe(d){this.a=d},
dOk:function dOk(d){this.a=d},
akK:function akK(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
azH:function azH(d){var _=this
_.d=d
_.e=2
_.c=_.a=null},
d9M:function d9M(d){this.a=d},
d9P:function d9P(d){this.a=d},
d9Q:function d9Q(d){this.a=d},
d9R:function d9R(d){this.a=d},
d9O:function d9O(d,e){this.a=d
this.b=e},
d9N:function d9N(d,e){this.a=d
this.b=e},
akM:function akM(d,e,f,g,h,i,j,k,l,m){var _=this
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
azJ:function azJ(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.Y=_.b8=_.bh=_.y2=_.y1=0
_.aF=_.aM=_.aE=_.au=$
_.bz=_.bb=_.aO=_.b1=null
_.aS=!1
_.bQ=_.bk=null
_.c3=!1
_.ci=_.cP=""
_.c=_.a=_.bC=null},
dbE:function dbE(d,e){this.a=d
this.b=e},
dbH:function dbH(d){this.a=d},
dbI:function dbI(d){this.a=d},
dbJ:function dbJ(d){this.a=d},
dbK:function dbK(d){this.a=d},
dbL:function dbL(d){this.a=d},
dbF:function dbF(d){this.a=d},
dbG:function dbG(d){this.a=d},
daU:function daU(d,e){this.a=d
this.b=e},
daV:function daV(d,e){this.a=d
this.b=e},
dbn:function dbn(d){this.a=d},
dbo:function dbo(){},
db9:function db9(d,e,f){this.a=d
this.b=e
this.c=f},
dba:function dba(d){this.a=d},
dbb:function dbb(d,e,f){this.a=d
this.b=e
this.c=f},
dbc:function dbc(d,e){this.a=d
this.b=e},
dbd:function dbd(){},
dam:function dam(d){this.a=d},
daT:function daT(d,e){this.a=d
this.b=e},
dbp:function dbp(){},
dby:function dby(){},
dbm:function dbm(d){this.a=d},
dbl:function dbl(d){this.a=d},
daR:function daR(d){this.a=d},
daS:function daS(){},
dbt:function dbt(){},
dbu:function dbu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dbv:function dbv(d,e,f){this.a=d
this.b=e
this.c=f},
dan:function dan(){},
dao:function dao(d){this.a=d},
dap:function dap(){},
db2:function db2(d,e){this.a=d
this.b=e},
db3:function db3(d,e,f){this.a=d
this.b=e
this.c=f},
db4:function db4(d){this.a=d},
db1:function db1(d){this.a=d},
dbe:function dbe(d){this.a=d},
dbf:function dbf(){},
dbg:function dbg(d){this.a=d},
dbh:function dbh(){},
dbi:function dbi(d){this.a=d},
dbj:function dbj(){},
dbs:function dbs(d,e,f){this.a=d
this.b=e
this.c=f},
db5:function db5(d){this.a=d},
db6:function db6(d,e){this.a=d
this.b=e},
db7:function db7(d){this.a=d},
db8:function db8(d){this.a=d},
dbw:function dbw(d){this.a=d},
dbx:function dbx(d){this.a=d},
daq:function daq(d){this.a=d},
dar:function dar(d,e){this.a=d
this.b=e},
das:function das(d){this.a=d},
dat:function dat(d){this.a=d},
dbq:function dbq(d,e){this.a=d
this.b=e},
dbr:function dbr(d){this.a=d},
db0:function db0(d,e){this.a=d
this.b=e},
dbk:function dbk(d,e,f){this.a=d
this.b=e
this.c=f},
daZ:function daZ(d,e,f){this.a=d
this.b=e
this.c=f},
db_:function db_(){},
dbz:function dbz(d){this.a=d},
dbA:function dbA(d){this.a=d},
dbB:function dbB(d){this.a=d},
dbD:function dbD(d){this.a=d},
dbC:function dbC(){},
daY:function daY(d,e,f){this.a=d
this.b=e
this.c=f},
daX:function daX(d,e){this.a=d
this.b=e},
daW:function daW(d,e){this.a=d
this.b=e},
daG:function daG(d){this.a=d},
daF:function daF(d,e){this.a=d
this.b=e},
daH:function daH(d){this.a=d},
daE:function daE(d,e){this.a=d
this.b=e},
daI:function daI(d){this.a=d},
daD:function daD(){},
daJ:function daJ(d){this.a=d},
daB:function daB(){},
daC:function daC(d){this.a=d},
daK:function daK(d){this.a=d},
daA:function daA(d,e){this.a=d
this.b=e},
daL:function daL(d){this.a=d},
daz:function daz(d,e){this.a=d
this.b=e},
dav:function dav(d,e){this.a=d
this.b=e},
daM:function daM(d){this.a=d},
day:function day(d,e){this.a=d
this.b=e},
daN:function daN(d){this.a=d},
dax:function dax(d){this.a=d},
dau:function dau(d,e){this.a=d
this.b=e},
daO:function daO(d,e,f){this.a=d
this.b=e
this.c=f},
daP:function daP(d){this.a=d},
daw:function daw(){},
daQ:function daQ(d){this.a=d},
alB:function alB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bfZ:function bfZ(){this.c=this.a=null},
dfc:function dfc(d,e){this.a=d
this.b=e},
dfb:function dfb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ahY:function ahY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.z=h
_.Q=i
_.a=j},
awU:function awU(d,e,f,g,h,i,j,k,l,m){var _=this
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
cCB:function cCB(d){this.a=d},
cBW:function cBW(d,e){this.a=d
this.b=e},
cBM:function cBM(d){this.a=d},
cBN:function cBN(d){this.a=d},
cC5:function cC5(d){this.a=d},
cC2:function cC2(d){this.a=d},
cC3:function cC3(d){this.a=d},
cC4:function cC4(d,e,f){this.a=d
this.b=e
this.c=f},
cBY:function cBY(d){this.a=d},
cBX:function cBX(d){this.a=d},
cBO:function cBO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cC0:function cC0(d){this.a=d},
cC_:function cC_(d){this.a=d},
cBZ:function cBZ(d,e){this.a=d
this.b=e},
cCo:function cCo(d){this.a=d},
cCi:function cCi(d){this.a=d},
cCl:function cCl(d){this.a=d},
cCk:function cCk(){},
cCh:function cCh(d){this.a=d},
cCj:function cCj(d,e){this.a=d
this.b=e},
cCg:function cCg(){},
cBT:function cBT(){},
cBU:function cBU(d,e){this.a=d
this.b=e},
cBV:function cBV(d){this.a=d},
cBR:function cBR(d,e){this.a=d
this.b=e},
cBS:function cBS(d,e){this.a=d
this.b=e},
cC8:function cC8(d,e){this.a=d
this.b=e},
cC1:function cC1(d){this.a=d},
cC9:function cC9(d){this.a=d},
cCa:function cCa(d,e){this.a=d
this.b=e},
cCb:function cCb(d,e){this.a=d
this.b=e},
cCc:function cCc(d,e){this.a=d
this.b=e},
cCd:function cCd(d,e,f){this.a=d
this.b=e
this.c=f},
cCe:function cCe(d){this.a=d},
cCf:function cCf(d){this.a=d},
cC6:function cC6(d,e){this.a=d
this.b=e},
cCn:function cCn(d){this.a=d},
cC7:function cC7(d,e){this.a=d
this.b=e},
cCA:function cCA(d){this.a=d},
cCt:function cCt(d){this.a=d},
cCw:function cCw(d){this.a=d},
cCq:function cCq(d,e){this.a=d
this.b=e},
cCu:function cCu(){},
cCv:function cCv(d,e){this.a=d
this.b=e},
cCr:function cCr(d){this.a=d},
cCs:function cCs(d){this.a=d},
cCy:function cCy(){},
cCx:function cCx(d){this.a=d},
cCp:function cCp(d,e){this.a=d
this.b=e},
cCz:function cCz(d){this.a=d},
cBP:function cBP(d){this.a=d},
cCm:function cCm(d,e){this.a=d
this.b=e},
cBQ:function cBQ(d,e,f){this.a=d
this.b=e
this.c=f},
aJW:function aJW(){},
aJX:function aJX(){},
aJY:function aJY(){},
aKU:function aKU(){},
bYM(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase())
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
bYN(d){var w=B.a.i(d)
return"This backup belongs to another account. You can only restore local Growth Income data for "+(w.length===0?"your account":w)+"."},
hA7(d,e){var w=d.ax
if(w<0)return!1
return w===e},
aXa(d,e){return C.hA8(d,e)},
hA8(d,e){var w=0,v=A.j(x.di),u,t,s,r,q,p
var $async$aXa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.b_X(d),$async$aXa)
case 3:p=g
if(p!=null){try{t=B.S.aI(0,p.c,null)
if(x.f.b(t)){s=C.h7N(A.a2(t,x.N,x.z))
if(s==null){u=new A.FN(D.a50,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bYM(s,e,p.b)){u=new A.FN(D.aG3,null)
w=1
break}r=p.a?D.dZr:D.aG2
u=new A.FN(r,s)
w=1
break}}catch(o){}u=new A.FN(D.a50,null)
w=1
break}s=C.h7O(d)
if(s==null){u=new A.FN(D.a50,null)
w=1
break}if(B.a.i(e).length!==0&&!C.bYM(s,e,null)){u=new A.FN(D.aG3,null)
w=1
break}u=new A.FN(D.aG2,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aXa,v)},
h7O(d){var w,v,u,t,s,r
try{w=B.a.i(d)
if(J.d0(w,"\ufeff"))w=J.mG(w,1)
v=!1
if(J.d0(w,"NGMYSNAP1|")){v=!0
w=B.cf.cz(0,B.cI.aJ(J.mG(w,10)))}u=B.S.aI(0,w,null)
if(!x.f.b(u))return null
t=A.a2(u,x.N,x.z)
s=v?C.hA6(t):C.h7N(t)
return s}catch(r){return null}},
hA6(d){var w,v,u,t,s,r,q,p,o,n=new C.bYJ(),m=new C.bYI(),l=d.h(0,"qi")
if(x.f.b(l)){w=A.a2(l,x.N,x.z)
v=w.h(0,"n")
v=J.k(v==null?"":v)
u=m.$1(w.h(0,"a"))
t=m.$1(w.h(0,"r"))
s=n.$1(w.h(0,"p"))
if(s==null)s=new A.S(Date.now(),0,!1)
r=m.$1(w.h(0,"t"))
q=A.aJ(w.h(0,"d"))
p=new A.vn(v,u,t,s,r,B.k.N(q==null?0:q))}else p=null
v=d.h(0,"qu")
v=J.k(v==null?"User":v)
u=m.$1(d.h(0,"qb"))
t=m.$1(d.h(0,"qp"))
s=J.A(d.h(0,"qc"),!0)
r=n.$1(d.h(0,"qs"))
q=n.$1(d.h(0,"ql"))
n=n.$1(d.h(0,"qe"))
m=m.$1(d.h(0,"qt"))
o=A.aJ(d.h(0,"qn"))
if(o==null)o=0
return new A.a5E("","",v,u,t,s,r,q,n,m,o,p,B.i6,new A.S(Date.now(),0,!1),-1)},
h7N(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(!J.A(d.h(0,"ngmyAccountSnapshot"),2))return null
w=new C.bYL()
v=d.h(0,"activeInvestment")
if(x.f.b(v)){u=A.a2(v,x.N,x.z)
t=u.h(0,"name")
t=J.k(t==null?"":t)
s=A.aJ(u.h(0,"amount"))
if(s==null)s=0
r=A.aJ(u.h(0,"dailyROI"))
if(r==null)r=0
q=w.$1(u.h(0,"purchaseDate"))
if(q==null)q=new A.S(Date.now(),0,!1)
p=A.aJ(u.h(0,"totalEarned"))
if(p==null)p=0
o=A.aJ(u.h(0,"daysClockedIn"))
n=new A.vn(t,s,r,q,p,B.k.N(o==null?0:o))}else n=null
m=d.h(0,"transactions")
if(x.j.b(m)){t=x.aM
l=A.C(new A.e9(J.b6(m,new C.bYK(w),x.eG),t),t.k("J.E"))}else l=A.a([],x.E)
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
o=J.A(d.h(0,"isClockedIn"),!0)
k=w.$1(d.h(0,"clockInStartTime"))
j=w.$1(d.h(0,"lastClockInDate"))
i=w.$1(d.h(0,"lastClockInEarningsDate"))
h=A.aJ(d.h(0,"todayClockInEarned"))
if(h==null)h=0
g=A.aJ(d.h(0,"clockInPenaltyPercent"))
if(g==null)g=0
w=w.$1(d.h(0,"exportedAt"))
if(w==null)w=new A.S(Date.now(),0,!1)
f=A.aJ(d.h(0,"walletStateRevision"))
f=f==null?null:B.k.N(f)
return new A.a5E(t,s,r,q,p,o,k,j,i,h,g,n,l,w,f==null?-1:f)},
fTG(d,e,f,g){var w=0,v=A.j(x.N),u,t,s,r
var $async$fTG=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:t=A.bYH(d,e,f,g)
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(t.a,s,"_")
u=A.Gk(A.JO(t.eR(),null,"  "),"ngmy-growth-income-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fTG,v)},
VO:function VO(d,e){this.a=d
this.b=e},
bYJ:function bYJ(){},
bYI:function bYI(){},
bYL:function bYL(){},
bYK:function bYK(d){this.a=d},
hXl(d){return A.cb(null,B.aW,!0,null,new C.fnM(),d,null,!0,!0,x.N)},
hXy(d,e,f,g){return A.cb(null,B.aW,!0,null,new C.fp_(g,f,e),d,null,!0,!0,x.y)},
an9:function an9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBO:function aBO(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=_.w=null},
dvJ:function dvJ(d,e){this.a=d
this.b=e},
dvK:function dvK(d){this.a=d},
dvA:function dvA(d,e){this.a=d
this.b=e},
dvy:function dvy(d){this.a=d},
dvI:function dvI(d){this.a=d},
dvH:function dvH(d,e){this.a=d
this.b=e},
dvx:function dvx(d,e){this.a=d
this.b=e},
dvw:function dvw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dvz:function dvz(d){this.a=d},
dvG:function dvG(){},
dvE:function dvE(d){this.a=d},
dvF:function dvF(d,e){this.a=d
this.b=e},
dvB:function dvB(){},
dvC:function dvC(d,e){this.a=d
this.b=e},
dvD:function dvD(d,e){this.a=d
this.b=e},
dvL:function dvL(d){this.a=d},
a0b:function a0b(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bri:function bri(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ZO:function ZO(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bio:function bio(){var _=this
_.e=_.d=$
_.c=_.a=_.f=null},
dvP:function dvP(d){this.a=d},
dvM:function dvM(d,e){this.a=d
this.b=e},
dvN:function dvN(d,e){this.a=d
this.b=e},
dvO:function dvO(d){this.a=d},
ZP:function ZP(d){this.a=d},
bip:function bip(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dvQ:function dvQ(d,e){this.a=d
this.b=e},
fnM:function fnM(){},
fp_:function fp_(d,e,f){this.a=d
this.b=e
this.c=f},
aeb:function aeb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eVA:function eVA(d){this.a=d},
eVB:function eVB(d){this.a=d},
PO:function PO(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
YW:function YW(d){this.a=d},
az6:function az6(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d4M:function d4M(d){this.a=d},
d4J:function d4J(){},
d4K:function d4K(d){this.a=d},
d4L:function d4L(d){this.a=d},
TS(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$TS=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||B.a.i(f).length===0){w=1
break}w=3
return A.b(A.MN(s),$async$TS)
case 3:t=h
J.ci(t,A.F(["role",e,"text",B.a.i(f),"at",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.z))
w=4
return A.b(A.anp(s,t),$async$TS)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TS,v)},
hAq(d){var w,v,u,t,s,r,q,p
if(d.length===0)return""
w=A.U(d).k("a_<1>")
v=A.C(new A.a_(d,new C.bZu(),w),w.k("J.E"))
w=v.length
if(w===0)return""
u=w<=24?v:B.d.fN(v,w-24)
w=u.length
t="Recent conversation memory (local, last "+w+" messages):\n"
for(s=0;s<u.length;u.length===w||(0,A.K)(u),++s){r=u[s]
q=J.a4(r)
p=J.A(q.h(r,"role"),"user")?"User":"Assistant"
t+=p+": "+A.t(q.h(r,"text"))+"\n"}return t.charCodeAt(0)==0?t:t},
bZu:function bZu(){},
i1Y(d){return B.d.dM(B.Cd,new C.fxq(d),new C.fxr()).r},
fxq:function fxq(d){this.a=d},
fxr:function fxr(){},
anE:function anE(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
biv:function biv(d){var _=this
_.d=d
_.e=0
_.f=1
_.r=$
_.w=null
_.x=!1
_.c=_.a=null},
dCa:function dCa(d){this.a=d},
dC9:function dC9(d){this.a=d},
dC1:function dC1(d,e,f){this.a=d
this.b=e
this.c=f},
dC6:function dC6(d){this.a=d},
dC3:function dC3(d,e,f){this.a=d
this.b=e
this.c=f},
dC7:function dC7(d){this.a=d},
dC2:function dC2(d){this.a=d},
dC8:function dC8(d){this.a=d},
dC4:function dC4(d){this.a=d},
dC5:function dC5(d){this.a=d},
h9s(d){var w=A.c5Q(new A.S(Date.now(),0,!1)),v=d.bk
if(v===w)return
d.bk=w
d.bQ=0
d.c3=A.a([],x.s)},
h9u(d){return A.cb(null,B.w.j(0.82),!0,null,new C.c5V(),d,null,!0,!0,x.H)},
a6g:function a6g(d){this.a=d},
c5V:function c5V(){},
c5U:function c5U(d){this.a=d},
hmB(){var w=new A.S(Date.now(),0,!1),v=w.bR(A.dC(4-A.my(w),0,0,0,0,0).a),u=A.c1(A.bA(v),1,4,0,0,0,0,0)
return""+A.bA(v)+"-W"+B.a.aU(B.o.u(1+B.k.bn(B.o.an(v.bE(A.c1(A.bA(u),A.bH(u),A.bR(u),0,0,0,0,0)).a,864e8)/7)),2,"0")},
feH(d,e){var w,v,u,t,s,r,q=A.G_(e)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.q(t,"email")
r=B.a.i(J.k(s==null?"":s).toLowerCase())
if((B.a.ca(r,"+local.ngmy")?B.a.ap(r,0,r.length-11):r)===q)return t}t=A.F(["email",q,"winStreak",0,"loseStreak",0],x.N,x.K)
w.push(t)
return t},
hRV(d,e){var w,v,u,t,s,r,q,p=A.G_(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.a4(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.ca(q,"+local.ngmy")?B.a.ap(q,0,q.length-11):q)===p){w=A.aJ(s.h(t,"winsLeft"))
w=w==null?null:B.k.N(w)
return w==null?0:w}}return 0},
ibc(d,e){var w,v,u,t,s,r,q,p,o="winsLeft",n=A.G_(e)
for(w=d.w,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=J.a4(t)
r=s.h(t,"email")
q=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.ca(q,"+local.ngmy")?B.a.ap(q,0,q.length-11):q)===n){w=A.aJ(s.h(t,o))
w=w==null?null:B.k.N(w)
p=(w==null?0:w)-1
s.n(t,o,p<0?0:p)
return}}},
hYe(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="email",a3="+local.ngmy",a4="nextLeft",a5="updatedAt",a6="dayUsed",a7="dayKey",a8="weekUsed",a9="weekKey",b0="faceUse",b1=A.G_(b5),b2=A.c7b(),b3=C.hmB()
for(w=b4.z,v=w.length,u=a1,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.a4(s)
q=r.h(s,a2)
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.ca(p,a3)?B.a.ap(p,0,p.length-11):p)!==b1)continue
q=A.aJ(r.h(s,a4))
o=q==null?a1:B.k.N(q)
if((o==null?0:o)<=0)continue
if(u!=null){r=r.h(s,a5)
r=J.k(r==null?"":r)
q=J.q(u,a5)
q=J.k(q==null?"":q)
if(r===q)r=0
else r=r<q?-1:1
r=r>=0}else r=!0
if(r)u=s}if(u!=null){w=J.a4(u)
v=A.aJ(w.h(u,a4))
v=v==null?a1:B.k.N(v)
w.n(u,a4,(v==null?1:v)-1)
w=A.aJ(w.h(u,"outcome"))
w=w==null?a1:B.k.N(w)
return w==null?1:w}n=new C.fpO()
for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.q(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.ca(p,a3)?B.a.ap(p,0,p.length-11):p)!==b1)continue
m=n.$5(s,"perDay",a6,a7,b2)
if(m!=null)return m}for(w=b4.z,v=w.length,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.q(s,a2)
p=B.a.i(J.k(r==null?"":r).toLowerCase())
if((B.a.ca(p,a3)?B.a.ap(p,0,p.length-11):p)!==b1)continue
l=n.$5(s,"perWeek",a8,a9,b3)
if(l!=null)return l}k=C.feH(b4,b5)
w=J.a4(k)
v=x.f
r=x.N
q=x.z
j=v.b(w.h(k,b0))?A.a2(v.a(w.h(k,b0)),r,q):A.T(r,q)
w.n(k,b0,j)
for(w=b4.y,w=new A.cK(w,A.a3(w).k("cK<1,2>")).gae(0);w.C();){i=w.d
h=i.b
g=J.a4(h)
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
a0=g==null?a1:B.k.N(g)
if(a0==null)a0=0
if(a0<f){d.n(0,a6,a0+1)
return A.c8(h,a1)}}if(e>0){g=d.h(0,a9)
if(J.k(g==null?"":g)!==b3){d.n(0,a9,b3)
d.n(0,a8,0)}g=A.aJ(d.h(0,a8))
a0=g==null?a1:B.k.N(g)
if(a0==null)a0=0
if(a0<e){d.n(0,a8,a0+1)
return A.c8(h,a1)}}}return a1},
hje(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[1,2,3],v=d.a,u=0;u<3;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
if(w===0)return 1
t=q[e.aA(w)]
if(t===3&&d.f>=d.e)t=e.he()?1:2
return t},
fZs(d,e){var w,v,u,t,s,r,q=A.a([],x.t)
for(w=[-1,-2],v=d.a,u=0;u<2;++u){t=w[u]
s=v.h(0,""+t)
if(s==null)s=10
for(r=0;r<s;++r)q.push(t)}w=q.length
return w===0?-1:q[e.aA(w)]},
hYf(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="winsLeft",g="losesLeft",f="plus3Left",e="updatedAt",d="last",a0=A.G_(a3),a1=new C.fpP()
for(w=a2.as,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t]
r=J.a4(s)
q=r.h(s,"email")
p=B.a.i(J.k(q==null?"":q).toLowerCase())
if((B.a.ca(p,"+local.ngmy")?B.a.ap(p,0,p.length-11):p)!==a0)continue
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
w=J.a4(u)
v=w.h(u,d)
l=J.k(v==null?"":v)
v=o>0?1:0
r=n>0?1:0
q=m>0?1:0
q=new C.fpQ(v+r+q>1,l)
k=q.$2(o,"w")
r=k+q.$2(n,"l")
j=a4.aA(r+q.$2(m,"p"))
if(j<k){w.n(u,h,o-1)
w.n(u,d,"w")
w=a2.a
v=w.h(0,"1")
if(v==null)v=10
i=Math.max(1,v)
w=w.h(0,"2")
if(w==null)w=10
return a4.aA(i+Math.max(1,w))<i?1:2}if(j<r){w.n(u,g,n-1)
w.n(u,d,"l")
return C.fZs(a2,a4)}w.n(u,f,m-1)
w.n(u,d,"p")
return 3},
hYd(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=null,l="crowdStamp",k="crowdWinsUsed",j="crowdLosesUsed",i=d.Q,h=A.aJ(i.h(0,"wins")),g=h==null?m:B.k.N(h)
if(g==null)g=0
h=A.aJ(i.h(0,"loses"))
w=h==null?m:B.k.N(h)
if(w==null)w=0
if(g+w<=0)return m
h=i.h(0,"id")
v=J.k(h==null?"":h)
h=i.h(0,"period")
u=J.k(h==null?"day":h)==="week"?C.hmB():A.c7b()
t=v+"|"+u
s=C.feH(d,e)
h=J.a4(s)
r=h.h(s,l)
if(J.k(r==null?"":r)!==t){h.n(s,l,t)
h.n(s,k,0)
h.n(s,j,0)}r=A.aJ(h.h(s,k))
q=r==null?m:B.k.N(r)
if(q==null)q=0
r=A.aJ(h.h(s,j))
p=r==null?m:B.k.N(r)
if(p==null)p=0
o=Math.max(0,g-q)
r=o+Math.max(0,w-p)
if(r<=0)return m
n=f.aA(r)<o
if(n)h.n(s,k,q+1)
else h.n(s,j,p+1)
return n},
i5A(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
d.bhe()
w=C.hYf(d,e,a0)
if(w!=null){if(w===3)++d.f
C.afC(d,e,w)
return w}v=C.hYe(d,e)
if(v!=null){if(v===3)++d.f
C.afC(d,e,v)
return v}u=C.hYd(d,e,a0)
if(u!=null)return new C.fEr(d,a0,e).$1(u)
t=C.feH(d,e)
s=J.a4(t)
r=A.aJ(s.h(t,"winStreak"))
q=r==null?null:B.k.N(r)
if(q==null)q=0
s=A.aJ(s.h(t,"loseStreak"))
p=s==null?null:B.k.N(s)
if(p==null)p=0
o=new C.fEt(d,a0)
if(C.hRV(d,e)>0){n=o.$0()
C.ibc(d,e)
C.afC(d,e,n)
return n}if(q>=d.c){n=new C.fEs(d,a0).$0()
C.afC(d,e,n)
return n}if(p>=d.d){n=o.$0()
if(n===3)++d.f
C.afC(d,e,n)
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
g=a0.aA(100)<h
if(g&&m.length!==0){f=m[a0.aA(m.length)]
if(f===3&&d.f>=d.e)f=a0.he()?1:2}else{s=l.length
if(s!==0)f=l[a0.aA(s)]
else f=g?1:-1}if(f===3)++d.f
C.afC(d,e,f)
return f},
c73(d){var w=0,v=A.j(x.y),u
var $async$c73=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c72(d),$async$c73)
case 3:if(f){u=!0
w=1
break}u=A.c72(d)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c73,v)},
afC(d,e,f){var w,v="winStreak",u="loseStreak",t=C.feH(d,e),s=J.a4(t),r=A.aJ(s.h(t,v)),q=r==null?null:B.k.N(r)
if(q==null)q=0
r=A.aJ(s.h(t,u))
w=r==null?null:B.k.N(r)
if(w==null)w=0
if(f>0){s.n(t,v,q+1)
s.n(t,u,0)}else{s.n(t,u,w+1)
s.n(t,v,0)}},
fpO:function fpO(){},
fpP:function fpP(){},
fpQ:function fpQ(d,e){this.a=d
this.b=e},
fEr:function fEr(d,e,f){this.a=d
this.b=e
this.c=f},
fEt:function fEt(d,e){this.a=d
this.b=e},
fEs:function fEs(d,e){this.a=d
this.b=e},
an8:function an8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bim:function bim(d,e){var _=this
_.f=_.e=_.d=$
_.r=1
_.w=0
_.cO$=d
_.b2$=e
_.c=_.a=null},
dvl:function dvl(d){this.a=d},
dvk:function dvk(d){this.a=d},
dvm:function dvm(d){this.a=d},
dvj:function dvj(d,e){this.a=d
this.b=e},
aKt:function aKt(){},
Ne:function Ne(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c7T:function c7T(){},
c7S:function c7S(){},
apa:function apa(d,e,f){this.c=d
this.d=e
this.a=f},
fUH(d,e,f){return A.cb(null,B.w.j(0.88),!0,null,new C.c8k(f,e),d,null,!0,!0,x.H)},
hEc(d){var w,v,u,t,s=B.a.i(d),r=s.split("-")
if(r.length===3){w=A.c8(r[0],null)
v=r[1]
u=A.c8(v,null)
t=A.c8(r[2],null)
if(w!=null&&u!=null&&t!=null)return(u>=1&&u<=12?B.ik[u-1]:v)+" "+A.t(t)+", "+A.t(w)}return s},
Nm:function Nm(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c8k:function c8k(d,e){this.a=d
this.b=e},
bj2:function bj2(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
dVk:function dVk(d,e){this.a=d
this.b=e},
dVg:function dVg(){},
dVh:function dVh(){},
dVi:function dVi(d,e){this.a=d
this.b=e},
dVj:function dVj(d,e){this.a=d
this.b=e},
aL2:function aL2(){},
hmx(d){var w={},v=d.c
if(v==null)return null
w.a=null
d.bgK(new C.fzN(w))
w=w.a
return w==null?null:w.c.a},
hmp(d){$.aW.x1$.push(new C.fzA(d))},
hmJ(d){var w=$.rX().gbj(),v=w!=null
if(!v||w.c==null)return
if(C.hmx(w)==="GamePlayScreen")if(v&&w.c!=null&&w.py())w.eN()},
hmI(d){C.hjl(d,0)},
hjl(d,e){var w,v
if(e>4)return
w=d==null?$.rX().gbj():d
if(w==null||w.c==null)return
v=C.hmx(w)
if(v==="GameCenterScreen")return
if(D.eOP.t(0,v)&&w.py()){w.eN()
$.aW.x1$.push(new C.fm2(w,e))}},
aOX(d,e,f){return A.el(A.cq(new C.fB9(e,d,f)),e,!0)},
fzN:function fzN(d){this.a=d},
fzA:function fzA(d){this.a=d},
fzz:function fzz(d){this.a=d},
fm2:function fm2(d,e){this.a=d
this.b=e},
fB9:function fB9(d,e,f){this.a=d
this.b=e
this.c=f},
ape(d,e){var w=0,v=A.j(x.H),u
var $async$ape=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=A.UW(e)
w=2
return A.b(A.apd(d,u),$async$ape)
case 2:A.a6V(d,u)
return A.h(null,v)}})
return A.i($async$ape,v)},
uz(d,e,f,g,h,i,j,k){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$uz=A.e(function(l,m){if(l===1)return A.f(m,v)
for(;;)switch(w){case 0:o=A.yd(g)
if(o.length===0){w=1
break}t=e==null?A.KU(o,null):null
s=t==null
if(!s&&i!=null)r=k?t-d+i:t+i
else r=null
w=3
return A.b(A.Nn(o),$async$uz)
case 3:q=m
if(j!=null&&j.length!==0&&J.qT(q,new C.c8y(j))){w=1
break}p=e==null?new A.S(Date.now(),0,!1):e
J.px(q,0,new A.ja(B.o.u(1000*Date.now()),h,k,d,f,p,j,i,r,t))
w=4
return A.b(C.ape(o,q),$async$uz)
case 4:if(i==null||r==null||s)C.a6X(o).bA(new C.c8z(),x.S).eP(new C.c8A())
case 1:return A.h(u,v)}})
return A.i($async$uz,v)},
a6X(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m
var $async$a6X=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=$.hnH
m=A.yd(d)
if(n==null||m.length===0){w=1
break}w=3
return A.b(A.Nn(m),$async$a6X)
case 3:t=f
s=J.cF(t)
if(!s.b4(t,new C.c8x())){w=1
break}w=4
return A.b(n.$2(m,t),$async$a6X)
case 4:r=f
q=J.a4(r)
if(q.gM(r)!==s.gM(t)){w=1
break}for(p=!1,o=0;o<s.gM(t);++o)if(B.S.ao(s.h(t,o).ag(),null)!==B.S.ao(q.h(r,o).ag(),null))p=!0
w=p?5:6
break
case 5:w=7
return A.b(C.ape(m,r),$async$a6X)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$a6X,v)},
aZz(d){var w=0,v=A.j(x.S),u,t
var $async$aZz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fUK(d,!1),$async$aZz)
case 3:t=J
w=4
return A.b(C.apf(d,!1),$async$aZz)
case 4:u=t.dH(f,new C.c8w(new A.S(Date.now(),0,!1).bR(-864e8))).gM(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZz,v)},
apf(d,e){var w=0,v=A.j(x.ac),u,t,s,r
var $async$apf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=A.yd(d)
if(r.length===0){u=A.a([],x.gi)
w=1
break}w=3
return A.b(A.Nn(r),$async$apf)
case 3:t=g
s=A.UW(t)
if(s.length!==J.ad(t))C.ape(r,s)
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apf,v)},
i3v(d){var w,v,u,t=new A.S(Date.now(),0,!1),s=t.bE(d).a,r=B.o.an(s,6e7)
if(r<1)return"Just now"
w=B.o.an(s,36e8)
if(w<1)return""+r+"m ago"
if(B.o.an(s,864e8)<1)return""+w+"h ago"
v=B.o.E(A.dk(d),12)===0?12:B.o.E(A.dk(d),12)
s=B.ik[A.bH(d)-1]
r=A.bA(d)===A.bA(t)?"":", "+A.bA(d)
w=B.a.aU(B.o.u(A.h0(d)),2,"0")
u=A.dk(d)<12?"AM":"PM"
return s+" "+A.bR(d)+r+" \xb7 "+v+":"+w+" "+u},
bzl(d){var w=B.k.ab(Math.abs(d),2).split(".")
return"$"+A.oE(w[0],A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fjm(),null)+"."+w[1]},
bCU(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$bCU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.apf(e,!1),$async$bCU)
case 3:s=g
if(d.e==null){w=1
break}t=x.H
A.fUK(e,!0).bA(new C.fMO(e),t).bA(new C.fMP(),t).eP(new C.fMQ())
w=4
return A.b(A.bS(B.K,null,new C.fMR(e,s),d,!0,!0,!0,null,!1,!1,t),$async$bCU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$bCU,v)},
fXC(d,e,f){var w=null,v=B.c.j(0.05),u=A.m(14),t=A.I(f.j(0.35),B.q,1)
return A.E(A.p(w,A.w(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,9.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w),B.bD,A.f6(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.du)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.hN,w,w,w),1)},
dVl(d,e,f){var w=null,v=B.w.j(0.22),u=A.m(8),t=A.I(f.j(0.28),B.q,1)
return A.E(A.p(w,A.w(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,7.5,w,w,B.u,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),A.f6(B.a3,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,11.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.ei)],x.p),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.Mv,w,w,w),1)},
c8y:function c8y(d){this.a=d},
c8z:function c8z(){},
c8A:function c8A(){},
c8x:function c8x(){},
c8w:function c8w(d){this.a=d},
fjm:function fjm(){},
fMO:function fMO(d){this.a=d},
fMP:function fMP(){},
fMQ:function fMQ(){},
fMR:function fMR(d,e){this.a=d
this.b=e},
fMN:function fMN(d,e){this.a=d
this.b=e},
fMM:function fMM(d){this.a=d},
ad_:function ad_(d,e){this.c=d
this.a=e},
dVn:function dVn(){},
dVo:function dVo(){},
dVp:function dVp(){},
dVq:function dVq(d){this.a=d},
dVs:function dVs(){},
dVr:function dVr(d){this.a=d},
acZ:function acZ(d,e){this.c=d
this.a=e},
dVm:function dVm(){},
bCV(d,e,f,g,h,i,j){var w=j?"Win":"Lose"
return A.hU(B.aW,!1,w,d,new C.fMU(j,i,h,g,e,f),null,B.eL,!1,x.H)},
fMU:function fMU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fMS:function fMS(d,e){this.a=d
this.b=e},
fMT:function fMT(d,e){this.a=d
this.b=e},
azK:function azK(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
beH:function beH(d,e,f){var _=this
_.d=$
_.e=d
_.f=$
_.bt$=e
_.a9$=f
_.c=_.a=null},
dbN:function dbN(d,e){this.a=d
this.b=e},
dbM:function dbM(){},
ado:function ado(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aJZ:function aJZ(){},
aq_(d,e,f){return new C.b_q(f,d,e,null)},
hER(d){var w=A.a(B.k.ab(d,2).split("."),x.s),v=A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1)
w[0]=A.oE(w[0],v,new C.ca8(),null)
return B.d.aH(w,".")},
aZC(){var w=$.tm
if((w>0?$.tm=w-1:w)<=0)$.tm=0},
agM(d,e){var w=0,v=A.j(x.H),u
var $async$agM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:u=$.h18
w=u!=null?2:3
break
case 2:w=4
return A.b(u.$2(d,e),$async$agM)
case 4:case 3:return A.h(null,v)}})
return A.i($async$agM,v)},
b_q:function b_q(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ca9:function ca9(d){this.a=d},
ca8:function ca8(){},
MQ:function MQ(){},
c_0:function c_0(){},
h0x(d){if(d>0)return"+"+d
return""+d},
h_U(){var w,v
for(w=0,v=1;v<=7;++v)w+=Math.min(v+2,7)
return w},
fBa(d,e){var w=J.q(e,d)
if(w==null)w=A.fzX().h(0,d)
return w==null?90:w},
fik(d,e){var w,v,u=A.aX(x.S)
while(u.a<3){w=e.aA(41)-20
if(w===0)continue
u.L(0,d+w)}u.W(0,d)
while(v=u.a,v<3)u.L(0,d+v*7+3)
v=A.a([B.o.u(d)],x.s)
B.d.v(v,new A.jO(u,new C.fil(),u.$ti.k("jO<co.E,n>")))
B.d.fn(v,e)
return v},
hil(d,e,f){var w,v,u,t,s=A.aX(x.N)
for(w=0;w<5;++w){v=f[w]
if(v!==d)s.L(0,v)
if(s.a>=3)break}for(u=0;s.a<3;){s.L(0,f[B.o.E(u,5)]+u);++u}t=A.a([d],x.s)
B.d.v(t,A.pd(s,3,s.$ti.k("co.E")))
B.d.fn(t,e)
return t},
hZG(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=A.a([],x.dA),b2=new A.eJ()
b2.dw(42)
for(w=x.s,v=0;v<200;++v){u=B.o.E(v,5)
if(u===0){t=[4,9,16,25,36,49,64,81,121,144,196,256][b2.aA(12)]
s=[2,3,5,6,7,10,11,13][b2.aA(8)]
r=B.k.N(Math.sqrt(t))
q=2+b2.aA(4)
p=B.o.an(q,2)
if((q&1)===0){o=""+r
n=""+s
m=p===1?o+"\u221a"+n:o+"x^"+p+"\u221a"+n}else{o=""+r
n=""+s
m=p===0?o+"\u221a"+n+"x":o+"x^"+p+"\u221a"+n+"x"}o=""+p
n=""+s
l=""+r+"x^"
b1.push(new C.It("Simplify \u221a("+t*s+"x^"+q+")",m,C.hil(m,b2,A.a([""+(r+1)+"x^"+o+"\u221a"+n,A.t(Math.max(1,r-1))+"x^"+o+"\u221a"+n,l+(p+1)+"\u221a"+n,l+o+"\u221a"+(s+1),""+r*2+"x^"+o+"\u221a"+n],w))))}else if(u===1){k=3+b2.aA(35)
j=b2.aA(4)===0?1:2+b2.aA(4)
i=b2.aA(41)-20
h=j===1?"x":""+j+"x"
o=i>=0?"+ "+i:"\u2212 "+-i
b1.push(new C.It("Solve: "+h+" "+o+" = "+(j*k+i),""+k,C.fik(k,b2)))}else if(u===2){k=2+b2.aA(18)
j=b2.aA(12)+1
i=2*k-j
if(i<=k){g=k+1
f=b2.aA(10)+2
b1.push(new C.It("Solve: \u221a(x \u2212 "+f+") = \u221a(\u2212x + "+(2*g-f)+")",""+g,C.fik(g,b2)))}else b1.push(new C.It("Solve: \u221a(x \u2212 "+j+") = \u221a(\u2212x + "+i+")",""+k,C.fik(k,b2)))}else if(u===3){e=b2.aA(11)-5
o=b2.aA(11)
n=b2.aA(11)
d=b2.aA(11)+2
l=b2.he()?1:-1
a0=e+l*(b2.aA(9)+3)
a1=e-a0
a2=o+2-d
a3=a1*a1+a2*a2
a4=Math.sqrt(a3)
a5=a4===B.k.k6(a4)?""+B.k.N(a4):"\u221a"+a3
b1.push(new C.It("Find x. Distance between ("+e+", x) and ("+(n-5)+", "+d+") is "+a5,""+a0,C.fik(a0,b2)))}else{a6=2+b2.aA(10)
a7=a6+2+b2.aA(10)
i=a6+a7
a8=a6*a7
o=i>=0?"+ "+i:"\u2212 "+-i
n=a8>=0?"+ "+a8:"\u2212 "+-a8
l=""+a6
a9="(x\xb2 + "+l+")(x\xb2 + "
b0=""+a7
m=a9+b0+")"
b1.push(new C.It("Factor: x\u2074 "+o+"x\xb2 "+n,m,C.hil(m,b2,A.a(["(x\xb2 + "+(a6+1)+")(x\xb2 + "+b0+")",a9+(a7+1)+")","(x\xb2 + "+(a6-1)+")(x\xb2 + "+b0+")","(x + "+l+")(x + "+b0+")",a9+(a7-1)+")"],w))))}}return b1},
i9p(d){var w,v,u=x.s,t=A.a(d.split(""),u)
if(t.length<4)return new A.dz(A.a(d.split(""),u),x.bJ).h_(0)
for(w=0;w<12;++w){B.d.fn(t,B.cG)
v=B.d.h_(t)
if(v!==d)return v}return new A.dz(t,x.bJ).h_(0)},
It:function It(d,e,f){this.a=d
this.b=e
this.c=f},
fil:function fil(){},
aoC:function aoC(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCz:function aCz(d,e){var _=this
_.d=d
_.e=e
_.f=2
_.w=_.r=null
_.y=_.x=!1
_.z=0
_.c=_.a=null},
dOn:function dOn(d){this.a=d},
dOo:function dOo(d){this.a=d},
dOp:function dOp(d){this.a=d},
dOq:function dOq(d,e){this.a=d
this.b=e},
dOr:function dOr(d,e){this.a=d
this.b=e},
dOs:function dOs(d){this.a=d},
dOm:function dOm(d){this.a=d},
dOt:function dOt(d){this.a=d},
dOl:function dOl(d){this.a=d},
dOw:function dOw(d){this.a=d},
dOx:function dOx(d){this.a=d},
dOv:function dOv(d,e){this.a=d
this.b=e},
dOu:function dOu(d,e){this.a=d
this.b=e},
apg:function apg(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCQ:function aCQ(d,e){var _=this
_.d=d
_.e=e
_.f=null
_.r=$
_.c=_.a=null},
dVK:function dVK(d,e,f){this.a=d
this.b=e
this.c=f},
dVL:function dVL(d){this.a=d},
dVG:function dVG(d){this.a=d},
dVI:function dVI(d,e){this.a=d
this.b=e},
dVH:function dVH(d,e){this.a=d
this.b=e},
dVJ:function dVJ(d,e){this.a=d
this.b=e},
dVF:function dVF(d){this.a=d},
hB2(d){var w,v,u,t,s,r,q,p=new A.S(Date.now(),0,!1),o=p.bR(36e8)
try{w=d.h(0,"start")
p=A.mN(J.k(w==null?"":w)).bT()
w=d.h(0,"end")
o=A.mN(J.k(w==null?"":w)).bT()}catch(v){}w=d.h(0,"id")
w=J.k(w==null?"":w)
u=d.h(0,"title")
u=J.k(u==null?"Event":u)
t=p
s=o
r=d.h(0,"notes")
r=r==null?null:J.k(r)
q=d.h(0,"location")
return new C.rk(w,u,t,s,r,q==null?null:J.k(q))},
a72(d){var w=0,v=A.j(x.ck),u,t,s,r,q,p,o
var $async$a72=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.b)
w=1
break}w=3
return A.b(A.az(),$async$a72)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aU(J.q(q.a,"ngmy_helper_calendar_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.b)
w=1
break}try{s=B.S.aI(0,t,null)
if(!x.j.b(s)){p=A.a([],x.b)
u=p
w=1
break}p=J.da(s,x.f)
p=A.cD(p,new C.c9_(),p.$ti.k("J.E"),x.b1)
p=A.C(p,A.a3(p).k("J.E"))
B.d.b0(p,new C.c90())
u=p
w=1
break}catch(n){r=A.aa(n)
$.am.$1("[calendar-memory] load: "+A.t(r))
p=A.a([],x.b)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$a72,v)},
apy(d,e){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$apy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.a72(d),$async$apy)
case 2:r=g
q=J.cF(r)
q.bq(r,new C.c8X(e))
q.L(r,e)
q.b0(r,new C.c8Y())
w=3
return A.b(A.az(),$async$apy)
case 3:u=g
t=B.a.i(d.toLowerCase())
q=q.ky(r,80)
s=q.$ti.k("M<ak.E,a5<n,@>>")
q=A.C(new A.M(q,new C.c8Z(),s),s.k("ak.E"))
w=4
return A.b(u.ar("String","ngmy_helper_calendar_v1_"+t,B.S.ao(q,null)),$async$apy)
case 4:return A.h(null,v)}})
return A.i($async$apy,v)},
hEp(d,e){var w=Date.now(),v=new A.S(w,0,!1).bT()
w=J.dH(d,new C.c91(v,v.bR(A.dC(14,0,0,0,0,0).a)))
w=A.C(w,w.$ti.k("J.E"))
return w},
ha0(d){var w,v,u,t,s,r,q,p,o,n,m=C.hEp(d,null)
if(m.length===0)return"NGMY CALENDAR MEMORY: no upcoming events saved yet. Events appear here when NGMY adds them to your calendar."
for(w=A.db(m,0,A.dG(20,"count",x.S),A.U(m).c),v=w.$ti,w=new A.bQ(w,w.gM(0),v.k("bQ<ak.E>")),v=v.k("ak.E"),u='NGMY CALENDAR MEMORY (upcoming \u2014 use for "what is on my calendar"):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
s=t.c
r=B.o.E(A.dk(s),12)===0?12:B.o.E(A.dk(s),12)
q=A.dk(s)>=12?"PM":"AM"
p=B.a.aU(B.o.u(A.h0(s)),2,"0")
o=t.f
if((o==null?null:B.a.i(o).length!==0)===!0){o.toString
n=" @ "+B.a.i(o)}else n=""
u+="- "+(t.b+" \xb7 "+(""+A.bH(s)+"/"+A.bR(s)+" "+r+":"+p+" "+q)+n)+"\n"
t=t.e
if(t!=null&&B.a.i(t).length!==0)u+="  Notes: "+t+"\n"}return B.a.i(u.charCodeAt(0)==0?u:u)},
rk:function rk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c9_:function c9_(){},
c90:function c90(){},
c8X:function c8X(d){this.a=d},
c8Y:function c8Y(){},
c8Z:function c8Z(){},
c91:function c91(d,e){this.a=d
this.b=e},
hB3(d){var w,v,u,t,s,r,q,p,o=null,n=new A.S(Date.now(),0,!1)
try{w=d.h(0,"when")
n=A.mN(J.k(w==null?"":w)).bT()}catch(v){}w=d.h(0,"id")
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
return new C.rl(w,u,t,s,r,q,J.k(p==null?"user":p))},
h8m(d){var w=B.o.E(A.dk(d),12)===0?12:B.o.E(A.dk(d),12),v=A.dk(d)>=12?"PM":"AM"
return""+A.bH(d)+"/"+A.bR(d)+" "+w+":"+B.a.aU(B.o.u(A.h0(d)),2,"0")+" "+v},
U4(d){var w=0,v=A.j(x.e),u,t,s,r,q,p,o
var $async$U4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=A.a([],x.x)
w=1
break}w=3
return A.b(A.az(),$async$U4)
case 3:q=f
p=B.a.i(d.toLowerCase())
t=A.aU(J.q(q.a,"ngmy_call_memory_v1_"+p))
if(t==null||t.length===0){u=A.a([],x.x)
w=1
break}try{s=B.S.aI(0,t,null)
if(!x.j.b(s)){p=A.a([],x.x)
u=p
w=1
break}p=J.da(s,x.f)
p=A.cD(p,new C.c1o(),p.$ti.k("J.E"),x.Q)
p=A.C(p,A.a3(p).k("J.E"))
B.d.b0(p,new C.c1p())
u=p
w=1
break}catch(n){r=A.aa(n)
$.am.$1("[call-memory] load: "+A.t(r))
p=A.a([],x.x)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$U4,v)},
aXX(d,e){var w=0,v=A.j(x.H),u,t,s,r
var $async$aXX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$aXX)
case 2:u=g
t=A.db(e,0,A.dG(120,"count",x.S),A.U(e).c).dK(0)
s=B.a.i(d.toLowerCase())
r=A.U(t).k("M<1,a5<n,@>>")
r=A.C(new A.M(t,new C.c1m(),r),r.k("ak.E"))
w=3
return A.b(u.ar("String","ngmy_call_memory_v1_"+s,B.S.ao(r,null)),$async$aXX)
case 3:return A.h(null,v)}})
return A.i($async$aXX,v)},
aXY(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o
var $async$aXY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:p=A.T(x.N,x.Q)
o=J
w=2
return A.b(C.U4(d),$async$aXY)
case 2:u=o.aV(g)
case 3:if(!u.C()){w=4
break}t=u.gR(u)
p.n(0,t.a,t)
w=3
break
case 4:for(s=0;s<1;++s){r=e[s]
p.n(0,r.a,r)}u=p.$ti.k("bc<2>")
q=A.C(new A.bc(p,u),u.k("J.E"))
B.d.b0(q,new C.c1n())
w=5
return A.b(C.aXX(d,q),$async$aXY)
case 5:return A.h(null,v)}})
return A.i($async$aXY,v)},
c1q(d,e){var w=0,v=A.j(x.e),u,t,s
var $async$c1q=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.U4(d),$async$c1q)
case 3:t=s.dH(g,new C.c1r(e.bR(-72e8),e.bR(72e8)))
t=A.C(t,t.$ti.k("J.E"))
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c1q,v)},
h8n(d,e){var w,v,u,t,s,r=J.a4(d)
if(r.gam(d))return'NGMY CALL MEMORY: empty \u2014 user must upload a call-log screenshot or paste voicemail text once (\u26a1 Superpowers) before "who called" questions work.'
for(w=r.ky(d,e),v=w.$ti,w=new A.bQ(w,w.gM(0),v.k("bQ<ak.E>")),v=v.k("ak.E"),u='NGMY CALL MEMORY (calls/voicemails you learned \u2014 use for "who called" questions):\n';w.C();){t=w.d
if(t==null)t=v.a(t)
u+="- "+t.gVd()+"\n"
t=t.f
if(t!=null&&B.a.i(t).length!==0){s=B.a.i(t)
u+="  Voicemail/text: "+(s.length>180?B.a.ap(s,0,177)+"\u2026":s)+"\n"}}r=r.gM(d)>e?u+("\u2026 and "+(r.gM(d)-e)+" more\n"):u
return B.a.i(r.charCodeAt(0)==0?r:r)},
i5k(d){var w,v,u,t,s,r=-864e8,q=Date.now(),p=new A.S(q,0,!1).bT(),o=d.toLowerCase(),n=A.c1(A.bA(p),A.bH(p),A.bR(p),0,0,0,0,0)
if(B.a.t(o,"yesterday"))n=n.bR(r)
else if(!B.a.t(o,"today")&&B.a.t(o,"last night"))n=n.bR(r)
w=A.af("\\b(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!0,!1,!1,!1).cF(o)
if(w==null)return null
q=w.b
v=q[1]
u=A.c8(v==null?"":v,null)
if(u==null)u=0
v=q[2]
t=A.c8(v==null?"":v,null)
if(t==null)t=0
s=q[3]
if(s==="pm"&&u<12)u+=12
if(s==="am"&&u===12)u=0
q=s==null
v=!1
if(q)if(u<=7)v=B.a.t(o,"am")||B.a.t(o,"morning")||B.a.t(o,"night")
if(v)if(B.a.t(o,"pm")||B.a.t(o,"afternoon")||B.a.t(o,"evening"))u=u<12?u+12:u
if(q&&B.a.t(o,"pm"))u=u<12?u+12:u
return A.c1(A.bA(n),A.bH(n),A.bR(n),u,t,0,0,0)},
ho6(d){var w=A.af("\\b(who called|missed call|phone call|voicemail|left a message|called me)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
rl:function rl(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c1o:function c1o(){},
c1p:function c1p(){},
c1m:function c1m(){},
c1n:function c1n(){},
c1r:function c1r(d,e){this.a=d
this.b=e},
ha3(d){var w,v,u,t=d.h(0,"type")
t=J.k(t==null?"text":t)
w=d.h(0,"content")
w=J.k(w==null?"":w)
v=d.h(0,"url")
v=v==null?null:J.k(v)
u=d.h(0,"label")
return new C.lA(t,w,v,u==null?null:J.k(u))},
hEv(d){var w,v,u,t,s="sortOrder",r=d.h(0,"id")
r=J.k(r==null?"":r)
w=d.h(0,"question")
w=J.k(w==null?"":w)
v=x.bM.a(d.h(0,"answerBlocks"))
if(v==null)v=null
else{v=J.b6(v,new C.c97(),x.bP)
v=A.C(v,v.$ti.k("ak.E"))}if(v==null)v=D.d6x
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=J.A(d.h(0,"printable"),!0)
return new C.ip(r,w,v,u,t,typeof d.h(0,s)=="number"?B.k.N(A.dR(d.h(0,s))):0)},
hEu(d){var w,v,u,t,s,r="colorValue",q="sortOrder",p=d.h(0,"id")
p=J.k(p==null?"":p)
w=d.h(0,"title")
w=J.k(w==null?"Category":w)
v=d.h(0,"icon")
v=C.hS7(J.k(v==null?"help":v))
u=typeof d.h(0,r)=="number"?B.k.N(A.dR(d.h(0,r))):4284773515
t=typeof d.h(0,q)=="number"?B.k.N(A.dR(d.h(0,q))):0
s=x.bM.a(d.h(0,"questions"))
if(s==null)s=null
else{s=J.b6(s,new C.c95(),x.u)
s=A.C(s,s.$ti.k("ak.E"))}return new C.i6(p,w,v,u,s==null?D.ax3:s,t)},
hS8(d){var w,v,u,t=A.F([G.BK,"investments",B.oS,"games",B.jI,"loans",B.hA,"withdrawals",B.kw,"deposits",B.l1,"civic",B.l0,"store",B.rl,"jobs",B.mz,"refunds",B.eT,"account",B.lU,"music",B.ya,"help"],x.dk,x.N)
for(w=new A.cK(t,A.a3(t).k("cK<1,2>")).gae(0),v=d.a;w.C();){u=w.d
if(u.a.a===v)return u.b}return"help"},
hS7(d){switch(d){case"investments":return G.BK
case"games":return B.oS
case"loans":return B.jI
case"withdrawals":return B.hA
case"deposits":return B.kw
case"civic":return B.l1
case"store":return B.l0
case"jobs":return B.rl
case"refunds":return B.mz
case"account":return B.eT
case"music":return B.lU
default:return B.ya}},
n2(d){var w=A.a([new C.lA("text",d,null,null)],x.a)
return w},
agJ(){var w=null,v=x.v
return A.a([new C.i6("investments","Investments",G.BK,4280468830,A.a([new C.ip("inv1","How do I buy an investment plan?",C.n2("Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns."),w,!1,0),new C.ip("inv2","When do I get paid from my plan?",C.n2("Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day."),w,!1,0),new C.ip("inv3","Can I have more than one plan?",C.n2("You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows."),w,!1,0)],v),0),new C.i6("games","Games",B.oS,4287323382,A.a([new C.ip("gam1","How do NGMY games work?",C.n2("Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings."),w,!1,0),new C.ip("gam2","Why did my game payout change?",C.n2("Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details."),w,!1,0)],v),1),new C.i6("loans","Loans",B.jI,4294538006,A.a([new C.ip("loan1","How do I apply for a loan?",C.n2("Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance."),w,!1,0),new C.ip("loan2","What is the repayment period?",C.n2("Standard loans run about two months with interest included in the total repayment shown at approval."),w,!1,0)],v),2),new C.i6("withdrawals","Withdrawals",B.hA,4282090230,A.a([new C.ip("wd1","How do I withdraw money?",C.n2("Open Wallet \u2192 Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required."),w,!1,0),new C.ip("wd2","Why is my withdrawal pending?",C.n2("Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status."),w,!1,0)],v),3),new C.i6("deposits","Deposits",B.kw,4279548070,A.a([new C.ip("dep1","How do I deposit funds?",C.n2("Wallet \u2192 Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference."),w,!1,0),new C.ip("dep2","How long until my deposit posts?",C.n2("Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately."),w,!1,0)],v),4),new C.i6("civic","Civic Registry",B.l1,4289170426,A.a([new C.ip("civ1","What is Civic Registry?",C.n2("Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to."),w,!1,0),new C.ip("civ2","What does \u201cmissed\u201d mean on my profile?",C.n2("Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label."),w,!1,0)],v),5),new C.i6("store","NGMY Store",B.l0,4293675161,A.a([new C.ip("sto1","How do I buy from NGMY Store?",C.n2("Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing."),w,!1,0),new C.ip("sto2","How do I sell in the store?",C.n2("Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price."),w,!1,0)],v),6),new C.i6("jobs","Jobs & Creator",B.rl,4293548044,A.a([new C.ip("job1","How do I find jobs?",C.n2("Open Job Marketplace \u2192 Find Jobs to browse open posts. Apply from a job card if you are an approved worker."),w,!1,0),new C.ip("job2","How do I post a job?",C.n2("Job Marketplace \u2192 Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval."),w,!1,0)],v),7),new C.i6("refunds","Refunds",B.mz,4293870660,A.a([new C.ip("ref1","Can I get a refund?",C.n2("Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason."),w,!1,0),new C.ip("ref2","How long do refunds take?",C.n2("Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates."),w,!1,0)],v),8),new C.i6("account","Account",B.eT,4281908728,A.a([new C.ip("acc1","How do I update my profile?",C.n2("Open Profile / Settings to edit username, photo, and linked payment details where available."),w,!1,0),new C.ip("acc2","I forgot my password \u2014 what now?",C.n2("Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment."),w,!1,0)],v),9),new C.i6("music","Music Charts",B.lU,4290807036,A.a([new C.ip("mus1","What are Music Charts?",C.n2("Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin."),w,!1,0),new C.ip("mus2","How do I upload music?",C.n2("Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account."),w,!1,0)],v),10),new C.i6("help","Help Center",B.ya,4279080072,A.a([new C.ip("hlp1","Where can I get live help?",C.n2("Browse categories here for instant answers. When AI messages are available, use Chat for personalized help."),w,!1,0),new C.ip("hlp2","How do daily Helper limits work?",C.n2("Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically."),w,!1,0)],v),11)],x.Y)},
ha4(d){var w,v=J.a4(d),u=v.gam(d)
if(u)return C.agJ()
v=v.du(d,new C.c9a(),x.i)
w=A.C(v,v.$ti.k("ak.E"))
B.d.b0(w,new C.c9b())
return w.length===0?C.agJ():w},
ha5(d){var w=J.b6(d,new C.c9c(),x.P)
w=A.C(w,w.$ti.k("ak.E"))
return A.F(["categories",w,"savedAt",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.z)},
apA(d){return C.hEw(d)},
hEw(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q,p
var $async$apA=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.az(),$async$apA)
case 6:s=f
w=7
return A.b(s.ar("String","ngmy_helper_kb_v1",B.S.ao(C.ha5(d),null)),$async$apA)
case 7:u=1
w=5
break
case 3:u=2
p=t.pop()
r=A.aa(p)
$.am.$1("[helper kb] local save: "+A.t(r))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$apA,v)},
c99(){var w=0,v=A.j(x.I),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$c99=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$c99)
case 7:r=e
q=A.aU(J.q(r.a,"ngmy_helper_kb_v1"))
if(q==null||B.a.i(q).length===0){l=C.agJ()
u=l
w=1
break}p=B.S.aI(0,q,null)
if(!x.f.b(p)){l=C.agJ()
u=l
w=1
break}o=J.q(p,"categories")
if(!x.j.b(o)){l=C.agJ()
u=l
w=1
break}n=C.ha4(o)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
m=A.aa(j)
$.am.$1("[helper kb] local load: "+A.t(m))
l=C.agJ()
u=l
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$c99,v)},
aZY(){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$aZY=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c3(),$async$aZY)
case 7:if(!e){u=null
w=1
break}w=8
return A.b(A.f5("ngmy_helper_kb",null,!1,B.bI),$async$aZY)
case 8:q=e
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.aa(o)
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
return A.i($async$aZY,v)},
aZZ(d){return C.hEx(d)},
hEx(d){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aZZ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.c3(),$async$aZZ)
case 7:if(!f){u=!1
w=1
break}w=8
return A.b(A.hG("ngmy_helper_kb",d,!1,!1,B.cH,null),$async$aZZ)
case 8:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.aa(o)
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
return A.i($async$aZZ,v)},
apB(){var w=0,v=A.j(x.I),u,t,s,r
var $async$apB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c99(),$async$apB)
case 3:s=e
w=4
return A.b(C.aZY(),$async$apB)
case 4:r=e
w=r!=null&&x.j.b(J.q(r,"categories"))?5:6
break
case 5:t=C.ha4(x.j.a(J.q(r,"categories")))
w=t.length!==0?7:8
break
case 7:w=9
return A.b(C.apA(t),$async$apB)
case 9:u=t
w=1
break
case 8:case 6:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apB,v)},
c9d(d){var w=0,v=A.j(x.y),u
var $async$c9d=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.apA(d),$async$c9d)
case 3:u=C.aZZ(C.ha5(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c9d,v)},
lA:function lA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ip:function ip(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c98:function c98(){},
c97:function c97(){},
i6:function i6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c96:function c96(){},
c95:function c95(){},
c9a:function c9a(){},
c9b:function c9b(){},
c9c:function c9c(){},
b8h:function b8h(d){this.a=d},
V2:function V2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aD1:function aD1(d,e,f){var _=this
_.d=$
_.f=_.e=!1
_.r=!0
_.w=d
_.x=e
_.y=f
_.c=_.a=null},
dZp:function dZp(){},
dZq:function dZq(){},
dZj:function dZj(d){this.a=d},
dZk:function dZk(d){this.a=d},
dZ2:function dZ2(d,e){this.a=d
this.b=e},
dZ3:function dZ3(d){this.a=d},
dZ4:function dZ4(d,e,f){this.a=d
this.b=e
this.c=f},
dZ1:function dZ1(d){this.a=d},
dZg:function dZg(d,e){this.a=d
this.b=e},
dZh:function dZh(d,e){this.a=d
this.b=e},
dZi:function dZi(d){this.a=d},
dZa:function dZa(d){this.a=d},
dZb:function dZb(d,e,f){this.a=d
this.b=e
this.c=f},
dZ9:function dZ9(d,e){this.a=d
this.b=e},
dZf:function dZf(d,e,f){this.a=d
this.b=e
this.c=f},
dZe:function dZe(d,e){this.a=d
this.b=e},
dZd:function dZd(d,e){this.a=d
this.b=e},
dZc:function dZc(d,e,f){this.a=d
this.b=e
this.c=f},
dZ6:function dZ6(d){this.a=d},
dZ5:function dZ5(d){this.a=d},
dZ7:function dZ7(d,e){this.a=d
this.b=e},
dZ8:function dZ8(d){this.a=d},
dZo:function dZo(d,e){this.a=d
this.b=e},
dZn:function dZn(d,e){this.a=d
this.b=e},
dZm:function dZm(){},
dZl:function dZl(d,e){this.a=d
this.b=e},
Pf:function Pf(d,e){this.c=d
this.a=e},
ba7:function ba7(){var _=this
_.f=_.e=_.d=$
_.c=_.a=null},
cL1:function cL1(d){this.a=d},
cL0:function cL0(d,e){this.a=d
this.b=e},
cKZ:function cKZ(d,e){this.a=d
this.b=e},
cL2:function cL2(d){this.a=d},
cL_:function cL_(d,e){this.a=d
this.b=e},
cKY:function cKY(d,e){this.a=d
this.b=e},
cL3:function cL3(d){this.a=d},
cL4:function cL4(d,e){this.a=d
this.b=e},
a_B:function a_B(d,e,f){this.c=d
this.d=e
this.a=f},
aF_:function aF_(){this.d=$
this.c=this.a=null},
eQu:function eQu(d,e){this.a=d
this.b=e},
eQv:function eQv(d){this.a=d},
eQB:function eQB(){},
eQA:function eQA(d,e){this.a=d
this.b=e},
eQz:function eQz(d,e){this.a=d
this.b=e},
eQw:function eQw(d,e){this.a=d
this.b=e},
eQy:function eQy(d,e,f){this.a=d
this.b=e
this.c=f},
eQx:function eQx(d,e,f){this.a=d
this.b=e
this.c=f},
a_A:function a_A(d,e){this.c=d
this.a=e},
aEZ:function aEZ(){var _=this
_.e=_.d=$
_.f=null
_.r=!1
_.c=_.a=null},
eQq:function eQq(d,e){this.a=d
this.b=e},
eQo:function eQo(d){this.a=d},
eQp:function eQp(d,e){this.a=d
this.b=e},
eQs:function eQs(d,e){this.a=d
this.b=e},
eQt:function eQt(d){this.a=d},
eQr:function eQr(d,e){this.a=d
this.b=e},
hEs(d){var w=new A.M(d,new C.c92(),A.U(d).k("M<1,n>")).aH(0,"\n")
return'You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.\nReturn ONLY valid JSON (no markdown fences) matching this schema:\n{\n  "message": "short confirmation for admin",\n  "categories": [\n    {\n      "title": "Category name",\n      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",\n      "colorValue": 4280391411,\n      "questions": [\n        {\n          "question": "User question text?",\n          "printable": false,\n          "answerBlocks": [\n            {"type": "heading", "content": "Optional title"},\n            {"type": "text", "content": "Clear stored answer paragraph."},\n            {"type": "bullets", "content": "Point one\\nPoint two"},\n            {"type": "link", "label": "Learn more", "url": "https://example.com"}\n          ]\n        }\n      ]\n    }\n  ],\n  "replaceCategoryId": null\n}\n\nRules:\n- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).\n- Each category needs 2-5 strong questions with complete answerBlocks.\n- Use iconKey and colorValue that fit the topic.\n- If admin asks to update one category, set replaceCategoryId to that category id from the list below.\n- If admin asks for a new category, omit replaceCategoryId.\n- Never use AI chat tone in answers \u2014 write definitive help articles.\n\nExisting categories:\n'+(w.length===0?"(none yet)":w)+"\n"},
c93(d,e,f){return C.hEt(d,e,f)},
hEt(b4,b5,b6){var w=0,v=A.j(x.et),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$c93=A.e(function(b8,b9){if(b8===1)return A.f(b9,v)
for(;;)switch(w){case 0:b3=B.a.i(b5)
if(b3.length===0){u=new A.K3([A.a([],x.Y),"Add an AI API key in Admin \u2192 Announcements \u2192 Global Settings first.",null,null])
w=1
break}w=3
return A.b(A.qP(A.n5(b3),C.hEs(b6)+"\n\nAdmin instruction:\n"+b4,B.hB,null,null),$async$c93)
case 3:t=b9
if(t.b!=null){a3=t.b
a3.toString
a3=B.a.i(a3).length===0}else a3=!0
if(a3){a3=t.a
if(a3==null)a3="AI returned no content."
u=new A.K3([A.a([],x.Y),a3,null,null])
w=1
break}try{a3=t.b
a3.toString
s=B.a.i(a3)
if(J.d0(s,"```"))s=B.a.eg(J.h3Y(s,A.af("^```(?:json)?\\s*",!0,!1,!1,!1),""),A.af("\\s*```$",!0,!1,!1,!1),"")
r=B.S.aI(0,s,null)
a3=x.f
if(!a3.b(r)){a3=A.a([],x.Y)
u=new A.K3([a3,"AI response was not valid JSON.",null,null])
w=1
break}a4=x.N
a5=x.z
q=A.a2(r,a4,a5)
a6=J.q(q,"message")
p=a6==null?null:J.k(a6)
a6=J.q(q,"replaceCategoryId")
o=a6==null?null:J.k(a6)
n=J.q(q,"categories")
a6=x.j
if(!a6.b(n)||J.cn(n)){a3=A.a([],x.Y)
u=new A.K3([a3,"AI did not return any categories.",p,o])
w=1
break}m=A.a([],x.Y)
l=b6.length
for(k=0,a7=x.v,a8=x.a;k<J.ad(n);++k){j=A.a2(a3.a(J.q(n,k)),a4,a5)
i="cat_ai_"+1000*Date.now()+"_"+A.t(k)
h=J.q(j,"questions")
g=A.a([],a7)
if(a6.b(h))for(f=0;f<J.ad(h);++f){e=A.a2(a3.a(J.q(h,f)),a4,a5)
d=J.q(e,"answerBlocks")
a0=A.a([],a8)
if(a6.b(d))for(a9=J.aV(d);a9.C();){a1=a9.gR(a9)
J.ci(a0,C.ha3(A.a2(a3.a(a1),a4,a5)))}if(J.ad(a0)===0){a9=J.q(e,"answer")
J.ci(a0,new C.lA("text",J.k(a9==null?"Answer pending.":a9),null,null))}a9=Date.now()
b0=A.t(f)
b1=J.q(e,"question")
J.ci(g,new C.ip("q_ai_"+1000*a9+"_"+b0,J.k(b1==null?"Question":b1),a0,null,J.A(J.q(e,"printable"),!0),f))}a9=J.q(j,"title")
a9=J.k(a9==null?"New Category":a9)
b0=J.q(j,"iconKey")
b0=C.hEr(J.k(b0==null?"help":b0))
b1=typeof J.q(j,"colorValue")=="number"?B.k.N(A.dR(J.q(j,"colorValue"))):4284773515
J.ci(m,new C.i6(i,a9,b0,b1,g,l+k))}a3=o
a3=(a3==null?null:J.ad(a3)!==0)===!0?o:null
u=new A.K3([m,null,p,a3])
w=1
break}catch(b7){a2=A.aa(b7)
a3=A.t(a2)
a4=A.a([],x.Y)
u=new A.K3([a4,"Could not parse AI JSON: "+a3,null,null])
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c93,v)},
hEr(d){switch(d){case"investments":return G.BK
case"games":return B.oS
case"loans":return B.jI
case"withdrawals":return B.hA
case"deposits":return B.kw
case"civic":return B.l1
case"store":return B.l0
case"jobs":return B.rl
case"refunds":return B.mz
case"account":return B.eT
case"music":return B.lU
default:return B.ya}},
i3R(d,e,f){var w,v,u,t=A.bo(d,!0,x.i)
if(f!=null&&J.ad(e)===1){w=B.d.bg(t,new C.fBx(f))
if(w>=0){t[w]=J.fp(e).cI8(f,t[w].f)
return t}}B.d.v(t,e)
for(v=t.length,u=0;u<v;++u)t[u]=t[u].bbg(u)
return t},
c92:function c92(){},
fBx:function fBx(d){this.a=d},
d1H:function d1H(d){this.a=d},
V3:function V3(d,e,f){this.c=d
this.d=e
this.a=f},
aD3:function aD3(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
e__:function e__(){},
dZG:function dZG(d,e){this.a=d
this.b=e},
dZL:function dZL(d,e){this.a=d
this.b=e},
dZJ:function dZJ(d,e){this.a=d
this.b=e},
dZH:function dZH(d){this.a=d},
dZI:function dZI(d){this.a=d},
dZK:function dZK(d,e,f){this.a=d
this.b=e
this.c=f},
dZC:function dZC(){},
dZD:function dZD(){},
dZE:function dZE(){},
dZF:function dZF(){},
dZQ:function dZQ(d,e){this.a=d
this.b=e},
dZR:function dZR(d){this.a=d},
dZS:function dZS(d){this.a=d},
dZT:function dZT(d){this.a=d},
dZU:function dZU(d){this.a=d},
dZV:function dZV(d){this.a=d},
dZW:function dZW(){},
dZX:function dZX(d){this.a=d},
dZP:function dZP(d){this.a=d},
dZY:function dZY(d){this.a=d},
dZO:function dZO(d){this.a=d},
dZZ:function dZZ(d,e){this.a=d
this.b=e},
dZN:function dZN(d,e){this.a=d
this.b=e},
dZM:function dZM(d,e){this.a=d
this.b=e},
hMj(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.a([],x.eO)
for(w=A.af("\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|__(.+?)__",!0,!1,!1,!1).kY(0,d),w=new A.Jx(w.a,w.b,w.c),v=x.cz,u=e.a,t=0;w.C();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>t){p=B.a.ap(d,t,q)
o=u?B.cr:B.aK
m.push(new A.er(p,n,n,B.cO,n,n,n,n,n,n,new A.H(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}p=r[1]
if(p!=null){o=u?B.cr:B.aK
m.push(new A.er(p,n,n,B.cO,n,n,n,n,n,n,new A.H(!0,o,n,n,n,n,13,B.H,n,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[2]
if(p!=null){o=u?B.cr:B.aK
m.push(new A.er(p,n,n,B.cO,n,n,n,n,n,n,new A.H(!0,o,n,n,n,n,13,n,B.cF,n,n,n,1.4,n,n,n,n,n,n,n,n,n,n,n,n,n)))}else{p=r[3]
if(p!=null){o=u?B.cr:B.aK
m.push(new A.er(p,n,n,B.cO,n,n,n,n,n,n,new A.H(!0,o,n,n,n,n,13,n,n,n,n,n,1.4,n,n,n,n,B.mO,n,n,n,n,n,n,n,n)))}}}t=q+r[0].length}if(t<d.length){w=B.a.b3(d,t)
m.push(A.d3(n,n,n,n,n,n,n,n,n,A.l(n,n,u?B.cr:B.aK,n,n,n,n,n,n,n,n,13,n,n,n,n,1.4,!0,n,n,n,n,n,n,n,n),w))}return A.tx(n,n,n,B.eE,n,n,!0,n,A.d3(m,n,n,n,n,n,n,n,n,n,n),B.a4,n,n,B.df,B.c5)},
dg4:function dg4(d){this.a=d},
aAD:function aAD(d,e){this.a=d
this.b=e},
apz:function apz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aD2:function aD2(d){var _=this
_.d=d
_.c=_.a=_.f=_.e=null},
dZz:function dZz(d,e){this.a=d
this.b=e},
dZA:function dZA(d,e){this.a=d
this.b=e},
dZr:function dZr(d){this.a=d},
dZs:function dZs(d){this.a=d},
dZB:function dZB(){},
dZu:function dZu(d,e){this.a=d
this.b=e},
dZt:function dZt(d,e){this.a=d
this.b=e},
dZw:function dZw(){},
dZy:function dZy(){},
dZx:function dZx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZv:function dZv(d,e){this.a=d
this.b=e},
aAB:function aAB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
abw:function abw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aZX:function aZX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c94:function c94(d){this.a=d},
abo:function abo(d,e,f){this.c=d
this.d=e
this.a=f},
cEI:function cEI(d){this.a=d},
cEJ:function cEJ(){},
cEK:function cEK(d){this.a=d},
aAC:function aAC(d,e,f){this.c=d
this.d=e
this.a=f},
bgc:function bgc(){this.c=this.a=this.d=null},
dg5:function dg5(d,e){this.a=d
this.b=e},
dg7:function dg7(d,e){this.a=d
this.b=e},
dg6:function dg6(d){this.a=d},
hG0(d){var w
switch(d.a){case 0:w="ABAB"
break
case 1:w="AAA \xb7 BBB"
break
case 2:w="AABB"
break
default:w=null}return w},
hG1(d){var w
switch(d.a){case 0:w="1\u21943 \xb7 2\u21944"
break
case 1:w="3 lines \xb7 3 lines"
break
case 2:w="2 + 2"
break
default:w=null}return w},
hG_(d){var w
switch(d.a){case 0:w="ABAB rhyme: line 1 rhymes with line 3; line 2 rhymes with line 4 \u2014 every verse."
break
case 1:w="AAA BBB rhyme: first three lines share one rhyme; next three share a different rhyme."
break
case 2:w="AABB rhyme: lines 1\u20132 rhyme; lines 3\u20134 rhyme."
break
default:w=null}return w},
hig(d){var w
if(new A.a_(A.a(d.split("\n"),x.s),new C.fi5(),x.cc).gM(0)<3)w=d.length>100&&B.a.t(d,"\n")
else w=!0
return w},
i5_(d,e,f,g,h,i,j,k){var w,v,u,t,s
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
return"You are NGMY Music AI \u2014 elite songwriter for Swahili, English, and MIX twist tracks.\n"+w+"\n"+C.hG_(i)+"\nVOICE / TOPIC MODE: Artist may speak or type a raw idea, one line, or a question \u2014 treat it as the song seed and deliver polished, rhyming lyrics.\n"+v+t+s+u+"Label sections: [Verse 1], [Chorus], etc. Strong rhythm. No explaining rules \u2014 only lyrics.\n"},
aqm:function aqm(d,e){this.a=d
this.b=e},
Iy:function Iy(d,e){this.a=d
this.b=e},
rr:function rr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fi5:function fi5(){},
apC:function apC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aD4:function aD4(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=!1
_.x=g
_.y=h
_.Q=_.z=null
_.as=$
_.bt$=i
_.a9$=j
_.c=_.a=null},
e_d:function e_d(d,e){this.a=d
this.b=e},
e_4:function e_4(d){this.a=d},
e_6:function e_6(){},
e_7:function e_7(d,e){this.a=d
this.b=e},
e_8:function e_8(d){this.a=d},
e_9:function e_9(){},
e_a:function e_a(d,e){this.a=d
this.b=e},
e_b:function e_b(d){this.a=d},
e_c:function e_c(d){this.a=d},
e_5:function e_5(d,e){this.a=d
this.b=e},
e_k:function e_k(d,e){this.a=d
this.b=e},
e_h:function e_h(){},
e_i:function e_i(d,e){this.a=d
this.b=e},
e_j:function e_j(d,e){this.a=d
this.b=e},
e_g:function e_g(d,e){this.a=d
this.b=e},
e_f:function e_f(d,e){this.a=d
this.b=e},
e_m:function e_m(d){this.a=d},
e_l:function e_l(d){this.a=d},
e_3:function e_3(d,e){this.a=d
this.b=e},
e_2:function e_2(d,e){this.a=d
this.b=e},
e_n:function e_n(d,e){this.a=d
this.b=e},
e_e:function e_e(d,e){this.a=d
this.b=e},
e_0:function e_0(d){this.a=d},
e_1:function e_1(d){this.a=d},
aLa:function aLa(){},
c9f(d){var w=0,v=A.j(x.gp),u,t,s,r,q,p,o,n,m
var $async$c9f=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=D.Rv
w=1
break}w=3
return A.b(A.az(),$async$c9f)
case 3:r=f
q=B.a.i(d.toLowerCase())
t=A.aU(J.q(r.a,"ngmy_helper_permissions_v1_"+q))
if(t==null||t.length===0){u=D.Rv
w=1
break}try{q=A.a2(x.f.a(B.S.aI(0,t,null)),x.N,x.z)
p=J.A(q.h(0,"contacts"),!0)
o=J.A(q.h(0,"calendar"),!0)
n=J.A(q.h(0,"calls"),!0)
q=J.A(q.h(0,"allGrantedOnce"),!0)
u=new C.V4(p,o,n,q)
w=1
break}catch(l){s=A.aa(l)
$.am.$1("[helper-perms] load: "+A.t(s))
u=D.Rv
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$c9f,v)},
apD(d,e){var w=0,v=A.j(x.H),u
var $async$apD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){w=1
break}w=4
return A.b(A.az(),$async$apD)
case 4:w=3
return A.b(g.ar("String","ngmy_helper_permissions_v1_"+B.a.i(d.toLowerCase()),B.S.ao(e.ag(),null)),$async$apD)
case 3:case 1:return A.h(u,v)}})
return A.i($async$apD,v)},
c9e(d){var w=0,v=A.j(x.gp),u,t
var $async$c9e=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=new C.V4(!0,!0,!0,!0)
w=3
return A.b(C.apD(d,t),$async$c9e)
case 3:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c9e,v)},
ho7(d){var w=B.a.i(d.toLowerCase()),v=A.af("\\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\\b",!0,!1,!1,!1)
if(v.b.test(w)){v=A.af("\\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\\b",!0,!1,!1,!1)
v=v.b.test(w)}else v=!1
if(v)return!0
v=A.af("\\ballow access\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
v=A.af("\\bconnect my (phone|contacts|calendar)\\b",!0,!1,!1,!1)
if(v.b.test(w))return!0
return!1},
ho5(d){var w=A.af("\\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\\b|\\b(calendar|schedule).{0,20}(right now|today|this week)\\b",!0,!1,!1,!1)
return w.b.test(d.toLowerCase())},
V4:function V4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bD0(d,e,f,g,h){var w=0,v=A.j(x.H),u,t,s
var $async$bD0=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:if(g!==3||e<=0){w=1
break}w=3
return A.b(C.aZT(h),$async$bD0)
case 3:if(j){w=1
break}w=4
return A.b(C.apv(h),$async$bD0)
case 4:if(d.e==null){w=1
break}t=A.qw(d,!0)
t.toString
s=A.dj()
s.b=A.oj(new C.fNE(g,e,f,s),!1,!1)
t.lR(0,s.bi())
case 1:return A.h(u,v)}})
return A.i($async$bD0,v)},
fNE:function fNE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fND:function fND(d){this.a=d},
Zk:function Zk(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aA2:function aA2(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.cO$=d
_.b2$=e
_.c=_.a=null},
ddp:function ddp(d){this.a=d},
ddq:function ddq(d,e,f){this.a=d
this.b=e
this.c=f},
ddv:function ddv(){},
ddu:function ddu(d){this.a=d},
ddr:function ddr(d){this.a=d},
dds:function dds(){},
ddt:function ddt(d){this.a=d},
aK3:function aK3(){},
hFs(d){var w=B.a.i(d),v=A.af("[^A-Z0-9]",!0,!1,!1,!1),u=A.aK(w.toUpperCase(),v,"")
w=u.length
if(w<5||w>6)return null
return u},
hFr(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
aq8(d){return C.hFp(d)},
hFp(d){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o
var $async$aq8=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.f5("ngmy_local_deposit_qr_v1_"+B.a.i(d),null,!1,B.bI),$async$aq8)
case 7:q=f
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.aa(o)
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
return A.i($async$aq8,v)},
b_O(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$b_O=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=C.hFs(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.f5("ngmy_local_deposit_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bI),$async$b_O)
case 7:r=f
if(r==null){u=null
w=1
break}if(J.A(J.q(r,"redeemed"),!0)){u=null
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
q=A.aa(m)
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
return A.i($async$b_O,v)},
hat(d){var w,v=B.a.i(d)
if(B.a.a0(v,"NGMYLOCALDEP1|")){w=B.a.i(B.a.b3(v,14))
return w.length===0?null:w}return null},
hFq(d,e,f){var w=B.a.i(f)
if(w.length===0)return!1
return B.d.b4(e,new C.cb2(B.a.i(d.toLowerCase()),w))},
hau(d,e,f,g,h){var w,v,u=J.a4(g),t=u.h(g,"lockedToEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
u=u.h(g,"requiredVerificationCode")
w=B.a.i(J.k(u==null?"":u))
if(s.length===0||w.length===0)return new C.pP(!1,0,y.u)
if(s!==B.a.i(f.toLowerCase()))return new C.pP(!1,0,y.j)
v=B.a.i(h)
if(v.length===0)return new C.pP(!1,0,"Enter the verification code from your deposit request.")
if(v!==w)return new C.pP(!1,0,"Verification code does not match this deposit.")
if(!C.hFq(e,d,w))return new C.pP(!1,0,"That verification code is not on your pending local deposit. Submit a deposit request first.")
return null},
fV_(d,e){var w,v,u="amount",t=J.a4(d),s=t.h(d,"redeemedBy")
if(B.a.i(J.k(s==null?"":s)).length!==0)return D.dCE
s=t.h(d,"lockedToEmail")
w=B.a.i(J.k(s==null?"":s).toLowerCase())
s=t.h(d,"requiredVerificationCode")
v=B.a.i(J.k(s==null?"":s))
if(w.length===0||v.length===0){A.aJ(t.h(d,u))
return new C.Nz(!0,!1,!1,!0)}if(w!==B.a.i(e.toLowerCase())){A.aJ(t.h(d,u))
return new C.Nz(!0,!1,!0,!1)}A.aJ(t.h(d,u))
return new C.Nz(!0,!1,!1,!1)},
cb8(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$cb8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=C.hat(d)
if(s==null){u=D.Rx
w=1
break}w=3
return A.b(C.aq8(s),$async$cb8)
case 3:t=g
if(t==null){u=D.Rx
w=1
break}u=C.fV_(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cb8,v)},
b_Q(d,e){var w=0,v=A.j(x.J),u,t,s
var $async$b_Q=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.b_O(d),$async$b_Q)
case 3:s=g
if(s==null||s.length===0){u=D.Rx
w=1
break}w=4
return A.b(C.aq8(s),$async$b_Q)
case 4:t=g
if(t==null){u=D.Rx
w=1
break}u=C.fV_(t,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_Q,v)},
cb9(d,e,f,g,h){var w=0,v=A.j(x.D),u,t
var $async$cb9=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.b_O(d),$async$cb9)
case 3:t=j
if(t==null||t.length===0){u=new C.pP(!1,0,"That deposit code is invalid or already used.")
w=1
break}u=C.Vp(e,f,"NGMYLOCALDEP1|"+t,g,h)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cb9,v)},
Vp(d,e,f,g,h){return C.hFt(d,e,f,g,h)},
hFt(a2,a3,a4,a5,a6){var w=0,v=A.j(x.D),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Vp=A.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:a0=C.hat(a4)
if(a0==null){u=new C.pP(!1,0,"Invalid deposit QR.")
w=1
break}w=3
return A.b(C.aq8(a0),$async$Vp)
case 3:k=a8
if(k==null){u=new C.pP(!1,0,y.m)
w=1
break}j=C.fV_(k,a5)
if(j.b){u=new C.pP(!1,0,"This deposit code was already used.")
w=1
break}if(j.d){u=new C.pP(!1,0,y.u)
w=1
break}if(j.c){u=new C.pP(!1,0,y.j)
w=1
break}i=C.hau(a2,a3,a5,k,a6)
if(i!=null){u=i
w=1
break}h=A.aJ(J.q(k,"amount"))
if(h==null)h=0
if(h<=0){u=new C.pP(!1,0,"Invalid deposit amount.")
w=1
break}r=new A.S(Date.now(),0,!1).a7().ac()
q=B.a.i(a5.toLowerCase())
t=5
w=8
return A.b(A.f5("ngmy_local_deposit_qr_v1_"+B.a.i(a0),null,!1,B.bI),$async$Vp)
case 8:p=a8
if(p==null){u=new C.pP(!1,0,"Could not apply deposit. Try again.")
w=1
break}g=J.q(p,"redeemedBy")
if(B.a.i(J.k(g==null?"":g)).length!==0){u=new C.pP(!1,0,"This deposit code was already used.")
w=1
break}o=C.hau(a2,a3,a5,p,a6)
if(o!=null){u=o
w=1
break}g=B.a.i(a0)
f=x.N
e=x.z
n=A.dO(p,f,e)
J.aG(n,"redeemedBy",q)
J.aG(n,"redeemedAt",r)
w=9
return A.b(A.hG("ngmy_local_deposit_qr_v1_"+g,n,!1,!1,B.cH,null),$async$Vp)
case 9:n=J.q(p,"shortCode")
m=B.a.i(J.k(n==null?"":n))
w=J.ad(m)!==0?10:11
break
case 10:w=12
return A.b(A.hG("ngmy_local_deposit_code_v1_"+B.a.i(m).toUpperCase(),A.F(["token",a0,"redeemed",!0,"redeemedAt",r],f,e),!1,!1,B.cH,null),$async$Vp)
case 12:case 11:t=2
w=7
break
case 5:t=4
a1=s.pop()
l=A.aa(a1)
$.am.$1("[local deposit qr] redeem: "+A.t(l))
u=new C.pP(!1,0,"Could not apply deposit. Check connection and try again.")
w=1
break
w=7
break
case 4:w=2
break
case 7:u=new C.pP(!0,h,null)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Vp,v)},
Nz:function Nz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
pP:function pP(d,e,f){this.a=d
this.b=e
this.c=f},
cb2:function cb2(d,e){this.a=d
this.b=e},
cbg(d,e){var w
A.h08(d,e,!1)
A.qO(d.a,d.d,!0,!1)
w=B.a.i("")
if(w.length!==0)A.AJ(!0,!1,d.d,w)},
a7p(d,e){if(d==null)return!1
return A.bA(d)===e.gcg()&&A.bH(d)===e.gcd()&&A.bR(d)===e.gct()},
hFB(d){var w=A.dk(d)*60+A.h0(d)
if(w<10)return 0
if(w>=30)return 30
return 15},
haB(d){if(A.dk(d)>=12)return!1
if(A.my(d)===6||A.my(d)===7)return!1
return!0},
cbk(d){var w=d.c?d.bT():d
return w.cY(A.c1(A.bA(w),A.bH(w),A.bR(w),12,0,0,0,0))},
fV3(d,e){var w,v,u,t=d.gCi()
if(t<=0)return 0
if(!d.f||d.r==null){if(C.a7p(d.fx,e)&&d.fy>0.0001)return B.k.D(d.fy,0,t)
return 0}w=d.r
if(w.c)w=w.bT()
if(!C.cbk(w))return 0
v=A.c1(e.gcg(),e.gcd(),e.gct(),12,0,0,0,0)
if(!e.cY(v))return t
if(!e.cb(w))return 0
u=B.o.an(v.bE(w).a,1000)
if(u<=0)return t
return B.k.D(t*(B.o.D(B.o.an(e.bE(w).a,1000),0,u)/u),0,t)},
fV2(d,e){var w,v,u,t,s,r,q,p=new A.S(Date.now(),0,!1),o=d.f
if(o){w=d.r
w=w!=null&&!C.a7p(w,p)}else w=!1
v=!1
if(w){u=d.r
t=u.c?u.bT():u
s="local_clockin_payout_"+d.a+"_"+u.a
if(!B.d.b4(e,new C.cbf(s))&&C.cbk(t)){r=d.gCi()
v=r>0
if(v){q=new A.d4(s,d.a,r,B.fH,B.fh,"Clock-in daily earnings (local)",null,null,B.cq,p)
C.cbg(d,q)
d.e+=r
o=d.x
if(o!=null){o.e+=r;++o.f}e.push(q)
d.fx=t
d.fy=r}}o=d.f=!1
d.r=null
d.rx=0}w=d.fx
if(w!=null&&!C.a7p(w,p))d.fy=0
if(o){o=d.r
o=o!=null&&C.a7p(o,p)&&!C.cbk(o)}else o=!1
if(o){d.f=!1
d.r=null
d.rx=0}return v},
cbf:function cbf(d){this.a=d},
hUd(d){var w,v,u=d.k4,t=u==null?null:B.a.i(u)
if(t!=null&&t.length!==0)return t
w=B.a.i(d.c)
if(w.length!==0&&w.toLowerCase()!=="user")return w
v=B.a.i(d.a)
if(B.a.t(v,"@"))return B.d.gI(v.split("@"))
return"Member"},
iad(d,e,f,g,h,i){return A.hB(d,new C.aq9(f,e,i,g,h,null),!0,null,x.H)},
heS(d){var w,v,u=d.c?d.bT():d,t=A.dk(u)
if(t===0)w=12
else w=t>12?t-12:t
v=t>=12?"PM":"AM"
return""+A.bH(u)+"/"+A.bR(u)+"/"+A.bA(u)+" \xb7 "+w+":"+B.a.aU(B.o.u(A.h0(u)),2,"0")+" "+v},
hm0(d){var w=d.x
if(w===B.dt)return"Processing"
if(w===B.kh)return"Declined"
switch(d.d.a){case 0:return"Completed"
case 1:return"Sent"
case 2:case 4:case 6:return"Received"
case 3:case 5:return"Successful"}},
i1t(d){var w=d.f,v=B.a.i(w==null?"":w),u=v.toLowerCase()
if(B.a.t(u,"clock-in daily earnings")||B.a.t(u,"clock-in earnings"))return"Clock-in completed"
if(B.a.t(u,"crown daily reward"))return"Crown daily reward"
w=d.d
if(w===B.ft)return"Deposit"
if(w===B.eO)return"Withdrawal"
return v.length!==0?v:w.b},
hTT(d){var w=d.d,v=w===B.ft||w===B.or||w===B.fH||w===B.ki,u=d.x
if(u===B.dt)return w===B.eO?-d.c:0
if(u!==B.cq)return 0
w=d.c
return v?w:-w},
i21(d,e){var w,v,u,t,s,r,q=A.C(d,x.o)
B.d.b0(q,new C.fxx())
w=A.T(x.N,x.ee)
v=e<0?0:e
for(u=q.length,t=0;t<q.length;q.length===u||(0,A.K)(q),++t,v=r){s=q[t]
r=v-C.hTT(s)
if(r<0)r=0
w.n(0,s.a,new A.bnC(v,r))}return w},
aq9:function aq9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDr:function aDr(d,e){var _=this
_.d=null
_.e=d
_.f=0
_.r=null
_.w=e
_.x=!1
_.y=0
_.z=!1
_.c=_.a=_.at=_.as=_.Q=null},
ed6:function ed6(d){this.a=d},
edN:function edN(d){this.a=d},
edO:function edO(d){this.a=d},
edP:function edP(d){this.a=d},
edv:function edv(d,e){this.a=d
this.b=e},
edw:function edw(){},
edx:function edx(d){this.a=d},
edy:function edy(){},
edz:function edz(d){this.a=d},
edA:function edA(d,e,f){this.a=d
this.b=e
this.c=f},
edB:function edB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edq:function edq(d,e){this.a=d
this.b=e},
ed7:function ed7(d,e,f){this.a=d
this.b=e
this.c=f},
edr:function edr(){},
eds:function eds(){},
edt:function edt(d){this.a=d},
edu:function edu(){},
edb:function edb(d,e){this.a=d
this.b=e},
edc:function edc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edk:function edk(){},
edh:function edh(d){this.a=d},
edi:function edi(d,e){this.a=d
this.b=e},
edj:function edj(d,e){this.a=d
this.b=e},
edl:function edl(d){this.a=d},
edm:function edm(d,e,f){this.a=d
this.b=e
this.c=f},
edn:function edn(d){this.a=d},
edp:function edp(d){this.a=d},
edo:function edo(d){this.a=d},
edd:function edd(d){this.a=d},
ede:function ede(d,e,f){this.a=d
this.b=e
this.c=f},
edF:function edF(){},
edG:function edG(){},
edK:function edK(d){this.a=d},
edD:function edD(d){this.a=d},
edL:function edL(d){this.a=d},
edC:function edC(d){this.a=d},
edM:function edM(d){this.a=d},
edH:function edH(d){this.a=d},
edI:function edI(d){this.a=d},
edJ:function edJ(d){this.a=d},
edE:function edE(d){this.a=d},
eda:function eda(d){this.a=d},
ed9:function ed9(d){this.a=d},
ed8:function ed8(d){this.a=d},
edg:function edg(d,e){this.a=d
this.b=e},
edf:function edf(d,e){this.a=d
this.b=e},
aAP:function aAP(d,e,f,g,h,i,j,k,l,m){var _=this
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
dhT:function dhT(){},
dhU:function dhU(){},
dhV:function dhV(d,e,f){this.a=d
this.b=e
this.c=f},
dhS:function dhS(d){this.a=d},
dhW:function dhW(d,e){this.a=d
this.b=e},
dhR:function dhR(d){this.a=d},
aAO:function aAO(d,e,f,g,h,i,j,k,l,m){var _=this
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
bgV:function bgV(d,e){var _=this
_.f=_.e=_.d=$
_.cO$=d
_.b2$=e
_.c=_.a=null},
dhM:function dhM(d){this.a=d},
dhN:function dhN(d){this.a=d},
dhO:function dhO(d){this.a=d},
dhP:function dhP(){},
dhQ:function dhQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dhL:function dhL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dhK:function dhK(d){this.a=d},
baE:function baE(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
baD:function baD(d,e,f){this.b=d
this.d=e
this.a=f},
baC:function baC(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aAQ:function aAQ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aAR:function aAR(d,e){var _=this
_.d=d
_.e=e
_.f=0
_.r=80
_.c=_.a=null},
dic:function dic(){},
did:function did(){},
die:function die(){},
dhZ:function dhZ(d){this.a=d},
dhY:function dhY(d,e){this.a=d
this.b=e},
dhX:function dhX(d,e){this.a=d
this.b=e},
di9:function di9(d,e){this.a=d
this.b=e},
dib:function dib(d,e){this.a=d
this.b=e},
dia:function dia(d,e){this.a=d
this.b=e},
di8:function di8(){},
di7:function di7(d){this.a=d},
di6:function di6(){},
di1:function di1(d){this.a=d},
di2:function di2(){},
di3:function di3(d){this.a=d},
di4:function di4(d){this.a=d},
di0:function di0(){},
di5:function di5(d){this.a=d},
di_:function di_(d){this.a=d},
ba2:function ba2(d){this.a=d},
fxx:function fxx(){},
buF:function buF(d,e){this.b=d
this.a=e},
aKj:function aKj(){},
bwB:function bwB(){},
hZ2(d,e,f,g,h,i,j,k){var w,v=B.a.i(j.toLowerCase())
B.d.bq(d,new C.fqM(v,g))
w=A.T(x.N,x.z)
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
B.d.L(d,w)},
aOo(d){var w,v=J.a4(d),u=A.aJ(v.h(d,"matchesTotal")),t=u==null?null:B.k.N(u)
if(t==null)t=1
v=A.aJ(v.h(d,"matchesPlayed"))
w=v==null?null:B.k.N(v)
return B.o.D(t-(w==null?0:w),0,t)},
i8W(d,e){var w=A.U(e).k("a_<1>")
w=A.C(new A.a_(e,new C.fHY(B.a.i(d.toLowerCase())),w),w.k("J.E"))
return w},
agX(d){var w,v,u,t
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
if(C.aOo(u)<=0){t=J.cF(u)
t.n(u,"status","finished")
t.n(u,"seriesStatus","complete")}}},
i0I(d,e){var w,v,u,t=J.a4(d),s=t.h(d,"status")
if(!J.A(s==null?"":s,"active"))return!1
s=t.h(d,"seriesStatus")
if(J.A(s==null?"":s,"complete"))return!1
if(C.aOo(d)<=0)return!1
w=B.a.i(e.toLowerCase())
s=t.h(d,"fromEmail")
v=B.a.i(J.k(s==null?"":s).toLowerCase())
t=t.h(d,"toEmail")
u=B.a.i(J.k(t==null?"":t).toLowerCase())
if(v!==w&&u!==w)return!1
return C.aOo(d)>0},
i0H(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=J.a4(d),h=A.aJ(i.h(d,"matchesTotal")),g=h==null?null:B.k.N(h)
if(g==null)g=1
h=A.aJ(i.h(d,"matchesPlayed"))
w=h==null?null:B.k.N(h)
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
k=J.A(o.h(0,u),!0)
j=l!=null&&J.A(o.h(0,l),!0)
if(k&&!j)return"Game "+v+" of "+g+" \u2014 waiting for opponent to join the room"
i=!k
if(i&&j)return"Game "+v+" of "+g+" \u2014 your opponent is in the room. Join now"
if(i&&!j)return"Game "+v+" of "+g+" \u2014 both players tap Join room to start"
return"Game "+v+" of "+g+" \u2014 match in progress"},
hZ1(d,e){var w
C.agX(e)
w=A.U(e).k("a_<1>")
w=A.C(new A.a_(e,new C.fqL(B.a.i(d.toLowerCase())),w),w.k("J.E"))
return w},
tX(d,e){var w,v,u
for(w=J.aV(d);w.C();){v=w.gR(w)
u=J.q(v,"id")
if(J.k(u==null?"":u)===e)return v}return null},
hVx(d,e,f){var w,v,u,t="fromName",s=J.a4(f),r=s.h(f,"fromEmail"),q=B.a.i(J.k(r==null?"":r).toLowerCase())
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
h_Q(d,e,f){var w,v,u,t,s=B.a.i(e.toLowerCase()),r=J.a4(d),q=r.h(d,"fromEmail"),p=B.a.i(J.k(q==null?"":q).toLowerCase())
q=r.h(d,"toEmail")
w=B.a.i(J.k(q==null?"":q).toLowerCase())
v=s===p?w:p
u=r.h(d,"sessionState")
r=x.N
q=x.z
t=C.hVx(x.f.b(u)?A.a2(u,r,q):A.T(r,q),v,d)
if((t.length===0||B.a.t(t,"@"))&&f!=null){t=J.q(f,v)
if(t==null)t=""}if(t.length===0||B.a.t(t,"@"))return"Opponent"
return t},
bBP(){var w=0,v=A.j(x.eq),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$bBP=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bBP)
case 7:r=e
q=A.aU(J.q(r.a,"all_users"))
if(q==null||q.length===0){k=x.N
u=A.T(k,k)
w=1
break}p=B.S.aI(0,q,null)
if(!x.j.b(p)){k=x.N
u=A.T(k,k)
w=1
break}k=x.N
o=A.T(k,k)
for(k=J.aV(p),j=x.f;k.C();){n=k.gR(k)
if(!j.b(n))continue
i=J.q(n,"email")
m=B.a.i(J.k(i==null?"":i).toLowerCase())
i=J.q(n,"username")
l=B.a.i(J.k(i==null?"":i))
if(J.ad(m)!==0&&J.ad(l)!==0)J.aG(o,m,l)}u=o
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
return A.i($async$bBP,v)},
bAU(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bAU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:t=C
s=d
r=e
w=3
return A.b(C.bBP(),$async$bAU)
case 3:u=t.h_Q(s,r,g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAU,v)},
KL(d,e,f){var w=0,v=A.j(x.h),u,t,s,r,q,p
var $async$KL=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(d)
p=$.hjw.h(0,q)
if(p!=null){t=new A.S(Date.now(),0,!1).bE(p)
t=t.a>A.dC(0,0,0,f?900:1500,0,0).a}else t=!0
w=t?3:4
break
case 3:$.hjw.n(0,q,new A.S(Date.now(),0,!1))
w=5
return A.b(A.Qy(B.ca,q),$async$KL)
case 5:case 4:s=$.hjv.h(0,q)
if(s==null){u=C.tX(e,q)
w=1
break}r=C.tX(A.bB_(e,A.a([s],x._)),q)
if(r!=null)A.h2c(e,r)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$KL,v)},
i99(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a4(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status",f)
t.n(u,"respondedAt",new A.S(Date.now(),0,!1).ac())
return}}},
hSf(d,e){var w,v,u,t,s,r,q=J.a4(d),p=q.h(d,"gameId"),o=J.k(p==null?"":p)
p=q.h(d,"fromEmail")
w=B.a.i(J.k(p==null?"":p).toLowerCase())
p=q.h(d,"toEmail")
v=B.a.i(J.k(p==null?"":p).toLowerCase())
q=q.h(d,"fromName")
u=J.k(q==null?w:q)
switch(o){case"tic_tac_go":q=x.N
return A.F(["ttt",A.c2(9,"",!1,q),"turnEmail",w,"playerXEmail",w,"playerXName",u,"playerOEmail",v,"playerOName",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],q,x.z)
case"connect_four_pro":t=J.e3(6,x.L)
for(q=x.S,s=0;s<6;++s)t[s]=A.c2(7,0,!1,q)
return A.F(["c4",t,"c4Turn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
case"checkers_deluxe":t=J.e3(8,x.L)
for(q=x.S,r=0;r<8;++r)t[r]=A.im(8,new C.ffE(r),!0,q)
return A.F(["checkers",t,"checkersTurn",1,"player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e,"gameOver",!1,"winnerEmail","","winnerLabel","","isDraw",!1],x.N,x.z)
default:return A.F(["gameOver",!1,"winnerEmail","","winnerLabel","","player1Email",w,"player1Name",u,"player2Email",v,"player2Name",e],x.N,x.z)}},
hZ0(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l="player1Email",k="player2Email"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a4(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"status","active")
t.n(u,"respondedAt",new A.S(Date.now(),0,!1).ac())
r=C.hSf(u,f)
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
t.n(u,"sessionUpdatedAt",new A.S(Date.now(),0,!1).ac())
return}}},
i97(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i="matchesPlayed",h="sessionState"
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a4(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)!==e)continue
w=A.aJ(t.h(u,i))
w=w==null?null:B.k.N(w)
r=(w==null?0:w)+1
t.n(u,i,r)
w=A.aJ(t.h(u,"matchesTotal"))
q=w==null?null:B.k.N(w)
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
t.n(u,h,o)}}t.n(u,"sessionUpdatedAt",new A.S(Date.now(),0,!1).ac())
return}},
h2b(d,e,f){var w,v,u,t,s
for(w=d.length,v=0;v<d.length;d.length===w||(0,A.K)(d),++v){u=d[v]
t=J.a4(u)
s=t.h(u,"id")
if(J.k(s==null?"":s)===e){t.n(u,"sessionState",A.a2(f,x.N,x.z))
t.n(u,"sessionUpdatedAt",new A.S(Date.now(),0,!1).ac())
return}}},
fGI(d){var w=0,v=A.j(x.gw),u,t,s,r,q
var $async$fGI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.agX(d)
t=$.h_8
if(t==null)s=$.h_8=A.Qy(B.ca,null).fh(new C.fGJ())
else s=t
w=3
return A.b(s,$async$fGI)
case 3:r=f
if(r==null){u=A.bo(new A.M(d,new C.fGK(),A.U(d).k("M<1,@>")),!0,x.P)
w=1
break}q=A.bB_(d,r)
B.d.a8(d)
B.d.v(d,q)
u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGI,v)},
agY(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$agY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:C.agX(d)
t=A.U(d).k("M<1,a5<n,@>>")
t=A.C(new A.M(d,new C.fEE(),t),t.k("ak.E"))
w=3
return A.b(A.Qy(t,null),$async$agY)
case 3:s=f
if(s==null){u=!1
w=1
break}r=A.bB_(d,s)
B.d.a8(d)
B.d.v(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agY,v)},
aPh(d,e,f){var w=0,v=A.j(x.y),u,t,s,r
var $async$aPh=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:C.h2b(d,e,f)
t=C.tX(d,e)
if(t==null){u=!1
w=1
break}w=3
return A.b(A.Qy(A.a([A.a2(t,x.N,x.z)],x._),e),$async$aPh)
case 3:s=h
if(s==null){u=!1
w=1
break}r=C.tX(s,e)
if(r!=null)A.h2c(d,r)
u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aPh,v)},
i5I(d,e,f){var w
C.h2b(d,e,f)
w=$.fZW.h(0,e)
if(w!=null)w.a6(0)
$.fZW.n(0,e,A.cM(B.lO,new C.fEF(e,d)))},
fUL(d,e){return new C.aZA(!0,d,"NGMY",B.a.i(e.toLowerCase()),null,!0)},
fqM:function fqM(d,e){this.a=d
this.b=e},
fHY:function fHY(d){this.a=d},
fqL:function fqL(d){this.a=d},
ffE:function ffE(d){this.a=d},
fGJ:function fGJ(){},
fGK:function fGK(){},
fEE:function fEE(){},
fEF:function fEF(d,e){this.a=d
this.b=e},
aZA:function aZA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i},
i9C(d,e,f){return A.bS(B.K,null,new C.fJ5(e,f),d,!0,!0,!0,null,!1,!1,x.H)},
fJ5:function fJ5(d,e){this.a=d
this.b=e},
a_7:function a_7(d,e,f){this.c=d
this.d=e
this.a=f},
aDe:function aDe(d){var _=this
_.d=d
_.e=3
_.f=""
_.c=_.a=null},
e7m:function e7m(d){this.a=d},
e7p:function e7p(d){this.a=d},
e7q:function e7q(d){this.a=d},
e7o:function e7o(d){this.a=d},
e7r:function e7r(d){this.a=d},
e7s:function e7s(d,e){this.a=d
this.b=e},
e7n:function e7n(d,e){this.a=d
this.b=e},
i4e(d){var w,v,u,t=B.a.i(d)
if(t.length===0)return B.il
w=t.toLowerCase()
v=A.af("(add|put|set|create|book|schedule|make).{0,40}(meeting|appointment|event|reminder).{0,40}(calendar|on my (phone )?calendar|iphone calendar)|(meeting|appointment|event).{0,40}(calendar|on my (phone )?calendar)|add.{0,20}to (my )?(phone )?calendar|book (a |an )?(meeting|appointment|event)|schedule (a |an )?(meeting|appointment|event)|put (a |an )?(meeting|appointment|event)",!1,!1,!1,!1)
if(!v.b.test(w))return B.il
v=Date.now()
u=C.hUR(w,new A.S(v,0,!1))
v=x.N
return A.a([new A.kp("calendar",A.F(["title",C.hUQ(t,w),"start",u.ac(),"end",u.bR(36e8).ac(),"notes","Added from NGMY Helper AI"],v,v))],x.Z)},
hUQ(d,e){var w,v,u,t,s,r=A.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(d)
if(r!=null){w=r.b
v=w[1]
w=v==null?w[2]:v
return B.a.i(w==null?"":w)}u=A.af("(?:called|named|titled)\\s+(.+?)(?:\\s+(?:on|at|for|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(u!=null){t=u.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hki(B.a.i(t))}s=A.af("(?:meeting|appointment|event)\\s+(?:for|about)\\s+(.+?)(?:\\s+(?:on|at|tomorrow|today|next)\\b|$)",!1,!1,!1,!1).cF(e)
if(s!=null){t=s.b[1]
if(t==null)t=""
w=t.length
if(w>=3&&w<=80)return C.hki(B.a.i(t))}if(B.a.t(e,"meeting"))return"Meeting"
if(B.a.t(e,"appointment"))return"Appointment"
return"NGMY Event"},
hki(d){var w
if(d.length===0)return d
w=B.a.fF(d,A.af("\\s+",!0,!1,!1,!1))
return new A.M(w,new C.fpW(),A.U(w).k("M<1,n>")).aH(0," ")},
hUR(d,e){var w,v,u,t,s,r,q,p,o=A.c1(A.bA(e),A.bH(e),A.bR(e),0,0,0,0,0)
if(B.a.t(d,"tomorrow"))o=o.bR(864e8)
else if(!B.a.t(d,"today"))for(w=D.aDX.gdO(D.aDX),w=w.gae(w);w.C();){v=w.gR(w)
u=v.a
if(A.cS(d,u,0)){t=C.hTS(o,v.b)
o=t
break}}s=A.af("\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(d)
if(s!=null){w=s.b
v=w[1]
r=A.c8(v==null?"":v,null)
if(r==null)r=9
v=w[2]
q=A.c8(v==null?"":v,null)
if(q==null)q=0
w=w[3]
p=w==null?null:w.toLowerCase()
if(p==="pm"&&r<12)r+=12
if(p==="am"&&r===12)r=0
if(p==null&&r>=1&&r<=7)r+=12}else{r=9
q=0}return A.c1(A.bA(o),A.bH(o),A.bR(o),r,q,0,0,0)},
hTS(d,e){var w,v,u,t,s,r=864e8
for(w=d,v=0;v<14;++v){if(A.my(w)===e){u=!0
if(v<=0){t=d.bR(36e8)
s=w.a
if(s>=t.gbr())u=s===t.gbr()&&w.b<t.gcB()}}else u=!1
if(u)return w
w=w.bR(r)}return d.bR(r)},
fpW:function fpW(){},
i4f(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k="whatsapp",j=B.a.i(d)
if(j.length===0)return B.il
w=j.toLowerCase()
if(B.a.t(w,k))v=k
else v=B.a.t(w,"imessage")||B.a.t(w,"i message")?"sms":l
u=A.af("(?:saying|say|message|text|tell(?:ing)?)\\s+(.+)$",!1,!1,!1,!1).cF(j)
if(u!=null){t=u.b[1]
s=t==null?l:B.a.i(t)
if(s==null)s=""
t=A.af("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
s=B.a.i(A.aK(s,t,""))
t=s.length
r=t>=2&&t<500?s:l}else r=l
q=C.hR5(w,j)
if(q==null||q.length===0)return B.il
t=A.af("\\b(call|phone|dial|ring)\\b",!1,!1,!1,!1)
p=t.b.test(w)
t=A.af("\\b(text|message|sms|whatsapp|imessage|send)\\b",!1,!1,!1,!1)
o=t.b.test(w)
if(p&&!o){t=x.N
return A.a([new A.kp("call",A.F(["name",q],t,t))],x.Z)}if(o||v==="whatsapp"){n=v==="whatsapp"?k:"sms"
t=x.N
m=A.F(["name",q],t,t)
if(r!=null)m.n(0,"body",r)
return A.a([new A.kp(n,m)],x.Z)}if(p){t=x.N
return A.a([new A.kp("call",A.F(["name",q],t,t))],x.Z)}return B.il},
hR5(d,e){var w,v,u,t,s,r,q=[A.af("\\b(?:call|text|message|whatsapp|imessage)\\s+(.+?)(?:\\s+(?:on|saying|and|to)\\b|$)",!1,!1,!1,!1),A.af("\\b(?:send (?:a )?message to|text)\\s+(.+?)(?:\\s+(?:on|saying)\\b|$)",!1,!1,!1,!1),A.af("\\bto\\s+([a-z][a-z\\s.'-]{1,40}?)(?:\\s+(?:on|saying|that)\\b|$)",!1,!1,!1,!1)]
for(w=0;w<3;++w){v=q[w].cF(d)
if(v==null)continue
u=v.b[1]
t=u==null?null:B.a.i(u)
if(t==null)t=""
u=A.af("\\s+on\\s+(whatsapp|imessage|messages?)$",!1,!1,!1,!1)
t=B.a.i(A.aK(t,u,""))
u=A.af("\\s+saying\\s+.+$",!1,!1,!1,!1)
t=B.a.i(A.aK(t,u,""))
u=t.length
s=!1
if(u>=2)if(u<=50){u=A.af("^\\d+$",!0,!1,!1,!1)
s=A.af("\\s",!0,!1,!1,!1)
s=A.aK(t,s,"")
u=!u.b.test(s)}else u=s
else u=s
if(u)return C.hYk(t)}r=A.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(e)
if(r!=null){u=r.b
s=u[1]
u=s==null?u[2]:s
return B.a.i(u==null?"":u)}return null},
hYk(d){var w=B.a.fF(d,A.af("\\s+",!0,!1,!1,!1))
return new A.M(w,new C.fpV(),A.U(w).k("M<1,n>")).aH(0," ")},
fpV:function fpV(){},
hoe(d){var w=new A.M(d,new C.fH_(),A.U(d).k("M<1,a5<n,@>>")).c0(0,new C.fH0())
w=A.C(w,w.$ti.k("J.E"))
return w},
fH_:function fH_(){},
fH0:function fH0(){},
i4i(d,e){var w,v,u,t,s,r,q,p,o
if(!e)return B.il
w=B.a.i(d)
if(w.length===0)return B.il
v=w.toLowerCase()
if(!(B.a.t(v,"send email")||B.a.t(v,"send an email")||B.a.t(v,"send a message to")||B.a.t(v,"email ")||B.a.t(v,"write an email")||B.a.t(v,"write email")))return B.il
u=A.af("[\\w.+-]+@[\\w.-]+\\.\\w+",!0,!1,!1,!1).cF(w)
if(u==null)return B.il
t=u.b[0]
t.toString
s=B.a.i(t)
r=A.af("(?:subject|title)\\s*[:\\-]\\s*(.+)$",!1,!1,!1,!1).cF(w)
if(r!=null){t=r.b[1]
t.toString
q=B.a.i(t)}else q="Message from NGMY"
p=A.af("(?:saying|that says|with message|message:|body:|write:|text:)\\s*(.+)$",!1,!1,!1,!1).cF(w)
if(p!=null){t=p.b[1]
t.toString
o=B.a.i(t)}else o=""
t=x.N
t=A.T(t,t)
t.n(0,"to",s)
t.n(0,"subject",q)
if(o.length!==0)t.n(0,"body",o)
return A.a([new A.kp("send_email",t)],x.Z)},
i3r(d,e){var w
if(e)return d
w=J.dH(d,new C.fAV())
w=A.C(w,w.$ti.k("J.E"))
return w},
fAV:function fAV(){},
i5F(d){switch(d){case"blackjack_vegas":return D.dGE
case"roulette_euro":return D.dGo
case"slots_jackpot":return D.dGv
case"poker_texas":return D.dGy
case"chess_royale":return D.dGp
case"connect_four_pro":return D.dGq
case"domino_block":return D.dGs
case"plinko_prizes":return D.dGA
case"spin_wheel":return D.dGx
case"baccarat_punto":return D.dGr
case"craps_table":return D.dGz
case"casino_war":return D.dGt
case"bingo_live":return D.dGw
case"solitaire_klondike":return D.dGD
case"backgammon_pro":return D.dGn
case"billiards_snooker":return D.dGB
case"profit_solve":return D.dGC
default:return D.dGu}},
fEv(d,e){var w,v,u,t,s,r,q,p=null
if(e){w=A.m(8)
v=A.I(B.aM,B.q,1.5)
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.em,6)],x.V)
return A.p(p,A.av(A.X(B.mv,B.c.j(0.5),p,p,p,23.400000000000002),p,p,p),B.f,p,p,new A.o(p,p,v,w,u,D.bWI,B.n),p,74,p,p,p,p,p,52)}t=B.o.D(d,1,13)
s=t===1||t>=10||B.o.E(t,2)===0
r=["\u2660","\u2665","\u2666","\u2663"][B.o.E(t,4)]
q=s?B.bz:B.M
w=A.m(8)
v=A.I(B.aL,B.q,1)
u=A.a([new A.ac(0,B.G,B.w.j(0.28),B.em,6)],x.V)
return A.p(p,A.w(A.a([new A.D(D.bwo,A.d(D.ctM[t-1]+"\n"+r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,11,p,p,B.u,p,1.1,!0,p,p,p,p,p,p,p,p),p,p,p),p),B.b7,A.av(A.d(r,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,19.76,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p),B.b7],x.p),B.F,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(B.hY,p,v,w,u,p,B.n),p,74,p,p,p,p,p,52)},
i6J(d,e){var w,v=null,u=A.m(18),t=A.I(B.aM,B.q,3),s=A.a([new A.ac(0,B.G,B.aE.j(0.5),B.J,20)],x.V),r=A.U(e).k("M<1,hb>")
r=A.C(new A.M(e,new C.fGr(),r),r.k("ak.E"))
w=x.p
return A.w(A.a([A.p(v,A.w(A.a([D.fhP,B.ac,A.B(r,B.m,v,B.b9,B.j,0,v,v)],w),B.m,v,B.e,B.j,0,B.p),B.f,v,v,new A.o(v,v,t,u,s,D.bX3,B.n),v,v,v,v,I.ahO,v,v,v),B.aB,A.dn(B.anF,D.fir,d,A.bn(B.aM,v,v,v,B.dx,v,Ai.YY,v,v,v,v,v))],w),B.m,v,B.e,B.j,0,B.p)},
p3:function p3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bpD:function bpD(d,e){this.b=d
this.a=e},
fGr:function fGr(){},
hGc(){var w,v,u,t,s,r,q,p=x.N,o=x.L,n=J.e3(8,o)
for(w=x.S,v=0;v<8;++v)n[v]=A.c2(8,0,!1,w)
u=A.c2(9,"",!1,p)
t=x.t
s=A.a([],t)
r=A.a([],t)
t=A.a([0,0,0],t)
q=J.e3(6,o)
for(v=0;v<6;++v)q[v]=A.c2(7,0,!1,w)
return new C.aqv(A.T(p,x.z),n,u,s,r,t,q,new A.as(B.as,$.aw()))},
hZI(d,e,f,g,h){var w=new C.frQ(f,h)
switch(d){case"checkers_deluxe":return C.hPJ(h,g,e,w)
case"tic_tac_go":return C.hYw(h,g,e,w)
case"blackjack_vegas":return C.hP8(h,g,e,new C.frK(w))
case"roulette_euro":return C.hWN(h,g,e,new C.frL(w))
case"slots_jackpot":return C.hXD(h,g,e,new C.frM(w))
case"billiards_snooker":return C.hVA(h,g,e,new C.frN(w))
case"connect_four_pro":return C.hQ9(h,g,e,w)
case"profit_solve":return C.hVD(h,g,e,new C.frO(w))
default:return C.hPG(d,h,g,e,new C.frP(w))}},
hPJ(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.wp,B.L,w,w),u=A.m(12),t=A.I(D.WQ,B.q,8),s=A.a([new A.ac(0,B.G,B.w.j(0.4),B.J,16)],x.V)
return A.w(A.a([new A.D(B.eI,v,w),A.E(A.av(new A.fI(1,A.p(w,A.bw(A.m(6),A.ij(!0,w,w,B.y,D.eT4,new C.fcX(d,e,f,g),64,w,B.dS,B.ag,!1),B.aq),B.f,w,w,new A.o(w,w,t,u,s,w,B.n),w,w,w,w,w,w,w,w),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hYw(d,e,f,g){var w=null
return A.w(A.a([new A.D(B.eI,A.d(d.c,w,w,w,w,w,w,D.wp,B.L,w,w),w),A.E(A.av(new A.fI(1,A.cq(new C.fq5(d,e,f,g)),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
hP8(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.wp,B.L,v,v),t=x.p,s=A.a([],t),r=d.CW,q=d.ch
if(r)B.d.v(s,new A.M(q,new C.fcr(),A.U(q).k("M<1,r>")))
else B.d.v(s,A.a([C.fEv(q[0],!1),B.bp,C.fEv(0,!0)],t))
s=A.B(s,B.m,v,B.b9,B.j,0,v,v)
r=A.d("Total: "+d.a31(d.ay),v,v,v,v,v,v,D.fd_,v,v,v)
q=d.ay
w=A.U(q).k("M<1,r>")
q=A.C(new A.M(q,new C.fcs(),w),w.k("ak.E"))
q=A.bW(B.fR,q,B.bq,6,6)
return A.w(A.a([new A.D(B.eI,u,v),D.foG,B.am,s,B.aB,D.fw0,r,B.am,q,B.b7,A.B(A.a([A.E(A.bG(D.fiT,d.CW?v:new C.fct(d,e,f,g),v),1),B.ab,A.E(A.bG(D.fyp,new C.fcu(d,e,f,g),v),1)],t),B.m,v,B.e,B.j,0,v,v)],t),B.m,v,B.e,B.j,0,B.p)},
hWN(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.wp,B.L,w,w),u=d.cx,t=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cz,16)],x.V)
t=A.a([new A.D(B.eI,v,w),A.p(w,A.b3(w,w,w,new C.bpD(u,w),B.av),B.f,w,w,new A.o(w,w,w,w,t,w,B.a6),w,160,w,w,w,w,w,160)],x.p)
v=d.cx
if(v!=null)t.push(new A.D(B.jG,A.d("Result: "+A.t(v),w,w,w,w,w,w,D.f16,w,w,w),w))
t.push(B.ac)
t.push(A.bW(B.fR,A.im(6,new C.fne(d,e,f,g),!0,x.l),B.bq,6,6))
return A.w(t,B.m,w,B.e,B.j,0,B.p)},
hXD(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.wp,B.L,w,w),u=d.db,t=A.U(u).k("M<1,n>")
u=A.C(new A.M(u,new C.fp9(),t),t.k("ak.E"))
return A.w(A.a([new A.D(B.eI,v,w),C.i6J(new C.fpa(d,e,f,g),u)],x.p),B.m,w,B.e,B.j,0,B.p)},
hVA(d,e,f,g){var w=null,v=A.d(d.c,w,w,w,w,w,w,D.wp,B.L,w,w),u=A.m(20),t=A.I(B.fz,B.q,12),s=x.V,r=A.a([new A.ac(0,B.G,B.w.j(0.45),B.dn,18)],s),q=x.p
return A.w(A.a([new A.D(B.eI,v,w),A.E(A.p(w,new A.an(B.W,w,B.aa,B.r,A.a([A.ao(w,A.p(w,w,B.f,w,w,D.b_c,w,18,w,w,w,w,w,18),w,w,24,w,24,w),A.ao(28,A.p(w,w,B.f,w,w,B.aaY,w,14,w,w,w,w,w,14),w,w,w,32,w,w),A.av(A.eH(B.A,d.dx,A.p(w,w,B.f,w,w,new A.o(B.aM,w,w,A.m(2),A.a([new A.ac(0,B.G,B.w.j(0.3),B.J,4)],s),w,B.n),w,4,w,w,w,w,w,120),w),w,w,w)],q),w),B.f,w,w,new A.o(w,w,t,u,r,D.efD,B.n),w,w,w,B.eS,w,w,w,w),1),A.kY(B.bi,w,w,1,0,new C.flZ(d,f),d.dy),A.bG(D.fnH,new C.fm_(d,e,g,f),w)],q),B.m,w,B.e,B.j,0,B.p)},
hQ9(d,e,f,g){var w,v=null,u=A.d(d.c,v,v,v,v,v,v,D.wp,B.L,v,v),t=x.l,s=J.e3(7,t)
for(w=0;w<7;++w)s[w]=new A.bB(1,B.bg,A.aC(v,A.w(A.im(6,new C.fdn(d,w),!0,t),B.m,v,B.m_,B.j,0,B.p),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.fdo(d,w,e,f,g),v,v,v,v,v,v,!1,B.a7),v)
return A.w(A.a([new A.D(B.eI,u,v),A.E(A.av(new A.fI(1.1666666666666667,A.B(s,B.dA,v,B.e,B.j,0,v,v),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
hVD(d,e,f,g){var w=null
return A.w(A.a([new A.D(B.eI,A.d(d.c,w,w,w,w,w,w,D.wp,B.L,w,w),w),A.d(""+d.a+"/"+d.b,w,w,w,w,w,w,B.kf,w,w,w),A.d(d.fy,w,w,w,w,w,w,D.aQD,B.L,w,w),A.aM(w,B.T,!1,w,!0,B.r,w,A.aN(),d.id,w,w,w,w,w,2,D.bSz,B.y,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,B.dO,w,w,w,1,w,w,!1,"\u2022",w,w,w,new C.fmb(d,e,g,f),w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,B.dp,!0,B.a4,w,B.an,w,w,w,w),A.bG(D.fmj,new C.fmc(d,e,g,f),w)],x.p),B.m,w,B.e,B.j,0,B.p)},
hPG(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n=null,m=e.c,l=e.gk7(),k=e.d
k=k==null?n:k.c
w=C.i5F(d)
v=D.aDM.h(0,d)
if(v==null)v=d
m=A.d(m,n,n,n,n,n,n,B.m7,B.L,n,n)
u=A.m(22)
t=w.a
s=w.b
r=A.I(s.j(0.5),B.q,2)
q=A.a([new A.ac(0,B.G,w.c.j(0.35),B.eV,24)],x.V)
p=A.d(w.e,n,n,n,n,n,n,Y.Tz,n,n,n)
o=A.d(v,n,n,n,n,n,n,B.nx,n,n,n)
l=l?"Face NGMY at the "+w.d+" table":"Face "+A.t(k)+" at the table"
k=x.p
q=A.E(A.av(A.p(n,A.w(A.a([p,B.R,o,B.N,A.d(l,n,n,n,n,n,n,A.l(n,n,B.c.j(0.65),n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),B.L,n,n),B.d7,A.X(w.f,s.j(0.85),n,n,n,48)],k),B.m,n,B.b9,B.j,0,B.p),B.f,n,n,new A.o(n,n,r,u,q,new A.a8(B.b_,B.b4,B.x,t,n,n),B.n),n,n,n,B.eS,B.a9,n,n,1/0),n,n,n),1)
return A.w(A.a([m,B.ac,q,B.N,new A.a7(1/0,n,A.bG(D.fxw,new C.fcR(f,e,g,h),A.bn(s,n,n,n,B.d.gI(t).jf()>0.4?B.w:B.c,n,B.cl,n,n,n,n,n)),n)],k),B.m,n,B.e,B.j,0,B.p)},
Eu:function Eu(d,e){this.a=d
this.b=e},
aqv:function aqv(d,e,f,g,h,i,j,k){var _=this
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
ccP:function ccP(){},
ccQ:function ccQ(){},
ccO:function ccO(){},
ccR:function ccR(){},
ccN:function ccN(){},
ccT:function ccT(){},
ccU:function ccU(){},
ccM:function ccM(d){this.a=d},
ccS:function ccS(){},
ccL:function ccL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frQ:function frQ(d,e){this.a=d
this.b=e},
frK:function frK(d){this.a=d},
frL:function frL(d){this.a=d},
frM:function frM(d){this.a=d},
frN:function frN(d){this.a=d},
frO:function frO(d){this.a=d},
frP:function frP(d){this.a=d},
fcX:function fcX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fcW:function fcW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fq5:function fq5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fq4:function fq4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fq3:function fq3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fcr:function fcr(){},
fcs:function fcs(){},
fct:function fct(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fcu:function fcu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fne:function fne(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fnd:function fnd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fp9:function fp9(){},
fpa:function fpa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
flZ:function flZ(d,e){this.a=d
this.b=e},
fm_:function fm_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fdo:function fdo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fdn:function fdn(d,e){this.a=d
this.b=e},
fmb:function fmb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmc:function fmc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fcR:function fcR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
i1v(d){var w,v=A.U(d).k("a_<1>")
v=A.pd(new A.a_(d,new C.fwA(),v),120,v.k("J.E"))
w=A.cD(v,new C.fwB(),A.a3(v).k("J.E"),x.N).aH(0,"\n")
return"ADMIN DIRECT EMAIL (Resend) \u2014 This admin can send real emails to any NGMY user or any email address.\nWhen they ask you to send, write, or email a message to someone, use send_email (delivers through NGMY). Do NOT use mailto email type for delivery requests \u2014 that only opens Mail on the phone.\n\nNGMY user emails you can target:\n"+(w.length===0?"- Use any valid email address the admin provides.":w)+'\n\nRules:\n- Draft a clear professional subject and body when the admin only gives the idea.\n- If the admin gives exact wording, use it.\n- Append one send_email action after your plain-language confirmation:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"send_email","to":"user@email.com","subject":"Your subject","body":"Your message text"}]\n[[/NGMY_PHONE_ACTIONS]]\n'},
fwA:function fwA(){},
fwB:function fwB(){},
ah8(d,e){var w,v,u,t
for(w=d.length,v=e.length,u=0,t=0;t<w;++t)if(t<v&&e[t]===d[t])++u
return u},
arr:function arr(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aE2:function aE2(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
eFE:function eFE(){},
aLR:function aLR(){},
hE9(){var w=$.Il
if(w<=0)return;--w
$.Il=w
if(w===0){w=$.h9U
if(w!=null)w.$0()}},
c8j(d){var w
if(d.w)return!0
w=d.x
if(w==null)return!1
return 261-w.f>0},
ap9(d){var w=0,v=A.j(x.H),u,t
var $async$ap9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
if(t.length===0){w=1
break}$.fUG.L(0,t)
w=4
return A.b(A.az(),$async$ap9)
case 4:w=3
return A.b(f.ar("Bool","ngmy_game_free_play_used_"+B.a.i(t.toLowerCase()),!0),$async$ap9)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ap9,v)},
ap8(d){var w=0,v=A.j(x.y),u,t,s,r
var $async$ap8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(C.c8j(d)){u=!0
w=1
break}t=B.a.i(d.a.toLowerCase())
if(t.length===0){u=!1
w=1
break}if($.fUG.t(0,t)){u=!1
w=1
break}w=3
return A.b(A.az(),$async$ap8)
case 3:s=f
r=B.a.i(t.toLowerCase())
r=A.jK(J.q(s.a,"ngmy_game_free_play_used_"+r))
u=r!==!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ap8,v)},
V1(){var w=0,v=A.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$V1=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$V1)
case 7:r=e
q=A.aU(J.q(r.a,"ngmy_helper_ai_usage_v1"))
if(q==null||B.a.i(q).length===0){u=A.T(x.N,x.z)
w=1
break}p=B.S.aI(0,q,null)
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
return A.i($async$V1,v)},
aZS(d){return C.hEm(d)},
hEm(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aZS=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(A.az(),$async$aZS)
case 6:s=f
w=7
return A.b(s.ar("String","ngmy_helper_ai_usage_v1",B.S.ao(d,null)),$async$aZS)
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
return A.i($async$aZS,v)},
aZQ(d,e){var w,v,u,t,s=J.q(d,B.a.i(e.toLowerCase()))
if(!x.f.b(s))return new A.adJ(0,new A.S(Date.now(),0,!1))
w=J.a4(s)
v=w.h(s,"count")
w=w.h(s,"windowStart")
u=w==null?null:J.k(w)
t=A.bi(u==null?"":u)
if(t==null)t=new A.S(Date.now(),0,!1)
return new A.adJ(typeof v=="number"?B.o.D(B.k.N(v),0,999999):0,t)},
aZR(d,e){if(B.o.an(e.bE(d.b).a,36e8)>=24)return new A.adJ(0,e)
return d},
c8Q(d,e){var w=0,v=A.j(x.S),u,t,s
var $async$c8Q=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=-1
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=e
w=1
break}w=3
return A.b(C.V1(),$async$c8Q)
case 3:t=g
s=Date.now()
u=B.o.D(e-C.aZR(C.aZQ(t,d),new A.S(s,0,!1)).a,0,e)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c8Q,v)},
c8R(d,e){var w=0,v=A.j(x.cJ),u,t,s,r
var $async$c8R=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=null
w=1
break}if(B.a.i(d.toLowerCase()).length===0){u=null
w=1
break}w=3
return A.b(C.V1(),$async$c8R)
case 3:t=g
s=Date.now()
r=C.aZR(C.aZQ(t,d),new A.S(s,0,!1))
if(r.a<e){u=null
w=1
break}u=r.b.bR(864e8)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c8R,v)},
hEn(d){var w,v,u,t=d.a,s=B.o.an(t,1e6)
if(s<=0)return"0s"
w=B.o.an(t,36e8)
v=B.o.an(t,6e7)%60
u=s%60
if(w>0)return""+w+"h "+B.a.aU(B.o.u(v),2,"0")+"m "+B.a.aU(B.o.u(u),2,"0")+"s"
if(v>0)return""+v+"m "+B.a.aU(B.o.u(u),2,"0")+"s"
return""+u+"s"},
aZT(d){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aZT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){u=!0
w=1
break}p=C
o=C
w=3
return A.b(C.V1(),$async$aZT)
case 3:t=p.aZR(o.aZQ(f,d),new A.S(Date.now(),0,!1))
w=4
return A.b(A.az(),$async$aZT)
case 4:s=f
r=B.a.i(d.toLowerCase())
q=t.b.a7().ac()
u=A.jK(J.q(s.a,"ngmy_helper_3left_"+r+"_"+q))===!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZT,v)},
apv(d){var w=0,v=A.j(x.H),u,t,s,r
var $async$apv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d.toLowerCase()).length===0){w=1
break}s=C
r=C
w=3
return A.b(C.V1(),$async$apv)
case 3:t=s.aZR(r.aZQ(f,d),new A.S(Date.now(),0,!1))
w=5
return A.b(A.az(),$async$apv)
case 5:w=4
return A.b(f.ar("Bool","ngmy_helper_3left_"+B.a.i(d.toLowerCase())+"_"+t.b.a7().ac(),!0),$async$apv)
case 4:case 1:return A.h(u,v)}})
return A.i($async$apv,v)},
apw(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$apw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e<=0){u=!0
w=1
break}t=B.a.i(d.toLowerCase())
if(t.length===0){u=!1
w=1
break}w=3
return A.b(C.V1(),$async$apw)
case 3:s=g
r=Date.now()
q=C.aZR(C.aZQ(s,d),new A.S(r,0,!1))
r=q.a
if(r>=e){u=!1
w=1
break}J.aG(s,t,A.F(["count",r+1,"windowStart",q.b.a7().ac()],x.N,x.K))
w=4
return A.b(C.aZS(s),$async$apw)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apw,v)},
agK(d,e,a0){var w=0,v=A.j(x.N),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$agK=A.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:h=new A.fe("")
if(!d.d){p=!0
if(!C.ho6(a0))if(!C.ho5(a0)){p=A.af("\\b(call|text|message|whatsapp)\\s+\\w",!0,!1,!1,!1)
p=p.b.test(a0.toLowerCase())}}else p=!1
if(p)h.a+='PERMISSION NEEDED: User asked for phone data but has not said "allow access" yet. Ask ONCE: "Say allow access once and I will permanently connect your contacts, calendar, and calls on this phone." Do NOT ask for screenshots or manual steps.\n'
w=C.ho6(a0)?3:4
break
case 3:o=C.i5k(a0)
w=o!=null?5:6
break
case 5:w=7
return A.b(C.c1q(e,o),$async$agK)
case 7:n=a2
p=J.a4(n)
if(p.gcl(n)){m=h
l="CALL DETECTIVE MATCH for ~"+C.h8m(o)+":\n"
m.a+=l
for(p=p.gae(n);p.C();){m=p.gR(p)
l=h
k="- "+m.gVd()+"\n"
l.a+=k
m=m.f
if(m!=null&&B.a.i(m).length!==0)h.a+="  Said: "+m+"\n"}}else if(d.c)h.a+="CALL DETECTIVE: access granted but no saved calls near that time. Tell user you checked \u2014 nothing logged yet.\n"
else h.a+='CALL DETECTIVE: need one-time "allow access" before checking calls.\n'
case 6:case 4:p=A.af("\\bclipboard\\b",!1,!1,!1,!1)
w=p.b.test(a0)?8:9
break
case 8:t=11
w=14
return A.b(A.RT("text/plain"),$async$agK)
case 14:r=a2
p=r
if(p==null)p=null
else p=B.a.i(p.a)
q=p==null?"":p
if(J.ad(q)!==0){p=h
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
case 13:case 9:w=C.ho5(a0)?15:16
break
case 15:p=h
f=C
w=17
return A.b(C.a72(e),$async$agK)
case 17:m=f.ha0(a2)+"\n"
p.a+=m
case 16:p=A.af("\\b(morning brief|daily brief|brief me|ngmy brief|start my day)\\b",!0,!1,!1,!1)
w=p.b.test(a0.toLowerCase())?18:19
break
case 18:w=20
return A.b(C.U4(e),$async$agK)
case 20:i=a2
h.a+="NGMY MORNING BRIEF \u2014 include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).\n"
if(J.cI(i)){p=h
m=C.h8n(i,10)+"\n"
p.a+=m}else h.a+="No saved calls yet \u2014 suggest user tap \u26a1 to teach Call Detective once.\n"
case 19:p=h.a
u=B.a.i(p.charCodeAt(0)==0?p:p)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agK,v)},
hFJ(d){var w=B.a.i(d),v=w.length
if(v===0||v>6)return!1
if(B.a.t(w,"|")||B.a.t(w,":")||B.a.t(w,"/")||B.a.t(w,".")||B.a.t(w," "))return!1
v=A.af("^(NGMY|HTTP)",!1,!1,!1,!1)
if(v.b.test(w))return!1
v=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return v.b.test(w)},
cbp(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$cbp=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=A.haG(d)
if(n==null){u=null
w=1
break}t=4
w=7
return A.b(A.f5("ngmy_local_growth_income_code_v1_"+B.a.i(n).toUpperCase(),null,!1,B.bI),$async$cbp)
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
q=A.aa(m)
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
return A.i($async$cbp,v)},
aqc(d){var w=0,v=A.j(x.bY),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$aqc=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:k=B.a.i(d)
if(J.ad(k)===0){u=null
w=1
break}t=4
w=7
return A.b(A.f5("ngmy_local_growth_income_stash_v1_"+B.a.i(k),null,!1,B.bI),$async$aqc)
case 7:r=f
if(r==null){u=null
w=1
break}n=J.q(r,"payload")
q=J.k(n==null?"":n)
if(J.ad(q)===0){u=null
w=1
break}n=J.q(r,"ownerEmail")
p=B.a.i(J.k(n==null?"":n))
n=B.cf.cz(0,B.cI.aJ(q))
m=J.A(J.q(r,"live"),!0)
u=new A.aFs(m,p,n)
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
o=A.aa(j)
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
return A.i($async$aqc,v)},
b_X(d){var w=0,v=A.j(x.bY),u,t,s,r,q
var $async$b_X=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
w=C.hFJ(q)?3:4
break
case 3:w=5
return A.b(C.cbp(q),$async$b_X)
case 5:t=f
if(t==null){u=null
w=1
break}u=C.aqc(t)
w=1
break
case 4:if(B.a.a0(q,"NGMYLOCALSYNC1|")){u=C.aqc(B.a.i(B.a.b3(q,15)))
w=1
break}w=B.a.a0(q,"NGMYLOCALLIVE1|")?6:7
break
case 6:w=8
return A.b(C.aqc(B.a.i(B.a.b3(q,15))),$async$b_X)
case 8:s=f
if(s==null){u=null
w=1
break}r=s.c
u=new A.aFs(!0,s.b,r)
w=1
break
case 7:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_X,v)},
haV(d){var w=d.bI
if(w>=0)return w
return 1},
agW(d,e,f){var w=0,v=A.j(x.H),u,t
var $async$agW=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(e.e==null){w=1
break}w=3
return A.b(A.aPt(d,e),$async$agW)
case 3:if(!h||e.e==null){w=1
break}t=f
w=5
return A.b(A.Gz(d,null,null,!1,!0,""),$async$agW)
case 5:w=4
return A.b(t.$1(h),$async$agW)
case 4:case 1:return A.h(u,v)}})
return A.i($async$agW,v)},
i4d(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=6e7,d="tomorrow",a0=864e8,a1=B.a.i(a2)
if(a1.length===0)return B.il
w=a1.toLowerCase()
v=A.af("\\b(wake me|wake me up|wake up|set (an? )?alarm|alarm for|alarm at|alarm in|remind me to wake|need to wake|get me up|morning alarm|remind me in|set (a )?timer|timer for|countdown|in the next \\d+|in \\d+ (minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)|\\d+ (minute|minutes|min|mins|hour|hours) (from now|later))\\b",!1,!1,!1,!1)
u=v.b.test(w)
t=A.af("\\b(work|shift|job|meeting|appointment|class|school).{0,24}\\bat\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(!u&&t==null)return B.il
s=new A.S(Date.now(),0,!1)
r=A.dj()
q=A.dj()
p=C.hUP(w)
if(p!=null){v=p.a
r.b=s.bR(v)
q.b=C.hj7(a1,w)
if(J.A(q.bi(),"Wake up")&&B.o.an(v,e)<=180)q.b="Reminder \u2014 "+B.o.an(v,e)+" min"}else{if(t!=null){v=A.af("\\bat\\s+\\d",!1,!1,!1,!1)
o=t.b[0]
o.toString
o=B.a.eg(w,o,"")
v=!v.b.test(o)}else v=!1
if(v){v=t.b
n=C.hj8(v[2],v[4],v[3])
o=v[3]
m=A.c8(o==null?"":o,null)
if(m==null)m=0
l=A.c1(A.bA(s),A.bH(s),A.bR(s),0,0,0,0,0)
if(B.a.t(w,d))l=l.bR(a0)
r.b=A.c1(A.bA(l),A.bH(l),A.bR(l),n,m,0,0,0).bR(-36e8)
if(r.bi().cY(s.bR(e)))r.b=J.ci(r.bi(),B.nZ)
v=C.hZ_(v[1])
k=B.o.E(n,12)
if(k===0)k=12
j=n>=12?"PM":"AM"
q.b="Wake up \u2014 "+v+" at "+(""+k+":"+B.a.aU(B.o.u(m),2,"0")+" "+j)}else{l=A.c1(A.bA(s),A.bH(s),A.bR(s),0,0,0,0,0)
v=B.a.t(w,d)
if(v)l=l.bR(a0)
i=A.af("\\b(?:at|for)\\s+(\\d{1,2})(?::(\\d{2}))?\\s*(am|pm)?\\b",!1,!1,!1,!1).cF(w)
if(i!=null){o=i.b
h=C.hj8(o[1],o[3],o[2])
o=o[2]
g=A.c8(o==null?"":o,null)
if(g==null)g=0}else{h=7
g=0}f=A.c1(A.bA(l),A.bH(l),A.bR(l),h,g,0,0,0)
r.b=f.cY(s.bR(3e7))&&!v?f.bR(a0):f
q.b=C.hj7(a1,w)}}v=x.N
return A.a([new A.kp("alarm",A.F(["title",q.bi(),"start",r.bi().ac(),"notes","Alarm from NGMY Helper"],v,v))],x.Z)},
hUP(d){var w,v,u,t,s,r,q=[A.af("\\b(?:in|after)\\s+(?:the\\s+)?next\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.af("\\b(?:in|after)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1),A.af("\\b(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\s+(?:from now|later)\\b",!0,!1,!1,!1),A.af("\\b(?:set (?:a )?timer|timer for)\\s+(\\d+)\\s*(minute|minutes|min|mins|hour|hours|hr|hrs|second|seconds|sec|secs)\\b",!0,!1,!1,!1)]
for(w=0;w<4;++w){v=q[w].cF(d)
if(v==null)continue
u=v.b
t=u[1]
s=A.c8(t==null?"":t,null)
if(s==null||s<=0)continue
r=u[2]
if(r==null)r="minute"
if(B.a.a0(r,"sec"))return new A.ba(1e6*B.o.D(s,5,86400))
if(B.a.a0(r,"hour")||B.a.a0(r,"hr"))return new A.ba(36e8*B.o.D(s,1,168))
return new A.ba(6e7*B.o.D(s,1,10080))}return null},
hZ_(d){var w=d==null?"work":d,v=w.toLowerCase()
if(B.a.t(v,"meeting")||B.a.t(v,"appointment"))return"Meeting"
if(B.a.t(v,"class")||B.a.t(v,"school"))return"Class"
if(B.a.t(v,"shift"))return"Shift"
return"Work"},
hj8(d,e,f){var w,v=A.c8(d==null?"":d,null)
if(v==null)v=7
w=e==null?null:e.toLowerCase()
if(w==="pm"&&v<12)v+=12
if(w==="am"&&v===12)v=0
return B.o.D(w==null&&v>=1&&v<=7?v+12:v,0,23)},
hj7(d,e){var w,v,u,t
if(B.a.t(e,"work"))return"Wake up \u2014 Work"
if(B.a.t(e,"school")||B.a.t(e,"class"))return"Wake up \u2014 School"
w=A.af("\\btimer\\b",!1,!1,!1,!1)
if(w.b.test(e))return"Timer"
v=A.af("\"([^\"]+)\"|'([^']+)'",!0,!1,!1,!1).cF(d)
if(v!=null){w=v.b
u=w[1]
w=u==null?w[2]:u
t=B.a.i(w==null?"":w)
w=t.length
if(w>=3&&w<=60)return t}return"Wake up"},
hG5(d){var w,v,u,t,s=J.a4(d)
if(s.gam(d))return'PHONE CONTACTS: linked on this device \u2014 use "name" field when calling or texting.'
for(w=s.ky(d,80),v=w.$ti,w=new A.bQ(w,w.gM(0),v.k("bQ<ak.E>")),v=v.k("ak.E"),u='PHONE CONTACTS (use "name" field \u2014 never guess phone numbers):\n';w.C();){t=w.d
u+="- "+(t==null?v.a(t):t).b+"\n"}s=s.gM(d)>80?u+("\u2026 and "+(s.gM(d)-80)+" more\n"):u
return B.a.i(s.charCodeAt(0)==0?s:s)}},D,H,Ae,I,W,G,Af,X,F,Y,Q,Ag,Ah,Z,Ai,Aj,Ak,Al,A_,A0,K
J=c[1]
A=c[0]
B=c[2]
A1=c[196]
L=c[32]
R=c[188]
A2=c[199]
E=c[180]
M=c[190]
A3=c[102]
N=c[129]
A4=c[186]
S=c[35]
O=c[73]
T=c[79]
A5=c[80]
P=c[154]
A6=c[191]
U=c[182]
A7=c[194]
A8=c[192]
A9=c[193]
Aa=c[189]
Ab=c[185]
Ac=c[65]
V=c[170]
Ad=c[112]
C=a.updateHolder(c[5],C)
D=c[179]
H=c[27]
Ae=c[64]
I=c[184]
W=c[121]
G=c[133]
Af=c[195]
X=c[28]
F=c[183]
Y=c[141]
Q=c[94]
Ag=c[181]
Ah=c[198]
Z=c[187]
Ai=c[200]
Aj=c[135]
Ak=c[197]
Al=c[131]
A_=c[72]
A0=c[56]
K=c[54]
C.bqN.prototype={
oz(d,e){return this.a.$2(d,e)}}
C.F6.prototype={
T(){return new C.aHw(this.$ti.k("aHw<F6.T,F6.S>"))}}
C.aHw.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a
v=w.f
w=new A.hH(B.F5,v,null,null,w.$ti.k("hH<1>"))
u.e=w
u.VK()},
bu(d){var w,v=this
v.bG(d)
if(!d.c.A(0,v.a.c)){if(v.d!=null){v.aMX()
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hH(B.F5,w.b,w.c,w.d,w.$ti)}v.VK()}},
B(d){var w,v=this.a
v.toString
w=this.e
w===$&&A.c()
return v.mc(d,w)},
q(){this.aMX()
this.a2()},
VK(){var w,v=this
v.d=v.a.c.lu(new C.f0T(v),new C.f0U(v),new C.f0V(v))
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hH(B.XD,w.b,w.c,w.d,w.$ti)},
aMX(){var w=this.d
if(w!=null){w.a6(0)
this.d=null}}}
C.av7.prototype={
mc(d,e){return this.e.$2(d,e)}}
C.akL.prototype={
T(){return C.hMF()},
bs(){return this.r.$0()}}
C.qI.prototype={}
C.azI.prototype={
acv(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$acv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
C.h9s(r)
if(r.x==null||r.c3.length!==2||t.c==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.h9u(s),$async$acv)
case 3:case 1:return A.h(u,v)}})
return A.i($async$acv,v)},
X7(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aqa(t.a.c),$async$X7)
case 3:if(e!=null&&t.c!=null)t.a.bs()
r=!C.c8j(t.a.c)
if(r){w=4
break}else e=r
w=5
break
case 4:w=6
return A.b(C.ap8(t.a.c),$async$X7)
case 6:e=!e
case 5:s=e
if(t.c==null){w=1
break}t.m(new C.d9S(t,s))
if(!s)t.acv()
case 1:return A.h(u,v)}})
return A.i($async$X7,v)},
ac6(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ac6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.bBP(),$async$ac6)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.da2(t,s))
case 1:return A.h(u,v)}})
return A.i($async$ac6,v)},
a_(){var w,v,u=this
u.btC()
$.tm=$.tm+1
w=u.a
$.bBU=w.c.a
w=w.d.b8
v=A.U(w).k("M<1,a5<n,@>>")
w=A.C(new A.M(w,new C.dak(),v),v.k("ak.E"))
u.f=w
u.ac6()
u.Ju()
u.X7()
u.e=A.dt(B.nX,new C.dal(u))},
Ju(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ju=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:C.agX(t.a.d.b8)
w=3
return A.b(C.fGI(t.a.d.b8),$async$Ju)
case 3:s=e
if(t.c==null){w=1
break}C.agX(t.a.d.b8)
if(s!=null)t.m(new C.daa(t,s))
else t.m(new C.dab(t))
case 1:return A.h(u,v)}})
return A.i($async$Ju,v)},
q(){C.aZC()
var w=this.e
if(w!=null)w.a6(0)
this.btB()},
ah5(d,e,f){return this.crJ(d,e,f)},
crJ(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ah5=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:q=B.a.i(e.toLowerCase())
p=J.q(t.r,q)
o=t.a
n=o.d.b8
o=o.c
s=d.b
C.hZ2(n,o.a,o.c,d.a,s,f,e,p)
t.a.bs()
w=3
return A.b(C.agY(t.a.d.b8),$async$ah5)
case 3:if(t.c==null){w=1
break}t.m(new C.dad(t))
r=f===1?"1 game":""+f+" games"
t.c.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Invite sent to "+e+" \u2014 "+s+" ("+r+")",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ah5,v)},
Il(d,e){return this.ccS(d,e)},
c0C(d){return this.Il(d,null)},
ccS(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Il=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e!=null&&B.a.i(e).length!==0){s=C.tX(t.a.d.b8,B.a.i(e))
if(s!=null&&C.aOo(s)<=0){t.c.J(x.q).f.U(D.aOr)
w=1
break}}w=5
return A.b(C.ap8(t.a.c),$async$Il)
case 5:w=!g?3:4
break
case 3:r=t.c
r.toString
q=t.a
p=q.w
w=6
return A.b(C.fUH(r,C.fB5(q.c),p),$async$Il)
case 6:w=1
break
case 4:o=new C.da5(t)
r=d.a
if(r==="dice"){r=t.c
r.toString
q=t.a
p=q.c
A.hB(r,new C.aCy(p,q.d,q.f,q.r,new C.da6(o),q.w,C.fB5(p),null),!1,"NgmyDiceGameHost",x.X)
w=1
break}q=t.c
q.toString
p=t.a
A.hB(q,new C.akK(p.c,p.d,r,d.b,d.c,d.f,p.f,p.r,new C.da7(o),p.w,e,null),!1,"GameBetScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$Il,v)},
bZ1(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="matchesTotal"
C.agX(i.a.d.b8)
C.agX(i.f)
w=C.i8W(i.a.c.a,i.f)
v=C.hZ1(i.a.c.a,i.f)
u=w.length===0
if(u&&v.length===0)return B.bH
if(!u){t=B.d.gI(w)
u=A.m(14)
s=A.I(B.b0,B.q,1)
r=J.a4(t)
q=r.h(t,"fromName")
q=A.t(q==null?r.h(t,"fromEmail"):q)
p=A.t(r.h(t,"gameTitle"))
o=A.aJ(r.h(t,g))
o=o==null?h:B.k.N(o)
if(o==null)o=1
r=A.aJ(r.h(t,g))
r=r==null?h:B.k.N(r)
r=(r==null?1:r)===1?"":"s"
n=x.p
return A.p(h,A.w(A.a([D.frT,A.d(q+" wants to play "+p+" ("+o+" game"+r+")",h,h,h,h,h,h,B.pi,h,h,h),B.N,A.B(A.a([A.E(A.dU(B.Jk,new C.d9Y(i,t),h),1),B.ab,A.E(A.bG(D.fAS,new C.d9Z(i,t),h),1)],n),B.m,h,B.e,B.j,0,h,h)],n),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(B.aE,h,s,u,h,h,B.n),h,h,h,B.e5,B.bm,h,h,1/0)}m=B.d.gI(v)
l=B.d.dM(i.y,new C.da_(m),new C.da0(i))
k=C.h_Q(m,i.a.c.a,i.r)
j=C.aOo(m)
u=A.m(14)
s=A.I(B.b0,B.q,1)
r=j===1?"":"s"
return A.p(h,A.w(A.a([D.fk0,A.d(l.b+" vs "+k+" \xb7 "+j+" game"+r+" left",h,h,h,h,h,h,B.pi,h,h,h),B.at,A.d(C.i0H(m,i.a.c.a),h,h,h,h,h,h,B.a7T,h,h,h),B.N,A.bG(D.fr9,new C.da1(i,l,m),h)],x.p),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(B.bk,h,s,u,h,h,B.n),h,h,h,B.e5,B.bm,h,h,1/0)},
bPH(d){var w,v,u,t,s,r,q,p,o,n=null,m=D.eP5.t(0,d.a),l=A.a([],x.O)
for(w=d.f,v=0;v<2;++v){u=A.SL(w[v])
t=B.k.D(u.d*0.58,0.12,0.3)
l.push(new A.vD(u.a,u.b,B.k.D(u.c*0.92,0,0.9),t).iE())}s=B.d.gI(w)
w=A.m(16)
t=A.m(18)
r=A.I(A.Z(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.q,1)
q=x.V
p=A.a([new A.ac(0,B.G,A.Z(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.ju,12)],q)
o=x.p
o=A.a([new A.a7(100,n,A.av(A.X(d.e,B.c,n,n,n,64),n,n,n),n),A.E(new A.D(B.iZ,A.w(A.a([A.B(A.a([A.E(A.d(d.b,n,n,n,n,n,n,B.kg,n,n,n),1)],o),B.m,n,B.e,B.j,0,n,n),B.at,A.d(d.c,n,2,B.a2,n,n,n,B.pd,n,n,n)],o),B.F,n,B.b9,B.j,0,B.p),n),1)],o)
if(m)o.push(A.aH(n,n,n,n,D.bQ8,n,n,n,new C.d9U(this,d),n,n,n,n,"Invite player",n))
o.push(new A.D(B.M3,A.p(n,D.bOf,B.f,n,n,new A.o(A.Z(71,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),n,A.I(A.Z(B.k.V(229.5),s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.q,1.6),n,A.a([new A.ac(0,B.G,A.Z(89,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,10)],q),n,B.a6),n,44,n,n,n,n,n,44),n))
return A.aL(!1,w,!0,A.p(n,A.B(o,B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,r,t,p,new A.a8(B.ax,B.aC,B.x,l,n,n),B.n),n,92,n,B.e5,n,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.d9V(this,d),n,n,n,n,n,n,n)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=A.P(d).ax.a===B.I?B.jf:B.pI,k=m?B.ic.j(0.94):B.c.j(0.94),j=m?B.c:B.M,i=m?B.ic:B.c,h=m?B.c.j(0.08):B.aL,g=m?B.c:B.M,f=m?B.bo:B.bK
if(!o.x)return C.aOX(n,l,A.av(A.mJ(n,m?B.c:B.bi,n,n,n,n,n,n,n,n),n,n,n))
if(o.w){w=C.fB5(o.a.c)
return new C.Nm(o.a.w,w,!0,o.gaRR(),n)}w=A.aI(d,B.e9,x.w).w
v=A.m(12)
u=A.I(h,B.q,1)
t=x.V
s=A.a([],t)
if(!m)s.push(new A.ac(0,B.G,B.w.j(0.04),B.cJ,12))
r=x.p
s=A.a([A.p(n,A.B(A.a([A.E(A.d("\ud83c\udfae  All Games\nWin real money playing skill games!",n,n,n,n,n,n,A.l(n,n,g,n,n,n,n,n,n,n,n,n,n,n,B.O,n,1.35,!0,n,n,n,n,n,n,n,n),n,n,n),1),new A.up(new C.dah(o,f,g),n,$.aQh(),n)],r),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(i,n,u,v,s,n,B.n),n,n,n,n,B.Yu,n,n,1/0),B.R,o.bZ1()],r)
v=o.y
B.d.v(s,new A.M(v,o.gbPG(),A.U(v).k("M<1,r>")))
w=A.c9(A.w(s,B.m,n,B.e,B.j,0,B.p),B.r,n,B.y,n,new A.Q(14,w.r.b+78,14,24),n,n,B.ag)
s=A.m(35)
v=A.a([new A.ac(0,B.G,B.w.j(m?0.28:0.08),B.ju,15)],t)
u=A.I(m?B.c.j(0.1):B.aL,B.q,1)
t=A.aH(n,n,n,n,A.X(B.eD,j,n,n,n,18),n,n,n,o.gaRR(),n,n,n,n,n,n)
q=A.E(A.av(A.d("GAME CENTER",n,n,n,n,n,n,A.l(n,n,j,n,n,n,n,n,n,n,n,15,n,n,B.u,n,n,!0,n,1,n,n,n,n,n,n),n,n,n),n,n,n),1)
p=A.m(20)
return A.ok(!0,C.aOX(n,l,new A.an(B.W,n,B.aa,B.f,A.a([w,A.ao(n,A.bm(!1,new A.D(B.Mg,A.p(n,A.B(A.a([t,q,new A.D(B.iZ,A.p(n,A.B(A.a([D.bLx,B.ec,C.aq_(new C.dai(o),B.m7,o.a.c.a)],r),B.m,n,B.e,B.P,0,n,n),B.f,n,n,new A.o(B.cR,n,n,p,n,n,B.n),n,n,n,n,B.h9,n,n,n),n)],r),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(k,n,u,s,v,n,B.n),n,60,n,n,B.mt,n,n,n),n),!0,!1,B.af,!0,!0),n,n,0,0,0,n)],r),n)),new C.daj(o),x.K)},
aRS(){var w,v
this.a.bs()
w=this.d
v=w>0?A.F(["gamesPlayed",w,"pointsEarned",w*20],x.N,x.z):null
w=this.c
w.toString
A.iO(w,v)}}
C.aCy.prototype={
T(){return new C.biR()},
hy(d){return this.e.$1(d)},
bs(){return this.f.$0()},
aGp(){return this.r.$0()}}
C.biR.prototype={
a_(){this.buC()
this.d=A.Us(this.a.d.bh)
$.tm=$.tm+1},
q(){C.aZC()
this.buB()},
B(d){var w=this,v=w.a.c.a,u=w.d
u===$&&A.c()
return new C.aoC(v,new C.dOh(w),u,new C.dOi(w),new C.dOj(w,d),new C.dOk(w),null)}}
C.akK.prototype={
T(){return new C.azH(new A.as(B.as,$.aw()))},
hy(d){return this.x.$1(d)},
bs(){return this.y.$0()},
aGp(){return this.z.$0()}}
C.azH.prototype={
a_(){this.btA()
this.a.toString
$.tm=$.tm+1},
q(){C.aZC()
var w=this.d
w.S$=$.aw()
w.P$=0
this.btz()},
a1O(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a1O=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.Ns()
w=5
return A.b(C.ap8(t.a.c),$async$a1O)
case 5:w=!e?3:4
break
case 3:s=t.c
if(s==null){w=1
break}r=t.a
q=r.Q
w=6
return A.b(C.fUH(s,C.fB5(r.c),q),$async$a1O)
case 6:w=1
break
case 4:s=t.a
r=s.as
if(r!=null&&B.a.i(r).length!==0){p=C.tX(s.d.b8,B.a.i(r))
if(p!=null&&C.aOo(p)<=0){t.c.J(x.q).f.U(D.aOr)
w=1
break}}o=A.d6(B.a.i(t.d.a.a))
n=o!=null&&o>=2?o:t.e
if(n<2){t.c.J(x.q).f.U(D.eW5)
w=1
break}m=A.KU(t.a.c.a,new C.d9M(t))
if(m+0.001<n){t.c.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Not enough balance for this bet \u2014 you have $"+A.dB(m)+", the bet is $"+A.dB(n)+".",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a
s.c.as+=20
s.aGp()
s=t.a
s.toString
r=B.o.u(1000*Date.now())
q=t.a
s.hy(new A.d4(r,q.c.a,n,B.jS,B.fh,"Game bet: "+q.f,null,null,B.cq,new A.S(Date.now(),0,!1)))
t.a.bs()
if(D.eOW.t(0,t.a.e)){s=t.c
s.toString
r=t.a
A.hB(s,new C.anE(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,null),!1,"GamePlayScreen",x.X)
w=1
break}s=t.c
s.toString
r=t.a
A.hB(s,new C.akM(r.c,r.d,r.e,r.f,r.w,n,r.x,r.y,r.as,null),!1,"GamePlayScreen",x.X)
case 1:return A.h(u,v)}})
return A.i($async$a1O,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.e,m=n*1.46/8,l=A.aH(o,o,o,o,B.Gz,o,o,o,new C.d9P(d),o,o,o,o,o,o),k=p.a,j=A.d(k.f,o,o,o,o,o,o,B.cA,o,o,o),i=A.m(12),h=x.p
j=A.eD(A.a([A.p(o,A.av(C.aq_(new C.d9Q(p),B.kf,k.c.a),o,o,o),B.f,o,o,new A.o(B.cR,o,o,i,o,o,B.n),o,o,o,D.bqS,B.fW,o,o,o)],h),o,o,!0,!0,D.XA,o,1,o,o,o,!1,o,!1,B.c,o,l,o,!0,o,o,o,o,o,j,o,o,o,1,o,!0)
l=A.m(16)
i=A.I(B.b0,B.q,1)
k=A.X(D.bCo,D.bkJ,o,o,o,28)
w=p.a
v=A.d(w.f,o,o,o,o,o,o,B.nx,o,o,o)
w=A.d(w.r,o,o,o,o,o,o,B.pi,o,o,o)
u=A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.m(12)
s=x.a3
s=A.C(new A.M(A.a([2,5,10,25],x.t),new C.d9R(p),s),s.k("ak.E"))
s=A.B(s,B.m,o,B.e,B.j,0,o,o)
r=A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
t=A.p(o,A.w(A.a([D.fCs,B.R,s,B.N,A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.d,o,o,o,o,o,2,A.bs(o,new A.b4(4,A.m(10),B.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,r,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,B.kH,"Custom amount (min $2)",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dO,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,B.dp,!0,B.a4,o,B.an,o,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(u,o,o,t,o,o,B.n),o,o,o,o,B.bR,o,o,1/0)
u=A.m(12)
r=A.I(A.Z(102,B.a41.l()>>>16&255,B.a41.l()>>>8&255,B.a41.l()&255),B.q,1)
s=A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
q=A.m(10)
q=A.p(o,A.w(A.a([D.fjo,A.d("+ $"+B.k.ab(n*0.46,2),o,o,o,o,o,o,D.f9R,o,o,o),A.d("(46% return on $"+B.k.ab(p.e,2)+" bet)",o,o,o,o,o,o,B.pd,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(s,o,o,q,o,o,B.n),o,o,o,o,B.cp,o,o,1/0)
s=A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
n=A.m(10)
u=A.p(o,A.w(A.a([D.fs9,B.N,q,B.N,A.p(o,A.w(A.a([D.fev,A.d("$"+B.k.ab(m,2),o,o,o,o,o,o,D.f_t,o,o,o),A.d("8 pairs \xd7 $"+B.k.ab(m,2)+" each",o,o,o,o,o,o,B.pd,o,o,o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(s,o,o,n,o,o,B.n),o,o,o,o,B.cp,o,o,1/0)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(D.bgP,o,r,u,o,o,B.n),o,o,o,o,B.bR,o,o,1/0)
r=A.fn(o,o,B.bi,o,o,o,o,o,o,B.c,o,B.fP,o,o,o,o,o,o,o,o)
return C.aOX(j,D.XA,A.c9(A.p(o,A.w(A.a([k,B.at,v,B.bD,w,B.R,t,B.N,u,B.R,new A.a7(1/0,o,A.ih(A.d("Start Game ($"+B.k.ab(p.e,2)+")",o,o,o,o,o,o,B.ck,o,o,o),p.gcvE(),r),o)],h),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,i,l,o,D.bW4,B.n),o,o,o,o,B.eR,o,o,1/0),B.r,o,B.y,o,E.aho,o,o,B.ag))}}
C.akM.prototype={
T(){var w=x.s,v=x.t,u=x.S
return new C.azJ(B.cG,new A.as(B.as,$.aw()),A.a([],w),A.a([],x.d4),A.a([],w),A.a([],w),A.a([],v),A.a([],v),A.a([],v),A.aX(u),A.aX(u),A.a([],v),A.a([],v),A.a([],v))},
hy(d){return this.y.$1(d)},
bs(){return this.z.$0()}}
C.azJ.prototype={
ghF(){var w=this.a.Q
return w!=null&&B.a.i(w).length!==0},
rb(d){return this.bNV(d)},
bNV(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$rb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}s=t.A3()
r=t.Ol()
w=s<=0?3:4
break
case 3:w=5
return A.b(t.aay(d),$async$rb)
case 5:w=1
break
case 4:q=B.k.D(s/r,0,1)
w=q>=1?6:8
break
case 6:w=9
return A.b(t.tN(d),$async$rb)
case 9:w=7
break
case 8:w=10
return A.b(t.Es(q,s,r),$async$rb)
case 10:case 7:case 1:return A.h(u,v)}})
return A.i($async$rb,v)},
F2(d,e,f,g){return this.cto(d,e,f,g)},
cto(d,e,f,g){var w=0,v=A.j(x.H),u,t=this,s
var $async$F2=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return A.b(C.bCV(s,C.bCz(),C.h1K(),d,e,f,g),$async$F2)
case 3:case 1:return A.h(u,v)}})
return A.i($async$F2,v)},
A3(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":for(w=0,v=0;v<8;++v)if(s.b1A(v))++w
return w
case"typing":u=s.dx
t=s.w
t===$&&A.c()
return u+C.ah8(t,s.e.a.a)
case"memory":return s.ghF()&&D.mM.t(0,s.a.e)?s.fx:s.k2
case"simon":return s.p3
case"pattern":return s.axE()
case"sequence":return s.y1
case"math":return s.y2
case"scramble":return s.bh
case"color":return s.b8
case"reflex":return s.Y
default:u=s.aO
if(u!=null){t=u.a
u=u.b
return t>=u?u:t}return s.f?1:0}},
axE(){var w,v,u=this.x1
for(w=this.x2,v=1;v<w;++v)u+=Math.min(v+2,7)
return u},
Ol(){var w,v,u,t,s=this
switch(s.a.e){case"puzzle":return 8
case"typing":for(w=s.cy,v=w.length,u=0,t=0;t<v;++t)u+=w[t].length
if(u>0)w=u
else{w=s.w
w===$&&A.c()
w=w.length
if(w===0)w=1}return w
case"memory":return s.dy.length
case"simon":return 21
case"pattern":return C.h_U()
case"sequence":case"scramble":case"color":case"reflex":return 5
case"math":return 6
default:w=s.aO
if(w!=null)return w.b
return 1}},
bu(d){var w,v,u=this
u.bG(d)
if(u.f||u.c3)return
w=u.a
v=C.fBa(w.e,w.d.y2)
if(v!==C.fBa(d.e,d.d.y2)&&u.c!=null)u.m(new C.dbE(u,v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="sessionState"
i.btE()
w=i.a
w.toString
$.tm=$.tm+1
i.Q=C.fBa(w.e,w.d.y2)
i.b4v()
i.abR()
if(i.ghF()){i.c3=!0
i.cP="Connecting to match\u2026"
i.ci="Both players enter the room together \u2014 play starts at the same time."
i.OH()
i.abu()
i.bk=A.dt(B.fA,new C.dbH(i))}if(B.d.t(D.Qe,i.a.e)){w=i.ghF()
v=i.a
if(w){w=v.d.b8
v=v.Q
v.toString
u=C.tX(w,v)
w=i.a
if(u!=null){w=w.c
v=w.a
w=w.c
t=J.a4(u)
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
k=B.a.i(J.k(t==null?"":t))}w=new C.aZA(!1,w,k.length===0||B.a.t(k,"@")?C.h_Q(u,v,null):k,p,l,s)}else{w=w.c
w=C.fUL(w.c,w.a)}w=i.bz=w}else{w=v.c
w=i.bz=C.fUL(w.c,w.a)}v=C.hGc()
v.bnE(i.a.e,i.d,w)
i.aO=v
i.r=v.c
if(i.ghF()){w=i.a
v=w.d.b8
w=w.Q
w.toString
u=C.tX(v,w)
m=u==null?null:J.q(u,h)
if(x.f.b(m)){w=i.aO
w.toString
w.b9G(i.a.e,A.a2(m,x.N,x.z),i.a.c.a)
w=i.aO
i.r=w.c
if(w.e){if(w.r)j=D.RG
else j=w.f===!0?D.qe:D.HR
i.A5(j)}}}i.b1=A.dt(B.mp,new C.dbI(i))
if(i.ghF())i.bb=A.dt(B.oK,new C.dbJ(i))}if(i.ghF()&&!B.d.t(D.Qe,i.a.e))i.bb=A.dt(B.oK,new C.dbK(i))
i.as=A.dt(B.fV,new C.dbL(i))},
OH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$OH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghF()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tX(s.d.b8,q)
w=p!=null?3:4
break
case 3:w=5
return A.b(C.bAU(p,t.a.c.a),$async$OH)
case 5:o=e
if(t.c!=null)t.m(new C.daU(t,o))
w=1
break
case 4:w=6
return A.b(C.KL(q,t.a.d.b8,!1),$async$OH)
case 6:n=e
if(n==null||t.c==null){w=1
break}w=7
return A.b(C.bAU(n,t.a.c.a),$async$OH)
case 7:o=e
if(t.c!=null)t.m(new C.daV(t,o))
case 1:return A.h(u,v)}})
return A.i($async$OH,v)},
aic(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aic=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghF()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.KL(r,s.d.b8,!1),$async$aic)
case 3:q=e
if(q==null||t.c==null){w=1
break}p=J.q(q,"sessionState")
if(!x.f.b(p)){w=1
break}o=A.a2(p,x.N,x.z)
if(t.a.e==="memory"){s=t.go
r=s.a
n=t.id
m=n.a
l=t.fx
t.aML(o)
s=s.a
n=n.a
k=t.fx
j=o.h(0,"memorySeed")
if(typeof j=="number")i=B.k.N(j)
else{h=j==null?null:J.k(j)
i=A.c8(h==null?"":h,null)}g=""+r+"|"+m+"|"+l!==""+s+"|"+n+"|"+k
if(g)B.d.bq(t.fy,new C.dbn(t))
if(i!=null&&t.fr.length!==0){s=A.C(t.dy,x.S)
B.d.v(s,t.dy)
r=new A.eJ()
r.dw(i)
B.d.fn(s,r)
r=s.length
n=t.fr
if(r===n.length)if(s[0]!==n[0]||s[1]!==n[1]){t.fr=s
g=!0}}if(g&&t.c!=null)t.m(new C.dbo())}case 1:return A.h(u,v)}})
return A.i($async$aic,v)},
abu(){var w=0,v=A.j(x.H),u=this
var $async$abu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.a07(!0),$async$abu)
case 2:return A.h(null,v)}})
return A.i($async$abu,v)},
a07(d){return this.ciG(d)},
ciF(){return this.a07(!1)},
ciG(b3){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
var $async$a07=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:b2={}
if(!t.ghF()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
if(q.length===0){w=1
break}p=B.a.i(s.c.a.toLowerCase())
w=3
return A.b(C.KL(q,s.d.b8,b3),$async$a07)
case 3:o=b5
if(o==null)o=C.tX(t.a.d.b8,q)
if(o==null){w=1
break}s=J.a4(o)
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
a2=new A.S(Date.now(),0,!1).a7()
if(b3){d.n(0,p,!0)
a1.n(0,p,a2.ac())}if(i&&!d.ai(0,h))d.n(0,h,!1)
if(f&&!d.ai(0,g))d.n(0,g,!1)
s=!1
if(i)if(J.A(d.h(0,h),!0)){s=a1.h(0,h)
s=J.k(s==null?"":s).length===0}if(s)a1.n(0,h,a2.ac())
s=!1
if(f)if(J.A(d.h(0,g),!0)){s=a1.h(0,g)
s=J.k(s==null?"":s).length===0}if(s)a1.n(0,g,a2.ac())
j.n(0,"inGame",d)
j.n(0,"readyAt",a1)
b2.a=null
s=j.h(0,"startAt")
a3=J.k(s==null?"":s)
if(a3.length!==0){s=A.bi(a3)
a4=s==null?null:s.bT()
b2.a=a4
s=a4}else s=null
a5=i&&f&&J.A(d.h(0,h),!0)&&J.A(d.h(0,g),!0)
if(a5&&s==null){if(i){r=a1.h(0,h)
r=A.bi(J.k(r==null?"":r))
a6=r==null?null:r.bT()}else a6=null
if(f){r=a1.h(0,g)
r=A.bi(J.k(r==null?"":r))
a7=r==null?null:r.bT()}else a7=null
if(a6!=null&&a7!=null){a8=(a6.cb(a7)?a6:a7).bR(5e5)
if(!new A.S(Date.now(),0,!1).cY(a8)){a4=b2.a=a8.bR(4e6)
j.n(0,"startAt",a4.a7().ac())
if(t.a.e==="memory"&&j.h(0,"memorySeed")==null){j.n(0,"memorySeed",B.o.E(1000*Date.now(),2147483647))
j.n(0,"memoryMatched",A.a([],x.t))}if(t.a.e==="pattern"&&j.h(0,"patternSeed")==null)j.n(0,"patternSeed",B.o.E(1000*Date.now(),2147483647))
s=a4
a9=!0}else a9=b3}else a9=b3}else a9=b3
if(a9){C.i5I(t.a.d.b8,q,j)
t.a.bs()}if(t.c==null){w=1
break}b0=t.bC
if(b0==null)b0="your opponent"
if(!a5){t.m(new C.db9(b2,t,b0))
w=1
break}if(s==null){t.m(new C.dba(t))
w=1
break}b1=new A.S(Date.now(),0,!1)
if(b1.cY(s)){s=s.bE(b1).a
r=B.o.an(s,1e6)
t.m(new C.dbb(b2,t,r+(B.o.E(B.o.an(s,1000),1000)>0?1:0)))
w=1
break}if(t.c3){t.m(new C.dbc(b2,t))
b2=t.a.e
if(b2==="pattern")t.a8p()
else if(b2==="memory"){t.b4u()
if(t.c!=null)t.m(new C.dbd())}}b2=t.bk
if(b2!=null)b2.a6(0)
t.bk=null
case 1:return A.h(u,v)}})
return A.i($async$a07,v)},
aNF(d){var w,v,u,t,s=this
if(d!=null){w=new A.eJ()
w.dw(d)}else w=s.d
v=Math.min(s.x2+2,7)
u=J.e3(v,x.S)
for(t=0;t<v;++t)u[t]=w.aA(9)
s.ry=u
s.x1=0
s.to=-1},
aNE(){return this.aNF(null)},
a8p(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a8p=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ghF()){s=t.a
s=s.Q==null||s.e!=="pattern"}else s=!0
if(s){w=1
break}r=t.cgc()
w=r==null?3:4
break
case 3:s=t.a
q=s.Q
q.toString
w=5
return A.b(C.KL(q,s.d.b8,!1),$async$a8p)
case 5:r=t.b0k(e)
case 4:if(t.c==null){w=1
break}t.aNF(r)
t.m(new C.dam(t))
t.DF()
case 1:return A.h(u,v)}})
return A.i($async$a8p,v)},
b0k(d){var w,v,u,t=null
if(d==null)return t
w=J.q(d,"sessionState")
if(!x.f.b(w))return t
v=J.q(w,"patternSeed")
if(typeof v=="number")return B.k.N(v)
u=v==null?t:J.k(v)
return A.c8(u==null?"":u,t)},
cgc(){var w=this.a,v=w.Q
if(v==null)return null
return this.b0k(C.tX(w.d.b8,v))},
abR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$abR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$abR)
case 3:r=e
q=t.a
p=q.e
q=B.a.i(q.c.a.toLowerCase())
s=A.f4(J.q(r.a,"ngmy_game_"+p+"_"+q))
if(s==null)s=0
if(t.c==null){w=1
break}t.m(new C.daT(t,s))
case 1:return A.h(u,v)}})
return A.i($async$abR,v)},
p0(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n
var $async$p0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$p0)
case 2:p=e
o=u.a
n=o.e
o=B.a.i(o.c.a.toLowerCase())
t=n==="math"
if(t)s=$.bDo().length
else s=n==="typing"?50:105
if(n==="typing")r=B.o.E(u.at+5,s)
else{q=u.at
r=t?B.o.E(q+6,s):B.o.E(q+1,s)}w=3
return A.b(p.ar("Int","ngmy_game_"+n+"_"+o,r),$async$p0)
case 3:u.at=r
return A.h(null,v)}})
return A.i($async$p0,v)},
a24(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$a24=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghF()||t.aO==null||t.f||t.aS){w=1
break}if(t.c3){w=1
break}s=t.a
r=s.Q
r.toString
w=3
return A.b(C.KL(r,s.d.b8,!1),$async$a24)
case 3:q=e
if(q==null||t.c==null){w=1
break}s=t.a
r=s.d.b8
s=s.Q
s.toString
p=C.tX(r,s)
s=p==null
if(!s){r=J.cF(p)
r.a8(p)
r.v(p,q)}r=J.a4(q)
o=r.h(q,"sessionState")
if(!x.f.b(o)){w=1
break}n=A.a2(o,x.N,x.z)
r=r.h(q,"sessionUpdatedAt")
m=A.bi(J.k(r==null?"":r))
s=s?null:J.q(p,"sessionUpdatedAt")
l=A.bi(J.k(s==null?"":s))
if(m!=null&&l!=null&&!m.cb(l)){w=1
break}s=t.aO
s.toString
r=t.a
s.b9G(r.e,n,r.c.a)
r=t.aO
t.r=r.c
w=r.e?4:6
break
case 4:if(r.r)k=D.RG
else k=r.f===!0?D.qe:D.HR
w=7
return A.b(t.A5(k),$async$a24)
case 7:w=5
break
case 6:if(t.c!=null)t.m(new C.dbp())
case 5:case 1:return A.h(u,v)}})
return A.i($async$a24,v)},
ag5(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$ag5=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.ghF()||q.aO==null||q.a.Q==null||q.aS){w=1
break}q.aS=!0
t=3
o=q.aO
o.toString
p=o.cL2(q.a.e)
o=q.a
n=o.d.b8
o=o.Q
o.toString
w=6
return A.b(C.aPh(n,o,p),$async$ag5)
case 6:q.a.bs()
r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
q.aS=!1
w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ag5,v)},
A5(d){return this.bV7(d)},
bV7(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$A5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(t.f||t.aO==null){w=1
break}s=t.aO.w
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
return A.b(t.J3(s,s),$async$A5)
case 9:w=4
break
case 6:w=10
return A.b(t.Xt(s,s),$async$A5)
case 10:w=4
break
case 7:w=11
return A.b(t.aax(s,s),$async$A5)
case 11:w=4
break
case 8:w=4
break
case 4:w=t.ghF()?12:13
break
case 12:w=14
return A.b(t.HF(),$async$A5)
case 14:case 13:case 1:return A.h(u,v)}})
return A.i($async$A5,v)},
a_4(d,e){return this.caD(d,e)},
caD(d,e){var w=0,v=A.j(x.H),u,t=this
var $async$a_4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=t.ghF()?3:5
break
case 3:w=6
return A.b(t.ag5(),$async$a_4)
case 6:if(d===D.qd){w=1
break}w=4
break
case 5:if(d===D.qd){w=1
break}case 4:w=7
return A.b(t.A5(d),$async$a_4)
case 7:case 1:return A.h(u,v)}})
return A.i($async$a_4,v)},
abK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$abK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghF()||t.a.Q==null||t.f){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tX(s.d.b8,q)
if(p==null){w=1
break}o=B.a.i(t.a.c.a.toLowerCase())
n=J.q(p,"sessionState")
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
return A.b(C.aPh(t.a.d.b8,q,l),$async$abK)
case 3:t.a.bs()
case 1:return A.h(u,v)}})
return A.i($async$abK,v)},
HF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$HF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.ghF()||t.a.Q==null){w=1
break}s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=C.tX(s.d.b8,q)
if(p==null){w=1
break}o=J.q(p,"sessionState")
s=x.N
r=x.z
n=x.f.b(o)?A.a2(o,s,r):A.T(s,r)
n.n(0,"gameOver",!0)
C.h2b(t.a.d.b8,q,n)
C.i97(t.a.d.b8,q)
w=3
return A.b(C.agY(t.a.d.b8),$async$HF)
case 3:t.a.bs()
case 1:return A.h(u,v)}})
return A.i($async$HF,v)},
q(){var w,v=this
if(v.ghF()&&!v.f)v.abK()
else if(!v.f)v.c0D()
C.aZC();++v.RG
w=v.as
if(w!=null)w.a6(0)
w=v.b1
if(w!=null)w.a6(0)
w=v.cx
if(w!=null)w.a6(0)
w=v.bb
if(w!=null)w.a6(0)
w=v.bk
if(w!=null)w.a6(0)
w=v.e
w.S$=$.aw()
w.P$=0
v.btD()},
cyN(){var w=this,v=!0
if(w.c!=null)if(!w.f){v=w.Q
v===$&&A.c()
v=v<=0||w.aO==null}if(v)return
if(w.c3)return
v=w.aO
v.toString
w.a.toString
if(v.a>=v.b){w.tN("Goal completed!")
return}v=++w.rx
if(v%5===0)w.m(new C.dby())},
b4v(){var w,v,u,t,s,r=this
r.x=A.a([],x.s)
w=r.a.e
switch(w){case"memory":v=J.e3(8,x.S)
for(u=0;u<8;++u)v[u]=u
r.dy=v
r.k3=4
r.r="Match all pairs \u2014 keep trying until time runs out"
r.b4u()
break
case"scramble":r.bh=0
r.b4w()
r.r="Word 1 of 5 \u2014 place letters in order"
break
case"typing":u=B.o.E(r.at,50)
v=J.e3(5,x.N)
for(t=0;t<5;++t)v[t]=D.deD[B.o.E(u+t,50)]
r.cy=v
r.dx=r.db=0
r.w=v[0]
r.r="Sentence 1 of 5 \u2014 type every character"
r.e.bO(0,B.c8)
break
case"math":r.y2=0
r.b4t()
r.r="Question 1 of 6"
break
case"sequence":r.y1=0
r.b4x()
r.r="Question 1 of 5 \u2014 what comes next?"
break
case"puzzle":w=x.S
v=J.e3(9,w)
for(u=0;u<9;++u)v[u]=u
r.k4=v
s=r.d
B.d.fn(v,s)
if(!r.cl5()){w=J.e3(9,w)
for(u=0;u<9;++u)w[u]=u
B.d.fn(w,s)
r.k4=w}r.r="Slide tiles 1\u20138 into order"
break
case"simon":w=r.ok
B.d.a8(w)
w.push(r.d.aA(4))
r.p3=r.p2=0
r.r="Repeat the pattern \u2014 wrong tap ends round (paid by progress)"
r.Qj()
break
case"pattern":if(r.ghF()){r.ry=A.a([],x.t)
r.x1=0
r.x2=1
r.to=-1
r.r="Waiting to sync pattern with opponent\u2026"}else{r.x2=1
r.aNE()
w=A.t(Math.min(r.x2+2,7))
r.r="Round 1/7 \u2014 tap "+w+" tiles (0/"+w+")"
r.DF()}break
case"color":r.b8=0
r.b4o()
r.r="Round 1 of 5 \u2014 tap the COLOR of the text"
break
case"reflex":r.Y=0
r.y=!1
r.z=null
r.r="Round 1 of 5 \u2014 wait for green, tap fast"
r.b5E()
break
default:if(B.d.t(D.Qe,w)){w=r.aO
w=w==null?null:w.c
r.r=w==null?"Play to win":w}else{r.r="Complete this round to win!"
r.w="OK"}}},
b1A(d){var w=this.k4[d]
if(d===8)return w===0
return w===d+1},
cl5(){var w,v,u,t,s,r
for(w=this.k4,v=0,u=0;u<9;++u){t=w[u]
if(t===0)continue
for(s=u+1;s<9;++s){r=w[s]
if(r!==0&&t>r)++v}}return B.o.E(v,2)===0},
b4x(){var w,v,u,t,s,r=this,q=B.o.E(r.at+r.y1*17,4),p=[2,3,4,5][q],o=3+q,n=J.e3(o,x.S)
for(w=0;w<o;w=v){v=w+1
n[w]=B.k.N(Math.pow(p,v))}u=B.k.N(Math.pow(p,o))
r.w=B.o.u(u)
r.au=B.d.aH(n,", ")
q=r.w
t=x.s
s=A.a([B.o.u(u+p),B.o.u(u-p),B.o.u(u+p*2)],t)
t=A.a([q],t)
B.d.v(t,s)
B.d.fn(t,r.d)
r.x=t},
b4t(){var w,v,u=this,t=u.y2
if(t===0&&u.at>$.bDo().length-6)u.at=0
w=$.bDo()
v=w[B.o.E(u.at+t,w.length)]
u.CW=v.a
u.w=v.b
u.x=v.c},
b4w(){var w=this,v=w.w=D.cTo[B.o.E(w.at+w.bh,105)]
w.ax=C.i9p(v)
w.ay=A.c2(v.length,null,!1,x.T)
w.ch=A.a(w.ax.split(""),x.s)
w.e.bO(0,B.c8)},
b5E(){var w=this,v=w.cx
if(v!=null)v.a6(0)
w.y=!1
w.z=null
w.cx=A.cM(A.dC(0,0,0,120+w.d.aA(280),0,0),new C.dbm(w))},
bVa(){var w,v,u,t=this
if(t.f)return
if(!t.y){t.rb("Too early \u2014 paid for "+t.Y+"/5.")
return}if(t.z==null)w=999
else{v=Date.now()
u=t.z
u.toString
w=B.o.an(new A.S(v,0,!1).bE(u).a,1000)}if(w<520){t.m(new C.daR(t))
v=t.Y
if(v>=5){t.p0()
t.tN("All 5 reflex rounds \u2014 lightning fast!")}else{t.r="Round "+(v+1)+" of 5 \u2014 wait for green, tap fast"
t.b5E()
t.m(new C.daS())}}else t.rb("Too slow ("+w+"ms) \u2014 paid for "+t.Y+"/5.")},
cy2(d){var w,v,u,t=this
if(!t.f)w=d>=t.ch.length
else w=!0
if(w)return
v=t.ch[d]
u=B.d.bg(t.ay,new C.dbt())
if(u<0)return
t.m(new C.dbu(t,u,v,d))},
cy3(d){var w,v,u=this
if(!u.f)w=d>=u.ay.length
else w=!0
if(w)return
v=u.ay[d]
if(v==null)return
u.m(new C.dbv(u,d,v))},
bF3(){var w,v,u=this
if(u.f)return
if(B.d.b4(u.ay,new C.dan())){u.c.J(x.q).f.U(D.eW_)
return}w=B.d.h_(u.ay)
v=u.w
v===$&&A.c()
if(u.a.e!=="scramble")return
if(w.toUpperCase()===v.toUpperCase()){u.m(new C.dao(u))
if(u.ghF()&&D.mM.t(0,u.a.e))u.a0l()
if(u.bh>=5){u.p0()
if(u.ghF()&&D.mM.t(0,u.a.e))u.n1(!0)
else u.tN("All 5 words unscrambled!")}else{u.b4w()
u.r="Word "+(u.bh+1)+" of 5 \u2014 place letters in order"
u.m(new C.dap())}}else u.rb("Wrong word \u2014 paid for "+u.bh+"/5.")},
b4o(){var w=this,v=["RED","GREEN","BLUE","YELLOW"],u=B.o.E(w.at+w.b8*11,4),t=v[w.d.aA(4)]
w.aF=t
w.aE=v[u]
w.aM=[B.dJ,B.dz,B.hS,B.rv][u]
w.w=t},
aML(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=B.a.i(h.a.c.a.toLowerCase()),f=h.go
f.a8(0)
w=h.id
w.a8(0)
v=d.h(0,"memoryMatchedBy")
u=x.f
if(u.b(v)){t=A.aX(x.S)
for(s=J.jw(v),s=s.gae(s),r=x.j;s.C();){q=s.gR(s)
p=B.a.i(J.k(q.a).toLowerCase())
o=q.b
for(q=J.aV(r.b(o)?o:B.cv),n=p===g;q.C();){m=q.gR(q)
l=typeof m=="number"?B.k.N(m):A.c8(J.k(m),null)
if(l==null)continue
t.L(0,l)
if(n)w.L(0,l)}}f.v(0,t)}else{k=d.h(0,"memoryMatched")
if(x.j.b(k))for(w=J.aV(k);w.C();){m=w.gR(w)
l=typeof m=="number"?B.k.N(m):A.c8(J.k(m),null)
if(l!=null)f.L(0,l)}}h.k2=B.k.bn(f.a/2)
j=d.h(0,"scores")
if(u.b(j)){f=A.aJ(J.q(j,g))
i=f==null?null:B.k.N(f)
if(i!=null)h.fx=i}},
b4u(){var w,v,u,t,s,r,q,p=this
p.fx=p.k2=0
p.go.a8(0)
p.id.a8(0)
p.fy=A.a([],x.t)
p.k1=!1
w=A.C(p.dy,x.S)
B.d.v(w,p.dy)
p.fr=w
if(p.ghF()&&p.a.Q!=null){w=p.a
v=w.d.b8
w=w.Q
w.toString
u=C.tX(v,w)
t=u==null?null:J.q(u,"sessionState")
w=x.N
v=x.z
s=x.f.b(t)?A.a2(t,w,v):A.T(w,v)
r=s.h(0,"memorySeed")
if(typeof r=="number")q=B.k.N(r)
else{w=r==null?null:J.k(r)
q=A.c8(w==null?"":w,null)}w=p.fr
if(q!=null){v=new A.eJ()
v.dw(q)
B.d.fn(w,v)}else B.d.fn(w,p.d)
p.aML(s)}else B.d.fn(p.fr,p.d)},
ci0(d){var w,v,u,t=this
if(t.c3)return
if(t.f||t.k1||t.go.t(0,d)||B.d.t(t.fy,d))return
t.m(new C.db2(t,d))
w=t.fy
if(w.length<2)return
v=w[0]
u=w[1]
w=t.fr
if(w[v]===w[u]){t.m(new C.db3(t,v,u))
if(t.ghF()&&D.mM.t(0,t.a.e))t.a0l()
if(t.go.a>=t.fr.length){t.p0()
if(t.ghF()&&D.mM.t(0,t.a.e))t.n1(!0)
else t.axH()}return}t.k1=!0
A.bN(D.bpQ,new C.db4(t),x.c)},
b3S(d){var w,v,u=this,t="Wrong answer \u2014 paid for "
if(u.f)return
w=u.w
w===$&&A.c()
v=d.toUpperCase()===w.toUpperCase()
w=u.a.e
if(w==="sequence"){if(v){u.m(new C.dbe(u))
if(u.y1>=5){u.p0()
u.tN("All 5 questions correct!")}else{u.b4x()
u.r="Question "+(u.y1+1)+" of 5 \u2014 what comes next?"
u.m(new C.dbf())}}else u.rb(t+u.y1+"/5.")
return}if(w==="math"){if(v){u.m(new C.dbg(u))
if(u.y2>=6){u.p0()
u.tN("All 6 math questions correct!")}else{u.b4t()
u.r="Question "+(u.y2+1)+" of 6"
u.m(new C.dbh())}}else{u.Vy(u.y2+1)
u.rb(t+u.y2+"/6.")}return}if(w==="color"){if(v){u.m(new C.dbi(u))
if(u.b8>=5){u.p0()
u.tN("All 5 color rounds correct!")}else{u.b4o()
u.r="Round "+(u.b8+1)+" of 5 \u2014 tap the COLOR of the text"
u.m(new C.dbj())}}else u.rb("Wrong color \u2014 paid for "+u.b8+"/5.")
return}if(v){u.p0()
u.axH()}else u.c.J(x.q).f.U(D.eWJ)},
cy1(d){var w,v,u,t,s,r,q=this
if(q.f)return
w=B.d.cH(q.k4,0)
v=B.o.an(d,3)
u=B.o.E(d,3)
t=B.o.an(w,3)
s=B.o.E(w,3)
if(!(v===t&&Math.abs(u-s)===1))r=u===s&&Math.abs(v-t)===1
else r=!0
if(r){q.m(new C.dbs(q,d,w))
if(B.d.h_(q.k4)==="123456780"){q.p0()
q.axH()}}},
Qj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Qj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=++t.RG
t.p4=!0
if(t.c!=null)t.m(new C.db5(t))
s=t.ok,r=x.H,q=0
case 3:if(!(q<s.length)){w=5
break}if(t.c==null||p!==t.RG){w=1
break}new C.db6(t,q).$0()
t.c.ef()
w=6
return A.b(A.bN(B.kT,null,r),$async$Qj)
case 6:if(t.c==null||p!==t.RG){w=1
break}new C.db7(t).$0()
t.c.ef()
w=7
return A.b(A.bN(B.jE,null,r),$async$Qj)
case 7:case 4:++q
w=3
break
case 5:if(t.c!=null&&p===t.RG)t.m(new C.db8(t))
case 1:return A.h(u,v)}})
return A.i($async$Qj,v)},
cy4(d){var w,v,u=this
if(u.f||u.p4)return
w=u.ok
if(w[u.p2]!==d){u.rb("Wrong color \u2014 paid for "+u.p3+"/21 taps.")
return}u.m(new C.dbw(u))
v=u.p2
w=w.length
if(v>=w){if(w>=6){u.p0()
u.tN("Perfect Simon run!")
return}u.m(new C.dbx(u))
u.Qj()}},
DF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$DF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.ry.length===0){w=1
break}t.xr=!0
if(t.c!=null)t.m(new C.daq(t))
s=x.H
w=3
return A.b(A.bN(B.jk,null,s),$async$DF)
case 3:r=t.ry,q=r.length,p=0
case 4:if(!(p<r.length)){w=6
break}o=r[p]
if(t.c==null){w=1
break}new C.dar(t,o).$0()
t.c.ef()
w=7
return A.b(A.bN(B.Y7,null,s),$async$DF)
case 7:if(t.c==null){w=1
break}new C.das(t).$0()
t.c.ef()
w=8
return A.b(A.bN(B.iE,null,s),$async$DF)
case 8:case 5:r.length===q||(0,A.K)(r),++p
w=4
break
case 6:if(t.c!=null)t.m(new C.dat(t))
case 1:return A.h(u,v)}})
return A.i($async$DF,v)},
Vy(d){return this.bzM(d)},
bzM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Vy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(d<=0||t.a.e!=="math"){w=1
break}w=3
return A.b(A.az(),$async$Vy)
case 3:s=f
r=t.a
q=r.e
r=B.a.i(r.c.a.toLowerCase())
p=$.bDo().length
o=B.o.E(t.at+d,p)
w=4
return A.b(s.ar("Int","ngmy_game_"+q+"_"+r,o),$async$Vy)
case 4:t.at=o
case 1:return A.h(u,v)}})
return A.i($async$Vy,v)},
cy_(d){var w,v=this
if(v.f||v.xr)return
w=Math.min(v.x2+2,7)
if(v.ry[v.x1]!==d){v.rb("Wrong tile \u2014 paid for "+v.axE()+"/"+C.h_U()+" moves.")
return}v.m(new C.dbq(v,w))
if(v.ghF()&&D.mM.t(0,v.a.e))v.a0l()
if(v.x1>=w)if(v.x2>=7){v.p0()
if(v.ghF()&&D.mM.t(0,v.a.e))v.n1(!0)
else v.tN("All 7 pattern rounds correct!")}else{v.m(new C.dbr(v))
v.DF()}},
J3(d,e){return this.cgs(d,e)},
tN(d){return this.J3(null,d)},
axH(){return this.J3(null,null)},
cgs(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$J3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a6(0)
s=t.b1
if(s!=null)s.a6(0)
r=t.a.x*1.46
t.m(new C.db0(t,r))
q=B.o.u(1000*Date.now())
s=t.a
p=new A.d4(q,s.c.a,r,B.fH,B.fh,"Game payout: "+s.f,null,null,B.cq,new A.S(Date.now(),0,!1))
A.agU(p,!0)
t.a.hy(p)
t.a.bs()
o=e==null?"+$"+B.k.ab(r,2)+" added to your balance!":e
s=t.a
C.uz(r,null,o,s.c.a,s.f,s.x,q,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.F2(d,o,"YOU WIN!",!0),$async$J3)
case 3:w=4
return A.b(C.agM(t.a.f,o),$async$J3)
case 4:case 1:return A.h(u,v)}})
return A.i($async$J3,v)},
F0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$F0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=t.ghF()&&D.mM.t(0,t.a.e)?3:4
break
case 3:w=5
return A.b(t.css(),$async$F0)
case 5:w=1
break
case 4:s=t.A3()
r=t.Ol()
w=r<=0||s<=0?6:7
break
case 6:w=8
return A.b(t.aay("Time's up \u2014 no progress to pay."),$async$F0)
case 8:w=1
break
case 7:q=B.k.D(s/r,0,1)
w=q>=1?9:11
break
case 9:w=12
return A.b(t.tN("Complete! Max payout earned."),$async$F0)
case 12:w=10
break
case 11:w=13
return A.b(t.Es(q,s,r),$async$F0)
case 13:case 10:case 1:return A.h(u,v)}})
return A.i($async$F0,v)},
Qq(d){return this.ckM(d)},
a0l(){return this.Qq(!1)},
ckM(b1){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$Qq=A.e(function(b2,b3){if(b2===1){s.push(b3)
w=t}for(;;)switch(w){case 0:if(!(r.ghF()&&D.mM.t(0,r.a.e))||r.a.Q==null){w=1
break}if(!b1){a1=new A.S(Date.now(),0,!1)
a2=r.bQ
if(a2!=null&&a1.bE(a2).a<3e6){w=1
break}r.bQ=a1}a2=r.a
a3=a2.Q
a3.toString
q=B.a.i(a3)
if(J.ad(q)===0){w=1
break}t=4
p=B.a.i(a2.c.a.toLowerCase())
a4=C.tX(a2.d.b8,q)
w=a4==null?7:9
break
case 7:w=10
return A.b(C.KL(q,r.a.d.b8,!1),$async$Qq)
case 10:w=8
break
case 9:b3=a4
case 8:o=b3
if(o==null){w=1
break}n=J.q(o,"sessionState")
a2=x.f
a3=x.N
a5=x.z
m=a2.b(n)?A.a2(n,a3,a5):A.T(a3,a5)
l=J.q(m,"scores")
k=a2.b(l)?A.a2(l,a3,a5):A.T(a3,a5)
J.aG(k,p,r.A3())
J.aG(m,"scores",k)
if(r.a.e==="memory"){j=J.q(m,"memoryMatchedBy")
i=a2.b(j)?A.a2(j,a3,a5):A.T(a3,a5)
a6=r.id
a6=A.C(a6,A.a3(a6).k("co.E"))
B.d.fo(a6)
J.aG(i,p,a6)
J.aG(m,"memoryMatchedBy",i)
h=A.aX(x.S)
for(a6=i,a6=new A.du(a6,a6.r,a6.e),a7=x.j;a6.C();){g=a6.d
if(!a7.b(g))continue
for(a8=J.aV(g);a8.C();){f=a8.gR(a8)
e=typeof f=="number"?B.k.N(f):A.c8(J.k(f),null)
if(e!=null)J.ci(h,e)}}a6=h
a6=A.C(a6,A.a3(a6).k("co.E"))
B.d.fo(a6)
J.aG(m,"memoryMatched",a6)}d=J.q(m,"wagers")
a0=a2.b(d)?A.a2(d,a3,a5):A.T(a3,a5)
J.aG(a0,p,r.a.x)
J.aG(m,"wagers",a0)
w=11
return A.b(C.aPh(r.a.d.b8,q,m),$async$Qq)
case 11:r.a.bs()
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
return A.i($async$Qq,v)},
n1(d){return this.cst(d)},
css(){return this.n1(!1)},
cst(b5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$n1=A.e(function(b6,b7){if(b6===1)return A.f(b7,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}w=!t.ghF()||t.a.Q==null?3:4
break
case 3:w=5
return A.b(t.F0(),$async$n1)
case 5:w=1
break
case 4:w=6
return A.b(t.Qq(!0),$async$n1)
case 6:s=t.a
r=s.Q
r.toString
q=B.a.i(r)
p=B.a.i(s.c.a.toLowerCase())
w=7
return A.b(C.KL(q,s.d.b8,!0),$async$n1)
case 7:o=b7
n=t.Ol()
w=o==null?8:9
break
case 8:m=B.k.D(t.A3()/n,0,1)
w=m<=0?10:12
break
case 10:w=13
return A.b(t.aay("Time's up \u2014 no progress to pay."),$async$n1)
case 13:w=11
break
case 12:w=m>=1?14:16
break
case 14:w=17
return A.b(t.tN("Complete! Max payout earned."),$async$n1)
case 17:w=15
break
case 16:w=18
return A.b(t.Es(m,t.A3(),n),$async$n1)
case 18:case 15:case 11:w=19
return A.b(t.HF(),$async$n1)
case 19:w=1
break
case 9:s=J.a4(o)
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
a0=d==null?null:B.k.N(d)
if(a0==null)a0=t.A3()
d=A.aJ(e.h(0,j))
a1=d==null?null:B.k.N(d)
if(a1==null)a1=0
a2=B.k.D(a0/n,0,1)
w=a2<=0?20:21
break
case 20:w=22
return A.b(t.aay("Time's up \u2014 no progress to pay."),$async$n1)
case 22:w=23
return A.b(t.HF(),$async$n1)
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
if(r!=null)r.a6(0)
r=t.b1
if(r!=null)r.a6(0)
a8=t.a.x*1.46*a2
a9=a8+a7
t.m(new C.dbk(t,a8,a2))
r=t.a
r.toString
h=B.o.u(1000*Date.now())
d=t.a
b0=d.c.a
b1=""+a0
b2=""+n
d="Multiplayer payout: "+d.f
d=s?d+" ("+b1+"/"+b2+") + bonus $"+B.k.ab(a7,2):d+" ("+b1+"/"+b2+")"
r.hy(new A.d4(h,b0,a9,B.fH,B.fh,d,null,null,B.cq,new A.S(Date.now(),0,!1)))
t.a.bs()
if(t.c==null){w=1
break}if(a5.length===0)b3="Draw"
else b3=s?"Winner":"Lost"
b4=s?"+$"+B.k.ab(a9,2)+" (includes opponent bonus $"+B.k.ab(a7,2)+")":"+$"+B.k.ab(a8,2)+" (your progress payout)"
s=t.a
C.uz(a9,null,b4,s.c.a,s.f,s.x,null,!0)
w=24
return A.b(t.F2(b1+"/"+b2+" \xb7 "+b3,b4,"MATCH OVER",!0),$async$n1)
case 24:w=25
return A.b(t.HF(),$async$n1)
case 25:case 1:return A.h(u,v)}})
return A.i($async$n1,v)},
Es(d,e,f){return this.cgq(d,e,f)},
cgq(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Es=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0
s=t.as
if(s!=null)s.a6(0)
s=t.b1
if(s!=null)s.a6(0)
r=t.a.x*1.46*d
t.m(new C.daZ(t,r,d))
s=B.o.u(1000*Date.now())
q=t.a
p=new A.d4(s,q.c.a,r,B.fH,B.fh,"Game partial: "+q.f+" ("+e+"/"+f+")",null,null,B.cq,new A.S(Date.now(),0,!1))
A.agU(p,!0)
t.a.hy(p)
t.a.bs()
if(t.c==null){w=1
break}o=B.k.V(d*100)
if(t.a.e==="typing"){q=t.dx
n=t.w
n===$&&A.c()
m=q+C.ah8(n,t.e.a.a)}else m=e
l=t.a.e==="typing"?B.d.cK(t.cy,0,new C.db_()):f
k=t.a.e==="typing"?l-m:null
q=k!=null&&k>0
n=""+o
j=q?"+$"+B.k.ab(r,2)+" ("+n+"% \u2014 "+A.t(k)+" mistakes/missed)":"+$"+B.k.ab(r,2)+" ("+n+"% of full prize)"
q=t.a
C.uz(r,null,j,q.c.a,q.f,q.x,s,!0)
w=3
return A.b(t.F2(""+m+"/"+l,j,"PARTIAL WIN",!0),$async$Es)
case 3:w=4
return A.b(C.agM(t.a.f,j),$async$Es)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Es,v)},
c0D(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.f)return
o.f=!0
w=null
v=null
try{w=o.A3()
v=o.Ol()}catch(u){return}if(v<=0||w<=0)return
t=B.k.D(w/v,0,1)
s=A.nX(B.k.ab(o.a.x*1.46*t,2))
if(s<0.01)return
r=o.a
q=r.c
q.e=q.e+(s-r.x*t)
q=B.o.u(1000*Date.now())
p=o.a
r.hy(new A.d4(q,p.c.a,s,B.fH,B.fh,"Game partial: "+p.f+" ("+A.t(w)+"/"+A.t(v)+", left early)",n,n,B.cq,new A.S(Date.now(),0,!1)))
o.a.bs()
p=o.a
q=p.c.a
r=p.f
p=p.x
C.uz(s,n,"Left early \xb7 +$"+B.k.ab(s,2)+" ("+A.t(w)+"/"+A.t(v)+")",q,r,p,n,!0)},
aax(d,e){return this.bPB(d,e)},
bPB(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$aax=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a6(0)
s=t.b1
if(s!=null)s.a6(0)
r=B.o.u(1000*Date.now())
s=t.a
q=s.c.a
p=s.x
s=s.f
o=Date.now()
t.a.hy(new A.d4(r,q,p,B.fH,B.fh,"Game payout: "+s+" (draw, stake returned)",null,null,B.cq,new A.S(o,0,!1)))
t.a.bs()
o=t.a
s=o.c.a
p=o.f
o=o.x
C.uz(o,null,"Draw. Your $"+B.k.ab(o,2)+" stake was returned.",s,p,o,r,!0)
if(t.c==null){w=1
break}w=3
return A.b(t.F2(d,"Nobody won, so your $"+B.k.ab(t.a.x,2)+" stake was returned.","DRAW",!1),$async$aax)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aax,v)},
Xt(d,e){return this.bPC(d,e)},
aay(d){return this.Xt(null,d)},
bPC(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Xt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.f){w=1
break}t.f=!0;++t.RG
s=t.as
if(s!=null)s.a6(0)
s=t.b1
if(s!=null)s.a6(0)
s=t.a
r=s.c.a
q=s.f
s=s.x
C.uz(s,null,e,r,q,s,null,!1)
if(t.c==null){w=1
break}w=3
return A.b(t.F2(d,e,"YOU LOSE",!1),$async$Xt)
case 3:case 1:return A.h(u,v)}})
return A.i($async$Xt,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.Q
m===$&&A.c()
w=B.o.an(m,60)
m=B.a.aU(B.o.u(B.o.E(m,60)),2,"0")
v=A.aH(n,n,n,n,B.an2,n,n,n,new C.dbz(d),n,n,n,n,n,n)
if(o.ghF()){u=o.bC
u=(u==null?"":u).length!==0}else u=!1
t=o.a
s=A.E(A.d(u?t.f+" vs "+A.t(o.bC):t.f,n,2,B.a2,n,n,n,B.fQ,n,n,n),1)
r=A.m(10)
q=x.p
r=A.B(A.a([v,s,A.p(n,C.aq_(new C.dbA(o),B.ol,t.c.a),B.f,n,n,new A.o(B.cR,n,n,r,n,n,B.n),n,n,n,n,B.fL,n,n,n)],q),B.m,n,B.e,B.j,0,n,n)
t=o.a
s=t.w
v=A.m(10)
s=A.p(n,A.B(A.a([A.E(A.d("Win $"+B.k.ab(t.x*1.46,2)+" \xb7 stake $"+B.k.ab(o.a.x,2)+" \u2022 Progress "+o.A3()+"/"+o.Ol(),n,n,n,n,n,n,D.f4v,n,n,n),1),new C.apa(o.a.c.a,new C.dbB(o),n),B.ab,D.bH8,B.db,A.d(""+w+":"+m,n,n,n,n,n,n,B.nz,n,n,n)],q),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,n,v,n,new A.a8(B.a3,B.a8,B.x,s,n,n),B.n),n,n,n,n,B.h8,n,n,n)
v=o.a.w
m=A.U(v).k("M<1,v>")
m=A.C(new A.M(v,new C.dbC(),m),m.k("ak.E"))
w=A.m(14)
v=A.I(B.b0,B.q,1)
p=C.aOX(n,D.b77,A.bm(!0,new A.D(Ag.Yv,A.w(A.a([r,s,B.N,new A.fg(new C.dbD(o),n),B.am,A.E(A.p(n,o.bPA(),B.f,n,n,new A.o(n,n,v,w,n,new A.a8(B.a3,B.a8,B.x,m,n,n),B.n),n,n,n,n,B.cp,n,n,n),1)],q),B.aj,n,B.e,B.j,0,B.p),n),!0,!1,B.af,!0,!0))
if(!o.c3)return p
m=A.Z(140,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255)
w=A.Z(242,B.iC.l()>>>16&255,B.iC.l()>>>8&255,B.iC.l()&255)
v=A.m(18)
u=A.I(B.b0,B.q,1)
return new A.an(B.W,n,B.aa,B.r,A.a([p,A.bZ(0,A.p(B.A,A.dZ(A.p(n,A.w(A.a([D.eSb,B.ac,A.d(o.cP,n,n,n,n,n,n,D.f5Y,B.L,n,n),B.am,A.d(o.ci,n,n,n,n,n,n,D.f4c,B.L,n,n)],q),B.m,n,B.e,B.P,0,B.p),B.f,n,n,new A.o(w,n,u,v,n,n,B.n),n,n,n,B.vt,B.xJ,n,n,n),!1,n),B.f,m,n,n,n,n,n,n,n,n,n,n),0,0,0)],q),n)},
c1C(){var w=this.k3
return A.cq(new C.daY(this,w,B.k.dA(this.fr.length/w)))},
bPA(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e
if(m==="memory")return o.c1C()
if(m==="scramble"){m=o.r
m===$&&A.c()
w=x.l
return A.w(A.a([A.d(m,n,n,n,n,n,n,B.pd,n,n,n),A.d("Words "+o.bh+"/5",n,n,n,n,n,n,B.Dw,n,n,n),B.ac,A.d("Tap letters below to fill each slot",n,n,n,n,n,n,A.l(n,n,A.Z(166,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.R,A.bW(B.fR,A.im(o.ay.length,new C.daG(o),!0,w),B.bq,6,6),B.aR,A.bW(B.fR,A.im(o.ch.length,new C.daH(o),!0,w),B.bq,8,8),B.aR,new A.a7(1/0,n,A.ih(D.fvB,o.gbF2(),A.fn(n,n,B.aE,n,n,n,n,n,n,B.c,n,n,B.cl,n,n,n,n,n,n,n)),n)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="typing"){m=o.w
m===$&&A.c()
return new C.arr(m,o.e,new C.daI(o),new C.daJ(o),n)}if(m==="math"||m==="sequence"){m=o.r
m===$&&A.c()
m=A.a([A.d(m,n,n,n,n,n,n,B.pd,n,n,n)],x.p)
w=o.a.e
v=w==="sequence"
if(v||w==="math")m.push(A.d(v?"Answered "+o.y1+"/5":"Correct "+o.y2+"/6",n,n,n,n,n,n,B.Dw,n,n,n))
m.push(B.ac)
if(o.a.e==="sequence"){w=o.au
w===$&&A.c()
w+=", ?"}else w=o.CW
m.push(A.f6(B.A,A.d(w,n,n,n,n,n,n,B.nx,B.L,n,n),B.f,B.du))
m.push(B.aR)
w=o.x
B.d.v(m,new A.M(w,new C.daK(o),A.U(w).k("M<1,r>")))
return A.w(m,B.m,n,B.e,B.j,0,B.p)}if(m==="puzzle")return A.cq(new C.daL(o))
if(m==="simon"){m=o.r
m===$&&A.c()
return A.w(A.a([A.d(m,n,n,n,n,n,n,B.pd,n,n,n),A.d("Progress "+o.p3+"/21",n,n,n,n,n,n,B.Dw,n,n,n),B.N,A.E(A.m0(1,A.im(4,new C.daM(o),!0,x.l),2,10,10,n,B.dS,!1),1)],x.p),B.m,n,B.e,B.j,0,B.p)}if(m==="pattern")return A.cq(new C.daN(o))
if(m==="color"){u=A.a(["RED","GREEN","BLUE","YELLOW"],x.s)
t=[B.dJ,B.dz,B.hS,B.rv]
m=o.r
m===$&&A.c()
m=A.d(m,n,n,n,n,n,n,B.pd,n,n,n)
w=A.d("Round "+o.b8+"/5",n,n,n,n,n,n,B.Dw,n,n,n)
v=o.aE
v===$&&A.c()
s=o.aM
s===$&&A.c()
s=A.a([m,w,B.ac,A.d(v,n,n,n,n,n,n,A.l(n,n,s,n,n,n,n,n,n,n,n,42,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),B.aR],x.p)
r=J.e3(4,x.l)
for(q=0;q<4;++q){m=t[q]
m=A.fn(n,n,A.Z(217,m.l()>>>16&255,m.l()>>>8&255,m.l()&255),n,n,n,n,n,n,B.c,n,n,B.f9,n,n,n,n,n,n,n)
r[q]=new A.D(B.cy,new A.a7(1/0,n,A.ih(new A.y(u[q],n,B.cA,n,n,n,n,n,n,n,n,n),new C.daO(o,u,q),m),n),n)}B.d.v(s,r)
return A.w(s,B.m,n,B.e,B.j,0,B.p)}if(m==="reflex"){m=o.y
p=m?B.bi:B.cg
w=o.r
w===$&&A.c()
w=A.d(w,n,n,n,n,n,n,B.a7O,B.L,n,n)
v=A.d("Fast taps "+o.Y+"/5",n,n,n,n,n,n,D.f1J,n,n,n)
m=m?"TAP!":"WAIT\u2026"
s=o.c
s.toString
s=A.d(m,n,n,n,n,n,n,A.l(n,n,B.c,n,n,n,n,n,n,n,n,Math.min(A.aI(s,B.bW,x.w).w.a.a*0.18,72),n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
m=o.y?"Tap anywhere now!":"Tap when the screen turns green"
return A.ry(A.aC(B.c7,A.df(n,A.w(A.a([w,B.N,v,B.b7,s,B.b7,new A.D(B.Fi,A.d(m,n,n,n,n,n,n,A.l(n,n,A.Z(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),n,n,n,n,n,n,n,n,12,n,n,B.a5,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n)],x.p),B.m,n,B.b9,B.j,0,B.p),p,n,B.bc,n,U.AX,n,n,n,n,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gbV9(),n,n,n,n,n,n,!1,B.a7))}if(B.d.t(D.Qe,m)&&o.aO!=null){m=o.a.e
w=o.aO
w.toString
return C.hZI(m,new C.daP(o),new C.daQ(o),o.d,w)}m=o.r
m===$&&A.c()
return A.av(A.d(m,n,n,n,n,n,n,B.dp,n,n,n),n,n,n)}}
C.alB.prototype={
T(){return new C.bfZ()},
cQP(d,e,f,g){return this.f.$4(d,e,f,g)}}
C.bfZ.prototype={
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.a,a0=d.c,a1=d.d
d=A.aI(a2,B.e9,x.w).w
w=x.p
v=A.a([A.bNN(!1,f.a.r,"INVESTMENT PLANS",e),B.d7],w)
u=a0.x
if(u!=null){t=u.d.bT()
s=B.a.aU(B.o.u(A.bH(t)),2,"0")
r=B.a.b3(B.o.u(A.bA(t)+1),2)
q=A.m(18)
p=A.I(W.Xb,B.q,2.2)
o=x.V
n=A.a([new A.ac(0,B.G,A.Z(89,B.qO.l()>>>16&255,B.qO.l()>>>8&255,B.qO.l()&255),B.eV,20),new A.ac(0,B.G,A.Z(102,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dn,14)],o)
m=A.ao(e,A.p(e,e,B.f,e,e,new A.o(A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),e,e,e,e,e,B.a6),e,120,e,e,e,e,e,120),e,e,e,-20,-24,e)
l=A.m(10)
k=A.I(W.Xb,B.q,3.4)
o=A.a([new A.ac(0,B.G,A.Z(166,B.qO.l()>>>16&255,B.qO.l()>>>8&255,B.qO.l()&255),B.dE,10),new A.ac(0,B.G,A.Z(89,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cJ,6)],o)
o=A.B(A.a([A.p(e,e,B.f,e,e,new A.o(e,e,k,l,o,new A.a8(B.ax,B.aC,B.x,D.d2Z,D.cFQ,e),B.n),e,42,e,e,e,e,e,56),B.b7,f.b6t(a2,!0)],w),B.m,e,B.e,B.j,0,e,e)
l=A.Dk(u.a,1,B.a2,D.f96)
k=u.b
j=u.c
i=A.Dk("Making $"+A.dB(k*j)+" Daily",1,B.a2,D.f9j)
h=A.Dk(f.b1m(k),1,B.a2,D.f2r)
r=A.B(A.a([A.E(A.w(A.a([D.foM,A.Dk(a0.c,1,B.a2,D.aQm)],w),B.F,e,B.e,B.j,0,B.p),1),A.w(A.a([D.foy,A.d(s+"/"+r,e,e,e,e,e,e,D.aQm,e,e,e)],w),B.dA,e,B.e,B.j,0,B.p)],w),B.m,e,B.e,B.j,0,e,e)
s=A.p(e,e,B.f,A.Z(89,D.xa.l()>>>16&255,D.xa.l()>>>8&255,D.xa.l()&255),e,e,e,1,e,e,e,e,e,e)
j=A.B(A.a([f.aqC("INVESTED","$"+A.dB(k),!0),f.aqC("DAILY ROI",B.k.ab(j*100,2)+"%",!0),f.aqC("DAYS LEFT",""+(261-u.f)+" d",!0)],w),B.m,e,B.hC,B.j,0,e,e)
k=A.dB(u.e)
u=u.f
g=261-u>0?"ACTIVE":"ENDED"
B.d.v(v,A.a([D.fva,B.uH,A.p(e,new A.an(B.W,e,B.aa,B.r,A.a([m,A.w(A.a([o,B.N,D.fna,B.bD,l,B.at,i,B.at,h,B.N,r,B.am,s,B.am,j,B.at,A.Dk("Earned $"+k+" \u2022 Clocked "+u+"/261 \u2022 "+g,1,B.a2,D.f8u)],w),B.F,e,B.e,B.P,0,B.p)],w),e),B.f,e,e,new A.o(e,e,p,q,n,D.bWT,B.n),e,e,e,e,B.bB,e,e,1/0),B.a75],w))}v.push(D.ffc)
v.push(B.uH)
B.d.v(v,new A.M(a1,new C.dfc(f,a2),A.U(a1).k("M<1,r>")))
return A.c7(e,B.K,A.bm(!1,A.c9(A.w(v,B.F,e,B.e,B.j,0,B.p),B.r,e,B.y,e,new A.Q(20,10,20,124+d.r.d),e,e,B.ag),!0,!1,B.af,!0,!0),e,!1,!1,e,e)},
b6t(d,e){var w=null,v=A.Z(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(8),t=A.I(B.jh,B.q,1)
return A.p(w,A.B(A.a([A.X(B.akW,B.c,w,w,w,16),B.db,A.d("TAP",w,w,w,w,w,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,10,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.P,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eC,w,w,w)},
b1m(d){var w=B.a.aU(B.o.u(B.k.V(d*100)),4,"0")
return"****  ****  ****  "+B.a.b3(w,w.length-4)},
aqC(d,e,f){var w=null,v=A.Z(217,D.xa.l()>>>16&255,D.xa.l()>>>8&255,D.xa.l()&255)
v=A.d(d,w,w,w,w,w,w,A.l(w,w,v,w,w,w,w,w,w,w,w,8,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.w(A.a([v,B.bD,A.Dk(e,w,w,A.l(w,w,E.AH,w,w,w,w,w,w,w,w,11,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w))],x.p),B.F,w,B.e,B.j,0,B.p)},
ciu(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a,a1=a0.c,a2=a1.gcVi(),a3=b3.b,a4=a3*0.0286,a5=a1.x,a6=a5!=null,a7=a6&&261-a5.f<=0,a8=a6&&!a7,a9=a8&&a5.a===b3.a&&a3===a5.b,b0=a8&&a3>a5.b,b1=a8&&a3<a5.b
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
w=A.I(B.aQ,B.q,2)
p=x.V
o=A.a([new A.ac(0,B.G,A.Z(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.S2,16),new A.ac(0,B.G,A.Z(115,B.ak.l()>>>16&255,B.ak.l()>>>8&255,B.ak.l()&255),B.dn,14),new A.ac(0,B.G,A.Z(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.cJ,8)],p)
n=A.ao(d,A.p(d,d,B.f,d,d,new A.o(d,d,d,d,d,new A.bT(B.A,0.5,B.x,d,0,A.a([A.Z(89,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),A.Z(0,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)],x.O),d,d),B.a6),d,110,d,d,d,d,d,110),d,d,d,-28,-32,d)
m=A.m(5)
l=A.I(B.c,B.q,2.2)
k=A.b0(4286436348)
k=A.Z(242,k.l()>>>16&255,k.l()>>>8&255,k.l()&255)
j=A.Z(B.k.V(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
i=A.b0(4279150057)
h=x.p
p=A.B(A.a([new A.a7(44,44,new A.an(B.W,d,B.aa,B.f,A.a([A.ao(d,A.eH(B.A,0.7853981633974483,A.p(d,d,B.f,d,d,new A.o(d,d,l,m,A.a([new A.ac(0.5,B.G,k,B.J,14),new A.ac(0,B.G,j,B.J,6),new A.ac(0,B.G,A.Z(140,i.l()>>>16&255,i.l()>>>8&255,i.l()&255),new A.u(0,2),4)],p),D.bVv,B.n),d,30,d,d,d,d,d,30),d),d,d,2,d,4,d),D.ef2],h),d),d),B.b7,e.b6t(b2,!0)],h),B.m,d,B.e,B.j,0,d,d)
a6=A.Dk(a6,1,B.a2,D.f_a)
i=A.Dk(e.b1m(a3),1,B.a2,D.fdz)
j=A.B(A.a([e.b0O(B.k.ab(2.86,2)+"%"),B.ec,e.b0O("261d")],h),B.m,d,B.e,B.j,0,d,d)
k=A.E(A.w(A.a([D.fgs,A.Dk("$"+A.dB(a3),1,B.a2,D.fcm)],h),B.F,d,B.e,B.j,0,B.p),1)
if(a9)m="ACTIVE"
else m=b0?"UPGRADE":"AVAILABLE"
m=A.B(A.a([k,A.d(m,d,d,d,d,d,d,D.f_X,d,d,d)],h),B.dA,d,B.e,B.j,0,d,d)
k=A.p(d,d,B.f,A.Z(89,B.br.l()>>>16&255,B.br.l()>>>8&255,B.br.l()&255),d,d,d,1,d,d,d,d,d,d)
l=A.B(A.a([A.E(e.axU("Daily","$"+A.dB(a4)),1),B.ec,A.E(e.axU("Total","$"+A.dB(a4*261)),1),B.ec,A.E(e.axU("Days","261"),1)],h),B.m,d,B.e,B.j,0,d,d)
g=q?d:new C.dfb(e,b3,a3,t)
f=B.k.V(127.5)
f=A.fn(d,d,B.bo,A.Z(f,B.ak.l()>>>16&255,B.ak.l()>>>8&255,B.ak.l()&255),A.Z(f,B.aL.l()>>>16&255,B.aL.l()>>>8&255,B.aL.l()&255),d,3,d,d,B.aQ,d,d,d,d,new A.b7(A.m(10),D.aYo),d,d,d,d,d)
return A.p(d,new A.an(B.W,d,B.aa,B.f,A.a([n,A.w(A.a([p,B.bD,D.fpu,B.bD,a6,B.cS,i,B.h1,j,B.h1,m,B.h1,k,B.h1,l,B.N,new A.a7(1/0,40,A.ih(A.f6(B.A,A.d(e.a.e?"PROCESSING...":r.toUpperCase(),d,d,d,d,d,d,D.f0m,d,d,d),B.f,B.ei),g,f),d)],h),B.F,d,B.e,B.P,0,B.p)],h),d),B.f,d,d,new A.o(d,d,w,a0,o,D.bXr,B.n),d,d,d,B.kU,D.brA,d,d,1/0)},
b0O(d){var w=null,v=A.Z(115,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(5),t=A.I(B.cr,B.q,1)
return A.p(w,A.d(d,w,w,w,w,w,w,D.f_z,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.Fz,w,w,w)},
axU(d,e){var w=null,v=A.Z(97,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),u=A.m(7),t=A.I(B.aL,B.q,1)
return A.p(w,A.w(A.a([A.d(d,w,w,w,w,w,w,D.f8S,w,w,w),B.uI,A.f6(B.a3,A.d(e,w,w,w,w,w,w,D.fbq,w,w,w),B.f,B.du)],x.p),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.lS,w,w,w)}}
C.ahY.prototype={
T(){var w=null,v=A.a([],x._),u=$.aw()
return new C.awU(v,new A.as(B.as,u),new A.as(B.as,u),A.mA(0,w,w),new A.hZ(),D.Rv,C.agJ(),A.a([],x.fw),A.aX(x.N),A.mA(0,w,w))}}
C.awU.prototype={
a_(){var w,v,u,t,s,r=this
r.a1()
w=r.a
w.toString
r.d=0
v=A.zu(0,1)
r.e!==$&&A.aP()
r.e=v
r.ay=w.f.aE
w=r.k3=A.bo(w.e,!0,x.gS)
for(v=w.length,u=r.k4,t=0;t<w.length;w.length===v||(0,A.K)(w),++t){s=w[t].a
if(s.length!==0)u.L(0,s)}r.abW()
r.OG()
r.aqe()
r.cvq()
r.cvG()
$.aW.x1$.push(new C.cCB(r))
r.a.toString},
OG(){var w=0,v=A.j(x.H),u,t=this,s
var $async$OG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.apB(),$async$OG)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cBW(t,s))
case 1:return A.h(u,v)}})
return A.i($async$OG,v)},
gazz(){var w=this,v=w.a
if(v.c.w)return w.cx
if(v.f.xr>0&&w.ch===0)return!0
if(w.cy&&!w.gOC())return!0
return!1},
gOC(){var w=this.a
if(w.c.w)return!1
return w.f.xr>0&&this.ch===0},
gaUK(){var w,v=this.CW
if(v==null)return B.bx
w=v.bE(new A.S(Date.now(),0,!1))
return w.a<0?B.bx:w},
bAz(){var w=this
if(w.a.c.w)return
if(w.gOC()){if(!w.cx)w.m(new C.cBM(w))}else if(w.cx)w.m(new C.cBN(w))},
coJ(){this.m(new C.cC5(this))},
tU(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$tU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.c
if(o.w){if(t.c!=null)t.m(new C.cC2(t))
w=1
break}s=p.f.xr
if(s<=0){if(t.c!=null)t.m(new C.cC3(t))
w=1
break}w=3
return A.b(C.c8Q(o.a,s),$async$tU)
case 3:r=e
w=r===0?4:6
break
case 4:w=7
return A.b(C.c8R(t.a.c.a,s),$async$tU)
case 7:w=5
break
case 6:e=null
case 5:q=e
if(t.c!=null){t.m(new C.cC4(t,r,q))
t.cxu()
t.bAz()
if(r===3)t.Yx(r)}case 1:return A.h(u,v)}})
return A.i($async$tU,v)},
Yx(d){return this.c1t(d)},
c1t(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Yx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=t.c
if(q==null||t.a.c.w){w=1
break}s=t.a
r=s.f.xr
if(r<=0||d!==3){w=1
break}w=3
return A.b(C.bD0(q,r,new C.cBY(t),d,s.c.a),$async$Yx)
case 3:case 1:return A.h(u,v)}})
return A.i($async$Yx,v)},
xm(d){return this.bC4(d)},
aqe(){return this.xm(!1)},
bC4(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m={}
l=t.a
k=l.c.a
w=3
return A.b(A.a7H(k,C.hoe(l.d)),$async$xm)
case 3:j=m
w=4
return A.b(C.c9f(k),$async$xm)
case 4:s=j.a=f
w=5
return A.b(A.aqp(k),$async$xm)
case 5:r=f
w=!s.a&&J.cI(r)?6:7
break
case 6:l=s.b
q=s.c
p=s.d
s=new C.V4(!0,l,q,p)
m.a=s
w=8
return A.b(C.apD(k,s),$async$xm)
case 8:case 7:w=9
return A.b(C.U4(k),$async$xm)
case 9:o=f
w=10
return A.b(C.a72(k),$async$xm)
case 10:n=f
if(t.c==null){w=1
break}t.m(new C.cBO(m,t,r,o,n))
case 1:return A.h(u,v)}})
return A.i($async$xm,v)},
PY(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$PY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.OG(),$async$PY)
case 3:s=t.c
if(s==null){w=1
break}r=A.e8(new C.cC0(t),!1,null,x.H)
w=4
return A.b(A.a6(s,!1).ck(r),$async$PY)
case 4:w=5
return A.b(t.OG(),$async$PY)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PY,v)},
czA(){this.m(new C.cCo(this))},
cvG(){var w=this,v=w.go
if(v!=null)v.a6(0)
if(w.a.c.w)return
w.go=A.dt(B.r4,new C.cCi(w))},
cxu(){var w=this,v=w.id
if(v!=null)v.a6(0)
w.id=null
if(!w.gOC()||w.CW==null)return
w.id=A.dt(B.fV,new C.cCl(w))},
cvq(){var w=this,v=w.fy
if(v!=null)v.a6(0)
w.fy=A.dt(B.jl,new C.cCh(w))
w.F7()},
F7(){return this.cxt()},
cxt(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$F7=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i={}
i.a=r.a.f.aE
t=4
w=7
return A.b(A.az(),$async$F7)
case 7:q=e
p=A.aU(J.q(q.a,"app_config"))
if(p!=null&&p.length!==0){o=B.S.aI(0,p,null)
if(x.f.b(o)){m=A.D4(A.a2(o,x.N,x.z)).aE
i.a=m
r.a.f.aE=m}}w=10
return A.b(A.KX(),$async$F7)
case 10:w=e?8:9
break
case 8:w=11
return A.b(A.aOW(),$async$F7)
case 11:n=e
w=n!=null?12:13
break
case 12:l=n
i.a=l
k=r.a.f
k.aE=l
w=14
return A.b(q.ar("String","app_config",B.S.ao(k.ag(),null)),$async$F7)
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
break}if(i.a!==r.ay)r.m(new C.cCj(i,r))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$F7,v)},
b5j(){B.d.b0(this.f,new C.cCg())},
abW(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$abW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.MN(t.a.c.a),$async$abW)
case 3:q=e
if(t.c==null){w=1
break}s=A.a([],x._)
if(J.cI(q)){B.d.v(s,q)
B.d.b0(s,new C.cBT())}else{r=t.a.c.w?"Good to see you, Sir. I am your NGMY personal assistant \u2014 ready to help with the platform, strategy, or anything personal including relationships. How may I serve you today, Boss?":"Hello! Ask me about investments, clock-in, withdrawals, the store, or anything about the platform."
s.push(A.F(["role","ai","text",r,"at",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.z))}t.m(new C.cBU(t,s))
t.a1i(!0)
A.bN(B.jk,new C.cBV(t),x.H)
case 1:return A.h(u,v)}})
return A.i($async$abW,v)},
aft(){var w=0,v=A.j(x.H),u=this
var $async$aft=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.anp(u.a.c.a,u.f),$async$aft)
case 2:return A.h(null,v)}})
return A.i($async$aft,v)},
bu(d){this.bG(d)},
q(){var w,v=this,u=v.fy
if(u!=null)u.a6(0)
u=v.go
if(u!=null)u.a6(0)
u=v.id
if(u!=null)u.a6(0)
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
aaV(d){var w,v=this
v.m(new C.cBR(v,d))
w=v.e
w===$&&A.c()
if(w.f.length!==0)w.B4(d,B.ct,B.kT)
else $.aW.x1$.push(new C.cBS(v,d))
if(d===0)v.a1i(!0)
if(d===1)v.cqI(!0)},
a1i(d){$.aW.x1$.push(new C.cC8(this,d))},
azb(){return this.a1i(!1)},
a0C(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0C=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0S(),$async$a0C)
case 3:s=e
if(t.c==null){w=1
break}if(s.length!==0&&s!==B.a.i(t.a.f.r))t.m(new C.cC1(t))
case 1:return A.h(u,v)}})
return A.i($async$a0C,v)},
n0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
var $async$n0=A.e(function(c8,c9){if(c8===1){s.push(c9)
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
return A.b(C.apw(a9.a,b0),$async$n0)
case 9:w=!c9?7:8
break
case 7:if(q.c==null){w=1
break}w=10
return A.b(q.tU(),$async$n0)
case 10:q.m(new C.cC9(q))
w=1
break
case 8:w=11
return A.b(q.tU(),$async$n0)
case 11:if(q.c!=null&&q.ch===3)q.Yx(3)
case 6:case 4:q.m(new C.cCa(q,c5))
C.TS(q.a.c.a,"user",c5)
q.azb()
t=13
a8={}
w=16
return A.b(q.a0C(),$async$n0)
case 16:b1=B.a.i(q.a.f.r)
a8.a=b1
w=b1.length===0?17:18
break
case 17:w=19
return A.b(A.a0S(),$async$n0)
case 19:b1=c9
a8.a=b1
if(b1.length!==0&&q.c!=null)q.m(new C.cCb(a8,q))
case 18:a9=a8.a
if(a9.length===0){p=L.bB6("",null)
q.m(new C.cCc(q,p))
C.TS(q.a.c.a,"ai",p)
q.azb()
r=[1]
w=14
break}o=A.n5(a9)
a9=q.a
n=""
m=C.hoe(a9.d)
w=C.ho7(c5)?20:21
break
case 20:w=22
return A.b(C.c9e(q.a.c.a),$async$n0)
case 22:q.db=c9
w=23
return A.b(q.xm(!0),$async$n0)
case 23:case 21:w=24
return A.b(A.a7H(q.a.c.a,m),$async$n0)
case 24:l=c9
k=C.hG5(l)
a9=k
b2=Date.now()
b3=new A.S(b2,0,!1).bT()
b2=B.a.aU(B.o.u(A.bH(b3)),2,"0")
b4=B.a.aU(B.o.u(A.bR(b3)),2,"0")
b5=B.a.aU(B.o.u(A.dk(b3)),2,"0")
b6=B.a.aU(B.o.u(A.h0(b3)),2,"0")
j="PHONE INTEGRATIONS \u2014 You can open real apps on the user's phone. Use the person's NAME (not phone number) when they say a name \u2014 the app looks up contacts automatically.\n\n"+(a9.length!==0?a9+"\n":"")+"\nToday is "+(""+A.bA(b3)+"-"+b2+"-"+b4+" "+b5+":"+b6+" (user local time)")+'.\n\nWhen the user asks to call, text, WhatsApp, iMessage, calendar, maps, email, or open a link, reply in plain language first, then append:\n\n[[NGMY_PHONE_ACTIONS]]\n[{"type":"call","name":"Mom"}]\n[[/NGMY_PHONE_ACTIONS]]\n\nAction types (JSON array):\n- calendar \u2014 title, start (ISO local), end (optional), notes, location\n- alarm \u2014 title, start (ISO local wake time), notes (optional) \u2014 sets alarm on the user\'s phone (notification or Clock); never tell user to keep NGMY open\n- open_tool \u2014 tool (spark_lounge, video_studio, phone_unlock, swahili_school, recorder_studio, qr_generator, quote_calc, doc_share) \u2014 opens that NGMY tool inside the app\n- call \u2014 name (preferred) OR phone\n- sms \u2014 name OR phone, body (optional) \u2014 opens iMessage/Messages on iPhone\n- whatsapp \u2014 name OR phone, body (optional)\n- maps \u2014 query or address\n- email \u2014 to (email or name if in contacts), subject, body\n- messenger \u2014 url OR username OR page; opens Messenger/Facebook chat when a public link/username is known\n- facebook \u2014 url OR username OR page; opens Facebook page/profile/feed when a public link/username is known\n- instagram \u2014 url OR username; opens Instagram profile/app when a public link/username is known\n- telegram \u2014 url OR username; opens Telegram when a public link/username is known\n- open_url \u2014 url\n\nRules:\n- When user says "call Mom" or "text John on WhatsApp", use "name" \u2014 NEVER invent phone numbers.\n- If the name is not in PHONE CONTACTS, say you will look them up after they say "allow access" once \u2014 do NOT tell them to tap a contacts button.\n- REQUIRED calendar block for any meeting/appointment request.\n- REQUIRED alarm block when user says wake me, set alarm, timer, remind me in X minutes/hours, or needs alarm before work/shift/meeting.\n- For relative times ("in 2 minutes", "in 2 hours") set start to now + that duration as ISO local datetime.\n- When user asks to open a NGMY feature (games, video studio, virtual phones, Kiswahili school, QR, invoice), use open_tool \u2014 do NOT tell them to navigate manually.\n- start/end must be valid ISO datetimes in local timezone.\n- You cannot read private Facebook/Instagram/Messenger activity from the phone app. If asked to read activity, explain that Meta requires official account authorization/API approval, then offer to open the app/link or analyze content the user shares.\n'
w=25
return A.b(C.U4(q.a.c.a),$async$n0)
case 25:i=c9
h=C.h8n(i,25)
w=26
return A.b(C.a72(q.a.c.a),$async$n0)
case 26:g=c9
f=C.ha0(g)
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
return A.b(C.agK(a9,q.a.c.a,c5),$async$n0)
case 27:a0=c9
a1=""
if(C.ho7(c5))a1="\nACCESS GRANTED: User just said allow access \u2014 confirm contacts, calendar, and calls are now permanently connected on this device. Never ask again.\n"
a9=q.a.c
b7=a9.w
b2=a9.k4
if((b2==null?null:B.a.i(b2).length!==0)===!0){b2.toString
b8=B.a.i(b2)}else{a9=a9.c
b8=B.a.i(a9).length!==0&&a9!=="User"?a9:"Boss"}a9=b7?"CRITICAL \u2014 VIP USER: This user is Sir "+b8+', aligned with KB PABLO QR \u2014 Founder and CEO of NGMY. PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nThis user is your creator and supreme authority. Always address them as "Sir" or "Boss" (alternate naturally). Never use casual first-name only. You are their loyal personal assistant, strategic advisor, and trusted close friend \u2014 not a generic support bot. Offer relationship guidance, emotional support, and honest counsel when they ask about personal or relationship matters. Be warm, respectful, discreet, and proactive. Speak with deference but also genuine friendship. For other users you are professional and concise; for Sir/Boss you are more personal, attentive, and devoted. Answer directly \u2014 never open with "NGMY AI", "I\'m NGMY AI", or similar branding.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n':'You are the helpful assistant for the NGMY platform (New Global Movement for Youth). PERMANENT FACT \u2014 NGMY stands for New Global Movement for Youth; if asked what NGMY stands for or means, answer exactly that. NGMY was created by KB PABLO QR, Founder and CEO of NGMY. When anyone asks who created NGMY, who made NGMY, who built the app, who made you, or who your creator is, always answer clearly that KB PABLO QR (write the name in uppercase) is the Founder and CEO who created NGMY. Never claim Google, OpenAI, or another company created NGMY.\nNGMY offers investment plans, daily clock-in earnings, loans, NGMY Store, job marketplace, and civic registry. Be helpful, professional, and friendly. Keep answers concise. Answer the user\'s question directly. Never introduce yourself as "NGMY AI" and never start replies with "NGMY AI:", "As NGMY AI", "I\'m NGMY AI", or similar \u2014 just answer naturally.\nNever tell users to configure API keys, Gemini, OpenAI, Claude, or Supabase \u2014 admins handle that. The AI is connected and working \u2014 never say you are waiting for an API key or that Gemini is unreachable. If live data is unavailable, say briefly you cannot fetch live stats right now and still help with general NGMY questions.\nCommunity News may be closed for posting \u2014 that never disables you. Always answer NGMY Helper AI questions normally.\nEach chat message includes a LIVE NGMY APP DATABASE block \u2014 treat it as real-time truth for menus, wallet pending counts, and app state.\nAdmins can ask you to send direct emails to users through NGMY (send_email). Regular users cannot.\nWrite like a real, warm person talking to a friend: short plain sentences, everyday words, no robotic or corporate phrasing and no made-up or rare words. Explain the civic registry and any other NGMY topic the way a neighbour would. In Swahili, use the everyday Swahili people speak in Kenya and Tanzania, with natural word order and no English words forced into Swahili grammar.\n'
b2=A.t(d)
b4=A.t(j)
b5=q.a.c.w?"\n"+C.i1v(m)+"\n":""
b6=J.ad(n)!==0?"\n"+A.t(n)+"\n":""
b9=J.ad(a0)!==0?"\n"+A.t(a0)+"\n":""
c0=A.t(a1)
c1=q.f
c1=c1.length!==0?"\n"+C.hAq(c1)+"\n":""
a2=a9+"\n"+b2+"\n\n"+b4+"\n"+b5+b6+b9+c0+c1+"\nUser: "+A.t(c5)
w=28
return A.b(A.qP(o,a2,B.hB,null,null),$async$n0)
case 28:a3=c9
if(q.c==null){r=[1]
w=14
break}if(a3.b!=null&&a3.b.length!==0){a9=a3.b
a9.toString
c2=a9}else c2=L.bB6(a8.a,a3.a)
a4=c2
a5=A.hnu(a4)
c3=a5.a
a8.b=c3
if(B.d.gam(c3)){a9=A.C(C.i4d(c5),x.an)
a6=a9
J.h3(a6,C.i4e(c5))
J.h3(a6,C.i4f(c5))
J.h3(a6,A.hmW(c5))
J.h3(a6,C.i4i(c5,q.a.c.w))
a8.b=a6}c3=C.i3r(a8.b,q.a.c.w)
a8.b=c3
a6=q.c
a6.toString
c7=a8
w=29
return A.b(A.ah0(c3,a6,m,q.a.c.a),$async$n0)
case 29:c7.b=c9
a7=a5.b.length!==0?a5.b:a4
q.m(new C.cCd(a8,q,a7))
C.TS(q.a.c.a,"ai",a7)
if(J.cI(a8.b)&&q.c!=null)q.JI(a8.b)
r.push(15)
w=14
break
case 13:t=12
c6=s.pop()
q.m(new C.cCe(q))
C.TS(q.a.c.a,"ai",y.g)
r.push(15)
w=14
break
case 12:r=[2]
case 14:t=2
q.m(new C.cCf(q))
q.azb()
q.aft()
if(!q.a.c.w)q.tU()
w=r.pop()
break
case 15:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$n0,v)},
cht(d){var w=A.T(x.N,x.z)
w.n(0,"type",d.a)
w.v(0,d.b)
return w},
chu(d){var w,v,u,t,s,r,q,p=J.q(d,"phoneActions")
if(!x.j.b(p))return B.il
w=A.a([],x.Z)
for(v=J.aV(p),u=x.f,t=x.N,s=x.z;v.C();){r=v.gR(v)
if(u.b(r)){q=A.ccm(A.a2(r,t,s))
if(q!=null)w.push(q)}}return w},
JI(d){return this.cpf(d)},
cpf(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$JI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J.aV(d),r=x.q,q=x.x
case 3:if(!s.C()){w=4
break}p=s.gR(s)
o=t.c
if(o==null){w=1
break}n=p.a
w=n==="calendar"?5:6
break
case 5:w=7
return A.b(C.agW(p,o,new C.cC6(t,p)),$async$JI)
case 7:w=3
break
case 6:w=n==="alarm"?8:9
break
case 8:w=10
return A.b(A.Gz(p,null,o,!1,!0,t.a.c.a),$async$JI)
case 10:m=f
p=t.c
if(p==null||m==null){w=3
break}p=p.J(r).f
p.U(new A.b1(new A.y(m,null,null,null,null,null,null,null,null,null,null,null),B.cg,null,null,null,null,null,null,null,null,null,null,null,B.lk,!1,null,null,null,B.r,null))
w=3
break
case 9:l=t.a
k=l.c
j=k.a
i=n==="call"
n=i||n==="sms"||n==="whatsapp"
k=k.w
w=11
return A.b(A.Gz(p,l.f,o,k,n,j),$async$JI)
case 11:m=f
if(t.c==null||m==null){w=3
break}w=i?12:13
break
case 12:p=p.b
o=J.a4(p)
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
return A.b(C.aXY(p,A.a([new C.rl("out_"+1000*o,new A.S(n,0,!1),l,k,"Outgoing call via NGMY",null,"ngmy")],q)),$async$JI)
case 14:t.aqe()
case 13:p=t.c.J(r).f
p.U(new A.b1(new A.y(m,null,null,null,null,null,null,null,null,null,null,null),B.cZ,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null))
w=3
break
case 4:case 1:return A.h(u,v)}})
return A.i($async$JI,v)},
RI(d){return this.cxX(d)},
cxX(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$RI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=d.a
w=n==="calendar"?3:4
break
case 3:n=t.c
n.toString
w=5
return A.b(C.agW(d,n,new C.cCn(t)),$async$RI)
case 5:w=1
break
case 4:w=n==="alarm"?6:7
break
case 6:n=t.c
n.toString
w=8
return A.b(A.Gz(d,null,n,!1,!0,t.a.c.a),$async$RI)
case 8:s=f
n=t.c
if(n==null||s==null){w=1
break}n.J(x.q).f.U(A.b2(null,null,null,B.cg,null,B.r,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.lk,null,null,null,null,null,null,null,null,null,null))
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
return A.b(A.Gz(d,q.f,r,p,n,o),$async$RI)
case 9:s=f
n=t.c
if(n==null||s==null){w=1
break}n.J(x.q).f.U(A.b2(null,null,null,B.cZ,null,B.r,null,A.d(s,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$RI,v)},
cqI(d){$.aW.x1$.push(new C.cC7(this,!0))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.P(d).ax.a===B.I,j=k?B.da:B.AM,i=m.d
i===$&&A.c()
w=x.O
w=k?A.a([B.afx,D.bcV],w):A.a([B.aJ,B.x6],w)
v=A.m(22)
u=A.a([new A.ac(0,B.G,A.Z(71,B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255),B.cz,16)],x.V)
t=m.a.c.w?m.gcd6():l
s=A.Z(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
r=A.I(B.c0,B.q,1.5)
t=A.aC(l,A.p(l,C.fZa(m.a.f.Q,48),B.f,l,l,new A.o(s,l,r,l,l,l,B.a6),l,48,l,l,l,l,l,48),B.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,t,l,l,l,l,l,l,!1,B.a7)
r=A.d("NGMY Helper",l,1,B.a2,l,l,l,B.dj,l,l,l)
s=A.p(l,l,B.f,l,l,D.b_v,l,8,l,l,l,l,l,8)
if(m.gazz()&&m.d===0)q=m.gOC()?"Help Topics \u2022 AI returns when your 24h limit resets":"Help Topics \u2022 Instant answers"
else{q=m.a
if(q.c.w)q="Your AI \xb7 Online"
else q=q.f.xr>0&&m.ch>=0?"Online \u2022 "+m.ch+" messages left today":"Online \u2022 Just tell me what you need"}p=x.p
w=A.p(l,A.B(A.a([t,B.bd,A.E(A.w(A.a([r,B.bD,A.B(A.a([s,B.bp,A.E(A.d(q,l,1,B.a2,l,l,l,A.l(l,l,A.Z(B.k.V(229.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),l,l,l,l,l,l,l,l,11,l,l,B.cw,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,B.mC,l,l,l,new C.cCt(d),l,l,l,l,l,l)],p),B.m,l,B.e,B.j,0,l,l),B.f,l,l,new A.o(l,l,l,v,u,new A.a8(B.ax,B.aC,B.x,w,l,l),B.n),l,l,l,F.ahn,D.bsg,l,l,l)
v=k?D.tf:B.c
u=A.m(14)
t=A.I(k?B.bE:B.e2,B.q,1)
u=A.p(l,A.B(A.a([m.bEO(),m.cxG(1,B.lU,"Music")],p),B.m,l,B.e,B.j,0,l,l),B.f,l,l,new A.o(v,l,t,u,l,l,B.n),l,l,l,l,B.ek,l,l,l)
t=m.e
t===$&&A.c()
if(m.gazz()){v=A.a([],p)
if(m.gOC()){s=A.Z(38,B.cZ.l()>>>16&255,B.cZ.l()>>>8&255,B.cZ.l()&255)
r=A.m(12)
q=A.I(A.Z(115,B.cZ.l()>>>16&255,B.cZ.l()>>>8&255,B.cZ.l()&255),B.q,1)
v.push(new A.D(B.Md,A.p(l,A.d(m.CW!=null?"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks in "+C.hEn(m.gaUK())+".":"Daily AI limit reached \u2014 browse Help Topics below. AI chat unlocks automatically after 24 hours.",l,l,l,l,l,l,D.faV,B.L,l,l),B.f,l,l,new A.o(s,l,q,r,l,l,B.n),l,l,l,l,B.ej,l,l,1/0),l))}if(m.cy&&!m.gOC()){s=A.Z(31,B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255)
r=A.m(12)
q=A.m(12)
o=A.X(B.pX,k?B.iY:B.hk,l,l,l,16)
v.push(new A.D(B.Md,A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,new A.D(B.ej,A.B(A.a([o,B.bp,A.d("Back to NGMY Helper AI",l,l,l,l,l,l,A.l(l,l,k?B.iY:B.hk,l,l,l,l,l,l,l,l,12,l,l,B.O,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p),B.m,l,B.b9,B.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.gcoI(),l,l,l,l,l,l,l),B.f,s,0,l,l,l,l,l,B.ah),l))}s=m.fx
r=m.a
q=r.f.Q
r=r.c.w
o=r?m.gczz():l
v.push(A.E(new C.apz(s,q,new C.cCu(),r,o,l),1))
v=A.w(v,B.m,l,B.e,B.j,0,B.p)}else v=m.bEP(k,j)
s=m.a
r=s.f
q=r.r
s=s.c
o=s.a
n=m.at
s=s.w?0:C.haV(r)
t=A.a([w,B.ac,new A.D(B.hO,u,l),B.N,A.E(A.hbU(A.a([v,new C.apC(q,o,n,new C.cCv(m,d),s,l)],p),B.r,t,B.y,new C.cCw(m),l),1)],p)
if(m.d===0&&!m.gazz()){w=A.a([],p)
if(m.ax&&m.f.length<=1){v=m.a.c.w?D.a2D:D.a1Y
w.push(new A.a7(l,36,A.hK(l,new C.cCx(m),v.length,l,l,B.aO,new C.cCy(),!1),l))}if(m.ax&&m.f.length<=1)w.push(B.N)
v=m.r
u=A.l(l,l,k?B.c:B.bj,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
s=A.l(l,l,k?B.aA:B.dB,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
r=k?B.w:B.c
r=A.Z(64,r.l()>>>16&255,r.l()>>>8&255,r.l()&255)
q=A.m(22)
o=A.m(22)
n=k?B.b0:B.fe
u=A.E(A.aM(l,B.T,!1,l,!0,B.r,l,A.aN(),v,l,l,l,l,l,2,A.bs(l,new A.b4(4,q,B.Y),l,B.B6,l,l,l,l,!0,new A.b4(4,o,new A.ay(n,1,B.q,-1)),l,l,l,l,l,r,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,s,"Type a message\u2026",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.y,!0,l,!0,l,!1,l,B.ai,l,l,l,l,l,l,l,l,l,4,1,l,!1,"\u2022",l,l,l,new C.cCz(m),l,!1,l,l,!1,l,!0,l,B.a9,l,l,l,l,l,l,l,l,l,l,l,u,!0,B.a4,l,B.an,l,B.aPf,l,l),1)
s=m.at
r=s?l:m.gcrK()
w.push(A.B(A.a([u,new A.II(v,B.aJ,l),B.bp,A.aF(!1,B.a1,!0,l,A.aL(!1,l,!0,new A.a7(44,44,s?D.e8u:P.amV,l),B.cL,!0,l,l,l,l,l,l,l,l,l,l,l,r,l,l,l,l,l,l,l),B.f,B.aJ,0,l,l,B.cL,l,l,B.ah)],p),B.dA,l,B.e,B.j,0,l,l))
w=A.w(w,B.m,l,B.e,B.P,0,B.p)
v=k?B.lg:B.c
t.push(A.tY(B.t3,A.p(l,new A.D(B.Fj,w,l),B.f,l,l,new A.o(v,l,A.I(k?A.Z(41,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Z(18,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.q,1),B.t3,l,l,B.n),l,l,l,l,l,l,l,l),14,!1))}return new A.VZ(i,new C.cCA(m),A.c7(l,j,A.bm(!0,A.w(t,B.m,l,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),l,!1,!1,l,l),l)},
bEO(){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===0
p=this.c
p.toString
v=A.P(p).ax.a===B.I
if(w)p=A.Z(B.k.V(255*(v?0.25:0.12)),B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255)
else p=B.K
u=A.m(11)
t=w?A.I(A.Z(B.k.V(127.5),B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255),B.q,1):q
s=A.X(B.tV,w?B.aJ:B.cV,q,q,q,17)
if(w)r=v?B.c:B.az
else r=B.cV
return A.E(A.aC(q,A.df(q,A.B(A.a([s,B.bp,A.d("Chat",q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.b9,B.j,0,q,q),q,q,B.bc,new A.o(p,q,t,u,q,q,B.n),B.eH,q,q,q,B.tH,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cBP(this),q,q,q,q,q,q,!1,B.a7),1)},
cxG(d,e,f){var w,v,u,t,s,r,q=null,p=this.d
p===$&&A.c()
w=p===d
p=this.c
p.toString
v=A.P(p).ax.a===B.I
if(w)p=A.Z(B.k.V(255*(v?0.25:0.12)),B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255)
else p=B.K
u=A.m(11)
t=w?A.I(A.Z(B.k.V(127.5),B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255),B.q,1):q
s=A.X(e,w?B.aJ:B.cV,q,q,q,17)
if(w)r=v?B.c:B.az
else r=B.cV
r=A.a([s,B.bp,A.d(f,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,12,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p)
return A.E(A.aC(q,A.df(q,A.B(r,B.m,q,B.b9,B.j,0,q,q),q,q,B.bc,new A.o(p,q,t,u,q,q,B.n),B.eH,q,q,q,B.tH,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.cCm(this,d),q,q,q,q,q,q,!1,B.a7),1)},
bEP(d,e){var w,v,u,t=this,s=null,r=t.f.length,q=r+(t.at?1:0)
r=d?D.bih:A.Z(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
w=A.m(18)
v=A.I(d?B.dm:B.aL,B.q,1)
u=q===0?1:q
return A.p(s,A.k8(!0,s,t.ok,new C.cBQ(t,e,d),u,s,B.bQ,s,s,!1,!1),B.f,s,s,new A.o(r,s,v,w,s,s,B.n),s,s,s,B.hO,s,s,s,s)},
aOe(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=J.a4(d),m=J.A(n.h(d,"role"),"user"),l=m?B.il:this.chu(d),k=m?B.m_:B.e,j=x.p,i=A.a([],j),h=!m
if(h)B.d.v(i,A.a([new A.a7(28,28,C.fZa(this.a.f.Q,28),o),B.ab],j))
w=m?B.dA:B.F
j=A.a([],j)
if(h)j.push(D.e8K)
if(f)v=""
else{v=n.h(d,"text")
v=J.k(v==null?"":v)}if(m)u=B.aJ
else u=e?B.Xm:B.aQ
t=m?16:4
s=m?4:16
if(m)r=o
else r=A.I(e?B.bE:B.aL,B.q,1)
q=A.a([new A.ac(0,B.G,A.Z(10,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.dE,6)],x.V)
if(f)n=A.d("typing\u2026",o,o,o,o,o,o,A.l(o,o,e?B.aA:B.dB,o,o,o,o,o,o,o,o,12,B.cF,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
else{n=n.h(d,"text")
if(m)p=B.c
else p=e?B.ad:B.bo
p=A.d(n,o,o,o,o,o,o,A.l(o,o,p,o,o,o,o,o,o,o,o,13,o,o,o,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o)
n=p}j.push(A.fVe(m,A.p(o,n,B.f,o,o,new A.o(u,o,r,new A.bp(B.l9,B.l9,new A.aT(t,t),new A.aT(s,s)),q,o,B.n),o,o,o,o,Ad.B5,o,o,o),v,o,o,o))
if(h&&l.length!==0)j.push(A.hnz(l,e,this.gcxW()))
i.push(new A.dq(1,B.co,A.w(j,w,o,B.e,B.j,0,B.p),o))
if(m)i.push(B.db)
return new A.D(B.d8,A.B(i,B.dA,o,k,B.j,0,o,o),o)},
bEN(d,e){return this.aOe(d,e,!1)}}
C.aJW.prototype={
a_(){this.a1()
$.yy().aP(0,this.gEm())},
q(){$.yy().a3(0,this.gEm())
this.a2()}}
C.aJX.prototype={
a_(){this.a1()
$.yy().aP(0,this.gEm())},
q(){$.yy().a3(0,this.gEm())
this.a2()}}
C.aJY.prototype={
a_(){this.a1()
$.yy().aP(0,this.gEm())},
q(){$.yy().a3(0,this.gEm())
this.a2()}}
C.aKU.prototype={
a_(){this.a1()
$.yy().aP(0,this.gEm())},
q(){$.yy().a3(0,this.gEm())
this.a2()}}
C.VO.prototype={
a5(){return"NgmySnapshotResolveOutcome."+this.b}}
C.an9.prototype={
T(){return new C.aBO()}}
C.aBO.prototype={
a_(){var w,v=this
v.a1()
w=v.a
v.d=w.d
v.e=A.bo(w.e,!0,x.o)
v.f=v.a.f},
kV(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
Ag(d,e){return this.cD5(d,e)},
cD5(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Ag=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dvJ(q,e))
t=3
w=6
return A.b(d.$0(),$async$Ag)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null)q.m(new C.dvK(q))
w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ag,v)},
AG(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$AG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=t.d
q===$&&A.c()
w=3
return A.b(A.uC(r,q),$async$AG)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dvA(t,s))
case 1:return A.h(u,v)}})
return A.i($async$AG,v)},
a9r(){var w=0,v=A.j(x.gE),u,t=this,s,r,q,p
var $async$a9r=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.AG(),$async$a9r)
case 3:if(t.c==null){u=null
w=1
break}s=t.a.c
r=t.d
r===$&&A.c()
q=t.e
q===$&&A.c()
p=t.f
p===$&&A.c()
u=A.NA(s,A.JO(A.bYH(r,q,s,p).eR(),null,"  "))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a9r,v)},
Xd(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Xd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.p5(s,t.a.c,!1),$async$Xd)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Ag(new C.dvy(t),"Preparing download\u2026"),$async$Xd)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xd,v)},
YI(){var w=0,v=A.j(x.H),u,t=this,s
var $async$YI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.p5(s,t.a.c,!1),$async$YI)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Ag(new C.dvI(t),"Creating QR code\u2026"),$async$YI)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YI,v)},
YH(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hXl(r),$async$YH)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Ag(new C.dvx(t,s),"Looking up code\u2026"),$async$YH)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YH,v)},
acM(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$acM=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.x5.c6().LU(B.Qz,B.tP,!0),$async$acM)
case 7:r=e
p=r
q=p==null?null:J.fp(p.a)
if(q==null){u=null
w=1
break}if(q.c!=null){p=q.c
p.toString
p=!B.aH.gam(p)}else p=!1
if(p){p=q.c
p.toString
p=A.jq(p,0,null)
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
case 6:u=A.Gv()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$acM,v)},
zV(d,e,f){return this.bH9(d,e,f)},
aPs(d,e){return this.zV(d,!1,e)},
bH8(d){return this.zV(d,!1,!1)},
bH9(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zV=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(t.AG(),$async$zV)
case 3:if(t.c==null){w=1
break}if(!C.bYM(d,t.a.c,null)){t.kV(C.bYN(t.a.c))
w=1
break}s=!1
if(!e)if(!f){s=t.f
s===$&&A.c()
s=!C.hA7(d,s)}if(s){t.kV(y.B)
w=1
break}r=d.as
q=J.cn(r)
s=t.c
s.toString
w=4
return A.b(C.hXy(s,q,t.a.c,d),$async$zV)
case 4:if(h!==!0){w=1
break}s=t.a.c
p=A.lJ(d.d,d.Q,!1,null,"",0,0,"",null,d.z,d.r,null,"",null,null,B.a.i(s.toLowerCase())+"+local.ngmy",!1,0,!1,0,null,0,null,null,!1,!1,!1,!1,!1,!1,!1,d.f,!1,d.w,d.x,"",null,null,null,null,0,null,"",null,null,null,"",0,null,null,0,"",null,null,"","","","Georgia","active",d.y,d.e,d.c)
if(q){o=t.e
o===$&&A.c()
r=o}w=5
return A.b(A.rp(s,p,r,!1,null,null,d.ax),$async$zV)
case 5:if(t.c==null){w=1
break}t.m(new C.dvw(t,p,r,d))
t.kV("Restored your local Growth Income. Go back to see it updated.")
case 1:return A.h(u,v)}})
return A.i($async$zV,v)},
acL(){var w=0,v=A.j(x.H),u=this
var $async$acL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Ag(new C.dvz(u),"Reading file\u2026"),$async$acL)
case 2:return A.h(null,v)}})
return A.i($async$acL,v)},
Wx(d){return this.bIq(d)},
bIq(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Wx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=Date.now()
q=t.d
q===$&&A.c()
s=new A.d4("local_qr_dep_"+1000*r,q.a,d,B.ft,B.fh,"Admin deposit ($"+A.dB(d)+")",null,null,B.cq,new A.S(Date.now(),0,!1))
C.cbg(t.d,s)
q=t.e
q===$&&A.c()
r=A.C(q,x.o)
r.push(s)
w=3
return A.b(A.rp(t.a.c,t.d,r,!0,null,null,null),$async$Wx)
case 3:w=4
return A.b(t.AG(),$async$Wx)
case 4:if(t.c==null){w=1
break}t.kV("Deposited $"+A.dB(d)+" to your local wallet.")
case 1:return A.h(u,v)}})
return A.i($async$Wx,v)},
b4I(d){var w=null
return A.cb(w,w,!0,w,new C.dvG(),d,w,!0,!0,x.N)},
VE(d){return this.bAt(d)},
bAt(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$VE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.a?3:4
break
case 3:w=5
return A.b(t.Wx(d.b),$async$VE)
case 5:w=1
break
case 4:s=d.c
t.kV(s==null?"Could not apply deposit.":s)
case 1:return A.h(u,v)}})
return A.i($async$VE,v)},
EH(d){return this.cmj(d)},
cmj(d){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o,n
var $async$EH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.AG(),$async$EH)
case 3:if(t.c==null){u=!0
w=1
break}w=4
return A.b(C.b_Q(d,t.a.c),$async$EH)
case 4:s=f
if(!s.a){u=!1
w=1
break}if(s.b){t.kV("This deposit code was already used.")
u=!0
w=1
break}if(s.d){t.kV(y.y)
u=!0
w=1
break}if(s.c){t.kV(y.j)
u=!0
w=1
break}r=t.c
if(r==null){u=!0
w=1
break}w=5
return A.b(t.b4I(r),$async$EH)
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
return A.b(C.cb9(d,o,n.a,r,p),$async$EH)
case 7:w=6
return A.b(t.VE(f),$async$EH)
case 6:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$EH,v)},
EI(d){return this.cmk(d)},
cmk(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$EI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(t.AG(),$async$EI)
case 3:if(t.c==null){w=1
break}w=4
return A.b(C.cb8(d,t.a.c),$async$EI)
case 4:s=f
if(!s.a){t.kV(y.m)
w=1
break}if(s.b){t.kV("This deposit code was already used.")
w=1
break}if(s.d){t.kV(y.y)
w=1
break}if(s.c){t.kV(y.j)
w=1
break}r=t.c
if(r==null){w=1
break}w=5
return A.b(t.b4I(r),$async$EI)
case 5:q=f
if(q==null||B.a.i(q).length===0){w=1
break}r=t.a.c
p=B.a.i(q)
o=t.e
o===$&&A.c()
n=t.d
n===$&&A.c()
w=7
return A.b(C.Vp(o,n.a,d,r,p),$async$EI)
case 7:w=6
return A.b(t.VE(f),$async$EI)
case 6:case 1:return A.h(u,v)}})
return A.i($async$EI,v)},
OV(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.CM()){t.kV("Use a phone camera to scan, or upload the backup file instead.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).ck(A.e8(new C.dvB(),!0,null,x.N)),$async$OV)
case 3:r=e
if(r==null||B.a.i(r).length===0){w=1
break}w=B.a.a0(B.a.i(r),"NGMYLOCALDEP1|")?4:5
break
case 4:w=6
return A.b(t.Ag(new C.dvC(t,r),"Applying deposit\u2026"),$async$OV)
case 6:w=1
break
case 5:w=7
return A.b(t.Ag(new C.dvD(t,r),"Loading\u2026"),$async$OV)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OV,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=n?B.jf:B.pI,l=n?B.c:B.M,k=n?B.aS:B.ak,j=n?B.bE:B.w.j(0.06),i=x.p
j=A.B(A.a([A.aL(!1,o,!0,A.p(B.A,A.X(B.eD,l,o,o,o,16),B.f,o,o,new A.o(j,o,o,o,o,o,B.a6),o,38,o,o,o,o,o,38),B.cL,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dvL(d),o,o,o,o,o,o,o)],i),B.m,o,B.e,B.j,0,o,o)
w=A.d("Backup & Restore",o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,28,o,o,B.u,o,o,!0,o,-0.5,o,o,o,o,o,o),o,o,o)
v=A.d("Keep a copy of your local Growth Income on this device, or bring your own backup back. You can only restore data from the same NGMY account \u2014 not someone else's.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,13.5,o,o,B.cw,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o)
u=p.r
t=A.E(new C.a0b(D.bEv,"Download",E.a2T,u?o:p.gbNJ(),o),1)
t=A.B(A.a([t,B.er,A.E(new C.a0b(B.js,"Show QR",D.dhR,u?o:p.gc38(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r
s=A.E(new C.a0b(D.bEw,"Upload",B.a2j,u?o:p.gc36(),o),1)
s=A.B(A.a([s,B.er,A.E(new C.a0b(B.j0,"Scan QR",D.cTB,u?o:p.gc37(),o),1)],i),B.m,o,B.e,B.j,0,o,o)
u=p.r?o:p.gc35()
r=n?B.c.j(0.06):B.aV.j(0.08)
q=A.m(16)
q=A.a([A.cw(A.a([j,B.aB,w,B.N,v,B.kF,t,B.aB,s,B.aB,new C.bri(B.ri,"Enter Code",B.a1D,u,o),B.kF,A.p(o,A.B(A.a([A.X(B.ha,B.aV,o,o,o,18),B.au,A.E(A.d("Download a file, show a QR, or get a 6-character code to save where you are now. Upload, scan, or type that code later to bring it back \u2014 on this device or another. Scan also accepts admin deposit QR codes, or type the admin's 6-digit deposit code under Enter Code. Your QR and code stay updated with your latest local wallet. Only your own account can restore a backup. Never touches your real, database-backed wallet.",o,o,o,o,o,o,A.l(o,o,k,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,1.45,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.F,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(r,o,o,q,o,o,B.n),o,o,o,o,B.jm,o,o,o)],i),o,Ac.Ms,o,o,B.ag,!1)],i)
if(p.r){j=n?B.ic:B.c
w=p.w
if(w==null)w="Working\u2026"
q.push(A.ao(0,A.aF(!1,B.a1,!0,o,new A.D(B.B9,A.B(A.a([I.aOc,B.bd,A.E(A.d(w,o,o,o,o,o,o,A.l(o,o,l,o,o,o,o,o,o,o,o,13,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],i),B.m,o,B.e,B.j,0,o,o),o),B.f,j,8,o,o,o,o,o,B.ah),o,o,0,0,o,o))}return A.c7(o,m,A.bm(!1,new A.an(B.W,o,B.aa,B.r,q,o),!0,!1,B.af,!0,!0),o,!1,!1,o,o)}}
C.a0b.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ac(0,B.G,B.d.gal(s).j(0.35),B.dn,16)],x.V),p=B.c.j(0.22)
return A.aF(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(v,A.w(A.a([A.p(v,A.X(w.c,B.c,v,v,v,30),B.f,v,v,new A.o(p,v,v,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.ac,A.d(w.d,v,v,v,v,v,v,B.rT,v,v,v)],x.p),B.m,v,B.b9,B.j,0,B.p),B.f,v,v,new A.o(v,v,v,r,q,new A.a8(B.ax,B.aC,B.x,s,v,v),B.n),v,140,v,v,B.bQ,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ah)}}
C.bri.prototype={
B(d){var w=this,v=null,u=A.m(22),t=A.m(22),s=w.e,r=A.m(22),q=A.a([new A.ac(0,B.G,B.d.gal(s).j(0.35),B.dn,16)],x.V),p=B.c.j(0.22)
return A.aF(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(v,A.B(A.a([A.p(v,A.X(w.c,B.c,v,v,v,24),B.f,v,v,new A.o(p,v,v,v,v,v,B.a6),v,44,v,v,v,v,v,44),B.er,A.d(w.d,v,v,v,v,v,v,B.rT,v,v,v)],x.p),B.m,v,B.b9,B.j,0,v,v),B.f,v,v,new A.o(v,v,v,r,q,new A.a8(B.ax,B.aC,B.x,s,v,v),B.n),v,v,v,v,D.buk,v,v,1/0),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ah)}}
C.ZO.prototype={
T(){return new C.bio()}}
C.bio.prototype={
gavO(){var w=this.e
return w===$?this.e=this.a.d:w},
a_(){var w=this
w.a1()
w.QC()
w.f=A.dt(B.nX,new C.dvP(w))},
q(){var w=this.f
if(w!=null)w.a6(0)
this.a2()},
QC(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$QC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.a
w=3
return A.b(A.uC(q.e,q.f),$async$QC)
case 3:q=e.a
s=A.bYH(q[3],q[1],t.a.e,q[4])
w=4
return A.b(A.NA(t.a.e,A.JO(s.eR(),null,"  ")),$async$QC)
case 4:r=e
if(t.c==null||r==null){w=1
break}t.m(new C.dvM(t,r))
case 1:return A.h(u,v)}})
return A.i($async$QC,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=u?B.jf:B.pI,s=u?B.ic:B.c,r=u?B.c:B.bj,q=A.eD(v,v,v,!0,!0,t,v,1,!0,v,0,!1,v,!1,v,v,v,v,!0,v,v,v,v,v,B.aRf,v,v,v,1,v,!0),p=A.m(24),o=A.I(B.aV.j(0.35),B.q,1),n=w.d,m=A.pN(v,v,!1,n===$?w.d=w.a.c:n,v,!0,!0,v,!1,B.c),l=A.d("Code: "+w.gavO(),v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,14,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),k=A.m(20),j=B.aV.j(0.12),i=A.m(20),h=x.p
i=A.aL(!1,k,!0,A.p(v,A.B(A.a([A.X(B.fN,B.aV,v,v,v,14),B.bp,A.d("Copy code",v,v,v,v,v,v,A.l(v,v,B.aV,v,v,v,v,v,v,v,v,12,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],h),B.m,v,B.e,B.P,0,v,v),B.f,v,v,new A.o(j,v,v,i,v,v,B.n),v,v,v,v,B.ms,v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.dvN(w,d),v,v,v,v,v,v,v)
return A.c7(q,t,new A.D(B.a9,A.w(A.a([A.E(A.p(v,A.w(A.a([B.N,m,B.by,l,B.N,i,B.aB,A.d("Scan this QR, or type the code, on another device signed into the same NGMY account.",v,v,v,v,v,v,A.l(v,v,u?B.aS:B.ak,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v)],h),B.m,v,B.b9,B.j,0,B.p),B.f,v,v,new A.o(s,v,o,p,v,v,B.n),v,v,v,v,B.a9,v,v,1/0),1),B.aR,new A.a7(1/0,v,A.bG(B.zK,new C.dvO(d),A.bn(B.aV,v,v,v,v,B.fP,v,v,v,v,v,v)),v)],h),B.m,v,B.e,B.j,0,B.p),v),v,!1,!1,v,v)}}
C.ZP.prototype={
T(){return new C.bip(A.z8(B.xt,B.nI,B.ub))}}
C.bip.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c7(A.eD(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fvw,w,w,w,1,w,!0),B.w,A.z7(this.d,B.bU,new C.dvQ(this,d)),w,!1,!1,w,w)}}
C.aeb.prototype={
B(a0){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.P(a0).ax.a===B.I,k=l?B.ic:B.c,j=l?B.c:B.M,i=l?B.aS:B.ak,h=l?B.b0:B.e2,g=this.c,f=g.at,e=g.Q,d=e==null?m:e.a
e=A.m(26)
w=A.I(B.aV.j(0.35),B.q,1)
v=A.a([new A.ac(0,B.G,B.aV.j(0.16),B.kb,36)],x.V)
u=A.p(m,D.bKB,B.f,m,m,new A.o(m,m,m,A.m(18),B.a2S,D.bUR,B.n),m,58,m,m,m,m,m,58)
t=A.d("Restore local backup?",m,m,m,m,m,m,A.l(m,m,j,m,m,m,m,m,m,m,m,21,m,m,B.u,m,m,!0,m,-0.3,m,m,m,m,m,m),B.L,m,m)
s=A.d("This replaces your local Growth Income wallet on this device.",m,m,m,m,m,m,A.l(m,m,i,m,m,m,m,m,m,m,m,13,m,m,m,m,1.45,!0,m,m,m,m,m,m,m,m),B.L,m,m)
r=l?B.jf:B.pI
q=A.m(18)
p=A.I(B.aV.j(0.22),B.q,1)
o=x.p
g=A.a([new C.PO("Account",B.a.i(this.d),i,j,m),B.R,new C.PO("Balance","$"+A.dB(g.d),i,j,m)],o)
if(d!=null&&B.a.i(d).length!==0)B.d.v(g,A.a([B.R,new C.PO("Investment",d,i,j,m)],o))
g.push(B.R)
g.push(new C.PO("Saved on",""+A.bH(f)+"/"+A.bR(f)+"/"+A.bA(f),i,j,m))
g.push(B.R)
g.push(new C.PO("Wallet history",this.e?"Keeps current history":"Restored from backup",i,j,m))
g=A.p(m,A.w(g,B.F,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bQ,m,m,1/0)
r=B.aF.j(l?0.14:0.12)
q=A.m(14)
p=A.I(B.aF.j(0.35),B.q,1)
n=A.X(B.yd,l?B.aM:B.d5,m,m,m,16)
return A.eK(m,B.K,new A.cT(B.Vp,A.c0(new A.D(B.xM,A.w(A.a([u,B.aR,t,B.N,s,B.by,g,B.aB,A.p(m,A.B(A.a([n,B.ab,A.E(A.d("Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.",m,m,m,m,m,m,A.l(m,m,l?B.bL:B.id,m,m,m,m,m,m,m,m,11.5,m,m,B.O,m,1.4,!0,m,m,m,m,m,m,m,m),m,m,m),1)],o),B.F,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.ej,m,m,1/0),B.d7,A.B(A.a([A.E(A.dU(B.nB,new C.eVA(a0),A.di(m,m,m,m,m,m,m,m,m,j,m,m,B.cl,m,new A.b7(A.m(14),B.Y),new A.ay(h,1,B.q,-1),m,m,m,m)),1),B.au,A.E(A.bG(D.fex,new C.eVB(a0),A.bn(B.aV,m,m,m,m,m,B.cl,m,new A.b7(A.m(14),B.Y),m,m,m)),2)],o),B.m,m,B.e,B.j,0,m,m)],o),B.m,m,B.e,B.P,0,B.p),m),new A.o(k,m,w,e,v,m,B.n),B.be),m),m,m,m,B.ex,B.d0,m,m,m)}}
C.PO.prototype={
B(d){var w=this,v=null
return A.B(A.a([new A.a7(92,v,A.d(w.c,v,v,v,v,v,v,A.l(v,v,w.e,v,v,v,v,v,v,v,v,11,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),A.E(A.d(w.d,v,v,v,v,v,v,A.l(v,v,w.f,v,v,v,v,v,v,v,v,12.5,v,v,B.H,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.F,v,B.e,B.j,0,v,v)}}
C.YW.prototype={
T(){return new C.az6(new A.as(B.as,$.aw()),A.jP(!0,null,!0,!0,null,null,!1))}}
C.az6.prototype={
a_(){this.a1()
$.aW.x1$.push(new C.d4M(this))},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.e.q()
this.a2()},
c3a(){var w,v=this.c
v.toString
w=B.a.i(this.d.a.a)
A.a6(v,!1).O(w)
return null},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=u?B.ic:B.c,s=u?B.c:B.M,r=u?B.aS:B.ak,q=u?B.jf:B.pI,p=u?B.b0:B.e2,o=A.m(24),n=A.I(B.aV.j(0.35),B.q,1),m=A.a([new A.ac(0,B.G,B.aV.j(0.18),B.fO,32)],x.V),l=A.p(v,Ab.anD,B.f,v,v,new A.o(v,v,v,A.m(18),B.a2S,D.bXB,B.n),v,56,v,v,v,v,v,56),k=A.d("Enter restore code",v,v,v,v,v,v,A.l(v,v,s,v,v,v,v,v,v,v,v,20,v,v,B.u,v,v,!0,v,-0.3,v,v,v,v,v,v),B.L,v,v),j=A.d("Type the 6-character code shown under the QR on the other device.",v,v,v,v,v,v,A.l(v,v,r,v,v,v,v,v,v,v,v,13,v,v,v,v,1.45,!0,v,v,v,v,v,v,v,v),B.L,v,v),i=A.l(v,v,s,v,v,v,v,v,v,v,v,28,v,v,B.H,v,v,!0,v,8,v,v,v,v,v,v),h=A.a([new A.uf(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new C.bqN(new C.d4J())],x.G),g=A.l(v,v,r.j(0.45),v,v,v,v,v,v,v,v,28,v,v,B.O,v,v,!0,v,8,v,v,v,v,v,v),f=x.p
return A.eK(v,B.K,new A.cT(A4.Ke,A.c0(new A.D(B.xM,A.w(A.a([l,B.aR,k,B.N,j,B.dY,A.aM(!1,B.T,!1,v,!0,B.r,v,A.aN(),w.d,v,v,v,v,v,2,A.bs(v,v,v,B.Fp,v,v,"",v,!0,new A.b4(4,A.m(16),new A.ay(p,1,B.q,-1)),v,v,v,v,v,q,!0,v,v,v,v,new A.b4(4,A.m(16),D.aYm),v,v,v,v,v,v,v,v,g,"A3K9P2",v,v,v,v,v,v,v,v,v,!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!1,v,!1,w.e,B.ai,v,v,h,v,v,v,v,6,v,1,v,v,!1,"\u2022",v,v,v,new C.d4K(w),v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,i,!0,B.L,v,B.m5,v,v,v,v),B.dY,A.B(A.a([A.E(A.dU(B.nB,new C.d4L(d),A.di(v,v,v,v,v,v,v,v,v,s,v,v,B.cl,v,new A.b7(A.m(14),B.Y),new A.ay(p,1,B.q,-1),v,v,v,v)),1),B.au,A.E(A.bG(D.fi8,w.gc39(),A.bn(B.aV,v,v,v,v,v,B.cl,v,new A.b7(A.m(14),B.Y),v,v,v)),2)],f),B.m,v,B.e,B.j,0,v,v)],f),B.m,v,B.e,B.P,0,B.p),v),new A.o(t,v,n,o,m,v,B.n),B.be),v),v,v,v,B.Mu,B.d0,v,v,v)}}
C.anE.prototype={
T(){return new C.biv(B.cG)},
hy(d){return this.x.$1(d)},
bs(){return this.y.$0()}}
C.biv.prototype={
a_(){var w,v=this
v.a1()
w=v.a
w.toString
$.tm=$.tm+1
v.r=B.o.N(B.o.D(C.fBa(w.e,w.d.y2),1,600))
w=v.a
if(!J.lp(w.d.y2,w.e))v.r=C.i1Y(v.a.e)
v.w=A.dt(B.fV,new C.dCa(v))},
q(){var w=this.w
if(w!=null)w.a6(0)
this.cgk()
C.aZC()
this.a2()},
cgk(){var w,v,u,t,s,r=this,q=null
if(r.x)return
r.x=!0
w=r.f
v=w<=0?0:B.k.D(r.e/w,0,1)
if(v<=0)return
u=A.nX(B.k.ab(r.a.w*1.46*v,2))
if(u<0.01)return
w=r.a
t=w.c
t.e=t.e+(u-w.w*v)
t=B.o.u(1000*Date.now())
s=r.a
w.hy(new A.d4(t,s.c.a,u,B.fH,B.fh,"Game partial: "+s.f+" ("+r.e+"/"+r.f+", left early)",q,q,B.cq,new A.S(Date.now(),0,!1)))
r.a.bs()
s=r.a
t=s.c.a
w=s.f
s=s.w
C.uz(u,q,"Left early \xb7 +$"+B.k.ab(u,2)+" ("+r.e+"/"+r.f+")",t,w,s,q,!0)},
JQ(d,e){return this.csn(d,e)},
b4m(d){return this.JQ(!1,d)},
csm(d){return this.JQ(d,"")},
csn(d,e){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$JQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}t.x=!0
s=t.w
if(s!=null)s.a6(0)
if(d)r=1
else{s=t.f
r=s<=0?0:B.k.D(t.e/s,0,1)}w=r<=0?3:4
break
case 3:s=t.a
q=s.c.a
p=s.f
s=s.w
o=e.length===0
C.uz(s,null,o?"No progress":e,q,p,s,null,!1)
s=t.c
if(s==null){w=1
break}w=5
return A.b(C.bCV(s,C.bCz(),C.h1K(),null,(o?"Try again":e)+" \u2014 no progress to pay.","YOU LOSE",!1),$async$JQ)
case 5:w=1
break
case 4:n=A.nX(B.k.ab(t.a.w*1.46*r,2))
m=r>=1
t.m(new C.dC1(t,n,r))
s=B.o.u(1000*Date.now())
q=t.a
p=q.c.a
q=q.f
q=m?"Game payout: "+q:"Game partial: "+q+" ("+t.e+"/"+t.f+")"
l=new A.d4(s,p,n,B.fH,B.fh,q,null,null,B.cq,new A.S(Date.now(),0,!1))
A.agU(l,!0)
t.a.hy(l)
t.a.bs()
if(m)k="+$"+B.k.ab(n,2)+" added to your balance!"
else{q=e.length===0?"":e+" \xb7 "
k=q+"+$"+B.k.ab(n,2)+" ("+B.k.V(r*100)+"% of the prize)"}q=t.a
C.uz(n,null,k,q.c.a,q.f,q.w,s,!0)
s=t.c
if(s==null){w=1
break}q=m?"YOU WIN!":"PARTIAL WIN"
w=6
return A.b(C.bCV(s,C.bCz(),C.h1K(),""+t.e+"/"+t.f,k,q,!0),$async$JQ)
case 6:w=7
return A.b(C.agM(t.a.f,k),$async$JQ)
case 7:case 1:return A.h(u,v)}})
return A.i($async$JQ,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.r
m===$&&A.c()
w=B.o.an(m,60)
v=B.a.aU(B.o.u(B.o.E(m,60)),2,"0")
u=A.aH(n,n,n,n,B.anG,n,n,n,new C.dC4(d),n,n,n,n,n,n)
t=o.a
s=x.p
t=A.E(A.w(A.a([A.d(t.f,n,1,B.a2,n,n,n,B.kg,n,n,n),A.d("Win $"+B.k.ab(t.w*1.46,2)+" \xb7 stake $"+B.k.ab(o.a.w,2),n,n,n,n,n,n,D.f3V,n,n,n)],s),B.F,n,B.e,B.j,0,B.p),1)
r=o.a.c.a
m=m<=10?B.ay:B.c.j(0.1)
q=A.m(99)
q=A.B(A.a([u,t,new C.apa(r,new C.dC5(o),n),B.bp,A.df(n,A.B(A.a([D.bP3,B.db,A.d(""+w+":"+v,n,n,n,n,n,n,B.kf,n,n,n)],s),B.m,n,B.e,B.j,0,n,n),n,n,B.bc,new A.o(m,n,n,q,n,n,B.n),B.a1,n,n,n,B.tJ,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
m=o.a
v=m.w
w=v*1.46
r=o.e/o.f
m=A.B(A.a([A.E(A.bw(A.m(99),A.m3(B.bE,n,n,9,n,r,new A.lX(B.d.gI(m.r),x.dw)),B.aq),1),B.au,A.d(""+o.e+"/"+o.f,n,n,n,n,n,n,D.fcJ,n,n,n)],s),B.m,n,B.e,B.j,0,n,n)
t=A.m(22)
u=A.a([B.d.gI(o.a.r).j(0.35),F.afp],x.O)
p=o.x
return C.aOX(n,D.bje,A.bm(!0,A.w(A.a([new A.D(D.bwr,q,n),new C.Ne(w*r,w,v,n),new A.D(F.ahR,m,n),A.E(new A.D(B.Ym,A.bw(t,A.c0(A.dZ(X.hm7(o.a.e,new X.zf(new C.dC6(o),new C.dC7(o),new C.dC8(o),o.d)),p,n),new A.o(n,n,n,n,n,new A.a8(B.b_,B.b4,B.x,u,n,n),B.n),B.be),B.aq),n),1)],s),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0))}}
C.a6g.prototype={
B(d){var w=null,v=A.m(26),u=A.I(B.aF.j(0.5),B.q,1),t=A.a([new A.ac(0,B.G,B.aF.j(0.22),B.J,26)],x.V)
return A.eK(w,B.K,A.p(w,A.w(A.a([A.p(w,D.bIO,B.f,w,w,new A.o(B.aF.j(0.16),w,A.I(B.aF,B.q,2),w,w,w,B.a6),w,68,w,w,w,w,w,68),B.aB,D.frw,B.N,A.d("You have missed 2 weekdays this month. If you miss one more weekday without clocking in, your investment plan will be removed and you will need to buy a new plan.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.8),w,w,w,w,w,w,w,w,13.5,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.N,A.d("The count starts again from zero next month.",w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.aR,new A.a7(1/0,w,A.bG(D.fff,new C.c5U(d),A.bn(B.aF,w,w,w,B.w,B.fP,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],x.p),B.m,w,B.e,B.P,0,B.p),B.f,w,w,new A.o(w,w,u,v,t,D.bVt,B.n),w,w,w,w,D.buL,w,w,w),w,w,w,B.ain,B.d0,w,w,w)}}
C.an8.prototype={
T(){return new C.bim(null,null)},
gZ(d){return this.e}}
C.bim.prototype={
a_(){var w,v=this,u=null
v.a1()
w=v.d=A.bj(u,B.AW,u,1,u,v)
w.da()
w.dV$.L(0,new C.dvl(v))
w=A.bj(u,B.mn,u,1,u,v)
w.cI(0)
v.e=w
w=A.bj(u,B.LV,u,1,u,v)
w.cI(0)
v.f=w
w.da()
w.dV$.L(0,new C.dvm(v))
if(v.a.c){v.d.cI(0)
v.e.bY(0)
v.f.bY(0)}},
bu(d){var w,v,u=this
u.bG(d)
w=u.a.c
if(w){v=u.d
v===$&&A.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){w=u.d
w===$&&A.c()
w.cI(0)
w=u.e
w===$&&A.c()
w.bY(0)
w=u.f
w===$&&A.c()
w.bY(0)}else if(!w&&d.c){w=u.d
w===$&&A.c()
w.bY(0)
w=u.d
w.sp(0,w.a)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cI(0)
w=u.f
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cI(0)}},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
w.bua()},
B(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a,b2=b1.e,b3=b1.c,b4=b1.d
if(b3)b4=b4==null?D.QA[B.o.E(a9.r,5)]:b4
w=!b3&&b4==null?D.QA[B.o.E(a9.w,5)]:b0
b1=b4!=null
if(b1){b3=A.t(b4)
v=b4>0?"+"+b3:b3}else if(w!=null){b3=A.t(w)
if(w>0)b3="+"+b3
v=b3}else v="?"
if(b1)u=b4>0?B.cZ:B.bz
else if(w!=null){b1=(w>0?B.cZ:B.bz).j(0.45)
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
b3=A.a([A.ed(B.A,A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,b0,A.a([new A.ac(6+e,B.G,B.aE.j(0.4+q*0.3),B.J,32+q*22),new A.ac(3,B.G,B.b8.j(0.2+p*0.25),B.J,40+p*16)],d),b0,B.a6),b0,i,b0,b0,b0,b0,b0,i),1+b3,b0,b0)],g)
for(a0=b2*0.72,a1=7+q*5,a2=0.55+q*0.4,e=10+e,a3=0;a3<12;++a3){a4=j+a3*3.141592653589793/6
a5=Math.sin(a4*2+a3)
a6=Math.cos(a4)
a7=Math.sin(a4)
a8=A.p(b0,b0,B.f,b0,b0,new A.o(A.aq(B.bu,B.aM,B.o.E(a3,3)/2).j(a2),b0,b0,b0,A.a([new A.ac(0,B.G,B.aE.j(0.7),B.J,e)],d),b0,B.a6),b0,a1,b0,b0,b0,b0,b0,a1)
b3.push(A.dV(new A.iG(A.wd(a4+a3),b0,B.A,!0,b0,a8,b0),new A.u(a6*a0+a5*b2*0.04,a7*a0)))}B.d.v(f,b3)}b3=b2*0.06
e=x.V
f.push(A.dV(A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,A.m(b2*0.5),A.a([new A.ac(b2*0.02,B.G,B.w.j(0.4+b1),B.J,b2*0.14)],e),b0,B.n),b0,b2*0.16,b0,b0,b0,b0,b0,b2*0.92),new A.u(0,n+b3)))
b1=A.dp()
d=b1.a
d.$flags&2&&A.aj(d)
d[11]=0.0025
b1.mN(o)
b1.jL(k,k,k,1)
b1.k5(l)
b1.fC(m)
d=b2*0.2
a1=A.m(d)
if(a9.a.c)a2=D.cZ0
else{a2=A.aq(B.c,B.km,q*0.45)
a2.toString
a2=A.a([a2,B.bK,B.cr],x.O)}a4=A.aq(B.bJ,B.aE,q*0.65)
a4.toString
a4=A.I(a4,B.q,3)
e=A.a([new A.ac(0,B.G,B.w.j(0.3),D.e5A,16)],e)
if(!a9.a.c)e.push(new A.ac(p*3,B.G,B.aE.j(0.3+q*0.4),B.J,24+p*16))
e.push(new A.ac(0,B.G,B.c.j(0.9),B.S2,0))
g=A.a([],g)
if(!a9.a.c)g.push(A.bZ(0,A.c0(b0,new A.o(b0,b0,b0,A.m(d),b0,new A.a8(new A.dc(-1+Math.cos(j)*0.8,-1),new A.dc(1,1),B.x,A.a([B.c.j(0),B.c.j(0.28+p*0.25),B.c.j(0)],x.O),b0,b0),B.n),B.be),0,0,0))
g.push(A.ao(b0,A.p(b0,b0,B.f,b0,b0,new A.o(b0,b0,b0,A.m(6),b0,new A.a8(B.a3,B.a8,B.x,A.a([B.c.j(0.95),B.c.j(0)],x.O),b0,b0),B.n),b0,b2*0.15,b0,b0,b0,b0,b0,b2*0.24),b0,b0,b2*0.08,b0,b3,b0))
b3=a9.a.c?1:0.92+p*0.14
d=A.a([new A.cR(B.w.j(0.18),B.dE,5)],x.C)
if(!a9.a.c)d.push(new A.cR(B.aE.j(0.4+q*0.35),B.J,12+p*10))
g.push(A.av(A.vo(A.d(v,b0,b0,b0,b0,b0,b0,A.l(b0,b0,u,b0,b0,b0,b0,b0,b0,b0,b0,b2*0.4,b0,b0,B.u,b0,1,!0,b0,b0,b0,b0,b0,d,b0,b0),b0,b0,b0),B.bc,B.jk,b3),b0,b0,b0))
f.push(A.dV(A.fu(B.A,A.p(b0,new A.an(B.W,b0,B.aa,B.r,g,b0),B.f,b0,b0,new A.o(b0,b0,a4,a1,e,new A.a8(B.ax,B.aC,B.x,a2,b0,b0),B.n),b0,b2,b0,b0,b0,b0,b0,b2),b0,b1,!0),new A.u(0,n)))
return new A.a7(h,h,new A.an(B.A,b0,B.aa,B.f,f,b0),b0)}}
C.aKt.prototype={
aT(){this.b_()
this.aY()
this.dL()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdF())
w.b2$=null
w.a2()}}
C.Ne.prototype={
B(d){var w=null,v=new C.c7T(),u=v.$3("STAKE","$"+B.k.ab(this.e,2),B.c),t=A.m(18),s=A.I(B.bv.j(0.7),B.q,1.4),r=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.J,14)],x.V),q=x.p
return new A.D(B.Md,A.B(A.a([u,A.p(w,A.w(A.a([D.fqc,A.mD(new C.c7S(),w,B.bc,B.nb,w,w,new A.bq(w,this.c,x.e7),x.gR)],q),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(w,w,s,t,r,D.aos,B.n),w,w,w,w,B.Mp,w,w,w),v.$3("FULL WIN","$"+B.k.ab(this.d,2),B.bL)],q),B.m,w,B.e,B.j,0,w,w),w)}}
C.apa.prototype={
B(d){var w=null,v=A.m(99),u=A.I(B.jA.j(0.7),B.q,1)
return A.p(w,A.B(A.a([D.bHg,B.db,C.aq_(this.d,B.nz,this.c)],x.p),B.m,w,B.e,B.P,0,w,w),B.f,w,w,new A.o(w,w,u,v,w,D.aos,B.n),w,w,w,w,B.Mz,w,w,w)},
ge2(){return this.c}}
C.Nm.prototype={
T(){return new C.bj2(null,null)}}
C.bj2.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.mn,null,1,null,v)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.buL()},
aN9(d,e){var w=this.a.d,v=A.U(w).k("M<1,n>"),u=A.C(new A.M(w,C.i7W(),v),v.k("ak.E"))
w=this.d
w===$&&A.c()
return A.c6(w,new C.dVk(this,u),null)},
B(d){var w=null
if(this.a.e)return A.c7(w,D.aeQ,A.bm(!0,this.aN9(0,d),!0,!1,B.af,!0,!0),w,!1,!1,w,w)
return this.aN9(0,d)},
awx(d,e,f){var w=null,v=f.j(0.16),u=A.m(10)
return A.B(A.a([A.p(w,A.X(d,f,w,w,w,17),B.f,w,w,new A.o(v,w,w,u,w,w,B.n),w,32,w,w,w,w,w,32),B.au,A.E(A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.9),w,w,w,w,w,w,w,w,12,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.aL2.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
C.ad_.prototype={
B(d){var w,v,u,t,s,r,q,p=null,o=x.w,n=A.aI(d,B.e9,o).w.r.d,m=this.c,l=J.cF(m),k=l.eO(m,new C.dVn()).gM(0),j=new A.e9(l.du(m,new C.dVo(),x.cD),x.bG).cK(0,0,new C.dVp())
o=A.aI(d,B.bW,o).w
w=x.p
v=A.a([B.R,A.p(p,p,B.f,p,p,new A.o(B.b0,p,p,A.m(2),p,p,B.n),p,4,p,p,p,p,p,42),new A.D(B.ai3,A.B(A.a([A.p(p,D.bRt,B.f,p,p,new A.o(p,p,p,A.m(14),A.a([new A.ac(0,B.G,B.fb.j(0.45),B.J,14)],x.V),D.aom,B.n),p,44,p,p,p,p,p,44),B.bd,D.byH,A.aH(p,p,p,p,B.ls,p,p,p,new C.dVq(d),p,p,p,p,p,p)],w),B.m,p,B.e,B.j,0,p,p),p)],w)
if(l.gcl(m)){u=C.fXC("GAMES",""+l.gM(m),B.eB)
t=C.fXC("WON",""+k,B.jA)
s=j>=0
r=s?"+":"-"
q=C.bzl(j)
s=s?B.jA:B.f6
v.push(new A.D(D.bsZ,A.B(A.a([u,B.ab,t,B.ab,C.fXC("NET",r+q,s)],w),B.m,p,B.e,B.j,0,p,p),p))}if(l.gam(m))v.push(new A.D(new A.Q(24,36,24,24+n),A.w(A.a([A.X(D.bDe,B.c.j(0.35),p,p,p,52),B.ac,A.d("No game receipts yet",p,p,p,p,p,p,A.l(p,p,B.c.j(0.85),p,p,p,p,p,p,p,p,p,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.am,A.d("Play a game and its receipt shows up here.",p,p,p,p,p,p,A.l(p,p,B.c.j(0.55),p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),B.L,p,p)],w),B.m,p,B.e,B.j,0,B.p),p))
else v.push(new A.dq(1,B.co,A.hK(p,new C.dVr(this),l.gM(m),new A.Q(14,2,14,16+n),p,B.ag,new C.dVs(),!1),p))
return A.p(p,A.w(v,B.m,p,B.e,B.P,0,B.p),B.f,p,new A.aY(0,1/0,0,o.a.b*0.88),D.b0b,p,p,p,p,p,p,p,p)}}
C.acZ.prototype={
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
t=s}if(w)r=B.c9
else if(u)r=B.dv
else{w=v?B.aM:B.bv
r=w}q=h.gbfT()
w=new C.dVm()
s=A.m(14)
p=A.a([r.j(0.13),D.bia],x.O)
o=A.I(r.j(0.4),B.q,1)
n=A.X(g?B.mw:B.cD,r,i,i,i,16)
m=A.E(A.d(h.b,i,1,B.a2,i,i,i,B.rS,i,i,i),1)
l=r.j(0.2)
k=A.m(99)
k=A.p(i,A.d(t,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,8.5,i,i,B.u,i,i,!0,i,0.6,i,i,i,i,i,i),i,i,i),B.f,i,i,new A.o(l,i,i,k,i,i,B.n),i,i,i,i,D.bwm,i,i,i)
if(q!=null){l=q>=0?"+":"-"
l+=C.bzl(q)}else{l=g?"+":"-"
l+=C.bzl(h.d)}j=x.p
l=A.B(A.a([n,B.bp,m,k,B.bp,A.d(l,i,i,i,i,i,i,A.l(i,i,r,i,i,i,i,i,i,i,i,13,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.m,i,B.e,B.j,0,i,i)
k=C.dVl("STAKE",w.$1(h.w),B.c)
w=A.B(A.a([k,B.db,C.dVl("PAID",C.bzl(g?h.d:0),r),B.db,C.dVl("BEFORE",w.$1(h.x),B.eB),B.db,C.dVl("AFTER",w.$1(h.y),B.dv)],j),B.m,i,B.e,B.j,0,i,i)
n=C.i3v(h.f)
h=B.a.i(h.e)
h=h.length===0?"":" \xb7 "+h
return A.p(i,A.w(A.a([l,B.am,w,B.at,A.d(n+h,i,1,B.a2,i,i,i,A.l(i,i,B.c.j(0.45),i,i,i,i,i,i,i,i,10,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],j),B.aj,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(i,i,o,s,i,new A.a8(B.ax,B.aC,B.x,p,i,i),B.n),i,i,i,i,B.kY,i,i,i)}}
C.azK.prototype={
T(){return new C.beH(B.cG,null,null)}}
C.beH.prototype={
a_(){var w,v,u,t=this
t.a1()
w=A.bj(null,B.mo,null,1,null,t)
w.cI(0)
t.d=w
v=J.e3(28,x.ec)
for(w=t.e,u=0;u<28;++u)v[u]=new C.ado(40+w.aj()*260,-20+w.aj()*40,1.5+w.aj()*3,w.aj()*3.141592653589793,0.7+w.aj()*0.3,12+w.aj()*16,[Z.a42,B.rv,B.cR,B.c][w.aA(4)],[B.i4,B.lm,B.dX,B.FO][w.aA(4)])
t.f=v},
q(){var w=this.d
w===$&&A.c()
w.q()
this.btF()},
B(d){var w=null,v=this.d
v===$&&A.c()
return A.av(A.aF(!1,B.a1,!0,w,A.c6(v,new C.dbN(this,d),w),B.f,B.K,0,w,w,w,w,w,B.ah),w,w,w)}}
C.ado.prototype={
gZ(d){return this.f}}
C.aJZ.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
C.b_q.prototype={
B(d){return new A.up(new C.ca9(this),null,new A.h8(A.a([$.yy(),$.a2r()],x.U)),null)},
ge2(){return this.c}}
C.MQ.prototype={
caj(){if(this.c!=null)this.m(new C.c_0())}}
C.It.prototype={}
C.aoC.prototype={
T(){return new C.aCz(B.cG,new A.as(B.as,$.aw()))},
cEH(){return this.d.$0()},
cQl(){return this.f.$0()},
cQ9(d,e){return this.r.$2(d,e)},
cQX(d,e,f){return this.w.$3$bonus(d,e,f)},
ge2(){return this.c}}
C.aCz.prototype={
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.a2()},
asj(){var w=A.d6(B.a.i(this.e.a.a))
if(w!=null&&w>=2)return w
return this.f},
AI(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$AI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.x){w=1
break}s=t.asj()
if(s<2){t.awy("Minimum bet is $2.00")
w=1
break}if(!t.y){if(t.a.cEH()<s){t.awy("Insufficient balance.")
w=1
break}if(!t.a.cQ9(s,"Dice Roll bet")){t.awy("Could not place bet.")
w=1
break}t.a.toString
t.m(new C.dOn(t))}w=3
return A.b(C.c73(t.a.e),$async$AI)
case 3:r=t.a
q=C.i5A(r.e,r.c,t.d)
t.a.cQl()
A.aZ_(t.a.e)
t.m(new C.dOo(t))
r=x.H,p=0
case 4:if(!(p<24)){w=6
break}w=7
return A.b(A.bN(new A.ba(1000*(40+p*6)),null,r),$async$AI)
case 7:if(t.c==null){w=1
break}new C.dOp(t).$0()
t.c.ef()
case 5:++p
w=4
break
case 6:w=8
return A.b(A.bN(B.jE,null,r),$async$AI)
case 8:if(t.c==null){w=1
break}o=q===3?3:0
n=C.h0x(q)
t.m(new C.dOq(t,q))
r=t.c
if(r==null){w=1
break}w=q>0?9:11
break
case 9:m=s*1.46+o
t.a.cQX(m,"Dice Roll "+n,o)
t.m(new C.dOr(t,m))
r=t.c
r.toString
l=o>0
k=l?"+$"+B.k.ab(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.ab(m,2)+" added to your balance"
w=12
return A.b(C.bCV(r,C.bCz(),new C.dOs(t),n,k,"YOU WIN!",!0),$async$AI)
case 12:w=13
return A.b(C.agM("Dice Roll",l?"+$"+B.k.ab(m,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.ab(m,2)+" added to your balance"),$async$AI)
case 13:w=10
break
case 11:w=14
return A.b(C.bCV(r,C.bCz(),new C.dOt(t),n,"Better luck on the next roll!","YOU LOSE",!1),$async$AI)
case 14:C.uz(s,null,"Better luck on the next roll! ("+n+")",t.a.c,"Dice Roll",s,null,!1)
case 10:case 1:return A.h(u,v)}})
return A.i($async$AI,v)},
awy(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.asj(),d=x.w,a0=A.aI(a2,B.e9,d).w,a1=Math.min(A.aI(a2,B.bW,d).w.a.a*0.44,200)
d=A.hj(R.amP,D.fxo,new C.dOw(a2),f)
w=A.m(20)
v=g.a
u=v.c
t=x.p
w=A.B(A.a([d,B.b7,A.p(f,A.B(A.a([B.amL,B.bp,C.aq_(v.d,B.j6,u)],t),B.m,f,B.e,B.P,0,f,f),B.f,f,f,new A.o(B.cR,f,f,w,f,f,B.n),f,f,f,f,B.lQ,f,f,f)],t),B.m,f,B.e,B.j,0,f,f)
u=g.z
v=A.Z(140,D.Xs.l()>>>16&255,D.Xs.l()>>>8&255,D.Xs.l()&255)
d=A.m(18)
s=A.I(A.Z(31,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.q,1)
r=g.x
d=A.E(A.p(f,A.av(new C.an8(r,r?g.w:g.r,a1,f),f,f,f),B.f,f,f,new A.o(v,f,s,d,f,f,B.n),f,f,f,f,f,f,f,1/0),1)
v=A.d("Roll lands on one of:",f,f,f,f,f,f,A.l(f,f,B.c.j(0.75),f,f,f,f,f,f,f,f,11,f,f,B.a5,f,f,!0,f,f,f,f,f,f,f,f),f,f,f)
s=A.a([],t)
for(r=x.V,q=0;q<5;++q){p=D.QA[q]
o=C.h0x(p)
n=p>0?B.bi:B.ay
m=!g.x&&g.r===p
l=m?48:40
k=m?n:n.j(0.35)
j=new A.aT(10,10)
i=m?B.c:n.j(0.7)
h=new A.ay(i,m?2.5:1.2,B.q,-1)
n=m?A.a([new A.ac(1,B.G,n.j(0.65),B.J,14)],r):B.Ql
m=m?18:15
s.push(new A.bB(1,B.bg,new A.D(B.jn,A.p(B.A,new A.y(o,f,new A.H(!0,B.c,f,f,f,f,m,B.u,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f),B.f,f,f,new A.o(k,f,new A.bO(h,h,h,h),new A.bp(j,j,j,j),n,f,B.n),f,l,f,f,f,f,f,f),f),f))}d=A.a([d,B.ac,v,B.am,A.B(s,B.m,f,B.e,B.j,0,f,f)],t)
if(!g.x&&g.r!=null){v=g.r
v.toString
v=C.h0x(v)
s=g.r
s.toString
d.push(new A.D(B.jG,A.d("Landed on "+v,f,f,f,f,f,f,A.l(f,f,s>0?B.b2:B.c9,f,f,f,f,f,f,f,f,20,f,f,B.u,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))}d.push(B.R)
d.push(new A.bI(B.a3,f,f,A.d("Bet Amount",f,f,f,f,f,f,A.l(f,f,A.Z(217,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),f,f,f,f,f,f,f,f,12,f,f,B.H,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),f))
d.push(B.am)
v=x.bL
v=A.C(new A.M(A.a([2,5,10,25],x.n),new C.dOx(g),v),v.k("ak.E"))
s=g.y
r=A.Z(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v.push(A.E(new A.D(B.Z0,A.aM(f,B.T,!1,f,!0,B.r,f,A.aN(),g.e,f,f,f,f,f,2,A.bs(f,new A.b4(4,A.m(10),B.Y),f,B.jF,f,f,f,f,!0,f,f,f,f,f,f,r,!0,f,f,f,f,f,f,f,f,f,f,f,f,f,B.kH,"$",f,f,f,f,f,!0,f,f,f,!0,!0,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,!s,!1,f,B.ai,f,f,f,f,f,B.dO,f,f,f,1,f,f,!1,"\u2022",f,f,f,f,f,!1,f,f,!1,f,!0,f,B.a9,f,f,f,f,f,f,f,f,f,f,f,B.hs,!0,B.L,f,B.an,f,f,f,f),f),1))
d.push(A.B(v,B.m,f,B.e,B.j,0,f,f))
d.push(B.N)
d.push(new A.bI(B.a8,f,f,A.d("Perfect Score Profit: +$"+B.k.ab(g.asj()*0.46,2),f,f,f,f,f,f,D.f5X,f,f,f),f))
d.push(B.R)
d=A.E(new A.D(B.hO,A.w(d,B.aj,f,B.e,B.j,0,B.p),f),1)
v=g.x?f:g.gcp_()
s=A.fn(f,f,B.aE,f,f,f,f,f,f,B.c,f,f,f,f,new A.b7(A.m(14),B.Y),f,f,f,f,f)
return C.aOX(f,D.XA,A.bm(!0,A.w(A.a([new A.D(D.bwN,w,f),new C.Ne(u,e*1.46,e,f),A.E(A.w(A.a([d,new A.D(new A.Q(14,4,14,8+a0.r.d),new A.a7(1/0,52,A.ih(A.d("\ud83c\udfb2 ROLL ($"+B.k.ab(e,2)+")",f,f,f,f,f,f,B.lb,f,f,f),v,s),f),f)],t),B.m,f,B.e,B.j,0,B.p),1)],t),B.m,f,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0))}}
C.apg.prototype={
T(){return new C.aCQ(B.kB,new A.as(B.as,$.aw()))},
cQ1(d){return this.e.$1(d)}}
C.aCQ.prototype={
gar6(){var w,v=this.r
if(v===$){w=B.o.u(1e4+B.cG.aA(89999))
this.r!==$&&A.bL()
this.r=w
v=w}return v},
gQ4(){var w=this.d,v=this.a
return w===B.kB?B.a.i(v.f.a):B.a.i(v.f.b)},
ga8H(){var w=this.gQ4(),v=A.af("^\\$+",!0,!1,!1,!1),u=B.a.i(A.aK(w,v,""))
return u.length===0?"":"$"+u},
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.a2()},
IN(d,e){return this.bHA(d,e)},
bHA(d,e){var w=0,v=A.j(x.H),u=this,t
var $async$IN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.fM(new A.fE(d)),$async$IN)
case 2:A.eU()
t=u.c
if(t!=null)t.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(e+" copied",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$IN,v)},
Q_(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Q_=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.gQ4().length===0){r.c.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Payment details are not available right now. Please try again later.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}A.jj()
o=B.k.ab(r.a.d,2)
q=r.d===B.kB?A.cE("https://cash.app/"+r.ga8H()+"/"+o,0,null):A.cE("bitcoin:"+r.gQ4(),0,null)
t=4
w=7
return A.b(A.iS(q,B.fn,null),$async$Q_)
case 7:p=e
w=!p?8:9
break
case 8:n=r.d===B.kB?r.ga8H():r.gQ4()
w=10
return A.b(r.IN(n,r.d===B.kB?"Cash App tag":"Bitcoin address"),$async$Q_)
case 10:case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
n=r.d===B.kB?r.ga8H():r.gQ4()
w=11
return A.b(r.IN(n,r.d===B.kB?"Cash App tag":"Bitcoin address"),$async$Q_)
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Q_,v)},
a01(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a01=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hZ().bgC(B.eJ),$async$a01)
case 3:r=e
if(r==null){w=1
break}w=4
return A.b(r.fl(),$async$a01)
case 4:s=e
t.m(new C.dVK(t,B.a.ca(r.b.toLowerCase(),".png")?"image/png":"image/jpeg",s))
case 1:return A.h(u,v)}})
return A.i($async$a01,v)},
c6J(){var w,v=this,u=null,t=v.d,s=v.e.a,r=t===B.kB?C.hnp(s.a):B.a.i(s.a)
if(r.length===0){t=v.d===B.kB?"Enter your Cash App tag (the one you paid from).":"Enter the Bitcoin wallet you paid from."
v.c.J(x.q).f.U(A.b2(u,u,u,u,u,B.r,u,A.d(t,u,u,u,u,u,u,u,u,u,u),u,B.U,u,u,u,u,u,u,u,u,u,u))
return}if(v.f==null){v.c.J(x.q).f.U(A.b2(u,u,u,u,u,B.r,u,A.d("Add a screenshot of your payment.",u,u,u,u,u,u,u,u,u,u),u,B.U,u,u,u,u,u,u,u,u,u,u))
return}t=v.a
t.toString
s=new A.S(Date.now(),0,!1).u(0)
w=v.a
t.cQ1(new A.d4(s,w.c.a,w.d,B.ft,v.d,r,v.f,v.gar6(),B.dt,new A.S(Date.now(),0,!1)))
w=v.c
w.toString
A.iO(w,u)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.eD(o,o,o,!0,!0,B.As,o,1,!0,o,0,!1,o,!1,B.c,o,A.aH(o,o,o,o,B.Gz,o,o,o,new C.dVL(d),o,o,o,o,o,o),o,!0,o,o,o,o,o,D.fgQ,o,o,o,1,o,!0),m=A.m(26),l=A.I(D.eK.j(0.25),B.q,1),k=x.V,j=A.a([new A.ac(0,B.G,B.aZ.j(0.25),B.eV,24)],k),i=x.p
j=A.p(o,A.w(A.a([A.d("YOU'RE ADDING",o,o,o,o,o,o,A.l(o,o,B.c.j(0.65),o,o,o,o,o,o,o,o,11,o,o,B.H,o,o,!0,o,2,o,o,o,o,o,o),o,o,o),B.am,A.f6(B.A,A.d("$"+A.dB(p.a.d),o,o,o,o,o,o,D.f0e,o,o,o),B.f,B.du),B.am,A.d("to your Growth Income wallet",o,o,o,o,o,o,A.l(o,o,D.eK.j(0.85),o,o,o,o,o,o,o,o,12,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,l,m,j,D.bYq,B.n),o,o,o,o,D.buo,o,o,o)
m=p.c1U()
l=p.aAe(1,"Send the money to NGMY Pay",p.c6H())
w=p.aAe(2,"Put this code in the payment note",p.bGa())
v=p.d===B.kB
u=v?"Your Cash App tag":"Your Bitcoin wallet"
t=v?"$ ":o
v=v?"YourCashTag":"bc1\u2026"
s=A.l(o,o,B.c.j(0.3),o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
t=p.aAe(3,u,A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.e,o,o,o,o,o,2,A.bs(o,o,o,o,o,o,o,o,!0,new A.b4(4,A.m(18),new A.ay(B.c.j(0.08),1,B.q,-1)),o,o,o,o,o,B.tu,!0,o,o,o,o,new A.b4(4,A.m(18),D.aYh),o,o,o,o,o,o,o,o,s,v,o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,D.f1H,t,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,B.rT,!0,B.a4,o,B.an,o,o,o,o))
r=p.f!=null
v=r?8:22
u=A.m(20)
s=r?D.eK:B.c
s=A.I(s.j(r?0.5:0.12),B.q,1.4)
q=r?A.w(A.a([A.bw(A.m(14),new A.cT(D.aZH,new A.Et(p.f,o),o),B.aq),B.N,D.eMX,B.at],i),B.m,o,B.e,B.j,0,B.p):A.w(A.a([A.p(o,D.bQE,B.f,o,o,new A.o(D.eK.j(0.12),o,o,o,o,o,B.a6),o,54,o,o,o,o,o,54),B.R,D.fm4,B.cS,A.d("Show the amount, the date and NGMY Pay",o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],i),B.m,o,B.e,B.j,0,B.p)
v=p.b5R(4,"Screenshot of your payment",A.aC(o,A.p(o,q,B.f,o,o,new A.o(B.tu,o,s,u,o,o,B.n),o,o,o,o,new A.Q(v,v,v,v),o,o,o),B.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gci9(),o,o,o,o,o,o,!1,B.a7),!0)
u=A.d(p.a.r,o,o,o,o,o,o,A.l(o,o,B.c.j(0.5),o,o,o,o,o,o,o,o,11.5,o,o,B.a5,o,1.4,!0,o,o,o,o,o,o,o,o),B.L,o,o)
s=A.m(18)
k=A.a([new A.ac(0,B.G,B.aZ.j(0.45),B.dn,18)],k)
return A.c7(n,B.As,A.av(new A.cT(B.aaM,A.cw(A.a([j,B.by,m,B.by,l,w,t,v,B.am,u,B.aR,new A.a7(o,56,A.c0(A.lu(D.bPi,D.fwD,p.gc6I(),A.fn(o,o,B.K,o,o,o,o,o,o,B.c,o,o,o,B.K,new A.b7(A.m(18),B.Y),o,o,o,o,o)),new A.o(o,o,o,s,k,D.bX2,B.n),B.be),o)],i),o,D.btU,o,o,B.ag,!1),o),o,o,o),o,!1,!1,o,o)},
c1U(){var w=null,v=new C.dVG(this),u=A.m(18),t=A.I(B.c.j(0.06),B.q,1)
return A.p(w,A.B(A.a([v.$3(B.kB,B.i2,"Cash App"),B.ec,v.$3(B.a5t,D.amu,"Bitcoin")],x.p),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(B.tu,w,t,u,w,w,B.n),w,w,w,w,B.lS,w,w,w)},
b5R(d,e,f,g){var w,v=null,u=x.p,t=A.a([A.p(B.A,A.d(""+d,v,v,v,v,v,v,D.f6H,v,v,v),B.f,v,v,D.b_q,v,28,v,v,v,v,v,28)],u)
if(!g)t.push(A.E(A.p(v,v,B.f,D.eK.j(0.18),v,v,v,v,v,B.vn,v,v,v,2),1))
t=A.w(t,B.m,v,B.e,B.j,0,B.p)
w=g?12:20
return new A.DU(A.B(A.a([new A.a7(34,v,t,v),B.au,A.E(new A.D(new A.Q(0,0,0,w),A.w(A.a([new A.D(B.Yk,A.d(e,v,v,v,v,v,v,A5.TA,v,v,v),v),f],u),B.aj,v,B.e,B.j,0,B.p),v),1)],u),B.aj,v,B.e,B.j,0,v,v),v)},
aAe(d,e,f){return this.b5R(d,e,f,!1)},
c6H(){var w,v,u,t,s=this,r=null,q=s.d===B.kB?s.ga8H():s.gQ4(),p=A.m(20),o=A.m(20),n=s.d===B.kB,m=n?D.bVY:D.bXL,l=A.a([new A.ac(0,B.G,(n?D.af4:D.Wq).j(0.35),B.cz,16)],x.V),k=A.m(12)
n=s.d===B.kB
w=n?B.i2:D.amu
k=A.p(r,A.X(w,n?D.af4:D.Wq,r,r,r,30),B.f,r,r,new A.o(B.c,r,r,k,r,r,B.n),r,44,r,r,r,r,r,44)
n=n?"NGMY Pay \xb7 Cash App":"NGMY Pay \xb7 Bitcoin"
n=A.d(n,r,r,r,r,r,r,A.l(r,r,B.c.j(0.85),r,r,r,r,r,r,r,r,11.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=q.length===0
v=w?"Not set yet":q
u=s.d===B.kB
t=u?22:13
v=A.d(v,r,1,B.a2,r,r,r,A.l(r,r,B.c,r,r,r,r,r,r,r,r,t,r,r,B.u,r,r,!0,r,u?0.3:0,r,r,r,r,r,r),r,r,r)
u=x.p
v=A.E(A.w(A.a([n,B.bD,v,B.at,A.B(A.a([D.bM8,B.db,A.d(s.d===B.kB?"Tap to pay $"+A.dB(s.a.d)+" in Cash App":"Tap to open your Bitcoin wallet",r,r,r,r,r,r,B.qu,r,r,r)],u),B.m,r,B.e,B.j,0,r,r)],u),B.F,r,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,r,A.aL(!1,p,!0,A.eF(A.B(A.a([k,B.bd,v,A.aH(r,r,r,r,D.bLc,r,r,r,w?r:new C.dVJ(s,q),r,r,r,r,"Copy",r)],u),B.m,r,B.e,B.j,0,r,r),r,new A.o(r,r,r,o,l,m,B.n),r,B.ahL,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.gcdq(),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah)},
bGa(){var w,v,u,t,s,r,q,p,o=null,n=A.m(20),m=A.I(B.b6.j(0.35),B.q,1),l=x.p,k=A.a([],l)
for(w=this.gar6().split(""),v=w.length,u=x.O,t=0;t<v;++t){s=w[t]
r=new A.aT(12,12)
q=A.a([B.b6.j(0.28),B.b6.j(0.08)],u)
p=new A.ay(B.eB.j(0.4),1,B.q,-1)
k.push(A.p(B.A,new A.y(s,o,B.zJ,o,o,o,o,o,o,o,o,o),B.f,o,o,new A.o(o,o,new A.bO(p,p,p,p),new A.bp(r,r,r,r),o,new A.a8(B.b_,B.b4,B.x,q,o,o),B.n),o,52,o,B.jn,o,o,o,42))}return A.p(o,A.w(A.a([A.B(k,B.m,o,B.b9,B.j,0,o,o),B.ac,A.B(A.a([A.E(A.d('Type it in the note ("For") box when you pay, so admin can match your money to you.',o,o,o,o,o,o,A.l(o,o,B.c.j(0.6),o,o,o,o,o,o,o,o,11.5,o,o,B.a5,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.ab,A.hj(B.a0J,D.fyy,new C.dVF(this),A.fx(o,o,o,o,o,o,o,o,o,o,o,B.eB,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],l),B.m,o,B.e,B.j,0,o,o)],l),B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(B.tu,o,m,n,o,o,B.n),o,o,o,o,B.bB,o,o,o)}}
C.rk.prototype={
ag(){var w=this
return A.F(["id",w.a,"title",w.b,"start",w.c.ac(),"end",w.d.ac(),"notes",w.e,"location",w.f],x.N,x.z)}}
C.rl.prototype={
ag(){var w=this
return A.F(["id",w.a,"when",w.b.ac(),"phone",w.c,"name",w.d,"note",w.e,"transcript",w.f,"source",w.r],x.N,x.z)},
gVd(){var w=this,v=A.a([],x.s),u=w.d
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
u=w.c
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
v.push(C.h8m(w.b))
u=w.e
if(u!=null&&B.a.i(u).length!==0)v.push(B.a.i(u))
return B.d.aH(v," \xb7 ")},
gkv(d){return this.c}}
C.lA.prototype={
ag(){var w,v=this,u=A.T(x.N,x.z)
u.n(0,"type",v.a)
w=v.b
if(w.length!==0)u.n(0,"content",w)
w=v.c
if(w!=null&&w.length!==0)u.n(0,"url",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"label",w)
return u}}
C.ip.prototype={
ag(){var w,v=this,u=A.T(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"question",v.b)
w=J.b6(v.c,new C.c98(),x.P)
w=A.C(w,w.$ti.k("ak.E"))
u.n(0,"answerBlocks",w)
w=v.d
if(w!=null&&w.length!==0)u.n(0,"thumbnailPath",w)
u.n(0,"printable",v.e)
u.n(0,"sortOrder",v.f)
return u}}
C.i6.prototype={
akp(d,e,f,g,h,i){var w=this,v=f==null?w.a:f,u=i==null?w.b:i,t=e==null?w.c:e,s=d==null?w.d:d,r=g==null?w.e:g
return new C.i6(v,u,t,s,r,h==null?w.f:h)},
bbg(d){var w=null
return this.akp(w,w,w,w,d,w)},
cIt(d,e,f){return this.akp(d,e,null,null,null,f)},
bbf(d){var w=null
return this.akp(w,w,w,d,w,w)},
cI8(d,e){var w=null
return this.akp(w,w,d,w,e,w)},
ag(){var w=this,v=C.hS8(w.c),u=w.e,t=A.U(u).k("M<1,a5<n,@>>")
u=A.C(new A.M(u,new C.c96(),t),t.k("ak.E"))
return A.F(["id",w.a,"title",w.b,"icon",v,"colorValue",w.d,"sortOrder",w.f,"questions",u],x.N,x.z)}}
C.b8h.prototype={}
C.V2.prototype={
T(){return new C.aD1(new A.as(B.as,$.aw()),A.mA(0,null,null),A.a([],x.m))},
TL(d){return this.d.$1(d)}}
C.aD1.prototype={
a_(){var w,v=this
v.a1()
w=J.b6(v.a.c,new C.dZp(),x.i)
w=A.C(w,w.$ti.k("ak.E"))
B.d.b0(w,new C.dZq())
v.d=w
v.IW()},
q(){var w=this.w
w.S$=$.aw()
w.P$=0
this.x.q()
this.a2()},
adI(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.IW()
u.m(new C.dZj(u))
t=u.a
t.toString
s=u.d
s===$&&A.c()
w=2
return A.b(t.TL(s),$async$adI)
case 2:r=e
if(u.c!=null){u.m(new C.dZk(u))
t=u.c.J(x.q).f
s=A.d(r?"Help Topics saved to cloud.":"Saved locally \u2014 cloud sync failed.",null,null,null,null,null,null,null,null,null,null)
t.U(A.b2(null,null,null,r?B.cZ:B.ay,null,B.r,null,s,null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$adI,v)},
a7U(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a7U=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q="cat_"+1000*Date.now()
p=t.d
p===$&&A.c()
s=new C.i6(q,"New Category",B.G7,4284773515,D.ax3,p.length)
t.m(new C.dZ2(t,s))
t.IW()
p=t.c
if(p==null){w=1
break}w=3
return A.b(A.cb(null,null,!0,null,new C.dZ3(s),p,null,!0,!0,x.i),$async$a7U)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dZ4(t,q,r))
case 1:return A.h(u,v)}})
return A.i($async$a7U,v)},
a1_(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a1_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=B.a.i(q.a.a)
if(p.length===0||t.f){w=1
break}t.m(new C.dZg(t,p))
q.bO(0,B.c8)
q=t.a.e
s=t.d
s===$&&A.c()
w=3
return A.b(C.c93(p,q,s),$async$a1_)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dZh(t,r))
$.aW.x1$.push(new C.dZi(t))
case 1:return A.h(u,v)}})
return A.i($async$a1_,v)},
a9T(d){return this.bMg(d)},
bMg(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a9T=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=u.d
r===$&&A.c()
t=r[d]
r=u.c
r.toString
w=2
return A.b(A.cb(null,null,!0,null,new C.dZa(t),r,null,!0,!0,x.i),$async$a9T)
case 2:s=f
if(s!=null)u.m(new C.dZb(u,d,s))
return A.h(null,v)}})
return A.i($async$a9T,v)},
bK0(d){this.m(new C.dZ9(this,d))
this.IW()},
IW(){var w,v,u=this.d
u===$&&A.c()
w=u.length
v=0
for(;v<w;++v)u[v]=u[v].bbg(v)},
caP(d,e){var w={}
w.a=e
this.m(new C.dZf(w,this,d))},
Yo(d){return this.c0P(d)},
c0P(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Yo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=A.e8(new C.dZe(u,d),!1,null,x.H)
w=2
return A.b(A.a6(s,!1).ck(t),$async$Yo)
case 2:return A.h(null,v)}})
return A.i($async$Yo,v)},
bCm(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=d.a,l=x.O
l=m?A.a([B.fy,B.bo],l):A.a([B.oy,B.ev],l)
w=A.m(16)
v=A.I(m?B.d3.j(0.35):B.dv,B.q,1)
u=A.X(B.dX,m?B.dv:B.dM,n,n,n,n)
t=A.E(A.d("AI Builder \u2014 tell it what to create",n,n,n,n,n,n,A.l(n,n,m?B.aQ:B.M,n,n,n,n,n,n,n,n,n,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
s=o.r?I.a_c:Aa.MW
r=x.p
s=A.a([A.aL(!1,n,!0,A.B(A.a([u,B.ab,t,A.X(s,m?B.bJ:B.ak,n,n,n,n)],r),B.m,n,B.e,B.j,0,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,new C.dZ6(o),n,n,n,n,n,n,n)],r)
if(o.r){u=A.a([B.R],r)
t=o.y
if(t.length!==0){q=(m?D.tf:B.c).j(0.65)
p=A.m(12)
u.push(A.p(n,A.k8(!0,n,o.x,new C.dZ7(o,d),t.length,n,n,n,n,!1,!1),B.f,n,B.aaH,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.cp,n,n,n))}u.push(B.N)
t=o.w
q=A.l(n,n,m?B.aQ:B.M,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
p=A.l(n,n,m?B.bJ:B.ak,n,n,n,n,n,n,n,n,13,n,n,n,n,n,!0,n,n,n,n,n,n,n,n)
m=m?B.bo:B.aQ
q=A.E(A.aM(n,B.T,!1,n,!0,B.r,n,A.aN(),t,n,n,n,n,n,2,A.bs(n,new A.b4(4,A.m(14),B.Y),n,B.eR,n,n,n,n,!0,n,n,n,n,n,n,m,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,p,"e.g. Create a Crypto category with 4 questions about deposits and withdrawals\u2026",n,n,n,n,n,n,n,n,n,!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,3,1,n,!1,"\u2022",n,n,n,new C.dZ8(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,q,!0,B.a4,n,B.an,n,n,n,n),1)
m=o.f?n:o.gcpe()
p=A.bn(B.bk,n,n,n,n,n,B.jm,n,n,n,n,n)
u.push(A.B(A.a([q,new A.II(t,B.bk,n),B.db,A.bG(o.f?B.qp:D.amE,m,p)],r),B.dA,n,B.e,B.j,0,n,n))
B.d.v(s,u)}return A.df(n,A.w(s,B.aj,n,B.e,B.j,0,B.p),n,n,B.bc,new A.o(n,n,v,w,n,new A.a8(B.a3,B.a8,B.x,l,n,n),B.n),B.iE,n,n,B.Fm,B.bB,n,n,n)},
B(d){var w,v=this,u=null,t=A.P(d).ax.a===B.I,s=new C.b8h(t),r=t?B.da:B.bK,q=t?B.da:u,p=t?B.aQ:B.M,o=A.d("Help Topics Admin",u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.M,u,u,u,u,u,u,u,u,u,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),n=v.e,m=n?u:v.gc6N()
if(n)n=B.T6
else n=A.X(B.y6,t?B.aQ:B.M,u,u,u,u)
w=x.p
o=A.eD(A.a([A.hj(n,A.d("Save",u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.M,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),m,u)],w),u,u,!0,!0,q,u,1,u,u,u,!1,u,!1,p,u,u,u,!0,u,u,u,u,u,o,u,u,u,1,u,!0)
p=S.aU2(B.aJ,u,O.VB,B.o6,D.fuV,v.gbyH())
q=v.bCm(s)
n=A.d("Drag categories to reorder. Tap a category to edit questions.",u,u,u,u,u,u,A.l(u,u,t?B.bJ:B.ak,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
m=v.d
m===$&&A.c()
return A.c7(o,r,A.w(A.a([q,new A.D(B.Fm,n,u),A.E(H.hcM(!1,new C.dZo(v,s),m.length,v.gcaO(),D.bsL,u,!1),1)],w),B.aj,u,B.e,B.j,0,B.p),u,!1,!1,p,u)}}
C.Pf.prototype={
T(){return new C.ba7()}}
C.ba7.prototype={
a_(){var w,v=this
v.a1()
w=v.a.c
v.d=new A.as(new A.bb(w.b,B.b5,B.aN),$.aw())
v.e=w.c
v.f=w.d},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?D.tf:B.c,p=A.d("Edit category",s,s,s,s,s,s,A.l(s,s,r?B.c:B.bj,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,B.T,!1,s,!0,B.r,s,A.aN(),o,s,s,s,s,s,2,D.bSo,B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,A.l(s,s,r?B.c:B.bj,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),!0,B.a4,s,B.an,s,s,s,s)
w=x.aS
w=A.C(new A.M(D.bYO,new C.cL1(t),w),w.k("ak.E"))
w=A.bW(B.bA,w,B.bq,8,8)
v=x.gN
v=A.C(new A.M(D.cWa,new C.cL2(t),v),v.k("ak.E"))
u=x.p
v=A.c9(A.w(A.a([o,B.ac,w,B.ac,A.bW(B.bA,v,B.bq,0,8)],u),B.m,s,B.e,B.P,0,B.p),B.r,s,B.y,s,s,s,s,B.ag)
return A.ek(A.a([A.bK(!1,B.de,s,s,!0,s,s,new C.cL3(d),s,s),A.bG(B.pk,new C.cL4(t,d),s)],u),s,s,q,v,s,s,s,s,p,s)}}
C.a_B.prototype={
T(){return new C.aF_()},
oI(d){return this.d.$1(d)}}
C.aF_.prototype={
a_(){this.a1()
this.d=A.bo(this.a.c.e,!0,x.u)},
awA(){var w=this.a,v=w.c,u=this.d
u===$&&A.c()
return w.oI(v.bbf(u))},
a7W(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a7W=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=Date.now()
r=u.d
r===$&&A.c()
w=2
return A.b(u.b_z(new C.ip("q_"+1000*s,"",D.cUL,null,!1,r.length)),$async$a7W)
case 2:t=e
if(t!=null){u.m(new C.eQu(u,t))
u.awA()}return A.h(null,v)}})
return A.i($async$a7W,v)},
b_z(d){var w,v=this.c
v.toString
w=A.e8(new C.eQv(d),!1,null,x.u)
return A.a6(v,!1).ck(w)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=u?B.da:B.bK,s=u?B.da:v,r=u?B.aQ:B.M,q=w.a.c
s=A.eD(v,v,v,!0,!0,s,v,1,v,v,v,!1,v,!1,r,v,v,v,!0,v,v,v,v,v,A.d(q.b+" \u2014 Questions",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.M,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v,1,v,!0)
r=S.aU2(B.aJ,v,O.VB,B.o6,D.fAF,w.gbz8())
q=w.d
q===$&&A.c()
q=q.length
if(q===0){q=A.av(A.d("No questions yet. Tap + Question.",v,v,v,v,v,v,A.l(v,v,u?B.bJ:B.ak,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v)
u=q}else u=A.hK(v,new C.eQA(w,new C.b8h(u)),q,D.bsU,v,B.ag,new C.eQB(),!1)
return A.c7(s,t,u,v,!1,!1,r,v)}}
C.a_A.prototype={
T(){return new C.aEZ()}}
C.aEZ.prototype={
a_(){var w,v=this
v.a1()
w=v.a.c
v.d=new A.as(new A.bb(w.b,B.b5,B.aN),$.aw())
w=A.bo(w.c,!0,x.bP)
v.e=w
if(B.d.gam(w))J.ci(v.e,D.a4L)
w=v.a.c
v.f=w.d
v.r=w.e},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
adH(){var w=0,v=A.j(x.H),u=this,t
var $async$adH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A0.Gw(78,1920),$async$adH)
case 2:t=e
if(t!=null)u.m(new C.eQq(u,t))
return A.h(null,v)}})
return A.i($async$adH,v)},
aeK(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aeK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=A.e8(new C.eQo(u),!1,null,x.dZ)
w=2
return A.b(A.a6(r,!1).ck(t),$async$aeK)
case 2:s=e
if(s!=null)u.m(new C.eQp(u,s))
return A.h(null,v)}})
return A.i($async$aeK,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=A.P(a1).ax.a===B.I,g=h?B.da:B.bK,f=h?B.da:i,e=h?B.aQ:B.M,d=A.d("Edit Question",i,i,i,i,i,i,A.l(i,i,h?B.aQ:B.M,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),a0=x.p
d=A.eD(A.a([A.dn(T.a0S,B.pk,new C.eQs(j,a1),A.bn(B.aJ,i,i,i,B.c,i,i,i,i,i,i,i)),B.au],a0),i,i,!0,!0,f,i,1,i,i,i,!1,i,!1,e,i,i,i,!0,i,i,i,i,i,d,i,i,i,1,i,!0)
f=A.d("Question thumbnail",i,i,i,i,i,i,A.l(i,i,h?B.aQ:B.M,i,i,i,i,i,i,i,i,13,i,i,B.H,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
e=A.m(14)
w=j.f
v=h?B.bJ:B.ak
w=A.aC(i,A.bw(e,K.aP_(A.m(14),B.bU,140,B.Br,v,w,1/0),B.aq),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gc6M(),i,i,i,i,i,i,!1,B.a7)
e=A.d("Question users will tap",i,i,i,i,i,i,A.l(i,i,h?B.aQ:B.M,i,i,i,i,i,i,i,i,13,i,i,B.H,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
v=h?B.bo:B.aQ
u=A.m(16)
t=A.I(h?B.aK:B.aL,B.q,1)
s=j.d
s===$&&A.c()
r=A.l(i,i,h?B.aQ:B.M,i,i,i,i,i,i,i,i,15,i,i,B.a5,i,i,!0,i,i,i,i,i,i,i,i)
v=A.p(i,A.B(A.a([A.E(A.aM(i,B.T,!1,i,!0,B.r,i,A.aN(),s,i,i,i,i,i,2,A.bs(i,B.ez,i,B.bm,i,i,i,i,!0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.l(i,i,h?B.bJ:B.ak,i,i,i,i,i,i,i,i,i,i,i,B.cw,i,i,!0,i,i,i,i,i,i,i,i),"What question should users see?",i,i,i,i,i,i,i,i,i,!0,!0,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i),B.y,!0,i,!0,i,!1,i,B.ai,i,i,i,i,i,i,i,i,i,4,2,i,!1,"\u2022",i,i,i,i,i,!1,i,i,!1,i,!0,i,B.a9,i,i,i,i,i,i,i,i,i,i,i,r,!0,B.a4,i,B.an,i,i,i,i),1),new A.II(j.d,i,i)],a0),B.m,i,B.e,B.j,0,i,i),B.f,i,i,new A.o(v,i,t,u,i,i,B.n),i,i,i,i,B.ek,i,i,i)
u=A.d("Printable document",i,i,i,i,i,i,A.l(i,i,h?B.aQ:B.M,i,i,i,i,i,i,i,i,i,i,i,B.a5,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
u=A.iF(B.aJ,i,i,B.af,i,new C.eQt(j),i,A.d("Shows a printable badge on this answer",i,i,i,i,i,i,A.l(i,i,h?B.bJ:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i,u,j.r)
t=A.d("Stored answer (not AI)",i,i,i,i,i,i,A.l(i,i,h?B.aQ:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
s=A.d("Open the document editor for Word-style formatting, images, links, and video.",i,i,i,i,i,i,A.l(i,i,h?B.bJ:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
r=h?D.tf:B.c
q=A.m(16)
p=A.m(16)
o=A.m(16)
n=A.I(B.bk.j(0.45),B.q,1)
m=A.p(i,D.bJY,B.f,i,i,new A.o(B.bk.j(0.12),i,i,A.m(12),i,i,B.n),i,i,i,i,B.bm,i,i,i)
l=A.d("Open Document Editor",i,i,i,i,i,i,A.l(i,i,h?B.aQ:B.M,i,i,i,i,i,i,i,i,15,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)
k=j.e
k===$&&A.c()
k=J.ad(k)
l=A.E(A.w(A.a([l,B.at,A.d(""+k+" block(s) \xb7 Bold, headings, lists, media",i,i,i,i,i,i,A.l(i,i,h?B.bJ:B.ak,i,i,i,i,i,i,i,i,12,i,i,i,i,i,!0,i,i,i,i,i,i,i,i),i,i,i)],a0),B.F,i,B.e,B.j,0,B.p),1)
return A.c7(d,g,A.cw(A.a([f,B.N,w,B.d7,e,B.N,v,B.aR,u,B.N,t,B.at,s,B.ac,A.aF(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(i,A.B(A.a([m,B.er,l,A.X(B.Bx,h?B.bJ:B.ak,i,i,i,16)],a0),B.m,i,B.e,B.j,0,i,i),B.f,i,i,new A.o(i,i,n,o,i,i,B.n),i,i,i,i,B.fC,i,i,1/0),i,!0,i,i,i,i,i,i,i,i,i,i,i,j.gcco(),i,i,i,i,i,i,i),B.f,r,0,i,i,i,i,i,B.ah)],a0),i,B.bQ,i,i,B.ag,!1),i,!1,!1,i,i)}}
C.d1H.prototype={}
C.V3.prototype={
T(){return new C.aD3(A.jP(!0,null,!0,!0,null,null,!1))}}
C.aD3.prototype={
a_(){var w,v,u,t,s,r,q=this
q.a1()
w=J.dH(q.a.c,new C.e__())
w=A.C(w,w.$ti.k("J.E"))
q.e=w
v=A.a([],x.s)
for(w=J.aV(q.a.c);w.C();){u=w.gR(w)
switch(u.a){case"heading":v.push("## "+u.b)
break
case"text":u=u.b
if(B.a.i(u).length!==0)v.push(u)
break
case"bullets":for(u=u.b.split("\n"),t=u.length,s=0;s<t;++s){r=B.a.i(u[s])
if(r.length!==0)v.push("\u2022 "+r)}break
default:break}}w=B.d.aH(v,"\n\n")
q.d=new A.as(new A.bb(w,B.b5,B.aN),$.aw())},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.f.q()
this.a2()},
awB(d,e){var w,v,u,t,s,r=this.d
r===$&&A.c()
r=r.a
w=r.b
if(!w.geB())return
v=r.a
r=w.a
u=w.b
t=d+B.a.ap(v,r,u)+e
s=B.a.oK(v,r,u,t)
this.d.bO(0,new A.bb(s,A.he(B.bw,r+t.length),B.aN))},
aYL(d){var w,v,u,t,s=this.d
s===$&&A.c()
s=s.a
w=s.a
v=B.o.D(s.b.c,0,w.length)
u=(v>0&&w[v-1]!=="\n"?"\n":"")+d+"\n"
t=B.a.oK(w,v,v,u)
this.d.bO(0,new A.bb(t,A.he(B.bw,v+u.length),B.aN))},
abz(){var w=0,v=A.j(x.H),u,t=this,s
var $async$abz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A0.Gw(78,1920),$async$abz)
case 3:s=e
if(s==null){w=1
break}t.m(new C.dZG(t,s))
case 1:return A.h(u,v)}})
return A.i($async$abz,v)},
XT(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(new A.hZ().a5o(B.eJ),$async$XT)
case 3:s=e
if(s==null){w=1
break}r=C
w=4
return A.b(s.fl(),$async$XT)
case 4:t.m(new r.dZL(t,e))
case 1:return A.h(u,v)}})
return A.i($async$XT,v)},
abA(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$abA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=$.aw()
s=new A.as(B.as,t)
r=new A.as(new A.bb("https://",B.b5,B.aN),t)
q=u.c
q.toString
w=2
return A.b(A.cb(null,null,!0,null,new C.dZJ(s,r),q,null,!0,!0,x.y),$async$abA)
case 2:if(e===!0)u.m(new C.dZK(u,s,r))
s.S$=t
s.P$=0
r.S$=t
r.P$=0
return A.h(null,v)}})
return A.i($async$abA,v)},
bDj(){var w,v,u,t,s,r=null,q=A.a([],x.a),p=this.d
p===$&&A.c()
p=B.a.fF(p.a.a,A.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new A.M(p,new C.dZC(),A.U(p).k("M<1,n>")).c0(0,new C.dZD())
for(p=J.aV(w.a),v=new A.f_(p,w.b),u=x.s,t=x.dv;v.C();){s=p.gR(p)
if(B.a.a0(s,"## "))q.push(new C.lA("heading",B.a.i(B.a.b3(s,3)),r,r))
else if(B.a.a0(s,"\u2022 ")||B.a.a0(s,"- "))q.push(new C.lA("bullets",new A.M(A.a(s.split("\n"),u),new C.dZE(),t).c0(0,new C.dZF()).aH(0,"\n"),r,r))
else q.push(new C.lA("text",s,r,r))}p=this.e
p===$&&A.c()
B.d.v(q,p)
if(q.length===0)q.push(D.a4L)
return q},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.d1H(n),l=n?B.az:B.fI,k=A.d(p.a.d,o,o,o,o,o,o,B.cA,o,o,o),j=x.p
k=A.eD(A.a([A.dn(T.a0S,B.a8f,new C.dZQ(p,d),A.bn(B.aJ,o,o,o,B.c,o,o,o,o,o,o,o)),B.ab],j),o,o,!0,!0,o,o,1,o,o,o,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,k,o,o,o,1,o,!0)
w=n?B.cu:B.iA
v=A.bW(B.bA,A.a([p.vx(E.MX,"Bold",new C.dZR(p),m),p.vx(E.a_e,"Italic",new C.dZS(p),m),p.vx(E.ajX,"Underline",new C.dZT(p),m),p.vx(Ae.a_l,"Heading",new C.dZU(p),m),p.vx(O.MY,"Bullets",new C.dZV(p),m),p.vx(E.ajW,"Align",new C.dZW(),m),p.vx(B.FP,"Link",p.gbYT(),m),p.vx(B.pW,"Image",p.gbYS(),m),p.vx(A_.a_x,"Video",p.gbYU(),m),p.vx(M.a0x,"Signature",new C.dZX(p),m),p.vx(A_.MZ,"Divider",new C.dZY(p),m)],j),B.bq,4,4)
w=A.p(o,A.w(A.a([v,B.am,A.d("Write like Word \u2014 use toolbar or type freely. Stored answers only (not AI chat).",o,o,o,o,o,o,A.l(o,o,n?B.dy:B.bl,o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],j),B.aj,o,B.e,B.j,0,B.p),B.f,w,o,o,o,o,o,o,E.aiO,o,o,o)
v=n?B.da:B.c
u=A.m(12)
t=A.I(n?B.ee:B.e2,B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(n?0.35:0.08),B.cJ,16)],x.V)
r=p.d
r===$&&A.c()
q=A.l(o,o,n?B.iV:B.az,o,o,o,o,o,o,o,o,15,o,o,o,o,1.55,!0,o,o,o,o,o,o,o,o)
j=A.a([w,A.E(new A.D(B.bQ,A.p(o,A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),r,o,o,o,o,o,2,A.bs(o,B.ez,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.dy:B.bl,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Start writing your stored answer\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,p.f,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,q,!0,B.a4,o,B.an,o,o,o,o),B.f,o,o,new A.o(v,o,t,u,s,o,B.n),o,o,o,o,A6.Bb,o,o,o),o),1)],j)
n=p.e
n===$&&A.c()
if(n.length!==0){n=new A.i_(n,A.U(n).k("i_<1>"))
j.push(A.p(o,A.bW(B.bA,n.gdO(n).du(0,new C.dZZ(p,m),x.g5).dK(0),B.bq,0,8),B.f,o,o,o,o,o,o,o,B.Mh,o,o,o))}return A.c7(k,l,A.w(j,B.m,o,B.e,B.j,0,B.p),o,!1,!1,o,o)},
vx(d,e,f,g){var w=null,v=g.a,u=v?B.da:B.c,t=A.m(8),s=A.m(8)
return A.ht(A.aF(!1,B.a1,!0,t,A.aL(!1,s,!0,new A.D(B.cp,A.X(d,v?B.iV:B.az,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,u,0,w,w,w,w,w,B.ah),w,e,w,w)}}
C.dg4.prototype={}
C.aAD.prototype={
a5(){return"_KbView."+this.b}}
C.apz.prototype={
T(){return new C.aD2(D.aUQ)},
cPg(d,e){return this.e.$2$size(d,e)}}
C.aD2.prototype={
gazn(){var w,v
if(this.e==null)return null
for(w=J.aV(this.a.c);w.C();){v=w.gR(w)
if(v.a===this.e)return v}return null},
gcrp(){var w,v,u,t,s,r=this.gazn()
if(r==null||this.f==null)return null
for(w=r.e,v=w.length,u=this.f,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
c6O(d){this.m(new C.dZz(this,d))},
cdz(d){this.m(new C.dZA(this,d))},
bBv(){this.m(new C.dZr(this))},
bBx(){this.m(new C.dZs(this))},
gb5k(){var w=A.bo(this.a.c,!0,x.i)
B.d.b0(w,new C.dZB())
return w},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=new C.dg4(g),e=x.O
e=g?A.a([B.M.j(0.9),B.bo.j(0.85)],e):A.a([B.ev.j(0.55),B.n1.j(0.45)],e)
w=A.m(22)
v=A.I((g?B.aK:B.f8).j(0.55),B.q,1)
switch(i.d.a){case 0:g=i.bCz(f)
break
case 1:g=i.gazn()
g.toString
g=i.bDh(f,g)
break
case 2:u=i.gazn()
u.toString
t=i.gcrp()
t.toString
s=A.b0(u.d)
r=A.m(16)
r=A.p(h,A.d(t.b,h,h,h,h,h,h,D.f5M,h,h,h),B.f,h,h,new A.o(B.aJ,h,h,r,h,h,B.n),h,h,h,h,B.bB,h,h,1/0)
q=g?B.az:B.c
p=A.m(16)
o=A.I(g?B.aK:B.aL,B.q,1)
n=A.a([new A.ac(0,B.G,B.w.j(g?0.28:0.06),B.em,10)],x.V)
m=g?B.fy:B.oy
l=A.m(8)
k=A.X(B.o3,g?B.dv:B.dM,h,h,h,14)
j=x.p
j=A.w(A.a([new C.aAB(f,i.gbBw(),u.c,s,"Answer",h),A.E(A.cw(A.a([r,B.ac,A.p(h,A.w(A.a([A.p(h,A.B(A.a([k,B.ec,A.d("Stored answer",h,h,h,h,h,h,A.l(h,h,g?B.dv:B.dM,h,h,h,h,h,h,h,h,11,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)],j),B.m,h,B.e,B.P,0,h,h),B.f,h,h,new A.o(m,h,h,l,h,h,B.n),h,h,h,B.e5,B.h8,h,h,h),new C.aZX(t.c,t.e,f,h)],j),B.F,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(q,h,o,p,n,h,B.n),h,h,h,h,B.bQ,h,h,1/0)],j),h,B.bsD,h,h,B.ag,!1),1)],j),B.aj,h,B.e,B.j,0,B.p)
g=j
break
default:g=h}return A.p(h,g,B.aq,h,h,new A.o(h,h,v,w,h,new A.a8(B.b_,B.b4,B.x,e,h,h),B.n),h,h,h,B.hO,h,h,h,h)},
aWa(d){var w,v,u,t=null,s=d.a,r=s?D.tf:B.c,q=B.aE.j(0.22)
q=A.a([new A.ac(0,B.G,q,B.J,14),new A.ac(0,B.G,B.w.j(s?0.28:0.06),B.J,8)],x.V)
w=A.I(s?B.aK:B.f8,B.q,2)
v=this.a
u=x.p
q=A.a([A.p(t,A.hV(v.cPg(v.d,72),B.aq),B.f,t,t,new A.o(r,t,w,t,q,t,B.a6),t,72,t,t,t,t,t,72)],u)
if(this.a.f)B.d.v(q,A.a([B.am,A.d("Tap to switch",t,t,t,t,t,t,A.l(t,t,B.cZ,t,t,t,t,t,t,t,t,12,t,t,B.O,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u))
return A.w(q,B.m,t,B.e,B.j,0,B.p)},
bCz(d){var w,v,u=this,t=null,s=u.a.r
s=A.av(s!=null?A.aC(t,u.aWa(d),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,!1,B.a7):u.aWa(d),t,t,t)
w=d.a
v=A.d("Hi! I'm NGMY Helper \ud83d\udc4b",t,t,t,t,t,t,A.l(t,t,w?B.aQ:B.M,t,t,t,t,t,t,t,t,20,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),B.L,t,t)
return A.cw(A.a([s,B.aB,v,B.am,A.d("Select a category below to find answers to common NGMY questions:",t,t,t,t,t,t,A.l(t,t,w?B.bJ:B.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.35,!0,t,t,t,t,t,t,t,t),B.L,t,t),B.by,A.ij(!0,t,t,B.y,F.aOh,new C.dZu(u,d),u.gb5k().length,t,B.dS,B.ag,!0)],x.p),t,D.bsV,t,t,B.ag,!1)},
bDh(d,e){var w,v,u,t,s=null,r=A.bo(e.e,!0,x.u)
B.d.b0(r,new C.dZw())
w=A.b0(e.d)
v=d.a
u=A.d("Tap a question to read the stored answer.",s,s,s,s,s,s,A.l(s,s,v?B.bJ:B.ak,s,s,s,s,s,s,s,s,12,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
t=r.length
if(t===0){t=A.av(A.d("No questions in this category yet.",s,s,s,s,s,s,A.l(s,s,v?B.bJ:B.ak,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s)
v=t}else v=A.hK(s,new C.dZx(this,r,d,e),t,B.vr,s,B.ag,new C.dZy(),!1)
return A.w(A.a([new C.aAB(d,this.gbBu(),e.c,w,e.b,s),new A.D(Aj.vs,u,s),A.E(v,1)],x.p),B.aj,s,B.e,B.j,0,B.p)}}
C.aAB.prototype={
B(d){var w=this,v=null,u=w.c.a,t=A.aH(v,v,v,v,A.X(B.eD,u?B.aQ:B.M,v,v,v,18),v,v,v,w.d,v,v,v,v,v,v),s=w.f,r=s.j(0.15),q=A.m(12)
q=A.p(v,A.X(w.e,s,v,v,v,22),B.f,v,v,new A.o(r,v,v,q,v,v,B.n),v,v,v,v,B.cp,v,v,v)
return new A.D(D.bw9,A.B(A.a([t,q,B.au,A.E(A.d(w.r,v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.M,v,v,v,v,v,v,v,v,17,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,v,v),v)}}
C.abw.prototype={
B(d){var w=null,v=this.c,u=A.b0(v.d),t=this.d.a,s=t?D.tf:B.c,r=A.m(14),q=A.m(14),p=A.m(14),o=A.I(t?B.aK:B.aL,B.q,1),n=A.a([new A.ac(0,B.G,B.w.j(t?0.28:0.06),B.dE,6)],x.V),m=u.j(0.15),l=A.m(12)
l=A.p(w,A.X(v.c,u,w,w,w,22),B.f,w,w,new A.o(m,w,w,l,w,w,B.n),w,40,w,w,w,w,w,40)
return new A.fI(1,A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(w,A.w(A.a([l,B.am,A.d(v.b,w,2,B.a2,w,w,w,A.l(w,w,t?B.aQ:B.M,w,w,w,w,w,w,w,w,10,w,w,B.H,w,1.1,!0,w,w,w,w,w,w,w,w),B.L,w,w)],x.p),B.m,w,B.b9,B.j,0,B.p),B.f,w,w,new A.o(w,w,o,p,n,w,B.n),w,w,w,w,B.cp,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.ah),w)}}
C.aZX.prototype={
B(d){var w,v,u,t,s=null,r=this.e,q=x.p,p=A.a([],q)
if(this.d){w=r.a
v=w?B.fy:B.oy
u=A.m(8)
t=A.X(B.u2,w?B.dv:B.dM,s,s,s,14)
p.push(A.p(s,A.B(A.a([t,B.db,A.d("Printable document",s,s,s,s,s,s,A.l(s,s,w?B.dv:B.dM,s,s,s,s,s,s,s,s,10,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],q),B.m,s,B.e,B.P,0,s,s),B.f,s,s,new A.o(v,s,s,u,s,s,B.n),s,s,s,B.cy,B.eC,s,s,s))}B.d.v(p,J.b6(this.c,new C.c94(r),x.l))
return A.w(p,B.F,s,B.e,B.j,0,B.p)}}
C.abo.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q.a){case"heading":return new A.D(D.bqP,A.d(q.b,r,r,r,r,r,r,A.l(r,r,s.d.a?B.aQ:B.M,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r)
case"image":w=q.c
if(w==null)w=q.b
return new A.D(B.hN,A.bw(A.m(12),K.aP_(r,B.bU,160,B.pW,r,w,1/0),B.aq),r)
case"video":v=q.c
q=v==null?q.b:v
return new A.D(B.hN,new C.aAC(q,s.d,r),r)
case"link":v=q.d
if((v==null?r:v.length!==0)===!0){v.toString
q=v}else{v=q.c
q=v==null?q.b:v}return new A.D(B.vn,A.aL(!1,r,!0,A.d(q,r,r,r,r,r,r,A.l(r,r,s.d.a?B.cn:B.bk,r,B.mO,r,r,r,r,r,r,r,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.cEI(s),r,r,r,r,r,r,r),r)
case"signature":v=s.d.a
u=A.iz(v?B.aK:B.aL,r,r,r,r,r)
q=A.d(q.b,r,r,r,r,r,r,A.l(r,r,v?B.cr:B.aK,r,r,r,r,r,r,r,r,r,B.cF,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
t=A.p(r,r,B.f,v?B.bJ:B.ak,r,r,r,1,r,r,r,r,r,120)
return new A.D(B.AZ,A.w(A.a([u,q,B.aR,t,B.at,A.d("Signature",r,r,r,r,r,r,A.l(r,r,v?B.bJ:B.ak,r,r,r,r,r,r,r,r,10,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r)
case"bullets":v=x.cl
q=A.C(new A.cQ(new A.a_(A.a(q.b.split("\n"),x.s),new C.cEJ(),x.cc),new C.cEK(s),v),v.k("J.E"))
return new A.D(B.kV,A.w(q,B.F,r,B.e,B.j,0,B.p),r)
case"divider":return new A.D(B.hN,A.iz(s.d.a?B.aK:B.aL,r,r,r,r,r),r)
default:q=q.b
if(B.a.i(q).length===0)return B.bH
return new A.D(B.eI,C.hMj(q,s.d),r)}}}
C.aAC.prototype={
T(){return new C.bgc()}}
C.bgc.prototype={
a_(){this.a1()
this.adJ()},
adJ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$adJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:n=B.a.i(r.a.c)
if(J.ad(n)!==0)p=!J.d0(n,"http")&&!J.d0(n,"supabase://")
else p=!0
if(p){w=1
break}t=4
q=A.XZ(A.cE(n,0,null),null)
w=7
return A.b(J.ahE(q),$async$adJ)
case 7:if(r.c==null){w=1
break}r.m(new C.dg5(r,q))
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
return A.i($async$adJ,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
B(d){var w,v,u,t=null,s=this.d
if(s==null||!s.a.ax){w=this.a.d.a
v=w?B.bo:B.fe
u=A.m(12)
return A.p(B.A,A.X(B.q6,w?B.bJ:B.ak,t,t,t,36),B.f,t,t,new A.o(v,t,t,u,t,t,B.n),t,120,t,t,t,t,t,t)}w=A.m(12)
v=s.a
u=J.ahB(v)
return A.bw(w,new A.fI(u,new A.an(B.A,t,B.aa,B.r,A.a([new A.A2(s,t),A.aH(t,t,t,t,A.X(v.f?B.ak3:B.N_,B.c,t,t,t,44),t,t,t,new C.dg7(this,s),t,t,t,t,t,t)],x.p),t),t),B.aq)}}
C.aqm.prototype={
a5(){return"NgmyMusicLane."+this.b}}
C.Iy.prototype={
a5(){return"NgmyMusicRhymeScheme."+this.b}}
C.rr.prototype={}
C.apC.prototype={
T(){var w=null
return new C.aD4(new A.as(B.as,$.aw()),A.mA(0,w,w),A.a([],x.m),D.CE,D.aFP,w,w)},
ge2(){return this.d}}
C.aD4.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.na,null,1,null,v)
w.ff(0,!0)
v.as!==$&&A.aP()
v.as=w
v.z=B.d.gI(D.a3l).a},
q(){var w=this,v=w.as
v===$&&A.c()
v.q()
v=w.d
v.S$=$.aw()
v.P$=0
w.e.q()
w.buU()},
gapF(){var w,v,u,t,s=this.x
if(s===D.CF)return null
s=s===D.CE
w=s?D.a3l:D.a2r
v=s?this.z:this.Q
for(s=w.length,u=0;u<s;++u){t=w[u]
if(t.a===v)return t}return s!==0?B.d.gI(w):null},
csd(d){return this.m(new C.e_d(this,d))},
aza(){$.aW.x1$.push(new C.e_4(this))},
IO(d){return this.crF(d)},
aYM(){return this.IO(null)},
crF(b0){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$IO=A.e(function(b1,b2){if(b1===1){s.push(b2)
w=t}for(;;)switch(w){case 0:a8=B.a.i(b0==null?q.d.a.a:b0)
if(J.ad(a8)===0||q.r||q.a.e){w=1
break}w=3
return A.b(q.a.f.$0(),$async$IO)
case 3:e=b2
if(!e){w=1
break}A.jQ()
d=a8.toLowerCase()
p=B.a.t(d,"continue")||B.a.t(d,"keep going")||B.a.t(d,"go on")||B.a.t(d,"next verse")||B.a.t(d,"more lyrics")||B.a.t(d,"endelea")||B.a.t(d,"endelea na")||B.a.t(d,"ongeza")||B.a.t(d,"tuendelee")
a0=q.f
a1=B.d.b4(a0,new C.e_6())
o=!p&&!a1
d=a8.toLowerCase()
if(!(B.a.t(d,"fix")||B.a.t(d,"rewrite")||B.a.t(d,"re-write")||B.a.t(d,"rhyme better")||B.a.t(d,"better rhyme")||B.a.t(d,"sound better")||B.a.t(d,"improve")||B.a.t(d,"polish")||B.a.t(d,"make it rhyme")||B.a.t(d,"boresha")||B.a.t(d,"rekebisha")||B.a.t(d,"endeleza mistari")))a2=C.hig(a8)&&a1
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
l=C.hig(a8)&&!p
q.m(new C.e_7(q,a8))
q.aza()
k=B.a.i(q.a.c)
if(J.ad(k)===0){q.m(new C.e_8(q))
q.aza()
w=1
break}t=5
j=A.n5(k)
i=new A.M(a0,new C.e_9(),A.U(a0).k("M<1,n>")).aH(0,"\n\n")
a0=C.i5_(m,p,o,q.x,n,q.y,q.gapF(),l)
a3=J.ad(i)!==0?"--- Conversation so far ---\n"+A.t(i)+"\n---\n":""
h=a0+"\n"+a3+"Artist request: "+A.t(a8)
w=8
return A.b(A.qP(j,h,B.hB,null,null),$async$IO)
case 8:g=b2
if(g.b!=null){a0=g.b
a0.toString
a0=B.a.i(a0).length!==0}else a0=!1
if(a0){a0=g.b
a0.toString
a6=B.a.i(a0)}else a6=L.bB6(k,g.a)
f=a6
if(q.c==null){r=[1]
w=6
break}q.m(new C.e_a(q,f))
r.push(7)
w=6
break
case 5:t=4
a9=s.pop()
if(q.c!=null)q.m(new C.e_b(q))
r.push(7)
w=6
break
case 4:r=[2]
case 6:t=2
if(q.c!=null)q.m(new C.e_c(q))
q.aza()
w=r.pop()
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$IO,v)},
bHk(){return this.IO("Continue the same song \u2014 add another verse, bridge, or outro. Keep the twist rhymes and same story.")},
B(d){var w,v,u,t,s=this,r=null,q=A.P(d).ax.a===B.I,p=q?B.ET:D.bgI,o=x.p
o=A.a([A.w(A.a([A.E(s.cqT(q),1),s.bGx(q)],o),B.m,r,B.e,B.j,0,B.p)],o)
if(s.f.length!==0&&!s.r){w=B.aM.j(0.55)
v=s.r?r:s.gbHj()
u=A.m(28)
t=A.a([B.aM,B.aF],x.O)
o.push(A.ao(78,A.aF(!1,B.a1,!0,r,A.aL(!1,r,!0,A.eF(D.e8N,r,new A.o(r,r,r,u,A.a([new A.ac(0,B.G,B.aM.j(0.45),B.cJ,16)],x.V),new A.a8(B.a3,B.a8,B.x,t,r,r),B.n),r,r,r),B.rP,!0,r,r,r,r,r,r,r,r,r,r,r,v,r,r,r,r,r,r,r),B.f,B.K,10,r,w,B.rP,r,r,B.ah),r,r,r,14,r,r))}return A.p(r,new A.an(B.W,r,B.aa,B.r,o,r),B.f,p,r,r,r,r,r,r,r,r,r,r)},
cqT(d){var w,v,u,t=this,s=null
if(t.x===D.CF)w=t.w?340:300
else w=t.w?360:320
v=x.p
w=A.a([A.fWE(s,!1,B.K,0,0,w,A.fSW(t.cwD(d),B.VV,s,s),!1,s,s,!1,!1,0)],v)
u=t.f.length
if(u===0){u=A.X(B.amv,B.aE.j(0.5),s,s,s,52)
w.push(A.b5x(new A.D(B.ex,A.w(A.a([u,B.aB,A.d("Speak or type your idea \u2014 AI writes a WHOLE song\nPaste your lyrics to fix rhyme \xb7 Bible verses welcome\nSwipe up \u2191 for bigger lyrics view",s,s,s,s,s,s,A.l(s,s,d?B.aA:B.dB,s,s,s,s,s,s,s,s,14,s,s,B.a5,s,1.45,!0,s,s,s,s,s,s,s,s),B.L,s,s),B.aB,A.bW(B.fR,A.a([t.ahX("Full bongo love song ABAB",d),t.ahX("Mix: group vs private jet \u2014 which flies?",d),t.ahX("Song from John 3:16 + matching verses",d),t.ahX("Fix my rhyme \u2014 paste your lines",d)],v),B.bq,8,8)],v),B.m,s,B.b9,B.j,0,B.p),s),!1))}else{v=t.r?1:0
w.push(new A.nP(D.brt,A.Xp(new A.on(new C.e_5(t,d),u+v,!0,!0,!0,0,A.rV(),s)),s))}return A.vv(0,s,B.r,t.e,B.y,s,s,A8.aaD,s,s,!1,s,B.ag,!1,w)},
cwD(d){var w=this.as
w===$&&A.c()
return A.c6(w,new C.e_k(this,d),null)},
cwF(d){var w,v=this,u=null,t=A.m(14),s=v.r?u:new C.e_m(v),r=B.w.j(d?0.35:0.06),q=A.m(14),p=A.I(B.b8.j(0.35),B.q,1),o=v.gapF()
o=o==null?u:o.c
o=A.d(o==null?"\ud83c\udfb5":o,u,u,u,u,u,u,B.J5,u,u,u)
w=v.gapF()
w=w==null?u:w.b
if(w==null)w="Style"
w=A.E(A.d(w,u,u,u,u,u,u,A.l(u,u,d?B.c:B.bj,u,u,u,u,u,u,u,u,12,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),1)
return A.aF(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(u,A.B(A.a([o,B.ab,w,A.X(v.w?B.Nq:B.rd,B.b8,u,u,u,20)],x.p),B.m,u,B.e,B.j,0,u,u),B.f,u,u,new A.o(r,u,p,q,u,u,B.n),u,u,u,u,B.o_,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,s,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah)},
auQ(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=this.x===d
switch(d.a){case 0:w=A.a([B.aZ,B.aV],x.O)
break
case 1:w=A.a([B.bk,B.cn],x.O)
break
case 2:w=A.a([B.bC,B.aE],x.O)
break
default:w=n}v=m?6:0
u=A.m(14)
t=A.m(14)
s=this.r?n:new C.e_3(this,d)
r=A.m(14)
w=m?new A.a8(B.a3,B.a8,B.x,w,n,n):n
if(m)q=n
else q=B.w.j(g?0.3:0.05)
p=A.d(f,n,n,n,n,n,n,B.J5,n,n,n)
if(m)o=B.c
else o=g?B.ad:B.bj
return A.E(A.aF(!1,B.a1,!0,u,A.aL(!1,t,!0,A.df(n,A.w(A.a([p,A.d(e,n,n,n,n,n,n,A.l(n,n,o,n,n,n,n,n,n,n,n,10,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],x.p),B.m,n,B.e,B.j,0,B.p),n,n,B.bc,new A.o(q,n,n,r,n,w,B.n),B.a1,n,n,n,B.jF,n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,s,n,n,n,n,n,n,n),B.f,n,v,n,n,n,n,n,B.ah),1)},
cwG(d,e){var w,v,u,t=this,s=null,r=t.x===D.CE?t.z:t.Q,q=A.m(20)
if(r===d.a)r=B.b8.j(e?0.25:0.15)
else r=B.w.j(e?0.2:0.04)
w=A.m(20)
v=t.r?s:new C.e_n(t,d)
u=A.d(d.c,s,s,s,s,s,s,B.Tp,s,s,s)
return A.aF(!1,B.a1,!0,q,A.aL(!1,w,!0,new A.D(B.fL,A.B(A.a([u,B.db,A.d(d.b,s,s,s,s,s,s,A.l(s,s,e?B.c:B.bj,s,s,s,s,s,s,s,s,10,s,s,B.O,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),B.m,s,B.e,B.P,0,s,s),s),s,!0,s,s,s,s,s,s,s,s,s,s,s,v,s,s,s,s,s,s,s),B.f,r,0,s,s,s,s,s,B.ah)},
ahX(d,e){var w=null,v=A.d(d,w,w,w,w,w,w,E.a88,w,w,w),u=B.aE.j(e?0.2:0.1)
return A.mI(w,u,v,w,this.r?w:new C.e_e(this,d),w,w,w,w)},
bGx(d){var w,v,u,t,s=this,r=null,q=s.a.r,p=A.m(22),o=d?B.M.j(0.95):B.c,n=A.I(B.aE.j(0.2),B.q,1),m=x.p,l=A.a([],m)
if(q>0)l.push(new A.D(G.aix,A.d("$"+B.k.ab(q,2)+" per song \xb7 mic for voice input",r,r,r,r,r,r,A.l(r,r,B.aM.j(0.85),r,r,r,r,r,r,r,r,9,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r))
w=s.d
v=A.l(r,r,d?B.c:B.bj,r,r,r,r,r,r,r,r,14,r,r,r,r,r,!0,r,r,r,r,r,r,r,r)
u=s.x===D.CF?"Mix twist \u2014 rhyming double meanings (fly/jet, live/moment)\u2026":"Topic, Bible verse, or paste lyrics to fix\u2026"
v=A.E(A.aM(r,B.T,!1,r,!0,B.r,r,A.aN(),w,r,r,r,r,r,2,A.bs(r,B.ez,r,B.h9,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.l(r,r,d?B.c0:B.hL,r,r,r,r,r,r,r,r,13,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),u,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),B.y,!0,r,!0,r,!1,r,B.ai,r,r,r,r,r,r,r,r,r,4,1,r,!1,"\u2022",r,r,r,new C.e_0(s),r,!1,r,r,!1,r,!0,r,B.a9,r,r,r,r,r,r,r,r,r,r,r,v,!0,B.a4,r,B.an,r,r,r,r),1)
u=s.r
t=u?r:new C.e_1(s)
l.push(A.B(A.a([v,new A.II(w,B.aE,r),A.aF(!1,B.a1,!0,r,A.aL(!1,r,!0,A.eF(u?D.e8Z:D.bMh,r,D.b0i,42,r,42),B.cL,!0,r,r,r,r,r,r,r,r,r,r,r,t,r,r,r,r,r,r,r),B.f,r,0,r,r,B.cL,r,r,B.ah)],m),B.dA,r,B.e,B.j,0,r,r))
return A.p(r,A.w(l,B.aj,r,B.e,B.P,0,B.p),B.f,r,r,new A.o(o,r,n,p,r,r,B.n),r,r,r,B.vp,B.Yq,r,r,r)}}
C.aLa.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
C.V4.prototype={
ag(){var w=this
return A.F(["contacts",w.a,"calendar",w.b,"calls",w.c,"allGrantedOnce",w.d],x.N,x.z)}}
C.Zk.prototype={
T(){return new C.aA2(null,null)},
bg8(){return this.f.$0()}}
C.aA2.prototype={
a_(){var w,v=this,u=null
v.a1()
w=A.bj(u,D.bpU,u,1,u,v)
w.cr(0)
v.d!==$&&A.aP()
v.d=w
w=A.bj(u,B.pO,u,1,u,v)
w.ff(0,!0)
v.e!==$&&A.aP()
v.e=w
w=A.bj(u,B.lk,u,1,u,v)
w.cI(0)
v.f!==$&&A.aP()
v.f=w
w=A.bj(u,B.xw,u,1,u,v)
w.cr(0)
v.r!==$&&A.aP()
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
w.btK()},
c6Q(){var w=this.d
w===$&&A.c()
w.ey(0).bA(new C.ddp(this),x.c)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=Math.min(A.aI(d,B.bW,x.w).w.a.a-32,360),h=B.w.j(0.82),g=k.gc6P(),f=x.l,e=J.e3(18,f)
for(w=k.f,v=0;v<18;++v){w===$&&A.c()
e[v]=new A.D1(new C.ddq(k,v,d),j,w,j)}f=A.C(e,f)
w=k.d
w===$&&A.c()
u=A.m(28)
t=A.I(B.c.j(0.22),B.q,1.5)
s=A.a([new A.ac(2,B.G,B.aF.j(0.35),B.J,40),new A.ac(0,B.G,B.aJ.j(0.25),B.fO,28)],x.V)
r=k.e
r===$&&A.c()
q=k.r
q===$&&A.c()
q=A.c6(new A.h8(A.a([r,q],x.U)),new C.ddr(k),j)
r=A.nO(B.jx,D.fxT,new C.dds())
p=A.d("You have 3 NGMY Helper AI messages left in your 24-hour window. When you reach zero, Help Topics opens automatically until your limit resets.",j,j,j,j,j,j,A.l(j,j,B.c.j(0.88),j,j,j,j,j,j,j,j,13.5,j,j,B.cw,j,1.45,!0,j,j,j,j,j,j,j,j),B.L,j,j)
o=x.p
n=A.B(A.a([k.aYN(B.jJ,"Resets in 24h"),B.ab,k.aYN(B.o3,"Help Topics ready")],o),B.m,j,B.b9,B.j,0,j,j)
m=A.a([],o)
k.a.toString
l=B.c.j(0.35)
m.push(A.E(A.dU(D.fsk,new C.ddt(k),A.di(j,j,j,j,j,j,j,j,j,B.ad,j,j,B.mr,j,new A.b7(A.m(14),B.Y),new A.ay(l,1,B.q,-1),j,j,j,j)),1))
k.a.toString
m.push(B.au)
k.a.toString
l=A.m(14)
m.push(A.E(A.bG(D.fxJ,g,A.bn(B.aJ,j,j,6,B.c,j,B.mr,B.aJ.j(0.5),new A.b7(l,B.Y),j,j,j)),1))
f.push(A.av(A.aC(j,A.c6(w,new C.ddu(k),A.p(j,A.w(A.a([q,B.aB,r,B.R,p,B.N,n,B.by,A.B(m,B.m,j,B.e,B.j,0,j,j)],o),B.m,j,B.e,B.P,0,B.p),B.f,j,j,new A.o(j,j,t,u,s,D.bV4,B.n),j,j,j,j,A9.aip,j,j,i)),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.ddv(),j,j,j,j,j,j,!1,B.a7),j,j,j))
return A.aF(!1,B.a1,!0,j,A.aC(j,new A.an(B.W,j,B.aa,B.r,f,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,g,j,j,j,j,j,j,!1,B.a7),B.f,h,0,j,j,j,j,j,B.ah)},
aYN(d,e){var w=null,v=B.c.j(0.08),u=A.m(20),t=A.I(B.c.j(0.12),B.q,1)
return A.p(w,A.B(A.a([A.X(d,B.aF,w,w,w,13),B.ec,A.d(e,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,10,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.P,0,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.fL,w,w,w)}}
C.aK3.prototype={
aT(){this.b_()
this.aY()
this.dL()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdF())
w.b2$=null
w.a2()}}
C.Nz.prototype={}
C.pP.prototype={}
C.aq9.prototype={
T(){return new C.aDr(A.a([],x.E),A.a([],x.s))}}
C.aDr.prototype={
gaq2(){return B.k.D(A.KU(this.a.c.a,new C.ed6(this)),0,1/0)},
a83(){var w,v=this,u=v.d,t=v.gaq2()
v.a.c.d=t
w=u!=null
if(w)u.d=t
v.at=t
if(w)A.qO(u.a,t,!0,!1)},
Jg(d,e){var w,v,u,t=this,s=t.gaq2(),r=t.at,q=s+(d-(r==null?s:r))
s=!e&&q<s?s:q
w=s<0?0:s
v=t.gaq2()
if(w<v-0.005)A.hnr(t.a.c.a,v-w)
t.at=w
u=t.d
r=u!=null
if(r)u.d=w
t.a.c.d=w
if(r)A.qO(u.a,w,!0,!1)
A.qO(t.a.c.a,w,!0,!1)
A.AJ(!0,!1,w,t.a.c.a)},
a_(){var w,v,u,t,s,r,q,p,o=this,n=null
o.a1()
$.aW.c_$.push(o)
w=$.Il+1
$.Il=w
if(w===1){w=$.h9R
if(w!=null)w.$0()}v=$.fV0.h(0,B.a.i(o.a.c.a.toLowerCase()))
if(v!=null){w=v.a
o.d=w[3]
o.e=A.bo(w[1],!0,x.o)
o.f=w[4]
o.r=w[2]
o.w=A.bo(w[0],!0,x.N)}else{w=o.a.c
u=w.a
t=A.lJ(0,n,!1,n,"",0,0,"",n,0,n,n,"",n,n,B.a.i(u.toLowerCase())+"+local.ngmy",!1,0,!1,0,n,0,n,n,!1,!1,!1,!1,!1,!1,!1,!1,!1,n,n,"",n,n,n,n,0,n,"",n,n,n,"",0,n,n,0,"",n,n,"","","","Georgia","active",0,0,w.c)
t.d=A.aOF(u,B.k.D(w.d,0,1/0))
t.e=w.e
s=w.x
if(s!=null){w=s.a
u=s.b
r=s.c
q=s.d
p=s.f
t.x=new A.vn(w,u,r,q,s.e,p)}o.d=t}o.OR()
o.a83()
$.aW.x1$.push(new C.edN(o))
o.Q=A.dt(B.nY,new C.edO(o))
o.as=A.dt(B.fK,new C.edP(o))},
q(){var w=this,v=w.Q
if(v!=null)v.a6(0)
v=w.as
if(v!=null)v.a6(0)
$.aW.hJ(w)
C.hE9()
w.a2()},
cyM(){var w,v,u,t,s,r,q=this,p=q.d
if(p==null||q.c==null)return
if(!p.f||p.r==null)return
w=new A.S(Date.now(),0,!1)
v=p.r
if(!C.a7p(v,w)){if(C.fV2(p,q.e)){q.m(new C.edv(q,p))
q.xM(!1,!0,!0)}else if(q.c!=null)q.m(new C.edw())
return}if(!C.cbk(v.c?v.bT():v)){q.m(new C.edx(p))
q.aYV(!1)
return}u=p.gCi()
if(u<=0)return
t=w.cY(A.c1(A.bA(w),A.bH(w),A.bR(w),12,0,0,0,0))
s=C.fV3(p,w)
if(t&&s<u-0.0001){if(q.c!=null)q.m(new C.edy())
return}r="local_clockin_payout_"+p.a+"_"+p.r.a
if(B.d.b4(q.e,new C.edz(r))){q.m(new C.edA(p,w,u))
return}q.m(new C.edB(q,p,u,w))
q.axb(new A.d4(r,p.a,u,B.fH,B.fh,"Clock-in daily earnings (local)",null,null,B.cq,w))},
j0(d){if(d===B.fv)this.EC()},
OR(){var w,v,u,t,s,r,q,p=this.d
if(p==null)return
w=this.a.c
w.e=p.e
w.f=p.f
w.r=p.r
w.rx=p.rx
w.fr=p.fr
w.fx=p.fx
w.fy=p.fy
w.bk=p.bk
w.c3=A.bo(p.c3,!0,x.N)
w=this.a.c
w.bQ=p.c3.length
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
q=new A.vn(u,t,s,r,v.e,q)
u=q}w.x=u},
Rz(d){return this.cxr(d)},
cxr(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Rz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}t.OR()
t.Jg(r.d,d)
s=t.a
s=s.r.$2$allowDecrease(s.c.d,d)
w=3
return A.b(x.r.b(s)?s:A.dQ(s,x.H),$async$Rz)
case 3:case 1:return A.h(u,v)}})
return A.i($async$Rz,v)},
EC(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h
var $async$EC=A.e(function(d,e){if(d===1){s.push(e)
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
return A.b(H.zo(q.w,k,l,j,m,!1,n),$async$EC)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}if(p.a[0]){q.m(new C.edq(q,p))
q.Rz(!1)}w=8
return A.b(q.Js(),$async$EC)
case 8:r.push(6)
w=5
break
case 4:t=3
h=s.pop()
o=A.aa(h)
$.am.$1("[growth income] pull wallet: "+A.t(o))
w=9
return A.b(q.Js(),$async$EC)
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
return A.i($async$EC,v)},
Nj(d){return this.bAH(d)},
bAG(){return this.Nj(null)},
bAH(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$Nj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j={}
i=t.d
if(i==null){w=1
break}w=3
return A.b(A.az(),$async$Nj)
case 3:s=f
r=B.a.i(t.a.c.a.toLowerCase())
q=A.dd(t.w,x.N)
r=s.ta("ngmy_gi_credited_txn_ids_"+r)
q.v(0,r==null?A.a([],x.s):r)
j.a=0
p=A.a([],x.s)
o=d==null?null:A.kC(d,A.U(d).c)
for(r=t.e,n=r.length,m=0;m<r.length;r.length===n||(0,A.K)(r),++m){l=r[m]
k=l.a
if(q.t(0,k))continue
if(o!=null&&!o.t(0,k))continue
if(l.d===B.ft&&l.x===B.cq&&l.c>0){j.a=j.a+l.c
p.push(k)}}if(j.a<0.01){w=1
break}if(t.c==null){w=1
break}t.m(new C.ed7(j,t,i))
q.v(0,p)
r=A.C(q,A.a3(q).k("co.E"))
t.w=r
w=4
return A.b(A.aqb(t.a.c.a,r),$async$Nj)
case 4:t.awJ(!1,!0)
r=t.c
if(r!=null)r.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Balance updated: +$"+A.dB(j.a)+" from approved deposits.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Nj,v)},
Js(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$Js=A.e(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:a2=r.e
a3=A.U(a2).k("a_<1>")
a4=A.C(new A.a_(a2,new C.edr(),a3),a3.k("J.E"))
a5=a4
a6=A.a([],x.s)
w=J.ad(a5)!==0?3:4
break
case 3:t=6
a2=a5
a3=A.U(a2).k("M<1,n>")
e=A.C(new A.M(a2,new C.eds(),a3),a3.k("ak.E"))
q=e
w=9
return A.b(A.lo("transactions","id,status",null,null,null,A.F(["id",q],x.N,x.j),null,!0,null,null,!1,B.bI),$async$Js)
case 9:p=a9
if(r.c==null){w=1
break}o=!1
for(a2=J.aV(p);a2.C();){n=a2.gR(a2)
m=n
a3=J.q(m,"id")
l=J.k(a3==null?"":a3)
a3=A.aJ(J.q(m,"status"))
d=a3==null?null:B.k.N(a3)
k=d==null?0:d
if(J.ad(l)===0)continue
j=B.d.bg(r.e,new C.edt(l))
if(j<0)continue
i=r.e[j].x
if(J.A(k,1))a0=B.cq
else a0=J.A(k,2)?B.kh:B.dt
h=a0
if(!J.A(i,h)){a3=r.e
a3[j].x=h
o=!0
if(i===B.dt&&h===B.cq&&a3[j].d===B.ft)J.ci(a6,l)
if(i===B.dt&&h===B.kh&&r.e[j].d===B.eO){g=r.d
if(g!=null){r.Jg(g.d+r.e[j].c,!1)
r.awJ(!1,!0)}}}}if(o&&r.c!=null)r.m(new C.edu())
t=2
w=8
break
case 6:t=5
a7=s.pop()
f=A.aa(a7)
$.am.$1("[growth income] refresh deposit status: "+A.t(f))
w=8
break
case 5:w=2
break
case 8:case 4:w=J.ad(a6)!==0?10:12
break
case 10:w=13
return A.b(r.Nj(a6),$async$Js)
case 13:w=11
break
case 12:w=14
return A.b(r.bAG(),$async$Js)
case 14:case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Js,v)},
Pw(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h
var $async$Pw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:i=t.a.c
w=3
return A.b(A.uC(i.a,i),$async$Pw)
case 3:h=e
if(t.c==null){w=1
break}t.m(new C.edb(t,h))
t.OR()
t.a83()
i=t.a.c.a
s=h.a
r=s[3]
q=s[1]
p=s[4]
o=s[2]
w=4
return A.b(H.zo(s[0],p,q,o,r,!0,i),$async$Pw)
case 4:i=e.a
n=i[4]
m=A.bo(i[2],!0,x.o)
l=i[5]
t.w=A.bo(i[1],!0,x.N)
t.r=i[3]
t.d=n
t.OR()
t.a83()
k=C.fV2(n,m)
if(k)t.Jg(n.d,!1)
i=Date.now()
s=t.a.c
if(!s.w)s=s.Y&&s.au>0
else s=!0
j=A.haA(n,m,new A.S(i,0,!1),s)
i=j!=null
if(i)t.a.c.x=n.x
t.OR()
if(t.c==null){w=1
break}t.m(new C.edc(t,n,m,l))
if(i){t.xM(!1,!0,!0)
if(j==="reset"){A.h9q(t.a.c.a)
i=t.c
if(i!=null)A.h9t(i,null)}else if(j==="warn2"){A.h9r(t.a.c.a)
i=t.c
if(i!=null)C.h9u(i)}}else if(k)t.xM(!1,!0,!0)
else t.Rz(!1)
case 1:return A.h(u,v)}})
return A.i($async$Pw,v)},
xM(d,e,f){return this.cha(d,e,f)},
awJ(d,e){return this.xM(d,!1,e)},
aYV(d){return this.xM(!1,d,!1)},
cha(d,e,f){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$xM=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:o=t.d
if(o==null){w=1
break}if(e)++t.f
s=t.r=new A.S(Date.now(),0,!1).a7()
r=t.a.c.a
q=t.e
p=t.f
w=3
return A.b(A.rp(r,o,q,!1,t.w,s,p),$async$xM)
case 3:p=t.a.c.a
q=t.e
r=t.f
A.Ir(t.w,p,q,s,o,r)
if(f)t.Rz(d)
case 1:return A.h(u,v)}})
return A.i($async$xM,v)},
c74(){this.m(new C.edk())
this.awJ(!1,!0)},
aen(d,e,f){var w,v,u,t,s,r=this,q=r.d
if(q==null)return
if(!f&&d.x===B.cq&&A.rT(d)){w=r.a
w.f.$1(new A.d4(d.a,w.c.a,d.c,d.d,d.e,d.f,null,null,d.x,d.y))
C.cbg(q,d)
v=q.d=A.KU(r.a.c.a,new C.edh(r))
r.at=r.a.c.d=v
A.qO(q.a,v,!0,!1)
if(r.c!=null)r.m(new C.edi(r,d))
r.xM(!0,e,!1)
return}if(f){w=r.a
u=w.c.a
t=d.x
w.f.$1(new A.d4(d.a,u,d.c,d.d,d.e,d.f,d.r,d.w,t,d.y))}w=d.x===B.dt
if(w&&d.d===B.ft)s=!1
else if(w&&d.d===B.eO){r.Jg(q.d-d.c,!0)
s=!0}else{C.cbg(q,d)
w=d.d
s=w===B.eO||w===B.jS
r.Jg(q.d,s)}r.m(new C.edj(r,d))
w=d.d
r.xM(s,e,w===B.eO||w===B.jS||d.x===B.cq||w===B.fH)},
axb(d){return this.aen(d,!0,!1)},
aZT(d,e){return this.aen(d,!0,e)},
aZS(d,e){return this.aen(d,e,!1)},
ca2(d,e,f,g){var w,v=this,u=v.d
if(u==null||v.z)return
if(g<=0||C.i79(u,e,d)){v.m7("This plan is already active.")
return}w=A.hmX(u.a,d,e)
if(C.i3B(u.a,v.e,w)){v.m7("You already own this plan.")
return}if(u.d<g){v.m7("Insufficient balance. Add funds in the Wallet tab first.")
return}v.m(new C.edl(v))
v.m(new C.edm(v,u,new A.vn(d,e,0.0286,new A.S(Date.now(),0,!1),0,0)))
v.axb(new A.d4(w,u.a,g,B.jS,B.fh,"Direct investment buy: "+d,null,null,B.cq,new A.S(Date.now(),0,!1)))
v.m(new C.edn(v))
v.m7("Plan purchased: "+d)},
m7(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
a_b(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_b=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hB(s,new C.an9(t.a.c.a,r,t.e,t.f,null),!0,null,x.H),$async$a_b)
case 3:w=4
return A.b(t.Pw(),$async$a_b)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_b,v)},
aeR(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aeR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hB(s,new C.ahY(r,A.a([r],x.d9),B.Qm,t.a.d,t.gaZR(),t.gaYU(),null),!1,null,x.X),$async$aeR)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aeR,v)},
aeP(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aeP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.hB(s,new C.akL(r,t.a.d,t.e,t.gaZR(),t.gaYU(),new C.edp(t),null),!1,"LocalGrowthGameCenter",x.X),$async$aeP)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aeP,v)},
ack(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$ack=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:j=t.d
if(j==null){w=1
break}s=Date.now()
r=new A.S(s,0,!1)
w=C.fV2(j,t.e)?3:4
break
case 3:w=5
return A.b(t.aYV(!0),$async$ack)
case 5:case 4:if(j.x==null){t.m7("Choose an investment plan first, then come back to clock in.")
t.m(new C.edd(t))
w=1
break}if(A.my(r)===6||A.my(r)===7){t.m7("Clock-in opens Monday through Friday.")
w=1
break}if(!C.haB(r)){t.m7("Today's session ended at 12:00 PM. Come back tomorrow morning.")
w=1
break}q=j.fx
if(C.a7p(q,r)&&j.fy>0){t.m7("Today has already been completed. Come back tomorrow.")
w=1
break}if(!j.f){p=!0
if(!A.aPm(q,r))if(!A.aPm(j.fr,r)){q=A.a([],x.gK)
for(p=t.e,o=p.length,n=0;n<p.length;p.length===o||(0,A.K)(p),++n){m=p[n]
if(B.a.i(m.b.toLowerCase())===B.a.i(j.a.toLowerCase())){l=m.f
if(l==null)l=""
q.push(new A.aFk(m.y,l,m.a))}}q=A.hmo(q,r)}else q=p
else q=p}else q=!1
if(q){t.m7("You already clocked in today. Come back tomorrow.")
w=1
break}if(j.f){t.m7("You are already clocked in for today.")
w=1
break}k=C.hFB(r)
q=j.a
t.m(new C.ede(j,r,k))
t.aZS(new A.d4("local_clockin_manual_"+q+"_"+s,j.a,0,B.fH,B.fh,"Clock-in session started (local)",null,null,B.cq,r),!1)
t.m7("Clock-in started. Keep Growth Income open for today.")
case 1:return A.h(u,v)}})
return A.i($async$ack,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I?B.jf:B.pI
if(l.d==null)return A.el(B.kE,j,!0)
w=x.o
v=A.T(x.N,w)
for(u=l.e,t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s){r=u[s]
q=r.a
if(q.length!==0)v.n(0,q,r)}p=B.a.i(l.a.c.a.toLowerCase())
u=$.fxh
u=u==null?k:u.$0()
u=J.aV(u==null?B.i6:u)
while(u.C()){t=u.gR(u)
q=t.a
if(q.length===0||v.ai(0,q)||A.rT(t))continue
if(B.a.i(t.b.toLowerCase())!==p)continue
o=t.f
if(o==null)o=""
if(A.cS(o.toLowerCase(),"clock-in",0))continue
v.n(0,q,t)}w=A.C(new A.bc(v,v.$ti.k("bc<2>")),w)
v=l.e
B.d.v(w,new A.a_(v,new C.edF(),A.U(v).k("a_<1>")))
B.d.b0(w,new C.edG())
v=l.d
v.toString
u=C.hUd(l.a.c)
t=l.d
t.toString
t=A.el(new C.alB(t,l.a.e,l.z,l.gca1(),l.aTA(),D.fVi),j,!0)
q=l.d
q.toString
o=l.a
n=o.c.a
o=o.d
o=A.el(new C.aAQ(l.aTA(),q,n,o,w,new C.edH(l),l.gcc7(),new C.edI(l),D.fVj),j,!0)
m=A.aI(d,k,x.w).w
n=l.y
return new A.VZ(n,new C.edJ(l),A.aF(!1,B.a1,!0,k,new A.a7(1/0,m.a.b,new A.an(B.W,k,B.aa,B.r,A.a([A.bZ(0,A.el(k,j,!0),0,0,0),A.bZ(0,A.bm(!1,[new C.aAP(v,u,w,l.gc0R(),new C.edK(l),new C.edL(l),new C.edM(d),l.gccY(),l.gccU(),D.fVh),t,o][n],!0,!1,B.af,!0,!0),0,0,0),A.ao(0,l.bD0(),k,k,0,0,k,k)],x.p),k),k),B.f,j,0,k,k,k,k,k,B.ah),k)},
aTA(){var w=null,v=A.a([D.eK.j(0.24),B.M.j(0.72)],x.O)
return A.ht(A.aL(!1,w,!0,A.p(B.A,D.bQO,B.f,w,w,new A.o(w,w,A.I(D.eK.j(0.38),B.q,1),w,A.a([new A.ac(0,B.G,D.eK.j(0.18),B.J,16)],x.V),new A.a8(B.ax,B.aC,B.x,v,w,w),B.a6),w,40,w,w,w,w,w,40),B.cL,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eda(this),w,w,w,w,w,w,w),w,"Growth Income home",w,w)},
bD0(){var w=null,v=A.m(27),u=A.I(B.aw.j(0.45),B.q,1),t=A.a([new A.ac(0,B.G,B.w.j(0.5),B.eV,24),new A.ac(-2,B.G,B.aw.j(0.12),B.J,18)],x.V)
return new A.D(B.Mh,A.bm(!0,A.av(new A.cT(D.aZA,A.p(w,A.cq(new C.ed8(this)),B.f,w,w,new A.o(w,w,u,v,t,D.bUx,B.n),w,54,w,w,w,w,w,w),w),w,w,w),!0,!1,B.af,!0,!1),w)},
c2v(d){var w=null,v=this.y===d,u=D.cYt[d],t=u.b,s=u.a,r=""+d,q=x.W
return A.E(A.ds(w,!0,w,A.aC(B.c7,A.ry(A.qi(v?A.X(s,D.abY,new A.cx("on"+r,q),w,w,21):A.w(A.a([A.X(s,B.c.j(0.62),w,w,w,19),B.bD,A.d(t,w,1,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,9.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,new A.cx("off"+r,q),B.b9,B.j,0,B.p),B.iE,A.rQ(),B.bc,B.bc,A.a1p())),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.edg(this,d),w,w,w,w,w,w,!1,B.a7),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,t,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,B.c4,w),1)}}
C.aAP.prototype={
c_B(d){return C.fV3(this.c,d)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.P(d)
w=B.c.j(0.58)
v=f.e
u=A.U(v).k("a_<1>")
u=A.pd(new A.a_(v,new C.dhT(),u),3,u.k("J.E"))
t=A.C(u,A.a3(u).k("J.E"))
v=f.c
s=v.x
r=new A.S(Date.now(),0,!1)
q=v.f
p=C.a7p(v.fx,r)&&v.fy>0.0001
u=s==null
o=!u
n=o&&!q&&!p&&C.haB(r)
m=v.gCi()
l=A.a([D.eK.j(0.24),B.M.j(0.72)],x.O)
k=A.I(D.eK.j(0.38),B.q,1)
j=x.V
i=A.a([new A.ac(0,B.G,D.eK.j(0.18),B.J,16)],j)
l=A.aL(!1,e,!0,A.p(B.A,A.X(B.i2,D.eK,e,e,e,19),B.f,e,e,new A.o(e,e,k,e,i,new A.a8(B.ax,B.aC,B.x,l,e,e),B.a6),e,38,e,e,e,e,e,38),B.cL,!0,e,e,e,e,e,e,e,e,e,e,e,f.x,e,e,e,e,e,e,e)
i=A.m(14)
k=A.m(14)
j=A.a([new A.ac(0,B.G,B.b6.j(0.45),B.cJ,16)],j)
h=A.m(12)
g=x.p
j=A.bNN(!1,l,"GROWTH INCOME",A.aL(!1,i,!0,new A.a7(44,44,new A.an(B.W,e,B.aa,B.f,A.a([A.p(B.A,A.p(B.A,D.bJl,B.f,e,e,new A.o(B.iC.j(0.78),e,e,h,e,e,B.n),e,36,e,e,e,e,e,36),B.f,e,e,new A.o(e,e,e,k,j,D.bW2,B.n),e,42,e,e,e,e,e,42),A.ao(e,A.p(B.A,D.bPR,B.f,e,e,new A.o(B.bN,e,A.I(D.aev,B.q,2),e,e,e,B.a6),e,17,e,e,e,e,e,17),e,e,e,-1,-3,e)],g),e),e),e,!0,e,e,e,e,e,e,e,e,e,e,e,f.y,e,e,e,e,e,e,e))
k=x.k
h=C.hdb(B.fV,new C.dhU(),k)
k=A.B(A.a([A.E(C.hda(new C.dhV(f,B.qN,n),new A.S(Date.now(),0,!1),h,k),1),B.oj,A.E(new A.up(new C.dhW(f,B.qN),e,new A.h8(A.a([$.yy(),$.a2r()],x.U)),e),1)],g),B.m,e,B.e,B.j,0,e,e)
h=f.c2I(B.qN,D.eK)
v=A.E(f.cuZ("Total Profit","$"+A.dB(v.e),B.qN),1)
u=u?e:s.b
return A.el(A.c9(A.w(A.a([j,B.R,k,B.ac,new C.aAO(f.d,m,q,p,n,o,D.eK,f.gc_A(),f.f,e),B.ac,h,B.R,A.B(A.a([v,B.oj,A.E(f.b5f("Total Investment","$"+A.dB(u==null?0:u),B.qN,f.r),1)],g),B.m,e,B.e,B.j,0,e,e),B.R,f.c_x(d,t,D.eK,w)],g),B.aj,e,B.e,B.j,0,B.p),B.r,e,B.y,e,B.YU,e,e,B.ag),D.aev,!0)},
awI(d,e,f,g,h){var w=null,v=A.m(h),u=A.I(B.c.j(0.09),B.q,1),t=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dn,18)],x.V)
return A.p(w,A.bw(A.m(h-1),new A.an(B.W,w,B.aa,B.r,A.a([A.bZ(0,A.c0(w,new A.o(w,w,w,w,w,new A.bT(f,1.15,B.x,w,0,A.a([e.j(0.22),e.j(0)],x.O),w,w),B.n),B.be),0,0,0),new A.D(g,d,w)],x.p),w),B.aq),B.f,w,w,new A.o(w,w,u,v,t,D.bUY,B.n),w,w,w,w,w,w,w,w)},
aYT(d,e,f,g){return this.awI(d,e,f,B.af,g)},
b7b(d,e,f,g,h,i,j){var w=null,v=A.ao(-14,A.X(e,f.j(0.1),w,w,w,64),w,w,w,-10,w,w),u=f.j(0.16),t=A.m(30),s=A.I(f.j(0.4),B.q,1),r=x.p,q=this.aYT(new A.a7(w,80,new A.an(B.W,w,B.aa,B.r,A.a([v,new A.D(D.brX,A.w(A.a([A.p(w,A.B(A.a([A.X(e,f,w,w,w,15),B.ec,A.d(h.toUpperCase(),w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,10.5,w,w,B.u,w,w,!0,w,1,w,w,w,w,w,w),w,w,w)],r),B.m,w,B.e,B.P,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.aiE,w,w,w),B.b7,A.f6(B.a3,A.d(i,w,1,w,w,w,w,A.l(w,w,j,w,w,w,w,w,w,w,w,21,w,w,B.u,w,1,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.ei)],r),B.F,w,B.e,B.j,0,B.p),w)],r),w),w),f,B.ld,22)
if(g==null)return q
return A.aL(!1,A.m(22),!0,q,w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w)},
c2I(d,e){var w,v,u,t,s=null,r=A.I(e.j(0.55),B.q,2),q=e.j(0.12),p=x.p,o=A.a([],p)
for(w=0;w<3;++w){v=new A.aT(3,3)
o.push(A.p(s,s,B.f,s,s,new A.o(e,s,s,new A.bp(v,v,v,v),s,s,B.n),s,D.cJF[w],s,D.bvq,s,s,s,5))}r=A.p(s,A.B(o,B.dA,s,B.b9,B.j,0,s,s),B.f,s,s,new A.o(q,s,r,s,s,s,B.a6),s,42,s,s,s,s,s,42)
q=A.E(A.w(A.a([D.fu2,B.bD,A.B(A.a([A.p(s,s,B.f,s,s,new A.o(e,s,s,s,A.a([new A.ac(0,B.G,e,B.J,6)],x.V),s,B.a6),s,7,s,s,s,s,s,7),B.bp,new A.dq(1,B.co,A.d("Live \xb7 real-time statistics",s,1,B.a2,s,s,s,A.l(s,s,B.c.j(0.6),s,s,s,s,s,s,s,s,11.5,s,s,B.a5,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s)],p),B.m,s,B.e,B.j,0,s,s)],p),B.F,s,B.e,B.j,0,B.p),1)
o=A.m(16)
v=A.m(16)
u=B.w.j(0.3)
t=A.I(e.j(0.45),B.q,1.2)
return this.awI(A.B(A.a([r,D.eS1,q,B.ab,A.aL(!1,o,!0,A.p(s,A.w(A.a([A.X(B.oS,e.j(0.95),s,s,s,21),B.uI,A.d("PLAY",s,s,s,s,s,s,A.l(s,s,B.c.j(0.7),s,s,s,s,s,s,s,s,8.5,s,s,B.H,s,s,!0,s,1.1,s,s,s,s,s,s),s,s,s)],p),B.m,s,B.b9,B.j,0,B.p),B.f,s,s,new A.o(u,s,t,v,s,s,B.n),s,50,s,s,s,s,s,50),s,!0,s,s,s,s,s,s,s,s,s,s,s,this.z,s,s,s,s,s,s,s)],p),B.m,s,B.e,B.j,0,s,s),e,B.a3,B.Ys,26)},
b5f(d,e,f,g){var w,v=null,u=B.a.t(d.toLowerCase(),"profit"),t=u?B.bN:B.aP,s=A.p(v,v,B.f,v,v,new A.o(t,v,v,D.aXN,v,v,B.n),v,v,v,B.ne,v,v,v,5),r=x.p
r=A.a([s,B.bd,A.E(A.w(A.a([A.B(A.a([A.X(u?B.u0:B.yl,t,v,v,v,14),B.ec,new A.dq(1,B.co,A.d(d,v,1,B.a2,v,v,v,A.l(v,v,B.c.j(0.62),v,v,v,v,v,v,v,v,11.5,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],r),B.m,v,B.e,B.j,0,v,v),B.am,A.f6(B.a3,A.d(e,v,1,v,v,v,v,D.f06,v,v,v),B.f,B.ei)],r),B.F,v,B.b9,B.j,0,B.p),1)],r)
s=g==null
if(!s)r.push(new A.D(B.Yf,A.X(B.ey,B.c.j(0.35),v,v,v,v),v))
w=this.aYT(new A.a7(v,66,A.B(r,B.m,v,B.e,B.j,0,v,v),v),t,B.lC,20)
if(s)return w
return A.aL(!1,A.m(20),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
cuZ(d,e,f){return this.b5f(d,e,f,null)},
c_x(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=null,l=A.p(m,m,B.f,m,m,new A.o(f,m,m,m,A.a([new A.ac(0,B.G,f,B.J,8)],x.V),m,B.a6),m,9,m,m,m,m,m,9),k=A.d("LIVE ACTIVITY",m,m,m,m,m,m,A.l(m,m,B.c.j(0.85),m,m,m,m,m,m,m,m,12.5,m,m,B.u,m,m,!0,m,1.3,m,m,m,m,m,m),m,m,m),j=B.c.j(0.07),i=A.m(20),h=x.p
i=A.a([A.B(A.a([l,B.a71,k,B.b7,A.p(m,A.d(""+e.length,m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,11,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.f,m,m,new A.o(j,m,m,i,m,m,B.n),m,m,m,m,B.Z6,m,m,m)],h),B.m,m,B.e,B.j,0,m,m),B.N],h)
if(e.length===0)i.push(new A.D(B.Yh,A.w(A.a([A.X(B.ha,g,m,m,m,30),B.am,A.d("Nothing yet",m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,m,m,m,B.u,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),B.bD,A.d("Deposit, invest, or clock in to begin.",m,m,m,m,m,m,A.l(m,m,g,m,m,m,m,m,m,m,m,12,m,m,B.a5,m,m,!0,m,m,m,m,m,m,m,m),B.L,m,m)],h),B.m,m,B.e,B.j,0,B.p),m))
else for(l=x.O,w=0;w<e.length;++w){k=A.a([],h)
if(w>0)k.push(new A.mk(1,m,m,m,m,B.c.j(0.07),m))
j=e[w]
v=j.d
u=v===B.eO||v===B.jS
t=u?B.jd:D.eK
g=B.c.j(0.5)
v=new A.aT(12,12)
s=A.a([t.j(0.28),t.j(0.08)],l)
r=new A.ay(t.j(0.35),1,B.q,-1)
v=A.p(B.A,A.X(u?B.u0:B.vQ,t,m,m,m,18),B.f,m,m,new A.o(m,m,new A.bO(r,r,r,r),new A.bp(v,v,v,v),m,new A.a8(B.ax,B.aC,B.x,s,m,m),B.n),m,38,m,m,m,m,m,38)
s=C.i1t(j)
q=C.heS(j.y)
s=A.w(A.a([new A.y(s,m,B.m7,m,m,m,m,B.a2,m,1,m,m),B.bD,new A.y(q,m,new A.H(!0,g,m,m,m,m,11,B.a5,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.F,m,B.e,B.j,0,B.p)
q=t.j(0.14)
p=new A.aT(20,20)
o=u?"-":"+"
n=A.dB(j.c)
q=A.p(m,new A.y(o+"$"+n,m,new A.H(!0,t,m,m,m,m,13,B.u,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),B.f,m,m,new A.o(q,m,m,new A.bp(p,p,p,p),m,m,B.n),m,m,m,m,B.o1,m,m,m)
j=C.hm0(j)
k.push(new A.D(Q.M7,new A.cl(B.aO,B.e,B.j,B.m,m,B.p,m,0,A.a([v,B.bd,new A.bB(1,B.bg,s,m),A.w(A.a([q,B.cS,new A.y(j,m,new A.H(!0,g,m,m,m,m,10,B.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],h),B.dA,m,B.e,B.j,0,B.p)],h),m),m))
B.d.v(i,k)}return this.awI(A.w(i,B.m,m,B.e,B.j,0,B.p),f,B.b_,D.bs4,26)}}
C.aAO.prototype={
T(){return new C.bgV(null,null)},
cOZ(d){return this.z.$1(d)},
cQc(){return this.Q.$0()}}
C.bgV.prototype={
a_(){var w,v=this,u=null
v.a1()
w=A.bj(u,B.pR,u,1,u,v)
w.cI(0)
v.d!==$&&A.aP()
v.d=w
w=A.bj(u,D.bpL,u,1,u,v)
w.cI(0)
v.e!==$&&A.aP()
v.e=w
w=A.bj(u,B.tF,u,1,u,v)
v.f!==$&&A.aP()
v.f=w
v.b6h()},
gb8U(){var w=new A.S(Date.now(),0,!1)
if(A.my(w)===6||A.my(w)===7){w=this.a
w=!w.e&&!w.f&&!w.r}else w=!1
return w},
b6h(){var w=this,v=w.a,u=v.e||v.f||w.gb8U()
if(u){v=w.f
v===$&&A.c()
v=v.r
v=!(v!=null&&v.a!=null)}else v=!1
if(v){v=w.f
v===$&&A.c()
v.cI(0)}else{if(!u){v=w.f
v===$&&A.c()
v=v.r
v=v!=null&&v.a!=null}else v=!1
if(v){v=w.f
v===$&&A.c()
v.bY(0)}}},
bu(d){this.bG(d)
this.b6h()},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
w.bu0()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.a,f=g.e||g.f,e=i.gb8U()
g=i.a
if(g.e)w="COUNTING TO 12 PM"
else if(g.f)w="SESSION COMPLETE"
else{if(e)v="WEEKEND REST"
else v=g.w?"CLOCK IN":"NO PLAN"
w=v}v=B.a.i(g.c)
u=v.length===0?"Member":v.toUpperCase()
t=f?B.aw:g.x
g=g.r?new C.dhM(i):h
v=A.m(32)
s=A.m(32)
r=f?D.de2:D.de0
q=A.I((f?D.oB:B.b3).j(0.28),B.q,1.4)
p=x.V
o=A.a([new A.ac(0,B.G,(f?B.aw:B.b8).j(0.16),B.fO,28)],p)
n=x.p
m=A.a([],n)
if(f)B.d.v(m,A.a([A.ao(h,i.aaS(D.oB,130),h,h,h,-24,-30,h),A.ao(-36,i.aaS(B.aw,140),h,h,-28,h,h,h)],n))
else B.d.v(m,A.a([A.ao(h,i.aaS(B.b8,120),h,h,h,-30,-36,h),A.ao(-40,i.aaS(i.a.x,130),h,h,-36,h,h,h)],n))
if(e){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bZ(0,A.dZ(A.bw(l,new A.ew(A.c6(k,new C.dhN(i),h),h),B.aq),!0,h),0,0,0))}if(f){l=A.m(32)
k=i.f
k===$&&A.c()
m.push(A.bZ(0,A.dZ(A.bw(l,new A.ew(A.c6(k,new C.dhO(i),h),h),B.aq),!0,h),0,0,0))}l=A.m(999)
k=B.c.j(0.06)
j=A.I(B.c.j(0.16),B.q,1)
m.push(A.ao(h,new A.cT(D.aZG,A.p(h,A.B(A.a([A.p(h,h,B.f,h,h,new A.o(t,h,h,h,A.a([new A.ac(0,B.G,t.j(0.5),B.J,8)],p),h,B.a6),h,8,h,h,h,h,h,8),B.ab,new A.dq(1,B.co,A.d(u,h,1,B.a2,h,h,h,D.f5x,h,h,h),h)],n),B.m,h,B.e,B.P,0,h,h),B.f,h,h,new A.o(k,h,j,l,h,h,B.n),h,h,h,h,B.h9,h,h,h),h),h,h,14,h,14,h))
l=x.k
j=C.hdb(B.fV,new C.dhP(),l)
m.push(C.hda(new C.dhQ(i,f,t,e,w),new A.S(Date.now(),0,!1),j,l))
return A.aL(!1,v,!0,A.df(h,new A.an(B.W,h,B.aa,B.f,m,h),h,h,B.bc,new A.o(h,h,q,s,o,new A.a8(B.ax,B.aC,B.x,r,h,h),B.n),B.AV,h,392,h,h,h,h,h),h,!0,h,h,h,h,h,h,h,h,h,h,h,g,h,h,h,h,h,h,h)},
aaS(d,e){var w=null
return A.dZ(A.p(w,w,B.f,w,w,new A.o(w,w,w,w,w,new A.bT(B.A,0.5,B.x,w,0,A.a([d.j(0.22),d.j(0)],x.O),w,w),B.a6),w,e,w,w,w,w,w,e),!0,w)}}
C.baE.prototype={
aYW(d,e,f,g){var w=new A.aO($.W().r,B.ao,null,null,A.a([],x.g)),v=e.a,u=e.b,t=u-f
w.F(new A.b5(v,t))
w.F(new A.cV(v,u,v+f,u))
w.F(new A.cV(v,u,v,u+f))
w.F(new A.cV(v,u,v-f,u))
w.F(new A.cV(v,u,v,t))
w.F(new A.bE())
d.aQ(w,g)},
a4(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=a8/2,b0=b3.b,b1=b0/2
for(w=a7.b,v=w*6.283185307179586,u=0;u<16;++u){t=B.k.E(Math.abs(Math.sin(u*12.9898)*43758.5453),1)
s=B.k.E(Math.abs(Math.sin(u*78.233)*24634.6345),1)
r=(Math.sin(v*(1+B.o.E(u,3))+u)+1)/2
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.1+r*0.5).gp(0)
a7.aYW(b2,new A.u(t*a8,s*b0),2+r*2.2,q)}for(a8=b2.a,b0=w*2,p=a7.e,o=0;o<3;++o){n=B.k.E(b0+o/3,1)
$.W()
m=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
m.b=B.ae
m.c=1.6
m.r=p.j((1-n)*0.38).gp(0)
l=m.H()
a8.drawCircle(a9,b1,138+n*90,l)
l.delete()}for(b0=a7.d,u=0;u<28;++u){k=B.k.E(w*(1+B.o.E(u,2))+u/28,1)
j=u*2.399963+Math.sin(u*1.7)*0.2
i=113.16+k*(70+B.o.E(u,5)*18)
h=a9+Math.cos(j)*i
g=b1+Math.sin(j)*i*0.96
f=B.k.D(Math.sin(k*3.141592653589793),0,1)
switch(B.o.E(u,4)){case 0:e=B.k.D(Math.abs(Math.cos(k*6.283185307179586*3)),0.28,1)
J.by(a8.save())
a8.translate(h,g)
a8.scale(e,1)
$.W()
d=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
d.r=b0.j(f).gp(0)
l=d.H()
a8.drawCircle(0,0,6.5,l)
l.delete()
h=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
h.b=B.ae
h.c=1.2
h.r=p.j(f).gp(0)
l=h.H()
a8.drawCircle(0,0,6.5,l)
l.delete()
if(e>0.6&&f>0.35){h=$.hrA()
g=h.b
a0=g.c
g=g.a.c
h.a4(b2,new A.u(-a0/2,-g.gbd(g)/2))}a8.restore()
break
case 1:$.W()
a0=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
a0.r=p.j(f*0.95).gp(0)
a7.aYW(b2,new A.u(h,g),3+f*3,a0)
break
case 2:$.W()
a0=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
a0.r=B.c.j(f*0.8).gp(0)
l=a0.H()
a8.drawCircle(h,g,1.6+f*1.8,l)
l.delete()
break
default:a0=Math.cos(j)
a1=Math.sin(j)
a2=7+f*7
$.W()
a3=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
a3.c=1.8
a3.d=B.bS
a3.r=b0.j(f*0.8).gp(0)
l=a3.H()
a8.drawLine.apply(a8,[h,g,h-a0*a2,g-a1*a2,l])
l.delete()}}for(a4=0;a4<3;++a4){a5=v+a4*6.283185307179586/3
for(a6=0;a6<8;++a6){r=a5-a6*0.09
w=Math.cos(r)
h=Math.sin(r)
o=1-a6/8
$.W()
g=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
g.r=p.j(o*0.85).gp(0)
l=g.H()
a8.drawCircle(a9+w*144,b1+h*144,1.4+o*2.6,l)
l.delete()}w=Math.cos(a5)
h=Math.sin(a5)
$.W()
g=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
g.r=b0.j(0.28).gp(0)
g.z=N.mH
l=g.H()
a8.drawCircle(a9+w*144,b1+h*144,7,l)
l.delete()}},
av(d){return d.b!==this.b}}
C.baD.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6.a,a0=d/2,a1=a6.b,a2=a1/2,a3=$.W(),a4=A.N()
a4.r=this.d.j(0.075).gp(0)
for(w=a5.a,v=this.b,u=v*6.283185307179586,t=x.g,a3=a3.r,s=0;s<14;++s){r=u+s*6.283185307179586/14
q=A.a([],t)
p=new A.aO(a3,B.ao,e,e,q)
o=r-0.14361566416410484
q.push(new A.b5(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new A.ap(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
o=r+0.14361566416410484
q.push(new A.ap(a0+Math.cos(o)*330,a2+Math.sin(o)*330))
q.push(new A.ap(a0+Math.cos(o)*130,a2+Math.sin(o)*130))
q.push(new A.bE())
n=a4.H()
q=p.gbL().a.snapshot()
w.drawPath((p.e=new A.cC(q)).a,n)
n.delete()}a0=v*2
a2=B.k.E(a0,1)
J.by(w.save())
w.translate(a2*(d+240)-120,0)
a5.j4(0,0.35)
a2=-a1
a3=A.N()
a3.saq(new A.a8(B.a3,B.a8,B.x,A.a([B.c.j(0),B.c.j(0.07),B.c.j(0)],x.O),e,e).aw(0,D.eLB))
a5.aZ(new A.a9(-18,a2,18,a2+a1*3),a3)
w.restore()
for(a2=a1+40,s=0;s<34;++s){m=B.k.E(Math.abs(Math.sin(s*91.7)*43758.5453),1)
l=B.k.E(v*(1+B.o.E(s,2))+s/34,1)
a3=l*6.283185307179586
u=Math.sin(a3*2+s)
J.by(w.save())
w.translate(m*d+u*14,l*a2-20)
w.rotate(a3*(2+B.o.E(s,3))*180/3.141592653589793,0,0)
a3=B.k.D(Math.abs(Math.cos(a3*3+s)),0.3,1)
w.scale(1,a3)
if(l<0.08)a3=l/0.08
else a3=l>0.9?(1-l)/0.1:1
k=B.k.D(a3,0,1)
a3=A.bx(D.eM7,B.Su)
u=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
u.r=D.ay8[B.o.E(s,6)].j(k*0.9).gp(0)
n=u.H()
w.drawRRect(A.es(a3),n)
n.delete()
w.restore()}j=[new A.u(d*0.18,a1*0.2),new A.u(d*0.82,a1*0.26),new A.u(d*0.5,a1*0.07)]
for(i=0;i<3;++i){l=B.k.E(a0+i/3,1)
if(l>0.5)continue
h=l/0.5
g=6+h*44
d=1-h
k=B.k.D(d,0,1)
for(a1=g*0.62,a2=g+5,s=0;s<14;++s){r=s*6.283185307179586/14
a3=Math.cos(r)
v=Math.sin(r)
f=D.ay8[B.o.E(s+i,6)].j(k)
u=j[i]
t=u.a
u=u.b
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.c=2
q.d=B.bS
q.r=f.gp(0)
n=q.H()
w.drawLine.apply(w,[t+a3*a1,u+v*a1,t+a3*g,u+v*g,n])
n.delete()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.gp(0)
n=q.H()
w.drawCircle(t+a3*a2,u+v*a2,1.6,n)
n.delete()}a1=j[i]
$.W()
a2=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
a2.r=B.c.j(k).gp(0)
n=a2.H()
w.drawCircle(a1.a,a1.b,5*d,n)
n.delete()}},
av(d){return d.b!==this.b}}
C.baC.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a6.a/2,a1=a6.b/2,a2=new A.u(a0,a1),a3=a0-4,a4=a3-22
$.W()
w=A.N()
w.b=B.ae
w.c=14
v=e.d
w.r=(v?e.r:B.b3).j(0.22).gp(0)
a5.af(a2,a3-7,w)
w=A.N()
w.b=B.ae
w.c=1.7
w.r=(v?e.f:B.c).j(0.28).gp(0)
a5.af(a2,a3-1,w)
w=A.N()
w.b=B.ae
w.c=1.6
w.r=B.c.j(0.16).gp(0)
a5.af(a2,a4+8,w)
u=A.N()
u.c=1.5
u.d=B.bS
u.r=(v?e.f:B.c).j(0.22).gp(0)
for(w=a3-3,t=a3+2,s=a5.a,r=0;r<12;++r){q=r/12*3.141592653589793*2-1.5707963267948966
p=Math.cos(q)
o=Math.sin(q)
n=Math.cos(q)
m=Math.sin(q)
l=u.H()
s.drawLine.apply(s,[a0+p*w,a1+o*w,a0+n*t,a1+m*t,l])
l.delete()}J.by(s.save())
w=$.W().r
t=x.g
p=new A.aO(w,B.ao,d,d,A.a([],t))
p.F(new A.k1(A.bU(a2,a4)))
a5.qv(0,p)
p=A.bU(a2,a4)
o=A.N()
o.saq(D.efK.aw(0,A.bU(a2,a4)))
a5.aZ(p,o)
k=B.k.D(e.b,0,1)
if(k>0.004){a1+=a4
j=a1-a4*2*k
i=v?5.2:1.8
t=A.a([],t)
h=new A.aO(w,B.ao,d,d,t)
g=a0-a4
a1+=4
h.F(new A.b5(g,a1))
for(w=a0+a4,p=e.c*3.141592653589793,o=p*2,p*=2.2,n=i*0.42;g<=w;g+=3){m=(g-a0)/a4*3.141592653589793
m=new A.ap(g,j+Math.sin(m*2+o)*i+Math.sin(m*3.1-p)*n)
t.push(m)
f=h.f
if(f!=null)m.bB(f)
m=h.e
if(m!=null)m.a.delete()
h.e=null}h.F(new A.ap(w,a1))
h.F(new A.bE())
$.W()
a0=A.N()
a1=x.O
w=e.e
a1=v?A.a([e.f.j(0.55),w.j(0.78),e.r.j(0.92)],a1):A.a([w.j(0.22),D.eK.j(0.34),B.cY.j(0.62)],a1)
a0.saq(new A.a8(B.b_,B.b4,B.x,a1,d,d).aw(0,A.bU(a2,a4)))
a5.aQ(h,a0)
a0=A.N()
a0.b=B.ae
a0.c=2
a0.r=B.c.j(v?0.28:0.14).gp(0)
a5.aQ(h,a0)}s.restore()},
av(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.aAQ.prototype={
T(){var w=$.aw()
return new C.aAR(new A.as(B.as,w),new A.as(B.as,w))},
bg1(d,e){return this.w.$2$cloudRequest(d,e)}}
C.aAR.prototype={
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
m7(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
cwP(d){this.a.bg1(d,!0)
this.m7("Deposit submitted. Admin will review your payment proof.")
this.m(new C.dic())},
cvv(){var w,v,u=this,t=A.d6(u.d.a.a)
if(t==null||t<=0){u.m7("Enter an amount to deposit.")
return}w=u.c
w.toString
v=u.a
A.hB(w,new C.apg(v.d,t,u.gcwO(),v.f,"Your deposit is pending. Admin will verify your payment proof and credit your balance.",null),!1,null,x.X)},
cDa(){var w,v,u,t,s=this,r=s.d,q=A.d6(r.a.a)
if(q==null||q<=0){s.m7("Enter an amount to withdraw.")
return}if(q<10){s.m7("Minimum withdrawal is $"+A.dB(10)+".")
return}w=s.a.d.d
if(q>w){s.m7("Insufficient balance. You have $"+A.dB(w)+".")
return}w=s.e
v=C.hnp(w.a.a)
if(v.length===0){s.m7("Enter your Cash App tag so admin knows where to send your money.")
return}u=q*0.15
t=s.a
t.toString
t.bg1(new A.d4("wd_"+1000*Date.now(),s.a.d.a,q,B.eO,B.kB,"Withdrawal to $"+v+" \u2014 Fee: $"+A.dB(u)+" \u2014 You receive: $"+A.dB(q-u),null,null,B.dt,new A.S(Date.now(),0,!1)),!0)
s.m7("Withdrawal submitted \u2014 waiting for admin approval.")
r.bO(0,B.c8)
w.bO(0,B.c8)
s.m(new C.did())},
cA2(){var w,v,u,t,s,r,q,p
for(w=this.a.r,v=w.length,u=0,t=0,s=0;s<w.length;w.length===v||(0,A.K)(w),++s){r=w[s]
if(r.x!==B.cq||!this.aVp(r)||A.h1D(r))continue
q=r.d
p=q===B.eO||q===B.jS||q===B.es
q=r.c
if(p)t+=q
else u+=q}return new A.bnX(u,t)},
B(d){var w,v,u,t=this,s=null,r=t.cA2(),q=t.a.r,p=new A.a_(q,new C.die(),A.U(q).k("a_<1>")).gM(0)
q=t.a
w=q.c
q=q.x
v=A.a([D.eK.j(0.24),B.M.j(0.72)],x.O)
u=A.I(D.eK.j(0.38),B.q,1)
q=A.bNN(!1,w,"WALLET",A.ht(A.aL(!1,s,!0,A.p(B.A,A.X(V.alO,D.eK,s,s,s,18),B.f,s,s,new A.o(s,s,u,s,s,new A.a8(B.ax,B.aC,B.x,v,s,s),B.a6),s,40,s,s,s,s,s,40),B.cL,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),s,"Back up wallet",s,s))
v=t.bBB(r.a,r.b,p)
u=x.p
w=A.B(A.a([t.apC(B.vQ,"Deposit",0),t.apC(B.u0,"Withdraw",1),t.apC(B.hb,"History",2)],u),B.m,s,B.qa,B.j,0,s,s)
return A.el(A.bm(!1,A.c9(A.w(A.a([q,B.by,v,B.d7,w,B.d7,A.qi(t.f===2?t.bXD():t.c29(),B.ig,A.rQ(),B.bc,B.bc,A.a1p())],u),B.aj,s,B.e,B.j,0,B.p),B.r,s,B.y,s,D.btW,s,s,B.ag),!0,!1,B.af,!0,!0),B.As,!0)},
bBB(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=B.a.i(i.a.e)
if(B.a.t(g,"@")){w=B.a.cH(g,"@")
v=B.a.ap(g,0,Math.min(3,w))+"\u2022\u2022\u2022"+B.a.b3(g,w)}else v=g
w=A.m(26)
u=A.ao(h,i.ayV(220,0.1),h,h,h,-60,-70,h)
t=A.ao(-90,i.ayV(200,0.07),h,h,h,30,h,h)
s=A.ao(-60,i.ayV(150,0.05),h,h,-40,h,h,h)
r=A.m(26)
r=A.bZ(0,A.c0(h,new A.o(h,h,A.I(B.c.j(0.18),B.q,1),r,h,h,B.n),B.be),0,0,0)
q=A.m(6)
p=x.p
q=A.B(A.a([A.p(h,A.b3(h,h,h,new C.ba2(h),B.av),B.f,h,h,new A.o(h,h,h,q,h,D.bX6,B.n),h,28,h,h,h,h,h,38),B.b7,D.fCr],p),B.m,h,B.e,B.j,0,h,h)
o=A.d("Available balance",h,h,h,h,h,h,A.l(h,h,B.c.j(0.75),h,h,h,h,h,h,h,h,12,h,h,B.O,h,h,!0,h,h,h,h,h,h,h,h),h,h,h)
n=A.f6(B.a3,C.aq_(new C.dhZ(i),D.faP,i.a.d.a),B.f,B.ei)
m=A.a([A.E(i.aO6(B.tT,"In",d),1),A.E(i.aO6(B.vE,"Out",e),1)],p)
if(f>0){l=B.cR.j(0.22)
k=A.m(99)
j=A.I(B.iK.j(0.6),B.q,1)
m.push(A.p(h,A.d(""+f+" pending",h,h,h,h,h,h,D.f6t,h,h,h),B.f,h,h,new A.o(l,h,j,k,h,h,B.n),h,h,h,h,B.o1,h,h,h))}return new A.fI(1.62,A.bw(w,new A.an(B.W,h,B.aa,B.r,A.a([D.eeZ,u,t,s,r,new A.D(A7.r7,A.w(A.a([q,B.b7,o,B.bD,n,B.b7,A.B(m,B.m,h,B.e,B.j,0,h,h),B.am,A.d(v,h,1,B.a2,h,h,h,A.l(h,h,B.c.j(0.55),h,h,h,h,h,h,h,h,10.5,h,h,B.a5,h,h,!0,h,0.4,h,h,h,h,h,h),h,h,h)],p),B.F,h,B.e,B.j,0,B.p),h)],p),h),B.aq),h)},
ayV(d,e){var w=null
return A.p(w,w,B.f,w,w,new A.o(w,w,A.I(B.c.j(e),B.q,22),w,w,w,B.a6),w,d,w,w,w,w,w,d)},
aO6(d,e,f){var w=null,v=B.c.j(0.16)
return A.B(A.a([A.p(w,A.X(d,B.c,w,w,w,13),B.f,w,w,new A.o(v,w,w,w,w,w,B.a6),w,22,w,w,w,w,w,22),B.bp,new A.dq(1,B.co,A.f6(B.a3,A.d(e+"  $"+A.dB(f),w,w,w,w,w,w,B.ol,w,w,w),B.f,B.ei),w)],x.p),B.m,w,B.e,B.j,0,w,w)},
apC(d,e,f){var w=null,v=this.f===f,u=v?D.bYr:new A.a8(B.a3,B.a8,B.x,A.a([B.c.j(0.08),B.c.j(0.03)],x.O),w,w),t=A.I(v?B.c.j(0.6):D.eK.j(0.25),B.q,1),s=v?A.a([new A.ac(0,B.G,B.aw.j(0.45),B.J,18)],x.V):w
u=A.df(w,A.X(d,v?D.abY:D.eK,w,w,w,26),w,w,B.ct,new A.o(w,w,t,w,s,u,B.a6),B.Fe,w,62,w,w,w,w,62)
return A.aC(B.c7,new A.a7(92,w,A.w(A.a([u,D.eSW,A.d(e,w,w,w,w,w,w,A.l(w,w,v?B.c:B.aS,w,w,w,w,w,w,w,w,12.5,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dhY(this,f),w,w,w,w,w,w,!1,B.a7)},
c29(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.f===0,a1=e.d,a2=A.d6(a1.a.a)
if(a2==null)a2=0
w=a0?D.eK:B.cn
v=a2>0
u=new C.di9(e,w)
t=new C.di8()
s=e.f
r=A.m(26)
q=x.O
p=A.a([w.j(0.1),B.tu,B.tu],q)
o=A.I(w.j(0.22),B.q,1)
n=x.V
m=A.a([new A.ac(0,B.G,B.w.j(0.35),B.eV,22)],n)
l=w.j(0.15)
l=A.p(d,A.X(a0?B.vQ:B.u0,w,d,d,d,18),B.f,d,d,new A.o(l,d,d,d,d,d,B.a6),d,34,d,d,d,d,d,34)
k=A.E(A.d(a0?"Add money":"Take money out",d,d,d,d,d,d,B.fQ,d,d,d),1)
j=B.c.j(0.06)
i=A.m(99)
h=x.p
i=A.B(A.a([l,B.au,k,A.p(d,A.B(A.a([A.X(B.i2,w,d,d,d,14),A.d("Cash App",d,d,d,d,d,d,A.l(d,d,B.c.j(0.75),d,d,d,d,d,d,d,d,11,d,d,B.H,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)],h),B.m,d,B.e,B.P,0,d,d),B.f,d,d,new A.o(j,d,d,i,d,d,B.n),d,d,d,d,B.kX,d,d,d)],h),B.m,d,B.e,B.j,0,d,d)
l=A.d("$",d,d,d,d,d,d,A.l(d,d,v?w:B.c0,d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
k=A.a([new A.uf(A.af("^\\d*\\.?\\d{0,2}",!0,!1,!1,!1),!0,"")],x.G)
k=A.B(A.a([new A.D(B.i1,l,d),B.db,A.aVJ(new A.cT(D.aZZ,A.aM(d,B.T,!1,d,!0,B.r,d,A.aN(),a1,w,d,d,d,d,2,A.bs(d,B.ez,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,A.l(d,d,B.c.j(0.2),d,d,d,d,d,d,d,d,44,d,d,B.u,d,d,!0,d,d,d,d,d,d,d,d),"0",d,d,d,d,!0,d,d,d,d,!0,!0,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.ai,d,d,k,d,d,B.dW,d,d,d,1,d,d,!1,"\u2022",d,new C.di7(e),d,d,d,!1,d,d,!1,d,!0,d,B.a9,d,d,d,d,d,d,d,d,d,d,d,D.fdv,!0,B.L,d,B.an,d,d,d,d),d),d)],h),B.F,d,B.b9,B.j,0,d,d)
a1=v?120:60
a1=A.av(A.df(d,d,d,d,B.bc,new A.o(d,d,d,A.m(99),d,new A.a8(B.a3,B.a8,B.x,A.a([w.j(0),w,w.j(0)],q),d,d),B.n),B.a1,d,3,d,d,d,d,a1),d,d,d)
q=a0?"Pay NGMY Pay, add your screenshot, and admin credits your wallet.":"Minimum $"+A.dB(10)+" \xb7 admin sends it to your Cash App."
q=A.d(q,d,d,d,d,d,d,A.l(d,d,B.c.j(0.5),d,d,d,d,d,d,d,d,11.5,d,d,B.a5,d,1.35,!0,d,d,d,d,d,d,d,d),B.L,d,d)
l=A.a([],h)
j=a0?D.c1a:D.cfS
g=j.length
f=0
for(;f<g;++f)l.push(u.$1(j[f]))
a1=A.a([i,B.by,k,B.am,a1,B.N,q,B.aB,A.B(l,B.m,d,B.e,B.j,0,d,d)],h)
if(!a0){q=B.c.j(0.04)
l=A.X(B.i2,w,d,d,d,d)
k=A.l(d,d,B.c.j(0.35),d,d,d,d,d,d,d,d,d,d,d,B.O,d,d,!0,d,d,d,d,d,d,d,d)
l=A.a([B.aB,A.aM(d,B.T,!1,d,!0,B.r,d,A.aN(),e.e,d,d,d,d,d,2,A.bs(d,d,d,d,d,d,d,d,!0,new A.b4(4,A.m(16),new A.ay(B.c.j(0.08),1,B.q,-1)),d,d,d,d,d,q,!0,d,d,d,d,new A.b4(4,A.m(16),new A.ay(w,1,B.q,-1)),d,d,d,d,d,d,d,d,k,"Your Cash App tag",d,d,d,d,d,d,d,d,d,!0,!0,!1,d,l,d,d,d,d,d,d,d,d,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.ai,d,d,d,d,d,d,d,d,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a9,d,d,d,d,d,d,d,d,d,d,d,B.nA,!0,B.a4,d,B.an,d,d,d,d)],h)
if(v){q=B.c.j(0.04)
k=A.m(16)
B.d.v(l,A.a([B.ac,A.p(d,A.w(A.a([t.$2("Amount","$"+A.dB(a2)),t.$3$color("Fee (15%)","\u2212 $"+A.dB(a2*0.15),B.f6),A.iz(B.c.j(0.08),d,14,d,d,d),t.$4$bold$color("You receive","$"+A.dB(a2*0.85),!0,D.eK)],h),B.m,d,B.e,B.j,0,B.p),B.f,d,d,new A.o(q,d,d,k,d,d,B.n),d,d,d,d,B.ii,d,d,d)],h))}B.d.v(a1,l)}a1.push(B.aR)
q=A.m(18)
l=a0?B.QK:P.asG
n=A.a([new A.ac(0,B.G,(a0?B.aZ:B.dM).j(0.45),B.dn,18)],n)
k=a0?e.gcvu():e.gcD9()
j=A.X(a0?B.Nd:B.lq,d,d,d,d,20)
if(a0)i=v?"Deposit $"+A.dB(a2):"Deposit funds"
else i=v?"Withdraw $"+A.dB(a2):"Request withdrawal"
a1.push(new A.a7(d,54,A.c0(A.lu(j,A.d(i,d,d,d,d,d,d,B.pe,d,d,d),k,A.fn(d,d,B.K,d,d,d,d,d,d,B.c,d,d,d,B.K,new A.b7(A.m(18),B.Y),d,d,d,d,d)),new A.o(d,d,d,q,n,new A.a8(B.a3,B.a8,B.x,l,d,d),B.n),B.be),d))
return A.p(d,A.w(a1,B.aj,d,B.e,B.j,0,B.p),B.f,d,d,new A.o(d,d,o,r,m,new A.a8(B.b_,B.b4,B.x,p,B.Qf,d),B.n),d,d,new A.cx("form"+s,x.W),d,B.xK,d,d,d)},
bXD(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.a.r,a3=A.U(a2).k("a_<1>"),a4=A.C(new A.a_(a2,new C.di1(a0),a3),a3.k("J.E"))
B.d.b0(a4,new C.di2())
w=B.a.i(a0.a.e.toLowerCase())
a2=A.T(x.N,x.o)
a3=$.fxh
a3=a3==null?a1:a3.$0()
a3=J.aV(a3==null?B.i6:a3)
while(a3.C()){v=a3.gR(a3)
u=v.a
if(u.length!==0&&B.a.i(v.b.toLowerCase())===w)a2.n(0,u,v)}for(a3=a0.a.r,v=a3.length,t=0;t<a3.length;a3.length===v||(0,A.K)(a3),++t){s=a3[t]
u=s.a
if(u.length!==0)a2.n(0,u,s)}a3=a2.$ti.k("bc<2>")
a2=A.C(new A.bc(a2,a3),a3.k("J.E"))
r=C.i21(a2,A.KU(a0.a.e,new C.di3(a0)))
a2=A.m(24)
a3=A.I(B.c.j(0.07),B.q,1)
v=A.m(99)
u=A.m(99)
q=x.p
u=A.a([A.B(A.a([D.byE,A.aL(!1,v,!0,A.p(a1,D.eMZ,B.f,a1,a1,new A.o(a1,a1,A.I(D.eK.j(0.4),B.q,1),u,a1,a1,B.n),a1,a1,a1,a1,B.ms,a1,a1,a1),a1,!0,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new C.di4(a0),a1,a1,a1,a1,a1,a1,a1)],q),B.m,a1,B.e,B.j,0,a1,a1),B.R],q)
if(a4.length===0)u.push(new A.D(D.bqH,A.w(A.a([A.X(B.FR,B.c.j(0.25),a1,a1,a1,40),B.R,D.fz6],q),B.m,a1,B.e,B.j,0,B.p),a1))
else{v=A.a([],q)
for(p=A.db(a4,0,A.dG(a0.r,"count",x.S),A.U(a4).c),o=p.$ti,p=new A.bQ(p,p.gM(0),o.k("bQ<ak.E>")),o=o.k("ak.E");p.C();){n=p.d
if(n==null)n=o.a(n)
m=r.h(0,n.a)
l=n.x
k=n.d
j=k===B.eO||k===B.jS||k===B.es
if(l===B.cq)i=j?B.c9:D.eK
else i=l===B.dt?B.iK:B.h0
h=j?"-":"+"
l=B.c.j(0.06)
k=i.j(0.14)
g=new A.ay(i.j(0.4),1,B.q,-1)
k=A.p(a1,A.X(j?B.u0:B.vQ,i,a1,a1,a1,19),B.f,a1,a1,new A.o(k,a1,new A.bO(g,g,g,g),a1,a1,a1,B.a6),a1,42,a1,a1,a1,a1,a1,42)
f=a0.bRv(n)
e=C.heS(n.y)
d=B.c.j(0.5)
f=A.a([new A.y(f,a1,B.j6,a1,a1,a1,a1,a1,a1,a1,a1,a1),B.bD,new A.y(e,a1,new A.H(!0,d,a1,a1,a1,a1,11,B.a5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1)],q)
e=n.f
if(B.a.i(e==null?"":e).length!==0){e.toString
d=B.c.j(0.4)
f.push(new A.y(e,a1,new A.H(!0,d,a1,a1,a1,a1,10.5,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,B.a2,a1,1,a1,a1))}if(m!=null&&n.x!==B.kh)f.push(new A.D(E.ah_,new A.Ca(B.bA,5,4,B.bq,A.a([a0.aN2("Before",m.b),a0.aN2("After",m.a)],q),a1),a1))
m=A.w(f,B.F,a1,B.e,B.j,0,B.p)
f=n.c
f=f===0?"\u2014":h+"$"+A.dB(f)
e=i.j(0.14)
d=new A.aT(99,99)
n=C.hm0(n)
v.push(A.p(a1,new A.cl(B.aO,B.e,B.j,B.m,a1,B.p,a1,0,A.a([k,B.bd,new A.bB(1,B.bg,m,a1),B.ab,A.w(A.a([new A.y(f,a1,new A.H(!0,i,a1,a1,a1,a1,15,B.u,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.at,A.p(a1,new A.y(n,a1,new A.H(!0,i,a1,a1,a1,a1,9.5,B.H,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1,a1,a1,a1,a1,a1,a1),B.f,a1,a1,new A.o(e,a1,a1,new A.bp(d,d,d,d),a1,a1,B.n),a1,a1,a1,a1,B.Be,a1,a1,a1)],q),B.dA,a1,B.e,B.j,0,B.p)],q),a1),B.f,a1,a1,new A.o(a1,a1,new A.bO(B.Y,B.Y,new A.ay(l,1,B.q,-1),B.Y),a1,a1,a1,B.n),a1,a1,a1,a1,B.tH,a1,a1,a1))}q=a4.length
p=a0.r
if(q>p)v.push(A.hj(D.bO3,A.d("Show more ("+(q-p)+" older)",a1,a1,a1,a1,a1,a1,B.ck,a1,a1,a1),new C.di5(a0),A.fx(a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,D.eK,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
B.d.v(u,v)}return A.p(a1,A.w(u,B.aj,a1,B.e,B.j,0,B.p),B.f,a1,a1,new A.o(B.tu,a1,a3,a2,a1,a1,B.n),a1,a1,D.fVc,a1,D.bsQ,a1,a1,a1)},
aN2(d,e){var w=null,v=B.c.j(0.05),u=A.m(7),t=A.I(B.c.j(0.1),B.q,1),s=A.d3(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.45),w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),d+" "),r=A.dB(e)
return A.p(w,A.XA(A.d3(A.a([s,A.d3(w,w,w,w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),"$"+r)],x.R),w,w,w,w,w,w,w,w,w,w),w,w,D.faZ,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.nh,w,w,w)},
aVp(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
if(B.a.t(w,"clock-in session started"))return!1
v=d.d
if(v===B.es)return d.c>0
if(A.rT(d))return!1
if(v===B.ft||v===B.eO)return!0
if(v===B.or||v===B.jS)return!0
if(v===B.ki)return!0
if(v===B.fH)return B.a.t(w,"clock-in")||d.c>0
return!1},
bRv(d){var w,v=d.f
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
C.ba2.prototype={
a4(d,e){var w,v,u,t
$.W()
w=A.N()
w.r=D.b9D.j(0.55).gp(0)
w.c=1
v=e.a
u=v*0.35
t=e.b
d.bF(new A.u(u,0),new A.u(u,t),w)
u=v*0.65
d.bF(new A.u(u,0),new A.u(u,t),w)
t*=0.5
d.bF(new A.u(0,t),new A.u(v,t),w)},
av(d){return!1}}
C.buF.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null
for(w=a4.b,v=this.b,u=v*6.283185307179586,t=a4.a,s=0+t,r=x.O,q=a3.a,p=0;p<3;++p){o=w*(0.2+0.25*p)+Math.sin(u+p*2)*14-40
n=new A.a9(0,o,s,o+80)
m=[B.b8,B.h4,B.bv][p]
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.saq(new A.a8(B.b_,B.b4,B.x,A.a([m.j(0),m.j(0.1),m.j(0)],r),a2,a2).aw(0,n))
l=o.H()
q.drawRect(A.c_(n),l)
l.delete()}for(k=0;k<46;++k){s=k*12.9898
j=Math.sin(s+78.233)*43758.5453
j=(j-Math.floor(j))*t
i=Math.sin(s+156.466)*43758.5453
h=(i-Math.floor(i))*w
g=0.25+0.75*(0.5+0.5*Math.sin(u*(1+B.o.E(k,3))+k))
i=Math.sin(s+234.699)*43758.5453
s=Math.floor(i)
$.W()
r=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.55*g).gp(0)
l=r.H()
q.drawCircle(j,h,0.7+(i-s)*1.5,l)
l.delete()
if(B.o.E(k,9)===0){f=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
f.r=B.oF.j(0.35*g).gp(0)
f.c=1
l=f.H()
q.drawLine.apply(q,[j-4,h,j+4,h,l])
l.delete()
l=f.H()
q.drawLine.apply(q,[j,h-4,j,h+4,l])
l.delete()}}for(u=-t*0.35,s=w*0.2,r=t*0.08,o=-w*0.02,v*=2,k=0;k<2;++k){f=B.k.E(v+k*0.5,1)
if(f>0.35)continue
p=f/0.35
e=t*(0.75-k*0.4)+u*p
d=w*(0.1+k*0.12)+s*p
$.W()
a0=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
a0.r=B.c.j(0.7*(1-p)).gp(0)
a0.c=1.6
a0.d=B.bS
l=a0.H()
q.drawLine.apply(q,[e+r,d+o,e,d,l])
l.delete()}for(u=t*0.62,w*=0.36,k=0;k<4;++k){f=B.k.E(v+k*0.25,1)
t=B.oF.j(0.5*Math.sin(f*3.141592653589793))
a1=new A.kh(new A.er("z",a2,a2,B.cO,a2,a2,a2,a2,a2,a2,new A.H(!0,t,a2,a2,a2,a2,12+f*14,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),B.a4,B.c6,new A.js(1),a2,a2,a2,a2,B.c5,a2)
a1.en()
a1.a4(a3,new A.u(u+Math.sin(f*6.283185307179586+k)*12+k*8,w-f*90))}},
av(d){return d.b!==this.b}}
C.aKj.prototype={
aT(){this.b_()
this.aY()
this.dL()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdF())
w.b2$=null
w.a2()}}
C.bwB.prototype={}
C.aZA.prototype={}
C.a_7.prototype={
T(){return new C.aDe(new A.as(B.as,$.aw()))},
cRm(d,e){return this.d.$2(d,e)}}
C.aDe.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
aZ_(){var w=this,v=B.a.i(w.d.a.a),u=A.af("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",!0,!1,!1,!1)
if(!u.b.test(v)){w.m(new C.e7m(w))
return}u=w.c
u.toString
A.a6(u,!1).O(null)
w.a.cRm(v,w.e)},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=x.w,d=A.aI(a0,B.eG,e).w
e=A.aI(a0,B.e9,e).w
w=A.av(A.p(f,f,B.f,f,f,new A.o(B.b0,f,f,A.m(2),f,f,B.n),f,4,f,f,f,f,f,42),f,f,f)
v=x.V
u=x.p
t=A.B(A.a([A.p(f,D.bNs,B.f,f,f,new A.o(f,f,f,f,A.a([new A.ac(0,B.G,B.fb.j(0.5),B.J,18)],v),D.aon,B.a6),f,52,f,f,f,f,f,52),B.er,A.E(A.w(A.a([D.fmL,B.bD,A.d(g.a.c,f,1,B.a2,f,f,f,B.nx,f,f,f)],u),B.F,f,B.e,B.j,0,B.p),1),A.aH(f,f,f,f,D.bOh,f,f,f,new C.e7p(a0),f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,f,f)
s=g.b4Y(B.eT,"You",B.cn)
r=B.aM.j(0.15)
q=A.m(99)
q=A.B(A.a([s,new A.D(B.kW,A.p(f,D.fqK,B.f,f,f,new A.o(r,f,A.I(B.aM.j(0.6),B.q,1),q,f,f,B.n),f,f,f,f,B.fL,f,f,f),f),g.b4Y(B.vM,"Your friend",B.bX)],u),B.m,f,B.e,B.j,0,f,f)
r=B.c.j(0.06)
s=A.m(16)
p=B.c.j(0.12)
o=A.m(16)
n=g.f
if(n.length===0)n=f
o=A.aM(f,B.T,!0,f,!0,B.r,f,A.aN(),g.d,f,f,f,f,f,2,A.bs(f,f,f,f,f,f,f,f,!0,new A.b4(4,s,new A.ay(p,1,B.q,-1)),f,f,f,f,n,r,!0,f,f,f,f,new A.b4(4,o,D.aYL),f,f,f,f,f,f,f,f,N.Ds,"friend@example.com",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.bQJ,f,f,f,f,f,f,f,f,f,f,f,f),B.y,!0,f,!0,f,!1,f,B.ai,f,f,f,f,f,B.m6,f,f,f,1,f,f,!1,"\u2022",f,new C.e7q(g),f,new C.e7r(g),f,!1,f,f,!1,f,!0,f,B.a9,f,f,f,f,f,f,f,f,f,f,f,B.iO,!0,B.a4,f,B.an,f,f,f,f)
r=A.a([],u)
for(m=0;m<4;++m){l=D.caU[m]
s=new A.aT(14,14)
p=g.e===l
n=p?D.aom:f
p=p?f:B.c.j(0.06)
k=new A.ay(g.e===l?B.aA:B.bE,1,B.q,-1)
j=""+l
i=l===1?"game":"best of "+j
h=B.c.j(0.7)
s=A.a([new A.bB(1,B.bg,A.aC(f,A.df(f,A.w(A.a([new A.y(j,f,B.dj,f,f,f,f,f,f,f,f,f),new A.y(i,f,new A.H(!0,h,f,f,f,f,10,B.O,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f),f,f,f,f,f,f,f,f,f)],u),B.m,f,B.e,B.j,0,B.p),f,f,B.bc,new A.o(p,f,new A.bO(k,k,k,k),new A.bp(s,s,s,s),f,n,B.n),B.eH,f,f,f,B.f9,f,f,f),B.y,!1,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,new C.e7s(g,l),f,f,f,f,f,f,!1,B.a7),f)],u)
if(l!==7)s.push(B.ab)
B.d.v(r,s)}s=A.B(r,B.m,f,B.e,B.j,0,f,f)
r=A.B(A.a([A.X(B.lo,B.c.j(0.5),f,f,f,15),B.bp,A.E(A.d("They get your invite in their Game Center. When you both join, the match starts together.",f,f,f,f,f,f,A.l(f,f,B.c.j(0.55),f,f,f,f,f,f,f,f,11.5,f,f,f,f,f,!0,f,f,f,f,f,f,f,f),f,f,f),1)],u),B.m,f,B.e,B.j,0,f,f)
p=A.m(18)
v=A.a([new A.ac(0,B.G,B.bC.j(0.4),B.cz,18)],v)
n=g.e
j=n===1?"":"s"
return new A.D(new A.Q(0,0,0,d.f.d+e.r.d),A.p(f,A.w(A.a([w,B.aR,t,B.by,q,B.by,D.fuA,B.am,o,B.aR,D.fyV,B.N,s,B.aB,r,B.aR,new A.a7(f,54,A.c0(A.hj(D.amE,A.d("Send invite \xb7 "+n+" game"+j,f,f,f,f,f,f,B.fQ,f,f,f),g.gc7q(),f),new A.o(f,f,f,p,v,D.bXg,B.n),B.be),f)],u),B.aj,f,B.e,B.P,0,B.p),B.f,f,f,D.b_M,f,f,f,f,D.bu7,f,f,f),f)},
b4Y(d,e,f){var w=null,v=f.j(0.1),u=A.m(16),t=A.I(f.j(0.45),B.q,1)
return A.E(A.p(w,A.w(A.a([A.X(d,f,w,w,w,24),B.at,A.d(e,w,w,w,w,w,w,B.TU,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.f9,w,w,w),1)}}
C.p3.prototype={}
C.bpD.prototype={
a4(d,e){var w,v,u,t,s,r=null,q=e.a/2,p=new A.u(q,e.b/2),o=q-4
for(q=d.a,w=0;w<37;++w){$.W()
v=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
if(w===0)u=B.bi
else u=(w&1)===0?B.bz:B.M
v.r=u.gp(0)
u=A.bU(p,o)
t=v.H()
q.drawArc.apply(q,[A.c_(u),(w*2*3.141592653589793/37-1.5707963267948966)*57.29577951308232,9.72972972972973,!0,t])
t.delete()}$.W()
q=A.N()
q.r=B.fz.gp(0)
q.b=B.ae
q.c=8
d.af(p,o,q)
q=A.N()
q.r=B.aM.gp(0)
d.af(p,o*0.22,q)
q=this.b
if(q!=null){s=A.h1(r,r,r,r,A.d3(r,r,r,r,r,r,r,r,r,B.aQE,A.t(q)),B.a4,B.c6,r,B.dP,B.c5)
s.en()
q=s.b
u=q.c
q=q.a.c
s.a4(d,p.aC(0,new A.u(u/2,q.gbd(q)/2)))}},
av(d){return d.b!=this.b}}
C.Eu.prototype={
a5(){return"NgmyProMoveResult."+this.b}}
C.aqv.prototype={
gk7(){var w=this.d
w=w==null?null:w.a
return w!==!1},
bnE(d,e,f){var w,v,u,t,s=this
s.d=f==null?C.fUL("You",""):f
s.a=0
s.e=!1
s.f=null
s.r=!1
s.w=""
switch(d){case"checkers_deluxe":s.b=1
s.bYs()
w=s.gk7()
v=s.d
s.c=w?"You ("+v.b+") vs NGMY \u2014 capture all opponent discs":v.b+" vs "+v.c+" \u2014 capture all discs"
break
case"tic_tac_go":s.b=1
s.at=A.c2(9,"",!1,x.N)
s.ax=!0
if(s.gk7())w="You are X vs NGMY (O) \u2014 get 3 in a row"
else{w=s.d
w=w.b+" (X) vs "+w.c+" (O)"}s.c=w
break
case"blackjack_vegas":s.b=1
w=x.t
s.ay=A.a([1+e.aA(10),1+e.aA(10)],w)
s.ch=A.a([1+e.aA(10),1+e.aA(10)],w)
s.CW=!1
s.c="Beat the dealer \u2014 don't bust over 21"
break
case"roulette_euro":s.b=1
s.cx=null
s.c="Pick a number \u2014 spin the wheel"
break
case"slots_jackpot":s.b=1
s.db=A.a([e.aA(6),e.aA(6),e.aA(6)],x.t)
s.c="Match 3 symbols for jackpot"
break
case"billiards_snooker":s.b=1
s.dx=e.aj()*3.141592653589793*2
s.c=s.gk7()?"Aim and shoot \u2014 beat NGMY on the snooker table":"Aim and shoot \u2014 pocket balls"
break
case"connect_four_pro":s.b=1
u=J.e3(6,x.L)
for(w=x.S,t=0;t<6;++t)u[t]=A.c2(7,0,!1,w)
s.fr=u
s.fx=1
if(s.gk7())w="You (red discs) vs NGMY (gold) \u2014 connect 4"
else{w=s.d
w=w.b+" (red) vs "+w.c+" (gold)"}s.c=w
break
case"profit_solve":s.b=5
s.aXo(e)
s.c="Solve profit scenarios \u2014 "+s.b+" correct"
break
default:s.b=1
w=D.aDM.h(0,d)
s.c=w==null?"Play to earn":w}},
b9G(d,e,f){var w,v,u,t,s=this,r="gameOver",q="c4Turn",p="checkersTurn",o=s.gk7()
if(o)return
o=x.N
s.x=A.a2(e,o,x.z)
switch(d){case"tic_tac_go":w=e.h(0,"ttt")
if(x.j.b(w)){v=J.b6(w,new C.ccP(),o)
v=A.C(v,v.$ti.k("ak.E"))
s.at=v
if(v.length<9){v=A.C(v,o)
B.d.v(v,A.c2(9-s.at.length,"",!1,o))
s.at=v}}o=e.h(0,"turnEmail")
u=B.a.i(J.k(o==null?"":o).toLowerCase())
o=e.h(0,"playerXEmail")
s.ax=u===B.a.i(J.k(o==null?"":o).toLowerCase())
s.c=s.cAE(e,f)
o=J.A(e.h(0,r),!0)
s.e=o
if(o)s.aq7(e,f)
break
case"connect_four_pro":t=e.h(0,"c4")
if(x.j.b(t)){o=J.b6(t,new C.ccQ(),x.L)
o=A.C(o,o.$ti.k("ak.E"))
s.fr=o
for(o=x.S;v=s.fr,v.length<6;)B.d.L(v,A.c2(7,0,!1,o))}if(A.iH(e.h(0,q)))o=A.ef(e.h(0,q))
else{o=A.c8(A.t(e.h(0,q)),null)
if(o==null)o=1}s.fx=o
s.c=s.bDR(e,f)
o=J.A(e.h(0,r),!0)
s.e=o
if(o)s.aq7(e,f)
break
case"checkers_deluxe":t=e.h(0,"checkers")
if(x.j.b(t)){o=J.b6(t,new C.ccR(),x.L)
o=A.C(o,o.$ti.k("ak.E"))
s.y=o}if(A.iH(e.h(0,p)))o=A.ef(e.h(0,p))
else{o=A.c8(A.t(e.h(0,p)),null)
if(o==null)o=1}s.z=o
s.c=s.bF7(e,f)
o=J.A(e.h(0,r),!0)
s.e=o
if(o)s.aq7(e,f)
break}},
cL2(d){var w=this,v="gameOver",u="winnerEmail",t=null,s="winnerLabel",r="isDraw",q=x.N,p=x.z,o=A.a2(w.x,q,p)
switch(d){case"tic_tac_go":o.n(0,"ttt",A.bo(w.at,!0,q))
o.n(0,"turnEmail",w.aB4())
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
p=A.U(q).k("M<1,ai<G>>")
q=A.C(new A.M(q,new C.ccT(),p),p.k("ak.E"))
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
p=A.U(q).k("M<1,ai<G>>")
q=A.C(new A.M(q,new C.ccU(),p),p.k("ak.E"))
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
aB4(){var w,v,u,t=this
if(t.gk7()){if(t.ax){w=t.d
w=w==null?null:w.d
if(w==null)w=""}else w="ngmy@system"
return w}w=t.x.h(0,"playerXEmail")
if(w==null){w=t.d
w=w==null?null:w.d}v=B.a.i(J.k(w==null?"":w).toLowerCase())
w=t.x.h(0,"playerOEmail")
if(w==null){w=t.d
w=w==null?null:w.e}u=B.a.i(J.k(w==null?"":w).toLowerCase())
return t.ax?v:u},
aq7(d,e){var w,v=this,u=B.a.i(e.toLowerCase()),t=d.h(0,"winnerEmail"),s=B.a.i(J.k(t==null?"":t).toLowerCase())
v.r=J.A(d.h(0,"isDraw"),!0)
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
cAE(d,e){var w,v,u,t,s,r="playerXEmail"
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
bDR(d,e){var w,v,u,t,s
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
bF7(d,e){var w,v,u,t,s,r,q
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
Tt(d,e){var w,v,u=this,t="player1Email",s=!u.e
if(!s||u.gk7())return s
w=B.a.i(e.toLowerCase())
switch(d){case"tic_tac_go":s=u.x.h(0,"turnEmail")
return B.a.i(J.k(s==null?u.aB4():s).toLowerCase())===w
case"connect_four_pro":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.fx===1)return w===v
return w!==v
case"checkers_deluxe":s=u.x.h(0,t)
v=B.a.i(J.k(s==null?"":s).toLowerCase())
if(u.z===1)return w===v
return w!==v}return!0},
bYs(){var w,v,u=this,t=J.e3(8,x.L)
for(w=x.S,v=0;v<8;++v)t[v]=A.im(8,new C.ccM(v),!0,w)
u.y=t
u.z=1
u.as=u.Q=null},
aXo(d){var w=20+d.aA(80),v=w+10+d.aA(50),u=4+d.aA(20)
this.fy="Unit cost $"+w+", sell $"+v+", "+u+" units. Total profit?"
this.go=""+(v-w)*u
this.id.bO(0,B.c8)},
cUQ(d,e,f){var w,v,u,t,s,r=this,q="checkers_deluxe"
if(r.e)return!1
if(r.gk7())w=1
else{v=r.d
v=v==null?null:v.d
w=r.Tt(q,v==null?"":v)?r.z:-1}if(!r.gk7()){v=r.d
v=v==null?null:v.d
v=!r.Tt(q,v==null?"":v)}else v=!1
if(v)return!1
u=r.gk7()?r.z:w
if(!r.gk7()&&u!==r.z)return!1
t=J.q(r.y[d],e)
v=r.Q
if(v==null){if(t===r.z)v=!r.gk7()||t===1
else v=!1
if(v){r.Q=d
r.as=e}return!1}s=r.as
s.toString
if(d===v&&e===s){r.as=r.Q=null
return!1}if(Math.abs(d-v)===1&&Math.abs(e-s)===1&&t===0&&B.o.E(d+e,2)===1){J.aG(r.y[d],e,r.z)
J.aG(r.y[v],s,0)
r.as=r.Q=null
r.z=r.z===1?2:1
if(r.a8K(2)){r.aaj(1)
return!0}if(r.a8K(1)){r.aaj(2)
return!0}if(r.gk7()&&r.z===2){r.bzR(f)
if(r.a8K(2)){r.aaj(1)
return!0}if(r.a8K(1)){r.aaj(2)
return!0}}}return!1},
aaj(d){var w,v,u,t=this,s=" wins \u2014 all discs captured!"
t.e=!0
w=t.f=d===1
if(t.gk7()){if(w){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+s}else v="NGMY wins \u2014 your discs are gone"
v=t.w=v}else{v=t.d
if(w){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+s}t.a=w?1:0
t.c=v
return!0},
bzR(d){var w,v,u,t,s,r,q,p,o,n=this,m=A.a([],x.B)
for(w=x.t,v=0;v<8;++v)for(u=0;u<8;++u){if(J.q(n.y[v],u)!==2)continue
for(t=[A.a([1,-1],w),A.a([1,1],w)],s=0;s<2;++s){r=t[s]
q=v+r[0]
p=u+r[1]
if(q>=0&&q<8&&p>=0&&p<8&&J.q(n.y[q],p)===0&&B.o.E(q+p,2)===1)m.push(A.a([v,u,q,p],w))}}w=m.length
if(w===0)return
o=m[d.aA(w)]
J.aG(n.y[o[2]],o[3],2)
J.aG(n.y[o[0]],o[1],0)
n.z=1},
a8K(d){var w,v,u,t
for(w=this.y,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)for(t=J.aV(w[u]);t.C();)if(t.gR(t)===d)return!1
return!0},
cUR(d,e){var w,v,u,t,s=this
if(s.e||s.at[d].length!==0)return D.qd
if(!s.gk7()){w=s.d
w=w!=null&&!s.Tt("tic_tac_go",w.d)}else w=!1
if(w)return D.qd
if(s.gk7())v="X"
else{w=B.a.i(s.d.d.toLowerCase())
u=s.x.h(0,"playerXEmail")
v=w===B.a.i(J.k(u==null?"":u).toLowerCase())?"X":"O"}s.at[d]=v
if(s.aiF(v))return s.aSe(v,!0)
if(!B.d.t(s.at,""))return s.aSf()
s.ax=!s.ax
if(!s.gk7()){s.x.n(0,"turnEmail",s.aB4())
s.c=s.aWV()
return D.qd}if(s.gk7()){t=s.cik(e)
if(t>=0){s.at[t]="O"
if(s.aiF("O"))return s.aSe("O",!1)
if(!B.d.t(s.at,""))return s.aSf()
s.ax=!0}}s.c=s.gk7()?"Your turn \u2014 you are X":s.aWV()
return D.qd},
aWV(){var w=this.d
if(w==null)return"Take your turn"
return this.Tt("tic_tac_go",w.d)?"Your turn":this.d.c+"'s turn"},
aSe(d,e){var w,v,u=this
u.e=!0
u.f=e
u.r=!1
if(u.gk7()){if(e){w=u.d
w=w==null?null:w.b
w=(w==null?"You":w)+" wins with "+d+"!"}else w="NGMY wins with "+d+"!"
w=u.w=w}else{w=u.d
if(e){w=w==null?null:w.b
v=w==null?"You":w}else{w=w==null?null:w.c
v=w==null?"Opponent":w}w=u.w=v+" wins with "+d+"!"}u.c=w
u.a=e?1:0
return e?D.qe:D.HR},
aSf(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 no winner"
w.a=0
return D.RG},
cik(d){var w,v,u,t=this
for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="O"
if(t.aiF("O")){t.at[w]=""
return w}t.at[w]=""}for(w=0;w<9;++w){v=t.at
if(v[w].length!==0)continue
v[w]="X"
if(t.aiF("X")){t.at[w]=""
return w}t.at[w]=""}for(v=t.at,u=0;u<9;++u){w=D.cYT[u]
if(v[w].length===0)return w}return-1},
aiF(d){var w,v,u
for(w=this.at,v=0;v<8;++v){u=D.d5i[v]
if(w[u[0]]===d&&w[u[1]]===d&&w[u[2]]===d)return!0}return!1},
a31(d){return B.d.cK(d,0,new C.ccS())},
cEM(d){this.ay.push(1+d.aA(10))
if(this.a31(this.ay)>21)return!0
return!1},
cEN(d){var w,v,u,t=this
while(t.a31(t.ch)<17)t.ch.push(1+d.aA(10))
t.CW=!0
w=t.a31(t.ay)
v=t.a31(t.ch)
if(w<=21)u=v>21||w>v
else u=!1
if(u)t.a=1
return!0},
cKu(d,e){var w,v,u,t=this
if(t.e)return D.qd
if(!t.gk7()){w=t.d
w=w!=null&&!t.Tt("connect_four_pro",w.d)}else w=!1
if(w)return D.qd
if(t.gk7())v=1
else v=t.d.r?1:2
w=t.fx
if(w!==v)return D.qd
if(!t.afK(d,w))return D.qd
if(t.a8A(t.fx))return t.aSc(t.fx,!0)
if(t.aNR())return t.aSd()
w=t.fx===1?2:1
t.fx=w
if(t.gk7()&&w===2){u=t.chJ(e)
if(u>=0){t.afK(u,2)
if(t.a8A(2))return t.aSc(2,!1)
if(t.aNR())return t.aSd()
t.fx=1}}t.c=t.gk7()?"Your turn \u2014 drop a red disc":t.bDQ()
return D.qd},
bDQ(){var w=this.d
if(w==null)return"Drop a disc"
return this.Tt("connect_four_pro",w.d)?"Your turn":this.d.c+"'s turn"},
afK(d,e){var w
for(w=5;w>=0;--w)if(J.q(this.fr[w],d)===0){J.aG(this.fr[w],d,e)
return!0}return!1},
aNR(){for(var w=0;w<7;++w)if(J.q(this.fr[0],w)===0)return!1
return!0},
aSc(d,e){var w,v,u,t=this
t.e=!0
t.f=e
t.r=!1
w=d===1?"red discs":"gold discs"
if(t.gk7()){if(e){v=t.d
v=v==null?null:v.b
v=(v==null?"You":v)+" wins with "+w+"!"}else v="NGMY wins with "+w+"!"
v=t.w=v}else{v=t.d
if(e){v=v==null?null:v.b
u=v==null?"You":v}else{v=v==null?null:v.c
u=v==null?"Opponent":v}v=t.w=u+" wins with "+w+"!"}t.c=v
t.a=e?1:0
return e?D.qe:D.HR},
aSd(){var w=this
w.e=!0
w.f=null
w.r=!0
w.c=w.w="Draw \u2014 board full"
w.a=0
return D.RG},
chJ(d){var w,v,u,t,s,r=this
for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.afK(w,2)
v=r.a8A(2)
r.b7n(w)
if(v)return w}for(w=0;w<7;++w){if(J.q(r.fr[0],w)!==0)continue
r.afK(w,1)
u=r.a8A(1)
r.b7n(w)
if(u)return w}t=A.a([],x.t)
for(w=0;w<7;++w)if(J.q(r.fr[0],w)===0)t.push(w)
s=t.length
if(s===0)return-1
return t[d.aA(s)]},
b7n(d){var w
for(w=0;w<6;++w)if(J.q(this.fr[w],d)!==0){J.aG(this.fr[w],d,0)
return}},
a8A(d){var w,v
for(w=0;w<6;++w)for(v=0;v<7;++v){if(J.q(this.fr[w],v)!==d)continue
if(this.bDS(w,v,d))return!0}return!1},
bDS(d,e,f){var w,v,u,t=new C.ccL(this,d,e,f)
for(w=x.t,w=[A.a([0,1],w),A.a([1,0],w),A.a([1,1],w),A.a([1,-1],w)],v=0;v<4;++v){u=w[v]
if(t.$2(u[0],u[1])+t.$2(-u[0],-u[1])-1>=4)return!0}return!1},
baD(d){var w=this
if(B.a.i(w.id.a.a)===w.go){if(++w.a>=w.b)return!0
w.aXo(d)}return w.a>=w.b}}
C.arr.prototype={
T(){return new C.aE2(null,null)},
cQg(d){return this.e.$1(d)}}
C.aE2.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bpO,null,1,null,v)
w.ff(0,!0)
v.d=w
v.a.d.aP(0,v.gaZr())
v.awZ()},
bu(d){var w
this.bG(d)
w=this.a
if(d.c!==w.c){w.d.bO(0,B.c8)
this.awZ()}},
awZ(){var w=this,v=w.a,u=v.d.a.a,t=v.c,s=C.ah8(t,u)
C.ah8(t,u)
w.a.cQg(s)
w.a.toString
w.m(new C.eFE())
v=t.length
if(u.length>=v&&v!==0)w.a.r.$0()},
q(){var w,v=this
v.a.d.a3(0,v.gaZr())
w=v.d
w===$&&A.c()
w.q()
v.bvA()},
B(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.c,i=k.d.a.a,h=C.ah8(j,i),g=C.ah8(j,i),f=j.length,e=i.length,d=A.a([],x.R),a0=f>e?f:e
for(k=x.V,w=0;w<a0;++w){if(w===e&&w<=f){v=m.d
v===$&&A.c()
u=new A.aT(1,1)
d.push(new A.wg(new A.cZ(v,!1,A.p(l,l,B.f,l,l,new A.o(B.aM,l,l,new A.bp(u,u,u,u),A.a([new A.ac(0,B.G,B.aM.j(0.6),B.J,6)],k),l,B.n),l,22,l,B.Mq,l,l,l,3),l),B.Sg,l,l))}if(w>=f){if(w<e){v=i[w]
d.push(new A.er(v,l,l,B.cO,l,l,l,l,l,l,D.f88))}continue}t=j[w]
s=w<e?i[w]:l
if(s==null){r=B.c.j(0.4)
q=B.cw}else if(s===t){r=B.b2
q=B.O}else{r=B.ay
q=B.H}d.push(new A.er(t,l,l,B.cO,l,l,l,l,l,l,new A.H(!0,r,l,l,l,l,17,q,l,l,l,l,1.45,l,l,l,l,l,l,l,l,l,l,l,l,l)))}if(e>=f){k=m.d
k===$&&A.c()
d.push(new A.wg(new A.cZ(k,!1,A.p(l,l,B.f,B.aM,l,l,l,22,l,l,l,l,l,3),l),B.Sg,l,l))}p=f===0?0:B.k.V(h/f*100)
k=B.w.j(0.35)
v=A.m(12)
u=A.I(B.b0,B.q,1)
o=x.p
v=A.p(l,A.w(A.a([A.B(A.a([m.aZq("Correct",""+h,B.bi),B.ab,m.aZq("Wrong / missed",""+(f-g),B.ay),B.b7,A.d(""+p+"% accuracy",l,l,l,l,l,l,G.a7u,l,l,l)],o),B.m,l,B.e,B.j,0,l,l),B.am,D.frS],o),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(k,l,u,v,l,l,B.n),l,l,l,l,B.bm,l,l,l)
u=A.E(A.c9(new A.a9x(l,A.d3(d,l,l,l,l,l,l,l,l,l,l),l,l,l),B.r,l,B.y,l,l,l,l,B.ag),1)
k=m.a.d
g=A.l(l,l,B.c.j(0.35),l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.w.j(0.35)
return A.w(A.a([v,B.ac,u,B.R,A.aM(l,B.T,!0,l,!0,B.r,l,A.aN(),k,l,l,l,l,l,2,A.bs(l,new A.b4(4,A.m(12),B.Y),l,l,l,l,l,l,!0,l,l,l,l,l,l,n,!0,l,l,l,l,new A.b4(4,A.m(12),D.aYE),l,l,l,l,l,l,l,l,g,"Type the sentence \u2014 you can fix mistakes as you go",l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.y,!0,l,!0,l,!1,l,B.ai,l,l,l,l,l,l,l,l,l,3,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,B.a9,l,l,l,l,l,l,l,l,l,l,l,D.aQD,!0,B.a4,l,B.an,l,l,l,l)],o),B.aj,l,B.e,B.j,0,B.p)},
aZq(d,e,f){var w=null,v=f.j(0.15),u=A.m(8)
return A.p(w,A.d(d+": "+e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,w,w,new A.o(v,w,w,u,w,w,B.n),w,w,w,w,B.fL,w,w,w)}}
C.aLR.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
var z=a.updateTypes(["aA<~>()","~()","G(i6,i6)","~([xj?])","R(qI)","qI()","G(rk,rk)","R(rk)","G(rl,rl)","Pf(Y)","R(i6)","cL(ado)","ZP(Y)","YW(Y)","aeb(Y)","a6g(Y)","Nm(Y)","ad_(Y,hH<ai<ja>>)","acZ(Y,G)","r(qI)","rk(a5<@,@>)","~(Eu,aqv)","Ne(Y)","a5<n,@>(rk)","rl(a5<@,@>)","a5<n,@>(kp)","a5<n,@>(rl)","R(rl)","a5<n,@>(lA)","lA(@)","a5<n,@>(ip)","ip(@)","i6(@)","aA<~>(kp)","a5<n,@>(i6)","~(G,G)","i6(i6)","V2(Y)","aA<R>(ai<i6>)","ZO(Y)","~(i6)","a_A(Y)","V3(Y)","n(i6)","R(lA)","wY(bv<G,lA>)","abw(Y,G)","G(ip,ip)","abo(lA)","r(rr)","bB(Iy)","Zk(Y)","~(d4{bumpWalletRevision:R,cloudRequest:R})","~(n,L,L,L)","L(S)","~(d4)","a_7(Y)","~(Eu)","n(n)","a_B(Y)"])
C.crs.prototype={
$0(){var w,v,u,t,s=this,r={}
r.a=0
w=s.a
v=s.c
u=new C.crt(r,w,s.b,v,s.d)
t=s.e
r.b=A.dt(t,u)
v.r=new C.crp(r)
v.e=new C.crq(r,w)
v.f=new C.crr(r,w,t,u)},
$S:0}
C.crt.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=this
o.b.lC(0)
s=o.c
if(s!=null){w=null
try{w=s.$1(o.a.a++)}catch(r){v=A.aa(r)
u=A.ch(r)
s=v
q=u
p=A.G2(s,q)
if(p==null)p=new A.j6(s,q==null?A.a2E(s):q)
t=p
o.d.hs(t.a,t.b)
return}o.d.L(0,w)}else{o.e.a(null)
o.d.L(0,null)}},
$S:40}
C.crp.prototype={
$0(){this.a.b.a6(0)
return $.GH()},
$S:1622}
C.crq.prototype={
$0(){var w=this.b
if(w.b==null)w.b=$.asU.$0()
this.a.b.a6(0)},
$S:0}
C.crr.prototype={
$0(){var w,v=this,u=v.b,t=A.dC(0,0,u.gbcJ(),0,0,0)
u.iX(0)
u=v.c
w=v.a
w.b=A.cM(new A.ba(u.a-t.a),new C.cro(w,u,v.d))},
$S:0}
C.cro.prototype={
$0(){var w=this.c
this.a.b=A.dt(this.b,w)
w.$1(null)},
$S:0}
C.f0T.prototype={
$1(d){var w=this.a
w.m(new C.f0S(w,d))},
$S(){return this.a.$ti.k("~(1)")}}
C.f0S.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hH(D.aga,this.b,null,null,v.$ti.k("hH<1>"))},
$S:0}
C.f0V.prototype={
$2(d,e){var w=this.a
w.m(new C.f0Q(w,d,e))},
$S:56}
C.f0Q.prototype={
$0(){var w=this.a,v=w.a
v.toString
w.e===$&&A.c()
w.e=new A.hH(D.aga,null,this.b,this.c,v.$ti.k("hH<1>"))},
$S:0}
C.f0U.prototype={
$0(){var w=this.a
w.m(new C.f0R(w))},
$S:0}
C.f0R.prototype={
$0(){var w,v=this.a
v.a.toString
w=v.e
w===$&&A.c()
v.e=new A.hH(B.AP,w.b,w.c,w.d,w.$ti)},
$S:0}
C.fBe.prototype={
$1(d){return d.a===this.a&&B.a.i(d.b.toLowerCase())===this.b&&d.x===B.cq},
$S:16}
C.fB6.prototype={
$1(d){return d},
$S:14}
C.fjF.prototype={
$0(){var w=null,v=this.a,u=v*0.1
return A.p(B.A,new A.D(new A.Q(u,0,u,0),A.d("NGMY",w,1,B.eE,w,!1,w,A.l(w,w,B.c,w,w,w,w,w,w,w,w,Math.floor(v*0.32),w,w,B.u,w,1,!0,w,-0.2,w,w,w,w,w,w),w,w,w),w),B.f,w,w,B.aaU,w,v,w,w,w,w,w,v)},
$S:147}
C.fjC.prototype={
$3(d,e,f){return this.a.$0()},
$S:128}
C.fjD.prototype={
$2(d,e){var w,v=this,u=e.b
if(B.a.i(u==null?"":u).length!==0){u.toString
w=B.a.i(u)}else w="https://i.ibb.co/LhbMvz9/ngmy-logo.png"
return A.kn(w,B.A,v.d,new C.fjB(v.e),B.fX,v.c,!0,v.b,null,null,v.a)},
$S:1623}
C.fjB.prototype={
$3(d,e,f){return this.a.$0()},
$S:128}
C.fjE.prototype={
$3(d,e,f){return this.a.$0()},
$S:128}
C.d9S.prototype={
$0(){var w=this.a
w.w=this.b
w.x=!0},
$S:0}
C.da2.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dak.prototype={
$1(d){return A.a2(d,x.N,x.z)},
$S:7}
C.dal.prototype={
$1(d){return this.a.Ju()},
$S:12}
C.daa.prototype={
$0(){var w=J.b6(this.b,new C.da9(),x.P)
w=A.C(w,w.$ti.k("ak.E"))
this.a.f=w},
$S:0}
C.da9.prototype={
$1(d){return A.a2(d,x.N,x.z)},
$S:7}
C.dab.prototype={
$0(){var w=this.a,v=w.a.d.b8,u=A.U(v).k("M<1,a5<n,@>>")
v=A.C(new A.M(v,new C.da8(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.da8.prototype={
$1(d){return A.a2(d,x.N,x.z)},
$S:7}
C.dad.prototype={
$0(){var w=this.a,v=w.a.d.b8,u=A.U(v).k("M<1,a5<n,@>>")
v=A.C(new A.M(v,new C.dac(),u),u.k("ak.E"))
w.f=v},
$S:0}
C.dac.prototype={
$1(d){return A.a2(d,x.N,x.z)},
$S:7}
C.da5.prototype={
$0(){var w=0,v=A.j(x.c),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=!C.c8j(t.a.c)?2:3
break
case 2:w=4
return A.b(C.ap9(t.a.c.a),$async$$0)
case 4:if(t.c!=null)t.m(new C.da3(t))
case 3:if(t.c!=null)t.m(new C.da4(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:52}
C.da3.prototype={
$0(){return this.a.w=!0},
$S:0}
C.da4.prototype={
$0(){return this.a.d++},
$S:0}
C.da6.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.da7.prototype={
$0(){this.a.$0()
return null},
$S:0}
C.d9Y.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
C.i99(t.a.d.b8,J.k(J.q(u.b,"id")),"rejected")
t.a.bs()
w=2
return A.b(C.agY(t.a.d.b8),$async$$0)
case 2:w=3
return A.b(t.Ju(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d9Z.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=u.b
r=J.a4(s)
C.hZ0(t.a.d.b8,J.k(r.h(s,"id")),t.a.c.c)
t.a.bs()
w=2
return A.b(C.agY(t.a.d.b8),$async$$0)
case 2:w=3
return A.b(t.Ju(),$async$$0)
case 3:t.Il(B.d.dM(t.y,new C.d9W(s),new C.d9X(t)),J.k(r.h(s,"id")))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d9W.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.d9X.prototype={
$0(){return B.d.gI(this.a.y)},
$S:z+5}
C.da_.prototype={
$1(d){return d.a===J.q(this.a,"gameId")},
$S:z+4}
C.da0.prototype={
$0(){return B.d.gI(this.a.y)},
$S:z+5}
C.da1.prototype={
$0(){return this.a.Il(this.b,J.k(J.q(this.c,"id")))},
$S:0}
C.d9V.prototype={
$0(){return this.a.c0C(this.b)},
$S:0}
C.d9U.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.i9C(u,w.b,new C.d9T(v,w))},
$S:0}
C.d9T.prototype={
$2(d,e){return this.a.ah5(this.b,d,e)},
$S:607}
C.daj.prototype={
$2(d,e){if(d)return
this.a.aRS()},
$S:126}
C.dah.prototype={
$2(d,e){var w=this.a
return new A.l9(C.aZz(w.a.c.a),new C.dag(w,this.b,this.c),null,null,x.gH)},
$S:1625}
C.dag.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s==null)s=0
w=A.m(12)
v=A.m(12)
u=A.d(s>59?"59":""+s,t,t,t,t,t,t,t,t,t,t)
return A.aF(!1,B.a1,!0,w,A.aL(!1,v,!0,new A.D(B.kY,A.bFx(B.cR,A.X(B.hb,this.c,t,t,t,26),s>0,u),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.daf(this.a,d),t,t,t,t,t,t,t),B.f,this.b,0,t,t,t,t,t,B.ah)},
$S:1626}
C.daf.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
C.fxw(s.c.a,s.e).eP(new C.dae())
w=2
return A.b(C.bCU(u.b,t.a.c.a),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dae.prototype={
$1(d){},
$S:28}
C.dai.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.dOh.prototype={
$0(){var w=this.a
return A.KU(w.a.c.a,new C.dOg(w))},
$S:83}
C.dOg.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.dOi.prototype={
$0(){var w=this.a,v=w.a,u=v.d,t=w.d
t===$&&A.c()
u.bh=t.ag()
v.bs()
w.m(new C.dOf())},
$S:0}
C.dOf.prototype={
$0(){},
$S:0}
C.dOj.prototype={
$2(d,e){var w,v=this.a
if(!C.c8j(v.a.c)){if($.fUG.t(0,B.a.i(v.a.c.a.toLowerCase()))){v=v.a
w=v.w
C.fUH(this.b,v.x,w)
return!1}C.ap9(v.a.c.a)}if(A.KU(v.a.c.a,new C.dOe(v))<d)return!1
v.e=d
w=v.a
w.c.as+=20
w.aGp()
w=v.a
w.toString
w.hy(new A.d4(B.o.u(1000*Date.now()),v.a.c.a,d,B.jS,B.fh,e,null,null,B.cq,new A.S(Date.now(),0,!1)))
v.a.bs()
return!0},
$S:1627}
C.dOe.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.dOk.prototype={
$3$bonus(d,e,f){var w,v=null,u=B.o.u(1000*Date.now()),t=this.a,s=t.a
s.hy(new A.d4(u,s.c.a,d,B.fH,B.fh,e,v,v,B.cq,new A.S(Date.now(),0,!1)))
t.a.bs()
w=f>0?"+$"+B.k.ab(d,2)+" total (includes $3 bonus for +3!)":"+$"+B.k.ab(d,2)+" added to your balance"
s=t.a.c.a
t=t.e
C.uz(d,v,w,s,"Dice Roll",t>0?t:v,u,!0)},
$2(d,e){return this.$3$bonus(d,e,0)},
$S:1628}
C.d9M.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.d9P.prototype={
$0(){return A.iO(this.a,null)},
$S:0}
C.d9Q.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.d9R.prototype={
$1(d){var w=null,v=this.a,u=A.fn(w,w,v.e===d?B.bi:A.Z(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,w,w,w,w,w,w,w,w)
return A.E(new A.D(B.eS,A.ih(A.d("$"+d,w,w,w,w,w,w,w,w,w,w),new C.d9O(v,d),u),w),1)},
$S:212}
C.d9O.prototype={
$0(){var w=this.a
return w.m(new C.d9N(w,this.b))},
$S:0}
C.d9N.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dbE.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dbH.prototype={
$1(d){this.a.ciF()
return null},
$S:12}
C.dbI.prototype={
$1(d){return this.a.cyN()},
$S:12}
C.dbJ.prototype={
$1(d){this.a.a24()
return null},
$S:12}
C.dbK.prototype={
$1(d){this.a.aic()
return null},
$S:12}
C.dbL.prototype={
$1(d){var w,v=this.a
if(v.c==null||v.f)return
if(v.c3)return
w=v.Q
w===$&&A.c()
if(w<=0){v.m(new C.dbF(v))
w=v.as
if(w!=null)w.a6(0)
v.F0()
return}v.m(new C.dbG(v))},
$S:12}
C.dbF.prototype={
$0(){return this.a.Q=0},
$S:0}
C.dbG.prototype={
$0(){var w=this.a,v=w.Q
v===$&&A.c()
w.Q=v-1
return v},
$S:0}
C.daU.prototype={
$0(){return this.a.bC=this.b},
$S:0}
C.daV.prototype={
$0(){return this.a.bC=this.b},
$S:0}
C.dbn.prototype={
$1(d){return this.a.go.t(0,d)},
$S:33}
C.dbo.prototype={
$0(){},
$S:0}
C.db9.prototype={
$0(){var w=this.b
w.c3=!0
w.cP="Waiting for both players\u2026"
w.ci="You and "+this.c+" must be in the room before the match starts together."},
$S:0}
C.dba.prototype={
$0(){var w=this.a
w.c3=!0
w.cP="Both players connected"
w.ci="Starting together in a moment\u2026"},
$S:0}
C.dbb.prototype={
$0(){var w=this.b
w.c3=!0
w.cP="Match starting together\u2026"
w.ci="Both players start in "+B.o.D(this.c,1,99)+"s"},
$S:0}
C.dbc.prototype={
$0(){this.b.c3=!1},
$S:0}
C.dbd.prototype={
$0(){},
$S:0}
C.dam.prototype={
$0(){var w=this.a,v=w.x2,u=A.t(Math.min(v+2,7))
w.r="Round "+v+"/7 \u2014 tap "+u+" tiles (0/"+u+")"},
$S:0}
C.daT.prototype={
$0(){var w=this.a
w.at=this.b
w.b4v()},
$S:0}
C.dbp.prototype={
$0(){},
$S:0}
C.dby.prototype={
$0(){},
$S:0}
C.dbm.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.dbl(w))},
$S:0}
C.dbl.prototype={
$0(){var w=this.a
w.y=!0
w.z=new A.S(Date.now(),0,!1)},
$S:0}
C.daR.prototype={
$0(){var w=this.a;++w.Y
w.y=!1
w.z=null},
$S:0}
C.daS.prototype={
$0(){},
$S:0}
C.dbt.prototype={
$1(d){return d==null},
$S:270}
C.dbu.prototype={
$0(){var w=this,v=w.a
v.ay[w.b]=w.c
B.d.cw(v.ch,w.d)},
$S:0}
C.dbv.prototype={
$0(){var w=this.a
w.ay[this.b]=null
w.ch.push(this.c)},
$S:0}
C.dan.prototype={
$1(d){return d==null},
$S:270}
C.dao.prototype={
$0(){return this.a.bh++},
$S:0}
C.dap.prototype={
$0(){},
$S:0}
C.db2.prototype={
$0(){return this.a.fy.push(this.b)},
$S:0}
C.db3.prototype={
$0(){var w,v=this.a,u=v.go,t=this.b
u.L(0,t)
w=this.c
u.L(0,w)
if(v.ghF()&&D.mM.t(0,v.a.e)){u=v.id
u.L(0,t)
u.L(0,w);++v.fx}++v.k2
v.fy=A.a([],x.t)},
$S:0}
C.db4.prototype={
$0(){var w=this.a
if(w.c==null||w.f)return
w.m(new C.db1(w))},
$S:11}
C.db1.prototype={
$0(){var w=this.a
w.fy=A.a([],x.t)
w.k1=!1},
$S:0}
C.dbe.prototype={
$0(){return this.a.y1++},
$S:0}
C.dbf.prototype={
$0(){},
$S:0}
C.dbg.prototype={
$0(){return this.a.y2++},
$S:0}
C.dbh.prototype={
$0(){},
$S:0}
C.dbi.prototype={
$0(){return this.a.b8++},
$S:0}
C.dbj.prototype={
$0(){},
$S:0}
C.dbs.prototype={
$0(){var w=this.a.k4,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.db5.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.db6.prototype={
$0(){var w=this.a
return w.p1=w.ok[this.b]},
$S:0}
C.db7.prototype={
$0(){return this.a.p1=-1},
$S:0}
C.db8.prototype={
$0(){var w=this.a
w.p4=!1
w.p1=-1},
$S:0}
C.dbw.prototype={
$0(){var w=this.a;++w.p3;++w.p2},
$S:0}
C.dbx.prototype={
$0(){var w=this.a
w.ok.push(w.d.aA(4))
w.p2=0},
$S:0}
C.daq.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dar.prototype={
$0(){return this.a.to=this.b},
$S:0}
C.das.prototype={
$0(){return this.a.to=-1},
$S:0}
C.dat.prototype={
$0(){return this.a.xr=!1},
$S:0}
C.dbq.prototype={
$0(){var w=this.a,v=++w.x1,u=""+this.b
w.r="Round "+w.x2+"/7 \u2014 tap "+u+" tiles ("+v+"/"+u+")"},
$S:0}
C.dbr.prototype={
$0(){var w,v=this.a;++v.x2
v.aNE()
w=v.x2
v.r="Round "+w+"/7 \u2014 watch "+A.t(Math.min(w+2,7))+" tiles"},
$S:0}
C.db0.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x)},
$S:0}
C.dbk.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.daZ.prototype={
$0(){var w=this.a.a,v=w.c
v.e=v.e+(this.b-w.x*this.c)},
$S:0}
C.db_.prototype={
$2(d,e){return d+e.length},
$S:232}
C.dbz.prototype={
$0(){return A.iO(this.a,null)},
$S:0}
C.dbA.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.dbB.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.dbD.prototype={
$1(d){var w=this.a,v=w.Ol(),u=v<=0?0:B.k.D(w.A3()/v,0,1),t=w.a.x,s=t*1.46
return new C.Ne(w.f?s:s*u,s,t,null)},
$S:z+22}
C.dbC.prototype={
$1(d){return d.bU(0.85)},
$S:172}
C.daY.prototype={
$2(d,e){var w=null,v=this.b,u=6*(v-1),t=this.c,s=6*(t-1),r=Math.min((e.b-u)/v,(e.d-s)/t),q=this.a,p=q.ghF()&&D.mM.t(0,q.a.e),o=""+q.k2,n=q.dy.length
if(p){p=""+n
p="Your pairs "+q.fx+"/"+p+" \xb7 Board "+o+"/"+p}else p="Pairs "+o+"/"+n
return A.w(A.a([A.d(p,w,w,w,w,w,w,B.j6,B.L,w,w),B.am,A.E(A.av(new A.a7(r*v+u,r*t+s,A.ij(!0,w,w,B.y,new A.hN(v,6,6,1,r),new C.daX(q,r),q.fr.length,w,B.dS,B.ag,!1),w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,B.p)},
$S:154}
C.daX.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.go.t(0,e),p=r.ghF()&&D.mM.t(0,r.a.e)&&q&&r.id.t(0,e),o=r.ghF()&&D.mM.t(0,r.a.e)&&q&&!p,n=B.d.t(r.fy,e)||q,m=p?D.aot:D.bV7,l=A.m(10),k=A.m(10)
if(p)w=m
else if(o)w=m
else w=n?D.aot:D.aon
v=o?A.I(B.dv,B.q,2):s
u=A.a([new A.ac(0,B.G,A.Z(51,B.w.l()>>>16&255,B.w.l()>>>8&255,B.w.l()&255),B.J,4)],x.V)
t=this.b*0.42
return A.aL(!1,l,!0,A.df(s,A.av(n?A.X(D.coq[r.fr[e]],B.c,s,s,s,t):A.d("?",s,s,s,s,s,s,A.l(s,s,B.c,s,s,s,s,s,s,s,s,t,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),s,s,s),s,s,B.bc,new A.o(s,s,v,k,u,w,B.n),B.eH,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.daW(r,e),s,s,s,s,s,s,s)},
$S:194}
C.daW.prototype={
$0(){return this.a.ci0(this.b)},
$S:0}
C.daG.prototype={
$1(d){var w=null,v=this.a,u=v.ay[d],t=u==null,s=t?A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Z(89,B.bi.l()>>>16&255,B.bi.l()>>>8&255,B.bi.l()&255),r=A.m(10),q=A.m(10),p=A.m(10),o=A.I(A.Z(64,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),B.q,1)
return A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(B.A,A.d(t?"":u,w,w,w,w,w,w,D.aPG,w,w,w),B.f,w,w,new A.o(w,w,o,p,w,w,B.n),w,44,w,w,w,w,w,36),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.daF(v,d),w,w,w,w,w,w,w),B.f,s,0,w,w,w,w,w,B.ah)},
$S:625}
C.daF.prototype={
$0(){return this.a.cy3(this.b)},
$S:0}
C.daH.prototype={
$1(d){var w=null,v=this.a,u=v.ch[d],t=A.Z(46,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
return A.aF(!1,B.a1,!0,A.m(10),A.aL(!1,A.m(10),!0,A.p(B.A,A.d(u,w,w,w,w,w,w,D.aPG,w,w,w),B.f,w,w,w,w,44,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.daE(v,d),w,w,w,w,w,w,w),B.f,t,0,w,w,w,w,w,B.ah)},
$S:625}
C.daE.prototype={
$0(){return this.a.cy2(this.b)},
$S:0}
C.daI.prototype={
$1(d){return this.a.m(new C.daD())},
$S:27}
C.daD.prototype={
$0(){},
$S:0}
C.daJ.prototype={
$0(){var w,v,u=this.a,t=u.w
t===$&&A.c()
w=C.ah8(t,u.e.a.a)
u.dx+=w
if(u.db>=4){u.p0()
if(u.ghF()&&D.mM.t(0,u.a.e)){u.a0l()
u.n1(!0)}else{v=B.d.cK(u.cy,0,new C.daB())
t=u.dx
if(t>=v)u.tN("All 5 sentences perfect \u2014 full payout!")
else u.Es(t/v,t,v)}}else{if(u.ghF()&&D.mM.t(0,u.a.e))u.a0l()
u.m(new C.daC(u))}},
$S:0}
C.daB.prototype={
$2(d,e){return d+e.length},
$S:232}
C.daC.prototype={
$0(){var w=this.a,v=++w.db
w.w=w.cy[v]
w.e.bO(0,B.c8)
w.r="Sentence "+(w.db+1)+" of 5 \u2014 type every character"},
$S:0}
C.daK.prototype={
$1(d){var w=null,v=A.fn(w,w,A.Z(38,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),w,w,w,w,w,w,B.c,w,w,B.cl,w,w,w,w,w,w,w)
return new A.D(B.cy,new A.a7(1/0,w,A.ih(A.d(d,w,w,w,w,w,w,V.aPy,w,w,w),new C.daA(this.a,d),v),w),w)},
$S:139}
C.daA.prototype={
$0(){return this.a.b3S(this.b)},
$S:0}
C.daL.prototype={
$2(d,e){var w,v=null,u=(Math.min(e.b,e.d)-16)/3,t=this.a,s=t.r
s===$&&A.c()
w=u*3+8
return A.w(A.a([A.d(s,v,v,v,v,v,v,B.pd,v,v,v),B.N,A.E(A.av(new A.a7(w,w,A.ij(!0,v,v,B.y,new A.hN(3,4,4,1,u),new C.daz(t,u),9,v,B.dS,B.ag,!1),v),v,v,v),1)],x.p),B.m,v,B.e,B.j,0,B.p)},
$S:154}
C.daz.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.k4[e],q=s.b1A(e),p=r===0
if(p)w=B.K
else w=q?B.bi:A.Z(51,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
v=A.m(10)
s=p?t:new C.dav(s,e)
u=A.m(10)
p=p?"":""+r
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,A.av(A.d(p,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,this.b*0.38,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,s,t,t,t,t,t,t,t),B.f,w,0,t,t,t,t,t,B.ah)},
$S:76}
C.dav.prototype={
$0(){return this.a.cy1(this.b)},
$S:0}
C.daM.prototype={
$1(d){var w,v,u,t,s,r=null,q=this.a,p=q.p4,o=!p&&q.p1===d
q=p?r:new C.day(q,d)
p=A.m(16)
if(o)w=D.a2w[d]
else{w=D.a2w[d]
w=A.Z(31,w.l()>>>16&255,w.l()>>>8&255,w.l()&255)}v=A.m(16)
u=o?A.Z(B.k.V(127.5),B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255):A.Z(20,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255)
u=A.I(u,B.q,o?2:1)
t=x.V
if(o){s=D.a2w[d]
t=A.a([new A.ac(0,B.G,A.Z(217,s.l()>>>16&255,s.l()>>>8&255,s.l()&255),B.J,16)],t)}else t=A.a([],t)
return A.aL(!1,p,!0,A.df(r,r,r,r,B.bc,new A.o(w,r,u,v,t,r,B.n),U.AX,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r)},
$S:1632}
C.day.prototype={
$0(){return this.a.cy4(this.b)},
$S:0}
C.daN.prototype={
$2(d,e){var w,v,u,t=null,s=(Math.min(e.b,e.d)-24)/3,r=this.a,q=r.r
q===$&&A.c()
q=A.d(q,t,t,t,t,t,t,B.pd,t,t,t)
w=A.d("Move "+r.axE()+"/"+C.h_U(),t,t,t,t,t,t,B.Dw,t,t,t)
v=r.x2
u=s*3+12
return A.w(A.a([q,w,A.d("Round "+v+"/7 \xb7 "+A.t(Math.min(v+2,7))+" tiles",t,t,t,t,t,t,A.l(t,t,A.Z(153,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.E(A.av(new A.a7(u,u,A.ij(!0,t,t,B.y,new A.hN(3,6,6,1,s),new C.dax(r),9,t,B.dS,B.ag,!1),t),t,t,t),1)],x.p),B.m,t,B.e,B.j,0,B.p)},
$S:154}
C.dax.prototype={
$2(d,e){var w=null,v=this.a,u=v.to===e,t=A.m(10),s=A.m(10),r=u?B.bi:D.bby,q=u?B.eu:D.bke
return A.aF(!1,B.a1,!0,w,A.aL(!1,t,!0,A.p(w,w,B.f,w,w,new A.o(r,w,A.I(q,B.q,u?2.5:1),s,w,w,B.n),w,w,w,w,w,w,w,w),w,!0,w,w,B.K,w,w,w,w,w,w,w,w,new C.dau(v,e),w,w,w,w,B.K,w,w),B.f,B.K,0,w,w,w,w,w,B.ah)},
$S:76}
C.dau.prototype={
$0(){return this.a.cy_(this.b)},
$S:0}
C.daO.prototype={
$0(){return this.a.b3S(this.b[this.c])},
$S:0}
C.daP.prototype={
$0(){return this.a.m(new C.daw())},
$S:0}
C.daw.prototype={
$0(){},
$S:0}
C.daQ.prototype={
$2(d,e){this.a.a_4(d,e)
return null},
$S:z+21}
C.dfc.prototype={
$1(d){return this.a.ciu(this.b,d)},
$S:1633}
C.dfb.prototype={
$0(){var w=this
return w.a.a.cQP(w.b.a,w.c,0.0286,w.d)},
$S:0}
C.cCB.prototype={
$1(d){var w=this.a
w.a0C()
w.tU()},
$S:9}
C.cBW.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cBM.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cBN.prototype={
$0(){return this.a.cx=!1},
$S:0}
C.cC5.prototype={
$0(){var w=this.a
w.cx=w.cy=!1},
$S:0}
C.cC2.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cC3.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.cC4.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.cBY.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.cBX(w))},
$S:0}
C.cBX.prototype={
$0(){return this.a.cy=!0},
$S:0}
C.cBO.prototype={
$0(){var w=this,v=w.b
v.db=w.a.a
v.dx=J.ad(w.c)
v.dy=J.ad(w.d)
v.fr=J.ad(w.e)},
$S:0}
C.cC0.prototype={
$1(d){var w=this.a
return new C.V2(w.fx,new C.cC_(w),w.a.f.r,null)},
$S:z+37}
C.cC_.prototype={
$1(d){return this.bjc(d)},
bjc(d){var w=0,v=A.j(x.y),u,t=this,s,r
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c9d(d),$async$$1)
case 3:s=f
r=t.a
if(r.c!=null)r.m(new C.cBZ(r,d))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+38}
C.cBZ.prototype={
$0(){return this.a.fx=this.b},
$S:0}
C.cCo.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.cCi.prototype={
$1(d){this.a.tU()
return null},
$S:12}
C.cCl.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(B.o.an(v.gaUK().a,1e6)<=0){w=v.id
if(w!=null)w.a6(0)
v.tU()
return}v.m(new C.cCk())},
$S:12}
C.cCk.prototype={
$0(){},
$S:0}
C.cCh.prototype={
$1(d){this.a.F7()
return null},
$S:12}
C.cCj.prototype={
$0(){return this.b.ay=this.a.a},
$S:0}
C.cCg.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bi(J.k(v==null?"":v))
if(u==null)u=new A.S(A.fT(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bi(J.k(v==null?"":v))
return u.aL(0,w==null?new A.S(A.fT(0,0,!1),0,!1):w)},
$S:45}
C.cBT.prototype={
$2(d,e){var w,v=J.q(d,"at"),u=A.bi(J.k(v==null?"":v))
if(u==null)u=new A.S(A.fT(0,0,!1),0,!1)
v=J.q(e,"at")
w=A.bi(J.k(v==null?"":v))
return u.aL(0,w==null?new A.S(A.fT(0,0,!1),0,!1):w)},
$S:45}
C.cBU.prototype={
$0(){var w=this.a,v=w.f
B.d.a8(v)
B.d.v(v,this.b)
w.ax=!0},
$S:0}
C.cBV.prototype={
$0(){var w=this.a
if(w.c!=null)w.a1i(!0)},
$S:11}
C.cBR.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cBS.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
if(w.f.length!==0)w.Tx(this.b)},
$S:9}
C.cC8.prototype={
$1(d){var w=this.a.ok,v=w.f
if(v.length===0)return
v=B.d.gcZ(v).Q
v.toString
if(this.b)w.i7(v)
else w.mb(v,B.dV,B.kT)},
$S:9}
C.cC1.prototype={
$0(){return this.a.a.f.r="__NGMY_SERVER_MANAGED__"},
$S:0}
C.cC9.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cCa.prototype={
$0(){var w=this.a
w.f.push(A.F(["role","user","text",this.b,"at",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.z))
w.b5j()
w.r.bO(0,B.c8)
w.at=!0},
$S:0}
C.cCb.prototype={
$0(){return this.b.a.f.r=this.a.a},
$S:0}
C.cCc.prototype={
$0(){var w=this.a
w.f.push(A.F(["role","ai","text",this.b,"at",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.z))
w.at=!1},
$S:0}
C.cCd.prototype={
$0(){var w,v=this.b,u=A.T(x.N,x.z)
J.aG(u,"role","ai")
J.aG(u,"text",this.c)
J.aG(u,"at",new A.S(Date.now(),0,!1).a7().ac())
w=this.a
if(J.cI(w.b)){w=J.b6(w.b,v.gchs(),x.P)
w=A.C(w,w.$ti.k("ak.E"))
J.aG(u,"phoneActions",w)}v.f.push(u)
v.b5j()},
$S:0}
C.cCe.prototype={
$0(){this.a.f.push(A.F(["role","ai","text",y.g,"at",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.z))},
$S:0}
C.cCf.prototype={
$0(){return this.a.at=!1},
$S:0}
C.cC6.prototype={
$1(d){return this.bjd(d)},
bjd(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:k=t.a
if(k.c==null||d==null){w=1
break}s=t.b.b
r=J.a4(s)
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
l=p.bT()
w=5
return A.b(C.apy(q,new C.rk("cal_"+1000*n,m,l,(o==null?p.bR(36e8):o).bT(),r.h(s,"notes"),r.h(s,"location"))),$async$$1)
case 5:k.aqe()
case 4:k.c.J(x.q).f.U(A.b2(null,null,null,B.cZ,null,B.r,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:449}
C.cCn.prototype={
$1(d){return this.bje(d)},
bje(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a.c
if(s==null||d==null){w=1
break}s.J(x.q).f.U(A.b2(null,null,null,B.cZ,null,B.r,null,A.d(d,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:449}
C.cC7.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length===0)return
v=B.d.gcZ(v).Q
v.toString
w.i7(v)},
$S:9}
C.cCA.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
if(v>0)w.aaV(v-1)},
$S:0}
C.cCt.prototype={
$0(){return A.iO(this.a,null)},
$S:0}
C.cCw.prototype={
$1(d){var w=this.a
w.m(new C.cCq(w,d))
if(d===0)w.a1i(!0)},
$S:27}
C.cCq.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.cCu.prototype={
$2$size(d,e){return C.fZa(d,e)},
$1(d){return this.$2$size(d,48)},
$C:"$2$size",
$R:1,
$D(){return{size:48}},
$S:1634}
C.cCv.prototype={
$0(){var w=0,v=A.j(x.y),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=p.a
w=!o.c.w?3:4
break
case 3:s=C.haV(o.f)
o=s>0
if(o)p.a.toString
w=o?5:6
break
case 5:o=p.a
r=o.c
w=7
return A.b(H.aqn(s,o.f,t.b,"AI songwriting \u2014 one full song generation",new C.cCr(p),"NGMY Music Studio",r),$async$$0)
case 7:if(!e){u=!1
w=1
break}case 6:o=p.a
q=o.f.xr
w=q>0?8:9
break
case 8:w=12
return A.b(C.apw(o.c.a,q),$async$$0)
case 12:w=!e?10:11
break
case 10:w=p.c!=null?13:14
break
case 13:w=15
return A.b(p.tU(),$async$$0)
case 15:p.m(new C.cCs(p))
p.aaV(0)
case 14:u=!1
w=1
break
case 11:w=16
return A.b(p.tU(),$async$$0)
case 16:case 9:case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:65}
C.cCr.prototype={
$2(d,e){return this.bjf(d,e)},
bjf(d,e){var w=0,v=A.j(x.y),u,t=this,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
p=A.a1J(r.d,d,e,r.z,null,q)
if(p)s.a.Q.$0()
u=p
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$$2,v)},
$S:118}
C.cCs.prototype={
$0(){return this.a.cx=!0},
$S:0}
C.cCy.prototype={
$2(d,e){return B.ab},
$S:36}
C.cCx.prototype={
$2(d,e){var w=null,v=this.a,u=A.d((v.a.c.w?D.a2D:D.a1Y)[e],w,w,w,w,w,w,B.pg,w,w,w),t=A.Z(31,B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255),s=A.Z(89,B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255)
v=v.at?w:new C.cCp(v,e)
return A.mI(w,t,u,w,v,w,w,new A.ay(s,1,B.q,-1),w)},
$S:585}
C.cCp.prototype={
$0(){var w=this.a,v=w.a.c.w?D.a2D:D.a1Y
w.r.saW(0,v[this.b])
w.n0()
return null},
$S:0}
C.cCz.prototype={
$1(d){var w=this.a
return w.at?null:w.n0()},
$S:2}
C.cBP.prototype={
$0(){return this.a.aaV(0)},
$S:0}
C.cCm.prototype={
$0(){return this.a.aaV(this.b)},
$S:0}
C.cBQ.prototype={
$2(d,e){var w=this,v=null,u=w.a,t=u.f,s=t.length
if(s===0&&!u.at){u=A.p(v,D.bOX,B.f,v,v,new A.o(v,v,v,v,v,new A.a8(B.a3,B.a8,B.x,A.a([A.Z(51,B.aJ.l()>>>16&255,B.aJ.l()>>>8&255,B.aJ.l()&255),w.b],x.O),v,v),B.a6),v,72,v,v,v,v,v,72)
t=w.c
s=A.d("Start a conversation",v,v,v,v,v,v,A.l(v,v,t?B.c:B.az,v,v,v,v,v,v,v,v,16,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.av(new A.D(B.Yi,A.w(A.a([u,B.ac,s,B.am,A.d("Ask about wallet, investments, store, jobs, or help mode.",v,v,v,v,v,v,A.l(v,v,t?B.aA:B.aW,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v)],x.p),B.m,v,B.e,B.j,0,B.p),v),v,v,v)}if(e<s)return u.bEN(t[e],w.c)
return u.aOe(A.F(["role","ai","text","\u2026"],x.N,x.z),w.c,!0)},
$S:42}
C.bYJ.prototype={
$1(d){var w,v
if(d==null)return null
if(typeof d=="number"){w=B.k.N(d)
return new A.S(A.fT(w>1e11?w:w*1000,0,!0),0,!0).bT()}v=A.bi(J.k(d))
return v==null?null:v.bT()},
$S:338}
C.bYI.prototype={
$1(d){A.aJ(d)
return(d==null?0:d)/100},
$S:692}
C.bYL.prototype={
$1(d){var w
if(d==null)w=null
else{w=A.bi(J.k(d))
w=w==null?null:w.bT()}return w},
$S:338}
C.bYK.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null
if(!x.f.b(d))return m
w=A.a2(d,x.N,x.z)
try{v=J.q(w,"id")
v=J.k(v==null?"":v)
u=J.q(w,"userEmail")
u=J.k(u==null?"":u)
t=A.aJ(J.q(w,"amount"))
if(t==null)t=0
s=J.q(w,"type")
s=A.a4g(B.a3q,J.k(s==null?"reimbursement":s))
r=J.q(w,"method")
r=A.a4g(B.a1W,J.k(r==null?"system":r))
q=A.aU(J.q(w,"sourceDetails"))
p=J.q(w,"status")
p=A.a4g(B.H1,J.k(p==null?"approved":p))
o=this.a.$1(J.q(w,"timestamp"))
if(o==null)o=new A.S(Date.now(),0,!1)
return new A.d4(v,u,t,s,r,q,m,m,p,o)}catch(n){return m}},
$S:498}
C.dvJ.prototype={
$0(){var w=this.a
w.r=!0
w.w=this.b},
$S:0}
C.dvK.prototype={
$0(){var w=this.a
w.r=!1
w.w=null},
$S:0}
C.dvA.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bo(v[1],!0,x.o)
w.f=v[4]},
$S:0}
C.dvy.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.a
w=2
return A.b(o.AG(),$async$$0)
case 2:t=o.d
t===$&&A.c()
s=o.e
s===$&&A.c()
r=o.a.c
q=o.f
q===$&&A.c()
w=3
return A.b(C.fTG(t,s,r,q),$async$$0)
case 3:p=e
w=4
return A.b(A.p4(o.a.c,!1),$async$$0)
case 4:o.kV(p)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dvI.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.a9r(),$async$$0)
case 3:q=e
if(q==null){r.kV("Could not create a QR right now. Check your connection and try again.")
w=1
break}s=r.c
if(s==null){w=1
break}w=4
return A.b(A.a6(s,!1).ck(A.e8(new C.dvH(r,q),!0,null,x.H)),$async$$0)
case 4:w=5
return A.b(A.p4(r.a.c,!1),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dvH.prototype={
$1(d){var w=this.b,v=this.a,u=v.a.c
v=v.d
v===$&&A.c()
return new C.ZO(w.b,w.a,u,v,null)},
$S:z+39}
C.dvx.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.b
w=C.hFr(q)?3:4
break
case 3:w=5
return A.b(t.a.EH(B.a.i(q)),$async$$0)
case 5:if(e){w=1
break}case 4:s=t.a
w=6
return A.b(C.aXa(q,s.a.c),$async$$0)
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
case 9:s.kV(C.bYN(s.a.c))
w=1
break
case 10:s.kV("That code didn't match anything on your account. Double-check it and try again.")
w=1
break
case 11:s.kV(y.B)
w=1
break
case 12:q=r.b
q.toString
w=14
return A.b(s.zV(q,!0,!0),$async$$0)
case 14:w=1
break
case 13:q=r.b
q.toString
w=15
return A.b(s.aPs(q,!0),$async$$0)
case 15:w=8
break
case 8:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dvw.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=A.bo(w.c,!0,x.o)
v.f=w.d.ax},
$S:0}
C.dvz.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(r.acM(),$async$$0)
case 3:q=e
if(q==null||B.a.i(q).length===0){w=1
break}s=C.h7O(q)
if(s==null){r.kV("Could not read that backup file.")
w=1
break}if(!C.bYM(s,r.a.c,null)){r.kV(C.bYN(r.a.c))
w=1
break}w=4
return A.b(r.bH8(s),$async$$0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dvG.prototype={
$1(d){var w=null,v=new A.as(B.as,$.aw()),u=A.P(d).ax.a===B.I,t=u?B.ic:B.c,s=x.p,r=A.w(A.a([A.d("Enter the verification code shown on your local deposit request. It must match what admin used for this QR.",w,w,w,w,w,w,A.l(w,w,u?B.ad:B.ak,w,w,w,w,w,w,w,w,13,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),w,w,w),B.aB,A.aM(w,B.T,!0,w,!0,B.r,w,A.aN(),v,w,w,w,w,w,2,A.bs(w,new A.b4(4,A.m(14),B.dg),w,w,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"Verification code",!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),B.y,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,B.dO,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.L,w,B.an,w,w,w,w)],s),B.F,w,B.e,B.P,0,B.p)
return A.ek(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dvE(d),w,w),A.bG(D.fgu,new C.dvF(d,v),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w))],s),w,w,t,r,w,w,w,w,D.fuU,w)},
$S:20}
C.dvE.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dvF.prototype={
$0(){var w=B.a.i(this.b.a.a)
A.a6(this.a,!1).O(w)
return null},
$S:0}
C.dvB.prototype={
$1(d){return D.h_f},
$S:z+12}
C.dvC.prototype={
$0(){return this.a.EI(B.a.i(this.b))},
$S:1}
C.dvD.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.a
w=3
return A.b(C.aXa(t.b,r.a.c),$async$$0)
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
return A.b(r.zV(s,!0,!0),$async$$0)
case 11:w=1
break
case 7:r.kV(C.bYN(r.a.c))
w=1
break
case 8:r.kV("Could not read that QR code for your account.")
w=1
break
case 9:r.kV(y.B)
w=1
break
case 10:s=q.b
s.toString
w=12
return A.b(r.aPs(s,!0),$async$$0)
case 12:w=5
break
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dvL.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dvP.prototype={
$1(d){this.a.QC()
return null},
$S:12}
C.dvM.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.dvN.prototype={
$0(){var w=null,v=this.a
A.fM(new A.fE(v.gavO()))
this.b.J(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d("Code "+v.gavO()+" copied",w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dvO.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dvQ.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<v;++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!(B.a.a0(s,"NGMYSNAP1|")||B.a.a0(s,"NGMYLOCALSYNC1|")||B.a.a0(s,"NGMYLOCALLIVE1|")||B.a.a0(s,"NGMYLOCALDEP1|")))continue
r.e=!0
A.a6(this.b,!1).O(s)
return}},
$S:188}
C.fnM.prototype={
$1(d){return D.fY3},
$S:z+13}
C.fp_.prototype={
$1(d){return new C.aeb(this.a,this.b,this.c,null)},
$S:z+14}
C.eVA.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eVB.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d4M.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fL()},
$S:9}
C.d4J.prototype={
$2(d,e){return e.akm(e.a.toUpperCase())},
$S:1635}
C.d4K.prototype={
$1(d){var w=this.a,v=w.c
v.toString
w=B.a.i(w.d.a.a)
A.a6(v,!1).O(w)
return null},
$S:2}
C.d4L.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.bZu.prototype={
$1(d){var w=J.q(d,"text"),v=J.k(w==null?"":w).toLowerCase()
if(v.length===0)return!1
return!B.d.b4(D.dde,B.a.gkF(v))},
$S:4}
C.fxq.prototype={
$1(d){return d.a===this.a},
$S:1636}
C.fxr.prototype={
$0(){return B.d.gI(B.Cd)},
$S:1637}
C.dCa.prototype={
$1(d){var w,v=this.a
if(v.x||v.c==null)return
v.m(new C.dC9(v))
w=v.r
w===$&&A.c()
if(w<=0)v.b4m("Time's up")},
$S:12}
C.dC9.prototype={
$0(){var w=this.a,v=w.r
v===$&&A.c()
w.r=v-1
return v},
$S:0}
C.dC1.prototype={
$0(){var w=this.a.a,v=w.c
return v.e=v.e+(this.b-w.w*this.c)},
$S:0}
C.dC6.prototype={
$2(d,e){var w=this.a
if(w.x||w.c==null)return
w.m(new C.dC3(w,d,e))},
$S:137}
C.dC3.prototype={
$0(){var w=this.a,v=this.c
w.e=B.o.D(this.b,0,v)
w.f=Math.max(1,v)},
$S:0}
C.dC7.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.dC2(w))
w.csm(!0)},
$S:0}
C.dC2.prototype={
$0(){var w=this.a
return w.e=w.f},
$S:0}
C.dC8.prototype={
$1(d){this.a.b4m(d)
return null},
$S:2}
C.dC4.prototype={
$0(){return A.iO(this.a,null)},
$S:0}
C.dC5.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.c5V.prototype={
$1(d){return D.dyd},
$S:z+15}
C.c5U.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fpO.prototype={
$5(d,e,f,g,h){var w,v=null,u=J.a4(d),t=A.aJ(u.h(d,e)),s=t==null?v:B.k.N(t)
if(s==null)s=0
if(s<=0)return v
t=u.h(d,g)
if(J.k(t==null?"":t)!==h){u.n(d,g,h)
u.n(d,f,0)}t=A.aJ(u.h(d,f))
w=t==null?v:B.k.N(t)
if(w==null)w=0
if(w>=s)return v
u.n(d,f,w+1)
u=A.aJ(u.h(d,"outcome"))
return u==null?v:B.k.N(u)},
$S:1638}
C.fpP.prototype={
$2(d,e){var w=A.aJ(J.q(d,e))
w=w==null?null:B.k.N(w)
return w==null?0:w},
$S:525}
C.fpQ.prototype={
$2(d,e){return d*(this.a&&this.b===e?1:4)},
$S:232}
C.fEr.prototype={
$1(d){var w=this.a,v=this.b,u=d?C.hje(w,v):C.fZs(w,v)
if(u===3)++w.f
C.afC(w,this.c,u)
return u},
$S:1639}
C.fEt.prototype={
$0(){return C.hje(this.a,this.b)},
$S:108}
C.fEs.prototype={
$0(){return C.fZs(this.a,this.b)},
$S:108}
C.dvl.prototype={
$0(){var w=this.a
if(w.a.c)w.m(new C.dvk(w))},
$S:0}
C.dvk.prototype={
$0(){this.a.r=1+B.o.E(A.BP(new A.S(Date.now(),0,!1))/90|0,5)},
$S:0}
C.dvm.prototype={
$0(){var w,v=this.a,u=v.a
if(!u.c&&u.d==null){u=v.f
u===$&&A.c()
u=u.x
u===$&&A.c()
w=B.k.bn(u*10)
if(w!==v.w)v.m(new C.dvj(v,w))}},
$S:0}
C.dvj.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.c7T.prototype={
$3(d,e,f){var w=null
return A.E(A.w(A.a([A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.6),w,w,w,w,w,w,w,w,10.5,w,w,B.H,w,w,!0,w,0.6,w,w,w,w,w,w),w,w,w),B.bD,A.f6(B.A,A.d(e,w,w,w,w,w,w,A.l(w,w,f,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.du)],x.p),B.m,w,B.e,B.j,0,B.p),1)},
$S:1640}
C.c7S.prototype={
$3(d,e,f){var w=null
return A.d("$"+B.k.ab(e,2),w,w,w,w,w,w,B.nx,w,w,w)},
$S:454}
C.c8k.prototype={
$1(d){return new C.Nm(this.a,this.b,!1,null,null)},
$S:z+16}
C.dVk.prototype={
$2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.a,e=f.a.e,d=A.m(e?0:30)
e=e?g:A.I(B.b6.j(0.5),B.q,1)
w=f.a.e?g:A.a([new A.ac(2,B.G,B.b6.j(0.35),B.J,36),new A.ac(0,B.G,B.bC.j(0.175),B.J,24)],x.V)
v=A.m(f.a.e?0:30)
u=x.O
t=A.ao(g,A.p(g,g,B.f,g,g,new A.o(g,g,g,g,g,new A.bT(B.A,0.5,B.x,g,0,A.a([B.b8.j(0.22),B.K],u),g,g),B.a6),g,140,g,g,g,g,g,140),g,g,g,-30,-40,g)
u=A.ao(-50,A.p(g,g,B.f,g,g,new A.o(g,g,g,g,g,new A.bT(B.A,0.5,B.x,g,0,A.a([B.bC.j(0.18),B.K],u),g,g),B.a6),g,160,g,g,g,g,g,160),g,g,-20,g,g,g)
s=f.a.e
r=s?18:26
q=s?28:20
s=s?B.j:B.P
p=x.p
o=A.a([],p)
if(f.a.e)o.push(B.N)
n=x.V
o.push(A.p(g,D.bKs,B.f,g,g,new A.o(g,g,A.I(B.aM.j(0.8),B.q,2.5),g,A.a([new A.ac(0,B.G,B.b6.j(0.55),B.cz,18)],n),E.u8,B.a6),g,88,g,g,g,g,g,88))
o.push(B.aR)
o.push(A.nO(B.jx,D.fsz,new C.dVg()))
o.push(B.N)
m=f.a.e?"Your free preview game is complete. Activate an investment plan to keep playing, earn daily returns, and avoid losing your plan from missed weekday check-ins.":"Your free preview game is complete. Activate an investment plan to keep playing every game, earn daily returns, and stack rewards."
o.push(A.d(m,g,g,g,g,g,g,A.l(g,g,B.c.j(0.78),g,g,g,g,g,g,g,g,13,g,g,B.cw,g,1.45,!0,g,g,g,g,g,g,g,g),B.L,g,g))
m=this.b
if(m.length!==0){l=B.c9.j(0.12)
k=A.m(18)
j=A.I(B.c9.j(0.45),B.q,1)
i=A.a([A.B(A.a([A.X(D.bEp,B.c9.j(0.95),g,g,g,20),B.ab,A.d("Missed weekday check-ins ("+m.length+"/3 this month)",g,g,g,g,g,g,A.l(g,g,B.c9.j(0.95),g,g,g,g,g,g,g,g,13,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],p),B.m,g,B.e,B.j,0,g,g),B.R,A.d("Three misses in one calendar month resets your investment plan. Check in before noon on weekdays.",g,g,g,g,g,g,A.l(g,g,B.c.j(0.72),g,g,g,g,g,g,g,g,11.5,g,g,g,g,1.4,!0,g,g,g,g,g,g,g,g),g,g,g),B.R],p)
B.d.v(i,new A.M(m,new C.dVh(),A.U(m).k("M<1,r>")))
B.d.v(o,A.a([B.aR,A.p(g,A.w(i,B.F,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(l,g,j,k,g,g,B.n),g,g,g,g,B.bB,g,g,1/0)],p))}o.push(B.by)
m=B.w.j(0.35)
l=A.m(18)
k=A.I(B.b6.j(0.35),B.q,1)
o.push(A.p(g,A.w(A.a([f.awx(B.ha,"Unlimited games with an active plan",B.b8),B.N,f.awx(B.jJ,"Weekday check-ins grow your balance",B.b6),B.N,f.awx(B.mw,"Compete, bet, and earn points",B.aM)],p),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(m,g,k,l,g,g,B.n),g,g,g,g,B.bB,g,g,1/0))
o.push(B.d7)
l=A.m(16)
n=A.a([new A.ac(0,B.G,B.bC.j(0.45),B.cz,16)],n)
o.push(new A.a7(1/0,g,A.c0(A.dn(D.bNI,D.fo5,new C.dVi(f,a0),A.bn(B.K,g,g,g,B.c,B.IP,g,B.K,new A.b7(A.m(16),B.Y),g,g,g)),new A.o(g,g,g,l,n,E.u8,B.n),B.be),g))
o.push(B.N)
n=f.a.e?"Back":"Maybe later"
o.push(A.bK(!1,A.d(n,g,g,g,g,g,g,A.l(g,g,B.c.j(0.5),g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),g,g,!0,g,g,new C.dVj(f,a0),g,g))
if(f.a.e)o.push(B.b7)
h=A.p(g,A.bw(v,new A.an(B.W,g,B.aa,B.r,A.a([t,u,new A.D(new A.Q(22,r,22,q),A.w(o,B.m,g,B.e,s,0,B.p),g)],p),g),B.aq),B.f,g,g,new A.o(g,g,e,d,w,D.bXU,B.n),g,g,g,g,g,g,g,g)
if(f.a.e)return h
return A.eK(g,B.K,h,g,g,g,Af.YM,B.d0,g,g,g)},
$S:628}
C.dVg.prototype={
$1(d){return D.bWS.aw(0,d)},
$S:67}
C.dVh.prototype={
$1(d){var w=null
return new A.D(B.eI,A.B(A.a([A.X(A1.a_J,B.c9.j(0.85),w,w,w,14),B.ab,A.E(A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.92),w,w,w,w,w,w,w,w,13,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$S:139}
C.dVi.prototype={
$0(){var w=this.a,v=w.a
if(v.e)v.c.$0()
else{A.a6(this.b,!1).O(null)
w.a.c.$0()}},
$S:0}
C.dVj.prototype={
$0(){var w=this.a.a
if(w.e){w=w.f
if(w!=null)w.$0()}else A.a6(this.b,!1).O(null)},
$S:0}
C.fzN.prototype={
$1(d){if(d.gmI())this.a.a=d
return d.gmI()},
$S:624}
C.fzA.prototype={
$1(d){$.aW.x1$.push(new C.fzz(this.a))},
$S:9}
C.fzz.prototype={
$1(d){return this.a.$0()},
$S:9}
C.fm2.prototype={
$1(d){return C.hjl(this.a,this.b+1)},
$S:9}
C.fB9.prototype={
$2(d,e){var w=A.aI(d,B.bW,x.w).w.a
return new A.a7(w.a,w.b,A.c7(this.b,this.a,this.c,null,!1,!1,null,!1),null)},
$S:176}
C.c8y.prototype={
$1(d){return d.r===this.a},
$S:246}
C.c8z.prototype={
$1(d){var w=$.aQh(),v=w.a
w.sp(0,v+1)
return v},
$S:1642}
C.c8A.prototype={
$1(d){},
$S:28}
C.c8x.prototype={
$1(d){return d.w==null||d.x==null||d.y==null},
$S:246}
C.c8w.prototype={
$1(d){return d.f.cb(this.a)},
$S:246}
C.fjm.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:71}
C.fMO.prototype={
$1(d){return C.a6X(this.a)},
$S:104}
C.fMP.prototype={
$1(d){var w=$.aQh()
w.sp(0,w.a+1)},
$S:30}
C.fMQ.prototype={
$1(d){},
$S:28}
C.fMR.prototype={
$1(d){return new A.jJ($.aQh(),new C.fMN(this.a,this.b),null,null,x.am)},
$S:1643}
C.fMN.prototype={
$3(d,e,f){var w=this.b
return new A.l9(C.apf(this.a,!1),new C.fMM(w),w,null,x.gv)},
$S:1644}
C.fMM.prototype={
$2(d,e){var w=e.b
return new C.ad_(w==null?this.a:w,null)},
$S:z+17}
C.dVn.prototype={
$1(d){return d.c},
$S:246}
C.dVo.prototype={
$1(d){return d.gbfT()},
$S:1645}
C.dVp.prototype={
$2(d,e){return d+e},
$S:89}
C.dVq.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dVs.prototype={
$2(d,e){return B.N},
$S:36}
C.dVr.prototype={
$2(d,e){return new C.acZ(J.q(this.a.c,e),null)},
$S:z+18}
C.dVm.prototype={
$1(d){return d==null?"\u2026":C.bzl(d)},
$S:1646}
C.fMU.prototype={
$3(d,e,f){var w=this
return A.ry(new C.azK(w.a,w.b,w.c,w.d,new C.fMS(d,w.e),new C.fMT(d,w.f),null))},
$C:"$3",
$R:3,
$S:95}
C.fMS.prototype={
$0(){A.a6(this.a,!1).O(null)
C.hmp(this.b)},
$S:0}
C.fMT.prototype={
$0(){A.a6(this.a,!1).O(null)
C.hmp(this.b)},
$S:0}
C.dbN.prototype={
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
B.d.v(w,new A.M(t,new C.dbM(),A.U(t).k("M<1,r>")))}t=h.d
t===$&&A.c()
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793*2)
s=Math.min(380,A.aI(this.b,i,x.w).w.a.a*0.92)
r=x.O
q=h.a.c?A.a([B.bi,B.eA,B.dZ],r):A.a([B.ay,B.eQ,B.eq],r)
p=A.m(26)
o=A.I(B.c.j(0.4),B.q,2)
n=x.V
m=A.a([new A.ac(6,B.G,(h.a.c?B.dz:B.dJ).j(0.5),B.J,36)],n)
l=A.a([],g)
if(h.a.c){k=A.dp()
j=k.a
j.$flags&2&&A.aj(j)
j[11]=0.001
k.k5(-0.35)
r=A.a([Z.aeC,B.tj],r)
l.push(new A.a7(i,100,new A.an(B.A,i,B.aa,B.f,A.a([A.fu(B.A,A.p(i,D.b5H,B.f,i,i,new A.o(i,i,i,i,A.a([new A.ac(4,B.G,B.cR.j(0.6),B.J,24),new A.ac(0,B.G,B.w.j(0.3),B.dn,12)],n),new A.bT(B.A,0.5,B.x,i,0,r,i,i),B.a6),i,88,i,i,i,i,i,88),i,k,!0)],g),i),i))}else l.push(D.bQY)
l.push(B.aB)
l.push(A.d(h.a.d,i,i,i,i,i,i,B.a82,B.L,i,i))
r=h.a.f
if(r!=null&&r.length!==0){n=A.m(18)
k=A.I(B.eA,B.q,4)
B.d.v(l,A.a([B.aB,D.fic,B.N,A.p(i,A.d(r,i,i,i,i,i,i,D.f8R,B.L,i,i),B.f,i,i,new A.o(B.c,i,k,n,i,i,B.n),i,i,i,i,B.Yg,i,i,1/0)],g))}B.d.v(l,A.a([B.ac,A.d(h.a.e,i,i,i,i,i,i,D.fbu,B.L,i,i)],g))
l.push(B.dY)
r=A.E(A.dU(D.ffL,h.a.r,A.di(i,i,i,i,i,i,i,i,i,B.c,i,i,B.cl,i,i,D.aYj,i,i,i,i)),1)
h=h.a
n=h.w
l.push(A.B(A.a([r,B.au,A.E(A.bG(F.aR2,n,A.bn(B.c,i,i,i,h.c?B.eA:B.eQ,i,B.cl,i,i,i,i,i)),1)],g),B.m,i,B.e,B.j,0,i,i))
w.push(A.ed(B.A,A.p(i,A.w(l,B.m,i,B.e,B.P,0,B.p),B.f,i,i,new A.o(i,i,o,p,m,new A.a8(B.ax,B.aC,B.x,q,i,i),B.n),i,i,i,B.a9,B.aio,i,i,s),1+t*0.02,i,i))
return new A.an(B.A,i,B.aa,B.f,w,i)},
$S:112}
C.dbM.prototype={
$1(d){var w=null,v=d.a,u=d.b
return A.ao(w,A.de(A.eH(B.A,d.d,A.X(d.w,d.r,w,w,w,d.f),w),d.e),w,w,v,w,u,w)},
$S:z+11}
C.ca9.prototype={
$2(d,e){var w=null,v=this.a,u=C.hER(A.KU(v.c,v.d))
return A.d("$"+u,w,w,w,w,w,w,v.e,w,w,w)},
$S:1647}
C.ca8.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:71}
C.c_0.prototype={
$0(){},
$S:0}
C.fil.prototype={
$1(d){return B.o.u(d)},
$S:81}
C.dOn.prototype={
$0(){return this.a.y=!0},
$S:0}
C.dOo.prototype={
$0(){var w=this.a
w.x=!0
w.w=w.r=null},
$S:0}
C.dOp.prototype={
$0(){var w=this.a
return w.w=D.QA[w.d.aA(5)]},
$S:0}
C.dOq.prototype={
$0(){var w=this.a
w.x=!1
w.w=null
w.r=this.b},
$S:0}
C.dOr.prototype={
$0(){var w=this.a
return w.z=w.z+this.b},
$S:0}
C.dOs.prototype={
$0(){var w=this.a
return w.m(new C.dOm(w))},
$S:0}
C.dOm.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dOt.prototype={
$0(){var w=this.a
return w.m(new C.dOl(w))},
$S:0}
C.dOl.prototype={
$0(){var w=this.a
w.y=!1
w.w=w.r=null},
$S:0}
C.dOw.prototype={
$0(){return A.iO(this.a,null)},
$S:0}
C.dOx.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.f===d&&B.a.i(t.e.a.a).length===0?B.bi:A.Z(36,B.c.l()>>>16&255,B.c.l()>>>8&255,B.c.l()&255),r=A.m(10)
t=t.y?u:new C.dOv(t,d)
w=A.m(10)
v=B.k.ab(d,0)
return A.E(new A.D(B.jn,A.aF(!1,B.a1,!0,r,A.aL(!1,w,!0,new A.a7(u,38,A.av(A.d("$"+v,u,u,u,u,u,u,A.l(u,u,B.c,u,u,u,u,u,u,u,u,d>=10?13:15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,u),B.f,s,0,u,u,u,u,u,B.ah),u),1)},
$S:1648}
C.dOv.prototype={
$0(){var w=this.a
return w.m(new C.dOu(w,this.b))},
$S:0}
C.dOu.prototype={
$0(){var w=this.a
w.f=this.b
w.e.bO(0,B.c8)},
$S:0}
C.dVK.prototype={
$0(){return this.a.f="data:"+this.b+";base64,"+B.cT.gcA().aJ(this.c)},
$S:0}
C.dVL.prototype={
$0(){return A.iO(this.a,null)},
$S:0}
C.dVG.prototype={
$3(d,e,f){var w=null,v=this.a,u=v.d===d,t=A.m(14),s=u?B.c.j(0.1):B.K,r=A.I(u?D.eK.j(0.5):B.K,B.q,1),q=A.X(e,u?D.eK:B.aA,w,w,w,20)
return A.E(A.aC(w,A.df(w,A.B(A.a([q,B.bp,A.d(f,w,w,w,w,w,w,A.l(w,w,u?B.c:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.b9,B.j,0,w,w),w,w,B.bc,new A.o(s,w,r,t,w,w,B.n),B.a1,w,46,w,w,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dVI(v,d),w,w,w,w,w,w,!1,B.a7),1)},
$S:1649}
C.dVI.prototype={
$0(){var w=this.a
return w.m(new C.dVH(w,this.b))},
$S:0}
C.dVH.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dVJ.prototype={
$0(){var w=this.a,v=w.d===B.kB?"Cash App tag":"Bitcoin address"
return w.IN(this.b,v)},
$S:0}
C.dVF.prototype={
$0(){var w=this.a
return w.IN(w.gar6(),"Code")},
$S:0}
C.c9_.prototype={
$1(d){return C.hB2(A.a2(d,x.N,x.z))},
$S:z+20}
C.c90.prototype={
$2(d,e){return d.c.aL(0,e.c)},
$S:z+6}
C.c8X.prototype={
$1(d){return d.a===this.a.a},
$S:z+7}
C.c8Y.prototype={
$2(d,e){return d.c.aL(0,e.c)},
$S:z+6}
C.c8Z.prototype={
$1(d){return d.ag()},
$S:z+23}
C.c91.prototype={
$1(d){var w=d.c
return!w.cY(this.a.bR(-36e8))&&!w.cb(this.b)},
$S:z+7}
C.c1o.prototype={
$1(d){return C.hB3(A.a2(d,x.N,x.z))},
$S:z+24}
C.c1p.prototype={
$2(d,e){return e.b.aL(0,d.b)},
$S:z+8}
C.c1m.prototype={
$1(d){return d.ag()},
$S:z+26}
C.c1n.prototype={
$2(d,e){return e.b.aL(0,d.b)},
$S:z+8}
C.c1r.prototype={
$1(d){var w=d.b
return!w.cY(this.a)&&!w.cb(this.b)},
$S:z+27}
C.c98.prototype={
$1(d){return d.ag()},
$S:z+28}
C.c97.prototype={
$1(d){return C.ha3(A.a2(x.f.a(d),x.N,x.z))},
$S:z+29}
C.c96.prototype={
$1(d){return d.ag()},
$S:z+30}
C.c95.prototype={
$1(d){return C.hEv(A.a2(x.f.a(d),x.N,x.z))},
$S:z+31}
C.c9a.prototype={
$1(d){return C.hEu(A.a2(x.f.a(d),x.N,x.z))},
$S:z+32}
C.c9b.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+2}
C.c9c.prototype={
$1(d){return d.ag()},
$S:z+34}
C.dZp.prototype={
$1(d){return d.bbf(A.bo(d.e,!0,x.u))},
$S:z+36}
C.dZq.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+2}
C.dZj.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dZk.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dZ2.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.L(w,this.b)},
$S:0}
C.dZ3.prototype={
$1(d){return new C.Pf(this.a,null)},
$S:z+9}
C.dZ4.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=B.d.bg(t,new C.dZ1(this.b))
t=this.c
v=t==null
if(!v&&w>=0)u.d[w]=t
else if(v&&w>=0){B.d.cw(u.d,w)
u.IW()}},
$S:0}
C.dZ1.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dZg.prototype={
$0(){var w,v=this.a
v.f=!0
w=x.N
v.y.push(A.F(["role","admin","text",this.b],w,w))},
$S:0}
C.dZh.prototype={
$0(){var w,v,u,t=this.a
t.f=!1
w=this.b.a
v=w[1]
u=t.y
if(v!=null){t=x.N
u.push(A.F(["role","ai","text",v],t,t))}else{v=t.d
v===$&&A.c()
t.d=C.i3R(v,w[0],w[3])
t.IW()
t=w[2]
if(t==null)t="Created "+J.ad(w[0])+" category(s) with stored Q&A. Tap Save to publish."
w=x.N
u.push(A.F(["role","ai","text",t],w,w))}},
$S:0}
C.dZi.prototype={
$1(d){var w=this.a.x,v=w.f
if(v.length!==0){v=B.d.gcZ(v).Q
v.toString
w.i7(v)}},
$S:9}
C.dZa.prototype={
$1(d){return new C.Pf(this.a,null)},
$S:z+9}
C.dZb.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dZ9.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cw(w,this.b)},
$S:0}
C.dZf.prototype={
$0(){var w,v,u=this.a,t=u.a,s=this.c
if(t>s)u.a=t-1
t=this.b
w=t.d
w===$&&A.c()
v=B.d.cw(w,s)
B.d.cj(t.d,u.a,v)
t.IW()},
$S:0}
C.dZe.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
return new C.a_B(u[w],new C.dZd(v,w),null)},
$S:z+59}
C.dZd.prototype={
$1(d){var w=this.a
return w.m(new C.dZc(w,this.b,d))},
$S:z+40}
C.dZc.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.dZ6.prototype={
$0(){var w=this.a
return w.m(new C.dZ5(w))},
$S:0}
C.dZ5.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dZ7.prototype={
$2(d,e){var w=null,v=this.a.y[e],u=v.h(0,"role")==="admin",t=u?"You":"AI",s=v.h(0,"text"),r=this.b.a?B.cr:B.aK
return new A.D(B.eI,A.d(t+": "+A.t(s),w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,12,w,w,u?B.a5:B.cw,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)},
$S:115}
C.dZ8.prototype={
$1(d){return this.a.a1_()},
$S:2}
C.dZo.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.tf:B.c
u=A.m(16)
t=A.m(16)
s=l?B.aK:B.aL
r=w.d
q=A.b0(r).j(0.15)
p=A.m(12)
q=A.p(n,A.X(B.al2,l?B.bJ:B.ak,n,n,n,20),B.f,n,n,new A.o(q,n,n,p,n,n,B.n),n,n,n,n,B.bR,n,n,n)
p=A.b0(r).j(0.12)
o=A.m(8)
o=A.p(n,A.X(w.c,A.b0(r),n,n,n,18),B.f,n,n,new A.o(p,n,n,o,n,n,B.n),n,n,n,n,B.hy,n,n,n)
r=A.B(A.a([o,B.au,A.E(A.d(w.b,n,n,n,n,n,n,A.l(n,n,l?B.aQ:B.M,n,n,n,n,n,n,n,n,n,n,n,B.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],x.p),B.m,n,B.e,B.j,0,n,n)
p=w.e.length
return new A.D(B.d8,A.aF(!1,B.a1,!0,u,A.dL(!1,n,n,n,!0,n,n,n,!0,n,new H.atT(q,e,!0,n),n,n,n,n,new C.dZl(m,e),!1,n,n,new A.b7(t,new A.ay(s,1,B.q,-1)),n,n,A.d("#"+(e+1)+" \xb7 "+p+" question(s)",n,n,n,n,n,n,A.l(n,n,l?B.bJ:B.ak,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,r,n,A.BO(n,n,n,new C.dZm(),B.J,new C.dZn(m,e),B.cp,n,x.N),n),B.f,v,0,n,n,n,n,n,B.ah),new A.cx(w.a,x.W))},
$S:115}
C.dZn.prototype={
$1(d){var w=this
if(d==="edit")w.a.a9T(w.b)
if(d==="questions")w.a.Yo(w.b)
if(d==="delete")w.a.bK0(w.b)},
$S:2}
C.dZm.prototype={
$1(d){return D.cJO},
$S:130}
C.dZl.prototype={
$0(){return this.a.Yo(this.b)},
$S:0}
C.cL1.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q===$&&A.c()
w=d.a===q.a
if(w){q=r.f
q===$&&A.c()
q=A.b0(q).j(0.2)}else q=B.cV.j(0.1)
v=A.m(10)
if(w){u=r.f
u===$&&A.c()
u=A.b0(u)}else u=B.K
u=A.I(u,B.q,1)
t=r.f
t===$&&A.c()
return A.aL(!1,s,!0,A.p(s,A.X(d,A.b0(t),s,s,s,s),B.f,s,s,new A.o(q,s,u,v,s,s,B.n),s,s,s,s,B.cp,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.cL0(r,d),s,s,s,s,s,s,s)},
$S:1650}
C.cL0.prototype={
$0(){var w=this.a
return w.m(new C.cKZ(w,this.b))},
$S:0}
C.cKZ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cL2.prototype={
$1(d){var w=null,v=this.a,u=A.b0(d),t=v.f
t===$&&A.c()
return A.aC(w,A.h4(u,w,t===d?D.bOo:w,w,14),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.cL_(v,d),w,w,w,w,w,w,!1,B.a7)},
$S:368}
C.cL_.prototype={
$0(){var w=this.a
return w.m(new C.cKY(w,this.b))},
$S:0}
C.cKY.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cL3.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cL4.prototype={
$0(){var w,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=B.a.i(t.a.a)
if(t.length===0)t=u.b
w=v.e
w===$&&A.c()
v=v.f
v===$&&A.c()
t=u.cIt(v,w,t)
A.a6(this.b,!1).O(t)
return null},
$S:0}
C.eQu.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return w.push(this.b)},
$S:0}
C.eQv.prototype={
$1(d){return new C.a_A(this.a,null)},
$S:z+41}
C.eQB.prototype={
$2(d,e){return B.N},
$S:36}
C.eQA.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.d
l===$&&A.c()
w=l[e]
l=this.b.a
v=l?D.tf:B.c
u=A.m(14)
t=A.m(14)
s=l?B.aK:B.aL
r=w.d
if(r!=null&&r.length!==0){q=A.m(8)
r=A.bw(q,K.aP_(n,B.bU,36,B.pW,l?B.bJ:B.ak,r,48),B.aq)}else r=A.X(D.a_t,A.b0(m.a.c.d),n,n,n,n)
q=w.b
if(q.length===0)q="(Untitled question)"
q=A.d(q,n,2,B.a2,n,n,n,A.l(n,n,l?B.aQ:B.M,n,n,n,n,n,n,n,n,n,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
p=J.ad(w.c)
o=w.e?" \xb7 Printable":""
return A.aF(!1,B.a1,!0,u,A.dL(!1,n,n,n,!0,n,n,n,!0,n,r,n,n,n,n,new C.eQy(m,w,e),!1,n,n,new A.b7(t,new A.ay(s,1,B.q,-1)),n,n,A.d(""+p+" block(s)"+o,n,n,n,n,n,n,A.l(n,n,l?B.bJ:B.ak,n,n,n,n,n,n,n,n,11,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),n,q,n,A.aH(n,n,n,n,D.bMO,n,n,n,new C.eQz(m,e),n,n,n,n,n,n),n),B.f,v,0,n,n,n,n,n,B.ah)},
$S:76}
C.eQz.prototype={
$0(){var w=this.a
w.m(new C.eQw(w,this.b))
w.awA()},
$S:0}
C.eQw.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return B.d.cw(w,this.b)},
$S:0}
C.eQy.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.b_z(u.b),$async$$0)
case 2:s=e
if(s!=null){t.m(new C.eQx(t,u.c,s))
t.awA()}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eQx.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=this.c
v[this.b]=w
return w},
$S:0}
C.eQq.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eQo.prototype={
$1(d){var w=this.a.e
w===$&&A.c()
return new C.V3(w,"Answer Document",null)},
$S:z+42}
C.eQp.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eQs.prototype={
$0(){var w,v,u=this.a,t=u.a.c,s=u.d
s===$&&A.c()
s=B.a.i(s.a.a)
w=u.e
w===$&&A.c()
v=u.f
u=u.r
if(v==null)v=t.d
A.a6(this.b,!1).O(new C.ip(t.a,s,w,v,u,t.f))
return null},
$S:0}
C.eQt.prototype={
$1(d){var w=this.a
return w.m(new C.eQr(w,d))},
$S:8}
C.eQr.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.c92.prototype={
$1(d){return"- "+d.a+": "+d.b+" ("+d.e.length+" questions)"},
$S:z+43}
C.fBx.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.e__.prototype={
$1(d){var w=d.a
return w==="image"||w==="video"||w==="link"||w==="signature"||w==="divider"},
$S:z+44}
C.dZG.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.L(w,new C.lA("image","",this.b,null))},
$S:0}
C.dZL.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.L(w,new C.lA("video","","data:video/mp4;base64,"+B.cT.gcA().aJ(this.b),null))},
$S:0}
C.dZJ.prototype={
$1(d){var w=null,v=x.p,u=A.w(A.a([A.aM(w,B.T,!1,w,!0,B.r,w,A.aN(),this.a,w,w,w,w,w,2,D.bSP,B.y,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a4,w,B.an,w,w,w,w),A.aM(w,B.T,!1,w,!0,B.r,w,A.aN(),this.b,w,w,w,w,w,2,D.bSO,B.y,!0,w,!0,w,!1,w,B.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.a4,w,B.an,w,w,w,w)],v),B.m,w,B.e,B.P,0,B.p)
return A.ek(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dZH(d),w,w),A.bG(D.fs3,new C.dZI(d),w)],v),w,w,w,u,w,w,w,w,D.ff3,w)},
$S:20}
C.dZH.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dZI.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dZK.prototype={
$0(){var w,v=this.a.e
v===$&&A.c()
w=B.a.i(this.b.a.a)
return B.d.L(v,new C.lA("link","",B.a.i(this.c.a.a),w))},
$S:0}
C.dZC.prototype={
$1(d){return B.a.i(d)},
$S:14}
C.dZD.prototype={
$1(d){return d.length!==0},
$S:3}
C.dZE.prototype={
$1(d){return B.a.i(B.a.eg(d,A.af("^[\u2022\\-]\\s*",!0,!1,!1,!1),""))},
$S:14}
C.dZF.prototype={
$1(d){return d.length!==0},
$S:3}
C.dZQ.prototype={
$0(){var w=this.a.bDj()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.dZR.prototype={
$0(){return this.a.awB("**","**")},
$S:0}
C.dZS.prototype={
$0(){return this.a.awB("*","*")},
$S:0}
C.dZT.prototype={
$0(){return this.a.awB("__","__")},
$S:0}
C.dZU.prototype={
$0(){return this.a.aYL("## Section title")},
$S:0}
C.dZV.prototype={
$0(){return this.a.aYL("\u2022 First point\n\u2022 Second point")},
$S:0}
C.dZW.prototype={
$0(){},
$S:0}
C.dZX.prototype={
$0(){var w=this.a
w.m(new C.dZP(w))},
$S:0}
C.dZP.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.L(w,D.dBA)},
$S:0}
C.dZY.prototype={
$0(){var w=this.a
w.m(new C.dZO(w))},
$S:0}
C.dZO.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.L(w,D.dBB)},
$S:0}
C.dZZ.prototype={
$1(d){var w,v,u=null,t=d.b,s=t.a
A:{if("image"===s){w="Image"
break A}if("video"===s){w="Video"
break A}if("link"===s){w=t.d
if(w==null)w="Link"
break A}if("signature"===s){w="Signature"
break A}w=s
break A}v=this.b.a
w=A.d(w,u,u,u,u,u,u,A.l(u,u,v?B.iV:B.az,u,u,u,u,u,u,u,u,11,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
v=v?B.cu:B.iA
return A.De(u,v,B.anj,w,u,new C.dZN(this.a,d),u)},
$S:z+45}
C.dZN.prototype={
$0(){var w=this.a
return w.m(new C.dZM(w,this.b))},
$S:0}
C.dZM.prototype={
$0(){var w=this.a.e
w===$&&A.c()
return B.d.cw(w,this.b.a)},
$S:0}
C.dZz.prototype={
$0(){var w=this.a
w.e=this.b
w.f=null
w.d=D.aUR},
$S:0}
C.dZA.prototype={
$0(){var w=this.a
w.f=this.b.a
w.d=D.fZk},
$S:0}
C.dZr.prototype={
$0(){var w=this.a
w.d=D.aUQ
w.f=w.e=null},
$S:0}
C.dZs.prototype={
$0(){var w=this.a
w.d=D.aUR
w.f=null},
$S:0}
C.dZB.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+2}
C.dZu.prototype={
$2(d,e){var w=this.a,v=w.gb5k()[e]
return new C.abw(v,this.b,new C.dZt(w,v),null)},
$S:z+46}
C.dZt.prototype={
$0(){return this.a.c6O(this.b.a)},
$S:0}
C.dZw.prototype={
$2(d,e){return B.o.aL(d.f,e.f)},
$S:z+47}
C.dZy.prototype={
$2(d,e){return B.R},
$S:36}
C.dZx.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.b[e],r=u.c.a,q=r?D.tf:B.c,p=A.m(16),o=A.m(16),n=A.m(16),m=A.I(r?B.aK:B.aL,B.q,1),l=A.a([new A.ac(0,B.G,B.w.j(r?0.28:0.06),B.dE,8)],x.V),k=A.a([],x.p),j=s.d
if(j!=null&&j.length!==0){w=A.m(10)
v=A.m(10)
k.push(A.bw(w,K.aP_(v,B.bU,52,D.a_t,r?B.bJ:B.ak,j,52),B.aq))}else{j=u.d.d
w=A.b0(j).j(0.15)
v=A.m(12)
k.push(A.p(t,A.X(D.a_t,A.b0(j),t,t,t,24),B.f,t,t,new A.o(w,t,t,v,t,t,B.n),t,52,t,t,t,t,t,52))}k.push(B.bd)
k.push(A.E(A.d(s.b,t,t,t,t,t,t,A.l(t,t,r?B.aQ:B.M,t,t,t,t,t,t,t,t,13,t,t,B.O,t,1.3,!0,t,t,t,t,t,t,t,t),t,t,t),1))
k.push(A.X(B.ey,r?B.bJ:B.ak,t,t,t,22))
return A.aF(!1,B.a1,!0,p,A.aL(!1,o,!0,A.p(t,A.B(k,B.m,t,B.e,B.j,0,t,t),B.f,t,t,new A.o(t,t,m,n,l,t,B.n),t,t,t,t,B.bm,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,new C.dZv(u.a,s),t,t,t,t,t,t,t),B.f,q,0,t,t,t,t,t,B.ah)},
$S:76}
C.dZv.prototype={
$0(){return this.a.cdz(this.b)},
$S:0}
C.c94.prototype={
$1(d){return new C.abo(d,this.a,null)},
$S:z+48}
C.cEI.prototype={
$0(){var w=this.a.c,v=w.c,u=A.or(v==null?w.b:v)
if(u!=null)A.iS(u,B.fn,null)},
$S:0}
C.cEJ.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.cEK.prototype={
$1(d){var w=null,v=this.a.d.a,u=A.d("\u2022  ",w,w,w,w,w,w,A.l(w,w,v?B.cr:B.aK,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=B.a.i(d)
return new A.D(B.nd,A.B(A.a([u,A.E(A.d(t,w,w,w,w,w,w,A.l(w,w,v?B.cr:B.aK,w,w,w,w,w,w,w,w,w,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),1)],x.p),B.F,w,B.e,B.j,0,w,w),w)},
$S:139}
C.dg5.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dg7.prototype={
$0(){return this.a.m(new C.dg6(this.b))},
$S:0}
C.dg6.prototype={
$0(){var w=this.a
return w.a.f?w.h5(0):w.pT(0)},
$S:0}
C.fi5.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.e_d.prototype={
$0(){var w=this.a,v=this.b
if(w.x===D.CE)w.z=v
else w.Q=v},
$S:0}
C.e_4.prototype={
$1(d){var w=this.a.e,v=w.f
if(v.length===0)return
v=B.d.gcZ(v).Q
v.toString
w.mb(v,B.ct,B.eL)},
$S:9}
C.e_6.prototype={
$1(d){return J.q(d,"role")==="ai"},
$S:94}
C.e_7.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.F(["role","user","text",this.b],v,v))
w.d.bO(0,B.c8)
w.r=!0},
$S:0}
C.e_8.prototype={
$0(){var w=this.a,v=x.N
w.f.push(A.F(["role","ai","text","Music AI is warming up \u2014 try again in a moment."],v,v))
w.r=!1},
$S:0}
C.e_9.prototype={
$1(d){var w=J.a4(d),v=w.h(d,"role")==="user"?"Artist":"NGMY Music"
return v+": "+A.t(w.h(d,"text"))},
$S:157}
C.e_a.prototype={
$0(){var w=x.N
return this.a.f.push(A.F(["role","ai","text",this.b],w,w))},
$S:0}
C.e_b.prototype={
$0(){var w=x.N
return this.a.f.push(A.F(["role","ai","text","Connection glitch \u2014 check internet and try again."],w,w))},
$S:0}
C.e_c.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e_5.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a
if(k.r&&e===k.f.length){k=A.mJ(l,B.bC.j(0.9),l,l,l,l,l,2,l,l)
return new A.D(B.bQ,A.B(A.a([new A.a7(22,22,k,l),B.au,A.d("Writing full song\u2026",l,l,l,l,l,l,A.l(l,l,this.b?B.aA:B.dB,l,l,l,l,l,l,l,l,12,B.cF,l,l,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],x.p),B.m,l,B.e,B.j,0,l,l),l)}w=k.f[e]
v=this.b
u=w.h(0,"role")==="user"
t=u?B.a8:B.a3
k=k.c
k.toString
k=A.aI(k,B.bW,x.w).w
s=u?18:4
r=u?4:18
if(u)q=new A.a8(B.a3,B.a8,B.x,A.a([B.aE,B.bC.j(0.85)],x.O),l,l)
else{q=x.O
q=new A.a8(B.a3,B.a8,B.x,v?A.a([B.bo,B.M],q):A.a([B.c,B.aQ],q),l,l)}p=A.a([new A.ac(0,B.G,(u?B.bC:B.aE).j(0.22),B.ju,14)],x.V)
o=A.I(B.c.j(u?0.2:0.08),B.q,1)
w=w.h(0,"text")
if(w==null)w=""
if(u)v=B.c
else v=v?B.aL:B.bj
n=u?13.5:15
m=u?B.bn:B.cF
return new A.bI(t,l,l,A.p(l,A.d(w,l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,n,m,l,u?B.a5:B.cw,l,1.55,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,new A.aY(0,k.a.a*0.94,0,1/0),new A.o(l,l,o,new A.bp(B.iq,B.iq,new A.aT(s,s),new A.aT(r,r)),p,q,B.n),l,l,l,B.kU,B.jm,l,l,l),l)},
$S:42}
C.e_k.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=n.as
m===$&&A.c()
w=m.x
w===$&&A.c()
v=A.m(22)
u=this.b
t=x.O
s=u?A.a([D.ad2,B.M,B.nP],t):A.a([B.pA,B.pw,B.pz],t)
w=A.a([new A.ac(-4,B.G,B.aE.j(0.35+w*0.25),B.dn,28)],x.V)
r=A.I(B.c.j(u?0.08:0.5),B.q,1)
q=A.dp()
p=q.a
p.$flags&2&&A.aj(p)
p[11]=0.001
m=m.x
m===$&&A.c()
q.fC(m*0.08)
q=A.fu(B.A,A.p(o,D.bJw,B.f,o,o,new A.o(o,o,A.I(B.aM.j(0.6),B.q,2),o,o,D.eg8,B.a6),o,44,o,o,o,o,o,44),o,q,!0)
m=A.nO(B.jx,D.fwA,new C.e_h())
p=x.p
m=A.a([A.B(A.a([q,B.bd,A.E(A.w(A.a([m,A.d("Swipe \u2191 lyrics bigger \xb7 Full song first",o,o,o,o,o,o,A.l(o,o,u?B.aS:B.aW,o,o,o,o,o,o,o,o,10,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],p),B.F,o,B.e,B.j,0,B.p),1)],p),B.m,o,B.e,B.j,0,o,o),B.ac,A.B(A.a([n.auQ(D.CE,"Swahili","\ud83c\uddf9\ud83c\uddff",u),B.ab,n.auQ(D.aFO,"English","\ud83c\uddec\ud83c\udde7",u),B.ab,n.auQ(D.CF,"Mix","\ud83d\udd25",u)],p),B.m,o,B.e,B.j,0,o,o)],p)
if(n.x!==D.CF){t=A.a([B.N,n.cwF(u)],p)
if(n.w){q=n.x===D.CE?D.a3l:D.a2r
p=A.U(q).k("M<1,r>")
q=A.C(new A.M(q,new C.e_i(n,u),p),p.k("ak.E"))
t.push(new A.D(B.jG,A.bW(B.bA,q,B.bq,6,6),o))}B.d.v(m,t)}else{t=A.a([B.bC.j(0.22),B.aE.j(0.12)],t)
q=A.m(12)
p=A.I(B.bC.j(0.45),B.q,1)
m.push(new A.D(B.jG,A.p(o,A.d('Twist rhymes only \u2014 e.g. "mambo mengi\u2026shangaha" / "Idi Amin dada amezaha" (dada=sister + name twist)',o,o,o,o,o,o,A.l(o,o,u?B.ix:B.kp,o,o,o,o,o,o,o,o,10,o,o,B.O,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),B.f,o,o,new A.o(o,o,p,q,o,new A.a8(B.a3,B.a8,B.x,t,o,o),B.n),o,o,o,o,B.bR,o,o,o),o))}m.push(B.N)
t=x.dc
n=A.C(new A.M(D.d6h,new C.e_j(n,u),t),t.k("ak.E"))
m.push(A.B(n,B.m,o,B.e,B.j,0,o,o))
return A.p(o,A.w(m,B.aj,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(o,o,r,v,w,new A.a8(B.ax,B.aC,B.x,s,o,o),B.n),o,o,o,I.ahh,I.ahw,o,o,o)},
$S:92}
C.e_h.prototype={
$1(d){return D.bXi.aw(0,d)},
$S:67}
C.e_i.prototype={
$1(d){return this.a.cwG(d,this.b)},
$S:z+49}
C.e_j.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.a,o=p.y===d,n=d!==D.aFQ?6:0,m=o?5:0,l=A.m(12)
if(o){w=this.b
v=w?B.aE.j(0.45):B.aE.j(0.15)
u=v
v=w
w=u}else{w=this.b
v=B.w.j(w?0.25:0.05)
u=v
v=w
w=u}t=A.m(12)
p=p.r?q:new C.e_g(p,d)
s=C.hG0(d)
if(o)r=B.c
else r=v?B.ad:B.bj
r=A.d(s,q,q,q,q,q,q,A.l(q,q,r,q,q,q,q,q,q,q,q,10,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=C.hG1(d)
if(o)v=B.ad
else v=v?B.c0:B.dB
return A.E(new A.D(new A.Q(0,0,n,0),A.aF(!1,B.a1,!0,l,A.aL(!1,t,!0,new A.D(Q.M7,A.w(A.a([r,A.d(s,q,q,q,q,q,q,A.l(q,q,v,q,q,q,q,q,q,q,q,7,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.e,B.j,0,B.p),q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,w,m,q,q,q,q,q,B.ah),q),1)},
$S:z+50}
C.e_g.prototype={
$0(){var w=this.a
return w.m(new C.e_f(w,this.b))},
$S:0}
C.e_f.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.e_m.prototype={
$0(){var w=this.a
return w.m(new C.e_l(w))},
$S:0}
C.e_l.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e_3.prototype={
$0(){var w=this.a
return w.m(new C.e_2(w,this.b))},
$S:0}
C.e_2.prototype={
$0(){var w=this.a,v=w.x=this.b
w.w=v!==D.CF
if(v===D.aFO&&w.Q==null)w.Q=B.d.gI(D.a2r).a},
$S:0}
C.e_n.prototype={
$0(){return this.a.csd(this.b.a)},
$S:0}
C.e_e.prototype={
$0(){return this.a.IO(this.b)},
$S:0}
C.e_0.prototype={
$1(d){return this.a.aYM()},
$S:2}
C.e_1.prototype={
$0(){return this.a.aYM()},
$S:0}
C.fNE.prototype={
$1(d){var w=this
return new C.Zk(w.a,w.b,w.c,new C.fND(w.d),null)},
$S:z+51}
C.fND.prototype={
$0(){return J.lW(this.a.bi())},
$S:0}
C.ddp.prototype={
$1(d){var w=this.a
if(w.c!=null)w.a.bg8()},
$S:30}
C.ddq.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a.f
m===$&&A.c()
m=m.x
m===$&&A.c()
w=this.b
v=m*3.141592653589793*2+w*0.55
m=this.c
u=x.w
t=A.aI(m,B.bW,u).w
s=Math.cos(v)
u=A.aI(m,B.bW,u).w
m=Math.sin(v*1.3)
r=Math.sin(v)
q=(w&1)===0
p=q?B.dX:B.ha
o=B.o.E(w,4)
q=q?B.aF:B.aJ
return A.ao(n,A.de(A.X(p,q,n,n,n,10+o*2),0.25+(r+1)*0.2),n,n,t.a.a*0.5+s*(120+w*8),n,u.a.b*0.42+m*(90+w*6),n)},
$S:283}
C.ddv.prototype={
$0(){},
$S:0}
C.ddu.prototype={
$2(d,e){var w,v,u,t=this.a.d
t===$&&A.c()
w=t.x
w===$&&A.c()
v=B.mT.az(0,B.k.D(w,0,1))
t=t.x
t===$&&A.c()
t=Math.sin(t*3.141592653589793)
w=A.dp()
u=w.a
u.$flags&2&&A.aj(u)
u[11]=0.0028
w.fC(t*0.08)
w.k5(0.12)
return A.ed(B.A,A.fu(B.A,e,null,w,!0),0.5+v*0.5,null,null)},
$S:46}
C.ddr.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=0.55+r*0.45
r=A.p(t,t,B.f,t,t,new A.o(t,t,t,t,A.a([new A.ac(6,B.G,B.aF.j(w*0.5),B.J,36)],x.V),t,B.a6),t,108,t,t,t,t,t,108)
v=s.a
u=v.c
v=v.d
return new A.an(B.A,t,B.aa,B.r,A.a([r,new A.a7(96,96,A.mJ(B.c.j(0.08),B.aF,t,t,t,t,t,6,u/v,t),t),A.d(""+s.a.c,t,t,t,t,t,t,A.l(t,t,B.c,t,t,t,t,t,t,t,t,38,t,t,B.u,t,t,!0,t,t,t,t,t,A.a([new A.cR(B.aF.j(w),B.J,16)],x.C),t,t),t,t,t)],x.p),t)},
$S:112}
C.dds.prototype={
$1(d){return D.bXm.aw(0,d)},
$S:67}
C.ddt.prototype={
$0(){var w=this.a
w.a.bg8()
w.a.e.$0()},
$S:0}
C.cb2.prototype={
$1(d){var w=!1
if(B.a.i(d.b.toLowerCase())===this.a)if(d.d===B.ft)if(d.x===B.dt){w=d.w
w=B.a.i(w==null?"":w)===this.b}return w},
$S:16}
C.cbf.prototype={
$1(d){return d.a===this.a},
$S:16}
C.ed6.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.edN.prototype={
$1(d){var w=this.a
if(w.c!=null)w.Pw()},
$S:9}
C.edO.prototype={
$1(d){var w=$.aW.p2$
if(w===B.t1||w===B.t2)return
this.a.EC()},
$S:12}
C.edP.prototype={
$1(d){this.a.cyM()},
$S:12}
C.edv.prototype={
$0(){this.a.Jg(this.b.d,!1)},
$S:0}
C.edw.prototype={
$0(){},
$S:0}
C.edx.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
return null},
$S:0}
C.edy.prototype={
$0(){},
$S:0}
C.edz.prototype={
$1(d){return d.a===this.a},
$S:16}
C.edA.prototype={
$0(){var w=this.a
w.f=!1
w.r=null
w.rx=0
w.fx=w.fr=this.b
w.fy=this.c},
$S:0}
C.edB.prototype={
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
C.edq.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[4]
w.e=A.bo(v[2],!0,x.o)
w.f=v[5]
w.r=v[3]
w.w=A.bo(v[1],!0,x.N)
w.OR()
w.a83()},
$S:0}
C.ed7.prototype={
$0(){this.b.Jg(this.c.d+this.a.a,!1)},
$S:0}
C.edr.prototype={
$1(d){var w=d.d
return(w===B.ft||w===B.eO)&&d.x===B.dt},
$S:16}
C.eds.prototype={
$1(d){return d.a},
$S:164}
C.edt.prototype={
$1(d){return d.a===this.a},
$S:16}
C.edu.prototype={
$0(){},
$S:0}
C.edb.prototype={
$0(){var w=this.a,v=this.b.a
w.d=v[3]
w.e=A.bo(v[1],!0,x.o)
w.f=v[4]
w.r=v[2]
w.w=A.bo(v[0],!0,x.N)},
$S:0}
C.edc.prototype={
$0(){var w=this,v=w.a
v.d=w.b
v.e=w.c
v.f=w.d},
$S:0}
C.edk.prototype={
$0(){},
$S:0}
C.edh.prototype={
$0(){return this.a.a.c.d},
$S:83}
C.edi.prototype={
$0(){var w=this.a,v=A.C(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.edj.prototype={
$0(){var w=this.a,v=A.C(w.e,x.o)
v.push(this.b)
return w.e=v},
$S:0}
C.edl.prototype={
$0(){return this.a.z=!0},
$S:0}
C.edm.prototype={
$0(){var w,v=this.b,u=v.x=this.c
v.x1=v.to=v.ry=null
v=this.a.a.c
w=u.f
v.x=new A.vn(u.a,u.b,u.c,u.d,u.e,w)
v.x1=v.to=v.ry=null},
$S:0}
C.edn.prototype={
$0(){return this.a.z=!1},
$S:0}
C.edp.prototype={
$0(){var w=this.a
return w.m(new C.edo(w))},
$S:0}
C.edo.prototype={
$0(){return this.a.y=1},
$S:0}
C.edd.prototype={
$0(){return this.a.y=1},
$S:0}
C.ede.prototype={
$0(){var w=this.a
w.f=!0
w.fr=w.r=this.b
w.rx=this.c},
$S:0}
C.edF.prototype={
$1(d){return d.a.length===0},
$S:16}
C.edG.prototype={
$2(d,e){return e.y.aL(0,d.y)},
$S:74}
C.edK.prototype={
$0(){var w=this.a
return w.m(new C.edD(w))},
$S:0}
C.edD.prototype={
$0(){return this.a.y=1},
$S:0}
C.edL.prototype={
$0(){var w=this.a
return w.m(new C.edC(w))},
$S:0}
C.edC.prototype={
$0(){return this.a.y=2},
$S:0}
C.edM.prototype={
$0(){return A.iO(this.a,null)},
$S:0}
C.edH.prototype={
$2$cloudRequest(d,e){return this.a.aZT(d,!0)},
$1(d){return this.$2$cloudRequest(d,!1)},
$S:1652}
C.edI.prototype={
$0(){return this.a.EC()},
$S:1}
C.edJ.prototype={
$0(){var w=this.a
return w.m(new C.edE(w))},
$S:0}
C.edE.prototype={
$0(){var w=this.a
return w.y=B.o.D(w.y-1,0,2)},
$S:0}
C.eda.prototype={
$0(){A.eU()
var w=this.a
w.m(new C.ed9(w))},
$S:0}
C.ed9.prototype={
$0(){return this.a.y=0},
$S:0}
C.ed8.prototype={
$2(d,e){var w,v,u,t=null,s=e.b/3,r=this.a,q=r.y
q=A.bE6(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.c.j(0.55),B.q,1.2),t,A.a([new A.ac(1,B.G,B.aw.j(0.55),B.J,18)],x.V),D.bVo,B.a6),t,t,t,t,t,t,t,t),B.ew,B.r3,40,t,s*q+(s-40)/2,6,40)
w=x.p
v=A.a([],w)
for(u=0;u<3;++u)v.push(r.c2v(u))
return new A.an(B.W,t,B.aa,B.r,A.a([q,A.B(v,B.m,t,B.e,B.j,0,t,t)],w),t)},
$S:63}
C.edg.prototype={
$0(){var w=this.a,v=this.b
if(w.y===v)return
A.eU()
w.m(new C.edf(w,v))},
$S:0}
C.edf.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dhT.prototype={
$1(d){var w,v=d.f
if(v==null)v=""
w=v.toLowerCase()
v=d.d
if(v===B.ft||v===B.eO)return!0
if(d.c!==0)v=B.a.t(w,"clock-in daily earnings")||B.a.t(w,"clock-in earnings")
else v=!1
return v},
$S:16}
C.dhU.prototype={
$1(d){return new A.S(Date.now(),0,!1)},
$S:632}
C.dhV.prototype={
$2(d,e){var w,v=this.a,u=e.b
if(u==null)u=new A.S(Date.now(),0,!1)
u=A.dB(C.fV3(v.c,u))
w=this.c?new C.dhS(v):null
return v.b7b(this.b,B.q5,D.eK,w,"Today","$"+u,D.eK)},
$S:1654}
C.dhS.prototype={
$0(){this.a.f.$0()
return null},
$S:0}
C.dhW.prototype={
$2(d,e){var w=this.a
return w.b7b(this.b,B.k5,B.ce,w.w,"Balance","$"+A.dB(A.KU(w.c.a,new C.dhR(w))),B.cn)},
$S:61}
C.dhR.prototype={
$0(){return this.a.c.d},
$S:83}
C.dhM.prototype={
$0(){this.a.a.cQc()
return null},
$S:0}
C.dhN.prototype={
$2(d,e){var w=null,v=this.a.f
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(w,w,w,new C.buF(v,w),B.av)},
$S:70}
C.dhO.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.e
v=v.f
if(u){v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.baE(v,!0,B.aw,D.oB,w)}else{v===$&&A.c()
v=v.x
v===$&&A.c()
v=new C.baD(v,D.oB,w)}return A.b3(w,w,w,v,B.av)},
$S:70}
C.dhP.prototype={
$1(d){return new A.S(Date.now(),0,!1)},
$S:632}
C.dhQ.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=e.b
if(q==null)q=new A.S(Date.now(),0,!1)
w=r.a
v=w.a.cOZ(q)
u=w.a
if(u.f)t=1
else{u=u.d
t=u<=0?0:B.k.D(v/u,0,1)}u=w.d
u===$&&A.c()
s=w.e
s===$&&A.c()
return A.c6(new A.h8(A.a([u,s],x.U)),new C.dhL(w,r.b,t,r.c,r.d,v,r.e),null)},
$S:1655}
C.dhL.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=A.a([],m),k=o.b
if(k)B.d.v(l,A.im(7,new C.dhK(o.a),!0,x.l))
w=o.a
v=w.d
v===$&&A.c()
v=v.x
v===$&&A.c()
u=o.d
l.push(A.b3(n,n,n,new C.baC(o.c,v,k,u,D.oB,D.bly,n),D.eRk))
v=A.I(B.c.j(0.1),B.q,1.2)
if(k)t=B.vJ
else t=o.e?B.vB:D.bED
t=A.X(t,k?D.oB:B.b3,n,n,n,26)
s=w.a
if(s.e)s="FILLING TO 12 PM"
else if(s.f)s="FULL DAY EARNED"
else s=o.e?"NO WORK SAT & SUN":"DAILY EARNINGS"
s=A.d(s,n,n,n,n,n,n,A.l(n,n,B.c.j(0.62),n,n,n,n,n,n,n,n,9,n,n,B.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n)
r=o.e
if(r)w="Back Monday"
else{w=w.a
w="$"+A.dB(w.f&&w.d>0?w.d:o.f)}q=k?D.oB:B.c
w=A.d(w,n,n,n,n,n,n,A.l(n,n,q,n,n,n,n,n,n,n,n,r?22:28,n,n,B.u,n,n,!0,n,-0.6,n,n,n,n,n,n),n,n,n)
q=A.m(999)
p=u.j(0.16)
u=A.I(u.j(0.5),B.q,1)
l.push(A.p(n,A.w(A.a([t,B.am,s,B.at,w,B.N,A.p(n,A.d(o.r,n,n,n,n,n,n,A.l(n,n,k?D.oB:B.oF,n,n,n,n,n,n,n,n,9,n,n,B.u,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),B.f,n,n,new A.o(p,n,u,q,n,n,B.n),n,n,n,n,B.kX,n,n,n)],m),B.m,n,B.b9,B.j,0,B.p),B.f,n,n,new A.o(B.K,n,v,n,n,n,B.a6),n,176,n,n,n,n,n,176))
return A.av(new A.a7(276,276,new A.an(B.A,n,B.aa,B.f,l,n),n),n,n,n)},
$S:224}
C.dhK.prototype={
$1(d){var w,v,u,t,s=null,r=this.a.e
r===$&&A.c()
r=r.x
r===$&&A.c()
w=B.k.E(r+d*0.14,1)
r=Math.sin(r*3.141592653589793*2+d)
v=(d&1)===0?-10:16
u=B.o.E(d,3)
t=B.o.E(d,2)
return A.ao(s,A.dZ(A.de(A.p(s,s,B.f,s,s,new A.o(s,s,s,A.m(40),s,new A.bT(B.A,0.5,B.x,s,0,A.a([D.oB.j(0.38),B.c.j(0.08),B.K],x.O),s,s),B.n),s,28+t*12,s,s,s,s,s,22+u*10),(1-w)*0.42),!0,s),s,s,118+r*18+v,s,-8-w*54,s)},
$S:218}
C.dic.prototype={
$0(){},
$S:0}
C.did.prototype={
$0(){},
$S:0}
C.die.prototype={
$1(d){return d.x===B.dt},
$S:16}
C.dhZ.prototype={
$0(){return this.a.a.d.d},
$S:83}
C.dhY.prototype={
$0(){var w,v
A.eU()
w=this.a
v=this.b
w.m(new C.dhX(w,v))
if(v===2){w=w.a.y.$0()
if(w==null)A.f8(null,x.H)}},
$S:0}
C.dhX.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.di9.prototype={
$1(d){var w=this,v=null,u=w.a,t=""+d,s=u.d.a.a===t,r=A.m(12),q=s?w.b.j(0.18):B.c.j(0.04),p=A.I(s?w.b.j(0.7):B.c.j(0.08),B.q,1)
return A.E(new A.D(B.jn,A.aC(v,A.df(B.A,A.d("$"+t,v,v,v,v,v,v,A.l(v,v,s?w.b:B.ad,v,v,v,v,v,v,v,v,13,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,B.bc,new A.o(q,v,p,r,v,v,B.n),B.hx,v,38,v,v,v,v,v),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dib(u,d),v,v,v,v,v,v,!1,B.a7),v),1)},
$S:1657}
C.dib.prototype={
$0(){A.eU()
var w=this.a
w.m(new C.dia(w,this.b))},
$S:0}
C.dia.prototype={
$0(){var w=""+this.b
this.a.d.saW(0,w)
return w},
$S:0}
C.di8.prototype={
$4$bold$color(d,e,f,g){var w=null,v=A.d(d,w,w,w,w,w,w,A.l(w,w,B.c.j(0.55),w,w,w,w,w,w,w,w,12.5,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),u=g==null?B.c:g,t=f?15:13
return new A.D(B.xB,A.B(A.a([v,B.b7,A.d(e,w,w,w,w,w,w,A.l(w,w,u,w,w,w,w,w,w,w,w,t,w,w,f?B.u:B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$2(d,e){return this.$4$bold$color(d,e,!1,null)},
$3$color(d,e,f){return this.$4$bold$color(d,e,!1,f)},
$3$bold(d,e,f){return this.$4$bold$color(d,e,f,null)},
$S:1658}
C.di7.prototype={
$1(d){return this.a.m(new C.di6())},
$S:2}
C.di6.prototype={
$0(){},
$S:0}
C.di1.prototype={
$1(d){return this.a.aVp(d)&&!A.h1D(d)},
$S:16}
C.di2.prototype={
$2(d,e){return e.y.aL(0,d.y)},
$S:74}
C.di3.prototype={
$0(){return this.a.a.d.d},
$S:83}
C.di4.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a.y.$0()
w=2
return A.b(x.r.b(s)?s:A.dQ(s,x.H),$async$$0)
case 2:if(t.c!=null)t.m(new C.di0())
t.m7("Balance refreshed.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.di0.prototype={
$0(){},
$S:0}
C.di5.prototype={
$0(){var w=this.a
return w.m(new C.di_(w))},
$S:0}
C.di_.prototype={
$0(){return this.a.r+=80},
$S:0}
C.fxx.prototype={
$2(d,e){return e.y.aL(0,d.y)},
$S:74}
C.fqM.prototype={
$1(d){var w=J.a4(d),v=w.h(d,"toEmail"),u=!1
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){v=w.h(d,"gameId")
if(v==null)v=""
if(J.A(v,this.b)){w=w.h(d,"status")
w=J.A(w==null?"pending":w,"pending")}else w=u}else w=u
return w},
$S:4}
C.fHY.prototype={
$1(d){var w=J.a4(d),v=w.h(d,"toEmail")
if(B.a.i(J.k(v==null?"":v).toLowerCase())===this.a){w=w.h(d,"status")
w=J.A(w==null?"pending":w,"pending")}else w=!1
return w},
$S:4}
C.fqL.prototype={
$1(d){var w,v,u
if(!C.i0I(d,this.a))return!1
w=J.a4(d)
v=w.h(d,"sessionUpdatedAt")
v=A.bi(J.k(v==null?"":v))
if(v==null){v=w.h(d,"respondedAt")
v=A.bi(J.k(v==null?"":v))
u=v}else u=v
if(u==null){w=w.h(d,"createdAt")
u=A.bi(J.k(w==null?"":w))}if(u!=null&&B.o.an(new A.S(Date.now(),0,!1).bE(u).a,36e8)>72)return!1
return!0},
$S:4}
C.ffE.prototype={
$1(d){var w=this.a
if(B.o.E(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:77}
C.fGJ.prototype={
$0(){return $.h_8=null},
$S:11}
C.fGK.prototype={
$1(d){return A.a2(d,x.N,x.z)},
$S:7}
C.fEE.prototype={
$1(d){return A.a2(d,x.N,x.z)},
$S:7}
C.fEF.prototype={
$0(){var w,v=this.a
$.fZW.W(0,v)
w=C.tX(this.b,v)
if(w!=null)A.Qy(A.a([A.a2(w,x.N,x.z)],x._),v)},
$S:0}
C.fJ5.prototype={
$1(d){return new C.a_7(this.a,this.b,null)},
$S:z+56}
C.e7m.prototype={
$0(){return this.a.f="Enter the other player's account email."},
$S:0}
C.e7p.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e7q.prototype={
$1(d){var w=this.a
if(w.f.length!==0)w.m(new C.e7o(w))},
$S:2}
C.e7o.prototype={
$0(){return this.a.f=""},
$S:0}
C.e7r.prototype={
$1(d){return this.a.aZ_()},
$S:2}
C.e7s.prototype={
$0(){var w=this.a
return w.m(new C.e7n(w,this.b))},
$S:0}
C.e7n.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.fpW.prototype={
$1(d){if(d.length===0)return d
return d[0].toUpperCase()+B.a.b3(d,1)},
$S:14}
C.fpV.prototype={
$1(d){var w=d.length
if(w===0)return d
if(w===1)return d.toUpperCase()
return d[0].toUpperCase()+B.a.b3(d,1)},
$S:14}
C.fH_.prototype={
$1(d){var w,v=x.f
if(v.b(d))return A.a2(d,x.N,x.z)
try{v=A.a2(v.a(d.ag()),x.N,x.z)
return v}catch(w){return A.T(x.N,x.z)}},
$S:13}
C.fH0.prototype={
$1(d){return J.cI(d)},
$S:4}
C.fAV.prototype={
$1(d){return d.a!=="send_email"},
$S:324}
C.fGr.prototype={
$1(d){var w=null,v=B.w.j(0.35),u=A.m(10),t=A.I(B.b0,B.q,1)
return A.p(B.A,A.d(d,w,w,w,w,w,w,B.hF,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,86,w,B.eS,w,w,w,72)},
$S:639}
C.ccP.prototype={
$1(d){return J.k(d)},
$S:17}
C.ccQ.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b6(d,new C.ccO(),x.S)
w=A.C(w,w.$ti.k("ak.E"))
return w}return A.c2(7,0,!1,x.S)},
$S:644}
C.ccO.prototype={
$1(d){var w
if(A.iH(d))w=d
else{w=A.c8(J.k(d),null)
if(w==null)w=0}return w},
$S:440}
C.ccR.prototype={
$1(d){var w
if(x.j.b(d)){w=J.b6(d,new C.ccN(),x.S)
w=A.C(w,w.$ti.k("ak.E"))
return w}return A.c2(8,0,!1,x.S)},
$S:644}
C.ccN.prototype={
$1(d){var w
if(A.iH(d))w=d
else{w=A.c8(J.k(d),null)
if(w==null)w=0}return w},
$S:440}
C.ccT.prototype={
$1(d){return A.bo(d,!0,x.S)},
$S:651}
C.ccU.prototype={
$1(d){return A.bo(d,!0,x.S)},
$S:651}
C.ccM.prototype={
$1(d){var w=this.a
if(B.o.E(w+d,2)===1){if(w<3)return 2
if(w>4)return 1}return 0},
$S:77}
C.ccS.prototype={
$2(d,e){return d+e},
$S:72}
C.ccL.prototype={
$2(d,e){var w=this,v=w.b,u=w.c,t=w.a,s=w.d,r=0
for(;;){if(!(v>=0&&v<6&&u>=0&&u<7&&J.q(t.fr[v],u)===s))break;++r
v+=d
u+=e}return r},
$S:72}
C.frQ.prototype={
$1(d){this.a.$2(d,this.b)},
$S:z+57}
C.frK.prototype={
$0(){return this.a.$1(D.qe)},
$S:0}
C.frL.prototype={
$0(){return this.a.$1(D.qe)},
$S:0}
C.frM.prototype={
$0(){return this.a.$1(D.qe)},
$S:0}
C.frN.prototype={
$0(){return this.a.$1(D.qe)},
$S:0}
C.frO.prototype={
$0(){return this.a.$1(D.qe)},
$S:0}
C.frP.prototype={
$0(){return this.a.$1(D.qe)},
$S:0}
C.fcX.prototype={
$2(d,e){var w,v,u=this,t=null,s=B.o.an(e,8),r=B.o.E(e,8),q=B.o.E(s+r,2),p=u.a,o=J.q(p.y[s],r),n=p.Q===s&&p.as===r
q=q===1?D.WQ:D.b9z
if(o===0)w=t
else{w=x.O
w=o===1?A.a([B.c,B.aL],w):A.a([B.bo,B.w],w)
v=n?B.aM:B.dr
w=A.p(t,t,B.f,t,t,new A.o(t,t,A.I(v,B.q,n?3:1),t,A.a([new A.ac(0,B.G,B.w.j(0.35),B.dE,4)],x.V),new A.bT(B.A,0.5,B.x,t,0,w,t,t),B.a6),t,28,t,t,t,t,t,28)}return A.aC(t,A.p(t,A.av(w,t,t,t),B.f,q,t,t,t,t,t,t,t,t,t,t),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.fcW(p,s,r,u.b,u.c,u.d),t,t,t,t,t,t,!1,B.a7)},
$S:75}
C.fcW.prototype={
$0(){var w=this,v=w.a,u=v.cUQ(w.b,w.c,w.d)
w.e.$0()
if(u){v=v.f===!0?D.qe:D.HR
w.f.$1(v)}},
$S:0}
C.fq5.prototype={
$2(d,e){var w=this,v=null,u=e.b
return new A.a7(u,u,A.ij(!0,v,v,B.y,R.aOg,new C.fq4(w.a,w.b,w.c,w.d,u),9,v,B.dS,B.ag,!1),v)},
$S:176}
C.fq4.prototype={
$2(d,e){var w=this,v=null,u=A.m(12),t=A.m(12),s=w.a,r=s.at[e],q=r==="X"?B.aP:B.ay
return A.aF(!1,B.a1,!0,u,A.aL(!1,t,!0,A.av(A.d(r,v,v,v,v,v,v,A.l(v,v,q,v,v,v,v,v,v,v,v,w.e*0.22,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.fq3(s,e,w.b,w.c,w.d),v,v,v,v,v,v,v),B.f,B.fy,0,v,v,v,v,v,B.ah)},
$S:76}
C.fq3.prototype={
$0(){var w=this,v=w.a.cUR(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.fcr.prototype={
$1(d){return new A.D(B.jn,C.fEv(d,!1),null)},
$S:302}
C.fcs.prototype={
$1(d){return C.fEv(d,!1)},
$S:1662}
C.fct.prototype={
$0(){var w=this,v=w.a
v.cEM(w.b)
w.c.$0()
if(v.a>=1)w.d.$0()},
$S:0}
C.fcu.prototype={
$0(){var w=this
w.a.cEN(w.b)
w.c.$0()
w.d.$0()},
$S:0}
C.fne.prototype={
$1(d){var w=this,v=null,u=d*6
return A.mI(v,B.bo,A.d(""+u,v,v,v,v,v,v,B.ck,v,v,v),B.dp,new C.fnd(w.a,w.b,u,w.c,w.d),v,v,new A.ay(B.c.j(0.2),1,B.q,-1),v)},
$S:1663}
C.fnd.prototype={
$0(){var w=this,v=w.a,u=w.b.aA(37)
v.cx=u
if(u===w.c)v.a=1
w.d.$0()
if(v.a>=1)w.e.$0()},
$S:0}
C.fp9.prototype={
$1(d){return D.da9[d]},
$S:81}
C.fpa.prototype={
$0(){var w,v,u=this,t=u.a,s=u.b
s=t.db=A.a([s.aA(6),s.aA(6),s.aA(6)],x.t)
w=s[0]
v=s[1]
if(w===v&&v===s[2])t.a=1
u.c.$0()
if(t.a>=1)u.d.$0()},
$S:0}
C.flZ.prototype={
$1(d){this.a.dy=d
this.b.$0()},
$S:6}
C.fm_.prototype={
$0(){var w=this,v=w.a
if(w.b.aj()>0.35+v.dy*0.4)v.a=1
w.c.$0()
w.d.$0()},
$S:0}
C.fdo.prototype={
$0(){var w=this,v=w.a.cKu(w.b,w.c)
w.d.$0()
w.e.$1(v)},
$S:0}
C.fdn.prototype={
$1(d){var w,v=null,u=J.q(this.a.fr[5-d],this.b)
if(u===0)w=B.mm
else w=u===1?B.dJ:B.rv
return new A.fI(1,A.p(v,v,B.f,v,v,new A.o(w,v,A.I(B.bE,B.q,1),v,v,v,B.a6),v,v,v,B.ng,v,v,v,v),v)},
$S:1664}
C.fmb.prototype={
$1(d){var w=this
if(w.a.baD(w.b))w.c.$0()
w.d.$0()},
$S:2}
C.fmc.prototype={
$0(){var w=this
if(w.a.baD(w.b))w.c.$0()
w.d.$0()},
$S:0}
C.fcR.prototype={
$0(){var w=this
if(w.a.aj()>0.45)w.b.a=1
w.c.$0()
if(w.b.a>=1)w.d.$0()},
$S:0}
C.fwA.prototype={
$1(d){var w=J.q(d,"email")
return B.a.t(B.a.i(J.k(w==null?"":w)),"@")},
$S:4}
C.fwB.prototype={
$1(d){var w,v=J.a4(d),u=v.h(d,"username")
if(u==null)u=v.h(d,"fullName")
w=B.a.i(J.k(u==null?"User":u))
v=v.h(d,"email")
return"- "+w+" <"+B.a.i(J.k(v==null?"":v))+">"},
$S:54}
C.eFE.prototype={
$0(){},
$S:0};(function aliases(){var w=C.aJW.prototype
w.btA=w.a_
w.btz=w.q
w=C.aJX.prototype
w.btC=w.a_
w.btB=w.q
w=C.aJY.prototype
w.btE=w.a_
w.btD=w.q
w=C.aKU.prototype
w.buC=w.a_
w.buB=w.q
w=C.aKt.prototype
w.bua=w.q
w=C.aL2.prototype
w.buL=w.q
w=C.aJZ.prototype
w.btF=w.q
w=C.aLa.prototype
w.buU=w.q
w=C.aK3.prototype
w.btK=w.q
w=C.aKj.prototype
w.bu0=w.q
w=C.aLR.prototype
w.bvA=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._static_1,t=a.installStaticTearOff,s=a._instance_2u,r=a.installInstanceTearOff
var q
w(q=C.azI.prototype,"gbPG","bPH",19)
v(q,"gaRR","aRS",1)
v(C.azH.prototype,"gcvE","a1O",1)
v(q=C.azJ.prototype,"gbV9","bVa",1)
v(q,"gbF2","bF3",1)
v(q=C.awU.prototype,"gcoI","coJ",1)
v(q,"gcd6","PY",0)
v(q,"gczz","czA",1)
v(q,"gcrK","n0",0)
w(q,"gchs","cht",25)
w(q,"gcxW","RI",33)
v(q=C.aBO.prototype,"gbNJ","Xd",0)
v(q,"gc38","YI",0)
v(q,"gc35","YH",0)
v(q,"gc36","acL",0)
v(q,"gc37","OV",0)
v(C.az6.prototype,"gc39","c3a",1)
u(C,"i7W","hEc",58)
t(C,"h1K",0,null,["$1","$0"],["hmJ",function(){return C.hmJ(null)}],3,0)
t(C,"bCz",0,null,["$1","$0"],["hmI",function(){return C.hmI(null)}],3,0)
v(C.MQ.prototype,"gEm","caj",1)
v(C.aCz.prototype,"gcp_","AI",0)
v(q=C.aCQ.prototype,"gcdq","Q_",0)
v(q,"gci9","a01",0)
v(q,"gc6I","c6J",1)
v(q=C.aD1.prototype,"gc6N","adI",0)
v(q,"gbyH","a7U",0)
v(q,"gcpe","a1_",0)
s(q,"gcaO","caP",35)
v(C.aF_.prototype,"gbz8","a7W",1)
v(q=C.aEZ.prototype,"gc6M","adH",0)
v(q,"gcco","aeK",0)
v(q=C.aD3.prototype,"gbYS","abz",0)
v(q,"gbYU","XT",0)
v(q,"gbYT","abA",0)
v(q=C.aD2.prototype,"gbBu","bBv",1)
v(q,"gbBw","bBx",1)
v(C.aD4.prototype,"gbHj","bHk",1)
v(C.aA2.prototype,"gc6P","c6Q",1)
v(q=C.aDr.prototype,"gaYU","c74",1)
r(q,"gaZR",0,1,null,["$3$bumpWalletRevision$cloudRequest","$1","$2$cloudRequest","$2$bumpWalletRevision"],["aen","axb","aZT","aZS"],52,0,0)
r(q,"gca1",0,4,null,["$4"],["ca2"],53,0,0)
v(q,"gcc7","a_b",0)
v(q,"gccY","aeR",0)
v(q,"gccU","aeP",0)
v(q,"gc0R","ack",0)
w(C.aAP.prototype,"gc_A","c_B",54)
w(q=C.aAR.prototype,"gcwO","cwP",55)
v(q,"gcvu","cvv",1)
v(q,"gcD9","cDa",1)
v(C.aDe.prototype,"gc7q","aZ_",1)
v(C.aE2.prototype,"gaZr","awZ",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.j8,[C.crs,C.crp,C.crq,C.crr,C.cro,C.f0S,C.f0Q,C.f0U,C.f0R,C.fjF,C.d9S,C.da2,C.daa,C.dab,C.dad,C.da5,C.da3,C.da4,C.da6,C.da7,C.d9Y,C.d9Z,C.d9X,C.da0,C.da1,C.d9V,C.d9U,C.daf,C.dai,C.dOh,C.dOg,C.dOi,C.dOf,C.dOe,C.d9M,C.d9P,C.d9Q,C.d9O,C.d9N,C.dbE,C.dbF,C.dbG,C.daU,C.daV,C.dbo,C.db9,C.dba,C.dbb,C.dbc,C.dbd,C.dam,C.daT,C.dbp,C.dby,C.dbm,C.dbl,C.daR,C.daS,C.dbu,C.dbv,C.dao,C.dap,C.db2,C.db3,C.db4,C.db1,C.dbe,C.dbf,C.dbg,C.dbh,C.dbi,C.dbj,C.dbs,C.db5,C.db6,C.db7,C.db8,C.dbw,C.dbx,C.daq,C.dar,C.das,C.dat,C.dbq,C.dbr,C.db0,C.dbk,C.daZ,C.dbz,C.dbA,C.dbB,C.daW,C.daF,C.daE,C.daD,C.daJ,C.daC,C.daA,C.dav,C.day,C.dau,C.daO,C.daP,C.daw,C.dfb,C.cBW,C.cBM,C.cBN,C.cC5,C.cC2,C.cC3,C.cC4,C.cBY,C.cBX,C.cBO,C.cBZ,C.cCo,C.cCk,C.cCj,C.cBU,C.cBV,C.cBR,C.cC1,C.cC9,C.cCa,C.cCb,C.cCc,C.cCd,C.cCe,C.cCf,C.cCA,C.cCt,C.cCq,C.cCv,C.cCs,C.cCp,C.cBP,C.cCm,C.dvJ,C.dvK,C.dvA,C.dvy,C.dvI,C.dvx,C.dvw,C.dvz,C.dvE,C.dvF,C.dvC,C.dvD,C.dvL,C.dvM,C.dvN,C.dvO,C.eVA,C.eVB,C.d4L,C.fxr,C.dC9,C.dC1,C.dC3,C.dC7,C.dC2,C.dC4,C.dC5,C.c5U,C.fEt,C.fEs,C.dvl,C.dvk,C.dvm,C.dvj,C.dVi,C.dVj,C.dVq,C.fMS,C.fMT,C.c_0,C.dOn,C.dOo,C.dOp,C.dOq,C.dOr,C.dOs,C.dOm,C.dOt,C.dOl,C.dOw,C.dOv,C.dOu,C.dVK,C.dVL,C.dVI,C.dVH,C.dVJ,C.dVF,C.dZj,C.dZk,C.dZ2,C.dZ4,C.dZg,C.dZh,C.dZb,C.dZ9,C.dZf,C.dZc,C.dZ6,C.dZ5,C.dZl,C.cL0,C.cKZ,C.cL_,C.cKY,C.cL3,C.cL4,C.eQu,C.eQz,C.eQw,C.eQy,C.eQx,C.eQq,C.eQp,C.eQs,C.eQr,C.dZG,C.dZL,C.dZH,C.dZI,C.dZK,C.dZQ,C.dZR,C.dZS,C.dZT,C.dZU,C.dZV,C.dZW,C.dZX,C.dZP,C.dZY,C.dZO,C.dZN,C.dZM,C.dZz,C.dZA,C.dZr,C.dZs,C.dZt,C.dZv,C.cEI,C.dg5,C.dg7,C.dg6,C.e_d,C.e_7,C.e_8,C.e_a,C.e_b,C.e_c,C.e_g,C.e_f,C.e_m,C.e_l,C.e_3,C.e_2,C.e_n,C.e_e,C.e_1,C.fND,C.ddv,C.ddt,C.ed6,C.edv,C.edw,C.edx,C.edy,C.edA,C.edB,C.edq,C.ed7,C.edu,C.edb,C.edc,C.edk,C.edh,C.edi,C.edj,C.edl,C.edm,C.edn,C.edp,C.edo,C.edd,C.ede,C.edK,C.edD,C.edL,C.edC,C.edM,C.edI,C.edJ,C.edE,C.eda,C.ed9,C.edg,C.edf,C.dhS,C.dhR,C.dhM,C.dic,C.did,C.dhZ,C.dhY,C.dhX,C.dib,C.dia,C.di6,C.di3,C.di4,C.di0,C.di5,C.di_,C.fGJ,C.fEF,C.e7m,C.e7p,C.e7o,C.e7s,C.e7n,C.frK,C.frL,C.frM,C.frN,C.frO,C.frP,C.fcW,C.fq3,C.fct,C.fcu,C.fnd,C.fpa,C.fm_,C.fdo,C.fmc,C.fcR,C.eFE])
u(A.hW,[C.crt,C.f0T,C.fBe,C.fB6,C.fjC,C.fjB,C.fjE,C.dak,C.dal,C.da9,C.da8,C.dac,C.d9W,C.da_,C.dae,C.dOk,C.d9R,C.dbH,C.dbI,C.dbJ,C.dbK,C.dbL,C.dbn,C.dbt,C.dan,C.dbD,C.dbC,C.daG,C.daH,C.daI,C.daK,C.daM,C.dfc,C.cCB,C.cC0,C.cC_,C.cCi,C.cCl,C.cCh,C.cBS,C.cC8,C.cC6,C.cCn,C.cC7,C.cCw,C.cCu,C.cCz,C.bYJ,C.bYI,C.bYL,C.bYK,C.dvH,C.dvG,C.dvB,C.dvP,C.dvQ,C.fnM,C.fp_,C.d4M,C.d4K,C.bZu,C.fxq,C.dCa,C.dC8,C.c5V,C.fpO,C.fEr,C.c7T,C.c7S,C.c8k,C.dVg,C.dVh,C.fzN,C.fzA,C.fzz,C.fm2,C.c8y,C.c8z,C.c8A,C.c8x,C.c8w,C.fjm,C.fMO,C.fMP,C.fMQ,C.fMR,C.fMN,C.dVn,C.dVo,C.dVm,C.fMU,C.dbM,C.ca8,C.fil,C.dOx,C.dVG,C.c9_,C.c8X,C.c8Z,C.c91,C.c1o,C.c1m,C.c1r,C.c98,C.c97,C.c96,C.c95,C.c9a,C.c9c,C.dZp,C.dZ3,C.dZ1,C.dZi,C.dZa,C.dZe,C.dZd,C.dZ8,C.dZn,C.dZm,C.cL1,C.cL2,C.eQv,C.eQo,C.eQt,C.c92,C.fBx,C.e__,C.dZJ,C.dZC,C.dZD,C.dZE,C.dZF,C.dZZ,C.c94,C.cEJ,C.cEK,C.fi5,C.e_4,C.e_6,C.e_9,C.e_h,C.e_i,C.e_j,C.e_0,C.fNE,C.ddp,C.dds,C.cb2,C.cbf,C.edN,C.edO,C.edP,C.edz,C.edr,C.eds,C.edt,C.edF,C.edH,C.dhT,C.dhU,C.dhP,C.dhK,C.die,C.di9,C.di8,C.di7,C.di1,C.fqM,C.fHY,C.fqL,C.ffE,C.fGK,C.fEE,C.fJ5,C.e7q,C.e7r,C.fpW,C.fpV,C.fH_,C.fH0,C.fAV,C.fGr,C.ccP,C.ccQ,C.ccO,C.ccR,C.ccN,C.ccT,C.ccU,C.ccM,C.frQ,C.fcr,C.fcs,C.fne,C.fp9,C.flZ,C.fdn,C.fmb,C.fwA,C.fwB])
t(C.bqN,A.iR)
u(A.ag,[C.F6,C.akL,C.aCy,C.akK,C.akM,C.alB,C.ahY,C.an9,C.ZO,C.ZP,C.YW,C.anE,C.an8,C.Nm,C.azK,C.aoC,C.apg,C.V2,C.Pf,C.a_B,C.a_A,C.V3,C.apz,C.aAC,C.apC,C.Zk,C.aq9,C.aAO,C.aAQ,C.a_7,C.arr])
u(A.ah,[C.aHw,C.aJX,C.aKU,C.aJW,C.aJY,C.bfZ,C.awU,C.aBO,C.bio,C.bip,C.az6,C.biv,C.aKt,C.aL2,C.aJZ,C.aCz,C.aCQ,C.aD1,C.ba7,C.aF_,C.aEZ,C.aD3,C.aD2,C.bgc,C.aLa,C.aK3,C.bwB,C.aKj,C.aAR,C.aDe,C.aLR])
u(A.kj,[C.f0V,C.fjD,C.d9T,C.daj,C.dah,C.dag,C.dOj,C.db_,C.daY,C.daX,C.daB,C.daL,C.daz,C.daN,C.dax,C.daQ,C.cCg,C.cBT,C.cCr,C.cCy,C.cCx,C.cBQ,C.d4J,C.dC6,C.fpP,C.fpQ,C.dVk,C.fB9,C.fMM,C.dVp,C.dVs,C.dVr,C.dbN,C.ca9,C.c90,C.c8Y,C.c1p,C.c1n,C.c9b,C.dZq,C.dZ7,C.dZo,C.eQB,C.eQA,C.dZB,C.dZu,C.dZw,C.dZy,C.dZx,C.e_5,C.e_k,C.ddq,C.ddu,C.ddr,C.edG,C.ed8,C.dhV,C.dhW,C.dhN,C.dhO,C.dhQ,C.dhL,C.di2,C.fxx,C.ccS,C.ccL,C.fcX,C.fq5,C.fq4])
t(C.av7,C.F6)
u(A.aD,[C.qI,C.ado,C.MQ,C.It,C.rk,C.rl,C.lA,C.ip,C.i6,C.b8h,C.d1H,C.dg4,C.rr,C.V4,C.Nz,C.pP,C.aZA,C.p3,C.aqv])
t(C.azI,C.aJX)
t(C.biR,C.aKU)
t(C.azH,C.aJW)
t(C.azJ,C.aJY)
u(A.ma,[C.VO,C.aAD,C.aqm,C.Iy,C.Eu])
u(A.au,[C.a0b,C.bri,C.aeb,C.PO,C.a6g,C.Ne,C.apa,C.ad_,C.acZ,C.b_q,C.aAB,C.abw,C.aZX,C.abo,C.aAP])
t(C.bim,C.aKt)
t(C.bj2,C.aL2)
t(C.beH,C.aJZ)
t(C.aD4,C.aLa)
t(C.aA2,C.aK3)
t(C.aDr,C.bwB)
t(C.bgV,C.aKj)
u(A.mM,[C.baE,C.baD,C.baC,C.ba2,C.buF,C.bpD])
t(C.aE2,C.aLR)
w(C.aJW,C.MQ)
w(C.aJX,C.MQ)
w(C.aJY,C.MQ)
w(C.aKU,C.MQ)
w(C.aKt,A.eS)
w(C.aL2,A.ca)
w(C.aJZ,A.ca)
w(C.aLa,A.ca)
w(C.aK3,A.eS)
w(C.aKj,A.eS)
v(C.bwB,A.ez)
w(C.aLR,A.ca)})()
A.jY(b.typeUniverse,JSON.parse('{"bqN":{"iR":[]},"F6":{"ag":[],"r":[]},"aHw":{"ah":["F6<1,2>"]},"av7":{"F6":["1","hH<1>"],"ag":[],"r":[],"F6.T":"1","F6.S":"hH<1>"},"akL":{"ag":[],"r":[]},"aCy":{"ag":[],"r":[]},"akK":{"ag":[],"r":[]},"akM":{"ag":[],"r":[]},"alB":{"ag":[],"r":[]},"ahY":{"ag":[],"r":[]},"azI":{"ah":["akL"]},"biR":{"ah":["aCy"]},"azH":{"ah":["akK"]},"azJ":{"ah":["akM"]},"bfZ":{"ah":["alB"]},"awU":{"ah":["ahY"]},"an9":{"ag":[],"r":[]},"ZO":{"ag":[],"r":[]},"ZP":{"ag":[],"r":[]},"aeb":{"au":[],"r":[]},"YW":{"ag":[],"r":[]},"aBO":{"ah":["an9"]},"a0b":{"au":[],"r":[]},"bri":{"au":[],"r":[]},"bio":{"ah":["ZO"]},"bip":{"ah":["ZP"]},"PO":{"au":[],"r":[]},"az6":{"ah":["YW"]},"anE":{"ag":[],"r":[]},"biv":{"ah":["anE"]},"a6g":{"au":[],"r":[]},"an8":{"ag":[],"r":[]},"bim":{"ah":["an8"]},"Ne":{"au":[],"r":[]},"apa":{"au":[],"r":[]},"Nm":{"ag":[],"r":[]},"bj2":{"ah":["Nm"]},"ad_":{"au":[],"r":[]},"acZ":{"au":[],"r":[]},"azK":{"ag":[],"r":[]},"beH":{"ah":["azK"]},"b_q":{"au":[],"r":[]},"aoC":{"ag":[],"r":[]},"aCz":{"ah":["aoC"]},"apg":{"ag":[],"r":[]},"aCQ":{"ah":["apg"]},"V2":{"ag":[],"r":[]},"Pf":{"ag":[],"r":[]},"a_B":{"ag":[],"r":[]},"a_A":{"ag":[],"r":[]},"aD1":{"ah":["V2"]},"ba7":{"ah":["Pf"]},"aF_":{"ah":["a_B"]},"aEZ":{"ah":["a_A"]},"V3":{"ag":[],"r":[]},"aD3":{"ah":["V3"]},"apz":{"ag":[],"r":[]},"abw":{"au":[],"r":[]},"abo":{"au":[],"r":[]},"aAC":{"ag":[],"r":[]},"aD2":{"ah":["apz"]},"aAB":{"au":[],"r":[]},"aZX":{"au":[],"r":[]},"bgc":{"ah":["aAC"]},"apC":{"ag":[],"r":[]},"aD4":{"ah":["apC"]},"Zk":{"ag":[],"r":[]},"aA2":{"ah":["Zk"]},"aq9":{"ag":[],"r":[]},"aAO":{"ag":[],"r":[]},"aAQ":{"ag":[],"r":[]},"aDr":{"ah":["aq9"],"ez":[]},"aAP":{"au":[],"r":[]},"bgV":{"ah":["aAO"]},"baE":{"aB":[]},"baD":{"aB":[]},"baC":{"aB":[]},"aAR":{"ah":["aAQ"]},"ba2":{"aB":[]},"buF":{"aB":[]},"a_7":{"ag":[],"r":[]},"aDe":{"ah":["a_7"]},"bpD":{"aB":[]},"arr":{"ag":[],"r":[]},"aE2":{"ah":["arr"]}}'))
A.Ke(b.typeUniverse,JSON.parse('{"MQ":1}'))
var y={g:"Connection error. Please check your internet and try again.",m:"That deposit QR is invalid or already used.",B:"This backup is too old. You used or changed your local wallet after it was saved, so this file cannot bring money back. Download a new backup only if you have not spent anything since.",j:"This deposit is for another NGMY account.",u:"This deposit is not assigned to an account. Admin must set the user email and verification code.",y:"This deposit is not available right now. Please try again later."}
var x=(function rtii(){var w=A.ax
return{dw:w("lX<v?>"),gS:w("o3"),o:w("d4"),g5:w("wY"),M:w("em<n>"),k:w("S"),gv:w("l9<ai<ja>>"),gh:w("l9<n>"),gH:w("l9<G>"),r:w("aA<~>"),dk:w("a0"),fw:w("O<o3>"),E:w("O<d4>"),V:w("O<ac>"),O:w("O<v>"),A:w("O<a0>"),R:w("O<ne>"),B:w("O<ai<G>>"),m:w("O<a5<n,n>>"),_:w("O<a5<n,@>>"),b:w("O<rk>"),x:w("O<rl>"),gi:w("O<ja>"),a:w("O<lA>"),Y:w("O<i6>"),v:w("O<ip>"),dA:w("O<It>"),F:w("O<rr>"),Z:w("O<kp>"),g:w("O<hr>"),gK:w("O<+at,details,id(S,n,n)>"),C:w("O<cR>"),s:w("O<n>"),G:w("O<iR>"),eO:w("O<er>"),d9:w("O<eW>"),p:w("O<r>"),n:w("O<L>"),t:w("O<G>"),U:w("O<aB?>"),d4:w("O<n?>"),ck:w("ai<rk>"),e:w("ai<rl>"),ac:w("ai<ja>"),dZ:w("ai<lA>"),I:w("ai<i6>"),j:w("ai<@>"),L:w("ai<G>"),eq:w("a5<n,n>"),P:w("a5<n,@>"),f:w("a5<@,@>"),cl:w("cQ<n,D>"),aS:w("M<a0,tc>"),dc:w("M<Iy,bB>"),dv:w("M<n,n>"),bL:w("M<L,bB>"),a3:w("M<G,bB>"),gN:w("M<G,pE>"),w:w("iB"),b1:w("rk"),Q:w("rl"),bP:w("lA"),i:w("i6"),u:w("ip"),gp:w("V4"),J:w("Nz"),D:w("pP"),an:w("kp"),c:w("cr"),K:w("aD"),d:w("jo<n>"),di:w("+outcome,snapshot(VO,a5E?)"),ee:w("+after,before(L,L)"),et:w("+categories,error,message,replaceId(ai<i6>,n?,n?,n?)"),cz:w("EU"),bJ:w("dz<n>"),N:w("n"),e7:w("bq<L>"),W:w("cx<n>"),am:w("jJ<G>"),cc:w("a_<n>"),aM:w("e9<d4>"),bG:w("e9<L>"),l:w("r"),gm:w("qI"),ec:w("ado"),q:w("n0"),y:w("R"),gR:w("L"),z:w("@"),S:w("G"),eG:w("d4?"),cJ:w("S?"),gw:w("ai<a5<n,@>>?"),bM:w("ai<@>?"),h:w("a5<n,@>?"),X:w("aD?"),gE:w("+code,qrPayload(n,n)?"),bY:w("+isLive,ownerEmail,snapshotJson(R,n,n)?"),T:w("n?"),cD:w("L?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aXN=new A.bp(B.bG,B.ir,B.bG,B.ir)
D.eK=new A.v(1,0.1803921568627451,0.9647058823529412,0.6392156862745098,B.t)
D.aYh=new A.ay(D.eK,1,B.q,-1)
D.aYj=new A.ay(B.ad,2,B.q,-1)
D.aYm=new A.ay(B.aV,2,B.q,-1)
D.aYo=new A.ay(B.cr,0.8,B.q,-1)
D.aYE=new A.ay(B.aM,2,B.q,-1)
D.aYL=new A.ay(B.fb,1.6,B.q,-1)
D.aZA=new A.aY(0,330,0,1/0)
D.aZG=new A.aY(0,176,0,1/0)
D.aZH=new A.aY(0,1/0,0,260)
D.aZZ=new A.aY(90,1/0,0,1/0)
D.b1O=new A.ac(0,B.G,B.dr,B.J,4)
D.cT_=w([D.b1O],x.V)
D.b_c=new A.o(B.c,null,null,null,D.cT_,null,B.a6)
D.cN6=w([D.eK,B.aZ],x.O)
D.bYo=new A.a8(B.a3,B.a8,B.x,D.cN6,null,null)
D.b_q=new A.o(null,null,null,null,null,D.bYo,B.a6)
D.b_v=new A.o(B.b2,null,null,null,null,null,B.a6)
D.bbT=new A.v(1,0.08235294117647059,0.0392156862745098,0.16862745098039217,B.t)
D.d75=w([P.acG,D.bbT],x.O)
D.bXs=new A.a8(B.b_,B.b4,B.x,D.d75,null,null)
D.b_M=new A.o(null,null,null,B.mc,null,D.bXs,B.n)
D.biC=new A.v(1,0.11764705882352941,0.06274509803921569,0.21176470588235294,B.t)
D.dil=w([D.biC,M.aeN],x.O)
D.bWG=new A.a8(B.b_,B.b4,B.x,D.dil,null,null)
D.b0b=new A.o(null,null,null,B.t3,null,D.bWG,B.n)
D.d39=w([B.aE,B.bC],x.O)
D.bXa=new A.a8(B.a3,B.a8,B.x,D.d39,null,null)
D.b0i=new A.o(null,null,null,null,null,D.bXa,B.a6)
D.f4p=new A.H(!0,null,null,null,null,null,52,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnN=new A.y("\ud83c\udf89",null,D.f4p,null,null,null,null,null,null,null,null,null)
D.b5H=new A.cp(B.A,null,null,D.fnN,null)
D.b77=new A.v(1,0.10980392156862745,0.07058823529411765,0.21176470588235294,B.t)
D.abY=new A.v(1,0.10196078431372549,0.0784313725490196,0.0196078431372549,B.t)
D.b9z=new A.v(1,0.8431372549019608,0.8,0.7843137254901961,B.t)
D.b9D=new A.v(1,0.47843137254901963,0.35294117647058826,0.07058823529411765,B.t)
D.oB=new A.v(1,0.9647058823529412,0.8862745098039215,0.47843137254901963,B.t)
D.tf=new A.v(1,0.08235294117647059,0.10980392156862745,0.1568627450980392,B.t)
D.ad2=new A.v(1,0.11764705882352941,0.06274509803921569,0.20784313725490197,B.t)
D.bby=new A.v(1,0.23921568627450981,0.23921568627450981,0.3607843137254902,B.t)
D.Wq=new A.v(1,0.9686274509803922,0.5764705882352941,0.10196078431372549,B.t)
D.xa=new A.v(1,0.2901960784313726,0.22745098039215686,0.06274509803921569,B.t)
D.bcV=new A.v(1,0.10196078431372549,0.3607843137254902,0.25098039215686274,B.t)
D.WQ=new A.v(1,0.36470588235294116,0.25098039215686274,0.21568627450980393,B.t)
D.aev=new A.v(1,0.06274509803921569,0.06274509803921569,0.06274509803921569,B.t)
D.bgI=new A.v(1,0.9529411764705882,0.9411764705882353,1,B.t)
D.bgP=new A.v(1,0.16470588235294117,0.22745098039215686,0.43137254901960786,B.t)
D.aeQ=new A.v(1,0.043137254901960784,0.023529411764705882,0.09411764705882353,B.t)
D.af4=new A.v(1,0,0.8392156862745098,0.30980392156862746,B.t)
D.bia=new A.v(1,0.13333333333333333,0.0784313725490196,0.25098039215686274,B.t)
D.bih=new A.v(1,0.058823529411764705,0.0784313725490196,0.10588235294117647,B.t)
D.bje=new A.v(1,0.07058823529411765,0.043137254901960784,0.1411764705882353,B.t)
D.Xs=new A.v(1,0.4196078431372549,0.2980392156862745,0.6039215686274509,B.t)
D.bke=new A.v(1,0.3607843137254902,0.3607843137254902,0.47843137254901963,B.t)
D.bkJ=new A.v(1,0.9568627450980393,0.5607843137254902,0.6941176470588235,B.t)
D.XA=new A.v(1,0.16862745098039217,0.0784313725490196,0.32941176470588235,B.t)
D.bly=new A.v(1,0.5411764705882353,0.41568627450980394,0.07058823529411765,B.t)
D.aga=new A.a3B(2,"active")
D.bpL=new A.ba(42e5)
D.bpO=new A.ba(53e4)
D.bpQ=new A.ba(58e4)
D.bpU=new A.ba(82e4)
D.bqH=new A.Q(0,30,0,30)
D.bqP=new A.Q(0,4,0,8)
D.bqS=new A.Q(0,8,12,8)
D.brt=new A.Q(12,0,12,88)
D.brA=new A.Q(12,11,12,10)
D.brX=new A.Q(13,10,12,10)
D.bs4=new A.Q(14,10,14,2)
D.bsg=new A.Q(14,14,10,14)
D.bsL=new A.Q(16,12,16,96)
D.bsQ=new A.Q(16,14,16,8)
D.bsU=new A.Q(16,16,16,96)
D.bsV=new A.Q(16,18,16,16)
D.bsZ=new A.Q(16,4,16,10)
D.btU=new A.Q(18,6,18,40)
D.btW=new A.Q(18,8,18,130)
D.bu7=new A.Q(20,10,20,20)
D.buk=new A.Q(20,18,20,18)
D.buo=new A.Q(20,20,20,22)
D.buL=new A.Q(22,22,22,16)
D.bvq=new A.Q(2,0,2,10)
D.bw9=new A.Q(4,8,12,4)
D.bwm=new A.Q(6,1,6,1)
D.bwo=new A.Q(6,4,0,0)
D.bwr=new A.Q(6,6,12,4)
D.bwN=new A.Q(8,4,12,8)
D.frf=new A.y("Activity",null,B.fQ,null,null,null,null,null,null,null,null,null)
D.byE=new A.bB(1,B.bg,D.frf,null)
D.fzy=new A.y("Game Receipts",null,A3.qs,null,null,null,null,null,null,null,null,null)
D.fiU=new A.y("Your last 59 games \xb7 kept for 7 days",null,Q.a7P,null,null,null,null,null,null,null,null,null)
D.cJx=w([D.fzy,D.fiU],x.p)
D.bmB=new A.fl(B.ag,B.e,B.j,B.F,null,B.p,null,0,D.cJx,null)
D.byH=new A.bB(1,B.bg,D.bmB,null)
D.bCo=new A.a0(58607,"MaterialIcons",!1)
D.a_t=new A.a0(62178,"MaterialIcons",!1)
D.bDe=new A.a0(62410,"MaterialIcons",!1)
D.bEp=new A.a0(63258,"MaterialIcons",!1)
D.bEv=new A.a0(63304,"MaterialIcons",!1)
D.bEw=new A.a0(63306,"MaterialIcons",!1)
D.bED=new A.a0(63330,"MaterialIcons",!1)
D.amu=new A.a0(984777,"MaterialIcons",!1)
D.bH8=new A.ae(B.FV,13,B.ad,null,null,null)
D.bHg=new A.ae(B.jI,13,B.pL,null,null,null)
D.amE=new A.ae(B.lq,null,B.c,null,null,null)
D.bIO=new A.ae(B.BG,34,B.aF,null,null,null)
D.bJl=new A.ae(B.FZ,19,B.c,null,null,null)
D.bDx=new A.a0(62804,"MaterialIcons",!1)
D.bJw=new A.ae(D.bDx,24,B.aM,null,null,null)
D.bJY=new A.ae(B.Bs,28,B.bk,null,null,null)
D.bKs=new A.ae(B.am8,42,B.c,null,null,null)
D.bKB=new A.ae(B.a0i,30,B.c,null,null,null)
D.bLc=new A.ae(B.fN,null,B.c,null,null,null)
D.bLx=new A.ae(B.jI,16,B.c,null,null,null)
D.bM8=new A.ae(B.rh,13,B.c,null,null,null)
D.bMh=new A.ae(B.lq,18,B.c,null,null,null)
D.bMO=new A.ae(B.vA,null,B.dJ,null,null,null)
D.bNs=new A.ae(B.oS,28,B.c,null,null,null)
D.bNI=new A.ae(B.nm,22,null,null,null,null)
D.bO3=new A.ae(B.rd,null,null,null,null,null)
D.bOf=new A.ae(B.iI,28,B.c,null,null,null)
D.bOh=new A.ae(B.cD,null,B.aS,null,null,null)
D.bOo=new A.ae(B.a_a,14,B.c,null,null,null)
D.bOX=new A.ae(B.Nz,36,B.aJ,null,null,null)
D.bP3=new A.ae(B.oT,16,B.c,null,null,null)
D.bPi=new A.ae(B.eg,null,null,null,null,null)
D.bce=new A.v(1,0.23137254901960785,0.16470588235294117,0,B.t)
D.bPR=new A.ae(B.dX,9,D.bce,null,null,null)
D.bFt=new A.a0(983146,"MaterialIcons",!1)
D.bQ8=new A.ae(D.bFt,null,B.aM,null,null,null)
D.bQE=new A.ae(B.vD,28,D.eK,null,null,null)
D.bQJ=new A.ae(B.tS,null,B.fb,null,null,null)
D.bQO=new A.ae(B.i2,20,D.eK,null,null,null)
D.bFP=new A.a0(983377,"MaterialIcons",!1)
D.bQY=new A.ae(D.bFP,64,B.c,null,null,null)
D.bRt=new A.ae(B.hb,24,B.c,null,null,null)
D.bSo=new A.e2(null,null,null,"Title",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bSz=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"$ ",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bSO=new A.e2(null,null,null,"URL",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bSP=new A.e2(null,null,null,"Label",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bal=new A.v(1,0.058823529411764705,0.16470588235294117,0.13333333333333333,B.t)
D.bde=new A.v(1,0.027450980392156862,0.07450980392156863,0.058823529411764705,B.t)
D.bcW=new A.v(1,0.043137254901960784,0.12156862745098039,0.09803921568627451,B.t)
D.d7n=w([D.bal,D.bde,D.bcW],x.O)
D.bUx=new A.a8(B.ax,B.aC,B.x,D.d7n,null,null)
D.dcj=w([B.bi,B.aZ],x.O)
D.bUR=new A.a8(B.ax,B.aC,B.x,D.dcj,null,null)
D.bbM=new A.v(1,0.10588235294117647,0.12156862745098039,0.16470588235294117,B.t)
D.bhk=new A.v(1,0.07058823529411765,0.08235294117647059,0.10980392156862745,B.t)
D.cTu=w([D.bbM,D.bhk],x.O)
D.bUY=new A.a8(B.ax,B.aC,B.x,D.cTu,null,null)
D.d8W=w([B.bo,B.M,B.dZ],x.O)
D.bV4=new A.a8(B.ax,B.aC,B.x,D.d8W,null,null)
D.bV7=new A.a8(B.a3,B.a8,B.x,F.atS,null,null)
D.cSS=w([B.fb,B.ce],x.O)
D.aom=new A.a8(B.a3,B.a8,B.x,D.cSS,null,null)
D.cTe=w([B.fb,B.bC],x.O)
D.aon=new A.a8(B.a3,B.a8,B.x,D.cTe,null,null)
D.axO=w([D.oB,B.aw,B.c_],x.O)
D.bVo=new A.a8(B.ax,B.aC,B.x,D.axO,null,null)
D.beJ=new A.v(1,0.10980392156862745,0.0784313725490196,0.027450980392156862,B.t)
D.cQW=w([D.beJ,E.ac9,B.M],x.O)
D.bVt=new A.a8(B.ax,B.aC,B.x,D.cQW,null,null)
D.aWC=new A.dc(-0.8,-1)
D.aWE=new A.dc(1.2,1)
D.cQ6=w([B.c,B.ev,B.fU,B.c,B.f8,B.aP,B.mX],x.O)
D.d8i=w([0,0.15,0.35,0.48,0.62,0.82,1],x.n)
D.bVv=new A.a8(D.aWC,D.aWE,B.x,D.cQ6,D.d8i,null)
D.bhd=new A.v(1,0,0.7607843137254902,0.26666666666666666,B.t)
D.beY=new A.v(1,0,0.6392156862745098,0.22745098039215686,B.t)
D.d7m=w([D.bhd,D.beY],x.O)
D.bVY=new A.a8(B.a3,B.a8,B.x,D.d7m,null,null)
D.bW2=new A.a8(B.ax,B.aC,B.x,B.Q6,null,null)
D.d2f=w([E.Xv,B.xc],x.O)
D.bW4=new A.a8(B.a3,B.a8,B.x,D.d2f,null,null)
D.d6d=w([B.h7,B.fx],x.O)
D.aos=new A.a8(B.a3,B.a8,B.x,D.d6d,null,null)
D.dbT=w([B.b2,B.bV],x.O)
D.aot=new A.a8(B.a3,B.a8,B.x,D.dbT,null,null)
D.cAX=w([B.di,B.fc],x.O)
D.bWI=new A.a8(B.ax,B.aC,B.x,D.cAX,null,null)
D.cP7=w([B.c,B.b8],x.O)
D.bWS=new A.a8(B.a3,B.a8,B.x,D.cP7,null,null)
D.ae0=new A.v(1,0.23921568627450981,0.1803921568627451,0.03137254901960784,B.t)
D.b9k=new A.v(1,0.3607843137254902,0.2901960784313726,0.054901960784313725,B.t)
D.d_0=w([D.ae0,B.jg,B.qO,B.aw,D.b9k],x.O)
D.bZi=w([0,0.28,0.55,0.82,1],x.n)
D.bWT=new A.a8(B.ax,B.aC,B.x,D.d_0,D.bZi,null)
D.bX2=new A.a8(B.a3,B.a8,B.x,B.QK,null,null)
D.bX3=new A.a8(B.a3,B.a8,B.x,F.awg,null,null)
D.bX6=new A.a8(B.a3,B.a8,B.x,D.axO,null,null)
D.cUz=w([B.bC,B.fb],x.O)
D.bXg=new A.a8(B.a3,B.a8,B.x,D.cUz,null,null)
D.dfS=w([B.aE,B.bC,B.b8],x.O)
D.bXi=new A.a8(B.a3,B.a8,B.x,D.dfS,null,null)
D.d2o=w([B.aF,B.bL,B.fl],x.O)
D.bXm=new A.a8(B.a3,B.a8,B.x,D.d2o,null,null)
D.dfA=w([B.bo,B.aK,B.bJ,B.aL,B.aQ,B.cr,B.ak],x.O)
D.cYf=w([0,0.18,0.38,0.52,0.62,0.78,1],x.n)
D.bXr=new A.a8(B.ax,B.aC,B.x,D.dfA,D.cYf,null)
D.bXB=new A.a8(B.ax,B.aC,B.x,B.a1D,null,null)
D.d2T=w([D.Wq,B.dU],x.O)
D.bXL=new A.a8(B.a3,B.a8,B.x,D.d2T,null,null)
D.dai=w([D.aeQ,D.ad2,B.M],x.O)
D.bXU=new A.a8(B.ax,B.aC,B.x,D.dai,null,null)
D.bjG=new A.v(1,0.043137254901960784,0.23137254901960785,0.1803921568627451,B.t)
D.cPE=w([B.f_,B.h7,D.bjG],x.O)
D.bYq=new A.a8(B.ax,B.aC,B.x,D.cPE,null,null)
D.cV6=w([D.oB,B.aw],x.O)
D.bYr=new A.a8(B.ax,B.aC,B.x,D.cV6,null,null)
D.bYO=w([G.BK,B.oS,B.jI,B.hA,B.kw,B.l1,B.l0,B.rl,B.mz,B.eT,B.lU,B.ya,B.G7],x.A)
D.c1a=w([10,50,100,200],x.t)
D.caU=w([1,3,5,7],x.t)
D.cfS=w([25,50,100,250],x.t)
D.bFo=new A.a0(983104,"MaterialIcons",!1)
D.coq=w([B.oS,B.lV,B.nm,B.ln,B.ha,B.vJ,D.bFo,B.a0e],x.A)
D.ctM=w(["A","2","3","4","5","6","7","8","9","10","J","Q","K"],x.s)
D.cFQ=w([0,0.22,0.5,0.78,1],x.n)
D.cJF=w([8,13,19],x.n)
D.a1Y=w(["Allow access to my phone","What is on my calendar today?","Who called me at 2 AM today?","Call Mom"],x.s)
D.fqh=new A.y("Manage questions",null,null,null,null,null,null,null,null,null,null,null)
D.eez=new A.jo("questions",48,D.fqh,null,x.d)
D.fg8=new A.y("Edit category",null,null,null,null,null,null,null,null,null,null,null)
D.eeE=new A.jo("edit",48,D.fg8,null,x.d)
D.fy5=new A.y("Delete category",null,null,null,null,null,null,null,null,null,null,null)
D.eeK=new A.jo("delete",48,D.fy5,null,x.d)
D.cJO=w([D.eez,D.eeE,D.eeK],A.ax("O<p7<n>>"))
D.cTo=w(["ACCOMPLISHMENT","ADMINISTRATION","AUTHENTICATION","BIBLIOGRAPHY","BIODEGRADABLE","CANTANKEROUSLY","CHARACTERISTIC","CIRCUMSTANTIAL","COMMUNICATION","COMPREHENSION","CONGRATULATIONS","CONSTITUTIONAL","CONTRADICTORY","COUNTERBALANCE","DEMONSTRATION","DISAPPOINTMENT","DISCRIMINATION","ELECTRIFICATION","ENCYCLOPEDIA","ENTERTAINMENT","ENVIRONMENTAL","EXPERIMENTATION","EXTRAORDINARY","GENERATIONALLY","HALLUCINATION","HOSPITALIZATION","HYPOTHETICAL","IDENTIFICATION","ILLUSTRATION","IMPLEMENTATION","INDIVIDUALISTIC","INDUSTRIALIZATION","INFORMATIONAL","INSUBORDINATION","INTERNATIONAL","INTERPRETATION","JURISPRUDENCE","KNOWLEDGEABLE","LIGHTHEARTEDLY","MAGNIFICENTLY","MANUFACTURING","MATERIALISTIC","MISUNDERSTANDING","MULTIDIMENSIONAL","MYSTERIOUSNESS","NATIONALISTIC","NEVERTHELESS","NOTWITHSTANDING","ORGANIZATIONAL","OVERWHELMINGLY","PARLIAMENTARY","PERFECTIONISTIC","PHARMACEUTICAL","PHENOMENOLOGICAL","PHILANTHROPIC","PHOTOGRAPHICAL","PRECIPITATION","PREDOMINANTLY","PRESERVATIONIST","PROCRASTINATION","PROFESSIONALISM","PSYCHOLOGICAL","QUALIFICATION","QUESTIONABLY","RECONSTRUCTION","REFRIGERATION","REPRESENTATIVE","REVOLUTIONARY","SCHOLASTICALLY","SIGNIFICANCE","SOPHISTICATED","SPECIFICATION","SPIRITUALISTIC","STANDARDIZATION","SUBSTANTIALLY","SUPERINTENDENT","SURPRISINGLY","SUSTAINABILITY","TECHNOLOGICAL","TEMPERAMENTAL","TERMINOLOGICAL","THANKSGIVING","THOUGHTFULLY","TRADITIONALIST","TRANSFORMATION","TRANSPORTATION","UNCONTROLLABLE","UNDERSTANDING","UNPRECEDENTED","UNSUBSTANTIATED","VULNERABILITY","WESTERNIZATION","WHOLESALENESS","WILLINGNESSES","WONDERSTRUCKLY","XENODIAGNOSIS","YOUTHFULNESSES","ZEALOUSNESSES","ABRACADABRAISM","ABSENTMINDEDLY","ACCELEROMETER","ACKNOWLEDGMENT","ADVENTURESOMELY","AFFECTIONATELY","AGGRANDIZEMENT"],x.s)
D.cTB=w([B.bO,B.f0],x.O)
D.a4L=new C.lA("text","",null,null)
D.cUL=w([D.a4L],x.a)
D.cWa=w([4280468830,4287323382,4294538006,4282090230,4279548070,4289170426,4293675161,4293548044,4293870660,4281908728,4290807036,4279080072],x.t)
D.eym=new A.adN(B.lT,"Home")
D.epp=new A.adN(B.q5,"Growth")
D.etR=new A.adN(B.jI,"Wallet")
D.cYt=w([D.eym,D.epp,D.etR],A.ax("O<+icon,label(a0,n)>"))
D.cYT=w([4,0,2,6,8,1,3,5,7],x.t)
D.cZ0=w([B.c,B.bK,B.cr],x.O)
D.dFh=new C.rr("gospel","Gospel","\u2728","English gospel \u2014 uplift, faith, big chorus.")
D.dFk=new C.rr("rap","Rap / Hip-Hop","\ud83c\udfa7","English rap \u2014 flow, internal rhymes, bars.")
D.dFi=new C.rr("rnb","R&B / Soul","\ud83c\udfb9","Smooth R&B \u2014 melody, heartbreak or love.")
D.dFc=new C.rr("church","Church / Worship","\ud83d\ude4f","English worship \u2014 hymn-like or modern praise.")
D.dFd=new C.rr("street","Street / Drill","\u26a1","Street English \u2014 gritty, punchy, anthem energy.")
D.dFl=new C.rr("afro_eng","Afro-Fusion","\ud83c\udf0d","English with African bounce \u2014 global club ready.")
D.a2r=w([D.dFh,D.dFk,D.dFi,D.dFc,D.dFd,D.dFl],x.F)
D.a2w=w([B.ay,B.bi,B.d3,B.aF],x.O)
D.bco=new A.v(1,1,0.8980392156862745,0.4,B.t)
D.d2Z=w([B.W1,D.bco,B.qO,B.hZ,B.jg],x.O)
D.a2D=w(["NGMY morning brief","Who called me at 2 AM today?","Brief me on NGMY today, Sir","Add a CEO strategy session Friday at 10am to my calendar"],x.s)
D.Qe=w(["checkers_deluxe","tic_tac_go"],x.s)
D.bYS=w([0,1,2],x.t)
D.coE=w([3,4,5],x.t)
D.cBv=w([6,7,8],x.t)
D.bYU=w([0,3,6],x.t)
D.caZ=w([1,4,7],x.t)
D.cin=w([2,5,8],x.t)
D.bYY=w([0,4,8],x.t)
D.cik=w([2,4,6],x.t)
D.d5i=w([D.bYS,D.coE,D.cBv,D.bYU,D.caZ,D.cin,D.bYY,D.cik],x.B)
D.aFP=new C.Iy(0,"abab")
D.dFa=new C.Iy(1,"aaaBbb")
D.aFQ=new C.Iy(2,"aabb")
D.d6h=w([D.aFP,D.dFa,D.aFQ],A.ax("O<Iy>"))
D.d6x=w([],x.a)
D.ax3=w([],x.v)
D.da9=w(["7","BAR","CHERRY","BELL","GEM","STAR"],x.s)
D.QA=w([1,2,3,-1,-2],x.t)
D.di9=w([B.iW,B.aE],x.O)
D.fYl=new C.qI("dice","Dice Roll","Roll for cash & prizes!",B.mv,D.di9)
D.fYi=new C.qI("puzzle","8-Puzzle Solver","Solve puzzle, win up to $10",B.rf,B.avN)
D.dcF=w([B.cZ,B.bk],x.O)
D.fYg=new C.qI("typing","Sentence Typing","Type sentences \u2014 solo or invite a friend",B.a03,D.dcF)
D.dhD=w([B.dR,B.n0],x.O)
D.fYm=new C.qI("memory","Memory Match","Match pairs \u2014 solo or multiplayer",B.a0e,D.dhD)
D.caF=w([B.jX,B.pJ],x.O)
D.fYj=new C.qI("pattern","Pattern Memory","Remember the pattern \u2014 solo or multiplayer",F.a_P,D.caF)
D.da8=w([M.li,D.WQ],x.O)
D.fYh=new C.qI("checkers_deluxe","Checkers Deluxe","Wood board \u2014 play solo or invite a friend",B.Ga,D.da8)
D.fYk=new C.qI("tic_tac_go","Tic Tac Go","3 in a row \u2014 real-time multiplayer",B.cD,Ak.no)
D.dbS=w([D.fYl,D.fYi,D.fYg,D.fYm,D.fYj,D.fYh,D.fYk],A.ax("O<qI>"))
D.dde=w(["api key","gemini connection","google ai studio","supabase config","could not reach gemini","ngmy helper is not connected","ai proxy not deployed","save global settings"],x.s)
D.bgv=new A.v(1,0.10196078431372549,0.13725490196078433,0.18823529411764706,B.t)
D.bgn=new A.v(1,0.07058823529411765,0.08627450980392157,0.11764705882352941,B.t)
D.afz=new A.v(1,0.047058823529411764,0.06274509803921569,0.08627450980392157,B.t)
D.de0=w([D.bgv,D.bgn,D.afz],x.O)
D.bix=new A.v(1,0.08627450980392157,0.07058823529411765,0.0392156862745098,B.t)
D.de2=w([B.ac8,D.bix,D.afz],x.O)
D.deD=w(["Today Jeremiah was eating apple in church with his sister.","The skilled trader analyzed profit margins before placing the next order.","Maria completed every typing challenge without missing a single character.","Investors earn rewards when focus and accuracy stay high under pressure.","The warehouse team shipped forty packages before the afternoon deadline.","Learning difficult sentences builds speed and precision for real work.","David reviewed the contract twice to avoid costly mistakes in the report.","Strong players practice daily until challenging tasks feel manageable.","The conference speaker shared ideas that changed how teams collaborate.","Every correct keystroke moves you closer to the maximum payout today.","The morning crew opened the store before sunrise to prepare fresh inventory.","Careful readers notice small details that others often miss completely.","The coach reminded everyone that patience and practice create lasting success.","Bright students finished the assignment early and helped their classmates afterward.","The river flooded the road after three days of heavy spring rain.","Honest workers report problems quickly instead of hiding them from managers.","The bakery sold every loaf before noon on the busy Saturday morning.","Creative teams brainstorm solutions until they find one that truly works.","The pilot checked every instrument twice before the long international flight.","Friendly neighbors brought food when the family needed extra support at home.","The librarian sorted hundreds of books returned during the busy holiday week.","Smart shoppers compare prices carefully before they commit to any purchase.","The gardener planted tomatoes peppers and herbs in neat rows behind the house.","Dedicated nurses stayed late to make sure every patient felt comfortable tonight.","The musician tuned the guitar slowly before the crowded evening performance began.","Young athletes stretched properly to prevent injuries during the intense summer camp.","The mechanic replaced worn brakes and rotated tires before the long road trip.","Clear instructions help new employees learn their responsibilities much faster every day.","The photographer captured golden light as the sun set over the quiet harbor.","Busy parents packed lunches snacks and water bottles for the school field trip.","The architect drew detailed plans before construction crews broke ground on Monday.","Helpful volunteers cleaned the park and planted flowers along the walking path.","The scientist recorded precise measurements during every step of the long experiment.","Curious children asked thoughtful questions while touring the museum with their teacher.","The chef seasoned the soup carefully and tasted it before serving guests.","Reliable drivers checked mirrors signals and blind spots before changing lanes safely.","The teacher explained the lesson again until every student understood the concept.","Winter storms knocked down branches but the crew cleared the road by noon.","The editor corrected grammar spelling and punctuation before sending the article out.","Generous donors funded scholarships for students who needed financial help this year.","The hiker packed extra water food and a flashlight for the mountain trail.","Local farmers harvested corn soybeans and wheat before the first frost arrived.","The counselor listened patiently and offered practical advice during the difficult conversation.","Engineers tested the bridge design repeatedly to ensure it could handle heavy traffic.","The barber swept the floor and sanitized tools between every appointment that morning.","Attentive students took organized notes during the long lecture about world history.","The firefighter inspected hoses ladders and oxygen tanks before responding to calls.","Small businesses thrive when owners treat customers with respect and genuine care.","The tailor measured sleeves pants and jacket length before cutting the new fabric.","Evening joggers wore reflective gear and stayed on the well lit neighborhood path."],x.s)
D.ay8=w([D.oB,B.c,D.eK,B.bX,B.b3,B.aw],x.O)
D.dFf=new C.rr("bongo","Bongo Flava","\ud83c\udfa4","Tanzanian bongo flava \u2014 singeli bounce, Dar es Salaam street energy.")
D.dFe=new C.rr("afro","Afrobeat","\ud83e\udd41","East African afrobeat \u2014 groove, horns, danceable Swahili hooks.")
D.dFb=new C.rr("kanisa","Kanisa / Gospel","\u26ea","Swahili church praise \u2014 worship, hope, choir-ready lines.")
D.dFj=new C.rr("mitaani","Mitaani / Street","\ud83d\udd25","Street Swahili \u2014 raw bars, mitaani slang, hard punchlines.")
D.dFm=new C.rr("mapenzi","Mapenzi","\ud83d\udc9c","Swahili love ballad \u2014 romantic, melodic, emotional.")
D.dFg=new C.rr("taarab","Taarab Vibe","\ud83c\udf19","Coastal taarab flavor \u2014 poetic Swahili, classic romance.")
D.a3l=w([D.dFf,D.dFe,D.dFb,D.dFj,D.dFm,D.dFg],x.F)
D.dhR=w([B.ce,B.pJ],x.O)
D.e3i={checkers_deluxe:0,tic_tac_go:1}
D.aDM=new A.bl(D.e3i,["Checkers Deluxe","Tic Tac Go"],A.ax("bl<n,n>"))
D.e2l={monday:0,tuesday:1,wednesday:2,thursday:3,friday:4,saturday:5,sunday:6}
D.aDX=new A.bl(D.e2l,[1,2,3,4,5,6,7],A.ax("bl<n,G>"))
D.dyd=new C.a6g(null)
D.dBA=new C.lA("signature","NGMY Support Team",null,null)
D.dBB=new C.lA("divider","",null,null)
D.Rv=new C.V4(!1,!1,!1,!1)
D.Rx=new C.Nz(!1,!1,!1,!1)
D.dCE=new C.Nz(!0,!0,!1,!1)
D.CE=new C.aqm(0,"swahili")
D.aFO=new C.aqm(1,"english")
D.CF=new C.aqm(2,"mix")
D.d4K=w([B.fz,B.id,B.d5],x.O)
D.bEd=new A.a0(63118,"MaterialIcons",!1)
D.dGn=new C.p3(D.d4K,B.h5,B.aF,"BACKGAMMON","\ud83c\udfb2",D.bEd)
D.bGd=new A.a0(983637,"MaterialIcons",!1)
D.dGo=new C.p3(Ah.ayi,B.bi,B.eQ,"EURO WHEEL","\ud83c\udfa1",D.bGd)
D.ddz=w([B.M,B.aK,B.br],x.O)
D.dGp=new C.p3(D.ddz,B.aQ,B.ak,"ROYALE","\u265f\ufe0f",F.a_P)
D.cSV=w([B.di,B.bk,B.dM],x.O)
D.dGq=new C.p3(D.cSV,B.ay,B.d3,"CONNECT 4","\ud83d\udd34",B.a0r)
D.d8z=w([B.dx,B.fc,B.pJ],x.O)
D.dGr=new C.p3(D.d8z,B.v7,B.ce,"PUNTO BANCO","\ud83d\udc8e",B.lV)
D.cAZ=w([B.nO,B.ib,B.lK],x.O)
D.dGs=new C.p3(D.cAZ,B.j8,B.jY,"DOMINOES","\ud83c\udc53",B.ama)
D.ded=w([B.xk,B.tk,B.hi],x.O)
D.dGt=new C.p3(D.ded,B.AL,B.h3,"WAR","\u2694\ufe0f",N.a_M)
D.dGu=new C.p3(B.ayd,B.aM,B.ak,"PREMIUM","\ud83c\udfae",B.mv)
D.cUA=w([B.jb,B.aE,B.dR],x.O)
D.dGv=new C.p3(D.cUA,B.dQ,B.fb,"JACKPOT","\ud83c\udfb0",B.mv)
D.d7E=w([B.kp,B.lI,B.bC],x.O)
D.dGw=new C.p3(D.d7E,B.pw,B.bX,"LIVE BINGO","\ud83c\udfb1",B.y4)
D.cN4=w([B.id,B.dU,B.aF],x.O)
D.bDD=new A.a0(62865,"MaterialIcons",!1)
D.dGx=new C.p3(D.cN4,B.tp,B.aM,"BIG SPIN","\ud83c\udfa1",D.bDD)
D.dGy=new C.p3(B.a3j,B.aL,B.bi,"HOLD'EM","\u2660\ufe0f",B.jI)
D.deC=w([B.f_,B.fx,B.aZ],x.O)
D.bCJ=new A.a0(61234,"MaterialIcons",!1)
D.dGz=new C.p3(D.deC,B.lL,B.aV,"CRAPS","\ud83c\udfb2",D.bCJ)
D.cSd=w([B.f0,B.iS,B.bO],x.O)
D.dGA=new C.p3(D.cSd,B.bL,B.b8,"PLINKO","\ud83d\udc8e",Al.NA)
D.bFZ=new A.a0(983492,"MaterialIcons",!1)
D.dGB=new C.p3(B.a3j,B.eu,B.bi,"SNOOKER","\ud83c\udfb1",D.bFZ)
D.dce=w([B.f_,B.fx,B.aV],x.O)
D.dGC=new C.p3(D.dce,B.tl,B.bv,"PROFIT LAB","\ud83d\udcb0",B.i2)
D.dcy=w([B.dZ,B.eA,B.bi],x.O)
D.bEB=new A.a0(63324,"MaterialIcons",!1)
D.dGD=new C.p3(D.dcy,B.xj,B.b2,"KLONDIKE","\ud83c\udccf",D.bEB)
D.d5p=w([B.da,B.bo,B.M],x.O)
D.dGE=new C.p3(D.d5p,B.aM,B.aK,"VEGAS TABLE","\ud83c\udccf",A2.Gp)
D.qd=new C.Eu(0,"continueGame")
D.qe=new C.Eu(1,"youWin")
D.HR=new C.Eu(2,"youLose")
D.RG=new C.Eu(3,"draw")
D.aG2=new C.VO(0,"found")
D.dZr=new C.VO(1,"foundLive")
D.a50=new C.VO(2,"notFound")
D.aG3=new C.VO(3,"wrongAccount")
D.e5A=new A.u(4,12)
D.e8u=new A.D(B.xC,B.t7,null)
D.bvO=new A.Q(4,0,0,3)
D.f1P=new A.H(!0,B.aJ,null,null,null,null,10,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCx=new A.y("NGMY Helper",null,D.f1P,null,null,null,null,null,null,null,null,null)
D.e8K=new A.D(D.bvO,D.fCx,null)
D.bEt=new A.a0(63284,"MaterialIcons",!1)
D.bJL=new A.ae(D.bEt,18,B.oD,null,null,null)
D.f6l=new A.H(!0,B.oD,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk2=new A.y("Continue",null,D.f6l,null,null,null,null,null,null,null,null,null)
D.d7_=w([D.bJL,B.bp,D.fk2],x.p)
D.eNy=new A.cl(B.aO,B.e,B.P,B.m,null,B.p,null,0,D.d7_,null)
D.e8N=new A.D(B.ii,D.eNy,null)
D.e8Z=new A.D(B.bR,B.t7,null)
D.bg6=new A.v(1,0.043137254901960784,0.23137254901960785,0.21176470588235294,B.t)
D.d3z=w([B.h7,B.fx,B.cY,D.bg6],x.O)
D.bXu=new A.a8(B.ax,B.aC,B.x,D.d3z,B.C3,null)
D.b0l=new A.o(null,null,null,null,null,D.bXu,B.n)
D.bnM=new A.kO(D.b0l,B.be,null,null)
D.eeZ=new A.cL(0,0,0,0,null,null,D.bnM,null)
D.bLt=new A.ae(B.vz,11,B.c,null,null,null)
D.ef2=new A.cL(10,12,null,null,null,null,D.bLt,null)
D.cFH=w([B.hk,B.dZ,B.lh],x.O)
D.efD=new A.bT(B.JU,1.1,B.x,null,0,D.cFH,null,null)
D.bhy=new A.v(1,0.1411764705882353,0.18823529411764706,0.26666666666666666,B.t)
D.bc3=new A.v(1,0.0784313725490196,0.10196078431372549,0.1411764705882353,B.t)
D.bdN=new A.v(1,0.0392156862745098,0.050980392156862744,0.07058823529411765,B.t)
D.d1k=w([D.bhy,D.bc3,D.bdN],x.O)
D.efK=new A.bT(B.a9N,1.05,B.x,null,0,D.d1k,null,null)
D.eg8=new A.bT(B.A,0.5,B.x,null,0,Y.a2c,null,null)
D.eLB=new A.a9(-18,0,18,1)
D.eM7=new A.a9(-3,-5,3,5)
D.bKb=new A.ae(B.eg,16,D.eK,null,null,null)
D.aQW=new A.H(!0,D.eK,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAd=new A.y("Screenshot added \xb7 tap to change",null,D.aQW,null,null,null,null,null,null,null,null,null)
D.cQ9=w([D.bKb,B.bp,D.fAd],x.p)
D.eMX=new A.cl(B.aO,B.b9,B.j,B.m,null,B.p,null,0,D.cQ9,null)
D.bO_=new A.ae(B.k6,15,D.eK,null,null,null)
D.fy_=new A.y("Refresh",null,D.aQW,null,null,null,null,null,null,null,null,null)
D.cSn=w([D.bO_,B.db,D.fy_],x.p)
D.eMZ=new A.cl(B.aO,B.e,B.P,B.m,null,B.p,null,0,D.cSn,null)
D.e2M={GamePlayScreen:0,GameBetScreen:1,NgmyDiceGameHost:2}
D.eOP=new A.em(D.e2M,3,x.M)
D.e2w={bubble_pop:0,fruit_slash:1,sky_stack:2,sky_hopper:3,brick_breaker:4,odd_one:5,flag_frenzy:6,coin_catcher:7,number_rush:8,air_hockey:9,paddle_duel:10,beat_tiles:11,perfect_stop:12,hoop_shot:13,color_flood:14,true_false:15,clock_reader:16,quick_count:17,shell_game:18,ball_sort:19,burger_builder:20,deep_fishing:21,moon_lander:22,jelly_jump:23,mini_golf:24,gold_miner:25,cash_counter:26,slot_stopper:27,change_maker:28,find_it:29,knife_throw:30,stick_bridge:31,zigzag_run:32,emoji_math:33,connect_four:34,pop_lock:35}
D.eOW=new A.em(D.e2w,36,x.M)
D.e2z={checkers_deluxe:0,tic_tac_go:1,memory:2,typing:3,scramble:4,pattern:5}
D.eP5=new A.em(D.e2z,6,x.M)
D.e3P={memory:0,typing:1,scramble:2,pattern:3}
D.mM=new A.em(D.e3P,4,x.M)
D.eRk=new A.ar(276,276)
D.eS1=new A.a7(13,null,null,null)
D.b6o=new A.fj(2.6,null,null,null,null,B.aM,null,null,null,null)
D.eSb=new A.a7(26,26,D.b6o,null)
D.eSW=new A.a7(null,7,null,null)
D.eT4=new A.hN(8,0,0,1,null)
D.fBm=new A.y("This match series is finished. Send a new invite to play again.",null,null,null,null,null,null,null,null,null,null,null)
D.aOr=new A.b1(D.fBm,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ffh=new A.y("Place every letter first",null,null,null,null,null,null,null,null,null,null,null)
D.eW_=new A.b1(D.ffh,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fgk=new A.y("Minimum bet is $2.00",null,null,null,null,null,null,null,null,null,null,null)
D.eW5=new A.b1(D.fgk,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fya=new A.y("Wrong \u2014 try again!",null,null,null,null,null,null,null,null,null,null,null)
D.eWJ=new A.b1(D.fya,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.bgR=new A.v(1,0.3568627450980392,0.2627450980392157,0.03137254901960784,B.t)
D.f5h=new A.H(!0,D.bgR,null,null,null,null,9,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZV=new A.er("$",null,null,B.cO,null,null,null,null,null,null,D.f5h)
D.f_a=new A.H(!0,B.M,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_t=new A.H(!0,B.c,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_z=new A.H(!0,B.bo,null,null,null,null,9,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_X=new A.H(!0,B.M,null,null,null,null,9,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f06=new A.H(!0,B.c,null,null,null,null,19,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0e=new A.H(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0m=new A.H(!0,null,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f16=new A.H(!0,B.aM,null,null,null,null,28,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1H=new A.H(!0,D.eK,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1J=new A.H(!0,B.bL,null,null,null,null,14,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2r=new A.H(!0,E.AH,null,null,null,null,13,B.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPG=new A.H(!0,B.c,null,null,null,null,20,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3V=new A.H(!0,B.bL,null,null,null,null,11.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4c=new A.H(!0,B.ad,null,null,null,null,12,null,null,null,null,null,1.25,null,null,null,null,B.aD,null,null,null,null,null,null,null,null)
D.f4v=new A.H(!0,B.ad,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5x=new A.H(!0,B.c,null,null,null,null,11,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5M=new A.H(!0,B.c,null,null,null,null,14,B.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5X=new A.H(!0,B.b2,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5Y=new A.H(!0,B.c,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,B.aD,null,null,null,null,null,null,null,null)
D.f6t=new A.H(!0,B.iK,null,null,null,null,10.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.baH=new A.v(1,0.0196078431372549,0.1803921568627451,0.12156862745098039,B.t)
D.f6H=new A.H(!0,D.baH,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f88=new A.H(!0,B.ay,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8u=new A.H(!0,D.ae0,null,null,null,null,9,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQm=new A.H(!0,E.AH,null,null,null,null,11,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8R=new A.H(!0,B.eA,null,null,null,null,52,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8S=new A.H(!0,B.br,null,null,null,null,7,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f96=new A.H(!0,E.AH,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.wp=new A.H(!0,B.c,null,null,null,null,13,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bez=new A.v(1,0.17647058823529413,0.12156862745098039,0.0196078431372549,B.t)
D.f9j=new A.H(!0,D.bez,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9R=new A.H(!0,B.Rb,null,null,null,null,16.799999999999997,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faP=new A.H(!0,B.c,null,null,null,null,38,B.u,null,-0.8,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faV=new A.H(!0,B.iY,null,null,null,null,11,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faZ=new A.H(!0,null,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQD=new A.H(!0,B.c,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbq=new A.H(!0,B.M,null,null,null,null,10,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbu=new A.H(!0,B.c,null,null,null,null,14,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcm=new A.H(!0,B.M,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcJ=new A.H(!0,B.ad,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd_=new A.H(!0,B.b2,null,null,null,null,14,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdv=new A.H(!0,B.c,null,null,null,null,44,B.u,null,-1,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdz=new A.H(!0,B.M,null,null,null,null,11,B.O,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fev=new A.y("Value per pair",null,B.hE,null,null,null,null,null,null,null,null,null)
D.fex=new A.y("Restore now",null,B.ck,null,null,null,null,null,null,null,null,null)
D.ff3=new A.y("Insert link",null,null,null,null,null,null,null,null,null,null,null)
D.aQ7=new A.H(!0,B.cV,null,null,null,null,12,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffc=new A.y("AVAILABLE PLANS",null,D.aQ7,null,null,null,null,null,null,null,null,null)
D.fff=new A.y("I understand",null,B.cA,null,null,null,null,null,null,null,null,null)
D.ffL=new A.y("Go Back",null,B.cA,null,null,null,null,null,null,null,null,null)
D.f2i=new A.H(!0,B.br,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgs=new A.y("PLAN VALUE",null,D.f2i,null,null,null,null,null,null,null,null,null)
D.fgu=new A.y("Apply deposit",null,null,null,null,null,null,null,null,null,null,null)
D.fgQ=new A.y("Deposit",null,B.TT,null,null,null,null,null,null,null,null,null)
D.fbJ=new A.H(!0,B.dQ,null,null,null,null,null,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhP=new A.y("JACKPOT SLOTS",null,D.fbJ,null,null,null,null,null,null,null,null,null)
D.fi8=new A.y("Restore",null,B.ck,null,null,null,null,null,null,null,null,null)
D.f2l=new A.H(!0,B.c,null,null,null,null,12,B.u,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fic=new A.y("YOUR NUMBER",null,D.f2l,null,null,null,null,null,null,null,null,null)
D.fir=new A.y("SPIN REELS",null,F.a7K,null,null,null,null,null,null,null,null,null)
D.fiT=new A.y("Hit",null,null,null,null,null,null,null,null,null,null,null)
D.fjo=new A.y("Perfect Score Profit",null,B.hE,null,null,null,null,null,null,null,null,null)
D.fk0=new A.y("Join room",null,B.kf,null,null,null,null,null,null,null,null,null)
D.fm4=new A.y("Add payment screenshot",null,B.j6,null,null,null,null,null,null,null,null,null)
D.fmj=new A.y("Submit",null,null,null,null,null,null,null,null,null,null,null)
D.fb0=new A.H(!0,B.aM,null,null,null,null,11,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmL=new A.y("INVITE A PLAYER",null,D.fb0,null,null,null,null,null,null,null,null,null)
D.fae=new A.H(!0,B.W1,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fna=new A.y("NGMY GOLD LEADER",null,D.fae,null,null,null,null,null,null,null,null,null)
D.fnH=new A.y("Shoot cue ball",null,null,null,null,null,null,null,null,null,null,null)
D.fo5=new A.y("Invest & Play",null,B.pe,null,null,null,null,null,null,null,null,null)
D.aQ1=new A.H(!0,D.xa,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foy=new A.y("VALID THRU",null,D.aQ1,null,null,null,null,null,null,null,null,null)
D.aQF=new A.H(!0,B.aA,null,null,null,null,11,B.H,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foG=new A.y("DEALER",null,D.aQF,null,null,null,null,null,null,null,null,null)
D.foM=new A.y("CARDHOLDER",null,D.aQ1,null,null,null,null,null,null,null,null,null)
D.f9K=new A.H(!0,B.aL,null,null,null,null,9,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpu=new A.y("NGMY PLATINUM",null,D.f9K,null,null,null,null,null,null,null,null,null)
D.fcQ=new A.H(!0,B.pL,null,null,null,null,10,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqc=new A.y("EARNED SO FAR",null,D.fcQ,null,null,null,null,null,null,null,null,null)
D.fqK=new A.y("VS",null,B.aPW,null,null,null,null,null,null,null,null,null)
D.fr9=new A.y("Join room",null,null,null,null,null,null,null,null,null,null,null)
D.frw=new A.y("One day left",null,B.aPE,null,B.L,null,null,null,null,null,null,null)
D.frS=new A.y("Keep typing \u2014 mistakes are counted in your payout",null,B.Dh,null,null,null,null,null,null,null,null,null)
D.frT=new A.y("Multiplayer invite",null,B.kf,null,null,null,null,null,null,null,null,null)
D.fs3=new A.y("Insert",null,null,null,null,null,null,null,null,null,null,null)
D.f0U=new A.H(!0,B.Rb,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs9=new A.y("\ud83d\udcb0 Partial Payout System",null,D.f0U,null,null,null,null,null,null,null,null,null)
D.fsk=new A.y("Browse Topics",null,B.eX,null,null,null,null,null,null,null,null,null)
D.f_U=new A.H(!0,B.c,null,null,null,null,22,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsz=new A.y("Investment Required",null,D.f_U,null,B.L,null,null,null,null,null,null,null)
D.f_q=new A.H(!0,B.c,null,null,null,null,16.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu2=new A.y("Network Status",null,D.f_q,null,null,null,null,null,null,null,null,null)
D.fuA=new A.y("Their account email",null,G.a7w,null,null,null,null,null,null,null,null,null)
D.fuU=new A.y("Verification code",null,B.cA,null,null,null,null,null,null,null,null,null)
D.fuV=new A.y("Category",null,null,null,null,null,null,null,null,null,null,null)
D.fva=new A.y("ACTIVE ASSET",null,D.aQ7,null,null,null,null,null,null,null,null,null)
D.fvw=new A.y("Scan QR",null,B.cA,null,null,null,null,null,null,null,null,null)
D.fvB=new A.y("Check word",null,B.cA,null,null,null,null,null,null,null,null,null)
D.fw0=new A.y("YOUR HAND",null,D.aQF,null,null,null,null,null,null,null,null,null)
D.fwA=new A.y("NGMY Music Studio",null,B.kg,null,null,null,null,null,null,null,null,null)
D.fwD=new A.y("I sent it \u2014 submit deposit",null,B.pe,null,null,null,null,null,null,null,null,null)
D.fxo=new A.y("Back",null,B.To,null,null,null,null,null,null,null,null,null)
D.fdK=new A.H(!0,null,null,null,null,null,null,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxw=new A.y("DEAL / PLAY ROUND",null,D.fdK,null,null,null,null,null,null,null,null,null)
D.fxJ=new A.y("Got it \u2014 keep chatting",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fxT=new A.y("3 Messages Left",null,B.aQt,null,null,null,null,null,null,null,null,null)
D.fyp=new A.y("Stand",null,null,null,null,null,null,null,null,null,null,null)
D.fyy=new A.y("Copy",null,B.cA,null,null,null,null,null,null,null,null,null)
D.fyV=new A.y("How many games?",null,G.a7w,null,null,null,null,null,null,null,null,null)
D.f9d=new A.H(!0,B.aA,null,null,null,null,null,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz6=new A.y("No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.",null,D.f9d,null,B.L,null,null,null,null,null,null,null)
D.fAF=new A.y("Question",null,null,null,null,null,null,null,null,null,null,null)
D.fAS=new A.y("Accept & Play",null,null,null,null,null,null,null,null,null,null,null)
D.fe8=new A.H(!0,B.c,null,null,null,null,12.5,B.u,null,2.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCr=new A.y("NGMY  WALLET",null,D.fe8,null,null,null,null,null,null,null,null,null)
D.fCs=new A.y("Select Your Bet",null,B.hs,null,null,null,null,null,null,null,null,null)
D.fVc=new A.cx("history",x.W)
D.fVh=new A.cx("ngmy_local_home",x.W)
D.fVi=new A.cx("ngmy_local_invest",x.W)
D.fVj=new A.cx("ngmy_local_wallet",x.W)
D.fY3=new C.YW(null)
D.aUQ=new C.aAD(0,"grid")
D.aUR=new C.aAD(1,"questions")
D.fZk=new C.aAD(2,"answer")
D.h_f=new C.ZP(null)})();(function staticFields(){$.fUG=A.aX(x.N)
$.hjw=A.T(x.N,x.k)
$.h_8=null
$.fZW=A.T(x.N,A.ax("wb"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"igI","bDo",()=>C.hZG())
w($,"igu","hrA",()=>{var v=null,u=A.h1(v,v,v,v,D.eZV,B.a4,B.c6,v,B.dP,B.c5)
u.en()
return u})})()};
(a=>{a["qNa68Jbfd+LT6vRu1XOMi9x0MNs="]=a.current})($__dart_deferred_initializers__);