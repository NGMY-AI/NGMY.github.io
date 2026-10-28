((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,F,N,O,T,P,U,V,W,H,X,Y,Q,R,Z,A_,A0,I,A={
zB(d,e,f){var w=d.a,v=d.b,u=d.c
return new A.N(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
bBf(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new A.N(u*w+t*v,d.b,-u*v+t*w)},
Ku(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.fHF(Math.cos(e),Math.sin(e)),n=new A.fHD(f),m=new A.fHE(n,e,o,g),l=new A.fHC(n,e,o),k=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.K)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.K)(r),++p)s.push(m.$1(r[p]))
k.push(new A.tc(s,l.$1(t.b),t.c,t.d,t.e,t.f,t.r,t.w,t.x))}return k},
G3(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(d.length<3)return d
w=C.a([D.d.gL(d)],x.o)
for(v=1;u=v+1,u<d.length;v=u){t=d[v-1]
s=d[v]
r=d[u]
q=s.a
p=s.b
o=s.c
n=new A.N(q-t.a,p-t.b,o-t.c)
m=new A.N(r.a-q,r.b-p,r.c-o)
l=Math.min(e,n.gSX()*0.5)
k=Math.min(e,m.gSX()*0.5)
j=n.gqq(0)
i=new A.N(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.gqq(0)
h=new A.N(q+j.a*k,p+j.b*k,o+j.c*k)
for(g=0;g<=a0;++g){f=g/a0
w.push(A.zB(A.zB(i,s,f),A.zB(s,h,f),f))}}w.push(D.d.gam(d))
return w},
agl(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if(a3.length<3)return a3
w=C.a([],x.o)
for(v=0;u=v+1,t=a3.length,u<t;v=u){s=v===0?a3[v]:a3[v-1]
r=a3[v]
q=a3[u]
p=v+2
o=p<t?a3[p]:q
for(t=s.a,p=r.a,n=q.a,m=o.a,l=s.b,k=r.b,j=q.b,i=o.b,h=s.c,g=r.c,f=q.c,e=o.c,d=0;d<a4;++d){a0=d/a4
a1=a0*a0
a2=new A.fHw(a0,a1,a1*a0)
w.push(new A.N(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(D.d.gam(a3))
return w},
hGd(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=!0,u=!0,t=0;t<w;++t)if(d[t].c>=0.5)u=!1
else v=!1
if(v)return d
if(u)return B.d01
s=C.a([],x.o)
for(r=0;w=d.length,r<w;){q=d[r];++r
p=d[r%w]
w=q.c
o=w>=0.5
n=p.c
if(o)s.push(q)
if(o!==n>=0.5)s.push(A.zB(q,p,(0.5-w)/(n-w)))}return s},
hH0(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a5[0],a1=a0.a,a2=a0.b
a0=a5[1]
w=a0.a
v=a0.b
a0=a5[2]
u=a0.a
t=a0.b
a0=a5[3]
s=a0.a
r=a0.b
q=w-u
p=s-u
o=a1-w+u-s
n=v-t
m=r-t
l=a2-v+t-r
if(Math.abs(o)<1e-9&&Math.abs(l)<1e-9){k=w-a1
j=s-a1
i=v-a2
h=r-a2
g=0
f=0}else{e=q*m-p*n
if(Math.abs(e)<1e-9)return
g=(o*m-p*l)/e
f=(q*l-o*n)/e
k=w-a1+g*w
j=s-a1+f*s
i=v-a2+g*v
h=r-a2+f*r}a0=new Float64Array(16)
a0[15]=1
a0[14]=0
a0[13]=a2
a0[12]=a1
a0[11]=0
a0[10]=1
a0[9]=0
a0[8]=0
a0[7]=f/180
a0[6]=0
a0[5]=h/180
a0[4]=j/180
a0[3]=g/320
a0[2]=0
a0[1]=i/320
a0[0]=k/320
d=a3.a
J.bA(d.save())
a3.av(0,a0)
d.clipRect(C.c4(new C.aa(0,0,320,180)),$.qF()[1],!0)
a4.c.$3(a3,new C.at(320,180),a6)
d.restore()},
N:function N(d,e,f){this.a=d
this.b=e
this.c=f},
tc:function tc(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
db:function db(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vp:function vp(d,e,f){this.a=d
this.b=e
this.c=f},
zj:function zj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
at6:function at6(d,e,f){this.a=d
this.b=e
this.c=f},
nq:function nq(d){var _=this
_.a=d
_.c=_.b=0
_.d=1
_.e=0},
bUt:function bUt(d,e){this.a=d
this.b=e},
bUu:function bUu(d){this.a=d},
bUs:function bUs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bUv:function bUv(d,e,f){this.a=d
this.b=e
this.c=f},
bUr:function bUr(d,e){this.a=d
this.b=e},
bUw:function bUw(d,e,f){this.a=d
this.b=e
this.c=f},
fHF:function fHF(d,e){this.a=d
this.b=e},
fHD:function fHD(d){this.a=d},
fHE:function fHE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fHC:function fHC(d,e,f){this.a=d
this.b=e
this.c=f},
fHw:function fHw(d,e,f){this.a=d
this.b=e
this.c=f},
Ay:function Ay(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=160
_.r=0
_.w=1.25
_.x=!1
_.as=_.Q=_.z=_.y=null
_.P$=0
_.S$=h
_.bt$=_.bL$=0},
bOB:function bOB(d){this.a=d},
b3p:function b3p(d,e,f,g,h,i,j,k,l){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.a=l},
ckU:function ckU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ckV:function ckV(d,e){this.a=d
this.b=e},
ckR:function ckR(){},
ckS:function ckS(d,e,f){this.a=d
this.b=e
this.c=f},
ckT:function ckT(){},
J4:function J4(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
at5:function at5(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bot:function bot(d,e,f,g,h){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=40
_.bq$=g
_.a7$=h
_.c=_.a=null},
ePD:function ePD(d){this.a=d},
ePC:function ePC(d){this.a=d},
ePz:function ePz(d){this.a=d},
ePA:function ePA(d){this.a=d},
ePB:function ePB(d){this.a=d},
aLj:function aLj(){},
aSh(d,e,f,g,h,i,j){return new A.a3i(g,i,h,e,f,j)},
Q5(d){return D.d.iw($.hjX(),new A.fkz(d))},
bBE(d,e){var w,v,u=d.e,t=new C.J(u,new A.fHU(),C.T(u).k("J<1,n>")).fF(0)
u=e.b
w=C.a3(u).k("bc<2>")
v=C.d9(new C.bc(u,w),w.k("H.E"))
return t.de(0,v.gkL(v))},
hfS(d,e,f,g,h){var w,v
if(e.a&&e.c===0){if(e.r)return"SHOCK! The breaker was still ON and you touched a live wire. Always turn the power OFF and test the wires first."
return"STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly."}if(e.c!==0)return"The device is already in the box. Pull it out again to change the wires."
if(!e.r&&!h&&!g.c.t(0,f))return d.r.$2(f,g)
w=e.b
v=g.a
if(w.h(0,v)!=null)return"That place already has a wire. Tap the wire to take it off first."
if(new C.bc(w,C.a3(w).k("bc<2>")).t(0,f))return"That wire is already fastened. Tap it to take it off if you want to move it."
w.n(0,v,f)
return null},
fRp(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=new A.fkF(b1),b0=new A.fkD(b1)
for(w=b2.b,w=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gai(0),v=0,u=0,t=0,s=0,r=0,q=0,p=0,o=0,n=0,m=0;w.C();){l=w.d
k=a9.$1(l.a)
j=b0.$1(l.b)
if(k==="load"){++m
continue}A:{i="hot"===j
h=i
g=a8
if(h){g="hot"===k
h=g
f=k
e=!0
d=!0}else{f=a8
e=!1
d=!1
h=!1}if(h){++v
break A}a0=a8
if(i){if(d)h=f
else{h=k
f=h
d=!0}a0="neutral"===h
h=a0
a1=!0}else{a1=!1
h=!1}if(h){++u
break A}a2=a8
if(i){if(d)h=f
else{h=k
f=h
d=!0}a2="ground"===h
h=a2
a3=!0}else{a3=!1
h=!1}if(h){++t
break A}a4="neutral"===j
h=a4
if(h)if(a1)h=a0
else{if(d)h=f
else{h=k
f=h
d=!0}a0="neutral"===h
h=a0
a1=!0}else h=!1
if(h){++s
break A}if(a4)if(e)h=g
else{if(d)h=f
else{h=k
f=h
d=!0}g="hot"===h
h=g
e=!0}else h=!1
if(h){++r
break A}if(a4)if(a3)h=a2
else{if(d)h=f
else{h=k
f=h
d=!0}a2="ground"===h
h=a2
a3=!0}else h=!1
if(h){++q
break A}a5="ground"===j
h=a5
if(h)if(a3)h=a2
else{if(d)h=f
else{h=k
f=h
d=!0}a2="ground"===h
h=a2}else h=!1
if(h){++p
break A}if(a5)if(e)h=g
else{if(d)h=f
else{h=k
f=h
d=!0}g="hot"===h
h=g}else h=!1
if(h){++o
break A}if(a5)if(a1)h=a0
else{a0="neutral"===(d?f:k)
h=a0}else h=!1
if(h)++n}}w=b1.e
h=C.T(w).k("a2<1>")
a6=new C.a2(w,new A.fkB(),h).gM(0)
a7=new C.a2(w,new A.fkC(),h).gM(0)
if(t>0||o>0)return B.fCo
w=u>0
if(!(w&&s>0))h=r>0&&v>0
else h=!0
if(h)return B.fCv
if(w&&r>0)return B.fCp
if(q>0||n>0)return B.fCs
if(m>0&&v<a6)return B.fCu
if(v<a6)return B.fCq
if(a7>0&&s<a7)return B.fCt
if(p===0)return B.fCn
return B.fCr},
bxd(d,e){var w
if(d==="light"||d==="fan")w=e.c===0?6.4:0.6
else w=e.c===0?4.7:-0.25
return w},
bzm(d,e,f){var w,v
if(d==="light"||d==="fan"){w=A.bxd(d,f)
v=f.c===0?w-3.2:w
switch(e){case 51:return new A.N(-1.5,-0.3,v)
case 52:return new A.N(0,-0.3,v)
default:return new A.N(1.5,-0.3,v)}}w=A.bxd(d,f)
switch(e){case 21:return new A.N(0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 22:return new A.N(0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
case 23:return new A.N(-0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 24:return new A.N(-0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
default:return new A.N(0,-1.98,w+0.52)}},
fR5(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=C.a([],x.z),a6=new A.nq(a5),a7=a9.a,a8=a7==="light"||a7==="fan"
if(b1){a6.b=1
a6.iZ(B.fyU,B.aQF,B.uE,3)
a6.iZ(B.fzH,B.aQF,B.uE,3)
a6.iZ(B.fAJ,B.aQW,B.uE,2)
a6.iZ(B.fA2,B.aQW,B.uE,2)
a6.b=2
a6.q3(B.fyz,B.aQA,B.m0,0.05,3)
a6.q3(B.fyf,B.aQA,B.m0,0.05,3)
a6.q3(B.fy7,B.fB2,B.m0,0.05,2)}w=A.h6P(a6,a7,!0)
v=new A.fiI(a6,b0,a7,a8)
u=D.d.gL(w)
t=a7==="switch"
if(t){s=D.d.gam(w)
v.$5(10,u.ae(0,B.fuC),B.fAL,"blackLine",B.K6)
v.$5(13,s.ae(0,B.fAR),B.fx7,"blackLoad",B.K6)
v.$5(12,u.ae(0,B.fzs),B.fwI,"ground",B.wR)
a6.b=6
r=x.o
a6.jL(C.a([u.ae(0,B.aQz),B.fuW,B.Tf],r),0.075,B.wA,!1,0.3,8)
a6.jL(C.a([s.ae(0,B.aQz),B.fyZ,B.Tf],r),0.075,B.wA,!1,0.3,8)
a6.K5(B.Tf,B.fAG,0.28,B.ab5,0.18,0.3,10)}else{v.$5(10,u.ae(0,B.fxa),B.fuS,"black",B.K6)
v.$5(11,u.ae(0,B.fy3),B.fz5,"white",B.wA)
v.$5(12,u.ae(0,B.fyl),B.fyg,"ground",B.wR)}if(a8)A.h7N(a6,a7,b0)
else A.h7t(a6,a7,A.bxd(a7,b0),b0.w,!1)
if(b0.e&&b0.c===0){a6.b=0
a6.d=0.5
for(r=a9.f,q=r.length,p=0;p<q;++p){o=r[p]
n=A.bzm(a7,o.a,b0)
if(o.e)m=D.cq
else{l=o.f
if(l==="ground")m=D.bk
else{l=l==="neutral"?D.c:B.Vq
m=l}}if(a8)l=0
else{l=n.a
if(l>0.4)l=0.12
else l=l<-0.4?-0.12:0}if(a8)k=0.6
else k=Math.abs(n.a)<0.4?0.2:0
a6.iY(new A.N(n.a+l,n.b+0,n.c+k),0.36,m,4,8,0.1)}a6.d=1}if(b0.c>=2&&!a8)A.h9P(a6,b0.w)
r=!1
if(b0.c>=2)if(b0.d)r=a7==="outlet"||a7==="gfci"
if(r)A.hOu(a6,b0.a&&!b0.w)
r=a8?"Ceiling box":"Electrical box"
q=a7==="fan"
l=q?' A fan needs a box that says "fan rated".':""
k=t?"Cable from the breaker panel (LINE)":"NM-B cable (Romex)"
j=a8?"It joins the fixture black wire with a wire nut.":"It goes on a brass screw."
i=a8?"It joins the fixture white wire.":"It goes on a silver screw."
h=a8?"It joins the green fixture ground wire.":"It goes on the green screw."
g=a7==="gfci"
if(g)f="GFCI outlet"
else f=t?"Light switch":"Receptacle (outlet)"
if(g)t="It checks that the current going out equals the current coming back. If some leaks (through water or a person) it shuts off in a fraction of a second."
else t=t?"A rocker that opens and closes the black wire to the light.":"The outlet. Each side has two slots and a ground hole. The short slot is hot, the long slot is neutral."
g=A.bxd(a7,b0)
e=q?"Ceiling fan":"Ceiling light"
q=q?"The motor housing with blades. It has three wires: black (motor), white (neutral) and green (ground).":"The light fixture with a frosted dome. It has three wires: black, white and green."
d=C.E([1,B.dUh,2,B.dUv,3,new A.db(r,"A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling."+l,new A.N(0,0,-1.2),9),4,new A.db(k,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new A.N(-0.4,1.5,-1.8),8),5,B.dUR,10,new A.db("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. "+j,new A.N(-0.8,-0.8,1.2),7),13,B.dU3,11,new A.db("White wire: neutral","The neutral wire carries the power back to the panel. "+i,new A.N(0,-0.8,1.2),7),12,new A.db("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. "+h,new A.N(0.5,-0.8,1.2),7),6,B.dUt,20,new A.db(f,t,new A.N(0,-0.2,g),9),21,B.dUy,22,B.dUQ,23,B.dUr,24,B.dUw,25,B.dUk,26,B.dUz,27,B.dUL,28,B.dUe,30,B.dTZ,31,B.dTX,51,B.dUu,52,B.dU0,53,B.dUD,54,new A.db(e,q,new A.N(0,0,6.4),9),55,B.dUN],x.S,x.q)
a0=C.a([],x.E)
if(b0.f&&b0.c===0)for(t=a9.f,r=t.length,p=0;p<r;++p){o=t[p]
n=A.bzm(a7,o.a,b0)
a1=o.f
A:{q="hot"===a1
if(q){l=B.etF
break A}if("neutral"===a1){l=B.ekZ
break A}if("ground"===a1){l=B.ent
break A}l=B.ebc
break A}a2=l.a
if(a8){B:{if(q){k="BLACK NUT \xb7 HOT"
break B}if("neutral"===a1){k="WHITE NUT \xb7 NEUTRAL"
break B}k="GROUND"
break B}a3=k}else a3=a2
if(a8){C:{if(q){q=B.fxP
break C}if("neutral"===a1){q=B.fxM
break C}q=B.fBc
break C}a4=q}else{q=n.a
if(q>0.4)k=3.8
else k=q<-0.4?-4.2:0
a4=new A.N(k,Math.abs(q)<0.4?-3:-0.4,1)}a0.push(new A.vp(new A.N(n.a+a4.a,n.b+a4.b,n.c+a4.c),a3,l.b))}if(b0.a&&b0.c===0)a0.push(B.bOj)
return new A.zj(a5,d,a0,B.vu)},
h6P(d,e,f){var w,v,u=e==="light"||e==="fan"
d.b=3
if(u){d.e9(B.aQY,B.aQE,2.2,B.wQ,0.3,18)
d.a2B(B.aQE,B.w4,2.2,B.wQ,!1,!0,0.3,18)}else{d.bX(B.aQY,B.fyF,B.wQ,0.3)
d.bX(B.fwW,B.aQt,B.wQ,0.3)
d.bX(B.fvh,B.aQt,B.wQ,0.3)
d.bX(B.fyb,B.aQJ,B.wQ,0.3)
d.bX(B.fxK,B.aQJ,B.wQ,0.3)}w=C.a([],x.o)
v=new A.f5b(d,f,w)
if(e==="switch"){v.$2(4,B.cOs)
v.$2(5,B.cML)}else v.$2(4,B.cZI)
return w},
hfW(d,e){var w
A:{if(10===e){w=d==="switch"?"blackLine":"black"
break A}if(13===e){w="blackLoad"
break A}if(11===e){w="white"
break A}if(12===e){w="ground"
break A}w=null
break A}return w},
h7t(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k=new A.N(0,-0.2,f),j=e==="switch",i=e==="gfci"
if(g)w=B.wL
else w=j?B.baN:B.W0
v=i?3.1:2.95
d.e=0
d.b=20
if(!h){d.bX(k.ae(0,B.fwc),new A.N(1.5,v,1.3),w,0.25)
d.e=0.15
d.b=26
u=k.ae(0,B.fw4)
d.bX(u,B.fAH,g?B.b8_:B.Kl,0.8)
d.cU(k.ae(0,B.fzp),B.fBO,B.DM)}d.e=0.3
d.b=27
u=k.ae(0,B.fxt)
d.bX(u,new A.N(1.3,i?2.85:2.7,0.16),w,0.3)
if(j){d.e=0.7
d.b=28
u=k.ae(0,B.fyY)
d.bX(u,B.fx9,g?B.wL:F.Wa,0.35)
u=k.ae(0,B.fAr)
d.bX(u,B.fA1,g?B.wL:B.abN,0.35)}else{d.e=0.6
u=i?E.aqL:B.daz
t=u.length
s=f+0.47
r=f+0.46
q=f+0.5
p=0
for(;p<t;++p){o=u[p]
d.b=27
n=-0.2+(o+0.04)
d.cU(new A.N(-0.28,n,s),B.fyE,B.DV)
d.cU(new A.N(0.28,n,s),B.fxx,B.DV)
n=-0.2+(o-0.32)
d.pe(new A.N(0,n,r),new A.N(0,n,q),0.11,B.DV,10)}if(i){d.e=0.7
d.b=28
d.bX(k.ae(0,B.fze),B.aQv,B.bdZ,0.3)
d.bX(k.ae(0,B.fAS),B.aQv,B.aec,0.3)}}if(h){d.e=0
return}m=i?0.95:0.85
l=i?-0.75:-0.55
u=new A.f6w(d,k)
if(!j){u.$6$taped(23,-1,m,B.ac5,B.acv,i)
u.$5(24,-1,l,B.ac5,B.acv)}u.$6$taped(21,1,m,B.Vq,B.adL,i)
u.$5(22,1,l,B.Vq,B.adL)
d.e=0.9
d.b=25
d.e9(k.ae(0,B.fy9),k.ae(0,B.fBd),0.18,B.bfN,0.7,12)
d.cU(k.ae(0,B.fxO),B.fyd,D.e9)
d.bX(k.ae(0,B.fwh),B.fzg,B.b4W,0.6)
d.e=0},
h7N(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e==="fan",j=A.bxd(e,f)
d.e=0
d.b=55
w=j-0.3
v=j+0.3
u=k?3.3:3.5
t=f.w?B.wL:B.bbi
d.e9(new A.N(0,0,w),new A.N(0,0,v),u,t,0.45,20)
d.b=54
if(k){u=j+4.2
d.e9(new A.N(0,0,v),new A.N(0,0,u),0.45,B.b7W,0.5,10)
v=j+7.4
d.e9(new A.N(0,0,u),new A.N(0,0,v),3.6,B.V0,0.5,18)
d.e9(new A.N(0,0,v),new A.N(0,0,j+8.6),1.6,B.bfa,0.7,14)}else{d.d=0.92
v=f.w?B.wL:B.b8N
d.iY(new A.N(0,0,j+1.2),3.6,v,6,14,0.7)
d.d=1}d.b=54
s=[B.el7,B.e8s,B.erw]
for(v=x.o,r=j-3.2,q=0;q<3;++q){u=s[q]
p=f.c===0?r:j
t=u.b.a
d.jL(C.a([new A.N(t,-0.3,w),new A.N(t,-0.3,p+0.4)],v),0.07,u.a,!1,0.3,6)}if(f.c===0)for(w=[B.eev,B.emB,B.eu7],v=f.b,q=0;q<3;++q){o=w[q]
u=o.a
n=A.bzm(e,u,f)
d.b=u
d.e=0.8
t=n.a+0
m=n.b+0
l=n.c
d.e9(new A.N(t,m,l+-0.2),new A.N(t,m,l+0.3),0.09,B.wR,0.6,6)
if(v.ag(0,u))d.K5(new A.N(t,m,l+-0.5),new A.N(t,m,l+0.9),0.4,o.b,0.26,0.4,8)
d.e=0}},
h9P(d,e){var w
d.e=0.4
d.b=30
w=e?B.wL:B.b47
d.bX(B.fza,B.aQK,w,0.3)
d.bX(B.fyy,B.aQK,w,0.3)
d.bX(B.fvf,B.aQR,w,0.3)
d.bX(B.fvI,B.fwp,w,0.3)
d.bX(B.fB9,B.aQR,w,0.3)
d.e9(B.fxC,B.fyw,0.1,B.Kl,0.8,10)
d.e=0},
hOu(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=B.cQV[w]
d.e9(new A.N(v,0.52,0.2),new A.N(v,0.52,1.9),0.04,B.Kl,0.8,6)}d.bX(B.fu6,B.fAz,B.b8v,0.35)
d.b7N(B.aQG,0.2,e?D.Vs:B.bbX,0.9)
if(e){d.d=0.35
d.iY(B.aQG,0.5,D.Vs,4,8,0)
d.d=1}},
mc:function mc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
avx:function avx(d){var _=this
_.a=!0
_.b=d
_.c=0
_.w=_.r=_.f=_.e=_.d=!1},
zH:function zH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a3i:function a3i(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=h
_.r=i},
flD:function flD(){},
flE:function flE(){},
flF:function flF(){},
flG:function flG(){},
flH:function flH(){},
fkz:function fkz(d){this.a=d},
fHU:function fHU(){},
BL:function BL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fkF:function fkF(d){this.a=d},
fkG:function fkG(d){this.a=d},
fkD:function fkD(d){this.a=d},
fkE:function fkE(d){this.a=d},
fkB:function fkB(){},
fkC:function fkC(){},
fiI:function fiI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fiJ:function fiJ(d){this.a=d},
f5b:function f5b(d,e,f){this.a=d
this.b=e
this.c=f},
f6w:function f6w(d,e){this.a=d
this.b=e},
hb3(d){return D.d.dM(B.asE,new A.fix(d),new A.fiy())},
AI(d,e,f,g,h,i,j,k){var w=x.S
return new A.a3L(d,e,f,g,h,i,j,k,C.a([],x._),C.a([0,0,0],x.t),C.aX(w),C.V(w,x.N))},
fXY(d){var w=new A.bOD(d)
w.c1w()
return w},
i1X(d){var w,v=d.c
A:{if("bedroom"===v){w=1
break A}if("kitchen"===v||"bathroom"===v){w=2
break A}w=0
break A}return w},
aTf:function aTf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=0},
q8:function q8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Df:function Df(d,e,f){this.a=d
this.b=e
this.c=f},
u7:function u7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fix:function fix(d){this.a=d},
fiy:function fiy(){},
ps:function ps(d,e,f){this.a=d
this.b=e
this.c=f},
a3L:function a3L(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=1
_.z=m
_.as=_.Q=0
_.at=n
_.ay=_.ax=!1
_.CW=_.ch=null
_.cx=o
_.cy=!1
_.db="light"},
bOD:function bOD(d){var _=this
_.a=d
_.b=!1
_.c=$
_.d=0},
bOE:function bOE(){},
bOI:function bOI(){},
bOH:function bOH(){},
bOG:function bOG(){},
bOF:function bOF(){},
c7m(d,e){return new A.aoI(d,e,null)},
aoI:function aoI(d,e,f){this.d=d
this.e=e
this.a=f},
aC8:function aC8(d){var _=this
_.f=_.e=_.d=$
_.r="look"
_.w=!1
_.x=0
_.y=-1
_.z=0
_.Q=null
_.as=!0
_.at=null
_.ax=d
_.c=_.a=null},
e_D:function e_D(){},
e_B:function e_B(d){this.a=d},
e_C:function e_C(d){this.a=d},
e_h:function e_h(d,e,f){this.a=d
this.b=e
this.c=f},
e_i:function e_i(d){this.a=d},
e_g:function e_g(d){this.a=d},
e_j:function e_j(d,e){this.a=d
this.b=e},
dZV:function dZV(d,e){this.a=d
this.b=e},
e__:function e__(d,e){this.a=d
this.b=e},
e_0:function e_0(d,e){this.a=d
this.b=e},
e_1:function e_1(d,e){this.a=d
this.b=e},
e_2:function e_2(d,e){this.a=d
this.b=e},
e_3:function e_3(d,e,f){this.a=d
this.b=e
this.c=f},
dZZ:function dZZ(d,e){this.a=d
this.b=e},
e_4:function e_4(d){this.a=d},
e_9:function e_9(d,e){this.a=d
this.b=e},
e_7:function e_7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e_6:function e_6(d,e,f){this.a=d
this.b=e
this.c=f},
e_8:function e_8(d,e,f){this.a=d
this.b=e
this.c=f},
e_5:function e_5(d,e){this.a=d
this.b=e},
dZY:function dZY(d){this.a=d},
dZX:function dZX(d){this.a=d},
dZW:function dZW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e_k:function e_k(d,e){this.a=d
this.b=e},
e_e:function e_e(d,e){this.a=d
this.b=e},
e_f:function e_f(d,e){this.a=d
this.b=e},
dZG:function dZG(d,e){this.a=d
this.b=e},
dZL:function dZL(d){this.a=d},
dZM:function dZM(d){this.a=d},
dZN:function dZN(d){this.a=d},
dZO:function dZO(d){this.a=d},
dZP:function dZP(d,e){this.a=d
this.b=e},
dZQ:function dZQ(d){this.a=d},
dZK:function dZK(d){this.a=d},
dZR:function dZR(d,e){this.a=d
this.b=e},
dZJ:function dZJ(d,e){this.a=d
this.b=e},
dZS:function dZS(d,e){this.a=d
this.b=e},
dZI:function dZI(d,e){this.a=d
this.b=e},
dZT:function dZT(d,e){this.a=d
this.b=e},
dZH:function dZH(d,e){this.a=d
this.b=e},
dZU:function dZU(d,e){this.a=d
this.b=e},
e_s:function e_s(d,e){this.a=d
this.b=e},
e_q:function e_q(d){this.a=d},
e_p:function e_p(){},
e_o:function e_o(d){this.a=d},
e_t:function e_t(d){this.a=d},
e_u:function e_u(d){this.a=d},
e_v:function e_v(d){this.a=d},
e_w:function e_w(d){this.a=d},
e_x:function e_x(d){this.a=d},
e_y:function e_y(d){this.a=d},
e_z:function e_z(d){this.a=d},
e_n:function e_n(d){this.a=d},
e_A:function e_A(d){this.a=d},
e_m:function e_m(){},
e_r:function e_r(d){this.a=d},
e_l:function e_l(d){this.a=d},
e_d:function e_d(d){this.a=d},
e_b:function e_b(d,e,f){this.a=d
this.b=e
this.c=f},
e_c:function e_c(d,e){this.a=d
this.b=e},
e_a:function e_a(d){this.a=d},
bgr:function bgr(d,e,f){this.c=d
this.d=e
this.a=f},
dli:function dli(d){this.a=d},
bfQ:function bfQ(d,e){this.b=d
this.a=e},
hb7(d4,d5,d6,d7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1="walls",d2="\ud83d\udeb0 Needs plumbing",d3=d4.c
if(d3==="outside")return A.hL1(d4,d6)
w=x.z
v=C.a([],w)
u=new A.nq(v)
t=C.V(x.S,x.q)
s=C.a([],x.E)
r=C.a([],x.a)
q=d4.gLU(0)
p=d4.gya(0)
o=C.a([],x.O)
for(n=d4.z,m=n.length,l=0;l<n.length;n.length===m||(0,C.K)(n),++l)o.push(B.auP[n[l]])
k=B.auC[d4.Q]
j=new A.fiR(d5)
u.b=j.$2("floor",310)
n=p/2
m=q+2.4
i=p+2
h=k.b
g=k.c
f=g==="tile"
if(f)e=0.35
else e=g==="wood"?0.15:0
u.q3(new A.N(0,-0.6,n),new A.N(m,1.2,i),h,e,3)
t.n(0,310,new A.db("Floor","The "+k.a.toLowerCase()+" floor.",new A.N(0,0,n),140))
u.b=0
if(g==="wood")for(g=-q/2,d=1;d<8;++d){f=C.aq(h,D.w,0.25)
f.toString
u.cU(new A.N(g+d*q/8,0.05,n),new A.N(0.3,0.2,p),f)}else if(f)for(h=-q/2,d=1;d<6;++d){u.cU(new A.N(h+d*q/6,0.05,n),new A.N(0.3,0.2,p),B.aaO)
u.cU(new A.N(0,0.05,d*p/6),new A.N(q,0.2,0.3),B.aaO)}u.b=j.$2(d1,300)
u.iZ(new A.N(0,48,-0.6),new A.N(m,96,1.2),o[0],3)
u.b=j.$2(d1,301)
h=-q
g=h/2
u.iZ(new A.N(g-0.6,48,n),new A.N(1.2,96,p),o[1],3)
u.b=j.$2(d1,302)
f=q/2
u.iZ(new A.N(f+0.6,48,n),new A.N(1.2,96,p),o[2],3)
t.n(0,300,B.dU5)
t.n(0,301,B.dU9)
t.n(0,302,B.dUi)
u.b=0
u.bX(new A.N(0,2.5,0.4),new A.N(q,5,0.8),B.qt,0.1)
u.bX(new A.N(g+0.4,2.5,n),new A.N(0.8,5,p),B.qt,0.1)
u.bX(new A.N(f-0.4,2.5,n),new A.N(0.8,5,p),B.qt,0.1)
u.b=j.$2("ceiling",320)
u.d=d5==="ceiling"?0.6:0.4
u.iZ(new A.N(0,96.6,n),new A.N(m,1.2,i),B.att[d4.as],2)
u.d=1
u.b=0
u.bX(new A.N(0,94,1),new A.N(q,3,1.4),D.c,0.2)
u.bX(new A.N(g+1,94,n),new A.N(1.4,3,p),D.c,0.2)
u.bX(new A.N(f-1,94,n),new A.N(1.4,3,p),D.c,0.2)
t.n(0,320,new A.db("Ceiling","Pick a colour above to paint the ceiling.",new A.N(0,96,n),140))
o=d4.w
a0=D.d.b8(o,new A.fiL())?"left":"right"
if(d3!=="hall"){m=C.a([],w)
a1=new A.nq(m)
a1.cU(B.fBr,B.fuP,B.A6)
a1.bX(B.ftc,B.fxY,B.Wq,0.5)
a1.cU(B.aQf,B.fz1,B.A6)
a1.cU(B.aQf,B.fwB,B.A6)
a2=p*0.55
D.d.v(v,a0==="right"?A.Ku(m,0,-1.5707963267948966,new A.N(f,0,a2)):A.Ku(m,0,1.5707963267948966,new A.N(g,0,a2)))}for(m=d4.at,d=0;d<o.length;++d){a3=o[d]
a4=m.t(0,d)
i=C.a([],w)
a5=new A.nq(i)
e=a5.b=600+d
a5.cU(B.fyT,B.fyG,B.qt)
if(a4){a5.b=0
a5.cU(B.fxI,B.fvR,B.abp)
a5.b=e
a6=A.bBf(B.fBG,-1.25)
a5.aiG(new A.N(-12.5+a6.a,0+a6.b,1.2+a6.c),B.fvg,B.JM,0.15,-1.25)}else{a5.bX(B.fxR,B.fxe,B.JM,0.15)
a5.bX(B.fxX,B.fya,B.DD,0.8)
a5.cU(B.fyc,B.aQV,B.KL)
a5.cU(B.fBo,B.aQV,B.KL)}a7=a3.a
A:{if("left"===a7){i=A.Ku(i,0,1.5707963267948966,new A.N(g,0,a3.b+n-40))
break A}if("right"===a7){i=A.Ku(i,0,-1.5707963267948966,new A.N(f,0,a3.b+n-40))
break A}i=A.Ku(i,0,0,new A.N(a3.b,0,0))
break A}D.d.v(v,i)
t.n(0,e,new A.db("Door","Tap the door to go through it.",B.aQ6,90))}for(n=d4.x,m=n.length,l=0;l<n.length;n.length===m||(0,C.K)(n),++l){a8=n[l]
i=a8.b
e=B.yx.h(0,i)
e.toString
a6=C.a([],w)
a9=new A.nq(a6)
b0=100+a8.a
a9.b=j.$2("furniture",b0)
A.hHG(a9,i,B.cvb[a8.f])
D.d.v(v,A.Ku(a6,0,a8.e*3.141592653589793/2,new A.N(a8.c,0,a8.d)))
t.n(0,b0,new A.db(e.a,"Move it with the arrow buttons, turn it, change its colour or take it out.",new A.N(a8.c,12,a8.d),90))}b1=p*0.5
w=C.T(o)
b2=D.k.D(new C.cQ(new C.a2(o,new A.fiM(),w.k("a2<1>")),new A.fiN(),w.k("cQ<1,P>")).cH(0,g+30,new A.fiO())+24,g+10,f-10)
b3=d4.guC()
b4=d4.db==="fan"
b5=b3&&d4.cy
u.b=703
if(b4){u.pe(new A.N(0,95.5,b1),new A.N(0,86,b1),1,B.rI,8)
u.e9(new A.N(0,86,b1),new A.N(0,79,b1),6,D.t4,0.5,14)
w=b5?B.A4:D.dL
u.e9(new A.N(0,79,b1),new A.N(0,76,b1),3.6,w,0.6,12)}else{w=b5?B.A4:D.dL
u.e9(new A.N(0,95.5,b1),new A.N(0,93,b1),7,w,0.6,16)}if(b5&&!b4){u.b=0
u.d=0.2
u.cEU(new A.N(0,93,b1),new A.N(0,0.5,b1),36,B.A4,!1,14)
u.d=1}b6=b4?"Ceiling fan":"Ceiling light"
w=!b3
if(w)o="It has no power yet. The room still needs wiring: use the Wiring button."
else o=d4.cy?"It is on. Tap the wall switch (or tap this) to turn it off.":"It is off. Tap the wall switch (or tap this) to turn it on."
t.n(0,703,new A.db(b6,o,new A.N(0,88,b1),80))
for(o=h/4,n=q/4,m=[new C.bz(0,700,o),new C.bz(1,701,n)],i=d4.cx,h=d3==="bathroom",e=!h,d3=d3==="kitchen",l=0;l<2;++l){a6=m[l]
b7=a6.b
b8=a6.c
u.b=b7
u.e=0.4
u.d=0.55
b0=b3?D.b9:D.aC
u.cU(new A.N(b8,14,0.25),B.fw9,b0)
u.d=1
u.e=0
b0=b3?B.adD:D.t4
u.bX(new A.N(b8,14,0.9),B.fzd,b0,0.25)
u.b=0
for(b9=0;b9<2;++b9)for(b0=14+E.tM[b9]*2.8,c0=0;c0<2;++c0)u.cU(new A.N(b8+B.cWf[c0],b0,1.7),B.fBD,B.bc8)
u.cU(new A.N(b8,14,1.7),B.fzb,D.dL)
b0=!e||d3?"GFCI outlet":"Wall outlet"
if(w)a6="This outlet is not wired yet. Use the Wiring button to wire it."
else a6=i.h(0,a6.a)==null?"Tap it to plug something in.":"Tap it to plug something else in, or to unplug."
t.n(0,b7,new A.db(b0,a6,new A.N(b8,14,2),60))}u.b=702
u.e=0.4
u.d=0.55
m=b3?D.b9:D.aC
u.cU(new A.N(b2,48,0.25),B.fx4,m)
u.d=1
u.e=0
m=b3?B.adD:D.t4
u.bX(new A.N(b2,48,0.9),B.fwK,m,0.25)
u.cU(new A.N(b2,d4.cy&&b3?49.2:46.8,1.9),B.fwF,B.bhF)
if(w)m="Not wired yet: the Wiring button opens the job."
else if(d4.cy)m="On. Tap to turn the "+(b4?"fan":"light")+" off."
else m="Off. Tap to turn the "+(b4?"fan":"light")+" on."
t.n(0,702,new A.db("Light switch",m,new A.N(b2,48,2),60))
if(w)s.push(new A.vp(new A.N(0,70,b1),"\u26a1 No power: needs wiring",D.bL))
for(o=[new C.z(0,o),new C.z(1,n)],n=x.o,m=d4.a,l=0;l<2;++l){a6=o[l]
d=a6.a
b8=a6.b
c1=i.h(0,d)
if(c1==null||w)continue
c2=A.hb3(c1)
a6=u.b=720+d
u.jL(C.a([new A.N(b8,12,1.8),new A.N(b8,6,3),new A.N(b8,2,11)],n),0.3,B.ad2,!1,0.2,6)
b0=c2.d
c3=b0>0
if(c3){c4=b0*0.56
u.bX(new A.N(b8,2,15),new A.N(b0*0.45,4,14),B.rI,0.3)
u.bX(new A.N(b8,8,15),B.fvU,B.rI,0.3)
c5=12+c4/2
u.bX(new A.N(b8,c5,15),new A.N(b0,c4,3),E.DY,0.5)
b0=(b0-3.5)/2
c6=b8-b0
c7=(c4-3.5)/2
c8=c5+c7
b0=b8+b0
c7=c5-c7
r.push(new A.at6(C.a([new A.N(c6,c8,16.6),new A.N(b0,c8,16.6),new A.N(b0,c7,16.6),new A.N(c6,c7,16.6)],n),a6,new A.fiP(d*7+m)))}else{b0=c2.a
if(b0==="lamp"){u.e9(new A.N(b8,0,14),new A.N(b8,1,14),6,B.V0,0.4,14)
u.e9(new A.N(b8,1,14),new A.N(b8,22,14),1,B.KM,0.5,8)
b0=d4.cy?B.A4:S.W2
u.AZ(new A.N(b8,20,14),new A.N(b8,32,14),9,b0,!1,!0,5.5,0.2,16)}else{u.bX(new A.N(b8,9,15),B.fuc,B.DB,0.1)
if(b0==="toaster"){u.bX(new A.N(b8,23,15),B.fua,B.kx,0.8)
u.cU(new A.N(b8,28.2,15),B.fzT,B.adR)}else{u.K5(new A.N(b8-7,21,15),new A.N(b8+7,21,15),3.6,B.Ku,3,0.6,12)
u.bX(new A.N(b8-8,14.5,15),B.fy5,B.Ku,0.6)}}}b0=c3?"It is playing NGMY ads. Tap it to watch full screen with the remote.":"It is plugged in and running. Tap the outlet to unplug it or plug in something else."
t.n(0,a6,new A.db(c2.b,b0,new A.N(b8,16,14),90))}if(!e||d3){c9=d4.gBD()
d3=new A.fiQ(u)
if(h){d0=g+17
if(c9){u.b=710
u.K5(new A.N(6,0.5,14),new A.N(6,15,14),8,B.A_,5.6,0.8,18)
u.e9(new A.N(6,15,14),new A.N(6,16,14),9,B.KD,0.8,18)
u.bX(new A.N(6,21,5),B.fuh,B.A_,0.8)
u.bX(new A.N(6,28,5),B.fxB,B.KD,0.8)}else{u.b=710
u.d=0.3
u.cU(new A.N(6,14,9),B.fue,D.b2)
u.d=1
d3.$2(-4,8)}u.b=711
u.bX(new A.N(34,14,10),B.fuK,B.DB,0.1)
u.bX(new A.N(34,29,10),B.fuM,B.acc,0.4)
if(c9){u.e9(new A.N(34,29.3,10),new A.N(34,30.1,10),6.5,D.c,0.6,18)
u.bfL(C.a([new A.N(34,30,4),new A.N(34,36,4),new A.N(34,38,7)],n),0.6,B.kx,0.9,8)}else{d3.$2(28,18)
d3.$2(40,18)}u.b=712
if(c9){u.bX(new A.N(d0,8,38),B.aQg,B.ae2,0.7)
u.bX(new A.N(d0,16.2,38),B.fAu,B.Vi,0.8)
u.e9(new A.N(d0,30,3),new A.N(d0,52,3),0.7,B.kx,0.9,8)
u.e9(new A.N(d0,52,3),new A.N(d0,52,10),0.7,B.kx,0.9,8)}else{u.d=0.3
u.cU(new A.N(d0,8,38),B.aQg,D.b2)
u.d=1
d3.$2(d0-4,34)
d3.$2(d0+4,34)}d3=c9?"Fitted on its flange with a wax ring, and the supply hose joins the shut-off valve.":"There is no toilet yet: only the flange and the water stub. Use the Plumbing button to fit it."
t.n(0,710,new A.db("Toilet",d3,new A.N(6,14,10),70))
d3=c9?"The faucet, the hoses and the P-trap are fitted.":"The sink is not plumbed. Use the Plumbing button."
t.n(0,711,new A.db("Vanity sink",d3,new A.N(34,28,10),70))
d3=c9?"The bath is in and connected.":"The bath is not connected yet."
t.n(0,712,new A.db("Bath",d3,new A.N(d0,10,38),90))
if(!c9)s.push(new A.vp(new A.N(0,40,14),d2,D.bj))}else{u.b=0
u.bX(new A.N(g+15,36,14),B.fuz,B.acy,0.6)
u.cU(new A.N(g+28.5,36,14.4),B.fz_,D.dL)
w=f-30
u.bX(new A.N(w,15,14),B.fvw,B.V5,0.1)
u.bX(new A.N(w,31,14),B.fvB,B.rI,0.5)
u.bX(new A.N(f-44,32.4,14),B.aQ9,D.lw,0.3)
u.bX(new A.N(f-16,32.4,14),B.aQ9,D.lw,0.3)
u.b=713
u.bX(new A.N(0,15,14),B.fvi,B.DB,0.1)
u.bX(new A.N(0,31,14),B.fvj,B.E4,0.5)
if(c9){u.e9(new A.N(0,32.1,14),new A.N(0,32.7,14),8,B.DT,0.8,18)
u.bfL(C.a([new A.N(0,32,5),new A.N(0,42,5),new A.N(0,44,9),new A.N(0,44,13)],n),0.7,B.kx,0.9,8)}else{d3.$2(-8,18)
d3.$2(8,18)}d3=c9?"The faucet, the hoses and the drain are fitted.":"The kitchen sink is not plumbed yet. Use the Plumbing button."
t.n(0,713,new A.db("Kitchen sink",d3,new A.N(0,30,14),70))
if(!c9)s.push(new A.vp(new A.N(0,48,14),d2,D.bj))}}return new A.zj(v,t,s,r)},
hL1(d,e){var w,v,u,t=x.z,s=C.a([],t),r=new A.nq(s),q=C.V(x.S,x.q),p=C.a([],x.E)
r.iZ(B.fAx,B.fw5,B.b61,4)
r.cU(B.fyq,B.fxz,E.DG)
r.cU(B.fyQ,B.fxk,B.V5)
r.iZ(B.ftQ,B.fuw,B.VD,3)
r.cU(B.fwa,B.fuH,B.b4h)
t=C.a([],t)
new A.nq(t).q3(B.w4,B.fux,B.baW,0.1,2)
D.d.v(s,A.Ku(t,0.5,0,B.ftj))
D.d.v(s,A.Ku(t,-0.5,0,B.ftk))
r.cU(B.ftm,B.fuy,B.b9i)
r.cU(B.fxH,B.aR2,B.VD)
r.cU(B.fAQ,B.aR2,B.VD)
for(w=0;w<4;++w){v=B.d4o[w]
r.cU(new A.N(v,62,10.5),B.fBx,B.qt)
r.bX(new A.N(v,62,11.2),B.fBw,B.Wq,0.6)
r.cU(new A.N(v,62,11.6),B.fyn,B.qt)
r.cU(new A.N(v,62,11.6),B.fxs,B.qt)}r.cU(B.ftC,B.fv6,E.DG)
r.cU(B.fzo,B.fvE,B.qt)
r.b=600
r.bX(B.fvc,B.fxj,B.JM,0.2)
r.bX(B.fw0,B.fw3,B.DD,0.8)
r.cU(B.fwe,B.aQB,B.KL)
r.cU(B.fy8,B.aQB,B.KL)
q.n(0,600,B.dUg)
r.b=0
r.pe(B.fu_,B.fu0,5,B.Er,8)
r.a23(B.fu1,28,B.aaD,6,10)
r.a23(B.ftW,18,B.abs,5,8)
for(w=0;w<4;++w)r.a23(new A.N(B.d4j[w],6,24),7,B.b97,4,8)
r.pe(B.fuO,B.fuQ,1.4,B.Er,6)
r.bX(B.fuR,B.fu2,B.bbu,0.3)
t=e===0
u=t?"\u2705 The house is finished":"\ud83c\udfe0 "+e+" rooms still need work"
p.push(new A.vp(B.fti,u,t?D.cZ:D.dT))
return new A.zj(s,q,p,B.vu)},
hRy(d,e){var w,v,u,t,s=C.a([],x.z),r=new A.nq(s),q=d.c==="outside"
if(q||q)return s
w=d.gya(0)
if(d.db==="fan"){v=d.guC()&&d.cy?e*7:0
r.b=703
for(q=w*0.5,u=0;u<4;++u){t=v+u*3.141592653589793/2
r.aiG(new A.N(Math.cos(t)*15,81,q+Math.sin(t)*15),B.fBl,B.DB,0.1,-t)}}return s},
hHG(d,e,f){var w,v,u,t=C.aq(f,D.w,Math.abs(-0.25))
t.toString
w=C.aq(f,D.c,Math.abs(0.2))
w.toString
switch(e){case"bed":d.bX(B.a7n,B.fvv,B.Er,0.1)
d.bX(B.ftn,B.fvn,f,0.05)
d.cU(B.fAg,B.aQb,B.ad3)
d.cU(B.fu8,B.aQb,B.ad3)
d.bX(B.fty,B.fvx,B.Er,0.1)
d.cU(B.ftr,B.fzY,w)
break
case"nightstand":d.bX(B.Td,B.fub,f,0.1)
d.cU(B.fzj,B.fvM,t)
d.cU(B.fBz,B.fv0,B.acJ)
d.cU(B.ftz,B.fwd,B.A4)
break
case"wardrobe":d.bX(B.ftH,B.fv7,f,0.1)
d.cU(B.fwq,B.fve,t)
d.bX(B.fxS,B.aQM,B.DD,0.8)
d.bX(B.fBI,B.aQM,B.DD,0.8)
break
case"desk":d.bX(B.aQ5,B.fvb,f,0.1)
d.cU(B.fAi,B.aQe,t)
d.cU(B.fut,B.aQe,t)
d.bX(B.ftL,B.fuu,B.abp,0.5)
d.cU(B.ftF,B.fvG,D.t4)
break
case"rug":d.iZ(B.fB5,B.fui,f,2)
d.cU(B.fwi,B.fAC,w)
break
case"sofa":d.bX(B.Td,B.fvY,f,0.05)
d.bX(B.ftx,B.fvZ,t,0.05)
d.bX(B.fAk,B.aQm,t,0.05)
d.bX(B.fuV,B.aQm,t,0.05)
d.cU(B.fAf,B.aQc,w)
d.cU(B.fu7,B.aQc,w)
break
case"armchair":d.bX(B.Td,B.fuI,f,0.05)
d.bX(B.ftw,B.fuJ,t,0.05)
d.cU(B.fAe,B.aQj,t)
d.cU(B.fu4,B.aQj,t)
break
case"coffee":d.bX(B.aQ4,B.fv4,f,0.2)
for(v=0;v<4;++v){w=B.d4a[v]
d.cU(new A.N(w.a,6.5,w.b),B.fuD,t)}d.bX(B.fx3,B.fw6,D.bW,0.5)
break
case"tvstand":d.bX(B.aQ7,B.fvl,f,0.1)
d.cU(B.fvW,B.fwU,t)
d.bX(B.ftG,B.fva,E.DY,0.7)
d.bX(B.fx6,B.fwM,D.fl,0.9)
d.cU(B.ftt,B.fw7,B.rI)
break
case"dining":d.bX(B.aQ5,B.fvm,f,0.2)
for(v=0;v<4;++v){w=B.czD[v]
d.cU(new A.N(w.a,13,w.b),B.fv_,t)}break
case"chair":d.bX(B.ftp,B.fuf,f,0.1)
d.bX(B.ftB,B.fud,f,0.1)
for(v=0;v<4;++v){w=B.cVX[v]
d.cU(new A.N(w.a,7.5,w.b),B.fus,t)}break
case"plant":d.pe(B.w4,B.aQ7,5,D.dj,10)
d.a23(B.ftq,8,B.aaD,5,8)
d.a23(B.fuZ,5,B.abs,4,8)
break
case"lamp":d.pe(B.w4,B.w5,4.5,B.rI,10)
d.pe(B.w5,B.ftO,0.7,B.rI,6)
d.cEV(B.ftM,B.ftR,6,B.A4,3.5,12)
break
case"console":d.bX(B.ftA,B.fv5,f,0.15)
d.cU(B.fxh,B.aQd,t)
d.cU(B.fwl,B.aQd,t)
d.cU(B.Td,B.fAt,t)
break
case"shelf":d.bX(B.ftD,B.fuU,f,0.1)
for(u=0;u<4;++u){t=10+u*15
d.cU(new A.N(0,t,1),B.fuN,B.rI)
w=D.o.F(u,2)
d.cU(new A.N(-8+w*6,t,2),B.fvt,[D.eM,D.dS,D.ff,D.dT][u])
d.cU(new A.N(4+w*4,t,2),B.fw8,[D.dT,D.ff,D.eM,D.dS][u])}break
default:d.cU(B.a7n,B.ftX,f)}},
fiR:function fiR(d){this.a=d},
fiL:function fiL(){},
fiM:function fiM(){},
fiN:function fiN(){},
fiO:function fiO(){},
fiP:function fiP(d){this.a=d},
fiQ:function fiQ(d){this.a=d},
fXZ(){var w=x.S
return new A.bOJ(C.ew([72],w),C.aX(w),C.aX(w),C.aX(w))},
hRz(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
aeX(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.nq(d)
a0.b=70
a0.iZ(B.fzG,B.fAI,B.bb2,4)
a0.c=1
a0.b=91
w=new A.fiW(a0)
w.$3(B.fwO,B.fwn,15)
w.$4$alongX(B.fAs,B.fyO,11,!1)
w.$4$alongX(B.fvp,B.fwu,11,!1)
w.$4$alongX(B.fAh,B.fwZ,6,!1)
w.$4$alongX(B.fvS,B.fyP,6,!1)
for(v=0;v<=12;++v)a0.aAZ(new A.N(-12+v*2,8.4,0),B.fzh,B.VL,!1,0.05)
a0.c=2
a0.b=92
u=new A.fiT(a0)
u.$2(B.cck,B.rU)
u.$2(B.d1E,B.ns)
u.$2(B.d5U,B.ns)
t=new A.fiS(a0)
t.$1(B.cLl)
t.$1(B.cQK)
a0.c=3
a0.b=93
s=new A.fiV(a0)
s.$1(B.cKm)
s.$2$col(B.cIR,B.wA)
s.$2$col(B.cI6,B.wA)
s.$1(B.cZO)
a0.c=4
a0.b=0
a0.d=0.22
a0.iZ(B.fwt,B.fyj,B.zT,4)
a0.iZ(B.fyh,B.aQH,B.zT,4)
a0.iZ(B.fwP,B.aQH,B.zT,4)
a0.iZ(B.fxo,B.aQL,B.zT,3)
a0.iZ(B.fBv,B.aQL,B.zT,3)
a0.d=1
a0.c=5
a0.e=0.3
a0.b=0
a0.q3(B.fAd,B.fwr,B.b8W,0.1,4)
a0.b=71
a0.bX(B.fzK,B.fzi,B.ab7,0.5)
a0.cU(B.fBf,B.fxd,B.DM)
r=[72,73,74,75,76]
for(q=a1.d,p=a1.e,v=0;v<5;++v){o=D.o.F(v,2)
n=D.o.an(v,2)
m=r[v]
l=q.t(0,m)
k=p.t(0,m)
a0.b=m
m=9.55+o*0.5
j=5.7-n*0.5
a0.bX(new A.N(m,j,-7.5),B.fwb,B.aei,0.3)
if(l)i=0
else i=k?-0.07:0.07
if(l)h=D.cb
else h=k?D.bp:D.bW
a0.bX(new A.N(m+0,j+i,-7.42),B.fx1,h,0.4)}a0.b=90
a0.bX(B.fyR,B.fvs,B.bhw,0.1)
a0.bX(B.fAv,B.fwG,B.Wf,0.1)
a0.bX(B.fBP,B.aQZ,B.Wf,0.1)
a0.bX(B.fwA,B.aQZ,B.Wf,0.1)
g=new A.fiU(a0)
g.$3(81,B.fvX,a1.x?B.wL:B.W0)
a0.b=81
a0.cU(B.fyS,B.aQT,B.DV)
a0.cU(B.fxL,B.aQT,B.DV)
g.$5$h$w(82,B.fBi,F.Wa,0.65,0.4)
a0.b=82
a0.bX(B.fA0,B.fvr,B.abN,0.4)
f=!q.t(0,72)
a0.b=83
a0.e9(B.fzU,B.aQw,0.5,B.bfs,0.4,14)
a0.b7N(B.fAV,0.3,f?A0.W3:B.baL,0.7)
if(f){a0.b=0
a0.d=0.22
a0.iY(B.aQp,1.5,B.Vn,4,10,0)
a0.d=1}a0.b=94
a0.bX(B.fAO,B.aR0,B.m0,0.1)
a0.bX(B.fz2,B.aR0,B.m0,0.1)
a0.bX(B.fBg,B.fwR,B.m0,0.1)
a0.q3(B.fyu,B.fAX,B.E4,0.5,2)
a0.bX(B.fzI,B.fBL,B.DT,0.7)
a0.b=85
a0.jL(A.G3(B.cU3,0.2,6),0.055,B.kx,!1,0.9,8)
a0.b=84
a0.bX(B.fB3,B.fA8,B.W0,0.3)
a0.cU(B.fxv,B.fBe,a1.y?B.ack:B.aec)
a0.b=86
a0.jL(A.G3(B.cLN,0.35,3),0.11,B.p8,!1,0.3,8)
a0.b=87
a0.e9(B.fy1,B.fzM,0.19,a1.c?B.Va:B.bdB,0.3,8)
a0.b=88
a0.bX(B.fv9,B.fwf,B.A_,0.7)
a0.K5(B.fzF,B.aQU,0.72,B.A_,0.55,0.7,16)
a0.e9(B.aQU,B.fyB,0.78,B.bf5,0.7,16)
a0.b=89
a0.e9(B.fAy,B.aQr,0.85,B.b4O,0.6,18)
a0.e9(B.aQr,B.fyi,0.5,B.b4P,0.5,12)
a0.cU(B.fz8,B.fBF,B.bdv)
a0.b=95
for(p=a1.f,m=a1.r,v=0;v<3;++v){e=B.csi[v]
if(m.t(0,v)){j=e.a
i=e.b
a0.cU(new A.N(j,i,-7.82),B.fzW,B.zT)
a0.cU(new A.N(j,i,-7.79),B.fym,B.b7F)}else if(p.t(0,v)){j=e.a
i=e.b
a0.cU(new A.N(j,i,-7.82),B.fuq,B.adk)
a0.cU(new A.N(j,i,-7.8),B.fz0,B.bhM)}}if(a1.w){a0.b=96
a0.e9(B.fyo,B.fxZ,0.1,D.dj,0.7,8)}a0.e=0
a0.c=6
a0.b=0
a0.d=0.4
a0.beF(B.aQk,B.aQS,B.a7t,B.a7r,B.abd,B.fyL,!0)
a0.beF(B.aQP,B.aQX,B.a7r,B.a7t,B.abd,B.fA_,!0)
a0.bfJ(B.aQk,B.aQX,B.a7r,B.abt)
a0.bfJ(B.aQS,B.aQP,B.a7t,B.abt)
a0.d=1
p=q.t(0,72)?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
q=q.t(0,72)?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
m=a1.b
j=m&&!a1.c?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
m=m&&!a1.c?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new A.zj(d,C.E([70,B.dUO,91,B.dUd,92,B.dUx,93,B.dUF,71,B.dUS,72,new A.db("Living room breaker",p,B.fBB,3.5),73,B.dUp,74,B.dUH,75,B.dU4,76,B.dUA,81,B.dUC,82,B.dTW,83,new A.db("Ceiling light",q,B.aQw,7),84,B.dUI,85,B.dU6,86,new A.db("P-trap under the sink",j,B.fzE,4.5),87,new A.db("Slip nut (leaking?)",m,B.aQy,3.5),88,B.dTT,89,B.dUG,90,B.dUK,94,B.dUo,95,B.dUM,96,B.dTY],x.S,x.q),B.GB,B.vu)},
hbO(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.nq(p)
o.c=5
o.e=0.8
if(d.w)for(w=e*1.5,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.iY(new A.N(3.4+Math.sin(v*2)*0.12,3.3-u*u*2.8,-7.7),0.05,D.K4,3,6,0.9)}if(d.as){u=D.k.F(e*1.1,1)
o.iY(new A.N(3,3.9-u*u*0.7,-6.95),0.05,B.Vk,3,6,0.9)}if(d.Q)for(w=e*1.6,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.iY(new A.N(8.2+Math.sin(v*1.7)*0.15,2.2-u*1.5,-7.2),0.05,B.Vk,3,6,0.9)}if(d.at){o.d=0.55
o.bX(B.fwz,B.fxr,B.bfi,0.8)
o.d=1}if(d.x)for(w=e*2,t=e*6,v=0;v<8;++v){u=D.k.F(w+v*0.13,1)
s=v*2.4+t
r=Math.cos(s)
s=Math.sin(s)
q=C.aq(E.Wi,E.Wn,1-u)
q.toString
o.iY(new A.N(-3.2+r*u*0.7,1.3+s*u*0.7,-7.6+u*0.3),0.05,q,3,5,0)}if(d.z&&!d.d.t(0,72)){o.b=0
o.d=D.k.D((Math.sin(e*17)+Math.sin(e*29)+2)/4*0.5,0,0.6)
o.iY(B.aQp,1.5,B.Vn,4,10,0)
o.d=1}if(d.b&&!d.c){for(w=e*1.3,v=0;v<5;++v){u=D.k.F(w+v*0.2,1)
o.iY(new A.N(3.05,1.45-u*u*1.4,-6.95),0.05,B.KG,3,6,0.9)}o.d=0.5
o.bX(B.fwm,new A.N(0.7+0.3*Math.sin(e),0.02,0.5),B.KG,0.9)
o.d=1}return p},
bOJ:function bOJ(d,e,f,g){var _=this
_.a=5
_.b=!0
_.c=!1
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=!1},
fiW:function fiW(d){this.a=d},
fiT:function fiT(d){this.a=d},
fiS:function fiS(d){this.a=d},
fiV:function fiV(d){this.a=d},
fiU:function fiU(d){this.a=d},
mU(d,e,f,g){var w
try{G.dE(d,"",e,0,f,g)}catch(w){}},
y4(){A.mU(880,80,0.25,"tri")
C.bN(R.af0,new A.fjQ(),x.H)},
htu(){return new A.Mw(null)},
WK(d,e,f,g,h,i,j,k,l,m,n,o,p,q){return new A.b4H(o,d,n,m,g,e,j,k,f,h,p,q,i,l,null)},
Q4(d,e,f,g,h){var w=null,v=g?e.j(0.25):D.w.j(0.5),u=C.m(18),t=C.I(g?e:D.b5,D.r,1),s=x.p,r=C.a([],s)
D.d.v(r,C.a([C.W(f,g?e:D.ad,w,w,w,16),D.eb],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:D.ad,w,w,w,w,w,w,w,w,12,w,w,D.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aE(w,C.p(w,C.A(r,D.m,w,D.e,D.Q,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.h5,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a9)},
y3(d,e,f,g){var w=null,v=f==null,u=v?D.dq:g.j(0.9),t=C.m(14),s=C.W(e,v?D.c_:D.w,w,w,w,18)
return C.D(C.aE(w,C.p(w,C.A(C.a([s,D.bo,new C.dm(1,D.ci,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.c_:D.w,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),D.L,w,w),w)],x.p),D.m,w,D.ba,D.j,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,w,w,w,D.uR,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a9),1)},
fA2(d,e,f,g){return C.bY(E.qv,null,new A.fA4(e,g,f),d,!0,!0,!0,D.nV,!1,!1,x.H)},
fjQ:function fjQ(){},
Je:function Je(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Mw:function Mw(d){this.a=d},
bhn:function bhn(){this.d=!1
this.c=this.a=null},
dIZ:function dIZ(d){this.a=d},
dJ1:function dJ1(d){this.a=d},
dJ2:function dJ2(d){this.a=d},
dJ0:function dJ0(d){this.a=d},
dJ3:function dJ3(d){this.a=d},
dJ_:function dJ_(d){this.a=d},
dJ5:function dJ5(d){this.a=d},
dJ6:function dJ6(d){this.a=d},
dJ7:function dJ7(d){this.a=d},
dJ8:function dJ8(d){this.a=d},
dJ9:function dJ9(d){this.a=d},
dJa:function dJa(d){this.a=d},
dJb:function dJb(d){this.a=d},
dJc:function dJc(d,e){this.a=d
this.b=e},
dJ4:function dJ4(d){this.a=d},
b4H:function b4H(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.at=o
_.ax=p
_.ay=q
_.a=r},
coy:function coy(d){this.a=d},
coz:function coz(d){this.a=d},
fA4:function fA4(d,e,f){this.a=d
this.b=e
this.c=f},
fA3:function fA3(){},
AT:function AT(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bQO:function bQO(d){this.a=d},
ab6:function ab6(d,e){this.c=d
this.a=e},
axZ:function axZ(d){var _=this
_.d=$
_.e=d
_.r=_.f=$
_.w=""
_.x=0
_.y=null
_.z=!1
_.Q=0
_.c=_.a=_.as=null},
d1c:function d1c(d,e,f){this.a=d
this.b=e
this.c=f},
d1d:function d1d(d){this.a=d},
d1b:function d1b(d){this.a=d},
d15:function d15(d){this.a=d},
d14:function d14(d){this.a=d},
d16:function d16(d){this.a=d},
d17:function d17(d){this.a=d},
d18:function d18(d,e){this.a=d
this.b=e},
d19:function d19(d,e){this.a=d
this.b=e},
d1a:function d1a(d){this.a=d},
d1e:function d1e(d){this.a=d},
d1m:function d1m(){},
d1w:function d1w(d,e,f){this.a=d
this.b=e
this.c=f},
d1n:function d1n(d){this.a=d},
d1l:function d1l(d){this.a=d},
d1o:function d1o(d){this.a=d},
d1k:function d1k(d){this.a=d},
d1p:function d1p(d){this.a=d},
d1q:function d1q(d){this.a=d},
d1r:function d1r(d,e){this.a=d
this.b=e},
d1j:function d1j(d,e){this.a=d
this.b=e},
d1s:function d1s(d){this.a=d},
d1i:function d1i(d){this.a=d},
d1t:function d1t(d){this.a=d},
d1h:function d1h(d){this.a=d},
d1u:function d1u(d){this.a=d},
d1g:function d1g(d){this.a=d},
d1v:function d1v(d){this.a=d},
d1f:function d1f(d){this.a=d},
aDV:function aDV(d){this.a=d},
aDW:function aDW(d){var _=this
_.d=d
_.f=_.e=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
eJj:function eJj(d,e,f){this.a=d
this.b=e
this.c=f},
eJk:function eJk(d){this.a=d},
eJi:function eJi(d){this.a=d},
eJc:function eJc(d){this.a=d},
eJd:function eJd(d,e){this.a=d
this.b=e},
eJe:function eJe(d,e){this.a=d
this.b=e},
eJf:function eJf(d,e){this.a=d
this.b=e},
eJg:function eJg(d){this.a=d},
eJh:function eJh(d,e){this.a=d
this.b=e},
eJo:function eJo(){},
eJs:function eJs(d,e){this.a=d
this.b=e},
eJp:function eJp(d){this.a=d},
eJq:function eJq(d,e){this.a=d
this.b=e},
eJn:function eJn(d,e){this.a=d
this.b=e},
eJr:function eJr(d){this.a=d},
eJm:function eJm(d){this.a=d},
eJl:function eJl(){},
ayd:function ayd(d){this.a=d},
aye:function aye(d){var _=this
_.d=d
_.f=_.e=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
d46:function d46(d,e,f){this.a=d
this.b=e
this.c=f},
d47:function d47(d){this.a=d},
d45:function d45(d){this.a=d},
d3Z:function d3Z(d){this.a=d},
d41:function d41(d){this.a=d},
d42:function d42(d,e){this.a=d
this.b=e},
d43:function d43(d,e){this.a=d
this.b=e},
d40:function d40(d){this.a=d},
d44:function d44(d,e){this.a=d
this.b=e},
d4_:function d4_(d){this.a=d},
d4b:function d4b(){},
d4h:function d4h(d,e){this.a=d
this.b=e},
d4c:function d4c(d){this.a=d},
d4d:function d4d(d){this.a=d},
d4a:function d4a(d){this.a=d},
d4f:function d4f(d,e){this.a=d
this.b=e},
d49:function d49(d,e){this.a=d
this.b=e},
d4e:function d4e(d){this.a=d},
d4g:function d4g(d){this.a=d},
d48:function d48(d){this.a=d},
az6:function az6(d){this.a=d},
az7:function az7(d){var _=this
_.d=d
_.f=_.e=$
_.r=0
_.w=""
_.x=null
_.y=!1
_.c=_.a=_.z=null},
dba:function dba(d,e,f){this.a=d
this.b=e
this.c=f},
dbb:function dbb(d){this.a=d},
db9:function db9(d){this.a=d},
db4:function db4(d){this.a=d},
db6:function db6(d,e){this.a=d
this.b=e},
db7:function db7(d,e){this.a=d
this.b=e},
db8:function db8(d,e){this.a=d
this.b=e},
db5:function db5(d){this.a=d},
dbj:function dbj(d,e){this.a=d
this.b=e},
dbe:function dbe(d,e){this.a=d
this.b=e},
dbg:function dbg(d){this.a=d},
dbf:function dbf(d){this.a=d},
dbh:function dbh(d){this.a=d},
dbd:function dbd(d){this.a=d},
dbi:function dbi(d){this.a=d},
dbc:function dbc(d,e){this.a=d
this.b=e},
jw:function jw(d,e){this.a=d
this.b=e},
LT:function LT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5E:function a5E(d){this.a=d},
c4t:function c4t(d){this.a=d},
h2P(){var w=x.N
return new A.cfh(C.aX(w),C.E(["n1",!1,"n2",!1],w,x.y),C.V(x.S,w))},
i19(d,e,f){var w,v
if(!f.c.t(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
fzr(){var w,v,u=C.a([B.aQh,B.fxU],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new A.N(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}D.d.v(u,A.G3(B.cVg,1,6))
return u},
bz2(d){var w,v,u,t,s="trap",r=C.a([],x.z),q=new A.nq(r)
q.b=49
q.q3(B.ful,B.fv2,B.m0,0.1,2)
q.q3(B.fBt,B.fun,B.m0,0.1,2)
q.b=47
q.iZ(B.fyK,B.fv3,B.uE,3)
q.iZ(B.fuG,B.fuo,B.uE,3)
q.b=46
q.q3(B.fvu,B.fzl,B.E4,0.5,3)
q.b9I(B.fAc,B.aQ4,6.5,B.DT,!0,0.7,20)
q.e9(B.fzB,B.fxF,1.5,B.kx,0.85,14)
q.b=48
q.a2B(B.a7u,B.fwN,0.92,B.p8,!1,!0,0.3,14)
q.cPV(B.a7u,B.fB_,1,0.72,B.p8,0.3)
w=new A.fjw(d,q)
w.$5(41,B.a1c,B.kx,0.85,"tail")
w.$5(42,A.fzr(),B.p8,0.3,s)
w.$5(43,B.a21,B.p8,0.3,"arm")
w=new A.fjv(d,q)
v=d.a
w.$6(44,"n1",B.a7q,B.w5,B.fwX,v.t(0,"tail")&&v.t(0,s))
w.$6(45,"n2",B.a7s,B.Te,B.fA7,v.t(0,s)&&v.t(0,"arm"))
if(v.t(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=A.fzr()
w=C.T(u).k("a2<1>")
t=C.B(new C.a2(u,new A.fju(),w),w.k("H.E"))
if(t.length>1)q.aGv(t,0.4092,B.bhx,!1,!0,0.6,8)
q.d=1
q.e=0}return new A.zj(r,C.E([41,B.dU8,42,B.dUa,43,B.dUE,44,B.dUs,45,B.dUP,46,B.dUf,47,B.dUm,48,B.dTR,49,B.dUc],x.S,x.q),B.GB,B.vu)},
i_8(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.nq(p),n=d.d
if(n.length!==0){w=n==="n1"?B.fBH:B.fAF
for(n=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=D.k.F(n+s*0.2,1)
o.iY(new A.N(v,u+(-r*6*r-r*1.5),t),0.22*(1-r*0.3),B.KG,3,6,0.9)}}else if(d.c){n=x.x
v=C.B(B.a1c,n)
u=A.fzr()
D.d.v(v,C.da(u,1,null,C.T(u).c))
D.d.v(v,C.da(B.a21,1,null,n))
for(n=e*0.45,s=0;s<18;++s){r=D.k.F(n+s/18,1)
q=D.o.D(D.k.bw(r*(v.length-1)),0,v.length-2)
u=v.length
o.iY(A.zB(v[q],v[q+1],r*(u-1)-q),0.38,B.bh0,3,6,0.9)}for(n=e*2.2,s=0;s<6;++s)o.iY(new A.N(0,14-D.k.F(n+s/6,1)*5.4,0),0.3,B.Vk,3,6,0.9)}return p},
af8(d){switch(d){case 61:return B.fuk
case 62:return B.fAD
case 63:return B.fye
default:return B.fy4}},
fRx(d){var w=d==="hot",v=A.af8(w?61:62),u=A.af8(w?63:64),t=w?-1:1
return A.agl(C.a([v,v.ae(0,new A.N(t*0.6,2.2,1.2)),A.zB(v,u,0.5).ae(0,new A.N(t*1.4,0,2.6)),u.ae(0,new A.N(-t*0.2,-2,1)),u],x.o),6)},
aNa(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.nq(f)
e.b=67
e.iZ(B.fuj,B.fuT,B.uE,3)
e.b=66
e.q3(B.fxT,B.fAZ,B.E4,0.5,3)
e.pe(B.fzV,B.fyW,5.5,E.DY,16)
e.b=65
e.e9(B.fAP,B.aQO,3.4,B.kx,0.9,20)
e.jL(A.G3(B.d_m,1.4,6),0.5,B.kx,!0,0.9,12)
for(w=0;w<2;++w){v=B.cVZ[w]
u=v*1.2
e.e9(new A.N(u,15.5,-3.6),new A.N(u,17.7,-3.6),0.38,B.kx,0.9,10)
t=v<0?B.rU:B.ns
e.e9(new A.N(u,17.7,-3.6),new A.N(u,18.6,-3.6),0.6,t,0.6,12)}for(u=[B.edM,B.e9G],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.e9(new A.N(v,15.3,-3.6),new A.N(v,11.4,-3.6),0.45,B.kx,0.9,10)
e.e9(new A.N(v,11.4,-3.6),new A.N(v,10.7,-3.6),0.3,B.bdf,0.6,8)
e.yN(new A.N(v,11.3,-3.6),new A.N(v,11.9,-3.6),0.78,0.48,B.bf3,0.7,8)}for(u=[B.euK,B.ews],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.e9(new A.N(v,-1.5,-6),new A.N(v,-1.5,-3.6),0.4,B.JW,0.7,12)
e.e9(new A.N(v,-1.5,-4.4),new A.N(v,0.7,-4.4),0.78,B.rK,0.8,12)
e.e9(new A.N(v,0.7,-4.4),new A.N(v,1.5,-3.6),0.38,B.rK,0.8,10)
e.e9(new A.N(v,-0.2,-4.4),new A.N(v,-0.2,-3.1),0.2,B.aaU,0.7,8)
e.e9(new A.N(v,-0.2,-3.1),new A.N(v,-0.2,-2.8),0.95,t.c,0.5,12)
e.yN(new A.N(v,1.2,-3.6),new A.N(v,1.9,-3.6),0.78,0.4,B.rK,0.8,8)}for(u=x.o,w=0;w<2;++w){s=B.d1I[w]
t=s==="hot"
r=t?B.ctc:B.ctp
q=C.T(r).k("a2<1>")
p=C.B(new C.a2(r,new A.fiK(d,s),q),q.k("H.E"))
e.b=t?68:69
o=t?B.rU:B.ns
t=p.length
if(t===2){n=A.fRx(s)
e.jL(n,0.34,B.Kx,!1,0.7,8)
m=n.length/2|0
e.jL(C.a([n[m-1],n[m],n[m+1]],u),0.4,o,!1,0.4,8)
for(t=r.length,l=0;l<t;++l){k=A.af8(r[l])
q=k.a+0
j=k.b
i=k.c+0
e.yN(new A.N(q,j+-0.2,i),new A.N(q,j+0.6,i),0.62,0.3,B.rK,0.8,8)}}else if(t===1){k=A.af8(D.d.gL(p))
h=D.d.gL(p)===D.d.gL(r)?1:-1
t=k.a+0
q=k.b
j=k.c
e.jL(C.a([k,new A.N(t,q+h*1.4,j+1),new A.N(t,q+h*3,j+2.4)],u),0.34,B.Kx,!1,0.7,8)
j+=0
e.yN(new A.N(t,q+-0.2,j),new A.N(t,q+0.6,j),0.62,0.3,B.rK,0.8,8)}}if(d.r){e.b=0
e.d=0.5
for(u=d.e,w=0;w<4;++w){g=B.a1X[w]
t=g.a
if(u.h(0,t)!=null)continue
t=A.af8(t)
q=g.c.t(0,"hot")?B.rU:B.ns
e.iY(new A.N(t.a+0,t.b+0,t.c+0.9),0.65,q,4,8,0.1)}e.d=1}return new A.zj(f,C.E([61,B.dU_,62,B.dU1,63,B.dTV,64,B.dU2,65,B.dUn,66,B.dUj,67,B.dTS,68,B.dUT,69,B.dUq],x.S,x.q),B.GB,B.vu)},
hR6(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.nq(n)
if(!d.f)return n
w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"
t=new A.fkX(e,m)
if(v){s=A.fRx("hot")
for(r=e*0.5,q=0;q<10;++q){p=D.k.F(r+q/10,1)
o=D.o.D(D.k.bw(p*(s.length-1)),0,s.length-2)
m.iY(A.zB(s[o],s[o+1],p*(s.length-1)-o),0.2,D.K4,3,6,0.9)}}else if(w.h(0,61)==null)t.$2(61,D.K4)
if(u){s=A.fRx("cold")
for(w=e*0.5,q=0;q<10;++q){p=D.k.F(w+q/10,1)
o=D.o.D(D.k.bw(p*(s.length-1)),0,s.length-2)
m.iY(A.zB(s[o],s[o+1],p*(s.length-1)-o),0.2,B.VQ,3,6,0.9)}}else if(w.h(0,62)==null)t.$2(62,B.VQ)
if(v&&u)for(w=e*2,q=0;q<8;++q){p=D.k.F(w+q/8,1)
r=C.aq(B.bh4,B.VQ,0.5)
r.toString
m.iY(new A.N(0,21-p*6.5,1.6),0.26,r,3,6,0.9)}return n},
fRq(d){return D.d.de(B.a1X,new A.fkW(d))},
cfh:function cfh(d,e,f){var _=this
_.a=d
_.b=e
_.c=!1
_.d=""
_.e=f
_.r=_.f=!1},
Ek:function Ek(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fjw:function fjw(d,e){this.a=d
this.b=e},
fjv:function fjv(d,e){this.a=d
this.b=e},
fju:function fju(){},
fiK:function fiK(d,e){this.a=d
this.b=e},
fkX:function fkX(d,e){this.a=d
this.b=e},
fkW:function fkW(d){this.a=d},
fMU(d,e,f){var w=x.N
w=new A.cf7(e,d,C.aX(w),C.V(w,x.S),C.aX(w))
w.buT(d,e,f)
return w},
hb9(b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=C.a([],x.z),b3=new A.nq(b2),b4=C.V(x.S,x.q),b5=C.a([],x.E),b6=b7.c
b6===$&&C.c()
w=b6.a==="bathroom"
v=w?28:0
b3.b=9199
b3.iZ(B.fAm,B.fBs,B.b7i,4)
b3.iZ(B.fzk,B.fAB,B.Vi,4)
b3.iZ(new A.N(v+19.8+0.6,24,16),B.fxE,B.uE,2)
b4.n(0,9199,B.dUb)
b3.b=9198
b3.bX(new A.N(v,0.6,10),B.fAN,B.m0,0.1)
b3.bX(new A.N(v,29.4,18.6),B.fxq,B.m0,0.1)
b3.bX(new A.N(v-19.4,13.6,10.5),B.fBh,B.m0,0.1)
for(u=[B.ezc,B.ez8,B.ey7,B.ey4],t=0;t<4;++t){s=u[t].a
b3.bX(new A.N(v+s[0],33,s[1]),new A.N(s[2],2.4,s[3]),B.E4,0.5)}b3.a2B(new A.N(v,27,8),new A.N(v,34.3,8),8,B.ae2,!1,!0,0.7,20)
b3.e9(new A.N(v,27,8),new A.N(v,27.2,8),8,B.b9H,0.5,20)
b3.pe(new A.N(v,27.1,8),new A.N(v,27.3,8),1.4,B.rI,12)
b3.a2B(new A.N(v+15,23.6,8),new A.N(v+19.4,23.6,8),0.92,B.p8,!1,!0,0.3,12)
b4.n(0,9198,B.dUB)
b3.b=9400
b3.e9(new A.N(-56,18,0),new A.N(-56,18,6),1.5,B.rK,0.8,12)
u=b7.r?B.ns:D.bp
b3.e9(new A.N(-57,18,6),new A.N(-55,18,6.5),4,u,0.5,14)
b3.e9(new A.N(-56,16,0),new A.N(-56,20,0),1,B.JW,0.7,10)
u=b7.r?"The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.":"The water is OFF. Turn it ON to test your work."
b4.n(0,9400,new A.db("Main water valve",u,new A.N(-56,18,4),22))
u=b7.r
s=u?"MAIN WATER: ON":"MAIN WATER: OFF"
u=u?D.dS:D.bp
b5.push(new A.vp(new A.N(-56,24,6),s,u))
r=new A.fjt(b3)
u=v-8
r.$1(u)
s=v+8
r.$1(s)
if(w)r.$1(-40)
q=new A.N(v,21,8)
p=new A.fjr(q)
o=new A.fjl(b3,b7)
n=new A.fjm(b3,b7)
m=new A.fjs(b7,b4,b9,b8,b5)
l=b6.c
for(b6=l.length,k=b7.x,j=b7.e,i=b7.f,h=x.o,t=0;t<b6;++t){g=l[t]
f=g.a
e=j.t(0,f)
if(e){d=b7.uH(0,f)
a0=i.h(0,f)
if(a0==null)a0=0
a1=d.r-a0>0}else a1=!1
a2=D.d.cI(l,g)
a3=9100+a2
k.t(0,f)
switch(f){case"flange":a4=new A.N(-30,0.3,14)
if(e){b3.b=a3
b3.e9(a4,new A.N(-30,0.8999999999999999,14),5.5,B.p8,0.4,18)
b3.yN(new A.N(-30,0.8,14),new A.N(-30,1.2,14),5.5,3.2,B.rK,0.8,18)}else n.$3(f,new A.N(-30,0.8,14),B.ftZ)
m.$3(g,a4,"Flange spot")
break
case"wax":a4=new A.N(-30,1.2,14)
if(e){b3.b=a3
b3.yN(a4,new A.N(-30,2.3,14),4.2,2.4,B.bhU,0.2,18)}else n.$3(f,new A.N(-30,1.7,14),B.fzu)
m.$3(g,a4,"Wax ring spot")
break
case"toilet":if(e){b3.b=a3
b3.K5(new A.N(-30,0.5,14),new A.N(-30,16,14),8.5,B.A_,6,0.8,20)
b3.e9(new A.N(-30,16,14),new A.N(-30,17,14),9.5,B.KD,0.8,20)
b3.bX(new A.N(-30,22,4.5),B.aQa,B.A_,0.8)
b3.bX(new A.N(-30,29.2,4.5),B.fww,B.KD,0.8)}else{b3.b=a3
b3.d=0.32
b3.pe(new A.N(-30,0.5,14),new A.N(-30,17,14),8.5,D.b2,16)
b3.cU(new A.N(-30,22,4.5),B.aQa,D.b2)
b3.d=1}m.$3(g,new A.N(-30,12,12),"Toilet spot")
break
case"bolts":if(e){for(f=9200+a2*2,a5=0;a5<2;++a5){a6=B.avJ[a5]
b3.b=f+(a6<0?0:1)
d=-30+a6
b3.e9(new A.N(d,0.5,17),new A.N(d,3.6,17),0.45,B.DT,0.8,8)
a0=a1?D.cw:B.DT
b3.e9(new A.N(d,3.4,17),new A.N(d,4.6,17),1.2,a0,0.8,6)}f=a1?"The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.":"The toilet is bolted down."
b4.n(0,a3,new A.db(g.c,f,new A.N(-30,3,17),20))}else for(a5=0;a5<2;++a5){a6=B.avJ[a5]
b3.b=a3
b3.d=0.4
f=-30+a6
b3.pe(new A.N(f,0.5,17),new A.N(f,4.6,17),1.2,D.b2,8)
b3.d=1}m.$3(g,new A.N(-30,3,17),"Bolts")
break
case"tvalve":A.fQZ(b3,a3,new A.N(-40,8,1.6),e,B.ns,new A.fji(n,g,-30))
m.$3(g,new A.N(-40,8,2),"Valve")
break
case"those":if(e){b3.b=a3
b3.jL(A.agl(C.a([new A.N(-40,10,1.6),new A.N(-42,14,3.5),new A.N(-36,17,3.6),new A.N(-32,21,2.5)],h),6),0.55,B.Kx,!1,0.7,8)
b3.jL(C.a([new A.N(-36.8,15.5,3.6),new A.N(-35,16.4,3.6)],h),0.62,B.ns,!1,0.4,8)
if(a1)b3.pe(new A.N(-40,10,1.6),new A.N(-40,11.2,1.6),0.9,D.cw,8)}else o.$3$r(f,A.agl(C.a([new A.N(-40,10,1.6),new A.N(-42,14,3.5),new A.N(-36,17,3.6),new A.N(-32,21,2.5)],h),6),0.9)
m.$3(g,new A.N(-36,15,3),"Toilet hose")
break
case"faucet":if(e){b3.b=a3
b3.e9(new A.N(v,34.2,8),new A.N(v,34.6,8),3.6,B.kx,0.9,20)
b3.jL(A.G3(C.a([new A.N(v,34.6,8),new A.N(v,40,8),new A.N(v,43,10),new A.N(v,43,14),new A.N(v,41.2,14.6)],h),1.4,6),0.5,B.kx,!0,0.9,10)
for(a5=0;a5<2;++a5){a6=E.avH[a5]
f=v+a6
b3.e9(new A.N(f,34.6,8),new A.N(f,36.6,8),0.5,B.kx,0.9,8)
d=a6<0?B.rU:B.ns
b3.e9(new A.N(f,36.6,8),new A.N(f,37.6,8),0.8,d,0.6,10)}for(a5=0;a5<2;++a5){f=v+B.d4k[a5]
b3.e9(new A.N(f,34,8),new A.N(f,28.4,8),0.45,B.kx,0.9,8)}}else n.$3(f,new A.N(v,38,9),B.ftY)
m.$3(g,new A.N(v,38,8),"Faucet spot")
break
case"vhot":A.fQZ(b3,a3,new A.N(u,8,1.6),e,B.rU,new A.fjj(n,g,v))
m.$3(g,new A.N(u,8,2),"Hot valve")
break
case"vcold":A.fQZ(b3,a3,new A.N(s,8,1.6),e,B.ns,new A.fjk(n,g,v))
m.$3(g,new A.N(s,8,2),"Cold valve")
break
case"hhot":case"hcold":a7=f==="hhot"
a8=a7?-1:1
d=v+a8*3
a9=A.agl(C.a([new A.N(v+a8*8,10.5,1.8),new A.N(v+a8*9,16,3.5),new A.N(v+a8*6,22,4.2),new A.N(d,27.5,6),new A.N(d,28.6,8)],h),6)
if(e){b3.b=a3
b3.jL(a9,0.5,B.Kx,!1,0.7,8)
b0=a9.length/2|0
f=C.a([a9[b0-1],a9[b0],a9[b0+1]],h)
b3.jL(f,0.58,a7?B.rU:B.ns,!1,0.4,8)
if(a1){f=D.d.gL(a9)
d=D.d.gL(a9)
b3.pe(f,new A.N(d.a+0,d.b+1.4,d.c+0),0.9,D.cw,8)
d=D.d.gam(a9)
b3.pe(new A.N(d.a,d.b-1.4,d.c),D.d.gam(a9),0.9,D.cw,8)}}else o.$3$r(f,a9,0.9)
f=a9[a9.length/2|0]
m.$3(g,f,a7?"Hot hose":"Cold hose")
break
case"tail":case"trap":case"arm":d=f==="tail"
if(d)a0=B.a1c
else a0=f==="trap"?A.fzr():B.a21
b1=p.$1(a0)
if(e){b3.b=a3
a0=d?B.kx:B.p8
b3.a59(b1,0.66,a0,!1,!0,!0,d?0.85:0.3,12)}else o.$3$r(f,b1,0.78)
a0=J.a8(b1)
a0=a0.h(b1,a0.gM(b1)/2|0)
if(d)f="Tailpiece"
else f=f==="trap"?"P-trap":"Trap arm"
m.$3(g,a0,f)
break}}b6=new A.fjp(l,b7,b3,b4)
b6.$4("trap",q.ae(0,B.a7q),B.w5,0)
b6.$4("arm",q.ae(0,B.a7s),B.Te,1)
return new A.zj(b2,b4,b5,B.vu)},
fQZ(d,e,f,g,h,i){if(!g){i.$0()
return}d.b=e
d.e9(f.ae(0,B.fzv),f.ae(0,B.aQN),0.9,B.rK,0.8,12)
d.e9(f.ae(0,B.aQN),f.ae(0,B.fxm),0.45,B.rK,0.8,10)
d.e9(f.ae(0,B.fAK),f.ae(0,B.aR1),0.3,B.aaU,0.7,8)
d.e9(f.ae(0,B.aR1),f.ae(0,B.fB4),1.2,h,0.5,12)},
i_2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.nq(f),d=a0.x
if(d.a===0)return f
w=a0.c
w===$&&C.c()
v=new A.fzg(w.a==="bathroom"?28:0,-30)
for(d=C.ea(d,d.r,C.a3(d).c),u=d.$ti.c,t=a0.e;d.C();){s=d.d
if(s==null)s=u.a(s)
r=v.$1(s)
q=D.d.iw(w.c,new A.fzf(s)).b==="valve"||!t.t(0,s)
s=r.a
p=r.b
o=r.c
n=0
for(;;){if(!(n<(q?10:5)))break
m=q?1.8:1.2
l=q?10:5
k=D.k.F(a1*m+n/l,1)
l=Math.sin(n*2.1)
m=q?3:0.6
j=q?4:-0.5
i=q?14:8
h=q?6:0.8
g=q?0.5:0.35
e.iY(new A.N(s+l*k*m,p+(k*j-k*k*i),o+(1.5+k*h)),g,B.KG,3,6,0.9);++n}}return f},
n8:function n8(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
VS:function VS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cf7:function cf7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=g
_.r=!0
_.w=0
_.x=h
_.y=!1},
cfb:function cfb(d){this.a=d},
cfc:function cfc(d){this.a=d},
cf8:function cf8(d){this.a=d},
cfd:function cfd(d){this.a=d},
cfe:function cfe(d){this.a=d},
cff:function cff(){},
cfg:function cfg(){},
cf9:function cf9(d){this.a=d},
cfa:function cfa(d){this.a=d},
fjt:function fjt(d){this.a=d},
fjr:function fjr(d){this.a=d},
fjl:function fjl(d,e){this.a=d
this.b=e},
fjo:function fjo(d){this.a=d},
fjm:function fjm(d,e){this.a=d
this.b=e},
fjn:function fjn(d){this.a=d},
fjs:function fjs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fji:function fji(d,e,f){this.a=d
this.b=e
this.c=f},
fjj:function fjj(d,e,f){this.a=d
this.b=e
this.c=f},
fjk:function fjk(d,e,f){this.a=d
this.b=e
this.c=f},
fjp:function fjp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fjq:function fjq(d){this.a=d},
fzg:function fzg(d,e){this.a=d
this.b=e},
fzf:function fzf(d){this.a=d},
US:function US(d,e){this.d=d
this.a=e},
aCD:function aCD(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x=""
_.y=0
_.z=null
_.as=_.Q=!1
_.c=_.a=_.at=null},
edc:function edc(d,e,f){this.a=d
this.b=e
this.c=f},
edd:function edd(d){this.a=d},
edb:function edb(d){this.a=d},
ed5:function ed5(d){this.a=d},
ede:function ede(d){this.a=d},
ecY:function ecY(d,e){this.a=d
this.b=e},
ecZ:function ecZ(d,e){this.a=d
this.b=e},
ed_:function ed_(d){this.a=d},
ed4:function ed4(d){this.a=d},
ed2:function ed2(d){this.a=d},
ed3:function ed3(d,e){this.a=d
this.b=e},
eda:function eda(d){this.a=d},
ed1:function ed1(d,e,f){this.a=d
this.b=e
this.c=f},
ed0:function ed0(d,e,f){this.a=d
this.b=e
this.c=f},
edf:function edf(d){this.a=d},
edj:function edj(d,e){this.a=d
this.b=e},
edh:function edh(){},
edg:function edg(d){this.a=d},
edi:function edi(d,e){this.a=d
this.b=e},
ed9:function ed9(d){this.a=d},
ed7:function ed7(d,e){this.a=d
this.b=e},
ed6:function ed6(d,e){this.a=d
this.b=e},
ed8:function ed8(d,e){this.a=d
this.b=e},
kX(d){return D.d.iw(B.tH,new A.fHv(d))},
fNj(d,e,f,g){var w=x.S,v=x.N
w=new A.b3c(g,f,C.V(w,v),C.aX(w),C.aX(w),C.V(w,x.j),C.a([new A.Ww(),new A.Ww()],x.X),C.V(w,x.W),C.aX(w),C.V(w,v),C.aX(w),C.a([],x.s))
w.ceH(d,e)
return w},
hzk(d){var w
A:{if("tv"===d){w="The TV"
break A}if("lamp"===d){w="The lamp"
break A}if("toaster"===d){w="The toaster"
break A}w="The hair dryer"
break A}return w},
yo:function yo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fHv:function fHv(d){this.a=d},
pF:function pF(d,e,f){this.a=d
this.b=e
this.c=f},
Ww:function Ww(){var _=this
_.a=!1
_.b=0
_.c=!0
_.d=!1},
atz:function atz(d,e){var _=this
_.a=!1
_.b=d
_.c=e
_.e=_.d=!1},
aRW:function aRW(d,e){this.a=d
this.b=e
this.c=!1},
eC:function eC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b3c:function b3c(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=3
_.r=_.f=0
_.w=!1
_.x=f
_.y=g
_.z=h
_.Q=i
_.as=j
_.at=k
_.ay=_.ax=!1
_.ch=l
_.CW=m
_.cx=n
_.cy=o},
ck3:function ck3(){},
cka:function cka(d){this.a=d},
ckb:function ckb(d){this.a=d},
ckc:function ckc(d,e){this.a=d
this.b=e},
ckd:function ckd(d,e){this.a=d
this.b=e},
ckf:function ckf(d){this.a=d},
cke:function cke(d,e){this.a=d
this.b=e},
ck2:function ck2(d){this.a=d},
ck0:function ck0(){},
ck1:function ck1(d){this.a=d},
ck8:function ck8(){},
ck9:function ck9(){},
ck4:function ck4(){},
ck5:function ck5(d){this.a=d},
ck6:function ck6(d){this.a=d},
ckg:function ckg(d){this.a=d},
ck7:function ck7(d){this.a=d},
fMc(d,e,f){return new A.UV(e,f,d,null)},
kT:function kT(d,e,f){this.a=d
this.b=e
this.c=f},
UV:function UV(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.a=g},
aCK:function aCK(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x=f
_.y=0
_.z=""
_.Q=-1
_.as=0
_.at=""
_.ax=null
_.cx=_.CW=_.ch=_.ay=!1
_.c=_.a=_.cy=null},
ehz:function ehz(d,e,f){this.a=d
this.b=e
this.c=f},
ehA:function ehA(d){this.a=d},
ehy:function ehy(d){this.a=d},
egO:function egO(d){this.a=d},
egP:function egP(d){this.a=d},
egN:function egN(d){this.a=d},
egQ:function egQ(d){this.a=d},
egR:function egR(d){this.a=d},
egZ:function egZ(d){this.a=d},
egS:function egS(d){this.a=d},
ehg:function ehg(d,e){this.a=d
this.b=e},
eh_:function eh_(d){this.a=d},
ehv:function ehv(d){this.a=d},
ehw:function ehw(d){this.a=d},
ehx:function ehx(d,e){this.a=d
this.b=e},
eht:function eht(d){this.a=d},
ehu:function ehu(d,e){this.a=d
this.b=e},
ehs:function ehs(d){this.a=d},
eho:function eho(d){this.a=d},
ehp:function ehp(d,e,f){this.a=d
this.b=e
this.c=f},
ehq:function ehq(d){this.a=d},
ehr:function ehr(d,e,f){this.a=d
this.b=e
this.c=f},
ehB:function ehB(d,e){this.a=d
this.b=e},
egY:function egY(d){this.a=d},
egW:function egW(d){this.a=d},
egX:function egX(d,e){this.a=d
this.b=e},
egV:function egV(d){this.a=d},
egT:function egT(d){this.a=d},
egU:function egU(d,e){this.a=d
this.b=e},
eh0:function eh0(d,e){this.a=d
this.b=e},
ehe:function ehe(){},
ehf:function ehf(){},
eh1:function eh1(d){this.a=d},
eh2:function eh2(d){this.a=d},
eh3:function eh3(d){this.a=d},
eh6:function eh6(){},
eh7:function eh7(){},
eh8:function eh8(){},
eh9:function eh9(){},
eha:function eha(){},
ehb:function ehb(d){this.a=d},
ehc:function ehc(){},
ehd:function ehd(d){this.a=d},
eh4:function eh4(d){this.a=d},
eh5:function eh5(){},
ehS:function ehS(d,e){this.a=d
this.b=e},
ehU:function ehU(d){this.a=d},
ehG:function ehG(d){this.a=d},
ehT:function ehT(d){this.a=d},
ehJ:function ehJ(d){this.a=d},
ehK:function ehK(d,e){this.a=d
this.b=e},
ehI:function ehI(d,e){this.a=d
this.b=e},
ehL:function ehL(d,e){this.a=d
this.b=e},
ehH:function ehH(d,e){this.a=d
this.b=e},
ehV:function ehV(d,e){this.a=d
this.b=e},
ehF:function ehF(d,e){this.a=d
this.b=e},
ehW:function ehW(d){this.a=d},
ehE:function ehE(d){this.a=d},
ehX:function ehX(d,e){this.a=d
this.b=e},
ehD:function ehD(d,e){this.a=d
this.b=e},
ehY:function ehY(d){this.a=d},
ehZ:function ehZ(d){this.a=d},
ei_:function ei_(d,e,f){this.a=d
this.b=e
this.c=f},
ehC:function ehC(d,e,f){this.a=d
this.b=e
this.c=f},
ehM:function ehM(d){this.a=d},
ehN:function ehN(d,e){this.a=d
this.b=e},
ehO:function ehO(d){this.a=d},
ehP:function ehP(d){this.a=d},
ehQ:function ehQ(d){this.a=d},
ehR:function ehR(d){this.a=d},
ehn:function ehn(d){this.a=d},
ehm:function ehm(d){this.a=d},
ehj:function ehj(d,e){this.a=d
this.b=e},
ehh:function ehh(){},
ehi:function ehi(){},
ehk:function ehk(d,e){this.a=d
this.b=e},
ehl:function ehl(d,e){this.a=d
this.b=e},
a1z(d,e){var w=d.d,v=e.a,u=e.c,t=e.b,s=w.a,r=w.b
w=w.c
return d.c?new A.N(s+v,r-u,w+t):new A.N(s+v,r+t,w+u)},
fQh(d,e,f){var w,v,u,t,s,r=d.a,q=e.d,p=e.c?A.Ku(r,1.5707963267948966,0,q):A.Ku(r,0,0,q)
r=C.a([],x.z)
for(q=p.length,w=0;w<p.length;p.length===q||(0,C.K)(p),++w){v=p[w]
u=v.d
u=u===0?0:f.$1(u)
r.push(new A.tc(v.a,v.b,v.c,u,v.e,v.f,v.r,v.w,v.x))}q=C.V(x.S,x.q)
for(u=d.b,u=u.gdL(u),u=u.gai(u);u.C();){t=u.gU(u)
s=f.$1(t.a)
t=t.b
q.n(0,s,new A.db(t.a,t.b,A.a1z(e,t.c),t.d))}return new C.z(r,q)},
hL2(a3,a4,a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.i,a2=C.ew([a4,a5],a1)
for(w=b1.length,v=0;v<b1.length;b1.length===w||(0,C.K)(b1),++v){u=b1[v].a
a2.J(0,D.k.D(u[0],a4,a5))
a2.J(0,D.k.D(u[1],a4,a5))}t=C.B(a2,a2.$ti.k("cl.E"))
D.d.fe(t)
for(w=C.T(b1).k("a2<1>"),u=w.k("H.E"),s=0;r=s+1,r<t.length;s=r){q=t[s]
p=t[r]
o=p-q
if(o<0.01)continue
n=(q+p)/2
m=C.B(new C.a2(b1,new A.fda(n),w),u)
l=C.ew([a6,a7],a1)
for(k=m.length,v=0;v<m.length;m.length===k||(0,C.K)(m),++v){j=m[v].a
l.J(0,D.k.D(j[2],a6,a7))
l.J(0,D.k.D(j[3],a6,a7))}i=C.B(l,l.$ti.k("cl.E"))
D.d.fe(i)
for(k=!(o>30),h=0;g=h+1,g<i.length;h=g){f=i[h]
e=i[g]
j=e-f
if(j<0.01)continue
d=(f+e)/2
if(D.d.b8(m,new A.fdb(d)))continue
a0=!k||j>60?2:1
a3.iZ(new A.N(n,d,a8),new A.N(o,j,a9),b0,a0)}}},
Cj(c9,d0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=x.z,c2=C.a([],c1),c3=new A.nq(c2),c4=C.a([],x.a),c5=x.E,c6=C.a([],c5),c7=x.S,c8=C.V(c7,x.q)
c3.b=8001
c3.q3(B.fw1,B.fxW,B.KM,0.15,4)
c3.iZ(B.fvP,B.aQs,B.aaQ,3)
c3.bX(B.fAo,B.fBa,B.Wq,0.5)
c3.cU(B.aQu,B.fvK,B.A6)
c3.cU(B.aQu,B.fBj,B.A6)
c3.iZ(B.fy_,B.aQs,B.aaQ,3)
c3.bX(B.fvL,B.fy0,B.JM,0.15)
c3.bX(B.fyr,B.fy2,B.DD,0.8)
c3.b=0
c3.d=c9.gyc()?0.42:0.1
c3.iZ(B.fuX,B.fzq,c9.gyc()?B.qt:B.b3X,3)
c3.d=1
c3.b=8001
if(!c9.gyc())for(w=0;w<10;++w)c3.aAZ(new A.N(-72+w*16,51.3,55),B.fzL,B.m0,!1,0.05)
else{c3.bX(B.fyI,B.fx2,D.c,0.2)
c3.bX(B.fBQ,B.aQC,D.c,0.2)
c3.bX(B.fwy,B.aQC,D.c,0.2)}if(c9.gyc())c3.bX(B.fwE,B.fx5,B.qt,0.2)
c3.b=8001
c3.iZ(B.fB1,B.fBu,B.bas,2)
c3.bX(B.fAq,B.fvz,B.acE,0.1)
c3.bX(B.fAp,B.fvA,B.Vj,0.1)
c3.bX(B.fAl,B.aQl,B.Vj,0.1)
c3.bX(B.fuA,B.aQl,B.Vj,0.1)
c8.n(0,8001,B.dTU)
c3.b=8002
c3.q3(B.fBE,B.aQo,B.m0,0.05,3)
c3.q3(B.fvd,B.aQo,B.m0,0.05,3)
c8.n(0,8002,B.dUl)
for(v=c9.y,w=0;u=$.Ga(),w<u.length;++w){t=1000+w
c3.b=t
c3.cAv(new A.N(u[w],0,-2.25),B.fzA,B.m0,!1,0.05,2)
s=v.t(0,w)?"This one has a hole for the cable.":"Tap it with the drill to put a hole through it."
c8.n(0,t,new A.db("Wall stud","A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. "+s,new A.N(u[w],20,-2),60))
if(v.t(0,w)){c3.b=0
c3.e=0.6
c3.cU(new A.N(u[w],40,-2.25),B.fvN,B.adk)
c3.e=0}}c3.b=8000
c3.bX(B.fuF,B.fu5,B.ab7,0.5)
c3.e=0.4
c3.cU(B.fxN,B.fAM,B.DM)
for(r=0;r<6;++r)for(v=19.5-r*3.6,q=0;q<2;++q)c3.bX(new A.N(61.6+q*4.8,v,0.5),B.fta,B.aei,0.3)
p=c9.ax&&!c9.ay
v=p?0.6:0
if(c9.ay)u=D.cb
else u=p?D.bL:D.k8
c3.bX(new A.N(64,-2.5+v,0.9),B.fx0,u,0.4)
c3.e=0
if(c9.ay)v="The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON."
else v=c9.ax?"The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.":"The power is OFF. Tap to turn it ON."
c8.n(0,8000,new A.db("Breaker panel",v,B.fvC,60))
c3.b=8003
for(v=c9.z,u=C.ea(v,v.r,C.a3(v).c),t=x.o,s=u.$ti.c;u.C();){o=u.d
n=A.kX(o==null?s.a(o):o)
o=n.d
m=o.a-0.35
l=C.a([B.fAb,B.fyH,new A.N(m,40,-3.2)],t)
if(n.c)D.d.v(l,C.a([new A.N(m,51.4,-3.2),new A.N(m,51.4,o.c+11)],t))
else l.push(new A.N(m,o.b+11,-3.4))
c3.jL(A.G3(l,3,6),0.2,B.VT,!1,0.35,6)}c8.n(0,8003,B.dUJ)
for(u=x.V,s=c9.Q,k=0;k<3;++k){j=B.nP[k]
i=s.h(0,j)
if(i==null||!i.a)continue
if(i.e)h=B.bfF
else h=i.d?B.bh_:B.bgq
o=C.a([],u)
for(m=i.b,l=C.a3(m),g=new C.nI(m,m.r,l.k("nI<1>")),g.c=m.e,l=l.c;g.C();){m=g.d
if(m==null)m=l.a(m)
o.push(new C.cL([A.kX(m).d.a-1.15,A.kX(m).d.a+1.15,A.kX(m).d.b-2,A.kX(m).d.b+2]))}m=6100+k
c3.b=m
A.hL2(c3,j,j+48,-47,47,-0.25,0.5,h,o)
o=i.e?"Painted and finished.":"A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs."
c8.n(0,m,new A.db("Drywall sheet",o,new A.N(j+24,0,0),90))
c3.b=0
c3.e=0.3
for(o=i.c,m=C.a3(o),l=new C.nI(o,o.r,m.k("nI<1>")),l.c=o.e,m=m.c;l.C();){o=l.d
if(o==null)o=m.a(o)
f=D.o.an(o,10)
e=D.o.F(o,10)
c3.iY(new A.N($.Ga()[f],-40+e*16,0.1),0.34,B.DM,3,5,0.3)}c3.e=0}for(u=d0.a,o=u!=="tape",m=c9.as,l=u!=="mud",g=u==="sand",w=0;w<2;w=a1){d=-24+48*w
a0=s.h(0,B.nP[w])
a0=a0==null?null:a0.a
a1=w+1
a2=s.h(0,B.nP[a1])
a2=a2==null?null:a2.a
if(a0!==!0||a2!==!0)continue
a3=m[w]
a0=6200+w
c3.b=a0
if(a3.a&&!a3.d){a2=a3.b
if(a2===0)h=B.bfI
else h=a3.c?B.bcf:B.b86
c3.e=0.5
c3.cU(new A.N(d,0,0.08+0.02*a2),new A.N(2.2+a2*1.4,94,0.12),h)
c3.e=0}else if(!o||!l||g){c3.d=0.45
c3.e=0.6
c3.cU(new A.N(d,0,0.12),B.fxc,D.b2)
c3.e=0
c3.d=1}if(a3.d)a2="Smooth and ready for paint."
else if(!a3.a)a2="The joint between two sheets. It needs tape and three coats of joint compound."
else{a2=a3.b
a4=a2===1?"":"s"
a4="Taped, with "+a2+" coat"+a4+" of mud."
a2=a4}c8.n(0,a0,new A.db("Seam",a2,new A.N(d,0,0),70))}for(o=d0.b,m=c9.x,l=c9.at,g=x.N,a5=0;a5<7;++a5){n=B.tH[a5]
a0=n.a
a6=m.ag(0,a0)
a7=l.h(0,a0)
a8=o===a0&&a7!=null
if(!a6)continue
a2=n.c
if(a2)a9=n.e==="fan"?"fan":"light"
else{a4=a7==null?null:a7.a
a9=a4==null?"outlet":a4}if(a8){b0=A.Q5(a7.a)
a0=a7.b
b1=A.fR5(b0,a0,!1)
b2=A.fQh(b1,n,new A.fjx(n))
D.d.v(c2,b2.a)
c8.v(0,b2.b)
if(a0.f&&a0.c===0){a0=C.a([],c5)
for(a2=b1.c,a4=a2.length,b3=0;b3<a2.length;a2.length===a4||(0,C.K)(a2),++b3){b4=a2[b3]
a0.push(new A.vp(A.a1z(n,b4.a),b4.b,b4.c))}D.d.v(c6,a0)}}else if(a7!=null&&a7.b.c>=2){a4=a7.a
b5=a7.b
b6=b5.w
b7=C.a([],c1)
b8=new A.nq(b7)
b9=new A.avx(C.V(c7,g))
b9.c=2
b9.w=b6
if(a4==="light"||a4==="fan")A.h7N(b8,a4,b9)
else{A.h7t(b8,a4,-0.25,b6,!0)
A.h9P(b8,b6)}D.d.v(c2,A.fQh(new A.zj(b7,B.dg1,B.GB,B.vu),n,new A.fjy(n)).a)
if(!a2){c3.b=3000+a0
c3.e=0.4
c3.d=0.55
a2=n.d
b5=b5.w?D.aC:D.b9
c3.cU(new A.N(a2.a,a2.b,a2.c+0.2),B.fxf,b5)
c3.d=1
c3.e=0}c8.n(0,3000+a0,new A.db(A.hGV(a4),A.hGU(c9,a0),A.a1z(n,B.a7m),22))}else{a4=C.a([],c1)
A.h6P(new A.nq(a4),a9,!1)
D.d.v(c2,A.fQh(new A.zj(a4,B.dgD,B.GB,B.vu),n,new A.fjz(n)).a)
a2=a2?"Ceiling box":"Electrical box"
a4=v.t(0,a0)?"The box is mounted and the cable is in. A device can be wired here.":"The box is mounted. Pull the cable to it."
c8.n(0,2000+a0,new A.db(a2,a4,A.a1z(n,B.a7m),24))}}c0=new A.fjC(c3)
if(u==="wall"||u==="ceiling"||u==="fanbox")for(a5=0;a5<7;++a5){n=B.tH[a5]
c1=n.a
if(m.ag(0,c1))continue
c5=n.c
c7=n.d
s=c7.a
o=c7.b
a0=c5?new A.N(s,o-1,c7.c):new A.N(s,o,1.5)
a2=c5?B.fvT:B.fwV
c0.$4$round(2000+c1,a0,a2,c5)
c1=c5?new A.N(s,o-8,c7.c):new A.N(s,o+7,3)
c6.push(new A.vp(c1,n.b,D.fD))}else if(u==="cable")for(a5=0;a5<7;++a5){n=B.tH[a5]
c1=n.a
if(!m.ag(0,c1)||v.t(0,c1))continue
c5=n.c
c7=n.d
s=c7.a
o=c7.b
c7=c5?new A.N(s,o-1,c7.c):new A.N(s,o,1.5)
s=c5?B.aQq:B.fw2
c0.$5$col$round(2000+c1,c7,s,D.cq,c5)}else if(u==="knife")for(a5=0;a5<7;++a5){n=B.tH[a5]
if(n.c||!m.ag(0,n.a))continue
c1=n.d
c5=c1.a
i=c9.anI(c5)
if(i==null||i.b.t(0,n.a))continue
c0.$4$col(2000+n.a,new A.N(c5,c1.b,0.5),B.fx_,D.cw)}else if(u==="sheet")for(w=0;w<5;){j=B.a1Z[w]
c0.$3(6000+w,new A.N(j,0,0.3),B.fzD);++w
c6.push(new A.vp(new A.N(j,50,1),"edge "+w,D.fD))}else if(u==="screw")for(a5=0;a5<3;++a5){j=B.nP[a5]
i=s.h(0,j)
if(i==null||!i.a)continue
for(c1=c9.ao1(j),c5=c1.length,c7=i.c,o=j+48,b3=0;b3<c1.length;c1.length===c5||(0,C.K)(c1),++b3){f=c1[b3]
for(a0=f*10,a2=7000+a0,r=0;r<6;++r){if(c7.t(0,a0+r))continue
c0.$3(a2+r,new A.N($.Ga()[f],-40+r*16,0.5),B.aQi)}a2=$.Ga()
if(f+1<a2.length&&a2[f]+16<=o)for(a0=7500+a0,r=0;r<6;r+=2)c0.$4$col(a0+r,new A.N(a2[f]+8,-40+r*16+8,0.5),B.aQi,D.dx)}}if(!C.ew(["wall","ceiling","fanbox","cable","knife","sheet","screw",""],g).t(0,u))c1=D.d.t(B.GF,u)||C.ew(["outlet","gfci","switch","light","fan"],g).t(0,u)
else c1=!1
if(c1)for(c1=c9.CW,a5=0;a5<7;++a5){n=B.tH[a5]
if(D.d.t(B.GF,u)){c5=n.a
a7=l.h(0,c5)
if(a7!=null){c7=a7.a
c7=(c7==="outlet"||c7==="gfci")&&a7.b.c>=2&&!c1.ag(0,c5)}else c7=!1
if(c7){c7=n.d
c0.$4$col(3000+c5,new A.N(c7.a,c7.b,1.2),B.fxg,D.bc)}}else{c5=n.a
if(m.ag(0,c5)&&v.t(0,c5)&&!l.ag(0,c5)){c7=n.c
s=n.d
o=s.a
g=s.b
s=c7?new A.N(o,g-1,s.c):new A.N(o,g,1.2)
o=c7?B.aQq:B.fzy
c0.$4$round(2000+c5,s,o,c7)}}}for(c1=c9.CW,c5=new C.cJ(c1,C.a3(c1).k("cJ<1,2>")).gai(0);c5.C();){j=c5.d
c7=j.a
n=A.kX(c7)
v=c3.b=8100+c7
u=n.d
d=u.a
u=u.b
c3.jL(A.G3(C.a([new A.N(d,u,2.5),new A.N(d,-46,3.5),new A.N(d,-46,22)],t),4,6),0.28,B.ad2,!1,0.2,6)
c3.bX(new A.N(d,u,1.6),B.fwD,B.b5r,0.3)
u=j.b
switch(u){case"tv":c3.bX(new A.N(d,-45,24),B.fvk,B.acI,0.2)
c3.bX(new A.N(d,-19,24),B.fw_,E.DY,0.4)
if(c1.ag(0,c7))c7=c9.ax&&!c9.ay&&c9.a2N(c7)
else c7=!1
if(c7){c7=d-38.5
s=d+38.5
c4.push(new A.at6(C.a([new A.N(c7,1.5,25.7),new A.N(s,1.5,25.7),new A.N(s,-39.5,25.7),new A.N(c7,-39.5,25.7)],t),v,new A.fjA(j)))}break
case"lamp":c3.e9(new A.N(d,-47.5,24),new A.N(d,-46.5,24),6,B.V0,0.4,14)
c3.e9(new A.N(d,-46.5,24),new A.N(d,-22,24),1,B.KM,0.5,8)
c3.AZ(new A.N(d,-26,24),new A.N(d,-12,24),9,S.W2,!1,!0,5.5,0.2,16)
break
case"toaster":c3.bX(new A.N(d,-42.5,24),B.fug,B.kx,0.8)
c3.cU(new A.N(d,-38,24),B.fAa,B.adR)
break
default:c3.bX(new A.N(d,-43.5,24),B.fuv,B.acI,0.2)
c3.K5(new A.N(d-6,-38,24),new A.N(d+8,-38,24),3.4,B.Ku,3,0.6,12)
c3.aiG(new A.N(d-8,-43,24),B.fum,B.Ku,0.6,0)}c7=A.hF5(u)
s="Plugged into "+n.b
u=u==="tv"?s+". Tap it to watch NGMY ads full screen. Use the Unplug tool to unplug it.":s+". Tap it to unplug."
c8.n(0,v,new A.db(c7,u,new A.N(d,-35,20),60))}for(a5=0;a5<7;++a5){n=B.tH[a5]
c8.cg(0,2000+n.a,new A.fjB(n))}return new A.zj(c2,c8,c6,c4)},
hGV(d){var w
A:{if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}w="Outlet"
break A}return w},
hF5(d){var w
A:{if("tv"===d){w="TV"
break A}if("lamp"===d){w="Lamp"
break A}if("toaster"===d){w="Toaster"
break A}w="Hair dryer"
break A}return w},
hGU(d,e){var w,v=d.at.h(0,e)
if(v==null)return""
if(v.b.w)return"BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one."
w=v.a
if(w==="switch")return d.ch.t(0,e)?"The switch is ON. Tap to turn it off.":"The switch is OFF. Tap to flip it on."
if(w==="light"||w==="fan")return d.akZ(e)?"It is running.":"It is off. Flip its switch (breaker on)."
w=d.CW.h(0,e)
return"Tap with a TV, lamp, toaster or hair dryer in your hand to plug it in. Plugged: "+(w==null?"nothing":w)+"."},
i_h(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.nq(d)
for(w=D.d.gai(B.tH),v=new C.h2(w,new A.fzA()),u=a1.at,t=a2*7;v.C();){s=w.gU(0)
r=s.a
q=u.h(0,r)
if(q==null||q.b.c<1)continue
p=a1.akZ(r)?t:0.4
a0.b=3000+r
s=s.d
r=s.a
o=s.b-6.6
s=s.c
for(n=0;n<4;++n){m=p+n*3.141592653589793/2
l=A.bBf(B.fu3,m)
a0.aiG(new A.N(r+l.a,o+l.b,s+l.c),B.fBn,B.b6q,0.3,m)}}w=a1.d
w===$&&C.c()
w=D.d.gai(w)
v=new C.h2(w,new A.fzB())
u=a2*5
while(v.C()){s=w.gU(0).a
if(a1.akZ(s)){k=A.kX(s)
a0.b=0
a0.d=0.25+0.05*Math.sin(u)
s=k.d
a0.iY(new A.N(s.a,s.b-5,s.c),11,B.Vn,4,10,0)
a0.d=1}}for(w=a1.CW,v=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gai(0),u=a2*1.6,s=a2*6;v.C();){j=v.d
r=j.a
if(w.ag(0,r))o=a1.ax&&!a1.ay&&a1.a2N(r)
else o=!1
if(!o)continue
i=A.kX(r).d.a
a0.b=8100+r
switch(j.b){case"tv":break
case"lamp":a0.b=0
a0.d=0.3+0.05*Math.sin(s)
a0.iY(new A.N(i,-19,24),11,O.V2,4,10,0)
a0.d=1
break
case"toaster":a0.e=0.8
r=C.aq(B.ack,O.W6,(Math.sin(s)+1)/2)
r.toString
a0.cU(new A.N(i,-38.2,24),new A.N(13,0.3,6),r)
a0.e=0
break
default:for(r=i+9,h=0;h<6;++h)a0.iY(new A.N(r+D.k.F(u+h/6,1)*22,-38+Math.sin(h*2)*2,24),0.6,B.bcB,3,5,0.2)}}for(w=new C.cJ(a3,C.a3(a3).k("cJ<1,2>")).gai(0),v=a2*0.7,u=a2*2.2;w.C();){j=w.d
s=j.b
if(a2>s)continue
k=A.kX(j.a)
g=D.k.D(s-a2,0,3)
a0.b=0
for(h=0;h<14;++h){f=D.k.F(u+h*0.137,1)
m=h*2.4+t
e=A.a1z(k,new A.N(Math.cos(m)*f*7,Math.sin(m)*f*7-f*f*6,3+f*4))
s=D.k.D(g,0.3,1)
r=C.aq(E.Wi,E.Wn,1-f)
r.toString
a0.iY(e,0.35*s,r,3,5,0)}a0.d=0.35
for(h=0;h<5;++h){f=D.k.F(v+h*0.2,1)
s=f*3
a0.iY(A.a1z(k,new A.N(Math.sin(h*1.7)*2,f*10,5+s)),1.2+s,B.bhH,3,6,0)}a0.d=1}return d},
vO:function vO(d,e,f){this.a=d
this.b=e
this.c=f},
fda:function fda(d){this.a=d},
fdb:function fdb(d){this.a=d},
fjx:function fjx(d){this.a=d},
fjy:function fjy(d){this.a=d},
fjz:function fjz(d){this.a=d},
fjC:function fjC(d){this.a=d},
fjA:function fjA(d){this.a=d},
fjB:function fjB(d){this.a=d},
fzA:function fzA(){},
fzB:function fzB(){},
h3w(d,e){var w=new A.cnk(e,d,A.fXZ())
w.bv5(4,d,e)
return w},
qQ:function qQ(d,e){this.a=d
this.b=e},
tZ:function tZ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Ll:function Ll(d,e){this.a=d
this.b=e
this.c=!1},
cnk:function cnk(d,e,f){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=3
_.r=_.f=0
_.w=!1},
cnp:function cnp(d){this.a=d},
cnl:function cnl(){},
cnn:function cnn(){},
cno:function cno(){},
cnm:function cnm(d){this.a=d},
apE:function apE(d,e){this.d=d
this.a=e},
aCO:function aCO(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x="inspect"
_.y=0
_.z=null
_.at=_.as=_.Q=!1
_.c=_.a=_.ax=null},
ejm:function ejm(d,e,f){this.a=d
this.b=e
this.c=f},
ejn:function ejn(d){this.a=d},
ejl:function ejl(d){this.a=d},
ejb:function ejb(d){this.a=d},
ejg:function ejg(d){this.a=d},
ejh:function ejh(d){this.a=d},
ejf:function ejf(d){this.a=d},
eji:function eji(d,e){this.a=d
this.b=e},
ejj:function ejj(d){this.a=d},
ejk:function ejk(d){this.a=d},
eje:function eje(d){this.a=d},
ejd:function ejd(d,e){this.a=d
this.b=e},
eja:function eja(d){this.a=d},
ej8:function ej8(d){this.a=d},
ej9:function ej9(d,e){this.a=d
this.b=e},
ejc:function ejc(d){this.a=d},
ejz:function ejz(d,e){this.a=d
this.b=e},
ejv:function ejv(){},
eju:function eju(d){this.a=d},
ejw:function ejw(){},
ejx:function ejx(){},
ejy:function ejy(d,e){this.a=d
this.b=e},
ejt:function ejt(d,e){this.a=d
this.b=e},
ejs:function ejs(d){this.a=d},
ejr:function ejr(d){this.a=d},
ejp:function ejp(d,e){this.a=d
this.b=e},
ejo:function ejo(){},
ejq:function ejq(d,e){this.a=d
this.b=e}},B,G,E,A1,K,S,L,M,A2
J=c[1]
C=c[0]
D=c[2]
F=c[91]
N=c[99]
O=c[110]
T=c[107]
P=c[102]
U=c[100]
V=c[93]
W=c[106]
H=c[84]
X=c[97]
Y=c[104]
Q=c[103]
R=c[105]
Z=c[90]
A_=c[98]
A0=c[109]
I=c[92]
A=a.updateHolder(c[24],A)
B=c[88]
G=c[26]
E=c[89]
A1=c[61]
K=c[101]
S=c[108]
L=c[96]
M=c[95]
A2=c[94]
A.N.prototype={
ae(d,e){return new A.N(this.a+e.a,this.b+e.b,this.c+e.c)},
aC(d,e){return new A.N(this.a-e.a,this.b-e.b,this.c-e.c)},
aK(d,e){return new A.N(this.a*e,this.b*e,this.c*e)},
RX(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new A.N(w*v-u*t,u*s-r*v,r*t-w*s)},
gSX(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
gqq(d){var w=this,v=w.gSX()
return v<1e-9?w:new A.N(w.a/v,w.b/v,w.c/v)}}
A.tc.prototype={}
A.db.prototype={}
A.vp.prototype={}
A.zj.prototype={}
A.at6.prototype={}
A.nq.prototype={
beF(d,e,f,g,h,i,j){var w=this,v=i.gqq(0)
w.a.push(new A.tc(C.a([d,e,f,g],x.o),v,h,w.b,0,w.d,!0,w.c,w.e))},
bfJ(d,e,f,g){var w=this,v=e.aC(0,d).RX(f.aC(0,d)),u=v.gqq(0)
w.a.push(new A.tc(C.a([d,e,f],x.o),u,g,w.b,0,w.d,!0,w.c,w.e))},
JN(d,e,f,g,h,i,j){var w,v,u,t=e.a/2,s=e.b/2,r=e.c/2,q=new A.bUs(this,i,new A.bUt(j,d),new A.bUu(j),f,h),p=-t,o=-s,n=2*t,m=2*s
q.$4(new A.N(0,0,1),new A.N(p,o,r),new A.N(n,0,0),new A.N(0,m,0))
w=-r
q.$4(new A.N(0,0,-1),new A.N(t,o,w),new A.N(-2*t,0,0),new A.N(0,m,0))
v=-2*r
q.$4(new A.N(1,0,0),new A.N(t,o,r),new A.N(0,0,v),new A.N(0,m,0))
u=2*r
q.$4(new A.N(-1,0,0),new A.N(p,o,w),new A.N(0,0,u),new A.N(0,m,0))
if(g){q.$4(new A.N(0,1,0),new A.N(p,s,r),new A.N(n,0,0),new A.N(0,0,v))
q.$4(new A.N(0,-1,0),new A.N(p,o,w),new A.N(n,0,0),new A.N(0,0,u))}},
iZ(d,e,f,g){return this.JN(d,e,f,!0,0,g,0)},
aAZ(d,e,f,g,h){return this.JN(d,e,f,g,h,1,0)},
q3(d,e,f,g,h){return this.JN(d,e,f,!0,g,h,0)},
bX(d,e,f,g){return this.JN(d,e,f,!0,g,1,0)},
cU(d,e,f){return this.JN(d,e,f,!0,0,1,0)},
cAv(d,e,f,g,h,i){return this.JN(d,e,f,g,h,i,0)},
aiG(d,e,f,g,h){return this.JN(d,e,f,!0,g,1,h)},
AZ(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=b4.aC(0,b3).gqq(0),a8=a7.b,a9=a7.RX(Math.abs(a8)<0.9?B.w5:B.Te).gqq(0),b0=a7.RX(a9).gqq(0),b1=b9<0?b5:b9,b2=new A.bUv(a9,c1,b0)
for(w=a6.a,v=b3.a,u=b3.b,t=b3.c,s=b4.a,r=b4.b,q=b4.c,p=x.o,o=a7.a*-1,a8*=-1,n=a7.c*-1,m=0;m<c1;){l=b2.$1(m);++m
k=b2.$1(m)
j=l.a
i=k.a
h=l.b
g=k.b
f=l.c
e=k.c
d=new A.N(j+i,h+g,f+e).gqq(0)
a0=v+j*b5
a1=u+h*b5
a2=t+f*b5
a3=v+i*b5
a4=u+g*b5
a5=t+e*b5
i=s+i*b1
g=r+g*b1
e=q+e*b1
j=s+j*b1
h=r+h*b1
f=q+f*b1
w.push(new A.tc(C.a([new A.N(a0,a1,a2),new A.N(a3,a4,a5),new A.N(i,g,e),new A.N(j,h,f)],p),d,b6,a6.b,c0,a6.d,b8,a6.c,a6.e))
if(b7){w.push(new A.tc(C.a([b3,new A.N(a3,a4,a5),new A.N(a0,a1,a2)],p),new A.N(o,a8,n),b6,a6.b,c0,a6.d,!1,a6.c,a6.e))
w.push(new A.tc(C.a([b4,new A.N(j,h,f),new A.N(i,g,e)],p),a7,b6,a6.b,c0,a6.d,!1,a6.c,a6.e))}}},
e9(d,e,f,g,h,i){return this.AZ(d,e,f,g,!0,!1,-1,h,i)},
K5(d,e,f,g,h,i,j){return this.AZ(d,e,f,g,!0,!1,h,i,j)},
a2B(d,e,f,g,h,i,j,k){return this.AZ(d,e,f,g,h,i,-1,j,k)},
pe(d,e,f,g,h){return this.AZ(d,e,f,g,!0,!1,-1,0,h)},
b9I(d,e,f,g,h,i,j){return this.AZ(d,e,f,g,h,!1,-1,i,j)},
cEU(d,e,f,g,h,i){return this.AZ(d,e,f,g,h,!1,-1,0,i)},
cEV(d,e,f,g,h,i){return this.AZ(d,e,f,g,!0,!1,h,0,i)},
iY(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=new A.bUr(b0,b1)
for(w=a5.a,v=a7.a,u=a7.b,t=a7.c,s=x.o,r=0;r<b0;r=q)for(q=r+1,p=0;p<b1;p=n){o=a6.$2(r,p)
n=p+1
m=a6.$2(r,n)
l=a6.$2(q,n)
k=a6.$2(q,p)
j=o.a
i=o.b
h=o.c
g=m.a
f=m.b
e=m.c
d=l.a
a0=l.b
a1=l.c
a2=k.a
a3=k.b
a4=k.c
w.push(new A.tc(C.a([new A.N(v+j*a8,u+i*a8,t+h*a8),new A.N(v+g*a8,u+f*a8,t+e*a8),new A.N(v+d*a8,u+a0*a8,t+a1*a8),new A.N(v+a2*a8,u+a3*a8,t+a4*a8)],s),new A.N(j+g+d+a2,i+f+a0+a3,h+e+a1+a4).gqq(0),a9,a5.b,b2,a5.d,!1,a5.c,a5.e))}},
b7N(d,e,f,g){return this.iY(d,e,f,6,10,g)},
a23(d,e,f,g,h){return this.iY(d,e,f,g,h,0.4)},
a59(d,e,f,g,h,i,j,k){var w,v,u,t,s
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new A.N(u.a-t.a,u.b-t.b,u.c-t.c).gSX()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.a2B(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.iY(d[w],u,f,4,k,j)},
jL(d,e,f,g,h,i){return this.a59(d,e,f,!0,!1,g,h,i)},
aGv(d,e,f,g,h,i,j){return this.a59(d,e,f,g,!1,h,i,j)},
bfL(d,e,f,g,h){return this.a59(d,e,f,!0,!1,!0,g,h)},
yN(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.b9I(a4,a5,a6,a8,!1,a9,b0)
w=a5.aC(0,a4).gqq(0)
v=w.RX(Math.abs(w.b)<0.9?B.w5:B.Te).gqq(0)
u=new A.bUw(v,b0,w.RX(v).gqq(0))
for(t=[new C.z(a4,w.aK(0,-1)),new C.z(a5,w)],s=a3.a,r=x.o,q=0;q<2;++q){p=t[q]
o=p.a
n=p.b
for(p=o.a,m=o.b,l=o.c,k=0;k<b0;){j=u.$1(k)
i=j.a
h=j.b
j=j.c
g=u.$1(k)
f=g.a
e=g.b
g=g.c;++k
d=u.$1(k)
a0=d.a
a1=d.b
d=d.c
a2=u.$1(k)
s.push(new A.tc(C.a([new A.N(p+i*a7,m+h*a7,l+j*a7),new A.N(p+f*a6,m+e*a6,l+g*a6),new A.N(p+a0*a6,m+a1*a6,l+d*a6),new A.N(p+a2.a*a7,m+a2.b*a7,l+a2.c*a7)],r),n,a8,a3.b,a9,a3.d,!1,a3.c,a3.e))}}},
cPV(d,e,f,g,h,i){return this.yN(d,e,f,g,h,i,16)}}
A.Ay.prototype={
anC(d){var w,v,u,t=this
t.x=d
if(!d){w=t.a
v=t.r
u=t.w
t.a=D.k.D(w,v-u,v+u)}t.aZ()},
n2(d,e,f,g){var w=this
w.y=f
w.z=d
w.Q=g
w.as=e
w.aZ()},
Gi(d,e){return this.n2(d,null,e,null)},
aGh(d){var w,v,u,t=this
if(!(t.y!=null||t.z!=null||t.Q!=null||t.as!=null))return
w=1-Math.exp(-d*7)
v=t.y
if(v!=null){u=A.zB(t.d,v,w)
t.d=u
if(u.aC(0,v).gSX()<0.02){v=t.y
v.toString
t.d=v
t.y=null}}v=t.z
if(v!=null){u=t.c
u+=(v-u)*w
t.c=u
if(Math.abs(u-v)<0.05){t.c=v
t.z=null}}v=t.Q
if(v!=null){u=t.a
u+=(v-u)*w
t.a=u
if(Math.abs(u-v)<0.003){t.a=v
t.Q=null}}v=t.as
if(v!=null){u=t.b
u+=(v-u)*w
t.b=u
if(Math.abs(u-v)<0.003){t.b=v
t.as=null}}t.aZ()},
amZ(d){var w=this
w.z=null
w.c=D.k.D(w.c*d,6,w.f)
w.aZ()}}
A.bOB.prototype={
cNN(d){var w,v,u,t
for(w=this.a,v=w.length-1,u=d.a,t=d.b;v>=0;--v)if(w[v].a.gbI().a.contains(u,t))return w[v].b
return 0}}
A.b3p.prototype={
gaGj(d){var w=this.r.a
return w==null?0:w},
a6(d6,d7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0=this,d1=null,d2=d7.a,d3=d7.b,d4=0+d2,d5=0+d3
$.X()
w=C.L()
v=d0.x
u=C.aq(v,D.c,0.06)
u.toString
w.sau(new C.a7(D.b0,D.b6,D.x,C.a([u,v],x.O),d1,d1).aw(0,new C.aa(0,0,d4,d5)))
d6.aX(new C.aa(0,0,d4,d5),w)
t=Math.min(d2,d3)*1.15
s=d2/2
r=d3/2
d3=d0.c
q=new A.ckU(Math.cos(d3.a),Math.sin(d3.a),Math.cos(d3.b),Math.sin(d3.b))
p=new A.ckV(d0,q)
o=B.fyv.gqq(0)
n=o.ae(0,B.ftg).gqq(0)
m=C.a([],x.G)
d2=d0.w
d3=d0.b
l=d3.a
if(!(d2==null)){d4=C.B(l,x.e)
D.d.v(d4,d2.$1(d0.gaGj(0)))
l=d4}for(d2=l.length,d4=d0.e,d5=x.h,w=d4!==0,v=o.a,u=o.b,k=o.c,j=x.o,i=d0.f,h=i!=null,g=n.a,f=n.b,e=n.c,d=d0.r,a0=0;a0<l.length;l.length===d2||(0,C.K)(l),++a0){a1=l[a0]
if(h&&!i.$1(a1.w))continue
a2=C.a([],j)
for(a3=a1.a,a4=a3.length,a5=0;a5<a3.length;a3.length===a4||(0,C.K)(a3),++a5)a2.push(p.$1(a3[a5]))
a6=A.hGd(a2)
a2=a6.length
if(a2<3)continue
for(a7=0,a8=B.w4,a5=0;a5<a2;++a5){a9=a6[a5]
a3=a9.c
a7+=a3
a8=new A.N(a8.a+a9.a,a8.b+a9.b,a8.c+a3)}a2=1/a2
b0=q.$1(a1.b)
a3=b0.a
a4=b0.b
b1=b0.c
if(a3*(a8.a*a2)+a4*(a8.b*a2)+b1*(a8.c*a2)>0){if(!a1.r)continue
b0=new A.N(a3*-1,a4*-1,b1*-1)}a2=b0.a
a3=b0.b
a4=b0.c
b2=0.56+0.58*Math.max(0,a2*v+a3*u+a4*k)
b1=a1.e
b3=b1>0?Math.pow(Math.max(0,a2*g+a3*f+a4*e),28)*b1:0
b4=a1.c
if(w&&a1.d===d4){a2=d.a
a2=C.aq(b4,D.b2,0.28+0.14*Math.sin((a2==null?0:a2)*6))
a2.toString
b2+=0.12
b4=a2}a2=255*b3*0.55
b5=D.k.V(D.k.D(b4.gb6(b4)*255*b2+a2,0,255))
b6=D.k.V(D.k.D(b4.gbf()*255*b2+a2,0,255))
b7=D.k.V(D.k.D(b4.gbg(b4)*255*b2+a2,0,255))
a2=$.X()
a3=C.a([],d5)
b8=new C.aQ(a2.r,D.ap,d1,d1,a3)
for(b9=0;b9<a6.length;++b9){a9=a6[b9]
a2=a9.c
c0=s+a9.a*t/a2
c1=r-a9.b*t/a2
if(b9===0){a2=new C.b5(c0,c1)
a3.push(a2)
a4=b8.f
if(a4!=null)a2.bx(a4)
a2=b8.e
if(a2!=null)a2.a.delete()
b8.e=null}else{a2=new C.ap(c0,c1)
a3.push(a2)
a4=b8.f
if(a4!=null)a2.bx(a4)
a2=b8.e
if(a2!=null)a2.a.delete()
b8.e=null}}a2=new C.bF()
a3.push(a2)
a3=b8.f
if(a3!=null)a2.bx(a3)
a2=b8.e
if(a2!=null)a2.a.delete()
b8.e=null
a2=a1.f
a3=a6.length
a4=a1.d
b1=a4===d4&&w
m.push(new A.J4(d1,b8,new C.w(a2,(b5&255)/255,(b6&255)/255,(b7&255)/255,D.t),a7/a3-a1.x,a4,a2<0.99,b1))}for(d2=d3.d,d4=d2.length,v=x.K,u=x.g,a0=0;a0<d2.length;d2.length===d4||(0,C.K)(d2),++a0){c2=d2[a0]
k=C.a([],j)
for(i=c2.a,a5=0;a5<4;++a5)k.push(p.$1(i[a5]))
if(D.d.b8(k,new A.ckR()))continue
h=k[0]
g=k[1]
f=k[2]
e=k[3]
d=(h.c+g.c+f.c+e.c)*0.25
a2=i[3]
a3=i[0]
a4=a3.a
b1=a3.b
a3=a3.c
i=i[1]
b0=q.$1(new A.N(a2.a-a4,a2.b-b1,a2.c-a3).RX(new A.N(i.a-a4,i.b-b1,i.c-a3)))
if(b0.a*((h.a+g.a+f.a+e.a)*0.25)+b0.b*((h.b+g.b+f.b+e.b)*0.25)+b0.c*d>0)continue
i=C.a([],u)
for(h=k.length,a5=0;a5<k.length;k.length===h||(0,C.K)(k),++a5){a9=k[a5]
g=a9.c
i.push(new C.u(s+a9.a*t/g,r-a9.b*t/g))}k=$.X()
h=C.a([],d5)
g=C.B(i,v)
h.push(new C.QO(g,!0))
m.push(new A.J4(new A.ckS(d0,c2,i),new C.aQ(k.r,D.ap,d1,d1,h),D.K,d-0.6,c2.b,!1,!1))}D.d.b1(m,new A.ckT())
d2=d0.d.a
D.d.a8(d2)
$.X()
c3=C.L()
c3.b=D.V
c4=C.L()
c4.b=D.ae
c4.c=0.8
for(d4=m.length,d5=d6.a,a0=0;a0<m.length;m.length===d4||(0,C.K)(m),++a0){c5=m[a0]
v=c5.a
if(v!=null){v.$1(d6)
v=c5.e
if(v!==0)d2.push(new C.z(c5.b,v))
continue}v=c5.c
c3.r=v.gp(0)
u=c5.b
c6=c3.H()
k=u.e
d5.drawPath((k==null?u.e=new C.cF(u.gbI().a.snapshot()):k).a,c6)
c6.delete()
if(!c5.f){c4.r=v.gp(0)
c6=c4.H()
v=u.e
d5.drawPath((v==null?u.e=new C.cF(u.gbI().a.snapshot()):v).a,c6)
c6.delete()}v=c5.e
if(v!==0)d2.push(new C.z(u,v))}if(w){$.X()
c7=C.L()
c7.b=D.ae
c7.c=1.4
c7.r=D.c.j(0.35+0.25*Math.sin(d0.gaGj(0)*6)).gp(0)
for(d2=m.length,a0=0;a0<m.length;m.length===d2||(0,C.K)(m),++a0){c5=m[a0]
if(c5.r){d4=c5.b
c6=c7.H()
w=d4.e
d5.drawPath((w==null?d4.e=new C.cF(d4.gbI().a.snapshot()):w).a,c6)
c6.delete()}}}for(d2=d3.c,d3=d2.length,a0=0;a0<d2.length;d2.length===d3||(0,C.K)(d2),++a0){c8=d2[a0]
a9=p.$1(c8.a)
d4=a9.c
if(d4<1)continue
w=s+a9.a*t/d4
d4=r-a9.b*t/d4
c9=new C.km(new C.eo(c8.b,d1,d1,D.cO,d1,d1,d1,d1,d1,d1,new C.F(!0,D.c,d1,d1,d1,d1,11,D.u,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1)),D.a5,D.ch,new C.jm(1),d1,d1,d1,d1,D.cd,d1)
c9.eO()
v=c9.b
u=v.c
v=v.a.c
b5=C.by(C.ct(new C.u(w,d4),v.gbb(v)+8,u+14),D.iA)
$.X()
u=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
u.r=c8.c.j(0.92).gp(0)
c6=u.H()
d5.drawRRect(C.ep(b5),c6)
c6.delete()
u=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
u.b=D.ae
u.c=1
u.r=D.ad.gp(0)
c6=u.H()
d5.drawRRect(C.ep(b5),c6)
c6.delete()
u=c9.b
v=u.c
u=u.a.c
c9.a6(d6,new C.u(w-v/2,d4-u.gbb(u)/2))}},
aq(d){return!0}}
A.J4.prototype={}
A.at5.prototype={
T(){return new A.bot(new A.bOB(C.a([],x.I)),new C.eL(0,$.aw()),D.bx,null,null)}}
A.bot.prototype={
a_(){var w,v=this
v.a1()
w=v.q6(new A.ePD(v))
w.iT(0)
v.d!==$&&C.aO()
v.d=w},
q(){var w=this.d
w===$&&C.c()
w.q()
w=this.f
w.S$=$.aw()
w.P$=0
this.btD()},
B(d){var w,v=this,u=null,t=v.a,s=t.c,r=t.d,q=t.e,p=t.r,o=v.f
t=t.w
w=C.a([r,o],x.U)
w=C.a([C.jr(new C.et(C.b3(u,u,u,new A.b3p(s,r,v.e,q,p,o,t,v.a.x,new C.h3(w)),D.f_),u),D.q,u)],x.p)
v.a.toString
return C.oJ(D.jr,C.aE(D.c5,new C.an(D.W,u,D.b_,D.q,w,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.ePz(v),new A.ePA(v),u,u,u,u,u,u,u,new A.ePB(v),u,u,u,!1,D.a9),u,u,u,u,u,u,new A.ePC(v),u)}}
A.aLj.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.mc.prototype={}
A.avx.prototype={}
A.zH.prototype={}
A.a3i.prototype={}
A.BL.prototype={
gj4(){return this.a==="ok"}}
A.aTf.prototype={}
A.q8.prototype={}
A.Df.prototype={}
A.u7.prototype={}
A.ps.prototype={}
A.a3L.prototype={
gLU(d){var w,v=this.c
A:{if("bathroom"===v){w=110
break A}if("kitchen"===v){w=140
break A}if("living"===v){w=180
break A}if("hall"===v){w=240
break A}if("outside"===v){w=300
break A}w=130
break A}return w},
gya(d){var w,v=this.c
A:{if("bathroom"===v){w=100
break A}if("kitchen"===v){w=110
break A}if("living"===v){w=120
break A}if("hall"===v){w=64
break A}if("outside"===v){w=200
break A}w=112
break A}return w},
guC(){if(this.c!=="outside"){var w=this.ch
w=w==null?null:w.gw_()
if(w==null)w=!this.ax}else w=!0
return w},
gBD(){var w=this.c
if(w==="bathroom"||w==="kitchen"){w=this.CW
w=w==null?null:w.gajF()
if(w==null)w=!this.ay}else w=!0
return w},
SA(d){var w,v,u,t
for(w=this.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
l5(d,e,f,g){var w=this,v=w.y++,u=f==null?0:f,t=new A.aTf(v,e,u,g==null?w.gya(0)*0.6:g)
w.x.push(t)
w.aBi(0,t)
return t},
J(d,e){return this.l5(0,e,null,null)},
aBi(d,e){var w,v,u,t=B.yx.h(0,e.b)
t.toString
w=(e.e&1)===1
v=w?t.d:t.c
u=w?t.c:t.d
t=v/2
e.c=D.k.D(e.c,-this.gLU(0)/2+t+1,this.gLU(0)/2-t-1)
t=u/2
e.d=D.k.D(e.d,t+1,this.gya(0)-t-1)}}
A.bOD.prototype={
c1w(){var w,v,u,t,s,r,q,p=this,o="back",n="bedroom",m="bathroom",l=new C.eS()
l.dH(p.a)
w=new A.bOE()
v=x.D
u=C.a([],v)
for(t=0;t<8;++t)u.push(new A.ps(o,-98+t*28,B.cON[t]))
u.push(B.bw5)
u.push(B.bw7)
s=C.a([A.AI(0,"Bedroom 1",n,0,0,2,2,C.a([w.$1(-30)],v)),A.AI(1,"Bedroom 2",n,2,0,2,2,C.a([w.$1(-30)],v)),A.AI(2,"Bathroom 1",m,4,0,1,2,C.a([w.$1(-30)],v)),A.AI(3,"Bedroom 3",n,5,0,2,2,C.a([w.$1(-30)],v)),A.AI(4,"Bathroom 2",m,7,0,2,2,C.a([w.$1(-30)],v)),A.AI(5,"Hall","hall",0,2,9,1,u),A.AI(6,"Bedroom 4",n,0,3,2,2,C.a([w.$1(-30)],v)),A.AI(7,"Bedroom 5",n,2,3,2,2,C.a([w.$1(-30)],v)),A.AI(8,"Bathroom 3",m,4,3,1,2,C.a([w.$1(-30)],v)),A.AI(9,"Kitchen","kitchen",5,3,2,2,C.a([new A.ps(o,-50,5),B.bw8],v)),A.AI(10,"Living room","living",7,3,2,2,C.a([new A.ps(o,-70,5),B.bw6,B.bw4],v)),A.AI(11,"Garden","outside",0,5,9,1,C.a([B.bw3],v))],x.B)
p.c!==$&&C.aO()
p.c=s
for(r=0;r<12;++r){q=s[r]
v=q.c
if(v==="outside")continue
q.db=v==="bedroom"?"fan":"light"
q.ax=l.aj()<0.6
q.ay=(v==="bathroom"||v==="kitchen")&&l.aj()<0.7
D.d.ha(q.z,0,3,l.aB(8))
A:{if("bathroom"===v){v=5+l.aB(2)
break A}if("kitchen"===v){v=5+l.aB(2)
break A}if("bedroom"===v){v=2+l.aB(3)
break A}if("living"===v){v=l.aB(2)
break A}v=l.aB(2)
break A}q.Q=v
q.as=l.aB(4)
p.bMr(q)}s[3].ax=!0
s[2].ay=!0},
bMr(d){var w="rug",v="nightstand",u="plant",t=d.gLU(0)/2
switch(d.c){case"bedroom":d.l5(0,w,0,d.gya(0)*0.55)
d.l5(0,"bed",0,46)
d.l5(0,v,-42,14)
d.l5(0,v,42,14)
d.l5(0,"wardrobe",-t+12,76).e=1
d.l5(0,"desk",t-14,80).e=3
break
case"living":d.l5(0,w,0,70)
d.l5(0,"sofa",0,100)
d.l5(0,"coffee",0,68)
d.l5(0,"tvstand",0,14)
d.l5(0,"armchair",-60,60)
d.l5(0,u,76,14)
d.l5(0,"lamp",-76,14)
break
case"kitchen":d.l5(0,"dining",0,78)
d.l5(0,"chair",-24,78).e=1
d.l5(0,"chair",24,78).e=3
d.l5(0,u,58,20)
break
case"bathroom":d.l5(0,w,0,62).e=0
d.l5(0,u,d.gLU(0)/2-12,d.gya(0)-12)
break
case"hall":d.l5(0,w,0,36)
d.l5(0,u,108,50)
break}},
gKQ(){var w,v,u=C.a([],x.B),t=this.c
t===$&&C.c()
w=0
for(;w<12;++w){v=t[w]
if(v.c!=="outside")u.push(v)}return u},
gcR6(){var w=this.gKQ()
return new C.a2(w,new A.bOI(),C.T(w).k("a2<1>")).gM(0)},
gcO0(){var w=this.c
w===$&&C.c()
return new C.a2(w,new A.bOH(),C.T(w).k("a2<1>")).gM(0)},
gcO_(){var w=this.c
w===$&&C.c()
return new C.a2(w,new A.bOG(),C.T(w).k("a2<1>")).gM(0)},
gcGU(){var w=this.gKQ()
return new C.a2(w,new A.bOF(),C.T(w).k("a2<1>")).gM(0)}}
A.aoI.prototype={
T(){var w=new C.BB()
$.Cv()
w.iT(0)
return new A.aC8(w)}}
A.aC8.prototype={
gbew(){var w=this.d
w===$&&C.c()
w=w.gKQ()
return new C.a2(w,new A.e_D(),C.T(w).k("a2<1>")).gM(0)},
a_(){var w,v,u,t,s=this
s.a1()
s.a.toString
w=$.aTx==null
if(w){w=D.o.F(Date.now(),1e5)
$.aTx=A.fXY(w)}w=$.aTx
w.toString
s.d=w
v=s.a
w.b=v.e||w.b
u=new A.Ay(-0.12,0.5,200,B.ftE,$.aw())
u.f=520
u.w=0.9
s.e=u
if(v.d.length!==0){w=w.gKQ()
t=new C.a2(w,new A.e_B(s),C.T(w).k("a2<1>"))
if(!t.gal(0))s.d.d=t.gL(0).a}w=s.d
v=w.c
v===$&&C.c()
s.f=A.hb7(v[w.d],"look",s.gbew(),0)
s.auY(!0)
if(s.a.d.length!==0)$.aT.x1$.push(new A.e_C(s))},
q(){var w=this.at
if(w!=null)w.a9(0)
this.a2()},
auY(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.c
w===$&&C.c()
v=w[t.d]
u=(v.gLU(0)*1.2>v.gya(0)*1.4?v.gLU(0)*1.2:v.gya(0)*1.4)+30
t=this.e
if(d){t===$&&C.c()
t.d=new A.N(0,30,v.gya(0)*0.45)
t.c=u
t.a=-0.12
t.b=0.5}else{t===$&&C.c()
t.n2(u,0.5,new A.N(0,30,v.gya(0)*0.45),-0.12)}},
aWi(){return this.auY(!1)},
mB(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
t=w[t.d]
w=u.r
v=u.x
u.f=A.hb7(t,w,u.gbew(),v)},
auZ(d,e){var w=this,v=w.at
if(v!=null)v.a9(0)
w.m(new A.e_h(w,d,e))
w.at=C.cM(D.ed,new A.e_i(w))},
td(d){return this.auZ(d,!0)},
Qy(d){this.m(new A.e_j(this,d))
A.mU(660,50,0.25,"tri")},
ace(d){var w=this,v=w.d
v===$&&C.c()
if(d===v.d)return
w.m(new A.dZV(w,d))
w.aWi()
A.mU(520,60,0.25,"tri")},
c1z(d){var w,v,u,t,s,r,q,p,o,n=this,m="tri"
if(d===0)return
if(d>=100&&d<200){if(n.r!=="furniture")return
n.m(new A.e__(n,d))
w=n.d
w===$&&C.c()
v=w.c
v===$&&C.c()
u=v[w.d].SA(n.x)
if(u!=null)n.td(B.yx.h(0,u.b).a+": move it with the arrows.")
return}if(d===300||d===301||d===302){if(n.r!=="walls")return
n.m(new A.e_0(n,d))
n.td("Wall picked. Choose a paint colour.")
return}if(d>=600&&d<620){t=d-600
w=n.d
w===$&&C.c()
v=w.c
v===$&&C.c()
w=v[w.d].w
if(t>=w.length)return
if(n.r==="doors"){n.m(new A.e_1(n,t))
w=n.d
v=w.c
v===$&&C.c()
A.mU(v[w.d].at.t(0,t)?700:450,70,0.25,m)
return}w=w[t]
n.m(new A.e_2(n,t))
A.mU(700,70,0.25,m)
C.bN(D.mQ,new A.e_3(n,t,w.c),x.P)
return}if(n.w)w=d===700||d===701||d===702||d===703||d===720||d===721
else w=!1
if(w){w=n.d
w===$&&C.c()
v=w.c
v===$&&C.c()
s=v[w.d].guC()
A.mU(s?1400:500,160,0.25,m)
w=s?"The tester glows and beeps: LIVE, 120 volts. Never touch a live wire. Switch the breaker off first.":"The tester stays dark: no power here. This room still needs wiring."
n.auZ(w,!s)
return}w=d===700
if(w||d===701){v=n.d
v===$&&C.c()
r=v.c
r===$&&C.c()
if(!r[v.d].guC())n.Pn()
else n.aZT(w?0:1)
return}if(d===702||d===703){w=n.d
w===$&&C.c()
v=w.c
v===$&&C.c()
if(!v[w.d].guC())n.Pn()
else{n.m(new A.e_4(n))
w=n.d
v=w.c
v===$&&C.c()
w=v[w.d]
q=w.db==="fan"
if(w.cy)w=q?"The fan spins.":"The light is on."
else w=q?"The fan stops.":"The light is off."
n.td(w)
w=n.d
v=w.c
v===$&&C.c()
A.mU(v[w.d].cy?900:500,60,0.25,m)}return}if(d===720||d===721){w=n.d
w===$&&C.c()
v=w.c
v===$&&C.c()
r=d-720
p=v[w.d].cx.h(0,r)
if(p==null)return
o=A.hb3(p)
if(o.d>0){w=n.c
w.toString
G.fTN(w,0,o.a,!0,D.x2,o.b)}else n.aZT(r)
return}if(d===710||d===711||d===712||d===713){w=n.d
w===$&&C.c()
v=w.c
v===$&&C.c()
if(!v[w.d].gBD())n.ZC()
else{w=n.f
w===$&&C.c()
t=w.b.h(0,d)
if(t!=null)n.td(t.a+": "+t.b)}}},
aZT(d){var w=this.c
w.toString
return C.bY(E.qv,null,new A.e_9(this,d),w,!0,!0,!1,D.nV,!1,!1,x.H)},
Pn(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$Pn=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.c
s===$&&C.c()
r=s[p.d]
if(r.c==="outside"){w=1
break}s=r.ch
if(s==null){q=A.fNj(A.i1X(r),r.b,!1,p.a*37+r.a)
q.aCR()
if(!r.ax)q.cBu()
r.ch=q
p=q}else p=s
p.b=t.d.b
p=t.c
p.toString
w=3
return C.b(C.a5(p,!1).ci(C.em(new A.dZY(r),!1,null,x.H)),$async$Pn)
case 3:if(t.c==null){w=1
break}t.m(t.gaWj())
if(r.guC())t.td(r.b+": the wiring is finished. The light has power.")
case 1:return C.h(u,v)}})
return C.i($async$Pn,v)},
ZC(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$ZC=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.c
s===$&&C.c()
r=s[p.d]
s=r.c
if(!(s==="bathroom"||s==="kitchen")){t.auZ("This room has no plumbing. Bathrooms and the kitchen do.",!1)
w=1
break}q=r.CW
if(q==null){s=s==="kitchen"?"kitchen":"bathroom"
s=r.CW=A.fMU(!1,p.a*41+r.a,s)
p=s}else p=q
if(!r.ay&&!p.gvL())r.CW.cBt()
r.CW.b=t.d.b
p=t.c
p.toString
w=3
return C.b(C.a5(p,!1).ci(C.em(new A.dZX(r),!1,null,x.H)),$async$ZC)
case 3:if(t.c==null){w=1
break}t.m(t.gaWj())
if(r.gBD())t.td(r.b+": the plumbing is finished and nothing leaks.")
case 1:return C.h(u,v)}})
return C.i($async$ZC,v)},
acf(d,e){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
v=w[t.d].SA(u.x)
if(v==null)return
u.m(new A.dZW(u,v,d,e))},
c1D(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
v=w[t.d].SA(u.x)
if(v==null)return
u.m(new A.e_k(u,v))},
ci9(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
v=w[t.d].SA(u.x)
if(v==null)return
u.m(new A.e_e(u,v))
u.td(B.yx.h(0,v.b).a+": "+B.cHP[v.f]+".")},
c1B(d){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
v=w[t.d].SA(u.x)
if(v==null)return
u.m(new A.e_f(u,v))},
bwc(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.c
w===$&&C.c()
v.m(new A.dZG(v,w[u.d].J(0,d)))
v.td(B.yx.h(0,d).a+" added. Move it with the arrows.")},
Ym(d,e,f,g,h){var w=null,v=e?g.j(0.25):D.c.j(0.07),u=C.m(14),t=e?g:D.b5
t=C.I(t,D.r,e?2:1)
v=C.a([C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e?g:D.c,w,w,w,w,w,w,w,w,12.5,w,w,D.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,Z.Xf,w,w,w)],x.p)
if(h)v.push(C.ao(w,C.p(w,w,D.f,w,w,new C.o(D.aC,w,C.I(B.Kj,D.r,2),w,w,w,D.a6),w,11,w,w,w,w,w,11),w,w,w,-2,-3,w))
return new C.C(D.fw,C.aE(w,new C.an(D.W,w,D.aa,D.f,v,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a9),w)},
I7(d,e,f){return this.Ym(d,e,f,D.aJ,!1)},
acd(d,e,f,g){return this.Ym(d,e,f,g,!1)},
aza(d,e,f,g){var w=null,v=g==null,u=v?34:w,t=v?w:D.l2,s=C.m(10),r=e?D.c:D.b5
r=C.I(r,D.r,e?3:1)
if(v)v=w
else v=C.av(C.d(g,w,w,w,w,w,w,C.l(w,w,d.j_()>0.5?D.w:D.c,w,w,w,w,w,w,w,w,12,w,w,D.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w)
return new C.C(E.te,C.aE(w,C.p(w,v,D.f,w,w,new C.o(d,w,r,s,w,w,D.n),w,34,w,w,t,w,w,u),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a9),w)},
csR(d,e,f){return this.aza(d,e,f,null)},
GM(d,e){var w=null,v=D.c.j(0.1),u=C.m(10),t=C.I(D.b5,D.r,1)
return new C.C(D.fw,C.aE(w,C.p(w,C.W(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,36,w,w,w,w,w,40),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a9),w)},
bEt(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
switch(l.r){case"furniture":w=l.d
w===$&&C.c()
v=w.c
v===$&&C.c()
u=v[w.d].SA(l.x)
w=x.p
v=C.a([],w)
if(u!=null)v.push(new C.a6(k,40,C.cB(C.a([l.GM(D.pr,new A.dZL(l)),l.GM(D.j7,new A.dZM(l)),l.GM(D.v9,new A.dZN(l)),l.GM(D.tr,new A.dZO(l)),l.GM(F.akz,l.gc1C()),l.GM(D.mX,l.gci8()),l.GM(D.e4,l.gc1A(l))],w),k,k,k,k,D.aQ,!1),k))
else v.push(B.aTx)
w=C.a([],w)
for(t=B.yx.gdL(B.yx),t=t.gai(t);t.C();){s=t.gU(t)
r=s.b
w.push(l.acd(r.b+" "+r.a,!1,new A.dZP(l,s),D.b2))}v.push(new C.a6(k,40,C.cB(w,k,k,k,k,D.aQ,!1),k))
return C.v(v,D.m,k,D.e,D.Q,0,D.p)
case"walls":w=l.y
v=w<0
w=v?"All walls":"Wall "+(w+1)+": tap Look to reset"
v=C.a([l.I7(w,v,new A.dZQ(l))],x.p)
for(q=0;q<8;++q)v.push(l.aza(B.auP[q],!1,new A.dZR(l,q),B.dao[q]))
return new C.a6(k,40,C.cB(v,k,k,k,k,D.aQ,!1),k)
case"floor":w=C.a([],x.p)
for(q=0;q<7;++q){v=B.auC[q]
t=l.d
t===$&&C.c()
s=t.c
s===$&&C.c()
w.push(l.aza(v.b,s[t.d].Q===q,new A.dZS(l,q),v.a))}return new C.a6(k,40,C.cB(w,k,k,k,k,D.aQ,!1),k)
case"ceiling":w=C.a([],x.p)
for(q=0;q<4;++q){v=B.att[q]
t=l.d
t===$&&C.c()
s=t.c
s===$&&C.c()
w.push(l.csR(v,s[t.d].as===q,new A.dZT(l,q)))}return new C.a6(k,40,C.cB(w,k,k,k,k,D.aQ,!1),k)
default:p=C.aX(x.S)
w=C.a([],x.p)
v=l.d
v===$&&C.c()
t=v.c
t===$&&C.c()
v=t[v.d].w
t=v.length
o=0
for(;o<v.length;v.length===t||(0,C.K)(v),++o){n=v[o]
s=n.c
if(p.J(0,s)){r=l.d.c
r===$&&C.c()
s=r[s]
r=s.c
if(r!=="outside"){m=s.ch
m=m==null?k:m.gw_()
if(m==null)m=!s.ax}else m=!0
if(m)if(r==="bathroom"||r==="kitchen"){r=s.CW
if(r==null)r=k
else r=r.gvL()&&r.gEQ()&&r.r&&r.y&&r.x.a===0
if(r==null)r=!s.ay}else r=!0
else r=!1
w.push(l.Ym("\ud83d\udeaa "+s.b,!1,new A.dZU(l,n),D.b2,!r))}}return new C.a6(k,40,C.cB(w,k,k,k,k,D.aQ,!1),k)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.d
e===$&&C.c()
w=e.c
w===$&&C.c()
v=w[e.d]
e=e.gcGU()
w=g.d.gKQ().length
u=g.f
u===$&&C.c()
t=g.e
t===$&&C.c()
s=g.z
r=g.Q
q=x.p
u=A.WK(t,new A.e_o(g),g.as,s,f,f,new A.e_p(),r,104,new A.e_q(g),g.gc1y(),u,C.a([new A.bgr(g.d,g.gc1x(),f)],q),f)
r=g.I7("\ud83d\udc41 Look",g.r==="look",new A.e_t(g))
s=g.I7("\ud83d\udecb Furniture",g.r==="furniture",new A.e_u(g))
t=g.I7("\ud83e\uddf1 Walls",g.r==="walls",new A.e_v(g))
p=g.I7("\ud83d\udfeb Floor",g.r==="floor",new A.e_w(g))
o=g.I7("\u2b1c Ceiling",g.r==="ceiling",new A.e_x(g))
n=g.I7("\ud83d\udeaa Doors",g.r==="doors",new A.e_y(g))
m=g.acd("\ud83d\udd26 Tester",g.w,new A.e_z(g),D.cw)
l=g.Ym("\u26a1 Wiring",!1,g.gcak(),D.cq,!v.guC())
k=v.c
k=(k==="bathroom"||k==="kitchen")&&!v.gBD()
k=g.Ym("\ud83d\udeb0 Plumbing",!1,g.gc9K(),D.cu,k)
j=g.acd("\ud83d\udcd8 Learn",!1,new A.e_A(d),D.by)
i=g.d.b
h=i?"\ud83d\udd25 Practice":"\ud83c\udf93 Learn mode"
return new A.AT(v.b,D.aJ,u,C.v(C.a([new C.a6(f,40,C.cB(C.a([r,s,t,p,o,n,m,l,k,j,g.acd(h,i,new A.e_r(g),D.cr)],q),f,f,f,f,D.aQ,!1),f),D.au,g.bEt()],q),D.F,f,D.e,D.Q,0,D.p),new A.e_s(g,d),""+e+"/"+w+" done",f)},
cgi(d){return C.bY(E.qv,null,new A.e_d(this),d,!0,!0,!0,D.nV,!1,!1,x.H)}}
A.bgr.prototype={
B(d){var w=null,v=D.w.j(0.6),u=C.m(12),t=C.I(D.b5,D.r,1)
return C.p(w,C.aE(w,C.b3(w,w,w,new A.bfQ(this.c,w),B.eFM),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dli(this),w,w,w,w,!1,D.a9),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.lB,w,w,w)}}
A.bfQ.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.b,e=f.c
e===$&&C.c()
w=d.a
v=0
for(;v<12;++v){u=e[v]
t=u.d*14+1
s=u.e*14+1
r=t+(u.f*14-2)
q=s+(u.r*14-2)
p=new C.aa(t,s,r,q)
o=u.a===f.d
n=u.c
m=n!=="outside"
if(m){l=u.ch
l=l==null?g:l.gw_()
if(l==null)l=!u.ax}else l=!0
if(l)if(n==="bathroom"||n==="kitchen"){l=u.CW
if(l==null)l=g
else l=l.gvL()&&l.gEQ()&&l.r&&l.y&&l.x.a===0
if(l==null)l=!u.ay}else l=!0
else l=!1
if(l)k=D.bk
else{if(m){l=u.ch
l=l==null?g:l.gw_()
if(l==null)l=!u.ax}else l=!0
k=!l?D.aC:D.d4}l=C.by(p,D.hy)
$.X()
j=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
if(m){m=u.ch
m=m==null?g:m.gw_()
if(m==null)m=!u.ax}else m=!0
if(m)if(n==="bathroom"||n==="kitchen"){m=u.CW
if(m==null)m=g
else m=m.gvL()&&m.gEQ()&&m.r&&m.y&&m.x.a===0
if(m==null)m=!u.ay}else m=!0
else m=!1
j.r=k.j(m?0.35:0.5).gp(0)
i=j.H()
w.drawRRect(C.ep(l),i)
i.delete()
l=C.by(p,D.hy)
j=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
j.b=D.ae
j.c=o?2.2:0.8
j.r=(o?D.c:D.c_).gp(0)
i=j.H()
w.drawRRect(C.ep(l),i)
i.delete()
A:{if("bedroom"===n){n="\ud83d\udecf"
break A}if("bathroom"===n){n="\ud83d\udebf"
break A}if("kitchen"===n){n="\ud83c\udf73"
break A}if("living"===n){n="\ud83d\udecb"
break A}n=""
break A}h=new C.km(new C.eo(n,g,g,D.cO,g,g,g,g,g,g,B.eUY),D.a5,D.ch,new C.jm(1),g,g,g,g,D.cd,g)
h.eO()
n=h.b
m=n.c
n=n.a.c
h.a6(d,new C.u(t+(r-t)/2-m/2,s+(q-s)/2-n.gbb(n)/2))}},
aq(d){return!0}}
A.bOJ.prototype={}
A.Je.prototype={}
A.Mw.prototype={
T(){return new A.bhn()}}
A.bhn.prototype={
zW(d){var w=this.c
w.toString
return C.a5(w,!1).ci(C.em(new A.dIZ(d),!1,null,x.H))},
bWS(d){var w
A:{if("ptrap"===d){w=B.aSg
break A}if("faucet"===d){w=B.aRK
break A}if("house"===d){w=B.fFc
break A}w=new A.ab6(d,null)
break A}return this.zW(w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
$.aqi="tech"
w=C.aH(l,l,l,l,I.nK,l,l,l,new A.dJ1(d),l,l,l,l,l,l)
v=D.aJ.j(0.16)
u=C.m(13)
t=x.p
u=C.A(C.a([w,C.p(l,B.b2h,D.f,l,l,new C.o(v,l,C.I(D.aJ.j(0.6),D.r,1),u,l,l,D.n),l,40,l,l,l,l,l,40),D.aw,B.btB],t),D.m,l,D.e,D.j,0,l,l)
v=C.A(C.a([C.D(m.aWl("Learn mode",!m.d,D.bc,new A.dJ2(m)),1),D.ab,C.D(m.aWl("Practice mode",m.d,D.cr,new A.dJ3(m)),1)],t),D.m,l,D.e,D.j,0,l,l)
w=C.m(20)
s=C.I(D.aJ,D.r,1.6)
w=C.aE(l,C.p(l,C.A(C.a([B.f4Z,D.ew,B.bty,B.bCb],t),D.m,l,D.e,D.j,0,l,l),D.f,l,l,new C.o(l,l,s,w,l,B.bRH,D.n),l,l,l,l,D.bY,l,l,l),D.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.dJ5(m),l,l,l,l,l,l,!1,D.a9)
s=C.d("JOBS",l,l,l,l,l,l,B.aNe,l,l,l)
r=m.aWk(C.a([m.DA("\ud83d\udd0c","Wire a room","Go to a room that needs wiring",D.bk,new A.dJ6(m)),m.DA("\ud83d\udebd","Plumb a room","Go to a bathroom or kitchen",D.aX,new A.dJ7(m)),m.DA("\ud83d\udd27","Fix a house","Walk the house and fix every sign",D.aJ,new A.dJ8(m)),m.DA("\ud83e\uddf1","Build a room","Frame, drywall, then wire",D.bc,new A.dJ9(m)),m.DA("\u26a1","Wiring bench","Just the wiring, one room",D.cq,new A.dJa(m)),m.DA("\ud83d\udcde","Service calls","A customer rings with problems",D.iY,new A.dJb(m))],t))
q=C.d("LESSONS",l,l,l,l,l,l,B.aNe,l,l,l)
p=C.a([],t)
for(o=0;o<6;++o){n=B.cVz[o]
p.push(m.DA(n.b,n.c,n.d,n.e,new A.dJc(m,n)))}p.push(m.DA("\ud83d\udcd8","Learn the trades","Short cards for beginners",D.by,new A.dJ4(m)))
return C.cb(l,D.bV,C.bo(!0,C.cB(C.a([u,D.ac,v,D.ac,w,new C.C(B.agM,s,l),r,new C.C(B.agM,q,l),m.aWk(p)],t),l,B.afQ,l,l,D.ah,!1),!0,!1,D.ag,!0,!0),l,!1,!1,l,l)},
aWl(d,e,f,g){var w=null,v=e?f.j(0.2):D.c.j(0.06),u=C.m(14),t=e?f:D.b5
t=C.I(t,D.r,e?2:1)
return C.aE(w,C.p(w,C.av(C.d(d,w,w,w,w,w,w,C.l(w,w,e?f:D.ad,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.jp,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,D.a9)},
aWk(d){var w,v,u,t,s=null,r=x.p,q=C.a([],r)
for(w=0;v=d.length,w<v;w+=2){u=d[w]
t=w+1
v=t<v?d[t]:D.bH
q.push(new C.C(D.cG,new C.Dt(new C.co(D.aQ,D.e,D.j,D.aj,s,D.p,s,0,C.a([new C.bE(1,D.bi,u,s),D.ab,new C.bE(1,D.bi,v,s)],r),s),s),s))}return C.v(q,D.m,s,D.e,D.j,0,D.p)},
DA(d,e,f,g,h){var w=null,v=C.m(16),u=C.I(g.j(0.5),D.r,1)
return C.aE(w,C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,D.Is,w,w,w),D.ao,C.d(e,w,w,w,w,w,w,V.In,w,w,w),D.bz,C.d(f,w,2,D.a2,w,w,w,B.eQI,w,w,w)],x.p),D.F,w,D.e,D.j,0,D.p),D.f,w,w,new C.o(B.Kj,w,u,v,w,w,D.n),w,w,w,w,D.bl,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a9)}}
A.b4H.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.bZ(0,new A.at5(r.c,r.d,r.r,r.e,r.x,r.w,E.VN,q),0,0,0)],p),n=r.as,m=n!=null
if(m)o.push(C.ao(q,C.v(n,D.F,q,D.e,D.j,0,D.p),q,q,8,q,8,q))
n=C.a([],p)
w=r.at
if(w!=null)D.d.v(n,w)
n.push(r.av_(D.hv,"Zoom in",new A.coy(r)))
n.push(r.av_(D.xR,"Zoom out",new A.coz(r)))
w=r.f
n.push(r.av_(B.byN,"Back to the whole view",w))
o.push(C.ao(q,C.v(n,D.m,q,D.e,D.j,0,D.p),q,q,q,8,8,q))
n=r.y
if(n!=null){v=r.ay
if(v==null)m=m?60:10
else m=v
v=r.z
u=(v?D.e9:D.eD).j(0.95)
t=C.m(14)
s=C.I(v?D.bc:D.cr,D.r,1)
o.push(C.ao(q,C.p(q,C.d(n,q,q,q,q,q,q,B.eSf,q,q,q),D.f,q,q,new C.o(u,q,s,t,q,q,D.n),q,q,q,q,D.om,q,q,q),q,q,10,62,m,q))}n=r.Q
if(n!=null){m=C.m(16)
v=C.I(D.b5,D.r,1)
n=C.a([C.d(n.a,q,q,q,q,q,q,B.f2b,q,q,q),D.d0,C.d(n.b,q,q,q,q,q,q,E.SH,q,q,q)],p)
u=r.ax
if(u!=null)D.d.v(n,C.a([D.ao,u],p))
o.push(C.ao(8,C.p(q,C.A(C.a([C.D(C.v(n,D.F,q,D.e,D.j,0,D.p),1),C.aH(q,q,q,q,D.FW,q,q,q,w,q,q,q,q,q,D.c7)],p),D.F,q,D.e,D.j,0,q,q),D.f,q,q,new C.o(E.aaz,q,v,m,q,q,D.n),q,q,q,q,E.afz,q,q,q),q,q,10,10,q,q))}return new C.an(D.W,q,D.aa,D.q,o,q)},
av_(d,e,f){var w=null,v=D.w.j(0.55),u=C.I(D.b5,D.r,1)
return new C.C(D.eO,C.ho(C.aE(w,C.p(w,C.W(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,38,w,w,w,w,w,38),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a9),w,e,w,w),w)}}
A.AT.prototype={
B(d){var w=this,v=null,u=C.aH(v,v,v,v,I.nK,v,v,v,new A.bQO(d),v,v,v,v,v,v),t=w.d,s=C.D(C.d(w.c,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1),r=t.j(0.15),q=C.m(16),p=C.I(t.j(0.6),D.r,1),o=x.p
q=C.A(C.a([u,s,C.aE(v,C.p(v,C.A(C.a([C.W(A2.aj0,t,v,v,v,17),D.eb,C.d(w.w,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),D.m,v,D.e,D.Q,0,v,v),D.f,v,v,new C.o(r,v,p,q,v,v,D.n),v,v,v,v,D.tg,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,!1,D.a9)],o),D.m,v,D.e,D.j,0,v,v)
p=C.aI(d,v,x.w).w
return C.cb(v,D.bV,C.bo(!0,C.v(C.a([new C.C(B.brS,q,v),C.p(v,C.cd(w.f,D.q,v,D.y,v,v,v,v,D.ah),D.f,v,new C.aY(0,1/0,0,p.a.b*0.34),B.aYT,v,v,v,v,E.Xd,v,v,1/0),C.D(C.bv(A1.a8T,w.e,D.aq),1)],o),D.m,v,D.e,D.j,0,D.p),!0,!1,D.ag,!0,!0),v,!1,!1,v,v)}}
A.ab6.prototype={
T(){return new A.axZ(new A.avx(C.V(x.S,x.N)))}}
A.axZ.prototype={
gFv(){var w,v=this,u=v.d
if(u===$){w=A.Q5(v.a.c)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
gkJ(){var w=this.f
return w===$?this.f=new A.Ay(0.42,0.26,12,B.fwJ,$.aw()):w},
gou(){var w=this,v=w.r
return v===$?w.r=A.fR5(w.gFv(),w.e,!0):v},
q(){var w=this.as
if(w!=null)w.a9(0)
this.a2()},
km(d,e){var w=this,v=w.as
if(v!=null)v.a9(0)
w.m(new A.d1c(w,d,e))
w.as=C.cM(D.l1,new A.d1d(w))},
oO(d){return this.km(d,!1)},
xh(){var w=this.e
w.d=w.d&&w.a&&w.c>=2
this.r=A.fR5(this.gFv(),w,!0)},
nN(){var w=this,v=w.gkJ(),u=w.e.c===0,t=u?2.8:0.4
u=u?12:10
v.n2(u,0.26,new A.N(0,0.1,t),0.42)
w.m(new A.d15(w))},
c1E(){var w,v,u,t="ground",s=this.e,r=!s.a||s.c>0,q=new A.d14(this)
switch(this.gFv().a){case"switch":w=q.$1(t)
v=q.$1("blackLine")
q=q.$1("blackLoad")
return C.a([r,r,r,w,v,q,s.c>=2&&s.d],x.u)
case"gfci":w=q.$1(t)
v=q.$1("white")
q=q.$1("black")
u=s.c>=2
return C.a([r,r,w,v,q,u,u&&s.d],x.u)
default:w=q.$1(t)
v=q.$1("white")
q=q.$1("black")
u=s.c
s=u>=2&&s.d
return C.a([r,r,w,v,q,u>=1,s],x.u)}},
Ia(d){var w,v,u,t,s,r,q,p=this
if(d===0){p.nN()
return}w=p.gFv()
v=w.f
u=C.T(v).k("a2<1>")
t=C.B(new C.a2(v,new A.d16(d),u),u.k("H.E"))
v=w.a
s=A.hfW(v,d)
if(s!=null){u=p.e
u=u.c===0&&u.b.j0(0,s)}else u=!1
if(u){w=p.e
if(w.a){A.mU(180,220,0.25,"square")
p.oO("STOP! The power is still on. Turn the breaker OFF before you touch any wire.")
return}w=w.b
w.bn(w,new A.d17(s))
p.m(p.gc1H())
p.km("Wire taken off the screw.",!0)
return}if(t.length!==0&&p.w.length!==0&&p.e.c===0){u=p.e
r=A.hfS(w,u,p.w,D.d.gL(t),!1)
if(r!=null){++p.Q
A.mU(180,220,0.25,"square")
p.oO(r)}else{A.y4()
p.m(new A.d18(p,d))
if(A.bBE(w,u))p.km("Every wire is on the right screw. Now push the device into the box.",!0)
else p.km(D.d.gL(t).b+": fastened correctly.",!0)
p.gkJ().Gi(7,A.bzm(v,d,u))
p.w=""}return}q=p.gou().b.h(0,d)
if(q!=null){p.m(new A.d19(p,d))
w=p.gkJ()
v=q.c
w.Gi(q.d,v)}},
cfg(){var w,v=this
v.m(new A.d1a(v))
w=v.e
if(w.a){A.mU(120,200,0.25,"saw")
if(w.c===0)v.oO("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{A.mU(600,100,0.25,"tri")
v.km("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
cu7(){var w,v,u=this
u.m(new A.d1e(u))
A.y4()
w=u.gFv().a
A:{if("switch"===w){v="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===w){v="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}v="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: "+u.Q+"."
break A}u.km(v,!0)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c1E(),a2=D.d.be(a1,new A.d1m())
if(a2<0)w="All done"
else{d.gFv()
w="Step "+(a2+1)+"/7"}v=d.gFv()
u=d.e
t=A.bBE(v,u)&&!u.a
s=d.gou()
r=d.gkJ()
q=d.x
p=d.y
o=d.z
n=q!==0?d.gou().b.h(0,d.x):a0
m=(u.a?D.eD:D.e9).j(0.95)
l=C.m(18)
k=u.a
j=C.I(k?D.cr:D.bc,D.r,1.5)
i=C.W(k?D.h6:B.ajS,D.c,a0,a0,a0,18)
h=x.p
l=A.WK(r,a0,o,q,n,a0,a0,p,a0,d.gI8(),d.gI9(),s,C.a([C.aE(a0,C.p(a0,C.A(C.a([i,D.eb,C.d(k?"Breaker ON (live)":"Breaker OFF (safe)",a0,a0,a0,a0,a0,a0,D.nb,a0,a0,a0)],h),D.m,a0,D.e,D.Q,0,a0,a0),D.f,a0,a0,new C.o(m,a0,j,l,a0,a0,D.n),a0,a0,a0,a0,D.h5,a0,a0,a0),D.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.gcff(),a0,a0,a0,a0,a0,a0,!1,D.a9)],h),C.a([A.Q4("Hints",D.aJ,D.qO,u.e,new A.d1n(d)),D.ao,A.Q4("Labels",D.aX,M.MQ,u.f,new A.d1o(d)),D.ao,A.Q4("Brass side",B.bfP,E.ajY,!1,new A.d1p(d)),D.ao,A.Q4("Silver side",B.Kl,D.MW,!1,new A.d1q(d)),D.P],h))
j=C.a([],h)
s=u.c
if(s===0){s=C.a([],h)
for(r=v.e,q=u.b,g=0;g<3;++g){f=r[g]
p=new C.aV(14,14)
o=f.a
n=d.w===o
m=n?D.b2:D.b5
e=new C.aA(m,n?3:1,D.r,-1)
m=C.a([],h)
if(q.j0(0,o))m.push(new C.C(D.fw,C.W(D.ee,f.d,a0,a0,a0,18),a0))
m.push(new C.x(f.b,a0,new C.F(!0,f.d,a0,a0,a0,a0,13,D.u,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0,a0,a0,a0,a0,a0,a0))
s.push(new C.C(D.j4,C.aE(a0,C.p(a0,new C.co(D.aQ,D.e,D.j,D.m,a0,D.p,a0,0,m,a0),D.f,a0,a0,new C.o(f.c,a0,new C.bP(e,e,e,e),new C.bs(p,p,p,p),a0,a0,D.n),a0,a0,a0,a0,D.hH,a0,a0,a0),D.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new A.d1r(d,f),a0,a0,a0,a0,a0,a0,!1,D.a9),a0))}s=C.c3(D.bE,s,D.bw,6,8)
if(t)u="Push it into the box"
else u=u.a?"Turn the breaker OFF first":"Fasten every wire first"
D.d.v(j,C.a([s,D.P,C.A(C.a([A.y3(u,B.akx,t?new A.d1s(d):a0,D.aJ)],h),D.m,a0,D.e,D.j,0,a0,a0)],h))}else if(s===1)D.d.v(j,C.a([C.A(C.a([A.y3("Pull it back out",D.qR,new A.d1t(d),D.ad),D.ab,A.y3("Put the cover plate on",L.va,new A.d1u(d),D.aJ)],h),D.m,a0,D.e,D.j,0,a0,a0)],h))
else{s=A.y3("Start over",D.l8,new A.d1v(d),D.ad)
u=u.d
r=u?"Tested \u2713":"Power on and test"
D.d.v(j,C.a([C.A(C.a([s,D.ab,A.y3(r,D.h6,u?a0:d.gcu6(),D.aJ)],h),D.m,a0,D.e,D.j,0,a0,a0)],h))}return new A.AT(v.b,D.aJ,l,C.v(j,D.m,a0,D.e,D.Q,0,D.p),new A.d1w(d,a3,a1),w,a0)}}
A.aDV.prototype={
T(){return new A.aDW(A.h2P())}}
A.aDW.prototype={
gkJ(){var w=this.e
return w===$?this.e=new A.Ay(-0.3,0.18,40,B.aQn,$.aw()):w},
gou(){var w=this.f
return w===$?this.f=A.bz2(this.d):w},
q(){var w=this.z
if(w!=null)w.a9(0)
this.a2()},
km(d,e){var w=this,v=w.z
if(v!=null)v.a9(0)
w.m(new A.eJj(w,d,e))
w.z=C.cM(D.l1,new A.eJk(w))},
oO(d){return this.km(d,!1)},
nN(){this.gkJ().n2(40,0.18,B.aQn,-0.3)
this.m(new A.eJc(this))},
Ia(d){var w,v,u,t,s,r,q=this,p="square"
if(d===0){q.nN()
return}w=C.E([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!q.d.a.t(0,w)){v=q.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
q.oO("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){A.mU(180,220,0.25,p)
u=q.r
A:{if("tail"===u){v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break A}if("trap"===u){v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break A}v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break A}q.oO(v)
return}if(w==="trap"&&!q.d.a.t(0,"tail")){A.mU(180,220,0.25,p)
q.oO("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!q.d.a.t(0,"trap")){A.mU(180,220,0.25,p)
q.oO("The trap arm joins the trap. Put the P-trap on first.")
return}q.m(new A.eJd(q,w))
A.y4()
q.km("Piece in place. "+(q.d.a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){t=v?"n1":"n2"
if(q.d.b.h(0,t)!==!0){q.m(new A.eJe(q,t))
A.y4()
q.km("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}s=q.gou().b.h(0,d)
if(s!=null){q.m(new A.eJf(q,d))
v=q.gkJ()
r=s.c
v.Gi(s.d,r)}},
c1J(){var w=this,v=x.Q,u=C.B(new C.a2(C.a(["n1","n2"],x.s),new A.eJg(w),v),v.k("H.E"))
w.m(new A.eJh(w,u))
if(u.length!==0){A.mU(180,220,0.25,"square")
w.oO("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{A.y4()
w.km("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d,i=j.a,h=i.t(0,"tail"),g=i.t(0,"trap"),f=i.t(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=D.d.be(w,new A.eJo())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.gou()
g=l.gkJ()
f=l.w
e=l.x
t=l.y
s=f!==0?l.gou().b.h(0,l.w):k
h=A.WK(g,new A.eJp(l),t,f,s,k,k,e,k,l.gI8(),l.gI9(),h,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=B.d8B[r]
g=i.t(0,q)?k:new A.eJq(l,q)
f=i.t(0,q)?D.dq:D.fl
t=new C.aV(14,14)
p=l.r===q
o=p?D.b2:D.b5
n=new C.aA(o,p?3:1,D.r,-1)
o=C.a([],e)
if(i.t(0,q))o.push(B.e0U)
p=B.dgg.h(0,q)
p.toString
m=i.t(0,q)?D.c_:D.c
o.push(new C.x(p,k,new C.F(!0,m,k,k,k,k,13,D.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k))
s.push(new C.C(D.j4,C.aE(k,C.p(k,new C.co(D.aQ,D.e,D.j,D.m,k,D.p,k,0,o,k),D.f,k,k,new C.o(f,k,new C.bP(n,n,n,n),new C.bs(t,t,t,t),k,k,D.n),k,k,k,k,D.hH,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,D.a9),k))}i=C.c3(D.bE,s,D.bw,6,8)
g=A.y3("Start over",D.l8,new A.eJr(l),D.ad)
f=u?"Run the water":"Build the drain first"
return new A.AT("Sink drain (P-trap)",D.cu,h,C.v(C.a([i,D.P,C.A(C.a([g,D.ab,A.y3(f,D.pD,u?l.gc1I():k,D.cu)],e),D.m,k,D.e,D.j,0,k,k)],e),D.m,k,D.e,D.Q,0,D.p),new A.eJs(d,w),j,k)}}
A.ayd.prototype={
T(){return new A.aye(A.h2P())}}
A.aye.prototype={
gkJ(){var w=this.e
return w===$?this.e=new A.Ay(-0.25,0.2,36,B.aQ8,$.aw()):w},
gou(){var w=this.f
return w===$?this.f=A.aNa(this.d):w},
q(){var w=this.z
if(w!=null)w.a9(0)
this.a2()},
km(d,e){var w=this,v=w.z
if(v!=null)v.a9(0)
w.m(new A.d46(w,d,e))
w.z=C.cM(D.l1,new A.d47(w))},
oO(d){return this.km(d,!1)},
nN(){this.gkJ().n2(36,0.2,B.aQ8,-0.25)
this.m(new A.d3Z(this))},
Ia(d){var w,v,u,t,s,r,q=this
if(d===0){q.nN()
return}w=x.k
v=C.B(new C.a2(B.a1X,new A.d41(d),w),w.k("H.E"))
if(v.length!==0&&q.r.length!==0){w=q.d
u=A.i19(w,q.r,D.d.gL(v))
if(u!=null){A.mU(180,220,0.25,"square")
q.oO(u)}else{A.y4()
q.m(new A.d42(q,d))
q.gkJ().Gi(12,A.af8(d))
q.km(A.fRq(w)?"All four ends are connected. Now open the valves.":D.d.gL(v).b+": connected.",!0)}return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.d.e.j0(0,t)){q.m(new A.d43(q,t))
q.km("Hose taken off.",!0)
return}}s=q.gou().b.h(0,d)
if(s!=null){q.m(new A.d44(q,d))
w=q.gkJ()
r=s.c
w.Gi(s.d,r)}},
c1G(d){var w,v=this
v.m(new A.d4_(v))
w=v.d
if(!w.f){v.km("Valves closed.",!0)
return}if(A.fRq(w)){A.y4()
v.km("Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",!0)}else{A.mU(180,220,0.25,"square")
v.oO("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d,i=j.r||j.e.a!==0,h=j.e,g=h.h(0,61)==="hot"&&h.h(0,63)==="hot",f=h.h(0,62)==="cold"&&h.h(0,64)==="cold",e=C.a([i,g,f,j.f&&A.fRq(j)],x.u),d=D.d.be(e,new A.d4b())
i=d<0?"All done":"Step "+(d+1)+"/4"
g=l.gou()
f=l.gkJ()
w=l.w
v=l.x
u=l.y
t=w!==0?l.gou().b.h(0,l.w):k
s=x.p
g=A.WK(f,new A.d4c(l),u,w,t,k,k,v,k,l.gI8(),l.gI9(),g,k,C.a([A.Q4("Hints",D.aJ,D.qO,j.r,new A.d4d(l)),D.P],s))
v=C.a([],s)
for(f=C.a3(h).k("bc<2>"),w=f.k("a2<H.E>"),r=0;r<2;++r){u={}
t=B.d86[r]
u.a=null
q=t.a
u.a=q
p=new C.aV(14,14)
o=l.r===q
n=o?D.b2:D.b5
m=new C.aA(n,o?3:1,D.r,-1)
n=C.a([],s)
if(new C.a2(new C.bc(h,f),new A.d4e(u),w).gM(0)===2)n.push(B.e0W)
n.push(new C.x(t.b,k,D.uj,k,k,k,k,k,k,k,k,k))
v.push(new C.C(D.j4,C.aE(k,C.p(k,new C.co(D.aQ,D.e,D.j,D.m,k,D.p,k,0,n,k),D.f,k,k,new C.o(t.c,k,new C.bP(m,m,m,m),new C.bs(p,p,p,p),k,k,D.n),k,k,k,k,D.hH,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.d4f(u,l),k,k,k,k,k,k,!1,D.a9),k))}h=C.c3(D.bE,v,D.bw,6,8)
f=A.y3("Start over",D.l8,new A.d4g(l),D.ad)
j=j.f?"Close the valves":"Open the valves"
return new A.AT("Faucet supply lines",D.cr,g,C.v(C.a([h,D.P,C.A(C.a([f,D.ab,A.y3(j,D.pD,l.gc1F(l),D.cr)],s),D.m,k,D.e,D.j,0,k,k)],s),D.m,k,D.e,D.Q,0,D.p),new A.d4h(a0,e),i,k)}}
A.az6.prototype={
T(){return new A.az7(A.fXZ())}}
A.az7.prototype={
gkJ(){var w,v=this.e
if(v===$){w=new A.Ay(-0.3,0.48,46,B.Tc,$.aw())
w.f=80
this.e=w
v=w}return v},
gou(){var w=this.f
return w===$?this.f=A.aeX(this.d):w},
q(){var w=this.z
if(w!=null)w.a9(0)
this.a2()},
km(d,e){var w=this,v=w.z
if(v!=null)v.a9(0)
w.m(new A.dba(w,d,e))
w.z=C.cM(D.l1,new A.dbb(w))},
oO(d){return this.km(d,!1)},
nN(){this.gkJ().n2(46,0.48,B.Tc,-0.3)
this.m(new A.db4(this))},
Ia(d){var w,v,u,t=this
if(d===0){t.nN()
return}if(d===72){w=t.d
w=w.d.t(0,72)&&w.a>=5}else w=!1
if(w){t.m(new A.db6(t,d))
A.y4()
t.km("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.gkJ().Gi(22,B.fzX)
return}w=d===87
if(w||d===86){v=t.d
v=v.b&&!v.c&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new A.db7(t,d))
A.y4()
t.km("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}A.mU(180,220,0.25,"square")
t.oO(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.gou().b.h(0,d)
if(u!=null){t.m(new A.db8(t,d))
w=t.gkJ()
v=u.c
w.Gi(u.d,v)}},
c9o(d){var w,v
A:{if("ptrap"===d){w=B.aSg
break A}if("faucet"===d){w=B.aRK
break A}w=new A.ab6(d,null)
break A}v=this.c
v.toString
C.a5(v,!1).ci(C.em(new A.db5(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=B.d3B[m.a],k=o.r,j=k===0?n:A.hRz(k)
k=m.d.t(0,72)
w=!m.b||m.c
v=C.a([!k,w],x.u)
w=m.a
k=o.gou()
u=o.gkJ()
t=o.r
s=o.x
r=o.y
q=t!==0?o.gou().b.h(0,o.r):n
p=j==null?n:C.aE(n,C.p(n,B.f3m,D.f,n,n,new C.o(D.aJ,n,n,C.m(12),n,n,D.n),n,n,n,n,D.tg,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.dbe(o,j),n,n,n,n,n,n,!1,D.a9)
k=A.WK(u,new A.dbf(o),r,t,q,p,new A.dbg(o),s,n,o.gI8(),o.gI9(),k,n,n)
s=l.a
p=x.p
q=C.A(C.a([C.D(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,B.eX_,n,n,n),1),A.Q4("Wrench",D.aX,D.qJ,o.w==="wrench",new A.dbh(o))],p),D.m,n,D.e,D.j,0,n,n)
t=C.d(l.b,n,3,D.a2,n,n,n,B.eY4,n,n,n)
m=C.kR(D.by,6,s,6,0,new A.dbi(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.D(C.d(s,n,n,n,n,n,n,C.l(n,n,u?D.es:D.f9,n,n,n,n,n,n,n,n,11.5,n,n,D.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return new A.AT("Build and fix a house",D.by,k,C.v(C.a([q,D.bz,t,m,C.A(C.a([s,C.D(C.d(r,n,n,n,n,n,n,C.l(n,n,u?D.es:D.f9,n,n,n,n,n,n,n,n,11.5,n,n,D.I,n,n,!0,n,n,n,n,n,n,n,n),D.dK,n,n),1)],p),D.m,n,D.e,D.j,0,n,n)],p),D.m,n,D.e,D.Q,0,D.p),new A.dbj(d,v),"Stage "+(w+1)+"/7",n)}}
A.jw.prototype={}
A.LT.prototype={}
A.a5E.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([C.A(C.a([C.aH(m,m,m,m,I.nK,m,m,m,new A.c4t(d),m,m,m,m,m,m),B.fcS],l),D.m,m,D.e,D.j,0,m,m)],l)
for(w=0;w<5;++w){v=B.da7[w]
u=v.c
t=C.a([new C.C(D.agL,new C.x(v.b+"  "+v.a.toUpperCase(),m,new C.F(!0,u,m,m,m,m,12,D.u,m,1.1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],l)
for(s=v.d,r=s.length,q=0;q<r;++q){p=s[q]
o=new C.aV(14,14)
n=new C.aA(u.j(0.35),1,D.r,-1)
t.push(C.p(m,C.v(C.a([new C.x(p.a,m,D.jB,m,m,m,m,m,m,m,m,m),D.d0,new C.x(p.b,m,E.SH,m,m,m,m,m,m,m,m,m)],l),D.F,m,D.e,D.j,0,D.p),D.f,m,m,new C.o(B.Kj,m,new C.bP(n,n,n,n),new C.bs(o,o,o,o),m,m,D.n),m,m,m,D.cG,D.bl,m,m,m))}D.d.v(k,t)}return C.cb(m,D.bV,C.bo(!0,C.cB(k,m,B.afQ,m,m,D.ah,!1),!0,!1,D.ag,!0,!0),m,!1,!1,m,m)}}
A.cfh.prototype={}
A.Ek.prototype={}
A.n8.prototype={}
A.VS.prototype={}
A.cf7.prototype={
buT(d,e,f){var w,v=this
if(f!=null)w=D.d.iw(B.auf,new A.cfb(f))
else{w=new C.eS()
w.dH(v.a)
w=B.auf[w.aB(2)]}v.c!==$&&C.aO()
v.c=w
w=new C.eS()
w.dH(v.a+7)
w=w.he()
v.d!==$&&C.aO()
v.d=w},
uH(d,e){var w=this.c
w===$&&C.c()
return D.d.iw(w.c,new A.cfc(e))},
OC(d){++this.w
return new A.eC(!1,d,!1,"")},
c_g(d){var w=d.d
return new C.J(w,new A.cf8(this),C.T(w).k("J<1,n>")).aH(0," and ")},
beh(d,e){var w,v,u,t,s=this,r=s.uH(0,e),q=s.e
if(q.t(0,e))return s.OC("The "+r.c.toLowerCase()+" is already there.")
if(d!==r.b)return s.OC(s.b?"That does not go here.":"That does not go here. This spot is for the "+r.c.toLowerCase()+".")
for(w=r.d,v=w.length,u=0;u<v;++u)if(!q.t(0,w[u])){q=s.b?"Not yet: something has to go in first.":"Not yet. "+r.e+" Put in the "+s.c_g(r)+" first.";++s.w
return new A.eC(!1,q,!1,"")}if(r.f&&s.r)return s.OC(s.b?"The water is still on!":"Stop! The water is still on. Cutting into a pipe with the water on floods the room. Turn the water off at the main valve first (pick the hand and tap the main valve).")
q.J(0,e)
s.y=!1
s.x.a8(0)
if(r.r>0)t=s.b?"":" It is only loose. Pick the wrench and tap it to tighten the joints."
else t=""
return new A.eC(!0,r.c+" fitted."+t,!1,"")},
bfw(d){var w,v,u,t,s=this,r=s.uH(0,d)
if(!s.e.t(0,d))return s.OC(s.b?"Nothing to tighten yet.":"There is nothing to tighten yet: the "+r.c.toLowerCase()+" is not fitted.")
w=r.r
if(w===0)return s.OC(s.b?"That does not need tightening.":"The "+r.c.toLowerCase()+" does not have joints to tighten. It just sits in place.")
v=s.f
u=v.h(0,d)
if(u==null)u=0
if(u>=w)return s.OC("Already tight. More force would crack it.")
t=u+1
v.n(0,d,t)
s.x.a8(0)
s.y=!1
v=r.c
return new A.eC(!0,t>=w?v+": every joint is tight now.":v+": one joint tightened, one to go.",!1,"")},
bde(d){var w=this.uH(0,d),v=this.f.h(0,d)
if(v==null)v=0
return w.r-v},
aGq(){var w,v,u,t,s,r,q=this
q.r=!q.r
w=q.x
w.a8(0)
if(!q.r)return B.aTc
v=q.c
v===$&&C.c()
u=v.c
t=C.T(u).k("a2<1>")
s=C.B(new C.a2(u,new A.cfd(q),t),t.k("H.E"))
v=v.c
u=C.T(v).k("a2<1>")
r=C.B(new C.a2(v,new A.cfe(q),u),u.k("H.E"))
q.y=!0
if(s.length!==0){w.v(0,new C.J(s,new A.cff(),C.T(s).k("J<1,n>")));++q.w
return new A.eC(!1,"Water is spraying from an open pipe where the "+D.d.gL(s).c.toLowerCase()+" should be! Turn the water off and finish the job.",!0,"")}if(r.length!==0){w.v(0,new C.J(r,new A.cfg(),C.T(r).k("J<1,n>")));++q.w
return new A.eC(!1,"The "+D.d.gL(r).c.toLowerCase()+" is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.",!0,"")}if(!q.gvL())return B.aT2
return B.aSQ},
cBt(){var w,v,u,t,s,r,q,p=this
p.r=!0
p.aGq()
w=p.c
w===$&&C.c()
v=w.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
p.beh(s.b,s.a)}for(w=w.c,v=w.length,t=0;t<v;++t){s=w[t]
for(u=s.r,r=s.a,q=0;q<u;++q)p.bfw(r)}p.aGq()
p.w=0},
gvL(){var w=this.c
w===$&&C.c()
return D.d.de(w.c,new A.cf9(this))},
gEQ(){var w=this.c
w===$&&C.c()
return D.d.de(w.c,new A.cfa(this))},
gajF(){var w=this
return w.gvL()&&w.gEQ()&&w.r&&w.y&&w.x.a===0}}
A.US.prototype={
T(){var w,v=new A.Ay(-0.25,0.4,175,B.aQQ,$.aw())
v.f=200
w=new C.BB()
$.Cv()
w.iT(0)
return new A.aCD(v,w)}}
A.aCD.prototype={
gCc(d){var w=this.d
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.d=w}return w},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w==null){w=v.gCc(0)
v.a.toString
w=A.fMU(!1,w,null)}v.e=w
v.r=A.hb9(w,v.x,!w.b)},
q(){var w=this.at
if(w!=null)w.a9(0)
this.a2()},
acg(){var w=this.e
w===$&&C.c()
return this.r=A.hb9(w,this.x,!w.b)},
aWp(d,e){var w=this,v=w.at
if(v!=null)v.a9(0)
w.m(new A.edc(w,d,e))
w.at=C.cM(D.jm,new A.edd(w))},
aWn(){this.f.n2(175,0.4,B.aQQ,-0.25)
this.m(new A.ed5(this))},
crR(d){var w,v,u=this.e
u===$&&C.c()
u=u.c
u===$&&C.c()
u=u.c
w=u.length
if(d>=9100&&d<9100+w)return u[d-9100].a
if(d>=9200&&d<9260){v=D.o.an(d-9200,2)
if(v<w)return u[v].a}if(d===9260)return"trap"
if(d===9261)return"arm"
return null},
avT(d){var w=this.e
w===$&&C.c();++w.w
return new A.eC(!1,d,!1,"")},
c1N(d){return this.aWm(d)},
crb(d){var w
A:{if("main"===d){w=9400
break A}w=this.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=9100+D.d.be(w.c,new A.ede(d))
break A}this.aWm(w)},
aWq(){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==="hand")return C.a([B.eoo],x.L)
if(o==="wrench"){o=C.a([],x.L)
w=p.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=w.c
v=w.length
u=0
for(;u<v;++u){t=w[u]
s=t.a
if(p.e.e.t(0,s)){r=p.e
q=r.uH(0,s)
r=r.f.h(0,s)
if(r==null)r=0
r=q.r-r>0}else r=!1
if(r)o.push(new C.z(s,t.c))}return o}o=C.a([],x.L)
w=p.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=w.c
v=w.length
u=0
for(;u<v;++u){t=w[u]
if(t.b===p.x&&!p.e.e.t(0,t.a))o.push(new C.z(t.a,t.c))}return o},
aWm(d){var w,v,u,t,s,r=this
if(d===0)return
w=r.r
w===$&&C.c()
v=w.b.h(0,d)
if(r.x.length===0){r.m(new A.ecY(r,d))
if(v!=null)r.aWp(v.a+": "+v.b,!0)
return}u=r.crR(d)
w=r.x
if(w==="hand")if(d===9400){w=r.e
w===$&&C.c()
t=w.aGq()}else{w=r.e
w===$&&C.c()
t=r.avT(w.b?"Your hand is only for the main water valve.":"Your hand is for the main water valve. Parts are placed by picking them from the tray.")}else if(w==="wrench")if(u==null){w=r.e
w===$&&C.c()
t=r.avT(w.b?"Nothing to tighten.":"There is nothing to tighten there.")}else{w=r.e
w===$&&C.c()
t=w.bfw(u)}else if(u==null){w=r.e
w===$&&C.c()
t=r.avT(w.b?"Not there.":"That does not go there. Tap one of the glowing spots.")}else{s=r.e
s===$&&C.c()
t=s.beh(w,u)}w=t.a
if(w)A.y4()
else A.mU(180,220,0.25,"square")
r.m(new A.ecZ(r,d))
w=w&&!t.c
r.aWp(t.b,w)
w=r.e
w===$&&C.c()
if(w.gajF()&&!r.as){r.as=!0
$.aT.x1$.push(new A.ed_(r))}},
c1K(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new A.ed4(this),v,w,!0,!0,x.H)},
aWo(){this.m(new A.eda(this))
this.aWn()},
av0(d,e,f){var w,v=null,u=this.x===d,t=u?D.aJ.j(0.25):D.c.j(0.07),s=C.m(14),r=u?D.aJ:D.b5
r=C.I(r,D.r,u?2:1)
w=C.W(f,u?D.aJ:D.ad,v,v,v,19)
return new C.C(E.te,C.aE(v,C.p(v,C.A(C.a([w,D.bo,C.d(e,v,v,v,v,v,v,C.l(v,v,u?D.aJ:D.c,v,v,v,v,v,v,v,v,12.5,v,v,D.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),D.m,v,D.e,D.j,0,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,v,D.h4,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.ed1(this,u,d),v,v,v,v,v,v,!1,D.a9),v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
h===$&&C.c()
h=h.c
h===$&&C.c()
h=h.c
w=new C.a2(h,new A.edf(j),C.T(h).k("a2<1>")).gM(0)
h=j.e.c
h===$&&C.c()
v=j.r
v===$&&C.c()
u=j.y
t=j.z
s=j.Q
r=u!==0?v.b.h(0,u):i
v=A.WK(j.f,new A.edg(j),s,u,r,i,new A.edh(),t,i,j.gc1L(),j.gc1M(),v,i,i)
t=x.p
r=C.a([],t)
if(j.x.length!==0&&j.aWq().length!==0){u=C.a([],t)
for(s=j.aWq(),q=s.length,p=0;p<s.length;s.length===q||(0,C.K)(s),++p){o={}
n=s[p]
o.a=null
o.a=n.a
m=new C.aV(12,12)
l=new C.aA(D.b2,1,D.r,-1)
u.push(C.aE(i,C.p(i,new C.x("\ud83d\udccd "+n.b,i,D.nY,i,i,i,i,i,i,i,i,i),D.f,i,i,new C.o(D.fD.j(0.35),i,new C.bP(l,l,l,l),new C.bs(m,m,m,m),i,i,D.n),i,i,i,i,B.Xg,i,i,i),D.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.edi(o,j),i,i,i,i,i,i,!1,D.a9))}r.push(new C.C(D.eO,C.c3(D.bE,u,D.bw,6,6),i))}u=j.e
if(u.b)u="Practice mode: no hints. Build it in the right order."
else if(u.gvL())u="Everything is fitted. Tighten every joint, then turn the main water on to test."
else{u=j.e.c
u===$&&C.c()
u="Job: "+u.d}r.push(new C.bI(D.a3,i,i,C.d(u,i,2,D.a2,i,i,i,B.aNv,i,i,i),i))
r.push(D.P)
t=C.a([j.av0("hand","Hand",B.akr),j.av0("wrench","Wrench",D.qJ)],t)
for(p=0;p<11;++p){k=B.bT4[p]
u=B.dec.h(0,k)
u.toString
t.push(j.av0(k,u,X.ajQ))}r.push(new C.a6(i,52,C.cB(t,i,i,i,i,D.aQ,!1),i))
return new A.AT("Plumbing job: "+h.b,D.aX,v,C.v(r,D.m,i,D.e,D.Q,0,D.p),new A.edj(j,d),""+w+"/"+h.c.length+" fitted",i)},
bXa(d){return C.bY(E.qv,null,new A.ed9(this),d,!0,!0,!0,D.nV,!1,!1,x.H)}}
A.yo.prototype={}
A.pF.prototype={}
A.Ww.prototype={}
A.atz.prototype={}
A.aRW.prototype={}
A.eC.prototype={
gj4(){return this.a}}
A.b3c.prototype={
ceH(d,e){var w,v,u,t,s=this,r=null,q="outlet",p="switch",o=new C.eS()
o.dH(s.a)
w=d==null?o.aB(3):d
v=C.a([0,1,2],x.t)
D.d.fn(v,o)
u=3+o.aB(2)
switch(w){case 0:t=e==null?"Living room":e
s.c!==$&&C.aO()
s.c=t
t=C.a([new A.pF(v[0],q,r),new A.pF(v[1],q,r),new A.pF(5,"light",u),new A.pF(u,p,r)],x.A)
s.d!==$&&C.aO()
s.d=t
break
case 1:t=e==null?"Bedroom":e
s.c!==$&&C.aO()
s.c=t
t=C.a([new A.pF(v[0],q,r),new A.pF(v[1],q,r),new A.pF(6,"fan",u),new A.pF(u,p,r)],x.A)
s.d!==$&&C.aO()
s.d=t
break
default:t=e==null?"Kitchen":e
s.c!==$&&C.aO()
s.c=t
t=C.a([new A.pF(v[0],"gfci",r),new A.pF(v[1],"gfci",r),new A.pF(5,"light",u),new A.pF(u,p,r)],x.A)
s.d!==$&&C.aO()
s.d=t}},
gala(){var w,v=C.aX(x.S),u=this.d
u===$&&C.c()
w=0
for(;w<4;++w)v.J(0,u[w].a)
return v},
cNh(d){var w,v,u=this.d
u===$&&C.c()
w=0
for(;w<4;++w){v=u[w]
if(v.a===d)return v}return null},
fJ(d){++this.f
return new A.eC(!1,d,!1,"")},
aCR(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
g===$&&C.c()
w=h.x
v=0
for(;v<4;++v){u=g[v].a
t=A.kX(u)
if(t.e==="fan")s="fan"
else s=t.c?"ceiling":"wall"
w.n(0,u,s)}g=C.a([],x.t)
for(r=0;r<$.Ga().length;++r)g.push(r)
h.y.v(0,g)
h.z.v(0,h.gala())
for(g=h.Q,w=x.S,v=0;v<3;++v){q=B.nP[v]
u=C.aX(w)
s=C.aX(w)
p=new A.atz(u,s)
p.d=p.e=p.a=!0
for(o=h.ao1(q),n=o.length,m=0;m<o.length;o.length===n||(0,C.K)(o),++m)for(l=o[m]*10,k=0;k<6;++k)s.J(0,l+k)
for(s=h.gala(),o=C.a3(s),n=new C.nI(s,s.r,o.k("nI<1>")),n.c=s.e,o=o.c,s=q+48;n.C();){l=n.d
if(l==null)l=o.a(l)
t=A.kX(l)
if(!t.c){j=t.d.a
j=j>=q&&j<=s}else j=!1
if(j)u.J(0,l)}g.n(0,q,p)}for(g=h.as,v=0;v<2;++v){i=g[v]
i.a=!0
i.b=3
i.d=i.c=!0}},
cBu(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.d
l===$&&C.c()
w=0
for(;w<4;++w){v=l[w]
m.bcg(v.a,v.b)}for(u=x.S,t=x.N,s=m.at,w=0;w<4;++w){r=l[w].a
q=s.h(0,r)
if(q==null)continue
p=q.a
A:{if("outlet"===p){o=C.E([25,"ground",23,"white",21,"black"],u,t)
break A}if("gfci"===p){o=C.E([25,"ground",24,"white",22,"black"],u,t)
break A}if("switch"===p){o=C.E([25,"ground",21,"blackLine",22,"blackLoad"],u,t)
break A}o=C.E([53,"ground",52,"white",51,"black"],u,t)
break A}for(o=new C.LX(o,o.r,o.e,C.a3(o).k("LX<1,2>"));o.C();){n=o.d
m.baD(r,n.b,n.a)}m.beA(r)
m.b9v(r)}if(!m.ax)m.aGo()
for(w=0;w<4;++w){v=l[w]
u=v.b
if(u==="outlet"||u==="gfci"){u=v.a
m.bej(u,"lamp")
m.bfO(u)}}for(l=D.d.gai(l),u=new C.h2(l,new A.ck3());u.C();){t=l.gU(0).a
m.aD1(t)
m.aD1(t)}},
aIK(d){var w,v,u=A.kX(d).d.a,t=C.a([],x.t)
for(w=0;v=$.Ga(),w<v.length;++w){v=v[w]
if(v>u&&v<64)t.push(w)}return t},
cLb(d,e){var w,v,u=this,t=u.x
if(t.ag(0,d))return u.fJ("There is already a box at "+A.kX(d).b+".")
w=A.kX(d)
v=w.c
if(!v&&e!=="wall")return u.fJ("That is a ceiling box. On the wall you use a plain wall box (the blue one with ears).")
if(v&&e==="wall")return u.fJ("A wall box cannot go in the ceiling. Use a round ceiling box.")
if(w.e==="fan"&&e!=="fan"){if(!u.b)return u.fJ('A fan is heavy and it shakes. It needs a box that says "fan rated". A plain ceiling box can let the fan fall.')
t.n(0,d,e);++u.f
return B.aTq}t.n(0,d,e)
t=v?"ceiling joist":"side of the stud"
return new A.eC(!0,w.b+": box fixed to the "+t+".",!1,"")},
cFW(d){var w,v=this
if(d<0||d>=$.Ga().length)return B.aTk
w=v.y
if(w.t(0,d))return v.fJ("That stud already has a hole.")
if(v.x.a===0)return v.fJ("Mount the boxes first. Then you know where the cable has to go and which studs need a hole.")
w.J(0,d)
return B.aT4},
cOi(d){var w,v,u,t,s=this,r=A.kX(d)
if(!s.x.ag(0,d))return s.fJ("There is no box at "+r.b+". Mount the box first, then pull the cable to it.")
w=s.z
if(w.t(0,d))return s.fJ("The cable is already there.")
v=s.aIK(d)
u=C.T(v).k("a2<1>")
t=C.B(new C.a2(v,new A.cka(s),u),u.k("H.E"))
if(t.length!==0){w=D.o.V($.Ga()[D.d.gL(t)])
v=t.length
u=v===1?"it":"the studs"
return s.fJ("The cable is stuck: the stud at "+w+" inches has no hole. Drill "+u+" first ("+v+" left on the way).")}w.J(0,d)
return new A.eC(!0,"Cable pulled from the panel to "+r.b+", through the studs and along the ceiling.",!1,"")},
gaGd(){return this.gala().de(0,new A.ckb(this))},
anI(d){var w,v,u,t
for(w=this.Q,w=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gai(0);w.C();){v=w.d
u=v.b
if(u.a){t=v.a
t=d>=t&&d<=t+48}else t=!1
if(t)return u}return null},
cIC(d){var w,v,u=this
if(!u.gaGd())return u.fJ("Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.")
if(!D.d.t(B.a1Z,d))return B.aST
if(!D.d.t(B.nP,d))return u.fJ("The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.")
w=u.Q
v=w.h(0,d)
if((v==null?null:v.a)===!0)return u.fJ("There is already a sheet there.")
v=w.h(0,d)
if(v==null){v=x.S
v=new A.atz(C.aX(v),C.aX(v))}v.a=!0
w.n(0,d,v)
return B.aT3},
ao1(d){var w,v,u,t=C.a([],x.t)
for(w=d+48,v=0;u=$.Ga(),v<u.length;++v){u=u[v]
if(u>=d&&u<=w)t.push(v)}return t},
cER(d){var w,v,u=this,t=A.kX(d)
if(t.c)return u.fJ("Ceiling fixtures do not need an opening in the wall.")
if(!u.x.ag(0,d))return u.fJ("There is no box at "+t.b+".")
w=u.anI(t.d.a)
if(w==null)return u.fJ("There is no sheet over this box yet. Hang the sheet first, then cut the opening.")
v=w.b
if(v.t(0,d))return u.fJ("The opening is already cut.")
v.J(0,d)
return B.aTd},
aI0(d,e,f){var w,v,u,t,s,r=this
if(f)return r.fJ("Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).")
w=x.Y
v=C.B(new C.a2(B.nP,new A.ckc(r,d),w),w.k("H.E"))
if(v.length===0)return r.fJ("There is no sheet here yet.")
u=d*10+e
if(D.d.de(v,new A.ckd(r,u)))return r.fJ("There is already a screw there.")
for(w=v.length,t=r.Q,s=0;s<v.length;v.length===w||(0,C.K)(v),++s)t.h(0,v[s]).c.J(0,u)
return B.aTf},
bjK(d,e){return this.aI0(d,e,!1)},
blg(d){var w=this.Q.h(0,d)
if(w==null||!w.a)return!1
return D.d.de(this.ao1(d),new A.ckf(w))},
gaAG(){return D.d.de(B.nP,new A.ck2(this))},
gaAF(){var w=this.gala()
return new C.a2(w,new A.ck0(),C.a3(w).k("a2<cl.E>")).de(0,new A.ck1(this))},
cQ8(d){var w,v=this
if(!v.gaAG())return v.fJ("Hang all the sheets first.")
if(!D.d.de(B.nP,v.ganJ()))return v.fJ("Finish screwing every sheet to the studs first. Tape goes on a solid wall.")
w=v.as[d]
if(w.a)return v.fJ("This seam already has tape.")
w.c=w.a=!0
return B.aSX},
cLe(d){var w,v=this,u=v.as[d]
if(!u.a)return v.fJ("Tape first. The mud goes over the tape.")
if(!u.c)return v.fJ("The last coat is still wet. Let it dry before the next coat.")
w=u.b
if(w>=3)return v.fJ("Three coats are enough. Now sand it.");++w
u.b=w
u.c=!1
return new A.eC(!0,"Coat "+w+" of joint compound spread. Let it dry.",!1,"")},
cKa(){var w,v=this.as
if(D.d.de(v,new A.ck8()))return B.aTa
for(w=0;w<2;++w)v[w].c=!0
return B.aTo},
bjy(d){var w=this,v=w.as[d]
if(v.b<3)return w.fJ("Put on all three coats of mud first. Sanding now would just rub off the tape.")
if(!v.c)return w.fJ("The mud is still wet. Let it dry first.")
if(v.d)return w.fJ("Already sanded.")
v.d=!0
return B.aSU},
cNw(d){var w=this,v=w.Q.h(0,d)
if(v==null||!v.a)return w.fJ("There is no sheet there.")
if(!w.gaAF())return w.fJ("Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.")
if(!D.d.de(w.as,new A.ck9()))return w.fJ("Sand the seams first. Paint shows every bump.")
if(v.e)return w.fJ("This sheet is already painted.")
v.e=!0
return B.aSR},
gyc(){var w=this
return w.gaAG()&&D.d.de(B.nP,w.ganJ())&&w.gaAF()&&D.d.de(w.as,new A.ck4())&&D.d.de(B.nP,new A.ck5(w))},
Mw(){var w,v
for(w=this.at,w=new C.dt(w,w.r,w.e);w.C();){v=w.d.b
v.a=this.ax&&!this.ay}},
bWp(d,e){if(d.c)return e==="light"||e==="fan"?"":"A ceiling box holds a light or a fan, not an outlet or a switch."
return e==="outlet"||e==="gfci"||e==="switch"?"":"A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch."},
bcg(d,e){var w,v,u,t,s,r=this,q=A.kX(d)
if(!r.gyc())return r.fJ("Finish the drywall first. Devices go in after the walls are painted.")
w=r.x
if(!w.ag(0,d)||!r.z.t(0,d))return r.fJ("There is no box with cable at "+q.b+".")
v=r.at
if(v.ag(0,d))return r.fJ("There is already a device there. Pull it out first if you want to move it.")
u=r.bWp(q,e)
if(u.length!==0)return r.fJ(u)
t=e==="switch"
if(!(t&&q.e==="low"))s=!t&&!q.c&&q.e==="switch"
else s=!0
if(s){if(!r.b)return r.fJ(t?"A switch goes about 48 inches from the floor, where a hand falls naturally. This box is down at outlet height.":"Outlets go low, about 16 inches from the floor. This box is up at switch height.");++r.f
r.cy.push("Wrong height at "+q.b+".")}s=e==="fan"
if(s&&w.h(0,d)!=="fan")if(!r.b)return r.fJ("This box is not fan rated. A fan on it can fall. Take the box out and put in a fan-rated one.")
w=new A.avx(C.V(x.S,x.N))
w.r=r.b
w.a=r.ax&&!r.ay
v.n(0,d,new A.aRW(e,w))
if(e==="light")w="Light fixture"
else if(s)w="Ceiling fan"
else if(e==="gfci")w="GFCI outlet"
else w=t?"Switch":"Outlet"
return new A.eC(!0,w+" is held up to "+q.b+". Turn the breaker OFF, then wire it.",!1,"")},
cPj(d){var w=this,v=w.at,u=v.h(0,d)
if(u==null)return B.aT0
if(w.ax&&!w.ay&&!u.b.w){if(w.b)return w.Yn()
return w.a0U()}v.W(0,d)
w.CW.W(0,d)
w.cx.W(0,d)
w.ch.W(0,d)
return B.aTi},
a0U(){++this.r;++this.f
return B.aTg},
Yn(){var w,v,u=this;++u.r;--u.e
u.ax=!1
u.Mw()
w=u.e
if(w<=0){u.w=!0
return B.aT_}v=w===1?"life":"lives"
return new A.eC(!1,"ZAP! You touched a live wire and got a shock. The breaker is now off. "+w+" "+v+" left. Always turn the breaker OFF and test the wires first.",!0,"shock")},
baD(d,e,f){var w,v,u,t=this,s=t.at.h(0,d)
if(s==null)return B.a8l
t.Mw()
w=A.Q5(s.a)
v=D.d.iw(w.f,new A.ck6(f))
u=A.hfS(w,s.b,e,v,!0)
if(u==null){if(!t.b&&!v.c.t(0,e)){++t.f
return new A.eC(!0,v.b+": fastened. Careful: "+C.t(w.r.$2(e,v))+" It will burn or trip the breaker when the power comes on.",!0,"")}return new A.eC(!0,v.b+": wire fastened.",!1,"")}if(D.a.a0(u,"SHOCK"))return t.Yn()
if(D.a.a0(u,"STOP"))return t.a0U();++t.f
return new A.eC(!1,u,!1,"")},
cQD(d,e){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.U2
v.Mw()
w=u.b
if(w.a&&w.c===0){if(v.b)return v.Yn()
return v.a0U()}w=w.b
w.bn(w,new A.ckg(e))
return B.aTn},
beA(d){var w,v,u=this,t=u.at.h(0,d)
if(t==null)return B.a8l
w=A.Q5(t.a)
v=t.b
if(!A.bBE(w,v))return u.fJ("Every wire must be fastened first.")
if(u.ax&&!u.ay){if(u.b)return u.Yn()
return u.a0U()}v.c=1
return B.aT8},
cOj(d){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.U2
if(v.ax&&!v.ay){if(v.b)return v.Yn()
return v.a0U()}w=u.b
w.c=0
w.d=!1
return B.aTe},
b9v(d){var w=this.at.h(0,d)
if(w==null||w.b.c!==1)return this.fJ("Push the device into the box first.")
w.b.c=2
return B.aTh},
aGP(d){var w=this.at
return A.fRp(A.Q5(w.h(0,d).a),w.h(0,d).b)},
aGo(){var w=this
if(w.ay){w.ax=w.ay=!1
w.Mw()
return B.aT6}w.ax=!w.ax
w.Mw()
if(!w.ax)return B.aSZ
return w.c1O()},
c1O(){var w,v,u,t,s,r,q,p,o,n=this,m=C.a([],x.s)
for(w=n.at,v=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gai(0),u=n.cx,t=!1,s=!1;v.C();){r=v.d
q=r.b.b
if(q.c===0)continue
p=r.a
o=A.fRp(A.Q5(w.h(0,p).a),w.h(0,p).b)
q.d=q.c>=2
if(o.d)t=!0
if(o.e){q.w=!0
u.J(0,p)
s=!0}if(o.a!=="ok")m.push(A.kX(p).b+": "+o.b)}if(t){n.ay=!0
n.Mw()
w=s?"BANG! Sparks and smoke. ":""
v=D.d.aH(m," ")
u=s?"burn":"trip"
return new A.eC(!1,w+"The breaker tripped. "+v+" Fix it, then flip the breaker OFF and ON again.",!0,u)}if(m.length!==0)return new A.eC(!0,"Power is on. "+D.d.aH(m," "),!0,"")
return B.aTb},
aD1(d){var w,v,u,t,s,r,q=this,p=q.at,o=p.h(0,d)
if(o==null||o.a!=="switch"||o.b.c<2)return B.aTm
w=q.ch
if(w.t(0,d))w.W(0,d)
else w.J(0,d)
v=q.d
v===$&&C.c()
u=C.T(v).k("a2<1>")
t=C.B(new C.a2(v,new A.ck7(d),u),u.k("H.E"))
if(t.length===0)return B.aT7
s=D.d.gL(t)
v=s.a
r=q.akZ(v)
if(w.t(0,d)&&r){p=p.h(0,v)
if(p!=null)p.c=!0
return new A.eC(!0,(s.b==="fan"?"The fan spins":"The light turns on")+". The switch works.",!1,"")}if(w.t(0,d)){p=s.b
return new A.eC(!1,(p==="fan"?"The fan":"The light")+" did not come on. Check the breaker and the wires on the switch and on the "+p+".",!1,"")}return B.aTl},
a2N(d){var w,v=this.at.h(0,d)
if(v!=null){w=v.b
w=w.c<2||w.w}else w=!0
if(w)return!1
return this.aGP(d).c},
akZ(d){var w=this,v=w.cNh(d),u=v==null,t=u?null:v.c,s=!0
if(!u)if(t!=null)u=!(w.ax&&!w.ay)||!w.a2N(d)||!w.a2N(t)
else u=s
else u=s
if(u)return!1
return w.ch.t(0,t)},
bej(d,e){var w,v,u=this,t=u.at.h(0,d)
if(t!=null){w=t.a
w=w!=="outlet"&&w!=="gfci"||t.b.c<2}else w=!0
if(w)return u.fJ("There is no finished outlet there to plug into.")
w=u.CW
if(w.ag(0,d))return u.fJ("Something is already plugged in.")
w.n(0,d,e)
if(t.b.w)return B.aT1
if(u.ax&&!u.ay&&u.a2N(d)){t.c=!0
v=u.aGP(d)
w=v.a
if(w==="reversed"||w==="noGround")return new A.eC(!0,"It runs, but be careful: "+v.b,!0,"")
return new A.eC(!0,A.hzk(e)+" runs. The outlet works.",!1,"")}if(!(u.ax&&!u.ay))return B.aT5
return new A.eC(!1,"Nothing happens. "+u.aGP(d).b,!0,"")},
bfO(d){if(this.CW.W(0,d)==null)return B.U2
return B.aSY},
gw_(){var w,v,u,t,s,r=this.d
r===$&&C.c()
w=this.at
v=0
for(;v<4;++v){u=r[v]
t=u.a
s=w.h(0,t)
if(s==null||s.a!==u.b||s.b.c<2)return!1
if(A.fRp(A.Q5(w.h(0,t).a),w.h(0,t).b).a!=="ok")return!1
t=u.b
if(t==="outlet"||t==="gfci"){if(!s.c)return!1}else if(t!=="switch"&&!s.c)return!1}return!0}}
A.kT.prototype={}
A.UV.prototype={
T(){var w,v=new A.Ay(-0.12,0.4,205,B.a7o,$.aw())
v.f=300
w=new C.BB()
$.Cv()
w.iT(0)
return new A.aCK(v,w,C.V(x.S,x.i))}}
A.aCK.prototype={
gCc(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w==null){w=v.gCc(0)
w=A.fNj(null,null,v.a.f,w)}v.d=w
if(v.a.d!=null&&w.gyc())v.y=2
if(v.a.e){v.d.aCR()
v.y=2}v.r=A.Cj(v.d,new A.vO(v.z,v.Q,!1))
w=v.f
w.r=0
w.w=1.1},
q(){var w=this.cy
if(w!=null)w.a9(0)
this.a2()},
zX(d,e){var w=this,v=w.cy
if(v!=null)v.a9(0)
w.m(new A.ehz(w,d,e))
w.cy=C.cM(D.jm,new A.ehA(w))},
av2(d){return this.zX(d,!1)},
kn(d){var w,v,u,t,s,r=this,q=d.a
if(q)A.y4()
else A.mU(180,220,0.25,"square")
w=d.d
if(w==="shock"){C.fJ()
r.m(new A.egO(r))
C.bN(D.mQ,new A.egP(r),x.P)}if(w==="burn"||w==="trip"){w=r.d
w===$&&C.c()
w=w.cx
w=C.ea(w,w.r,C.a3(w).c)
v=r.x
u=r.w
t=w.$ti.c
while(w.C()){s=w.d
if(s==null)s=t.a(s)
v.n(0,s,u.gB6()/1000+3.5)}C.fJ()
A.mU(150,300,0.5,"noise")}w=r.d
w===$&&C.c()
r.r=A.Cj(w,new A.vO(r.z,r.Q,!1))
q=q&&!d.c
r.zX(d.b,q)
if(r.d.w&&r.c!=null)$.aT.x1$.push(new A.egQ(r))
if(r.d.gw_()&&!r.cx){r.cx=!0
$.aT.x1$.push(new A.egR(r))}},
b0U(){var w=this.ch?3.141592653589793:-0.12
this.f.n2(205,0.4,B.a7o,w)},
aQT(){var w,v,u=this
u.ch=!1
w=u.f
w.anC(!1)
w.r=0
u.m(new A.egZ(u))
v=u.d
v===$&&C.c()
u.r=A.Cj(v,new A.vO(u.z,u.Q,!1))
w.n2(205,0.4,B.a7o,-0.12)},
bz1(){var w,v,u=this
u.ch=!0
w=u.f
w.anC(!0)
u.m(new A.egS(u))
v=u.d
v===$&&C.c()
u.r=A.Cj(v,new A.vO(u.z,u.Q,!1))
w.n2(190,0.3,B.ftT,3.141592653589793)},
Yo(d,e){var w,v,u,t=this,s=A.kX(e),r=t.f
r.anC(!1)
r.r=0
t.m(new A.ehg(t,e))
w=t.d
w===$&&C.c()
t.r=A.Cj(w,new A.vO(t.z,t.Q,!1))
v=A.a1z(s,B.fte)
w=s.c
u=w?22:15
r.n2(u,w?-0.8:0.26,v,0.3)},
av1(){var w,v=this
v.m(new A.eh_(v))
w=v.d
w===$&&C.c()
v.r=A.Cj(w,new A.vO(v.z,v.Q,!1))
v.b0U()},
c1T(d){var w,v,u,t,s,r,q=this
if(d===0){if(q.Q<0)q.m(new A.ehv(q))
return}w=q.Q
if(w>=0)v=!(d>=5000&&d<5700)
else v=!1
if(v)return
if(d>=5000&&d<5700){v=d-5000
u=D.o.an(v,100)
if(w!==u){if(q.z==="tester")q.azp(u)
else{q.m(new A.ehw(q))
q.Yo(0,u)}return}q.aZE(u,D.o.F(v,100))
return}if(d>=1000&&d<1010)if(q.z==="drill"){w=q.d
w===$&&C.c()
q.kn(w.cFW(d-1000))
return}if(d>=2000&&d<2007){q.aZH(d-2000)
return}if(d>=3000&&d<3007){q.aZF(d-3000)
return}if(d>=6000&&d<6005){if(q.z==="sheet"){w=q.d
w===$&&C.c()
q.kn(w.cIC(B.a1Z[d-6000]))}return}if(d>=6100&&d<6103){t=B.nP[d-6100]
if(q.z==="paint"){w=q.d
w===$&&C.c()
q.kn(w.cNw(t))
return}}if(d>=6200&&d<6202){s=d-6200
switch(q.z){case"tape":w=q.d
w===$&&C.c()
q.kn(w.cQ8(s))
return
case"mud":w=q.d
w===$&&C.c()
q.kn(w.cLe(s))
return
case"sand":w=q.d
w===$&&C.c()
q.kn(w.bjy(s))
return}}if(d>=7000&&d<7100){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7000
q.kn(w.bjK(D.o.an(v,10),D.o.F(v,10)))}return}if(d>=7500&&d<7600){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7500
q.kn(w.aI0(D.o.an(v,10),D.o.F(v,10),!0))}return}if(d===8000){w=q.d
w===$&&C.c()
q.kn(w.aGo())
return}if(d>=8100&&d<8107){u=d-8100
w=q.d
w===$&&C.c()
if(w.CW.h(0,u)==="tv"&&q.z!=="unplug"){w=q.c
w.toString
G.fTN(w,0,"tv",!0,D.x2,"Samsung Neo QLED 8K")
return}q.kn(q.d.bfO(u))
return}if(q.z==="look"){w=q.r
w===$&&C.c()
r=w.b.h(0,d)
if(r!=null){q.m(new A.ehx(q,d))
q.zX(r.a+": "+r.b,!0)}}},
aZH(d){var w,v,u,t=this,s=t.d
s===$&&C.c()
if(s.at.ag(0,d)){s=t.z
s=s!=="tester"&&s!=="look"&&!D.d.t(B.GF,s)}else s=!1
if(s){t.m(new A.eht(t))
t.Yo(0,d)
return}s=t.z
switch(s){case"wall":case"ceiling":case"fanbox":w=t.d
t.kn(w.cLb(d,s==="fanbox"?"fan":s))
return
case"cable":t.kn(t.d.cOi(d))
return
case"knife":t.kn(t.d.cER(d))
return
case"outlet":case"gfci":case"switch":case"light":case"fan":v=t.d.bcg(d,s)
t.kn(v)
if(v.a){t.d.at.h(0,d).b.f=!t.d.b
t.z=""
t.Yo(0,d)}return
case"tester":t.azp(d)
return}if(t.d.at.ag(0,d)){t.Yo(0,d)
return}s=t.r
s===$&&C.c()
u=s.b.h(0,2000+d)
if(u!=null){t.m(new A.ehu(t,d))
t.zX(u.a+": "+u.b,!0)}},
azp(d){var w,v=this.d
v===$&&C.c()
w=v.ax&&!v.ay&&v.x.ag(0,d)&&this.d.z.t(0,d)
v=w?"The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.":"The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)"
this.zX(v,!w)
A.mU(w?1400:500,120,0.25,"tri")},
aZF(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.at.h(0,d)
if(w==null)return
if(D.d.t(B.GF,v.z)){v.kn(v.d.bej(d,v.z))
return}u=v.z
if(u==="tester"){v.azp(d)
return}if(u==="flip"){if(w.a==="switch"&&w.b.c>=2)v.kn(v.d.aD1(d))
else v.av2("Only a finished switch can be flipped.")
return}v.m(new A.ehs(v))
v.Yo(0,d)},
aZE(d,e){var w,v,u,t,s,r,q,p=this,o=p.d
o===$&&C.c()
w=o.at.h(0,d)
if(w==null)return
o=w.a
v=A.Q5(o).f
u=C.T(v).k("a2<1>")
t=C.B(new C.a2(v,new A.eho(e),u),u.k("H.E"))
s=A.hfW(o,e)
if(s!=null){o=w.b
o=o.b.j0(0,s)&&o.c===0}else o=!1
if(o){p.kn(p.d.cQD(d,s))
return}if(t.length!==0&&w.b.c===0){o=p.at
if(o.length===0){p.av2("Pick a wire below first, then tap "+D.d.gL(t).b+".")
p.m(new A.ehp(p,d,e))
return}r=p.d.baD(d,o,e)
p.kn(r)
if(r.a)p.m(new A.ehq(p))
return}o=p.r
o===$&&C.c()
q=o.b.h(0,5000+d*100+e)
if(q!=null){p.m(new A.ehr(p,d,e))
p.zX(q.a+": "+q.b,!0)}},
crd(){var w,v,u,t,s,r,q=this,p=C.a([],x.J)
for(w=0;w<7;++w){v=B.tH[w]
u=q.d
u===$&&C.c()
t=v.a
s=u.at.ag(0,t)
r=q.z
A:{u=!1
if("wall"===r){u=!v.c&&!q.d.x.ag(0,t)
break A}if("ceiling"===r||"fanbox"===r){u=v.c&&!q.d.x.ag(0,t)
break A}if("cable"===r){u=q.d.x.ag(0,t)&&!q.d.z.t(0,t)
break A}if("knife"===r){u=!v.c&&q.d.x.ag(0,t)
break A}if("outlet"===r||"gfci"===r||"switch"===r){u=!v.c&&q.d.x.ag(0,t)&&!s
break A}if("light"===r||"fan"===r){u=v.c&&q.d.x.ag(0,t)&&!s
break A}if("tv"===r||"lamp"===r||"toaster"===r||"hairdryer"===r){if(s)u=q.d.at.h(0,t).a==="outlet"||q.d.at.h(0,t).a==="gfci"
break A}if("tester"===r){u=q.d.x.ag(0,t)
break A}break A}if(u)p.push(new C.z(t,v.b))}return p},
crc(){var w,v,u,t,s,r,q,p=null,o=this.crd()
if(o.length===0)return D.bH
w=C.a([],x.p)
for(v=o.length,u=0;u<o.length;o.length===v||(0,C.K)(o),++u){t={}
s=o[u]
t.a=null
t.a=s.a
r=new C.aV(12,12)
q=new C.aA(D.b2,1,D.r,-1)
w.push(C.aE(p,C.p(p,new C.x("\ud83d\udccd "+s.b,p,D.nY,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.fD.j(0.35),p,new C.bP(q,q,q,q),new C.bs(r,r,r,r),p,p,D.n),p,p,p,p,B.Xg,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.ehB(t,this),p,p,p,p,p,p,!1,D.a9))}return new C.C(D.i7,C.c3(D.bE,w,D.bw,6,6),p)},
bKU(){var w=null,v=this.c
v.toString
C.c9(w,w,!1,w,new A.egY(this),v,w,!0,!0,x.H)},
c1P(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new A.egV(this),v,w,!0,!0,x.H)},
aut(d){this.m(new A.eh0(this,d))
this.aQT()},
aVk(){return this.aut(!1)},
c1R(){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
m===$&&C.c()
if(m.w)return"The job is over."
switch(n.y){case 0:m=m.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
v=C.B(new C.a2(m,new A.eh1(n),w),w.k("H.E"))
if(v.length!==0){u=D.d.gL(v)
t=A.kX(u.a)
m=u.b
if(m==="gfci")m="a GFCI"
if(t.c)w=t.e==="fan"?"fan box":"ceiling box"
else w="wall box"
return"Mount a box at "+t.b+" ("+m+" goes here): pick a "+w+", then tap the glowing spot."}m=n.d.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
s=C.B(new C.a2(m,new A.eh2(n),w),w.k("H.E"))
if(s.length!==0){t=D.d.gL(s).a
m=n.d.aIK(t)
r=new C.a2(m,new A.eh3(n),C.T(m).k("a2<1>")).gM(0)
return r>0?"The cable comes from the panel on the right. Pick the drill and tap each stud on the way to "+A.kX(t).b+" ("+r+" left).":"Pick the cable roll and tap "+A.kX(t).b+"."}return"Rough-in done! Open 2 Drywall."
case 1:if(!m.gaGd())return"Finish the rough-in first (tab 1). Drywall hides the wires."
if(!n.d.gaAG())return"Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall."
if(!n.d.gaAF())return"Pick the drywall saw and tap each box to cut its opening."
if(!D.d.de(B.nP,n.d.ganJ()))return"Pick the screw gun and put a screw in every glowing spot on the studs."
if(D.d.b8(n.d.as,new A.eh6()))return"Pick the tape and tap each seam between two sheets."
if(D.d.b8(n.d.as,new A.eh7()))return D.d.b8(n.d.as,new A.eh8())?'The mud is wet. Press "Let it dry", then the next coat.':"Pick the mud and tap each seam. It needs three coats, with drying in between."
if(D.d.b8(n.d.as,new A.eh9()))return D.d.b8(n.d.as,new A.eha())?'Press "Let it dry", then sand.':"Pick the sander and tap each seam."
if(!n.d.gyc())return"Pick the roller and paint each sheet."
return"Drywall done! Open 3 Devices."
default:if(!m.gyc())return"Finish the drywall first (tab 2)."
m=n.d.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
q=C.B(new C.a2(m,new A.ehb(n),w),w.k("H.E"))
if(q.length!==0){u=D.d.gL(q)
m=u.b
if(m==="gfci")m="GFCI"
return"Pick the "+m+" and tap "+A.kX(u.a).b+". ("+C.t(new A.ehe().$1(new C.J(q,new A.ehc(),C.T(q).k("J<1,G>"))))+" still need a device.)"}m=n.d.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
p=C.B(new C.a2(m,new A.ehd(n),w),w.k("H.E"))
if(p.length!==0)return"Tap "+A.kX(D.d.gL(p).a).b+" to work on it: breaker OFF, wires, push in, cover on."
m=n.d
if(!m.ax)return"Turn the breaker ON (tap the panel or the breaker button) and test."
m=m.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
o=C.B(new C.a2(m,new A.eh4(n),w),w.k("H.E"))
if(o.length!==0)return"Pick the TV or the lamp and plug it into "+A.kX(D.d.gL(o).a).b+" to test it."
m=n.d.d
m===$&&C.c()
return"Flip the wall switch to test the "+(D.d.b8(m,new A.eh5())?"fan":"light")+"."}},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=B.cZR[a1.y],a4=a1.Q
if(a4>=0){w=a1.d
w===$&&C.c()
v=w.at.h(0,a4)}else v=a2
a4=v==null
u=a4?a2:A.Q5(v.a)
w=a1.y
t=a1.d
t===$&&C.c()
t=t.c
t===$&&C.c()
s=a1.r
s===$&&C.c()
r=a1.as
q=a1.ax
p=a1.ay
o=r!==0?s.b.h(0,r):a2
n=x.p
m=C.a([],n)
for(l=0;l<3;++l)m.push(new C.C(D.Le,new C.x(l<a1.d.e?"\u2764\ufe0f":"\ud83d\udda4",a2,D.za,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2))
m.push(D.bo)
k=a1.d
if(k.ay)k=D.jJ
else{k=k.ax
k=k?D.eD:D.e9}k=k.j(0.95)
j=C.m(16)
i=a1.d
h=i.ay
if(h)g=D.cw
else{g=i.ax
g=g?D.cr:D.bc}g=C.I(g,D.r,1.4)
if(h)i="TRIPPED: tap to reset"
else{i=i.ax
i=i?"Breaker ON":"Breaker OFF"}m.push(C.aE(a2,C.p(a2,C.d(i,a2,a2,a2,a2,a2,a2,B.eVt,a2,a2,a2),D.f,a2,a2,new C.o(k,a2,g,j,a2,a2,D.n),a2,a2,a2,a2,D.qE,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ehJ(a1),a2,a2,a2,a2,a2,a2,!1,D.a9))
m=C.a([C.A(m,D.m,a2,D.e,D.Q,0,a2,a2)],n)
k=a1.ch
j=k?"In front":"Behind the wall"
i=k?F.ajn:F.ajm
k=C.a([A.Q4(j,D.by,i,k,k?a1.gbMn():a1.gbz0()),D.ao],n)
if(!a4){j=v.b
D.d.v(k,C.a([A.Q4("Labels",D.aX,M.MQ,j.f,new A.ehK(a1,v)),D.ao,A.Q4("Hints",D.aJ,D.qO,j.e,new A.ehL(a1,v)),D.P],n))}s=A.WK(a1.f,new A.ehT(a1),p,r,o,a2,a2,q,a2,new A.ehU(a1),a1.gc1S(),s,m,k)
r=C.a([],n)
if(a4){a4=C.a([],n)
for(l=0;l<3;++l){q=l<2?6:0
p=a1.y===l?D.aJ.j(0.2):D.dq
o=new C.aV(12,12)
f=new C.aA(a1.y===l?D.aJ:D.bF,1,D.r,-1)
if(l===0)m=a1.d.gaGd()
else{m=a1.d
m=l===1?m.gyc():m.gw_()}m=m?"\u2705 ":""
k=B.d7c[l]
j=a1.y===l?D.aJ:D.ad
a4.push(new C.bE(1,D.bi,C.aE(a2,C.p(a2,new C.cq(D.A,a2,a2,new C.x(m+k,a2,new C.F(!0,j,a2,a2,a2,a2,12,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2),a2),D.f,a2,a2,new C.o(p,a2,new C.bP(f,f,f,f),new C.bs(o,o,o,o),a2,a2,D.n),a2,a2,a2,new C.Q(0,0,q,0),A_.Lh,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ehV(a1,l),a2,a2,a2,a2,a2,a2,!1,D.a9),a2))}a4=C.a([C.A(a4,D.m,a2,D.e,D.j,0,a2,a2),D.ao],n)
if(!a1.d.b){q=D.aX.j(0.1)
p=C.m(10)
o=C.I(D.aX.j(0.4),D.r,1)
a4.push(C.p(a2,C.d("\ud83d\udc49 "+a1.c1R(),a2,2,D.a2,a2,a2,a2,B.eWV,a2,a2,a2),D.f,a2,a2,new C.o(q,a2,o,p,a2,a2,D.n),a2,a2,a2,a2,D.cj,a2,a2,1/0))}else a4.push(B.fdq)
a4.push(D.ao)
q=C.a([],n)
if(a1.y<2&&!a1.d.gyc())q.push(new C.C(E.te,C.aE(a2,C.p(a2,B.b22,D.f,a2,a2,new C.o(D.dS,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.h4,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ehW(a1),a2,a2,a2,a2,a2,a2,!1,D.a9),a2))
for(p=a3.length,e=0;e<p;++e){d=a3[e]
o=d.a
m=a1.z===o?D.aJ.j(0.25):D.c.j(0.07)
k=new C.aV(14,14)
o=a1.z===o
j=o?D.aJ:D.b5
f=new C.aA(j,o?2:1,D.r,-1)
j=o?D.aJ:D.ad
j=C.W(d.c,j,a2,a2,a2,19)
o=o?D.aJ:D.c
q.push(new C.C(E.te,C.aE(a2,C.p(a2,new C.co(D.aQ,D.e,D.j,D.m,a2,D.p,a2,0,C.a([j,D.bo,new C.x(d.b,a2,new C.F(!0,o,a2,a2,a2,a2,12.5,D.I,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2)],n),a2),D.f,a2,a2,new C.o(m,a2,new C.bP(f,f,f,f),new C.bs(k,k,k,k),a2,a2,D.n),a2,a2,a2,a2,D.h4,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ehX(a1,d),a2,a2,a2,a2,a2,a2,!1,D.a9),a2))}if(a1.y===1)q.push(new C.C(E.te,C.aE(a2,C.p(a2,B.b1V,D.f,a2,a2,new C.o(D.e9,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.h4,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ehY(a1),a2,a2,a2,a2,a2,a2,!1,D.a9),a2))
a4.push(new C.a6(a2,52,C.cB(q,a2,a2,a2,a2,D.aQ,!1),a2))
if(a1.z.length!==0)a4.push(a1.crc())
D.d.v(r,a4)}else{a4=C.a([],n)
q=v.b
if(q.c===0)for(p=D.d.gai(u.e),o=new C.h2(p,new A.ehZ(v)),m=q.b;o.C();){k=p.gU(0)
j=k.c
i=new C.aV(14,14)
h=a1.at
g=k.a
h=h===g
a0=h?D.b2:D.b5
f=new C.aA(a0,h?3:1,D.r,-1)
a0=C.a([],n)
if(m.j0(0,g))a0.push(new C.C(D.Lf,C.W(D.ee,k.d,a2,a2,a2,17),a2))
h=k.b
g=k.d
a0.push(new C.x(h,a2,new C.F(!0,g,a2,a2,a2,a2,12.5,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2))
a4.push(C.aE(a2,C.p(a2,new C.co(D.aQ,D.e,D.Q,D.m,a2,D.p,a2,0,a0,a2),D.f,a2,a2,new C.o(j,a2,new C.bP(f,f,f,f),new C.bs(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,D.x9,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ei_(a1,v,k),a2,a2,a2,a2,a2,a2,!1,D.a9))}a4=C.a([C.c3(D.bE,a4,D.bw,6,8)],n)
if(q.c===0&&a1.at.length!==0){p=C.a([],n)
for(o=D.d.gai(u.f),m=new C.h2(o,new A.ehM(v));m.C();){k=o.gU(0)
j=D.fD.j(0.35)
i=new C.aV(12,12)
f=new C.aA(D.b2,1,D.r,-1)
p.push(C.aE(a2,C.p(a2,new C.x("\u279c "+k.b,a2,D.nY,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.f,a2,a2,new C.o(j,a2,new C.bP(f,f,f,f),new C.bs(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,B.Xg,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ehN(a1,k),a2,a2,a2,a2,a2,a2,!1,D.a9))}a4.push(new C.C(D.kb,C.c3(D.bE,p,D.bw,6,6),a2))}a4.push(D.P)
p=C.a([A.y3("Back to the room",D.pr,a1.gc1Q(),D.ad),D.ab],n)
if(q.c===0){u.toString
o=A.bBE(u,q)?"Push it into the box":"Fasten every wire"
p.push(A.y3(o,B.akx,A.bBE(u,q)?new A.ehO(a1):a2,D.aJ))}if(q.c===1)D.d.v(p,C.a([A.y3("Pull it out",D.qR,new A.ehP(a1),D.ad),D.ab,A.y3("Cover on",L.va,new A.ehQ(a1),D.aJ)],n))
if(q.c>=2){q=q.w
o=q?"Take out the burnt one":"Pull it out again"
q=q?D.cr:D.ad
p.push(A.y3(o,B.bzg,new A.ehR(a1),q))}a4.push(C.A(p,D.m,a2,D.e,D.j,0,a2,a2))
D.d.v(r,a4)}a4=C.a([new A.AT(t+" job",D.aJ,s,C.v(r,D.m,a2,D.e,D.Q,0,D.p),new A.ehS(a1,a5),"Phase "+(w+1)+"/3",a2)],n)
if(a1.CW)a4.push(C.bZ(0,C.e2(C.p(a2,a2,D.f,B.adT,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),!0,a2),0,0,0))
return new C.an(D.W,a2,D.aa,D.q,a4,a2)},
cl0(d){var w=this.d
w===$&&C.c()
if(w.b)return
A:{if("wall"===d||"ceiling"===d||"fanbox"===d){w="Tap one of the glowing spots to mount the box there."
break A}if("drill"===d){w="Tap a stud to drill a hole through it."
break A}if("cable"===d){w="Tap a box that has no cable yet. The cable runs from the panel on the right."
break A}if("sheet"===d){w="Tap a glowing stud edge to hang the sheet there."
break A}if("knife"===d){w="Tap an orange box outline to cut the opening."
break A}if("screw"===d){w="Tap the glowing dots on the studs. The lighter dots between studs are a trap."
break A}if("tape"===d||"mud"===d||"sand"===d){w="Tap a seam between two sheets."
break A}if("paint"===d){w="Tap a sheet to paint it."
break A}if("look"===d){w="Tap anything to read what it is."
break A}if("flip"===d){w="Tap a finished switch to turn the light or the fan on and off."
break A}if("unplug"===d){w="Tap whatever is plugged in to pull the plug."
break A}if("tester"===d){w="Tap a box or a device to test it for power."
break A}if("tv"===d||"lamp"===d||"toaster"===d||"hairdryer"===d){w="Tap a finished outlet to plug it in."
break A}w="Tap a glowing box to put it there."
break A}this.zX(w,!0)},
caq(d){return C.bY(E.qv,null,new A.ehn(this),d,!0,!0,!0,D.nV,!1,!1,x.H)}}
A.vO.prototype={}
A.qQ.prototype={
a4(){return"FaultKind."+this.b}}
A.tZ.prototype={}
A.Ll.prototype={}
A.cnk.prototype={
bv5(d,e,f){var w,v,u,t,s,r,q,p=this,o=new C.eS()
o.dH(p.a)
w=C.B(B.cYt,x.F)
D.d.fn(w,o)
v=C.aX(x.S)
u=C.a([],x.c)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.K)(w),++s){r=w[s]
q=B.vy.h(0,r).e
if(v.t(0,q))continue
v.J(0,q)
u.push(new A.Ll(r,o.aB(3)))
if(u.length>=d)break}p.c!==$&&C.aO()
p.c=u
p.av3()},
pk(d,e){var w=this.c
w===$&&C.c()
return D.d.b8(w,new A.cnp(e))},
av3(){var w,v,u,t,s=this,r=s.d,q=r.d
q.a8(0)
if(s.pk(0,B.YD))q.J(0,72)
if(s.pk(0,B.YE))q.J(0,75)
q=s.pk(0,B.LV)
r.b=q
r.c=!q
r.w=s.pk(0,B.LW)
r.x=s.pk(0,B.YI)
r.y=s.pk(0,B.YJ)
r.z=s.pk(0,B.YH)
r.Q=s.pk(0,B.YK)
r.as=s.pk(0,B.YL)
r.at=s.pk(0,B.YG)
q=r.f
q.a8(0)
r=r.r
r.a8(0)
w=s.c
w===$&&C.c()
w=D.d.gai(w)
v=new C.h2(w,new A.cnl())
while(v.C()){u=w.gU(0)
t=u.c
u=u.b
if(t)r.J(0,u)
else q.J(0,u)}},
gczO(){var w=this.c
w===$&&C.c()
return D.d.de(w,new A.cnn())},
gcGZ(){var w=this.c
w===$&&C.c()
return new C.a2(w,new A.cno(),C.T(w).k("a2<1>")).gM(0)},
cGC(d){var w,v,u,t,s,r,q,p=this.c
p===$&&C.c()
w=p.length
v=d===86
u=d===92
t=0
for(;t<p.length;p.length===w||(0,C.K)(p),++t){s=p[t]
r=s.a
q=!0
if(B.vy.h(0,r).e!==d)if(!(r===B.LV&&v))r=r===B.LW&&u
else r=q
else r=q
if(r)return s}return null},
aUR(d){++this.f
return new A.eC(!1,d,!1,"")},
coK(){var w,v,u,t,s=this;++s.r;--s.e
for(w=s.d,v=w.d,w=w.e,u=0;u<4;++u){t=B.asQ[u]
if(!v.t(0,t))w.J(0,t)}w=s.e
if(w<=0){s.w=!0
return B.aSW}v=w===1?"life":"lives"
return new A.eC(!1,"ZAP! You touched a live wire and got a shock. All the breakers were knocked off. "+w+" "+v+" left. Turn the breaker OFF first.",!0,"shock")},
cQT(d,e){var w,v,u,t,s=this
if(s.w)return B.aSS
if(D.d.t(B.asQ,e))return s.bzv(d,e)
w=s.cGC(e)
if(d==="inspect"){if(w==null||w.c)return B.aSV
return new A.eC(!0,"You look and test: "+B.vy.h(0,w.a).b,!1,"")}if(w==null||w.c)return new A.eC(!1,s.b?"Nothing needs fixing there.":"There is nothing wrong with this, so the "+C.t(B.Qc.h(0,d))+' is not needed. Use "Look and test" on things to find the problem.',!1,"")
v=B.vy.h(0,w.a)
if(d!==v.c){++s.f
return new A.eC(!1,s.b?"That is not the right tool for this problem.":"The "+C.t(B.Qc.h(0,d))+" does not fix this. "+v.b,!1,"")}u=v.f
if(u!==0){t=s.d
u=!t.d.t(0,u)&&!t.e.t(0,u)}else u=!1
if(u){if(s.b)return s.coK()
return s.aUR("STOP! "+v.r+" The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.")}w.c=!0
s.av3()
return new A.eC(!0,v.d,!1,"")},
bzv(d,e){var w,v,u,t,s=this
if(d==="inspect"){w=s.d
if(w.d.t(0,e))w="This breaker has tripped: it sits in the middle (orange)."
else w=w.e.t(0,e)?"This breaker is switched OFF.":"This breaker is ON."
return new A.eC(!0,w,!1,"")}if(d!=="hand")return s.aUR(s.b?"Use your hand on a breaker.":"A breaker is switched with your hand, not with a "+C.t(B.Qc.h(0,d))+".")
w=s.d
v=w.d
if(v.t(0,e)){w=s.c
w===$&&C.c()
u=C.T(w).k("a2<1>")
t=C.B(new C.a2(w,new A.cnm(e),u),u.k("H.E"))
if(t.length!==0){D.d.gL(t).c=!0
s.av3()
return new A.eC(!0,B.vy.h(0,D.d.gL(t).a).d,!1,"")}v.W(0,e)
return B.aTp}w=w.e
if(w.t(0,e)){w.W(0,e)
return B.aTj}w.J(0,e)
return B.aT9}}
A.apE.prototype={
T(){var w,v=new A.Ay(-0.3,0.48,46,B.Tc,$.aw())
v.f=80
w=new C.BB()
$.Cv()
w.iT(0)
return new A.aCO(v,w)}}
A.aCO.prototype={
gK(){var w=this.d
w===$&&C.c()
return w},
gCc(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v=this
v.a1()
w=v.gCc(0)
w=A.h3w(v.a.d,w)
v.d=w
v.r=A.aeX(w.d)},
q(){var w=this.ax
if(w!=null)w.a9(0)
this.a2()},
c1Y(d,e){var w=this,v=w.ax
if(v!=null)v.a9(0)
w.m(new A.ejm(w,d,e))
w.ax=C.cM(D.jm,new A.ejn(w))},
aWr(){this.f.n2(46,0.48,B.Tc,-0.3)
this.m(new A.ejb(this))},
c1X(d){var w,v,u=this
if(d===0)return
w=u.d
w===$&&C.c()
v=w.cQT(u.x,d)
w=v.a
if(w)A.y4()
else A.mU(180,220,0.25,"square")
if(v.d==="shock"){C.fJ()
u.m(new A.ejg(u))
C.bN(D.mQ,new A.ejh(u),x.P)}u.m(new A.eji(u,d))
w=w&&!v.c
u.c1Y(v.b,w)
w=u.d
if(w.w)$.aT.x1$.push(new A.ejj(u))
else if(w.gczO()&&!u.at){u.at=!0
$.aT.x1$.push(new A.ejk(u))}},
cax(){var w=null,v=this.c
v.toString
C.c9(w,w,!1,w,new A.eje(this),v,w,!0,!0,x.H)},
c1U(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new A.eja(this),v,w,!0,!0,x.H)},
aur(){this.m(new A.ejc(this))
this.aWr()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&C.c()
g=g.gcGZ()
w=i.d.c
w===$&&C.c()
w=w.length
v=i.r
v===$&&C.c()
u=i.y
t=i.z
s=i.Q
r=u!==0?v.b.h(0,u):h
q=x.p
p=C.a([],q)
for(o=0;o<3;++o)p.push(new C.C(D.Le,new C.x(o<i.d.e?"\u2764\ufe0f":"\ud83d\udda4",h,D.za,h,h,h,h,h,h,h,h,h),h))
v=A.WK(i.f,new A.eju(i),s,u,r,h,new A.ejv(),t,h,i.gc1V(),i.gc1W(),v,C.a([C.A(p,D.m,h,D.e,D.Q,0,h,h)],q),h)
u=i.d.c
u===$&&C.c()
t=C.T(u)
t=new C.cQ(new C.a2(u,new A.ejw(),t.k("a2<1>")),new A.ejx(),t.k("cQ<1,n>")).aH(0,"  \xb7  ")
u=C.d("Customer: "+(t.length===0?"All fixed!":t),h,2,D.a2,h,h,h,B.aNv,h,h,h)
t=C.a([],q)
for(n=0;n<10;++n){m=B.db_[n]
s=i.x===m?D.aJ.j(0.25):D.c.j(0.07)
r=new C.aV(14,14)
p=i.x===m
l=p?D.aJ:D.b5
k=new C.aA(l,p?2:1,D.r,-1)
l=B.dgH.h(0,m)
p=C.W(l,i.x===m?D.aJ:D.ad,h,h,h,19)
l=B.Qc.h(0,m)
l.toString
j=i.x===m?D.aJ:D.c
t.push(new C.C(E.te,C.aE(h,C.p(h,new C.co(D.aQ,D.e,D.j,D.m,h,D.p,h,0,C.a([p,D.bo,new C.x(l,h,new C.F(!0,j,h,h,h,h,12.5,D.I,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q),h),D.f,h,h,new C.o(s,h,new C.bP(k,k,k,k),new C.bs(r,r,r,r),h,h,D.n),h,h,h,h,D.h4,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.ejy(i,m),h,h,h,h,h,h,!1,D.a9),h))}g=C.a([new A.AT("Service call",D.aX,v,C.v(C.a([new C.bI(D.a3,h,h,u,h),D.P,new C.a6(h,52,C.cB(t,h,h,h,h,D.aQ,!1),h)],q),D.m,h,D.e,D.Q,0,D.p),new A.ejz(i,d),""+g+"/"+w+" fixed",h)],q)
if(i.as)g.push(C.bZ(0,C.e2(C.p(h,h,D.f,B.adT,h,h,h,h,h,h,h,h,h,h),!0,h),0,0,0))
return new C.an(D.W,h,D.aa,D.q,g,h)},
cuF(d){return C.bY(E.qv,null,new A.ejs(this),d,!0,!0,!0,D.nV,!1,!1,x.H)},
$0(){return this.gK().$0()},
$1(d){return this.gK().$1(d)},
$2(d,e){return this.gK().$2(d,e)},
$3$1(d,e,f,g){return this.gK().$3$1(d,e,f,g)},
$1$2$onError(d,e,f){return this.gK().$1$2$onError(d,e,f)},
$2$1(d,e,f){return this.gK().$2$1(d,e,f)},
$1$1(d,e){return this.gK().$1$1(d,e)},
$3(d,e,f){return this.gK().$3(d,e,f)},
$4(d,e,f,g){return this.gK().$4(d,e,f,g)},
$3$3(d,e,f,g,h,i){return this.gK().$3$3(d,e,f,g,h,i)},
$2$2(d,e,f,g){return this.gK().$2$2(d,e,f,g)},
$1$2(d,e,f){return this.gK().$1$2(d,e,f)},
$4$cancelOnError$onDone$onError(d,e,f,g){return this.gK().$4$cancelOnError$onDone$onError(d,e,f,g)},
$1$growable(d){return this.gK().$1$growable(d)},
$1$highContrast(d){return this.gK().$1$highContrast(d)},
$1$accessibilityFeatures(d){return this.gK().$1$accessibilityFeatures(d)},
$2$disableAnimations$reduceMotion(d,e){return this.gK().$2$disableAnimations$reduceMotion(d,e)},
$1$platformBrightness(d){return this.gK().$1$platformBrightness(d)},
$1$accessibleNavigation(d){return this.gK().$1$accessibleNavigation(d)},
$1$semanticsEnabled(d){return this.gK().$1$semanticsEnabled(d)},
$1$locales(d){return this.gK().$1$locales(d)},
$1$paragraphSpacingOverride(d){return this.gK().$1$paragraphSpacingOverride(d)},
$1$wordSpacingOverride(d){return this.gK().$1$wordSpacingOverride(d)},
$1$letterSpacingOverride(d){return this.gK().$1$letterSpacingOverride(d)},
$1$lineHeightScaleFactorOverride(d){return this.gK().$1$lineHeightScaleFactorOverride(d)},
$1$textScaleFactor(d){return this.gK().$1$textScaleFactor(d)},
$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$scale$signalKind$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p){return this.gK().$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$scale$signalKind$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p)},
$15$buttons$change$device$kind$onRespond$physicalX$physicalY$pressure$pressureMax$scrollDeltaX$scrollDeltaY$signalKind$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return this.gK().$15$buttons$change$device$kind$onRespond$physicalX$physicalY$pressure$pressureMax$scrollDeltaX$scrollDeltaY$signalKind$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r)},
$26$buttons$change$device$distance$distanceMax$kind$obscured$orientation$physicalX$physicalY$platformData$pressure$pressureMax$pressureMin$radiusMajor$radiusMax$radiusMin$radiusMinor$scale$scrollDeltaX$scrollDeltaY$signalKind$size$tilt$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5){return this.gK().$26$buttons$change$device$distance$distanceMax$kind$obscured$orientation$physicalX$physicalY$platformData$pressure$pressureMax$pressureMin$radiusMajor$radiusMax$radiusMin$radiusMinor$scale$scrollDeltaX$scrollDeltaY$signalKind$size$tilt$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5)},
$6$device$pressureMax$signalKind$timeStamp$viewId(d,e,f,g,h,i){return this.gK().$6$device$pressureMax$signalKind$timeStamp$viewId(d,e,f,g,h,i)},
$3$data$details$event(d,e,f){return this.gK().$3$data$details$event(d,e,f)},
$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$signalKind$tilt$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p){return this.gK().$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$signalKind$tilt$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p)},
$2$specification$zoneValues(d,e){return this.gK().$2$specification$zoneValues(d,e)},
$5(d,e,f,g,h){return this.gK().$5(d,e,f,g,h)},
$3$4(d,e,f,g,h,i,j){return this.gK().$3$4(d,e,f,g,h,i,j)},
$2$4(d,e,f,g,h,i){return this.gK().$2$4(d,e,f,g,h,i)},
$1$4(d,e,f,g,h){return this.gK().$1$4(d,e,f,g,h)},
$3$6(d,e,f,g,h,i,j,k,l){return this.gK().$3$6(d,e,f,g,h,i,j,k,l)},
$2$5(d,e,f,g,h,i,j){return this.gK().$2$5(d,e,f,g,h,i,j)},
$1$style(d){return this.gK().$1$style(d)},
$2$priority$scheduler(d,e){return this.gK().$2$priority$scheduler(d,e)},
$1$allowPlatformDefault(d){return this.gK().$1$allowPlatformDefault(d)},
$2$position(d,e){return this.gK().$2$position(d,e)},
$1$debugBuildRoot(d){return this.gK().$1$debugBuildRoot(d)},
$2$defaultBlurTileMode(d,e){return this.gK().$2$defaultBlurTileMode(d,e)},
$2$aspect(d,e){return this.gK().$2$aspect(d,e)},
$1$isLiveRegion(d){return this.gK().$1$isLiveRegion(d)},
$1$namesRoute(d){return this.gK().$1$namesRoute(d)},
$1$scopesRoute(d){return this.gK().$1$scopesRoute(d)},
$1$isImage(d){return this.gK().$1$isImage(d)},
$1$isInMutuallyExclusiveGroup(d){return this.gK().$1$isInMutuallyExclusiveGroup(d)},
$1$isAccessibilityFocusBlocked(d){return this.gK().$1$isAccessibilityFocusBlocked(d)},
$1$isFocused(d){return this.gK().$1$isFocused(d)},
$1$isHeader(d){return this.gK().$1$isHeader(d)},
$1$isExpanded(d){return this.gK().$1$isExpanded(d)},
$1$isButton(d){return this.gK().$1$isButton(d)},
$1$isSelected(d){return this.gK().$1$isSelected(d)},
$1$isToggled(d){return this.gK().$1$isToggled(d)},
$1$isChecked(d){return this.gK().$1$isChecked(d)},
$1$isEnabled(d){return this.gK().$1$isEnabled(d)},
$1$findFirstFocus(d){return this.gK().$1$findFirstFocus(d)},
$6$alignment$alignmentPolicy$curve$duration$targetRenderObject(d,e,f,g,h,i){return this.gK().$6$alignment$alignmentPolicy$curve$duration$targetRenderObject(d,e,f,g,h,i)},
$1$alpha(d){return this.gK().$1$alpha(d)},
$1$2$retryIf(d,e,f){return this.gK().$1$2$retryIf(d,e,f)},
$1$end(d){return this.gK().$1$end(d)},
$1$text(d){return this.gK().$1$text(d)},
$1$line(d){return this.gK().$1$line(d)},
$2$color(d,e){return this.gK().$2$color(d,e)},
$2$withDrive(d,e){return this.gK().$2$withDrive(d,e)},
$1$scheme(d){return this.gK().$1$scheme(d)},
$1$2$arguments(d,e,f){return this.gK().$1$2$arguments(d,e,f)},
$1$0(d){return this.gK().$1$0(d)},
$3$replace$state(d,e,f){return this.gK().$3$replace$state(d,e,f)},
$2$params(d,e){return this.gK().$2$params(d,e)},
$3$onAction$onChange(d,e,f){return this.gK().$3$onAction$onChange(d,e,f)},
$2$composingBaseOffset$composingExtentOffset(d,e){return this.gK().$2$composingBaseOffset$composingExtentOffset(d,e)},
$2$baseOffset$extentOffset(d,e){return this.gK().$2$baseOffset$extentOffset(d,e)},
$2$imperativeRemoval(d,e){return this.gK().$2$imperativeRemoval(d,e)},
$1$range(d){return this.gK().$1$range(d)},
$1$colorSpace(d){return this.gK().$1$colorSpace(d)},
$3$forgottenChildren(d,e,f){return this.gK().$3$forgottenChildren(d,e,f)},
$2$after(d,e){return this.gK().$2$after(d,e)},
$1$reversed(d){return this.gK().$1$reversed(d)},
$3$imperativeRemoval$isReplaced(d,e,f){return this.gK().$3$imperativeRemoval$isReplaced(d,e,f)},
$2$alignmentPolicy(d,e){return this.gK().$2$alignmentPolicy(d,e)},
$2$ignoreCurrentFocus(d,e){return this.gK().$2$ignoreCurrentFocus(d,e)},
$3$alignmentPolicy$forward(d,e,f){return this.gK().$3$alignmentPolicy$forward(d,e,f)},
$5$alignment$alignmentPolicy$curve$duration(d,e,f,g,h){return this.gK().$5$alignment$alignmentPolicy$curve$duration(d,e,f,g,h)},
$1$5(d,e,f,g,h,i){return this.gK().$1$5(d,e,f,g,h,i)},
$3$textDirection(d,e,f){return this.gK().$3$textDirection(d,e,f)},
$3$debugReport(d,e,f){return this.gK().$3$debugReport(d,e,f)},
$1$padding(d){return this.gK().$1$padding(d)},
$2$3(d,e,f,g,h){return this.gK().$2$3(d,e,f,g,h)},
$3$onDone$onError(d,e,f){return this.gK().$3$onDone$onError(d,e,f)},
$2$0(d,e){return this.gK().$2$0(d,e)},
$1$queryParameters(d){return this.gK().$1$queryParameters(d)},
$2$headers(d,e){return this.gK().$2$headers(d,e)},
$3$body$headers(d,e,f){return this.gK().$3$body$headers(d,e,f)},
$4$isLocal$mimeType(d,e,f,g){return this.gK().$4$isLocal$mimeType(d,e,f,g)},
$2$onError(d,e){return this.gK().$2$onError(d,e)},
$13$blRadiusX$blRadiusY$bottom$brRadiusX$brRadiusY$left$right$tlRadiusX$tlRadiusY$top$trRadiusX$trRadiusY$uniformRadii(d,e,f,g,h,i,j,k,l,m,n,o,p){return this.gK().$13$blRadiusX$blRadiusY$bottom$brRadiusX$brRadiusY$left$right$tlRadiusX$tlRadiusY$top$trRadiusX$trRadiusY$uniformRadii(d,e,f,g,h,i,j,k,l,m,n,o,p)},
$1$minimum(d){return this.gK().$1$minimum(d)},
$2$reversed(d,e){return this.gK().$2$reversed(d,e)},
$1$reverse(d){return this.gK().$1$reverse(d)},
$2$textDirection(d,e){return this.gK().$2$textDirection(d,e)},
$4$borderRadius$circularity$eccentricity$side(d,e,f,g){return this.gK().$4$borderRadius$circularity$eccentricity$side(d,e,f,g)},
$3$context$exception$stack(d,e,f){return this.gK().$3$context$exception$stack(d,e,f)},
$2$exception$stack(d,e){return this.gK().$2$exception$stack(d,e)},
$2$getTargetSize(d,e){return this.gK().$2$getTargetSize(d,e)},
$4$allowUpscaling$cacheHeight$cacheWidth(d,e,f,g){return this.gK().$4$allowUpscaling$cacheHeight$cacheWidth(d,e,f,g)},
$5$constraints$delegate$parent$resizable$title(d,e,f,g,h){return this.gK().$5$constraints$delegate$parent$resizable$title(d,e,f,g,h)},
$2$maxWidth$minWidth(d,e){return this.gK().$2$maxWidth$minWidth(d,e)},
$2$maxHeight$minHeight(d,e){return this.gK().$2$maxHeight$minHeight(d,e)},
$1$iconTheme(d){return this.gK().$1$iconTheme(d)},
$1$side(d){return this.gK().$1$side(d)},
$1$color(d){return this.gK().$1$color(d)},
$2$color$fontSize(d,e){return this.gK().$2$color$fontSize(d,e)},
$3$padding$viewInsets$viewPadding(d,e,f){return this.gK().$3$padding$viewInsets$viewPadding(d,e,f)},
$1$withDelay(d){return this.gK().$1$withDelay(d)},
$3$cancel$down$reason(d,e,f){return this.gK().$3$cancel$down$reason(d,e,f)},
$2$down$up(d,e){return this.gK().$2$down$up(d,e)},
$1$down(d){return this.gK().$1$down(d)},
$1$move(d){return this.gK().$1$move(d)},
$1$brightness(d){return this.gK().$1$brightness(d)},
$9$applyTextScaling$color$fill$grade$opacity$opticalSize$shadows$size$weight(d,e,f,g,h,i,j,k,l){return this.gK().$9$applyTextScaling$color$fill$grade$opacity$opticalSize$shadows$size$weight(d,e,f,g,h,i,j,k,l)},
$2$minHeight$minWidth(d,e){return this.gK().$2$minHeight$minWidth(d,e)},
$2$isPrivate$localRole(d,e){return this.gK().$2$isPrivate$localRole(d,e)},
$7$code$collaboratorEmails$isPrivate$localRole$members$name$ownerEmail(d,e,f,g,h,i,j){return this.gK().$7$code$collaboratorEmails$isPrivate$localRole$members$name$ownerEmail(d,e,f,g,h,i,j)},
$2$localRole$ownerEmail(d,e){return this.gK().$2$localRole$ownerEmail(d,e)},
$1$opacity(d){return this.gK().$1$opacity(d)},
$3$foregroundColor$iconSize$overlayColor(d,e,f){return this.gK().$3$foregroundColor$iconSize$overlayColor(d,e,f)},
$2$maxScaleFactor$minScaleFactor(d,e){return this.gK().$2$maxScaleFactor$minScaleFactor(d,e)},
$1$textScaler(d){return this.gK().$1$textScaler(d)},
$1$velocity(d){return this.gK().$1$velocity(d)},
$3$dimensions$textScaler(d,e,f){return this.gK().$3$dimensions$textScaler(d,e,f)},
$3$allowedExtensions$type$withData(d,e,f){return this.gK().$3$allowedExtensions$type$withData(d,e,f)},
$1$ownerEmail(d){return this.gK().$1$ownerEmail(d)},
$3$cancelOnError$onError(d,e,f){return this.gK().$3$cancelOnError$onError(d,e,f)},
$6$availableCameras$cameraDirection$isInitialized$isRunning$size$torchState(d,e,f,g,h,i){return this.gK().$6$availableCameras$cameraDirection$isInitialized$isRunning$size$torchState(d,e,f,g,h,i)},
$7$cameraDirection$error$isInitialized$isRunning$size$torchState$zoomScale(d,e,f,g,h,i,j){return this.gK().$7$cameraDirection$error$isInitialized$isRunning$size$torchState$zoomScale(d,e,f,g,h,i,j)},
$3$cancelOnError$onDone(d,e,f){return this.gK().$3$cancelOnError$onDone(d,e,f)},
$1$zoomScale(d){return this.gK().$1$zoomScale(d)},
$1$torchState(d){return this.gK().$1$torchState(d)},
$1$visibleChildrenPerParent(d){return this.gK().$1$visibleChildrenPerParent(d)},
$1$contentPadding(d){return this.gK().$1$contentPadding(d)},
$3$boxHeightStyle(d,e,f){return this.gK().$3$boxHeightStyle(d,e,f)},
$3$includePlaceholders$includeSemanticsLabels(d,e,f){return this.gK().$3$includePlaceholders$includeSemanticsLabels(d,e,f)},
$4$boxHeightStyle$boxWidthStyle(d,e,f,g){return this.gK().$4$boxHeightStyle$boxWidthStyle(d,e,f,g)},
$1$selection(d){return this.gK().$1$selection(d)},
$1$rect(d){return this.gK().$1$rect(d)},
$4$curve$descendant$duration$rect(d,e,f,g){return this.gK().$4$curve$descendant$duration$rect(d,e,f,g)},
$2$cause$from(d,e){return this.gK().$2$cause$from(d,e)},
$1$composing(d){return this.gK().$1$composing(d)},
$1$affinity(d){return this.gK().$1$affinity(d)},
$3$code$details$message(d,e,f){return this.gK().$3$code$details$message(d,e,f)},
$2$code$message(d,e){return this.gK().$2$code$message(d,e)},
$2$composing$selection(d,e){return this.gK().$2$composing$selection(d,e)},
$25$background$backgroundColor$color$debugLabel$decoration$decorationColor$decorationStyle$decorationThickness$fontFamily$fontFamilyFallback$fontFeatures$fontSize$fontStyle$fontVariations$fontWeight$foreground$height$leadingDistribution$letterSpacing$locale$overflow$package$shadows$textBaseline$wordSpacing(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4){return this.gK().$25$background$backgroundColor$color$debugLabel$decoration$decorationColor$decorationStyle$decorationThickness$fontFamily$fontFamilyFallback$fontFeatures$fontSize$fontStyle$fontVariations$fontWeight$foreground$height$leadingDistribution$letterSpacing$locale$overflow$package$shadows$textBaseline$wordSpacing(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4)},
$3$context$style$withComposing(d,e,f){return this.gK().$3$context$style$withComposing(d,e,f)},
$5$baseline$baselineOffset(d,e,f,g,h){return this.gK().$5$baseline$baselineOffset(d,e,f,g,h)},
$2$above(d,e){return this.gK().$2$above(d,e)},
$2$below(d,e){return this.gK().$2$below(d,e)},
$1$bottom(d){return this.gK().$1$bottom(d)},
$3$curve$duration$rect(d,e,f){return this.gK().$3$curve$duration$rect(d,e,f)},
$2$affinity$extentOffset(d,e){return this.gK().$2$affinity$extentOffset(d,e)},
$5$alpha$blue$colorSpace$green$red(d,e,f,g,h){return this.gK().$5$alpha$blue$colorSpace$green$red(d,e,f,g,h)},
$2$overscroll$scrollbars(d,e){return this.gK().$2$overscroll$scrollbars(d,e)},
$2$initialRestore(d,e){return this.gK().$2$initialRestore(d,e)},
$1$direction(d){return this.gK().$1$direction(d)},
$1$hasImplicitScrolling(d){return this.gK().$1$hasImplicitScrolling(d)},
$4$axis$rect(d,e,f,g){return this.gK().$4$axis$rect(d,e,f,g)},
$1$isReadOnly(d){return this.gK().$1$isReadOnly(d)},
$1$isTextField(d){return this.gK().$1$isTextField(d)},
$1$isMultiline(d){return this.gK().$1$isMultiline(d)},
$1$isObscured(d){return this.gK().$1$isObscured(d)},
$1$spellCheckService(d){return this.gK().$1$spellCheckService(d)},
$1$height(d){return this.gK().$1$height(d)},
$1$borderSide(d){return this.gK().$1$borderSide(d)},
$35$alignLabelWithHint$border$constraints$contentPadding$counterStyle$disabledBorder$enabledBorder$errorBorder$errorMaxLines$errorStyle$fillColor$filled$floatingLabelAlignment$floatingLabelBehavior$floatingLabelStyle$focusColor$focusedBorder$focusedErrorBorder$helperMaxLines$helperStyle$hintFadeDuration$hintMaxLines$hintStyle$hoverColor$iconColor$isCollapsed$isDense$labelStyle$prefixIconColor$prefixIconConstraints$prefixStyle$suffixIconColor$suffixIconConstraints$suffixStyle$visualDensity(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){return this.gK().$35$alignLabelWithHint$border$constraints$contentPadding$counterStyle$disabledBorder$enabledBorder$errorBorder$errorMaxLines$errorStyle$fillColor$filled$floatingLabelAlignment$floatingLabelBehavior$floatingLabelStyle$focusColor$focusedBorder$focusedErrorBorder$helperMaxLines$helperStyle$hintFadeDuration$hintMaxLines$hintStyle$hoverColor$iconColor$isCollapsed$isDense$labelStyle$prefixIconColor$prefixIconConstraints$prefixStyle$suffixIconColor$suffixIconConstraints$suffixStyle$visualDensity(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4)},
$2$enabled$hintMaxLines(d,e){return this.gK().$2$enabled$hintMaxLines(d,e)},
$4$counterStyle$counterText$errorText$semanticCounterText(d,e,f,g){return this.gK().$4$counterStyle$counterText$errorText$semanticCounterText(d,e,f,g)},
$2$counterText$semanticCounterText(d,e){return this.gK().$2$counterText$semanticCounterText(d,e)},
$1$extentOffset(d){return this.gK().$1$extentOffset(d)},
$2$body$title(d,e){return this.gK().$2$body$title(d,e)},
$1$chapters(d){return this.gK().$1$chapters(d)},
$1$picture(d){return this.gK().$1$picture(d)},
$1$photo(d){return this.gK().$1$photo(d)},
$3$composing$selection$text(d,e,f){return this.gK().$3$composing$selection$text(d,e,f)},
$1$scrollbars(d){return this.gK().$1$scrollbars(d)},
$3$rect(d,e,f){return this.gK().$3$rect(d,e,f)},
$2$hitTest$paintTransform(d,e){return this.gK().$2$hitTest$paintTransform(d,e)},
$3$crossAxisPosition$mainAxisPosition(d,e,f){return this.gK().$3$crossAxisPosition$mainAxisPosition(d,e,f)},
$2$padding$viewPadding(d,e){return this.gK().$2$padding$viewPadding(d,e)},
$2$isClosing(d,e){return this.gK().$2$isClosing(d,e)},
$3$parentUsesSize(d,e,f){return this.gK().$3$parentUsesSize(d,e,f)},
$1$inherited(d){return this.gK().$1$inherited(d)},
$6$font$fontBold$fontBoldItalic$fontFallback$fontItalic$fontNormal(d,e,f,g,h,i){return this.gK().$6$font$fontBold$fontBoldItalic$fontFallback$fontItalic$fontNormal(d,e,f,g,h,i)},
$1$lineSpacing(d){return this.gK().$1$lineSpacing(d)},
$1$fontSize(d){return this.gK().$1$fontSize(d)},
$2$fontSize$fontWeight(d,e){return this.gK().$2$fontSize$fontWeight(d,e)},
$2$letterSpacing(d,e){return this.gK().$2$letterSpacing(d,e)},
$5$font$fontBold$fontBoldItalic$fontItalic$fontNormal(d,e,f,g,h){return this.gK().$5$font$fontBold$fontBoldItalic$fontItalic$fontNormal(d,e,f,g,h)},
$4$annotation$baseline$style$text(d,e,f,g){return this.gK().$4$annotation$baseline$style$text(d,e,f,g)},
$1$noPixels(d){return this.gK().$1$noPixels(d)},
$6(d,e,f,g,h,i){return this.gK().$6(d,e,f,g,h,i)},
$2$frame(d,e){return this.gK().$2$frame(d,e)},
$2$length$position(d,e){return this.gK().$2$length$position(d,e)},
$1$numChannels(d){return this.gK().$1$numChannels(d)},
$2$offset(d,e){return this.gK().$2$offset(d,e)},
$1$width(d){return this.gK().$1$width(d)},
$2$heading(d,e){return this.gK().$2$heading(d,e)},
$1$advanceWidth(d){return this.gK().$1$advanceWidth(d)},
$1$format(d){return this.gK().$1$format(d)},
$1$includeChildren(d){return this.gK().$1$includeChildren(d)},
$1$cover(d){return this.gK().$1$cover(d)},
$3$imageQuality$maxWidth$source(d,e,f){return this.gK().$3$imageQuality$maxWidth$source(d,e,f)},
$2$options$source(d,e){return this.gK().$2$options$source(d,e)},
$1$font(d){return this.gK().$1$font(d)},
$1$position(d){return this.gK().$1$position(d)},
$1$resetColors(d){return this.gK().$1$resetColors(d)},
$1$bg2(d){return this.gK().$1$bg2(d)},
$1$accent(d){return this.gK().$1$accent(d)},
$1$ink(d){return this.gK().$1$ink(d)},
$1$bg1(d){return this.gK().$1$bg1(d)},
$4$font$position$resetColors$template(d,e,f,g){return this.gK().$4$font$position$resetColors$template(d,e,f,g)},
$1$header(d){return this.gK().$1$header(d)},
$3$author$subtitle$title(d,e,f){return this.gK().$3$author$subtitle$title(d,e,f)},
$1$maxScaleFactor(d){return this.gK().$1$maxScaleFactor(d)},
$1$task(d){return this.gK().$1$task(d)},
$1$oldWidget(d){return this.gK().$1$oldWidget(d)},
$1$isSlider(d){return this.gK().$1$isSlider(d)},
$3$isDiscrete$parentBox$sliderTheme(d,e,f){return this.gK().$3$isDiscrete$parentBox$sliderTheme(d,e,f)},
$1$ribbon(d){return this.gK().$1$ribbon(d)},
$1$texture(d){return this.gK().$1$texture(d)},
$1$frame(d){return this.gK().$1$frame(d)},
$1$titleSize(d){return this.gK().$1$titleSize(d)},
$1$foil(d){return this.gK().$1$foil(d)},
$1$emblem(d){return this.gK().$1$emblem(d)},
$2$backgroundColor$foregroundColor(d,e){return this.gK().$2$backgroundColor$foregroundColor(d,e)},
$11$author$emblem$foil$frame$position$ribbon$style$subtitle$texture$title$titleSize(d,e,f,g,h,i,j,k,l,m,n){return this.gK().$11$author$emblem$foil$frame$position$ribbon$style$subtitle$texture$title$titleSize(d,e,f,g,h,i,j,k,l,m,n)},
$1$members(d){return this.gK().$1$members(d)},
$3$collaboratorEmails$localRole$ownerEmail(d,e,f){return this.gK().$3$collaboratorEmails$localRole$ownerEmail(d,e,f)},
$1$isPrivate(d){return this.gK().$1$isPrivate(d)},
$2$code$name(d,e){return this.gK().$2$code$name(d,e)},
$2$label$value(d,e){return this.gK().$2$label$value(d,e)},
$3$icon$label$onTap(d,e,f){return this.gK().$3$icon$label$onTap(d,e,f)},
$4$color$icon$label$onTap(d,e,f,g){return this.gK().$4$color$icon$label$onTap(d,e,f,g)},
$2$fallback(d,e){return this.gK().$2$fallback(d,e)},
$1$suffixIcon(d){return this.gK().$1$suffixIcon(d)},
$4$activeTrackColor$inactiveTrackColor$overlayColor$thumbColor(d,e,f,g){return this.gK().$4$activeTrackColor$inactiveTrackColor$overlayColor$thumbColor(d,e,f,g)},
$4$imageQuality$maxHeight$maxWidth$source(d,e,f,g){return this.gK().$4$imageQuality$maxHeight$maxWidth$source(d,e,f,g)},
$1$border(d){return this.gK().$1$border(d)},
$1$errorText(d){return this.gK().$1$errorText(d)},
$2$index(d,e){return this.gK().$2$index(d,e)},
$2$canvas$page(d,e){return this.gK().$2$canvas$page(d,e)},
$4$bold$valueColor(d,e,f,g){return this.gK().$4$bold$valueColor(d,e,f,g)},
$1$items(d){return this.gK().$1$items(d)},
$3$hint(d,e,f){return this.gK().$3$hint(d,e,f)},
$1$thumbnailPath(d){return this.gK().$1$thumbnailPath(d)},
$6$icon$iconColor$onTap$p$subtitle$title(d,e,f,g,h,i){return this.gK().$6$icon$iconColor$onTap$p$subtitle$title(d,e,f,g,h,i)},
$4$copyText(d,e,f,g){return this.gK().$4$copyText(d,e,f,g)},
$5$amount$memberEmail$memberName$registryId$walletDeposit(d,e,f,g,h){return this.gK().$5$amount$memberEmail$memberName$registryId$walletDeposit(d,e,f,g,h)},
$2$icon(d,e){return this.gK().$2$icon(d,e)},
$3$helper$icon(d,e,f){return this.gK().$3$helper$icon(d,e,f)},
$3$fileOptions(d,e,f){return this.gK().$3$fileOptions(d,e,f)},
$2$defaultColor(d,e){return this.gK().$2$defaultColor(d,e)},
$2$child$context(d,e){return this.gK().$2$child$context(d,e)},
$1$2$params(d,e,f){return this.gK().$1$2$params(d,e,f)},
$2$prefer(d,e){return this.gK().$2$prefer(d,e)},
$1$child(d){return this.gK().$1$child(d)},
$3$mimeType(d,e,f){return this.gK().$3$mimeType(d,e,f)},
$3$imageQuality$limit$maxWidth(d,e,f){return this.gK().$3$imageQuality$limit$maxWidth(d,e,f)},
$1$options(d){return this.gK().$1$options(d)},
$3$begin$child$end(d,e,f){return this.gK().$3$begin$child$end(d,e,f)},
$8$enableDomStorage$enableJavaScript$headers$universalLinksOnly$useSafariVC$useWebView$webOnlyWindowName(d,e,f,g,h,i,j,k){return this.gK().$8$enableDomStorage$enableJavaScript$headers$universalLinksOnly$useSafariVC$useWebView$webOnlyWindowName(d,e,f,g,h,i,j,k)},
$5$onChanged$textCapitalization(d,e,f,g,h){return this.gK().$5$onChanged$textCapitalization(d,e,f,g,h)},
$6$hint$onChanged$textCapitalization(d,e,f,g,h,i){return this.gK().$6$hint$onChanged$textCapitalization(d,e,f,g,h,i)},
$5$hint$onChanged(d,e,f,g,h){return this.gK().$5$hint$onChanged(d,e,f,g,h)},
$6$hint$maxLines$onChanged(d,e,f,g,h,i){return this.gK().$6$hint$maxLines$onChanged(d,e,f,g,h,i)},
$5$label$primary(d,e,f,g,h){return this.gK().$5$label$primary(d,e,f,g,h)},
$5$dot$tip(d,e,f,g,h){return this.gK().$5$dot$tip(d,e,f,g,h)},
$5$badge$label(d,e,f,g,h){return this.gK().$5$badge$label(d,e,f,g,h)},
$6$badge$caption$tip(d,e,f,g,h,i){return this.gK().$6$badge$caption$tip(d,e,f,g,h,i)},
$5$caption$tip(d,e,f,g,h){return this.gK().$5$caption$tip(d,e,f,g,h)},
$4$imageQuality$maxWidth$preferredCameraDevice$source(d,e,f,g){return this.gK().$4$imageQuality$maxWidth$preferredCameraDevice$source(d,e,f,g)},
$4$colors(d,e,f,g){return this.gK().$4$colors(d,e,f,g)},
$4$busy(d,e,f,g){return this.gK().$4$busy(d,e,f,g)},
$2$hint(d,e){return this.gK().$2$hint(d,e)},
$6$animation$controller$max$min$target$tween(d,e,f,g,h,i){return this.gK().$6$animation$controller$max$min$target$tween(d,e,f,g,h,i)},
$1$hour(d){return this.gK().$1$hour(d)},
$1$minute(d){return this.gK().$1$minute(d)},
$3$error$errorText$hintText(d,e,f){return this.gK().$3$error$errorText$hintText(d,e,f)},
$2$suffixIcon$suffixIconConstraints(d,e){return this.gK().$2$suffixIcon$suffixIconConstraints(d,e)},
$1$fillColor(d){return this.gK().$1$fillColor(d)},
$4$overscroll$physics$platform$scrollbars(d,e,f,g){return this.gK().$4$overscroll$physics$platform$scrollbars(d,e,f,g)},
$3$colorScheme$dialogTheme$timePickerTheme(d,e,f){return this.gK().$3$colorScheme$dialogTheme$timePickerTheme(d,e,f)},
$2$onTimeout(d,e){return this.gK().$2$onTimeout(d,e)},
$2$test(d,e){return this.gK().$2$test(d,e)},
$1$overscroll(d){return this.gK().$1$overscroll(d)},
$1$inherit(d){return this.gK().$1$inherit(d)},
$2$fit(d,e){return this.gK().$2$fit(d,e)},
$3$weight(d,e,f){return this.gK().$3$weight(d,e,f)},
$3$isDark$label$value(d,e,f){return this.gK().$3$isDark$label$value(d,e,f)},
$6$color$icon$isDark$label$onTap$value(d,e,f,g,h,i){return this.gK().$6$color$icon$isDark$label$onTap$value(d,e,f,g,h,i)},
$1$orderId(d){return this.gK().$1$orderId(d)},
$1$url(d){return this.gK().$1$url(d)},
$2$headers$method(d,e){return this.gK().$2$headers$method(d,e)},
$3$2$method$url(d,e,f,g,h){return this.gK().$3$2$method$url(d,e,f,g,h)},
$3$3$body$method$url(d,e,f,g,h,i){return this.gK().$3$3$body$method$url(d,e,f,g,h,i)},
$1$isPlaying(d){return this.gK().$1$isPlaying(d)},
$3$caption$isCompleted$position(d,e,f){return this.gK().$3$caption$isCompleted$position(d,e,f)},
$1$isLooping(d){return this.gK().$1$isLooping(d)},
$6$duration$errorDescription$isCompleted$isInitialized$rotationCorrection$size(d,e,f,g,h,i){return this.gK().$6$duration$errorDescription$isCompleted$isInitialized$rotationCorrection$size(d,e,f,g,h,i)},
$1$isCompleted(d){return this.gK().$1$isCompleted(d)},
$1$buffered(d){return this.gK().$1$buffered(d)},
$1$isBuffering(d){return this.gK().$1$isBuffering(d)},
$2$isCompleted$isPlaying(d,e){return this.gK().$2$isCompleted$isPlaying(d,e)},
$3$hintText$prefixIcon(d,e,f){return this.gK().$3$hintText$prefixIcon(d,e,f)},
$1$locationSettings(d){return this.gK().$1$locationSettings(d)},
$3$enableHighAccuracy$maximumAge$timeout(d,e,f){return this.gK().$3$enableHighAccuracy$maximumAge$timeout(d,e,f)},
$2$hitTest$paintOffset(d,e){return this.gK().$2$hitTest$paintOffset(d,e)},
$3$height$width(d,e,f){return this.gK().$3$height$width(d,e,f)},
$1$force(d){return this.gK().$1$force(d)},
$3$maxDuration$preferredCameraDevice$source(d,e,f){return this.gK().$3$maxDuration$preferredCameraDevice$source(d,e,f)},
$1$silent(d){return this.gK().$1$silent(d)},
$2$lockFor(d,e){return this.gK().$2$lockFor(d,e)},
$6$helps(d,e,f,g,h,i){return this.gK().$6$helps(d,e,f,g,h,i)},
$1$useStateColumn(d){return this.gK().$1$useStateColumn(d)},
$4$copyable(d,e,f,g){return this.gK().$4$copyable(d,e,f,g)},
$2$child$last(d,e){return this.gK().$2$child$last(d,e)},
$6$accent$date$icon$subtitle$title(d,e,f,g,h,i){return this.gK().$6$accent$date$icon$subtitle$title(d,e,f,g,h,i)},
$5$bg$fg$icon$onPressed$tooltip(d,e,f,g,h){return this.gK().$5$bg$fg$icon$onPressed$tooltip(d,e,f,g,h)},
$4$ageAt(d,e,f,g){return this.gK().$4$ageAt(d,e,f,g)},
$2$prefix(d,e){return this.gK().$2$prefix(d,e)},
$7$accent$child$expanded$icon$onToggle$subtitle$title(d,e,f,g,h,i,j){return this.gK().$7$accent$child$expanded$icon$onToggle$subtitle$title(d,e,f,g,h,i,j)},
$3$phone(d,e,f){return this.gK().$3$phone(d,e,f)},
$5$enableScrollToHighlight$excludeSemantics$useMaterial3(d,e,f,g,h){return this.gK().$5$enableScrollToHighlight$excludeSemantics$useMaterial3(d,e,f,g,h)},
$4$focusedIndex$useMaterial3(d,e,f,g){return this.gK().$4$focusedIndex$useMaterial3(d,e,f,g)},
$1$minimumSize(d){return this.gK().$1$minimumSize(d)},
$4$backgroundColor$foregroundColor$iconColor$overlayColor(d,e,f,g){return this.gK().$4$backgroundColor$foregroundColor$iconColor$overlayColor(d,e,f,g)},
$1$prefixIcon(d){return this.gK().$1$prefixIcon(d)},
$1$relatives(d){return this.gK().$1$relatives(d)},
$1$relation(d){return this.gK().$1$relation(d)},
$1$gender(d){return this.gK().$1$gender(d)},
$5$accent$delayMs$icon$onTap$title(d,e,f,g,h){return this.gK().$5$accent$delayMs$icon$onTap$title(d,e,f,g,h)},
$3$size$weight(d,e,f){return this.gK().$3$size$weight(d,e,f)},
$4$align$size$weight(d,e,f,g){return this.gK().$4$align$size$weight(d,e,f,g)},
$2$label(d,e){return this.gK().$2$label(d,e)},
$1$state(d){return this.gK().$1$state(d)},
$3$amount$description$fund(d,e,f){return this.gK().$3$amount$description$fund(d,e,f)},
$3$amount$description$spendingId(d,e,f){return this.gK().$3$amount$description$spendingId(d,e,f)},
$4$hideBudget$hideSpendings$hideTransactions$state(d,e,f,g){return this.gK().$4$hideBudget$hideSpendings$hideTransactions$state(d,e,f,g)},
$3$label$onChanged$value(d,e,f){return this.gK().$3$label$onChanged$value(d,e,f)},
$2$amount$state(d,e){return this.gK().$2$amount$state(d,e)},
$1$colorScheme(d){return this.gK().$1$colorScheme(d)},
$3$amount$description$direction(d,e,f){return this.gK().$3$amount$description$direction(d,e,f)},
$4$confirmLabel$message$stepNum$title(d,e,f,g){return this.gK().$4$confirmLabel$message$stepNum$title(d,e,f,g)},
$5$confirmLabel$message$requireTypeAllStates$stepNum$title(d,e,f,g,h){return this.gK().$5$confirmLabel$message$requireTypeAllStates$stepNum$title(d,e,f,g,h)},
$4$hint$multiline(d,e,f,g){return this.gK().$4$hint$multiline(d,e,f,g)},
$3$multiline(d,e,f){return this.gK().$3$multiline(d,e,f)},
$2$campaignId$campaignTitle(d,e){return this.gK().$2$campaignId$campaignTitle(d,e)},
$5$color$icon$onCopyTap$title$value(d,e,f,g,h){return this.gK().$5$color$icon$onCopyTap$title$value(d,e,f,g,h)},
$4$big(d,e,f,g){return this.gK().$4$big(d,e,f,g)},
$4$color$icon$onTap$tooltip(d,e,f,g){return this.gK().$4$color$icon$onTap$tooltip(d,e,f,g)},
$3$color(d,e,f){return this.gK().$3$color(d,e,f)},
$3$copied$error$state(d,e,f){return this.gK().$3$copied$error$state(d,e,f)},
$2$spin(d,e){return this.gK().$2$spin(d,e)},
$1$appIcon(d){return this.gK().$1$appIcon(d)},
$3$bold$depth(d,e,f){return this.gK().$3$bold$depth(d,e,f)},
$2$depth(d,e){return this.gK().$2$depth(d,e)},
$4$depth$onTap$selected(d,e,f,g){return this.gK().$4$depth$onTap$selected(d,e,f,g)},
$3$depth$selected(d,e,f){return this.gK().$3$depth$selected(d,e,f)},
$2$data$kind(d,e){return this.gK().$2$data$kind(d,e)},
$1$updatedAt(d){return this.gK().$1$updatedAt(d)},
$1$publicUrl(d){return this.gK().$1$publicUrl(d)},
$8$customCode$database$id$publicUrl$publishedAt$reviewNote$slug$status(d,e,f,g,h,i,j,k){return this.gK().$8$customCode$database$id$publicUrl$publishedAt$reviewNote$slug$status(d,e,f,g,h,i,j,k)},
$3$appIcon$tagline$themeColor(d,e,f){return this.gK().$3$appIcon$tagline$themeColor(d,e,f)},
$6$id$publicUrl$publishedAt$reviewNote$slug$status(d,e,f,g,h,i){return this.gK().$6$id$publicUrl$publishedAt$reviewNote$slug$status(d,e,f,g,h,i)},
$3$maxLines(d,e,f){return this.gK().$3$maxLines(d,e,f)},
$3$keyboard(d,e,f){return this.gK().$3$keyboard(d,e,f)},
$1$amountColor(d){return this.gK().$1$amountColor(d)},
$4$on$tooltip(d,e,f,g){return this.gK().$4$on$tooltip(d,e,f,g)},
$3$tooltip(d,e,f){return this.gK().$3$tooltip(d,e,f)},
$2$ownerEmail$updatedAt(d,e){return this.gK().$2$ownerEmail$updatedAt(d,e)},
$3$allowMultiple$type$withData(d,e,f){return this.gK().$3$allowMultiple$type$withData(d,e,f)},
$1$screens(d){return this.gK().$1$screens(d)},
$3$cancelLeap$leapingIndicator(d,e,f){return this.gK().$3$cancelLeap$leapingIndicator(d,e,f)},
$3$hasGesture$source(d,e,f){return this.gK().$3$hasGesture$source(d,e,f)},
$4$hasGesture$source(d,e,f,g){return this.gK().$4$hasGesture$source(d,e,f,g)},
$1$3$manager$onTick$sum(d,e,f,g){return this.gK().$1$3$manager$onTick$sum(d,e,f,g)},
$2$camera$tileZoom(d,e){return this.gK().$2$camera$tileZoom(d,e)},
$2$fadeIn$instantaneous(d,e){return this.gK().$2$fadeIn$instantaneous(d,e)},
$1$additionalHeaders(d){return this.gK().$1$additionalHeaders(d)},
$2$bytes$headers(d,e){return this.gK().$2$bytes$headers(d,e)},
$1$fadeIn(d){return this.gK().$1$fadeIn(d)},
$2$lat$lng(d,e){return this.gK().$2$lat$lng(d,e)},
$1$address(d){return this.gK().$1$address(d)},
$1$title(d){return this.gK().$1$title(d)},
$1$database(d){return this.gK().$1$database(d)},
$3$reviewNote$status$updatedAt(d,e,f){return this.gK().$3$reviewNote$status$updatedAt(d,e,f)},
$3$publicUrl$seoDescription$slug(d,e,f){return this.gK().$3$publicUrl$seoDescription$slug(d,e,f)},
$4$publishedAt$reviewNote$status$updatedAt(d,e,f,g){return this.gK().$4$publishedAt$reviewNote$status$updatedAt(d,e,f,g)},
$6$joinedAt$onTap(d,e,f,g,h,i){return this.gK().$6$joinedAt$onTap(d,e,f,g,h,i)},
$5$accent(d,e,f,g,h){return this.gK().$5$accent(d,e,f,g,h)},
$5$danger(d,e,f,g,h){return this.gK().$5$danger(d,e,f,g,h)},
$1$r(d){return this.gK().$1$r(d)},
$1$f(d){return this.gK().$1$f(d)},
$7$key(d,e,f,g,h,i,j){return this.gK().$7$key(d,e,f,g,h,i,j)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.gK().$8$fx$key(d,e,f,g,h,i,j,k)},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.gK().$8$anim$delay$key(d,e,f,g,h,i,j,k)},
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){return this.gK().$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.gK().$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.gK().$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.gK().$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.gK().$8$anim$fx$key(d,e,f,g,h,i,j,k)},
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){return this.gK().$9$fx$key$rotation(d,e,f,g,h,i,j,k,l)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.gK().$9$anim$key$weight(d,e,f,g,h,i,j,k,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.gK().$9$color$delay$key(d,e,f,g,h,i,j,k,l)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.gK().$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.gK().$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.gK().$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n)},
$8(d,e,f,g,h,i,j,k){return this.gK().$8(d,e,f,g,h,i,j,k)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.gK().$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o)},
$5$size(d,e,f,g,h){return this.gK().$5$size(d,e,f,g,h)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.gK().$10$anim$delay(d,e,f,g,h,i,j,k,l,m)},
$9(d,e,f,g,h,i,j,k,l){return this.gK().$9(d,e,f,g,h,i,j,k,l)},
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return this.gK().$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p)},
$2$ctx$label(d,e){return this.gK().$2$ctx$label(d,e)},
$6$accent$ctx$icon$subtitle$title$value(d,e,f,g,h,i){return this.gK().$6$accent$ctx$icon$subtitle$title$value(d,e,f,g,h,i)},
$3$sharePositionOrigin$subject(d,e,f){return this.gK().$3$sharePositionOrigin$subject(d,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.gK().$9$align$weight(d,e,f,g,h,i,j,k,l)},
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return this.gK().$10$align$style$weight(d,e,f,g,h,i,j,k,l,m)},
$8$weight(d,e,f,g,h,i,j,k){return this.gK().$8$weight(d,e,f,g,h,i,j,k)},
$5$doc$history$instruction$photo$template(d,e,f,g,h){return this.gK().$5$doc$history$instruction$photo$template(d,e,f,g,h)},
$4$paper$photo$request$template(d,e,f,g){return this.gK().$4$paper$photo$request$template(d,e,f,g)},
$1$paper(d){return this.gK().$1$paper(d)},
$2$fontFamily(d,e){return this.gK().$2$fontFamily(d,e)},
$6$child$h$label$on$onTap$w(d,e,f,g,h,i){return this.gK().$6$child$h$label$on$onTap$w(d,e,f,g,h,i)},
$6$activeTrackColor$inactiveTrackColor$overlayColor$thumbColor$thumbShape$trackHeight(d,e,f,g,h,i){return this.gK().$6$activeTrackColor$inactiveTrackColor$overlayColor$thumbColor$thumbShape$trackHeight(d,e,f,g,h,i)},
$2$radius(d,e){return this.gK().$2$radius(d,e)},
$6$shown(d,e,f,g,h,i){return this.gK().$6$shown(d,e,f,g,h,i)},
$3$on$onTap(d,e,f){return this.gK().$3$on$onTap(d,e,f)},
$1$size(d){return this.gK().$1$size(d)},
$2$logo$style(d,e){return this.gK().$2$logo$style(d,e)},
$1$logo(d){return this.gK().$1$logo(d)},
$1$subtitle(d){return this.gK().$1$subtitle(d)},
$3$accent$isDark(d,e,f){return this.gK().$3$accent$isDark(d,e,f)},
$7$color$enabled$icon$isDark$onTap$subtitle$title(d,e,f,g,h,i,j){return this.gK().$7$color$enabled$icon$isDark$onTap$subtitle$title(d,e,f,g,h,i,j)},
$8$color$enabled$icon$isDark$isPro$onTap$subtitle$title(d,e,f,g,h,i,j,k){return this.gK().$8$color$enabled$icon$isDark$isPro$onTap$subtitle$title(d,e,f,g,h,i,j,k)},
$2$selection$text(d,e){return this.gK().$2$selection$text(d,e)},
$2$orElse(d,e){return this.gK().$2$orElse(d,e)},
$11$colors$onTap$orbit$phase$preview$pulse$scan$subtitle$t$thumbHeight$title(d,e,f,g,h,i,j,k,l,m,n){return this.gK().$11$colors$onTap$orbit$phase$preview$pulse$scan$subtitle$t$thumbHeight$title(d,e,f,g,h,i,j,k,l,m,n)},
$1$imageQuality(d){return this.gK().$1$imageQuality(d)},
$2$height$offsetLeft(d,e){return this.gK().$2$height$offsetLeft(d,e)},
$3$size(d,e,f){return this.gK().$3$size(d,e,f)},
$2$size(d,e){return this.gK().$2$size(d,e)},
$1$existing(d){return this.gK().$1$existing(d)},
$1$fromTemplate(d){return this.gK().$1$fromTemplate(d)},
$1$lastContacted(d){return this.gK().$1$lastContacted(d)},
$1$favorite(d){return this.gK().$1$favorite(d)},
$4$hint(d,e,f,g){return this.gK().$4$hint(d,e,f,g)},
$4$count(d,e,f,g){return this.gK().$4$count(d,e,f,g)},
$5$color$count(d,e,f,g,h){return this.gK().$5$color$count(d,e,f,g,h)},
$3$tip(d,e,f){return this.gK().$3$tip(d,e,f)},
$4$color$tip(d,e,f,g){return this.gK().$4$color$tip(d,e,f,g)},
$1$note(d){return this.gK().$1$note(d)},
$1$letterSpacing(d){return this.gK().$1$letterSpacing(d)},
$4$glyph$label$onTap$selected(d,e,f,g){return this.gK().$4$glyph$label$onTap$selected(d,e,f,g)},
$2$imageQuality$source(d,e){return this.gK().$2$imageQuality$source(d,e)},
$1$fontWeight(d){return this.gK().$1$fontWeight(d)},
$5$cardAddress$cardHours$cardPhone$cardWebsite$centerLabel(d,e,f,g,h){return this.gK().$5$cardAddress$cardHours$cardPhone$cardWebsite$centerLabel(d,e,f,g,h)},
$3$child$title(d,e,f){return this.gK().$3$child$title(d,e,f)},
$2$logoBase64$showCardLogo(d,e){return this.gK().$2$logoBase64$showCardLogo(d,e)},
$1$moduleShape(d){return this.gK().$1$moduleShape(d)},
$1$eyeShape(d){return this.gK().$1$eyeShape(d)},
$3$accent$background$foreground(d,e,f){return this.gK().$3$accent$background$foreground(d,e,f)},
$1$cornerStyle(d){return this.gK().$1$cornerStyle(d)},
$1$centerLabel(d){return this.gK().$1$centerLabel(d)},
$1$cardWebsite(d){return this.gK().$1$cardWebsite(d)},
$1$cardHours(d){return this.gK().$1$cardHours(d)},
$1$cardAddress(d){return this.gK().$1$cardAddress(d)},
$1$cardPhone(d){return this.gK().$1$cardPhone(d)},
$1$cardTemplate(d){return this.gK().$1$cardTemplate(d)},
$1$displayMode(d){return this.gK().$1$displayMode(d)},
$5$candidateName$ctaText$headline$marqueeText$supportLine(d,e,f,g,h){return this.gK().$5$candidateName$ctaText$headline$marqueeText$supportLine(d,e,f,g,h)},
$4$onChanged(d,e,f,g){return this.gK().$4$onChanged(d,e,f,g)},
$6$bioNote$candidateName$ctaText$headline$marqueeText$supportLine(d,e,f,g,h,i){return this.gK().$6$bioNote$candidateName$ctaText$headline$marqueeText$supportLine(d,e,f,g,h,i)},
$9$active$candidateName$ctaText$durationDays$endsAt$headline$publishedBy$startsAt$updatedAt(d,e,f,g,h,i,j,k,l){return this.gK().$9$active$candidateName$ctaText$durationDays$endsAt$headline$publishedBy$startsAt$updatedAt(d,e,f,g,h,i,j,k,l)},
$1$photoUrl(d){return this.gK().$1$photoUrl(d)},
$1$backgroundUrl(d){return this.gK().$1$backgroundUrl(d)},
$2$accentArgb$slideStyle(d,e){return this.gK().$2$accentArgb$slideStyle(d,e)},
$1$accentArgb(d){return this.gK().$1$accentArgb(d)},
$1$showMarquee(d){return this.gK().$1$showMarquee(d)},
$1$showCirclePhoto(d){return this.gK().$1$showCirclePhoto(d)},
$9$backgroundUrl$bioNote$candidateId$candidateName$ctaText$headline$marqueeText$photoUrl$supportLine(d,e,f,g,h,i,j,k,l){return this.gK().$9$backgroundUrl$bioNote$candidateId$candidateName$ctaText$headline$marqueeText$photoUrl$supportLine(d,e,f,g,h,i,j,k,l)},
$3$onTap$selected(d,e,f){return this.gK().$3$onTap$selected(d,e,f)},
$1$period(d){return this.gK().$1$period(d)},
$4$activeTrackColor$inactiveTrackColor$thumbColor$trackHeight(d,e,f,g){return this.gK().$4$activeTrackColor$inactiveTrackColor$thumbColor$trackHeight(d,e,f,g)},
$5$fileNameOverrides$sharePositionOrigin$subject$text(d,e,f,g,h){return this.gK().$5$fileNameOverrides$sharePositionOrigin$subject$text(d,e,f,g,h)},
$2$volume(d,e){return this.gK().$2$volume(d,e)},
$2$coinsDelta$won(d,e){return this.gK().$2$coinsDelta$won(d,e)},
$4$isFront$revealDates(d,e,f,g){return this.gK().$4$isFront$revealDates(d,e,f,g)},
$2$dy$opacity(d,e){return this.gK().$2$dy$opacity(d,e)},
$2$dx$opacity(d,e){return this.gK().$2$dx$opacity(d,e)},
$2$opacity$scale(d,e){return this.gK().$2$opacity$scale(d,e)},
$3$angle$opacity$scale(d,e,f){return this.gK().$3$angle$opacity$scale(d,e,f)},
$3$dy$opacity$scale(d,e,f){return this.gK().$3$dy$opacity$scale(d,e,f)},
$1$frontSpendingId(d){return this.gK().$1$frontSpendingId(d)},
$1$imageBase64(d){return this.gK().$1$imageBase64(d)},
$1$civicIdJson(d){return this.gK().$1$civicIdJson(d)},
$2$businessCardJson$description(d,e){return this.gK().$2$businessCardJson$description(d,e)},
$2$autoPlay$style(d,e){return this.gK().$2$autoPlay$style(d,e)},
$6$amount$date$description$note$receiptItems$receiptMerchant(d,e,f,g,h,i){return this.gK().$6$amount$date$description$note$receiptItems$receiptMerchant(d,e,f,g,h,i)},
$4$bold$color(d,e,f,g){return this.gK().$4$bold$color(d,e,f,g)},
$2$cloudRequest(d,e){return this.gK().$2$cloudRequest(d,e)},
$1$source(d){return this.gK().$1$source(d)},
$1$reason(d){return this.gK().$1$reason(d)},
$1$complete(d){return this.gK().$1$complete(d)},
$3$bonus(d,e,f){return this.gK().$3$bonus(d,e,f)},
$2$allowDecrease$syncBalance(d,e){return this.gK().$2$allowDecrease$syncBalance(d,e)},
$2$allowDecrease(d,e){return this.gK().$2$allowDecrease(d,e)},
$2$isFinal(d,e){return this.gK().$2$isFinal(d,e)},
$1$sortOrder(d){return this.gK().$1$sortOrder(d)},
$3$colorValue$icon$title(d,e,f){return this.gK().$3$colorValue$icon$title(d,e,f)},
$1$questions(d){return this.gK().$1$questions(d)},
$2$id$sortOrder(d,e){return this.gK().$2$id$sortOrder(d,e)},
$1$bumpWalletRevision(d){return this.gK().$1$bumpWalletRevision(d)},
$2$bumpWalletRevision(d,e){return this.gK().$2$bumpWalletRevision(d,e)},
$2$fromCloudRelay(d,e){return this.gK().$2$fromCloudRelay(d,e)},
$4$body$cooldown$tag$title(d,e,f,g){return this.gK().$4$body$cooldown$tag$title(d,e,f,g)},
$6$animDelayMs(d,e,f,g,h,i){return this.gK().$6$animDelayMs(d,e,f,g,h,i)},
$3$backgroundColor$foregroundColor$overlayColor(d,e,f){return this.gK().$3$backgroundColor$foregroundColor$overlayColor(d,e,f)},
$7$accent$children$expanded$icon$onToggle$subtitle$title(d,e,f,g,h,i,j){return this.gK().$7$accent$children$expanded$icon$onToggle$subtitle$title(d,e,f,g,h,i,j)},
$2$suffix(d,e){return this.gK().$2$suffix(d,e)},
$3$hint$suffix(d,e,f){return this.gK().$3$hint$suffix(d,e,f)},
$7$amount$giftName$storeAddress$storeListingId$storeSellerEmail$storeSellerName$styleId(d,e,f,g,h,i,j){return this.gK().$7$amount$giftName$storeAddress$storeListingId$storeSellerEmail$storeSellerName$styleId(d,e,f,g,h,i,j)},
$8$amount$giftName$pending$storeAddress$storeListingId$storeSellerEmail$storeSellerName$styleId(d,e,f,g,h,i,j,k){return this.gK().$8$amount$giftName$pending$storeAddress$storeListingId$storeSellerEmail$storeSellerName$styleId(d,e,f,g,h,i,j,k)},
$3$fromState$member$toState(d,e,f){return this.gK().$3$fromState$member$toState(d,e,f)},
$3$showActions(d,e,f){return this.gK().$3$showActions(d,e,f)},
$4$type(d,e,f,g){return this.gK().$4$type(d,e,f,g)},
$5$fmt$type(d,e,f,g,h){return this.gK().$5$fmt$type(d,e,f,g,h)},
$8$amount$giftName$storeAddress$storeListingId$storeSellerEmail$storeSellerName$styleId(d,e,f,g,h,i,j,k){return this.gK().$8$amount$giftName$storeAddress$storeListingId$storeSellerEmail$storeSellerName$styleId(d,e,f,g,h,i,j,k)},
$1$stashToken(d){return this.gK().$1$stashToken(d)},
$1$shortCode(d){return this.gK().$1$shortCode(d)},
$1$preselectedCode(d){return this.gK().$1$preselectedCode(d)},
$2$type$withData(d,e){return this.gK().$2$type$withData(d,e)},
$2$isLuxury(d,e){return this.gK().$2$isLuxury(d,e)},
$3$onChanged(d,e,f){return this.gK().$3$onChanged(d,e,f)},
$4$hint$onChanged(d,e,f,g){return this.gK().$4$hint$onChanged(d,e,f,g)},
$4$keyboard$onChanged(d,e,f,g){return this.gK().$4$keyboard$onChanged(d,e,f,g)},
$5$hint$keyboard$onChanged(d,e,f,g,h){return this.gK().$5$hint$keyboard$onChanged(d,e,f,g,h)},
$4$maxLines$onChanged(d,e,f,g){return this.gK().$4$maxLines$onChanged(d,e,f,g)},
$1$record(d){return this.gK().$1$record(d)},
$2$clearPendingDelete$stock(d,e){return this.gK().$2$clearPendingDelete$stock(d,e)},
$2$pendingDeleteAt$stock(d,e){return this.gK().$2$pendingDeleteAt$stock(d,e)},
$1$barcode(d){return this.gK().$1$barcode(d)},
$4$controller$hint$icon$label(d,e,f,g){return this.gK().$4$controller$hint$icon$label(d,e,f,g)},
$5$controller$hint$icon$label$onChanged(d,e,f,g,h){return this.gK().$5$controller$hint$icon$label$onChanged(d,e,f,g,h)},
$5$controller$hint$icon$label$maxLines(d,e,f,g,h){return this.gK().$5$controller$hint$icon$label$maxLines(d,e,f,g,h)},
$5$controller$hint$icon$label$obscure(d,e,f,g,h){return this.gK().$5$controller$hint$icon$label$obscure(d,e,f,g,h)},
$3$async(d,e,f){return this.gK().$3$async(d,e,f)},
$3$icon$onTap$tooltip(d,e,f){return this.gK().$3$icon$onTap$tooltip(d,e,f)},
$3$aspect$facingMode$pipEnabled(d,e,f){return this.gK().$3$aspect$facingMode$pipEnabled(d,e,f)},
$1$restoreHost(d){return this.gK().$1$restoreHost(d)},
$1$hostStream(d){return this.gK().$1$hostStream(d)},
$2$withAudio(d,e){return this.gK().$2$withAudio(d,e)},
$6$align(d,e,f,g,h,i){return this.gK().$6$align(d,e,f,g,h,i)},
$7(d,e,f,g,h,i,j){return this.gK().$7(d,e,f,g,h,i,j)},
$4$triangles(d,e,f,g){return this.gK().$4$triangles(d,e,f,g)},
$4$angledTop(d,e,f,g){return this.gK().$4$angledTop(d,e,f,g)},
$10$accent$badge$bannerColors$brandBg$brandFg$crown$footerBg$textColor(d,e,f,g,h,i,j,k,l,m){return this.gK().$10$accent$badge$bannerColors$brandBg$brandFg$crown$footerBg$textColor(d,e,f,g,h,i,j,k,l,m)},
$9$accent$badge$bannerColors$brandBg$brandFg$footerBg$textColor(d,e,f,g,h,i,j,k,l){return this.gK().$9$accent$badge$bannerColors$brandBg$brandFg$footerBg$textColor(d,e,f,g,h,i,j,k,l)},
$11$accent$badge$bannerColors$brandBg$brandFg$crimsonVelvet$crown$footerBg$textColor(d,e,f,g,h,i,j,k,l,m,n){return this.gK().$11$accent$badge$bannerColors$brandBg$brandFg$crimsonVelvet$crown$footerBg$textColor(d,e,f,g,h,i,j,k,l,m,n)},
$10$accent$badge$bannerColors$brandBg$brandFg$footerBg$marble$textColor(d,e,f,g,h,i,j,k,l,m){return this.gK().$10$accent$badge$bannerColors$brandBg$brandFg$footerBg$marble$textColor(d,e,f,g,h,i,j,k,l,m)},
$1$maxWidth(d){return this.gK().$1$maxWidth(d)},
$1$dividerColor(d){return this.gK().$1$dividerColor(d)},
$8$removeBottomInset$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(d,e,f,g,h,i,j,k){return this.gK().$8$removeBottomInset$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(d,e,f,g,h,i,j,k)},
$7$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(d,e,f,g,h,i,j){return this.gK().$7$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(d,e,f,g,h,i,j)},
$8$maintainBottomViewPadding$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(d,e,f,g,h,i,j,k){return this.gK().$8$maintainBottomViewPadding$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(d,e,f,g,h,i,j,k)},
$1$floatingActionButtonScale(d){return this.gK().$1$floatingActionButtonScale(d)},
$1$removeBottom(d){return this.gK().$1$removeBottom(d)},
$2$viewInsets$viewPadding(d,e){return this.gK().$2$viewInsets$viewPadding(d,e)},
$3$2$headers$maybeSingle(d,e,f,g,h){return this.gK().$3$2$headers$maybeSingle(d,e,f,g,h)},
$2$boldText$textScaler(d,e){return this.gK().$2$boldText$textScaler(d,e)},
$1$viewInsets(d){return this.gK().$1$viewInsets(d)},
$6$banner$body$incomeTransaction$sound$tag$title(d,e,f,g,h,i){return this.gK().$6$banner$body$incomeTransaction$sound$tag$title(d,e,f,g,h,i)},
$5$adminDashboardAlert$body$cooldown$tag$title(d,e,f,g,h){return this.gK().$5$adminDashboardAlert$body$cooldown$tag$title(d,e,f,g,h)},
$2$where(d,e){return this.gK().$2$where(d,e)},
$3$tag(d,e,f){return this.gK().$3$tag(d,e,f)},
$6$adminDashboardAlert$body$cooldown$showInAppBanner$tag$title(d,e,f,g,h,i){return this.gK().$6$adminDashboardAlert$body$cooldown$showInAppBanner$tag$title(d,e,f,g,h,i)},
$5$body$cooldown$important$tag$title(d,e,f,g,h){return this.gK().$5$body$cooldown$important$tag$title(d,e,f,g,h)},
$4$body$important$tag$title(d,e,f,g){return this.gK().$4$body$important$tag$title(d,e,f,g)},
$3$body$tag$title(d,e,f){return this.gK().$3$body$tag$title(d,e,f)},
$5$body$incomeAmount$sound$tag$title(d,e,f,g,h){return this.gK().$5$body$incomeAmount$sound$tag$title(d,e,f,g,h)},
$2$primaryTextTheme$textTheme(d,e){return this.gK().$2$primaryTextTheme$textTheme(d,e)},
$3$bodyColor$decorationColor$displayColor(d,e,f){return this.gK().$3$bodyColor$decorationColor$displayColor(d,e,f)},
$1$fontFamily(d){return this.gK().$1$fontFamily(d)},
$1$fontFamilyFallback(d){return this.gK().$1$fontFamilyFallback(d)},
$2$bottom$top(d,e){return this.gK().$2$bottom$top(d,e)},
$3$icon$isDark$onTap(d,e,f){return this.gK().$3$icon$isDark$onTap(d,e,f)},
$3$isDark$onReply(d,e,f){return this.gK().$3$isDark$onReply(d,e,f)},
$3$canvasColor$dialogBackgroundColor$scaffoldBackgroundColor(d,e,f){return this.gK().$3$canvasColor$dialogBackgroundColor$scaffoldBackgroundColor(d,e,f)},
$2$body$overlay(d,e){return this.gK().$2$body$overlay(d,e)},
$2$body$paidStampOnLeft(d,e){return this.gK().$2$body$paidStampOnLeft(d,e)},
$1$body(d){return this.gK().$1$body(d)},
$3$body$overlay$paidStampOnLeft(d,e,f){return this.gK().$3$body$overlay$paidStampOnLeft(d,e,f)},
$4$body$paidStampOnLeft$showCrownBand$topBand(d,e,f,g){return this.gK().$4$body$paidStampOnLeft$showCrownBand$topBand(d,e,f,g)},
$3$body$showCrownBand$topBand(d,e,f){return this.gK().$3$body$showCrownBand$topBand(d,e,f)},
$3$controller$hint$icon(d,e,f){return this.gK().$3$controller$hint$icon(d,e,f)},
$5$autofocus$focusNode$mouseCursor$painter$size(d,e,f,g,h){return this.gK().$5$autofocus$focusNode$mouseCursor$painter$size(d,e,f,g,h)},
$4$icon$rows$title(d,e,f,g){return this.gK().$4$icon$rows$title(d,e,f,g)},
$3$strong(d,e,f){return this.gK().$3$strong(d,e,f)},
$4$color$strong(d,e,f,g){return this.gK().$4$color$strong(d,e,f,g)},
$1$removeTop(d){return this.gK().$1$removeTop(d)},
$3$card(d,e,f){return this.gK().$3$card(d,e,f)},
$4$child$glow$glowAt$radius(d,e,f,g){return this.gK().$4$child$glow$glowAt$radius(d,e,f,g)},
$5$activeTrackColor$inactiveTrackColor$overlayColor$thumbColor$trackHeight(d,e,f,g,h){return this.gK().$5$activeTrackColor$inactiveTrackColor$overlayColor$thumbColor$trackHeight(d,e,f,g,h)},
$3$eccentric(d,e,f){return this.gK().$3$eccentric(d,e,f)},
$4$vol(d,e,f,g){return this.gK().$4$vol(d,e,f,g)},
$4$sweep(d,e,f,g){return this.gK().$4$sweep(d,e,f,g)},
$4$iconOnly(d,e,f,g){return this.gK().$4$iconOnly(d,e,f,g)},
$3$ghost(d,e,f){return this.gK().$3$ghost(d,e,f)},
$3$big(d,e,f){return this.gK().$3$big(d,e,f)},
$5$color$on(d,e,f,g,h){return this.gK().$5$color$on(d,e,f,g,h)},
$6$fs$h$radius$ring$w(d,e,f,g,h,i){return this.gK().$6$fs$h$radius$ring$w(d,e,f,g,h,i)},
$2$dist$target(d,e){return this.gK().$2$dist$target(d,e)},
$4$split(d,e,f,g){return this.gK().$4$split(d,e,f,g)},
$4$alongX(d,e,f,g){return this.gK().$4$alongX(d,e,f,g)},
$5$ends$shine(d,e,f,g,h){return this.gK().$5$ends$shine(d,e,f,g,h)},
$2$col(d,e){return this.gK().$2$col(d,e)},
$5$shine$split(d,e,f,g,h){return this.gK().$5$shine$split(d,e,f,g,h)},
$4$shine(d,e,f,g){return this.gK().$4$shine(d,e,f,g)},
$5$h$w(d,e,f,g,h){return this.gK().$5$h$w(d,e,f,g,h)},
$6$shine$sides(d,e,f,g,h,i){return this.gK().$6$shine$sides(d,e,f,g,h,i)},
$6$joints$shine$sides(d,e,f,g,h,i){return this.gK().$6$joints$shine$sides(d,e,f,g,h,i)},
$7$r1$shine$sides(d,e,f,g,h,i,j){return this.gK().$7$r1$shine$sides(d,e,f,g,h,i,j)},
$8$caps$inner$shine$sides(d,e,f,g,h,i,j,k){return this.gK().$8$caps$inner$shine$sides(d,e,f,g,h,i,j,k)},
$5$sides(d,e,f,g,h){return this.gK().$5$sides(d,e,f,g,h)},
$7$caps$shine$sides(d,e,f,g,h,i,j){return this.gK().$7$caps$shine$sides(d,e,f,g,h,i,j)},
$6$shine(d,e,f,g,h,i){return this.gK().$6$shine(d,e,f,g,h,i)},
$7$endCaps$joints$shine$sides(d,e,f,g,h,i,j){return this.gK().$7$endCaps$joints$shine$sides(d,e,f,g,h,i,j)},
$6$taped(d,e,f,g,h,i){return this.gK().$6$taped(d,e,f,g,h,i)},
$6$ends$shine$split(d,e,f,g,h,i){return this.gK().$6$ends$shine$split(d,e,f,g,h,i)},
$4$round(d,e,f,g){return this.gK().$4$round(d,e,f,g)},
$5$col$round(d,e,f,g,h){return this.gK().$5$col$round(d,e,f,g,h)},
$4$col(d,e,f,g){return this.gK().$4$col(d,e,f,g)},
$5$shine$yaw(d,e,f,g,h){return this.gK().$5$shine$yaw(d,e,f,g,h)},
$4$color(d,e,f,g){return this.gK().$4$color(d,e,f,g)},
$6$caps$sides(d,e,f,g,h,i){return this.gK().$6$caps$sides(d,e,f,g,h,i)},
$5$shine$sides(d,e,f,g,h){return this.gK().$5$shine$sides(d,e,f,g,h)},
$5$lat$lon(d,e,f,g,h){return this.gK().$5$lat$lon(d,e,f,g,h)},
$6$r1$sides(d,e,f,g,h,i){return this.gK().$6$r1$sides(d,e,f,g,h,i)},
$3$r(d,e,f){return this.gK().$3$r(d,e,f)},
$2$flip(d,e){return this.gK().$2$flip(d,e)},
$4$left$top(d,e,f,g){return this.gK().$4$left$top(d,e,f,g)},
$3$color$size(d,e,f){return this.gK().$3$color$size(d,e,f)},
$4$color$size$weight(d,e,f,g){return this.gK().$4$color$size$weight(d,e,f,g)},
$4$bottom$left(d,e,f,g){return this.gK().$4$bottom$left(d,e,f,g)},
$4$right$top(d,e,f,g){return this.gK().$4$right$top(d,e,f,g)},
$4$letterSpacing$size$weight(d,e,f,g){return this.gK().$4$letterSpacing$size$weight(d,e,f,g)},
$4$color$letterSpacing$size(d,e,f,g){return this.gK().$4$color$letterSpacing$size(d,e,f,g)},
$4$bottom$right(d,e,f,g){return this.gK().$4$bottom$right(d,e,f,g)},
$5$left$right$top(d,e,f,g,h){return this.gK().$5$left$right$top(d,e,f,g,h)},
$5$bottom$left$right(d,e,f,g,h){return this.gK().$5$bottom$left$right(d,e,f,g,h)},
$5$color$letterSpacing$size$weight(d,e,f,g,h){return this.gK().$5$color$letterSpacing$size$weight(d,e,f,g,h)},
$4$color$maxLines$size(d,e,f,g){return this.gK().$4$color$maxLines$size(d,e,f,g)},
$5$color$maxLines$size$weight(d,e,f,g,h){return this.gK().$5$color$maxLines$size$weight(d,e,f,g,h)},
$3$fill(d,e,f){return this.gK().$3$fill(d,e,f)},
$3$color$defaultColor$disabledColor(d,e,f){return this.gK().$3$color$defaultColor$disabledColor(d,e,f)},
$3$backgroundColor$color$defaultColor(d,e,f){return this.gK().$3$backgroundColor$color$defaultColor(d,e,f)},
$3$color$defaultColor$selectedColor(d,e,f){return this.gK().$3$color$defaultColor$selectedColor(d,e,f)},
$2$color$size(d,e){return this.gK().$2$color$size(d,e)},
$3$color$fontStyle$fontWeight(d,e,f){return this.gK().$3$color$fontStyle$fontWeight(d,e,f)},
$4$alignment$downsample$fit(d,e,f,g){return this.gK().$4$alignment$downsample$fit(d,e,f,g)},
$8$minPageHeight(d,e,f,g,h,i,j,k){return this.gK().$8$minPageHeight(d,e,f,g,h,i,j,k)},
$9$headerH$panel(d,e,f,g,h,i,j,k,l){return this.gK().$9$headerH$panel(d,e,f,g,h,i,j,k,l)},
$9$headerH$softPanel(d,e,f,g,h,i,j,k,l){return this.gK().$9$headerH$softPanel(d,e,f,g,h,i,j,k,l)},
$9$minPageHeight$nameOverride$topGap(d,e,f,g,h,i,j,k,l){return this.gK().$9$minPageHeight$nameOverride$topGap(d,e,f,g,h,i,j,k,l)},
$7$minPageHeight(d,e,f,g,h,i,j){return this.gK().$7$minPageHeight(d,e,f,g,h,i,j)},
$8$minPageHeight$topGap(d,e,f,g,h,i,j,k){return this.gK().$8$minPageHeight$topGap(d,e,f,g,h,i,j,k)},
$4$fit$height$width(d,e,f,g){return this.gK().$4$fit$height$width(d,e,f,g)},
$8$minPageHeight$nameOverride(d,e,f,g,h,i,j,k){return this.gK().$8$minPageHeight$nameOverride(d,e,f,g,h,i,j,k)},
$5$bg$fg(d,e,f,g,h){return this.gK().$5$bg$fg(d,e,f,g,h)},
$3$radius(d,e,f){return this.gK().$3$radius(d,e,f)},
$2$letterSpacing$shadows(d,e){return this.gK().$2$letterSpacing$shadows(d,e)},
$5$background(d,e,f,g,h){return this.gK().$5$background(d,e,f,g,h)},
$1$shadows(d){return this.gK().$1$shadows(d)},
$4$radius(d,e,f,g){return this.gK().$4$radius(d,e,f,g)},
$5$header(d,e,f,g,h){return this.gK().$5$header(d,e,f,g,h)},
$3$gap(d,e,f){return this.gK().$3$gap(d,e,f)},
$9$minPageHeight$nameOverride$wrapLink(d,e,f,g,h,i,j,k,l){return this.gK().$9$minPageHeight$nameOverride$wrapLink(d,e,f,g,h,i,j,k,l)},
$9$minPageHeight$topGap$wrapLink(d,e,f,g,h,i,j,k,l){return this.gK().$9$minPageHeight$topGap$wrapLink(d,e,f,g,h,i,j,k,l)},
$8$minPageHeight$wrapLink(d,e,f,g,h,i,j,k){return this.gK().$8$minPageHeight$wrapLink(d,e,f,g,h,i,j,k)},
$3$alignment$fit(d,e,f){return this.gK().$3$alignment$fit(d,e,f)},
$2$front(d,e){return this.gK().$2$front(d,e)},
$9$avatarSize$belowAvatar$curveH$curvePainter$headerH$minPageHeight$pad$ring$tpl(d,e,f,g,h,i,j,k,l){return this.gK().$9$avatarSize$belowAvatar$curveH$curvePainter$headerH$minPageHeight$pad$ring$tpl(d,e,f,g,h,i,j,k,l)},
$6$minPageHeight(d,e,f,g,h,i){return this.gK().$6$minPageHeight(d,e,f,g,h,i)},
$4$spacing$weight(d,e,f,g){return this.gK().$4$spacing$weight(d,e,f,g)},
$5$color$spacing$weight(d,e,f,g,h){return this.gK().$5$color$spacing$weight(d,e,f,g,h)},
$5$height$spacing$weight(d,e,f,g,h){return this.gK().$5$height$spacing$weight(d,e,f,g,h)},
$5$align$lines$max$min(d,e,f,g,h){return this.gK().$5$align$lines$max$min(d,e,f,g,h)},
$4$align$lines$max(d,e,f,g){return this.gK().$4$align$lines$max(d,e,f,g)},
$1$thick(d){return this.gK().$1$thick(d)},
$5$color$lines$max$min(d,e,f,g,h){return this.gK().$5$color$lines$max$min(d,e,f,g,h)},
$3$color$max(d,e,f){return this.gK().$3$color$max(d,e,f)},
$5$color$height$weight(d,e,f,g,h){return this.gK().$5$color$height$weight(d,e,f,g,h)},
$2$startSize(d,e){return this.gK().$2$startSize(d,e)},
$2$align(d,e){return this.gK().$2$align(d,e)},
$1$lines(d){return this.gK().$1$lines(d)},
$3$lines$max(d,e,f){return this.gK().$3$lines$max(d,e,f)},
$2$max(d,e){return this.gK().$2$max(d,e)},
$5$height$style$weight(d,e,f,g,h){return this.gK().$5$height$style$weight(d,e,f,g,h)},
$3$align$max(d,e,f){return this.gK().$3$align$max(d,e,f)},
$3$sidebar$startSize(d,e,f){return this.gK().$3$sidebar$startSize(d,e,f)},
$6$color$height$style$weight(d,e,f,g,h,i){return this.gK().$6$color$height$style$weight(d,e,f,g,h,i)},
$2$lines(d,e){return this.gK().$2$lines(d,e)},
$4$height$weight(d,e,f,g){return this.gK().$4$height$weight(d,e,f,g)},
$3$gap$startSize(d,e,f){return this.gK().$3$gap$startSize(d,e,f)},
$3$height(d,e,f){return this.gK().$3$height(d,e,f)},
$5$color$height$style(d,e,f,g,h){return this.gK().$5$color$height$style(d,e,f,g,h)},
$4$height$style(d,e,f,g){return this.gK().$4$height$style(d,e,f,g)},
$4$color$height(d,e,f,g){return this.gK().$4$color$height(d,e,f,g)},
$8$height(d,e,f,g,h,i,j,k){return this.gK().$8$height(d,e,f,g,h,i,j,k)},
$6$color$height$spacing$weight(d,e,f,g,h,i){return this.gK().$6$color$height$spacing$weight(d,e,f,g,h,i)},
$2$double_$thick(d,e){return this.gK().$2$double_$thick(d,e)},
$2$color$thick(d,e){return this.gK().$2$color$thick(d,e)},
$4$child$label$onTap$selected(d,e,f,g){return this.gK().$4$child$label$onTap$selected(d,e,f,g)},
$2$color$fontStyle(d,e){return this.gK().$2$color$fontStyle(d,e)},
$4$stroke(d,e,f,g){return this.gK().$4$stroke(d,e,f,g)},
$4$clipSingleLine(d,e,f,g){return this.gK().$4$clipSingleLine(d,e,f,g)},
$2$padding$size(d,e){return this.gK().$2$padding$size(d,e)},
$1$female(d){return this.gK().$1$female(d)},
$1$w(d){return this.gK().$1$w(d)},
$1$h(d){return this.gK().$1$h(d)},
$1$visualDensity(d){return this.gK().$1$visualDensity(d)},
$3$overscroll$physics$scrollbars(d,e,f){return this.gK().$3$overscroll$physics$scrollbars(d,e,f)},
$3$bold(d,e,f){return this.gK().$3$bold(d,e,f)},
$1$borderRadius(d){return this.gK().$1$borderRadius(d)},
$2$color$height(d,e){return this.gK().$2$color$height(d,e)},
$2$fillColor$hintText(d,e){return this.gK().$2$fillColor$hintText(d,e)},
$2$force(d,e){return this.gK().$2$force(d,e)},
$2$sendGen$text(d,e){return this.gK().$2$sendGen$text(d,e)},
$4$framed$options$sendGen$text(d,e,f,g){return this.gK().$4$framed$options$sendGen$text(d,e,f,g)},
$4$options$parseExtrasForUserText$sendGen$text(d,e,f,g){return this.gK().$4$options$parseExtrasForUserText$sendGen$text(d,e,f,g)},
$4$applicantDetails$recentUserMessages$startUrl$task(d,e,f,g){return this.gK().$4$applicantDetails$recentUserMessages$startUrl$task(d,e,f,g)},
$3$parseExtrasForUserText$sendGen$text(d,e,f){return this.gK().$3$parseExtrasForUserText$sendGen$text(d,e,f)},
$3$creds$prompt$userText(d,e,f){return this.gK().$3$creds$prompt$userText(d,e,f)},
$3$imageB64$sendGen$text(d,e,f){return this.gK().$3$imageB64$sendGen$text(d,e,f)},
$3$options$sendGen$text(d,e,f){return this.gK().$3$options$sendGen$text(d,e,f)},
$3$adultMode$seed(d,e,f){return this.gK().$3$adultMode$seed(d,e,f)},
$1$baseUrl(d){return this.gK().$1$baseUrl(d)},
$3$adultGeneration$sceneText$varietySeed(d,e,f){return this.gK().$3$adultGeneration$sceneText$varietySeed(d,e,f)},
$6$checked$context$onCheckboxChanged$onRowTap$overlayColor$tristate(d,e,f,g,h,i){return this.gK().$6$checked$context$onCheckboxChanged$onRowTap$overlayColor$tristate(d,e,f,g,h,i)},
$7$icon$iconBg$iconColor$onTap$subtitle$title(d,e,f,g,h,i,j){return this.gK().$7$icon$iconBg$iconColor$onTap$subtitle$title(d,e,f,g,h,i,j)},
$1$foregroundColor(d){return this.gK().$1$foregroundColor(d)},
$2$reverse(d,e){return this.gK().$2$reverse(d,e)},
$2$left$right(d,e){return this.gK().$2$left$right(d,e)},
$4$displayFeatures$padding$viewInsets$viewPadding(d,e,f,g){return this.gK().$4$displayFeatures$padding$viewInsets$viewPadding(d,e,f,g)},
$1$iconColor(d){return this.gK().$1$iconColor(d)},
$1$selectable(d){return this.gK().$1$selectable(d)},
$2$value(d,e){return this.gK().$2$value(d,e)},
$1$details(d){return this.gK().$1$details(d)},
$11$borderRadius$color$containedInkWell$controller$customBorder$onRemoved$position$radius$rectCallback$referenceBox$textDirection(d,e,f,g,h,i,j,k,l,m,n){return this.gK().$11$borderRadius$color$containedInkWell$controller$customBorder$onRemoved$position$radius$rectCallback$referenceBox$textDirection(d,e,f,g,h,i,j,k,l,m,n)},
$10$borderRadius$color$controller$customBorder$onRemoved$position$radius$rectCallback$referenceBox$textDirection(d,e,f,g,h,i,j,k,l,m){return this.gK().$10$borderRadius$color$controller$customBorder$onRemoved$position$radius$rectCallback$referenceBox$textDirection(d,e,f,g,h,i,j,k,l,m)},
$1$context(d){return this.gK().$1$context(d)},
$1$textTheme(d){return this.gK().$1$textTheme(d)},
$1$hintText(d){return this.gK().$1$hintText(d)},
$2$fragment$queryParameters(d,e){return this.gK().$2$fragment$queryParameters(d,e)},
$1$pkceAsyncStorage(d){return this.gK().$1$pkceAsyncStorage(d)},
$1$localStorage(d){return this.gK().$1$localStorage(d)},
$2$onDone(d,e){return this.gK().$2$onDone(d,e)},
$2$isRunning$torchState(d,e){return this.gK().$2$isRunning$torchState(d,e)},
$1$onlyDirtyChildren(d){return this.gK().$1$onlyDirtyChildren(d)},
$1$usedSemanticsIds(d){return this.gK().$1$usedSemanticsIds(d)},
$2$descendant$rect(d,e){return this.gK().$2$descendant$rect(d,e)},
$1$isHidden(d){return this.gK().$1$isHidden(d)},
$1$config(d){return this.gK().$1$config(d)},
$1$isRequired(d){return this.gK().$1$isRequired(d)},
$1$isKeyboardKey(d){return this.gK().$1$isKeyboardKey(d)},
$1$isLink(d){return this.gK().$1$isLink(d)},
$1$3$onlyFirst(d,e,f,g){return this.gK().$1$3$onlyFirst(d,e,f,g)},
$1$oldLayer(d){return this.gK().$1$oldLayer(d)},
$6$oldLayer(d,e,f,g,h,i){return this.gK().$6$oldLayer(d,e,f,g,h,i)},
$4$textDirection(d,e,f,g){return this.gK().$4$textDirection(d,e,f,g)},
$1$maximum(d){return this.gK().$1$maximum(d)},
$1$strokeAlign(d){return this.gK().$1$strokeAlign(d)},
$6$blend$blendMode(d,e,f,g,h,i){return this.gK().$6$blend$blendMode(d,e,f,g,h,i)},
$5$borderRadius$shape$textDirection(d,e,f,g,h){return this.gK().$5$borderRadius$shape$textDirection(d,e,f,g,h)},
$4$isDiscrete$offset$parentBox$sliderTheme(d,e,f,g){return this.gK().$4$isDiscrete$offset$parentBox$sliderTheme(d,e,f,g)},
$1$trackGap(d){return this.gK().$1$trackGap(d)},
$10$enableAnimation$isDiscrete$isEnabled$parentBox$secondaryOffset$sliderTheme$textDirection$thumbCenter(d,e,f,g,h,i,j,k,l,m){return this.gK().$10$enableAnimation$isDiscrete$isEnabled$parentBox$secondaryOffset$sliderTheme$textDirection$thumbCenter(d,e,f,g,h,i,j,k,l,m)},
$12$activationAnimation$enableAnimation$isDiscrete$labelPainter$parentBox$sizeWithOverflow$sliderTheme$textDirection$textScaleFactor$value(d,e,f,g,h,i,j,k,l,m,n,o){return this.gK().$12$activationAnimation$enableAnimation$isDiscrete$labelPainter$parentBox$sizeWithOverflow$sliderTheme$textDirection$textScaleFactor$value(d,e,f,g,h,i,j,k,l,m,n,o)},
$1$thumbSize(d){return this.gK().$1$thumbSize(d)},
$5$alpha$glow$step(d,e,f,g,h){return this.gK().$5$alpha$glow$step(d,e,f,g,h)},
$3$a$b(d,e,f){return this.gK().$3$a$b(d,e,f)},
$2$vertical(d,e){return this.gK().$2$vertical(d,e)},
$6$back(d,e,f,g,h,i){return this.gK().$6$back(d,e,f,g,h,i)},
$4$bottomLeft$topRight(d,e,f,g){return this.gK().$4$bottomLeft$topRight(d,e,f,g)},
$2$selected(d,e){return this.gK().$2$selected(d,e)},
$3$color$endFraction$startFraction(d,e,f){return this.gK().$3$color$endFraction$startFraction(d,e,f)},
$6$gapExtent$gapPercentage$gapStart$textDirection(d,e,f,g,h,i){return this.gK().$6$gapExtent$gapPercentage$gapStart$textDirection(d,e,f,g,h,i)},
$2$parentUsesSize(d,e){return this.gK().$2$parentUsesSize(d,e)},
$1$maxHeight(d){return this.gK().$1$maxHeight(d)},
$4$isScrolling$newPosition$oldPosition$velocity(d,e,f,g){return this.gK().$4$isScrolling$newPosition$oldPosition$velocity(d,e,f,g)},
$2$maxExtent$minExtent(d,e){return this.gK().$2$maxExtent$minExtent(d,e)},
$1$maxExtent(d){return this.gK().$1$maxExtent(d)},
$2$bottomNavigationBarTop$floatingActionButtonArea(d,e){return this.gK().$2$bottomNavigationBarTop$floatingActionButtonArea(d,e)},
$2$from$to(d,e){return this.gK().$2$from$to(d,e)},
$2$scheduleNewFrame(d,e){return this.gK().$2$scheduleNewFrame(d,e)},
$2$accept$capture(d,e){return this.gK().$2$accept$capture(d,e)},
$2$accept$multiple(d,e){return this.gK().$2$accept$multiple(d,e)},
$2$female$size(d,e){return this.gK().$2$female$size(d,e)},
$2$h$w(d,e){return this.gK().$2$h$w(d,e)},
$5$max$min(d,e,f,g,h){return this.gK().$5$max$min(d,e,f,g,h)},
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return this.gK().$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r)},
$2$f$r(d,e){return this.gK().$2$f$r(d,e)},
$1$radius(d){return this.gK().$1$radius(d)},
$4$gender$phone(d,e,f,g){return this.gK().$4$gender$phone(d,e,f,g)},
$3$hint$prefix(d,e,f){return this.gK().$3$hint$prefix(d,e,f)},
$3$helperText$prefixText(d,e,f){return this.gK().$3$helperText$prefixText(d,e,f)},
$1$verifyUrls(d){return this.gK().$1$verifyUrls(d)},
$2$wrapWidth(d,e){return this.gK().$2$wrapWidth(d,e)}}
var z=a.updateTypes(["~()","R(n8)","~(G)","R(pF)","N(N)","R(Ww)","ak<tc>(P)","R(Ll)","R(a3L)","n(n,mc)","R(mc)","R(zH)","R(yo)","R(Ek)","R(N)","n(n8)","R(ps)","N(G)","ay<~>()","R(a3i)","UV(Y)","US(Y)","~(N,N,N,N)","a5E(Y)","G(J4,J4)","R(u7)","~(N,N,G{alongX:R})","~(ak<N>,w)","~(ak<N>)","~(ak<N>{col:w})","~(G,N,w{h:P,w:P})","n(zH)","~(G,ak<N>,w,P,n)","n(Ll)","R(VS)","N(G,G)","ps(P)","~(G,ak<N>)","~(n,ak<N>{r:P})","~(n,N,N)","~(n8,N,n)","~(n,N,N,G)","N(n)","~(G,n,N,N,N,R)","R(G)","u7()","~(G,N,N,n,w)","G(pF)","~(G,N,N{col:w,round:R})","db()","ak<N>(ak<N>)","P(ps)"])
A.bUt.prototype={
$1(d){var w=this.a
w=w===0?d:A.bBf(d,w)
return w.ae(0,this.b)},
$S:z+4}
A.bUu.prototype={
$1(d){var w=this.a
return w===0?d:A.bBf(d,w)},
$S:z+4}
A.bUs.prototype={
$4(b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
for(w=b4.b,v=b7.a,u=b7.b,t=b7.c,s=b6.a,r=b6.b,q=b6.c,p=b8.a,o=b8.b,n=b8.c,m=1/w,l=v*m,k=u*m,j=t*m,i=p*m,h=o*m,m=n*m,g=b4.a,f=g.a,e=b4.c,d=x.o,a0=b4.d,a1=b4.e,a2=b4.f,a3=0;a3<w;++a3)for(a4=a3/w,a5=s+v*a4,a6=r+u*a4,a4=q+t*a4,a7=0;a7<w;++a7){a8=a7/w
a9=a5+p*a8
b0=a6+o*a8
a8=a4+n*a8
b1=a9+l
b2=b0+k
b3=a8+j
f.push(new A.tc(C.a([e.$1(new A.N(a9,b0,a8)),e.$1(new A.N(b1,b2,b3)),e.$1(new A.N(b1+i,b2+h,b3+m)),e.$1(new A.N(a9+i,b0+h,a8+m))],d),a0.$1(b5),a1,g.b,a2,g.d,!1,g.c,g.e))}},
$S:z+22}
A.bUv.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aK(0,Math.cos(w)).ae(0,this.c.aK(0,Math.sin(w)))},
$S:z+17}
A.bUr.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new A.N(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+35}
A.bUw.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aK(0,Math.cos(w)).ae(0,this.c.aK(0,Math.sin(w)))},
$S:z+17}
A.fHF.prototype={
$1(d){var w=d.b,v=this.a,u=d.c,t=this.b
return new A.N(d.a,w*v-u*t,w*t+u*v)},
$S:z+4}
A.fHD.prototype={
$1(d){var w=this.a
return w===0?d:A.bBf(d,w)},
$S:z+4}
A.fHE.prototype={
$1(d){var w=this,v=w.b===0?d:w.c.$1(d)
return J.fIz(w.a.$1(v),w.d)},
$S:z+4}
A.fHC.prototype={
$1(d){var w=this.b===0?d:this.c.$1(d)
return this.a.$1(w)},
$S:z+4}
A.fHw.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:1783}
A.ckU.prototype={
$1(d){var w=this,v=d.a,u=w.a,t=d.c,s=w.b,r=-v*s+t*u,q=d.b,p=w.c,o=w.d
return new A.N(v*u+t*s,q*p-r*o,-(q*o+r*p))},
$S:z+4}
A.ckV.prototype={
$1(d){var w=this.a.c,v=this.b.$1(d.aC(0,w.d))
return new A.N(v.a,v.b,v.c+w.c)},
$S:z+4}
A.ckR.prototype={
$1(d){return d.c<1},
$S:z+14}
A.ckS.prototype={
$1(d){return A.hH0(d,this.b,this.c,this.a.gaGj(0))},
$S:1784}
A.ckT.prototype={
$2(d,e){return D.k.aL(e.d,d.d)},
$S:z+24}
A.ePD.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.aGh(D.k.D((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:8}
A.ePC.prototype={
$1(d){if(x.C.b(d))this.a.a.d.amZ(1+d.grN().b*0.0012)},
$S:241}
A.ePz.prototype={
$1(d){var w=this.a
return w.w=w.a.d.c},
$S:260}
A.ePA.prototype={
$1(d){var w,v,u,t=this.a,s=t.a
if(d.w>=2){s=s.d
s.amZ(t.w/d.d/s.c)}else{t=s.d
s=d.a
t.as=t.Q=null
w=t.a+=-s.a*0.009
if(!t.x){v=t.r
u=t.w
t.a=D.k.D(w,v-u,v+u)}t.b=D.k.D(t.b+s.b*0.009,-1.25,1.35)
t.aZ()}},
$S:231}
A.ePB.prototype={
$1(d){var w=this.a
w=w.a.f.$1(w.e.cNN(d.b))
return w},
$S:49}
A.flD.prototype={
$2(d,e){var w
A:{if("black"===d){w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break A}if("white"===d){w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break A}w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break A}return w},
$S:z+9}
A.flE.prototype={
$2(d,e){return d==="ground"?y.j:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+9}
A.flF.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else A:{if("black"===d){w="The black (hot) wire goes on the BRASS LINE screw."
break A}if("white"===d){w="The white (neutral) wire goes on the SILVER LINE screw."
break A}w=y.j
break A}return w},
$S:z+9}
A.flG.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fixture GREEN ground wire only."
break A}return w},
$S:z+9}
A.flH.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fan GREEN ground wire only."
break A}return w},
$S:z+9}
A.fkz.prototype={
$1(d){return d.a===this.a},
$S:z+19}
A.fHU.prototype={
$1(d){return d.a},
$S:z+31}
A.fkF.prototype={
$1(d){return D.d.iw(this.a.f,new A.fkG(d)).f},
$S:75}
A.fkG.prototype={
$1(d){return d.a===this.a},
$S:z+10}
A.fkD.prototype={
$1(d){return D.d.iw(this.a.e,new A.fkE(d)).e},
$S:13}
A.fkE.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.fkB.prototype={
$1(d){return d.e==="hot"},
$S:z+11}
A.fkC.prototype={
$1(d){return d.e==="neutral"},
$S:z+11}
A.fiI.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.b=d
w=j.b
v=w.b
u=C.a3(v).k("cJ<1,2>")
t=u.k("a2<H.E>")
s=C.B(new C.a2(new C.cJ(v,u),new A.fiJ(g),t),t.k("H.E"))
r=g==="ground"
q=r?B.wR:h
p=r?0.6:0.3
if(w.c>0){o=e.ae(0,B.fyA)
i.jL(A.agl(C.a([e,e.ae(0,B.fxi),o],x.o),4),0.085,q,!1,p,8)
return}if(s.length!==0){n=A.bzm(j.c,D.d.gL(s).a,w)
w=A.zB(e,n,0.5)
v=n.a>0
m=w.ae(0,new A.N(v?0.5:-0.5,0.2,0.9))
w=e.ae(0,B.fAE)
if(j.d)v=0
else v=v?0.06:-0.06
l=A.agl(C.a([e,w,m,n.ae(0,new A.N(v,0,0.08)),n],x.o),5)
k=D.d.dn(l,0,D.k.bw(l.length*0.8))
i.jL(k,0.085,q,!1,p,8)
if(!r)i.jL(D.d.fG(l,k.length-1),0.061200000000000004,B.wR,!1,0.6,8)}else{l=A.agl(C.a([e,e.ae(0,B.fvo),A.zB(e,f,0.6),f],x.o),5)
k=r?l:D.d.dn(l,0,D.k.bw(l.length*0.86))
i.jL(k,0.085,q,!1,p,8)
if(!r)i.jL(D.d.fG(l,k.length-1),0.061200000000000004,B.wR,!1,0.6,8)}},
$S:z+46}
A.fiJ.prototype={
$1(d){return d.b===this.a},
$S:1785}
A.f5b.prototype={
$2(d,e){var w,v=this.a
v.b=d
w=A.G3(e,0.9,6)
if(this.b)v.jL(w,0.2,B.VT,!1,0.35,10)
this.c.push(D.d.gam(w))},
$S:z+37}
A.f6w.prototype={
$6$taped(d,e,f,g,h,i){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t.bX(new A.N(v,u,w),B.fBy,h,0.7)
t.e9(new A.N(v,u,w),new A.N(v+e*0.22,u,w),0.17,g,0.9,12)
t.cU(new A.N(v+e*0.23,u,w),B.fzZ,B.DM)
if(i)t.bX(new A.N(v+e*0.05,u,w),B.fzR,D.cq,0.2)},
$5(d,e,f,g,h){return this.$6$taped(d,e,f,g,h,!1)},
$S:1786}
A.fix.prototype={
$1(d){return d.a===this.a},
$S:z+25}
A.fiy.prototype={
$0(){return B.ahS},
$S:z+45}
A.bOE.prototype={
$1(d){return new A.ps("back",d,5)},
$S:z+36}
A.bOI.prototype={
$1(d){return d.guC()},
$S:z+8}
A.bOH.prototype={
$1(d){var w=d.c
return(w==="bathroom"||w==="kitchen")&&d.gBD()},
$S:z+8}
A.bOG.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+8}
A.bOF.prototype={
$1(d){return d.guC()&&d.gBD()},
$S:z+8}
A.e_D.prototype={
$1(d){return!(d.guC()&&d.gBD())},
$S:z+8}
A.e_B.prototype={
$1(d){var w,v=this.a.a.d
A:{if("wiring"===v){w=!d.guC()
break A}if("plumbing"===v){w=!d.gBD()
break A}w=!(d.guC()&&d.gBD())
break A}return w},
$S:z+8}
A.e_C.prototype={
$1(d){var w,v=this.a,u=v.a.d
A:{if("wiring"===u){w="This room needs wiring: press the Wiring button, or tap the outlet or the light."
break A}if("plumbing"===u){w="This room needs plumbing: press the Plumbing button, or tap the toilet or the sink."
break A}w="Walk through the house and fix what the signs say is wrong."
break A}return v.td(w)},
$S:8}
A.e_h.prototype={
$0(){var w=this.a
w.Q=this.b
w.as=this.c},
$S:0}
A.e_i.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.e_g(w))},
$S:0}
A.e_g.prototype={
$0(){return this.a.Q=null},
$S:0}
A.e_j.prototype={
$0(){var w=this.a
w.r=this.b
w.x=0
w.y=-1
w.z=0
w.mB()},
$S:0}
A.dZV.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.d=this.b
w.x=0
w.y=-1
w.z=0
w.Q=null
w.mB()},
$S:0}
A.e__.prototype={
$0(){var w=this.a,v=this.b
w.x=v-100
w.z=v
w.mB()},
$S:0}
A.e_0.prototype={
$0(){var w=this.a,v=this.b
w.y=v-300
w.z=v},
$S:0}
A.e_1.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
v=this.b
if(!w[t.d].at.W(0,v)){t=u.d
w=t.c
w===$&&C.c()
w[t.d].at.J(0,v)}u.mB()},
$S:0}
A.e_2.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.c
w===$&&C.c()
w[u.d].at.J(0,this.b)
v.mB()},
$S:0}
A.e_3.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new A.dZZ(w,this.b))
w.ace(this.c)},
$S:11}
A.dZZ.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.c
w===$&&C.c()
return w[v.d].at.W(0,this.b)},
$S:0}
A.e_4.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.c
w===$&&C.c()
u=w[u.d]
u.cy=!u.cy
v.mB()},
$S:0}
A.e_9.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=C.a([],m)
for(w=this.a,v=this.b,u=0;u<8;++u){t=B.asE[u]
s=D.c.j(0.08)
r=new C.aV(12,12)
q=w.d
q===$&&C.c()
p=q.c
p===$&&C.c()
o=new C.aA(p[q.d].cx.h(0,v)===t.a?D.aJ:D.b5,1,D.r,-1)
l.push(C.aE(n,C.p(n,new C.x(t.c+" "+t.b,n,D.ST,n,n,n,n,n,n,n,n,n),D.f,n,n,new C.o(s,n,new C.bP(o,o,o,o),new C.bs(r,r,r,r),n,n,D.n),n,n,n,n,D.eh,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e_7(w,d,v,t),n,n,n,n,n,n,!1,D.a9))}s=w.d
s===$&&C.c()
r=s.c
r===$&&C.c()
if(r[s.d].cx.h(0,v)!=null)l.push(C.aE(n,C.p(n,B.fiS,D.f,n,n,new C.o(D.eD,n,n,C.m(12),n,n,D.n),n,n,n,n,D.eh,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e_8(w,d,v),n,n,n,n,n,n,!1,D.a9))
return C.bo(!0,new C.C(D.bY,C.v(C.a([B.ffe,D.S,C.c3(D.bE,l,D.bw,8,8)],m),D.F,n,D.e,D.Q,0,D.p),n),!0,!1,D.ag,!0,!0)},
$S:31}
A.e_7.prototype={
$0(){var w,v,u,t=this
C.a5(t.b,!1).N(null)
w=t.a
v=t.d
w.m(new A.e_6(w,t.c,v))
u=v.b
w.td(v.d>0?u+" is on and playing NGMY ads. Tap it to watch full screen.":u+" is plugged in and running.")
A.mU(820,70,0.25,"tri")},
$S:0}
A.e_6.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.c
w===$&&C.c()
w[u.d].cx.n(0,this.b,this.c.a)
v.mB()},
$S:0}
A.e_8.prototype={
$0(){C.a5(this.b,!1).N(null)
var w=this.a
w.m(new A.e_5(w,this.c))
w.td("Unplugged.")},
$S:0}
A.e_5.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.c
w===$&&C.c()
w[u.d].cx.W(0,this.b)
v.mB()},
$S:0}
A.dZY.prototype={
$1(d){return A.fMc(!1,this.a.ch,!1)},
$S:z+20}
A.dZX.prototype={
$1(d){return new A.US(this.a.CW,null)},
$S:z+21}
A.dZW.prototype={
$0(){var w,v,u,t=this,s=t.b
s.c=s.c+t.c
s.d=s.d+t.d
w=t.a
v=w.d
v===$&&C.c()
u=v.c
u===$&&C.c()
u[v.d].aBi(0,s)
w.mB()},
$S:0}
A.e_k.prototype={
$0(){var w,v,u,t=this.b
t.e=(t.e+1)%4
w=this.a
v=w.d
v===$&&C.c()
u=v.c
u===$&&C.c()
u[v.d].aBi(0,t)
w.mB()},
$S:0}
A.e_e.prototype={
$0(){var w=this.b
w.f=(w.f+1)%6
this.a.mB()},
$S:0}
A.e_f.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.c
w===$&&C.c()
D.d.W(w[u.d].x,this.b)
v.z=v.x=0
v.mB()},
$S:0}
A.dZG.prototype={
$0(){var w=this.a,v=this.b.a
w.x=v
w.z=100+v
w.mB()},
$S:0}
A.dZL.prototype={
$0(){return this.a.acf(-6,0)},
$S:0}
A.dZM.prototype={
$0(){return this.a.acf(6,0)},
$S:0}
A.dZN.prototype={
$0(){return this.a.acf(0,-6)},
$S:0}
A.dZO.prototype={
$0(){return this.a.acf(0,6)},
$S:0}
A.dZP.prototype={
$0(){return this.a.bwc(this.b.a)},
$S:0}
A.dZQ.prototype={
$0(){var w=this.a
return w.m(new A.dZK(w))},
$S:0}
A.dZK.prototype={
$0(){return this.a.y=-1},
$S:0}
A.dZR.prototype={
$0(){var w=this.a
w.m(new A.dZJ(w,this.b))},
$S:0}
A.dZJ.prototype={
$0(){var w,v=this.a,u=v.y,t=this.b,s=v.d
if(u<0){s===$&&C.c()
u=s.c
u===$&&C.c()
D.d.ha(u[s.d].z,0,3,t)}else{s===$&&C.c()
w=s.c
w===$&&C.c()
w[s.d].z[u]=t}v.mB()},
$S:0}
A.dZS.prototype={
$0(){var w=this.a
w.m(new A.dZI(w,this.b))},
$S:0}
A.dZI.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.c
w===$&&C.c()
w[u.d].Q=this.b
v.mB()},
$S:0}
A.dZT.prototype={
$0(){var w=this.a
w.m(new A.dZH(w,this.b))},
$S:0}
A.dZH.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.c
w===$&&C.c()
w[u.d].as=this.b
v.mB()},
$S:0}
A.dZU.prototype={
$0(){return this.a.ace(this.b.c)},
$S:0}
A.e_s.prototype={
$0(){return this.a.cgi(this.b)},
$S:0}
A.e_q.prototype={
$0(){return this.a.aWi()},
$S:0}
A.e_p.prototype={
$1(d){return d<=5},
$S:33}
A.e_o.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.c
w===$&&C.c()
return A.hRy(w[u.d],v.ax.gB6()/1000)},
$S:z+6}
A.e_t.prototype={
$0(){return this.a.Qy("look")},
$S:0}
A.e_u.prototype={
$0(){return this.a.Qy("furniture")},
$S:0}
A.e_v.prototype={
$0(){return this.a.Qy("walls")},
$S:0}
A.e_w.prototype={
$0(){return this.a.Qy("floor")},
$S:0}
A.e_x.prototype={
$0(){return this.a.Qy("ceiling")},
$S:0}
A.e_y.prototype={
$0(){return this.a.Qy("doors")},
$S:0}
A.e_z.prototype={
$0(){var w=this.a
return w.m(new A.e_n(w))},
$S:0}
A.e_n.prototype={
$0(){var w=this.a,v=!w.w
w.w=v
if(v)w.td("Voltage tester in your hand: tap an outlet, a switch or the light.")},
$S:0}
A.e_A.prototype={
$0(){return C.a5(this.a,!1).ci(C.em(new A.e_m(),!1,null,x.H))},
$S:0}
A.e_m.prototype={
$1(d){return B.aCW},
$S:z+23}
A.e_r.prototype={
$0(){var w=this.a
return w.m(new A.e_l(w))},
$S:0}
A.e_l.prototype={
$0(){var w=this.a.d
w===$&&C.c()
return w.b=!w.b},
$S:0}
A.e_d.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aI(d,k,x.w).w,i=this.a,h=i.d
h===$&&C.c()
w=x.p
h=C.a([B.fbY,D.au,C.d("Wiring "+h.gcR6()+"/"+i.d.gKQ().length+" \xb7 Plumbing "+i.d.gcO0()+"/"+i.d.gcO_(),k,k,k,k,k,k,B.Im,k,k,k),D.S],w)
for(v=i.d.gKQ(),u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aV(12,12)
p=s.c
o=p!=="outside"
if(o){n=s.ch
n=n==null?k:n.gw_()
if(n==null)n=!s.ax}else n=!0
if(n)if(p==="bathroom"||p==="kitchen"){n=s.CW
if(n==null)n=k
else n=n.gvL()&&n.gEQ()&&n.r&&n.y&&n.x.a===0
if(n==null)n=!s.ay}else n=!0
else n=!1
m=new C.aA(n?D.bc.j(0.5):D.bF,1,D.r,-1)
if(o){n=s.ch
n=n==null?k:n.gw_()
if(n==null)n=!s.ax}else n=!0
if(n)if(p==="bathroom"||p==="kitchen"){n=s.CW
if(n==null)n=k
else n=n.gvL()&&n.gEQ()&&n.r&&n.y&&n.x.a===0
if(n==null)n=!s.ay}else n=!0
else n=!1
if(n)n="\u2705 finished"
else{if(o){n=s.ch
n=n==null?k:n.gw_()
if(n==null)n=!s.ax}else n=!0
n=n?"":"\u26a1 wiring  "
if(p==="bathroom"||p==="kitchen"){l=s.CW
if(l==null)l=k
else l=l.gvL()&&l.gEQ()&&l.r&&l.y&&l.x.a===0
if(l==null)l=!s.ay}else l=!0
n+=l?"":"\ud83d\udeb0 plumbing"}if(o){o=s.ch
o=o==null?k:o.gw_()
if(o==null)o=!s.ax}else o=!0
if(o)if(p==="bathroom"||p==="kitchen"){p=s.CW
if(p==null)p=k
else p=p.gvL()&&p.gEQ()&&p.r&&p.y&&p.x.a===0
if(p==null)p=!s.ay}else p=!0
else p=!1
p=p?D.es:D.ad
h.push(C.aE(k,C.p(k,new C.co(D.aQ,D.e,D.j,D.m,k,D.p,k,0,C.a([new C.bE(1,D.bi,new C.x(s.b,k,B.f1w,k,k,k,k,k,k,k,k,k),k),new C.x(n,k,new C.F(!0,p,k,k,k,k,12,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k)],w),k),D.f,k,k,new C.o(r,k,new C.bP(m,m,m,m),new C.bs(q,q,q,q),k,k,D.n),k,k,k,D.eO,D.bR,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.e_b(i,d,s),k,k,k,k,k,k,!1,D.a9))}h.push(D.P)
h.push(C.bJ(B.f5A,new A.e_c(i,d),k))
return C.bo(!0,new C.cU(new C.aY(0,1/0,0,j.a.b*0.75),C.cB(h,k,D.bY,k,k,D.ah,!0),k),!0,!1,D.ag,!0,!0)},
$S:31}
A.e_b.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.ace(this.c.a)},
$S:0}
A.e_c.prototype={
$0(){C.a5(this.b,!1).N(null)
$.aTx=A.fXY(D.o.F(Date.now(),1e5))
var w=this.a
w.m(new A.e_a(w))
w.auY(!0)},
$S:0}
A.e_a.prototype={
$0(){var w=this.a,v=$.aTx
v.toString
w.d=v
w.r="look"
w.x=0
w.y=-1
w.z=0
w.mB()},
$S:0}
A.dli.prototype={
$1(d){var w,v,u,t,s,r=d.b,q=D.k.an(r.a,14),p=D.k.an(r.b,14)
r=this.a
w=r.c.c
w===$&&C.c()
v=0
for(;v<12;++v){u=w[v]
t=u.d
s=!1
if(q>=t)if(q<t+u.f){t=u.e
t=p>=t&&p<t+u.r}else t=s
else t=s
if(t){r.d.$1(u.a)
return}}},
$S:22}
A.fiR.prototype={
$2(d,e){return this.a===d?e:0},
$S:1787}
A.fiL.prototype={
$1(d){return d.a==="right"},
$S:z+16}
A.fiM.prototype={
$1(d){return d.a==="back"},
$S:z+16}
A.fiN.prototype={
$1(d){return d.b},
$S:z+51}
A.fiO.prototype={
$2(d,e){return e},
$S:85}
A.fiP.prototype={
$3(d,e,f){return G.fz2(d,e,0,f+this.a)},
$S:702}
A.fiQ.prototype={
$2(d,e){var w=this.a
w.b=0
w.e9(new A.N(d,e,0),new A.N(d,e,2.2),0.7,B.JW,0.7,10)},
$S:1789}
A.fiW.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=A.zB(d,e,v/f)
w.aAZ(new A.N(u.a,4,u.c),B.fBK,B.VL,!1,0.05)}t=A.zB(d,e,0.5)
for(s=e.aC(0,d).gSX()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=B.cZu[p]
n=g?new A.N(s,0.16,0.3):new A.N(0.3,0.16,s)
w.bX(new A.N(r,o,q),n,B.VL,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+26}
A.fiT.prototype={
$2(d,e){return this.a.jL(A.G3(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+27}
A.fiS.prototype={
$1(d){return this.a.jL(A.G3(d,0.5,3),0.14,B.p8,!1,0.3,8)},
$S:z+28}
A.fiV.prototype={
$2$col(d,e){return this.a.jL(A.G3(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,B.VT)},
$S:z+29}
A.fiU.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.bX(e,new A.N(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$S:z+30}
A.fjQ.prototype={
$0(){return A.mU(1320,120,0.25,"tri")},
$S:0}
A.dIZ.prototype={
$1(d){return this.a},
$S:40}
A.dJ1.prototype={
$0(){return C.a5(this.a,!1).lY()},
$S:0}
A.dJ2.prototype={
$0(){var w=this.a
return w.m(new A.dJ0(w))},
$S:0}
A.dJ0.prototype={
$0(){return this.a.d=!1},
$S:0}
A.dJ3.prototype={
$0(){var w=this.a
return w.m(new A.dJ_(w))},
$S:0}
A.dJ_.prototype={
$0(){return this.a.d=!0},
$S:0}
A.dJ5.prototype={
$0(){var w=this.a
return w.zW(A.c7m("",w.d))},
$S:0}
A.dJ6.prototype={
$0(){var w=this.a
return w.zW(A.c7m("wiring",w.d))},
$S:0}
A.dJ7.prototype={
$0(){var w=this.a
return w.zW(A.c7m("plumbing",w.d))},
$S:0}
A.dJ8.prototype={
$0(){var w=this.a
return w.zW(A.c7m("fix",w.d))},
$S:0}
A.dJ9.prototype={
$0(){var w=this.a
return w.zW(A.fMc(w.d,null,!1))},
$S:0}
A.dJa.prototype={
$0(){var w=this.a
return w.zW(A.fMc(w.d,null,!0))},
$S:0}
A.dJb.prototype={
$0(){var w=this.a
return w.zW(new A.apE(w.d,null))},
$S:0}
A.dJc.prototype={
$0(){return this.a.bWS(this.b.a)},
$S:0}
A.dJ4.prototype={
$0(){return this.a.zW(B.aCW)},
$S:0}
A.coy.prototype={
$0(){return this.a.d.amZ(0.8)},
$S:0}
A.coz.prototype={
$0(){return this.a.d.amZ(1.25)},
$S:0}
A.fA4.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=C.aI(d,o,x.w).w,m=this.b,l=this.c,k=l.length,j=x.p,i=C.a([C.d(this.a,o,o,o,o,o,o,D.dB,o,o,o),D.au,C.d(""+new C.a2(m,new A.fA3(),C.T(m).k("a2<1>")).gM(0)+" of "+k+" steps done",o,o,o,o,o,o,B.Im,o,o,o),D.S],j)
for(w=0;w<k;++w){v=D.c.j(0.05)
u=new C.aV(14,14)
t=new C.aA(m[w]?D.bc.j(0.6):D.bF,1,D.r,-1)
s=m[w]
r=s?"\u2705":""+(w+1)+"."
q=s?D.c:D.aJ
p=l[w]
s=s?D.ay:D.c
i.push(C.p(o,new C.co(D.aQ,D.e,D.j,D.F,o,D.p,o,0,C.a([new C.x(r,o,new C.F(!0,q,o,o,o,o,14,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),D.aw,new C.bE(1,D.bi,new C.x(p,o,new C.F(!0,s,o,o,o,o,13,o,o,o,o,o,1.4,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o)],j),o),D.f,o,o,new C.o(v,o,new C.bP(t,t,t,t),new C.bs(u,u,u,u),o,o,D.n),o,o,o,D.cG,D.bl,o,o,o))}return C.bo(!0,new C.cU(new C.aY(0,1/0,0,n.a.b*0.75),C.cB(i,o,D.bY,o,o,D.ah,!0),o),!0,!1,D.ag,!0,!0)},
$S:31}
A.fA3.prototype={
$1(d){return d},
$S:160}
A.bQO.prototype={
$0(){return C.a5(this.a,!1).lY()},
$S:0}
A.d1c.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c},
$S:0}
A.d1d.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d1b(w))},
$S:0}
A.d1b.prototype={
$0(){return this.a.y=null},
$S:0}
A.d15.prototype={
$0(){return this.a.x=0},
$S:0}
A.d14.prototype={
$1(d){var w=this.a.e.b
return new C.bc(w,C.a3(w).k("bc<2>")).t(0,d)},
$S:3}
A.d16.prototype={
$1(d){return d.a===this.a},
$S:z+10}
A.d17.prototype={
$2(d,e){return e===this.a},
$S:455}
A.d18.prototype={
$0(){var w=this.a
w.xh()
w.x=this.b},
$S:0}
A.d19.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.d1a.prototype={
$0(){var w=this.a,v=w.e,u=v.a
v.a=!u
if(u)v.d=!1
w.xh()},
$S:0}
A.d1e.prototype={
$0(){var w=this.a,v=w.e
v.d=v.a=!0
w.xh()},
$S:0}
A.d1m.prototype={
$1(d){return!d},
$S:160}
A.d1w.prototype={
$0(){var w=this.a.gFv()
return A.fA2(this.b,w.b,w.d,this.c)},
$S:0}
A.d1n.prototype={
$0(){var w=this.a
return w.m(new A.d1l(w))},
$S:0}
A.d1l.prototype={
$0(){var w=this.a,v=w.e
v.e=!v.e
w.xh()},
$S:0}
A.d1o.prototype={
$0(){var w=this.a
return w.m(new A.d1k(w))},
$S:0}
A.d1k.prototype={
$0(){var w=this.a,v=w.e
v.f=!v.f
w.xh()},
$S:0}
A.d1p.prototype={
$0(){var w=this.a,v=w.gkJ()
return v.n2(10,0.2,new A.N(0.6,0,w.e.c===0?4.2:0.4),-0.95)},
$S:0}
A.d1q.prototype={
$0(){var w=this.a,v=w.gkJ()
return v.n2(10,0.2,new A.N(-0.6,0,w.e.c===0?4.2:0.4),0.95)},
$S:0}
A.d1r.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.e.b.j0(0,u)){w.oO("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w.m(new A.d1j(w,v))
if(w.w.length!==0){if(u==="ground")w.gkJ().n2(8,0.55,B.fz3,0.15)
else if(u==="white")w.gkJ().n2(8.5,0.2,B.fAU,0.95)
else w.gkJ().n2(8.5,0.2,B.fv8,-0.95)
w.km(v.b+": now tap the screw it belongs on.",!0)}},
$S:0}
A.d1j.prototype={
$0(){var w=this.a,v=this.b.a
return w.w=w.w===v?"":v},
$S:0}
A.d1s.prototype={
$0(){var w=this.a
w.m(new A.d1i(w))
A.y4()
w.km("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.nN()},
$S:0}
A.d1i.prototype={
$0(){var w=this.a
w.e.c=1
w.xh()},
$S:0}
A.d1t.prototype={
$0(){var w=this.a
w.m(new A.d1h(w))
w.nN()},
$S:0}
A.d1h.prototype={
$0(){var w=this.a
w.e.c=0
w.xh()},
$S:0}
A.d1u.prototype={
$0(){var w=this.a
w.m(new A.d1g(w))
A.y4()
w.km("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
A.d1g.prototype={
$0(){var w=this.a
w.e.c=2
w.xh()},
$S:0}
A.d1v.prototype={
$0(){var w=this.a
w.m(new A.d1f(w))
w.nN()},
$S:0}
A.d1f.prototype={
$0(){var w=this.a,v=w.e
v.c=0
v.b.a8(0)
v.a=!0
v.d=!1
w.Q=0
w.w=""
w.x=0
w.xh()},
$S:0}
A.eJj.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.eJk.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eJi(w))},
$S:0}
A.eJi.prototype={
$0(){return this.a.x=null},
$S:0}
A.eJc.prototype={
$0(){return this.a.w=0},
$S:0}
A.eJd.prototype={
$0(){var w=this.a,v=w.d
v.a.J(0,this.b)
v.c=!1
v.d=""
w.f=A.bz2(v)
w.r=""},
$S:0}
A.eJe.prototype={
$0(){var w=this.a,v=w.d
v.b.n(0,this.b,!0)
v.d=""
w.f=A.bz2(v)},
$S:0}
A.eJf.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eJg.prototype={
$1(d){return this.a.d.b.h(0,d)!==!0},
$S:3}
A.eJh.prototype={
$0(){var w,v=this.a,u=v.d
u.c=!0
w=this.b
u.d=w.length===0?"":D.d.gL(w)
v.f=A.bz2(u)},
$S:0}
A.eJo.prototype={
$1(d){return!d},
$S:160}
A.eJs.prototype={
$0(){return A.fA2(this.a,"Sink drain (P-trap)",B.d0V,this.b)},
$S:0}
A.eJp.prototype={
$1(d){return A.i_8(this.a.d,d)},
$S:z+6}
A.eJq.prototype={
$0(){var w=this.a
return w.m(new A.eJn(w,this.b))},
$S:0}
A.eJn.prototype={
$0(){var w=this.a,v=this.b
return w.r=w.r===v?"":v},
$S:0}
A.eJr.prototype={
$0(){var w=this.a
w.m(new A.eJm(w))
w.nN()},
$S:0}
A.eJm.prototype={
$0(){var w,v=this.a,u=v.d
u.a.a8(0)
w=u.b
w.aGx(w,new A.eJl())
u.c=!1
v.r=u.d=""
v.w=0
v.f=A.bz2(u)},
$S:0}
A.eJl.prototype={
$2(d,e){return!1},
$S:1791}
A.d46.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.d47.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d45(w))},
$S:0}
A.d45.prototype={
$0(){return this.a.x=null},
$S:0}
A.d3Z.prototype={
$0(){return this.a.w=0},
$S:0}
A.d41.prototype={
$1(d){return d.a===this.a},
$S:z+13}
A.d42.prototype={
$0(){var w=this.a,v=w.d
v.f=!1
w.f=A.aNa(v)
w.w=this.b},
$S:0}
A.d43.prototype={
$0(){var w=this.a,v=w.d,u=v.e
u.bn(u,new A.d40(this.b))
v.f=!1
w.f=A.aNa(v)},
$S:0}
A.d40.prototype={
$2(d,e){return e===this.a},
$S:455}
A.d44.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.d4_.prototype={
$0(){var w=this.a,v=w.d
v.f=!v.f
w.f=A.aNa(v)},
$S:0}
A.d4b.prototype={
$1(d){return!d},
$S:160}
A.d4h.prototype={
$0(){return A.fA2(this.a,"Faucet supply lines",B.dbZ,this.b)},
$S:0}
A.d4c.prototype={
$1(d){return A.hR6(this.a.d,d)},
$S:z+6}
A.d4d.prototype={
$0(){var w=this.a
return w.m(new A.d4a(w))},
$S:0}
A.d4a.prototype={
$0(){var w=this.a,v=w.d
v.r=!v.r
w.f=A.aNa(v)},
$S:0}
A.d4f.prototype={
$0(){var w=this.b
return w.m(new A.d49(this.a,w))},
$S:0}
A.d49.prototype={
$0(){var w=this.b,v=w.r,u=this.a.a
return w.r=v===u?"":u},
$S:0}
A.d4e.prototype={
$1(d){return d===this.a.a},
$S:3}
A.d4g.prototype={
$0(){var w=this.a
w.m(new A.d48(w))
w.nN()},
$S:0}
A.d48.prototype={
$0(){var w=this.a,v=w.d
v.e.a8(0)
v.f=!1
w.r=""
w.w=0
w.f=A.aNa(v)},
$S:0}
A.dba.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dbb.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.db9(w))},
$S:0}
A.db9.prototype={
$0(){return this.a.x=null},
$S:0}
A.db4.prototype={
$0(){return this.a.r=0},
$S:0}
A.db6.prototype={
$0(){var w=this.a,v=w.d
v.d.W(0,72)
w.f=A.aeX(v)
w.r=this.b},
$S:0}
A.db7.prototype={
$0(){var w=this.a,v=w.d
v.c=!0
v.b=!1
w.f=A.aeX(v)
w.r=this.b},
$S:0}
A.db8.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.db5.prototype={
$1(d){return this.a},
$S:40}
A.dbj.prototype={
$0(){return A.fA2(this.a,"Fix the house",B.cci,this.b)},
$S:0}
A.dbe.prototype={
$0(){return this.a.c9o(this.b)},
$S:0}
A.dbg.prototype={
$1(d){return d<=this.a.d.a},
$S:33}
A.dbf.prototype={
$1(d){return A.hbO(this.a.d,d)},
$S:z+6}
A.dbh.prototype={
$0(){var w=this.a
return w.m(new A.dbd(w))},
$S:0}
A.dbd.prototype={
$0(){var w=this.a
return w.w=w.w==="wrench"?"":"wrench"},
$S:0}
A.dbi.prototype={
$1(d){var w=this.a
return w.m(new A.dbc(w,d))},
$S:6}
A.dbc.prototype={
$0(){var w=this.a,v=w.d,u=D.k.V(this.b)
v.a=u
if(u<5)w.r=0
w.f=A.aeX(v)},
$S:0}
A.c4t.prototype={
$0(){return C.a5(this.a,!1).lY()},
$S:0}
A.fjw.prototype={
$5(d,e,f,g,h){var w=this.a.a.t(0,h),v=this.b
v.b=d
if(w)v.a59(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.aGv(e,0.74,D.b2,!1,!0,0,8)
v.d=1}},
$S:z+32}
A.fjv.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.ae(0,h)
w=this.b
w.e=0.5
w.b=d
w.e9(v.aC(0,g.aK(0,0.6)),v.ae(0,g.aK(0,0.6)),1.12,B.p8,0.35,8)
w.yN(v.aC(0,g.aK(0,0.62)),v.aC(0,g.aK(0,0.5)),1.2,0.5,B.Va,0.2,8)
w.b=0
w.yN(f.aC(0,g.aK(0,0.05)),f.ae(0,g.aK(0,0.08)),0.82,0.55,B.beZ,0.1,12)
w.e=0},
$S:z+43}
A.fju.prototype={
$1(d){return d.b<-0.6},
$S:z+14}
A.fiK.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:33}
A.fkX.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=A.af8(d)
for(w=this.a*1.6,v=this.b,u=p.a,t=p.b,s=p.c,r=0;r<7;++r){q=D.k.F(w+r/7,1)
v.iY(new A.N(u+Math.sin(r*2.1)*q*1.4,t+(q*2.4-q*q*6.5),s+(1+q*2.5)),0.2,e,3,6,0.9)}},
$S:1792}
A.fkW.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+13}
A.cfb.prototype={
$1(d){return d.a===this.a},
$S:z+34}
A.cfc.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.cf8.prototype={
$1(d){return this.a.uH(0,d).c.toLowerCase()},
$S:13}
A.cfd.prototype={
$1(d){var w
if(!this.a.e.t(0,d.a)){w=d.b
w=w==="valve"||D.a.a0(w,"hose")}else w=!1
return w},
$S:z+1}
A.cfe.prototype={
$1(d){var w=this.a,v=d.a
return w.e.t(0,v)&&w.bde(v)>0},
$S:z+1}
A.cff.prototype={
$1(d){return d.a},
$S:z+15}
A.cfg.prototype={
$1(d){return d.a},
$S:z+15}
A.cf9.prototype={
$1(d){return this.a.e.t(0,d.a)},
$S:z+1}
A.cfa.prototype={
$1(d){var w=this.a,v=d.a
return w.bde(v)<=0||!w.e.t(0,v)},
$S:z+1}
A.fjt.prototype={
$1(d){var w=this.a
w.b=0
w.e9(new A.N(d,8,0),new A.N(d,8,1.6),0.5,B.JW,0.7,10)},
$S:6}
A.fjr.prototype={
$1(d){var w,v,u,t,s,r,q=C.a([],x.o)
for(w=d.length,v=this.a,u=v.a,t=v.b,v=v.c,s=0;s<d.length;d.length===w||(0,C.K)(d),++s){r=d[s]
q.push(new A.N(r.a+u,r.b+t,r.c+v))}return q},
$S:z+50}
A.fjl.prototype={
$3$r(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.be(v.c,new A.fjo(d))
w.d=0.32
w.aGv(e,f,D.b2,!1,!0,0,8)
w.d=1},
$2(d,e){return this.$3$r(d,e,1.2)},
$S:z+38}
A.fjo.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.fjm.prototype={
$3(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.be(v.c,new A.fjn(d))
w.d=0.32
w.cU(e,f,D.b2)
w.d=1},
$S:z+39}
A.fjn.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.fjs.prototype={
$3(d,e,f){var w,v,u,t=this,s=t.a,r=s.c
r===$&&C.c()
w=D.d.cI(r.c,d)
r=d.c
v=s.e
u=d.a
if(v.t(0,u))s="Fitted."
else{s=s.b?"":d.e
s="A spot for the "+r.toLowerCase()+". "+s}t.b.n(0,9100+w,new A.db(r,s,e,26))
if(t.c&&!v.t(0,u)&&t.d.length!==0)t.e.push(new A.vp(e.ae(0,B.ftS),f,D.fD))},
$S:z+40}
A.fji.prototype={
$0(){return this.a.$3(this.b.a,new A.N(this.c-10,9,2.4),B.a7p)},
$S:0}
A.fjj.prototype={
$0(){return this.a.$3(this.b.a,new A.N(this.c-8,9,2.4),B.a7p)},
$S:0}
A.fjk.prototype={
$0(){return this.a.$3(this.b.a,new A.N(this.c+8,9,2.4),B.a7p)},
$S:0}
A.fjp.prototype={
$4(d,e,f,g){var w,v,u,t,s=this
if(D.d.be(s.a,new A.fjq(d))<0||!s.b.e.t(0,d))return
w=s.b.f.h(0,d)
v=(w==null?0:w)>=1
w=s.c
u=9260+g
w.b=u
t=v?e:e.ae(0,f.aK(0,1.7))
w.e9(t.aC(0,f.aK(0,0.6)),t.ae(0,f.aK(0,0.6)),1.12,B.p8,0.35,8)
w.yN(t.aC(0,f.aK(0,0.62)),t.aC(0,f.aK(0,0.5)),1.2,0.5,B.Va,0.2,8)
w=v?"Tight.":"Loose. Tap it with the wrench to tighten it."
s.d.n(0,u,new A.db("Slip nut",w,e,10))},
$S:z+41}
A.fjq.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.fzg.prototype={
$1(d){var w,v=this
A:{if("vhot"===d||"hhot"===d){w=new A.N(v.a-8,9,2)
break A}if("vcold"===d||"hcold"===d){w=new A.N(v.a+8,9,2)
break A}if("tvalve"===d||"those"===d){w=new A.N(v.b-10,9,2)
break A}if("bolts"===d){w=new A.N(v.b,2,17)
break A}if("faucet"===d){w=new A.N(v.a,30,8)
break A}if("tail"===d){w=new A.N(v.a,22,8)
break A}if("trap"===d){w=new A.N(v.a,24.7,8)
break A}w=new A.N(v.a+8.9,23.6,8)
break A}return w},
$S:z+42}
A.fzf.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.edc.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.edd.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.edb(w))},
$S:0}
A.edb.prototype={
$0(){return this.a.z=null},
$S:0}
A.ed5.prototype={
$0(){return this.a.y=0},
$S:0}
A.ede.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.ecY.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.ecZ.prototype={
$0(){var w=this.a
w.acg()
w.y=this.b},
$S:0}
A.ed_.prototype={
$1(d){return this.a.c1K()},
$S:8}
A.ed4.prototype={
$1(d){var w,v=null,u=this.a,t=u.e
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.b.toLowerCase()+" is finished and nothing leaks.\n\nMistakes: "+t.w+"\n\nThe next job is different.",v,v,v,v,v,v,B.a6p,v,v,v)
return C.eh(C.a([C.bK(!1,B.aPg,v,v,!0,v,v,new A.ed2(d),v,v),C.bJ(B.fc8,new A.ed3(u,d),v)],x.p),v,v,E.mL,t,v,v,v,v,B.fdI,v)},
$S:19}
A.ed2.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
A.ed3.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aWo()},
$S:0}
A.eda.prototype={
$0(){var w,v,u=this.a
u.d=D.o.F(Date.now(),1e5)
w=u.gCc(0)
v=u.e
v===$&&C.c()
u.e=A.fMU(v.b,w,null)
u.x=""
u.as=!1
u.z=null
u.y=0
u.acg()},
$S:0}
A.ed1.prototype={
$0(){var w=this.a
return w.m(new A.ed0(w,this.b,this.c))},
$S:0}
A.ed0.prototype={
$0(){var w=this.a
w.x=this.b?"":this.c
w.acg()},
$S:0}
A.edf.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.e.t(0,d.a)},
$S:z+1}
A.edj.prototype={
$0(){return this.a.bXa(this.b)},
$S:0}
A.edh.prototype={
$1(d){return d<=5},
$S:33}
A.edg.prototype={
$1(d){var w=this.a,v=w.e
v===$&&C.c()
return A.i_2(v,w.w.gB6()/1000)},
$S:z+6}
A.edi.prototype={
$0(){return this.b.crb(this.a.a)},
$S:0}
A.ed9.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.e
n===$&&C.c()
w=x.p
n=C.a([B.foR,D.au,C.d("Mistakes "+n.w,p,p,p,p,p,p,B.Im,p,p,p),D.S],w)
v=o.e.c
v===$&&C.c()
v=v.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
r=D.c.j(0.05)
q=new C.aV(12,12)
n.push(C.p(p,new C.x((o.e.e.t(0,s.a)?"\u2705":"\ud83d\udd27")+" "+s.c,p,B.ePu,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(r,p,p,new C.bs(q,q,q,q),p,p,D.n),p,p,p,D.eO,D.bR,p,p,p))}n.push(D.ao)
n.push(B.f4b)
n.push(D.P)
n.push(C.A(C.a([B.bth,C.aue(p,p,p,p,!1,D.y,p,p,p,p,p,p,new A.ed7(o,d),p,p,p,p,p,p,p,p,o.e.b)],w),D.m,p,D.e,D.j,0,p,p))
n.push(C.bJ(B.aPi,new A.ed8(o,d),p))
return C.bo(!0,C.cB(n,p,D.bY,p,p,D.ah,!0),!0,!1,D.ag,!0,!0)},
$S:31}
A.ed7.prototype={
$1(d){var w=this.a
w.m(new A.ed6(w,d))
C.a5(this.b,!1).N(null)},
$S:9}
A.ed6.prototype={
$0(){var w=this.a,v=w.e
v===$&&C.c()
v.b=this.b
w.acg()},
$S:0}
A.ed8.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aWo()},
$S:0}
A.fHv.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.ck3.prototype={
$1(d){return d.b==="switch"},
$S:z+3}
A.cka.prototype={
$1(d){return!this.a.y.t(0,d)},
$S:33}
A.ckb.prototype={
$1(d){var w=this.a
return w.x.ag(0,d)&&w.z.t(0,d)},
$S:33}
A.ckc.prototype={
$1(d){var w=$.Ga()[this.b],v=!1
if(w>=d)if(w<=d+48){w=this.a.Q.h(0,d)
w=(w==null?null:w.a)===!0}else w=v
else w=v
return w},
$S:33}
A.ckd.prototype={
$1(d){return this.a.Q.h(0,d).c.t(0,this.b)},
$S:33}
A.ckf.prototype={
$1(d){var w,v=J.e0(6,x.S)
for(w=0;w<6;++w)v[w]=w
return D.d.de(v,new A.cke(this.a,d))},
$S:33}
A.cke.prototype={
$1(d){return this.a.c.t(0,this.b*10+d)},
$S:33}
A.ck2.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.a)===!0},
$S:33}
A.ck0.prototype={
$1(d){return!A.kX(d).c},
$S:33}
A.ck1.prototype={
$1(d){var w=this.a.anI(A.kX(d).d.a)
return(w==null?null:w.b.t(0,d))===!0},
$S:33}
A.ck8.prototype={
$1(d){return d.c},
$S:z+5}
A.ck9.prototype={
$1(d){return d.d},
$S:z+5}
A.ck4.prototype={
$1(d){return d.d},
$S:z+5}
A.ck5.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.e)===!0},
$S:33}
A.ck6.prototype={
$1(d){return d.a===this.a},
$S:z+10}
A.ckg.prototype={
$2(d,e){return e===this.a},
$S:455}
A.ck7.prototype={
$1(d){return d.c===this.a},
$S:z+3}
A.ehz.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.ehA.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ehy(w))},
$S:0}
A.ehy.prototype={
$0(){return this.a.ax=null},
$S:0}
A.egO.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.egP.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.egN(w))},
$S:11}
A.egN.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.egQ.prototype={
$1(d){return this.a.bKU()},
$S:8}
A.egR.prototype={
$1(d){return this.a.c1P()},
$S:8}
A.egZ.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.egS.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.ehg.prototype={
$0(){var w=this.a
w.Q=this.b
w.z=w.at=""
w.ch=!1},
$S:0}
A.eh_.prototype={
$0(){var w=this.a
w.Q=-1
w.at=""},
$S:0}
A.ehv.prototype={
$0(){return this.a.as=0},
$S:0}
A.ehw.prototype={
$0(){return this.a.z=""},
$S:0}
A.ehx.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.eht.prototype={
$0(){return this.a.z=""},
$S:0}
A.ehu.prototype={
$0(){return this.a.as=2000+this.b},
$S:0}
A.ehs.prototype={
$0(){return this.a.z=""},
$S:0}
A.eho.prototype={
$1(d){return d.a===this.a},
$S:z+10}
A.ehp.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.ehq.prototype={
$0(){var w=this.a
w.at=""
w.as=0},
$S:0}
A.ehr.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.ehB.prototype={
$0(){var w=this.b,v=D.d.t(B.GF,w.z),u=this.a.a
if(v)w.aZF(u)
else w.aZH(u)},
$S:0}
A.egY.prototype={
$1(d){var w=null
return C.eh(C.a([C.bK(!1,B.ffE,w,w,!0,w,w,new A.egW(d),w,w),C.bJ(D.ID,new A.egX(this.a,d),w)],x.p),w,w,E.mL,B.f5j,w,w,w,w,B.fcw,w)},
$S:19}
A.egW.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
A.egX.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aut(!0)},
$S:0}
A.egV.prototype={
$1(d){var w,v=null,u=this.a,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.toLowerCase()+" is built, wired, painted and tested.\n\nMistakes: "+t.f+"\nShocks: "+t.r+"\nLives left: "+t.e+"\n\nEvery job is a little different. Ready for another one?",v,v,v,v,v,v,B.a6p,v,v,v)
return C.eh(C.a([C.bK(!1,B.fpF,v,v,!0,v,v,new A.egT(d),v,v),C.bJ(B.fcp,new A.egU(u,d),v)],x.p),v,v,E.mL,t,v,v,v,v,B.fjZ,v)},
$S:19}
A.egT.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
A.egU.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aVk()},
$S:0}
A.eh0.prototype={
$0(){var w,v,u
if(!this.b)this.a.e=D.o.F(Date.now(),1e5)
w=this.a
v=w.gCc(0)
u=w.d
u===$&&C.c()
w.d=A.fNj(null,null,u.b,v)
w.y=0
w.z=""
w.Q=-1
w.at=""
w.as=0
w.cx=!1
w.x.a8(0)
w.ax=null
w.r=A.Cj(w.d,new A.vO(w.z,w.Q,!1))},
$S:0}
A.ehe.prototype={
$1(d){return new C.J(d,new A.ehf(),d.$ti.k("J<aj.E,n>")).aH(0,", ")},
$S:1793}
A.ehf.prototype={
$1(d){return A.kX(d).b},
$S:75}
A.eh1.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.x.ag(0,d.a)},
$S:z+3}
A.eh2.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.z.t(0,d.a)},
$S:z+3}
A.eh3.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.y.t(0,d)},
$S:33}
A.eh6.prototype={
$1(d){return!d.a},
$S:z+5}
A.eh7.prototype={
$1(d){return d.b<3},
$S:z+5}
A.eh8.prototype={
$1(d){return!d.c},
$S:z+5}
A.eh9.prototype={
$1(d){return!d.d},
$S:z+5}
A.eha.prototype={
$1(d){return!d.c},
$S:z+5}
A.ehb.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.a
return w!==d.b},
$S:z+3}
A.ehc.prototype={
$1(d){return d.a},
$S:z+47}
A.ehd.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.b.c
return(w==null?0:w)<2},
$S:z+3}
A.eh4.prototype={
$1(d){var w=d.b
if(w==="outlet"||w==="gfci"){w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=(w==null?null:w.c)!==!0}else w=!1
return w},
$S:z+3}
A.eh5.prototype={
$1(d){return d.b==="fan"},
$S:z+3}
A.ehS.prototype={
$0(){return this.a.caq(this.b)},
$S:0}
A.ehU.prototype={
$0(){var w=this.a
if(w.Q>=0)w.av1()
else{w.m(new A.ehG(w))
w.b0U()}},
$S:0}
A.ehG.prototype={
$0(){return this.a.as=0},
$S:0}
A.ehT.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.i_h(v,w.w.gB6()/1000,w.x)},
$S:z+6}
A.ehJ.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kn(v.aGo())},
$S:0}
A.ehK.prototype={
$0(){var w=this.a
return w.m(new A.ehI(w,this.b))},
$S:0}
A.ehI.prototype={
$0(){var w,v=this.b.b
v.f=!v.f
v=this.a
w=v.d
w===$&&C.c()
v.r=A.Cj(w,new A.vO(v.z,v.Q,!1))},
$S:0}
A.ehL.prototype={
$0(){var w=this.a
return w.m(new A.ehH(w,this.b))},
$S:0}
A.ehH.prototype={
$0(){var w,v=this.b.b
v.e=!v.e
v=this.a
w=v.d
w===$&&C.c()
v.r=A.Cj(w,new A.vO(v.z,v.Q,!1))},
$S:0}
A.ehV.prototype={
$0(){var w=this.a
return w.m(new A.ehF(w,this.b))},
$S:0}
A.ehF.prototype={
$0(){var w,v=this.a
v.y=this.b
v.z=""
w=v.d
w===$&&C.c()
v.r=A.Cj(w,new A.vO("",v.Q,!1))},
$S:0}
A.ehW.prototype={
$0(){var w=this.a
return w.m(new A.ehE(w))},
$S:0}
A.ehE.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.aCR()
w.y=2
w.z=""
w.r=A.Cj(w.d,new A.vO("",w.Q,!1))
w.zX("The boxes, the cable and the walls are done. Now the wiring: pick an Outlet or a Switch from the tray, then tap its box on the wall.",!0)},
$S:0}
A.ehX.prototype={
$0(){var w=this.a
return w.m(new A.ehD(w,this.b))},
$S:0}
A.ehD.prototype={
$0(){var w,v=this.a,u=this.b.a,t=v.z===u?"":u
v.z=t
v.as=0
w=v.d
w===$&&C.c()
v.r=A.Cj(w,new A.vO(t,v.Q,!1))
if(v.z.length!==0)v.cl0(u)},
$S:0}
A.ehY.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kn(v.cKa())},
$S:0}
A.ehZ.prototype={
$1(d){return!this.a.b.b.j0(0,d.a)},
$S:z+11}
A.ei_.prototype={
$0(){var w=this.a
return w.m(new A.ehC(w,this.b,this.c))},
$S:0}
A.ehC.prototype={
$0(){var w,v=this,u=v.c,t=u.a
if(v.b.b.b.j0(0,t)){v.a.av2("That wire is already fastened. Tap the wire in the 3D view to take it off.")
return}w=v.a
if(w.at===t)t=""
w.at=t
if(t.length!==0)w.zX(u.b+": now tap the screw it belongs on, or press the matching button below.",!0)},
$S:0}
A.ehM.prototype={
$1(d){return!this.a.b.b.ag(0,d.a)},
$S:z+10}
A.ehN.prototype={
$0(){var w=this.a
return w.aZE(w.Q,this.b.a)},
$S:0}
A.ehO.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kn(v.beA(w.Q))},
$S:0}
A.ehP.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kn(v.cOj(w.Q))},
$S:0}
A.ehQ.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kn(v.b9v(w.Q))},
$S:0}
A.ehR.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.cPj(v.Q)
v.kn(w)
if(w.a)v.av1()},
$S:0}
A.ehn.prototype={
$1(d){return new C.e5(new A.ehm(this.a),null)},
$S:20}
A.ehm.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=C.aI(d,l,x.w).w,j=this.a,i=j.d
i===$&&C.c()
w=i.c
w===$&&C.c()
v=x.p
i=C.a([C.d("Job: "+w,l,l,l,l,l,l,D.dB,l,l,l),D.au,C.d("Mistakes "+i.f+" \xb7 Shocks "+i.r+" \xb7 Lives "+i.e,l,l,l,l,l,l,B.Im,l,l,l),D.S,B.fgb,D.ao],v)
w=j.d.d
w===$&&C.c()
u=0
for(;u<4;++u){t=w[u]
s=D.c.j(0.05)
r=new C.aV(12,12)
q=new C.aA(D.bF,1,D.r,-1)
p=t.a
o=j.d.at.h(0,p)
o=(o==null?l:o.b.c)===2?"\u2705":"\u2b1c"
n=t.b
if(n==="gfci")n="A GFCI outlet"
else if(n==="outlet")n="An outlet"
else if(n==="switch")n="A light switch"
else n=n==="light"?"A ceiling light":"A ceiling fan"
p=A.kX(p)
m=t.c
m=m!=null?", turned on by "+A.kX(m).b:""
i.push(C.p(l,new C.x(o+" "+n+" at "+p.b+m,l,D.rm,l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(s,l,new C.bP(q,q,q,q),new C.bs(r,r,r,r),l,l,D.n),l,l,l,D.eO,D.bR,l,l,l))}i.push(D.S)
i.push(C.A(C.a([B.bug,C.aue(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.ehj(j,e),l,l,l,l,l,l,l,l,j.d.b)],v),D.m,l,D.e,D.j,0,l,l))
i.push(D.ao)
i.push(C.A(C.a([C.D(C.dW(B.f6q,new A.ehk(j,d),l),1),D.ab,C.D(C.bJ(B.aPi,new A.ehl(j,d),l),1)],v),D.m,l,D.e,D.j,0,l,l))
return C.bo(!0,new C.cU(new C.aY(0,1/0,0,k.a.b*0.8),C.cB(i,l,D.bY,l,l,D.ah,!0),l),!0,!1,D.ag,!0,!0)},
$S:98}
A.ehj.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
v.b=d
for(v=v.at,v=new C.dt(v,v.r,v.e);v.C();)v.d.b.r=d
this.b.$1(new A.ehh())
w.m(new A.ehi())},
$S:9}
A.ehh.prototype={
$0(){},
$S:0}
A.ehi.prototype={
$0(){},
$S:0}
A.ehk.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aut(!0)},
$S:0}
A.ehl.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aVk()},
$S:0}
A.fda.prototype={
$1(d){var w=this.a,v=d.a
return w>v[0]&&w<v[1]},
$S:704}
A.fdb.prototype={
$1(d){var w=this.a,v=d.a
return w>v[2]&&w<v[3]},
$S:704}
A.fjx.prototype={
$1(d){return 5000+this.a.a*100+d},
$S:76}
A.fjy.prototype={
$1(d){return 3000+this.a.a},
$S:76}
A.fjz.prototype={
$1(d){return 2000+this.a.a},
$S:76}
A.fjC.prototype={
$5$col$round(d,e,f,g,h){var w=this.a
w.b=d
w.d=0.5
w.e=0.9
if(h)w.pe(e.aC(0,B.w5),e.ae(0,B.w5),f.a/2,g,14)
else w.cU(e,f,g)
w.e=0
w.d=1},
$3(d,e,f){return this.$5$col$round(d,e,f,D.b2,!1)},
$4$round(d,e,f,g){return this.$5$col$round(d,e,f,D.b2,g)},
$4$col(d,e,f,g){return this.$5$col$round(d,e,f,g,!1)},
$S:z+48}
A.fjA.prototype={
$3(d,e,f){return G.fz2(d,e,0,f+this.a.a*5)},
$S:702}
A.fjB.prototype={
$0(){var w,v=this.a
if(v.c)w="A place in the ceiling for a "+(v.e==="fan"?"fan (needs a fan-rated box)":"light")+"."
else w="A place on the wall at "+(v.e==="switch"?"switch height, about 48 inches from the floor":"outlet height, about 16 inches from the floor")+"."
return new A.db(v.b,w,A.a1z(v,B.a7m),26)},
$S:z+49}
A.fzA.prototype={
$1(d){return d.e==="fan"},
$S:z+12}
A.fzB.prototype={
$1(d){return d.b==="light"},
$S:z+3}
A.cnp.prototype={
$1(d){return d.a===this.a&&!d.c},
$S:z+7}
A.cnl.prototype={
$1(d){return d.a===B.YF},
$S:z+7}
A.cnn.prototype={
$1(d){return d.c},
$S:z+7}
A.cno.prototype={
$1(d){return d.c},
$S:z+7}
A.cnm.prototype={
$1(d){return B.vy.h(0,d.a).e===this.a&&!d.c},
$S:z+7}
A.ejm.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.ejn.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ejl(w))},
$S:0}
A.ejl.prototype={
$0(){return this.a.z=null},
$S:0}
A.ejb.prototype={
$0(){return this.a.y=0},
$S:0}
A.ejg.prototype={
$0(){return this.a.as=!0},
$S:0}
A.ejh.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ejf(w))},
$S:11}
A.ejf.prototype={
$0(){return this.a.as=!1},
$S:0}
A.eji.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
w.r=A.aeX(v.d)
w.y=this.b},
$S:0}
A.ejj.prototype={
$1(d){return this.a.cax()},
$S:8}
A.ejk.prototype={
$1(d){return this.a.c1U()},
$S:8}
A.eje.prototype={
$1(d){var w=null
return C.eh(C.a([C.bJ(B.fdD,new A.ejd(this.a,d),w)],x.p),w,w,E.mL,B.fcM,w,w,w,w,B.fiL,w)},
$S:19}
A.ejd.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aur()},
$S:0}
A.eja.prototype={
$1(d){var w=null,v=this.a,u=v.d
u===$&&C.c()
u=C.d("Every problem on the customer's list is fixed.\n\nMistakes: "+u.f+"\nShocks: "+u.r+"\nLives left: "+u.e+"\n\nThe next call will have different problems.",w,w,w,w,w,w,B.a6p,w,w,w)
return C.eh(C.a([C.bK(!1,B.aPg,w,w,!0,w,w,new A.ej8(d),w,w),C.bJ(B.feR,new A.ej9(v,d),w)],x.p),w,w,E.mL,u,w,w,w,w,B.fl0,w)},
$S:19}
A.ej8.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
A.ej9.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aur()},
$S:0}
A.ejc.prototype={
$0(){var w,v,u=this.a
u.e=D.o.F(Date.now(),1e5)
w=u.gCc(0)
v=u.d
v===$&&C.c()
w=A.h3w(v.b,w)
u.d=w
u.r=A.aeX(w.d)
u.at=!1
u.z=null
u.y=0},
$S:0}
A.ejz.prototype={
$0(){return this.a.cuF(this.b)},
$S:0}
A.ejv.prototype={
$1(d){return d<=5},
$S:33}
A.eju.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.hbO(v.d,w.w.gB6()/1000)},
$S:z+6}
A.ejw.prototype={
$1(d){return!d.c},
$S:z+7}
A.ejx.prototype={
$1(d){return B.vy.h(0,d.a).a},
$S:z+33}
A.ejy.prototype={
$0(){var w=this.a
return w.m(new A.ejt(w,this.b))},
$S:0}
A.ejt.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.ejs.prototype={
$1(d){return new C.e5(new A.ejr(this.a),null)},
$S:20}
A.ejr.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fbf,D.au,C.d("Mistakes "+j.f+" \xb7 Shocks "+j.r+" \xb7 Lives "+j.e,l,l,l,l,l,l,B.Im,l,l,l),D.S],w)
v=k.d.c
v===$&&C.c()
u=v.length
t=0
for(;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aV(14,14)
p=new C.aA(s.c?D.bc.j(0.6):D.bF,1,D.r,-1)
o=s.c?"\u2705":"\ud83d\udd27"
n=B.vy.h(0,s.a).a
m=s.c?D.ay:D.c
j.push(C.p(l,new C.x(o+" "+n,l,new C.F(!0,m,l,l,l,l,13.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(r,l,new C.bP(p,p,p,p),new C.bs(q,q,q,q),l,l,D.n),l,l,l,D.cG,D.bl,l,l,l))}j.push(D.ao)
j.push(B.fgl)
j.push(D.P)
j.push(C.A(C.a([B.btg,C.aue(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.ejp(k,e),l,l,l,l,l,l,l,l,k.d.b)],w),D.m,l,D.e,D.j,0,l,l))
j.push(C.bJ(B.fja,new A.ejq(k,d),l))
return C.bo(!0,C.cB(j,l,D.bY,l,l,D.ah,!0),!0,!1,D.ag,!0,!0)},
$S:98}
A.ejp.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w.b=d
this.b.$1(new A.ejo())},
$S:9}
A.ejo.prototype={
$0(){},
$S:0}
A.ejq.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aur()},
$S:0};(function aliases(){var w=A.aLj.prototype
w.btD=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_0i
var t
w(t=A.aC8.prototype,"gaWj","mB",0)
v(t,"gc1x","ace",2)
v(t,"gc1y","c1z",2)
w(t,"gcak","Pn",18)
w(t,"gc9K","ZC",18)
w(t,"gc1C","c1D",0)
w(t,"gci8","ci9",0)
u(t,"gc1A","c1B",0)
w(t=A.axZ.prototype,"gc1H","xh",0)
w(t,"gI8","nN",0)
v(t,"gI9","Ia",2)
w(t,"gcff","cfg",0)
w(t,"gcu6","cu7",0)
w(t=A.aDW.prototype,"gI8","nN",0)
v(t,"gI9","Ia",2)
w(t,"gc1I","c1J",0)
w(t=A.aye.prototype,"gI8","nN",0)
v(t,"gI9","Ia",2)
u(t,"gc1F","c1G",0)
w(t=A.az7.prototype,"gI8","nN",0)
v(t,"gI9","Ia",2)
w(t=A.aCD.prototype,"gc1L","aWn",0)
v(t,"gc1M","c1N",2)
v(A.b3c.prototype,"ganJ","blg",44)
w(t=A.aCK.prototype,"gbMn","aQT",0)
w(t,"gbz0","bz1",0)
w(t,"gc1Q","av1",0)
v(t,"gc1S","c1T",2)
w(t=A.aCO.prototype,"gc1V","aWr",0)
v(t,"gc1W","c1X",2)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(C.aC,[A.N,A.tc,A.db,A.vp,A.zj,A.at6,A.nq,A.bOB,A.J4,A.mc,A.avx,A.zH,A.a3i,A.BL,A.aTf,A.q8,A.Df,A.u7,A.ps,A.a3L,A.bOD,A.bOJ,A.Je,A.jw,A.LT,A.cfh,A.Ek,A.n8,A.VS,A.cf7,A.yo,A.pF,A.Ww,A.atz,A.aRW,A.eC,A.b3c,A.kT,A.vO,A.tZ,A.Ll,A.cnk])
v(C.hS,[A.bUt,A.bUu,A.bUs,A.bUv,A.bUw,A.fHF,A.fHD,A.fHE,A.fHC,A.fHw,A.ckU,A.ckV,A.ckR,A.ckS,A.ePD,A.ePC,A.ePz,A.ePA,A.ePB,A.fkz,A.fHU,A.fkF,A.fkG,A.fkD,A.fkE,A.fkB,A.fkC,A.fiI,A.fiJ,A.f6w,A.fix,A.bOE,A.bOI,A.bOH,A.bOG,A.bOF,A.e_D,A.e_B,A.e_C,A.e_9,A.dZY,A.dZX,A.e_p,A.e_o,A.e_m,A.e_d,A.dli,A.fiL,A.fiM,A.fiN,A.fiP,A.fiW,A.fiS,A.fiV,A.fiU,A.dIZ,A.fA4,A.fA3,A.d14,A.d16,A.d1m,A.eJg,A.eJo,A.eJp,A.d41,A.d4b,A.d4c,A.d4e,A.db5,A.dbg,A.dbf,A.dbi,A.fjw,A.fjv,A.fju,A.fiK,A.fkW,A.cfb,A.cfc,A.cf8,A.cfd,A.cfe,A.cff,A.cfg,A.cf9,A.cfa,A.fjt,A.fjr,A.fjl,A.fjo,A.fjm,A.fjn,A.fjs,A.fjp,A.fjq,A.fzg,A.fzf,A.ede,A.ed_,A.ed4,A.edf,A.edh,A.edg,A.ed9,A.ed7,A.fHv,A.ck3,A.cka,A.ckb,A.ckc,A.ckd,A.ckf,A.cke,A.ck2,A.ck0,A.ck1,A.ck8,A.ck9,A.ck4,A.ck5,A.ck6,A.ck7,A.egQ,A.egR,A.eho,A.egY,A.egV,A.ehe,A.ehf,A.eh1,A.eh2,A.eh3,A.eh6,A.eh7,A.eh8,A.eh9,A.eha,A.ehb,A.ehc,A.ehd,A.eh4,A.eh5,A.ehT,A.ehZ,A.ehM,A.ehn,A.ehj,A.fda,A.fdb,A.fjx,A.fjy,A.fjz,A.fjC,A.fjA,A.fzA,A.fzB,A.cnp,A.cnl,A.cnn,A.cno,A.cnm,A.ejj,A.ejk,A.eje,A.eja,A.ejv,A.eju,A.ejw,A.ejx,A.ejs,A.ejp])
v(C.kc,[A.bUr,A.ckT,A.flD,A.flE,A.flF,A.flG,A.flH,A.f5b,A.fiR,A.fiO,A.fiQ,A.fiT,A.d17,A.eJl,A.d40,A.fkX,A.ckg,A.ehm,A.ejr])
u(A.Ay,C.oA)
v(C.mC,[A.b3p,A.bfQ])
v(C.ag,[A.at5,A.aoI,A.Mw,A.ab6,A.aDV,A.ayd,A.az6,A.US,A.UV,A.apE])
v(C.ah,[A.aLj,A.aC8,A.bhn,A.axZ,A.aDW,A.aye,A.az7,A.aCD,A.aCK,A.aCO])
u(A.bot,A.aLj)
v(C.j2,[A.fiy,A.e_h,A.e_i,A.e_g,A.e_j,A.dZV,A.e__,A.e_0,A.e_1,A.e_2,A.e_3,A.dZZ,A.e_4,A.e_7,A.e_6,A.e_8,A.e_5,A.dZW,A.e_k,A.e_e,A.e_f,A.dZG,A.dZL,A.dZM,A.dZN,A.dZO,A.dZP,A.dZQ,A.dZK,A.dZR,A.dZJ,A.dZS,A.dZI,A.dZT,A.dZH,A.dZU,A.e_s,A.e_q,A.e_t,A.e_u,A.e_v,A.e_w,A.e_x,A.e_y,A.e_z,A.e_n,A.e_A,A.e_r,A.e_l,A.e_b,A.e_c,A.e_a,A.fjQ,A.dJ1,A.dJ2,A.dJ0,A.dJ3,A.dJ_,A.dJ5,A.dJ6,A.dJ7,A.dJ8,A.dJ9,A.dJa,A.dJb,A.dJc,A.dJ4,A.coy,A.coz,A.bQO,A.d1c,A.d1d,A.d1b,A.d15,A.d18,A.d19,A.d1a,A.d1e,A.d1w,A.d1n,A.d1l,A.d1o,A.d1k,A.d1p,A.d1q,A.d1r,A.d1j,A.d1s,A.d1i,A.d1t,A.d1h,A.d1u,A.d1g,A.d1v,A.d1f,A.eJj,A.eJk,A.eJi,A.eJc,A.eJd,A.eJe,A.eJf,A.eJh,A.eJs,A.eJq,A.eJn,A.eJr,A.eJm,A.d46,A.d47,A.d45,A.d3Z,A.d42,A.d43,A.d44,A.d4_,A.d4h,A.d4d,A.d4a,A.d4f,A.d49,A.d4g,A.d48,A.dba,A.dbb,A.db9,A.db4,A.db6,A.db7,A.db8,A.dbj,A.dbe,A.dbh,A.dbd,A.dbc,A.c4t,A.fji,A.fjj,A.fjk,A.edc,A.edd,A.edb,A.ed5,A.ecY,A.ecZ,A.ed2,A.ed3,A.eda,A.ed1,A.ed0,A.edj,A.edi,A.ed6,A.ed8,A.ehz,A.ehA,A.ehy,A.egO,A.egP,A.egN,A.egZ,A.egS,A.ehg,A.eh_,A.ehv,A.ehw,A.ehx,A.eht,A.ehu,A.ehs,A.ehp,A.ehq,A.ehr,A.ehB,A.egW,A.egX,A.egT,A.egU,A.eh0,A.ehS,A.ehU,A.ehG,A.ehJ,A.ehK,A.ehI,A.ehL,A.ehH,A.ehV,A.ehF,A.ehW,A.ehE,A.ehX,A.ehD,A.ehY,A.ei_,A.ehC,A.ehN,A.ehO,A.ehP,A.ehQ,A.ehR,A.ehh,A.ehi,A.ehk,A.ehl,A.fjB,A.ejm,A.ejn,A.ejl,A.ejb,A.ejg,A.ejh,A.ejf,A.eji,A.ejd,A.ej8,A.ej9,A.ejc,A.ejz,A.ejy,A.ejt,A.ejo,A.ejq])
v(C.au,[A.bgr,A.b4H,A.AT,A.a5E])
u(A.qQ,C.m_)
w(A.aLj,C.c8)})()
C.jR(b.typeUniverse,JSON.parse('{"at5":{"ag":[],"r":[]},"Ay":{"aB":[]},"b3p":{"aB":[]},"bot":{"ah":["at5"]},"aoI":{"ag":[],"r":[]},"aC8":{"ah":["aoI"]},"bgr":{"au":[],"r":[]},"bfQ":{"aB":[]},"ab6":{"ag":[],"r":[]},"aDV":{"ag":[],"r":[]},"ayd":{"ag":[],"r":[]},"az6":{"ag":[],"r":[]},"Mw":{"ag":[],"r":[]},"bhn":{"ah":["Mw"]},"b4H":{"au":[],"r":[]},"AT":{"au":[],"r":[]},"axZ":{"ah":["ab6"]},"aDW":{"ah":["aDV"]},"aye":{"ah":["ayd"]},"az7":{"ah":["az6"]},"a5E":{"au":[],"r":[]},"US":{"ag":[],"r":[]},"aCD":{"ah":["US"]},"UV":{"ag":[],"r":[]},"aCK":{"ah":["UV"]},"apE":{"ag":[],"r":[]},"aCO":{"ah":["apE"]}}'))
var y={g:"A shut-off valve goes on the pipe that comes out of the wall.",x:"Fasten the bare copper ground to the GREEN screw.",s:"Pick a paint colour above to change this wall.",E:"Switch the power on and flip the wall switch.",j:"The bare copper ground wire only goes on the GREEN screw.",u:"The gold screws are BRASS. They are for the HOT wire (black).",o:"The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).",r:"Turn the breaker OFF and test that the wires are dead."}
var x=(function rtii(){var w=C.ax
return{l:w("bp<n,n>"),M:w("eU<n>"),W:w("aRW"),F:w("qQ"),O:w("O<w>"),c:w("O<Ll>"),_:w("O<aTf>"),D:w("O<ps>"),B:w("O<a3L>"),r:w("O<mc>"),E:w("O<vp>"),Z:w("O<jw>"),g:w("O<u>"),A:w("O<pF>"),v:w("O<n8>"),h:w("O<hm>"),z:w("O<tc>"),I:w("O<+(a7y,G)>"),L:w("O<+(n,n)>"),f:w("O<+(P,P)>"),J:w("O<+(G,n)>"),V:w("O<+(P,P,P,P)>"),a:w("O<at6>"),X:w("O<Ww>"),s:w("O<n>"),o:w("O<N>"),p:w("O<r>"),d:w("O<zH>"),G:w("O<J4>"),b:w("O<kT>"),u:w("O<R>"),n:w("O<P>"),t:w("O<G>"),U:w("O<aB?>"),w:w("iy"),P:w("cn"),q:w("db"),K:w("u"),C:w("Ih"),e:w("tc"),j:w("atz"),N:w("n"),x:w("N"),k:w("a2<Ek>"),Q:w("a2<n>"),Y:w("a2<G>"),y:w("R"),i:w("P"),S:w("G"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.aSQ=new A.eC(!0,"The water is on and nothing leaks. Perfect job!",!1,"")
B.aSR=new A.eC(!0,"Primer and paint rolled on.",!1,"")
B.aSS=new A.eC(!1,"This call is over. Start a new one.",!1,"")
B.aST=new A.eC(!1,"That is not a place for a sheet.",!1,"")
B.aSU=new A.eC(!0,"Sanded smooth. Wear a mask: the dust is bad to breathe.",!1,"")
B.a8l=new A.eC(!1,"There is no device here.",!1,"")
B.aSV=new A.eC(!0,"You look closely. Everything looks fine here.",!1,"")
B.aSW=new A.eC(!1,"ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.",!0,"shock")
B.aSX=new A.eC(!0,"Paper tape pressed into the seam.",!1,"")
B.aSY=new A.eC(!0,"Unplugged.",!1,"")
B.aSZ=new A.eC(!0,"Breaker OFF. It is safe to work on the wires.",!1,"")
B.aT_=new A.eC(!1,"ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.",!0,"shock")
B.aT0=new A.eC(!1,"There is nothing there.",!1,"")
B.aT1=new A.eC(!1,"The outlet is burnt. Nothing works. Pull it out and put in a new one.",!0,"")
B.aT2=new A.eC(!0,"The water is on and nothing leaks yet, but the job is not finished.",!1,"")
B.aT3=new A.eC(!0,"Sheet hung. Now screw it to the studs.",!1,"")
B.aT4=new A.eC(!0,"Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.",!1,"")
B.aT5=new A.eC(!0,"Plugged in. Nothing happens because the breaker is off. Turn it on to test.",!1,"")
B.aT6=new A.eC(!0,"You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.",!1,"")
B.aT7=new A.eC(!0,"Click.",!1,"")
B.aT8=new A.eC(!0,"The wires are folded back and the device is in the box. Now put the cover on.",!1,"")
B.aT9=new A.eC(!0,"Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)",!1,"")
B.aTa=new A.eC(!1,"Nothing is wet.",!1,"")
B.aTb=new A.eC(!0,"Power is on.",!1,"")
B.aTc=new A.eC(!0,"Water OFF at the main valve. You can cut into the pipes safely now.",!1,"")
B.aTd=new A.eC(!0,"Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.",!1,"")
B.aTe=new A.eC(!0,"Device pulled out of the box.",!1,"")
B.aTf=new A.eC(!0,"Screw set just below the paper, not through it.",!1,"")
B.aTg=new A.eC(!1,"ZAP! You touched a live wire. In Learn mode you are not hurt, but in real life this can kill. Switch the breaker OFF and test the wires first.",!0,"shock")
B.aTh=new A.eC(!0,"Cover on. Now you can turn the breaker on and test.",!1,"")
B.U2=new A.eC(!1,"",!1,"")
B.aTi=new A.eC(!0,"Device taken out. You can put it somewhere else, or put in a new one.",!1,"")
B.aTj=new A.eC(!0,"Breaker back ON.",!1,"")
B.aTk=new A.eC(!1,"That is not a stud.",!1,"")
B.aTl=new A.eC(!0,"Off.",!1,"")
B.aTm=new A.eC(!1,"Nothing to flip yet.",!1,"")
B.aTn=new A.eC(!0,"Wire taken off.",!1,"")
B.aTo=new A.eC(!0,"The mud is dry.",!1,"")
B.aTp=new A.eC(!0,"Breaker reset.",!1,"")
B.aTq=new A.eC(!0,"Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)",!1,"")
B.fkx=new C.x("Tap a piece of furniture, or add one:",null,N.Ss,null,null,null,null,null,null,null,null,null)
B.e1i=new C.C(D.nD,B.fkx,null)
B.aTx=new C.bI(D.a3,null,null,B.e1i,null)
B.Kj=new C.w(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,D.t)
B.aWr=new C.bP(D.Y,D.Y,U.uv,D.Y)
B.aYT=new C.o(B.Kj,null,B.aWr,null,null,null,D.n)
B.fl7=new C.x("\u2600\ufe0f Let it dry",null,K.CG,null,null,null,null,null,null,null,null,null)
B.b1V=new C.cq(D.A,null,null,B.fl7,null)
B.fkU=new C.x("\u23e9 Skip to the wiring",null,K.CG,null,null,null,null,null,null,null,null,null)
B.b22=new C.cq(D.A,null,null,B.fkU,null)
B.f9X=new C.x("\ud83c\udfd7\ufe0f",null,D.uh,null,null,null,null,null,null,null,null,null)
B.b2h=new C.cq(D.A,null,null,B.f9X,null)
B.b3X=new C.w(1,0.9294117647058824,0.9098039215686274,0.8627450980392157,D.t)
B.b47=new C.w(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,D.t)
B.JM=new C.w(1,0.5450980392156862,0.3686274509803922,0.20392156862745098,D.t)
B.b4h=new C.w(1,0.611764705882353,0.5568627450980392,0.4588235294117647,D.t)
B.aaD=new C.w(1,0.24705882352941178,0.5607843137254902,0.30980392156862746,D.t)
B.wA=new C.w(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,D.t)
B.b4O=new C.w(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,D.t)
B.b4P=new C.w(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,D.t)
B.b4W=new C.w(1,0.10588235294117647,0.4980392156862745,0.20392156862745098,D.t)
B.aaO=new C.w(1,0.7215686274509804,0.7450980392156863,0.7725490196078432,D.t)
B.DB=new C.w(1,0.5450980392156862,0.3686274509803922,0.23529411764705882,D.t)
B.aaQ=new C.w(1,0.8509803921568627,0.8274509803921568,0.7725490196078432,D.t)
B.aaU=new C.w(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,D.t)
B.rI=new C.w(1,0.16862745098039217,0.17647058823529413,0.2,D.t)
B.b5r=new C.w(1,0.13333333333333333,0.13725490196078433,0.14901960784313725,D.t)
B.DD=new C.w(1,0.8980392156862745,0.7529411764705882,0.4823529411764706,D.t)
B.JW=new C.w(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,D.t)
B.V0=new C.w(1,0.5411764705882353,0.41568627450980394,0.2784313725490196,D.t)
B.b61=new C.w(1,0.2980392156862745,0.5450980392156862,0.2901960784313726,D.t)
B.rK=new C.w(1,0.788235294117647,0.6274509803921569,0.22745098039215686,D.t)
B.ab5=new C.w(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,D.t)
B.ab7=new C.w(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,D.t)
B.b6q=new C.w(1,0.47843137254901963,0.35294117647058826,0.22745098039215686,D.t)
B.kx=new C.w(1,0.788235294117647,0.807843137254902,0.8392156862745098,D.t)
B.V5=new C.w(1,0.4196078431372549,0.45098039215686275,0.5019607843137255,D.t)
B.abd=new C.w(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,D.t)
B.zT=new C.w(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,D.t)
B.b7i=new C.w(1,0.5490196078431373,0.5764705882352941,0.6078431372549019,D.t)
B.DM=new C.w(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,D.t)
B.Va=new C.w(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,D.t)
B.abp=new C.w(1,0.10588235294117647,0.11372549019607843,0.13333333333333333,D.t)
B.abs=new C.w(1,0.30980392156862746,0.6588235294117647,0.3764705882352941,D.t)
B.abt=new C.w(1,0.8509803921568627,0.803921568627451,0.7215686274509804,D.t)
B.K6=new C.w(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,D.t)
B.b7F=new C.w(1,0.8862745098039215,0.8745098039215686,0.8235294117647058,D.t)
B.b7W=new C.w(1,0.5411764705882353,0.4823529411764706,0.41568627450980394,D.t)
B.b8_=new C.w(1,0.34901960784313724,0.3176470588235294,0.29411764705882354,D.t)
B.b86=new C.w(1,0.8117647058823529,0.792156862745098,0.7411764705882353,D.t)
B.Vi=new C.w(1,0.8117647058823529,0.8901960784313725,0.9176470588235294,D.t)
B.Vj=new C.w(1,0.3333333333333333,0.396078431372549,0.4823529411764706,D.t)
B.Vk=new C.w(1,0.5529411764705883,0.7843137254901961,1,D.t)
B.Vn=new C.w(1,1,0.9019607843137255,0.5019607843137255,D.t)
B.b8v=new C.w(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,D.t)
B.abN=new C.w(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,D.t)
B.b8N=new C.w(1,0.9686274509803922,0.9607843137254902,0.9333333333333333,D.t)
B.ns=new C.w(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,D.t)
B.b8W=new C.w(1,0.788235294117647,0.7176470588235294,0.6078431372549019,D.t)
B.Vq=new C.w(1,0.8901960784313725,0.6627450980392157,0.10980392156862745,D.t)
B.DT=new C.w(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,D.t)
B.b97=new C.w(1,0.22745098039215686,0.49019607843137253,0.26666666666666666,D.t)
B.uE=new C.w(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,D.t)
B.b9i=new C.w(1,0.3686274509803922,0.17647058823529413,0.13725490196078433,D.t)
B.DV=new C.w(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,D.t)
B.A_=new C.w(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,D.t)
B.ac5=new C.w(1,0.9450980392156862,0.9568627450980393,0.9725490196078431,D.t)
B.b9H=new C.w(1,0.9019607843137255,0.9019607843137255,0.8784313725490196,D.t)
B.acc=new C.w(1,0.8941176470588236,0.9058823529411765,0.9176470588235294,D.t)
B.m0=new C.w(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,D.t)
B.ack=new C.w(1,1,0.35294117647058826,0.12156862745098039,D.t)
B.bas=new C.w(1,0.5411764705882353,0.29411764705882354,0.29411764705882354,D.t)
B.VD=new C.w(1,0.9098039215686274,0.8509803921568627,0.7372549019607844,D.t)
B.A4=new C.w(1,1,0.9450980392156862,0.6588235294117647,D.t)
B.baL=new C.w(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,D.t)
B.baN=new C.w(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,D.t)
B.baW=new C.w(1,0.47843137254901963,0.23137254901960785,0.1803921568627451,D.t)
B.bb2=new C.w(1,0.6078431372549019,0.6078431372549019,0.592156862745098,D.t)
B.A6=new C.w(1,0.9568627450980393,0.9450980392156862,0.9176470588235294,D.t)
B.rU=new C.w(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,D.t)
B.p8=new C.w(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,D.t)
B.acv=new C.w(1,0.788235294117647,0.8117647058823529,0.8392156862745098,D.t)
B.bbi=new C.w(1,0.9294117647058824,0.9215686274509803,0.8941176470588236,D.t)
B.VL=new C.w(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,D.t)
B.acy=new C.w(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,D.t)
B.bbu=new C.w(1,0.16862745098039217,0.2980392156862745,0.49411764705882355,D.t)
B.E4=new C.w(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,D.t)
B.acE=new C.w(1,0.3686274509803922,0.43137254901960786,0.5176470588235295,D.t)
B.bbX=new C.w(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,D.t)
B.acI=new C.w(1,0.23137254901960785,0.1843137254901961,0.14901960784313725,D.t)
B.acJ=new C.w(1,0.8509803921568627,0.788235294117647,0.6588235294117647,D.t)
B.qt=new C.w(1,0.9686274509803922,0.9568627450980393,0.9254901960784314,D.t)
B.bc8=new C.w(1,0.13333333333333333,0.1450980392156863,0.16862745098039217,D.t)
B.VQ=new C.w(1,0.4980392156862745,0.7215686274509804,1,D.t)
B.wL=new C.w(1,0.16470588235294117,0.1450980392156863,0.13725490196078433,D.t)
B.bcf=new C.w(1,0.9450980392156862,0.9294117647058824,0.8784313725490196,D.t)
B.Kl=new C.w(1,0.796078431372549,0.8156862745098039,0.8392156862745098,D.t)
B.VT=new C.w(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,D.t)
B.bcB=new C.w(1,0.7490196078431373,0.8901960784313725,1,D.t)
B.ad2=new C.w(1,0.10588235294117647,0.10588235294117647,0.11372549019607843,D.t)
B.ad3=new C.w(1,0.9490196078431372,0.9490196078431372,0.9333333333333333,D.t)
B.bdf=new C.w(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,D.t)
B.bdv=new C.w(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,D.t)
B.bdB=new C.w(1,0.8509803921568627,0.788235294117647,0.6274509803921569,D.t)
B.W0=new C.w(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,D.t)
B.adk=new C.w(1,0.10588235294117647,0.07058823529411765,0.03529411764705882,D.t)
B.bdZ=new C.w(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,D.t)
B.Ku=new C.w(1,0.8862745098039215,0.27058823529411763,0.35294117647058826,D.t)
B.wQ=new C.w(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,D.t)
B.wR=new C.w(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,D.t)
B.Kx=new C.w(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,D.t)
B.adD=new C.w(1,0.9686274509803922,0.9490196078431372,0.9019607843137255,D.t)
B.beZ=new C.w(1,0.2,0.21176470588235294,0.23137254901960785,D.t)
B.bf3=new C.w(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,D.t)
B.bf5=new C.w(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,D.t)
B.bfa=new C.w(1,0.9098039215686274,0.8941176470588236,0.8549019607843137,D.t)
B.adL=new C.w(1,0.7686274509803922,0.5411764705882353,0.11764705882352941,D.t)
B.bfi=new C.w(1,0.43529411764705883,0.7137254901960784,1,D.t)
B.bfs=new C.w(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,D.t)
B.adR=new C.w(1,0.18823529411764706,0.2,0.22745098039215686,D.t)
B.KD=new C.w(1,0.9372549019607843,0.9372549019607843,0.9176470588235294,D.t)
B.adT=new C.w(0.6666666666666666,1,0.16470588235294117,0.10196078431372549,D.t)
B.bfF=new C.w(1,0.9372549019607843,0.9137254901960784,0.8627450980392157,D.t)
B.bfI=new C.w(1,0.9294117647058824,0.9019607843137255,0.8156862745098039,D.t)
B.Wf=new C.w(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,D.t)
B.bfN=new C.w(1,0.12156862745098039,0.6392156862745098,0.2627450980392157,D.t)
B.bfP=new C.w(1,0.803921568627451,0.6274509803921569,0.2,D.t)
B.KG=new C.w(1,0.3607843137254902,0.7019607843137254,1,D.t)
B.ae2=new C.w(1,0.9568627450980393,0.9568627450980393,0.9411764705882353,D.t)
B.bgq=new C.w(1,0.8431372549019608,0.8,0.6588235294117647,D.t)
B.bh_=new C.w(1,0.9019607843137255,0.8745098039215686,0.796078431372549,D.t)
B.bh0=new C.w(1,0.30980392156862746,0.6588235294117647,1,D.t)
B.bh4=new C.w(1,1,0.6196078431372549,0.6196078431372549,D.t)
B.aec=new C.w(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,D.t)
B.KL=new C.w(1,0.47843137254901963,0.30980392156862746,0.1568627450980392,D.t)
B.KM=new C.w(1,0.6901960784313725,0.5411764705882353,0.3568627450980392,D.t)
B.Wq=new C.w(1,0.6078431372549019,0.8274509803921568,0.9607843137254902,D.t)
B.bhw=new C.w(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,D.t)
B.bhx=new C.w(1,0.23137254901960785,0.6078431372549019,1,D.t)
B.bhF=new C.w(1,0.8509803921568627,0.8235294117647058,0.7607843137254902,D.t)
B.bhH=new C.w(1,0.29411764705882354,0.29411764705882354,0.3137254901960784,D.t)
B.Er=new C.w(1,0.4196078431372549,0.2901960784313726,0.19607843137254902,D.t)
B.aei=new C.w(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,D.t)
B.bhM=new C.w(1,0.8117647058823529,0.788235294117647,0.7215686274509804,D.t)
B.bhU=new C.w(1,0.5450980392156862,0.4196078431372549,0.24705882352941178,D.t)
B.Xg=new C.Q(11,9,11,9)
B.afQ=new C.Q(14,8,14,24)
B.agM=new C.Q(4,18,4,8)
B.brS=new C.Q(4,4,8,4)
B.fq1=new C.x("Practice mode (no explanations, real shocks)",null,D.SP,null,null,null,null,null,null,null,null,null)
B.btg=new C.bE(1,D.bi,B.fq1,null)
B.flR=new C.x("Practice mode (no hints, no labels)",null,D.SP,null,null,null,null,null,null,null,null,null)
B.bth=new C.bE(1,D.bi,B.flR,null)
B.f00=new C.F(!0,D.aJ,null,null,null,null,18,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fen=new C.x("My House",null,B.f00,null,null,null,null,null,null,null,null,null)
B.eUo=new C.F(!0,D.ad,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f6H=new C.x("5 bedrooms, 3 bathrooms. Walk in and fix what is wrong.",null,B.eUo,null,null,null,null,null,null,null,null,null)
B.cTf=w([B.fen,D.bz,B.f6H],x.p)
B.bix=new C.fl(D.ah,D.e,D.j,D.F,null,D.p,null,0,B.cTf,null)
B.bty=new C.bE(1,D.bi,B.bix,null)
B.fe1=new C.x("Construction Lab",null,P.vT,null,null,null,null,null,null,null,null,null)
B.f3v=new C.x("Wire it. Plumb it. Fix a house.",null,D.hn,null,null,null,null,null,null,null,null,null)
B.cWE=w([B.fe1,B.f3v],x.p)
B.biE=new C.fl(D.ah,D.e,D.j,D.F,null,D.p,null,0,B.cWE,null)
B.btB=new C.bE(1,D.bi,B.biE,null)
B.flw=new C.x("Practice mode (no hints, real shocks and fires)",null,D.SP,null,null,null,null,null,null,null,null,null)
B.bug=new C.bE(1,D.bi,B.flw,null)
B.YD=new A.qQ(0,"tripped")
B.YE=new A.qQ(1,"noHotWater")
B.YF=new A.qQ(10,"wallHole")
B.YG=new A.qQ(11,"clogged")
B.LV=new A.qQ(2,"nutLeak")
B.LW=new A.qQ(3,"pexLeak")
B.YH=new A.qQ(5,"flicker")
B.YI=new A.qQ(6,"burntOutlet")
B.YJ=new A.qQ(7,"gfciTripped")
B.YK=new A.qQ(8,"runningToilet")
B.YL=new A.qQ(9,"dripFaucet")
B.bw3=new A.ps("back",0,10)
B.bw4=new A.ps("back",56,11)
B.bw5=new A.ps("left",32,9)
B.bw6=new A.ps("left",40,9)
B.bw7=new A.ps("right",32,10)
B.bw8=new A.ps("right",40,10)
B.ahS=new A.u7("tv",'Samsung Neo QLED 55"',"\ud83d\udcfa",48)
B.byN=new C.a0(63015,"MaterialIcons",!1)
B.bzg=new C.a0(63228,"MaterialIcons",!1)
B.ajS=new C.a0(983222,"MaterialIcons",!1)
B.akr=new C.a0(983775,"MaterialIcons",!1)
B.akx=new C.a0(983894,"MaterialIcons",!1)
B.bCb=new C.ae(D.eo,null,D.aJ,null,null,null)
B.fA9=new A.N(-0.4,4.2,-2.4)
B.bOj=new A.vp(B.fA9,"LIVE 120 V",D.bL)
B.bcD=new C.w(1,0.12156862745098039,0.10196078431372549,0.07058823529411765,D.t)
B.cOQ=w([D.Wh,B.bcD],x.O)
B.bRH=new C.a7(D.a3,D.a7,D.x,B.cOQ,null,null)
B.bT4=w(["flange","wax","toilet","bolts","valve","hosehot","hosecold","faucet","tail","trap","arm"],x.s)
B.fyX=new A.N(-57.8,-32,0)
B.b_p=new A.yo(0,"Outlet spot 1",!1,B.fyX,"low")
B.fzr=new A.N(-9.8,-32,0)
B.b_m=new A.yo(1,"Outlet spot 2",!1,B.fzr,"low")
B.fzJ=new A.N(38.2,-32,0)
B.b_s=new A.yo(2,"Outlet spot 3",!1,B.fzJ,"low")
B.fyD=new A.N(-25.8,0,0)
B.b_q=new A.yo(3,"Switch spot 1",!1,B.fyD,"switch")
B.fzm=new A.N(22.2,0,0)
B.b_o=new A.yo(4,"Switch spot 2",!1,B.fzm,"switch")
B.fAj=new A.N(-30,48,40)
B.b_r=new A.yo(5,"Ceiling light spot",!0,B.fAj,"light")
B.fuL=new A.N(30,48,40)
B.b_n=new A.yo(6,"Ceiling fan spot",!0,B.fuL,"fan")
B.tH=w([B.b_p,B.b_m,B.b_s,B.b_q,B.b_o,B.b_r,B.b_n],C.ax("O<yo>"))
B.cci=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
B.fzz=new A.N(11,4.6,-6)
B.fwk=new A.N(11,5.4,-7.85)
B.fz9=new A.N(3.4,5.4,-7.85)
B.aQx=new A.N(3.4,3.4,-7.85)
B.cck=w([B.fzz,B.fwk,B.fz9,B.aQx],x.o)
B.ege=new C.z(-9.5,4.6)
B.eit=new C.z(-5.9,2.3)
B.eo9=new C.z(8.8,4.4)
B.csi=w([B.ege,B.eit,B.eo9],x.f)
B.bwf=new A.u7("bangtv",'Beovision TV 77"',"\ud83d\udcfa",66)
B.bwd=new A.u7("sonytv",'Sony Bravia 75"',"\ud83d\udcfa",64)
B.bw9=new A.u7("lgtv",'LG OLED 65"',"\ud83d\udcfa",56)
B.bwb=new A.u7("appletv",'Apple TV 4K 50"',"\ud83d\udcfa",44)
B.bwc=new A.u7("lamp","Table lamp","\ud83d\udca1",0)
B.bwe=new A.u7("toaster","Toaster","\ud83c\udf5e",0)
B.bwa=new A.u7("hairdryer","Hair dryer","\ud83d\udc87",0)
B.asE=w([B.bwf,B.bwd,B.bw9,B.ahS,B.bwb,B.bwc,B.bwe,B.bwa],C.ax("O<u7>"))
B.ctc=w([61,63],x.t)
B.ctp=w([62,64],x.t)
B.b8o=new C.w(1,0.6039215686274509,0.30980392156862746,0.30980392156862746,D.t)
B.bhO=new C.w(1,0.30980392156862746,0.47843137254901963,0.3686274509803922,D.t)
B.cvb=w([B.DB,B.acE,B.b8o,B.bhO,B.acJ,D.t4],x.O)
B.asQ=w([72,73,74,75],x.t)
B.epo=new C.z(-25,-15)
B.e9h=new C.z(25,-15)
B.epn=new C.z(-25,15)
B.e9g=new C.z(25,15)
B.czD=w([B.epo,B.e9h,B.epn,B.e9g],x.f)
B.cHk=w([y.r,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.x,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
B.dW9={black:0}
B.I_=new C.eU(B.dW9,1,x.M)
B.bwv=new A.mc(51,"Black wire nut: HOT",B.I_,!1,"hot")
B.dWV={white:0}
B.HY=new C.eU(B.dWV,1,x.M)
B.bwk=new A.mc(52,"White wire nut: NEUTRAL",B.HY,!1,"neutral")
B.dWp={ground:0}
B.RS=new C.eU(B.dWp,1,x.M)
B.bwh=new A.mc(53,"Green ground connection",B.RS,!1,"ground")
B.cHt=w([B.bwv,B.bwk,B.bwh],x.r)
B.bww=new A.mc(51,"Black wire nut: HOT",B.I_,!1,"hot")
B.bwl=new A.mc(52,"White wire nut: NEUTRAL",B.HY,!1,"neutral")
B.bwi=new A.mc(53,"Green ground connection",B.RS,!1,"ground")
B.cHs=w([B.bww,B.bwl,B.bwi],x.r)
B.cHP=w(["Walnut","Blue grey","Brick red","Sage green","Sand","Charcoal"],x.s)
B.fx8=new A.N(-6.5,7.5,-7.85)
B.fxb=new A.N(-6.5,7.8,-3)
B.cI6=w([B.fx8,B.fxb],x.o)
B.b95=new C.w(1,0.9176470588235294,0.9490196078431372,0.9686274509803922,D.t)
B.bdK=new C.w(1,0.9647058823529412,0.9098039215686274,0.9098039215686274,D.t)
B.bcU=new C.w(1,0.9529411764705882,0.9215686274509803,0.7843137254901961,D.t)
B.att=w([B.A6,B.b95,B.bdK,B.bcU],x.O)
B.cIK=w([y.r,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
B.fB7=new A.N(-3.6,7.5,-7.85)
B.fwQ=new A.N(-3.6,4.2,-7.85)
B.cIR=w([B.fB7,B.fwQ],x.o)
B.dW8={blackLine:0,blackLoad:1}
B.aL3=new C.eU(B.dW8,2,x.M)
B.bwt=new A.mc(21,"Brass screw (top)",B.aL3,!1,"hot")
B.bwu=new A.mc(22,"Brass screw (bottom)",B.aL3,!1,"hot")
B.ahT=new A.mc(25,"Green screw: GROUND",B.RS,!1,"ground")
B.cJl=w([B.bwt,B.bwu,B.ahT],x.r)
B.fzP=new A.N(9.8,6,-7.85)
B.fwo=new A.N(9.8,7.5,-7.85)
B.fBk=new A.N(-8,7.5,-7.85)
B.fxV=new A.N(-8,1.5,-7.85)
B.cKm=w([B.fzP,B.fwo,B.fBk,B.fxV],x.o)
B.aQD=new A.N(5,1.8,-7.85)
B.fyx=new A.N(5,-0.1,-7.85)
B.fzf=new A.N(12.5,-0.1,-7.85)
B.cLl=w([B.aQD,B.fyx,B.fzf],x.o)
B.ftd=new A.N(3,3.1,-7.1)
B.aQy=new A.N(3,1.7,-7.1)
B.fzc=new A.N(3,1,-7.1)
B.fuB=new A.N(3.65,0.5,-7.1)
B.fvq=new A.N(4.3,1,-7.1)
B.fyt=new A.N(4.3,1.8,-7.1)
B.fBm=new A.N(5,1.8,-7.1)
B.cLN=w([B.ftd,B.aQy,B.fzc,B.fuB,B.fvq,B.fyt,B.fBm,B.aQD],x.o)
B.fAT=new A.N(0.6,11,-3.4)
B.fvQ=new A.N(0.6,3.2,-3.2)
B.fAA=new A.N(0.6,2.2,-1.9)
B.fvH=new A.N(0.6,0.7,-1.5)
B.cML=w([B.fAT,B.fvQ,B.fAA,B.fvH],x.o)
B.fv1=new A.N(0,8.3,0)
B.aQh=new A.N(0,3.9,0)
B.a1c=w([B.fv1,B.aQh],x.o)
B.cOa=w([y.r,"Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.","Join the house ground wire to the fan ground.","Join the house white wire to the fan white wire with a wire nut.","Join the house black wire to the fan black wire with a wire nut.","Push the wires up into the box and fasten the canopy to the ceiling.",y.E],x.s)
B.fA3=new A.N(-0.6,11,-3.4)
B.fws=new A.N(-0.6,3.2,-3.2)
B.fzw=new A.N(-0.6,2.2,-1.9)
B.fBA=new A.N(-0.6,0.7,-1.5)
B.cOs=w([B.fA3,B.fws,B.fzw,B.fBA],x.o)
B.cON=w([0,1,2,3,4,6,7,8],x.t)
B.e0b=new A.n8("flange","flange","Toilet flange",D.T,"The flange is fixed to the floor over the drain. Everything else sits on it.",!1,0)
B.d0C=w(["flange"],x.s)
B.e09=new A.n8("wax","wax","Wax ring",B.d0C,"The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.",!1,0)
B.dab=w(["wax"],x.s)
B.e06=new A.n8("toilet","toilet","Toilet",B.dab,"The toilet is lowered straight down onto the wax ring. The ring has to be there first.",!1,0)
B.d8H=w(["toilet"],x.s)
B.e0a=new A.n8("bolts","bolts","Toilet bolts",B.d8H,"The two bolts hold the toilet to the flange. Set the toilet first.",!1,2)
B.e07=new A.n8("tvalve","valve","Toilet shut-off valve",D.T,"The shut-off valve goes on the pipe that comes out of the wall.",!0,0)
B.d8N=w(["tvalve","toilet"],x.s)
B.e08=new A.n8("those","hosecold","Toilet supply hose",B.d8N,"The hose joins the valve to the toilet tank, so both must be there first.",!1,2)
B.aF9=new A.n8("faucet","faucet","Faucet",D.T,"The faucet goes through the hole in the counter.",!1,0)
B.aFc=new A.n8("vhot","valve","Hot shut-off valve (left)",D.T,y.g,!0,0)
B.aFa=new A.n8("vcold","valve","Cold shut-off valve (right)",D.T,y.g,!0,0)
B.d9C=w(["vhot","faucet"],x.s)
B.aFd=new A.n8("hhot","hosehot","Hot supply hose",B.d9C,"The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.d9z=w(["vcold","faucet"],x.s)
B.aFb=new A.n8("hcold","hosecold","Cold supply hose",B.d9z,"The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.aF8=new A.n8("tail","tail","Tailpiece",D.T,"The tailpiece hangs from the sink drain. It is the first piece of the drain.",!1,0)
B.d8A=w(["tail"],x.s)
B.aFe=new A.n8("trap","trap","P-trap",B.d8A,"The P-trap joins the tailpiece. Build the drain from the top down.",!1,1)
B.d8I=w(["trap"],x.s)
B.aFf=new A.n8("arm","arm","Trap arm",B.d8I,"The trap arm joins the trap and goes into the wall.",!1,1)
B.cKT=w([B.e0b,B.e09,B.e06,B.e0a,B.e07,B.e08,B.aF9,B.aFc,B.aFa,B.aFd,B.aFb,B.aF8,B.aFe,B.aFf],x.v)
B.e5C=new A.VS("bathroom","Bathroom",B.cKT,"Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.")
B.d2f=w([B.aF9,B.aFc,B.aFa,B.aFd,B.aFb,B.aF8,B.aFe,B.aFf],x.v)
B.e5D=new A.VS("kitchen","Kitchen",B.d2f,"Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.")
B.auf=w([B.e5C,B.e5D],C.ax("O<VS>"))
B.bwp=new A.mc(21,"LOAD hot (brass, taped)",D.HZ,!0,"load")
B.bwr=new A.mc(22,"LINE hot (brass)",B.I_,!1,"hot")
B.bwq=new A.mc(23,"LOAD neutral (silver, taped)",D.HZ,!0,"load")
B.bwj=new A.mc(24,"LINE neutral (silver)",B.HY,!1,"neutral")
B.cQr=w([B.bwp,B.bwr,B.bwq,B.bwj,B.ahT],x.r)
B.ftb=new A.N(8.2,0.9,-6.3)
B.fzC=new A.N(8.2,-0.1,-6.3)
B.fur=new A.N(8.2,-0.1,-7.85)
B.cQK=w([B.ftb,B.fzC,B.fur],x.o)
B.cQV=w([-0.28,0.28],x.n)
B.bvD=new A.Df("Oak",B.KM,"wood")
B.bvF=new A.Df("Dark wood",B.Er,"wood")
B.bgr=new C.w(1,0.5529411764705883,0.5647058823529412,0.5882352941176471,D.t)
B.bvH=new A.Df("Grey carpet",B.bgr,"carpet")
B.bfX=new C.w(1,0.3568627450980392,0.4980392156862745,0.6509803921568628,D.t)
B.bvE=new A.Df("Blue carpet",B.bfX,"carpet")
B.bdJ=new C.w(1,0.8470588235294118,0.803921568627451,0.7058823529411765,D.t)
B.bvB=new A.Df("Cream carpet",B.bdJ,"carpet")
B.bvG=new A.Df("White tile",B.acc,"tile")
B.bvC=new A.Df("Slate tile",B.V5,"tile")
B.auC=w([B.bvD,B.bvF,B.bvH,B.bvE,B.bvB,B.bvG,B.bvC],C.ax("O<Df>"))
B.fzx=new A.N(3,3.2,-7.85)
B.fBC=new A.N(3,4,-7.85)
B.fB8=new A.N(3,4.2,-7.4)
B.ftV=new A.N(3,3.95,-7)
B.cU3=w([B.fzx,B.fBC,B.fB8,B.ftV],x.o)
B.fzS=new A.N(6,0.2,0)
B.fyN=new A.N(6,2.6,0)
B.aR_=new A.N(8.6,2.6,0)
B.cVg=w([B.fzS,B.fyN,B.aR_],x.o)
B.fGh=new A.Je("outlet","\ud83d\udd0c","Wall outlet","Black to brass, white to silver",D.aJ)
B.fGe=new A.Je("switch","\ud83d\udca1","Light switch","Two blacks and a wire nut",D.aX)
B.fGf=new A.Je("gfci","\ud83d\udee1\ufe0f","GFCI outlet","LINE and LOAD near water",D.bs)
B.fGg=new A.Je("ptrap","\ud83e\udea0","Sink drain (P-trap)","Build a drain with a water seal",D.cu)
B.fGd=new A.Je("faucet","\ud83d\udeb0","Faucet supply lines","Hot left, cold right",D.cr)
B.fGc=new A.Je("house","\ud83c\udfd7\ufe0f","Build and fix a house","Stage by stage, then repair",D.by)
B.cVz=w([B.fGh,B.fGe,B.fGf,B.fGg,B.fGd,B.fGc],C.ax("O<Je>"))
B.eps=new C.z(-7,-7)
B.eci=new C.z(7,-7)
B.epr=new C.z(-7,7)
B.ech=new C.z(7,7)
B.cVX=w([B.eps,B.eci,B.epr,B.ech],x.f)
B.cVZ=w([-2.4,2.4],x.n)
B.cWf=w([-1.6,1.6],x.n)
B.adC=new C.w(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,D.t)
B.fCR=new A.zH("blackLine","Black \xb7 from the breaker",B.adC,D.c,"hot")
B.bbF=new C.w(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,D.t)
B.fCU=new A.zH("blackLoad","Black \xb7 to the light",B.bbF,D.c,"hot")
B.aRg=new A.zH("ground","Bare copper \xb7 ground",B.wR,D.c,"ground")
B.cWi=w([B.fCR,B.fCU,B.aRg],x.d)
B.b6n=new C.w(1,0.9294117647058824,0.9019607843137255,0.8392156862745098,D.t)
B.b4G=new C.w(1,0.9137254901960784,0.8274509803921568,0.8274509803921568,D.t)
B.b3W=new C.w(1,0.8352941176470589,0.8941176470588236,0.8156862745098039,D.t)
B.bb5=new C.w(1,0.9529411764705882,0.8901960784313725,0.6549019607843137,D.t)
B.b8y=new C.w(1,0.7254901960784313,0.7647058823529411,0.8666666666666667,D.t)
B.bg3=new C.w(1,0.5607843137254902,0.6392156862745098,0.6588235294117647,D.t)
B.auP=w([B.b6n,B.Vi,B.b4G,B.b3W,B.bb5,B.b8y,B.acy,B.bg3],x.O)
B.ahD=new A.qQ(4,"deadOutlet")
B.cYt=w([B.YD,B.YE,B.LV,B.LW,B.ahD,B.YH,B.YI,B.YJ,B.YK,B.YL,B.YF,B.YG],C.ax("O<qQ>"))
B.cYW=w([y.r,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.x,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
B.cZu=w([0.1,8.05],x.n)
B.fxu=new A.N(-0.35,11,-3.4)
B.fwx=new A.N(-0.35,3.2,-3.2)
B.fyV=new A.N(-0.35,2.2,-1.9)
B.fvD=new A.N(-0.35,0.7,-1.5)
B.cZI=w([B.fxu,B.fwx,B.fyV,B.fvD],x.o)
B.fB0=new A.N(5.2,7.5,-7.85)
B.fyJ=new A.N(5.2,4,-7.85)
B.cZO=w([B.fB0,B.fyJ],x.o)
B.a7P=new A.kT("look","Look",D.fa)
B.fFD=new A.kT("wall","Wall box",N.aj9)
B.fFC=new A.kT("ceiling","Ceiling box",D.qI)
B.fFM=new A.kT("fanbox","Fan box",M.Mq)
B.fFT=new A.kT("drill","Drill",D.xD)
B.fFN=new A.kT("cable","Cable roll",E.aiZ)
B.d0Y=w([B.a7P,B.fFD,B.fFC,B.fFM,B.fFT,B.fFN],x.b)
B.fFS=new A.kT("sheet","Drywall sheet",D.Bg)
B.fFG=new A.kT("knife","Drywall saw",D.Fp)
B.fFE=new A.kT("screw","Screw gun",Q.Fz)
B.fFV=new A.kT("tape","Tape",D.tw)
B.fFR=new A.kT("mud","Mud",Y.ZM)
B.fFZ=new A.kT("sand","Sander",D.Fn)
B.bBD=new C.a0(985109,"MaterialIcons",!1)
B.fFK=new A.kT("paint","Roller",B.bBD)
B.cYB=w([B.a7P,B.fFS,B.fFG,B.fFE,B.fFV,B.fFR,B.fFZ,B.fFK],x.b)
B.fFO=new A.kT("tester","Voltage tester",D.qM)
B.ajT=new C.a0(983223,"MaterialIcons",!1)
B.fFW=new A.kT("outlet","Outlet",B.ajT)
B.fFI=new A.kT("gfci","GFCI",D.tD)
B.fFU=new A.kT("switch","Switch",E.N1)
B.fFQ=new A.kT("light","Light",D.qO)
B.bBB=new C.a0(985094,"MaterialIcons",!1)
B.fFL=new A.kT("fan","Fan",B.bBB)
B.fFP=new A.kT("tv","TV",R.akg)
B.bzS=new C.a0(63571,"MaterialIcons",!1)
B.fFJ=new A.kT("lamp","Lamp",B.bzS)
B.byF=new C.a0(62944,"MaterialIcons",!1)
B.fFH=new A.kT("toaster","Toaster",B.byF)
B.bze=new C.a0(63209,"MaterialIcons",!1)
B.fFY=new A.kT("hairdryer","Hair dryer",B.bze)
B.fFX=new A.kT("flip","Flip switch",E.N1)
B.fFF=new A.kT("unplug","Unplug",B.ajS)
B.d3p=w([B.a7P,B.fFO,B.fFW,B.fFI,B.fFU,B.fFQ,B.fFL,B.fFP,B.fFJ,B.fFH,B.fFY,B.fFX,B.fFF],x.b)
B.cZR=w([B.d0Y,B.cYB,B.d3p],C.ax("O<ak<kT>>"))
B.aQO=new A.N(0,15.5,-3.6)
B.fxD=new A.N(0,20,-3.6)
B.fBq=new A.N(0,22.5,-2)
B.fwg=new A.N(0,22.5,1.1999999999999997)
B.fxJ=new A.N(0,21.1,1.6)
B.d_m=w([B.aQO,B.fxD,B.fBq,B.fwg,B.fxJ],x.o)
B.GB=w([],x.E)
B.vu=w([],x.a)
B.d01=w([],x.o)
B.d0V=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
B.fu9=new A.N(11.4,4.6,-6)
B.fxQ=new A.N(11.4,5,-7.85)
B.fvF=new A.N(2.6,5,-7.85)
B.fvV=new A.N(2.6,3.4,-7.85)
B.d1E=w([B.fu9,B.fxQ,B.fvF,B.fvV],x.o)
B.d1I=w(["hot","cold"],x.s)
B.fCT=new A.zH("black","Black \xb7 hot",B.adC,D.c,"hot")
B.fCS=new A.zH("white","White \xb7 neutral",B.wA,D.aA,"neutral")
B.PE=w([B.fCT,B.fCS,B.aRg],x.d)
B.eoT=new C.z("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
B.eqW=new C.z("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
B.egP=new C.z("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
B.ena=new C.z("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
B.eoc=new C.z("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
B.ehd=new C.z("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
B.eip=new C.z("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
B.d3B=w([B.eoT,B.eqW,B.egP,B.ena,B.eoc,B.ehd,B.eip],x.L)
B.epk=new C.z(-17,-9)
B.e8F=new C.z(17,-9)
B.epj=new C.z(-17,9)
B.e8E=new C.z(17,9)
B.d4a=w([B.epk,B.e8F,B.epj,B.e8E],x.f)
B.d4j=w([-30,30,-70,70],x.n)
B.d4k=w([-3,3],x.n)
B.nP=w([-72,-24,24],x.t)
B.d4o=w([-90,-50,50,90],x.n)
B.avJ=w([-9,9],x.n)
B.fvJ=new A.N(8.2,5,-7.85)
B.fyM=new A.N(8.2,1.2,-7.85)
B.fA4=new A.N(8.2,1,-7.4)
B.d5U=w([B.fvJ,B.fyM,B.fA4],x.o)
B.dWq={hot:0}
B.aL7=new C.eU(B.dWq,1,x.M)
B.e5A=new A.Ek(61,"Hot shut-off valve (left)",B.aL7,"Hot is always on the LEFT. The red hose goes on the left valve.")
B.dWe={cold:0}
B.aLf=new C.eU(B.dWe,1,x.M)
B.e5B=new A.Ek(62,"Cold shut-off valve (right)",B.aLf,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
B.e5y=new A.Ek(63,"Hot faucet inlet (left)",B.aL7,"The left faucet inlet takes the hot (red) hose.")
B.e5z=new A.Ek(64,"Cold faucet inlet (right)",B.aLf,"The right faucet inlet takes the cold (blue) hose.")
B.a1X=w([B.e5A,B.e5B,B.e5y,B.e5z],C.ax("O<Ek>"))
B.a1Z=w([-72,-48,-24,0,24],x.t)
B.d7c=w(["1 Rough-in","2 Drywall","3 Devices"],x.s)
B.euU=new C.bz("hot","Hot hose (red)",B.rU)
B.evy=new C.bz("cold","Cold hose (blue)",B.ns)
B.d86=w([B.euU,B.evy],C.ax("O<+(n,n,w)>"))
B.a7u=new A.N(15,2.6,0)
B.a21=w([B.aR_,B.a7u],x.o)
B.d8B=w(["tail","trap","arm"],x.s)
B.GF=w(["tv","lamp","toaster","hairdryer"],x.s)
B.d9f=w([y.r,"Hold the fixture up to the ceiling box. It has three short wires: black, white and green.","Join the house ground wire to the fixture ground.","Join the house white wire to the fixture white wire with a wire nut.","Join the house black wire to the fixture black wire with a wire nut.","Push the wires into the box and fasten the fixture to the ceiling.",y.E],x.s)
B.bOD=new A.jw("Breaker off, then test","Before you touch any wire, switch its breaker OFF, then check with a voltage tester that the wire is dead. A switch on the wall is not enough.")
B.bOq=new A.jw("Lock out, tag out","On a real job you put a lock or a note on the panel so nobody switches the power back on while you work.")
B.bOK=new A.jw("Water and power","Water carries electricity. Near sinks, tubs and outdoors the outlets must be GFCI, and wet hands never touch wires.")
B.bOv=new A.jw("Eyes, ears, lungs","Safety glasses for drilling and cutting, ear protection for loud tools, and a mask when you sand drywall dust or cut tile.")
B.bOJ=new A.jw("Shut the water off","Before you cut or loosen a pipe, close the main water valve and open a faucet to drain the line.")
B.d36=w([B.bOD,B.bOq,B.bOK,B.bOv,B.bOJ],x.Z)
B.bOW=new A.LT("Safety first","\ud83e\uddba",D.cr,B.d36)
B.bOL=new A.jw("Wire colours","Black is hot (it carries the power), white is neutral (the way back), bare copper or green is ground (the safety path). Red is a second hot, often used for a switched line.")
B.bOS=new A.jw("Screw colours","On an outlet the brass screw takes the hot wire, the silver screw takes the neutral and the green screw takes the ground.")
B.bOF=new A.jw("Wire size","14 gauge wire is for 15 amp circuits (lights and outlets). 12 gauge is for 20 amp circuits (kitchens). A thinner wire than the breaker allows can overheat and start a fire.")
B.bOz=new A.jw("Breakers","A breaker is a safety switch. It trips when a circuit carries too much current, so the wires never get hot enough to burn.")
B.bON=new A.jw("Wire nuts","Strip about 3/4 inch, twist the bare ends together clockwise, and screw on the nut until no bare copper shows. Give each wire a gentle tug.")
B.bOT=new A.jw("Switches","A switch cuts the hot wire only. The neutral goes straight through to the light.")
B.bOU=new A.jw("GFCI","A GFCI outlet watches the current going out and coming back. If a little leaks (through water or a person) it cuts the power in a fraction of a second.")
B.bOs=new A.jw("Ceiling fans","A fan shakes and is heavy. It needs a box that says fan rated, fixed to the joist, not a plain light box.")
B.bOu=new A.jw("Heights","Outlets sit about 16 inches from the floor. Switches sit about 48 inches up, where your hand falls.")
B.cX6=w([B.bOL,B.bOS,B.bOF,B.bOz,B.bON,B.bOT,B.bOU,B.bOs,B.bOu],x.Z)
B.bOZ=new A.LT("Wiring basics","\u26a1",D.cq,B.cX6)
B.bOr=new A.jw("Hot left, cold right","On a faucet, hot is on the left and cold on the right. Hot lines are marked red and cold lines blue.")
B.bOE=new A.jw("The P-trap","The curved pipe under a sink always holds a little water. That water seal stops sewer gas coming up the drain.")
B.bOP=new A.jw("Shut-off valves","Every sink and toilet has its own small valve, so you can stop the water to one fixture without turning off the whole house.")
B.bOx=new A.jw("Slip nuts","Drain joints are sealed by a washer and a slip nut. Tighten by hand and a quarter turn: too much force cracks plastic.")
B.bOw=new A.jw("Wax ring","A toilet sits on a wax ring that seals it to the floor drain. A toilet is lowered straight down once, and cannot be slid around.")
B.bOM=new A.jw("Drain slope","Drains fall about 1/4 inch per foot so water and waste keep moving. Too flat and it clogs, too steep and the water leaves the solids behind.")
B.bOR=new A.jw("Order of work","Plumbing goes from the top down on the drain (tailpiece, trap, arm) and from the wall out on the supply (valve, hose, fixture).")
B.c5n=w([B.bOr,B.bOE,B.bOP,B.bOx,B.bOw,B.bOM,B.bOR],x.Z)
B.bOX=new A.LT("Plumbing basics","\ud83d\udeb0",D.cu,B.c5n)
B.bOt=new A.jw("Studs","Studs are the vertical 2x4 posts inside a wall, 16 inches apart from centre to centre. Everything is fixed to them.")
B.bOH=new A.jw("Drilling studs","Holes for cable go through the middle of the stud, so a nail or screw cannot reach the wire.")
B.bOy=new A.jw("Drywall","A sheet is 4 feet wide, so its edges land on studs 48 inches apart. Screws go into studs only, just under the paper.")
B.bOB=new A.jw("Taping and mud","Seams get paper tape and three thin coats of joint compound, sanded smooth between coats, then primer and paint.")
B.bOQ=new A.jw("Order of a build","Frame, run the pipes and wires (rough-in), inspect, hang drywall, finish it, paint, then fit the fixtures and devices.")
B.cJi=w([B.bOt,B.bOH,B.bOy,B.bOB,B.bOQ],x.Z)
B.bOV=new A.LT("Framing and walls","\ud83c\udfe0",D.dT,B.cJi)
B.bOC=new A.jw("Voltage tester","A pen that glows or beeps near live wires. Test it on a known live outlet first, so you know it works.")
B.bOI=new A.jw("Wire strippers","Strip the plastic off without nicking the copper. A nick weakens the wire.")
B.bOO=new A.jw("Adjustable wrench","For nuts on valves and hoses. Hold the fitting steady with a second wrench so you do not twist the pipe.")
B.bOG=new A.jw("Drill and screw gun","A drill makes holes through studs. A screw gun sets drywall screws to the right depth.")
B.bOA=new A.jw("Level and tape measure","Measure twice, cut once. A level makes sure outlets, shelves and pipes are straight.")
B.dat=w([B.bOC,B.bOI,B.bOO,B.bOG,B.bOA],x.Z)
B.bOY=new A.LT("Tools","\ud83e\uddf0",D.bs,B.dat)
B.da7=w([B.bOW,B.bOZ,B.bOX,B.bOV,B.bOY],C.ax("O<LT>"))
B.bwn=new A.mc(21,"Brass screw (top): HOT side",B.I_,!1,"hot")
B.bwm=new A.mc(22,"Brass screw (bottom): HOT side",B.I_,!1,"hot")
B.bwo=new A.mc(23,"Silver screw (top): NEUTRAL side",B.HY,!1,"neutral")
B.bws=new A.mc(24,"Silver screw (bottom): NEUTRAL side",B.HY,!1,"neutral")
B.bwg=new A.mc(25,"Green screw: GROUND",B.RS,!1,"ground")
B.da8=w([B.bwn,B.bwm,B.bwo,B.bws,B.bwg],x.r)
B.dao=w(["Cream","Sky","Blush","Mint","Butter","Periwinkle","White","Slate"],x.s)
B.daz=w([0.72,-0.72],x.n)
B.db_=w(["inspect","hand","screwdriver","pliers","wrench","crimper","plunger","flapper","newoutlet","patch"],x.s)
B.dbZ=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Open the valves slowly and turn on the faucet. Check every connection for drips."],x.s)
B.dWo={flange:0,wax:1,toilet:2,bolts:3,valve:4,hosehot:5,hosecold:6,faucet:7,tail:8,trap:9,arm:10}
B.dec=new C.bp(B.dWo,["Flange","Wax ring","Toilet","Bolts","Shut-off valve","Hot hose","Cold hose","Faucet","Tailpiece","P-trap","Trap arm"],x.l)
B.bv0=new A.tZ("The living room has no power at all.","The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.","hand","Breaker reset. The living room has power again.",72,0,"")
B.bva=new A.tZ("There is no hot water.","The water heater breaker has tripped (orange). Reset it by hand.","hand","Breaker reset. The water heater is heating again.",75,0,"")
B.bv7=new A.tZ("Water is dripping under the kitchen sink.","The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.","wrench","Slip nut tightened. The drip stopped.",87,0,"")
B.bv_=new A.tZ("There is a wet spot on the wall behind the kitchen.","A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.","crimper","The joint is crimped again and it does not leak.",96,0,"")
B.bv4=new A.tZ("The outlet by the sofa does not work, but the lights do.","The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.","screwdriver","You tightened the loose screw. The outlet works again.",81,72,"Turn the living room breaker OFF first.")
B.bv1=new A.tZ("The living room light flickers.","A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.","pliers","You twisted the wire nut tight. The light is steady.",83,72,"Turn the living room breaker OFF first.")
B.bv2=new A.tZ("The kitchen outlet sparks and smells burnt.","The outlet has burnt. Turn the breaker off and replace it with a new outlet.","newoutlet","New outlet fitted. No more sparks.",84,73,"Turn the kitchen breaker OFF first.")
B.bv8=new A.tZ("The kitchen outlets are dead.","The GFCI outlet has tripped. Press its RESET button by hand.","hand","You pressed RESET. The kitchen outlets work.",84,0,"")
B.bv3=new A.tZ("The toilet keeps running.","The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.","flapper","New flapper fitted. The toilet stops running.",88,0,"")
B.bv6=new A.tZ("The kitchen faucet drips.","The faucet washer is worn. Tighten the packing nut with the wrench, then check.","wrench","The faucet is sealed. No more drips.",85,0,"")
B.bv5=new A.tZ("There is a hole in the wall.","A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.","patch","Patch fitted. Now it only needs mud, sanding and paint.",95,0,"")
B.bv9=new A.tZ("The kitchen sink drains very slowly.","The drain is clogged. Use the plunger.","plunger","The clog is gone. The sink drains fast.",94,0,"")
B.vy=new C.dQ([B.YD,B.bv0,B.YE,B.bva,B.LV,B.bv7,B.LW,B.bv_,B.ahD,B.bv4,B.YH,B.bv1,B.YI,B.bv2,B.YJ,B.bv8,B.YK,B.bv3,B.YL,B.bv6,B.YF,B.bv5,B.YG,B.bv9],C.ax("dQ<qQ,tZ>"))
B.dg1=new C.bp(D.ib,[],C.ax("bp<G,db>"))
B.dWm={tail:0,trap:1,arm:2}
B.dgg=new C.bp(B.dWm,["Tailpiece","P-trap","Trap arm"],x.l)
B.dVQ={bed:0,nightstand:1,wardrobe:2,desk:3,rug:4,sofa:5,armchair:6,coffee:7,tvstand:8,dining:9,chair:10,plant:11,lamp:12,console:13,shelf:14}
B.bvT=new A.q8("Bed","\ud83d\udecf\ufe0f",60,80)
B.bvX=new A.q8("Night table","\ud83e\ude91",16,16)
B.bw0=new A.q8("Wardrobe","\ud83d\udeaa",44,20)
B.bvR=new A.q8("Desk","\ud83d\udda5\ufe0f",48,24)
B.bvN=new A.q8("Rug","\ud83d\udfe5",70,50)
B.bvU=new A.q8("Sofa","\ud83d\udecb\ufe0f",80,32)
B.bw_=new A.q8("Armchair","\ud83d\udcba",30,30)
B.bvQ=new A.q8("Coffee table","\u2615",40,24)
B.bvY=new A.q8("TV stand","\ud83d\udcfa",56,18)
B.bvO=new A.q8("Dining table","\ud83c\udf7d\ufe0f",56,36)
B.bvP=new A.q8("Chair","\ud83e\ude91",18,18)
B.bvZ=new A.q8("Plant","\ud83e\udeb4",14,14)
B.bvV=new A.q8("Floor lamp","\ud83d\udca1",10,10)
B.bvS=new A.q8("Console table","\ud83d\uddc4\ufe0f",44,14)
B.bvW=new A.q8("Bookshelf","\ud83d\udcda",36,12)
B.yx=new C.bp(B.dVQ,[B.bvT,B.bvX,B.bw0,B.bvR,B.bvN,B.bvU,B.bw_,B.bvQ,B.bvY,B.bvO,B.bvP,B.bvZ,B.bvV,B.bvS,B.bvW],C.ax("bp<n,q8>"))
B.fzO=new A.N(0,0,-1.2)
B.dU7=new A.db("Electrical box","The box is ready. Pull a cable to it, then wire a device.",B.fzO,9)
B.dgD=new C.dQ([3,B.dU7],C.ax("dQ<G,db>"))
B.aEc={inspect:0,hand:1,screwdriver:2,pliers:3,wrench:4,crimper:5,plunger:6,flapper:7,newoutlet:8,patch:9}
B.Qc=new C.bp(B.aEc,["Look and test","Hand","Screwdriver","Pliers","Wrench","Crimp tool","Plunger","New flapper","New outlet","Drywall patch"],x.l)
B.bz_=new C.a0(63072,"MaterialIcons",!1)
B.dgH=new C.bp(B.aEc,[D.fa,B.akr,Q.Fz,D.Fp,D.qJ,B.bz_,W.a_h,D.pD,B.ajT,L.va],C.ax("bp<n,a0>"))
B.aCW=new A.a5E(null)
B.fBb=new A.N(16,2.6,0)
B.dTR=new A.db("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",B.fBb,8)
B.ftI=new A.N(0,3,-6)
B.dTS=new A.db("Wall","The copper supply pipes come out of the wall here.",B.ftI,24)
B.fzt=new A.N(8.2,1,-7)
B.dTT=new A.db("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",B.fzt,7)
B.ftf=new A.N(0,0,40)
B.dTU=new A.db("The room","A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.",B.ftf,190)
B.fxp=new A.N(-2.4,11.5,-3.6)
B.dTV=new A.db("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",B.fxp,7)
B.fuE=new A.N(-3.6,4,-7.8)
B.dTW=new A.db("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",B.fuE,4.5)
B.fys=new A.N(0,0.5,2)
B.dTX=new A.db("Voltage tester","A tester that glows when it touches live power.",B.fys,6)
B.dTY=new A.db("Pipe joint","A crimped joint in the hot water line.",B.aQx,4)
B.fxG=new A.N(0,-0.2,0.2)
B.dTZ=new A.db("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",B.fxG,8)
B.fAw=new A.N(-4.6,0.5,-3.4)
B.dU_=new A.db("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",B.fAw,8)
B.fz4=new A.N(0,-0.3,3.2)
B.dU0=new A.db("White wire nut: NEUTRAL","Twist the house white wire and the fixture white wire together under this cap.",B.fz4,6)
B.fyk=new A.N(4.6,0.5,-3.4)
B.dU1=new A.db("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",B.fyk,8)
B.fup=new A.N(2.4,11.5,-3.6)
B.dU2=new A.db("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",B.fup,7)
B.fBM=new A.N(0.8,-0.8,1.2)
B.dU3=new A.db("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",B.fBM,7)
B.fxn=new A.N(10.05,5.2,-7.5)
B.dU4=new A.db("Water heater breaker","A big circuit for the water heater. It is ON.",B.fxn,3.5)
B.aQ6=new A.N(0,40,0)
B.dU5=new A.db("Back wall",y.s,B.aQ6,140)
B.fzn=new A.N(3,3.8,-7.4)
B.dU6=new A.db("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",B.fzn,4.5)
B.a7n=new A.N(0,6,0)
B.dU8=new A.db("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",B.a7n,10)
B.fAn=new A.N(-60,40,50)
B.dU9=new A.db("Left wall",y.s,B.fAn,140)
B.fuY=new A.N(3,1,0)
B.dUa=new A.db("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",B.fuY,11)
B.ftu=new A.N(0,20,5)
B.dUb=new A.db("The room","A bare room with the water supply stubs and the drain stub already in the wall and floor.",B.ftu,120)
B.ftU=new A.N(0,-8,0)
B.dUc=new A.db("Cabinet","The cabinet under the sink where the drain is built.",B.ftU,22)
B.ftP=new A.N(0,4,-8)
B.dUd=new A.db("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",B.ftP,18)
B.aQI=new A.N(0,-0.2,5.1)
B.dUe=new A.db("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",B.aQI,5)
B.ftl=new A.N(0,11,0)
B.dUf=new A.db("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",B.ftl,16)
B.ftJ=new A.N(0,40,12)
B.dUg=new A.db("Front door","Tap the door to go inside the house.",B.ftJ,220)
B.w4=new A.N(0,0,0)
B.dUh=new A.db("Drywall","The wall surface. A hole is cut in it for the electrical box.",B.w4,22)
B.fvy=new A.N(60,40,50)
B.dUi=new A.db("Right wall",y.s,B.fvy,140)
B.fto=new A.N(0,14,-3)
B.dUj=new A.db("Counter and sink","The faucet is mounted through a hole in the counter.",B.fto,20)
B.fwH=new A.N(0,-1.9,5)
B.dUk=new A.db("GREEN screw: GROUND","The green screw is for the bare copper ground wire.",B.fwH,5)
B.ftN=new A.N(0,47,-2)
B.dUl=new A.db("Top and bottom plate","The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.",B.ftN,70)
B.fth=new A.N(0,0,-8)
B.dUm=new A.db("Wall","Behind the wall the drain pipe goes down to the sewer line.",B.fth,22)
B.fts=new A.N(0,19,-3)
B.dUn=new A.db("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",B.fts,14)
B.fvO=new A.N(3.5,2,-7.2)
B.dUo=new A.db("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",B.fvO,9)
B.fwT=new A.N(10.05,5.7,-7.5)
B.dUp=new A.db("Kitchen breaker","Protects the kitchen outlets. It is ON.",B.fwT,3.5)
B.fxw=new A.N(4,6,-2.5)
B.dUq=new A.db("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",B.fxw,9)
B.fyp=new A.N(-1,0.6,4.3)
B.dUr=new A.db("SILVER screw: NEUTRAL side",y.o,B.fyp,5)
B.a7q=new A.N(0,3.7,0)
B.dUs=new A.db("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",B.a7q,7)
B.Tf=new A.N(0,-1,-0.6)
B.dUt=new A.db("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",B.Tf,5)
B.fxA=new A.N(-1.5,-0.3,3.2)
B.dUu=new A.db("Black wire nut: HOT","Twist the house black wire and the fixture black wire together under this cap.",B.fxA,6)
B.fwS=new A.N(-1.9,0,-2)
B.dUv=new A.db("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",B.fwS,16)
B.fzN=new A.N(-1,-0.8,4.3)
B.dUw=new A.db("SILVER screw: NEUTRAL side",y.o,B.fzN,5)
B.fBp=new A.N(6,3,-7.8)
B.dUx=new A.db("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",B.fBp,14)
B.fzQ=new A.N(1,0.6,4.3)
B.dUy=new A.db("BRASS screw: HOT side",y.u,B.fzQ,5)
B.fA5=new A.N(0,-0.2,4.9)
B.dUz=new A.db("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",B.fA5,7)
B.fBJ=new A.N(9.55,4.7,-7.5)
B.dUA=new A.db("Spare breaker","A spare circuit.",B.fBJ,3.5)
B.ftv=new A.N(0,20,8)
B.dUB=new A.db("Vanity and counter","The cabinet that holds the sink. The pipes live inside it.",B.ftv,70)
B.fAW=new A.N(-3.2,1.3,-7.8)
B.dUC=new A.db("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",B.fAW,4.5)
B.fA6=new A.N(1.5,-0.3,3.2)
B.dUD=new A.db("Green ground connection","Join the bare copper house ground wire to the green fixture ground wire.",B.fA6,6)
B.fwL=new A.N(12,2.6,0)
B.dUE=new A.db("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",B.fwL,9)
B.fy6=new A.N(0,6.5,-7.8)
B.dUF=new A.db("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",B.fy6,16)
B.fyC=new A.N(11.2,2.3,-6)
B.dUG=new A.db("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",B.fyC,9)
B.fz7=new A.N(9.55,5.2,-7.5)
B.dUH=new A.db("Bathroom breaker","Protects the bathroom. It is ON.",B.fz7,3.5)
B.fwY=new A.N(5.2,3.9,-7.8)
B.dUI=new A.db("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",B.fwY,4.5)
B.ftK=new A.N(0,40,-3)
B.dUJ=new A.db("Electrical cable","Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.",B.ftK,80)
B.fxl=new A.N(-8.4,1.2,-6.4)
B.dUK=new A.db("Sofa","Just furniture, to show the size of the room.",B.fxl,10)
B.dUL=new A.db("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",B.aQI,6)
B.fwv=new A.N(0,4,-7.8)
B.dUM=new A.db("Wall","The drywall of the back wall.",B.fwv,16)
B.fAY=new A.N(0,0,0.6)
B.dUN=new A.db("Canopy","The round cover that hides the box and the wire connections against the ceiling.",B.fAY,8)
B.dUO=new A.db("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",B.w4,30)
B.a7s=new A.N(8.9,2.6,0)
B.dUP=new A.db("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",B.a7s,7)
B.fz6=new A.N(1,-0.8,4.3)
B.dUQ=new A.db("BRASS screw: HOT side",y.u,B.fz6,5)
B.fwj=new A.N(0.6,1.5,-1.8)
B.dUR=new A.db("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",B.fwj,8)
B.fwC=new A.N(9.8,5,-7.5)
B.dUS=new A.db("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",B.fwC,6)
B.fxy=new A.N(-4,6,-2.5)
B.dUT=new A.db("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",B.fxy,9)
B.bF3=new C.ae(D.ee,18,D.bc,null,null,null)
B.e0U=new C.C(D.fw,B.bF3,null)
B.e0W=new C.C(D.fw,F.alX,null)
B.e8s=new C.z(B.wA,B.w4)
B.e9G=new C.z(64,2.4)
B.ebc=new C.z("LOAD (taped)",D.dj)
B.edM=new C.z(63,-2.4)
B.eev=new C.z(51,B.ab5)
B.bcp=new C.w(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,D.t)
B.ekZ=new C.z("SILVER \xb7 NEUTRAL",B.bcp)
B.fB6=new A.N(-1.5,0,0)
B.el7=new C.z(B.K6,B.fB6)
B.b4Z=new C.w(1,0.8196078431372549,0.29411764705882354,0.22745098039215686,D.t)
B.emB=new C.z(52,B.b4Z)
B.b9n=new C.w(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,D.t)
B.ent=new C.z("GREEN \xb7 GROUND",B.b9n)
B.eoo=new C.z("main","Main water valve")
B.adr=new C.w(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,D.t)
B.fBN=new A.N(1.5,0,0)
B.erw=new C.z(B.adr,B.fBN)
B.b60=new C.w(1,0.6039215686274509,0.4196078431372549,0.047058823529411764,D.t)
B.etF=new C.z("BRASS \xb7 HOT",B.b60)
B.eu7=new C.z(53,B.adr)
B.euK=new C.bz(61,-4.6,B.rU)
B.ews=new C.bz(62,4.6,B.ns)
B.ey4=new C.cL([0,17.1,16.4,5.8])
B.ey7=new C.cL([0,-0.1,16.4,4.2])
B.ez8=new C.cL([15.6,9,14.8,22])
B.ezc=new C.cL([-15.6,9,14.8,22])
B.eFM=new C.at(126,70)
B.ePu=new C.F(!0,D.c,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aNe=new C.F(!0,D.aJ,null,null,null,null,12,D.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eQI=new C.F(!0,D.ay,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eSf=new C.F(!0,D.c,null,null,null,null,12.5,D.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aNv=new C.F(!0,D.ad,null,null,null,null,12,D.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a6p=new C.F(!0,D.ad,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eUY=new C.F(!0,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.Im=new C.F(!0,D.aJ,null,null,null,null,12.5,D.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eVt=new C.F(!0,D.c,null,null,null,null,11.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eWV=new C.F(!0,D.fh,null,null,null,null,11.5,D.O,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eX_=new C.F(!0,D.ey,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eY4=new C.F(!0,D.aR,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f1w=new C.F(!0,D.c,null,null,null,null,13.5,D.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f2b=new C.F(!0,D.b2,null,null,null,null,14.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ePI=new C.F(!0,D.w,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f3m=new C.x("Open the 3D lesson",null,B.ePI,null,null,null,null,null,null,null,null,null)
B.f4b=new C.x("Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.",null,E.a6g,null,null,null,null,null,null,null,null,null)
B.eQ4=new C.F(!0,null,null,null,null,null,40,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f4Z=new C.x("\ud83c\udfe0",null,B.eQ4,null,null,null,null,null,null,null,null,null)
B.f5j=new C.x("You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.",null,D.zb,null,null,null,null,null,null,null,null,null)
B.f5A=new C.x("A different house",null,null,null,null,null,null,null,null,null,null,null)
B.f6q=new C.x("Start this job again",null,null,null,null,null,null,null,null,null,null,null)
B.fbf=new C.x("The customer says\u2026",null,D.dB,null,null,null,null,null,null,null,null,null)
B.fbY=new C.x("What the house needs",null,D.dB,null,null,null,null,null,null,null,null,null)
B.fc8=new C.x("Next job",null,null,null,null,null,null,null,null,null,null,null)
B.fcp=new C.x("New job",null,null,null,null,null,null,null,null,null,null,null)
B.aNQ=new C.F(!0,D.cr,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fcw=new C.x("Job over",null,B.aNQ,null,null,null,null,null,null,null,null,null)
B.fcM=new C.x("Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.",null,D.zb,null,null,null,null,null,null,null,null,null)
B.fcS=new C.x("Learn the trades",null,P.vT,null,null,null,null,null,null,null,null,null)
B.fdq=new C.x("Practice mode: no hints. You will only hear from me when something is wrong.",null,T.SB,null,null,null,null,null,null,null,null,null)
B.fdD=new C.x("New call",null,null,null,null,null,null,null,null,null,null,null)
B.fdI=new C.x("Job done! \ud83c\udf89",null,H.SE,null,null,null,null,null,null,null,null,null)
B.feR=new C.x("Next call",null,null,null,null,null,null,null,null,null,null,null)
B.ffe=new C.x("Plug in",null,D.dB,null,null,null,null,null,null,null,null,null)
B.ffE=new C.x("Look around",null,null,null,null,null,null,null,null,null,null,null)
B.fgb=new C.x("The customer wants:",null,D.a6z,null,null,null,null,null,null,null,null,null)
B.fgl=new C.x('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.',null,E.a6g,null,null,null,null,null,null,null,null,null)
B.fiL=new C.x("Call over",null,B.aNQ,null,null,null,null,null,null,null,null,null)
B.fiS=new C.x("\u23cf Unplug",null,K.CG,null,null,null,null,null,null,null,null,null)
B.fja=new C.x("A different call",null,null,null,null,null,null,null,null,null,null,null)
B.fjZ=new C.x("Job complete! \ud83c\udf89",null,H.SE,null,null,null,null,null,null,null,null,null)
B.fl0=new C.x("All fixed! \ud83c\udf89",null,H.SE,null,null,null,null,null,null,null,null,null)
B.aPg=new C.x("Stay",null,null,null,null,null,null,null,null,null,null,null)
B.aPi=new C.x("A different job",null,null,null,null,null,null,null,null,null,null,null)
B.foR=new C.x("The job",null,D.dB,null,null,null,null,null,null,null,null,null)
B.fpF=new C.x("Stay in the room",null,null,null,null,null,null,null,null,null,null,null)
B.fta=new A.N(3.6,2.6,0.6)
B.ftc=new A.N(0,56,0.9)
B.fte=new A.N(0,0,3)
B.a7m=new A.N(0,0,4)
B.ftg=new A.N(0,0,-1)
B.fti=new A.N(0,100,30)
B.ftj=new A.N(0,114,8)
B.ftk=new A.N(0,114,-34)
B.ftm=new A.N(0,127,-13)
B.aQ4=new A.N(0,14,0)
B.ftn=new A.N(0,14,2)
B.ftp=new A.N(0,16,0)
B.ftq=new A.N(0,17,0)
B.ftr=new A.N(0,19,14)
B.w5=new A.N(0,1,0)
B.ftt=new A.N(0,20,0)
B.ftw=new A.N(0,22,-11)
B.ftx=new A.N(0,22,-12)
B.fty=new A.N(0,22,-39)
B.ftz=new A.N(0,23,0)
B.ftA=new A.N(0,24,0)
B.aQ5=new A.N(0,28,0)
B.ftB=new A.N(0,28,-8)
B.ftC=new A.N(0,2,18)
B.ftD=new A.N(0,30,0)
B.ftE=new A.N(0,30,60)
B.ftF=new A.N(0,31,-6)
B.ftG=new A.N(0,34,0)
B.ftH=new A.N(0,36,0)
B.ftL=new A.N(0,40,-6)
B.ftM=new A.N(0,46,0)
B.ftO=new A.N(0,48,0)
B.Tc=new A.N(0,4,-2)
B.ftQ=new A.N(0,50,-10)
B.ftR=new A.N(0,58,0)
B.ftS=new A.N(0,5,4)
B.Td=new A.N(0,8,0)
B.aQ7=new A.N(0,9,0)
B.aQ8=new A.N(0,9,-3)
B.a7o=new A.N(0,-4,28)
B.ftT=new A.N(0,-4,-20)
B.ftW=new A.N(100,52,74)
B.ftX=new A.N(10,12,10)
B.ftY=new A.N(10,8,10)
B.ftZ=new A.N(11,1,11)
B.fu_=new A.N(120,0,70)
B.fu0=new A.N(120,40,70)
B.fu1=new A.N(120,62,70)
B.aQ9=new A.N(12,1,12)
B.fu2=new A.N(12,9,18)
B.fu3=new A.N(13,0,0)
B.fu4=new A.N(13,15,2)
B.fu5=new A.N(13,28,3)
B.fu6=new A.N(0,0.52,2.35)
B.fu7=new A.N(14,17,4)
B.fu8=new A.N(14,20,-28)
B.fua=new A.N(16,10,10)
B.fub=new A.N(16,16,16)
B.fuc=new A.N(18,18,14)
B.fud=new A.N(18,22,2)
B.fue=new A.N(18,28,16)
B.fuf=new A.N(18,2,18)
B.fug=new A.N(18,9,11)
B.fuh=new A.N(19,13,7)
B.fui=new A.N(70,0.6,50)
B.fuj=new A.N(0,3,-6.5)
B.fuk=new A.N(-4.6,1.5,-3.6)
B.ful=new A.N(0,-13.5,-1.5)
B.fum=new A.N(4,10,3.5)
B.Te=new A.N(1,0,0)
B.fun=new A.N(1,26,14)
B.fuo=new A.N(1,28,14)
B.fuq=new A.N(1,0.9,0.06)
B.fus=new A.N(1.6,15,1.6)
B.aQa=new A.N(20,14,7)
B.fut=new A.N(22,14,0)
B.fuu=new A.N(22,14,2)
B.fuv=new A.N(22,3,10)
B.fuw=new A.N(240,100,40)
B.aQb=new A.N(24,6,14)
B.fux=new A.N(260,3,56)
B.fuy=new A.N(262,3,5)
B.aQc=new A.N(26,4,22)
B.fuz=new A.N(26,72,26)
B.fuA=new A.N(26,-34,96)
B.fuC=new A.N(-0.1,0,0)
B.fuD=new A.N(2,13,2)
B.aQd=new A.N(2,23,12)
B.aQe=new A.N(2,28,22)
B.fuF=new A.N(64,10,-1.4)
B.fuG=new A.N(19.6,0,-1.5)
B.fuH=new A.N(244,6,1.4)
B.aQf=new A.N(0,56,1.3)
B.fuI=new A.N(30,16,30)
B.aQg=new A.N(30,16,72)
B.fuJ=new A.N(30,24,8)
B.fuK=new A.N(30,28,18)
B.fuM=new A.N(32,2,20)
B.fuN=new A.N(33,11,10)
B.fuO=new A.N(34,0,150)
B.fuP=new A.N(34,30,1)
B.fuQ=new A.N(34,30,150)
B.fuR=new A.N(34,33,150)
B.fuS=new A.N(-1,-1.7,2.3)
B.fuT=new A.N(36,30,1)
B.fuU=new A.N(36,60,12)
B.fuV=new A.N(37,16,0)
B.fuW=new A.N(-0.2,-0.3,-0.4)
B.fuX=new A.N(0,48.6,55)
B.fuZ=new A.N(3,22,2)
B.fv_=new A.N(3,26,3)
B.a7p=new A.N(3,3,3)
B.fv0=new A.N(3,5,3)
B.fv2=new A.N(40,1,14)
B.fv3=new A.N(40,28,1)
B.fv4=new A.N(40,2,24)
B.fv5=new A.N(44,2,14)
B.fv6=new A.N(44,4,14)
B.fv7=new A.N(44,72,20)
B.fv8=new A.N(0.9,0,4.4)
B.fv9=new A.N(8.2,1.9,-7.55)
B.fva=new A.N(46,26,2)
B.fvb=new A.N(48,2,24)
B.fvc=new A.N(0,41,11.6)
B.fvd=new A.N(0,-47.25,-2.25)
B.fve=new A.N(0.6,68,0.4)
B.fvf=new A.N(0,1.59,0.14)
B.fvg=new A.N(25,79,1.4)
B.fvh=new A.N(1,0,-1.2)
B.fvi=new A.N(50,30,26)
B.fvj=new A.N(52,2,28)
B.fvk=new A.N(54,5,18)
B.fvl=new A.N(56,18,18)
B.fvm=new A.N(56,2,36)
B.fvn=new A.N(58,9,74)
B.fvo=new A.N(0,-0.8,0.9)
B.fvp=new A.N(11.9,0,-8)
B.aQi=new A.N(1.6,1.6,0.4)
B.fvr=new A.N(0.16,0.32,0.07)
B.aQj=new A.N(5,12,26)
B.fvs=new A.N(5,1,2)
B.fvt=new A.N(5,9,8)
B.fvu=new A.N(0,14.3,-1.5)
B.aQk=new A.N(-13,8.6,-9.5)
B.fvv=new A.N(60,12,80)
B.fvw=new A.N(60,30,26)
B.fvx=new A.N(60,30,3)
B.fvz=new A.N(62,18,20)
B.fvA=new A.N(62,22,6)
B.fvB=new A.N(62,2,28)
B.fvC=new A.N(64,10,0)
B.fvE=new A.N(34,84,1.2)
B.aQl=new A.N(6,14,20)
B.aQm=new A.N(6,14,32)
B.fvG=new A.N(6,4,4)
B.fvI=new A.N(0,-0.2,0.14)
B.fvK=new A.N(0.3,38,2)
B.fvL=new A.N(72,-17,70)
B.fvM=new A.N(12,5,0.4)
B.fvN=new A.N(1.6,1.7,3.6)
B.fvP=new A.N(-72.8,0,55)
B.fvR=new A.N(25,79,0.2)
B.fvS=new A.N(7,0,-8)
B.fvT=new A.N(7,2,7)
B.aQn=new A.N(7,3,0)
B.fvU=new A.N(7,8,3)
B.fvW=new A.N(0,11,9.2)
B.fvX=new A.N(-3.2,1.3,-7.82)
B.fvY=new A.N(80,16,32)
B.fvZ=new A.N(80,26,8)
B.aQo=new A.N(147,1.5,3.5)
B.fw_=new A.N(82,46,3)
B.aQp=new A.N(-6.5,6.9,-3)
B.fw0=new A.N(8,40,12.6)
B.fw1=new A.N(0,-48.6,55)
B.fw2=new A.N(5.5,8.5,3)
B.fw3=new A.N(2.6,2.6,1.8)
B.fw4=new A.N(0,0,0.26)
B.fw5=new A.N(420,1.2,320)
B.fw6=new A.N(8,2,6)
B.aQq=new A.N(8,2,8)
B.fw7=new A.N(8,4,4)
B.fw8=new A.N(8,9,8)
B.fw9=new A.N(15,19,0.5)
B.fwa=new A.N(0,3,10.5)
B.fwb=new A.N(0.4,0.38,0.12)
B.fwc=new A.N(0,0,-0.43)
B.aQr=new A.N(11.2,4.5,-6)
B.aQs=new A.N(1.2,96,112)
B.aQt=new A.N(0.08,3.8,2.4)
B.fwd=new A.N(9,5,9)
B.fwe=new A.N(0,58,12.4)
B.fwf=new A.N(1.5,1.3,0.6)
B.fwh=new A.N(0,-1.78,0.27)
B.fwi=new A.N(0,0.62,0)
B.fwl=new A.N(20,11.5,0)
B.fwm=new A.N(3.2,0.12,-6.7)
B.fwn=new A.N(12,0,-8.1)
B.fwp=new A.N(1.25,0.28,0.1)
B.fwq=new A.N(0,36,10.2)
B.fwr=new A.N(24,0.08,16)
B.fwt=new A.N(0,4,-7.9)
B.fwu=new A.N(11.9,0,8)
B.fww=new A.N(21,1.4,8)
B.fwy=new A.N(71.2,46.6,55)
B.fwz=new A.N(3,3.28,-7.2)
B.fwA=new A.N(-6.1,1.2,-6.4)
B.fwB=new A.N(1.4,26,0.4)
B.fwD=new A.N(2.8,3.4,2.4)
B.fwE=new A.N(0,-45.5,0.5)
B.fwF=new A.N(1.8,4,1)
B.fwG=new A.N(5,1.6,0.5)
B.fwI=new A.N(0.1,-2,2.4)
B.fwJ=new A.N(0,0.2,2.8)
B.fwK=new A.N(6,10,1.4)
B.fwM=new A.N(43,23,0.3)
B.fwN=new A.N(18.9,2.6,0)
B.fwO=new A.N(-12,0,-8.1)
B.fwP=new A.N(11.8,4,0)
B.aQu=new A.N(-71.7,6,55)
B.fwR=new A.N(5.6,0.3,1.9)
B.fwU=new A.N(52,8,0.4)
B.fwV=new A.N(4.6,7.6,3)
B.fwW=new A.N(-1,0,-1.2)
B.fwX=new A.N(0,1.7,0)
B.fwZ=new A.N(-1,0,1.5)
B.fx_=new A.N(5,8,0.4)
B.fx0=new A.N(5,2.2,0.8)
B.fx1=new A.N(0.18,0.12,0.08)
B.fx2=new A.N(147,3,1.4)
B.fx3=new A.N(4,16.2,0)
B.fx4=new A.N(10,15,0.5)
B.fx5=new A.N(144,5,0.7)
B.fx6=new A.N(0,34,1.1)
B.fx7=new A.N(1.2,-1.7,2.3)
B.fx9=new A.N(0.82,1.7,0.3)
B.fxa=new A.N(-0.12,0,0)
B.fxc=new A.N(3.5,94,0.2)
B.fxd=new A.N(1.1,2.05,0.04)
B.fxe=new A.N(25,79,1.2)
B.fxf=new A.N(10,14,0.5)
B.fxg=new A.N(5,8,0.5)
B.fxh=new A.N(-20,11.5,0)
B.fxi=new A.N(0,-0.5,0.6)
B.fxj=new A.N(28,80,1.4)
B.fxk=new A.N(46,0.2,170)
B.fxm=new A.N(0,3.4,0.8)
B.fxo=new A.N(-0.85,4,-3.2)
B.fxq=new A.N(40,7.2,1.2)
B.aQv=new A.N(0.42,0.34,0.12)
B.fxr=new A.N(1.7,0.08,1.2)
B.fxs=new A.N(1.2,24,0.4)
B.fxt=new A.N(0,0,0.38)
B.fxv=new A.N(5.2,3.9,-7.76)
B.fxx=new A.N(0.07,0.3,0.03)
B.fxz=new A.N(22,0.2,130)
B.fxB=new A.N(20,1.4,8)
B.fxC=new A.N(0,-0.2,0.19)
B.fxE=new A.N(1.2,49,36)
B.fxF=new A.N(0,9.3,0)
B.fxH=new A.N(-120.5,108,-10)
B.fxI=new A.N(0,40,0.95)
B.fxK=new A.N(0,-1.9,-1.2)
B.fxL=new A.N(-3.2,1.15,-7.78)
B.fxM=new A.N(0,-3.4,1.2)
B.fxN=new A.N(64,10,0.2)
B.fxO=new A.N(0,-1.78,0.53)
B.aQw=new A.N(-6.5,7.4,-3)
B.fxP=new A.N(-4.6,-2,1.2)
B.fxR=new A.N(0,40,1.4)
B.fxS=new A.N(-3,36,10.6)
B.fxT=new A.N(0,14.5,-1.5)
B.fxU=new A.N(0,0.2,0)
B.fxW=new A.N(160,1.2,120)
B.fxX=new A.N(7,40,2.4)
B.fxY=new A.N(30,26,0.6)
B.fxZ=new A.N(3.4,3.25,-7.85)
B.fy_=new A.N(72.8,0,55)
B.fy0=new A.N(0.5,62,30)
B.fy1=new A.N(3,1.55,-7.1)
B.fy2=new A.N(0.4,3,3)
B.aQz=new A.N(0,-0.1,0.1)
B.fy3=new A.N(0,0,0.04)
B.fy4=new A.N(2.4,11.6,-3.6)
B.fy5=new A.N(4,11,3.5)
B.fy7=new A.N(5,8.6,-2.25)
B.fy8=new A.N(0,22,12.4)
B.fy9=new A.N(0,-1.78,0.3)
B.fya=new A.N(2.2,2.2,1.8)
B.fyb=new A.N(0,1.9,-1.2)
B.fyc=new A.N(0,56,2.1)
B.fyd=new A.N(0.26,0.04,0.02)
B.fye=new A.N(-2.4,11.6,-3.6)
B.fyf=new A.N(11.25,0,-2.25)
B.fyg=new A.N(1,-1.8,2.4)
B.fyh=new A.N(-11.8,4,0)
B.fyi=new A.N(11.2,4.7,-6)
B.fyj=new A.N(24,8,0.05)
B.fyl=new A.N(0.12,0,0)
B.fym=new A.N(1.1,1.1,0.03)
B.fyn=new A.N(20,1.2,0.4)
B.fyo=new A.N(3.4,3.55,-7.85)
B.fyq=new A.N(0,0.05,110)
B.fyr=new A.N(71.6,-22,62)
B.aQA=new A.N(1.5,18,3.5)
B.fyu=new A.N(3.5,3.1,-7.15)
B.fyv=new A.N(-0.28,0.55,-0.8)
B.fyw=new A.N(0,-0.2,0.24000000000000002)
B.aQB=new A.N(20,26,0.3)
B.fyy=new A.N(1,-0.2,0.14)
B.fyz=new A.N(-1.9,0,-2.25)
B.fyA=new A.N(0,-0.9,1.1)
B.fyB=new A.N(8.2,1.05,-6.7)
B.fyE=new A.N(0.07,0.4,0.03)
B.fyF=new A.N(2,3.8,0.08)
B.fyG=new A.N(31,83,0.9)
B.fyH=new A.N(64,40,-3.2)
B.aQC=new A.N(1.4,3,112)
B.fyI=new A.N(0,46.6,0.8)
B.fyK=new A.N(0,0,-8.8)
B.fyL=new A.N(0,0.7,-1)
B.fyO=new A.N(-11.9,0,8)
B.fyP=new A.N(7,0,1.5)
B.fyQ=new A.N(-90,0.05,130)
B.fyR=new A.N(-8.4,0.7,-6.4)
B.fyS=new A.N(-3.2,1.45,-7.78)
B.fyT=new A.N(0,41,0.45)
B.fyU=new A.N(-6.575,0,-0.25)
B.fyW=new A.N(0,14.6,-1.5)
B.aQE=new A.N(0,0,-2.3)
B.a7r=new A.N(-13,12.5,0)
B.fyY=new A.N(0,0,0.62)
B.fyZ=new A.N(0.2,-0.3,-0.4)
B.aQF=new A.N(10.85,18,0.5)
B.fz_=new A.N(0.6,70,0.6)
B.fz0=new A.N(1.4,1.3,0.02)
B.fz1=new A.N(30,1.4,0.4)
B.fz2=new A.N(6.3,1.5,-7.2)
B.aQG=new A.N(0,0.62,2.85)
B.aQH=new A.N(0.05,8,16)
B.fz3=new A.N(0,-1.2,5)
B.fz5=new A.N(0.2,-2,2.6)
B.fz8=new A.N(11.2,2.4,-5.18)
B.fza=new A.N(-1,-0.2,0.14)
B.fzb=new A.N(1.2,1.2,0.3)
B.aQJ=new A.N(2,0.08,2.4)
B.fzd=new A.N(9.5,13.5,1.4)
B.fze=new A.N(-0.32,0,0.5)
B.fzg=new A.N(0.8,0.55,0.05)
B.fzh=new A.N(0.14,0.35,17)
B.fzi=new A.N(1.4,2.4,0.3)
B.fzj=new A.N(0,11,8.2)
B.fzk=new A.N(0,24,-0.6)
B.fzl=new A.N(40,1.6,14)
B.fzo=new A.N(0,42,10.6)
B.fzp=new A.N(0,1.95,0.31)
B.fzq=new A.N(150,1.2,112)
B.aQK=new A.N(0.75,4.5,0.1)
B.fzs=new A.N(0.12,0,0.05)
B.fzu=new A.N(9,1.2,9)
B.fzv=new A.N(0,-0.5,0)
B.fzy=new A.N(5.5,8.5,0.5)
B.aQL=new A.N(0.05,8,9.6)
B.fzA=new A.N(1.5,94,3.5)
B.fzB=new A.N(0,8.2,0)
B.fzD=new A.N(4,94,0.4)
B.aQM=new A.N(1.4,8,1)
B.fzE=new A.N(3.7,1.2,-7.1)
B.fzF=new A.N(8.2,0.05,-6.7)
B.fzG=new A.N(0,-0.3,0)
B.fzH=new A.N(6.575,0,-0.25)
B.aQN=new A.N(0,1.8,0)
B.fzI=new A.N(3,3.21,-7.2)
B.fzK=new A.N(9.8,5,-7.75)
B.fzL=new A.N(1.5,3.5,112)
B.fzM=new A.N(3,1.85,-7.1)
B.a7t=new A.N(13,12.5,0)
B.fzR=new A.N(0.34,0.66,0.9)
B.fzT=new A.N(12,0.4,6)
B.fzU=new A.N(-6.5,7.9,-3)
B.fzV=new A.N(0,13.6,-1.5)
B.fzW=new A.N(1.5,1.5,0.05)
B.fzX=new A.N(-6.5,5,-3)
B.fzY=new A.N(58.4,1.6,50)
B.fzZ=new A.N(0.02,0.28,0.05)
B.fA_=new A.N(0,0.7,1)
B.aQP=new A.N(13,8.6,9.5)
B.fA0=new A.N(-3.6,4,-7.76)
B.fA1=new A.N(0.82,0.9,0.05)
B.fA2=new A.N(0,-5.5,-0.25)
B.fA7=new A.N(1.9,0,0)
B.fA8=new A.N(0.45,0.72,0.06)
B.fAa=new A.N(14,0.4,7)
B.fAb=new A.N(64,24,-3.2)
B.fAc=new A.N(0,9.2,0)
B.fAd=new A.N(0,0.03,0)
B.fAe=new A.N(-13,15,2)
B.fAf=new A.N(-14,17,4)
B.fAg=new A.N(-14,20,-28)
B.fAh=new A.N(-1,0,-8)
B.fAi=new A.N(-22,14,0)
B.fAk=new A.N(-37,16,0)
B.fAl=new A.N(-42,-34,96)
B.fAm=new A.N(0,-0.6,22)
B.aQQ=new A.N(-4,20,8)
B.fAo=new A.N(-72,6,55)
B.fAp=new A.N(-8,-28,104)
B.fAq=new A.N(-8,-39,96)
B.fAr=new A.N(0,0.35,0.78)
B.fAs=new A.N(-11.9,0,-8)
B.fAt=new A.N(38,1.4,12)
B.fAu=new A.N(25,0.5,66)
B.fAv=new A.N(-8.4,1.9,-7.2)
B.fAx=new A.N(0,-0.6,100)
B.aQR=new A.N(1.25,1,0.1)
B.fAy=new A.N(11.2,0,-6)
B.fAz=new A.N(1.2,1.1,0.8)
B.fAB=new A.N(150,49,1.2)
B.fAC=new A.N(62,0.2,42)
B.fAD=new A.N(4.6,1.5,-3.6)
B.fAE=new A.N(0,-0.7,0.8)
B.fAF=new A.N(8.9,1.9,0.9)
B.fAG=new A.N(0,-1.55,-0.6)
B.fAH=new A.N(1.78,4.25,0.08)
B.fAI=new A.N(27,0.6,19)
B.fAJ=new A.N(0,5.5,-0.25)
B.fAK=new A.N(0,0.7,0)
B.fAL=new A.N(-1.2,-1.6,2.2)
B.fAM=new A.N(11,25,0.3)
B.aQS=new A.N(13,8.6,-9.5)
B.aQT=new A.N(0.05,0.12,0.03)
B.aQU=new A.N(8.2,0.95,-6.7)
B.fAN=new A.N(40,1.2,22)
B.fAO=new A.N(0.7,1.5,-7.2)
B.fAP=new A.N(0,15.3,-3.6)
B.fAQ=new A.N(120.5,108,-10)
B.fAR=new A.N(0.1,0,0)
B.fAS=new A.N(0.32,0,0.5)
B.fAU=new A.N(-0.9,0,4.4)
B.fAV=new A.N(-6.5,7.2,-3)
B.fAX=new A.N(6.2,0.18,2.1)
B.fAZ=new A.N(36,1.6,12)
B.fB_=new A.N(15.5,2.6,0)
B.fB1=new A.N(-8,-47.8,70)
B.fB2=new A.N(14,1.5,3.5)
B.aQV=new A.N(17,24,0.3)
B.fB3=new A.N(5.2,3.9,-7.82)
B.fB4=new A.N(0,0.7,2.4)
B.fB5=new A.N(0,0.3,0)
B.aQW=new A.N(2.3,7,0.5)
B.aQX=new A.N(-13,8.6,9.5)
B.fB9=new A.N(0,-1.99,0.14)
B.fBa=new A.N(0.4,36,34)
B.fBc=new A.N(4.6,-2,1.2)
B.aQY=new A.N(0,0,-2.4)
B.fBd=new A.N(0,-1.78,0.52)
B.fBe=new A.N(0.12,0.1,0.03)
B.fBf=new A.N(9.8,5,-7.58)
B.aQZ=new A.N(0.5,1.4,2)
B.fBg=new A.N(3.5,0.15,-7.2)
B.fBh=new A.N(1.2,26.4,20)
B.fBi=new A.N(-3.6,4,-7.82)
B.fBj=new A.N(0.3,2,36)
B.fBl=new A.N(24,0.8,6.5)
B.fBn=new A.N(22,0.5,5)
B.fBo=new A.N(0,22,2.1)
B.fBr=new A.N(0,56,0.5)
B.fBs=new A.N(150,1.2,70)
B.fBt=new A.N(-19.5,-1,-1.5)
B.fBu=new A.N(80,0.5,60)
B.fBv=new A.N(6.85,4,-3.2)
B.fBw=new A.N(20,24,0.6)
B.fBx=new A.N(24,28,1.2)
B.aR0=new A.N(0.12,3,1.9)
B.fBy=new A.N(0.06,0.62,0.8)
B.fBz=new A.N(0,18.5,0)
B.fBB=new A.N(9.55,5.7,-7.5)
B.fBD=new A.N(0.8,2.4,0.3)
B.aR1=new A.N(0,0.7,2)
B.aR2=new A.N(1.5,16,40)
B.fBE=new A.N(0,47.25,-2.25)
B.fBF=new A.N(0.5,0.5,0.04)
B.fBG=new A.N(12.5,39,0.6)
B.fBH=new A.N(0,3,0.9)
B.fBI=new A.N(3,36,10.6)
B.fBK=new A.N(0.14,8,0.3)
B.fBL=new A.N(1.9,0.05,1.35)
B.fBO=new A.N(0.6,0.12,0.03)
B.fBP=new A.N(-10.7,1.2,-6.4)
B.fBQ=new A.N(-71.2,46.6,55)
B.fCn=new A.BL("noGround","It works, but there is no ground wire. Without a ground nothing protects you if an appliance fails.",!0,!1,!1)
B.fCo=new A.BL("short","A hot wire touched the ground. That is a short circuit: huge current, sparks and fire. The breaker slams off.",!1,!0,!0)
B.fCp=new A.BL("reversed","Hot and neutral are swapped (reversed polarity). Things still run, but the metal part of a lamp or appliance is live. That can shock someone. Black goes on brass, white on silver.",!0,!1,!1)
B.fCq=new A.BL("dead","The hot wire is not connected to the right place, so nothing gets power. The device is dead.",!1,!1,!1)
B.fCr=new A.BL("ok","Wired correctly. Hot, neutral and ground are all in the right place.",!0,!1,!1)
B.fCs=new A.BL("bonded","The neutral and the ground were joined. A GFCI or the breaker may trip for no reason, and current can flow where it should not.",!0,!0,!1)
B.fCt=new A.BL("openNeutral","The neutral wire is not connected. Nothing runs, but the hot wire is still connected, so the slots can still be live. That is dangerous.",!1,!1,!1)
B.fCu=new A.BL("dead","The wires are on the taped LOAD screws, so no power reaches the outlet. Power comes in on LINE.",!1,!1,!1)
B.fCv=new A.BL("short","The hot and the neutral were joined together. That is a short circuit: a bang, sparks and a tripped breaker.",!1,!0,!0)
B.aRK=new A.ayd(null)
B.fFc=new A.az6(null)
B.aSg=new A.aDV(null)})();(function staticFields(){$.aTx=null})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ia1","hjX",()=>C.a([A.aSh("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",B.PE,B.da8,"outlet",B.cIK,"Wall outlet",new A.flD()),A.aSh("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",B.cWi,B.cJl,"switch",B.cHk,"Light switch",new A.flE()),A.aSh("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",B.PE,B.cQr,"gfci",B.cYW,"GFCI outlet",new A.flF()),A.aSh("Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.",B.PE,B.cHs,"light",B.d9f,"Ceiling light",new A.flG()),A.aSh("A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.",B.PE,B.cHt,"fan",B.cOa,"Ceiling fan",new A.flH())],C.ax("O<a3i>")))
w($,"iac","Ga",()=>{var v,u=C.a([],x.n)
for(v=0;v<10;++v)u.push(-72+16*v)
return u})})()};
(a=>{a["hgl+s23VFZF3q0Ju/7eqBjfQm0A="]=a.current})($__dart_deferred_initializers__);