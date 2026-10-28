((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,F,N,O,U,P,V,W,X,G,Y,Z,Q,R,A_,A0,A1,H,A={
zB(d,e,f){var w=d.a,v=d.b,u=d.c
return new A.M(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
bBe(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new A.M(u*w+t*v,d.b,-u*v+t*w)},
Ks(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.fHx(Math.cos(e),Math.sin(e)),n=new A.fHv(f),m=new A.fHw(n,e,o,g),l=new A.fHu(n,e,o),k=C.a([],x.z)
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
n=new A.M(q-t.a,p-t.b,o-t.c)
m=new A.M(r.a-q,r.b-p,r.c-o)
l=Math.min(e,n.gSW()*0.5)
k=Math.min(e,m.gSW()*0.5)
j=n.gqq(0)
i=new A.M(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.gqq(0)
h=new A.M(q+j.a*k,p+j.b*k,o+j.c*k)
for(g=0;g<=a0;++g){f=g/a0
w.push(A.zB(A.zB(i,s,f),A.zB(s,h,f),f))}}w.push(D.d.gam(d))
return w},
agk(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if(a3.length<3)return a3
w=C.a([],x.o)
for(v=0;u=v+1,t=a3.length,u<t;v=u){s=v===0?a3[v]:a3[v-1]
r=a3[v]
q=a3[u]
p=v+2
o=p<t?a3[p]:q
for(t=s.a,p=r.a,n=q.a,m=o.a,l=s.b,k=r.b,j=q.b,i=o.b,h=s.c,g=r.c,f=q.c,e=o.c,d=0;d<a4;++d){a0=d/a4
a1=a0*a0
a2=new A.fHo(a0,a1,a1*a0)
w.push(new A.M(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(D.d.gam(a3))
return w},
hG6(d){var w,v,u,t,s,r,q,p,o,n
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
M:function M(d,e,f){this.a=d
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
zj:function zj(d,e,f){this.a=d
this.b=e
this.c=f},
nq:function nq(d){var _=this
_.a=d
_.c=_.b=0
_.d=1
_.e=0},
bUs:function bUs(d,e){this.a=d
this.b=e},
bUt:function bUt(d){this.a=d},
bUr:function bUr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bUu:function bUu(d,e,f){this.a=d
this.b=e
this.c=f},
bUq:function bUq(d,e){this.a=d
this.b=e},
bUv:function bUv(d,e,f){this.a=d
this.b=e
this.c=f},
fHx:function fHx(d,e){this.a=d
this.b=e},
fHv:function fHv(d){this.a=d},
fHw:function fHw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fHu:function fHu(d,e,f){this.a=d
this.b=e
this.c=f},
fHo:function fHo(d,e,f){this.a=d
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
bOA:function bOA(d){this.a=d},
b3o:function b3o(d,e,f,g,h,i,j,k,l){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.a=l},
ckR:function ckR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ckS:function ckS(d,e){this.a=d
this.b=e},
ckQ:function ckQ(){},
OO:function OO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
at5:function at5(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bos:function bos(d,e,f,g,h){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=40
_.bq$=g
_.a7$=h
_.c=_.a=null},
ePy:function ePy(d){this.a=d},
ePx:function ePx(d){this.a=d},
ePu:function ePu(d){this.a=d},
ePv:function ePv(d){this.a=d},
ePw:function ePw(d){this.a=d},
aLi:function aLi(){},
aSg(d,e,f,g,h,i,j){return new A.a3h(g,i,h,e,f,j)},
Q4(d){return D.d.ix($.hjQ(),new A.fks(d))},
bBD(d,e){var w,v,u=d.e,t=new C.J(u,new A.fHM(),C.T(u).k("J<1,n>")).fF(0)
u=e.b
w=C.a3(u).k("bc<2>")
v=C.d9(new C.bc(u,w),w.k("H.E"))
return t.de(0,v.gkL(v))},
hfL(d,e,f,g,h){var w,v
if(e.a&&e.c===0){if(e.r)return"SHOCK! The breaker was still ON and you touched a live wire. Always turn the power OFF and test the wires first."
return"STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly."}if(e.c!==0)return"The device is already in the box. Pull it out again to change the wires."
if(!e.r&&!h&&!g.c.t(0,f))return d.r.$2(f,g)
w=e.b
v=g.a
if(w.h(0,v)!=null)return"That place already has a wire. Tap the wire to take it off first."
if(new C.bc(w,C.a3(w).k("bc<2>")).t(0,f))return"That wire is already fastened. Tap it to take it off if you want to move it."
w.n(0,v,f)
return null},
fRi(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=new A.fky(b1),b0=new A.fkw(b1)
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
a6=new C.a2(w,new A.fku(),h).gM(0)
a7=new C.a2(w,new A.fkv(),h).gM(0)
if(t>0||o>0)return B.fCq
w=u>0
if(!(w&&s>0))h=r>0&&v>0
else h=!0
if(h)return B.fCx
if(w&&r>0)return B.fCr
if(q>0||n>0)return B.fCu
if(m>0&&v<a6)return B.fCw
if(v<a6)return B.fCs
if(a7>0&&s<a7)return B.fCv
if(p===0)return B.fCp
return B.fCt},
bxc(d,e){var w
if(d==="light"||d==="fan")w=e.c===0?6.4:0.6
else w=e.c===0?4.7:-0.25
return w},
bzl(d,e,f){var w,v
if(d==="light"||d==="fan"){w=A.bxc(d,f)
v=f.c===0?w-3.2:w
switch(e){case 51:return new A.M(-1.5,-0.3,v)
case 52:return new A.M(0,-0.3,v)
default:return new A.M(1.5,-0.3,v)}}w=A.bxc(d,f)
switch(e){case 21:return new A.M(0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 22:return new A.M(0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
case 23:return new A.M(-0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 24:return new A.M(-0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
default:return new A.M(0,-1.98,w+0.52)}},
fQZ(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=C.a([],x.z),a6=new A.nq(a5),a7=a9.a,a8=a7==="light"||a7==="fan"
if(b1){a6.b=1
a6.iZ(B.fyW,B.aQE,B.uE,3)
a6.iZ(B.fzJ,B.aQE,B.uE,3)
a6.iZ(B.fAL,B.aQV,B.uE,2)
a6.iZ(B.fA4,B.aQV,B.uE,2)
a6.b=2
a6.q3(B.fyB,B.aQz,B.m0,0.05,3)
a6.q3(B.fyh,B.aQz,B.m0,0.05,3)
a6.q3(B.fy9,B.fB4,B.m0,0.05,2)}w=A.h6I(a6,a7,!0)
v=new A.fiD(a6,b0,a7,a8)
u=D.d.gL(w)
t=a7==="switch"
if(t){s=D.d.gam(w)
v.$5(10,u.ae(0,B.fuD),B.fAN,"blackLine",B.K5)
v.$5(13,s.ae(0,B.fAT),B.fx9,"blackLoad",B.K5)
v.$5(12,u.ae(0,B.fzu),B.fwK,"ground",B.wQ)
a6.b=6
r=x.o
a6.jL(C.a([u.ae(0,B.aQy),B.fuX,B.Te],r),0.075,B.wz,!1,0.3,8)
a6.jL(C.a([s.ae(0,B.aQy),B.fz0,B.Te],r),0.075,B.wz,!1,0.3,8)
a6.K6(B.Te,B.fAI,0.28,B.ab4,0.18,0.3,10)}else{v.$5(10,u.ae(0,B.fxc),B.fuT,"black",B.K5)
v.$5(11,u.ae(0,B.fy5),B.fz7,"white",B.wz)
v.$5(12,u.ae(0,B.fyn),B.fyi,"ground",B.wQ)}if(a8)A.h7G(a6,a7,b0)
else A.h7m(a6,a7,A.bxc(a7,b0),b0.w,!1)
if(b0.e&&b0.c===0){a6.b=0
a6.d=0.5
for(r=a9.f,q=r.length,p=0;p<q;++p){o=r[p]
n=A.bzl(a7,o.a,b0)
if(o.e)m=D.cq
else{l=o.f
if(l==="ground")m=D.bk
else{l=l==="neutral"?D.c:B.Vp
m=l}}if(a8)l=0
else{l=n.a
if(l>0.4)l=0.12
else l=l<-0.4?-0.12:0}if(a8)k=0.6
else k=Math.abs(n.a)<0.4?0.2:0
a6.iY(new A.M(n.a+l,n.b+0,n.c+k),0.36,m,4,8,0.1)}a6.d=1}if(b0.c>=2&&!a8)A.h9I(a6,b0.w)
r=!1
if(b0.c>=2)if(b0.d)r=a7==="outlet"||a7==="gfci"
if(r)A.hOm(a6,b0.a&&!b0.w)
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
g=A.bxc(a7,b0)
e=q?"Ceiling fan":"Ceiling light"
q=q?"The motor housing with blades. It has three wires: black (motor), white (neutral) and green (ground).":"The light fixture with a frosted dome. It has three wires: black, white and green."
d=C.E([1,B.dUg,2,B.dUu,3,new A.db(r,"A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling."+l,new A.M(0,0,-1.2),9),4,new A.db(k,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new A.M(-0.4,1.5,-1.8),8),5,B.dUQ,10,new A.db("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. "+j,new A.M(-0.8,-0.8,1.2),7),13,B.dU2,11,new A.db("White wire: neutral","The neutral wire carries the power back to the panel. "+i,new A.M(0,-0.8,1.2),7),12,new A.db("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. "+h,new A.M(0.5,-0.8,1.2),7),6,B.dUs,20,new A.db(f,t,new A.M(0,-0.2,g),9),21,B.dUx,22,B.dUP,23,B.dUq,24,B.dUv,25,B.dUj,26,B.dUy,27,B.dUK,28,B.dUd,30,B.dTY,31,B.dTW,51,B.dUt,52,B.dU_,53,B.dUC,54,new A.db(e,q,new A.M(0,0,6.4),9),55,B.dUM],x.S,x.q)
a0=C.a([],x.E)
if(b0.f&&b0.c===0)for(t=a9.f,r=t.length,p=0;p<r;++p){o=t[p]
n=A.bzl(a7,o.a,b0)
a1=o.f
A:{q="hot"===a1
if(q){l=B.etE
break A}if("neutral"===a1){l=B.ekY
break A}if("ground"===a1){l=B.ens
break A}l=B.ebb
break A}a2=l.a
if(a8){B:{if(q){k="BLACK NUT \xb7 HOT"
break B}if("neutral"===a1){k="WHITE NUT \xb7 NEUTRAL"
break B}k="GROUND"
break B}a3=k}else a3=a2
if(a8){C:{if(q){q=B.fxR
break C}if("neutral"===a1){q=B.fxO
break C}q=B.fBe
break C}a4=q}else{q=n.a
if(q>0.4)k=3.8
else k=q<-0.4?-4.2:0
a4=new A.M(k,Math.abs(q)<0.4?-3:-0.4,1)}a0.push(new A.vp(new A.M(n.a+a4.a,n.b+a4.b,n.c+a4.c),a3,l.b))}if(b0.a&&b0.c===0)a0.push(B.bOi)
return new A.zj(a5,d,a0)},
h6I(d,e,f){var w,v,u=e==="light"||e==="fan"
d.b=3
if(u){d.e9(B.aQX,B.aQD,2.2,B.wP,0.3,18)
d.a2B(B.aQD,B.w3,2.2,B.wP,!1,!0,0.3,18)}else{d.bU(B.aQX,B.fyH,B.wP,0.3)
d.bU(B.fwY,B.aQs,B.wP,0.3)
d.bU(B.fvi,B.aQs,B.wP,0.3)
d.bU(B.fyd,B.aQI,B.wP,0.3)
d.bU(B.fxM,B.aQI,B.wP,0.3)}w=C.a([],x.o)
v=new A.f56(d,f,w)
if(e==="switch"){v.$2(4,B.cOt)
v.$2(5,B.cMK)}else v.$2(4,B.cZJ)
return w},
hfP(d,e){var w
A:{if(10===e){w=d==="switch"?"blackLine":"black"
break A}if(13===e){w="blackLoad"
break A}if(11===e){w="white"
break A}if(12===e){w="ground"
break A}w=null
break A}return w},
h7m(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k=new A.M(0,-0.2,f),j=e==="switch",i=e==="gfci"
if(g)w=B.wK
else w=j?B.baM:B.W_
v=i?3.1:2.95
d.e=0
d.b=20
if(!h){d.bU(k.ae(0,B.fwe),new A.M(1.5,v,1.3),w,0.25)
d.e=0.15
d.b=26
u=k.ae(0,B.fw6)
d.bU(u,B.fAJ,g?B.b7Z:B.Kk,0.8)
d.cH(k.ae(0,B.fzr),B.fBQ,B.DL)}d.e=0.3
d.b=27
u=k.ae(0,B.fxv)
d.bU(u,new A.M(1.3,i?2.85:2.7,0.16),w,0.3)
if(j){d.e=0.7
d.b=28
u=k.ae(0,B.fz_)
d.bU(u,B.fxb,g?B.wK:F.W9,0.35)
u=k.ae(0,B.fAt)
d.bU(u,B.fA3,g?B.wK:B.abM,0.35)}else{d.e=0.6
u=i?E.aqK:B.day
t=u.length
s=f+0.47
r=f+0.46
q=f+0.5
p=0
for(;p<t;++p){o=u[p]
d.b=27
n=-0.2+(o+0.04)
d.cH(new A.M(-0.28,n,s),B.fyG,B.DU)
d.cH(new A.M(0.28,n,s),B.fxz,B.DU)
n=-0.2+(o-0.32)
d.pe(new A.M(0,n,r),new A.M(0,n,q),0.11,B.DU,10)}if(i){d.e=0.7
d.b=28
d.bU(k.ae(0,B.fzg),B.aQu,B.bdY,0.3)
d.bU(k.ae(0,B.fAU),B.aQu,B.aeb,0.3)}}if(h){d.e=0
return}m=i?0.95:0.85
l=i?-0.75:-0.55
u=new A.f6r(d,k)
if(!j){u.$6$taped(23,-1,m,B.ac4,B.acu,i)
u.$5(24,-1,l,B.ac4,B.acu)}u.$6$taped(21,1,m,B.Vp,B.adK,i)
u.$5(22,1,l,B.Vp,B.adK)
d.e=0.9
d.b=25
d.e9(k.ae(0,B.fyb),k.ae(0,B.fBf),0.18,B.bfM,0.7,12)
d.cH(k.ae(0,B.fxQ),B.fyf,D.e9)
d.bU(k.ae(0,B.fwj),B.fzi,B.b4V,0.6)
d.e=0},
h7G(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e==="fan",j=A.bxc(e,f)
d.e=0
d.b=55
w=j-0.3
v=j+0.3
u=k?3.3:3.5
t=f.w?B.wK:B.bbh
d.e9(new A.M(0,0,w),new A.M(0,0,v),u,t,0.45,20)
d.b=54
if(k){u=j+4.2
d.e9(new A.M(0,0,v),new A.M(0,0,u),0.45,B.b7V,0.5,10)
v=j+7.4
d.e9(new A.M(0,0,u),new A.M(0,0,v),3.6,B.V_,0.5,18)
d.e9(new A.M(0,0,v),new A.M(0,0,j+8.6),1.6,B.bf9,0.7,14)}else{d.d=0.92
v=f.w?B.wK:B.b8M
d.iY(new A.M(0,0,j+1.2),3.6,v,6,14,0.7)
d.d=1}d.b=54
s=[B.el6,B.e8r,B.erv]
for(v=x.o,r=j-3.2,q=0;q<3;++q){u=s[q]
p=f.c===0?r:j
t=u.b.a
d.jL(C.a([new A.M(t,-0.3,w),new A.M(t,-0.3,p+0.4)],v),0.07,u.a,!1,0.3,6)}if(f.c===0)for(w=[B.eeu,B.emA,B.eu6],v=f.b,q=0;q<3;++q){o=w[q]
u=o.a
n=A.bzl(e,u,f)
d.b=u
d.e=0.8
t=n.a+0
m=n.b+0
l=n.c
d.e9(new A.M(t,m,l+-0.2),new A.M(t,m,l+0.3),0.09,B.wQ,0.6,6)
if(v.ag(0,u))d.K6(new A.M(t,m,l+-0.5),new A.M(t,m,l+0.9),0.4,o.b,0.26,0.4,8)
d.e=0}},
h9I(d,e){var w
d.e=0.4
d.b=30
w=e?B.wK:B.b46
d.bU(B.fzc,B.aQJ,w,0.3)
d.bU(B.fyA,B.aQJ,w,0.3)
d.bU(B.fvg,B.aQQ,w,0.3)
d.bU(B.fvK,B.fwr,w,0.3)
d.bU(B.fBb,B.aQQ,w,0.3)
d.e9(B.fxE,B.fyy,0.1,B.Kk,0.8,10)
d.e=0},
hOm(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=B.cQW[w]
d.e9(new A.M(v,0.52,0.2),new A.M(v,0.52,1.9),0.04,B.Kk,0.8,6)}d.bU(B.fu5,B.fAB,B.b8u,0.35)
d.b7M(B.aQF,0.2,e?D.Vr:B.bbW,0.9)
if(e){d.d=0.35
d.iY(B.aQF,0.5,D.Vr,4,8,0)
d.d=1}},
md:function md(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
avw:function avw(d){var _=this
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
a3h:function a3h(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=h
_.r=i},
flw:function flw(){},
flx:function flx(){},
fly:function fly(){},
flz:function flz(){},
flA:function flA(){},
fks:function fks(d){this.a=d},
fHM:function fHM(){},
BL:function BL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fky:function fky(d){this.a=d},
fkz:function fkz(d){this.a=d},
fkw:function fkw(d){this.a=d},
fkx:function fkx(d){this.a=d},
fku:function fku(){},
fkv:function fkv(){},
fiD:function fiD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fiE:function fiE(d){this.a=d},
f56:function f56(d,e,f){this.a=d
this.b=e
this.c=f},
f6r:function f6r(d,e){this.a=d
this.b=e},
fQX(d){return D.d.dM(B.asD,new A.fis(d),new A.fit())},
AI(d,e,f,g,h,i,j,k){var w=x.S
return new A.a3K(d,e,f,g,h,i,j,k,C.a([],x._),C.a([0,0,0],x.t),C.aX(w),C.V(w,x.N))},
fXR(d){var w=new A.bOC(d)
w.c1w()
return w},
i1P(d){var w,v=d.c
A:{if("bedroom"===v){w=1
break A}if("kitchen"===v||"bathroom"===v){w=2
break A}w=0
break A}return w},
aTe:function aTe(d,e,f,g){var _=this
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
fis:function fis(d){this.a=d},
fit:function fit(){},
ps:function ps(d,e,f){this.a=d
this.b=e
this.c=f},
a3K:function a3K(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bOC:function bOC(d){var _=this
_.a=d
_.b=!1
_.c=$
_.d=0},
bOD:function bOD(){},
bOH:function bOH(){},
bOG:function bOG(){},
bOF:function bOF(){},
bOE:function bOE(){},
c7l(d,e){return new A.aoI(d,e,null)},
aoI:function aoI(d,e,f){this.d=d
this.e=e
this.a=f},
aC7:function aC7(d){var _=this
_.f=_.e=_.d=$
_.r="look"
_.w=0
_.x=-1
_.y=0
_.z=null
_.Q=!0
_.as=null
_.at=d
_.c=_.a=null},
e_y:function e_y(){},
e_w:function e_w(d){this.a=d},
e_x:function e_x(d){this.a=d},
e_e:function e_e(d,e,f){this.a=d
this.b=e
this.c=f},
e_f:function e_f(d){this.a=d},
e_d:function e_d(d){this.a=d},
e_g:function e_g(d,e){this.a=d
this.b=e},
dZS:function dZS(d,e){this.a=d
this.b=e},
dZX:function dZX(d,e){this.a=d
this.b=e},
dZY:function dZY(d,e){this.a=d
this.b=e},
dZZ:function dZZ(d,e){this.a=d
this.b=e},
e__:function e__(d,e){this.a=d
this.b=e},
e_0:function e_0(d,e,f){this.a=d
this.b=e
this.c=f},
dZW:function dZW(d,e){this.a=d
this.b=e},
e_1:function e_1(d){this.a=d},
e_6:function e_6(d,e){this.a=d
this.b=e},
e_4:function e_4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e_3:function e_3(d,e,f){this.a=d
this.b=e
this.c=f},
e_5:function e_5(d,e,f){this.a=d
this.b=e
this.c=f},
e_2:function e_2(d,e){this.a=d
this.b=e},
dZV:function dZV(d){this.a=d},
dZU:function dZU(d){this.a=d},
dZT:function dZT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e_h:function e_h(d,e){this.a=d
this.b=e},
e_b:function e_b(d,e){this.a=d
this.b=e},
e_c:function e_c(d,e){this.a=d
this.b=e},
dZD:function dZD(d,e){this.a=d
this.b=e},
dZI:function dZI(d){this.a=d},
dZJ:function dZJ(d){this.a=d},
dZK:function dZK(d){this.a=d},
dZL:function dZL(d){this.a=d},
dZM:function dZM(d,e){this.a=d
this.b=e},
dZN:function dZN(d){this.a=d},
dZH:function dZH(d){this.a=d},
dZO:function dZO(d,e){this.a=d
this.b=e},
dZG:function dZG(d,e){this.a=d
this.b=e},
dZP:function dZP(d,e){this.a=d
this.b=e},
dZF:function dZF(d,e){this.a=d
this.b=e},
dZQ:function dZQ(d,e){this.a=d
this.b=e},
dZE:function dZE(d,e){this.a=d
this.b=e},
dZR:function dZR(d,e){this.a=d
this.b=e},
e_n:function e_n(d,e){this.a=d
this.b=e},
e_m:function e_m(d){this.a=d},
e_l:function e_l(){},
e_k:function e_k(d){this.a=d},
e_o:function e_o(d){this.a=d},
e_p:function e_p(d){this.a=d},
e_q:function e_q(d){this.a=d},
e_r:function e_r(d){this.a=d},
e_s:function e_s(d){this.a=d},
e_t:function e_t(d){this.a=d},
e_u:function e_u(d){this.a=d},
e_j:function e_j(){},
e_v:function e_v(d){this.a=d},
e_i:function e_i(d){this.a=d},
e_a:function e_a(d){this.a=d},
e_8:function e_8(d,e,f){this.a=d
this.b=e
this.c=f},
e_9:function e_9(d,e){this.a=d
this.b=e},
e_7:function e_7(d){this.a=d},
bgq:function bgq(d,e,f){this.c=d
this.d=e
this.a=f},
dlf:function dlf(d){this.a=d},
bfP:function bfP(d,e){this.b=d
this.a=e},
hb_(c8,c9,d0,d1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5="walls",c6="\ud83d\udeb0 Needs plumbing",c7=c8.c
if(c7==="outside")return A.hKU(c8,d0)
w=x.z
v=C.a([],w)
u=new A.nq(v)
t=C.V(x.S,x.q)
s=C.a([],x.E)
r=c8.gG5(0)
q=c8.gya(0)
p=C.a([],x.O)
for(o=c8.z,n=o.length,m=0;m<o.length;o.length===n||(0,C.K)(o),++m)p.push(B.auO[o[m]])
l=B.auB[c8.Q]
k=new A.fiL(c9)
u.b=k.$2("floor",310)
o=q/2
n=r+2.4
j=q+2
i=l.b
h=l.c
g=h==="tile"
if(g)f=0.35
else f=h==="wood"?0.15:0
u.q3(new A.M(0,-0.6,o),new A.M(n,1.2,j),i,f,3)
t.n(0,310,new A.db("Floor","The "+l.a.toLowerCase()+" floor.",new A.M(0,0,o),140))
u.b=0
if(h==="wood")for(h=-r/2,e=1;e<8;++e){g=C.aq(i,D.w,0.25)
g.toString
u.cH(new A.M(h+e*r/8,0.05,o),new A.M(0.3,0.2,q),g)}else if(g)for(i=-r/2,e=1;e<6;++e){u.cH(new A.M(i+e*r/6,0.05,o),new A.M(0.3,0.2,q),B.aaN)
u.cH(new A.M(0,0.05,e*q/6),new A.M(r,0.2,0.3),B.aaN)}u.b=k.$2(c5,300)
u.iZ(new A.M(0,48,-0.6),new A.M(n,96,1.2),p[0],3)
u.b=k.$2(c5,301)
i=-r
h=i/2
u.iZ(new A.M(h-0.6,48,o),new A.M(1.2,96,q),p[1],3)
u.b=k.$2(c5,302)
g=r/2
u.iZ(new A.M(g+0.6,48,o),new A.M(1.2,96,q),p[2],3)
t.n(0,300,B.dU4)
t.n(0,301,B.dU8)
t.n(0,302,B.dUh)
u.b=0
u.bU(new A.M(0,2.5,0.4),new A.M(r,5,0.8),B.qt,0.1)
u.bU(new A.M(h+0.4,2.5,o),new A.M(0.8,5,q),B.qt,0.1)
u.bU(new A.M(g-0.4,2.5,o),new A.M(0.8,5,q),B.qt,0.1)
u.b=k.$2("ceiling",320)
u.d=c9==="ceiling"?0.6:0.4
u.iZ(new A.M(0,96.6,o),new A.M(n,1.2,j),B.ats[c8.as],2)
u.d=1
u.b=0
u.bU(new A.M(0,94,1),new A.M(r,3,1.4),D.c,0.2)
u.bU(new A.M(h+1,94,o),new A.M(1.4,3,q),D.c,0.2)
u.bU(new A.M(g-1,94,o),new A.M(1.4,3,q),D.c,0.2)
t.n(0,320,new A.db("Ceiling","Pick a colour above to paint the ceiling.",new A.M(0,96,o),140))
p=c8.w
d=D.d.b8(p,new A.fiG())?"left":"right"
if(c7!=="hall"){n=C.a([],w)
a0=new A.nq(n)
a0.cH(B.fBt,B.fuQ,B.A5)
a0.bU(B.ftb,B.fy_,B.Wp,0.5)
a0.cH(B.aQe,B.fz3,B.A5)
a0.cH(B.aQe,B.fwD,B.A5)
a1=q*0.55
D.d.v(v,d==="right"?A.Ks(n,0,-1.5707963267948966,new A.M(g,0,a1)):A.Ks(n,0,1.5707963267948966,new A.M(h,0,a1)))}for(n=c8.at,e=0;e<p.length;++e){a2=p[e]
a3=n.t(0,e)
j=C.a([],w)
a4=new A.nq(j)
f=a4.b=600+e
a4.cH(B.fyV,B.fyI,B.qt)
if(a3){a4.b=0
a4.cH(B.fxK,B.fvT,B.abo)
a4.b=f
a5=A.bBe(B.fBI,-1.25)
a4.aiE(new A.M(-12.5+a5.a,0+a5.b,1.2+a5.c),B.fvh,B.JL,0.15,-1.25)}else{a4.bU(B.fxT,B.fxg,B.JL,0.15)
a4.bU(B.fxZ,B.fyc,B.DC,0.8)
a4.cH(B.fye,B.aQU,B.KK)
a4.cH(B.fBq,B.aQU,B.KK)}a6=a2.a
A:{if("left"===a6){j=A.Ks(j,0,1.5707963267948966,new A.M(h,0,a2.b+o-40))
break A}if("right"===a6){j=A.Ks(j,0,-1.5707963267948966,new A.M(g,0,a2.b+o-40))
break A}j=A.Ks(j,0,0,new A.M(a2.b,0,0))
break A}D.d.v(v,j)
t.n(0,f,new A.db("Door","Tap the door to go through it.",B.aQ5,90))}for(o=c8.x,n=o.length,m=0;m<o.length;o.length===n||(0,C.K)(o),++m){a7=o[m]
j=a7.b
f=B.yw.h(0,j)
f.toString
a5=C.a([],w)
a8=new A.nq(a5)
a9=100+a7.a
a8.b=k.$2("furniture",a9)
A.hHy(a8,j,B.cva[a7.f])
D.d.v(v,A.Ks(a5,0,a7.e*3.141592653589793/2,new A.M(a7.c,0,a7.d)))
t.n(0,a9,new A.db(f.a,"Move it with the arrow buttons, turn it, change its colour or take it out.",new A.M(a7.c,12,a7.d),90))}b0=q*0.5
w=C.T(p)
b1=D.k.D(new C.cQ(new C.a2(p,new A.fiH(),w.k("a2<1>")),new A.fiI(),w.k("cQ<1,P>")).cI(0,h+30,new A.fiJ())+24,h+10,g-10)
b2=c8.gwy()
b3=c8.db==="fan"
b4=b2&&c8.cy
u.b=703
if(b3){u.pe(new A.M(0,95.5,b0),new A.M(0,86,b0),1,B.rI,8)
u.e9(new A.M(0,86,b0),new A.M(0,79,b0),6,D.t4,0.5,14)
w=b4?B.A3:D.dL
u.e9(new A.M(0,79,b0),new A.M(0,76,b0),3.6,w,0.6,12)}else{w=b4?B.A3:D.dL
u.e9(new A.M(0,95.5,b0),new A.M(0,93,b0),7,w,0.6,16)}if(b4&&!b3){u.b=0
u.d=0.2
u.cEU(new A.M(0,93,b0),new A.M(0,0.5,b0),36,B.A3,!1,14)
u.d=1}b5=b3?"Ceiling fan":"Ceiling light"
w=!b2
if(w)p="It has no power yet. The room still needs wiring: use the Wiring button."
else p=c8.cy?"It is on. Tap the wall switch (or tap this) to turn it off.":"It is off. Tap the wall switch (or tap this) to turn it on."
t.n(0,703,new A.db(b5,p,new A.M(0,88,b0),80))
for(p=i/4,o=r/4,n=[new C.bz(0,700,p),new C.bz(1,701,o)],j=c8.cx,i=c7==="bathroom",f=!i,c7=c7==="kitchen",m=0;m<2;++m){a5=n[m]
b6=a5.b
b7=a5.c
u.b=b6
u.e=0.4
u.d=0.55
a9=b2?D.b9:D.aC
u.cH(new A.M(b7,14,0.25),B.fwb,a9)
u.d=1
u.e=0
a9=b2?B.adC:D.t4
u.bU(new A.M(b7,14,0.9),B.fzf,a9,0.25)
u.b=0
for(b8=0;b8<2;++b8)for(a9=14+E.tM[b8]*2.8,b9=0;b9<2;++b9)u.cH(new A.M(b7+B.cWg[b9],a9,1.7),B.fBF,B.bc7)
u.cH(new A.M(b7,14,1.7),B.fzd,D.dL)
a9=!f||c7?"GFCI outlet":"Wall outlet"
if(w)a5="This outlet is not wired yet. Use the Wiring button to wire it."
else a5=j.h(0,a5.a)==null?"Tap it to plug something in.":"Tap it to plug something else in, or to unplug."
t.n(0,b6,new A.db(a9,a5,new A.M(b7,14,2),60))}u.b=702
u.e=0.4
u.d=0.55
n=b2?D.b9:D.aC
u.cH(new A.M(b1,48,0.25),B.fx6,n)
u.d=1
u.e=0
n=b2?B.adC:D.t4
u.bU(new A.M(b1,48,0.9),B.fwM,n,0.25)
u.cH(new A.M(b1,c8.cy&&b2?49.2:46.8,1.9),B.fwH,B.bhE)
if(w)n="Not wired yet: the Wiring button opens the job."
else if(c8.cy)n="On. Tap to turn the "+(b3?"fan":"light")+" off."
else n="Off. Tap to turn the "+(b3?"fan":"light")+" on."
t.n(0,702,new A.db("Light switch",n,new A.M(b1,48,2),60))
if(w)s.push(new A.vp(new A.M(0,70,b0),"\u26a1 No power: needs wiring",D.bL))
for(p=[new C.z(0,p),new C.z(1,o)],o=x.o,m=0;m<2;++m){n=p[m]
e=n.a
b7=n.b
c0=j.h(0,e)
if(c0==null||w)continue
c1=A.fQX(c0)
n=720+e
u.b=n
u.jL(C.a([new A.M(b7,12,1.8),new A.M(b7,6,3),new A.M(b7,2,11)],o),0.3,B.ad1,!1,0.2,6)
a5=c1.d
a9=a5>0
if(a9){c2=a5*0.56
u.bU(new A.M(b7,2,15),new A.M(a5*0.45,4,14),B.rI,0.3)
u.bU(new A.M(b7,8,15),B.fvW,B.rI,0.3)
u.bU(new A.M(b7,12+c2/2,15),new A.M(a5,c2,3),E.DX,0.5)}else{a5=c1.a
if(a5==="lamp"){u.e9(new A.M(b7,0,14),new A.M(b7,1,14),6,B.V_,0.4,14)
u.e9(new A.M(b7,1,14),new A.M(b7,22,14),1,B.KL,0.5,8)
a5=c8.cy?B.A3:S.W1
u.AZ(new A.M(b7,20,14),new A.M(b7,32,14),9,a5,!1,!0,5.5,0.2,16)}else{u.bU(new A.M(b7,9,15),B.fub,B.DA,0.1)
if(a5==="toaster"){u.bU(new A.M(b7,23,15),B.fu9,B.kx,0.8)
u.cH(new A.M(b7,28.2,15),B.fzV,B.adQ)}else{u.K6(new A.M(b7-7,21,15),new A.M(b7+7,21,15),3.6,B.Kt,3,0.6,12)
u.bU(new A.M(b7-8,14.5,15),B.fy7,B.Kt,0.6)}}}a5=a9?"It is playing NGMY ads. Tap it to watch full screen with the remote.":"It is plugged in and running. Tap the outlet to unplug it or plug in something else."
t.n(0,n,new A.db(c1.b,a5,new A.M(b7,16,14),90))}if(!f||c7){c3=c8.gBD()
c7=new A.fiK(u)
if(i){c4=h+17
if(c3){u.b=710
u.K6(new A.M(6,0.5,14),new A.M(6,15,14),8,B.zZ,5.6,0.8,18)
u.e9(new A.M(6,15,14),new A.M(6,16,14),9,B.KC,0.8,18)
u.bU(new A.M(6,21,5),B.fug,B.zZ,0.8)
u.bU(new A.M(6,28,5),B.fxD,B.KC,0.8)}else{u.b=710
u.d=0.3
u.cH(new A.M(6,14,9),B.fud,D.b2)
u.d=1
c7.$2(-4,8)}u.b=711
u.bU(new A.M(34,14,10),B.fuL,B.DA,0.1)
u.bU(new A.M(34,29,10),B.fuN,B.acb,0.4)
if(c3){u.e9(new A.M(34,29.3,10),new A.M(34,30.1,10),6.5,D.c,0.6,18)
u.bfL(C.a([new A.M(34,30,4),new A.M(34,36,4),new A.M(34,38,7)],o),0.6,B.kx,0.9,8)}else{c7.$2(28,18)
c7.$2(40,18)}u.b=712
if(c3){u.bU(new A.M(c4,8,38),B.aQf,B.ae1,0.7)
u.bU(new A.M(c4,16.2,38),B.fAw,B.Vh,0.8)
u.e9(new A.M(c4,30,3),new A.M(c4,52,3),0.7,B.kx,0.9,8)
u.e9(new A.M(c4,52,3),new A.M(c4,52,10),0.7,B.kx,0.9,8)}else{u.d=0.3
u.cH(new A.M(c4,8,38),B.aQf,D.b2)
u.d=1
c7.$2(c4-4,34)
c7.$2(c4+4,34)}c7=c3?"Fitted on its flange with a wax ring, and the supply hose joins the shut-off valve.":"There is no toilet yet: only the flange and the water stub. Use the Plumbing button to fit it."
t.n(0,710,new A.db("Toilet",c7,new A.M(6,14,10),70))
c7=c3?"The faucet, the hoses and the P-trap are fitted.":"The sink is not plumbed. Use the Plumbing button."
t.n(0,711,new A.db("Vanity sink",c7,new A.M(34,28,10),70))
c7=c3?"The bath is in and connected.":"The bath is not connected yet."
t.n(0,712,new A.db("Bath",c7,new A.M(c4,10,38),90))
if(!c3)s.push(new A.vp(new A.M(0,40,14),c6,D.bj))}else{u.b=0
u.bU(new A.M(h+15,36,14),B.fuA,B.acx,0.6)
u.cH(new A.M(h+28.5,36,14.4),B.fz1,D.dL)
w=g-30
u.bU(new A.M(w,15,14),B.fvy,B.V4,0.1)
u.bU(new A.M(w,31,14),B.fvD,B.rI,0.5)
u.bU(new A.M(g-44,32.4,14),B.aQ8,D.lw,0.3)
u.bU(new A.M(g-16,32.4,14),B.aQ8,D.lw,0.3)
u.b=713
u.bU(new A.M(0,15,14),B.fvj,B.DA,0.1)
u.bU(new A.M(0,31,14),B.fvk,B.E3,0.5)
if(c3){u.e9(new A.M(0,32.1,14),new A.M(0,32.7,14),8,B.DS,0.8,18)
u.bfL(C.a([new A.M(0,32,5),new A.M(0,42,5),new A.M(0,44,9),new A.M(0,44,13)],o),0.7,B.kx,0.9,8)}else{c7.$2(-8,18)
c7.$2(8,18)}c7=c3?"The faucet, the hoses and the drain are fitted.":"The kitchen sink is not plumbed yet. Use the Plumbing button."
t.n(0,713,new A.db("Kitchen sink",c7,new A.M(0,30,14),70))
if(!c3)s.push(new A.vp(new A.M(0,48,14),c6,D.bj))}}return new A.zj(v,t,s)},
hKU(d,e){var w,v,u,t=x.z,s=C.a([],t),r=new A.nq(s),q=C.V(x.S,x.q),p=C.a([],x.E)
r.iZ(B.fAz,B.fw7,B.b60,4)
r.cH(B.fys,B.fxB,E.DF)
r.cH(B.fyS,B.fxm,B.V4)
r.iZ(B.ftP,B.fux,B.VC,3)
r.cH(B.fwc,B.fuI,B.b4g)
t=C.a([],t)
new A.nq(t).q3(B.w3,B.fuy,B.baV,0.1,2)
D.d.v(s,A.Ks(t,0.5,0,B.fti))
D.d.v(s,A.Ks(t,-0.5,0,B.ftj))
r.cH(B.ftl,B.fuz,B.b9h)
r.cH(B.fxJ,B.aR1,B.VC)
r.cH(B.fAS,B.aR1,B.VC)
for(w=0;w<4;++w){v=B.d4n[w]
r.cH(new A.M(v,62,10.5),B.fBz,B.qt)
r.bU(new A.M(v,62,11.2),B.fBy,B.Wp,0.6)
r.cH(new A.M(v,62,11.6),B.fyp,B.qt)
r.cH(new A.M(v,62,11.6),B.fxu,B.qt)}r.cH(B.ftB,B.fv7,E.DF)
r.cH(B.fzq,B.fvG,B.qt)
r.b=600
r.bU(B.fvd,B.fxl,B.JL,0.2)
r.bU(B.fw2,B.fw5,B.DC,0.8)
r.cH(B.fwg,B.aQA,B.KK)
r.cH(B.fya,B.aQA,B.KK)
q.n(0,600,B.dUf)
r.b=0
r.pe(B.ftZ,B.fu_,5,B.Eq,8)
r.a22(B.fu0,28,B.aaC,6,10)
r.a22(B.ftV,18,B.abr,5,8)
for(w=0;w<4;++w)r.a22(new A.M(B.d4i[w],6,24),7,B.b96,4,8)
r.pe(B.fuP,B.fuR,1.4,B.Eq,6)
r.bU(B.fuS,B.fu1,B.bbt,0.3)
t=e===0
u=t?"\u2705 The house is finished":"\ud83c\udfe0 "+e+" rooms still need work"
p.push(new A.vp(B.fth,u,t?D.cZ:D.dT))
return new A.zj(s,q,p)},
hRq(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=C.a([],x.z),i=new A.nq(j),h=d.c==="outside",g=!h
if(!g||h)return j
w=d.gG5(0)
v=d.gya(0)
if(d.db==="fan"){u=d.gwy()&&d.cy?e*7:0
i.b=703
for(h=v*0.5,t=0;t<4;++t){s=u+t*3.141592653589793/2
i.aiE(new A.M(Math.cos(s)*15,81,h+Math.sin(s)*15),B.fBn,B.DA,0.1,-s)}}for(h=[new C.z(0,-w/4),new C.z(1,w/4)],r=e*38,q=e*1.3,p=d.cx,o=0;o<2;++o){n=h[o]
t=n.a
m=n.b
l=p.h(0,t)
if(l!=null){if(g){n=d.ch
n=n==null?null:n.gtT()
if(n==null)n=!d.ax}else n=!0
n=!n}else n=!0
if(n)continue
n=A.fQX(l).d
if(n<=0)continue
k=n*0.56
i.b=720+t
i.bU(new A.M(m,12+k/2,16.7),new A.M(n-3.5,k-3.5,0.4),new T.lS(1,D.k.F(r+t*120,360),0.55,0.95).i7(),0.6)
i.cH(new A.M(m+Math.sin(q)*(n*0.25),12+k*0.28,17),new A.M(n*0.34,k*0.14,0.3),D.c.j(0.9))
i.cH(new A.M(m-n*0.3,12+k*0.78,17),new A.M(n*0.18,k*0.1,0.3),D.aJ)}return j},
hHy(d,e,f){var w,v,u,t=C.aq(f,D.w,Math.abs(-0.25))
t.toString
w=C.aq(f,D.c,Math.abs(0.2))
w.toString
switch(e){case"bed":d.bU(B.a7m,B.fvx,B.Eq,0.1)
d.bU(B.ftm,B.fvp,f,0.05)
d.cH(B.fAi,B.aQa,B.ad2)
d.cH(B.fu7,B.aQa,B.ad2)
d.bU(B.ftx,B.fvz,B.Eq,0.1)
d.cH(B.ftq,B.fA_,w)
break
case"nightstand":d.bU(B.Tc,B.fua,f,0.1)
d.cH(B.fzl,B.fvO,t)
d.cH(B.fBB,B.fv1,B.acI)
d.cH(B.fty,B.fwf,B.A3)
break
case"wardrobe":d.bU(B.ftG,B.fv8,f,0.1)
d.cH(B.fws,B.fvf,t)
d.bU(B.fxU,B.aQL,B.DC,0.8)
d.bU(B.fBK,B.aQL,B.DC,0.8)
break
case"desk":d.bU(B.aQ4,B.fvc,f,0.1)
d.cH(B.fAk,B.aQd,t)
d.cH(B.fuu,B.aQd,t)
d.bU(B.ftK,B.fuv,B.abo,0.5)
d.cH(B.ftE,B.fvI,D.t4)
break
case"rug":d.iZ(B.fB7,B.fuh,f,2)
d.cH(B.fwk,B.fAE,w)
break
case"sofa":d.bU(B.Tc,B.fw_,f,0.05)
d.bU(B.ftw,B.fw0,t,0.05)
d.bU(B.fAm,B.aQl,t,0.05)
d.bU(B.fuW,B.aQl,t,0.05)
d.cH(B.fAh,B.aQb,w)
d.cH(B.fu6,B.aQb,w)
break
case"armchair":d.bU(B.Tc,B.fuJ,f,0.05)
d.bU(B.ftv,B.fuK,t,0.05)
d.cH(B.fAg,B.aQi,t)
d.cH(B.fu3,B.aQi,t)
break
case"coffee":d.bU(B.aQ3,B.fv5,f,0.2)
for(v=0;v<4;++v){w=B.d49[v]
d.cH(new A.M(w.a,6.5,w.b),B.fuE,t)}d.bU(B.fx5,B.fw8,D.bW,0.5)
break
case"tvstand":d.bU(B.aQ6,B.fvn,f,0.1)
d.cH(B.fvY,B.fwW,t)
d.bU(B.ftF,B.fvb,E.DX,0.7)
d.bU(B.fx8,B.fwO,D.fl,0.9)
d.cH(B.fts,B.fw9,B.rI)
break
case"dining":d.bU(B.aQ4,B.fvo,f,0.2)
for(v=0;v<4;++v){w=B.czC[v]
d.cH(new A.M(w.a,13,w.b),B.fv0,t)}break
case"chair":d.bU(B.fto,B.fue,f,0.1)
d.bU(B.ftA,B.fuc,f,0.1)
for(v=0;v<4;++v){w=B.cVY[v]
d.cH(new A.M(w.a,7.5,w.b),B.fut,t)}break
case"plant":d.pe(B.w3,B.aQ6,5,D.dj,10)
d.a22(B.ftp,8,B.aaC,5,8)
d.a22(B.fv_,5,B.abr,4,8)
break
case"lamp":d.pe(B.w3,B.w4,4.5,B.rI,10)
d.pe(B.w4,B.ftN,0.7,B.rI,6)
d.cEV(B.ftL,B.ftQ,6,B.A3,3.5,12)
break
case"console":d.bU(B.ftz,B.fv6,f,0.15)
d.cH(B.fxj,B.aQc,t)
d.cH(B.fwn,B.aQc,t)
d.cH(B.Tc,B.fAv,t)
break
case"shelf":d.bU(B.ftC,B.fuV,f,0.1)
for(u=0;u<4;++u){t=10+u*15
d.cH(new A.M(0,t,1),B.fuO,B.rI)
w=D.o.F(u,2)
d.cH(new A.M(-8+w*6,t,2),B.fvv,[D.eM,D.dS,D.ff,D.dT][u])
d.cH(new A.M(4+w*4,t,2),B.fwa,[D.dT,D.ff,D.eM,D.dS][u])}break
default:d.cH(B.a7m,B.ftW,f)}},
fiL:function fiL(d){this.a=d},
fiG:function fiG(){},
fiH:function fiH(){},
fiI:function fiI(){},
fiJ:function fiJ(){},
fiK:function fiK(d){this.a=d},
fXS(){var w=x.S
return new A.bOI(C.ew([72],w),C.aX(w),C.aX(w),C.aX(w))},
hRr(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
aeW(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.nq(d)
a0.b=70
a0.iZ(B.fzI,B.fAK,B.bb1,4)
a0.c=1
a0.b=91
w=new A.fiQ(a0)
w.$3(B.fwQ,B.fwp,15)
w.$4$alongX(B.fAu,B.fyQ,11,!1)
w.$4$alongX(B.fvr,B.fww,11,!1)
w.$4$alongX(B.fAj,B.fx0,6,!1)
w.$4$alongX(B.fvU,B.fyR,6,!1)
for(v=0;v<=12;++v)a0.aAY(new A.M(-12+v*2,8.4,0),B.fzj,B.VK,!1,0.05)
a0.c=2
a0.b=92
u=new A.fiN(a0)
u.$2(B.ccj,B.rU)
u.$2(B.d1E,B.ns)
u.$2(B.d5T,B.ns)
t=new A.fiM(a0)
t.$1(B.cLk)
t.$1(B.cQL)
a0.c=3
a0.b=93
s=new A.fiP(a0)
s.$1(B.cKl)
s.$2$col(B.cIQ,B.wz)
s.$2$col(B.cI5,B.wz)
s.$1(B.cZP)
a0.c=4
a0.b=0
a0.d=0.22
a0.iZ(B.fwv,B.fyl,B.zS,4)
a0.iZ(B.fyj,B.aQG,B.zS,4)
a0.iZ(B.fwR,B.aQG,B.zS,4)
a0.iZ(B.fxq,B.aQK,B.zS,3)
a0.iZ(B.fBx,B.aQK,B.zS,3)
a0.d=1
a0.c=5
a0.e=0.3
a0.b=0
a0.q3(B.fAf,B.fwt,B.b8V,0.1,4)
a0.b=71
a0.bU(B.fzM,B.fzk,B.ab6,0.5)
a0.cH(B.fBh,B.fxf,B.DL)
r=[72,73,74,75,76]
for(q=a1.d,p=a1.e,v=0;v<5;++v){o=D.o.F(v,2)
n=D.o.an(v,2)
m=r[v]
l=q.t(0,m)
k=p.t(0,m)
a0.b=m
m=9.55+o*0.5
j=5.7-n*0.5
a0.bU(new A.M(m,j,-7.5),B.fwd,B.aeh,0.3)
if(l)i=0
else i=k?-0.07:0.07
if(l)h=D.cb
else h=k?D.bp:D.bW
a0.bU(new A.M(m+0,j+i,-7.42),B.fx3,h,0.4)}a0.b=90
a0.bU(B.fyT,B.fvu,B.bhv,0.1)
a0.bU(B.fAx,B.fwI,B.We,0.1)
a0.bU(B.fBR,B.aQY,B.We,0.1)
a0.bU(B.fwC,B.aQY,B.We,0.1)
g=new A.fiO(a0)
g.$3(81,B.fvZ,a1.x?B.wK:B.W_)
a0.b=81
a0.cH(B.fyU,B.aQS,B.DU)
a0.cH(B.fxN,B.aQS,B.DU)
g.$5$h$w(82,B.fBk,F.W9,0.65,0.4)
a0.b=82
a0.bU(B.fA2,B.fvt,B.abM,0.4)
f=!q.t(0,72)
a0.b=83
a0.e9(B.fzW,B.aQv,0.5,B.bfr,0.4,14)
a0.b7M(B.fAX,0.3,f?A1.W2:B.baK,0.7)
if(f){a0.b=0
a0.d=0.22
a0.iY(B.aQo,1.5,B.Vm,4,10,0)
a0.d=1}a0.b=94
a0.bU(B.fAQ,B.aR_,B.m0,0.1)
a0.bU(B.fz4,B.aR_,B.m0,0.1)
a0.bU(B.fBi,B.fwT,B.m0,0.1)
a0.q3(B.fyw,B.fAZ,B.E3,0.5,2)
a0.bU(B.fzK,B.fBN,B.DS,0.7)
a0.b=85
a0.jL(A.G3(B.cU3,0.2,6),0.055,B.kx,!1,0.9,8)
a0.b=84
a0.bU(B.fB5,B.fAa,B.W_,0.3)
a0.cH(B.fxx,B.fBg,a1.y?B.acj:B.aeb)
a0.b=86
a0.jL(A.G3(B.cLM,0.35,3),0.11,B.p8,!1,0.3,8)
a0.b=87
a0.e9(B.fy3,B.fzO,0.19,a1.c?B.V9:B.bdA,0.3,8)
a0.b=88
a0.bU(B.fva,B.fwh,B.zZ,0.7)
a0.K6(B.fzH,B.aQT,0.72,B.zZ,0.55,0.7,16)
a0.e9(B.aQT,B.fyD,0.78,B.bf4,0.7,16)
a0.b=89
a0.e9(B.fAA,B.aQq,0.85,B.b4N,0.6,18)
a0.e9(B.aQq,B.fyk,0.5,B.b4O,0.5,12)
a0.cH(B.fza,B.fBH,B.bdu)
a0.b=95
for(p=a1.f,m=a1.r,v=0;v<3;++v){e=B.csh[v]
if(m.t(0,v)){j=e.a
i=e.b
a0.cH(new A.M(j,i,-7.82),B.fzY,B.zS)
a0.cH(new A.M(j,i,-7.79),B.fyo,B.b7E)}else if(p.t(0,v)){j=e.a
i=e.b
a0.cH(new A.M(j,i,-7.82),B.fuq,B.adj)
a0.cH(new A.M(j,i,-7.8),B.fz2,B.bhL)}}if(a1.w){a0.b=96
a0.e9(B.fyq,B.fy0,0.1,D.dj,0.7,8)}a0.e=0
a0.c=6
a0.b=0
a0.d=0.4
a0.beE(B.aQj,B.aQR,B.a7s,B.a7q,B.abc,B.fyN,!0)
a0.beE(B.aQO,B.aQW,B.a7q,B.a7s,B.abc,B.fA1,!0)
a0.bfJ(B.aQj,B.aQW,B.a7q,B.abs)
a0.bfJ(B.aQR,B.aQO,B.a7s,B.abs)
a0.d=1
p=q.t(0,72)?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
q=q.t(0,72)?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
m=a1.b
j=m&&!a1.c?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
m=m&&!a1.c?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new A.zj(d,C.E([70,B.dUN,91,B.dUc,92,B.dUw,93,B.dUE,71,B.dUR,72,new A.db("Living room breaker",p,B.fBD,3.5),73,B.dUo,74,B.dUG,75,B.dU3,76,B.dUz,81,B.dUB,82,B.dTV,83,new A.db("Ceiling light",q,B.aQv,7),84,B.dUH,85,B.dU5,86,new A.db("P-trap under the sink",j,B.fzG,4.5),87,new A.db("Slip nut (leaking?)",m,B.aQx,3.5),88,B.dTS,89,B.dUF,90,B.dUJ,94,B.dUn,95,B.dUL,96,B.dTX],x.S,x.q),B.GA)},
hbG(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.nq(p)
o.c=5
o.e=0.8
if(d.w)for(w=e*1.5,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.iY(new A.M(3.4+Math.sin(v*2)*0.12,3.3-u*u*2.8,-7.7),0.05,D.K3,3,6,0.9)}if(d.as){u=D.k.F(e*1.1,1)
o.iY(new A.M(3,3.9-u*u*0.7,-6.95),0.05,B.Vj,3,6,0.9)}if(d.Q)for(w=e*1.6,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.iY(new A.M(8.2+Math.sin(v*1.7)*0.15,2.2-u*1.5,-7.2),0.05,B.Vj,3,6,0.9)}if(d.at){o.d=0.55
o.bU(B.fwB,B.fxt,B.bfh,0.8)
o.d=1}if(d.x)for(w=e*2,t=e*6,v=0;v<8;++v){u=D.k.F(w+v*0.13,1)
s=v*2.4+t
r=Math.cos(s)
s=Math.sin(s)
q=C.aq(E.Wh,E.Wm,1-u)
q.toString
o.iY(new A.M(-3.2+r*u*0.7,1.3+s*u*0.7,-7.6+u*0.3),0.05,q,3,5,0)}if(d.z&&!d.d.t(0,72)){o.b=0
o.d=D.k.D((Math.sin(e*17)+Math.sin(e*29)+2)/4*0.5,0,0.6)
o.iY(B.aQo,1.5,B.Vm,4,10,0)
o.d=1}if(d.b&&!d.c){for(w=e*1.3,v=0;v<5;++v){u=D.k.F(w+v*0.2,1)
o.iY(new A.M(3.05,1.45-u*u*1.4,-6.95),0.05,B.KF,3,6,0.9)}o.d=0.5
o.bU(B.fwo,new A.M(0.7+0.3*Math.sin(e),0.02,0.5),B.KF,0.9)
o.d=1}return p},
bOI:function bOI(d,e,f,g){var _=this
_.a=5
_.b=!0
_.c=!1
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=!1},
fiQ:function fiQ(d){this.a=d},
fiN:function fiN(d){this.a=d},
fiM:function fiM(d){this.a=d},
fiP:function fiP(d){this.a=d},
fiO:function fiO(d){this.a=d},
nc(d,e,f,g){var w
try{I.dE(d,"",e,0,f,g)}catch(w){}},
y4(){A.nc(880,80,0.25,"tri")
C.bN(R.af_,new A.fjJ(),x.H)},
htn(){return new A.Mu(null)},
WI(d,e,f,g,h,i,j,k,l,m,n,o,p,q){return new A.b4G(o,d,n,m,g,e,j,k,f,h,p,q,i,l,null)},
Q3(d,e,f,g,h){var w=null,v=g?e.j(0.25):D.w.j(0.5),u=C.m(18),t=C.I(g?e:D.b5,D.r,1),s=x.p,r=C.a([],s)
D.d.v(r,C.a([C.W(f,g?e:D.ad,w,w,w,16),D.eb],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:D.ad,w,w,w,w,w,w,w,w,12,w,w,D.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aE(w,C.p(w,C.A(r,D.m,w,D.e,D.Q,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.h5,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a9)},
y3(d,e,f,g){var w=null,v=f==null,u=v?D.dq:g.j(0.9),t=C.m(14),s=C.W(e,v?D.c_:D.w,w,w,w,18)
return C.D(C.aE(w,C.p(w,C.A(C.a([s,D.bo,new C.dm(1,D.ci,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.c_:D.w,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),D.L,w,w),w)],x.p),D.m,w,D.ba,D.j,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,w,w,w,D.uR,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a9),1)},
fzV(d,e,f,g){return C.bY(E.qv,null,new A.fzX(e,g,f),d,!0,!0,!0,D.nV,!1,!1,x.H)},
fjJ:function fjJ(){},
Jc:function Jc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Mu:function Mu(d){this.a=d},
bhm:function bhm(){this.d=!1
this.c=this.a=null},
dIW:function dIW(d){this.a=d},
dIZ:function dIZ(d){this.a=d},
dJ_:function dJ_(d){this.a=d},
dIY:function dIY(d){this.a=d},
dJ0:function dJ0(d){this.a=d},
dIX:function dIX(d){this.a=d},
dJ2:function dJ2(d){this.a=d},
dJ3:function dJ3(d){this.a=d},
dJ4:function dJ4(d){this.a=d},
dJ5:function dJ5(d){this.a=d},
dJ6:function dJ6(d){this.a=d},
dJ7:function dJ7(d){this.a=d},
dJ8:function dJ8(d){this.a=d},
dJ9:function dJ9(d,e){this.a=d
this.b=e},
dJ1:function dJ1(d){this.a=d},
b4G:function b4G(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
cov:function cov(d){this.a=d},
cow:function cow(d){this.a=d},
fzX:function fzX(d,e,f){this.a=d
this.b=e
this.c=f},
fzW:function fzW(){},
AT:function AT(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bQN:function bQN(d){this.a=d},
ab5:function ab5(d,e){this.c=d
this.a=e},
axY:function axY(d){var _=this
_.d=$
_.e=d
_.r=_.f=$
_.w=""
_.x=0
_.y=null
_.z=!1
_.Q=0
_.c=_.a=_.as=null},
d19:function d19(d,e,f){this.a=d
this.b=e
this.c=f},
d1a:function d1a(d){this.a=d},
d18:function d18(d){this.a=d},
d12:function d12(d){this.a=d},
d11:function d11(d){this.a=d},
d13:function d13(d){this.a=d},
d14:function d14(d){this.a=d},
d15:function d15(d,e){this.a=d
this.b=e},
d16:function d16(d,e){this.a=d
this.b=e},
d17:function d17(d){this.a=d},
d1b:function d1b(d){this.a=d},
d1j:function d1j(){},
d1t:function d1t(d,e,f){this.a=d
this.b=e
this.c=f},
d1k:function d1k(d){this.a=d},
d1i:function d1i(d){this.a=d},
d1l:function d1l(d){this.a=d},
d1h:function d1h(d){this.a=d},
d1m:function d1m(d){this.a=d},
d1n:function d1n(d){this.a=d},
d1o:function d1o(d,e){this.a=d
this.b=e},
d1g:function d1g(d,e){this.a=d
this.b=e},
d1p:function d1p(d){this.a=d},
d1f:function d1f(d){this.a=d},
d1q:function d1q(d){this.a=d},
d1e:function d1e(d){this.a=d},
d1r:function d1r(d){this.a=d},
d1d:function d1d(d){this.a=d},
d1s:function d1s(d){this.a=d},
d1c:function d1c(d){this.a=d},
aDU:function aDU(d){this.a=d},
aDV:function aDV(d){var _=this
_.d=d
_.f=_.e=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
eJe:function eJe(d,e,f){this.a=d
this.b=e
this.c=f},
eJf:function eJf(d){this.a=d},
eJd:function eJd(d){this.a=d},
eJ7:function eJ7(d){this.a=d},
eJ8:function eJ8(d,e){this.a=d
this.b=e},
eJ9:function eJ9(d,e){this.a=d
this.b=e},
eJa:function eJa(d,e){this.a=d
this.b=e},
eJb:function eJb(d){this.a=d},
eJc:function eJc(d,e){this.a=d
this.b=e},
eJj:function eJj(){},
eJn:function eJn(d,e){this.a=d
this.b=e},
eJk:function eJk(d){this.a=d},
eJl:function eJl(d,e){this.a=d
this.b=e},
eJi:function eJi(d,e){this.a=d
this.b=e},
eJm:function eJm(d){this.a=d},
eJh:function eJh(d){this.a=d},
eJg:function eJg(){},
ayc:function ayc(d){this.a=d},
ayd:function ayd(d){var _=this
_.d=d
_.f=_.e=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
d43:function d43(d,e,f){this.a=d
this.b=e
this.c=f},
d44:function d44(d){this.a=d},
d42:function d42(d){this.a=d},
d3W:function d3W(d){this.a=d},
d3Z:function d3Z(d){this.a=d},
d4_:function d4_(d,e){this.a=d
this.b=e},
d40:function d40(d,e){this.a=d
this.b=e},
d3Y:function d3Y(d){this.a=d},
d41:function d41(d,e){this.a=d
this.b=e},
d3X:function d3X(d){this.a=d},
d48:function d48(){},
d4e:function d4e(d,e){this.a=d
this.b=e},
d49:function d49(d){this.a=d},
d4a:function d4a(d){this.a=d},
d47:function d47(d){this.a=d},
d4c:function d4c(d,e){this.a=d
this.b=e},
d46:function d46(d,e){this.a=d
this.b=e},
d4b:function d4b(d){this.a=d},
d4d:function d4d(d){this.a=d},
d45:function d45(d){this.a=d},
az5:function az5(d){this.a=d},
az6:function az6(d){var _=this
_.d=d
_.f=_.e=$
_.r=0
_.w=""
_.x=null
_.y=!1
_.c=_.a=_.z=null},
db7:function db7(d,e,f){this.a=d
this.b=e
this.c=f},
db8:function db8(d){this.a=d},
db6:function db6(d){this.a=d},
db1:function db1(d){this.a=d},
db3:function db3(d,e){this.a=d
this.b=e},
db4:function db4(d,e){this.a=d
this.b=e},
db5:function db5(d,e){this.a=d
this.b=e},
db2:function db2(d){this.a=d},
dbg:function dbg(d,e){this.a=d
this.b=e},
dbb:function dbb(d,e){this.a=d
this.b=e},
dbd:function dbd(d){this.a=d},
dbc:function dbc(d){this.a=d},
dbe:function dbe(d){this.a=d},
dba:function dba(d){this.a=d},
dbf:function dbf(d){this.a=d},
db9:function db9(d,e){this.a=d
this.b=e},
jw:function jw(d,e){this.a=d
this.b=e},
LR:function LR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5D:function a5D(d){this.a=d},
c4s:function c4s(d){this.a=d},
h2I(){var w=x.N
return new A.cfg(C.aX(w),C.E(["n1",!1,"n2",!1],w,x.y),C.V(x.S,w))},
i11(d,e,f){var w,v
if(!f.c.t(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
fzj(){var w,v,u=C.a([B.aQg,B.fxW],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new A.M(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}D.d.v(u,A.G3(B.cVh,1,6))
return u},
bz1(d){var w,v,u,t,s="trap",r=C.a([],x.z),q=new A.nq(r)
q.b=49
q.q3(B.fuk,B.fv3,B.m0,0.1,2)
q.q3(B.fBv,B.fun,B.m0,0.1,2)
q.b=47
q.iZ(B.fyM,B.fv4,B.uE,3)
q.iZ(B.fuH,B.fuo,B.uE,3)
q.b=46
q.q3(B.fvw,B.fzn,B.E3,0.5,3)
q.b9H(B.fAe,B.aQ3,6.5,B.DS,!0,0.7,20)
q.e9(B.fzD,B.fxH,1.5,B.kx,0.85,14)
q.b=48
q.a2B(B.a7t,B.fwP,0.92,B.p8,!1,!0,0.3,14)
q.cPV(B.a7t,B.fB1,1,0.72,B.p8,0.3)
w=new A.fjq(d,q)
w.$5(41,B.a1b,B.kx,0.85,"tail")
w.$5(42,A.fzj(),B.p8,0.3,s)
w.$5(43,B.a20,B.p8,0.3,"arm")
w=new A.fjp(d,q)
v=d.a
w.$6(44,"n1",B.a7p,B.w4,B.fwZ,v.t(0,"tail")&&v.t(0,s))
w.$6(45,"n2",B.a7r,B.Td,B.fA9,v.t(0,s)&&v.t(0,"arm"))
if(v.t(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=A.fzj()
w=C.T(u).k("a2<1>")
t=C.B(new C.a2(u,new A.fjo(),w),w.k("H.E"))
if(t.length>1)q.aGt(t,0.4092,B.bhw,!1,!0,0.6,8)
q.d=1
q.e=0}return new A.zj(r,C.E([41,B.dU7,42,B.dU9,43,B.dUD,44,B.dUr,45,B.dUO,46,B.dUe,47,B.dUl,48,B.dTQ,49,B.dUb],x.S,x.q),B.GA)},
i_0(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.nq(p),n=d.d
if(n.length!==0){w=n==="n1"?B.fBJ:B.fAH
for(n=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=D.k.F(n+s*0.2,1)
o.iY(new A.M(v,u+(-r*6*r-r*1.5),t),0.22*(1-r*0.3),B.KF,3,6,0.9)}}else if(d.c){n=x.x
v=C.B(B.a1b,n)
u=A.fzj()
D.d.v(v,C.da(u,1,null,C.T(u).c))
D.d.v(v,C.da(B.a20,1,null,n))
for(n=e*0.45,s=0;s<18;++s){r=D.k.F(n+s/18,1)
q=D.o.D(D.k.bw(r*(v.length-1)),0,v.length-2)
u=v.length
o.iY(A.zB(v[q],v[q+1],r*(u-1)-q),0.38,B.bh_,3,6,0.9)}for(n=e*2.2,s=0;s<6;++s)o.iY(new A.M(0,14-D.k.F(n+s/6,1)*5.4,0),0.3,B.Vj,3,6,0.9)}return p},
af7(d){switch(d){case 61:return B.fuj
case 62:return B.fAF
case 63:return B.fyg
default:return B.fy6}},
fRq(d){var w=d==="hot",v=A.af7(w?61:62),u=A.af7(w?63:64),t=w?-1:1
return A.agk(C.a([v,v.ae(0,new A.M(t*0.6,2.2,1.2)),A.zB(v,u,0.5).ae(0,new A.M(t*1.4,0,2.6)),u.ae(0,new A.M(-t*0.2,-2,1)),u],x.o),6)},
aN9(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.nq(f)
e.b=67
e.iZ(B.fui,B.fuU,B.uE,3)
e.b=66
e.q3(B.fxV,B.fB0,B.E3,0.5,3)
e.pe(B.fzX,B.fyY,5.5,E.DX,16)
e.b=65
e.e9(B.fAR,B.aQN,3.4,B.kx,0.9,20)
e.jL(A.G3(B.d_m,1.4,6),0.5,B.kx,!0,0.9,12)
for(w=0;w<2;++w){v=B.cW_[w]
u=v*1.2
e.e9(new A.M(u,15.5,-3.6),new A.M(u,17.7,-3.6),0.38,B.kx,0.9,10)
t=v<0?B.rU:B.ns
e.e9(new A.M(u,17.7,-3.6),new A.M(u,18.6,-3.6),0.6,t,0.6,12)}for(u=[B.edL,B.e9F],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.e9(new A.M(v,15.3,-3.6),new A.M(v,11.4,-3.6),0.45,B.kx,0.9,10)
e.e9(new A.M(v,11.4,-3.6),new A.M(v,10.7,-3.6),0.3,B.bde,0.6,8)
e.yN(new A.M(v,11.3,-3.6),new A.M(v,11.9,-3.6),0.78,0.48,B.bf2,0.7,8)}for(u=[B.euJ,B.ewr],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.e9(new A.M(v,-1.5,-6),new A.M(v,-1.5,-3.6),0.4,B.JV,0.7,12)
e.e9(new A.M(v,-1.5,-4.4),new A.M(v,0.7,-4.4),0.78,B.rK,0.8,12)
e.e9(new A.M(v,0.7,-4.4),new A.M(v,1.5,-3.6),0.38,B.rK,0.8,10)
e.e9(new A.M(v,-0.2,-4.4),new A.M(v,-0.2,-3.1),0.2,B.aaT,0.7,8)
e.e9(new A.M(v,-0.2,-3.1),new A.M(v,-0.2,-2.8),0.95,t.c,0.5,12)
e.yN(new A.M(v,1.2,-3.6),new A.M(v,1.9,-3.6),0.78,0.4,B.rK,0.8,8)}for(u=x.o,w=0;w<2;++w){s=B.d1I[w]
t=s==="hot"
r=t?B.ctb:B.cto
q=C.T(r).k("a2<1>")
p=C.B(new C.a2(r,new A.fiF(d,s),q),q.k("H.E"))
e.b=t?68:69
o=t?B.rU:B.ns
t=p.length
if(t===2){n=A.fRq(s)
e.jL(n,0.34,B.Kw,!1,0.7,8)
m=n.length/2|0
e.jL(C.a([n[m-1],n[m],n[m+1]],u),0.4,o,!1,0.4,8)
for(t=r.length,l=0;l<t;++l){k=A.af7(r[l])
q=k.a+0
j=k.b
i=k.c+0
e.yN(new A.M(q,j+-0.2,i),new A.M(q,j+0.6,i),0.62,0.3,B.rK,0.8,8)}}else if(t===1){k=A.af7(D.d.gL(p))
h=D.d.gL(p)===D.d.gL(r)?1:-1
t=k.a+0
q=k.b
j=k.c
e.jL(C.a([k,new A.M(t,q+h*1.4,j+1),new A.M(t,q+h*3,j+2.4)],u),0.34,B.Kw,!1,0.7,8)
j+=0
e.yN(new A.M(t,q+-0.2,j),new A.M(t,q+0.6,j),0.62,0.3,B.rK,0.8,8)}}if(d.r){e.b=0
e.d=0.5
for(u=d.e,w=0;w<4;++w){g=B.a1W[w]
t=g.a
if(u.h(0,t)!=null)continue
t=A.af7(t)
q=g.c.t(0,"hot")?B.rU:B.ns
e.iY(new A.M(t.a+0,t.b+0,t.c+0.9),0.65,q,4,8,0.1)}e.d=1}return new A.zj(f,C.E([61,B.dTZ,62,B.dU0,63,B.dTU,64,B.dU1,65,B.dUm,66,B.dUi,67,B.dTR,68,B.dUS,69,B.dUp],x.S,x.q),B.GA)},
hQZ(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.nq(n)
if(!d.f)return n
w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"
t=new A.fkQ(e,m)
if(v){s=A.fRq("hot")
for(r=e*0.5,q=0;q<10;++q){p=D.k.F(r+q/10,1)
o=D.o.D(D.k.bw(p*(s.length-1)),0,s.length-2)
m.iY(A.zB(s[o],s[o+1],p*(s.length-1)-o),0.2,D.K3,3,6,0.9)}}else if(w.h(0,61)==null)t.$2(61,D.K3)
if(u){s=A.fRq("cold")
for(w=e*0.5,q=0;q<10;++q){p=D.k.F(w+q/10,1)
o=D.o.D(D.k.bw(p*(s.length-1)),0,s.length-2)
m.iY(A.zB(s[o],s[o+1],p*(s.length-1)-o),0.2,B.VP,3,6,0.9)}}else if(w.h(0,62)==null)t.$2(62,B.VP)
if(v&&u)for(w=e*2,q=0;q<8;++q){p=D.k.F(w+q/8,1)
r=C.aq(B.bh3,B.VP,0.5)
r.toString
m.iY(new A.M(0,21-p*6.5,1.6),0.26,r,3,6,0.9)}return n},
fRj(d){return D.d.de(B.a1W,new A.fkP(d))},
cfg:function cfg(d,e,f){var _=this
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
fjq:function fjq(d,e){this.a=d
this.b=e},
fjp:function fjp(d,e){this.a=d
this.b=e},
fjo:function fjo(){},
fiF:function fiF(d,e){this.a=d
this.b=e},
fkQ:function fkQ(d,e){this.a=d
this.b=e},
fkP:function fkP(d){this.a=d},
fMM(d,e,f){var w=x.N
w=new A.cf6(e,d,C.aX(w),C.V(w,x.S),C.aX(w))
w.buT(d,e,f)
return w},
hb1(b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=C.a([],x.z),b3=new A.nq(b2),b4=C.V(x.S,x.q),b5=C.a([],x.E),b6=b7.c
b6===$&&C.c()
w=b6.a==="bathroom"
v=w?28:0
b3.b=9199
b3.iZ(B.fAo,B.fBu,B.b7h,4)
b3.iZ(B.fzm,B.fAD,B.Vh,4)
b3.iZ(new A.M(v+19.8+0.6,24,16),B.fxG,B.uE,2)
b4.n(0,9199,B.dUa)
b3.b=9198
b3.bU(new A.M(v,0.6,10),B.fAP,B.m0,0.1)
b3.bU(new A.M(v,29.4,18.6),B.fxs,B.m0,0.1)
b3.bU(new A.M(v-19.4,13.6,10.5),B.fBj,B.m0,0.1)
for(u=[B.ezb,B.ez7,B.ey6,B.ey3],t=0;t<4;++t){s=u[t].a
b3.bU(new A.M(v+s[0],33,s[1]),new A.M(s[2],2.4,s[3]),B.E3,0.5)}b3.a2B(new A.M(v,27,8),new A.M(v,34.3,8),8,B.ae1,!1,!0,0.7,20)
b3.e9(new A.M(v,27,8),new A.M(v,27.2,8),8,B.b9G,0.5,20)
b3.pe(new A.M(v,27.1,8),new A.M(v,27.3,8),1.4,B.rI,12)
b3.a2B(new A.M(v+15,23.6,8),new A.M(v+19.4,23.6,8),0.92,B.p8,!1,!0,0.3,12)
b4.n(0,9198,B.dUA)
b3.b=9400
b3.e9(new A.M(-56,18,0),new A.M(-56,18,6),1.5,B.rK,0.8,12)
u=b7.r?B.ns:D.bp
b3.e9(new A.M(-57,18,6),new A.M(-55,18,6.5),4,u,0.5,14)
b3.e9(new A.M(-56,16,0),new A.M(-56,20,0),1,B.JV,0.7,10)
u=b7.r?"The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.":"The water is OFF. Turn it ON to test your work."
b4.n(0,9400,new A.db("Main water valve",u,new A.M(-56,18,4),22))
u=b7.r
s=u?"MAIN WATER: ON":"MAIN WATER: OFF"
u=u?D.dS:D.bp
b5.push(new A.vp(new A.M(-56,24,6),s,u))
r=new A.fjn(b3)
u=v-8
r.$1(u)
s=v+8
r.$1(s)
if(w)r.$1(-40)
q=new A.M(v,21,8)
p=new A.fjl(q)
o=new A.fjf(b3,b7)
n=new A.fjg(b3,b7)
m=new A.fjm(b7,b4,b9,b8,b5)
l=b6.c
for(b6=l.length,k=b7.x,j=b7.e,i=b7.f,h=x.o,t=0;t<b6;++t){g=l[t]
f=g.a
e=j.t(0,f)
if(e){d=b7.uG(0,f)
a0=i.h(0,f)
if(a0==null)a0=0
a1=d.r-a0>0}else a1=!1
a2=D.d.cJ(l,g)
a3=9100+a2
k.t(0,f)
switch(f){case"flange":a4=new A.M(-30,0.3,14)
if(e){b3.b=a3
b3.e9(a4,new A.M(-30,0.8999999999999999,14),5.5,B.p8,0.4,18)
b3.yN(new A.M(-30,0.8,14),new A.M(-30,1.2,14),5.5,3.2,B.rK,0.8,18)}else n.$3(f,new A.M(-30,0.8,14),B.ftY)
m.$3(g,a4,"Flange spot")
break
case"wax":a4=new A.M(-30,1.2,14)
if(e){b3.b=a3
b3.yN(a4,new A.M(-30,2.3,14),4.2,2.4,B.bhT,0.2,18)}else n.$3(f,new A.M(-30,1.7,14),B.fzw)
m.$3(g,a4,"Wax ring spot")
break
case"toilet":if(e){b3.b=a3
b3.K6(new A.M(-30,0.5,14),new A.M(-30,16,14),8.5,B.zZ,6,0.8,20)
b3.e9(new A.M(-30,16,14),new A.M(-30,17,14),9.5,B.KC,0.8,20)
b3.bU(new A.M(-30,22,4.5),B.aQ9,B.zZ,0.8)
b3.bU(new A.M(-30,29.2,4.5),B.fwy,B.KC,0.8)}else{b3.b=a3
b3.d=0.32
b3.pe(new A.M(-30,0.5,14),new A.M(-30,17,14),8.5,D.b2,16)
b3.cH(new A.M(-30,22,4.5),B.aQ9,D.b2)
b3.d=1}m.$3(g,new A.M(-30,12,12),"Toilet spot")
break
case"bolts":if(e){for(f=9200+a2*2,a5=0;a5<2;++a5){a6=B.avI[a5]
b3.b=f+(a6<0?0:1)
d=-30+a6
b3.e9(new A.M(d,0.5,17),new A.M(d,3.6,17),0.45,B.DS,0.8,8)
a0=a1?D.cy:B.DS
b3.e9(new A.M(d,3.4,17),new A.M(d,4.6,17),1.2,a0,0.8,6)}f=a1?"The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.":"The toilet is bolted down."
b4.n(0,a3,new A.db(g.c,f,new A.M(-30,3,17),20))}else for(a5=0;a5<2;++a5){a6=B.avI[a5]
b3.b=a3
b3.d=0.4
f=-30+a6
b3.pe(new A.M(f,0.5,17),new A.M(f,4.6,17),1.2,D.b2,8)
b3.d=1}m.$3(g,new A.M(-30,3,17),"Bolts")
break
case"tvalve":A.fQR(b3,a3,new A.M(-40,8,1.6),e,B.ns,new A.fjc(n,g,-30))
m.$3(g,new A.M(-40,8,2),"Valve")
break
case"those":if(e){b3.b=a3
b3.jL(A.agk(C.a([new A.M(-40,10,1.6),new A.M(-42,14,3.5),new A.M(-36,17,3.6),new A.M(-32,21,2.5)],h),6),0.55,B.Kw,!1,0.7,8)
b3.jL(C.a([new A.M(-36.8,15.5,3.6),new A.M(-35,16.4,3.6)],h),0.62,B.ns,!1,0.4,8)
if(a1)b3.pe(new A.M(-40,10,1.6),new A.M(-40,11.2,1.6),0.9,D.cy,8)}else o.$3$r(f,A.agk(C.a([new A.M(-40,10,1.6),new A.M(-42,14,3.5),new A.M(-36,17,3.6),new A.M(-32,21,2.5)],h),6),0.9)
m.$3(g,new A.M(-36,15,3),"Toilet hose")
break
case"faucet":if(e){b3.b=a3
b3.e9(new A.M(v,34.2,8),new A.M(v,34.6,8),3.6,B.kx,0.9,20)
b3.jL(A.G3(C.a([new A.M(v,34.6,8),new A.M(v,40,8),new A.M(v,43,10),new A.M(v,43,14),new A.M(v,41.2,14.6)],h),1.4,6),0.5,B.kx,!0,0.9,10)
for(a5=0;a5<2;++a5){a6=E.avG[a5]
f=v+a6
b3.e9(new A.M(f,34.6,8),new A.M(f,36.6,8),0.5,B.kx,0.9,8)
d=a6<0?B.rU:B.ns
b3.e9(new A.M(f,36.6,8),new A.M(f,37.6,8),0.8,d,0.6,10)}for(a5=0;a5<2;++a5){f=v+B.d4j[a5]
b3.e9(new A.M(f,34,8),new A.M(f,28.4,8),0.45,B.kx,0.9,8)}}else n.$3(f,new A.M(v,38,9),B.ftX)
m.$3(g,new A.M(v,38,8),"Faucet spot")
break
case"vhot":A.fQR(b3,a3,new A.M(u,8,1.6),e,B.rU,new A.fjd(n,g,v))
m.$3(g,new A.M(u,8,2),"Hot valve")
break
case"vcold":A.fQR(b3,a3,new A.M(s,8,1.6),e,B.ns,new A.fje(n,g,v))
m.$3(g,new A.M(s,8,2),"Cold valve")
break
case"hhot":case"hcold":a7=f==="hhot"
a8=a7?-1:1
d=v+a8*3
a9=A.agk(C.a([new A.M(v+a8*8,10.5,1.8),new A.M(v+a8*9,16,3.5),new A.M(v+a8*6,22,4.2),new A.M(d,27.5,6),new A.M(d,28.6,8)],h),6)
if(e){b3.b=a3
b3.jL(a9,0.5,B.Kw,!1,0.7,8)
b0=a9.length/2|0
f=C.a([a9[b0-1],a9[b0],a9[b0+1]],h)
b3.jL(f,0.58,a7?B.rU:B.ns,!1,0.4,8)
if(a1){f=D.d.gL(a9)
d=D.d.gL(a9)
b3.pe(f,new A.M(d.a+0,d.b+1.4,d.c+0),0.9,D.cy,8)
d=D.d.gam(a9)
b3.pe(new A.M(d.a,d.b-1.4,d.c),D.d.gam(a9),0.9,D.cy,8)}}else o.$3$r(f,a9,0.9)
f=a9[a9.length/2|0]
m.$3(g,f,a7?"Hot hose":"Cold hose")
break
case"tail":case"trap":case"arm":d=f==="tail"
if(d)a0=B.a1b
else a0=f==="trap"?A.fzj():B.a20
b1=p.$1(a0)
if(e){b3.b=a3
a0=d?B.kx:B.p8
b3.a58(b1,0.66,a0,!1,!0,!0,d?0.85:0.3,12)}else o.$3$r(f,b1,0.78)
a0=J.a8(b1)
a0=a0.h(b1,a0.gM(b1)/2|0)
if(d)f="Tailpiece"
else f=f==="trap"?"P-trap":"Trap arm"
m.$3(g,a0,f)
break}}b6=new A.fjj(l,b7,b3,b4)
b6.$4("trap",q.ae(0,B.a7p),B.w4,0)
b6.$4("arm",q.ae(0,B.a7r),B.Td,1)
return new A.zj(b2,b4,b5)},
fQR(d,e,f,g,h,i){if(!g){i.$0()
return}d.b=e
d.e9(f.ae(0,B.fzx),f.ae(0,B.aQM),0.9,B.rK,0.8,12)
d.e9(f.ae(0,B.aQM),f.ae(0,B.fxo),0.45,B.rK,0.8,10)
d.e9(f.ae(0,B.fAM),f.ae(0,B.aR0),0.3,B.aaT,0.7,8)
d.e9(f.ae(0,B.aR0),f.ae(0,B.fB6),1.2,h,0.5,12)},
hZV(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.nq(f),d=a0.x
if(d.a===0)return f
w=a0.c
w===$&&C.c()
v=new A.fz8(w.a==="bathroom"?28:0,-30)
for(d=C.ea(d,d.r,C.a3(d).c),u=d.$ti.c,t=a0.e;d.C();){s=d.d
if(s==null)s=u.a(s)
r=v.$1(s)
q=D.d.ix(w.c,new A.fz7(s)).b==="valve"||!t.t(0,s)
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
e.iY(new A.M(s+l*k*m,p+(k*j-k*k*i),o+(1.5+k*h)),g,B.KF,3,6,0.9);++n}}return f},
n7:function n7(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
VQ:function VQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cf6:function cf6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=g
_.r=!0
_.w=0
_.x=h
_.y=!1},
cfa:function cfa(d){this.a=d},
cfb:function cfb(d){this.a=d},
cf7:function cf7(d){this.a=d},
cfc:function cfc(d){this.a=d},
cfd:function cfd(d){this.a=d},
cfe:function cfe(){},
cff:function cff(){},
cf8:function cf8(d){this.a=d},
cf9:function cf9(d){this.a=d},
fjn:function fjn(d){this.a=d},
fjl:function fjl(d){this.a=d},
fjf:function fjf(d,e){this.a=d
this.b=e},
fji:function fji(d){this.a=d},
fjg:function fjg(d,e){this.a=d
this.b=e},
fjh:function fjh(d){this.a=d},
fjm:function fjm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fjc:function fjc(d,e,f){this.a=d
this.b=e
this.c=f},
fjd:function fjd(d,e,f){this.a=d
this.b=e
this.c=f},
fje:function fje(d,e,f){this.a=d
this.b=e
this.c=f},
fjj:function fjj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fjk:function fjk(d){this.a=d},
fz8:function fz8(d,e){this.a=d
this.b=e},
fz7:function fz7(d){this.a=d},
UQ:function UQ(d,e){this.d=d
this.a=e},
aCC:function aCC(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x=""
_.y=0
_.z=null
_.as=_.Q=!1
_.c=_.a=_.at=null},
ed7:function ed7(d,e,f){this.a=d
this.b=e
this.c=f},
ed8:function ed8(d){this.a=d},
ed6:function ed6(d){this.a=d},
ed0:function ed0(d){this.a=d},
ed9:function ed9(d){this.a=d},
ecT:function ecT(d,e){this.a=d
this.b=e},
ecU:function ecU(d,e){this.a=d
this.b=e},
ecV:function ecV(d){this.a=d},
ed_:function ed_(d){this.a=d},
ecY:function ecY(d){this.a=d},
ecZ:function ecZ(d,e){this.a=d
this.b=e},
ed5:function ed5(d){this.a=d},
ecX:function ecX(d,e,f){this.a=d
this.b=e
this.c=f},
ecW:function ecW(d,e,f){this.a=d
this.b=e
this.c=f},
eda:function eda(d){this.a=d},
ede:function ede(d,e){this.a=d
this.b=e},
edc:function edc(){},
edb:function edb(d){this.a=d},
edd:function edd(d,e){this.a=d
this.b=e},
ed4:function ed4(d){this.a=d},
ed2:function ed2(d,e){this.a=d
this.b=e},
ed1:function ed1(d,e){this.a=d
this.b=e},
ed3:function ed3(d,e){this.a=d
this.b=e},
kX(d){return D.d.ix(B.tH,new A.fHn(d))},
fNb(d,e,f,g){var w=x.S,v=x.N
w=new A.b3b(g,f,C.V(w,v),C.aX(w),C.aX(w),C.V(w,x.j),C.a([new A.Wu(),new A.Wu()],x.X),C.V(w,x.W),C.aX(w),C.V(w,v),C.aX(w),C.a([],x.s))
w.ceH(d,e)
return w},
hzd(d){var w
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
fHn:function fHn(d){this.a=d},
pF:function pF(d,e,f){this.a=d
this.b=e
this.c=f},
Wu:function Wu(){var _=this
_.a=!1
_.b=0
_.c=!0
_.d=!1},
aty:function aty(d,e){var _=this
_.a=!1
_.b=d
_.c=e
_.e=_.d=!1},
aRV:function aRV(d,e){this.a=d
this.b=e
this.c=!1},
eC:function eC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b3b:function b3b(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ck2:function ck2(){},
ck9:function ck9(d){this.a=d},
cka:function cka(d){this.a=d},
ckb:function ckb(d,e){this.a=d
this.b=e},
ckc:function ckc(d,e){this.a=d
this.b=e},
cke:function cke(d){this.a=d},
ckd:function ckd(d,e){this.a=d
this.b=e},
ck1:function ck1(d){this.a=d},
ck_:function ck_(){},
ck0:function ck0(d){this.a=d},
ck7:function ck7(){},
ck8:function ck8(){},
ck3:function ck3(){},
ck4:function ck4(d){this.a=d},
ck5:function ck5(d){this.a=d},
ckf:function ckf(d){this.a=d},
ck6:function ck6(d){this.a=d},
fM4(d,e,f){return new A.UT(e,f,d,null)},
kT:function kT(d,e,f){this.a=d
this.b=e
this.c=f},
UT:function UT(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.a=g},
aCJ:function aCJ(d,e,f){var _=this
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
ehu:function ehu(d,e,f){this.a=d
this.b=e
this.c=f},
ehv:function ehv(d){this.a=d},
eht:function eht(d){this.a=d},
egJ:function egJ(d){this.a=d},
egK:function egK(d){this.a=d},
egI:function egI(d){this.a=d},
egL:function egL(d){this.a=d},
egM:function egM(d){this.a=d},
egU:function egU(d){this.a=d},
egN:function egN(d){this.a=d},
ehb:function ehb(d,e){this.a=d
this.b=e},
egV:function egV(d){this.a=d},
ehq:function ehq(d){this.a=d},
ehr:function ehr(d){this.a=d},
ehs:function ehs(d,e){this.a=d
this.b=e},
eho:function eho(d){this.a=d},
ehp:function ehp(d,e){this.a=d
this.b=e},
ehn:function ehn(d){this.a=d},
ehj:function ehj(d){this.a=d},
ehk:function ehk(d,e,f){this.a=d
this.b=e
this.c=f},
ehl:function ehl(d){this.a=d},
ehm:function ehm(d,e,f){this.a=d
this.b=e
this.c=f},
ehw:function ehw(d,e){this.a=d
this.b=e},
egT:function egT(d){this.a=d},
egR:function egR(d){this.a=d},
egS:function egS(d,e){this.a=d
this.b=e},
egQ:function egQ(d){this.a=d},
egO:function egO(d){this.a=d},
egP:function egP(d,e){this.a=d
this.b=e},
egW:function egW(d,e){this.a=d
this.b=e},
eh9:function eh9(){},
eha:function eha(){},
egX:function egX(d){this.a=d},
egY:function egY(d){this.a=d},
egZ:function egZ(d){this.a=d},
eh1:function eh1(){},
eh2:function eh2(){},
eh3:function eh3(){},
eh4:function eh4(){},
eh5:function eh5(){},
eh6:function eh6(d){this.a=d},
eh7:function eh7(){},
eh8:function eh8(d){this.a=d},
eh_:function eh_(d){this.a=d},
eh0:function eh0(){},
ehN:function ehN(d,e){this.a=d
this.b=e},
ehP:function ehP(d){this.a=d},
ehB:function ehB(d){this.a=d},
ehO:function ehO(d){this.a=d},
ehE:function ehE(d){this.a=d},
ehF:function ehF(d,e){this.a=d
this.b=e},
ehD:function ehD(d,e){this.a=d
this.b=e},
ehG:function ehG(d,e){this.a=d
this.b=e},
ehC:function ehC(d,e){this.a=d
this.b=e},
ehQ:function ehQ(d,e){this.a=d
this.b=e},
ehA:function ehA(d,e){this.a=d
this.b=e},
ehR:function ehR(d){this.a=d},
ehz:function ehz(d){this.a=d},
ehS:function ehS(d,e){this.a=d
this.b=e},
ehy:function ehy(d,e){this.a=d
this.b=e},
ehT:function ehT(d){this.a=d},
ehU:function ehU(d){this.a=d},
ehV:function ehV(d,e,f){this.a=d
this.b=e
this.c=f},
ehx:function ehx(d,e,f){this.a=d
this.b=e
this.c=f},
ehH:function ehH(d){this.a=d},
ehI:function ehI(d,e){this.a=d
this.b=e},
ehJ:function ehJ(d){this.a=d},
ehK:function ehK(d){this.a=d},
ehL:function ehL(d){this.a=d},
ehM:function ehM(d){this.a=d},
ehi:function ehi(d){this.a=d},
ehh:function ehh(d){this.a=d},
ehe:function ehe(d,e){this.a=d
this.b=e},
ehc:function ehc(){},
ehd:function ehd(){},
ehf:function ehf(d,e){this.a=d
this.b=e},
ehg:function ehg(d,e){this.a=d
this.b=e},
a1x(d,e){var w=d.d,v=e.a,u=e.c,t=e.b,s=w.a,r=w.b
w=w.c
return d.c?new A.M(s+v,r-u,w+t):new A.M(s+v,r+t,w+u)},
fQ9(d,e,f){var w,v,u,t,s,r=d.a,q=e.d,p=e.c?A.Ks(r,1.5707963267948966,0,q):A.Ks(r,0,0,q)
r=C.a([],x.z)
for(q=p.length,w=0;w<p.length;p.length===q||(0,C.K)(p),++w){v=p[w]
u=v.d
u=u===0?0:f.$1(u)
r.push(new A.tc(v.a,v.b,v.c,u,v.e,v.f,v.r,v.w,v.x))}q=C.V(x.S,x.q)
for(u=d.b,u=u.gdL(u),u=u.gai(u);u.C();){t=u.gU(u)
s=f.$1(t.a)
t=t.b
q.n(0,s,new A.db(t.a,t.b,A.a1x(e,t.c),t.d))}return new C.z(r,q)},
hKV(a3,a4,a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.i,a2=C.ew([a4,a5],a1)
for(w=b1.length,v=0;v<b1.length;b1.length===w||(0,C.K)(b1),++v){u=b1[v].a
a2.J(0,D.k.D(u[0],a4,a5))
a2.J(0,D.k.D(u[1],a4,a5))}t=C.B(a2,a2.$ti.k("cl.E"))
D.d.fe(t)
for(w=C.T(b1).k("a2<1>"),u=w.k("H.E"),s=0;r=s+1,r<t.length;s=r){q=t[s]
p=t[r]
o=p-q
if(o<0.01)continue
n=(q+p)/2
m=C.B(new C.a2(b1,new A.fd5(n),w),u)
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
if(D.d.b8(m,new A.fd6(d)))continue
a0=!k||j>60?2:1
a3.iZ(new A.M(n,d,a8),new A.M(o,j,a9),b0,a0)}}},
Cj(c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=x.z,c2=C.a([],c1),c3=new A.nq(c2),c4=x.E,c5=C.a([],c4),c6=x.S,c7=C.V(c6,x.q)
c3.b=8001
c3.q3(B.fw3,B.fxY,B.KL,0.15,4)
c3.iZ(B.fvR,B.aQr,B.aaP,3)
c3.bU(B.fAq,B.fBc,B.Wp,0.5)
c3.cH(B.aQt,B.fvM,B.A5)
c3.cH(B.aQt,B.fBl,B.A5)
c3.iZ(B.fy1,B.aQr,B.aaP,3)
c3.bU(B.fvN,B.fy2,B.JL,0.15)
c3.bU(B.fyt,B.fy4,B.DC,0.8)
c3.b=0
c3.d=c8.gyc()?0.42:0.1
c3.iZ(B.fuY,B.fzs,c8.gyc()?B.qt:B.b3W,3)
c3.d=1
c3.b=8001
if(!c8.gyc())for(w=0;w<10;++w)c3.aAY(new A.M(-72+w*16,51.3,55),B.fzN,B.m0,!1,0.05)
else{c3.bU(B.fyK,B.fx4,D.c,0.2)
c3.bU(B.fBS,B.aQB,D.c,0.2)
c3.bU(B.fwA,B.aQB,D.c,0.2)}if(c8.gyc())c3.bU(B.fwG,B.fx7,B.qt,0.2)
c3.b=8001
c3.iZ(B.fB3,B.fBw,B.bar,2)
c3.bU(B.fAs,B.fvB,B.acD,0.1)
c3.bU(B.fAr,B.fvC,B.Vi,0.1)
c3.bU(B.fAn,B.aQk,B.Vi,0.1)
c3.bU(B.fuB,B.aQk,B.Vi,0.1)
c7.n(0,8001,B.dTT)
c3.b=8002
c3.q3(B.fBG,B.aQn,B.m0,0.05,3)
c3.q3(B.fve,B.aQn,B.m0,0.05,3)
c7.n(0,8002,B.dUk)
for(v=c8.y,w=0;u=$.Ga(),w<u.length;++w){t=1000+w
c3.b=t
c3.cAv(new A.M(u[w],0,-2.25),B.fzC,B.m0,!1,0.05,2)
s=v.t(0,w)?"This one has a hole for the cable.":"Tap it with the drill to put a hole through it."
c7.n(0,t,new A.db("Wall stud","A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. "+s,new A.M(u[w],20,-2),60))
if(v.t(0,w)){c3.b=0
c3.e=0.6
c3.cH(new A.M(u[w],40,-2.25),B.fvP,B.adj)
c3.e=0}}c3.b=8000
c3.bU(B.fuG,B.fu4,B.ab6,0.5)
c3.e=0.4
c3.cH(B.fxP,B.fAO,B.DL)
for(r=0;r<6;++r)for(v=19.5-r*3.6,q=0;q<2;++q)c3.bU(new A.M(61.6+q*4.8,v,0.5),B.ft9,B.aeh,0.3)
p=c8.ax&&!c8.ay
v=p?0.6:0
if(c8.ay)u=D.cb
else u=p?D.bL:D.k8
c3.bU(new A.M(64,-2.5+v,0.9),B.fx2,u,0.4)
c3.e=0
if(c8.ay)v="The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON."
else v=c8.ax?"The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.":"The power is OFF. Tap to turn it ON."
c7.n(0,8000,new A.db("Breaker panel",v,B.fvE,60))
c3.b=8003
for(v=c8.z,u=C.ea(v,v.r,C.a3(v).c),t=x.o,s=u.$ti.c;u.C();){o=u.d
n=A.kX(o==null?s.a(o):o)
o=n.d
m=o.a-0.35
l=C.a([B.fAd,B.fyJ,new A.M(m,40,-3.2)],t)
if(n.c)D.d.v(l,C.a([new A.M(m,51.4,-3.2),new A.M(m,51.4,o.c+11)],t))
else l.push(new A.M(m,o.b+11,-3.4))
c3.jL(A.G3(l,3,6),0.2,B.VS,!1,0.35,6)}c7.n(0,8003,B.dUI)
for(u=x.V,s=c8.Q,k=0;k<3;++k){j=B.nP[k]
i=s.h(0,j)
if(i==null||!i.a)continue
if(i.e)h=B.bfE
else h=i.d?B.bgZ:B.bgp
o=C.a([],u)
for(m=i.b,l=C.a3(m),g=new C.nI(m,m.r,l.k("nI<1>")),g.c=m.e,l=l.c;g.C();){m=g.d
if(m==null)m=l.a(m)
o.push(new C.cL([A.kX(m).d.a-1.15,A.kX(m).d.a+1.15,A.kX(m).d.b-2,A.kX(m).d.b+2]))}m=6100+k
c3.b=m
A.hKV(c3,j,j+48,-47,47,-0.25,0.5,h,o)
o=i.e?"Painted and finished.":"A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs."
c7.n(0,m,new A.db("Drywall sheet",o,new A.M(j+24,0,0),90))
c3.b=0
c3.e=0.3
for(o=i.c,m=C.a3(o),l=new C.nI(o,o.r,m.k("nI<1>")),l.c=o.e,m=m.c;l.C();){o=l.d
if(o==null)o=m.a(o)
f=D.o.an(o,10)
e=D.o.F(o,10)
c3.iY(new A.M($.Ga()[f],-40+e*16,0.1),0.34,B.DL,3,5,0.3)}c3.e=0}for(u=c9.a,o=u!=="tape",m=c8.as,l=u!=="mud",g=u==="sand",w=0;w<2;w=a1){d=-24+48*w
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
if(a2===0)h=B.bfH
else h=a3.c?B.bce:B.b85
c3.e=0.5
c3.cH(new A.M(d,0,0.08+0.02*a2),new A.M(2.2+a2*1.4,94,0.12),h)
c3.e=0}else if(!o||!l||g){c3.d=0.45
c3.e=0.6
c3.cH(new A.M(d,0,0.12),B.fxe,D.b2)
c3.e=0
c3.d=1}if(a3.d)a2="Smooth and ready for paint."
else if(!a3.a)a2="The joint between two sheets. It needs tape and three coats of joint compound."
else{a2=a3.b
a4=a2===1?"":"s"
a4="Taped, with "+a2+" coat"+a4+" of mud."
a2=a4}c7.n(0,a0,new A.db("Seam",a2,new A.M(d,0,0),70))}for(o=c9.b,m=c8.x,l=c8.at,g=x.N,a5=0;a5<7;++a5){n=B.tH[a5]
a0=n.a
a6=m.ag(0,a0)
a7=l.h(0,a0)
a8=o===a0&&a7!=null
if(!a6)continue
a2=n.c
if(a2)a9=n.e==="fan"?"fan":"light"
else{a4=a7==null?null:a7.a
a9=a4==null?"outlet":a4}if(a8){b0=A.Q4(a7.a)
a0=a7.b
b1=A.fQZ(b0,a0,!1)
b2=A.fQ9(b1,n,new A.fjr(n))
D.d.v(c2,b2.a)
c7.v(0,b2.b)
if(a0.f&&a0.c===0){a0=C.a([],c4)
for(a2=b1.c,a4=a2.length,b3=0;b3<a2.length;a2.length===a4||(0,C.K)(a2),++b3){b4=a2[b3]
a0.push(new A.vp(A.a1x(n,b4.a),b4.b,b4.c))}D.d.v(c5,a0)}}else if(a7!=null&&a7.b.c>=2){a4=a7.a
b5=a7.b
b6=b5.w
b7=C.a([],c1)
b8=new A.nq(b7)
b9=new A.avw(C.V(c6,g))
b9.c=2
b9.w=b6
if(a4==="light"||a4==="fan")A.h7G(b8,a4,b9)
else{A.h7m(b8,a4,-0.25,b6,!0)
A.h9I(b8,b6)}D.d.v(c2,A.fQ9(new A.zj(b7,B.dg0,B.GA),n,new A.fjs(n)).a)
if(!a2){c3.b=3000+a0
c3.e=0.4
c3.d=0.55
a2=n.d
b5=b5.w?D.aC:D.b9
c3.cH(new A.M(a2.a,a2.b,a2.c+0.2),B.fxh,b5)
c3.d=1
c3.e=0}c7.n(0,3000+a0,new A.db(A.hGO(a4),A.hGN(c8,a0),A.a1x(n,B.a7l),22))}else{a4=C.a([],c1)
A.h6I(new A.nq(a4),a9,!1)
D.d.v(c2,A.fQ9(new A.zj(a4,B.dgC,B.GA),n,new A.fjt(n)).a)
a2=a2?"Ceiling box":"Electrical box"
a4=v.t(0,a0)?"The box is mounted and the cable is in. A device can be wired here.":"The box is mounted. Pull the cable to it."
c7.n(0,2000+a0,new A.db(a2,a4,A.a1x(n,B.a7l),24))}}c0=new A.fjv(c3)
if(u==="wall"||u==="ceiling"||u==="fanbox")for(a5=0;a5<7;++a5){n=B.tH[a5]
c1=n.a
if(m.ag(0,c1))continue
c4=n.c
c6=n.d
s=c6.a
o=c6.b
a0=c4?new A.M(s,o-1,c6.c):new A.M(s,o,1.5)
a2=c4?B.fvV:B.fwX
c0.$4$round(2000+c1,a0,a2,c4)
c1=c4?new A.M(s,o-8,c6.c):new A.M(s,o+7,3)
c5.push(new A.vp(c1,n.b,D.fD))}else if(u==="cable")for(a5=0;a5<7;++a5){n=B.tH[a5]
c1=n.a
if(!m.ag(0,c1)||v.t(0,c1))continue
c4=n.c
c6=n.d
s=c6.a
o=c6.b
c6=c4?new A.M(s,o-1,c6.c):new A.M(s,o,1.5)
s=c4?B.aQp:B.fw4
c0.$5$col$round(2000+c1,c6,s,D.cq,c4)}else if(u==="knife")for(a5=0;a5<7;++a5){n=B.tH[a5]
if(n.c||!m.ag(0,n.a))continue
c1=n.d
c4=c1.a
i=c8.anH(c4)
if(i==null||i.b.t(0,n.a))continue
c0.$4$col(2000+n.a,new A.M(c4,c1.b,0.5),B.fx1,D.cy)}else if(u==="sheet")for(w=0;w<5;){j=B.a1Y[w]
c0.$3(6000+w,new A.M(j,0,0.3),B.fzF);++w
c5.push(new A.vp(new A.M(j,50,1),"edge "+w,D.fD))}else if(u==="screw")for(a5=0;a5<3;++a5){j=B.nP[a5]
i=s.h(0,j)
if(i==null||!i.a)continue
for(c1=c8.ao0(j),c4=c1.length,c6=i.c,o=j+48,b3=0;b3<c1.length;c1.length===c4||(0,C.K)(c1),++b3){f=c1[b3]
for(a0=f*10,a2=7000+a0,r=0;r<6;++r){if(c6.t(0,a0+r))continue
c0.$3(a2+r,new A.M($.Ga()[f],-40+r*16,0.5),B.aQh)}a2=$.Ga()
if(f+1<a2.length&&a2[f]+16<=o)for(a0=7500+a0,r=0;r<6;r+=2)c0.$4$col(a0+r,new A.M(a2[f]+8,-40+r*16+8,0.5),B.aQh,D.dx)}}if(!C.ew(["wall","ceiling","fanbox","cable","knife","sheet","screw",""],g).t(0,u))c1=D.d.t(B.GE,u)||C.ew(["outlet","gfci","switch","light","fan"],g).t(0,u)
else c1=!1
if(c1)for(c1=c8.CW,a5=0;a5<7;++a5){n=B.tH[a5]
if(D.d.t(B.GE,u)){c4=n.a
a7=l.h(0,c4)
if(a7!=null){c6=a7.a
c6=(c6==="outlet"||c6==="gfci")&&a7.b.c>=2&&!c1.ag(0,c4)}else c6=!1
if(c6){c6=n.d
c0.$4$col(3000+c4,new A.M(c6.a,c6.b,1.2),B.fxi,D.bc)}}else{c4=n.a
if(m.ag(0,c4)&&v.t(0,c4)&&!l.ag(0,c4)){c6=n.c
s=n.d
o=s.a
g=s.b
s=c6?new A.M(o,g-1,s.c):new A.M(o,g,1.2)
o=c6?B.aQp:B.fzA
c0.$4$round(2000+c4,s,o,c6)}}}for(c1=c8.CW,c1=new C.cJ(c1,C.a3(c1).k("cJ<1,2>")).gai(0);c1.C();){j=c1.d
c4=j.a
n=A.kX(c4)
c4=8100+c4
c3.b=c4
c6=n.d
d=c6.a
c6=c6.b
c3.jL(A.G3(C.a([new A.M(d,c6,2.5),new A.M(d,-46,3.5),new A.M(d,-46,22)],t),4,6),0.28,B.ad1,!1,0.2,6)
c3.bU(new A.M(d,c6,1.6),B.fwF,B.b5q,0.3)
c6=j.b
switch(c6){case"tv":c3.bU(new A.M(d,-45,24),B.fvm,B.acH,0.2)
c3.bU(new A.M(d,-19,24),B.fw1,E.DX,0.4)
break
case"lamp":c3.e9(new A.M(d,-47.5,24),new A.M(d,-46.5,24),6,B.V_,0.4,14)
c3.e9(new A.M(d,-46.5,24),new A.M(d,-22,24),1,B.KL,0.5,8)
c3.AZ(new A.M(d,-26,24),new A.M(d,-12,24),9,S.W1,!1,!0,5.5,0.2,16)
break
case"toaster":c3.bU(new A.M(d,-42.5,24),B.fuf,B.kx,0.8)
c3.cH(new A.M(d,-38,24),B.fAc,B.adQ)
break
default:c3.bU(new A.M(d,-43.5,24),B.fuw,B.acH,0.2)
c3.K6(new A.M(d-6,-38,24),new A.M(d+8,-38,24),3.4,B.Kt,3,0.6,12)
c3.aiE(new A.M(d-8,-43,24),B.ful,B.Kt,0.6,0)}v=A.hEZ(c6)
u="Plugged into "+n.b
c6=c6==="tv"?u+". Tap it to watch NGMY ads full screen. Use the Unplug tool to unplug it.":u+". Tap it to unplug."
c7.n(0,c4,new A.db(v,c6,new A.M(d,-35,20),60))}for(a5=0;a5<7;++a5){n=B.tH[a5]
c7.cg(0,2000+n.a,new A.fju(n))}return new A.zj(c2,c7,c5)},
hGO(d){var w
A:{if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}w="Outlet"
break A}return w},
hEZ(d){var w
A:{if("tv"===d){w="TV"
break A}if("lamp"===d){w="Lamp"
break A}if("toaster"===d){w="Toaster"
break A}w="Hair dryer"
break A}return w},
hGN(d,e){var w,v=d.at.h(0,e)
if(v==null)return""
if(v.b.w)return"BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one."
w=v.a
if(w==="switch")return d.ch.t(0,e)?"The switch is ON. Tap to turn it off.":"The switch is OFF. Tap to flip it on."
if(w==="light"||w==="fan")return d.akY(e)?"It is running.":"It is off. Flip its switch (breaker on)."
w=d.CW.h(0,e)
return"Tap with a TV, lamp, toaster or hair dryer in your hand to plug it in. Plugged: "+(w==null?"nothing":w)+"."},
i_9(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=C.a([],x.z),a2=new A.nq(a1)
for(w=D.d.gai(B.tH),v=new C.h2(w,new A.fzs()),u=a3.at,t=a4*7;v.C();){s=w.gU(0)
r=s.a
q=u.h(0,r)
if(q==null||q.b.c<1)continue
p=a3.akY(r)?t:0.4
a2.b=3000+r
s=s.d
r=s.a
o=s.b-6.6
s=s.c
for(n=0;n<4;++n){m=p+n*3.141592653589793/2
l=A.bBe(B.fu2,m)
a2.aiE(new A.M(r+l.a,o+l.b,s+l.c),B.fBp,B.b6p,0.3,m)}}w=a3.d
w===$&&C.c()
w=D.d.gai(w)
v=new C.h2(w,new A.fzt())
u=a4*5
while(v.C()){s=w.gU(0).a
if(a3.akY(s)){k=A.kX(s)
a2.b=0
a2.d=0.25+0.05*Math.sin(u)
s=k.d
a2.iY(new A.M(s.a,s.b-5,s.c),11,B.Vm,4,10,0)
a2.d=1}}for(w=a3.CW,v=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gai(0),u=a4*1.6,s=a4*6,r=a4*60,o=a4*0.6,l=a4*3;v.C();){j=v.d
i=j.a
if(w.ag(0,i))h=a3.ax&&!a3.ay&&a3.ajv(i)
else h=!1
if(!h)continue
g=A.kX(i).d.a
a2.b=8100+i
switch(j.b){case"tv":a2.e=0.8
a2.cH(new A.M(g,-19,25.7),B.fur,new T.lS(1,D.k.F(r,360),0.5,0.95).i7())
a2.cH(new A.M(g-20+40*D.k.F(o,1),-14+9*Math.sin(l),26),B.fvl,D.c)
a2.cH(new A.M(g-24,-34,26),B.fum,D.aJ)
a2.e=0
break
case"lamp":a2.b=0
a2.d=0.3+0.05*Math.sin(s)
a2.iY(new A.M(g,-19,24),11,O.V1,4,10,0)
a2.d=1
break
case"toaster":a2.e=0.8
i=C.aq(B.acj,O.W5,(Math.sin(s)+1)/2)
i.toString
a2.cH(new A.M(g,-38.2,24),new A.M(13,0.3,6),i)
a2.e=0
break
default:for(i=g+9,f=0;f<6;++f)a2.iY(new A.M(i+D.k.F(u+f/6,1)*22,-38+Math.sin(f*2)*2,24),0.6,B.bcA,3,5,0.2)}}for(w=new C.cJ(a5,C.a3(a5).k("cJ<1,2>")).gai(0),v=a4*0.7,u=a4*2.2;w.C();){j=w.d
s=j.b
if(a4>s)continue
k=A.kX(j.a)
e=D.k.D(s-a4,0,3)
a2.b=0
for(f=0;f<14;++f){d=D.k.F(u+f*0.137,1)
m=f*2.4+t
a0=A.a1x(k,new A.M(Math.cos(m)*d*7,Math.sin(m)*d*7-d*d*6,3+d*4))
s=D.k.D(e,0.3,1)
r=C.aq(E.Wh,E.Wm,1-d)
r.toString
a2.iY(a0,0.35*s,r,3,5,0)}a2.d=0.35
for(f=0;f<5;++f){d=D.k.F(v+f*0.2,1)
s=d*3
a2.iY(A.a1x(k,new A.M(Math.sin(f*1.7)*2,d*10,5+s)),1.2+s,B.bhG,3,6,0)}a2.d=1}return a1},
vO:function vO(d,e,f){this.a=d
this.b=e
this.c=f},
fd5:function fd5(d){this.a=d},
fd6:function fd6(d){this.a=d},
fjr:function fjr(d){this.a=d},
fjs:function fjs(d){this.a=d},
fjt:function fjt(d){this.a=d},
fjv:function fjv(d){this.a=d},
fju:function fju(d){this.a=d},
fzs:function fzs(){},
fzt:function fzt(){},
h3p(d,e){var w=new A.cnh(e,d,A.fXS())
w.bv5(4,d,e)
return w},
qP:function qP(d,e){this.a=d
this.b=e},
tZ:function tZ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Lj:function Lj(d,e){this.a=d
this.b=e
this.c=!1},
cnh:function cnh(d,e,f){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=3
_.r=_.f=0
_.w=!1},
cnm:function cnm(d){this.a=d},
cni:function cni(){},
cnk:function cnk(){},
cnl:function cnl(){},
cnj:function cnj(d){this.a=d},
apE:function apE(d,e){this.d=d
this.a=e},
aCN:function aCN(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x="inspect"
_.y=0
_.z=null
_.at=_.as=_.Q=!1
_.c=_.a=_.ax=null},
ejh:function ejh(d,e,f){this.a=d
this.b=e
this.c=f},
eji:function eji(d){this.a=d},
ejg:function ejg(d){this.a=d},
ej6:function ej6(d){this.a=d},
ejb:function ejb(d){this.a=d},
ejc:function ejc(d){this.a=d},
eja:function eja(d){this.a=d},
ejd:function ejd(d,e){this.a=d
this.b=e},
eje:function eje(d){this.a=d},
ejf:function ejf(d){this.a=d},
ej9:function ej9(d){this.a=d},
ej8:function ej8(d,e){this.a=d
this.b=e},
ej5:function ej5(d){this.a=d},
ej3:function ej3(d){this.a=d},
ej4:function ej4(d,e){this.a=d
this.b=e},
ej7:function ej7(d){this.a=d},
eju:function eju(d,e){this.a=d
this.b=e},
ejq:function ejq(){},
ejp:function ejp(d){this.a=d},
ejr:function ejr(){},
ejs:function ejs(){},
ejt:function ejt(d,e){this.a=d
this.b=e},
ejo:function ejo(d,e){this.a=d
this.b=e},
ejn:function ejn(d){this.a=d},
ejm:function ejm(d){this.a=d},
ejk:function ejk(d,e){this.a=d
this.b=e},
ejj:function ejj(){},
ejl:function ejl(d,e){this.a=d
this.b=e}},B,I,E,A2,K,S,L,T,M,A3
J=c[1]
C=c[0]
D=c[2]
F=c[91]
N=c[99]
O=c[110]
U=c[107]
P=c[102]
V=c[100]
W=c[93]
X=c[106]
G=c[84]
Y=c[97]
Z=c[104]
Q=c[103]
R=c[105]
A_=c[90]
A0=c[98]
A1=c[109]
H=c[92]
A=a.updateHolder(c[24],A)
B=c[88]
I=c[26]
E=c[89]
A2=c[61]
K=c[101]
S=c[108]
L=c[96]
T=c[51]
M=c[95]
A3=c[94]
A.M.prototype={
ae(d,e){return new A.M(this.a+e.a,this.b+e.b,this.c+e.c)},
aC(d,e){return new A.M(this.a-e.a,this.b-e.b,this.c-e.c)},
aK(d,e){return new A.M(this.a*e,this.b*e,this.c*e)},
a2y(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new A.M(w*v-u*t,u*s-r*v,r*t-w*s)},
gSW(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
gqq(d){var w=this,v=w.gSW()
return v<1e-9?w:new A.M(w.a/v,w.b/v,w.c/v)}}
A.tc.prototype={}
A.db.prototype={}
A.vp.prototype={}
A.zj.prototype={}
A.nq.prototype={
beE(d,e,f,g,h,i,j){var w=this,v=i.gqq(0)
w.a.push(new A.tc(C.a([d,e,f,g],x.o),v,h,w.b,0,w.d,!0,w.c,w.e))},
bfJ(d,e,f,g){var w=this,v=e.aC(0,d).a2y(f.aC(0,d)),u=v.gqq(0)
w.a.push(new A.tc(C.a([d,e,f],x.o),u,g,w.b,0,w.d,!0,w.c,w.e))},
JO(d,e,f,g,h,i,j){var w,v,u,t=e.a/2,s=e.b/2,r=e.c/2,q=new A.bUr(this,i,new A.bUs(j,d),new A.bUt(j),f,h),p=-t,o=-s,n=2*t,m=2*s
q.$4(new A.M(0,0,1),new A.M(p,o,r),new A.M(n,0,0),new A.M(0,m,0))
w=-r
q.$4(new A.M(0,0,-1),new A.M(t,o,w),new A.M(-2*t,0,0),new A.M(0,m,0))
v=-2*r
q.$4(new A.M(1,0,0),new A.M(t,o,r),new A.M(0,0,v),new A.M(0,m,0))
u=2*r
q.$4(new A.M(-1,0,0),new A.M(p,o,w),new A.M(0,0,u),new A.M(0,m,0))
if(g){q.$4(new A.M(0,1,0),new A.M(p,s,r),new A.M(n,0,0),new A.M(0,0,v))
q.$4(new A.M(0,-1,0),new A.M(p,o,w),new A.M(n,0,0),new A.M(0,0,u))}},
iZ(d,e,f,g){return this.JO(d,e,f,!0,0,g,0)},
aAY(d,e,f,g,h){return this.JO(d,e,f,g,h,1,0)},
q3(d,e,f,g,h){return this.JO(d,e,f,!0,g,h,0)},
bU(d,e,f,g){return this.JO(d,e,f,!0,g,1,0)},
cH(d,e,f){return this.JO(d,e,f,!0,0,1,0)},
cAv(d,e,f,g,h,i){return this.JO(d,e,f,g,h,i,0)},
aiE(d,e,f,g,h){return this.JO(d,e,f,!0,g,1,h)},
AZ(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=b4.aC(0,b3).gqq(0),a8=a7.b,a9=a7.a2y(Math.abs(a8)<0.9?B.w4:B.Td).gqq(0),b0=a7.a2y(a9).gqq(0),b1=b9<0?b5:b9,b2=new A.bUu(a9,c1,b0)
for(w=a6.a,v=b3.a,u=b3.b,t=b3.c,s=b4.a,r=b4.b,q=b4.c,p=x.o,o=a7.a*-1,a8*=-1,n=a7.c*-1,m=0;m<c1;){l=b2.$1(m);++m
k=b2.$1(m)
j=l.a
i=k.a
h=l.b
g=k.b
f=l.c
e=k.c
d=new A.M(j+i,h+g,f+e).gqq(0)
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
w.push(new A.tc(C.a([new A.M(a0,a1,a2),new A.M(a3,a4,a5),new A.M(i,g,e),new A.M(j,h,f)],p),d,b6,a6.b,c0,a6.d,b8,a6.c,a6.e))
if(b7){w.push(new A.tc(C.a([b3,new A.M(a3,a4,a5),new A.M(a0,a1,a2)],p),new A.M(o,a8,n),b6,a6.b,c0,a6.d,!1,a6.c,a6.e))
w.push(new A.tc(C.a([b4,new A.M(j,h,f),new A.M(i,g,e)],p),a7,b6,a6.b,c0,a6.d,!1,a6.c,a6.e))}}},
e9(d,e,f,g,h,i){return this.AZ(d,e,f,g,!0,!1,-1,h,i)},
K6(d,e,f,g,h,i,j){return this.AZ(d,e,f,g,!0,!1,h,i,j)},
a2B(d,e,f,g,h,i,j,k){return this.AZ(d,e,f,g,h,i,-1,j,k)},
pe(d,e,f,g,h){return this.AZ(d,e,f,g,!0,!1,-1,0,h)},
b9H(d,e,f,g,h,i,j){return this.AZ(d,e,f,g,h,!1,-1,i,j)},
cEU(d,e,f,g,h,i){return this.AZ(d,e,f,g,h,!1,-1,0,i)},
cEV(d,e,f,g,h,i){return this.AZ(d,e,f,g,!0,!1,h,0,i)},
iY(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=new A.bUq(b0,b1)
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
w.push(new A.tc(C.a([new A.M(v+j*a8,u+i*a8,t+h*a8),new A.M(v+g*a8,u+f*a8,t+e*a8),new A.M(v+d*a8,u+a0*a8,t+a1*a8),new A.M(v+a2*a8,u+a3*a8,t+a4*a8)],s),new A.M(j+g+d+a2,i+f+a0+a3,h+e+a1+a4).gqq(0),a9,a5.b,b2,a5.d,!1,a5.c,a5.e))}},
b7M(d,e,f,g){return this.iY(d,e,f,6,10,g)},
a22(d,e,f,g,h){return this.iY(d,e,f,g,h,0.4)},
a58(d,e,f,g,h,i,j,k){var w,v,u,t,s
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new A.M(u.a-t.a,u.b-t.b,u.c-t.c).gSW()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.a2B(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.iY(d[w],u,f,4,k,j)},
jL(d,e,f,g,h,i){return this.a58(d,e,f,!0,!1,g,h,i)},
aGt(d,e,f,g,h,i,j){return this.a58(d,e,f,g,!1,h,i,j)},
bfL(d,e,f,g,h){return this.a58(d,e,f,!0,!1,!0,g,h)},
yN(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.b9H(a4,a5,a6,a8,!1,a9,b0)
w=a5.aC(0,a4).gqq(0)
v=w.a2y(Math.abs(w.b)<0.9?B.w4:B.Td).gqq(0)
u=new A.bUv(v,b0,w.a2y(v).gqq(0))
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
s.push(new A.tc(C.a([new A.M(p+i*a7,m+h*a7,l+j*a7),new A.M(p+f*a6,m+e*a6,l+g*a6),new A.M(p+a0*a6,m+a1*a6,l+d*a6),new A.M(p+a2.a*a7,m+a2.b*a7,l+a2.c*a7)],r),n,a8,a3.b,a9,a3.d,!1,a3.c,a3.e))}}},
cPV(d,e,f,g,h,i){return this.yN(d,e,f,g,h,i,16)}}
A.Ay.prototype={
anB(d){var w,v,u,t=this
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
Gj(d,e){return this.n2(d,null,e,null)},
aGg(d){var w,v,u,t=this
if(!(t.y!=null||t.z!=null||t.Q!=null||t.as!=null))return
w=1-Math.exp(-d*7)
v=t.y
if(v!=null){u=A.zB(t.d,v,w)
t.d=u
if(u.aC(0,v).gSW()<0.02){v=t.y
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
amY(d){var w=this
w.z=null
w.c=D.k.D(w.c*d,6,w.f)
w.aZ()}}
A.bOA.prototype={
cNN(d){var w,v,u,t
for(w=this.a,v=w.length-1,u=d.a,t=d.b;v>=0;--v)if(w[v].a.gbI().a.contains(u,t))return w[v].b
return 0}}
A.b3o.prototype={
gbfw(d){var w=this.r.a
return w==null?0:w},
a6(d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=null,d1=d6.a,d2=d6.b,d3=0+d1,d4=0+d2
$.X()
w=C.L()
v=c9.x
u=C.aq(v,D.c,0.06)
u.toString
w.sau(new C.a7(D.b0,D.b6,D.x,C.a([u,v],x.O),d0,d0).aw(0,new C.aa(0,0,d3,d4)))
d5.aX(new C.aa(0,0,d3,d4),w)
t=Math.min(d1,d2)*1.15
s=d1/2
r=d2/2
d2=c9.c
q=new A.ckR(Math.cos(d2.a),Math.sin(d2.a),Math.cos(d2.b),Math.sin(d2.b))
p=new A.ckS(c9,q)
o=B.fyx.gqq(0)
n=o.ae(0,B.ftf).gqq(0)
m=C.a([],x.G)
d1=c9.w
d2=c9.b
l=d2.a
if(!(d1==null)){d3=C.B(l,x.e)
D.d.v(d3,d1.$1(c9.gbfw(0)))
l=d3}for(d1=l.length,d3=c9.e,d4=x.g,w=d3!==0,v=o.a,u=o.b,k=o.c,j=x.o,i=c9.f,h=i!=null,g=n.a,f=n.b,e=n.c,d=c9.r,a0=0;a0<l.length;l.length===d1||(0,C.K)(l),++a0){a1=l[a0]
if(h&&!i.$1(a1.w))continue
a2=C.a([],j)
for(a3=a1.a,a4=a3.length,a5=0;a5<a3.length;a3.length===a4||(0,C.K)(a3),++a5)a2.push(p.$1(a3[a5]))
a6=A.hG6(a2)
a2=a6.length
if(a2<3)continue
for(a7=0,a8=B.w3,a5=0;a5<a2;++a5){a9=a6[a5]
a3=a9.c
a7+=a3
a8=new A.M(a8.a+a9.a,a8.b+a9.b,a8.c+a3)}a2=1/a2
b0=q.$1(a1.b)
a3=b0.a
a4=b0.b
b1=b0.c
if(a3*(a8.a*a2)+a4*(a8.b*a2)+b1*(a8.c*a2)>0){if(!a1.r)continue
b0=new A.M(a3*-1,a4*-1,b1*-1)}a2=b0.a
a3=b0.b
a4=b0.c
b2=0.56+0.58*Math.max(0,a2*v+a3*u+a4*k)
b1=a1.e
b3=b1>0?Math.pow(Math.max(0,a2*g+a3*f+a4*e),28)*b1:0
b4=a1.c
if(w&&a1.d===d3){a2=d.a
a2=C.aq(b4,D.b2,0.28+0.14*Math.sin((a2==null?0:a2)*6))
a2.toString
b2+=0.12
b4=a2}a2=255*b3*0.55
b5=D.k.V(D.k.D(b4.gb6(b4)*255*b2+a2,0,255))
b6=D.k.V(D.k.D(b4.gbf()*255*b2+a2,0,255))
b7=D.k.V(D.k.D(b4.gbg(b4)*255*b2+a2,0,255))
a2=$.X()
a3=C.a([],d4)
b8=new C.aQ(a2.r,D.ap,d0,d0,a3)
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
b1=a4===d3&&w
m.push(new A.OO(b8,new C.w(a2,(b5&255)/255,(b6&255)/255,(b7&255)/255,D.t),a7/a3-a1.x,a4,a2<0.99,b1))}D.d.b1(m,new A.ckQ())
d1=c9.d.a
D.d.a8(d1)
$.X()
c2=C.L()
c2.b=D.V
c3=C.L()
c3.b=D.ae
c3.c=0.8
for(d3=m.length,d4=d5.a,a0=0;a0<m.length;m.length===d3||(0,C.K)(m),++a0){c4=m[a0]
v=c4.b
c2.r=v.gp(0)
u=c4.a
c5=c2.H()
k=u.e
d4.drawPath((k==null?u.e=new C.cF(u.gbI().a.snapshot()):k).a,c5)
c5.delete()
if(!c4.e){c3.r=v.gp(0)
c5=c3.H()
v=u.e
d4.drawPath((v==null?u.e=new C.cF(u.gbI().a.snapshot()):v).a,c5)
c5.delete()}v=c4.d
if(v!==0)d1.push(new C.z(u,v))}if(w){$.X()
c6=C.L()
c6.b=D.ae
c6.c=1.4
c6.r=D.c.j(0.35+0.25*Math.sin(c9.gbfw(0)*6)).gp(0)
for(d1=m.length,a0=0;a0<m.length;m.length===d1||(0,C.K)(m),++a0){c4=m[a0]
if(c4.f){d3=c4.a
c5=c6.H()
w=d3.e
d4.drawPath((w==null?d3.e=new C.cF(d3.gbI().a.snapshot()):w).a,c5)
c5.delete()}}}for(d1=d2.c,d2=d1.length,a0=0;a0<d1.length;d1.length===d2||(0,C.K)(d1),++a0){c7=d1[a0]
a9=p.$1(c7.a)
d3=a9.c
if(d3<1)continue
w=s+a9.a*t/d3
d3=r-a9.b*t/d3
c8=new C.km(new C.eo(c7.b,d0,d0,D.cO,d0,d0,d0,d0,d0,d0,new C.F(!0,D.c,d0,d0,d0,d0,11,D.u,d0,d0,d0,d0,d0,d0,d0,d0,d0,d0,d0,d0,d0,d0,d0,d0,d0,d0)),D.a5,D.ch,new C.jm(1),d0,d0,d0,d0,D.cd,d0)
c8.eO()
v=c8.b
u=v.c
v=v.a.c
b5=C.by(C.ct(new C.u(w,d3),v.gbb(v)+8,u+14),D.iA)
$.X()
u=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
u.r=c7.c.j(0.92).gp(0)
c5=u.H()
d4.drawRRect(C.ep(b5),c5)
c5.delete()
u=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
u.b=D.ae
u.c=1
u.r=D.ad.gp(0)
c5=u.H()
d4.drawRRect(C.ep(b5),c5)
c5.delete()
u=c8.b
v=u.c
u=u.a.c
c8.a6(d5,new C.u(w-v/2,d3-u.gbb(u)/2))}},
aq(d){return!0}}
A.OO.prototype={}
A.at5.prototype={
T(){return new A.bos(new A.bOA(C.a([],x.I)),new C.eL(0,$.aw()),D.bx,null,null)}}
A.bos.prototype={
a_(){var w,v=this
v.a1()
w=v.q6(new A.ePy(v))
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
w=C.a([C.jr(new C.et(C.b3(u,u,u,new A.b3o(s,r,v.e,q,p,o,t,v.a.x,new C.h3(w)),D.f_),u),D.q,u)],x.p)
v.a.toString
return C.oJ(D.jr,C.aE(D.c5,new C.an(D.W,u,D.b_,D.q,w,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.ePu(v),new A.ePv(v),u,u,u,u,u,u,u,new A.ePw(v),u,u,u,!1,D.a9),u,u,u,u,u,u,new A.ePx(v),u)}}
A.aLi.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.md.prototype={}
A.avw.prototype={}
A.zH.prototype={}
A.a3h.prototype={}
A.BL.prototype={
gj4(){return this.a==="ok"}}
A.aTe.prototype={}
A.q8.prototype={}
A.Df.prototype={}
A.u7.prototype={}
A.ps.prototype={}
A.a3K.prototype={
gG5(d){var w,v=this.c
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
gwy(){if(this.c!=="outside"){var w=this.ch
w=w==null?null:w.gtT()
if(w==null)w=!this.ax}else w=!0
return w},
gBD(){var w=this.c
if(w==="bathroom"||w==="kitchen"){w=this.CW
w=w==null?null:w.gajE()
if(w==null)w=!this.ay}else w=!0
return w},
Sz(d){var w,v,u,t
for(w=this.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
l5(d,e,f,g){var w=this,v=w.y++,u=f==null?0:f,t=new A.aTe(v,e,u,g==null?w.gya(0)*0.6:g)
w.x.push(t)
w.aBh(0,t)
return t},
J(d,e){return this.l5(0,e,null,null)},
aBh(d,e){var w,v,u,t=B.yw.h(0,e.b)
t.toString
w=(e.e&1)===1
v=w?t.d:t.c
u=w?t.c:t.d
t=v/2
e.c=D.k.D(e.c,-this.gG5(0)/2+t+1,this.gG5(0)/2-t-1)
t=u/2
e.d=D.k.D(e.d,t+1,this.gya(0)-t-1)}}
A.bOC.prototype={
c1w(){var w,v,u,t,s,r,q,p=this,o="back",n="bedroom",m="bathroom",l=new C.eS()
l.dH(p.a)
w=new A.bOD()
v=x.D
u=C.a([],v)
for(t=0;t<8;++t)u.push(new A.ps(o,-98+t*28,B.cOO[t]))
u.push(B.bw4)
u.push(B.bw6)
s=C.a([A.AI(0,"Bedroom 1",n,0,0,2,2,C.a([w.$1(-30)],v)),A.AI(1,"Bedroom 2",n,2,0,2,2,C.a([w.$1(-30)],v)),A.AI(2,"Bathroom 1",m,4,0,1,2,C.a([w.$1(-30)],v)),A.AI(3,"Bedroom 3",n,5,0,2,2,C.a([w.$1(-30)],v)),A.AI(4,"Bathroom 2",m,7,0,2,2,C.a([w.$1(-30)],v)),A.AI(5,"Hall","hall",0,2,9,1,u),A.AI(6,"Bedroom 4",n,0,3,2,2,C.a([w.$1(-30)],v)),A.AI(7,"Bedroom 5",n,2,3,2,2,C.a([w.$1(-30)],v)),A.AI(8,"Bathroom 3",m,4,3,1,2,C.a([w.$1(-30)],v)),A.AI(9,"Kitchen","kitchen",5,3,2,2,C.a([new A.ps(o,-50,5),B.bw7],v)),A.AI(10,"Living room","living",7,3,2,2,C.a([new A.ps(o,-70,5),B.bw5,B.bw3],v)),A.AI(11,"Garden","outside",0,5,9,1,C.a([B.bw2],v))],x.B)
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
bMr(d){var w="rug",v="nightstand",u="plant",t=d.gG5(0)/2
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
d.l5(0,u,d.gG5(0)/2-12,d.gya(0)-12)
break
case"hall":d.l5(0,w,0,36)
d.l5(0,u,108,50)
break}},
gKR(){var w,v,u=C.a([],x.B),t=this.c
t===$&&C.c()
w=0
for(;w<12;++w){v=t[w]
if(v.c!=="outside")u.push(v)}return u},
gcR6(){var w=this.gKR()
return new C.a2(w,new A.bOH(),C.T(w).k("a2<1>")).gM(0)},
gcO0(){var w=this.c
w===$&&C.c()
return new C.a2(w,new A.bOG(),C.T(w).k("a2<1>")).gM(0)},
gcO_(){var w=this.c
w===$&&C.c()
return new C.a2(w,new A.bOF(),C.T(w).k("a2<1>")).gM(0)},
gcGU(){var w=this.gKR()
return new C.a2(w,new A.bOE(),C.T(w).k("a2<1>")).gM(0)}}
A.aoI.prototype={
T(){var w=new C.BB()
$.Cv()
w.iT(0)
return new A.aC7(w)}}
A.aC7.prototype={
gbev(){var w=this.d
w===$&&C.c()
w=w.gKR()
return new C.a2(w,new A.e_y(),C.T(w).k("a2<1>")).gM(0)},
a_(){var w,v,u,t,s=this
s.a1()
s.a.toString
w=$.aTw==null
if(w){w=D.o.F(Date.now(),1e5)
$.aTw=A.fXR(w)}w=$.aTw
w.toString
s.d=w
v=s.a
w.b=v.e||w.b
u=new A.Ay(-0.12,0.5,200,B.ftD,$.aw())
u.f=520
u.w=0.9
s.e=u
if(v.d.length!==0){w=w.gKR()
t=new C.a2(w,new A.e_w(s),C.T(w).k("a2<1>"))
if(!t.gal(0))s.d.d=t.gL(0).a}w=s.d
v=w.c
v===$&&C.c()
s.f=A.hb_(v[w.d],"look",s.gbev(),0)
s.auY(!0)
if(s.a.d.length!==0)$.aT.x1$.push(new A.e_x(s))},
q(){var w=this.as
if(w!=null)w.a9(0)
this.a2()},
auY(d){var w,v,u,t=this.d
t===$&&C.c()
w=t.c
w===$&&C.c()
v=w[t.d]
u=(v.gG5(0)*1.2>v.gya(0)*1.4?v.gG5(0)*1.2:v.gya(0)*1.4)+30
t=this.e
if(d){t===$&&C.c()
t.d=new A.M(0,30,v.gya(0)*0.45)
t.c=u
t.a=-0.12
t.b=0.5}else{t===$&&C.c()
t.n2(u,0.5,new A.M(0,30,v.gya(0)*0.45),-0.12)}},
aWg(){return this.auY(!1)},
mB(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
t=w[t.d]
w=u.r
v=u.w
u.f=A.hb_(t,w,u.gbev(),v)},
aWi(d,e){var w=this,v=w.as
if(v!=null)v.a9(0)
w.m(new A.e_e(w,d,e))
w.as=C.cM(D.ed,new A.e_f(w))},
v8(d){return this.aWi(d,!0)},
Qy(d){this.m(new A.e_g(this,d))
A.nc(660,50,0.25,"tri")},
acc(d){var w=this,v=w.d
v===$&&C.c()
if(d===v.d)return
w.m(new A.dZS(w,d))
w.aWg()
A.nc(520,60,0.25,"tri")},
c1z(d){var w,v,u,t,s,r,q,p,o=this
if(d===0)return
if(d>=100&&d<200){if(o.r!=="furniture")return
o.m(new A.dZX(o,d))
w=o.d
w===$&&C.c()
v=w.c
v===$&&C.c()
u=v[w.d].Sz(o.w)
if(u!=null)o.v8(B.yw.h(0,u.b).a+": move it with the arrows.")
return}if(d===300||d===301||d===302){if(o.r!=="walls")return
o.m(new A.dZY(o,d))
o.v8("Wall picked. Choose a paint colour.")
return}if(d>=600&&d<620){t=d-600
w=o.d
w===$&&C.c()
v=w.c
v===$&&C.c()
w=v[w.d].w
if(t>=w.length)return
if(o.r==="doors"){o.m(new A.dZZ(o,t))
w=o.d
v=w.c
v===$&&C.c()
A.nc(v[w.d].at.t(0,t)?700:450,70,0.25,"tri")
return}w=w[t]
o.m(new A.e__(o,t))
A.nc(700,70,0.25,"tri")
C.bN(D.mQ,new A.e_0(o,t,w.c),x.P)
return}w=d===700
if(w||d===701){v=o.d
v===$&&C.c()
s=v.c
s===$&&C.c()
if(!s[v.d].gwy())o.Pn()
else o.aZS(w?0:1)
return}if(d===702||d===703){w=o.d
w===$&&C.c()
v=w.c
v===$&&C.c()
if(!v[w.d].gwy())o.Pn()
else{o.m(new A.e_1(o))
w=o.d
v=w.c
v===$&&C.c()
w=v[w.d]
r=w.db==="fan"
if(w.cy)w=r?"The fan spins.":"The light is on."
else w=r?"The fan stops.":"The light is off."
o.v8(w)
w=o.d
v=w.c
v===$&&C.c()
A.nc(v[w.d].cy?900:500,60,0.25,"tri")}return}if(d===720||d===721){w=o.d
w===$&&C.c()
v=w.c
v===$&&C.c()
s=d-720
q=v[w.d].cx.h(0,s)
if(q==null)return
p=A.fQX(q)
if(p.d>0){w=o.c
w.toString
I.fTG(w,0,p.a,!0,D.x1,p.b)}else o.aZS(s)
return}if(d===710||d===711||d===712||d===713){w=o.d
w===$&&C.c()
v=w.c
v===$&&C.c()
if(!v[w.d].gBD())o.ZB()
else{w=o.f
w===$&&C.c()
t=w.b.h(0,d)
if(t!=null)o.v8(t.a+": "+t.b)}}},
aZS(d){var w=this.c
w.toString
return C.bY(E.qv,null,new A.e_6(this,d),w,!0,!0,!1,D.nV,!1,!1,x.H)},
Pn(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$Pn=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.c
s===$&&C.c()
r=s[p.d]
if(r.c==="outside"){w=1
break}s=r.ch
if(s==null){q=A.fNb(A.i1P(r),r.b,!1,p.a*37+r.a)
q.aCQ()
if(!r.ax)q.cBu()
r.ch=q
p=q}else p=s
p.b=t.d.b
p=t.c
p.toString
w=3
return C.b(C.a5(p,!1).ci(C.em(new A.dZV(r),!1,null,x.H)),$async$Pn)
case 3:if(t.c==null){w=1
break}t.m(t.gaWh())
if(r.gwy())t.v8(r.b+": the wiring is finished. The light has power.")
case 1:return C.h(u,v)}})
return C.i($async$Pn,v)},
ZB(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$ZB=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.c
s===$&&C.c()
r=s[p.d]
s=r.c
if(!(s==="bathroom"||s==="kitchen")){t.aWi("This room has no plumbing. Bathrooms and the kitchen do.",!1)
w=1
break}q=r.CW
if(q==null){s=s==="kitchen"?"kitchen":"bathroom"
s=r.CW=A.fMM(!1,p.a*41+r.a,s)
p=s}else p=q
if(!r.ay&&!p.gvL())r.CW.cBt()
r.CW.b=t.d.b
p=t.c
p.toString
w=3
return C.b(C.a5(p,!1).ci(C.em(new A.dZU(r),!1,null,x.H)),$async$ZB)
case 3:if(t.c==null){w=1
break}t.m(t.gaWh())
if(r.gBD())t.v8(r.b+": the plumbing is finished and nothing leaks.")
case 1:return C.h(u,v)}})
return C.i($async$ZB,v)},
acd(d,e){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
v=w[t.d].Sz(u.w)
if(v==null)return
u.m(new A.dZT(u,v,d,e))},
c1D(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
v=w[t.d].Sz(u.w)
if(v==null)return
u.m(new A.e_h(u,v))},
ci9(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
v=w[t.d].Sz(u.w)
if(v==null)return
u.m(new A.e_b(u,v))
u.v8(B.yw.h(0,v.b).a+": "+B.cHO[v.f]+".")},
c1B(d){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
v=w[t.d].Sz(u.w)
if(v==null)return
u.m(new A.e_c(u,v))},
bwc(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.c
w===$&&C.c()
v.m(new A.dZD(v,w[u.d].J(0,d)))
v.v8(B.yw.h(0,d).a+" added. Move it with the arrows.")},
Yl(d,e,f,g,h){var w=null,v=e?g.j(0.25):D.c.j(0.07),u=C.m(14),t=e?g:D.b5
t=C.I(t,D.r,e?2:1)
v=C.a([C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e?g:D.c,w,w,w,w,w,w,w,w,12.5,w,w,D.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A_.Xe,w,w,w)],x.p)
if(h)v.push(C.ao(w,C.p(w,w,D.f,w,w,new C.o(D.aC,w,C.I(B.Ki,D.r,2),w,w,w,D.a6),w,11,w,w,w,w,w,11),w,w,w,-2,-3,w))
return new C.C(D.fw,C.aE(w,new C.an(D.W,w,D.aa,D.f,v,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a9),w)},
I8(d,e,f){return this.Yl(d,e,f,D.aJ,!1)},
auX(d,e,f,g){return this.Yl(d,e,f,g,!1)},
az9(d,e,f,g){var w=null,v=g==null,u=v?34:w,t=v?w:D.l2,s=C.m(10),r=e?D.c:D.b5
r=C.I(r,D.r,e?3:1)
if(v)v=w
else v=C.av(C.d(g,w,w,w,w,w,w,C.l(w,w,d.j_()>0.5?D.w:D.c,w,w,w,w,w,w,w,w,12,w,w,D.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w)
return new C.C(E.te,C.aE(w,C.p(w,v,D.f,w,w,new C.o(d,w,r,s,w,w,D.n),w,34,w,w,t,w,w,u),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a9),w)},
csR(d,e,f){return this.az9(d,e,f,null)},
GN(d,e){var w=null,v=D.c.j(0.1),u=C.m(10),t=C.I(D.b5,D.r,1)
return new C.C(D.fw,C.aE(w,C.p(w,C.W(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,36,w,w,w,w,w,40),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a9),w)},
bEt(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
switch(l.r){case"furniture":w=l.d
w===$&&C.c()
v=w.c
v===$&&C.c()
u=v[w.d].Sz(l.w)
w=x.p
v=C.a([],w)
if(u!=null)v.push(new C.a6(k,40,C.cB(C.a([l.GN(D.pr,new A.dZI(l)),l.GN(D.j7,new A.dZJ(l)),l.GN(D.v9,new A.dZK(l)),l.GN(D.tr,new A.dZL(l)),l.GN(F.aky,l.gc1C()),l.GN(D.mX,l.gci8()),l.GN(D.e4,l.gc1A(l))],w),k,k,k,k,D.aQ,!1),k))
else v.push(B.aTw)
w=C.a([],w)
for(t=B.yw.gdL(B.yw),t=t.gai(t);t.C();){s=t.gU(t)
r=s.b
w.push(l.auX(r.b+" "+r.a,!1,new A.dZM(l,s),D.b2))}v.push(new C.a6(k,40,C.cB(w,k,k,k,k,D.aQ,!1),k))
return C.v(v,D.m,k,D.e,D.Q,0,D.p)
case"walls":w=l.x
v=w<0
w=v?"All walls":"Wall "+(w+1)+": tap Look to reset"
v=C.a([l.I8(w,v,new A.dZN(l))],x.p)
for(q=0;q<8;++q)v.push(l.az9(B.auO[q],!1,new A.dZO(l,q),B.dan[q]))
return new C.a6(k,40,C.cB(v,k,k,k,k,D.aQ,!1),k)
case"floor":w=C.a([],x.p)
for(q=0;q<7;++q){v=B.auB[q]
t=l.d
t===$&&C.c()
s=t.c
s===$&&C.c()
w.push(l.az9(v.b,s[t.d].Q===q,new A.dZP(l,q),v.a))}return new C.a6(k,40,C.cB(w,k,k,k,k,D.aQ,!1),k)
case"ceiling":w=C.a([],x.p)
for(q=0;q<4;++q){v=B.ats[q]
t=l.d
t===$&&C.c()
s=t.c
s===$&&C.c()
w.push(l.csR(v,s[t.d].as===q,new A.dZQ(l,q)))}return new C.a6(k,40,C.cB(w,k,k,k,k,D.aQ,!1),k)
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
m=m==null?k:m.gtT()
if(m==null)m=!s.ax}else m=!0
if(m)if(r==="bathroom"||r==="kitchen"){r=s.CW
if(r==null)r=k
else r=r.gvL()&&r.gEQ()&&r.r&&r.y&&r.x.a===0
if(r==null)r=!s.ay}else r=!0
else r=!1
w.push(l.Yl("\ud83d\udeaa "+s.b,!1,new A.dZR(l,n),D.b2,!r))}}return new C.a6(k,40,C.cB(w,k,k,k,k,D.aQ,!1),k)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.d
f===$&&C.c()
w=f.c
w===$&&C.c()
v=w[f.d]
f=f.gcGU()
w=h.d.gKR().length
u=h.f
u===$&&C.c()
t=h.e
t===$&&C.c()
s=h.y
r=h.z
q=x.p
u=A.WI(t,new A.e_k(h),h.Q,s,g,g,new A.e_l(),r,104,new A.e_m(h),h.gc1y(),u,C.a([new A.bgq(h.d,h.gc1x(),g)],q),g)
r=h.I8("\ud83d\udc41 Look",h.r==="look",new A.e_o(h))
s=h.I8("\ud83d\udecb Furniture",h.r==="furniture",new A.e_p(h))
t=h.I8("\ud83e\uddf1 Walls",h.r==="walls",new A.e_q(h))
p=h.I8("\ud83d\udfeb Floor",h.r==="floor",new A.e_r(h))
o=h.I8("\u2b1c Ceiling",h.r==="ceiling",new A.e_s(h))
n=h.I8("\ud83d\udeaa Doors",h.r==="doors",new A.e_t(h))
m=h.Yl("\u26a1 Wiring",!1,h.gcak(),D.cq,!v.gwy())
l=v.c
l=(l==="bathroom"||l==="kitchen")&&!v.gBD()
l=h.Yl("\ud83d\udeb0 Plumbing",!1,h.gc9K(),D.cu,l)
k=h.auX("\ud83d\udcd8 Learn",!1,new A.e_u(d),D.by)
j=h.d.b
i=j?"\ud83d\udd25 Practice":"\ud83c\udf93 Learn mode"
return new A.AT(v.b,D.aJ,u,C.v(C.a([new C.a6(g,40,C.cB(C.a([r,s,t,p,o,n,m,l,k,h.auX(i,j,new A.e_v(h),D.cr)],q),g,g,g,g,D.aQ,!1),g),D.au,h.bEt()],q),D.F,g,D.e,D.Q,0,D.p),new A.e_n(h,d),""+f+"/"+w+" done",g)},
cgi(d){return C.bY(E.qv,null,new A.e_a(this),d,!0,!0,!0,D.nV,!1,!1,x.H)}}
A.bgq.prototype={
B(d){var w=null,v=D.w.j(0.6),u=C.m(12),t=C.I(D.b5,D.r,1)
return C.p(w,C.aE(w,C.b3(w,w,w,new A.bfP(this.c,w),B.eFL),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dlf(this),w,w,w,w,!1,D.a9),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.lB,w,w,w)}}
A.bfP.prototype={
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
l=l==null?g:l.gtT()
if(l==null)l=!u.ax}else l=!0
if(l)if(n==="bathroom"||n==="kitchen"){l=u.CW
if(l==null)l=g
else l=l.gvL()&&l.gEQ()&&l.r&&l.y&&l.x.a===0
if(l==null)l=!u.ay}else l=!0
else l=!1
if(l)k=D.bk
else{if(m){l=u.ch
l=l==null?g:l.gtT()
if(l==null)l=!u.ax}else l=!0
k=!l?D.aC:D.d4}l=C.by(p,D.hy)
$.X()
j=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
if(m){m=u.ch
m=m==null?g:m.gtT()
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
break A}h=new C.km(new C.eo(n,g,g,D.cO,g,g,g,g,g,g,B.eUX),D.a5,D.ch,new C.jm(1),g,g,g,g,D.cd,g)
h.eO()
n=h.b
m=n.c
n=n.a.c
h.a6(d,new C.u(t+(r-t)/2-m/2,s+(q-s)/2-n.gbb(n)/2))}},
aq(d){return!0}}
A.bOI.prototype={}
A.Jc.prototype={}
A.Mu.prototype={
T(){return new A.bhm()}}
A.bhm.prototype={
zW(d){var w=this.c
w.toString
return C.a5(w,!1).ci(C.em(new A.dIW(d),!1,null,x.H))},
bWS(d){var w
A:{if("ptrap"===d){w=B.aSf
break A}if("faucet"===d){w=B.aRJ
break A}if("house"===d){w=B.fFe
break A}w=new A.ab5(d,null)
break A}return this.zW(w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
$.aqi="tech"
w=C.aH(l,l,l,l,H.nK,l,l,l,new A.dIZ(d),l,l,l,l,l,l)
v=D.aJ.j(0.16)
u=C.m(13)
t=x.p
u=C.A(C.a([w,C.p(l,B.b2g,D.f,l,l,new C.o(v,l,C.I(D.aJ.j(0.6),D.r,1),u,l,l,D.n),l,40,l,l,l,l,l,40),D.aw,B.btA],t),D.m,l,D.e,D.j,0,l,l)
v=C.A(C.a([C.D(m.aWk("Learn mode",!m.d,D.bc,new A.dJ_(m)),1),D.ab,C.D(m.aWk("Practice mode",m.d,D.cr,new A.dJ0(m)),1)],t),D.m,l,D.e,D.j,0,l,l)
w=C.m(20)
s=C.I(D.aJ,D.r,1.6)
w=C.aE(l,C.p(l,C.A(C.a([B.f4Y,D.ew,B.btx,B.bCa],t),D.m,l,D.e,D.j,0,l,l),D.f,l,l,new C.o(l,l,s,w,l,B.bRG,D.n),l,l,l,l,D.bY,l,l,l),D.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.dJ2(m),l,l,l,l,l,l,!1,D.a9)
s=C.d("JOBS",l,l,l,l,l,l,B.aNd,l,l,l)
r=m.aWj(C.a([m.DA("\ud83d\udd0c","Wire a room","Go to a room that needs wiring",D.bk,new A.dJ3(m)),m.DA("\ud83d\udebd","Plumb a room","Go to a bathroom or kitchen",D.aX,new A.dJ4(m)),m.DA("\ud83d\udd27","Fix a house","Walk the house and fix every sign",D.aJ,new A.dJ5(m)),m.DA("\ud83e\uddf1","Build a room","Frame, drywall, then wire",D.bc,new A.dJ6(m)),m.DA("\u26a1","Wiring bench","Just the wiring, one room",D.cq,new A.dJ7(m)),m.DA("\ud83d\udcde","Service calls","A customer rings with problems",D.iY,new A.dJ8(m))],t))
q=C.d("LESSONS",l,l,l,l,l,l,B.aNd,l,l,l)
p=C.a([],t)
for(o=0;o<6;++o){n=B.cVA[o]
p.push(m.DA(n.b,n.c,n.d,n.e,new A.dJ9(m,n)))}p.push(m.DA("\ud83d\udcd8","Learn the trades","Short cards for beginners",D.by,new A.dJ1(m)))
return C.cb(l,D.bV,C.bo(!0,C.cB(C.a([u,D.ac,v,D.ac,w,new C.C(B.agL,s,l),r,new C.C(B.agL,q,l),m.aWj(p)],t),l,B.afP,l,l,D.ah,!1),!0,!1,D.ag,!0,!0),l,!1,!1,l,l)},
aWk(d,e,f,g){var w=null,v=e?f.j(0.2):D.c.j(0.06),u=C.m(14),t=e?f:D.b5
t=C.I(t,D.r,e?2:1)
return C.aE(w,C.p(w,C.av(C.d(d,w,w,w,w,w,w,C.l(w,w,e?f:D.ad,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.jp,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,D.a9)},
aWj(d){var w,v,u,t,s=null,r=x.p,q=C.a([],r)
for(w=0;v=d.length,w<v;w+=2){u=d[w]
t=w+1
v=t<v?d[t]:D.bH
q.push(new C.C(D.cG,new C.Dt(new C.co(D.aQ,D.e,D.j,D.aj,s,D.p,s,0,C.a([new C.bE(1,D.bi,u,s),D.ab,new C.bE(1,D.bi,v,s)],r),s),s),s))}return C.v(q,D.m,s,D.e,D.j,0,D.p)},
DA(d,e,f,g,h){var w=null,v=C.m(16),u=C.I(g.j(0.5),D.r,1)
return C.aE(w,C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,D.Ir,w,w,w),D.ao,C.d(e,w,w,w,w,w,w,W.Im,w,w,w),D.bz,C.d(f,w,2,D.a2,w,w,w,B.eQH,w,w,w)],x.p),D.F,w,D.e,D.j,0,D.p),D.f,w,w,new C.o(B.Ki,w,u,v,w,w,D.n),w,w,w,w,D.bl,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a9)}}
A.b4G.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.bZ(0,new A.at5(r.c,r.d,r.r,r.e,r.x,r.w,E.VM,q),0,0,0)],p),n=r.as,m=n!=null
if(m)o.push(C.ao(q,C.v(n,D.F,q,D.e,D.j,0,D.p),q,q,8,q,8,q))
n=C.a([],p)
w=r.at
if(w!=null)D.d.v(n,w)
n.push(r.auZ(D.hv,"Zoom in",new A.cov(r)))
n.push(r.auZ(D.xQ,"Zoom out",new A.cow(r)))
w=r.f
n.push(r.auZ(B.byM,"Back to the whole view",w))
o.push(C.ao(q,C.v(n,D.m,q,D.e,D.j,0,D.p),q,q,q,8,8,q))
n=r.y
if(n!=null){v=r.ay
if(v==null)m=m?60:10
else m=v
v=r.z
u=(v?D.e9:D.eD).j(0.95)
t=C.m(14)
s=C.I(v?D.bc:D.cr,D.r,1)
o.push(C.ao(q,C.p(q,C.d(n,q,q,q,q,q,q,B.eSe,q,q,q),D.f,q,q,new C.o(u,q,s,t,q,q,D.n),q,q,q,q,D.om,q,q,q),q,q,10,62,m,q))}n=r.Q
if(n!=null){m=C.m(16)
v=C.I(D.b5,D.r,1)
n=C.a([C.d(n.a,q,q,q,q,q,q,B.f2a,q,q,q),D.d0,C.d(n.b,q,q,q,q,q,q,E.SG,q,q,q)],p)
u=r.ax
if(u!=null)D.d.v(n,C.a([D.ao,u],p))
o.push(C.ao(8,C.p(q,C.A(C.a([C.D(C.v(n,D.F,q,D.e,D.j,0,D.p),1),C.aH(q,q,q,q,D.FV,q,q,q,w,q,q,q,q,q,D.c7)],p),D.F,q,D.e,D.j,0,q,q),D.f,q,q,new C.o(E.aay,q,v,m,q,q,D.n),q,q,q,q,E.afy,q,q,q),q,q,10,10,q,q))}return new C.an(D.W,q,D.aa,D.q,o,q)},
auZ(d,e,f){var w=null,v=D.w.j(0.55),u=C.I(D.b5,D.r,1)
return new C.C(D.eO,C.ho(C.aE(w,C.p(w,C.W(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,38,w,w,w,w,w,38),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a9),w,e,w,w),w)}}
A.AT.prototype={
B(d){var w=this,v=null,u=C.aH(v,v,v,v,H.nK,v,v,v,new A.bQN(d),v,v,v,v,v,v),t=w.d,s=C.D(C.d(w.c,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1),r=t.j(0.15),q=C.m(16),p=C.I(t.j(0.6),D.r,1),o=x.p
q=C.A(C.a([u,s,C.aE(v,C.p(v,C.A(C.a([C.W(A3.aj_,t,v,v,v,17),D.eb,C.d(w.w,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),D.m,v,D.e,D.Q,0,v,v),D.f,v,v,new C.o(r,v,p,q,v,v,D.n),v,v,v,v,D.tg,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,!1,D.a9)],o),D.m,v,D.e,D.j,0,v,v)
p=C.aI(d,v,x.w).w
return C.cb(v,D.bV,C.bo(!0,C.v(C.a([new C.C(B.brR,q,v),C.p(v,C.cd(w.f,D.q,v,D.y,v,v,v,v,D.ah),D.f,v,new C.aY(0,1/0,0,p.a.b*0.34),B.aYS,v,v,v,v,E.Xc,v,v,1/0),C.D(C.bv(A2.a8S,w.e,D.aq),1)],o),D.m,v,D.e,D.j,0,D.p),!0,!1,D.ag,!0,!0),v,!1,!1,v,v)}}
A.ab5.prototype={
T(){return new A.axY(new A.avw(C.V(x.S,x.N)))}}
A.axY.prototype={
gFv(){var w,v=this,u=v.d
if(u===$){w=A.Q4(v.a.c)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
gkJ(){var w=this.f
return w===$?this.f=new A.Ay(0.42,0.26,12,B.fwL,$.aw()):w},
gou(){var w=this,v=w.r
return v===$?w.r=A.fQZ(w.gFv(),w.e,!0):v},
q(){var w=this.as
if(w!=null)w.a9(0)
this.a2()},
km(d,e){var w=this,v=w.as
if(v!=null)v.a9(0)
w.m(new A.d19(w,d,e))
w.as=C.cM(D.l1,new A.d1a(w))},
oO(d){return this.km(d,!1)},
xh(){var w=this.e
w.d=w.d&&w.a&&w.c>=2
this.r=A.fQZ(this.gFv(),w,!0)},
nN(){var w=this,v=w.gkJ(),u=w.e.c===0,t=u?2.8:0.4
u=u?12:10
v.n2(u,0.26,new A.M(0,0.1,t),0.42)
w.m(new A.d12(w))},
c1E(){var w,v,u,t="ground",s=this.e,r=!s.a||s.c>0,q=new A.d11(this)
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
Ib(d){var w,v,u,t,s,r,q,p=this
if(d===0){p.nN()
return}w=p.gFv()
v=w.f
u=C.T(v).k("a2<1>")
t=C.B(new C.a2(v,new A.d13(d),u),u.k("H.E"))
v=w.a
s=A.hfP(v,d)
if(s!=null){u=p.e
u=u.c===0&&u.b.j0(0,s)}else u=!1
if(u){w=p.e
if(w.a){A.nc(180,220,0.25,"square")
p.oO("STOP! The power is still on. Turn the breaker OFF before you touch any wire.")
return}w=w.b
w.bn(w,new A.d14(s))
p.m(p.gc1H())
p.km("Wire taken off the screw.",!0)
return}if(t.length!==0&&p.w.length!==0&&p.e.c===0){u=p.e
r=A.hfL(w,u,p.w,D.d.gL(t),!1)
if(r!=null){++p.Q
A.nc(180,220,0.25,"square")
p.oO(r)}else{A.y4()
p.m(new A.d15(p,d))
if(A.bBD(w,u))p.km("Every wire is on the right screw. Now push the device into the box.",!0)
else p.km(D.d.gL(t).b+": fastened correctly.",!0)
p.gkJ().Gj(7,A.bzl(v,d,u))
p.w=""}return}q=p.gou().b.h(0,d)
if(q!=null){p.m(new A.d16(p,d))
w=p.gkJ()
v=q.c
w.Gj(q.d,v)}},
cfg(){var w,v=this
v.m(new A.d17(v))
w=v.e
if(w.a){A.nc(120,200,0.25,"saw")
if(w.c===0)v.oO("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{A.nc(600,100,0.25,"tri")
v.km("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
cu7(){var w,v,u=this
u.m(new A.d1b(u))
A.y4()
w=u.gFv().a
A:{if("switch"===w){v="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===w){v="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}v="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: "+u.Q+"."
break A}u.km(v,!0)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c1E(),a2=D.d.be(a1,new A.d1j())
if(a2<0)w="All done"
else{d.gFv()
w="Step "+(a2+1)+"/7"}v=d.gFv()
u=d.e
t=A.bBD(v,u)&&!u.a
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
i=C.W(k?D.h6:B.ajR,D.c,a0,a0,a0,18)
h=x.p
l=A.WI(r,a0,o,q,n,a0,a0,p,a0,d.gI9(),d.gIa(),s,C.a([C.aE(a0,C.p(a0,C.A(C.a([i,D.eb,C.d(k?"Breaker ON (live)":"Breaker OFF (safe)",a0,a0,a0,a0,a0,a0,D.nb,a0,a0,a0)],h),D.m,a0,D.e,D.Q,0,a0,a0),D.f,a0,a0,new C.o(m,a0,j,l,a0,a0,D.n),a0,a0,a0,a0,D.h5,a0,a0,a0),D.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.gcff(),a0,a0,a0,a0,a0,a0,!1,D.a9)],h),C.a([A.Q3("Hints",D.aJ,D.qO,u.e,new A.d1k(d)),D.ao,A.Q3("Labels",D.aX,M.MP,u.f,new A.d1l(d)),D.ao,A.Q3("Brass side",B.bfO,E.ajX,!1,new A.d1m(d)),D.ao,A.Q3("Silver side",B.Kk,D.MV,!1,new A.d1n(d)),D.P],h))
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
s.push(new C.C(D.j4,C.aE(a0,C.p(a0,new C.co(D.aQ,D.e,D.j,D.m,a0,D.p,a0,0,m,a0),D.f,a0,a0,new C.o(f.c,a0,new C.bP(e,e,e,e),new C.bs(p,p,p,p),a0,a0,D.n),a0,a0,a0,a0,D.hH,a0,a0,a0),D.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new A.d1o(d,f),a0,a0,a0,a0,a0,a0,!1,D.a9),a0))}s=C.c3(D.bE,s,D.bw,6,8)
if(t)u="Push it into the box"
else u=u.a?"Turn the breaker OFF first":"Fasten every wire first"
D.d.v(j,C.a([s,D.P,C.A(C.a([A.y3(u,B.akw,t?new A.d1p(d):a0,D.aJ)],h),D.m,a0,D.e,D.j,0,a0,a0)],h))}else if(s===1)D.d.v(j,C.a([C.A(C.a([A.y3("Pull it back out",D.qR,new A.d1q(d),D.ad),D.ab,A.y3("Put the cover plate on",L.va,new A.d1r(d),D.aJ)],h),D.m,a0,D.e,D.j,0,a0,a0)],h))
else{s=A.y3("Start over",D.l8,new A.d1s(d),D.ad)
u=u.d
r=u?"Tested \u2713":"Power on and test"
D.d.v(j,C.a([C.A(C.a([s,D.ab,A.y3(r,D.h6,u?a0:d.gcu6(),D.aJ)],h),D.m,a0,D.e,D.j,0,a0,a0)],h))}return new A.AT(v.b,D.aJ,l,C.v(j,D.m,a0,D.e,D.Q,0,D.p),new A.d1t(d,a3,a1),w,a0)}}
A.aDU.prototype={
T(){return new A.aDV(A.h2I())}}
A.aDV.prototype={
gkJ(){var w=this.e
return w===$?this.e=new A.Ay(-0.3,0.18,40,B.aQm,$.aw()):w},
gou(){var w=this.f
return w===$?this.f=A.bz1(this.d):w},
q(){var w=this.z
if(w!=null)w.a9(0)
this.a2()},
km(d,e){var w=this,v=w.z
if(v!=null)v.a9(0)
w.m(new A.eJe(w,d,e))
w.z=C.cM(D.l1,new A.eJf(w))},
oO(d){return this.km(d,!1)},
nN(){this.gkJ().n2(40,0.18,B.aQm,-0.3)
this.m(new A.eJ7(this))},
Ib(d){var w,v,u,t,s,r,q=this,p="square"
if(d===0){q.nN()
return}w=C.E([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!q.d.a.t(0,w)){v=q.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
q.oO("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){A.nc(180,220,0.25,p)
u=q.r
A:{if("tail"===u){v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break A}if("trap"===u){v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break A}v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break A}q.oO(v)
return}if(w==="trap"&&!q.d.a.t(0,"tail")){A.nc(180,220,0.25,p)
q.oO("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!q.d.a.t(0,"trap")){A.nc(180,220,0.25,p)
q.oO("The trap arm joins the trap. Put the P-trap on first.")
return}q.m(new A.eJ8(q,w))
A.y4()
q.km("Piece in place. "+(q.d.a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){t=v?"n1":"n2"
if(q.d.b.h(0,t)!==!0){q.m(new A.eJ9(q,t))
A.y4()
q.km("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}s=q.gou().b.h(0,d)
if(s!=null){q.m(new A.eJa(q,d))
v=q.gkJ()
r=s.c
v.Gj(s.d,r)}},
c1J(){var w=this,v=x.K,u=C.B(new C.a2(C.a(["n1","n2"],x.s),new A.eJb(w),v),v.k("H.E"))
w.m(new A.eJc(w,u))
if(u.length!==0){A.nc(180,220,0.25,"square")
w.oO("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{A.y4()
w.km("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d,i=j.a,h=i.t(0,"tail"),g=i.t(0,"trap"),f=i.t(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=D.d.be(w,new A.eJj())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.gou()
g=l.gkJ()
f=l.w
e=l.x
t=l.y
s=f!==0?l.gou().b.h(0,l.w):k
h=A.WI(g,new A.eJk(l),t,f,s,k,k,e,k,l.gI9(),l.gIa(),h,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=B.d8A[r]
g=i.t(0,q)?k:new A.eJl(l,q)
f=i.t(0,q)?D.dq:D.fl
t=new C.aV(14,14)
p=l.r===q
o=p?D.b2:D.b5
n=new C.aA(o,p?3:1,D.r,-1)
o=C.a([],e)
if(i.t(0,q))o.push(B.e0T)
p=B.dgf.h(0,q)
p.toString
m=i.t(0,q)?D.c_:D.c
o.push(new C.x(p,k,new C.F(!0,m,k,k,k,k,13,D.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k))
s.push(new C.C(D.j4,C.aE(k,C.p(k,new C.co(D.aQ,D.e,D.j,D.m,k,D.p,k,0,o,k),D.f,k,k,new C.o(f,k,new C.bP(n,n,n,n),new C.bs(t,t,t,t),k,k,D.n),k,k,k,k,D.hH,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,D.a9),k))}i=C.c3(D.bE,s,D.bw,6,8)
g=A.y3("Start over",D.l8,new A.eJm(l),D.ad)
f=u?"Run the water":"Build the drain first"
return new A.AT("Sink drain (P-trap)",D.cu,h,C.v(C.a([i,D.P,C.A(C.a([g,D.ab,A.y3(f,D.pD,u?l.gc1I():k,D.cu)],e),D.m,k,D.e,D.j,0,k,k)],e),D.m,k,D.e,D.Q,0,D.p),new A.eJn(d,w),j,k)}}
A.ayc.prototype={
T(){return new A.ayd(A.h2I())}}
A.ayd.prototype={
gkJ(){var w=this.e
return w===$?this.e=new A.Ay(-0.25,0.2,36,B.aQ7,$.aw()):w},
gou(){var w=this.f
return w===$?this.f=A.aN9(this.d):w},
q(){var w=this.z
if(w!=null)w.a9(0)
this.a2()},
km(d,e){var w=this,v=w.z
if(v!=null)v.a9(0)
w.m(new A.d43(w,d,e))
w.z=C.cM(D.l1,new A.d44(w))},
oO(d){return this.km(d,!1)},
nN(){this.gkJ().n2(36,0.2,B.aQ7,-0.25)
this.m(new A.d3W(this))},
Ib(d){var w,v,u,t,s,r,q=this
if(d===0){q.nN()
return}w=x.a
v=C.B(new C.a2(B.a1W,new A.d3Z(d),w),w.k("H.E"))
if(v.length!==0&&q.r.length!==0){w=q.d
u=A.i11(w,q.r,D.d.gL(v))
if(u!=null){A.nc(180,220,0.25,"square")
q.oO(u)}else{A.y4()
q.m(new A.d4_(q,d))
q.gkJ().Gj(12,A.af7(d))
q.km(A.fRj(w)?"All four ends are connected. Now open the valves.":D.d.gL(v).b+": connected.",!0)}return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.d.e.j0(0,t)){q.m(new A.d40(q,t))
q.km("Hose taken off.",!0)
return}}s=q.gou().b.h(0,d)
if(s!=null){q.m(new A.d41(q,d))
w=q.gkJ()
r=s.c
w.Gj(s.d,r)}},
c1G(d){var w,v=this
v.m(new A.d3X(v))
w=v.d
if(!w.f){v.km("Valves closed.",!0)
return}if(A.fRj(w)){A.y4()
v.km("Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",!0)}else{A.nc(180,220,0.25,"square")
v.oO("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d,i=j.r||j.e.a!==0,h=j.e,g=h.h(0,61)==="hot"&&h.h(0,63)==="hot",f=h.h(0,62)==="cold"&&h.h(0,64)==="cold",e=C.a([i,g,f,j.f&&A.fRj(j)],x.u),d=D.d.be(e,new A.d48())
i=d<0?"All done":"Step "+(d+1)+"/4"
g=l.gou()
f=l.gkJ()
w=l.w
v=l.x
u=l.y
t=w!==0?l.gou().b.h(0,l.w):k
s=x.p
g=A.WI(f,new A.d49(l),u,w,t,k,k,v,k,l.gI9(),l.gIa(),g,k,C.a([A.Q3("Hints",D.aJ,D.qO,j.r,new A.d4a(l)),D.P],s))
v=C.a([],s)
for(f=C.a3(h).k("bc<2>"),w=f.k("a2<H.E>"),r=0;r<2;++r){u={}
t=B.d85[r]
u.a=null
q=t.a
u.a=q
p=new C.aV(14,14)
o=l.r===q
n=o?D.b2:D.b5
m=new C.aA(n,o?3:1,D.r,-1)
n=C.a([],s)
if(new C.a2(new C.bc(h,f),new A.d4b(u),w).gM(0)===2)n.push(B.e0V)
n.push(new C.x(t.b,k,D.uj,k,k,k,k,k,k,k,k,k))
v.push(new C.C(D.j4,C.aE(k,C.p(k,new C.co(D.aQ,D.e,D.j,D.m,k,D.p,k,0,n,k),D.f,k,k,new C.o(t.c,k,new C.bP(m,m,m,m),new C.bs(p,p,p,p),k,k,D.n),k,k,k,k,D.hH,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.d4c(u,l),k,k,k,k,k,k,!1,D.a9),k))}h=C.c3(D.bE,v,D.bw,6,8)
f=A.y3("Start over",D.l8,new A.d4d(l),D.ad)
j=j.f?"Close the valves":"Open the valves"
return new A.AT("Faucet supply lines",D.cr,g,C.v(C.a([h,D.P,C.A(C.a([f,D.ab,A.y3(j,D.pD,l.gc1F(l),D.cr)],s),D.m,k,D.e,D.j,0,k,k)],s),D.m,k,D.e,D.Q,0,D.p),new A.d4e(a0,e),i,k)}}
A.az5.prototype={
T(){return new A.az6(A.fXS())}}
A.az6.prototype={
gkJ(){var w,v=this.e
if(v===$){w=new A.Ay(-0.3,0.48,46,B.Tb,$.aw())
w.f=80
this.e=w
v=w}return v},
gou(){var w=this.f
return w===$?this.f=A.aeW(this.d):w},
q(){var w=this.z
if(w!=null)w.a9(0)
this.a2()},
km(d,e){var w=this,v=w.z
if(v!=null)v.a9(0)
w.m(new A.db7(w,d,e))
w.z=C.cM(D.l1,new A.db8(w))},
oO(d){return this.km(d,!1)},
nN(){this.gkJ().n2(46,0.48,B.Tb,-0.3)
this.m(new A.db1(this))},
Ib(d){var w,v,u,t=this
if(d===0){t.nN()
return}if(d===72){w=t.d
w=w.d.t(0,72)&&w.a>=5}else w=!1
if(w){t.m(new A.db3(t,d))
A.y4()
t.km("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.gkJ().Gj(22,B.fzZ)
return}w=d===87
if(w||d===86){v=t.d
v=v.b&&!v.c&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new A.db4(t,d))
A.y4()
t.km("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}A.nc(180,220,0.25,"square")
t.oO(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.gou().b.h(0,d)
if(u!=null){t.m(new A.db5(t,d))
w=t.gkJ()
v=u.c
w.Gj(u.d,v)}},
c9o(d){var w,v
A:{if("ptrap"===d){w=B.aSf
break A}if("faucet"===d){w=B.aRJ
break A}w=new A.ab5(d,null)
break A}v=this.c
v.toString
C.a5(v,!1).ci(C.em(new A.db2(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=B.d3A[m.a],k=o.r,j=k===0?n:A.hRr(k)
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
p=j==null?n:C.aE(n,C.p(n,B.f3l,D.f,n,n,new C.o(D.aJ,n,n,C.m(12),n,n,D.n),n,n,n,n,D.tg,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.dbb(o,j),n,n,n,n,n,n,!1,D.a9)
k=A.WI(u,new A.dbc(o),r,t,q,p,new A.dbd(o),s,n,o.gI9(),o.gIa(),k,n,n)
s=l.a
p=x.p
q=C.A(C.a([C.D(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,B.eWZ,n,n,n),1),A.Q3("Wrench",D.aX,D.qJ,o.w==="wrench",new A.dbe(o))],p),D.m,n,D.e,D.j,0,n,n)
t=C.d(l.b,n,3,D.a2,n,n,n,B.eY3,n,n,n)
m=C.kR(D.by,6,s,6,0,new A.dbf(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.D(C.d(s,n,n,n,n,n,n,C.l(n,n,u?D.es:D.f9,n,n,n,n,n,n,n,n,11.5,n,n,D.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return new A.AT("Build and fix a house",D.by,k,C.v(C.a([q,D.bz,t,m,C.A(C.a([s,C.D(C.d(r,n,n,n,n,n,n,C.l(n,n,u?D.es:D.f9,n,n,n,n,n,n,n,n,11.5,n,n,D.I,n,n,!0,n,n,n,n,n,n,n,n),D.dK,n,n),1)],p),D.m,n,D.e,D.j,0,n,n)],p),D.m,n,D.e,D.Q,0,D.p),new A.dbg(d,v),"Stage "+(w+1)+"/7",n)}}
A.jw.prototype={}
A.LR.prototype={}
A.a5D.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([C.A(C.a([C.aH(m,m,m,m,H.nK,m,m,m,new A.c4s(d),m,m,m,m,m,m),B.fcR],l),D.m,m,D.e,D.j,0,m,m)],l)
for(w=0;w<5;++w){v=B.da6[w]
u=v.c
t=C.a([new C.C(D.agK,new C.x(v.b+"  "+v.a.toUpperCase(),m,new C.F(!0,u,m,m,m,m,12,D.u,m,1.1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],l)
for(s=v.d,r=s.length,q=0;q<r;++q){p=s[q]
o=new C.aV(14,14)
n=new C.aA(u.j(0.35),1,D.r,-1)
t.push(C.p(m,C.v(C.a([new C.x(p.a,m,D.jB,m,m,m,m,m,m,m,m,m),D.d0,new C.x(p.b,m,E.SG,m,m,m,m,m,m,m,m,m)],l),D.F,m,D.e,D.j,0,D.p),D.f,m,m,new C.o(B.Ki,m,new C.bP(n,n,n,n),new C.bs(o,o,o,o),m,m,D.n),m,m,m,D.cG,D.bl,m,m,m))}D.d.v(k,t)}return C.cb(m,D.bV,C.bo(!0,C.cB(k,m,B.afP,m,m,D.ah,!1),!0,!1,D.ag,!0,!0),m,!1,!1,m,m)}}
A.cfg.prototype={}
A.Ek.prototype={}
A.n7.prototype={}
A.VQ.prototype={}
A.cf6.prototype={
buT(d,e,f){var w,v=this
if(f!=null)w=D.d.ix(B.aue,new A.cfa(f))
else{w=new C.eS()
w.dH(v.a)
w=B.aue[w.aB(2)]}v.c!==$&&C.aO()
v.c=w
w=new C.eS()
w.dH(v.a+7)
w=w.he()
v.d!==$&&C.aO()
v.d=w},
uG(d,e){var w=this.c
w===$&&C.c()
return D.d.ix(w.c,new A.cfb(e))},
OC(d){++this.w
return new A.eC(!1,d,!1,"")},
c_g(d){var w=d.d
return new C.J(w,new A.cf7(this),C.T(w).k("J<1,n>")).aH(0," and ")},
beg(d,e){var w,v,u,t,s=this,r=s.uG(0,e),q=s.e
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
bfv(d){var w,v,u,t,s=this,r=s.uG(0,d)
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
bdd(d){var w=this.uG(0,d),v=this.f.h(0,d)
if(v==null)v=0
return w.r-v},
aGo(){var w,v,u,t,s,r,q=this
q.r=!q.r
w=q.x
w.a8(0)
if(!q.r)return B.aTb
v=q.c
v===$&&C.c()
u=v.c
t=C.T(u).k("a2<1>")
s=C.B(new C.a2(u,new A.cfc(q),t),t.k("H.E"))
v=v.c
u=C.T(v).k("a2<1>")
r=C.B(new C.a2(v,new A.cfd(q),u),u.k("H.E"))
q.y=!0
if(s.length!==0){w.v(0,new C.J(s,new A.cfe(),C.T(s).k("J<1,n>")));++q.w
return new A.eC(!1,"Water is spraying from an open pipe where the "+D.d.gL(s).c.toLowerCase()+" should be! Turn the water off and finish the job.",!0,"")}if(r.length!==0){w.v(0,new C.J(r,new A.cff(),C.T(r).k("J<1,n>")));++q.w
return new A.eC(!1,"The "+D.d.gL(r).c.toLowerCase()+" is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.",!0,"")}if(!q.gvL())return B.aT1
return B.aSP},
cBt(){var w,v,u,t,s,r,q,p=this
p.r=!0
p.aGo()
w=p.c
w===$&&C.c()
v=w.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
p.beg(s.b,s.a)}for(w=w.c,v=w.length,t=0;t<v;++t){s=w[t]
for(u=s.r,r=s.a,q=0;q<u;++q)p.bfv(r)}p.aGo()
p.w=0},
gvL(){var w=this.c
w===$&&C.c()
return D.d.de(w.c,new A.cf8(this))},
gEQ(){var w=this.c
w===$&&C.c()
return D.d.de(w.c,new A.cf9(this))},
gajE(){var w=this
return w.gvL()&&w.gEQ()&&w.r&&w.y&&w.x.a===0}}
A.UQ.prototype={
T(){var w,v=new A.Ay(-0.25,0.4,175,B.aQP,$.aw())
v.f=200
w=new C.BB()
$.Cv()
w.iT(0)
return new A.aCC(v,w)}}
A.aCC.prototype={
gCc(d){var w=this.d
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.d=w}return w},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w==null){w=v.gCc(0)
v.a.toString
w=A.fMM(!1,w,null)}v.e=w
v.r=A.hb1(w,v.x,!w.b)},
q(){var w=this.at
if(w!=null)w.a9(0)
this.a2()},
ace(){var w=this.e
w===$&&C.c()
return this.r=A.hb1(w,this.x,!w.b)},
aWo(d,e){var w=this,v=w.at
if(v!=null)v.a9(0)
w.m(new A.ed7(w,d,e))
w.at=C.cM(D.jm,new A.ed8(w))},
aWm(){this.f.n2(175,0.4,B.aQP,-0.25)
this.m(new A.ed0(this))},
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
avS(d){var w=this.e
w===$&&C.c();++w.w
return new A.eC(!1,d,!1,"")},
c1N(d){return this.aWl(d)},
crb(d){var w
A:{if("main"===d){w=9400
break A}w=this.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=9100+D.d.be(w.c,new A.ed9(d))
break A}this.aWl(w)},
aWp(){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==="hand")return C.a([B.eon],x.L)
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
q=r.uG(0,s)
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
aWl(d){var w,v,u,t,s,r=this
if(d===0)return
w=r.r
w===$&&C.c()
v=w.b.h(0,d)
if(r.x.length===0){r.m(new A.ecT(r,d))
if(v!=null)r.aWo(v.a+": "+v.b,!0)
return}u=r.crR(d)
w=r.x
if(w==="hand")if(d===9400){w=r.e
w===$&&C.c()
t=w.aGo()}else{w=r.e
w===$&&C.c()
t=r.avS(w.b?"Your hand is only for the main water valve.":"Your hand is for the main water valve. Parts are placed by picking them from the tray.")}else if(w==="wrench")if(u==null){w=r.e
w===$&&C.c()
t=r.avS(w.b?"Nothing to tighten.":"There is nothing to tighten there.")}else{w=r.e
w===$&&C.c()
t=w.bfv(u)}else if(u==null){w=r.e
w===$&&C.c()
t=r.avS(w.b?"Not there.":"That does not go there. Tap one of the glowing spots.")}else{s=r.e
s===$&&C.c()
t=s.beg(w,u)}w=t.a
if(w)A.y4()
else A.nc(180,220,0.25,"square")
r.m(new A.ecU(r,d))
w=w&&!t.c
r.aWo(t.b,w)
w=r.e
w===$&&C.c()
if(w.gajE()&&!r.as){r.as=!0
$.aT.x1$.push(new A.ecV(r))}},
c1K(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new A.ed_(this),v,w,!0,!0,x.H)},
aWn(){this.m(new A.ed5(this))
this.aWm()},
av_(d,e,f){var w,v=null,u=this.x===d,t=u?D.aJ.j(0.25):D.c.j(0.07),s=C.m(14),r=u?D.aJ:D.b5
r=C.I(r,D.r,u?2:1)
w=C.W(f,u?D.aJ:D.ad,v,v,v,19)
return new C.C(E.te,C.aE(v,C.p(v,C.A(C.a([w,D.bo,C.d(e,v,v,v,v,v,v,C.l(v,v,u?D.aJ:D.c,v,v,v,v,v,v,v,v,12.5,v,v,D.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),D.m,v,D.e,D.j,0,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,v,D.h4,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.ecX(this,u,d),v,v,v,v,v,v,!1,D.a9),v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
h===$&&C.c()
h=h.c
h===$&&C.c()
h=h.c
w=new C.a2(h,new A.eda(j),C.T(h).k("a2<1>")).gM(0)
h=j.e.c
h===$&&C.c()
v=j.r
v===$&&C.c()
u=j.y
t=j.z
s=j.Q
r=u!==0?v.b.h(0,u):i
v=A.WI(j.f,new A.edb(j),s,u,r,i,new A.edc(),t,i,j.gc1L(),j.gc1M(),v,i,i)
t=x.p
r=C.a([],t)
if(j.x.length!==0&&j.aWp().length!==0){u=C.a([],t)
for(s=j.aWp(),q=s.length,p=0;p<s.length;s.length===q||(0,C.K)(s),++p){o={}
n=s[p]
o.a=null
o.a=n.a
m=new C.aV(12,12)
l=new C.aA(D.b2,1,D.r,-1)
u.push(C.aE(i,C.p(i,new C.x("\ud83d\udccd "+n.b,i,D.nY,i,i,i,i,i,i,i,i,i),D.f,i,i,new C.o(D.fD.j(0.35),i,new C.bP(l,l,l,l),new C.bs(m,m,m,m),i,i,D.n),i,i,i,i,B.Xf,i,i,i),D.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.edd(o,j),i,i,i,i,i,i,!1,D.a9))}r.push(new C.C(D.eO,C.c3(D.bE,u,D.bw,6,6),i))}u=j.e
if(u.b)u="Practice mode: no hints. Build it in the right order."
else if(u.gvL())u="Everything is fitted. Tighten every joint, then turn the main water on to test."
else{u=j.e.c
u===$&&C.c()
u="Job: "+u.d}r.push(new C.bI(D.a3,i,i,C.d(u,i,2,D.a2,i,i,i,B.aNu,i,i,i),i))
r.push(D.P)
t=C.a([j.av_("hand","Hand",B.akq),j.av_("wrench","Wrench",D.qJ)],t)
for(p=0;p<11;++p){k=B.bT3[p]
u=B.deb.h(0,k)
u.toString
t.push(j.av_(k,u,Y.ajP))}r.push(new C.a6(i,52,C.cB(t,i,i,i,i,D.aQ,!1),i))
return new A.AT("Plumbing job: "+h.b,D.aX,v,C.v(r,D.m,i,D.e,D.Q,0,D.p),new A.ede(j,d),""+w+"/"+h.c.length+" fitted",i)},
bXa(d){return C.bY(E.qv,null,new A.ed4(this),d,!0,!0,!0,D.nV,!1,!1,x.H)}}
A.yo.prototype={}
A.pF.prototype={}
A.Wu.prototype={}
A.aty.prototype={}
A.aRV.prototype={}
A.eC.prototype={
gj4(){return this.a}}
A.b3b.prototype={
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
gal9(){var w,v=C.aX(x.S),u=this.d
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
aCQ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
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
h.z.v(0,h.gal9())
for(g=h.Q,w=x.S,v=0;v<3;++v){q=B.nP[v]
u=C.aX(w)
s=C.aX(w)
p=new A.aty(u,s)
p.d=p.e=p.a=!0
for(o=h.ao0(q),n=o.length,m=0;m<o.length;o.length===n||(0,C.K)(o),++m)for(l=o[m]*10,k=0;k<6;++k)s.J(0,l+k)
for(s=h.gal9(),o=C.a3(s),n=new C.nI(s,s.r,o.k("nI<1>")),n.c=s.e,o=o.c,s=q+48;n.C();){l=n.d
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
m.bcf(v.a,v.b)}for(u=x.S,t=x.N,s=m.at,w=0;w<4;++w){r=l[w].a
q=s.h(0,r)
if(q==null)continue
p=q.a
A:{if("outlet"===p){o=C.E([25,"ground",23,"white",21,"black"],u,t)
break A}if("gfci"===p){o=C.E([25,"ground",24,"white",22,"black"],u,t)
break A}if("switch"===p){o=C.E([25,"ground",21,"blackLine",22,"blackLoad"],u,t)
break A}o=C.E([53,"ground",52,"white",51,"black"],u,t)
break A}for(o=new C.LV(o,o.r,o.e,C.a3(o).k("LV<1,2>"));o.C();){n=o.d
m.baC(r,n.b,n.a)}m.bez(r)
m.b9u(r)}if(!m.ax)m.aGm()
for(w=0;w<4;++w){v=l[w]
u=v.b
if(u==="outlet"||u==="gfci"){u=v.a
m.bei(u,"lamp")
m.bfO(u)}}for(l=D.d.gai(l),u=new C.h2(l,new A.ck2());u.C();){t=l.gU(0).a
m.aD0(t)
m.aD0(t)}},
aII(d){var w,v,u=A.kX(d).d.a,t=C.a([],x.t)
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
return B.aTp}t.n(0,d,e)
t=v?"ceiling joist":"side of the stud"
return new A.eC(!0,w.b+": box fixed to the "+t+".",!1,"")},
cFW(d){var w,v=this
if(d<0||d>=$.Ga().length)return B.aTj
w=v.y
if(w.t(0,d))return v.fJ("That stud already has a hole.")
if(v.x.a===0)return v.fJ("Mount the boxes first. Then you know where the cable has to go and which studs need a hole.")
w.J(0,d)
return B.aT3},
cOi(d){var w,v,u,t,s=this,r=A.kX(d)
if(!s.x.ag(0,d))return s.fJ("There is no box at "+r.b+". Mount the box first, then pull the cable to it.")
w=s.z
if(w.t(0,d))return s.fJ("The cable is already there.")
v=s.aII(d)
u=C.T(v).k("a2<1>")
t=C.B(new C.a2(v,new A.ck9(s),u),u.k("H.E"))
if(t.length!==0){w=D.o.V($.Ga()[D.d.gL(t)])
v=t.length
u=v===1?"it":"the studs"
return s.fJ("The cable is stuck: the stud at "+w+" inches has no hole. Drill "+u+" first ("+v+" left on the way).")}w.J(0,d)
return new A.eC(!0,"Cable pulled from the panel to "+r.b+", through the studs and along the ceiling.",!1,"")},
gaGc(){return this.gal9().de(0,new A.cka(this))},
anH(d){var w,v,u,t
for(w=this.Q,w=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gai(0);w.C();){v=w.d
u=v.b
if(u.a){t=v.a
t=d>=t&&d<=t+48}else t=!1
if(t)return u}return null},
cIC(d){var w,v,u=this
if(!u.gaGc())return u.fJ("Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.")
if(!D.d.t(B.a1Y,d))return B.aSS
if(!D.d.t(B.nP,d))return u.fJ("The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.")
w=u.Q
v=w.h(0,d)
if((v==null?null:v.a)===!0)return u.fJ("There is already a sheet there.")
v=w.h(0,d)
if(v==null){v=x.S
v=new A.aty(C.aX(v),C.aX(v))}v.a=!0
w.n(0,d,v)
return B.aT2},
ao0(d){var w,v,u,t=C.a([],x.t)
for(w=d+48,v=0;u=$.Ga(),v<u.length;++v){u=u[v]
if(u>=d&&u<=w)t.push(v)}return t},
cER(d){var w,v,u=this,t=A.kX(d)
if(t.c)return u.fJ("Ceiling fixtures do not need an opening in the wall.")
if(!u.x.ag(0,d))return u.fJ("There is no box at "+t.b+".")
w=u.anH(t.d.a)
if(w==null)return u.fJ("There is no sheet over this box yet. Hang the sheet first, then cut the opening.")
v=w.b
if(v.t(0,d))return u.fJ("The opening is already cut.")
v.J(0,d)
return B.aTc},
aHZ(d,e,f){var w,v,u,t,s,r=this
if(f)return r.fJ("Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).")
w=x.Y
v=C.B(new C.a2(B.nP,new A.ckb(r,d),w),w.k("H.E"))
if(v.length===0)return r.fJ("There is no sheet here yet.")
u=d*10+e
if(D.d.de(v,new A.ckc(r,u)))return r.fJ("There is already a screw there.")
for(w=v.length,t=r.Q,s=0;s<v.length;v.length===w||(0,C.K)(v),++s)t.h(0,v[s]).c.J(0,u)
return B.aTe},
bjK(d,e){return this.aHZ(d,e,!1)},
blg(d){var w=this.Q.h(0,d)
if(w==null||!w.a)return!1
return D.d.de(this.ao0(d),new A.cke(w))},
gaAF(){return D.d.de(B.nP,new A.ck1(this))},
gaAE(){var w=this.gal9()
return new C.a2(w,new A.ck_(),C.a3(w).k("a2<cl.E>")).de(0,new A.ck0(this))},
cQ8(d){var w,v=this
if(!v.gaAF())return v.fJ("Hang all the sheets first.")
if(!D.d.de(B.nP,v.ganI()))return v.fJ("Finish screwing every sheet to the studs first. Tape goes on a solid wall.")
w=v.as[d]
if(w.a)return v.fJ("This seam already has tape.")
w.c=w.a=!0
return B.aSW},
cLe(d){var w,v=this,u=v.as[d]
if(!u.a)return v.fJ("Tape first. The mud goes over the tape.")
if(!u.c)return v.fJ("The last coat is still wet. Let it dry before the next coat.")
w=u.b
if(w>=3)return v.fJ("Three coats are enough. Now sand it.");++w
u.b=w
u.c=!1
return new A.eC(!0,"Coat "+w+" of joint compound spread. Let it dry.",!1,"")},
cKa(){var w,v=this.as
if(D.d.de(v,new A.ck7()))return B.aT9
for(w=0;w<2;++w)v[w].c=!0
return B.aTn},
bjy(d){var w=this,v=w.as[d]
if(v.b<3)return w.fJ("Put on all three coats of mud first. Sanding now would just rub off the tape.")
if(!v.c)return w.fJ("The mud is still wet. Let it dry first.")
if(v.d)return w.fJ("Already sanded.")
v.d=!0
return B.aST},
cNw(d){var w=this,v=w.Q.h(0,d)
if(v==null||!v.a)return w.fJ("There is no sheet there.")
if(!w.gaAE())return w.fJ("Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.")
if(!D.d.de(w.as,new A.ck8()))return w.fJ("Sand the seams first. Paint shows every bump.")
if(v.e)return w.fJ("This sheet is already painted.")
v.e=!0
return B.aSQ},
gyc(){var w=this
return w.gaAF()&&D.d.de(B.nP,w.ganI())&&w.gaAE()&&D.d.de(w.as,new A.ck3())&&D.d.de(B.nP,new A.ck4(w))},
Mw(){var w,v
for(w=this.at,w=new C.dt(w,w.r,w.e);w.C();){v=w.d.b
v.a=this.ax&&!this.ay}},
bWp(d,e){if(d.c)return e==="light"||e==="fan"?"":"A ceiling box holds a light or a fan, not an outlet or a switch."
return e==="outlet"||e==="gfci"||e==="switch"?"":"A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch."},
bcf(d,e){var w,v,u,t,s,r=this,q=A.kX(d)
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
w=new A.avw(C.V(x.S,x.N))
w.r=r.b
w.a=r.ax&&!r.ay
v.n(0,d,new A.aRV(e,w))
if(e==="light")w="Light fixture"
else if(s)w="Ceiling fan"
else if(e==="gfci")w="GFCI outlet"
else w=t?"Switch":"Outlet"
return new A.eC(!0,w+" is held up to "+q.b+". Turn the breaker OFF, then wire it.",!1,"")},
cPj(d){var w=this,v=w.at,u=v.h(0,d)
if(u==null)return B.aT_
if(w.ax&&!w.ay&&!u.b.w){if(w.b)return w.Ym()
return w.a0T()}v.W(0,d)
w.CW.W(0,d)
w.cx.W(0,d)
w.ch.W(0,d)
return B.aTh},
a0T(){++this.r;++this.f
return B.aTf},
Ym(){var w,v,u=this;++u.r;--u.e
u.ax=!1
u.Mw()
w=u.e
if(w<=0){u.w=!0
return B.aSZ}v=w===1?"life":"lives"
return new A.eC(!1,"ZAP! You touched a live wire and got a shock. The breaker is now off. "+w+" "+v+" left. Always turn the breaker OFF and test the wires first.",!0,"shock")},
baC(d,e,f){var w,v,u,t=this,s=t.at.h(0,d)
if(s==null)return B.a8k
t.Mw()
w=A.Q4(s.a)
v=D.d.ix(w.f,new A.ck5(f))
u=A.hfL(w,s.b,e,v,!0)
if(u==null){if(!t.b&&!v.c.t(0,e)){++t.f
return new A.eC(!0,v.b+": fastened. Careful: "+C.t(w.r.$2(e,v))+" It will burn or trip the breaker when the power comes on.",!0,"")}return new A.eC(!0,v.b+": wire fastened.",!1,"")}if(D.a.a0(u,"SHOCK"))return t.Ym()
if(D.a.a0(u,"STOP"))return t.a0T();++t.f
return new A.eC(!1,u,!1,"")},
cQD(d,e){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.U1
v.Mw()
w=u.b
if(w.a&&w.c===0){if(v.b)return v.Ym()
return v.a0T()}w=w.b
w.bn(w,new A.ckf(e))
return B.aTm},
bez(d){var w,v,u=this,t=u.at.h(0,d)
if(t==null)return B.a8k
w=A.Q4(t.a)
v=t.b
if(!A.bBD(w,v))return u.fJ("Every wire must be fastened first.")
if(u.ax&&!u.ay){if(u.b)return u.Ym()
return u.a0T()}v.c=1
return B.aT7},
cOj(d){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.U1
if(v.ax&&!v.ay){if(v.b)return v.Ym()
return v.a0T()}w=u.b
w.c=0
w.d=!1
return B.aTd},
b9u(d){var w=this.at.h(0,d)
if(w==null||w.b.c!==1)return this.fJ("Push the device into the box first.")
w.b.c=2
return B.aTg},
aGN(d){var w=this.at
return A.fRi(A.Q4(w.h(0,d).a),w.h(0,d).b)},
aGm(){var w=this
if(w.ay){w.ax=w.ay=!1
w.Mw()
return B.aT5}w.ax=!w.ax
w.Mw()
if(!w.ax)return B.aSY
return w.c1O()},
c1O(){var w,v,u,t,s,r,q,p,o,n=this,m=C.a([],x.s)
for(w=n.at,v=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gai(0),u=n.cx,t=!1,s=!1;v.C();){r=v.d
q=r.b.b
if(q.c===0)continue
p=r.a
o=A.fRi(A.Q4(w.h(0,p).a),w.h(0,p).b)
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
return B.aTa},
aD0(d){var w,v,u,t,s,r,q=this,p=q.at,o=p.h(0,d)
if(o==null||o.a!=="switch"||o.b.c<2)return B.aTl
w=q.ch
if(w.t(0,d))w.W(0,d)
else w.J(0,d)
v=q.d
v===$&&C.c()
u=C.T(v).k("a2<1>")
t=C.B(new C.a2(v,new A.ck6(d),u),u.k("H.E"))
if(t.length===0)return B.aT6
s=D.d.gL(t)
v=s.a
r=q.akY(v)
if(w.t(0,d)&&r){p=p.h(0,v)
if(p!=null)p.c=!0
return new A.eC(!0,(s.b==="fan"?"The fan spins":"The light turns on")+". The switch works.",!1,"")}if(w.t(0,d)){p=s.b
return new A.eC(!1,(p==="fan"?"The fan":"The light")+" did not come on. Check the breaker and the wires on the switch and on the "+p+".",!1,"")}return B.aTk},
ajv(d){var w,v=this.at.h(0,d)
if(v!=null){w=v.b
w=w.c<2||w.w}else w=!0
if(w)return!1
return this.aGN(d).c},
akY(d){var w=this,v=w.cNh(d),u=v==null,t=u?null:v.c,s=!0
if(!u)if(t!=null)u=!(w.ax&&!w.ay)||!w.ajv(d)||!w.ajv(t)
else u=s
else u=s
if(u)return!1
return w.ch.t(0,t)},
bei(d,e){var w,v,u=this,t=u.at.h(0,d)
if(t!=null){w=t.a
w=w!=="outlet"&&w!=="gfci"||t.b.c<2}else w=!0
if(w)return u.fJ("There is no finished outlet there to plug into.")
w=u.CW
if(w.ag(0,d))return u.fJ("Something is already plugged in.")
w.n(0,d,e)
if(t.b.w)return B.aT0
if(u.ax&&!u.ay&&u.ajv(d)){t.c=!0
v=u.aGN(d)
w=v.a
if(w==="reversed"||w==="noGround")return new A.eC(!0,"It runs, but be careful: "+v.b,!0,"")
return new A.eC(!0,A.hzd(e)+" runs. The outlet works.",!1,"")}if(!(u.ax&&!u.ay))return B.aT4
return new A.eC(!1,"Nothing happens. "+u.aGN(d).b,!0,"")},
bfO(d){if(this.CW.W(0,d)==null)return B.U1
return B.aSX},
gtT(){var w,v,u,t,s,r=this.d
r===$&&C.c()
w=this.at
v=0
for(;v<4;++v){u=r[v]
t=u.a
s=w.h(0,t)
if(s==null||s.a!==u.b||s.b.c<2)return!1
if(A.fRi(A.Q4(w.h(0,t).a),w.h(0,t).b).a!=="ok")return!1
t=u.b
if(t==="outlet"||t==="gfci"){if(!s.c)return!1}else if(t!=="switch"&&!s.c)return!1}return!0}}
A.kT.prototype={}
A.UT.prototype={
T(){var w,v=new A.Ay(-0.12,0.4,205,B.a7n,$.aw())
v.f=300
w=new C.BB()
$.Cv()
w.iT(0)
return new A.aCJ(v,w,C.V(x.S,x.i))}}
A.aCJ.prototype={
gCc(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w==null){w=v.gCc(0)
w=A.fNb(null,null,v.a.f,w)}v.d=w
if(v.a.d!=null&&w.gyc())v.y=2
if(v.a.e){v.d.aCQ()
v.y=2}v.r=A.Cj(v.d,new A.vO(v.z,v.Q,!1))
w=v.f
w.r=0
w.w=1.1},
q(){var w=this.cy
if(w!=null)w.a9(0)
this.a2()},
zX(d,e){var w=this,v=w.cy
if(v!=null)v.a9(0)
w.m(new A.ehu(w,d,e))
w.cy=C.cM(D.jm,new A.ehv(w))},
av1(d){return this.zX(d,!1)},
kn(d){var w,v,u,t,s,r=this,q=d.a
if(q)A.y4()
else A.nc(180,220,0.25,"square")
w=d.d
if(w==="shock"){C.fJ()
r.m(new A.egJ(r))
C.bN(D.mQ,new A.egK(r),x.P)}if(w==="burn"||w==="trip"){w=r.d
w===$&&C.c()
w=w.cx
w=C.ea(w,w.r,C.a3(w).c)
v=r.x
u=r.w
t=w.$ti.c
while(w.C()){s=w.d
if(s==null)s=t.a(s)
v.n(0,s,u.gB6()/1000+3.5)}C.fJ()
A.nc(150,300,0.5,"noise")}w=r.d
w===$&&C.c()
r.r=A.Cj(w,new A.vO(r.z,r.Q,!1))
q=q&&!d.c
r.zX(d.b,q)
if(r.d.w&&r.c!=null)$.aT.x1$.push(new A.egL(r))
if(r.d.gtT()&&!r.cx){r.cx=!0
$.aT.x1$.push(new A.egM(r))}},
b0T(){var w=this.ch?3.141592653589793:-0.12
this.f.n2(205,0.4,B.a7n,w)},
aQR(){var w,v,u=this
u.ch=!1
w=u.f
w.anB(!1)
w.r=0
u.m(new A.egU(u))
v=u.d
v===$&&C.c()
u.r=A.Cj(v,new A.vO(u.z,u.Q,!1))
w.n2(205,0.4,B.a7n,-0.12)},
bz1(){var w,v,u=this
u.ch=!0
w=u.f
w.anB(!0)
u.m(new A.egN(u))
v=u.d
v===$&&C.c()
u.r=A.Cj(v,new A.vO(u.z,u.Q,!1))
w.n2(190,0.3,B.ftS,3.141592653589793)},
Yn(d,e){var w,v,u,t=this,s=A.kX(e),r=t.f
r.anB(!1)
r.r=0
t.m(new A.ehb(t,e))
w=t.d
w===$&&C.c()
t.r=A.Cj(w,new A.vO(t.z,t.Q,!1))
v=A.a1x(s,B.ftd)
w=s.c
u=w?22:15
r.n2(u,w?-0.8:0.26,v,0.3)},
av0(){var w,v=this
v.m(new A.egV(v))
w=v.d
w===$&&C.c()
v.r=A.Cj(w,new A.vO(v.z,v.Q,!1))
v.b0T()},
c1T(d){var w,v,u,t,s,r,q=this
if(d===0){if(q.Q<0)q.m(new A.ehq(q))
return}w=q.Q
if(w>=0)v=!(d>=5000&&d<5700)
else v=!1
if(v)return
if(d>=5000&&d<5700){v=d-5000
u=D.o.an(v,100)
if(w!==u){if(q.z==="tester")q.azo(u)
else{q.m(new A.ehr(q))
q.Yn(0,u)}return}q.aZD(u,D.o.F(v,100))
return}if(d>=1000&&d<1010)if(q.z==="drill"){w=q.d
w===$&&C.c()
q.kn(w.cFW(d-1000))
return}if(d>=2000&&d<2007){q.aZG(d-2000)
return}if(d>=3000&&d<3007){q.aZE(d-3000)
return}if(d>=6000&&d<6005){if(q.z==="sheet"){w=q.d
w===$&&C.c()
q.kn(w.cIC(B.a1Y[d-6000]))}return}if(d>=6100&&d<6103){t=B.nP[d-6100]
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
q.kn(w.aHZ(D.o.an(v,10),D.o.F(v,10),!0))}return}if(d===8000){w=q.d
w===$&&C.c()
q.kn(w.aGm())
return}if(d>=8100&&d<8107){u=d-8100
w=q.d
w===$&&C.c()
if(w.CW.h(0,u)==="tv"&&q.z!=="unplug"){w=q.c
w.toString
I.fTG(w,0,"tv",!0,D.x1,"Samsung Neo QLED 8K")
return}q.kn(q.d.bfO(u))
return}if(q.z==="look"){w=q.r
w===$&&C.c()
r=w.b.h(0,d)
if(r!=null){q.m(new A.ehs(q,d))
q.zX(r.a+": "+r.b,!0)}}},
aZG(d){var w,v,u,t=this,s=t.d
s===$&&C.c()
if(s.at.ag(0,d)){s=t.z
s=s!=="tester"&&s!=="look"&&!D.d.t(B.GE,s)}else s=!1
if(s){t.m(new A.eho(t))
t.Yn(0,d)
return}s=t.z
switch(s){case"wall":case"ceiling":case"fanbox":w=t.d
t.kn(w.cLb(d,s==="fanbox"?"fan":s))
return
case"cable":t.kn(t.d.cOi(d))
return
case"knife":t.kn(t.d.cER(d))
return
case"outlet":case"gfci":case"switch":case"light":case"fan":v=t.d.bcf(d,s)
t.kn(v)
if(v.a){t.d.at.h(0,d).b.f=!t.d.b
t.z=""
t.Yn(0,d)}return
case"tester":t.azo(d)
return}if(t.d.at.ag(0,d)){t.Yn(0,d)
return}s=t.r
s===$&&C.c()
u=s.b.h(0,2000+d)
if(u!=null){t.m(new A.ehp(t,d))
t.zX(u.a+": "+u.b,!0)}},
azo(d){var w,v=this.d
v===$&&C.c()
w=v.ax&&!v.ay&&v.x.ag(0,d)&&this.d.z.t(0,d)
v=w?"The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.":"The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)"
this.zX(v,!w)
A.nc(w?1400:500,120,0.25,"tri")},
aZE(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.at.h(0,d)
if(w==null)return
if(D.d.t(B.GE,v.z)){v.kn(v.d.bei(d,v.z))
return}u=v.z
if(u==="tester"){v.azo(d)
return}if(u==="flip"){if(w.a==="switch"&&w.b.c>=2)v.kn(v.d.aD0(d))
else v.av1("Only a finished switch can be flipped.")
return}v.m(new A.ehn(v))
v.Yn(0,d)},
aZD(d,e){var w,v,u,t,s,r,q,p=this,o=p.d
o===$&&C.c()
w=o.at.h(0,d)
if(w==null)return
o=w.a
v=A.Q4(o).f
u=C.T(v).k("a2<1>")
t=C.B(new C.a2(v,new A.ehj(e),u),u.k("H.E"))
s=A.hfP(o,e)
if(s!=null){o=w.b
o=o.b.j0(0,s)&&o.c===0}else o=!1
if(o){p.kn(p.d.cQD(d,s))
return}if(t.length!==0&&w.b.c===0){o=p.at
if(o.length===0){p.av1("Pick a wire below first, then tap "+D.d.gL(t).b+".")
p.m(new A.ehk(p,d,e))
return}r=p.d.baC(d,o,e)
p.kn(r)
if(r.a)p.m(new A.ehl(p))
return}o=p.r
o===$&&C.c()
q=o.b.h(0,5000+d*100+e)
if(q!=null){p.m(new A.ehm(p,d,e))
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
w.push(C.aE(p,C.p(p,new C.x("\ud83d\udccd "+s.b,p,D.nY,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.fD.j(0.35),p,new C.bP(q,q,q,q),new C.bs(r,r,r,r),p,p,D.n),p,p,p,p,B.Xf,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.ehw(t,this),p,p,p,p,p,p,!1,D.a9))}return new C.C(D.i7,C.c3(D.bE,w,D.bw,6,6),p)},
bKU(){var w=null,v=this.c
v.toString
C.c9(w,w,!1,w,new A.egT(this),v,w,!0,!0,x.H)},
c1P(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new A.egQ(this),v,w,!0,!0,x.H)},
aus(d){this.m(new A.egW(this,d))
this.aQR()},
aVi(){return this.aus(!1)},
c1R(){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
m===$&&C.c()
if(m.w)return"The job is over."
switch(n.y){case 0:m=m.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
v=C.B(new C.a2(m,new A.egX(n),w),w.k("H.E"))
if(v.length!==0){u=D.d.gL(v)
t=A.kX(u.a)
m=u.b
if(m==="gfci")m="a GFCI"
if(t.c)w=t.e==="fan"?"fan box":"ceiling box"
else w="wall box"
return"Mount a box at "+t.b+" ("+m+" goes here): pick a "+w+", then tap the glowing spot."}m=n.d.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
s=C.B(new C.a2(m,new A.egY(n),w),w.k("H.E"))
if(s.length!==0){t=D.d.gL(s).a
m=n.d.aII(t)
r=new C.a2(m,new A.egZ(n),C.T(m).k("a2<1>")).gM(0)
return r>0?"The cable comes from the panel on the right. Pick the drill and tap each stud on the way to "+A.kX(t).b+" ("+r+" left).":"Pick the cable roll and tap "+A.kX(t).b+"."}return"Rough-in done! Open 2 Drywall."
case 1:if(!m.gaGc())return"Finish the rough-in first (tab 1). Drywall hides the wires."
if(!n.d.gaAF())return"Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall."
if(!n.d.gaAE())return"Pick the drywall saw and tap each box to cut its opening."
if(!D.d.de(B.nP,n.d.ganI()))return"Pick the screw gun and put a screw in every glowing spot on the studs."
if(D.d.b8(n.d.as,new A.eh1()))return"Pick the tape and tap each seam between two sheets."
if(D.d.b8(n.d.as,new A.eh2()))return D.d.b8(n.d.as,new A.eh3())?'The mud is wet. Press "Let it dry", then the next coat.':"Pick the mud and tap each seam. It needs three coats, with drying in between."
if(D.d.b8(n.d.as,new A.eh4()))return D.d.b8(n.d.as,new A.eh5())?'Press "Let it dry", then sand.':"Pick the sander and tap each seam."
if(!n.d.gyc())return"Pick the roller and paint each sheet."
return"Drywall done! Open 3 Devices."
default:if(!m.gyc())return"Finish the drywall first (tab 2)."
m=n.d.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
q=C.B(new C.a2(m,new A.eh6(n),w),w.k("H.E"))
if(q.length!==0){u=D.d.gL(q)
m=u.b
if(m==="gfci")m="GFCI"
return"Pick the "+m+" and tap "+A.kX(u.a).b+". ("+C.t(new A.eh9().$1(new C.J(q,new A.eh7(),C.T(q).k("J<1,G>"))))+" still need a device.)"}m=n.d.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
p=C.B(new C.a2(m,new A.eh8(n),w),w.k("H.E"))
if(p.length!==0)return"Tap "+A.kX(D.d.gL(p).a).b+" to work on it: breaker OFF, wires, push in, cover on."
m=n.d
if(!m.ax)return"Turn the breaker ON (tap the panel or the breaker button) and test."
m=m.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
o=C.B(new C.a2(m,new A.eh_(n),w),w.k("H.E"))
if(o.length!==0)return"Pick the TV or the lamp and plug it into "+A.kX(D.d.gL(o).a).b+" to test it."
m=n.d.d
m===$&&C.c()
return"Flip the wall switch to test the "+(D.d.b8(m,new A.eh0())?"fan":"light")+"."}},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=B.cNO[a1.y],a4=a1.Q
if(a4>=0){w=a1.d
w===$&&C.c()
v=w.at.h(0,a4)}else v=a2
a4=v==null
u=a4?a2:A.Q4(v.a)
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
for(l=0;l<3;++l)m.push(new C.C(D.Ld,new C.x(l<a1.d.e?"\u2764\ufe0f":"\ud83d\udda4",a2,D.z9,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2))
m.push(D.bo)
k=a1.d
if(k.ay)k=D.jJ
else{k=k.ax
k=k?D.eD:D.e9}k=k.j(0.95)
j=C.m(16)
i=a1.d
h=i.ay
if(h)g=D.cy
else{g=i.ax
g=g?D.cr:D.bc}g=C.I(g,D.r,1.4)
if(h)i="TRIPPED: tap to reset"
else{i=i.ax
i=i?"Breaker ON":"Breaker OFF"}m.push(C.aE(a2,C.p(a2,C.d(i,a2,a2,a2,a2,a2,a2,B.eVs,a2,a2,a2),D.f,a2,a2,new C.o(k,a2,g,j,a2,a2,D.n),a2,a2,a2,a2,D.qE,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ehE(a1),a2,a2,a2,a2,a2,a2,!1,D.a9))
m=C.a([C.A(m,D.m,a2,D.e,D.Q,0,a2,a2)],n)
k=a1.ch
j=k?"In front":"Behind the wall"
i=k?F.ajm:F.ajl
k=C.a([A.Q3(j,D.by,i,k,k?a1.gbMn():a1.gbz0()),D.ao],n)
if(!a4){j=v.b
D.d.v(k,C.a([A.Q3("Labels",D.aX,M.MP,j.f,new A.ehF(a1,v)),D.ao,A.Q3("Hints",D.aJ,D.qO,j.e,new A.ehG(a1,v)),D.P],n))}s=A.WI(a1.f,new A.ehO(a1),p,r,o,a2,a2,q,a2,new A.ehP(a1),a1.gc1S(),s,m,k)
r=C.a([],n)
if(a4){a4=C.a([],n)
for(l=0;l<3;++l){q=l<2?6:0
p=a1.y===l?D.aJ.j(0.2):D.dq
o=new C.aV(12,12)
f=new C.aA(a1.y===l?D.aJ:D.bF,1,D.r,-1)
if(l===0)m=a1.d.gaGc()
else{m=a1.d
m=l===1?m.gyc():m.gtT()}m=m?"\u2705 ":""
k=B.d7b[l]
j=a1.y===l?D.aJ:D.ad
a4.push(new C.bE(1,D.bi,C.aE(a2,C.p(a2,new C.cq(D.A,a2,a2,new C.x(m+k,a2,new C.F(!0,j,a2,a2,a2,a2,12,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2),a2),D.f,a2,a2,new C.o(p,a2,new C.bP(f,f,f,f),new C.bs(o,o,o,o),a2,a2,D.n),a2,a2,a2,new C.Q(0,0,q,0),A0.Lg,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ehQ(a1,l),a2,a2,a2,a2,a2,a2,!1,D.a9),a2))}a4=C.a([C.A(a4,D.m,a2,D.e,D.j,0,a2,a2),D.ao],n)
if(!a1.d.b){q=D.aX.j(0.1)
p=C.m(10)
o=C.I(D.aX.j(0.4),D.r,1)
a4.push(C.p(a2,C.d("\ud83d\udc49 "+a1.c1R(),a2,2,D.a2,a2,a2,a2,B.eWU,a2,a2,a2),D.f,a2,a2,new C.o(q,a2,o,p,a2,a2,D.n),a2,a2,a2,a2,D.cj,a2,a2,1/0))}else a4.push(B.fdp)
a4.push(D.ao)
q=C.a([],n)
if(a1.y<2&&!a1.d.gyc())q.push(new C.C(E.te,C.aE(a2,C.p(a2,B.b21,D.f,a2,a2,new C.o(D.dS,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.h4,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ehR(a1),a2,a2,a2,a2,a2,a2,!1,D.a9),a2))
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
q.push(new C.C(E.te,C.aE(a2,C.p(a2,new C.co(D.aQ,D.e,D.j,D.m,a2,D.p,a2,0,C.a([j,D.bo,new C.x(d.b,a2,new C.F(!0,o,a2,a2,a2,a2,12.5,D.I,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2)],n),a2),D.f,a2,a2,new C.o(m,a2,new C.bP(f,f,f,f),new C.bs(k,k,k,k),a2,a2,D.n),a2,a2,a2,a2,D.h4,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ehS(a1,d),a2,a2,a2,a2,a2,a2,!1,D.a9),a2))}if(a1.y===1)q.push(new C.C(E.te,C.aE(a2,C.p(a2,B.b1U,D.f,a2,a2,new C.o(D.e9,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.h4,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ehT(a1),a2,a2,a2,a2,a2,a2,!1,D.a9),a2))
a4.push(new C.a6(a2,52,C.cB(q,a2,a2,a2,a2,D.aQ,!1),a2))
if(a1.z.length!==0)a4.push(a1.crc())
D.d.v(r,a4)}else{a4=C.a([],n)
q=v.b
if(q.c===0)for(p=D.d.gai(u.e),o=new C.h2(p,new A.ehU(v)),m=q.b;o.C();){k=p.gU(0)
j=k.c
i=new C.aV(14,14)
h=a1.at
g=k.a
h=h===g
a0=h?D.b2:D.b5
f=new C.aA(a0,h?3:1,D.r,-1)
a0=C.a([],n)
if(m.j0(0,g))a0.push(new C.C(D.Le,C.W(D.ee,k.d,a2,a2,a2,17),a2))
h=k.b
g=k.d
a0.push(new C.x(h,a2,new C.F(!0,g,a2,a2,a2,a2,12.5,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2))
a4.push(C.aE(a2,C.p(a2,new C.co(D.aQ,D.e,D.Q,D.m,a2,D.p,a2,0,a0,a2),D.f,a2,a2,new C.o(j,a2,new C.bP(f,f,f,f),new C.bs(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,D.x8,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ehV(a1,v,k),a2,a2,a2,a2,a2,a2,!1,D.a9))}a4=C.a([C.c3(D.bE,a4,D.bw,6,8)],n)
if(q.c===0&&a1.at.length!==0){p=C.a([],n)
for(o=D.d.gai(u.f),m=new C.h2(o,new A.ehH(v));m.C();){k=o.gU(0)
j=D.fD.j(0.35)
i=new C.aV(12,12)
f=new C.aA(D.b2,1,D.r,-1)
p.push(C.aE(a2,C.p(a2,new C.x("\u279c "+k.b,a2,D.nY,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.f,a2,a2,new C.o(j,a2,new C.bP(f,f,f,f),new C.bs(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,B.Xf,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.ehI(a1,k),a2,a2,a2,a2,a2,a2,!1,D.a9))}a4.push(new C.C(D.kb,C.c3(D.bE,p,D.bw,6,6),a2))}a4.push(D.P)
p=C.a([A.y3("Back to the room",D.pr,a1.gc1Q(),D.ad),D.ab],n)
if(q.c===0){u.toString
o=A.bBD(u,q)?"Push it into the box":"Fasten every wire"
p.push(A.y3(o,B.akw,A.bBD(u,q)?new A.ehJ(a1):a2,D.aJ))}if(q.c===1)D.d.v(p,C.a([A.y3("Pull it out",D.qR,new A.ehK(a1),D.ad),D.ab,A.y3("Cover on",L.va,new A.ehL(a1),D.aJ)],n))
if(q.c>=2){q=q.w
o=q?"Take out the burnt one":"Pull it out again"
q=q?D.cr:D.ad
p.push(A.y3(o,B.bzf,new A.ehM(a1),q))}a4.push(C.A(p,D.m,a2,D.e,D.j,0,a2,a2))
D.d.v(r,a4)}a4=C.a([new A.AT(t+" job",D.aJ,s,C.v(r,D.m,a2,D.e,D.Q,0,D.p),new A.ehN(a1,a5),"Phase "+(w+1)+"/3",a2)],n)
if(a1.CW)a4.push(C.bZ(0,C.e2(C.p(a2,a2,D.f,B.adS,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),!0,a2),0,0,0))
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
caq(d){return C.bY(E.qv,null,new A.ehi(this),d,!0,!0,!0,D.nV,!1,!1,x.H)}}
A.vO.prototype={}
A.qP.prototype={
a4(){return"FaultKind."+this.b}}
A.tZ.prototype={}
A.Lj.prototype={}
A.cnh.prototype={
bv5(d,e,f){var w,v,u,t,s,r,q,p=this,o=new C.eS()
o.dH(p.a)
w=C.B(B.cYu,x.F)
D.d.fn(w,o)
v=C.aX(x.S)
u=C.a([],x.c)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.K)(w),++s){r=w[s]
q=B.vx.h(0,r).e
if(v.t(0,q))continue
v.J(0,q)
u.push(new A.Lj(r,o.aB(3)))
if(u.length>=d)break}p.c!==$&&C.aO()
p.c=u
p.av2()},
pk(d,e){var w=this.c
w===$&&C.c()
return D.d.b8(w,new A.cnm(e))},
av2(){var w,v,u,t,s=this,r=s.d,q=r.d
q.a8(0)
if(s.pk(0,B.YC))q.J(0,72)
if(s.pk(0,B.YD))q.J(0,75)
q=s.pk(0,B.LU)
r.b=q
r.c=!q
r.w=s.pk(0,B.LV)
r.x=s.pk(0,B.YH)
r.y=s.pk(0,B.YI)
r.z=s.pk(0,B.YG)
r.Q=s.pk(0,B.YJ)
r.as=s.pk(0,B.YK)
r.at=s.pk(0,B.YF)
q=r.f
q.a8(0)
r=r.r
r.a8(0)
w=s.c
w===$&&C.c()
w=D.d.gai(w)
v=new C.h2(w,new A.cni())
while(v.C()){u=w.gU(0)
t=u.c
u=u.b
if(t)r.J(0,u)
else q.J(0,u)}},
gczO(){var w=this.c
w===$&&C.c()
return D.d.de(w,new A.cnk())},
gcGZ(){var w=this.c
w===$&&C.c()
return new C.a2(w,new A.cnl(),C.T(w).k("a2<1>")).gM(0)},
cGC(d){var w,v,u,t,s,r,q,p=this.c
p===$&&C.c()
w=p.length
v=d===86
u=d===92
t=0
for(;t<p.length;p.length===w||(0,C.K)(p),++t){s=p[t]
r=s.a
q=!0
if(B.vx.h(0,r).e!==d)if(!(r===B.LU&&v))r=r===B.LV&&u
else r=q
else r=q
if(r)return s}return null},
aUP(d){++this.f
return new A.eC(!1,d,!1,"")},
coK(){var w,v,u,t,s=this;++s.r;--s.e
for(w=s.d,v=w.d,w=w.e,u=0;u<4;++u){t=B.asP[u]
if(!v.t(0,t))w.J(0,t)}w=s.e
if(w<=0){s.w=!0
return B.aSV}v=w===1?"life":"lives"
return new A.eC(!1,"ZAP! You touched a live wire and got a shock. All the breakers were knocked off. "+w+" "+v+" left. Turn the breaker OFF first.",!0,"shock")},
cQT(d,e){var w,v,u,t,s=this
if(s.w)return B.aSR
if(D.d.t(B.asP,e))return s.bzv(d,e)
w=s.cGC(e)
if(d==="inspect"){if(w==null||w.c)return B.aSU
return new A.eC(!0,"You look and test: "+B.vx.h(0,w.a).b,!1,"")}if(w==null||w.c)return new A.eC(!1,s.b?"Nothing needs fixing there.":"There is nothing wrong with this, so the "+C.t(B.Qb.h(0,d))+' is not needed. Use "Look and test" on things to find the problem.',!1,"")
v=B.vx.h(0,w.a)
if(d!==v.c){++s.f
return new A.eC(!1,s.b?"That is not the right tool for this problem.":"The "+C.t(B.Qb.h(0,d))+" does not fix this. "+v.b,!1,"")}u=v.f
if(u!==0){t=s.d
u=!t.d.t(0,u)&&!t.e.t(0,u)}else u=!1
if(u){if(s.b)return s.coK()
return s.aUP("STOP! "+v.r+" The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.")}w.c=!0
s.av2()
return new A.eC(!0,v.d,!1,"")},
bzv(d,e){var w,v,u,t,s=this
if(d==="inspect"){w=s.d
if(w.d.t(0,e))w="This breaker has tripped: it sits in the middle (orange)."
else w=w.e.t(0,e)?"This breaker is switched OFF.":"This breaker is ON."
return new A.eC(!0,w,!1,"")}if(d!=="hand")return s.aUP(s.b?"Use your hand on a breaker.":"A breaker is switched with your hand, not with a "+C.t(B.Qb.h(0,d))+".")
w=s.d
v=w.d
if(v.t(0,e)){w=s.c
w===$&&C.c()
u=C.T(w).k("a2<1>")
t=C.B(new C.a2(w,new A.cnj(e),u),u.k("H.E"))
if(t.length!==0){D.d.gL(t).c=!0
s.av2()
return new A.eC(!0,B.vx.h(0,D.d.gL(t).a).d,!1,"")}v.W(0,e)
return B.aTo}w=w.e
if(w.t(0,e)){w.W(0,e)
return B.aTi}w.J(0,e)
return B.aT8}}
A.apE.prototype={
T(){var w,v=new A.Ay(-0.3,0.48,46,B.Tb,$.aw())
v.f=80
w=new C.BB()
$.Cv()
w.iT(0)
return new A.aCN(v,w)}}
A.aCN.prototype={
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
w=A.h3p(v.a.d,w)
v.d=w
v.r=A.aeW(w.d)},
q(){var w=this.ax
if(w!=null)w.a9(0)
this.a2()},
c1Y(d,e){var w=this,v=w.ax
if(v!=null)v.a9(0)
w.m(new A.ejh(w,d,e))
w.ax=C.cM(D.jm,new A.eji(w))},
aWq(){this.f.n2(46,0.48,B.Tb,-0.3)
this.m(new A.ej6(this))},
c1X(d){var w,v,u=this
if(d===0)return
w=u.d
w===$&&C.c()
v=w.cQT(u.x,d)
w=v.a
if(w)A.y4()
else A.nc(180,220,0.25,"square")
if(v.d==="shock"){C.fJ()
u.m(new A.ejb(u))
C.bN(D.mQ,new A.ejc(u),x.P)}u.m(new A.ejd(u,d))
w=w&&!v.c
u.c1Y(v.b,w)
w=u.d
if(w.w)$.aT.x1$.push(new A.eje(u))
else if(w.gczO()&&!u.at){u.at=!0
$.aT.x1$.push(new A.ejf(u))}},
cax(){var w=null,v=this.c
v.toString
C.c9(w,w,!1,w,new A.ej9(this),v,w,!0,!0,x.H)},
c1U(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new A.ej5(this),v,w,!0,!0,x.H)},
auq(){this.m(new A.ej7(this))
this.aWq()},
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
for(o=0;o<3;++o)p.push(new C.C(D.Ld,new C.x(o<i.d.e?"\u2764\ufe0f":"\ud83d\udda4",h,D.z9,h,h,h,h,h,h,h,h,h),h))
v=A.WI(i.f,new A.ejp(i),s,u,r,h,new A.ejq(),t,h,i.gc1V(),i.gc1W(),v,C.a([C.A(p,D.m,h,D.e,D.Q,0,h,h)],q),h)
u=i.d.c
u===$&&C.c()
t=C.T(u)
t=new C.cQ(new C.a2(u,new A.ejr(),t.k("a2<1>")),new A.ejs(),t.k("cQ<1,n>")).aH(0,"  \xb7  ")
u=C.d("Customer: "+(t.length===0?"All fixed!":t),h,2,D.a2,h,h,h,B.aNu,h,h,h)
t=C.a([],q)
for(n=0;n<10;++n){m=B.daZ[n]
s=i.x===m?D.aJ.j(0.25):D.c.j(0.07)
r=new C.aV(14,14)
p=i.x===m
l=p?D.aJ:D.b5
k=new C.aA(l,p?2:1,D.r,-1)
l=B.dgG.h(0,m)
p=C.W(l,i.x===m?D.aJ:D.ad,h,h,h,19)
l=B.Qb.h(0,m)
l.toString
j=i.x===m?D.aJ:D.c
t.push(new C.C(E.te,C.aE(h,C.p(h,new C.co(D.aQ,D.e,D.j,D.m,h,D.p,h,0,C.a([p,D.bo,new C.x(l,h,new C.F(!0,j,h,h,h,h,12.5,D.I,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q),h),D.f,h,h,new C.o(s,h,new C.bP(k,k,k,k),new C.bs(r,r,r,r),h,h,D.n),h,h,h,h,D.h4,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.ejt(i,m),h,h,h,h,h,h,!1,D.a9),h))}g=C.a([new A.AT("Service call",D.aX,v,C.v(C.a([new C.bI(D.a3,h,h,u,h),D.P,new C.a6(h,52,C.cB(t,h,h,h,h,D.aQ,!1),h)],q),D.m,h,D.e,D.Q,0,D.p),new A.eju(i,d),""+g+"/"+w+" fixed",h)],q)
if(i.as)g.push(C.bZ(0,C.e2(C.p(h,h,D.f,B.adS,h,h,h,h,h,h,h,h,h,h),!0,h),0,0,0))
return new C.an(D.W,h,D.aa,D.q,g,h)},
cuF(d){return C.bY(E.qv,null,new A.ejn(this),d,!0,!0,!0,D.nV,!1,!1,x.H)},
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
var z=a.updateTypes(["~()","R(n7)","~(G)","R(pF)","M(M)","R(Wu)","ak<tc>(P)","R(Lj)","R(a3K)","R(md)","n(n,md)","R(zH)","n(n7)","M(G)","R(Ek)","R(yo)","R(ps)","ay<~>()","G(OO,OO)","UT(Y)","UQ(Y)","~(G,ak<M>)","a5D(Y)","ps(P)","~(G,M,M,n,w)","u7()","~(ak<M>,w)","~(ak<M>)","~(ak<M>{col:w})","~(G,M,w{h:P,w:P})","P(ps)","~(G,ak<M>,w,P,n)","~(G,n,M,M,M,R)","n(Lj)","R(VQ)","R(a3h)","R(u7)","ak<M>(ak<M>)","~(n,ak<M>{r:P})","~(n,M,M)","~(n7,M,n)","~(n,M,M,G)","M(n)","R(M)","R(G)","n(zH)","~(M,M,M,M)","G(pF)","~(G,M,M{col:w,round:R})","db()","M(G,G)","~(M,M,G{alongX:R})"])
A.bUs.prototype={
$1(d){var w=this.a
w=w===0?d:A.bBe(d,w)
return w.ae(0,this.b)},
$S:z+4}
A.bUt.prototype={
$1(d){var w=this.a
return w===0?d:A.bBe(d,w)},
$S:z+4}
A.bUr.prototype={
$4(b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
for(w=b4.b,v=b7.a,u=b7.b,t=b7.c,s=b6.a,r=b6.b,q=b6.c,p=b8.a,o=b8.b,n=b8.c,m=1/w,l=v*m,k=u*m,j=t*m,i=p*m,h=o*m,m=n*m,g=b4.a,f=g.a,e=b4.c,d=x.o,a0=b4.d,a1=b4.e,a2=b4.f,a3=0;a3<w;++a3)for(a4=a3/w,a5=s+v*a4,a6=r+u*a4,a4=q+t*a4,a7=0;a7<w;++a7){a8=a7/w
a9=a5+p*a8
b0=a6+o*a8
a8=a4+n*a8
b1=a9+l
b2=b0+k
b3=a8+j
f.push(new A.tc(C.a([e.$1(new A.M(a9,b0,a8)),e.$1(new A.M(b1,b2,b3)),e.$1(new A.M(b1+i,b2+h,b3+m)),e.$1(new A.M(a9+i,b0+h,a8+m))],d),a0.$1(b5),a1,g.b,a2,g.d,!1,g.c,g.e))}},
$S:z+46}
A.bUu.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aK(0,Math.cos(w)).ae(0,this.c.aK(0,Math.sin(w)))},
$S:z+13}
A.bUq.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new A.M(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+50}
A.bUv.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aK(0,Math.cos(w)).ae(0,this.c.aK(0,Math.sin(w)))},
$S:z+13}
A.fHx.prototype={
$1(d){var w=d.b,v=this.a,u=d.c,t=this.b
return new A.M(d.a,w*v-u*t,w*t+u*v)},
$S:z+4}
A.fHv.prototype={
$1(d){var w=this.a
return w===0?d:A.bBe(d,w)},
$S:z+4}
A.fHw.prototype={
$1(d){var w=this,v=w.b===0?d:w.c.$1(d)
return J.fIr(w.a.$1(v),w.d)},
$S:z+4}
A.fHu.prototype={
$1(d){var w=this.b===0?d:this.c.$1(d)
return this.a.$1(w)},
$S:z+4}
A.fHo.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:1783}
A.ckR.prototype={
$1(d){var w=this,v=d.a,u=w.a,t=d.c,s=w.b,r=-v*s+t*u,q=d.b,p=w.c,o=w.d
return new A.M(v*u+t*s,q*p-r*o,-(q*o+r*p))},
$S:z+4}
A.ckS.prototype={
$1(d){var w=this.a.c,v=this.b.$1(d.aC(0,w.d))
return new A.M(v.a,v.b,v.c+w.c)},
$S:z+4}
A.ckQ.prototype={
$2(d,e){return D.k.aL(e.c,d.c)},
$S:z+18}
A.ePy.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.aGg(D.k.D((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:8}
A.ePx.prototype={
$1(d){if(x.C.b(d))this.a.a.d.amY(1+d.grN().b*0.0012)},
$S:242}
A.ePu.prototype={
$1(d){var w=this.a
return w.w=w.a.d.c},
$S:241}
A.ePv.prototype={
$1(d){var w,v,u,t=this.a,s=t.a
if(d.w>=2){s=s.d
s.amY(t.w/d.d/s.c)}else{t=s.d
s=d.a
t.as=t.Q=null
w=t.a+=-s.a*0.009
if(!t.x){v=t.r
u=t.w
t.a=D.k.D(w,v-u,v+u)}t.b=D.k.D(t.b+s.b*0.009,-1.25,1.35)
t.aZ()}},
$S:217}
A.ePw.prototype={
$1(d){var w=this.a
w=w.a.f.$1(w.e.cNN(d.b))
return w},
$S:49}
A.flw.prototype={
$2(d,e){var w
A:{if("black"===d){w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break A}if("white"===d){w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break A}w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break A}return w},
$S:z+10}
A.flx.prototype={
$2(d,e){return d==="ground"?y.j:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+10}
A.fly.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else A:{if("black"===d){w="The black (hot) wire goes on the BRASS LINE screw."
break A}if("white"===d){w="The white (neutral) wire goes on the SILVER LINE screw."
break A}w=y.j
break A}return w},
$S:z+10}
A.flz.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fixture GREEN ground wire only."
break A}return w},
$S:z+10}
A.flA.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fan GREEN ground wire only."
break A}return w},
$S:z+10}
A.fks.prototype={
$1(d){return d.a===this.a},
$S:z+35}
A.fHM.prototype={
$1(d){return d.a},
$S:z+45}
A.fky.prototype={
$1(d){return D.d.ix(this.a.f,new A.fkz(d)).f},
$S:73}
A.fkz.prototype={
$1(d){return d.a===this.a},
$S:z+9}
A.fkw.prototype={
$1(d){return D.d.ix(this.a.e,new A.fkx(d)).e},
$S:13}
A.fkx.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.fku.prototype={
$1(d){return d.e==="hot"},
$S:z+11}
A.fkv.prototype={
$1(d){return d.e==="neutral"},
$S:z+11}
A.fiD.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.b=d
w=j.b
v=w.b
u=C.a3(v).k("cJ<1,2>")
t=u.k("a2<H.E>")
s=C.B(new C.a2(new C.cJ(v,u),new A.fiE(g),t),t.k("H.E"))
r=g==="ground"
q=r?B.wQ:h
p=r?0.6:0.3
if(w.c>0){o=e.ae(0,B.fyC)
i.jL(A.agk(C.a([e,e.ae(0,B.fxk),o],x.o),4),0.085,q,!1,p,8)
return}if(s.length!==0){n=A.bzl(j.c,D.d.gL(s).a,w)
w=A.zB(e,n,0.5)
v=n.a>0
m=w.ae(0,new A.M(v?0.5:-0.5,0.2,0.9))
w=e.ae(0,B.fAG)
if(j.d)v=0
else v=v?0.06:-0.06
l=A.agk(C.a([e,w,m,n.ae(0,new A.M(v,0,0.08)),n],x.o),5)
k=D.d.dn(l,0,D.k.bw(l.length*0.8))
i.jL(k,0.085,q,!1,p,8)
if(!r)i.jL(D.d.fG(l,k.length-1),0.061200000000000004,B.wQ,!1,0.6,8)}else{l=A.agk(C.a([e,e.ae(0,B.fvq),A.zB(e,f,0.6),f],x.o),5)
k=r?l:D.d.dn(l,0,D.k.bw(l.length*0.86))
i.jL(k,0.085,q,!1,p,8)
if(!r)i.jL(D.d.fG(l,k.length-1),0.061200000000000004,B.wQ,!1,0.6,8)}},
$S:z+24}
A.fiE.prototype={
$1(d){return d.b===this.a},
$S:1784}
A.f56.prototype={
$2(d,e){var w,v=this.a
v.b=d
w=A.G3(e,0.9,6)
if(this.b)v.jL(w,0.2,B.VS,!1,0.35,10)
this.c.push(D.d.gam(w))},
$S:z+21}
A.f6r.prototype={
$6$taped(d,e,f,g,h,i){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t.bU(new A.M(v,u,w),B.fBA,h,0.7)
t.e9(new A.M(v,u,w),new A.M(v+e*0.22,u,w),0.17,g,0.9,12)
t.cH(new A.M(v+e*0.23,u,w),B.fA0,B.DL)
if(i)t.bU(new A.M(v+e*0.05,u,w),B.fzT,D.cq,0.2)},
$5(d,e,f,g,h){return this.$6$taped(d,e,f,g,h,!1)},
$S:1785}
A.fis.prototype={
$1(d){return d.a===this.a},
$S:z+36}
A.fit.prototype={
$0(){return B.ahR},
$S:z+25}
A.bOD.prototype={
$1(d){return new A.ps("back",d,5)},
$S:z+23}
A.bOH.prototype={
$1(d){return d.gwy()},
$S:z+8}
A.bOG.prototype={
$1(d){var w=d.c
return(w==="bathroom"||w==="kitchen")&&d.gBD()},
$S:z+8}
A.bOF.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+8}
A.bOE.prototype={
$1(d){return d.gwy()&&d.gBD()},
$S:z+8}
A.e_y.prototype={
$1(d){return!(d.gwy()&&d.gBD())},
$S:z+8}
A.e_w.prototype={
$1(d){var w,v=this.a.a.d
A:{if("wiring"===v){w=!d.gwy()
break A}if("plumbing"===v){w=!d.gBD()
break A}w=!(d.gwy()&&d.gBD())
break A}return w},
$S:z+8}
A.e_x.prototype={
$1(d){var w,v=this.a,u=v.a.d
A:{if("wiring"===u){w="This room needs wiring: press the Wiring button, or tap the outlet or the light."
break A}if("plumbing"===u){w="This room needs plumbing: press the Plumbing button, or tap the toilet or the sink."
break A}w="Walk through the house and fix what the signs say is wrong."
break A}return v.v8(w)},
$S:8}
A.e_e.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.e_f.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.e_d(w))},
$S:0}
A.e_d.prototype={
$0(){return this.a.z=null},
$S:0}
A.e_g.prototype={
$0(){var w=this.a
w.r=this.b
w.w=0
w.x=-1
w.y=0
w.mB()},
$S:0}
A.dZS.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.d=this.b
w.w=0
w.x=-1
w.y=0
w.z=null
w.mB()},
$S:0}
A.dZX.prototype={
$0(){var w=this.a,v=this.b
w.w=v-100
w.y=v
w.mB()},
$S:0}
A.dZY.prototype={
$0(){var w=this.a,v=this.b
w.x=v-300
w.y=v},
$S:0}
A.dZZ.prototype={
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
A.e__.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.c
w===$&&C.c()
w[u.d].at.J(0,this.b)
v.mB()},
$S:0}
A.e_0.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new A.dZW(w,this.b))
w.acc(this.c)},
$S:11}
A.dZW.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.c
w===$&&C.c()
return w[v.d].at.W(0,this.b)},
$S:0}
A.e_1.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.c
w===$&&C.c()
u=w[u.d]
u.cy=!u.cy
v.mB()},
$S:0}
A.e_6.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=C.a([],m)
for(w=this.a,v=this.b,u=0;u<8;++u){t=B.asD[u]
s=D.c.j(0.08)
r=new C.aV(12,12)
q=w.d
q===$&&C.c()
p=q.c
p===$&&C.c()
o=new C.aA(p[q.d].cx.h(0,v)===t.a?D.aJ:D.b5,1,D.r,-1)
l.push(C.aE(n,C.p(n,new C.x(t.c+" "+t.b,n,D.SS,n,n,n,n,n,n,n,n,n),D.f,n,n,new C.o(s,n,new C.bP(o,o,o,o),new C.bs(r,r,r,r),n,n,D.n),n,n,n,n,D.eh,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e_4(w,d,v,t),n,n,n,n,n,n,!1,D.a9))}s=w.d
s===$&&C.c()
r=s.c
r===$&&C.c()
if(r[s.d].cx.h(0,v)!=null)l.push(C.aE(n,C.p(n,B.fiR,D.f,n,n,new C.o(D.eD,n,n,C.m(12),n,n,D.n),n,n,n,n,D.eh,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e_5(w,d,v),n,n,n,n,n,n,!1,D.a9))
return C.bo(!0,new C.C(D.bY,C.v(C.a([B.ffd,D.S,C.c3(D.bE,l,D.bw,8,8)],m),D.F,n,D.e,D.Q,0,D.p),n),!0,!1,D.ag,!0,!0)},
$S:29}
A.e_4.prototype={
$0(){var w,v,u,t=this
C.a5(t.b,!1).N(null)
w=t.a
v=t.d
w.m(new A.e_3(w,t.c,v))
u=v.b
w.v8(v.d>0?u+" is on and playing NGMY ads. Tap it to watch full screen.":u+" is plugged in and running.")
A.nc(820,70,0.25,"tri")},
$S:0}
A.e_3.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.c
w===$&&C.c()
w[u.d].cx.n(0,this.b,this.c.a)
v.mB()},
$S:0}
A.e_5.prototype={
$0(){C.a5(this.b,!1).N(null)
var w=this.a
w.m(new A.e_2(w,this.c))
w.v8("Unplugged.")},
$S:0}
A.e_2.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.c
w===$&&C.c()
w[u.d].cx.W(0,this.b)
v.mB()},
$S:0}
A.dZV.prototype={
$1(d){return A.fM4(!1,this.a.ch,!1)},
$S:z+19}
A.dZU.prototype={
$1(d){return new A.UQ(this.a.CW,null)},
$S:z+20}
A.dZT.prototype={
$0(){var w,v,u,t=this,s=t.b
s.c=s.c+t.c
s.d=s.d+t.d
w=t.a
v=w.d
v===$&&C.c()
u=v.c
u===$&&C.c()
u[v.d].aBh(0,s)
w.mB()},
$S:0}
A.e_h.prototype={
$0(){var w,v,u,t=this.b
t.e=(t.e+1)%4
w=this.a
v=w.d
v===$&&C.c()
u=v.c
u===$&&C.c()
u[v.d].aBh(0,t)
w.mB()},
$S:0}
A.e_b.prototype={
$0(){var w=this.b
w.f=(w.f+1)%6
this.a.mB()},
$S:0}
A.e_c.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.c
w===$&&C.c()
D.d.W(w[u.d].x,this.b)
v.y=v.w=0
v.mB()},
$S:0}
A.dZD.prototype={
$0(){var w=this.a,v=this.b.a
w.w=v
w.y=100+v
w.mB()},
$S:0}
A.dZI.prototype={
$0(){return this.a.acd(-6,0)},
$S:0}
A.dZJ.prototype={
$0(){return this.a.acd(6,0)},
$S:0}
A.dZK.prototype={
$0(){return this.a.acd(0,-6)},
$S:0}
A.dZL.prototype={
$0(){return this.a.acd(0,6)},
$S:0}
A.dZM.prototype={
$0(){return this.a.bwc(this.b.a)},
$S:0}
A.dZN.prototype={
$0(){var w=this.a
return w.m(new A.dZH(w))},
$S:0}
A.dZH.prototype={
$0(){return this.a.x=-1},
$S:0}
A.dZO.prototype={
$0(){var w=this.a
w.m(new A.dZG(w,this.b))},
$S:0}
A.dZG.prototype={
$0(){var w,v=this.a,u=v.x,t=this.b,s=v.d
if(u<0){s===$&&C.c()
u=s.c
u===$&&C.c()
D.d.ha(u[s.d].z,0,3,t)}else{s===$&&C.c()
w=s.c
w===$&&C.c()
w[s.d].z[u]=t}v.mB()},
$S:0}
A.dZP.prototype={
$0(){var w=this.a
w.m(new A.dZF(w,this.b))},
$S:0}
A.dZF.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.c
w===$&&C.c()
w[u.d].Q=this.b
v.mB()},
$S:0}
A.dZQ.prototype={
$0(){var w=this.a
w.m(new A.dZE(w,this.b))},
$S:0}
A.dZE.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.c
w===$&&C.c()
w[u.d].as=this.b
v.mB()},
$S:0}
A.dZR.prototype={
$0(){return this.a.acc(this.b.c)},
$S:0}
A.e_n.prototype={
$0(){return this.a.cgi(this.b)},
$S:0}
A.e_m.prototype={
$0(){return this.a.aWg()},
$S:0}
A.e_l.prototype={
$1(d){return d<=5},
$S:32}
A.e_k.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.c
w===$&&C.c()
return A.hRq(w[u.d],v.at.gB6()/1000)},
$S:z+6}
A.e_o.prototype={
$0(){return this.a.Qy("look")},
$S:0}
A.e_p.prototype={
$0(){return this.a.Qy("furniture")},
$S:0}
A.e_q.prototype={
$0(){return this.a.Qy("walls")},
$S:0}
A.e_r.prototype={
$0(){return this.a.Qy("floor")},
$S:0}
A.e_s.prototype={
$0(){return this.a.Qy("ceiling")},
$S:0}
A.e_t.prototype={
$0(){return this.a.Qy("doors")},
$S:0}
A.e_u.prototype={
$0(){return C.a5(this.a,!1).ci(C.em(new A.e_j(),!1,null,x.H))},
$S:0}
A.e_j.prototype={
$1(d){return B.aCV},
$S:z+22}
A.e_v.prototype={
$0(){var w=this.a
return w.m(new A.e_i(w))},
$S:0}
A.e_i.prototype={
$0(){var w=this.a.d
w===$&&C.c()
return w.b=!w.b},
$S:0}
A.e_a.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.aI(d,k,x.w).w,i=this.a,h=i.d
h===$&&C.c()
w=x.p
h=C.a([B.fbX,D.au,C.d("Wiring "+h.gcR6()+"/"+i.d.gKR().length+" \xb7 Plumbing "+i.d.gcO0()+"/"+i.d.gcO_(),k,k,k,k,k,k,B.Il,k,k,k),D.S],w)
for(v=i.d.gKR(),u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aV(12,12)
p=s.c
o=p!=="outside"
if(o){n=s.ch
n=n==null?k:n.gtT()
if(n==null)n=!s.ax}else n=!0
if(n)if(p==="bathroom"||p==="kitchen"){n=s.CW
if(n==null)n=k
else n=n.gvL()&&n.gEQ()&&n.r&&n.y&&n.x.a===0
if(n==null)n=!s.ay}else n=!0
else n=!1
m=new C.aA(n?D.bc.j(0.5):D.bF,1,D.r,-1)
if(o){n=s.ch
n=n==null?k:n.gtT()
if(n==null)n=!s.ax}else n=!0
if(n)if(p==="bathroom"||p==="kitchen"){n=s.CW
if(n==null)n=k
else n=n.gvL()&&n.gEQ()&&n.r&&n.y&&n.x.a===0
if(n==null)n=!s.ay}else n=!0
else n=!1
if(n)n="\u2705 finished"
else{if(o){n=s.ch
n=n==null?k:n.gtT()
if(n==null)n=!s.ax}else n=!0
n=n?"":"\u26a1 wiring  "
if(p==="bathroom"||p==="kitchen"){l=s.CW
if(l==null)l=k
else l=l.gvL()&&l.gEQ()&&l.r&&l.y&&l.x.a===0
if(l==null)l=!s.ay}else l=!0
n+=l?"":"\ud83d\udeb0 plumbing"}if(o){o=s.ch
o=o==null?k:o.gtT()
if(o==null)o=!s.ax}else o=!0
if(o)if(p==="bathroom"||p==="kitchen"){p=s.CW
if(p==null)p=k
else p=p.gvL()&&p.gEQ()&&p.r&&p.y&&p.x.a===0
if(p==null)p=!s.ay}else p=!0
else p=!1
p=p?D.es:D.ad
h.push(C.aE(k,C.p(k,new C.co(D.aQ,D.e,D.j,D.m,k,D.p,k,0,C.a([new C.bE(1,D.bi,new C.x(s.b,k,B.f1v,k,k,k,k,k,k,k,k,k),k),new C.x(n,k,new C.F(!0,p,k,k,k,k,12,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k)],w),k),D.f,k,k,new C.o(r,k,new C.bP(m,m,m,m),new C.bs(q,q,q,q),k,k,D.n),k,k,k,D.eO,D.bR,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.e_8(i,d,s),k,k,k,k,k,k,!1,D.a9))}h.push(D.P)
h.push(C.bJ(B.f5z,new A.e_9(i,d),k))
return C.bo(!0,new C.cU(new C.aY(0,1/0,0,j.a.b*0.75),C.cB(h,k,D.bY,k,k,D.ah,!0),k),!0,!1,D.ag,!0,!0)},
$S:29}
A.e_8.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.acc(this.c.a)},
$S:0}
A.e_9.prototype={
$0(){C.a5(this.b,!1).N(null)
$.aTw=A.fXR(D.o.F(Date.now(),1e5))
var w=this.a
w.m(new A.e_7(w))
w.auY(!0)},
$S:0}
A.e_7.prototype={
$0(){var w=this.a,v=$.aTw
v.toString
w.d=v
w.r="look"
w.w=0
w.x=-1
w.y=0
w.mB()},
$S:0}
A.dlf.prototype={
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
$S:23}
A.fiL.prototype={
$2(d,e){return this.a===d?e:0},
$S:1786}
A.fiG.prototype={
$1(d){return d.a==="right"},
$S:z+16}
A.fiH.prototype={
$1(d){return d.a==="back"},
$S:z+16}
A.fiI.prototype={
$1(d){return d.b},
$S:z+30}
A.fiJ.prototype={
$2(d,e){return e},
$S:86}
A.fiK.prototype={
$2(d,e){var w=this.a
w.b=0
w.e9(new A.M(d,e,0),new A.M(d,e,2.2),0.7,B.JV,0.7,10)},
$S:1787}
A.fiQ.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=A.zB(d,e,v/f)
w.aAY(new A.M(u.a,4,u.c),B.fBM,B.VK,!1,0.05)}t=A.zB(d,e,0.5)
for(s=e.aC(0,d).gSW()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=B.cZv[p]
n=g?new A.M(s,0.16,0.3):new A.M(0.3,0.16,s)
w.bU(new A.M(r,o,q),n,B.VK,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+51}
A.fiN.prototype={
$2(d,e){return this.a.jL(A.G3(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+26}
A.fiM.prototype={
$1(d){return this.a.jL(A.G3(d,0.5,3),0.14,B.p8,!1,0.3,8)},
$S:z+27}
A.fiP.prototype={
$2$col(d,e){return this.a.jL(A.G3(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,B.VS)},
$S:z+28}
A.fiO.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.bU(e,new A.M(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$S:z+29}
A.fjJ.prototype={
$0(){return A.nc(1320,120,0.25,"tri")},
$S:0}
A.dIW.prototype={
$1(d){return this.a},
$S:40}
A.dIZ.prototype={
$0(){return C.a5(this.a,!1).lY()},
$S:0}
A.dJ_.prototype={
$0(){var w=this.a
return w.m(new A.dIY(w))},
$S:0}
A.dIY.prototype={
$0(){return this.a.d=!1},
$S:0}
A.dJ0.prototype={
$0(){var w=this.a
return w.m(new A.dIX(w))},
$S:0}
A.dIX.prototype={
$0(){return this.a.d=!0},
$S:0}
A.dJ2.prototype={
$0(){var w=this.a
return w.zW(A.c7l("",w.d))},
$S:0}
A.dJ3.prototype={
$0(){var w=this.a
return w.zW(A.c7l("wiring",w.d))},
$S:0}
A.dJ4.prototype={
$0(){var w=this.a
return w.zW(A.c7l("plumbing",w.d))},
$S:0}
A.dJ5.prototype={
$0(){var w=this.a
return w.zW(A.c7l("fix",w.d))},
$S:0}
A.dJ6.prototype={
$0(){var w=this.a
return w.zW(A.fM4(w.d,null,!1))},
$S:0}
A.dJ7.prototype={
$0(){var w=this.a
return w.zW(A.fM4(w.d,null,!0))},
$S:0}
A.dJ8.prototype={
$0(){var w=this.a
return w.zW(new A.apE(w.d,null))},
$S:0}
A.dJ9.prototype={
$0(){return this.a.bWS(this.b.a)},
$S:0}
A.dJ1.prototype={
$0(){return this.a.zW(B.aCV)},
$S:0}
A.cov.prototype={
$0(){return this.a.d.amY(0.8)},
$S:0}
A.cow.prototype={
$0(){return this.a.d.amY(1.25)},
$S:0}
A.fzX.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=C.aI(d,o,x.w).w,m=this.b,l=this.c,k=l.length,j=x.p,i=C.a([C.d(this.a,o,o,o,o,o,o,D.dB,o,o,o),D.au,C.d(""+new C.a2(m,new A.fzW(),C.T(m).k("a2<1>")).gM(0)+" of "+k+" steps done",o,o,o,o,o,o,B.Il,o,o,o),D.S],j)
for(w=0;w<k;++w){v=D.c.j(0.05)
u=new C.aV(14,14)
t=new C.aA(m[w]?D.bc.j(0.6):D.bF,1,D.r,-1)
s=m[w]
r=s?"\u2705":""+(w+1)+"."
q=s?D.c:D.aJ
p=l[w]
s=s?D.ay:D.c
i.push(C.p(o,new C.co(D.aQ,D.e,D.j,D.F,o,D.p,o,0,C.a([new C.x(r,o,new C.F(!0,q,o,o,o,o,14,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),D.aw,new C.bE(1,D.bi,new C.x(p,o,new C.F(!0,s,o,o,o,o,13,o,o,o,o,o,1.4,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o)],j),o),D.f,o,o,new C.o(v,o,new C.bP(t,t,t,t),new C.bs(u,u,u,u),o,o,D.n),o,o,o,D.cG,D.bl,o,o,o))}return C.bo(!0,new C.cU(new C.aY(0,1/0,0,n.a.b*0.75),C.cB(i,o,D.bY,o,o,D.ah,!0),o),!0,!1,D.ag,!0,!0)},
$S:29}
A.fzW.prototype={
$1(d){return d},
$S:155}
A.bQN.prototype={
$0(){return C.a5(this.a,!1).lY()},
$S:0}
A.d19.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c},
$S:0}
A.d1a.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d18(w))},
$S:0}
A.d18.prototype={
$0(){return this.a.y=null},
$S:0}
A.d12.prototype={
$0(){return this.a.x=0},
$S:0}
A.d11.prototype={
$1(d){var w=this.a.e.b
return new C.bc(w,C.a3(w).k("bc<2>")).t(0,d)},
$S:3}
A.d13.prototype={
$1(d){return d.a===this.a},
$S:z+9}
A.d14.prototype={
$2(d,e){return e===this.a},
$S:451}
A.d15.prototype={
$0(){var w=this.a
w.xh()
w.x=this.b},
$S:0}
A.d16.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.d17.prototype={
$0(){var w=this.a,v=w.e,u=v.a
v.a=!u
if(u)v.d=!1
w.xh()},
$S:0}
A.d1b.prototype={
$0(){var w=this.a,v=w.e
v.d=v.a=!0
w.xh()},
$S:0}
A.d1j.prototype={
$1(d){return!d},
$S:155}
A.d1t.prototype={
$0(){var w=this.a.gFv()
return A.fzV(this.b,w.b,w.d,this.c)},
$S:0}
A.d1k.prototype={
$0(){var w=this.a
return w.m(new A.d1i(w))},
$S:0}
A.d1i.prototype={
$0(){var w=this.a,v=w.e
v.e=!v.e
w.xh()},
$S:0}
A.d1l.prototype={
$0(){var w=this.a
return w.m(new A.d1h(w))},
$S:0}
A.d1h.prototype={
$0(){var w=this.a,v=w.e
v.f=!v.f
w.xh()},
$S:0}
A.d1m.prototype={
$0(){var w=this.a,v=w.gkJ()
return v.n2(10,0.2,new A.M(0.6,0,w.e.c===0?4.2:0.4),-0.95)},
$S:0}
A.d1n.prototype={
$0(){var w=this.a,v=w.gkJ()
return v.n2(10,0.2,new A.M(-0.6,0,w.e.c===0?4.2:0.4),0.95)},
$S:0}
A.d1o.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.e.b.j0(0,u)){w.oO("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w.m(new A.d1g(w,v))
if(w.w.length!==0){if(u==="ground")w.gkJ().n2(8,0.55,B.fz5,0.15)
else if(u==="white")w.gkJ().n2(8.5,0.2,B.fAW,0.95)
else w.gkJ().n2(8.5,0.2,B.fv9,-0.95)
w.km(v.b+": now tap the screw it belongs on.",!0)}},
$S:0}
A.d1g.prototype={
$0(){var w=this.a,v=this.b.a
return w.w=w.w===v?"":v},
$S:0}
A.d1p.prototype={
$0(){var w=this.a
w.m(new A.d1f(w))
A.y4()
w.km("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.nN()},
$S:0}
A.d1f.prototype={
$0(){var w=this.a
w.e.c=1
w.xh()},
$S:0}
A.d1q.prototype={
$0(){var w=this.a
w.m(new A.d1e(w))
w.nN()},
$S:0}
A.d1e.prototype={
$0(){var w=this.a
w.e.c=0
w.xh()},
$S:0}
A.d1r.prototype={
$0(){var w=this.a
w.m(new A.d1d(w))
A.y4()
w.km("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
A.d1d.prototype={
$0(){var w=this.a
w.e.c=2
w.xh()},
$S:0}
A.d1s.prototype={
$0(){var w=this.a
w.m(new A.d1c(w))
w.nN()},
$S:0}
A.d1c.prototype={
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
A.eJe.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.eJf.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eJd(w))},
$S:0}
A.eJd.prototype={
$0(){return this.a.x=null},
$S:0}
A.eJ7.prototype={
$0(){return this.a.w=0},
$S:0}
A.eJ8.prototype={
$0(){var w=this.a,v=w.d
v.a.J(0,this.b)
v.c=!1
v.d=""
w.f=A.bz1(v)
w.r=""},
$S:0}
A.eJ9.prototype={
$0(){var w=this.a,v=w.d
v.b.n(0,this.b,!0)
v.d=""
w.f=A.bz1(v)},
$S:0}
A.eJa.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eJb.prototype={
$1(d){return this.a.d.b.h(0,d)!==!0},
$S:3}
A.eJc.prototype={
$0(){var w,v=this.a,u=v.d
u.c=!0
w=this.b
u.d=w.length===0?"":D.d.gL(w)
v.f=A.bz1(u)},
$S:0}
A.eJj.prototype={
$1(d){return!d},
$S:155}
A.eJn.prototype={
$0(){return A.fzV(this.a,"Sink drain (P-trap)",B.d0V,this.b)},
$S:0}
A.eJk.prototype={
$1(d){return A.i_0(this.a.d,d)},
$S:z+6}
A.eJl.prototype={
$0(){var w=this.a
return w.m(new A.eJi(w,this.b))},
$S:0}
A.eJi.prototype={
$0(){var w=this.a,v=this.b
return w.r=w.r===v?"":v},
$S:0}
A.eJm.prototype={
$0(){var w=this.a
w.m(new A.eJh(w))
w.nN()},
$S:0}
A.eJh.prototype={
$0(){var w,v=this.a,u=v.d
u.a.a8(0)
w=u.b
w.aGv(w,new A.eJg())
u.c=!1
v.r=u.d=""
v.w=0
v.f=A.bz1(u)},
$S:0}
A.eJg.prototype={
$2(d,e){return!1},
$S:1789}
A.d43.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.d44.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d42(w))},
$S:0}
A.d42.prototype={
$0(){return this.a.x=null},
$S:0}
A.d3W.prototype={
$0(){return this.a.w=0},
$S:0}
A.d3Z.prototype={
$1(d){return d.a===this.a},
$S:z+14}
A.d4_.prototype={
$0(){var w=this.a,v=w.d
v.f=!1
w.f=A.aN9(v)
w.w=this.b},
$S:0}
A.d40.prototype={
$0(){var w=this.a,v=w.d,u=v.e
u.bn(u,new A.d3Y(this.b))
v.f=!1
w.f=A.aN9(v)},
$S:0}
A.d3Y.prototype={
$2(d,e){return e===this.a},
$S:451}
A.d41.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.d3X.prototype={
$0(){var w=this.a,v=w.d
v.f=!v.f
w.f=A.aN9(v)},
$S:0}
A.d48.prototype={
$1(d){return!d},
$S:155}
A.d4e.prototype={
$0(){return A.fzV(this.a,"Faucet supply lines",B.dbY,this.b)},
$S:0}
A.d49.prototype={
$1(d){return A.hQZ(this.a.d,d)},
$S:z+6}
A.d4a.prototype={
$0(){var w=this.a
return w.m(new A.d47(w))},
$S:0}
A.d47.prototype={
$0(){var w=this.a,v=w.d
v.r=!v.r
w.f=A.aN9(v)},
$S:0}
A.d4c.prototype={
$0(){var w=this.b
return w.m(new A.d46(this.a,w))},
$S:0}
A.d46.prototype={
$0(){var w=this.b,v=w.r,u=this.a.a
return w.r=v===u?"":u},
$S:0}
A.d4b.prototype={
$1(d){return d===this.a.a},
$S:3}
A.d4d.prototype={
$0(){var w=this.a
w.m(new A.d45(w))
w.nN()},
$S:0}
A.d45.prototype={
$0(){var w=this.a,v=w.d
v.e.a8(0)
v.f=!1
w.r=""
w.w=0
w.f=A.aN9(v)},
$S:0}
A.db7.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.db8.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.db6(w))},
$S:0}
A.db6.prototype={
$0(){return this.a.x=null},
$S:0}
A.db1.prototype={
$0(){return this.a.r=0},
$S:0}
A.db3.prototype={
$0(){var w=this.a,v=w.d
v.d.W(0,72)
w.f=A.aeW(v)
w.r=this.b},
$S:0}
A.db4.prototype={
$0(){var w=this.a,v=w.d
v.c=!0
v.b=!1
w.f=A.aeW(v)
w.r=this.b},
$S:0}
A.db5.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.db2.prototype={
$1(d){return this.a},
$S:40}
A.dbg.prototype={
$0(){return A.fzV(this.a,"Fix the house",B.cch,this.b)},
$S:0}
A.dbb.prototype={
$0(){return this.a.c9o(this.b)},
$S:0}
A.dbd.prototype={
$1(d){return d<=this.a.d.a},
$S:32}
A.dbc.prototype={
$1(d){return A.hbG(this.a.d,d)},
$S:z+6}
A.dbe.prototype={
$0(){var w=this.a
return w.m(new A.dba(w))},
$S:0}
A.dba.prototype={
$0(){var w=this.a
return w.w=w.w==="wrench"?"":"wrench"},
$S:0}
A.dbf.prototype={
$1(d){var w=this.a
return w.m(new A.db9(w,d))},
$S:6}
A.db9.prototype={
$0(){var w=this.a,v=w.d,u=D.k.V(this.b)
v.a=u
if(u<5)w.r=0
w.f=A.aeW(v)},
$S:0}
A.c4s.prototype={
$0(){return C.a5(this.a,!1).lY()},
$S:0}
A.fjq.prototype={
$5(d,e,f,g,h){var w=this.a.a.t(0,h),v=this.b
v.b=d
if(w)v.a58(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.aGt(e,0.74,D.b2,!1,!0,0,8)
v.d=1}},
$S:z+31}
A.fjp.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.ae(0,h)
w=this.b
w.e=0.5
w.b=d
w.e9(v.aC(0,g.aK(0,0.6)),v.ae(0,g.aK(0,0.6)),1.12,B.p8,0.35,8)
w.yN(v.aC(0,g.aK(0,0.62)),v.aC(0,g.aK(0,0.5)),1.2,0.5,B.V9,0.2,8)
w.b=0
w.yN(f.aC(0,g.aK(0,0.05)),f.ae(0,g.aK(0,0.08)),0.82,0.55,B.beY,0.1,12)
w.e=0},
$S:z+32}
A.fjo.prototype={
$1(d){return d.b<-0.6},
$S:z+43}
A.fiF.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:32}
A.fkQ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=A.af7(d)
for(w=this.a*1.6,v=this.b,u=p.a,t=p.b,s=p.c,r=0;r<7;++r){q=D.k.F(w+r/7,1)
v.iY(new A.M(u+Math.sin(r*2.1)*q*1.4,t+(q*2.4-q*q*6.5),s+(1+q*2.5)),0.2,e,3,6,0.9)}},
$S:1790}
A.fkP.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+14}
A.cfa.prototype={
$1(d){return d.a===this.a},
$S:z+34}
A.cfb.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.cf7.prototype={
$1(d){return this.a.uG(0,d).c.toLowerCase()},
$S:13}
A.cfc.prototype={
$1(d){var w
if(!this.a.e.t(0,d.a)){w=d.b
w=w==="valve"||D.a.a0(w,"hose")}else w=!1
return w},
$S:z+1}
A.cfd.prototype={
$1(d){var w=this.a,v=d.a
return w.e.t(0,v)&&w.bdd(v)>0},
$S:z+1}
A.cfe.prototype={
$1(d){return d.a},
$S:z+12}
A.cff.prototype={
$1(d){return d.a},
$S:z+12}
A.cf8.prototype={
$1(d){return this.a.e.t(0,d.a)},
$S:z+1}
A.cf9.prototype={
$1(d){var w=this.a,v=d.a
return w.bdd(v)<=0||!w.e.t(0,v)},
$S:z+1}
A.fjn.prototype={
$1(d){var w=this.a
w.b=0
w.e9(new A.M(d,8,0),new A.M(d,8,1.6),0.5,B.JV,0.7,10)},
$S:6}
A.fjl.prototype={
$1(d){var w,v,u,t,s,r,q=C.a([],x.o)
for(w=d.length,v=this.a,u=v.a,t=v.b,v=v.c,s=0;s<d.length;d.length===w||(0,C.K)(d),++s){r=d[s]
q.push(new A.M(r.a+u,r.b+t,r.c+v))}return q},
$S:z+37}
A.fjf.prototype={
$3$r(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.be(v.c,new A.fji(d))
w.d=0.32
w.aGt(e,f,D.b2,!1,!0,0,8)
w.d=1},
$2(d,e){return this.$3$r(d,e,1.2)},
$S:z+38}
A.fji.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.fjg.prototype={
$3(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.be(v.c,new A.fjh(d))
w.d=0.32
w.cH(e,f,D.b2)
w.d=1},
$S:z+39}
A.fjh.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.fjm.prototype={
$3(d,e,f){var w,v,u,t=this,s=t.a,r=s.c
r===$&&C.c()
w=D.d.cJ(r.c,d)
r=d.c
v=s.e
u=d.a
if(v.t(0,u))s="Fitted."
else{s=s.b?"":d.e
s="A spot for the "+r.toLowerCase()+". "+s}t.b.n(0,9100+w,new A.db(r,s,e,26))
if(t.c&&!v.t(0,u)&&t.d.length!==0)t.e.push(new A.vp(e.ae(0,B.ftR),f,D.fD))},
$S:z+40}
A.fjc.prototype={
$0(){return this.a.$3(this.b.a,new A.M(this.c-10,9,2.4),B.a7o)},
$S:0}
A.fjd.prototype={
$0(){return this.a.$3(this.b.a,new A.M(this.c-8,9,2.4),B.a7o)},
$S:0}
A.fje.prototype={
$0(){return this.a.$3(this.b.a,new A.M(this.c+8,9,2.4),B.a7o)},
$S:0}
A.fjj.prototype={
$4(d,e,f,g){var w,v,u,t,s=this
if(D.d.be(s.a,new A.fjk(d))<0||!s.b.e.t(0,d))return
w=s.b.f.h(0,d)
v=(w==null?0:w)>=1
w=s.c
u=9260+g
w.b=u
t=v?e:e.ae(0,f.aK(0,1.7))
w.e9(t.aC(0,f.aK(0,0.6)),t.ae(0,f.aK(0,0.6)),1.12,B.p8,0.35,8)
w.yN(t.aC(0,f.aK(0,0.62)),t.aC(0,f.aK(0,0.5)),1.2,0.5,B.V9,0.2,8)
w=v?"Tight.":"Loose. Tap it with the wrench to tighten it."
s.d.n(0,u,new A.db("Slip nut",w,e,10))},
$S:z+41}
A.fjk.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.fz8.prototype={
$1(d){var w,v=this
A:{if("vhot"===d||"hhot"===d){w=new A.M(v.a-8,9,2)
break A}if("vcold"===d||"hcold"===d){w=new A.M(v.a+8,9,2)
break A}if("tvalve"===d||"those"===d){w=new A.M(v.b-10,9,2)
break A}if("bolts"===d){w=new A.M(v.b,2,17)
break A}if("faucet"===d){w=new A.M(v.a,30,8)
break A}if("tail"===d){w=new A.M(v.a,22,8)
break A}if("trap"===d){w=new A.M(v.a,24.7,8)
break A}w=new A.M(v.a+8.9,23.6,8)
break A}return w},
$S:z+42}
A.fz7.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.ed7.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.ed8.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ed6(w))},
$S:0}
A.ed6.prototype={
$0(){return this.a.z=null},
$S:0}
A.ed0.prototype={
$0(){return this.a.y=0},
$S:0}
A.ed9.prototype={
$1(d){return d.a===this.a},
$S:z+1}
A.ecT.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.ecU.prototype={
$0(){var w=this.a
w.ace()
w.y=this.b},
$S:0}
A.ecV.prototype={
$1(d){return this.a.c1K()},
$S:8}
A.ed_.prototype={
$1(d){var w,v=null,u=this.a,t=u.e
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.b.toLowerCase()+" is finished and nothing leaks.\n\nMistakes: "+t.w+"\n\nThe next job is different.",v,v,v,v,v,v,B.a6o,v,v,v)
return C.eh(C.a([C.bK(!1,B.aPf,v,v,!0,v,v,new A.ecY(d),v,v),C.bJ(B.fc7,new A.ecZ(u,d),v)],x.p),v,v,E.mL,t,v,v,v,v,B.fdH,v)},
$S:19}
A.ecY.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
A.ecZ.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aWn()},
$S:0}
A.ed5.prototype={
$0(){var w,v,u=this.a
u.d=D.o.F(Date.now(),1e5)
w=u.gCc(0)
v=u.e
v===$&&C.c()
u.e=A.fMM(v.b,w,null)
u.x=""
u.as=!1
u.z=null
u.y=0
u.ace()},
$S:0}
A.ecX.prototype={
$0(){var w=this.a
return w.m(new A.ecW(w,this.b,this.c))},
$S:0}
A.ecW.prototype={
$0(){var w=this.a
w.x=this.b?"":this.c
w.ace()},
$S:0}
A.eda.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.e.t(0,d.a)},
$S:z+1}
A.ede.prototype={
$0(){return this.a.bXa(this.b)},
$S:0}
A.edc.prototype={
$1(d){return d<=5},
$S:32}
A.edb.prototype={
$1(d){var w=this.a,v=w.e
v===$&&C.c()
return A.hZV(v,w.w.gB6()/1000)},
$S:z+6}
A.edd.prototype={
$0(){return this.b.crb(this.a.a)},
$S:0}
A.ed4.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.e
n===$&&C.c()
w=x.p
n=C.a([B.foQ,D.au,C.d("Mistakes "+n.w,p,p,p,p,p,p,B.Il,p,p,p),D.S],w)
v=o.e.c
v===$&&C.c()
v=v.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
r=D.c.j(0.05)
q=new C.aV(12,12)
n.push(C.p(p,new C.x((o.e.e.t(0,s.a)?"\u2705":"\ud83d\udd27")+" "+s.c,p,B.ePt,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(r,p,p,new C.bs(q,q,q,q),p,p,D.n),p,p,p,D.eO,D.bR,p,p,p))}n.push(D.ao)
n.push(B.f4a)
n.push(D.P)
n.push(C.A(C.a([B.btg,C.aud(p,p,p,p,!1,D.y,p,p,p,p,p,p,new A.ed2(o,d),p,p,p,p,p,p,p,p,o.e.b)],w),D.m,p,D.e,D.j,0,p,p))
n.push(C.bJ(B.aPh,new A.ed3(o,d),p))
return C.bo(!0,C.cB(n,p,D.bY,p,p,D.ah,!0),!0,!1,D.ag,!0,!0)},
$S:29}
A.ed2.prototype={
$1(d){var w=this.a
w.m(new A.ed1(w,d))
C.a5(this.b,!1).N(null)},
$S:9}
A.ed1.prototype={
$0(){var w=this.a,v=w.e
v===$&&C.c()
v.b=this.b
w.ace()},
$S:0}
A.ed3.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aWn()},
$S:0}
A.fHn.prototype={
$1(d){return d.a===this.a},
$S:z+15}
A.ck2.prototype={
$1(d){return d.b==="switch"},
$S:z+3}
A.ck9.prototype={
$1(d){return!this.a.y.t(0,d)},
$S:32}
A.cka.prototype={
$1(d){var w=this.a
return w.x.ag(0,d)&&w.z.t(0,d)},
$S:32}
A.ckb.prototype={
$1(d){var w=$.Ga()[this.b],v=!1
if(w>=d)if(w<=d+48){w=this.a.Q.h(0,d)
w=(w==null?null:w.a)===!0}else w=v
else w=v
return w},
$S:32}
A.ckc.prototype={
$1(d){return this.a.Q.h(0,d).c.t(0,this.b)},
$S:32}
A.cke.prototype={
$1(d){var w,v=J.e0(6,x.S)
for(w=0;w<6;++w)v[w]=w
return D.d.de(v,new A.ckd(this.a,d))},
$S:32}
A.ckd.prototype={
$1(d){return this.a.c.t(0,this.b*10+d)},
$S:32}
A.ck1.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.a)===!0},
$S:32}
A.ck_.prototype={
$1(d){return!A.kX(d).c},
$S:32}
A.ck0.prototype={
$1(d){var w=this.a.anH(A.kX(d).d.a)
return(w==null?null:w.b.t(0,d))===!0},
$S:32}
A.ck7.prototype={
$1(d){return d.c},
$S:z+5}
A.ck8.prototype={
$1(d){return d.d},
$S:z+5}
A.ck3.prototype={
$1(d){return d.d},
$S:z+5}
A.ck4.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.e)===!0},
$S:32}
A.ck5.prototype={
$1(d){return d.a===this.a},
$S:z+9}
A.ckf.prototype={
$2(d,e){return e===this.a},
$S:451}
A.ck6.prototype={
$1(d){return d.c===this.a},
$S:z+3}
A.ehu.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.ehv.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eht(w))},
$S:0}
A.eht.prototype={
$0(){return this.a.ax=null},
$S:0}
A.egJ.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.egK.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.egI(w))},
$S:11}
A.egI.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.egL.prototype={
$1(d){return this.a.bKU()},
$S:8}
A.egM.prototype={
$1(d){return this.a.c1P()},
$S:8}
A.egU.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.egN.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.ehb.prototype={
$0(){var w=this.a
w.Q=this.b
w.z=w.at=""
w.ch=!1},
$S:0}
A.egV.prototype={
$0(){var w=this.a
w.Q=-1
w.at=""},
$S:0}
A.ehq.prototype={
$0(){return this.a.as=0},
$S:0}
A.ehr.prototype={
$0(){return this.a.z=""},
$S:0}
A.ehs.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.eho.prototype={
$0(){return this.a.z=""},
$S:0}
A.ehp.prototype={
$0(){return this.a.as=2000+this.b},
$S:0}
A.ehn.prototype={
$0(){return this.a.z=""},
$S:0}
A.ehj.prototype={
$1(d){return d.a===this.a},
$S:z+9}
A.ehk.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.ehl.prototype={
$0(){var w=this.a
w.at=""
w.as=0},
$S:0}
A.ehm.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.ehw.prototype={
$0(){var w=this.b,v=D.d.t(B.GE,w.z),u=this.a.a
if(v)w.aZE(u)
else w.aZG(u)},
$S:0}
A.egT.prototype={
$1(d){var w=null
return C.eh(C.a([C.bK(!1,B.ffD,w,w,!0,w,w,new A.egR(d),w,w),C.bJ(D.IC,new A.egS(this.a,d),w)],x.p),w,w,E.mL,B.f5i,w,w,w,w,B.fcv,w)},
$S:19}
A.egR.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
A.egS.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aus(!0)},
$S:0}
A.egQ.prototype={
$1(d){var w,v=null,u=this.a,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.toLowerCase()+" is built, wired, painted and tested.\n\nMistakes: "+t.f+"\nShocks: "+t.r+"\nLives left: "+t.e+"\n\nEvery job is a little different. Ready for another one?",v,v,v,v,v,v,B.a6o,v,v,v)
return C.eh(C.a([C.bK(!1,B.fpE,v,v,!0,v,v,new A.egO(d),v,v),C.bJ(B.fco,new A.egP(u,d),v)],x.p),v,v,E.mL,t,v,v,v,v,B.fjY,v)},
$S:19}
A.egO.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
A.egP.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aVi()},
$S:0}
A.egW.prototype={
$0(){var w,v,u
if(!this.b)this.a.e=D.o.F(Date.now(),1e5)
w=this.a
v=w.gCc(0)
u=w.d
u===$&&C.c()
w.d=A.fNb(null,null,u.b,v)
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
A.eh9.prototype={
$1(d){return new C.J(d,new A.eha(),d.$ti.k("J<aj.E,n>")).aH(0,", ")},
$S:1791}
A.eha.prototype={
$1(d){return A.kX(d).b},
$S:73}
A.egX.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.x.ag(0,d.a)},
$S:z+3}
A.egY.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.z.t(0,d.a)},
$S:z+3}
A.egZ.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.y.t(0,d)},
$S:32}
A.eh1.prototype={
$1(d){return!d.a},
$S:z+5}
A.eh2.prototype={
$1(d){return d.b<3},
$S:z+5}
A.eh3.prototype={
$1(d){return!d.c},
$S:z+5}
A.eh4.prototype={
$1(d){return!d.d},
$S:z+5}
A.eh5.prototype={
$1(d){return!d.c},
$S:z+5}
A.eh6.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.a
return w!==d.b},
$S:z+3}
A.eh7.prototype={
$1(d){return d.a},
$S:z+47}
A.eh8.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.b.c
return(w==null?0:w)<2},
$S:z+3}
A.eh_.prototype={
$1(d){var w=d.b
if(w==="outlet"||w==="gfci"){w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=(w==null?null:w.c)!==!0}else w=!1
return w},
$S:z+3}
A.eh0.prototype={
$1(d){return d.b==="fan"},
$S:z+3}
A.ehN.prototype={
$0(){return this.a.caq(this.b)},
$S:0}
A.ehP.prototype={
$0(){var w=this.a
if(w.Q>=0)w.av0()
else{w.m(new A.ehB(w))
w.b0T()}},
$S:0}
A.ehB.prototype={
$0(){return this.a.as=0},
$S:0}
A.ehO.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.i_9(v,w.w.gB6()/1000,w.x)},
$S:z+6}
A.ehE.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kn(v.aGm())},
$S:0}
A.ehF.prototype={
$0(){var w=this.a
return w.m(new A.ehD(w,this.b))},
$S:0}
A.ehD.prototype={
$0(){var w,v=this.b.b
v.f=!v.f
v=this.a
w=v.d
w===$&&C.c()
v.r=A.Cj(w,new A.vO(v.z,v.Q,!1))},
$S:0}
A.ehG.prototype={
$0(){var w=this.a
return w.m(new A.ehC(w,this.b))},
$S:0}
A.ehC.prototype={
$0(){var w,v=this.b.b
v.e=!v.e
v=this.a
w=v.d
w===$&&C.c()
v.r=A.Cj(w,new A.vO(v.z,v.Q,!1))},
$S:0}
A.ehQ.prototype={
$0(){var w=this.a
return w.m(new A.ehA(w,this.b))},
$S:0}
A.ehA.prototype={
$0(){var w,v=this.a
v.y=this.b
v.z=""
w=v.d
w===$&&C.c()
v.r=A.Cj(w,new A.vO("",v.Q,!1))},
$S:0}
A.ehR.prototype={
$0(){var w=this.a
return w.m(new A.ehz(w))},
$S:0}
A.ehz.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.aCQ()
w.y=2
w.z=""
w.r=A.Cj(w.d,new A.vO("",w.Q,!1))
w.zX("The boxes, the cable and the walls are done. Now the wiring: pick an Outlet or a Switch from the tray, then tap its box on the wall.",!0)},
$S:0}
A.ehS.prototype={
$0(){var w=this.a
return w.m(new A.ehy(w,this.b))},
$S:0}
A.ehy.prototype={
$0(){var w,v=this.a,u=this.b.a,t=v.z===u?"":u
v.z=t
v.as=0
w=v.d
w===$&&C.c()
v.r=A.Cj(w,new A.vO(t,v.Q,!1))
if(v.z.length!==0)v.cl0(u)},
$S:0}
A.ehT.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kn(v.cKa())},
$S:0}
A.ehU.prototype={
$1(d){return!this.a.b.b.j0(0,d.a)},
$S:z+11}
A.ehV.prototype={
$0(){var w=this.a
return w.m(new A.ehx(w,this.b,this.c))},
$S:0}
A.ehx.prototype={
$0(){var w,v=this,u=v.c,t=u.a
if(v.b.b.b.j0(0,t)){v.a.av1("That wire is already fastened. Tap the wire in the 3D view to take it off.")
return}w=v.a
if(w.at===t)t=""
w.at=t
if(t.length!==0)w.zX(u.b+": now tap the screw it belongs on, or press the matching button below.",!0)},
$S:0}
A.ehH.prototype={
$1(d){return!this.a.b.b.ag(0,d.a)},
$S:z+9}
A.ehI.prototype={
$0(){var w=this.a
return w.aZD(w.Q,this.b.a)},
$S:0}
A.ehJ.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kn(v.bez(w.Q))},
$S:0}
A.ehK.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kn(v.cOj(w.Q))},
$S:0}
A.ehL.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kn(v.b9u(w.Q))},
$S:0}
A.ehM.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.cPj(v.Q)
v.kn(w)
if(w.a)v.av0()},
$S:0}
A.ehi.prototype={
$1(d){return new C.e5(new A.ehh(this.a),null)},
$S:20}
A.ehh.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=C.aI(d,l,x.w).w,j=this.a,i=j.d
i===$&&C.c()
w=i.c
w===$&&C.c()
v=x.p
i=C.a([C.d("Job: "+w,l,l,l,l,l,l,D.dB,l,l,l),D.au,C.d("Mistakes "+i.f+" \xb7 Shocks "+i.r+" \xb7 Lives "+i.e,l,l,l,l,l,l,B.Il,l,l,l),D.S,B.fga,D.ao],v)
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
i.push(C.A(C.a([B.buf,C.aud(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.ehe(j,e),l,l,l,l,l,l,l,l,j.d.b)],v),D.m,l,D.e,D.j,0,l,l))
i.push(D.ao)
i.push(C.A(C.a([C.D(C.dW(B.f6p,new A.ehf(j,d),l),1),D.ab,C.D(C.bJ(B.aPh,new A.ehg(j,d),l),1)],v),D.m,l,D.e,D.j,0,l,l))
return C.bo(!0,new C.cU(new C.aY(0,1/0,0,k.a.b*0.8),C.cB(i,l,D.bY,l,l,D.ah,!0),l),!0,!1,D.ag,!0,!0)},
$S:96}
A.ehe.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
v.b=d
for(v=v.at,v=new C.dt(v,v.r,v.e);v.C();)v.d.b.r=d
this.b.$1(new A.ehc())
w.m(new A.ehd())},
$S:9}
A.ehc.prototype={
$0(){},
$S:0}
A.ehd.prototype={
$0(){},
$S:0}
A.ehf.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aus(!0)},
$S:0}
A.ehg.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aVi()},
$S:0}
A.fd5.prototype={
$1(d){var w=this.a,v=d.a
return w>v[0]&&w<v[1]},
$S:524}
A.fd6.prototype={
$1(d){var w=this.a,v=d.a
return w>v[2]&&w<v[3]},
$S:524}
A.fjr.prototype={
$1(d){return 5000+this.a.a*100+d},
$S:78}
A.fjs.prototype={
$1(d){return 3000+this.a.a},
$S:78}
A.fjt.prototype={
$1(d){return 2000+this.a.a},
$S:78}
A.fjv.prototype={
$5$col$round(d,e,f,g,h){var w=this.a
w.b=d
w.d=0.5
w.e=0.9
if(h)w.pe(e.aC(0,B.w4),e.ae(0,B.w4),f.a/2,g,14)
else w.cH(e,f,g)
w.e=0
w.d=1},
$3(d,e,f){return this.$5$col$round(d,e,f,D.b2,!1)},
$4$round(d,e,f,g){return this.$5$col$round(d,e,f,D.b2,g)},
$4$col(d,e,f,g){return this.$5$col$round(d,e,f,g,!1)},
$S:z+48}
A.fju.prototype={
$0(){var w,v=this.a
if(v.c)w="A place in the ceiling for a "+(v.e==="fan"?"fan (needs a fan-rated box)":"light")+"."
else w="A place on the wall at "+(v.e==="switch"?"switch height, about 48 inches from the floor":"outlet height, about 16 inches from the floor")+"."
return new A.db(v.b,w,A.a1x(v,B.a7l),26)},
$S:z+49}
A.fzs.prototype={
$1(d){return d.e==="fan"},
$S:z+15}
A.fzt.prototype={
$1(d){return d.b==="light"},
$S:z+3}
A.cnm.prototype={
$1(d){return d.a===this.a&&!d.c},
$S:z+7}
A.cni.prototype={
$1(d){return d.a===B.YE},
$S:z+7}
A.cnk.prototype={
$1(d){return d.c},
$S:z+7}
A.cnl.prototype={
$1(d){return d.c},
$S:z+7}
A.cnj.prototype={
$1(d){return B.vx.h(0,d.a).e===this.a&&!d.c},
$S:z+7}
A.ejh.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.eji.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ejg(w))},
$S:0}
A.ejg.prototype={
$0(){return this.a.z=null},
$S:0}
A.ej6.prototype={
$0(){return this.a.y=0},
$S:0}
A.ejb.prototype={
$0(){return this.a.as=!0},
$S:0}
A.ejc.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eja(w))},
$S:11}
A.eja.prototype={
$0(){return this.a.as=!1},
$S:0}
A.ejd.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
w.r=A.aeW(v.d)
w.y=this.b},
$S:0}
A.eje.prototype={
$1(d){return this.a.cax()},
$S:8}
A.ejf.prototype={
$1(d){return this.a.c1U()},
$S:8}
A.ej9.prototype={
$1(d){var w=null
return C.eh(C.a([C.bJ(B.fdC,new A.ej8(this.a,d),w)],x.p),w,w,E.mL,B.fcL,w,w,w,w,B.fiK,w)},
$S:19}
A.ej8.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.auq()},
$S:0}
A.ej5.prototype={
$1(d){var w=null,v=this.a,u=v.d
u===$&&C.c()
u=C.d("Every problem on the customer's list is fixed.\n\nMistakes: "+u.f+"\nShocks: "+u.r+"\nLives left: "+u.e+"\n\nThe next call will have different problems.",w,w,w,w,w,w,B.a6o,w,w,w)
return C.eh(C.a([C.bK(!1,B.aPf,w,w,!0,w,w,new A.ej3(d),w,w),C.bJ(B.feQ,new A.ej4(v,d),w)],x.p),w,w,E.mL,u,w,w,w,w,B.fl_,w)},
$S:19}
A.ej3.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
A.ej4.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.auq()},
$S:0}
A.ej7.prototype={
$0(){var w,v,u=this.a
u.e=D.o.F(Date.now(),1e5)
w=u.gCc(0)
v=u.d
v===$&&C.c()
w=A.h3p(v.b,w)
u.d=w
u.r=A.aeW(w.d)
u.at=!1
u.z=null
u.y=0},
$S:0}
A.eju.prototype={
$0(){return this.a.cuF(this.b)},
$S:0}
A.ejq.prototype={
$1(d){return d<=5},
$S:32}
A.ejp.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.hbG(v.d,w.w.gB6()/1000)},
$S:z+6}
A.ejr.prototype={
$1(d){return!d.c},
$S:z+7}
A.ejs.prototype={
$1(d){return B.vx.h(0,d.a).a},
$S:z+33}
A.ejt.prototype={
$0(){var w=this.a
return w.m(new A.ejo(w,this.b))},
$S:0}
A.ejo.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.ejn.prototype={
$1(d){return new C.e5(new A.ejm(this.a),null)},
$S:20}
A.ejm.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fbe,D.au,C.d("Mistakes "+j.f+" \xb7 Shocks "+j.r+" \xb7 Lives "+j.e,l,l,l,l,l,l,B.Il,l,l,l),D.S],w)
v=k.d.c
v===$&&C.c()
u=v.length
t=0
for(;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aV(14,14)
p=new C.aA(s.c?D.bc.j(0.6):D.bF,1,D.r,-1)
o=s.c?"\u2705":"\ud83d\udd27"
n=B.vx.h(0,s.a).a
m=s.c?D.ay:D.c
j.push(C.p(l,new C.x(o+" "+n,l,new C.F(!0,m,l,l,l,l,13.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(r,l,new C.bP(p,p,p,p),new C.bs(q,q,q,q),l,l,D.n),l,l,l,D.cG,D.bl,l,l,l))}j.push(D.ao)
j.push(B.fgk)
j.push(D.P)
j.push(C.A(C.a([B.btf,C.aud(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.ejk(k,e),l,l,l,l,l,l,l,l,k.d.b)],w),D.m,l,D.e,D.j,0,l,l))
j.push(C.bJ(B.fj9,new A.ejl(k,d),l))
return C.bo(!0,C.cB(j,l,D.bY,l,l,D.ah,!0),!0,!1,D.ag,!0,!0)},
$S:96}
A.ejk.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w.b=d
this.b.$1(new A.ejj())},
$S:9}
A.ejj.prototype={
$0(){},
$S:0}
A.ejl.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.auq()},
$S:0};(function aliases(){var w=A.aLi.prototype
w.btD=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_0i
var t
w(t=A.aC7.prototype,"gaWh","mB",0)
v(t,"gc1x","acc",2)
v(t,"gc1y","c1z",2)
w(t,"gcak","Pn",17)
w(t,"gc9K","ZB",17)
w(t,"gc1C","c1D",0)
w(t,"gci8","ci9",0)
u(t,"gc1A","c1B",0)
w(t=A.axY.prototype,"gc1H","xh",0)
w(t,"gI9","nN",0)
v(t,"gIa","Ib",2)
w(t,"gcff","cfg",0)
w(t,"gcu6","cu7",0)
w(t=A.aDV.prototype,"gI9","nN",0)
v(t,"gIa","Ib",2)
w(t,"gc1I","c1J",0)
w(t=A.ayd.prototype,"gI9","nN",0)
v(t,"gIa","Ib",2)
u(t,"gc1F","c1G",0)
w(t=A.az6.prototype,"gI9","nN",0)
v(t,"gIa","Ib",2)
w(t=A.aCC.prototype,"gc1L","aWm",0)
v(t,"gc1M","c1N",2)
v(A.b3b.prototype,"ganI","blg",44)
w(t=A.aCJ.prototype,"gbMn","aQR",0)
w(t,"gbz0","bz1",0)
w(t,"gc1Q","av0",0)
v(t,"gc1S","c1T",2)
w(t=A.aCN.prototype,"gc1V","aWq",0)
v(t,"gc1W","c1X",2)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(C.aC,[A.M,A.tc,A.db,A.vp,A.zj,A.nq,A.bOA,A.OO,A.md,A.avw,A.zH,A.a3h,A.BL,A.aTe,A.q8,A.Df,A.u7,A.ps,A.a3K,A.bOC,A.bOI,A.Jc,A.jw,A.LR,A.cfg,A.Ek,A.n7,A.VQ,A.cf6,A.yo,A.pF,A.Wu,A.aty,A.aRV,A.eC,A.b3b,A.kT,A.vO,A.tZ,A.Lj,A.cnh])
v(C.hS,[A.bUs,A.bUt,A.bUr,A.bUu,A.bUv,A.fHx,A.fHv,A.fHw,A.fHu,A.fHo,A.ckR,A.ckS,A.ePy,A.ePx,A.ePu,A.ePv,A.ePw,A.fks,A.fHM,A.fky,A.fkz,A.fkw,A.fkx,A.fku,A.fkv,A.fiD,A.fiE,A.f6r,A.fis,A.bOD,A.bOH,A.bOG,A.bOF,A.bOE,A.e_y,A.e_w,A.e_x,A.e_6,A.dZV,A.dZU,A.e_l,A.e_k,A.e_j,A.e_a,A.dlf,A.fiG,A.fiH,A.fiI,A.fiQ,A.fiM,A.fiP,A.fiO,A.dIW,A.fzX,A.fzW,A.d11,A.d13,A.d1j,A.eJb,A.eJj,A.eJk,A.d3Z,A.d48,A.d49,A.d4b,A.db2,A.dbd,A.dbc,A.dbf,A.fjq,A.fjp,A.fjo,A.fiF,A.fkP,A.cfa,A.cfb,A.cf7,A.cfc,A.cfd,A.cfe,A.cff,A.cf8,A.cf9,A.fjn,A.fjl,A.fjf,A.fji,A.fjg,A.fjh,A.fjm,A.fjj,A.fjk,A.fz8,A.fz7,A.ed9,A.ecV,A.ed_,A.eda,A.edc,A.edb,A.ed4,A.ed2,A.fHn,A.ck2,A.ck9,A.cka,A.ckb,A.ckc,A.cke,A.ckd,A.ck1,A.ck_,A.ck0,A.ck7,A.ck8,A.ck3,A.ck4,A.ck5,A.ck6,A.egL,A.egM,A.ehj,A.egT,A.egQ,A.eh9,A.eha,A.egX,A.egY,A.egZ,A.eh1,A.eh2,A.eh3,A.eh4,A.eh5,A.eh6,A.eh7,A.eh8,A.eh_,A.eh0,A.ehO,A.ehU,A.ehH,A.ehi,A.ehe,A.fd5,A.fd6,A.fjr,A.fjs,A.fjt,A.fjv,A.fzs,A.fzt,A.cnm,A.cni,A.cnk,A.cnl,A.cnj,A.eje,A.ejf,A.ej9,A.ej5,A.ejq,A.ejp,A.ejr,A.ejs,A.ejn,A.ejk])
v(C.kc,[A.bUq,A.ckQ,A.flw,A.flx,A.fly,A.flz,A.flA,A.f56,A.fiL,A.fiJ,A.fiK,A.fiN,A.d14,A.eJg,A.d3Y,A.fkQ,A.ckf,A.ehh,A.ejm])
u(A.Ay,C.oA)
v(C.mD,[A.b3o,A.bfP])
v(C.ag,[A.at5,A.aoI,A.Mu,A.ab5,A.aDU,A.ayc,A.az5,A.UQ,A.UT,A.apE])
v(C.ah,[A.aLi,A.aC7,A.bhm,A.axY,A.aDV,A.ayd,A.az6,A.aCC,A.aCJ,A.aCN])
u(A.bos,A.aLi)
v(C.j2,[A.fit,A.e_e,A.e_f,A.e_d,A.e_g,A.dZS,A.dZX,A.dZY,A.dZZ,A.e__,A.e_0,A.dZW,A.e_1,A.e_4,A.e_3,A.e_5,A.e_2,A.dZT,A.e_h,A.e_b,A.e_c,A.dZD,A.dZI,A.dZJ,A.dZK,A.dZL,A.dZM,A.dZN,A.dZH,A.dZO,A.dZG,A.dZP,A.dZF,A.dZQ,A.dZE,A.dZR,A.e_n,A.e_m,A.e_o,A.e_p,A.e_q,A.e_r,A.e_s,A.e_t,A.e_u,A.e_v,A.e_i,A.e_8,A.e_9,A.e_7,A.fjJ,A.dIZ,A.dJ_,A.dIY,A.dJ0,A.dIX,A.dJ2,A.dJ3,A.dJ4,A.dJ5,A.dJ6,A.dJ7,A.dJ8,A.dJ9,A.dJ1,A.cov,A.cow,A.bQN,A.d19,A.d1a,A.d18,A.d12,A.d15,A.d16,A.d17,A.d1b,A.d1t,A.d1k,A.d1i,A.d1l,A.d1h,A.d1m,A.d1n,A.d1o,A.d1g,A.d1p,A.d1f,A.d1q,A.d1e,A.d1r,A.d1d,A.d1s,A.d1c,A.eJe,A.eJf,A.eJd,A.eJ7,A.eJ8,A.eJ9,A.eJa,A.eJc,A.eJn,A.eJl,A.eJi,A.eJm,A.eJh,A.d43,A.d44,A.d42,A.d3W,A.d4_,A.d40,A.d41,A.d3X,A.d4e,A.d4a,A.d47,A.d4c,A.d46,A.d4d,A.d45,A.db7,A.db8,A.db6,A.db1,A.db3,A.db4,A.db5,A.dbg,A.dbb,A.dbe,A.dba,A.db9,A.c4s,A.fjc,A.fjd,A.fje,A.ed7,A.ed8,A.ed6,A.ed0,A.ecT,A.ecU,A.ecY,A.ecZ,A.ed5,A.ecX,A.ecW,A.ede,A.edd,A.ed1,A.ed3,A.ehu,A.ehv,A.eht,A.egJ,A.egK,A.egI,A.egU,A.egN,A.ehb,A.egV,A.ehq,A.ehr,A.ehs,A.eho,A.ehp,A.ehn,A.ehk,A.ehl,A.ehm,A.ehw,A.egR,A.egS,A.egO,A.egP,A.egW,A.ehN,A.ehP,A.ehB,A.ehE,A.ehF,A.ehD,A.ehG,A.ehC,A.ehQ,A.ehA,A.ehR,A.ehz,A.ehS,A.ehy,A.ehT,A.ehV,A.ehx,A.ehI,A.ehJ,A.ehK,A.ehL,A.ehM,A.ehc,A.ehd,A.ehf,A.ehg,A.fju,A.ejh,A.eji,A.ejg,A.ej6,A.ejb,A.ejc,A.eja,A.ejd,A.ej8,A.ej3,A.ej4,A.ej7,A.eju,A.ejt,A.ejo,A.ejj,A.ejl])
v(C.au,[A.bgq,A.b4G,A.AT,A.a5D])
u(A.qP,C.m0)
w(A.aLi,C.c8)})()
C.jR(b.typeUniverse,JSON.parse('{"at5":{"ag":[],"r":[]},"Ay":{"aB":[]},"b3o":{"aB":[]},"bos":{"ah":["at5"]},"aoI":{"ag":[],"r":[]},"aC7":{"ah":["aoI"]},"bgq":{"au":[],"r":[]},"bfP":{"aB":[]},"ab5":{"ag":[],"r":[]},"aDU":{"ag":[],"r":[]},"ayc":{"ag":[],"r":[]},"az5":{"ag":[],"r":[]},"Mu":{"ag":[],"r":[]},"bhm":{"ah":["Mu"]},"b4G":{"au":[],"r":[]},"AT":{"au":[],"r":[]},"axY":{"ah":["ab5"]},"aDV":{"ah":["aDU"]},"ayd":{"ah":["ayc"]},"az6":{"ah":["az5"]},"a5D":{"au":[],"r":[]},"UQ":{"ag":[],"r":[]},"aCC":{"ah":["UQ"]},"UT":{"ag":[],"r":[]},"aCJ":{"ah":["UT"]},"apE":{"ag":[],"r":[]},"aCN":{"ah":["apE"]}}'))
var y={g:"A shut-off valve goes on the pipe that comes out of the wall.",x:"Fasten the bare copper ground to the GREEN screw.",s:"Pick a paint colour above to change this wall.",E:"Switch the power on and flip the wall switch.",j:"The bare copper ground wire only goes on the GREEN screw.",u:"The gold screws are BRASS. They are for the HOT wire (black).",o:"The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).",r:"Turn the breaker OFF and test that the wires are dead."}
var x=(function rtii(){var w=C.ax
return{l:w("bp<n,n>"),M:w("eU<n>"),W:w("aRV"),F:w("qP"),O:w("O<w>"),c:w("O<Lj>"),_:w("O<aTe>"),D:w("O<ps>"),B:w("O<a3K>"),r:w("O<md>"),E:w("O<vp>"),Z:w("O<jw>"),A:w("O<pF>"),v:w("O<n7>"),g:w("O<hm>"),z:w("O<tc>"),I:w("O<+(a7x,G)>"),L:w("O<+(n,n)>"),f:w("O<+(P,P)>"),J:w("O<+(G,n)>"),V:w("O<+(P,P,P,P)>"),X:w("O<Wu>"),s:w("O<n>"),o:w("O<M>"),p:w("O<r>"),d:w("O<zH>"),G:w("O<OO>"),b:w("O<kT>"),u:w("O<R>"),n:w("O<P>"),t:w("O<G>"),U:w("O<aB?>"),w:w("iy"),P:w("cn"),q:w("db"),C:w("Ig"),e:w("tc"),j:w("aty"),N:w("n"),x:w("M"),a:w("a2<Ek>"),K:w("a2<n>"),Y:w("a2<G>"),y:w("R"),i:w("P"),S:w("G"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.aSP=new A.eC(!0,"The water is on and nothing leaks. Perfect job!",!1,"")
B.aSQ=new A.eC(!0,"Primer and paint rolled on.",!1,"")
B.aSR=new A.eC(!1,"This call is over. Start a new one.",!1,"")
B.aSS=new A.eC(!1,"That is not a place for a sheet.",!1,"")
B.aST=new A.eC(!0,"Sanded smooth. Wear a mask: the dust is bad to breathe.",!1,"")
B.a8k=new A.eC(!1,"There is no device here.",!1,"")
B.aSU=new A.eC(!0,"You look closely. Everything looks fine here.",!1,"")
B.aSV=new A.eC(!1,"ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.",!0,"shock")
B.aSW=new A.eC(!0,"Paper tape pressed into the seam.",!1,"")
B.aSX=new A.eC(!0,"Unplugged.",!1,"")
B.aSY=new A.eC(!0,"Breaker OFF. It is safe to work on the wires.",!1,"")
B.aSZ=new A.eC(!1,"ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.",!0,"shock")
B.aT_=new A.eC(!1,"There is nothing there.",!1,"")
B.aT0=new A.eC(!1,"The outlet is burnt. Nothing works. Pull it out and put in a new one.",!0,"")
B.aT1=new A.eC(!0,"The water is on and nothing leaks yet, but the job is not finished.",!1,"")
B.aT2=new A.eC(!0,"Sheet hung. Now screw it to the studs.",!1,"")
B.aT3=new A.eC(!0,"Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.",!1,"")
B.aT4=new A.eC(!0,"Plugged in. Nothing happens because the breaker is off. Turn it on to test.",!1,"")
B.aT5=new A.eC(!0,"You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.",!1,"")
B.aT6=new A.eC(!0,"Click.",!1,"")
B.aT7=new A.eC(!0,"The wires are folded back and the device is in the box. Now put the cover on.",!1,"")
B.aT8=new A.eC(!0,"Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)",!1,"")
B.aT9=new A.eC(!1,"Nothing is wet.",!1,"")
B.aTa=new A.eC(!0,"Power is on.",!1,"")
B.aTb=new A.eC(!0,"Water OFF at the main valve. You can cut into the pipes safely now.",!1,"")
B.aTc=new A.eC(!0,"Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.",!1,"")
B.aTd=new A.eC(!0,"Device pulled out of the box.",!1,"")
B.aTe=new A.eC(!0,"Screw set just below the paper, not through it.",!1,"")
B.aTf=new A.eC(!1,"ZAP! You touched a live wire. In Learn mode you are not hurt, but in real life this can kill. Switch the breaker OFF and test the wires first.",!0,"shock")
B.aTg=new A.eC(!0,"Cover on. Now you can turn the breaker on and test.",!1,"")
B.U1=new A.eC(!1,"",!1,"")
B.aTh=new A.eC(!0,"Device taken out. You can put it somewhere else, or put in a new one.",!1,"")
B.aTi=new A.eC(!0,"Breaker back ON.",!1,"")
B.aTj=new A.eC(!1,"That is not a stud.",!1,"")
B.aTk=new A.eC(!0,"Off.",!1,"")
B.aTl=new A.eC(!1,"Nothing to flip yet.",!1,"")
B.aTm=new A.eC(!0,"Wire taken off.",!1,"")
B.aTn=new A.eC(!0,"The mud is dry.",!1,"")
B.aTo=new A.eC(!0,"Breaker reset.",!1,"")
B.aTp=new A.eC(!0,"Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)",!1,"")
B.fkw=new C.x("Tap a piece of furniture, or add one:",null,N.Sr,null,null,null,null,null,null,null,null,null)
B.e1h=new C.C(D.nD,B.fkw,null)
B.aTw=new C.bI(D.a3,null,null,B.e1h,null)
B.Ki=new C.w(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,D.t)
B.aWq=new C.bP(D.Y,D.Y,V.uv,D.Y)
B.aYS=new C.o(B.Ki,null,B.aWq,null,null,null,D.n)
B.fl6=new C.x("\u2600\ufe0f Let it dry",null,K.CF,null,null,null,null,null,null,null,null,null)
B.b1U=new C.cq(D.A,null,null,B.fl6,null)
B.fkT=new C.x("\u23e9 Skip to the wiring",null,K.CF,null,null,null,null,null,null,null,null,null)
B.b21=new C.cq(D.A,null,null,B.fkT,null)
B.f9W=new C.x("\ud83c\udfd7\ufe0f",null,D.uh,null,null,null,null,null,null,null,null,null)
B.b2g=new C.cq(D.A,null,null,B.f9W,null)
B.b3W=new C.w(1,0.9294117647058824,0.9098039215686274,0.8627450980392157,D.t)
B.b46=new C.w(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,D.t)
B.JL=new C.w(1,0.5450980392156862,0.3686274509803922,0.20392156862745098,D.t)
B.b4g=new C.w(1,0.611764705882353,0.5568627450980392,0.4588235294117647,D.t)
B.aaC=new C.w(1,0.24705882352941178,0.5607843137254902,0.30980392156862746,D.t)
B.wz=new C.w(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,D.t)
B.b4N=new C.w(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,D.t)
B.b4O=new C.w(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,D.t)
B.b4V=new C.w(1,0.10588235294117647,0.4980392156862745,0.20392156862745098,D.t)
B.aaN=new C.w(1,0.7215686274509804,0.7450980392156863,0.7725490196078432,D.t)
B.DA=new C.w(1,0.5450980392156862,0.3686274509803922,0.23529411764705882,D.t)
B.aaP=new C.w(1,0.8509803921568627,0.8274509803921568,0.7725490196078432,D.t)
B.aaT=new C.w(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,D.t)
B.rI=new C.w(1,0.16862745098039217,0.17647058823529413,0.2,D.t)
B.b5q=new C.w(1,0.13333333333333333,0.13725490196078433,0.14901960784313725,D.t)
B.DC=new C.w(1,0.8980392156862745,0.7529411764705882,0.4823529411764706,D.t)
B.JV=new C.w(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,D.t)
B.V_=new C.w(1,0.5411764705882353,0.41568627450980394,0.2784313725490196,D.t)
B.b60=new C.w(1,0.2980392156862745,0.5450980392156862,0.2901960784313726,D.t)
B.rK=new C.w(1,0.788235294117647,0.6274509803921569,0.22745098039215686,D.t)
B.ab4=new C.w(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,D.t)
B.ab6=new C.w(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,D.t)
B.b6p=new C.w(1,0.47843137254901963,0.35294117647058826,0.22745098039215686,D.t)
B.kx=new C.w(1,0.788235294117647,0.807843137254902,0.8392156862745098,D.t)
B.V4=new C.w(1,0.4196078431372549,0.45098039215686275,0.5019607843137255,D.t)
B.abc=new C.w(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,D.t)
B.zS=new C.w(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,D.t)
B.b7h=new C.w(1,0.5490196078431373,0.5764705882352941,0.6078431372549019,D.t)
B.DL=new C.w(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,D.t)
B.V9=new C.w(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,D.t)
B.abo=new C.w(1,0.10588235294117647,0.11372549019607843,0.13333333333333333,D.t)
B.abr=new C.w(1,0.30980392156862746,0.6588235294117647,0.3764705882352941,D.t)
B.abs=new C.w(1,0.8509803921568627,0.803921568627451,0.7215686274509804,D.t)
B.K5=new C.w(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,D.t)
B.b7E=new C.w(1,0.8862745098039215,0.8745098039215686,0.8235294117647058,D.t)
B.b7V=new C.w(1,0.5411764705882353,0.4823529411764706,0.41568627450980394,D.t)
B.b7Z=new C.w(1,0.34901960784313724,0.3176470588235294,0.29411764705882354,D.t)
B.b85=new C.w(1,0.8117647058823529,0.792156862745098,0.7411764705882353,D.t)
B.Vh=new C.w(1,0.8117647058823529,0.8901960784313725,0.9176470588235294,D.t)
B.Vi=new C.w(1,0.3333333333333333,0.396078431372549,0.4823529411764706,D.t)
B.Vj=new C.w(1,0.5529411764705883,0.7843137254901961,1,D.t)
B.Vm=new C.w(1,1,0.9019607843137255,0.5019607843137255,D.t)
B.b8u=new C.w(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,D.t)
B.abM=new C.w(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,D.t)
B.b8M=new C.w(1,0.9686274509803922,0.9607843137254902,0.9333333333333333,D.t)
B.ns=new C.w(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,D.t)
B.b8V=new C.w(1,0.788235294117647,0.7176470588235294,0.6078431372549019,D.t)
B.Vp=new C.w(1,0.8901960784313725,0.6627450980392157,0.10980392156862745,D.t)
B.DS=new C.w(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,D.t)
B.b96=new C.w(1,0.22745098039215686,0.49019607843137253,0.26666666666666666,D.t)
B.uE=new C.w(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,D.t)
B.b9h=new C.w(1,0.3686274509803922,0.17647058823529413,0.13725490196078433,D.t)
B.DU=new C.w(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,D.t)
B.zZ=new C.w(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,D.t)
B.ac4=new C.w(1,0.9450980392156862,0.9568627450980393,0.9725490196078431,D.t)
B.b9G=new C.w(1,0.9019607843137255,0.9019607843137255,0.8784313725490196,D.t)
B.acb=new C.w(1,0.8941176470588236,0.9058823529411765,0.9176470588235294,D.t)
B.m0=new C.w(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,D.t)
B.acj=new C.w(1,1,0.35294117647058826,0.12156862745098039,D.t)
B.bar=new C.w(1,0.5411764705882353,0.29411764705882354,0.29411764705882354,D.t)
B.VC=new C.w(1,0.9098039215686274,0.8509803921568627,0.7372549019607844,D.t)
B.A3=new C.w(1,1,0.9450980392156862,0.6588235294117647,D.t)
B.baK=new C.w(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,D.t)
B.baM=new C.w(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,D.t)
B.baV=new C.w(1,0.47843137254901963,0.23137254901960785,0.1803921568627451,D.t)
B.bb1=new C.w(1,0.6078431372549019,0.6078431372549019,0.592156862745098,D.t)
B.A5=new C.w(1,0.9568627450980393,0.9450980392156862,0.9176470588235294,D.t)
B.rU=new C.w(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,D.t)
B.p8=new C.w(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,D.t)
B.acu=new C.w(1,0.788235294117647,0.8117647058823529,0.8392156862745098,D.t)
B.bbh=new C.w(1,0.9294117647058824,0.9215686274509803,0.8941176470588236,D.t)
B.VK=new C.w(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,D.t)
B.acx=new C.w(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,D.t)
B.bbt=new C.w(1,0.16862745098039217,0.2980392156862745,0.49411764705882355,D.t)
B.E3=new C.w(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,D.t)
B.acD=new C.w(1,0.3686274509803922,0.43137254901960786,0.5176470588235295,D.t)
B.bbW=new C.w(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,D.t)
B.acH=new C.w(1,0.23137254901960785,0.1843137254901961,0.14901960784313725,D.t)
B.acI=new C.w(1,0.8509803921568627,0.788235294117647,0.6588235294117647,D.t)
B.qt=new C.w(1,0.9686274509803922,0.9568627450980393,0.9254901960784314,D.t)
B.bc7=new C.w(1,0.13333333333333333,0.1450980392156863,0.16862745098039217,D.t)
B.VP=new C.w(1,0.4980392156862745,0.7215686274509804,1,D.t)
B.wK=new C.w(1,0.16470588235294117,0.1450980392156863,0.13725490196078433,D.t)
B.bce=new C.w(1,0.9450980392156862,0.9294117647058824,0.8784313725490196,D.t)
B.Kk=new C.w(1,0.796078431372549,0.8156862745098039,0.8392156862745098,D.t)
B.VS=new C.w(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,D.t)
B.bcA=new C.w(1,0.7490196078431373,0.8901960784313725,1,D.t)
B.ad1=new C.w(1,0.10588235294117647,0.10588235294117647,0.11372549019607843,D.t)
B.ad2=new C.w(1,0.9490196078431372,0.9490196078431372,0.9333333333333333,D.t)
B.bde=new C.w(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,D.t)
B.bdu=new C.w(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,D.t)
B.bdA=new C.w(1,0.8509803921568627,0.788235294117647,0.6274509803921569,D.t)
B.W_=new C.w(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,D.t)
B.adj=new C.w(1,0.10588235294117647,0.07058823529411765,0.03529411764705882,D.t)
B.bdY=new C.w(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,D.t)
B.Kt=new C.w(1,0.8862745098039215,0.27058823529411763,0.35294117647058826,D.t)
B.wP=new C.w(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,D.t)
B.wQ=new C.w(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,D.t)
B.Kw=new C.w(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,D.t)
B.adC=new C.w(1,0.9686274509803922,0.9490196078431372,0.9019607843137255,D.t)
B.beY=new C.w(1,0.2,0.21176470588235294,0.23137254901960785,D.t)
B.bf2=new C.w(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,D.t)
B.bf4=new C.w(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,D.t)
B.bf9=new C.w(1,0.9098039215686274,0.8941176470588236,0.8549019607843137,D.t)
B.adK=new C.w(1,0.7686274509803922,0.5411764705882353,0.11764705882352941,D.t)
B.bfh=new C.w(1,0.43529411764705883,0.7137254901960784,1,D.t)
B.bfr=new C.w(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,D.t)
B.adQ=new C.w(1,0.18823529411764706,0.2,0.22745098039215686,D.t)
B.KC=new C.w(1,0.9372549019607843,0.9372549019607843,0.9176470588235294,D.t)
B.adS=new C.w(0.6666666666666666,1,0.16470588235294117,0.10196078431372549,D.t)
B.bfE=new C.w(1,0.9372549019607843,0.9137254901960784,0.8627450980392157,D.t)
B.bfH=new C.w(1,0.9294117647058824,0.9019607843137255,0.8156862745098039,D.t)
B.We=new C.w(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,D.t)
B.bfM=new C.w(1,0.12156862745098039,0.6392156862745098,0.2627450980392157,D.t)
B.bfO=new C.w(1,0.803921568627451,0.6274509803921569,0.2,D.t)
B.KF=new C.w(1,0.3607843137254902,0.7019607843137254,1,D.t)
B.ae1=new C.w(1,0.9568627450980393,0.9568627450980393,0.9411764705882353,D.t)
B.bgp=new C.w(1,0.8431372549019608,0.8,0.6588235294117647,D.t)
B.bgZ=new C.w(1,0.9019607843137255,0.8745098039215686,0.796078431372549,D.t)
B.bh_=new C.w(1,0.30980392156862746,0.6588235294117647,1,D.t)
B.bh3=new C.w(1,1,0.6196078431372549,0.6196078431372549,D.t)
B.aeb=new C.w(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,D.t)
B.KK=new C.w(1,0.47843137254901963,0.30980392156862746,0.1568627450980392,D.t)
B.KL=new C.w(1,0.6901960784313725,0.5411764705882353,0.3568627450980392,D.t)
B.Wp=new C.w(1,0.6078431372549019,0.8274509803921568,0.9607843137254902,D.t)
B.bhv=new C.w(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,D.t)
B.bhw=new C.w(1,0.23137254901960785,0.6078431372549019,1,D.t)
B.bhE=new C.w(1,0.8509803921568627,0.8235294117647058,0.7607843137254902,D.t)
B.bhG=new C.w(1,0.29411764705882354,0.29411764705882354,0.3137254901960784,D.t)
B.Eq=new C.w(1,0.4196078431372549,0.2901960784313726,0.19607843137254902,D.t)
B.aeh=new C.w(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,D.t)
B.bhL=new C.w(1,0.8117647058823529,0.788235294117647,0.7215686274509804,D.t)
B.bhT=new C.w(1,0.5450980392156862,0.4196078431372549,0.24705882352941178,D.t)
B.Xf=new C.Q(11,9,11,9)
B.afP=new C.Q(14,8,14,24)
B.agL=new C.Q(4,18,4,8)
B.brR=new C.Q(4,4,8,4)
B.fq0=new C.x("Practice mode (no explanations, real shocks)",null,D.SO,null,null,null,null,null,null,null,null,null)
B.btf=new C.bE(1,D.bi,B.fq0,null)
B.flQ=new C.x("Practice mode (no hints, no labels)",null,D.SO,null,null,null,null,null,null,null,null,null)
B.btg=new C.bE(1,D.bi,B.flQ,null)
B.f0_=new C.F(!0,D.aJ,null,null,null,null,18,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fem=new C.x("My House",null,B.f0_,null,null,null,null,null,null,null,null,null)
B.eUn=new C.F(!0,D.ad,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f6G=new C.x("5 bedrooms, 3 bathrooms. Walk in and fix what is wrong.",null,B.eUn,null,null,null,null,null,null,null,null,null)
B.cTf=w([B.fem,D.bz,B.f6G],x.p)
B.biw=new C.fl(D.ah,D.e,D.j,D.F,null,D.p,null,0,B.cTf,null)
B.btx=new C.bE(1,D.bi,B.biw,null)
B.fe0=new C.x("Construction Lab",null,P.vS,null,null,null,null,null,null,null,null,null)
B.f3u=new C.x("Wire it. Plumb it. Fix a house.",null,D.hn,null,null,null,null,null,null,null,null,null)
B.cWF=w([B.fe0,B.f3u],x.p)
B.biD=new C.fl(D.ah,D.e,D.j,D.F,null,D.p,null,0,B.cWF,null)
B.btA=new C.bE(1,D.bi,B.biD,null)
B.flv=new C.x("Practice mode (no hints, real shocks and fires)",null,D.SO,null,null,null,null,null,null,null,null,null)
B.buf=new C.bE(1,D.bi,B.flv,null)
B.YC=new A.qP(0,"tripped")
B.YD=new A.qP(1,"noHotWater")
B.YE=new A.qP(10,"wallHole")
B.YF=new A.qP(11,"clogged")
B.LU=new A.qP(2,"nutLeak")
B.LV=new A.qP(3,"pexLeak")
B.YG=new A.qP(5,"flicker")
B.YH=new A.qP(6,"burntOutlet")
B.YI=new A.qP(7,"gfciTripped")
B.YJ=new A.qP(8,"runningToilet")
B.YK=new A.qP(9,"dripFaucet")
B.bw2=new A.ps("back",0,10)
B.bw3=new A.ps("back",56,11)
B.bw4=new A.ps("left",32,9)
B.bw5=new A.ps("left",40,9)
B.bw6=new A.ps("right",32,10)
B.bw7=new A.ps("right",40,10)
B.ahR=new A.u7("tv",'Samsung Neo QLED 55"',"\ud83d\udcfa",48)
B.byM=new C.a0(63015,"MaterialIcons",!1)
B.bzf=new C.a0(63228,"MaterialIcons",!1)
B.ajR=new C.a0(983222,"MaterialIcons",!1)
B.akq=new C.a0(983775,"MaterialIcons",!1)
B.akw=new C.a0(983894,"MaterialIcons",!1)
B.bCa=new C.ae(D.eo,null,D.aJ,null,null,null)
B.fAb=new A.M(-0.4,4.2,-2.4)
B.bOi=new A.vp(B.fAb,"LIVE 120 V",D.bL)
B.bcC=new C.w(1,0.12156862745098039,0.10196078431372549,0.07058823529411765,D.t)
B.cOR=w([D.Wg,B.bcC],x.O)
B.bRG=new C.a7(D.a3,D.a7,D.x,B.cOR,null,null)
B.bT3=w(["flange","wax","toilet","bolts","valve","hosehot","hosecold","faucet","tail","trap","arm"],x.s)
B.fyZ=new A.M(-57.8,-32,0)
B.b_o=new A.yo(0,"Outlet spot 1",!1,B.fyZ,"low")
B.fzt=new A.M(-9.8,-32,0)
B.b_l=new A.yo(1,"Outlet spot 2",!1,B.fzt,"low")
B.fzL=new A.M(38.2,-32,0)
B.b_r=new A.yo(2,"Outlet spot 3",!1,B.fzL,"low")
B.fyF=new A.M(-25.8,0,0)
B.b_p=new A.yo(3,"Switch spot 1",!1,B.fyF,"switch")
B.fzo=new A.M(22.2,0,0)
B.b_n=new A.yo(4,"Switch spot 2",!1,B.fzo,"switch")
B.fAl=new A.M(-30,48,40)
B.b_q=new A.yo(5,"Ceiling light spot",!0,B.fAl,"light")
B.fuM=new A.M(30,48,40)
B.b_m=new A.yo(6,"Ceiling fan spot",!0,B.fuM,"fan")
B.tH=w([B.b_o,B.b_l,B.b_r,B.b_p,B.b_n,B.b_q,B.b_m],C.ax("O<yo>"))
B.cch=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
B.fzB=new A.M(11,4.6,-6)
B.fwm=new A.M(11,5.4,-7.85)
B.fzb=new A.M(3.4,5.4,-7.85)
B.aQw=new A.M(3.4,3.4,-7.85)
B.ccj=w([B.fzB,B.fwm,B.fzb,B.aQw],x.o)
B.egd=new C.z(-9.5,4.6)
B.eis=new C.z(-5.9,2.3)
B.eo8=new C.z(8.8,4.4)
B.csh=w([B.egd,B.eis,B.eo8],x.f)
B.bwe=new A.u7("bangtv",'Beovision TV 77"',"\ud83d\udcfa",66)
B.bwc=new A.u7("sonytv",'Sony Bravia 75"',"\ud83d\udcfa",64)
B.bw8=new A.u7("lgtv",'LG OLED 65"',"\ud83d\udcfa",56)
B.bwa=new A.u7("appletv",'Apple TV 4K 50"',"\ud83d\udcfa",44)
B.bwb=new A.u7("lamp","Table lamp","\ud83d\udca1",0)
B.bwd=new A.u7("toaster","Toaster","\ud83c\udf5e",0)
B.bw9=new A.u7("hairdryer","Hair dryer","\ud83d\udc87",0)
B.asD=w([B.bwe,B.bwc,B.bw8,B.ahR,B.bwa,B.bwb,B.bwd,B.bw9],C.ax("O<u7>"))
B.ctb=w([61,63],x.t)
B.cto=w([62,64],x.t)
B.b8n=new C.w(1,0.6039215686274509,0.30980392156862746,0.30980392156862746,D.t)
B.bhN=new C.w(1,0.30980392156862746,0.47843137254901963,0.3686274509803922,D.t)
B.cva=w([B.DA,B.acD,B.b8n,B.bhN,B.acI,D.t4],x.O)
B.asP=w([72,73,74,75],x.t)
B.epn=new C.z(-25,-15)
B.e9g=new C.z(25,-15)
B.epm=new C.z(-25,15)
B.e9f=new C.z(25,15)
B.czC=w([B.epn,B.e9g,B.epm,B.e9f],x.f)
B.cHj=w([y.r,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.x,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
B.dW8={black:0}
B.HZ=new C.eU(B.dW8,1,x.M)
B.bwu=new A.md(51,"Black wire nut: HOT",B.HZ,!1,"hot")
B.dWU={white:0}
B.HX=new C.eU(B.dWU,1,x.M)
B.bwj=new A.md(52,"White wire nut: NEUTRAL",B.HX,!1,"neutral")
B.dWo={ground:0}
B.RR=new C.eU(B.dWo,1,x.M)
B.bwg=new A.md(53,"Green ground connection",B.RR,!1,"ground")
B.cHs=w([B.bwu,B.bwj,B.bwg],x.r)
B.bwv=new A.md(51,"Black wire nut: HOT",B.HZ,!1,"hot")
B.bwk=new A.md(52,"White wire nut: NEUTRAL",B.HX,!1,"neutral")
B.bwh=new A.md(53,"Green ground connection",B.RR,!1,"ground")
B.cHr=w([B.bwv,B.bwk,B.bwh],x.r)
B.cHO=w(["Walnut","Blue grey","Brick red","Sage green","Sand","Charcoal"],x.s)
B.fxa=new A.M(-6.5,7.5,-7.85)
B.fxd=new A.M(-6.5,7.8,-3)
B.cI5=w([B.fxa,B.fxd],x.o)
B.b94=new C.w(1,0.9176470588235294,0.9490196078431372,0.9686274509803922,D.t)
B.bdJ=new C.w(1,0.9647058823529412,0.9098039215686274,0.9098039215686274,D.t)
B.bcT=new C.w(1,0.9529411764705882,0.9215686274509803,0.7843137254901961,D.t)
B.ats=w([B.A5,B.b94,B.bdJ,B.bcT],x.O)
B.cIJ=w([y.r,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
B.fB9=new A.M(-3.6,7.5,-7.85)
B.fwS=new A.M(-3.6,4.2,-7.85)
B.cIQ=w([B.fB9,B.fwS],x.o)
B.dW7={blackLine:0,blackLoad:1}
B.aL2=new C.eU(B.dW7,2,x.M)
B.bws=new A.md(21,"Brass screw (top)",B.aL2,!1,"hot")
B.bwt=new A.md(22,"Brass screw (bottom)",B.aL2,!1,"hot")
B.ahS=new A.md(25,"Green screw: GROUND",B.RR,!1,"ground")
B.cJk=w([B.bws,B.bwt,B.ahS],x.r)
B.fzR=new A.M(9.8,6,-7.85)
B.fwq=new A.M(9.8,7.5,-7.85)
B.fBm=new A.M(-8,7.5,-7.85)
B.fxX=new A.M(-8,1.5,-7.85)
B.cKl=w([B.fzR,B.fwq,B.fBm,B.fxX],x.o)
B.aQC=new A.M(5,1.8,-7.85)
B.fyz=new A.M(5,-0.1,-7.85)
B.fzh=new A.M(12.5,-0.1,-7.85)
B.cLk=w([B.aQC,B.fyz,B.fzh],x.o)
B.ftc=new A.M(3,3.1,-7.1)
B.aQx=new A.M(3,1.7,-7.1)
B.fze=new A.M(3,1,-7.1)
B.fuC=new A.M(3.65,0.5,-7.1)
B.fvs=new A.M(4.3,1,-7.1)
B.fyv=new A.M(4.3,1.8,-7.1)
B.fBo=new A.M(5,1.8,-7.1)
B.cLM=w([B.ftc,B.aQx,B.fze,B.fuC,B.fvs,B.fyv,B.fBo,B.aQC],x.o)
B.fAV=new A.M(0.6,11,-3.4)
B.fvS=new A.M(0.6,3.2,-3.2)
B.fAC=new A.M(0.6,2.2,-1.9)
B.fvJ=new A.M(0.6,0.7,-1.5)
B.cMK=w([B.fAV,B.fvS,B.fAC,B.fvJ],x.o)
B.a7O=new A.kT("look","Look",D.fa)
B.fFF=new A.kT("wall","Wall box",N.aj8)
B.fFE=new A.kT("ceiling","Ceiling box",D.qI)
B.fFO=new A.kT("fanbox","Fan box",M.Mp)
B.fFU=new A.kT("drill","Drill",D.xC)
B.fFP=new A.kT("cable","Cable roll",E.aiY)
B.d0Y=w([B.a7O,B.fFF,B.fFE,B.fFO,B.fFU,B.fFP],x.b)
B.fFT=new A.kT("sheet","Drywall sheet",D.Bf)
B.fFI=new A.kT("knife","Drywall saw",D.Fo)
B.fFG=new A.kT("screw","Screw gun",Q.Fy)
B.fFX=new A.kT("tape","Tape",D.tw)
B.fFS=new A.kT("mud","Mud",Z.ZL)
B.fG0=new A.kT("sand","Sander",D.Fm)
B.bBC=new C.a0(985109,"MaterialIcons",!1)
B.fFM=new A.kT("paint","Roller",B.bBC)
B.cYC=w([B.a7O,B.fFT,B.fFI,B.fFG,B.fFX,B.fFS,B.fG0,B.fFM],x.b)
B.ajS=new C.a0(983223,"MaterialIcons",!1)
B.fFY=new A.kT("outlet","Outlet",B.ajS)
B.fFK=new A.kT("gfci","GFCI",D.tD)
B.fFV=new A.kT("switch","Switch",E.N0)
B.fFR=new A.kT("light","Light",D.qO)
B.bBA=new C.a0(985094,"MaterialIcons",!1)
B.fFN=new A.kT("fan","Fan",B.bBA)
B.fFQ=new A.kT("tv","TV",R.akf)
B.bzR=new C.a0(63571,"MaterialIcons",!1)
B.fFL=new A.kT("lamp","Lamp",B.bzR)
B.byE=new C.a0(62944,"MaterialIcons",!1)
B.fFJ=new A.kT("toaster","Toaster",B.byE)
B.bzd=new C.a0(63209,"MaterialIcons",!1)
B.fG_=new A.kT("hairdryer","Hair dryer",B.bzd)
B.fFW=new A.kT("tester","Tester",D.qM)
B.fFZ=new A.kT("flip","Flip switch",E.N0)
B.fFH=new A.kT("unplug","Unplug",B.ajR)
B.cNx=w([B.a7O,B.fFY,B.fFK,B.fFV,B.fFR,B.fFN,B.fFQ,B.fFL,B.fFJ,B.fG_,B.fFW,B.fFZ,B.fFH],x.b)
B.cNO=w([B.d0Y,B.cYC,B.cNx],C.ax("O<ak<kT>>"))
B.fv2=new A.M(0,8.3,0)
B.aQg=new A.M(0,3.9,0)
B.a1b=w([B.fv2,B.aQg],x.o)
B.cOb=w([y.r,"Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.","Join the house ground wire to the fan ground.","Join the house white wire to the fan white wire with a wire nut.","Join the house black wire to the fan black wire with a wire nut.","Push the wires up into the box and fasten the canopy to the ceiling.",y.E],x.s)
B.fA5=new A.M(-0.6,11,-3.4)
B.fwu=new A.M(-0.6,3.2,-3.2)
B.fzy=new A.M(-0.6,2.2,-1.9)
B.fBC=new A.M(-0.6,0.7,-1.5)
B.cOt=w([B.fA5,B.fwu,B.fzy,B.fBC],x.o)
B.cOO=w([0,1,2,3,4,6,7,8],x.t)
B.e0a=new A.n7("flange","flange","Toilet flange",D.T,"The flange is fixed to the floor over the drain. Everything else sits on it.",!1,0)
B.d0C=w(["flange"],x.s)
B.e08=new A.n7("wax","wax","Wax ring",B.d0C,"The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.",!1,0)
B.daa=w(["wax"],x.s)
B.e05=new A.n7("toilet","toilet","Toilet",B.daa,"The toilet is lowered straight down onto the wax ring. The ring has to be there first.",!1,0)
B.d8G=w(["toilet"],x.s)
B.e09=new A.n7("bolts","bolts","Toilet bolts",B.d8G,"The two bolts hold the toilet to the flange. Set the toilet first.",!1,2)
B.e06=new A.n7("tvalve","valve","Toilet shut-off valve",D.T,"The shut-off valve goes on the pipe that comes out of the wall.",!0,0)
B.d8M=w(["tvalve","toilet"],x.s)
B.e07=new A.n7("those","hosecold","Toilet supply hose",B.d8M,"The hose joins the valve to the toilet tank, so both must be there first.",!1,2)
B.aF8=new A.n7("faucet","faucet","Faucet",D.T,"The faucet goes through the hole in the counter.",!1,0)
B.aFb=new A.n7("vhot","valve","Hot shut-off valve (left)",D.T,y.g,!0,0)
B.aF9=new A.n7("vcold","valve","Cold shut-off valve (right)",D.T,y.g,!0,0)
B.d9B=w(["vhot","faucet"],x.s)
B.aFc=new A.n7("hhot","hosehot","Hot supply hose",B.d9B,"The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.d9y=w(["vcold","faucet"],x.s)
B.aFa=new A.n7("hcold","hosecold","Cold supply hose",B.d9y,"The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.aF7=new A.n7("tail","tail","Tailpiece",D.T,"The tailpiece hangs from the sink drain. It is the first piece of the drain.",!1,0)
B.d8z=w(["tail"],x.s)
B.aFd=new A.n7("trap","trap","P-trap",B.d8z,"The P-trap joins the tailpiece. Build the drain from the top down.",!1,1)
B.d8H=w(["trap"],x.s)
B.aFe=new A.n7("arm","arm","Trap arm",B.d8H,"The trap arm joins the trap and goes into the wall.",!1,1)
B.cKS=w([B.e0a,B.e08,B.e05,B.e09,B.e06,B.e07,B.aF8,B.aFb,B.aF9,B.aFc,B.aFa,B.aF7,B.aFd,B.aFe],x.v)
B.e5B=new A.VQ("bathroom","Bathroom",B.cKS,"Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.")
B.d2f=w([B.aF8,B.aFb,B.aF9,B.aFc,B.aFa,B.aF7,B.aFd,B.aFe],x.v)
B.e5C=new A.VQ("kitchen","Kitchen",B.d2f,"Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.")
B.aue=w([B.e5B,B.e5C],C.ax("O<VQ>"))
B.bwo=new A.md(21,"LOAD hot (brass, taped)",D.HY,!0,"load")
B.bwq=new A.md(22,"LINE hot (brass)",B.HZ,!1,"hot")
B.bwp=new A.md(23,"LOAD neutral (silver, taped)",D.HY,!0,"load")
B.bwi=new A.md(24,"LINE neutral (silver)",B.HX,!1,"neutral")
B.cQs=w([B.bwo,B.bwq,B.bwp,B.bwi,B.ahS],x.r)
B.fta=new A.M(8.2,0.9,-6.3)
B.fzE=new A.M(8.2,-0.1,-6.3)
B.fus=new A.M(8.2,-0.1,-7.85)
B.cQL=w([B.fta,B.fzE,B.fus],x.o)
B.cQW=w([-0.28,0.28],x.n)
B.bvC=new A.Df("Oak",B.KL,"wood")
B.bvE=new A.Df("Dark wood",B.Eq,"wood")
B.bgq=new C.w(1,0.5529411764705883,0.5647058823529412,0.5882352941176471,D.t)
B.bvG=new A.Df("Grey carpet",B.bgq,"carpet")
B.bfW=new C.w(1,0.3568627450980392,0.4980392156862745,0.6509803921568628,D.t)
B.bvD=new A.Df("Blue carpet",B.bfW,"carpet")
B.bdI=new C.w(1,0.8470588235294118,0.803921568627451,0.7058823529411765,D.t)
B.bvA=new A.Df("Cream carpet",B.bdI,"carpet")
B.bvF=new A.Df("White tile",B.acb,"tile")
B.bvB=new A.Df("Slate tile",B.V4,"tile")
B.auB=w([B.bvC,B.bvE,B.bvG,B.bvD,B.bvA,B.bvF,B.bvB],C.ax("O<Df>"))
B.fzz=new A.M(3,3.2,-7.85)
B.fBE=new A.M(3,4,-7.85)
B.fBa=new A.M(3,4.2,-7.4)
B.ftU=new A.M(3,3.95,-7)
B.cU3=w([B.fzz,B.fBE,B.fBa,B.ftU],x.o)
B.fzU=new A.M(6,0.2,0)
B.fyP=new A.M(6,2.6,0)
B.aQZ=new A.M(8.6,2.6,0)
B.cVh=w([B.fzU,B.fyP,B.aQZ],x.o)
B.fGj=new A.Jc("outlet","\ud83d\udd0c","Wall outlet","Black to brass, white to silver",D.aJ)
B.fGg=new A.Jc("switch","\ud83d\udca1","Light switch","Two blacks and a wire nut",D.aX)
B.fGh=new A.Jc("gfci","\ud83d\udee1\ufe0f","GFCI outlet","LINE and LOAD near water",D.bs)
B.fGi=new A.Jc("ptrap","\ud83e\udea0","Sink drain (P-trap)","Build a drain with a water seal",D.cu)
B.fGf=new A.Jc("faucet","\ud83d\udeb0","Faucet supply lines","Hot left, cold right",D.cr)
B.fGe=new A.Jc("house","\ud83c\udfd7\ufe0f","Build and fix a house","Stage by stage, then repair",D.by)
B.cVA=w([B.fGj,B.fGg,B.fGh,B.fGi,B.fGf,B.fGe],C.ax("O<Jc>"))
B.epr=new C.z(-7,-7)
B.ech=new C.z(7,-7)
B.epq=new C.z(-7,7)
B.ecg=new C.z(7,7)
B.cVY=w([B.epr,B.ech,B.epq,B.ecg],x.f)
B.cW_=w([-2.4,2.4],x.n)
B.cWg=w([-1.6,1.6],x.n)
B.adB=new C.w(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,D.t)
B.fCT=new A.zH("blackLine","Black \xb7 from the breaker",B.adB,D.c,"hot")
B.bbE=new C.w(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,D.t)
B.fCW=new A.zH("blackLoad","Black \xb7 to the light",B.bbE,D.c,"hot")
B.aRf=new A.zH("ground","Bare copper \xb7 ground",B.wQ,D.c,"ground")
B.cWj=w([B.fCT,B.fCW,B.aRf],x.d)
B.b6m=new C.w(1,0.9294117647058824,0.9019607843137255,0.8392156862745098,D.t)
B.b4F=new C.w(1,0.9137254901960784,0.8274509803921568,0.8274509803921568,D.t)
B.b3V=new C.w(1,0.8352941176470589,0.8941176470588236,0.8156862745098039,D.t)
B.bb4=new C.w(1,0.9529411764705882,0.8901960784313725,0.6549019607843137,D.t)
B.b8x=new C.w(1,0.7254901960784313,0.7647058823529411,0.8666666666666667,D.t)
B.bg2=new C.w(1,0.5607843137254902,0.6392156862745098,0.6588235294117647,D.t)
B.auO=w([B.b6m,B.Vh,B.b4F,B.b3V,B.bb4,B.b8x,B.acx,B.bg2],x.O)
B.ahC=new A.qP(4,"deadOutlet")
B.cYu=w([B.YC,B.YD,B.LU,B.LV,B.ahC,B.YG,B.YH,B.YI,B.YJ,B.YK,B.YE,B.YF],C.ax("O<qP>"))
B.cYX=w([y.r,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.x,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
B.cZv=w([0.1,8.05],x.n)
B.fxw=new A.M(-0.35,11,-3.4)
B.fwz=new A.M(-0.35,3.2,-3.2)
B.fyX=new A.M(-0.35,2.2,-1.9)
B.fvF=new A.M(-0.35,0.7,-1.5)
B.cZJ=w([B.fxw,B.fwz,B.fyX,B.fvF],x.o)
B.fB2=new A.M(5.2,7.5,-7.85)
B.fyL=new A.M(5.2,4,-7.85)
B.cZP=w([B.fB2,B.fyL],x.o)
B.aQN=new A.M(0,15.5,-3.6)
B.fxF=new A.M(0,20,-3.6)
B.fBs=new A.M(0,22.5,-2)
B.fwi=new A.M(0,22.5,1.1999999999999997)
B.fxL=new A.M(0,21.1,1.6)
B.d_m=w([B.aQN,B.fxF,B.fBs,B.fwi,B.fxL],x.o)
B.GA=w([],x.E)
B.d01=w([],x.o)
B.d0V=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
B.fu8=new A.M(11.4,4.6,-6)
B.fxS=new A.M(11.4,5,-7.85)
B.fvH=new A.M(2.6,5,-7.85)
B.fvX=new A.M(2.6,3.4,-7.85)
B.d1E=w([B.fu8,B.fxS,B.fvH,B.fvX],x.o)
B.d1I=w(["hot","cold"],x.s)
B.fCV=new A.zH("black","Black \xb7 hot",B.adB,D.c,"hot")
B.fCU=new A.zH("white","White \xb7 neutral",B.wz,D.aA,"neutral")
B.PD=w([B.fCV,B.fCU,B.aRf],x.d)
B.eoS=new C.z("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
B.eqV=new C.z("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
B.egO=new C.z("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
B.en9=new C.z("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
B.eob=new C.z("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
B.ehc=new C.z("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
B.eio=new C.z("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
B.d3A=w([B.eoS,B.eqV,B.egO,B.en9,B.eob,B.ehc,B.eio],x.L)
B.epj=new C.z(-17,-9)
B.e8E=new C.z(17,-9)
B.epi=new C.z(-17,9)
B.e8D=new C.z(17,9)
B.d49=w([B.epj,B.e8E,B.epi,B.e8D],x.f)
B.d4i=w([-30,30,-70,70],x.n)
B.d4j=w([-3,3],x.n)
B.nP=w([-72,-24,24],x.t)
B.d4n=w([-90,-50,50,90],x.n)
B.avI=w([-9,9],x.n)
B.fvL=new A.M(8.2,5,-7.85)
B.fyO=new A.M(8.2,1.2,-7.85)
B.fA6=new A.M(8.2,1,-7.4)
B.d5T=w([B.fvL,B.fyO,B.fA6],x.o)
B.dWp={hot:0}
B.aL6=new C.eU(B.dWp,1,x.M)
B.e5z=new A.Ek(61,"Hot shut-off valve (left)",B.aL6,"Hot is always on the LEFT. The red hose goes on the left valve.")
B.dWd={cold:0}
B.aLe=new C.eU(B.dWd,1,x.M)
B.e5A=new A.Ek(62,"Cold shut-off valve (right)",B.aLe,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
B.e5x=new A.Ek(63,"Hot faucet inlet (left)",B.aL6,"The left faucet inlet takes the hot (red) hose.")
B.e5y=new A.Ek(64,"Cold faucet inlet (right)",B.aLe,"The right faucet inlet takes the cold (blue) hose.")
B.a1W=w([B.e5z,B.e5A,B.e5x,B.e5y],C.ax("O<Ek>"))
B.a1Y=w([-72,-48,-24,0,24],x.t)
B.d7b=w(["1 Rough-in","2 Drywall","3 Devices"],x.s)
B.euT=new C.bz("hot","Hot hose (red)",B.rU)
B.evx=new C.bz("cold","Cold hose (blue)",B.ns)
B.d85=w([B.euT,B.evx],C.ax("O<+(n,n,w)>"))
B.a7t=new A.M(15,2.6,0)
B.a20=w([B.aQZ,B.a7t],x.o)
B.d8A=w(["tail","trap","arm"],x.s)
B.GE=w(["tv","lamp","toaster","hairdryer"],x.s)
B.d9e=w([y.r,"Hold the fixture up to the ceiling box. It has three short wires: black, white and green.","Join the house ground wire to the fixture ground.","Join the house white wire to the fixture white wire with a wire nut.","Join the house black wire to the fixture black wire with a wire nut.","Push the wires into the box and fasten the fixture to the ceiling.",y.E],x.s)
B.bOC=new A.jw("Breaker off, then test","Before you touch any wire, switch its breaker OFF, then check with a voltage tester that the wire is dead. A switch on the wall is not enough.")
B.bOp=new A.jw("Lock out, tag out","On a real job you put a lock or a note on the panel so nobody switches the power back on while you work.")
B.bOJ=new A.jw("Water and power","Water carries electricity. Near sinks, tubs and outdoors the outlets must be GFCI, and wet hands never touch wires.")
B.bOu=new A.jw("Eyes, ears, lungs","Safety glasses for drilling and cutting, ear protection for loud tools, and a mask when you sand drywall dust or cut tile.")
B.bOI=new A.jw("Shut the water off","Before you cut or loosen a pipe, close the main water valve and open a faucet to drain the line.")
B.d36=w([B.bOC,B.bOp,B.bOJ,B.bOu,B.bOI],x.Z)
B.bOV=new A.LR("Safety first","\ud83e\uddba",D.cr,B.d36)
B.bOK=new A.jw("Wire colours","Black is hot (it carries the power), white is neutral (the way back), bare copper or green is ground (the safety path). Red is a second hot, often used for a switched line.")
B.bOR=new A.jw("Screw colours","On an outlet the brass screw takes the hot wire, the silver screw takes the neutral and the green screw takes the ground.")
B.bOE=new A.jw("Wire size","14 gauge wire is for 15 amp circuits (lights and outlets). 12 gauge is for 20 amp circuits (kitchens). A thinner wire than the breaker allows can overheat and start a fire.")
B.bOy=new A.jw("Breakers","A breaker is a safety switch. It trips when a circuit carries too much current, so the wires never get hot enough to burn.")
B.bOM=new A.jw("Wire nuts","Strip about 3/4 inch, twist the bare ends together clockwise, and screw on the nut until no bare copper shows. Give each wire a gentle tug.")
B.bOS=new A.jw("Switches","A switch cuts the hot wire only. The neutral goes straight through to the light.")
B.bOT=new A.jw("GFCI","A GFCI outlet watches the current going out and coming back. If a little leaks (through water or a person) it cuts the power in a fraction of a second.")
B.bOr=new A.jw("Ceiling fans","A fan shakes and is heavy. It needs a box that says fan rated, fixed to the joist, not a plain light box.")
B.bOt=new A.jw("Heights","Outlets sit about 16 inches from the floor. Switches sit about 48 inches up, where your hand falls.")
B.cX7=w([B.bOK,B.bOR,B.bOE,B.bOy,B.bOM,B.bOS,B.bOT,B.bOr,B.bOt],x.Z)
B.bOY=new A.LR("Wiring basics","\u26a1",D.cq,B.cX7)
B.bOq=new A.jw("Hot left, cold right","On a faucet, hot is on the left and cold on the right. Hot lines are marked red and cold lines blue.")
B.bOD=new A.jw("The P-trap","The curved pipe under a sink always holds a little water. That water seal stops sewer gas coming up the drain.")
B.bOO=new A.jw("Shut-off valves","Every sink and toilet has its own small valve, so you can stop the water to one fixture without turning off the whole house.")
B.bOw=new A.jw("Slip nuts","Drain joints are sealed by a washer and a slip nut. Tighten by hand and a quarter turn: too much force cracks plastic.")
B.bOv=new A.jw("Wax ring","A toilet sits on a wax ring that seals it to the floor drain. A toilet is lowered straight down once, and cannot be slid around.")
B.bOL=new A.jw("Drain slope","Drains fall about 1/4 inch per foot so water and waste keep moving. Too flat and it clogs, too steep and the water leaves the solids behind.")
B.bOQ=new A.jw("Order of work","Plumbing goes from the top down on the drain (tailpiece, trap, arm) and from the wall out on the supply (valve, hose, fixture).")
B.c5m=w([B.bOq,B.bOD,B.bOO,B.bOw,B.bOv,B.bOL,B.bOQ],x.Z)
B.bOW=new A.LR("Plumbing basics","\ud83d\udeb0",D.cu,B.c5m)
B.bOs=new A.jw("Studs","Studs are the vertical 2x4 posts inside a wall, 16 inches apart from centre to centre. Everything is fixed to them.")
B.bOG=new A.jw("Drilling studs","Holes for cable go through the middle of the stud, so a nail or screw cannot reach the wire.")
B.bOx=new A.jw("Drywall","A sheet is 4 feet wide, so its edges land on studs 48 inches apart. Screws go into studs only, just under the paper.")
B.bOA=new A.jw("Taping and mud","Seams get paper tape and three thin coats of joint compound, sanded smooth between coats, then primer and paint.")
B.bOP=new A.jw("Order of a build","Frame, run the pipes and wires (rough-in), inspect, hang drywall, finish it, paint, then fit the fixtures and devices.")
B.cJh=w([B.bOs,B.bOG,B.bOx,B.bOA,B.bOP],x.Z)
B.bOU=new A.LR("Framing and walls","\ud83c\udfe0",D.dT,B.cJh)
B.bOB=new A.jw("Voltage tester","A pen that glows or beeps near live wires. Test it on a known live outlet first, so you know it works.")
B.bOH=new A.jw("Wire strippers","Strip the plastic off without nicking the copper. A nick weakens the wire.")
B.bON=new A.jw("Adjustable wrench","For nuts on valves and hoses. Hold the fitting steady with a second wrench so you do not twist the pipe.")
B.bOF=new A.jw("Drill and screw gun","A drill makes holes through studs. A screw gun sets drywall screws to the right depth.")
B.bOz=new A.jw("Level and tape measure","Measure twice, cut once. A level makes sure outlets, shelves and pipes are straight.")
B.das=w([B.bOB,B.bOH,B.bON,B.bOF,B.bOz],x.Z)
B.bOX=new A.LR("Tools","\ud83e\uddf0",D.bs,B.das)
B.da6=w([B.bOV,B.bOY,B.bOW,B.bOU,B.bOX],C.ax("O<LR>"))
B.bwm=new A.md(21,"Brass screw (top): HOT side",B.HZ,!1,"hot")
B.bwl=new A.md(22,"Brass screw (bottom): HOT side",B.HZ,!1,"hot")
B.bwn=new A.md(23,"Silver screw (top): NEUTRAL side",B.HX,!1,"neutral")
B.bwr=new A.md(24,"Silver screw (bottom): NEUTRAL side",B.HX,!1,"neutral")
B.bwf=new A.md(25,"Green screw: GROUND",B.RR,!1,"ground")
B.da7=w([B.bwm,B.bwl,B.bwn,B.bwr,B.bwf],x.r)
B.dan=w(["Cream","Sky","Blush","Mint","Butter","Periwinkle","White","Slate"],x.s)
B.day=w([0.72,-0.72],x.n)
B.daZ=w(["inspect","hand","screwdriver","pliers","wrench","crimper","plunger","flapper","newoutlet","patch"],x.s)
B.dbY=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Open the valves slowly and turn on the faucet. Check every connection for drips."],x.s)
B.dWn={flange:0,wax:1,toilet:2,bolts:3,valve:4,hosehot:5,hosecold:6,faucet:7,tail:8,trap:9,arm:10}
B.deb=new C.bp(B.dWn,["Flange","Wax ring","Toilet","Bolts","Shut-off valve","Hot hose","Cold hose","Faucet","Tailpiece","P-trap","Trap arm"],x.l)
B.bv_=new A.tZ("The living room has no power at all.","The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.","hand","Breaker reset. The living room has power again.",72,0,"")
B.bv9=new A.tZ("There is no hot water.","The water heater breaker has tripped (orange). Reset it by hand.","hand","Breaker reset. The water heater is heating again.",75,0,"")
B.bv6=new A.tZ("Water is dripping under the kitchen sink.","The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.","wrench","Slip nut tightened. The drip stopped.",87,0,"")
B.buZ=new A.tZ("There is a wet spot on the wall behind the kitchen.","A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.","crimper","The joint is crimped again and it does not leak.",96,0,"")
B.bv3=new A.tZ("The outlet by the sofa does not work, but the lights do.","The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.","screwdriver","You tightened the loose screw. The outlet works again.",81,72,"Turn the living room breaker OFF first.")
B.bv0=new A.tZ("The living room light flickers.","A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.","pliers","You twisted the wire nut tight. The light is steady.",83,72,"Turn the living room breaker OFF first.")
B.bv1=new A.tZ("The kitchen outlet sparks and smells burnt.","The outlet has burnt. Turn the breaker off and replace it with a new outlet.","newoutlet","New outlet fitted. No more sparks.",84,73,"Turn the kitchen breaker OFF first.")
B.bv7=new A.tZ("The kitchen outlets are dead.","The GFCI outlet has tripped. Press its RESET button by hand.","hand","You pressed RESET. The kitchen outlets work.",84,0,"")
B.bv2=new A.tZ("The toilet keeps running.","The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.","flapper","New flapper fitted. The toilet stops running.",88,0,"")
B.bv5=new A.tZ("The kitchen faucet drips.","The faucet washer is worn. Tighten the packing nut with the wrench, then check.","wrench","The faucet is sealed. No more drips.",85,0,"")
B.bv4=new A.tZ("There is a hole in the wall.","A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.","patch","Patch fitted. Now it only needs mud, sanding and paint.",95,0,"")
B.bv8=new A.tZ("The kitchen sink drains very slowly.","The drain is clogged. Use the plunger.","plunger","The clog is gone. The sink drains fast.",94,0,"")
B.vx=new C.dQ([B.YC,B.bv_,B.YD,B.bv9,B.LU,B.bv6,B.LV,B.buZ,B.ahC,B.bv3,B.YG,B.bv0,B.YH,B.bv1,B.YI,B.bv7,B.YJ,B.bv2,B.YK,B.bv5,B.YE,B.bv4,B.YF,B.bv8],C.ax("dQ<qP,tZ>"))
B.dg0=new C.bp(D.ib,[],C.ax("bp<G,db>"))
B.dWl={tail:0,trap:1,arm:2}
B.dgf=new C.bp(B.dWl,["Tailpiece","P-trap","Trap arm"],x.l)
B.dVP={bed:0,nightstand:1,wardrobe:2,desk:3,rug:4,sofa:5,armchair:6,coffee:7,tvstand:8,dining:9,chair:10,plant:11,lamp:12,console:13,shelf:14}
B.bvS=new A.q8("Bed","\ud83d\udecf\ufe0f",60,80)
B.bvW=new A.q8("Night table","\ud83e\ude91",16,16)
B.bw_=new A.q8("Wardrobe","\ud83d\udeaa",44,20)
B.bvQ=new A.q8("Desk","\ud83d\udda5\ufe0f",48,24)
B.bvM=new A.q8("Rug","\ud83d\udfe5",70,50)
B.bvT=new A.q8("Sofa","\ud83d\udecb\ufe0f",80,32)
B.bvZ=new A.q8("Armchair","\ud83d\udcba",30,30)
B.bvP=new A.q8("Coffee table","\u2615",40,24)
B.bvX=new A.q8("TV stand","\ud83d\udcfa",56,18)
B.bvN=new A.q8("Dining table","\ud83c\udf7d\ufe0f",56,36)
B.bvO=new A.q8("Chair","\ud83e\ude91",18,18)
B.bvY=new A.q8("Plant","\ud83e\udeb4",14,14)
B.bvU=new A.q8("Floor lamp","\ud83d\udca1",10,10)
B.bvR=new A.q8("Console table","\ud83d\uddc4\ufe0f",44,14)
B.bvV=new A.q8("Bookshelf","\ud83d\udcda",36,12)
B.yw=new C.bp(B.dVP,[B.bvS,B.bvW,B.bw_,B.bvQ,B.bvM,B.bvT,B.bvZ,B.bvP,B.bvX,B.bvN,B.bvO,B.bvY,B.bvU,B.bvR,B.bvV],C.ax("bp<n,q8>"))
B.fzQ=new A.M(0,0,-1.2)
B.dU6=new A.db("Electrical box","The box is ready. Pull a cable to it, then wire a device.",B.fzQ,9)
B.dgC=new C.dQ([3,B.dU6],C.ax("dQ<G,db>"))
B.aEb={inspect:0,hand:1,screwdriver:2,pliers:3,wrench:4,crimper:5,plunger:6,flapper:7,newoutlet:8,patch:9}
B.Qb=new C.bp(B.aEb,["Look and test","Hand","Screwdriver","Pliers","Wrench","Crimp tool","Plunger","New flapper","New outlet","Drywall patch"],x.l)
B.byZ=new C.a0(63072,"MaterialIcons",!1)
B.dgG=new C.bp(B.aEb,[D.fa,B.akq,Q.Fy,D.Fo,D.qJ,B.byZ,X.a_g,D.pD,B.ajS,L.va],C.ax("bp<n,a0>"))
B.aCV=new A.a5D(null)
B.fBd=new A.M(16,2.6,0)
B.dTQ=new A.db("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",B.fBd,8)
B.ftH=new A.M(0,3,-6)
B.dTR=new A.db("Wall","The copper supply pipes come out of the wall here.",B.ftH,24)
B.fzv=new A.M(8.2,1,-7)
B.dTS=new A.db("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",B.fzv,7)
B.fte=new A.M(0,0,40)
B.dTT=new A.db("The room","A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.",B.fte,190)
B.fxr=new A.M(-2.4,11.5,-3.6)
B.dTU=new A.db("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",B.fxr,7)
B.fuF=new A.M(-3.6,4,-7.8)
B.dTV=new A.db("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",B.fuF,4.5)
B.fyu=new A.M(0,0.5,2)
B.dTW=new A.db("Voltage tester","A tester that glows when it touches live power.",B.fyu,6)
B.dTX=new A.db("Pipe joint","A crimped joint in the hot water line.",B.aQw,4)
B.fxI=new A.M(0,-0.2,0.2)
B.dTY=new A.db("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",B.fxI,8)
B.fAy=new A.M(-4.6,0.5,-3.4)
B.dTZ=new A.db("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",B.fAy,8)
B.fz6=new A.M(0,-0.3,3.2)
B.dU_=new A.db("White wire nut: NEUTRAL","Twist the house white wire and the fixture white wire together under this cap.",B.fz6,6)
B.fym=new A.M(4.6,0.5,-3.4)
B.dU0=new A.db("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",B.fym,8)
B.fup=new A.M(2.4,11.5,-3.6)
B.dU1=new A.db("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",B.fup,7)
B.fBO=new A.M(0.8,-0.8,1.2)
B.dU2=new A.db("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",B.fBO,7)
B.fxp=new A.M(10.05,5.2,-7.5)
B.dU3=new A.db("Water heater breaker","A big circuit for the water heater. It is ON.",B.fxp,3.5)
B.aQ5=new A.M(0,40,0)
B.dU4=new A.db("Back wall",y.s,B.aQ5,140)
B.fzp=new A.M(3,3.8,-7.4)
B.dU5=new A.db("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",B.fzp,4.5)
B.a7m=new A.M(0,6,0)
B.dU7=new A.db("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",B.a7m,10)
B.fAp=new A.M(-60,40,50)
B.dU8=new A.db("Left wall",y.s,B.fAp,140)
B.fuZ=new A.M(3,1,0)
B.dU9=new A.db("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",B.fuZ,11)
B.ftt=new A.M(0,20,5)
B.dUa=new A.db("The room","A bare room with the water supply stubs and the drain stub already in the wall and floor.",B.ftt,120)
B.ftT=new A.M(0,-8,0)
B.dUb=new A.db("Cabinet","The cabinet under the sink where the drain is built.",B.ftT,22)
B.ftO=new A.M(0,4,-8)
B.dUc=new A.db("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",B.ftO,18)
B.aQH=new A.M(0,-0.2,5.1)
B.dUd=new A.db("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",B.aQH,5)
B.ftk=new A.M(0,11,0)
B.dUe=new A.db("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",B.ftk,16)
B.ftI=new A.M(0,40,12)
B.dUf=new A.db("Front door","Tap the door to go inside the house.",B.ftI,220)
B.w3=new A.M(0,0,0)
B.dUg=new A.db("Drywall","The wall surface. A hole is cut in it for the electrical box.",B.w3,22)
B.fvA=new A.M(60,40,50)
B.dUh=new A.db("Right wall",y.s,B.fvA,140)
B.ftn=new A.M(0,14,-3)
B.dUi=new A.db("Counter and sink","The faucet is mounted through a hole in the counter.",B.ftn,20)
B.fwJ=new A.M(0,-1.9,5)
B.dUj=new A.db("GREEN screw: GROUND","The green screw is for the bare copper ground wire.",B.fwJ,5)
B.ftM=new A.M(0,47,-2)
B.dUk=new A.db("Top and bottom plate","The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.",B.ftM,70)
B.ftg=new A.M(0,0,-8)
B.dUl=new A.db("Wall","Behind the wall the drain pipe goes down to the sewer line.",B.ftg,22)
B.ftr=new A.M(0,19,-3)
B.dUm=new A.db("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",B.ftr,14)
B.fvQ=new A.M(3.5,2,-7.2)
B.dUn=new A.db("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",B.fvQ,9)
B.fwV=new A.M(10.05,5.7,-7.5)
B.dUo=new A.db("Kitchen breaker","Protects the kitchen outlets. It is ON.",B.fwV,3.5)
B.fxy=new A.M(4,6,-2.5)
B.dUp=new A.db("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",B.fxy,9)
B.fyr=new A.M(-1,0.6,4.3)
B.dUq=new A.db("SILVER screw: NEUTRAL side",y.o,B.fyr,5)
B.a7p=new A.M(0,3.7,0)
B.dUr=new A.db("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",B.a7p,7)
B.Te=new A.M(0,-1,-0.6)
B.dUs=new A.db("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",B.Te,5)
B.fxC=new A.M(-1.5,-0.3,3.2)
B.dUt=new A.db("Black wire nut: HOT","Twist the house black wire and the fixture black wire together under this cap.",B.fxC,6)
B.fwU=new A.M(-1.9,0,-2)
B.dUu=new A.db("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",B.fwU,16)
B.fzP=new A.M(-1,-0.8,4.3)
B.dUv=new A.db("SILVER screw: NEUTRAL side",y.o,B.fzP,5)
B.fBr=new A.M(6,3,-7.8)
B.dUw=new A.db("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",B.fBr,14)
B.fzS=new A.M(1,0.6,4.3)
B.dUx=new A.db("BRASS screw: HOT side",y.u,B.fzS,5)
B.fA7=new A.M(0,-0.2,4.9)
B.dUy=new A.db("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",B.fA7,7)
B.fBL=new A.M(9.55,4.7,-7.5)
B.dUz=new A.db("Spare breaker","A spare circuit.",B.fBL,3.5)
B.ftu=new A.M(0,20,8)
B.dUA=new A.db("Vanity and counter","The cabinet that holds the sink. The pipes live inside it.",B.ftu,70)
B.fAY=new A.M(-3.2,1.3,-7.8)
B.dUB=new A.db("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",B.fAY,4.5)
B.fA8=new A.M(1.5,-0.3,3.2)
B.dUC=new A.db("Green ground connection","Join the bare copper house ground wire to the green fixture ground wire.",B.fA8,6)
B.fwN=new A.M(12,2.6,0)
B.dUD=new A.db("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",B.fwN,9)
B.fy8=new A.M(0,6.5,-7.8)
B.dUE=new A.db("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",B.fy8,16)
B.fyE=new A.M(11.2,2.3,-6)
B.dUF=new A.db("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",B.fyE,9)
B.fz9=new A.M(9.55,5.2,-7.5)
B.dUG=new A.db("Bathroom breaker","Protects the bathroom. It is ON.",B.fz9,3.5)
B.fx_=new A.M(5.2,3.9,-7.8)
B.dUH=new A.db("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",B.fx_,4.5)
B.ftJ=new A.M(0,40,-3)
B.dUI=new A.db("Electrical cable","Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.",B.ftJ,80)
B.fxn=new A.M(-8.4,1.2,-6.4)
B.dUJ=new A.db("Sofa","Just furniture, to show the size of the room.",B.fxn,10)
B.dUK=new A.db("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",B.aQH,6)
B.fwx=new A.M(0,4,-7.8)
B.dUL=new A.db("Wall","The drywall of the back wall.",B.fwx,16)
B.fB_=new A.M(0,0,0.6)
B.dUM=new A.db("Canopy","The round cover that hides the box and the wire connections against the ceiling.",B.fB_,8)
B.dUN=new A.db("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",B.w3,30)
B.a7r=new A.M(8.9,2.6,0)
B.dUO=new A.db("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",B.a7r,7)
B.fz8=new A.M(1,-0.8,4.3)
B.dUP=new A.db("BRASS screw: HOT side",y.u,B.fz8,5)
B.fwl=new A.M(0.6,1.5,-1.8)
B.dUQ=new A.db("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",B.fwl,8)
B.fwE=new A.M(9.8,5,-7.5)
B.dUR=new A.db("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",B.fwE,6)
B.fxA=new A.M(-4,6,-2.5)
B.dUS=new A.db("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",B.fxA,9)
B.bF2=new C.ae(D.ee,18,D.bc,null,null,null)
B.e0T=new C.C(D.fw,B.bF2,null)
B.e0V=new C.C(D.fw,F.alW,null)
B.e8r=new C.z(B.wz,B.w3)
B.e9F=new C.z(64,2.4)
B.ebb=new C.z("LOAD (taped)",D.dj)
B.edL=new C.z(63,-2.4)
B.eeu=new C.z(51,B.ab4)
B.bco=new C.w(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,D.t)
B.ekY=new C.z("SILVER \xb7 NEUTRAL",B.bco)
B.fB8=new A.M(-1.5,0,0)
B.el6=new C.z(B.K5,B.fB8)
B.b4Y=new C.w(1,0.8196078431372549,0.29411764705882354,0.22745098039215686,D.t)
B.emA=new C.z(52,B.b4Y)
B.b9m=new C.w(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,D.t)
B.ens=new C.z("GREEN \xb7 GROUND",B.b9m)
B.eon=new C.z("main","Main water valve")
B.adq=new C.w(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,D.t)
B.fBP=new A.M(1.5,0,0)
B.erv=new C.z(B.adq,B.fBP)
B.b6_=new C.w(1,0.6039215686274509,0.4196078431372549,0.047058823529411764,D.t)
B.etE=new C.z("BRASS \xb7 HOT",B.b6_)
B.eu6=new C.z(53,B.adq)
B.euJ=new C.bz(61,-4.6,B.rU)
B.ewr=new C.bz(62,4.6,B.ns)
B.ey3=new C.cL([0,17.1,16.4,5.8])
B.ey6=new C.cL([0,-0.1,16.4,4.2])
B.ez7=new C.cL([15.6,9,14.8,22])
B.ezb=new C.cL([-15.6,9,14.8,22])
B.eFL=new C.at(126,70)
B.ePt=new C.F(!0,D.c,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aNd=new C.F(!0,D.aJ,null,null,null,null,12,D.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eQH=new C.F(!0,D.ay,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eSe=new C.F(!0,D.c,null,null,null,null,12.5,D.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aNu=new C.F(!0,D.ad,null,null,null,null,12,D.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a6o=new C.F(!0,D.ad,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eUX=new C.F(!0,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.Il=new C.F(!0,D.aJ,null,null,null,null,12.5,D.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eVs=new C.F(!0,D.c,null,null,null,null,11.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eWU=new C.F(!0,D.fh,null,null,null,null,11.5,D.O,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eWZ=new C.F(!0,D.ey,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eY3=new C.F(!0,D.aR,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f1v=new C.F(!0,D.c,null,null,null,null,13.5,D.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f2a=new C.F(!0,D.b2,null,null,null,null,14.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ePH=new C.F(!0,D.w,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f3l=new C.x("Open the 3D lesson",null,B.ePH,null,null,null,null,null,null,null,null,null)
B.f4a=new C.x("Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.",null,E.a6f,null,null,null,null,null,null,null,null,null)
B.eQ3=new C.F(!0,null,null,null,null,null,40,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f4Y=new C.x("\ud83c\udfe0",null,B.eQ3,null,null,null,null,null,null,null,null,null)
B.f5i=new C.x("You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.",null,D.za,null,null,null,null,null,null,null,null,null)
B.f5z=new C.x("A different house",null,null,null,null,null,null,null,null,null,null,null)
B.f6p=new C.x("Start this job again",null,null,null,null,null,null,null,null,null,null,null)
B.fbe=new C.x("The customer says\u2026",null,D.dB,null,null,null,null,null,null,null,null,null)
B.fbX=new C.x("What the house needs",null,D.dB,null,null,null,null,null,null,null,null,null)
B.fc7=new C.x("Next job",null,null,null,null,null,null,null,null,null,null,null)
B.fco=new C.x("New job",null,null,null,null,null,null,null,null,null,null,null)
B.aNP=new C.F(!0,D.cr,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fcv=new C.x("Job over",null,B.aNP,null,null,null,null,null,null,null,null,null)
B.fcL=new C.x("Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.",null,D.za,null,null,null,null,null,null,null,null,null)
B.fcR=new C.x("Learn the trades",null,P.vS,null,null,null,null,null,null,null,null,null)
B.fdp=new C.x("Practice mode: no hints. You will only hear from me when something is wrong.",null,U.SA,null,null,null,null,null,null,null,null,null)
B.fdC=new C.x("New call",null,null,null,null,null,null,null,null,null,null,null)
B.fdH=new C.x("Job done! \ud83c\udf89",null,G.SD,null,null,null,null,null,null,null,null,null)
B.feQ=new C.x("Next call",null,null,null,null,null,null,null,null,null,null,null)
B.ffd=new C.x("Plug in",null,D.dB,null,null,null,null,null,null,null,null,null)
B.ffD=new C.x("Look around",null,null,null,null,null,null,null,null,null,null,null)
B.fga=new C.x("The customer wants:",null,D.a6y,null,null,null,null,null,null,null,null,null)
B.fgk=new C.x('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.',null,E.a6f,null,null,null,null,null,null,null,null,null)
B.fiK=new C.x("Call over",null,B.aNP,null,null,null,null,null,null,null,null,null)
B.fiR=new C.x("\u23cf Unplug",null,K.CF,null,null,null,null,null,null,null,null,null)
B.fj9=new C.x("A different call",null,null,null,null,null,null,null,null,null,null,null)
B.fjY=new C.x("Job complete! \ud83c\udf89",null,G.SD,null,null,null,null,null,null,null,null,null)
B.fl_=new C.x("All fixed! \ud83c\udf89",null,G.SD,null,null,null,null,null,null,null,null,null)
B.aPf=new C.x("Stay",null,null,null,null,null,null,null,null,null,null,null)
B.aPh=new C.x("A different job",null,null,null,null,null,null,null,null,null,null,null)
B.foQ=new C.x("The job",null,D.dB,null,null,null,null,null,null,null,null,null)
B.fpE=new C.x("Stay in the room",null,null,null,null,null,null,null,null,null,null,null)
B.ft9=new A.M(3.6,2.6,0.6)
B.ftb=new A.M(0,56,0.9)
B.ftd=new A.M(0,0,3)
B.a7l=new A.M(0,0,4)
B.ftf=new A.M(0,0,-1)
B.fth=new A.M(0,100,30)
B.fti=new A.M(0,114,8)
B.ftj=new A.M(0,114,-34)
B.ftl=new A.M(0,127,-13)
B.aQ3=new A.M(0,14,0)
B.ftm=new A.M(0,14,2)
B.fto=new A.M(0,16,0)
B.ftp=new A.M(0,17,0)
B.ftq=new A.M(0,19,14)
B.w4=new A.M(0,1,0)
B.fts=new A.M(0,20,0)
B.ftv=new A.M(0,22,-11)
B.ftw=new A.M(0,22,-12)
B.ftx=new A.M(0,22,-39)
B.fty=new A.M(0,23,0)
B.ftz=new A.M(0,24,0)
B.aQ4=new A.M(0,28,0)
B.ftA=new A.M(0,28,-8)
B.ftB=new A.M(0,2,18)
B.ftC=new A.M(0,30,0)
B.ftD=new A.M(0,30,60)
B.ftE=new A.M(0,31,-6)
B.ftF=new A.M(0,34,0)
B.ftG=new A.M(0,36,0)
B.ftK=new A.M(0,40,-6)
B.ftL=new A.M(0,46,0)
B.ftN=new A.M(0,48,0)
B.Tb=new A.M(0,4,-2)
B.ftP=new A.M(0,50,-10)
B.ftQ=new A.M(0,58,0)
B.ftR=new A.M(0,5,4)
B.Tc=new A.M(0,8,0)
B.aQ6=new A.M(0,9,0)
B.aQ7=new A.M(0,9,-3)
B.a7n=new A.M(0,-4,28)
B.ftS=new A.M(0,-4,-20)
B.ftV=new A.M(100,52,74)
B.ftW=new A.M(10,12,10)
B.ftX=new A.M(10,8,10)
B.ftY=new A.M(11,1,11)
B.ftZ=new A.M(120,0,70)
B.fu_=new A.M(120,40,70)
B.fu0=new A.M(120,62,70)
B.aQ8=new A.M(12,1,12)
B.fu1=new A.M(12,9,18)
B.fu2=new A.M(13,0,0)
B.fu3=new A.M(13,15,2)
B.fu4=new A.M(13,28,3)
B.fu5=new A.M(0,0.52,2.35)
B.fu6=new A.M(14,17,4)
B.fu7=new A.M(14,20,-28)
B.fu9=new A.M(16,10,10)
B.fua=new A.M(16,16,16)
B.fub=new A.M(18,18,14)
B.fuc=new A.M(18,22,2)
B.fud=new A.M(18,28,16)
B.fue=new A.M(18,2,18)
B.fuf=new A.M(18,9,11)
B.fug=new A.M(19,13,7)
B.fuh=new A.M(70,0.6,50)
B.fui=new A.M(0,3,-6.5)
B.fuj=new A.M(-4.6,1.5,-3.6)
B.fuk=new A.M(0,-13.5,-1.5)
B.ful=new A.M(4,10,3.5)
B.fum=new A.M(24,5,0.3)
B.Td=new A.M(1,0,0)
B.fun=new A.M(1,26,14)
B.fuo=new A.M(1,28,14)
B.fuq=new A.M(1,0.9,0.06)
B.fur=new A.M(77,41,0.3)
B.fut=new A.M(1.6,15,1.6)
B.aQ9=new A.M(20,14,7)
B.fuu=new A.M(22,14,0)
B.fuv=new A.M(22,14,2)
B.fuw=new A.M(22,3,10)
B.fux=new A.M(240,100,40)
B.aQa=new A.M(24,6,14)
B.fuy=new A.M(260,3,56)
B.fuz=new A.M(262,3,5)
B.aQb=new A.M(26,4,22)
B.fuA=new A.M(26,72,26)
B.fuB=new A.M(26,-34,96)
B.fuD=new A.M(-0.1,0,0)
B.fuE=new A.M(2,13,2)
B.aQc=new A.M(2,23,12)
B.aQd=new A.M(2,28,22)
B.fuG=new A.M(64,10,-1.4)
B.fuH=new A.M(19.6,0,-1.5)
B.fuI=new A.M(244,6,1.4)
B.aQe=new A.M(0,56,1.3)
B.fuJ=new A.M(30,16,30)
B.aQf=new A.M(30,16,72)
B.fuK=new A.M(30,24,8)
B.fuL=new A.M(30,28,18)
B.fuN=new A.M(32,2,20)
B.fuO=new A.M(33,11,10)
B.fuP=new A.M(34,0,150)
B.fuQ=new A.M(34,30,1)
B.fuR=new A.M(34,30,150)
B.fuS=new A.M(34,33,150)
B.fuT=new A.M(-1,-1.7,2.3)
B.fuU=new A.M(36,30,1)
B.fuV=new A.M(36,60,12)
B.fuW=new A.M(37,16,0)
B.fuX=new A.M(-0.2,-0.3,-0.4)
B.fuY=new A.M(0,48.6,55)
B.fv_=new A.M(3,22,2)
B.fv0=new A.M(3,26,3)
B.a7o=new A.M(3,3,3)
B.fv1=new A.M(3,5,3)
B.fv3=new A.M(40,1,14)
B.fv4=new A.M(40,28,1)
B.fv5=new A.M(40,2,24)
B.fv6=new A.M(44,2,14)
B.fv7=new A.M(44,4,14)
B.fv8=new A.M(44,72,20)
B.fv9=new A.M(0.9,0,4.4)
B.fva=new A.M(8.2,1.9,-7.55)
B.fvb=new A.M(46,26,2)
B.fvc=new A.M(48,2,24)
B.fvd=new A.M(0,41,11.6)
B.fve=new A.M(0,-47.25,-2.25)
B.fvf=new A.M(0.6,68,0.4)
B.fvg=new A.M(0,1.59,0.14)
B.fvh=new A.M(25,79,1.4)
B.fvi=new A.M(1,0,-1.2)
B.fvj=new A.M(50,30,26)
B.fvk=new A.M(52,2,28)
B.fvl=new A.M(14,14,0.3)
B.fvm=new A.M(54,5,18)
B.fvn=new A.M(56,18,18)
B.fvo=new A.M(56,2,36)
B.fvp=new A.M(58,9,74)
B.fvq=new A.M(0,-0.8,0.9)
B.fvr=new A.M(11.9,0,-8)
B.aQh=new A.M(1.6,1.6,0.4)
B.fvt=new A.M(0.16,0.32,0.07)
B.aQi=new A.M(5,12,26)
B.fvu=new A.M(5,1,2)
B.fvv=new A.M(5,9,8)
B.fvw=new A.M(0,14.3,-1.5)
B.aQj=new A.M(-13,8.6,-9.5)
B.fvx=new A.M(60,12,80)
B.fvy=new A.M(60,30,26)
B.fvz=new A.M(60,30,3)
B.fvB=new A.M(62,18,20)
B.fvC=new A.M(62,22,6)
B.fvD=new A.M(62,2,28)
B.fvE=new A.M(64,10,0)
B.fvG=new A.M(34,84,1.2)
B.aQk=new A.M(6,14,20)
B.aQl=new A.M(6,14,32)
B.fvI=new A.M(6,4,4)
B.fvK=new A.M(0,-0.2,0.14)
B.fvM=new A.M(0.3,38,2)
B.fvN=new A.M(72,-17,70)
B.fvO=new A.M(12,5,0.4)
B.fvP=new A.M(1.6,1.7,3.6)
B.fvR=new A.M(-72.8,0,55)
B.fvT=new A.M(25,79,0.2)
B.fvU=new A.M(7,0,-8)
B.fvV=new A.M(7,2,7)
B.aQm=new A.M(7,3,0)
B.fvW=new A.M(7,8,3)
B.fvY=new A.M(0,11,9.2)
B.fvZ=new A.M(-3.2,1.3,-7.82)
B.fw_=new A.M(80,16,32)
B.fw0=new A.M(80,26,8)
B.aQn=new A.M(147,1.5,3.5)
B.fw1=new A.M(82,46,3)
B.aQo=new A.M(-6.5,6.9,-3)
B.fw2=new A.M(8,40,12.6)
B.fw3=new A.M(0,-48.6,55)
B.fw4=new A.M(5.5,8.5,3)
B.fw5=new A.M(2.6,2.6,1.8)
B.fw6=new A.M(0,0,0.26)
B.fw7=new A.M(420,1.2,320)
B.fw8=new A.M(8,2,6)
B.aQp=new A.M(8,2,8)
B.fw9=new A.M(8,4,4)
B.fwa=new A.M(8,9,8)
B.fwb=new A.M(15,19,0.5)
B.fwc=new A.M(0,3,10.5)
B.fwd=new A.M(0.4,0.38,0.12)
B.fwe=new A.M(0,0,-0.43)
B.aQq=new A.M(11.2,4.5,-6)
B.aQr=new A.M(1.2,96,112)
B.aQs=new A.M(0.08,3.8,2.4)
B.fwf=new A.M(9,5,9)
B.fwg=new A.M(0,58,12.4)
B.fwh=new A.M(1.5,1.3,0.6)
B.fwj=new A.M(0,-1.78,0.27)
B.fwk=new A.M(0,0.62,0)
B.fwn=new A.M(20,11.5,0)
B.fwo=new A.M(3.2,0.12,-6.7)
B.fwp=new A.M(12,0,-8.1)
B.fwr=new A.M(1.25,0.28,0.1)
B.fws=new A.M(0,36,10.2)
B.fwt=new A.M(24,0.08,16)
B.fwv=new A.M(0,4,-7.9)
B.fww=new A.M(11.9,0,8)
B.fwy=new A.M(21,1.4,8)
B.fwA=new A.M(71.2,46.6,55)
B.fwB=new A.M(3,3.28,-7.2)
B.fwC=new A.M(-6.1,1.2,-6.4)
B.fwD=new A.M(1.4,26,0.4)
B.fwF=new A.M(2.8,3.4,2.4)
B.fwG=new A.M(0,-45.5,0.5)
B.fwH=new A.M(1.8,4,1)
B.fwI=new A.M(5,1.6,0.5)
B.fwK=new A.M(0.1,-2,2.4)
B.fwL=new A.M(0,0.2,2.8)
B.fwM=new A.M(6,10,1.4)
B.fwO=new A.M(43,23,0.3)
B.fwP=new A.M(18.9,2.6,0)
B.fwQ=new A.M(-12,0,-8.1)
B.fwR=new A.M(11.8,4,0)
B.aQt=new A.M(-71.7,6,55)
B.fwT=new A.M(5.6,0.3,1.9)
B.fwW=new A.M(52,8,0.4)
B.fwX=new A.M(4.6,7.6,3)
B.fwY=new A.M(-1,0,-1.2)
B.fwZ=new A.M(0,1.7,0)
B.fx0=new A.M(-1,0,1.5)
B.fx1=new A.M(5,8,0.4)
B.fx2=new A.M(5,2.2,0.8)
B.fx3=new A.M(0.18,0.12,0.08)
B.fx4=new A.M(147,3,1.4)
B.fx5=new A.M(4,16.2,0)
B.fx6=new A.M(10,15,0.5)
B.fx7=new A.M(144,5,0.7)
B.fx8=new A.M(0,34,1.1)
B.fx9=new A.M(1.2,-1.7,2.3)
B.fxb=new A.M(0.82,1.7,0.3)
B.fxc=new A.M(-0.12,0,0)
B.fxe=new A.M(3.5,94,0.2)
B.fxf=new A.M(1.1,2.05,0.04)
B.fxg=new A.M(25,79,1.2)
B.fxh=new A.M(10,14,0.5)
B.fxi=new A.M(5,8,0.5)
B.fxj=new A.M(-20,11.5,0)
B.fxk=new A.M(0,-0.5,0.6)
B.fxl=new A.M(28,80,1.4)
B.fxm=new A.M(46,0.2,170)
B.fxo=new A.M(0,3.4,0.8)
B.fxq=new A.M(-0.85,4,-3.2)
B.fxs=new A.M(40,7.2,1.2)
B.aQu=new A.M(0.42,0.34,0.12)
B.fxt=new A.M(1.7,0.08,1.2)
B.fxu=new A.M(1.2,24,0.4)
B.fxv=new A.M(0,0,0.38)
B.fxx=new A.M(5.2,3.9,-7.76)
B.fxz=new A.M(0.07,0.3,0.03)
B.fxB=new A.M(22,0.2,130)
B.fxD=new A.M(20,1.4,8)
B.fxE=new A.M(0,-0.2,0.19)
B.fxG=new A.M(1.2,49,36)
B.fxH=new A.M(0,9.3,0)
B.fxJ=new A.M(-120.5,108,-10)
B.fxK=new A.M(0,40,0.95)
B.fxM=new A.M(0,-1.9,-1.2)
B.fxN=new A.M(-3.2,1.15,-7.78)
B.fxO=new A.M(0,-3.4,1.2)
B.fxP=new A.M(64,10,0.2)
B.fxQ=new A.M(0,-1.78,0.53)
B.aQv=new A.M(-6.5,7.4,-3)
B.fxR=new A.M(-4.6,-2,1.2)
B.fxT=new A.M(0,40,1.4)
B.fxU=new A.M(-3,36,10.6)
B.fxV=new A.M(0,14.5,-1.5)
B.fxW=new A.M(0,0.2,0)
B.fxY=new A.M(160,1.2,120)
B.fxZ=new A.M(7,40,2.4)
B.fy_=new A.M(30,26,0.6)
B.fy0=new A.M(3.4,3.25,-7.85)
B.fy1=new A.M(72.8,0,55)
B.fy2=new A.M(0.5,62,30)
B.fy3=new A.M(3,1.55,-7.1)
B.fy4=new A.M(0.4,3,3)
B.aQy=new A.M(0,-0.1,0.1)
B.fy5=new A.M(0,0,0.04)
B.fy6=new A.M(2.4,11.6,-3.6)
B.fy7=new A.M(4,11,3.5)
B.fy9=new A.M(5,8.6,-2.25)
B.fya=new A.M(0,22,12.4)
B.fyb=new A.M(0,-1.78,0.3)
B.fyc=new A.M(2.2,2.2,1.8)
B.fyd=new A.M(0,1.9,-1.2)
B.fye=new A.M(0,56,2.1)
B.fyf=new A.M(0.26,0.04,0.02)
B.fyg=new A.M(-2.4,11.6,-3.6)
B.fyh=new A.M(11.25,0,-2.25)
B.fyi=new A.M(1,-1.8,2.4)
B.fyj=new A.M(-11.8,4,0)
B.fyk=new A.M(11.2,4.7,-6)
B.fyl=new A.M(24,8,0.05)
B.fyn=new A.M(0.12,0,0)
B.fyo=new A.M(1.1,1.1,0.03)
B.fyp=new A.M(20,1.2,0.4)
B.fyq=new A.M(3.4,3.55,-7.85)
B.fys=new A.M(0,0.05,110)
B.fyt=new A.M(71.6,-22,62)
B.aQz=new A.M(1.5,18,3.5)
B.fyw=new A.M(3.5,3.1,-7.15)
B.fyx=new A.M(-0.28,0.55,-0.8)
B.fyy=new A.M(0,-0.2,0.24000000000000002)
B.aQA=new A.M(20,26,0.3)
B.fyA=new A.M(1,-0.2,0.14)
B.fyB=new A.M(-1.9,0,-2.25)
B.fyC=new A.M(0,-0.9,1.1)
B.fyD=new A.M(8.2,1.05,-6.7)
B.fyG=new A.M(0.07,0.4,0.03)
B.fyH=new A.M(2,3.8,0.08)
B.fyI=new A.M(31,83,0.9)
B.fyJ=new A.M(64,40,-3.2)
B.aQB=new A.M(1.4,3,112)
B.fyK=new A.M(0,46.6,0.8)
B.fyM=new A.M(0,0,-8.8)
B.fyN=new A.M(0,0.7,-1)
B.fyQ=new A.M(-11.9,0,8)
B.fyR=new A.M(7,0,1.5)
B.fyS=new A.M(-90,0.05,130)
B.fyT=new A.M(-8.4,0.7,-6.4)
B.fyU=new A.M(-3.2,1.45,-7.78)
B.fyV=new A.M(0,41,0.45)
B.fyW=new A.M(-6.575,0,-0.25)
B.fyY=new A.M(0,14.6,-1.5)
B.aQD=new A.M(0,0,-2.3)
B.a7q=new A.M(-13,12.5,0)
B.fz_=new A.M(0,0,0.62)
B.fz0=new A.M(0.2,-0.3,-0.4)
B.aQE=new A.M(10.85,18,0.5)
B.fz1=new A.M(0.6,70,0.6)
B.fz2=new A.M(1.4,1.3,0.02)
B.fz3=new A.M(30,1.4,0.4)
B.fz4=new A.M(6.3,1.5,-7.2)
B.aQF=new A.M(0,0.62,2.85)
B.aQG=new A.M(0.05,8,16)
B.fz5=new A.M(0,-1.2,5)
B.fz7=new A.M(0.2,-2,2.6)
B.fza=new A.M(11.2,2.4,-5.18)
B.fzc=new A.M(-1,-0.2,0.14)
B.fzd=new A.M(1.2,1.2,0.3)
B.aQI=new A.M(2,0.08,2.4)
B.fzf=new A.M(9.5,13.5,1.4)
B.fzg=new A.M(-0.32,0,0.5)
B.fzi=new A.M(0.8,0.55,0.05)
B.fzj=new A.M(0.14,0.35,17)
B.fzk=new A.M(1.4,2.4,0.3)
B.fzl=new A.M(0,11,8.2)
B.fzm=new A.M(0,24,-0.6)
B.fzn=new A.M(40,1.6,14)
B.fzq=new A.M(0,42,10.6)
B.fzr=new A.M(0,1.95,0.31)
B.fzs=new A.M(150,1.2,112)
B.aQJ=new A.M(0.75,4.5,0.1)
B.fzu=new A.M(0.12,0,0.05)
B.fzw=new A.M(9,1.2,9)
B.fzx=new A.M(0,-0.5,0)
B.fzA=new A.M(5.5,8.5,0.5)
B.aQK=new A.M(0.05,8,9.6)
B.fzC=new A.M(1.5,94,3.5)
B.fzD=new A.M(0,8.2,0)
B.fzF=new A.M(4,94,0.4)
B.aQL=new A.M(1.4,8,1)
B.fzG=new A.M(3.7,1.2,-7.1)
B.fzH=new A.M(8.2,0.05,-6.7)
B.fzI=new A.M(0,-0.3,0)
B.fzJ=new A.M(6.575,0,-0.25)
B.aQM=new A.M(0,1.8,0)
B.fzK=new A.M(3,3.21,-7.2)
B.fzM=new A.M(9.8,5,-7.75)
B.fzN=new A.M(1.5,3.5,112)
B.fzO=new A.M(3,1.85,-7.1)
B.a7s=new A.M(13,12.5,0)
B.fzT=new A.M(0.34,0.66,0.9)
B.fzV=new A.M(12,0.4,6)
B.fzW=new A.M(-6.5,7.9,-3)
B.fzX=new A.M(0,13.6,-1.5)
B.fzY=new A.M(1.5,1.5,0.05)
B.fzZ=new A.M(-6.5,5,-3)
B.fA_=new A.M(58.4,1.6,50)
B.fA0=new A.M(0.02,0.28,0.05)
B.fA1=new A.M(0,0.7,1)
B.aQO=new A.M(13,8.6,9.5)
B.fA2=new A.M(-3.6,4,-7.76)
B.fA3=new A.M(0.82,0.9,0.05)
B.fA4=new A.M(0,-5.5,-0.25)
B.fA9=new A.M(1.9,0,0)
B.fAa=new A.M(0.45,0.72,0.06)
B.fAc=new A.M(14,0.4,7)
B.fAd=new A.M(64,24,-3.2)
B.fAe=new A.M(0,9.2,0)
B.fAf=new A.M(0,0.03,0)
B.fAg=new A.M(-13,15,2)
B.fAh=new A.M(-14,17,4)
B.fAi=new A.M(-14,20,-28)
B.fAj=new A.M(-1,0,-8)
B.fAk=new A.M(-22,14,0)
B.fAm=new A.M(-37,16,0)
B.fAn=new A.M(-42,-34,96)
B.fAo=new A.M(0,-0.6,22)
B.aQP=new A.M(-4,20,8)
B.fAq=new A.M(-72,6,55)
B.fAr=new A.M(-8,-28,104)
B.fAs=new A.M(-8,-39,96)
B.fAt=new A.M(0,0.35,0.78)
B.fAu=new A.M(-11.9,0,-8)
B.fAv=new A.M(38,1.4,12)
B.fAw=new A.M(25,0.5,66)
B.fAx=new A.M(-8.4,1.9,-7.2)
B.fAz=new A.M(0,-0.6,100)
B.aQQ=new A.M(1.25,1,0.1)
B.fAA=new A.M(11.2,0,-6)
B.fAB=new A.M(1.2,1.1,0.8)
B.fAD=new A.M(150,49,1.2)
B.fAE=new A.M(62,0.2,42)
B.fAF=new A.M(4.6,1.5,-3.6)
B.fAG=new A.M(0,-0.7,0.8)
B.fAH=new A.M(8.9,1.9,0.9)
B.fAI=new A.M(0,-1.55,-0.6)
B.fAJ=new A.M(1.78,4.25,0.08)
B.fAK=new A.M(27,0.6,19)
B.fAL=new A.M(0,5.5,-0.25)
B.fAM=new A.M(0,0.7,0)
B.fAN=new A.M(-1.2,-1.6,2.2)
B.fAO=new A.M(11,25,0.3)
B.aQR=new A.M(13,8.6,-9.5)
B.aQS=new A.M(0.05,0.12,0.03)
B.aQT=new A.M(8.2,0.95,-6.7)
B.fAP=new A.M(40,1.2,22)
B.fAQ=new A.M(0.7,1.5,-7.2)
B.fAR=new A.M(0,15.3,-3.6)
B.fAS=new A.M(120.5,108,-10)
B.fAT=new A.M(0.1,0,0)
B.fAU=new A.M(0.32,0,0.5)
B.fAW=new A.M(-0.9,0,4.4)
B.fAX=new A.M(-6.5,7.2,-3)
B.fAZ=new A.M(6.2,0.18,2.1)
B.fB0=new A.M(36,1.6,12)
B.fB1=new A.M(15.5,2.6,0)
B.fB3=new A.M(-8,-47.8,70)
B.fB4=new A.M(14,1.5,3.5)
B.aQU=new A.M(17,24,0.3)
B.fB5=new A.M(5.2,3.9,-7.82)
B.fB6=new A.M(0,0.7,2.4)
B.fB7=new A.M(0,0.3,0)
B.aQV=new A.M(2.3,7,0.5)
B.aQW=new A.M(-13,8.6,9.5)
B.fBb=new A.M(0,-1.99,0.14)
B.fBc=new A.M(0.4,36,34)
B.fBe=new A.M(4.6,-2,1.2)
B.aQX=new A.M(0,0,-2.4)
B.fBf=new A.M(0,-1.78,0.52)
B.fBg=new A.M(0.12,0.1,0.03)
B.fBh=new A.M(9.8,5,-7.58)
B.aQY=new A.M(0.5,1.4,2)
B.fBi=new A.M(3.5,0.15,-7.2)
B.fBj=new A.M(1.2,26.4,20)
B.fBk=new A.M(-3.6,4,-7.82)
B.fBl=new A.M(0.3,2,36)
B.fBn=new A.M(24,0.8,6.5)
B.fBp=new A.M(22,0.5,5)
B.fBq=new A.M(0,22,2.1)
B.fBt=new A.M(0,56,0.5)
B.fBu=new A.M(150,1.2,70)
B.fBv=new A.M(-19.5,-1,-1.5)
B.fBw=new A.M(80,0.5,60)
B.fBx=new A.M(6.85,4,-3.2)
B.fBy=new A.M(20,24,0.6)
B.fBz=new A.M(24,28,1.2)
B.aR_=new A.M(0.12,3,1.9)
B.fBA=new A.M(0.06,0.62,0.8)
B.fBB=new A.M(0,18.5,0)
B.fBD=new A.M(9.55,5.7,-7.5)
B.fBF=new A.M(0.8,2.4,0.3)
B.aR0=new A.M(0,0.7,2)
B.aR1=new A.M(1.5,16,40)
B.fBG=new A.M(0,47.25,-2.25)
B.fBH=new A.M(0.5,0.5,0.04)
B.fBI=new A.M(12.5,39,0.6)
B.fBJ=new A.M(0,3,0.9)
B.fBK=new A.M(3,36,10.6)
B.fBM=new A.M(0.14,8,0.3)
B.fBN=new A.M(1.9,0.05,1.35)
B.fBQ=new A.M(0.6,0.12,0.03)
B.fBR=new A.M(-10.7,1.2,-6.4)
B.fBS=new A.M(-71.2,46.6,55)
B.fCp=new A.BL("noGround","It works, but there is no ground wire. Without a ground nothing protects you if an appliance fails.",!0,!1,!1)
B.fCq=new A.BL("short","A hot wire touched the ground. That is a short circuit: huge current, sparks and fire. The breaker slams off.",!1,!0,!0)
B.fCr=new A.BL("reversed","Hot and neutral are swapped (reversed polarity). Things still run, but the metal part of a lamp or appliance is live. That can shock someone. Black goes on brass, white on silver.",!0,!1,!1)
B.fCs=new A.BL("dead","The hot wire is not connected to the right place, so nothing gets power. The device is dead.",!1,!1,!1)
B.fCt=new A.BL("ok","Wired correctly. Hot, neutral and ground are all in the right place.",!0,!1,!1)
B.fCu=new A.BL("bonded","The neutral and the ground were joined. A GFCI or the breaker may trip for no reason, and current can flow where it should not.",!0,!0,!1)
B.fCv=new A.BL("openNeutral","The neutral wire is not connected. Nothing runs, but the hot wire is still connected, so the slots can still be live. That is dangerous.",!1,!1,!1)
B.fCw=new A.BL("dead","The wires are on the taped LOAD screws, so no power reaches the outlet. Power comes in on LINE.",!1,!1,!1)
B.fCx=new A.BL("short","The hot and the neutral were joined together. That is a short circuit: a bang, sparks and a tripped breaker.",!1,!0,!0)
B.aRJ=new A.ayc(null)
B.fFe=new A.az5(null)
B.aSf=new A.aDU(null)})();(function staticFields(){$.aTw=null})();(function lazyInitializers(){var w=a.lazyFinal
w($,"i9U","hjQ",()=>C.a([A.aSg("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",B.PD,B.da7,"outlet",B.cIJ,"Wall outlet",new A.flw()),A.aSg("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",B.cWj,B.cJk,"switch",B.cHj,"Light switch",new A.flx()),A.aSg("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",B.PD,B.cQs,"gfci",B.cYX,"GFCI outlet",new A.fly()),A.aSg("Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.",B.PD,B.cHr,"light",B.d9e,"Ceiling light",new A.flz()),A.aSg("A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.",B.PD,B.cHs,"fan",B.cOb,"Ceiling fan",new A.flA())],C.ax("O<a3h>")))
w($,"ia4","Ga",()=>{var v,u=C.a([],x.n)
for(v=0;v<10;++v)u.push(-72+16*v)
return u})})()};
(a=>{a["fy8ID1BafkQeTQ+fdCMho+aHXnE="]=a.current})($__dart_deferred_initializers__);