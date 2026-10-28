((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,G,N,O,P,Q,V,W,X,I,Y,Z,R,S,T,A_,A0,A1,K,A={
zC(d,e,f){var w=d.a,v=d.b,u=d.c
return new A.K(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
bBp(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new A.K(u*w+t*v,d.b,-u*v+t*w)},
G9(d,e,f,g){var w,v,u,t,s,r,q,p,o=new A.fIU(Math.cos(e),Math.sin(e)),n=new A.fIS(f),m=new A.fIT(n,e,o,g),l=new A.fIR(n,e,o),k=C.a([],x.z)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.L)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.L)(r),++p)s.push(m.$1(r[p]))
k.push(new A.qm(s,l.$1(t.b),t.c,t.d,t.e,t.f,t.r,t.w,t.x))}return k},
G5(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(d.length<3)return d
w=C.a([D.d.gL(d)],x.o)
for(v=1;u=v+1,u<d.length;v=u){t=d[v-1]
s=d[v]
r=d[u]
q=s.a
p=s.b
o=s.c
n=new A.K(q-t.a,p-t.b,o-t.c)
m=new A.K(r.a-q,r.b-p,r.c-o)
l=Math.min(e,n.gT1()*0.5)
k=Math.min(e,m.gT1()*0.5)
j=n.gpD(0)
i=new A.K(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.gpD(0)
h=new A.K(q+j.a*k,p+j.b*k,o+j.c*k)
for(g=0;g<=a0;++g){f=g/a0
w.push(A.zC(A.zC(i,s,f),A.zC(s,h,f),f))}}w.push(D.d.gal(d))
return w},
ags(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if(a3.length<3)return a3
w=C.a([],x.o)
for(v=0;u=v+1,t=a3.length,u<t;v=u){s=v===0?a3[v]:a3[v-1]
r=a3[v]
q=a3[u]
p=v+2
o=p<t?a3[p]:q
for(t=s.a,p=r.a,n=q.a,m=o.a,l=s.b,k=r.b,j=q.b,i=o.b,h=s.c,g=r.c,f=q.c,e=o.c,d=0;d<a4;++d){a0=d/a4
a1=a0*a0
a2=new A.fIL(a0,a1,a1*a0)
w.push(new A.K(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(D.d.gal(a3))
return w},
hHq(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=!0,u=!0,t=0;t<w;++t)if(d[t].c>=0.5)u=!1
else v=!1
if(v)return d
if(u)return B.d0h
s=C.a([],x.o)
for(r=0;w=d.length,r<w;){q=d[r];++r
p=d[r%w]
w=q.c
o=w>=0.5
n=p.c
if(o)s.push(q)
if(o!==n>=0.5)s.push(A.zC(q,p,(0.5-w)/(n-w)))}return s},
hId(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a5[0],a1=a0.a,a2=a0.b
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
K:function K(d,e,f){this.a=d
this.b=e
this.c=f},
qm:function qm(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
da:function da(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ub:function ub(d,e,f){this.a=d
this.b=e
this.c=f},
zk:function zk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wv:function Wv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.f=g},
l4:function l4(d){var _=this
_.a=d
_.c=_.b=0
_.d=1
_.e=0},
bUG:function bUG(d,e){this.a=d
this.b=e},
bUH:function bUH(d){this.a=d},
bUF:function bUF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bUI:function bUI(d,e,f){this.a=d
this.b=e
this.c=f},
bUE:function bUE(d,e){this.a=d
this.b=e},
bUJ:function bUJ(d,e,f){this.a=d
this.b=e
this.c=f},
fIU:function fIU(d,e){this.a=d
this.b=e},
fIS:function fIS(d){this.a=d},
fIT:function fIT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fIR:function fIR(d,e,f){this.a=d
this.b=e
this.c=f},
fIL:function fIL(d,e,f){this.a=d
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
bOM:function bOM(d){this.a=d},
b3x:function b3x(d,e,f,g,h,i,j,k,l){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.a=l},
cl7:function cl7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cl8:function cl8(d,e){this.a=d
this.b=e},
cl4:function cl4(){},
cl5:function cl5(d,e,f){this.a=d
this.b=e
this.c=f},
cl6:function cl6(){},
J9:function J9(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
atc:function atc(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
boB:function boB(d,e,f,g,h){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=40
_.bq$=g
_.a7$=h
_.c=_.a=null},
eQz:function eQz(d){this.a=d},
eQy:function eQy(d){this.a=d},
eQv:function eQv(d){this.a=d},
eQw:function eQw(d){this.a=d},
eQx:function eQx(d){this.a=d},
aLm:function aLm(){},
aSl(d,e,f,g,h,i,j){return new A.a3o(g,i,h,e,f,j)},
Ac(d){return D.d.ix($.hl8(),new A.flN(d))},
bBO(d,e){var w,v,u=d.e,t=new C.J(u,new A.fJ8(),C.T(u).k("J<1,n>")).fG(0)
u=e.b
w=C.a3(u).k("bc<2>")
v=C.d9(new C.bc(u,w),w.k("H.E"))
return t.d9(0,v.gkO(v))},
hh3(d,e,f,g,h){var w,v
if(e.a&&e.c===0){if(e.r)return"SHOCK! The breaker was still ON and you touched a live wire. Always turn the power OFF and test the wires first."
return"STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly."}if(e.c!==0)return"The device is already in the box. Pull it out again to change the wires."
if(!e.r&&!h&&!g.c.t(0,f))return d.r.$2(f,g)
w=e.b
v=g.a
if(w.h(0,v)!=null)return"That place already has a wire. Tap the wire to take it off first."
if(new C.bc(w,C.a3(w).k("bc<2>")).t(0,f))return"That wire is already fastened. Tap it to take it off if you want to move it."
w.n(0,v,f)
return null},
afe(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=new A.flT(b1),b0=new A.flR(b1)
for(w=b2.b,w=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gah(0),v=0,u=0,t=0,s=0,r=0,q=0,p=0,o=0,n=0,m=0;w.C();){l=w.d
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
a6=new C.a2(w,new A.flP(),h).gM(0)
a7=new C.a2(w,new A.flQ(),h).gM(0)
if(t>0||o>0)return B.fDs
w=u>0
if(!(w&&s>0))h=r>0&&v>0
else h=!0
if(h)return B.fDz
if(w&&r>0)return B.fDt
if(q>0||n>0)return B.fDw
if(m>0&&v<a6)return B.fDy
if(v<a6)return B.fDu
if(a7>0&&s<a7)return B.fDx
if(p===0)return B.fDr
return B.fDv},
bxn(d,e){var w
if(d==="light"||d==="fan")w=e.c===0?6.4:0.6
else w=e.c===0?4.7:-0.25
return w},
bzw(d,e,f){var w,v
if(d==="light"||d==="fan"){w=A.bxn(d,f)
v=f.c===0?w-3.2:w
switch(e){case 51:return new A.K(-1.5,-0.3,v)
case 52:return new A.K(0,-0.3,v)
default:return new A.K(1.5,-0.3,v)}}w=A.bxn(d,f)
switch(e){case 21:return new A.K(0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 22:return new A.K(0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
case 23:return new A.K(-0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 24:return new A.K(-0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
default:return new A.K(0,-1.98,w+0.52)}},
fSl(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=C.a([],x.z),a6=new A.l4(a5),a7=a9.a,a8=a7==="light"||a7==="fan"
if(b1){a6.b=1
a6.j1(B.fzP,B.aQP,B.uF,3)
a6.j1(B.fAD,B.aQP,B.uF,3)
a6.j1(B.fBI,B.aR5,B.uF,2)
a6.j1(B.fB_,B.aR5,B.uF,2)
a6.b=2
a6.qb(B.fzt,B.aQK,B.m1,0.05,3)
a6.qb(B.fz5,B.aQK,B.m1,0.05,3)
a6.qb(B.fyY,B.fC2,B.m1,0.05,2)}w=A.h80(a6,a7,!0)
v=new A.fjU(a6,b0,a7,a8)
u=D.d.gL(w)
t=a7==="switch"
if(t){s=D.d.gal(w)
v.$5(10,u.ae(0,B.fvi),B.fBK,"blackLine",B.Ka)
v.$5(13,s.ae(0,B.fBQ),B.fxR,"blackLoad",B.Ka)
v.$5(12,u.ae(0,B.fAo),B.fxp,"ground",B.wU)
a6.b=6
r=x.o
a6.jN(C.a([u.ae(0,B.aQJ),B.fvC,B.Tl],r),0.075,B.wD,!1,0.3,8)
a6.jN(C.a([s.ae(0,B.aQJ),B.fzU,B.Tl],r),0.075,B.wD,!1,0.3,8)
a6.Ka(B.Tl,B.fBF,0.28,B.abg,0.18,0.3,10)}else{v.$5(10,u.ae(0,B.fxU),B.fvy,"black",B.Ka)
v.$5(11,u.ae(0,B.fyU),B.fA0,"white",B.wD)
v.$5(12,u.ae(0,B.fzb),B.fz6,"ground",B.wU)}if(a8)A.h9_(a6,a7,b0)
else A.h8F(a6,a7,A.bxn(a7,b0),b0.w,!1)
if(b0.e&&b0.c===0){a6.b=0
a6.d=0.5
for(r=a9.f,q=r.length,p=0;p<q;++p){o=r[p]
n=A.bzw(a7,o.a,b0)
if(o.e)m=D.cp
else{l=o.f
if(l==="ground")m=D.bn
else{l=l==="neutral"?D.c:B.Vx
m=l}}if(a8)l=0
else{l=n.a
if(l>0.4)l=0.12
else l=l<-0.4?-0.12:0}if(a8)k=0.6
else k=Math.abs(n.a)<0.4?0.2:0
a6.iM(new A.K(n.a+l,n.b+0,n.c+k),0.36,m,4,8,0.1)}a6.d=1}if(b0.c>=2&&!a8)A.hb1(a6,b0.w)
r=!1
if(b0.c>=2)if(b0.d)r=a7==="outlet"||a7==="gfci"
if(r)A.hPJ(a6,b0.a&&!b0.w)
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
g=A.bxn(a7,b0)
e=q?"Ceiling fan":"Ceiling light"
q=q?"The motor housing with blades. It has three wires: black (motor), white (neutral) and green (ground).":"The light fixture with a frosted dome. It has three wires: black, white and green."
d=C.E([1,B.dUB,2,B.dUP,3,new A.da(r,"A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling."+l,new A.K(0,0,-1.2),9),4,new A.da(k,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new A.K(-0.4,1.5,-1.8),8),5,B.dVa,10,new A.da("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. "+j,new A.K(-0.8,-0.8,1.2),7),13,B.dUn,11,new A.da("White wire: neutral","The neutral wire carries the power back to the panel. "+i,new A.K(0,-0.8,1.2),7),12,new A.da("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. "+h,new A.K(0.5,-0.8,1.2),7),6,B.dUN,20,new A.da(f,t,new A.K(0,-0.2,g),9),21,B.dUS,22,B.dV9,23,B.dUL,24,B.dUQ,25,B.dUE,26,B.dUT,27,B.dV4,28,B.dUy,30,B.dUi,31,B.dUg,51,B.dUO,52,B.dUk,53,B.dUX,54,new A.da(e,q,new A.K(0,0,6.4),9),55,B.dV6],x.S,x.q)
a0=C.a([],x.E)
if(b0.f&&b0.c===0)for(t=a9.f,r=t.length,p=0;p<r;++p){o=t[p]
n=A.bzw(a7,o.a,b0)
a1=o.f
A:{q="hot"===a1
if(q){l=B.euc
break A}if("neutral"===a1){l=B.elr
break A}if("ground"===a1){l=B.enX
break A}l=B.ebC
break A}a2=l.a
if(a8){B:{if(q){k="BLACK NUT \xb7 HOT"
break B}if("neutral"===a1){k="WHITE NUT \xb7 NEUTRAL"
break B}k="GROUND"
break B}a3=k}else a3=a2
if(a8){C:{if(q){q=B.fyD
break C}if("neutral"===a1){q=B.fyz
break C}q=B.fCc
break C}a4=q}else{q=n.a
if(q>0.4)k=3.8
else k=q<-0.4?-4.2:0
a4=new A.K(k,Math.abs(q)<0.4?-3:-0.4,1)}a0.push(new A.ub(new A.K(n.a+a4.a,n.b+a4.b,n.c+a4.c),a3,l.b))}if(b0.a&&b0.c===0)a0.push(B.bOx)
return new A.zk(a5,d,a0,B.vw)},
h80(d,e,f){var w,v,u=e==="light"||e==="fan"
d.b=3
if(u){d.e6(B.aR7,B.aQO,2.2,B.wT,0.3,18)
d.a2H(B.aQO,B.jh,2.2,B.wT,!1,!0,0.3,18)}else{d.bS(B.aR7,B.fzz,B.wT,0.3)
d.bS(B.fxF,B.aQC,B.wT,0.3)
d.bS(B.fw0,B.aQC,B.wT,0.3)
d.bS(B.fz1,B.aQT,B.wT,0.3)
d.bS(B.fyx,B.aQT,B.wT,0.3)}w=C.a([],x.o)
v=new A.f67(d,f,w)
if(e==="switch"){v.$2(4,B.cOI)
v.$2(5,B.cN_)}else v.$2(4,B.cZX)
return w},
hh7(d,e){var w
A:{if(10===e){w=d==="switch"?"blackLine":"black"
break A}if(13===e){w="blackLoad"
break A}if(11===e){w="white"
break A}if(12===e){w="ground"
break A}w=null
break A}return w},
h8F(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k=new A.K(0,-0.2,f),j=e==="switch",i=e==="gfci"
if(g)w=B.wO
else w=j?B.baZ:B.Wa
v=i?3.1:2.95
d.e=0
d.b=20
if(!h){d.bS(k.ae(0,B.fwT),new A.K(1.5,v,1.3),w,0.25)
d.e=0.15
d.b=26
u=k.ae(0,B.fwL)
d.bS(u,B.fBG,g?B.b8b:B.Kp,0.8)
d.cH(k.ae(0,B.fAl),B.fCR,B.DO)}d.e=0.3
d.b=27
u=k.ae(0,B.fyf)
d.bS(u,new A.K(1.3,i?2.85:2.7,0.16),w,0.3)
if(j){d.e=0.7
d.b=28
u=k.ae(0,B.fzT)
d.bS(u,B.fxT,g?B.wO:G.Wl,0.35)
u=k.ae(0,B.fBo)
d.bS(u,B.fAZ,g?B.wO:B.abX,0.35)}else{d.e=0.6
u=i?E.aqV:B.daR
t=u.length
s=f+0.47
r=f+0.46
q=f+0.5
p=0
for(;p<t;++p){o=u[p]
d.b=27
n=-0.2+(o+0.04)
d.cH(new A.K(-0.28,n,s),B.fzy,B.DX)
d.cH(new A.K(0.28,n,s),B.fyk,B.DX)
n=-0.2+(o-0.32)
d.o5(new A.K(0,n,r),new A.K(0,n,q),0.11,B.DX,10)}if(i){d.e=0.7
d.b=28
d.bS(k.ae(0,B.fA9),B.aQF,B.bec,0.3)
d.bS(k.ae(0,B.fBR),B.aQF,B.ael,0.3)}}if(h){d.e=0
return}m=i?0.95:0.85
l=i?-0.75:-0.55
u=new A.f7r(d,k)
if(!j){u.$6$taped(23,-1,m,B.acf,B.acE,i)
u.$5(24,-1,l,B.acf,B.acE)}u.$6$taped(21,1,m,B.Vx,B.adT,i)
u.$5(22,1,l,B.Vx,B.adT)
d.e=0.9
d.b=25
d.e6(k.ae(0,B.fz_),k.ae(0,B.fCd),0.18,B.bg_,0.7,12)
d.cH(k.ae(0,B.fyB),B.fz3,D.ec)
d.bS(k.ae(0,B.fwY),B.fAc,B.b54,0.6)
d.e=0},
h9_(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e==="fan",j=A.bxn(e,f)
d.e=0
d.b=55
w=j-0.3
v=j+0.3
u=k?3.3:3.5
t=f.w?B.wO:B.bbu
d.e6(new A.K(0,0,w),new A.K(0,0,v),u,t,0.45,20)
d.b=54
if(k){u=j+4.2
d.e6(new A.K(0,0,v),new A.K(0,0,u),0.45,B.b87,0.5,10)
v=j+7.4
d.e6(new A.K(0,0,u),new A.K(0,0,v),3.6,B.V6,0.5,18)
d.e6(new A.K(0,0,v),new A.K(0,0,j+8.6),1.6,B.bfn,0.7,14)}else{d.d=0.92
v=f.w?B.wO:B.b8Z
d.iM(new A.K(0,0,j+1.2),3.6,v,6,14,0.7)
d.d=1}d.b=54
s=[B.elA,B.e8P,B.es1]
for(v=x.o,r=j-3.2,q=0;q<3;++q){u=s[q]
p=f.c===0?r:j
t=u.b.a
d.jN(C.a([new A.K(t,-0.3,w),new A.K(t,-0.3,p+0.4)],v),0.07,u.a,!1,0.3,6)}if(f.c===0)for(w=[B.eeW,B.en4,B.euF],v=f.b,q=0;q<3;++q){o=w[q]
u=o.a
n=A.bzw(e,u,f)
d.b=u
d.e=0.8
t=n.a+0
m=n.b+0
l=n.c
d.e6(new A.K(t,m,l+-0.2),new A.K(t,m,l+0.3),0.09,B.wU,0.6,6)
if(v.ag(0,u))d.Ka(new A.K(t,m,l+-0.5),new A.K(t,m,l+0.9),0.4,o.b,0.26,0.4,8)
d.e=0}},
hb1(d,e){var w
d.e=0.4
d.b=30
w=e?B.wO:B.b4f
d.bS(B.fA5,B.aQU,w,0.3)
d.bS(B.fzs,B.aQU,w,0.3)
d.bS(B.fvY,B.aR0,w,0.3)
d.bS(B.fwn,B.fx5,w,0.3)
d.bS(B.fC9,B.aR0,w,0.3)
d.e6(B.fyp,B.fzp,0.1,B.Kp,0.8,10)
d.e=0},
hPJ(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=B.cRa[w]
d.e6(new A.K(v,0.52,0.2),new A.K(v,0.52,1.9),0.04,B.Kp,0.8,6)}d.bS(B.fuK,B.fBy,B.b8H,0.35)
d.b86(B.aQQ,0.2,e?D.Vz:B.bc8,0.9)
if(e){d.d=0.35
d.iM(B.aQQ,0.5,D.Vz,4,8,0)
d.d=1}},
md:function md(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
Xs:function Xs(d){var _=this
_.a=!0
_.b=d
_.c=0
_.w=_.r=_.f=_.e=_.d=!1},
zI:function zI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a3o:function a3o(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=h
_.r=i},
fmS:function fmS(){},
fmT:function fmT(){},
fmU:function fmU(){},
fmV:function fmV(){},
fmW:function fmW(){},
flN:function flN(d){this.a=d},
fJ8:function fJ8(){},
BK:function BK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
flT:function flT(d){this.a=d},
flU:function flU(d){this.a=d},
flR:function flR(d){this.a=d},
flS:function flS(d){this.a=d},
flP:function flP(){},
flQ:function flQ(){},
fjU:function fjU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fjV:function fjV(d){this.a=d},
f67:function f67(d,e,f){this.a=d
this.b=e
this.c=f},
f7r:function f7r(d,e){this.a=d
this.b=e},
fjI(d){return D.d.dM(B.a0J,new A.fjJ(d),new A.fjK())},
yx(d,e,f,g,h,i,j,k){var w=x.S
return new A.a3S(d,e,f,g,h,i,j,k,C.a([],x._),C.a([0,0,0],x.t),C.aW(w),C.V(w,x.i),C.V(w,x.N),C.a([],x.I))},
fZa(d){var w=new A.aTC(d)
w.c20()
return w},
hpX(d){var w=new A.aTC(7)
w.buS(d)
return w},
i3c(d){var w,v=d.c
A:{if("bedroom"===v){w=1
break A}if("kitchen"===v||"bathroom"===v){w=2
break A}w=0
break A}return w},
aTj:function aTj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=0},
q9:function q9(d,e,f,g){var _=this
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
fjJ:function fjJ(d){this.a=d},
fjK:function fjK(){},
oE:function oE(d,e,f){this.a=d
this.b=e
this.c=f},
aTx:function aTx(d,e,f){this.a=d
this.b=e
this.c=f},
a3S:function a3S(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.ax=o
_.ch=_.ay=!1
_.cx=_.CW=null
_.cy=p
_.db=!1
_.dx="light"
_.dy=q
_.fr=null
_.fx=!1
_.fy=0
_.go=""
_.k1=_.id=null},
bOd:function bOd(){},
aTC:function aTC(d){var _=this
_.a=""
_.b=d
_.c=!1
_.d=$
_.e=0},
bOO:function bOO(){},
bOP:function bOP(){},
bOT:function bOT(){},
bOS:function bOS(){},
bOR:function bOR(){},
bOQ:function bOQ(){},
aZ0(d,e,f){return new A.aoP(f,d,e,null)},
aoP:function aoP(d,e,f,g){var _=this
_.d=d
_.f=e
_.r=f
_.a=g},
aCc:function aCc(d,e,f){var _=this
_.f=_.e=_.d=$
_.r="look"
_.w=!1
_.y=_.x=!0
_.z=0
_.Q=-1
_.as=0
_.at=null
_.ax=!0
_.ay=null
_.ch=d
_.CW=null
_.cx=0
_.cy=60
_.db=null
_.dx=""
_.dy=e
_.fr=!1
_.fx=f
_.fy=null
_.go=0
_.c=_.a=null},
e0z:function e0z(){},
e0x:function e0x(d){this.a=d},
e0y:function e0y(d){this.a=d},
e02:function e02(d,e,f){this.a=d
this.b=e
this.c=f},
e03:function e03(d){this.a=d},
e01:function e01(d){this.a=d},
e04:function e04(d,e){this.a=d
this.b=e},
e_C:function e_C(d,e){this.a=d
this.b=e},
e09:function e09(d){this.a=d},
e_J:function e_J(d,e){this.a=d
this.b=e},
e_K:function e_K(d,e){this.a=d
this.b=e},
e_L:function e_L(d,e){this.a=d
this.b=e},
e_M:function e_M(d,e){this.a=d
this.b=e},
e_N:function e_N(d,e,f){this.a=d
this.b=e
this.c=f},
e_I:function e_I(d,e){this.a=d
this.b=e},
e_O:function e_O(d){this.a=d},
e_T:function e_T(d,e){this.a=d
this.b=e},
e_R:function e_R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e_Q:function e_Q(d,e,f){this.a=d
this.b=e
this.c=f},
e_S:function e_S(d,e,f){this.a=d
this.b=e
this.c=f},
e_P:function e_P(d,e){this.a=d
this.b=e},
e0s:function e0s(d){this.a=d},
e0q:function e0q(d){this.a=d},
e0r:function e0r(d,e){this.a=d
this.b=e},
e0j:function e0j(d,e,f){this.a=d
this.b=e
this.c=f},
e0i:function e0i(){},
e0k:function e0k(){},
e0l:function e0l(d,e){this.a=d
this.b=e},
e0m:function e0m(d){this.a=d},
e0n:function e0n(d){this.a=d},
e0o:function e0o(d){this.a=d},
e0p:function e0p(d){this.a=d},
e0f:function e0f(d){this.a=d},
e0e:function e0e(d){this.a=d},
e0c:function e0c(d,e,f){this.a=d
this.b=e
this.c=f},
e0b:function e0b(d,e){this.a=d
this.b=e},
e0d:function e0d(d,e){this.a=d
this.b=e},
e05:function e05(d,e){this.a=d
this.b=e},
e06:function e06(d){this.a=d},
e07:function e07(){},
e0g:function e0g(d,e){this.a=d
this.b=e},
e0a:function e0a(d,e){this.a=d
this.b=e},
e08:function e08(d){this.a=d},
e_E:function e_E(d){this.a=d},
e_F:function e_F(d){this.a=d},
e0t:function e0t(d){this.a=d},
e_H:function e_H(d){this.a=d},
e_G:function e_G(d){this.a=d},
e_0:function e_0(d){this.a=d},
e__:function e__(d,e,f){this.a=d
this.b=e
this.c=f},
dZV:function dZV(){},
dZW:function dZW(){},
dZX:function dZX(d){this.a=d},
dZY:function dZY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e_D:function e_D(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e0h:function e0h(d,e){this.a=d
this.b=e},
e0_:function e0_(d,e){this.a=d
this.b=e},
e00:function e00(d,e){this.a=d
this.b=e},
dZZ:function dZZ(d,e){this.a=d
this.b=e},
e_r:function e_r(d){this.a=d},
e_s:function e_s(d){this.a=d},
e_t:function e_t(d){this.a=d},
e_u:function e_u(d){this.a=d},
e_v:function e_v(d,e){this.a=d
this.b=e},
e_w:function e_w(d){this.a=d},
e_q:function e_q(d){this.a=d},
e_x:function e_x(d,e){this.a=d
this.b=e},
e_p:function e_p(d,e){this.a=d
this.b=e},
e_y:function e_y(d,e){this.a=d
this.b=e},
e_o:function e_o(d,e){this.a=d
this.b=e},
e_z:function e_z(d){this.a=d},
e_n:function e_n(d){this.a=d},
e_A:function e_A(d,e){this.a=d
this.b=e},
e_m:function e_m(d,e){this.a=d
this.b=e},
e_B:function e_B(d,e){this.a=d
this.b=e},
e0w:function e0w(d){this.a=d},
e0u:function e0u(d){this.a=d},
e0v:function e0v(d){this.a=d},
e_d:function e_d(d,e){this.a=d
this.b=e},
e_8:function e_8(d){this.a=d},
e_7:function e_7(){},
e_6:function e_6(d){this.a=d},
e_e:function e_e(d){this.a=d},
e_5:function e_5(d){this.a=d},
e_f:function e_f(d){this.a=d},
e_g:function e_g(d){this.a=d},
e_4:function e_4(d){this.a=d},
e_h:function e_h(d){this.a=d},
e_3:function e_3(d){this.a=d},
e_i:function e_i(d){this.a=d},
e_j:function e_j(d){this.a=d},
e_k:function e_k(d){this.a=d},
e_l:function e_l(d){this.a=d},
e_9:function e_9(d){this.a=d},
e_a:function e_a(d){this.a=d},
e_b:function e_b(d){this.a=d},
e_2:function e_2(){},
e_c:function e_c(d){this.a=d},
e_1:function e_1(d){this.a=d},
e_Z:function e_Z(d){this.a=d},
e_W:function e_W(d,e,f){this.a=d
this.b=e
this.c=f},
e_X:function e_X(d,e){this.a=d
this.b=e},
e_V:function e_V(d){this.a=d},
e_Y:function e_Y(d,e){this.a=d
this.b=e},
e_U:function e_U(d){this.a=d},
bgz:function bgz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dlx:function dlx(d,e){this.a=d
this.b=e},
bfY:function bfY(d,e){this.b=d
this.a=e},
hcj(e9,f0,f1,f2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4="walls",e5="GFCI outlet",e6="Wall outlet",e7="\ud83d\udeb0 Needs plumbing",e8=e9.c
if(e8==="outside")return A.hMe(e9,f1)
w=x.z
v=C.a([],w)
u=new A.l4(v)
t=C.V(x.S,x.q)
s=C.a([],x.E)
r=C.a([],x.h)
q=e9.giD(0)
p=e9.gmW(0)
o=C.a([],x.O)
for(n=e9.z,m=n.length,l=0;l<n.length;n.length===m||(0,C.L)(n),++l)o.push(B.auY[n[l]])
k=B.auL[e9.Q]
j=new A.fk4(f0)
u.b=j.$2("floor",310)
n=p/2
m=q+2.4
i=p+2
h=k.b
g=k.c
f=g==="tile"
if(f)e=0.35
else e=g==="wood"?0.15:0
u.qb(new A.K(0,-0.6,n),new A.K(m,1.2,i),h,e,3)
t.n(0,310,new A.da("Floor","The "+k.a.toLowerCase()+" floor.",new A.K(0,0,n),140))
u.b=0
if(g==="wood")for(g=-q/2,d=1;d<8;++d){f=C.aq(h,D.w,0.25)
f.toString
u.cH(new A.K(g+d*q/8,0.05,n),new A.K(0.3,0.2,p),f)}else if(f)for(h=-q/2,d=1;d<6;++d){u.cH(new A.K(h+d*q/6,0.05,n),new A.K(0.3,0.2,p),B.aaY)
u.cH(new A.K(0,0.05,d*p/6),new A.K(q,0.2,0.3),B.aaY)}u.b=j.$2(e4,300)
u.j1(new A.K(0,48,-0.6),new A.K(m,96,1.2),o[0],3)
u.b=j.$2(e4,301)
h=-q
g=h/2
u.j1(new A.K(g-0.6,48,n),new A.K(1.2,96,p),o[1],3)
u.b=j.$2(e4,302)
f=q/2
u.j1(new A.K(f+0.6,48,n),new A.K(1.2,96,p),o[2],3)
t.n(0,300,B.dUp)
t.n(0,301,B.dUt)
t.n(0,302,B.dUC)
u.b=0
u.bS(new A.K(0,2.5,0.4),new A.K(q,5,0.8),B.qw,0.1)
u.bS(new A.K(g+0.4,2.5,n),new A.K(0.8,5,p),B.qw,0.1)
u.bS(new A.K(f-0.4,2.5,n),new A.K(0.8,5,p),B.qw,0.1)
u.b=j.$2("ceiling",320)
u.d=f0==="ceiling"?0.6:0.4
u.j1(new A.K(0,96.6,n),new A.K(m,1.2,i),B.atC[e9.as],2)
u.d=1
u.b=0
u.bS(new A.K(0,94,1),new A.K(q,3,1.4),D.c,0.2)
u.bS(new A.K(g+1,94,n),new A.K(1.4,3,p),D.c,0.2)
u.bS(new A.K(f-1,94,n),new A.K(1.4,3,p),D.c,0.2)
t.n(0,320,new A.da("Ceiling","Pick a colour above to paint the ceiling.",new A.K(0,96,n),140))
o=e9.w
a0=D.d.b8(o,new A.fjX())?"left":"right"
m=e8==="hall"
if(!m){i=C.a([],w)
a1=new A.l4(i)
a1.cH(B.fCr,B.fvv,B.A9)
a1.bS(B.ftQ,B.fyM,B.KR,0.5)
a1.cH(B.aQo,B.fzX,B.A9)
a1.cH(B.aQo,B.fxi,B.A9)
a2=p*0.55
D.d.v(v,a0==="right"?A.G9(i,0,-1.5707963267948966,new A.K(f,0,a2)):A.G9(i,0,1.5707963267948966,new A.K(g,0,a2)))}for(i=e9.ax,e=e9.at,d=0;d<o.length;++d){a3=o[d]
a4=i.h(0,d)
if(a4==null)a4=e.t(0,d)?1.25:0
a5=C.a([],w)
a6=new A.l4(a5)
a7=a6.b=600+d
a6.cH(B.fzO,B.fzA,B.qw)
if(a4>0.04){a6.b=0
a8=A.hJl(a3.c)
a9=a8.a
a6.cH(B.fyv,B.fww,a9)
a6.cH(B.fzd,B.fCL,a8.b)
b0=C.aq(a9,D.w,0.25)
b0.toString
a6.cH(B.fyC,B.fBv,b0)
a6.b=a7
b1=-a4
b0=A.bBp(B.fCI,b1)
a6.aiR(new A.K(-12.5+b0.a,0+b0.b,1.2+b0.c),B.fw_,B.JQ,0.15,b1)}else{a6.bS(B.fyF,B.fxY,B.JQ,0.15)
a6.bS(B.fyL,B.fz0,B.DF,0.8)
a6.cH(B.fz2,B.aR4,B.KP)
a6.cH(B.fCo,B.aR4,B.KP)}b2=a3.a
A:{if("left"===b2){a5=A.G9(a5,0,1.5707963267948966,new A.K(g,0,a3.b+n-40))
break A}if("right"===b2){a5=A.G9(a5,0,-1.5707963267948966,new A.K(f,0,a3.b+n-40))
break A}a5=A.G9(a5,0,0,new A.K(a3.b,0,0))
break A}D.d.v(v,a5)
t.n(0,a7,new A.da("Door","Tap the door to go through it.",B.aQg,90))}for(n=e9.x,i=n.length,l=0;l<n.length;n.length===i||(0,C.L)(n),++l){b3=n[l]
e=b3.b
a5=B.vD.h(0,e)
a5.toString
a7=C.a([],w)
b4=new A.l4(a7)
b0=100+b3.a
b4.b=j.$2("furniture",b0)
A.hIT(b4,e,B.cvp[b3.f])
D.d.v(v,A.G9(a7,0,b3.e*3.141592653589793/2,new A.K(b3.c,0,b3.d)))
t.n(0,b0,new A.da(a5.a,"Move it with the arrow buttons, turn it, change its colour or take it out.",new A.K(b3.c,12,b3.d),90))}b5=p*0.5
w=C.T(o)
n=f-10
b6=D.k.D(new C.cQ(new C.a2(o,new A.fjY(),w.k("a2<1>")),new A.fjZ(),w.k("cQ<1,O>")).cI(0,g+30,new A.fk_())+24,g+10,n)
b7=e9.dx==="fan"
b8=e9.ga4m()
b9=b8&&e9.gT7()&&e9.db
u.b=703
if(b7){u.o5(new A.K(0,95.5,b5),new A.K(0,86,b5),1,B.rK,8)
u.e6(new A.K(0,86,b5),new A.K(0,79,b5),6,D.t7,0.5,14)
w=b9?B.A7:D.dL
u.e6(new A.K(0,79,b5),new A.K(0,76,b5),3.6,w,0.6,12)}else{w=b9?B.A7:D.dL
u.e6(new A.K(0,95.5,b5),new A.K(0,93,b5),7,w,0.6,16)}if(b9&&!b7){u.b=0
u.d=0.2
u.ba1(new A.K(0,93,b5),new A.K(0,0.5,b5),36,B.A7,!1,14)
u.d=1}c0=b7?"Ceiling fan":"Ceiling light"
if(!b8)c1="It has no power yet. "+(e9.go.length!==0?"Tap it to wire it.":"The room still needs wiring: use the Wiring button.")
else if(!e9.gT7())c1="It is ready: wire the wall switch to turn it on."
else{w=e9.db?"It is on. Tap the wall switch (or tap this) to turn it off.":"It is off. Tap the wall switch (or tap this) to turn it on."
c1=w}t.n(0,703,new A.da(c0,c1,new A.K(0,88,b5),80))
w=e8==="bathroom"
o=!w
c2=!o||e8==="kitchen"||e9.go==="gfci"
i=e9.gaEY()
e=c2?e5:e6
a5=e9.go.length!==0||e9.glp()
a7=c2?e5:e6
a7=C.a([new C.eN([0,700,h/4,i,e]),new C.eN([1,701,q/4,a5,a7])],x.R)
for(i=e9.dy,d=0;d<i.length;++d){h=i[d]
e=h.a
if(e!=="switch"){a5=h.c
e=a5.c>=2&&A.afe(A.Ac(e),a5).a==="ok"
a5=i[d].a==="gfci"?"Added GFCI outlet":"Added outlet"
a7.push(new C.eN([2+d,800+d,h.b,e,a5]))}}for(h=a7.length,e=e9.cy,l=0;l<a7.length;a7.length===h||(0,C.L)(a7),++l){a5=a7[l].a
d=a5[0]
c3=a5[1]
c4=a5[2]
c5=a5[3]
c6=a5[4]
u.b=c3
u.e=0.4
u.d=0.55
a5=c5?D.b7:D.aB
u.cH(new A.K(c4,14,0.25),B.fwQ,a5)
u.d=1
u.e=0
a5=c5?B.adL:D.t7
u.bS(new A.K(c4,14,0.9),B.fA8,a5,0.25)
u.b=0
for(c7=0;c7<2;++c7)for(a5=14+E.oG[c7]*2.8,c8=0;c8<2;++c8)u.cH(new A.K(c4+B.cWt[c8],a5,1.7),B.fCE,B.bcl)
u.cH(new A.K(c4,14,1.7),B.fA6,D.dL)
if(!c5)a5="This one is not wired yet. Tap it to wire it."
else a5=e.h(0,d)==null?"Tap it to plug something in.":"Tap it to plug something else in, or to unplug."
t.n(0,c3,new A.da(c6,a5,new A.K(c4,14,2),60))}h=C.a([new C.bx(702,b6,e9.gT7())],x.Q)
for(d=0;d<i.length;++d){a5=i[d]
b0=a5.a
if(b0==="switch"){c9=a5.c
b0=c9.c>=2&&A.afe(A.Ac(b0),c9).a==="ok"
h.push(new C.bx(800+d,a5.b,b0))}}for(i=h.length,l=0;l<h.length;h.length===i||(0,C.L)(h),++l){a5=h[l]
c3=a5.a
c4=a5.b
c5=a5.c
u.b=c3
u.e=0.4
u.d=0.55
a5=c5?D.b7:D.aB
u.cH(new A.K(c4,48,0.25),B.fxO,a5)
u.d=1
u.e=0
a5=c5?B.adL:D.t7
u.bS(new A.K(c4,48,0.9),B.fxr,a5,0.25)
u.cH(new A.K(c4,e9.db&&c5?49.2:46.8,1.9),B.fxm,B.bhT)
if(!c5)a5="Not wired yet. Tap it to wire it."
else if(e9.db)a5="On. Tap to turn the "+(b7?"fan":"light")+" off."
else a5="Off. Tap to turn the "+(b7?"fan":"light")+" on."
t.n(0,c3,new A.da("Light switch",a5,new A.K(c4,48,2),60))}if(!e9.ga4m()&&e9.go.length===0)s.push(new A.ub(new A.K(0,70,b5),"\u26a1 No power: needs wiring",D.bL))
i=!1
if(e9.go.length!==0)if(!e9.gyz()){i=e9.go
i=!(i==="ptrap"||i==="faucet")}if(i)s.push(new A.ub(new A.K(0,40,14),"\ud83d\udc46 Tap the red one to wire it",D.bL))
for(i=a7.length,h=x.o,a5=e9.a,l=0;l<a7.length;a7.length===i||(0,C.L)(a7),++l){b0=a7[l].a
d=b0[0]
c4=b0[2]
c5=b0[3]
d0=e.h(0,d)
if(d0==null||!c5)continue
d1=A.fjI(d0)
b0=u.b=720+d
u.jN(C.a([new A.K(c4,12,1.8),new A.K(c4,6,3),new A.K(c4,2,11)],h),0.3,B.W5,!1,0.2,6)
c9=d1.d
d2=c9>0
if(d2){b1=c9*0.56
u.bS(new A.K(c4,2,15),new A.K(c9*0.45,4,14),B.rK,0.3)
u.bS(new A.K(c4,8,15),B.fwz,B.rK,0.3)
d3=12+b1/2
u.bS(new A.K(c4,d3,15),new A.K(c9,b1,3),E.E_,0.5)
c9=(c9-3.5)/2
d4=c4-c9
d5=(b1-3.5)/2
d6=d3+d5
c9=c4+c9
d5=d3-d5
r.push(new A.Wv(C.a([new A.K(d4,d6,16.6),new A.K(c9,d6,16.6),new A.K(c9,d5,16.6),new A.K(d4,d5,16.6)],h),b0,new A.fk0(d*7+a5),9))}else{c9=d1.a
if(c9==="lamp"){u.e6(new A.K(c4,0,14),new A.K(c4,1,14),6,B.V6,0.4,14)
u.e6(new A.K(c4,1,14),new A.K(c4,22,14),1,B.Ak,0.5,8)
c9=e9.db?B.A7:U.Wc
u.yg(new A.K(c4,20,14),new A.K(c4,32,14),9,c9,!1,!0,5.5,0.2,16)}else{u.bS(new A.K(c4,9,15),B.fuQ,B.DD,0.1)
if(c9==="toaster"){u.bS(new A.K(c4,23,15),B.fuO,B.kA,0.8)
u.cH(new A.K(c4,28.2,15),B.fAQ,B.adZ)}else{u.Ka(new A.K(c4-7,21,15),new A.K(c4+7,21,15),3.6,B.Ky,3,0.6,12)
u.bS(new A.K(c4-8,14.5,15),B.fyW,B.Ky,0.6)}}}c9=d2?"It is playing NGMY ads. Tap it to watch full screen with the remote.":"It is plugged in and running. Tap the outlet to unplug it or plug in something else."
t.n(0,b0,new A.da(d1.b,c9,new A.K(c4,16,14),90))}d7=e9.fr
if(d7!=null){d1=A.fjI(d7)
i=m?0.5:0.9
d8=d1.d*i
b1=d8*0.56
d9=d8-2.5
e0=b1-2.5
u.b=730
u.e=5
if(m){u.bS(new A.K(f-1.4,52,50),new A.K(2.6,b1+3,d8+3),B.Vi,0.5)
u.bS(new A.K(f-2.8,52,50),new A.K(0.2,b1,d8),H.mL,0.7)
if(e9.fx){e1=f-2.95
m=e0/2
i=52+m
e=d9/2
a5=50-e
e=50+e
m=52-m
r.push(new A.Wv(C.a([new A.K(e1,i,a5),new A.K(e1,i,e),new A.K(e1,m,e),new A.K(e1,m,a5)],h),730,new A.fk1(e9),9))}}else{B:{if("living"===e8){m=-8
break B}if("kitchen"===e8){m=36
break B}if("bathroom"===e8){m=10
break B}m=34
break B}e2=w?66:58
u.bS(new A.K(m,e2,1.4),new A.K(d8+3,b1+3,2.6),B.Vi,0.5)
u.bS(new A.K(m,e2,2.8),new A.K(d8,b1,0.2),H.mL,0.7)
if(e9.fx){i=d9/2
e=m-i
a5=e0/2
a7=e2+a5
i=m+i
a5=e2-a5
r.push(new A.Wv(C.a([new A.K(e,a7,2.95),new A.K(i,a7,2.95),new A.K(i,a5,2.95),new A.K(e,a5,2.95)],h),730,new A.fk2(e9),9))}}u.e=0
m=e9.fx?"It is on and playing "+E.jU[e9.fy].a+". Tap it to watch full screen with the remote.":"The TV is off. Tap it to turn it on."
t.n(0,730,new A.da(d1.b,m,new A.K(0,56,4),110))}if(!o||e8==="kitchen"){c5=e9.got()
e8=new A.fk3(u)
if(w){e3=g+17
if(c5){u.b=710
u.Ka(new A.K(6,0.5,14),new A.K(6,15,14),8,B.A2,5.6,0.8,18)
u.e6(new A.K(6,15,14),new A.K(6,16,14),9,B.KH,0.8,18)
u.bS(new A.K(6,21,5),B.fuV,B.A2,0.8)
u.bS(new A.K(6,28,5),B.fyo,B.KH,0.8)}else{u.b=710
u.d=0.3
u.cH(new A.K(6,14,9),B.fuS,D.b0)
u.d=1
e8.$2(-4,8)}u.b=711
u.bS(new A.K(34,14,10),B.fvq,B.DD,0.1)
u.bS(new A.K(34,29,10),B.fvs,B.VE,0.4)
if(c5){u.e6(new A.K(34,29.3,10),new A.K(34,30.1,10),6.5,D.c,0.6,18)
u.bg7(C.a([new A.K(34,30,4),new A.K(34,36,4),new A.K(34,38,7)],h),0.6,B.kA,0.9,8)}else{e8.$2(28,18)
e8.$2(40,18)}u.b=712
if(c5){u.bS(new A.K(e3,8,38),B.aQp,B.aea,0.7)
u.bS(new A.K(e3,16.2,38),B.fBr,B.Vp,0.8)
u.e6(new A.K(e3,30,3),new A.K(e3,52,3),0.7,B.kA,0.9,8)
u.e6(new A.K(e3,52,3),new A.K(e3,52,10),0.7,B.kA,0.9,8)}else{u.d=0.3
u.cH(new A.K(e3,8,38),B.aQp,D.b0)
u.d=1
e8.$2(e3-4,34)
e8.$2(e3+4,34)}e8=c5?"Fitted on its flange with a wax ring, and the supply hose joins the shut-off valve.":"There is no toilet yet: only the flange and the water stub. Use the Plumbing button to fit it."
t.n(0,710,new A.da("Toilet",e8,new A.K(6,14,10),70))
e8=c5?"The faucet, the hoses and the P-trap are fitted.":"The sink is not plumbed. Use the Plumbing button."
t.n(0,711,new A.da("Vanity sink",e8,new A.K(34,28,10),70))
e8=c5?"The bath is in and connected.":"The bath is not connected yet."
t.n(0,712,new A.da("Bath",e8,new A.K(e3,10,38),90))
if(!c5)s.push(new A.ub(new A.K(0,40,14),e7,D.bj))}else{u.b=0
u.bS(new A.K(g+15,36,14),B.fvf,B.acH,0.6)
u.cH(new A.K(g+28.5,36,14.4),B.fzV,D.dL)
u.bS(new A.K(n,15,14),B.fv7,B.Vb,0.1)
u.bS(new A.K(n,31,14),B.fva,B.rK,0.5)
u.bS(new A.K(f-15,32.4,14),B.aQD,D.lx,0.3)
u.bS(new A.K(f-5,32.4,14),B.aQD,D.lx,0.3)
u.b=713
u.bS(new A.K(30,15,14),B.fvM,B.DD,0.1)
u.bS(new A.K(30,31,14),B.fvN,B.E6,0.5)
if(c5){u.e6(new A.K(30,32.1,14),new A.K(30,32.7,14),8,B.DV,0.8,18)
u.bg7(C.a([new A.K(30,32,5),new A.K(30,42,5),new A.K(30,44,9),new A.K(30,44,13)],h),0.7,B.kA,0.9,8)}else{e8.$2(22,18)
e8.$2(38,18)}e8=c5?"The faucet, the hoses and the drain are fitted.":"The kitchen sink is not plumbed yet. Use the Plumbing button."
t.n(0,713,new A.da("Kitchen sink",e8,new A.K(30,30,14),70))
if(!c5)s.push(new A.ub(new A.K(30,48,14),e7,D.bj))}}return new A.zk(v,t,s,r)},
hMe(d,e){var w,v,u,t=x.z,s=C.a([],t),r=new A.l4(s),q=C.V(x.S,x.q),p=C.a([],x.E)
r.j1(B.fBw,B.fwM,B.abf,4)
r.cH(B.fzh,B.fym,E.DI)
r.cH(B.fzL,B.fy6,B.Vb)
r.j1(B.fut,B.fvc,B.VM,3)
r.cH(B.fwR,B.fvn,B.b4q)
t=C.a([],t)
new A.l4(t).qb(B.jh,B.fvd,B.bb7,0.1,2)
D.d.v(s,A.G9(t,0.5,0,B.ftX))
D.d.v(s,A.G9(t,-0.5,0,B.ftY))
r.cH(B.fu_,B.fve,B.b9u)
r.cH(B.fyu,B.aRc,B.VM)
r.cH(B.fBP,B.aRc,B.VM)
for(w=0;w<4;++w){v=B.d4F[w]
r.cH(new A.K(v,62,10.5),B.fCy,B.qw)
r.bS(new A.K(v,62,11.2),B.fCx,B.KR,0.6)
r.cH(new A.K(v,62,11.6),B.fze,B.qw)
r.cH(new A.K(v,62,11.6),B.fye,B.qw)}r.cH(B.fue,B.fvP,E.DI)
r.cH(B.fAk,B.fwj,B.qw)
r.b=600
r.bS(B.fvV,B.fy4,B.JQ,0.2)
r.bS(B.fwH,B.fwK,B.DF,0.8)
r.cH(B.fwV,B.aQL,B.KP)
r.cH(B.fyZ,B.aQL,B.KP)
q.n(0,600,B.dUA)
r.b=0
r.o5(B.fuD,B.fuE,5,B.Et,8)
r.mo(B.fuF,28,B.aaN,6,10)
r.mo(B.fuz,18,B.abC,5,8)
for(w=0;w<4;++w)r.mo(new A.K(B.d4A[w],6,24),7,B.b9j,4,8)
r.o5(B.fvu,B.fvw,1.4,B.Et,6)
r.bS(B.fvx,B.fuG,B.bbG,0.3)
t=e===0
u=t?"\u2705 The house is finished":"\ud83c\udfe0 "+e+" rooms still need work"
p.push(new A.ub(B.ftW,u,t?D.cZ:D.dT))
return new A.zk(s,q,p,B.vw)},
hSN(d,e,f){var w,v,u,t,s=C.a([],x.z),r=new A.l4(s),q=d.c==="outside"
if(q||q)return s
if(f!=null&&f.a===d.a)A.hMW(r,f,e)
w=d.gmW(0)
if(d.dx==="fan"){v=d.ga4m()&&d.gT7()&&d.db?e*7:0
r.b=703
for(q=w*0.5,u=0;u<4;++u){t=v+u*3.141592653589793/2
r.aiR(new A.K(Math.cos(t)*15,81,q+Math.sin(t)*15),B.fCl,B.DD,0.1,-t)}}return s},
hJl(d){var w
A:{if(5===d){w=B.eoC
break A}if(9===d){w=B.esE
break A}if(10===d){w=B.ehq
break A}if(11===d){w=B.etu
break A}if(2===d||4===d||8===d){w=B.e8v
break A}w=B.ejS
break A}return w},
hPu(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=C.a([],x.z)
for(w=d.length,v=e.a,u=e.b,t=e.c,s=f.a,r=f.b,q=f.c,p=x.o,o=0;o<d.length;d.length===w||(0,C.L)(d),++o){n=d[o]
m=C.a([],p)
for(l=n.a,k=l.length,j=0;j<l.length;l.length===k||(0,C.L)(l),++j){i=l[j]
m.push(new A.K(s+(i.a-s)*v,r+(i.b-r)*u,q+(i.c-q)*t))}l=n.b
h.push(new A.qm(m,new A.K(l.a/v,l.b/u,l.c/t).gpD(0),n.c,n.d,n.e,n.f,n.r,n.w,n.x))}return h},
hMW(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=C.a([],x.z),a7=new A.l4(a6)
a7.e=6
w=a9.e
v=w?Math.sin(a9.at*3.141592653589793):0
u=x.n
t=C.a([],u)
for(s=0;s<2;++s)t.push(v*E.oG[s]*0.6)
r=C.a([],u)
for(q=t.length,s=0;s<t.length;t.length===q||(0,C.L)(t),++s){p=t[s]
r.push(w?Math.max(0,-p)*1.5+0.1:0.04)}u=C.a([],u)
for(o=0;o<2;++o)u.push(16*Math.cos(t[o])+15.5*Math.cos(t[o]+r[o]))
n=Math.max(u[0],u[1])+3.3
m=new A.feC(a7)
l=new A.feo(a7)
for(o=0;o<2;++o){u=(o===0?-1:1)*2.9
k=new A.K(u,n,0)
u+=0
q=n+-16*Math.cos(t[o])
j=0+-16*Math.sin(t[o])
i=new A.K(u,q,j)
h=t[o]+r[o]
u+=0
q+=-15.5*Math.cos(h)
j+=-15.5*Math.sin(h)
a7.mo(k,3.6,B.JP,4,8)
l.$5(k,i,3.5,2.7,B.JP)
l.$5(i,new A.K(u,q,j),2.6,1.9,B.JP)
u+=0
j+=2
m.$3(new A.fep(),B.fzC,new A.K(u,q+-1.6,j))
m.$3(new A.feq(),B.fxy,new A.K(u,q+-2.9,j))}m.$3(new A.fer(),B.fxZ,new A.K(0,n+1.2,0))
m.$3(new A.feu(),B.fzk,new A.K(0,n+2.5,0))
m.$3(new A.fev(),B.fuY,new A.K(0,n+2.4,0))
m.$3(new A.few(),B.fyO,new A.K(0,n+19.6,0))
a7.o5(new A.K(0,n+20.5,0.2),new A.K(0,n+24.2,0.5),2,B.zS,8)
u=n+29
g=new A.K(0,u,0.6)
m.$3(new A.fex(),B.fAP,g)
m.$3(new A.fey(),B.fAb,g.ae(0,B.fvZ))
m.$3(new A.fez(),B.fwG,g.ae(0,B.fzn))
m.$3(new A.feA(),B.fy1,g.ae(0,B.fCU))
for(t=u+-0.2,r=u+0.4,u+=1.9,s=0;s<2;++s){f=E.oG[s]
a7.mo(new A.K(0+f*4.2,t,0.6),1,B.zS,3,6)
q=0+f*1.8
m.$3(new A.feB(),B.fBS,new A.K(q,r,4.75))
a7.mo(new A.K(q,r,5.1),0.5,D.Wi,3,6)
a7.cH(new A.K(q,u,4.8),B.fCt,B.VJ)}m.$3(new A.fes(),B.fCF,g.ae(0,B.fxu))
a7.cH(g.ae(0,B.fzr),B.fyj,B.bcs)
for(u=n+19.3,t=-v,r=a9.f,q=a9.r,j=a9.w,s=0;s<2;++s){f=E.oG[s]
e=f*7
d=t*f*0.5
a0=w?-0.45:-0.12
a1=f>0
if(a1&&r){d=-0.8
a0=-1.2}if(a1&&q){d=-1
a0=-0.6}if(a1&&j){d=-1.55
a0=-0.1}a2=u+-11.5*Math.cos(d)
a3=0+-11.5*Math.sin(d)
a4=new A.K(e,a2,a3)
h=d+a0
a2+=-10.5*Math.cos(h)
a3+=-10.5*Math.sin(h)
l.$5(new A.K(e,u,0),a4,2.8,2.3,B.WA)
l.$5(a4,new A.K(e,a2,a3),2.1,1.6,B.zS)
m.$3(new A.fet(),B.fBt,new A.K(e,a2+-1.3,a3+0.2))
if(a1&&r){a5=a3+0
a7.e6(new A.K(e,a2+-2.6,a5),new A.K(e,a2+2.6,a5),1.7,D.aW,0.5,8)}if(a1&&q){a7.bS(new A.K(e,a2+-0.4,a3+2.6),B.fyR,D.Wi,0.3)
a7.cH(new A.K(e,a2+0.2,a3+3.8),B.fxg,D.aB)}}D.d.v(a8.a,A.G9(a6,0,a9.d,new A.K(a9.b,0,a9.c)))},
hIT(d,e,f){var w,v,u,t=C.aq(f,D.w,Math.abs(-0.25))
t.toString
w=C.aq(f,D.c,Math.abs(0.2))
w.toString
switch(e){case"bed":d.bS(B.a7x,B.fwc,B.Et,0.1)
d.bS(B.fu0,B.fw4,f,0.05)
d.cH(B.fBd,B.aQk,B.adb)
d.cH(B.fuM,B.aQk,B.adb)
d.bS(B.fua,B.fwd,B.Et,0.1)
d.cH(B.fu3,B.fAV,w)
break
case"nightstand":d.bS(B.Tj,B.fuP,f,0.1)
d.cH(B.fAf,B.fwr,t)
d.cH(B.fCA,B.fvH,B.acS)
d.cH(B.fub,B.fwU,B.A7)
break
case"wardrobe":d.bS(B.fui,B.fvQ,f,0.1)
d.cH(B.fx6,B.fvX,t)
d.bS(B.fyG,B.aQW,B.DF,0.8)
d.bS(B.fCK,B.aQW,B.DF,0.8)
break
case"desk":d.bS(B.aQf,B.fvU,f,0.1)
d.cH(B.fBf,B.aQn,t)
d.cH(B.fv8,B.aQn,t)
d.bS(B.fun,B.fv9,B.Vi,0.5)
d.cH(B.fug,B.fwl,D.t7)
break
case"rug":d.j1(B.fC5,B.fuW,f,2)
d.cH(B.fwZ,B.fBB,w)
break
case"sofa":d.bS(B.Tj,B.fwD,f,0.05)
d.bS(B.fu9,B.fwE,t,0.05)
d.bS(B.fBh,B.aQv,t,0.05)
d.bS(B.fvB,B.aQv,t,0.05)
d.cH(B.fBc,B.aQl,w)
d.cH(B.fuL,B.aQl,w)
break
case"armchair":d.bS(B.Tj,B.fvo,f,0.05)
d.bS(B.fu8,B.fvp,t,0.05)
d.cH(B.fBb,B.aQs,t)
d.cH(B.fuI,B.aQs,t)
break
case"coffee":d.bS(B.aQd,B.fvL,f,0.2)
for(v=0;v<4;++v){w=B.d4r[v]
d.cH(new A.K(w.a,6.5,w.b),B.fvj,t)}d.bS(B.fxN,B.fwN,D.bW,0.5)
break
case"tvstand":d.bS(B.aQh,B.fw2,f,0.1)
d.cH(B.fwB,B.fxD,t)
d.bS(B.fuh,B.fvT,E.E_,0.7)
d.bS(B.fxQ,B.fxt,D.fl,0.9)
d.cH(B.fu5,B.fwO,B.rK)
break
case"dining":d.bS(B.aQf,B.fw3,f,0.2)
for(v=0;v<4;++v){w=B.czR[v]
d.cH(new A.K(w.a,13,w.b),B.fvG,t)}break
case"chair":d.bS(B.fu2,B.fuT,f,0.1)
d.bS(B.fud,B.fuR,f,0.1)
for(v=0;v<4;++v){w=B.cWa[v]
d.cH(new A.K(w.a,7.5,w.b),B.fv6,t)}break
case"plant":d.o5(B.jh,B.aQh,5,D.dj,10)
d.mo(B.aQe,8,B.aaN,5,8)
d.mo(B.fvF,5,B.abC,4,8)
break
case"lamp":d.o5(B.jh,B.w7,4.5,B.rK,10)
d.o5(B.w7,B.fuq,0.7,B.rK,6)
d.cFB(B.fuo,B.fuu,6,B.A7,3.5,12)
break
case"console":d.bS(B.fuc,B.fvO,f,0.15)
d.cH(B.fy2,B.aQm,t)
d.cH(B.fx1,B.aQm,t)
d.cH(B.Tj,B.fBq,t)
break
case"shelf":d.bS(B.fuf,B.fvA,f,0.1)
for(u=0;u<4;++u){t=10+u*15
d.cH(new A.K(0,t,1),B.fvt,B.rK)
w=D.o.F(u,2)
d.cH(new A.K(-8+w*6,t,2),B.fwa,[D.eM,D.dS,D.fm,D.dT][u])
d.cH(new A.K(4+w*4,t,2),B.fwP,[D.dT,D.fm,D.eM,D.dS][u])}break
default:d.cH(B.a7x,B.fuA,f)}},
fk4:function fk4(d){this.a=d},
fjX:function fjX(){},
fjY:function fjY(){},
fjZ:function fjZ(){},
fk_:function fk_(){},
fk0:function fk0(d){this.a=d},
fk1:function fk1(d){this.a=d},
fk2:function fk2(d){this.a=d},
fk3:function fk3(d){this.a=d},
feC:function feC(d){this.a=d},
feo:function feo(d){this.a=d},
fep:function fep(){},
feq:function feq(){},
fer:function fer(){},
feu:function feu(){},
fev:function fev(){},
few:function few(){},
fex:function fex(){},
fey:function fey(){},
fez:function fez(){},
feA:function feA(){},
feB:function feB(){},
fes:function fes(){},
fet:function fet(){},
fZb(){var w=x.S
return new A.bOW(C.eu([72],w),C.aW(w),C.aW(w),C.aW(w))},
hSO(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
af2(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.l4(d)
a0.b=70
a0.j1(B.fAC,B.fBH,B.bbe,4)
a0.c=1
a0.b=91
w=new A.fk9(a0)
w.$3(B.fxw,B.fx3,15)
w.$4$alongX(B.fBp,B.fzJ,11,!1)
w.$4$alongX(B.fw6,B.fxa,11,!1)
w.$4$alongX(B.fBe,B.fxI,6,!1)
w.$4$alongX(B.fwx,B.fzK,6,!1)
for(v=0;v<=12;++v)a0.aBb(new A.K(-12+v*2,8.4,0),B.fAd,B.VU,!1,0.05)
a0.c=2
a0.b=92
u=new A.fk6(a0)
u.$2(B.ccy,B.rW)
u.$2(B.d1U,B.nv)
u.$2(B.d69,B.nv)
t=new A.fk5(a0)
t.$1(B.cLA)
t.$1(B.cR_)
a0.c=3
a0.b=93
s=new A.fk8(a0)
s.$1(B.cKB)
s.$2$col(B.cJ4,B.wD)
s.$2$col(B.cIk,B.wD)
s.$1(B.d_2)
a0.c=4
a0.b=0
a0.d=0.22
a0.j1(B.fx9,B.fz9,B.zW,4)
a0.j1(B.fz7,B.aQR,B.zW,4)
a0.j1(B.fxx,B.aQR,B.zW,4)
a0.j1(B.fya,B.aQV,B.zW,3)
a0.j1(B.fCw,B.aQV,B.zW,3)
a0.d=1
a0.c=5
a0.e=0.3
a0.b=0
a0.qb(B.fBa,B.fx7,B.b97,0.1,4)
a0.b=71
a0.bS(B.fAG,B.fAe,B.abi,0.5)
a0.cH(B.fCf,B.fxX,B.DO)
r=[72,73,74,75,76]
for(q=a1.d,p=a1.e,v=0;v<5;++v){o=D.o.F(v,2)
n=D.o.an(v,2)
m=r[v]
l=q.t(0,m)
k=p.t(0,m)
a0.b=m
m=9.55+o*0.5
j=5.7-n*0.5
a0.bS(new A.K(m,j,-7.5),B.fwS,B.aer,0.3)
if(l)i=0
else i=k?-0.07:0.07
if(l)h=D.cb
else h=k?D.bo:D.bW
a0.bS(new A.K(m+0,j+i,-7.42),B.fxL,h,0.4)}a0.b=90
a0.bS(B.fzM,B.fw9,B.bhK,0.1)
a0.bS(B.fBs,B.fxn,B.Wq,0.1)
a0.bS(B.fCS,B.aR8,B.Wq,0.1)
a0.bS(B.fxh,B.aR8,B.Wq,0.1)
g=new A.fk7(a0)
g.$3(81,B.fwC,a1.x?B.wO:B.Wa)
a0.b=81
a0.cH(B.fzN,B.aR2,B.DX)
a0.cH(B.fyy,B.aR2,B.DX)
g.$5$h$w(82,B.fCi,G.Wl,0.65,0.4)
a0.b=82
a0.bS(B.fAY,B.fw8,B.abX,0.4)
f=!q.t(0,72)
a0.b=83
a0.e6(B.fAR,B.aQG,0.5,B.bfF,0.4,14)
a0.b86(B.fBV,0.3,f?A1.Wd:B.baX,0.7)
if(f){a0.b=0
a0.d=0.22
a0.iM(B.aQy,1.5,B.Vu,4,10,0)
a0.d=1}a0.b=94
a0.bS(B.fBN,B.aRa,B.m1,0.1)
a0.bS(B.fzY,B.aRa,B.m1,0.1)
a0.bS(B.fCg,B.fxA,B.m1,0.1)
a0.qb(B.fzm,B.fBX,B.E6,0.5,2)
a0.bS(B.fAE,B.fCO,B.DV,0.7)
a0.b=85
a0.jN(A.G5(B.cUi,0.2,6),0.055,B.kA,!1,0.9,8)
a0.b=84
a0.bS(B.fC3,B.fB5,B.Wa,0.3)
a0.cH(B.fyh,B.fCe,a1.y?B.act:B.ael)
a0.b=86
a0.jN(A.G5(B.cM1,0.35,3),0.11,B.pc,!1,0.3,8)
a0.b=87
a0.e6(B.fyS,B.fAI,0.19,a1.c?B.Vg:B.bdP,0.3,8)
a0.b=88
a0.bS(B.fvS,B.fwW,B.A2,0.7)
a0.Ka(B.fAB,B.aR3,0.72,B.A2,0.55,0.7,16)
a0.e6(B.aR3,B.fzv,0.78,B.bfi,0.7,16)
a0.b=89
a0.e6(B.fBx,B.aQA,0.85,B.b4X,0.6,18)
a0.e6(B.aQA,B.fz8,0.5,B.b4Y,0.5,12)
a0.cH(B.fA3,B.fCH,B.bdJ)
a0.b=95
for(p=a1.f,m=a1.r,v=0;v<3;++v){e=B.csw[v]
if(m.t(0,v)){j=e.a
i=e.b
a0.cH(new A.K(j,i,-7.82),B.fAT,B.zW)
a0.cH(new A.K(j,i,-7.79),B.fzc,B.b7R)}else if(p.t(0,v)){j=e.a
i=e.b
a0.cH(new A.K(j,i,-7.82),B.fv4,B.ads)
a0.cH(new A.K(j,i,-7.8),B.fzW,B.bi_)}}if(a1.w){a0.b=96
a0.e6(B.fzf,B.fyN,0.1,D.dj,0.7,8)}a0.e=0
a0.c=6
a0.b=0
a0.d=0.4
a0.bf0(B.aQt,B.aR1,B.a7D,B.a7B,B.abo,B.fzG,!0)
a0.bf0(B.aQZ,B.aR6,B.a7B,B.a7D,B.abo,B.fAX,!0)
a0.bg5(B.aQt,B.aR6,B.a7B,B.abD)
a0.bg5(B.aR1,B.aQZ,B.a7D,B.abD)
a0.d=1
p=q.t(0,72)?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
q=q.t(0,72)?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
m=a1.b
j=m&&!a1.c?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
m=m&&!a1.c?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new A.zk(d,C.E([70,B.dV7,91,B.dUx,92,B.dUR,93,B.dUZ,71,B.dVb,72,new A.da("Living room breaker",p,B.fCC,3.5),73,B.dUJ,74,B.dV0,75,B.dUo,76,B.dUU,81,B.dUW,82,B.dUf,83,new A.da("Ceiling light",q,B.aQG,7),84,B.dV1,85,B.dUq,86,new A.da("P-trap under the sink",j,B.fAA,4.5),87,new A.da("Slip nut (leaking?)",m,B.aQI,3.5),88,B.dUc,89,B.dV_,90,B.dV3,94,B.dUI,95,B.dV5,96,B.dUh],x.S,x.q),B.GE,B.vw)},
hd_(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.l4(p)
o.c=5
o.e=0.8
if(d.w)for(w=e*1.5,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.iM(new A.K(3.4+Math.sin(v*2)*0.12,3.3-u*u*2.8,-7.7),0.05,D.K8,3,6,0.9)}if(d.as){u=D.k.F(e*1.1,1)
o.iM(new A.K(3,3.9-u*u*0.7,-6.95),0.05,B.Vr,3,6,0.9)}if(d.Q)for(w=e*1.6,v=0;v<6;++v){u=D.k.F(w+v/6,1)
o.iM(new A.K(8.2+Math.sin(v*1.7)*0.15,2.2-u*1.5,-7.2),0.05,B.Vr,3,6,0.9)}if(d.at){o.d=0.55
o.bS(B.fxf,B.fyd,B.bfv,0.8)
o.d=1}if(d.x)for(w=e*2,t=e*6,v=0;v<8;++v){u=D.k.F(w+v*0.13,1)
s=v*2.4+t
r=Math.cos(s)
s=Math.sin(s)
q=C.aq(E.Wt,E.Wy,1-u)
q.toString
o.iM(new A.K(-3.2+r*u*0.7,1.3+s*u*0.7,-7.6+u*0.3),0.05,q,3,5,0)}if(d.z&&!d.d.t(0,72)){o.b=0
o.d=D.k.D((Math.sin(e*17)+Math.sin(e*29)+2)/4*0.5,0,0.6)
o.iM(B.aQy,1.5,B.Vu,4,10,0)
o.d=1}if(d.b&&!d.c){for(w=e*1.3,v=0;v<5;++v){u=D.k.F(w+v*0.2,1)
o.iM(new A.K(3.05,1.45-u*u*1.4,-6.95),0.05,B.KK,3,6,0.9)}o.d=0.5
o.bS(B.fx2,new A.K(0.7+0.3*Math.sin(e),0.02,0.5),B.KK,0.9)
o.d=1}return p},
bOW:function bOW(d,e,f,g){var _=this
_.a=5
_.b=!0
_.c=!1
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=!1},
fk9:function fk9(d){this.a=d},
fk6:function fk6(d){this.a=d},
fk5:function fk5(d){this.a=d},
fk8:function fk8(d){this.a=d},
fk7:function fk7(d){this.a=d},
mu(d,e,f,g){var w
try{F.dF(d,"",e,0,f,g)}catch(w){}},
y4(){A.mu(880,80,0.25,"tri")
C.bN(S.af9,new A.fl3(),x.H)},
huH(){return new A.MB(null)},
WP(d,e,f,g,h,i,j,k,l,m,n,o,p,q){return new A.b4P(o,d,n,m,g,e,j,k,f,h,p,q,i,l,null)},
Q9(d,e,f,g,h){var w=null,v=g?e.j(0.25):D.w.j(0.5),u=C.m(18),t=C.I(g?e:D.b5,D.r,1),s=x.p,r=C.a([],s)
D.d.v(r,C.a([C.W(f,g?e:D.ad,w,w,w,16),D.ea],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:D.ad,w,w,w,w,w,w,w,w,12,w,w,D.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aE(w,C.p(w,C.A(r,D.m,w,D.e,D.Q,0,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.h3,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a8)},
y3(d,e,f,g){var w=null,v=f==null,u=v?D.dq:g.j(0.9),t=C.m(14),s=C.W(e,v?D.c_:D.w,w,w,w,18)
return C.D(C.aE(w,C.p(w,C.A(C.a([s,D.bp,new C.dm(1,D.ci,C.d(d,w,w,w,w,w,w,C.l(w,w,v?D.c_:D.w,w,w,w,w,w,w,w,w,12.5,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),D.L,w,w),w)],x.p),D.m,w,D.ba,D.j,0,w,w),D.f,w,w,new C.o(u,w,w,t,w,w,D.n),w,w,w,w,D.uT,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),1)},
fBg(d,e,f,g){return C.bW(E.ny,null,new A.fBi(e,g,f),d,!0,!0,!0,D.lO,!1,!1,x.H)},
fl3:function fl3(){},
F8:function F8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
MB:function MB(d){this.a=d},
bhv:function bhv(){this.d=!1
this.c=this.a=null},
dJd:function dJd(d){this.a=d},
dJg:function dJg(d){this.a=d},
dJh:function dJh(d){this.a=d},
dJf:function dJf(d){this.a=d},
dJi:function dJi(d){this.a=d},
dJe:function dJe(d){this.a=d},
dJk:function dJk(d){this.a=d},
dJl:function dJl(d){this.a=d},
dJm:function dJm(d){this.a=d},
dJn:function dJn(d){this.a=d},
dJo:function dJo(d){this.a=d},
dJp:function dJp(d){this.a=d},
dJq:function dJq(d){this.a=d},
dJr:function dJr(d,e){this.a=d
this.b=e},
dJj:function dJj(d){this.a=d},
b4P:function b4P(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
coM:function coM(d){this.a=d},
coN:function coN(d){this.a=d},
fBi:function fBi(d,e,f){this.a=d
this.b=e
this.c=f},
fBh:function fBh(){},
AS:function AS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bR0:function bR0(d){this.a=d},
GN:function GN(d,e,f){this.c=d
this.d=e
this.a=f},
ay3:function ay3(){var _=this
_.r=_.f=_.e=_.d=$
_.w=""
_.x=0
_.y=null
_.z=!1
_.Q=0
_.c=_.a=_.as=null},
d1q:function d1q(d,e,f){this.a=d
this.b=e
this.c=f},
d1r:function d1r(d){this.a=d},
d1p:function d1p(d){this.a=d},
d1j:function d1j(d){this.a=d},
d1i:function d1i(d){this.a=d},
d1k:function d1k(d){this.a=d},
d1l:function d1l(d){this.a=d},
d1m:function d1m(d,e){this.a=d
this.b=e},
d1n:function d1n(d,e){this.a=d
this.b=e},
d1o:function d1o(d){this.a=d},
d1s:function d1s(d){this.a=d},
d1A:function d1A(){},
d1D:function d1D(d,e,f){this.a=d
this.b=e
this.c=f},
d1B:function d1B(d){this.a=d},
d1z:function d1z(d){this.a=d},
d1C:function d1C(d){this.a=d},
d1y:function d1y(d){this.a=d},
d1E:function d1E(d){this.a=d},
d1F:function d1F(d){this.a=d},
d1G:function d1G(d){this.a=d},
d1H:function d1H(d,e){this.a=d
this.b=e},
d1x:function d1x(d,e){this.a=d
this.b=e},
d1I:function d1I(d){this.a=d},
d1w:function d1w(d){this.a=d},
d1J:function d1J(d){this.a=d},
d1v:function d1v(d){this.a=d},
d1K:function d1K(d){this.a=d},
d1u:function d1u(d){this.a=d},
d1L:function d1L(d){this.a=d},
d1t:function d1t(d){this.a=d},
a8d:function a8d(d,e){this.c=d
this.a=e},
aDZ:function aDZ(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
eKf:function eKf(d,e,f){this.a=d
this.b=e
this.c=f},
eKg:function eKg(d){this.a=d},
eKe:function eKe(d){this.a=d},
eK8:function eK8(d){this.a=d},
eK9:function eK9(d,e){this.a=d
this.b=e},
eKa:function eKa(d,e){this.a=d
this.b=e},
eKb:function eKb(d,e){this.a=d
this.b=e},
eKc:function eKc(d){this.a=d},
eKd:function eKd(d,e){this.a=d
this.b=e},
eKk:function eKk(){},
eKo:function eKo(d,e){this.a=d
this.b=e},
eKl:function eKl(d){this.a=d},
eKm:function eKm(d,e){this.a=d
this.b=e},
eKj:function eKj(d,e){this.a=d
this.b=e},
eKn:function eKn(d){this.a=d},
eKi:function eKi(d){this.a=d},
eKh:function eKh(){},
a3F:function a3F(d,e){this.c=d
this.a=e},
ayi:function ayi(){var _=this
_.f=_.e=_.d=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
d4l:function d4l(d,e,f){this.a=d
this.b=e
this.c=f},
d4m:function d4m(d){this.a=d},
d4k:function d4k(d){this.a=d},
d4d:function d4d(d){this.a=d},
d4g:function d4g(d){this.a=d},
d4h:function d4h(d,e){this.a=d
this.b=e},
d4i:function d4i(d,e){this.a=d
this.b=e},
d4f:function d4f(d){this.a=d},
d4j:function d4j(d,e){this.a=d
this.b=e},
d4e:function d4e(d){this.a=d},
d4q:function d4q(){},
d4w:function d4w(d,e){this.a=d
this.b=e},
d4r:function d4r(d){this.a=d},
d4s:function d4s(d){this.a=d},
d4p:function d4p(d){this.a=d},
d4u:function d4u(d,e){this.a=d
this.b=e},
d4o:function d4o(d,e){this.a=d
this.b=e},
d4t:function d4t(d){this.a=d},
d4v:function d4v(d){this.a=d},
d4n:function d4n(d){this.a=d},
aza:function aza(d){this.a=d},
azb:function azb(d){var _=this
_.d=d
_.f=_.e=$
_.r=0
_.w=""
_.x=null
_.y=!1
_.c=_.a=_.z=null},
dbp:function dbp(d,e,f){this.a=d
this.b=e
this.c=f},
dbq:function dbq(d){this.a=d},
dbo:function dbo(d){this.a=d},
dbj:function dbj(d){this.a=d},
dbl:function dbl(d,e){this.a=d
this.b=e},
dbm:function dbm(d,e){this.a=d
this.b=e},
dbn:function dbn(d,e){this.a=d
this.b=e},
dbk:function dbk(d){this.a=d},
dby:function dby(d,e){this.a=d
this.b=e},
dbt:function dbt(d,e){this.a=d
this.b=e},
dbv:function dbv(d){this.a=d},
dbu:function dbu(d){this.a=d},
dbw:function dbw(d){this.a=d},
dbs:function dbs(d){this.a=d},
dbx:function dbx(d){this.a=d},
dbr:function dbr(d,e){this.a=d
this.b=e},
jw:function jw(d,e){this.a=d
this.b=e},
LY:function LY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5K:function a5K(d){this.a=d},
c4G:function c4G(d){this.a=d},
fO9(){var w=x.N
return new A.cft(C.aW(w),C.E(["n1",!1,"n2",!1],w,x.y),C.V(x.S,w))},
i2p(d,e,f){var w,v
if(!f.c.t(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
fAF(){var w,v,u=C.a([B.aQq,B.fyI],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new A.K(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}D.d.v(u,A.G5(B.cVv,1,6))
return u},
bzc(d){var w,v,u,t,s="trap",r=C.a([],x.z),q=new A.l4(r)
q.b=49
q.qb(B.fv_,B.fvJ,B.m1,0.1,2)
q.qb(B.fCu,B.fv1,B.m1,0.1,2)
q.b=47
q.j1(B.fzF,B.fvK,B.uF,3)
q.j1(B.fvm,B.fv2,B.uF,3)
q.b=46
q.qb(B.fwb,B.fAh,B.E6,0.5,3)
q.ba3(B.fB9,B.aQd,6.5,B.DV,!0,0.7,20)
q.e6(B.fAx,B.fys,1.5,B.kA,0.85,14)
q.b=48
q.a2H(B.a7E,B.fxv,0.92,B.pc,!1,!0,0.3,14)
q.cQC(B.a7E,B.fC_,1,0.72,B.pc,0.3)
w=new A.fkK(d,q)
w.$5(41,B.a1o,B.kA,0.85,"tail")
w.$5(42,A.fAF(),B.pc,0.3,s)
w.$5(43,B.a2d,B.pc,0.3,"arm")
w=new A.fkJ(d,q)
v=d.a
w.$6(44,"n1",B.a7A,B.w7,B.fxG,v.t(0,"tail")&&v.t(0,s))
w.$6(45,"n2",B.a7C,B.Tk,B.fB4,v.t(0,s)&&v.t(0,"arm"))
if(v.t(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=A.fAF()
w=C.T(u).k("a2<1>")
t=C.B(new C.a2(u,new A.fkI(),w),w.k("H.E"))
if(t.length>1)q.aGK(t,0.4092,B.bhL,!1,!0,0.6,8)
q.d=1
q.e=0}return new A.zk(r,C.E([41,B.dUs,42,B.dUu,43,B.dUY,44,B.dUM,45,B.dV8,46,B.dUz,47,B.dUG,48,B.dUa,49,B.dUw],x.S,x.q),B.GE,B.vw)},
i0o(d,e){var w,v,u,t,s,r,q,p=C.a([],x.z),o=new A.l4(p),n=d.d
if(n.length!==0){w=n==="n1"?B.fCJ:B.fBE
for(n=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=D.k.F(n+s*0.2,1)
o.iM(new A.K(v,u+(-r*6*r-r*1.5),t),0.22*(1-r*0.3),B.KK,3,6,0.9)}}else if(d.c){n=x.x
v=C.B(B.a1o,n)
u=A.fAF()
D.d.v(v,C.dc(u,1,null,C.T(u).c))
D.d.v(v,C.dc(B.a2d,1,null,n))
for(n=e*0.45,s=0;s<18;++s){r=D.k.F(n+s/18,1)
q=D.o.D(D.k.bw(r*(v.length-1)),0,v.length-2)
u=v.length
o.iM(A.zC(v[q],v[q+1],r*(u-1)-q),0.38,B.bhd,3,6,0.9)}for(n=e*2.2,s=0;s<6;++s)o.iM(new A.K(0,14-D.k.F(n+s/6,1)*5.4,0),0.3,B.Vr,3,6,0.9)}return p},
aff(d){switch(d){case 61:return B.fuZ
case 62:return B.fBC
case 63:return B.fz4
default:return B.fyV}},
fSL(d){var w=d==="hot",v=A.aff(w?61:62),u=A.aff(w?63:64),t=w?-1:1
return A.ags(C.a([v,v.ae(0,new A.K(t*0.6,2.2,1.2)),A.zC(v,u,0.5).ae(0,new A.K(t*1.4,0,2.6)),u.ae(0,new A.K(-t*0.2,-2,1)),u],x.o),6)},
aNd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.l4(f)
e.b=67
e.j1(B.fuX,B.fvz,B.uF,3)
e.b=66
e.qb(B.fyH,B.fBZ,B.E6,0.5,3)
e.o5(B.fAS,B.fzR,5.5,E.E_,16)
e.b=65
e.e6(B.fBO,B.aQY,3.4,B.kA,0.9,20)
e.jN(A.G5(B.d_B,1.4,6),0.5,B.kA,!0,0.9,12)
for(w=0;w<2;++w){v=B.cWc[w]
u=v*1.2
e.e6(new A.K(u,15.5,-3.6),new A.K(u,17.7,-3.6),0.38,B.kA,0.9,10)
t=v<0?B.rW:B.nv
e.e6(new A.K(u,17.7,-3.6),new A.K(u,18.6,-3.6),0.6,t,0.6,12)}for(u=[B.eec,B.ea5],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.e6(new A.K(v,15.3,-3.6),new A.K(v,11.4,-3.6),0.45,B.kA,0.9,10)
e.e6(new A.K(v,11.4,-3.6),new A.K(v,10.7,-3.6),0.3,B.bdt,0.6,8)
e.yU(new A.K(v,11.3,-3.6),new A.K(v,11.9,-3.6),0.78,0.48,B.bfg,0.7,8)}for(u=[B.evh,B.ex_],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.e6(new A.K(v,-1.5,-6),new A.K(v,-1.5,-3.6),0.4,B.K_,0.7,12)
e.e6(new A.K(v,-1.5,-4.4),new A.K(v,0.7,-4.4),0.78,B.rM,0.8,12)
e.e6(new A.K(v,0.7,-4.4),new A.K(v,1.5,-3.6),0.38,B.rM,0.8,10)
e.e6(new A.K(v,-0.2,-4.4),new A.K(v,-0.2,-3.1),0.2,B.ab3,0.7,8)
e.e6(new A.K(v,-0.2,-3.1),new A.K(v,-0.2,-2.8),0.95,t.c,0.5,12)
e.yU(new A.K(v,1.2,-3.6),new A.K(v,1.9,-3.6),0.78,0.4,B.rM,0.8,8)}for(u=x.o,w=0;w<2;++w){s=B.d1Y[w]
t=s==="hot"
r=t?B.ctq:B.ctD
q=C.T(r).k("a2<1>")
p=C.B(new C.a2(r,new A.fjW(d,s),q),q.k("H.E"))
e.b=t?68:69
o=t?B.rW:B.nv
t=p.length
if(t===2){n=A.fSL(s)
e.jN(n,0.34,B.KB,!1,0.7,8)
m=n.length/2|0
e.jN(C.a([n[m-1],n[m],n[m+1]],u),0.4,o,!1,0.4,8)
for(t=r.length,l=0;l<t;++l){k=A.aff(r[l])
q=k.a+0
j=k.b
i=k.c+0
e.yU(new A.K(q,j+-0.2,i),new A.K(q,j+0.6,i),0.62,0.3,B.rM,0.8,8)}}else if(t===1){k=A.aff(D.d.gL(p))
h=D.d.gL(p)===D.d.gL(r)?1:-1
t=k.a+0
q=k.b
j=k.c
e.jN(C.a([k,new A.K(t,q+h*1.4,j+1),new A.K(t,q+h*3,j+2.4)],u),0.34,B.KB,!1,0.7,8)
j+=0
e.yU(new A.K(t,q+-0.2,j),new A.K(t,q+0.6,j),0.62,0.3,B.rM,0.8,8)}}if(d.r){e.b=0
e.d=0.5
for(u=d.e,w=0;w<4;++w){g=B.a28[w]
t=g.a
if(u.h(0,t)!=null)continue
t=A.aff(t)
q=g.c.t(0,"hot")?B.rW:B.nv
e.iM(new A.K(t.a+0,t.b+0,t.c+0.9),0.65,q,4,8,0.1)}e.d=1}return new A.zk(f,C.E([61,B.dUj,62,B.dUl,63,B.dUe,64,B.dUm,65,B.dUH,66,B.dUD,67,B.dUb,68,B.dVc,69,B.dUK],x.S,x.q),B.GE,B.vw)},
hSl(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.z),m=new A.l4(n)
if(!d.f)return n
w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"
t=new A.fmb(e,m)
if(v){s=A.fSL("hot")
for(r=e*0.5,q=0;q<10;++q){p=D.k.F(r+q/10,1)
o=D.o.D(D.k.bw(p*(s.length-1)),0,s.length-2)
m.iM(A.zC(s[o],s[o+1],p*(s.length-1)-o),0.2,D.K8,3,6,0.9)}}else if(w.h(0,61)==null)t.$2(61,D.K8)
if(u){s=A.fSL("cold")
for(w=e*0.5,q=0;q<10;++q){p=D.k.F(w+q/10,1)
o=D.o.D(D.k.bw(p*(s.length-1)),0,s.length-2)
m.iM(A.zC(s[o],s[o+1],p*(s.length-1)-o),0.2,B.VZ,3,6,0.9)}}else if(w.h(0,62)==null)t.$2(62,B.VZ)
if(v&&u)for(w=e*2,q=0;q<8;++q){p=D.k.F(w+q/8,1)
r=C.aq(B.bhh,B.VZ,0.5)
r.toString
m.iM(new A.K(0,21-p*6.5,1.6),0.26,r,3,6,0.9)}return n},
fm9(d){return D.d.d9(B.a28,new A.fma(d))},
cft:function cft(d,e,f){var _=this
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
fkK:function fkK(d,e){this.a=d
this.b=e},
fkJ:function fkJ(d,e){this.a=d
this.b=e},
fkI:function fkI(){},
fjW:function fjW(d,e){this.a=d
this.b=e},
fmb:function fmb(d,e){this.a=d
this.b=e},
fma:function fma(d){this.a=d},
fO8(d,e,f){var w=x.N
w=new A.cfj(e,d,C.aW(w),C.V(w,x.S),C.aW(w))
w.bvg(d,e,f)
return w},
hcl(b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=C.a([],x.z),b3=new A.l4(b2),b4=C.V(x.S,x.q),b5=C.a([],x.E),b6=b7.c
b6===$&&C.c()
w=b6.a==="bathroom"
v=w?28:0
b3.b=9199
b3.j1(B.fBj,B.fCs,B.b7u,4)
b3.j1(B.fAg,B.fBA,B.Vp,4)
b3.j1(new A.K(v+19.8+0.6,24,16),B.fyr,B.uF,2)
b4.n(0,9199,B.dUv)
b3.b=9198
b3.bS(new A.K(v,0.6,10),B.fBM,B.m1,0.1)
b3.bS(new A.K(v,29.4,18.6),B.fyc,B.m1,0.1)
b3.bS(new A.K(v-19.4,13.6,10.5),B.fCh,B.m1,0.1)
for(u=[B.ezK,B.ezG,B.eyF,B.eyC],t=0;t<4;++t){s=u[t].a
b3.bS(new A.K(v+s[0],33,s[1]),new A.K(s[2],2.4,s[3]),B.E6,0.5)}b3.a2H(new A.K(v,27,8),new A.K(v,34.3,8),8,B.aea,!1,!0,0.7,20)
b3.e6(new A.K(v,27,8),new A.K(v,27.2,8),8,B.b9T,0.5,20)
b3.o5(new A.K(v,27.1,8),new A.K(v,27.3,8),1.4,B.rK,12)
b3.a2H(new A.K(v+15,23.6,8),new A.K(v+19.4,23.6,8),0.92,B.pc,!1,!0,0.3,12)
b4.n(0,9198,B.dUV)
b3.b=9400
b3.e6(new A.K(-56,18,0),new A.K(-56,18,6),1.5,B.rM,0.8,12)
u=b7.r?B.nv:D.bo
b3.e6(new A.K(-57,18,6),new A.K(-55,18,6.5),4,u,0.5,14)
b3.e6(new A.K(-56,16,0),new A.K(-56,20,0),1,B.K_,0.7,10)
u=b7.r?"The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.":"The water is OFF. Turn it ON to test your work."
b4.n(0,9400,new A.da("Main water valve",u,new A.K(-56,18,4),22))
u=b7.r
s=u?"MAIN WATER: ON":"MAIN WATER: OFF"
u=u?D.dS:D.bo
b5.push(new A.ub(new A.K(-56,24,6),s,u))
r=new A.fkH(b3)
u=v-8
r.$1(u)
s=v+8
r.$1(s)
if(w)r.$1(-40)
q=new A.K(v,21,8)
p=new A.fkF(q)
o=new A.fkz(b3,b7)
n=new A.fkA(b3,b7)
m=new A.fkG(b7,b4,b9,b8,b5)
l=b6.c
for(b6=l.length,k=b7.x,j=b7.e,i=b7.f,h=x.o,t=0;t<b6;++t){g=l[t]
f=g.a
e=j.t(0,f)
if(e){d=b7.uN(0,f)
a0=i.h(0,f)
if(a0==null)a0=0
a1=d.r-a0>0}else a1=!1
a2=D.d.cJ(l,g)
a3=9100+a2
k.t(0,f)
switch(f){case"flange":a4=new A.K(-30,0.3,14)
if(e){b3.b=a3
b3.e6(a4,new A.K(-30,0.8999999999999999,14),5.5,B.pc,0.4,18)
b3.yU(new A.K(-30,0.8,14),new A.K(-30,1.2,14),5.5,3.2,B.rM,0.8,18)}else n.$3(f,new A.K(-30,0.8,14),B.fuC)
m.$3(g,a4,"Flange spot")
break
case"wax":a4=new A.K(-30,1.2,14)
if(e){b3.b=a3
b3.yU(a4,new A.K(-30,2.3,14),4.2,2.4,B.bi7,0.2,18)}else n.$3(f,new A.K(-30,1.7,14),B.fAq)
m.$3(g,a4,"Wax ring spot")
break
case"toilet":if(e){b3.b=a3
b3.Ka(new A.K(-30,0.5,14),new A.K(-30,16,14),8.5,B.A2,6,0.8,20)
b3.e6(new A.K(-30,16,14),new A.K(-30,17,14),9.5,B.KH,0.8,20)
b3.bS(new A.K(-30,22,4.5),B.aQj,B.A2,0.8)
b3.bS(new A.K(-30,29.2,4.5),B.fxc,B.KH,0.8)}else{b3.b=a3
b3.d=0.32
b3.o5(new A.K(-30,0.5,14),new A.K(-30,17,14),8.5,D.b0,16)
b3.cH(new A.K(-30,22,4.5),B.aQj,D.b0)
b3.d=1}m.$3(g,new A.K(-30,12,12),"Toilet spot")
break
case"bolts":if(e){for(f=9200+a2*2,a5=0;a5<2;++a5){a6=B.avS[a5]
b3.b=f+(a6<0?0:1)
d=-30+a6
b3.e6(new A.K(d,0.5,17),new A.K(d,3.6,17),0.45,B.DV,0.8,8)
a0=a1?D.cw:B.DV
b3.e6(new A.K(d,3.4,17),new A.K(d,4.6,17),1.2,a0,0.8,6)}f=a1?"The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.":"The toilet is bolted down."
b4.n(0,a3,new A.da(g.c,f,new A.K(-30,3,17),20))}else for(a5=0;a5<2;++a5){a6=B.avS[a5]
b3.b=a3
b3.d=0.4
f=-30+a6
b3.o5(new A.K(f,0.5,17),new A.K(f,4.6,17),1.2,D.b0,8)
b3.d=1}m.$3(g,new A.K(-30,3,17),"Bolts")
break
case"tvalve":A.fSe(b3,a3,new A.K(-40,8,1.6),e,B.nv,new A.fkw(n,g,-30))
m.$3(g,new A.K(-40,8,2),"Valve")
break
case"those":if(e){b3.b=a3
b3.jN(A.ags(C.a([new A.K(-40,10,1.6),new A.K(-42,14,3.5),new A.K(-36,17,3.6),new A.K(-32,21,2.5)],h),6),0.55,B.KB,!1,0.7,8)
b3.jN(C.a([new A.K(-36.8,15.5,3.6),new A.K(-35,16.4,3.6)],h),0.62,B.nv,!1,0.4,8)
if(a1)b3.o5(new A.K(-40,10,1.6),new A.K(-40,11.2,1.6),0.9,D.cw,8)}else o.$3$r(f,A.ags(C.a([new A.K(-40,10,1.6),new A.K(-42,14,3.5),new A.K(-36,17,3.6),new A.K(-32,21,2.5)],h),6),0.9)
m.$3(g,new A.K(-36,15,3),"Toilet hose")
break
case"faucet":if(e){b3.b=a3
b3.e6(new A.K(v,34.2,8),new A.K(v,34.6,8),3.6,B.kA,0.9,20)
b3.jN(A.G5(C.a([new A.K(v,34.6,8),new A.K(v,40,8),new A.K(v,43,10),new A.K(v,43,14),new A.K(v,41.2,14.6)],h),1.4,6),0.5,B.kA,!0,0.9,10)
for(a5=0;a5<2;++a5){a6=E.avQ[a5]
f=v+a6
b3.e6(new A.K(f,34.6,8),new A.K(f,36.6,8),0.5,B.kA,0.9,8)
d=a6<0?B.rW:B.nv
b3.e6(new A.K(f,36.6,8),new A.K(f,37.6,8),0.8,d,0.6,10)}for(a5=0;a5<2;++a5){f=v+B.d4B[a5]
b3.e6(new A.K(f,34,8),new A.K(f,28.4,8),0.45,B.kA,0.9,8)}}else n.$3(f,new A.K(v,38,9),B.fuB)
m.$3(g,new A.K(v,38,8),"Faucet spot")
break
case"vhot":A.fSe(b3,a3,new A.K(u,8,1.6),e,B.rW,new A.fkx(n,g,v))
m.$3(g,new A.K(u,8,2),"Hot valve")
break
case"vcold":A.fSe(b3,a3,new A.K(s,8,1.6),e,B.nv,new A.fky(n,g,v))
m.$3(g,new A.K(s,8,2),"Cold valve")
break
case"hhot":case"hcold":a7=f==="hhot"
a8=a7?-1:1
d=v+a8*3
a9=A.ags(C.a([new A.K(v+a8*8,10.5,1.8),new A.K(v+a8*9,16,3.5),new A.K(v+a8*6,22,4.2),new A.K(d,27.5,6),new A.K(d,28.6,8)],h),6)
if(e){b3.b=a3
b3.jN(a9,0.5,B.KB,!1,0.7,8)
b0=a9.length/2|0
f=C.a([a9[b0-1],a9[b0],a9[b0+1]],h)
b3.jN(f,0.58,a7?B.rW:B.nv,!1,0.4,8)
if(a1){f=D.d.gL(a9)
d=D.d.gL(a9)
b3.o5(f,new A.K(d.a+0,d.b+1.4,d.c+0),0.9,D.cw,8)
d=D.d.gal(a9)
b3.o5(new A.K(d.a,d.b-1.4,d.c),D.d.gal(a9),0.9,D.cw,8)}}else o.$3$r(f,a9,0.9)
f=a9[a9.length/2|0]
m.$3(g,f,a7?"Hot hose":"Cold hose")
break
case"tail":case"trap":case"arm":d=f==="tail"
if(d)a0=B.a1o
else a0=f==="trap"?A.fAF():B.a2d
b1=p.$1(a0)
if(e){b3.b=a3
a0=d?B.kA:B.pc
b3.a5h(b1,0.66,a0,!1,!0,!0,d?0.85:0.3,12)}else o.$3$r(f,b1,0.78)
a0=J.a8(b1)
a0=a0.h(b1,a0.gM(b1)/2|0)
if(d)f="Tailpiece"
else f=f==="trap"?"P-trap":"Trap arm"
m.$3(g,a0,f)
break}}b6=new A.fkD(l,b7,b3,b4)
b6.$4("trap",q.ae(0,B.a7A),B.w7,0)
b6.$4("arm",q.ae(0,B.a7C),B.Tk,1)
return new A.zk(b2,b4,b5,B.vw)},
fSe(d,e,f,g,h,i){if(!g){i.$0()
return}d.b=e
d.e6(f.ae(0,B.fAr),f.ae(0,B.aQX),0.9,B.rM,0.8,12)
d.e6(f.ae(0,B.aQX),f.ae(0,B.fy8),0.45,B.rM,0.8,10)
d.e6(f.ae(0,B.fBJ),f.ae(0,B.aRb),0.3,B.ab3,0.7,8)
d.e6(f.ae(0,B.aRb),f.ae(0,B.fC4),1.2,h,0.5,12)},
i0i(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.z),e=new A.l4(f),d=a0.x
if(d.a===0)return f
w=a0.c
w===$&&C.c()
v=new A.fAu(w.a==="bathroom"?28:0,-30)
for(d=C.ea(d,d.r,C.a3(d).c),u=d.$ti.c,t=a0.e;d.C();){s=d.d
if(s==null)s=u.a(s)
r=v.$1(s)
q=D.d.ix(w.c,new A.fAt(s)).b==="valve"||!t.t(0,s)
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
e.iM(new A.K(s+l*k*m,p+(k*j-k*k*i),o+(1.5+k*h)),g,B.KK,3,6,0.9);++n}}return f},
na:function na(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
VW:function VW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cfj:function cfj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=g
_.r=!0
_.w=0
_.x=h
_.y=!1},
cfn:function cfn(d){this.a=d},
cfo:function cfo(d){this.a=d},
cfk:function cfk(d){this.a=d},
cfp:function cfp(d){this.a=d},
cfq:function cfq(d){this.a=d},
cfr:function cfr(){},
cfs:function cfs(){},
cfl:function cfl(d){this.a=d},
cfm:function cfm(d){this.a=d},
fkH:function fkH(d){this.a=d},
fkF:function fkF(d){this.a=d},
fkz:function fkz(d,e){this.a=d
this.b=e},
fkC:function fkC(d){this.a=d},
fkA:function fkA(d,e){this.a=d
this.b=e},
fkB:function fkB(d){this.a=d},
fkG:function fkG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fkw:function fkw(d,e,f){this.a=d
this.b=e
this.c=f},
fkx:function fkx(d,e,f){this.a=d
this.b=e
this.c=f},
fky:function fky(d,e,f){this.a=d
this.b=e
this.c=f},
fkD:function fkD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fkE:function fkE(d){this.a=d},
fAu:function fAu(d,e){this.a=d
this.b=e},
fAt:function fAt(d){this.a=d},
UW:function UW(d,e){this.d=d
this.a=e},
aCH:function aCH(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x=""
_.y=0
_.z=null
_.as=_.Q=!1
_.c=_.a=_.at=null},
ee8:function ee8(d,e,f){this.a=d
this.b=e
this.c=f},
ee9:function ee9(d){this.a=d},
ee7:function ee7(d){this.a=d},
ee1:function ee1(d){this.a=d},
eea:function eea(d){this.a=d},
edU:function edU(d,e){this.a=d
this.b=e},
edV:function edV(d,e){this.a=d
this.b=e},
edW:function edW(d){this.a=d},
ee0:function ee0(d){this.a=d},
edZ:function edZ(d){this.a=d},
ee_:function ee_(d,e){this.a=d
this.b=e},
ee6:function ee6(d){this.a=d},
edY:function edY(d,e,f){this.a=d
this.b=e
this.c=f},
edX:function edX(d,e,f){this.a=d
this.b=e
this.c=f},
eeb:function eeb(d){this.a=d},
eef:function eef(d,e){this.a=d
this.b=e},
eed:function eed(){},
eec:function eec(d){this.a=d},
eee:function eee(d,e){this.a=d
this.b=e},
ee5:function ee5(d){this.a=d},
ee3:function ee3(d,e){this.a=d
this.b=e},
ee2:function ee2(d,e){this.a=d
this.b=e},
ee4:function ee4(d,e){this.a=d
this.b=e},
kX(d){return D.d.ix(B.tK,new A.fIK(d))},
fOy(d,e,f,g){var w=x.S,v=x.N
w=new A.b3k(g,f,C.V(w,v),C.aW(w),C.aW(w),C.V(w,x.al),C.a([new A.WB(),new A.WB()],x.X),C.V(w,x.W),C.aW(w),C.V(w,v),C.aW(w),C.a([],x.s))
w.cfg(d,e)
return w},
hAx(d){var w
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
fIK:function fIK(d){this.a=d},
pF:function pF(d,e,f){this.a=d
this.b=e
this.c=f},
WB:function WB(){var _=this
_.a=!1
_.b=0
_.c=!0
_.d=!1},
atF:function atF(d,e){var _=this
_.a=!1
_.b=d
_.c=e
_.e=_.d=!1},
aS_:function aS_(d,e){this.a=d
this.b=e
this.c=!1},
eC:function eC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b3k:function b3k(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ckh:function ckh(){},
cko:function cko(d){this.a=d},
ckp:function ckp(d){this.a=d},
ckq:function ckq(d,e){this.a=d
this.b=e},
ckr:function ckr(d,e){this.a=d
this.b=e},
ckt:function ckt(d){this.a=d},
cks:function cks(d,e){this.a=d
this.b=e},
ckg:function ckg(d){this.a=d},
cke:function cke(){},
ckf:function ckf(d){this.a=d},
ckm:function ckm(){},
ckn:function ckn(){},
cki:function cki(){},
ckj:function ckj(d){this.a=d},
ckk:function ckk(d){this.a=d},
cku:function cku(d){this.a=d},
ckl:function ckl(d){this.a=d},
fNr(d,e,f){return new A.UZ(e,f,d,null)},
kT:function kT(d,e,f){this.a=d
this.b=e
this.c=f},
UZ:function UZ(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.a=g},
aCO:function aCO(d,e,f){var _=this
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
eiv:function eiv(d,e,f){this.a=d
this.b=e
this.c=f},
eiw:function eiw(d){this.a=d},
eiu:function eiu(d){this.a=d},
ehK:function ehK(d){this.a=d},
ehL:function ehL(d){this.a=d},
ehJ:function ehJ(d){this.a=d},
ehM:function ehM(d){this.a=d},
ehN:function ehN(d){this.a=d},
ehV:function ehV(d){this.a=d},
ehO:function ehO(d){this.a=d},
eic:function eic(d,e){this.a=d
this.b=e},
ehW:function ehW(d){this.a=d},
eir:function eir(d){this.a=d},
eis:function eis(d){this.a=d},
eit:function eit(d,e){this.a=d
this.b=e},
eip:function eip(d){this.a=d},
eiq:function eiq(d,e){this.a=d
this.b=e},
eio:function eio(d){this.a=d},
eik:function eik(d){this.a=d},
eil:function eil(d,e,f){this.a=d
this.b=e
this.c=f},
eim:function eim(d){this.a=d},
ein:function ein(d,e,f){this.a=d
this.b=e
this.c=f},
eix:function eix(d,e){this.a=d
this.b=e},
ehU:function ehU(d){this.a=d},
ehS:function ehS(d){this.a=d},
ehT:function ehT(d,e){this.a=d
this.b=e},
ehR:function ehR(d){this.a=d},
ehP:function ehP(d){this.a=d},
ehQ:function ehQ(d,e){this.a=d
this.b=e},
ehX:function ehX(d,e){this.a=d
this.b=e},
eia:function eia(){},
eib:function eib(){},
ehY:function ehY(d){this.a=d},
ehZ:function ehZ(d){this.a=d},
ei_:function ei_(d){this.a=d},
ei2:function ei2(){},
ei3:function ei3(){},
ei4:function ei4(){},
ei5:function ei5(){},
ei6:function ei6(){},
ei7:function ei7(d){this.a=d},
ei8:function ei8(){},
ei9:function ei9(d){this.a=d},
ei0:function ei0(d){this.a=d},
ei1:function ei1(){},
eiO:function eiO(d,e){this.a=d
this.b=e},
eiQ:function eiQ(d){this.a=d},
eiC:function eiC(d){this.a=d},
eiP:function eiP(d){this.a=d},
eiF:function eiF(d){this.a=d},
eiG:function eiG(d,e){this.a=d
this.b=e},
eiE:function eiE(d,e){this.a=d
this.b=e},
eiH:function eiH(d,e){this.a=d
this.b=e},
eiD:function eiD(d,e){this.a=d
this.b=e},
eiR:function eiR(d,e){this.a=d
this.b=e},
eiB:function eiB(d,e){this.a=d
this.b=e},
eiS:function eiS(d){this.a=d},
eiA:function eiA(d){this.a=d},
eiT:function eiT(d,e){this.a=d
this.b=e},
eiz:function eiz(d,e){this.a=d
this.b=e},
eiU:function eiU(d){this.a=d},
eiV:function eiV(d){this.a=d},
eiW:function eiW(d,e,f){this.a=d
this.b=e
this.c=f},
eiy:function eiy(d,e,f){this.a=d
this.b=e
this.c=f},
eiI:function eiI(d){this.a=d},
eiJ:function eiJ(d,e){this.a=d
this.b=e},
eiK:function eiK(d){this.a=d},
eiL:function eiL(d){this.a=d},
eiM:function eiM(d){this.a=d},
eiN:function eiN(d){this.a=d},
eij:function eij(d){this.a=d},
eii:function eii(d){this.a=d},
eif:function eif(d,e){this.a=d
this.b=e},
eid:function eid(){},
eie:function eie(){},
eig:function eig(d,e){this.a=d
this.b=e},
eih:function eih(d,e){this.a=d
this.b=e},
a1F(d,e){var w=d.d,v=e.a,u=e.c,t=e.b,s=w.a,r=w.b
w=w.c
return d.c?new A.K(s+v,r-u,w+t):new A.K(s+v,r+t,w+u)},
fRx(d,e,f){var w,v,u,t,s,r=d.a,q=e.d,p=e.c?A.G9(r,1.5707963267948966,0,q):A.G9(r,0,0,q)
r=C.a([],x.z)
for(q=p.length,w=0;w<p.length;p.length===q||(0,C.L)(p),++w){v=p[w]
u=v.d
u=u===0?0:f.$1(u)
r.push(new A.qm(v.a,v.b,v.c,u,v.e,v.f,v.r,v.w,v.x))}q=C.V(x.S,x.q)
for(u=d.b,u=u.gdL(u),u=u.gah(u);u.C();){t=u.gU(u)
s=f.$1(t.a)
t=t.b
q.n(0,s,new A.da(t.a,t.b,A.a1F(e,t.c),t.d))}return new C.z(r,q)},
hMf(a3,a4,a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.i,a2=C.eu([a4,a5],a1)
for(w=b1.length,v=0;v<b1.length;b1.length===w||(0,C.L)(b1),++v){u=b1[v].a
a2.J(0,D.k.D(u[0],a4,a5))
a2.J(0,D.k.D(u[1],a4,a5))}t=C.B(a2,a2.$ti.k("cl.E"))
D.d.ff(t)
for(w=C.T(b1).k("a2<1>"),u=w.k("H.E"),s=0;r=s+1,r<t.length;s=r){q=t[s]
p=t[r]
o=p-q
if(o<0.01)continue
n=(q+p)/2
m=C.B(new C.a2(b1,new A.fe6(n),w),u)
l=C.eu([a6,a7],a1)
for(k=m.length,v=0;v<m.length;m.length===k||(0,C.L)(m),++v){j=m[v].a
l.J(0,D.k.D(j[2],a6,a7))
l.J(0,D.k.D(j[3],a6,a7))}i=C.B(l,l.$ti.k("cl.E"))
D.d.ff(i)
for(k=!(o>30),h=0;g=h+1,g<i.length;h=g){f=i[h]
e=i[g]
j=e-f
if(j<0.01)continue
d=(f+e)/2
if(D.d.b8(m,new A.fe7(d)))continue
a0=!k||j>60?2:1
a3.j1(new A.K(n,d,a8),new A.K(o,j,a9),b0,a0)}}},
Ci(c9,d0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=x.z,c2=C.a([],c1),c3=new A.l4(c2),c4=C.a([],x.h),c5=x.E,c6=C.a([],c5),c7=x.S,c8=C.V(c7,x.q)
c3.b=8001
c3.qb(B.fwI,B.fyK,B.Ak,0.15,4)
c3.j1(B.fwu,B.aQB,B.ab_,3)
c3.bS(B.fBl,B.fCa,B.KR,0.5)
c3.cH(B.aQE,B.fwp,B.A9)
c3.cH(B.aQE,B.fCj,B.A9)
c3.j1(B.fyP,B.aQB,B.ab_,3)
c3.bS(B.fwq,B.fyQ,B.JQ,0.15)
c3.bS(B.fzi,B.fyT,B.DF,0.8)
c3.b=0
c3.d=c9.gyi()?0.42:0.1
c3.j1(B.fvD,B.fAm,c9.gyi()?B.qw:B.b44,3)
c3.d=1
c3.b=8001
if(!c9.gyi())for(w=0;w<10;++w)c3.aBb(new A.K(-72+w*16,51.3,55),B.fAH,B.m1,!1,0.05)
else{c3.bS(B.fzD,B.fxM,D.c,0.2)
c3.bS(B.fCT,B.aQM,D.c,0.2)
c3.bS(B.fxe,B.aQM,D.c,0.2)}if(c9.gyi())c3.bS(B.fxl,B.fxP,B.qw,0.2)
c3.b=8001
c3.j1(B.fC1,B.fCv,B.baE,2)
c3.bS(B.fBn,B.fwf,B.acN,0.1)
c3.bS(B.fBm,B.fwg,B.Vq,0.1)
c3.bS(B.fBi,B.aQu,B.Vq,0.1)
c3.bS(B.fvg,B.aQu,B.Vq,0.1)
c8.n(0,8001,B.dUd)
c3.b=8002
c3.qb(B.fCG,B.aQx,B.m1,0.05,3)
c3.qb(B.fvW,B.aQx,B.m1,0.05,3)
c8.n(0,8002,B.dUF)
for(v=c9.y,w=0;u=$.Gd(),w<u.length;++w){t=1000+w
c3.b=t
c3.cBc(new A.K(u[w],0,-2.25),B.fAw,B.m1,!1,0.05,2)
s=v.t(0,w)?"This one has a hole for the cable.":"Tap it with the drill to put a hole through it."
c8.n(0,t,new A.da("Wall stud","A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. "+s,new A.K(u[w],20,-2),60))
if(v.t(0,w)){c3.b=0
c3.e=0.6
c3.cH(new A.K(u[w],40,-2.25),B.fws,B.ads)
c3.e=0}}c3.b=8000
c3.bS(B.fvl,B.fuJ,B.abi,0.5)
c3.e=0.4
c3.cH(B.fyA,B.fBL,B.DO)
for(r=0;r<6;++r)for(v=19.5-r*3.6,q=0;q<2;++q)c3.bS(new A.K(61.6+q*4.8,v,0.5),B.ftO,B.aer,0.3)
p=c9.ax&&!c9.ay
v=p?0.6:0
if(c9.ay)u=D.cb
else u=p?D.bL:D.ka
c3.bS(new A.K(64,-2.5+v,0.9),B.fxK,u,0.4)
c3.e=0
if(c9.ay)v="The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON."
else v=c9.ax?"The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.":"The power is OFF. Tap to turn it ON."
c8.n(0,8000,new A.da("Breaker panel",v,B.fwh,60))
c3.b=8003
for(v=c9.z,u=C.ea(v,v.r,C.a3(v).c),t=x.o,s=u.$ti.c;u.C();){o=u.d
n=A.kX(o==null?s.a(o):o)
o=n.d
m=o.a-0.35
l=C.a([B.fB8,B.fzB,new A.K(m,40,-3.2)],t)
if(n.c)D.d.v(l,C.a([new A.K(m,51.4,-3.2),new A.K(m,51.4,o.c+11)],t))
else l.push(new A.K(m,o.b+11,-3.4))
c3.jN(A.G5(l,3,6),0.2,B.W1,!1,0.35,6)}c8.n(0,8003,B.dV2)
for(u=x.V,s=c9.Q,k=0;k<3;++k){j=B.nT[k]
i=s.h(0,j)
if(i==null||!i.a)continue
if(i.e)h=B.bfS
else h=i.d?B.bhc:B.bgE
o=C.a([],u)
for(m=i.b,l=C.a3(m),g=new C.mS(m,m.r,l.k("mS<1>")),g.c=m.e,l=l.c;g.C();){m=g.d
if(m==null)m=l.a(m)
o.push(new C.cL([A.kX(m).d.a-1.15,A.kX(m).d.a+1.15,A.kX(m).d.b-2,A.kX(m).d.b+2]))}m=6100+k
c3.b=m
A.hMf(c3,j,j+48,-47,47,-0.25,0.5,h,o)
o=i.e?"Painted and finished.":"A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs."
c8.n(0,m,new A.da("Drywall sheet",o,new A.K(j+24,0,0),90))
c3.b=0
c3.e=0.3
for(o=i.c,m=C.a3(o),l=new C.mS(o,o.r,m.k("mS<1>")),l.c=o.e,m=m.c;l.C();){o=l.d
if(o==null)o=m.a(o)
f=D.o.an(o,10)
e=D.o.F(o,10)
c3.iM(new A.K($.Gd()[f],-40+e*16,0.1),0.34,B.DO,3,5,0.3)}c3.e=0}for(u=d0.a,o=u!=="tape",m=c9.as,l=u!=="mud",g=u==="sand",w=0;w<2;w=a1){d=-24+48*w
a0=s.h(0,B.nT[w])
a0=a0==null?null:a0.a
a1=w+1
a2=s.h(0,B.nT[a1])
a2=a2==null?null:a2.a
if(a0!==!0||a2!==!0)continue
a3=m[w]
a0=6200+w
c3.b=a0
if(a3.a&&!a3.d){a2=a3.b
if(a2===0)h=B.bfV
else h=a3.c?B.bct:B.b8i
c3.e=0.5
c3.cH(new A.K(d,0,0.08+0.02*a2),new A.K(2.2+a2*1.4,94,0.12),h)
c3.e=0}else if(!o||!l||g){c3.d=0.45
c3.e=0.6
c3.cH(new A.K(d,0,0.12),B.fxW,D.b0)
c3.e=0
c3.d=1}if(a3.d)a2="Smooth and ready for paint."
else if(!a3.a)a2="The joint between two sheets. It needs tape and three coats of joint compound."
else{a2=a3.b
a4=a2===1?"":"s"
a4="Taped, with "+a2+" coat"+a4+" of mud."
a2=a4}c8.n(0,a0,new A.da("Seam",a2,new A.K(d,0,0),70))}for(o=d0.b,m=c9.x,l=c9.at,g=x.N,a5=0;a5<7;++a5){n=B.tK[a5]
a0=n.a
a6=m.ag(0,a0)
a7=l.h(0,a0)
a8=o===a0&&a7!=null
if(!a6)continue
a2=n.c
if(a2)a9=n.e==="fan"?"fan":"light"
else{a4=a7==null?null:a7.a
a9=a4==null?"outlet":a4}if(a8){b0=A.Ac(a7.a)
a0=a7.b
b1=A.fSl(b0,a0,!1)
b2=A.fRx(b1,n,new A.fkL(n))
D.d.v(c2,b2.a)
c8.v(0,b2.b)
if(a0.f&&a0.c===0){a0=C.a([],c5)
for(a2=b1.c,a4=a2.length,b3=0;b3<a2.length;a2.length===a4||(0,C.L)(a2),++b3){b4=a2[b3]
a0.push(new A.ub(A.a1F(n,b4.a),b4.b,b4.c))}D.d.v(c6,a0)}}else if(a7!=null&&a7.b.c>=2){a4=a7.a
b5=a7.b
b6=b5.w
b7=C.a([],c1)
b8=new A.l4(b7)
b9=new A.Xs(C.V(c7,g))
b9.c=2
b9.w=b6
if(a4==="light"||a4==="fan")A.h9_(b8,a4,b9)
else{A.h8F(b8,a4,-0.25,b6,!0)
A.hb1(b8,b6)}D.d.v(c2,A.fRx(new A.zk(b7,B.dgk,B.GE,B.vw),n,new A.fkM(n)).a)
if(!a2){c3.b=3000+a0
c3.e=0.4
c3.d=0.55
a2=n.d
b5=b5.w?D.aB:D.b7
c3.cH(new A.K(a2.a,a2.b,a2.c+0.2),B.fy_,b5)
c3.d=1
c3.e=0}c8.n(0,3000+a0,new A.da(A.hI7(a4),A.hI6(c9,a0),A.a1F(n,B.a7w),22))}else{a4=C.a([],c1)
A.h80(new A.l4(a4),a9,!1)
D.d.v(c2,A.fRx(new A.zk(a4,B.dgW,B.GE,B.vw),n,new A.fkN(n)).a)
a2=a2?"Ceiling box":"Electrical box"
a4=v.t(0,a0)?"The box is mounted and the cable is in. A device can be wired here.":"The box is mounted. Pull the cable to it."
c8.n(0,2000+a0,new A.da(a2,a4,A.a1F(n,B.a7w),24))}}c0=new A.fkQ(c3)
if(u==="wall"||u==="ceiling"||u==="fanbox")for(a5=0;a5<7;++a5){n=B.tK[a5]
c1=n.a
if(m.ag(0,c1))continue
c5=n.c
c7=n.d
s=c7.a
o=c7.b
a0=c5?new A.K(s,o-1,c7.c):new A.K(s,o,1.5)
a2=c5?B.fwy:B.fxE
c0.$4$round(2000+c1,a0,a2,c5)
c1=c5?new A.K(s,o-8,c7.c):new A.K(s,o+7,3)
c6.push(new A.ub(c1,n.b,D.fh))}else if(u==="cable")for(a5=0;a5<7;++a5){n=B.tK[a5]
c1=n.a
if(!m.ag(0,c1)||v.t(0,c1))continue
c5=n.c
c7=n.d
s=c7.a
o=c7.b
c7=c5?new A.K(s,o-1,c7.c):new A.K(s,o,1.5)
s=c5?B.aQz:B.fwJ
c0.$5$col$round(2000+c1,c7,s,D.cp,c5)}else if(u==="knife")for(a5=0;a5<7;++a5){n=B.tK[a5]
if(n.c||!m.ag(0,n.a))continue
c1=n.d
c5=c1.a
i=c9.anS(c5)
if(i==null||i.b.t(0,n.a))continue
c0.$4$col(2000+n.a,new A.K(c5,c1.b,0.5),B.fxJ,D.cw)}else if(u==="sheet")for(w=0;w<5;){j=B.a2a[w]
c0.$3(6000+w,new A.K(j,0,0.3),B.fAz);++w
c6.push(new A.ub(new A.K(j,50,1),"edge "+w,D.fh))}else if(u==="screw")for(a5=0;a5<3;++a5){j=B.nT[a5]
i=s.h(0,j)
if(i==null||!i.a)continue
for(c1=c9.aob(j),c5=c1.length,c7=i.c,o=j+48,b3=0;b3<c1.length;c1.length===c5||(0,C.L)(c1),++b3){f=c1[b3]
for(a0=f*10,a2=7000+a0,r=0;r<6;++r){if(c7.t(0,a0+r))continue
c0.$3(a2+r,new A.K($.Gd()[f],-40+r*16,0.5),B.aQr)}a2=$.Gd()
if(f+1<a2.length&&a2[f]+16<=o)for(a0=7500+a0,r=0;r<6;r+=2)c0.$4$col(a0+r,new A.K(a2[f]+8,-40+r*16+8,0.5),B.aQr,D.dy)}}if(!C.eu(["wall","ceiling","fanbox","cable","knife","sheet","screw",""],g).t(0,u))c1=D.d.t(B.GI,u)||C.eu(["outlet","gfci","switch","light","fan"],g).t(0,u)
else c1=!1
if(c1)for(c1=c9.CW,a5=0;a5<7;++a5){n=B.tK[a5]
if(D.d.t(B.GI,u)){c5=n.a
a7=l.h(0,c5)
if(a7!=null){c7=a7.a
c7=(c7==="outlet"||c7==="gfci")&&a7.b.c>=2&&!c1.ag(0,c5)}else c7=!1
if(c7){c7=n.d
c0.$4$col(3000+c5,new A.K(c7.a,c7.b,1.2),B.fy0,D.bc)}}else{c5=n.a
if(m.ag(0,c5)&&v.t(0,c5)&&!l.ag(0,c5)){c7=n.c
s=n.d
o=s.a
g=s.b
s=c7?new A.K(o,g-1,s.c):new A.K(o,g,1.2)
o=c7?B.aQz:B.fAu
c0.$4$round(2000+c5,s,o,c7)}}}for(c1=c9.CW,c5=new C.cJ(c1,C.a3(c1).k("cJ<1,2>")).gah(0);c5.C();){j=c5.d
c7=j.a
n=A.kX(c7)
v=c3.b=8100+c7
u=n.d
d=u.a
u=u.b
c3.jN(A.G5(C.a([new A.K(d,u,2.5),new A.K(d,-46,3.5),new A.K(d,-46,22)],t),4,6),0.28,B.W5,!1,0.2,6)
c3.bS(new A.K(d,u,1.6),B.fxk,B.b5B,0.3)
u=j.b
switch(u){case"tv":c3.bS(new A.K(d,-45,24),B.fw1,B.acR,0.2)
c3.bS(new A.K(d,-19,24),B.fwF,E.E_,0.4)
if(c1.ag(0,c7))c7=c9.ax&&!c9.ay&&c9.a2T(c7)
else c7=!1
if(c7){c7=d-38.5
s=d+38.5
c4.push(new A.Wv(C.a([new A.K(c7,1.5,25.7),new A.K(s,1.5,25.7),new A.K(s,-39.5,25.7),new A.K(c7,-39.5,25.7)],t),v,new A.fkO(j),9))}break
case"lamp":c3.e6(new A.K(d,-47.5,24),new A.K(d,-46.5,24),6,B.V6,0.4,14)
c3.e6(new A.K(d,-46.5,24),new A.K(d,-22,24),1,B.Ak,0.5,8)
c3.yg(new A.K(d,-26,24),new A.K(d,-12,24),9,U.Wc,!1,!0,5.5,0.2,16)
break
case"toaster":c3.bS(new A.K(d,-42.5,24),B.fuU,B.kA,0.8)
c3.cH(new A.K(d,-38,24),B.fB7,B.adZ)
break
default:c3.bS(new A.K(d,-43.5,24),B.fvb,B.acR,0.2)
c3.Ka(new A.K(d-6,-38,24),new A.K(d+8,-38,24),3.4,B.Ky,3,0.6,12)
c3.aiR(new A.K(d-8,-43,24),B.fv0,B.Ky,0.6,0)}c7=A.hGi(u)
s="Plugged into "+n.b
u=u==="tv"?s+". Tap it to watch NGMY ads full screen. Use the Unplug tool to unplug it.":s+". Tap it to unplug."
c8.n(0,v,new A.da(c7,u,new A.K(d,-35,20),60))}for(a5=0;a5<7;++a5){n=B.tK[a5]
c8.ci(0,2000+n.a,new A.fkP(n))}return new A.zk(c2,c8,c6,c4)},
hI7(d){var w
A:{if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}w="Outlet"
break A}return w},
hGi(d){var w
A:{if("tv"===d){w="TV"
break A}if("lamp"===d){w="Lamp"
break A}if("toaster"===d){w="Toaster"
break A}w="Hair dryer"
break A}return w},
hI6(d,e){var w,v=d.at.h(0,e)
if(v==null)return""
if(v.b.w)return"BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one."
w=v.a
if(w==="switch")return d.ch.t(0,e)?"The switch is ON. Tap to turn it off.":"The switch is OFF. Tap to flip it on."
if(w==="light"||w==="fan")return d.al8(e)?"It is running.":"It is off. Flip its switch (breaker on)."
w=d.CW.h(0,e)
return"Tap with a TV, lamp, toaster or hair dryer in your hand to plug it in. Plugged: "+(w==null?"nothing":w)+"."},
i0x(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.z),a0=new A.l4(d)
for(w=D.d.gah(B.tK),v=new C.fG(w,new A.fAO()),u=a1.at,t=a2*7;v.C();){s=w.gU(0)
r=s.a
q=u.h(0,r)
if(q==null||q.b.c<1)continue
p=a1.al8(r)?t:0.4
a0.b=3000+r
s=s.d
r=s.a
o=s.b-6.6
s=s.c
for(n=0;n<4;++n){m=p+n*3.141592653589793/2
l=A.bBp(B.fuH,m)
a0.aiR(new A.K(r+l.a,o+l.b,s+l.c),B.fCn,B.b6B,0.3,m)}}w=a1.d
w===$&&C.c()
w=D.d.gah(w)
v=new C.fG(w,new A.fAP())
u=a2*5
while(v.C()){s=w.gU(0).a
if(a1.al8(s)){k=A.kX(s)
a0.b=0
a0.d=0.25+0.05*Math.sin(u)
s=k.d
a0.iM(new A.K(s.a,s.b-5,s.c),11,B.Vu,4,10,0)
a0.d=1}}for(w=a1.CW,v=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gah(0),u=a2*1.6,s=a2*6;v.C();){j=v.d
r=j.a
if(w.ag(0,r))o=a1.ax&&!a1.ay&&a1.a2T(r)
else o=!1
if(!o)continue
i=A.kX(r).d.a
a0.b=8100+r
switch(j.b){case"tv":break
case"lamp":a0.b=0
a0.d=0.3+0.05*Math.sin(s)
a0.iM(new A.K(i,-19,24),11,O.V8,4,10,0)
a0.d=1
break
case"toaster":a0.e=0.8
r=C.aq(B.act,O.Wg,(Math.sin(s)+1)/2)
r.toString
a0.cH(new A.K(i,-38.2,24),new A.K(13,0.3,6),r)
a0.e=0
break
default:for(r=i+9,h=0;h<6;++h)a0.iM(new A.K(r+D.k.F(u+h/6,1)*22,-38+Math.sin(h*2)*2,24),0.6,B.bcP,3,5,0.2)}}for(w=new C.cJ(a3,C.a3(a3).k("cJ<1,2>")).gah(0),v=a2*0.7,u=a2*2.2;w.C();){j=w.d
s=j.b
if(a2>s)continue
k=A.kX(j.a)
g=D.k.D(s-a2,0,3)
a0.b=0
for(h=0;h<14;++h){f=D.k.F(u+h*0.137,1)
m=h*2.4+t
e=A.a1F(k,new A.K(Math.cos(m)*f*7,Math.sin(m)*f*7-f*f*6,3+f*4))
s=D.k.D(g,0.3,1)
r=C.aq(E.Wt,E.Wy,1-f)
r.toString
a0.iM(e,0.35*s,r,3,5,0)}a0.d=0.35
for(h=0;h<5;++h){f=D.k.F(v+h*0.2,1)
s=f*3
a0.iM(A.a1F(k,new A.K(Math.sin(h*1.7)*2,f*10,5+s)),1.2+s,B.bhV,3,6,0)}a0.d=1}return d},
vO:function vO(d,e,f){this.a=d
this.b=e
this.c=f},
fe6:function fe6(d){this.a=d},
fe7:function fe7(d){this.a=d},
fkL:function fkL(d){this.a=d},
fkM:function fkM(d){this.a=d},
fkN:function fkN(d){this.a=d},
fkQ:function fkQ(d){this.a=d},
fkO:function fkO(d){this.a=d},
fkP:function fkP(d){this.a=d},
fAO:function fAO(){},
fAP:function fAP(){},
h4I(d,e){var w=new A.cny(e,d,A.fZb())
w.bvt(4,d,e)
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
Lp:function Lp(d,e){this.a=d
this.b=e
this.c=!1},
cny:function cny(d,e,f){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=3
_.r=_.f=0
_.w=!1},
cnD:function cnD(d){this.a=d},
cnz:function cnz(){},
cnB:function cnB(){},
cnC:function cnC(){},
cnA:function cnA(d){this.a=d},
apL:function apL(d,e){this.d=d
this.a=e},
aCS:function aCS(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x="inspect"
_.y=0
_.z=null
_.at=_.as=_.Q=!1
_.c=_.a=_.ax=null},
eki:function eki(d,e,f){this.a=d
this.b=e
this.c=f},
ekj:function ekj(d){this.a=d},
ekh:function ekh(d){this.a=d},
ek7:function ek7(d){this.a=d},
ekc:function ekc(d){this.a=d},
ekd:function ekd(d){this.a=d},
ekb:function ekb(d){this.a=d},
eke:function eke(d,e){this.a=d
this.b=e},
ekf:function ekf(d){this.a=d},
ekg:function ekg(d){this.a=d},
eka:function eka(d){this.a=d},
ek9:function ek9(d,e){this.a=d
this.b=e},
ek6:function ek6(d){this.a=d},
ek4:function ek4(d){this.a=d},
ek5:function ek5(d,e){this.a=d
this.b=e},
ek8:function ek8(d){this.a=d},
ekv:function ekv(d,e){this.a=d
this.b=e},
ekr:function ekr(){},
ekq:function ekq(d){this.a=d},
eks:function eks(){},
ekt:function ekt(){},
eku:function eku(d,e){this.a=d
this.b=e},
ekp:function ekp(d,e){this.a=d
this.b=e},
eko:function eko(d){this.a=d},
ekn:function ekn(d){this.a=d},
ekl:function ekl(d,e){this.a=d
this.b=e},
ekk:function ekk(){},
ekm:function ekm(d,e){this.a=d
this.b=e},
i04(d){var w,v,u,t,s,r,q,p,o,n,m=d.giD(0),l=C.a([],x.T)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
s=t.b
if(s==="rug")continue
s=B.vD.h(0,s)
s.toString
r=(t.e&1)===1
q=r?s.d:s.c
p=r?s.c:s.d
s=t.c
r=q/2
o=t.d
n=p/2
l.push(new A.Hm(s-r,s+r,o-n,o+n))}switch(d.c){case"kitchen":w=-m/2
l.push(new A.Hm(w,w+28,0,28))
l.push(new A.Hm(10,m/2,0,28))
break
case"bathroom":l.push(B.dhQ)
l.push(B.dhP)
w=-m/2
l.push(new A.Hm(w,w+33,0,75))
break}return l},
boO(d,e,f,g,h,i,j,k,l,m,n,o){var w=new A.boN(d,i,m,o,n,l,g,f,k,j,e,h,C.a([],x.n))
w.bvI(d,e,f,g,h,i,j,k,l,m,n,o)
return w},
h8I(d,e){var w,v,u,t=d.w,s=D.d.bc(t,new A.f7s(e))
if(s<0)s=0
w=t[s]
v=d.giD(0)
u=d.gmW(0)
t=w.b
switch(w.a){case"left":return new C.bx(new C.z(-v/2+18,D.k.D(t+u/2-40,10,u-10)),1.5707963267948966,s)
case"right":return new C.bx(new C.z(v/2-18,D.k.D(t+u/2-40,10,u-10)),-1.5707963267948966,s)
default:return new C.bx(new C.z(D.o.D(t,-v/2+12,v/2-12),18),0,s)}},
b1s:function b1s(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q},
Hm:function Hm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ckd:function ckd(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=$},
Jc:function Jc(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
boN:function boN(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.ax=_.at=0
_.ay=-1},
f7s:function f7s(d){this.a=d},
bOU:function bOU(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=$},
bOV:function bOV(d){this.a=d}},B,F,E,H,A2,U,L,M,A3,A4
J=c[1]
C=c[0]
D=c[2]
G=c[91]
N=c[102]
O=c[112]
P=c[109]
Q=c[104]
V=c[103]
W=c[93]
X=c[108]
I=c[84]
Y=c[97]
Z=c[106]
R=c[105]
S=c[107]
T=c[100]
A_=c[90]
A0=c[98]
A1=c[111]
K=c[92]
A=a.updateHolder(c[24],A)
B=c[88]
F=c[26]
E=c[89]
H=c[99]
A2=c[61]
U=c[110]
L=c[96]
M=c[95]
A3=c[94]
A4=c[101]
A.K.prototype={
ae(d,e){return new A.K(this.a+e.a,this.b+e.b,this.c+e.c)},
aC(d,e){return new A.K(this.a-e.a,this.b-e.b,this.c-e.c)},
aK(d,e){return new A.K(this.a*e,this.b*e,this.c*e)},
S1(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new A.K(w*v-u*t,u*s-r*v,r*t-w*s)},
gT1(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
gpD(d){var w=this,v=w.gT1()
return v<1e-9?w:new A.K(w.a/v,w.b/v,w.c/v)}}
A.qm.prototype={}
A.da.prototype={}
A.ub.prototype={}
A.zk.prototype={}
A.Wv.prototype={}
A.l4.prototype={
bf0(d,e,f,g,h,i,j){var w=this,v=i.gpD(0)
w.a.push(new A.qm(C.a([d,e,f,g],x.o),v,h,w.b,0,w.d,!0,w.c,w.e))},
bg5(d,e,f,g){var w=this,v=e.aC(0,d).S1(f.aC(0,d)),u=v.gpD(0)
w.a.push(new A.qm(C.a([d,e,f],x.o),u,g,w.b,0,w.d,!0,w.c,w.e))},
JS(d,e,f,g,h,i,j){var w,v,u,t=e.a/2,s=e.b/2,r=e.c/2,q=new A.bUF(this,i,new A.bUG(j,d),new A.bUH(j),f,h),p=-t,o=-s,n=2*t,m=2*s
q.$4(new A.K(0,0,1),new A.K(p,o,r),new A.K(n,0,0),new A.K(0,m,0))
w=-r
q.$4(new A.K(0,0,-1),new A.K(t,o,w),new A.K(-2*t,0,0),new A.K(0,m,0))
v=-2*r
q.$4(new A.K(1,0,0),new A.K(t,o,r),new A.K(0,0,v),new A.K(0,m,0))
u=2*r
q.$4(new A.K(-1,0,0),new A.K(p,o,w),new A.K(0,0,u),new A.K(0,m,0))
if(g){q.$4(new A.K(0,1,0),new A.K(p,s,r),new A.K(n,0,0),new A.K(0,0,v))
q.$4(new A.K(0,-1,0),new A.K(p,o,w),new A.K(n,0,0),new A.K(0,0,u))}},
j1(d,e,f,g){return this.JS(d,e,f,!0,0,g,0)},
aBb(d,e,f,g,h){return this.JS(d,e,f,g,h,1,0)},
qb(d,e,f,g,h){return this.JS(d,e,f,!0,g,h,0)},
bS(d,e,f,g){return this.JS(d,e,f,!0,g,1,0)},
cH(d,e,f){return this.JS(d,e,f,!0,0,1,0)},
aiR(d,e,f,g,h){return this.JS(d,e,f,!0,g,1,h)},
cBc(d,e,f,g,h,i){return this.JS(d,e,f,g,h,i,0)},
yg(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=b4.aC(0,b3).gpD(0),a8=a7.b,a9=a7.S1(Math.abs(a8)<0.9?B.w7:B.Tk).gpD(0),b0=a7.S1(a9).gpD(0),b1=b9<0?b5:b9,b2=new A.bUI(a9,c1,b0)
for(w=a6.a,v=b3.a,u=b3.b,t=b3.c,s=b4.a,r=b4.b,q=b4.c,p=x.o,o=a7.a*-1,a8*=-1,n=a7.c*-1,m=0;m<c1;){l=b2.$1(m);++m
k=b2.$1(m)
j=l.a
i=k.a
h=l.b
g=k.b
f=l.c
e=k.c
d=new A.K(j+i,h+g,f+e).gpD(0)
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
w.push(new A.qm(C.a([new A.K(a0,a1,a2),new A.K(a3,a4,a5),new A.K(i,g,e),new A.K(j,h,f)],p),d,b6,a6.b,c0,a6.d,b8,a6.c,a6.e))
if(b7){w.push(new A.qm(C.a([b3,new A.K(a3,a4,a5),new A.K(a0,a1,a2)],p),new A.K(o,a8,n),b6,a6.b,c0,a6.d,!1,a6.c,a6.e))
w.push(new A.qm(C.a([b4,new A.K(j,h,f),new A.K(i,g,e)],p),a7,b6,a6.b,c0,a6.d,!1,a6.c,a6.e))}}},
e6(d,e,f,g,h,i){return this.yg(d,e,f,g,!0,!1,-1,h,i)},
Ka(d,e,f,g,h,i,j){return this.yg(d,e,f,g,!0,!1,h,i,j)},
a2H(d,e,f,g,h,i,j,k){return this.yg(d,e,f,g,h,i,-1,j,k)},
o5(d,e,f,g,h){return this.yg(d,e,f,g,!0,!1,-1,0,h)},
ba3(d,e,f,g,h,i,j){return this.yg(d,e,f,g,h,!1,-1,i,j)},
ba1(d,e,f,g,h,i){return this.yg(d,e,f,g,h,!1,-1,0,i)},
cFB(d,e,f,g,h,i){return this.yg(d,e,f,g,!0,!1,h,0,i)},
ba2(d,e,f,g,h,i,j){return this.yg(d,e,f,g,h,!1,i,0,j)},
iM(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=new A.bUE(b0,b1)
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
w.push(new A.qm(C.a([new A.K(v+j*a8,u+i*a8,t+h*a8),new A.K(v+g*a8,u+f*a8,t+e*a8),new A.K(v+d*a8,u+a0*a8,t+a1*a8),new A.K(v+a2*a8,u+a3*a8,t+a4*a8)],s),new A.K(j+g+d+a2,i+f+a0+a3,h+e+a1+a4).gpD(0),a9,a5.b,b2,a5.d,!1,a5.c,a5.e))}},
b86(d,e,f,g){return this.iM(d,e,f,6,10,g)},
mo(d,e,f,g,h){return this.iM(d,e,f,g,h,0.4)},
a5h(d,e,f,g,h,i,j,k){var w,v,u,t,s
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new A.K(u.a-t.a,u.b-t.b,u.c-t.c).gT1()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.a2H(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.iM(d[w],u,f,4,k,j)},
jN(d,e,f,g,h,i){return this.a5h(d,e,f,!0,!1,g,h,i)},
aGK(d,e,f,g,h,i,j){return this.a5h(d,e,f,g,!1,h,i,j)},
bg7(d,e,f,g,h){return this.a5h(d,e,f,!0,!1,!0,g,h)},
yU(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.ba3(a4,a5,a6,a8,!1,a9,b0)
w=a5.aC(0,a4).gpD(0)
v=w.S1(Math.abs(w.b)<0.9?B.w7:B.Tk).gpD(0)
u=new A.bUJ(v,b0,w.S1(v).gpD(0))
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
s.push(new A.qm(C.a([new A.K(p+i*a7,m+h*a7,l+j*a7),new A.K(p+f*a6,m+e*a6,l+g*a6),new A.K(p+a0*a6,m+a1*a6,l+d*a6),new A.K(p+a2.a*a7,m+a2.b*a7,l+a2.c*a7)],r),n,a8,a3.b,a9,a3.d,!1,a3.c,a3.e))}}},
cQC(d,e,f,g,h,i){return this.yU(d,e,f,g,h,i,16)}}
A.Ay.prototype={
anM(d){var w,v,u,t=this
t.x=d
if(!d){w=t.a
v=t.r
u=t.w
t.a=D.k.D(w,v-u,v+u)}t.aZ()},
mc(d,e,f,g){var w=this
w.y=f
w.z=d
w.Q=g
w.as=e
w.aZ()},
Gn(d,e){return this.mc(d,null,e,null)},
aGw(d){var w,v,u,t=this
if(!(t.y!=null||t.z!=null||t.Q!=null||t.as!=null))return
w=1-Math.exp(-d*7)
v=t.y
if(v!=null){u=A.zC(t.d,v,w)
t.d=u
if(u.aC(0,v).gT1()<0.02){v=t.y
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
an8(d){var w=this
w.z=null
w.c=D.k.D(w.c*d,6,w.f)
w.aZ()}}
A.bOM.prototype={
cOu(d){var w,v,u,t
for(w=this.a,v=w.length-1,u=d.a,t=d.b;v>=0;--v)if(w[v].a.gbI().a.contains(u,t))return w[v].b
return 0}}
A.b3x.prototype={
gaGy(d){var w=this.r.a
return w==null?0:w},
a6(d6,d7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0=this,d1=null,d2=d7.a,d3=d7.b,d4=0+d2,d5=0+d3
$.X()
w=C.M()
v=d0.x
u=C.aq(v,D.c,0.06)
u.toString
w.sau(new C.a7(D.b1,D.b6,D.x,C.a([u,v],x.O),d1,d1).aw(0,new C.aa(0,0,d4,d5)))
d6.aY(new C.aa(0,0,d4,d5),w)
t=Math.min(d2,d3)*1.15
s=d2/2
r=d3/2
d3=d0.c
q=new A.cl7(Math.cos(d3.a),Math.sin(d3.a),Math.cos(d3.b),Math.sin(d3.b))
p=new A.cl8(d0,q)
o=B.fzo.gpD(0)
n=o.ae(0,B.ftU).gpD(0)
m=C.a([],x.G)
d2=d0.w
d3=d0.b
l=d3.a
if(!(d2==null)){d4=C.B(l,x.a1)
D.d.v(d4,d2.$1(d0.gaGy(0)))
l=d4}for(d2=l.length,d4=d0.e,d5=x.k,w=d4!==0,v=o.a,u=o.b,k=o.c,j=x.o,i=d0.f,h=i!=null,g=n.a,f=n.b,e=n.c,d=d0.r,a0=0;a0<l.length;l.length===d2||(0,C.L)(l),++a0){a1=l[a0]
if(h&&!i.$1(a1.w))continue
a2=C.a([],j)
for(a3=a1.a,a4=a3.length,a5=0;a5<a3.length;a3.length===a4||(0,C.L)(a3),++a5)a2.push(p.$1(a3[a5]))
a6=A.hHq(a2)
a2=a6.length
if(a2<3)continue
for(a7=0,a8=B.jh,a5=0;a5<a2;++a5){a9=a6[a5]
a3=a9.c
a7+=a3
a8=new A.K(a8.a+a9.a,a8.b+a9.b,a8.c+a3)}a2=1/a2
b0=q.$1(a1.b)
a3=b0.a
a4=b0.b
b1=b0.c
if(a3*(a8.a*a2)+a4*(a8.b*a2)+b1*(a8.c*a2)>0){if(!a1.r)continue
b0=new A.K(a3*-1,a4*-1,b1*-1)}a2=b0.a
a3=b0.b
a4=b0.c
b2=0.56+0.58*Math.max(0,a2*v+a3*u+a4*k)
b1=a1.e
b3=b1>0?Math.pow(Math.max(0,a2*g+a3*f+a4*e),28)*b1:0
b4=a1.c
if(w&&a1.d===d4){a2=d.a
a2=C.aq(b4,D.b0,0.28+0.14*Math.sin((a2==null?0:a2)*6))
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
m.push(new A.J9(d1,b8,new C.w(a2,(b5&255)/255,(b6&255)/255,(b7&255)/255,D.t),a7/a3-a1.x,a4,a2<0.99,b1))}for(d2=d3.d,d4=d2.length,v=x.e,u=x.g,a0=0;a0<d2.length;d2.length===d4||(0,C.L)(d2),++a0){c2=d2[a0]
k=C.a([],j)
for(i=c2.a,a5=0;a5<4;++a5)k.push(p.$1(i[a5]))
if(D.d.b8(k,new A.cl4()))continue
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
b0=q.$1(new A.K(a2.a-a4,a2.b-b1,a2.c-a3).S1(new A.K(i.a-a4,i.b-b1,i.c-a3)))
if(b0.a*((h.a+g.a+f.a+e.a)*0.25)+b0.b*((h.b+g.b+f.b+e.b)*0.25)+b0.c*d>0)continue
i=C.a([],u)
for(h=k.length,a5=0;a5<k.length;k.length===h||(0,C.L)(k),++a5){a9=k[a5]
g=a9.c
i.push(new C.u(s+a9.a*t/g,r-a9.b*t/g))}k=$.X()
h=C.a([],d5)
g=C.B(i,v)
h.push(new C.QS(g,!0))
m.push(new A.J9(new A.cl5(d0,c2,i),new C.aQ(k.r,D.ap,d1,d1,h),D.K,d-c2.f,c2.b,!1,!1))}D.d.b1(m,new A.cl6())
d2=d0.d.a
D.d.a8(d2)
$.X()
c3=C.M()
c3.b=D.V
c4=C.M()
c4.b=D.ae
c4.c=0.8
for(d4=m.length,d5=d6.a,a0=0;a0<m.length;m.length===d4||(0,C.L)(m),++a0){c5=m[a0]
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
c7=C.M()
c7.b=D.ae
c7.c=1.4
c7.r=D.c.j(0.35+0.25*Math.sin(d0.gaGy(0)*6)).gp(0)
for(d2=m.length,a0=0;a0<m.length;m.length===d2||(0,C.L)(m),++a0){c5=m[a0]
if(c5.r){d4=c5.b
c6=c7.H()
w=d4.e
d5.drawPath((w==null?d4.e=new C.cF(d4.gbI().a.snapshot()):w).a,c6)
c6.delete()}}}for(d2=d3.c,d3=d2.length,a0=0;a0<d2.length;d2.length===d3||(0,C.L)(d2),++a0){c8=d2[a0]
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
b5=C.bz(C.cu(new C.u(w,d4),v.gbb(v)+8,u+14),D.iA)
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
A.J9.prototype={}
A.atc.prototype={
T(){return new A.boB(new A.bOM(C.a([],x.J)),new C.eL(0,$.aw()),D.bx,null,null)}}
A.boB.prototype={
a_(){var w,v=this
v.a1()
w=v.qe(new A.eQz(v))
w.iX(0)
v.d!==$&&C.aO()
v.d=w},
q(){var w=this.d
w===$&&C.c()
w.q()
w=this.f
w.S$=$.aw()
w.P$=0
this.bu_()},
B(d){var w,v=this,u=null,t=v.a,s=t.c,r=t.d,q=t.e,p=t.r,o=v.f
t=t.w
w=C.a([r,o],x.U)
w=C.a([C.jr(new C.es(C.b3(u,u,u,new A.b3x(s,r,v.e,q,p,o,t,v.a.x,new C.h3(w)),D.f_),u),D.q,u)],x.p)
v.a.toString
return C.oK(D.js,C.aE(D.c5,new C.an(D.W,u,D.b_,D.q,w,u),D.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.eQv(v),new A.eQw(v),u,u,u,u,u,u,u,new A.eQx(v),u,u,u,!1,D.a8),u,u,u,u,u,u,new A.eQy(v),u)}}
A.aLm.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
A.md.prototype={}
A.Xs.prototype={}
A.zI.prototype={}
A.a3o.prototype={}
A.BK.prototype={
gj6(){return this.a==="ok"}}
A.aTj.prototype={}
A.q9.prototype={}
A.Df.prototype={}
A.u7.prototype={}
A.oE.prototype={}
A.aTx.prototype={
gBb(){var w=this.c
return w.c>=2&&A.afe(A.Ac(this.a),w).a==="ok"},
gda(d){return this.c}}
A.a3S.prototype={
gyz(){var w,v,u=this.go,t=u==="ptrap"
if(t||u==="faucet"){w=this.k1
if(w==null)return!1
if(t)if(w.a.a===3){u=w.b
u=new C.bc(u,C.a3(u).k("bc<2>")).d9(0,new A.bOd())&&w.c}else u=!1
else u=A.fm9(w)&&w.f
return u}v=this.id
return v!=null&&v.c>=2&&A.afe(A.Ac(u),v).a==="ok"},
ga4m(){var w=this.go
if(w.length===0)w=this.glp()
else w=w!=="fan"||this.gyz()
return w},
gT7(){var w=this.go
if(w.length===0)w=this.glp()
else w=w!=="switch"||this.gyz()
return w},
gaEY(){var w=this.go
if(w.length===0)w=this.glp()
else w=!(w==="outlet"||w==="gfci")||this.gyz()
return w},
giD(d){var w,v=this.c
A:{if("bathroom"===v){w=110
break A}if("kitchen"===v){w=140
break A}if("living"===v){w=180
break A}if("hall"===v){w=240
break A}if("outside"===v){w=300
break A}w=130
break A}return w},
gmW(d){var w,v=this.c
A:{if("bathroom"===v){w=100
break A}if("kitchen"===v){w=110
break A}if("living"===v){w=120
break A}if("hall"===v){w=64
break A}if("outside"===v){w=200
break A}w=112
break A}return w},
glp(){var w,v=this
if(v.c!=="outside"){w=v.go
if(w.length!==0)w=w==="ptrap"||w==="faucet"||v.gyz()
else{w=v.CW
w=w==null?null:w.gaCw()
if(w==null)w=!v.ay}}else w=!0
return w},
got(){var w=this,v=w.c
if(v==="bathroom"||v==="kitchen"){v=w.go
if(v.length!==0)v=!(v==="ptrap"||v==="faucet")||w.gyz()
else{v=w.cx
v=v==null?null:v.gBb()
if(v==null)v=!w.ch}}else v=!0
return v},
SF(d){var w,v,u,t
for(w=this.x,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
lx(d,e,f,g){var w=this,v=w.y++,u=f==null?0:f,t=new A.aTj(v,e,u,g==null?w.gmW(0)*0.6:g)
w.x.push(t)
w.aBv(0,t)
return t},
J(d,e){return this.lx(0,e,null,null)},
aBv(d,e){var w,v,u,t=B.vD.h(0,e.b)
t.toString
w=(e.e&1)===1
v=w?t.d:t.c
u=w?t.c:t.d
t=v/2
e.c=D.k.D(e.c,-this.giD(0)/2+t+1,this.giD(0)/2-t-1)
t=u/2
e.d=D.k.D(e.d,t+1,this.gmW(0)-t-1)}}
A.aTC.prototype={
buS(d){var w,v,u
this.a=d
A:{w="gfci"===d
if(w||"faucet"===d){v="bathroom"
break A}if("fan"===d){v="bedroom"
break A}if("ptrap"===d){v="kitchen"
break A}v="living"
break A}B:{if("outlet"===d){w="Wall outlet"
break B}if("switch"===d){w="Light switch"
break B}if(w){w="GFCI outlet"
break B}if("fan"===d){w="Ceiling fan"
break B}if("ptrap"===d){w="Sink drain"
break B}w="Faucet"
break B}u=A.yx(0,w,v,0,0,1,1,C.a([],x.D))
u.go=d
u.dx=d==="fan"?"fan":"light"
if(d==="gfci")u.Q=5
u.ch=u.ay=!1
u.Q=v==="bathroom"||v==="kitchen"?5:0
this.aR9(u)
u.fr="bangtv"
u.fx=!0
u.fy=Math.max(0,D.d.bc(E.jU,new A.bOO()))
this.d=C.a([u],x.A)},
cLo(){var w,v,u,t,s,r
for(w=this.gwg(),v=w.length,u=0;u<w.length;w.length===v||(0,C.L)(w),++u){t=w[u]
t.cx=t.CW=null
s=t.ay=!0
r=t.c
t.ch=r!=="bathroom"?r==="kitchen":s
t.db=!1
t.cy.a8(0)
D.d.a8(t.dy)}},
c20(){var w,v,u,t,s,r,q,p=this,o="back",n="bedroom",m="bathroom",l=new C.eT()
l.dI(p.b)
w=new A.bOP()
v=x.D
u=C.a([],v)
for(t=0;t<8;++t)u.push(new A.oE(o,-98+t*28,B.cP2[t]))
u.push(B.bwk)
u.push(B.bwm)
s=C.a([A.yx(0,"Bedroom 1",n,0,0,2,2,C.a([w.$1(-48)],v)),A.yx(1,"Bedroom 2",n,2,0,2,2,C.a([w.$1(-48)],v)),A.yx(2,"Bathroom 1",m,4,0,1,2,C.a([B.Z2],v)),A.yx(3,"Bedroom 3",n,5,0,2,2,C.a([w.$1(-48)],v)),A.yx(4,"Bathroom 2",m,7,0,2,2,C.a([B.Z2],v)),A.yx(5,"Hall","hall",0,2,9,1,u),A.yx(6,"Bedroom 4",n,0,3,2,2,C.a([w.$1(-48)],v)),A.yx(7,"Bedroom 5",n,2,3,2,2,C.a([w.$1(-48)],v)),A.yx(8,"Bathroom 3",m,4,3,1,2,C.a([B.Z2],v)),A.yx(9,"Kitchen","kitchen",5,3,2,2,C.a([new A.oE(o,-26,5),B.bwn],v)),A.yx(10,"Living room","living",7,3,2,2,C.a([new A.oE(o,-70,5),B.bwl,B.bwj],v)),A.yx(11,"Garden","outside",0,5,9,1,C.a([B.bwi],v))],x.A)
p.d=s
for(r=0;r<12;++r){q=s[r]
v=q.c
if(v==="outside")continue
q.dx=v==="bedroom"?"fan":"light"
q.ay=l.aj()<0.6
q.ch=(v==="bathroom"||v==="kitchen")&&l.aj()<0.7
D.d.hb(q.z,0,3,l.aB(8))
A:{if("bathroom"===v){v=5+l.aB(2)
break A}if("kitchen"===v){v=5+l.aB(2)
break A}if("bedroom"===v){v=2+l.aB(3)
break A}if("living"===v){v=l.aB(2)
break A}v=l.aB(2)
break A}q.Q=v
q.as=l.aB(4)
p.aR9(q)}v=p.d
v[3].ay=!0
v[2].ch=!0},
aR9(d){var w="rug",v="plant",u=d.giD(0)/2
switch(d.c){case"bedroom":d.lx(0,w,0,d.gmW(0)*0.55)
d.lx(0,"bed",24,46)
d.lx(0,"nightstand",-8,14)
d.lx(0,"wardrobe",-u+12,70).e=1
d.lx(0,"desk",u-14,100).e=3
break
case"living":d.lx(0,w,0,70)
d.lx(0,"sofa",0,100)
d.lx(0,"coffee",0,68)
d.lx(0,"tvstand",0,14)
d.lx(0,"armchair",66,70)
d.lx(0,v,76,14)
d.lx(0,"lamp",-76,14)
break
case"kitchen":d.lx(0,"dining",0,78)
d.lx(0,"chair",-24,78).e=1
d.lx(0,"chair",24,78).e=3
d.lx(0,v,58,20)
break
case"bathroom":d.lx(0,w,0,62).e=0
d.lx(0,v,d.giD(0)/2-12,d.gmW(0)-12)
break
case"hall":d.lx(0,w,0,36)
d.lx(0,v,108,50)
break}},
gwg(){var w,v,u,t=C.a([],x.A),s=this.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.L)(s),++v){u=s[v]
if(u.c!=="outside")t.push(u)}return t},
gcRO(){var w=this.gwg()
return new C.a2(w,new A.bOT(),C.T(w).k("a2<1>")).gM(0)},
gcOI(){var w=this.d
w===$&&C.c()
return new C.a2(w,new A.bOS(),C.T(w).k("a2<1>")).gM(0)},
gcOH(){var w=this.d
w===$&&C.c()
return new C.a2(w,new A.bOR(),C.T(w).k("a2<1>")).gM(0)},
gcHA(){var w=this.gwg()
return new C.a2(w,new A.bOQ(),C.T(w).k("a2<1>")).gM(0)}}
A.aoP.prototype={
T(){var w=new C.BA()
$.Cv()
w.iX(0)
return new A.aCc(w,C.aW(x.N),new C.cp(null,x.Y))}}
A.aCc.prototype={
gbeS(){var w=this.d
w===$&&C.c()
w=w.gwg()
return new C.a2(w,new A.e0z(),C.T(w).k("a2<1>")).gM(0)},
a_(){var w,v,u,t,s=this
s.a1()
w=s.a.r
if(w.length!==0)w=s.d=A.hpX(w)
else{w=$.aTD==null
if(w){w=D.o.F(Date.now(),1e5)
$.aTD=A.fZa(w)}w=$.aTD
w.toString
w=s.d=w}v=s.a
w.c=v.d||w.c
u=new A.Ay(-0.05,0.1,120,B.ful,$.aw())
u.f=560
s.e=u
if(v.f.length!==0){w=w.gwg()
t=new C.a2(w,new A.e0x(s),C.T(w).k("a2<1>"))
if(!t.gam(0)){w=s.d
w===$&&C.c()
w.e=t.gL(0).a}}w=s.d
w===$&&C.c()
v=w.d
v===$&&C.c()
s.f=A.hcj(v[w.e],"look",s.gbeS(),0)
s.av8(!0)
$.aT.x1$.push(new A.e0y(s))},
q(){var w=this.ay
if(w!=null)w.a9(0)
w=this.db
if(w!=null)w.a9(0)
this.a2()},
bXm(){var w,v=this.d
v===$&&C.c()
w=v.a
A:{if("switch"===w){v="The ceiling light is already in. Tap the red switch on the wall and wire it. Then flip it to see the light work."
break A}if("outlet"===w){v="Tap the red outlet on the wall and wire it. Then plug in a lamp or a TV to test it."
break A}if("gfci"===w){v="Tap the red GFCI outlet and wire it. Then plug in a hair dryer to test it."
break A}if("fan"===w){v="Tap the ceiling fan and wire it. Then flip the wall switch and watch it spin."
break A}if("ptrap"===w){v="The sink has no drain yet. Tap the sink and build the drain under it."
break A}v="The faucet is not connected yet. Tap the sink and connect the hoses."
break A}return v},
av8(d){var w,v,u,t,s,r,q=this,p=q.d
p===$&&C.c()
w=p.d
w===$&&C.c()
v=w[p.e]
if(v.c==="outside"){p=q.e
p===$&&C.c()
p.w=0.9
u=B.fus
t=380
s=0.22
r=-0.1}else if(q.x){u=new A.K(0,40,v.gmW(0)*0.3)
t=Math.max(v.giD(0)*0.8,v.gmW(0)*0.9)+10
p=q.e
p===$&&C.c()
p.w=1.3
s=0.1
r=-0.05}else{u=new A.K(0,30,v.gmW(0)*0.45)
t=(v.giD(0)*1.2>v.gmW(0)*1.4?v.giD(0)*1.2:v.gmW(0)*1.4)+30
p=q.e
p===$&&C.c()
p.w=0.9
s=0.5
r=-0.12}if(d){p.d=u
p.c=t
p.a=r
p.b=s}else p.mc(t,s,u,r)},
Ys(){return this.av8(!1)},
ko(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
t=w[t.e]
w=u.r
v=u.z
u.f=A.hcj(t,w,u.gbeS(),v)},
OI(d,e){var w=this,v=w.ay
if(v!=null)v.a9(0)
w.m(new A.e02(w,d,e))
w.ay=C.cM(D.ed,new A.e03(w))},
lS(d){return this.OI(d,!0)},
QD(d){this.m(new A.e04(this,d))
A.mu(660,50,0.25,"tri")},
av9(d,e){var w=this,v=w.d
v===$&&C.c()
if(d!==v.e){v=v.d
v===$&&C.c()
v=d>=v.length}else v=!0
if(v)return
if(!e&&w.CW!=null)w.ah4()
w.m(new A.e_C(w,d))
w.Ys()
A.mu(520,60,0.25,"tri")},
acl(d){return this.av9(d,!1)},
aUs(d){var w,v,u,t=this
if(d===700){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gaEY()}if(d===701){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.go.length!==0||w.glp()}if(d===702){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gT7()}if(d===703){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].ga4m()}if(d>=800&&d<820){u=d-800
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dy
return u<w.length&&w[u].gBb()}if(d===720){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].gaEY()}if(d===721){w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
return w.go.length!==0||w.glp()}if(d>=722&&d<728){u=d-720-2
w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dy
return u<w.length&&w[u].gBb()}w=t.d
w===$&&C.c()
v=w.d
v===$&&C.c()
return v[w.e].glp()},
b57(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].dx==="fan"
u.m(new A.e09(u))
t=u.d
w=t.d
w===$&&C.c()
if(w[t.e].db)t=v?"The fan spins.":"The light is on."
else t=v?"The fan stops.":"The light is off."
u.lS(t)
t=u.d
w=t.d
w===$&&C.c()
A.mu(w[t.e].db?900:500,60,0.25,"tri")},
c24(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(d===0)return
if(d>=100&&d<200){if(m.r!=="furniture")return
m.m(new A.e_J(m,d))
w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].SF(m.z)
if(u!=null)m.lS(B.vD.h(0,u.b).a+": move it with the arrows.")
return}if(d===300||d===301||d===302){if(m.r!=="walls")return
m.m(new A.e_K(m,d))
m.lS("Wall picked. Choose a paint colour.")
return}if(d>=600&&d<620){t=d-600
w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].w
if(t>=w.length)return
if(m.r==="doors"){m.m(new A.e_L(m,t))
w=m.d
v=w.d
v===$&&C.c()
A.mu(v[w.e].at.t(0,t)?700:450,70,0.25,"tri")
return}w=w[t]
m.m(new A.e_M(m,t))
A.mu(700,70,0.25,"tri")
C.bN(D.mT,new A.e_N(m,t,w.c),x.P)
return}w=d===700
v=!w
s=!0
if(v)if(d!==701){if(d!==702)if(d!==703)if(!(d>=800&&d<820))r=d>=720&&d<728
else r=s
else r=s
else r=s
s=r}if(m.w&&s){q=m.aUs(d)
A.mu(q?1400:500,160,0.25,"tri")
w=q?"The tester glows and beeps: LIVE, 120 volts. Never touch a live wire. Switch the breaker off first.":"The tester stays dark: no power here. It still needs wiring."
m.OI(w,!q)
return}if(!v||d===701){if(m.aUs(d))m.awT(w?0:1)
else m.aQR()
return}if(d>=800&&d<820){t=d-800
w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dy
if(t>=w.length)return
p=w[t]
if(!p.gBb())m.ai9(t)
else if(p.a==="switch")m.b57()
else m.awT(2+t)
return}if(d===702||d===703){w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(v[w.e].gT7()){w=m.d
v=w.d
v===$&&C.c()
w=!v[w.e].ga4m()}else w=!0
if(w)m.aQR()
else m.b57()
return}if(d===730){w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e]
o=w.fr
if(o==null)return
if(!w.fx){m.m(new A.e_O(m))
w=m.d
v=w.d
v===$&&C.c()
m.lS("The TV is on and playing "+E.jU[v[w.e].fy].a+".")}else{n=A.fjI(o)
w=m.c
w.toString
F.fIb(w,0,n.a,!0,D.uQ,n.b)}return}if(d>=720&&d<728){w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
r=d-720
o=v[w.e].cy.h(0,r)
if(o==null)return
n=A.fjI(o)
if(n.d>0){w=m.c
w.toString
F.fIb(w,0,n.a,!0,D.uQ,n.b)}else m.awT(r)
return}if(d===710||d===711||d===712||d===713){w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
if(!v[w.e].got())if(m.d.a.length!==0)m.DF()
else m.ZH()
else{w=m.f
w===$&&C.c()
t=w.b.h(0,d)
if(t!=null)m.lS(t.a+": "+t.b)}}},
awT(d){var w=this.c
w.toString
return C.bW(E.ny,null,new A.e_T(this,d),w,!0,!0,!1,D.lO,!1,!1,x.H)},
cx2(){var w=this.c
w.toString
return C.bW(E.ny,null,new A.e0s(this),w,!0,!0,!0,D.lO,!1,!1,x.H)},
cwu(){var w=this.c
w.toString
return C.bW(E.ny,null,new A.e0f(this),w,!0,!0,!0,D.lO,!1,!1,x.H)},
csh(d){var w,v,u,t=this,s=t.db
if(s!=null)s.a9(0)
s=t.d
s===$&&C.c()
s=s.gwg()
w=s.length
v=0
for(;v<w;++v){u=s[v]
if(u.fr==null)u.fr="bangtv"
u.fx=!0}s=new A.bOU(t.d,d,C.a([],x.m))
s.c2w()
t.CW=s
t.cx=t.ch.gu0()/1000
t.x=!0
t.r="look"
t.w=!1
s=D.d.gL(t.CW.c)
t.dy.a8(0)
t.fr=!1
t.m(new A.e05(t,s.a))
t.Ys()
t.db=C.dC(D.j4,new A.e06(t))
t.m(new A.e07())},
bIW(d,e){var w,v=d.w[e],u=v.a
A:{if("left"===u){w=new A.K(-d.giD(0)/2,40,v.b+d.gmW(0)/2-40)
break A}if("right"===u){w=new A.K(d.giD(0)/2,40,v.b+d.gmW(0)/2-40)
break A}w=new A.K(v.b,40,0)
break A}return w},
cwv(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.CW
if(h==null||i.c==null)return
w=i.ch.gu0()/1000-i.cx
v=h.d
v===$&&C.c()
if(w>=v){i.ah4()
i.lS("The tour is over. Press Tour to walk the house again.")
return}if(i.fr)return
u=h.b81(w)
v=i.d
v===$&&C.c()
t=v.e
if(u.a!==t){i.ahA(u)
return}v=v.d
v===$&&C.c()
s=v[t]
v=u.as
if(v>=0&&v<s.w.length){t=s.ax
r=t.h(0,v)
if(r==null)r=0
q=u.e
if(!q&&u.z<0){p=r<1.25
if(p)t.n(0,v,1.25)}else{p=q&&r>0
if(p)t.n(0,v,Math.max(0,r-0.3))}}else p=!1
v=u.z
t=v>=0
if(t&&v<s.w.length){o=1.25*D.dV.av(0,D.k.D(u.Q,0,1))
q=s.ax
n=q.h(0,v)
if((n==null?0:n)!==o){q.n(0,v,o)
p=!0}}q=u.y
if(D.a.a0(q,"ad")&&i.dy.J(0,q)){s.fy=D.o.F(s.fy+1,8)
A.mu(1000,50,0.25,"tri")
p=!0}if(p)i.m(i.gOH())
m=Math.max(s.giD(0)*0.95,s.gmW(0)*1.15)+20
t=t&&v<s.w.length
q=u.b
if(t){l=i.bIW(s,v)
k=D.dA.av(0,D.k.D(u.Q,0,1))
j=s.w[v].a
v=i.e
v===$&&C.c()
t=j==="back"?14:0
if(j==="left")n=0.55*k
else n=j==="right"?-0.55*k:-0.03
v.mc(m+(70-m)*k,0.2-0.07*k,new A.K(l.a*0.9+q*0.1,36,l.c+t),n)}else{v=i.e
v===$&&C.c()
v.mc(m,0.24,new A.K(q*0.7,30,u.c*0.6+8),-0.05-q/(s.giD(0)/2)*0.2)}if(u.x!==i.dx)i.m(new A.e0g(i,u))},
ahA(d){return this.cwt(d)},
cwt(d){var w=0,v=C.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$ahA=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l={}
r.fr=!0
l.a=null
t=4
p=$.aT.ak$.x.h(0,r.fx)
p=p==null?null:p.gb7()
q=x.aP.a(p)
p=q
p=p==null?null:p.lL(0.6).cM(0,D.kd)
j=l
w=7
return C.b(x.j.b(p)?p:C.dP(p,x.cG),$async$ahA)
case 7:j.a=f
t=2
w=6
break
case 4:t=3
k=s.pop()
l.a=null
w=6
break
case 3:w=2
break
case 6:if(r.c==null||r.CW==null){r.fr=!1
w=1
break}p=r.d
p===$&&C.c()
n=p.d
n===$&&C.c()
n[p.e].ax.a8(0)
r.av9(d.a,!0)
p=r.d
n=p.d
n===$&&C.c()
m=n[p.e]
p=d.as
if(p>=0&&p<m.w.length)m.ax.n(0,p,1.25)
r.m(new A.e0a(l,r))
l=r.e
l===$&&C.c()
l.d=new A.K(d.b,36,d.c+4)
l.c=70
l.a=-0.03
l.b=0.15
r.fr=!1
case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$ahA,v)},
ah4(){var w,v,u,t=this,s=t.db
if(s!=null)s.a9(0)
t.db=null
s=t.d
s===$&&C.c()
s=s.d
s===$&&C.c()
w=s.length
v=0
for(;v<s.length;s.length===w||(0,C.L)(s),++v){u=s[v]
u.at.a8(0)
u.ax.a8(0)}t.fy=null
t.fr=!1
t.m(new A.e08(t))
t.Ys()},
cfD(){var w=this.CW
if(w==null)return null
return w.b81(this.ch.gu0()/1000-this.cx)},
aQR(){var w=this.d
w===$&&C.c()
if(w.a.length!==0)this.DF()
else this.ZQ()},
DF(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$DF=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.gyz()){t.lS("This lesson is done. Try everything: it all works.")
w=1
break}p=r.go
w=p==="ptrap"||p==="faucet"?3:5
break
case 3:if(r.k1==null)r.k1=A.fO9()
p=t.c
p.toString
w=6
return C.b(C.a5(p,!1).ce(C.ej(new A.e_E(r),!1,null,x.H)),$async$DF)
case 6:w=4
break
case 5:if(r.id==null)r.id=new A.Xs(C.V(x.S,x.N))
p=t.c
p.toString
w=7
return C.b(C.a5(p,!1).ce(C.ej(new A.e_F(r),!1,null,x.H)),$async$DF)
case 7:case 4:if(t.c==null){w=1
break}t.m(t.gOH())
if(r.gyz()){q=r.go
A:{if("switch"===q){p="Done! Tap the switch on the wall: the light comes on."
break A}if("fan"===q){p="Done! Tap the wall switch and the fan spins."
break A}if("outlet"===q||"gfci"===q){p="Done! Tap the outlet and plug something in."
break A}p="Done! The sink works."
break A}t.lS(p)}case 1:return C.h(u,v)}})
return C.i($async$DF,v)},
ai9(d){return this.czo(d)},
czo(d){var w=0,v=C.j(x.H),u,t=this,s,r,q
var $async$ai9=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:q=t.d
q===$&&C.c()
s=q.d
s===$&&C.c()
r=s[q.e].dy[d]
q=t.c
q.toString
w=3
return C.b(C.a5(q,!1).ce(C.ej(new A.e0t(r),!1,null,x.H)),$async$ai9)
case 3:if(t.c==null){w=1
break}t.m(t.gOH())
if(r.gBb())t.lS("Wired! "+(r.a==="switch"?"Tap it to turn the light on and off.":"Tap it to plug something in."))
case 1:return C.h(u,v)}})
return C.i($async$ai9,v)},
ZQ(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$ZQ=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
if(r.c==="outside"){w=1
break}s=r.CW
if(s==null){q=A.fOy(A.i3c(r),r.b,!1,p.b*37+r.a)
q.aD4()
if(!r.ay)q.cCb()
r.CW=q
p=q}else p=s
p.b=t.d.c
p=t.c
p.toString
w=3
return C.b(C.a5(p,!1).ce(C.ej(new A.e_H(r),!1,null,x.H)),$async$ZQ)
case 3:if(t.c==null){w=1
break}t.m(t.gOH())
if(r.glp())t.lS(r.b+": the wiring is finished. The light has power.")
case 1:return C.h(u,v)}})
return C.i($async$ZQ,v)},
ZH(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$ZH=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:p=t.d
p===$&&C.c()
s=p.d
s===$&&C.c()
r=s[p.e]
s=r.c
if(!(s==="bathroom"||s==="kitchen")){t.OI("This room has no plumbing. Bathrooms and the kitchen do.",!1)
w=1
break}q=r.cx
if(q==null){s=s==="kitchen"?"kitchen":"bathroom"
s=r.cx=A.fO8(!1,p.b*41+r.a,s)
p=s}else p=q
if(!r.ch&&!p.gaiF())r.cx.cCa()
r.cx.b=t.d.c
p=t.c
p.toString
w=3
return C.b(C.a5(p,!1).ce(C.ej(new A.e_G(r),!1,null,x.H)),$async$ZH)
case 3:if(t.c==null){w=1
break}t.m(t.gOH())
if(r.got())t.lS(r.b+": the plumbing is finished and nothing leaks.")
case 1:return C.h(u,v)}})
return C.i($async$ZH,v)},
bwW(){var w=this.c
w.toString
return C.bW(E.ny,null,new A.e_0(this),w,!0,!0,!1,D.lO,!1,!1,x.H)},
bwz(d){var w,v,u,t,s,r,q,p,o=this,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
v=w[n.e]
n=v.c
if(n==="outside"||n==="hall"){o.OI("Add devices in a room, not in the hall or the garden.",!1)
return}n=v.dy
if(n.length>=4){o.OI("This room already has four added devices.",!1)
return}w=C.a([-v.giD(0)/4,v.giD(0)/4],x.n)
for(u=v.w,t=D.d.gah(u),s=new C.fG(t,new A.dZV());s.C();)w.push(t.gU(0).b)
for(u=D.d.gah(u),t=new C.fG(u,new A.dZW());t.C();)w.push(u.gU(0).b+24)
for(u=n.length,r=0;r<n.length;n.length===u||(0,C.L)(n),++r)w.push(n[r].b)
p=-v.giD(0)/2+14
for(;;){if(!(p<=v.giD(0)/2-14)){q=null
break}if(D.d.d9(w,new A.dZX(p))){q=p
break}p+=6}if(q==null){o.OI("There is no free place left on the back wall.",!1)
return}o.m(new A.dZY(o,v,d,q))
o.lS("Added. It is red because it is not wired: tap it to wire it.")},
acm(d,e){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].SF(u.z)
if(v==null)return
u.m(new A.e_D(u,v,d,e))},
c28(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].SF(u.z)
if(v==null)return
u.m(new A.e0h(u,v))},
ciK(){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].SF(u.z)
if(v==null)return
u.m(new A.e0_(u,v))
u.lS(B.vD.h(0,v.b).a+": "+B.cI2[v.f]+".")},
c26(d){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=w[t.e].SF(u.z)
if(v==null)return
u.m(new A.e00(u,v))},
bwC(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
v.m(new A.dZZ(v,w[u.e].J(0,d)))
v.lS(B.vD.h(0,d).a+" added. Move it with the arrows.")},
OG(d,e,f,g,h){var w=null,v=e?g.j(0.25):D.c.j(0.07),u=C.m(14),t=e?g:D.b5
t=C.I(t,D.r,e?2:1)
v=C.a([C.p(w,C.d(d,w,w,w,w,w,w,C.l(w,w,e?g:D.c,w,w,w,w,w,w,w,w,12.5,w,w,D.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,A_.Xq,w,w,w)],x.p)
if(h)v.push(C.ao(w,C.p(w,w,D.f,w,w,new C.o(D.aB,w,C.I(B.Kn,D.r,2),w,w,w,D.a6),w,11,w,w,w,w,w,11),w,w,w,-2,-3,w))
return new C.C(D.fx,C.aE(w,new C.an(D.W,w,D.aa,D.f,v,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),w)},
vf(d,e,f,g){return this.OG(d,e,f,g,!1)},
Ic(d,e,f){return this.OG(d,e,f,D.aJ,!1)},
azn(d,e,f,g){var w=null,v=g==null,u=v?34:w,t=v?w:D.l4,s=C.m(10),r=e?D.c:D.b5
r=C.I(r,D.r,e?3:1)
if(v)v=w
else v=C.av(C.d(g,w,w,w,w,w,w,C.l(w,w,d.j2()>0.5?D.w:D.c,w,w,w,w,w,w,w,w,12,w,w,D.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w)
return new C.C(E.th,C.aE(w,C.p(w,v,D.f,w,w,new C.o(d,w,r,s,w,w,D.n),w,34,w,w,t,w,w,u),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),w)},
cts(d,e,f){return this.azn(d,e,f,null)},
GR(d,e){var w=null,v=D.c.j(0.1),u=C.m(10),t=C.I(D.b5,D.r,1)
return new C.C(D.fx,C.aE(w,C.p(w,C.W(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,36,w,w,w,w,w,40),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,D.a8),w)},
bEW(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.CW!=null){w=m.dx
return C.A(C.a([C.D(C.d("\ud83c\udfac "+(w.length===0?"Walking in":w),l,1,D.a2,l,l,l,B.eWi,l,l,l),1),m.vf("\u23f9 Stop the tour",!0,m.gcsB(),D.cr)],x.p),D.m,l,D.e,D.j,0,l,l)}switch(m.r){case"furniture":w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
u=v[w.e].SF(m.z)
w=x.p
v=C.a([],w)
if(u!=null)v.push(new C.a6(l,40,C.cB(C.a([m.GR(D.pv,new A.e_r(m)),m.GR(D.j8,new A.e_s(m)),m.GR(D.vb,new A.e_t(m)),m.GR(D.tu,new A.e_u(m)),m.GR(G.akI,m.gc27()),m.GR(D.n_,m.gciJ()),m.GR(D.e4,m.gc25(m))],w),l,l,l,l,D.aQ,!1),l))
else v.push(B.aTF)
w=C.a([],w)
for(t=B.vD.gdL(B.vD),t=t.gah(t);t.C();){s=t.gU(t)
r=s.b
w.push(m.vf(r.b+" "+r.a,!1,new A.e_v(m,s),D.b0))}v.push(new C.a6(l,40,C.cB(w,l,l,l,l,D.aQ,!1),l))
return C.v(v,D.m,l,D.e,D.Q,0,D.p)
case"walls":w=m.Q
v=w<0
w=v?"All walls":"Wall "+(w+1)+": tap Look to reset"
v=C.a([m.Ic(w,v,new A.e_w(m))],x.p)
for(q=0;q<8;++q)v.push(m.azn(B.auY[q],!1,new A.e_x(m,q),B.daG[q]))
return new C.a6(l,40,C.cB(v,l,l,l,l,D.aQ,!1),l)
case"floor":w=C.a([],x.p)
for(q=0;q<7;++q){v=B.auL[q]
t=m.d
t===$&&C.c()
s=t.d
s===$&&C.c()
w.push(m.azn(v.b,s[t.e].Q===q,new A.e_y(m,q),v.a))}return new C.a6(l,40,C.cB(w,l,l,l,l,D.aQ,!1),l)
case"ceiling":w=m.d
w===$&&C.c()
v=w.d
v===$&&C.c()
w=v[w.e].dx==="fan"?"\ud83c\udf00 Fan (tap for light)":"\ud83d\udca1 Light (tap for fan)"
w=C.a([m.vf(w,!1,new A.e_z(m),D.b7)],x.p)
for(q=0;q<4;++q){v=B.atC[q]
t=m.d
s=t.d
s===$&&C.c()
w.push(m.cts(v,s[t.e].as===q,new A.e_A(m,q)))}return new C.a6(l,40,C.cB(w,l,l,l,l,D.aQ,!1),l)
default:p=C.aW(x.S)
w=C.a([],x.p)
v=m.d
v===$&&C.c()
t=v.d
t===$&&C.c()
v=t[v.e].w
t=v.length
o=0
for(;o<v.length;v.length===t||(0,C.L)(v),++o){n=v[o]
s=n.c
if(p.J(0,s)){r=m.d.d
r===$&&C.c()
s=r[s]
r=s.glp()&&s.got()
w.push(m.OG("\ud83d\udeaa "+s.b,!1,new A.e_B(m,n),D.b0,!r))}}return new C.a6(l,40,C.cB(w,l,l,l,l,D.aQ,!1),l)}},
B(d){var w=this,v=null,u=C.a([C.bY(0,new C.es(w.bAW(d),w.fx),0,0,0)],x.p)
if(w.fy!=null)u.push(C.bY(0,C.e_(C.mt(new A.e0v(w),v,D.dA,D.i6,new C.cw(w.go,x.ba),new A.e0w(w),new C.bm(1,0,x.be),x.i),!0,v),0,0,0))
return new C.an(D.W,v,D.aa,D.q,u,v)},
bAW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.d
h===$&&C.c()
w=h.d
w===$&&C.c()
v=w[h.e]
h=C.aI(d,i,x.w).w
w=j.d
if(w.a.length!==0)w=v.gyz()?"Done \u2713":"To do"
else w=""+w.gcHA()+"/"+j.d.gwg().length+" done"
u=j.f
u===$&&C.c()
t=j.e
t===$&&C.c()
s=j.as
r=j.at
q=j.ax
p=j.y&&j.d.a.length===0?104:10
o=x.p
n=C.a([],o)
if(j.y&&j.d.a.length===0)n.push(new A.bgz(j.d,j.gc21(),Math.min(138,h.a.a*0.36),i))
h=A.WP(t,new A.e_6(j),q,s,i,i,new A.e_7(),r,p,new A.e_8(j),j.gc23(),u,n,i)
u=j.x?"\ud83d\udd2d See the whole room":"\ud83c\udfe0 Be inside"
u=C.a([j.vf(u,!1,new A.e_e(j),D.b0)],o)
if(j.d.a.length===0){t=j.CW!=null
s=t?"\u23f9 Stop tour":"\ud83c\udfac Tour"
u.push(j.vf(s,t,new A.e_f(j),D.bZ))}u.push(j.vf("\ud83d\udcfa TV",!1,j.gcx1(),D.ct))
if(j.d.a.length===0)u.push(j.vf("\u2795 Add",!1,j.gbwV(),D.bc))
u.push(j.vf("\ud83d\udd26 Tester",j.w,new A.e_g(j),D.cw))
if(j.d.a.length!==0)u.push(j.OG("\ud83d\udd27 Do the lesson",!1,j.gc22(),D.cp,!v.gyz()))
else{t=j.OG("\u26a1 Wiring",!1,j.gcaU(),D.cp,!v.glp())
s=v.c
s=(s==="bathroom"||s==="kitchen")&&!v.got()
D.d.v(u,C.a([t,j.OG("\ud83d\udeb0 Plumbing",!1,j.gcaj(),D.ct,s),j.vf("\ud83d\uddfa Map",j.y,new A.e_h(j),D.by)],o))}u=C.cB(u,i,i,i,i,D.aQ,!1)
t=j.Ic("\ud83d\udc41 Look",j.r==="look",new A.e_i(j))
s=j.Ic("\ud83d\udecb Furniture",j.r==="furniture",new A.e_j(j))
r=j.Ic("\ud83e\uddf1 Walls",j.r==="walls",new A.e_k(j))
q=j.Ic("\ud83d\udfeb Floor",j.r==="floor",new A.e_l(j))
p=j.Ic("\u2b1c Ceiling",j.r==="ceiling",new A.e_9(j))
n=j.Ic("\ud83d\udeaa Doors",j.r==="doors",new A.e_a(j))
m=j.vf("\ud83d\udcd8 Learn",!1,new A.e_b(d),D.by)
l=j.d.c
k=l?"\ud83d\udd25 Practice":"\ud83c\udf93 Learn mode"
return new A.AS(v.b,D.aJ,h,C.v(C.a([new C.a6(i,40,u,i),D.at,new C.a6(i,40,C.cB(C.a([t,s,r,q,p,n,m,j.vf(k,l,new A.e_c(j),D.cr)],o),i,i,i,i,D.aQ,!1),i),D.at,j.bEW()],o),D.F,i,D.e,D.Q,0,D.p),new A.e_d(j,d),w,i)},
cgT(d){return C.bW(E.ny,null,new A.e_Z(this),d,!0,!0,!0,D.lO,!1,!1,x.H)}}
A.bgz.prototype={
B(d){var w=null,v=D.k.D((this.e-10)/126,0.5,1),u=D.w.j(0.6),t=C.m(12),s=C.I(D.b5,D.r,1)
return C.p(w,new C.a6(126*v,84*v,C.aE(w,C.f1(D.A,C.b3(w,w,w,new A.bfY(this.c,w),B.eGj),D.f,D.wr),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dlx(this,v),w,w,w,w,!1,D.a8),w),D.f,w,w,new C.o(u,w,s,t,w,w,D.n),w,w,w,w,D.lC,w,w,w)}}
A.bfY.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.b,e=f.d
e===$&&C.c()
w=e.length
v=d.a
u=0
for(;u<e.length;e.length===w||(0,C.L)(e),++u){t=e[u]
s=t.d*14+1
r=t.e*14+1
q=s+(t.f*14-2)
p=r+(t.r*14-2)
o=new C.aa(s,r,q,p)
n=t.a===f.e
if(t.glp()&&t.got())m=D.bn
else m=!t.glp()?D.aB:D.d7
l=C.bz(o,D.hy)
$.X()
k=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
k.r=m.j(t.glp()&&t.got()?0.35:0.5).gp(0)
j=k.H()
v.drawRRect(C.ep(l),j)
j.delete()
l=C.bz(o,D.hy)
k=new C.as(D.X,D.V,D.a_,D.a0,D.Z)
k.b=D.ae
k.c=n?2.2:0.8
k.r=(n?D.c:D.c_).gp(0)
j=k.H()
v.drawRRect(C.ep(l),j)
j.delete()
i=t.c
A:{if("bedroom"===i){l="\ud83d\udecf"
break A}if("bathroom"===i){l="\ud83d\udebf"
break A}if("kitchen"===i){l="\ud83c\udf73"
break A}if("living"===i){l="\ud83d\udecb"
break A}if("outside"===i){l="\ud83c\udf33"
break A}l=""
break A}h=new C.km(new C.eo(l,g,g,D.cO,g,g,g,g,g,g,B.eVv),D.a5,D.ch,new C.jm(1),g,g,g,g,D.cd,g)
h.eO()
l=h.b
k=l.c
l=l.a.c
h.a6(d,new C.u(s+(q-s)/2-k/2,r+(p-r)/2-l.gbb(l)/2))}},
aq(d){return!0}}
A.bOW.prototype={}
A.F8.prototype={}
A.MB.prototype={
T(){return new A.bhv()}}
A.bhv.prototype={
A2(d){var w=this.c
w.toString
return C.a5(w,!1).ce(C.ej(new A.dJd(d),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
$.aqp="tech"
w=C.aH(l,l,l,l,K.nO,l,l,l,new A.dJg(d),l,l,l,l,l,l)
v=D.aJ.j(0.16)
u=C.m(13)
t=x.p
u=C.A(C.a([w,C.p(l,B.b2p,D.f,l,l,new C.o(v,l,C.I(D.aJ.j(0.6),D.r,1),u,l,l,D.n),l,40,l,l,l,l,l,40),D.aw,B.btP],t),D.m,l,D.e,D.j,0,l,l)
v=C.A(C.a([C.D(m.aWC("Learn mode",!m.d,D.bc,new A.dJh(m)),1),D.ab,C.D(m.aWC("Practice mode",m.d,D.cr,new A.dJi(m)),1)],t),D.m,l,D.e,D.j,0,l,l)
w=C.m(20)
s=C.I(D.aJ,D.r,1.6)
w=C.aE(l,C.p(l,C.A(C.a([B.f5x,D.ev,B.btM,B.bCq],t),D.m,l,D.e,D.j,0,l,l),D.f,l,l,new C.o(l,l,s,w,l,B.bRV,D.n),l,l,l,l,D.bU,l,l,l),D.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.dJk(m),l,l,l,l,l,l,!1,D.a8)
s=C.d("JOBS",l,l,l,l,l,l,B.aNn,l,l,l)
r=m.aWB(C.a([m.DG("\ud83d\udd0c","Wire a room","Go to a room that needs wiring",D.bn,new A.dJl(m)),m.DG("\ud83d\udebd","Plumb a room","Go to a bathroom or kitchen",D.aW,new A.dJm(m)),m.DG("\ud83d\udd27","Fix a house","Walk the house and fix every sign",D.aJ,new A.dJn(m)),m.DG("\ud83e\uddf1","Build a room","Frame, drywall, then wire",D.bc,new A.dJo(m)),m.DG("\u26a1","Wiring bench","Just the wiring, one room",D.cp,new A.dJp(m)),m.DG("\ud83d\udcde","Service calls","A customer rings with problems",D.iZ,new A.dJq(m))],t))
q=C.d("LESSONS",l,l,l,l,l,l,B.aNn,l,l,l)
p=C.a([],t)
for(o=0;o<7;++o){n=B.cOD[o]
p.push(m.DG(n.b,n.c,n.d,n.e,new A.dJr(m,n)))}p.push(m.DG("\ud83d\udcd8","Learn the trades","Short cards for beginners",D.by,new A.dJj(m)))
return C.cb(l,D.bX,C.bn(!0,C.cB(C.a([u,D.ac,v,D.ac,w,new C.C(B.agV,s,l),r,new C.C(B.agV,q,l),m.aWB(p)],t),l,B.afZ,l,l,D.ah,!1),!0,!1,D.ag,!0,!0),l,!1,!1,l,l)},
aWC(d,e,f,g){var w=null,v=e?f.j(0.2):D.c.j(0.06),u=C.m(14),t=e?f:D.b5
t=C.I(t,D.r,e?2:1)
return C.aE(w,C.p(w,C.av(C.d(d,w,w,w,w,w,w,C.l(w,w,e?f:D.ad,w,w,w,w,w,w,w,w,13,w,w,D.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,D.jq,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,D.a8)},
aWB(d){var w,v,u,t,s=null,r=x.p,q=C.a([],r)
for(w=0;v=d.length,w<v;w+=2){u=d[w]
t=w+1
v=t<v?d[t]:D.bH
q.push(new C.C(D.cG,new C.Dt(new C.co(D.aQ,D.e,D.j,D.aj,s,D.p,s,0,C.a([new C.bE(1,D.bi,u,s),D.ab,new C.bE(1,D.bi,v,s)],r),s),s),s))}return C.v(q,D.m,s,D.e,D.j,0,D.p)},
DG(d,e,f,g,h){var w=null,v=C.m(16),u=C.I(g.j(0.5),D.r,1)
return C.aE(w,C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,D.Iv,w,w,w),D.ao,C.d(e,w,w,w,w,w,w,W.Iq,w,w,w),D.bz,C.d(f,w,2,D.a2,w,w,w,B.eRf,w,w,w)],x.p),D.F,w,D.e,D.j,0,D.p),D.f,w,w,new C.o(B.Kn,w,u,v,w,w,D.n),w,w,w,w,D.bk,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,D.a8)}}
A.b4P.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.bY(0,new A.atc(r.c,r.d,r.r,r.e,r.x,r.w,E.VW,q),0,0,0)],p),n=r.as,m=n!=null
if(m)o.push(C.ao(q,C.v(n,D.F,q,D.e,D.j,0,D.p),q,q,8,q,8,q))
n=C.a([],p)
w=r.at
if(w!=null)D.d.v(n,w)
n.push(r.ava(D.hv,"Zoom in",new A.coM(r)))
n.push(r.ava(D.xT,"Zoom out",new A.coN(r)))
w=r.f
n.push(r.ava(B.bz1,"Back to the whole view",w))
o.push(C.ao(q,C.v(n,D.m,q,D.e,D.j,0,D.p),q,q,q,8,8,q))
n=r.y
if(n!=null){v=r.ay
if(v==null)m=m?60:10
else m=v
v=r.z
u=(v?D.ec:D.ex).j(0.95)
t=C.m(14)
s=C.I(v?D.bc:D.cr,D.r,1)
o.push(C.ao(q,C.p(q,C.d(n,q,q,q,q,q,q,B.eSN,q,q,q),D.f,q,q,new C.o(u,q,s,t,q,q,D.n),q,q,q,q,D.oo,q,q,q),q,q,10,62,m,q))}n=r.Q
if(n!=null){m=C.m(16)
v=C.I(D.b5,D.r,1)
n=C.a([C.d(n.a,q,q,q,q,q,q,B.f2K,q,q,q),D.d0,C.d(n.b,q,q,q,q,q,q,E.SM,q,q,q)],p)
u=r.ax
if(u!=null)D.d.v(n,C.a([D.ao,u],p))
o.push(C.ao(8,C.p(q,C.A(C.a([C.D(C.v(n,D.F,q,D.e,D.j,0,D.p),1),C.aH(q,q,q,q,D.FZ,q,q,q,w,q,q,q,q,q,D.c7)],p),D.F,q,D.e,D.j,0,q,q),D.f,q,q,new C.o(E.aaJ,q,v,m,q,q,D.n),q,q,q,q,E.afI,q,q,q),q,q,10,10,q,q))}return new C.an(D.W,q,D.aa,D.q,o,q)},
ava(d,e,f){var w=null,v=D.w.j(0.55),u=C.I(D.b5,D.r,1)
return new C.C(D.eO,C.ho(C.aE(w,C.p(w,C.W(d,D.c,w,w,w,20),D.f,w,w,new C.o(v,w,u,w,w,w,D.a6),w,38,w,w,w,w,w,38),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,D.a8),w,e,w,w),w)}}
A.AS.prototype={
B(d){var w=this,v=null,u=C.aH(v,v,v,v,K.nO,v,v,v,new A.bR0(d),v,v,v,v,v,v),t=w.d,s=C.D(C.d(w.c,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1),r=t.j(0.15),q=C.m(16),p=C.I(t.j(0.6),D.r,1),o=x.p
q=C.A(C.a([u,s,C.aE(v,C.p(v,C.A(C.a([C.W(A3.aj9,t,v,v,v,17),D.ea,C.d(w.w,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,D.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),D.m,v,D.e,D.Q,0,v,v),D.f,v,v,new C.o(r,v,p,q,v,v,D.n),v,v,v,v,D.tj,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,!1,D.a8)],o),D.m,v,D.e,D.j,0,v,v)
p=C.aI(d,v,x.w).w
return C.cb(v,D.bX,C.bn(!0,C.v(C.a([new C.C(B.bs5,q,v),C.p(v,C.cd(w.f,D.q,v,D.y,v,v,v,v,D.ah),D.f,v,new C.aY(0,1/0,0,p.a.b*0.34),B.aZ0,v,v,v,v,E.Xo,v,v,1/0),C.D(C.bv(A2.a92,w.e,D.aq),1)],o),D.m,v,D.e,D.j,0,D.p),!0,!1,D.ag,!0,!0),v,!1,!1,v,v)}}
A.GN.prototype={
T(){return new A.ay3()},
gda(d){return this.d}}
A.ay3.prototype={
gFA(){var w,v=this,u=v.d
if(u===$){w=A.Ac(v.a.c)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
geR(d){var w,v=this.e
if(v===$){w=this.a.d
v=this.e=w==null?new A.Xs(C.V(x.S,x.N)):w}return v},
gkM(){var w=this.f
return w===$?this.f=new A.Ay(0.42,0.26,12,B.fxq,$.aw()):w},
goC(){var w=this,v=w.r
return v===$?w.r=A.fSl(w.gFA(),w.geR(0),!0):v},
q(){var w=this.as
if(w!=null)w.a9(0)
this.a2()},
kp(d,e){var w=this,v=w.as
if(v!=null)v.a9(0)
w.m(new A.d1q(w,d,e))
w.as=C.cM(D.l3,new A.d1r(w))},
oW(d){return this.kp(d,!1)},
xn(){var w=this.geR(0)
w.d=w.d&&w.a&&w.c>=2
this.r=A.fSl(this.gFA(),w,!0)},
nT(){var w=this,v=w.gkM(),u=w.geR(0).c===0,t=u?2.8:0.4
u=u?12:10
v.mc(u,0.26,new A.K(0,0.1,t),0.42)
w.m(new A.d1j(w))},
c29(){var w,v,u,t="ground",s=this.geR(0),r=!s.a||s.c>0,q=new A.d1i(this)
switch(this.gFA().a){case"switch":w=q.$1(t)
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
If(d){var w,v,u,t,s,r,q,p=this
if(d===0){p.nT()
return}w=p.gFA()
v=w.f
u=C.T(v).k("a2<1>")
t=C.B(new C.a2(v,new A.d1k(d),u),u.k("H.E"))
v=w.a
s=A.hh7(v,d)
if(s!=null){u=p.geR(0)
u=u.c===0&&u.b.iN(0,s)}else u=!1
if(u){w=p.geR(0)
if(w.a){A.mu(180,220,0.25,"square")
p.oW("STOP! The power is still on. Turn the breaker OFF before you touch any wire.")
return}w=w.b
w.bn(w,new A.d1l(s))
p.m(p.gc2c())
p.kp("Wire taken off the screw.",!0)
return}if(t.length!==0&&p.w.length!==0&&p.geR(0).c===0){u=p.geR(0)
r=A.hh3(w,u,p.w,D.d.gL(t),!1)
if(r!=null){++p.Q
A.mu(180,220,0.25,"square")
p.oW(r)}else{A.y4()
p.m(new A.d1m(p,d))
if(A.bBO(w,u))p.kp("Every wire is on the right screw. Now push the device into the box.",!0)
else p.kp(D.d.gL(t).b+": fastened correctly.",!0)
p.gkM().Gn(7,A.bzw(v,d,u))
p.w=""}return}q=p.goC().b.h(0,d)
if(q!=null){p.m(new A.d1n(p,d))
w=p.gkM()
v=q.c
w.Gn(q.d,v)}},
cfR(){var w,v=this
v.m(new A.d1o(v))
w=v.geR(0)
if(w.a){A.mu(120,200,0.25,"saw")
if(w.c===0)v.oW("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{A.mu(600,100,0.25,"tri")
v.kp("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
cuI(){var w,v,u=this
u.m(new A.d1s(u))
A.y4()
w=u.gFA().a
A:{if("switch"===w){v="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===w){v="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}v="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: "+u.Q+"."
break A}u.kp(v,!0)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.c29(),a0=D.d.bc(d,new A.d1A())
if(a0<0)w="All done"
else{f.gFA()
w="Step "+(a0+1)+"/7"}v=f.gFA()
u=f.geR(0)
t=A.bBO(v,u)&&!u.a
s=f.goC()
r=f.gkM()
q=f.x
p=f.y
o=f.z
n=q!==0?f.goC().b.h(0,f.x):e
m=(u.a?D.ex:D.ec).j(0.95)
l=C.m(18)
k=u.a
j=C.I(k?D.cr:D.bc,D.r,1.5)
i=C.W(k?D.h4:B.ak0,D.c,e,e,e,18)
h=x.p
l=A.WP(r,e,o,q,n,e,e,p,e,f.gId(),f.gIe(),s,C.a([C.aE(e,C.p(e,C.A(C.a([i,D.ea,C.d(k?"Breaker ON (live)":"Breaker OFF (safe)",e,e,e,e,e,e,D.ne,e,e,e)],h),D.m,e,D.e,D.Q,0,e,e),D.f,e,e,new C.o(m,e,j,l,e,e,D.n),e,e,e,e,D.h3,e,e,e),D.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,f.gcfQ(),e,e,e,e,e,e,!1,D.a8)],h),C.a([A.Q9("Hints",D.aJ,D.qP,u.e,new A.d1B(f)),D.ao,A.Q9("Labels",D.aW,M.MU,u.f,new A.d1C(f)),D.ao,A.Q9("Brass side",B.bg1,E.ak6,!1,new A.d1E(f)),D.ao,A.Q9("Silver side",B.Kp,D.N_,!1,new A.d1F(f)),D.P],h))
j=C.a([],h)
s=u.c
if(s===0){s=C.a([],h)
for(r=D.d.gah(v.e),q=new C.fG(r,new A.d1G(f));q.C();){p=r.gU(0)
o=p.c
n=new C.aV(14,14)
m=f.w
k=p.a
m=m===k
i=m?D.b0:D.b5
g=new C.az(i,m?3:1,D.r,-1)
i=C.a([],h)
if(u.b.iN(0,k))i.push(new C.C(D.fx,C.W(D.ee,p.d,e,e,e,18),e))
m=p.b
k=p.d
i.push(new C.x(m,e,new C.F(!0,k,e,e,e,e,13,D.u,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e))
s.push(new C.C(D.j6,C.aE(e,C.p(e,new C.co(D.aQ,D.e,D.j,D.m,e,D.p,e,0,i,e),D.f,e,e,new C.o(o,e,new C.bP(g,g,g,g),new C.bp(n,n,n,n),e,e,D.n),e,e,e,e,D.hH,e,e,e),D.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new A.d1H(f,p),e,e,e,e,e,e,!1,D.a8),e))}s=C.c_(D.bD,s,D.bt,6,8)
if(t)u="Push it into the box"
else u=u.a?"Turn the breaker OFF first":"Fasten every wire first"
D.d.v(j,C.a([s,D.P,C.A(C.a([A.y3(u,B.akG,t?new A.d1I(f):e,D.aJ)],h),D.m,e,D.e,D.j,0,e,e)],h))}else if(s===1)D.d.v(j,C.a([C.A(C.a([A.y3("Pull it back out",D.qS,new A.d1J(f),D.ad),D.ab,A.y3("Put the cover plate on",L.vc,new A.d1K(f),D.aJ)],h),D.m,e,D.e,D.j,0,e,e)],h))
else{s=A.y3("Start over",D.la,new A.d1L(f),D.ad)
u=u.d
r=u?"Tested \u2713":"Power on and test"
D.d.v(j,C.a([C.A(C.a([s,D.ab,A.y3(r,D.h4,u?e:f.gcuH(),D.aJ)],h),D.m,e,D.e,D.j,0,e,e)],h))}return new A.AS(v.b,D.aJ,l,C.v(j,D.m,e,D.e,D.Q,0,D.p),new A.d1D(f,a1,d),w,e)}}
A.a8d.prototype={
T(){return new A.aDZ()},
gda(d){return this.c}}
A.aDZ.prototype={
geR(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.fO9():w}return v},
gkM(){var w=this.e
return w===$?this.e=new A.Ay(-0.3,0.18,40,B.aQw,$.aw()):w},
goC(){var w=this.f
return w===$?this.f=A.bzc(this.geR(0)):w},
q(){var w=this.z
if(w!=null)w.a9(0)
this.a2()},
kp(d,e){var w=this,v=w.z
if(v!=null)v.a9(0)
w.m(new A.eKf(w,d,e))
w.z=C.cM(D.l3,new A.eKg(w))},
oW(d){return this.kp(d,!1)},
nT(){this.gkM().mc(40,0.18,B.aQw,-0.3)
this.m(new A.eK8(this))},
If(d){var w,v,u,t,s,r,q=this,p="square"
if(d===0){q.nT()
return}w=C.E([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!q.geR(0).a.t(0,w)){v=q.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
q.oW("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){A.mu(180,220,0.25,p)
u=q.r
A:{if("tail"===u){v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break A}if("trap"===u){v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break A}v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break A}q.oW(v)
return}if(w==="trap"&&!q.geR(0).a.t(0,"tail")){A.mu(180,220,0.25,p)
q.oW("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!q.geR(0).a.t(0,"trap")){A.mu(180,220,0.25,p)
q.oW("The trap arm joins the trap. Put the P-trap on first.")
return}q.m(new A.eK9(q,w))
A.y4()
q.kp("Piece in place. "+(q.geR(0).a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){t=v?"n1":"n2"
if(q.geR(0).b.h(0,t)!==!0){q.m(new A.eKa(q,t))
A.y4()
q.kp("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}s=q.goC().b.h(0,d)
if(s!=null){q.m(new A.eKb(q,d))
v=q.gkM()
r=s.c
v.Gn(s.d,r)}},
c2e(){var w=this,v=x.bw,u=C.B(new C.a2(C.a(["n1","n2"],x.s),new A.eKc(w),v),v.k("H.E"))
w.m(new A.eKd(w,u))
if(u.length!==0){A.mu(180,220,0.25,"square")
w.oW("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{A.y4()
w.kp("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.geR(0),i=j.a,h=i.t(0,"tail"),g=i.t(0,"trap"),f=i.t(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=D.d.bc(w,new A.eKk())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.goC()
g=l.gkM()
f=l.w
e=l.x
t=l.y
s=f!==0?l.goC().b.h(0,l.w):k
h=A.WP(g,new A.eKl(l),t,f,s,k,k,e,k,l.gId(),l.gIe(),h,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=B.d8S[r]
g=i.t(0,q)?k:new A.eKm(l,q)
f=i.t(0,q)?D.dq:D.fl
t=new C.aV(14,14)
p=l.r===q
o=p?D.b0:D.b5
n=new C.az(o,p?3:1,D.r,-1)
o=C.a([],e)
if(i.t(0,q))o.push(B.e1d)
p=B.dgz.h(0,q)
p.toString
m=i.t(0,q)?D.c_:D.c
o.push(new C.x(p,k,new C.F(!0,m,k,k,k,k,13,D.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k))
s.push(new C.C(D.j6,C.aE(k,C.p(k,new C.co(D.aQ,D.e,D.j,D.m,k,D.p,k,0,o,k),D.f,k,k,new C.o(f,k,new C.bP(n,n,n,n),new C.bp(t,t,t,t),k,k,D.n),k,k,k,k,D.hH,k,k,k),D.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,D.a8),k))}i=C.c_(D.bD,s,D.bt,6,8)
g=A.y3("Start over",D.la,new A.eKn(l),D.ad)
f=u?"Run the water":"Build the drain first"
return new A.AS("Sink drain (P-trap)",D.ct,h,C.v(C.a([i,D.P,C.A(C.a([g,D.ab,A.y3(f,D.pH,u?l.gc2d():k,D.ct)],e),D.m,k,D.e,D.j,0,k,k)],e),D.m,k,D.e,D.Q,0,D.p),new A.eKo(d,w),j,k)}}
A.a3F.prototype={
T(){return new A.ayi()},
gda(d){return this.c}}
A.ayi.prototype={
geR(d){var w,v=this.d
if(v===$){w=this.a.c
v=this.d=w==null?A.fO9():w}return v},
gkM(){var w=this.e
return w===$?this.e=new A.Ay(-0.25,0.2,36,B.aQi,$.aw()):w},
goC(){var w=this.f
return w===$?this.f=A.aNd(this.geR(0)):w},
q(){var w=this.z
if(w!=null)w.a9(0)
this.a2()},
kp(d,e){var w=this,v=w.z
if(v!=null)v.a9(0)
w.m(new A.d4l(w,d,e))
w.z=C.cM(D.l3,new A.d4m(w))},
oW(d){return this.kp(d,!1)},
nT(){this.gkM().mc(36,0.2,B.aQi,-0.25)
this.m(new A.d4d(this))},
If(d){var w,v,u,t,s,r,q=this
if(d===0){q.nT()
return}w=x.br
v=C.B(new C.a2(B.a28,new A.d4g(d),w),w.k("H.E"))
if(v.length!==0&&q.r.length!==0){w=q.geR(0)
u=A.i2p(w,q.r,D.d.gL(v))
if(u!=null){A.mu(180,220,0.25,"square")
q.oW(u)}else{A.y4()
q.m(new A.d4h(q,d))
q.gkM().Gn(12,A.aff(d))
q.kp(A.fm9(w)?"All four ends are connected. Now open the valves.":D.d.gL(v).b+": connected.",!0)}return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.geR(0).e.iN(0,t)){q.m(new A.d4i(q,t))
q.kp("Hose taken off.",!0)
return}}s=q.goC().b.h(0,d)
if(s!=null){q.m(new A.d4j(q,d))
w=q.gkM()
r=s.c
w.Gn(s.d,r)}},
c2b(d){var w,v=this
v.m(new A.d4e(v))
w=v.geR(0)
if(!w.f){v.kp("Valves closed.",!0)
return}if(A.fm9(w)){A.y4()
v.kp("Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",!0)}else{A.mu(180,220,0.25,"square")
v.oW("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.geR(0),k=l.r||l.e.a!==0,j=l.e,i=j.h(0,61)==="hot"&&j.h(0,63)==="hot",h=j.h(0,62)==="cold"&&j.h(0,64)==="cold",g=C.a([k,i,h,l.f&&A.fm9(l)],x.u),f=D.d.bc(g,new A.d4q())
k=f<0?"All done":"Step "+(f+1)+"/4"
i=n.goC()
h=n.gkM()
w=n.w
v=n.x
u=n.y
t=w!==0?n.goC().b.h(0,n.w):m
s=x.p
i=A.WP(h,new A.d4r(n),u,w,t,m,m,v,m,n.gId(),n.gIe(),i,m,C.a([A.Q9("Hints",D.aJ,D.qP,l.r,new A.d4s(n)),D.P],s))
v=C.a([],s)
for(r=0;r<2;++r){h={}
w=B.d8m[r]
h.a=null
q=w.a
h.a=q
u=new C.aV(14,14)
t=n.r===q
p=t?D.b0:D.b5
o=new C.az(p,t?3:1,D.r,-1)
p=C.a([],s)
t=C.a3(j).k("bc<2>")
if(new C.a2(new C.bc(j,t),new A.d4t(h),t.k("a2<H.E>")).gM(0)===2)p.push(B.e1f)
p.push(new C.x(w.b,m,D.rp,m,m,m,m,m,m,m,m,m))
v.push(new C.C(D.j6,C.aE(m,C.p(m,new C.co(D.aQ,D.e,D.j,D.m,m,D.p,m,0,p,m),D.f,m,m,new C.o(w.c,m,new C.bP(o,o,o,o),new C.bp(u,u,u,u),m,m,D.n),m,m,m,m,D.hH,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.d4u(h,n),m,m,m,m,m,m,!1,D.a8),m))}j=C.c_(D.bD,v,D.bt,6,8)
h=A.y3("Start over",D.la,new A.d4v(n),D.ad)
l=l.f?"Close the valves":"Open the valves"
return new A.AS("Faucet supply lines",D.cr,i,C.v(C.a([j,D.P,C.A(C.a([h,D.ab,A.y3(l,D.pH,n.gc2a(n),D.cr)],s),D.m,m,D.e,D.j,0,m,m)],s),D.m,m,D.e,D.Q,0,D.p),new A.d4w(d,g),k,m)}}
A.aza.prototype={
T(){return new A.azb(A.fZb())}}
A.azb.prototype={
gkM(){var w,v=this.e
if(v===$){w=new A.Ay(-0.3,0.48,46,B.Ti,$.aw())
w.f=80
this.e=w
v=w}return v},
goC(){var w=this.f
return w===$?this.f=A.af2(this.d):w},
q(){var w=this.z
if(w!=null)w.a9(0)
this.a2()},
kp(d,e){var w=this,v=w.z
if(v!=null)v.a9(0)
w.m(new A.dbp(w,d,e))
w.z=C.cM(D.l3,new A.dbq(w))},
oW(d){return this.kp(d,!1)},
nT(){this.gkM().mc(46,0.48,B.Ti,-0.3)
this.m(new A.dbj(this))},
If(d){var w,v,u,t=this
if(d===0){t.nT()
return}if(d===72){w=t.d
w=w.d.t(0,72)&&w.a>=5}else w=!1
if(w){t.m(new A.dbl(t,d))
A.y4()
t.kp("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.gkM().Gn(22,B.fAU)
return}w=d===87
if(w||d===86){v=t.d
v=v.b&&!v.c&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new A.dbm(t,d))
A.y4()
t.kp("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}A.mu(180,220,0.25,"square")
t.oW(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.goC().b.h(0,d)
if(u!=null){t.m(new A.dbn(t,d))
w=t.gkM()
v=u.c
w.Gn(u.d,v)}},
c9Y(d){var w,v
A:{if("ptrap"===d){w=B.e73
break A}if("faucet"===d){w=B.bvd
break A}w=new A.GN(d,null,null)
break A}v=this.c
v.toString
C.a5(v,!1).ce(C.ej(new A.dbk(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=B.d3R[m.a],k=o.r,j=k===0?n:A.hSO(k)
k=m.d.t(0,72)
w=!m.b||m.c
v=C.a([!k,w],x.u)
w=m.a
k=o.goC()
u=o.gkM()
t=o.r
s=o.x
r=o.y
q=t!==0?o.goC().b.h(0,o.r):n
p=j==null?n:C.aE(n,C.p(n,B.f3V,D.f,n,n,new C.o(D.aJ,n,n,C.m(12),n,n,D.n),n,n,n,n,D.tj,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.dbt(o,j),n,n,n,n,n,n,!1,D.a8)
k=A.WP(u,new A.dbu(o),r,t,q,p,new A.dbv(o),s,n,o.gId(),o.gIe(),k,n,n)
s=l.a
p=x.p
q=C.A(C.a([C.D(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,B.eXy,n,n,n),1),A.Q9("Wrench",D.aW,D.qK,o.w==="wrench",new A.dbw(o))],p),D.m,n,D.e,D.j,0,n,n)
t=C.d(l.b,n,3,D.a2,n,n,n,B.eYD,n,n,n)
m=C.kR(D.by,6,s,6,0,new A.dbx(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.D(C.d(s,n,n,n,n,n,n,C.l(n,n,u?D.ey:D.f9,n,n,n,n,n,n,n,n,11.5,n,n,D.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return new A.AS("Build and fix a house",D.by,k,C.v(C.a([q,D.bz,t,m,C.A(C.a([s,C.D(C.d(r,n,n,n,n,n,n,C.l(n,n,u?D.ey:D.f9,n,n,n,n,n,n,n,n,11.5,n,n,D.I,n,n,!0,n,n,n,n,n,n,n,n),D.dK,n,n),1)],p),D.m,n,D.e,D.j,0,n,n)],p),D.m,n,D.e,D.Q,0,D.p),new A.dby(d,v),"Stage "+(w+1)+"/7",n)}}
A.jw.prototype={}
A.LY.prototype={}
A.a5K.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=x.p,k=C.a([C.A(C.a([C.aH(m,m,m,m,K.nO,m,m,m,new A.c4G(d),m,m,m,m,m,m),B.fds],l),D.m,m,D.e,D.j,0,m,m)],l)
for(w=0;w<5;++w){v=B.dap[w]
u=v.c
t=C.a([new C.C(D.agU,new C.x(v.b+"  "+v.a.toUpperCase(),m,new C.F(!0,u,m,m,m,m,12,D.u,m,1.1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],l)
for(s=v.d,r=s.length,q=0;q<r;++q){p=s[q]
o=new C.aV(14,14)
n=new C.az(u.j(0.35),1,D.r,-1)
t.push(C.p(m,C.v(C.a([new C.x(p.a,m,D.jC,m,m,m,m,m,m,m,m,m),D.d0,new C.x(p.b,m,E.SM,m,m,m,m,m,m,m,m,m)],l),D.F,m,D.e,D.j,0,D.p),D.f,m,m,new C.o(B.Kn,m,new C.bP(n,n,n,n),new C.bp(o,o,o,o),m,m,D.n),m,m,m,D.cG,D.bk,m,m,m))}D.d.v(k,t)}return C.cb(m,D.bX,C.bn(!0,C.cB(k,m,B.afZ,m,m,D.ah,!1),!0,!1,D.ag,!0,!0),m,!1,!1,m,m)}}
A.cft.prototype={}
A.Ek.prototype={}
A.na.prototype={}
A.VW.prototype={}
A.cfj.prototype={
bvg(d,e,f){var w,v=this
if(f!=null)w=D.d.ix(B.auo,new A.cfn(f))
else{w=new C.eT()
w.dI(v.a)
w=B.auo[w.aB(2)]}v.c!==$&&C.aO()
v.c=w
w=new C.eT()
w.dI(v.a+7)
w=w.hf()
v.d!==$&&C.aO()
v.d=w},
uN(d,e){var w=this.c
w===$&&C.c()
return D.d.ix(w.c,new A.cfo(e))},
Ok(d){++this.w
return new A.eC(!1,d,!1,"")},
c_L(d){var w=d.d
return new C.J(w,new A.cfk(this),C.T(w).k("J<1,n>")).aH(0," and ")},
beD(d,e){var w,v,u,t,s=this,r=s.uN(0,e),q=s.e
if(q.t(0,e))return s.Ok("The "+r.c.toLowerCase()+" is already there.")
if(d!==r.b)return s.Ok(s.b?"That does not go here.":"That does not go here. This spot is for the "+r.c.toLowerCase()+".")
for(w=r.d,v=w.length,u=0;u<v;++u)if(!q.t(0,w[u])){q=s.b?"Not yet: something has to go in first.":"Not yet. "+r.e+" Put in the "+s.c_L(r)+" first.";++s.w
return new A.eC(!1,q,!1,"")}if(r.f&&s.r)return s.Ok(s.b?"The water is still on!":"Stop! The water is still on. Cutting into a pipe with the water on floods the room. Turn the water off at the main valve first (pick the hand and tap the main valve).")
q.J(0,e)
s.y=!1
s.x.a8(0)
if(r.r>0)t=s.b?"":" It is only loose. Pick the wrench and tap it to tighten the joints."
else t=""
return new A.eC(!0,r.c+" fitted."+t,!1,"")},
bfT(d){var w,v,u,t,s=this,r=s.uN(0,d)
if(!s.e.t(0,d))return s.Ok(s.b?"Nothing to tighten yet.":"There is nothing to tighten yet: the "+r.c.toLowerCase()+" is not fitted.")
w=r.r
if(w===0)return s.Ok(s.b?"That does not need tightening.":"The "+r.c.toLowerCase()+" does not have joints to tighten. It just sits in place.")
v=s.f
u=v.h(0,d)
if(u==null)u=0
if(u>=w)return s.Ok("Already tight. More force would crack it.")
t=u+1
v.n(0,d,t)
s.x.a8(0)
s.y=!1
v=r.c
return new A.eC(!0,t>=w?v+": every joint is tight now.":v+": one joint tightened, one to go.",!1,"")},
bdA(d){var w=this.uN(0,d),v=this.f.h(0,d)
if(v==null)v=0
return w.r-v},
aGF(){var w,v,u,t,s,r,q=this
q.r=!q.r
w=q.x
w.a8(0)
if(!q.r)return B.aTk
v=q.c
v===$&&C.c()
u=v.c
t=C.T(u).k("a2<1>")
s=C.B(new C.a2(u,new A.cfp(q),t),t.k("H.E"))
v=v.c
u=C.T(v).k("a2<1>")
r=C.B(new C.a2(v,new A.cfq(q),u),u.k("H.E"))
q.y=!0
if(s.length!==0){w.v(0,new C.J(s,new A.cfr(),C.T(s).k("J<1,n>")));++q.w
return new A.eC(!1,"Water is spraying from an open pipe where the "+D.d.gL(s).c.toLowerCase()+" should be! Turn the water off and finish the job.",!0,"")}if(r.length!==0){w.v(0,new C.J(r,new A.cfs(),C.T(r).k("J<1,n>")));++q.w
return new A.eC(!1,"The "+D.d.gL(r).c.toLowerCase()+" is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.",!0,"")}if(!q.gaiF())return B.aTa
return B.aSY},
cCa(){var w,v,u,t,s,r,q,p=this
p.r=!0
p.aGF()
w=p.c
w===$&&C.c()
v=w.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
p.beD(s.b,s.a)}for(w=w.c,v=w.length,t=0;t<v;++t){s=w[t]
for(u=s.r,r=s.a,q=0;q<u;++q)p.bfT(r)}p.aGF()
p.w=0},
gaiF(){var w=this.c
w===$&&C.c()
return D.d.d9(w.c,new A.cfl(this))},
gcAw(){var w=this.c
w===$&&C.c()
return D.d.d9(w.c,new A.cfm(this))},
gBb(){var w=this
return w.gaiF()&&w.gcAw()&&w.r&&w.y&&w.x.a===0}}
A.UW.prototype={
T(){var w,v=new A.Ay(-0.25,0.4,175,B.aR_,$.aw())
v.f=200
w=new C.BA()
$.Cv()
w.iX(0)
return new A.aCH(v,w)}}
A.aCH.prototype={
gCh(d){var w=this.d
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.d=w}return w},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w==null){w=v.gCh(0)
v.a.toString
w=A.fO8(!1,w,null)}v.e=w
v.r=A.hcl(w,v.x,!w.b)},
q(){var w=this.at
if(w!=null)w.a9(0)
this.a2()},
acn(){var w=this.e
w===$&&C.c()
return this.r=A.hcl(w,this.x,!w.b)},
aWF(d,e){var w=this,v=w.at
if(v!=null)v.a9(0)
w.m(new A.ee8(w,d,e))
w.at=C.cM(D.jo,new A.ee9(w))},
aWE(){this.f.mc(175,0.4,B.aR_,-0.25)
this.m(new A.ee1(this))},
csr(d){var w,v,u=this.e
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
aw4(d){var w=this.e
w===$&&C.c();++w.w
return new A.eC(!1,d,!1,"")},
c2i(d){return this.aWD(d)},
crL(d){var w
A:{if("main"===d){w=9400
break A}w=this.e
w===$&&C.c()
w=w.c
w===$&&C.c()
w=9100+D.d.bc(w.c,new A.eea(d))
break A}this.aWD(w)},
b3C(){var w,v,u,t,s,r,q,p=this,o=p.x
if(o==="hand")return C.a([B.eoT],x.L)
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
q=r.uN(0,s)
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
aWD(d){var w,v,u,t,s,r=this
if(d===0)return
w=r.r
w===$&&C.c()
v=w.b.h(0,d)
if(r.x.length===0){r.m(new A.edU(r,d))
if(v!=null)r.aWF(v.a+": "+v.b,!0)
return}u=r.csr(d)
w=r.x
if(w==="hand")if(d===9400){w=r.e
w===$&&C.c()
t=w.aGF()}else{w=r.e
w===$&&C.c()
t=r.aw4(w.b?"Your hand is only for the main water valve.":"Your hand is for the main water valve. Parts are placed by picking them from the tray.")}else if(w==="wrench")if(u==null){w=r.e
w===$&&C.c()
t=r.aw4(w.b?"Nothing to tighten.":"There is nothing to tighten there.")}else{w=r.e
w===$&&C.c()
t=w.bfT(u)}else if(u==null){w=r.e
w===$&&C.c()
t=r.aw4(w.b?"Not there.":"That does not go there. Tap one of the glowing spots.")}else{s=r.e
s===$&&C.c()
t=s.beD(w,u)}w=t.a
if(w)A.y4()
else A.mu(180,220,0.25,"square")
r.m(new A.edV(r,d))
w=w&&!t.c
r.aWF(t.b,w)
w=r.e
w===$&&C.c()
if(w.gBb()&&!r.as){r.as=!0
$.aT.x1$.push(new A.edW(r))}},
c2f(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new A.ee0(this),v,w,!0,!0,x.H)},
aVD(){this.m(new A.ee6(this))
this.aWE()},
avb(d,e,f){var w,v=null,u=this.x===d,t=u?D.aJ.j(0.25):D.c.j(0.07),s=C.m(14),r=u?D.aJ:D.b5
r=C.I(r,D.r,u?2:1)
w=C.W(f,u?D.aJ:D.ad,v,v,v,19)
return new C.C(E.th,C.aE(v,C.p(v,C.A(C.a([w,D.bp,C.d(e,v,v,v,v,v,v,C.l(v,v,u?D.aJ:D.c,v,v,v,v,v,v,v,v,12.5,v,v,D.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),D.m,v,D.e,D.j,0,v,v),D.f,v,v,new C.o(t,v,r,s,v,v,D.n),v,v,v,v,D.h2,v,v,v),D.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.edY(this,u,d),v,v,v,v,v,v,!1,D.a8),v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
h===$&&C.c()
h=h.c
h===$&&C.c()
h=h.c
w=new C.a2(h,new A.eeb(j),C.T(h).k("a2<1>")).gM(0)
h=j.e.c
h===$&&C.c()
v=j.r
v===$&&C.c()
u=j.y
t=j.z
s=j.Q
r=u!==0?v.b.h(0,u):i
v=A.WP(j.f,new A.eec(j),s,u,r,i,new A.eed(),t,i,j.gc2g(),j.gc2h(),v,i,i)
t=x.p
r=C.a([],t)
if(j.x.length!==0&&j.b3C().length!==0){u=C.a([],t)
for(s=j.b3C(),q=s.length,p=0;p<s.length;s.length===q||(0,C.L)(s),++p){o={}
n=s[p]
o.a=null
o.a=n.a
m=new C.aV(12,12)
l=new C.az(D.b0,1,D.r,-1)
u.push(C.aE(i,C.p(i,new C.x("\ud83d\udccd "+n.b,i,D.o0,i,i,i,i,i,i,i,i,i),D.f,i,i,new C.o(D.fh.j(0.35),i,new C.bP(l,l,l,l),new C.bp(m,m,m,m),i,i,D.n),i,i,i,i,B.Xr,i,i,i),D.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.eee(o,j),i,i,i,i,i,i,!1,D.a8))}r.push(new C.C(D.eO,C.c_(D.bD,u,D.bt,6,6),i))}u=j.e
if(u.b)u="Practice mode: no hints. Build it in the right order."
else if(u.gaiF())u="Everything is fitted. Tighten every joint, then turn the main water on to test."
else{u=j.e.c
u===$&&C.c()
u="Job: "+u.d}r.push(new C.bI(D.a3,i,i,C.d(u,i,2,D.a2,i,i,i,B.aNE,i,i,i),i))
r.push(D.P)
t=C.a([j.avb("hand","Hand",B.akA),j.avb("wrench","Wrench",D.qK)],t)
for(p=0;p<11;++p){k=B.bTi[p]
u=B.dev.h(0,k)
u.toString
t.push(j.avb(k,u,Y.ajZ))}r.push(new C.a6(i,52,C.cB(t,i,i,i,i,D.aQ,!1),i))
return new A.AS("Plumbing job: "+h.b,D.aW,v,C.v(r,D.m,i,D.e,D.Q,0,D.p),new A.eef(j,d),""+w+"/"+h.c.length+" fitted",i)},
bXF(d){return C.bW(E.ny,null,new A.ee5(this),d,!0,!0,!0,D.lO,!1,!1,x.H)}}
A.yo.prototype={}
A.pF.prototype={}
A.WB.prototype={}
A.atF.prototype={}
A.aS_.prototype={}
A.eC.prototype={
gj6(){return this.a}}
A.b3k.prototype={
cfg(d,e){var w,v,u,t,s=this,r=null,q="outlet",p="switch",o=new C.eT()
o.dI(s.a)
w=d==null?o.aB(3):d
v=C.a([0,1,2],x.t)
D.d.fo(v,o)
u=3+o.aB(2)
switch(w){case 0:t=e==null?"Living room":e
s.c!==$&&C.aO()
s.c=t
t=C.a([new A.pF(v[0],q,r),new A.pF(v[1],q,r),new A.pF(5,"light",u),new A.pF(u,p,r)],x.B)
s.d!==$&&C.aO()
s.d=t
break
case 1:t=e==null?"Bedroom":e
s.c!==$&&C.aO()
s.c=t
t=C.a([new A.pF(v[0],q,r),new A.pF(v[1],q,r),new A.pF(6,"fan",u),new A.pF(u,p,r)],x.B)
s.d!==$&&C.aO()
s.d=t
break
default:t=e==null?"Kitchen":e
s.c!==$&&C.aO()
s.c=t
t=C.a([new A.pF(v[0],"gfci",r),new A.pF(v[1],"gfci",r),new A.pF(5,"light",u),new A.pF(u,p,r)],x.B)
s.d!==$&&C.aO()
s.d=t}},
galk(){var w,v=C.aW(x.S),u=this.d
u===$&&C.c()
w=0
for(;w<4;++w)v.J(0,u[w].a)
return v},
cNZ(d){var w,v,u=this.d
u===$&&C.c()
w=0
for(;w<4;++w){v=u[w]
if(v.a===d)return v}return null},
fK(d){++this.f
return new A.eC(!1,d,!1,"")},
aD4(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
g===$&&C.c()
w=h.x
v=0
for(;v<4;++v){u=g[v].a
t=A.kX(u)
if(t.e==="fan")s="fan"
else s=t.c?"ceiling":"wall"
w.n(0,u,s)}g=C.a([],x.t)
for(r=0;r<$.Gd().length;++r)g.push(r)
h.y.v(0,g)
h.z.v(0,h.galk())
for(g=h.Q,w=x.S,v=0;v<3;++v){q=B.nT[v]
u=C.aW(w)
s=C.aW(w)
p=new A.atF(u,s)
p.d=p.e=p.a=!0
for(o=h.aob(q),n=o.length,m=0;m<o.length;o.length===n||(0,C.L)(o),++m)for(l=o[m]*10,k=0;k<6;++k)s.J(0,l+k)
for(s=h.galk(),o=C.a3(s),n=new C.mS(s,s.r,o.k("mS<1>")),n.c=s.e,o=o.c,s=q+48;n.C();){l=n.d
if(l==null)l=o.a(l)
t=A.kX(l)
if(!t.c){j=t.d.a
j=j>=q&&j<=s}else j=!1
if(j)u.J(0,l)}g.n(0,q,p)}for(g=h.as,v=0;v<2;++v){i=g[v]
i.a=!0
i.b=3
i.d=i.c=!0}},
cCb(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.d
l===$&&C.c()
w=0
for(;w<4;++w){v=l[w]
m.bcC(v.a,v.b)}for(u=x.S,t=x.N,s=m.at,w=0;w<4;++w){r=l[w].a
q=s.h(0,r)
if(q==null)continue
p=q.a
A:{if("outlet"===p){o=C.E([25,"ground",23,"white",21,"black"],u,t)
break A}if("gfci"===p){o=C.E([25,"ground",24,"white",22,"black"],u,t)
break A}if("switch"===p){o=C.E([25,"ground",21,"blackLine",22,"blackLoad"],u,t)
break A}o=C.E([53,"ground",52,"white",51,"black"],u,t)
break A}for(o=new C.M1(o,o.r,o.e,C.a3(o).k("M1<1,2>"));o.C();){n=o.d
m.baZ(r,n.b,n.a)}m.beW(r)
m.b9P(r)}if(!m.ax)m.aGD()
for(w=0;w<4;++w){v=l[w]
u=v.b
if(u==="outlet"||u==="gfci"){u=v.a
m.beF(u,"lamp")
m.bga(u)}}for(l=D.d.gah(l),u=new C.fG(l,new A.ckh());u.C();){t=l.gU(0).a
m.aDf(t)
m.aDf(t)}},
aIZ(d){var w,v,u=A.kX(d).d.a,t=C.a([],x.t)
for(w=0;v=$.Gd(),w<v.length;++w){v=v[w]
if(v>u&&v<64)t.push(w)}return t},
cLT(d,e){var w,v,u=this,t=u.x
if(t.ag(0,d))return u.fK("There is already a box at "+A.kX(d).b+".")
w=A.kX(d)
v=w.c
if(!v&&e!=="wall")return u.fK("That is a ceiling box. On the wall you use a plain wall box (the blue one with ears).")
if(v&&e==="wall")return u.fK("A wall box cannot go in the ceiling. Use a round ceiling box.")
if(w.e==="fan"&&e!=="fan"){if(!u.b)return u.fK('A fan is heavy and it shakes. It needs a box that says "fan rated". A plain ceiling box can let the fan fall.')
t.n(0,d,e);++u.f
return B.aTy}t.n(0,d,e)
t=v?"ceiling joist":"side of the stud"
return new A.eC(!0,w.b+": box fixed to the "+t+".",!1,"")},
cGC(d){var w,v=this
if(d<0||d>=$.Gd().length)return B.aTs
w=v.y
if(w.t(0,d))return v.fK("That stud already has a hole.")
if(v.x.a===0)return v.fK("Mount the boxes first. Then you know where the cable has to go and which studs need a hole.")
w.J(0,d)
return B.aTc},
cP_(d){var w,v,u,t,s=this,r=A.kX(d)
if(!s.x.ag(0,d))return s.fK("There is no box at "+r.b+". Mount the box first, then pull the cable to it.")
w=s.z
if(w.t(0,d))return s.fK("The cable is already there.")
v=s.aIZ(d)
u=C.T(v).k("a2<1>")
t=C.B(new C.a2(v,new A.cko(s),u),u.k("H.E"))
if(t.length!==0){w=D.o.V($.Gd()[D.d.gL(t)])
v=t.length
u=v===1?"it":"the studs"
return s.fK("The cable is stuck: the stud at "+w+" inches has no hole. Drill "+u+" first ("+v+" left on the way).")}w.J(0,d)
return new A.eC(!0,"Cable pulled from the panel to "+r.b+", through the studs and along the ceiling.",!1,"")},
gaGs(){return this.galk().d9(0,new A.ckp(this))},
anS(d){var w,v,u,t
for(w=this.Q,w=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gah(0);w.C();){v=w.d
u=v.b
if(u.a){t=v.a
t=d>=t&&d<=t+48}else t=!1
if(t)return u}return null},
cJi(d){var w,v,u=this
if(!u.gaGs())return u.fK("Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.")
if(!D.d.t(B.a2a,d))return B.aT0
if(!D.d.t(B.nT,d))return u.fK("The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.")
w=u.Q
v=w.h(0,d)
if((v==null?null:v.a)===!0)return u.fK("There is already a sheet there.")
v=w.h(0,d)
if(v==null){v=x.S
v=new A.atF(C.aW(v),C.aW(v))}v.a=!0
w.n(0,d,v)
return B.aTb},
aob(d){var w,v,u,t=C.a([],x.t)
for(w=d+48,v=0;u=$.Gd(),v<u.length;++v){u=u[v]
if(u>=d&&u<=w)t.push(v)}return t},
cFy(d){var w,v,u=this,t=A.kX(d)
if(t.c)return u.fK("Ceiling fixtures do not need an opening in the wall.")
if(!u.x.ag(0,d))return u.fK("There is no box at "+t.b+".")
w=u.anS(t.d.a)
if(w==null)return u.fK("There is no sheet over this box yet. Hang the sheet first, then cut the opening.")
v=w.b
if(v.t(0,d))return u.fK("The opening is already cut.")
v.J(0,d)
return B.aTl},
aIf(d,e,f){var w,v,u,t,s,r=this
if(f)return r.fK("Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).")
w=x.bS
v=C.B(new C.a2(B.nT,new A.ckq(r,d),w),w.k("H.E"))
if(v.length===0)return r.fK("There is no sheet here yet.")
u=d*10+e
if(D.d.d9(v,new A.ckr(r,u)))return r.fK("There is already a screw there.")
for(w=v.length,t=r.Q,s=0;s<v.length;v.length===w||(0,C.L)(v),++s)t.h(0,v[s]).c.J(0,u)
return B.aTn},
bk6(d,e){return this.aIf(d,e,!1)},
blD(d){var w=this.Q.h(0,d)
if(w==null||!w.a)return!1
return D.d.d9(this.aob(d),new A.ckt(w))},
gaAT(){return D.d.d9(B.nT,new A.ckg(this))},
gaAS(){var w=this.galk()
return new C.a2(w,new A.cke(),C.a3(w).k("a2<cl.E>")).d9(0,new A.ckf(this))},
cQQ(d){var w,v=this
if(!v.gaAT())return v.fK("Hang all the sheets first.")
if(!D.d.d9(B.nT,v.ganT()))return v.fK("Finish screwing every sheet to the studs first. Tape goes on a solid wall.")
w=v.as[d]
if(w.a)return v.fK("This seam already has tape.")
w.c=w.a=!0
return B.aT4},
cLW(d){var w,v=this,u=v.as[d]
if(!u.a)return v.fK("Tape first. The mud goes over the tape.")
if(!u.c)return v.fK("The last coat is still wet. Let it dry before the next coat.")
w=u.b
if(w>=3)return v.fK("Three coats are enough. Now sand it.");++w
u.b=w
u.c=!1
return new A.eC(!0,"Coat "+w+" of joint compound spread. Let it dry.",!1,"")},
cKR(){var w,v=this.as
if(D.d.d9(v,new A.ckm()))return B.aTi
for(w=0;w<2;++w)v[w].c=!0
return B.aTw},
bjV(d){var w=this,v=w.as[d]
if(v.b<3)return w.fK("Put on all three coats of mud first. Sanding now would just rub off the tape.")
if(!v.c)return w.fK("The mud is still wet. Let it dry first.")
if(v.d)return w.fK("Already sanded.")
v.d=!0
return B.aT1},
cOd(d){var w=this,v=w.Q.h(0,d)
if(v==null||!v.a)return w.fK("There is no sheet there.")
if(!w.gaAS())return w.fK("Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.")
if(!D.d.d9(w.as,new A.ckn()))return w.fK("Sand the seams first. Paint shows every bump.")
if(v.e)return w.fK("This sheet is already painted.")
v.e=!0
return B.aSZ},
gyi(){var w=this
return w.gaAT()&&D.d.d9(B.nT,w.ganT())&&w.gaAS()&&D.d.d9(w.as,new A.cki())&&D.d.d9(B.nT,new A.ckj(w))},
Mz(){var w,v
for(w=this.at,w=new C.dt(w,w.r,w.e);w.C();){v=w.d.b
v.a=this.ax&&!this.ay}},
bWU(d,e){if(d.c)return e==="light"||e==="fan"?"":"A ceiling box holds a light or a fan, not an outlet or a switch."
return e==="outlet"||e==="gfci"||e==="switch"?"":"A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch."},
bcC(d,e){var w,v,u,t,s,r=this,q=A.kX(d)
if(!r.gyi())return r.fK("Finish the drywall first. Devices go in after the walls are painted.")
w=r.x
if(!w.ag(0,d)||!r.z.t(0,d))return r.fK("There is no box with cable at "+q.b+".")
v=r.at
if(v.ag(0,d))return r.fK("There is already a device there. Pull it out first if you want to move it.")
u=r.bWU(q,e)
if(u.length!==0)return r.fK(u)
t=e==="switch"
if(!(t&&q.e==="low"))s=!t&&!q.c&&q.e==="switch"
else s=!0
if(s){if(!r.b)return r.fK(t?"A switch goes about 48 inches from the floor, where a hand falls naturally. This box is down at outlet height.":"Outlets go low, about 16 inches from the floor. This box is up at switch height.");++r.f
r.cy.push("Wrong height at "+q.b+".")}s=e==="fan"
if(s&&w.h(0,d)!=="fan")if(!r.b)return r.fK("This box is not fan rated. A fan on it can fall. Take the box out and put in a fan-rated one.")
w=new A.Xs(C.V(x.S,x.N))
w.r=r.b
w.a=r.ax&&!r.ay
v.n(0,d,new A.aS_(e,w))
if(e==="light")w="Light fixture"
else if(s)w="Ceiling fan"
else if(e==="gfci")w="GFCI outlet"
else w=t?"Switch":"Outlet"
return new A.eC(!0,w+" is held up to "+q.b+". Turn the breaker OFF, then wire it.",!1,"")},
cQ0(d){var w=this,v=w.at,u=v.h(0,d)
if(u==null)return B.aT8
if(w.ax&&!w.ay&&!u.b.w){if(w.b)return w.a0M()
return w.a10()}v.W(0,d)
w.CW.W(0,d)
w.cx.W(0,d)
w.ch.W(0,d)
return B.aTq},
a10(){++this.r;++this.f
return B.aTo},
a0M(){var w,v,u=this;++u.r;--u.e
u.ax=!1
u.Mz()
w=u.e
if(w<=0){u.w=!0
return B.aT7}v=w===1?"life":"lives"
return new A.eC(!1,"ZAP! You touched a live wire and got a shock. The breaker is now off. "+w+" "+v+" left. Always turn the breaker OFF and test the wires first.",!0,"shock")},
baZ(d,e,f){var w,v,u,t=this,s=t.at.h(0,d)
if(s==null)return B.a8v
t.Mz()
w=A.Ac(s.a)
v=D.d.ix(w.f,new A.ckk(f))
u=A.hh3(w,s.b,e,v,!0)
if(u==null){if(!t.b&&!v.c.t(0,e)){++t.f
return new A.eC(!0,v.b+": fastened. Careful: "+C.t(w.r.$2(e,v))+" It will burn or trip the breaker when the power comes on.",!0,"")}return new A.eC(!0,v.b+": wire fastened.",!1,"")}if(D.a.a0(u,"SHOCK"))return t.a0M()
if(D.a.a0(u,"STOP"))return t.a10();++t.f
return new A.eC(!1,u,!1,"")},
cRk(d,e){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.U8
v.Mz()
w=u.b
if(w.a&&w.c===0){if(v.b)return v.a0M()
return v.a10()}w=w.b
w.bn(w,new A.cku(e))
return B.aTv},
beW(d){var w,v,u=this,t=u.at.h(0,d)
if(t==null)return B.a8v
w=A.Ac(t.a)
v=t.b
if(!A.bBO(w,v))return u.fK("Every wire must be fastened first.")
if(u.ax&&!u.ay){if(u.b)return u.a0M()
return u.a10()}v.c=1
return B.aTg},
cP0(d){var w,v=this,u=v.at.h(0,d)
if(u==null)return B.U8
if(v.ax&&!v.ay){if(v.b)return v.a0M()
return v.a10()}w=u.b
w.c=0
w.d=!1
return B.aTm},
b9P(d){var w=this.at.h(0,d)
if(w==null||w.b.c!==1)return this.fK("Push the device into the box first.")
w.b.c=2
return B.aTp},
aH3(d){var w=this.at
return A.afe(A.Ac(w.h(0,d).a),w.h(0,d).b)},
aGD(){var w=this
if(w.ay){w.ax=w.ay=!1
w.Mz()
return B.aTe}w.ax=!w.ax
w.Mz()
if(!w.ax)return B.aT6
return w.c2j()},
c2j(){var w,v,u,t,s,r,q,p,o,n=this,m=C.a([],x.s)
for(w=n.at,v=new C.cJ(w,C.a3(w).k("cJ<1,2>")).gah(0),u=n.cx,t=!1,s=!1;v.C();){r=v.d
q=r.b.b
if(q.c===0)continue
p=r.a
o=A.afe(A.Ac(w.h(0,p).a),w.h(0,p).b)
q.d=q.c>=2
if(o.d)t=!0
if(o.e){q.w=!0
u.J(0,p)
s=!0}if(o.a!=="ok")m.push(A.kX(p).b+": "+o.b)}if(t){n.ay=!0
n.Mz()
w=s?"BANG! Sparks and smoke. ":""
v=D.d.aH(m," ")
u=s?"burn":"trip"
return new A.eC(!1,w+"The breaker tripped. "+v+" Fix it, then flip the breaker OFF and ON again.",!0,u)}if(m.length!==0)return new A.eC(!0,"Power is on. "+D.d.aH(m," "),!0,"")
return B.aTj},
aDf(d){var w,v,u,t,s,r,q=this,p=q.at,o=p.h(0,d)
if(o==null||o.a!=="switch"||o.b.c<2)return B.aTu
w=q.ch
if(w.t(0,d))w.W(0,d)
else w.J(0,d)
v=q.d
v===$&&C.c()
u=C.T(v).k("a2<1>")
t=C.B(new C.a2(v,new A.ckl(d),u),u.k("H.E"))
if(t.length===0)return B.aTf
s=D.d.gL(t)
v=s.a
r=q.al8(v)
if(w.t(0,d)&&r){p=p.h(0,v)
if(p!=null)p.c=!0
return new A.eC(!0,(s.b==="fan"?"The fan spins":"The light turns on")+". The switch works.",!1,"")}if(w.t(0,d)){p=s.b
return new A.eC(!1,(p==="fan"?"The fan":"The light")+" did not come on. Check the breaker and the wires on the switch and on the "+p+".",!1,"")}return B.aTt},
a2T(d){var w,v=this.at.h(0,d)
if(v!=null){w=v.b
w=w.c<2||w.w}else w=!0
if(w)return!1
return this.aH3(d).c},
al8(d){var w=this,v=w.cNZ(d),u=v==null,t=u?null:v.c,s=!0
if(!u)if(t!=null)u=!(w.ax&&!w.ay)||!w.a2T(d)||!w.a2T(t)
else u=s
else u=s
if(u)return!1
return w.ch.t(0,t)},
beF(d,e){var w,v,u=this,t=u.at.h(0,d)
if(t!=null){w=t.a
w=w!=="outlet"&&w!=="gfci"||t.b.c<2}else w=!0
if(w)return u.fK("There is no finished outlet there to plug into.")
w=u.CW
if(w.ag(0,d))return u.fK("Something is already plugged in.")
w.n(0,d,e)
if(t.b.w)return B.aT9
if(u.ax&&!u.ay&&u.a2T(d)){t.c=!0
v=u.aH3(d)
w=v.a
if(w==="reversed"||w==="noGround")return new A.eC(!0,"It runs, but be careful: "+v.b,!0,"")
return new A.eC(!0,A.hAx(e)+" runs. The outlet works.",!1,"")}if(!(u.ax&&!u.ay))return B.aTd
return new A.eC(!1,"Nothing happens. "+u.aH3(d).b,!0,"")},
bga(d){if(this.CW.W(0,d)==null)return B.U8
return B.aT5},
gaCw(){var w,v,u,t,s,r=this.d
r===$&&C.c()
w=this.at
v=0
for(;v<4;++v){u=r[v]
t=u.a
s=w.h(0,t)
if(s==null||s.a!==u.b||s.b.c<2)return!1
if(A.afe(A.Ac(w.h(0,t).a),w.h(0,t).b).a!=="ok")return!1
t=u.b
if(t==="outlet"||t==="gfci"){if(!s.c)return!1}else if(t!=="switch"&&!s.c)return!1}return!0}}
A.kT.prototype={}
A.UZ.prototype={
T(){var w,v=new A.Ay(-0.12,0.4,205,B.a7y,$.aw())
v.f=300
w=new C.BA()
$.Cv()
w.iX(0)
return new A.aCO(v,w,C.V(x.S,x.i))}}
A.aCO.prototype={
gCh(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w==null){w=v.gCh(0)
w=A.fOy(null,null,v.a.f,w)}v.d=w
if(v.a.d!=null&&w.gyi())v.y=2
if(v.a.e){v.d.aD4()
v.y=2}v.r=A.Ci(v.d,new A.vO(v.z,v.Q,!1))
w=v.f
w.r=0
w.w=1.1},
q(){var w=this.cy
if(w!=null)w.a9(0)
this.a2()},
A3(d,e){var w=this,v=w.cy
if(v!=null)v.a9(0)
w.m(new A.eiv(w,d,e))
w.cy=C.cM(D.jo,new A.eiw(w))},
avf(d){return this.A3(d,!1)},
kq(d){var w,v,u,t,s,r=this,q=d.a
if(q)A.y4()
else A.mu(180,220,0.25,"square")
w=d.d
if(w==="shock"){C.fK()
r.m(new A.ehK(r))
C.bN(D.mT,new A.ehL(r),x.P)}if(w==="burn"||w==="trip"){w=r.d
w===$&&C.c()
w=w.cx
w=C.ea(w,w.r,C.a3(w).c)
v=r.x
u=r.w
t=w.$ti.c
while(w.C()){s=w.d
if(s==null)s=t.a(s)
v.n(0,s,u.gu0()/1000+3.5)}C.fK()
A.mu(150,300,0.5,"noise")}w=r.d
w===$&&C.c()
r.r=A.Ci(w,new A.vO(r.z,r.Q,!1))
q=q&&!d.c
r.A3(d.b,q)
if(r.d.w&&r.c!=null)$.aT.x1$.push(new A.ehM(r))
if(r.d.gaCw()&&!r.cx){r.cx=!0
$.aT.x1$.push(new A.ehN(r))}},
b1a(){var w=this.ch?3.141592653589793:-0.12
this.f.mc(205,0.4,B.a7y,w)},
aR8(){var w,v,u=this
u.ch=!1
w=u.f
w.anM(!1)
w.r=0
u.m(new A.ehV(u))
v=u.d
v===$&&C.c()
u.r=A.Ci(v,new A.vO(u.z,u.Q,!1))
w.mc(205,0.4,B.a7y,-0.12)},
bzt(){var w,v,u=this
u.ch=!0
w=u.f
w.anM(!0)
u.m(new A.ehO(u))
v=u.d
v===$&&C.c()
u.r=A.Ci(v,new A.vO(u.z,u.Q,!1))
w.mc(190,0.3,B.fuw,3.141592653589793)},
Yt(d,e){var w,v,u,t=this,s=A.kX(e),r=t.f
r.anM(!1)
r.r=0
t.m(new A.eic(t,e))
w=t.d
w===$&&C.c()
t.r=A.Ci(w,new A.vO(t.z,t.Q,!1))
v=A.a1F(s,B.ftS)
w=s.c
u=w?22:15
r.mc(u,w?-0.8:0.26,v,0.3)},
avc(){var w,v=this
v.m(new A.ehW(v))
w=v.d
w===$&&C.c()
v.r=A.Ci(w,new A.vO(v.z,v.Q,!1))
v.b1a()},
c2o(d){var w,v,u,t,s,r,q=this
if(d===0){if(q.Q<0)q.m(new A.eir(q))
return}w=q.Q
if(w>=0)v=!(d>=5000&&d<5700)
else v=!1
if(v)return
if(d>=5000&&d<5700){v=d-5000
u=D.o.an(v,100)
if(w!==u){if(q.z==="tester")q.azC(u)
else{q.m(new A.eis(q))
q.Yt(0,u)}return}q.aZW(u,D.o.F(v,100))
return}if(d>=1000&&d<1010)if(q.z==="drill"){w=q.d
w===$&&C.c()
q.kq(w.cGC(d-1000))
return}if(d>=2000&&d<2007){q.aZZ(d-2000)
return}if(d>=3000&&d<3007){q.aZX(d-3000)
return}if(d>=6000&&d<6005){if(q.z==="sheet"){w=q.d
w===$&&C.c()
q.kq(w.cJi(B.a2a[d-6000]))}return}if(d>=6100&&d<6103){t=B.nT[d-6100]
if(q.z==="paint"){w=q.d
w===$&&C.c()
q.kq(w.cOd(t))
return}}if(d>=6200&&d<6202){s=d-6200
switch(q.z){case"tape":w=q.d
w===$&&C.c()
q.kq(w.cQQ(s))
return
case"mud":w=q.d
w===$&&C.c()
q.kq(w.cLW(s))
return
case"sand":w=q.d
w===$&&C.c()
q.kq(w.bjV(s))
return}}if(d>=7000&&d<7100){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7000
q.kq(w.bk6(D.o.an(v,10),D.o.F(v,10)))}return}if(d>=7500&&d<7600){if(q.z==="screw"){w=q.d
w===$&&C.c()
v=d-7500
q.kq(w.aIf(D.o.an(v,10),D.o.F(v,10),!0))}return}if(d===8000){w=q.d
w===$&&C.c()
q.kq(w.aGD())
return}if(d>=8100&&d<8107){u=d-8100
w=q.d
w===$&&C.c()
if(w.CW.h(0,u)==="tv"&&q.z!=="unplug"){w=q.c
w.toString
F.fIb(w,0,"tv",!0,D.uQ,"Samsung Neo QLED 8K")
return}q.kq(q.d.bga(u))
return}if(q.z==="look"){w=q.r
w===$&&C.c()
r=w.b.h(0,d)
if(r!=null){q.m(new A.eit(q,d))
q.A3(r.a+": "+r.b,!0)}}},
aZZ(d){var w,v,u,t=this,s=t.d
s===$&&C.c()
if(s.at.ag(0,d)){s=t.z
s=s!=="tester"&&s!=="look"&&!D.d.t(B.GI,s)}else s=!1
if(s){t.m(new A.eip(t))
t.Yt(0,d)
return}s=t.z
switch(s){case"wall":case"ceiling":case"fanbox":w=t.d
t.kq(w.cLT(d,s==="fanbox"?"fan":s))
return
case"cable":t.kq(t.d.cP_(d))
return
case"knife":t.kq(t.d.cFy(d))
return
case"outlet":case"gfci":case"switch":case"light":case"fan":v=t.d.bcC(d,s)
t.kq(v)
if(v.a){t.d.at.h(0,d).b.f=!t.d.b
t.z=""
t.Yt(0,d)}return
case"tester":t.azC(d)
return}if(t.d.at.ag(0,d)){t.Yt(0,d)
return}s=t.r
s===$&&C.c()
u=s.b.h(0,2000+d)
if(u!=null){t.m(new A.eiq(t,d))
t.A3(u.a+": "+u.b,!0)}},
azC(d){var w,v=this.d
v===$&&C.c()
w=v.ax&&!v.ay&&v.x.ag(0,d)&&this.d.z.t(0,d)
v=w?"The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.":"The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)"
this.A3(v,!w)
A.mu(w?1400:500,120,0.25,"tri")},
aZX(d){var w,v=this,u=v.d
u===$&&C.c()
w=u.at.h(0,d)
if(w==null)return
if(D.d.t(B.GI,v.z)){v.kq(v.d.beF(d,v.z))
return}u=v.z
if(u==="tester"){v.azC(d)
return}if(u==="flip"){if(w.a==="switch"&&w.b.c>=2)v.kq(v.d.aDf(d))
else v.avf("Only a finished switch can be flipped.")
return}v.m(new A.eio(v))
v.Yt(0,d)},
aZW(d,e){var w,v,u,t,s,r,q,p=this,o=p.d
o===$&&C.c()
w=o.at.h(0,d)
if(w==null)return
o=w.a
v=A.Ac(o).f
u=C.T(v).k("a2<1>")
t=C.B(new C.a2(v,new A.eik(e),u),u.k("H.E"))
s=A.hh7(o,e)
if(s!=null){o=w.b
o=o.b.iN(0,s)&&o.c===0}else o=!1
if(o){p.kq(p.d.cRk(d,s))
return}if(t.length!==0&&w.b.c===0){o=p.at
if(o.length===0){p.avf("Pick a wire below first, then tap "+D.d.gL(t).b+".")
p.m(new A.eil(p,d,e))
return}r=p.d.baZ(d,o,e)
p.kq(r)
if(r.a)p.m(new A.eim(p))
return}o=p.r
o===$&&C.c()
q=o.b.h(0,5000+d*100+e)
if(q!=null){p.m(new A.ein(p,d,e))
p.A3(q.a+": "+q.b,!0)}},
c2p(){var w,v,u,t,s,r,q=this,p=C.a([],x.K)
for(w=0;w<7;++w){v=B.tK[w]
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
crM(){var w,v,u,t,s,r,q,p=null,o=this.c2p()
if(o.length===0)return D.bH
w=C.a([],x.p)
for(v=o.length,u=0;u<o.length;o.length===v||(0,C.L)(o),++u){t={}
s=o[u]
t.a=null
t.a=s.a
r=new C.aV(12,12)
q=new C.az(D.b0,1,D.r,-1)
w.push(C.aE(p,C.p(p,new C.x("\ud83d\udccd "+s.b,p,D.o0,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.fh.j(0.35),p,new C.bP(q,q,q,q),new C.bp(r,r,r,r),p,p,D.n),p,p,p,p,B.Xr,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.eix(t,this),p,p,p,p,p,p,!1,D.a8))}return new C.C(D.i7,C.c_(D.bD,w,D.bt,6,6),p)},
bLo(){var w=null,v=this.c
v.toString
C.c9(w,w,!1,w,new A.ehU(this),v,w,!0,!0,x.H)},
c2k(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new A.ehR(this),v,w,!0,!0,x.H)},
avd(d){this.m(new A.ehX(this,d))
this.aR8()},
aWG(){return this.avd(!1)},
c2m(){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
m===$&&C.c()
if(m.w)return"The job is over."
switch(n.y){case 0:m=m.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
v=C.B(new C.a2(m,new A.ehY(n),w),w.k("H.E"))
if(v.length!==0){u=D.d.gL(v)
t=A.kX(u.a)
m=u.b
if(m==="gfci")m="a GFCI"
if(t.c)w=t.e==="fan"?"fan box":"ceiling box"
else w="wall box"
return"Mount a box at "+t.b+" ("+m+" goes here): pick a "+w+", then tap the glowing spot."}m=n.d.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
s=C.B(new C.a2(m,new A.ehZ(n),w),w.k("H.E"))
if(s.length!==0){t=D.d.gL(s).a
m=n.d.aIZ(t)
r=new C.a2(m,new A.ei_(n),C.T(m).k("a2<1>")).gM(0)
return r>0?"The cable comes from the panel on the right. Pick the drill and tap each stud on the way to "+A.kX(t).b+" ("+r+" left).":"Pick the cable roll and tap "+A.kX(t).b+"."}return"Rough-in done! Open 2 Drywall."
case 1:if(!m.gaGs())return"Finish the rough-in first (tab 1). Drywall hides the wires."
if(!n.d.gaAT())return"Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall."
if(!n.d.gaAS())return"Pick the drywall saw and tap each box to cut its opening."
if(!D.d.d9(B.nT,n.d.ganT()))return"Pick the screw gun and put a screw in every glowing spot on the studs."
if(D.d.b8(n.d.as,new A.ei2()))return"Pick the tape and tap each seam between two sheets."
if(D.d.b8(n.d.as,new A.ei3()))return D.d.b8(n.d.as,new A.ei4())?'The mud is wet. Press "Let it dry", then the next coat.':"Pick the mud and tap each seam. It needs three coats, with drying in between."
if(D.d.b8(n.d.as,new A.ei5()))return D.d.b8(n.d.as,new A.ei6())?'Press "Let it dry", then sand.':"Pick the sander and tap each seam."
if(!n.d.gyi())return"Pick the roller and paint each sheet."
return"Drywall done! Open 3 Devices."
default:if(!m.gyi())return"Finish the drywall first (tab 2)."
m=n.d.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
q=C.B(new C.a2(m,new A.ei7(n),w),w.k("H.E"))
if(q.length!==0){u=D.d.gL(q)
m=u.b
if(m==="gfci")m="GFCI"
return"Pick the "+m+" and tap "+A.kX(u.a).b+". ("+C.t(new A.eia().$1(new C.J(q,new A.ei8(),C.T(q).k("J<1,G>"))))+" still need a device.)"}m=n.d.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
p=C.B(new C.a2(m,new A.ei9(n),w),w.k("H.E"))
if(p.length!==0)return"Tap "+A.kX(D.d.gL(p).a).b+" to work on it: breaker OFF, wires, push in, cover on."
m=n.d
if(!m.ax)return"Turn the breaker ON (tap the panel or the breaker button) and test."
m=m.d
m===$&&C.c()
w=C.T(m).k("a2<1>")
o=C.B(new C.a2(m,new A.ei0(n),w),w.k("H.E"))
if(o.length!==0)return"Pick the TV or the lamp and plug it into "+A.kX(D.d.gL(o).a).b+" to test it."
m=n.d.d
m===$&&C.c()
return"Flip the wall switch to test the "+(D.d.b8(m,new A.ei1())?"fan":"light")+"."}},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=B.d_5[a1.y],a4=a1.Q
if(a4>=0){w=a1.d
w===$&&C.c()
v=w.at.h(0,a4)}else v=a2
a4=v==null
u=a4?a2:A.Ac(v.a)
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
for(l=0;l<3;++l)m.push(new C.C(D.Li,new C.x(l<a1.d.e?"\u2764\ufe0f":"\ud83d\udda4",a2,D.zc,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2))
m.push(D.bp)
k=a1.d
if(k.ay)k=D.jK
else{k=k.ax
k=k?D.ex:D.ec}k=k.j(0.95)
j=C.m(16)
i=a1.d
h=i.ay
if(h)g=D.cw
else{g=i.ax
g=g?D.cr:D.bc}g=C.I(g,D.r,1.4)
if(h)i="TRIPPED: tap to reset"
else{i=i.ax
i=i?"Breaker ON":"Breaker OFF"}m.push(C.aE(a2,C.p(a2,C.d(i,a2,a2,a2,a2,a2,a2,B.eW0,a2,a2,a2),D.f,a2,a2,new C.o(k,a2,g,j,a2,a2,D.n),a2,a2,a2,a2,D.qF,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eiF(a1),a2,a2,a2,a2,a2,a2,!1,D.a8))
m=C.a([C.A(m,D.m,a2,D.e,D.Q,0,a2,a2)],n)
k=a1.ch
j=k?"In front":"Behind the wall"
i=k?G.ajw:G.ajv
k=C.a([A.Q9(j,D.by,i,k,k?a1.gbMS():a1.gbzs()),D.ao],n)
if(!a4){j=v.b
D.d.v(k,C.a([A.Q9("Labels",D.aW,M.MU,j.f,new A.eiG(a1,v)),D.ao,A.Q9("Hints",D.aJ,D.qP,j.e,new A.eiH(a1,v)),D.P],n))}s=A.WP(a1.f,new A.eiP(a1),p,r,o,a2,a2,q,a2,new A.eiQ(a1),a1.gc2n(),s,m,k)
r=C.a([],n)
if(a4){a4=C.a([],n)
for(l=0;l<3;++l){q=l<2?6:0
p=a1.y===l?D.aJ.j(0.2):D.dq
o=new C.aV(12,12)
f=new C.az(a1.y===l?D.aJ:D.bF,1,D.r,-1)
if(l===0)m=a1.d.gaGs()
else{m=a1.d
m=l===1?m.gyi():m.gaCw()}m=m?"\u2705 ":""
k=B.d7s[l]
j=a1.y===l?D.aJ:D.ad
a4.push(new C.bE(1,D.bi,C.aE(a2,C.p(a2,new C.cr(D.A,a2,a2,new C.x(m+k,a2,new C.F(!0,j,a2,a2,a2,a2,12,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2),a2),D.f,a2,a2,new C.o(p,a2,new C.bP(f,f,f,f),new C.bp(o,o,o,o),a2,a2,D.n),a2,a2,a2,new C.Q(0,0,q,0),A0.Ll,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eiR(a1,l),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))}a4=C.a([C.A(a4,D.m,a2,D.e,D.j,0,a2,a2),D.ao],n)
if(!a1.d.b){q=D.aW.j(0.1)
p=C.m(10)
o=C.I(D.aW.j(0.4),D.r,1)
a4.push(C.p(a2,C.d("\ud83d\udc49 "+a1.c2m(),a2,2,D.a2,a2,a2,a2,B.eXt,a2,a2,a2),D.f,a2,a2,new C.o(q,a2,o,p,a2,a2,D.n),a2,a2,a2,a2,D.cj,a2,a2,1/0))}else a4.push(B.fe0)
a4.push(D.ao)
q=C.a([],n)
if(a1.y<2&&!a1.d.gyi())q.push(new C.C(E.th,C.aE(a2,C.p(a2,B.b2a,D.f,a2,a2,new C.o(D.dS,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.h2,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eiS(a1),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))
for(p=a3.length,e=0;e<p;++e){d=a3[e]
o=d.a
m=a1.z===o?D.aJ.j(0.25):D.c.j(0.07)
k=new C.aV(14,14)
o=a1.z===o
j=o?D.aJ:D.b5
f=new C.az(j,o?2:1,D.r,-1)
j=o?D.aJ:D.ad
j=C.W(d.c,j,a2,a2,a2,19)
o=o?D.aJ:D.c
q.push(new C.C(E.th,C.aE(a2,C.p(a2,new C.co(D.aQ,D.e,D.j,D.m,a2,D.p,a2,0,C.a([j,D.bp,new C.x(d.b,a2,new C.F(!0,o,a2,a2,a2,a2,12.5,D.I,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2)],n),a2),D.f,a2,a2,new C.o(m,a2,new C.bP(f,f,f,f),new C.bp(k,k,k,k),a2,a2,D.n),a2,a2,a2,a2,D.h2,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eiT(a1,d),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))}if(a1.y===1)q.push(new C.C(E.th,C.aE(a2,C.p(a2,B.b22,D.f,a2,a2,new C.o(D.ec,a2,a2,C.m(14),a2,a2,D.n),a2,a2,a2,a2,D.h2,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eiU(a1),a2,a2,a2,a2,a2,a2,!1,D.a8),a2))
a4.push(new C.a6(a2,52,C.cB(q,a2,a2,a2,a2,D.aQ,!1),a2))
if(a1.z.length!==0)a4.push(a1.crM())
D.d.v(r,a4)}else{a4=C.a([],n)
q=v.b
if(q.c===0)for(p=D.d.gah(u.e),o=new C.fG(p,new A.eiV(v)),m=q.b;o.C();){k=p.gU(0)
j=k.c
i=new C.aV(14,14)
h=a1.at
g=k.a
h=h===g
a0=h?D.b0:D.b5
f=new C.az(a0,h?3:1,D.r,-1)
a0=C.a([],n)
if(m.iN(0,g))a0.push(new C.C(D.Lj,C.W(D.ee,k.d,a2,a2,a2,17),a2))
h=k.b
g=k.d
a0.push(new C.x(h,a2,new C.F(!0,g,a2,a2,a2,a2,12.5,D.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2))
a4.push(C.aE(a2,C.p(a2,new C.co(D.aQ,D.e,D.Q,D.m,a2,D.p,a2,0,a0,a2),D.f,a2,a2,new C.o(j,a2,new C.bP(f,f,f,f),new C.bp(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,D.xb,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eiW(a1,v,k),a2,a2,a2,a2,a2,a2,!1,D.a8))}a4=C.a([C.c_(D.bD,a4,D.bt,6,8)],n)
if(q.c===0&&a1.at.length!==0){p=C.a([],n)
for(o=D.d.gah(u.f),m=new C.fG(o,new A.eiI(v));m.C();){k=o.gU(0)
j=D.fh.j(0.35)
i=new C.aV(12,12)
f=new C.az(D.b0,1,D.r,-1)
p.push(C.aE(a2,C.p(a2,new C.x("\u279c "+k.b,a2,D.o0,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.f,a2,a2,new C.o(j,a2,new C.bP(f,f,f,f),new C.bp(i,i,i,i),a2,a2,D.n),a2,a2,a2,a2,B.Xr,a2,a2,a2),D.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eiJ(a1,k),a2,a2,a2,a2,a2,a2,!1,D.a8))}a4.push(new C.C(D.ke,C.c_(D.bD,p,D.bt,6,6),a2))}a4.push(D.P)
p=C.a([A.y3("Back to the room",D.pv,a1.gc2l(),D.ad),D.ab],n)
if(q.c===0){u.toString
o=A.bBO(u,q)?"Push it into the box":"Fasten every wire"
p.push(A.y3(o,B.akG,A.bBO(u,q)?new A.eiK(a1):a2,D.aJ))}if(q.c===1)D.d.v(p,C.a([A.y3("Pull it out",D.qS,new A.eiL(a1),D.ad),D.ab,A.y3("Cover on",L.vc,new A.eiM(a1),D.aJ)],n))
if(q.c>=2){q=q.w
o=q?"Take out the burnt one":"Pull it out again"
q=q?D.cr:D.ad
p.push(A.y3(o,B.bzv,new A.eiN(a1),q))}a4.push(C.A(p,D.m,a2,D.e,D.j,0,a2,a2))
D.d.v(r,a4)}a4=C.a([new A.AS(t+" job",D.aJ,s,C.v(r,D.m,a2,D.e,D.Q,0,D.p),new A.eiO(a1,a5),"Phase "+(w+1)+"/3",a2)],n)
if(a1.CW)a4.push(C.bY(0,C.e_(C.p(a2,a2,D.f,B.ae0,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),!0,a2),0,0,0))
return new C.an(D.W,a2,D.aa,D.q,a4,a2)},
clB(d){var w=this.d
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
break A}this.A3(w,!0)},
cb_(d){return C.bW(E.ny,null,new A.eij(this),d,!0,!0,!0,D.lO,!1,!1,x.H)}}
A.vO.prototype={}
A.qQ.prototype={
a4(){return"FaultKind."+this.b}}
A.tZ.prototype={}
A.Lp.prototype={}
A.cny.prototype={
bvt(d,e,f){var w,v,u,t,s,r,q,p=this,o=new C.eT()
o.dI(p.a)
w=C.B(B.cYI,x.F)
D.d.fo(w,o)
v=C.aW(x.S)
u=C.a([],x.c)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.L)(w),++s){r=w[s]
q=B.vA.h(0,r).e
if(v.t(0,q))continue
v.J(0,q)
u.push(new A.Lp(r,o.aB(3)))
if(u.length>=d)break}p.c!==$&&C.aO()
p.c=u
p.avg()},
pr(d,e){var w=this.c
w===$&&C.c()
return D.d.b8(w,new A.cnD(e))},
avg(){var w,v,u,t,s=this,r=s.d,q=r.d
q.a8(0)
if(s.pr(0,B.YN))q.J(0,72)
if(s.pr(0,B.YO))q.J(0,75)
q=s.pr(0,B.LZ)
r.b=q
r.c=!q
r.w=s.pr(0,B.M_)
r.x=s.pr(0,B.YS)
r.y=s.pr(0,B.YT)
r.z=s.pr(0,B.YR)
r.Q=s.pr(0,B.YU)
r.as=s.pr(0,B.YV)
r.at=s.pr(0,B.YQ)
q=r.f
q.a8(0)
r=r.r
r.a8(0)
w=s.c
w===$&&C.c()
w=D.d.gah(w)
v=new C.fG(w,new A.cnz())
while(v.C()){u=w.gU(0)
t=u.c
u=u.b
if(t)r.J(0,u)
else q.J(0,u)}},
gcAu(){var w=this.c
w===$&&C.c()
return D.d.d9(w,new A.cnB())},
gcHF(){var w=this.c
w===$&&C.c()
return new C.a2(w,new A.cnC(),C.T(w).k("a2<1>")).gM(0)},
cHi(d){var w,v,u,t,s,r,q,p=this.c
p===$&&C.c()
w=p.length
v=d===86
u=d===92
t=0
for(;t<p.length;p.length===w||(0,C.L)(p),++t){s=p[t]
r=s.a
q=!0
if(B.vA.h(0,r).e!==d)if(!(r===B.LZ&&v))r=r===B.M_&&u
else r=q
else r=q
if(r)return s}return null},
aWH(d){++this.f
return new A.eC(!1,d,!1,"")},
c2q(){var w,v,u,t,s=this;++s.r;--s.e
for(w=s.d,v=w.d,w=w.e,u=0;u<4;++u){t=B.asZ[u]
if(!v.t(0,t))w.J(0,t)}w=s.e
if(w<=0){s.w=!0
return B.aT3}v=w===1?"life":"lives"
return new A.eC(!1,"ZAP! You touched a live wire and got a shock. All the breakers were knocked off. "+w+" "+v+" left. Turn the breaker OFF first.",!0,"shock")},
cRA(d,e){var w,v,u,t,s=this
if(s.w)return B.aT_
if(D.d.t(B.asZ,e))return s.bzX(d,e)
w=s.cHi(e)
if(d==="inspect"){if(w==null||w.c)return B.aT2
return new A.eC(!0,"You look and test: "+B.vA.h(0,w.a).b,!1,"")}if(w==null||w.c)return new A.eC(!1,s.b?"Nothing needs fixing there.":"There is nothing wrong with this, so the "+C.t(B.Qg.h(0,d))+' is not needed. Use "Look and test" on things to find the problem.',!1,"")
v=B.vA.h(0,w.a)
if(d!==v.c){++s.f
return new A.eC(!1,s.b?"That is not the right tool for this problem.":"The "+C.t(B.Qg.h(0,d))+" does not fix this. "+v.b,!1,"")}u=v.f
if(u!==0){t=s.d
u=!t.d.t(0,u)&&!t.e.t(0,u)}else u=!1
if(u){if(s.b)return s.c2q()
return s.aWH("STOP! "+v.r+" The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.")}w.c=!0
s.avg()
return new A.eC(!0,v.d,!1,"")},
bzX(d,e){var w,v,u,t,s=this
if(d==="inspect"){w=s.d
if(w.d.t(0,e))w="This breaker has tripped: it sits in the middle (orange)."
else w=w.e.t(0,e)?"This breaker is switched OFF.":"This breaker is ON."
return new A.eC(!0,w,!1,"")}if(d!=="hand")return s.aWH(s.b?"Use your hand on a breaker.":"A breaker is switched with your hand, not with a "+C.t(B.Qg.h(0,d))+".")
w=s.d
v=w.d
if(v.t(0,e)){w=s.c
w===$&&C.c()
u=C.T(w).k("a2<1>")
t=C.B(new C.a2(w,new A.cnA(e),u),u.k("H.E"))
if(t.length!==0){D.d.gL(t).c=!0
s.avg()
return new A.eC(!0,B.vA.h(0,D.d.gL(t).a).d,!1,"")}v.W(0,e)
return B.aTx}w=w.e
if(w.t(0,e)){w.W(0,e)
return B.aTr}w.J(0,e)
return B.aTh}}
A.apL.prototype={
T(){var w,v=new A.Ay(-0.3,0.48,46,B.Ti,$.aw())
v.f=80
w=new C.BA()
$.Cv()
w.iX(0)
return new A.aCS(v,w)}}
A.aCS.prototype={
gK(){var w=this.d
w===$&&C.c()
return w},
gCh(d){var w=this.e
if(w===$){this.a.toString
w=D.o.F(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v=this
v.a1()
w=v.gCh(0)
w=A.h4I(v.a.d,w)
v.d=w
v.r=A.af2(w.d)},
q(){var w=this.ax
if(w!=null)w.a9(0)
this.a2()},
c2v(d,e){var w=this,v=w.ax
if(v!=null)v.a9(0)
w.m(new A.eki(w,d,e))
w.ax=C.cM(D.jo,new A.ekj(w))},
aWI(){this.f.mc(46,0.48,B.Ti,-0.3)
this.m(new A.ek7(this))},
c2u(d){var w,v,u=this
if(d===0)return
w=u.d
w===$&&C.c()
v=w.cRA(u.x,d)
w=v.a
if(w)A.y4()
else A.mu(180,220,0.25,"square")
if(v.d==="shock"){C.fK()
u.m(new A.ekc(u))
C.bN(D.mT,new A.ekd(u),x.P)}u.m(new A.eke(u,d))
w=w&&!v.c
u.c2v(v.b,w)
w=u.d
if(w.w)$.aT.x1$.push(new A.ekf(u))
else if(w.gcAu()&&!u.at){u.at=!0
$.aT.x1$.push(new A.ekg(u))}},
cb6(){var w=null,v=this.c
v.toString
C.c9(w,w,!1,w,new A.eka(this),v,w,!0,!0,x.H)},
c2r(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new A.ek6(this),v,w,!0,!0,x.H)},
auD(){this.m(new A.ek8(this))
this.aWI()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&C.c()
g=g.gcHF()
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
for(o=0;o<3;++o)p.push(new C.C(D.Li,new C.x(o<i.d.e?"\u2764\ufe0f":"\ud83d\udda4",h,D.zc,h,h,h,h,h,h,h,h,h),h))
v=A.WP(i.f,new A.ekq(i),s,u,r,h,new A.ekr(),t,h,i.gc2s(),i.gc2t(),v,C.a([C.A(p,D.m,h,D.e,D.Q,0,h,h)],q),h)
u=i.d.c
u===$&&C.c()
t=C.T(u)
t=new C.cQ(new C.a2(u,new A.eks(),t.k("a2<1>")),new A.ekt(),t.k("cQ<1,n>")).aH(0,"  \xb7  ")
u=C.d("Customer: "+(t.length===0?"All fixed!":t),h,2,D.a2,h,h,h,B.aNE,h,h,h)
t=C.a([],q)
for(n=0;n<10;++n){m=B.dbi[n]
s=i.x===m?D.aJ.j(0.25):D.c.j(0.07)
r=new C.aV(14,14)
p=i.x===m
l=p?D.aJ:D.b5
k=new C.az(l,p?2:1,D.r,-1)
l=B.dh_.h(0,m)
p=C.W(l,i.x===m?D.aJ:D.ad,h,h,h,19)
l=B.Qg.h(0,m)
l.toString
j=i.x===m?D.aJ:D.c
t.push(new C.C(E.th,C.aE(h,C.p(h,new C.co(D.aQ,D.e,D.j,D.m,h,D.p,h,0,C.a([p,D.bp,new C.x(l,h,new C.F(!0,j,h,h,h,h,12.5,D.I,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q),h),D.f,h,h,new C.o(s,h,new C.bP(k,k,k,k),new C.bp(r,r,r,r),h,h,D.n),h,h,h,h,D.h2,h,h,h),D.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.eku(i,m),h,h,h,h,h,h,!1,D.a8),h))}g=C.a([new A.AS("Service call",D.aW,v,C.v(C.a([new C.bI(D.a3,h,h,u,h),D.P,new C.a6(h,52,C.cB(t,h,h,h,h,D.aQ,!1),h)],q),D.m,h,D.e,D.Q,0,D.p),new A.ekv(i,d),""+g+"/"+w+" fixed",h)],q)
if(i.as)g.push(C.bY(0,C.e_(C.p(h,h,D.f,B.ae0,h,h,h,h,h,h,h,h,h,h),!0,h),0,0,0))
return new C.an(D.W,h,D.aa,D.q,g,h)},
cvf(d){return C.bW(E.ny,null,new A.eko(this),d,!0,!0,!0,D.lO,!1,!1,x.H)},
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
$4$color(d,e,f,g){return this.gK().$4$color(d,e,f,g)},
$5$shine$yaw(d,e,f,g,h){return this.gK().$5$shine$yaw(d,e,f,g,h)},
$6$caps$sides(d,e,f,g,h,i){return this.gK().$6$caps$sides(d,e,f,g,h,i)},
$5$shine$sides(d,e,f,g,h){return this.gK().$5$shine$sides(d,e,f,g,h)},
$5$lat$lon(d,e,f,g,h){return this.gK().$5$lat$lon(d,e,f,g,h)},
$6$r1$sides(d,e,f,g,h,i){return this.gK().$6$r1$sides(d,e,f,g,h,i)},
$3$r(d,e,f){return this.gK().$3$r(d,e,f)},
$6$ends$shine$split(d,e,f,g,h,i){return this.gK().$6$ends$shine$split(d,e,f,g,h,i)},
$4$round(d,e,f,g){return this.gK().$4$round(d,e,f,g)},
$5$col$round(d,e,f,g,h){return this.gK().$5$col$round(d,e,f,g,h)},
$4$col(d,e,f,g){return this.gK().$4$col(d,e,f,g)},
$1$pixelRatio(d){return this.gK().$1$pixelRatio(d)},
$7$caps$r1$sides(d,e,f,g,h,i,j){return this.gK().$7$caps$r1$sides(d,e,f,g,h,i,j)},
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
A.b1s.prototype={}
A.Hm.prototype={}
A.ckd.prototype={
c2x(d){return-this.a.giD(0)/2+d*4},
a3s(d,e){var w,v,u,t=this.a
if(d<-t.giD(0)/2+6||d>t.giD(0)/2-6||e<6||e>t.gmW(0)-6)return!1
for(t=this.b,w=t.length,v=0;v<w;++v){u=t[v]
if(d>u.a-9&&d<u.b+9&&e>u.c-9&&e<u.d+9)return!1}return!0},
aWJ(d,e,f){var w,v,u=e.a,t=f.a-u,s=e.b,r=f.b-s,q=Math.max(1,D.k.dw(Math.sqrt(Math.pow(t,2)+Math.pow(r,2))/2))
for(w=0;w<=q;++w){v=w/q
if(!this.a3s(u+t*v,s+r*v))return!1}return!0},
aVu(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a0.a,f=h.a,e=D.k.V((g+f.giD(0)/2)/4),d=h.c
d===$&&C.c()
w=D.o.D(e,0,d-1)
e=a0.b
v=D.k.V(e/4)
u=h.d
u===$&&C.c()
t=D.o.D(v,0,u-1)
for(s=0;s<16;++s){for(r=-s,q=r,p=null,o=1/0;q<=s;++q)for(n=w+q,v=Math.abs(q),m=r;m<=s;++m){if(Math.max(v,Math.abs(m))!==s)continue
l=t+m
if(n<0||l<0||n>=d||l>=u)continue
k=n*4
j=l*4
if(!h.a3s(-f.giD(0)/2+k,j))continue
i=Math.pow(-f.giD(0)/2+k-g,2)+Math.pow(j-e,2)
if(i<o){p=new C.z(n,l)
o=i}}if(p!=null)return p}return null},
bfM(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=1e9,b7=b5.aVu(b9),b8=b5.aVu(c0)
if(b7==null||b8==null)return C.a([b9,c0],x.f)
w=b8.a
v=b5.c2x(w)
u=b8.b
t=new C.z(v,u*4)
if(b5.aWJ(0,b9,t))return C.a([b9,t],x.f)
v=b7.a
s=b5.d
s===$&&C.c()
r=b7.b
q=x.S
p=C.eu([v*s+r],q)
o=C.V(q,q)
n=x.i
m=C.E([v*s+r,0],q,n)
l=C.E([v*s+r,b5.bOQ(v,r,b8)],q,n)
k=w*s+u
v=b5.a
r=p.$ti
q=r.k("mS<1>")
r=r.c
i=0
for(;;){if(p.a!==0){h=i+1
n=i<6000
i=h}else n=!1
if(!n){j=!1
break}g=p.e
if(g==null)C.ba(C.bd("No elements"))
f=g.a
for(n=new C.mS(p,p.r,q),n.c=g;n.C();){e=n.d
d=e==null?r.a(e):e
e=l.h(0,d)
if(e==null)e=b6
a0=l.h(0,f)
if(e<(a0==null?b6:a0))f=d}if(f===k){j=!0
break}p.W(0,f)
a1=D.o.e3(f,s)
a2=D.o.F(f,s)
for(n=a2*4,e=a1*4,a3=-1;a3<=1;++a3)for(a0=a3===0,a4=!a0,a5=a1+a3,a6=a5*4,a7=a5-w,a8=-1;a8<=1;++a8){if(a0&&a8===0)continue
a9=a2+a8
b0=!0
if(a5>=0)if(a9>=0){b0=b5.c
b0===$&&C.c()
b0=a5>=b0||a9>=s||!b5.a3s(-v.giD(0)/2+a6,a9*4)}if(b0)continue
b0=!1
if(a4)if(a8!==0)b0=!b5.a3s(-v.giD(0)/2+a6,n)||!b5.a3s(-v.giD(0)/2+e,a9*4)
if(b0)continue
b1=a5*s+a9
b0=m.h(0,f)
b0.toString
b2=b0+(a4&&a8!==0?1.4142:1)
b0=m.h(0,b1)
if(b2<(b0==null?b6:b0)){o.n(0,b1,f)
m.n(0,b1,b2)
l.n(0,b1,b2+Math.sqrt(Math.pow(a7,2)+Math.pow(a9-u,2)))
p.J(0,b1)}}}if(!j)return C.a([b9,t],x.f)
b3=C.a([k],x.t)
while(o.ag(0,D.d.gal(b3))){w=o.h(0,D.d.gal(b3))
w.toString
b3.push(w)}w=x.f
u=C.a([b9],w)
for(r=x.cb,q=new C.dw(b3,r),q=new C.bV(q,q.gM(0),r.k("bV<ai.E>")),r=r.k("ai.E");q.C();){n=q.d
if(n==null)n=r.a(n)
e=D.o.e3(n,s)
u.push(new C.z(-v.giD(0)/2+e*4,D.o.F(n,s)*4))}b4=C.a([D.d.gL(u)],w)
for(a5=0;a9=u.length-1,a5<a9;a5=a9){w=a5+1
for(;;){if(!(a9>w&&!b5.aWJ(0,u[a5],u[a9])))break;--a9}b4.push(u[a9])}return b4},
bOQ(d,e,f){return Math.sqrt(Math.pow(d-f.a,2)+Math.pow(e-f.b,2))}}
A.Jc.prototype={}
A.boN.prototype={
bvI(d,e,f,g,h,i,j,k,l,m,n,o){var w,v,u,t,s=this.b
if(s!=null)for(w=this.as,v=1;v<s.length;++v){u=v-1
t=Math.sqrt(Math.pow(s[v].a-s[u].a,2)+Math.pow(s[v].b-s[u].b,2))
w.push(t)
this.at+=t}}}
A.bOU.prototype={
asy(d){var w=d.giD(0),v=d.gmW(0)
switch(d.c){case"living":return C.a([B.fG9,B.fGa],x.a)
case"kitchen":return C.a([new A.Jc(new C.z(-w/2+40,42),3.141592653589793,2.8,"Getting a drink from the fridge",!0,!1,!1,""),new A.Jc(B.e8C,0,2.4,"Having the drink",!0,!1,!1,"")],x.a)
case"bathroom":return B.d8o
case"bedroom":return C.a([new A.Jc(new C.z(24,v-16),3.141592653589793,3.4,"Switching the ad on the TV",!1,!0,!0,"ad")],x.a)
default:return B.d0a}},
atQ(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a.d
d===$&&C.c()
w=d[a0]
v=new A.ckd(w,A.i04(w))
v.c=D.k.dw(w.giD(0)/4)+1
v.d=D.k.dw(w.gmW(0)/4)+1
u=A.h8I(w,a1)
t=u.a
s=u.c
d=e.c
r=d.length
q=a3.length===0?"Walking in":a3
d.push(A.boO(a0,"",!1,q,-1,null,!1,!1,0.5,t.a,u.b,t.b))
for(q=e.asy(w),p=q.length,o=t,n=0;n<q.length;q.length===p||(0,C.L)(q),++n){m=q[n]
l=v.bfM(o,m.a)
k=m.e
if(k)j=C.dr(m.d,"Having",0)
else j=!1
d.push(A.boO(a0,"",j,"Walking",-1,l,!1,!1,0,0,0,0))
o=D.d.gal(l)
d.push(A.boO(a0,m.w,k,m.d,-1,null,m.r,m.f,m.c,o.a,m.b,o.b))}if(a2!=null){i=A.h8I(w,a2)
h=i.c
l=v.bfM(o,i.a)
g=e.asy(w).length!==0&&D.d.gal(e.asy(w)).e
d.push(A.boO(a0,"",g,"Walking to the next room",-1,l,!1,!1,0,0,0,0))
o=D.d.gal(l)
d.push(A.boO(a0,"",g,"Opening the door",h,null,!1,!1,1.8,o.a,e.bIX(w,h),o.b))}for(f=r;f<d.length;++f)d[f].ay=s},
aUh(d,e,f){return this.atQ(d,e,f,"")},
bIX(d,e){var w,v=d.w[e].a
A:{if("left"===v){w=-1.5707963267948966
break A}if("right"===v){w=1.5707963267948966
break A}w=3.141592653589793
break A}return w},
c2w(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.atQ(10,11,9,"Coming in through the front door")
j.aUh(9,10,5)
for(w=9,v=0;v<8;++v,w=u){u=B.cJM[v]
j.atQ(5,w,u,"Walking down the hall")
j.aUh(u,5,v===7?null:5)}t=j.b
s=Math.min(1,t/120)
for(r=j.c,q=r.length,p=0,o=0,n=0;n<q;++n){m=r[n]
if(m.b==null)p+=m.f*=s
else o+=m.at}l=o/Math.max(4,t-p)
for(t=l<=0,k=0,n=0;n<q;++n){m=r[n]
if(m.b!=null)m.f=t?0.1:Math.max(0.05,m.at/l)
m.ax=k
k+=m.f}j.d!==$&&C.aO()
j.d=k},
b81(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g={},f=this.d
f===$&&C.c()
w=D.k.D(d,0,f-0.001)
f=this.c
g.a=D.d.gal(f)
for(v=f.length,u=0;u<v;++u){t=f[u]
s=t.ax
if(w>=s&&w<s+t.f){g.a=t
break}}f=g.a
v=f.f
r=v<=0?0:D.k.D((w-f.ax)/v,0,1)
f=g.a
if(f.b==null){q=r>0.5
v=f.a
s=f.y&&q
p=q&&f.z.length!==0?f.z+":"+v:""
o=f.Q
n=o>=0?r:0
return new A.b1s(v,f.c,f.d,f.e,!1,f.w,f.x,s,f.r,p,o,n,f.ay,0)}v=new A.bOV(g)
m=r*f.at
l=v.$1(m)
k=v.$1(Math.min(g.a.at,m+7))
j=v.$1(Math.max(0,m-7))
i=k.a-j.a
h=k.b-j.b
if(Math.abs(i)<0.000001&&Math.abs(h)<0.000001){f=g.a.b
f.toString
f=D.d.gal(f)
v=g.a.b
v.toString
i=f.a-D.d.gL(v).a
v=g.a.b
v.toString
v=D.d.gal(v)
f=g.a.b
f.toString
h=v.b-D.d.gL(f).b}f=g.a
v=l.a
s=l.b
p=Math.atan2(i,h)
o=g.a
return new A.b1s(f.a,v,s,p,!0,o.w,!1,!1,o.r,"",-1,0,o.ay,m/12)}}
var z=a.updateTypes(["~()","~(l4)","R(na)","R(pF)","K(K)","~(G)","R(WB)","ak<qm>(O)","R(Lp)","R(a3S)","n(n,md)","R(md)","R(zI)","ay<~>()","R(oE)","R(Ek)","n(na)","R(K)","R(u7)","R(yo)","K(G)","GN(Y)","n(zI)","UZ(Y)","UW(Y)","R(a3o)","K(G,G)","a5K(Y)","~(G{keepTour:R})","~(~(l4),K,K)","oE(O)","~(G,K,K,n,w)","~(K,K,G{alongX:R})","~(ak<K>,w)","~(ak<K>)","~(ak<K>{col:w})","~(K,K,O,O,w)","n(Lp)","~(G,ak<K>,w,O,n)","~(G,n,K,K,K,R)","R(VW)","~(G,ak<K>)","R(vu)","ak<K>(ak<K>)","~(n,ak<K>{r:O})","~(n,K,K)","~(na,K,n)","~(n,K,K,G)","K(n)","~(K,K,K,K)","R(G)","G(J9,J9)","u7()","G(pF)","~(G,K,K{col:w,round:R})","da()","~(G,K,w{h:O,w:O})","O(oE)"])
A.bUG.prototype={
$1(d){var w=this.a
w=w===0?d:A.bBp(d,w)
return w.ae(0,this.b)},
$S:z+4}
A.bUH.prototype={
$1(d){var w=this.a
return w===0?d:A.bBp(d,w)},
$S:z+4}
A.bUF.prototype={
$4(b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
for(w=b4.b,v=b7.a,u=b7.b,t=b7.c,s=b6.a,r=b6.b,q=b6.c,p=b8.a,o=b8.b,n=b8.c,m=1/w,l=v*m,k=u*m,j=t*m,i=p*m,h=o*m,m=n*m,g=b4.a,f=g.a,e=b4.c,d=x.o,a0=b4.d,a1=b4.e,a2=b4.f,a3=0;a3<w;++a3)for(a4=a3/w,a5=s+v*a4,a6=r+u*a4,a4=q+t*a4,a7=0;a7<w;++a7){a8=a7/w
a9=a5+p*a8
b0=a6+o*a8
a8=a4+n*a8
b1=a9+l
b2=b0+k
b3=a8+j
f.push(new A.qm(C.a([e.$1(new A.K(a9,b0,a8)),e.$1(new A.K(b1,b2,b3)),e.$1(new A.K(b1+i,b2+h,b3+m)),e.$1(new A.K(a9+i,b0+h,a8+m))],d),a0.$1(b5),a1,g.b,a2,g.d,!1,g.c,g.e))}},
$S:z+49}
A.bUI.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aK(0,Math.cos(w)).ae(0,this.c.aK(0,Math.sin(w)))},
$S:z+20}
A.bUE.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new A.K(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+26}
A.bUJ.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aK(0,Math.cos(w)).ae(0,this.c.aK(0,Math.sin(w)))},
$S:z+20}
A.fIU.prototype={
$1(d){var w=d.b,v=this.a,u=d.c,t=this.b
return new A.K(d.a,w*v-u*t,w*t+u*v)},
$S:z+4}
A.fIS.prototype={
$1(d){var w=this.a
return w===0?d:A.bBp(d,w)},
$S:z+4}
A.fIT.prototype={
$1(d){var w=this,v=w.b===0?d:w.c.$1(d)
return J.fJO(w.a.$1(v),w.d)},
$S:z+4}
A.fIR.prototype={
$1(d){var w=this.b===0?d:this.c.$1(d)
return this.a.$1(w)},
$S:z+4}
A.fIL.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:1783}
A.cl7.prototype={
$1(d){var w=this,v=d.a,u=w.a,t=d.c,s=w.b,r=-v*s+t*u,q=d.b,p=w.c,o=w.d
return new A.K(v*u+t*s,q*p-r*o,-(q*o+r*p))},
$S:z+4}
A.cl8.prototype={
$1(d){var w=this.a.c,v=this.b.$1(d.aC(0,w.d))
return new A.K(v.a,v.b,v.c+w.c)},
$S:z+4}
A.cl4.prototype={
$1(d){return d.c<1},
$S:z+17}
A.cl5.prototype={
$1(d){return A.hId(d,this.b,this.c,this.a.gaGy(0))},
$S:1784}
A.cl6.prototype={
$2(d,e){return D.k.aL(e.d,d.d)},
$S:z+51}
A.eQz.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.aGw(D.k.D((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:8}
A.eQy.prototype={
$1(d){if(x.C.b(d))this.a.a.d.an8(1+d.grU().b*0.0012)},
$S:251}
A.eQv.prototype={
$1(d){var w=this.a
return w.w=w.a.d.c},
$S:261}
A.eQw.prototype={
$1(d){var w,v,u,t=this.a,s=t.a
if(d.w>=2){s=s.d
s.an8(t.w/d.d/s.c)}else{t=s.d
s=d.a
t.as=t.Q=null
w=t.a+=-s.a*0.009
if(!t.x){v=t.r
u=t.w
t.a=D.k.D(w,v-u,v+u)}t.b=D.k.D(t.b+s.b*0.009,-1.25,1.35)
t.aZ()}},
$S:212}
A.eQx.prototype={
$1(d){var w=this.a
w=w.a.f.$1(w.e.cOu(d.b))
return w},
$S:50}
A.fmS.prototype={
$2(d,e){var w
A:{if("black"===d){w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break A}if("white"===d){w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break A}w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break A}return w},
$S:z+10}
A.fmT.prototype={
$2(d,e){return d==="ground"?y.j:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+10}
A.fmU.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else A:{if("black"===d){w="The black (hot) wire goes on the BRASS LINE screw."
break A}if("white"===d){w="The white (neutral) wire goes on the SILVER LINE screw."
break A}w=y.j
break A}return w},
$S:z+10}
A.fmV.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fixture GREEN ground wire only."
break A}return w},
$S:z+10}
A.fmW.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fan GREEN ground wire only."
break A}return w},
$S:z+10}
A.flN.prototype={
$1(d){return d.a===this.a},
$S:z+25}
A.fJ8.prototype={
$1(d){return d.a},
$S:z+22}
A.flT.prototype={
$1(d){return D.d.ix(this.a.f,new A.flU(d)).f},
$S:76}
A.flU.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.flR.prototype={
$1(d){return D.d.ix(this.a.e,new A.flS(d)).e},
$S:13}
A.flS.prototype={
$1(d){return d.a===this.a},
$S:z+12}
A.flP.prototype={
$1(d){return d.e==="hot"},
$S:z+12}
A.flQ.prototype={
$1(d){return d.e==="neutral"},
$S:z+12}
A.fjU.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.b=d
w=j.b
v=w.b
u=C.a3(v).k("cJ<1,2>")
t=u.k("a2<H.E>")
s=C.B(new C.a2(new C.cJ(v,u),new A.fjV(g),t),t.k("H.E"))
r=g==="ground"
q=r?B.wU:h
p=r?0.6:0.3
if(w.c>0){o=e.ae(0,B.fzu)
i.jN(A.ags(C.a([e,e.ae(0,B.fy3),o],x.o),4),0.085,q,!1,p,8)
return}if(s.length!==0){n=A.bzw(j.c,D.d.gL(s).a,w)
w=A.zC(e,n,0.5)
v=n.a>0
m=w.ae(0,new A.K(v?0.5:-0.5,0.2,0.9))
w=e.ae(0,B.fBD)
if(j.d)v=0
else v=v?0.06:-0.06
l=A.ags(C.a([e,w,m,n.ae(0,new A.K(v,0,0.08)),n],x.o),5)
k=D.d.dn(l,0,D.k.bw(l.length*0.8))
i.jN(k,0.085,q,!1,p,8)
if(!r)i.jN(D.d.fH(l,k.length-1),0.061200000000000004,B.wU,!1,0.6,8)}else{l=A.ags(C.a([e,e.ae(0,B.fw5),A.zC(e,f,0.6),f],x.o),5)
k=r?l:D.d.dn(l,0,D.k.bw(l.length*0.86))
i.jN(k,0.085,q,!1,p,8)
if(!r)i.jN(D.d.fH(l,k.length-1),0.061200000000000004,B.wU,!1,0.6,8)}},
$S:z+31}
A.fjV.prototype={
$1(d){return d.b===this.a},
$S:1785}
A.f67.prototype={
$2(d,e){var w,v=this.a
v.b=d
w=A.G5(e,0.9,6)
if(this.b)v.jN(w,0.2,B.W1,!1,0.35,10)
this.c.push(D.d.gal(w))},
$S:z+41}
A.f7r.prototype={
$6$taped(d,e,f,g,h,i){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t.bS(new A.K(v,u,w),B.fCz,h,0.7)
t.e6(new A.K(v,u,w),new A.K(v+e*0.22,u,w),0.17,g,0.9,12)
t.cH(new A.K(v+e*0.23,u,w),B.fAW,B.DO)
if(i)t.bS(new A.K(v+e*0.05,u,w),B.fAN,D.cp,0.2)},
$5(d,e,f,g,h){return this.$6$taped(d,e,f,g,h,!1)},
$S:1786}
A.fjJ.prototype={
$1(d){return d.a===this.a},
$S:z+18}
A.fjK.prototype={
$0(){return B.ai0},
$S:z+52}
A.bOd.prototype={
$1(d){return d},
$S:141}
A.bOO.prototype={
$1(d){return d.a==="Jobs"},
$S:z+42}
A.bOP.prototype={
$1(d){return new A.oE("back",d,5)},
$S:z+30}
A.bOT.prototype={
$1(d){return d.glp()},
$S:z+9}
A.bOS.prototype={
$1(d){var w=d.c
return(w==="bathroom"||w==="kitchen")&&d.got()},
$S:z+9}
A.bOR.prototype={
$1(d){var w=d.c
return w==="bathroom"||w==="kitchen"},
$S:z+9}
A.bOQ.prototype={
$1(d){return d.glp()&&d.got()},
$S:z+9}
A.e0z.prototype={
$1(d){return!(d.glp()&&d.got())},
$S:z+9}
A.e0x.prototype={
$1(d){var w,v=this.a.a.f
A:{if("wiring"===v){w=!d.glp()
break A}if("plumbing"===v){w=!d.got()
break A}w=!(d.glp()&&d.got())
break A}return w},
$S:z+9}
A.e0y.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.d
w===$&&C.c()
if(w.a.length!==0)v.lS(v.bXm())
else{w=v.a.f
if(w.length!==0){A:{if("wiring"===w){w="This room needs wiring: press the Wiring button, or tap the red outlet or the light."
break A}if("plumbing"===w){w="This room needs plumbing: press the Plumbing button, or tap the toilet or the sink."
break A}w="Walk through the house and fix what the signs say is wrong."
break A}v.lS(w)}}},
$S:8}
A.e02.prototype={
$0(){var w=this.a
w.at=this.b
w.ax=this.c},
$S:0}
A.e03.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.e01(w))},
$S:0}
A.e01.prototype={
$0(){return this.a.at=null},
$S:0}
A.e04.prototype={
$0(){var w=this.a
w.r=this.b
w.z=0
w.Q=-1
w.as=0
w.ko()},
$S:0}
A.e_C.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.z=0
w.Q=-1
w.as=0
w.at=null
w.ko()},
$S:0}
A.e09.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.db=!u.db
v.ko()},
$S:0}
A.e_J.prototype={
$0(){var w=this.a,v=this.b
w.z=v-100
w.as=v
w.ko()},
$S:0}
A.e_K.prototype={
$0(){var w=this.a,v=this.b
w.Q=v-300
w.as=v},
$S:0}
A.e_L.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&C.c()
w=t.d
w===$&&C.c()
v=this.b
if(!w[t.e].at.W(0,v)){t=u.d
w=t.d
w===$&&C.c()
w[t.e].at.J(0,v)}u.ko()},
$S:0}
A.e_M.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].at.J(0,this.b)
v.ko()},
$S:0}
A.e_N.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new A.e_I(w,this.b))
w.acl(this.c)},
$S:11}
A.e_I.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
return w[v.e].at.W(0,this.b)},
$S:0}
A.e_O.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].fx=!0
v.ko()},
$S:0}
A.e_T.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=C.a([],m)
for(w=this.a,v=this.b,u=0;u<8;++u){t=B.a0J[u]
s=D.c.j(0.08)
r=new C.aV(12,12)
q=w.d
q===$&&C.c()
p=q.d
p===$&&C.c()
o=new C.az(p[q.e].cy.h(0,v)===t.a?D.aJ:D.b5,1,D.r,-1)
l.push(C.aE(n,C.p(n,new C.x(t.c+" "+t.b,n,D.SZ,n,n,n,n,n,n,n,n,n),D.f,n,n,new C.o(s,n,new C.bP(o,o,o,o),new C.bp(r,r,r,r),n,n,D.n),n,n,n,n,D.eh,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e_R(w,d,v,t),n,n,n,n,n,n,!1,D.a8))}s=w.d
s===$&&C.c()
r=s.d
r===$&&C.c()
if(r[s.e].cy.h(0,v)!=null)l.push(C.aE(n,C.p(n,B.fjs,D.f,n,n,new C.o(D.ex,n,n,C.m(12),n,n,D.n),n,n,n,n,D.eh,n,n,n),D.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e_S(w,d,v),n,n,n,n,n,n,!1,D.a8))
return C.bn(!0,new C.C(D.bU,C.v(C.a([B.ffP,D.S,C.c_(D.bD,l,D.bt,8,8)],m),D.F,n,D.e,D.Q,0,D.p),n),!0,!1,D.ag,!0,!0)},
$S:29}
A.e_R.prototype={
$0(){var w,v,u,t=this
C.a5(t.b,!1).N(null)
w=t.a
v=t.d
w.m(new A.e_Q(w,t.c,v))
u=v.b
w.lS(v.d>0?u+" is on and playing NGMY ads. Tap it to watch full screen.":u+" is plugged in and running.")
A.mu(820,70,0.25,"tri")},
$S:0}
A.e_Q.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].cy.n(0,this.b,this.c.a)
v.ko()},
$S:0}
A.e_S.prototype={
$0(){C.a5(this.b,!1).N(null)
var w=this.a
w.m(new A.e_P(w,this.c))
w.lS("Unplugged.")},
$S:0}
A.e_P.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].cy.W(0,this.b)
v.ko()},
$S:0}
A.e0s.prototype={
$1(d){return new C.e2(new A.e0q(this.a),null)},
$S:20}
A.e0q.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=new A.e0r(n,e),l=n.d
l===$&&C.c()
w=l.d
w===$&&C.c()
l=C.d("TV in "+w[l.e].b,o,o,o,o,o,o,D.du,o,o,o)
w=x.p
v=C.a([],w)
for(u=D.d.gah(B.a0J),t=new C.fG(u,new A.e0k());t.C();){s=u.gU(0)
r=s.b
q=n.d
p=q.d
p===$&&C.c()
q=p[q.e].fr===s.a?D.aJ:D.fh
v.push(m.$3$color(r,new A.e0l(n,s),q))}v=C.c_(D.bD,v,D.bt,8,8)
u=C.a([],w)
t=n.d
s=t.d
s===$&&C.c()
t=s[t.e]
if(t.fr!=null){t=t.fx?"\u23fb Turn this TV off":"\u23fb Turn this TV on"
u.push(m.$2(t,new A.e0m(n)))}t=n.d
s=t.d
s===$&&C.c()
if(s[t.e].fr!=null&&t.a.length===0)u.push(m.$3$color("\ud83d\uddd1 Take it down",new A.e0n(n),D.ex))
if(n.d.a.length===0)u.push(m.$3$color("\ud83d\udcfa A TV in every room, all on",new A.e0o(n),D.cZ))
if(n.d.a.length===0)u.push(m.$3$color("\u23fb All TVs off",new A.e0p(n),D.bo))
return C.bn(!0,new C.C(D.bU,C.v(C.a([l,D.S,v,D.S,C.c_(D.bD,u,D.bt,8,8)],w),D.F,o,D.e,D.Q,0,D.p),o),!0,!1,D.ag,!0,!0)},
$S:89}
A.e0r.prototype={
$3$color(d,e,f){var w=null,v=f.j(0.4),u=C.m(12),t=C.I(f,D.r,1)
return C.aE(w,C.p(w,C.d(d,w,w,w,w,w,w,H.za,w,w,w),D.f,w,w,new C.o(v,w,t,u,w,w,D.n),w,w,w,w,T.EL,w,w,w),D.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e0j(this.a,e,this.b),w,w,w,w,w,w,!1,D.a8)},
$2(d,e){return this.$3$color(d,e,D.fh)},
$S:1787}
A.e0j.prototype={
$0(){this.b.$0()
this.c.$1(new A.e0i())
var w=this.a
w.m(w.gOH())},
$S:0}
A.e0i.prototype={
$0(){},
$S:0}
A.e0k.prototype={
$1(d){return d.d>0},
$S:z+18}
A.e0l.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
v.fr=this.b.a
v.fx=!0},
$S:0}
A.e0m.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
return v.fx=!v.fx},
$S:0}
A.e0n.prototype={
$0(){var w,v=this.a.d
v===$&&C.c()
w=v.d
w===$&&C.c()
v=w[v.e]
v.fr=null
v.fx=!1},
$S:0}
A.e0o.prototype={
$0(){var w,v,u,t=this.a.d
t===$&&C.c()
t=t.gwg()
w=t.length
v=0
for(;v<w;++v){u=t[v]
if(u.fr==null)u.fr="bangtv"
u.fx=!0}},
$S:0}
A.e0p.prototype={
$0(){var w,v,u=this.a.d
u===$&&C.c()
u=u.gwg()
w=u.length
v=0
for(;v<w;++v)u[v].fx=!1},
$S:0}
A.e0f.prototype={
$1(d){return new C.e2(new A.e0e(this.a),null)},
$S:20}
A.e0e.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=x.p,m=C.a([],n)
for(w=this.a,v=0;v<5;++v){u=B.d9E[v]
t=w.cy===u?D.aJ.j(0.25):D.c.j(0.07)
s=new C.aV(12,12)
r=w.cy===u
q=r?D.aJ:D.b5
p=new C.az(q,r?2:1,D.r,-1)
if(u<60)q=""+u+" seconds"
else q=u===60?"1 minute":""+(u/60|0)+" minutes"
r=r?D.aJ:D.c
m.push(C.aE(o,C.p(o,new C.x(q,o,new C.F(!0,r,o,o,o,o,13,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),D.f,o,o,new C.o(t,o,new C.bP(p,p,p,p),new C.bp(s,s,s,s),o,o,D.n),o,o,o,o,D.iN,o,o,o),D.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.e0c(w,e,u),o,o,o,o,o,o,!1,D.a8))}return C.bn(!0,new C.C(D.bU,C.v(C.a([B.flt,D.at,B.fpT,D.ac,C.c_(D.bD,m,D.bt,8,8),D.az,C.dp(A4.akY,B.f6T,new A.e0d(w,d),o)],n),D.F,o,D.e,D.Q,0,D.p),o),!0,!1,D.ag,!0,!0)},
$S:89}
A.e0c.prototype={
$0(){return this.b.$1(new A.e0b(this.a,this.c))},
$S:0}
A.e0b.prototype={
$0(){return this.a.cy=this.b},
$S:0}
A.e0d.prototype={
$0(){C.a5(this.b,!1).N(null)
var w=this.a
w.csh(w.cy)},
$S:0}
A.e05.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.e=this.b
w.at=null
w.ko()},
$S:0}
A.e06.prototype={
$1(d){return this.a.cwv()},
$S:14}
A.e07.prototype={
$0(){},
$S:0}
A.e0g.prototype={
$0(){return this.a.dx=this.b.x},
$S:0}
A.e0a.prototype={
$0(){var w=this.b
w.ko()
w.fy=this.a.a;++w.go},
$S:0}
A.e08.prototype={
$0(){var w=this.a
w.CW=null
w.dx=""},
$S:0}
A.e_E.prototype={
$1(d){var w=this.a,v=w.go
w=w.k1
return v==="ptrap"?new A.a8d(w,null):new A.a3F(w,null)},
$S:1788}
A.e_F.prototype={
$1(d){var w=this.a
return new A.GN(w.go,w.id,null)},
$S:z+21}
A.e0t.prototype={
$1(d){var w=this.a
return new A.GN(w.a,w.c,null)},
$S:z+21}
A.e_H.prototype={
$1(d){return A.fNr(!1,this.a.CW,!1)},
$S:z+23}
A.e_G.prototype={
$1(d){return new A.UW(this.a.cx,null)},
$S:z+24}
A.e_0.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.d
n===$&&C.c()
w=n.d
w===$&&C.c()
n=C.d("Add to "+w[n.e].b,p,p,p,p,p,p,D.du,p,p,p)
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t={}
s=B.db8[u]
t.a=null
t.a=s.a
r=new C.aV(12,12)
q=new C.az(D.b0,1,D.r,-1)
v.push(C.aE(p,C.p(p,new C.x(s.b,p,D.rp,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(D.fh.j(0.4),p,new C.bP(q,q,q,q),new C.bp(r,r,r,r),p,p,D.n),p,p,p,p,T.EL,p,p,p),D.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.e__(t,o,d),p,p,p,p,p,p,!1,D.a8))}return C.bn(!0,new C.C(D.bU,C.v(C.a([n,D.at,B.fnF,D.ac,C.c_(D.bD,v,D.bt,8,8)],w),D.F,p,D.e,D.Q,0,D.p),p),!0,!1,D.ag,!0,!0)},
$S:29}
A.e__.prototype={
$0(){C.a5(this.c,!1).N(null)
this.b.bwz(this.a.a)},
$S:0}
A.dZV.prototype={
$1(d){return d.a==="back"},
$S:z+14}
A.dZW.prototype={
$1(d){return d.a==="back"},
$S:z+14}
A.dZX.prototype={
$1(d){return Math.abs(d-this.a)>13},
$S:121}
A.dZY.prototype={
$0(){var w=this
w.b.dy.push(new A.aTx(w.c,w.d,new A.Xs(C.V(x.S,x.N))))
w.a.ko()},
$S:0}
A.e_D.prototype={
$0(){var w,v,u,t=this,s=t.b
s.c=s.c+t.c
s.d=s.d+t.d
w=t.a
v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
u[v.e].aBv(0,s)
w.ko()},
$S:0}
A.e0h.prototype={
$0(){var w,v,u,t=this.b
t.e=(t.e+1)%4
w=this.a
v=w.d
v===$&&C.c()
u=v.d
u===$&&C.c()
u[v.e].aBv(0,t)
w.ko()},
$S:0}
A.e0_.prototype={
$0(){var w=this.b
w.f=(w.f+1)%6
this.a.ko()},
$S:0}
A.e00.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
D.d.W(w[u.e].x,this.b)
v.as=v.z=0
v.ko()},
$S:0}
A.dZZ.prototype={
$0(){var w=this.a,v=this.b.a
w.z=v
w.as=100+v
w.ko()},
$S:0}
A.e_r.prototype={
$0(){return this.a.acm(-6,0)},
$S:0}
A.e_s.prototype={
$0(){return this.a.acm(6,0)},
$S:0}
A.e_t.prototype={
$0(){return this.a.acm(0,-6)},
$S:0}
A.e_u.prototype={
$0(){return this.a.acm(0,6)},
$S:0}
A.e_v.prototype={
$0(){return this.a.bwC(this.b.a)},
$S:0}
A.e_w.prototype={
$0(){var w=this.a
return w.m(new A.e_q(w))},
$S:0}
A.e_q.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.e_x.prototype={
$0(){var w=this.a
w.m(new A.e_p(w,this.b))},
$S:0}
A.e_p.prototype={
$0(){var w,v=this.a,u=v.Q,t=this.b,s=v.d
if(u<0){s===$&&C.c()
u=s.d
u===$&&C.c()
D.d.hb(u[s.e].z,0,3,t)}else{s===$&&C.c()
w=s.d
w===$&&C.c()
w[s.e].z[u]=t}v.ko()},
$S:0}
A.e_y.prototype={
$0(){var w=this.a
w.m(new A.e_o(w,this.b))},
$S:0}
A.e_o.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].Q=this.b
v.ko()},
$S:0}
A.e_z.prototype={
$0(){var w=this.a
w.m(new A.e_n(w))},
$S:0}
A.e_n.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
u=w[u.e]
u.dx=u.dx==="fan"?"light":"fan"
v.ko()},
$S:0}
A.e_A.prototype={
$0(){var w=this.a
w.m(new A.e_m(w,this.b))},
$S:0}
A.e_m.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
w[u.e].as=this.b
v.ko()},
$S:0}
A.e_B.prototype={
$0(){return this.a.acl(this.b.c)},
$S:0}
A.e0w.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.e0u(w))},
$S:0}
A.e0u.prototype={
$0(){return this.a.fy=null},
$S:0}
A.e0v.prototype={
$3(d,e,f){var w=null
return C.db(C.cgO(D.A,w,w,w,w,D.cm,D.wr,w,this.a.fy,!1,!1,!1,w,D.oB,1,w),e)},
$S:102}
A.e_d.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return v.a.length!==0?w.DF():w.cgT(this.b)},
$S:0}
A.e_8.prototype={
$0(){return this.a.Ys()},
$S:0}
A.e_7.prototype={
$1(d){return d<=5},
$S:34}
A.e_6.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.d
w===$&&C.c()
return A.hSN(w[u.e],v.ch.gu0()/1000,v.cfD())},
$S:z+7}
A.e_e.prototype={
$0(){var w=this.a
w.m(new A.e_5(w))
w.Ys()},
$S:0}
A.e_5.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.e_f.prototype={
$0(){var w=this.a
return w.CW!=null?w.ah4():w.cwu()},
$S:0}
A.e_g.prototype={
$0(){var w=this.a
return w.m(new A.e_4(w))},
$S:0}
A.e_4.prototype={
$0(){var w=this.a,v=!w.w
w.w=v
if(v)w.lS("Voltage tester in your hand: tap an outlet, a switch or the light.")},
$S:0}
A.e_h.prototype={
$0(){var w=this.a
return w.m(new A.e_3(w))},
$S:0}
A.e_3.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.e_i.prototype={
$0(){return this.a.QD("look")},
$S:0}
A.e_j.prototype={
$0(){return this.a.QD("furniture")},
$S:0}
A.e_k.prototype={
$0(){return this.a.QD("walls")},
$S:0}
A.e_l.prototype={
$0(){return this.a.QD("floor")},
$S:0}
A.e_9.prototype={
$0(){return this.a.QD("ceiling")},
$S:0}
A.e_a.prototype={
$0(){return this.a.QD("doors")},
$S:0}
A.e_b.prototype={
$0(){return C.a5(this.a,!1).ce(C.ej(new A.e_2(),!1,null,x.H))},
$S:0}
A.e_2.prototype={
$1(d){return B.aD4},
$S:z+27}
A.e_c.prototype={
$0(){var w=this.a
return w.m(new A.e_1(w))},
$S:0}
A.e_1.prototype={
$0(){var w=this.a.d
w===$&&C.c()
return w.c=!w.c},
$S:0}
A.e_Z.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.aI(d,m,x.w).w,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fcy,D.at,C.d("Wiring "+j.gcRO()+"/"+k.d.gwg().length+" \xb7 Plumbing "+k.d.gcOI()+"/"+k.d.gcOH(),m,m,m,m,m,m,B.Ip,m,m,m),D.S],w)
for(v=k.d.gwg(),u=v.length,t=0;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aV(12,12)
p=new C.az(s.glp()&&s.got()?D.bc.j(0.5):D.bF,1,D.r,-1)
if(s.glp()&&s.got())o="\u2705 finished"
else{o=s.glp()?"":"\u26a1 wiring  "
o+=s.got()?"":"\ud83d\udeb0 plumbing"}n=s.glp()&&s.got()?D.ey:D.ad
j.push(C.aE(m,C.p(m,new C.co(D.aQ,D.e,D.j,D.m,m,D.p,m,0,C.a([new C.bE(1,D.bi,new C.x(s.b,m,B.f24,m,m,m,m,m,m,m,m,m),m),new C.x(o,m,new C.F(!0,n,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],w),m),D.f,m,m,new C.o(r,m,new C.bP(p,p,p,p),new C.bp(q,q,q,q),m,m,D.n),m,m,m,D.eO,D.bR,m,m,m),D.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e_W(k,d,s),m,m,m,m,m,m,!1,D.a8))}j.push(D.P)
j.push(C.dT(B.f9J,new A.e_X(k,d),m))
j.push(D.P)
j.push(C.bJ(B.f68,new A.e_Y(k,d),m))
return C.bn(!0,new C.cU(new C.aY(0,1/0,0,l.a.b*0.75),C.cB(j,m,D.bU,m,m,D.ah,!0),m),!0,!1,D.ag,!0,!0)},
$S:29}
A.e_W.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.acl(this.c.a)},
$S:0}
A.e_X.prototype={
$0(){C.a5(this.b,!1).N(null)
var w=this.a
w.m(new A.e_V(w))
w.lS("Every room needs its wiring and plumbing again. Wire the whole house from the start.")},
$S:0}
A.e_V.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.cLo()
w.ko()},
$S:0}
A.e_Y.prototype={
$0(){C.a5(this.b,!1).N(null)
$.aTD=A.fZa(D.o.F(Date.now(),1e5))
var w=this.a
w.m(new A.e_U(w))
w.av8(!0)},
$S:0}
A.e_U.prototype={
$0(){var w=this.a,v=$.aTD
v.toString
w.d=v
w.r="look"
w.z=0
w.Q=-1
w.as=0
w.ko()},
$S:0}
A.dlx.prototype={
$1(d){var w,v,u,t,s,r=d.b,q=14*this.b,p=D.k.e3(r.a,q),o=D.k.e3(r.b,q)
r=this.a
q=r.c.d
q===$&&C.c()
w=q.length
v=0
for(;v<w;++v){u=q[v]
t=u.d
s=!1
if(p>=t)if(p<t+u.f){t=u.e
t=o>=t&&o<t+u.r}else t=s
else t=s
if(t){r.d.$1(u.a)
return}}},
$S:22}
A.fk4.prototype={
$2(d,e){return this.a===d?e:0},
$S:1789}
A.fjX.prototype={
$1(d){return d.a==="right"},
$S:z+14}
A.fjY.prototype={
$1(d){return d.a==="back"},
$S:z+14}
A.fjZ.prototype={
$1(d){return d.b},
$S:z+57}
A.fk_.prototype={
$2(d,e){return e},
$S:85}
A.fk0.prototype={
$3(d,e,f){return F.aOB(d,e,0,f+this.a)},
$S:319}
A.fk1.prototype={
$3(d,e,f){var w=this.a
return F.aOB(d,e,w.fy,f+w.a)},
$S:319}
A.fk2.prototype={
$3(d,e,f){var w=this.a
return F.aOB(d,e,w.fy,f+w.a)},
$S:319}
A.fk3.prototype={
$2(d,e){var w=this.a
w.b=0
w.e6(new A.K(d,e,0),new A.K(d,e,2.2),0.7,B.K_,0.7,10)},
$S:1791}
A.feC.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=x.z,j=C.a([],k),i=new A.l4(j)
i.e=6
d.$1(i)
k=C.a([],k)
for(j=A.hPu(j,e,B.jh),w=j.length,v=f.a,u=f.b,t=f.c,s=x.o,r=0;r<j.length;j.length===w||(0,C.L)(j),++r){q=j[r]
p=C.a([],s)
for(o=q.a,n=o.length,m=0;m<o.length;o.length===n||(0,C.L)(o),++m){l=o[m]
p.push(new A.K(l.a+v,l.b+u,l.c+t))}k.push(new A.qm(p,q.b,q.c,q.d,q.e,q.f,q.r,q.w,q.x))}D.d.v(this.a.a,k)},
$S:z+29}
A.feo.prototype={
$5(d,e,f,g,h){var w=this.a
w.ba2(d,e,f,h,!1,g,10)
w.mo(e,g*1.04,h,4,8)},
$S:z+36}
A.fep.prototype={
$1(d){return d.iM(B.jh,2.6,B.W5,4,8,0.15)},
$S:z+1}
A.feq.prototype={
$1(d){return d.mo(B.jh,2.6,D.bW,3,8)},
$S:z+1}
A.fer.prototype={
$1(d){return d.mo(B.jh,5.2,B.JP,4,10)},
$S:z+1}
A.feu.prototype={
$1(d){return d.ba2(B.jh,B.aQe,4.9,B.WA,!1,6.5,12)},
$S:z+1}
A.fev.prototype={
$1(d){return d.ba1(B.jh,B.fy5,5.1,B.b7p,!1,12)},
$S:z+1}
A.few.prototype={
$1(d){return d.mo(B.jh,6.7,B.WA,4,10)},
$S:z+1}
A.fex.prototype={
$1(d){return d.mo(B.jh,4.7,B.zS,6,12)},
$S:z+1}
A.fey.prototype={
$1(d){return d.mo(B.jh,3,B.zS,4,8)},
$S:z+1}
A.fez.prototype={
$1(d){return d.mo(B.jh,5,B.VJ,5,10)},
$S:z+1}
A.feA.prototype={
$1(d){return d.mo(B.jh,3.6,B.VJ,3,8)},
$S:z+1}
A.feB.prototype={
$1(d){return d.mo(B.jh,1,D.c,3,6)},
$S:z+1}
A.fes.prototype={
$1(d){return d.mo(B.jh,1,B.b5w,3,6)},
$S:z+1}
A.fet.prototype={
$1(d){return d.mo(B.jh,1.9,B.zS,4,8)},
$S:z+1}
A.fk9.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=A.zC(d,e,v/f)
w.aBb(new A.K(u.a,4,u.c),B.fCN,B.VU,!1,0.05)}t=A.zC(d,e,0.5)
for(s=e.aC(0,d).gT1()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=B.cZJ[p]
n=g?new A.K(s,0.16,0.3):new A.K(0.3,0.16,s)
w.bS(new A.K(r,o,q),n,B.VU,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+32}
A.fk6.prototype={
$2(d,e){return this.a.jN(A.G5(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+33}
A.fk5.prototype={
$1(d){return this.a.jN(A.G5(d,0.5,3),0.14,B.pc,!1,0.3,8)},
$S:z+34}
A.fk8.prototype={
$2$col(d,e){return this.a.jN(A.G5(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,B.W1)},
$S:z+35}
A.fk7.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.bS(e,new A.K(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$S:z+56}
A.fl3.prototype={
$0(){return A.mu(1320,120,0.25,"tri")},
$S:0}
A.dJd.prototype={
$1(d){return this.a},
$S:41}
A.dJg.prototype={
$0(){return C.a5(this.a,!1).m3()},
$S:0}
A.dJh.prototype={
$0(){var w=this.a
return w.m(new A.dJf(w))},
$S:0}
A.dJf.prototype={
$0(){return this.a.d=!1},
$S:0}
A.dJi.prototype={
$0(){var w=this.a
return w.m(new A.dJe(w))},
$S:0}
A.dJe.prototype={
$0(){return this.a.d=!0},
$S:0}
A.dJk.prototype={
$0(){var w=this.a
return w.A2(A.aZ0("","",w.d))},
$S:0}
A.dJl.prototype={
$0(){var w=this.a
return w.A2(A.aZ0("wiring","",w.d))},
$S:0}
A.dJm.prototype={
$0(){var w=this.a
return w.A2(A.aZ0("plumbing","",w.d))},
$S:0}
A.dJn.prototype={
$0(){var w=this.a
return w.A2(A.aZ0("fix","",w.d))},
$S:0}
A.dJo.prototype={
$0(){var w=this.a
return w.A2(A.fNr(w.d,null,!1))},
$S:0}
A.dJp.prototype={
$0(){var w=this.a
return w.A2(A.fNr(w.d,null,!0))},
$S:0}
A.dJq.prototype={
$0(){var w=this.a
return w.A2(new A.apL(w.d,null))},
$S:0}
A.dJr.prototype={
$0(){var w=this.b.a
w=w==="house"?B.fGi:A.aZ0("",w,!1)
return this.a.A2(w)},
$S:0}
A.dJj.prototype={
$0(){return this.a.A2(B.aD4)},
$S:0}
A.coM.prototype={
$0(){return this.a.d.an8(0.8)},
$S:0}
A.coN.prototype={
$0(){return this.a.d.an8(1.25)},
$S:0}
A.fBi.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=C.aI(d,o,x.w).w,m=this.b,l=this.c,k=l.length,j=x.p,i=C.a([C.d(this.a,o,o,o,o,o,o,D.du,o,o,o),D.at,C.d(""+new C.a2(m,new A.fBh(),C.T(m).k("a2<1>")).gM(0)+" of "+k+" steps done",o,o,o,o,o,o,B.Ip,o,o,o),D.S],j)
for(w=0;w<k;++w){v=D.c.j(0.05)
u=new C.aV(14,14)
t=new C.az(m[w]?D.bc.j(0.6):D.bF,1,D.r,-1)
s=m[w]
r=s?"\u2705":""+(w+1)+"."
q=s?D.c:D.aJ
p=l[w]
s=s?D.ay:D.c
i.push(C.p(o,new C.co(D.aQ,D.e,D.j,D.F,o,D.p,o,0,C.a([new C.x(r,o,new C.F(!0,q,o,o,o,o,14,D.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),D.aw,new C.bE(1,D.bi,new C.x(p,o,new C.F(!0,s,o,o,o,o,13,o,o,o,o,o,1.4,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o)],j),o),D.f,o,o,new C.o(v,o,new C.bP(t,t,t,t),new C.bp(u,u,u,u),o,o,D.n),o,o,o,D.cG,D.bk,o,o,o))}return C.bn(!0,new C.cU(new C.aY(0,1/0,0,n.a.b*0.75),C.cB(i,o,D.bU,o,o,D.ah,!0),o),!0,!1,D.ag,!0,!0)},
$S:29}
A.fBh.prototype={
$1(d){return d},
$S:141}
A.bR0.prototype={
$0(){return C.a5(this.a,!1).m3()},
$S:0}
A.d1q.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c},
$S:0}
A.d1r.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d1p(w))},
$S:0}
A.d1p.prototype={
$0(){return this.a.y=null},
$S:0}
A.d1j.prototype={
$0(){return this.a.x=0},
$S:0}
A.d1i.prototype={
$1(d){var w=this.a.geR(0).b
return new C.bc(w,C.a3(w).k("bc<2>")).t(0,d)},
$S:3}
A.d1k.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.d1l.prototype={
$2(d,e){return e===this.a},
$S:439}
A.d1m.prototype={
$0(){var w=this.a
w.xn()
w.x=this.b},
$S:0}
A.d1n.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.d1o.prototype={
$0(){var w=this.a,v=w.geR(0),u=v.a
v.a=!u
if(u)v.d=!1
w.xn()},
$S:0}
A.d1s.prototype={
$0(){var w=this.a,v=w.geR(0)
v.d=v.a=!0
w.xn()},
$S:0}
A.d1A.prototype={
$1(d){return!d},
$S:141}
A.d1D.prototype={
$0(){var w=this.a.gFA()
return A.fBg(this.b,w.b,w.d,this.c)},
$S:0}
A.d1B.prototype={
$0(){var w=this.a
return w.m(new A.d1z(w))},
$S:0}
A.d1z.prototype={
$0(){var w=this.a,v=w.geR(0)
v.e=!v.e
w.xn()},
$S:0}
A.d1C.prototype={
$0(){var w=this.a
return w.m(new A.d1y(w))},
$S:0}
A.d1y.prototype={
$0(){var w=this.a,v=w.geR(0)
v.f=!v.f
w.xn()},
$S:0}
A.d1E.prototype={
$0(){var w=this.a,v=w.gkM()
return v.mc(10,0.2,new A.K(0.6,0,w.geR(0).c===0?4.2:0.4),-0.95)},
$S:0}
A.d1F.prototype={
$0(){var w=this.a,v=w.gkM()
return v.mc(10,0.2,new A.K(-0.6,0,w.geR(0).c===0?4.2:0.4),0.95)},
$S:0}
A.d1G.prototype={
$1(d){return!this.a.geR(0).b.iN(0,d.a)},
$S:z+12}
A.d1H.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.geR(0).b.iN(0,u)){w.oW("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w.m(new A.d1x(w,v))
if(w.w.length!==0){if(u==="ground")w.gkM().mc(8,0.55,B.fzZ,0.15)
else if(u==="white")w.gkM().mc(8.5,0.2,B.fBU,0.95)
else w.gkM().mc(8.5,0.2,B.fvR,-0.95)
w.kp(v.b+": now tap the screw it belongs on.",!0)}},
$S:0}
A.d1x.prototype={
$0(){var w=this.a,v=this.b.a
return w.w=w.w===v?"":v},
$S:0}
A.d1I.prototype={
$0(){var w=this.a
w.m(new A.d1w(w))
A.y4()
w.kp("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.nT()},
$S:0}
A.d1w.prototype={
$0(){var w=this.a
w.geR(0).c=1
w.xn()},
$S:0}
A.d1J.prototype={
$0(){var w=this.a
w.m(new A.d1v(w))
w.nT()},
$S:0}
A.d1v.prototype={
$0(){var w=this.a
w.geR(0).c=0
w.xn()},
$S:0}
A.d1K.prototype={
$0(){var w=this.a
w.m(new A.d1u(w))
A.y4()
w.kp("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
A.d1u.prototype={
$0(){var w=this.a
w.geR(0).c=2
w.xn()},
$S:0}
A.d1L.prototype={
$0(){var w=this.a
w.m(new A.d1t(w))
w.nT()},
$S:0}
A.d1t.prototype={
$0(){var w=this.a,v=w.geR(0)
v.c=0
v.b.a8(0)
v.a=!0
v.d=!1
w.Q=0
w.w=""
w.x=0
w.xn()},
$S:0}
A.eKf.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.eKg.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eKe(w))},
$S:0}
A.eKe.prototype={
$0(){return this.a.x=null},
$S:0}
A.eK8.prototype={
$0(){return this.a.w=0},
$S:0}
A.eK9.prototype={
$0(){var w=this.a,v=w.geR(0)
v.a.J(0,this.b)
v.c=!1
v.d=""
w.f=A.bzc(v)
w.r=""},
$S:0}
A.eKa.prototype={
$0(){var w=this.a,v=w.geR(0)
v.b.n(0,this.b,!0)
v.d=""
w.f=A.bzc(v)},
$S:0}
A.eKb.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eKc.prototype={
$1(d){return this.a.geR(0).b.h(0,d)!==!0},
$S:3}
A.eKd.prototype={
$0(){var w,v=this.a,u=v.geR(0)
u.c=!0
w=this.b
u.d=w.length===0?"":D.d.gL(w)
v.f=A.bzc(u)},
$S:0}
A.eKk.prototype={
$1(d){return!d},
$S:141}
A.eKo.prototype={
$0(){return A.fBg(this.a,"Sink drain (P-trap)",B.d1a,this.b)},
$S:0}
A.eKl.prototype={
$1(d){return A.i0o(this.a.geR(0),d)},
$S:z+7}
A.eKm.prototype={
$0(){var w=this.a
return w.m(new A.eKj(w,this.b))},
$S:0}
A.eKj.prototype={
$0(){var w=this.a,v=this.b
return w.r=w.r===v?"":v},
$S:0}
A.eKn.prototype={
$0(){var w=this.a
w.m(new A.eKi(w))
w.nT()},
$S:0}
A.eKi.prototype={
$0(){var w,v=this.a,u=v.geR(0)
u.a.a8(0)
w=u.b
w.aGM(w,new A.eKh())
u.c=!1
v.r=u.d=""
v.w=0
v.f=A.bzc(u)},
$S:0}
A.eKh.prototype={
$2(d,e){return!1},
$S:1793}
A.d4l.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.d4m.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d4k(w))},
$S:0}
A.d4k.prototype={
$0(){return this.a.x=null},
$S:0}
A.d4d.prototype={
$0(){return this.a.w=0},
$S:0}
A.d4g.prototype={
$1(d){return d.a===this.a},
$S:z+15}
A.d4h.prototype={
$0(){var w=this.a,v=w.geR(0)
v.f=!1
w.f=A.aNd(v)
w.w=this.b},
$S:0}
A.d4i.prototype={
$0(){var w=this.a,v=w.geR(0),u=v.e
u.bn(u,new A.d4f(this.b))
v.f=!1
w.f=A.aNd(v)},
$S:0}
A.d4f.prototype={
$2(d,e){return e===this.a},
$S:439}
A.d4j.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.d4e.prototype={
$0(){var w=this.a,v=w.geR(0)
v.f=!v.f
w.f=A.aNd(v)},
$S:0}
A.d4q.prototype={
$1(d){return!d},
$S:141}
A.d4w.prototype={
$0(){return A.fBg(this.a,"Faucet supply lines",B.dch,this.b)},
$S:0}
A.d4r.prototype={
$1(d){return A.hSl(this.a.geR(0),d)},
$S:z+7}
A.d4s.prototype={
$0(){var w=this.a
return w.m(new A.d4p(w))},
$S:0}
A.d4p.prototype={
$0(){var w=this.a,v=w.geR(0)
v.r=!v.r
w.f=A.aNd(v)},
$S:0}
A.d4u.prototype={
$0(){var w=this.b
return w.m(new A.d4o(this.a,w))},
$S:0}
A.d4o.prototype={
$0(){var w=this.b,v=w.r,u=this.a.a
return w.r=v===u?"":u},
$S:0}
A.d4t.prototype={
$1(d){return d===this.a.a},
$S:3}
A.d4v.prototype={
$0(){var w=this.a
w.m(new A.d4n(w))
w.nT()},
$S:0}
A.d4n.prototype={
$0(){var w=this.a,v=w.geR(0)
v.e.a8(0)
v.f=!1
w.r=""
w.w=0
w.f=A.aNd(v)},
$S:0}
A.dbp.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.dbq.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.dbo(w))},
$S:0}
A.dbo.prototype={
$0(){return this.a.x=null},
$S:0}
A.dbj.prototype={
$0(){return this.a.r=0},
$S:0}
A.dbl.prototype={
$0(){var w=this.a,v=w.d
v.d.W(0,72)
w.f=A.af2(v)
w.r=this.b},
$S:0}
A.dbm.prototype={
$0(){var w=this.a,v=w.d
v.c=!0
v.b=!1
w.f=A.af2(v)
w.r=this.b},
$S:0}
A.dbn.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dbk.prototype={
$1(d){return this.a},
$S:41}
A.dby.prototype={
$0(){return A.fBg(this.a,"Fix the house",B.ccw,this.b)},
$S:0}
A.dbt.prototype={
$0(){return this.a.c9Y(this.b)},
$S:0}
A.dbv.prototype={
$1(d){return d<=this.a.d.a},
$S:34}
A.dbu.prototype={
$1(d){return A.hd_(this.a.d,d)},
$S:z+7}
A.dbw.prototype={
$0(){var w=this.a
return w.m(new A.dbs(w))},
$S:0}
A.dbs.prototype={
$0(){var w=this.a
return w.w=w.w==="wrench"?"":"wrench"},
$S:0}
A.dbx.prototype={
$1(d){var w=this.a
return w.m(new A.dbr(w,d))},
$S:6}
A.dbr.prototype={
$0(){var w=this.a,v=w.d,u=D.k.V(this.b)
v.a=u
if(u<5)w.r=0
w.f=A.af2(v)},
$S:0}
A.c4G.prototype={
$0(){return C.a5(this.a,!1).m3()},
$S:0}
A.fkK.prototype={
$5(d,e,f,g,h){var w=this.a.a.t(0,h),v=this.b
v.b=d
if(w)v.a5h(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.aGK(e,0.74,D.b0,!1,!0,0,8)
v.d=1}},
$S:z+38}
A.fkJ.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.ae(0,h)
w=this.b
w.e=0.5
w.b=d
w.e6(v.aC(0,g.aK(0,0.6)),v.ae(0,g.aK(0,0.6)),1.12,B.pc,0.35,8)
w.yU(v.aC(0,g.aK(0,0.62)),v.aC(0,g.aK(0,0.5)),1.2,0.5,B.Vg,0.2,8)
w.b=0
w.yU(f.aC(0,g.aK(0,0.05)),f.ae(0,g.aK(0,0.08)),0.82,0.55,B.bfb,0.1,12)
w.e=0},
$S:z+39}
A.fkI.prototype={
$1(d){return d.b<-0.6},
$S:z+17}
A.fjW.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:34}
A.fmb.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=A.aff(d)
for(w=this.a*1.6,v=this.b,u=p.a,t=p.b,s=p.c,r=0;r<7;++r){q=D.k.F(w+r/7,1)
v.iM(new A.K(u+Math.sin(r*2.1)*q*1.4,t+(q*2.4-q*q*6.5),s+(1+q*2.5)),0.2,e,3,6,0.9)}},
$S:1794}
A.fma.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+15}
A.cfn.prototype={
$1(d){return d.a===this.a},
$S:z+40}
A.cfo.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.cfk.prototype={
$1(d){return this.a.uN(0,d).c.toLowerCase()},
$S:13}
A.cfp.prototype={
$1(d){var w
if(!this.a.e.t(0,d.a)){w=d.b
w=w==="valve"||D.a.a0(w,"hose")}else w=!1
return w},
$S:z+2}
A.cfq.prototype={
$1(d){var w=this.a,v=d.a
return w.e.t(0,v)&&w.bdA(v)>0},
$S:z+2}
A.cfr.prototype={
$1(d){return d.a},
$S:z+16}
A.cfs.prototype={
$1(d){return d.a},
$S:z+16}
A.cfl.prototype={
$1(d){return this.a.e.t(0,d.a)},
$S:z+2}
A.cfm.prototype={
$1(d){var w=this.a,v=d.a
return w.bdA(v)<=0||!w.e.t(0,v)},
$S:z+2}
A.fkH.prototype={
$1(d){var w=this.a
w.b=0
w.e6(new A.K(d,8,0),new A.K(d,8,1.6),0.5,B.K_,0.7,10)},
$S:6}
A.fkF.prototype={
$1(d){var w,v,u,t,s,r,q=C.a([],x.o)
for(w=d.length,v=this.a,u=v.a,t=v.b,v=v.c,s=0;s<d.length;d.length===w||(0,C.L)(d),++s){r=d[s]
q.push(new A.K(r.a+u,r.b+t,r.c+v))}return q},
$S:z+43}
A.fkz.prototype={
$3$r(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bc(v.c,new A.fkC(d))
w.d=0.32
w.aGK(e,f,D.b0,!1,!0,0,8)
w.d=1},
$2(d,e){return this.$3$r(d,e,1.2)},
$S:z+44}
A.fkC.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fkA.prototype={
$3(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+D.d.bc(v.c,new A.fkB(d))
w.d=0.32
w.cH(e,f,D.b0)
w.d=1},
$S:z+45}
A.fkB.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fkG.prototype={
$3(d,e,f){var w,v,u,t=this,s=t.a,r=s.c
r===$&&C.c()
w=D.d.cJ(r.c,d)
r=d.c
v=s.e
u=d.a
if(v.t(0,u))s="Fitted."
else{s=s.b?"":d.e
s="A spot for the "+r.toLowerCase()+". "+s}t.b.n(0,9100+w,new A.da(r,s,e,26))
if(t.c&&!v.t(0,u)&&t.d.length!==0)t.e.push(new A.ub(e.ae(0,B.fuv),f,D.fh))},
$S:z+46}
A.fkw.prototype={
$0(){return this.a.$3(this.b.a,new A.K(this.c-10,9,2.4),B.a7z)},
$S:0}
A.fkx.prototype={
$0(){return this.a.$3(this.b.a,new A.K(this.c-8,9,2.4),B.a7z)},
$S:0}
A.fky.prototype={
$0(){return this.a.$3(this.b.a,new A.K(this.c+8,9,2.4),B.a7z)},
$S:0}
A.fkD.prototype={
$4(d,e,f,g){var w,v,u,t,s=this
if(D.d.bc(s.a,new A.fkE(d))<0||!s.b.e.t(0,d))return
w=s.b.f.h(0,d)
v=(w==null?0:w)>=1
w=s.c
u=9260+g
w.b=u
t=v?e:e.ae(0,f.aK(0,1.7))
w.e6(t.aC(0,f.aK(0,0.6)),t.ae(0,f.aK(0,0.6)),1.12,B.pc,0.35,8)
w.yU(t.aC(0,f.aK(0,0.62)),t.aC(0,f.aK(0,0.5)),1.2,0.5,B.Vg,0.2,8)
w=v?"Tight.":"Loose. Tap it with the wrench to tighten it."
s.d.n(0,u,new A.da("Slip nut",w,e,10))},
$S:z+47}
A.fkE.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.fAu.prototype={
$1(d){var w,v=this
A:{if("vhot"===d||"hhot"===d){w=new A.K(v.a-8,9,2)
break A}if("vcold"===d||"hcold"===d){w=new A.K(v.a+8,9,2)
break A}if("tvalve"===d||"those"===d){w=new A.K(v.b-10,9,2)
break A}if("bolts"===d){w=new A.K(v.b,2,17)
break A}if("faucet"===d){w=new A.K(v.a,30,8)
break A}if("tail"===d){w=new A.K(v.a,22,8)
break A}if("trap"===d){w=new A.K(v.a,24.7,8)
break A}w=new A.K(v.a+8.9,23.6,8)
break A}return w},
$S:z+48}
A.fAt.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.ee8.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.ee9.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ee7(w))},
$S:0}
A.ee7.prototype={
$0(){return this.a.z=null},
$S:0}
A.ee1.prototype={
$0(){return this.a.y=0},
$S:0}
A.eea.prototype={
$1(d){return d.a===this.a},
$S:z+2}
A.edU.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.edV.prototype={
$0(){var w=this.a
w.acn()
w.y=this.b},
$S:0}
A.edW.prototype={
$1(d){return this.a.c2f()},
$S:8}
A.ee0.prototype={
$1(d){var w,v=null,u=this.a,t=u.e
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.b.toLowerCase()+" is finished and nothing leaks.\n\nMistakes: "+t.w+"\n\nThe next job is different.",v,v,v,v,v,v,B.a6A,v,v,v)
return C.eh(C.a([C.bK(!1,B.aPp,v,v,!0,v,v,new A.edZ(d),v,v),C.bJ(B.fcJ,new A.ee_(u,d),v)],x.p),v,v,E.mO,t,v,v,v,v,B.fei,v)},
$S:19}
A.edZ.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
A.ee_.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aVD()},
$S:0}
A.ee6.prototype={
$0(){var w,v,u=this.a
u.d=D.o.F(Date.now(),1e5)
w=u.gCh(0)
v=u.e
v===$&&C.c()
u.e=A.fO8(v.b,w,null)
u.x=""
u.as=!1
u.z=null
u.y=0
u.acn()},
$S:0}
A.edY.prototype={
$0(){var w=this.a
return w.m(new A.edX(w,this.b,this.c))},
$S:0}
A.edX.prototype={
$0(){var w=this.a
w.x=this.b?"":this.c
w.acn()},
$S:0}
A.eeb.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.e.t(0,d.a)},
$S:z+2}
A.eef.prototype={
$0(){return this.a.bXF(this.b)},
$S:0}
A.eed.prototype={
$1(d){return d<=5},
$S:34}
A.eec.prototype={
$1(d){var w=this.a,v=w.e
v===$&&C.c()
return A.i0i(v,w.w.gu0()/1000)},
$S:z+7}
A.eee.prototype={
$0(){return this.b.crL(this.a.a)},
$S:0}
A.ee5.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.e
n===$&&C.c()
w=x.p
n=C.a([B.fpt,D.at,C.d("Mistakes "+n.w,p,p,p,p,p,p,B.Ip,p,p,p),D.S],w)
v=o.e.c
v===$&&C.c()
v=v.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
r=D.c.j(0.05)
q=new C.aV(12,12)
n.push(C.p(p,new C.x((o.e.e.t(0,s.a)?"\u2705":"\ud83d\udd27")+" "+s.c,p,B.eQ1,p,p,p,p,p,p,p,p,p),D.f,p,p,new C.o(r,p,p,new C.bp(q,q,q,q),p,p,D.n),p,p,p,D.eO,D.bR,p,p,p))}n.push(D.ao)
n.push(B.f4K)
n.push(D.P)
n.push(C.A(C.a([B.btv,C.auk(p,p,p,p,!1,D.y,p,p,p,p,p,p,new A.ee3(o,d),p,p,p,p,p,p,p,p,o.e.b)],w),D.m,p,D.e,D.j,0,p,p))
n.push(C.bJ(B.aPr,new A.ee4(o,d),p))
return C.bn(!0,C.cB(n,p,D.bU,p,p,D.ah,!0),!0,!1,D.ag,!0,!0)},
$S:29}
A.ee3.prototype={
$1(d){var w=this.a
w.m(new A.ee2(w,d))
C.a5(this.b,!1).N(null)},
$S:9}
A.ee2.prototype={
$0(){var w=this.a,v=w.e
v===$&&C.c()
v.b=this.b
w.acn()},
$S:0}
A.ee4.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aVD()},
$S:0}
A.fIK.prototype={
$1(d){return d.a===this.a},
$S:z+19}
A.ckh.prototype={
$1(d){return d.b==="switch"},
$S:z+3}
A.cko.prototype={
$1(d){return!this.a.y.t(0,d)},
$S:34}
A.ckp.prototype={
$1(d){var w=this.a
return w.x.ag(0,d)&&w.z.t(0,d)},
$S:34}
A.ckq.prototype={
$1(d){var w=$.Gd()[this.b],v=!1
if(w>=d)if(w<=d+48){w=this.a.Q.h(0,d)
w=(w==null?null:w.a)===!0}else w=v
else w=v
return w},
$S:34}
A.ckr.prototype={
$1(d){return this.a.Q.h(0,d).c.t(0,this.b)},
$S:34}
A.ckt.prototype={
$1(d){var w,v=J.e1(6,x.S)
for(w=0;w<6;++w)v[w]=w
return D.d.d9(v,new A.cks(this.a,d))},
$S:34}
A.cks.prototype={
$1(d){return this.a.c.t(0,this.b*10+d)},
$S:34}
A.ckg.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.a)===!0},
$S:34}
A.cke.prototype={
$1(d){return!A.kX(d).c},
$S:34}
A.ckf.prototype={
$1(d){var w=this.a.anS(A.kX(d).d.a)
return(w==null?null:w.b.t(0,d))===!0},
$S:34}
A.ckm.prototype={
$1(d){return d.c},
$S:z+6}
A.ckn.prototype={
$1(d){return d.d},
$S:z+6}
A.cki.prototype={
$1(d){return d.d},
$S:z+6}
A.ckj.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.e)===!0},
$S:34}
A.ckk.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.cku.prototype={
$2(d,e){return e===this.a},
$S:439}
A.ckl.prototype={
$1(d){return d.c===this.a},
$S:z+3}
A.eiv.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.eiw.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eiu(w))},
$S:0}
A.eiu.prototype={
$0(){return this.a.ax=null},
$S:0}
A.ehK.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.ehL.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ehJ(w))},
$S:11}
A.ehJ.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.ehM.prototype={
$1(d){return this.a.bLo()},
$S:8}
A.ehN.prototype={
$1(d){return this.a.c2k()},
$S:8}
A.ehV.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.ehO.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.eic.prototype={
$0(){var w=this.a
w.Q=this.b
w.z=w.at=""
w.ch=!1},
$S:0}
A.ehW.prototype={
$0(){var w=this.a
w.Q=-1
w.at=""},
$S:0}
A.eir.prototype={
$0(){return this.a.as=0},
$S:0}
A.eis.prototype={
$0(){return this.a.z=""},
$S:0}
A.eit.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.eip.prototype={
$0(){return this.a.z=""},
$S:0}
A.eiq.prototype={
$0(){return this.a.as=2000+this.b},
$S:0}
A.eio.prototype={
$0(){return this.a.z=""},
$S:0}
A.eik.prototype={
$1(d){return d.a===this.a},
$S:z+11}
A.eil.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.eim.prototype={
$0(){var w=this.a
w.at=""
w.as=0},
$S:0}
A.ein.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.eix.prototype={
$0(){var w=this.b,v=D.d.t(B.GI,w.z),u=this.a.a
if(v)w.aZX(u)
else w.aZZ(u)},
$S:0}
A.ehU.prototype={
$1(d){var w=null
return C.eh(C.a([C.bK(!1,B.fge,w,w,!0,w,w,new A.ehS(d),w,w),C.bJ(D.IG,new A.ehT(this.a,d),w)],x.p),w,w,E.mO,B.f5S,w,w,w,w,B.fd6,w)},
$S:19}
A.ehS.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
A.ehT.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.avd(!0)},
$S:0}
A.ehR.prototype={
$1(d){var w,v=null,u=this.a,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.toLowerCase()+" is built, wired, painted and tested.\n\nMistakes: "+t.f+"\nShocks: "+t.r+"\nLives left: "+t.e+"\n\nEvery job is a little different. Ready for another one?",v,v,v,v,v,v,B.a6A,v,v,v)
return C.eh(C.a([C.bK(!1,B.fqi,v,v,!0,v,v,new A.ehP(d),v,v),C.bJ(B.fd_,new A.ehQ(u,d),v)],x.p),v,v,E.mO,t,v,v,v,v,B.fkz,v)},
$S:19}
A.ehP.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
A.ehQ.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aWG()},
$S:0}
A.ehX.prototype={
$0(){var w,v,u
if(!this.b)this.a.e=D.o.F(Date.now(),1e5)
w=this.a
v=w.gCh(0)
u=w.d
u===$&&C.c()
w.d=A.fOy(null,null,u.b,v)
w.y=0
w.z=""
w.Q=-1
w.at=""
w.as=0
w.cx=!1
w.x.a8(0)
w.ax=null
w.r=A.Ci(w.d,new A.vO(w.z,w.Q,!1))},
$S:0}
A.eia.prototype={
$1(d){return new C.J(d,new A.eib(),d.$ti.k("J<ai.E,n>")).aH(0,", ")},
$S:1795}
A.eib.prototype={
$1(d){return A.kX(d).b},
$S:76}
A.ehY.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.x.ag(0,d.a)},
$S:z+3}
A.ehZ.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.z.t(0,d.a)},
$S:z+3}
A.ei_.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.y.t(0,d)},
$S:34}
A.ei2.prototype={
$1(d){return!d.a},
$S:z+6}
A.ei3.prototype={
$1(d){return d.b<3},
$S:z+6}
A.ei4.prototype={
$1(d){return!d.c},
$S:z+6}
A.ei5.prototype={
$1(d){return!d.d},
$S:z+6}
A.ei6.prototype={
$1(d){return!d.c},
$S:z+6}
A.ei7.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.a
return w!==d.b},
$S:z+3}
A.ei8.prototype={
$1(d){return d.a},
$S:z+53}
A.ei9.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.b.c
return(w==null?0:w)<2},
$S:z+3}
A.ei0.prototype={
$1(d){var w=d.b
if(w==="outlet"||w==="gfci"){w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=(w==null?null:w.c)!==!0}else w=!1
return w},
$S:z+3}
A.ei1.prototype={
$1(d){return d.b==="fan"},
$S:z+3}
A.eiO.prototype={
$0(){return this.a.cb_(this.b)},
$S:0}
A.eiQ.prototype={
$0(){var w=this.a
if(w.Q>=0)w.avc()
else{w.m(new A.eiC(w))
w.b1a()}},
$S:0}
A.eiC.prototype={
$0(){return this.a.as=0},
$S:0}
A.eiP.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.i0x(v,w.w.gu0()/1000,w.x)},
$S:z+7}
A.eiF.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kq(v.aGD())},
$S:0}
A.eiG.prototype={
$0(){var w=this.a
return w.m(new A.eiE(w,this.b))},
$S:0}
A.eiE.prototype={
$0(){var w,v=this.b.b
v.f=!v.f
v=this.a
w=v.d
w===$&&C.c()
v.r=A.Ci(w,new A.vO(v.z,v.Q,!1))},
$S:0}
A.eiH.prototype={
$0(){var w=this.a
return w.m(new A.eiD(w,this.b))},
$S:0}
A.eiD.prototype={
$0(){var w,v=this.b.b
v.e=!v.e
v=this.a
w=v.d
w===$&&C.c()
v.r=A.Ci(w,new A.vO(v.z,v.Q,!1))},
$S:0}
A.eiR.prototype={
$0(){var w=this.a
return w.m(new A.eiB(w,this.b))},
$S:0}
A.eiB.prototype={
$0(){var w,v=this.a
v.y=this.b
v.z=""
w=v.d
w===$&&C.c()
v.r=A.Ci(w,new A.vO("",v.Q,!1))},
$S:0}
A.eiS.prototype={
$0(){var w=this.a
return w.m(new A.eiA(w))},
$S:0}
A.eiA.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
v.aD4()
w.y=2
w.z=""
w.r=A.Ci(w.d,new A.vO("",w.Q,!1))
w.A3("The boxes, the cable and the walls are done. Now the wiring: pick an Outlet or a Switch from the tray, then tap its box on the wall.",!0)},
$S:0}
A.eiT.prototype={
$0(){var w=this.a
return w.m(new A.eiz(w,this.b))},
$S:0}
A.eiz.prototype={
$0(){var w,v=this.a,u=this.b.a,t=v.z===u?"":u
v.z=t
v.as=0
w=v.d
w===$&&C.c()
v.r=A.Ci(w,new A.vO(t,v.Q,!1))
if(v.z.length!==0)v.clB(u)},
$S:0}
A.eiU.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kq(v.cKR())},
$S:0}
A.eiV.prototype={
$1(d){return!this.a.b.b.iN(0,d.a)},
$S:z+12}
A.eiW.prototype={
$0(){var w=this.a
return w.m(new A.eiy(w,this.b,this.c))},
$S:0}
A.eiy.prototype={
$0(){var w,v=this,u=v.c,t=u.a
if(v.b.b.b.iN(0,t)){v.a.avf("That wire is already fastened. Tap the wire in the 3D view to take it off.")
return}w=v.a
if(w.at===t)t=""
w.at=t
if(t.length!==0)w.A3(u.b+": now tap the screw it belongs on, or press the matching button below.",!0)},
$S:0}
A.eiI.prototype={
$1(d){return!this.a.b.b.ag(0,d.a)},
$S:z+11}
A.eiJ.prototype={
$0(){var w=this.a
return w.aZW(w.Q,this.b.a)},
$S:0}
A.eiK.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kq(v.beW(w.Q))},
$S:0}
A.eiL.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kq(v.cP0(w.Q))},
$S:0}
A.eiM.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.kq(v.b9P(w.Q))},
$S:0}
A.eiN.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.cQ0(v.Q)
v.kq(w)
if(w.a)v.avc()},
$S:0}
A.eij.prototype={
$1(d){return new C.e2(new A.eii(this.a),null)},
$S:20}
A.eii.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=C.aI(d,l,x.w).w,j=this.a,i=j.d
i===$&&C.c()
w=i.c
w===$&&C.c()
v=x.p
i=C.a([C.d("Job: "+w,l,l,l,l,l,l,D.du,l,l,l),D.at,C.d("Mistakes "+i.f+" \xb7 Shocks "+i.r+" \xb7 Lives "+i.e,l,l,l,l,l,l,B.Ip,l,l,l),D.S,B.fgM,D.ao],v)
w=j.d.d
w===$&&C.c()
u=0
for(;u<4;++u){t=w[u]
s=D.c.j(0.05)
r=new C.aV(12,12)
q=new C.az(D.bF,1,D.r,-1)
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
i.push(C.p(l,new C.x(o+" "+n+" at "+p.b+m,l,D.rn,l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(s,l,new C.bP(q,q,q,q),new C.bp(r,r,r,r),l,l,D.n),l,l,l,D.eO,D.bR,l,l,l))}i.push(D.S)
i.push(C.A(C.a([B.buu,C.auk(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.eif(j,e),l,l,l,l,l,l,l,l,j.d.b)],v),D.m,l,D.e,D.j,0,l,l))
i.push(D.ao)
i.push(C.A(C.a([C.D(C.dT(B.f7_,new A.eig(j,d),l),1),D.ab,C.D(C.bJ(B.aPr,new A.eih(j,d),l),1)],v),D.m,l,D.e,D.j,0,l,l))
return C.bn(!0,new C.cU(new C.aY(0,1/0,0,k.a.b*0.8),C.cB(i,l,D.bU,l,l,D.ah,!0),l),!0,!1,D.ag,!0,!0)},
$S:89}
A.eif.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
v.b=d
for(v=v.at,v=new C.dt(v,v.r,v.e);v.C();)v.d.b.r=d
this.b.$1(new A.eid())
w.m(new A.eie())},
$S:9}
A.eid.prototype={
$0(){},
$S:0}
A.eie.prototype={
$0(){},
$S:0}
A.eig.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.avd(!0)},
$S:0}
A.eih.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.aWG()},
$S:0}
A.fe6.prototype={
$1(d){var w=this.a,v=d.a
return w>v[0]&&w<v[1]},
$S:704}
A.fe7.prototype={
$1(d){var w=this.a,v=d.a
return w>v[2]&&w<v[3]},
$S:704}
A.fkL.prototype={
$1(d){return 5000+this.a.a*100+d},
$S:74}
A.fkM.prototype={
$1(d){return 3000+this.a.a},
$S:74}
A.fkN.prototype={
$1(d){return 2000+this.a.a},
$S:74}
A.fkQ.prototype={
$5$col$round(d,e,f,g,h){var w=this.a
w.b=d
w.d=0.5
w.e=0.9
if(h)w.o5(e.aC(0,B.w7),e.ae(0,B.w7),f.a/2,g,14)
else w.cH(e,f,g)
w.e=0
w.d=1},
$3(d,e,f){return this.$5$col$round(d,e,f,D.b0,!1)},
$4$round(d,e,f,g){return this.$5$col$round(d,e,f,D.b0,g)},
$4$col(d,e,f,g){return this.$5$col$round(d,e,f,g,!1)},
$S:z+54}
A.fkO.prototype={
$3(d,e,f){return F.aOB(d,e,0,f+this.a.a*5)},
$S:319}
A.fkP.prototype={
$0(){var w,v=this.a
if(v.c)w="A place in the ceiling for a "+(v.e==="fan"?"fan (needs a fan-rated box)":"light")+"."
else w="A place on the wall at "+(v.e==="switch"?"switch height, about 48 inches from the floor":"outlet height, about 16 inches from the floor")+"."
return new A.da(v.b,w,A.a1F(v,B.a7w),26)},
$S:z+55}
A.fAO.prototype={
$1(d){return d.e==="fan"},
$S:z+19}
A.fAP.prototype={
$1(d){return d.b==="light"},
$S:z+3}
A.cnD.prototype={
$1(d){return d.a===this.a&&!d.c},
$S:z+8}
A.cnz.prototype={
$1(d){return d.a===B.YP},
$S:z+8}
A.cnB.prototype={
$1(d){return d.c},
$S:z+8}
A.cnC.prototype={
$1(d){return d.c},
$S:z+8}
A.cnA.prototype={
$1(d){return B.vA.h(0,d.a).e===this.a&&!d.c},
$S:z+8}
A.eki.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.ekj.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ekh(w))},
$S:0}
A.ekh.prototype={
$0(){return this.a.z=null},
$S:0}
A.ek7.prototype={
$0(){return this.a.y=0},
$S:0}
A.ekc.prototype={
$0(){return this.a.as=!0},
$S:0}
A.ekd.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ekb(w))},
$S:11}
A.ekb.prototype={
$0(){return this.a.as=!1},
$S:0}
A.eke.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
w.r=A.af2(v.d)
w.y=this.b},
$S:0}
A.ekf.prototype={
$1(d){return this.a.cb6()},
$S:8}
A.ekg.prototype={
$1(d){return this.a.c2r()},
$S:8}
A.eka.prototype={
$1(d){var w=null
return C.eh(C.a([C.bJ(B.fed,new A.ek9(this.a,d),w)],x.p),w,w,E.mO,B.fdm,w,w,w,w,B.fjl,w)},
$S:19}
A.ek9.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.auD()},
$S:0}
A.ek6.prototype={
$1(d){var w=null,v=this.a,u=v.d
u===$&&C.c()
u=C.d("Every problem on the customer's list is fixed.\n\nMistakes: "+u.f+"\nShocks: "+u.r+"\nLives left: "+u.e+"\n\nThe next call will have different problems.",w,w,w,w,w,w,B.a6A,w,w,w)
return C.eh(C.a([C.bK(!1,B.aPp,w,w,!0,w,w,new A.ek4(d),w,w),C.bJ(B.ffr,new A.ek5(v,d),w)],x.p),w,w,E.mO,u,w,w,w,w,B.flC,w)},
$S:19}
A.ek4.prototype={
$0(){C.a5(this.a,!1).N(null)
return null},
$S:0}
A.ek5.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.auD()},
$S:0}
A.ek8.prototype={
$0(){var w,v,u=this.a
u.e=D.o.F(Date.now(),1e5)
w=u.gCh(0)
v=u.d
v===$&&C.c()
w=A.h4I(v.b,w)
u.d=w
u.r=A.af2(w.d)
u.at=!1
u.z=null
u.y=0},
$S:0}
A.ekv.prototype={
$0(){return this.a.cvf(this.b)},
$S:0}
A.ekr.prototype={
$1(d){return d<=5},
$S:34}
A.ekq.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.hd_(v.d,w.w.gu0()/1000)},
$S:z+7}
A.eks.prototype={
$1(d){return!d.c},
$S:z+8}
A.ekt.prototype={
$1(d){return B.vA.h(0,d.a).a},
$S:z+37}
A.eku.prototype={
$0(){var w=this.a
return w.m(new A.ekp(w,this.b))},
$S:0}
A.ekp.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.eko.prototype={
$1(d){return new C.e2(new A.ekn(this.a),null)},
$S:20}
A.ekn.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([B.fbQ,D.at,C.d("Mistakes "+j.f+" \xb7 Shocks "+j.r+" \xb7 Lives "+j.e,l,l,l,l,l,l,B.Ip,l,l,l),D.S],w)
v=k.d.c
v===$&&C.c()
u=v.length
t=0
for(;t<v.length;v.length===u||(0,C.L)(v),++t){s=v[t]
r=D.c.j(0.05)
q=new C.aV(14,14)
p=new C.az(s.c?D.bc.j(0.6):D.bF,1,D.r,-1)
o=s.c?"\u2705":"\ud83d\udd27"
n=B.vA.h(0,s.a).a
m=s.c?D.ay:D.c
j.push(C.p(l,new C.x(o+" "+n,l,new C.F(!0,m,l,l,l,l,13.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),D.f,l,l,new C.o(r,l,new C.bP(p,p,p,p),new C.bp(q,q,q,q),l,l,D.n),l,l,l,D.cG,D.bk,l,l,l))}j.push(D.ao)
j.push(B.fgW)
j.push(D.P)
j.push(C.A(C.a([B.btu,C.auk(l,l,l,l,!1,D.y,l,l,l,l,l,l,new A.ekl(k,e),l,l,l,l,l,l,l,l,k.d.b)],w),D.m,l,D.e,D.j,0,l,l))
j.push(C.bJ(B.fjL,new A.ekm(k,d),l))
return C.bn(!0,C.cB(j,l,D.bU,l,l,D.ah,!0),!0,!1,D.ag,!0,!0)},
$S:89}
A.ekl.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w.b=d
this.b.$1(new A.ekk())},
$S:9}
A.ekk.prototype={
$0(){},
$S:0}
A.ekm.prototype={
$0(){C.a5(this.b,!1).N(null)
this.a.auD()},
$S:0}
A.f7s.prototype={
$1(d){return d.c===this.a},
$S:z+14}
A.bOV.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=w.a,u=v.as,t=u.length,s=t-1,r=0,q=0;q<t;++q,r=o){p=u[q]
o=r+p
if(d<=o||q===s){n=p===0?0:D.k.D((d-r)/p,0,1)
v=w.a.b
u=v[q]
t=u.a
v=v[q+1]
u=u.b
return new C.z(t+(v.a-t)*n,u+(v.b-u)*n)}}w=v.b
w.toString
return D.d.gal(w)},
$S:1797};(function aliases(){var w=A.aLm.prototype
w.bu_=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a.installInstanceTearOff,u=a._instance_1u,t=a._instance_0i
var s
w(s=A.aCc.prototype,"gOH","ko",0)
v(s,"gc21",0,1,null,["$2$keepTour","$1"],["av9","acl"],28,0,0)
u(s,"gc23","c24",5)
w(s,"gcx1","cx2",13)
w(s,"gcsB","ah4",0)
w(s,"gc22","DF",13)
w(s,"gcaU","ZQ",13)
w(s,"gcaj","ZH",13)
w(s,"gbwV","bwW",13)
w(s,"gc27","c28",0)
w(s,"gciJ","ciK",0)
t(s,"gc25","c26",0)
w(s=A.ay3.prototype,"gc2c","xn",0)
w(s,"gId","nT",0)
u(s,"gIe","If",5)
w(s,"gcfQ","cfR",0)
w(s,"gcuH","cuI",0)
w(s=A.aDZ.prototype,"gId","nT",0)
u(s,"gIe","If",5)
w(s,"gc2d","c2e",0)
w(s=A.ayi.prototype,"gId","nT",0)
u(s,"gIe","If",5)
t(s,"gc2a","c2b",0)
w(s=A.azb.prototype,"gId","nT",0)
u(s,"gIe","If",5)
w(s=A.aCH.prototype,"gc2g","aWE",0)
u(s,"gc2h","c2i",5)
u(A.b3k.prototype,"ganT","blD",50)
w(s=A.aCO.prototype,"gbMS","aR8",0)
w(s,"gbzs","bzt",0)
w(s,"gc2l","avc",0)
u(s,"gc2n","c2o",5)
w(s=A.aCS.prototype,"gc2s","aWI",0)
u(s,"gc2t","c2u",5)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(C.aC,[A.K,A.qm,A.da,A.ub,A.zk,A.Wv,A.l4,A.bOM,A.J9,A.md,A.Xs,A.zI,A.a3o,A.BK,A.aTj,A.q9,A.Df,A.u7,A.oE,A.aTx,A.a3S,A.aTC,A.bOW,A.F8,A.jw,A.LY,A.cft,A.Ek,A.na,A.VW,A.cfj,A.yo,A.pF,A.WB,A.atF,A.aS_,A.eC,A.b3k,A.kT,A.vO,A.tZ,A.Lp,A.cny,A.b1s,A.Hm,A.ckd,A.Jc,A.boN,A.bOU])
v(C.hS,[A.bUG,A.bUH,A.bUF,A.bUI,A.bUJ,A.fIU,A.fIS,A.fIT,A.fIR,A.fIL,A.cl7,A.cl8,A.cl4,A.cl5,A.eQz,A.eQy,A.eQv,A.eQw,A.eQx,A.flN,A.fJ8,A.flT,A.flU,A.flR,A.flS,A.flP,A.flQ,A.fjU,A.fjV,A.f7r,A.fjJ,A.bOd,A.bOO,A.bOP,A.bOT,A.bOS,A.bOR,A.bOQ,A.e0z,A.e0x,A.e0y,A.e_T,A.e0s,A.e0r,A.e0k,A.e0f,A.e06,A.e_E,A.e_F,A.e0t,A.e_H,A.e_G,A.e_0,A.dZV,A.dZW,A.dZX,A.e0v,A.e_7,A.e_6,A.e_2,A.e_Z,A.dlx,A.fjX,A.fjY,A.fjZ,A.fk0,A.fk1,A.fk2,A.feC,A.feo,A.fep,A.feq,A.fer,A.feu,A.fev,A.few,A.fex,A.fey,A.fez,A.feA,A.feB,A.fes,A.fet,A.fk9,A.fk5,A.fk8,A.fk7,A.dJd,A.fBi,A.fBh,A.d1i,A.d1k,A.d1A,A.d1G,A.eKc,A.eKk,A.eKl,A.d4g,A.d4q,A.d4r,A.d4t,A.dbk,A.dbv,A.dbu,A.dbx,A.fkK,A.fkJ,A.fkI,A.fjW,A.fma,A.cfn,A.cfo,A.cfk,A.cfp,A.cfq,A.cfr,A.cfs,A.cfl,A.cfm,A.fkH,A.fkF,A.fkz,A.fkC,A.fkA,A.fkB,A.fkG,A.fkD,A.fkE,A.fAu,A.fAt,A.eea,A.edW,A.ee0,A.eeb,A.eed,A.eec,A.ee5,A.ee3,A.fIK,A.ckh,A.cko,A.ckp,A.ckq,A.ckr,A.ckt,A.cks,A.ckg,A.cke,A.ckf,A.ckm,A.ckn,A.cki,A.ckj,A.ckk,A.ckl,A.ehM,A.ehN,A.eik,A.ehU,A.ehR,A.eia,A.eib,A.ehY,A.ehZ,A.ei_,A.ei2,A.ei3,A.ei4,A.ei5,A.ei6,A.ei7,A.ei8,A.ei9,A.ei0,A.ei1,A.eiP,A.eiV,A.eiI,A.eij,A.eif,A.fe6,A.fe7,A.fkL,A.fkM,A.fkN,A.fkQ,A.fkO,A.fAO,A.fAP,A.cnD,A.cnz,A.cnB,A.cnC,A.cnA,A.ekf,A.ekg,A.eka,A.ek6,A.ekr,A.ekq,A.eks,A.ekt,A.eko,A.ekl,A.f7s,A.bOV])
v(C.kc,[A.bUE,A.cl6,A.fmS,A.fmT,A.fmU,A.fmV,A.fmW,A.f67,A.e0q,A.e0e,A.fk4,A.fk_,A.fk3,A.fk6,A.d1l,A.eKh,A.d4f,A.fmb,A.cku,A.eii,A.ekn])
u(A.Ay,C.oA)
v(C.mF,[A.b3x,A.bfY])
v(C.ag,[A.atc,A.aoP,A.MB,A.GN,A.a8d,A.a3F,A.aza,A.UW,A.UZ,A.apL])
v(C.ah,[A.aLm,A.aCc,A.bhv,A.ay3,A.aDZ,A.ayi,A.azb,A.aCH,A.aCO,A.aCS])
u(A.boB,A.aLm)
v(C.j2,[A.fjK,A.e02,A.e03,A.e01,A.e04,A.e_C,A.e09,A.e_J,A.e_K,A.e_L,A.e_M,A.e_N,A.e_I,A.e_O,A.e_R,A.e_Q,A.e_S,A.e_P,A.e0j,A.e0i,A.e0l,A.e0m,A.e0n,A.e0o,A.e0p,A.e0c,A.e0b,A.e0d,A.e05,A.e07,A.e0g,A.e0a,A.e08,A.e__,A.dZY,A.e_D,A.e0h,A.e0_,A.e00,A.dZZ,A.e_r,A.e_s,A.e_t,A.e_u,A.e_v,A.e_w,A.e_q,A.e_x,A.e_p,A.e_y,A.e_o,A.e_z,A.e_n,A.e_A,A.e_m,A.e_B,A.e0w,A.e0u,A.e_d,A.e_8,A.e_e,A.e_5,A.e_f,A.e_g,A.e_4,A.e_h,A.e_3,A.e_i,A.e_j,A.e_k,A.e_l,A.e_9,A.e_a,A.e_b,A.e_c,A.e_1,A.e_W,A.e_X,A.e_V,A.e_Y,A.e_U,A.fl3,A.dJg,A.dJh,A.dJf,A.dJi,A.dJe,A.dJk,A.dJl,A.dJm,A.dJn,A.dJo,A.dJp,A.dJq,A.dJr,A.dJj,A.coM,A.coN,A.bR0,A.d1q,A.d1r,A.d1p,A.d1j,A.d1m,A.d1n,A.d1o,A.d1s,A.d1D,A.d1B,A.d1z,A.d1C,A.d1y,A.d1E,A.d1F,A.d1H,A.d1x,A.d1I,A.d1w,A.d1J,A.d1v,A.d1K,A.d1u,A.d1L,A.d1t,A.eKf,A.eKg,A.eKe,A.eK8,A.eK9,A.eKa,A.eKb,A.eKd,A.eKo,A.eKm,A.eKj,A.eKn,A.eKi,A.d4l,A.d4m,A.d4k,A.d4d,A.d4h,A.d4i,A.d4j,A.d4e,A.d4w,A.d4s,A.d4p,A.d4u,A.d4o,A.d4v,A.d4n,A.dbp,A.dbq,A.dbo,A.dbj,A.dbl,A.dbm,A.dbn,A.dby,A.dbt,A.dbw,A.dbs,A.dbr,A.c4G,A.fkw,A.fkx,A.fky,A.ee8,A.ee9,A.ee7,A.ee1,A.edU,A.edV,A.edZ,A.ee_,A.ee6,A.edY,A.edX,A.eef,A.eee,A.ee2,A.ee4,A.eiv,A.eiw,A.eiu,A.ehK,A.ehL,A.ehJ,A.ehV,A.ehO,A.eic,A.ehW,A.eir,A.eis,A.eit,A.eip,A.eiq,A.eio,A.eil,A.eim,A.ein,A.eix,A.ehS,A.ehT,A.ehP,A.ehQ,A.ehX,A.eiO,A.eiQ,A.eiC,A.eiF,A.eiG,A.eiE,A.eiH,A.eiD,A.eiR,A.eiB,A.eiS,A.eiA,A.eiT,A.eiz,A.eiU,A.eiW,A.eiy,A.eiJ,A.eiK,A.eiL,A.eiM,A.eiN,A.eid,A.eie,A.eig,A.eih,A.fkP,A.eki,A.ekj,A.ekh,A.ek7,A.ekc,A.ekd,A.ekb,A.eke,A.ek9,A.ek4,A.ek5,A.ek8,A.ekv,A.eku,A.ekp,A.ekk,A.ekm])
v(C.au,[A.bgz,A.b4P,A.AS,A.a5K])
u(A.qQ,C.m0)
w(A.aLm,C.c8)})()
C.jR(b.typeUniverse,JSON.parse('{"atc":{"ag":[],"r":[]},"Ay":{"aB":[]},"b3x":{"aB":[]},"boB":{"ah":["atc"]},"aoP":{"ag":[],"r":[]},"aCc":{"ah":["aoP"]},"bgz":{"au":[],"r":[]},"bfY":{"aB":[]},"GN":{"ag":[],"r":[]},"a8d":{"ag":[],"r":[]},"a3F":{"ag":[],"r":[]},"aza":{"ag":[],"r":[]},"MB":{"ag":[],"r":[]},"bhv":{"ah":["MB"]},"b4P":{"au":[],"r":[]},"AS":{"au":[],"r":[]},"ay3":{"ah":["GN"]},"aDZ":{"ah":["a8d"]},"ayi":{"ah":["a3F"]},"azb":{"ah":["aza"]},"a5K":{"au":[],"r":[]},"UW":{"ag":[],"r":[]},"aCH":{"ah":["UW"]},"UZ":{"ag":[],"r":[]},"aCO":{"ah":["UZ"]},"apL":{"ag":[],"r":[]},"aCS":{"ah":["apL"]}}'))
var y={g:"A shut-off valve goes on the pipe that comes out of the wall.",x:"Fasten the bare copper ground to the GREEN screw.",s:"Pick a paint colour above to change this wall.",E:"Switch the power on and flip the wall switch.",j:"The bare copper ground wire only goes on the GREEN screw.",u:"The gold screws are BRASS. They are for the HOT wire (black).",o:"The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).",r:"Turn the breaker OFF and test that the wires are dead."}
var x=(function rtii(){var w=C.ax
return{l:w("bq<n,n>"),M:w("eV<n>"),W:w("aS_"),F:w("qQ"),j:w("ay<LG?>"),O:w("P<w>"),c:w("P<Lp>"),_:w("P<aTj>"),D:w("P<oE>"),I:w("P<aTx>"),A:w("P<a3S>"),r:w("P<md>"),E:w("P<ub>"),Z:w("P<jw>"),T:w("P<Hm>"),g:w("P<u>"),B:w("P<pF>"),v:w("P<na>"),k:w("P<hm>"),z:w("P<qm>"),J:w("P<+(a7E,G)>"),L:w("P<+(n,n)>"),f:w("P<+(O,O)>"),K:w("P<+(G,n)>"),Q:w("P<+(G,O,R)>"),V:w("P<+(O,O,O,O)>"),R:w("P<+(G,G,O,R,n)>"),h:w("P<Wv>"),X:w("P<WB>"),s:w("P<n>"),o:w("P<K>"),p:w("P<r>"),d:w("P<zI>"),G:w("P<J9>"),a:w("P<Jc>"),b:w("P<kT>"),m:w("P<boN>"),u:w("P<R>"),n:w("P<O>"),t:w("P<G>"),U:w("P<aB?>"),Y:w("cp<ah<ag>>"),w:w("iy"),P:w("cn"),q:w("da"),e:w("u"),C:w("Im"),a1:w("qm"),cb:w("dw<G>"),al:w("atF"),N:w("n"),be:w("bm<O>"),x:w("K"),ba:w("cw<G>"),br:w("a2<Ek>"),bw:w("a2<n>"),bS:w("a2<G>"),y:w("R"),i:w("O"),S:w("G"),cG:w("LG?"),aP:w("pI?"),H:w("~")}})();(function constants(){var w=a.makeConstList
B.aSY=new A.eC(!0,"The water is on and nothing leaks. Perfect job!",!1,"")
B.aSZ=new A.eC(!0,"Primer and paint rolled on.",!1,"")
B.aT_=new A.eC(!1,"This call is over. Start a new one.",!1,"")
B.aT0=new A.eC(!1,"That is not a place for a sheet.",!1,"")
B.aT1=new A.eC(!0,"Sanded smooth. Wear a mask: the dust is bad to breathe.",!1,"")
B.a8v=new A.eC(!1,"There is no device here.",!1,"")
B.aT2=new A.eC(!0,"You look closely. Everything looks fine here.",!1,"")
B.aT3=new A.eC(!1,"ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.",!0,"shock")
B.aT4=new A.eC(!0,"Paper tape pressed into the seam.",!1,"")
B.aT5=new A.eC(!0,"Unplugged.",!1,"")
B.aT6=new A.eC(!0,"Breaker OFF. It is safe to work on the wires.",!1,"")
B.aT7=new A.eC(!1,"ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.",!0,"shock")
B.aT8=new A.eC(!1,"There is nothing there.",!1,"")
B.aT9=new A.eC(!1,"The outlet is burnt. Nothing works. Pull it out and put in a new one.",!0,"")
B.aTa=new A.eC(!0,"The water is on and nothing leaks yet, but the job is not finished.",!1,"")
B.aTb=new A.eC(!0,"Sheet hung. Now screw it to the studs.",!1,"")
B.aTc=new A.eC(!0,"Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.",!1,"")
B.aTd=new A.eC(!0,"Plugged in. Nothing happens because the breaker is off. Turn it on to test.",!1,"")
B.aTe=new A.eC(!0,"You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.",!1,"")
B.aTf=new A.eC(!0,"Click.",!1,"")
B.aTg=new A.eC(!0,"The wires are folded back and the device is in the box. Now put the cover on.",!1,"")
B.aTh=new A.eC(!0,"Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)",!1,"")
B.aTi=new A.eC(!1,"Nothing is wet.",!1,"")
B.aTj=new A.eC(!0,"Power is on.",!1,"")
B.aTk=new A.eC(!0,"Water OFF at the main valve. You can cut into the pipes safely now.",!1,"")
B.aTl=new A.eC(!0,"Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.",!1,"")
B.aTm=new A.eC(!0,"Device pulled out of the box.",!1,"")
B.aTn=new A.eC(!0,"Screw set just below the paper, not through it.",!1,"")
B.aTo=new A.eC(!1,"ZAP! You touched a live wire. In Learn mode you are not hurt, but in real life this can kill. Switch the breaker OFF and test the wires first.",!0,"shock")
B.aTp=new A.eC(!0,"Cover on. Now you can turn the breaker on and test.",!1,"")
B.U8=new A.eC(!1,"",!1,"")
B.aTq=new A.eC(!0,"Device taken out. You can put it somewhere else, or put in a new one.",!1,"")
B.aTr=new A.eC(!0,"Breaker back ON.",!1,"")
B.aTs=new A.eC(!1,"That is not a stud.",!1,"")
B.aTt=new A.eC(!0,"Off.",!1,"")
B.aTu=new A.eC(!1,"Nothing to flip yet.",!1,"")
B.aTv=new A.eC(!0,"Wire taken off.",!1,"")
B.aTw=new A.eC(!0,"The mud is dry.",!1,"")
B.aTx=new A.eC(!0,"Breaker reset.",!1,"")
B.aTy=new A.eC(!0,"Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)",!1,"")
B.fl7=new C.x("Tap a piece of furniture, or add one:",null,N.Sw,null,null,null,null,null,null,null,null,null)
B.e1C=new C.C(D.nH,B.fl7,null)
B.aTF=new C.bI(D.a3,null,null,B.e1C,null)
B.Kn=new C.w(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,D.t)
B.aWz=new C.bP(D.Y,D.Y,V.uw,D.Y)
B.aZ0=new C.o(B.Kn,null,B.aWz,null,null,null,D.n)
B.flJ=new C.x("\u2600\ufe0f Let it dry",null,H.za,null,null,null,null,null,null,null,null,null)
B.b22=new C.cr(D.A,null,null,B.flJ,null)
B.flv=new C.x("\u23e9 Skip to the wiring",null,H.za,null,null,null,null,null,null,null,null,null)
B.b2a=new C.cr(D.A,null,null,B.flv,null)
B.fax=new C.x("\ud83c\udfd7\ufe0f",null,D.uj,null,null,null,null,null,null,null,null,null)
B.b2p=new C.cr(D.A,null,null,B.fax,null)
B.b44=new C.w(1,0.9294117647058824,0.9098039215686274,0.8627450980392157,D.t)
B.JP=new C.w(1,0.1803921568627451,0.20392156862745098,0.25098039215686274,D.t)
B.b4f=new C.w(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,D.t)
B.JQ=new C.w(1,0.5450980392156862,0.3686274509803922,0.20392156862745098,D.t)
B.b4q=new C.w(1,0.611764705882353,0.5568627450980392,0.4588235294117647,D.t)
B.aaN=new C.w(1,0.24705882352941178,0.5607843137254902,0.30980392156862746,D.t)
B.wD=new C.w(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,D.t)
B.zS=new C.w(1,0.8784313725490196,0.6431372549019608,0.48627450980392156,D.t)
B.b4X=new C.w(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,D.t)
B.b4Y=new C.w(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,D.t)
B.b54=new C.w(1,0.10588235294117647,0.4980392156862745,0.20392156862745098,D.t)
B.aaY=new C.w(1,0.7215686274509804,0.7450980392156863,0.7725490196078432,D.t)
B.DD=new C.w(1,0.5450980392156862,0.3686274509803922,0.23529411764705882,D.t)
B.ab_=new C.w(1,0.8509803921568627,0.8274509803921568,0.7725490196078432,D.t)
B.ab3=new C.w(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,D.t)
B.rK=new C.w(1,0.16862745098039217,0.17647058823529413,0.2,D.t)
B.b5w=new C.w(1,0.796078431372549,0.5490196078431373,0.39215686274509803,D.t)
B.b5B=new C.w(1,0.13333333333333333,0.13725490196078433,0.14901960784313725,D.t)
B.DF=new C.w(1,0.8980392156862745,0.7529411764705882,0.4823529411764706,D.t)
B.K_=new C.w(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,D.t)
B.V6=new C.w(1,0.5411764705882353,0.41568627450980394,0.2784313725490196,D.t)
B.abf=new C.w(1,0.2980392156862745,0.5450980392156862,0.2901960784313726,D.t)
B.rM=new C.w(1,0.788235294117647,0.6274509803921569,0.22745098039215686,D.t)
B.abg=new C.w(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,D.t)
B.abi=new C.w(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,D.t)
B.b6B=new C.w(1,0.47843137254901963,0.35294117647058826,0.22745098039215686,D.t)
B.kA=new C.w(1,0.788235294117647,0.807843137254902,0.8392156862745098,D.t)
B.Vb=new C.w(1,0.4196078431372549,0.45098039215686275,0.5019607843137255,D.t)
B.abo=new C.w(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,D.t)
B.zW=new C.w(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,D.t)
B.b7p=new C.w(1,0.22745098039215686,0.22745098039215686,0.24705882352941178,D.t)
B.b7u=new C.w(1,0.5490196078431373,0.5764705882352941,0.6078431372549019,D.t)
B.DO=new C.w(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,D.t)
B.Vg=new C.w(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,D.t)
B.Vi=new C.w(1,0.10588235294117647,0.11372549019607843,0.13333333333333333,D.t)
B.abC=new C.w(1,0.30980392156862746,0.6588235294117647,0.3764705882352941,D.t)
B.abD=new C.w(1,0.8509803921568627,0.803921568627451,0.7215686274509804,D.t)
B.Ka=new C.w(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,D.t)
B.b7R=new C.w(1,0.8862745098039215,0.8745098039215686,0.8235294117647058,D.t)
B.b87=new C.w(1,0.5411764705882353,0.4823529411764706,0.41568627450980394,D.t)
B.b8b=new C.w(1,0.34901960784313724,0.3176470588235294,0.29411764705882354,D.t)
B.b8i=new C.w(1,0.8117647058823529,0.792156862745098,0.7411764705882353,D.t)
B.Vp=new C.w(1,0.8117647058823529,0.8901960784313725,0.9176470588235294,D.t)
B.Vq=new C.w(1,0.3333333333333333,0.396078431372549,0.4823529411764706,D.t)
B.Vr=new C.w(1,0.5529411764705883,0.7843137254901961,1,D.t)
B.Vu=new C.w(1,1,0.9019607843137255,0.5019607843137255,D.t)
B.b8H=new C.w(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,D.t)
B.abX=new C.w(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,D.t)
B.b8Z=new C.w(1,0.9686274509803922,0.9607843137254902,0.9333333333333333,D.t)
B.nv=new C.w(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,D.t)
B.b97=new C.w(1,0.788235294117647,0.7176470588235294,0.6078431372549019,D.t)
B.Vx=new C.w(1,0.8901960784313725,0.6627450980392157,0.10980392156862745,D.t)
B.DV=new C.w(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,D.t)
B.b9j=new C.w(1,0.22745098039215686,0.49019607843137253,0.26666666666666666,D.t)
B.uF=new C.w(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,D.t)
B.b9u=new C.w(1,0.3686274509803922,0.17647058823529413,0.13725490196078433,D.t)
B.DX=new C.w(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,D.t)
B.A2=new C.w(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,D.t)
B.acf=new C.w(1,0.9450980392156862,0.9568627450980393,0.9725490196078431,D.t)
B.b9T=new C.w(1,0.9019607843137255,0.9019607843137255,0.8784313725490196,D.t)
B.VE=new C.w(1,0.8941176470588236,0.9058823529411765,0.9176470588235294,D.t)
B.m1=new C.w(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,D.t)
B.act=new C.w(1,1,0.35294117647058826,0.12156862745098039,D.t)
B.VJ=new C.w(1,0.16470588235294117,0.10196078431372549,0.06274509803921569,D.t)
B.baE=new C.w(1,0.5411764705882353,0.29411764705882354,0.29411764705882354,D.t)
B.VM=new C.w(1,0.9098039215686274,0.8509803921568627,0.7372549019607844,D.t)
B.A7=new C.w(1,1,0.9450980392156862,0.6588235294117647,D.t)
B.baX=new C.w(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,D.t)
B.baZ=new C.w(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,D.t)
B.bb7=new C.w(1,0.47843137254901963,0.23137254901960785,0.1803921568627451,D.t)
B.bbe=new C.w(1,0.6078431372549019,0.6078431372549019,0.592156862745098,D.t)
B.A9=new C.w(1,0.9568627450980393,0.9450980392156862,0.9176470588235294,D.t)
B.rW=new C.w(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,D.t)
B.pc=new C.w(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,D.t)
B.acE=new C.w(1,0.788235294117647,0.8117647058823529,0.8392156862745098,D.t)
B.bbu=new C.w(1,0.9294117647058824,0.9215686274509803,0.8941176470588236,D.t)
B.VU=new C.w(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,D.t)
B.acH=new C.w(1,0.9098039215686274,0.9098039215686274,0.9098039215686274,D.t)
B.bbG=new C.w(1,0.16862745098039217,0.2980392156862745,0.49411764705882355,D.t)
B.E6=new C.w(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,D.t)
B.acN=new C.w(1,0.3686274509803922,0.43137254901960786,0.5176470588235295,D.t)
B.bc8=new C.w(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,D.t)
B.acR=new C.w(1,0.23137254901960785,0.1843137254901961,0.14901960784313725,D.t)
B.acS=new C.w(1,0.8509803921568627,0.788235294117647,0.6588235294117647,D.t)
B.qw=new C.w(1,0.9686274509803922,0.9568627450980393,0.9254901960784314,D.t)
B.bcl=new C.w(1,0.13333333333333333,0.1450980392156863,0.16862745098039217,D.t)
B.VZ=new C.w(1,0.4980392156862745,0.7215686274509804,1,D.t)
B.wO=new C.w(1,0.16470588235294117,0.1450980392156863,0.13725490196078433,D.t)
B.bcs=new C.w(1,0.5411764705882353,0.23137254901960785,0.23137254901960785,D.t)
B.bct=new C.w(1,0.9450980392156862,0.9294117647058824,0.8784313725490196,D.t)
B.Kp=new C.w(1,0.796078431372549,0.8156862745098039,0.8392156862745098,D.t)
B.W1=new C.w(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,D.t)
B.bcP=new C.w(1,0.7490196078431373,0.8901960784313725,1,D.t)
B.W5=new C.w(1,0.10588235294117647,0.10588235294117647,0.11372549019607843,D.t)
B.adb=new C.w(1,0.9490196078431372,0.9490196078431372,0.9333333333333333,D.t)
B.bdt=new C.w(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,D.t)
B.bdJ=new C.w(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,D.t)
B.bdP=new C.w(1,0.8509803921568627,0.788235294117647,0.6274509803921569,D.t)
B.Wa=new C.w(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,D.t)
B.ads=new C.w(1,0.10588235294117647,0.07058823529411765,0.03529411764705882,D.t)
B.bec=new C.w(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,D.t)
B.Ky=new C.w(1,0.8862745098039215,0.27058823529411763,0.35294117647058826,D.t)
B.wT=new C.w(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,D.t)
B.wU=new C.w(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,D.t)
B.KB=new C.w(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,D.t)
B.adL=new C.w(1,0.9686274509803922,0.9490196078431372,0.9019607843137255,D.t)
B.bfb=new C.w(1,0.2,0.21176470588235294,0.23137254901960785,D.t)
B.bfg=new C.w(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,D.t)
B.bfi=new C.w(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,D.t)
B.bfn=new C.w(1,0.9098039215686274,0.8941176470588236,0.8549019607843137,D.t)
B.adT=new C.w(1,0.7686274509803922,0.5411764705882353,0.11764705882352941,D.t)
B.bfv=new C.w(1,0.43529411764705883,0.7137254901960784,1,D.t)
B.bfF=new C.w(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,D.t)
B.adZ=new C.w(1,0.18823529411764706,0.2,0.22745098039215686,D.t)
B.KH=new C.w(1,0.9372549019607843,0.9372549019607843,0.9176470588235294,D.t)
B.ae0=new C.w(0.6666666666666666,1,0.16470588235294117,0.10196078431372549,D.t)
B.bfS=new C.w(1,0.9372549019607843,0.9137254901960784,0.8627450980392157,D.t)
B.bfV=new C.w(1,0.9294117647058824,0.9019607843137255,0.8156862745098039,D.t)
B.Wq=new C.w(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,D.t)
B.bg_=new C.w(1,0.12156862745098039,0.6392156862745098,0.2627450980392157,D.t)
B.bg1=new C.w(1,0.803921568627451,0.6274509803921569,0.2,D.t)
B.KK=new C.w(1,0.3607843137254902,0.7019607843137254,1,D.t)
B.aea=new C.w(1,0.9568627450980393,0.9568627450980393,0.9411764705882353,D.t)
B.bgE=new C.w(1,0.8431372549019608,0.8,0.6588235294117647,D.t)
B.bhc=new C.w(1,0.9019607843137255,0.8745098039215686,0.796078431372549,D.t)
B.WA=new C.w(1,0.1843137254901961,0.43529411764705883,0.7098039215686275,D.t)
B.bhd=new C.w(1,0.30980392156862746,0.6588235294117647,1,D.t)
B.bhh=new C.w(1,1,0.6196078431372549,0.6196078431372549,D.t)
B.ael=new C.w(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,D.t)
B.KP=new C.w(1,0.47843137254901963,0.30980392156862746,0.1568627450980392,D.t)
B.Ak=new C.w(1,0.6901960784313725,0.5411764705882353,0.3568627450980392,D.t)
B.KR=new C.w(1,0.6078431372549019,0.8274509803921568,0.9607843137254902,D.t)
B.bhK=new C.w(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,D.t)
B.bhL=new C.w(1,0.23137254901960785,0.6078431372549019,1,D.t)
B.bhT=new C.w(1,0.8509803921568627,0.8235294117647058,0.7607843137254902,D.t)
B.bhV=new C.w(1,0.29411764705882354,0.29411764705882354,0.3137254901960784,D.t)
B.Et=new C.w(1,0.4196078431372549,0.2901960784313726,0.19607843137254902,D.t)
B.aer=new C.w(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,D.t)
B.bi_=new C.w(1,0.8117647058823529,0.788235294117647,0.7215686274509804,D.t)
B.bi7=new C.w(1,0.5450980392156862,0.4196078431372549,0.24705882352941178,D.t)
B.Xr=new C.Q(11,9,11,9)
B.afZ=new C.Q(14,8,14,24)
B.agV=new C.Q(4,18,4,8)
B.bs5=new C.Q(4,4,8,4)
B.fqF=new C.x("Practice mode (no explanations, real shocks)",null,D.SV,null,null,null,null,null,null,null,null,null)
B.btu=new C.bE(1,D.bi,B.fqF,null)
B.fms=new C.x("Practice mode (no hints, no labels)",null,D.SV,null,null,null,null,null,null,null,null,null)
B.btv=new C.bE(1,D.bi,B.fms,null)
B.f0z=new C.F(!0,D.aJ,null,null,null,null,18,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.feY=new C.x("My House",null,B.f0z,null,null,null,null,null,null,null,null,null)
B.eUW=new C.F(!0,D.ad,null,null,null,null,12.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f7g=new C.x("5 bedrooms, 3 bathrooms. Walk in and fix what is wrong.",null,B.eUW,null,null,null,null,null,null,null,null,null)
B.cTu=w([B.feY,D.bz,B.f7g],x.p)
B.biL=new C.fl(D.ah,D.e,D.j,D.F,null,D.p,null,0,B.cTu,null)
B.btM=new C.bE(1,D.bi,B.biL,null)
B.feC=new C.x("Construction Lab",null,Q.vW,null,null,null,null,null,null,null,null,null)
B.f43=new C.x("Wire it. Plumb it. Fix a house.",null,D.hn,null,null,null,null,null,null,null,null,null)
B.cWS=w([B.feC,B.f43],x.p)
B.biS=new C.fl(D.ah,D.e,D.j,D.F,null,D.p,null,0,B.cWS,null)
B.btP=new C.bE(1,D.bi,B.biS,null)
B.fm7=new C.x("Practice mode (no hints, real shocks and fires)",null,D.SV,null,null,null,null,null,null,null,null,null)
B.buu=new C.bE(1,D.bi,B.fm7,null)
B.bvd=new A.a3F(null,null)
B.YN=new A.qQ(0,"tripped")
B.YO=new A.qQ(1,"noHotWater")
B.YP=new A.qQ(10,"wallHole")
B.YQ=new A.qQ(11,"clogged")
B.LZ=new A.qQ(2,"nutLeak")
B.M_=new A.qQ(3,"pexLeak")
B.YR=new A.qQ(5,"flicker")
B.YS=new A.qQ(6,"burntOutlet")
B.YT=new A.qQ(7,"gfciTripped")
B.YU=new A.qQ(8,"runningToilet")
B.YV=new A.qQ(9,"dripFaucet")
B.bwi=new A.oE("back",0,10)
B.bwj=new A.oE("back",56,11)
B.bwk=new A.oE("left",32,9)
B.bwl=new A.oE("left",40,9)
B.bwm=new A.oE("right",32,10)
B.bwn=new A.oE("right",40,10)
B.Z2=new A.oE("right",50,5)
B.ai0=new A.u7("tv",'Samsung Neo QLED 55"',"\ud83d\udcfa",48)
B.bz1=new C.a0(63015,"MaterialIcons",!1)
B.bzv=new C.a0(63228,"MaterialIcons",!1)
B.ak0=new C.a0(983222,"MaterialIcons",!1)
B.akA=new C.a0(983775,"MaterialIcons",!1)
B.akG=new C.a0(983894,"MaterialIcons",!1)
B.bCq=new C.ae(D.eo,null,D.aJ,null,null,null)
B.fB6=new A.K(-0.4,4.2,-2.4)
B.bOx=new A.ub(B.fB6,"LIVE 120 V",D.bL)
B.bcR=new C.w(1,0.12156862745098039,0.10196078431372549,0.07058823529411765,D.t)
B.cP5=w([D.Ws,B.bcR],x.O)
B.bRV=new C.a7(D.a3,D.a7,D.x,B.cP5,null,null)
B.bTi=w(["flange","wax","toilet","bolts","valve","hosehot","hosecold","faucet","tail","trap","arm"],x.s)
B.fzS=new A.K(-57.8,-32,0)
B.b_x=new A.yo(0,"Outlet spot 1",!1,B.fzS,"low")
B.fAn=new A.K(-9.8,-32,0)
B.b_u=new A.yo(1,"Outlet spot 2",!1,B.fAn,"low")
B.fAF=new A.K(38.2,-32,0)
B.b_A=new A.yo(2,"Outlet spot 3",!1,B.fAF,"low")
B.fzx=new A.K(-25.8,0,0)
B.b_y=new A.yo(3,"Switch spot 1",!1,B.fzx,"switch")
B.fAi=new A.K(22.2,0,0)
B.b_w=new A.yo(4,"Switch spot 2",!1,B.fAi,"switch")
B.fBg=new A.K(-30,48,40)
B.b_z=new A.yo(5,"Ceiling light spot",!0,B.fBg,"light")
B.fvr=new A.K(30,48,40)
B.b_v=new A.yo(6,"Ceiling fan spot",!0,B.fvr,"fan")
B.tK=w([B.b_x,B.b_u,B.b_A,B.b_y,B.b_w,B.b_z,B.b_v],C.ax("P<yo>"))
B.ccw=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
B.fAv=new A.K(11,4.6,-6)
B.fx0=new A.K(11,5.4,-7.85)
B.fA4=new A.K(3.4,5.4,-7.85)
B.aQH=new A.K(3.4,3.4,-7.85)
B.ccy=w([B.fAv,B.fx0,B.fA4,B.aQH],x.o)
B.egF=new C.z(-9.5,4.6)
B.eiV=new C.z(-5.9,2.3)
B.eoE=new C.z(8.8,4.4)
B.csw=w([B.egF,B.eiV,B.eoE],x.f)
B.bwu=new A.u7("bangtv",'Beovision TV 77"',"\ud83d\udcfa",66)
B.bws=new A.u7("sonytv",'Sony Bravia 75"',"\ud83d\udcfa",64)
B.bwo=new A.u7("lgtv",'LG OLED 65"',"\ud83d\udcfa",56)
B.bwq=new A.u7("appletv",'Apple TV 4K 50"',"\ud83d\udcfa",44)
B.bwr=new A.u7("lamp","Table lamp","\ud83d\udca1",0)
B.bwt=new A.u7("toaster","Toaster","\ud83c\udf5e",0)
B.bwp=new A.u7("hairdryer","Hair dryer","\ud83d\udc87",0)
B.a0J=w([B.bwu,B.bws,B.bwo,B.ai0,B.bwq,B.bwr,B.bwt,B.bwp],C.ax("P<u7>"))
B.ctq=w([61,63],x.t)
B.ctD=w([62,64],x.t)
B.b8A=new C.w(1,0.6039215686274509,0.30980392156862746,0.30980392156862746,D.t)
B.bi1=new C.w(1,0.30980392156862746,0.47843137254901963,0.3686274509803922,D.t)
B.cvp=w([B.DD,B.acN,B.b8A,B.bi1,B.acS,D.t7],x.O)
B.asZ=w([72,73,74,75],x.t)
B.epT=new C.z(-25,-15)
B.e9F=new C.z(25,-15)
B.epS=new C.z(-25,15)
B.e9E=new C.z(25,15)
B.czR=w([B.epT,B.e9F,B.epS,B.e9E],x.f)
B.cHy=w([y.r,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.x,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
B.dWt={black:0}
B.I2=new C.eV(B.dWt,1,x.M)
B.bwK=new A.md(51,"Black wire nut: HOT",B.I2,!1,"hot")
B.dXe={white:0}
B.I0=new C.eV(B.dXe,1,x.M)
B.bwz=new A.md(52,"White wire nut: NEUTRAL",B.I0,!1,"neutral")
B.dWJ={ground:0}
B.RW=new C.eV(B.dWJ,1,x.M)
B.bww=new A.md(53,"Green ground connection",B.RW,!1,"ground")
B.cHH=w([B.bwK,B.bwz,B.bww],x.r)
B.bwL=new A.md(51,"Black wire nut: HOT",B.I2,!1,"hot")
B.bwA=new A.md(52,"White wire nut: NEUTRAL",B.I0,!1,"neutral")
B.bwx=new A.md(53,"Green ground connection",B.RW,!1,"ground")
B.cHG=w([B.bwL,B.bwA,B.bwx],x.r)
B.cI2=w(["Walnut","Blue grey","Brick red","Sage green","Sand","Charcoal"],x.s)
B.fxS=new A.K(-6.5,7.5,-7.85)
B.fxV=new A.K(-6.5,7.8,-3)
B.cIk=w([B.fxS,B.fxV],x.o)
B.b9h=new C.w(1,0.9176470588235294,0.9490196078431372,0.9686274509803922,D.t)
B.bdY=new C.w(1,0.9647058823529412,0.9098039215686274,0.9098039215686274,D.t)
B.bd7=new C.w(1,0.9529411764705882,0.9215686274509803,0.7843137254901961,D.t)
B.atC=w([B.A9,B.b9h,B.bdY,B.bd7],x.O)
B.cIY=w([y.r,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
B.fC7=new A.K(-3.6,7.5,-7.85)
B.fxz=new A.K(-3.6,4.2,-7.85)
B.cJ4=w([B.fC7,B.fxz],x.o)
B.dWs={blackLine:0,blackLoad:1}
B.aLc=new C.eV(B.dWs,2,x.M)
B.bwI=new A.md(21,"Brass screw (top)",B.aLc,!1,"hot")
B.bwJ=new A.md(22,"Brass screw (bottom)",B.aLc,!1,"hot")
B.ai1=new A.md(25,"Green screw: GROUND",B.RW,!1,"ground")
B.cJz=w([B.bwI,B.bwJ,B.ai1],x.r)
B.cJM=w([0,2,1,3,4,6,7,8],x.t)
B.fAL=new A.K(9.8,6,-7.85)
B.fx4=new A.K(9.8,7.5,-7.85)
B.fCk=new A.K(-8,7.5,-7.85)
B.fyJ=new A.K(-8,1.5,-7.85)
B.cKB=w([B.fAL,B.fx4,B.fCk,B.fyJ],x.o)
B.aQN=new A.K(5,1.8,-7.85)
B.fzq=new A.K(5,-0.1,-7.85)
B.fAa=new A.K(12.5,-0.1,-7.85)
B.cLA=w([B.aQN,B.fzq,B.fAa],x.o)
B.ftR=new A.K(3,3.1,-7.1)
B.aQI=new A.K(3,1.7,-7.1)
B.fA7=new A.K(3,1,-7.1)
B.fvh=new A.K(3.65,0.5,-7.1)
B.fw7=new A.K(4.3,1,-7.1)
B.fzl=new A.K(4.3,1.8,-7.1)
B.fCm=new A.K(5,1.8,-7.1)
B.cM1=w([B.ftR,B.aQI,B.fA7,B.fvh,B.fw7,B.fzl,B.fCm,B.aQN],x.o)
B.fBT=new A.K(0.6,11,-3.4)
B.fwv=new A.K(0.6,3.2,-3.2)
B.fBz=new A.K(0.6,2.2,-1.9)
B.fwm=new A.K(0.6,0.7,-1.5)
B.cN_=w([B.fBT,B.fwv,B.fBz,B.fwm],x.o)
B.fvI=new A.K(0,8.3,0)
B.aQq=new A.K(0,3.9,0)
B.a1o=w([B.fvI,B.aQq],x.o)
B.cOp=w([y.r,"Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.","Join the house ground wire to the fan ground.","Join the house white wire to the fan white wire with a wire nut.","Join the house black wire to the fan black wire with a wire nut.","Push the wires up into the box and fasten the canopy to the ceiling.",y.E],x.s)
B.fHn=new A.F8("outlet","\ud83d\udd0c","Wall outlet","Black to brass, white to silver",D.aJ)
B.fHk=new A.F8("switch","\ud83d\udca1","Light switch","Two blacks and a wire nut",D.aW)
B.fHl=new A.F8("gfci","\ud83d\udee1\ufe0f","GFCI outlet","LINE and LOAD near water",D.bs)
B.fHo=new A.F8("fan","\ud83c\udf00","Ceiling fan","Black, white, green and a fan box",D.b7)
B.fHm=new A.F8("ptrap","\ud83e\udea0","Sink drain (P-trap)","Build a drain with a water seal",D.ct)
B.fHj=new A.F8("faucet","\ud83d\udeb0","Faucet supply lines","Hot left, cold right",D.cr)
B.fHi=new A.F8("house","\ud83c\udfd7\ufe0f","Build and fix a house","Stage by stage, then repair",D.by)
B.cOD=w([B.fHn,B.fHk,B.fHl,B.fHo,B.fHm,B.fHj,B.fHi],C.ax("P<F8>"))
B.fB0=new A.K(-0.6,11,-3.4)
B.fx8=new A.K(-0.6,3.2,-3.2)
B.fAs=new A.K(-0.6,2.2,-1.9)
B.fCB=new A.K(-0.6,0.7,-1.5)
B.cOI=w([B.fB0,B.fx8,B.fAs,B.fCB],x.o)
B.cP2=w([0,1,2,3,4,6,7,8],x.t)
B.e0v=new A.na("flange","flange","Toilet flange",D.T,"The flange is fixed to the floor over the drain. Everything else sits on it.",!1,0)
B.d0S=w(["flange"],x.s)
B.e0t=new A.na("wax","wax","Wax ring",B.d0S,"The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.",!1,0)
B.dat=w(["wax"],x.s)
B.e0q=new A.na("toilet","toilet","Toilet",B.dat,"The toilet is lowered straight down onto the wax ring. The ring has to be there first.",!1,0)
B.d8Y=w(["toilet"],x.s)
B.e0u=new A.na("bolts","bolts","Toilet bolts",B.d8Y,"The two bolts hold the toilet to the flange. Set the toilet first.",!1,2)
B.e0r=new A.na("tvalve","valve","Toilet shut-off valve",D.T,"The shut-off valve goes on the pipe that comes out of the wall.",!0,0)
B.d93=w(["tvalve","toilet"],x.s)
B.e0s=new A.na("those","hosecold","Toilet supply hose",B.d93,"The hose joins the valve to the toilet tank, so both must be there first.",!1,2)
B.aFi=new A.na("faucet","faucet","Faucet",D.T,"The faucet goes through the hole in the counter.",!1,0)
B.aFl=new A.na("vhot","valve","Hot shut-off valve (left)",D.T,y.g,!0,0)
B.aFj=new A.na("vcold","valve","Cold shut-off valve (right)",D.T,y.g,!0,0)
B.d9U=w(["vhot","faucet"],x.s)
B.aFm=new A.na("hhot","hosehot","Hot supply hose",B.d9U,"The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.d9R=w(["vcold","faucet"],x.s)
B.aFk=new A.na("hcold","hosecold","Cold supply hose",B.d9R,"The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.",!1,2)
B.aFh=new A.na("tail","tail","Tailpiece",D.T,"The tailpiece hangs from the sink drain. It is the first piece of the drain.",!1,0)
B.d8R=w(["tail"],x.s)
B.aFn=new A.na("trap","trap","P-trap",B.d8R,"The P-trap joins the tailpiece. Build the drain from the top down.",!1,1)
B.d8Z=w(["trap"],x.s)
B.aFo=new A.na("arm","arm","Trap arm",B.d8Z,"The trap arm joins the trap and goes into the wall.",!1,1)
B.cL7=w([B.e0v,B.e0t,B.e0q,B.e0u,B.e0r,B.e0s,B.aFi,B.aFl,B.aFj,B.aFm,B.aFk,B.aFh,B.aFn,B.aFo],x.v)
B.e5W=new A.VW("bathroom","Bathroom",B.cL7,"Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.")
B.d2v=w([B.aFi,B.aFl,B.aFj,B.aFm,B.aFk,B.aFh,B.aFn,B.aFo],x.v)
B.e5X=new A.VW("kitchen","Kitchen",B.d2v,"Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.")
B.auo=w([B.e5W,B.e5X],C.ax("P<VW>"))
B.bwE=new A.md(21,"LOAD hot (brass, taped)",D.I1,!0,"load")
B.bwG=new A.md(22,"LINE hot (brass)",B.I2,!1,"hot")
B.bwF=new A.md(23,"LOAD neutral (silver, taped)",D.I1,!0,"load")
B.bwy=new A.md(24,"LINE neutral (silver)",B.I0,!1,"neutral")
B.cQH=w([B.bwE,B.bwG,B.bwF,B.bwy,B.ai1],x.r)
B.ftP=new A.K(8.2,0.9,-6.3)
B.fAy=new A.K(8.2,-0.1,-6.3)
B.fv5=new A.K(8.2,-0.1,-7.85)
B.cR_=w([B.ftP,B.fAy,B.fv5],x.o)
B.cRa=w([-0.28,0.28],x.n)
B.bvS=new A.Df("Oak",B.Ak,"wood")
B.bvU=new A.Df("Dark wood",B.Et,"wood")
B.aeb=new C.w(1,0.5529411764705883,0.5647058823529412,0.5882352941176471,D.t)
B.bvW=new A.Df("Grey carpet",B.aeb,"carpet")
B.bg9=new C.w(1,0.3568627450980392,0.4980392156862745,0.6509803921568628,D.t)
B.bvT=new A.Df("Blue carpet",B.bg9,"carpet")
B.bdX=new C.w(1,0.8470588235294118,0.803921568627451,0.7058823529411765,D.t)
B.bvQ=new A.Df("Cream carpet",B.bdX,"carpet")
B.bvV=new A.Df("White tile",B.VE,"tile")
B.bvR=new A.Df("Slate tile",B.Vb,"tile")
B.auL=w([B.bvS,B.bvU,B.bvW,B.bvT,B.bvQ,B.bvV,B.bvR],C.ax("P<Df>"))
B.fAt=new A.K(3,3.2,-7.85)
B.fCD=new A.K(3,4,-7.85)
B.fC8=new A.K(3,4.2,-7.4)
B.fuy=new A.K(3,3.95,-7)
B.cUi=w([B.fAt,B.fCD,B.fC8,B.fuy],x.o)
B.fAO=new A.K(6,0.2,0)
B.fzI=new A.K(6,2.6,0)
B.aR9=new A.K(8.6,2.6,0)
B.cVv=w([B.fAO,B.fzI,B.aR9],x.o)
B.epX=new C.z(-7,-7)
B.ecI=new C.z(7,-7)
B.epW=new C.z(-7,7)
B.ecH=new C.z(7,7)
B.cWa=w([B.epX,B.ecI,B.epW,B.ecH],x.f)
B.cWc=w([-2.4,2.4],x.n)
B.cWt=w([-1.6,1.6],x.n)
B.adK=new C.w(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,D.t)
B.fDV=new A.zI("blackLine","Black \xb7 from the breaker",B.adK,D.c,"hot")
B.bbR=new C.w(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,D.t)
B.fDY=new A.zI("blackLoad","Black \xb7 to the light",B.bbR,D.c,"hot")
B.aRq=new A.zI("ground","Bare copper \xb7 ground",B.wU,D.c,"ground")
B.cWw=w([B.fDV,B.fDY,B.aRq],x.d)
B.b6y=new C.w(1,0.9294117647058824,0.9019607843137255,0.8392156862745098,D.t)
B.b4P=new C.w(1,0.9137254901960784,0.8274509803921568,0.8274509803921568,D.t)
B.b43=new C.w(1,0.8352941176470589,0.8941176470588236,0.8156862745098039,D.t)
B.bbh=new C.w(1,0.9529411764705882,0.8901960784313725,0.6549019607843137,D.t)
B.b8K=new C.w(1,0.7254901960784313,0.7647058823529411,0.8666666666666667,D.t)
B.bgg=new C.w(1,0.5607843137254902,0.6392156862745098,0.6588235294117647,D.t)
B.auY=w([B.b6y,B.Vp,B.b4P,B.b43,B.bbh,B.b8K,B.acH,B.bgg],x.O)
B.ahM=new A.qQ(4,"deadOutlet")
B.cYI=w([B.YN,B.YO,B.LZ,B.M_,B.ahM,B.YR,B.YS,B.YT,B.YU,B.YV,B.YP,B.YQ],C.ax("P<qQ>"))
B.cZa=w([y.r,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.x,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
B.cZJ=w([0.1,8.05],x.n)
B.fyg=new A.K(-0.35,11,-3.4)
B.fxd=new A.K(-0.35,3.2,-3.2)
B.fzQ=new A.K(-0.35,2.2,-1.9)
B.fwi=new A.K(-0.35,0.7,-1.5)
B.cZX=w([B.fyg,B.fxd,B.fzQ,B.fwi],x.o)
B.fC0=new A.K(5.2,7.5,-7.85)
B.fzE=new A.K(5.2,4,-7.85)
B.d_2=w([B.fC0,B.fzE],x.o)
B.a7Z=new A.kT("look","Look",D.fa)
B.fGJ=new A.kT("wall","Wall box",N.aji)
B.fGI=new A.kT("ceiling","Ceiling box",D.qJ)
B.fGS=new A.kT("fanbox","Fan box",M.Mu)
B.fGZ=new A.kT("drill","Drill",D.xF)
B.fGT=new A.kT("cable","Cable roll",E.aj7)
B.d1d=w([B.a7Z,B.fGJ,B.fGI,B.fGS,B.fGZ,B.fGT],x.b)
B.fGY=new A.kT("sheet","Drywall sheet",D.Bk)
B.fGM=new A.kT("knife","Drywall saw",D.Fs)
B.fGK=new A.kT("screw","Screw gun",R.FC)
B.fH0=new A.kT("tape","Tape",D.tz)
B.fGX=new A.kT("mud","Mud",Z.ZX)
B.fH4=new A.kT("sand","Sander",D.Fq)
B.bBS=new C.a0(985109,"MaterialIcons",!1)
B.fGQ=new A.kT("paint","Roller",B.bBS)
B.cYQ=w([B.a7Z,B.fGY,B.fGM,B.fGK,B.fH0,B.fGX,B.fH4,B.fGQ],x.b)
B.fGU=new A.kT("tester","Voltage tester",D.qN)
B.ak1=new C.a0(983223,"MaterialIcons",!1)
B.fH1=new A.kT("outlet","Outlet",B.ak1)
B.fGO=new A.kT("gfci","GFCI",D.tG)
B.fH_=new A.kT("switch","Switch",E.N5)
B.fGW=new A.kT("light","Light",D.qP)
B.bBQ=new C.a0(985094,"MaterialIcons",!1)
B.fGR=new A.kT("fan","Fan",B.bBQ)
B.fGV=new A.kT("tv","TV",S.akp)
B.bA6=new C.a0(63571,"MaterialIcons",!1)
B.fGP=new A.kT("lamp","Lamp",B.bA6)
B.byU=new C.a0(62944,"MaterialIcons",!1)
B.fGN=new A.kT("toaster","Toaster",B.byU)
B.bzt=new C.a0(63209,"MaterialIcons",!1)
B.fH3=new A.kT("hairdryer","Hair dryer",B.bzt)
B.fH2=new A.kT("flip","Flip switch",E.N5)
B.fGL=new A.kT("unplug","Unplug",B.ak0)
B.d3F=w([B.a7Z,B.fGU,B.fH1,B.fGO,B.fH_,B.fGW,B.fGR,B.fGV,B.fGP,B.fGN,B.fH3,B.fH2,B.fGL],x.b)
B.d_5=w([B.d1d,B.cYQ,B.d3F],C.ax("P<ak<kT>>"))
B.aQY=new A.K(0,15.5,-3.6)
B.fyq=new A.K(0,20,-3.6)
B.fCq=new A.K(0,22.5,-2)
B.fwX=new A.K(0,22.5,1.1999999999999997)
B.fyw=new A.K(0,21.1,1.6)
B.d_B=w([B.aQY,B.fyq,B.fCq,B.fwX,B.fyw],x.o)
B.GE=w([],x.E)
B.vw=w([],x.h)
B.d0h=w([],x.o)
B.d0a=w([],x.a)
B.d1a=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
B.fuN=new A.K(11.4,4.6,-6)
B.fyE=new A.K(11.4,5,-7.85)
B.fwk=new A.K(2.6,5,-7.85)
B.fwA=new A.K(2.6,3.4,-7.85)
B.d1U=w([B.fuN,B.fyE,B.fwk,B.fwA],x.o)
B.d1Y=w(["hot","cold"],x.s)
B.fDX=new A.zI("black","Black \xb7 hot",B.adK,D.c,"hot")
B.fDW=new A.zI("white","White \xb7 neutral",B.wD,D.aA,"neutral")
B.PI=w([B.fDX,B.fDW,B.aRq],x.d)
B.epn=new C.z("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
B.err=new C.z("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
B.ehf=new C.z("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
B.enE=new C.z("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
B.eoH=new C.z("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
B.ehF=new C.z("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
B.eiR=new C.z("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
B.d3R=w([B.epn,B.err,B.ehf,B.enE,B.eoH,B.ehF,B.eiR],x.L)
B.epP=new C.z(-17,-9)
B.e91=new C.z(17,-9)
B.epO=new C.z(-17,9)
B.e90=new C.z(17,9)
B.d4r=w([B.epP,B.e91,B.epO,B.e90],x.f)
B.d4A=w([-30,30,-70,70],x.n)
B.d4B=w([-3,3],x.n)
B.nT=w([-72,-24,24],x.t)
B.d4F=w([-90,-50,50,90],x.n)
B.avS=w([-9,9],x.n)
B.fwo=new A.K(8.2,5,-7.85)
B.fzH=new A.K(8.2,1.2,-7.85)
B.fB1=new A.K(8.2,1,-7.4)
B.d69=w([B.fwo,B.fzH,B.fB1],x.o)
B.dWK={hot:0}
B.aLg=new C.eV(B.dWK,1,x.M)
B.e5U=new A.Ek(61,"Hot shut-off valve (left)",B.aLg,"Hot is always on the LEFT. The red hose goes on the left valve.")
B.dWy={cold:0}
B.aLo=new C.eV(B.dWy,1,x.M)
B.e5V=new A.Ek(62,"Cold shut-off valve (right)",B.aLo,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
B.e5S=new A.Ek(63,"Hot faucet inlet (left)",B.aLg,"The left faucet inlet takes the hot (red) hose.")
B.e5T=new A.Ek(64,"Cold faucet inlet (right)",B.aLo,"The right faucet inlet takes the cold (blue) hose.")
B.a28=w([B.e5U,B.e5V,B.e5S,B.e5T],C.ax("P<Ek>"))
B.a2a=w([-72,-48,-24,0,24],x.t)
B.d7s=w(["1 Rough-in","2 Drywall","3 Devices"],x.s)
B.evr=new C.bx("hot","Hot hose (red)",B.rW)
B.ew5=new C.bx("cold","Cold hose (blue)",B.nv)
B.d8m=w([B.evr,B.ew5],C.ax("P<+(n,n,w)>"))
B.ea3=new C.z(34,40)
B.fGb=new A.Jc(B.ea3,3.141592653589793,2.6,"Washing hands at the sink",!1,!1,!1,"")
B.d8o=w([B.fGb],x.a)
B.a7E=new A.K(15,2.6,0)
B.a2d=w([B.aR9,B.a7E],x.o)
B.d8S=w(["tail","trap","arm"],x.s)
B.GI=w(["tv","lamp","toaster","hairdryer"],x.s)
B.d9w=w([y.r,"Hold the fixture up to the ceiling box. It has three short wires: black, white and green.","Join the house ground wire to the fixture ground.","Join the house white wire to the fixture white wire with a wire nut.","Join the house black wire to the fixture black wire with a wire nut.","Push the wires into the box and fasten the fixture to the ceiling.",y.E],x.s)
B.d9E=w([30,60,120,180,300],x.t)
B.bOR=new A.jw("Breaker off, then test","Before you touch any wire, switch its breaker OFF, then check with a voltage tester that the wire is dead. A switch on the wall is not enough.")
B.bOE=new A.jw("Lock out, tag out","On a real job you put a lock or a note on the panel so nobody switches the power back on while you work.")
B.bOY=new A.jw("Water and power","Water carries electricity. Near sinks, tubs and outdoors the outlets must be GFCI, and wet hands never touch wires.")
B.bOJ=new A.jw("Eyes, ears, lungs","Safety glasses for drilling and cutting, ear protection for loud tools, and a mask when you sand drywall dust or cut tile.")
B.bOX=new A.jw("Shut the water off","Before you cut or loosen a pipe, close the main water valve and open a faucet to drain the line.")
B.d3m=w([B.bOR,B.bOE,B.bOY,B.bOJ,B.bOX],x.Z)
B.bP9=new A.LY("Safety first","\ud83e\uddba",D.cr,B.d3m)
B.bOZ=new A.jw("Wire colours","Black is hot (it carries the power), white is neutral (the way back), bare copper or green is ground (the safety path). Red is a second hot, often used for a switched line.")
B.bP5=new A.jw("Screw colours","On an outlet the brass screw takes the hot wire, the silver screw takes the neutral and the green screw takes the ground.")
B.bOT=new A.jw("Wire size","14 gauge wire is for 15 amp circuits (lights and outlets). 12 gauge is for 20 amp circuits (kitchens). A thinner wire than the breaker allows can overheat and start a fire.")
B.bON=new A.jw("Breakers","A breaker is a safety switch. It trips when a circuit carries too much current, so the wires never get hot enough to burn.")
B.bP0=new A.jw("Wire nuts","Strip about 3/4 inch, twist the bare ends together clockwise, and screw on the nut until no bare copper shows. Give each wire a gentle tug.")
B.bP6=new A.jw("Switches","A switch cuts the hot wire only. The neutral goes straight through to the light.")
B.bP7=new A.jw("GFCI","A GFCI outlet watches the current going out and coming back. If a little leaks (through water or a person) it cuts the power in a fraction of a second.")
B.bOG=new A.jw("Ceiling fans","A fan shakes and is heavy. It needs a box that says fan rated, fixed to the joist, not a plain light box.")
B.bOI=new A.jw("Heights","Outlets sit about 16 inches from the floor. Switches sit about 48 inches up, where your hand falls.")
B.cXk=w([B.bOZ,B.bP5,B.bOT,B.bON,B.bP0,B.bP6,B.bP7,B.bOG,B.bOI],x.Z)
B.bPc=new A.LY("Wiring basics","\u26a1",D.cp,B.cXk)
B.bOF=new A.jw("Hot left, cold right","On a faucet, hot is on the left and cold on the right. Hot lines are marked red and cold lines blue.")
B.bOS=new A.jw("The P-trap","The curved pipe under a sink always holds a little water. That water seal stops sewer gas coming up the drain.")
B.bP2=new A.jw("Shut-off valves","Every sink and toilet has its own small valve, so you can stop the water to one fixture without turning off the whole house.")
B.bOL=new A.jw("Slip nuts","Drain joints are sealed by a washer and a slip nut. Tighten by hand and a quarter turn: too much force cracks plastic.")
B.bOK=new A.jw("Wax ring","A toilet sits on a wax ring that seals it to the floor drain. A toilet is lowered straight down once, and cannot be slid around.")
B.bP_=new A.jw("Drain slope","Drains fall about 1/4 inch per foot so water and waste keep moving. Too flat and it clogs, too steep and the water leaves the solids behind.")
B.bP4=new A.jw("Order of work","Plumbing goes from the top down on the drain (tailpiece, trap, arm) and from the wall out on the supply (valve, hose, fixture).")
B.c5B=w([B.bOF,B.bOS,B.bP2,B.bOL,B.bOK,B.bP_,B.bP4],x.Z)
B.bPa=new A.LY("Plumbing basics","\ud83d\udeb0",D.ct,B.c5B)
B.bOH=new A.jw("Studs","Studs are the vertical 2x4 posts inside a wall, 16 inches apart from centre to centre. Everything is fixed to them.")
B.bOV=new A.jw("Drilling studs","Holes for cable go through the middle of the stud, so a nail or screw cannot reach the wire.")
B.bOM=new A.jw("Drywall","A sheet is 4 feet wide, so its edges land on studs 48 inches apart. Screws go into studs only, just under the paper.")
B.bOP=new A.jw("Taping and mud","Seams get paper tape and three thin coats of joint compound, sanded smooth between coats, then primer and paint.")
B.bP3=new A.jw("Order of a build","Frame, run the pipes and wires (rough-in), inspect, hang drywall, finish it, paint, then fit the fixtures and devices.")
B.cJw=w([B.bOH,B.bOV,B.bOM,B.bOP,B.bP3],x.Z)
B.bP8=new A.LY("Framing and walls","\ud83c\udfe0",D.dT,B.cJw)
B.bOQ=new A.jw("Voltage tester","A pen that glows or beeps near live wires. Test it on a known live outlet first, so you know it works.")
B.bOW=new A.jw("Wire strippers","Strip the plastic off without nicking the copper. A nick weakens the wire.")
B.bP1=new A.jw("Adjustable wrench","For nuts on valves and hoses. Hold the fitting steady with a second wrench so you do not twist the pipe.")
B.bOU=new A.jw("Drill and screw gun","A drill makes holes through studs. A screw gun sets drywall screws to the right depth.")
B.bOO=new A.jw("Level and tape measure","Measure twice, cut once. A level makes sure outlets, shelves and pipes are straight.")
B.daL=w([B.bOQ,B.bOW,B.bP1,B.bOU,B.bOO],x.Z)
B.bPb=new A.LY("Tools","\ud83e\uddf0",D.bs,B.daL)
B.dap=w([B.bP9,B.bPc,B.bPa,B.bP8,B.bPb],C.ax("P<LY>"))
B.bwC=new A.md(21,"Brass screw (top): HOT side",B.I2,!1,"hot")
B.bwB=new A.md(22,"Brass screw (bottom): HOT side",B.I2,!1,"hot")
B.bwD=new A.md(23,"Silver screw (top): NEUTRAL side",B.I0,!1,"neutral")
B.bwH=new A.md(24,"Silver screw (bottom): NEUTRAL side",B.I0,!1,"neutral")
B.bwv=new A.md(25,"Green screw: GROUND",B.RW,!1,"ground")
B.daq=w([B.bwC,B.bwB,B.bwD,B.bwH,B.bwv],x.r)
B.daG=w(["Cream","Sky","Blush","Mint","Butter","Periwinkle","White","Slate"],x.s)
B.daR=w([0.72,-0.72],x.n)
B.edW=new C.z("outlet","\ud83d\udd0c Outlet")
B.eqy=new C.z("gfci","\ud83d\udee1\ufe0f GFCI outlet")
B.en0=new C.z("switch","\ud83d\udca1 Light switch")
B.db8=w([B.edW,B.eqy,B.en0],x.L)
B.dbi=w(["inspect","hand","screwdriver","pliers","wrench","crimper","plunger","flapper","newoutlet","patch"],x.s)
B.dch=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Open the valves slowly and turn on the faucet. Check every connection for drips."],x.s)
B.dWI={flange:0,wax:1,toilet:2,bolts:3,valve:4,hosehot:5,hosecold:6,faucet:7,tail:8,trap:9,arm:10}
B.dev=new C.bq(B.dWI,["Flange","Wax ring","Toilet","Bolts","Shut-off valve","Hot hose","Cold hose","Faucet","Tailpiece","P-trap","Trap arm"],x.l)
B.bvf=new A.tZ("The living room has no power at all.","The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.","hand","Breaker reset. The living room has power again.",72,0,"")
B.bvp=new A.tZ("There is no hot water.","The water heater breaker has tripped (orange). Reset it by hand.","hand","Breaker reset. The water heater is heating again.",75,0,"")
B.bvm=new A.tZ("Water is dripping under the kitchen sink.","The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.","wrench","Slip nut tightened. The drip stopped.",87,0,"")
B.bve=new A.tZ("There is a wet spot on the wall behind the kitchen.","A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.","crimper","The joint is crimped again and it does not leak.",96,0,"")
B.bvj=new A.tZ("The outlet by the sofa does not work, but the lights do.","The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.","screwdriver","You tightened the loose screw. The outlet works again.",81,72,"Turn the living room breaker OFF first.")
B.bvg=new A.tZ("The living room light flickers.","A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.","pliers","You twisted the wire nut tight. The light is steady.",83,72,"Turn the living room breaker OFF first.")
B.bvh=new A.tZ("The kitchen outlet sparks and smells burnt.","The outlet has burnt. Turn the breaker off and replace it with a new outlet.","newoutlet","New outlet fitted. No more sparks.",84,73,"Turn the kitchen breaker OFF first.")
B.bvn=new A.tZ("The kitchen outlets are dead.","The GFCI outlet has tripped. Press its RESET button by hand.","hand","You pressed RESET. The kitchen outlets work.",84,0,"")
B.bvi=new A.tZ("The toilet keeps running.","The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.","flapper","New flapper fitted. The toilet stops running.",88,0,"")
B.bvl=new A.tZ("The kitchen faucet drips.","The faucet washer is worn. Tighten the packing nut with the wrench, then check.","wrench","The faucet is sealed. No more drips.",85,0,"")
B.bvk=new A.tZ("There is a hole in the wall.","A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.","patch","Patch fitted. Now it only needs mud, sanding and paint.",95,0,"")
B.bvo=new A.tZ("The kitchen sink drains very slowly.","The drain is clogged. Use the plunger.","plunger","The clog is gone. The sink drains fast.",94,0,"")
B.vA=new C.dR([B.YN,B.bvf,B.YO,B.bvp,B.LZ,B.bvm,B.M_,B.bve,B.ahM,B.bvj,B.YR,B.bvg,B.YS,B.bvh,B.YT,B.bvn,B.YU,B.bvi,B.YV,B.bvl,B.YP,B.bvk,B.YQ,B.bvo],C.ax("dR<qQ,tZ>"))
B.dgk=new C.bq(D.ib,[],C.ax("bq<G,da>"))
B.dWG={tail:0,trap:1,arm:2}
B.dgz=new C.bq(B.dWG,["Tailpiece","P-trap","Trap arm"],x.l)
B.dW9={bed:0,nightstand:1,wardrobe:2,desk:3,rug:4,sofa:5,armchair:6,coffee:7,tvstand:8,dining:9,chair:10,plant:11,lamp:12,console:13,shelf:14}
B.bw7=new A.q9("Bed","\ud83d\udecf\ufe0f",60,80)
B.bwb=new A.q9("Night table","\ud83e\ude91",16,16)
B.bwf=new A.q9("Wardrobe","\ud83d\udeaa",44,20)
B.bw5=new A.q9("Desk","\ud83d\udda5\ufe0f",48,24)
B.bw1=new A.q9("Rug","\ud83d\udfe5",70,50)
B.bw8=new A.q9("Sofa","\ud83d\udecb\ufe0f",80,32)
B.bwe=new A.q9("Armchair","\ud83d\udcba",30,30)
B.bw4=new A.q9("Coffee table","\u2615",40,24)
B.bwc=new A.q9("TV stand","\ud83d\udcfa",56,18)
B.bw2=new A.q9("Dining table","\ud83c\udf7d\ufe0f",56,36)
B.bw3=new A.q9("Chair","\ud83e\ude91",18,18)
B.bwd=new A.q9("Plant","\ud83e\udeb4",14,14)
B.bw9=new A.q9("Floor lamp","\ud83d\udca1",10,10)
B.bw6=new A.q9("Console table","\ud83d\uddc4\ufe0f",44,14)
B.bwa=new A.q9("Bookshelf","\ud83d\udcda",36,12)
B.vD=new C.bq(B.dW9,[B.bw7,B.bwb,B.bwf,B.bw5,B.bw1,B.bw8,B.bwe,B.bw4,B.bwc,B.bw2,B.bw3,B.bwd,B.bw9,B.bw6,B.bwa],C.ax("bq<n,q9>"))
B.fAK=new A.K(0,0,-1.2)
B.dUr=new A.da("Electrical box","The box is ready. Pull a cable to it, then wire a device.",B.fAK,9)
B.dgW=new C.dR([3,B.dUr],C.ax("dR<G,da>"))
B.aEl={inspect:0,hand:1,screwdriver:2,pliers:3,wrench:4,crimper:5,plunger:6,flapper:7,newoutlet:8,patch:9}
B.Qg=new C.bq(B.aEl,["Look and test","Hand","Screwdriver","Pliers","Wrench","Crimp tool","Plunger","New flapper","New outlet","Drywall patch"],x.l)
B.bze=new C.a0(63072,"MaterialIcons",!1)
B.dh_=new C.bq(B.aEl,[D.fa,B.akA,R.FC,D.Fs,D.qK,B.bze,X.a_s,D.pH,B.ak1,L.vc],C.ax("bq<n,a0>"))
B.dhP=new A.Hm(18,50,0,20)
B.dhQ=new A.Hm(-4,16,0,24)
B.aD4=new A.a5K(null)
B.fCb=new A.K(16,2.6,0)
B.dUa=new A.da("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",B.fCb,8)
B.fuj=new A.K(0,3,-6)
B.dUb=new A.da("Wall","The copper supply pipes come out of the wall here.",B.fuj,24)
B.fAp=new A.K(8.2,1,-7)
B.dUc=new A.da("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",B.fAp,7)
B.ftT=new A.K(0,0,40)
B.dUd=new A.da("The room","A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.",B.ftT,190)
B.fyb=new A.K(-2.4,11.5,-3.6)
B.dUe=new A.da("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",B.fyb,7)
B.fvk=new A.K(-3.6,4,-7.8)
B.dUf=new A.da("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",B.fvk,4.5)
B.fzj=new A.K(0,0.5,2)
B.dUg=new A.da("Voltage tester","A tester that glows when it touches live power.",B.fzj,6)
B.dUh=new A.da("Pipe joint","A crimped joint in the hot water line.",B.aQH,4)
B.fyt=new A.K(0,-0.2,0.2)
B.dUi=new A.da("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",B.fyt,8)
B.fBu=new A.K(-4.6,0.5,-3.4)
B.dUj=new A.da("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",B.fBu,8)
B.fA_=new A.K(0,-0.3,3.2)
B.dUk=new A.da("White wire nut: NEUTRAL","Twist the house white wire and the fixture white wire together under this cap.",B.fA_,6)
B.fza=new A.K(4.6,0.5,-3.4)
B.dUl=new A.da("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",B.fza,8)
B.fv3=new A.K(2.4,11.5,-3.6)
B.dUm=new A.da("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",B.fv3,7)
B.fCP=new A.K(0.8,-0.8,1.2)
B.dUn=new A.da("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",B.fCP,7)
B.fy9=new A.K(10.05,5.2,-7.5)
B.dUo=new A.da("Water heater breaker","A big circuit for the water heater. It is ON.",B.fy9,3.5)
B.aQg=new A.K(0,40,0)
B.dUp=new A.da("Back wall",y.s,B.aQg,140)
B.fAj=new A.K(3,3.8,-7.4)
B.dUq=new A.da("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",B.fAj,4.5)
B.a7x=new A.K(0,6,0)
B.dUs=new A.da("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",B.a7x,10)
B.fBk=new A.K(-60,40,50)
B.dUt=new A.da("Left wall",y.s,B.fBk,140)
B.fvE=new A.K(3,1,0)
B.dUu=new A.da("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",B.fvE,11)
B.fu6=new A.K(0,20,5)
B.dUv=new A.da("The room","A bare room with the water supply stubs and the drain stub already in the wall and floor.",B.fu6,120)
B.fux=new A.K(0,-8,0)
B.dUw=new A.da("Cabinet","The cabinet under the sink where the drain is built.",B.fux,22)
B.fur=new A.K(0,4,-8)
B.dUx=new A.da("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",B.fur,18)
B.aQS=new A.K(0,-0.2,5.1)
B.dUy=new A.da("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",B.aQS,5)
B.ftZ=new A.K(0,11,0)
B.dUz=new A.da("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",B.ftZ,16)
B.fuk=new A.K(0,40,12)
B.dUA=new A.da("Front door","Tap the door to go inside the house.",B.fuk,220)
B.jh=new A.K(0,0,0)
B.dUB=new A.da("Drywall","The wall surface. A hole is cut in it for the electrical box.",B.jh,22)
B.fwe=new A.K(60,40,50)
B.dUC=new A.da("Right wall",y.s,B.fwe,140)
B.fu1=new A.K(0,14,-3)
B.dUD=new A.da("Counter and sink","The faucet is mounted through a hole in the counter.",B.fu1,20)
B.fxo=new A.K(0,-1.9,5)
B.dUE=new A.da("GREEN screw: GROUND","The green screw is for the bare copper ground wire.",B.fxo,5)
B.fup=new A.K(0,47,-2)
B.dUF=new A.da("Top and bottom plate","The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.",B.fup,70)
B.ftV=new A.K(0,0,-8)
B.dUG=new A.da("Wall","Behind the wall the drain pipe goes down to the sewer line.",B.ftV,22)
B.fu4=new A.K(0,19,-3)
B.dUH=new A.da("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",B.fu4,14)
B.fwt=new A.K(3.5,2,-7.2)
B.dUI=new A.da("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",B.fwt,9)
B.fxC=new A.K(10.05,5.7,-7.5)
B.dUJ=new A.da("Kitchen breaker","Protects the kitchen outlets. It is ON.",B.fxC,3.5)
B.fyi=new A.K(4,6,-2.5)
B.dUK=new A.da("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",B.fyi,9)
B.fzg=new A.K(-1,0.6,4.3)
B.dUL=new A.da("SILVER screw: NEUTRAL side",y.o,B.fzg,5)
B.a7A=new A.K(0,3.7,0)
B.dUM=new A.da("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",B.a7A,7)
B.Tl=new A.K(0,-1,-0.6)
B.dUN=new A.da("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",B.Tl,5)
B.fyn=new A.K(-1.5,-0.3,3.2)
B.dUO=new A.da("Black wire nut: HOT","Twist the house black wire and the fixture black wire together under this cap.",B.fyn,6)
B.fxB=new A.K(-1.9,0,-2)
B.dUP=new A.da("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",B.fxB,16)
B.fAJ=new A.K(-1,-0.8,4.3)
B.dUQ=new A.da("SILVER screw: NEUTRAL side",y.o,B.fAJ,5)
B.fCp=new A.K(6,3,-7.8)
B.dUR=new A.da("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",B.fCp,14)
B.fAM=new A.K(1,0.6,4.3)
B.dUS=new A.da("BRASS screw: HOT side",y.u,B.fAM,5)
B.fB2=new A.K(0,-0.2,4.9)
B.dUT=new A.da("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",B.fB2,7)
B.fCM=new A.K(9.55,4.7,-7.5)
B.dUU=new A.da("Spare breaker","A spare circuit.",B.fCM,3.5)
B.fu7=new A.K(0,20,8)
B.dUV=new A.da("Vanity and counter","The cabinet that holds the sink. The pipes live inside it.",B.fu7,70)
B.fBW=new A.K(-3.2,1.3,-7.8)
B.dUW=new A.da("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",B.fBW,4.5)
B.fB3=new A.K(1.5,-0.3,3.2)
B.dUX=new A.da("Green ground connection","Join the bare copper house ground wire to the green fixture ground wire.",B.fB3,6)
B.fxs=new A.K(12,2.6,0)
B.dUY=new A.da("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",B.fxs,9)
B.fyX=new A.K(0,6.5,-7.8)
B.dUZ=new A.da("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",B.fyX,16)
B.fzw=new A.K(11.2,2.3,-6)
B.dV_=new A.da("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",B.fzw,9)
B.fA2=new A.K(9.55,5.2,-7.5)
B.dV0=new A.da("Bathroom breaker","Protects the bathroom. It is ON.",B.fA2,3.5)
B.fxH=new A.K(5.2,3.9,-7.8)
B.dV1=new A.da("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",B.fxH,4.5)
B.fum=new A.K(0,40,-3)
B.dV2=new A.da("Electrical cable","Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.",B.fum,80)
B.fy7=new A.K(-8.4,1.2,-6.4)
B.dV3=new A.da("Sofa","Just furniture, to show the size of the room.",B.fy7,10)
B.dV4=new A.da("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",B.aQS,6)
B.fxb=new A.K(0,4,-7.8)
B.dV5=new A.da("Wall","The drywall of the back wall.",B.fxb,16)
B.fBY=new A.K(0,0,0.6)
B.dV6=new A.da("Canopy","The round cover that hides the box and the wire connections against the ceiling.",B.fBY,8)
B.dV7=new A.da("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",B.jh,30)
B.a7C=new A.K(8.9,2.6,0)
B.dV8=new A.da("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",B.a7C,7)
B.fA1=new A.K(1,-0.8,4.3)
B.dV9=new A.da("BRASS screw: HOT side",y.u,B.fA1,5)
B.fx_=new A.K(0.6,1.5,-1.8)
B.dVa=new A.da("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",B.fx_,8)
B.fxj=new A.K(9.8,5,-7.5)
B.dVb=new A.da("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",B.fxj,6)
B.fyl=new A.K(-4,6,-2.5)
B.dVc=new A.da("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",B.fyl,9)
B.bFh=new C.ae(D.ee,18,D.bc,null,null,null)
B.e1d=new C.C(D.fx,B.bFh,null)
B.e1f=new C.C(D.fx,G.am6,null)
B.e73=new A.a8d(null,null)
B.bhw=new C.w(1,0.8392156862745098,0.9019607843137255,0.9176470588235294,D.t)
B.e8v=new C.z(B.bhw,B.VE)
B.e8C=new C.z(0,46)
B.e8P=new C.z(B.wD,B.jh)
B.ea5=new C.z(64,2.4)
B.ebC=new C.z("LOAD (taped)",D.dj)
B.eec=new C.z(63,-2.4)
B.eeW=new C.z(51,B.abg)
B.b5Z=new C.w(1,0.9137254901960784,0.8705882352941177,0.7607843137254902,D.t)
B.ehq=new C.z(B.b5Z,B.Ak)
B.b4l=new C.w(1,0.7647058823529411,0.8117647058823529,0.9019607843137255,D.t)
B.ejS=new C.z(B.b4l,B.aeb)
B.bcD=new C.w(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,D.t)
B.elr=new C.z("SILVER \xb7 NEUTRAL",B.bcD)
B.fC6=new A.K(-1.5,0,0)
B.elA=new C.z(B.Ka,B.fC6)
B.b57=new C.w(1,0.8196078431372549,0.29411764705882354,0.22745098039215686,D.t)
B.en4=new C.z(52,B.b57)
B.b9z=new C.w(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,D.t)
B.enX=new C.z("GREEN \xb7 GROUND",B.b9z)
B.bgy=new C.w(1,0.9450980392156862,0.9098039215686274,0.8235294117647058,D.t)
B.eoC=new C.z(B.bgy,B.Ak)
B.eoT=new C.z("main","Main water valve")
B.adz=new C.w(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,D.t)
B.fCQ=new A.K(1.5,0,0)
B.es1=new C.z(B.adz,B.fCQ)
B.b6v=new C.w(1,0.9529411764705882,0.9411764705882353,0.9098039215686274,D.t)
B.bca=new C.w(1,0.4823529411764706,0.5294117647058824,0.5803921568627451,D.t)
B.esE=new C.z(B.b6v,B.bca)
B.etu=new C.z(B.KR,B.abf)
B.b6b=new C.w(1,0.6039215686274509,0.4196078431372549,0.047058823529411764,D.t)
B.euc=new C.z("BRASS \xb7 HOT",B.b6b)
B.euF=new C.z(53,B.adz)
B.evh=new C.bx(61,-4.6,B.rW)
B.ex_=new C.bx(62,4.6,B.nv)
B.eyC=new C.cL([0,17.1,16.4,5.8])
B.eyF=new C.cL([0,-0.1,16.4,4.2])
B.ezG=new C.cL([15.6,9,14.8,22])
B.ezK=new C.cL([-15.6,9,14.8,22])
B.eGj=new C.at(126,84)
B.eQ1=new C.F(!0,D.c,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aNn=new C.F(!0,D.aJ,null,null,null,null,12,D.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eRf=new C.F(!0,D.ay,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eSN=new C.F(!0,D.c,null,null,null,null,12.5,D.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aNE=new C.F(!0,D.ad,null,null,null,null,12,D.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a6A=new C.F(!0,D.ad,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eVv=new C.F(!0,null,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.Ip=new C.F(!0,D.aJ,null,null,null,null,12.5,D.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eW0=new C.F(!0,D.c,null,null,null,null,11.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eWi=new C.F(!0,D.bJ,null,null,null,null,13,D.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eXt=new C.F(!0,D.fg,null,null,null,null,11.5,D.O,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eXy=new C.F(!0,D.ez,null,null,null,null,14,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eYD=new C.F(!0,D.aR,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f24=new C.F(!0,D.c,null,null,null,null,13.5,D.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f2K=new C.F(!0,D.b0,null,null,null,null,14.5,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eQf=new C.F(!0,D.w,null,null,null,null,12,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f3V=new C.x("Open the 3D lesson",null,B.eQf,null,null,null,null,null,null,null,null,null)
B.f4K=new C.x("Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.",null,E.a6s,null,null,null,null,null,null,null,null,null)
B.eQC=new C.F(!0,null,null,null,null,null,40,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f5x=new C.x("\ud83c\udfe0",null,B.eQC,null,null,null,null,null,null,null,null,null)
B.f5S=new C.x("You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.",null,D.zd,null,null,null,null,null,null,null,null,null)
B.f68=new C.x("A different house",null,null,null,null,null,null,null,null,null,null,null)
B.f6T=new C.x("Play the tour",null,null,null,null,null,null,null,null,null,null,null)
B.f7_=new C.x("Start this job again",null,null,null,null,null,null,null,null,null,null,null)
B.f9J=new C.x("Start from a bare house (wire everything)",null,null,null,null,null,null,null,null,null,null,null)
B.fbQ=new C.x("The customer says\u2026",null,D.du,null,null,null,null,null,null,null,null,null)
B.fcy=new C.x("What the house needs",null,D.du,null,null,null,null,null,null,null,null,null)
B.fcJ=new C.x("Next job",null,null,null,null,null,null,null,null,null,null,null)
B.fd_=new C.x("New job",null,null,null,null,null,null,null,null,null,null,null)
B.aNZ=new C.F(!0,D.cr,null,null,null,null,null,D.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fd6=new C.x("Job over",null,B.aNZ,null,null,null,null,null,null,null,null,null)
B.fdm=new C.x("Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.",null,D.zd,null,null,null,null,null,null,null,null,null)
B.fds=new C.x("Learn the trades",null,Q.vW,null,null,null,null,null,null,null,null,null)
B.fe0=new C.x("Practice mode: no hints. You will only hear from me when something is wrong.",null,P.SG,null,null,null,null,null,null,null,null,null)
B.fed=new C.x("New call",null,null,null,null,null,null,null,null,null,null,null)
B.fei=new C.x("Job done! \ud83c\udf89",null,I.SJ,null,null,null,null,null,null,null,null,null)
B.ffr=new C.x("Next call",null,null,null,null,null,null,null,null,null,null,null)
B.ffP=new C.x("Plug in",null,D.du,null,null,null,null,null,null,null,null,null)
B.fge=new C.x("Look around",null,null,null,null,null,null,null,null,null,null,null)
B.fgM=new C.x("The customer wants:",null,D.a6K,null,null,null,null,null,null,null,null,null)
B.fgW=new C.x('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.',null,E.a6s,null,null,null,null,null,null,null,null,null)
B.fjl=new C.x("Call over",null,B.aNZ,null,null,null,null,null,null,null,null,null)
B.fjs=new C.x("\u23cf Unplug",null,H.za,null,null,null,null,null,null,null,null,null)
B.fjL=new C.x("A different call",null,null,null,null,null,null,null,null,null,null,null)
B.fkz=new C.x("Job complete! \ud83c\udf89",null,I.SJ,null,null,null,null,null,null,null,null,null)
B.flt=new C.x("House tour \ud83c\udfac",null,D.du,null,null,null,null,null,null,null,null,null)
B.flC=new C.x("All fixed! \ud83c\udf89",null,I.SJ,null,null,null,null,null,null,null,null,null)
B.aPp=new C.x("Stay",null,null,null,null,null,null,null,null,null,null,null)
B.aPr=new C.x("A different job",null,null,null,null,null,null,null,null,null,null,null)
B.fnF=new C.x("It goes on the back wall, not wired yet. Tap the red one to wire it yourself.",null,P.Sy,null,null,null,null,null,null,null,null,null)
B.fpt=new C.x("The job",null,D.du,null,null,null,null,null,null,null,null,null)
B.fpT=new C.x("A little person walks through the whole house: the living room, the kitchen (a drink from the fridge), the hall, the bedrooms and the bathrooms. Every TV is switched on first. Choose how long it takes.",null,D.SO,null,null,null,null,null,null,null,null,null)
B.fqi=new C.x("Stay in the room",null,null,null,null,null,null,null,null,null,null,null)
B.ftO=new A.K(3.6,2.6,0.6)
B.ftQ=new A.K(0,56,0.9)
B.ftS=new A.K(0,0,3)
B.a7w=new A.K(0,0,4)
B.ftU=new A.K(0,0,-1)
B.ftW=new A.K(0,100,30)
B.ftX=new A.K(0,114,8)
B.ftY=new A.K(0,114,-34)
B.fu_=new A.K(0,127,-13)
B.aQd=new A.K(0,14,0)
B.fu0=new A.K(0,14,2)
B.fu2=new A.K(0,16,0)
B.aQe=new A.K(0,17,0)
B.fu3=new A.K(0,19,14)
B.w7=new A.K(0,1,0)
B.fu5=new A.K(0,20,0)
B.fu8=new A.K(0,22,-11)
B.fu9=new A.K(0,22,-12)
B.fua=new A.K(0,22,-39)
B.fub=new A.K(0,23,0)
B.fuc=new A.K(0,24,0)
B.aQf=new A.K(0,28,0)
B.fud=new A.K(0,28,-8)
B.fue=new A.K(0,2,18)
B.fuf=new A.K(0,30,0)
B.fug=new A.K(0,31,-6)
B.fuh=new A.K(0,34,0)
B.fui=new A.K(0,36,0)
B.ful=new A.K(0,40,40)
B.fun=new A.K(0,40,-6)
B.fuo=new A.K(0,46,0)
B.fuq=new A.K(0,48,0)
B.Ti=new A.K(0,4,-2)
B.fus=new A.K(0,50,40)
B.fut=new A.K(0,50,-10)
B.fuu=new A.K(0,58,0)
B.fuv=new A.K(0,5,4)
B.Tj=new A.K(0,8,0)
B.aQh=new A.K(0,9,0)
B.aQi=new A.K(0,9,-3)
B.a7y=new A.K(0,-4,28)
B.fuw=new A.K(0,-4,-20)
B.fuz=new A.K(100,52,74)
B.fuA=new A.K(10,12,10)
B.fuB=new A.K(10,8,10)
B.fuC=new A.K(11,1,11)
B.fuD=new A.K(120,0,70)
B.fuE=new A.K(120,40,70)
B.fuF=new A.K(120,62,70)
B.fuG=new A.K(12,9,18)
B.fuH=new A.K(13,0,0)
B.fuI=new A.K(13,15,2)
B.fuJ=new A.K(13,28,3)
B.fuK=new A.K(0,0.52,2.35)
B.fuL=new A.K(14,17,4)
B.fuM=new A.K(14,20,-28)
B.fuO=new A.K(16,10,10)
B.fuP=new A.K(16,16,16)
B.fuQ=new A.K(18,18,14)
B.fuR=new A.K(18,22,2)
B.fuS=new A.K(18,28,16)
B.fuT=new A.K(18,2,18)
B.fuU=new A.K(18,9,11)
B.fuV=new A.K(19,13,7)
B.fuW=new A.K(70,0.6,50)
B.fuX=new A.K(0,3,-6.5)
B.fuY=new A.K(1,1,0.64)
B.fuZ=new A.K(-4.6,1.5,-3.6)
B.fv_=new A.K(0,-13.5,-1.5)
B.fv0=new A.K(4,10,3.5)
B.Tk=new A.K(1,0,0)
B.fv1=new A.K(1,26,14)
B.fv2=new A.K(1,28,14)
B.fv4=new A.K(1,0.9,0.06)
B.fv6=new A.K(1.6,15,1.6)
B.aQj=new A.K(20,14,7)
B.fv7=new A.K(20,30,26)
B.fv8=new A.K(22,14,0)
B.fv9=new A.K(22,14,2)
B.fva=new A.K(22,2,28)
B.fvb=new A.K(22,3,10)
B.fvc=new A.K(240,100,40)
B.aQk=new A.K(24,6,14)
B.fvd=new A.K(260,3,56)
B.fve=new A.K(262,3,5)
B.aQl=new A.K(26,4,22)
B.fvf=new A.K(26,72,26)
B.fvg=new A.K(26,-34,96)
B.fvi=new A.K(-0.1,0,0)
B.fvj=new A.K(2,13,2)
B.aQm=new A.K(2,23,12)
B.aQn=new A.K(2,28,22)
B.fvl=new A.K(64,10,-1.4)
B.fvm=new A.K(19.6,0,-1.5)
B.fvn=new A.K(244,6,1.4)
B.aQo=new A.K(0,56,1.3)
B.fvo=new A.K(30,16,30)
B.aQp=new A.K(30,16,72)
B.fvp=new A.K(30,24,8)
B.fvq=new A.K(30,28,18)
B.fvs=new A.K(32,2,20)
B.fvt=new A.K(33,11,10)
B.fvu=new A.K(34,0,150)
B.fvv=new A.K(34,30,1)
B.fvw=new A.K(34,30,150)
B.fvx=new A.K(34,33,150)
B.fvy=new A.K(-1,-1.7,2.3)
B.fvz=new A.K(36,30,1)
B.fvA=new A.K(36,60,12)
B.fvB=new A.K(37,16,0)
B.fvC=new A.K(-0.2,-0.3,-0.4)
B.fvD=new A.K(0,48.6,55)
B.fvF=new A.K(3,22,2)
B.fvG=new A.K(3,26,3)
B.a7z=new A.K(3,3,3)
B.fvH=new A.K(3,5,3)
B.fvJ=new A.K(40,1,14)
B.fvK=new A.K(40,28,1)
B.fvL=new A.K(40,2,24)
B.fvM=new A.K(40,30,26)
B.fvN=new A.K(42,2,28)
B.fvO=new A.K(44,2,14)
B.fvP=new A.K(44,4,14)
B.fvQ=new A.K(44,72,20)
B.fvR=new A.K(0.9,0,4.4)
B.fvS=new A.K(8.2,1.9,-7.55)
B.fvT=new A.K(46,26,2)
B.fvU=new A.K(48,2,24)
B.fvV=new A.K(0,41,11.6)
B.fvW=new A.K(0,-47.25,-2.25)
B.fvX=new A.K(0.6,68,0.4)
B.fvY=new A.K(0,1.59,0.14)
B.fvZ=new A.K(0,-3.4,1)
B.fw_=new A.K(25,79,1.4)
B.fw0=new A.K(1,0,-1.2)
B.fw1=new A.K(54,5,18)
B.fw2=new A.K(56,18,18)
B.fw3=new A.K(56,2,36)
B.fw4=new A.K(58,9,74)
B.fw5=new A.K(0,-0.8,0.9)
B.fw6=new A.K(11.9,0,-8)
B.aQr=new A.K(1.6,1.6,0.4)
B.fw8=new A.K(0.16,0.32,0.07)
B.aQs=new A.K(5,12,26)
B.fw9=new A.K(5,1,2)
B.fwa=new A.K(5,9,8)
B.fwb=new A.K(0,14.3,-1.5)
B.aQt=new A.K(-13,8.6,-9.5)
B.fwc=new A.K(60,12,80)
B.fwd=new A.K(60,30,3)
B.fwf=new A.K(62,18,20)
B.fwg=new A.K(62,22,6)
B.fwh=new A.K(64,10,0)
B.fwj=new A.K(34,84,1.2)
B.aQu=new A.K(6,14,20)
B.aQv=new A.K(6,14,32)
B.fwl=new A.K(6,4,4)
B.fwn=new A.K(0,-0.2,0.14)
B.fwp=new A.K(0.3,38,2)
B.fwq=new A.K(72,-17,70)
B.fwr=new A.K(12,5,0.4)
B.fws=new A.K(1.6,1.7,3.6)
B.fwu=new A.K(-72.8,0,55)
B.fww=new A.K(25,79,0.2)
B.fwx=new A.K(7,0,-8)
B.fwy=new A.K(7,2,7)
B.aQw=new A.K(7,3,0)
B.fwz=new A.K(7,8,3)
B.fwB=new A.K(0,11,9.2)
B.fwC=new A.K(-3.2,1.3,-7.82)
B.fwD=new A.K(80,16,32)
B.fwE=new A.K(80,26,8)
B.aQx=new A.K(147,1.5,3.5)
B.fwF=new A.K(82,46,3)
B.aQy=new A.K(-6.5,6.9,-3)
B.fwG=new A.K(0.93,0.92,1)
B.fwH=new A.K(8,40,12.6)
B.fwI=new A.K(0,-48.6,55)
B.fwJ=new A.K(5.5,8.5,3)
B.fwK=new A.K(2.6,2.6,1.8)
B.fwL=new A.K(0,0,0.26)
B.fwM=new A.K(420,1.2,320)
B.fwN=new A.K(8,2,6)
B.aQz=new A.K(8,2,8)
B.fwO=new A.K(8,4,4)
B.fwP=new A.K(8,9,8)
B.fwQ=new A.K(15,19,0.5)
B.fwR=new A.K(0,3,10.5)
B.fwS=new A.K(0.4,0.38,0.12)
B.fwT=new A.K(0,0,-0.43)
B.aQA=new A.K(11.2,4.5,-6)
B.aQB=new A.K(1.2,96,112)
B.aQC=new A.K(0.08,3.8,2.4)
B.aQD=new A.K(9,1,9)
B.fwU=new A.K(9,5,9)
B.fwV=new A.K(0,58,12.4)
B.fwW=new A.K(1.5,1.3,0.6)
B.fwY=new A.K(0,-1.78,0.27)
B.fwZ=new A.K(0,0.62,0)
B.fx1=new A.K(20,11.5,0)
B.fx2=new A.K(3.2,0.12,-6.7)
B.fx3=new A.K(12,0,-8.1)
B.fx5=new A.K(1.25,0.28,0.1)
B.fx6=new A.K(0,36,10.2)
B.fx7=new A.K(24,0.08,16)
B.fx9=new A.K(0,4,-7.9)
B.fxa=new A.K(11.9,0,8)
B.fxc=new A.K(21,1.4,8)
B.fxe=new A.K(71.2,46.6,55)
B.fxf=new A.K(3,3.28,-7.2)
B.fxg=new A.K(1.4,0.3,1)
B.fxh=new A.K(-6.1,1.2,-6.4)
B.fxi=new A.K(1.4,26,0.4)
B.fxk=new A.K(2.8,3.4,2.4)
B.fxl=new A.K(0,-45.5,0.5)
B.fxm=new A.K(1.8,4,1)
B.fxn=new A.K(5,1.6,0.5)
B.fxp=new A.K(0.1,-2,2.4)
B.fxq=new A.K(0,0.2,2.8)
B.fxr=new A.K(6,10,1.4)
B.fxt=new A.K(43,23,0.3)
B.fxu=new A.K(0,-1.2,4.7)
B.fxv=new A.K(18.9,2.6,0)
B.fxw=new A.K(-12,0,-8.1)
B.fxx=new A.K(11.8,4,0)
B.fxy=new A.K(0.97,0.18,2.25)
B.aQE=new A.K(-71.7,6,55)
B.fxA=new A.K(5.6,0.3,1.9)
B.fxD=new A.K(52,8,0.4)
B.fxE=new A.K(4.6,7.6,3)
B.fxF=new A.K(-1,0,-1.2)
B.fxG=new A.K(0,1.7,0)
B.fxI=new A.K(-1,0,1.5)
B.fxJ=new A.K(5,8,0.4)
B.fxK=new A.K(5,2.2,0.8)
B.fxL=new A.K(0.18,0.12,0.08)
B.fxM=new A.K(147,3,1.4)
B.fxN=new A.K(4,16.2,0)
B.fxO=new A.K(10,15,0.5)
B.fxP=new A.K(144,5,0.7)
B.fxQ=new A.K(0,34,1.1)
B.fxR=new A.K(1.2,-1.7,2.3)
B.fxT=new A.K(0.82,1.7,0.3)
B.fxU=new A.K(-0.12,0,0)
B.fxW=new A.K(3.5,94,0.2)
B.fxX=new A.K(1.1,2.05,0.04)
B.fxY=new A.K(25,79,1.2)
B.fxZ=new A.K(1.12,0.78,0.76)
B.fy_=new A.K(10,14,0.5)
B.fy0=new A.K(5,8,0.5)
B.fy1=new A.K(1.1,0.5,0.7)
B.fy2=new A.K(-20,11.5,0)
B.fy3=new A.K(0,-0.5,0.6)
B.fy4=new A.K(28,80,1.4)
B.fy5=new A.K(0,1.4,0)
B.fy6=new A.K(46,0.2,170)
B.fy8=new A.K(0,3.4,0.8)
B.fya=new A.K(-0.85,4,-3.2)
B.fyc=new A.K(40,7.2,1.2)
B.aQF=new A.K(0.42,0.34,0.12)
B.fyd=new A.K(1.7,0.08,1.2)
B.fye=new A.K(1.2,24,0.4)
B.fyf=new A.K(0,0,0.38)
B.fyh=new A.K(5.2,3.9,-7.76)
B.fyj=new A.K(2.6,0.45,0.5)
B.fyk=new A.K(0.07,0.3,0.03)
B.fym=new A.K(22,0.2,130)
B.fyo=new A.K(20,1.4,8)
B.fyp=new A.K(0,-0.2,0.19)
B.fyr=new A.K(1.2,49,36)
B.fys=new A.K(0,9.3,0)
B.fyu=new A.K(-120.5,108,-10)
B.fyv=new A.K(0,40,0.95)
B.fyx=new A.K(0,-1.9,-1.2)
B.fyy=new A.K(-3.2,1.15,-7.78)
B.fyz=new A.K(0,-3.4,1.2)
B.fyA=new A.K(64,10,0.2)
B.fyB=new A.K(0,-1.78,0.53)
B.aQG=new A.K(-6.5,7.4,-3)
B.fyC=new A.K(0,76,1.1)
B.fyD=new A.K(-4.6,-2,1.2)
B.fyF=new A.K(0,40,1.4)
B.fyG=new A.K(-3,36,10.6)
B.fyH=new A.K(0,14.5,-1.5)
B.fyI=new A.K(0,0.2,0)
B.fyK=new A.K(160,1.2,120)
B.fyL=new A.K(7,40,2.4)
B.fyM=new A.K(30,26,0.6)
B.fyN=new A.K(3.4,3.25,-7.85)
B.fyO=new A.K(1.12,0.5,0.62)
B.fyP=new A.K(72.8,0,55)
B.fyQ=new A.K(0.5,62,30)
B.fyR=new A.K(2.2,1.1,6.4)
B.fyS=new A.K(3,1.55,-7.1)
B.fyT=new A.K(0.4,3,3)
B.aQJ=new A.K(0,-0.1,0.1)
B.fyU=new A.K(0,0,0.04)
B.fyV=new A.K(2.4,11.6,-3.6)
B.fyW=new A.K(4,11,3.5)
B.fyY=new A.K(5,8.6,-2.25)
B.fyZ=new A.K(0,22,12.4)
B.fz_=new A.K(0,-1.78,0.3)
B.fz0=new A.K(2.2,2.2,1.8)
B.fz1=new A.K(0,1.9,-1.2)
B.fz2=new A.K(0,56,2.1)
B.fz3=new A.K(0.26,0.04,0.02)
B.fz4=new A.K(-2.4,11.6,-3.6)
B.fz5=new A.K(11.25,0,-2.25)
B.fz6=new A.K(1,-1.8,2.4)
B.fz7=new A.K(-11.8,4,0)
B.fz8=new A.K(11.2,4.7,-6)
B.fz9=new A.K(24,8,0.05)
B.fzb=new A.K(0.12,0,0)
B.fzc=new A.K(1.1,1.1,0.03)
B.fzd=new A.K(0,5,1.1)
B.fze=new A.K(20,1.2,0.4)
B.fzf=new A.K(3.4,3.55,-7.85)
B.fzh=new A.K(0,0.05,110)
B.fzi=new A.K(71.6,-22,62)
B.fzk=new A.K(1,1,0.62)
B.aQK=new A.K(1.5,18,3.5)
B.fzm=new A.K(3.5,3.1,-7.15)
B.fzn=new A.K(0,1.5,-0.9)
B.fzo=new A.K(-0.28,0.55,-0.8)
B.fzp=new A.K(0,-0.2,0.24000000000000002)
B.fzr=new A.K(0,-3.3,4)
B.aQL=new A.K(20,26,0.3)
B.fzs=new A.K(1,-0.2,0.14)
B.fzt=new A.K(-1.9,0,-2.25)
B.fzu=new A.K(0,-0.9,1.1)
B.fzv=new A.K(8.2,1.05,-6.7)
B.fzy=new A.K(0.07,0.4,0.03)
B.fzz=new A.K(2,3.8,0.08)
B.fzA=new A.K(31,83,0.9)
B.fzB=new A.K(64,40,-3.2)
B.fzC=new A.K(0.95,0.62,2.2)
B.aQM=new A.K(1.4,3,112)
B.fzD=new A.K(0,46.6,0.8)
B.fzF=new A.K(0,0,-8.8)
B.fzG=new A.K(0,0.7,-1)
B.fzJ=new A.K(-11.9,0,8)
B.fzK=new A.K(7,0,1.5)
B.fzL=new A.K(-90,0.05,130)
B.fzM=new A.K(-8.4,0.7,-6.4)
B.fzN=new A.K(-3.2,1.45,-7.78)
B.fzO=new A.K(0,41,0.45)
B.fzP=new A.K(-6.575,0,-0.25)
B.fzR=new A.K(0,14.6,-1.5)
B.aQO=new A.K(0,0,-2.3)
B.a7B=new A.K(-13,12.5,0)
B.fzT=new A.K(0,0,0.62)
B.fzU=new A.K(0.2,-0.3,-0.4)
B.aQP=new A.K(10.85,18,0.5)
B.fzV=new A.K(0.6,70,0.6)
B.fzW=new A.K(1.4,1.3,0.02)
B.fzX=new A.K(30,1.4,0.4)
B.fzY=new A.K(6.3,1.5,-7.2)
B.aQQ=new A.K(0,0.62,2.85)
B.aQR=new A.K(0.05,8,16)
B.fzZ=new A.K(0,-1.2,5)
B.fA0=new A.K(0.2,-2,2.6)
B.fA3=new A.K(11.2,2.4,-5.18)
B.fA5=new A.K(-1,-0.2,0.14)
B.fA6=new A.K(1.2,1.2,0.3)
B.aQT=new A.K(2,0.08,2.4)
B.fA8=new A.K(9.5,13.5,1.4)
B.fA9=new A.K(-0.32,0,0.5)
B.fAb=new A.K(1,0.8,0.95)
B.fAc=new A.K(0.8,0.55,0.05)
B.fAd=new A.K(0.14,0.35,17)
B.fAe=new A.K(1.4,2.4,0.3)
B.fAf=new A.K(0,11,8.2)
B.fAg=new A.K(0,24,-0.6)
B.fAh=new A.K(40,1.6,14)
B.fAk=new A.K(0,42,10.6)
B.fAl=new A.K(0,1.95,0.31)
B.fAm=new A.K(150,1.2,112)
B.aQU=new A.K(0.75,4.5,0.1)
B.fAo=new A.K(0.12,0,0.05)
B.fAq=new A.K(9,1.2,9)
B.fAr=new A.K(0,-0.5,0)
B.fAu=new A.K(5.5,8.5,0.5)
B.aQV=new A.K(0.05,8,9.6)
B.fAw=new A.K(1.5,94,3.5)
B.fAx=new A.K(0,8.2,0)
B.fAz=new A.K(4,94,0.4)
B.aQW=new A.K(1.4,8,1)
B.fAA=new A.K(3.7,1.2,-7.1)
B.fAB=new A.K(8.2,0.05,-6.7)
B.fAC=new A.K(0,-0.3,0)
B.fAD=new A.K(6.575,0,-0.25)
B.aQX=new A.K(0,1.8,0)
B.fAE=new A.K(3,3.21,-7.2)
B.fAG=new A.K(9.8,5,-7.75)
B.fAH=new A.K(1.5,3.5,112)
B.fAI=new A.K(3,1.85,-7.1)
B.a7D=new A.K(13,12.5,0)
B.fAN=new A.K(0.34,0.66,0.9)
B.fAP=new A.K(0.9,1.08,0.98)
B.fAQ=new A.K(12,0.4,6)
B.fAR=new A.K(-6.5,7.9,-3)
B.fAS=new A.K(0,13.6,-1.5)
B.fAT=new A.K(1.5,1.5,0.05)
B.fAU=new A.K(-6.5,5,-3)
B.fAV=new A.K(58.4,1.6,50)
B.fAW=new A.K(0.02,0.28,0.05)
B.fAX=new A.K(0,0.7,1)
B.aQZ=new A.K(13,8.6,9.5)
B.fAY=new A.K(-3.6,4,-7.76)
B.fAZ=new A.K(0.82,0.9,0.05)
B.fB_=new A.K(0,-5.5,-0.25)
B.fB4=new A.K(1.9,0,0)
B.fB5=new A.K(0.45,0.72,0.06)
B.fB7=new A.K(14,0.4,7)
B.fB8=new A.K(64,24,-3.2)
B.fB9=new A.K(0,9.2,0)
B.fBa=new A.K(0,0.03,0)
B.fBb=new A.K(-13,15,2)
B.fBc=new A.K(-14,17,4)
B.fBd=new A.K(-14,20,-28)
B.fBe=new A.K(-1,0,-8)
B.fBf=new A.K(-22,14,0)
B.fBh=new A.K(-37,16,0)
B.fBi=new A.K(-42,-34,96)
B.fBj=new A.K(0,-0.6,22)
B.aR_=new A.K(-4,20,8)
B.fBl=new A.K(-72,6,55)
B.fBm=new A.K(-8,-28,104)
B.fBn=new A.K(-8,-39,96)
B.fBo=new A.K(0,0.35,0.78)
B.fBp=new A.K(-11.9,0,-8)
B.fBq=new A.K(38,1.4,12)
B.fBr=new A.K(25,0.5,66)
B.fBs=new A.K(-8.4,1.9,-7.2)
B.fBt=new A.K(0.85,1.15,0.9)
B.fBv=new A.K(25,6,0.2)
B.fBw=new A.K(0,-0.6,100)
B.aR0=new A.K(1.25,1,0.1)
B.fBx=new A.K(11.2,0,-6)
B.fBy=new A.K(1.2,1.1,0.8)
B.fBA=new A.K(150,49,1.2)
B.fBB=new A.K(62,0.2,42)
B.fBC=new A.K(4.6,1.5,-3.6)
B.fBD=new A.K(0,-0.7,0.8)
B.fBE=new A.K(8.9,1.9,0.9)
B.fBF=new A.K(0,-1.55,-0.6)
B.fBG=new A.K(1.78,4.25,0.08)
B.fBH=new A.K(27,0.6,19)
B.fBI=new A.K(0,5.5,-0.25)
B.fBJ=new A.K(0,0.7,0)
B.fBK=new A.K(-1.2,-1.6,2.2)
B.fBL=new A.K(11,25,0.3)
B.aR1=new A.K(13,8.6,-9.5)
B.aR2=new A.K(0.05,0.12,0.03)
B.aR3=new A.K(8.2,0.95,-6.7)
B.fBM=new A.K(40,1.2,22)
B.fBN=new A.K(0.7,1.5,-7.2)
B.fBO=new A.K(0,15.3,-3.6)
B.fBP=new A.K(120.5,108,-10)
B.fBQ=new A.K(0.1,0,0)
B.fBR=new A.K(0.32,0,0.5)
B.fBS=new A.K(1.1,0.8,0.6)
B.fBU=new A.K(-0.9,0,4.4)
B.fBV=new A.K(-6.5,7.2,-3)
B.fBX=new A.K(6.2,0.18,2.1)
B.fBZ=new A.K(36,1.6,12)
B.fC_=new A.K(15.5,2.6,0)
B.fC1=new A.K(-8,-47.8,70)
B.fC2=new A.K(14,1.5,3.5)
B.aR4=new A.K(17,24,0.3)
B.fC3=new A.K(5.2,3.9,-7.82)
B.fC4=new A.K(0,0.7,2.4)
B.fC5=new A.K(0,0.3,0)
B.aR5=new A.K(2.3,7,0.5)
B.aR6=new A.K(-13,8.6,9.5)
B.fC9=new A.K(0,-1.99,0.14)
B.fCa=new A.K(0.4,36,34)
B.fCc=new A.K(4.6,-2,1.2)
B.aR7=new A.K(0,0,-2.4)
B.fCd=new A.K(0,-1.78,0.52)
B.fCe=new A.K(0.12,0.1,0.03)
B.fCf=new A.K(9.8,5,-7.58)
B.aR8=new A.K(0.5,1.4,2)
B.fCg=new A.K(3.5,0.15,-7.2)
B.fCh=new A.K(1.2,26.4,20)
B.fCi=new A.K(-3.6,4,-7.82)
B.fCj=new A.K(0.3,2,36)
B.fCl=new A.K(24,0.8,6.5)
B.fCn=new A.K(22,0.5,5)
B.fCo=new A.K(0,22,2.1)
B.fCr=new A.K(0,56,0.5)
B.fCs=new A.K(150,1.2,70)
B.fCt=new A.K(2.1,0.4,0.5)
B.fCu=new A.K(-19.5,-1,-1.5)
B.fCv=new A.K(80,0.5,60)
B.fCw=new A.K(6.85,4,-3.2)
B.fCx=new A.K(20,24,0.6)
B.fCy=new A.K(24,28,1.2)
B.aRa=new A.K(0.12,3,1.9)
B.fCz=new A.K(0.06,0.62,0.8)
B.fCA=new A.K(0,18.5,0)
B.fCC=new A.K(9.55,5.7,-7.5)
B.fCE=new A.K(0.8,2.4,0.3)
B.aRb=new A.K(0,0.7,2)
B.aRc=new A.K(1.5,16,40)
B.fCF=new A.K(0.8,1.1,1.2)
B.fCG=new A.K(0,47.25,-2.25)
B.fCH=new A.K(0.5,0.5,0.04)
B.fCI=new A.K(12.5,39,0.6)
B.fCJ=new A.K(0,3,0.9)
B.fCK=new A.K(3,36,10.6)
B.fCL=new A.K(25,10,0.2)
B.fCN=new A.K(0.14,8,0.3)
B.fCO=new A.K(1.9,0.05,1.35)
B.fCR=new A.K(0.6,0.12,0.03)
B.fCS=new A.K(-10.7,1.2,-6.4)
B.fCT=new A.K(-71.2,46.6,55)
B.fCU=new A.K(0,3.7,2.6)
B.fDr=new A.BK("noGround","It works, but there is no ground wire. Without a ground nothing protects you if an appliance fails.",!0,!1,!1)
B.fDs=new A.BK("short","A hot wire touched the ground. That is a short circuit: huge current, sparks and fire. The breaker slams off.",!1,!0,!0)
B.fDt=new A.BK("reversed","Hot and neutral are swapped (reversed polarity). Things still run, but the metal part of a lamp or appliance is live. That can shock someone. Black goes on brass, white on silver.",!0,!1,!1)
B.fDu=new A.BK("dead","The hot wire is not connected to the right place, so nothing gets power. The device is dead.",!1,!1,!1)
B.fDv=new A.BK("ok","Wired correctly. Hot, neutral and ground are all in the right place.",!0,!1,!1)
B.fDw=new A.BK("bonded","The neutral and the ground were joined. A GFCI or the breaker may trip for no reason, and current can flow where it should not.",!0,!0,!1)
B.fDx=new A.BK("openNeutral","The neutral wire is not connected. Nothing runs, but the hot wire is still connected, so the slots can still be live. That is dangerous.",!1,!1,!1)
B.fDy=new A.BK("dead","The wires are on the taped LOAD screws, so no power reaches the outlet. Power comes in on LINE.",!1,!1,!1)
B.fDz=new A.BK("short","The hot and the neutral were joined together. That is a short circuit: a bang, sparks and a tripped breaker.",!1,!0,!0)
B.ea4=new C.z(34,62)
B.fG9=new A.Jc(B.ea4,3.141592653589793,2.2,"Picking up the remote",!1,!0,!1,"")
B.e9C=new C.z(22,44)
B.fGa=new A.Jc(B.e9C,3.141592653589793,4,"Switching the ad on the big TV",!1,!0,!0,"ad")
B.fGi=new A.aza(null)})();(function staticFields(){$.aTD=null})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ibh","hl8",()=>C.a([A.aSl("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",B.PI,B.daq,"outlet",B.cIY,"Wall outlet",new A.fmS()),A.aSl("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",B.cWw,B.cJz,"switch",B.cHy,"Light switch",new A.fmT()),A.aSl("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",B.PI,B.cQH,"gfci",B.cZa,"GFCI outlet",new A.fmU()),A.aSl("Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.",B.PI,B.cHG,"light",B.d9w,"Ceiling light",new A.fmV()),A.aSl("A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.",B.PI,B.cHH,"fan",B.cOp,"Ceiling fan",new A.fmW())],C.ax("P<a3o>")))
w($,"ibs","Gd",()=>{var v,u=C.a([],x.n)
for(v=0;v<10;++v)u.push(-72+16*v)
return u})})()};
(a=>{a["CqdHjlQPCKkF/obZDK11807jus4="]=a.current})($__dart_deferred_initializers__);